/* 取服务器实际返回的头部与内容片段，确认是否为新版 CSS */
const url = process.argv[2] || 'http://127.0.0.1:8742/assets/css/layout.css';
const probe = process.argv[3] || 'padding:7px var(--sp-5)';

const res = await fetch(url, { cache: 'no-store' });
const buf = await res.text();
console.log('URL      ', url);
console.log('status   ', res.status);
for (const [k, v] of res.headers) console.log('  ' + k + ': ' + v);
console.log('bytes    ', Buffer.byteLength(buf, 'utf8'));
console.log('probe    ', JSON.stringify(probe), '→', buf.includes(probe) ? '✓ 存在' : '✗ 未找到');
if (buf.includes('.rail-link{')) {
  const i = buf.indexOf('.rail-link{');
  console.log('规则片段 :', buf.slice(i, i + 120).replace(/\s+/g, ' '));
}
