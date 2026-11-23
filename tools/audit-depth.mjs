/* ==========================================================================
   audit-depth.mjs — 内容深度审计
   找出「结构完整但内容单薄」的条目：未填的占位符、过短的描述字段。
   用法：node tools/audit-depth.mjs [阈值，默认 40]
   ========================================================================== */
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const DIR = new URL('../assets/js/', import.meta.url);
const MIN = Number(process.argv[2] || 40);

const TARGETS = [
  ['data-contracts.js', 'ICA_CONTRACTS', ['title','note','method','asset','target']],
  ['data-gear.js',      'ICA_GEAR',      ['desc','note']],
  ['data-locations.js', 'ICA_LOCATIONS', ['desc','note']],
  ['data-agents.js',    'ICA_AGENTS',    ['summary']],
  ['data-timeline.js',  'ICA_TIMELINE',  ['body']]
];

const PLACEHOLDER = /^(待定|待补|TODO|TBD|—|-|\?+|N\/A|无|未知)$/i;

let grand = 0;
for (const [file, name, fields] of TARGETS) {
  const code = readFileSync(new URL(file, DIR), 'utf8');
  const ctx = {};
  vm.createContext(ctx);
  const arr = vm.runInContext(code + `\n;${name};`, ctx);
  if (!Array.isArray(arr)) { console.log(`✗ ${file} 不是数组`); continue; }

  const holes = [];
  for (const o of arr) {
    for (const f of fields) {
      const v = o[f];
      if (v === undefined || v === null) continue;
      const s = String(v).trim();
      const label = o.name || o.title || o.no || o.id || '?';
      if (PLACEHOLDER.test(s)) holes.push({ label, field: f, kind: '占位符', text: s });
      else if (s.length < MIN)  holes.push({ label, field: f, kind: `短(${s.length})`, text: s });
    }
  }

  console.log(`\n── ${file} · ${arr.length} 条 · 待补 ${holes.length} 处 ──`);
  if (!holes.length) { console.log('   （无）'); continue; }
  const byField = {};
  for (const h of holes) (byField[h.field] ||= []).push(h);
  for (const [f, hs] of Object.entries(byField)) {
    console.log(`  ${f}：${hs.length} 处`);
    for (const h of hs.slice(0, 60)) {
      console.log(`    · [${h.kind}] ${h.label}  →  ${h.text.slice(0, 46)}`);
    }
    if (hs.length > 60) console.log(`    … 另有 ${hs.length - 60} 处`);
  }
  grand += holes.length;
}
console.log(`\n合计待补：${grand} 处`);
