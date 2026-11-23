/* preview-land.mjs — 把生成的陆地路径栅格化成 ASCII，用于文本化目视校验 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '..', 'assets', 'js', 'data-land.js'), 'utf8');
const json = src.match(/const ICA_LAND = \[([\s\S]*?)\n\];/)[1];
const paths = JSON.parse('[' + json.replace(/,\s*$/, '') + ']');

function parse(d) {
  const pts = [];
  for (const m of d.matchAll(/([ML])(-?[\d.]+),(-?[\d.]+)/g)) pts.push([+m[2], +m[3]]);
  return pts;
}
const polys = paths.map(parse);
const boxes = polys.map(p => {
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  for (const [x, y] of p) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  return { x0, y0, x1, y1 };
});

function inside(pt, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
}

const COLS = 150, ROWS = 54;
let land = 0;
const rows = [];
for (let r = 0; r < ROWS; r++) {
  let line = '';
  for (let c = 0; c < COLS; c++) {
    const x = (c + 0.5) / COLS * 2000, y = (r + 0.5) / ROWS * 1000;
    let hit = false;
    for (let i = 0; i < polys.length; i++) {
      const b = boxes[i];
      if (x < b.x0 || x > b.x1 || y < b.y0 || y > b.y1) continue;
      if (inside([x, y], polys[i])) { hit = true; break; }
    }
    if (hit) land++;
    line += hit ? '#' : '.';
  }
  rows.push(line);
}

console.log('陆地占比 ' + (land / (COLS * ROWS) * 100).toFixed(1) + '%   （真实地球约 29%）');
rows.forEach((l, r) => {
  const lat = Math.round(90 - (r + 0.5) / ROWS * 180);
  console.log(String(lat).padStart(4) + ' ' + l);
});
