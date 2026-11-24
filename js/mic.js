/* Microfoon: zichtbare terugkoppeling tijdens het inspreken en een microfoontest voor Instellingen. */
(function (S) {
  'use strict';
  const { U, Speech } = S;
  const h = U.h;

  const STATE_TXT = {
    starting: 'Microfoon start…',
    listening: 'Ik luister… spreek nu (in het Spaans)',
    sound: 'Ik hoor geluid…',
    speech: 'Ik hoor je! Ga door…',
    stopping: 'Even afronden…'
  };

  /* Paneel dat laat zien dat de microfoon luistert, wat er tot nu toe herkend is, en wat je moet doen als het misgaat.
     Gebruik: const m = Mic.live(); m.el ergens neerzetten; Speech.listen(m.hooks()) … m.done(tekst) of m.fail(fout). */
  function live(opt = {}) {
    const wave = h('div', { class: 'mic-wave', 'aria-hidden': 'true' }, [0, 1, 2, 3, 4].map(() => h('i')));
    const label = h('span', { class: 'mic-label' });
    const text = h('div', { class: 'mic-text', lang: 'es' });
    const help = h('div', { class: 'mic-help small' });
    const tip = h('div', { class: 'mic-tip small muted' }, opt.tip || 'Klaar met praten? Tik nog eens op 🎙️, of wacht even: na een korte stilte gaat hij vanzelf verder.');
    const el = h('div', { class: 'mic-live', role: 'status', 'aria-live': 'polite', hidden: true }, h('div', { class: 'mic-row' }, wave, label), text, tip, help);
    let bumpT = null;
    const set = s => {
      el.hidden = false; el.className = 'mic-live st-' + s;
      label.textContent = STATE_TXT[s] || '';
      tip.hidden = s === 'starting';
    };
    const api = {
      el,
      start() { text.textContent = ''; help.innerHTML = ''; set('starting'); },
      state: set,
      interim(t) {
        text.textContent = t ? '«' + t + '»' : '';
        // elk stukje herkende tekst laat de golf even opspringen
        el.classList.add('bump'); clearTimeout(bumpT); bumpT = setTimeout(() => el.classList.remove('bump'), 250);
      },
      done(t, note) {
        el.className = 'mic-live st-done'; el.hidden = false;
        label.textContent = note || '✅ Herkend';
        text.textContent = t ? '«' + t + '»' : ''; tip.hidden = true; help.innerHTML = '';
      },
      fail(err) {
        el.className = 'mic-live st-error'; el.hidden = false;
        label.textContent = '⚠️ ' + (err && err.message || 'Er ging iets mis met de microfoon');
        tip.hidden = true; help.innerHTML = '';
        if (err && err.help) help.append(h('p', null, err.help));
        if (opt.testLink !== false) help.append(h('a', { href: '#/ajustes', onclick: () => { S.micTestFocus = true; } }, '🎙️ Doe de microfoontest in Instellingen ›'));
        help.append(logBox());
      },
      hide() { el.hidden = true; },
      hooks(extra = {}) { return Object.assign({ onState: set, onInterim: t => api.interim(t) }, extra); }
    };
    return api;
  }

  /* Uitklapper met wat de microfoon de laatste minuut deed (handig om te laten zien als het niet werkt). */
  function logBox() {
    const pre = h('pre', { class: 'mic-log small' });
    const d = h('details', { class: 'mic-log-box' }, h('summary', null, '🔎 Wat gebeurde er?'), pre);
    const fill = () => { pre.textContent = 'versie ' + ((self.SPT_VERSION && self.SPT_VERSION.number) || '?') + '\n' + Speech.micLogText(); };
    fill(); d.addEventListener('toggle', fill);
    return d;
  }

  /* ---------- Microfoontest (Instellingen) ---------- */
  function envLine() {
    const ua = navigator.userAgent || '';
    const dev = Speech.isIOS() ? (/iPhone|iPod/.test(ua) ? 'iPhone' : 'iPad') : /Android/.test(ua) ? 'Android' : /Mac/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : 'computer';
    const br = /CriOS|Chrome/.test(ua) && !/Edg/.test(ua) ? 'Chrome' : /Edg/.test(ua) ? 'Edge' : /FxiOS|Firefox/.test(ua) ? 'Firefox' : /Safari/.test(ua) ? 'Safari' : 'browser';
    return [dev + ' · ' + br + (Speech.isStandalone() ? ' · vanaf beginscherm' : ''),
      'spraakherkenning ' + (Speech.canListen() ? '✅ beschikbaar' : '❌ niet beschikbaar'),
      'microfoon ' + (navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? '✅' : '❓')].join(' · ');
  }

  function testCard() {
    const meter = h('div', { class: 'mic-meter', 'aria-hidden': 'true' }, h('i'));
    const fill = meter.firstChild;
    const levelOut = h('p', { class: 'small' });
    const panel = live({ tip: 'Tik nog eens op de knop als je klaar bent.' });
    const recOut = h('p', { class: 'small' });
    const PHRASE = 'Hola Lupe, ¿cómo estás?';

    // Stap 1: hoort de microfoon geluid? (los van spraakherkenning, met een echte niveaumeter)
    const levelBtn = h('button', { class: 'btn ghost', type: 'button' }, '1️⃣ Hoort de microfoon mij?');
    levelBtn.onclick = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { levelOut.textContent = '❓ Deze browser laat geen geluidsmeting toe. Ga door naar stap 2.'; return; }
      Speech.stop(); Speech.abortListening();
      levelBtn.disabled = true; levelOut.textContent = 'Microfoon openen… (sta de microfoon toe als erom gevraagd wordt)';
      let stream = null, ctx = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === 'suspended') await ctx.resume();
        const an = ctx.createAnalyser(); an.fftSize = 1024;
        ctx.createMediaStreamSource(stream).connect(an);
        const buf = new Float32Array(an.fftSize);
        let max = 0; const t0 = Date.now();
        meter.classList.add('on');
        levelOut.textContent = '🗣️ Zeg iets hardop… (5 seconden)';
        await new Promise(res => {
          const tick = () => {
            an.getFloatTimeDomainData(buf);
            let sum = 0; for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
            const lvl = Math.min(1, Math.sqrt(sum / buf.length) * 6);
            max = Math.max(max, lvl);
            fill.style.width = Math.round(lvl * 100) + '%';
            if (Date.now() - t0 < 5000) requestAnimationFrame(tick); else res();
          };
          tick();
        });
        levelOut.textContent = max > 0.15 ? '✅ De microfoon hoort je goed. Ga door naar stap 2.'
          : max > 0.03 ? '〰️ De microfoon hoort je, maar zacht. Praat wat harder of dichterbij. Ga daarna door naar stap 2.'
            : '⚠️ De microfoon vangt geen geluid op. Gebruikt een andere app de microfoon, zit er een hoes of koptelefoon voor, of staat het geluid van een headset op dempen?';
      } catch (e) {
        const err = Speech.micError(e && (e.name === 'NotAllowedError' || e.name === 'SecurityError') ? 'not-allowed' : e && e.name === 'NotFoundError' ? 'audio-capture' : 'start-failed', e && e.message);
        levelOut.textContent = '⚠️ ' + err.message + ' ' + err.help;
      } finally {
        try { stream && stream.getTracks().forEach(t => t.stop()); } catch (e) { /* */ }
        try { ctx && ctx.close(); } catch (e) { /* */ }
        meter.classList.remove('on'); fill.style.width = '0';
        levelBtn.disabled = false;
      }
    };

    // Stap 2: herkent de spraakherkenning Spaans? Laat live zien wat hij verstaat.
    const recBtn = h('button', { class: 'btn primary', type: 'button' }, '2️⃣ Herkent hij mijn Spaans?');
    recBtn.onclick = async () => {
      if (Speech.isListening()) { Speech.stopListening(); return; }
      if (!Speech.canListen()) { panel.fail(Speech.micError('unsupported')); return; }
      recOut.textContent = 'Zeg: «' + PHRASE + '»';
      recBtn.textContent = '■ Klaar met praten'; recBtn.classList.add('rec');
      panel.start();
      try {
        const alts = await Speech.listen(panel.hooks());
        const best = alts.map(a => [a, S.check.similarity(a, PHRASE)]).sort((a, b) => b[1] - a[1])[0];
        panel.done(best[0]);
        const pct = Math.round(best[1] * 100);
        recOut.textContent = pct >= 60 ? '✅ Alles werkt! Hij verstond je (' + pct + '% gelijk). Je kunt nu met Lupe praten en spreekoefeningen doen.'
          : '✅ De herkenning werkt (hij hoorde iets), maar verstond iets anders dan de zin (' + pct + '%). Spreek rustig en duidelijk; dat is ook goede uitspraakoefening.';
      } catch (e) { panel.fail(e); recOut.textContent = ''; }
      recBtn.textContent = '2️⃣ Herkent hij mijn Spaans?'; recBtn.classList.remove('rec');
    };

    const card = h('div', { class: 'card form mic-test', id: 'mic-test' },
      h('p', { class: 'small muted' }, 'Praat je met Lupe of doe je een spreekoefening en gebeurt er niets? Met deze test zie je waar het zit.'),
      h('p', { class: 'small mic-env' }, envLine()),
      levelBtn, meter, levelOut,
      recBtn, panel.el, recOut, logBox(),
      h('details', { class: 'small' }, h('summary', null, 'Werkt het niet op je iPad of iPhone?'),
        h('ol', { class: 'steps-list' },
          h('li', null, 'Zet ', h('b', null, 'Dicteren'), ' aan: Instellingen › Algemeen › Toetsenbord › Dicteer.'),
          h('li', null, 'Geef Safari de ', h('b', null, 'microfoon'), ': Instellingen › Apps › Safari › Microfoon › Sta toe (of Vraag).'),
          h('li', null, 'Zet ', h('b', null, 'Spraakherkenning'), ' aan voor Safari: Instellingen › Privacy en beveiliging › Spraakherkenning.'),
          h('li', null, 'Voeg het toetsenbord ', h('b', null, 'Spaans (Mexico)'), ' toe: Instellingen › Algemeen › Toetsenbord › Toetsenborden.'),
          h('li', null, 'Gebruik je de app vanaf het beginscherm en blijft het stil? Open hem dan eens in Safari zelf.'),
          h('li', null, 'Sluit daarna de app helemaal af (omhoog vegen) en open hem opnieuw.'))));
    return card;
  }

  S.Mic = { logBox, live, testCard };
})(window.SPT = window.SPT || {});
