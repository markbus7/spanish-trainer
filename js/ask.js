/* «Vraag het Lupe»: een zwevende knop rechts die overal een chat met Profe Lupe opent.
   Lupe krijgt mee wat je op dat moment ziet (dialoog, leestekst, vraag, jouw antwoord en de feedback),
   zodat je kunt vragen: «waarom staat hier en clase en niet en el clase?».
   iPad/breed scherm: paneel aan de rechterkant (de les schuift opzij). iPhone: een sheet van onderen. */
(function (S) {
  'use strict';
  const st = () => S.Store.state;
  const on = () => st().settings.lupeAsk !== false;
  const chat = { messages: [], busy: false, ctrl: null };
  let fab = null, panel = null, backdrop = null, log = null, inp = null, sendBtn = null, whereEl = null, bodyEl = null;
  let source = null; // functie van de lopende les die de context geeft

  /* ---------- context: wat staat er nu op het scherm? ---------- */
  const clip = (t, n) => { t = String(t || '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim(); return t.length > n ? t.slice(0, n) + ' …' : t; };
  function visibleText(el) {
    if (!el) return '';
    // knoppen voor voorlezen e.d. weglaten; innerText geeft alleen wat zichtbaar is
    return clip(el.innerText || el.textContent || '', 3500);
  }
  function pageName() {
    const hash = (location.hash.replace(/^#\/?/, '') || 'hoy').split('/')[0];
    const tl = S.tl || (x => x);
    const names = { hoy: tl('Hoy') + ' (startpagina)', ruta: tl('Ruta') + ' (overzicht van de units)', unit: 'een unit-pagina', practica: tl('Práctica'), tablas: 'vervoegingstabellen', woorden: 'het woordenboek', woordenschat: 'Mijn woordenschat', juegos: 'woordspellen', perfil: 'het profiel', regios: 'regio’s van Latijns-Amerika', ajustes: 'Instellingen', toets: 'de niveautest', begrippen: 'Grammaticabegrippen (uitleg van grammaticale termen)' };
    return names[hash] || hash;
  }
  /** { label, text }: korte omschrijving voor de kop van het paneel en de tekst voor Lupe. */
  function context() {
    const lesson = document.getElementById('lesson');
    if (source && lesson && !lesson.hidden) {
      try { const c = source(); if (c) return c; } catch (e) { /* val terug op de schermtekst */ }
    }
    if (lesson && !lesson.hidden) return { label: 'Oefening', text: 'The learner is in an exercise. Visible screen text:\n' + visibleText(lesson) };
    const v = document.getElementById('view');
    const h1 = v && v.querySelector('h1');
    const page = (location.hash.replace(/^#\/?/, '') || 'hoy').split('/')[0];
    const label = page === 'unit' && h1 ? h1.textContent.trim() : pageName().replace(/ \(.*\)$/, '');
    return { label, text: 'The learner is on the page "' + pageName() + '" of the app. Visible screen text:\n' + visibleText(v) };
  }

  function system(ctx) {
    return S.AI.askSystem() + `

The learner opened the "Ask Lupe" side chat from somewhere in the app to ask about what they are looking at right now. Here is what is on their screen (lesson content, question, their answer, feedback):
<screen>
${ctx.text}
</screen>
Answer the learner's question about this content directly and concretely, quoting the exact ${S.lang.en} words from the screen in bold. Keep it short (max ~120 words) unless they ask for more.
If the screen shows a question the learner has not answered yet, do not simply give away the answer: give a hint or explain the rule, unless they explicitly ask for the answer.
If the course text itself contains a real mistake, say so honestly.`;
  }

  /* ---------- het paneel ---------- */
  const h = (...a) => S.U.h(...a);
  function suggestions() {
    const lesson = document.getElementById('lesson');
    const inLesson = lesson && !lesson.hidden;
    const c = inLesson && source ? (() => { try { return source(); } catch (e) { return null; } })() : null;
    const list = [];
    if (c && c.kind === 'dialogue') list.push('Leg de grammatica van deze dialoog uit');
    if (c && c.kind === 'reading') list.push('Leg de moeilijke woorden in deze tekst uit');
    if (c && c.answered) list.push(c.ok ? 'Waarom is dit goed?' : 'Waarom was mijn antwoord fout?');
    if (c && c.question && !c.answered) list.push('Geef me een hint');
    if (!list.length) list.push('Leg uit wat ik hier zie');
    list.push('Geef nog een voorbeeld');
    return list.slice(0, 3);
  }
  function renderBody() {
    if (!bodyEl) return;
    bodyEl.innerHTML = '';
    const ctx = context();
    whereEl.textContent = '📍 Lupe kijkt mee: ' + ctx.label;
    if (!S.AI.enabled()) { bodyEl.append(noKey()); return; }
    log = h('div', { class: 'ask-log', 'aria-live': 'polite' });
    if (!chat.messages.length) log.append(S.ChatUI.bubble({ role: 'assistant', content: '**¡Hola! ¿Qué quieres saber?**\n\n*Ik zie wat jij nu ziet. Vraag me bijvoorbeeld waarom er iets staat, wat een woord betekent of hoe je het zelf zegt. Nederlands mag.*', mode: 'ask', local: true }));
    chat.messages.forEach(m => log.append(S.ChatUI.bubble({ role: m.role, content: m.role === 'user' ? m.q : m.content, mode: 'ask' })));
    const chips = h('div', { class: 'ask-chips' }, suggestions().map(t => h('button', { class: 'chip', type: 'button', onclick: () => send(t) }, t)));
    inp = h('textarea', { class: 'chat-input ask-input', rows: 2, placeholder: 'Bijv.: waarom «en clase» en niet «en el clase»?' });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(inp.value); } e.stopPropagation(); });
    sendBtn = h('button', { class: 'btn primary', type: 'button', onclick: () => send(inp.value) }, 'Enviar');
    bodyEl.append(log, chips, h('div', { class: 'chat-bar ask-bar' }, inp, sendBtn),
      h('div', { class: 'ask-foot' }, chat.messages.length ? h('button', { class: 'btn link small', type: 'button', onclick: () => { stop(); chat.messages = []; renderBody(); } }, '🗑 Nieuw gesprek') : h('span')));
    scroll();
  }
  function noKey() {
    const keyIn = h('input', { class: 'input', type: 'password', placeholder: 'sk-ant-…', autocomplete: 'off' });
    const out = h('p', { class: 'small' });
    const save = async () => {
      const k = keyIn.value.trim(); if (!k) { out.textContent = 'Plak eerst je sleutel.'; return; }
      st().settings.aiKey = k; S.Store.save(); out.textContent = 'Testen…';
      try { await S.AI.test(); out.textContent = '✅ Werkt!'; setTimeout(renderBody, 600); }
      catch (e) { out.textContent = '⚠️ ' + e.message; }
    };
    return h('div', { class: 'ask-nokey' },
      h('div', { class: 'row gap' }, S.Tutor.avatar(80), h('div', null, h('b', null, '¡Hola! Soy Lupe.'), h('p', { class: 'small muted' }, 'Ik leg alles uit wat je in de app tegenkomt.'))),
      h('p', null, 'Om mij vragen te stellen heb je een eigen API-sleutel van Anthropic nodig. Je betaalt per gebruik; een vraag kost meestal minder dan een cent.'),
      h('ol', { class: 'small steps-list' },
        h('li', null, 'Open ', h('a', { href: 'https://platform.claude.com/settings/keys', target: '_blank', rel: 'noopener' }, 'deze link naar Anthropic'), ' en log in.'),
        h('li', null, 'Tik op "Create Key" en kies bij "Where does your code run?" ', h('b', null, 'Somewhere else'), '.'),
        h('li', null, 'Kopieer de sleutel en plak hem hieronder. Tegoed zet je op dezelfde site onder Billing.')),
      h('label', { class: 'field' }, h('span', null, 'API-sleutel'), keyIn),
      h('div', { class: 'row gap' }, h('button', { class: 'btn primary', type: 'button', onclick: save }, 'Opslaan en testen'), out),
      h('p', { class: 'small muted' }, '🔒 De sleutel blijft op dit apparaat en gaat alleen naar Anthropic. Je kunt hem later aanpassen in Instellingen › AI-docent.'));
  }
  function scroll() { if (log) log.scrollTop = log.scrollHeight; }
  function stop() { if (chat.ctrl) { try { chat.ctrl.abort(); } catch (e) { /* */ } } chat.ctrl = null; chat.busy = false; }

  async function send(text) {
    text = String(text || '').trim();
    if (!text || chat.busy || !S.AI.enabled()) return;
    if (st().settings.tutorVoice) S.Speech.unlock && S.Speech.unlock();
    const ctx = context();
    // de schermtekst gaat alleen mee als die veranderd is sinds de vorige vraag
    const prev = [...chat.messages].reverse().find(m => m.role === 'user');
    const um = { role: 'user', q: text, ctx: ctx.text, content: (!prev || prev.ctx !== ctx.text ? '<screen>\n' + ctx.text + '\n</screen>\n\n' : '') + text };
    chat.messages.push(um);
    log.append(S.ChatUI.bubble({ role: 'user', content: text }));
    inp.value = '';
    const am = { role: 'assistant', content: '', mode: 'ask' };
    const b = S.ChatUI.bubble(am, true); log.append(b); scroll();
    chat.busy = true; sendBtn.disabled = true;
    chat.ctrl = new AbortController();
    try {
      const msgs = chat.messages.map(m => ({ role: m.role, content: m.content }));
      const full = await S.AI.stream({ system: system(ctx), messages: msgs, maxTokens: 2000, effort: 'low', signal: chat.ctrl.signal, onText: t => { am.content = t; S.ChatUI.fillBubble(b, am); scroll(); } });
      am.content = full; S.ChatUI.fillBubble(b, am);
      chat.messages.push({ role: 'assistant', content: full });
      if (st().settings.tutorVoice) S.Tutor.say(S.Tutor.spoken(full, 'ask'));
    } catch (e) {
      chat.messages.pop();
      if (e.name !== 'AbortError') b.querySelector('.bubble-body').innerHTML = '<span class="warn">⚠️ ' + S.U.esc(e.message) + '</span>';
      else b.remove();
    }
    chat.busy = false; chat.ctrl = null; if (sendBtn) sendBtn.disabled = false; scroll();
  }

  function build() {
    whereEl = h('div', { class: 'ask-where small' });
    bodyEl = h('div', { class: 'ask-body' });
    panel = h('aside', { class: 'ask-panel', role: 'dialog', 'aria-label': 'Vraag het Profe Lupe', hidden: true },
      h('div', { class: 'ask-grab', 'aria-hidden': 'true' }),
      h('div', { class: 'ask-head' }, S.Tutor.avatar(48, 'ask-av'),
        h('div', { class: 'grow' }, h('b', null, 'Vraag het Lupe'), whereEl),
        h('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Sluiten', onclick: close }, '✕')),
      bodyEl);
    // Esc sluit het paneel; toetsen in het paneel gaan niet naar de les (Enter = «Verder»)
    panel.addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); close(); } e.stopPropagation(); });
    backdrop = h('div', { class: 'ask-backdrop', hidden: true, onclick: close });
    fab = h('button', { class: 'ask-fab', type: 'button', 'aria-label': 'Vraag het Profe Lupe', title: 'Vraag het Lupe' }, S.Tutor.avatar(46, 'ask-fab-av'), h('span', { class: 'ask-fab-q', 'aria-hidden': 'true' }, '?'));
    dragFab();
    document.body.append(backdrop, panel, fab);
  }
  /* De knop kun je omhoog/omlaag schuiven als hij iets bedekt; de plek wordt onthouden. */
  function dragFab() {
    let y0 = 0, top0 = 0, moved = false, id = null;
    const place = () => { const f = st().settings.lupeAskY; fab.style.top = f != null ? (Math.max(0.12, Math.min(0.82, f)) * 100) + '%' : ''; };
    place();
    fab.addEventListener('pointerdown', e => { id = e.pointerId; y0 = e.clientY; top0 = fab.getBoundingClientRect().top; moved = false; });
    fab.addEventListener('pointermove', e => {
      if (id !== e.pointerId) return;
      if (!moved && Math.abs(e.clientY - y0) < 8) return;
      if (!moved) { moved = true; try { fab.setPointerCapture(id); } catch (x) { /* */ } }
      const f = Math.max(0.12, Math.min(0.82, (top0 + e.clientY - y0) / window.innerHeight));
      fab.style.top = (f * 100) + '%'; fab._f = f;
    });
    const end = e => { if (id !== e.pointerId) return; id = null; if (moved && fab._f != null) { st().settings.lupeAskY = fab._f; S.Store.save(); } };
    fab.addEventListener('pointerup', end); fab.addEventListener('pointercancel', end);
    fab.addEventListener('click', e => { if (moved) { e.preventDefault(); moved = false; return; } open(); });
  }

  function isOpen() { return panel && !panel.hidden; }
  function open() {
    if (!panel) build();
    panel.hidden = false; backdrop.hidden = false;
    document.body.classList.add('ask-open');
    renderBody();
    setTimeout(() => { if (inp && window.innerWidth >= 760) inp.focus({ preventScroll: true }); }, 60);
    sync();
  }
  function close() {
    if (!panel) return;
    panel.hidden = true; backdrop.hidden = true;
    document.body.classList.remove('ask-open');
    sync();
  }
  /* Knop tonen of verbergen: niet op de Docente-pagina (daar is de chat al), niet als het paneel open is, niet als het uit staat. */
  function sync() {
    if (!fab && on()) build();
    if (!fab) return;
    const page = (location.hash.replace(/^#\/?/, '') || 'hoy').split('/')[0];
    const lesson = document.getElementById('lesson');
    const inLesson = lesson && !lesson.hidden;
    fab.hidden = !on() || isOpen() || (page === 'docente' && !inLesson);
    document.body.classList.toggle('ask-fab-on', on());
    if (!on() && isOpen()) close();
    if (isOpen()) { const c = context(); whereEl.textContent = '📍 Lupe kijkt mee: ' + c.label; }
  }
  /** De les meldt hiermee hoe Lupe de huidige oefening kan zien (null = les voorbij). */
  function setSource(fn) { source = fn; sync(); }

  function init() {
    window.addEventListener('hashchange', () => setTimeout(sync, 0));
    sync();
  }

  S.Ask = { init, open, close, sync, setSource, context, isOpen, system };
})(window.SPT);
