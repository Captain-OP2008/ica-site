/* ==========================================================================
   data-agents.js — 代理人 / 协调人 / 关联人物档案
   主来源：Hitman Fandom 各人物条目正文（Wayback Machine 存档）
     agent-47.txt / diana-burnwood.txt / lucas-grey.txt / agent-17.txt /
     five-fathers.txt / arthur-edwards.txt / ica.txt
   cat: CORE 核心成员 · HANDLER 协调人 · AGENT 代理人 · UNIT 单位成员
   凡 detail 中标注"（补写）"的条目为按世界观合理补全，其余均出自原文。
   ========================================================================== */

const ICA_AGENTS = [
  /* ===================== 核心：47 号 ===================== */
  {
    id: 'BRO3886', name: '47 号', nameEn: 'Agent 47', initials: '47',
    alias: 'The Hitman / Asset 47 / XAO47 / Mr. 47 / Codename 47',
    code: 'GAMMA', role: '代理人（前首席）', unit: '独立行动 · 无固定小组',
    cat: 'CORE', born: '1964 年 9 月 5 日', nation: '罗马尼亚（出生地）',
    status: 'Defected · 已脱离机构',
    summary: '全球最顶尖的杀手。由 Ort-Meyer 博士以"五父"的基因创造的第四系列第 47 号克隆体，曾长期担任 ICA 的首席代理人，最终将机构的存在向全世界公开。',
    detail: [
      '在册编号 BRO3886（《杀手 2：沉默刺客》）。他是机构中唯一以编号而非姓名登记的代理人——他有编号是因为前一个机构（Ort-Meyer 的克隆项目）给的，其他代理人则只是被称作名字。',
      '《杀手：Enemy Within》给出过一组比例：他亲手杀死的目标只占机构全部目标的 3%，却贡献了机构年度收入的 37%。',
      '仅凭一次击杀即达到 GAMMA 等级，是机构中最昂贵的资产。他的收费区间是 10 万至 60 万美元——低价档 10 万，像 Deewana Ji 或 Sheikh Al-Khalifa 这类难缠目标则收 60 万。',
      '他被公认为机构效率最高的杀手，一则有名的"都市传说"，客户常常点名要他。Benjamin Travis 与一些 ICA 士兵在《杀手：赦免》中称他为"手术刀"（scalpel），意即机构最细腻、最精确的刺客。',
      '与机构及其成员几乎不接触——资深成员蒙哥马利整个职业生涯中从未见过 47 本人。',
      '后脑有条形码 640509-040147：64-05-09 为制造日期，04 表示第四系列，01 表示该系列第一人，47 表示他是第 47 号。',
      '在《杀手：赦免》开头曾试图用剃刀割除条形码，但至游戏结束仍清晰可见——这是他唯一一次试图抹掉自己的出厂标记，并且失败了。',
      '在 ICA 的运作中，代理人的"职业性超然"是他与暴徒之间的区别：他把杀人当作一份需要精确完成的工作，而不是需要享受的行为。'
    ],
    quote: 'The world\'s deadliest and most efficient assassin.'
  },

  /* ===================== 协调人：Diana ===================== */
  {
    id: 'ICA-H-001', name: '戴安娜·彭妮洛普·伯恩伍德', nameEn: 'Diana Penelope Burnwood', initials: 'DB',
    alias: 'Diana Burnwood',
    code: 'TETRA', role: '协调人（前）', unit: 'The Shadows（对接）',
    cat: 'HANDLER', born: '1972 年 9 月 12 日', nation: '英格兰',
    status: 'Defected · 已与 47 转为自由职业',
    summary: '47 号的主要协调人，也是他在世上极少数真正的朋友之一。她自《杀手》初代起就贯穿全部故事线，几乎是为 47 提供客户、目标与信息的唯一声音。',
    detail: [
      '出身英格兰世家：父亲为第五代从男爵 Sir Peter Lloyd Burnwood，母亲 Lady Nancy Burnwood。',
      '1975–1984 年就读于 Beaconsfield 的 High March School；1985 年进入 High Wycombe 的 Wycombe Abbey School。',
      '1989 年，Surrey 一家属于 Blue Seed Pharmaceuticals 的设施向水源泄漏危险化学品，导致 80 人死亡，其中包括 Diana 的弟弟 James Oliver Burnwood。',
      '在弟弟葬礼期间或之后不久，她的父母死于一场汽车炸弹——下令者是 Blue Seed 高层及其在秘密结社 Providence 中的关系人。执行者是当时受雇于 Providence 的 47 号本人。',
      '曾在 ICA 协调人 Robyn Gore（化名 Smythe，办公室伪装成会计师事务所）门下学徒。',
      '1999 年末与 Gore 共同监督对 Bricolage Technology 创始人 Franklin Marchand 的合同；47 制服了 ICA 派出的四人小组，并用人质司机驾车碾死 Marchand，Diana 随后在酒吧与 47 会面并递交了 ICA 的招募意向。',
      '等级是逐作晋升的：《代号 47》时期为 NOV，《沉默刺客》时期为 PLUS，《契约》时期为 ALPHA，《血钱》时期为 GAMMA（2007 年 11 月取得，当时是取得该等级最年轻的行动人员），2009 年 6 月被有条件地晋升为 TETRA。成员表记的 TETRA 是她的最终等级——此前档案把成员表的 TETRA 与正文提到的 ALPHA 视为矛盾，现已由完整晋升序列解释清楚。',
      '在《杀手：赦免》中于淋浴时被 47 射中胸部，临死前请求他保护 Victoria；她实际上用假死血清活了下来。',
      '其专属武器为假死血清（Fake Death Serum），持有 ICA19 Chrome。',
      '配音：Vivienne McKee（《沉默刺客》–《血钱》）、Marsha Thomason（《赦免》）、Jane Perry（《HITMAN™》–《HITMAN™ III》）。'
    ],
    quote: 'Diana has proved a valuable asset to Agent 47; as well as being one of his extremely few genuine friends.'
  },

  /* ===================== 索德斯 ===================== */
  {
    id: 'ICA-B-013', name: '埃里希·索德斯', nameEn: 'Erich Soders', initials: 'ES',
    alias: 'The Training Director',
    code: 'TETRA', role: '董事会成员 · 训练主管', unit: 'ICA Training Facility',
    cat: 'CORE', born: '', nation: '',
    status: 'Defected / Deceased · 叛逃后伏诛',
    summary: '前代理人，后任机构训练主管并进入董事会。他是 Diana 的导师，也是将 47 批准进入外勤的人，却最终向 Providence 出卖了整个机构。',
    detail: [
      '在 47 于 2003 年处决 Aristotle Thorakis 之后，接替其董事会席位。',
      '作为董事会成员，却为 Providence 充当内线，准备将现役代理人名单交给联络人山崎由纪（Yuki Yamazaki）。',
      '交易条件是一台救命的复杂手术：他患有先天性内脏反位（Situs Inversus），急需心脏移植，Providence 凭借影响力为他取得了一颗罕见的"右位心"，并由机构出面把他送进北海道极机密的 GAMA 医院。',
      'ICA 董事会查明这次叛变后，要求 47 潜入该医院将其清除——既为阻止名单交到 Providence 手中，也为对外发出"不得干涉机构主权"的警告。他最终死在手术台上。',
      '是 Diana Burnwood 的导师（Mentor, formerly）——机构内部存在一条由导师、训练主管与协调人构成的培养链，他位于链条的最上游，也最先背叛了这条链。'
    ]
  },

  /* ===================== Travis ===================== */
  {
    id: 'ICA-B-011', name: '本杰明·特拉维斯', nameEn: 'Benjamin Travis', initials: 'BT',
    alias: '',
    code: 'TETRA', role: '部门主管 · 协调人', unit: 'The Saints / Praetorians',
    cat: 'CORE', born: '', nation: '',
    status: 'Deceased · 已伏诛',
    summary: '机构内部腐败阶层最典型的代表。他在《杀手：赦免》期间秘密主导克隆刺客 Victoria 项目，并向 47 下达了处决 Diana 的命令。',
    detail: [
      '统辖 The Saints、Praetorians、Agency Assault Troopers 与 Agency Heavy Troopers。',
      '命令 47 去杀死 Diana Burnwood；在 47 转而保护 Victoria 后，将其标记为叛逃者并签发击杀令。',
      '在 Diana 的临终请求下被 47 处决——他下令杀死的那名协调人，最终由她本人下令杀死他。',
      '训练过他的协调人是代号 121 的 Maria Mullins（2 月 1 日于第一外勤办公室）——她自己后来在执行任务时被目标反杀。'
    ]
  },

  /* ===================== Mullins ===================== */
  {
    id: 'ICA-H-002', name: '玛丽亚·马林斯', nameEn: 'Maria Mullins', initials: 'MM',
    alias: '机构成员表中的少数具名董事之一',
    code: 'OSTRCH1', role: '董事会成员', unit: '',
    cat: 'BOARD', born: '', nation: '',
    status: 'Defected/Unknown · 状态不明',
    summary: '机构董事会成员，机构成员表中少数具名的董事之一。关于她的记录只有两条：一条训练记录，一个等级代码。她不属于五名已知协调人之列——那五人是 Diana Burnwood、Clera、Jiao、Robyn Gore 与 Dolores Powell。',
    detail: [
      '等级标记为 OSTRCH1。按规定应为 OSTRICH（鸵鸟），档案中这个多出的"1"没有任何解释。机构公开的等级体系里只有她一人带这种数字后缀。',
      '她曾于 2 月 1 日在第一外勤办事处训练 Benjamin Travis——即后来组建"圣徒"、并在机构内部另立部门的那个 TETRA 级主管。',
      '公开资料中关于她的全部信息仅有这一条训练记录，她的部门、国籍与生卒年全部空白，状态记为 Defected/Unknown。'
    ]
  },

  /* ===================== 其他协调人 ===================== */
  {
    id: 'ICA-H-003', name: '克莱拉', nameEn: 'Clera', initials: 'CL',
    alias: '', code: '—', role: '协调人', unit: '',
    cat: 'HANDLER', born: '', nation: '', status: 'Active',
    summary: '《杀手 2：沉默刺客》"The Graveyard Shift"任务中出现的第二个声音。整个系列里 Diana 几乎是唯一被听到的协调人，而 Clera 是这个规则唯一的例外——原文的说法是：全系列只有另一个声音，那就是 Clera。',
    detail: [
      '她的全部出场只有"The Graveyard Shift"这一个任务，此后在任何作品中都没有再被提及。游戏把她列在"其他角色"之下，与神秘人、Lei Ling、Tanaka Kusahana 并列。',
      '在 47 号的关系表中她与 Diana 并列被标为"协调人（Handler）"，说明这次联络是正式编制内的安排，而非临时客串。',
      '机构档案对她的记载只有四项：等级 Unknown、部门 N/A、职位 Handler、状态 Active。她的国籍、生卒年与所属分部全部空白。',
      'Diana 之所以是"几乎唯一"的声音，原因在机构的分工：代理人与协调人通常终身配对，47 是全机构唯一的例外——这条规则的一次微小破例，就是 Clera。'
    ]
  },
  {
    id: 'ICA-H-004', name: '焦', nameEn: 'Jiao', initials: 'JI',
    alias: '', code: '—', role: '协调人', unit: '',
    cat: 'HANDLER', born: '', nation: '', status: 'Active',
    summary: '《杀手 3》柏林任务中参与对 47 的伏击。与机构中多数协调人不同，她在这份行动中的角色不是远程支援，而是现场内的对抗方——柏林的任务环境是一处地下夜店 Club Hölle，机构派出的刺杀小组在此设伏。',
    detail: [
      '在 47 与机构决裂后，站在机构一边——这与 Diana 的选择正好相反：同为协调人，一个跟机构走，一个跟代理人走。',
      '机构档案把她的状态标为 Active——她是五名已知协调人中唯一在机构解散时仍在职的。Diana 的档案状态是 Defected。',
      '柏林那次伏击由她与 Agent Montgomery 共同执行：档案把 Montgomery 的小队列在"未命名打击队"（Unnamed Hit Squad）名下，协调这条线的是焦。'
    ]
  },
  {
    id: 'ICA-H-005', name: '罗宾·戈尔', nameEn: 'Robyn Gore', initials: 'RG',
    alias: '化名 Smythe',
    code: '—', role: '协调人（前）', unit: '',
    cat: 'HANDLER', born: '', nation: '', status: 'Formerly',
    summary: 'Diana Burnwood 的师父，也是把 47 号带进机构的那份合同的监督者。她的办公室伪装成一家会计师事务所，并在公开记录中使用化名 Smythe——一家暗杀机构的协调人，公开身份是会计。',
    detail: [
      '1999 年末与学徒 Diana 共同监督对 Franklin Marchand 的合同。Marchand 是 Bricolage Technology 的创始人，公开身份是卫星技术生产商，实际在阿富汗经营化学武器生意，旗下一座秘密工厂的泄漏至少造成周边 500 人死亡。',
      '他原定在巴黎协和广场做一次罕见的公开露面，宣布为阿富汗贫困人口设立救济基金。47 的未知客户坚持他必须死于一场表面上的意外，并留下一句明确的要求："不接受其他情况。如果 Marchand 以别的方式死去，他会被供成烈士。"',
      '同一时间另有他人雇了机构去杀 Marchand，机构为此派出了一支四人小队持枪前往。这两份委托互相不知情——而 47 在极短时间内连续制伏了机构这支小队，随后持枪胁迫一名出租车司机开车撞死 Marchand，以此满足"意外"的要求。',
      '正是这次表现让 Diana 在事后于一间酒吧与 47 会面、转达机构的招募意向，并向机构强烈推荐聘用他。换句话说：47 的入职测试，就是这份由 Robyn Gore 监督、由 Diana 转达的合同。',
      '那句"不接受其他情况"的客户要求，解释了 Diana 此后一贯的行事偏好——她经手的合同里，"意外"始终是最被看重的一种交付方式。'
    ]
  },
  {
    id: 'ICA-H-006', name: '多洛雷斯·鲍威尔', nameEn: 'Dolores Powell', initials: 'DP',
    alias: '', code: '—', role: '协调人（前）', unit: '',
    cat: 'HANDLER', born: '', nation: '', status: 'Formerly',
    summary: '机构前协调人。公开资料中的记载极为零散——她属于协调人序列中"只留下一个名字"的那一类：机构的人员档案在解散时被系统性清除，此人的在职期、对接的代理人、经手的合同均无记录。',
    detail: []
  },

  /* ===================== 代理人 ===================== */
  {
    id: 'ICA-A-017', name: '17 号', nameEn: 'Agent 17', initials: '17',
    alias: 'Mr. 17',
    code: '—', role: '代理人（Ort-Meyer 系列）', unit: '无（受雇于 Sergei Zavorotko）',
    cat: 'AGENT', born: '', nation: '',
    status: 'Deceased · 被 47 处决',
    summary: 'Ort-Meyer 第一个成功的克隆刺客，47 号的前身——但他没有 47 那样的运气。外貌与 47 极为相似，区别在于他戴黑色墨镜、系橙色领带。Ort-Meyer 在培养与训练后判定他并不具备超出常人的力量或耐力，因此把他列为"令人失望的作品"。他的职业生涯从这份评语开始，最后在圣彼得堡被那个"成功品"亲手终结。',
    detail: [
      '他是唯一能够在潜行状态下察觉 47 的角色——在《杀手：代号 47》的"传统"关卡中，他能识破 47 的伪装。这项能力在整部系列中再未出现在任何其他角色身上。',
      '在 Ort-Meyer 死后，被 Sergei Zavorotko 与"神秘人"在设施中寻获。',
      'Zavorotko 把他出借给向他购买核装置的 Deewana Ji；Deewana 的教派却在 17 的协助下反骗 Zavorotko，夺走了他手中的弹头。',
      '在圣彼得堡被 Zavorotko 派去杀 47，反被 47 击杀。47 事后表示，他以为自己已经杀光了所有的"兄弟"。',
      '他是仅有三位曾离开精神病院的 Ort-Meyer 克隆体之一（另两位是 47 与 Lucas Grey / Subject 6）。'
    ]
  },
  {
    id: 'ICA-C-006', name: '6 号 · 卢卡斯·格雷', nameEn: 'Lucas Grey', initials: 'LG',
    alias: 'Subject 6 / The Shadow Client',
    code: '—', role: '前克隆体 · 影子客户', unit: '私人武装（自建）',
    cat: 'CORE', born: '', nation: '罗马尼亚（出生地）',
    status: 'Deceased · 自我牺牲',
    summary: '47 的童年挚友与"兄弟"，同为 Ort-Meyer 的实验体。他成功逃离"人类改良研究所"，代价是 47 被重新抓获并被洗去记忆。',
    detail: [
      '1977 年 3 月 23 日说服 47 与他一起逃跑，藏身于一个小村庄，随后再次被捕——全村人被屠杀以消除证人。',
      '1989 年在柏林执行任务期间，胁迫一名德国科学家解除他们体内的爆炸芯片植入物，随后 47 违背 6 的意愿杀死了那名科学家。',
      '两人返回设施后试图释放其余克隆体（过程中杀死数名守卫），最终 6 逃脱，47 被 Ort-Meyer 的安保带走。',
      '此后以"卢卡斯·格雷"的身份在外部世界生活，领导自己的私人武装，向 Providence 开战。',
      '在罗马尼亚布拉索夫一座废弃精神病院与 47 第一次面对面相见，并向 47 揭示：他们当年杀死了 Diana 的父母。',
      '是"影子客户"——机构曾在不知情的情况下，承接了来自他的一系列关联合同；也就是说，机构一度在为自己的敌人执行订单。',
      '在《杀手 3》中为掩护 47 与 Diana 而自我牺牲。他是 47 唯一确认过的同源同类，也是唯一一个知道 47 全部来历的人。'
    ],
    quote: 'Lucas Grey is a seasoned mercenary on a mission to take down Providence.'
  },
  {
    id: 'ICA-A-047X', name: '马克斯·瓦利安特', nameEn: 'Max Valliant', initials: 'MV',
    alias: '', code: '—', role: '代理人（前）', unit: '',
    cat: 'AGENT', born: '', nation: '', status: 'Formerly · 已脱离',
    summary: '机构前代理人，后脱离机构。其档案编号挂在 47 号的编号之后（047X 后缀）——在机构的编号惯例里，这种并列写法通常意味着两人被归入同一类别，但公开资料并未说明两人之间是否存在直接关系。',
    detail: []
  },
  {
    id: 'ICA-A-NU', name: '努先生', nameEn: 'Mr. Nu', initials: 'NU',
    alias: '', code: '—', role: '代理人', unit: '',
    cat: 'AGENT', born: '', nation: '', status: 'Active',
    summary: '机构在册代理人。名称不遵循"代号 + 数字"的常规格式，也不属于任何已知的动物代号体系——他因此被单独列为一条，作为机构命名规则的一个明确例外。',
    detail: [ '与「努先生」相似的例外还包括「Tritos」，两者都说明机构的等级与代号体系并非完全封闭。' ]
  },
  {
    id: 'ICA-A-JN', name: '杰德·阮', nameEn: 'Jade Nguyen', initials: 'JN',
    alias: '', code: 'Tritos', role: '代理人', unit: '（下属：Julius）',
    cat: 'AGENT', born: '', nation: '', status: 'Deceased · 已阵亡',
    summary: '机构代理人，专属近战武器为细高跟短刀（Stiletto）——这是系列中唯一一件与具体代理人绑定的近战武器，无法为 47 所用。她的代码是 Tritos，而成员表中她与下属 Julius 的等级栏互为镜像：她的"上级"一栏写的是 Benjamin Travis，"下属"一栏写的是 Julius。',
    detail: [
      'Tritos 是已知等级体系中唯一的例外：其余等级都取自鸟类（EAGLE、SPARROW、OSTRCH1）或希腊字母（ALPHA、GAMMA、TETRA），只有它不属于任何一类，档案也未说明它的来源。',
      '她的下属 Julius 同持 Tritos 等级，在成员表中被列为"Jade 的直接下属"，职级一栏另有 "Beginning-Analyst" 与 "Unknown" 两条记录。'
    ]
  },
  {
    id: 'ICA-A-121', name: '121 号', nameEn: 'Agent 121', initials: '121',
    alias: '', code: '—', role: '代理人', unit: '',
    cat: 'AGENT', born: '', nation: '', status: 'Deceased · 任务中被反杀',
    summary: '在执行任务的途中被反杀——他先处决了两名目标，随后死于目标"Tosini"之手。这是机构档案中少数几条明确了"代理人并非不可战胜"的记录之一。',
    detail: [
      '他的名字在 Benjamin Travis 的 ICA 档案预告片中被提到：一名代号"121"的代理人在处决了两名目标之后，被第三名目标 Tosini 反杀。这是机构档案中少数几条写下死因的记录。',
      '成员表给出了他的报备对象：Benjamin Travis——即后来那个在机构内部另立秘密部门的人。',
      '同一段资料还指出，121 号就是那个名为 Maria Mullins 的角色：她在 2 月 1 日于第一外勤办公室训练过 Travis。除此之外她再未被提及，这暗示她在《血钱》或《诅咒》的事件之前就已经死亡或叛逃。',
      '与 47 号形成对照：机构绝大多数代理人的结局都没有留下记录，121 号是少数被记下死因的一个。'
    ]
  },
  {
    id: 'ICA-A-JG', name: '捷豹', nameEn: 'Agent Jaguar', initials: 'JG',
    alias: '', code: '—', role: '代理人', unit: '',
    cat: 'AGENT', born: '', nation: '', status: 'Deceased',
    summary: '机构在册代理人，已阵亡。代号采用动物命名——与鸟类等级（EAGLE / ALPHA / SPARROW / OSTRCH1）和 Gamma 这类等级代号不同，动物代号属于个人行动名。',
    detail: [
      '他隶属"机构撤离单位"（Agency Extraction Unit）——成员表把该单位与暗影、圣徒等小组并列，并标注其状态为"已解散"（dissolved）。',
      '同单位另有 Agent Karr 与 Agent Orbov 两条记录，但两者都没有标注状态，只有捷豹一人被明确记为已阵亡。',
      '同一份名单中还有 Agent Grey、Agent Cobra、Agent Kodak 等以动物为代号的代理人——动物代号是个人行动名，与 EAGLE / ALPHA / SPARROW 这类等级代号属于两套互不替代的体系。'
    ]
  },
  {
    id: 'ICA-A-MS', name: '蒙哥马利', nameEn: 'Agent Montgomery', initials: 'MO',
    alias: '', code: '—', role: '资深成员 · 刺杀小组队长', unit: 'Hit Squad',
    cat: 'AGENT', born: '', nation: '', status: 'Active',
    summary: '机构资深成员，刺杀小组的队长。他的存在本身就是一个注脚：整个职业生涯中，他从未见过 47 号本人。成员表中他的"单位"一栏写的是 Unnamed Hit Squad（未命名刺杀小组），"职位"一栏是 Leader of a hit squad，而"代码"一栏始终是 Unknown——一名带队多年的资深成员，在机构的代号体系里没有位置。',
    detail: [
      '率领由 Banner、Tremaine、Thames、Green、Rhodes、Swan、Lowenthal、Chamberlin、Davenport、Price 组成的刺杀小组。',
      '他与 47 之间从未有过任何接触——这暗示 47 与机构及其成员之间几乎不存在面对面关系。'
    ]
  },

  /* ===================== 单位成员 ===================== */
  {
    id: 'ICA-U-SNT', name: '圣徒', nameEn: 'The Saints', initials: 'ST',
    alias: 'The Saints ICA File',
    code: 'EAGLE', role: '实验性暗杀单位（全女性）', unit: '由 Benjamin Travis 组建',
    cat: 'UNIT', born: '', nation: '', status: 'Deceased · 除一人外全员阵亡',
    summary: '由 Benjamin Travis 组建的全女性精英暗杀小队。该单位是机构内部腐败阶层的直接产物——它由 Travis 在机构既有编制之外另立，成员全部为女性，且见过 47 号本人的机构成员大多出自这里。',
    detail: [
      '八名成员在机构档案中全部具名，但等级并不统一：LaSandra Dixon（GAMMA，小队战地队长）、Jacqueline Moorehead（EAGLE）、Agnija Radoncic（EAGLE）、Dijana Radoncic（EAGLE）、Jennifer Anne Paxton（EAGLE）、Louisa Cain（EAGLE）、Boo（EAGLE）、Marie Garnier（EAGLE）、Heather McCarthy（标为 EAGLE，但带"可能"限定词）。',
      'LaSandra Dixon 持 GAMMA 等级——与 47 号同级，也是全库中除 47 之外唯一持该等级的具体人员。这解释了这支小队为何被单独编列。',
      'Marie Garnier 是唯一没有确认死亡记录的成员，档案状态为 M.I.A./Unknown。',
      '该单位曾被临时借调：档案中另有一批"临时编入圣徒"的机构士兵，编在一个未命名打击队下，包括 Alvin K. Stansbury、Henry C. Kinard、Harold B. Hoff、Mark W. Goodwill、Norman M. Rountree、John Do\u2019oh、Jeffrey S. Hewitt 等人。',
      'ICA 文档曾建议将成员 Heather McCarthy 以"rank Sparrow"聘用——注意她的 EAGLE 等级带有"可能"限定，档案对这次聘用并不确定。',
      '以"伪装成性工作者接近目标"为主要战术之一——这是全库中唯一记录了具体战术偏好的单位。'
    ]
  },
  {
    id: 'ICA-U-PRT', name: '禁卫军', nameEn: 'Praetorians', initials: 'PR',
    alias: '', code: '—', role: '精英护卫单位', unit: '由 Benjamin Travis 统辖',
    cat: 'UNIT', born: '', nation: '', status: 'Deceased · 三名具名成员全部阵亡',
    summary: '机构精英护卫单位，负责要员保护与高风险押送。他们不执行刺杀，只负责让某个人或某件东西活着抵达目的地——在与机构自己的代理人发生冲突时，这意味着要同时对抗机构训练出的同类。',
    detail: [
      '三名具名成员：Jack Aegis、John Hoplon、Carey Scutum，全部阵亡。',
      '这三个姓氏都取自拉丁语中的盾：Aegis 是宙斯与雅典娜的神盾，Hoplon 是希腊重装步兵的圆盾，Scutum 是罗马军团的矩形盾。一个不执行刺杀、只负责"让目标活着"的单位，其成员全部以盾命名。',
      '在《杀手：赦免》期间担任 Victoria 的押送与看守力量——他们要保护的不是机构的人，而是一个机构内部秘密项目的产物。',
      '由 Benjamin Travis 统辖。这一点值得注意：负责要员保护的护卫单位与负责刺杀的代理人，在 Travis 的平行体系下被并入同一条指挥链，而这条链最终指向的是机构自己的首席资产。'
    ]
  },
  {
    id: 'ICA-U-SHD', name: '暗影', nameEn: 'The Shadows', initials: 'SH',
    alias: '', code: '—', role: '刺杀小组（以狙击为主）', unit: '由 Diana Burnwood 对接',
    cat: 'UNIT', born: '', nation: '', status: 'Active',
    summary: '机构中一支以狙击为主要手段的刺杀小组，六名已知成员为 Espelho、Kiya、Knight、Stone、Soji 与 Kolzak。它的特别之处在于成员背景并不统一：Knight 与 Stone 是后来才被机构招募的独立合同杀手／狙击手，Stone 更是一名前囚犯。',
    detail: [
      'Knight 的前职是独立合同杀手／狙击手，Stone 则是前囚犯——一支以狙击为主的单位，成员却来自两种完全不同的出身。',
      '其余四名成员 Espelho、Kiya、Soji 与 Kolzak 在档案中没有记录任何前职，这个缺口本身也说明机构并不总是登记成员的来历。'
    ]
  },
  {
    id: 'ICA-U-CLN', name: '清道夫部门', nameEn: 'Cleaner Division', initials: 'CD',
    alias: '', code: '—', role: '现场清理与痕迹消除', unit: '',
    cat: 'UNIT', born: '', nation: '', status: 'Active',
    summary: '负责消除现场痕迹、切断证据链的部门。已知成员为高级清道夫 Ishigami 与他的学徒 Rivers。机构把清道夫与分析师、研究员、黑客、招募者、训练人员并列为支撑网络的一部分——这些人不执行刺杀，却决定了刺杀能否被追溯。',
    detail: [
      '机构之所以能够长期不存在于任何公开记录中，这个部门是主要原因之一——一次刺杀是否成立，取决于现场有没有留下可被追溯的东西。',
      '已知成员为高级清道夫 Ishigami 与他的学徒 Rivers；两人都在机构在册，但都不是代理人。',
      '机构内部存在两种清理职能：技术员处理行动前的装备与情报，清道夫处理行动后的现场。'
    ]
  },
  {
    id: 'ICA-U-AGT', name: '机构突击步兵', nameEn: 'Agency Assault Troopers', initials: 'AT',
    alias: '', code: '—', role: '低阶战斗单位', unit: '',
    cat: 'UNIT', born: '', nation: '', status: 'Dissolved',
    summary: '机构直属的低阶战斗单位，主要用于正面压制与封锁。与禁卫军的护卫定位相反，突击步兵是机构在常规任务中最早被派出、也是最容易被消耗的一档——在机构的单位清单里，他们是唯一被明确标注为"低阶"的战斗单位。',
    detail: [ '机构同时保有突击步兵、重型步兵与禁卫军三个战斗单位，三者的差别不在装备而在任务性质：压制、突入、护卫。' ]
  },
  {
    id: 'ICA-U-HVY', name: '机构重型步兵', nameEn: 'Agency Heavy Troopers', initials: 'HT',
    alias: '', code: '—', role: '战术突击单位', unit: '',
    cat: 'UNIT', born: '', nation: '', status: 'Dissolved',
    summary: '机构的重装突击力量，配备重型武器与防护装备。在机构清单的单位分类中，它是唯一被标为"战术突击"的单位——与低阶的突击步兵形成档位差。',
    detail: []
  },
  {
    id: 'ICA-U-TEC', name: '机构技术员', nameEn: 'Agency Technician', initials: 'TC',
    alias: '', code: '—', role: '技术与法证', unit: '',
    cat: 'UNIT', born: '', nation: '', status: 'Dissolved',
    summary: '负责装备配置、技术支援与法证分析。机构的战斗单位在清单里只有三个，而技术员是唯一不带武器的单位——他们在机构中的作用是让每一件装备都能对上具体的使用者，以及让每一次行动都不留下可被法证还原的痕迹。',
    detail: [ '与技术员并列的还有清道夫部门：前者处理行动前的装备与情报，后者处理行动后的现场。' ]
  },

  /* ===================== 关联人物 ===================== */
  {
    id: 'ICA-X-OM', name: '奥托·沃尔夫冈·奥特-迈耶', nameEn: 'Otto Wolfgang Ort-Meyer', initials: 'OM',
    alias: 'Dr. Ort-Meyer',
    code: 'EXTERNAL', role: '机构客户（前）· 47 的创造者', unit: '法国外籍军团（前）',
    cat: 'CORE', born: '1930 年代初', nation: '德国',
    status: 'Deceased · 被 47 折断颈骨',
    summary: '47 号与全部克隆体的创造者，也是 ICA 的客户之一。1930 年代初出生于德国，曾在法国外籍军团服役并在越南与四位未来的罪犯结为好友。退役后他在罗马尼亚以精神病院为掩护运营地下克隆实验室。他一生共向机构下达了五份合同——最后一份的目标是他自己。',
    detail: [
      '1930 年代初出生于德国，是一位痴迷于基因操控理论的著名科学家。他在 47 号诞生之前就试图公开自己的发现，却被同行判定为疯狂，因此身败名裂——这直接把他推向了以精神病院为掩护的地下实验。',
      '1950 年代在法国外籍军团的一个单位中于越南服役，在那里与四位未来的罪犯结为好友：红龙三合会首领 Lee Hong、毒枭 Pablo Belisario Ochoa、国际恐怖分子 Frantz Fuchs 与军火商 Arkadij "Boris" Jegorov。',
      '在外籍军团期间或其后不久，他开始质疑士兵的能力与服从性，并着手发展关于基因重组与人类克隆的想法——创造一种在力量与心智上更优越、且不受良知约束的"完美人类"。',
      '退役后在罗马尼亚萨图马雷（Satu Mare）经营一家精神病院，以此为掩护进行基因实验。他的终极目标是创造一支无瑕且绝对服从的士兵军队。',
      '克隆体的另一个用途是为 Providence 提供刺客——Providence 正是资助他克隆项目的一方。',
      '1980 年代的某个时候，6 号与 47 号逃出囚禁，跑到附近的村庄。逃亡失败：Ort-Meyer 与守卫轻易追踪到他们，并杀死了所有目击者。',
      '作为研究经费的交换，他向旧日战友提供从克隆体身上摘取的供体器官，使他们即便年过六十仍显得年轻得多。',
      '1999 年在《杀手：代号 47》开场，故意在精神病院的安保中制造缺口，让 47 逃脱。',
      '第二天早上，Providence 的 Constant 阿瑟·爱德华兹造访，告知他可以恢复运作、制造更多克隆体："如果我是一个更疑心的人，我会说，你在一个本该被丢弃的时刻，让自己变得不可或缺了。"',
      '此后生产了 48 系列并使其快速老化至成年。他们的设计大量以 47 为蓝本——档案推测，正因如此 Ort-Meyer 在上一批"48 号实验体"因血清死亡之后，仍然沿用了"48"这个编号。',
      '先后以四个不同客户的名义下达四份合同，最后又坚持把第五份（针对他自己）交给 47——最终被 47 折断颈骨。'
    ]
  },
  {
    id: 'ICA-X-AE', name: '阿瑟·爱德华兹', nameEn: 'Arthur Edwards', initials: 'AE',
    alias: 'The Constant',
    code: 'EXTERNAL', role: 'Providence 最高领袖（Constant）', unit: '',
    cat: 'CORE', born: '', nation: '',
    status: 'Deceased · 被 47 处决',
    summary: 'Providence 的 Constant，即最接近其董事会核心的成员。他是贯穿《HITMAN™》三部曲的幕后对手，也是与 ICA 关系最深的敌方人物。',
    detail: [
      '1999 年以 Providence 的 Constant 身份造访 Ort-Meyer，指示其恢复克隆生产。',
      '后来亲自接触 Diana Burnwood，试图说服她以 Herald 身份加入 Providence，并最终提升她为新的 Constant。',
      '最终以"Diana 父母之死的档案"说服了她——那正是 47 与 Grey 数十年前在 Ort-Meyer 控制下所犯下的谋杀。'
    ]
  },
  {
    id: 'ICA-X-BD', name: '伯迪', nameEn: 'Birdie', initials: 'BI',
    alias: '', code: '—', role: '情报员（前代理人）', unit: '',
    cat: 'CORE', born: '', nation: '', status: 'Active · 非独家合作',
    summary: '机构的情报员，本身也是前代理人。他与机构的合作是非独家的——这一点在他身上被写得很清楚：一个情报员同时向多方出售信息，机构接受这个条件，因为他的情报质量值得冒险。他拥有一辆自用巴士，这既是交通工具也是流动据点。',
    detail: [
      '在《杀手：赦免》中为 47 提供协助，此前曾向 Blake Dexter 与芝加哥警方出卖过他。',
      '机构武器清单中的 "Birdie\'s Bus" 被标注为 Non-Exclusive（非独家），与他的合作方式一致。'
    ]
  },
  {
    id: 'ICA-X-CS', name: '卡尔顿·史密斯', nameEn: 'Carlton Smith', initials: 'CS',
    alias: 'Agent Smith',
    code: 'EXTERNAL', role: '机构资产 · 间谍', unit: 'CIA（前）/ Interpol',
    cat: 'AGENT', born: '', nation: '美国',
    status: 'Alive · 在册资产',
    summary: '机构长期合作的外部资产，职业生涯横跨 CIA 与 Interpol。机构档案把他同时列为客户、可能成员与合作伙伴三种身份——这种身份的不确定性本身就是他的工作方式。他还是系列中最常被 47 顺手救出的那个人。',
    detail: [
      '在《代号 47》中，47 返回精神病院时发现他被关押在其中一间病房，并为 47 指出了克隆实验室的秘密入口。',
      '在《血钱》中协助 47 逃离逮捕——这是他反复出现的模式：他以官方身份出现，在关键时刻站在 47 这一边。',
      '成员表的"客户"清单把他列为 Carlton Smith (Client, Possible Member, Associate)，与 Senator Bingham、Margeaux LeBlanc 以及 Lucas Grey 并列——三种身份同时成立。',
      '他的职业履历在表中记为 Central Intelligence Agency (Formerly)、Interpol、CIA Agent。'
    ]
  },
  {
    id: 'ICA-X-OH', name: '奥利维亚·霍尔', nameEn: 'Olivia Hall', initials: 'OH',
    alias: '', code: 'EXTERNAL', role: '黑客 · 47 的盟友', unit: 'Grey 的私人武装',
    cat: 'CORE', born: '', nation: '', status: 'Alive',
    summary: '黑客，Lucas Grey 的盟友，在《杀手 3》中协助 47 潜入位于中国重庆的 ICA 数据设施。正是这次行动把机构的存在通过黑客活动网站向全世界公开，成为 ICA 走向解散的直接原因。她此前被迫亲手杀死一名机构侦察员——那是她第一次杀人。',
    detail: [
      '她不隶属于机构——档案把她标为外部（EXTERNAL），身份是 Lucas Grey 的盟友。',
      '机构一度攻破了她的电脑——这正是 47 判断"唯一的解法是把机构彻底关掉"的直接原因：一个以保密为唯一资产的组织，一旦拿到了对手的硬盘，谈判就没有意义了。',
      '在柏林，47 为保她安全而清空了机构设在 Club Hölle 的伏击小队；她在此前被迫亲手杀死一名机构侦察员，那是她第一次杀人。',
      '这次行动的结果是机构以「ICA Papers」之名被媒体曝光——一个把匿名当作核心资产的组织，最终死于一次泄密。'
    ]
  },
  {
    id: 'ICA-X-CJ', name: '彻丽·琼斯', nameEn: 'Cherry Jones', initials: 'CJ',
    alias: 'FBI 探员 · 军火商', code: 'EXTERNAL', role: '供应商兼线人', unit: '',
    cat: 'EXTERNAL', born: '', nation: '美国', status: 'Alive',
    summary: '机构档案中身份层数最多的一类联系人：她同时是 FBI 探员与军火商，而在转行之前，她的职业是家庭主妇。机构把她归入"供应商／线人"。',
    detail: [
      '机构档案列出她的三重身份：FBI Agent、Arms Dealer、Housewife (Formerly)——家庭主妇是"前职"，排在最后，像是为了强调这条履历的突兀。',
      '在 47 号的关系表中，她被同时标为"协调人（Handler）与朋友"——这是极少见的双重标注，Diana 之外只有她一人。',
      '作为供应商，她为机构提供军火来源；作为线人，她提供情报。一个在职的联邦探员同时向一家暗杀机构供货，这本身就是机构渗透能力的直接证据。',
      '状态为 Alive——在机构已知的供应商与线人中，这是少数没有以死亡收场的记录。'
    ]
  }
];
