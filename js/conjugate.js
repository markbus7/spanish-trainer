/* Vervoegingsmachine — Latijns-Amerikaans Spaans (geen vosotros).
   Personen: 0 yo · 1 tú · 2 él/ella/usted · 3 nosotros · 4 ellos/ellas/ustedes */
(function (S) {
  'use strict';

  const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'ellos / ellas / ustedes'];
  const REFL = ['me', 'te', 'se', 'nos', 'se'];

  const TENSES = {
    pres:  { es: 'presente',               nl: 'tegenwoordige tijd',          level: 'A1' },
    prog:  { es: 'presente progresivo',    nl: 'bezig zijn met (estar + -ndo)', level: 'A1' },
    ira:   { es: 'ir a + infinitivo',      nl: 'nabije toekomst',             level: 'A1' },
    pret:  { es: 'pretérito indefinido',   nl: 'verleden tijd (afgerond)',    level: 'A2' },
    imp:   { es: 'pretérito imperfecto',   nl: 'verleden tijd (gewoonte/achtergrond)', level: 'A2' },
    perf:  { es: 'pretérito perfecto',     nl: 'voltooide tijd (he + -do)',   level: 'A2' },
    fut:   { es: 'futuro simple',          nl: 'toekomende tijd',             level: 'A2' },
    imper: { es: 'imperativo',             nl: 'gebiedende wijs',             level: 'A2' },
    cond:  { es: 'condicional',            nl: 'voorwaardelijke wijs',        level: 'B1' },
    subj:  { es: 'presente de subjuntivo', nl: 'aanvoegende wijs',            level: 'B1' }
  };

  /* stem: 'ie' | 'ue' | 'i' | 'uue' (jugar)
     yo:   onregelmatige yo-vorm in presente (bepaalt ook subjuntivo-stam)
     fs:   onregelmatige stam futuro/condicional
     pret: volledige pretérito-tabel, imp: volledige imperfecto-tabel
     pres: volledige presente-tabel, subj: volledige subjuntivo-tabel
     tu:   onregelmatige imperativo tú, ger: gerundio, part: participio */
  const VERBS = {
    // ---------- volledig / sterk onregelmatig ----------
    ser:    { nl: 'zijn (blijvend)', pres: ['soy','eres','es','somos','son'], pret: ['fui','fuiste','fue','fuimos','fueron'],
              imp: ['era','eras','era','éramos','eran'], subj: ['sea','seas','sea','seamos','sean'], tu: 'sé' },
    estar:  { nl: 'zijn (tijdelijk/plaats)', pres: ['estoy','estás','está','estamos','están'],
              pret: ['estuve','estuviste','estuvo','estuvimos','estuvieron'], subj: ['esté','estés','esté','estemos','estén'] },
    ir:     { nl: 'gaan', pres: ['voy','vas','va','vamos','van'], pret: ['fui','fuiste','fue','fuimos','fueron'],
              imp: ['iba','ibas','iba','íbamos','iban'], subj: ['vaya','vayas','vaya','vayamos','vayan'], tu: 've', ger: 'yendo' },
    haber:  { nl: 'hebben (hulpww.)', pres: ['he','has','ha','hemos','han'], pret: ['hube','hubiste','hubo','hubimos','hubieron'],
              subj: ['haya','hayas','haya','hayamos','hayan'], fs: 'habr', noImper: true },
    tener:  { nl: 'hebben', stem: 'ie', yo: 'tengo', fs: 'tendr', tu: 'ten',
              pret: ['tuve','tuviste','tuvo','tuvimos','tuvieron'] },
    hacer:  { nl: 'doen, maken', yo: 'hago', fs: 'har', tu: 'haz', part: 'hecho',
              pret: ['hice','hiciste','hizo','hicimos','hicieron'] },
    poder:  { nl: 'kunnen', stem: 'ue', fs: 'podr', ger: 'pudiendo', noImper: true,
              pret: ['pude','pudiste','pudo','pudimos','pudieron'] },
    querer: { nl: 'willen, houden van', stem: 'ie', fs: 'querr', noImper: true,
              pret: ['quise','quisiste','quiso','quisimos','quisieron'] },
    decir:  { nl: 'zeggen', stem: 'i', yo: 'digo', fs: 'dir', tu: 'di', ger: 'diciendo', part: 'dicho',
              pret: ['dije','dijiste','dijo','dijimos','dijeron'] },
    venir:  { nl: 'komen', stem: 'ie', yo: 'vengo', fs: 'vendr', tu: 'ven', ger: 'viniendo',
              pret: ['vine','viniste','vino','vinimos','vinieron'] },
    poner:  { nl: 'zetten, leggen', yo: 'pongo', fs: 'pondr', tu: 'pon', part: 'puesto',
              pret: ['puse','pusiste','puso','pusimos','pusieron'] },
    salir:  { nl: 'uitgaan, vertrekken', yo: 'salgo', fs: 'saldr', tu: 'sal' },
    saber:  { nl: 'weten', pres: ['sé','sabes','sabe','sabemos','saben'], fs: 'sabr', subj: ['sepa','sepas','sepa','sepamos','sepan'],
              pret: ['supe','supiste','supo','supimos','supieron'] },
    dar:    { nl: 'geven', pres: ['doy','das','da','damos','dan'], pret: ['di','diste','dio','dimos','dieron'],
              subj: ['dé','des','dé','demos','den'] },
    ver:    { nl: 'zien', pres: ['veo','ves','ve','vemos','ven'], pret: ['vi','viste','vio','vimos','vieron'],
              imp: ['veía','veías','veía','veíamos','veían'], part: 'visto' },
    traer:  { nl: 'meebrengen', yo: 'traigo', ger: 'trayendo', pret: ['traje','trajiste','trajo','trajimos','trajeron'] },
    oír:    { nl: 'horen', pres: ['oigo','oyes','oye','oímos','oyen'], yo: 'oigo', ger: 'oyendo',
              pret: ['oí','oíste','oyó','oímos','oyeron'], imp: ['oía','oías','oía','oíamos','oían'], fut: ['oiré','oirás','oirá','oiremos','oirán'] },
    caer:   { nl: 'vallen', yo: 'caigo', ger: 'cayendo', pret: ['caí','caíste','cayó','caímos','cayeron'] },
    leer:   { nl: 'lezen', ger: 'leyendo', pret: ['leí','leíste','leyó','leímos','leyeron'] },
    creer:  { nl: 'geloven', ger: 'creyendo', pret: ['creí','creíste','creyó','creímos','creyeron'] },
    conocer:{ nl: 'kennen', yo: 'conozco' },
    conducir:{ nl: 'rijden (ES; LatAm: manejar)', yo: 'conduzco', pret: ['conduje','condujiste','condujo','condujimos','condujeron'] },
    traducir:{ nl: 'vertalen', yo: 'traduzco', pret: ['traduje','tradujiste','tradujo','tradujimos','tradujeron'] },
    ofrecer:{ nl: 'aanbieden', yo: 'ofrezco' },
    parecer:{ nl: 'lijken', yo: 'parezco' },
    construir:{ nl: 'bouwen', pres: ['construyo','construyes','construye','construimos','construyen'], yo: 'construyo', ger: 'construyendo',
              pret: ['construí','construiste','construyó','construimos','construyeron'] },
    seguir: { nl: 'volgen, doorgaan', stem: 'i', yo: 'sigo' },
    elegir: { nl: 'kiezen', stem: 'i', yo: 'elijo' },
    escoger:{ nl: 'kiezen', yo: 'escojo' },
    // ---------- stamwisselaars ----------
    pensar:  { nl: 'denken', stem: 'ie' }, empezar: { nl: 'beginnen', stem: 'ie' }, cerrar: { nl: 'sluiten', stem: 'ie' },
    entender:{ nl: 'begrijpen', stem: 'ie' }, perder: { nl: 'verliezen', stem: 'ie' }, preferir: { nl: 'liever hebben', stem: 'ie' },
    sentir:  { nl: 'voelen', stem: 'ie' }, despertarse: { nl: 'wakker worden', stem: 'ie' }, sentarse: { nl: 'gaan zitten', stem: 'ie' },
    sentirse:{ nl: 'zich voelen', stem: 'ie' }, recomendar: { nl: 'aanraden', stem: 'ie' }, nevar: { nl: 'sneeuwen', stem: 'ie' },
    dormir:  { nl: 'slapen', stem: 'ue' }, volver: { nl: 'terugkomen', stem: 'ue', part: 'vuelto' }, encontrar: { nl: 'vinden', stem: 'ue' },
    costar:  { nl: 'kosten', stem: 'ue' }, acostarse: { nl: 'naar bed gaan', stem: 'ue' }, almorzar: { nl: 'lunchen', stem: 'ue' },
    morir:   { nl: 'sterven', stem: 'ue', part: 'muerto' }, doler: { nl: 'pijn doen', stem: 'ue' }, llover: { nl: 'regenen', stem: 'ue' },
    recordar:{ nl: 'herinneren', stem: 'ue' }, devolver: { nl: 'teruggeven', stem: 'ue', part: 'devuelto' }, acordarse: { nl: 'zich herinneren', stem: 'ue' },
    contar:  { nl: 'tellen, vertellen', stem: 'ue' }, freír: { nl: 'bakken', stem: 'i', part: 'frito', pres: ['frío','fríes','fríe','freímos','fríen'], pret: ['freí','freíste','frió','freímos','frieron'], subj: ['fría','frías','fría','friamos','frían'] }, mostrar: { nl: 'laten zien', stem: 'ue' }, probar: { nl: 'proeven, proberen', stem: 'ue' },
    jugar:   { nl: 'spelen (sport/spel)', stem: 'uue' },
    pedir:   { nl: 'vragen, bestellen', stem: 'i' }, servir: { nl: 'serveren, dienen', stem: 'i' }, repetir: { nl: 'herhalen', stem: 'i' },
    vestirse:{ nl: 'zich aankleden', stem: 'i' },
    // ---------- regelmatig ----------
    hablar: { nl: 'spreken' }, trabajar: { nl: 'werken' }, estudiar: { nl: 'studeren' }, vivir: { nl: 'wonen, leven' },
    comer: { nl: 'eten' }, beber: { nl: 'drinken' }, tomar: { nl: 'nemen, drinken' }, escribir: { nl: 'schrijven', part: 'escrito' },
    abrir: { nl: 'openen', part: 'abierto' }, aprender: { nl: 'leren' }, comprender: { nl: 'begrijpen' }, llamarse: { nl: 'heten' },
    levantarse: { nl: 'opstaan' }, ducharse: { nl: 'douchen' }, bañarse: { nl: 'baden, douchen (LatAm)' }, lavarse: { nl: 'zich wassen' },
    cepillarse: { nl: 'poetsen (tanden)' }, maquillarse: { nl: 'zich opmaken' }, quedarse: { nl: 'blijven' },
    llegar: { nl: 'aankomen' }, buscar: { nl: 'zoeken' }, tocar: { nl: 'aanraken, bespelen' }, practicar: { nl: 'oefenen' },
    pagar: { nl: 'betalen' }, sacar: { nl: 'halen, nemen (foto)' }, cruzar: { nl: 'oversteken' }, organizar: { nl: 'organiseren' },
    escuchar: { nl: 'luisteren' }, mirar: { nl: 'kijken' }, cocinar: { nl: 'koken' }, caminar: { nl: 'lopen, wandelen' },
    manejar: { nl: 'rijden (auto)' }, viajar: { nl: 'reizen' }, visitar: { nl: 'bezoeken' }, comprar: { nl: 'kopen' },
    necesitar: { nl: 'nodig hebben' }, llevar: { nl: 'dragen, meenemen' }, usar: { nl: 'gebruiken' }, ayudar: { nl: 'helpen' },
    bailar: { nl: 'dansen' }, cantar: { nl: 'zingen' }, nadar: { nl: 'zwemmen' }, descansar: { nl: 'uitrusten' },
    preparar: { nl: 'klaarmaken' }, desayunar: { nl: 'ontbijten' }, cenar: { nl: 'avondeten' }, terminar: { nl: 'afmaken' },
    esperar: { nl: 'wachten, hopen' }, ganar: { nl: 'winnen, verdienen' }, gastar: { nl: 'uitgeven' }, olvidar: { nl: 'vergeten' },
    regresar: { nl: 'terugkeren' }, entrar: { nl: 'binnengaan' }, invitar: { nl: 'uitnodigen' }, cambiar: { nl: 'veranderen, wisselen' },
    deber: { nl: 'moeten' }, correr: { nl: 'rennen' }, vender: { nl: 'verkopen' }, romper: { nl: 'breken', part: 'roto' },
    recibir: { nl: 'ontvangen' }, decidir: { nl: 'besluiten' }, subir: { nl: 'omhooggaan, instappen' }, compartir: { nl: 'delen' },
    describir: { nl: 'beschrijven', part: 'descrito' }, descubrir: { nl: 'ontdekken', part: 'descubierto' },
    alquilar: { nl: 'huren' }, reservar: { nl: 'reserveren' }, enviar: { nl: 'sturen' }, contestar: { nl: 'antwoorden' },
    tomarse: { nl: 'innemen (medicijn)' }, cuidar: { nl: 'zorgen voor' }, doblar: { nl: 'afslaan' }, girar: { nl: 'draaien, afslaan' },
    prestar: { nl: 'uitlenen' }, regalar: { nl: 'cadeau geven' }, explicar: { nl: 'uitleggen' }, mandar: { nl: 'sturen' },
    crecer: { nl: 'groeien', yo: 'crezco' }, nacer: { nl: 'geboren worden', yo: 'nazco' }
  };

  const END = {
    pres: { ar: ['o','as','a','amos','an'], er: ['o','es','e','emos','en'], ir: ['o','es','e','imos','en'] },
    pret: { ar: ['é','aste','ó','amos','aron'], er: ['í','iste','ió','imos','ieron'], ir: ['í','iste','ió','imos','ieron'] },
    imp:  { ar: ['aba','abas','aba','ábamos','aban'], er: ['ía','ías','ía','íamos','ían'], ir: ['ía','ías','ía','íamos','ían'] },
    subj: { ar: ['e','es','e','emos','en'], er: ['a','as','a','amos','an'], ir: ['a','as','a','amos','an'] }
  };
  const FUT = ['é','ás','á','emos','án'];
  const COND = ['ía','ías','ía','íamos','ían'];

  function parse(inf) {
    let refl = false, base = inf;
    if (inf.endsWith('se') && inf.length > 4 && /[aeií]r$/.test(inf.slice(0, -2))) { refl = true; base = inf.slice(0, -2); }
    const cls = base.endsWith('ar') ? 'ar' : (base.endsWith('er') ? 'er' : 'ir'); // ír (oír) → ir
    const stem = base.slice(0, -2);
    const data = VERBS[inf] || VERBS[base] || {};
    return { inf, base, refl, cls, stem, data };
  }

  function replaceLast(str, from, to) {
    const i = str.lastIndexOf(from);
    return i < 0 ? str : str.slice(0, i) + to + str.slice(i + from.length);
  }
  function changedStem(v) {
    const t = v.data.stem;
    if (t === 'ie') return replaceLast(v.stem, 'e', 'ie');
    if (t === 'ue') return replaceLast(v.stem, 'o', 'ue');
    if (t === 'uue') return replaceLast(v.stem, 'u', 'ue');
    if (t === 'i') return replaceLast(v.stem, 'e', 'i');
    return v.stem;
  }
  // -ir stamwisselaars: e→i / o→u (pret 3e pers., subj nosotros, gerundio)
  function weakStem(v) {
    if (v.cls !== 'ir' || !v.data.stem) return v.stem;
    if (v.data.stem === 'ie' || v.data.stem === 'i') return replaceLast(v.stem, 'e', 'i');
    if (v.data.stem === 'ue') return replaceLast(v.stem, 'o', 'u');
    return v.stem;
  }
  // spelling vóór e: c→qu, g→gu, z→c
  function softenForE(stem) {
    if (/c$/.test(stem)) return stem.slice(0, -1) + 'qu';
    if (/g$/.test(stem)) return stem + 'u';
    if (/z$/.test(stem)) return stem.slice(0, -1) + 'c';
    return stem;
  }

  function presente(v) {
    if (v.data.pres) return v.data.pres.slice();
    const e = END.pres[v.cls], cs = changedStem(v);
    const out = [cs + e[0], cs + e[1], cs + e[2], v.stem + e[3], cs + e[4]];
    if (v.data.yo) out[0] = v.data.yo;
    return out;
  }
  function preterito(v) {
    if (v.data.pret) return v.data.pret.slice();
    const e = END.pret[v.cls];
    const out = e.map(x => v.stem + x);
    if (v.cls === 'ar') out[0] = softenForE(v.stem) + 'é';
    if (v.cls === 'ir' && v.data.stem) { const w = weakStem(v); out[2] = w + e[2]; out[4] = w + e[4]; }
    return out;
  }
  function imperfecto(v) {
    if (v.data.imp) return v.data.imp.slice();
    return END.imp[v.cls].map(x => v.stem + x);
  }
  function futuro(v, endings) {
    if (endings === FUT && v.data.fut) return v.data.fut.slice();
    const st = v.data.fs || v.base.replace(/í(r)$/, 'i$1');
    return endings.map(x => st + x);
  }
  function subjuntivo(v) {
    if (v.data.subj) return v.data.subj.slice();
    const e = END.subj[v.cls];
    let strong, nos;
    if (v.data.yo) {
      strong = v.data.yo.slice(0, -1); nos = strong;
    } else {
      strong = changedStem(v); nos = weakStem(v);
    }
    if (v.cls === 'ar') { strong = softenForE(strong); nos = softenForE(nos); }
    return [strong + e[0], strong + e[1], strong + e[2], nos + e[3], strong + e[4]];
  }
  function gerundio(v) {
    if (v.data.ger) return v.data.ger;
    if (v.cls === 'ar') return v.stem + 'ando';
    if (/[aeo]$/.test(v.stem)) return v.stem + 'yendo';
    return weakStem(v) + 'iendo';
  }
  function participio(v) {
    if (v.data.part) return v.data.part;
    if (v.cls === 'ar') return v.stem + 'ado';
    if (/[aeo]$/.test(v.stem)) return v.stem + 'ído';
    return v.stem + 'ido';
  }
  function withRefl(v, forms) {
    return v.refl ? forms.map((f, i) => REFL[i] + ' ' + f) : forms;
  }

  /** Geeft 5 vormen terug (of null als niet van toepassing). */
  function table(inf, tense) {
    const v = parse(inf);
    switch (tense) {
      case 'pres': return withRefl(v, presente(v));
      case 'pret': return withRefl(v, preterito(v));
      case 'imp':  return withRefl(v, imperfecto(v));
      case 'fut':  return withRefl(v, futuro(v, FUT));
      case 'cond': return withRefl(v, futuro(v, COND));
      case 'subj': return withRefl(v, subjuntivo(v));
      case 'perf': { const p = participio(v); return withRefl(v, VERBS.haber.pres.map(h => h + ' ' + p)); }
      case 'prog': { const g = gerundio(v); return withRefl(v, VERBS.estar.pres.map(h => h + ' ' + g)); }
      case 'ira':  return withRefl(v, VERBS.ir.pres.map(h => h + ' a ' + v.base));
      case 'imper': {
        if (v.refl || v.data.noImper) return null;
        const s = subjuntivo(v);
        const tu = v.data.tu || presente(v)[2];
        return [null, tu, s[2], null, s[4]]; // tú · usted · ustedes
      }
    }
    return null;
  }
  function conj(inf, tense, person) {
    const t = table(inf, tense);
    return t ? t[person] : null;
  }
  /** Alternatieve correcte antwoorden (bijv. "estoy duchándome", "voy a levantarme"). */
  function alternatives(inf, tense, person) {
    const main = conj(inf, tense, person);
    if (!main) return [];
    const alts = [main];
    const v = parse(inf);
    if (v.refl && (tense === 'prog' || tense === 'ira')) {
      const rest = main.split(' ').slice(1).join(' ');
      if (tense === 'ira') alts.push(rest + REFL[person]);
      if (tense === 'prog') alts.push(rest.replace(/([aei])(ndo)$/, (m, a, b) => ({ a: 'á', e: 'é', i: 'é' }[a] || a) + b) + REFL[person]);
    }
    return alts;
  }
  function personsFor(tense) { return tense === 'imper' ? [1, 2, 4] : [0, 1, 2, 3, 4]; }
  function personLabel(tense, p) {
    if (tense === 'imper') return ['', 'tú', 'usted', '', 'ustedes'][p];
    return PERSONS[p];
  }
  function info(inf) { return VERBS[inf] || VERBS[parse(inf).base] || null; }

  S.conj = { table, conj, alternatives, PERSONS, TENSES, VERBS, personsFor, personLabel, info, gerundio: inf => gerundio(parse(inf)), participio: inf => participio(parse(inf)) };
})(typeof window !== 'undefined' ? (window.SPT = window.SPT || {}) : (globalThis.SPT = globalThis.SPT || {}));
