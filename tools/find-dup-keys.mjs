import fs from 'node:fs';
const src = fs.readFileSync('assets/js/data-locations.js', 'utf8');
const re = /^  \{\n([\s\S]*?)^  \},?$/gm;
let m;
while ((m = re.exec(src))) {
  const body = m[1];
  const keys = [...body.matchAll(/^    (\w+):/gm)].map(x => x[1]);
  const seen = {};
  keys.forEach(k => { seen[k] = (seen[k] || 0) + 1; });
  const bad = Object.entries(seen).filter(([, v]) => v > 1).map(([k, v]) => k + ' ×' + v);
  if (bad.length) {
    const name = (body.match(/^    name: '([^']+)'/) || [, '?'])[1];
    const offset = m.index + src.slice(m.index).split('\n')[0].length;
    const lineNo = src.slice(0, m.index).split('\n').length;
    console.log('✗ ' + name + '  行 ' + lineNo + '  重复: ' + bad.join(', '));
    console.log(JSON.stringify(body.slice(0, 260)));
  }
}
console.log('检测完成');
