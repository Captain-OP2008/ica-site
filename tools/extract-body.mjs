/* ==========================================================================
   extract-body.mjs — 从 Fandom 存档文本里剥出文章正文
   research/_raw/*.txt 是 Wayback 存档的纯文本，含三层噪声：
     1. 页头（捕获时间轴）
     2. 全站导航（Games / Characters / Locations … 数百行短行）
     3. 页脚（Fandom 公司链接、分类列表）
   正文夹在 2 与 3 之间。导航块的判据是「短行连续出现」，正文段落则明显
   更长，据此切分，比按固定行号硬切稳健（各文件页头高度不同）。

   用法：node tools/extract-body.mjs <name> [<name> …]
         node tools/extract-body.mjs --list
   ========================================================================== */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';

const RAW = new URL('../research/_raw/', import.meta.url);
const OUT = new URL('../research/_body/', import.meta.url);

/** 正文段落：够长、以句子形态开头。分类栏（"Gameplay , Characters ,"）
    虽然也长，但第一个逗号出现在很前面，且不以句子开头，据此排除。 */
function isBodyParagraph(line) {
  const s = line.trim();
  if (s.length < 80) return false;
  if (!/^[A-Z0-9"'(]/.test(s)) return false;
  const firstComma = s.indexOf(',');
  if (firstComma !== -1 && firstComma < 40) return false;
  return true;
}

/** 页头噪声：Wayback 的捕获 URL、全站品牌行 —— 它们是长行，会冒充正文首段 */
function isHeaderNoise(line) {
  const s = line.trim();
  return /^The Wayback Machine/i.test(s)
      || /^https?:\/\//.test(s)
      || /^web\.archive\.org/i.test(s)
      || /^Start a Wiki$/i.test(s)
      || /^Sign In$/i.test(s)
      || /^Hitman Wiki$/i.test(s)
      || /^Explore$/i.test(s)
      || /^Fandom$/i.test(s)
      || /^\d+ captures$/i.test(s);
}

/** 一行算不算「导航行」：很短、且不像句子 */
function isNavLine(line) {
  const s = line.trim();
  if (!s) return true;
  /* Fandom 的小标题（Information [ ]、Gallery [ ]）属于正文结构，不是导航 */
  if (/\[\s*\]$/.test(s)) return false;
  if (s.length > 46) return false;
  /* 正文里的短句通常带标点；导航项基本是裸词 */
  if (/[.。！？!?;；:：]/.test(s)) return false;
  return true;
}

/** 起首的孤立标题行（如 "Disguise" / "Poison"），算正文的一部分 */
function isHeadingLine(line) {
  const s = line.trim();
  return s.length > 1 && s.length <= 46 && !/[.。！？!?;；:：]/.test(s);
}

/** 页脚起点：Fandom 模板文字，各文件一致 */
const FOOTER_MARKS = [
  'Community content is available under CC-BY-SA',
  'Explore properties',
  'Fandom Apps',
  'View Mobile Site',
  'Follow on IG'
];

function extract(text) {
  const lines = text.split('\n');

  /* --- 1) 定位正文：
         正文段落一定「长」（> 46 字符）。找到第一个长行后向前回溯，
         只吸收紧贴它的标题行（如 "Disguises are…" 上方的 "Disguise"），
         遇到导航行就停 —— 这样既保住定义段，又不会吃进导航。 --- */
  let firstLong = -1;
  for (let i = 0; i < lines.length; i++) {
    if (isHeaderNoise(lines[i])) continue;
    if (isBodyParagraph(lines[i])) { firstLong = i; break; }
  }
  if (firstLong === -1) return lines.join('\n').trim();

  let bodyStart = firstLong;
  let cur = firstLong;
  for (let i = firstLong - 1; i >= 0; i--) {
    const s = lines[i].trim();
    if (!s || isNavLine(s)) break;
    if (isHeadingLine(s)) cur = i;
    else break;
  }
  bodyStart = cur;

  /* --- 2) 找页脚起点 --- */
  let bodyEnd = lines.length;
  for (let i = bodyStart; i < lines.length; i++) {
    const s = lines[i].trim();
    if (FOOTER_MARKS.some(m => s.startsWith(m))) { bodyEnd = i; break; }
  }

  return lines.slice(bodyStart, bodyEnd).join('\n').trim();
}

mkdirSync(OUT, { recursive: true });
const args = process.argv.slice(2);

if (args[0] === '--list' || args.length === 0) {
  const txt = readdirSync(RAW).filter(f => f.endsWith('.txt')).sort();
  console.log(`${txt.length} 个素材：`);
  for (const f of txt) console.log('  ' + f.replace(/\.txt$/, ''));
  process.exit(0);
}

for (const name of args) {
  const src = new URL(name + '.txt', RAW);
  let text;
  try { text = readFileSync(src, 'utf8'); } catch { console.error(`✗ 找不到 ${name}.txt`); continue; }
  const body = extract(text);
  const dst = new URL(name + '.txt', OUT);
  writeFileSync(dst, body + '\n', 'utf8');
  const cn = (body.match(/[\u4e00-\u9fff]/g) || []).length;
  console.log(`${name.padEnd(24)} 原 ${String(text.length).padStart(6)} → 正文 ${String(body.length).padStart(6)} 字符（中文 ${cn}）`);
}
