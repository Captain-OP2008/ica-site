/* ==========================================================================
   data-targets.js — 目标档案
   --------------------------------------------------------------------------
   依据：research/_body/world-of-assassination.txt 的 Main Targets / Around The World
        两节（按作品分列的任务与目标名单），以及各目标在 data-providence.js、
        data-personae.js、data-contracts.js 中已有的派系与身份信息。
   说明：合同视图是按「一纸合同」组织的；本视图按「一个目标是谁」组织，
        让读者能一眼看出每个任务杀的是哪个阵营的人、为什么该杀。
        目标名单直接取自原文，不做增补；派系与定位来自本站在其他条目中
        已核实的信息。
   ========================================================================== */

const ICA_TARGETS = [
  /* ==================== HITMAN™（2016） ==================== */
  {
    game: 'HITMAN™',
    gameEn: 'HITMAN (2016)',
    missions: [
      {
        name: '焦点人物',
        nameEn: 'The Showstopper',
        location: '法国 · 巴黎',
        targets: [
          { name: 'Viktor Novikov', nameZh: '维克托·诺维科夫', faction: 'Providence 告密者', role: '俄罗斯亿万富翁、时尚大亨，Sanguine 时装品牌与 IAGO 间谍网的所有者。Providence 需要 IAGO 收集的「全球精英」情报。', status: 'Deceased' },
          { name: 'Dalía Margolis', nameZh: '达莉亚·马尔戈利斯', faction: 'Providence 告密者', role: 'IAGO 的另一半，前 Mossad。负责间谍网的运作与情报变现。', status: 'Deceased' }
        ]
      },
      {
        name: '明日世界',
        nameEn: 'World of Tomorrow',
        location: '意大利 · 萨皮恩扎',
        targets: [
          { name: 'Silvio Caruso', nameZh: '西尔维奥·卡鲁索', faction: 'Providence 行动人员（Ether）', role: 'Ether 的生物工程师，Ether 病毒——一种 DNA 追踪生物制剂——的创造者。', status: 'Deceased' },
          { name: 'Francesca De Santis', nameZh: '弗朗切斯卡·德桑蒂斯', faction: 'Providence 行动人员（Ether）', role: 'Ether 的科学家，Caruso 的同事。清除她是为确保病毒无法被复制。', status: 'Deceased' }
        ]
      },
      {
        name: '镀金牢笼',
        nameEn: 'A Gilded Cage',
        location: '摩洛哥 · 马拉喀什',
        targets: [
          { name: 'Claus Hugo Strandberg', nameZh: '克劳斯·胡戈·斯特兰德伯格', faction: 'Providence 行动人员（AMB）', role: 'AMB CEO、瑞典银行家。他的行为激怒了摩洛哥民众，为政变提供了民意燃料。', status: 'Deceased' },
          { name: 'Reza Zaydan', nameZh: '雷扎·扎伊丹', faction: 'Providence 行动人员（摩洛哥军方）', role: '摩洛哥将军，Providence 策划的政变的军事执行者。', status: 'Deceased' }
        ]
      },
      {
        name: '27 号俱乐部',
        nameEn: 'Club 27',
        location: '泰国 · 曼谷',
        targets: [
          { name: 'Jordan Cross', nameZh: '乔丹·克罗斯', faction: '客户（独立）', role: '独立摇滚乐队 The Class 的主唱，媒体大亨 Thomas Cross 之子。', status: 'Deceased' },
          { name: 'Ken Morgan', nameZh: '肯·摩根', faction: 'Providence Herald', role: 'Morgan, Yates & Kohn 的律师，Cross 家族的法律代表。', status: 'Deceased' }
        ]
      },
      {
        name: '自由战士',
        nameEn: 'Freedom Fighters',
        location: '美国 · 科罗拉多',
        targets: [
          { name: 'Sean Rose', nameZh: '肖恩·罗斯', faction: '民兵（科罗拉多小组）', role: '民兵科罗拉多小组的负责人，早已登记在案的已知恐怖分子。', status: 'Deceased' },
          { name: 'Ezra Berg', nameZh: '埃兹拉·伯格', faction: '民兵', role: '民兵成员。', status: 'Deceased' },
          { name: 'Penelope Graves', nameZh: '佩内洛普·格雷夫斯', faction: '民兵', role: '民兵成员。', status: 'Deceased' },
          { name: 'Maya Parvati', nameZh: '玛雅·帕尔瓦蒂', faction: '民兵', role: '民兵成员。', status: 'Deceased' }
        ]
      },
      {
        name: '内脏反位',
        nameEn: 'Situs Inversus',
        location: '日本 · 北海道',
        targets: [
          { name: 'Erich Soders', nameZh: '埃里希·索德斯', faction: 'Providence 内线（ICA 董事会）', role: 'ICA 董事会成员、前训练主管。患先天性内脏反位，为换取一颗罕见的右位心，向 Providence 出卖 ICA 代理人名单。', status: 'Deceased' },
          { name: 'Yuki Yamazaki', nameZh: '山崎由纪', faction: 'Providence Herald', role: 'Providence 律师，Soders 与 Providence 之间的联络人。', status: 'Deceased' }
        ]
      }
    ]
  },

  /* ==================== HITMAN™ 2 ==================== */
  {
    game: 'HITMAN™ 2',
    gameEn: 'HITMAN 2',
    missions: [
      {
        name: '夜间来电',
        nameEn: 'Nightcall',
        location: '新西兰 · 霍克斯湾',
        targets: [
          { name: 'Alma Reynard', nameZh: '阿尔玛·雷纳德', faction: '民兵（高级中尉）', role: '影子客户的高级中尉之一。为完成任务，她与手下绑架、折磨并处决了一对无辜夫妻以冒充他们。', status: 'Deceased' }
        ]
      },
      {
        name: '冲线',
        nameEn: 'The Finish Line',
        location: '美国 · 迈阿密',
        targets: [
          { name: 'Robert Knox', nameZh: '罗伯特·诺克斯', faction: 'Providence 叛逃者（Kronstadt）', role: 'Kronstadt Industries 的发明家与 CEO。因害怕被民兵暗杀而选择叛离 Providence，试图与民兵谈交易。', status: 'Defected / Deceased' },
          { name: 'Sierra Knox', nameZh: '塞拉·诺克斯', faction: 'Providence 叛逃者（Kronstadt）', role: 'Kronstadt 的发明家兼 CFO，同时是赛车手。Robert 的女儿，与他一同叛逃。', status: 'Defected / Deceased' }
        ]
      },
      {
        name: '三头蛇',
        nameEn: 'Three-Headed Serpent',
        location: '哥伦比亚 · 圣福图纳',
        targets: [
          { name: 'Rico Delgado', nameZh: '里科·德尔加多', faction: 'Delgado 卡特尔', role: '卡特尔首领。他的水下分销网络被民兵用来在全球运送人员。', status: 'Deceased' },
          { name: 'Andrea Martínez', nameZh: '安德烈亚·马丁内斯', faction: 'Delgado 卡特尔', role: '卡特尔成员。', status: 'Deceased' },
          { name: 'Jorge Franco', nameZh: '豪尔赫·佛朗哥', faction: 'Delgado 卡特尔', role: '卡特尔成员。', status: 'Deceased' }
        ]
      },
      {
        name: '追猎幽魂',
        nameEn: 'Chasing a Ghost',
        location: '印度 · 孟买',
        targets: [
          { name: 'Vanya Shah', nameZh: '瓦尼亚·沙阿', faction: '孟买地方势力', role: '民兵「东方小组」相关人物。', status: 'Deceased' },
          { name: 'Wazir Kale', nameZh: '瓦齐尔·卡莱', faction: '民兵 / 印度海运海盗', role: '绰号「漩涡」（The Maelstrom）。印度海运海盗，被 Maya Parvati 推荐给 Grey 后加入其事业。', status: 'Deceased' },
          { name: 'Dawood Rangan', nameZh: '达伍德·兰甘', faction: '宝莱坞', role: '孟买地方势力。', status: 'Deceased' }
        ]
      },
      {
        name: '另一种生活',
        nameEn: 'Another Life',
        location: '美国 · 惠特尔顿溪',
        targets: [
          { name: 'Janus', nameZh: '雅努斯', faction: 'Providence 第一任 Constant', role: 'Providence 的缔造参与者之一、Ark Society 共同创始人。退休后隐居在郊区。他的死被用来掩护 Diana 报送的假情报。', status: 'Deceased' },
          { name: 'Nolan Cassidy', nameZh: '诺兰·卡西迪', faction: 'Providence Herald', role: 'Providence 指派给 Janus 的联络人兼安保负责人。清除他是为确保他无法向 Providence 反驳那份假报告。', status: 'Deceased' }
        ]
      },
      {
        name: '方舟会',
        nameEn: 'The Ark Society',
        location: '北大西洋 · 斯盖尔岛',
        targets: [
          { name: 'Zoe Washington', nameZh: '佐伊·华盛顿', faction: 'Ark Society / Providence 行动人员', role: 'Ark Society 新任联合主席、古物猎人。合伙人把 Constant 的「死亡开关」遥控器托付给了她与双胞胎姐妹。', status: 'Deceased' },
          { name: 'Sophia Washington', nameZh: '索菲亚·华盛顿', faction: 'Ark Society / Providence 行动人员', role: 'Ark Society 新任联合主席、古物猎人，Zoe 的双胞胎姐妹。', status: 'Deceased' }
        ]
      },
      {
        name: '金握手',
        nameEn: 'Golden Handshake',
        location: '美国 · 纽约',
        targets: [
          { name: 'Athena Savalas', nameZh: '雅典娜·萨瓦拉斯', faction: 'Providence 行动人员（Milton-Fitzpatrick）', role: 'Milton-Fitzpatrick 纽约分行行长。她是 Providence 与该银行最后的联系，清除她是为了在窃取账户数据后掩盖行迹。', status: 'Deceased' }
        ]
      },
      {
        name: '最后的度假地',
        nameEn: 'The Last Resort',
        location: '马尔代夫 · 避风港岛',
        targets: [
          { name: 'Tyson Williams', nameZh: '泰森·威廉姆斯', faction: 'Haven（Providence 资产）', role: 'Haven 的 CEO。Haven 表面做「声誉管理」，实则让陷入危机的富有罪犯消失。', status: 'Deceased' },
          { name: 'Ljudmila Vetrova', nameZh: '柳德米拉·韦特罗娃', faction: 'Haven（Providence 资产）', role: 'Haven 的客户协调人、招募者。', status: 'Deceased' },
          { name: 'Steven Bradley', nameZh: '史蒂文·布拉德利', faction: 'Haven（Providence 资产）', role: 'Haven 的 IT 专家与黑客。', status: 'Deceased' }
        ]
      }
    ]
  },

  /* ==================== HITMAN™ III ==================== */
  {
    game: 'HITMAN™ III',
    gameEn: 'HITMAN III',
    missions: [
      {
        name: '世界之巅',
        nameEn: 'On Top of the World',
        location: '阿联酋 · 迪拜',
        targets: [
          { name: 'Carl Ingram', nameZh: '卡尔·英格拉姆', faction: 'Providence 合伙人', role: 'Ingram 家族的后代，Ingram Industries CEO。1994 年起成为合伙人。', status: 'Deceased' },
          { name: 'Marcus Stuyvesant', nameZh: '马库斯·斯泰弗森特', faction: 'Providence 合伙人', role: 'Stuyvesant 家族的后代，Stuyvesant Company CEO。三位合伙人中最后一位上位者。', status: 'Deceased' }
        ]
      },
      {
        name: '家族之死',
        nameEn: 'Death in the Family',
        location: '英国 · 达特穆尔',
        targets: [
          { name: 'Alexa Carlisle', nameZh: '亚历克莎·卡莱尔', faction: 'Providence 合伙人', role: 'Carlisle 家族的后代，Carlisle Group CEO。1988 年成为合伙人。她掌握着关于爱德华兹的案卷。', status: 'Deceased' }
        ]
      },
      {
        name: '顶级掠食者',
        nameEn: 'Apex Predator',
        location: '德国 · 柏林',
        targets: [
          { name: 'ICA 刺杀小组', nameZh: 'ICA 刺杀小组', faction: 'ICA', role: '由 Agent Montgomery 率领的十人刺杀小队，被派往柏林追猎 47 与 Olivia Hall。任务允许击杀其中任意五名。', status: '—' }
        ]
      },
      {
        name: '时代终结',
        nameEn: 'End of an Era',
        location: '中国 · 重庆',
        targets: [
          { name: 'Hush', nameZh: '哈什', faction: 'ICA（档案员）', role: 'ICA 顶级档案员之一，同时是 Olivia Hall 从前的黑客导师。清除他是为了解除服务器机房的生物识别锁。', status: 'Deceased' },
          { name: 'Imogen Royce', nameZh: '伊莫金·罗伊斯', faction: 'ICA（档案员）', role: 'ICA 另一位顶级档案员。', status: 'Deceased' }
        ]
      },
      {
        name: '告别',
        nameEn: 'The Farewell',
        location: '阿根廷 · 门多萨',
        targets: [
          { name: 'Don Archibald Yates', nameZh: '唐·阿奇博尔德·耶茨', faction: 'Providence Herald', role: '律师、酿酒师，Morgan, Yates & Kohn 的合伙人。他是 Constant 之位当前的热门人选，在 Herald 中极受欢迎。', status: 'Deceased' },
          { name: 'Tamara Vidal', nameZh: '塔玛拉·维达尔', faction: 'Providence Herald', role: '前 CIA 资产、政治企业家、监视专家。被 Constant 派来监视 Diana。', status: 'Deceased' }
        ]
      },
      {
        name: '不可触碰',
        nameEn: 'Untouchable',
        location: '罗马尼亚 · 喀尔巴阡山脉',
        targets: [
          { name: 'Arthur Edwards', nameZh: '阿瑟·爱德华兹', faction: 'Providence Constant', role: 'Providence 第二任 Constant，Partners 死后接管整个组织。在开往蒙古 CICADA 基地的列车「The Mortar」号上与 47 最终对峙。', status: 'Determinant' }
        ]
      }
    ]
  }
];

/* 前「刺杀世界」时期的目标：合同视图已逐份记录，此处只做索引 */
const ICA_TARGETS_LEGACY = {
  note: '「刺杀世界」三部曲之前的作品，目标记录在合同视图中，本处仅按作品列出任务与目标以便对照。',
  eras: [
    { era: '《杀手：代号 47》', missions: ['李洪刺杀案 → Lee Hong', '向我的小朋友问好 → Pablo Belisario Ochoa', '行业传统 → Frantz Fuchs', '钚失控 → Arkadij「Boris」Jegorov', '终结 → Otto Wolfgang Ort-Meyer'] },
    { era: '《杀手：契约》', missions: ['肉王的派对 → Campbell Sturrock（The Meat King）· Andrei Puscus', '堪察加 → Fabian Fuchs · Sergei Bjarkhov', '贝尔丁福德庄园 → Winston Beldingford · Alistair Beldingford', '鹿特丹会面 → Rutgert Van Leuven · Klaas Teller', '鹿特丹 · 核弹头 → Arkadij Jegorov', '猎人与猎物 →（自我保护）'] },
    { era: '《HITMAN™ III》追加', missions: ['水中暗影 → Noel Crest · Akal Knight'] }
  ]
};

/* 导出 */
if (typeof window !== 'undefined') {
  window.ICA_TARGETS = ICA_TARGETS;
  window.ICA_TARGETS_LEGACY = ICA_TARGETS_LEGACY;
}
