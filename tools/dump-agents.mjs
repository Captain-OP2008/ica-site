import fs from 'node:fs';
import vm from 'node:vm';
const ctx = {}; vm.createContext(ctx);
const arr = vm.runInContext(fs.readFileSync('assets/js/data-agents.js', 'utf8') + '\n;ICA_AGENTS;', ctx);
const want = (process.argv[2] || '').split('|').filter(Boolean);
arr.forEach(o => {
  if (want.length && !want.includes(o.name)) return;
  console.log('#### ' + o.name + '  [' + o.code + ']  ' + (o.nameEn || '') + '  cat=' + o.cat);
  console.log('summary(' + (o.summary || '').length + '): ' + (o.summary || ''));
  (o.detail || []).forEach((d, i) => console.log('  detail[' + i + '](' + d.length + '): ' + d));
  if (o.quote) console.log('quote: ' + o.quote);
  console.log('');
});
