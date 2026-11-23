/* ==========================================================================
   data-titles.js — 系列作品一览
   来源：series.txt（Hitman (series) 条目）、gu-*.txt 各作条目（含 Plot 与
        New features 小节）、hitman-timeline.txt、world-of-assassination.txt
   结构：
     note      一句话定位（列表页显示）
     fact      系列地位（这一作在整条线上做了什么）
     plot      剧情梗概（按原文 Plot 小节的顺序）
     features  本作新增或改变的关键机制
     places    主要地点
     targets   主要目标
   kind: main 主要作品 / pack 合集与重制 / spin 支线游戏 / media 其他媒体
   时间说明：HITMAN™（2016）的主线年份，gu-hitman2016 的 Plot 写作 2019 年，
        而 agent-47.txt 与后续作品的内部日期指向 2020 年。两说并存，此处按原文
        各自标注，不替读者裁决。
   ========================================================================== */

const ICA_TITLES = [
  /* ---------- 主要作品 ---------- */
  {
    name: '《杀手：代号 47》',
    nameEn: 'Hitman: Codename 47',
    year: '2000',
    kind: 'main',
    note: '系列首作。47 逃脱、受训、成为代理人，并以「五父」与 Ort-Meyer 之死收尾。',
    fact: '建立了整个系列的基本语法：伪装、潜行、沙盒式关卡、以及「一具尸体要藏起来」。',
    plot: [
      '在一座偏远疗养院的地下室，一个后脑有刺青的光头男人被锁在软垫病房的床上，扩音器里传来一个不明身份的声音。这个人是只被称为「47」的基因工程克隆体。扩音器声称他是自己的作品。',
      '47 奉命脱掉病号服——门外放着一套西装。在那个声音的进一步指示下，他通过障碍训练课程练习动作的流畅与力量，学习使用不同种类的武器，最后以伪装成工作人员收尾。',
      '逃出疗养院后，47 加入了国际合同代理机构（ICA）。凭在疗养院展现的天赋，他被授予代理人头衔。逃出近一年后，47 被派往香港，执行一项难度极高的任务。',
      '机构通过 47 的协调人戴安娜·伯恩伍德强调：即使 47 能接近红龙三合会首领李洪，也不可能活着离开那座城市。于是他们设计了一套精巧的计划，从外部几乎摧毁整个红龙三合会——包括在红龙与青莲的和平会议上杀死红龙谈判代表，诱使青莲大规模前往李洪的总部王福饭店，再由 47 截击并屠杀整个青莲代表团，把两个三合会推到全面战争的边缘。',
      '此后是哥伦比亚的毒枭 Pablo Belisario Ochoa、布达佩斯的 Fuchs 兄弟、鹿特丹的军火商 Arkadij Jegorov。四份合同完成后，机构才发现它们全由同一个人暗中下单：Ort-Meyer。',
      '最后一份合同把 47 送回罗马尼亚的精神病院。他杀死了官方目标 Dr. Odon Kovacs，随即恢复记忆，深入地下克隆实验室，一路射穿 48 系列克隆体的伏击，在办公室里折断 Ort-Meyer 的脖子。'
    ],
    features: [
      '伪装系统：换上制服进入受限区域，但某些 NPC 会识破特定伪装。',
      '沙盒式关卡：同一目标有多种死法，多数被伪装成意外。',
      '藏尸机制：尸体被发现会触发警报，因此需要搬运与藏匿。',
      '武器与装备需在任务开始前购买。'
    ],
    places: ['罗马尼亚 · 精神病院', '香港 · 九龙', '哥伦比亚', '布达佩斯', '鹿特丹'],
    targets: '李洪 · Pablo Belisario Ochoa · Frantz Fuchs · Arkadij Jegorov · Otto Wolfgang Ort-Meyer'
  },
  {
    name: '《杀手 2：沉默刺客》',
    nameEn: 'Hitman 2: Silent Assassin',
    year: '2002',
    kind: 'main',
    note: '47 从退休状态复出。系列第一次把「代理人本人也只是一个在册编号」这件事摆上台面。',
    fact: '引入 Silent Assassin 评级制度——它后来成了整个系列的价值标准。',
    plot: [
      'Sergei Zavorotko 与一名神秘男子在货船上谈论某人在鹿特丹见过的人。他们前往罗马尼亚的 Ort-Meyer 克隆实验室兼精神病院，发现里面所有人都死了。他们找到几盘录像带，里面是 47 勒死一名罗马尼亚特警、并把尸体拖走的画面。',
      '做了多年传奇杀手之后，47 决定抛开合同杀手的生活，退隐到西西里一座属于 Emilio Vittorio 神父的教堂。外界流传着他已死的谣言，而他在教堂里做一名谦卑的园丁。不久，Vittorio 被绑架。',
      '为偿还欠机构的人情，47 接下了一项任务：在圣彼得堡的一场会议上暗杀前克格勃将军 Rinat S. Rumyantsev。将军死后，其余将军开始自行调查同僚的死因。',
      '接着是 Makarov，然后是 Mikhail Bardachenko——47 在他的秘密地下掩体里杀掉他，并救出一名被审讯的囚犯，那人后来被揭示为 Agent Smith。随后是圣彼得堡的德国大使馆。',
      '完成最后一位将军的暗杀后，47 谈成了加价，并接下更多合同。他被派去杀日本犯罪首脑兼军火商 Masahiro Hayamoto，但因对方位置不明，47 不得不先杀死他的儿子 Masahiro Hayamoto Jr.。',
      '47 最终放弃了对 Vittorio 的寻找，认为他已经死了。他辗转阿富汗、马来西亚与印度执行合同。',
      '结局回到 Gontranno——Vittorio 与 47 的家乡教区。47 在第二次陷阱中杀死 Zavorotko 及其手下，救出 Vittorio。Vittorio 给了他一副念珠，47 把它挂在教堂的木门上，转身离开。'
    ],
    features: [
      '纤维线、望远镜与指南针成为 47 的常备装备，不必每关购买；指南针并入 HUD。',
      '引入评级系统：每关结束按潜行与激进度评分，拿到最高评级 Silent Assassin 可解锁新武器。',
      '地图实时显示全部 AI 动向（平民、守卫、警察、VIP 与目标），并标出电梯、门、楼梯、梯子、ICA 接应点与兴趣点。',
      '引入麻醉剂（Anaesthetic）——不杀死敌人，而是使其短暂昏迷。'
    ],
    places: ['西西里 · Gontranno 教堂', '圣彼得堡', '日本', '阿富汗', '马来西亚', '印度'],
    targets: 'Rinat S. Rumyantsev 等五名将军 · Masahiro Hayamoto · Sergei Zavorotko'
  },
  {
    name: '《杀手：契约》',
    nameEn: 'Hitman: Contracts',
    year: '2004',
    kind: 'main',
    note: '巴黎中枪后的幻觉闪回结构。部分内容是对首作的重制，同时填补了一代之后、二代之前的空白。',
    fact: '唯一一部以「回忆」为叙事框架的作品——玩家玩到的多数关卡是 47 濒死时的闪回。',
    plot: [
      '在巴黎歌剧院完成一次暗杀后，47 返回酒店房间时被拦截并中枪。他带伤退回公寓，倒在地上，开始出现对过往事件的幻觉式闪回。',
      '第一次闪回把他带回杀死 Ort-Meyer 之后的时刻：被囚犯占据的精神病院遭到罗马尼亚警察突袭，警方在外围设下了防线。47 潜行逃出，偷走 Ort-Meyer 的车。',
      '为保持清醒，47 又闪回另一份合同——一名未具名的罗马尼亚客户联系机构，要人潜入一家屠宰场，在一场恋物癖派对期间暗杀「肉王」Campbell Sturrock 及其律师 Andrei Puscus，同时救出客户的女儿。',
      '接着是堪察加：47 的目标是奥地利恐怖分子 Fabian Fuchs（他的基因叔父之一）与一名叛变的俄罗斯海军指挥官 Sergei Bjarkhov，同时要摧毁脏弹制造点。',
      '47 几乎撑不住伤势时，机构的医生赶到救了他。医生准备手术、用酒精冲洗伤口——酒精的气味与声音又把他带回另一段记忆：一次针对奥地利目标的合同。',
      '在一名医生操作下，47 又想起两份合同：第一份涉及鹿特丹的荷兰摩托帮，第二份是 Arkadij Jegorov——他的基因父亲之一，此人把自己封锁在一艘运输船上，被鹿特丹警方包围，威胁引爆核弹头。',
      '手术结束，医生听到街上的警笛，在给 47 注射兴奋剂之前离开了现场。47 苏醒，又闪回布达佩斯的合同：杀死 Frantz 与 Fritz Fuchs，取回一只手提箱，里面装着 X 射线炸弹。',
      '最后一段昏迷中的记忆在香港——三合会首领李洪。47 通过挑起红龙与青莲之间的战争、杀死青莲成员与当地警察局长，削弱了李洪的集团，最终杀死李洪本人。'
    ],
    features: [
      '注射器取代麻醉剂——可使受害者昏迷约十分钟。',
      '多数关卡是前作的重制与补完，首次把「47 的旧任务」作为可玩内容系统呈现。'
    ],
    places: ['巴黎', '罗马尼亚 · 精神病院', '匈牙利 · 布达佩斯', '俄罗斯 · 堪察加', '英国 · 贝尔丁福德庄园', '荷兰 · 鹿特丹', '香港'],
    targets: 'Campbell Sturrock（肉王）· Andrei Puscus · Fabian Fuchs · Sergei Bjarkhov · Winston 与 Alistair Beldingford · Rutgert Van Leuven · Arkadij Jegorov · Frantz 与 Fritz Fuchs · 李洪'
  },
  {
    name: '《杀手：血钱》',
    nameEn: 'Hitman: Blood Money',
    year: '2006',
    kind: 'main',
    note: '机构本身成为阴谋的目标。Diana Burnwood 在本作末期被晋升为 GAMMA 等级。',
    fact: '引入「恶名值」与报纸系统——47 的行为会被写成新闻，影响后续关卡。',
    plot: [
      '2006 年，First Edition 报纸的记者 Rick Henderson 来到前联邦调查局局长 Alexander Leland「Jack」Cayne 的豪宅，就最近一起针对白宫的袭击采访他——但很快就能看出，Cayne 的真正意图是谈别的事。',
      '2004 年 2 月 29 日，47 被机构派去暗杀智利著名葡萄酒生产商 Don Fernando Delgado。此人暗中经营着遍布全球的庞大毒品生意。',
      'Henderson 得知 47 卷入 Delgado 之死，大为惊讶。Cayne 告诉他，自己对 47 的好奇心在一位朋友因巴黎那起著名的歌剧院事件而着迷之后进一步加深。',
      '2004 年 3 月 17 日，47 被派往巴黎，杀死著名男高音 Alvaro D\'Alvade 及其密友兼合伙人 Richard Delahunt——美国驻梵蒂冈大使。两人被报操控着一个从东欧贩运男女童的卖淫网络。',
      '回到美国后，47 接到多份合同。第一份是在一家戒疗中心杀死一名酗酒罪犯，身份是从一名卧底探员那里取得的。',
      'Cayne 在向 Henderson 讲述时撒谎，声称某人握有 Ort-Meyer 克隆数据文件的信息，而 47 杀了他、把克隆数据偷走卖给出价最高者。',
      '真正的对手是「The Franchise」：一个与国际政府有深厚联系、拥有自己白化克隆人军队的组织。他们的首领正是 Cayne。',
      '2005 年 9 月 22 日，47 潜入白宫，杀死已任副总统的 Daniel Morris 与 Franchise 的白化克隆刺客 Mark Parchezzi III。',
      '随后 Diana 假装投靠 Franchise，用注射器把 47 毒倒；Franchise 取走他的骨髓样本，准备葬礼。葬礼上揭示 Diana 注射的是非致命血清——47 在自己的葬礼上醒来，杀死了现场所有人。',
      '尾声 Requiem：47 离开后一度拒绝联系任何人，最终回到机构，与 Diana 恢复合作。'
    ],
    features: [
      '47 可以攀爬箱子等障碍，无需按键提示。',
      '47 可以徒手与敌人搏斗，并解除其武装。',
      '可以把 NPC 当作人肉盾牌，之后将其击昏或推开。',
      '恶名值系统：行为越张扬，被认出的概率越高，报纸会报道并影响后续关卡。'
    ],
    places: ['美国 · 巴尔的摩', '智利', '巴黎', '美国 · 密西西比', '拉斯维加斯', '白宫'],
    targets: 'Don Fernando Delgado · Alvaro D\'Alvade · Richard Delahunt · Daniel Morris · Mark Parchezzi III · Alexander Leland Cayne'
  },
  {
    name: '《杀手：赦免》',
    nameEn: 'Hitman: Absolution',
    year: '2012',
    kind: 'main',
    note: '机构内部的腐败派系主导了克隆刺客 Victoria 项目。47 被标记为叛逃者，Diana 在淋浴间被他亲手射中。',
    fact: '系列最大的一次形式转向：大沙盒被换成线性小关卡，并引入「本能」与「精准射击」。',
    plot: [
      '在《Damnation》的事件之后，47 的协调人戴安娜·伯恩伍德毫无解释地背叛了雇主 ICA。她向公众披露了机构的存在，破坏了其资金与数据库，并利用随之而来的混乱……',
      '47 扮成冰淇淋车司机抵达宅邸、潜入其中，在 Diana 淋浴时与她对峙。她在他开枪前注意到了他，恳求他听她说，但他还是开了枪。',
      'Diana 倒在地上，47 走上前去准备补上致命一击时，他心软了。她请他保护 Victoria，别让她变成自己那样。',
      '在一名修女 Sister Mary 的帮助下，47 把 Victoria 送到 Rosewood 孤儿院藏起来——理由是他在其他所有藏身处都已被 ICA 掌握。',
      '此后他联系了 Birdie——一名前 ICA 行动人员——打听机构以及任何在追 Victoria 的人的消息。',
      'Birdie 告诉 47，Dexter 在芝加哥的线人是脱衣舞俱乐部老板 Dominic Osmond。完成暗杀后，47 从 Osmond 办公室的一盘电话录音里得知了下一步。',
      '47 赶到 Rosewood 时，Wade 与他的手下正在进攻。他带上 Victoria 冲向电梯、准备躲进地下室，但电源被切断，47 不得不去找保险丝恢复供电——就在此时 Victoria 被 Wade 抓走。',
      '47 追到南达科他州的 Hope，杀死 Dexter 核心圈的大部分人（玩家可选择杀死 Blake 的儿子 Lenny，或把他丢在沙漠里等死），随后回到芝加哥，潜入 Dexter 的顶层公寓，杀死他并救出 Victoria。',
      '最后 47 前往英格兰康沃尔郡 Diana 的「墓」前，杀死 Benjamin Travis 与其助手 Jade Nguyen。'
    ],
    features: [
      '47 的生命值会自动恢复，但血条会随时间收缩，直到他使用急救站。',
      '大型、自成一体的开放式任务被一系列线性小任务取代，每个小任务通过一扇门相连；没有小任务提供多个出口，也不允许玩家从原路离开。',
      '任务中穿插过场动画，因此报纸系统被移除。',
      '引入「精准射击」（Point Shooting）：消耗本能值，在慢动作中标记并快速击杀多名敌人。',
      '引入「本能」（Instinct）模式：可看穿伪装、预判敌人视线。'
    ],
    places: ['芝加哥', '南达科他州 · Hope', '英格兰 · 康沃尔'],
    targets: 'Diana Burnwood（未遂）· Dom Osmond · Blake Dexter · Benjamin Travis · Jade Nguyen'
  },
  {
    name: 'HITMAN™',
    nameEn: 'HITMAN™',
    year: '2016',
    kind: 'main',
    note: '重启三部曲第一部。以「季」的形式发行：巴黎、萨皮恩扎、马拉喀什、曼谷、科罗拉多、北海道。',
    fact: '把系列拉回大沙盒，并确立了「刺杀世界」三部曲的叙事骨架：影子客户、Providence、Constant。',
    plot: [
      '游戏的序章发生在主线之前二十年，即 1999 年。47 从一架直升机上下来，降落在格陵兰某处悬崖前——那下面是 ICA 一处秘密招募基地。门打开，戴安娜·伯恩伍德在等他。',
      '47 的训练完成后，她的上级、主管 Erich Soders 称 47 的各项数据「超出了图表」。随后 Diana 给了 47 更多时间做自由训练。',
      '接着 47 开始最终测试：复刻 Soders 本人一场传奇任务——冷战期间在古巴一处军事基地杀死 Jasper Knight。在 Diana 的帮助下，47 出色地杀死了 Knight，被机构接纳。',
      '序章以 47 与 Diana 的对话结束：她让他低调行事，等机构联系。Diana 问他的名字，他回答「47」。',
      '据 gu-hitman2016 的 Plot，主线始于《赦免》事件六到七年之后、即 2019 年（另一说为 2020 年，见文件头说明）。47 接到一份针对 Viktor Novikov 及其女友 Dalia Margolis 的合同——两人是情报机构 IAGO 的首脑，IAGO 窃取了绝密情报。',
      '然而就在一天之前，Viktor Novikov 与一名未具名男子见过面。Novikov 把一份文件交给对方，称那是「全球精英的秘密」，那人随后给一个不明来源发消息，要求「泄露那些名字」。',
      '完成巴黎的合同后，47 前往意大利海滨小镇萨皮恩扎。ICA 在这里受雇摧毁一种能感染并无声清除任何人的 DNA 特异性病毒，并杀死其创造者、Ether 生物科技公司的 Dr. Silvio Caruso。',
      '这条线索最终指向科罗拉多的一座杏子农场——影子客户的民兵据点。47 在那里发现，真正的影子客户瞄准的是 Providence，而 ICA 董事会成员 Erich Soders 是 Providence 的内线。',
      '最后一关在北海道 GAMA 医院：47 以「Tobias Rieper」的化名进入，清除 Soders 与 Providence 律师山崎由纪。'
    ],
    features: [
      '以「季」的形式分章发行，每章一张新地图。',
      '精通（Mastery）系统：反复游玩同一地点解锁装备、起始位置与捷径。',
      '行踪不定目标（Elusive Targets）：限时出现、只有一次机会的目标。',
      '机会（Opportunity）系统：把暗杀路线拆解为可跟随的剧情线索。'
    ],
    places: ['格陵兰 · ICA 招募基地', '法国 · 巴黎', '意大利 · 萨皮恩扎', '摩洛哥 · 马拉喀什', '泰国 · 曼谷', '美国 · 科罗拉多', '日本 · 北海道'],
    targets: 'Viktor Novikov · Dalia Margolis · Silvio Caruso · Francesca De Santis · Reza Zaydan · Claus Hugo Strandberg · Jordan Cross · Ken Morgan · Sean Rose 等四人 · Erich Soders · 山崎由纪'
  },
  {
    name: 'HITMAN™ 2',
    nameEn: 'HITMAN™ 2',
    year: '2018',
    kind: 'main',
    note: '「影子客户」现身。终章在罗马尼亚布拉索夫的一座废弃精神病院里，47 与 Lucas Grey 第一次面对面。',
    fact: '把前作埋下的三条线收在一处：影子客户的身份、47 的童年、以及 Diana 父母之死的真凶。',
    plot: [
      '继《HITMAN™》的事件之后，47 展开追猎神秘「影子客户」、进一步瓦解其民兵的任务。第一条线索是影子客户的一名中尉 Alma Reynard 的位置。47 从她那里取得了一些关于影子客户活动的情报。',
      '凭借从 Reynard 处得到的情报，47 被派往迈阿密，暗杀科技巨头 Robert Knox 与其女儿 Sierra——两人分别是 Kronstadt Industries 的所有者与继承人。他们不仅向战犯秘密出售先进武器，还是 Providence 的叛逃者。',
      '47 接着前往哥伦比亚，暗杀毒枭 Rico Delgado 及其两名主要副手 Andrea Martínez 与 Jorge Franco——他们一直在利用走私网络帮助 Grey 与其民兵在全球不被察觉地移动。',
      '这一发现促使 Diana 在柏林与 Grey、Hall 会面。Grey 揭示：负责他与 47 制造的科学家 Ort-Meyer 曾是 Providence 成员，他向第一任 Constant 汇报，并接受三名被称为「合伙人」的高管的电话指令。',
      '在调查若干线索后，47 找到证据表明 Janus 原计划在「Ark Society」的晚宴上与 Constant 会面——那是 Providence 内部一个富豪生存主义团体。Olivia 成功定位了北大西洋上一座偏远岛屿上的会面地点。',
      '就在 47 与 Grey 出发去面对三大家族时，Constant——被 Diana 揭示为「阿瑟·爱德华兹」——嘲讽 Diana 对 47 的过去一无所知。最后一段闪回向观众（而非 Diana）揭示：杀死 Diana 父母的汽车炸弹，是 47 安放的。',
      '尽管如此，爱德华兹仍协助团队定位三位合伙人，建议他们「跟着钱走」，去查各自在 Milton-Fitzpatrick 投资银行的账户——那也是 Grey 的前东家。47 被派往该行的纽约分行，窃取合伙人账户的数据，并除掉行长 Athena Savalas。',
      '终章：47 与 Grey 在布拉索夫的废弃精神病院面对面。Grey 投降，用两人童年的约定唤回 47 的记忆，并给他注射从 Ether 窃得的记忆解药。'
    ],
    features: [
      '相机视野网格：使用本能模式时，可看到监控摄像头的视野范围。',
      '画中画（Picture-in-Picture）：在角落弹出小画面——该功能最早出现在《血钱》，本作回归。',
      '简报盒（Briefcase）：可携带狙击枪等长武器而不暴露。',
      '幽灵模式（Ghost Mode）：两名玩家竞速暗杀同一目标。',
      '不再分章发行，改为传统整作发售。'
    ],
    places: ['新西兰 · 霍克斯湾', '美国 · 迈阿密', '哥伦比亚 · 圣福图纳', '印度 · 孟买', '美国 · 惠特尔顿溪', '北大西洋 · 斯盖尔岛', '美国 · 纽约', '马尔代夫 · 避风港岛', '罗马尼亚 · 布拉索夫'],
    targets: 'Alma Reynard · Robert 与 Sierra Knox · Rico Delgado · Andrea Martínez · Jorge Franco · Vanya Shah · Wazir Kale · Dawood Rangan · Janus · Nolan Cassidy · Zoe 与 Sophia Washington · Athena Savalas · Tyson Williams · Ljudmila Vetrova · Steven Bradley'
  },
  {
    name: 'HITMAN™ III',
    nameEn: 'HITMAN™ III',
    year: '2021',
    kind: 'main',
    note: '与机构正式决裂，重庆数据设施曝光——「ICA Papers」。系列在此收束。',
    fact: '三部曲的收束作：合伙人全部清除、Constant 被处理、ICA 被自己培养的资产终结。',
    plot: [
      '紧接《HITMAN™ 2》之后，47、Lucas Grey、Diana Burnwood 与 Olivia Hall 继续执行扳倒合伙人的任务。游戏开场，47、Grey 与 Diana 正在策划对迪拜 Burj Al-Ghazali 中合伙人的伏击。',
      'Olivia 追踪 Alexa Carlisle 到英格兰达特穆尔的家族庄园 Thornbridge Manor——她正与家人在一起，家人对她还活着大为震惊。然而她清楚这撑不了多久，已迅速开始遏制 Constant 对 Providence 的控制。',
      '47 杀死 Alexa，并取回关于阿瑟·爱德华兹的案卷。但就在此时，与 Diana 的通讯中断，47 被孤立。走向摩托车时，Grey 通过耳麦告诉他：他们已被识破，阿瑟·爱德华兹找到了他们。',
      '47 抵达柏林后联系 Olivia，却发现她正被 ICA 的多名特工追杀——共十二名。47 在俱乐部里杀死了其中五名。',
      '事实证明，47 在达特穆尔取得的关于爱德华兹的案卷毫无用处：合伙人花了大量精力确保 Constant 无法被追踪。随着包围圈收紧、ICA 开始远程入侵 Olivia 的文件，看起来只剩一条路。',
      '47 调出关于自己与 Diana 的档案，屏幕上开始滚动「刺杀世界」三部曲中几乎每一个主要目标——包括《HITMAN™》的大部分行踪不定目标。Olivia 问他这是不是他想要的，47 同意「也许是时候了」。',
      '他把 ICA 的全部信息泄露给公众，终结了这个组织。',
      '与此同时，爱德华兹试图说服 Diana 成为下一任 Constant。她接受 Herald 之位，并把 47 引到阿根廷门多萨，除掉挡路的 Don Yates 与 Tamara Vidal；随后她用一剂镇静毒药使 47 失去行动能力，让他被带上开往蒙古的列车「The Mortar」号。',
      '47 在喀尔巴阡山脉醒来，一路打到车头，与爱德华兹对峙。他拒绝再接受一剂记忆抹除血清，随后杀死或注射了爱德华兹，停下火车，走了出去。',
      '一年后，47 与 Diana 在林中木屋重聚，两人同意开办自己的、以正义为准绳的暗杀事业——正式「自由执业」。'
    ],
    features: [
      '键盘锁：部分上锁的门需要输入四位密码。',
      '永久捷径：梯子与门形式的捷径可解锁，缩短地图移动时间，并奖励玩家探索。',
      'VR 模式（后独立扩展为 HITMAN III VR: RELOADED）。',
      '2023 年 1 月 26 日随 Freelancer 更新，本作更名为《HITMAN™ — World of Assassination》。'
    ],
    places: ['阿联酋 · 迪拜', '英格兰 · 达特穆尔', '德国 · 柏林', '中国 · 重庆', '阿根廷 · 门多萨', '罗马尼亚 · 喀尔巴阡山脉'],
    targets: 'Carl Ingram · Marcus Stuyvesant · Alexa Carlisle · ICA 刺杀小组 · Hush · Imogen Royce · Don Archibald Yates · Tamara Vidal · Arthur Edwards'
  },
  {
    name: '《杀手：暗杀世界》',
    nameEn: 'Hitman: World of Assassination',
    year: '2023',
    kind: 'main',
    note: '重启三部曲的整合版本，并附带 Freelancer 模式。47 与 Diana 转入自由执业。',
    fact: '把三部曲合并为单一入口，并加入 Roguelike 式的 Freelancer 模式——系列第一次让「经营」成为玩法的一部分。'
  },

  /* ---------- 合集与重制 ---------- */
  { name: '《杀手三部曲》', nameEn: 'Hitman Trilogy (The Triple Hit Pack)', year: '2007', kind: 'pack', note: '前三作的合集。' },
  { name: '《杀手：终极合同》', nameEn: 'Hitman: Ultimate Contract (Hitman Collection)', year: '2009', kind: 'pack', note: '四作合集。' },
  { name: '《杀手 HD 三部曲》', nameEn: 'Hitman HD Trilogy', year: '2013', kind: 'pack', note: '《沉默刺客》《契约》《血钱》的高清合集。' },
  { name: '《杀手：血钱》重制版', nameEn: 'Hitman: Blood Money — Reprisal', year: '2023', kind: 'pack', note: '《血钱》的移动端／Switch 重制。' },

  /* ---------- 支线游戏 ---------- */
  { name: '《杀手：狙击挑战》', nameEn: 'Hitman: Sniper Challenge', year: '2012', kind: 'spin', note: '《赦免》的独立狙击预购奖励，也是后来「狙击刺客」模式的雏形。' },
  { name: '《杀手 GO》', nameEn: 'Hitman GO', year: '2014', kind: 'spin', note: '回合制解谜版本，把系列的美学抽象成棋盘。' },
  { name: '《杀手：狙击》', nameEn: 'Hitman: Sniper', year: '2015', kind: 'spin', note: '移动端狙击游戏。' },
  { name: '《杀手：狙击刺客》', nameEn: 'HITMAN: Sniper Assassin', year: '2018', kind: 'spin', note: '《HITMAN™ 2》的独立狙击模式，首次可操作 Stone 与 Knight。' },
  { name: '《杀手狙击：暗影》', nameEn: 'Hitman Sniper: The Shadows', year: '2021', kind: 'spin', note: '移动端狙击游戏，主角是一支新的狙击小组，而非 47。' },

  /* ---------- 其他媒体 ---------- */
  { name: '《杀手：内部敌人》', nameEn: 'Hitman: Enemy Within', year: '2007', kind: 'media', note: '小说。给出了与游戏不同的 47 起源版本：他在 12 岁时杀死欺负他的 6 号并独自逃出。' },
  { name: '《杀手：诅咒》', nameEn: 'Hitman: Damnation', year: '2012', kind: 'media', note: '小说，设定在《赦免》之前。' },
  { name: '《杀手：刺客 47 的诞生》', nameEn: 'Agent 47: Birth of the Hitman', year: '2017–2018', kind: 'media', note: '漫画。47 与 6 号（Lucas Grey）在人类改良研究所的童年，以及那次逃亡。' },
  { name: '《杀手》', nameEn: 'Hitman (film)', year: '2007', kind: 'media', note: '真人电影。官方年表明确将两部真人电影排除在正史之外。' },
  { name: '《杀手：代号 47》', nameEn: 'Hitman: Agent 47 (film)', year: '2015', kind: 'media', note: '真人电影。同样不计入正史。' },
  { name: '《越界者》', nameEn: 'Overachievers', year: '—', kind: 'media', note: '系列相关的短篇作品。' }
];

/* 系列总览：来自 series.txt 的几条结构性事实 */
const ICA_SERIES_FACTS = [
  { k: '创作者与发行', v: '由 IO-Interactive 创作、Square Enix（原 Eidos Interactive）发行。2017 年 5 月，IO-Interactive 从 Square Enix 独立。' },
  { k: '核心设定', v: '系列基于一名叫 47 的光头合同杀手的生平——他是基因增强的克隆体，优于任何常人，能以完美无瑕的才华执行任何暗杀。' },
  { k: '统一基调', v: '所有作品基调阴暗，使用恐怖与黑色喜剧元素。47 暧昧的宗教与道德观从《沉默刺客》开始成为主题。他的所有目标都犯下过黑暗的罪行。' },
  { k: '玩法', v: '玩家被鼓励使用潜行，但可以用多种方式完成任务——这使《杀手》成为社区眼中最具多样性的剧情沙盒游戏之一。' },
  { k: '目标画像', v: '47 的目标几乎从不是无辜平民。他们通常是犯罪首领、恐怖分子与腐败官员。47 经常被政客雇用，尤其是联合国这样的顶级机构。' },
  { k: '地点', v: '47 一生大部分时间在欧洲生活与工作，但频繁走遍世界。在《血钱》中他永久移居美国。' },
  { k: '终局', v: '每部游戏结尾，47 都会陷入某种危险场景、面对众多敌人，这要求更少的传统潜行与更多的射击。这些「枪战」通常以游戏主要反派之死收场。' },
  { k: '配音', v: '47 由 David Bateson 配音。Diana 依次由 Vivienne McKee（至《血钱》）、Marsha Thomason（《赦免》）、Jane Perry（《HITMAN™》起）配音。' }
];
