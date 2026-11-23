/* file:// 兼容性静态复核：双击 index.html 必须能直接运行。
   检查所有会被浏览器在 file:// 下拒绝或无法加载的写法。
   用法：在 ica-site/ 目录下执行  node tools/check-file-protocol.mjs  */
import fs from 'node:fs';
import path from 'node:path';

const root = '.';
const problems = [];
const notes = [];

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

// 1. 绝对路径（以 / 开头的 src/href）
for (const m of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  const v = m[1];
  if (/^(https?:)?\/\//i.test(v)) {
    if (!v.startsWith('#')) problems.push(`外部资源（file:// 下需联网）: ${v}`);
  } else if (v.startsWith('/')) {
    problems.push(`绝对路径（file:// 下会指向磁盘根）: ${v}`);
  }
}

// 2. ES module / fetch / XHR / require
if (/type\s*=\s*"module"/i.test(html)) problems.push('使用了 type="module"（file:// 下被 CORS 阻止）');

const jsFiles = fs.readdirSync(path.join(root, 'assets/js')).filter(f => f.endsWith('.js'));
for (const f of jsFiles) {
  const src = fs.readFileSync(path.join(root, 'assets/js', f), 'utf8');
  if (/\bfetch\s*\(/.test(src)) problems.push(`${f}: 使用 fetch()`);
  if (/XMLHttpRequest/.test(src)) problems.push(`${f}: 使用 XMLHttpRequest`);
  if (/\brequire\s*\(/.test(src)) problems.push(`${f}: 使用 require()`);
  if (/^\s*import\s|^\s*export\s/m.test(src)) problems.push(`${f}: 使用 ES import/export`);
}

// 3. 引用的本地资源是否真实存在
for (const m of html.matchAll(/(?:src|href)="((?!https?:|\/\/|#|data:)[^"]+)"/g)) {
  const rel = m[1].split('?')[0].split('#')[0];
  if (!rel) continue;
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) problems.push(`引用的文件不存在: ${rel}`);
}

// 4. CSS 中的 url() 外部引用
for (const f of fs.readdirSync(path.join(root, 'assets/css')).filter(f => f.endsWith('.css'))) {
  const css = fs.readFileSync(path.join(root, 'assets/css', f), 'utf8');
  for (const m of css.matchAll(/url\(\s*['"]?([^'")]+)/g)) {
    const v = m[1].trim();
    if (/^(https?:)?\/\//i.test(v)) problems.push(`${f}: 外部 url() → ${v}`);
  }
}

// 5. 脚本加载顺序：data-* 必须在 render.js 之前
const scripts = [...html.matchAll(/<script src="assets\/js\/([^"]+)"/g)].map(m => m[1]);
const iRender = scripts.indexOf('render.js');
const iApp = scripts.indexOf('app.js');
const dataScripts = scripts.filter(s => s.startsWith('data-'));
for (const s of dataScripts) {
  if (scripts.indexOf(s) > iRender) problems.push(`加载顺序错误: ${s} 在 render.js 之后`);
}
if (iApp < iRender) problems.push('加载顺序错误: app.js 在 render.js 之前');

notes.push(`脚本 ${scripts.length} 个，data-* ${dataScripts.length} 个，顺序 ${iRender < iApp ? 'OK' : '错误'}`);
notes.push(`JS 文件 ${jsFiles.length} 个，CSS ${fs.readdirSync(path.join(root, 'assets/css')).filter(f => f.endsWith('.css')).length} 个`);

console.log('=== file:// 兼容性复核 ===');
console.log(notes.join('\n'));
console.log('');
if (problems.length) {
  console.log(`✗ 发现 ${problems.length} 处问题：`);
  problems.forEach(p => console.log('  · ' + p));
  process.exitCode = 1;
} else {
  console.log('✓ 无阻塞项：无绝对路径、无外部资源依赖、无 module/fetch/XHR/require，引用文件全部存在');
}
