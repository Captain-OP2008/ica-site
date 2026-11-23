/* ===========================================================================
   gen-land.mjs — 一次性生成器（不是站点运行时依赖）

   把 Natural Earth 110m 陆地轮廓（经 world-atlas 打包为 TopoJSON）转成
   render.js 用的 SVG 路径 + 地图标注，投影为等距圆柱（equirectangular）。

   用法：node tools/gen-land.mjs
   输出：tools/land-paths.generated.js
   =========================================================================== */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SRC = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json';

/* 地图内部坐标空间（保持 2:1，与等距圆柱投影一致） */
const W = 2000, H = 1000;

const res = await fetch(SRC);
if (!res.ok) throw new Error(`下载失败 HTTP ${res.status}`);
const topo = await res.json();

/* ---------- TopoJSON → 经纬度坐标 ---------- */
const { scale: sc, translate: tr } = topo.transform;

/** 解码单条 arc：delta 编码 + 量化 */
function decodeArc(arc) {
  let x = 0, y = 0;
  const out = [];
  for (const [dx, dy] of arc) {
    x += dx; y += dy;
    out.push([x * sc[0] + tr[0], y * sc[1] + tr[1]]);
  }
  return out;
}
const arcs = topo.arcs.map(decodeArc);

/** 把 arc 索引（可为负数，表示反向）拼成一条完整环的经纬度点列 */
function ringOf(indices) {
  const pts = [];
  for (const idx of indices) {
    const rev = idx < 0;
    const a = arcs[rev ? ~idx : idx];
    const seq = rev ? [...a].reverse() : a;
    for (let i = (pts.length ? 1 : 0); i < seq.length; i++) pts.push(seq[i]);
  }
  return pts;
}

const geom = topo.objects.land.geometries[0];
const polys = geom.type === 'MultiPolygon' ? geom.arcs : [geom.arcs];

/* ---------- 投影 + 生成路径 ---------- */
const px = lon => (lon + 180) / 360 * W;
const py = lat => (90 - lat) / 180 * H;

/** 低于该面积的环直接丢弃（微岛屿只会变成噪点） */
const MIN_AREA = 4;

function ringArea(pts) {
  let s = 0;
  for (let i = 0, n = pts.length; i < n; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % n];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s / 2);
}

/* 跨反经线伪影：Natural Earth 里个别碎片被从 -180° 接到 +180°，
   投影后就成了横贯全图、高度不足 1° 的一条假线段（例如北纬 71° 与南纬 16° 各一条）。
   真实地理不存在纬度跨度极小而经度跨越全图的陆地，据此剔除。 */
function isAntiMeridianArtifact(pts) {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  for (const [lon, lat] of pts) {
    if (lon < minLon) minLon = lon;
    if (lon > maxLon) maxLon = lon;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  }
  const lonSpan = maxLon - minLon;
  const latSpan = maxLat - minLat;
  return lonSpan > 350 && latSpan < 1;
}

/* 环内部的反经线跳变：同一条环里，相邻两点分别贴着 ±180°，
   连起来就是一条横贯全图的水平直线（真实海岸线不可能是直线）。
   isAntiMeridianArtifact 只看整环包围盒，抓不到这种「环内部」的跳变——
   实测欧亚大陆环（1320 点，跳变在 22 与 1318）正是用户看到的北部横线。
   正确处理是沿反经线把环切开，而不是删掉端点（删点会让阿拉斯加与
   西伯利亚之间连出一条很长的弦）。 */
const LON_JUMP = 180;
const lonOf = p => p[0];

function splitAntiMeridian(pts) {
  const work = pts;
  const parts = [];
  let start = 0;
  /* 只看内部相邻点：(n-1, 0) 是环的闭合边，不是几何跳变，不能当作切点。 */
  for (let i = 0; i < work.length - 1; i++) {
    if (Math.abs(lonOf(work[i]) - lonOf(work[i + 1])) > LON_JUMP) {
      const part = work.slice(start, i + 1);
      if (part.length >= 3) parts.push(part);
      start = i + 1;
    }
  }
  const tail = work.slice(start);
  if (tail.length >= 2) parts.push(tail);

  return parts.map(part => {
    /* 1) 连续化：沿顺序前向接续（相对「前一个点」判断，而不是相对中位数）。
          中位数在多处跳变的环上会算错基准，把整段经度推到 ±180 之外。 */
    let out = [part[0]];
    for (let k = 1; k < part.length; k++) {
      const prevLon = lonOf(part[k - 1]);
      let lon = lonOf(part[k]);
      if (lon - prevLon > LON_JUMP) lon -= 360;
      else if (prevLon - lon > LON_JUMP) lon += 360;
      out.push([lon, part[k][1]]);
    }

    /* 2) 收口：闭合边（末点 → 首点）若横跨图幅，闭合成环就是一条假直线。
          按反经线切分后的各片，端点都停在 ±180° 附近，这一条用于兜底。 */
    const first = out[0], last = out[out.length - 1];
    if (Math.abs(lonOf(first) - lonOf(last)) > LON_JUMP) {
      if (Math.abs(lonOf(last) + 180) <= Math.abs(lonOf(first) - 180)) {
        out[out.length - 1] = [-180, last[1]];
      } else {
        out[0] = [180, first[1]];
      }
      out = out.map(([lon, lat]) => [Math.max(-180, Math.min(180, lon)), lat]);
    }
    return out;
  });
}

/** 把点列转成紧凑的 SVG 路径（1 位小数，够用且体积小） */
function toPath(pts) {
  let d = '';
  let lx = null, ly = null;
  for (let i = 0; i < pts.length; i++) {
    const X = +px(pts[i][0]).toFixed(1);
    const Y = +py(pts[i][1]).toFixed(1);
    if (i === 0) d += `M${X},${Y}`;
    else if (X !== lx || Y !== ly) d += `L${X},${Y}`;
    lx = X; ly = Y;
  }
  return d + 'Z';
}

const landPaths = [], lakePaths = [];
let dropped = 0, points = 0, artifacts = 0, splitRings = 0, splitParts = 0, polarSkipped = 0;

/* 整环都在南纬 60° 以南的，只有南极洲。等距圆柱投影下它经度跨越 360°，
   环上必然出现一条横贯全图的假直线（南极点被拉成整条底边）——这正是用户
   两次要求删掉的那种横线，且无法通过调整投影参数消除。ICA 的据点和行动
   区域没有一处进入极圈，地图上也不需要南极洲，故整环跳过。 */
const SOUTH_LIMIT = -60;
function isPolarRingSouth(ring) {
  for (const p of ring) if (p[1] > SOUTH_LIMIT) return false;
  return true;
}

/* 内环 = 里海、五大湖、贝加尔湖之类，单独成组以便用不同颜色画。
   外环与内环都要先剔伪影、再过反经线切分，所以共用这一条路径。 */
function emit(ring, isLake) {
  if (isPolarRingSouth(ring)) { polarSkipped++; return; }
  const parts = splitAntiMeridian(ring);
  if (parts.length > 1) { splitRings++; splitParts += parts.length; }
  if (process.env.DEBUG_RING === '1' && !isLake && ring.length > 500) {
    const L = ring.map(p => p[0]);
    console.log(`[debug] 输入 点${ring.length} 经度 ${Math.min(...L).toFixed(1)}..${Math.max(...L).toFixed(1)} 首${L[0].toFixed(1)} 末${L[L.length - 1].toFixed(1)}`);
    parts.forEach((pt, i) => {
      const M = pt.map(q => q[0]);
      console.log(`[debug]   片${i} 点${pt.length} 经度 ${Math.min(...M).toFixed(1)}..${Math.max(...M).toFixed(1)} 首${M[0].toFixed(1)} 末${M[M.length - 1].toFixed(1)}`);
    });
  }
  for (const part of parts) {
    if (ringArea(part) < MIN_AREA) { dropped++; continue; }
    (isLake ? lakePaths : landPaths).push(toPath(part));
    points += part.length;
  }
}

for (const poly of polys) {
  for (let i = 0; i < poly.length; i++) {
    const ring = ringOf(poly[i]);
    if (isAntiMeridianArtifact(ring)) { artifacts++; continue; }
    emit(ring, i > 0);
  }
}

/* ---------- 经纬网（每 15°，主刻度加粗，赤道与本初子午线单独高亮） ---------- */
const grat = [];
for (let lon = -180; lon <= 180; lon += 15) {
  grat.push({ d: `M${px(lon).toFixed(1)},0V${H}`, major: lon % 30 === 0, prime: lon === 0 });
}
for (let lat = -75; lat <= 75; lat += 15) {
  grat.push({ d: `M0,${py(lat).toFixed(1)}H${W}`, major: lat % 30 === 0, prime: lat === 0 });
}

/* ---------- 标注：大洲 / 海洋 / 关键海域 ---------- */
/* kind: cont 大洲 · ocean 洋 · sea 海 · gulf 海湾 */
const seaLabels = [
  { t: 'NORTH AMERICA', lon: -100, lat: 45, kind: 'cont', size: 3.0 },
  { t: 'SOUTH AMERICA', lon: -58, lat: -14, kind: 'cont', size: 2.7 },
  { t: 'EUROPE', lon: 18, lat: 51, kind: 'cont', size: 2.1 },
  { t: 'AFRICA', lon: 20, lat: 4, kind: 'cont', size: 3.0 },
  { t: 'ASIA', lon: 90, lat: 48, kind: 'cont', size: 3.4 },
  { t: 'OCEANIA', lon: 134, lat: -26, kind: 'cont', size: 2.4 },

  { t: 'NORTH PACIFIC OCEAN', lon: -150, lat: 32, kind: 'ocean', size: 2.2 },
  { t: 'SOUTH PACIFIC OCEAN', lon: -118, lat: -32, kind: 'ocean', size: 2.2 },
  { t: 'NORTH ATLANTIC OCEAN', lon: -42, lat: 34, kind: 'ocean', size: 2.0 },
  { t: 'SOUTH ATLANTIC OCEAN', lon: -22, lat: -30, kind: 'ocean', size: 2.0 },
  { t: 'INDIAN OCEAN', lon: 76, lat: -26, kind: 'ocean', size: 2.2 },
  { t: 'ARCTIC OCEAN', lon: -20, lat: 82, kind: 'ocean', size: 1.9 },
  { t: 'SOUTHERN OCEAN', lon: 60, lat: -58, kind: 'ocean', size: 1.9 },

  { t: 'Mediterranean', lon: 17, lat: 35.5, kind: 'sea', size: 1.7 },
  { t: 'Black Sea', lon: 34, lat: 43, kind: 'sea', size: 1.5 },
  { t: 'Caspian Sea', lon: 51, lat: 42, kind: 'sea', size: 1.4 },
  { t: 'Red Sea', lon: 38, lat: 20, kind: 'sea', size: 1.4 },
  { t: 'Persian Gulf', lon: 51.5, lat: 27, kind: 'sea', size: 1.3 },
  { t: 'South China Sea', lon: 114, lat: 14, kind: 'sea', size: 1.5 },
  { t: 'Sea of Japan', lon: 135, lat: 40, kind: 'sea', size: 1.3 },
  { t: 'Caribbean Sea', lon: -75, lat: 15, kind: 'sea', size: 1.5 },
  { t: 'Gulf of Mexico', lon: -90, lat: 25, kind: 'sea', size: 1.5 },
  { t: 'Hudson Bay', lon: -85, lat: 60, kind: 'sea', size: 1.5 },
  { t: 'North Sea', lon: 3, lat: 56, kind: 'sea', size: 1.3 },
  { t: 'Baltic Sea', lon: 19, lat: 58, kind: 'sea', size: 1.3 },
  { t: 'Bay of Bengal', lon: 88, lat: 15, kind: 'sea', size: 1.4 },
  { t: 'Arabian Sea', lon: 63, lat: 15, kind: 'sea', size: 1.4 },
  { t: 'Coral Sea', lon: 155, lat: -18, kind: 'sea', size: 1.3 },
  { t: 'Tasman Sea', lon: 158, lat: -38, kind: 'sea', size: 1.3 },
  { t: 'Bering Sea', lon: -178, lat: 57, kind: 'sea', size: 1.3 },
  { t: 'Sea of Okhotsk', lon: 150, lat: 55, kind: 'sea', size: 1.3 }
];

const labels = seaLabels.map(l => ({
  t: l.t, x: +px(l.lon).toFixed(1), y: +py(l.lat).toFixed(1), kind: l.kind, size: l.size
}));

const body = `/* 由 tools/gen-land.mjs 生成 —— 请勿手工编辑。
   数据源：Natural Earth 110m 陆地轮廓（via world-atlas@2）
   坐标空间：${W} x ${H}，等距圆柱投影，经度 [-180,180]、纬度 [90,-90]
   陆地 ${landPaths.length} 环 · 湖泊内海 ${lakePaths.length} 环 · 顶点 ${points} 个 */

const ICA_LAND = [
${landPaths.map(p => '  ' + JSON.stringify(p)).join(',\n')}
];

const ICA_LAKES = [
${lakePaths.map(p => '  ' + JSON.stringify(p)).join(',\n')}
];

const ICA_GRAT = [
${grat.map(g => `  { d: ${JSON.stringify(g.d)}, major: ${g.major}, prime: ${!!g.prime} }`).join(',\n')}
];

const ICA_LABELS = [
${labels.map(l => `  { t: ${JSON.stringify(l.t)}, x: ${l.x}, y: ${l.y}, kind: ${JSON.stringify(l.kind)}, size: ${l.size} }`).join(',\n')}
];
`;

/* ---------- 自检：输出里不允许再有任何横贯图幅的水平跳变 ---------- */
function residualJumps() {
  const bad = [];
  const groups = [['land', landPaths], ['lake', lakePaths]];
  for (const [tag, arr] of groups) {
    arr.forEach((d, idx) => {
      const nums = d.match(/-?\d+(?:\.\d+)?/g) || [];
      const pts = [];
      for (let i = 0; i + 1 < nums.length; i += 2) pts.push([+nums[i], +nums[i + 1]]);
      for (let i = 0; i < pts.length; i++) {
        const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length];
        if (Math.abs(x2 - x1) > 900 && Math.abs(y2 - y1) < 8) {
          bad.push({ where: tag + '[' + idx + ']', at: i + '/' + pts.length, dx: Math.round(Math.abs(x2 - x1)), dy: +Math.abs(y2 - y1).toFixed(1), y: +y1.toFixed(1) });
        }
      }
    });
  }
  return bad;
}
const bad = residualJumps();

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'js', 'data-land.js');
writeFileSync(out, body, 'utf8');

console.log(`陆地 ${landPaths.length} 环（丢弃 ${dropped} 个微小环 · 剔除 ${artifacts} 个跨反经线伪影 · 跳过 ${polarSkipped} 个极地环） · 湖泊 ${lakePaths.length} 环 · 顶点 ${points}`);
console.log(`经纬网 ${grat.length} 条 · 标注 ${labels.length} 个`);
console.log(`反经线切分：${splitRings} 环 → ${splitParts} 片`);
if (bad.length) {
  console.error(`！！自检失败：仍有 ${bad.length} 处横贯图幅的水平跳变`);
  for (const b of bad.slice(0, 6)) console.error(`   ${b.where} 第 ${b.at} 点  dx=${b.dx} dy=${b.dy} y=${b.y}`);
  process.exit(1);
}
console.log('自检通过：无横贯图幅的水平跳变');
console.log(`写入 ${out}（${(body.length / 1024).toFixed(1)} KB）`);
