/* 渲染覆盖率审计：找出数据文件里"存在但从未被渲染"的内容。
   两类问题：
     A. 字段级——某字段存在于数据中，但 render.js 从不读取它。
        实例：data-setbacks.js 的 cost 条目带 what，但 cost 分支只调用 card()（渲染 desc），
        what 被静默丢弃；data-timeline.js 用 text 而渲染器读 t.body，导致 38 条正文全为 undefined。
     B. 数组级——某个具名数组从未被渲染层引用。
        实例：data-core.js 的 agents(19) / informants(1) / clientsNamed(13) / assets(7)
        在 render.js 中完全未被引用，用户看不到这些已采集的数据。

   用法：node tools/audit-render-coverage.mjs           仅报告问题
        node tools/audit-render-coverage.mjs --all      连同通过项一起列出
*/
import fs from 'node:fs';
import vm from 'node:vm';

const showAll = process.argv.includes('--all');

/* 这些字段是渲染层的基础设施，不进入正文，不算缺口 */
const STRUCTURAL = new Set(['id', 'kind', 'cat', 'group', 'severity', 'era', 'year', 'status']);

const FILES = [
  ['data-agents.js', 'ICA_AGENTS'],
  ['data-contracts.js', 'ICA_CONTRACTS'],
  ['data-locations.js', 'ICA_LOCATIONS'],
  ['data-gear.js', 'ICA_GEAR'],
  ['data-timeline.js', 'ICA_TIMELINE'],
  ['data-poisons.js', 'ICA_POISONS'],
  ['data-disguises.js', 'ICA_DISGUISES'],
  ['data-assets.js', 'ICA_ASSETS'],
  ['data-finance.js', 'ICA_FINANCE'],
  ['data-facilities.js', 'ICA_FACILITIES'],
  ['data-setbacks.js', 'ICA_SETBACKS'],
  ['data-titles.js', 'ICA_TITLES'],
  ['data-personae.js', 'ICA_PERSONAE'],
  ['data-targets.js', 'ICA_TARGETS'],
  ['data-iconic-gear.js', 'ICA_ICONIC_GEAR'],
  ['data-core.js', null]
];

const render = fs.readFileSync('assets/js/render.js', 'utf8');
const app = fs.readFileSync('assets/js/app.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');
const consumers = render + '\n' + app + '\n' + html;

/* 字段被引用的判定：出现 o.<field> / ['<field>'] / <field>: 形式的读取。
   为降低误报，同时接受通用渲染器里的动态读取。 */
function isReferenced(field) {
  if (STRUCTURAL.has(field)) return true;
  const pats = [
    new RegExp('\\.' + field + '\\b'),
    new RegExp("\\[['\"]" + field + "['\"]\\]"),
    new RegExp('\\b' + field + ':'),
  ];
  return pats.some(p => p.test(consumers));
}

/* 顶层具名数组是否被引用。判定要严于字段：必须出现 <ns>.<arr> 或裸 <arr> 标识符，
   仅出现同名字段（如 o.agents）不算。 */
function isArrayReferenced(ns, arr) {
  const pats = [
    new RegExp('\\b' + ns + '\\s*\\.\\s*' + arr + '\\b'),
    new RegExp('\\b' + arr + '\\b(?!\\s*:)'),
  ];
  return pats.some(p => p.test(consumers));
}

/* data-core.js 用 const 声明 ICA_CORE（词法声明，不会挂到 ctx 属性上），
   因此必须用 runInContext 求值，不能读 ctx 的自有属性。 */
const CORE_ARRAYS = [
  'board', 'divisionHeads', 'handlers', 'informants', 'agents',
  'shadows', 'units', 'dataFacilityRoles', 'vehicles',
  'clientOrgs', 'clientsNamed', 'assets', 'operations'
];

let fieldProblems = 0;
let arrayProblems = 0;

for (const [file, arrName] of FILES) {
  const code = fs.readFileSync('assets/js/' + file, 'utf8');

  /* ---------- data-core.js：数组级检查 ---------- */
  if (!arrName) {
    const ctx = {}; vm.createContext(ctx);
    console.log(`\n── ${file} · 顶层数组检查 ──`);
    try { vm.runInContext(code, ctx); } catch (e) { console.log(`  ✗ 无法求值 ${file}: ${e.message}`); continue; }
    let checked = 0;
    for (const k of CORE_ARRAYS) {
      let len = null;
      try {
        len = vm.runInContext(`Array.isArray(ICA_CORE.${k}) ? ICA_CORE.${k}.length : null`, ctx);
      } catch { continue; }
      if (len === null) continue;          // 该键不存在或不是数组
      checked++;
      if (!isArrayReferenced('c', k) && !isArrayReferenced('ICA_CORE', k)) {
        arrayProblems++;
        console.log(`  ✗ 数组 "ICA_CORE.${k}"（${len} 条）从未被渲染层引用`);
      } else if (showAll) {
        console.log(`  · ICA_CORE.${k}（${len} 条）已引用`);
      }
    }
    /* 对象型（非数组）的顶层键也检查一遍，避免漏掉单个对象 */
    let keys = [];
    try { keys = vm.runInContext('Object.keys(ICA_CORE)', ctx); } catch { /* ignore */ }
    for (const k of keys) {
      if (CORE_ARRAYS.includes(k)) continue;
      let isObj = false;
      try { isObj = vm.runInContext(`typeof ICA_CORE.${k} === 'object' && ICA_CORE.${k} !== null && !Array.isArray(ICA_CORE.${k})`, ctx); } catch { /* ignore */ }
      if (!isObj) continue;
      if (!isArrayReferenced('c', k) && !isArrayReferenced('ICA_CORE', k)) {
        arrayProblems++;
        console.log(`  ✗ 对象 "ICA_CORE.${k}" 从未被渲染层引用`);
      } else if (showAll) {
        console.log(`  · ICA_CORE.${k}（对象）已引用`);
      }
    }
    if (!checked && showAll) console.log('  （未取到数组）');
    continue;
  }

  /* ---------- 其余数据文件：字段级检查 ---------- */
  let arr;
  try {
    const ctx = {}; vm.createContext(ctx);
    arr = vm.runInContext(code + '\n;' + arrName + ';', ctx);
  } catch { continue; }
  if (!Array.isArray(arr)) continue;

  const fields = new Map();
  for (const o of arr) {
    if (!o || typeof o !== 'object') continue;
    for (const k of Object.keys(o)) {
      if (!fields.has(k)) fields.set(k, o.name || o.title || o.id || '(无名)');
    }
  }

  const orphan = [...fields].filter(([k]) => !isReferenced(k));
  if (orphan.length) {
    fieldProblems += orphan.length;
    console.log(`\n── ${file} · ${arr.length} 条 ──`);
    for (const [k, sample] of orphan) {
      console.log(`  ✗ 字段 "${k}" 未被渲染层引用（示例条目：${sample}）`);
    }
  } else if (showAll) {
    console.log(`\n── ${file} · ${arr.length} 条 · 全部 ${fields.size} 个字段均被引用 ──`);
  }
}

console.log(`\n${'='.repeat(56)}`);
if (fieldProblems === 0 && arrayProblems === 0) {
  console.log('✓ 无静默丢弃：所有字段与顶层数组都被渲染层引用');
} else {
  if (fieldProblems) console.log(`✗ ${fieldProblems} 个字段存在于数据中但从未被渲染（用户看不到）`);
  if (arrayProblems) console.log(`✗ ${arrayProblems} 个数组存在于数据中但从未被渲染（用户看不到）`);
}
process.exitCode = (fieldProblems + arrayProblems) === 0 ? 0 : 1;
