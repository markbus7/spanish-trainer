/* AI-docent via de Claude API (optioneel; gebruiker voert eigen API-sleutel in).
   De sleutel wordt alleen lokaal in deze browser bewaard en direct naar api.anthropic.com gestuurd. */
(function (S) {
  'use strict';
  const API = 'https://api.anthropic.com/v1/messages';
  const VERSION = '2026-10-21';
  const MODELS = [
    { id: 'claude-sonnet-5-5', label: 'Claude Sonnet 5.5 — snel en goedkoper (aanbevolen)' },
    { id: 'claude-opus-5-5', label: 'Claude Opus 5.5 — beste kwaliteit, duurder' },
    { id: 'claude-haiku-5-5', label: 'Claude Haiku 5.5 — snelst, goedkoopst' }
  ];
  const FALLBACK_MODELS = ['claude-sonnet-5-5', 'claude-opus-5-5'];

  function key() { return (S.Store.state.settings.aiKey || '').trim(); }
  function model() { const m = S.Store.state.settings.aiModel; return MODELS.some(x => x.id === m) ? m : MODELS[0].id; }

  function headers(m) {
    const h = {
      'content-type': 'application/json',
      'x-api-key': key(),
      'anthropic-version': VERSION,
      'anthropic-dangerous-direct-browser-access': 'true'
    };
    if (FALLBACK_MODELS.includes(m)) h['anthropic-beta'] = 'server-side-fallback-2026-07-01';
    return h;
  }
  function body(m, { system, messages, maxTokens, effort, stream }) {
    const b = { model: m, max_tokens: maxTokens || 4000, system, messages, output_config: { effort: effort || 'low' } };
    if (stream) b.stream = true;
    if (FALLBACK_MODELS.includes(m)) b.fallbacks = 'default';
    return b;
  }
  async function httpError(res) {
    let msg = '';
    try { const j = await res.json(); msg = (j.error && j.error.message) || ''; } catch (e) { /* */ }
    if (res.status === 401) return new Error('Ongeldige API-sleutel. Controleer je sleutel in Instellingen.');
    if (res.status === 403) return new Error('Geen toegang met deze sleutel (403). ' + msg);
    if (res.status === 429) return new Error('Te veel verzoeken of tegoed op. Wacht even en probeer opnieuw.');
    if (res.status === 529 || res.status >= 500) return new Error('De AI-server is even overbelast. Probeer het zo opnieuw.');
    return new Error('Fout ' + res.status + (msg ? ': ' + msg : ''));
  }

  /** Streamt tekst; roept onText(volledigeTekstTotNuToe) aan. Geeft de volledige tekst terug. */
  async function stream({ system, messages, maxTokens = 4000, effort = 'low', onText, signal }) {
    if (!key()) throw new Error('Geen API-sleutel ingesteld.');
    const m = model();
    let res;
    try {
      res = await fetch(API, { method: 'POST', headers: headers(m), body: JSON.stringify(body(m, { system, messages, maxTokens, effort, stream: true })), signal });
    } catch (e) {
      if (e.name === 'AbortError') throw e;
      throw new Error('Geen verbinding met de AI. Controleer je internet.');
    }
    if (!res.ok) throw await httpError(res);
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = '', text = '', stop = null;
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let i;
      while ((i = buf.indexOf('\n\n')) >= 0) {
        const chunk = buf.slice(0, i); buf = buf.slice(i + 2);
        const data = chunk.split('\n').filter(l => l.startsWith('data:')).map(l => l.slice(5).trim()).join('');
        if (!data) continue;
        let ev; try { ev = JSON.parse(data); } catch (e) { continue; }
        if (ev.type === 'content_block_delta' && ev.delta && ev.delta.type === 'text_delta') {
          text += ev.delta.text; onText && onText(text);
        } else if (ev.type === 'message_delta' && ev.delta) {
          stop = ev.delta.stop_reason || stop;
        } else if (ev.type === 'error') {
          throw new Error((ev.error && ev.error.message) || 'Onbekende fout van de AI.');
        }
      }
    }
    if (stop === 'refusal' && !text) throw new Error('De AI kon hier niet op antwoorden. Probeer het anders te formuleren.');
    return text;
  }

  async function ask({ system, prompt, maxTokens = 1500, effort = 'low' }) {
    if (!key()) throw new Error('Geen API-sleutel ingesteld.');
    const m = model();
    let res;
    try {
      res = await fetch(API, { method: 'POST', headers: headers(m), body: JSON.stringify(body(m, { system, messages: [{ role: 'user', content: prompt }], maxTokens, effort })) });
    } catch (e) { throw new Error('Geen verbinding met de AI. Controleer je internet.'); }
    if (!res.ok) throw await httpError(res);
    const j = await res.json();
    if (j.stop_reason === 'refusal') throw new Error('De AI kon hier niet op antwoorden.');
    return (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  }

  function parseJSON(text) {
    const a = text.indexOf('{'), b = text.lastIndexOf('}');
    if (a < 0 || b < a) return null;
    try { return JSON.parse(text.slice(a, b + 1)); } catch (e) { return null; }
  }

  /* ---------- Profiel van de leerling voor de prompts ---------- */
  function learnerProfile() {
    const st = S.Store.state;
    const cur = S.C.get(st.current) || S.C.all()[0];
    const done = S.C.all().filter(u => st.units[u.id] && (st.units[u.id].done || st.units[u.id].tested));
    const weak = Object.entries(st.tags).filter(([, t]) => t.ok + t.no >= 3 && t.ok / (t.ok + t.no) < 0.75)
      .sort((a, b) => a[1].ok / (a[1].ok + a[1].no) - b[1].ok / (b[1].ok + b[1].no)).slice(0, 5).map(([k]) => S.C.tag(k));
    const level = cur ? cur.level : 'A1';
    const grammar = done.concat(cur ? [cur] : []).flatMap(u => u.grammar.map(g => g.es || g.t));
    return { level, cur, grammar: [...new Set(grammar)].slice(-14), weak, name: st.name };
  }
  /* Taalnamen voor de prompts, per cursus. TL = doeltaal, NL = moedertaal/uitlegtaal van de leerling. */
  const CO = () => S.course;
  const TL = () => (S.LANGS[CO().target] || S.LANGS.es).en;
  const NL = () => CO().ui === 'nl' ? 'Dutch' : 'Spanish';
  function explainLang() {
    const e = S.Store.state.settings.explain;
    if (e === 'es') return TL();
    if (e === 'nl') return NL() === 'Spanish' ? 'Latin American Spanish' : NL();
    const lvl = learnerProfile().level;
    return (e === 'mix' || lvl >= 'B1') ? 'simple ' + TL() + ', with a ' + NL() + ' translation of difficult words in brackets' : (NL() === 'Spanish' ? 'Latin American Spanish' : NL());
  }
  const LEVEL_GUIDE = {
    A1: 'Use very short, simple sentences in the present tense, plus "ir a + infinitive" and "estar + gerundio". High-frequency words only.',
    A2: 'Use short sentences. You may use pretérito indefinido, imperfecto, perfecto, futuro and imperativo, plus object pronouns. Avoid the subjunctive except in fixed phrases.',
    B1: 'Use natural everyday Spanish, including the present subjunctive and conditional, at a moderate pace.',
    B2: 'Use natural, fluent Spanish with idioms and all tenses.'
  };
  const LEVEL_GENERIC = {
    A1: 'Use very short, simple sentences in the present tense and the most frequent words only.',
    A2: 'Use short sentences. Simple past, future and common modal verbs are fine; avoid complex structures.',
    B1: 'Use natural everyday language at a moderate pace, including conditionals and common idioms.',
    B2: 'Use natural, fluent language with idioms and all tenses.',
    C1: 'Use rich, natural language with idioms, phrasal verbs, nuanced register and complex structures (inversion, cleft sentences). Correct subtle errors in collocation, register and naturalness, not only grammar.',
    C2: 'Speak as to an educated native speaker: idiomatic, nuanced, with humor and irony where it fits. Point out anything that sounds slightly unnatural or non-native, including word choice, register, rhythm and collocations.'
  };


  /* Privacy: Lupe vraagt nooit naar echte persoonlijke dingen (Mark, nov 2026). In rollenspellen speel je een verzonnen rol. */
  const PRIVACY = () => `PRIVACY (important): never ask for the learner's real personal information: no real names of family members, partner or friends, no address, phone number, email, workplace, health, money, relationships, religion or other private matters. When a topic is personal (family, home, work, plans, feelings), treat it as fiction: talk about an invented character or invented details. If the learner shares real private details anyway, do not ask follow-up questions about them and do not repeat them.`;

  // Mark (2026-11-25): uitzonderingen altijd als uitzondering benoemen, met de reden
  const EXCEPTION_RULE = () => `EXCEPTIONS: whenever something is an exception to a rule the learner knows (e.g. ${CO().target === 'es' ? 'el problema/el tema/el idioma are masculine although they end in -a; la mano; el agua; ¿Dónde es la fiesta? with ser; irregular verb forms; irregular plurals' : CO().ai.exceptions || 'irregular verb forms, irregular plurals, an unexpected gender or article, a preposition or word order that breaks the usual pattern'}), say explicitly that it IS an exception ("${CO().ui === 'nl' ? 'Uitzondering' : 'Excepción'}: …") and briefly explain WHY (origin or reason), in feedback, explanations and new material alike.`;
  function baseRules(p) { return baseRules0(p) + '\n' + EXCEPTION_RULE(); }
  function baseRules0(p) {
    if (CO().target !== 'es' && CO().ui === 'nl') {
      return `You are an expert, warm and encouraging ${CO().ai.target} teacher, working inside a learning app for a native Dutch speaker from the Netherlands${p.name ? ' named ' + p.name : ''}.
Learner level: ${p.level} (CEFR). ${LEVEL_GENERIC[p.level] || LEVEL_GENERIC.B1}
Grammar the learner has studied so far: ${p.grammar.join('; ') || 'basics'}.
${p.weak.length ? 'Known weak points to watch for: ' + p.weak.join(', ') + '.' : ''}
Teach ${CO().ai.target}${CO().ai.style ? ' (' + CO().ai.style + ')' : ''}. Pay close attention to typical mistakes of Dutch speakers (${CO().ai.pitfalls || 'false friends, word order, too literal translations from Dutch'}).
Whenever you explain or translate, write in natural Dutch as spoken in the Netherlands.
${PRIVACY()}
Do not use Markdown headings or tables. Keep formatting minimal.`;
    }
    if (CO().target !== 'es') {
      return `You are an expert, warm and encouraging ${CO().ai.target} teacher, working inside a learning app for a native speaker of Latin American Spanish from Panama${p.name ? ' named ' + p.name : ''}.
Learner level: ${p.level} (CEFR). ${LEVEL_GENERIC[p.level] || LEVEL_GENERIC.B1}
Grammar the learner has studied so far: ${p.grammar.join('; ') || 'basics'}.
${p.weak.length ? 'Known weak points to watch for: ' + p.weak.join(', ') + '.' : ''}
Teach ${CO().ai.target}${CO().target === 'en' ? ' (US spelling and vocabulary: color, apartment, cell phone)' : ''}. Pay attention to typical mistakes of Spanish speakers.
Whenever you write Spanish (explanations, translations), use Latin American Spanish: "ustedes" (never "vosotros"), and Latin American words such as celular, carro, computadora, jugo. Never use Spain-only forms.
${PRIVACY()}
Do not use Markdown headings or tables. Keep formatting minimal.`;
    }
    return `You are an expert, warm and encouraging Spanish teacher specialised in LATIN AMERICAN Spanish, working inside a learning app for a native Dutch speaker${p.name ? ' named ' + p.name : ''}.
Learner level: ${p.level} (CEFR). ${LEVEL_GUIDE[p.level] || LEVEL_GUIDE.B1}
Grammar the learner has studied so far: ${p.grammar.join('; ') || 'basics'}.
${p.weak.length ? 'Known weak points to watch for: ' + p.weak.join(', ') + '.' : ''}
Always use Latin American norms: "ustedes" (never "vosotros"), seseo, Latin American vocabulary (carro, celular, computadora, jugo, manejar, etc.). Unless the scenario sets a country, use neutral Latin American Spanish.
${PRIVACY()}
Do not use Markdown headings or tables. Keep formatting minimal.`;
  }

  // De app leest de vetgedrukte stukken voor met een Spaanse stem; daarom alleen Spaans vet.
  const BOLD_RULE_ = () => `Formatting rule: put every ${TL()} example sentence or ${TL()} phrase in **bold** (the app reads the bold parts aloud with a ${TL()} voice). Never put ${NL()} text or labels in bold.`;
  const logRule = () => (S.Mistakes ? S.Mistakes.promptRule() : '');
  const glossRule = mode => (S.Gloss ? S.Gloss.promptRule(mode) + '\n' : '');
  function tutorPersona() { return (S.Tutor && S.Tutor.persona) || ''; }

  function roleplaySystem(sc) {
    const p = learnerProfile();
    return `${baseRules(p)}

You are now doing a ROLE-PLAY conversation.
Character and setting: ${sc.role}${sc.place ? ' (Location: ' + sc.place + ')' : ''}
Learner's goal: ${sc.goal}

Rules for every reply:
1. Stay in character and reply ONLY in ${TL()}, 1–3 short sentences adapted to the learner's level, and usually end with a question to keep the conversation going.
2. If the learner writes in ${NL()} or asks how to say something, help briefly in ${NL()} and give the ${TL()} phrase, then continue the role-play.
3. After your in-character reply, write a line containing only "---", then feedback on the learner's LAST message in ${explainLang()}:
   - For each real mistake (max 3): "❌ wrong fragment → ✅ correct fragment — very short explanation".
   - If there are no mistakes: "✅ ¡Perfecto!" and optionally one tip to sound more natural ("💡 …").
   Ignore missing accents and punctuation unless they change meaning; mention them once at most.
   The app also shows the learner's own message with your corrections marked in it, so keep these lines short.
4. For your very first message (when the learner says they want to start), greet them in character, set the scene and ask the first question, then "---" and "💡" one useful phrase for this situation.
5. The learner plays an INVENTED character, never themselves. If the conversation will touch anything personal (family, names, age, home, work, partner, plans), add to your very first message, after the "💡" line, one short role card: "🎭 ${CO().ui === 'nl' ? 'Jouw rol' : 'Tu papel'}: …" in ${NL() === 'Spanish' ? 'Latin American Spanish' : NL()} with made-up details the learner can use (for family: a few invented relatives with first names and ages; otherwise a name, job, city and so on), and say they may also invent their own. In character, ask about this invented character (e.g. "¿Cómo se llama tu hermano?" refers to the role card), never about the learner's real life.
${glossRule('roleplay')}${logRule()}`;
  }

  function askSystem() {
    const p = learnerProfile();
    return `${baseRules(p)}

${tutorPersona()}

You answer the learner's questions about ${TL()} grammar, vocabulary, pronunciation and culture. Answer in ${explainLang()}, clearly and concisely (max ~150 words), with 2–4 short ${CO().ai.target} example sentences and their translations. ${CO().target === 'es' ? 'Mention regional differences when relevant (e.g. Mexico vs. Argentina vs. Spain).' : 'Point out where ' + (CO().ui === 'nl' ? 'Dutch' : 'Spanish') + ' speakers typically go wrong when relevant.' + (CO().ui === 'nl' && CO().target === 'en' ? ' At B2 and above, also explain nuance, register and collocation, and say when something is British rather than American.' : '')} End with one tiny practice question when it fits.
${BOLD_RULE_()}`;
  }

  function writingSystem() {
    const p = learnerProfile();
    return `${baseRules(p)}

${tutorPersona()}

You correct a short text written by the learner. Respond in ${explainLang()} using exactly this structure (no headings):
✍️ Corrected version: the full corrected text in ${TL()} (keep the learner's ideas; only fix errors and make it natural ${CO().ai.target}).
❌ → ✅ Up to 5 most important corrections, one per line, each with a very short explanation.
💡 One tip to sound more natural.
⭐ A score from 1 to 10 for this level, with one encouraging sentence.
${BOLD_RULE_()}
${glossRule('write')}${logRule()}`;
  }

  async function checkTranslation(nl, user, accepted) {
    const p = learnerProfile();
    const sys = `${baseRules(p)}\nYou grade translations strictly but fairly. Reply ONLY with a JSON object.`;
    const prompt = `${NL()} sentence or word: "${nl}"
Learner's ${TL()} translation: "${user}"
Model answers: ${JSON.stringify(accepted)}
Is the learner's translation grammatically correct, natural${CO().target === 'es' ? ' for Latin America' : ' ' + CO().ai.target}, and does it mean the same as the ${NL()}? Missing accents alone still count as correct (mention them in the feedback).
Reply with JSON: {"correct": true|false, "feedback": "max 2 short sentences in ${NL() === 'Spanish' ? 'Latin American Spanish' : NL()}", "better": "the corrected or more natural ${TL()} version", "app": "only if correct: ONE short sentence in Dutch for the app maker on what to change in the next update, e.g. 'Voeg «…» toe als goed antwoord' or 'Het modelantwoord «…» klopt niet, moet zijn «…»'; empty string if incorrect"}`;
    const text = await ask({ system: sys, prompt, maxTokens: 600 });
    const j = parseJSON(text);
    if (!j || typeof j.correct !== 'boolean') throw new Error('Onverwacht antwoord van de AI.');
    return j;
  }

  async function test() {
    const t = await ask({ system: 'Reply with exactly: ¡Hola!', prompt: 'Di hola.', maxTokens: 50 });
    return t.trim();
  }

  S.AI = { MODELS, enabled: () => !!key(), stream, ask, roleplaySystem, askSystem, writingSystem, checkTranslation, test, learnerProfile };
})(window.SPT);
