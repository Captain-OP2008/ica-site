/* ==========================================================================
   data-locations.js — 全球据点与行动现场
   来源：Hitman Fandom 各地图条目正文（Wayback Machine 存档，_raw/*.txt）
         + 「International Contract Agency」条目的 Organization and Equipment 段
   经纬度为真实地理坐标（世界地图投影片段的估算值，非游戏内坐标）。
   era 用于筛选：HITMAN™ / HITMAN™ 2 / HITMAN™ III / 早期作品 / 机构设施

   【已确认的空白】逐地图伪装清单
   来源存档中不存在 "List of disguises" 页面（该页在 disguise.txt 的 See Also
   中仅作为链接出现，未被抓取）。本库因此只收录伪装系统的通用规则，不编造
   任何单个地图的伪装名称。
   ========================================================================== */

/* 伪装系统的通用规则。
   来源：disguise.txt（通用条目）· world-of-assassination.txt L606-661
   这些规则适用于全部任务现场，因此不重复写入每个地点条目。 */
const ICA_DISGUISE_DOCTRINE = {
  intro: '伪装是本系列的核心机制。47 从被制服或已死亡的非玩家角色身上取得其身份外观，由此获得原本不存在的通行权限。伪装的层级决定他能进入哪些区域，也决定他能公开携带什么。',
  rules: [
    ['区域分三级，且会随事件改变',
      '公共区域：任何装扮都可进入。第一级限制区为「非法侵入」（trespassing），安保发现后会要求离开；第二级限制区为「敌对区域」，进入即遭攻击。区域归属并非固定——某些条件下原本封闭的房间会开放（例如受邀参加某场会面），原本开放的区域也可能临时变为禁区（例如官员决定在某个房间开会）。'],
    ['伪装决定的是"许可"，不只是"外观"',
      '穿着厨师或侍者服装时向食物下毒不会引起怀疑，也能自然地拿起厨刀；技工制服允许破坏车辆与设备；安保制服允许公开持械。唯一的例外是狙击步枪——它对几乎所有制服都过于异常，只有极少数地图存在可以携带狙击枪的伪装。'],
    ['识破者（enforcers）',
      '每个现场都存在若干格外敏锐的人员，他们不会被特定伪装骗过。原因包括：对该区域的人员与作息异常熟悉、直觉过人、或能看出制服上的细微错误。识破者不一定是被模仿那一方的成员；若干目标本身就是识破者。有人对多种伪装都免疫，极少数人对全部伪装乃至 47 的便装都免疫。'],
    ['独特伪装与任务故事',
      '许多地图存在一件独特伪装，往往与某条任务故事绑定，能开启独有的行动路径。少数独特伪装不与任何故事相关，也不提供任何特权，纯粹为了多样性或幽默效果。原则上无法伪装成任务目标，但存在个别例外。'],
    ['早期作品与后来的差异',
      '在《代号 47》与《血钱》中守卫的观察力较弱；在此后的作品中，识破机制逐步强化。在《赦免》中，若 47 穿着与守卫相同的制服，守卫能够看穿，但他可以遮住面部以通过，代价是消耗「本能」。被看穿并不等于立即暴露——玩家需要在守卫反应过来之前离开其视野。《血钱》中，难度高于新手时若把初始西装遗留在现场，撤离会被扣分。'],
    ['环境防护与装备协同',
      '含防毒面具或等效部件的伪装允许进入受污染环境；《Bjarkhov Bomb》中的辐射防护服可抵御辐射；《Traditions of the Trade》中的泳裤则会限制可携带的武器数量。若干任务（如《Kowloon Triads in Gang War》与《Requiem》）出于剧情原因完全不含伪装。']
  ],
  blank: {
    title: '逐地图伪装清单：未载明',
    body: '本站的资料存档中不存在 "List of disguises" 页面——该页面在通用条目中以「参见」链接的形式被提及，但从未被抓取。因此本库不列出任何单个地图的伪装名称。上表是伪装系统的通用规则，与具体现场无关；请勿将它读作某一关的伪装列表。'
  }
};

const ICA_LOCATIONS = [
  /* ================= HITMAN™ (2016) ================= */
  {
    name: '巴黎', nameEn: 'Paris', short: 'PARIS',
    country: '法国', city: '巴黎', lat: 48.8566, lon: 2.3522,
    era: 'HITMAN™', year: '2016',
    mission: 'The Showstopper',
    desc: '法国首都与人口最多的城市，HITMAN™ 序章之后按时间顺序的第一场任务 The Showstopper 所在地，此外还出现在《杀手：契约》与《杀手：血钱》中。巴黎是欧洲的文化、金融与商业中心之一，拥有埃菲尔铁塔、卢浮宫与圣母院等著名景观，也是世界上最受欢迎的旅游目的地之一，以美食与浪漫气息著称——因此被称为"爱之城"。游戏中的任务是 Palais de Walewska 举办的 Sanguine 独家时装秀，由私人保镖负责安保。官方推介语：「巴黎邀请你进入这场独家时装秀的全部浮华与魅力。」巴黎在多部作品中反复出现：契约的 Hunter and Hunted、血钱的 Curtains Down，以及本作的 The Showstopper 与奖励任务 Holiday Hoarders。',
    targets: ['Viktor Novikov', 'Dalía Margolis'],
    note: '该地图承载过多份行踪不定的目标合同，包括 The Forger、The Sensation、The Broker 等。'
  },
  {
    name: '萨皮恩扎', nameEn: 'Sapienza', short: 'SAPIENZA',
    country: '意大利', city: '坎帕尼亚大区 · 阿马尔菲海岸', lat: 40.6340, lon: 14.6027,
    era: 'HITMAN™', year: '2016',
    mission: 'World of Tomorrow',
    desc: '意大利阿马尔菲海岸上的一座虚构小镇，位于那不勒斯以南，是一处颇受欢迎的旅游地——由商铺、公寓、餐馆与小咖啡馆构成，小镇尽头靠近一座小教堂处有公共海滩。这里阳光充足、地形密集而层次丰富。最显眼的建筑是 Villa Caruso：一栋多层宅邸，由 Silvio Caruso 从母亲 Isabella Caruso 手中继承。镇外的 Ether Biotech Corporation 野外实验室里存放着一种致命病毒，任务同时要求追踪 Caruso 并摧毁该病毒。官方推介语：「一个密集的地点，充满挑战，也为富有创造力的刺客准备了大量机会。」',
    note: '萨皮恩扎是"暗杀世界"三部曲中被复用最多的地图之一，先后承载了主线任务 World of Tomorrow、奖励任务 The Icon 与 Landslide、以及 Patient Zero 战役的 The Author。设定上它是一座天然的外景地：演员 Dino Bosco 曾选此地拍摄他超级英雄电影《The Icon》的高潮战斗场面，作家 Craig Black 后来也选在这里为他的新作《Cassandra Snow》办读书会。',
    targets: ['Silvio Caruso', 'Francesca De Santis']
  },
  {
    name: '马拉喀什', nameEn: 'Marrakesh', short: 'MARRAKESH',
    country: '摩洛哥', city: '马拉喀什', lat: 31.6295, lon: -7.9811,
    era: 'HITMAN™', year: '2016',
    mission: 'A Gilded Cage',
    desc: '常被称为"红城"，摩洛哥马拉喀什-萨菲大区的城市，北非与摩洛哥最重要的城市之一，以美丽的柏柏尔建筑闻名，库图比亚清真寺、萨阿德王朝陵墓与巴伊亚宫是当地主要看点。任务区域包括集市（大型露天市场）、瑞典领事馆建筑、一所被军方临时改作指挥部的废弃学校，以及若干可进入的商铺与屋顶。官方推介语：「从繁忙的露天市场与水烟咖啡馆，到瑞典领事馆外呼喊正义的愤怒人群——马拉喀什向玩家承诺窥视的诱惑与渗透的刺激。」',
    note: '马拉喀什在"暗杀世界"中被多次复用：除主线 A Gilded Cage 外，还有奖励任务 A House Built on Sand，以及 The Entertainer、The Gunrunner、The Fixer、The Angel of Death 四份行踪不定的目标合同与萨拉热窝六人组的 The Extractor。',
    targets: ['Claus Hugo Strandberg', 'Reza Zaydan']
  },
  {
    name: '曼谷', nameEn: 'Bangkok', short: 'BANGKOK',
    country: '泰国', city: '曼谷', lat: 13.7563, lon: 100.5018,
    era: 'HITMAN™', year: '2016',
    mission: 'Club 27',
    desc: '泰语名为 Krung Thep Maha Nakhon，泰国首都与人口最多的城市，也是东南亚与东盟最重要的城市之一，传统泰式建筑与现代建筑交织，是全球访问量最高的城市之一。任务现场是位于曼谷城外湄南河畔的 Himmapan 豪华酒店与度假村。官方推介语：「探索这座宏大酒店精致的内部，沐浴在装点其外侧亭阁的异域花园的自然之美中；或者就欣赏湄南河的景色，同时规划你要如何最好地完成任务。」',
    note: '曼谷在"暗杀世界"中被复用的程度仅次于萨皮恩扎：除主线 Club 27 外，Patient Zero 战役的 The Source 也在这里，另有 The Ex-Dictator、The Warlord、The Food Critic 三份行踪不定的目标合同，以及萨拉热窝六人组的 The Veteran。',
    targets: ['Jordan Cross', 'Ken Morgan']
  },
  {
    name: '科罗拉多', nameEn: 'Colorado', short: 'COLORADO',
    country: '美国', city: '科罗拉多州', lat: 39.5501, lon: -105.7821,
    era: 'HITMAN™', year: '2016',
    mission: 'Freedom Fighters',
    desc: '美国西部州，地貌多样：干旱沙漠、河谷峡谷与覆雪的落基山脉。任务现场是一处杏树农场（apricot farm）——但它同时是 Sean Rose 领导的私人民兵训练营。Rose 是一名生态恐怖分子与炸弹制造者，此前与 Thomas Cross 的绑架案有关联。这里也是 HITMAN™ 第五场主线任务 Freedom Fighters 与《零号病患》战役第三场任务 The Vector 的舞台：后者中 47 要刺杀洗脑者 Dr. Bradley Paine，并通过击杀四名已感染的民兵成员阻止 Nabazov 病毒扩散。',
    note: '科罗拉多是机构判断力出问题的地方。ICA 追查到"影子客户"的通讯发自这里，董事会在 Erich Soders 的推动下认定 Rose 就是影子客户——实际上真正的影子客户是 Lucas Grey，而 Rose 只是他手下的一个分部负责人。47 在农场缴获了影子客户的 Providence 成员关系图，以及一份关于 47 本人极为详尽的研究资料，这让他和 Diana 得出结论：对方已经知道 47 很多年了。同样是从这里，47 发现了董事会成员 Erich Soders 向 Providence 出卖机构的证据。农场上的民兵成员来自各种背景：生态恐怖分子 Sean Rose、Interpol 分析师 Penelope Graves、Mossad 审讯员 Ezra Berg、前泰米尔猛虎组织军火商兼刺客 Maya Parvati、身份窃贼 Richard M. Foreman、记账人 Pertti Järnefelt，以及 CICADA 雇佣兵 Patrick Morgan。Grey 本人在附近一间棚屋的屋顶上透过狙击镜看着 47 走出农场——他本可以扣下扳机，但最终放下了手指。',
    targets: ['Sean Rose', 'Ezra Berg', 'Penelope Graves', 'Maya Parvati']
  },
  {
    name: '北海道', nameEn: 'Hokkaido', short: 'HOKKAIDO',
    country: '日本', city: '北海道', lat: 43.2203, lon: 142.8635,
    era: 'HITMAN™', year: '2016',
    mission: 'Situs Inversus',
    desc: '日本第二大岛，也是面积最大、位置最北的一级行政区，以火山、山脉与森林构成的景观闻名。任务现场是建在雪峰之上的超高端 Gama 设施——一家采用先进手术技术与研究方法的私人医院，拥有自己的禅意庭园与有机寿司餐厅。',
    targets: ['Erich Soders', 'Yuki Yamazaki'],
    note: '北海道是"暗杀世界"三部曲中唯一在原作之后又获得新任务的地图（Hokkaido Snow Festival）。Gama 设施的档案另有两条与机构直接相关的记录：Erich Soders 在此接受心脏手术，并在手术台上被 47 处决；此外，2022 年在锡盖尔岛被 47 刺杀的"The Disruptor"事后也是在这家设施被复活的——同一间医院，先送走了一位机构董事，又救回了一个已经确认死亡的目标。'
  },

  /* ================= HITMAN™ 2 ================= */
  {
    name: '霍克斯湾', nameEn: "Hawke's Bay", short: 'HAWKE\'S BAY',
    country: '新西兰', city: '北岛东海岸霍克斯湾', lat: -39.4928, lon: 176.9120,
    era: 'HITMAN™ 2', year: '2018',
    mission: 'Nightcall',
    desc: '新西兰北岛东海岸的一个大区，HITMAN™ 2 首场任务 Nightcall 的舞台。任务地点是著名建筑师 Oscar Wong 设计的一栋高度设防的豪华海滨别墅。地图在整部三部曲中极为独特：地形基本平坦、开阔而齐整，只有一栋可进入的完整建筑——Alma Reynard 的海滨别墅，附近只有若干木制废墟。海滩上覆盖着成簇的高草，为玩家提供掩护。这是一片私人海滩，因此地图上没有公众平民。',
    targets: ['Alma Reynard'],
    note: '截至存档时，该地图的所有版本（Nightcall、Mills Reverie 升级契约与行踪不定的目标）都发生在夜间，尚无白天版本。它也是整个《杀手》系列中唯一一处设在大洋洲的任务。Mills Reverie 是为 2019 年万圣节推出的升级契约，现已转为常驻活动。'
  },
  {
    name: '迈阿密', nameEn: 'Miami', short: 'MIAMI',
    country: '美国', city: '佛罗里达州迈阿密', lat: 25.7617, lon: -80.1918,
    era: 'HITMAN™ 2', year: '2018',
    mission: 'The Finish Line',
    desc: '美国佛罗里达州东海岸的主要城市与港口，HITMAN™ 2 第二场任务 The Finish Line 的舞台。任务设定在"全球创新赛车"（Global Innovation Race）活动场地——一场展示最新现代汽车设计的赛车盛事，包含醒目的赛道、看台、摊贩、维修区与车手休息室，以及最近被 Kronstadt Industries 收购的 Bayside 会展中心。官方推介语：「加入成千上万兴奋观众的队伍，参与这一年中最大的赛车盛事。」',
    note: '赛道设计参考了迈阿密真实存在过的多条街道赛道：1985 至 1988 年 CART IndyCar 系列赛在 Tamiami Park 举办；1983 至 1995 年 IMSA 与 Trans-Am 在 Museum Park（电视转播中常称 Bicentennial Park）举办，CART 亦于 1995 年到访；2002 与 2003 年 CART 重返迈阿密，场地是 Bayfront Park。该地图另承载行踪不定的目标 The Undying 与 The Undying Returns，以及特别委托包 2 的 A Silver Tongue。',
    targets: ['Robert Knox', 'Sierra Knox']
  },
  {
    name: '圣福图纳', nameEn: 'Santa Fortuna', short: 'SANTA FORTUNA',
    country: '哥伦比亚', city: '圣福图纳（虚构，雨林深处）', lat: 1.1500, lon: -76.6500,
    era: 'HITMAN™ 2', year: '2018',
    mission: 'Three-Headed Serpent',
    desc: '深藏于哥伦比亚茂密雨林中的偏远村落，坐落在声名狼藉的 Delgado 宅邸脚下。村庄拥有大量民居与小店、一个主广场、钓鱼码头、本地酒吧以及一处建筑工地——全部被 Delgado 贩毒集团以铁腕统治，集团总部设在路那头的 Rico Delgado 豪华宅邸。官方推介语：「圣福图纳为有眼光的旅客提供一切：从美丽的瀑布到真正的烈酒之旅，再到在本地酒吧与迷人的渔民共度时光的机会。」',
    note: '两处更深的隐藏区域构成了这张地图的完整结构：宅邸下方洞穴中的贩毒潜艇港口，以及雨林更深处的古柯田。地名在英文中字面意为"Saint Fortune"，更准确的译法其实是"神圣的财富"。该地图另承载行踪不定的目标 The Revolutionary 与特别委托包 1 的 Embrace Of The Serpent。',
    targets: ['Rico Delgado', 'Andrea Martínez', 'Jorge Franco']
  },
  {
    name: '孟买', nameEn: 'Mumbai', short: 'MUMBAI',
    country: '印度', city: '孟买', lat: 19.0760, lon: 72.8777,
    era: 'HITMAN™ 2', year: '2018',
    mission: 'Chasing a Ghost',
    desc: '绰号"梦想之城"，印度马哈拉施特拉邦首府，HITMAN™ 2 第四场任务 Chasing a Ghost 的舞台。游戏中的孟买是系列中最大的关卡之一，既辽阔又密集：贫民窟中拥挤曲折的街道与狭窄的隔间。这里没有单一的控制者——城市被多个互相敌对的武装派系分割：街头帮派"乌鸦"（The Crows）由神秘的 Maelstrom 掌控；废弃的铁路调车场与露天洗衣场是"Bandit Queen" Vanya Shah 的地盘；宝莱坞制片人 Dawood Rangan 则控制着尚未完工的 Rangan Tower 豪华公寓——那里同时也是他新片《Mumbai Hero》的片场。官方推介语：「在著名贫民窟的人潮中走失，或远眺宝莱坞的拍摄地；孟买不会让你失望。」',
    note: '由于城市被不同且常常敌对的武装团体分区占据，孟买没有任何一件伪装能让你进入全图——这是"暗杀世界"三部曲中分区控制最彻底的地图，也是伪装系统"权限而非外观"这一设计原则最极端的体现。',
    targets: ['Dawood Rangan', 'Vanya Shah', 'Wazir Kale']
  },
  {
    name: '惠特尔顿溪', nameEn: 'Whittleton Creek', short: 'WHITTLETON',
    country: '美国', city: '佛蒙特州（虚构）', lat: 44.2601, lon: -72.5754,
    era: 'HITMAN™ 2', year: '2018',
    mission: 'Another Life',
    desc: '佛蒙特州的一座虚构郊区，"典型得不能再典型的美国郊区"：宽阔的道路两旁是泛黄的枫树，精心修剪的前院，友善的邻居享受着安静的周六。居民以白领专业人士为主——大学教职员与政府雇员。整个社区由一条街上的十四处住宅构成，公开可进入的有八处：Janus、Cassidy、Griswold、Lewinsky、Schmidt、West、Wilson、Batty。同名溪流环绕地图东、南两侧，南岸疑似建有一座风电场。除穿制服的警察外，街区各处还散布着大量便衣安保——其中一部分就在住户之中。',
    note: 'Janus 与 Griswold 两处房产的地下室之间有一条地下通道相连。Wilson 家当天正在办社区派对，是唯一对所有人开放的住宅——派对播放的是 Benny Goodman、Glenn Miller、Bing Crosby 与 Harry Roy 的曲子。Buck 家车库里藏着一个小型大麻种植场，门牌号本身就是大麻文化的梗。',
    targets: ['Janus', 'Nolan Cassidy']
  },
  {
    name: '斯盖尔岛', nameEn: 'Isle of Sgàil', short: 'SGÀIL',
    country: '北大西洋（页面标注）', city: '北大西洋孤岛', lat: 59.0000, lon: -3.0000,
    era: 'HITMAN™ 2', year: '2018',
    mission: 'The Ark Society',
    desc: '北大西洋上的孤岛，Ark Society 的总部与年度聚会地点。Ark Society 是一个秘密组织，由首任 Constant Janus 创立，成员是世界上最富有与最有权势的人——他们聚在一起，为世界的终结做准备。岛上有古堡、地下墓穴与潮汐通道，全部处于严密安保之下。会址由 47 与 Diana、Grey 通过追踪 Janus 的棺材而锁定。',
    note: '2020 年 11 月 13 日的年度聚会上，47 与 Grey 潜入并绑架了现任 Constant Arthur Edwards，以逼问 Providence 合伙人的真实身份——这是 47 与 Diana 实质上背弃机构、转而对抗自己客户的时刻。此前 Alexa Carlisle 曾要求 Constant 在颈部植入一枚毒药芯片作为保险，以防他被捕或叛变；芯片的击杀开关分别交给了 Zoe 与 Sophia Washington 姐妹，47 为此除掉了这对双胞胎。Janus 虽然被认为背叛了 Providence，方舟协会成员仍决定在这次聚会上为他举行一场私人守灵。岛上还留有 Edwards 的部分档案：记录显示他 1976 年凭奖学金就读于伦敦政治经济学院，说明他并不像他的雇主们那样出身富贵。',
    targets: ['Zoe Washington', 'Sophia Washington']
  },
  {
    name: '纽约', nameEn: 'New York', short: 'NEW YORK',
    country: '美国', city: '纽约', lat: 40.7128, lon: -74.0060,
    era: 'HITMAN™ 2', year: '2019',
    mission: 'Golden Handshake',
    desc: '美国人口最多的城市，HITMAN™ 2 第八场任务 Golden Handshake 的舞台。纽约在游戏中的登场仅限于 Milton-Fitzpatrick 银行内部。银行的主要公共空间是标志性的出纳大厅（Teller Hall），上方悬着一座华丽的时钟——时钟背后就是董事办公室。任务发生在一个雨天，银行内部的调查正在进行。官方推介语：「他必须循着钱走，除掉银行董事，以完成他的目标。」',
    note: '银行的楼层结构本身就是关卡设计：下层向公众开放保管箱室，金库也位于此处，但金库区域仅限高层安保进入，旁边另有一个金库装卸区可用作撤离通道，银行的 IT 部门同样设在这一层。上层仅限员工通行，包括出纳会见客户的 VIP 区、交易员盯盘的股票市场区、正在举行内部审计的会议室，以及董事办公室与 Athena Savalas 的私人居所。设定上，Providence 的档案库（Providence Archive）藏在纽约市内的某处。',
    targets: ['Athena Savalas']
  },
  {
    name: '避风港岛', nameEn: 'Haven Island', short: 'HAVEN',
    country: '马尔代夫', city: '马尔代夫', lat: 3.2028, lon: 73.2207,
    era: 'HITMAN™ 2', year: '2019',
    mission: 'The Last Resort',
    desc: '马尔代夫一座虚构的小岛，HITMAN™ 2 第九场、也是该作最后一场任务 The Last Resort 的舞台。岛上是 Haven 经营的偏远度假村 Haven Resort，以服务富人与名人著称，专门提供"声誉管理"服务。但在迷人的外表之后，这座度假村也接待世界上最引人注目的罪犯——神偷、骗子、犯罪头目，可能还有恐怖分子。来自世界各地的可疑而有利可图的人物来到这座岛屿天堂，目的就是消失。官方推介语：「作为 47 号前往马尔代夫的热带天堂，他必须在那里继续寻找 Providence 的合伙人。」',
    targets: ['Tyson Williams', 'Ljudmila Vetrova', 'Steven Bradley'],
    note: '地理结构本身承担了关卡功能：一座主要公共岛屿，一座禁止公众进入的小型私人岛，外加一处隐蔽且戒备森严的庄园；远处还能看到若干无法抵达的外围岛屿与下锚的豪华游艇。地图有相当一部分位于浅水之下——这既是潜入受控区域、也是处置目标与藏匿尸体的实用通道。任务推进过程中会发展出一场带强风与闪电的大型热带风暴，但不会对玩家构成危险。本关卡属于 HITMAN™ 2 的追加内容。'
  },

  /* ================= HITMAN™ III ================= */
  {
    name: '迪拜', nameEn: 'Dubai', short: 'DUBAI',
    country: '阿联酋', city: '迪拜', lat: 25.2048, lon: 55.2708,
    era: 'HITMAN™ III', year: '2021',
    mission: 'On Top of the World',
    desc: '阿拉伯联合酋长国的城市与酋长国，以奢侈购物、超现代建筑与热闹的夜生活闻名，也是 HITMAN™ III 首场任务 On Top of the World 的舞台。任务区域涵盖虚构摩天楼 Burj Al-Ghazali 的顶部数层——正值其开幕典礼，楼下是兴奋的人群与令人屏息的景观，玩家既可在楼内逐层探索，也可以从建筑外部攀爬。官方推介语：「在最宏伟与最奢靡之间，见证世界最高建筑的开幕。」',
    note: 'Burj Al-Ghazali 以现实中的哈利法塔为原型——后者是世界最高的摩天楼。迪拜是 HITMAN™ III 第一张向公众展示实机画面的地图，与游戏本体一同公布。当地另有两份升级合同：The Asmodeus Waltz（仅豪华版）与 The Phoenix Ascension。',
    targets: ['Carl Ingram', 'Marcus Stuyvesant']
  },
  {
    name: '达特穆尔', nameEn: 'Dartmoor', short: 'DARTMOOR',
    country: '英国（英格兰）', city: '德文郡', lat: 50.5730, lon: -3.9000,
    era: 'HITMAN™ III', year: '2021',
    mission: 'Death in the Family',
    desc: '英格兰德文郡南部的一片区域，HITMAN™ III 第二场任务 Death in the Family 与常驻活动 Dartmoor Garden Show 的舞台。任务现场是历史悠久的 Thornbridge Manor：一座体量庞大、布局散开的宅邸，紧邻一条河流，这条河及其支流构成了地产的天然边界。园区内有树篱花园、温室，以及一座紧挨着废弃石砌小教堂的墓地。通往宅邸只有一条车道，但注入主河的溪流在几处浅滩可以涉水穿过。',
    note: '与其它地图相比颇为少见的一点：达特穆尔没有任何地下室或地下区域——所有事都发生在地面之上，这让这张地图的潜行路线完全依赖建筑外部与庭园。注：在部分 Xbox 数字版本中，达特穆尔的任务、契约、行踪不定的目标与其中一份升级合同不可用。',
    targets: ['Alexa Carlisle']
  },
  {
    name: '柏林', nameEn: 'Berlin', short: 'BERLIN',
    country: '德国', city: '柏林', lat: 52.5200, lon: 13.4050,
    era: 'HITMAN™ III', year: '2021',
    mission: 'Apex Predator',
    desc: '德国首都。Apex Predator 发生在城郊树林中一座由核电站改建而成的 Club Hölle。官方推介语：「柏林以童话、鲜明的风格与混乱的夜生活闻名。无论你是想找个地方静下来恢复，还是想体验一场史诗级狂欢带来的眩晕肾上腺素，柏林都能满足你——以及介于两者之间的一切。」',
    note: '柏林在系列中反复出现，且每次都不是同一个柏林：季节性的柏林蛋猎活动发生在同一地点，但换上复活节装饰、若干区域改为完全禁区；The Drop 任务同样在此，但俱乐部已彻底更名并翻修，时间点落在 47 与 Diana 转为自由职业者之后。设定层面，Alma Reynard 所属的私人民兵小队在柏林刺杀了保险业巨头、Providence 特工 Danziger；Kronstadt Industries 的总部设于柏林；Lucas Grey 的安全屋也在柏林。',
    targets: ['ICA 刺杀小组（10 名特工，需击杀其中 5 名）']
  },
  {
    name: '重庆', nameEn: 'Chongqing', short: 'CHONGQING',
    country: '中国', city: '重庆', lat: 31.5000, lon: 104.5000,
    era: 'HITMAN™ III', year: '2021',
    mission: 'End of an Era',
    desc: '重庆是中国西南部的特大城市，也是 HITMAN™ III 第四场任务 End of an Era 的舞台。任务区域涵盖雨夜中渝中区的街道、蜿蜒的小巷、公寓楼、屋顶、隧道与商铺。坐标为示意性定位，用于在全图尺度上与同城的机构设施区分开。',
    targets: ['Hush', 'Imogen Royce'],
    note: '机构位于中国的数据存储站点即设于此，官方名称为 Chongqing Cyber Division（重庆网络分部）——它不是一个孤立的数据中心，而是一个带完整编制的实体部门。档案中具名的员工包括核心维护工程师 Sharon Reed、安全工程师 Alice Reynolds、设施守卫 Jeremy Bolt、设施向导 Chen Ting、研究员 Junli Xiu、研究员兼招募员 Yue Cheng，以及未具名的外部守卫、一名安全主管与 Hush 的私人保镖。47 在 Olivia Hall 协助下潜入该设施，把机构的存在经由黑客活动网站向全世界公开——用的是机构自己的服务器。'
  },
  {
    name: '门多萨', nameEn: 'Mendoza', short: 'MENDOZA',
    country: '阿根廷', city: '门多萨省', lat: -32.8895, lon: -68.8458,
    era: 'HITMAN™ III', year: '2021',
    mission: 'The Farewell',
    desc: '门多萨是阿根廷中西部与智利接壤的省份，也是南美最著名的葡萄酒产区之一。HITMAN™ III 的第五场、也是倒数第二场任务 The Farewell 就设在这里。任务区域由 Viñedo Yates 的酒庄与葡萄园构成，超过 200 人出席 Don Yates 的退休派对，其中大多是精英阶层或他的密友。',
    targets: ['Don Archibald Yates', 'Tamara Vidal'],
    note: 'Yates 宅邸下方有一间秘密餐厅，The Farewell 中的 Providence 会议就在此举行。保险箱内藏有 Don Yates 过往关系的敏感文件，47 可利用它经由 Valentina Yates 制造代理击杀——保险箱密码为 2006。门多萨是系列中少数位于南半球的地点之一（另外两处是智利的 A Vintage Year 与新西兰的 Nightcall）。'
  },
  {
    name: '喀尔巴阡山脉', nameEn: 'Carpathian Mountains', short: 'CARPATHIANS',
    country: '罗马尼亚', city: '喀尔巴阡山脉', lat: 45.5000, lon: 25.3000,
    era: 'HITMAN™ III', year: '2021',
    mission: 'Untouchable',
    desc: '东欧的主要山脉体系，横跨罗马尼亚、乌克兰、斯洛伐克、波兰与捷克。HITMAN™ III 的最终任务 Untouchable 发生在一列行驶于罗马尼亚境内的装甲列车上。任务开场是一段梦境：47 在毒素影响下被 Diana 的声音嘲弄，Grey 的幻象告诉他毒素正在扰乱他的头脑。随后 47 在一间封闭的房间里醒来，用撬棍打开最近的一扇门，才发现自己身处一列戒备森严的火车上——那是 Constant 本人的列车。他要一路穿过这列车，杀掉每一个看见他的 Providence 成员，最终了结 Arthur Edwards。任务结束时，47 让列车停下，走下车，走向夕阳。',
    targets: ['Arthur Edwards（The Constant）'],
    note: '这列车上发现了本机构的武器与技术——但此时 ICA 已经解散，这说明 Providence 接收了它的资产。这也让"ICA"这个词在终局产生了第二层含义：组织已经不存在，它的工具却还在被别人使用。任务结束后，Diana 完全掌控了 Providence，并按她在门多萨对 47 的承诺把该组织拆解：权力阶层中的传令官们陆续下台，其中包括 Alexander Fanin 等数名银行家。她烧掉了"研究所"关于她父母的合同。一年后，47 通过她留在他所住小屋中的一部电话接受了她的卫星通话——47 告诉 Diana，他选择继续做一个杀手，两人恢复了刺客与协调人的原有角色，以此约束全球精英。这次通话的最后一句话是 47 笑着说的："回来真好。"'
  },
  {
    name: '安布罗斯岛', nameEn: 'Ambrose Island', short: 'AMBROSE',
    country: '安达曼-尼科巴群岛', city: '安达曼海（虚构岛屿）', lat: 10.5000, lon: 93.5000,
    era: 'HITMAN™ III', year: '2022',
    mission: 'Shadows in the Water',
    desc: '安达曼海上的一座虚构岛屿，HITMAN™ 2 第六场任务 Shadows in the Water 的舞台。地形崎岖，被茂密的热带植被覆盖；内陆有高耸的悬崖与深谷。岛上有多个村落、码头、民兵营地与洞穴网络，狭窄的小径蜿蜒穿过岩石内陆，地图有若干部分位于半水下。安布罗斯目前处于无政府状态，由多个海盗与游击队派系分别控制——尽管如此，岛上仍有平民村落，居民中甚至包括几个来探险的大学生。官方推介语：「发现海图上未标注的安布罗斯岛，帮一位老朋友纠正他的错误。」',
    targets: ['Noel Crest', 'Akal Knight'],
    note: '2022 年 7 月作为 HITMAN™ III 的最新地图加入，但按时间线发生在 HITMAN™ 2 期间；至 2024 年，当两部作品合并进 World of Assassination 后，Io-Interactive 把安布罗斯岛的全部内容移回了 HITMAN™ 2 的菜单页面。它是三部曲中仅有的三张没有"任务故事"（Mission Stories）的地图之一，另两张是 Apex Predator 与 Untouchable。任务简报显示它位于孟加拉湾东部水域、缅甸海岸西南方，游戏内对话亦与此印证。设定上，这里是 Wazir Kale 生前常去的港口之一。西侧上层海滩的水中有一只半埋在土里的桶，里面能找到一个菠萝和一块海绵——致敬《海绵宝宝》。'
  },

  /* ================= 机构直属设施（kind: facility） ================= */
  {
    name: 'ICA 训练设施', nameEn: 'ICA Facility', short: 'ICA FACILITY',
    kind: 'facility',
    country: '格陵兰（页面信息框标注"Classified"）', city: '高山废弃发射井',
    lat: 72.0000, lon: -40.0000,
    era: '机构设施', year: '1999（序章时间点）',
    mission: 'Arrival · Guided Training · Freeform Training · The Final Test',
    desc: '本机构的秘密训练设施，位于格陵兰的群山之中，是一座建在山顶废弃发射井内的地下综合体——HITMAN™ 序章任务的目的地，时间设定在 1999 年。这里是新兵受训成为机构特工的地方，设施能够容纳对过往任务的模拟，供新兵检验技能：HITMAN™ 中被模拟的地点包括澳大利亚悉尼与古巴。',
    targets: [],
    note: '综合设施可通过一处足以支持大型运输直升机起降的停机坪进入，47 被看到乘直升机抵达与离开。任务所在的模拟室是一个巨大、圆形、高穹顶的金属空间，可容纳大量道具与临时结构，使机构能够定制训练场景。数百——也许数千——名支援人员在设施内工作，为潜在特工设计复杂的训练与测试课程并评估其表现。Io-Interactive 的 Travis Barbour 提供的分镜与评论确认该设施位于格陵兰，尽管游戏内文件不一致地将其设定在西伯利亚；另有推测认为《杀手：契约》中的 Training Area 与此处位于同一地点，因为两者都被雪山环绕。坐标仅为大致定位。'
  },
  {
    name: 'ICA 数据设施', nameEn: 'ICA Data Facility', short: 'ICA DATA',
    kind: 'facility',
    country: '中国', city: '重庆 · 渝中区',
    lat: 29.5630, lon: 106.5516,
    era: '机构设施', year: '2021',
    mission: 'End of an Era（HITMAN™ III）· Certainty Principle',
    desc: '本机构极少数的实体资产之一。机构主要以云端方式运作，除少数关键产业外不设办公室——这座位于中国重庆的数据设施正是其中之一，在机构的单位表中被列为"网络部门"（Cyber Division）。它不是一个孤立的数据中心，而是一个带完整编制、可以独立运转的实体部门：档案中具名的员工包括核心维护工程师 Sharon Reed、安全工程师 Alice Reynolds、设施守卫 Jeremy Bolt、设施向导 Chen Ting、研究员 Junli Xiu，以及研究员兼招募员 Yue Cheng，此外还有未具名的外部守卫、一名安全主管与 Hush 的私人保镖。',
    targets: ['Hush', 'Imogen Royce'],
    note: '设施岗位包括：设施警卫（Facility Guard）、设施分析师（Facility Analyst）、设施工程师（Facility Engineer）、设施安保（Facility Security）、研究员（Researcher）、街道警卫（Street Guard）、街区警卫（Block Guard）。董事会成员 Angus Pritchard 可在本任务中找到，穿上他的伪装即可进入机构设施并完成名为 Certainty Principle 的任务故事；任务区域另包含 Angus Pritchard 的公寓与 Red Dragon Restaurant。47 在 Olivia Hall 协助下潜入此处，通过一个黑客活动网站把机构的存在泄露给全世界，同时掩盖自己与 Diana 的痕迹——机构随后以「ICA Papers」之名在媒体上被曝光。这是 ICA 走向解散的直接原因。'
  },
  {
    name: '安全屋', nameEn: 'Safehouse (Freelancer)', short: 'SAFEHOUSE',
    kind: 'facility',
    country: '未载明（信息框写为 "Secret Location"）', city: '秘密地点',
    lat: 45.0000, lon: 10.0000,
    era: '机构设施', year: '2023（Freelancer 模式）',
    mission: 'Freelancer',
    desc: '47 个人的住所，出现在 HITMAN™ III 的 Freelancer 模式中。信息框标注为"秘密地点"，所有者一栏写的是 47 本人——这本身就说明了一件事：在机构解散之后，他不再属于任何组织。建筑是一栋大型现代主义住宅，大面积玻璃幕墙、斜屋顶，坐落在偏僻的林区；它同时是一座"沙盒"关卡，47 在这里训练、休息、策划任务并存放装备。',
    targets: [],
    note: '共 17 个子区域；精通等级达到 6 级时解锁一层，达到 12 级时开放室外区域。此处是 47 与 Diana 脱离机构、转为自由执业之后的基地。坐标为示意性定位，页面未载明实际地点。'
  },
  {
    name: 'ICA 移动指挥中心', nameEn: 'ICA Mobile Command Center', short: 'MOBILE CMD',
    kind: 'facility',
    country: '机动', city: '随任务部署',
    lat: 0, lon: 0, mapHidden: true,
    era: '机构设施', year: '—',
    mission: '—',
    desc: '本机构的机动指挥资产，随任务部署。它出现在机构"已知载具"清单中——与 Agency Pegasus N26LM、Agency SUV、ICA 监视车、Birdie 的巴士（非专属）、Jean Danjou 以及"圣徒"的运输巴士并列。这份清单的另一条注解说明了它为何存在：机构拥有足以与某些政府相抗衡的资源，除现代化的个人武器库外，还运营军用直升机与其他航空器。载具清单中没有一项是纯民用配置，移动指挥中心是其中最不具攻击性、却最接近"机构本身"的一项——它把指挥能力带到现场。',
    targets: [],
    note: '此条目在档案中仅以名称形式存在——官方wiki 的地点分类列表里只留下了这一个名称，没有任何资料描述过它的内部配置、部署记录或曾出现在哪一场任务中。这是一处已确认的空白。它同样不在地图上标注。'
  },

  /* ================= 关联地点 ================= */
  {
    name: '罗马尼亚 · 精神病院', nameEn: 'Romania · Ort-Meyer\'s Asylum', short: 'ROMANIA',
    country: '罗马尼亚', city: '喀尔巴阡山脉 · 萨图马雷一带', lat: 47.3000, lon: 23.6000,
    era: '机构设施', year: '1950s–1999',
    mission: '《杀手：代号 47》·《杀手：契约》',
    desc: 'Ort-Meyer 博士以精神病院为掩护运营的地下克隆实验室。47 号于 1964 年 9 月 5 日在此被创造。1999 年，Ort-Meyer 故意在安保上制造缺口，让 47 逃脱。',
    targets: ['Otto Wolfgang Ort-Meyer'],
    note: '使用 Ort-Meyer 的门禁卡进入精神病院内的密室，可以看到 47 号另外五个克隆体——它们原本属于"五父"各自，用于器官摘取（如《代号 47》中父辈们的原始协议），罐体上印着五父各自的名字。此后 Ort-Meyer 生产了 48 系列。《杀手：契约》开场即从这里开始：精神病院已被囚犯占领，罗马尼亚警方在周边设下防线，47 偷走 Ort-Meyer 的车逃离。'
  },
  {
    name: '研究设施 · 人类改良研究所', nameEn: 'Institute for Human Betterment', short: 'INSTITUTE',
    country: '罗马尼亚', city: '（与精神病院同期）', lat: 48.1000, lon: 25.3000,
    era: '机构设施', year: '1960s–1980s',
    mission: '《杀手：代号 47》背景（漫画《Agent 47: Birth of the Hitman》）',
    desc: '47 与 Lucas Grey（6 号）及其他实验体被关押的地方。两人在此结成兄弟般的关系，并在 1977 年 3 月 23 日一起逃跑——6 号成功逃脱，47 被重新抓获并被洗去记忆。',
    targets: [],
    note: '公开资料中该设施仅以条目名称形式存在。坐标为示意性定位。'
  }
];
