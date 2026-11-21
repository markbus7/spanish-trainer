/* Engels voor Nederlandstaligen — niveau B2, units 1–5 (Amerikaans Engels, uitleg in het Nederlands).
   Velden zoals in de Spaanse cursus: in vocab/zinnen is [0] de doeltaal (Engels) en [1] de uitlegtaal (Nederlands).
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzes, eerste = juist), tr (NL→EN), order, match. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'enb-mixcond': 'mixed conditionals', 'enb-wish': 'wish / if only / regret', 'enb-pastmodal': 'must have / can’t have / should have',
    'enb-passive': 'passief (ook it is said / he is believed to)', 'enb-causative': 'have / get something done', 'enb-falsefriend': 'valse vrienden (Dunglish)',
    'enb-perfect': 'present perfect vs. past simple', 'enb-makedo': 'make / do / take / have', 'enb-phrasal': 'phrasal verbs', 'enb-gerinf': 'gerund of to-infinitive',
    'enb-pattern': 'werkwoordpatronen (want sb to, make/let)', 'enb-report': 'indirecte rede en reporting verbs', 'enb-relative': 'betrekkelijke bijzinnen en komma’s',
    'enb-future': 'future perfect / continuous', 'enb-linking': 'verbindingswoorden (although, despite, however)', 'enb-register': 'register: formeel en informeel',
    'enb-colloc': 'collocaties', 'enb-idiom': 'idioom', 'enb-ukus': 'Brits vs. Amerikaans'
  });

  /* ───────────────────────── B2 · 1 ───────────────────────── */
  U({
    id: 'en-b2-01', level: 'B2', icon: '🔀', title: 'If only I had known', nl: 'Spijt, wensen en mixed conditionals',
    goals: ['Spijt uitdrukken met wish en if only', 'Verleden en heden combineren in mixed conditionals', 'Natuurlijk reageren: I should have…, no use crying over…'],
    vocab: [
      ['regret', 'spijt (hebben van)'], ['in hindsight', 'achteraf gezien'], ['to make up your mind', 'een besluit nemen'], ['to turn down an offer', 'een aanbod afslaan'],
      ['a missed opportunity', 'een gemiste kans'], ['to have second thoughts', 'twijfels krijgen'], ['to look back on', 'terugkijken op'], ['a turning point', 'een keerpunt'],
      ['to take the plunge', 'de sprong wagen'], ['to play it safe', 'het zekere voor het onzekere nemen'], ['on the spur of the moment', 'in een opwelling'], ['to settle down', 'zich settelen'],
      ['to make a fresh start', 'opnieuw beginnen'], ['to dwell on something', 'ergens over blijven piekeren'], ['a gut feeling', 'een onderbuikgevoel'], ['to weigh up the options', 'de opties afwegen'],
      ['what if…?', 'stel dat…?'], ['to be torn between', 'twijfelen tussen'], ['to come to terms with', 'leren leven met'], ['to have no regrets', 'nergens spijt van hebben'],
      ['the road not taken', 'de weg die je niet koos'], ['to jump at the chance', 'de kans met beide handen aangrijpen'], ['looking back', 'terugkijkend'], ['a blessing in disguise', 'een geluk bij een ongeluk']
    ],
    grammar: [
      { t: 'Wish en if only: spijt en wensen', es: 'Wish & if only',
        html: `<p>Met <b>wish</b> en <b>if only</b> zeg je dat je iets anders zou willen. De tijd schuift één stap <b>terug</b>:</p>
<p>Over <b>nu</b>: wish + past simple: <i>I wish I <b>had</b> more time.</i> (Ik wou dat ik meer tijd had.) Bij to be mag in netjes Engels <b>were</b>: <i>I wish I <b>were</b> taller.</i></p>
<p>Over het <b>verleden</b>: wish + past perfect: <i>I wish I <b>had taken</b> that job.</i> Nederlanders zeggen vaak <s>I wish I took that job</s>, maar dat gaat over nu, niet over toen.</p>
<p>Over <b>ergernis</b> (iemand anders moet veranderen): wish + would: <i>I wish you <b>would</b> stop interrupting.</i> Niet over jezelf: <s>I wish I would…</s></p>`,
        table: [['wens over', 'vorm', 'voorbeeld'], ['nu', 'wish + past simple', 'I wish I lived closer.'], ['verleden', 'wish + past perfect', 'I wish I had listened.'], ['ergernis', 'wish + would', 'I wish it would stop raining.']],
        sum: 'I wish I had more time. I wish I had listened. I wish you would stop.',
        ex: [['If only I had known!', 'Had ik het maar geweten!'], ['I wish I were on a beach right now.', 'Ik wou dat ik nu op een strand lag.'], ['I wish he would call me back.', 'Ik wou dat hij me eens terugbelde.']] },
      { t: 'Mixed conditionals: toen en nu door elkaar', es: 'Mixed conditionals',
        html: `<p>Soms heeft iets uit het <b>verleden</b> gevolgen voor <b>nu</b>. Dan combineer je de derde en de tweede conditional:</p>
<p><i>If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.</i> (verleden → nu)</p>
<p>Het kan ook andersom: een <b>blijvende</b> eigenschap die het verleden verklaart: <i>If I <b>weren't</b> so shy, I <b>would have asked</b> her out.</i> (nu/altijd → verleden)</p>
<p>Let op: in de if-zin komt <b>nooit would</b>. <s>If I would have known</s> hoor je wel, maar het geldt als fout. Nederlanders vertalen «als ik had geweten» graag met would; zeg <b>If I had known</b>.</p>`,
        table: [['type', 'if-zin', 'hoofdzin'], ['verleden → nu', 'if + past perfect', 'would + infinitief'], ['nu → verleden', 'if + past simple', 'would have + voltooid deelwoord']],
        sum: 'If I had taken the job, I would be in New York now.',
        ex: [['If she had saved more, she wouldn’t be broke now.', 'Als ze meer had gespaard, zat ze nu niet blut.'], ['If he were more careful, he wouldn’t have crashed the car.', 'Als hij voorzichtiger was, had hij de auto niet in de prak gereden.']] },
      { t: 'Should have, could have, would have', es: 'Past regrets',
        html: `<p>Kritiek en spijt over het verleden geef je met <b>should have</b> + voltooid deelwoord: <i>I <b>should have</b> left earlier.</i> (Ik had eerder moeten vertrekken.)</p>
<p><b>Could have</b> = het was mogelijk, maar het gebeurde niet: <i>You <b>could have</b> told me!</i> <b>Would have</b> = wat er gebeurd zou zijn: <i>I <b>would have</b> helped.</i></p>
<p>In spreektaal klinkt dit als <i>shoulda, coulda, woulda</i>. Schrijf het nooit als <s>should of</s>: dat is een bekende fout van moedertaalsprekers.</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['should have done', 'had moeten', 'You should have called.'], ['could have done', 'had gekund', 'We could have won.'], ['would have done', 'zou hebben', 'I would have come.']],
        sum: 'I should have called. You could have told me. I would have helped.',
        ex: [['We should have booked a table.', 'We hadden een tafel moeten reserveren.'], ['You could have warned me!', 'Je had me kunnen waarschuwen!']] }
    ],
    dialogue: {
      t: 'Coffee and regrets', place: 'Portland 🇺🇸',
      lines: [
        ['Megan', 'You look miles away. What’s up?', 'Je bent met je gedachten mijlenver weg. Wat is er?'],
        ['Daan', 'I just heard that the startup I turned down got bought for a fortune.', 'Ik hoorde net dat de startup die ik heb afgewezen voor een fortuin is overgenomen.'],
        ['Megan', 'Ouch. If you had joined them, you’d be a millionaire now.', 'Au. Als je bij ze was gegaan, was je nu miljonair.'],
        ['Daan', 'Exactly. I wish I hadn’t played it so safe.', 'Precies. Ik wou dat ik het niet zo op zeker had gespeeld.'],
        ['Megan', 'Come on, you couldn’t have known. Nobody saw that coming.', 'Kom op, dat kon je niet weten. Niemand zag dat aankomen.'],
        ['Daan', 'True. And if I weren’t so cautious, I’d probably have lost everything on some other idea.', 'Klopt. En als ik niet zo voorzichtig was, was ik waarschijnlijk alles kwijtgeraakt aan een ander idee.'],
        ['Megan', 'See? Maybe it was a blessing in disguise. You met Lisa at your current job, remember?', 'Zie je? Misschien was het een geluk bij een ongeluk. Je hebt Lisa leren kennen op je huidige werk, weet je nog?'],
        ['Daan', 'Fair point. If I had taken that job, I would never have met her.', 'Terecht punt. Als ik die baan had genomen, had ik haar nooit ontmoet.'],
        ['Megan', 'So stop dwelling on it. No regrets!', 'Dus blijf er niet over piekeren. Geen spijt!']
      ],
      q: [
        { t: 'mc', q: 'What did Daan do years ago?', o: ['He turned down a job at a startup', 'He started his own company', 'He lost all his money'] },
        { t: 'mc', q: 'Why does Megan call it a blessing in disguise?', o: ['Because he met Lisa at his current job', 'Because the startup failed', 'Because he became a millionaire'] },
        { t: 'mc', q: 'Which sentence is a mixed conditional?', o: ['If you had joined them, you’d be a millionaire now.', 'You couldn’t have known.', 'So stop dwelling on it.'] }
      ]
    },
    culture: { t: 'Spijt in het Engels: luchtig houden', html: `<p>Amerikanen praten vaak positief over tegenslag: <i>Everything happens for a reason</i>, <i>It was a learning experience</i>, <i>No regrets!</i> Te zwaar doorgaan over spijt klinkt al snel als <i>dwelling on it</i>.</p>
<p>Britten relativeren liever met humor en understatement: <i>Well, that could have gone better.</i> betekent vaak: dat ging behoorlijk mis.</p>
<p>🇬🇧/🇺🇸 Een klein verschil: Britten zeggen vaker <i>I wish I'd…</i>, Amerikanen ook, maar in de VS hoor je in spreektaal steeds vaker <i>I wish I would have…</i>. Dat geldt (nog) als fout in examens en zakelijk schrijven.</p>` },
    ex: [
      { t: 'cloze', s: 'I wish I ___ more time to travel. (nu)', a: ['had'], o: ['had', 'have', 'would have'], nl: 'Ik wou dat ik meer tijd had om te reizen.', tag: 'enb-wish' },
      { t: 'cloze', s: 'I wish I ___ to her before she left. (verleden)', a: ['had talked'], o: ['had talked', 'talked', 'would talk'], nl: 'Ik wou dat ik met haar had gepraat voordat ze vertrok.', tag: 'enb-wish' },
      { t: 'cloze', s: 'I wish you ___ leaving your socks on the floor!', a: ['would stop'], o: ['would stop', 'stopped', 'had stopped'], nl: 'Ik wou dat je eens ophield met je sokken op de grond laten liggen!', x: 'wish + would gebruik je voor ergernis over iemand anders.', tag: 'enb-wish' },
      { t: 'cloze', s: 'If I ___ known about the traffic, I would have left earlier.', a: ['had'], o: ['had', 'would have', 'have'], nl: 'Als ik van de file had geweten, was ik eerder vertrokken.', x: 'Nooit would in de if-zin: If I had known.', tag: 'enb-mixcond' },
      { t: 'cloze', s: 'If she had taken the job in Boston, she ___ there now.', a: ['would be living'], o: ['would be living', 'would have lived', 'will live'], nl: 'Als ze die baan in Boston had genomen, woonde ze daar nu.', tag: 'enb-mixcond' },
      { t: 'cloze', s: "If I weren't afraid of heights, I ___ the climb with you yesterday.", a: ['would have done'], o: ['would have done', 'would do', 'had done'], nl: 'Als ik geen hoogtevrees had, had ik gisteren met je mee geklommen.', tag: 'enb-mixcond' },
      { t: 'cloze', s: 'You ___ told me! I would have helped.', a: ['could have'], o: ['could have', 'could', 'can have'], nl: 'Je had het me kunnen vertellen! Ik had geholpen.', tag: 'enb-pastmodal' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['If I had known, I would have come.', 'If I would have known, I would have come.', 'If I knew, I would have came.'], x: 'In de if-zin staat geen would.', tag: 'enb-mixcond' },
      { t: 'mc', q: 'Hoe schrijf je «shoulda» netjes?', o: ['should have', 'should of', 'should had'], tag: 'enb-pastmodal' },
      { t: 'mc', q: '«Achteraf gezien» is…', o: ['in hindsight', 'in afterthought', 'afterwards seen'], tag: 'enb-idiom' },
      { t: 'mc', q: 'Iemand zegt: «I took the plunge.» Wat bedoelt hij?', o: ['Hij heeft de sprong gewaagd.', 'Hij is in het water gevallen.', 'Hij heeft een fout gemaakt.'], tag: 'enb-idiom' },
      { t: 'tr', nl: 'Had ik het maar geweten!', a: ['If only I had known!', "If only I'd known!", 'If only I had known.'], tag: 'enb-wish' },
      { t: 'tr', nl: 'Ik wou dat ik hier niet woonde.', a: ["I wish I didn't live here.", 'I wish I did not live here.'], tag: 'enb-wish' },
      { t: 'tr', nl: 'We hadden eerder moeten vertrekken.', a: ['We should have left earlier.', "We should've left earlier."], tag: 'enb-pastmodal' },
      { t: 'order', s: 'If I had saved more, I would be retired now.', nl: 'Als ik meer had gespaard, was ik nu met pensioen.', tag: 'enb-mixcond' },
      { t: 'match', p: [['in hindsight', 'achteraf gezien'], ['to take the plunge', 'de sprong wagen'], ['to play it safe', 'op zeker spelen'], ['a gut feeling', 'een onderbuikgevoel'], ['to dwell on', 'blijven piekeren over']], tag: 'enb-idiom' }
    ],
    reading: {
      t: 'The job I almost took', type: 'Blogpost',
      p: [
        ["Ten years ago I was offered a job in Singapore. I was twenty-six, single and, in hindsight, exactly the kind of person who should have jumped at the chance.", 'Tien jaar geleden kreeg ik een baan in Singapore aangeboden. Ik was zesentwintig, single en, achteraf gezien, precies het soort persoon dat de kans met beide handen had moeten aangrijpen.'],
        ["Instead, I played it safe. I had a gut feeling that something was wrong, and I turned the offer down. For years I wondered what my life would be like now if I had said yes.", 'In plaats daarvan speelde ik op zeker. Ik had een onderbuikgevoel dat er iets niet klopte, en ik sloeg het aanbod af. Jarenlang vroeg ik me af hoe mijn leven er nu uit zou zien als ik ja had gezegd.'],
        ["Then, last spring, the company went bankrupt. Several people I knew there lost everything. If I had gone, I would probably be starting from scratch right now.", 'Vorig voorjaar ging het bedrijf toen failliet. Een paar mensen die ik daar kende, verloren alles. Als ik was gegaan, begon ik nu waarschijnlijk weer bij nul.'],
        ["I’m not saying I made the right choice for the right reasons. But I’ve stopped dwelling on the road not taken. Some regrets are just stories we tell ourselves.", 'Ik zeg niet dat ik de juiste keuze om de juiste redenen maakte. Maar ik ben gestopt met piekeren over de weg die ik niet nam. Sommige spijt is gewoon een verhaal dat we onszelf vertellen.']
      ],
      gl: [['to start from scratch', 'helemaal opnieuw beginnen'], ['to go bankrupt', 'failliet gaan'], ['instead', 'in plaats daarvan']],
      q: [
        { t: 'mc', q: 'Why did the writer turn down the job?', o: ['He had a gut feeling something was wrong', 'He was married', 'The salary was too low'] },
        { t: 'mc', q: 'What happened to the company?', o: ['It went bankrupt', 'It moved to Europe', 'It hired him later'] },
        { t: 'mc', q: 'How does the writer feel now?', o: ['He has stopped dwelling on it', 'He regrets it every day', 'He wants to move to Singapore'] }
      ]
    },
    say: [['If only I had known!', 'Had ik het maar geweten!'], ['I wish I had taken that job.', 'Ik wou dat ik die baan had genomen.'], ['If I had studied harder, I would be a doctor now.', 'Als ik harder had gestudeerd, was ik nu dokter.'], ['You could have told me!', 'Je had het me kunnen vertellen!']],
    task: { nl: 'Schrijf 4–5 zinnen over een keuze uit je verleden: wat had je anders kunnen doen, en hoe zou je leven er nu uitzien? Gebruik minstens één wish, één should have en één mixed conditional.', model: "I wish I had learned to play an instrument as a child. My parents offered me piano lessons, but I turned them down. If I had said yes, I would probably play really well now. I should have listened to them. Then again, I have no regrets about the time I spent playing soccer." },
    scenario: { nl: 'Je praat met Megan, een Amerikaanse collega, over keuzes in je leven.', role: 'You are Megan, a warm, curious American coworker in Portland. Ask the learner about big decisions in their life, what they would have done differently and how their life would be different now. React naturally and share one regret of your own.', goal: 'Vertel over een belangrijke keuze en wat er anders was geweest als je anders had gekozen.' }
  });

  /* ───────────────────────── B2 · 2 ───────────────────────── */
  U({
    id: 'en-b2-02', level: 'B2', icon: '🕵️', title: 'It must have been him', nl: 'Speculeren over het verleden',
    goals: ['Conclusies trekken over het verleden: must have, can’t have, might have', 'Zeggen wat niet nodig was: needn’t have vs. didn’t need to', 'Zeker en onzeker klinken: I bet, chances are, there’s no way'],
    vocab: [
      ['a clue', 'een aanwijzing'], ['evidence', 'bewijs'], ['a suspect', 'een verdachte'], ['an alibi', 'een alibi'], ['to jump to conclusions', 'overhaaste conclusies trekken'],
      ['to rule out', 'uitsluiten'], ['to figure out', 'uitvogelen'], ['to break in', 'inbreken'], ['a witness', 'een getuige'], ['to vanish', 'spoorloos verdwijnen'],
      ['presumably', 'vermoedelijk'], ['apparently', 'blijkbaar'], ['chances are…', 'de kans is groot dat…'], ['I bet…', 'ik wed dat…'], ['there’s no way', 'het kan onmogelijk'],
      ['to put two and two together', 'twee en twee bij elkaar optellen'], ['far-fetched', 'vergezocht'], ['plausible', 'aannemelijk'], ['a hunch', 'een vermoeden'], ['to give someone the benefit of the doubt', 'iemand het voordeel van de twijfel geven'],
      ['to cover up', 'in de doofpot stoppen'], ['a mix-up', 'een verwarring / misverstand'], ['to mislay', 'kwijtraken (ergens laten liggen)'], ['to turn up', 'opduiken']
    ],
    grammar: [
      { t: 'Must have, can’t have, might have', es: 'Modals of deduction (past)',
        html: `<p>Een conclusie over het <b>verleden</b> maak je met modal + <b>have</b> + voltooid deelwoord.</p>
<p><b>must have</b> = ik weet het bijna zeker: <i>The lights are off. They <b>must have gone</b> to bed.</i></p>
<p><b>can't have / couldn't have</b> = onmogelijk: <i>She <b>can't have seen</b> us. She was in Paris.</i> Let op: het tegendeel van must have is <b>niet</b> <s>mustn't have</s>, maar <b>can't have</b>.</p>
<p><b>might have / may have / could have</b> = misschien: <i>He <b>might have missed</b> the bus.</i></p>`,
        table: [['zekerheid', 'vorm', 'voorbeeld'], ['bijna zeker wel', 'must have done', 'She must have forgotten.'], ['misschien', 'might / may / could have done', 'He might have overslept.'], ['bijna zeker niet', "can't / couldn't have done", "They can't have known."]],
        sum: 'He must have left. She might have forgotten. They can’t have known.',
        ex: [["You must have been exhausted after that flight.", 'Je zult wel uitgeput zijn geweest na die vlucht.'], ["He can't have written this. He doesn't speak French.", 'Hij kan dit niet geschreven hebben. Hij spreekt geen Frans.']] },
      { t: 'Needn’t have vs. didn’t need to', es: 'Needn’t have done',
        html: `<p>Dit is een subtiel verschil dat zelfs gevorderde sprekers missen.</p>
<p><b>needn't have done</b> = je deed het, maar het was achteraf <b>niet nodig</b>: <i>I <b>needn't have brought</b> an umbrella. It didn't rain.</i> (ik had hem wél bij me)</p>
<p><b>didn't need to do</b> = het was niet nodig (en meestal deed je het dus ook niet): <i>I <b>didn't need to</b> bring an umbrella, so I left it at home.</i></p>
<p>🇺🇸 In Amerikaans Engels klinkt needn't wat Brits en formeel. Amerikanen zeggen vaker: <i>I <b>didn't have to</b> bring an umbrella after all.</i> of <i>Turns out I <b>didn't need</b> the umbrella.</i></p>`,
        table: [['vorm', 'heb je het gedaan?', 'voorbeeld'], ["needn't have done", 'ja (onnodig)', "You needn't have cooked!"], ["didn't need to do", 'meestal niet', "I didn't need to cook."]],
        ex: [["You needn't have waited for me.", 'Je had niet op me hoeven wachten.'], ["We didn't need to hurry, so we took the scenic route.", 'We hoefden ons niet te haasten, dus we namen de mooie route.']] },
      { t: 'Zeker of onzeker klinken in spreektaal', es: 'Sounding (un)certain',
        html: `<p>Native speakers gebruiken naast modals veel vaste uitdrukkingen:</p>
<p>Bijna zeker: <b>I bet</b> he forgot. <b>Chances are</b> she already knows. <b>There's no way</b> he did this alone.</p>
<p>Voorzichtig: <b>Presumably</b> they took a taxi. <b>Apparently</b> (= blijkbaar, horen zeggen) the meeting is canceled.</p>
<p>Valkuil: <b>apparently</b> betekent niet «duidelijk» (dat is <i>obviously / clearly</i>). Nederlanders verwarren het met <i>blijkbaar = duidelijk</i>.</p>`,
        table: [['uitdrukking', 'betekenis'], ['I bet…', 'ik wed dat…'], ['chances are…', 'de kans is groot dat…'], ["there's no way…", 'het kan onmogelijk…'], ['apparently', 'blijkbaar / naar het schijnt']],
        ex: [['Chances are the package got lost in the mail.', 'De kans is groot dat het pakketje in de post zoek is geraakt.'], ['Apparently, he quit last week.', 'Blijkbaar is hij vorige week gestopt.']] }
    ],
    dialogue: {
      t: 'The missing laptop', place: 'Austin 🇺🇸',
      lines: [
        ['Rachel', 'Has anyone seen my laptop? I left it on my desk last night.', 'Heeft iemand mijn laptop gezien? Ik heb hem gisteravond op mijn bureau laten liggen.'],
        ['Kevin', 'Are you sure? You might have taken it home without thinking.', 'Weet je het zeker? Misschien heb je hem zonder nadenken mee naar huis genomen.'],
        ['Rachel', "No way. I can't have taken it home. I took the bike, and my bag was empty.", 'Echt niet. Ik kan hem niet mee naar huis hebben genomen. Ik ging op de fiets en mijn tas was leeg.'],
        ['Kevin', 'Then someone must have moved it. The cleaners come at night, right?', 'Dan moet iemand hem verplaatst hebben. De schoonmakers komen toch ’s nachts?'],
        ['Rachel', "Maybe. But they wouldn't have touched a laptop. Let's not jump to conclusions.", 'Misschien. Maar die zouden geen laptop aanraken. Laten we geen overhaaste conclusies trekken.'],
        ['Kevin', 'Wait, IT was updating all the machines yesterday. I bet they took it.', 'Wacht, IT was gisteren alle computers aan het updaten. Ik wed dat zij hem hebben meegenomen.'],
        ['Rachel', "Oh! That's plausible. I needn't have panicked, then.", 'O! Dat is aannemelijk. Dan had ik niet in paniek hoeven raken.'],
        ['Kevin', "Well, don't thank me yet. Let's go and check.", 'Nou, bedank me nog maar niet. Laten we gaan kijken.']
      ],
      q: [
        { t: 'mc', q: 'Why can’t Rachel have taken the laptop home?', o: ['She went by bike and her bag was empty', 'She was not at work', 'She lent it to Kevin'] },
        { t: 'mc', q: 'Who probably took the laptop?', o: ['The IT department', 'The cleaners', 'Kevin'] },
        { t: 'mc', q: 'What does Rachel mean by «I needn’t have panicked»?', o: ['She panicked, but it wasn’t necessary', 'She didn’t panic', 'She should panic now'] }
      ]
    },
    culture: { t: 'True crime en «I bet»', html: `<p>True-crimepodcasts zijn in de VS enorm populair. Je hoort er precies deze taal: <i>He must have known…</i>, <i>There's no way she did it alone</i>, <i>Chances are the police covered it up.</i></p>
<p>Juridisch Engels is voorzichtig: een verdachte is <b>the suspect</b> of <b>the alleged killer</b>, nooit zomaar «de dader» zolang er geen veroordeling is.</p>
<p>🇬🇧 Britten gebruiken vaker <i>needn't have</i> en <i>I reckon</i> (ik denk); Amerikanen zeggen eerder <i>didn't have to</i> en <i>I figure</i> of <i>I guess</i>.</p>` },
    ex: [
      { t: 'cloze', s: "The ground is wet. It ___ rained last night.", a: ['must have'], o: ['must have', "can't have", 'must'], nl: 'De grond is nat. Het moet vannacht geregend hebben.', tag: 'enb-pastmodal' },
      { t: 'cloze', s: "She ___ seen me. I was hiding behind the door.", a: ["can't have"], o: ["can't have", "mustn't have", 'must have'], nl: 'Ze kan me niet gezien hebben. Ik verstopte me achter de deur.', x: 'Het tegendeel van must have is can’t have.', tag: 'enb-pastmodal' },
      { t: 'cloze', s: "He's late. He ___ missed the train, but I'm not sure.", a: ['might have'], o: ['might have', 'must have', "can't have"], nl: 'Hij is laat. Misschien heeft hij de trein gemist, maar ik weet het niet zeker.', tag: 'enb-pastmodal' },
      { t: 'cloze', s: "You ___ have bought flowers! But they're beautiful, thank you.", a: ["needn't"], o: ["needn't", "didn't need", "mustn't"], nl: 'Je had geen bloemen hoeven kopen! Maar ze zijn prachtig, dank je.', tag: 'enb-pastmodal' },
      { t: 'cloze', s: "I ___ to take a taxi because Tom drove me home.", a: ["didn't need"], o: ["didn't need", "needn't have", "mustn't"], nl: 'Ik hoefde geen taxi te nemen, want Tom bracht me naar huis.', tag: 'enb-pastmodal' },
      { t: 'cloze', s: '___ the package got lost. These things happen.', a: ['Chances are'], o: ['Chances are', 'Apparently is', 'I bet that is'], nl: 'De kans is groot dat het pakketje zoek is geraakt.', tag: 'enb-idiom' },
      { t: 'mc', q: 'Wat betekent «apparently»?', o: ['blijkbaar / naar het schijnt', 'duidelijk / overduidelijk', 'eigenlijk'], x: 'Overduidelijk = obviously of clearly.', tag: 'enb-falsefriend' },
      { t: 'mc', q: 'Welke zin betekent dat het onmogelijk was?', o: ["He couldn't have done it.", "He mustn't have done it.", "He needn't have done it."], tag: 'enb-pastmodal' },
      { t: 'mc', q: '«Overhaaste conclusies trekken» is…', o: ['to jump to conclusions', 'to run to conclusions', 'to make quick conclusions'], tag: 'enb-idiom' },
      { t: 'mc', q: 'Wat is het meest Amerikaans?', o: ["Turns out I didn't have to bring it.", "I needn't have brought it.", 'I need not to have brought it.'], tag: 'enb-ukus' },
      { t: 'tr', nl: 'Ze moet het vergeten zijn.', a: ['She must have forgotten.', "She must've forgotten.", 'She must have forgotten it.'], tag: 'enb-pastmodal' },
      { t: 'tr', nl: 'Hij kan het niet geweten hebben.', a: ["He can't have known.", "He couldn't have known.", 'He cannot have known.'], tag: 'enb-pastmodal' },
      { t: 'tr', nl: 'Je had niet op me hoeven wachten.', a: ["You needn't have waited for me.", "You didn't have to wait for me."], tag: 'enb-pastmodal' },
      { t: 'order', s: 'They must have left before we arrived.', nl: 'Ze moeten vertrokken zijn voordat wij aankwamen.', tag: 'enb-pastmodal' },
      { t: 'match', p: [['a clue', 'een aanwijzing'], ['a hunch', 'een vermoeden'], ['far-fetched', 'vergezocht'], ['to rule out', 'uitsluiten'], ['plausible', 'aannemelijk']], tag: 'enb-colloc' }
    ],
    reading: {
      t: 'The case of the vanishing cake', type: 'Kort verhaal',
      p: [
        ["When Mrs. Carter came back from the store, the chocolate cake on her kitchen table had vanished. Only a few crumbs and a dirty fork were left.", 'Toen mevrouw Carter terugkwam van de winkel, was de chocoladetaart op haar keukentafel verdwenen. Er waren alleen nog wat kruimels en een vieze vork over.'],
        ["Her son couldn't have eaten it: he was at soccer practice all afternoon, and three witnesses could confirm his alibi. The dog might have taken it, but dogs don't use forks.", 'Haar zoon kon hem niet opgegeten hebben: hij was de hele middag op voetbaltraining, en drie getuigen konden zijn alibi bevestigen. De hond zou hem gepakt kunnen hebben, maar honden gebruiken geen vorken.'],
        ["Then she noticed a clue: a trail of chocolate fingerprints leading to the garage, where her husband was 'fixing the car'. She put two and two together.", 'Toen zag ze een aanwijzing: een spoor van chocoladevingerafdrukken naar de garage, waar haar man «de auto aan het repareren» was. Ze telde twee en twee bij elkaar op.'],
        ["'You must have been very hungry,' she said. He looked up, chocolate all over his face. 'Apparently,' he said, 'the car needed a lot of energy.'", '«Je zult wel veel honger hebben gehad,» zei ze. Hij keek op, met chocola over zijn hele gezicht. «Blijkbaar,» zei hij, «had de auto veel energie nodig.»']
      ],
      gl: [['crumbs', 'kruimels'], ['a trail', 'een spoor'], ['to confirm', 'bevestigen']],
      q: [
        { t: 'mc', q: 'Why couldn’t the son have eaten the cake?', o: ['He was at soccer practice', 'He doesn’t like chocolate', 'He was asleep'] },
        { t: 'mc', q: 'Why was the dog ruled out?', o: ['Dogs don’t use forks', 'The dog was outside', 'The dog was sick'] },
        { t: 'mc', q: 'Who ate the cake?', o: ['Her husband', 'Her son', 'The neighbor'] }
      ]
    },
    say: [['It must have been him.', 'Hij moet het geweest zijn.'], ["She can't have known.", 'Ze kan het niet geweten hebben.'], ["You needn't have bothered.", 'Je had de moeite niet hoeven nemen.'], ["Let's not jump to conclusions.", 'Laten we geen overhaaste conclusies trekken.']],
    task: { nl: 'Je collega is vandaag niet op het werk en neemt de telefoon niet op. Speculeer in 4–5 zinnen wat er gebeurd kan zijn. Gebruik must have, might have, can’t have en een uitdrukking als chances are of I bet.', model: "Mark isn't answering his phone, which is strange. He might have overslept, but he can't have overslept until noon. Chances are he's sick, or his phone must have died. I bet he'll call us tomorrow with a funny story." },
    scenario: { nl: 'Je bent detective in een klein Amerikaans stadje en ondervraagt een getuige.', role: 'You are Mrs. Lopez, a nosy but kind neighbor in a small Texas town. A bike was stolen from the house next door last night. Answer the detective’s (the learner’s) questions, give some clues, and encourage them to speculate: "Who do you think could have done it?"', goal: 'Stel vragen en trek conclusies met must have, might have en can’t have.' }
  });

  /* ───────────────────────── B2 · 3 ───────────────────────── */
  U({
    id: 'en-b2-03', level: 'B2', icon: '🛠️', title: 'Getting things done', nl: 'Passief en laten doen',
    goals: ['Het passief in alle tijden gebruiken', 'Iets laten doen: have/get something done', 'Afstand nemen: it is said that…, he is believed to…'],
    vocab: [
      ['to renovate', 'verbouwen / renoveren'], ['a contractor', 'een aannemer'], ['a plumber', 'een loodgieter'], ['an electrician', 'een elektricien'], ['a quote', 'een offerte'],
      ['to get a quote', 'een offerte aanvragen'], ['to fix', 'repareren'], ['to install', 'installeren'], ['to be delayed', 'vertraging hebben'], ['a deadline', 'een deadline'],
      ['to be on schedule', 'op schema liggen'], ['to be behind schedule', 'achter liggen op schema'], ['to cut corners', 'de kantjes eraf lopen'], ['to outsource', 'uitbesteden'], ['a building permit', 'een bouwvergunning'],
      ['to tear down', 'afbreken / slopen'], ['to have your hair cut', 'je haar laten knippen'], ['allegedly', 'naar verluidt'], ['to be rumored to', 'volgens geruchten'], ['to be expected to', 'naar verwachting'],
      ['a DIY project', 'een klusproject'], ['handy', 'handig (met klussen)'], ['to call in a professional', 'een vakman inschakelen'], ['a bill', 'een rekening']
    ],
    grammar: [
      { t: 'Het passief: wie het doet is niet belangrijk', es: 'The passive',
        html: `<p>Het passief maak je met <b>to be</b> in de juiste tijd + voltooid deelwoord. Wie het doet, zeg je met <b>by</b> (of je laat het weg).</p>
<p>Nederlands gebruikt <i>worden</i> én <i>zijn</i>, Engels altijd <b>be</b>: <i>Het huis wordt geverfd</i> = <i>The house <b>is being painted</b></i>. <i>Het huis is geverfd</i> = <i>The house <b>has been painted</b></i>.</p>
<p>Valkuil: <s>The house is painted yesterday</s>. Een afgeronde handeling in het verleden is <b>was painted</b>.</p>`,
        table: [['tijd', 'passief', 'Nederlands'], ['present simple', 'is built', 'wordt gebouwd'], ['present continuous', 'is being built', 'wordt (nu) gebouwd'], ['past simple', 'was built', 'werd gebouwd'], ['present perfect', 'has been built', 'is gebouwd'], ['future', 'will be built', 'zal gebouwd worden'], ['modal', 'must be built', 'moet gebouwd worden']],
        sum: 'The bridge was built in 1932. The road is being repaired.',
        ex: [['Our kitchen is being renovated.', 'Onze keuken wordt verbouwd.'], ['The meeting has been canceled.', 'De vergadering is afgezegd.']] },
      { t: 'Have / get something done: iets laten doen', es: 'Causative have / get',
        html: `<p>Doe je het niet zelf, maar laat je het doen? Gebruik <b>have</b> of <b>get</b> + object + voltooid deelwoord.</p>
<p><i>I'm <b>having my car fixed</b>.</i> (Ik laat mijn auto maken.) <i>She <b>got her hair cut</b>.</i> (Ze heeft haar haar laten knippen.)</p>
<p>Nederlanders zeggen vaak <s>I cut my hair</s>, maar dat betekent dat je het zelf deed! Ook ongelukken gaan zo: <i>He <b>had his phone stolen</b>.</i> (Zijn telefoon is gestolen.)</p>
<p>Iemand iets laten doen: <b>have someone do</b> (zonder to) of <b>get someone to do</b>: <i>I'll <b>have</b> my assistant <b>call</b> you. I <b>got</b> my brother <b>to help</b> me.</i></p>`,
        table: [['vorm', 'voorbeeld', 'Nederlands'], ['have + ding + -ed', 'I had the roof repaired.', 'Ik heb het dak laten repareren.'], ['get + ding + -ed', 'Get your eyes tested!', 'Laat je ogen testen!'], ['have + persoon + infinitief', 'I had him check it.', 'Ik liet hem het controleren.'], ['get + persoon + to', 'I got her to sign it.', 'Ik kreeg haar zover dat ze tekende.']],
        sum: "I'm having my car fixed. She got her hair cut.",
        ex: [['We had solar panels installed last year.', 'We hebben vorig jaar zonnepanelen laten plaatsen.'], ['I need to get my passport renewed.', 'Ik moet mijn paspoort laten verlengen.']] },
      { t: 'It is said that… / He is said to…', es: 'Impersonal passive',
        html: `<p>In nieuws en formeel Engels neem je afstand met een onpersoonlijk passief: <i>It <b>is said</b> that the CEO will resign.</i></p>
<p>Korter en eleganter: begin met de persoon + <b>to</b>-infinitief: <i>The CEO <b>is said to be</b> resigning.</i> Over het verleden: <b>to have</b> + voltooid deelwoord: <i>He <b>is believed to have left</b> the country.</i></p>
<p>Zo werken ook <b>is thought to</b>, <b>is expected to</b>, <b>is reported to</b>, <b>is rumored to</b> (🇬🇧 <i>rumoured</i>). Het Nederlandse <i>zou</i> («hij zou rijk zijn») vertaal je zo: <i>He <b>is said to be</b> rich.</i></p>`,
        table: [['Nederlands', 'Engels'], ['Hij zou rijk zijn.', 'He is said to be rich.'], ['Ze zou het land verlaten hebben.', 'She is believed to have left the country.'], ['De prijzen zullen naar verwachting stijgen.', 'Prices are expected to rise.']],
        ex: [['The painting is thought to be worth millions.', 'Het schilderij zou miljoenen waard zijn.'], ['The suspect is reported to have fled.', 'De verdachte zou gevlucht zijn.']] }
    ],
    dialogue: {
      t: 'The never-ending renovation', place: 'Denver 🇺🇸',
      lines: [
        ['Josh', 'So, how’s the kitchen coming along?', 'En, hoe gaat het met de keuken?'],
        ['Sanne', "Don't ask. It was supposed to be finished last week, but we're way behind schedule.", 'Vraag maar niet. Hij had vorige week klaar moeten zijn, maar we lopen ver achter op schema.'],
        ['Josh', 'Are you doing it yourselves?', 'Doen jullie het zelf?'],
        ['Sanne', "No way. We're having everything done by a contractor. The cabinets are being installed right now.", 'Echt niet. We laten alles doen door een aannemer. De kastjes worden nu geplaatst.'],
        ['Josh', "At least you're not cutting corners. My neighbor did his own wiring and had to have it all redone.", 'Je loopt in elk geval de kantjes er niet af. Mijn buurman deed zijn eigen bedrading en moest alles opnieuw laten doen.'],
        ['Sanne', 'Ha! The plumber is said to be the best in town, but he’s impossible to reach.', 'Ha! De loodgieter zou de beste van de stad zijn, maar hij is onbereikbaar.'],
        ['Josh', 'Get your contractor to call him. They usually know each other.', 'Laat je aannemer hem bellen. Ze kennen elkaar meestal.'],
        ['Sanne', "Good idea. I just hope the bill doesn't double.", 'Goed idee. Ik hoop alleen dat de rekening niet verdubbelt.']
      ],
      q: [
        { t: 'mc', q: 'Who is doing the renovation?', o: ['A contractor', 'Sanne herself', 'Josh'] },
        { t: 'mc', q: 'What is happening right now?', o: ['The cabinets are being installed', 'The plumber is fixing the sink', 'They are getting a quote'] },
        { t: 'mc', q: 'What happened to Josh’s neighbor?', o: ['He had to have his wiring redone', 'He became an electrician', 'He sold his house'] }
      ]
    },
    culture: { t: 'Doe-het-zelf en «handyman»', html: `<p>In de VS is <b>DIY</b> (do-it-yourself) groot: bouwmarkten als Home Depot zijn een uitje. Iemand die alles kan repareren is <b>handy</b>; een klusjesman heet <b>a handyman</b>.</p>
<p>Let op: <b>handy</b> betekent ook «praktisch, binnen bereik» (<i>Keep a flashlight handy</i>). Een mobieltje heet in het Engels <b>nooit</b> <s>handy</s>, maar <i>cell phone</i> (🇺🇸) of <i>mobile</i> (🇬🇧).</p>
<p>Offertes, vergunningen en het eeuwige wachten op de aannemer: in het Engels klaagt men net zo hard. <i>It always takes twice as long and costs twice as much.</i></p>` },
    ex: [
      { t: 'cloze', s: 'The museum ___ in 1885.', a: ['was built'], o: ['was built', 'is built', 'has built'], nl: 'Het museum werd in 1885 gebouwd.', tag: 'enb-passive' },
      { t: 'cloze', s: 'Sorry for the noise, the road ___ repaired.', a: ['is being'], o: ['is being', 'is been', 'has being'], nl: 'Sorry voor het lawaai, de weg wordt gerepareerd.', tag: 'enb-passive' },
      { t: 'cloze', s: 'The flight ___ canceled. We have to rebook.', a: ['has been'], o: ['has been', 'is being', 'was been'], nl: 'De vlucht is geannuleerd. We moeten omboeken.', tag: 'enb-passive' },
      { t: 'cloze', s: "I'm having my teeth ___ tomorrow.", a: ['cleaned'], o: ['cleaned', 'clean', 'to clean'], nl: 'Ik laat morgen mijn tanden schoonmaken.', tag: 'enb-causative' },
      { t: 'cloze', s: 'She had her bike ___ outside the station.', a: ['stolen'], o: ['stolen', 'stole', 'steal'], nl: 'Haar fiets is gestolen bij het station.', tag: 'enb-causative' },
      { t: 'cloze', s: 'I got my neighbor ___ the plants while I was away.', a: ['to water'], o: ['to water', 'water', 'watered'], nl: 'Ik heb mijn buurvrouw de planten water laten geven toen ik weg was.', tag: 'enb-causative' },
      { t: 'cloze', s: 'The CEO is said ___ resigned.', a: ['to have'], o: ['to have', 'that he has', 'having'], nl: 'De CEO zou ontslag genomen hebben.', tag: 'enb-passive' },
      { t: 'mc', q: 'Je bent net bij de kapper geweest. Wat zeg je?', o: ['I had my hair cut.', 'I cut my hair.', 'I let cut my hair.'], x: 'I cut my hair = je deed het zelf.', tag: 'enb-causative' },
      { t: 'mc', q: '«Hij zou rijk zijn» (naar men zegt) is…', o: ['He is said to be rich.', 'He would be rich.', 'He should be rich.'], tag: 'enb-passive' },
      { t: 'mc', q: 'Wat is «de kantjes eraf lopen»?', o: ['to cut corners', 'to cut edges', 'to run the corners'], tag: 'enb-idiom' },
      { t: 'mc', q: 'Hoe heet een mobiele telefoon in Amerikaans Engels?', o: ['a cell phone', 'a handy', 'a mobile'], x: 'Mobile is Brits; handy is geen Engels voor telefoon.', tag: 'enb-falsefriend' },
      { t: 'tr', nl: 'Ons huis wordt geschilderd.', a: ['Our house is being painted.'], tag: 'enb-passive' },
      { t: 'tr', nl: 'Ik moet mijn auto laten repareren.', a: ['I need to have my car repaired.', 'I need to get my car repaired.', 'I need to have my car fixed.', 'I need to get my car fixed.', 'I have to have my car repaired.', 'I have to get my car fixed.'], tag: 'enb-causative' },
      { t: 'tr', nl: 'De prijzen zullen naar verwachting stijgen.', a: ['Prices are expected to rise.', 'Prices are expected to go up.'], tag: 'enb-passive' },
      { t: 'order', s: 'We had a new kitchen installed last year.', nl: 'We hebben vorig jaar een nieuwe keuken laten plaatsen.', tag: 'enb-causative' },
      { t: 'match', p: [['a quote', 'een offerte'], ['a contractor', 'een aannemer'], ['a plumber', 'een loodgieter'], ['to tear down', 'slopen'], ['a building permit', 'een bouwvergunning']], tag: 'enb-colloc' }
    ],
    reading: {
      t: 'Tiny houses, big dreams', type: 'Nieuwsartikel',
      p: [
        ["Tiny houses are said to be the answer to the housing crisis. Across the United States, thousands of these small homes have been built in the last ten years.", 'Tiny houses zouden het antwoord op de woningcrisis zijn. In de hele Verenigde Staten zijn er de afgelopen tien jaar duizenden van deze kleine huisjes gebouwd.'],
        ["Most owners don't build them themselves. They have them made in a factory and delivered on a truck. The average tiny house is thought to cost less than a third of a regular home.", 'De meeste eigenaren bouwen ze niet zelf. Ze laten ze in een fabriek maken en met een vrachtwagen afleveren. Een gemiddeld tiny house zou minder dan een derde van een gewoon huis kosten.'],
        ["However, the dream is often delayed by rules. In many cities, a building permit is required, and some owners have even had their homes removed by local authorities.", 'De droom wordt echter vaak vertraagd door regels. In veel steden is een bouwvergunning verplicht, en sommige eigenaren hebben hun huis zelfs door de gemeente laten weghalen (moeten zien weghalen).'],
        ["Experts expect the rules to be relaxed. Several states are reported to be changing their laws, and more tiny-house villages are expected to be opened next year.", 'Experts verwachten dat de regels versoepeld worden. Meerdere staten zouden hun wetten aan het aanpassen zijn, en volgend jaar worden er naar verwachting meer tiny-housedorpen geopend.']
      ],
      gl: [['the housing crisis', 'de woningcrisis'], ['local authorities', 'de lokale overheid'], ['to relax rules', 'regels versoepelen']],
      q: [
        { t: 'mc', q: 'How are most tiny houses made?', o: ['In a factory', 'By the owners themselves', 'By local authorities'] },
        { t: 'mc', q: 'What often delays the dream?', o: ['Rules and permits', 'The price of wood', 'Bad weather'] },
        { t: 'mc', q: 'What is expected next year?', o: ['More tiny-house villages', 'Higher prices', 'A ban on tiny houses'] }
      ]
    },
    say: [["We're having our kitchen redone.", 'We laten onze keuken opnieuw doen.'], ['I need to get my eyes tested.', 'Ik moet mijn ogen laten testen.'], ['He is said to be the best in town.', 'Hij zou de beste van de stad zijn.'], ["We're way behind schedule.", 'We lopen ver achter op schema.']],
    task: { nl: 'Beschrijf in 4–5 zinnen wat je de laatste tijd hebt laten doen (kapper, fiets, huis, auto…) en wat er in jouw stad wordt gebouwd of verbouwd. Gebruik have/get something done en minstens twee passieve zinnen.', model: "Last month I had my bike repaired because the brakes were broken. I also got my hair cut, finally. In my town, a new train station is being built, and the old library has been turned into apartments. The project is expected to be finished next year." },
    scenario: { nl: 'Je belt een Amerikaanse aannemer omdat je een badkamer wilt laten verbouwen.', role: 'You are Bob, a busy but friendly contractor in Denver. The learner wants their bathroom renovated. Ask what they want done, give a rough quote, explain what will be done when, and mention possible delays. Use the passive and "have/get something done" naturally.', goal: 'Leg uit wat je wilt laten doen, vraag naar de prijs en de planning.' }
  });

  /* ───────────────────────── B2 · 4 ───────────────────────── */
  U({
    id: 'en-b2-04', level: 'B2', icon: '⚠️', title: 'Dunglish detox', nl: 'Valse vrienden en typisch Nederlandse fouten',
    goals: ['De bekendste valse vrienden herkennen', 'Since en for, present perfect en past simple goed gebruiken', 'Fouten als «I want that you…» en «make a photo» vermijden'],
    vocab: [
      ['eventually', 'uiteindelijk (niet: eventueel)'], ['possibly', 'eventueel / mogelijk'], ['actually', 'eigenlijk / echt waar (niet: actueel)'], ['current', 'actueel / huidig'], ['sensible', 'verstandig (niet: sensibel)'],
      ['sensitive', 'gevoelig / sensibel'], ['to control', 'beheersen / sturen (niet: controleren)'], ['to check', 'controleren'], ['a chef', 'een kok (niet: chef)'], ['a boss / a manager', 'een chef / baas'],
      ['to become', 'worden (niet: bekomen)'], ['to get', 'krijgen'], ['a competitor', 'een concurrent'], ['concurrent', 'gelijktijdig'], ['an argument', 'een ruzie of redenering'],
      ['sympathetic', 'meelevend (niet: sympathiek)'], ['nice / likeable', 'sympathiek / aardig'], ['to undertake', 'ondernemen (een taak op je nemen)'], ['to do something fun', 'iets ondernemen'], ['a brand', 'een merk (niet: brand)'],
      ['a fire', 'een brand'], ['to lend', 'uitlenen'], ['to borrow', 'lenen (van iemand)'], ['to learn / to teach', 'leren (zelf) / leren (aan een ander)']
    ],
    grammar: [
      { t: 'Valse vrienden: woorden die je verraden', es: 'False friends',
        html: `<p>Sommige woorden lijken op Nederlands, maar betekenen iets anders. Ze klinken native speakers direct «Dutch» in de oren.</p>
<p><b>eventually</b> = uiteindelijk. Eventueel is <i>possibly</i> of <i>if necessary</i>: <i>We could <b>possibly</b> meet on Friday.</i></p>
<p><b>actually</b> = eigenlijk/echt waar. Actueel is <i>current</i> of <i>topical</i>.</p>
<p><b>sensible</b> = verstandig. Sensibel is <i>sensitive</i>. <b>sympathetic</b> = meelevend. Sympathiek is <i>nice</i> of <i>likeable</i>.</p>
<p><b>to control</b> = sturen, beheersen. Controleren is <i>to check</i>: <i>Can you <b>check</b> my text?</i> (niet <s>control my text</s>).</p>`,
        table: [['Nederlands', 'goed Engels', 'vals'], ['eventueel', 'possibly / if necessary', 'eventually (= uiteindelijk)'], ['actueel', 'current / topical', 'actual (= echt, werkelijk)'], ['controleren', 'to check', 'to control (= beheersen)'], ['sympathiek', 'nice / likeable', 'sympathetic (= meelevend)'], ['de chef', 'the boss / manager', 'the chef (= de kok)'], ['bekomen', 'to recover / to get', 'to become (= worden)']],
        sum: 'Eventually means uiteindelijk. Actually means eigenlijk. Check, don’t control.',
        ex: [['We eventually found the hotel.', 'Uiteindelijk vonden we het hotel.'], ['Could you check the numbers?', 'Kun je de cijfers controleren?'], ['She was very sympathetic when my dad was ill.', 'Ze was erg meelevend toen mijn vader ziek was.']] },
      { t: 'Since, for en de present perfect', es: 'Present perfect with since / for',
        html: `<p>De bekendste Nederlandse fout: <s>I live here since 2015</s>. In het Nederlands gebruik je de tegenwoordige tijd («ik woon hier sinds 2015»), maar in het Engels moet het de <b>present perfect</b> zijn: <i>I <b>have lived</b> here <b>since</b> 2015.</i></p>
<p><b>since</b> + beginpunt (2015, Monday, I was a child). <b>for</b> + tijdsduur (ten years, two weeks). Bij een bezigheid vaak de continuous: <i>I've <b>been working</b> here for six years.</i></p>
<p>Omgekeerd: met een afgerond tijdstip (<i>yesterday, in 2019, last week, ago</i>) gebruik je de <b>past simple</b>, ook al zegt het Nederlands «ik heb»: <i>I <b>saw</b> him yesterday</i>, niet <s>I have seen him yesterday</s>.</p>`,
        table: [['Nederlands', 'Engels'], ['Ik woon hier al tien jaar.', "I've lived here for ten years."], ['Ik ken haar sinds 2010.', "I've known her since 2010."], ['Ik heb hem gisteren gezien.', 'I saw him yesterday.'], ['Hoe lang werk je hier al?', 'How long have you been working here?']],
        sum: "I've lived here since 2015. I saw him yesterday.",
        ex: [["I've been learning English since I was eight.", 'Ik leer al Engels sinds mijn achtste.'], ['We met in 2012.', 'We hebben elkaar in 2012 leren kennen.']] },
      { t: 'Dunglish in zinsbouw', es: 'Common Dutch mistakes',
        html: `<p><b>Willen dat</b>: Engels gebruikt geen that-zin na want. <i>I <b>want you to</b> come.</i> niet <s>I want that you come</s>.</p>
<p><b>Foto maken</b>: <i><b>take</b> a picture</i>, niet <s>make a picture</s>. En je staat <b>in</b> de foto: <i>Who's that <b>in</b> the photo?</i></p>
<p><b>Leren</b>: zelf = <i>learn</i>, aan een ander = <i>teach</i>: <i>My dad <b>taught</b> me to swim</i>, niet <s>learned me</s>.</p>
<p><b>Lenen</b>: van iemand = <i>borrow</i>, aan iemand = <i>lend</i>: <i>Can I <b>borrow</b> your pen? Can you <b>lend</b> me your pen?</i></p>
<p><b>Mensen</b>: <i><b>most</b> people</i>, niet <s>the most people</s>. En <i>information, advice, news, furniture</i> hebben geen meervoud: <s>informations</s>, <s>advices</s>.</p>`,
        table: [['Dunglish', 'goed Engels'], ['I want that you help me.', 'I want you to help me.'], ['Can I make a photo?', 'Can I take a picture?'], ['She learned me French.', 'She taught me French.'], ['Can you borrow me €10?', 'Can you lend me $10?'], ['The most people agree.', 'Most people agree.']],
        ex: [['I want you to be honest with me.', 'Ik wil dat je eerlijk tegen me bent.'], ['Could you give me some advice?', 'Kun je me wat advies geven?']] }
    ],
    dialogue: {
      t: 'A very Dutch email', place: 'Chicago 🇺🇸',
      lines: [
        ['Lotte', 'Hey Chris, could you control my email before I send it to the client?', 'Hé Chris, kun je mijn mail controleren voordat ik hem naar de klant stuur?'],
        ['Chris', "Sure. Although I think you mean check it. Control sounds like you're going to take over my brain.", 'Tuurlijk. Al bedoel je volgens mij check. Control klinkt alsof je mijn brein gaat overnemen.'],
        ['Lotte', 'Oops. Okay, so here: «We can eventually meet next week.»', 'Oeps. Oké, dus hier: «We kunnen eventueel volgende week afspreken.»'],
        ['Chris', "Ah, eventually means in the end. You'd say «We could possibly meet next week» or «if necessary».", 'Ah, eventually betekent uiteindelijk. Je zou zeggen «We could possibly meet next week» of «if necessary».'],
        ['Lotte', 'Good to know! And «I work here since three years»?', 'Goed om te weten! En «I work here since three years»?'],
        ['Chris', "That's a classic. It's «I've been working here for three years». Since is for a starting point.", 'Dat is een klassieker. Het is «I’ve been working here for three years». Since is voor een beginpunt.'],
        ['Lotte', 'This is so useful. My old boss never told me. He was very sympathetic, though.', 'Dit is zo handig. Mijn oude baas heeft het me nooit verteld. Hij was wel heel sympathiek.'],
        ['Chris', "You mean nice? Sympathetic means he felt sorry for you!", 'Je bedoelt nice? Sympathetic betekent dat hij medelijden met je had!'],
        ['Lotte', "Well, actually, maybe he did.", 'Nou, eigenlijk had hij dat misschien ook wel.']
      ],
      q: [
        { t: 'mc', q: 'What should Lotte say instead of «control my email»?', o: ['Check my email', 'Correct my brain', 'Take over my email'] },
        { t: 'mc', q: 'What is the right version of «I work here since three years»?', o: ["I've been working here for three years.", 'I work here for three years.', 'I worked here since three years.'] },
        { t: 'mc', q: 'What does «sympathetic» mean?', o: ['Meelevend', 'Sympathiek', 'Gevoelig'] }
      ]
    },
    culture: { t: 'Dunglish: van Van Kooten en De Bie tot Louis van Gaal', html: `<p><b>Dunglish</b> (of <i>Steenkolenengels</i>) is het Engels waarin je het Nederlands nog hoort. Klassiekers: <i>I always get my sin</i> (ik krijg altijd mijn zin), <i>That is another cook</i> (dat is andere koek) en Louis van Gaals <i>That's another cook</i>.</p>
<p>Nederlanders spreken over het algemeen uitstekend Engels, maar juist daardoor vallen kleine fouten op: <i>since</i> met de tegenwoordige tijd, <i>eventually</i>, <i>make a photo</i> en de directe toon.</p>
<p>💬 Ook toon is een valse vriend: «Dat klopt niet» als <i>That's not correct</i> klinkt in het Engels hard. Zachter: <i>I'm not sure that's quite right.</i> (Daarover meer in C1.)</p>` },
    ex: [
      { t: 'cloze', s: 'After three hours of searching, we ___ found the keys.', a: ['eventually'], o: ['eventually', 'possibly', 'actually'], nl: 'Na drie uur zoeken vonden we uiteindelijk de sleutels.', tag: 'enb-falsefriend' },
      { t: 'cloze', s: 'Could you ___ the report for mistakes?', a: ['check'], o: ['check', 'control', 'controle'], nl: 'Kun je het rapport op fouten controleren?', tag: 'enb-falsefriend' },
      { t: 'cloze', s: "I've lived in Rotterdam ___ 2016.", a: ['since'], o: ['since', 'for', 'from'], nl: 'Ik woon sinds 2016 in Rotterdam.', tag: 'enb-perfect' },
      { t: 'cloze', s: "We've been friends ___ twenty years.", a: ['for'], o: ['for', 'since', 'during'], nl: 'We zijn al twintig jaar vrienden.', tag: 'enb-perfect' },
      { t: 'cloze', s: 'I ___ her at a party in 2019.', a: ['met'], o: ['met', 'have met', 'have been meeting'], nl: 'Ik heb haar in 2019 op een feestje leren kennen.', x: 'Met een afgerond tijdstip (in 2019) gebruik je de past simple.', tag: 'enb-perfect' },
      { t: 'cloze', s: 'My grandmother ___ me how to knit.', a: ['taught'], o: ['taught', 'learned', 'learnt'], nl: 'Mijn oma heeft me leren breien.', tag: 'enb-falsefriend' },
      { t: 'cloze', s: 'Can you ___ me your charger?', a: ['lend'], o: ['lend', 'borrow', 'loan from'], nl: 'Kun je me je oplader lenen?', tag: 'enb-falsefriend' },
      { t: 'mc', q: '«Eventueel» in een zakelijke mail is…', o: ['possibly / if necessary', 'eventually', 'actually'], tag: 'enb-falsefriend' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I want you to call me.', 'I want that you call me.', 'I want you call me.'], tag: 'enb-pattern' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Can I take a picture?', 'Can I make a picture?', 'Can I do a picture?'], tag: 'enb-makedo' },
      { t: 'mc', q: '«Hij is erg sympathiek» betekent in het Engels…', o: ["He's really nice.", "He's very sympathetic.", "He's very sensible."], tag: 'enb-falsefriend' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Most people work from home on Fridays.', 'The most people work from home on Fridays.', 'Most of people work from home on Fridays.'], tag: 'enb-falsefriend' },
      { t: 'tr', nl: 'Ik werk hier al vijf jaar.', a: ["I've been working here for five years.", "I've worked here for five years.", 'I have been working here for five years.', 'I have worked here for five years.'], tag: 'enb-perfect' },
      { t: 'tr', nl: 'Kun je me wat advies geven?', a: ['Can you give me some advice?', 'Could you give me some advice?'], tag: 'enb-falsefriend' },
      { t: 'order', s: 'I want you to check my email before Friday.', nl: 'Ik wil dat je mijn mail voor vrijdag controleert.', tag: 'enb-pattern' },
      { t: 'match', p: [['eventually', 'uiteindelijk'], ['actually', 'eigenlijk'], ['sensible', 'verstandig'], ['sympathetic', 'meelevend'], ['a chef', 'een kok'], ['a competitor', 'een concurrent']], tag: 'enb-falsefriend' }
    ],
    reading: {
      t: 'Ten things Dutch people say in English', type: 'Column',
      p: [
        ["Dutch people speak brilliant English. Ask anyone in Amsterdam for directions and you'll get a perfect answer. But every now and then, something charmingly Dutch slips through.", 'Nederlanders spreken briljant Engels. Vraag iemand in Amsterdam de weg en je krijgt een perfect antwoord. Maar zo nu en dan glipt er iets charmant Nederlands doorheen.'],
        ["My colleague once told me, «I will control your work and then we can eventually go to lunch.» I spent the morning worried about being controlled and wondering if lunch would ever happen.", 'Mijn collega zei eens: «I will control your work and then we can eventually go to lunch.» Ik was de hele ochtend bang dat ik gecontroleerd werd en vroeg me af of de lunch ooit zou komen.'],
        ["Another favorite: «I live here since two years.» It's perfectly clear, of course, but English insists on the present perfect: I've lived here for two years.", 'Nog een favoriet: «I live here since two years.» Het is natuurlijk volkomen duidelijk, maar het Engels staat op de present perfect: I’ve lived here for two years.'],
        ["My advice? Don't worry too much. Native speakers make mistakes too, and a little Dunglish is part of the charm. But if you want to sound truly fluent, these are the first habits to break.", 'Mijn advies? Maak je niet te druk. Moedertaalsprekers maken ook fouten, en een beetje Dunglish hoort bij de charme. Maar wil je echt vloeiend klinken, dan zijn dit de eerste gewoontes om af te leren.']
      ],
      gl: [['every now and then', 'zo nu en dan'], ['to slip through', 'erdoorheen glippen'], ['to break a habit', 'een gewoonte afleren']],
      q: [
        { t: 'mc', q: 'Why was the writer worried all morning?', o: ['Because of the word «control»', 'Because he had too much work', 'Because lunch was canceled'] },
        { t: 'mc', q: 'What does English insist on in «I live here since two years»?', o: ['The present perfect', 'The past simple', 'The future'] },
        { t: 'mc', q: 'What is the writer’s advice?', o: ['Don’t worry too much, but break these habits', 'Stop speaking English', 'Only speak Dutch with natives'] }
      ]
    },
    say: [['Could you check this for me?', 'Kun je dit voor me controleren?'], ["I've lived here for ten years.", 'Ik woon hier al tien jaar.'], ['I want you to be honest.', 'Ik wil dat je eerlijk bent.'], ['We eventually found a solution.', 'Uiteindelijk vonden we een oplossing.']],
    task: { nl: 'Schrijf een korte zakelijke mail (4–5 zinnen) aan een Amerikaanse collega: je vraagt of ze je presentatie kan controleren, stelt eventueel een afspraak voor en vertelt hoe lang je al aan het project werkt. Vermijd de valse vrienden uit deze unit.', model: "Hi Jessica, could you check my presentation before Thursday? I've been working on this project for three months, so a fresh pair of eyes would really help. If necessary, we could possibly meet on Wednesday afternoon. Thanks in advance! Best, Sanne" },
    scenario: { nl: 'Je oefent met een Amerikaanse taalcoach die op Dunglish let.', role: 'You are Chris, an American language coach in Chicago who specializes in helping Dutch professionals. Chat with the learner about their work and life. Whenever they make a typical Dutch mistake (false friends like eventually/actually/control/sympathetic, since + present tense, make a photo, want that…), point it out kindly and briefly, then continue the conversation.', goal: 'Praat over je werk en leven zonder in de Dunglish-valkuilen te trappen.' }
  });

  /* ───────────────────────── B2 · 5 ───────────────────────── */
  U({
    id: 'en-b2-05', level: 'B2', icon: '💼', title: 'Phrasal verbs at work', nl: 'Phrasal verbs op het werk',
    goals: ['De 20 belangrijkste phrasal verbs op kantoor gebruiken', 'Weten waar het voornaamwoord staat: turn it off, niet turn off it', 'Phrasal verbs kiezen in plaats van formele Latijnse woorden'],
    vocab: [
      ['to bring up', 'ter sprake brengen'], ['to carry out', 'uitvoeren'], ['to put off', 'uitstellen'], ['to call off', 'afgelasten'], ['to come up with', 'bedenken'],
      ['to look into', 'onderzoeken / uitzoeken'], ['to figure out', 'uitvogelen'], ['to follow up on', 'opvolgen / nabellen'], ['to set up', 'opzetten / regelen'], ['to run out of', 'zonder komen te zitten'],
      ['to take on', 'op je nemen / aannemen'], ['to turn down', 'afwijzen'], ['to back up', 'steunen / een back-up maken'], ['to fill in for', 'invallen voor'], ['to get back to someone', 'iemand later antwoord geven'],
      ['to go over', 'doornemen'], ['to point out', 'erop wijzen'], ['to sort out', 'regelen / oplossen'], ['to wrap up', 'afronden'], ['to lay off', 'ontslaan (wegens bezuiniging)'],
      ['to catch up', 'bijpraten / inhalen'], ['to step down', 'aftreden'], ['to drop by', 'even langskomen'], ['to touch base', 'even contact hebben']
    ],
    grammar: [
      { t: 'Waar staat het object?', es: 'Separable phrasal verbs',
        html: `<p>Veel phrasal verbs zijn <b>scheidbaar</b>: het object mag tussen werkwoord en partikel, of erachter: <i>turn <b>the TV</b> off</i> = <i>turn off <b>the TV</b></i>.</p>
<p>Maar een <b>voornaamwoord</b> (it, them, him, her) moet <b>ertussen</b>: <i>turn <b>it</b> off</i>, nooit <s>turn off it</s>. <i>Can you look <b>it</b> up?</i> <i>We put <b>it</b> off.</i></p>
<p>Sommige zijn <b>onscheidbaar</b>: het object komt altijd achteraan: <i>look <b>into</b> it</i>, <i>deal <b>with</b> them</i>, <i>get <b>over</b> it</i>. En drieledige werkwoorden ook: <i>come up with <b>an idea</b></i>, <i>run out of <b>time</b></i>.</p>`,
        table: [['type', 'met zelfst. naamwoord', 'met voornaamwoord'], ['scheidbaar', 'put off the meeting / put the meeting off', 'put it off'], ['onscheidbaar', 'look into the problem', 'look into it'], ['drieledig', 'come up with a plan', 'come up with it']],
        sum: 'Turn it off. Put it off. Look into it.',
        ex: [["Let's put the meeting off until Monday.", 'Laten we de vergadering uitstellen tot maandag.'], ["I'll look into it and get back to you.", 'Ik zoek het uit en laat het je weten.']] },
      { t: 'Phrasal verb of formeel woord?', es: 'Register',
        html: `<p>Nederlanders kiezen vaak het «Latijnse» woord omdat het op het Nederlands lijkt: <i>postpone</i> (postponeren), <i>investigate</i>, <i>cancel</i>. Dat is niet fout, maar in gesprekken klinkt het stijf.</p>
<p>In spreektaal en gewone mails gebruiken native speakers liever phrasal verbs: <b>put off</b> i.p.v. postpone, <b>look into</b> i.p.v. investigate, <b>call off</b> i.p.v. cancel, <b>find out</b> i.p.v. discover.</p>
<p>In een rapport of contract is het formele woord juist beter. Kies dus bewust.</p>`,
        table: [['formeel', 'phrasal verb', 'Nederlands'], ['postpone', 'put off', 'uitstellen'], ['investigate', 'look into', 'onderzoeken'], ['cancel', 'call off', 'afgelasten'], ['reject', 'turn down', 'afwijzen'], ['invent / devise', 'come up with', 'bedenken'], ['tolerate', 'put up with', 'pikken / verdragen']],
        ex: [["The game was called off because of the rain.", 'De wedstrijd werd afgelast vanwege de regen.'], ["I can't put up with this noise any longer.", 'Ik pik dit lawaai niet langer.']] },
      { t: 'Eén werkwoord, veel betekenissen', es: 'Multiple meanings',
        html: `<p>Veel phrasal verbs hebben meerdere betekenissen. De context beslist.</p>
<p><b>take on</b>: <i>take on more work</i> (op je nemen), <i>take on staff</i> (aannemen), <i>take on a competitor</i> (de strijd aangaan).</p>
<p><b>pick up</b>: <i>pick up the kids</i> (ophalen), <i>pick up a language</i> (oppikken), <i>sales are picking up</i> (aantrekken).</p>
<p><b>back up</b>: <i>back up your files</i> (back-up maken), <i>back someone up</i> (steunen).</p>`,
        table: [['phrasal verb', 'betekenis 1', 'betekenis 2'], ['take on', 'op je nemen', 'aannemen (personeel)'], ['pick up', 'ophalen', 'oppikken / aantrekken'], ['back up', 'back-up maken', 'steunen'], ['turn down', 'afwijzen', 'zachter zetten']],
        ex: [['Business is finally picking up.', 'De zaken trekken eindelijk aan.'], ['Thanks for backing me up in the meeting.', 'Bedankt dat je me steunde in de vergadering.']] }
    ],
    dialogue: {
      t: 'Monday stand-up', place: 'New York 🇺🇸',
      lines: [
        ['Lisa', "Okay, let's get started. Tom, can you bring us up to speed on the client project?", 'Oké, laten we beginnen. Tom, kun je ons bijpraten over het klantproject?'],
        ['Tom', "Sure. We've run into a problem with the data. I'm looking into it, but we might have to put off the launch.", 'Tuurlijk. We zijn op een probleem met de data gestuit. Ik zoek het uit, maar misschien moeten we de lancering uitstellen.'],
        ['Lisa', "Put it off? The client won't like that. Can we come up with a workaround?", 'Uitstellen? Dat vindt de klant niet leuk. Kunnen we een tijdelijke oplossing bedenken?'],
        ['Bram', "I could take on part of the analysis. I've wrapped up my other project.", 'Ik zou een deel van de analyse op me kunnen nemen. Ik heb mijn andere project afgerond.'],
        ['Lisa', "Great, thanks for stepping in. Tom, can you set up a call with the client this week?", 'Super, bedankt dat je bijspringt. Tom, kun je deze week een call met de klant regelen?'],
        ['Tom', "Will do. I'll follow up on that today and get back to you.", 'Doe ik. Ik ga er vandaag achteraan en laat het je weten.'],
        ['Lisa', "And let's not bring up the delay until we know more. Anything else?", 'En laten we de vertraging niet ter sprake brengen tot we meer weten. Verder nog iets?'],
        ['Bram', "Just a reminder: we're running out of coffee.", 'Alleen een herinnering: de koffie raakt op.'],
        ['Lisa', "Now that's a real emergency. Let's sort that out first.", 'Dát is pas een echte noodsituatie. Laten we dat eerst regelen.']
      ],
      q: [
        { t: 'mc', q: 'What problem does Tom have?', o: ['A problem with the data', 'A problem with the client’s contract', 'He is sick'] },
        { t: 'mc', q: 'What does Bram offer?', o: ['To take on part of the analysis', 'To call off the project', 'To buy coffee'] },
        { t: 'mc', q: 'What does «I’ll get back to you» mean?', o: ['I’ll answer you later', 'I’ll come back to the office', 'I’ll give it back to you'] }
      ]
    },
    culture: { t: 'Kantoorjargon en «corporate speak»', html: `<p>Amerikaans kantoorjargon zit vol phrasal verbs en sportmetaforen: <i>touch base</i>, <i>circle back</i>, <i>loop someone in</i>, <i>ballpark figure</i>, <i>step up to the plate</i>.</p>
<p>Veel mensen vinden dit zelf ook wat overdreven; <i>let's circle back on this</i> is zelfs een grapje geworden. Gebruik het met mate.</p>
<p>📧 Een Amerikaanse mail eindigt vaak met <i>Let me know if you have any questions</i> of <i>Looking forward to hearing from you</i>. <i>Kind regards</i> is wat Britser; Amerikanen schrijven vaker <i>Best</i> of <i>Thanks</i>.</p>` },
    ex: [
      { t: 'cloze', s: "It's late. Let's ___ the meeting off until tomorrow.", a: ['put'], o: ['put', 'call', 'turn'], nl: 'Het is laat. Laten we de vergadering uitstellen tot morgen.', tag: 'enb-phrasal' },
      { t: 'cloze', s: 'The concert was ___ off because of the storm.', a: ['called'], o: ['called', 'put', 'taken'], nl: 'Het concert werd afgelast vanwege de storm.', tag: 'enb-phrasal' },
      { t: 'cloze', s: "We need to come up ___ a better idea.", a: ['with'], o: ['with', 'to', 'for'], nl: 'We moeten een beter idee bedenken.', tag: 'enb-phrasal' },
      { t: 'cloze', s: 'The printer is out of paper. We ran ___ of it this morning.', a: ['out'], o: ['out', 'off', 'away'], nl: 'De printer heeft geen papier meer. Het is vanochtend op geraakt.', tag: 'enb-phrasal' },
      { t: 'cloze', s: "I don't know the answer, but I'll ___ into it.", a: ['look'], o: ['look', 'see', 'take'], nl: 'Ik weet het antwoord niet, maar ik zal het uitzoeken.', tag: 'enb-phrasal' },
      { t: 'cloze', s: 'Thanks for your offer, but I have to ___ it down.', a: ['turn'], o: ['turn', 'put', 'call'], nl: 'Bedankt voor je aanbod, maar ik moet het afslaan.', tag: 'enb-phrasal' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Can you turn it off?', 'Can you turn off it?', 'Can you off turn it?'], x: 'Een voornaamwoord staat tussen werkwoord en partikel.', tag: 'enb-phrasal' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["I'll look into it.", "I'll look it into.", "I'll into look it."], x: 'Look into is onscheidbaar.', tag: 'enb-phrasal' },
      { t: 'mc', q: 'Wat klinkt het meest natuurlijk in een gesprek?', o: ["Let's put it off until Friday.", "Let's postpone it to Friday.", "Let's delay it to Friday."], tag: 'enb-register' },
      { t: 'mc', q: '«Business is picking up» betekent…', o: ['De zaken trekken aan.', 'De zaken worden opgehaald.', 'Het bedrijf verhuist.'], tag: 'enb-phrasal' },
      { t: 'mc', q: '«To lay off staff» is…', o: ['personeel ontslaan', 'personeel aannemen', 'personeel trainen'], tag: 'enb-phrasal' },
      { t: 'tr', nl: 'Ik zoek het uit en laat het je weten.', a: ["I'll look into it and get back to you.", "I'll find out and let you know.", "I'll look into it and let you know."], tag: 'enb-phrasal' },
      { t: 'tr', nl: 'Ze hebben de bruiloft afgelast.', a: ['They called off the wedding.', 'They called the wedding off.', 'They canceled the wedding.', 'They cancelled the wedding.'], tag: 'enb-phrasal' },
      { t: 'order', s: "Let's wrap up the meeting and catch up next week.", nl: 'Laten we de vergadering afronden en volgende week bijpraten.', tag: 'enb-phrasal' },
      { t: 'match', p: [['to put off', 'uitstellen'], ['to call off', 'afgelasten'], ['to turn down', 'afwijzen'], ['to come up with', 'bedenken'], ['to wrap up', 'afronden'], ['to look into', 'uitzoeken']], tag: 'enb-phrasal' }
    ],
    reading: {
      t: 'How to run a meeting that doesn’t waste time', type: 'Advies uit een zakenblad',
      p: [
        ["We've all sat through meetings that could have been an email. The good news is that a few simple habits can turn things around.", 'We hebben allemaal weleens vergaderingen uitgezeten die ook een mail hadden kunnen zijn. Het goede nieuws: met een paar simpele gewoontes kun je het tij keren.'],
        ["First, set up a clear agenda and send it out in advance. If there's nothing on it, call the meeting off. Nobody will complain.", 'Stel eerst een duidelijke agenda op en stuur die van tevoren rond. Staat er niets op, gelast de vergadering dan af. Niemand zal klagen.'],
        ["Second, don't let one person take over. Ask quieter colleagues to bring up their ideas, and point out when the discussion is going off track.", 'Laat ten tweede niet één persoon het overnemen. Vraag stillere collega’s hun ideeën in te brengen, en wijs erop wanneer de discussie afdwaalt.'],
        ["Finally, wrap up with clear action points: who will follow up on what, and by when. A meeting without next steps is just a conversation with chairs.", 'Rond tot slot af met duidelijke actiepunten: wie pakt wat op, en voor wanneer. Een vergadering zonder vervolgstappen is gewoon een gesprek met stoelen.']
      ],
      gl: [['in advance', 'van tevoren'], ['to go off track', 'afdwalen'], ['action points', 'actiepunten']],
      q: [
        { t: 'mc', q: 'What should you do if the agenda is empty?', o: ['Call the meeting off', 'Make the meeting longer', 'Invite more people'] },
        { t: 'mc', q: 'What should you ask quieter colleagues to do?', o: ['Bring up their ideas', 'Take notes', 'Leave early'] },
        { t: 'mc', q: 'How should a meeting end?', o: ['With clear action points', 'With coffee', 'With a vote'] }
      ]
    },
    say: [["I'll look into it and get back to you.", 'Ik zoek het uit en laat het je weten.'], ["Let's put it off until next week.", 'Laten we het uitstellen tot volgende week.'], ['Can you set up a call?', 'Kun je een call regelen?'], ["We're running out of time.", 'We hebben bijna geen tijd meer.']],
    task: { nl: 'Schrijf een korte update (4–5 zinnen) aan je team over een project dat vertraging heeft. Gebruik minstens vijf phrasal verbs uit deze unit (bijvoorbeeld run into, look into, put off, come up with, follow up on).', model: "Hi team, quick update on the website project. We've run into some problems with the payment system, and our developers are looking into it. Unfortunately, we'll have to put off the launch by a week. In the meantime, we're trying to come up with a temporary solution. I'll follow up with the client tomorrow and get back to you." },
    scenario: { nl: 'Je hebt een één-op-ééngesprek met je Amerikaanse manager over je werk.', role: 'You are Lisa, a friendly but busy American team manager in New York. Have a one-on-one with the learner: ask how their projects are going, what problems they ran into, and what they need. Use workplace phrasal verbs naturally (follow up, look into, take on, put off, wrap up).', goal: 'Bespreek je projecten, problemen en plannen met phrasal verbs.' }
  });
})(window.SPT);
