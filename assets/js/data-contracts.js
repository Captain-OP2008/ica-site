/* ==========================================================================
   data-contracts.js — 合同档案
   来源：Hitman Fandom 各任务条目、《杀手：契约》剧情段（gu-contracts.txt）、
         world-of-assassination.txt、各地点条目正文
   no 字段为本档案的编目号（ICA-年份-序号），非游戏内官方编号。
   fee 单位为美元，按数据核心中的机构定价区间（10 万–60 万美元）与目标
   重要性分级；标 (est.) 者为按级别推算的估算值。
   risk: LOW / MODERATE / HIGH / CRITICAL
   ========================================================================== */

const ICA_CONTRACTS = [
  /* ===================== 《杀手：代号 47》(2000) ===================== */
  {
    no: 'ICA-1999-001', title: '李洪刺杀案', titleEn: 'The Lee Hong Assassination',
    target: 'Lee Hong', location: '香港 · 九龙', year: '1999', era: '《代号 47》',
    method: '瓦解计划 · 投毒未果 · 追击击杀', asset: '47 号（BRO3886）', fee: '$150,000 (est.)',
    risk: 'HIGH', status: '完成',
    note: 'Ort-Meyer 以匿名客户名义下达的第一份合同。目标是他昔日的战友、红龙三合会首领，也是 47 的"基因父亲"之一。机构事先判定：即使 47 能得手，也不可能活着离开香港——因此这份合同不是一次刺杀，而是一套四阶段的瓦解计划。'
  },
  {
    no: 'ICA-1999-002', title: '向我的小朋友问好', titleEn: 'Say Hello to My Little Friend',
    target: 'Pablo Belisario Ochoa', location: '哥伦比亚 · 丛林', year: '1999', era: '《代号 47》',
    method: '丛林渗透 · 正面交火 · 爆破毒品实验室', asset: '47 号（BRO3886）', fee: '$150,000 (est.)',
    risk: 'HIGH', status: '完成',
    note: '第二份合同，目标同为"五父"之一。此人此前已躲过多次暗杀，当地 U\u2019wa 部落因此称他为"九命人"。除击杀目标外，合同还要求炸毁其可卡因实验室，永久终止该处产能。'
  },
  {
    no: 'ICA-1999-003', title: '行业传统', titleEn: 'Traditions of the Trade',
    target: 'Frantz Fuchs', location: '匈牙利 · 布达佩斯', year: '1999', era: '《代号 47》',
    method: '酒店潜入 · 击杀 · 夺取炸弹', asset: '47 号（BRO3886）', fee: '$150,000 (est.)',
    risk: 'HIGH', status: '完成',
    note: '第三份合同，目标为国际恐怖分子、47 的"基因父亲"之一。Fuchs 计划在布达佩斯的 Gallàrd 酒店引爆一枚化学炸弹，当时多国领导人正在该酒店出席和平峰会。除击杀外，合同还要求夺走炸弹本体。'
  },
  {
    no: 'ICA-1999-004', title: '钚失控', titleEn: 'Plutonium Runs Loose',
    target: 'Arkadij "Boris" Jegorov', location: '荷兰 · 鹿特丹港', year: '1999', era: '《代号 47》',
    method: '窃听追踪 · 登船击杀 · 拆除核弹', asset: '47 号（BRO3886）', fee: '$180,000 (est.)',
    risk: 'CRITICAL', status: '完成',
    note: '第四份合同。目标为军火商、47 的"基因父亲"之一。他行踪不明，机构因此要求先追踪他的合作者。目标在船上预备了一枚热核弹作为同归于尽的手段——合同事实上变成了先杀人、再从已激活的弹体上拆引信。'
  },
  {
    no: 'ICA-1999-005', title: '终结', titleEn: 'Meet Your Brother',
    target: 'Otto Wolfgang Ort-Meyer', location: '罗马尼亚 · 精神病院', year: '1999', era: '《代号 47》',
    method: '贴身近战 · 折断颈骨', asset: '47 号（BRO3886）', fee: '机密',
    risk: 'CRITICAL', status: '完成',
    note: '前四份合同的匿名客户现身后，机构才发现四份合同出自同一人之手——这违反了机构的规则。但该客户权势过大，董事会仍接受了这第五份委托：目标是罗马尼亚一家高安保医院中的 Kovacs 医生，且机构明确限制 47 携带任何外来武器进入现场。Ort-Meyer 坚持要把这第五份合同交给 47。合同的目标是下单的人自己。至此"五父"全部被清除，47 也第一次意识到自己究竟是什么。'
  },

  /* ===================== 《杀手：契约》(2004) ===================== */
  {
    no: 'ICA-2000-011', title: '肉王的派对', titleEn: "The Meat King's Party",
    target: 'Campbell Sturrock（The Meat King）· Andrei Puscus',
    location: '罗马尼亚 · 屠宰场', year: '2000', era: '《契约》',
    method: '伪装潜入 · 双目标清除 · 附带营救', asset: '47 号（BRO3886）', fee: '$120,000 (est.)',
    risk: 'HIGH', status: '完成',
    note: '一位未具名的罗马尼亚客户委托机构，要求潜入一间屠宰场——当时正在举办一场恋物主题派对——刺杀"肉王"坎贝尔·斯特罗克与他的律师安德烈·普斯库斯。附加目标：救出客户被绑架的女儿。她很可能是在斯特罗克经法院审判被判无罪之后被他绑走的——也就是说，客户在司法途径失效后转向了机构。'
  },
  {
    no: 'ICA-2001-012', title: '堪察加', titleEn: 'The Bjarkhov Bomb',
    target: 'Fabian Fuchs · Sergei Bjarkhov',
    location: '俄罗斯 · 堪察加', year: '2001', era: '《契约》',
    method: '双目标清除 · 击沉潜艇 · 摧毁脏弹设施', asset: '47 号（BRO3886）', fee: '$200,000 (est.)',
    risk: 'CRITICAL', status: '完成',
    note: '目标是奥地利恐怖分子 Fabian Fuchs——47 的"基因叔父"之一——以及叛逃的俄罗斯海军指挥官 Sergei Bjarkhov。附加目标：击沉一艘停泊的核潜艇，以摧毁脏弹制造设施。以沉没潜艇的方式达成破坏目的，说明该设施本身无法从内部彻底清除。'
  },
  {
    no: 'ICA-2002-013', title: '贝尔丁福德庄园', titleEn: 'Beldingford Manor',
    target: 'Winston Beldingford · Alistair Beldingford',
    location: '英国 · 贝尔丁福德庄园', year: '2002', era: '《契约》',
    method: '庄园潜入 · 双目标清除 · 附带营救', asset: '47 号（BRO3886）', fee: '$130,000 (est.)',
    risk: 'MODERATE', status: '完成',
    note: '目标是英格兰贵族家族 Beldingford 的家长 Winston 与他的儿子 Alistair，地点是他们的家族庄园。附加目标是救出客户的儿子 Giles Northcott。这是一份"贵族家庭 + 营救"结构的合同——与「肉王的派对」同构，说明此时期机构的客户多为无法通过合法途径解决问题的私人。'
  },
  {
    no: 'ICA-2002-014', title: '鹿特丹会面', titleEn: 'Rendezvous in Rotterdam',
    target: 'Rutgert Van Leuven · Klaas Teller', location: '荷兰 · 鹿特丹', year: '2002', era: '《契约》',
    method: '双目标清除 · 取回证据', asset: '47 号（BRO3886）', fee: '$110,000 (est.)',
    risk: 'MODERATE', status: '完成',
    note: '目标是 Flaming Rotterdam 飞车党头目 Rutgert Van Leuven，以及私家侦探 Klaas Teller——后者此前受雇完成同一件事但失败了，因此成为需要一并清除的知情人。除击杀外还要取回一批被用于敲诈的材料。委托人是鹿特丹警察局长：这是一份与本机构主线毫无关联的独立合同，也是 47 同时期唯一一份来自执法方的委托。'
  },
  {
    no: 'ICA-2003-015', title: '鹿特丹 · 核弹头', titleEn: 'Deadly Cargo',
    target: 'Arkadij Jegorov', location: '荷兰 · 鹿特丹港', year: '2003', era: '《契约》',
    method: '潜入固守船只 · 目标清除 · 拆除弹体', asset: '47 号（BRO3886）', fee: '机密',
    risk: 'CRITICAL', status: '完成',
    note: 'Arkadij Jegorov——47 的"基因父亲"之一——在一艘运输船上筑垒自守，被鹿特丹警方包围，并威胁引爆一枚核弹头。与 1999 年堪察加那次不同，这次警方的包围圈是既有条件而非任务要求：47 必须在警方与目标之间同时完成潜入、击杀与拆除。'
  },
  {
    no: 'ICA-2003-016', title: '猎人与猎物', titleEn: "Hunter and Hunted",
    target: '（自我保护）', location: '法国 · 巴黎', year: '2003', era: '《契约》',
    method: '反追杀', asset: '47 号（BRO3886）', fee: '—',
    risk: 'CRITICAL', status: '完成',
    note: '在巴黎歌剧院完成一次刺杀后返回酒店房间，47 遭到拦截并中枪。他带伤退入自己的公寓，在那里倒下，开始产生关于过往任务的幻觉闪回——《契约》的整个叙事结构就建立在这些闪回之上。'
  },

  /* ===================== HITMAN™ (2016) ===================== */
  {
    no: 'ICA-2019-101', title: '焦点人物', titleEn: 'The Showstopper',
    target: 'Viktor Novikov · Dalía Margolis', location: '法国 · 巴黎',
    year: '2019', era: 'HITMAN™', method: '伪装 · 意外（事故击杀）',
    asset: '47 号（BRO3886）', fee: '$250,000 (est.)', risk: 'MODERATE', status: '完成',
    note: '序章之后按时间顺序的第一场正式任务。现场是 Palais de Walewska 的 Sanguine 独家时装秀。两位目标一为时装品牌所有人，一为秘密情报掮客。任务场地分三层：宴会厅、地下保险库与屋顶——这三个层次分别对应机构档案中"公开场合、封闭金库、垂直撤离"三种典型切入点。'
  },
  {
    no: 'ICA-2019-102', title: '明日世界', titleEn: 'World of Tomorrow',
    target: 'Silvio Caruso · Francesca De Santis', location: '意大利 · 萨皮恩扎',
    year: '2019', era: 'HITMAN™', method: '伪装 · 毒杀 · 附带销毁病毒',
    asset: '47 号（BRO3886）', fee: '$300,000 (est.)', risk: 'HIGH', status: '完成',
    note: '双目标加上一项独立目标：摧毁 Caruso 实验室中的致命病毒。目标为一名隐居的遗传学家与他的首席研究员。任务区域是一座意大利海滨小镇与山崖下的实验室，机构档案中罕见地把"销毁物品"与"清除人员"并列为合同条款。'
  },
  {
    no: 'ICA-2019-103', title: '镀金牢笼', titleEn: 'A Gilded Cage',
    target: 'Claus Hugo Strandberg · Reza Zaydan', location: '摩洛哥 · 马拉喀什',
    year: '2019', era: 'HITMAN™', method: '伪装 · 意外 · 狙击',
    asset: '47 号（BRO3886）', fee: '$320,000 (est.)', risk: 'HIGH', status: '完成',
    note: '一个银行家与一个政变军官。前者因银行破产案引发民愤而躲在瑞典领事馆内，后者在被军方占用的废弃学校中指挥镇压。任务现场覆盖集市、领事馆与学校三片区域，两个目标分处其中，无法以单一路线接近。'
  },
  {
    no: 'ICA-2019-104', title: '27 号俱乐部', titleEn: 'Club 27',
    target: 'Jordan Cross · Ken Morgan', location: '泰国 · 曼谷',
    year: '2019', era: 'HITMAN™', method: '伪装 · 意外（坠落）',
    asset: '47 号（BRO3886）', fee: '$280,000 (est.)', risk: 'MODERATE', status: '完成',
    note: '现场是湄南河畔的 Himmapan 豪华酒店与度假村。目标是摇滚乐队主唱 Jordan Cross 与他的家族律师 Ken Morgan——前者涉嫌在酒店房间内杀害一名女性，后者负责替他压下这件事。乐队正在酒店内录制专辑，因此场地同时包含录音棚、客房与河岸。'
  },
  {
    no: 'ICA-2019-105', title: '自由战士', titleEn: 'Freedom Fighters',
    target: 'Sean Rose · Ezra Berg · Penelope Graves · Maya Parvati',
    location: '美国 · 科罗拉多', year: '2019', era: 'HITMAN™',
    method: '伪装 · 多点同步', asset: '47 号（BRO3886）', fee: '$550,000 (est.)',
    risk: 'CRITICAL', status: '完成',
    note: '四目标合同，机构档案中罕见的高风险案例。目标是科罗拉多一处民兵营地的核心成员：团体领袖 Sean Rose、审讯专家 Ezra Berg、前军情六处分析师 Penelope Graves 与雇佣兵指挥官 Maya Parvati。营地是一个封闭的私人武装据点，几乎没有平民可作为伪装掩护——这与机构偏好的城市任务环境截然相反。'
  },
  {
    no: 'ICA-2019-106', title: '内脏反位', titleEn: 'Situs Inversus',
    target: 'Erich Soders · Yuki Yamazaki', location: '日本 · 北海道',
    year: '2019', era: 'HITMAN™', method: '伪装 · 医疗设备破坏',
    asset: '47 号（BRO3886）', fee: '$600,000 (est.)', risk: 'CRITICAL', status: '完成',
    note: '目标之一是机构董事会成员、训练主管 Erich Soders——他正准备把现役代理人名单交给 Providence。另一个目标是他的联络人山崎由纪。合同由机构内部下达。'
  },

  /* ===================== HITMAN™ 2 (2018) ===================== */
  {
    no: 'ICA-2020-201', title: '夜间来电', titleEn: 'Nightcall',
    target: 'Alma Reynard', location: '新西兰 · 霍克斯湾',
    year: '2020', era: 'HITMAN™ 2', method: '伪装 · 意外',
    asset: '47 号（BRO3886）', fee: '$260,000 (est.)', risk: 'MODERATE', status: '完成',
    note: '客户是影子客户方面的人。目标住在建筑师 Oscar Wong 设计的高度设防海滨别墅中——这也是 47 在《赦免》事件后重新与机构建立联系的第一份合同，机构档案把它编为 HITMAN™ 2 的第一条。'
  },
  {
    no: 'ICA-2020-202', title: '冲线', titleEn: 'The Finish Line',
    target: 'Robert Knox · Sierra Knox', location: '美国 · 迈阿密',
    year: '2020', era: 'HITMAN™ 2', method: '伪装 · 赛车事故',
    asset: '47 号（BRO3886）', fee: '$380,000 (est.)', risk: 'HIGH', status: '完成',
    note: '目标是 Kronstadt Industries 的父子——父亲是 Providence 的核心成员，女儿是职业赛车手。现场为"全球创新赛车"活动。'
  },
  {
    no: 'ICA-2020-203', title: '三头蛇', titleEn: 'Three-Headed Serpent',
    target: 'Rico Delgado · Andrea Martínez · Jorge Franco',
    location: '哥伦比亚 · 圣福图纳', year: '2020', era: 'HITMAN™ 2',
    method: '伪装 · 多点同步', asset: '47 号（BRO3886）', fee: '$520,000 (est.)',
    risk: 'CRITICAL', status: '完成',
    note: 'Delgado 贩毒集团的三名核心成员：集团首领 Rico Delgado、他的副手 Andrea Martínez 与化学师 Jorge Franco。任务区域覆盖雨林村落、可可种植园与集团总部宅邸，三个目标分散在三种截然不同的地形中，机构因此把"多点同步"列为该合同的主要难点。'
  },
  {
    no: 'ICA-2020-204', title: '追猎幽魂', titleEn: 'Chasing a Ghost',
    target: 'Dawood Rangan · Vanya Shah · Wazir Kale',
    location: '印度 · 孟买', year: '2020', era: 'HITMAN™ 2',
    method: '伪装 · 多点同步', asset: '47 号（BRO3886）', fee: '$500,000 (est.)',
    risk: 'CRITICAL', status: '完成',
    note: '三个目标分属不同武装派系：宝莱坞制片人 Dawood Rangan、贫民窟女头目 Vanya Shah，以及本名 Wazir Kale 的"幽魂"本人。三人在孟买的势力范围彼此交错又互相敌对，机构档案因此判定：清除其中任何一人都会立刻改变另外两人的警戒态势——这是一份必须一次性完成的合同。'
  },
  {
    no: 'ICA-2020-205', title: '另一种生活', titleEn: 'Another Life',
    target: 'Janus · Nolan Cassidy', location: '美国 · 惠特尔顿溪',
    year: '2020', era: 'HITMAN™ 2', method: '伪装 · 意外 · 毒杀',
    asset: '47 号（BRO3886）', fee: '$420,000 (est.)', risk: 'HIGH', status: '完成',
    note: '目标之一是 Providence 的前任 Constant——一位在郊区安享晚年的老人；另一个是他的联邦安保负责人。这份合同建立在一份假报告之上：协调人向机构谎称罗马尼亚的调查走进死路，并把 Janus 指认为民兵的真正首脑；任务的另一半是找出 Janus 与 Constant 之间的关联线索。'
  },
  {
    no: 'ICA-2020-206', title: '方舟会', titleEn: 'The Ark Society',
    target: 'Zoe Washington · Sophia Washington', location: '英国 · 锡盖尔岛',
    year: '2020', era: 'HITMAN™ 2', method: '伪装 · 仪式现场',
    asset: '47 号（BRO3886）', fee: '$460,000 (est.)', risk: 'HIGH', status: '完成',
    note: 'Ark Society 在北大西洋孤岛上举行入会仪式。瓦辛顿姐妹是该组织的实际控制者：Sophia 负责组织运作，Zoe 负责仪式与"神谕"角色。岛上只有一座城堡与一座小教堂，人员全部是会员与安保——入场本身就等同于通过会员资格审查。'
  },
  {
    no: 'ICA-2020-207', title: '金握手', titleEn: 'Golden Handshake',
    target: 'Athena Savalas', location: '美国 · 纽约',
    year: '2020', era: 'HITMAN™ 2', method: '伪装 · 银行内部',
    asset: '47 号（BRO3886）', fee: '$350,000 (est.)', risk: 'HIGH', status: '完成',
    note: '目标是 Milton-Fitzpatrick 银行的行长，负责为 Providence 洗钱。任务区域仅限银行内部——这是《HITMAN™ 2》第一场完全发生在室内的任务，47 只有撤离时才会走到建筑外面。'
  },
  {
    no: 'ICA-2020-208', title: '最后的度假地', titleEn: 'The Last Resort',
    target: 'Tyson Williams · Ljudmila Vetrova · Steven Bradley',
    location: '马尔代夫 · 避风港岛', year: '2020', era: 'HITMAN™ 2',
    method: '伪装 · 多点同步', asset: '47 号（BRO3886）', fee: '$540,000 (est.)',
    risk: 'CRITICAL', status: '完成',
    note: '目标是 Providence 的三名"合伙人"层成员。避风港岛号称提供"声誉管理"服务——实际上服务内容就是让麻烦消失。'
  },

  /* ===================== HITMAN™ III (2021) ===================== */
  {
    no: 'ICA-2021-301', title: '世界之巅', titleEn: 'On Top of the World',
    target: 'Carl Ingram · Marcus Stuyvesant', location: '阿联酋 · 迪拜',
    year: '2021', era: 'HITMAN™ III', method: '伪装 · 高空作业',
    asset: '47 号（BRO3886）', fee: '$620,000 (est.)', risk: 'CRITICAL', status: '完成',
    note: '目标是 Providence 的两名合伙人：掌握金融命脉的 Carl Ingram 与掌握政治关系的 Marcus Stuyvesant。现场是世界最高建筑 Burj Al-Ghazali 的开幕典礼及其顶层——典礼本身就是给其他合伙人看的示威，因此安保与曝光度成正比。'
  },
  {
    no: 'ICA-2021-302', title: '家族之死', titleEn: 'Death in the Family',
    target: 'Alexa Carlisle', location: '英国 · 达特穆尔',
    year: '2021', era: 'HITMAN™ III', method: '伪装 · 推理（可选）· 意外',
    asset: '47 号（BRO3886）', fee: '$480,000 (est.)', risk: 'HIGH', status: '完成',
    note: '目标是 Carlisle 家族族长、Providence 的 Herald 成员。任务可自由选择路径，也可先扮演侦探破解一桩谋杀案。'
  },
  {
    no: 'ICA-2021-303', title: '顶级掠食者', titleEn: 'Apex Predator',
    target: 'ICA 刺杀小组（10 名特工，需击杀其中 5 名）',
    location: '德国 · 柏林', year: '2021', era: 'HITMAN™ III',
    method: '反猎杀 · 夜店环境（Club Hölle）',
    asset: '47 号（BRO3886）', fee: '—',
    risk: 'CRITICAL', status: '完成',
    note: '与机构正式决裂之后的第一场任务：机构派出刺杀小组，47 是猎物。10 名特工由机构资深成员蒙哥马利率领——而蒙哥马利整个职业生涯中从未见过 47 本人。玩家只需击杀其中 5 名即可脱身。'
  },
  {
    no: 'ICA-2021-304', title: '时代终结', titleEn: 'End of an Era',
    target: 'Hush · Imogen Royce', location: '中国 · 重庆',
    year: '2021', era: 'HITMAN™ III', method: '伪装 · 设施潜入',
    asset: '47 号（BRO3886）', fee: '—',
    risk: 'CRITICAL', status: '完成',
    note: '在 Olivia Hall 的黑客协助下潜入机构位于中国的数据存储站点。目标 Hush 是站点内的神经科学家，Imogen Royce 是机构的数据主管——即 47 必须亲手清除机构自己的核心人员，才能拿到内部数据。这次行动的直接结果是机构的存在被向全世界公开。'
  },
  {
    no: 'ICA-2021-305', title: '告别', titleEn: 'The Farewell',
    target: 'Don Archibald Yates · Tamara Vidal', location: '阿根廷 · 门多萨',
    year: '2021', era: 'HITMAN™ III', method: '伪装 · 代理击杀（保险箱文件）· 毒杀',
    asset: '47 号（BRO3886）', fee: '—',
    risk: 'HIGH', status: '完成',
    note: 'Yates 是 Providence 的 Herald 中呼声最高的 Constant 人选，Tamara Vidal 则是 Constant 派来监视 Diana 的忠诚行动人员。Yates 宅邸地下有秘密餐厅用于 Providence 会议；保险箱内藏有 Yates 过往关系的敏感文件，可经 Valentina Yates 制造代理击杀——密码 2006。'
  },
  {
    no: 'ICA-2021-306', title: '不可触碰', titleEn: 'Untouchable',
    target: 'Arthur Edwards（The Constant）', location: '罗马尼亚 · 喀尔巴阡山脉',
    year: '2021', era: 'HITMAN™ III', method: '列车潜入',
    asset: '47 号（BRO3886）', fee: '—',
    risk: 'CRITICAL', status: '完成',
    note: '系列的最后一份合同。目标是一手策划了 47 全部人生的那个人——Providence 的 Constant。任务发生在行驶于喀尔巴阡山脉的改装列车"The Mortar"上；列车内藏有本机构的武器与技术，表明 Providence 可能已吸收 ICA 的残余资产。'
  },
  {
    no: 'ICA-2022-307', title: '水中暗影', titleEn: 'Shadows in the Water',
    target: 'Noel Crest · Akal Knight', location: '安达曼海 · 安布罗斯岛',
    year: '2022', era: 'HITMAN™ III', method: '伪装 · 岛屿潜入',
    asset: '47 号（BRO3886）', fee: '$400,000 (est.)', risk: 'HIGH', status: '完成',
    note: '该地图于 2022 年 7 月加入，但按时间线发生在 HITMAN™ 2 期间。目标是 Noel Crest——一名与机构有关联的叛离者——与海盗首领 Akal Knight。安布罗斯岛是安达曼海上的孤岛，岛上有海盗营地、废弃的度假村与一座灯塔，任务以"帮助一位老朋友纠正他的错误"的名义下达。'
  }
];
