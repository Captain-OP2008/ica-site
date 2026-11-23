import fs from 'node:fs';
import vm from 'node:vm';
const ctx = {}; vm.createContext(ctx);
const arr = vm.runInContext(fs.readFileSync('assets/js/data-locations.js', 'utf8') + '\n;ICA_LOCATIONS;', ctx);
const want = (process.argv[2] || '').split('|').filter(Boolean);
arr.forEach((o, i) => {
  if (want.length && !want.includes(o.name)) return;
  console.log('#### [' + i + '] ' + o.name + '  ' + (o.nameEn || '') + '  era=' + o.era);
  console.log('desc(' + (o.desc || '').length + '): ' + (o.desc || ''));
  if (o.note) console.log('note(' + o.note.length + '): ' + o.note);
  console.log('targets: ' + JSON.stringify(o.targets));
  console.log('');
});
