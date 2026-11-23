# 《杀手》系列地点研究文档（Hitman Fandom 原始资料结构化整理）

> 用途：为网站开发提供可转为 JS 数据文件的地点数据集。
> 数据来源：`ica-site/research/_raw/` 下已抓取的 Fandom 页面纯文本（.txt）与其原始网页（.html）。
> 整理原则：**只写原始页面中真实存在的内容**；页面未载明的字段一律写「未载明」，不做任何常识补全。
> 英文名称、任务名、人物名一律保留英文原文，中文仅作对照。

---

## 0. 使用说明与字段约定

### 0.1 数据来源文件清单（本文件实际引用）

| 文件 | 页面性质 | 本文用途 |
| --- | --- | --- |
| paris.txt | 地点页 | 巴黎地点事实 |
| sapienza.txt | 地点页 | 萨皮恩扎地点事实 |
| marrakesh.txt | 地点页 | 马拉喀什地点事实 |
| bangkok.txt | 地点页 | 曼谷地点事实 |
| colorado.txt | 地点页 | 科罗拉多地点事实 |
| hokkaido.txt | 地点页 | 北海道地点事实 |
| miami.txt | 地点页 | 迈阿密地点事实 |
| mumbai.txt | 地点页 | 孟买地点事实 |
| whittleton-creek.txt | 地点页 | 惠特尔顿溪地点事实 |
| dubai.txt | 地点页 | 迪拜地点事实 |
| dartmoor.txt | 地点页 | 达特穆尔地点事实 |
| berlin.txt | 地点页 | 柏林地点事实 |
| chongqing.txt | 地点页 | 重庆地点事实 |
| mendoza.txt | 地点页 | 门多萨地点事实 |
| carpathian-mountains.txt | 地点页 | 喀尔巴阡山脉地点事实 |
| hawkes-bay.txt | 地点页 | 霍克斯湾地点事实 |
| santa-fortuna.txt | 地点页 | 圣福图纳地点事实 |
| new-york.txt | 地点页 | 纽约地点事实 |
| haven-island.txt | 地点页 | 避风港岛地点事实 |
| ambrose-island.txt | 地点页 | 安布罗斯岛地点事实 |
| ica.txt | 组织页（International Contract Agency） | ICA 剧情线、ICA 设施、据点、目标背景 |
| providence.txt | 组织页（Providence） | Providence 剧情线、各地区行动人员与传令官（Herald）名单 |
| world-of-assassination.txt | 游戏总览页 | 地点—任务—主要目标对照、首登场作品分组 |
| ica-facility.txt | 地点页 | ICA Facility（训练设施） |
| safehouse.txt | 地点页 | Safehouse（Freelancer 安全屋） |
| cat-locations.txt | 分类页（Category:Locations） | 地点条目名索引（含未单独抓取页面的条目） |
| agent-47.txt | 角色页 | 惠特尔顿溪 / 斯盖尔岛剧情细节 |
| diana-burnwood.txt | 角色页 | 斯盖尔岛剧情细节 |
| lucas-grey.txt | 角色页 | 斯盖尔岛 / 柏林据点细节 |
| arthur-edwards.txt | 角色页 | 斯盖尔岛剧情细节 |
| hitman-timeline.txt | 时间线页 | 斯盖尔岛难寻目标细节 |

### 0.2 取值约定（供转 JS 时直接映射）

- `name_en`：表中「英文名」列，保留 Fandom 页面原始拼写（含变音符号，如 `Isle of Sgàil`）。
- `name_zh`：表中「中文名」列，使用游戏社区常用译名。
- `region`：表中「国家/城市」列，格式为「国家（地区）· 具体行政区/城市｜场景类型」。
- `lat` / `lon`：**数值型**十进制经纬度，用于 SVG 世界地图打点。
- `debut`：表中「首登场作品」列。
- `missions`：表中「任务名」列，多项以「；」分隔（正传任务在前）。
- `targets`：表中「主要目标」列，多项以「、」分隔；无数据时为字符串 `未载明`。
- 缺失值统一使用中文标记 **未载明**（表示来源页面未写明），便于脚本判定。

> 坐标为真实地理定位估算，非页面数据。
> 页面本身不提供任何经纬度字段；上表经纬度为按地点真实地理位置（或页面明确写出的现实对应地）估算的近似值，仅供地图打点使用。

> 目标与任务的对应关系说明：地点页（paris.txt、sapienza.txt 等）通常**只列任务名、不列目标姓名**；本表的「主要目标」来自 `world-of-assassination.txt` 的 **Main Targets** 小节与 **Missions / Locations** 小节的同游戏分组顺序对应，以及 `providence.txt` 的 Leaders / Heralds / Operatives / Assets 表格中的组织与身份信息。该页未把目标与任务逐条并列书写，对应关系按两表中同一作品的条目顺序推定，已在每个详述小节标注来源。

---

## 1. 地点总表

| 英文名 | 中文名 | 国家/城市 | 纬度 | 经度 | 首登场作品 | 任务名 | 主要目标 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Paris | 巴黎 | 法国 · 法兰西岛大区（Île-de-France），欧洲｜都会城市 + 时装秀会场（酒店/歌剧院/瓦莱夫斯卡宫） | 48.8566 | 2.3522 | Hitman: Contracts（该页载明的最早登场；三部曲中为 HITMAN™） | The Showstopper（HITMAN™）；Hunter and Hunted（Hitman: Contracts）；Curtains Down（Hitman: Blood Money）；Holiday Hoarders（奖励任务） | Viktor Novikov、Dalia Margolis |
| Sapienza | 萨皮恩扎 | 意大利 · 坎帕尼亚大区阿马尔菲海岸（Amalfi Coast, Campania），欧洲｜海滨小镇 + 别墅庄园 + 生物实验室 | 40.6340 | 14.6027 | HITMAN™ | World of Tomorrow（HITMAN™）；The Icon、Landslide（奖励任务）；The Author（Patient Zero 战役） | Silvio Caruso、Francesca De Santis；附加目标：摧毁 Ether 病毒（Ether Virus） |
| Marrakesh | 马拉喀什 | 摩洛哥 · 马拉喀什-萨菲大区（Marrakesh-Safi），非洲｜城市（集市/领事馆/被占学校） | 31.6295 | -7.9811 | HITMAN™ | A Gilded Cage（HITMAN™）；A House Built on Sand（奖励任务） | Reza Zaydan、Claus Hugo Strandberg |
| Bangkok | 曼谷 | 泰国 · 中部地区（Central Thailand），亚洲｜豪华酒店度假村 | 13.7563 | 100.5018 | HITMAN™ | Club 27（HITMAN™）；The Source（Patient Zero 战役） | Ken Morgan、Jordan Cross |
| Colorado | 科罗拉多 | 美国 · 科罗拉多州（农场/民兵营地），北美洲｜农场改装的私人武装民兵基地 | 39.5501 | -105.7821 | HITMAN™ | Freedom Fighters（HITMAN™）；The Vector（Patient Zero 战役） | Sean Rose、Maya Parvati、Penelope Graves、Ezra Berg |
| Hokkaido | 北海道 | 日本 · 北海道，亚洲｜雪山之巅的私人医院（GAMA） | 43.2203 | 142.8635 | HITMAN™ | Situs Inversus（HITMAN™）；Patient Zero（Patient Zero 战役）；Hokkaido Snow Festival（HITMAN™ 2） | Erich Soders、Yuki Yamazaki |
| Hawke's Bay | 霍克斯湾 | 新西兰 · 北岛东海岸霍克斯湾，大洋洲｜私人海滩豪宅（安全屋） | -39.4928 | 176.9120 | HITMAN™ 2 | Nightcall（HITMAN™ 2）；The Mills Reverie（升级契约/常驻活动） | Alma Reynard |
| Miami | 迈阿密 | 美国 · 佛罗里达州，北美洲｜赛车场（Global Innovation Race 赛事园区） | 25.7617 | -80.1918 | HITMAN™ 2 | The Finish Line（HITMAN™ 2）；A Silver Tongue（特别委托包 2） | Robert Knox、Sierra Knox |
| Santa Fortuna | 圣福图纳 | 哥伦比亚（虚构村庄，位于雨林深处），南美洲｜村庄 + 毒枭庄园 + 可卡因种植园 | 1.1500 | -76.6500 | HITMAN™ 2 | Three-Headed Serpent（HITMAN™ 2）；Embrace of the Serpent（特别委托包 1） | Rico Delgado、Andrea Martínez、Jorge Franco |
| Mumbai | 孟买 | 印度 · 马哈拉施特拉邦（Maharashtra），亚洲｜贫民窟街区 + 电影片场 + 铁路调车场 | 19.0760 | 72.8777 | HITMAN™ 2 | Chasing a Ghost（HITMAN™ 2）；Illusions of Grandeur（特别委托包 1） | Vanya Shah、Wazir Kale（The Maelstrom）、Dawood Rangan |
| Whittleton Creek | 惠特尔顿溪 | 美国 · 佛蒙特州（Vermont，虚构郊区），北美洲｜美式郊区住宅街区 | 44.2601 | -72.5754 | HITMAN™ 2 | Another Life（HITMAN™ 2）；A Bitter Pill（特别委托包 2） | Janus、Nolan Cassidy |
| Isle of Sgàil | 斯盖尔岛 | 北大西洋（页面标注为 North Atlantic）｜岛屿 + Ark Society 集会地 | 59.0000 | -3.0000 | HITMAN™ 2 | The Ark Society（HITMAN™ 2） | Sophia Washington、Zoe Washington |
| New York | 纽约 | 美国 · 纽约市，北美洲｜银行内部（Milton-Fitzpatrick 银行） | 40.7128 | -74.0060 | HITMAN™ 2（HITMAN™ 中仅被提及） | Golden Handshake（HITMAN™ 2） | Athena Savalas |
| Haven Island | 避风港岛 | 马尔代夫（虚构小岛），亚洲｜高端度假村（含私人岛与守卫庄园） | 3.2028 | 73.2207 | HITMAN™ 2 | The Last Resort（HITMAN™ 2） | Tyson Williams、Ljudmila Vetrova、Steven Bradley |
| Ambrose Island | 安布罗斯岛 | 安达曼-尼科巴群岛，安达曼海（Andaman and Nicobar Islands, Andaman Sea）｜热带岛屿 + 海盗/游击队控制区 | 10.5000 | 93.5000 | HITMAN™ 2（原发布于 HITMAN™ III） | Shadows in the Water（HITMAN™ 2） | 未载明 |
| Dubai | 迪拜 | 阿联酋 · 迪拜酋长国，亚洲｜摩天楼顶层（Burj Al-Ghazali） | 25.2048 | 55.2708 | HITMAN™ III | On Top of the World（HITMAN™ III） | Marcus Stuyvesant、Carl Ingram |
| Dartmoor | 达特穆尔 | 英国 · 英格兰德文郡（Devon, England），欧洲｜历史庄园（Thornbridge Manor）与庭园 | 50.5730 | -3.9000 | HITMAN™ III | Death in the Family（HITMAN™ III）；The Dartmoor Garden Show（常驻活动） | Alexa Carlisle |
| Berlin | 柏林 | 德国 · 柏林，欧洲｜核电站改造的夜店（Club Hölle） | 52.5200 | 13.4050 | HITMAN™ III（HITMAN™ 中仅被提及） | Apex Predator（HITMAN™ III）；Berlin Egg Hunt（季节性升级）；The Drop | ICA Agents（ICA 特工小队） |
| Chongqing | 重庆 | 中国 · 重庆渝中区（Yuzhong District），亚洲｜雨夜都市街区 + ICA 数据设施 | 29.5630 | 106.5516 | HITMAN™ III | End of an Era（HITMAN™ III） | Imogen Royce、Hush |
| Mendoza | 门多萨 | 阿根廷 · 门多萨省（Mendoza Province），南美洲｜酒庄与葡萄园（Viñedo Yates） | -32.8895 | -68.8458 | HITMAN™ III | The Farewell（HITMAN™ III）；The Envy Contention | Don Yates（Don Archibald Yates）、Tamara Vidal |
| Carpathian Mountains | 喀尔巴阡山脉 | 罗马尼亚 · 喀尔巴阡山脉，欧洲｜行驶中的改装列车（The Mortar） | 45.5000 | 25.3000 | HITMAN™ III | Untouchable（HITMAN™ III，三部曲终章） | Arthur Edwards |

> 坐标为真实地理定位估算，非页面数据。

### 1.1 总表来源对照（便于逐行溯源）

| 英文名 | 地点事实来源 | 任务名来源 | 主要目标来源 |
| --- | --- | --- | --- |
| Paris | paris.txt | paris.txt | world-of-assassination.txt、providence.txt |
| Sapienza | sapienza.txt | sapienza.txt | world-of-assassination.txt、providence.txt |
| Marrakesh | marrakesh.txt | marrakesh.txt | world-of-assassination.txt、providence.txt |
| Bangkok | bangkok.txt | bangkok.txt | world-of-assassination.txt、providence.txt |
| Colorado | colorado.txt | colorado.txt | world-of-assassination.txt、providence.txt |
| Hokkaido | hokkaido.txt | hokkaido.txt | world-of-assassination.txt、providence.txt |
| Hawke's Bay | hawkes-bay.txt | hawkes-bay.txt | world-of-assassination.txt、providence.txt |
| Miami | miami.txt | miami.txt | world-of-assassination.txt、providence.txt |
| Santa Fortuna | santa-fortuna.txt | santa-fortuna.txt | world-of-assassination.txt、providence.txt |
| Mumbai | mumbai.txt | mumbai.txt | world-of-assassination.txt、providence.txt |
| Whittleton Creek | whittleton-creek.txt | whittleton-creek.txt | world-of-assassination.txt、providence.txt |
| Isle of Sgàil | world-of-assassination.txt（地点页缺失） | world-of-assassination.txt | world-of-assassination.txt、providence.txt |
| New York | new-york.txt | new-york.txt | world-of-assassination.txt、providence.txt |
| Haven Island | haven-island.txt | haven-island.txt | world-of-assassination.txt、providence.txt |
| Ambrose Island | ambrose-island.txt | ambrose-island.txt | 未载明（页面未列目标姓名） |
| Dubai | dubai.txt | dubai.txt | world-of-assassination.txt、providence.txt |
| Dartmoor | dartmoor.txt | dartmoor.txt | world-of-assassination.txt、providence.txt |
| Berlin | berlin.txt | berlin.txt | world-of-assassination.txt（统称 ICA Agents）、ica.txt |
| Chongqing | chongqing.txt | chongqing.txt | world-of-assassination.txt |
| Mendoza | mendoza.txt | mendoza.txt | world-of-assassination.txt、providence.txt |
| Carpathian Mountains | carpathian-mountains.txt | carpathian-mountains.txt | world-of-assassination.txt、providence.txt |

---

## 2. 地点详述

### 2.1 巴黎（Paris）

- **定位**：法国首都，法兰西岛大区（Île-de-France, France, Europe）；场景类型为都会城市，任务主要发生在高级时装秀会场——瓦莱夫斯卡宫（Palais de Walewska），下辖子地点包括 Hotel、Garnier Opera House、Palais de Walewska（来源：paris.txt）。
- **环境与场景**：巴黎是法国的首都与人口最多的城市，也是欧洲的文化、金融与商业中心之一，拥有埃菲尔铁塔、卢浮宫、巴黎圣母院等著名地标，是全球访问量最大的旅游目的地之一，以美食与浪漫气息被称为「爱之城」（来源：paris.txt）。任务场景被描述为：巴黎邀请玩家进入由 Sanguine 举办的独家时装秀的浮华与魅力之中，会场设在瓦莱夫斯卡宫，由私人保镖（private bodyguards）负责安保（来源：paris.txt）。
- **首登场与任务**：页面载明的登场作品为 Hitman: Contracts、Hitman: Blood Money、HITMAN™、HITMAN™ 2（客串）、HITMAN™ III（客串）；对应任务分别为 Hunter and Hunted（Hitman: Contracts）、Curtains Down（Hitman: Blood Money）、The Showstopper（HITMAN™）、奖励任务 Holiday Hoarders，以及 The Forger、The Sensation、The Broker、The Black Hat、The Pharmacist、The Identity Thief、The Chef、The Blackmailer、The Paparazzo 等难寻目标（Elusive Targets）（来源：paris.txt）。
- **主要目标**：Viktor Novikov 与 Dalia Margolis（来源：world-of-assassination.txt）。两人在 Providence 页面中被列为该组织的资产（Assets）：Viktor Novikov 隶属 IAGO 与 Sanguine，身份为线人（Informant），状态已死亡；Dalia Margolis 曾属 Mossad，隶属 IAGO 与 Sanguine，身份同为线人，状态已死亡；IAGO 在 Providence 的附属组织表中列为由 Dalia Margolis 领导的间谍网络（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：巴黎是 HITMAN™ 序章之后按剧情顺序的第一场任务（来源：paris.txt）。ICA 在不知情的状态下承接了一批彼此关联的合同，地点横跨巴黎、意大利、马拉喀什与曼谷，委托方是一位「影子客户」（Shadow Client），其真实目的是借 ICA 之手清除与 Providence 有关的目标（来源：ica.txt）。Lucas Grey 正是从 IAGO 这一间谍网络获得了关于 Providence 行动的有限情报，并开始匿名向有意愿的各方通风报信，这些人随后成为 ICA 的客户（来源：providence.txt）。
- **来源**：paris.txt、providence.txt、ica.txt、world-of-assassination.txt。

### 2.2 萨皮恩扎（Sapienza）

- **定位**：意大利坎帕尼亚大区阿马尔菲海岸（Amalfi Coast, Campania, Italy, Europe）的小镇；场景类型为海滨旅游小镇 + 别墅庄园 + 生物科技实验室，子地点含 Villa Caruso、Sapienza Church、Morgue、Ether Biotech Corporation Field Lab、Townhall、Beach、ICA Safe House、Sanguine Store、Sapienza Ruins、Florist Shop、Hair Salon、Wine Shop 及若干公寓与商铺（来源：sapienza.txt）。
- **环境与场景**：萨皮恩扎是那不勒斯以南阿马尔菲海岸上的小镇，是热门旅游地，由商铺、公寓、餐厅和小咖啡馆组成，镇子尽头靠近一座小教堂设有公共海滩；最显著的地标是 Silvio Caruso 从其母亲 Isabella Caruso 处继承的多层宅邸 Villa Caruso（来源：sapienza.txt）。任务介绍写明：潜入阳光明媚的意大利海滨小镇萨皮恩扎，追捕 Silvio Caruso 并摧毁一种致命病毒（来源：sapienza.txt）。页面注明该镇并非意大利真实地点，很可能以北意大利利古里亚大区的五渔村（Cinque Terre）为原型，尤其是韦尔纳扎（Vernazza）（来源：sapienza.txt）。
- **首登场与任务**：HITMAN™；任务为 World of Tomorrow、奖励任务 The Icon 与 Landslide、Patient Zero 战役的 The Author；此外有难寻目标 The Badboy、The Congressman、The Prince、The Twin、The Wildcard、The Guru、The Deceivers（HITMAN™ 2），以及 Sarajevo Six 战役的 The Enforcer（来源：sapienza.txt）。
- **主要目标**：Silvio Caruso 与 Francesca De Santis（来源：world-of-assassination.txt）；附加目标是摧毁 Ether 病毒（来源：sapienza.txt 任务介绍、providence.txt）。两人在 Providence 页面中列为行动人员（Operatives）：Silvio Caruso 为 Ether Biotech Corporation 的生物工程师，Francesca De Santis 为 Ether 的科学家，状态均为已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：Providence 的行动在全球接连受挫，起因之一即在此地——Ether 公司作为 Providence 的掩护机构，正秘密研发「Ether 病毒」，这是一种可用于定点暗杀的 DNA 追踪生物制剂；病毒被摧毁，生物工程师 Silvio Caruso 与 Francesca De Santis 被清除，以确保病毒无法被复制（来源：providence.txt）。ICA 方面，多年后 47 被派去刺杀前 ICA 客户 Silvio Caruso 时，Diana 对杀死前客户几乎没有表现出任何顾虑（来源：ica.txt）。任务中亦包含 ICA 安全屋（ICA Safe House）这一子地点（来源：sapienza.txt）。
- **来源**：sapienza.txt、providence.txt、ica.txt、world-of-assassination.txt。

### 2.3 马拉喀什（Marrakesh）

- **定位**：摩洛哥马拉喀什-萨菲大区（Marrakesh-Safi, Morocco, Africa）；场景类型为北非城市，子地点包括 Bazaar（大集市）、Swedish Consulate（瑞典领事馆）、Abandoned School（被军方用作临时总部的废弃学校），以及若干可进入的商铺与屋顶（来源：marrakesh.txt）。
- **环境与场景**：马拉喀什常被称为「红城」，是北非与摩洛哥最重要的城市之一，因柏柏尔式建筑吸引大量游客，主要景点有库图比亚清真寺、萨阿德王朝陵墓与巴伊亚宫（来源：marrakesh.txt）。任务介绍写道：从繁忙的露天集市与水烟咖啡馆，到瑞典领事馆外要求正义的愤怒人群，马拉喀什为玩家提供窥视的快感与渗透的刺激（来源：marrakesh.txt）。在 A Gilded Cage 期间城市处于动荡状态：抗议人群威胁演变为骚乱，军队大量部署，部分街区与建筑被划为禁入区，军方正准备迎接一场重大冲突；而在 A House Built on Sand 期间城市明显平静，没有抗议者，军事存在缩减为少量巡逻，领事馆与学校内部不可进入（来源：marrakesh.txt）。
- **首登场与任务**：HITMAN™；任务为 A Gilded Cage（HITMAN™ 第三场剧情任务）与奖励任务 A House Built on Sand；难寻目标包括 The Entertainer、The Gunrunner、The Fixer、The Angel of Death，以及 Sarajevo Six 战役的 The Extractor（来源：marrakesh.txt）。
- **主要目标**：Reza Zaydan 与 Claus Hugo Strandberg（来源：world-of-assassination.txt）。两人在 Providence 页面中列为行动人员：Reza Zaydan 属摩洛哥皇家武装部队，身份为摩洛哥将军；Claus Hugo Strandberg 为 AMB 公司首席执行官；两人状态均为已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：Providence 曾试图在摩洛哥策动军事政变，由陆军将军、Providence 行动人员 Reza Zaydan 主导，计划通过煽动民众骚乱、再以国家安全名义发动政变来推翻拉巴特政府；但 Zaydan 与「激怒摩洛哥民众的银行家」Claus Hugo Strandberg 双双被清除，骚乱随之平息（来源：providence.txt）。该任务也是 ICA 在不知情下承接的影子客户关联合同之一（巴黎、意大利、马拉喀什、曼谷）（来源：ica.txt）。此外，Providence 行动人员名单中另有一位与本地相关的条目：Erik Olander，瑞典政府派驻马拉喀什总领事馆的领事，状态为在世（来源：providence.txt）；页面未载明他是否为任务目标。
- **来源**：marrakesh.txt、providence.txt、ica.txt、world-of-assassination.txt。

### 2.4 曼谷（Bangkok）

- **定位**：泰国中部地区（Central Thailand, Thailand, Asia）首都；场景类型为豪华酒店度假村，子地点包括 Himmapan Hotel、Downtown、Wat Arun、Chao Praya River（来源：bangkok.txt）。
- **环境与场景**：任务介绍为：Club 27 将玩家带入位于曼谷郊外湄南河畔的 Himmapan 豪华酒店度假村，体验其奢华与壮丽；可探索酒店精美的内部空间、欣赏装点酒店外部亭阁的热带花园，或在规划行动时眺望湄南河景色（来源：bangkok.txt）。曼谷在泰语中称 Krung Thep Maha Nakhon，是东南亚与东盟最重要的大城市之一，传统泰式建筑与现代建筑并存，是全球访问量最高的城市之一，也是游客热门的夜生活目的地（来源：bangkok.txt）。
- **首登场与任务**：HITMAN™；任务为 Club 27（HITMAN™ 第四场剧情任务）与 Patient Zero 战役的 The Source；难寻目标包括 The Ex-Dictator、The Warlord、The Food Critic，以及 Sarajevo Six 战役的 The Veteran（来源：bangkok.txt）。
- **主要目标**：Ken Morgan 与 Jordan Cross（来源：world-of-assassination.txt）。Providence 页面载明 Ken Morgan 为 Morgan, Yates & Kohn 事务所律师、Providence 行动人员，已死亡；Jordan Cross 的父亲 Thomas Cross 为 Cross Holdings 首席执行官、Providence 行动人员，已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：曼谷是 ICA 被影子客户操纵期间承接的关联合同地点之一（来源：ica.txt）。在 Jordan Cross 与 Ken Morgan 被刺杀后，Jordan 的父亲、隐居的传媒大亨 Thomas Cross 在随后的葬礼上被绑架，之后被发现中枪身亡；ICA 由此意识到这些合同都由一条神秘匿名线报串联，遂将该线报人命名为「影子客户」并开始追查其位置（来源：providence.txt）。
- **来源**：bangkok.txt、providence.txt、ica.txt、world-of-assassination.txt。

### 2.5 科罗拉多（Colorado）

- **定位**：美国科罗拉多州（United States of America, North America）；场景类型为农场改装的私人武装民兵基地，子地点为 Rusty Wheel Ranch（来源：colorado.txt）。
- **环境与场景**：科罗拉多是美国西部州，地貌多样，包括干旱沙漠、河谷峡谷与积雪的落基山脉，部分区域受落基山国家公园保护；梅萨维德国家公园有祖先普韦布洛人的崖居遗址；首府与最大城市丹佛位于海拔约一英里处，市中心充满活力（来源：colorado.txt）。剧情中该地是 Lucas Grey 的民兵所占据的「杏树农场」（apricot farm），由 Sean Rose 领导（来源：providence.txt）。
- **首登场与任务**：HITMAN™；任务为 Freedom Fighters（HITMAN™ 第五场主线任务）与 Patient Zero 战役的第三场任务 The Vector；难寻目标包括 The Chameleon、The Bookkeeper，以及已废弃（scrapped）的 The Conditioner，另有 Sarajevo Six 战役的 The Mercenary（来源：colorado.txt）。
- **主要目标**：Sean Rose、Maya Parvati、Penelope Graves、Ezra Berg（来源：world-of-assassination.txt）。页面载明该农场由 Sean Rose 领导，Rose 是已被登记的目标与知名恐怖分子；Providence 页面称 47 受命渗透农场并清除 Rose 及民兵的其他重要成员（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：Providence 与 ICA 接洽后，ICA 董事会成员、训练总监 Erich Soders 以「清除影子客户并交出 ICA 现役特工名单」为交换条件，索取一颗极为罕见的右位心脏（他患有内脏反位的 Situs Inversus，急需心脏移植）；Soders 循着一名黑客活动人士留下的线索，认定 Grey 的民兵藏身于科罗拉多的杏树农场，并推动董事会派 47 渗透并清除 Rose 等民兵要员；然而 47 与 Diana 在农场调查后发现，真正的影子客户针对的是被视作传说的 Providence，而 Erich Soders 本人是 Providence 的内线（来源：providence.txt）。ICA 董事会在意识到被操纵后，批准了对影子客户在科罗拉多的副手们的合同（来源：ica.txt）。
- **来源**：colorado.txt、providence.txt、ica.txt、world-of-assassination.txt。

### 2.6 北海道（Hokkaido）

- **定位**：日本北海道（Japan, Asia）；场景类型为雪山之巅的超高端私人医院，子地点为 GAMA Private Hospital（来源：hokkaido.txt）。
- **环境与场景**：任务介绍为：47 须前往日本北海道，入住位于雪峰之上、拥有开阔全景视野的超高端 GAMA 机构；该私人医院采用先进手术技术与研究实践，设有自有禅意庭园、有机寿司餐厅与传统的日式温泉，机构内运行着一套常驻 AI 系统以保障所有 GAMA 病人的健康与安全（来源：hokkaido.txt）。北海道是日本第二大岛、面积最大且最北的一级行政区，首府与最大城市为札幌，以火山、山脉与森林构成的景观闻名，岛内众多温泉每年吸引大量游客；游戏中的地点可能取材于北海道支笏湖周边的山地，地图背景中的山体则可能基于惠庭岳或羊蹄山（来源：hokkaido.txt）。
- **首登场与任务**：HITMAN™（并登场于 HITMAN™ 2）；任务为 Situs Inversus（HITMAN™ 第六场、按剧情顺序的最后一场任务）、Patient Zero 战役的 Patient Zero，以及 HITMAN™ 2 的 Hokkaido Snow Festival；难寻目标包括 The Surgeons、The Fugitive，Sarajevo Six 战役的 The Controller（来源：hokkaido.txt）。
- **主要目标**：Yuki Yamazaki 与 Erich Soders（来源：world-of-assassination.txt）。Erich Soders 为 ICA 前特工、前董事会成员，同时是 Providence 行动人员，已死亡；Yuki Yamazaki 为 Providence 律师，在传令官（Heralds）名单中列名，已死亡（来源：providence.txt、ica.txt）。
- **剧情要点（ICA / Providence）**：Erich Soders 被悄悄安排加急前往超高端医院 GAMA 接受关键的心脏手术；ICA 董事会对其背叛既愤怒又清楚他打算把 ICA 特工名单交给 Providence，于是要求 47 渗透医院并清除 Soders；Providence 律师 Yuki Yamazaki 当时也在医院内，因此同样被列为目标（来源：providence.txt）。ICA 页面亦载明：ICA 优先考虑机构自身的自主权，抢在 Soders 把现役特工名单交给他位于日本北海道的联络人 Yuki Yamazaki 之前，批准了对 Soders 的清除（来源：ica.txt）。此外，GAMA 机构负责人 Akira Nakamura 在 Providence 页面中列为行动人员，状态为在世（来源：providence.txt）。
- **来源**：hokkaido.txt、providence.txt、ica.txt、world-of-assassination.txt。

### 2.7 霍克斯湾（Hawke's Bay）

- **定位**：新西兰北岛东海岸的霍克斯湾地区（New Zealand, Oceania）；场景类型为私人海滩豪宅（安全屋），子地点为 Beach House，页面载明的居住者为 Alma Reynard 与 Orson Mills（来源：hawkes-bay.txt）。
- **环境与场景**：任务介绍为：任务将你带到新西兰霍克斯湾海岸月光下的海滩与涛声之中，可在月光下漫步，并在著名建筑师 Oscar Wong 设计的高度安保的豪华海滨别墅露台上过夜（来源：hawkes-bay.txt）。该地点在系列中相当独特：地形大体平坦开阔，地图上只有一栋可进入的完整建筑，即 Alma Reynard 的海滨别墅；海滩上覆盖着大片高草，可为玩家提供掩护；附近有一些木质废墟；由于是私人海滩，地图上没有普通平民（来源：hawkes-bay.txt）。此外，地图上还能找到大量浮木，岸边有一艘可作走私点的废弃旧船（来源：hawkes-bay.txt）。
- **首登场与任务**：HITMAN™ 2；任务为 Nightcall（HITMAN™ 2 首场任务）；另有难寻目标 The Politician 与 2019 年万圣节升级契约 The Mills Reverie（现为常驻活动）（来源：hawkes-bay.txt）。页面注明目前为止三部曲中该地图的所有变体（Nightcall、Mills Reverie 升级与难寻目标）都发生在夜间（来源：hawkes-bay.txt）。
- **主要目标**：Alma Reynard（来源：world-of-assassination.txt）。
- **剧情要点（ICA / Providence）**：ICA 董事会在一周后接受 Providence 作为客户，同意追查并清除影子客户及其私人武装；根据科罗拉多农场获得的情报，ICA 找到了民兵另一名关键成员 Alma Reynard 的位置；47 代表 Providence 潜入 Alma 位于霍克斯湾的海滨别墅，主要目的是寻找有关影子客户的线索——搜查未果，但 47 发现了 Alma 与 Robert Knox（Kronstadt Industries 首席执行官、Providence 成员）之间的一段对话，得知 Knox 及其女儿 Sierra 因民兵对同僚的袭击日益增多、担心遭到同样命运而选择背离 Providence；47 在撤离前清除了 Alma Reynard（来源：providence.txt）。柏林页面另载明，Alma Reynard 所属的私人武装小队曾在柏林刺杀保险业巨子、Providence 行动人员 Danziger（来源：berlin.txt、providence.txt）。
- **来源**：hawkes-bay.txt、providence.txt、berlin.txt、world-of-assassination.txt。

### 2.8 迈阿密（Miami）

- **定位**：美国佛罗里达州迈阿密（Florida, United States of America, North America）；场景类型为赛车赛事园区（Global Innovation Race）（来源：miami.txt）。
- **环境与场景**：任务介绍为：在阳光充沛的佛罗里达州迈阿密参加「全球创新赛车」（Global Innovation Race）的最后时刻——一场展示最新现代汽车设计的赛车盛事，与成千上万名兴奋的观众一同观赛（来源：miami.txt）。地图以赛事园区为舞台，包含醒目的赛道、看台、摊贩区、维修区（paddocks）、车手休息室等，以及最近被 Kronstadt Industries 收购的 Bayside Expo Center（来源：miami.txt）。页面在轶事中列举了迈阿密历史上多个街道赛道（Tamiami Park、Museum Park、Bayfront Park、Miami International Autodrome）作为灵感来源（来源：miami.txt）。
- **首登场与任务**：HITMAN™ 2；任务为 The Finish Line（HITMAN™ 2 第二场任务）、特别委托包 2 的 A Silver Tongue，以及难寻目标 The Undying 与 The Undying Returns（来源：miami.txt）。
- **主要目标**：Robert Knox 与 Sierra Knox（来源：world-of-assassination.txt）。Providence 页面载明：Robert Knox 为发明家、Kronstadt Industries 首席执行官，Sierra Knox 为发明家、Kronstadt Industries 首席财务官兼赛车手；两人均为 Providence 行动人员，状态为「叛离/已死亡」（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：在得知 Providence 成员开始考虑叛离后，The Constant 授权 ICA 以任何必要手段打击民兵；行动从「全球创新赛车」上叛离的 Knox 父女开始，47 与 Diana 随后展开一连串刺杀任务以削弱民兵（来源：providence.txt）。此外，难寻目标 The Gunrunner 的简报影片提到 Kronstadt Industries 总部设在柏林（来源：berlin.txt）。
- **来源**：miami.txt、providence.txt、berlin.txt、world-of-assassination.txt。

### 2.9 圣福图纳（Santa Fortuna）

- **定位**：哥伦比亚（Colombia, South America）虚构村庄；场景类型为雨林村落 + 毒枭庄园 + 可卡因种植园与贩毒潜艇港口（来源：santa-fortuna.txt）。
- **环境与场景**：任务介绍为：任务将带你前往深藏于茂密哥伦比亚雨林中的偏远村庄圣福图纳，村庄位于声名狼藉的 Delgado 庄园脚下，为游客提供从美丽瀑布、真正的灵魂之旅，到在本地酒吧与迷人渔夫共度时光的一切体验（来源：santa-fortuna.txt）。村内有许多房屋与小商铺、一个主广场、钓鱼码头与本地酒吧，以及一处建筑工地，全部处于 Delgado 贩毒集团（Delgado Drug Cartel）的铁腕统治之下，集团总部设在路上方的 Rico Delgado 豪华庄园；更隐蔽处还有庄园地下洞穴中的贩毒潜艇港口，以及雨林更深处的古柯田（来源：santa-fortuna.txt）。
- **首登场与任务**：HITMAN™ 2；任务为 Three-Headed Serpent（HITMAN™ 2 第三场任务）、难寻目标 The Revolutionary，以及特别委托包 1 的 Embrace of the Serpent（来源：santa-fortuna.txt）。
- **主要目标**：Rico Delgado、Andrea Martínez、Jorge Franco（来源：world-of-assassination.txt）；Providence 页面表述为「贩毒集团现任首领 Rico Delgado 及其两名副手」（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：ICA 将民兵的袭击模式与全球航运及运输路线比对后，发现这支私人武装正利用 Delgado 贩毒集团的水下运输网络悄悄把人员送往世界各地；为切断民兵的全球机动能力，47 前往圣福图纳刺杀集团现任首领 Rico Delgado 及其两名副手（来源：providence.txt）。Delgado 家族还为民兵制作假身份，其中包括后来被称为「The Maelstrom」的 Wazir Kale（来源：providence.txt）。尽管 Delgado 贩毒集团瓦解，针对 Providence 的袭击并未减少，越来越多的企业高管被谋杀并引发全球恐慌（来源：providence.txt）。
- **来源**：santa-fortuna.txt、providence.txt、world-of-assassination.txt。

### 2.10 孟买（Mumbai）

- **定位**：印度马哈拉施特拉邦孟买（Maharashtra, India, Asia）；场景类型为人口密集的特大城市街区——贫民窟、电影片场与铁路调车场，子地点包括 Rangan Tower、Slums、Shah's train yard（来源：mumbai.txt）。
- **环境与场景**：任务介绍为：孟买绰号「梦想之城」，对任何旅行者或执行任务的探员都是一场盛宴——在著名的贫民窟人群中迷失自己，或远远欣赏宝莱坞电影取景地，这座城市不会因它多彩的生活与无数隐藏的秘密而让人失望（来源：mumbai.txt）。游戏中的孟买是系列中较大的关卡之一，既广阔又密集，有众多拥挤曲折的贫民窟街道与狭窄隔间；这片城区由多个武装派系控制，最显眼的是由神秘的 Maelstrom 掌控的街头帮派 The Crows；一座废弃的铁路调车场与户外洗衣场是「Bandit Queen」Vanya Shah 的地盘；宝莱坞制片人 Dawood Rangan 则控制着尚未完工的 Rangan Tower 豪华公寓，那里目前是他电影《Mumbai Hero》的片场（来源：mumbai.txt）。由于城市被不同且常相互敌对的武装团体瓜分，没有任何一套伪装可以通行全图（来源：mumbai.txt）。
- **首登场与任务**：HITMAN™ 2；任务为 Chasing a Ghost（HITMAN™ 2 第四场任务）与特别委托包 1 的 Illusions of Grandeur（来源：mumbai.txt）。
- **主要目标**：Vanya Shah、Wazir Kale（The Maelstrom）、Dawood Rangan（来源：world-of-assassination.txt）。
- **剧情要点（ICA / Providence）**：民兵发布了一盘人质录像，向世界公开 Providence 的存在，ICA 分析人员随即追踪录像来源；与此同时 47 前往印度清除影子客户的「东方分支」；Providence 认为 The Maelstrom、Vanya Shah 与 Dawood Rangan 与 Providence 最新一名死亡行动人员——Ether 公司首席执行官——的谋杀有关，将他们清除属于最高优先级事项（来源：providence.txt）。Providence 页面另载明 Delgado 家族为民兵制作假身份，其中就包括 Wazir Kale，即更广为人知的 The Maelstrom（来源：providence.txt）。
- **来源**：mumbai.txt、providence.txt、world-of-assassination.txt。

### 2.11 惠特尔顿溪（Whittleton Creek）

- **定位**：美国佛蒙特州（Vermont, United States of America）虚构郊区；场景类型为典型美式郊区住宅街区，子地点包括 Batty / Cassidy / Griswold / Janus / Lewinsky / Schmidt / West / Wilson 等住宅、Construction Site、Muffin Stand、Protected Reservoir、Public Park、Statue、Whittleton Creek 等（来源：whittleton-creek.txt）。
- **环境与场景**：任务介绍为：欢迎来到完美无瑕的惠特尔顿溪——典型的美式郊区，体验两侧种满泛黄枫树的宽阔道路、精心修剪的前院，以及友善邻里在宁静周六里享受生活的美丽房屋（来源：whittleton-creek.txt）。该郊区居住着大学教职员与政府雇员等白领人士，主要由坐落于单一街区的私人住宅构成；东侧有公园等公共空间，南侧有一个带 Jonathan West 雕像的小广场；同名的溪流环绕地图东、南边界，沿岸是茂密灌木或修剪过的草地；溪流南岸似有一座风力发电场，另有两条道路通向区域外（来源：whittleton-creek.txt）。区内共有 14 处房产，其中 9 处以某种形式可供 47 进入：Cassidy、Griswold、Janus、Lewinsky、Schmidt、West、Wilson、Batty 与 Buck Property；除 Wilson 住宅因举办邻里聚会而对外开放外，各住宅及其花园、建筑工地与受保护水库均属私人区域，其余地图大体对公众开放；除穿制服的警察外，社区内还散布着大量便衣安保人员（来源：whittleton-creek.txt）。
- **首登场与任务**：HITMAN™ 2；任务为 Another Life（HITMAN™ 2 第五场任务）、特别委托包 2 的 A Bitter Pill，以及难寻目标 The Serial Killer（来源：whittleton-creek.txt）。
- **主要目标**：Janus 与 Nolan Cassidy（来源：world-of-assassination.txt）。Providence 页面载明：Janus 曾任 KGB 间谍头目，是 Providence 首任 Constant、Ark Society 联合创始人，状态已死亡；Nolan Cassidy 为传令官（Heralds）之一，已死亡（来源：providence.txt、lucas-grey.txt）。
- **剧情要点（ICA / Providence）**：Providence 与整个 ICA 都被一份假报告欺骗，该报告声称 Janus 与罗马尼亚的那所机构有关、才是真正的影子客户，而 Lucas Grey 只是名义上的头目；于是 Janus 以及被认定叛离 Providence 的 Nolan Cassidy 成为该合同的最新目标；但任务的真实目的是搜查 Janus 在惠特尔顿溪的住所，寻找 Janus 与其门徒可能见面的线索——47 由此发现 Janus 是 The Ark Society 的创始人，该组织每年举办一次富人与权贵的集会，为世界末日做准备，而 The Constant 每年都会现身，推测是为 Providence 物色新成员；尽管 Janus 被指背叛 Providence，Ark Society 的成员仍决定在下次集会上为他举行私人守灵，其棺木因此被追踪，最终确定了集会地点为斯盖尔岛（来源：providence.txt）。角色页补充：Diana 曾不情愿地同意向 ICA 提交虚假报告，声称在罗马尼亚线索中断并嫁祸 Janus 为民兵真正首领；47 随后被派往佛蒙特州惠特尔顿溪，在 Janus 的私人住宅中将其清除，并寻找连接 Janus 与 The Constant 的线索，同时受命清除 Janus 的 Providence 指派联络人 Nolan Cassidy，以确保他无法推翻提交给 Providence 的假报告；47 得知前任与现任 Constant 都将出席 2020 年 11 月 13 日的 Ark Society 年度晚会，Olivia Hall 也成功追踪 Janus 的棺木至北大西洋斯盖尔岛上的 Ark Society 会场（来源：agent-47.txt）。
- **来源**：whittleton-creek.txt、providence.txt、agent-47.txt、lucas-grey.txt、world-of-assassination.txt。

### 2.12 斯盖尔岛（Isle of Sgàil）

> **数据缺口提示**：本地点对应的原始页面 `isle-of-sgail.txt` / `isle-of-sgail.html` **在 `_raw/` 目录中不存在**（抓取清单里列有此页但未落盘）。因此本小节**没有来自地点页的场景描述**，以下内容全部来自其他已抓取页面，凡涉及地图场景细节者均标注为未载明。

- **定位**：北大西洋（North Atlantic）上的岛屿，页面标注为「Isle of Sgàil, North Atlantic」，国旗标识为苏格兰；场景类型为 Ark Society（方舟协会）的集会地与总部（来源：world-of-assassination.txt、lucas-grey.txt）。**具体地形、建筑与子地点：未载明**（地点页缺失）。
- **环境与场景**：仅能确认为北大西洋上的岛屿，是 Ark Society 的总部与年度集会地点；页面未描述其地形或建筑构成（来源：lucas-grey.txt、providence.txt）。集会性质为「富人与权贵的年度聚会，为世界末日做准备」（来源：providence.txt）。地点页缺失，故无更多场景信息。
- **首登场与任务**：HITMAN™ 2；任务为 The Ark Society（来源：world-of-assassination.txt）。该地图没有 Mission Stories（任务故事）（来源：ambrose-island.txt 轶事：与 Apex Predator、Untouchable 同为三张没有任务故事的地图）。
- **主要目标**：Sophia Washington 与 Zoe Washington（来源：world-of-assassination.txt）。Providence 页面载明两人为 Ark Society 的古代遗物猎人与联席主席（Chairwomen），同时是 Providence 行动人员，状态均为已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：由于 The Constant 与 Providence 合伙人之间的关系极度紧张，且多名行动人员接连死亡、首任 Constant 又被认为背叛，Alexa Carlisle 要求 The Constant 在颈部植入一枚毒药芯片作为保险，以防他被俘或叛变，The Constant 不情愿地接受了；两个月后，47、Diana 与 Grey 前往斯盖尔岛参加 Ark Society 集会，在发现 The Constant 体内被植入毒药芯片、且 Zoe 与 Sophia Washington 各持一枚可将其处死的遥控开关后，47 清除了这对双胞胎姐妹，Grey 则制服并带走了 The Constant（来源：providence.txt）。The Constant 随后在北大西洋一艘船上的椅中被唤醒，体内芯片已被手术取出，Grey 与 Diana 对其审讯，他交代了 Providence 的由来与创建家族（来源：providence.txt）。此事件也是 ICA 路线的转折点：47 与 Diana 在背着 ICA 行动的情况下，从斯盖尔岛绑架了 ICA 自己的客户 Edwards，以获知合伙人的姓名（来源：ica.txt）。另据时间线页，47 曾在斯盖尔岛的 Ark Society 年度集会上试图刺杀知名综合格斗选手「The Disruptor」，行动成功，但 The Disruptor 随后在北海道的 GAMA 机构被救活（来源：hitman-timeline.txt）。
- **来源**：world-of-assassination.txt、providence.txt、lucas-grey.txt、diana-burnwood.txt、arthur-edwards.txt、agent-47.txt、ica.txt、hitman-timeline.txt、ambrose-island.txt、cat-locations.txt。

### 2.13 纽约（New York）

- **定位**：美国纽约市（New York, United States of America, North America）；场景类型为银行内部（Milton-Fitzpatrick 银行），子地点包括 Teller Hall、Teller Ship、Lost and Found、Waiting Lounge、VIP Clients、Interview Room、Stock Market、Security Hub、Director's Office、Conference Room、Private Chambers、IT Room、Deposit Boxes、Vault Security、Loading Bay、Vault（来源：new-york.txt）。
- **环境与场景**：任务介绍为：47 的任务发生在纽约一个雨天，银行内正进行全面调查；他必须顺着钱的线索追查，并清除银行总监以完成目标（来源：new-york.txt）。纽约的登场范围限于 Milton-Fitzpatrick 银行内部：银行的主要公共空间是标志性的 Teller Hall，上方悬着一座华丽时钟，时钟之后即为总监办公室；下层向公众开放保险箱室，金库也位于此处，但金库区域仅限高层安保人员进入，附近还有一处金库装卸区可作撤离手段，银行 IT 部门也在这一层；上层为员工专属区域，包括接待客户的 VIP 区、交易员盯盘的 Stock Market、正在进行内部审计的 Conference Room，以及总监办公室与 Athena Savalas 的私人房间（来源：new-york.txt）。页面轶事载明：Providence 档案库（Providence Archive）就位于该市某处；Golden Handshake 是 HITMAN™ 2 中第一场完全发生在室内的任务，47 只能在撤离时接触银行外部，也是首个出现降雨的场景；Teller Hall 似乎取材于上西区的 Central Savings Bank 大楼（来源：new-york.txt）。
- **首登场与任务**：HITMAN™ 2（HITMAN™ 中仅被提及）；任务为 Golden Handshake（HITMAN™ 2 第八场任务）（来源：new-york.txt）。
- **主要目标**：Athena Savalas（来源：world-of-assassination.txt）。Providence 页面载明其为 Milton-Fitzpatrick 纽约分行总监、Providence 行动人员，已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：The Constant 建议「顺着钱走」——由于合伙人刚刚开始转换身份，他们在纽约 Milton-Fitzpatrick 银行的账户应当仍然完好；47 与 Grey 遂前往纽约，47 从银行窃取数据，并清除银行总监、Providence 行动人员 Athena Savalas 以掩盖行踪（来源：providence.txt）。该银行的背景亦与 Grey 的过往相关：Grey 在担任 Milton-Fitzpatrick 安保主管时发现其雇主、首席执行官 Eugene Cobb 是 Providence 行动人员，且是一名「持钥人」（key-bearer）——持有一把可进入该组织位于纽约的秘密档案库的钥匙；Grey 在一次跨太平洋商务行程中刺杀 Cobb、夺走钥匙并让飞机坠海伪装成事故，但档案库金库需要一对钥匙才能打开（来源：providence.txt）。The Constant 曾与 Milton-Fitzpatrick 新任首席执行官 Alexander Fanin 一同前往纽约检查金库，结果发现金库已被洗劫一空（来源：providence.txt）。
- **来源**：new-york.txt、providence.txt、world-of-assassination.txt。

### 2.14 避风港岛（Haven Island）

- **定位**：马尔代夫（Maldives, Asia）的虚构小岛；场景类型为高端度假村（Haven Resort），含一座对公众开放的主岛、一个小型私人岛以及一处偏僻且守卫森严的庄园（来源：haven-island.txt）。
- **环境与场景**：任务介绍为：欢迎来到避风港岛，这座私密的高端度假地专为富人与名人提供「声誉管理」服务——但它同时也藏着许多秘密（来源：haven-island.txt）。避风港岛是马尔代夫一座小型虚构岛屿，位于一个小型群岛之上，岛上是 Haven 公司拥有的偏远 Haven 度假村；该度假村以接待富人与名流著称，提供「声誉管理」的特殊服务；但在迷人的外表之下，度假村也接纳世界上最引人注目的罪犯，如神偷、骗子、犯罪集团头目甚至可能的恐怖分子，形形色色的可疑人物从世界各地来到这座岛屿天堂，目的就是消失（来源：haven-island.txt）。地理上，地图由一座对公众开放的主岛、一座禁止公众进入的小型私人岛，以及一处偏僻且重兵把守的庄园组成；远处可见若干无法抵达的外围岛屿与抛锚的豪华游艇；地图相当一部分区域位于浅水之下，便于潜入受保护区域、清除目标或藏匿尸体；随着任务推进，最终会形成伴有强风与闪电的大型热带风暴，但不会对玩家造成危险（来源：haven-island.txt）。
- **首登场与任务**：HITMAN™ 2；任务为 The Last Resort（HITMAN™ 2 第九场、也是最后一场任务）（来源：haven-island.txt）。
- **主要目标**：Tyson Williams、Ljudmila Vetrova、Steven Bradley（来源：world-of-assassination.txt）。Providence 页面的资产表载明：Tyson Williams 属 Haven，角色为「追踪者/消失制造者」（Tracker / Disappearer），已死亡；Ljudmila Vetrova 属 Haven，角色为追踪者/消失制造者/招募者，已死亡；Steven Bradley 属 Haven，角色为追踪者/消失制造者/黑客，已死亡；Haven 在附属组织表中列为由 Tyson Williams 领导（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：银行数据揭示合伙人的交易款流向一家在马尔代夫运营的小公司 Haven；47 前往避风港岛清除该公司三名负责人——他们当时正在执行迄今最大的一笔合同，推测是为合伙人服务；随着 Haven 的负责人被清除，Olivia Hall 得以侵入其服务器，取得合伙人位置的信息（来源：providence.txt）。页面亦载明本地点与萨皮恩扎存在一处细小的剧情联系：The Last Resort 中鸡尾酒吧附近的一位女性提到自己生意倒闭后大部分未售出的鞋子都去了萨皮恩扎，并疑惑这个镇子听起来像是编造的（来源：sapienza.txt）。
- **来源**：haven-island.txt、providence.txt、sapienza.txt、world-of-assassination.txt。

### 2.15 安布罗斯岛（Ambrose Island）

- **定位**：安达曼-尼科巴群岛、安达曼海（Andaman and Nicobar Islands, Andaman Sea）的虚构岛屿；场景类型为热带岛屿，含村庄、码头、民兵营地与洞穴网络（来源：ambrose-island.txt）。
- **环境与场景**：岛屿由崎岖地形构成，覆盖浓密的热带植被；内陆有高耸悬崖与深谷；地点包括多处村庄、码头、民兵营地与洞穴网络，狭窄小径蜿蜒穿过岩石内陆，地图若干部分部分位于水下；安布罗斯目前处于无政府状态，被不同派系的海盗与游击队控制；尽管如此，岛上仍有平民村庄，居民中甚至有几名喜爱冒险的大学生（来源：ambrose-island.txt）。任务简介显示该岛位于孟加拉湾东部水域、缅甸海岸西南方向，这与游戏内对话相互印证（来源：ambrose-island.txt）。
- **首登场与任务**：HITMAN™ 2（页面载明其最初作为 HITMAN™ III 的新地点于 2022 年 7 月加入，但按剧情时间线处于 HITMAN™ 2 期间；截至 2024 年，Io-Interactive 在合并为 World of Assassination 后已把安布罗斯岛内容全部移入 HITMAN™ 2 的菜单页面）；任务为 Shadows in the Water（HITMAN™ 2 第六场任务）（来源：ambrose-island.txt）。
- **主要目标**：未载明（地点页未列出任务目标姓名；其「Videos」「Gallery」段落中出现的说明文字为「Akka in Ambrose Island」，页面未说明 Akka 是否为目标）（来源：ambrose-island.txt）。
- **剧情要点（ICA / Providence）**：任务介绍为：以 47 的身份探索未知的安布罗斯岛，帮助一位老朋友纠正他的错误；这座热带岛屿是一处隐秘海湾，是危险的 pirate syndicate（海盗集团）在安得曼海的据点，也藏着许多秘密（来源：ambrose-island.txt）。轶事载明：该岛在 Wazir Kale 死前曾是他常去的港口之一；它也是三张没有 Mission Stories 的地图之一（另两张为 Apex Predator 与 Untouchable）（来源：ambrose-island.txt）。除此之外，页面未载明与 ICA 或 Providence 的直接关系。
- **来源**：ambrose-island.txt。

### 2.16 迪拜（Dubai）

- **定位**：阿联酋迪拜酋长国（Emirate of Dubai, United Arab Emirates, Asia）；场景类型为摩天楼顶层会场（Burj Al-Ghazali）（来源：dubai.txt）。
- **环境与场景**：任务介绍为：在「世界最高建筑」的开幕典礼上体验迪拜的宏伟与奢靡，加入兴奋的人群见证令人屏息的景色，探索这座精美建筑的顶层——无论内外（来源：dubai.txt）。任务范围涵盖 Burj Al-Ghazali 的顶层，玩家可以探索建筑各层，也能从外部攀爬（来源：dubai.txt）。迪拜是阿联酋的城市与酋长国，以奢侈品购物、超现代建筑与热闹的夜生活闻名；页面轶事载明任务所在的摩天楼灵感来自现实中的哈利法塔（Burj Khalifa）——世界最高的摩天大楼（来源：dubai.txt）。
- **首登场与任务**：HITMAN™ III；任务为 On Top of the World（HITMAN™ III 首场任务）；另有升级契约 The Asmodeus Waltz（仅豪华包）与 The Phoenix Ascension（当时仅 PS 平台），以及难寻目标 The Ascensionist（来源：dubai.txt）。
- **主要目标**：Marcus Stuyvesant 与 Carl Ingram（来源：world-of-assassination.txt）。Providence 页面载明两人均为 Providence 合伙人（Partners，最高首领）：Marcus Stuyvesant 为 Stuyvesant Company 首席执行官、Providence 合伙人（?–2020），已死亡；Carl Ingram 曾在美军服役（1973–1975）、任职美国国务院（1987–?），1995–2020 年任 Ingram Industries 首席执行官、1994–2020 年为 Providence 合伙人，已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：凭借从避风港岛取得的情报，47 与 Grey 前往迪拜，在 Burj Al-Ghazali 塔内清除前两位合伙人 Carl Ingram 与 Marcus Stuyvesant；不过 Alexa Carlisle 在片刻之前察觉 Arthur Edwards 已携合伙人的控股股份潜逃，因而成功逃脱（来源：providence.txt）。
- **来源**：dubai.txt、providence.txt、world-of-assassination.txt。

### 2.17 达特穆尔（Dartmoor）

- **定位**：英国英格兰德文郡南部地区（Devon, England, United Kingdom, Europe）；场景类型为历史庄园（Thornbridge Manor）及其庭园（来源：dartmoor.txt）。
- **环境与场景**：任务介绍为：前往达特穆尔历史悠久的 Thornbridge Manor，执行一场带有谋杀悬疑转折的任务——你可以选择自己的路线完成目标，也可以扮演侦探破解一桩谋杀案再清除目标，一石二鸟（来源：dartmoor.txt）。任务范围涵盖 Thornbridge Manor 及其庭园：这座庞大而舒展的宅邸紧邻一条河流，这条河及其支流划定了地产边界；地面上的显著特征包括树篱花园、温室，以及紧邻一座石造教堂废墟的墓地；有一条车道通往宅邸，但汇入河流的溪流可在几处浅滩涉水通过；与其它地图相比颇为特殊的是，这里没有地下室或其它地下区域（来源：dartmoor.txt）。
- **首登场与任务**：HITMAN™ III；任务为 Death in the Family（HITMAN™ III 第二场任务）与常驻活动 The Dartmoor Garden Show（来源：dartmoor.txt）。
- **主要目标**：Alexa Carlisle（来源：world-of-assassination.txt）。Providence 页面载明其全名 Alexa Christine Carlisle，为 Carlisle Group 首席执行官、Providence 合伙人（1988–2020），已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：Diana 追踪她至其家族位于英格兰达特穆尔的祖宅，47 在那里将其清除，并取回她关于 Edwards 的案卷，希望能从中找到他的下落（来源：providence.txt）。该地与 Providence 的起源直接相关：Providence 正式始于二战结束之后（最早可追溯到 1945 年），当时 Thomas Carlisle 在其位于英格兰达特穆尔的家族庄园召集了两位大学兄弟会旧友 Douglas Ingram 与 Eckhart Stuyvesant，把三大家族本已庞大的企业影响力汇集成一个能够在幕后统治世界的秘密社团（来源：providence.txt）。此外，Alexa Carlisle 是要求 The Constant 在颈部植入毒药芯片的人（来源：providence.txt）。
- **来源**：dartmoor.txt、providence.txt、world-of-assassination.txt。

### 2.18 柏林（Berlin）

- **定位**：德国首都柏林（Germany, Europe）；场景类型为夜店——位于树林外一座被改作他用的核电站内的 Club Hölle（来源：berlin.txt）。
- **环境与场景**：任务介绍为：前往柏林郊外——这座以童话、鲜明风格与混乱夜生活闻名的城市；无论你想找个地方静思休整，还是想体验史诗级狂欢带来的眩晕肾上腺素冲击，柏林都能满足，两者之间的一切也应有尽有（来源：berlin.txt）。Apex Predator 发生在该市树林外一座被改造为夜店的核电站内（Club Hölle）；季节性升级任务 Berlin Egg Hunt 发生在同一地点，但加入复活节主题装饰，并有若干区域变为完全禁入；The Drop 任务同样发生在柏林，但夜店已全面更换品牌并翻新，该任务发生在 47 与 Diana 开始以自由职业者身份行动之后的某个时间点（来源：berlin.txt）。
- **首登场与任务**：HITMAN™ III（HITMAN™ 中仅被提及，HITMAN™ 2 亦在列）；任务为 Apex Predator（HITMAN™ III 第三场任务）、Berlin Egg Hunt、The Drop（来源：berlin.txt）。
- **主要目标**：ICA Agents（ICA 特工小队）——`world-of-assassination.txt` 的 HITMAN™ III 主要目标列表对该地点直接写作「ICA Agents」，**未列出具体姓名**（来源：world-of-assassination.txt）。
- **剧情要点（ICA / Providence）**：Edwards 最终逃脱囚禁，并委托 ICA 对 47 与 Grey 的得力助手 Olivia Hall 下合同；尽管在柏林遭到 handler Jiao 与 Agent Montgomery 的刺杀小队伏击，47 仍清除了数名特工，既救下 Hall，也向 ICA 传递了一个信息（来源：ica.txt）。柏林与 Providence 网络另有数条关联：Alma Reynard 所属的私人武装小队曾在柏林刺杀保险业巨子、Providence 行动人员 Danziger；据难寻目标 The Gunrunner 的简报影片，Kronstadt Industries 总部设在柏林；多处 HITMAN™ 2 过场动画显示 Lucas Grey 的安全屋位于柏林（来源：berlin.txt、providence.txt）。角色页亦载明：Grey 回到柏林后研读了包括与 The Ark Society 有关的删节情报，并与 47 一同追忆过往（来源：lucas-grey.txt）。
- **来源**：berlin.txt、ica.txt、providence.txt、lucas-grey.txt、world-of-assassination.txt。

### 2.19 重庆（Chongqing）

- **定位**：中国西南部直辖市重庆（China, Asia）；场景类型为雨夜都市街区 + ICA 数据设施，任务范围涵盖渝中区的街道、蜿蜒小巷、公寓楼、屋顶、隧道与商铺（来源：chongqing.txt）。
- **环境与场景**：描述写道：在繁忙咖啡馆闪烁的霓虹灯下，在拥挤街道里鳞次栉比的小商铺与小食摊之间，重庆为旅人提供了逃离日常琐事的休憩之所；这座特大城市是交通枢纽，在常规路线之外还藏着许多秘密（来源：chongqing.txt）。任务范围为雨夜重庆渝中区的街道、蜿蜒小巷、公寓楼、屋顶、隧道与商铺（来源：chongqing.txt）。
- **首登场与任务**：HITMAN™ III；任务为 End of an Era（HITMAN™ III 第四场任务）（来源：chongqing.txt）。
- **主要目标**：Imogen Royce 与 Hush（来源：world-of-assassination.txt）。
- **剧情要点（ICA / Providence）**：ICA 后来成功入侵了 Hall 的电脑，47 判断唯一能阻止他们的办法就是将其彻底关停；为此他在 Hall 的协助下潜入位于中国重庆的 ICA 数据设施，通过一个黑客活动网站把该机构的存在泄露给全世界，同时掩盖自己与 Diana 的痕迹；该机构随后以「ICA Papers」之名在媒体上被曝光（来源：ica.txt）。ICA 页面另载明：董事会成员 Angus Pritchard 可在《杀手 3》的 End of an Era 任务中找到，穿上他的伪装可以进入 ICA 设施并完成名为 Certainty Principle 的任务故事（来源：ica.txt）；地点页图库中亦出现「Angus Pritchard's apartment」与「Red Dragon Restaurant」等场景说明（来源：chongqing.txt）。ICA 的单位列表中，ICA Data Facility 被列为「网络部门」（Cyber Division），其角色包括 Facility Guard、Facility Analyst、Facility Engineer、Facility Security、Researcher、Street Guard、Block Guard（来源：ica.txt）。就组织架构而言，ICA 主要基于云端运作，除少数关键产业外不设办公室，其中之一就是位于中国的数据存储站点（来源：ica.txt）。
- **来源**：chongqing.txt、ica.txt、world-of-assassination.txt。

### 2.20 门多萨（Mendoza）

- **定位**：阿根廷门多萨省（Mendoza Province, Argentina, South America），位于该国中西部、与智利接壤；场景类型为酒庄与葡萄园（Viñedo Yates）（来源：mendoza.txt）。
- **环境与场景**：任务介绍为：作为南美洲最著名的葡萄酒产区之一，门多萨是感受阿根廷美景与风味的完美之地，从起伏的山坡到现代葡萄园，有大量值得探索的空间（来源：mendoza.txt）。任务范围由 Viñedo Yates 的酒庄与葡萄园构成；The Farewell 中 Don Yates 的退休派对有超过 200 人参加，考虑到 Yates 作为 Providence 传令官、以及曾是合伙人法律顾问所结交的朋友类型，这些人大多是精英或至交；派对规模庞大，横跨整整两层，布满奢华植物、餐桌、厨师，甚至有侍者直接从葡萄园取酒奉上；地图北侧有一个巨大的湖泊，整张地图被高山与美丽的落日环绕（来源：mendoza.txt）。Yates 住宅下方有一间秘密餐厅，用于 The Farewell 中的 Providence 会议；另有一个保险箱存放与 Don Yates 过往关系有关的敏感文件，47 可利用它经由 Valentina Yates 实现代理击杀，保险箱密码为 2006（来源：mendoza.txt）。
- **首登场与任务**：HITMAN™ III；任务为 The Farewell（HITMAN™ III 第五场、倒数第二场任务）与 The Envy Contention（来源：mendoza.txt）。
- **主要目标**：Don Yates（Don Archibald Yates）与 Tamara Vidal（来源：world-of-assassination.txt）。Providence 页面载明：Don Archibald Yates 为 Morgan, Yates & Kohn 律师、Viñedo Yates 酿酒师、Providence 传令官，已死亡；Tamara Vidal 曾为 CIA 资产与政治企业家、监视专家、Providence 传令官，已死亡（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：在曝光 ICA、解除其威胁之后，47 在阿根廷门多萨与 Diana 重新会合，Diana 委托他清除 Don Archibald Yates 与 Tamara Vidal，以扫清她成为 Constant 路上的障碍，从而能够接近 Edwards、从其新组建的 Providence 内部将其瓦解；作为维持表面关系的计策，Diana 在任务成功后给 47 下毒，使他被 Edwards 的队伍俘获，并在 The Mortar 号——一列经由罗马尼亚喀尔巴阡山脉开往蒙古 CICADA 设施的改装列车——上接受实验（来源：providence.txt）。页面亦载明 Don Yates 同时是 Providence 的传令官、此前担任合伙人的法律顾问（来源：mendoza.txt）。
- **来源**：mendoza.txt、providence.txt、world-of-assassination.txt。

### 2.21 喀尔巴阡山脉（Carpathian Mountains）

- **定位**：罗马尼亚喀尔巴阡山脉（Romania, Europe）；场景类型为行驶中的改装列车（The Mortar）（来源：carpathian-mountains.txt）。
- **环境与场景**：任务介绍仅写：World of Assassination 三部曲的最终任务将带你前往喀尔巴阡山脉（来源：carpathian-mountains.txt）。任务区域发生在一列名为 The Mortar 的列车上（来源：carpathian-mountains.txt）。喀尔巴阡山脉是罗马尼亚的山脉，也是 HITMAN™ III 终章 Untouchable 的舞台（来源：carpathian-mountains.txt）。页面轶事载明：47 与 Lucas Grey 成长的地方布拉索夫（Brasov）距喀尔巴阡山非常近；连同 Meet Your Brother、Asylum Aftermath 与 The Meat King's Party，这是少数几场设定在罗马尼亚的任务之一；这也是系列中第二场完全发生在行驶载具上的任务，第一场是 Death on the Mississippi 中的蒸汽船（来源：carpathian-mountains.txt）。
- **首登场与任务**：HITMAN™ III；任务为 Untouchable（HITMAN™ III 终章）（来源：carpathian-mountains.txt）。
- **主要目标**：Arthur Edwards（来源：world-of-assassination.txt）。Providence 页面载明其身份为 Providence 的 Constant（1990 年代–2020）、Providence 唯一合伙人（Sole Partner，2020–2021），状态为「Determinant」（由玩家行为决定），并曾属 Ark Society（来源：providence.txt）。
- **剧情要点（ICA / Providence）**：The Mortar 是一列改装列车，经由罗马尼亚喀尔巴阡山脉开往蒙古的 CICADA 设施；面对再次沦为 Providence 工具的前景，47 最终解决了 Edwards，这让 Diana 得以把该组织的行动人员曝光给全世界，Tim Quinn、Alexander Fanin 等人被迫辞职，Providence 实质上解散（来源：providence.txt）。就 ICA 线而言，在 Providence 这列改装列车 The Mortar 上发现的机构武器与技术表明，Providence 可能已经吞并了 ICA 的残余及其资产（来源：ica.txt）。在 The Mortar 上，47 亦曾被 Edwards 的团队用于实验（来源：providence.txt）。此外，本任务与 Apex Predator 同为没有 Mission Stories 的地图之一（来源：ambrose-island.txt）。
- **来源**：carpathian-mountains.txt、providence.txt、ica.txt、ambrose-island.txt、world-of-assassination.txt。

---

## 3. 招募 / 据点类地点（ICA 设施、训练中心、安全屋）

> 本节收录页面中明确以「设施 / 据点 / 安全屋」形态出现的地点条目。它们是网站「ICA 招募与据点」板块的数据源，不属于 21 个可游玩任务地点总表。

### 3.1 ICA Facility（ICA 训练设施）

- **定位**：所在地「Classified（Greenland）」——页面信息框写为机密（格陵兰）；所有者：International Contract Agency；场景类型：位于高山废弃发射井中的秘密训练设施（来源：ica-facility.txt）。
- **环境与场景**：ICA Facility 是 ICA 的秘密训练设施，位于格陵兰的群山之中，是 HITMAN™ 序章任务的目的地，时间设定在 1999 年（来源：ica-facility.txt）。该设施是新兵受训成为 ICA 特工的地方；它位于高山上一座废弃发射井中，能够容纳对过往任务的模拟，供新兵检验技能——在 HITMAN™ 中，被模拟的地点包括澳大利亚悉尼以及古巴（来源：ica-facility.txt）。这座地下综合设施可通过一处足以支持大型运输直升机起降的停机坪进入，47 被看到乘直升机抵达与离开；任务所在的模拟室是一个巨大、圆形、高穹顶的金属空间，可容纳大量道具与临时结构，使机构能够定制训练场景；数百（也许数千）名支援人员在设施内工作，为潜在特工设计复杂的训练与测试课程并评估其表现（来源：ica-facility.txt）。
- **登场任务**：HITMAN™ 的 Arrival、Guided Training、Freeform Training、The Final Test（来源：ica-facility.txt）。
- **设定说明与轶事**：Io-Interactive 的 Travis Barbour 提供的分镜与评论确认该设施位于格陵兰，尽管游戏内文件不一致地将其设定在西伯利亚；页面还推测 Hitman: Contracts 中的 Training Area 与该设施位于同一地点，因为两者都被雪山环绕（来源：ica-facility.txt）。
- **组织背景**：ICA 由分散的董事会管理，采用数量有限的「特工—联络人」小组，并配有分析师与研究员、黑客与清道夫、招募人员与训练人员的后备网络；他们主要基于云端运作，除少数关键产业外不设办公室，例如位于中国的数据存储站点与位于北极圈（Arctic）的训练设施（来源：ica.txt）。
- **来源**：ica-facility.txt、ica.txt。

### 3.2 ICA Data Facility（ICA 数据设施，重庆）

- **定位**：位于中国重庆；页面在 ICA 的单位（ICA Units）表中将其列为「网络部门」（Cyber Division）（来源：ica.txt）。作为地点条目，`cat-locations.txt` 的分类索引中亦列有「ICA Data Facility」与「ICA Facility」两个独立条目（来源：cat-locations.txt）。
- **单位构成**：其角色包括 Facility Guard、Facility Analyst、Facility Engineer、Facility Security、Researcher、Street Guard、Block Guard（来源：ica.txt）。
- **剧情作用**：47 在 Olivia Hall 协助下潜入该设施，把 ICA 的存在泄露给全世界，同时掩盖自己与 Diana，机构随后以「ICA Papers」之名被媒体曝光（来源：ica.txt）。ICA 的公开描述亦提到其少数实体产业之一就是位于中国的数据存储站点（来源：ica.txt）。
- **可达方式**：董事会成员 Angus Pritchard 出现在《杀手 3》的 End of an Era 任务中，穿上他的伪装可以进入 ICA 设施并完成 Certainty Principle 任务故事（来源：ica.txt）；重庆地点页图库中亦有「Angus Pritchard's apartment」的说明（来源：chongqing.txt）。
- **来源**：ica.txt、chongqing.txt、cat-locations.txt。

### 3.3 Safehouse（安全屋，Freelancer 模式）

- **定位**：信息框写为「Secret Location」（秘密地点）；所有者：47；任务：Freelancer；登场作品：HITMAN™ III（来源：safehouse.txt）。
- **环境与场景**：安全屋是 47 在 HITMAN™ III 事件之后以 Freelancer 身份行动的秘密据点（来源：safehouse.txt）。它是一座现代主义设计的大型建筑，拥有大面积玻璃幕墙与倾斜屋顶，位于一处偏僻的林区；这是一个「沙盒」关卡，也是 Freelancer 模式的中心地点，47 在此规划任务、存放武器与工具（来源：safehouse.txt）。房屋包含地下的行动室、常规生活区与室外部分；最初只能进入地下室，随着 Freelancer 精通等级提升，会解锁新区域与自定义选项；地下室以军事掩体风格建造，内有用于选择下一场任务的互动地图，以及 47 存放所获武器与装备的军械库，尚未取得的武器以剪影显示，若已在任务中获得该武器，剪影会略微变亮，表示可以放入收藏；地下室还有衣柜，可让 47 穿上已拥有的任意西装（来源：safehouse.txt）。一层与主要生活区在第 6 级解锁，室外区域在第 12 级解锁；房屋起初处于未完成状态，堆满搬家纸箱与木箱，表明 47 仍在收拾安顿，随着精通推进，这些会被替换，室内也更显完成；部分房间解锁可带入任务的普通物品（例如厨房里的食物），玩家最终还能用音乐调整氛围；屋内设有可让 47 做家务或进行休闲活动的混入点，室外的昼夜会循环变化（来源：safehouse.txt）。子区域包括 Operations Room and Armory、Firing Range、Infirmary、Vault、Kitchen and Dining Room、Living Room、Garage、Gym、Upstairs、Bedroom、Office、Backyard、Garden and Shed、Lake and Pier、Roof、Woods（来源：safehouse.txt）。
- **剧情要点**：在摧毁 Providence 并曝光 ICA 之后，47 与 Diana 重新取得联系，两人回到刺客与联络人的旧角色，以此清除「不可触及者」（the untouchables）；47 与 Diana 已与 ICA 再无联系，实质上成为自由职业行动者；47 现居安全屋，用它训练、休息、规划任务并存放装备（来源：safehouse.txt）。
- **其它同名 / 相关「安全屋」条目（注意区分，勿混为同一实体）**：萨皮恩扎场景内有一处子地点名为 ICA Safe House（来源：sapienza.txt）；霍克斯湾的海滨别墅在页面图库说明中被称为「safehouse（Alma 的安全屋）」，并注明仅 3 层（含屋顶）（来源：hawkes-bay.txt）；据 HITMAN™ 2 过场动画，Lucas Grey 的安全屋位于柏林（来源：berlin.txt）。
- **来源**：safehouse.txt、sapienza.txt、hawkes-bay.txt、berlin.txt。

### 3.4 其它据点 / 设施类条目（仅存条目名，未见独立页面）

以下名称出现在 `cat-locations.txt`（Category:Locations 分类索引）中，可作为据点类条目的待补清单；本次抓取未包含它们的独立页面，故详情**未载明**：

- ICA Mobile Command Center（ICA 移动指挥中心）（来源：cat-locations.txt）
- Training Area（训练区；`ica-facility.txt` 轶事称其可能与 ICA Facility 为同一地点）（来源：cat-locations.txt、ica-facility.txt）
- Providence Archive（Providence 档案库；`new-york.txt` 载明其位于纽约市某处，`providence.txt` 载明其金库需一对钥匙开启）（来源：cat-locations.txt、new-york.txt、providence.txt）
- Institute for Human Betterment（人类改良研究所，位于罗马尼亚布拉索夫，Ort-Meyer 的克隆实验起点）（来源：cat-locations.txt、providence.txt）
- Hideout、Hantu Port、Himmelstein、Greenland、Yuzhong District、Category:Locations 中的其它索引条目（来源：cat-locations.txt）

---

## 4. 数据缺口与不适用文件

1. **Isle of Sgàil 地点页缺失**：`_raw/` 目录中不存在 `isle-of-sgail.txt` 与 `isle-of-sgail.html`（抓取脚本 `fetch-all.ps1`、`fetch-wiki.ps1` 的清单里都有该页，但未落盘）。已抓取页面中**没有任何一处提供该岛的完整场景描述**，因此其「环境与场景」「子地点」字段只能写未载明；任务名（The Ark Society）与目标（Sophia / Zoe Washington）已由 `world-of-assassination.txt`、`providence.txt` 补齐。
2. **地点页普遍不含目标姓名**：21 个地点页中，除 mumbai.txt（The Crows / Maelstrom、Vanya Shah、Dawood Rangan）、new-york.txt（Athena Savalas）、mendoza.txt（Don Yates / Valentina Yates）、sapienza.txt（Silvio Caruso）在正文行文中提及人物外，其余地点页只列任务名，不列目标姓名；本表目标数据因此主要来自 `world-of-assassination.txt` 的 Main Targets 小节与 `providence.txt` 的名单表。**原始 HTML 亦无 Targets 字段**：已核实 `paris.html` 中不存在 `Novikov`、`Margolis` 字样，信息框模板仅含 Location / Sublocations / In-Game Information 等字段。
3. **目标—任务对应关系为顺序推定**：`world-of-assassination.txt` 分别列出各作品的 Missions 表与 Main Targets 表，两者条目顺序一一对应，但页面未逐条并列书写二者的映射；本文件的对应关系按该顺序推定，已在第 1 节与各小节注明。
4. **Ambrose Island 主要目标未载明**：地点页未列目标姓名；页内图库仅出现「Akka in Ambrose Island」的文字说明，页面未说明 Akka 是否为目标。
5. **Berlin 主要目标为统称**：`world-of-assassination.txt` 对该地点直接写作「ICA Agents」，未给出具体特工姓名；`ica.txt` 仅提及 handler Jiao 与 Agent Montgomery 的刺杀小队。
6. **`hitman-overview.txt` 不含正文**：该文件共 253 行，内容为 Wayback Machine 的 HTTP 301 跳转页（`https://hitman.fandom.com/wiki/HITMAN™` 重定向到 `HITMAN_(2016)`），**没有任何 Hitman 内容**，本文件未从中取用任何事实。（来源：hitman-overview.txt）
7. **`ort-meyer.txt` 同类问题**：该文件同为 253 行的 301 跳转页，无正文（未列入本文件来源清单）。
8. **抓取仍在进行**：整理期间 `_raw/` 目录持续有新文件写入（如 `providence.txt`、`safehouse.txt`、`ica-facility.txt` 等在整理过程中才出现）。若后续新增 `isle-of-sgail.txt`，建议据其补全第 2.12 节的场景描述、子地点与首登场信息。

---

## 5. 给 JS 数据文件的映射建议

- 第 1 节表格可直接映射为数组，一行一条记录；列顺序固定为 `name_en | name_zh | region | lat | lon | debut | missions | targets`。
- `missions` 与 `targets` 建议按「；」「、」拆分为数组；拆分后若元素为 `未载明`，在 UI 上按「缺失」处理。
- 若需要「任务—目标」独立实体，可再以第 2 节各小节的「首登场与任务」「主要目标」两栏构建 `missions` 表，用 `locationId` 关联；本文件未额外生成该表，以避免与总表出现两份数据源。
- 第 3 节的 ICA Facility / ICA Data Facility / Safehouse 需要独立类型标记（如 `kind: facility | safehouse`），不要混入 21 个任务地点列表。
- 「场景类型」已并入 `region` 字段（以「｜」分隔），如需独立字段可在构建时按「｜」拆分。
