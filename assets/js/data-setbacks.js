/* ==========================================================================
   data-setbacks.js — 行动受挫与失败记录
   来源：ica.txt（机构史与立场转变）、gu-absolution.txt（《赦免》事件链）、
         gu-bloodmoney.txt、gu-hitman-3.txt、providence.txt、diana-burnwood.txt、
         agent-47.txt（47 号时间线中的欺骗与反制事件）
   定位：其他板块记录机构做成了什么；本档案记录机构判断失误、被欺骗、
         被反制、以及最终失去自己最强资产的过程。
   kind: deception 被欺骗 / internal 内部背叛 / decapitation 遭打击 /
         rogue 反目 / exposure 暴露 / asset-loss 资产流失
   ========================================================================== */

const ICA_SETBACKS = [

  /* ===================== 被欺骗 ===================== */
  {
    id: 'S-FOUR-CONTRACTS', kind: 'deception', year: '1999',
    name: '四份合同是同一人下的单', nameEn: 'Four Contracts, One Client',
    severity: 'MODERATE',
    what: '机构为 47 号安排了四份针对不同目标的合同。四份全部完成之后，机构才发现它们是由同一个人秘密下达的——Otto Wolfgang Ort-Meyer。',
    detail: [
      ['四名目标', '全部是「五父」成员：47 的基因来源'],
      ['机构的角色', '在不知情的情况下，成为 Ort-Meyer 清除旧日战友的工具'],
      ['后果', '47 最终杀死了 Ort-Meyer 本人——机构安排的合同链，终点指向了它的客户']
    ],
    note: '这是机构历史上第一次在客户身份层面被彻底愚弄。值得记录的是：机构并未因此建立更严格的客户审查——多年后它仍在为匿名客户接单。'
  },
  {
    id: 'S-FALSE-REPORT', kind: 'deception', year: '《HITMAN™ 2》时期',
    name: '一份伪造报告骗过整个机构', nameEn: 'The False Report',
    severity: 'HIGH',
    source: 'Providence 与 ICA 同时上当',
    what: '一份虚假报告声称 Janus 与罗马尼亚的那家机构有关联，并且他本人就是「影子客户」。Providence 与 ICA 双双相信了这份报告。',
    detail: [
      ['被误导方', 'Providence 以及 ICA 的其余部分'],
      ['报告内容', '指认 Janus 与罗马尼亚机构有关，且是影子客户'],
      ['真实情况', '影子客户另有其人——即 Subject 6 / Lucas Grey'],
      ['后果', '机构把资源投向错误的目标，而真正的对手得以继续推进计划']
    ],
    note: '这份报告的来源与伪造者，在原文资料中没有明确交代。本档案按「已确认的空白」处理，不作推断。'
  },

  /* ===================== 遭打击 ===================== */
  {
    id: 'S-FRANCHISE', kind: 'decapitation', year: '2006 前后（《血钱》）',
    name: 'The Franchise 的清洗', nameEn: 'The Franchise Purge',
    severity: 'CRITICAL',
    what: 'The Franchise 成员逐个杀死 ICA 代理人，数量多到 Diana 说她与 47 是仅存的两个。机构作为一个组织，在这一时期实际上已不复存在。',
    detail: [
      ['打击方式', '有针对性地逐个清除代理人'],
      ['损失规模', '原文表述为「许多」代理人被杀，多到只剩两人'],
      ['机构状态', '等同瓦解；最后两份合同（Anthony Martinez 与 Vaana Ketlyn）由剩下的两人完成'],
      ['恢复', 'The Franchise 被清除后，Diana 宣布所有资产重新上线']
    ],
    note: '这次打击暴露了「无总部、小组分散」结构的一个反直觉弱点：分散确实让机构难以被一次斩首，但每一个代理人都是承重节点，失去他们同样致命。'
  },
  {
    id: 'S-REGROUP-ORDER', kind: 'rogue', year: '《赦免》时期',
    name: '重组后，机构向自己人下手', nameEn: 'The Agency Turns Inward',
    severity: 'CRITICAL',
    what: 'ICA 重组后下达了对 Diana Burnwood 的暗杀令，地点是芝加哥附近、密歇根湖畔她租下的宅邸。',
    detail: [
      ['起因', 'Benjamin Travis 得知 Diana 已经掌握了「Victoria 计划」的真相'],
      ['先行动作', 'Travis 试图除掉 Diana，但她逃脱了'],
      ['对 47 的使用', '机构派 47 去杀 Diana——他照做了，开枪击中了她'],
      ['转折', '47 没有交回 Victoria，机构随即把兵力转向他'],
      ['Diana 的生还', '她靠一剂假死血清活了下来']
    ],
    note: '这一事件是系列中机构与 47 关系的转折点：47 从「机构的资产」变成「机构的目标」。此后 ICA 在《赦免》与《HITMAN™ III》两部作品中都是 47 的敌对势力。'
  },
  {
    id: 'S-STRIKE-TEAM', kind: 'rogue', year: '《赦免》时期',
    name: '威基基旅馆的突袭', nameEn: 'The Waikiki Inn Strike',
    severity: 'HIGH',
    what: '47 在附近的威基基旅馆休整时，遭到一支 ICA 突击队的突袭，仅仅勉强生还。带队的是「圣徒」——Travis 所谓的"宠物项目"，由若干名精英女性刺客组成。47 把她们逐个清除，直到最后一人，包括队长 LaSandra Dixon。',
    detail: [
      ['突击队指挥官', 'The Saints'],
      ['结果', '47 侥幸逃脱，未被消灭'],
      ['47 的反击', '逐个清除圣徒全员，包括队长 LaSandra Dixon；随后取走她们的通讯器'],
      ['直接后果', '他用那台通讯器通知 Travis：「圣徒」任务失败——Travis 被激怒并感到羞辱，亲自率一小支 ICA 作战部队前往希望镇，要杀掉 47 并找到 Victoria'],
      ['意义', '机构开始把用于外部的武力转向自己的前首席资产']
    ]
  },
  {
    id: 'S-HOPE', kind: 'rogue', year: '《赦免》时期',
    name: '「大锤行动」围攻希望镇', nameEn: 'Operation Sledgehammer',
    severity: 'HIGH',
    what: '为搜寻 47 与 Victoria，Benjamin Travis 亲自率一小支 ICA 作战部队前往南达科他州的希望镇，并接管了整个镇子。这不是一次任务，而是一次因羞辱而起的报复行动。',
    detail: [
      ['起因', '47 用缴获的圣徒通讯器通知 Travis：刺杀任务已经失败'],
      ['规模', 'Travis 率领一小支 ICA 作战部队，人数足以接管整座小镇'],
      ['对当地执法者的处置', '接管时开枪打伤了警长 Skurky 的腿'],
      ['手段', '向汽车旅馆发射 RPG'],
      ['处置目击者', '处决了所有目击者'],
      ['附带破坏', '一辆 Ultra Ozone 油罐车被撞毁，烧毁希望镇大片区域'],
      ['平民伤亡', '有迹象表明数名平民死亡'],
      ['离场', '行动失败后，47 征用了一辆灵车离开冒烟的希望镇废墟，前往芝加哥']
    ],
    note: '这次行动是理解《赦免》中 ICA 面貌的关键：它展示的是一个能围攻城镇、动用 RPG、处决目击者的组织。与《血钱》中濒临瓦解的形象判若两物。'
  },

  /* ===================== 内部背叛 ===================== */
  {
    id: 'S-SODERS', kind: 'internal', year: '《HITMAN™》时期',
    name: '训练主管出售情报', nameEn: 'Soders Sells Information',
    severity: 'HIGH',
    what: '前外勤代理人、训练主管 Erich Soders 向敌对组织出售 ICA 情报，最终被 47 号暗杀。',
    detail: [
      ['身份', '机构训练主管，后成为董事会成员'],
      ['行为', '向敌对组织出售机构情报'],
      ['结局', '被 47 号暗杀'],
      ['对照', '董事会成员 Aristotle Thorakis 有完全相同的背叛行为——见「财务与定价档案」']
    ],
    note: '同一类背叛发生了两次，且其中一次来自训练主管。训练主管掌握的是「机构如何培养代理人」的全部知识——这份情报的泄露，其价值不同于一般任务情报。'
  },
  {
    id: 'S-TRAVIS', kind: 'internal', year: '《赦免》前',
    name: '秘密部门的越权计划', nameEn: 'The Splinter Division Project',
    severity: 'CRITICAL',
    what: '一个由 Benjamin Travis 领导的秘密 ICA 部门，私下制造了一名属于他们自己的克隆刺客——女孩 Victoria。',
    detail: [
      ['性质', '机构内部未经授权的平行项目'],
      ['产物', '克隆刺客 Victoria'],
      ['Diana 的反应', '得知后清空了全部 ICA 账户、切断所有通讯'],
      ['Diana 的进一步动作', '让 ICA 为公众所知，随后带 Victoria 逃亡藏匿'],
      ['直接后果', '机构被自己最资深的协调人从内部拆解']
    ],
    note: '这是机构遭受过的最严重的内伤：不是被敌人削弱，而是被自己人主动曝光。Diana 之所以采取如此极端的手段，正说明她判断这个项目已经超出了可以内部纠正的范围。'
  },

  /* ===================== 最终结局 ===================== */
  {
    id: 'S-DISSOLUTION', kind: 'exposure', year: '《HITMAN™ III》',
    name: '机构被公开并解散', nameEn: 'Exposure and Dissolution',
    severity: 'TERMINAL',
    what: 'ICA 的最终状态是「已解散」（Dissolved）——这是该组织在官方资料中的结局标注，不是本档案的推断。',
    detail: [
      ['《HITMAN™ III》中', 'Edwards 逃脱拘禁后，委托 ICA 对 47 与 Olivia Hall（Grey 的副手）下合同'],
      ['双方的设局', '但这次委托本身就是 47 一方设下的陷阱'],
      ['最终结局', '47 摧毁了 Providence 并公开了 ICA'],
      ['之后', '47 与 Diana 重新取得联系，回到杀手与协调人的旧角色，以清除那些「不可触碰的人」，此时与 ICA 已无关联']
    ],
    note: '机构从「47 的雇主」走到「被 47 公开」——这条弧线的每一步都在本档案中有记录。它最终不是被外部力量摧毁的，而是被它自己培养出的那项资产终结的。'
  },

  /* ===================== 代价统计 ===================== */
  {
    id: 'S-COST', kind: 'asset-loss',
    name: '受挫的代价', nameEn: 'What the Setbacks Cost',
    desc: '把上述九起事件按损失类型重新归类，会发现机构失去的东西并不属于同一类：信誉、人力、资金、情报、指挥、判断，以及最终的组织本身。下面逐类列出，并注明每一次的损失由谁造成。',
    losses: [
      ['信誉层面', '1999 年的四份合同：机构在客户审查上被彻底愚弄一次'],
      ['人力层面', 'The Franchise 清洗：代理人几乎被清空，只剩 Diana 与 47'],
      ['资金层面', 'Diana 清空账户：全部运营资金被最资深的协调人一次性抽走'],
      ['情报层面', 'Soders 与 Thorakis 的背叛：内部情报流向敌对组织各一次'],
      ['指挥层面', 'Travis 的平行项目：一个秘密部门能绕开机构主体自行制造克隆刺客'],
      ['判断层面', '伪造报告事件：机构与 Providence 同时被一份报告误导'],
      ['最终', '机构被公开并解散——由它自己的首席代理人执行']
    ],
    observation: '七类损失中没有一类来自外部竞争对手的直接击败。机构的每一次重大受挫，来源都是它自己的成员、它的客户，或它自己的判断。'
  }
];
