/* ==========================================================================
   data-timeline.js — 大事记 / 编年史
   主来源：Hitman Fandom「Hitman Timeline」条目（hitman-timeline.txt，2024-12-23 存档）
   辅：agent-47.txt、diana-burnwood.txt、gu-ortmeyer.txt、ica.txt、
       gu-codename47.txt、world-of-assassination.txt
   key: true 表示与机构直接相关的节点
   src: 原文出处标注
   ========================================================================== */

const ICA_TIMELINE = [
  {
    year: '1945', date: '', key: true,
    title: 'Providence 成立',
    text: '二战结束后，Providence 成立。这个不为人知的权力集团将在半个世纪后成为本机构最大的隐性对手——也是最早资助克隆实验项目的金主。',
    src: 'hitman-timeline.txt'
  },
  {
    year: '1950', date: '', key: true,
    title: '"五父"加入法国外籍军团',
    text: 'Otto Wolfgang Ort-Meyer、Lee Hong、Pablo Belisario Ochoa、Frantz Fuchs 与 Arkadij Jegorov 加入法国外籍军团，在同一部队服役。四人在越南结识并结为好友。',
    src: 'hitman-timeline.txt · gu-ortmeyer.txt'
  },
  {
    year: '1955', date: '', key: true,
    title: '"五父"退役',
    text: '五人离开法国外籍军团。Ort-Meyer 在罗马尼亚萨图马雷开办精神病院作为基因实验的掩护；其余四人走向犯罪首脑与恐怖主义的道路。同年，Erich Soders 出生——他日后将成为本机构的训练主管与董事会成员。',
    src: 'hitman-timeline.txt · agent-47.txt · ica.txt（Soders 身份）'
  },
  {
    year: '——', date: '', key: true,
    title: '【未载明】机构成立年份',
    text: '官方年表与机构条目均未载明国际合同代理机构的成立年份。在此明确标注为未知，而非给出一个推测值。年表中最早与机构直接相关的明确时间点是 1973 年 Erich Soders 开始其特工生涯。',
    src: 'hitman-timeline.txt · ica.txt（经全文检索确认无成立年份记载）'
  },
  {
    year: '1962', date: '', key: true,
    title: '"人类改良研究所"接管设施',
    text: '罗马尼亚布拉索夫附近的喀尔巴阡山脉中，一座前少年管教所被一个名为"人类改良研究所"（Institute for Human Betterment）的苏联研究基金接管。这里将成为 47 与 6 号被关押的地方。',
    src: 'hitman-timeline.txt · lucas-grey.txt'
  },
  {
    year: '1964', date: '9 月 5 日', key: true,
    title: '47 号诞生',
    text: '克隆体 47 号成功诞生于 Ort-Meyer 位于罗马尼亚的精神病院。他的 DNA 是"五父"基因的融合——五人各自捐出自己的 DNA 为项目提供资金。后脑被刺上编号 640509-040147：64-05-09 为制造日期，04 表示第四系列，01 表示该系列第一人，47 表示他是第 47 号。',
    src: 'hitman-timeline.txt · agent-47.txt'
  },
  {
    year: '1973', date: '', key: true,
    title: 'Soders 加入机构（年表最早节点）',
    text: '这是官方年表中最早与机构直接相关的明确时间点：Erich Soders 开始其作为机构特工的职业生涯。他将在此后数十年间逐步升任训练主管与董事会成员——并于 2019 年在北海道向 Providence 出卖了现役代理人名单。',
    src: 'hitman-timeline.txt（1973 条目）· ica.txt'
  },
  {
    year: '1970 年代中期', date: '', key: true,
    title: 'Janus 成为 Providence 第一任 Constant',
    text: 'Janus 被招募为 Providence 的第一任 Constant。该组织成立于 1945 年，创始人是 Eckhart Stuyvesant、Douglas Ingram 与 Thomas Alexander Carlisle。——理解这一点，才能理解机构后来的处境：它长期在不知不觉中为一个由三人血统延续控制的权力集团清除目标。',
    src: 'providence.txt'
  },
  {
    year: '1976', date: '', key: false,
    title: '被修改的记忆：第一次杀人',
    text: '在 47 被修改过的记忆中，这是他第一次杀人的年龄——他杀死了同为克隆体的 6 号，为第二只宠物之死复仇，随后逃出精神病院，却只被找回并接受更严酷的训练，以及一顿完整的早餐。',
    src: 'hitman-timeline.txt（原文标注为"被修改的记忆"）'
  },
  {
    year: '1977', date: '3 月 23 日', key: false,
    title: '第一次逃亡尝试',
    text: '47 与 6 号在暗杀一名不明目标后试图逃离精神病院，失败。两人被 Ort-Meyer 与守卫轻易追踪到——逃往的村庄被屠灭以消除全部证人。',
    src: 'hitman-timeline.txt · lucas-grey.txt'
  },
  {
    year: '1978', date: '4 月 – 11 月', key: true,
    title: 'Soders 的外勤时期',
    text: '4 月，Erich Soders 用套在对方颈上的绞索、踢开椅子将其吊死的方式暗杀 Roman Laurent 医生。11 月，他又以伪造车祸的方式暗杀 Van Orten 烟草公司的 Edith van Orten。——在本机构的历史上，Soders 先是代理人，后来才成为训练主管。',
    src: 'hitman-timeline.txt · ica.txt'
  },
  {
    year: '1979', date: '', key: true,
    title: 'Jasper Knight 案',
    text: 'Jasper Knight 暗杀了试图西逃的美苏大使，随后逃往共产主义古巴。Erich Soders 通过在一架喷气机的弹射座椅上做手脚，在它的安全测试中将其杀死。',
    src: 'hitman-timeline.txt'
  },
  {
    year: '1980 年代', date: '', key: true,
    title: '研究所被改造成暗杀服务机构',
    text: '应 Alexa Carlisle 的要求，Providence 将 Ort-Meyer 的研究所改造成一个暗杀服务机构——这就是国际合同代理机构的前身。这条记载说明了机构与 Providence 之间最初的关系：它不是被 Providence 渗透的，它本来就是 Providence 造出来的。',
    src: 'providence.txt'
  },
  {
    year: '1981', date: '', key: true,
    title: 'Soders 从外勤退役',
    text: 'Erich Soders 从本机构的刺客岗位退役。——这是理解这个人物的关键：他后来以训练主管与董事会成员的身份重返机构，却最终向 Providence 出卖了整个现役代理人名单。',
    src: 'hitman-timeline.txt'
  },
  {
    year: '1989', date: '9 月', key: true,
    title: 'Diana 父母之死',
    text: 'Diana Burnwood 的父母在前往探望儿子 James Burnwood 墓地的途中，被汽车炸弹炸死。炸弹由 47 与 6 号（Lucas Grey）放置，幕后指使者是 Blue Seed 制药高层及其在 Providence 中的关系人。James Burnwood 本人已于同年因四期癌症去世。Diana 当时 17 岁。',
    src: 'hitman-timeline.txt · diana-burnwood.txt（弟弟死因：Blue Seed 化学品泄漏，与癌症记载并存）'
  },
  {
    year: '1989', date: '11 月 9–10 日', key: true,
    title: '柏林墙倒塌 · 第二次逃亡',
    text: '11 月 9 日柏林墙被拆除。次日，47 与 6 号袭击精神病院：结果是 47 投降，6 号成功逃脱。随后 47 的记忆被 Ort-Meyer 抹除。',
    src: 'hitman-timeline.txt · lucas-grey.txt'
  },
  {
    year: '1990 年代', date: '', key: true,
    title: 'Max Valliant 遇刺未遂',
    text: '一名身份不明的特工在董事会成员 Angus Pritchard 的指示下暗杀 Max Valliant——理由是他"两头下注"。Valliant 在这场暗杀中幸存。',
    src: 'hitman-timeline.txt · ica.txt（Pritchard 为董事会成员）'
  },
  {
    year: '1998', date: '11 月 12–15 日', key: true,
    title: '47 成为唯一的幸存克隆体',
    text: '11 月 12 日，47 杀死 81 号，成为精神病院中唯一活下来的克隆体。14 日，Ort-Meyer 在 Providence 第一任 Constant 的逼迫下交出了 47。15 日，克隆体 47 逃出精神病院。',
    src: 'hitman-timeline.txt · gu-ortmeyer.txt'
  },
  {
    year: '1999', date: '10 月', key: true,
    title: 'Diana 递交招募意向',
    text: '10 月，香港有四名不明男子被暗杀；Franklin Marchand 连同四名机构特工一同被杀。Diana Burnwood 随后在一间酒吧与 47 会面，向他提供了机构的职位。',
    src: 'hitman-timeline.txt · diana-burnwood.txt'
  },
  {
    year: '1999', date: '11 月 16 – 12 月 14 日', key: true,
    title: '47 在 ICA 训练设施受训',
    text: '11 月 16 日 47 抵达 ICA 训练设施（位于格陵兰的废弃发射井）。11 月 23 日进行通识训练；11 月 30 日在机构安全屋进行引导训练；12 月 7 日进行自由形式训练；12 月 14 日完成最终测试。随后 47 被正式聘用并获得"特工"头衔，Diana Burnwood 成为他的协调人。',
    src: 'hitman-timeline.txt · ica-facility.txt'
  },
  {
    year: '2000', date: '2 月', key: true,
    title: '清除"五父"',
    text: '2 月起，47 接连处决红龙三合会代表、多名蓝莲三合会成员（由此引发一场帮派战争），随后依次清除 Lee Hong、Pablo Belisario Ochoa、Frantz Fuchs 与 Arkadij Jegorov。所有合同均以不同匿名客户的名义下达，实则出自 Ort-Meyer 一人之手。',
    src: 'hitman-timeline.txt · gu-codename47.txt'
  },
  {
    year: '2001', date: '', key: true,
    title: '48 系列 · Ort-Meyer 之死',
    text: '47 与十余名 48 号克隆体正面对峙，并杀死 Ort-Meyer。至此"五父"全部清除。此后 Ort-Meyer 被追认为 Providence 的行动人员。',
    src: 'hitman-timeline.txt · gu-ortmeyer.txt'
  },
  {
    year: '2002–2003', date: '', key: true,
    title: '《沉默刺客》时期',
    text: 'Vittorio 神父被绑架，47 从退休状态复出；随后是 Giuseppe Guillani 遇刺与营救神父的失败、Bardachenko 将军遇刺与营救 Carl Smith 特工、Zhupikov 遇刺与导弹制导系统的回收失败、Hayamoto 父子遇刺与制导系统的最终回收。',
    src: 'hitman-timeline.txt · gu-silentassassin.txt'
  },
  {
    year: '2003', date: '', key: true,
    title: 'Aristotle Thorakis 案',
    text: '47 处决了董事会成员 Aristotle Thorakis。此后 Erich Soders 接替了他在董事会的席位——这是机构内部权力更替的关键一环。',
    src: 'ica.txt · agent-47.txt'
  },
  {
    year: '2004', date: '', key: true,
    title: '《契约》：巴黎歌剧院与幻觉',
    text: '在巴黎歌剧院完成一次刺杀后，47 返回酒店房间时遭到拦截并中枪。他带伤退入自己的公寓，在那里倒下并开始产生关于过往任务的幻觉闪回——其中包括屠宰场的"肉王"坎贝尔·斯特罗克、堪察加的 Fabian Fuchs、贝尔丁福德庄园的英格兰贵族家族、鹿特丹的飞车党。一名机构医生救下了他。',
    src: 'hitman-timeline.txt · gu-contracts.txt'
  },
  {
    year: '2005–2012', date: '', key: true,
    title: '《血钱》与机构危机',
    text: '47 被卷入一场针对机构本身的阴谋，并一度被美国政府通缉。在此期间 Diana Burnwood 于《血钱》末期被晋升为 ALPHA 等级——这是机构等级体系中的最高一档。',
    src: 'hitman-timeline.txt · diana-burnwood.txt'
  },
  {
    year: '2012–2014', date: '', key: true,
    title: '《赦免》：机构内部的腐败',
    text: '本杰明·特拉维斯在机构内部秘密主导克隆刺客 Victoria 项目，并命令 47 处决 Diana Burnwood。47 转而保护 Victoria，随即被标记为叛逃者并遭到机构刺杀小组的追杀。Diana 在淋浴时被 47 射中胸部——她实际上用假死血清活了下来。特拉维斯最终在 Diana 的临终请求下被 47 处决。此事之后，机构内部被清除了一批腐败成员。',
    src: 'hitman-timeline.txt · gu-absolution.txt · diana-burnwood.txt'
  },
  {
    year: '2019', date: '', key: true,
    title: '《HITMAN™》：发现第三方',
    text: '47 与 Diana 在履行合同的过程中逐渐得出结论：本机构一直在被操纵，为一个神秘的第三方清除目标。他们最终发现并开始正面对抗那个隐秘而强大的组织——Providence，以及它安插在机构内部的内线。',
    src: 'hitman-timeline.txt · world-of-assassination.txt'
  },
  {
    year: '2019', date: '', key: true,
    title: '北海道：处决董事会成员',
    text: '机构董事会成员、训练主管 Erich Soders 正准备把现役代理人名单交给他的 Providence 联络人山崎由纪。47 在北海道 Gama 设施的雪峰之上处决了两人。——这是机构第一次亲手清除自己的董事会成员。',
    src: 'hitman-timeline.txt · ica.txt'
  },
  {
    year: '2020', date: '', key: true,
    title: '《HITMAN™ 2》：影子客户',
    text: '47 发现系列合同的委托方其实是一个被称为"影子客户"的人——Lucas Grey。在罗马尼亚布拉索夫一座废弃精神病院里，两人第一次面对面相见。Grey 向 47 揭示：他们当年一起杀死了 Diana 的父母。同时，Providence 的三名"合伙人"在马尔代夫避风港岛被清除。',
    src: 'hitman-timeline.txt · lucas-grey.txt · providence.txt'
  },
  {
    year: '2020', date: '', key: true,
    title: '安布罗斯岛：与主线无关的插曲',
    text: '47 前往安达曼海上未被标注的安布罗斯岛，帮助一位老朋友纠正他的错误。岛上是一个海盗集团的老巢，目标为叛离的 Noel Crest 与海盗首领 Akal Knight。该地图于 2022 年 7 月才加入游戏，但按叙事时间发生在《HITMAN™ 2》期间，因此编年史将它系于此年。',
    src: 'ambrose-island.txt'
  },
  {
    year: '2021', date: '', key: true,
    title: '《HITMAN™ III》：与机构决裂',
    text: '在柏林 Club Hölle，机构派出由资深成员蒙哥马利率领的刺杀小组来清除 47——他成了猎物。此后 47 与 Diana 在 Olivia Hall 的协助下潜入机构位于中国重庆的数据设施，通过一个黑客活动网站把机构的存在泄露给全世界，同时掩盖自己与 Diana 的痕迹。',
    src: 'hitman-timeline.txt · chongqing.txt · ica.txt'
  },
  {
    year: '2021', date: '', key: true,
    title: '「ICA Papers」曝光',
    text: '机构以「ICA Papers」之名在媒体上被曝光，其全部运作细节——架构、等级体系、定价、代理人名单——进入公共领域。Providence 的前任 Constant Janus 与继任者阿瑟·爱德华兹先后被清除；Diana 一度接受成为新的 Constant，目的是从内部拆解 Providence。',
    src: 'ica.txt · diana-burnwood.txt'
  },
  {
    year: '2021', date: '', key: true,
    title: '机构解散',
    text: '国际合同代理机构解散。其最终的官方状态是：Dissolved（已解散）。47 与 Diana 转为自由执业，以杀手与协调人的身份独立接单，不再隶属于任何组织。机构的存续总时长无从计算——成立年份本身未载明，年表中最早的节点是 1973 年 Soders 入职，而那是"最早记录"而非"创建时间"。',
    src: 'ica.txt（Status: Dissolved）· diana-burnwood.txt · world-of-assassination.txt'
  },
  {
    year: '2022', date: '', key: true,
    title: '复出：47 与 Diana 转为自由职业者',
    text: '47 从退休状态中复出，与 Diana 以自由职业者的身份重新搭档。两人不再接受任何机构的委派，而是自行选择目标，对全球性的犯罪集团发起持续的清除行动。这是 47 第一次在没有机构作为中介的情况下工作。',
    src: 'hitman-timeline.txt · world-of-assassination.txt'
  },
  {
    year: '2022', date: '', key: true,
    title: '安全屋：新的基地',
    text: '47 取得一处个人安全屋，把它作为策划与执行行动的基地。信息框中该地点的类型标注为"秘密地点"，而所有者一栏写的是他自己——在机构的全部历史中，47 从未拥有过任何登记在自己名下的资产。安全屋共 17 个子区域，随精通等级逐步解锁。',
    src: 'safehouse.txt · hitman-timeline.txt'
  },
  {
    year: '2022', date: '', key: false,
    title: '柏林 Club Boom：Alexios Laskaridis',
    text: '47 在新近翻修的柏林 Club Boom 刺杀由 DJ 转型的毒枭 Alexios Laskaridis。这次行动属于自由职业者时期针对犯罪集团的系列清除之一。',
    src: 'hitman-timeline.txt'
  },
  {
    year: '2022', date: '', key: true,
    title: '"The Disruptor"：死亡并非终点',
    text: '47 在锡盖尔岛 Ark Society 的年度活动上刺杀知名综合格斗选手"The Disruptor"。行动本身成功——但目标随后在北海道的 GAMA 设施被复活。这是编年史中除 47 本人之外，极少数出现"死亡可被逆转"的案例；GAMA 也正是 2019 年 Erich Soders 接受手术的那家设施。',
    src: 'hitman-timeline.txt'
  }
];
