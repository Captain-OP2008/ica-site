import fs from 'node:fs';
const lines = fs.readFileSync('research/_raw/ica.txt', 'utf8').split(/\r?\n/);
// Determinant 型记录是定长分组：name / rank / division / position / status
// 逐块解析并打印，便于人工筛选
let i = 165;
const out = [];
while (i < 1600) {
  if (lines[i] && lines[i].trim() === 'Determinant') {
    const rec = [
      lines[i - 4], lines[i - 3], lines[i - 2], lines[i - 1], lines[i]
    ].map(s => (s || '').trim());
    out.push(rec);
  }
  i++;
}
console.log('共 ' + out.length + ' 条 Determinant 记录\n');
// 去重并只打印按状态排序
const seen = new Set();
out.forEach(r => {
  const k = r.join('|');
  if (seen.has(k)) return;
  seen.add(k);
});
// 只关心前 60 条（机构核心成员）
out.slice(0, 0);
console.log('=== 全部具名记录（name | rank | division | position | status）===');
const uniq = [...seen].map(k => k.split('|'));
uniq.forEach((r, n) => {
  console.log(String(n + 1).padStart(3) + '. ' + r[0].padEnd(26) + '| ' + r[1].padEnd(12) + '| ' + r[2].padEnd(26) + '| ' + r[3].padEnd(30) + '| ' + r[4]);
});
