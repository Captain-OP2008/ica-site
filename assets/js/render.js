/* ==========================================================================
   render.js — 视图渲染层
   把 data-*.js 中的数据渲染成终端界面的各个视图
   ========================================================================== */

const ICA_RENDER = (() => {

  /* ---------- 小工具 ---------- */
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const term = (en, zh) => en ? `<span class="term">${esc(en)}</span>` : '';

  const statusTag = st => {
    const s = String(st || '').toLowerCase();
    let cls = 'dim', label = st || '未载明';
    if (s.includes('deceased')) { cls = 'red'; }
    else if (s.includes('defect')) { cls = 'warn'; }
    else if (s.includes('active') || s.includes('alive')) { cls = 'ok'; }
    else if (s.includes('dissolved') || s.includes('disband') || s.includes('exposed')) { cls = 'red'; }
    else if (s.includes('mia') || s.includes('unknown') || s.includes('determinant')) { cls = 'warn'; }
    else if (s.includes('former') || s.includes('recruit')) { cls = 'info'; }
    return `<span class="tag ${cls}">${esc(label)}</span>`;
  };

  const rankBadge = r => {
    if (!r || r === '—') return '<span class="tag dim">NO RANK</span>';
    const known = ['GAMMA', 'TETRA', 'EAGLE', 'OSTRCH1'];
    const key = known.includes(String(r).toUpperCase()) ? String(r).toUpperCase() : 'UNKNOWN';
    return `<span class="rank" data-r="${key}">${esc(r)}</span>`;
  };

  /* ======================================================================
     01 概览：动态日志
     ====================================================================== */
  const logPool = [
    ['ok',  'SECURE CHANNEL ESTABLISHED — NODE CHQ-01'],
    ['sys', '检索在册代理人索引…完成'],
    ['',    '资产 BRO3886 记录已同步'],
    ['',    '情报简报单价 USD 1,500 — 已缓存'],
    ['warn','检测到对 ARCHIVE/ICA-PAPERS 的访问请求'],
    ['',    '董事会成员索引：14 条记录'],
    ['ok',  '数据完整性校验通过'],
    ['',    '合同数据库：已载入'],
    ['sys', 'Providence 关系状态：DISSOLVED'],
    ['warn','外部节点扫描：无异常'],
    ['',    '清道夫部门报告已接收'],
    ['ok',  '会话加密：AES-256 / 密钥已轮换']
  ];

  function startSyslog(el) {
    if (!el) return;
    let i = 0;
    const t = () => new Date().toISOString().substr(11, 8);
    const push = () => {
      const [cls, msg] = logPool[i % logPool.length];
      i++;
      const line = document.createElement('div');
      line.className = 'log-line ' + cls;
      line.innerHTML = `<span class="t">${t()}</span><span class="m">${esc(msg)}</span>`;
      el.appendChild(line);
      while (el.children.length > 9) el.removeChild(el.firstChild);
      el.scrollTop = el.scrollHeight;
    };
    for (let k = 0; k < 6; k++) push();
    return setInterval(push, 3600);
  }

  function renderOverview() {
    const c = ICA_CORE;
    const e = document.getElementById('econ-body');
    if (e) {
      e.innerHTML = c.assetEconomics.map(x => `
        <div style="display:flex;justify-content:space-between;gap:var(--sp-4);padding:9px 0;border-bottom:1px solid var(--line)">
          <span style="font-size:var(--fs-base);color:var(--fg-3)">${esc(x.k)}</span>
          <span class="mono" style="font-size:var(--fs-base);color:var(--ica-red-l);font-weight:var(--fw-semibold)">${esc(x.v)}</span>
        </div>`).join('');
    }
  }

  function renderOps() {
    const el = document.getElementById('ops-body');
    if (!el) return;
    el.innerHTML = ICA_CORE.operations.map(o => `
      <div class="panel"><div class="panel-b">
        <h3 style="font-size:var(--fs-md);font-weight:var(--fw-semibold);margin-bottom:6px">${esc(o.title)}${term(o.titleEn)}</h3>
        <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base)">${esc(o.body)}</p>
      </div></div>`).join('');
  }

  /* ======================================================================
     02 组织编制
     ====================================================================== */
  function renderOrg() {
    const el = document.getElementById('org-body');
    if (!el) return;
    const c = ICA_CORE;

    const boardRows = c.board.map(b => `
      <tr>
        <td class="strong">${esc(b.name)}<div class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);margin-top:2px">${esc(b.nameEn)}</div></td>
        <td class="mono">${esc(b.role)}</td>
        <td style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-snug)">${esc(b.note)}</td>
        <td>${statusTag(b.status)}</td>
      </tr>`).join('');

    const unitRows = c.units.map(u => `
      <tr>
        <td class="strong">${esc(u.name)}<div class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);margin-top:2px">${esc(u.nameEn)}</div>
          ${u.note ? `<div style="font-size:var(--fs-sm);color:var(--fg-4);margin-top:4px">${esc(u.note)}</div>` : ''}</td>
        <td class="mono">${esc(u.type)}</td>
        <td class="mono" style="font-size:var(--fs-xs);color:var(--fg-4)">${esc(u.typeEn)}</td>
        <td>${statusTag(u.status)}</td>
      </tr>`).join('');

    const rankRows = c.ranks.map(r => `
      <tr>
        <td>${rankBadge(r.code)}</td>
        <td style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.desc)}</td>
      </tr>`).join('');

    /* 代理人名册：成员表的 Other Agents 一栏。空的 note 不编造，统一标为「档案无载明」。 */
    const agentRows = c.agents.map(a => `
      <tr>
        <td class="strong">${esc(a.name)}${a.nameEn ? `<div class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);margin-top:2px">${esc(a.nameEn)}</div>` : ''}</td>
        <td>${rankBadge(a.code)}</td>
        <td style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-snug)">${a.note ? esc(a.note) : '<span style="color:var(--fg-4)">档案无载明</span>'}</td>
        <td>${statusTag(a.status)}</td>
      </tr>`).join('');

    /* 线人：非独家合作的情报来源 */
    const informantRows = c.informants.map(f => `
      <tr>
        <td class="strong">${esc(f.name)}${f.nameEn ? `<div class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);margin-top:2px">${esc(f.nameEn)}</div>` : ''}</td>
        <td class="mono" style="font-size:var(--fs-xs)">${esc(f.role)}</td>
        <td style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-snug)">${f.note ? esc(f.note) : '<span style="color:var(--fg-4)">档案无载明</span>'}</td>
        <td>${statusTag(f.status)}</td>
      </tr>`).join('');

    /* 外部资产：具备特定技能、被机构长期使用的非代理人 */
    const assetRows = c.assets.map(a => `
      <tr>
        <td class="strong">${esc(a.name)}</td>
        <td class="mono" style="font-size:var(--fs-xs);color:var(--fg-3)">${esc(a.org || '—')}</td>
        <td style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(a.role || '—')}</td>
        <td>${statusTag(a.status)}</td>
      </tr>`).join('');

    const clientChips = c.clientsNamed.map(x => `
      <span class="chip" title="${esc(x.status || '')}">${esc(x.name)}<i style="font-style:normal;color:var(--fg-4);font-size:var(--fs-2xs);margin-left:6px">${esc(x.status || '')}</i></span>`).join('');

    /* 组织客户：机构对外是合法咨询公司，因此客户名单本身并不秘密 */
    const orgChips = c.clientOrgs.map(x => `
      <span class="chip">${esc(x.name)}<i style="font-style:normal;color:var(--fg-4);font-size:var(--fs-2xs);margin-left:6px">${esc(x.status || '')}</i></span>`).join('');

    const complianceRows = c.compliance.items.map(i => `
      <div class="dl-row" style="grid-template-columns:118px 1fr">
        <dt>${esc(i.k)}</dt><dd>${esc(i.v)}</dd>
      </div>`).join('');

    const handlerRows = c.handlers.map(h => `
      <tr>
        <td class="strong">${esc(h.name)}<div class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);margin-top:2px">${esc(h.nameEn)}</div></td>
        <td>${rankBadge(h.code)}</td>
        <td class="mono">${esc(h.role)}</td>
        <td style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-snug)">${esc(h.note)}</td>
        <td>${statusTag(h.status)}</td>
      </tr>`).join('');

    el.innerHTML = `
      <div class="block">
        <div class="block-h"><h2>董事会</h2><span class="eyebrow">Board of Directors · 截至 2003 年</span></div>
        <div class="note info" style="margin-bottom:var(--sp-4)">
          <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg>
          <div>董事会由身份不明的主席领导，他从不露面，并要求中层管理者（如 Diana）也尽量不露面。以下构成详载于小说《Hitman: Enemy Within》。</div>
        </div>
        <div class="tbl-scroll">
          <table class="tbl">
            <thead><tr><th>姓名</th><th>职务</th><th>背景与备注</th><th>状态</th></tr></thead>
            <tbody>${boardRows}</tbody>
          </table>
        </div>
      </div>

      <div class="block">
        <div class="block-h"><h2>行动人员等级</h2><span class="eyebrow">Ranks · 以鸟类命名</span></div>
        <div class="panel"><div class="panel-b">
          <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);margin-bottom:var(--sp-4)">
            据"The Saints ICA File"预告片文档，本机构以<b style="color:var(--fg-2)">鸟类名称</b>作为行动人员的等级代号。
          </p>
          <table class="tbl"><tbody>${rankRows}</tbody></table>
        </div></div>
      </div>

      <div class="block">
        <div class="block-h"><h2>部门主管与协调人</h2><span class="eyebrow">Division Heads & Handlers</span></div>
        <div class="tbl-scroll" style="max-height:none">
          <table class="tbl">
            <thead><tr><th>姓名</th><th>等级</th><th>角色</th><th>备注</th><th>状态</th></tr></thead>
            <tbody>${handlerRows}</tbody>
          </table>
        </div>
        <div class="grid g-2" style="margin-top:var(--sp-5)">
          ${c.divisionHeads.map(d => `
            <div class="panel cornered"><div class="panel-b">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:var(--sp-3)">
                ${rankBadge(d.code)}<h3 style="font-size:var(--fs-md);font-weight:var(--fw-semibold)">${esc(d.name)}</h3>
              </div>
              <span class="mono" style="font-size:var(--fs-xs);color:var(--fg-4);display:block;margin-bottom:var(--sp-3)">${esc(d.nameEn)}</span>
              <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base)">${esc(d.note)}</p>
              ${d.units.length ? `<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:var(--sp-3)">
                ${d.units.map(u => `<span class="tag dim">${esc(u)}</span>`).join('')}</div>` : ''}
              <div style="margin-top:var(--sp-3)">${statusTag(d.status)}</div>
            </div></div>`).join('')}
        </div>
      </div>

      <div class="block">
        <div class="block-h"><h2>直属单位</h2><span class="eyebrow">ICA Units</span></div>
        <div class="tbl-scroll" style="max-height:none">
          <table class="tbl">
            <thead><tr><th>单位</th><th>类别</th><th>英文类别</th><th>状态</th></tr></thead>
            <tbody>${unitRows}</tbody>
          </table>
        </div>
      </div>

      <div class="block">
        <div class="block-h"><h2>代理人名册</h2><span class="eyebrow">Other Agents · ${c.agents.length} 条具名记录</span></div>
        <div class="note info" style="margin-bottom:var(--sp-4)">
          <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg>
          <div>这是成员表"Other Agents"一栏的全部内容。它<b style="color:var(--fg-2)">不是</b>机构代理人总数——机构在任何时期都保有更多未具名的代理人，此处只是档案中被单独列名的那部分。19 条记录里有 13 条除姓名与状态外什么都没有，机构并未为它们登记任何事迹；档案保留这种空缺，不做补写。</div>
        </div>
        <div class="tbl-scroll" style="max-height:none">
          <table class="tbl">
            <thead><tr><th>姓名</th><th>等级</th><th>档案注记</th><th>状态</th></tr></thead>
            <tbody>${agentRows}</tbody>
          </table>
        </div>
        <div class="note" style="margin-top:var(--sp-4)">
          <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg>
          <div>注意"状态"列的两处留白：<span class="mono">卡尔</span>、<span class="mono">奥尔博夫</span>、<span class="mono">格雷</span>、<span class="mono">眼镜蛇</span>、<span class="mono">柯达</span>、<span class="mono">埃奇</span>、<span class="mono">兰伯特</span>、<span class="mono">毒蛇</span>、<span class="mono">史密斯</span> 九人在成员表中没有任何状态标记。同一份名单里"捷豹"被明确标为 <span class="mono">(deceased)</span>、"机构撤离单位"被标为 <span class="mono">(dissolved)</span>——因此无标记意味着档案确实没有记录，而不是可以推断为存活。</div>
        </div>
      </div>

      <div class="block">
        <div class="block-h"><h2>线人与外部资产</h2><span class="eyebrow">Informants & External Assets</span></div>
        <!-- 两张表都用全宽。此前放在 g-2 网格里各占 450px，
             四列被压到「姓名 66px」这种宽度、单行撑成 103px 高——
             档案表格一旦挤压就失去可扫描性，宁可放弃并排。 -->
        <div style="display:grid;gap:var(--sp-4)">
          <div class="panel"><div class="panel-h"><h3>线人</h3><span class="panel-n">${c.informants.length} INFORMANT</span></div>
            <div class="tbl-scroll" style="max-height:none">
              <table class="tbl">
                <thead><tr><th>姓名</th><th>角色</th><th>备注</th><th>状态</th></tr></thead>
                <tbody>${informantRows}</tbody>
              </table>
            </div>
          </div>
          <div class="panel"><div class="panel-h"><h3>外部资产</h3><span class="panel-n">${c.assets.length} ASSETS</span></div>
            <div class="tbl-scroll" style="max-height:none">
              <table class="tbl">
                <thead><tr><th>姓名</th><th>所属</th><th>职能</th><th>状态</th></tr></thead>
                <tbody>${assetRows}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="panel cornered" style="margin-top:var(--sp-5)"><div class="panel-b">
          <div class="panel-h" style="margin:-2px 0 var(--sp-4)"><h3>具名客户</h3><span class="panel-n">${c.clientsNamed.length} NAMED CLIENTS</span></div>
          <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);margin-bottom:var(--sp-4)">
            机构对外是"合法的商业咨询公司"，客户名单因此从来不是秘密的——秘密的是这些人买了什么。以下十三人在档案中以具名客户的身份出现，其中数人后来成为机构自己的目标。
          </p>
          <div class="chips">${clientChips}</div>
        </div></div>

        <div class="panel cornered" style="margin-top:var(--sp-5)"><div class="panel-b">
          <div class="panel-h" style="margin:-2px 0 var(--sp-4)"><h3>组织客户</h3><span class="panel-n">${c.clientOrgs.length} CLIENT ORGANIZATIONS</span></div>
          <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);margin-bottom:var(--sp-4)">
            这份名单解释了机构为何能够同时是"合法的"和"不可承认的"：它的客户里有六国政府机构与一个国际组织，也有黑手党家族与私人企业。名单最末一项是机构自己的董事会——机构曾为自己下过单。
          </p>
          <div class="chips">${orgChips}</div>
        </div></div>

        <div class="panel cornered" style="margin-top:var(--sp-5)"><div class="panel-b">
          <div class="panel-h" style="margin:-2px 0 var(--sp-4)"><h3>业务边界与自我约束</h3><span class="panel-n">OPERATING LIMITS</span></div>
          <div class="note" style="margin-bottom:var(--sp-4)">
            <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg>
            <div>以下五条属于<b style="color:var(--fg-2)">考据推断</b>（原文标注 <span class="mono">${esc(c.compliance.src)}</span>），不是逐字条款：档案原文只给出零散表述，这里把它们整理成条目。机构从未公布过成文的接单规则。</div>
          </div>
          <div class="dl">${complianceRows}</div>
        </div></div>
      </div>

      <div class="block">
        <div class="block-h"><h2>刺杀小组与狙击单位</h2><span class="eyebrow">Hit Squad & The Shadows</span></div>
        <div class="grid g-2">
          <div class="panel"><div class="panel-h"><h3>Hit Squad</h3><span class="panel-n">${c.hitSquad.members.length} MEMBERS</span></div>
            <div class="panel-b">
              <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);margin-bottom:var(--sp-3)">队长：<b style="color:var(--fg-2)">${esc(c.hitSquad.leader)}</b>${term(c.hitSquad.leaderEn)}</p>
              <div style="display:flex;gap:5px;flex-wrap:wrap">${c.hitSquad.members.map(m => `<span class="tag">${esc(m)}</span>`).join('')}</div>
              <div class="note" style="margin-top:var(--sp-4)">
                <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg>
                <div>${esc(c.hitSquad.note)}</div>
              </div>
            </div>
          </div>
          <div class="panel"><div class="panel-h"><h3>The Shadows</h3><span class="panel-n">SNIPER UNIT</span></div>
            <div class="panel-b">
              <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);margin-bottom:var(--sp-3)">以狙击为主的刺杀小组，由协调人 Diana Burnwood 对接。</p>
              <div style="display:flex;gap:5px;flex-wrap:wrap">${c.shadows.map(m => `<span class="tag">${esc(m)}</span>`).join('')}</div>
              <div style="margin-top:var(--sp-4);padding-top:var(--sp-3);border-top:1px solid var(--line)">
                <div class="eyebrow" style="margin-bottom:8px">ICA Data Facility 岗位</div>
                <div style="display:flex;gap:5px;flex-wrap:wrap">${c.dataFacilityRoles.map(r => `<span class="tag dim">${esc(r)}</span>`).join('')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block-h"><h2>已知车辆</h2><span class="eyebrow">Known Vehicles</span></div>
        <div class="panel"><div class="panel-b" style="display:flex;gap:6px;flex-wrap:wrap">
          ${c.vehicles.map(v => `<span class="tag">${esc(v)}</span>`).join('')}
        </div></div>
      </div>

      <div class="block">
        <div class="block-h"><h2>徽记与格言考据</h2><span class="eyebrow">Heraldry & Motto</span></div>
        <div class="grid g-2">
          <div class="panel"><div class="panel-b">
            <h3 style="font-size:var(--fs-md);font-weight:var(--fw-semibold);margin-bottom:var(--sp-3)">徽记来源</h3>
            <ul style="display:grid;gap:9px">
              ${c.logoNotes.map(n => `<li style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);padding-left:14px;position:relative">
                <span style="position:absolute;left:0;color:var(--ica-red)">·</span>${esc(n)}</li>`).join('')}
            </ul>
          </div></div>
          <div class="panel"><div class="panel-b">
            <h3 style="font-size:var(--fs-md);font-weight:var(--fw-semibold);margin-bottom:var(--sp-3)">格言的语法问题</h3>
            <p style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);margin-bottom:var(--sp-3)">
              官方格言"Merces Letifer"在拉丁文语法上是错的：<span class="mono">merces</span> 是阴性名词，
              而 <span class="mono">letifer</span> 是阳性形容词，二者性数不一致。
            </p>
            <div class="dl">
              ${c.mottoNotes.map(m => `
                <div class="dl-row" style="grid-template-columns:120px 1fr">
                  <dt>${esc(m.label)}</dt>
                  <dd><span class="mono" style="color:var(--ica-red-l)">${esc(m.value)}</span>
                    <div style="font-size:var(--fs-sm);color:var(--fg-4);margin-top:3px">${esc(m.note)}</div></dd>
                </div>`).join('')}
            </div>
          </div></div>
        </div>
      </div>
    `;
  }

  /* ======================================================================
     03 代理人
     ====================================================================== */
  let agentFilter = 'ALL';
  let agentQuery = '';

  function renderAgentFilters() {
    const el = document.getElementById('agent-filters');
    if (!el) return;
    const cats = [
      { k: 'ALL',       label: '全部' },
      { k: 'CORE',      label: '核心成员' },
      { k: 'BOARD',     label: '董事会成员' },
      { k: 'HANDLER',   label: '协调人' },
      { k: 'AGENT',     label: '代理人' },
      { k: 'UNIT',      label: '单位成员' },
      { k: 'DECEASED',  label: '已死亡' }
    ];
    el.innerHTML = cats.map(c =>
      `<button class="chip ${agentFilter === c.k ? 'is-on' : ''}" data-af="${c.k}">${c.label}</button>`
    ).join('') + `
      <span class="spacer"></span>
      <div class="search">
        <svg viewBox="0 0 24 24"><use href="#i-search"/></svg>
        <input id="agent-q" placeholder="搜索姓名 / 代号" value="${esc(agentQuery)}">
      </div>`;

    el.querySelectorAll('[data-af]').forEach(b => b.onclick = () => {
      agentFilter = b.dataset.af; renderAgentFilters(); renderAgents();
    });
    const qi = document.getElementById('agent-q');
    if (qi) qi.oninput = () => { agentQuery = qi.value; renderAgents(); };
  }

  function renderAgents() {
    const el = document.getElementById('agents-body');
    if (!el) return;
    let list = (typeof ICA_AGENTS !== 'undefined' ? ICA_AGENTS : []).slice();

    if (agentFilter === 'DECEASED') list = list.filter(a => /deceased/i.test(a.status || ''));
    else if (agentFilter !== 'ALL') list = list.filter(a => (a.cat || '') === agentFilter);

    if (agentQuery.trim()) {
      const q = agentQuery.trim().toLowerCase();
      list = list.filter(a =>
        (a.name + a.nameEn + (a.alias || '') + (a.code || '')).toLowerCase().includes(q));
    }

    if (!list.length) {
      el.innerHTML = `<div class="empty">未找到匹配的档案 — NO RECORDS MATCH</div>`;
      return;
    }

    el.innerHTML = `<div class="dossier-grid">${list.map((a, i) => `
      <article class="dossier" data-agent="${i}" tabindex="0" role="button">
        <div class="dossier-top">
          <div class="dossier-av ${/deceased/i.test(a.status || '') ? 'dead' : ''}">${esc(a.initials || '??')}</div>
          <div style="min-width:0;flex:1">
            <span class="dossier-id">${esc(a.id || '—')}</span>
            <h3>${esc(a.name)}</h3>
            <span class="alias">${esc(a.nameEn)}</span>
          </div>
        </div>
        <div class="dossier-meta">
          ${rankBadge(a.code)}
          ${a.role ? `<span class="tag">${esc(a.role)}</span>` : ''}
          ${a.unit ? `<span class="tag dim">${esc(a.unit)}</span>` : ''}
        </div>
        <p style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-base);min-height:44px">${esc(a.summary || '')}</p>
        <div class="dossier-foot">
          ${statusTag(a.status)}
          <span class="spacer"></span>
          <span>查看档案 →</span>
        </div>
      </article>`).join('')}</div>`;

    el.querySelectorAll('[data-agent]').forEach(card => {
      const open = () => openAgent(list[+card.dataset.agent]);
      card.onclick = open;
      card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } };
    });
  }

  function openAgent(a) {
    if (!a) return;
    const rows = [
      ['档案编号', a.id], ['英文名', a.nameEn], ['别名', a.alias],
      ['等级', a.code], ['角色', a.role], ['所属单位', a.unit],
      ['出生', a.born], ['国籍', a.nation], ['状态', a.status]
    ].filter(r => r[1]);

    document.getElementById('modal-title').textContent = a.name + ' · 档案';
    document.getElementById('modal-body').innerHTML = `
      <div style="display:flex;gap:var(--sp-5);align-items:flex-start;margin-bottom:var(--sp-5);flex-wrap:wrap">
        <div class="dossier-av ${/deceased/i.test(a.status || '') ? 'dead' : ''}" style="width:92px;height:112px;font-size:var(--fs-2xl)">${esc(a.initials || '??')}</div>
        <div style="flex:1;min-width:220px">
          <h3 style="font-size:var(--fs-xl);font-weight:var(--fw-semibold);letter-spacing:-.015em;margin-bottom:3px">${esc(a.name)}</h3>
          <span class="mono" style="font-size:var(--fs-sm);color:var(--fg-4)">${esc(a.nameEn)}</span>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:var(--sp-3)">
            ${rankBadge(a.code)}${statusTag(a.status)}
            ${a.role ? `<span class="tag">${esc(a.role)}</span>` : ''}
          </div>
        </div>
      </div>
      ${a.summary ? `<p style="font-size:var(--fs-md);line-height:var(--lh-loose);color:var(--fg-2);margin-bottom:var(--sp-5)">${esc(a.summary)}</p>` : ''}
      <div class="panel"><div class="panel-h"><h3>档案字段</h3></div><div class="panel-b">
        <dl class="dl">${rows.map(r => `
          <div class="dl-row"><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('')}
        </dl>
      </div></div>
      ${a.detail && a.detail.length ? `
        <div class="panel" style="margin-top:var(--sp-4)"><div class="panel-h"><h3>履历要点</h3></div><div class="panel-b">
          <ul style="display:grid;gap:11px">
            ${a.detail.map(d => `<li style="font-size:var(--fs-base);line-height:var(--lh-base);color:var(--fg-2);padding-left:16px;position:relative">
              <span style="position:absolute;left:0;top:8px;width:5px;height:5px;background:var(--ica-red);border-radius:50%"></span>${esc(d)}</li>`).join('')}
          </ul>
        </div></div>` : ''}
      ${a.quote ? `<div class="quote"><p>"${esc(a.quote)}"</p><cite>— ${esc(a.nameEn)}</cite></div>` : ''}
    `;
    document.getElementById('modal-foot').innerHTML = `
      <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">
        来源：Hitman Fandom（经 Wayback Machine 存档）· 访问等级 RESTRICTED
      </span>
      <button class="btn btn-ghost btn-mono" data-close style="margin-left:auto">关闭</button>`;
    ICA_APP.openModal();
  }

  /* ======================================================================
     04 合同
     ====================================================================== */
  let contractFilter = 'ALL';

  const RISK_CLS = { LOW: 'ok', MODERATE: 'info', HIGH: 'warn', CRITICAL: 'red' };

  function renderContractFilters() {
    const el = document.getElementById('contract-filters');
    if (!el) return;
    const list = (typeof ICA_CONTRACTS !== 'undefined' ? ICA_CONTRACTS : []);
    const cats = ['ALL'].concat([...new Set(list.map(c => c.era).filter(Boolean))]);
    el.innerHTML = cats.map(k =>
      `<button class="chip ${contractFilter === k ? 'is-on' : ''}" data-cf="${esc(k)}">${k === 'ALL' ? '全部记录' : esc(k)}</button>`
    ).join('') + `<span class="spacer"></span>
      <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">${list.length} RECORDS</span>`;

    el.querySelectorAll('[data-cf]').forEach(b => b.onclick = () => {
      contractFilter = b.dataset.cf; renderContractFilters(); renderContracts();
    });
  }

  function renderContracts() {
    const el = document.getElementById('contracts-body');
    if (!el) return;
    let list = (typeof ICA_CONTRACTS !== 'undefined' ? ICA_CONTRACTS : []);
    if (contractFilter !== 'ALL') list = list.filter(c => c.era === contractFilter);

    if (!list.length) { el.innerHTML = `<div class="empty">无合同记录 — NO CONTRACTS</div>`; return; }

    el.innerHTML = `<div class="grid g-2" style="gap:var(--sp-4)">${list.map(c => `
      <article class="contract">
        <div class="contract-stripe"></div>
        <div class="contract-h">
          <div style="flex:1;min-width:0">
            <span class="contract-no">${esc(c.no || '—')}</span>
            <h3>${esc(c.title)}</h3>
            <span class="mono" style="font-size:var(--fs-xs);color:var(--fg-4)">${esc(c.titleEn || '')}</span>
          </div>
          <div style="text-align:right;flex:0 0 auto">
            <span class="tag ${RISK_CLS[c.risk] || 'dim'}">${esc(c.risk || '—')}</span>
          </div>
        </div>
        <div class="contract-b">
          <div class="contract-row"><dt>目标</dt><dd>${esc(c.target)}</dd></div>
          <div class="contract-row"><dt>地点</dt><dd>${esc(c.location)}</dd></div>
          <div class="contract-row"><dt>年份</dt><dd class="mono">${esc(c.year || '—')}</dd></div>
          ${c.method ? `<div class="contract-row"><dt>方式</dt><dd>${esc(c.method)}</dd></div>` : ''}
          <div class="contract-row"><dt>执行资产</dt><dd>${esc(c.asset || 'AGENT 47')}</dd></div>
          ${c.fee ? `<div class="contract-row"><dt>结算</dt><dd class="contract-fee">${esc(c.fee)}</dd></div>` : ''}
          ${c.note ? `<p style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-base);padding-top:var(--sp-2);border-top:1px solid var(--line)">${esc(c.note)}</p>` : ''}
        </div>
        <div class="contract-foot">
          ${statusTag(c.status || 'COMPLETED')}
          <span class="spacer" style="margin-left:auto"></span>
          <span>${esc(c.era || '')}</span>
        </div>
      </article>`).join('')}</div>`;
  }

  /* ---- 合同生成器 ---- */
  function buildContract() {
    const g = id => (document.getElementById(id) || {}).value || '';
    const name = g('cb-name').trim() || '（未指定标的）';
    const city = g('cb-city').trim() || '（未指定地点）';
    const type = g('cb-type').split('·')[0].trim();
    const risk = g('cb-risk').split('·')[0].trim();
    const win  = g('cb-window').trim() || '72 小时';
    const asset = g('cb-asset').split('·')[0].trim();
    const notes = g('cb-notes').trim();

    const seq = String(Math.floor(Math.random() * 900) + 100);
    const year = new Date().getFullYear();
    const no = `ICA-${year}-${seq}`;
    const riskFee = { LOW: 50000, MODERATE: 150000, HIGH: 400000, CRITICAL: 800000 }[risk] || 150000;
    const fee = riskFee.toLocaleString('en-US');
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');

    const text =
`================================================================
  INTERNATIONAL CONTRACT AGENCY
  Merces Letifer · 机密合同简报
================================================================
  合同编号    ${no}
  生成时间    ${year}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())} UTC
  密级        TOP SECRET
  委托类型    ${type}
  风险评级    ${risk}
================================================================

  标的信息
  ----------------------------------------------------------
  姓名        ${name}
  位置        ${city}
  时间窗口    ${win}

  执行方案
  ----------------------------------------------------------
  指派资产    ${asset}
  建议方式    待情报部门完成目标档案后确定
  撤离路线    由协调人另行安排

  结算
  ----------------------------------------------------------
  预估金额    USD ${fee}
  支付方式    加密货币结算 / 交付验收后清算
  情报简报    USD 1,500 / 份（可选，另行计费）

${notes ? `  委托方补充要求
  ----------------------------------------------------------
${notes.split('\n').map(l => '  ' + l).join('\n')}

` : ''}  标准条款
  ----------------------------------------------------------
  1. 本机构政治中立、道德务实，仅在判定为"不利于生意"时
     拒绝委托。
  2. 委托不得出于个人利益接受。
  3. 协调人有权遵循自身职业准则。
  4. 在 ICA，职业性的超然是代理人与暴徒之间的区别。
  5. 本文件不存在。你在读完之后也应忘记它。

================================================================
  此简报为虚构作品内容，与 IO Interactive 无关。
================================================================`;

    const out = document.getElementById('cb-out');
    out.textContent = text;
    const dl = document.getElementById('cb-dl');
    dl.disabled = false;
    dl.dataset.text = text;
    dl.dataset.name = no;
    ICA_APP.log('sys', `合同 ${no} 已生成 — 标的：${name}`);
  }

  /* ======================================================================
     05 地点与地图
     ====================================================================== */
  let locFilter = 'ALL';

  /* 地图视图状态提升到模块级：切视图重渲染后仍保留缩放/平移位置，
     拖拽监听器也只安装一次，避免在 window 上反复累积。 */
  const MAP_W = 2000, MAP_H = 1000;
  const mapView = { x: 0, y: 0, w: MAP_W, h: MAP_H };
  let mapPanBound = false;
  let mapDragging = false, mapDragMoved = false, mapDraggedRecently = false;
  let mapLastX = 0, mapLastY = 0, mapDownX = 0, mapDownY = 0;

  function renderMap() {
    const svg = document.getElementById('world-map');
    if (!svg) return;
    const list = (typeof ICA_LOCATIONS !== 'undefined' ? ICA_LOCATIONS : []);

    /* ------------------------------------------------------------------
       等距圆柱投影，内部坐标空间 2000 x 1000（2:1，与 projection 一致）。
       底面陆地轮廓来自 Natural Earth 110m（tools/gen-land.mjs 生成），
       不再使用手绘多边形。
       ------------------------------------------------------------------ */
    const W = 2000, H = 1000;
    const px = lon => (lon + 180) / 360 * W;
    const py = lat => (90 - lat) / 180 * H;

    const land = (typeof ICA_LAND !== 'undefined' ? ICA_LAND : []);
    const lakes = (typeof ICA_LAKES !== 'undefined' ? ICA_LAKES : []);
    const grat = (typeof ICA_GRAT !== 'undefined' ? ICA_GRAT : []);
    const labels = (typeof ICA_LABELS !== 'undefined' ? ICA_LABELS : []);

    /* 只有带有效坐标且未标记 mapHidden 的条目才打点 */
    const pins = list
      .map((l, i) => ({ l, i }))
      .filter(o => typeof o.l.lat === 'number' && typeof o.l.lon === 'number' && !o.l.mapHidden);

    /* 标注分层：大洲 / 洋 在下，海与海湾在上，避免被陆地压住 */
    const bigLabels = labels.filter(l => l.kind === 'cont' || l.kind === 'ocean');
    const seaLabels = labels.filter(l => l.kind === 'sea' || l.kind === 'gulf');

    /* 经线每隔 60° 在顶部标度数，纬线每隔 30° 在左侧标度数 */
    const lonTicks = [];
    for (let lon = -180; lon <= 180; lon += 60) {
      const x = px(lon);
      lonTicks.push(`<text class="map-tick" x="${x.toFixed(1)}" y="11" text-anchor="middle">${lon === 0 ? '0°' : Math.abs(lon) + '°' + (lon < 0 ? 'W' : 'E')}</text>`);
    }
    const latTicks = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = py(lat);
      latTicks.push(`<text class="map-tick" x="4" y="${(y + 3).toFixed(1)}">${lat === 0 ? '0°' : Math.abs(lat) + '°' + (lat < 0 ? 'S' : 'N')}</text>`);
    }

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = `
      <defs>
        <filter id="mapglow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="oceangrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0b1016"/>
          <stop offset="50%" stop-color="#080c11"/>
          <stop offset="100%" stop-color="#0b1016"/>
        </linearGradient>
        <radialGradient id="maplight" cx="46%" cy="38%" r="72%">
          <stop offset="0%" stop-color="rgba(74,127,181,.10)"/>
          <stop offset="100%" stop-color="rgba(74,127,181,0)"/>
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="${W}" height="${H}" fill="url(#oceangrad)"/>
      <rect x="0" y="0" width="${W}" height="${H}" fill="url(#maplight)"/>

      <g class="map-graticule">
        ${grat.map(g => `<path d="${g.d}" class="${g.prime ? 'is-prime' : g.major ? 'is-major' : ''}"/>`).join('')}
      </g>

      <g class="map-landmass">
        ${land.map(d => `<path d="${d}"/>`).join('')}
      </g>

      <g class="map-water">
        ${lakes.map(d => `<path d="${d}"/>`).join('')}
      </g>

      <g class="map-labels">
        ${bigLabels.map(l => `<text class="lb-${l.kind}" x="${l.x}" y="${l.y}" text-anchor="middle" style="font-size:${(l.size * 2.9).toFixed(1)}px">${esc(l.t)}</text>`).join('')}
      </g>

      <g class="map-labels">
        ${seaLabels.map(l => `<text class="lb-${l.kind}" x="${l.x}" y="${l.y}" text-anchor="middle" style="font-size:${(l.size * 2.9).toFixed(1)}px">${esc(l.t)}</text>`).join('')}
      </g>

      <g class="map-ticks">
        ${lonTicks.join('')}
        ${latTicks.join('')}
      </g>

      <g class="map-pins" filter="url(#mapglow)">
        ${pins.map(o => `
          <g class="map-pin${o.l.kind === 'facility' ? ' is-facility' : ''}" data-loc="${o.i}" transform="translate(${px(o.l.lon).toFixed(1)},${py(o.l.lat).toFixed(1)})">
            <circle class="ring" r="9"/>
            <circle class="hit" r="26"/>
            <circle class="pt" r="5"/>
            <text y="-19" text-anchor="middle">${esc(o.l.short || o.l.nameEn || '')}</text>
          </g>`).join('')}
      </g>`;

    const tip = document.getElementById('map-tip');
    const wrap = document.getElementById('map-wrap');

    /* ------------------------------------------------------------------
       标签避让：巴黎/达特穆尔、重庆/设施、罗马尼亚三点这类密集区域，
       标签会互相压盖。逐个尝试若干候选位置，选第一个不冲突的。
       ------------------------------------------------------------------ */
    (function placeLabels() {
      const nodes = [...svg.querySelectorAll('.map-pin text')];
      if (!nodes.length) return;
      const FONT = 20;
      const wOf = s => Math.max(1, s.length) * FONT * 0.64;
      const placed = [];

      /* 机构设施优先占位，其余按纬度从北到南，结果稳定 */
      const items = nodes.map(el => {
        const g = el.parentElement;
        const m = g.getAttribute('transform').match(/translate\(([\d.]+),([\d.]+)\)/);
        const x = +m[1], y = +m[2];
        const isFac = g.classList.contains('is-facility');
        return { el, x, y, isFac, txt: el.textContent };
      }).sort((a, b) => (b.isFac - a.isFac) || (a.y - b.y) || (a.x - b.x));

      const fits = r => !placed.some(p =>
        r.l < p.r && r.r > p.l && r.t < p.b && r.b > p.t);

      items.forEach(it => {
        const w = wOf(it.txt), h = FONT + 3;
        /* 候选顺序：上、更上、下、更下、右上、右下、左上、左下 */
        const cands = [
          { dy: -26, anchor: 'middle', dx: 0 },
          { dy: -50, anchor: 'middle', dx: 0 },
          { dy: 40, anchor: 'middle', dx: 0 },
          { dy: 64, anchor: 'middle', dx: 0 },
          { dy: -26, anchor: 'start', dx: 13 },
          { dy: 40, anchor: 'start', dx: 13 },
          { dy: -26, anchor: 'end', dx: -13 },
          { dy: 40, anchor: 'end', dx: -13 }
        ];
        let chosen = null, first = null;
        for (const c of cands) {
          const cx = it.x + c.dx;
          const left = c.anchor === 'middle' ? cx - w / 2 : c.anchor === 'start' ? cx : cx - w;
          const r = { l: left, r: left + w, t: it.y + c.dy - h, b: it.y + c.dy + 4 };
          const entry = { ...c, rect: r };
          if (!first) first = entry;
          /* 不许跑出图幅 */
          if (r.l < 8 || r.r > 1992 || r.t < 8 || r.b > 992) continue;
          if (fits(r)) { chosen = entry; break; }
        }
        if (!chosen) chosen = first;
        it.el.setAttribute('y', chosen.dy);
        it.el.setAttribute('x', chosen.dx);
        it.el.setAttribute('text-anchor', chosen.anchor);
        placed.push(chosen.rect);
      });
    })();

    /* 图例 */
    const legend = document.getElementById('map-legend');
    if (legend) {
      const fac = pins.filter(o => o.l.kind === 'facility').length;
      legend.innerHTML = `
        <span class="mono"><i class="lg-dot act"></i>行动地点 ${pins.length - fac}</span>
        <span class="mono"><i class="lg-dot fac"></i>机构设施 ${fac}</span>
        <span class="mono" style="color:var(--fg-4)">共 ${list.length} 条在册记录</span>`;
    }

    svg.querySelectorAll('[data-loc]').forEach(pin => {
      const l = list[+pin.dataset.loc];
      pin.addEventListener('mouseenter', () => {
        if (!tip || !wrap) return;
        const b = pin.getBoundingClientRect(), wb = wrap.getBoundingClientRect();
        tip.innerHTML = `<b>${esc(l.name)}</b><span>${esc(l.country || '')} · ${esc(l.year || '')}</span>`;
        tip.style.left = (b.left - wb.left + b.width / 2) + 'px';
        tip.style.top = (b.top - wb.top) + 'px';
        tip.classList.add('show');
        svg.querySelectorAll('.map-pin').forEach(p => p.classList.remove('is-active'));
        pin.classList.add('is-active');
      });
      pin.addEventListener('mouseleave', () => {
        if (tip) tip.classList.remove('show');
        pin.classList.remove('is-active');
      });
      pin.addEventListener('click', e => {
        /* 只有真正发生过拖动才吞掉这次点击 */
        if (mapDraggedRecently) return;
        e.stopPropagation();
        openLocation(l);
      });
    });

    /* ------------------------------------------------------------------
       缩放与平移：直接改 viewBox，标记随容器一起缩放，
       让纽约/罗马尼亚一类密集区域可以放大到看得清。
       视图状态存在模块级 mapView 里，切走再回来不会丢。
       ------------------------------------------------------------------ */
    const FULL = { x: 0, y: 0, w: W, h: H };
    const vp = mapView;
    const zoomN = document.getElementById('map-zoom-n');

    function applyView() {
      svg.setAttribute('viewBox', `${vp.x.toFixed(1)} ${vp.y.toFixed(1)} ${vp.w.toFixed(1)} ${vp.h.toFixed(1)}`);
      if (zoomN) zoomN.textContent = (FULL.w / vp.w).toFixed(1) + '×';
    }

    /** 以视口内某点为锚点缩放，使该点在屏幕上保持不动 */
    function zoomAt(factor, cx, cy) {
      const nw = Math.min(FULL.w, Math.max(FULL.w / 20, vp.w / factor));
      const k = nw / vp.w;
      vp.x = cx - (cx - vp.x) * k;
      vp.y = cy - (cy - vp.y) * k;
      vp.w = nw; vp.h = nw * H / W;
      clampView();
      applyView();
      if (tip) tip.classList.remove('show');
    }

    function clampView() {
      vp.w = Math.min(FULL.w, Math.max(FULL.w / 20, vp.w));
      vp.h = vp.w * H / W;
      vp.x = Math.max(FULL.x, Math.min(FULL.x + FULL.w - vp.w, vp.x));
      vp.y = Math.max(FULL.y, Math.min(FULL.y + FULL.h - vp.h, vp.y));
    }

    /** 把鼠标事件换算到 SVG 坐标空间 */
    function toMap(clientX, clientY) {
      const r = svg.getBoundingClientRect();
      return {
        x: vp.x + (clientX - r.left) / r.width * vp.w,
        y: vp.y + (clientY - r.top) / r.height * vp.h
      };
    }

    svg.addEventListener('wheel', e => {
      e.preventDefault();
      const p = toMap(e.clientX, e.clientY);
      zoomAt(e.deltaY < 0 ? 1.22 : 1 / 1.22, p.x, p.y);
    }, { passive: false });

    svg.addEventListener('dblclick', e => {
      const p = toMap(e.clientX, e.clientY);
      zoomAt(1.9, p.x, p.y);
    });

    svg.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      mapDragging = true; mapDragMoved = false;
      mapLastX = mapDownX = e.clientX; mapLastY = mapDownY = e.clientY;
      svg.classList.add('is-panning');
    });

    /* window 上的监听器只装一次；它们总是操作当前这张 svg */
    if (!mapPanBound) {
      mapPanBound = true;
      const cur = () => document.getElementById('world-map');
      window.addEventListener('pointermove', e => {
        const el = cur();
        if (!mapDragging || !el) return;
        if (Math.abs(e.clientX - mapDownX) + Math.abs(e.clientY - mapDownY) > 4) mapDragMoved = true;
        if (!mapDragMoved) return;
        const r = el.getBoundingClientRect();
        mapView.x -= (e.clientX - mapLastX) * (mapView.w / r.width);
        mapView.y -= (e.clientY - mapLastY) * (mapView.h / r.height);
        mapLastX = e.clientX; mapLastY = e.clientY;
        clampMapView();
        el.setAttribute('viewBox', `${mapView.x.toFixed(1)} ${mapView.y.toFixed(1)} ${mapView.w.toFixed(1)} ${mapView.h.toFixed(1)}`);
        const zn = document.getElementById('map-zoom-n');
        if (zn) zn.textContent = (MAP_W / mapView.w).toFixed(1) + '×';
        const tp = document.getElementById('map-tip');
        if (tp) tp.classList.remove('show');
      }, { passive: true });
      window.addEventListener('pointerup', () => {
        if (!mapDragging) return;
        mapDragging = false;
        /* 本次手势若真的拖动过，标记这次点击应被吞掉；延迟复位以覆盖随后的 click */
        if (mapDragMoved) {
          mapDraggedRecently = true;
          setTimeout(() => { mapDraggedRecently = false; }, 0);
        }
        const el = cur();
        if (el) el.classList.remove('is-panning');
      });
      window.addEventListener('pointercancel', () => {
        mapDragging = false; mapDragMoved = false; mapDraggedRecently = false;
        const el = cur();
        if (el) el.classList.remove('is-panning');
      });
    }

    const ctl = document.getElementById('map-ctl');
    if (ctl) {
      ctl.querySelectorAll('[data-mapzoom]').forEach(btn => {
        btn.onclick = e => {
          e.stopPropagation();
          const a = btn.dataset.mapzoom;
          if (a === 'reset') {
            vp.x = FULL.x; vp.y = FULL.y; vp.w = FULL.w; vp.h = FULL.h;
            applyView();
            if (tip) tip.classList.remove('show');
            return;
          }
          zoomAt(a === 'in' ? 1.45 : 1 / 1.45, vp.x + vp.w / 2, vp.y + vp.h / 2);
        };
      });
    }

    applyView();
  }

  /** 与 renderMap 内的 clampView 等价，供 window 级拖拽处理器使用 */
  function clampMapView() {
    const minW = MAP_W / 20;
    mapView.w = Math.min(MAP_W, Math.max(minW, mapView.w));
    mapView.h = mapView.w * MAP_H / MAP_W;
    mapView.x = Math.max(0, Math.min(MAP_W - mapView.w, mapView.x));
    mapView.y = Math.max(0, Math.min(MAP_H - mapView.h, mapView.y));
  }

  function renderLocFilters() {
    const el = document.getElementById('loc-filters');
    if (!el) return;
    const list = (typeof ICA_LOCATIONS !== 'undefined' ? ICA_LOCATIONS : []);
    const cats = ['ALL'].concat([...new Set(list.map(l => l.era).filter(Boolean))]);
    el.innerHTML = cats.map(k =>
      `<button class="chip ${locFilter === k ? 'is-on' : ''}" data-lf="${esc(k)}">${k === 'ALL' ? '全部地点' : esc(k)}</button>`
    ).join('') + `<span class="spacer"></span>
      <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">${list.length} SITES</span>`;
    el.querySelectorAll('[data-lf]').forEach(b => b.onclick = () => {
      locFilter = b.dataset.lf; renderLocFilters(); renderLocations();
    });
  }

  function renderLocations() {
    const el = document.getElementById('locations-body');
    if (!el) return;
    let list = (typeof ICA_LOCATIONS !== 'undefined' ? ICA_LOCATIONS : []);
    if (locFilter !== 'ALL') list = list.filter(l => l.era === locFilter);

    el.innerHTML = `<div class="grid g-3" style="gap:var(--sp-4)">${list.map((l, i) => `
      <article class="panel" style="cursor:pointer" data-loc-card="${i}">
        <div class="panel-b">
          <div style="display:flex;align-items:flex-start;gap:var(--sp-3);margin-bottom:var(--sp-3)">
            <div style="flex:1;min-width:0">
              <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);letter-spacing:.1em;display:block;margin-bottom:3px">
                ${esc(l.country || '—')}${l.mapHidden ? '' : ' · ' + l.lat.toFixed(1) + '°, ' + l.lon.toFixed(1) + '°'}
              </span>
              <h3 style="font-size:var(--fs-md);font-weight:var(--fw-semibold);letter-spacing:-.008em">${esc(l.name)}</h3>
              <span class="mono" style="font-size:var(--fs-xs);color:var(--fg-4)">${esc(l.nameEn || '')}</span>
            </div>
            <span class="tag ${l.kind === 'facility' ? 'info' : 'dim'}">${esc(l.era || '')}</span>
          </div>
          <p style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-base)">${esc((l.desc || '').slice(0, 96))}${(l.desc || '').length > 96 ? '…' : ''}</p>
          <div style="display:flex;align-items:center;gap:var(--sp-2);margin-top:var(--sp-3);padding-top:var(--sp-3);border-top:1px solid var(--line)">
            <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">${esc(l.mission || '')}</span>
            <span class="mono" style="font-size:var(--fs-2xs);color:var(--ica-red-l);margin-left:auto">查看 →</span>
          </div>
        </div>
      </article>`).join('')}</div>`;

    el.querySelectorAll('[data-loc-card]').forEach(c => {
      c.onclick = () => openLocation(list[+c.dataset.locCard]);
    });
  }

  /* 伪装系统通用规则。
     注意：这是全任务现场通用的机制，不是任何单个地图的伪装清单——
     来源存档中不存在 "List of disguises" 页面（见 data-locations.js 头部注释）。
     因此本节末尾明确标注该空白，不逐地点编造伪装名称。 */
  function renderDisguiseDoctrine() {
    const el = document.getElementById('disguise-doctrine');
    if (!el) return;
    const d = (typeof ICA_DISGUISE_DOCTRINE !== 'undefined' ? ICA_DISGUISE_DOCTRINE : null);
    if (!d) { el.innerHTML = ''; return; }

    el.innerHTML = `
      <article class="panel cornered">
        <div class="panel-b">
          ${secH('伪装系统', 'Disguise Doctrine', d.rules ? d.rules.length + ' 条通用规则' : '')}
          <p class="blk-p">${esc(d.intro || '')}</p>
          ${rules(d.rules)}
          ${d.blank ? `
            <div style="margin-top:var(--sp-5);padding:var(--sp-4);border:1px dashed var(--line-2);border-radius:3px;background:var(--panel-2)">
              <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-2)">
                <span class="tag dim">未载明</span>
                <b style="font-size:var(--fs-base);color:var(--fg-2)">${esc(d.blank.title)}</b>
              </div>
              <p style="font-size:var(--fs-sm);color:var(--fg-3);line-height:var(--lh-base);margin:0">${esc(d.blank.body)}</p>
            </div>` : ''}
        </div>
      </article>`;
  }

  function openLocation(l) {
    if (!l) return;
    document.getElementById('modal-title').textContent = l.name + ' · 行动档案';
    document.getElementById('modal-body').innerHTML = `
      <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;margin-bottom:var(--sp-5)">
        ${[['国家/地区', l.country],
           ['坐标', (typeof l.lat === 'number' && typeof l.lon === 'number') ? l.lat.toFixed(4) + ', ' + l.lon.toFixed(4) : ''],
           ['登场作品', l.era], ['任务名', l.mission]].filter(r => r[1]).map(r => `
          <div style="border:1px solid var(--line);border-radius:var(--radius-s);padding:9px var(--sp-4);min-width:132px">
            <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);letter-spacing:.11em;text-transform:uppercase;display:block">${esc(r[0])}</span>
            <span style="font-size:var(--fs-base);color:var(--fg);display:block;margin-top:2px">${esc(r[1])}</span>
          </div>`).join('')}
      </div>
      <p style="font-size:var(--fs-md);line-height:var(--lh-loose);color:var(--fg-2)">${esc(l.desc || '')}</p>
      ${l.targets && l.targets.length ? `
        <div class="panel" style="margin-top:var(--sp-5)"><div class="panel-h"><h3>在册目标</h3><span class="panel-n">${l.targets.length}</span></div>
        <div class="panel-b"><div style="display:flex;gap:5px;flex-wrap:wrap">
          ${l.targets.map(t => `<span class="tag red">${esc(t)}</span>`).join('')}
        </div></div></div>` : ''}
      ${l.note ? `<div class="note" style="margin-top:var(--sp-5)"><svg viewBox="0 0 24 24"><use href="#i-alert"/></svg><div>${esc(l.note)}</div></div>` : ''}
    `;
    document.getElementById('modal-foot').innerHTML = `
      <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">坐标为依据真实地理位置的估算值</span>
      <button class="btn btn-ghost btn-mono" data-close style="margin-left:auto">关闭</button>`;
    ICA_APP.openModal();
  }

  /* ======================================================================
     06 装备库
     ====================================================================== */
  let gearFilter = 'ALL';

  function renderGearFilters() {
    const el = document.getElementById('gear-filters');
    if (!el) return;
    const list = (typeof ICA_GEAR !== 'undefined' ? ICA_GEAR : []);
    const cats = ['ALL'].concat([...new Set(list.map(g => g.cat).filter(Boolean))]);
    el.innerHTML = cats.map(k =>
      `<button class="chip ${gearFilter === k ? 'is-on' : ''}" data-gf="${esc(k)}">${k === 'ALL' ? '全部装备' : esc(k)}</button>`
    ).join('') + `<span class="spacer"></span>
      <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">${list.length} ITEMS</span>`;
    el.querySelectorAll('[data-gf]').forEach(b => b.onclick = () => {
      gearFilter = b.dataset.gf; renderGearFilters(); renderGear();
    });
  }

  const GEAR_ICON = {
    '手枪': 'i-pistol', '近战': 'i-wire', '爆炸物': 'i-bomb',
    '毒药': 'i-vial', '伪装': 'i-mask', '工具': 'i-case', '狙击': 'i-target', '步枪': 'i-pistol'
  };

  function renderGear() {
    const el = document.getElementById('gear-body');
    if (!el) return;
    let list = (typeof ICA_GEAR !== 'undefined' ? ICA_GEAR : []);
    if (gearFilter !== 'ALL') list = list.filter(g => g.cat === gearFilter);

    el.innerHTML = `<div class="gear-grid">${list.map((g, i) => `
      <article class="gear">
        <div class="gear-h">
          <div class="gear-ico"><svg viewBox="0 0 24 24"><use href="#${GEAR_ICON[g.cat] || 'i-case'}"/></svg></div>
          <div style="min-width:0;flex:1">
            <h3>${esc(g.name)}</h3>
            <span class="en">${esc(g.nameEn || '')}</span>
          </div>
        </div>
        <div style="display:flex;gap:5px;flex-wrap:wrap">
          <span class="tag">${esc(g.cat)}</span>
          ${g.ica ? `<span class="tag red">ICA 制式</span>` : ''}
        </div>
        <p class="desc">${esc(g.desc || '')}</p>
        ${g.spec && g.spec.length ? `<dl class="gear-spec">
          ${g.spec.map(s => `<div><dt>${esc(s[0])}</dt><dd>${esc(s[1])}</dd></div>`).join('')}
        </dl>` : ''}
        ${g.first ? `<div style="margin-top:var(--sp-3);padding-top:var(--sp-3);border-top:1px solid var(--line)">
          <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">首登场：${esc(g.first)}</span></div>` : ''}
      </article>`).join('')}</div>
      ${typeof ICA_ICONIC_GEAR !== 'undefined' && ICA_ICONIC_GEAR.length ? `
        <div class="sec-blk" style="margin-top:var(--sp-8)">
          ${secH('标志性装备', 'Signature Gear', `${ICA_ICONIC_GEAR.length} 件`)}
          <p class="blk-p">上面按「库里有什么」陈列；这三件不是最强的，但它们是系列的符号——纤维线与银弹枪是 47 的两件签名物，公文包则是他随身携带身份的方式。</p>
          <div class="chapter-list">
            ${ICA_ICONIC_GEAR.map((it, idx) => `
              <details class="chapter"${idx === 0 ? ' open' : ''}>
                <summary>
                  <span class="chapter-n">${esc(it.kind)}</span>
                  <span class="chapter-t">${esc(it.name)}</span>
                  <span class="chapter-en">${esc(it.nameEn)}</span>
                </summary>
                <div class="chapter-b">
                  <p class="blk-p" style="color:var(--fg-2)">${esc(it.tagline)}</p>
                  <p class="blk-p">${esc(it.desc)}</p>
                  ${it.sections.map(s => `
                    <div class="sub-sec">
                      <div class="sub-h">${esc(s.title)} <span class="eyebrow">${esc(s.titleEn)}</span></div>
                      ${s.paras.map(x => `<p class="blk-p">${esc(x)}</p>`).join('')}
                    </div>`).join('')}
                  ${it.trivia && it.trivia.length ? `
                    <div class="sub-sec">
                      <div class="sub-h">轶事 <span class="eyebrow">Trivia</span></div>
                      ${rules(it.trivia)}
                    </div>` : ''}
                </div>
              </details>`).join('')}
          </div>
        </div>` : ''}`;
  }

  /* ======================================================================
     表格数值列对齐
     ----------------------------------------------------------------------
     档案表格里数字列必须右对齐并等宽，同一列的个位才能对齐——
     这是账本与统计表的基本读法要求，左对齐的金额列无法快速比较。
     判断方式是逐列扫描：去掉千分位、货币符号、百分号与常见单位后
     仍是纯数字，才算数值单元格。只有整列有 ≥3 个可判定单元格、
     且 ≥60% 为数值时才整列生效，避免把"1999 年"或"47 号"这类
     混排文本误判成数值列。含嵌套元素（状态徽章、等级标签）的列直接跳过。
     ====================================================================== */
  function markNumericCells(root) {
    if (!root) return;
    const NUM = /^[￥$€£]?\s*-?[\d,]+(\.\d+)?\s*(%|USD|EUR|GBP|元|美元|万|亿)?$/;
    root.querySelectorAll('table.tbl').forEach(table => {
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      if (!rows.length) return;
      const colCount = Math.max(...rows.map(r => r.children.length));
      for (let c = 0; c < colCount; c++) {
        let num = 0, total = 0;
        for (const r of rows) {
          const cell = r.children[c];
          if (!cell || cell.children.length) continue;  // 含嵌套元素的列不参与判定
          const t = (cell.textContent || '').trim();
          if (!t) continue;
          total++;
          if (NUM.test(t)) num++;
        }
        if (total >= 3 && num / total >= 0.6) {
          for (const r of rows) {
            const cell = r.children[c];
            if (cell) cell.classList.add('is-num');
          }
        }
      }
    });
  }

  /* ======================================================================
     07 大事记
     ====================================================================== */
  function renderTimeline() {
    const el = document.getElementById('timeline-body');
    if (!el) return;
    const list = (typeof ICA_TIMELINE !== 'undefined' ? ICA_TIMELINE : []);
    el.innerHTML = `<div class="tl">${list.map(t => `
      <div class="tl-item ${t.key ? 'key' : ''}">
        <span class="tl-year">${esc(t.year)}${t.date ? `<i class="tl-date">${esc(t.date)}</i>` : ''}</span>
        <h4>${esc(t.title)}</h4>
        <p>${esc(t.text)}</p>
        ${t.src ? `<span class="tl-src">来源：${esc(t.src)}</span>` : ''}
      </div>`).join('')}</div>`;
  }

  function renderTitles() {
    const el = document.getElementById('titles-body');
    if (!el) return;
    const list = (typeof ICA_TITLES !== 'undefined' ? ICA_TITLES : []);
    const facts = (typeof ICA_SERIES_FACTS !== 'undefined' ? ICA_SERIES_FACTS : []);

    const groups = [
      { kind: 'main',  label: '主要作品',   en: 'Main Series' },
      { kind: 'pack',  label: '合集与重制', en: 'Collections & Remasters' },
      { kind: 'spin',  label: '支线游戏',   en: 'Spin-offs' },
      { kind: 'media', label: '其他媒体',   en: 'Other Media' }
    ];

    const detailBlock = t => `
      ${t.note ? `<p class="blk-p">${esc(t.note)}</p>` : ''}
      ${t.fact ? `<p class="blk-warn">${esc(t.fact)}</p>` : ''}
      ${t.plot && t.plot.length ? `<div class="sub-sec"><div class="sub-h">剧情 <span class="eyebrow">Plot</span></div>
        ${t.plot.map(x => `<p class="blk-p">${esc(x)}</p>`).join('')}</div>` : ''}
      ${t.features && t.features.length ? `<div class="sub-sec"><div class="sub-h">关键机制 <span class="eyebrow">Features</span></div>
        ${rules(t.features)}</div>` : ''}
      ${t.places && t.places.length ? `<div class="sub-sec"><div class="sub-h">主要地点 <span class="eyebrow">Locations</span></div>
        <div class="chips">${t.places.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div></div>` : ''}
      ${t.targets ? `<div class="sub-sec"><div class="sub-h">主要目标 <span class="eyebrow">Targets</span></div>
        <p class="blk-p">${esc(t.targets)}</p></div>` : ''}`;

    el.innerHTML = `
      ${facts.length ? `<div class="sec-blk">
        ${secH('系列总览', 'Series Overview', `${facts.length} 条`)}
        <div class="panel"><div class="panel-b">
          <dl class="kv">${facts.map(f => `<dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd>`).join('')}</dl>
        </div></div>
      </div>` : ''}

      ${groups.map(g => {
        const items = list.filter(t => t.kind === g.kind);
        if (!items.length) return '';
        return `<div class="sec-blk">
          ${secH(g.label, g.en, `${items.length} 部`)}
          <div class="chapter-list">
            ${items.map(t => {
              const rich = t.plot || t.features || t.places || t.targets;
              return rich ? `
                <details class="chapter">
                  <summary>
                    <span class="chapter-t">${esc(t.name)}</span>
                    <span class="chapter-en">${esc(t.nameEn || '')}</span>
                    <span class="mono" style="font-size:var(--fs-xs);color:var(--fg-4);margin-left:auto;padding-right:var(--sp-2)">${esc(t.year || '')}</span>
                  </summary>
                  <div class="chapter-b">${detailBlock(t)}</div>
                </details>` : `
                <div class="chapter" style="padding:0">
                  <div style="display:flex;align-items:baseline;gap:var(--sp-3);padding:11px var(--sp-4);flex-wrap:wrap">
                    <span class="chapter-t">${esc(t.name)}</span>
                    <span class="chapter-en">${esc(t.nameEn || '')}</span>
                    <span class="mono" style="font-size:var(--fs-xs);color:var(--fg-4);margin-left:auto">${esc(t.year || '')}</span>
                  </div>
                  ${t.note ? `<p class="blk-p" style="padding:0 var(--sp-4) var(--sp-3);margin:0">${esc(t.note)}</p>` : ''}
                </div>`;
            }).join('')}
          </div>
        </div>`;
      }).join('')}`;
  }

  /* ======================================================================
     08 招募
     ====================================================================== */
  const CODENAMES = ['Wren', 'Kestrel', 'Heron', 'Sable', 'Osprey', 'Marlin', 'Falcon',
                     'Ibis', 'Lark', 'Rook', 'Teal', 'Vireo', 'Shrike', 'Plover'];

  function renderRecruitResult(data) {
    const el = document.getElementById('r-result');
    if (!el) return;
    const total = data.cqc + data.gun + data.soc + data.tech + data.cool;
    const avg = total / 5;
    const score = Math.round(avg * 10);
    let verdict, cls, note;
    if (avg >= 8.4) { verdict = 'EXCEPTIONAL · 优异'; cls = 'ok'; note = '建议直接进入实地考核阶段。你的能力分布显示你适合高风险、高自主性的委托。'; }
    else if (avg >= 7) { verdict = 'QUALIFIED · 合格'; cls = 'info'; note = '建议安排一次现场评估。你会被分配到一个由资深协调人对口的行动小组。'; }
    else if (avg >= 5.5) { verdict = 'PROVISIONAL · 待定'; cls = 'warn'; note = '你的能力可以胜任后勤、情报或技术支持岗位。若坚持一线，需要额外的适应性训练。'; }
    else { verdict = 'NOT SUITABLE · 不建议'; cls = 'red'; note = '本机构的一线工作会产生不可逆的后果。我们建议你考虑其他职业路径。'; }

    const code = 'AGENT ' + (data.age ? String(data.age).slice(-2) + '-' + Math.floor(Math.random() * 900 + 100) : Math.floor(Math.random() * 9000 + 1000));
    const bird = CODENAMES[Math.floor(Math.random() * CODENAMES.length)];

    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-4)">
        <span class="tag ${cls} lg">${esc(verdict)}</span>
      </div>
      <dl class="dl">
        <div class="dl-row"><dt>临时代号</dt><dd class="mono" style="color:var(--ica-red-l);font-size:var(--fs-md)">${esc(code)}</dd></div>
        <div class="dl-row"><dt>鸟类等级</dt><dd class="mono" style="color:var(--ica-red-l);font-size:var(--fs-md)">rank ${esc(bird)}</dd></div>
        <div class="dl-row"><dt>综合评分</dt><dd class="mono">${score} / 100</dd></div>
        <div class="dl-row"><dt>背景归类</dt><dd>${esc(data.bg || '未载明')}</dd></div>
        <div class="dl-row"><dt>建议方向</dt><dd>${esc(data.method || '待定')}</dd></div>
        <div class="dl-row"><dt>指派协调人</dt><dd>${esc(avg >= 7 ? 'D. Burnwood（TETRA）' : '待分配')}</dd></div>
      </dl>
      <div class="note ${cls === 'ok' ? '' : 'info'}" style="margin-top:var(--sp-4)">
        <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg><div>${esc(note)}</div>
      </div>
      <div class="panel" style="margin-top:var(--sp-4)"><div class="panel-h"><h3>能力剖面</h3></div>
      <div class="panel-b">
        ${[['近身格斗', data.cqc], ['枪械熟练度', data.gun], ['社交渗透', data.soc], ['技术能力', data.tech], ['压力耐受', data.cool]]
          .map(([k, v]) => `<div style="display:flex;align-items:center;gap:var(--sp-3);padding:7px 0">
            <span style="font-size:var(--fs-sm);color:var(--fg-3);flex:0 0 88px">${k}</span>
            <div class="meter"><div class="meter-track"><div class="meter-fill" style="width:${v * 10}%"></div></div>
            <span class="meter-val">${v}/10</span></div>
          </div>`).join('')}
      </div></div>
      <div class="empty" style="margin-top:var(--sp-4);padding:var(--sp-4)">
        本评估在本地生成，未发送到任何服务器。
      </div>`;
  }

  /* ======================================================================
     09 加密档案
     ====================================================================== */
  const VAULT_FILES = [
    { id: 'ICAF-001', title: '47 号基因来源', cls: 'TOP SECRET',
      body: '47 号由 Otto Wolfgang Ort-Meyer 博士以五名罪犯的基因创造。该档案在解密后显示完整名单与国籍。' },
    { id: 'ICAF-002', title: '索德斯叛逃事件', cls: 'TOP SECRET',
      body: '训练主管、前代理人 Erich Soders 身为董事会成员，却为 Providence 充当内线，准备将现役代理人名单交给联络人山崎由纪。' },
    { id: 'ICAF-003', title: 'ICA Papers 泄露事件', cls: 'SECRET',
      body: '47 号在 Olivia Hall 协助下潜入位于中国重庆的 ICA 数据设施，将机构的存在通过黑客活动网站向全世界公开。' },
    { id: 'ICAF-004', title: 'Providence 吸收协议', cls: 'SECRET',
      body: '在 Providence 改装列车"The Mortar"上发现本机构的武器与技术，表明 Providence 可能已吸收 ICA 的残余与资产。' },
    { id: 'ICAF-005', title: '影子客户合同链', cls: 'RESTRICTED',
      body: '机构在不知情的情况下，承接了来自"影子客户"的一系列关联合同，用于清除与 Providence 有关的目标。' },
    { id: 'ICAF-006', title: '圣徒项目', cls: 'TOP SECRET',
      body: '由 Benjamin Travis 主导的全女性精英暗杀小队，成员持 EAGLE 等级。该项目是机构内部腐败阶层的产物。' }
  ];

  function renderVault() {
    const el = document.getElementById('vault-files');
    if (!el) return;
    el.innerHTML = VAULT_FILES.map((f, i) => `
      <article class="panel" style="position:relative;overflow:hidden">
        <div class="panel-b">
          <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-3)">
            <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);letter-spacing:.1em">${esc(f.id)}</span>
            <span class="stamp" data-cls="${esc(f.cls)}" style="font-size:var(--fs-2xs)">${esc(f.cls)}</span>
          </div>
          <h3 style="font-size:var(--fs-md);font-weight:var(--fw-semibold);margin-bottom:var(--sp-3)">${esc(f.title)}</h3>
          <p class="vault-text" style="font-size:var(--fs-base);color:var(--fg-3);line-height:var(--lh-base);filter:blur(5px);user-select:none;transition:filter .5s">${esc(f.body)}</p>
        </div>
        <div class="denied" data-denied="${i}"><b>CLASSIFIED</b></div>
      </article>`).join('');
  }

  function unlockVault() {
    document.querySelectorAll('.vault-text').forEach(t => { t.style.filter = 'none'; t.style.userSelect = 'text'; });
    document.querySelectorAll('[data-denied]').forEach(d => { d.style.transition = 'opacity .5s'; d.style.opacity = '0'; setTimeout(() => d.remove(), 520); });
  }

  /* ======================================================================
     09–14 扩充板块
     这六个板块的数据结构各不相同，但都由「条目 + 若干键值对/列表」组成。
     下面三个小工具覆盖了全部形态，避免每个渲染函数重复拼装。
     ====================================================================== */

  /* [{k,v} | [k,v]] → 定义列表 */
  const pairs = arr => !arr || !arr.length ? '' : `<dl class="kv">${arr.map(p => {
    const k = Array.isArray(p) ? p[0] : p.k;
    const v = Array.isArray(p) ? p[1] : p.v;
    return `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`;
  }).join('')}</dl>`;

  /* 规则条目：字符串，或 [标题, 说明]，或 [标题, 说明, [子项…]] */
  const rules = (arr, cls = '') => !arr || !arr.length ? '' : `<ul class="rule-list ${cls}">${arr.map(r => {
    const body = Array.isArray(r) ? r[2] : null;
    const t = Array.isArray(r) ? r[0] : null;
    const s = Array.isArray(r) ? r[1] : r;
    if (!t) return `<li>${esc(s)}</li>`;
    if (s === '—' || s == null) return `<li><b>${esc(t)}</b></li>`;
    return `<li><b>${esc(t)}</b><span>${esc(s)}</span>${
      body ? `<ul class="rule-sub">${body.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''
    }</li>`;
  }).join('')}</ul>`;

  /* 标签云：[a,b] 用 a 作标签、b 作提示；纯字符串直接作标签 */
  const taglist = arr => !arr || !arr.length ? '' : `<div class="chips">${arr.map(x => {
    const label = Array.isArray(x) ? x[0] : x;
    const hint = Array.isArray(x) ? x[1] : '';
    return `<span class="chip"${hint ? ` title="${esc(hint)}"` : ''}>${esc(label)}</span>`;
  }).join('')}</div>`;

  /* 板块标题条 */
  const secH = (zh, en, n) => `<div class="panel-h"><h3>${esc(zh)}</h3><span class="panel-n">${esc(en || '')}${n ? ' ' + esc(n) : ''}</span></div>`;

  /* 通用条目卡片：标题 + 原名 + 一句话 + 内容块 */
  const card = (o, inner) => `
    <article class="panel cornered">
      <div class="panel-b">
        <div class="blk-h">
          <h3>${esc(o.name)}</h3>
          ${o.nameEn ? `<span class="mono blk-en">${esc(o.nameEn)}</span>` : ''}
          ${o.tagline ? `<span class="tag info" style="margin-left:auto">${esc(o.tagline)}</span>` : ''}
        </div>
        ${o.desc ? `<p class="blk-p">${esc(o.desc)}</p>` : ''}
        ${inner || ''}
        ${o.note ? `<p class="blk-note">${esc(o.note)}</p>` : ''}
      </div>
    </article>`;

  /* ---------- 毒药与注射剂库 ---------- */
  function renderPoisons() {
    const el = document.getElementById('poison-body');
    const side = document.getElementById('poison-side');
    if (!el) return;
    const list = (typeof ICA_POISONS !== 'undefined' ? ICA_POISONS : []);
    const KINDS = [
      ['lethal',    '致命毒', 'Lethal'],
      ['sedative',  '镇静毒', 'Sedative'],
      ['emetic',    '催吐毒', 'Emetic']
    ];
    const FORMS = [
      ['pill',    '药丸 · 固体', 'Pills'],
      ['vial',    '药瓶 · 液体', 'Vials'],
      ['syringe', '注射器 · 静脉', 'Syringes']
    ];

    const byKind = KINDS.map(([k, zh, en]) => {
      const items = list.filter(x => x.kind === k);
      if (!items.length) return '';
      return `<div class="sub-sec">
        <div class="sub-h"><span class="mono">${esc(en)}</span>${esc(zh)}</div>
        ${items.map(o => card(o, rules(o.rules))).join('')}
      </div>`;
    }).join('');

    const forms = list.filter(x => ['pill', 'vial', 'syringe'].includes(x.form));
    const byForm = FORMS.map(([f, zh, en]) => {
      const items = forms.filter(x => x.form === f);
      if (!items.length) return '';
      return `<div class="sub-sec">
        <div class="sub-h"><span class="mono">${esc(en)}</span>${esc(zh)}</div>
        ${items.map(o => card(o, rules(o.rules))).join('')}
      </div>`;
    }).join('');

    /* 其余：机制、各作差异、获取、位置、考据 */
    const rest = list.filter(x => !KINDS.some(([k]) => k === x.kind) && !['pill', 'vial', 'syringe'].includes(x.form));
    const byEra = rest.filter(x => x.id.startsWith('P-ERA-'));
    const others = rest.filter(x => !x.id.startsWith('P-ERA-'));

    el.innerHTML = `
      ${byKind ? `<div class="sec-blk">${secH('毒效分类', 'TYPES OF POISON', KINDS.length)}${byKind}</div>` : ''}
      ${byForm ? `<div class="sec-blk">${secH('投递形态', 'DELIVERY', FORMS.length)}${byForm}</div>` : ''}
      ${byEra.length ? `<div class="sec-blk">${secH('各作规则差异', 'ACROSS THE SERIES', byEra.length)}${byEra.map(o => card(o, rules(o.rules))).join('')}</div>` : ''}
      ${others.length ? `<div class="sec-blk">${secH('机制与考据', 'MECHANICS', others.length)}${others.map(o => card(o, rules(o.rules))).join('')}</div>` : ''}`;

    if (side) side.innerHTML = `
      <div class="panel">
        <div class="panel-h"><h3>三型三态</h3><span class="panel-n">MATRIX</span></div>
        <div class="panel-b">
          <p class="blk-p" style="font-size:var(--fs-sm)">《刺杀世界》三部曲把毒药铺成一张矩阵：三种毒效 × 三种形态，对应固体、液体与静脉。</p>
          ${pairs([
            ['致命', '一剂致死'],
            ['镇静', '昏迷，药效有限'],
            ['催吐', '迫使目标离场'],
            ['——', '——'],
            ['药丸', '固体 · 盐酸盐压缩'],
            ['药瓶', '液体 · 玻璃安瓿'],
            ['注射器', '静脉 · 颈静脉注射']
          ])}
        </div>
      </div>
      <div class="panel">
        <div class="panel-h"><h3>本板块条目</h3><span class="panel-n">INDEX</span></div>
        <div class="panel-b flush"><div class="dl-list">${list.map(o => `
          <div class="dl-item">
            <svg viewBox="0 0 24 24"><use href="#i-vial"/></svg>
            <div style="min-width:0"><b>${esc(o.name)}</b>
              <div class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4);margin-top:1px">${esc(o.nameEn || '')}</div>
            </div>
          </div>`).join('')}</div></div>
      </div>`;
  }

  /* ---------- 伪装系统 ---------- */
  function renderDisguises() {
    const el = document.getElementById('disguise-body');
    if (!el) return;
    const list = (typeof ICA_DISGUISES !== 'undefined' ? ICA_DISGUISES : []);
    el.innerHTML = list.map(o => {
      let inner = '';
      if (o.facts)   inner += rules(o.facts);
      if (o.reasons) inner += `<div class="sub-h" style="margin-top:var(--sp-4)">识破能力来源</div>` + rules(o.reasons);
      if (o.who)     inner += `<div class="sub-h" style="margin-top:var(--sp-4)">谁会成为识破者</div>` + rules(o.who);
      if (o.effects) inner += rules(o.effects);
      if (o.eras)    inner += rules(o.eras);
      if (o.missions) inner += rules(o.missions);
      if (o.rules)   inner += rules(o.rules);
      if (o.impersonation) inner += `<div class="sub-h" style="margin-top:var(--sp-4)">冒充</div>` + rules(o.impersonation);
      if (o.ventUse)   inner += `<p class="blk-p">${esc(o.ventUse)}</p>`;
      if (o.gasMask)   inner += `<p class="blk-p">${esc(o.gasMask)}</p>`;
      if (o.impl)      inner += `<p class="blk-p">${esc(o.impl)}</p>`;
      return card(o, inner);
    }).join('');
  }

  /* ---------- 情报资产 ---------- */
  function renderAssets() {
    const el = document.getElementById('asset-body');
    const side = document.getElementById('asset-side');
    if (!el) return;
    const list = (typeof ICA_ASSETS !== 'undefined' ? ICA_ASSETS : []);

    const cases    = list.filter(x => x.group === 'case');
    const cats     = list.filter(x => x.group === 'category');
    const intel    = list.filter(x => x.group === 'intel');
    const gaps     = list.filter(x => x.group === 'gap');

    const catHTML = cats.map(o => `
      <article class="panel">
        <div class="panel-h">
          <h3>${esc(o.name)}</h3>
          <span class="panel-n">${esc(o.nameEn)} · ${esc(String(o.count))}</span>
        </div>
        <div class="panel-b">
          <p class="blk-p" style="font-size:var(--fs-sm)">${esc(o.desc)}</p>
          ${taglist(o.items)}
          ${o.crossRef ? `<p class="blk-note">本门类的机制细节见「毒药与注射剂库」专章。</p>` : ''}
        </div>
      </article>`).join('');

    el.innerHTML = `
      ${cases.length ? `<div class="sec-blk">${secH('机构容器', 'CONTAINERS', cases.length)}
        ${cases.map(o => card(o, pairs(o.perks)
          + (o.variants ? `<div class="sub-h" style="margin-top:var(--sp-4)">变体</div>` + rules(o.variants) : '')
          + (o.obtain ? `<div class="sub-h" style="margin-top:var(--sp-4)">获取</div>` + rules(o.obtain) : '')
        )).join('')}</div>` : ''}
      ${cats.length ? `<div class="sec-blk">${secH('机构装备门类', 'MATERIEL CATEGORIES', cats.length)}
        <div class="grid g-2">${catHTML}</div></div>` : ''}
      ${intel.length ? `<div class="sec-blk">${secH('情报文件', 'INTELLIGENCE', intel.length)}
        ${intel.map(o => card(o, pairs(o.facts))).join('')}</div>` : ''}
      ${gaps.length ? `<div class="sec-blk">${secH('考据边界', 'CONFIRMED GAPS', gaps.length)}
        ${gaps.map(o => card(o, rules(o.gaps))).join('')}</div>` : ''}`;

    if (side) {
      const total = cats.reduce((s, c) => s + (c.count || 0), 0);
      side.innerHTML = `
        <div class="panel">
          <div class="panel-h"><h3>门类规模</h3><span class="panel-n">TOTALS</span></div>
          <div class="panel-b">
            ${pairs(cats.map(c => [c.name, String(c.count)]).concat([['合计（已索引）', String(total)]]))}
          </div>
        </div>
        <div class="panel">
          <div class="panel-h"><h3>命名规律</h3><span class="panel-n">NOTES</span></div>
          <div class="panel-b">
            <p class="blk-p" style="font-size:var(--fs-sm)">带 ICA 前缀者为机构研发或配发；带 Mk II / Mk III 者表示该装备存在迭代。橡皮鸭、圣诞礼物、棒球、高尔夫球这类外形属于伪装型爆炸物——把装置做成玩具是 47 的招牌手法。</p>
          </div>
        </div>`;
    }
  }

  /* ---------- 财务与定价 ---------- */
  function renderFinance() {
    const el = document.getElementById('finance-body');
    if (!el) return;
    const list = (typeof ICA_FINANCE !== 'undefined' ? ICA_FINANCE : []);
    el.innerHTML = list.map(o => {
      let inner = '';
      if (o.factors)     inner += `<div class="sub-h">定价依据的四个变量</div>` + rules(o.factors);
      if (o.consequence) inner += `<p class="blk-p">${esc(o.consequence)}</p>`;
      if (o.figures)     inner += pairs(o.figures);
      if (o.cases)       inner += rules(o.cases);
      if (o.events)      inner += rules(o.events);
      if (o.rules)       inner += rules(o.rules);
      if (o.gaps)        inner += rules(o.gaps);
      return card(o, inner);
    }).join('');
  }

  /* ---------- 机构设施 ---------- */
  function renderFacilities() {
    const el = document.getElementById('facility-body');
    if (!el) return;
    const list = (typeof ICA_FACILITIES !== 'undefined' ? ICA_FACILITIES : []);
    el.innerHTML = list.map(o => {
      let inner = '';
      /* 设施类条目顶部信息条 */
      if (o.location || o.era || o.status) {
        inner += `<div class="meta-row">${
          [o.location, o.era, o.status].filter(Boolean)
            .map(x => `<span class="meta-i">${esc(x)}</span>`).join('')
        }</div>`;
      }
      if (o.important) inner += `<p class="blk-warn">${esc(o.important).replace(/\*\*/g, '')}</p>`;
      if (o.facts)     inner += rules(o.facts);
      if (o.simulation) inner += `<div class="sub-h" style="margin-top:var(--sp-4)">${esc(o.simulation.title)}</div>
        <p class="blk-p">${esc(o.simulation.body)}</p>
        ${o.simulation.support ? `<p class="blk-p">${esc(o.simulation.support)}</p>` : ''}`;
      if (o.prologue)  inner += `<div class="sub-h" style="margin-top:var(--sp-4)">序幕任务</div>` + taglist(o.prologue);
      if (o.building)  inner += `<p class="blk-p">${esc(o.building)}</p>`;
      if (o.unlock)    inner += rules(o.unlock);
      if (o.basement)  inner += `<div class="sub-h" style="margin-top:var(--sp-4)">${esc(o.basement.title)}</div>
        <p class="blk-p">${esc(o.basement.desc)}</p>${rules(o.basement.features)}`;
      if (o.firingRange) inner += `<div class="sub-h" style="margin-top:var(--sp-4)">${esc(o.firingRange.title)}</div>
        <p class="blk-p">${esc(o.firingRange.available)}</p>
        <p class="blk-p">${esc(o.firingRange.desc)}</p>${rules(o.firingRange.targets)}
        ${o.firingRange.note ? `<p class="blk-note">${esc(o.firingRange.note)}</p>` : ''}`;
      if (o.rooms)     inner += `<div class="sub-h" style="margin-top:var(--sp-4)">其余区域</div>` + taglist(o.rooms)
                        + (o.roomsNote ? `<p class="blk-note">${esc(o.roomsNote)}</p>` : '');
      if (o.roomFacts) inner += `<div class="sub-h" style="margin-top:var(--sp-4)">逐室记录</div>` + rules(o.roomFacts);
      if (o.homages)   inner += `<div class="sub-h" style="margin-top:var(--sp-4)">物件与致敬</div>` + rules(o.homages);
      if (o.contrast)  inner += `<p class="blk-p">${esc(o.contrast)}</p>`;
      if (o.patterns)  inner += rules(o.patterns);
      if (o.implication) inner += `<p class="blk-p">${esc(o.implication)}</p>`;
      if (o.gaps)      inner += rules(o.gaps);
      if (o.trivia)    inner += `<div class="sub-h" style="margin-top:var(--sp-4)">考据</div>` + rules(o.trivia);
      return card(o, inner);
    }).join('');
  }

  /* ---------- 受挫记录 ---------- */
  function renderSetbacks() {
    const el = document.getElementById('setback-body');
    if (!el) return;
    const list = (typeof ICA_SETBACKS !== 'undefined' ? ICA_SETBACKS : []);

    const SEV = { TERMINAL: 'red', CRITICAL: 'red', HIGH: 'warn', MODERATE: 'info', LOW: 'dim' };

    const events = list.filter(x => x.kind !== 'asset-loss');
    const cost   = list.filter(x => x.kind === 'asset-loss');

    el.innerHTML = `
      <div class="sec-blk">${secH('事件记录', 'INCIDENTS', events.length)}
        <div class="tl">${events.map(o => `
          <div class="tl-item ${o.severity === 'TERMINAL' || o.severity === 'CRITICAL' ? 'key' : ''}">
            <span class="tl-year">${esc(o.year || '—')}</span>
            <h4>${esc(o.name)}${o.nameEn ? ` <span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">${esc(o.nameEn)}</span>` : ''}</h4>
            <div style="display:flex;gap:var(--sp-2);align-items:center;margin:2px 0 var(--sp-2)">
              <span class="tag ${SEV[o.severity] || 'dim'}">${esc(o.severity || '')}</span>
              ${o.source ? `<span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">${esc(o.source)}</span>` : ''}
            </div>
            <p>${esc(o.what)}</p>
            ${o.detail ? rules(o.detail) : ''}
            ${o.note ? `<p class="blk-note">${esc(o.note)}</p>` : ''}
          </div>`).join('')}</div>
      </div>
      ${cost.length ? `<div class="sec-blk">${secH('代价归类', 'COST ANALYSIS', cost.length)}
        ${cost.map(o => card(o, rules(o.losses)
          + (o.observation ? `<p class="blk-warn">${esc(o.observation)}</p>` : ''))).join('')}</div>` : ''}`;
  }

  /* ======================================================================
     人物传记
     ----------------------------------------------------------------------
     与代理人档案的分工：代理人档案是卡片（summary + 若干 detail 要点），
     适合回答「这个单位在机构里是什么位置」；人物传记要回答
     「这个人经历了什么」，所以按原文条目的章节顺序逐章展开。
     47 一个人的传记有 16 章、近 1.5 万字，全部铺开会淹没页面，
     因此用 <details> 折叠：第一章默认展开，其余按需点开。
     ====================================================================== */
  function renderPersonae() {
    const el = document.getElementById('personae-body');
    if (!el || typeof ICA_PERSONAE === 'undefined') return;

    const chapter = (c, i, open) => `
      <details class="chapter"${open ? ' open' : ''}>
        <summary>
          <span class="chapter-n">${String(i + 1).padStart(2, '0')}</span>
          <span class="chapter-t">${esc(c.title)}</span>
          ${c.titleEn ? `<span class="chapter-en">${esc(c.titleEn)}</span>` : ''}
        </summary>
        <div class="chapter-b">
          ${c.paras.map(x => `<p class="blk-p">${esc(x)}</p>`).join('')}
          ${c.quote ? `<p class="blk-note">${esc(c.quote)}</p>` : ''}
        </div>
      </details>`;

    el.innerHTML = `<div style="display:grid;gap:var(--sp-8)">${ICA_PERSONAE.map(p => `
      <article class="persona" data-persona="${esc(p.id)}">
        <div class="panel cornered">
          <div class="panel-h">
            <h3>${esc(p.name)}</h3>
            <span class="panel-n">${esc(p.nameEn || '')}</span>
          </div>
          <div class="panel-b">
            <div style="display:flex;gap:var(--sp-3);align-items:center;flex-wrap:wrap;margin-bottom:var(--sp-3)">
              ${statusTag(p.status)}
              ${p.role ? `<span class="tag dim">${esc(p.role)}</span>` : ''}
              ${p.alias ? `<span class="mono" style="font-size:var(--fs-2xs);color:var(--fg-4)">${esc(p.alias)}</span>` : ''}
            </div>
            ${p.tagline ? `<p style="font-size:var(--fs-md);color:var(--fg-2);line-height:var(--lh-loose);margin-bottom:var(--sp-3)">${esc(p.tagline)}</p>` : ''}
            ${p.summary ? `<p class="blk-p">${esc(p.summary)}</p>` : ''}
            ${p.profile && p.profile.length ? `<dl class="kv" style="margin-top:var(--sp-4)">
              ${p.profile.map(f => `<dt>${esc(f.k)}</dt><dd>${esc(f.v)}${f.note ? `<span style="display:block;font-size:var(--fs-sm);color:var(--fg-4);margin-top:3px">${esc(f.note)}</span>` : ''}</dd>`).join('')}
            </dl>` : ''}
          </div>
        </div>

        <div class="chapter-list">
          ${p.chapters.map((c, i) => chapter(c, i, i === 0)).join('')}
        </div>

        ${p.profileSections && p.profileSections.length ? `
          <div class="chapter-list">
            ${p.profileSections.map((s, i) => chapter(s, i, false)).join('')}
          </div>` : ''}

        ${p.equipment && p.equipment.length ? `
          <details class="chapter">
            <summary><span class="chapter-t">装备清单</span><span class="chapter-en">Equipment</span></summary>
            <div class="chapter-b">
              ${p.equipment.map(g => `
                <div style="margin-bottom:var(--sp-3)">
                  <div class="eyebrow" style="margin-bottom:5px">${esc(g.group)}</div>
                  <div class="chips">${g.items.map(it => `<span class="chip">${esc(it)}</span>`).join('')}</div>
                </div>`).join('')}
            </div>
          </details>` : ''}

        ${p.quotes && p.quotes.length ? `
          <details class="chapter">
            <summary><span class="chapter-t">台词</span><span class="chapter-en">Quotes</span><span class="chapter-n">${p.quotes.length}</span></summary>
            <div class="chapter-b">
              ${p.quotes.map(q => `
                <blockquote class="quote">
                  <p>${esc(q.text)}</p>
                  <cite>${esc(q.src)}${q.srcEn ? `<span class="mono" style="margin-left:8px;color:var(--fg-4);font-size:var(--fs-2xs)">${esc(q.srcEn)}</span>` : ''}</cite>
                </blockquote>`).join('')}
            </div>
          </details>` : ''}

        ${p.trivia && p.trivia.length ? `
          <details class="chapter">
            <summary><span class="chapter-t">轶事与考据</span><span class="chapter-en">Trivia</span><span class="chapter-n">${p.trivia.length}</span></summary>
            <div class="chapter-b">
              ${rules(p.trivia)}
            </div>
          </details>` : ''}
      </article>`).join('')}</div>`;
  }

  /* ======================================================================
     Providence 组织专章
     ====================================================================== */
  function renderProvidence() {
    const el = document.getElementById('providence-body');
    if (!el || typeof ICA_PROVIDENCE === 'undefined') return;
    const p = ICA_PROVIDENCE;

    const memberTable = (rows, cols) => `
      <div class="tbl-scroll" style="max-height:none">
        <table class="tbl">
          <thead><tr>${cols.map(c => `<th>${esc(c[0])}</th>`).join('')}</tr></thead>
          <tbody>${rows.map(r => `<tr>${cols.map(c => `<td>${c[1](r)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>`;

    el.innerHTML = `
      <div class="panel cornered">
        <div class="panel-h"><h3>${esc(p.name)}</h3><span class="panel-n">${esc(p.type)}</span></div>
        <div class="panel-b">
          <div style="display:flex;gap:var(--sp-3);align-items:center;flex-wrap:wrap;margin-bottom:var(--sp-3)">
            ${statusTag(p.status)}
            <span class="tag dim">${esc(p.tagline)}</span>
          </div>
          <p style="font-size:var(--fs-md);color:var(--fg-2);line-height:var(--lh-loose)">${esc(p.summary)}</p>
        </div>
      </div>

      <div class="sec-blk">
        ${secH('官方侧写', 'Overview')}
        <div class="panel"><div class="panel-b">
          <p class="blk-p">${esc(p.overview.quote)}</p>
          <p class="blk-note">${esc(p.overview.source)}</p>
        </div></div>
      </div>

      <div class="sec-blk">
        ${secH('历史', 'History', `${p.history.length} 段`)}
        <div class="chapter-list">
          ${p.history.map((h, i) => `
            <details class="chapter"${i === 0 ? ' open' : ''}>
              <summary><span class="chapter-n">${String(i + 1).padStart(2, '0')}</span><span class="chapter-t">${esc(h.title)}</span><span class="chapter-en">${esc(h.titleEn || '')}</span></summary>
              <div class="chapter-b">${h.paras.map(x => `<p class="blk-p">${esc(x)}</p>`).join('')}</div>
            </details>`).join('')}
        </div>
      </div>

      <div class="sec-blk">
        ${secH('领袖', 'Leaders', `${p.leaders.length} 人`)}
        <div class="note info" style="margin-bottom:var(--sp-3)">
          <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg>
          <div>「合伙人」（The Partners）是 Providence 的最高首脑，共三位，来自缔造该组织的三个家族。Constant 是直接向合伙人汇报的唯一一人，负责把他们的命令通过 Herald 逐级下达。</div>
        </div>
        ${memberTable(p.leaders, [
          ['姓名', r => `<b style="color:var(--fg)">${esc(r.name)}</b>`],
          ['所属', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.org)}</span>`],
          ['身份与经历', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.roles.join(' · '))}</span>`],
          ['任期', r => `<span class="mono" style="font-size:var(--fs-xs)">${esc(r.span)}</span>`],
          ['状态', r => statusTag(r.status)]
        ])}
      </div>

      <div class="sec-blk">
        ${secH('Heralds', 'Heralds', `${p.heralds.length} 人`)}
        <p class="blk-p">${esc(p.heraldNote)}</p>
        ${memberTable(p.heralds, [
          ['姓名', r => `<b style="color:var(--fg)">${esc(r.name)}</b>`],
          ['其他组织', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.org)}</span>`],
          ['职业', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.role)}</span>`],
          ['状态', r => statusTag(r.status)]
        ])}
      </div>

      <div class="sec-blk">
        ${secH('行动人员', 'Operatives', `${p.operatives.length} 人`)}
        <p class="blk-p">${esc(p.operativeNote)}</p>
        ${memberTable(p.operatives, [
          ['姓名', r => `<b style="color:var(--fg)">${esc(r.name)}</b>`],
          ['所属机构', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.org)}</span>`],
          ['职业', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.role)}</span>`],
          ['状态', r => statusTag(r.status)]
        ])}
      </div>

      <div class="sec-blk">
        ${secH('资源与影响力', 'Resources and Influence')}
        <div class="panel"><div class="panel-b">
          ${p.resources.paras.map(x => `<p class="blk-p">${esc(x)}</p>`).join('')}
        </div></div>
        <div class="sub-sec">
          <div class="sub-h">附属组织 <span class="eyebrow">Affiliated Organizations</span></div>
          ${memberTable(p.resources.affiliations, [
            ['组织', r => `<b style="color:var(--fg)">${esc(r.org)}</b>`],
            ['领导人', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.leader)}</span>`]
          ])}
          <p class="blk-note">${esc(p.resources.affiliationNote)}</p>
        </div>
      </div>

      <div class="sec-blk">
        ${secH('资产', 'Assets', `${p.assets.length} 名`)}
        <p class="blk-p">${esc(p.assetNote)}</p>
        ${memberTable(p.assets, [
          ['姓名', r => `<b style="color:var(--fg)">${esc(r.name)}</b>`],
          ['所属', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.org)}</span>`],
          ['职能', r => `<span style="font-size:var(--fs-sm);color:var(--fg-3)">${esc(r.role)}</span>`],
          ['状态', r => statusTag(r.status)]
        ])}
      </div>

      <div class="sec-blk">
        ${secH('轶事与考据', 'Trivia')}
        <div class="panel"><div class="panel-b">${rules(p.trivia)}</div></div>
      </div>`;
  }

  /* ======================================================================
     目标档案
     ----------------------------------------------------------------------
     合同视图按「一纸委托」组织；这里按「一个目标是谁」组织。
     目标名单取自原文 Main Targets 一节，派系与定位来自本站其他已核实条目。
     ====================================================================== */
  function renderTargets() {
    const el = document.getElementById('targets-body');
    if (!el || typeof ICA_TARGETS === 'undefined') return;

    const total = ICA_TARGETS.reduce((s, g) => s + g.missions.reduce((a, m) => a + m.targets.length, 0), 0);

    el.innerHTML = `
      <div class="note info" style="margin-bottom:var(--sp-6)">
        <svg viewBox="0 0 24 24"><use href="#i-alert"/></svg>
        <div>「刺杀世界」三部曲共 <b style="color:var(--fg-2)">${ICA_TARGETS.reduce((s, g) => s + g.missions.length, 0)}</b> 个主要任务、<b style="color:var(--fg-2)">${total}</b> 个主要目标。合同视图里的每一份委托都能在这里找到对应的目标条目——同一个名字在两处的写法可能略有差异（例如 <span class="mono">Dalía Margolis</span> 与 <span class="mono">Dalia Margolis</span>）。</div>
      </div>
      <div style="display:grid;gap:var(--sp-7)">
        ${ICA_TARGETS.map(g => `
          <div class="sec-blk">
            ${secH(g.game, g.gameEn, `${g.missions.length} 个任务`)}
            <div style="display:grid;gap:var(--sp-3)">
              ${g.missions.map(m => `
                <div class="panel">
                  <div class="panel-h">
                    <h3>${esc(m.name)}</h3>
                    <span class="panel-n">${esc(m.nameEn)}</span>
                  </div>
                  <div class="panel-b">
                    <div class="meta-row"><span class="meta-i">${esc(m.location)}</span><span class="meta-i">${m.targets.length} 个目标</span></div>
                    ${m.targets.map((t, i) => `
                      <div class="target-row"${i === 0 ? ' style="border-top:0"' : ''}>
                        <div class="target-h">
                          <b>${esc(t.nameZh || t.name)}</b>
                          <span class="mono" style="font-size:var(--fs-xs);color:var(--fg-4)">${esc(t.name)}</span>
                          <span class="tag dim">${esc(t.faction)}</span>
                        </div>
                        <p class="target-p">${esc(t.role)}</p>
                      </div>`).join('')}
                  </div>
                </div>`).join('')}
            </div>
          </div>`).join('')}
      </div>

      ${typeof ICA_TARGETS_LEGACY !== 'undefined' ? `
        <div class="sec-blk">
          ${secH('三部曲之前', 'Earlier Titles')}
          <p class="blk-p">${esc(ICA_TARGETS_LEGACY.note)}</p>
          ${ICA_TARGETS_LEGACY.eras.map(e => `
            <div class="sub-sec">
              <div class="sub-h">${esc(e.era)}</div>
              <div class="chips">${e.missions.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
            </div>`).join('')}
        </div>` : ''}`;
  }

  return {
    esc, term, statusTag, rankBadge,
    startSyslog, renderOverview, renderOps, renderOrg,
    renderAgentFilters, renderAgents, openAgent,
    renderContractFilters, renderContracts, buildContract,
    renderMap, renderLocFilters, renderLocations, renderDisguiseDoctrine, openLocation,
    renderGearFilters, renderGear,
    renderTimeline, renderTitles,
    renderPoisons, renderDisguises, renderAssets,
    renderFinance, renderFacilities, renderSetbacks,
    renderPersonae, renderProvidence, renderTargets,
    renderRecruitResult, renderVault, unlockVault, VAULT_FILES,
    markNumericCells
  };
})();
