# ICA · International Contract Agency

《杀手》（Hitman）系列中虚构组织「国际合同代理机构」的**考据型静态站点**。

把一个只存在于游戏台词与文档里的组织，做成一家看起来真在营业的企业官网——然后让访客在某个入口之后，看见它真正在做的事。

> *Merces Letifer* — 致命交易

**在线访问**：https://captain-op2008.github.io/ica-site/

## 两套界面

站点不是简单的一页式介绍，而是**两层叙事**：

| 层 | 入口 | 内容 |
|---|---|---|
| `corporate` | 默认打开 | 企业官网：服务、方法、客户、招聘 |
| `terminal` | 页面内隐藏入口（点击徽记 / 键盘 `contact`、`apply`） | 内部终端：真实档案库，19 个视图 |

层级状态记在 `localStorage`，视图名通过 hash 承载（如 `#agents`），因此可以直接分享深链。终端层进入时会播放一段合成音效，并与环境音引擎联动。

## 内容分区

终端层共 19 个视图，全部数据驱动：

`overview` · `org` · `agents` · `contracts` · `targets` · `locations` · `personae` · `providence` · `gear` · `poisons` · `disguises` · `timeline` · `assets` · `finance` · `facilities` · `setbacks` · `recruit` · `vault` · `sources`

其中 `sources` 列出全部考据来源，`vault` 是密级档案（含 ICAF 编号文档）。

## 本地运行

**方式一：直接双击 `index.html`。** 站点不依赖任何外部资源、不发起网络请求，`file://` 协议下完整可用（`tools/check-file-protocol.mjs` 专门校验这一点）。

**方式二：起本地服务器。**

```bash
node serve.mjs        # 默认 http://127.0.0.1:8742
node serve.mjs 3000   # 或指定端口
```

服务器只做静态文件分发，带路径穿越防护和 `no-store` 缓存头，用于验证 HTTP 协议下的行为。

## 目录结构

```
ica-site/
├─ index.html            单页入口：SVG 符号库 + 全部视图容器
├─ serve.mjs             本地静态预览服务器
├─ assets/
│  ├─ css/
│  │  ├─ base.css        变量、排版、色板（含对比度标注）
│  │  ├─ layout.css      栅格、层级、视图切换
│  │  ├─ components.css  组件样式
│  │  └─ effects.css     过渡与氛围效果
│  └─ js/
│     ├─ app.js          路由、层级切换、键盘交互
│     ├─ render.js       视图渲染
│     ├─ audio.js        Web Audio 实时合成（不加载音频文件）
│     └─ data-*.js       各视图数据模块（agents / gear / poisons …）
├─ research/
│  ├─ official-*.md      官方资料精炼整理（gear / locations / timeline）
│  └─ _body/             Fandom 词条正文抽取（本地存档，未纳入版本库）
└─ tools/                数据与渲染校验脚本
```

## 数据与考据

所有事实性内容标注出处等级：

- **标注 `src`** — 原文可查。来源为 Hitman Fandom 词条，经 Wayback Machine 存档（2024-12-20 快照）取回，避免实时抓取带来的漂移。
- **标注 `extrapolated`** — 按世界观补写，用于填补官方从未明说的空白（例如机构成立年份：官方年表与机构条目均未载明，站点显式说明这一点而非编造）。

`research/` 下的 `official-*.md` 是精炼后的人工整理稿；`research/_raw/` 存放原始抓取的 HTML/TXT（约 22MB），被 `.gitignore` 排除，只留本地作为溯源底稿。

## 校验工具

`tools/` 下是一组无依赖的 Node 脚本，用于保证内容一致性：

| 脚本 | 作用 |
|---|---|
| `check-data.mjs` | 数据模块结构与字段完整性 |
| `check-file-protocol.mjs` | 校验 `file://` 下无外部依赖、无失效引用 |
| `check-fonts.mjs` | 字体可用性与回退链 |
| `audit-render-coverage.mjs` | 数据条目是否都被渲染到 |
| `audit-depth.mjs` / `audit-narrative.mjs` | 内容深度与叙事一致性 |
| `extract-body.mjs` | 从 Fandom 存档抽取词条正文 |
| `gen-land.mjs` / `preview-land.mjs` | 地点数据生成与预览 |
| `find-dup-keys.mjs` / `map-facts.mjs` / `normalize-typography.mjs` | 重复键、事实映射、排版规范化 |

```bash
node tools/check-data.mjs
node tools/audit-render-coverage.mjs
```

## 技术说明

- **零依赖、零构建**：没有 `package.json`、没有打包步骤、没有 CDN 引用。改动保存即生效。
- **声音全部合成**：环境音与音效由 Web Audio API 实时生成，仓库里没有任何音频文件。
- **可访问性**：色板标注了对比度（如 `--cls-secret` 5.03:1）；密级印章使用 10px 以上字号保证可读。
- **跨平台换行**：`.gitattributes` 设置 `* text=auto`。

## 免责声明

本仓库是非商业性的同人作品。*Hitman* 系列、Agent 47、ICA 及相关角色与设定版权归 **IO Interactive A/S** 所有。站点中的"企业官网"与"内部终端"均为虚构叙事装置，不指向任何现实组织。

## License

内容与代码仅供学习与同人创作参考。转载考据结论请注明来源（见站点 `sources` 视图）。
