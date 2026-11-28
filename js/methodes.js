/* 📖 Leermethodes: uitlegpagina #/methodes (S.Methods).
   Legt in gewone taal uit welke andere aanpakken de app inzet bij hardnekkige fouten (js/strategie.js, S.Strat.LIST):
   wat je doet, waarom het werkt (kort, met de leerwetenschap erachter), wanneer de app hem kiest en hoe de app meet
   of hij bij jóu werkt. Taalonafhankelijk: de voorbeelden noemen geen taal, de docent heet zoals in de cursus.
   Een nieuwe strategie in S.Strat.LIST krijgt hier een tekst in TXT (tests/run.js controleert dat).
   Zonder tekst toont de pagina alleen de korte omschrijving uit LIST. */
(function (S) {
  'use strict';
  const { U } = S;
  const h = U.h;
  const dn = s => (S.docentNaam ? S.docentNaam(s) : s);

  /* Per strategie: hoe (wat je in de ronde doet), waarom (leerwetenschap), wanneer (wanneer de app hem kan en kiest), bron. */
  const TXT = {
    regel: {
      hoe: ['Je krijgt eerst één korte regel, een ezelsbruggetje of de uitleg uit de les die precies bij dit onderwerp hoort.', 'Daarna pas je de regel stap voor stap toe: eerst makkelijke vragen, dan moeilijkere. Bij een werkwoord zie je eerst de hele rij en vul je daarna de vormen zelf in.'],
      waarom: 'Als je bij elke vraag opnieuw moet raden, gebruik je je geheugen voor het zoeken in plaats van het leren. Eén duidelijke beslisregel geeft je een vast houvast: «als …, dan …». Onderzoek naar taalonderwijs laat zien dat expliciete uitleg over vorm, gevolgd door oefenen, beter werkt dan alleen veel voorbeelden zien. Belangrijk is dat de uitleg kort is en meteen wordt toegepast.',
      wanneer: 'Kan bij elk onderwerp met minstens 3 oefeningen en een regel of uitleg in de les, en bij elke werkwoordstijd. Staat er voor dit onderwerp een speciale beslisregel klaar, dan begint de app meestal hiermee.',
      bron: 'Expliciete instructie (Norris & Ortega, 2000) · cognitieve belasting (Sweller)'
    },
    contrast: {
      hoe: ['Je ziet eerst de varianten naast elkaar in een tabelletje, met per vorm een voorbeeldzin.', 'Daarna krijg je steeds twee of drie bijna dezelfde zinnen en kies je de goede. Het goede antwoord wisselt steeds, dus je kunt niet op de automatische piloot.'],
      waarom: 'Fouten ontstaan vaak doordat twee vormen op elkaar lijken. Als je ze apart leert, zie je het verschil niet. Door ze direct naast elkaar te zetten, valt het verschil op: je hersenen leren waaraan je de goede vorm herkent. Vragen door elkaar (in plaats van tien keer dezelfde soort) is lastiger, maar blijft beter hangen.',
      wanneer: 'Kan als er minstens 3 invuloefeningen met keuzes zijn, of bij een werkwoordstijd met minstens 3 verschillende vormen.',
      bron: 'Opvallen van het verschil (Schmidt, 1990) · door elkaar oefenen (Kornell & Bjork, 2008)'
    },
    fouten: {
      hoe: ['Je ziet je eigen laatste fouten: jouw antwoord doorgestreept, het goede antwoord ernaast. Ook fouten uit gesprekken met Lupe staan erbij.', 'Je kijkt of je een patroon ziet. Daarna krijg je precies die vragen opnieuw, aangevuld met een paar nieuwe.'],
      waarom: 'Een fout die je bewust bekijkt, onthoud je beter dan een fout die je snel wegklikt. Als je je eigen antwoord naast het goede ziet, merk je wát je steeds doet (bijvoorbeeld steeds dezelfde vorm kiezen). En wie zeker wist dat iets goed was en dan ontdekt dat het fout is, onthoudt de verbetering juist extra goed.',
      wanneer: 'Kan pas als er van dit onderwerp minstens 2 fouten bewaard zijn.',
      bron: 'Correctieve feedback (Lyster & Saito, 2010) · hypercorrectie-effect (Butterfield & Metcalfe, 2001)'
    },
    bouw: {
      hoe: ['Geen keuzes: je zet woorden zelf in de goede volgorde, typt zinnen in en vertaalt.', 'Bij een werkwoord typ je de hele rij in vaste volgorde, twee keer achter elkaar.'],
      waarom: 'Herkennen is makkelijker dan zelf maken. Bij meerkeuze kun je goed scoren zonder het echt te kunnen. Als je het zelf moet bedenken en opschrijven, moet je hersenen het antwoord echt ophalen. Dat kost meer moeite, en juist die moeite zorgt dat het blijft hangen. Bovendien merk je bij het zelf maken pas waar je twijfelt.',
      wanneer: 'Kan als er genoeg hele zinnen of vertaaloefeningen bij dit onderwerp zijn, en bij elke werkwoordstijd.',
      bron: 'Generatie-effect (Slamecka & Graf, 1978) · output-hypothese (Swain, 1985)'
    },
    dictee: {
      hoe: ['Je hoort een hele zin en schrijft hem op.', 'Daarna volgen nog een paar gewone vragen over hetzelfde onderwerp.'],
      waarom: 'Bij invuloefeningen kijk je naar één gat in de zin. Bij een dictee hoor je het patroon in zijn geheel, zoals het in een echt gesprek klinkt. Je verbindt klank, betekenis en spelling tegelijk, en dat geeft je geheugen meer haakjes om het aan op te hangen. Dit helpt vooral als je het op papier wel weet, maar in het echt niet hoort of zegt.',
      wanneer: 'Kan als er minstens 3 hele zinnen van 3 tot 10 woorden bij dit onderwerp zijn, en bij elke werkwoordstijd.',
      bron: 'Dubbele codering (Paivio) · dictee als geïntegreerde oefening (Oller)'
    },
    spreid: {
      hoe: ['Geen lange ronde, maar vijf dagen lang elke dag 3 korte vragen. Ze staan klaar bij je zwakke punten en op Hoy.', 'Eerst komen de vragen die je fout had, aangevuld met andere.'],
      waarom: 'Dit is een van de best onderzochte effecten in de leerwetenschap: wat je over meerdere dagen verspreid oefent, onthoud je veel langer dan wat je in één keer stampt. Tussen de oefendagen vergeet je een beetje, en dat het dan weer terughalen moeite kost, versterkt het geheugen.',
      wanneer: 'Kan bij elk onderwerp met minstens 3 oefeningen en bij elke werkwoordstijd. De vijf dagen moeten binnen tien dagen vallen.',
      bron: 'Spreidingseffect (Ebbinghaus; Cepeda e.a., 2006)'
    },
    lupe: {
      hoe: ['Lupe krijgt te horen wat je steeds fout doet en wat al geprobeerd is.', 'Je docent legt het op een andere manier uit dan in de les: met één ezelsbruggetje, twee contrastvoorbeelden en uitzonderingen duidelijk benoemd. Daarna volgen drie korte vragen, één voor één.'],
      waarom: 'Soms past een uitleg gewoon niet bij hoe jij denkt. Een andere uitleg, met andere voorbeelden, kan dan ineens «klik» geven. In een gesprek kun je ook doorvragen («waarom niet …?»), en zelf uitleggen waarom iets zo is helpt je het beter te begrijpen.',
      wanneer: 'Kan alleen als de AI-docent is ingesteld (Perfil › Instellingen).',
      bron: 'Zelfverklaring en uitleggen (Chi e.a., 1994) · één-op-één begeleiding (Bloom, 1984)'
    }
  };

  const pc = x => Math.round(x * 100) + '%';
  /** Wat de app bij jou al gemeten heeft voor één methode (of null). */
  function mine(id) {
    const o = S.Strat && S.Strat.stats()[id]; if (!o || !o.n) return null;
    const open = o.n - o.done;
    const parts = [o.werkt ? '✅ ' + o.werkt + '× werkt' : '', o.beetje ? '↗️ ' + o.beetje + '× een beetje' : '', o.niet ? '✖️ ' + o.niet + '× niet' : '', open ? '⏳ ' + open + '× nog bezig' : '', o.sticks ? '📌 ' + o.sticks + '× blijft hangen' : ''].filter(Boolean);
    return h('div', { class: 'mt-mine' + (o.status ? ' off' : '') }, h('b', null, 'Bij jou: '), o.n + '× ingezet · ' + parts.join(' · '),
      o.status === 'uit' ? h('div', null, '🚫 Uitgezet: werkt bij jou niet, de app stelt hem niet meer voor (zelf kiezen kan nog).') : o.status === 'weinig' ? h('div', null, '🔻 Helpt bij jou weinig: komt minder vaak terug.') : null);
  }

  function methodCard(s, i) {
    const t = TXT[s.id];
    const sec = (ic, title, body) => h('div', { class: 'mt-sec' }, h('h3', null, h('span', { 'aria-hidden': 'true' }, ic), ' ', title), body);
    return h('article', { class: 'card mt-card', id: 'mt-' + s.id },
      h('header', { class: 'mt-head' }, h('span', { class: 'mt-ic', 'aria-hidden': 'true' }, s.icon),
        h('div', { class: 'grow' }, h('small', { class: 'muted' }, 'Methode ' + (i + 1)), h('h2', null, dn(s.name)), h('p', { class: 'mt-what' }, dn(s.what)))),
      t ? [
        sec('🛠️', 'Zo gaat het', h('ul', null, t.hoe.map(x => h('li', null, dn(x))))),
        sec('🧠', 'Waarom het werkt', h('p', null, dn(t.waarom))),
        sec('🎯', 'Wanneer kiest de app hem?', h('p', null, dn(t.wanneer))),
        t.bron ? h('p', { class: 'mt-bron small muted' }, '📚 ' + t.bron) : null
      ] : null,
      mine(s.id));
  }

  function page(arg) {
    const wrap = h('div', { class: 'page mt-page' });
    const L = (S.Strat && S.Strat.LIST) || [];
    const MIN = (S.Strat && S.Strat.MIN_DONE) || 3;
    const back = h('a', { class: 'back', href: '#/zwak', onclick: e => { if (history.length > 1) { e.preventDefault(); history.back(); } } }, '← Terug');
    wrap.append(back, h('h1', null, '📖 Leermethodes'),
      h('p', { class: 'muted' }, 'Blijft iets fout gaan terwijl je het al vaak geoefend hebt, dan helpt «nog meer van hetzelfde» niet. De app pakt het dan anders aan, met een van deze ' + L.length + ' methodes, en houdt bij welke bij jou het beste werkt.'));

    // het stappenplan in het kort
    const steps = [
      ['🔁', 'Herkennen', 'Een onderwerp is hardnekkig als je het al minstens 8 keer geoefend hebt (een werkwoordstijd: 6 keer) en van je laatste 10 antwoorden minder dan 70% goed is.'],
      ['🧪', 'Anders aanpakken', 'De app kiest een methode die je bij dit onderwerp nog niet geprobeerd hebt, of een die bij jou al eerder werkte.'],
      ['📏', 'Meten', 'Daarna vergelijkt de app je antwoorden vóór en ná de methode, en kijkt een dag later of het blijft hangen.'],
      ['⚖️', 'Bijsturen', 'Wat bij jou werkt, komt vaker terug. Wat na een paar keer niet helpt, stelt de app niet meer voor.']
    ];
    wrap.append(h('ol', { class: 'mt-steps' }, steps.map(([ic, t, x], i) => h('li', { class: 'card' }, h('span', { class: 'mt-step-n', 'aria-hidden': 'true' }, i + 1), h('div', null, h('b', null, ic + ' ' + t), h('p', { class: 'small' }, x))))));

    // snel naar een methode
    wrap.append(h('nav', { class: 'chips wrap mt-jump', 'aria-label': 'Naar een methode' },
      L.map(s => h('button', { class: 'chip toggle', type: 'button', onclick: () => jump(wrap, s.id) }, s.icon + ' ' + dn(s.name))),
      h('button', { class: 'chip toggle', type: 'button', onclick: () => jump(wrap, 'meten') }, '📏 Zo meet de app')));

    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, '🧰 De methodes'), L.map(methodCard)));

    // meten en bijsturen
    const scale = [['werkt', '✅', 'Werkt', 'Daarna 80% of meer goed, of minstens 15 procentpunt beter dan ervoor.'],
      ['beetje', '↗️', 'Helpt een beetje', '5 tot 15 procentpunt beter.'],
      ['niet', '✖️', 'Hielp niet', 'Minder dan 5 procentpunt beter.'],
      ['open', '⏳', 'Nog te vroeg', 'Er zijn nog geen 4 gewone antwoorden ná de methode.']];
    wrap.append(h('section', { class: 'sec', id: 'mt-meten' }, h('h2', { class: 'sec-title' }, '📏 Zo meet de app of het werkt'),
      h('div', { class: 'card mt-meet' },
        h('div', { class: 'mt-ba' },
          h('div', { class: 'mt-ba-box' }, h('small', { class: 'muted' }, 'Vóór'), h('b', null, 'je laatste 10 antwoorden')),
          h('div', { class: 'mt-ba-mid', 'aria-hidden': 'true' }, '🧪 methode →'),
          h('div', { class: 'mt-ba-box' }, h('small', { class: 'muted' }, 'Ná'), h('b', null, 'je volgende 4 tot 12 antwoorden'))),
        h('p', { class: 'small' }, 'De vragen uit de ronde zelf tellen niet mee: daar heb je de uitleg nog vers in je hoofd. Pas de gewone vragen daarna, in lessen, herhaling en oefeningen, laten zien of het echt beter gaat.'),
        h('div', { class: 'mt-scale' }, scale.map(([k, ic, t, x]) => h('div', { class: 'mt-sc mt-sc-' + k }, h('b', null, ic + ' ' + t), h('small', null, x)))),
        h('p', { class: 'small' }, h('b', null, '📌 Blijft het hangen? '), 'Antwoorden op een latere dag tellen apart. Heb je dan nog minstens 75% goed (bij 3 of meer antwoorden), dan blijft het hangen. Zakt het weer weg, dan telt «werkt» minder zwaar.')),
      h('div', { class: 'card mt-meet' },
        h('h3', null, '⚖️ Hoe de app bijstuurt'),
        h('p', { class: 'small' }, 'Elke poging krijgt punten:'),
        h('div', { class: 'mt-pts' }, [['✅ werkt', '1'], ['✅ werkt, maar zakt weer weg', '0,6'], ['↗️ een beetje', '0,35'], ['✖️ niet', '0']].map(([a, b]) => h('div', null, h('span', null, a), h('b', null, b)))),
        h('p', { class: 'small' }, 'Pas na ' + MIN + ' afgeronde metingen oordeelt de app over een methode. Gemiddeld onder 0,5: 🔻 helpt weinig, komt minder vaak terug. Onder 0,25: 🚫 uitgezet, de app stelt hem niet meer voor. Zelf kiezen kan altijd nog via «Andere aanpak kiezen», en werkt hij later toch, dan komt hij vanzelf terug.'),
        h('p', { class: 'small' }, 'Bij het kiezen telt ook mee: een methode die je bij dit onderwerp nog niet geprobeerd hebt gaat voor, dezelfde methode komt niet twee keer achter elkaar, en wat bij dit onderwerp al eens niet hielp zakt naar onderen.')),
      h('div', { class: 'card mt-meet' },
        h('h3', null, '🔬 Een experiment dat doorloopt'),
        h('p', { class: 'small' }, 'Methodes die bij jou bijna nooit werken, kunnen in een volgende versie van de app vervangen worden door een nieuwe. Een flink veranderde methode krijgt dan een nieuwe naam, zodat oude en nieuwe metingen niet door elkaar lopen. Wat er bij jou gemeten is, staat ook in je rapport van Lupe.'.replace('Lupe', dn('Lupe'))),
        h('div', { class: 'row gap wrap' }, h('a', { class: 'btn primary', href: '#/zwak' }, '🎯 Mijn zwakke punten'), h('a', { class: 'btn ghost', href: '#/rapport' }, '📋 Rapport')))));
    if (arg) setTimeout(() => jump(wrap, arg), 60);
    return wrap;
  }
  function jump(wrap, id) { const el = wrap.querySelector('#mt-' + id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  /** Klein linkje «ⓘ Over de methodes» voor bij de strategieblokken. */
  const link = (id, txt) => h('a', { class: 'mt-link small', href: '#/methodes' + (id ? '/' + id : '') }, txt || 'ⓘ Over de methodes');

  S.Methods = { TXT, page, link };
})(window.SPT);
