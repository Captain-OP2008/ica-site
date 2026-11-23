/* 校验字体栈：确认中文回退字体排在通用族之前（否则 Windows 上会被
   monospace -> Courier New 吃掉中文，回退成宋体） */
import { readFileSync } from 'node:fs';

const cssPath = new URL('../assets/css/base.css', import.meta.url);
const raw = readFileSync(cssPath);
const text = raw.toString('utf8');

/* BOM / 编码检查 */
const hasBOM = raw[0] === 0xEF && raw[1] === 0xBB && raw[2] === 0xBF;
const hasReplacement = text.includes('\uFFFD');

const CN_FONTS = ['"Microsoft YaHei UI"', '"Microsoft YaHei"'];
const GENERIC = ['monospace', 'sans-serif', 'serif'];
const BANNED = ['SimSun', '宋体', 'Songti', 'NSimSun', 'FangSong', 'KaiTi'];

let fail = 0;
const vars = [...text.matchAll(/--font-([a-z-]+)\s*:\s*([^;]+);/g)];

console.log(`base.css ${raw.length} 字节 · BOM=${hasBOM} · 乱码字符=${hasReplacement}\n`);

for (const [, name, value] of vars) {
  const stack = value.trim();
  const parts = stack.split(',').map(s => s.trim());
  const genericIdx = parts.findIndex(p => GENERIC.includes(p));
  const cnIdx = parts.findIndex(p => CN_FONTS.includes(p));
  const banned = BANNED.filter(b => stack.includes(b));

  /* 中文回退必须存在，且排在通用族之前 */
  const cnBeforeGeneric = cnIdx !== -1 && (genericIdx === -1 || cnIdx < genericIdx);
  const ok = cnBeforeGeneric && banned.length === 0;
  if (!ok) fail++;

  console.log(`--font-${name}  ${ok ? '✓' : '✗'}`);
  console.log(`   通用族位置 ${genericIdx === -1 ? '(无)' : genericIdx} · 中文字体位置 ${cnIdx}`);
  if (banned.length) console.log(`   ✗ 仍含宋体系字体：${banned.join(', ')}`);
  if (!cnBeforeGeneric) console.log(`   ✗ 中文回退未排在通用族之前`);
}

/* 全局：源码里不应再出现宋体系字体（先剥离注释，注释里提到「宋体」不算） */
const stripComments = s => s.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/[^\n]*/g, ' ');
const allCss = ['base', 'layout', 'components', 'effects']
  .map(f => stripComments(readFileSync(new URL(`../assets/css/${f}.css`, import.meta.url), 'utf8')))
  .join('\n');
const leftover = BANNED.filter(b => allCss.includes(b));
console.log(`\n全部 CSS 样式声明中的宋体系字体：${leftover.length ? leftover.join(', ') : '无'}`);
if (leftover.length) fail++;

/* 反向确认：每处 font-family 实际声明里都带上了中文字体 */
const famDecls = [...allCss.matchAll(/font-family\s*:\s*([^;}]+)/g)].map(m => m[1]);
const noCn = famDecls.filter(d => !CN_FONTS.some(f => d.includes(f)));
console.log(`font-family 声明共 ${famDecls.length} 处 · 其中未显式含中文字体的 ${noCn.length} 处（用变量引用属正常）`);

console.log(fail ? `\n✗ ${fail} 项未通过` : '\n✓ 字体栈校验通过');
process.exit(fail ? 1 : 0);
