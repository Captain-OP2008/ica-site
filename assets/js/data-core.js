/* ==========================================================================
   data-core.js — ICA 核心组织数据
   数据来源：Hitman Fandom「International Contract Agency」页面正文
   （经 Wayback Machine 存档取得，2024-12-20 快照）
   凡标注 src 的字段均为原文可查内容；标注 extrapolated 的为按世界观补写。
   ========================================================================== */

const ICA_CORE = (() => {

  /* ---------- 基本信息 ---------- */
  const info = {
    fullName: '国际合同代理机构',
    fullNameEn: 'International Contract Agency',
    shortName: 'ICA',
    alias: 'The Agency',
    type: '犯罪组织',
    typeEn: 'Criminal Organization',
    motto: 'Merces Letifer',
    mottoMeaning: '致命交易（Lethal Trade）',
    founded: null,
    foundedNote: '官方年表与机构条目均未载明成立年份。年表中最早与机构直接相关的明确时间点是 1973 年 Erich Soders 开始其特工生涯。',
    companyType: '暗杀服务',
    companyTypeEn: 'Assassination',
    status: '已解散',
    statusEn: 'Dissolved',
    governance: '分散式董事会',
    governanceEn: 'Decentralized Board of Directors',
    political: '政治中立，道德务实',
    assetNo47: 'BRO3886'
  };

  /* ---------- 机构格言考据（Fandom Trivia 原文） ---------- */
  const mottoNotes = [
    {
      label: '现行格言',
      value: 'Merces Letifer',
      note: '官方设定中的格言，字面意为"致命交易"。'
    },
    {
      label: '语法问题',
      value: 'merces = 阴性名词；letifer = 阳性形容词',
      note: '两者性数不一致，因此"Merces Letifer"在拉丁文语法上是错误的。'
    },
    {
      label: '更准确的写法（致命商品）',
      value: 'Merces Letiferae',
      note: 'merces 作为阴性复数名词解作"商品"时的正确搭配。'
    },
    {
      label: '更准确的写法（致命报酬）',
      value: 'Merces Letifera',
      note: 'merces 作为阴性单数名词解作"报酬"时的正确搭配。'
    },
    {
      label: '"Lethal Trade" 的直译',
      value: 'Commercium Letale',
      note: '若严格对应英文"Lethal Trade"，此写法才准确。'
    }
  ];

  /* ---------- 徽记考据（Fandom Trivia 原文） ---------- */
  const logoNotes = [
    '本机构徽记以英国军情五处（MI5）的原始徽章为基础。',
    '原本位于三个角上的字符 M、I、5，被替换为 IOI（IO Interactive）与 D.K.（Denmark，丹麦）。',
    '徽记顶部的"全视之眼"常被与光明会及共济会联系在一起，也出现在美国一美元纸币上。'
  ];

  /* ---------- 等级体系 ----------
     来源：Fandom「The Saints ICA File」预告片文档 —— 机构以鸟类名称作为行动人员等级代号
  */
  const ranks = [
    { code: 'GAMMA',   desc: '高级行动人员等级。47 号仅凭一次击杀即达成此等级。',        src: 'ica.txt' },
    { code: 'EAGLE',   desc: 'The Saints 成员所持等级（如 Heather McCarthy、Louisa Cain 等）。', src: 'ica.txt' },
    { code: 'SPARROW', desc: '文档建议将成员 Heather McCarthy 以"rank Sparrow"聘用。',      src: 'ica.txt' },
    { code: 'TETRA',   desc: 'Benjamin Travis 与 Diana Burnwood 所属等级。',              src: 'ica.txt' },
    { code: 'Tritos',  desc: 'Jade Nguyen 与下属 Julius 所属等级。',                      src: 'ica.txt' },
    { code: 'OSTRCH1', desc: 'Maria Mullins 的等级标记。',                              src: 'ica.txt' }
  ];

  /* ---------- 董事会成员 ----------
     来源：小说《Hitman: Enemy Within》详述；截至 2003 年的董事会构成
  */
  const board = [
    { name: '身份不明的主席',      nameEn: 'Unidentified Chairman', role: '董事会主席',
      note: '嗓音低沉的男性，从不露面，并要求中层管理者（如 Diana）也尽量不露面。', status: 'Active' },
    { name: '阿希姆·什博特',        nameEn: 'Aheem Shbot',  role: '董事',
      note: '前伊拉克部长，携 2,500 万美元战时赃款外逃。', status: 'Active' },
    { name: '何塞·索萨',            nameEn: 'Jose Sosa',    role: '董事',
      note: '委内瑞拉石油部长。曾利用董事身份下达暗杀委托，多名竞争对手死于车祸。', status: 'Active' },
    { name: '弗兰克·唐',            nameEn: 'Frank Tang',   role: '董事',
      note: '中国三合会（犯罪组织）高层成员。', status: 'Active' },
    { name: '拉鲁·汗',              nameEn: 'Lalu Khan',    role: '董事',
      note: '绰号"妓院之王"，亚洲最大卖淫网络首领。', status: 'Active' },
    { name: '娜塔莉亚·卢卡 博士',   nameEn: 'Dr. Natalia Luka', role: '董事',
      note: '军火商，向第三世界出售俄制核武器。', status: 'Active' },
    { name: '汉斯·贝克',            nameEn: 'Hans Beck',    role: '董事',
      note: '德国工业家，有志从政。', status: 'Active' },
    { name: '玛丽·明纳尔',          nameEn: 'Mary Minnarr', role: '董事',
      note: '南非血钻大亨。', status: 'Active' },
    { name: '穆斯塔法·努尔',        nameEn: 'Mustapha Nour', role: '董事',
      note: '埃及军火商，向恐怖分子供货。', status: 'Active' },
    { name: '后藤修',              nameEn: 'Goto Osami',   role: '董事',
      note: '日本极道成员。', status: 'Active' },
    { name: '亚里士多德·索拉基斯',  nameEn: 'Aristotle Thorakis', role: '董事',
      note: '希腊船运巨头。因向竞争对手"Puissanze Treize"出售情报，后被 47 号奉命处决。至少下达过三次暗杀委托。',
      status: 'Deceased' },
    { name: '埃里希·索德斯',        nameEn: 'Erich Soders', role: '董事（前代理人／训练主管）',
      note: 'HITMAN™ 时期董事。向 Providence 出卖机构情报，被 47 号处决。', status: 'Defected/Deceased' },
    { name: '安格斯·普里查德',      nameEn: 'Angus Pritchard', role: '董事',
      note: '登场于《杀手 3》"End of an Era"任务，可夺取其伪装进入 ICA 设施。', status: 'Active' },
    { name: 'D. Bacon / G. Andrews / C. Levin / S. King / H. Jackson', nameEn: 'D. Bacon et al.', role: '董事',
      note: '五位董事，公开资料仅存姓氏缩写，状态不明。', status: 'Unknown' }
  ];

  /* ---------- 部门主管 ---------- */
  const divisionHeads = [
    { name: '本杰明·特拉维斯', nameEn: 'Benjamin Travis', code: 'TETRA',
      role: '部门主管 / 协调人',
      units: ['The Saints', 'Praetorians', 'Agency Assault Troopers', 'Agency Heavy Troopers'],
      status: 'Deceased',
      note: '在《杀手：赦免》期间秘密主导克隆刺客 Victoria 项目，是 ICA 内部腐败阶层的代表。' },
    { name: '玛丽亚·马林斯', nameEn: 'Maria Mullins', code: 'OSTRCH1',
      role: '未载明',
      units: [],
      status: 'Defected/Unknown',
      note: '曾于 2 月 1 日在第一外勤办事处训练 Travis。此后未再被提及。' }
  ];

  /* ---------- 协调人（Handler） ---------- */
  const handlers = [
    { name: '戴安娜·伯恩伍德', nameEn: 'Diana Burnwood', code: 'TETRA',
      role: '协调人', units: ['The Shadows'], status: 'Defected',
      note: '47 号的主要协调人，游戏系列中几乎唯一可闻的声音。多次违反"不得与资产当面接触"的规程。' },
    { name: '克莱拉', nameEn: 'Clera', code: '—', role: '协调人', units: [], status: 'Active',
      note: '《杀手 2：沉默刺客》"The Graveyard Shift"任务中出现，是该作中除 Diana 外唯一的另一把声音。' },
    { name: '焦', nameEn: 'Jiao', code: '—', role: '协调人', units: [], status: 'Active',
      note: '《杀手 3》柏林任务中参与伏击 47 号。' },
    { name: '多洛雷斯·鲍威尔', nameEn: 'Dolores Powell', code: '—', role: '协调人（前）', units: [], status: 'Formerly', note: '成员表中只留下这个姓名与一个 "Formerly"，无在职期、无对接代理人' }
  ];

  /* ---------- 情报员 / 线人 ---------- */
  const informants = [
    { name: '伯迪', nameEn: 'Birdie', role: '情报员（前代理人）', status: 'Active/Non-Exclusive',
      note: '非独家合作。拥有自用巴士（Birdie\'s Bus）。' }
  ];

  /* ---------- 已知代理人 ---------- */
  const agents = [
    { name: '47 号', nameEn: 'Agent 47', code: 'GAMMA', status: 'Defected',
      note: '机构效率最高的杀手，被客户指名委托的"都市传说"。' },
    { name: '马克斯·瓦利安特', nameEn: 'Max Valliant', code: '—', status: 'Formerly', note: '' },
    { name: '努先生', nameEn: 'Mr. Nu', code: '—', status: 'Active', note: '' },
    { name: '杰德·阮', nameEn: 'Jade Nguyen', code: 'Tritos', status: 'Deceased',
      note: '专属近战武器为细高跟短刀（Stiletto）。' },
    { name: '禁卫军', nameEn: 'Praetorians', code: '—', status: 'Deceased', note: '精英护卫单位。' },
    { name: '圣徒', nameEn: 'The Saints', code: 'EAGLE', status: 'Deceased',
      note: '全女性精英暗杀小队，由 Benjamin Travis 组建。' },
    { name: '玛丽·加尼耶', nameEn: 'Marie Garnier', code: 'EAGLE', status: 'MIA', note: '圣徒成员，下落不明。' },
    { name: '图利娅·赫尔南德斯', nameEn: 'Tuulia Hernandez', code: '—', status: 'Deceased/Defected', note: '' },
    { name: '121 号', nameEn: 'Agent 121', code: '—', status: 'Deceased',
      note: '在处决另外两名目标后，被目标"Tosini"反杀。' },
    { name: '捷豹', nameEn: 'Agent Jaguar', code: '—', status: 'Deceased', note: '' },
    { name: '卡尔', nameEn: 'Agent Karr', code: '—', status: '—', note: '' },
    { name: '奥尔博夫', nameEn: 'Agent Orbov', code: '—', status: '—', note: '' },
    { name: '格雷', nameEn: 'Agent Grey', code: '—', status: '—', note: '' },
    { name: '眼镜蛇', nameEn: 'Agent Cobra', code: '—', status: '—', note: '' },
    { name: '柯达', nameEn: 'Agent Kodak', code: '—', status: '—', note: '' },
    { name: '埃奇', nameEn: 'Agent Edge', code: '—', status: '—', note: '' },
    { name: '兰伯特', nameEn: 'Agent Lambert', code: '—', status: '—', note: '' },
    { name: '毒蛇', nameEn: 'Agent Viper', code: '—', status: '—', note: '' },
    { name: '史密斯', nameEn: 'Agent Smith', code: '—', status: '—', note: '' }
  ];

  /* ---------- 刺杀小组（Hit Squad） ---------- */
  const hitSquad = {
    leader: '蒙哥马利',
    leaderEn: 'Agent Montgomery',
    note: '蒙哥马利是 ICA 资深成员，但整个职业生涯中从未见过 47 号本人——这暗示 47 与机构及其成员几乎不接触。',
    members: ['Agent Montgomery', 'Agent Banner', 'Agent Tremaine', 'Agent Thames', 'Agent Green',
              'Agent Rhodes', 'Agent Swan', 'Agent Lowenthal', 'Agent Chamberlin', 'Agent Davenport', 'Agent Price']
  };

  /* ---------- The Shadows（狙击小组） ---------- */
  const shadows = ['Espelho', 'Kiya', 'Knight', 'Stone', 'Soji', 'Kolzak'];

  /* ---------- 机构直属单位 ----------
     来源：ica.txt「ICA Units」
  */
  const units = [
    { name: '重型步兵', nameEn: 'Agency Heavy Troopers', type: '战术突击单位', typeEn: 'Tactical Assault Unit', status: 'Dissolved' },
    { name: '机构士兵', nameEn: 'Agency Soldiers', type: '突击单位', typeEn: 'Assault Unit', status: 'Dissolved' },
    { name: '突击步兵', nameEn: 'Agency Assault Troopers', type: '低阶战斗单位', typeEn: 'Low Level Combat Unit', status: 'Dissolved' },
    { name: '机构技术员', nameEn: 'Agency Technician', type: '技术与法证', typeEn: 'Technician and Forensics', status: 'Dissolved' },
    { name: '圣徒', nameEn: 'The Saints', type: '实验性暗杀单位', typeEn: 'Experimental Wetwork Unit', status: 'Deceased' },
    { name: '禁卫军', nameEn: 'Praetorians', type: '精英安保单位', typeEn: 'Elite Security Unit', status: 'Deceased' },
    { name: 'ICA 数据设施', nameEn: 'ICA Data Facility', type: '网络部门', typeEn: 'Cyber Division', status: 'Exposed' },
    { name: '暗影', nameEn: 'The Shadows', type: '刺杀小组（以狙击为主）', typeEn: 'Hit squad (Sniper unit mainly)', status: 'Active' },
    { name: '清道夫部门', nameEn: 'Cleaner Division', type: '现场清理与痕迹消除', typeEn: 'Cleanup & Forensics', status: 'Active',
      note: '已知成员：Ishigami（高级清道夫）、Rivers（Ishigami 的学徒）。' },
    { name: '机构撤离单位', nameEn: 'Agency Extraction Unit', type: '撤离与护送', typeEn: 'Extraction', status: 'Dissolved' }
  ];

  /* ---------- ICA 数据设施岗位 ---------- */
  const dataFacilityRoles = [
    '设施警卫', '设施分析师', '设施工程师', '设施安保', '研究员', '街道警卫', '街区警卫'
  ];

  /* ---------- 已知车辆 ---------- */
  const vehicles = [
    'Agency Pegasus N26LM', 'Agency SUV', 'ICA Surveillance Van',
    'Birdie\'s Bus（非独家）', 'Jean Danjou', 'ICA Mobile Command Center', 'The Saint\'s Transport Bus'
  ];

  /* ---------- 已知客户组织 ---------- */
  const clientOrgs = [
    { name: 'Providence', status: 'Disbanded' },
    { name: 'Central Intelligence Agency', status: 'Active' },
    { name: 'MI5', status: 'Active' },
    { name: 'MI6', status: 'Active' },
    { name: 'United Nations', status: 'Active' },
    { name: 'Federal Bureau of Investigation', status: 'Active' },
    { name: 'Interpol', status: 'Active' },
    { name: 'New York Mafia', status: 'Active' },
    { name: 'Kronstadt Industries', status: 'Active' },
    { name: 'Hamilton-Lowe', status: 'Active' },
    { name: 'The Highmoore Family', status: 'Active' },
    { name: 'The Keeble Family', status: 'Active' },
    { name: 'L\'Avventura Pictures', status: 'Active' },
    { name: 'Dexter Industries', status: 'Dissolved' },
    { name: 'ICA Board', status: 'Disbanded' }
  ];

  /* ---------- 单次委托客户（具名） ---------- */
  const clientsNamed = [
    { name: 'Otto Wolfgang Ort-Meyer', status: 'Formerly, Deceased' },
    { name: 'Sergei Zavorotko', status: 'Formerly, Deceased' },
    { name: 'Mr. Northcott', status: 'Client' },
    { name: 'Blake Dexter', status: 'Deceased' },
    { name: 'Silvio Caruso', status: 'Formerly, Deceased' },
    { name: 'Taheji Koyama', status: 'Formerly, Deceased' },
    { name: 'Aleksander Kovak', status: 'Deceased' },
    { name: 'Lucas Grey', status: 'Shadow Client, Formerly, Deceased' },
    { name: 'Simone Larin', status: 'Client' },
    { name: 'Jackie Charrington', status: 'Client' },
    { name: 'Tommy Stoakes', status: 'Client' },
    { name: 'Senator Bingham', status: 'Client' },
    { name: 'Carlton Smith', status: 'Client, Associate' }
  ];

  /* ---------- 机构资产（外部合作者） ---------- */
  const assets = [
    { name: 'Carlton Smith', org: 'CIA（前）／Interpol', role: '间谍', status: 'Alive' },
    { name: 'Tommy Clemenza', org: 'Tommy Clemenza Sartoria', role: '裁缝／供应者', status: 'Determinant' },
    { name: 'Cherry Jones', org: 'FBI', role: '军火商／供应与情报', status: 'Alive' },
    { name: 'Yurishka', org: 'KGB（前）／俄罗斯陆军', role: '间谍', status: 'Alive' },
    { name: 'The Patriot', org: '—', role: '摔角手', status: 'Alive' },
    { name: 'Knight', org: '—', role: '合同杀手／狙击手', status: 'Alive/Recruited' },
    { name: 'Stone', org: '—', role: '合同杀手／前囚犯／狙击手', status: 'Alive/Recruited' }
  ];

  /* ---------- 关键情报：47 号的经济权重 ----------
     来源：《Hitman: Enemy Within》—— Fandom 正文引用
  */
  const assetEconomics = [
    { k: '47 号个人击杀数占机构全部目标的比例', v: '3%' },
    { k: '却贡献机构年度收入的比例', v: '37%' },
    { k: '单次委托报价区间（低价位）', v: 'USD 100,000' },
    { k: '单次委托报价区间（高难度目标）', v: 'USD 600,000' },
    { k: '情报简报单价（每份文件）', v: 'USD 1,500' },
    { k: '47 号在册编号（《杀手 2：沉默刺客》）', v: 'BRO3886' }
  ];

  /* ---------- 运作机制说明 ---------- */
  const operations = [
    {
      title: '代理人—协调人小组',
      titleEn: 'Agent-Handler Cells',
      body: '机构雇佣数量有限的"代理人—协调人"小组，以及由分析师、研究员、黑客、清道夫、招募人员与训练人员构成的后备网络。协调人负责协调任务、安排简报、交通与装备需求。'
    },
    {
      title: '不得当面接触',
      titleEn: 'No In-Person Liaison',
      body: '机构规定，管理者不应与其资产当面接触。然而 Diana Burnwood 在系列中多次违反这一规程。'
    },
    {
      title: '情报付费',
      titleEn: 'Intel for a Fee',
      body: '承包方以每份文件 1,500 美元的价格，向代理人出售任务目标的情报简报。'
    },
    {
      title: '协调人的自主准则',
      titleEn: 'Handler Autonomy',
      body: '每位协调人有权遵循自己的职业准则，前提是不为个人利益接受委托。'
    },
    {
      title: '团队与独行',
      titleEn: 'Teams vs. Solo',
      body: '代理人常常以团队形式行动，或卧底或公开编组。47 号是明显的例外，通常单独执行任务，且可能是唯一如此的代理人。'
    },
    {
      title: '云端架构',
      titleEn: 'Cloud-Based',
      body: '机构主要以云端方式运作，除少数关键资产外不设办公室——例如位于中国的数据存储站点，以及位于北极圈内的训练设施。'
    }
  ];

  /* ---------- 补充虚构：合规边界（依据"bad for business"原则补写） ---------- */
  const compliance = {
    src: 'extrapolated',
    items: [
      { k: '政治中立', v: '机构不接受由盟友的敌对势力下达的委托，以确保政府盟友的合作。' },
      { k: '不接受的目标类型', v: '儿童、宗教人士、医疗人员（依机构长期惯例，非成文条款）。' },
      { k: '拒绝理由', v: '仅在被判定为"bad for business"（不利于生意）时拒绝委托。' },
      { k: '目标画像', v: '47 号被指派的目标大多是职业罪犯——这既是道德姿态，也是风险控制。' },
      { k: '雇佣兵业务', v: '除暗杀外亦提供雇佣兵服务，由机构直属战斗单位执行。' }
    ]
  };

  return {
    info, mottoNotes, logoNotes, ranks, board, divisionHeads, handlers, informants,
    agents, hitSquad, shadows, units, dataFacilityRoles, vehicles,
    clientOrgs, clientsNamed, assets, assetEconomics, operations, compliance
  };
})();
