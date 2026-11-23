import fs from 'node:fs';
import vm from 'node:vm';

/* 地点 ↔ 逐地图存档页 的对应关系；value 为 research/_raw 下的文件名 */
const MAP_PAGE = {
  '巴黎': 'paris.txt', '萨皮恩扎': 'sapienza.txt', '马拉喀什': 'marrakesh.txt',
  '曼谷': 'bangkok.txt', '迈阿密': 'miami.txt', '圣福图纳': 'santa-fortuna.txt',
  '孟买': 'mumbai.txt', '惠特尔顿溪': 'whittleton-creek.txt',
  '北海道': 'hokkaido.txt', '霍克斯湾': 'hawkes-bay.txt',
  '纽约': 'new-york.txt', '避风港岛': 'haven-island.txt', '迪拜': 'dubai.txt',
  '达特穆尔': 'dartmoor.txt', '柏林': 'berlin.txt', '重庆': 'chongqing.txt',
  '门多萨': 'mendoza.txt', '安布罗斯岛': 'ambrose-island.txt',
  'ICA 训练设施': 'ica-facility.txt', '安全屋': 'safehouse.txt'
};

const ctx = {}; vm.createContext(ctx);
const arr = vm.runInContext(fs.readFileSync('assets/js/data-locations.js', 'utf8') + '\n;ICA_LOCATIONS;', ctx);

console.log('地点'.padEnd(20) + 'desc字数  存档页              存档KB  可用');
console.log('-'.repeat(72));
let noSource = [];
arr.forEach(o => {
  const page = MAP_PAGE[o.name];
  let kb = '—', ok = '—';
  if (page && fs.existsSync('research/_raw/' + page)) {
    kb = (fs.statSync('research/_raw/' + page).size / 1024).toFixed(1);
    ok = '✓';
  } else if (!page) {
    ok = '无对应页';
  } else {
    ok = '✗ 缺档';
  }
  if (!page) noSource.push(o.name);
  console.log(
    (o.name || '').padEnd(20) +
    String((o.desc || '').length).padStart(6) + '    ' +
    (page || '—').padEnd(20) + String(kb).padStart(6) + '  ' + ok
  );
});
console.log('');
console.log('无逐地图存档页的地点（共 ' + noSource.length + '）: ' + noSource.join('、'));
