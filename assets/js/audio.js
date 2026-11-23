/* ==========================================================================
   audio.js — 环境音与音效引擎
   全部使用 Web Audio API 实时合成，不加载任何音频文件。
   ========================================================================== */

const ICA_AUDIO = (() => {
  let ctx = null, master = null, ambient = null, ambientOn = false, enabled = false;

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    return ctx;
  }

  /* ---------- 白噪声缓冲 ---------- */
  let noiseBuf = null;
  function noise() {
    if (!noiseBuf) {
      const len = ctx.sampleRate * 2;
      noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf; src.loop = true;
    return src;
  }

  /* ---------- 环境音：低频机房嗡鸣 + 极轻噪声 ---------- */
  function buildAmbient() {
    const out = ctx.createGain();
    out.gain.value = 0.16;

    // 低频嗡鸣 55Hz + 82.5Hz（纯五度）
    [55, 82.5, 110].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = 'sine'; o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = [0.5, 0.26, 0.12][i];
      o.connect(g); g.connect(out); o.start();
    });

    // 极轻的高频噪声（模拟通风/电子底噪）
    const n = noise();
    const nf = ctx.createBiquadFilter();
    nf.type = 'bandpass'; nf.frequency.value = 1400; nf.Q.value = 0.7;
    const ng = ctx.createGain(); ng.gain.value = 0.035;
    n.connect(nf); nf.connect(ng); ng.connect(out);
    n.start();

    // 缓慢的 LFO 让它有呼吸感
    const lfo = ctx.createOscillator();
    lfo.type = 'sine'; lfo.frequency.value = 0.07;
    const lg = ctx.createGain(); lg.gain.value = 0.045;
    lfo.connect(lg); lg.connect(out.gain); lfo.start();

    out.connect(master);
    return out;
  }

  function toggle() {
    if (!ensure()) return false;
    if (ctx.state === 'suspended') ctx.resume();
    if (!ambient) ambient = buildAmbient();
    ambientOn = !ambientOn;
    enabled = ambientOn;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setTargetAtTime(ambientOn ? 0.9 : 0, now, 0.35);
    return ambientOn;
  }

  function isOn() { return ambientOn; }

  /* ---------- 短音效 ---------- */
  function tone(freq, dur, type, vol, slideTo) {
    if (!enabled || !ctx) return;
    const o = ctx.createOscillator();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, ctx.currentTime);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, ctx.currentTime + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(vol == null ? 0.14 : vol, ctx.currentTime + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + dur + 0.02);
  }

  function blip()   { tone(880, 0.045, 'square', 0.055); }
  function key()    { tone(1500 + Math.random() * 500, 0.012, 'square', 0.022); }
  function click()  { tone(420, 0.07, 'triangle', 0.1, 180); }
  function confirm(){ tone(660, 0.09, 'sine', 0.1); setTimeout(() => tone(990, 0.14, 'sine', 0.09), 80); }
  function deny()   { tone(220, 0.16, 'sawtooth', 0.09, 110); }
  function open()   { tone(300, 0.1, 'sine', 0.08, 640); }
  function boot()   { tone(120, 0.7, 'sine', 0.09, 480); }

  /* 打字机：给一段文字逐字配音 */
  function typeTick() { tone(1200 + Math.random() * 900, 0.014, 'square', 0.018); }

  return { toggle, isOn, blip, key, click, confirm, deny, open, boot, typeTick,
           get ctx() { return ctx; } };
})();
