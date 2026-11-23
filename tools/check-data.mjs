/* ==========================================================================
   check-data.mjs — 数据文件语法与结构自检
   这些文件是经典脚本（非模块），没有 export。用 new Function 解析可捕获
   语法错误，再用 vm 取出数组，核对条目数、必填字段与 id 唯一性。
   用法：node tools/check-data.mjs
   ========================================================================== */
import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';

const DIR = new URL('../assets/js/', import.meta.url);

/* 每个数据文件 → 它导出的顶层常量名 */
const FILES = {
  'data-agents.js':    'ICA_AGENTS',
  'data-contracts.js': 'ICA_CONTRACTS',
  'data-gear.js':      'ICA_GEAR',
  'data-locations.js': 'ICA_LOCATIONS',
  'data-timeline.js':  'ICA_TIMELINE',
  'data-titles.js':    'ICA_TITLES',
  'data-land.js':      ['ICA_LAND', 'ICA_LAKES', 'ICA_GRAT', 'ICA_LABELS'],
  'data-core.js':      'ICA_CORE',
  'data-poisons.js':   'ICA_POISONS',
  'data-assets.js':    'ICA_ASSETS',
  'data-finance.js':   'ICA_FINANCE',
  'data-disguises.js': 'ICA_DISGUISES',
  'data-facilities.js':'ICA_FACILITIES',
  'data-setbacks.js':  'ICA_SETBACKS'
};

let fails = 0;
const rows = [];

for (const [file, consts] of Object.entries(FILES)) {
  const names = Array.isArray(consts) ? consts : [consts];
  let code;
  try { code = readFileSync(new URL(file, DIR), 'utf8'); }
  catch { console.log(`✗ ${file} 不存在`); fails++; continue; }

  /* 1) 语法 */
  try { new Function(code); }
  catch (e) { console.log(`✗ ${file} 语法错误：${e.message}`); fails++; continue; }

  /* 2) 取值 */
  const ctx = {};
  vm.createContext(ctx);
  const probe = names.map(n => `typeof ${n} !== 'undefined' ? ${n} : undefined`).join(',');
  let vals;
  try { vals = vm.runInContext(code + `\n;[${probe}];`, ctx); }
  catch (e) { console.log(`✗ ${file} 求值失败：${e.message}`); fails++; continue; }

  /* 3) 统计 */
  const parts = [];
  for (let i = 0; i < names.length; i++) {
    const v = vals[i];
    if (v === undefined) { console.log(`✗ ${file} 未定义常量 ${names[i]}`); fails++; continue; }
    if (Array.isArray(v)) {
      parts.push(`${names[i]} ${v.length}`);

      /* id 唯一性（若该数组条目带 id） */
      const ids = v.map(x => x && x.id).filter(Boolean);
      if (ids.length) {
        const dup = ids.filter((x, k) => ids.indexOf(x) !== k);
        if (dup.length) { console.log(`✗ ${file} ${names[i]} 重复 id：${[...new Set(dup)].join(', ')}`); fails++; }
      }

      /* name/nameEn 存在性抽查：新板块要求每个条目可读 */
      const missing = v.filter(x => x && typeof x === 'object' && !x.name && !x.title && !x.k && !x.no);
      if (missing.length) { console.log(`⚠ ${file} ${names[i]} 有 ${missing.length} 条缺少 name/title/k/no`); }
    } else if (v && typeof v === 'object') {
      parts.push(`${names[i]} {}`);
    }
  }
  rows.push([file, parts.join(' · '), (code.length / 1024).toFixed(1) + ' KB']);
}

console.log('\n文件'.padEnd(24) + '条目'.padEnd(30) + '体积');
console.log('-'.repeat(70));
for (const [f, p, s] of rows) console.log(f.padEnd(24) + p.padEnd(30) + s);
console.log('-'.repeat(70));
console.log(fails ? `\n✗ ${fails} 项失败` : '\n✓ 全部数据文件通过语法与结构自检');
process.exit(fails ? 1 : 0);
