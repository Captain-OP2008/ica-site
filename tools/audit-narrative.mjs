/* 聚焦叙述性字段的深度审计。
   audit-depth.mjs 会把 title / asset / target / method 这类"本就该短"的字段
   报成缺口，产生大量噪声。本脚本只检查真正需要厚度的叙述字段。 */
import fs from 'node:fs';
import vm from 'node:vm';

const THRESHOLD = 60;

/* 每个数据文件：数组名 + 需要检查的叙述字段 */
const TARGETS = [
  { file: 'data-contracts.js', arr: 'ICA_CONTRACTS', fields: ['note', 'desc'] },
  { file: 'data-gear.js',      arr: 'ICA_GEAR',      fields: ['desc', 'note'] },
  { file: 'data-agents.js',    arr: 'ICA_AGENTS',    fields: ['summary'], arrMin: 40 },
  { file: 'data-locations.js', arr: 'ICA_LOCATIONS', fields: ['desc', 'note'] },
  { file: 'data-timeline.js',  arr: 'ICA_TIMELINE',  fields: ['text'] },
  { file: 'data-poisons.js',   arr: 'ICA_POISONS',   fields: ['desc'] },
  { file: 'data-disguises.js', arr: 'ICA_DISGUISES', fields: ['desc'] },
  { file: 'data-assets.js',    arr: 'ICA_ASSETS',    fields: ['desc'] },
  { file: 'data-finance.js',   arr: 'ICA_FINANCE',   fields: ['desc'] },
  { file: 'data-facilities.js', arr: 'ICA_FACILITIES', fields: ['desc'] },
  { file: 'data-setbacks.js',  arr: 'ICA_SETBACKS',  fields: ['what', 'detail', 'desc'],
    /* setbacks 的 what 是**摘要**：深度处理时刻意压缩到一句，把细节全部
       下移到 detail[]（每条约 4–5 条结构化条目）。摘要短是去重的结果，
       不是缺口——但前提是 detail 确实足够厚，否则就是真的空。
       另：S-COST 条目走 losses + observation 分支，无 detail。 */
    summaryField: { field: 'what', backedBy: ['detail', 'losses'], min: 4 } }
];

/* 数组型字段里，这些是"条目名清单"（产品名、装备名），天然短，不检查 */
const NAME_LIST_KEYS = /^(items|variants|targets|perks|obtain|crossRef|available|support|features|losses|facts|gaps|rules)$/;
/* 只有这些数组字段是叙述性的，其元素应当有厚度 */
const NARRATIVE_ARRAY_KEYS = /^(detail|note|risks|protections|observations)$/;

/* 这些字段一旦非空，就说明该条目的正文内容由结构化详表承接，
   此时 desc/what 只是"导语"，短是设计而非缺口。
   例：「财务档案的空白」desc 仅 27 字，但 gaps 里有 6 条完整说明。
   注意：各板块的详表键名并不统一（effects / eras / missions / roomFacts …），
   因此这里采用通用规则——除纯名单字段外，任何非空数组或对象都视为承接。 */
const NOT_A_CARRIER = new Set([
  'items', 'variants', 'targets', 'perks', 'obtain', 'crossRef',
  'available', 'support', 'features', 'losses',
  'note', 'desc', 'summary', 'what', 'text', 'detail'
]);
/* 说明：note / detail 虽常为正文，但它们自身就是被检查对象，
   若把它们算作"承接 desc 的详表"，会让 desc+note 双短的条目互相遮掩。
   注意 facts / rules / gaps / eras / missions 等**是**承接字段——
   它们的名字看起来像清单，实际常承载完整说明
   （例：「遗留西装的代价」desc 55 字 + rules 4 条完整规则）。
   早期版本误把它们列入排除集，导致 3 条导语型条目被误报为缺口。 */

/* 已确认的空白：这些短字段是有意为之，不算缺口 */
const INTENTIONAL_SHORT = new Set([
  '纽约', '避风港岛', 'ICA 移动指挥中心', '研究设施 · 人类改良研究所', '巴黎'
]);

/* 分组类型说明：
   data-assets.js 里 group='category'/'case' 的条目是**分类卡**——
   它们的主体是 items 清单（21–51 个具体条目名），desc 只负责说明
   "这一类有多少、按什么分型、详情在哪一章"。
   items 是清单而非叙述，自然被排除在承接字段之外，
   因此这类条目的短 desc 是导语，必须单独判定，否则会被误报为缺口。 */
const CATALOG_GROUPS = new Set(['category', 'case']);

/* 该条目的正文是否由结构化详表承接（导语型条目） */
function hasCarrier(o) {
  if (o.group && CATALOG_GROUPS.has(o.group)) return true;
  return Object.entries(o).some(([k, v]) => {
    if (NOT_A_CARRIER.has(k)) return false;
    if (Array.isArray(v)) return v.length > 0;
    if (v && typeof v === 'object') return Object.keys(v).length > 0;
    return false;
  });
}

const PLACEHOLDER = /^(待定|待补|TODO|TBD|—|-|\?+|N\/A|无|未知)$/i;
let totalHoles = 0;
let totalIntros = 0;

for (const t of TARGETS) {
  const code = fs.readFileSync('assets/js/' + t.file, 'utf8');
  const ctx = {}; vm.createContext(ctx);
  const arr = vm.runInContext(code + '\n;' + t.arr + ';', ctx);

  const holes = [];
  const intros = [];
  for (const o of arr) {
    const label = o.name || o.title || o.id || '(无名)';
    const carrier = hasCarrier(o);
    for (const f of t.fields) {
      const v = o[f];
      if (v == null) continue;
      if (typeof v !== 'string') continue;
      if (PLACEHOLDER.test(v.trim())) { holes.push(`  · [占位符] ${label} · ${f} = "${v}"`); continue; }
      if (v.length < THRESHOLD) {
        if (INTENTIONAL_SHORT.has(label)) { intros.push(`  · [${v.length}] ${label} · ${f}（已确认空白·有意）`); continue; }
        /* 摘要字段：短是去重结果，前提是承接它的详表足够厚 */
        const sf = t.summaryField;
        if (sf && sf.field === f) {
          const backing = sf.backedBy.reduce((n, b) => n + (Array.isArray(o[b]) ? o[b].length : 0), 0);
          if (backing >= sf.min) { intros.push(`  · [${v.length}] ${label} · ${f}（摘要，正文见 ${sf.backedBy.join('/')} 共 ${backing} 条）`); continue; }
        }
        if (carrier) { intros.push(`  · [${v.length}] ${label} · ${f}（导语，正文见结构化详表）`); continue; }
        holes.push(`  · [短(${v.length})] ${label} · ${f}`);
      }
    }
    // 数组型叙述字段：只检查 detail / note，且用 arrMin 阈值
    const arrMin = t.arrMin || 25;
    for (const [k, v] of Object.entries(o)) {
      if (!Array.isArray(v)) continue;
      if (!NARRATIVE_ARRAY_KEYS.test(k)) continue;
      for (const item of v) {
        if (typeof item !== 'string') continue;   // 二元组 [标题, 说明] 不是叙述句
        if (item.length < arrMin) {
          holes.push(`  · [数组短(${item.length})] ${label} · ${k} → "${item}"`);
        }
      }
    }
  }

  totalHoles += holes.length;
  totalIntros += intros.length;
  console.log(`\n── ${t.file} · ${arr.length} 条 · 待补 ${holes.length} 处（另有 ${intros.length} 处导语/有意空白）──`);
  if (holes.length) console.log(holes.join('\n'));
  if (intros.length && process.argv.includes('--intros')) console.log(intros.join('\n'));
}

console.log(`\n${'='.repeat(56)}`);
console.log(`导语型/有意空白共 ${totalIntros} 处（不计为缺口，加 --intros 查看）`);
console.log(totalHoles === 0
  ? '✓ 所有叙述性字段均达标：无占位符，无未被结构化详表承接的短字段'
  : `✗ 仍有 ${totalHoles} 处真实缺口需补`);
process.exitCode = totalHoles === 0 ? 0 : 1;
