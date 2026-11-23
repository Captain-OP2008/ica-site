/* ==========================================================================
   app.js — 主控制器
   准入终端 / 双层切换 / 路由 / 光标 / 模态框 / 各交互模块
   ========================================================================== */

const ICA_APP = (() => {

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const wait = ms => new Promise(r => setTimeout(r, ms));

  const E = ICA_RENDER.esc;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentView = 'overview';
  let revealed = false;

  /* ======================================================================
     准入终端
     ====================================================================== */
  const BOOT_LINES = [
    ['> 建立安全通道', 'TLS 1.3 / 隧道已就绪', 460],
    ['> 校验终端凭据', 'NODE CHQ-01 · 凭据有效', 380],
    ['> 挂载加密卷', 'ARCHIVE/ICA-PAPERS 已挂载', 520],
    ['> 同步人事索引', '在册人员记录载入中', 420],
    ['> 同步合同数据库', '合同记录载入中', 400],
    ['> 同步装备清册', '装备库索引载入中', 360],
    ['> 载入据点坐标', '全球据点数据载入中', 400],
    ['> 载入编年史', '大事记重建中', 480],
    ['> 校验数据完整性', '全部校验和通过', 340],
    ['> 申请访问等级', '等级 RESTRICTED 已授予 · 访客 RB', 560]
  ];

  async function boot() {
    const logEl = $('#boot-log');
    const barEl = $('#boot-bar');
    const hintEl = $('#boot-hint');
    const hints = [
      '正在确认你不是我们的人…',
      '正在确认你也不是他们的人…',
      '本终端不记录你的任何信息。',
      '欢迎。你从未到过这里。'
    ];

    let total = 0;
    const totalMs = BOOT_LINES.reduce((a, l) => a + l[2], 0);

    for (let i = 0; i < BOOT_LINES.length; i++) {
      const [k, v, delay] = BOOT_LINES[i];
      const ln = document.createElement('div');
      ln.className = 'ln';
      ln.innerHTML = `<span class="k">${E(k)}</span><span class="v">${E(v)}</span>`;
      logEl.appendChild(ln);
      logEl.scrollTop = logEl.scrollHeight;
      ICA_AUDIO.typeTick();
      total += delay;
      barEl.style.width = Math.round(total / totalMs * 100) + '%';
      if (i === 4) hintEl.textContent = hints[0];
      if (i === 7) hintEl.textContent = hints[2];
      await wait(reduceMotion ? 40 : delay);
    }

    hintEl.innerHTML = '<span style="color:var(--ica-red)">按任意键进入内部终端</span>'
      + '<div style="margin-top:10px"><a href="#" id="boot-skip" style="color:var(--fg-4);text-decoration:underline;text-underline-offset:3px">或：以访客身份浏览公开站点</a></div>';

    const done = async skip => {
      document.removeEventListener('keydown', enter);
      document.removeEventListener('click', enter);
      const skipEl = document.getElementById('boot-skip');
      if (skipEl) skipEl.onclick = null;
      await leaveBoot(skip);
    };
    const enter = e => {
      // 点击"浏览公开站点"链接时走 skip 分支，不重复触发
      if (e && e.target && e.target.id === 'boot-skip') return;
      done(false);
    };
    document.addEventListener('keydown', enter);
    document.addEventListener('click', enter);
    const skipEl = document.getElementById('boot-skip');
    if (skipEl) skipEl.onclick = ev => { ev.preventDefault(); ev.stopPropagation(); done(true); };
  }

  async function leaveBoot(asVisitor) {
    const b = $('#boot');
    b.classList.add('is-gone');
    document.body.classList.remove('is-locked');
    await wait(640);
    b.classList.add('is-hidden');
    if (asVisitor) {
      /* 用户明确选择「以访客身份浏览公开站点」→ 记住这个选择 */
      setLayer('corporate');
      history.replaceState(null, '', location.pathname);
    } else {
      await enterTerminal(true);
    }
    window.scrollTo(0, 0);
    revealNow();
  }

  /* ======================================================================
     双层：官网 ↔ 终端
     ====================================================================== */
  /* remember 只应为「用户主动选择」写存储。
     init() 里的调用是在设定初始 DOM 状态，若也写存储，就会把上一次
     进过终端的记录覆盖成 corporate，导致 seenTerminal 永远为 false、
     准入终端每次刷新都弹出来。 */
  function setLayer(which, remember = true) {
    document.body.dataset.layer = which;
    document.body.dataset.surface = which;
    if (remember) { try { localStorage.setItem('ica-layer', which); } catch (e) {} }
  }

  async function enterTerminal(skipRip, forcedView) {
    ICA_AUDIO.open();
    /* 用户主动进入内部终端 → 记住，下次带视图 hash 打开可直接落地 */
    setLayer('terminal');

    /* 记住调用方期望的视图（深链接 #agents 之类），否则用概览。
       hash 只用来承载视图名，不能写成 '#terminal' —— route() 不认识它就会回退到概览。 */
    const known = $$('.view').map(v => v.dataset.view);
    const want = forcedView || (location.hash || '').replace('#', '');
    const target = known.includes(want) ? want : 'overview';

    // 撕开动画
    const rip = $('#rip');
    if (!reduceMotion && !skipRip) {
      rip.classList.add('on');
      await wait(940);
      rip.classList.remove('on');
    }
    $('#main').scrollTop = 0;
    window.scrollTo(0, 0);
    route(target);
    revealNow();
    startHeroType();
  }

  async function exitTerminal() {
    ICA_AUDIO.click();
    setLayer('corporate');
    history.replaceState(null, '', location.pathname);
    window.scrollTo(0, 0);
    revealNow();
  }

  /* ======================================================================
     路由
     ====================================================================== */
  function route(view) {
    const known = $$('.view').map(v => v.dataset.view);
    if (!known.includes(view)) view = 'overview';
    currentView = view;

    $$('.view').forEach(v => {
      const on = v.dataset.view === view;
      /* 显示由 .is-active 类控制（layout.css: .view{display:none} / .view.is-active{display:block}）。
         不要写 inline style，否则会永久覆盖掉 CSS 规则。 */
      v.classList.toggle('is-active', on);
      if (on) {
        v.classList.add('is-in');
        /* 重新触发入场动画 */
        v.style.animation = 'none';
        void v.offsetWidth;
        v.style.animation = '';
      } else {
        v.classList.remove('is-in');
      }
    });
    $$('.rail-link').forEach(a => a.classList.toggle('is-on', a.dataset.view === view));
    if (location.hash !== '#' + view && document.body.dataset.layer === 'terminal') {
      history.replaceState(null, '', '#' + view);
    }
    const rail = $('#rail');
    if (rail) rail.classList.remove('is-open');
    revealNow();
    /* 表格数值列右对齐：必须在视图可见后执行——隐藏容器里量不到列宽，
       而判定依赖单元格的实际文本，所以放在 reveal 之后统一处理。 */
    if (typeof ICA_RENDER !== 'undefined' && ICA_RENDER.markNumericCells) {
      ICA_RENDER.markNumericCells($('.view[data-view="' + view + '"]'));
    }
  }

  /* ======================================================================
     揭示动画
     ====================================================================== */
  function setupReveal() {
    const targets = $$('.block, .panel, .dossier, .contract, .gear, .view-h, .map-wrap, .filters, .hero, .stat-row');
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = Math.min(i % 8, 7) * 45 + 'ms';
    });
  }

  function revealNow() {
    if (reduceMotion) { $$('.reveal').forEach(el => el.classList.add('in')); return; }
    const vh = window.innerHeight;
    $$('.reveal:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.94 && r.bottom > -60) el.classList.add('in');
    });
  }

  /* ======================================================================
     侧栏滚动定位
     ====================================================================== */
  function setupRailProgress() {
    const onScroll = () => {
      const p = $('#progress');
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      p.style.width = pct.toFixed(2) + '%';
      revealNow();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', revealNow);
    onScroll();
  }

  /* ======================================================================
     时钟
     ====================================================================== */
  function setupClock() {
    const c = $('#clock');
    const pad = n => String(n).padStart(2, '0');
    const tick = () => {
      const d = new Date();
      c.textContent = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
    };
    tick(); setInterval(tick, 1000);

    const sid = $('#session-id');
    const rnd = Math.random().toString(36).slice(2, 8).toUpperCase();
    sid.textContent = 'SESSION ' + rnd;

    const y = $('#corp-year');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ======================================================================
     光标
     ====================================================================== */
  function setupCursor() {
    const cur = $('#cursor');
    if (window.matchMedia('(hover:none)').matches) return;
    let x = -100, y = -100, cx = -100, cy = -100;

    window.addEventListener('mousemove', e => {
      x = e.clientX; y = e.clientY;
      cur.classList.remove('hidden');
      const t = e.target;
      const hot = t.closest('a, button, .dossier, .chip, .map-pin, [role="button"], input, select, textarea, label');
      cur.classList.toggle('hot', !!hot);
    }, { passive: true });
    window.addEventListener('mouseleave', () => cur.classList.add('hidden'));

    (function loop() {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      cur.style.left = cx + 'px';
      cur.style.top = cy + 'px';
      requestAnimationFrame(loop);
    })();

    /* 注意：原生光标不在这里隐藏。全局 cursor:none 会让伪装官网和准入终端
       一起变成"点不到东西"，所以隐藏逻辑交给 CSS，只在终端层生效。 */
  }

  /* ======================================================================
     模态框
     ====================================================================== */
  function openModal() {
    $('#modal').classList.add('is-open');
    document.body.style.overflow = 'hidden';
    ICA_AUDIO.open();
    /* 模态框里的表格同样适用数值列对齐（例如代理人档案中的履历表） */
    if (typeof ICA_RENDER !== 'undefined' && ICA_RENDER.markNumericCells) {
      ICA_RENDER.markNumericCells($('#modal'));
    }
  }
  function closeModal() {
    $('#modal').classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* ======================================================================
     控制台日志（供 render 调用）
     ====================================================================== */
  function log(cls, msg) {
    const el = $('#syslog');
    if (!el) return;
    const line = document.createElement('div');
    line.className = 'log-line ' + (cls || '');
    line.innerHTML = `<span class="t">${new Date().toISOString().substr(11, 8)}</span><span class="m">${E(msg)}</span>`;
    el.appendChild(line);
    while (el.children.length > 22) el.removeChild(el.firstChild);
    el.scrollTop = el.scrollHeight;
  }

  /* ======================================================================
     轮播的势力关系日志（大事记侧栏）
     ====================================================================== */
  function setupFactionLog() {
    const el = $('#faction-log');
    if (!el) return;
    const lines = [
      ['sys', 'Providence — DISSOLVED'],
      ['',    'The Franchise — DISBANDED'],
      ['err', 'Kronstadt Industries — UNDER INVESTIGATION'],
      ['warn','The Delgado Cartel — ACTIVE'],
      ['',    'New York Mafia — ACTIVE'],
      ['err', 'The Highmoore Family — DECEASED'],
      ['',    'MI5 / MI6 — COOPERATIVE'],
      ['warn','The Shadow Client — FORMERLY (DECEASED)'],
      ['',    'CICADA — ACTIVE'],
      ['sys', 'ICA Board — DISBANDED']
    ];
    let i = 0;
    const push = () => {
      const [c, m] = lines[i % lines.length]; i++;
      const d = document.createElement('div');
      d.className = 'log-line ' + c;
      d.innerHTML = `<span class="t">${new Date().toISOString().substr(11, 8)}</span><span class="m">${E(m)}</span>`;
      el.appendChild(d);
      while (el.children.length > 12) el.removeChild(el.firstChild);
      el.scrollTop = el.scrollHeight;
    };
    for (let k = 0; k < 7; k++) push();
    setInterval(push, 4600);
  }

  /* ======================================================================
     招募表单
     ====================================================================== */
  function setupRecruit() {
    const form = $('#r-form');
    if (!form) return;
    let step = 1;
    const MAX = 4;

    const paint = () => {
      $$('.r-step').forEach(s => { s.hidden = +s.dataset.step !== step; });
      $$('#r-steps .step').forEach((s, i) => {
        s.classList.toggle('is-active', i + 1 === step);
        s.classList.toggle('is-done', i + 1 < step);
      });
      $('#r-prev').disabled = step === 1;
      $('#r-next').hidden = step === MAX;
      $('#r-submit').hidden = step !== MAX;
    };

    const validate = () => {
      const pane = $(`.r-step[data-step="${step}"]`);
      let ok = true;
      $$('input[required], textarea[required]', pane).forEach(inp => {
        if (!inp.checkValidity()) {
          inp.style.borderColor = 'var(--ica-red)';
          inp.focus(); ok = false;
          setTimeout(() => inp.style.borderColor = '', 1400);
        }
      });
      return ok;
    };

    $('#r-next').onclick = () => {
      if (!validate()) { ICA_AUDIO.deny(); log('err', '申请表校验失败 — 必填字段缺失'); return; }
      if (step < MAX) { step++; paint(); ICA_AUDIO.blip(); }
    };
    $('#r-prev').onclick = () => { if (step > 1) { step--; paint(); ICA_AUDIO.click(); } };

    form.onsubmit = e => {
      e.preventDefault();
      if (!validate()) { ICA_AUDIO.deny(); return; }
      const fd = new FormData(form);
      const data = {
        codename: fd.get('codename'), age: +fd.get('age') || 0,
        city: fd.get('city'), bg: fd.get('bg'),
        cqc: +fd.get('cqc'), gun: +fd.get('gun'), soc: +fd.get('soc'),
        tech: +fd.get('tech'), cool: +fd.get('cool'),
        method: fd.get('method'), essay: fd.get('essay'), ref: fd.get('ref')
      };
      ICA_RENDER.renderRecruitResult(data);
      ICA_AUDIO.confirm();
      log('ok', `申请已受理 — 代号 ${data.codename}`);
      log('sys', '评估完成 · 结果已在本地生成，未上传');
      $('#r-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
      revealNow();
    };

    paint();
  }

  /* ======================================================================
     加密档案
     ====================================================================== */
  const VAULT_KEYS = ['merces letiferae', 'merces letifera', 'commercium letale',
                      'bro3886', '3886', '640509040147', '040147'];

  function setupVault() {
    const inp = $('#vault-in');
    if (!inp) return;
    let tries = 0, unlocked = false;

    const vlog = (cls, msg) => {
      const el = $('#vault-log');
      const d = document.createElement('div');
      d.className = 'log-line ' + cls;
      d.innerHTML = `<span class="t">${new Date().toISOString().substr(11, 8)}</span><span class="m">${E(msg)}</span>`;
      el.appendChild(d); el.scrollTop = el.scrollHeight;
    };

    const attempt = () => {
      if (unlocked) return;
      const v = inp.value.trim().toLowerCase().replace(/[.\s]+$/, '');
      if (!v) return;
      tries++;
      $('#vault-tries').textContent = tries;

      if (VAULT_KEYS.includes(v)) {
        unlocked = true;
        $('#vault-state').textContent = 'UNLOCKED';
        $('#vault-state').style.color = '#5fbe88';
        vlog('ok', '口令正确 — 解除档案遮蔽');
        vlog('sys', `激活的口令：${v.toUpperCase()}`);
        ICA_RENDER.unlockVault();
        ICA_AUDIO.confirm();
        log('ok', 'CLASSIFIED 档案已解密');
        inp.disabled = true;
        $('#vault-go').textContent = '已解密';
        $('#vault-go').disabled = true;
      } else {
        ICA_AUDIO.deny();
        vlog('err', `口令「${inp.value.trim()}」无效 — 访问被拒绝`);
        if (tries >= 3) vlog('warn', '提示：试试那个语法正确的拉丁文写法，或者条形码上的数字。');
        if (tries >= 6) vlog('sys', '提示：答案形如 "Merces ______"（阴性形式），或 6 位数字。');
        inp.select();
        log('err', `加密卷访问被拒绝 — 第 ${tries} 次尝试`);
      }
    };

    $('#vault-go').onclick = attempt;
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); attempt(); } });
    vlog('sys', 'ARCHIVE/ICA-PAPERS 已挂载 · 等待口令');
  }

  /* ======================================================================
     入口绑定
     ====================================================================== */
  function bind() {
    /* 官网 → 终端 */
    $$('[data-corp]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      const k = a.dataset.corp;
      ICA_AUDIO.blip();
      if (k === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const map = { services: '#sec-services', approach: '#sec-approach', clients: '#sec-clients', careers: '#sec-careers' };
      if (map[k]) { $(map[k]).scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
      if (k === 'contact') { enterTerminal(); return; }
      if (k === 'apply')   { enterTerminal().then(() => route('recruit')); return; }
    }));

    /* 彩蛋：极小的字 */
    const egg = $('#egg-line');
    if (egg) egg.addEventListener('click', () => { ICA_AUDIO.open(); enterTerminal(); });

    /* 侧栏导航 */
    $$('.rail-link').forEach(a => a.addEventListener('click', () => {
      ICA_AUDIO.blip();
      route(a.dataset.view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }));

    /* 退出 / 返回官网 */
    $('#btn-exit').onclick = exitTerminal;
    const bc = $('#back-corp');
    if (bc) bc.onclick = e => { e.preventDefault(); exitTerminal(); };

    /* 移动端侧栏 */
    $('#rail-toggle').onclick = () => { ICA_AUDIO.click(); $('#rail').classList.toggle('is-open'); };

    /* 音效 */
    const sb = $('#btn-sound');
    sb.onclick = () => {
      const on = ICA_AUDIO.toggle();
      sb.setAttribute('aria-pressed', on ? 'true' : 'false');
      sb.classList.toggle('playing', on);
      sb.querySelector('use').setAttribute('href', on ? '#i-vol' : '#i-vol-off');
      sb.querySelector('span').textContent = on ? 'AUDIO ON' : 'AUDIO';
    };

    /* 模态框关闭 —— 用事件委托，因为 render.js 会在运行时用 innerHTML
       重建 #modal-foot，里面那个「关闭」按钮是动态生成的，
       初始化时按 [data-close] 逐个绑定根本抓不到它。 */
    document.addEventListener('click', e => {
      const t = e.target;
      if (!t || typeof t.closest !== 'function') return;
      if (t.closest('[data-close]')) { ICA_AUDIO.click(); closeModal(); }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    /* 合同生成器 */
    const gen = $('#cb-gen');
    if (gen) gen.onclick = () => { ICA_RENDER.buildContract(); ICA_AUDIO.confirm(); };
    const dl = $('#cb-dl');
    if (dl) dl.onclick = () => {
      if (!dl.dataset.text) return;
      const blob = new Blob([dl.dataset.text], { type: 'text/plain;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = (dl.dataset.name || 'ICA-contract') + '.txt';
      document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 400);
      ICA_AUDIO.blip();
      log('ok', `合同 ${dl.dataset.name} 已导出`);
    };

    /* 事件目标可能是 document 或非元素节点，matches 不一定存在 */
    const onField = (t, sel) => !!(t && typeof t.matches === 'function' && t.matches(sel));

    /* 键盘快捷键 */
    document.addEventListener('keydown', e => {
      if (onField(e.target, 'input, textarea, select')) return;
      if (document.body.dataset.layer !== 'terminal') return;
      const order = ['overview', 'org', 'agents', 'contracts', 'locations', 'gear', 'timeline', 'recruit', 'vault', 'sources'];
      const i = order.indexOf(currentView);
      if (e.key === 'j' || (e.key === 'ArrowDown' && e.altKey)) { route(order[Math.min(i + 1, order.length - 1)]); }
      if (e.key === 'k' || (e.key === 'ArrowUp' && e.altKey))   { route(order[Math.max(i - 1, 0)]); }
    });

    /* 键盘音效 */
    document.addEventListener('keydown', e => {
      if (onField(e.target, 'input, textarea')) ICA_AUDIO.key();
    });

    /* 浏览器前进 / 后退 —— route() 用 replaceState 写 hash，不会触发本事件，因此无循环 */
    window.addEventListener('hashchange', () => {
      const name = (location.hash || '').replace('#', '');
      if (document.body.dataset.layer === 'terminal') {
        if (name && name !== currentView) route(name);
        return;
      }
      /* 在公开官网层写 #terminal 或任何视图名，都视为想要进内部终端 */
      const views = $$('[data-view]').map(el => el.dataset.view);
      if (name === 'terminal' || views.indexOf(name) >= 0) enterTerminal(true, name === 'terminal' ? null : name);
    });
  }

  /* ======================================================================
     初始化
     ====================================================================== */
  function init() {
    setupClock();
    setupCursor();
    setupRailProgress();
    setupReveal();
    setupRecruit();
    setupVault();
    setupFactionLog();
    bind();

    /* 数据渲染 —— 每个渲染器单独兜底：任何一个容器缺失都不应拖垮整个终端初始化 */
    const safe = (name, fn) => {
      try { fn(); } catch (err) {
        console.error('[ICA] 渲染失败：' + name, err);
      }
    };
    safe('renderOverview',       () => ICA_RENDER.renderOverview());
    safe('renderOrg',            () => ICA_RENDER.renderOrg());
    safe('renderAgentFilters',   () => ICA_RENDER.renderAgentFilters());
    safe('renderAgents',         () => ICA_RENDER.renderAgents());
    safe('renderContractFilters',() => ICA_RENDER.renderContractFilters());
    safe('renderContracts',      () => ICA_RENDER.renderContracts());
    safe('renderMap',            () => ICA_RENDER.renderMap());
    safe('renderLocFilters',     () => ICA_RENDER.renderLocFilters());
    safe('renderLocations',      () => ICA_RENDER.renderLocations());
    safe('renderDisguiseDoctrine', () => ICA_RENDER.renderDisguiseDoctrine());
    safe('renderGearFilters',    () => ICA_RENDER.renderGearFilters());
    safe('renderGear',           () => ICA_RENDER.renderGear());
    safe('renderTimeline',       () => ICA_RENDER.renderTimeline());
    safe('renderTitles',         () => ICA_RENDER.renderTitles());
    safe('renderPoisons',        () => ICA_RENDER.renderPoisons());
    safe('renderDisguises',      () => ICA_RENDER.renderDisguises());
    safe('renderAssets',         () => ICA_RENDER.renderAssets());
    safe('renderFinance',        () => ICA_RENDER.renderFinance());
    safe('renderFacilities',     () => ICA_RENDER.renderFacilities());
    safe('renderSetbacks',       () => ICA_RENDER.renderSetbacks());
    safe('renderPersonae',       () => ICA_RENDER.renderPersonae());
    safe('renderProvidence',     () => ICA_RENDER.renderProvidence());
    safe('renderTargets',        () => ICA_RENDER.renderTargets());
    safe('renderVault',          () => ICA_RENDER.renderVault());

    /* 侧栏计数 */
    const setN = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    setN('n-agents',    (typeof ICA_AGENTS !== 'undefined' ? ICA_AGENTS.length : '—'));
    setN('n-contracts', (typeof ICA_CONTRACTS !== 'undefined' ? ICA_CONTRACTS.length : '—'));
    setN('n-locations', (typeof ICA_LOCATIONS !== 'undefined' ? ICA_LOCATIONS.length : '—'));
    setN('n-gear',      (typeof ICA_GEAR !== 'undefined' ? ICA_GEAR.length : '—'));
    setN('n-timeline',  (typeof ICA_TIMELINE !== 'undefined' ? ICA_TIMELINE.length : '—'));
    setN('n-poisons',   (typeof ICA_POISONS !== 'undefined' ? ICA_POISONS.length : '—'));
    setN('n-disguises', (typeof ICA_DISGUISES !== 'undefined' ? ICA_DISGUISES.length : '—'));
    setN('n-assets',    (typeof ICA_ASSETS !== 'undefined' ? ICA_ASSETS.length : '—'));
    setN('n-finance',   (typeof ICA_FINANCE !== 'undefined' ? ICA_FINANCE.length : '—'));
    setN('n-facilities',(typeof ICA_FACILITIES !== 'undefined' ? ICA_FACILITIES.length : '—'));
    setN('n-setbacks',  (typeof ICA_SETBACKS !== 'undefined' ? ICA_SETBACKS.length : '—'));
    setN('n-personae',  (typeof ICA_PERSONAE !== 'undefined' ? ICA_PERSONAE.length : '—'));
    setN('n-providence',(typeof ICA_PROVIDENCE !== 'undefined' ? ICA_PROVIDENCE.operatives.length + ICA_PROVIDENCE.heralds.length + ICA_PROVIDENCE.leaders.length : '—'));
    setN('n-targets',   (typeof ICA_TARGETS !== 'undefined' ? ICA_TARGETS.reduce((s, g) => s + g.missions.reduce((a, m) => a + m.targets.length, 0), 0) : '—'));

    /* 概览页动态元素 */
    ICA_RENDER.startSyslog($('#syslog'));
    ICA_RENDER.renderOps();

    /* ---------- 初始层级 ----------
       规则：带视图 hash 一律直接进终端并落在该视图；无 hash 时，
       只有「从未做过选择」的纯新访客才看到准入终端。
       这里的 setLayer 一律 remember=false —— 初始展示不是用户的选择，
       不能写存储，否则会污染下一次启动的判断。                        */
    const wantView = (location.hash || '').replace('#', '');
    const hasHash = !!wantView;
    let stored = null;
    try { stored = localStorage.getItem('ica-layer'); } catch (e) {}

    if (hasHash) {
      /* 深链接 / 刷新带视图 hash → 直接落地，不被准入终端拦住 */
      setLayer('terminal', false);
      bootHide();
      route(wantView);
      revealNow();
    } else if (stored === null) {
      /* 纯新访客：准入终端。背景先铺伪装官网，boot 覆盖其上。 */
      setLayer('corporate', false);
      route('overview');
      revealNow();
      boot();
    } else {
      /* 做过选择的老访客、不带 hash 回来 → 停在伪装官网 */
      setLayer('corporate', false);
      route('overview');
      bootHide();
      revealNow();
    }
  }

  /* 彻底收起准入终端。必须走 class 而不是 inline style：
     #boot 的 display 由 CSS 的 ID 选择器给出，inline 的 display:none 被它压住。 */
  function bootHide() {
    const b = $('#boot');
    if (!b) return;
    b.classList.add('is-gone', 'is-hidden');
    document.body.classList.remove('is-locked');
  }

  /* ---------- 概览页打字机 ---------- */
  let heroTyped = false;
  function startHeroType() {
    if (heroTyped) return;
    const el = $('#hero-type');
    if (!el) return;
    heroTyped = true;
    const text = el.dataset.text || el.textContent;
    if (reduceMotion) { el.textContent = text; return; }
    let i = 0;
    const speed = 26;
    const step = () => {
      if (document.body.dataset.layer !== 'terminal') { setTimeout(step, 400); return; }
      if (i >= text.length) { el.parentElement.classList.add('type-done'); return; }
      el.textContent = text.slice(0, ++i);
      if (i % 3 === 0) ICA_AUDIO.typeTick();
      setTimeout(step, speed + Math.random() * 34);
    };
    el.textContent = '';
    setTimeout(step, 500);
  }

  return { init, boot, route, openModal, closeModal, log, enterTerminal, exitTerminal, revealNow };
})();

document.addEventListener('DOMContentLoaded', () => ICA_APP.init());
