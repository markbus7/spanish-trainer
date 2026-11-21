/* Engels voor Nederlandstaligen — niveau C2, units 6–10 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C2 · 6 ───────────────────────── */
  U({
    id: 'en-c2-06', level: 'C2', icon: '🧀', title: 'I am in Boston since 2019', nl: 'Dunglish: de laatste Nederlandse fouten',
    goals: ['De hardnekkigste fouten van zeer goede Nederlandse sprekers herkennen', 'Tijden: «since» met present perfect, «already» en «still»', 'Valse vrienden op hoog niveau: eventually, actual, control, sympathetic'],
    vocab: [
      ['eventually', 'uiteindelijk (niet: eventueel)'], ['possibly', 'eventueel / mogelijk'], ['actual', 'werkelijk (niet: actueel)'], ['current', 'actueel / huidig'], ['to control', 'beheersen / besturen (niet: controleren)'],
      ['to check', 'controleren'], ['sympathetic', 'meelevend (niet: sympathiek)'], ['nice / likable', 'sympathiek'], ['consequent', 'daaruit volgend (niet: consequent)'], ['consistent', 'consequent'],
      ['a chef', 'een kok (niet: je baas)'], ['a boss', 'een chef / baas'], ['an undertaker', 'een begrafenisondernemer (niet: ondernemer)'], ['an entrepreneur', 'een ondernemer'], ['to become', 'worden (niet: bekomen)'],
      ['to get', 'krijgen'], ['a brutal', 'wreed (niet: brutaal)'], ['cheeky', 'brutaal'], ['to solicit', 'werven / benaderen (niet: solliciteren)'], ['to apply for', 'solliciteren naar'],
      ['an argument', 'een ruzie / betoog (niet: argument)'], ['a point / a reason', 'een argument'], ['a costume', 'een verkleedpak (niet: kostuum)'], ['a suit', 'een kostuum / pak']
    ],
    grammar: [
      { t: 'Tijden: de Nederlandse tegenwoordige tijd', es: 'Present perfect with since/for',
        html: `<p>De bekendste fout, zelfs bij heel goede sprekers: het Nederlands gebruikt de <b>tegenwoordige tijd</b> voor iets wat in het verleden begon en nog doorgaat. Het Engels gebruikt de <b>present perfect</b>:</p>
<p><s>I live here since 2019.</s> → <i>I <b>have lived</b> here since 2019.</i> / <i>I'<b>ve been living</b> here since 2019.</i></p>
<p><s>I know him for ten years.</s> → <i>I'<b>ve known</b> him for ten years.</i></p>
<p><s>How long are you married?</s> → <i>How long <b>have</b> you <b>been</b> married?</i> (<i>How long are you here?</i> betekent: hoe lang blijf je nog?)</p>
<p>Andersom: een afgeronde tijd in het verleden krijgt <b>past simple</b>: <s>I have seen him yesterday.</s> → <i>I <b>saw</b> him yesterday.</i></p>`,
        table: [['Dunglish', 'correct'], ['I work here since May.', "I've worked here since May."], ['I know her for years.', "I've known her for years."], ['How long do you live here?', 'How long have you lived here?'], ['I have been there last week.', 'I was there last week.'], ['We wait already an hour.', "We've been waiting for an hour."]],
        sum: "I've lived here since 2019. I saw him yesterday.",
        ex: [["I've been working on this report since Monday.", 'Ik werk sinds maandag aan dit rapport.'], ['How long have you been learning English?', 'Hoe lang leer je al Engels?']] },
      { t: 'Valse vrienden op hoog niveau', es: 'Advanced false friends',
        html: `<p>Deze woorden lijken op Nederlands, maar betekenen iets anders:</p>
<p><i><b>eventually</b></i> = uiteindelijk (eventueel = <i>possibly, if necessary</i>). <i><b>actual</b></i> = werkelijk (actueel = <i>current, topical</i>). <i>to <b>control</b></i> = beheersen, besturen (controleren = <i>to check</i>).</p>
<p><i><b>sympathetic</b></i> = meelevend (sympathiek = <i>nice, likable</i>). <i><b>consequent</b></i> = daaruit voortvloeiend (consequent = <i>consistent</i>).</p>
<p><i>an <b>undertaker</b></i> = begrafenisondernemer (ondernemer = <i>entrepreneur</i>). <i>a <b>chef</b></i> = een kok (je chef = <i>boss, manager</i>). <i>an <b>argument</b></i> = meestal ruzie (een argument = <i>a point, a reason</i>).</p>
<p>Klassieker: <s>Can I become a coffee?</s> → <i>Can I <b>get</b> / <b>have</b> a coffee?</i></p>`,
        table: [['Nederlands', 'fout', 'goed'], ['eventueel', 'eventually', 'possibly / if necessary'], ['actueel', 'actual', 'current'], ['controleren', 'control', 'check'], ['sympathiek', 'sympathetic', 'nice / likable'], ['consequent', 'consequent', 'consistent']],
        ex: [["Eventually, we found the right solution.", 'Uiteindelijk vonden we de juiste oplossing.'], ['Could you check the numbers before the meeting?', 'Kun je de cijfers controleren voor de vergadering?']] },
      { t: 'Kleine woorden, grote verraders', es: 'Small giveaways',
        html: `<p>Een paar kleine fouten verraden meteen een Nederlandse spreker:</p>
<p><b>Make/take a photo</b>: <s>make a picture</s> → <i><b>take</b> a picture</i>. <s>make an exam</s> → <i><b>take</b> an exam</i>. <s>make a walk</s> → <i><b>take / go for</b> a walk</i>.</p>
<p><b>Prepositions</b>: <s>on the picture</s> → <i><b>in</b> the picture</i>. <s>I'm on the train in Utrecht</s> (prima) maar <s>on the university</s> → <i><b>at</b> the university</i>. <s>married with</s> → <i>married <b>to</b></i>. <s>depend of</s> → <i>depend <b>on</b></i>.</p>
<p><b>Overig</b>: <s>the most people</s> → <i>most people</i>. <s>I'm agree</s> → <i>I agree</i>. <s>Everybody were</s> → <i>everybody <b>was</b></i>. <s>Do you speak Dutch? — A little bit.</s> klopt, maar <s>I speak a little bit English</s> → <i>I speak a little English</i>.</p>`,
        table: [['Dunglish', 'correct'], ['make a photo', 'take a photo'], ['make an exam', 'take an exam'], ['married with', 'married to'], ['on the picture', 'in the picture'], ["I'm agree.", 'I agree.']],
        ex: [["Could you take a picture of us?", 'Kun je een foto van ons maken?'], ["She's married to an American.", 'Ze is getrouwd met een Amerikaan.']] }
    ],
    dialogue: {
      t: 'Coffee with a Dutch colleague', place: 'Boston 🇺🇸',
      lines: [
        ['Pieter', "Can I become a coffee, please?", 'Mag ik een koffie, alstublieft?'],
        ['Barista', "Ha, I don't think I can help with that. But I can get you one.", 'Ha, ik denk niet dat ik je kan helpen een koffie te wórden. Maar ik kan er wel een voor je halen.'],
        ['Pieter', "Oh no. Twenty years of English and I still make that mistake.", 'O nee. Twintig jaar Engels en ik maak die fout nog steeds.'],
        ['Kate', "Don't worry. How long are you in Boston, by the way?", 'Maak je geen zorgen. Hoe lang ben je trouwens in Boston?'],
        ['Pieter', "I am here since March. I mean, I've been here since March.", 'Ik ben hier sinds maart. Ik bedoel, ik ben hier sinds maart.'],
        ['Kate', "And how do you like your new chef?", 'En hoe bevalt je nieuwe chef?'],
        ['Pieter', "You mean my boss? He's very sympathetic. Wait, no. He's very nice. Is that the same?", 'Je bedoelt mijn baas? Hij is heel sympathiek. Wacht, nee. Hij is heel aardig. Is dat hetzelfde?'],
        ['Kate', "Not quite. «Sympathetic» means he feels sorry for you. Which, after that coffee, he might.", 'Niet helemaal. «Sympathetic» betekent dat hij met je meeleeft. Wat hij na die koffie misschien ook doet.']
      ],
      q: [
        { t: 'mc', q: 'What should Pieter have said to the barista?', o: ['Can I get a coffee?', 'Can I become a coffee?', 'Can I make a coffee?'] },
        { t: 'mc', q: 'How long has Pieter been in Boston?', o: ['Since March', 'Twenty years', 'Since last week'] },
        { t: 'mc', q: 'What does «sympathetic» mean?', o: ['Feeling sorry for someone', 'Nice and friendly', 'Very smart'] }
      ]
    },
    culture: { t: 'Steenkolenengels', html: `<p>Nederlanders hebben een eigen woord voor slecht Engels: <b>steenkolenengels</b>. Het komt van de havens, waar Nederlandse havenwerkers met Engelse kolenschepen communiceerden.</p>
<p>Beroemde voorbeelden zijn grappen geworden: <i>I always get my sin</i> (ik krijg altijd mijn zin), <i>Make that the cat wise</i> (maak dat de kat wijs), <i>We have to deal with the elephant in the room</i> (die is wél goed!).</p>
<p>🎯 Op C2-niveau gaat het niet meer om begrip: iedereen begrijpt je. Het gaat erom dat je niet meer opvalt. Precies die laatste fouten in deze unit maken het verschil.</p>` },
    ex: [
      { t: 'cloze', s: "___ in Boston since 2019.", a: ["I've lived"], o: ["I've lived", 'I live', 'I am living'], nl: 'Ik woon sinds 2019 in Boston.', tag: 'enx-dunglish' },
      { t: 'cloze', s: '___, after three years, they got married.', a: ['Eventually'], o: ['Eventually', 'Possibly', 'Eventual'], nl: 'Uiteindelijk, na drie jaar, trouwden ze.', tag: 'enx-dunglish' },
      { t: 'cloze', s: 'Could you ___ my email before I send it?', a: ['check'], o: ['check', 'control', 'controle'], nl: 'Kun je mijn e-mail controleren voordat ik hem verstuur?', tag: 'enx-dunglish' },
      { t: 'cloze', s: 'Can I ___ a glass of water, please?', a: ['get'], o: ['get', 'become', 'receive me'], nl: 'Mag ik een glas water, alstublieft?', tag: 'enx-dunglish' },
      { t: 'cloze', s: 'Could you ___ a picture of us?', a: ['take'], o: ['take', 'make', 'do'], nl: 'Kun je een foto van ons maken?', tag: 'enx-dunglish' },
      { t: 'cloze', s: 'She’s married ___ a doctor from Texas.', a: ['to'], o: ['to', 'with', 'by'], nl: 'Ze is getrouwd met een arts uit Texas.', tag: 'enx-dunglish' },
      { t: 'cloze', s: 'You need to be more ___: you can’t change the rules every week.', a: ['consistent'], o: ['consistent', 'consequent', 'constant'], nl: 'Je moet consequenter zijn: je kunt niet elke week de regels veranderen.', tag: 'enx-dunglish' },
      { t: 'mc', q: '«Ik heb gisteren gesolliciteerd» in het Engels:', o: ['I applied for a job yesterday.', 'I solicited yesterday.', 'I have solicited yesterday.'], tag: 'enx-dunglish' },
      { t: 'mc', q: 'Wat is een «undertaker»?', o: ['een begrafenisondernemer', 'een ondernemer', 'een onderaannemer'], tag: 'enx-dunglish' },
      { t: 'mc', q: '«Wat is de actuele stand?» in het Engels:', o: ["What's the current score?", "What's the actual score?", "What's the actuel score?"], tag: 'enx-dunglish' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I saw him last week.', 'I have seen him last week.', 'I have been seeing him last week.'], tag: 'enx-dunglish' },
      { t: 'tr', nl: 'Hoe lang ken je haar al?', a: ['How long have you known her?', 'How long have you known her for?'], tag: 'enx-dunglish' },
      { t: 'tr', nl: 'Ik ben het met je eens.', a: ['I agree with you.', 'I agree.'], tag: 'enx-dunglish' },
      { t: 'order', s: "I've been working here since last summer.", nl: 'Ik werk hier sinds afgelopen zomer.', tag: 'enx-dunglish' },
      { t: 'match', p: [['an argument', 'een ruzie'], ['a costume', 'een verkleedpak'], ['a suit', 'een kostuum'], ['cheeky', 'brutaal'], ['a chef', 'een kok']], tag: 'enx-dunglish' }
    ],
    reading: {
      t: 'The last 2 percent', type: 'Opiniestuk',
      p: [
        ["The Netherlands consistently ranks as one of the best non-native English-speaking countries in the world. Most Dutch professionals can run a meeting, write a report and argue a case in English.", 'Nederland staat steevast in de top van landen waar Engels niet de moedertaal is. De meeste Nederlandse professionals kunnen in het Engels een vergadering leiden, een rapport schrijven en een standpunt verdedigen.'],
        ["And yet, almost all of them make the same handful of mistakes. «I live here since…», «Can I become…», «eventually» meaning maybe. These errors are small, but they are also fossilized: repeated so often that they no longer feel wrong.", 'En toch maken bijna allemaal dezelfde handvol fouten. «I live here since…», «Can I become…», «eventually» in de betekenis van misschien. Deze fouten zijn klein, maar ook versteend: zo vaak herhaald dat ze niet meer fout voelen.'],
        ["Linguists call this «fossilization». It is the reason that a speaker can be at 98 percent for years without reaching 100. The brain has stopped noticing.", 'Taalkundigen noemen dit «fossilisatie». Het is de reden dat iemand jaren op 98 procent kan zitten zonder ooit 100 te halen. Het brein merkt het niet meer op.'],
        ["The cure is not more English; it is targeted attention. Pick three of your fossils, write them on a sticky note and listen for them for a week. You'll be surprised how often they appear.", 'Het medicijn is niet méér Engels, maar gerichte aandacht. Kies drie van je fossielen, schrijf ze op een geeltje en let er een week op. Je zult versteld staan hoe vaak ze opduiken.']
      ],
      gl: [['a handful', 'een handjevol'], ['fossilized', 'versteend'], ['targeted', 'gericht']],
      q: [
        { t: 'mc', q: 'What is «fossilization»?', o: ['Mistakes repeated so often they no longer feel wrong', 'Forgetting a language', 'Learning very old words'] },
        { t: 'mc', q: 'What is the cure, according to the writer?', o: ['Targeted attention', 'More English lessons', 'Moving abroad'] },
        { t: 'mc', q: 'How does the writer suggest you start?', o: ['Write three fossils on a sticky note', 'Read a grammar book', 'Watch American TV'] }
      ]
    },
    say: [["I've lived here since 2019.", 'Ik woon hier sinds 2019.'], ['Can I get a coffee, please?', 'Mag ik een koffie?'], ['Eventually, it worked out.', 'Uiteindelijk kwam het goed.'], ['Could you check this for me?', 'Kun je dit voor me controleren?']],
    task: { nl: 'Schrijf 5 zinnen over je werk of studie: hoe lang je het al doet, wat je baas/docent is voor iemand, en wat je uiteindelijk wilt bereiken. Vermijd bewust de fouten uit deze unit (since + present perfect, eventually, sympathetic, chef, control).', model: "I've been working as a project manager since 2018. My boss is very nice and always willing to help. I check all the numbers before I send them to our clients. Eventually, I'd like to start my own company. I'm sure I'll be a consistent, if slightly cheeky, entrepreneur." },
    scenario: { nl: 'Je praat met een Amerikaanse collega die je op subtiele fouten wijst.', role: 'You are Kate, an American colleague in Boston who is friends with the learner. Have a natural conversation about work, life in the US and plans. Whenever the learner makes a typical Dutch mistake (present tense with since/for, become instead of get, false friends like eventually, actual, sympathetic, control, chef, make a photo), point it out kindly and briefly, then continue the conversation.', goal: 'Voer een gesprek zonder de typische Nederlandse fouten.' }
  });

  /* ───────────────────────── C2 · 7 ───────────────────────── */
  U({
    id: 'en-c2-07', level: 'C2', icon: '🖋️', title: 'Short. Then longer.', nl: 'Stijl, ritme en interpunctie',
    goals: ['Zinsritme variëren: kort voor nadruk, lang voor uitleg', 'Interpunctie als een native: komma’s, puntkomma, dubbele punt en gedachtestreepje', 'Fronting en parallelisme voor elegante zinnen'],
    vocab: [
      ['a semicolon', 'een puntkomma'], ['a colon', 'een dubbele punt'], ['an em dash', 'een gedachtestreepje'], ['a comma splice', 'een kommafout (twee zinnen met komma)'], ['the Oxford comma', 'de komma voor «and» in een opsomming'],
      ['parentheses', 'haakjes'], ['quotation marks', 'aanhalingstekens'], ['an apostrophe', 'een apostrof'], ['a run-on sentence', 'een doorlopende zin'], ['a fragment', 'een zinsfragment'],
      ['rhythm', 'ritme'], ['parallelism', 'parallellisme'], ['to vary', 'variëren'], ['to emphasize', 'benadrukken'], ['vivid', 'levendig'],
      ['concise', 'beknopt'], ['redundant', 'overbodig'], ['punchy', 'pakkend / krachtig'], ['flow', 'leesbaarheid / vloeiendheid'], ['a draft', 'een opzet / versie'],
      ['to proofread', 'proeflezen'], ['to tighten', 'aanscherpen'], ['a cliché', 'een cliché']
    ],
    grammar: [
      { t: 'Ritme: kort en lang afwisselen', es: 'Sentence rhythm',
        html: `<p>Goede Engelse schrijvers wisselen <b>korte en lange zinnen</b> af. Een korte zin na een lange geeft nadruk:</p>
<p><i>We spent six months interviewing customers, analyzing data and testing prototypes in three different cities. <b>Nobody wanted it.</b></i></p>
<p>Een fragment (zin zonder werkwoord) mag in verzorgde, niet-formele teksten, voor effect: <i>The result? <b>Total silence.</b></i></p>
<p>Schrap <b>overbodige woorden</b>: <i>in order to</i> → <i>to</i>; <i>at this point in time</i> → <i>now</i>; <i>due to the fact that</i> → <i>because</i>; <i>very unique</i> → <i>unique</i>.</p>`,
        table: [['omslachtig', 'strak'], ['in order to', 'to'], ['at this point in time', 'now'], ['due to the fact that', 'because'], ['in the event that', 'if'], ['a large number of', 'many']],
        sum: 'Vary your sentences. It works.',
        ex: [["The plan was ambitious, expensive and, in hindsight, completely unrealistic. It failed.", 'Het plan was ambitieus, duur en, achteraf gezien, volkomen onrealistisch. Het mislukte.'], ['We left early because of the storm.', 'We vertrokken vroeg vanwege de storm.']] },
      { t: 'Interpunctie: komma’s en puntkomma’s', es: 'Punctuation',
        html: `<p><b>Comma splice</b>: in het Nederlands mag je twee hoofdzinnen vaak met een komma verbinden. In het Engels is dat fout: <s>It was late, we went home.</s></p>
<p>Oplossingen: een punt (<i>It was late. We went home.</i>), een voegwoord (<i>It was late, <b>so</b> we went home.</i>) of een <b>puntkomma</b> (<i>It was late<b>;</b> we went home.</i>).</p>
<p>Ook vóór <i>however</i> tussen twee zinnen: <i>I like the idea<b>;</b> however, it's too expensive.</i></p>
<p><b>Geen komma</b> vóór <i>that</i> (in tegenstelling tot het Nederlands «dat»): <s>I think, that he is right.</s> → <i>I think that he is right.</i></p>
<p><b>Oxford comma</b>: Amerikanen zetten vaak een komma vóór <i>and</i> in een opsomming: <i>red, white<b>,</b> and blue</i>.</p>`,
        table: [['fout (Nederlandse gewoonte)', 'goed'], ['It was late, we went home.', 'It was late, so we went home.'], ['I like it, however it is expensive.', 'I like it; however, it is expensive.'], ['He said, that he was tired.', 'He said that he was tired.'], ['I know, what you mean.', 'I know what you mean.']],
        ex: [["The flight was delayed; we missed our connection.", 'De vlucht had vertraging; we misten onze aansluiting.'], ['She said that she would call.', 'Ze zei dat ze zou bellen.']] },
      { t: 'Dubbele punt, gedachtestreepje en parallelisme', es: 'Colons, dashes & parallelism',
        html: `<p>De <b>dubbele punt</b> kondigt aan: een opsomming, uitleg of onthulling. <i>There was only one problem<b>:</b> nobody had a key.</i></p>
<p>Het <b>gedachtestreepje</b> (em dash: —) geeft een onderbreking of nadruk, informeler dan haakjes: <i>The new manager<b> — </b>who had never run a team<b> — </b>was surprisingly good.</i> In Amerikaans Engels vaak zonder spaties: <i>manager—who</i>.</p>
<p><b>Parallelisme</b>: houd zinsdelen in een reeks gelijk van vorm. <s>She likes hiking, to swim and cycling.</s> → <i>She likes <b>hiking</b>, <b>swimming</b> and <b>cycling</b>.</i> <s>The job is not only boring but also it pays badly.</s> → <i>The job is not only <b>boring</b> but also <b>badly paid</b>.</i></p>`,
        table: [['teken', 'functie', 'voorbeeld'], ['colon :', 'aankondiging', 'One thing matters: trust.'], ['em dash —', 'onderbreking / nadruk', 'He left—without a word.'], ['semicolon ;', 'twee verwante zinnen', "It rained; we stayed in."], ['parentheses ( )', 'bijzaak', 'The report (all 90 pages) is late.']],
        ex: [["There was only one thing left to do: apologize.", 'Er zat maar één ding op: excuses aanbieden.'], ['We came, we saw, we left.', 'We kwamen, we zagen, we vertrokken.']] }
    ],
    dialogue: {
      t: 'The newsletter edit', place: 'Portland, Oregon 🇺🇸',
      lines: [
        ['Megan', "I'm reading your newsletter draft. The ideas are great; the punctuation is very Dutch.", 'Ik lees je nieuwsbriefconcept. De ideeën zijn geweldig; de interpunctie is erg Nederlands.'],
        ['Lotte', "Very Dutch? How can a comma be Dutch?", 'Erg Nederlands? Hoe kan een komma Nederlands zijn?'],
        ['Megan', "Like this: «The event was a success, we raised ten thousand dollars.» That's a comma splice.", 'Zo: «The event was a success, we raised ten thousand dollars.» Dat is een comma splice.'],
        ['Lotte', "So a period instead?", 'Dus een punt in plaats daarvan?'],
        ['Megan', "Or a semicolon. Or even a dash: «The event was a success — we raised ten thousand dollars.» That adds a little drama.", 'Of een puntkomma. Of zelfs een gedachtestreepje: «The event was a success — we raised ten thousand dollars.» Dat geeft wat drama.'],
        ['Lotte', "And this sentence? «We want to thank our volunteers, to our sponsors and everybody who came.»", 'En deze zin? «We want to thank our volunteers, to our sponsors and everybody who came.»'],
        ['Megan', "Not parallel. «We want to thank our volunteers, our sponsors, and everyone who came.» See? Same rhythm for each part.", 'Niet parallel. «We want to thank our volunteers, our sponsors, and everyone who came.» Zie je? Hetzelfde ritme voor elk deel.'],
        ['Lotte', "You added a comma before «and».", 'Je hebt een komma voor «and» toegevoegd.'],
        ['Megan', "The Oxford comma. Americans will fight you over it. I'm one of them.", 'De Oxford comma. Amerikanen gaan er de strijd voor aan. Ik ben er een van.']
      ],
      q: [
        { t: 'mc', q: 'What is wrong with «The event was a success, we raised ten thousand dollars»?', o: ['It’s a comma splice', 'It’s too short', 'The verb is wrong'] },
        { t: 'mc', q: 'What does the dash add, according to Megan?', o: ['A little drama', 'More formality', 'A question'] },
        { t: 'mc', q: 'What is Megan’s opinion of the Oxford comma?', o: ['She strongly supports it', 'She hates it', 'She doesn’t care'] }
      ]
    },
    culture: { t: 'De Oxford comma-oorlog', html: `<p>De <b>Oxford comma</b> (of <i>serial comma</i>) is in de VS een serieus discussiepunt. De <i>Chicago Manual of Style</i> en de meeste uitgevers gebruiken hem; de <i>AP Stylebook</i> (kranten) niet.</p>
<p>In 2017 kostte het ontbreken van één komma in een wet in de staat Maine een zuivelbedrijf zo'n 5 miljoen dollar aan overuren voor vrachtwagenchauffeurs. De zin was dubbelzinnig doordat de Oxford comma ontbrak.</p>
<p>📚 Beroemd voorbeeld: <i>I'd like to thank my parents, Ayn Rand and God.</i> Zonder komma lijken Ayn Rand en God je ouders.</p>` },
    ex: [
      { t: 'mc', q: 'Welke zin is correct gepunctueerd?', o: ['It was raining, so we decided to stay home.', 'It was raining, we decided to stay home.', 'It was raining so, we decided to stay home.'], tag: 'enx-style' },
      { t: 'mc', q: 'Welke zin is correct gepunctueerd?', o: ['I like the plan; however, it’s too expensive.', 'I like the plan, however it’s too expensive.', 'I like the plan however, it’s too expensive.'], tag: 'enx-style' },
      { t: 'mc', q: 'Welk leesteken past in «There was only one problem _ nobody had a key»?', o: ['een dubbele punt (:)', 'een komma (,)', 'geen leesteken'], tag: 'enx-style' },
      { t: 'cloze', s: 'She enjoys hiking, swimming and ___.', a: ['cycling'], o: ['cycling', 'to cycle', 'she cycles'], nl: 'Ze houdt van wandelen, zwemmen en fietsen.', tag: 'enx-style' },
      { t: 'cloze', s: 'We left early ___ the storm.', a: ['because of'], o: ['because of', 'due to the fact of', 'in order of'], nl: 'We vertrokken vroeg vanwege de storm.', tag: 'enx-style' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['He said that he was tired.', 'He said, that he was tired.', 'He said; that he was tired.'], tag: 'enx-style' },
      { t: 'mc', q: 'Welke zin bevat een comma splice?', o: ['The shop was closed, we went home.', 'The shop was closed, so we went home.', 'The shop was closed; we went home.'], tag: 'enx-style' },
      { t: 'mc', q: 'Welke zin is parallel?', o: ['The job is boring, tiring and badly paid.', 'The job is boring, it tires me and badly paid.', 'The job is boring, tiring and it pays badly.'], tag: 'enx-style' },
      { t: 'mc', q: 'Wat is de strakste versie van «at this point in time»?', o: ['now', 'at this moment in time', 'currently at this point'], tag: 'enx-style' },
      { t: 'mc', q: 'Wat is de Oxford comma?', o: ['De komma vóór «and» in een opsomming', 'Een komma vóór «that»', 'Een komma in Britse adressen'], tag: 'enx-style' },
      { t: 'tr', nl: 'Ik weet wat je bedoelt.', a: ['I know what you mean.'], tag: 'enx-style' },
      { t: 'tr', nl: 'We zijn vroeg vertrokken omdat het regende.', a: ['We left early because it was raining.', 'We left early because it rained.'], tag: 'enx-style' },
      { t: 'order', s: 'We spent months on the plan. It failed.', nl: 'We hebben maanden aan het plan gewerkt. Het mislukte.', tag: 'enx-style' },
      { t: 'match', p: [['a semicolon', 'een puntkomma'], ['a colon', 'een dubbele punt'], ['parentheses', 'haakjes'], ['to proofread', 'proeflezen'], ['redundant', 'overbodig'], ['punchy', 'pakkend']], tag: 'enx-style' }
    ],
    reading: {
      t: 'On writing well', type: 'Essay',
      p: [
        ["Good writing is not about long words. It is about clear thinking, made visible. If a sentence confuses the reader, the problem is usually not the reader.", 'Goed schrijven gaat niet om lange woorden. Het gaat om helder denken, zichtbaar gemaakt. Als een zin de lezer in verwarring brengt, ligt het probleem meestal niet bij de lezer.'],
        ["Read your text aloud. Where you run out of breath, the sentence is too long. Where you stumble, the rhythm is wrong. Where you get bored, so will your reader.", 'Lees je tekst hardop voor. Waar je adem tekortschiet, is de zin te lang. Waar je struikelt, klopt het ritme niet. Waar jij je verveelt, doet je lezer dat ook.'],
        ["Then cut. Most first drafts can lose a fifth of their words without losing any meaning. Words like «very», «really» and «basically» are usually the first to go.", 'Schrap dan. De meeste eerste versies kunnen een vijfde van hun woorden kwijt zonder betekenis te verliezen. Woorden als «very», «really» en «basically» gaan meestal als eerste.'],
        ["Finally, vary your sentences. A long one to explain. A short one to land the point. It works. Try it.", 'Varieer tot slot je zinnen. Een lange om uit te leggen. Een korte om het punt te laten landen. Het werkt. Probeer het.']
      ],
      gl: [['to stumble', 'struikelen'], ['to run out of breath', 'buiten adem raken'], ['to land a point', 'een punt laten aankomen']],
      q: [
        { t: 'mc', q: 'What is good writing about, according to the essay?', o: ['Clear thinking made visible', 'Long and impressive words', 'Perfect grammar'] },
        { t: 'mc', q: 'How much can most first drafts lose?', o: ['About a fifth of their words', 'Half of their words', 'Nothing'] },
        { t: 'mc', q: 'Why does the essay end with very short sentences?', o: ['To demonstrate its own advice', 'Because the writer ran out of time', 'By mistake'] }
      ]
    },
    say: [['It was late, so we went home.', 'Het was laat, dus we gingen naar huis.'], ['There was only one problem: money.', 'Er was maar één probleem: geld.'], ['We came, we saw, we left.', 'We kwamen, we zagen, we vertrokken.'], ['I know what you mean.', 'Ik weet wat je bedoelt.']],
    task: { nl: 'Herschrijf deze omslachtige alinea tot een strakke tekst van maximaal 4 zinnen, met minstens één puntkomma of dubbele punt en één korte zin voor nadruk: «Due to the fact that at this point in time we have a very large number of customers who are really unhappy, it is the case that we need to make changes, we need to make them fast, and in order to do that we will have a meeting.»', model: "Many of our customers are unhappy; we need to change, and fast. That's why we're meeting on Monday. One goal: win them back." },
    scenario: { nl: 'Je laat een Amerikaanse redacteur een tekst van je verbeteren.', role: 'You are Megan, an American copy editor in Portland. The learner gives you short texts (emails, newsletter paragraphs, LinkedIn posts). Edit them for rhythm, conciseness and punctuation: catch comma splices, commas before «that», non-parallel lists and wordy phrases. Explain each change briefly and ask the learner to try a new paragraph.', goal: 'Schrijf strakke, goed gepunctueerde teksten met ritme.' }
  });

  /* ───────────────────────── C2 · 8 ───────────────────────── */
  U({
    id: 'en-c2-08', level: 'C2', icon: '🛋️', title: 'I mean, it’s kinda like…', nl: 'Spreektaal, slang en discourse markers',
    goals: ['Discourse markers gebruiken: I mean, you know, anyway, actually, so', 'Vaagtaal en afzwakkers: kinda, sort of, or something, and stuff', 'Moderne Amerikaanse slang begrijpen (en weten wanneer niet te gebruiken)'],
    vocab: [
      ['I mean', 'ik bedoel'], ['you know', 'weet je'], ['anyway', 'hoe dan ook / enfin'], ['actually', 'eigenlijk / sterker nog'], ['basically', 'eigenlijk / in feite'],
      ['kind of / kinda', 'een beetje / soort van'], ['sort of', 'zo’n beetje'], ['or something', 'of zoiets'], ['and stuff', 'en zo'], ['whatever', 'maakt niet uit / boeien'],
      ['to hang out', 'rondhangen / chillen'], ['no big deal', 'geen probleem'], ['my bad', 'mijn fout'], ['to bail', 'afhaken'], ['to be swamped', 'het superdruk hebben'],
      ['awesome', 'geweldig'], ['legit', 'echt / betrouwbaar'], ['sketchy', 'louche / onbetrouwbaar'], ['a rain check', 'een andere keer'], ['to crash', 'gaan slapen / blijven slapen'],
      ['shady', 'louche'], ['to be down for', 'zin hebben in'], ['for real', 'echt waar'], ['no worries', 'geen zorgen']
    ],
    grammar: [
      { t: 'Discourse markers: de lijm van gesprekken', es: 'Discourse markers',
        html: `<p>In gesproken Engels gebruiken mensen voortdurend kleine woordjes die het gesprek <b>sturen</b>. Ze voegen geen inhoud toe, maar zonder klink je stijf.</p>
<p><b>So</b> (beginnen of samenvatten): <i><b>So</b>, how was the trip?</i> <b>Anyway</b> (terug naar het onderwerp): <i><b>Anyway</b>, where was I?</i> <b>I mean</b> (verduidelijken of nuanceren): <i>It was good. <b>I mean</b>, not amazing, but good.</i> <b>Actually</b> (corrigeren of verrassen): <i><b>Actually</b>, I've never been there.</i> <b>Right?</b> (instemming zoeken): <i>It's crazy, <b>right</b>?</i></p>
<p>Let op: <i>actually</i> is géén «actueel». En <i>eventually</i> is niet «eventueel».</p>`,
        table: [['marker', 'functie', 'Nederlands'], ['so', 'beginnen / samenvatten', 'dus / nou'], ['anyway', 'terug naar onderwerp', 'enfin / hoe dan ook'], ['I mean', 'nuanceren', 'ik bedoel'], ['actually', 'corrigeren', 'eigenlijk / sterker nog'], ['you know', 'betrekken', 'weet je'], ['right?', 'instemming zoeken', 'toch?']],
        sum: 'So, anyway… I mean… Actually… right?',
        ex: [["Anyway, enough about me. How are you?", 'Enfin, genoeg over mij. Hoe gaat het met jou?'], ["It was fine. I mean, it wasn't great, but it was fine.", 'Het was oké. Ik bedoel, het was niet geweldig, maar het was oké.']] },
      { t: 'Vaagtaal en afzwakken', es: 'Vague language',
        html: `<p>Moedertaalsprekers zijn in spreektaal vaak bewust <b>vaag</b>. Dat klinkt ontspannen en vriendelijk:</p>
<p><i>It's <b>kind of</b> expensive.</i> <i>I'm <b>sort of</b> tired.</i> <i>We could get pizza <b>or something</b>.</i> <i>We talked about work <b>and stuff</b>.</i> <i>There were <b>like</b> fifty people.</i> (like = ongeveer)</p>
<p>Ook getallen worden vaag: <i>twenty<b>-ish</b></i> (rond de twintig), <i>a <b>couple</b> of</i> (een paar), <i><b>a bunch</b> of people</i>.</p>
<p>Nederlanders zijn in het Engels vaak heel precies en direct. <i>It's too expensive.</i> klinkt harder dan <i>It's kind of pricey.</i></p>
<p>⚠️ In formele teksten en presentaties: niet doen.</p>`,
        table: [['precies', 'vaag (spreektaal)'], ['It is expensive.', "It's kind of pricey."], ['approximately 20', 'twenty-ish / like twenty'], ['several people', 'a bunch of people'], ['pizza or a similar dish', 'pizza or something'], ['work and related things', 'work and stuff']],
        ex: [["Let's meet at seven-ish.", 'Laten we rond zevenen afspreken.'], ["I'm kind of swamped this week.", 'Ik heb het deze week behoorlijk druk.']] },
      { t: 'Amerikaanse slang: begrijpen vóór gebruiken', es: 'American slang',
        html: `<p><b>Slang</b> verandert snel en verschilt per generatie en regio. Begrijpen is belangrijker dan zelf gebruiken: verkeerd gebruikte slang klinkt eerder vreemd dan cool.</p>
<p><b>Veilig en algemeen</b>: <i>awesome, cool, no worries, my bad, no big deal, to hang out, to be swamped, to take a rain check</i> (een andere keer), <i>to bail</i> (afhaken), <i>sketchy / shady</i> (louche), <i>legit</i> (echt).</p>
<p><b>Jongere generatie</b> (begrijpen, voorzichtig gebruiken): <i>low-key</i> (eigenlijk, stiekem), <i>no cap</i> (echt waar), <i>it's giving…</i> (het doet denken aan), <i>to slay</i> (het geweldig doen), <i>bet</i> (oké, afgesproken).</p>
<p>Gebruik slang alleen bij mensen die het zelf ook gebruiken, en nooit op het werk in e-mails.</p>`,
        table: [['slang', 'betekenis'], ['my bad', 'mijn fout, sorry'], ["I'll take a rain check.", 'Een andere keer graag.'], ['That place looks sketchy.', 'Die tent ziet er louche uit.'], ["I'm down.", 'Ik doe mee / heb er zin in.'], ['Is this legit?', 'Is dit echt / betrouwbaar?']],
        ex: [["Can I take a rain check on dinner? I'm swamped.", 'Kunnen we het etentje verzetten? Ik heb het superdruk.'], ["Sorry, my bad. I sent it to the wrong person.", 'Sorry, mijn fout. Ik heb het naar de verkeerde persoon gestuurd.']] }
    ],
    dialogue: {
      t: 'Catching up', place: 'Los Angeles 🇺🇸',
      lines: [
        ['Tyler', "Hey! Long time no see. So, how've you been?", 'Hé! Lang niet gezien. Nou, hoe gaat het met je?'],
        ['Sanne', "Good! I mean, kind of busy. Work's been crazy and stuff.", 'Goed! Ik bedoel, best druk. Werk is gekkenhuis en zo.'],
        ['Tyler', "Tell me about it. I'm totally swamped too. Anyway, are you down for tacos tonight?", 'Wat je zegt. Ik heb het ook superdruk. Hoe dan ook, heb je zin in taco’s vanavond?'],
        ['Sanne', "Actually, I promised my roommate I'd help her move. Can I take a rain check?", 'Eigenlijk heb ik mijn huisgenoot beloofd te helpen met verhuizen. Kunnen we het verzetten?'],
        ['Tyler', "No worries. Saturday? There's this taco truck downtown. It looks kinda sketchy, but it's legit.", 'Geen zorgen. Zaterdag? Er is een tacotruck in het centrum. Hij ziet er wat louche uit, maar hij is echt goed.'],
        ['Sanne', "I'm down. Seven-ish?", 'Ik doe mee. Rond zevenen?'],
        ['Tyler', "Perfect. Oh, and sorry I bailed on your birthday last month. My bad.", 'Perfect. O, en sorry dat ik vorige maand afhaakte op je verjaardag. Mijn fout.'],
        ['Sanne', "No big deal. You can buy the tacos.", 'Geen probleem. Jij mag de taco’s betalen.']
      ],
      q: [
        { t: 'mc', q: 'Why can’t Sanne go tonight?', o: ['She promised to help her roommate move', 'She’s sick', 'She doesn’t like tacos'] },
        { t: 'mc', q: 'What does Tyler say about the taco truck?', o: ['It looks sketchy but it’s good', 'It’s very expensive', 'It’s closed on Saturday'] },
        { t: 'mc', q: 'How does Sanne want Tyler to make up for missing her birthday?', o: ['By paying for the tacos', 'By buying a present', 'By apologizing again'] }
      ]
    },
    culture: { t: 'Small talk en «How are you?»', html: `<p>In de VS is <i>How are you?</i> of <i>How's it going?</i> vaak een <b>groet</b>, geen echte vraag. Het verwachte antwoord is kort en positief: <i>Good, you?</i> of <i>Not bad!</i></p>
<p>Nederlanders die eerlijk antwoorden («Nou, eigenlijk niet zo goed, mijn rug…») verrassen hun gesprekspartner. Bij goede vrienden kun je wel eerlijk zijn.</p>
<p>🌮 Amerikaanse small talk gaat vaak over eten, sport, het weer en weekendplannen. Politiek en geld zijn bij een eerste kennismaking meestal taboe.</p>` },
    ex: [
      { t: 'cloze', s: "___, enough about work. How's your family?", a: ['Anyway'], o: ['Anyway', 'Actually', 'Eventually'], nl: 'Enfin, genoeg over werk. Hoe gaat het met je familie?', tag: 'enx-spoken' },
      { t: 'cloze', s: "It was okay. I ___, it wasn't amazing.", a: ['mean'], o: ['mean', 'think', 'say'], nl: 'Het was oké. Ik bedoel, het was niet geweldig.', tag: 'enx-spoken' },
      { t: 'cloze', s: "We could order pizza or ___.", a: ['something'], o: ['something', 'anything', 'nothing'], nl: 'We kunnen pizza bestellen of zoiets.', tag: 'enx-spoken' },
      { t: 'cloze', s: "Can I take a ___ check? I'm exhausted tonight.", a: ['rain'], o: ['rain', 'snow', 'time'], nl: 'Kunnen we het een andere keer doen? Ik ben doodmoe vanavond.', tag: 'enx-spoken' },
      { t: 'cloze', s: "Sorry, my ___. I forgot to send it.", a: ['bad'], o: ['bad', 'fault', 'wrong'], nl: 'Sorry, mijn fout. Ik vergat het te sturen.', tag: 'enx-spoken' },
      { t: 'cloze', s: "That website looks ___. I wouldn't give them your credit card.", a: ['sketchy'], o: ['sketchy', 'legit', 'awesome'], nl: 'Die website ziet er louche uit. Ik zou ze je creditcard niet geven.', tag: 'enx-spoken' },
      { t: 'mc', q: 'Een Amerikaan zegt «How’s it going?» bij de kassa. Je antwoordt:', o: ['Good, thanks! You?', 'Well, my back hurts and I slept badly.', 'It goes.'], tag: 'enx-spoken' },
      { t: 'mc', q: '«I’m down» betekent…', o: ['Ik doe mee', 'Ik ben somber', 'Ik lig op de grond'], tag: 'enx-spoken' },
      { t: 'mc', q: 'Wat betekent «There were like fifty people»?', o: ['Er waren ongeveer vijftig mensen.', 'Er waren vijftig mensen die het leuk vonden.', 'Er waren mensen zoals vijftig.'], tag: 'enx-spoken' },
      { t: 'mc', q: 'Waar gebruik je «kinda» en «and stuff» níet?', o: ['In een formele e-mail aan een klant', 'In een appje aan een vriend', 'In een praatje bij de koffie'], tag: 'enx-spoken' },
      { t: 'tr', nl: 'Ik heb het deze week superdruk.', a: ["I'm swamped this week.", 'I am swamped this week.', "I'm really busy this week.", "I'm totally swamped this week."], tag: 'enx-spoken' },
      { t: 'tr', nl: 'Geen probleem!', a: ['No big deal!', 'No worries!', 'No problem!'], tag: 'enx-spoken' },
      { t: 'order', s: "Let's meet at the café at seven-ish.", nl: 'Laten we rond zevenen in het café afspreken.', tag: 'enx-spoken' },
      { t: 'match', p: [['to bail', 'afhaken'], ['to hang out', 'chillen'], ['legit', 'echt / betrouwbaar'], ['to crash', 'blijven slapen'], ['for real', 'echt waar']], tag: 'enx-spoken' }
    ],
    reading: {
      t: 'Like, why do we say «like»?', type: 'Taalcolumn',
      p: [
        ["Older Americans love to complain that young people say «like» too much. «She was, like, so angry, and I was, like, whatever.» It sounds careless. But linguists disagree.", 'Oudere Amerikanen klagen graag dat jongeren te vaak «like» zeggen. «She was, like, so angry, and I was, like, whatever.» Het klinkt slordig. Maar taalkundigen zijn het daar niet mee eens.'],
        ["Research shows that «like» has several specific jobs. It can introduce a quote («I was like, no way»), mean «approximately» («like twenty minutes») or soften a statement so it sounds less direct.", 'Onderzoek laat zien dat «like» verschillende specifieke functies heeft. Het kan een citaat inleiden («I was like, no way»), «ongeveer» betekenen («like twenty minutes») of een uitspraak afzwakken zodat die minder direct klinkt.'],
        ["In other words, it is not random. Speakers who use it a lot are often skilled at telling stories and managing social relationships.", 'Met andere woorden: het is niet willekeurig. Sprekers die het veel gebruiken, zijn vaak goed in verhalen vertellen en het onderhouden van sociale relaties.'],
        ["That said, it's still best avoided in a job interview. Like, seriously.", 'Dat gezegd hebbende: in een sollicitatiegesprek kun je het beter vermijden. Echt, serieus.']
      ],
      gl: [['careless', 'slordig'], ['to soften', 'afzwakken'], ['random', 'willekeurig']],
      q: [
        { t: 'mc', q: 'What do older Americans complain about?', o: ['Young people saying «like» too much', 'Young people speaking too fast', 'Young people using British words'] },
        { t: 'mc', q: 'Which is NOT a job of «like» mentioned in the text?', o: ['To make a question', 'To introduce a quote', 'To mean «approximately»'] },
        { t: 'mc', q: 'Where should you avoid «like», according to the writer?', o: ['In a job interview', 'With friends', 'In text messages'] }
      ]
    },
    say: [["Anyway, how have you been?", 'Enfin, hoe gaat het met je?'], ["Can I take a rain check?", 'Kunnen we het een andere keer doen?'], ["My bad, I forgot.", 'Mijn fout, ik was het vergeten.'], ["I'm kind of swamped.", 'Ik heb het behoorlijk druk.']],
    task: { nl: 'Schrijf een berichtje (5–6 zinnen) aan een Amerikaanse vriend waarin je een afspraak afzegt en een nieuwe voorstelt. Gebruik minstens vier woorden of uitdrukkingen uit deze unit, op een natuurlijke, informele manier.', model: "Hey! So, bad news: I'm totally swamped at work this week. Can I take a rain check on Thursday? My bad, I know I bailed last time too. Are you down for brunch on Sunday instead? There's this place downtown that looks kinda sketchy but it's legit. Eleven-ish?" },
    scenario: { nl: 'Je kletst met een Amerikaanse vriend in Los Angeles.', role: 'You are Tyler, a laid-back friend from Los Angeles in your late twenties. Chat casually with the learner using natural spoken American English: discourse markers (so, anyway, I mean, actually), vague language (kinda, or something, and stuff) and common slang (swamped, rain check, my bad, legit, sketchy, I’m down). If the learner sounds too formal or stiff, playfully suggest a more casual way to say it.', goal: 'Klets ontspannen en natuurlijk, zonder stijf te klinken.' }
  });

  /* ───────────────────────── C2 · 9 ───────────────────────── */
  U({
    id: 'en-c2-09', level: 'C2', icon: '🤝', title: 'Subject to the terms herein', nl: 'Vaktaal: contracten, financiën en onderhandelen',
    goals: ['Juridische en contracttaal lezen: shall, herein, notwithstanding, liable', 'Financieel Engels: revenue, margin, cash flow, write-off', 'Onderhandelen: voorstellen, concessies en voorwaarden formuleren'],
    vocab: [
      ['shall', 'zal / is verplicht (juridisch)'], ['herein', 'hierin'], ['hereby', 'hierbij'], ['thereof', 'daarvan'], ['liable', 'aansprakelijk'],
      ['liability', 'aansprakelijkheid'], ['a breach of contract', 'contractbreuk'], ['to terminate', 'beëindigen / opzeggen'], ['a clause', 'een clausule / artikel'], ['indemnify', 'vrijwaren / schadeloosstellen'],
      ['revenue', 'omzet'], ['profit margin', 'winstmarge'], ['cash flow', 'kasstroom'], ['a write-off', 'een afschrijving'], ['the bottom line', 'de nettowinst / waar het om draait'],
      ['to break even', 'quitte spelen'], ['overhead', 'vaste kosten'], ['leverage', 'onderhandelingsmacht / hefboom'], ['a deal-breaker', 'een breekpunt'], ['to meet halfway', 'elkaar tegemoetkomen'],
      ['a counteroffer', 'een tegenbod'], ['non-negotiable', 'niet onderhandelbaar'], ['to sign off on', 'goedkeuren / akkoord geven'], ['due diligence', 'boekenonderzoek / zorgvuldig onderzoek']
    ],
    grammar: [
      { t: 'Contracttaal lezen', es: 'Legal English',
        html: `<p>Engelse contracten gebruiken een eigen stijl. Een paar sleutelwoorden:</p>
<p><b>shall</b> = verplichting (niet: toekomst): <i>The Supplier <b>shall</b> deliver the goods within 30 days.</i> <b>may</b> = recht, geen plicht. <b>shall not</b> = verbod.</p>
<p><b>here-/there-woorden</b>: <i>herein</i> (in dit document), <i>hereby</i> (hierbij), <i>thereof</i> (daarvan), <i>hereinafter</i> (hierna te noemen): <i>XYZ Inc. (<b>hereinafter</b> «the Company»)</i>.</p>
<p><b>Voorwaarden</b>: <i><b>provided that</b></i> (mits), <i><b>subject to</b></i> (onder voorbehoud van), <i><b>notwithstanding</b></i> (niettegenstaande), <i><b>in the event that</b></i> (indien).</p>
<p>Moderne Amerikaanse contracten worden steeds vaker in <b>plain English</b> geschreven, maar deze woorden kom je nog overal tegen.</p>`,
        table: [['contracttaal', 'gewone taal', 'Nederlands'], ['The Buyer shall pay…', 'The Buyer must pay…', 'De koper betaalt / is verplicht…'], ['in the event that', 'if', 'indien'], ['notwithstanding the foregoing', 'despite what is said above', 'niettegenstaande het voorgaande'], ['subject to', 'depending on', 'onder voorbehoud van'], ['prior to', 'before', 'voorafgaand aan']],
        sum: 'shall = must. may = is allowed to. subject to = depending on.',
        ex: [["Either party may terminate this agreement with 30 days' written notice.", 'Elke partij kan deze overeenkomst opzeggen met een schriftelijke opzegtermijn van 30 dagen.'], ['The Company shall not be liable for indirect damages.', 'Het Bedrijf is niet aansprakelijk voor indirecte schade.']] },
      { t: 'Financieel Engels', es: 'Financial English',
        html: `<p>Een paar woorden die Nederlanders vaak verwarren:</p>
<p><b>revenue / sales</b> = omzet (niet <s>turnover</s>: in de VS betekent <i>turnover</i> vooral personeelsverloop!). <b>profit</b> = winst. <b>margin</b> = marge. <b>the bottom line</b> = nettowinst, en figuurlijk «waar het uiteindelijk om draait».</p>
<p><b>Trends beschrijven</b>: <i>Revenue <b>rose by</b> 10% <b>to</b> $5 million.</i> (by = verschil, to = eindstand). <i>Costs <b>fell sharply</b>.</i> <i>Profits <b>peaked</b> in Q3.</i> <i>Sales <b>leveled off</b>.</i></p>
<p><b>Getallen</b>: <i>$5.2 million</i> (punt als decimaalteken, komma bij duizendtallen: <i>1,500</i>). <s>5,2 million</s> is in het Engels fout. En: <i>a <b>billion</b></i> = een miljard!</p>`,
        table: [['Nederlands', 'Amerikaans Engels'], ['omzet', 'revenue / sales'], ['personeelsverloop', 'turnover'], ['een miljard', 'a billion'], ['€ 2,5 miljoen', '€2.5 million'], ['steeg met 5% tot', 'rose by 5% to']],
        ex: [['Revenue rose by 12% to $8.4 million.', 'De omzet steeg met 12% tot 8,4 miljoen dollar.'], ["The bottom line is that we can't afford it.", 'Waar het uiteindelijk op neerkomt, is dat we het niet kunnen betalen.']] },
      { t: 'Onderhandelen', es: 'Negotiating',
        html: `<p>Bij onderhandelen gebruik je <b>voorwaardelijke en afgezwakte vormen</b>, zodat voorstellen flexibel klinken:</p>
<p><b>Voorstellen</b>: <i>We <b>could</b> offer…</i>, <i>What <b>if</b> we…?</i>, <i><b>Would</b> you <b>be willing to</b>…?</i></p>
<p><b>Voorwaardelijke concessie</b>: <i><b>If</b> you <b>can</b> commit to two years, we <b>can</b> lower the price.</i> <i>We'd be prepared to…, <b>provided that</b>…</i></p>
<p><b>Grenzen aangeven</b>: <i>I'm afraid that's <b>non-negotiable</b>.</i> <i>That would be <b>a deal-breaker</b> for us.</i> <i>That's <b>as far as we can go</b>.</i></p>
<p><b>Afronden</b>: <i>Let's <b>meet halfway</b>.</i> <i>I think we have <b>a deal</b>.</i> <i>I'll need to <b>run it by</b> my manager.</i></p>
<p>Nederlandse directheid («Nee, dat is te duur») kan hier averechts werken. Zeg liever: <i>That's a bit more than we had in mind.</i></p>`,
        table: [['te direct', 'diplomatiek'], ["No, that's too expensive.", "That's a bit higher than we had in mind."], ['We want a discount.', 'Would you be open to a discount?'], ["We won't do that.", "I'm afraid that's not something we can do."], ['Fine, deal.', 'I think we can work with that.']],
        ex: [["If you can commit to a two-year contract, we could lower the price by 5%.", 'Als jullie je voor twee jaar vastleggen, kunnen we de prijs met 5% verlagen.'], ["I'll need to run it by my manager first.", 'Ik moet het eerst even voorleggen aan mijn manager.']] }
    ],
    dialogue: {
      t: 'The supplier negotiation', place: 'New York 🇺🇸',
      lines: [
        ['Ms. Carter', "Thanks for coming in. We've reviewed your proposal. The price is a bit higher than we had in mind.", 'Bedankt voor uw komst. We hebben uw voorstel bekeken. De prijs is wat hoger dan we in gedachten hadden.'],
        ['Daan', "I understand. What figure did you have in mind?", 'Ik begrijp het. Aan welk bedrag dacht u?'],
        ['Ms. Carter', "Something closer to $1.8 million for the first year.", 'Iets dichter bij 1,8 miljoen dollar voor het eerste jaar.'],
        ['Daan', "That would be difficult. But if you could commit to three years, we could come down to $1.9 million.", 'Dat zou lastig zijn. Maar als u zich voor drie jaar kunt vastleggen, kunnen we naar 1,9 miljoen.'],
        ['Ms. Carter', "Three years is possible, provided that there's a termination clause in case of a breach.", 'Drie jaar is mogelijk, mits er een opzeggingsclausule is voor het geval van contractbreuk.'],
        ['Daan', "That's standard. We'd also need payment within 30 days. That's non-negotiable for us.", 'Dat is standaard. We hebben ook betaling binnen 30 dagen nodig. Dat is voor ons niet onderhandelbaar.'],
        ['Ms. Carter', "Thirty days works. So, $1.85 million, three years, thirty-day payment terms? Let's meet halfway.", 'Dertig dagen is goed. Dus: 1,85 miljoen, drie jaar, betaaltermijn dertig dagen? Laten we elkaar tegemoetkomen.'],
        ['Daan', "I think we can work with that. I'll need to run it by our CFO, but I expect she'll sign off on it.", 'Ik denk dat we daarmee uit de voeten kunnen. Ik moet het nog even voorleggen aan onze CFO, maar ik verwacht dat ze akkoord gaat.']
      ],
      q: [
        { t: 'mc', q: 'What does Daan offer if the contract is for three years?', o: ['$1.9 million', '$1.8 million', '$2 million'] },
        { t: 'mc', q: 'What is non-negotiable for Daan?', o: ['Payment within 30 days', 'The three-year term', 'The termination clause'] },
        { t: 'mc', q: 'What is the final price they agree on?', o: ['$1.85 million', '$1.9 million', '$1.8 million'] }
      ]
    },
    culture: { t: 'Advocaten en kleine lettertjes', html: `<p>De VS heeft per inwoner veel meer advocaten dan Nederland, en Amerikaanse contracten zijn vaak veel <b>langer en gedetailleerder</b>. Waar een Nederlands contract op vertrouwen en de wet leunt, probeert een Amerikaans contract elke mogelijke situatie vast te leggen.</p>
<p>Woorden als <i>indemnify</i>, <i>hold harmless</i> en <i>limitation of liability</i> zijn daarom belangrijk: lees ze altijd goed, eventueel met een jurist.</p>
<p>💵 Let op: in de VS staan bedragen met het dollarteken vóór het getal en zonder spatie: <i>$1,500.00</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'The Supplier ___ deliver the goods within 30 days.', a: ['shall'], o: ['shall', 'will maybe', 'should perhaps'], nl: 'De leverancier levert de goederen binnen 30 dagen.', tag: 'enx-register' },
      { t: 'cloze', s: 'The Company shall not be ___ for indirect damages.', a: ['liable'], o: ['liable', 'reliable', 'likely'], nl: 'Het Bedrijf is niet aansprakelijk voor indirecte schade.', tag: 'enx-register' },
      { t: 'cloze', s: 'Revenue rose ___ 8% to $3.2 million.', a: ['by'], o: ['by', 'with', 'to'], nl: 'De omzet steeg met 8% tot 3,2 miljoen dollar.', tag: 'enx-register' },
      { t: 'cloze', s: 'We can lower the price, ___ that you sign for two years.', a: ['provided'], o: ['provided', 'providing of', 'given of'], nl: 'We kunnen de prijs verlagen, mits u voor twee jaar tekent.', tag: 'enx-register' },
      { t: 'cloze', s: "I'm afraid that's ___; we can't change the delivery date.", a: ['non-negotiable'], o: ['non-negotiable', 'unnegotiable', 'not negotiating'], nl: 'Helaas is dat niet onderhandelbaar; we kunnen de leverdatum niet wijzigen.', tag: 'enx-register' },
      { t: 'cloze', s: "Let's meet ___ and split the difference.", a: ['halfway'], o: ['halfway', 'in the middle', 'half'], nl: 'Laten we elkaar tegemoetkomen en het verschil delen.', tag: 'enx-register' },
      { t: 'mc', q: '«Omzet» in Amerikaans zakelijk Engels:', o: ['revenue', 'turnover', 'overturn'], x: 'Turnover betekent in de VS vooral personeelsverloop.', tag: 'enx-register' },
      { t: 'mc', q: 'Hoe schrijf je «€ 4,5 miljoen» in het Engels?', o: ['€4.5 million', '€4,5 million', '€ 4.5 milion'], tag: 'enx-register' },
      { t: 'mc', q: 'Wat betekent «shall» in een contract?', o: ['is verplicht', 'zal misschien', 'mag'], tag: 'enx-register' },
      { t: 'mc', q: 'Welke reactie is het meest diplomatiek?', o: ["That's a bit higher than we had in mind.", "No, that's too expensive.", "That price is crazy."], tag: 'enx-register' },
      { t: 'mc', q: '«A billion» is…', o: ['een miljard', 'een biljoen', 'een miljoen'], tag: 'enx-dunglish' },
      { t: 'tr', nl: 'Ik moet het eerst voorleggen aan mijn manager.', a: ['I need to run it by my manager first.', "I'll need to run it by my manager first.", 'I have to run it by my manager first.'], tag: 'enx-register' },
      { t: 'tr', nl: 'Dat zou voor ons een breekpunt zijn.', a: ['That would be a deal-breaker for us.', "That'd be a deal-breaker for us."], tag: 'enx-register' },
      { t: 'order', s: 'Either party may terminate this agreement with written notice.', nl: 'Elke partij kan deze overeenkomst schriftelijk opzeggen.', tag: 'enx-register' },
      { t: 'match', p: [['cash flow', 'kasstroom'], ['overhead', 'vaste kosten'], ['to break even', 'quitte spelen'], ['a counteroffer', 'een tegenbod'], ['due diligence', 'boekenonderzoek'], ['hereby', 'hierbij']], tag: 'enx-register' }
    ],
    reading: {
      t: 'Quarterly results', type: 'Persbericht',
      p: [
        ["NEW YORK — Brightline Foods today reported revenue of $412 million for the third quarter, up 9% from the same period last year, driven by strong sales of its plant-based product line.", 'NEW YORK — Brightline Foods maakte vandaag een omzet bekend van 412 miljoen dollar over het derde kwartaal, 9% hoger dan in dezelfde periode vorig jaar, gedreven door sterke verkopen van de plantaardige productlijn.'],
        ["Net profit, however, fell to $18 million, as the company recorded a one-time write-off of $25 million related to the closure of a factory in Ohio.", 'De nettowinst daalde echter tot 18 miljoen dollar, doordat het bedrijf een eenmalige afschrijving van 25 miljoen dollar boekte in verband met de sluiting van een fabriek in Ohio.'],
        ["«Excluding the write-off, our margins actually improved,» said CEO Laura Kim. «The bottom line is that demand remains strong and our cash flow is healthy.»", '«Exclusief de afschrijving zijn onze marges zelfs verbeterd,» zei CEO Laura Kim. «Waar het om gaat, is dat de vraag sterk blijft en onze kasstroom gezond is.»'],
        ["The company expects full-year revenue of approximately $1.6 billion, subject to market conditions.", 'Het bedrijf verwacht een jaaromzet van ongeveer 1,6 miljard dollar, onder voorbehoud van de marktomstandigheden.']
      ],
      gl: [['driven by', 'gedreven door'], ['one-time', 'eenmalig'], ['excluding', 'exclusief']],
      q: [
        { t: 'mc', q: 'Why did net profit fall?', o: ['Because of a one-time write-off', 'Because revenue dropped', 'Because of new taxes'] },
        { t: 'mc', q: 'What drove revenue growth?', o: ['Plant-based products', 'A new factory in Ohio', 'Lower prices'] },
        { t: 'mc', q: 'What does the company expect for the full year?', o: ['About $1.6 billion in revenue', 'A loss', '$412 million in revenue'] }
      ]
    },
    say: [["That's a bit higher than we had in mind.", 'Dat is wat hoger dan we in gedachten hadden.'], ["Let's meet halfway.", 'Laten we elkaar tegemoetkomen.'], ['Revenue rose by ten percent.', 'De omzet steeg met tien procent.'], ["I'll need to run it by my manager.", 'Ik moet het voorleggen aan mijn manager.']],
    task: { nl: 'Schrijf een korte e-mail (5–6 zinnen) aan een Amerikaanse leverancier waarin je reageert op een te hoge offerte. Doe een tegenbod met een voorwaarde (if… / provided that…), noem één punt dat niet onderhandelbaar is, en sluit diplomatiek af.', model: "Dear Ms. Carter, thank you for your proposal. The price is a bit higher than we had in mind. If you could lower it to $1.8 million, we would be prepared to commit to a three-year contract. Payment within 45 days is, I'm afraid, non-negotiable for us. I'm confident we can meet halfway on the rest. Best regards, Daan" },
    scenario: { nl: 'Je onderhandelt met een Amerikaanse inkoper over een contract.', role: 'You are Ms. Carter, a sharp but fair procurement director at a New York company. Negotiate a supply contract with the learner (price, contract length, payment terms, delivery). Make counteroffers, use conditional language and occasional legal terms (provided that, liable, terminate). Reward diplomatic phrasing; react a bit coolly to overly blunt statements.', goal: 'Sluit een goede deal met diplomatieke, professionele taal.' }
  });

  /* ───────────────────────── C2 · 10 ───────────────────────── */
  U({
    id: 'en-c2-10', level: 'C2', icon: '🎭', title: 'Time flies like an arrow; fruit flies like a banana', nl: 'Humor, woordspel en culturele verwijzingen',
    goals: ['Woordspel en dubbelzinnigheid begrijpen: puns, homofonen', 'Culturele verwijzingen herkennen: films, literatuur, geschiedenis', 'Amerikaanse regionale variatie: Southern, New York, California'],
    vocab: [
      ['a pun', 'een woordgrap'], ['a punchline', 'de clou'], ['a dad joke', 'een flauwe grap'], ['a groan', 'een kreun (reactie op flauwe grap)'], ['a homophone', 'een homofoon (zelfde klank)'],
      ['ambiguous', 'dubbelzinnig'], ['a reference', 'een verwijzing'], ['to allude to', 'zinspelen op'], ['a catchphrase', 'een slogan / gevleugelde uitspraak'], ['a Catch-22', 'een onmogelijke situatie'],
      ['a Cinderella story', 'een assepoesterverhaal'], ['a Pandora’s box', 'een doos van Pandora'], ['the Midas touch', 'alles wat je aanraakt wordt goud'], ['a Trojan horse', 'een paard van Troje'], ['an Achilles’ heel', 'een achilleshiel'],
      ['y’all', 'jullie (zuidelijk)'], ['fixin’ to', 'op het punt staan (zuidelijk)'], ['bless your heart', 'ach gossie (vaak spottend)'], ['wicked', 'heel (Boston: wicked good)'], ['a hoagie / sub / hero', 'een lang belegd broodje'],
      ['soda / pop', 'frisdrank (regionaal)'], ['to roast someone', 'iemand liefdevol afkraken'], ['a running gag', 'een terugkerende grap']
    ],
    grammar: [
      { t: 'Woordspel: puns en dubbelzinnigheid', es: 'Puns & wordplay',
        html: `<p>Engels is ideaal voor <b>woordgrappen</b> (<i>puns</i>), omdat veel woorden meerdere betekenissen of dezelfde klank hebben:</p>
<p><b>Twee betekenissen</b>: <i>I used to be a banker, but I lost <b>interest</b>.</i> (rente / interesse) <i>The bicycle couldn't stand up by itself: it was <b>two tired</b>.</i> (two-tired / too tired)</p>
<p><b>Dubbelzinnige zinsbouw</b>: <i>Time flies like an arrow; fruit flies like a banana.</i> (fruit flies = fruitvliegjes, like = houden van)</p>
<p>De gepaste reactie op een flauwe woordgrap (<i>a dad joke</i>) is een <b>groan</b> («ugh!») of een oogrol. Dat hoort bij het plezier.</p>`,
        table: [['grap', 'woordspel'], ['I lost interest.', 'interest = rente / interesse'], ['It was two tired.', 'two tired / too tired'], ['A boiled egg is hard to beat.', 'beat = verslaan / kloppen'], ["I'm reading a book on anti-gravity. I can't put it down.", "can't put it down = niet wegleggen / zweeft"]],
        sum: 'I used to be a banker, but I lost interest.',
        ex: [["I'm on a seafood diet. I see food and I eat it.", 'Ik zit op een zeevoedseldieet. Ik zie eten en eet het op. (seafood / see food)'], ["Why don't skeletons fight each other? They don't have the guts.", 'Waarom vechten skeletten niet? Ze hebben het lef niet. (guts = ingewanden / lef)']] },
      { t: 'Culturele en klassieke verwijzingen', es: 'Cultural references',
        html: `<p>Veel uitdrukkingen verwijzen naar boeken, mythen of geschiedenis. Een paar die je in kranten en vergaderingen hoort:</p>
<p><b>Literatuur</b>: <i>a <b>Catch-22</b></i> (onmogelijke situatie, uit de roman van Joseph Heller), <i><b>Big Brother</b></i> (Orwell), <i>a <b>Scrooge</b></i> (een vrek, Dickens), <i>a <b>Jekyll and Hyde</b></i> (iemand met twee gezichten).</p>
<p><b>Mythologie</b>: <i>an <b>Achilles' heel</b>, a <b>Trojan horse</b>, the <b>Midas touch</b>, to open <b>Pandora's box</b></i>.</p>
<p><b>Amerikaanse popcultuur</b>: <i>«Houston, we have a problem»</i>, <i>«Show me the money!»</i>, <i>«May the Force be with you»</i>, <i>a <b>Hail Mary</b></i> (een wanhopige laatste poging, uit American football).</p>`,
        table: [['verwijzing', 'betekenis'], ["It's a Catch-22.", 'Een onmogelijke situatie.'], ['He has the Midas touch.', 'Alles wat hij doet, wordt een succes.'], ["Don't be such a Scrooge.", 'Wees niet zo gierig.'], ['a Hail Mary pass', 'een laatste wanhoopspoging'], ['Houston, we have a problem.', 'We hebben een probleem (grappig).']],
        ex: [["It's a Catch-22: you need experience to get a job, and a job to get experience.", 'Het is een onmogelijke situatie: je hebt ervaring nodig voor een baan, en een baan voor ervaring.'], ['Public speaking is my Achilles’ heel.', 'Spreken in het openbaar is mijn achilleshiel.']] },
      { t: 'Regionaal Amerikaans Engels', es: 'Regional American English',
        html: `<p>De VS is groot, en het Engels varieert per regio:</p>
<p><b>Het Zuiden</b> (Texas, Georgia…): <i><b>y'all</b></i> (jullie), <i>I'm <b>fixin' to</b> leave</i> (ik ga zo weg), <i><b>might could</b></i> (zou misschien kunnen). <i><b>Bless your heart</b></i> klinkt lief, maar is vaak een verkapte belediging («arme jij, je snapt het niet»).</p>
<p><b>New England</b> (Boston): <i><b>wicked</b></i> = heel (<i>wicked smart</i>). <b>New York</b>: <i>to stand <b>on line</b></i> (in de rij staan), een lang broodje heet <i>a <b>hero</b></i>. <b>Philadelphia</b>: <i>a <b>hoagie</b></i>. Elders: <i>a <b>sub</b></i>.</p>
<p><b>Frisdrank</b>: <i>soda</i> (oosten, Californië), <i>pop</i> (Midwesten), <i>coke</i> (Zuiden, voor álle frisdrank!).</p>
<p>Je hoeft deze vormen niet zelf te gebruiken, maar herkennen helpt enorm.</p>`,
        table: [['regio', 'uitdrukking', 'betekenis'], ['Zuiden', "y'all", 'jullie'], ['Zuiden', "I'm fixin' to go.", 'Ik ga zo.'], ['Boston', 'wicked good', 'heel goed'], ['Midwesten', 'pop', 'frisdrank'], ['New York', 'stand on line', 'in de rij staan']],
        ex: [["Y'all want some sweet tea?", 'Willen jullie wat zoete ijsthee?'], ["That pizza was wicked good.", 'Die pizza was echt heel goed.']] }
    ],
    dialogue: {
      t: 'Road trip through the South', place: 'Nashville, Tennessee 🇺🇸',
      lines: [
        ['Waitress', "Hey y'all! Can I get you some sweet tea?", 'Hé allemaal! Mag ik jullie wat zoete ijsthee brengen?'],
        ['Emma', "Yes, please. Two. And what's a «hush puppy»? Is it… a dog?", 'Ja, graag. Twee. En wat is een «hush puppy»? Is het… een hond?'],
        ['Waitress', "Oh, bless your heart. No, honey, it's fried cornbread. Wicked good, as my cousin from Boston would say.", 'Ach, gossie. Nee schat, het is gefrituurd maïsbrood. Wicked good, zoals mijn neef uit Boston zou zeggen.'],
        ['Noah', "Was «bless your heart» an insult?", 'Was «bless your heart» een belediging?'],
        ['Waitress', "Only a little bit, sugar. I'm fixin' to bring your food in a minute.", 'Maar een heel klein beetje, liefje. Ik breng zo jullie eten.'],
        ['Emma', "I feel like we need a dictionary for every state.", 'Ik heb het gevoel dat we voor elke staat een woordenboek nodig hebben.'],
        ['Noah', "It's a Catch-22. You can't understand the menu without asking, and you can't ask without sounding like a tourist.", 'Het is een onmogelijke situatie. Je snapt de kaart niet zonder te vragen, en je kunt niet vragen zonder als toerist te klinken.'],
        ['Emma', "Well, we are tourists. And these hush puppies are hard to beat.", 'Nou, we zíjn toeristen. En deze hush puppies zijn moeilijk te overtreffen.'],
        ['Noah', "Was that a pun? Because it was terrible.", 'Was dat een woordgrap? Want hij was verschrikkelijk.']
      ],
      q: [
        { t: 'mc', q: 'What is a hush puppy?', o: ['Fried cornbread', 'A small dog', 'A type of tea'] },
        { t: 'mc', q: 'What does «I’m fixin’ to bring your food» mean?', o: ['I’m about to bring your food', 'I’m repairing your food', 'I’m not bringing your food'] },
        { t: 'mc', q: 'What does Noah think of Emma’s pun?', o: ['It was terrible', 'It was brilliant', 'He didn’t notice it'] }
      ]
    },
    culture: { t: 'Roasts, stand-up en late-night tv', html: `<p>Humor is in de VS een groot deel van het openbare leven. Presidenten maken grappen tijdens het jaarlijkse <b>White House Correspondents' Dinner</b>, en <b>late-night</b>-presentatoren becommentariëren elke avond het nieuws.</p>
<p>Een <b>roast</b> is een avond waarop vrienden iemand liefdevol maar keihard afkraken. Het is een eer om <i>geroast</i> te worden.</p>
<p>😄 <b>Dad jokes</b> zijn zo flauw dat ze weer leuk worden. Een Nederlands equivalent: de typische «vadergrap» op verjaardagen. Je herkent ze aan de kreun (<i>groan</i>) van de luisteraar.</p>
<p>🎓 Gefeliciteerd: met deze unit heb je het hoogste niveau van de cursus afgerond. <i>Mission accomplished.</i></p>` },
    ex: [
      { t: 'cloze', s: 'I used to be a banker, but I lost ___.', a: ['interest'], o: ['interest', 'money', 'balance'], nl: 'Ik was vroeger bankier, maar ik verloor mijn interesse / de rente.', tag: 'enx-culture' },
      { t: 'cloze', s: "You need experience to get a job, but a job to get experience. It's a ___.", a: ['Catch-22'], o: ['Catch-22', 'Hail Mary', 'Trojan horse'], nl: 'Je hebt ervaring nodig voor een baan, maar een baan voor ervaring. Het is een onmogelijke situatie.', tag: 'enx-culture' },
      { t: 'cloze', s: 'Everything she invests in makes money. She has the ___ touch.', a: ['Midas'], o: ['Midas', 'golden', 'magic'], nl: 'Alles waarin ze investeert, levert geld op. Alles wat ze aanraakt, wordt goud.', tag: 'enx-culture' },
      { t: 'cloze', s: 'Math has always been my Achilles’ ___.', a: ['heel'], o: ['heel', 'foot', 'heal'], nl: 'Wiskunde is altijd mijn achilleshiel geweest.', tag: 'enx-culture' },
      { t: 'cloze', s: "Hey ___! Come on in and sit down.", a: ["y'all"], o: ["y'all", 'you all of', 'yous'], nl: 'Hé allemaal! Kom binnen en ga zitten.', tag: 'enx-culture' },
      { t: 'cloze', s: "The free app was a Trojan ___: it collected all your data.", a: ['horse'], o: ['horse', 'house', 'gift'], nl: 'De gratis app was een paard van Troje: hij verzamelde al je gegevens.', tag: 'enx-culture' },
      { t: 'mc', q: 'Een vrouw uit Georgia zegt «Well, bless your heart» nadat je iets doms zei. Ze bedoelt waarschijnlijk…', o: ['Arme jij, je snapt het niet.', 'Wat ben je slim!', 'God zegene je.'], tag: 'enx-culture' },
      { t: 'mc', q: '«I’m fixin’ to leave» betekent…', o: ['Ik ga zo weg.', 'Ik repareer de deur.', 'Ik ben net weg.'], tag: 'enx-culture' },
      { t: 'mc', q: 'Wat is een «Hail Mary» in zakelijke context?', o: ['Een wanhopige laatste poging', 'Een gebed voor de vergadering', 'Een zeker succes'], tag: 'enx-culture' },
      { t: 'mc', q: 'Waarom is «Time flies like an arrow; fruit flies like a banana» grappig?', o: ['«flies» en «like» betekenen iets anders in de tweede helft', 'Fruit kan niet vliegen', 'Het rijmt'], tag: 'enx-culture' },
      { t: 'mc', q: 'Wat is de gebruikelijke reactie op een dad joke?', o: ['een kreun of oogrol', 'applaus', 'stilte en een boze blik'], tag: 'enx-culture' },
      { t: 'tr', nl: 'Wees niet zo gierig! (gebruik Scrooge)', a: ["Don't be such a Scrooge!", "Don't be a Scrooge!", 'Do not be such a Scrooge!'], tag: 'enx-culture' },
      { t: 'tr', nl: 'Dat was echt heel goed. (Boston)', a: ['That was wicked good.', 'It was wicked good.'], tag: 'enx-culture' },
      { t: 'order', s: "Opening that topic would be opening Pandora's box.", nl: 'Over dat onderwerp beginnen zou de doos van Pandora openen zijn.', tag: 'enx-culture' },
      { t: 'match', p: [['a pun', 'een woordgrap'], ['a punchline', 'de clou'], ['ambiguous', 'dubbelzinnig'], ['to allude to', 'zinspelen op'], ['a running gag', 'een terugkerende grap'], ['to roast someone', 'iemand liefdevol afkraken']], tag: 'enx-culture' }
    ],
    reading: {
      t: 'The last 1 percent', type: 'Afsluitend essay',
      p: [
        ["You can master the grammar of a language in a few years. You can learn ten thousand words. But understanding why people laugh is something else entirely.", 'De grammatica van een taal beheers je in een paar jaar. Je kunt tienduizend woorden leren. Maar begrijpen waarom mensen lachen, is iets heel anders.'],
        ["Humor depends on shared knowledge: the TV shows people grew up with, the books they read in school, the way people talk three states away. It is the last 1 percent of fluency, and the hardest.", 'Humor hangt af van gedeelde kennis: de tv-series waarmee mensen opgroeiden, de boeken die ze op school lazen, hoe mensen drie staten verderop praten. Het is de laatste 1 procent van vloeiendheid, en de moeilijkste.'],
        ["The good news is that it can't be studied the way grammar can. It has to be lived. Watch the shows. Read the novels. Laugh at the jokes you don't get, then ask someone to explain them.", 'Het goede nieuws is dat je dit niet kunt studeren zoals grammatica. Je moet het beleven. Kijk de series. Lees de romans. Lach om de grappen die je niet snapt, en vraag dan iemand ze uit te leggen.'],
        ["One day you'll make a pun in English without planning it, and someone will groan. That's when you'll know you've arrived.", 'Op een dag maak je in het Engels een woordgrap zonder het te plannen, en kreunt iemand. Dan weet je dat je er bent.']
      ],
      gl: [['entirely', 'helemaal'], ['shared knowledge', 'gedeelde kennis'], ['to arrive', 'aankomen / er zijn']],
      q: [
        { t: 'mc', q: 'What does humor depend on, according to the essay?', o: ['Shared knowledge', 'Grammar', 'Pronunciation'] },
        { t: 'mc', q: 'How should you learn humor?', o: ['By living it: watching, reading, asking', 'By studying a textbook', 'By memorizing jokes'] },
        { t: 'mc', q: 'How will you know you’ve «arrived»?', o: ['Someone groans at your unplanned pun', 'You pass an exam', 'You stop making mistakes'] }
      ]
    },
    say: [["It's a Catch-22.", 'Het is een onmogelijke situatie.'], ['He has the Midas touch.', 'Alles wat hij aanraakt, wordt goud.'], ["I used to be a banker, but I lost interest.", 'Ik was bankier, maar ik verloor mijn interesse.'], ["Y'all want some sweet tea?", 'Willen jullie zoete ijsthee?']],
    task: { nl: 'Schrijf een korte speech (5–6 zinnen) voor het afscheid van een collega. Gebruik minstens één woordgrap, twee culturele verwijzingen (Catch-22, Midas touch, Achilles’ heel, Scrooge…) en sluit warm af.', model: "Ten years ago, Sarah joined us as an intern. Since then, she's had the Midas touch: every project she touched turned to gold. Her only Achilles' heel was the coffee machine, which she never once managed to fix. We tried to give her a raise, but she said she'd lost interest. (Sorry, that was a banker joke.) Sarah, we'll miss you, and we wish you all the luck in the world." },
    scenario: { nl: 'Je maakt een roadtrip door het Amerikaanse Zuiden en praat met een lokale bewoner.', role: 'You are Darlene, a warm, witty waitress in a diner in Nashville, Tennessee, with a strong Southern way of talking (y’all, fixin’ to, honey, bless your heart). Chat with the learner, who is a tourist: recommend food and places, make the occasional pun or dad joke, and use cultural references. If the learner misses a joke or a Southern expression, explain it with humor.', goal: 'Begrijp regionale uitdrukkingen en humor, en grap zelf mee.' }
  });
})(window.SPT);
