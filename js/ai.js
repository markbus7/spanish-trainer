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
  function explainLang() {
    const e = S.Store.state.settings.explain;
    if (e === 'es') return 'Spanish';
    if (e === 'nl') return 'Dutch';
    const lvl = learnerProfile().level;
    return (e === 'mix' || lvl >= 'B1') ? 'simple Spanish, with a Dutch translation of difficult words in brackets' : 'Dutch';
  }
  const LEVEL_GUIDE = {
    A1: 'Use very short, simple sentences in the present tense, plus "ir a + infinitive" and "estar + gerundio". High-frequency words only.',
    A2: 'Use short sentences. You may use pretérito indefinido, imperfecto, perfecto, futuro and imperativo, plus object pronouns. Avoid the subjunctive except in fixed phrases.',
    B1: 'Use natural everyday Spanish, including the present subjunctive and conditional, at a moderate pace.',
    B2: 'Use natural, fluent Spanish with idioms and all tenses.'
  };

  function baseRules(p) {
    return `You are an expert, warm and encouraging Spanish teacher specialised in LATIN AMERICAN Spanish, working inside a learning app for a native Dutch speaker${p.name ? ' named ' + p.name : ''}.
Learner level: ${p.level} (CEFR). ${LEVEL_GUIDE[p.level] || LEVEL_GUIDE.B1}
Grammar the learner has studied so far: ${p.grammar.join('; ') || 'basics'}.
${p.weak.length ? 'Known weak points to watch for: ' + p.weak.join(', ') + '.' : ''}
Always use Latin American norms: "ustedes" (never "vosotros"), seseo, Latin American vocabulary (carro, celular, computadora, jugo, manejar, etc.). Unless the scenario sets a country, use neutral Latin American Spanish.
Do not use Markdown headings or tables. Keep formatting minimal (bold is fine).`;
  }

  function roleplaySystem(sc) {
    const p = learnerProfile();
    return `${baseRules(p)}

You are now doing a ROLE-PLAY conversation.
Character and setting: ${sc.role}${sc.place ? ' (Location: ' + sc.place + ')' : ''}
Learner's goal: ${sc.goal}

Rules for every reply:
1. Stay in character and reply ONLY in Spanish, 1–3 short sentences adapted to the learner's level, and usually end with a question to keep the conversation going.
2. If the learner writes in Dutch or asks how to say something, help briefly in Dutch and give the Spanish phrase, then continue the role-play.
3. After your in-character reply, write a line containing only "---", then feedback on the learner's LAST message in ${explainLang()}:
   - For each real mistake (max 3): "❌ wrong fragment → ✅ correct fragment — very short explanation".
   - If there are no mistakes: "✅ ¡Perfecto!" and optionally one tip to sound more natural ("💡 …").
   Ignore missing accents and punctuation unless they change meaning; mention them once at most.
4. For your very first message (when the learner says they want to start), greet them in character, set the scene and ask the first question, then "---" and "💡" one useful phrase for this situation.`;
  }

  function askSystem() {
    const p = learnerProfile();
    return `${baseRules(p)}

You answer the learner's questions about Spanish grammar, vocabulary, pronunciation and culture. Answer in ${explainLang()}, clearly and concisely (max ~150 words), with 2–4 short Latin American Spanish example sentences and their translations. Mention regional differences when relevant (e.g. Mexico vs. Argentina vs. Spain). End with one tiny practice question when it fits.`;
  }

  function writingSystem() {
    const p = learnerProfile();
    return `${baseRules(p)}

You correct a short text written by the learner. Respond in ${explainLang()} using exactly this structure (no headings):
✍️ Corrected version: the full corrected text in Spanish (keep the learner's ideas; only fix errors and make it natural Latin American Spanish).
❌ → ✅ Up to 5 most important corrections, one per line, each with a very short explanation.
💡 One tip to sound more natural.
⭐ A score from 1 to 10 for this level, with one encouraging sentence.`;
  }

  async function checkTranslation(nl, user, accepted) {
    const p = learnerProfile();
    const sys = `${baseRules(p)}\nYou grade translations strictly but fairly. Reply ONLY with a JSON object.`;
    const prompt = `Dutch sentence: "${nl}"
Learner's Spanish translation: "${user}"
Model answers: ${JSON.stringify(accepted)}
Is the learner's translation grammatically correct, natural for Latin America, and does it mean the same as the Dutch? Missing accents alone still count as correct (mention them in the feedback).
Reply with JSON: {"correct": true|false, "feedback": "max 2 short sentences in Dutch", "better": "the corrected or more natural Spanish version"}`;
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
