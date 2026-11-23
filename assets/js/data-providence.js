/* ==========================================================================
   data-providence.js — Providence 组织专章
   --------------------------------------------------------------------------
   依据：research/_body/providence.txt（由 tools/extract-body.mjs 从
        research/_raw/providence.txt 剥离正文，原文 35,885 字符 → 正文 28,981）。
   说明：Providence 在站点里此前只作为「客户组织名单」的一行、以及散落在
        47 / Soders 条目中的提及存在。它是后三部曲真正的对手，也是 ICA 的
        资助者的资助者——本文件把它作为独立专章呈现。
   成员表按原文三档分列：Leaders（Partners 与 Constant）／Heralds（现场协调人）／
        Operatives（被安插在公司与政府里的行动人员），另有 Assets（一次性使用的资产）。
   ========================================================================== */

const ICA_PROVIDENCE = {
  name: 'Providence',
  nameEn: 'Providence',
  tagline: '一个由三个古老家族王朝运营的企业造王者集团。',
  status: 'Dissolved',
  type: '神话式的秘密社团／影子政府',
  summary: '极度强大的秘密组织，对世界事务拥有巨大影响力，其权力凌驾于各国政府之上。成员是世上最有权势、最富有的人。拥有无限的财力与遍布全球的有影响力行动人员——就一切实际目的而言，他们是世界的统治者。刺杀世界三部曲的主要敌对阵营。',

  overview: {
    quote: 'Providence 是一个由三个古老家族王朝运营的企业造王者集团，统称为「合伙人」。数十年来，合伙人汇集起庞大的财富与资源，耐心地把忠诚的行动人员安插进世界最大公司的关键权力位置，创造出一个前所未有的全球触达与影响力的影子帝国，同时把它的存在完美地隐藏起来。Providence 没有超越「保护自身利益、维持全球现状」的计划或野心。合伙人很久以前就赢了，对他们而言，所做的一切不过是维护。',
    source: '—— Io-Interactive'
  },

  /* ---- 历史：按原文五段 ---- */
  history: [
    {
      id: 'PR-ORIGINS',
      title: '起源',
      titleEn: 'Origins',
      paras: [
        'Providence 正式始于二战之后（最早可追溯到 1945 年）：Thomas Carlisle 在英格兰达特穆尔的家族庄园里，召集了两位大学兄弟会旧友 Douglas Ingram 与 Eckhart Stuyvesant，把三个家族本已庞大的企业影响力汇合成一个能够有效在幕后统治世界的秘密社团。',
        '这三位 Providence 的「合伙人」很可能在招募 Janus 之前亲自与各自的人力资产打交道。他们在 1970 年代中期招募了传奇的克格勃间谍头目 Janus，作为他们的第一任「Constant」（Providence 的二把手管理者）。Janus 在 Providence 与克格勃之间平衡自己的角色，直到 1988 年离开后者，又为 Providence 效力了几年才彻底退休。',
        '随着冷战走向终结，Providence 的领导权稳步移交给新的人物，最终产生了三位新合伙人：Alexa Carlisle（1988 年）、Carl Ingram（1994 年）与 Marcus Stuyvesant（时间晚得多），以及一位新 Constant——阿瑟·爱德华兹（1990 年代末）。'
      ]
    },
    {
      id: 'PR-COLDWAR',
      title: '冷战',
      titleEn: 'Cold War',
      paras: [
        '1960 年代，Thomas Carlisle 秘密招募了著名的 Otto Wolfgang Ort-Meyer，要他制造能够毫无悔意地杀人的服从性克隆体。在 Thomas Carlisle 的支持下，他的基因实验在罗马尼亚布拉索夫的「人类改良研究所」（Institute for Human Betterment）展开——那是一座前少年管教所。',
        '两名年轻的实验体，47 号与 6 号，立下约定，于 1977 年从研究所逃出，流落到一个小型农业社区。他们被一家人收留，但第二天早上就被 Janus 的人追踪到。那家人以及所有其他目击者都被杀害，两名实验体被带回研究所接受惩罚。',
        '1980 年代，Alexa Carlisle 与 Janus 在冷战两边下注，为 Providence 谋利。在她的授意下，Ort-Meyer 把研究所转变成一个真正的暗杀服务机构，而包括 47 与 6 号在内的克隆体，将在帮助 Providence 进一步实现其全球目标上发挥关键作用——例如 1989 年通过杀死 Alfredo Stroessner 的秘密同伙，参与巴拉圭那场「烛光之夜」（La Noche de la Candelaria）政变，从而接管整个国家。',
        '当 6 号与 47 对这些实验以及自己生命的意义感到幻灭时，两人发誓要扳倒他们的创造者；但同年晚些时候他们对研究所的突袭失败了，6 号被 Providence 认为已死。',
        '突袭中研究所被毁，迫使 Ort-Meyer 把项目迁到萨图马雷一座类似的精神病院。在 Carlisle 的坚持下，47 号与其余克隆体的记忆与情感被抹除，以防再有任何类似事件。Ort-Meyer、Janus 以及 Providence 的其他任何成员都不知道：6 号活了下来，逃出研究所进入真实世界，作为一名受雇雇佣兵隐匿了起来。他最终会想起自己的过去，并在三十年后把生命献给扳倒 Providence。'
      ]
    },
    {
      id: 'PR-HITMAN2016',
      title: '《HITMAN™》事件',
      titleEn: 'HITMAN™ Events',
      paras: [
        '6 号实验体——此时名为卢卡斯·格雷——正担任 Milton-Fitzpatrick 的安保主管，在此期间他发现自己的雇主、CEO Eugene Cobb 是一名 Providence 行动人员。他接受了「自己永远无法真正摆脱 Providence」这一点，于是密谋除掉 Cobb，并对这个影子政府发动一场无声的战争。',
        '格雷得知 Cobb 不只是 Providence 的普通成员，而是一名「持钥人」——他持有一把钥匙，可以进入该组织在纽约的秘密档案馆，那里存有关于 Providence 资产与行动人员的信息。凭借这一认知，在一次横跨太平洋的商务旅行中，格雷暗杀了 Cobb，夺走他的钥匙，并让飞机坠入大海，伪装成一场意外。然而档案馆的金库需要一对钥匙才能打开，格雷此后着手组建自己的民兵，以协助他摧毁 Providence 的努力。',
        '后来，Providence 在全球的行动开始蹊跷地失败。在意大利一座沿海小镇，Ether 公司——一家 Providence 的幌子公司——正在秘密研发「Ether 病毒」，一种被设计用来悄悄暗杀相关人物的 DNA 追踪生物制剂。病毒被摧毁，生物工程师 Silvio Caruso 与 Francesca De Santis 被清除，以确保病毒无法被复制。',
        '不久之后，Providence 试图在摩洛哥策动一场军事政变。在陆军将领、Providence 行动人员 Reza Zaydan 的领导下，Providence 计划通过煽动民众骚乱、并以国家安全之名实施政变，来推翻拉巴特政府。然而 Zaydan 与那位激怒了摩洛哥民众的银行家 Claus Hugo Strandberg 都被清除，骚乱随之平息。',
        'Constant 拒绝相信这两起事件只是巧合，与 Milton-Fitzpatrick 的新任 CEO Alexander Fanin 一同前往纽约检查金库，却发现那里已被洗劫一空。',
        '在幕后，卢卡斯·格雷已从间谍网络 IAGO 取得了对 Providence 运作的有限了解，并开始匿名向有兴趣的各方透露 Providence 的活动。这些人后来成为 ICA 的客户，多份合同被安排下来，以秘密清除 Providence 的行动人员。47 号——曾经的 47 号实验体——接下了这些合同，在不知情的情况下被操纵着攻击 Providence。',
        '在 Ether 病毒被摧毁之后，卢卡斯·格雷追踪并杀死了第二名 Providence 持钥人 Hajun——此人本是来查明事件起因的——这终于让格雷得以进入档案馆。',
        '在 Jordan Cross（以及 Ken Morgan）被暗杀之后，Jordan 的父亲、深居简出的媒体大亨 Thomas Cross 在随后的葬礼上被绑架，后来被发现中枪身亡。这起谋杀并非巧合；ICA 意识到每一份合同都由一条神秘的匿名线报串连起来。ICA 把线报者命名为「影子客户」，开始追查他们的位置。',
        'Providence 得知是 ICA 挫败了他们的计划后，联系上 ICA 董事会的 Erich Soders，向他提出一笔交易。Soders 患有一种名为「内脏反位」（Situs Inversus）的罕见病症——患者的内脏位置左右颠倒。急需心脏移植的他同意除掉影子客户、并交出一份 ICA 行动人员的完整名单，以换取一颗极其罕见的右位心。',
        '循着一名黑客行动主义者留下的踪迹，ICA 发现格雷的民兵盘踞在科罗拉多州一座杏子农场，由 Sean Rose 率领。Soders 假定 Rose（一个早已登记在案的目标、已知的恐怖分子）就是影子客户，力推董事会要求 47 潜入农场，清除 Rose 以及民兵的其他重要成员。然而潜入农场后，47 与戴安娜·伯恩伍德展开调查，发现真正的影子客户瞄准的是 Providence——一个被认为是神话的组织——而且 Erich Soders 是 Providence 的内线。',
        'Erich Soders 被悄悄加速安排到北海道 GAMA 医院接受他那场关键的心脏手术——那是超独家经营的医院。ICA 董事会既对 Soders 的背叛感到愤怒，又清楚他打算把 ICA 行动人员的名单交给 Providence，于是要求 47 潜入医院清除 Erich Soders。Providence 的律师山崎由纪当时也在医院，随后同样成为目标。',
        '后来，Constant 在一列火车上拦下戴安娜·伯恩伍德，对 Soders 的死表示惋惜。他随后提议 ICA 与 Providence 建立伙伴关系——因为 ICA 已被搞得像个笑柄，而 Providence 失去了关键资产。Diana 对与 Constant 这样不可信的人合作毫无兴趣，直到他向她提供了关于 47 隐秘出身的信息。'
      ]
    },
    {
      id: 'PR-HITMAN2',
      title: '《HITMAN™ 2》事件',
      titleEn: 'HITMAN™ 2 Events',
      paras: [
        '一周后，ICA 董事会接受 Providence 作为客户，同意追猎并清除影子客户及其私人民兵。根据在科罗拉多杏子农场找到的情报，ICA 发现了民兵另一名关键成员 Alma Reynard 的位置。47 代表 Providence 潜入 Alma 在霍克斯湾的海滨别墅，主要目的是寻找关于影子客户的任何可能线索。搜索没有成功，但 47 发现了 Alma 与 Robert Knox 的一段对话——后者既是 Kronstadt Industries 的 CEO，也是 Providence 的成员。Knox 与他的女儿 Sierra 已在民兵针对同僚的袭击日益增多之后选择叛离 Providence，因为担心自己也会以类似方式被暗杀。47 在撤离前除掉了 Alma Reynard。',
        '在得知 Providence 成员已开始考虑叛逃之后，Constant 授权 ICA 以任何必要手段打击民兵。从「全球创新赛」上那对叛变的 Knox 父女开始，47 与 Diana 展开了一连串暗杀任务，以削弱民兵。',
        '在把民兵的袭击模式与全球航运及运输路线相对照之后，ICA 得知这支私人民兵一直利用 Delgado 卡特尔的水下分销网络，悄悄把人员运送到世界各地。为了切断民兵在全球移动的能力，47 前往圣福图纳暗杀卡特尔现任首领 Rico Delgado 及其两名副手。',
        '尽管 Delgado 卡特尔崩溃，针对 Providence 的袭击并未减弱。越来越多的 CEO 被谋杀，引发全球恐慌。民兵发布了一盘人质录像，向世界揭露 Providence 的存在，ICA 的分析师随即开始追查它的来源。与此同时，47 前往印度清除影子客户的「东方小组」。Delgado 家族还在为民兵制造假证件，其中包括一个叫 Wazir Kale、更广为人知为「漩涡」（The Maelstrom）的人。Providence 认为 Maelstrom、Vanya Shah 与 Dawood Rangan 是谋杀他们最新一名已故行动人员——Ether 的 CEO——的幕后之人，除掉他们是首要任务之一。',
        'ICA 把人质录像追踪到罗马尼亚——而他们并不知道，那是 Ort-Meyer 的研究所。当 47 接近那座荒凉破败的建筑时，他与 Diana 失去无线电联系，独自进入。在那里，他发现了卢卡斯·格雷——影子客户本人。格雷通过提醒 47 他们之间的约定，部分唤起了他的记忆，并说服他放下武器。',
        '把这一发现告知 Diana 之后，三人与黑客行动主义者 Olivia Hall 会合，同意合作扳倒 Providence。格雷解释了合伙人与 Constant 之间的关系，指出扳倒合伙人的钥匙是 Constant，而找到 Constant 的钥匙是他的前任。借助民兵从 Ether 研发基地窃取的一剂解药，47 恢复了自己其余被抹去的记忆，并想起第一任 Constant 是 Janus。',
        'Providence 与 ICA 其余人一样，被一份假报告所骗——那报告称 Janus 与罗马尼亚的研究所有关联、实际上是真正的影子客户，卢卡斯·格雷只是个傀儡。Janus 与一名被认定为 Providence 叛徒的 Nolan Cassidy，成为合同的最新目标。',
        '无论如何，这次任务的真正目的是在 Janus 位于惠特尔顿溪镇的家宅里寻找线索，找出 Janus 与他的门徒可能见面的时机。47 发现 Janus 是 Ark Society 的创始人之一——那是富人与权势者每年一度、为世界末日做准备的聚会——而 Constant 每年都会露面，据推测是为了寻找新的 Providence 招募对象。尽管 Janus 被认定背叛了 Providence，Ark Society 的成员们仍选择在下次聚会上为他举行一场私人守灵以示敬意。他的棺材被追踪，从而揭开了聚会地点的位置：斯盖尔岛。',
        '与此同时，由于大量行动人员死亡以及第一任 Constant 被认定背叛，合伙人与 Constant 之间的关系已极度紧张。为证明自己的忠诚，Alexa Carlisle 要求 Constant 在自己颈部植入一枚毒药芯片作为保险——以防他被俘或叛变。Constant 不情愿地接受了。',
        '两个月后，47、Diana 与 Grey 前往斯盖尔岛参加 Ark Society 的聚会。在发现 Constant 体内已被植入毒药芯片、而击杀开关被交给了 Zoe 与 Sophia Washington 双胞胎姐妹之后，47 除掉了这对姐妹，Grey 则制服并带走了 Constant。',
        'Constant 随后醒来，被绑在北大西洋中一艘船的椅子上，体内的芯片已被手术取出。Grey 与 Diana 审讯他，他随之解释了 Providence 是如何形成的、以及缔造它的那些家族。',
        '不幸的是，合伙人对这种情况早有预案。三位合伙人的讣告都已在互联网上出现，他们已开始向不同的身份过渡。Constant 于是建议他们「跟着钱走」：由于合伙人刚刚开始身份转换，他们在纽约 Milton-Fitzpatrick 银行的账户应当仍然完好。',
        '47 与 Grey 前往纽约；47 窃取了银行数据，并除掉了银行行长、Providence 行动人员 Athena Savalas，以掩盖行迹。',
        '银行数据显示出合伙人付给 Haven 的交易——那是一家在马尔代夫运营的小公司。47 前往 Haven 岛，清除该公司的三名负责人——他们当时正在执行一桩迄今最大的合同，据推测是为合伙人做的。随着 Haven 的线索被清除，Olivia Hall 得以渗透他们的服务器，取得合伙人的位置信息。'
      ]
    },
    {
      id: 'PR-HITMAN3',
      title: '《HITMAN™ III》事件',
      titleEn: 'HITMAN™ III Events',
      paras: [
        '凭借从 Haven 取得的信息，47 与 Grey 前往迪拜，在 Burj Al-Ghazali 塔上清除前两位合伙人 Carl Ingram 与 Marcus Stuyvesant；Alexa Carlisle 却在片刻之前逃脱——她意识到阿瑟·爱德华兹已带着合伙人的控制性股份潜逃。',
        'Diana 追踪她到英格兰达特穆尔的 Carlisle 家族祖宅，47 在那里除掉了她，并取回她关于爱德华兹的案卷，希望能从中找到他行踪的细节。',
        '合伙人们终于被替他清除，爱德华兹随之启动自己的计划：他派一支 CICADA 行动人员的私人安保小队伏击 Grey，企图活捉他，但因 Grey 自杀而失败——这随后迫使 47 与 Olivia Hall 走上逃亡之路。',
        '爱德华兹用关于 1989 年她父母之死的把柄把 Diana 逼到角落，希望让她与 47 反目，但她起初拒绝了。随后，爱德华兹付钱给 ICA，让他们在柏林追猎 47 与 Hall。',
        '作为 Providence 背后的新掌权者，爱德华兹试图说服 Diana 成为下一任 Constant。',
        '在曝光 ICA、终结了针对他们的威胁之后，47 在阿根廷门多萨与 Diana 重新联系；她指派他去清除 Don Archibald Yates 与 Tamara Vidal，以扫清她通往 Constant 之位路上的障碍，从而能足够接近爱德华兹，从内部瓦解他新近重组的 Providence。',
        '作为维持表象的一环，Diana 在任务成功后给 47 下毒，使他被爱德华兹的队伍擒获、并在「The Mortar」号上接受实验——那是一列改装过的火车，经由罗马尼亚喀尔巴阡山脉开往蒙古的一处 CICADA 设施。',
        '面对再度成为 Providence 工具的前景，47 最终处理掉了爱德华兹，这使得 Diana 得以把该组织的行动人员曝光给世界。Tim Quinn、Alexander Fanin 等人被迫辞去职位，实质上解散了 Providence。',
        '自 Providence 被摧毁、ICA 被曝光以来，Diana 与 47 如今自行经营一桩买凶业务，与 ICA 再无关联——实质上使他们成为「自由执业」（Freelance）。'
      ]
    }
  ],

  /* ---- 成员：Leaders ---- */
  leaders: [
    { name: 'Marcus Stuyvesant', org: 'Stuyvesant Company', roles: ['合伙人（最高首脑，前）', 'Morgan, Yates & Kohn（1995–?）', 'Stuyvesant Company CEO'], span: 'Providence 合伙人（?–2020）', status: 'Deceased' },
    { name: 'Carl Ingram', org: 'Ingram Industries', roles: ['美国陆军士兵（1973–1975）', '美国国务院（1987–?）', 'Ingram Industries CEO（1995–2020）'], span: 'Providence 合伙人（1994–2020）', status: 'Deceased' },
    { name: 'Alexa Christine Carlisle', org: 'Carlisle Group', roles: ['Carlisle Group CEO'], span: 'Providence 合伙人（1988–2020）', status: 'Deceased' },
    { name: 'Arthur Edwards', org: 'Ark Society（前）', roles: ['最高首脑、Constant（前）'], span: 'Providence Constant（1990 年代–2020）· 唯一合伙人（2020–2021）', status: 'Determinant' },
    { name: 'Janus', org: 'Ark Society（共同创始人）', roles: ['Constant（前）', '克格勃（1950 年代–1988）'], span: 'Providence Constant（1970 年代–1990 年代）', status: 'Deceased' },
    { name: 'Eckhart Stuyvesant', org: 'Stuyvesant Company', roles: ['合伙人（创始人，前）'], span: 'Providence 合伙人（1945–?）', status: 'Deceased' },
    { name: 'Douglas Ingram', org: 'Ingram Industries', roles: ['Ingram Industries'], span: 'Providence 合伙人（1945–1994）', status: 'Deceased' },
    { name: 'Thomas Alexander Carlisle', org: 'Carlisle Group', roles: ['Carlisle Group'], span: 'Providence 合伙人（1945–1988）', status: 'Deceased' }
  ],

  /* ---- 成员：Heralds ---- */
  heraldNote: 'Heralds 是 Providence 的信使：从合伙人那里、经由 Constant 接到命令，再下达给普通行动人员。他们是一支规模不大的现场协调人队伍，通常从分析师、企业掮客、游说者与政治顾问中招募。Heralds 也负责调查与 Providence 相关的事件，例如其行动人员及其他 Herald 的遇刺。已知其中一些人持有纽约 Providence 档案馆两把专用钥匙中的一把。',
  heralds: [
    { name: 'Hajun', org: '—', role: '—', status: 'Deceased' },
    { name: 'Mikhail Kadir', org: '—', role: '—', status: 'Determinant' },
    { name: 'Yuki Yamazaki', org: 'Yakuza（前）', role: '律师 / 黑道律师（前）', status: 'Deceased' },
    { name: 'Nolan Cassidy', org: '美军（前）· 美国特勤局（前）· Moreno 卡特尔（前）', role: '美军士兵（前）/ 特勤局特工（前）/ 安保顾问', status: 'Deceased' },
    { name: 'Frank Schmidt', org: '—', role: '—', status: 'Deceased' },
    { name: 'Eugene Cobb', org: 'Milton-Fitzpatrick', role: 'Milton-Fitzpatrick CEO（前）', status: 'Deceased' },
    { name: 'Alexander Fanin', org: 'Milton-Fitzpatrick', role: 'Milton-Fitzpatrick CEO（前）', status: 'Alive' },
    { name: 'Don Archibald Yates', org: 'Morgan, Yates & Kohn · Viñedo Yates', role: '律师 / 酿酒师', status: 'Deceased' },
    { name: 'Tamara Vidal', org: 'CIA（前）', role: 'CIA 资产（前）/ 政治企业家（前）/ 监视专家', status: 'Deceased' },
    { name: 'Geraldine Quill', org: '—', role: '—', status: 'Determinant' },
    { name: 'Richard Jones', org: '—', role: '—', status: 'Determinant' },
    { name: 'Wang YinYuan', org: '—', role: '—', status: 'Determinant' },
    { name: 'Hira Amala', org: '—', role: '—', status: 'Determinant' },
    { name: 'Alexandra Stavroula', org: '—', role: '—', status: 'Determinant' },
    { name: 'Bronson', org: '—', role: 'Gustavo Torres 的联络人', status: 'Unknown（失踪，推测已死）' },
    { name: 'Diana Burnwood', org: 'ICA（前）', role: 'ICA 协调人（前）', status: 'Alive / Defected' }
  ],

  /* ---- 成员：Operatives ---- */
  operativeNote: '这些企业、政治与文化界的领袖，其成功、财富与职业生涯都归功于 Providence 那只隐藏的手；需要在被召唤时服务于他们神秘的资金提供者。在公众眼中，他们是世上最有权势、最广为人知的高管。但在 Providence 的层级里，行动人员严格遵循「按需知情」原则：他们大多彼此不知情，不知道自己实际上在为谁做事，而指派的 Herald 往往是他们唯一的联络点。',
  operatives: [
    { name: 'Akira Nakamura', org: 'GAMA', role: 'GAMA 院长', status: 'Alive' },
    { name: '未具名的 Blue Seed CEO', org: 'Blue Seed Pharmaceuticals', role: 'CEO', status: 'Deceased' },
    { name: 'Byron Washington III', org: 'Pax Mundus Foundation', role: 'CEO', status: 'Alive' },
    { name: 'Claus Hugo Strandberg', org: 'AMB', role: 'CEO', status: 'Deceased' },
    { name: 'Danziger', org: 'Danziger Ltd.', role: '保险业巨头', status: 'Deceased' },
    { name: 'Erich Soders', org: 'ICA（前）', role: 'ICA 代理人（前）/ 刺客（前）/ ICA 董事会成员（前）', status: 'Deceased' },
    { name: 'Erik Olander', org: '瑞典政府', role: '瑞典驻摩洛哥马拉喀什总领事馆领事', status: 'Alive' },
    { name: 'Esteban Montoya', org: 'Moreno 卡特尔', role: '首领', status: 'Alive' },
    { name: 'Gustavo Torres', org: '墨西哥政府', role: '内政部长', status: 'Alive' },
    { name: 'Haas Rheinhardt', org: '世界体育联合会', role: '主席', status: 'Alive' },
    { name: 'Janus', org: '克格勃（前）· Ark Society', role: '克格勃间谍头目（前）/ 前 Constant / Ark Society 成员', status: 'Deceased' },
    { name: 'Ken Morgan', org: 'Morgan, Yates & Kohn', role: '律师', status: 'Deceased' },
    { name: 'Lin Xi', org: '建筑集团', role: 'CEO', status: 'Deceased' },
    { name: 'Neleis De Waal', org: 'Ether Biotech Corporation', role: 'Ether CEO', status: 'Deceased' },
    { name: 'Otto Wolfgang Ort-Meyer', org: '法国外籍军团（前）· 五父', role: '法国外籍军团士兵（前）/ 科学家', status: 'Deceased' },
    { name: 'Raoul Salazar', org: '梵蒂冈', role: '教宗顾问', status: 'Alive' },
    { name: 'Rex Larsson', org: '航运业', role: '航运巨头', status: 'Deceased' },
    { name: 'Reza Zaydan', org: '摩洛哥皇家武装部队', role: '摩洛哥将领', status: 'Deceased' },
    { name: 'Robert Knox', org: 'Kronstadt Industries', role: '发明家 / Kronstadt CEO', status: 'Defected / Deceased' },
    { name: 'Rupert Pierce', org: 'Dynasty Global', role: 'Dynasty Global CEO', status: 'Deceased' },
    { name: 'Sierra Knox', org: 'Kronstadt Industries', role: '发明家 / Kronstadt CFO / 赛车手', status: 'Defected / Deceased' },
    { name: 'Silvio Caruso', org: 'Ether Biotech Corporation', role: 'Ether 生物工程师', status: 'Deceased' },
    { name: 'Francesca De Santis', org: 'Ether Biotech Corporation', role: 'Ether 科学家', status: 'Deceased' },
    { name: 'Simon Deveraux', org: 'Biosphere', role: 'Biosphere CEO', status: 'Alive' },
    { name: 'Sophia Washington', org: 'Ark Society', role: '古物猎人 / Ark Society 主席', status: 'Deceased' },
    { name: 'Thomas Cross', org: 'Cross Holdings', role: 'Cross Holdings CEO', status: 'Deceased' },
    { name: 'Tim Quinn', org: 'Quantum Leap', role: 'Quantum Leap CEO（前）', status: 'Alive' },
    { name: 'Vera St. Martin', org: '零售业', role: '零售巨头', status: 'Alive' },
    { name: 'Zoe Washington', org: 'Ark Society', role: '古物猎人 / Ark Society 主席', status: 'Deceased' },
    { name: 'Athena Savalas', org: 'Milton-Fitzpatrick', role: 'Milton-Fitzpatrick 纽约分行行长', status: 'Deceased' },
    { name: 'Orson Mills', org: 'CICADA（前）· 私人民兵（前）', role: 'CICADA 行动人员（前）/ 雇佣兵 / 民兵高级尖兵（前）', status: 'Determinant' }
  ],

  /* ---- 资源与影响力 ---- */
  resources: {
    paras: [
      '作为一个神话般的影子政府组织，Providence 拥有取之不尽的财力。他们还能接触到世上最优秀的知识分子，其队伍中有最有影响力的政客，并拥有一支准军事安保力量。甚至连恐怖组织也会为他们所用。',
      '他们的地位使他们能够接触世界最好的技术资源——从再生疗法到先进机器人。他们甚至就是资助 Ort-Meyer 基因工程项目的一方，那些项目旨在造出天生属性增强的人类克隆体——这意味着他们在 47 号的诞生中扮演了直接角色。'
    ],
    affiliations: [
      { org: 'Ark Society', leader: 'Zoe 与 Sophia Washington（主席）' },
      { org: 'Biosphere', leader: 'Simon Deveraux' },
      { org: 'Blue Seed Pharmaceuticals', leader: '不详' },
      { org: 'Cross Holdings', leader: 'Thomas Cross' },
      { org: 'Dynasty Global', leader: 'Rupert Pierce' },
      { org: 'Ether Biotech Corporation', leader: 'Neleis De Waal' },
      { org: 'Hamsun Oil', leader: 'Godfrey Hagen' },
      { org: 'Haven', leader: 'Tyson Williams' },
      { org: 'International Contract Agency', leader: '不详' },
      { org: 'IAGO', leader: 'Dalia Margolis' },
      { org: 'Kronstadt Industries', leader: 'Robert Knox' },
      { org: 'Milton-Fitzpatrick', leader: 'Alexander Fanin' },
      { org: 'Moreno Cartel', leader: 'Esteban Montoya' },
      { org: 'Morgan, Yates & Kohn', leader: 'Ken Morgan · Don Archibald Yates' },
      { org: 'Pax Mundus Foundation', leader: 'Byron Washington III' },
      { org: 'Quantum Leap', leader: 'Tim Quinn' },
      { org: 'Schaeffer-Moore', leader: '不详' }
    ],
    affiliationNote: '原文另列 IAGO 为「告密者」性质的联系，与上表的领导关系不同。'
  },

  /* ---- 资产 ---- */
  assetNote: '这些是为 Providence 执行特定职能、而非担任常规职位的人。原文把 Haven 的三名负责人归类为「追踪者／消失制造者」——他们的业务就是让富有的罪犯从世界上消失。',
  assets: [
    { name: 'Dalia Margolis', org: 'Mossad（前）· IAGO · Sanguine', role: '告密者', status: 'Deceased' },
    { name: 'Viktor Novikov', org: 'IAGO · Sanguine', role: '告密者', status: 'Deceased' },
    { name: 'Diana Burnwood', org: 'ICA（前）', role: '信使', status: 'Formerly / Alive' },
    { name: 'Tyson Williams', org: 'Haven', role: '追踪者 / 消失制造者', status: 'Deceased' },
    { name: 'Ljudmila Vetrova', org: 'Haven', role: '追踪者 / 消失制造者 / 招募者', status: 'Deceased' },
    { name: 'Steven Bradley', org: 'Haven', role: '追踪者 / 消失制造者 / 黑客', status: 'Deceased' },
    { name: 'Zana「秃鹫」Kazem', org: 'Crystal Dawn', role: '刺客', status: 'Determinant' }
  ],

  trivia: [
    'Providence 可能取材自现实中成为阴谋论主题的秘密社团，例如阿萨辛教团、光明会、圣殿骑士团与 Majestic 12。',
    '47 号与 6 号在 1977 年的那次逃亡，是被 Janus 的人追踪到的——这一点把 Providence 直接牵扯进了克隆体的童年。',
    'Providence 资助了 Ort-Meyer 的克隆项目，而 Ort-Meyer 又把从克隆体身上摘取的器官提供给五父。也就是说，47 的创造与五父的延寿，出自同一笔交易。',
    'Providence 的最终结局是解散：Tim Quinn、Alexander Fanin 与 Hamsun Oil 的前总裁等人在一个月内相继辞去公司职位。'
  ]
};

/* 导出 */
if (typeof window !== 'undefined') { window.ICA_PROVIDENCE = ICA_PROVIDENCE; }
