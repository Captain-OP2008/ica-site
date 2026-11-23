/* 排版值归一化：把散落的硬编码字号/字重收敛到设计令牌。
   动机：改版前全站实测 21 种字号、11 种字重，其中 520/560/620/630/640/650/660/680
   在多数中文字体上会回退到同一字面，等于写了没用；零碎字号则让层级看不出节奏。

   用法：
     node tools/normalize-typography.mjs          # 预览（不写盘）
     node tools/normalize-typography.mjs --write  # 实际写入
*/
import fs from 'node:fs';

const WRITE = process.argv.includes('--write');

/* 字号 → 令牌。9–10.5 都是微标签，统一到 10px；11–11.5 到 11px，依此类推。 */
const FS_MAP = {
  '9px': 'var(--fs-2xs)', '9.5px': 'var(--fs-2xs)',
  '10px': 'var(--fs-2xs)', '10.5px': 'var(--fs-2xs)',
  '11px': 'var(--fs-xs)', '11.5px': 'var(--fs-xs)',
  '12px': 'var(--fs-sm)', '12.5px': 'var(--fs-sm)',
  '13px': 'var(--fs-base)', '13.5px': 'var(--fs-base)',
  '14px': 'var(--fs-md)', '14.5px': 'var(--fs-md)',
  '15px': 'var(--fs-md)', '15.5px': 'var(--fs-md)',
  '16px': 'var(--fs-lg)', '16.5px': 'var(--fs-lg)', '17px': 'var(--fs-lg)',
  '19px': 'var(--fs-xl)', '20px': 'var(--fs-xl)',
  '23px': 'var(--fs-2xl)', '26px': 'var(--fs-2xl)',
  '29px': 'var(--fs-3xl)'
};

/* 字重 → 四档 */
const FW_MAP = {
  '400': 'var(--fw-normal)', '500': 'var(--fw-medium)', '520': 'var(--fw-medium)',
  '560': 'var(--fw-semibold)', '600': 'var(--fw-semibold)', '620': 'var(--fw-semibold)',
  '630': 'var(--fw-semibold)', '640': 'var(--fw-semibold)', '650': 'var(--fw-semibold)',
  '660': 'var(--fw-semibold)', '680': 'var(--fw-bold)', '700': 'var(--fw-bold)'
};

/* 行高 → 四档。改版前全站渲染出 21 种行高像素值，
   因为各处写了 1.7 / 1.72 / 1.75 / 1.78 这类近似值。
   标题用 1.2 而非更大的值——大字号的字身本身已提供视觉间距，
   行高再放大只会让标题松散。 */
const LH_MAP = {
  '1.1': 'var(--lh-tight)', '1.12': 'var(--lh-tight)', '1.14': 'var(--lh-tight)',
  '1.15': 'var(--lh-tight)', '1.16': 'var(--lh-tight)', '1.2': 'var(--lh-tight)',
  '1.22': 'var(--lh-tight)', '1.25': 'var(--lh-tight)',
  '1.28': 'var(--lh-snug)', '1.3': 'var(--lh-snug)', '1.4': 'var(--lh-snug)',
  '1.45': 'var(--lh-snug)', '1.5': 'var(--lh-snug)', '1.55': 'var(--lh-snug)',
  '1.6': 'var(--lh-snug)',
  '1.65': 'var(--lh-base)', '1.68': 'var(--lh-base)', '1.7': 'var(--lh-base)',
  '1.72': 'var(--lh-base)', '1.75': 'var(--lh-base)', '1.78': 'var(--lh-base)',
  '1.8': 'var(--lh-loose)', '1.82': 'var(--lh-loose)', '1.85': 'var(--lh-loose)',
  '1.9': 'var(--lh-loose)', '1.95': 'var(--lh-loose)'
};

/* 5px 是 SVG 海域标签（.map-labels .lb-sea），不是正文排版，跳过 */
const SKIP_FS = new Set(['5px']);

const FILES = [
  'assets/css/components.css',
  'assets/css/layout.css',
  'assets/css/effects.css',
  'index.html',
  'assets/js/render.js'
];

const report = [];
const outputs = new Map();

for (const file of FILES) {
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  const counts = { fs: 0, fw: 0, lh: 0 };

  /* 字号：只替换 font-size 声明里的 px 数值 */
  after = after.replace(/font-size\s*:\s*([\d.]+px)/g, (m, val) => {
    if (SKIP_FS.has(val)) return m;
    const tok = FS_MAP[val];
    if (!tok) return m;
    counts.fs++;
    return m.replace(val, tok);
  });

  /* 字重：只替换 font-weight 声明里的数值 */
  after = after.replace(/font-weight\s*:\s*(\d{3})(?![\d.])/g, (m, val) => {
    const tok = FW_MAP[val];
    if (!tok) return m;
    counts.fw++;
    return m.replace(val, tok);
  });

  /* 行高：只替换无单位倍数值；px 值与百分比等带单位的写法不动 */
  after = after.replace(/line-height\s*:\s*([\d.]+)(?![\d.])(?!\s*(?:px|%|em|rem))/g, (m, val) => {
    const tok = LH_MAP[val];
    if (!tok) return m;
    counts.lh++;
    return m.replace(val, tok);
  });

  outputs.set(file, { before, after, counts });
  if (after !== before) {
    report.push({ file, fs: counts.fs, fw: counts.fw, lh: counts.lh });
    if (WRITE) fs.writeFileSync(file, after, 'utf8');
  }
}

console.log(WRITE ? '=== 已写入 ===' : '=== 预览（加 --write 生效）===');
for (const r of report) {
  console.log(`  ${r.file.padEnd(30)} 字号 ${String(r.fs).padStart(3)} · 字重 ${String(r.fw).padStart(2)} · 行高 ${String(r.lh||0).padStart(2)}`);
}
console.log(`\n合计：字号 ${report.reduce((s, r) => s + r.fs, 0)} · 字重 ${report.reduce((s, r) => s + r.fw, 0)} · 行高 ${report.reduce((s, r) => s + (r.lh||0), 0)}`);

/* 残留检查：看的是"替换后应得的结果"，因此预览模式同样能验证 */
console.log('\n=== 替换后残留的硬编码值 ===');
let residual = 0;
for (const [file, { after }] of outputs) {
  for (const m of after.matchAll(/font-size\s*:\s*([\d.]+px)/g)) {
    if (SKIP_FS.has(m[1])) continue;
    console.log(`  ${file}: font-size:${m[1]}`);
    residual++;
  }
  for (const m of after.matchAll(/font-weight\s*:\s*(\d{3})(?![\d.])/g)) {
    console.log(`  ${file}: font-weight:${m[1]}`);
    residual++;
  }
  for (const m of after.matchAll(/line-height\s*:\s*([\d.]+)(?![\d.])/g)) {
    console.log(`  ${file}: line-height:${m[1]}`);
    residual++;
  }
}
if (!residual) console.log('  ✓ 无残留');
