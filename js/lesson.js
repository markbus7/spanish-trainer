/* Lesmotor: toont items één voor één, controleert antwoorden en geeft feedback. */
(function (S) {
  'use strict';
  const { U, Speech, Sound } = S;
  const h = U.h;

  const PRAISE = ['¡Muy bien!', '¡Excelente!', '¡Eso es!', '¡Perfecto!', '¡Bien hecho!', '¡Genial!', '¡Correcto!', '¡Así se hace!'];
  const OOPS = ['Casi…', 'No exactamente', 'Ups…', 'Todavía no'];

  function esMode() {
    const e = S.Store.state.settings.explain;
    if (e === 'es') return true;
    if (e === 'nl' || e === 'mix') return false;
    const cur = S.C.get(S.Store.state.current);
    return !!(cur && cur.level >= 'B1');
  }
  const T_ = {
    check: ['Controleer', 'Comprobar'], next: ['Verder', 'Continuar'], skip: ['Overslaan', 'Saltar'], gotit: ['Begrepen', 'Entendido'],
    choose: ['Kies het juiste antwoord', 'Elige la respuesta correcta'], fill: ['Vul in', 'Completa'], translate: ['Vertaal naar het Spaans', 'Traduce al español'],
    order: ['Zet de zin in de juiste volgorde', 'Ordena la frase'], match: ['Koppel de paren', 'Une las parejas'], listen: ['Luister en typ wat je hoort', 'Escucha y escribe'],
    speak: ['Zeg het hardop', 'Dilo en voz alta'], conj: ['Vervoeg het werkwoord', 'Conjuga el verbo'], type: ['Typ in het Spaans', 'Escribe en español'],
    meaning: ['Wat betekent dit?', '¿Qué significa?'], howsay: ['Hoe zeg je dit in het Spaans?', '¿Cómo se dice en español?'], hear: ['Wat hoor je?', '¿Qué escuchas?'],
    newword: ['Nieuw woord', 'Palabra nueva'], correct: ['Juiste antwoord', 'Respuesta correcta'], write: ['Schrijfopdracht', 'Tarea de escritura']
  };
  function T(k) { const v = T_[k]; return v ? v[esMode() ? 1 : 0] : k; }
  const Q_MAP = { 'Wat betekent dit?': 'meaning', 'Hoe zeg je dit in het Spaans?': 'howsay', 'Wat hoor je?': 'hear', 'Typ in het Spaans': 'type', 'Vertaal naar het Spaans': 'translate', 'Vervoeg': 'conj' };

  function speakBtn(text, opt = {}) {
    if (!Speech.canSpeak() || !text) return null;
    return h('button', { class: 'icon-btn speak' + (opt.big ? ' big' : ''), type: 'button', title: 'Beluister', 'aria-label': 'Beluister', onclick: (e) => { e.stopPropagation(); Speech.say(text, opt); } }, opt.slow ? '🐢' : '🔊');
  }
  function accentBar(input) {
    const chars = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];
    return h('div', { class: 'accent-bar', role: 'toolbar', 'aria-label': 'Speciale tekens' },
      chars.map(c => h('button', { type: 'button', tabindex: '-1', onmousedown: e => e.preventDefault(), onclick: () => {
        const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? input.value.length;
        input.value = input.value.slice(0, s) + c + input.value.slice(e);
        input.focus(); input.setSelectionRange(s + 1, s + 1); input.dispatchEvent(new Event('input'));
      } }, c)));
  }
  function sentenceEl(s, fillWith) {
    const el = h('div', { class: 'sentence' });
    const partsArr = String(s).split('___');
    partsArr.forEach((p, i) => {
      el.append(p);
      if (i < partsArr.length - 1) el.append(h('span', { class: 'blank' + (fillWith ? ' filled' : '') }, fillWith || ' '));
    });
    return el;
  }
  function textInput(ph) {
    return h('input', { class: 'answer-input', type: 'text', autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'es', placeholder: ph || 'Typ je antwoord…', enterkeyhint: 'done' });
  }

  /* ================== Renderers ================== */
  const R = {};

  R.card = (it, ctx) => {
    const w = it.word;
    setTimeout(() => Speech.say(w.es), 250);
    ctx.free();
    return h('div', { class: 'card-word' },
      h('div', { class: 'eyebrow' }, '✨ ' + T('newword')),
      h('div', { class: 'big-es', lang: 'es' }, w.es, speakBtn(w.es)),
      h('div', { class: 'big-nl' }, w.nl),
      w.note ? h('div', { class: 'note' }, '🌎 ' + w.note) : null,
      h('div', { class: 'row gap center' }, speakBtn(w.es, { slow: true })));
  };

  R.info = (it, ctx) => {
    ctx.free(T('gotit'));
    if (it.culture) {
      return h('div', { class: 'info' }, h('div', { class: 'eyebrow' }, '🌎 Cultuur & regio'), h('h2', null, it.culture.t), h('div', { class: 'prose', html: it.culture.html }));
    }
    const g = it.grammar;
    return h('div', { class: 'info' }, grammarBlock(g));
  };
  function grammarBlock(g) {
    const es = esMode();
    const wrap = h('div', { class: 'grammar' },
      h('div', { class: 'eyebrow' }, '🧩 ' + (g.es || 'Gramática')),
      h('h2', null, g.t));
    if (g.sum && es) wrap.append(h('div', { class: 'sum' }, '🇪🇸 ' + g.sum));
    const body = h('div', { class: 'prose', html: g.html });
    if (es) { const d = h('details', null, h('summary', null, 'Uitleg in het Nederlands'), body); wrap.append(d); } else wrap.append(body);
    if (g.table) {
      const tb = h('table', { class: 'gtable' });
      g.table.forEach((row, ri) => tb.append(h('tr', null, row.map(c => h(ri === 0 ? 'th' : 'td', { html: c })))));
      wrap.append(h('div', { class: 'table-wrap' }, tb));
    }
    if (g.ex) wrap.append(h('div', { class: 'examples' }, g.ex.map(([e, n]) => h('div', { class: 'ex-line' }, speakBtn(e), h('div', null, h('div', { class: 'es', lang: 'es' }, e), h('div', { class: 'nl' }, n))))));
    if (g.sum && !es) wrap.append(h('div', { class: 'sum' }, '🇪🇸 ' + g.sum));
    return wrap;
  }
  S.grammarBlock = grammarBlock;

  R.dialogue = (it, ctx) => {
    const d = it.dialogue; ctx.free();
    const set = S.Store.state.settings;
    const speakers = [...new Set(d.lines.map(l => l[0]))];
    let showAll = false;
    const lines = d.lines.map(([who, es, nl]) => {
      const tr = h('div', { class: 'nl hidden' }, nl);
      const esEl = h('div', { class: 'es', lang: 'es' }, es);
      const extra = h('div', { class: 'rp-turn' });
      const line = h('div', { class: 'dl ' + (speakers.indexOf(who) % 2 ? 'right' : 'left') },
        h('div', { class: 'avatar', title: who }, who[0]),
        h('div', { class: 'bubble', onclick: () => { if (line.classList.contains('mine')) return; tr.classList.toggle('hidden'); } },
          h('div', { class: 'who' }, who), esEl, tr, extra),
        speakBtn(es));
      Object.assign(line, { _tr: tr, _es: es, _nl: nl, _who: who, _esEl: esEl, _extra: extra });
      return line;
    });
    const list = h('div', { class: 'dl-list' }, lines);

    /* Eerst luisteren: de Spaanse tekst is wazig tot je hem zelf zichtbaar maakt. */
    const listenFirst = Speech.canSpeak() && set.listenFirst !== false;
    const intro = h('p', { class: 'muted small' });
    const maskBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => mask(!list.classList.contains('masked')) });
    function mask(on) {
      list.classList.toggle('masked', on);
      maskBtn.textContent = on ? '👀 Toon de tekst' : '🎧 Verberg de tekst';
      intro.textContent = on ? '🎧 Luister eerst zonder tekst. Hoeveel versta je? Daarna maak je de tekst zichtbaar.' : 'Lees en luister. Tik op een zin voor de vertaling.';
    }
    mask(listenFirst);

    let playing = false;
    async function playAll() {
      playing = true; playBtn.textContent = '⏸ Stop';
      for (const l of lines) { if (!playing) break; l.classList.add('active'); l.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); await Speech.say(l._es); l.classList.remove('active'); }
      playing = false; playBtn.textContent = '▶ Alles afspelen';
    }
    const playBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => {
      if (playing) { playing = false; Speech.stop(); return; }
      if (role.active) stopRole();
      playAll();
    } }, '▶ Alles afspelen');
    const trBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => { showAll = !showAll; lines.forEach(l => l._tr.classList.toggle('hidden', !showAll)); trBtn.textContent = showAll ? '🙈 Verberg vertaling' : '👁 Toon vertaling'; } }, '👁 Toon vertaling');

    /* Rollenspel: jij speelt één persoon. De app speelt de anderen; jouw zinnen spreek je zelf in. */
    const role = { active: false, me: null, scores: [] };
    const rolePanel = h('div', { class: 'rp-panel hidden' });
    const roleBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => {
      if (role.active) { stopRole(); return; }
      rolePanel.innerHTML = '';
      rolePanel.append(h('div', { class: 'small' }, h('b', null, '🎭 Welke rol speel jij?'), ' Jouw zinnen spreek je zelf in, de app speelt de rest.'),
        h('div', { class: 'row gap wrap' }, speakers.map(w => h('button', { class: 'btn primary', type: 'button', onclick: () => startRole(w) }, w)),
          h('button', { class: 'btn ghost', type: 'button', onclick: () => rolePanel.classList.add('hidden') }, 'Annuleer')));
      rolePanel.classList.remove('hidden');
    } }, '🎭 Speel een rol');
    function resetLines() {
      lines.forEach(l => { l.classList.remove('mine', 'active', 'said'); l._extra.innerHTML = ''; l._esEl.classList.remove('hide-es'); });
    }
    function stopRole() {
      role.active = false; Speech.stop(); Speech.stopListening(); resetLines();
      roleBtn.textContent = '🎭 Speel een rol'; rolePanel.classList.add('hidden');
      if (role.resolve) { role.resolve(null); role.resolve = null; }
    }
    async function startRole(me) {
      playing = false; Speech.stop();
      Object.assign(role, { active: true, me, scores: [] });
      mask(false); resetLines();
      roleBtn.textContent = '⏹ Stop rollenspel';
      rolePanel.innerHTML = ''; rolePanel.append(h('div', { class: 'small' }, '🎭 Jij bent ', h('b', null, me), '. Bij jouw beurt zie je wat je moet zeggen in het Nederlands. Tik op de microfoon en zeg het in het Spaans.'));
      lines.forEach(l => { if (l._who === me) { l.classList.add('mine'); l._esEl.classList.add('hide-es'); l._tr.classList.remove('hidden'); } });
      for (const l of lines) {
        if (!role.active) return;
        l.classList.add('active'); l.scrollIntoView({ block: 'center', behavior: 'smooth' });
        if (l._who === me) {
          const score = await myTurn(l);
          if (!role.active) return;
          if (score !== null) role.scores.push(score);
          l._esEl.classList.remove('hide-es'); l.classList.add('said');
        } else await Speech.say(l._es);
        l.classList.remove('active');
      }
      role.active = false; roleBtn.textContent = '🎭 Nog een keer';
      const n = role.scores.length, avg = n ? Math.round(role.scores.reduce((a, b) => a + b, 0) / n) : 0;
      rolePanel.innerHTML = '';
      rolePanel.append(h('div', null, h('b', null, n ? (avg >= 80 ? '🎉 ¡Excelente! ' : avg >= 60 ? '👍 ¡Bien hecho! ' : '💪 ¡Sigue practicando! ') : '🎭 Klaar. '),
        n ? `Je zei ${n} zinnen, gemiddeld ${avg}% goed verstaan.` : 'Je hebt geen zinnen ingesproken.'),
        h('div', { class: 'row gap wrap' }, speakers.filter(w => w !== me).map(w => h('button', { class: 'btn ghost', type: 'button', onclick: () => startRole(w) }, 'Speel nu ' + w))));
      rolePanel.scrollIntoView({ block: 'center', behavior: 'smooth' });
      if (n) { S.Store.save(); if (avg >= 80) Sound.good(); }
    }
    function myTurn(l) {
      return new Promise(resolve => {
        role.resolve = resolve;
        let tries = 0;
        const status = h('div', { class: 'small muted' }, 'Jouw beurt: tik op 🎙️ en zeg het in het Spaans.');
        const finish = score => { role.resolve = null; l._extra.innerHTML = ''; if (score !== null) l._extra.append(h('div', { class: 'small rp-score' + (score >= 75 ? ' good' : '') }, (score >= 75 ? '✅ ' : '〰️ ') + score + '%')); resolve(score); };
        const mic = h('button', { class: 'mic mic-sm', type: 'button', 'aria-label': 'Start opnemen', onclick: async e => {
          e.stopPropagation();
          if (mic.classList.contains('rec')) { Speech.stopListening(); return; }
          mic.classList.add('rec'); status.textContent = 'Ik luister…';
          try {
            const alts = await Speech.listen();
            mic.classList.remove('rec'); tries++;
            const best = alts.map(a => [a, S.check.similarity(a, l._es)]).sort((a, b) => b[1] - a[1])[0];
            const score = Math.round(best[1] * 100);
            if (best[1] >= 0.75 || tries >= 3) { S.Store.skill('speak', best[1] >= 0.75); if (best[1] >= 0.75) Sound.good(); else Sound.bad(); finish(score); }
            else { Sound.bad(); status.textContent = `Ik hoorde «${best[0]}» (${score}%). Probeer het nog eens (${tries}/3).`; }
          } catch (err) { mic.classList.remove('rec'); status.textContent = err.message; }
        } }, '🎙️');
        const hint = h('button', { class: 'btn ghost small', type: 'button', onclick: e => { e.stopPropagation(); l._esEl.classList.remove('hide-es'); Speech.say(l._es); } }, '💡 Voorzeggen');
        const skip = h('button', { class: 'btn ghost small', type: 'button', onclick: e => { e.stopPropagation(); finish(null); } }, 'Overslaan');
        l._extra.append(h('div', { class: 'row gap wrap rp-ctrl' }, mic, hint, skip), status);
      });
    }

    ctx.onLeave(() => { playing = false; if (role.active) stopRole(); Speech.stop(); });
    return h('div', { class: 'dialogue' },
      h('div', { class: 'eyebrow' }, '💬 ' + (d.place || '')), h('h2', null, d.t),
      intro,
      h('div', { class: 'row gap wrap' }, Speech.canSpeak() ? playBtn : null, Speech.canSpeak() ? maskBtn : null, trBtn, Speech.canSpeak() && Speech.canListen() ? roleBtn : null),
      rolePanel, list);
  };

  R.reading = (it, ctx) => {
    const r = it.reading; ctx.free();
    let showAll = false;
    const paras = r.p.map(([es, nl]) => {
      const tr = h('div', { class: 'nl hidden' }, nl);
      const p = h('div', { class: 'rd-p' }, h('div', { class: 'rd-text', onclick: () => tr.classList.toggle('hidden') }, h('p', { class: 'es', lang: 'es' }, es), tr), speakBtn(es));
      p._tr = tr; p._es = es; return p;
    });
    let playing = false;
    const playBtn = h('button', { class: 'btn ghost', type: 'button', onclick: async () => {
      if (playing) { playing = false; Speech.stop(); return; }
      playing = true; playBtn.textContent = '⏸ Stop';
      for (const p of paras) { if (!playing) break; p.classList.add('active'); p.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); await Speech.say(p._es); p.classList.remove('active'); }
      playing = false; playBtn.textContent = '▶ Voorlezen';
    } }, '▶ Voorlezen');
    const trBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => { showAll = !showAll; paras.forEach(p => p._tr.classList.toggle('hidden', !showAll)); trBtn.textContent = showAll ? '🙈 Verberg vertaling' : '👁 Toon vertaling'; } }, '👁 Toon vertaling');
    ctx.onLeave(() => { playing = false; Speech.stop(); });
    return h('div', { class: 'reading' },
      h('div', { class: 'eyebrow' }, '📖 ' + (r.type || 'Lectura')), h('h2', null, r.t),
      h('p', { class: 'muted small' }, 'Lees eerst zonder vertaling. Tik op een alinea als je vastloopt.'),
      h('div', { class: 'row gap wrap' }, Speech.canSpeak() ? playBtn : null, trBtn),
      h('div', { class: 'rd-body' }, paras),
      r.gl && r.gl.length ? h('details', { class: 'rd-gl' }, h('summary', null, '📝 Woordjes bij de tekst'), h('ul', null, r.gl.map(([es, nl]) => h('li', null, h('b', { lang: 'es' }, es), ' — ' + nl)))) : null);
  };

  R.mc = (it, ctx) => {
    const qKey = Q_MAP[it.q];
    const head = it.sentence ? T('fill') : (qKey ? T(qKey) : null);
    const wrap = h('div', { class: 'mc' });
    if (head) wrap.append(h('div', { class: 'instr' }, head));
    if (it.q && !qKey) wrap.append(h('div', { class: 'question' }, it.q));
    if (it.audio) {
      setTimeout(() => Speech.say(it.audio), 250);
      wrap.append(h('div', { class: 'row gap center' }, speakBtn(it.audio, { big: true }), speakBtn(it.audio, { slow: true })));
    }
    if (it.prompt) wrap.append(h('div', { class: 'prompt' + (it.speakPrompt ? ' es' : '') }, it.prompt, it.speakPrompt ? speakBtn(it.prompt) : null));
    if (it.speakPrompt) setTimeout(() => Speech.say(it.prompt), 250);
    let sent = null;
    if (it.sentence) { sent = sentenceEl(it.sentence); wrap.append(sent); }
    if (it.h) wrap.append(h('div', { class: 'hint' }, '(' + it.h + ')'));
    if (it.nl && it.sentence) wrap.append(h('div', { class: 'nl-hint' }, it.nl));
    const opts = h('div', { class: 'options' + (it.options.some(o => o.length > 28) ? ' stack' : '') });
    const btns = it.options.map((o, i) => h('button', { class: 'opt', type: 'button', 'data-k': i + 1, onclick: () => choose(o, btns[i]) }, h('span', { class: 'k' }, i + 1), h('span', { lang: 'es' }, o)));
    opts.append(...btns); wrap.append(opts);
    function choose(o, b) {
      if (ctx.answered()) return;
      const ok = o === it.answer;
      btns.forEach(x => { x.disabled = true; if (x.lastChild.textContent === it.answer) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      if (sent) { const bl = sent.querySelector('.blank'); if (bl) { bl.textContent = it.answer; bl.classList.add('filled'); } }
      ctx.submit({ ok, user: o, expected: it.answer, x: it.x });
    }
    ctx.keys = k => { const n = +k; if (n >= 1 && n <= btns.length) btns[n - 1].click(); };
    ctx.auto();
    return wrap;
  };

  R.type = (it, ctx) => {
    const qKey = Q_MAP[it.q];
    const wrap = h('div', { class: 'type' });
    wrap.append(h('div', { class: 'instr' }, it.sentence ? T('fill') : it.conj ? T('conj') : (qKey ? T(qKey) : T('type'))));
    if (it.conj) {
      wrap.append(h('div', { class: 'conj-card' },
        h('div', { class: 'verb', lang: 'es' }, it.prompt), h('div', { class: 'sub' }, it.sub),
        h('div', { class: 'person' }, it.person)));
    } else if (it.prompt) wrap.append(h('div', { class: 'prompt' }, it.prompt));
    let sent = null;
    if (it.sentence) { sent = sentenceEl(it.sentence); wrap.append(sent); }
    if (it.h) wrap.append(h('div', { class: 'hint' }, '(' + it.h + ')'));
    if (it.nl && it.sentence) wrap.append(h('div', { class: 'nl-hint' }, it.nl));
    const inp = textInput(it.conj ? 'vervoeging…' : undefined);
    inp.addEventListener('input', () => ctx.can(inp.value.trim().length > 0));
    wrap.append(inp, accentBar(inp));
    setTimeout(() => inp.focus({ preventScroll: true }), 80);
    ctx.evaluate = () => {
      const user = inp.value.trim();
      let r = S.check.check(user, it.answers, { noTypo: it.noTypo });
      if (!r.ok && it.articleOptional) {
        const noArt = it.answers.map(a => a.replace(S.Gen.ART, ''));
        const r2 = S.check.check(user.replace(S.Gen.ART, ''), noArt, { noTypo: it.noTypo });
        if (r2.ok && !S.Gen.ART.test(user) && S.Gen.ART.test(it.answers[0])) r = { ok: true, warn: 'article', best: it.answers.find(a => a.replace(S.Gen.ART, '') === r2.best) || it.answers[0] };
      }
      inp.disabled = true;
      if (sent) { const bl = sent.querySelector('.blank'); if (bl) { bl.textContent = r.ok ? user : (r.best || it.answers[0]); bl.classList.add('filled'); } }
      return { ok: r.ok, user, expected: r.best || it.answers[0], warn: r.warn, x: it.x, alts: it.answers };
    };
    return wrap;
  };

  R.listen = (it, ctx) => {
    setTimeout(() => Speech.say(it.text), 300);
    const inp = textInput('Typ wat je hoort…');
    inp.addEventListener('input', () => ctx.can(inp.value.trim().length > 0));
    setTimeout(() => inp.focus({ preventScroll: true }), 80);
    ctx.evaluate = () => {
      const user = inp.value.trim(); inp.disabled = true;
      const r = S.check.check(user, [it.text]);
      if (r.ok) return { ok: true, user, expected: it.text, warn: r.warn, nl: it.nl };
      const sim = S.check.similarity(user, it.text);
      if (sim >= 0.88) return { ok: true, user, expected: it.text, warn: 'typo', nl: it.nl };
      return { ok: false, user, expected: it.text, nl: it.nl };
    };
    return h('div', { class: 'listen' },
      h('div', { class: 'instr' }, T('listen')),
      Speech.canSpeak() ? h('div', { class: 'row gap center' }, speakBtn(it.text, { big: true }), speakBtn(it.text, { slow: true })) : h('p', { class: 'warn' }, 'Je browser heeft geen voorleesfunctie. Lees de zin: ' + it.text),
      inp, accentBar(inp));
  };

  R.speak = (it, ctx) => {
    let tries = 0;
    const heard = h('div', { class: 'heard' });
    const wrap = h('div', { class: 'speak-ex' },
      h('div', { class: 'instr' }, T('speak')),
      h('div', { class: 'prompt es', lang: 'es' }, it.text, speakBtn(it.text)),
      h('div', { class: 'nl-hint' }, it.nl), heard);
    if (Speech.canListen()) {
      const mic = h('button', { class: 'mic', type: 'button', 'aria-label': 'Start opnemen' }, '🎙️');
      const status = h('div', { class: 'muted small center' }, 'Tik op de microfoon en spreek de zin uit');
      mic.onclick = async () => {
        if (mic.classList.contains('rec')) { Speech.stopListening(); return; }
        Speech.stop(); mic.classList.add('rec'); status.textContent = 'Ik luister…';
        try {
          const alts = await Speech.listen();
          mic.classList.remove('rec'); tries++;
          const best = alts.map(a => [a, S.check.similarity(a, it.text)]).sort((a, b) => b[1] - a[1])[0];
          heard.innerHTML = ''; heard.append(h('div', { class: 'small muted' }, 'Ik hoorde:'), h('div', { class: 'es' }, '«' + best[0] + '»'));
          const score = Math.round(best[1] * 100);
          if (best[1] >= 0.75) { status.textContent = ''; ctx.submit({ ok: true, user: best[0], expected: it.text, speakScore: score }); }
          else if (tries >= 3) { status.textContent = ''; ctx.submit({ ok: false, user: best[0], expected: it.text, speakScore: score }); }
          else { status.textContent = `Score ${score}% — probeer het nog eens (poging ${tries}/3)`; Sound.bad(); }
        } catch (e) { mic.classList.remove('rec'); status.textContent = e.message; }
      };
      wrap.append(h('div', { class: 'center' }, mic), status);
      ctx.skip('🙊 Kan nu niet praten');
    } else {
      wrap.append(h('p', { class: 'muted small' }, 'Spraakherkenning werkt niet in deze browser (probeer Chrome of Safari). Zeg de zin hardop, luister naar het voorbeeld en beoordeel jezelf:'),
        h('div', { class: 'row gap center' },
          h('button', { class: 'btn ok', type: 'button', onclick: () => ctx.submit({ ok: true, self: true, expected: it.text }) }, '👍 Ging goed'),
          h('button', { class: 'btn ghost', type: 'button', onclick: () => ctx.submit({ ok: false, self: true, expected: it.text }) }, '🤔 Nog lastig')));
      ctx.skip();
    }
    ctx.auto();
    return wrap;
  };

  R.order = (it, ctx) => {
    const words = it.target.split(/\s+/);
    const pool = h('div', { class: 'tiles pool' }), line = h('div', { class: 'tiles line' });
    let order = U.shuffle(words.map((w, i) => ({ w, i })));
    if (order.every((o, i) => o.i === i) && words.length > 1) order = order.reverse();
    const chosen = [];
    order.forEach(o => {
      const t = h('button', { class: 'tile', type: 'button', lang: 'es' }, o.w);
      t.onclick = () => {
        if (ctx.answered()) return;
        Sound.tap();
        if (t.parentNode === pool) { line.append(t); chosen.push(o); } else { pool.append(t); chosen.splice(chosen.indexOf(o), 1); }
        ctx.can(chosen.length === words.length);
      };
      pool.append(t);
    });
    ctx.evaluate = () => {
      const user = chosen.map(c => c.w).join(' ');
      const ok = S.check.norm(user) === S.check.norm(it.target);
      line.classList.add(ok ? 'right' : 'wrong');
      return { ok, user, expected: it.target, nl: it.nl };
    };
    return h('div', { class: 'order' }, h('div', { class: 'instr' }, T('order')), it.nl ? h('div', { class: 'prompt small' }, it.nl) : null, line, pool);
  };

  R.match = (it, ctx) => {
    const left = U.shuffle(it.pairs.map((p, i) => ({ t: p[0], i }))), right = U.shuffle(it.pairs.map((p, i) => ({ t: p[1], i })));
    let sel = null, done = 0, mistakes = 0;
    const L = h('div', { class: 'col' }), Rr = h('div', { class: 'col' });
    function mk(o, side) {
      const b = h('button', { class: 'mt', type: 'button', lang: side === 'l' ? 'es' : 'nl', 'data-i': o.i }, o.t);
      b.onclick = () => {
        if (b.disabled) return;
        if (side === 'l') Speech.say(o.t);
        if (!sel || sel.side === side) { if (sel) sel.b.classList.remove('sel'); sel = { o, b, side }; b.classList.add('sel'); return; }
        if (sel.o.i === o.i) {
          sel.b.classList.remove('sel'); sel.b.classList.add('done'); b.classList.add('done'); sel.b.disabled = b.disabled = true; done++; Sound.good();
          sel = null;
          if (done === it.pairs.length) ctx.submit({ ok: mistakes === 0, matchMistakes: mistakes, silent: true });
        } else {
          mistakes++; Sound.bad(); const a = sel.b; a.classList.add('shake'); b.classList.add('shake');
          setTimeout(() => { a.classList.remove('shake', 'sel'); b.classList.remove('shake'); }, 400); sel = null;
        }
      };
      return b;
    }
    left.forEach(o => L.append(mk(o, 'l'))); right.forEach(o => Rr.append(mk(o, 'r')));
    ctx.auto();
    return h('div', { class: 'match' }, h('div', { class: 'instr' }, T('match')), h('div', { class: 'match-grid' }, L, Rr));
  };

  R.write = (it, ctx) => {
    ctx.free();
    const ta = h('textarea', { class: 'write-area', rows: 6, lang: 'es', spellcheck: 'false', placeholder: 'Escribe aquí… (schrijf hier in het Spaans)' });
    const out = h('div', { class: 'ai-out' });
    const btns = h('div', { class: 'row gap wrap' });
    const modelBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => {
      out.innerHTML = ''; out.append(h('div', { class: 'model' }, h('div', { class: 'eyebrow' }, '📝 Voorbeeldtekst'), h('p', { lang: 'es' }, it.task.model, speakBtn(it.task.model))));
    } }, '📝 Toon voorbeeld');
    if (S.AI.enabled()) {
      const aiBtn = h('button', { class: 'btn primary', type: 'button', onclick: async () => {
        if (ta.value.trim().length < 10) { S.toast('Schrijf eerst een paar zinnen 🙂'); return; }
        aiBtn.disabled = true; out.innerHTML = ''; const box = h('div', { class: 'ai-feedback' }, '…'); out.append(box);
        try {
          await S.AI.stream({ system: S.AI.writingSystem(), messages: [{ role: 'user', content: 'Task (in Dutch): ' + it.task.nl + '\n\nMy text:\n' + ta.value.trim() }], maxTokens: 2000, effort: 'medium', onText: t => { box.innerHTML = S.md(t); } });
          S.Store.skill('write', true); S.Store.save();
        } catch (e) { box.textContent = '⚠️ ' + e.message; }
        aiBtn.disabled = false;
      } }, '🤖 Feedback van de AI-docent');
      btns.append(aiBtn);
    }
    btns.append(modelBtn);
    return h('div', { class: 'write' }, h('div', { class: 'eyebrow' }, '✍️ ' + T('write')), h('p', { class: 'task' }, it.task.nl), ta, accentBar(ta), btns, out,
      S.AI.enabled() ? null : h('p', { class: 'muted small' }, '💡 Met een AI-sleutel (Instellingen) krijg je persoonlijke correcties op je tekst.'));
  };

  /* ================== Runner ================== */
  let active = null;
  function run(session, hooks = {}) {
    if (active) active.close(true);
    const root = document.getElementById('lesson');
    root.innerHTML = ''; root.hidden = false; document.body.classList.add('in-lesson');
    const queue = session.items.filter(Boolean).slice();
    const graded = new Map(); // item -> first result
    const total = queue.filter(isGraded).length;
    let idx = 0, activeMs = 0, last = Date.now(), xp = 0, streak = 0, bestStreak = 0, answered = false, leaveFns = [];
    const mistakes = [];
    const timerEnd = session.timer ? Date.now() + session.timer * 1000 : null;

    const bar = h('i'); const count = h('span', { class: 'ls-count' });
    const closeBtn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Stoppen', onclick: () => tryClose() }, '✕');
    const timerEl = timerEnd ? h('span', { class: 'ls-timer' }) : null;
    const body = h('div', { class: 'ls-body' });
    const fb = h('div', { class: 'ls-fb' });
    const mainBtn = h('button', { class: 'btn primary wide', type: 'button' });
    const skipBtn = h('button', { class: 'btn link', type: 'button' });
    const foot = h('div', { class: 'ls-foot' }, fb, h('div', { class: 'ls-actions' }, skipBtn, mainBtn));
    root.append(h('div', { class: 'ls' }, h('div', { class: 'ls-top' }, closeBtn, h('div', { class: 'ls-bar' }, bar), timerEl, count), body, foot));

    let tick = null;
    if (timerEnd) tick = setInterval(() => { const s = Math.max(0, Math.round((timerEnd - Date.now()) / 1000)); timerEl.textContent = '⏱ ' + s + 's'; if (s <= 0) { clearInterval(tick); finish(); } }, 250);

    function isGraded(it) { return !['card', 'info', 'dialogue', 'write'].includes(it.kind); }
    function touch() { const n = Date.now(); activeMs += Math.min(n - last, 60000); last = n; }
    function progress() {
      const doneN = [...graded.keys()].length;
      const pct = total ? doneN / total : idx / Math.max(1, queue.length);
      bar.style.width = Math.round(Math.min(1, session.mode === 'learn' || session.mode === 'review' ? idx / queue.length : pct) * 100) + '%';
      count.textContent = Math.min(idx + 1, queue.length) + '/' + queue.length;
    }
    function onKey(e) {
      if (e.key === 'Escape') { tryClose(); return; }
      if (e.target && e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'Enter') { if (!mainBtn.disabled && mainBtn.offsetParent) { e.preventDefault(); mainBtn.click(); } return; }
      if (!answered && ctxObj && ctxObj.keys && !(e.target && e.target.tagName === 'INPUT')) ctxObj.keys(e.key);
    }
    document.addEventListener('keydown', onKey);
    let ctxObj = null;

    function show() {
      leaveFns.forEach(f => f()); leaveFns = [];
      if (idx >= queue.length) return finish();
      progress();
      const it = queue[idx];
      answered = false; fb.innerHTML = ''; fb.className = 'ls-fb'; foot.classList.remove('ok', 'bad');
      skipBtn.hidden = true; skipBtn.onclick = null;
      mainBtn.disabled = true; mainBtn.textContent = T('check'); mainBtn.hidden = false;
      const ctx = ctxObj = {
        answered: () => answered,
        can: v => { mainBtn.disabled = !v; },
        free: (label) => { mainBtn.disabled = false; mainBtn.textContent = label || T('next'); mainBtn.onclick = () => { touch(); idx++; show(); }; },
        auto: () => { mainBtn.hidden = true; },
        skip: (label) => { skipBtn.hidden = false; skipBtn.textContent = label || T('skip'); skipBtn.onclick = () => { touch(); idx++; show(); }; },
        submit: r => feedback(it, r),
        onLeave: f => leaveFns.push(f),
        evaluate: null, keys: null
      };
      mainBtn.onclick = () => { if (ctx.evaluate) feedback(it, ctx.evaluate()); };
      body.innerHTML = '';
      const el = (R[it.kind] || R.info)(it, ctx);
      body.append(el); body.scrollTop = 0;
    }

    function feedback(it, r) {
      if (answered) return; answered = true; touch();
      skipBtn.hidden = true;
      const first = !graded.has(it.orig || it);
      if (first) graded.set(it.orig || it, r.ok);
      if (r.ok) { streak++; bestStreak = Math.max(bestStreak, streak); xp += it.retry ? 5 : 10; } else streak = 0;
      if (!r.ok && !r.self && r.expected) mistakes.push({ it, r });
      // item direct verwerken (SRS + statistiek) — alleen eerste poging
      if (first && hooks.onItem) hooks.onItem(it, r.ok, r);
      if (session.mode === 'exam') { idx++; setTimeout(show, 120); return; }
      (r.ok ? Sound.good : Sound.bad)();
      // opnieuw aanbieden in leer-/herhaalmodus
      if (!r.ok && !it.retry && (session.mode === 'learn' || session.mode === 'review') && !['match', 'speak'].includes(it.kind)) {
        const copy = { ...it, retry: true, orig: it.orig || it };
        if (copy.options) copy.options = U.shuffle(copy.options);
        queue.push(copy);
      }
      renderFeedback(it, r);
      mainBtn.hidden = false; mainBtn.disabled = false; mainBtn.textContent = T('next');
      mainBtn.onclick = () => { touch(); idx++; show(); };
      setTimeout(() => mainBtn.focus({ preventScroll: true }), 50);
      const sayIt = r.expected && (it.speakAnswer || it.sentence || it.kind === 'listen' || it.word);
      if (sayIt && S.Store.state.settings.autoSpeak && it.kind !== 'speak') {
        const txt = it.sentence ? it.sentence.replace('___', (r.ok ? r.user : r.expected)) : (it.kind === 'mc' && it.word && it.q === 'Wat betekent dit?' ? it.word.es : r.expected);
        setTimeout(() => Speech.say(txt), 150);
      }
    }

    function renderFeedback(it, r) {
      foot.classList.add(r.ok ? 'ok' : 'bad');
      fb.className = 'ls-fb show';
      if (r.silent && r.ok) { fb.append(h('div', { class: 'fb-title' }, U.pick(PRAISE))); return; }
      fb.append(h('div', { class: 'fb-title' }, r.ok ? U.pick(PRAISE) : U.pick(OOPS)));
      if (r.matchMistakes) fb.append(h('div', null, r.matchMistakes + (r.matchMistakes === 1 ? ' fout' : ' fouten') + ' — die woorden komen terug in je herhaling.'));
      if (r.speakScore != null) fb.append(h('div', null, 'Uitspraakscore: ' + r.speakScore + '%'));
      if (r.ok && r.warn === 'accent') fb.append(h('div', null, '✍️ Let op de accenten: ', h('b', { lang: 'es' }, r.expected)));
      if (r.ok && r.warn === 'enye') fb.append(h('div', null, '✍️ Let op de ñ: ', h('b', { lang: 'es' }, r.expected)));
      if (r.ok && r.warn === 'typo') fb.append(h('div', null, '🔤 Kleine typfout — precies: ', h('b', { lang: 'es' }, r.expected)));
      if (r.ok && r.warn === 'article') fb.append(h('div', null, '📌 Vergeet het lidwoord niet: ', h('b', { lang: 'es' }, r.expected)));
      if (!r.ok && r.expected && r.matchMistakes == null) {
        fb.append(h('div', null, T('correct') + ': ', h('b', { lang: 'es' }, r.expected), (it.speakAnswer || it.kind === 'listen' || it.sentence) ? speakBtn(it.sentence ? it.sentence.replace('___', r.expected) : r.expected) : null));
        if (r.user && it.kind !== 'mc') fb.append(h('div', { class: 'small muted' }, 'Jouw antwoord: ' + r.user));
      }
      if (r.ok && it.alts && it.alts.length > 1 && it.translate) {
        const other = it.alts.filter(a => S.check.norm(a) !== S.check.norm(r.user)).slice(0, 1);
        if (other.length) fb.append(h('div', { class: 'small muted' }, 'Ook goed: ' + other[0]));
      }
      if (r.nl) fb.append(h('div', { class: 'small muted' }, '🇳🇱 ' + r.nl));
      if (r.x) fb.append(h('div', { class: 'fb-x' }, '💡 ' + r.x));
      // AI-beoordeling bij vrije vertaling
      if (!r.ok && it.translate && S.AI.enabled() && r.user) {
        const b = h('button', { class: 'btn small ghost', type: 'button' }, '🤖 Toch goed? Laat de AI het beoordelen');
        b.onclick = async () => {
          b.disabled = true; b.textContent = 'AI beoordeelt…';
          try {
            const j = await S.AI.checkTranslation(it.prompt, r.user, it.alts);
            b.remove();
            fb.append(h('div', { class: 'fb-ai' }, (j.correct ? '✅ ' : '❌ ') + j.feedback, j.better ? h('div', { class: 'small', lang: 'es' }, '→ ' + j.better) : null));
            if (j.correct) {
              foot.classList.remove('bad'); foot.classList.add('ok');
              graded.set(it.orig || it, true);
              const qi = queue.lastIndexOf(queue.find(q => q.orig === (it.orig || it) && q.retry));
              if (qi > idx) queue.splice(qi, 1);
              const mi = mistakes.findIndex(m => m.it === it); if (mi >= 0) mistakes.splice(mi, 1);
              hooks.onItem && hooks.onItem(it, true, { ...r, ok: true, override: true });
              xp += 10; progress();
            }
          } catch (e) { b.disabled = false; b.textContent = '⚠️ ' + e.message; }
        };
        fb.append(b);
      }
    }

    function summary() {
      const vals = [...graded.values()];
      const okN = vals.filter(Boolean).length;
      return { total: vals.length, ok: okN, score: vals.length ? okN / vals.length : 1, xp, minutes: activeMs / 60000, mistakes, bestStreak, mode: session.mode };
    }
    function finish() {
      touch(); if (tick) clearInterval(tick);
      const sum = summary();
      const extra = (hooks.onFinish && hooks.onFinish(sum)) || {};
      if (session.mode === 'exam' && extra.silent) { close(true); extra.next && extra.next(); return; }
      body.innerHTML = ''; fb.innerHTML = ''; fb.className = 'ls-fb'; foot.classList.remove('ok', 'bad'); skipBtn.hidden = true;
      bar.style.width = '100%';
      const pct = Math.round(sum.score * 100);
      const passed = extra.passed;
      const emoji = extra.emoji || (passed === false ? '💪' : pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '👍');
      if (passed !== false && pct >= 80) S.confetti();
      S.Sound.win();
      body.append(h('div', { class: 'summary' },
        h('div', { class: 'sum-emoji' }, emoji),
        h('h2', null, extra.title || (pct >= 80 ? '¡Muy bien!' : '¡Buen trabajo!')),
        extra.text ? h('p', { class: 'center' }, extra.text) : null,
        h('div', { class: 'stats-row' },
          sum.total ? statBox(pct + '%', 'score') : null,
          statBox('+' + (sum.xp + (extra.bonusXP || 0)), 'XP'),
          statBox(Math.max(1, Math.round(sum.minutes)) + ' min', 'tijd'),
          sum.bestStreak >= 3 ? statBox('🔥 ' + sum.bestStreak, 'op rij') : null),
        sum.mistakes.length ? h('div', { class: 'mistakes' }, h('h3', null, 'Om te onthouden'),
          dedupe(sum.mistakes).slice(0, 8).map(m => {
            const es = m.it.word ? m.it.word.es : m.it.sentence ? m.it.sentence.replace('___', m.r.expected) : m.it.conj ? m.it.person + ' ' + m.r.expected : m.r.expected;
            const sub = m.it.word ? m.it.word.nl : m.it.conj ? m.it.prompt + ' · ' + m.it.sub : (m.it.prompt || m.it.nl || m.it.q || '');
            return h('div', { class: 'mistake' }, speakBtn(m.it.word || m.it.sentence || m.it.speakAnswer || m.it.kind !== 'mc' ? es : null), h('div', null, h('div', { class: 'es', lang: 'es' }, es), h('div', { class: 'small muted' }, sub)));
          })) : null));
      mainBtn.hidden = false; mainBtn.disabled = false; mainBtn.textContent = extra.nextLabel || 'Klaar';
      mainBtn.onclick = () => { close(true); extra.next && extra.next(); };
      if (extra.alt) { skipBtn.hidden = false; skipBtn.textContent = extra.alt.label; skipBtn.onclick = () => { close(true); extra.alt.fn(); }; }
      setTimeout(() => mainBtn.focus({ preventScroll: true }), 50);
    }
    function dedupe(ms) { const seen = new Set(); return ms.filter(m => { const k = (m.it.word ? m.it.word.id : '') + m.r.expected; if (seen.has(k)) return false; seen.add(k); return true; }); }
    function statBox(v, l) { return h('div', { class: 'stat' }, h('b', null, v), h('span', null, l)); }
    function tryClose() {
      if (idx >= queue.length || idx === 0) return close();
      S.confirm('Les stoppen?', 'Wat je al geoefend hebt, telt mee voor je herhaling. De stap zelf is nog niet afgerond.', 'Stoppen', () => close());
    }
    function close(silent) {
      touch(); if (tick) clearInterval(tick);
      leaveFns.forEach(f => f()); Speech.stop(); Speech.stopListening();
      document.removeEventListener('keydown', onKey);
      root.hidden = true; root.innerHTML = ''; document.body.classList.remove('in-lesson');
      if (!silent && hooks.onAbort) hooks.onAbort(summary());
      active = null;
      hooks.onClose && hooks.onClose();
    }
    active = { close };
    show();
  }

  S.Lesson = { run, grammarBlock, speakBtn, accentBar, T, esMode };
})(window.SPT);
