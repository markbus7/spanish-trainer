/* Lesmotor: toont items één voor één, controleert antwoorden en geeft feedback. */
(function (S) {
  'use strict';
  const { U, Speech, Sound } = S;
  const h = U.h;

  const PRAISE = ['¡Muy bien!', '¡Excelente!', '¡Eso es!', '¡Perfecto!', '¡Bien hecho!', '¡Genial!', '¡Correcto!', '¡Así se hace!'];
  const OOPS = ['Casi…', 'No exactamente', 'Ups…', 'Todavía no'];

  function esMode() {
    if (S.course.ui !== 'nl') return false; // uitleg staat al in het Spaans
    const e = S.Store.state.settings.explain;
    if (e === 'es') return true;
    if (e === 'nl' || e === 'mix') return false;
    const cur = S.C.get(S.Store.state.current);
    return !!(cur && cur.level >= 'B1');
  }
  const T_ = {
    check: ['Controleer', 'Comprobar'], next: ['Verder', 'Continuar'], skip: ['Overslaan', 'Saltar'], gotit: ['Begrepen', 'Entendido'],
    choose: ['Kies het juiste antwoord', 'Elige la respuesta correcta'], fill: ['Vul in', 'Completa'], translate: ['Vertaal naar het Spaans', 'Traduce al español'], aslesson: ['Vertaal zoals in de les', 'Traduce como en la lección'],
    order: ['Zet de zin in de juiste volgorde', 'Ordena la frase'], match: ['Koppel de paren', 'Une las parejas'], listen: ['Luister en typ wat je hoort', 'Escucha y escribe'],
    speak: ['Zeg het hardop', 'Dilo en voz alta'], conj: ['Vervoeg het werkwoord', 'Conjuga el verbo'], type: ['Typ in het Spaans', 'Escribe en español'],
    meaning: ['Wat betekent dit?', '¿Qué significa?'], howsay: ['Hoe zeg je dit in het Spaans?', '¿Cómo se dice en español?'], hear: ['Wat hoor je?', '¿Qué escuchas?'],
    newword: ['Nieuw woord', 'Palabra nueva'], correct: ['Juiste antwoord', 'Respuesta correcta'], write: ['Schrijfopdracht', 'Tarea de escritura']
  };
  function T(k) { const v = T_[k]; return v ? v[esMode() ? 1 : 0] : k; }
  const Q_MAP = { 'Wat betekent dit?': 'meaning', 'Hoe zeg je dit in het Spaans?': 'howsay', 'Wat hoor je?': 'hear', 'Typ in het Spaans': 'type', 'Vertaal naar het Spaans': 'translate', 'Vertaal zoals in de les': 'aslesson', 'Vervoeg': 'conj' };

  /* 🔊 normaal, 🐢 langzaam. Tik je nog eens op de 🐢, dan wordt het een 🐌: heel langzaam (en dat blijft hij bij deze vraag). */
  function speakBtn(text, opt = {}) {
    if (!Speech.canSpeak() || !text) return null;
    if (!opt.slow) return h('button', { class: 'icon-btn speak' + (opt.big ? ' big' : ''), type: 'button', title: 'Beluister', 'aria-label': 'Beluister', onclick: (e) => { e.stopPropagation(); Speech.say(text, opt); } }, '🔊');
    let level = 1;
    const btn = h('button', { class: 'icon-btn speak slow' + (opt.big ? ' big' : ''), type: 'button', title: 'Langzaam (tik nog eens: nog langzamer)', 'aria-label': 'Langzaam beluisteren', onclick: (e) => {
      e.stopPropagation();
      Speech.say(text, Object.assign({}, opt, { slow: level }));
      if (level === 1) { level = 2; btn.textContent = '🐌'; btn.title = 'Heel langzaam beluisteren'; btn.setAttribute('aria-label', 'Heel langzaam beluisteren'); btn.classList.add('slower'); }
    } }, '🐢');
    return btn;
  }
  /* ⓘ Uitleg zonder AI (content/uitleg.js): een knopje dat vooraf geschreven toelichting openklapt. Kost geen tokens. */
  function noteToggle(notes, opt = {}) {
    if (!notes || !notes.length) return null;
    const box = h('div', { class: 'xi-box' + (opt.open ? '' : ' hidden') },
      opt.head ? h('div', { class: 'xi-head' }, opt.head) : null,
      notes.map(n => h('div', { class: 'xi-note' }, n.t ? h('div', { class: 'xi-t', lang: 'es' }, n.t) : null, h('div', { html: n.html }))));
    const btn = h('button', { class: opt.label ? 'btn small ghost xi-more' : 'xi-btn', type: 'button', title: 'Uitleg (gratis, zonder AI)', 'aria-label': 'Uitleg bij deze zin', 'aria-expanded': String(!!opt.open), onclick: e => {
      e.stopPropagation();
      const open = box.classList.toggle('hidden') === false;
      btn.classList.toggle('on', open); btn.setAttribute('aria-expanded', String(open));
    } }, opt.label || 'i');
    if (opt.open) btn.classList.add('on');
    return { btn, box };
  }
  const findNotes = (text, opt) => (S.Uitleg ? S.Uitleg.find(text, opt) : []);

  function accentBar(target) {
    const chars = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];
    return h('div', { class: 'accent-bar', role: 'toolbar', 'aria-label': 'Speciale tekens' },
      chars.map(c => h('button', { type: 'button', tabindex: '-1', onmousedown: e => e.preventDefault(), onclick: () => {
        const input = typeof target === 'function' ? target() : target; if (!input) return;
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
  /* Hint en "Ik weet het niet" onder een typvraag. Elke hint onthult één letter meer
     (eerste hint: lidwoord + eerste letter van elk woord); de laatste letter blijft altijd verborgen. */
  const ART_RE = /^(el|la|los|las|un|una)\s+/i;
  function hintMask(ans, n) {
    const m = ans.match(ART_RE); const art = m ? m[0] : '';
    const words = ans.slice(art.length).trim().split(/\s+/).map(w => [...w]);
    const isL = c => /[\p{L}\p{N}]/u.test(c);
    // volgorde: eerst de eerste letter van elk woord, daarna de rest van links naar rechts
    const firsts = [], rest = [];
    words.forEach((w, wi) => { let f = true; w.forEach((c, ci) => { if (!isL(c)) return; (f ? firsts : rest).push(wi + ':' + ci); f = false; }); });
    const open = new Set(n > 0 ? firsts.concat(rest.slice(0, n - 1)) : []);
    const text = art + words.map((w, wi) => w.map((c, ci) => !isL(c) || open.has(wi + ':' + ci) ? c : '_').join('\u2009')).join('   ');
    return { text, max: Math.max(1, rest.length) }; // de laatste letter blijft verborgen
  }
  function typeHelp(inp, ctx, answer, onDontKnow) {
    let n = 0;
    const hintLine = h('div', { class: 'type-hint hidden', lang: 'es', 'aria-live': 'polite' });
    const hintBtn = h('button', { class: 'btn ghost small', type: 'button', onclick: () => {
      const a = answer(); const { max } = hintMask(a, 0);
      if (n >= max) return;
      n++; const r = hintMask(a, n);
      hintLine.textContent = '💡 ' + r.text; hintLine.classList.remove('hidden');
      hintBtn.textContent = n >= max ? '💡 Geen hints meer' : '💡 Nog een letter';
      hintBtn.disabled = n >= max;
      inp.focus({ preventScroll: true });
    } }, '💡 Hint');
    const dkBtn = h('button', { class: 'btn ghost small', type: 'button', onclick: () => { if (ctx.answered()) return; inp.disabled = true; row.classList.add('hidden'); onDontKnow(); } }, '🤷 Ik weet het niet');
    const row = h('div', { class: 'type-help' }, ctx.mode === 'exam' ? null : hintBtn, dkBtn);
    return { el: h('div', null, hintLine, row), hints: () => n, done: () => row.classList.add('hidden') };
  }
  /* ---------- vervoegen: kaart met uitleg + mini-tabel ---------- */
  // Nederlandse tegenwoordige tijd van veelgebruikte werkwoorden: ik · jij · hij/zij · wij · zij/jullie
  const NL_PRES = {
    ser: 'ben bent is zijn zijn', estar: 'ben bent is zijn zijn', tener: 'heb hebt heeft hebben hebben', ir: 'ga gaat gaat gaan gaan',
    hacer: 'doe doet doet doen doen', poder: 'kan kunt kan kunnen kunnen', querer: 'wil wilt wil willen willen', venir: 'kom komt komt komen komen',
    decir: 'zeg zegt zegt zeggen zeggen', saber: 'weet weet weet weten weten', dar: 'geef geeft geeft geven geven', ver: 'zie ziet ziet zien zien',
    hablar: 'spreek spreekt spreekt spreken spreken', comer: 'eet eet eet eten eten', vivir: 'woon woont woont wonen wonen',
    trabajar: 'werk werkt werkt werken werken', beber: 'drink drinkt drinkt drinken drinken', escribir: 'schrijf schrijft schrijft schrijven schrijven',
    leer: 'lees leest leest lezen lezen', dormir: 'slaap slaapt slaapt slapen slapen', comprar: 'koop koopt koopt kopen kopen',
    necesitar: 'heb … nodig|hebt … nodig|heeft … nodig|hebben … nodig|hebben … nodig', estudiar: 'studeer studeert studeert studeren studeren',
    llamarse: 'heet heet heet heten heten', salir: 'ga uit|gaat uit|gaat uit|gaan uit|gaan uit', jugar: 'speel speelt speelt spelen spelen',
    conocer: 'ken kent kent kennen kennen', pedir: 'vraag om|vraagt om|vraagt om|vragen om|vragen om', pensar: 'denk denkt denkt denken denken'
  };
  const NL_PRON = ['ik', 'jij', 'hij / zij', 'wij', 'zij / jullie'];
  function nlForm(verb, tense, p) {
    if (tense !== 'pres' || !NL_PRES[verb]) return null;
    const raw = NL_PRES[verb]; const f = (raw.includes('|') ? raw.split('|') : raw.split(' '))[p];
    return NL_PRON[p] + ' ' + f;
  }
  function conjCard(it, ctx) {
    const { verb, tense, person: p } = it.conj;
    const Tn = S.conj.TENSES[tense] || {};
    const info = S.conj.info(verb) || {};
    const pNl = S.conj.personNl ? S.conj.personNl(tense, p) : '';
    const nl = nlForm(verb, tense, p);
    const imper = tense === 'imper' || tense === 'neg';
    // invulzin: "tú ___"  (bij gebiedende wijs: "¡___!  (tú)")
    const blank = h('span', { class: 'blank' }, ' ');
    const frame = h('div', { class: 'conj-frame', lang: 'es' }, imper ? ['¡', blank, '! ', h('span', { class: 'cf-pron small' }, '(' + it.person + ')')] : [h('span', { class: 'cf-pron' }, it.person), ' ', blank]);
    // voorbeeld met een andere persoon, zodat je het patroon ziet
    let ex = null;
    if (ctx.mode !== 'exam') {
      const tbl = S.conj.table(verb, tense) || [];
      const q = S.conj.personsFor(tense).find(i => i !== p && tbl[i]);
      if (q != null) {
        const exNl = nlForm(verb, tense, q);
        ex = h('div', { class: 'conj-ex' }, 'Voorbeeld: ', h('b', { lang: 'es' }, (imper ? '¡' + tbl[q] + '! (' + S.conj.personLabel(tense, q) + ')' : S.conj.personLabel(tense, q).split(' / ')[0] + ' ' + tbl[q])), exNl ? ' = ' + exNl : '');
      }
    }
    const el = h('div', { class: 'conj-card' },
      h('div', { class: 'verb', lang: 'es' }, verb),
      info.nl ? h('div', { class: 'conj-mean' }, '= ' + info.nl) : null,
      h('div', { class: 'conj-facts' },
        h('div', { class: 'cf' }, h('span', { class: 'cf-k' }, 'Wie?'), h('span', { class: 'person' }, it.person), pNl ? h('span', { class: 'cf-nl' }, '= ' + pNl) : null),
        h('div', { class: 'cf' }, h('span', { class: 'cf-k' }, 'Tijd?'), h('span', { class: 'cf-t', lang: 'es' }, Tn.es || ''), h('span', { class: 'cf-nl' }, '= ' + (Tn.nl || '')))),
      Tn.tip ? h('div', { class: 'conj-tip' }, '💡 ' + Tn.tip.charAt(0).toUpperCase() + Tn.tip.slice(1)) : null,
      h('div', { class: 'conj-ask' }, 'Vul de juiste vorm in:'),
      frame,
      h('div', { class: 'conj-nl' }, nl ? '🇳🇱 ' + nl : '🇳🇱 ' + (pNl || it.person) + ' + ‘' + (info.nl || verb) + '’'),
      ex);
    return { el, frame };
  }
  function conjTable(it) {
    const { verb, tense, person: p } = it.conj;
    const tbl = S.conj.table(verb, tense) || [];
    const Tn = S.conj.TENSES[tense] || {};
    const rows = S.conj.personsFor(tense).filter(i => tbl[i]).map(i => h('tr', { class: i === p ? 'me' : '' },
      h('td', { class: 'ct-p', lang: 'es' }, S.conj.personLabel(tense, i)),
      h('td', { class: 'ct-f', lang: 'es' }, tbl[i]),
      h('td', { class: 'ct-nl' }, nlForm(verb, tense, i) || S.conj.personNl(tense, i))));
    return h('div', { class: 'conj-table' },
      h('div', { class: 'ct-title' }, '📋 ', h('b', { lang: 'es' }, verb), ' · ' + (Tn.es || '') + ' = ' + (Tn.nl || '')),
      h('table', null, h('tbody', null, rows)));
  }
  /* Zin met de goede woorden van de vorige poging al ingevuld: alleen de foute woorden zijn vakjes.
     keep = { a: goede antwoord, k: nummers van de woorden die al goed waren }. */
  function partialInput(keep, ctx) {
    const segs = S.check.words(keep.a), kept = new Set(keep.k), inputs = [];
    let current = null;
    const el = h('div', { class: 'partial', lang: 'es' });
    segs.forEach((seg, i) => {
      if (i % 2 === 0) { if (seg) el.append(h('span', { class: 'p-sep' }, seg)); return; }
      const wi = (i - 1) / 2;
      if (kept.has(wi)) { el.append(h('span', { class: 'p-word' }, seg)); return; }
      const inp = h('input', { class: 'p-input', type: 'text', autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'es', enterkeyhint: inputs.length ? 'done' : 'next',
        'aria-label': 'Woord ' + (wi + 1), style: 'width:' + Math.max(3, [...seg].length + 1.5) + 'ch' });
      inp.dataset.i = i;
      inp.addEventListener('focus', () => { current = inp; });
      inp.addEventListener('input', () => ctx.can(inputs.every(x => x.value.trim())));
      inp.addEventListener('keydown', e => {
        // Enter of spatie in een vakje: door naar het volgende lege vakje
        if ((e.key === 'Enter' || e.key === ' ') && !inputs.every(x => x.value.trim())) {
          const next = inputs.find((x, n) => n > inputs.indexOf(inp) && !x.value.trim()) || inputs.find(x => !x.value.trim());
          if (next && next !== inp) { e.preventDefault(); e.stopPropagation(); next.focus(); }
          else if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); }
        }
      });
      inputs.push(inp); el.append(inp);
    });
    if (inputs.length) inputs[inputs.length - 1].enterKeyHint = 'done';
    return {
      el, inputs,
      current: () => current || inputs[0],
      focus: () => { const f = inputs.find(x => !x.value.trim()) || inputs[0]; if (f) f.focus({ preventScroll: true }); },
      value: () => segs.map((seg, i) => { const inp = inputs.find(x => +x.dataset.i === i); return inp ? inp.value.trim() : seg; }).join(''),
      set disabled(v) { inputs.forEach(x => { x.disabled = v; }); },
      mark: (user, answers) => {
        // na controleren: per vakje laten zien of het nu goed is
        const p = S.check.parts(user, answers);
        if (!p || p.a !== keep.a) return;
        inputs.forEach(x => { const wi = (+x.dataset.i - 1) / 2; x.classList.add(p.st[wi] === 'bad' ? 'bad' : 'ok'); });
      }
    };
  }
  function wordDiff(p) {
    const segs = S.check.words(p.a);
    return h('div', { class: 'word-diff', lang: 'es' }, segs.map((seg, i) => i % 2 === 0 ? seg : h('span', { class: 'wd ' + p.st[(i - 1) / 2] }, seg)));
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
    const sumEl = () => S.Tutor.coach({ es: g.sum, lang: S.course.target, nl: es ? '' : 'Kort samengevat, in het Spaans. Tik om het te horen.' }, { size: 44, label: 'Profe Lupe vat samen', cls: 'lc-sum' }) || h('div', { class: 'sum', lang: S.course.target }, (S.course.target === 'es' ? '🇪🇸 ' : S.course.flag + ' ') + g.sum);
    if (g.sum && es) wrap.append(sumEl());
    const body = h('div', { class: 'prose', html: g.html });
    if (es) { const d = h('details', null, h('summary', null, 'Uitleg in het Nederlands'), body); wrap.append(d); } else wrap.append(body);
    if (g.table) {
      const tb = h('table', { class: 'gtable' });
      g.table.forEach((row, ri) => tb.append(h('tr', null, row.map(c => h(ri === 0 ? 'th' : 'td', { html: c })))));
      wrap.append(h('div', { class: 'table-wrap' }, tb));
    }
    const seen = new Set();
    if (g.ex) wrap.append(h('div', { class: 'examples' }, g.ex.map(([e, n, x]) => {
      const nt = noteToggle(findNotes(e, { extra: x, seen }));
      return h('div', { class: 'ex-line' }, speakBtn(e), h('div', { class: 'grow' }, h('div', { class: 'es', lang: 'es' }, e), h('div', { class: 'nl' }, n), nt && nt.box), nt && nt.btn);
    })));
    if (g.sum && !es) wrap.append(sumEl());
    return wrap;
  }
  S.grammarBlock = grammarBlock;

  R.dialogue = (it, ctx) => {
    const d = it.dialogue; ctx.free();
    const set = S.Store.state.settings;
    const speakers = [...new Set(d.lines.map(l => l[0]))];
    let showAll = false;
    const seen = new Set();
    const lines = d.lines.map(([who, es, nl, x]) => {
      const tr = h('div', { class: 'nl hidden' }, nl);
      const esEl = h('div', { class: 'es', lang: 'es' }, es);
      const extra = h('div', { class: 'rp-turn' });
      const nt = noteToggle(findNotes(es, { extra: x, seen }));
      const line = h('div', { class: 'dl ' + (speakers.indexOf(who) % 2 ? 'right' : 'left') },
        h('div', { class: 'avatar', title: who }, who[0]),
        h('div', { class: 'bubble', onclick: () => { if (line.classList.contains('mine')) return; tr.classList.toggle('hidden'); } },
          h('div', { class: 'who' }, who), esEl, tr, nt && nt.box, extra),
        h('div', { class: 'dl-btns' }, speakBtn(es), nt && nt.btn));
      Object.assign(line, { _tr: tr, _es: es, _nl: nl, _who: who, _esEl: esEl, _extra: extra, _note: !!nt });
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
      intro.textContent = (on ? '🎧 Luister eerst zonder tekst. Hoeveel versta je? Daarna maak je de tekst zichtbaar.' : 'Lees en luister. Tik op een zin voor de vertaling.') + (seen.size || lines.some(l => l._note) ? ' Tik op ⓘ voor extra uitleg.' : '');
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
      role.active = false; Speech.stop(); Speech.abortListening(); resetLines();
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
          if (mic.classList.contains('rec')) { live.state('stopping'); Speech.stopListening(); return; }
          mic.classList.add('rec'); status.textContent = ''; live.start();
          try {
            const alts = await Speech.listen(live.hooks());
            mic.classList.remove('rec'); tries++; live.hide();
            const best = alts.map(a => [a, S.check.similarity(a, l._es)]).sort((a, b) => b[1] - a[1])[0];
            const score = Math.round(best[1] * 100);
            if (best[1] >= 0.75 || tries >= 3) { S.Store.skill('speak', best[1] >= 0.75); if (best[1] >= 0.75) Sound.good(); else Sound.bad(); finish(score); }
            else { Sound.bad(); status.textContent = `Ik hoorde «${best[0]}» (${score}%). Probeer het nog eens (${tries}/3).`; }
          } catch (err) { mic.classList.remove('rec'); live.fail(err); }
        } }, '🎙️');
        const live = S.Mic.live();
        const hint = h('button', { class: 'btn ghost small', type: 'button', onclick: e => { e.stopPropagation(); l._esEl.classList.remove('hide-es'); Speech.say(l._es); } }, '💡 Voorzeggen');
        const skip = h('button', { class: 'btn ghost small', type: 'button', onclick: e => { e.stopPropagation(); finish(null); } }, 'Overslaan');
        l._extra.append(h('div', { class: 'row gap wrap rp-ctrl' }, mic, hint, skip), live.el, status);
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
    const seen = new Set();
    const paras = r.p.map(([es, nl, x]) => {
      const tr = h('div', { class: 'nl hidden' }, nl);
      const nt = noteToggle(findNotes(es, { extra: x, seen }));
      const p = h('div', { class: 'rd-p' }, h('div', { class: 'rd-text', onclick: () => tr.classList.toggle('hidden') }, h('p', { class: 'es', lang: 'es' }, es), tr, nt && nt.box), h('div', { class: 'dl-btns' }, speakBtn(es), nt && nt.btn));
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
      h('p', { class: 'muted small' }, 'Lees eerst zonder vertaling. Tik op een alinea als je vastloopt.' + (seen.size ? ' Tik op ⓘ voor extra uitleg.' : '')),
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
    const opts = h('div', { class: 'options' + (it.options.some(o => o.length > 28) ? ' one-col' : '') });
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

  /** Mag de AI dit typantwoord herbeoordelen? Vrije vertalingen en woorden (Typ in het Spaans), niet vervoegen of invullen. */
  function canRegrade(it) { return !!(it && it.kind === 'type' && it.prompt && (it.translate || (it.word && !it.conj && !it.sentence))); }

  R.type = (it, ctx) => {
    const qKey = Q_MAP[it.q];
    const wrap = h('div', { class: 'type' });
    wrap.append(h('div', { class: 'instr' }, it.sentence ? T('fill') : it.conj ? T('conj') : (qKey ? T(qKey) : T('type'))));
    let sent = null;
    if (it.conj) { const c = conjCard(it, ctx); sent = c.frame; wrap.append(c.el); }
    else if (it.prompt) wrap.append(h('div', { class: 'prompt' }, it.prompt));
    if (it.mainOnly) wrap.append(h('div', { class: 'p-note' }, it.translate ? '🔁 Je eigen zin was ook goed. Typ nu de zin zoals hij in de les staat.' : '🔁 Je eigen antwoord was ook goed. Typ nu het woord zoals het in de les staat.'));
    if (it.sentence) { sent = sentenceEl(it.sentence); wrap.append(sent); }
    if (it.h) wrap.append(h('div', { class: 'hint' }, '(' + it.h + ')'));
    if (it.nl && it.sentence) wrap.append(h('div', { class: 'nl-hint' }, it.nl));
    // Herhaling van een zin met fouten: de goede woorden staan er al, alleen de foute zijn vakjes
    let part = it.translate && S.check.partsUsable(it.keep) ? partialInput(it.keep, ctx) : null;
    let inp = part ? null : textInput(it.conj ? 'vervoeging…' : undefined);
    const field = () => part || inp;
    const fillBlank = txt => { if (sent) { const bl = sent.querySelector('.blank'); if (bl) { bl.textContent = txt; bl.classList.add('filled'); } } };
    const help = typeHelp({ focus: o => field().focus(o), set disabled(v) { field().disabled = v; } }, ctx, () => it.answers[0], () => {
      fillBlank(it.answers[0]);
      ctx.submit({ ok: false, dontKnow: true, user: '', expected: it.answers[0], x: it.x, alts: it.answers });
    });
    const bar = accentBar(() => part ? part.current() : inp);
    if (part) {
      const whole = h('button', { class: 'btn link small p-whole', type: 'button', onclick: () => {
        if (ctx.answered()) return;
        // toch liever de hele zin zelf typen
        inp = textInput(); inp.addEventListener('input', () => ctx.can(inp.value.trim().length > 0));
        part.el.replaceWith(inp); part = null; whole.remove(); note.remove(); ctx.can(false); inp.focus({ preventScroll: true });
      } }, '✏️ Liever de hele zin typen');
      const note = h('div', { class: 'p-note' }, '🔁 De woorden die je de vorige keer goed had, staan er al. Vul alleen de lege vakjes in.');
      wrap.append(note, part.el, bar, help.el, whole);
    } else {
      inp.addEventListener('input', () => ctx.can(inp.value.trim().length > 0));
      wrap.append(inp, bar, help.el);
    }
    setTimeout(() => field().focus({ preventScroll: true }), 80);
    ctx.evaluate = () => {
      help.done();
      const user = part ? part.value().trim() : inp.value.trim();
      let r = S.Gen.checkType(user, it);
      // eerder door Lupe goedgekeurd (herbeoordeling): nu meteen goed
      // maar de zin uit de les moet je óók leren: dan komt hij straks terug (alleen de lesversie telt dan)
      const lupeOk = !r.ok && canRegrade(it) && !it.mainOnly && S.Mistakes && S.Mistakes.accepted(it.prompt, user);
      if (lupeOk) r = { ok: true, warn: 'lupe', best: user, alt: true };
      field().disabled = true;
      if (part) { part.mark(user, it.answers); const w = wrap.querySelector('.p-whole'); if (w) w.remove(); }
      if (sent) { const bl = sent.querySelector('.blank'); if (bl) { bl.textContent = r.ok ? user : (r.best || it.answers[0]); bl.classList.add('filled'); } }
      const parts = it.translate && !r.ok ? S.check.parts(user, it.answers) : null;
      return { ok: r.ok, user, expected: r.best || it.answers[0], warn: r.warn, gender: r.gender, synonym: r.synonym, main: it.word ? it.word.es : it.answers[0], x: it.x, alts: it.answers, hinted: help.hints(), alt: r.alt, parts };
    };
    return wrap;
  };

  R.listen = (it, ctx) => {
    setTimeout(() => Speech.say(it.text), 300);
    // Herkansing van een dictee met fouten: de woorden die je goed had staan er al, alleen de foute zijn vakjes
    let part = S.check.partsUsable(it.keep) ? partialInput(it.keep, ctx) : null;
    let inp = part ? null : textInput('Typ wat je hoort…');
    const field = () => part || inp;
    const help = typeHelp({ focus: o => field().focus(o), set disabled(v) { field().disabled = v; } }, ctx, () => it.text,
      () => ctx.submit({ ok: false, dontKnow: true, user: '', expected: it.text, nl: it.nl }));
    const bar = accentBar(() => part ? part.current() : inp);
    const body = [];
    if (part) {
      const note = h('div', { class: 'p-note' }, '🔁 De woorden die je de vorige keer goed had, staan er al. Luister en vul alleen de lege vakjes in.');
      const whole = h('button', { class: 'btn link small p-whole', type: 'button', onclick: () => {
        if (ctx.answered()) return;
        // toch liever de hele zin zelf typen
        inp = textInput('Typ wat je hoort…'); inp.addEventListener('input', () => ctx.can(inp.value.trim().length > 0));
        part.el.replaceWith(inp); part = null; whole.remove(); note.remove(); ctx.can(false); inp.focus({ preventScroll: true });
      } }, '✏️ Liever de hele zin typen');
      body.push(note, part.el, bar, help.el, whole);
    } else {
      inp.addEventListener('input', () => ctx.can(inp.value.trim().length > 0));
      body.push(inp, bar, help.el);
    }
    setTimeout(() => field().focus({ preventScroll: true }), 80);
    ctx.evaluate = () => {
      help.done();
      const user = (part ? part.value() : inp.value).trim(); field().disabled = true; const hinted = help.hints();
      if (part) { part.mark(user, [it.text]); const w = wrap.querySelector('.p-whole'); if (w) w.remove(); }
      const r = S.check.check(user, [it.text]);
      if (r.ok) return { ok: true, user, expected: it.text, warn: r.warn, nl: it.nl, hinted };
      const sim = S.check.similarity(user, it.text);
      if (sim >= 0.88) return { ok: true, user, expected: it.text, warn: 'typo', nl: it.nl, hinted };
      // per woord: wat had je al goed? (groen/rood in de feedback, en bij de herkansing alvast ingevuld)
      return { ok: false, user, expected: it.text, nl: it.nl, hinted, parts: S.check.parts(user, [it.text]) };
    };
    const wrap = h('div', { class: 'listen' },
      h('div', { class: 'instr' }, T('listen')),
      Speech.canSpeak() ? h('div', { class: 'row gap center' }, speakBtn(it.text, { big: true }), speakBtn(it.text, { slow: true })) : h('p', { class: 'warn' }, 'Je browser heeft geen voorleesfunctie. Lees de zin: ' + it.text),
      ...body);
    return wrap;
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
        if (mic.classList.contains('rec')) { live.state('stopping'); Speech.stopListening(); return; }
        Speech.stop(); mic.classList.add('rec'); status.textContent = ''; live.start();
        try {
          const alts = await Speech.listen(live.hooks());
          mic.classList.remove('rec'); tries++; live.hide();
          const best = alts.map(a => [a, S.check.similarity(a, it.text)]).sort((a, b) => b[1] - a[1])[0];
          heard.innerHTML = ''; heard.append(h('div', { class: 'small muted' }, 'Ik hoorde:'), h('div', { class: 'es' }, '«' + best[0] + '»'));
          const score = Math.round(best[1] * 100);
          if (best[1] >= 0.75) { status.textContent = ''; ctx.submit({ ok: true, user: best[0], expected: it.text, speakScore: score }); }
          else if (tries >= 3) { status.textContent = ''; ctx.submit({ ok: false, user: best[0], expected: it.text, speakScore: score }); }
          else { status.textContent = `Score ${score}% — probeer het nog eens (poging ${tries}/3)`; Sound.bad(); }
        } catch (e) { mic.classList.remove('rec'); live.fail(e); }
      };
      const live = S.Mic.live();
      wrap.append(h('div', { class: 'center' }, mic), live.el, status);
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
    /* Typen kiest een tegel (zoals bij Duolingo): "e" → ¿Eres. Beginnen meer woorden zo, typ dan verder.
       Leestekens (¿ ¡ . ,) tellen niet mee en accenten/ñ mogen zonder (e = é, n = ñ). */
    const fold = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]/gu, '');
    let buf = '';
    const tiles = [];
    const KB_TIP = '⌨️ Met een toetsenbord: typ de eerste letters van een woord.';
    const kbTip = h('p', { class: 'muted small order-kb' }, KB_TIP);
    function paint() {
      const cands = buf ? tiles.filter(x => x.t.parentNode === pool && x.key.startsWith(buf)) : [];
      tiles.forEach(x => {
        const on = buf && x.t.parentNode === pool && x.key.startsWith(buf);
        x.t.classList.toggle('typed', !!on);
        x.t.classList.toggle('dim', !!buf && x.t.parentNode === pool && !on);
        x.t.textContent = '';
        if (!on) { x.t.textContent = x.o.w; return; }
        // markeer de getypte letters: tel letters (zonder leestekens) tot buf.length
        let n = 0, cut = 0;
        for (const ch of x.o.w) { cut += ch.length; if (fold(ch)) n++; if (n >= buf.length) break; }
        x.t.append(h('span', { class: 'tl-hit' }, x.o.w.slice(0, cut)), x.o.w.slice(cut));
      });
      const ex = cands.find(x => x.key === buf);
      kbTip.textContent = ex ? '⏎ Enter of spatie kiest «' + ex.o.w + '», of typ verder.' : KB_TIP;
      kbTip.classList.toggle('show', !!ex);
      return cands;
    }
    function move(x) {
      if (x.t.parentNode === pool) { line.append(x.t); chosen.push(x.o); } else { pool.append(x.t); chosen.splice(chosen.indexOf(x.o), 1); }
      buf = ''; paint();
      ctx.can(chosen.length === words.length);
    }
    order.forEach(o => {
      const t = h('button', { class: 'tile', type: 'button', lang: 'es' }, o.w);
      const x = { o, t, key: fold(o.w) };
      tiles.push(x);
      t.onclick = () => {
        if (ctx.answered()) return;
        Sound.tap(); move(x);
      };
      pool.append(t);
    });
    ctx.keys = (k, e) => {
      if (ctx.answered()) return false;
      if (k === 'Backspace') {
        if (buf) { buf = buf.slice(0, -1); paint(); }
        else if (chosen.length) { const last = chosen[chosen.length - 1]; move(tiles.find(x => x.o === last)); Sound.tap(); }
        if (e) e.preventDefault();
        return true;
      }
      if (k === 'Escape' && buf) { buf = ''; paint(); return true; }
      // Enter/spatie met getypte letters: kies het woord dat precies zo heet (bijv. "de" naast "del")
      if ((k === 'Enter' || k === ' ') && buf) {
        const ex = tiles.filter(x => x.t.parentNode === pool && x.key === buf);
        if (ex.length) { Sound.tap(); move(ex[0]); }
        if (e) e.preventDefault();
        return true;
      }
      if (typeof k !== 'string' || k.length !== 1) return false;
      const c = fold(k); if (!c) return false;
      const next = buf + c;
      const cands = tiles.filter(x => x.t.parentNode === pool && x.key.startsWith(next));
      if (!cands.length) { // niets past: tegels even laten schudden
        pool.classList.remove('shake'); void pool.offsetWidth; pool.classList.add('shake');
        setTimeout(() => pool.classList.remove('shake'), 400);
        return true;
      }
      buf = next;
      // uniek (of alleen dezelfde woorden, bijv. twee keer "de")? Dan meteen kiezen.
      if (cands.every(x => x.key === cands[0].key)) {
        const x = cands[0]; paint(); Sound.tap();
        x.t.classList.add('picked');
        setTimeout(() => { x.t.classList.remove('picked'); }, 250);
        move(x);
      } else paint();
      return true;
    };
    ctx.evaluate = () => {
      buf = ''; paint();
      const user = chosen.map(c => c.w).join(' ');
      const ok = S.check.norm(user) === S.check.norm(it.target);
      line.classList.add(ok ? 'right' : 'wrong');
      return { ok, user, expected: it.target, nl: it.nl };
    };
    return h('div', { class: 'order' }, h('div', { class: 'instr' }, T('order')), it.nl ? h('div', { class: 'prompt small' }, it.nl) : null, line, pool, kbTip);
  };

  R.match = (it, ctx) => {
    const left = U.shuffle(it.pairs.map((p, i) => ({ t: p[0], i }))), right = U.shuffle(it.pairs.map((p, i) => ({ t: p[1], i })));
    let sel = null, done = 0, mistakes = 0;
    const L = h('div', { class: 'col' }), Rr = h('div', { class: 'col' });
    const LET = 'abcdefghij';
    const btnsL = [], btnsR = [];
    function mk(o, side, n) {
      const key = side === 'l' ? String(n + 1) : LET[n];
      // Label (1–5 links, a–e rechts): tik of typ bijv. "1" en dan "a" om te koppelen.
      const b = h('button', { class: 'mt', type: 'button', 'data-i': o.i, 'data-k': key }, h('span', { class: 'k', 'aria-hidden': 'true' }, key), h('span', { class: 'mt-t', lang: side === 'l' ? 'es' : 'nl' }, o.t));
      (side === 'l' ? btnsL : btnsR).push(b);
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
    left.forEach((o, n) => L.append(mk(o, 'l', n))); right.forEach((o, n) => Rr.append(mk(o, 'r', n)));
    ctx.keys = k => {
      const key = String(k).toLowerCase();
      const n = +key, li = LET.indexOf(key);
      const b = n >= 1 && n <= btnsL.length ? btnsL[n - 1] : (key.length === 1 && li >= 0 && li < btnsR.length ? btnsR[li] : null);
      if (b && !b.disabled) b.click();
    };
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
          await S.AI.stream({ system: S.AI.writingSystem(), messages: [{ role: 'user', content: 'Task (in ' + (S.course.ui === 'es' ? 'Spanish' : 'Dutch') + '): ' + it.task.nl + '\n\nMy text:\n' + ta.value.trim() }], maxTokens: 2000, effort: 'medium', onText: t => { box.innerHTML = S.md(t); } });
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
    // hervatten: de bewaarde rij, antwoorden en score van een onderbroken les terugzetten
    const R0 = session.resume ? S.Paused.unpack(session.resume) : null;
    const queue = R0 ? R0.queue : session.items.filter(Boolean).slice();
    if (R0) S.Gen.attachSrc(queue); // hervatte toets van vóór v1.16.1: tekst alsnog bij de leesvraag
    const graded = R0 ? R0.graded : new Map(); // item -> first result
    const total = queue.filter(it => !it.orig && isGraded(it)).length;
    let idx = 0, activeMs = 0, last = Date.now(), xp = 0, streak = 0, bestStreak = 0, misses = 0, answered = false, leaveFns = [];
    let paidXp = 0, paidMs = 0; // al bijgeschreven bij een eerdere pauze
    const mistakes = R0 ? R0.mistakes : [];
    if (R0) ({ idx, activeMs, xp, streak, bestStreak, paidXp, paidMs } = R0);
    const canPause = !!hooks.persist && !session.timer;
    function persist(at) {
      if (!canPause) return;
      if (at == null) { hooks.persist(null); return; }
      if (at <= 0 || at > queue.length) return;
      try { hooks.persist(S.Paused.pack({ queue, idx: at, graded, mistakes, xp, streak, bestStreak, activeMs, paidXp, paidMs })); } catch (e) { /* niet te bewaren: dan maar niet */ }
    }
    const timerEnd = session.timer ? Date.now() + session.timer * 1000 : null;

    const bar = h('i'); const count = h('span', { class: 'ls-count' });
    const closeBtn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Stoppen', onclick: () => tryClose() }, '✕');
    const timerEl = timerEnd ? h('span', { class: 'ls-timer' }) : null;
    let body = h('div', { class: 'ls-body' });
    const fb = h('div', { class: 'ls-fb' });
    const mainBtn = h('button', { class: 'btn primary wide', type: 'button' });
    const skipBtn = h('button', { class: 'btn link', type: 'button' });
    // terug naar uitleg/dialoog/kaart die je net (per ongeluk) wegtikte; nooit naar een al beantwoorde vraag
    const backBtn = h('button', { class: 'btn ghost ls-back', type: 'button', hidden: true, 'aria-label': 'Terug naar de vorige uitleg', onclick: () => { if (canBack()) { touch(); idx--; show(); } } }, '← Terug');
    // bij vragen over een dialoog of leestekst: de tekst nog eens bekijken zonder je plek kwijt te raken
    const peekBtn = h('button', { class: 'btn ghost small ls-peek-btn', type: 'button', hidden: true, onclick: () => openPeek() });
    let peekEl = null;
    function peekSource() {
      if (answered || timerEnd) return null;
      const cur = queue[idx];
      if (cur && cur.src) return cur.src; // vraag die zijn eigen tekst meebrengt (bijv. leesvraag in de unittoets)
      if (session.mode === 'exam') return null;
      for (let i = Math.min(idx, queue.length) - 1; i >= 0; i--) if (['dialogue', 'reading'].includes(queue[i].kind)) return queue[i];
      return null;
    }
    function closePeek() { if (!peekEl) return; peekEl._leave.forEach(f => f()); peekEl.remove(); peekEl = null; }
    function openPeek() {
      const src = peekSource(); if (!src) return;
      closePeek();
      const leave = [], ctx = { free() {}, auto() {}, onLeave: f => leave.push(f), answered: () => false, submit() {} };
      peekEl = h('div', { class: 'ls-peek', role: 'dialog', 'aria-modal': 'true' },
        h('div', { class: 'ls-peek-top' }, h('button', { class: 'btn primary', type: 'button', onclick: closePeek }, '← Terug naar de vraag')),
        h('div', { class: 'ls-body' }, R[src.kind](src, ctx)));
      peekEl._leave = leave;
      root.append(peekEl);
    }
    const footNote = h('p', { class: 'ls-note small muted', hidden: true });
    const foot = h('div', { class: 'ls-foot' }, fb, h('div', { class: 'ls-actions' }, backBtn, skipBtn, mainBtn), footNote);
    root.append(h('div', { class: 'ls' }, h('div', { class: 'ls-top' }, closeBtn, h('div', { class: 'ls-bar' }, bar), timerEl, peekBtn, count), body, foot));

    let tick = null;
    if (timerEnd) tick = setInterval(() => { const s = Math.max(0, Math.round((timerEnd - Date.now()) / 1000)); timerEl.textContent = '⏱ ' + s + 's'; if (s <= 0) { clearInterval(tick); finish(); } }, 250);

    /* Elke oefening krijgt een nieuw scrollvak. iPadOS/WebKit (Safari, Edge) tekende het hergebruikte
       vak soms niet opnieuw na het wisselen van de inhoud: dan bleef een strookje van de vorige oefening
       staan en waren de antwoordknoppen grotendeels onzichtbaar. */
    function freshBody() { const nb = h('div', { class: 'ls-body' }); body.replaceWith(nb); body = nb; }
    /* Ingezoomd blijven hangen (dubbeltik op iPad) liet bij een nieuwe stap alleen een stukje van het
       scherm zien, bijv. alleen de 🐢-knop en «Verder». Bij elke nieuwe stap zoomen we weer helemaal uit. */
    function unzoom() {
      const vv = window.visualViewport;
      if (!vv || vv.scale <= 1.01) return;
      const m = document.querySelector('meta[name=viewport]'); if (!m) return;
      const c = m.getAttribute('content');
      m.setAttribute('content', c + ', maximum-scale=1');
      setTimeout(() => m.setAttribute('content', c), 300); // daarna mag je weer zelf knijpzoomen
      window.scrollTo(0, 0);
    }
    function isGraded(it) { return !['card', 'info', 'dialogue', 'write'].includes(it.kind); }
    function touch() { const n = Date.now(); activeMs += Math.min(n - last, 60000); last = n; }
    function progress() {
      const doneN = [...graded.keys()].length;
      const pct = total ? doneN / total : idx / Math.max(1, queue.length);
      bar.style.width = Math.round(Math.min(1, session.mode === 'learn' || session.mode === 'review' ? idx / queue.length : pct) * 100) + '%';
      count.textContent = Math.min(idx + 1, queue.length) + '/' + queue.length;
    }
    function onKey(e) {
      // een vraag die zelf toetsen afhandelt (bijv. woordtegels typen) mag eerst; die geeft true terug als hij de toets gebruikt
      if (!answered && ctxObj && ctxObj.keys && !e.metaKey && !e.ctrlKey && !(e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable))
        && ['Escape', 'Enter', ' ', 'Backspace'].includes(e.key) && ctxObj.keys(e.key, e) === true) return;
      if (e.key === 'Escape') { tryClose(); return; }
      if (e.target && e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'Enter') { if (!mainBtn.disabled && mainBtn.offsetParent) { e.preventDefault(); mainBtn.click(); } return; }
      // spatiebalk = Verder/Controleer, behalve in een tekstveld (daar typ je gewoon een spatie)
      if (e.key === ' ' && !(e.target && (e.target.tagName === 'INPUT' || e.target.isContentEditable))) {
        e.preventDefault(); // ook geen klik op een knop die toevallig de focus heeft
        if (!e.repeat && !mainBtn.disabled && mainBtn.offsetParent) mainBtn.click();
        return;
      }
      if (!answered && ctxObj && ctxObj.keys && !e.metaKey && !e.ctrlKey && !(e.target && e.target.tagName === 'INPUT')) ctxObj.keys(e.key, e);
    }
    document.addEventListener('keydown', onKey);
    let ctxObj = null;

    function canBack() {
      if (answered || idx <= 0 || idx > queue.length || timerEnd || session.mode === 'exam') return false;
      const prev = queue[idx - 1];
      return !!prev && !prev.orig && ['card', 'info', 'dialogue', 'reading', 'write'].includes(prev.kind);
    }
    function show() {
      closePeek(); unzoom();
      leaveFns.forEach(f => f()); leaveFns = [];
      if (idx >= queue.length) return finish();
      progress(); persist(idx);
      const it = queue[idx];
      answered = false; fb.innerHTML = ''; fb.className = 'ls-fb'; foot.classList.remove('ok', 'bad');
      skipBtn.hidden = true; skipBtn.onclick = null;
      backBtn.hidden = !canBack();
      if (!backBtn.hidden) { const k = queue[idx - 1].kind; backBtn.textContent = k === 'dialogue' ? '← Dialoog' : k === 'reading' ? '← Tekst' : '← Terug'; }
      const ps = canBack() ? null : peekSource();
      peekBtn.hidden = !ps; if (ps) peekBtn.textContent = ps.kind === 'dialogue' ? '💬 Dialoog' : '📖 Tekst';
      mainBtn.disabled = true; mainBtn.textContent = T('check'); mainBtn.hidden = false;
      const ctx = ctxObj = {
        answered: () => answered,
        mode: session.mode,
        can: v => { mainBtn.disabled = !v; },
        free: (label) => { mainBtn.disabled = false; mainBtn.textContent = label || T('next'); mainBtn.onclick = () => { touch(); idx++; show(); }; },
        auto: () => { mainBtn.hidden = true; },
        skip: (label) => { skipBtn.hidden = false; skipBtn.textContent = label || T('skip'); skipBtn.onclick = () => { touch(); idx++; show(); }; },
        submit: r => feedback(it, r),
        onLeave: f => leaveFns.push(f),
        evaluate: null, keys: null
      };
      mainBtn.onclick = () => { if (ctx.evaluate) feedback(it, ctx.evaluate()); };
      freshBody();
      const el = (R[it.kind] || R.info)(it, ctx);
      // brengt de vraag zijn eigen tekst mee? Dan ook een duidelijke knop boven de vraag
      if (it.src && ps === it.src) {
        const t = it.src.kind === 'dialogue' ? (it.src.dialogue.place || 'de dialoog') : it.src.reading.t;
        el.prepend(h('button', { class: 'btn ghost small ls-src-btn', type: 'button', onclick: () => openPeek() }, (it.src.kind === 'dialogue' ? '💬 Lees eerst de dialoog' : '📖 Lees eerst de tekst') + ' «' + t + '»'));
      }
      body.append(el);
    }

    function feedback(it, r) {
      if (answered) return; answered = true; touch(); lastR = r;
      skipBtn.hidden = true; backBtn.hidden = true; peekBtn.hidden = true; closePeek();
      const first = !graded.has(it.orig || it);
      if (first) graded.set(it.orig || it, r.ok);
      if (r.ok) { streak++; bestStreak = Math.max(bestStreak, streak); xp += it.retry || r.hinted || r.alt ? 5 : 10; } else streak = 0;
      // twee keer achter elkaar fout? Dan eerst een makkelijkere vraag, zodat je niet in een reeks pittige vastloopt
      if (r.ok) misses = 0; else if (++misses >= 2 && session.mode !== 'exam' && !session.timer && S.Gen.easeNext(queue, idx + 1)) misses = 0;
      if (!r.ok && !r.self && r.expected) mistakes.push({ it, r });
      // item direct verwerken (SRS + statistiek) — alleen eerste poging
      if (first && hooks.onItem) hooks.onItem(it, r.ok, r);
      if (session.mode === 'exam') { idx++; setTimeout(show, 120); return; }
      const retryLater = (!r.ok || r.hinted || r.alt) && !it.retry && (session.mode === 'learn' || session.mode === 'review') && !['match', 'speak'].includes(it.kind);
      (r.ok ? Sound.good : Sound.bad)();
      // opnieuw aanbieden in leer-/herhaalmodus
      if (retryLater) {
        const copy = { ...it, retry: true, orig: it.orig || it };
        if (r.alt) mainOnlyCopy(copy);
        // zin half goed: straks alleen de foute woorden opnieuw invullen
        if (S.check.partsUsable(r.parts)) { copy.keep = { a: r.parts.a, k: r.parts.k }; r.keepLater = true; }
        if (copy.options) copy.options = U.shuffle(copy.options);
        // niet alle herkansingen als één blok aan het eind: een paar vragen later terug, tussen de rest door
        const at = idx + 5;
        if (at < queue.length && session.mode === 'review') queue.splice(at, 0, copy); else queue.push(copy);
      }
      touch(); persist(idx + 1); // dit antwoord is verwerkt: na verversen ga je verder met de volgende vraag
      renderFeedback(it, r);
      mainBtn.hidden = false; mainBtn.disabled = false; mainBtn.textContent = T('next');
      mainBtn.onclick = () => { touch(); idx++; show(); };
      setTimeout(() => mainBtn.focus({ preventScroll: true }), 50);
      const sayIt = r.expected && (it.speakAnswer || it.sentence || it.kind === 'listen' || it.word);
      if (sayIt && S.Store.state.settings.autoSpeak && it.kind !== 'speak') {
        let txt = it.sentence ? it.sentence.replace('___', (r.ok ? r.user : r.expected)) : (it.kind === 'mc' && it.word && it.q === 'Wat betekent dit?' ? it.word.es : r.expected);
        // Goed, maar anders getypt (zonder accent, synoniem)? Dan liever de ingesproken versie van het verwachte antwoord.
        if (it.sentence && r.ok && !Speech.hasClip(txt) && Speech.hasClip(it.sentence.replace('___', r.expected))) txt = it.sentence.replace('___', r.expected);
        setTimeout(() => Speech.say(txt), 150);
      }
    }

    /* Vooraf geschreven uitleg bij de zin van deze oefening (niet bij losse woorden). */
    function feedbackNotes(it, r) {
      if (it.word || it.conj || it.kind === 'match') return it.i ? [{ html: it.i }] : [];
      const exp = r.expected || it.answer || '';
      const text = it.sentence ? it.sentence.replace('___', exp) : (it.target || it.text || (it.translate ? exp : ''));
      if (!text && !it.i) return [];
      return findNotes(text, { extra: it.i });
    }

    function renderFeedback(it, r) {
      foot.classList.add(r.ok ? 'ok' : 'bad');
      fb.className = 'ls-fb show';
      // Profe Lupe reageert op je antwoord (klein, naast de titel)
      const streakLine = r.ok && session.mode !== 'exam' ? S.Tutor.lines.streak(streak) : null;
      const fbTitle = t => S.Tutor.coachOn() ? h('div', { class: 'fb-head' }, S.Tutor.avatar(34, 'fb-lupe' + (r.ok ? '' : ' sad')), h('div', { class: 'fb-title' }, streakLine || t)) : h('div', { class: 'fb-title' }, streakLine || t);
      if (r.silent && r.ok) { fb.append(fbTitle(U.pick(PRAISE))); return; }
      fb.append(fbTitle(r.dontKnow ? 'Geen probleem!' : r.ok ? U.pick(PRAISE) : U.pick(OOPS)));
      if (r.dontKnow) fb.append(h('div', { class: 'small' }, '🔁 Dit komt later terug in je herhaling.'));
      if (r.ok && r.hinted) fb.append(h('div', { class: 'small' }, '💡 Goed, met ' + (r.hinted === 1 ? 'een hint' : r.hinted + ' hints') + ' — je krijgt hem straks nog een keer.'));
      if (r.matchMistakes) fb.append(h('div', null, r.matchMistakes + (r.matchMistakes === 1 ? ' fout' : ' fouten') + ' — die woorden komen terug in je herhaling.'));
      if (r.speakScore != null) fb.append(h('div', null, 'Uitspraakscore: ' + r.speakScore + '%'));
      if (r.ok && r.warn === 'accent') fb.append(h('div', null, '✍️ Let op de accenten: ', h('b', { lang: 'es' }, r.expected)));
      if (r.ok && r.warn === 'enye') fb.append(h('div', null, '✍️ Let op de ñ: ', h('b', { lang: 'es' }, r.expected)));
      if (r.ok && r.warn === 'typo') fb.append(h('div', null, '🔤 Kleine typfout — precies: ', h('b', { lang: 'es' }, r.expected)));
      if (r.ok && r.warn === 'article') fb.append(h('div', null, '📌 Vergeet het lidwoord niet: ', h('b', { lang: 'es' }, r.expected)));
      if (r.ok && r.warn === 'lupe') fb.append(h('div', null, '🤖 Lupe keurde dit antwoord eerder goed. In de les staat: ', h('b', { lang: 'es' }, (r.alts || it.answers)[0]), speakBtn((r.alts || it.answers)[0])),
        h('div', { class: 'small' }, it.translate ? '🔁 Leer ook de zin uit de les: je krijgt hem straks nog een keer.' : '🔁 Leer ook het woord uit de les: je krijgt het straks nog een keer.'));
      if (r.ok && r.warn === 'synonym') fb.append(h('div', null, '👍 Ook goed! In de les staat: ', h('b', { lang: 'es' }, r.main)));
      if (!r.ok && r.expected && r.matchMistakes == null) {
        fb.append(h('div', { class: 'fb-exp' }, T('correct') + ': ', h('b', { lang: 'es' }, r.expected), (it.speakAnswer || it.kind === 'listen' || it.sentence) ? speakBtn(it.sentence ? it.sentence.replace('___', r.expected) : r.expected) : null));
        if (r.user && it.kind !== 'mc') fb.append(h('div', { class: 'small muted' }, 'Jouw antwoord: ' + r.user));
        if (r.parts && r.parts.k.length) {
          fb.append(h('div', { class: 'small fb-wrong' }, 'Per woord: ', wordDiff(r.parts), h('span', { class: 'muted' }, ' (groen goed' + (r.parts.st.includes('accent') ? ' · geel: let op het accent' : '') + ' · rood fout)')));
          if (r.keepLater) fb.append(h('div', { class: 'small fb-wrong' }, '🔁 Straks staan de groene woorden er al en vul je alleen de rode opnieuw in.'));
        }
        if (r.warn === 'article-wrong') {
          const noun = r.expected.replace(S.Gen.ART, '');
          fb.append(h('div', null, '📌 Let op het lidwoord: ', h('b', { lang: 'es' }, r.expected), r.gender ? ' (' + noun + ' is ' + r.gender + ')' : ''));
        }
        if (r.synonym && r.main) fb.append(h('div', { class: 'small muted' }, 'In de les staat: ', h('b', { lang: 'es' }, r.main)));
        else if (it.syn && it.syn.length) fb.append(h('div', { class: 'small muted' }, 'Ook goed: ' + it.syn.filter(x => !/\//.test(x)).slice(0, 2).join(', ')));
      }
      if (!r.ok && it.conj && S.conj.table(it.conj.verb, it.conj.tense)) fb.append(conjTable(it));
      if (r.ok && it.alts && it.alts.length > 1 && it.translate) {
        const other = it.alts.filter(a => S.check.norm(a) !== S.check.norm(r.user)).slice(0, 1);
        if (other.length) fb.append(h('div', { class: 'small muted' }, 'Ook goed: ' + other[0]));
      }
      if (r.nl) fb.append(h('div', { class: 'small muted' }, '🇳🇱 ' + r.nl));
      if (r.x) fb.append(h('div', { class: 'fb-x' }, '💡 ' + r.x));
      const notes = feedbackNotes(it, r);
      if (notes.length) {
        // fout: uitleg staat meteen open; goed: klap hem zelf open als je wilt
        const nt = noteToggle(notes, { open: !r.ok, label: 'ⓘ Uitleg', head: r.ok ? null : 'ⓘ Uitleg' });
        fb.append(h('div', { class: 'xi-fb' }, r.ok ? nt.btn : null, nt.box));
      }
      // AI-beoordeling bij vrije vertaling
      if (!r.ok && it.mainOnly && S.Mistakes && S.Mistakes.accepted(it.prompt, r.user)) {
        fb.querySelectorAll('.fb-wrong').forEach(x => x.remove());
        fb.append(h('div', { class: 'small' }, '🤖 Dit antwoord keurde Lupe al goed. Nu oefen je de zin zoals hij in de les staat.'));
      } else if (!r.ok && canRegrade(it) && r.user) {
        const b = h('button', { class: 'btn small ghost fb-regrade', type: 'button' }, '🤖 Toch goed? Laat de AI het beoordelen');
        b.onclick = async () => {
          // zonder API-sleutel op dit apparaat (de sleutel wordt niet gesynchroniseerd): eerst de sleutel invullen
          if (!S.AI.enabled()) {
            if (!fb.querySelector('.fb-nokey')) fb.insertBefore(h('div', { class: 'small muted fb-nokey' },
              '🔑 Op dit apparaat staat nog geen API-sleutel (die wordt niet mee-gesynchroniseerd). Plak hem in het venster van Lupe en tik daarna nog een keer op deze knop.'), b);
            if (S.Ask) S.Ask.open(); else location.hash = '#/ajustes';
            return;
          }
          const nk = fb.querySelector('.fb-nokey'); if (nk) nk.remove();
          b.disabled = true; b.textContent = 'AI beoordeelt…';
          try {
            const j = await S.AI.checkTranslation(it.prompt, r.user, r.alts || it.answers);
            b.remove();
            // goedgekeurd: in het rapport voor de volgende update (ontbrekend antwoord of fout modelantwoord)
            const fix = j.correct && S.Mistakes ? S.Mistakes.regrade(it.orig || it, r.user, j) : null;
            if (fix) S.Store.save();
            fb.append(h('div', { class: 'fb-ai' }, (j.correct ? '✅ ' : '❌ ') + j.feedback, j.better ? h('div', { class: 'small', lang: 'es' }, '→ ' + j.better) : null,
              fix ? h('div', { class: 'small muted fb-fix' }, '📋 Genoteerd in je rapport voor de volgende update. Dit antwoord telt voortaan als goed.') : null));
            if (j.correct) {
              foot.classList.remove('bad'); foot.classList.add('ok');
              const ft = fb.querySelector('.fb-title'); if (ft) ft.textContent = esMode() ? '¡Sí estaba bien!' : 'Toch goed!';
              const fa = fb.querySelector('.fb-lupe'); if (fa) fa.classList.remove('sad');
              fb.querySelectorAll('.fb-wrong').forEach(x => x.remove());
              const fe = fb.querySelector('.fb-exp'); if (fe && fe.firstChild) fe.firstChild.textContent = esMode() ? 'En la lección dice: ' : 'In de les staat: ';
              graded.set(it.orig || it, true);
              // de herkansing blijft: dan oefen je de zin zoals hij in de les staat
              const rq = queue.find((q, i) => i > idx && q.orig === (it.orig || it) && q.retry);
              if (rq) { mainOnlyCopy(rq); fb.append(h('div', { class: 'small' }, it.translate ? '🔁 Leer ook de zin uit de les: je krijgt hem straks nog een keer.' : '🔁 Leer ook het woord uit de les: je krijgt het straks nog een keer.')); }
              const mi = mistakes.findIndex(m => m.it === it); if (mi >= 0) mistakes.splice(mi, 1);
              hooks.onItem && hooks.onItem(it, true, { ...r, ok: true, override: true, alt: true });
              xp += 5; progress(); if (idx < queue.length && queue[idx] === it) persist(idx + 1);
            }
          } catch (e) { b.disabled = false; b.textContent = '⚠️ ' + e.message; }
        };
        fb.append(b);
      }
    }

    /* Herkansing na een goedgekeurd alternatief: nu telt alleen de zin uit de les. */
    function mainOnlyCopy(q) { q.mainOnly = true; q.keep = null; if (q.translate) q.q = 'Vertaal zoals in de les'; else q.syn = []; }

    /* Wat Lupe ziet als je haar iets vraagt tijdens de les. */
    let lastR = null;
    function askContext() {
      const it = queue[Math.min(idx, queue.length - 1)];
      if (!it) return null;
      const txt = el => String((el && (el.innerText || el.textContent)) || '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim().slice(0, 3000);
      let src = null;
      if (queue[idx] && queue[idx].src) src = queue[idx].src;
      else for (let i = Math.min(idx, queue.length - 1); i >= 0; i--) if (['dialogue', 'reading'].includes(queue[i].kind)) { src = queue[i]; break; }
      const parts = [];
      if (session.title) parts.push('Lesson: ' + session.title);
      if (src && src.dialogue) parts.push((src === it ? 'The learner is reading this dialogue' : 'Dialogue from earlier in this lesson') + (src.dialogue.place ? ' (' + src.dialogue.place + ')' : '') + ':\n' + src.dialogue.lines.map(([who, es, nl]) => who + ': ' + es + '  [NL: ' + nl + ']').join('\n'));
      if (src && src.reading) parts.push((src === it ? 'The learner is reading this text' : 'Text from earlier in this lesson') + ((src.reading.t || src.reading.title) ? ' "' + (src.reading.t || src.reading.title) + '"' : '') + ':\n' + src.reading.p.map(([es, nl]) => es + '  [NL: ' + nl + ']').join('\n'));
      const question = src !== it;
      if (question) {
        parts.push('Current exercise on screen' + (answered ? ' (already answered)' : ' (NOT answered yet)') + ':\n' + txt(body));
        if (answered) parts.push('Feedback shown after the answer:\n' + txt(fb) + (lastR && lastR.user ? '\nLearner answered: ' + lastR.user : '') + (lastR && lastR.expected ? '\nExpected answer: ' + lastR.expected : ''));
      }
      const kindNl = { dialogue: 'Dialoog', reading: 'Leestekst', card: 'Nieuw woord', info: 'Uitleg' }[it.kind];
      const what = kindNl || (answered ? 'Vraag en jouw antwoord' : 'Vraag'), title = session.title || '';
      const label = !title ? what : title.toLowerCase().includes(what.toLowerCase()) ? title : what + ' · ' + title;
      return { label, kind: src === it ? it.kind : 'question', question: question && isGraded(it), answered, ok: lastR ? lastR.ok : null, text: parts.join('\n\n') };
    }

    function summary() {
      const vals = [...graded.values()];
      const okN = vals.filter(Boolean).length;
      // newXp/newMinutes: wat nog niet bij een eerdere pauze is bijgeschreven
      return { total: vals.length, ok: okN, score: vals.length ? okN / vals.length : 1, xp, minutes: activeMs / 60000, newXp: xp - paidXp, newMinutes: Math.max(0, activeMs - paidMs) / 60000, mistakes, bestStreak, mode: session.mode };
    }
    function finish() {
      touch(); if (tick) clearInterval(tick);
      persist(null);
      const sum = summary();
      const extra = (hooks.onFinish && hooks.onFinish(sum)) || {};
      if (session.mode === 'exam' && extra.silent) { close(true); extra.next && extra.next(); return; }
      freshBody(); fb.innerHTML = ''; fb.className = 'ls-fb'; foot.classList.remove('ok', 'bad'); skipBtn.hidden = true;
      bar.style.width = '100%';
      const pct = Math.round(sum.score * 100);
      const passed = extra.passed;
      const emoji = extra.emoji || (passed === false ? '💪' : pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '👍');
      if (passed !== false && pct >= 80) S.confetti();
      S.Sound.win();
      const line = extra.lupe || S.Tutor.lines.summary({ pct, passed, total: sum.total, mistakes: sum.mistakes.length, unitDone: extra.unitDone });
      body.append(h('div', { class: 'summary' },
        S.Tutor.hero(line, emoji, { speak: true }) || h('div', { class: 'sum-emoji' }, emoji),
        h('h2', null, extra.title || (pct >= 80 ? '¡Muy bien!' : '¡Buen trabajo!')),
        extra.text ? h('p', { class: 'center' }, extra.text) : null,
        h('div', { class: 'stats-row' },
          sum.total ? statBox(pct + '%', 'score') : null,
          statBox('+' + (sum.xp + (extra.bonusXP || 0)), 'XP'),
          statBox(Math.max(1, Math.round(sum.minutes)) + ' min', 'tijd'),
          sum.bestStreak >= 3 ? statBox('🔥 ' + sum.bestStreak, 'op rij') : null),
        typeof extra.plan === 'function' ? extra.plan(() => close(true)) : null,
        sum.mistakes.length ? h('div', { class: 'mistakes' }, h('h3', null, 'Om te onthouden'),
          dedupe(sum.mistakes).slice(0, 8).map(m => {
            const es = m.it.word ? m.it.word.es : m.it.sentence ? m.it.sentence.replace('___', m.r.expected) : m.it.conj ? m.it.person + ' ' + m.r.expected : m.r.expected;
            const sub = m.it.word ? m.it.word.nl : m.it.conj ? m.it.prompt + ' · ' + m.it.sub : (m.it.prompt || m.it.nl || m.it.q || '');
            return h('div', { class: 'mistake' }, speakBtn(m.it.word || m.it.sentence || m.it.speakAnswer || m.it.kind !== 'mc' ? es : null), h('div', null, h('div', { class: 'es', lang: 'es' }, es), h('div', { class: 'small muted' }, sub)));
          })) : null));
      mainBtn.hidden = false; mainBtn.disabled = false; mainBtn.textContent = extra.nextLabel || 'Klaar';
      mainBtn.onclick = () => { close(true); extra.next && extra.next(); };
      if (extra.note) { footNote.textContent = extra.note; footNote.hidden = false; }
      if (extra.alt) { skipBtn.hidden = false; skipBtn.textContent = extra.alt.label; skipBtn.onclick = () => { close(true); extra.alt.fn(); }; }
      setTimeout(() => mainBtn.focus({ preventScroll: true }), 50);
    }
    function dedupe(ms) { const seen = new Set(); return ms.filter(m => { const k = (m.it.word ? m.it.word.id : '') + m.r.expected; if (seen.has(k)) return false; seen.add(k); return true; }); }
    function statBox(v, l) { return h('div', { class: 'stat' }, h('b', null, v), h('span', null, l)); }
    function tryClose() {
      if (idx >= queue.length || (idx === 0 && !graded.size)) return close();
      if (canPause) {
        const at = answered ? idx + 1 : idx;
        S.confirm('Pauze nemen?', `Je bent bij vraag ${Math.min(at + 1, queue.length)} van ${queue.length}. Je antwoorden en score blijven bewaard: op de startpagina ga je later verder waar je was, ook op je andere apparaten.`, 'Pauzeren', () => close());
        return;
      }
      S.confirm('Les stoppen?', 'Wat je al geoefend hebt, telt mee voor je herhaling. De stap zelf is nog niet afgerond.', 'Stoppen', () => close());
    }
    function close(silent) {
      touch(); if (tick) clearInterval(tick);
      closePeek(); leaveFns.forEach(f => f()); Speech.stop(); Speech.abortListening();
      document.removeEventListener('keydown', onKey);
      root.hidden = true; root.innerHTML = ''; document.body.classList.remove('in-lesson');
      if (S.Ask) S.Ask.setSource(null);
      if (!silent && hooks.onAbort) {
        hooks.onAbort(summary());
        paidXp = xp; paidMs = activeMs;
        persist(answered ? idx + 1 : idx);
      }
      active = null;
      hooks.onClose && hooks.onClose();
    }
    active = { close };
    // Profe Lupe (knop rechts) kijkt mee: dialoog/tekst, de vraag, jouw antwoord en de feedback
    if (S.Ask) S.Ask.setSource(() => askContext());
    show();
  }

  S.Lesson = { run, grammarBlock, speakBtn, accentBar, T, esMode, conjTable, noteToggle, findNotes };
})(window.SPT);
