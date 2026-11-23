/* ==========================================================================
   data-assets.js — 情报资产与机构装备体系
   来源：Hitman Fandom「ICA Executive Briefcase」条目（gu-briefcase-item.txt）
         及其页脚的标准装备分类表；ica.txt 中的情报文件定价与数据存储条文。
   group: case 公文包 / category 装备门类 / intel 情报文件 / gap 已确认的空白
   ========================================================================== */

const ICA_ASSETS = [

  /* ===================== 公文包 ===================== */
  {
    id: 'A-CASE', group: 'case', name: 'ICA 行政公文包', nameEn: 'ICA Executive Briefcase',
    era: 'HITMAN™ 2 (2018) 起', ica: true,
    desc: '机构配发的公文包，用于藏匿违禁物品，也可掷向敌人将其击晕。它是 47 把狙击步枪带进现场的常规手段——一件看起来完全无害的办公用品，里面装着一支拆卸状态的步枪。',
    perks: [
      ['容器', '可把物品藏入包内，通过安检时不被察觉'],
      ['非致命近战', '近身格斗可击晕目标'],
      ['非致命投掷', '远距离投掷可击晕目标']
    ],
    variants: [
      ['ICA Executive Briefcase Mk II', '《HITMAN™ 2》变体，掷向 NPC 时有独特效果'],
      ['Club Boom 12\'\' Flightcase', '《HITMAN™ III》变体，以柏林 Club Hölle 为主题'],
      ['ICA Briefcase', '基础型'],
      ['ICA Briefcase Mk III', '第三代']
    ],
    obtain: [
      ['《HITMAN™ 2》', 'Executive Pack —— 拥有该扩展包即解锁'],
      ['《HITMAN™ 3》', 'Legacy Carryover —— 由前作继承；亦可在「时代终结」的二级安保军械库找到']
    ],
    note: '《HITMAN™》原作中该物品存在但不可用（标注为 N/A - Not available）——「行政公文包」实际是从《HITMAN™ 2》才开始投入使用的。'
  },

  /* ===================== 机构装备门类 ===================== */
  {
    id: 'A-CAT-MELEE', group: 'category', name: '近战武器', nameEn: 'Melees',
    count: 4, ica: false,
    desc: '机构装备体系中最小的一类。值得注意的是一批「伪装成日常物品」的器械——它们的设计意图不是杀伤力，而是在安检与视线下不被识别为武器。',
    items: ['Durian（榴莲）', 'Pinot Noir（黑皮诺酒瓶）', 'Small Goldbar（小金条）', 'Unicorn Horn（独角兽角）']
  },
  {
    id: 'A-CAT-CONTAINER', group: 'category', name: '容器', nameEn: 'Containers',
    count: 19, ica: false,
    desc: '藏匿类装备，共 19 种。命名逻辑清晰：材质（铝制旅行箱 / 黑皮箱 / 工具箱）+ 场合（狙击枪盒 / 飞行箱）。其中 ICA 前缀的 4 种为机构配发。',
    items: [
      'Aluminum Travel Briefcase', 'Arctic Tool Box', 'Black Leather Briefcase',
      'Chinese Briefcase', 'Crimson Red Briefcase', 'Golden Briefcase',
      'Hunter\'s Briefcase', 'ICA Briefcase', 'ICA Briefcase Mk III',
      'ICA Executive Briefcase', 'ICA Executive Briefcase Mk II',
      'Orange Pinstripe Briefcase', 'Premiere White Briefcase',
      'Sieger 300 Sniper Case', 'The Club Boom 12" Flightcase',
      'The Purple Streak ICA Briefcase', 'Toolbox', 'Ultimate Black Briefcase'
    ]
  },
  {
    id: 'A-CAT-TOOL', group: 'category', name: '工具', nameEn: 'Tools',
    count: 23, ica: false,
    desc: '开锁、破门、入侵电子设备、制造干扰。这一门类里 ICA 前缀的装备最多——电击器、EMP 电荷、撬棍，全是「打开一扇本不该打开的门」的不同答案。',
    items: [
      'Bone Lockpick', 'Classic Lockpick', 'Disposable Scrambler',
      'Electronic Key Hacker', 'Electronic Key Hacker Mk III',
      'Emetic Gas Grenade', 'Emetic Grenade', 'Guru\'s Emetic Grenade',
      'Handyman Wrench', 'ICA Proximity Taser', 'ICA Proximity Micro Taser',
      'ICA Remote Taser', 'ICA Remote Micro Taser', 'ICA Titanium Crowbar',
      'Lockpick', 'Lockpick Mk II', 'Lockpick Mk III', 'Oil Canister',
      'Professional Screwdriver', 'Remote Emetic Gas Device', 'Remote EMP Charge'
    ]
  },
  {
    id: 'A-CAT-DISTRACT', group: 'category', name: '干扰物', nameEn: 'Distractions',
    count: 13, ica: false,
    desc: '本档案中最能体现机构作风的一类：把人的注意力当成可操纵的资源。硬币是 47 最古典的工具；「ICA 电刑电话」与「ICA 闪光电话」则把一部普通手机变成陷阱。',
    items: [
      '"Mixtape 47"', 'Classic Coin', 'Coin', 'Gold Coin', 'Greedy Little Coin',
      'ICA Electrocution Phone', 'ICA Flash Phone', 'ICA Performance Coin',
      'ICA Remote Audio Distraction', 'ICA Remote Audio Distraction Mk II',
      'ICA Remote Audio Distraction Mk III', 'ICA Remote Micro Audio Distraction',
      'Red-Tie Kiwi', 'The Big One'
    ]
  },
  {
    id: 'A-CAT-POISON', group: 'category', name: '毒药', nameEn: 'Poisons',
    count: 25, ica: false,
    desc: '共 25 种，按致命 / 镇静 / 催吐三型 × 药丸 / 药瓶 / 注射器三态铺开。详见本站「毒药与注射剂库」专章。',
    items: [
      'Blue Easter Egg', '"Bubble Queen" Gum Pack',
      'Antique Emetic Syringe', 'Antique Lethal Syringe',
      'Emetic Pills', 'Emetic Poison Vial', 'Emetic Poison Vial (HITMAN III)',
      'Emetic Syringe Mk II', 'Guru\'s Pen Syringe Emetic', 'ICA Pen Syringe Emetic',
      'Lethal Syringe Mk III', 'Lethal Pills', 'Lethal Pills (Classic)',
      'Lethal Poison Vial', 'Lethal Poison Vial (HITMAN III)', 'Lethal Syringe Mk II',
      'Modern Lethal Syringe', 'Modern Sedative Syringe',
      'Sedative Pills', 'Sedative Poison Vial', 'Sedative Poison Vial (HITMAN III)'
    ],
    crossRef: 'poisons'
  },
  {
    id: 'A-CAT-EXPLOSIVE', group: 'category', name: '爆炸物', nameEn: 'Explosives',
    count: 51, ica: false,
    desc: '全档案中数量最多的一类，共 51 种。命名方式透出机构的两副面孔：一边是 CX 爆破块、Semtex、硝化甘油这类专业器材，另一边是橡皮鸭、圣诞礼物、棒球、高尔夫球——把炸药做成玩具，是 47 的招牌手法。注意其中大量的 Mk II / Mk III 迭代，说明这些装置在被持续改进。',
    items: [
      'Breaching Charge Mk III', 'Concussion Grenade', 'Explosive Baseball',
      'Explosive Compound', 'Explosive Golf Ball', 'Explosive Pen',
      'Explosive Xmas Gift', 'Flash Grenade', 'Flash Grenade Mk III',
      'Fragmentation Grenade', 'Goldbrick Proximity Mine', 'ICA Explosive Phone',
      'ICA Impact Explosive', 'ICA Micro Remote Explosive',
      'ICA Proximity Concussion Device', 'ICA Proximity Concussion Device Mk III',
      'ICA Proximity Explosive', 'ICA Proximity Explosive Mk II',
      'ICA Proximity Explosive Mk III', 'ICA Proximity Micro Explosive',
      'ICA Remote Concussion Device', 'ICA Remote Explosive',
      'ICA Remote Explosive Mk II', 'ICA Remote Flash Device', 'ICA Tripwire Mine',
      'Kronstadt Explsoive Pen (Gen 2)', 'Kronstadt Mini Flash Robo XOI-2900',
      'Lil\' Flashy', 'Magnesium Pouch', 'Molotov Cocktail',
      'Napoleon Blownaparte', 'Nitroglycerin', 'Proximity CX Demo Block',
      'Proximity CX Demo Block Mk II', 'Proximity Explosive Duck',
      'Proximity Explosive Duck (British)', 'Proximity Explosive Rubber Duck Mk II',
      'Proximity Semtex Demo Block Mk III', 'Remote Breaching Charge',
      'Remote Concussion Collectors Rubber Duck', 'Remote Concussion Rubber Duck',
      'Remote CX Demo Block', 'Remote CX Demo Block Mk II',
      'Remote CX Demo Block Mk III', 'Remote Explosive Classic Rubber Duck',
      'Remote Explosive Devil Rubber Duck', 'Remote Explosive Duck',
      'Remote Explosive Rubber Duck Mk II', 'RFID Triggered Explosive',
      'Shaman Powder', 'Sunset Rubber Duck', 'The Ancestral Fountain Pen',
      'The Iconator', 'The Pale Duck', 'The Purple Streak Explosive Duck',
      'The Red Light Flash Grenade', 'The Roar Flash Grenade', 'The Serpent\'s Bite'
    ]
  },

  /* ===================== 情报文件 ===================== */
  {
    id: 'A-INTEL-FILE', group: 'intel', name: '情报文件', nameEn: 'Intel Files',
    ica: true,
    desc: '机构对外出售的情报档案。与「合同」不同，情报文件不包含执行环节——它只提供目标位置与背景，买家自行决定怎么做。',
    facts: [
      ['单价', 'USD 1,500 / 份'],
      ['内容', '目标身份、所在地点、相关背景'],
      ['与合同的关系', '情报是合同的前置环节；客户可只买情报，不买执行'],
      ['存储', '机构数据以云端为主，仅在中国设有一处数据存储点']
    ],
    note: '「情报简报单价 USD 1,500」这一数字出现在机构内部系统的滚动日志中，是本站在概览页引用的原始数据之一。'
  },

  /* ===================== 已确认的空白 ===================== */
  {
    id: 'A-GAP', group: 'gap', name: '已确认的空白', nameEn: 'Confirmed Gaps',
    ica: false,
    desc: '本档案对无法从原始资料中证实的内容一律不作补写，而是集中列出。这些不是遗漏，是考据的边界。',
    gaps: [
      ['爆炸物独立条目', 'Fandom 的「Category:Explosives」为空分类页，无独立正文；本档案的爆炸物清单取自装备分类表，故只有名称与数量，没有逐项技术描述'],
      ['斯盖尔岛（Isle of Sgail）', '该地图的原文条目在存档过程中未能完整捕获，本站据点的斯盖尔岛条目因此缺少细节，仅保留可证实部分'],
      ['逐地图伪装清单', 'Fandom 的「List of disguises」为独立页面，本站未纳入存档；伪装板块因此只记录机制，不逐图罗列具体伪装'],
      ['机构成立年份', '无正史依据。最早的明确记录是 1973 年埃里希·索德斯开始其 ICA 代理人职业生涯；官方资料未给出创立年份'],
      ['董事会主席身份', '官方资料中从未具名，且从未在任何作品中露面'],
      ['时间线下限', '本档案时间线截止于 2023 年，此后官方未再推进剧情']
    ]
  }
];
