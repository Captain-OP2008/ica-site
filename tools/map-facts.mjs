/* 从逐地图存档页中抽取可用事实，过滤 Fandom 导航噪声。
   用法：node tools/map-facts.mjs <档案名> [起始行] [结束行]
         node tools/map-facts.mjs --head <档案名>   （先看结构） */
import fs from 'node:fs';

const NAV = /^(Games|Characters|Cheats|Easter Eggs|Glitches|Locations|Missions|Soundtrack|Targets|Weapons|Community|Operators|Maintenance|Explore|FANDOM|Fan Central|Sign In|Register|Advertisement|Follow on|View Mobile|Categories|Required Reading|All Operators|Discord Server|Recent Blog Posts|Interactive Maps|World of Assassination|HITMAN|Codename 47|Silent Assassin|Blood Money|Absolution|Other media|Literature|Movies|Patches|Suits|Voice Actors|Game Updates|Syndicates|Safehouse|Challenges|Mastery|Smuggled Items|Starting Locations|Destinations|All Locations|Elusive Target|Contracts|Escalation|Featured Contracts|Freelancer|Community Portal|Missing pages|Uncategorized|Articles in need|Cleanup Procedure|Image Policy|Offenders Policy|Style Guide|Main Rules|Start a Wiki|Don't have an account|Current|Search|Explore Wikis|Community Central|About|Careers|Press|Terms of Use|Privacy Policy|Digital Services Act|Global Sitemap|Local Sitemap|Support|Help|Advertise|Media Kit|Contact|Fandom Apps|Take your favorite|What is Fandom)/i;

const args = process.argv.slice(2);
if (args[0] === '--head') {
  const f = 'research/_raw/' + args[1];
  const lines = fs.readFileSync(f, 'utf8').split(/\r?\n/);
  console.log('总行数 ' + lines.length);
  lines.forEach((l, i) => {
    const t = l.trim();
    // 找出所有像是"章节标题"的短行
    if (t.length > 1 && t.length < 40 && /^[A-Z][A-Za-z \u2019'\-()[\]]*$/.test(t)) {
      console.log(String(i + 1).padStart(5) + ': ' + t);
    }
  });
  process.exit(0);
}

const name = args[0];
const from = parseInt(args[1] || '1', 10);
const to = parseInt(args[2] || '99999', 10);
const lines = fs.readFileSync('research/_raw/' + name, 'utf8').split(/\r?\n/);

let blank = 0;
lines.forEach((l, i) => {
  const n = i + 1;
  if (n < from || n > to) return;
  const t = l.trim();
  if (!t) { blank++; return; }
  if (NAV.test(t)) return;
  if (t.length < 25) { blank++; return; }          // 导航碎行
  // 去掉重复的分类尾巴
  if (/^Categories\s*:/.test(t)) return;
  console.log(String(n).padStart(5) + ': ' + t);
});
