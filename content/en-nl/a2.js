/* Engels voor Nederlandstaligen — niveau A2, units 1–5 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-past': 'past simple, regelmatig (-ed)', 'en-was': 'was / were', 'en-irr': 'onregelmatige verleden tijd (went, saw…)', 'en-did': 'did in vragen en ontkenningen',
    'en-should': 'should / shouldn’t', 'en-health': 'gezondheid', 'en-comp': 'vergrotende trap (bigger, more…)', 'en-sup': 'overtreffende trap (the biggest…)',
    'en-pp': 'present perfect (have done)', 'en-ever': 'ever / never / already / yet'
  });

  /* ───────────────────────── A2 · 1 ───────────────────────── */
  U({
    id: 'en-a2-01', level: 'A2', icon: '🕰️', title: 'Last weekend', nl: 'Afgelopen weekend',
    goals: ['Vertellen wat je gedaan hebt met de past simple', 'was / were gebruiken', 'Vragen en ontkenningen met did'],
    vocab: [
      ['yesterday', 'gisteren'], ['last night', 'gisteravond'], ['last weekend', 'afgelopen weekend'], ['last week', 'vorige week'], ['two days ago', 'twee dagen geleden'],
      ['to visit', 'bezoeken'], ['to watch', 'kijken naar'], ['to play', 'spelen'], ['to walk', 'lopen / wandelen'], ['to clean', 'schoonmaken'],
      ['to stay', 'blijven / logeren'], ['to relax', 'ontspannen'], ['to call', 'bellen'], ['to cook', 'koken'], ['to study', 'studeren'],
      ['to arrive', 'aankomen'], ['to start', 'beginnen'], ['to finish', 'afmaken / eindigen'], ['tired', 'moe'], ['great', 'geweldig'],
      ['terrible', 'verschrikkelijk'], ['How was your weekend?', 'Hoe was je weekend?'], ['nothing special', 'niets bijzonders'], ['then', 'daarna / toen'], ['after that', 'daarna']
    ],
    grammar: [
      { t: 'Past simple: -ed', es: 'Past simple',
        html: `<p>Voor iets wat <b>klaar</b> is, op een <b>bekend moment</b> in het verleden, gebruik je de <b>past simple</b>. Bij regelmatige werkwoorden: <b>-ed</b>.</p>
<p><i>I <b>watched</b> a movie. We <b>visited</b> my aunt. She <b>stayed</b> home.</i> Voor alle personen hetzelfde!</p>
<p>Spelling: <i>live → lived</i> (alleen -d), <i>study → studied</i> (y → ied), <i>stop → stopped</i> (verdubbeling).</p>
<p>⚠️ Nederlanders zeggen vaak <s>I have watched a movie yesterday</s>, omdat «ik heb gisteren een film gekeken» normaal is. In het Engels: met <i>yesterday, last week, ago</i> altijd de <b>past simple</b>: <i>I <b>watched</b> a movie yesterday.</i></p>`,
        table: [['werkwoord', 'past simple', 'Nederlands'], ['watch', 'watched', 'keek / heb gekeken'], ['live', 'lived', 'woonde'], ['study', 'studied', 'studeerde'], ['stop', 'stopped', 'stopte']],
        sum: 'I watched a movie yesterday. (niet: I have watched…)',
        ex: [['I cleaned the house on Saturday.', 'Ik heb zaterdag het huis schoongemaakt.'], ['We walked on the beach last night.', 'We hebben gisteravond op het strand gewandeld.']] },
      { t: 'Was en were', es: 'Was / were',
        html: `<p>De verleden tijd van <b>to be</b>: <b>was</b> bij I, he, she, it en <b>were</b> bij you, we, they.</p>
<p><i>I <b>was</b> tired. The movie <b>was</b> great. We <b>were</b> at home. You <b>were</b> late!</i></p>
<p>Ontkenning: <b>wasn't</b>, <b>weren't</b>. Vraag: <i><b>Was</b> it good? <b>Were</b> you there?</i></p>
<p>Net als in het Nederlands: «ik was», «wij waren». Alleen bij <i>you</i> zeg je altijd <b>were</b>, ook bij één persoon.</p>`,
        table: [['', 'was / were'], ['I / he / she / it', 'was'], ['you / we / they', 'were']],
        ex: [['How was your weekend? — It was great!', 'Hoe was je weekend? — Geweldig!'], ["We weren't at home on Sunday.", 'We waren zondag niet thuis.']] },
      { t: 'Vragen en ontkenningen met did', es: 'Did',
        html: `<p>Zoals je <i>do/does</i> gebruikt in de tegenwoordige tijd, gebruik je <b>did</b> in de verleden tijd, voor alle personen.</p>
<p>Vraag: <i><b>Did</b> you <b>watch</b> the game?</i> Ontkenning: <i>I <b>didn't watch</b> it.</i></p>
<p>Na <i>did/didn't</i> komt het <b>kale werkwoord</b>, zonder -ed: <i>Did you <b>visit</b>…?</i> (niet <s>visited</s>). De verleden tijd zit al in <i>did</i>.</p>
<p>Uitzondering: bij <i>was/were</i> gebruik je geen did: <i>Were you tired?</i> (niet <s>Did you be tired?</s>)</p>`,
        table: [['', 'voorbeeld'], ['bevestigend', 'She called me.'], ['vraag', 'Did she call you?'], ['ontkennend', "She didn't call me."], ['kort antwoord', 'Yes, she did. / No, she didn’t.']],
        ex: [['What did you do last weekend?', 'Wat heb je afgelopen weekend gedaan?'], ["I didn't study. I relaxed.", 'Ik heb niet gestudeerd. Ik heb ontspannen.']] }
    ],
    dialogue: {
      t: 'Monday morning', place: 'Philadelphia 🇺🇸',
      lines: [
        ['Rachel', 'Good morning, Thomas! How was your weekend?', 'Goedemorgen, Thomas! Hoe was je weekend?'],
        ['Thomas', 'It was great, thanks. I visited my friends in New York.', 'Geweldig, dank je. Ik ben bij mijn vrienden in New York geweest.'],
        ['Rachel', 'Oh, nice! What did you do there?', 'O, leuk! Wat hebben jullie daar gedaan?'],
        ['Thomas', 'We walked in Central Park and watched a show on Broadway.', 'We hebben in Central Park gewandeld en een show op Broadway gezien.'],
        ['Rachel', 'Wow! Was it expensive?', 'Wauw! Was het duur?'],
        ['Thomas', "Yes, it was. But it was amazing. What about you?", 'Ja. Maar het was fantastisch. En jij?'],
        ['Rachel', "Nothing special. I cleaned my apartment and cooked. On Sunday I stayed in bed until eleven!", 'Niets bijzonders. Ik heb mijn appartement schoongemaakt en gekookt. Zondag ben ik tot elf uur in bed gebleven!'],
        ['Thomas', 'Did you watch the game on Sunday night?', 'Heb je zondagavond de wedstrijd gekeken?'],
        ['Rachel', "No, I didn't. I was too tired!", 'Nee. Ik was te moe!']
      ],
      q: [
        { t: 'mc', q: 'Where did Thomas go?', o: ['To New York', 'To Philadelphia', 'To Boston'] },
        { t: 'mc', q: 'What did Rachel do on Sunday?', o: ['She stayed in bed until eleven', 'She went to Broadway', 'She watched the game'] },
        { t: 'mc', q: "Why didn't Rachel watch the game?", o: ['She was too tired', 'She was in New York', "She doesn't like sports"] }
      ]
    },
    culture: { t: 'Het weekend in de VS', html: `<p>Op maandagochtend vragen Amerikaanse collega’s vrijwel altijd <i>How was your weekend?</i> of <i>Did you do anything fun?</i> Een kort antwoord met één leuk detail is genoeg.</p>
<p>Veel Amerikanen besteden het weekend aan <b>sport kijken</b> (<i>football</i> op zondag in de herfst), <b>brunch</b> en klusjes (<i>errands</i>: boodschappen, de auto wassen).</p>
<p>🏛️ Philadelphia is de stad waar in 1776 de onafhankelijkheid van de VS werd uitgeroepen. Je kunt er de beroemde <i>Liberty Bell</i> zien.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ my grandma yesterday.', a: ['visited'], o: ['visited', 'have visited', 'visit'], nl: 'Ik ben gisteren bij mijn oma geweest.', tag: 'en-past' },
      { t: 'cloze', s: 'We ___ a great movie last night.', a: ['watched'], o: ['watched', 'have watched', 'watch'], nl: 'We hebben gisteravond een geweldige film gekeken.', tag: 'en-past' },
      { t: 'cloze', s: 'She ___ English at university.', a: ['studied'], o: ['studied', 'studyed', 'studed'], nl: 'Ze heeft Engels gestudeerd aan de universiteit.', tag: 'en-past' },
      { t: 'cloze', s: 'The weather ___ terrible.', a: ['was'], o: ['was', 'were', 'is been'], nl: 'Het weer was verschrikkelijk.', tag: 'en-was' },
      { t: 'cloze', s: 'Where ___ you last night?', a: ['were'], o: ['were', 'was', 'did'], nl: 'Waar was je gisteravond?', tag: 'en-was' },
      { t: 'cloze', s: '___ you call your mom?', a: ['Did'], o: ['Did', 'Do', 'Were'], nl: 'Heb je je moeder gebeld?', tag: 'en-did' },
      { t: 'cloze', s: "I didn't ___ the dishes.", a: ['wash'], o: ['wash', 'washed', 'washing'], nl: 'Ik heb de afwas niet gedaan.', tag: 'en-did' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I saw her yesterday.', 'I have seen her yesterday.', 'I have saw her yesterday.'], tag: 'en-past' },
      { t: 'mc', q: '«Twee dagen geleden» in het Engels:', o: ['two days ago', 'before two days', 'two days before now'], tag: 'en-past' },
      { t: 'mc', q: 'Welke vraag is correct?', o: ['Were you tired?', 'Did you be tired?', 'Did you was tired?'], tag: 'en-was' },
      { t: 'tr', nl: 'Hoe was je weekend?', a: ['How was your weekend?'], tag: 'en-was' },
      { t: 'tr', nl: 'Ik heb gisteren gekookt.', a: ['I cooked yesterday.', 'Yesterday I cooked.'], tag: 'en-past' },
      { t: 'tr', nl: 'We waren niet thuis.', a: ["We weren't at home.", 'We were not at home.', "We weren't home.", 'We were not home.'], tag: 'en-was' },
      { t: 'order', s: 'What did you do last weekend?', nl: 'Wat heb je afgelopen weekend gedaan?', tag: 'en-did' },
      { t: 'match', p: [['yesterday', 'gisteren'], ['last night', 'gisteravond'], ['ago', 'geleden'], ['tired', 'moe'], ['to stay', 'blijven']], tag: 'en-past' }
    ],
    reading: {
      t: 'A rainy Saturday', type: 'Dagboek',
      p: [
        ["Saturday, October 12. It rained all day, so I stayed home. I called my sister in Amsterdam in the morning. We talked for an hour!", 'Zaterdag 12 oktober. Het regende de hele dag, dus ik bleef thuis. ’s Ochtends belde ik mijn zus in Amsterdam. We hebben een uur gepraat!'],
        ["In the afternoon I cleaned the kitchen and baked cookies. They were delicious. Then I watched two episodes of my favorite show.", '’s Middags maakte ik de keuken schoon en bakte ik koekjes. Ze waren heerlijk. Daarna keek ik twee afleveringen van mijn favoriete serie.'],
        ["My roommate didn't come home until midnight. She was at a concert. I wasn't jealous… well, maybe a little.", 'Mijn huisgenoot kwam pas om middernacht thuis. Ze was bij een concert. Ik was niet jaloers… nou ja, misschien een beetje.']
      ],
      gl: [['all day', 'de hele dag'], ['episodes', 'afleveringen'], ['jealous', 'jaloers']],
      q: [
        { t: 'mc', q: 'Why did the writer stay home?', o: ['It rained all day', 'She was sick', 'She had to work'] },
        { t: 'mc', q: 'Who did she call?', o: ['Her sister', 'Her roommate', 'Her mom'] },
        { t: 'mc', q: 'Where was her roommate?', o: ['At a concert', 'In Amsterdam', 'At work'] }
      ]
    },
    say: [['How was your weekend?', 'Hoe was je weekend?'], ['It was great, thanks.', 'Geweldig, dank je.'], ['I visited my parents.', 'Ik ben bij mijn ouders geweest.'], ["I didn't do much.", 'Ik heb niet veel gedaan.']],
    task: { nl: 'Beschrijf je afgelopen weekend in 5 zinnen: wat deed je zaterdag en zondag, hoe was het? Gebruik regelmatige werkwoorden met -ed, was/were en één ontkenning met didn’t.', model: "Last weekend was great. On Saturday I visited my friends in Utrecht. We walked in the city and we played board games. On Sunday I stayed home and cleaned my apartment. I didn't cook; I ordered pizza!" },
    scenario: { nl: 'Een Amerikaanse collega vraagt maandagochtend naar je weekend.', role: 'You are Rachel, a friendly coworker in Philadelphia. It is Monday morning at the coffee machine. Ask the learner about their weekend with past simple questions (What did you do? Was it fun? Did you…?). Tell them about your own weekend too.', goal: 'Vertel over je weekend in de verleden tijd en stel zelf een vraag.' }
  });

  /* ───────────────────────── A2 · 2 ───────────────────────── */
  U({
    id: 'en-a2-02', level: 'A2', icon: '✈️', title: 'A great trip', nl: 'Een geweldige reis',
    goals: ['Over een reis vertellen', 'De belangrijkste onregelmatige werkwoorden in de verleden tijd', 'Woorden voor vliegen, hotels en reizen'],
    vocab: [
      ['a trip', 'een reis / uitstapje'], ['a flight', 'een vlucht'], ['an airport', 'een vliegveld'], ['a passport', 'een paspoort'], ['luggage', 'bagage'],
      ['a suitcase', 'een koffer'], ['a ticket', 'een kaartje / ticket'], ['to book', 'boeken / reserveren'], ['to fly', 'vliegen'], ['to land', 'landen'],
      ['to rent a car', 'een auto huren'], ['a road trip', 'een autoreis'], ['to check in', 'inchecken'], ['to check out', 'uitchecken'], ['a view', 'een uitzicht'],
      ['a beach', 'een strand'], ['the mountains', 'de bergen'], ['a national park', 'een nationaal park'], ['a souvenir', 'een souvenir'], ['amazing', 'fantastisch'],
      ['crowded', 'druk (met mensen)'], ['to get lost', 'verdwalen'], ['jet lag', 'jetlag'], ['abroad', 'in het buitenland']
    ],
    grammar: [
      { t: 'Onregelmatige werkwoorden', es: 'Irregular verbs',
        html: `<p>Veel veelgebruikte werkwoorden zijn <b>onregelmatig</b>. Net als in het Nederlands (gaan → ging, zien → zag) moet je ze uit je hoofd leren.</p>
<p>Gelukkig lijken er veel op het Nederlands: <i>drink → drank</i> (dronk), <i>sing → sang</i> (zong), <i>come → came</i> (kwam), <i>give → gave</i> (gaf), <i>eat → ate</i> (at).</p>
<p>Ook hier: in vragen en ontkenningen gebruik je <b>did</b> + kale werkwoord: <i>Did you <b>go</b>?</i> (niet <s>went</s>). <i>We didn't <b>see</b> it.</i></p>`,
        table: [['werkwoord', 'past simple', 'Nederlands'], ['go', 'went', 'ging'], ['see', 'saw', 'zag'], ['take', 'took', 'nam'], ['fly', 'flew', 'vloog'], ['buy', 'bought', 'kocht'], ['eat', 'ate', 'at'], ['get', 'got', 'kreeg / werd'], ['have', 'had', 'had']],
        sum: 'go → went, see → saw, take → took, buy → bought.',
        ex: [['We went to California last summer.', 'We zijn vorige zomer naar Californië geweest.'], ['I bought a souvenir for my mom.', 'Ik heb een souvenir voor mijn moeder gekocht.']] },
      { t: 'Nog meer onregelmatige werkwoorden', es: 'More irregular verbs',
        html: `<p>Een tweede reeks die je op reis nodig hebt:</p>
<p><i>leave → <b>left</b></i> (vertrok), <i>find → <b>found</b></i> (vond), <i>lose → <b>lost</b></i> (verloor), <i>sleep → <b>slept</b></i> (sliep), <i>drive → <b>drove</b></i> (reed), <i>swim → <b>swam</b></i> (zwom), <i>meet → <b>met</b></i> (ontmoette), <i>spend → <b>spent</b></i> (gaf uit / bracht door), <i>make → <b>made</b></i>, <i>say → <b>said</b></i>, <i>think → <b>thought</b></i>.</p>
<p>Let op: <i>to get lost</i> = verdwalen. <i>We <b>got lost</b> in Boston.</i></p>`,
        table: [['werkwoord', 'past simple', 'Nederlands'], ['leave', 'left', 'vertrok'], ['drive', 'drove', 'reed'], ['sleep', 'slept', 'sliep'], ['meet', 'met', 'ontmoette'], ['spend', 'spent', 'gaf uit'], ['think', 'thought', 'dacht']],
        ex: [['We drove from San Francisco to Los Angeles.', 'We reden van San Francisco naar Los Angeles.'], ['I met a lot of nice people.', 'Ik heb veel aardige mensen ontmoet.']] }
    ],
    dialogue: {
      t: 'Back from vacation', place: 'Amsterdam 🇳🇱 ↔ 🇺🇸',
      lines: [
        ['Jessica', "Welcome back! How was your trip to the US?", 'Welkom terug! Hoe was je reis naar de VS?'],
        ['Niels', "Amazing! We flew to Las Vegas and then rented a car.", 'Fantastisch! We vlogen naar Las Vegas en hebben daar een auto gehuurd.'],
        ['Jessica', 'A road trip! Where did you go?', 'Een autoreis! Waar zijn jullie heen gegaan?'],
        ['Niels', "We drove to the Grand Canyon. The view was incredible. We saw the sunrise there.", 'We reden naar de Grand Canyon. Het uitzicht was ongelofelijk. We hebben daar de zonsopgang gezien.'],
        ['Jessica', 'Wow. Did you sleep in a hotel?', 'Wauw. Sliepen jullie in een hotel?'],
        ['Niels', 'No, we slept in a tent! It was cold at night.', 'Nee, we sliepen in een tent! Het was ’s nachts koud.'],
        ['Jessica', 'Did anything go wrong?', 'Ging er iets mis?'],
        ['Niels', "Yes. On the last day, my girlfriend lost her passport. We found it in the car, under a seat!", 'Ja. Op de laatste dag raakte mijn vriendin haar paspoort kwijt. We vonden het in de auto, onder een stoel!'],
        ['Jessica', "Phew! And did you buy any souvenirs?", 'Pfoe! En hebben jullie souvenirs gekocht?'],
        ['Niels', "Just this cowboy hat. I got it for you!", 'Alleen deze cowboyhoed. Ik heb hem voor jou gekocht!']
      ],
      q: [
        { t: 'mc', q: 'Where did Niels fly to?', o: ['Las Vegas', 'The Grand Canyon', 'New York'] },
        { t: 'mc', q: 'Where did they sleep?', o: ['In a tent', 'In a hotel', 'In the car'] },
        { t: 'mc', q: 'Where did they find the passport?', o: ['Under a seat in the car', 'In the tent', 'At the airport'] }
      ]
    },
    culture: { t: 'Nationale parken en roadtrips', html: `<p>De VS heeft meer dan 60 <b>national parks</b>, zoals Yellowstone, Yosemite en de Grand Canyon. Met een <i>America the Beautiful pass</i> kom je een jaar lang in alle parken.</p>
<p>Een <b>road trip</b> is een Amerikaanse traditie. De beroemdste route is <b>Route 66</b>, van Chicago naar Los Angeles. Afstanden zijn enorm: van New York naar Los Angeles is ongeveer 4.500 km.</p>
<p>🛂 Voor een reis naar de VS heb je als Nederlander een <b>ESTA</b> nodig: een online reistoestemming die je vóór vertrek aanvraagt.</p>` },
    ex: [
      { t: 'cloze', s: 'We ___ to Chicago last year.', a: ['went'], o: ['went', 'goed', 'gone'], nl: 'We zijn vorig jaar naar Chicago gegaan.', tag: 'en-irr' },
      { t: 'cloze', s: 'I ___ a beautiful sunset.', a: ['saw'], o: ['saw', 'seed', 'seen'], nl: 'Ik heb een prachtige zonsondergang gezien.', tag: 'en-irr' },
      { t: 'cloze', s: 'They ___ a car at the airport.', a: ['rented'], o: ['rented', 'rent', 'rant'], nl: 'Ze huurden een auto op het vliegveld.', tag: 'en-past' },
      { t: 'cloze', s: 'She ___ her passport at the hotel.', a: ['lost'], o: ['lost', 'losed', 'loosed'], nl: 'Ze raakte haar paspoort kwijt in het hotel.', tag: 'en-irr' },
      { t: 'cloze', s: 'We ___ ten hours to get there.', a: ['drove'], o: ['drove', 'drived', 'driven'], nl: 'We reden tien uur om er te komen.', tag: 'en-irr' },
      { t: 'cloze', s: 'Did you ___ any souvenirs?', a: ['buy'], o: ['buy', 'bought', 'buyed'], nl: 'Heb je souvenirs gekocht?', tag: 'en-did' },
      { t: 'cloze', s: 'I ___ very well on the plane.', a: ['slept'], o: ['slept', 'sleeped', 'sleep'], nl: 'Ik sliep heel goed in het vliegtuig.', tag: 'en-irr' },
      { t: 'mc', q: 'Wat is de verleden tijd van «think»?', o: ['thought', 'thinked', 'thank'], tag: 'en-irr' },
      { t: 'mc', q: '«Verdwalen» in het Engels:', o: ['to get lost', 'to lose yourself', 'to go wrong way'], tag: 'en-irr' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["We didn't see the ocean.", "We didn't saw the ocean.", "We not saw the ocean."], tag: 'en-did' },
      { t: 'tr', nl: 'We zijn naar New York gevlogen.', a: ['We flew to New York.'], tag: 'en-irr' },
      { t: 'tr', nl: 'Ik heb veel geld uitgegeven.', a: ['I spent a lot of money.'], tag: 'en-irr' },
      { t: 'tr', nl: 'Waar ben je naartoe gegaan?', a: ['Where did you go?'], tag: 'en-did' },
      { t: 'order', s: 'We left the hotel early in the morning.', nl: 'We vertrokken ’s ochtends vroeg uit het hotel.', tag: 'en-irr' },
      { t: 'match', p: [['a flight', 'een vlucht'], ['luggage', 'bagage'], ['a suitcase', 'een koffer'], ['crowded', 'druk'], ['abroad', 'in het buitenland']], tag: 'en-irr' }
    ],
    reading: {
      t: 'My first trip to New York', type: 'Reisblog',
      p: [
        ["Last spring I went to New York for the first time. My flight from Amsterdam took eight hours. When I landed, I was tired, but I was so excited!", 'Vorig voorjaar ging ik voor het eerst naar New York. Mijn vlucht vanaf Amsterdam duurde acht uur. Toen ik landde, was ik moe, maar ik was zo opgewonden!'],
        ["I stayed in a small hotel in Brooklyn. Every day I took the subway to Manhattan. I saw the Statue of Liberty, ate a real New York bagel and walked across the Brooklyn Bridge.", 'Ik verbleef in een klein hotel in Brooklyn. Elke dag nam ik de metro naar Manhattan. Ik zag het Vrijheidsbeeld, at een echte New Yorkse bagel en liep over de Brooklyn Bridge.'],
        ["On the last day I got lost in Central Park. A friendly woman helped me find the way. I didn't want to go home!", 'Op de laatste dag verdwaalde ik in Central Park. Een vriendelijke vrouw hielp me de weg te vinden. Ik wilde niet naar huis!']
      ],
      gl: [['for the first time', 'voor het eerst'], ['excited', 'opgewonden / enthousiast'], ['across', 'over (naar de overkant)']],
      q: [
        { t: 'mc', q: 'How long was the flight?', o: ['Eight hours', 'Six hours', 'Twelve hours'] },
        { t: 'mc', q: 'Where did the writer stay?', o: ['In Brooklyn', 'In Manhattan', 'In Central Park'] },
        { t: 'mc', q: 'What happened on the last day?', o: ['The writer got lost in Central Park', 'The writer lost a passport', 'The writer missed the flight'] }
      ]
    },
    say: [['We went to California.', 'We zijn naar Californië geweest.'], ['The view was amazing.', 'Het uitzicht was fantastisch.'], ['I took a lot of photos.', 'Ik heb veel foto’s gemaakt.'], ['Did you have a good trip?', 'Heb je een goede reis gehad?']],
    task: { nl: 'Vertel in 5 of 6 zinnen over een reis die je gemaakt hebt: waar ging je naartoe, hoe reisde je, wat zag je en ging er iets mis? Gebruik minstens vier onregelmatige werkwoorden.', model: "Two years ago I went to Canada with my sister. We flew to Vancouver and then we drove to the mountains. We saw bears and swam in a cold lake! One day my sister lost her phone, but we found it in a restaurant. It was the best trip of my life." },
    scenario: { nl: 'Je vertelt een Amerikaanse vriendin over je laatste vakantie.', role: 'You are Jessica, an American friend who loves travel. The learner just came back from a trip. Ask lots of past simple questions: Where did you go? How did you get there? What did you see? Did anything go wrong? React with enthusiasm.', goal: 'Vertel over je reis met onregelmatige werkwoorden in de verleden tijd.' }
  });

  /* ───────────────────────── A2 · 3 ───────────────────────── */
  U({
    id: 'en-a2-03', level: 'A2', icon: '🩺', title: 'At the doctor’s', nl: 'Bij de dokter',
    goals: ['Zeggen wat je mankeert', 'Advies geven en krijgen met should / shouldn’t', 'Bij de apotheek om medicijnen vragen'],
    vocab: [
      ['a headache', 'hoofdpijn'], ['a stomachache', 'buikpijn'], ['a sore throat', 'keelpijn'], ['a fever', 'koorts'], ['a cold', 'een verkoudheid'],
      ['the flu', 'de griep'], ['a cough', 'een hoest'], ['to feel sick', 'je misselijk / ziek voelen'], ['dizzy', 'duizelig'], ['to hurt', 'pijn doen'],
      ['My back hurts.', 'Mijn rug doet pijn.'], ['an appointment', 'een afspraak'], ['a prescription', 'een recept (van de dokter)'], ['medicine', 'medicijn(en)'], ['a pill', 'een pil'],
      ['the pharmacy', 'de apotheek'], ['to rest', 'rusten'], ['to get better', 'beter worden'], ['health insurance', 'zorgverzekering'], ['an emergency', 'een noodgeval'],
      ['the emergency room (ER)', 'de spoedeisende hulp'], ["What's wrong?", 'Wat is er aan de hand?'], ['I have a cold.', 'Ik ben verkouden.'], ['Get well soon!', 'Beterschap!']
    ],
    grammar: [
      { t: 'Zeggen wat je mankeert', es: 'Talking about health',
        html: `<p>Klachten zeg je vaak met <b>I have</b> + klacht: <i>I <b>have a</b> headache. I <b>have a</b> fever. I <b>have the</b> flu.</i></p>
<p>Let op het lidwoord: <i>a headache, a cold, a fever</i> maar <i><b>the</b> flu</i>.</p>
<p>Pijn in een lichaamsdeel: <i>My back <b>hurts</b>. My feet <b>hurt</b>.</i> Niet <s>I have pain in my back</s> (kan wel, maar klinkt formeel).</p>
<p>Ziek of misselijk: <i>I <b>feel sick</b></i> betekent in de VS vaak «ik voel me ziek», maar ook «ik ben misselijk». <i>I'm <b>sick</b></i> = ik ben ziek (Brits: <i>ill</i>).</p>`,
        table: [['Nederlands', 'Engels'], ['Ik heb hoofdpijn.', 'I have a headache.'], ['Ik ben verkouden.', 'I have a cold.'], ['Ik heb griep.', 'I have the flu.'], ['Mijn keel doet pijn.', 'I have a sore throat.'], ['Mijn knie doet pijn.', 'My knee hurts.']],
        sum: 'I have a headache. I have the flu. My back hurts.',
        ex: [["I don't feel well. I have a sore throat.", 'Ik voel me niet lekker. Ik heb keelpijn.'], ['My stomach hurts.', 'Ik heb buikpijn.']] },
      { t: 'Should en shouldn’t: advies', es: 'Should',
        html: `<p><b>should</b> = zou moeten (advies). <b>shouldn't</b> = zou niet moeten. Voor alle personen hetzelfde, met het kale werkwoord:</p>
<p><i>You <b>should</b> rest. You <b>shouldn't</b> go to work. She <b>should</b> see a doctor.</i></p>
<p>Vraag om advies: <i>What <b>should</b> I do? <b>Should</b> I take an aspirin?</i></p>
<p>Dit is zachter dan <i>must</i> of <i>have to</i>: het is een raad, geen verplichting.</p>`,
        table: [['', 'voorbeeld'], ['advies', 'You should drink a lot of water.'], ['negatief advies', "You shouldn't eat fast food."], ['vraag', 'Should I call a doctor?']],
        ex: [['You should stay in bed for two days.', 'Je moet twee dagen in bed blijven.'], ["You shouldn't drink coffee with this medicine.", 'Je moet geen koffie drinken bij dit medicijn.']] }
    ],
    dialogue: {
      t: 'At the clinic', place: 'Minneapolis 🇺🇸',
      lines: [
        ['Doctor', "Hi, I'm Dr. Patel. What's wrong?", 'Hallo, ik ben dokter Patel. Wat is er aan de hand?'],
        ['Femke', "I don't feel well. I have a headache and a sore throat.", 'Ik voel me niet lekker. Ik heb hoofdpijn en keelpijn.'],
        ['Doctor', 'How long have you had these symptoms?', 'Hoe lang heb je deze klachten al?'],
        ['Femke', 'Three days. And last night I had a fever.', 'Drie dagen. En gisteravond had ik koorts.'],
        ['Doctor', "Let me check. Okay, it's not serious. You have the flu.", 'Even kijken. Oké, het is niet ernstig. Je hebt griep.'],
        ['Femke', 'What should I do?', 'Wat moet ik doen?'],
        ['Doctor', "You should rest and drink a lot of water. You shouldn't go to work this week.", 'Je moet rusten en veel water drinken. Je moet deze week niet gaan werken.'],
        ['Femke', 'Should I take any medicine?', 'Moet ik medicijnen nemen?'],
        ['Doctor', "You can take some Tylenol for the fever. You'll feel better in a few days. Get well soon!", 'Je kunt wat paracetamol nemen tegen de koorts. Over een paar dagen voel je je beter. Beterschap!']
      ],
      q: [
        { t: 'mc', q: 'What does Femke have?', o: ['The flu', 'A cold', 'A broken arm'] },
        { t: 'mc', q: 'What should Femke do?', o: ['Rest and drink a lot of water', 'Go to work', 'Go to the ER'] },
        { t: 'mc', q: 'What can she take for the fever?', o: ['Tylenol', 'Antibiotics', 'Coffee'] }
      ]
    },
    culture: { t: 'Zorg in de VS', html: `<p>De Amerikaanse gezondheidszorg is heel <b>duur</b>. Een bezoek aan de spoedeisende hulp (<i>the ER</i>) kan duizenden dollars kosten. Neem als reiziger altijd een goede reisverzekering mee.</p>
<p>Voor kleine klachten ga je naar een <b>urgent care</b>-kliniek of een <i>walk-in clinic</i>, vaak in een drogisterij als CVS of Walgreens. Daar heb je geen afspraak nodig.</p>
<p>💊 Paracetamol heet in de VS <b>acetaminophen</b> of het merk <i>Tylenol</i>. Ibuprofen heet vaak <i>Advil</i> of <i>Motrin</i>. Het alarmnummer is <b>911</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'I have ___ headache.', a: ['a'], o: ['a', 'the', '—'], nl: 'Ik heb hoofdpijn.', tag: 'en-health' },
      { t: 'cloze', s: 'She has ___ flu.', a: ['the'], o: ['the', 'a', 'an'], nl: 'Ze heeft griep.', tag: 'en-health' },
      { t: 'cloze', s: 'My back ___.', a: ['hurts'], o: ['hurts', 'hurt', 'is hurt'], nl: 'Mijn rug doet pijn.', tag: 'en-health' },
      { t: 'cloze', s: 'You ___ see a doctor.', a: ['should'], o: ['should', 'should to', 'shoulds'], nl: 'Je zou naar een dokter moeten gaan.', tag: 'en-should' },
      { t: 'cloze', s: "You ___ eat so much sugar.", a: ["shouldn't"], o: ["shouldn't", "don't should", 'should not to'], nl: 'Je zou niet zoveel suiker moeten eten.', tag: 'en-should' },
      { t: 'cloze', s: 'What ___ I do?', a: ['should'], o: ['should', 'do', 'am'], nl: 'Wat moet ik doen?', tag: 'en-should' },
      { t: 'mc', q: 'Wat zeg je tegen iemand die ziek is?', o: ['Get well soon!', 'Good luck!', 'Have fun!'], tag: 'en-health' },
      { t: 'mc', q: 'Paracetamol heet in de VS vaak…', o: ['Tylenol', 'Paracet', 'Aspirine'], tag: 'en-health' },
      { t: 'mc', q: '«Ik ben verkouden» in het Engels:', o: ['I have a cold.', "I'm cold.", 'I am verkouden.'], x: "I'm cold betekent: ik heb het koud.", tag: 'en-health' },
      { t: 'mc', q: 'Het alarmnummer in de VS is…', o: ['911', '112', '999'], tag: 'en-health' },
      { t: 'tr', nl: 'Ik heb koorts.', a: ['I have a fever.', "I've got a fever."], tag: 'en-health' },
      { t: 'tr', nl: 'Je moet rusten.', a: ['You should rest.', 'You need to rest.'], tag: 'en-should' },
      { t: 'tr', nl: 'Ik voel me niet lekker.', a: ["I don't feel well.", 'I do not feel well.', "I don't feel good.", "I'm not feeling well."], tag: 'en-health' },
      { t: 'order', s: 'You should drink a lot of water.', nl: 'Je moet veel water drinken.', tag: 'en-should' },
      { t: 'match', p: [['a cough', 'een hoest'], ['a fever', 'koorts'], ['dizzy', 'duizelig'], ['a prescription', 'een recept'], ['an appointment', 'een afspraak']], tag: 'en-health' }
    ],
    reading: {
      t: 'How to beat a cold', type: 'Gezondheidstips',
      p: [
        ["Do you have a cold? Most colds last about a week. There is no cure, but you can feel better faster.", 'Ben je verkouden? De meeste verkoudheden duren ongeveer een week. Er is geen medicijn tegen, maar je kunt je sneller beter voelen.'],
        ["You should drink a lot of water and hot tea with honey. Honey is great for a sore throat. You should also sleep a lot.", 'Je moet veel water drinken en hete thee met honing. Honing is heel goed tegen keelpijn. Je moet ook veel slapen.'],
        ["You shouldn't go to work or school if you have a fever. And you should wash your hands often. Your colleagues will thank you!", 'Je moet niet naar je werk of school gaan als je koorts hebt. En je moet vaak je handen wassen. Je collega’s zullen je dankbaar zijn!']
      ],
      gl: [['to last', 'duren'], ['a cure', 'een geneesmiddel'], ['honey', 'honing']],
      q: [
        { t: 'mc', q: 'How long does a cold usually last?', o: ['About a week', 'About a month', 'One day'] },
        { t: 'mc', q: 'What is good for a sore throat?', o: ['Tea with honey', 'Coffee', 'Cold water'] },
        { t: 'mc', q: 'When should you stay home?', o: ['When you have a fever', 'Always', 'Never'] }
      ]
    },
    say: [["I don't feel well.", 'Ik voel me niet lekker.'], ['I have a headache.', 'Ik heb hoofdpijn.'], ['What should I do?', 'Wat moet ik doen?'], ['Get well soon!', 'Beterschap!']],
    task: { nl: 'Een Amerikaanse vriend is ziek. Schrijf een berichtje van 4 of 5 zinnen: vraag wat hij heeft en geef minstens drie adviezen met should/shouldn’t.', model: "Hi Mike, I heard you're sick. What's wrong? Do you have the flu? You should stay in bed and drink a lot of tea. You shouldn't go to work tomorrow. Get well soon!" },
    scenario: { nl: 'Je bent ziek op vakantie en gaat naar een kliniek.', role: 'You are Dr. Patel, a kind doctor at an urgent care clinic in Minneapolis. The learner is a Dutch tourist who feels sick. Ask what is wrong, how long they have had the symptoms, and give advice with should/shouldn’t. Keep it simple and reassuring.', goal: 'Leg uit wat je mankeert en begrijp het advies van de dokter.' }
  });

  /* ───────────────────────── A2 · 4 ───────────────────────── */
  U({
    id: 'en-a2-04', level: 'A2', icon: '🏙️', title: 'Bigger and better', nl: 'Steden en plaatsen vergelijken',
    goals: ['Vergelijken met de vergrotende trap: bigger, more expensive', 'De overtreffende trap: the biggest, the most beautiful', 'than en as … as gebruiken'],
    vocab: [
      ['big', 'groot'], ['small', 'klein'], ['old', 'oud'], ['new', 'nieuw'], ['cheap', 'goedkoop'],
      ['expensive', 'duur'], ['busy', 'druk'], ['quiet', 'rustig'], ['safe', 'veilig'], ['dangerous', 'gevaarlijk'],
      ['clean', 'schoon'], ['dirty', 'vies'], ['beautiful', 'mooi'], ['ugly', 'lelijk'], ['interesting', 'interessant'],
      ['modern', 'modern'], ['crowded', 'vol / druk'], ['friendly', 'vriendelijk'], ['a skyscraper', 'een wolkenkrabber'], ['the population', 'de bevolking'],
      ['a neighborhood', 'een wijk'], ['than', 'dan (bij vergelijken)'], ['the best', 'de / het beste'], ['the worst', 'de / het slechtste']
    ],
    grammar: [
      { t: 'De vergrotende trap', es: 'Comparatives',
        html: `<p><b>Korte</b> woorden (één lettergreep): <b>-er</b>: <i>big → bigger, cheap → cheaper, old → older</i>.</p>
<p>Woorden op -y: <b>-ier</b>: <i>busy → busier, friendly → friendlier</i>.</p>
<p><b>Lange</b> woorden (twee of meer lettergrepen): <b>more</b>: <i>more expensive, more interesting, more beautiful</i>.</p>
<p>Vergelijken doe je met <b>than</b>: <i>New York is bigger <b>than</b> Boston.</i> Let op: <b>than</b> (dan, bij vergelijken) en <b>then</b> (dan, daarna) zijn verschillende woorden!</p>
<p>Fout: <s>more bigger</s>, <s>more better</s>. Het is óf -er, óf more.</p>`,
        table: [['bijv. nw.', 'vergrotende trap'], ['cheap', 'cheaper'], ['big', 'bigger'], ['busy', 'busier'], ['expensive', 'more expensive'], ['good', 'better'], ['bad', 'worse'], ['far', 'farther']],
        sum: 'bigger than, more expensive than, better than.',
        ex: [['Amsterdam is smaller than New York.', 'Amsterdam is kleiner dan New York.'], ['Boston is more expensive than Detroit.', 'Boston is duurder dan Detroit.']] },
      { t: 'De overtreffende trap', es: 'Superlatives',
        html: `<p>De overtreffende trap krijgt altijd <b>the</b>: <i><b>the</b> biggest, <b>the</b> cheapest, <b>the</b> busiest, <b>the most</b> expensive</i>.</p>
<p>Onregelmatig: <i>good → better → <b>the best</b>, bad → worse → <b>the worst</b></i>.</p>
<p>Na de overtreffende trap gebruik je <b>in</b> bij een plaats: <i>the tallest building <b>in</b> the world</i> (niet <s>of the world</s>).</p>
<p><b>as … as</b> = even … als: <i>Chicago is not <b>as</b> big <b>as</b> New York.</i></p>`,
        table: [['bijv. nw.', 'vergrotend', 'overtreffend'], ['tall', 'taller', 'the tallest'], ['busy', 'busier', 'the busiest'], ['beautiful', 'more beautiful', 'the most beautiful'], ['good', 'better', 'the best'], ['bad', 'worse', 'the worst']],
        ex: [["It's the tallest building in the city.", 'Het is het hoogste gebouw van de stad.'], ['This is the best pizza in New York!', 'Dit is de beste pizza van New York!']] }
    ],
    dialogue: {
      t: 'New York or San Francisco?', place: 'Online 💻',
      lines: [
        ['Hanna', "I want to live in the US for a year. New York or San Francisco?", 'Ik wil een jaar in de VS wonen. New York of San Francisco?'],
        ['Matt', "Hmm. New York is bigger and busier. It's the most exciting city in the world!", 'Hmm. New York is groter en drukker. Het is de spannendste stad ter wereld!'],
        ['Hanna', 'Is it more expensive than San Francisco?', 'Is het duurder dan San Francisco?'],
        ['Matt', "Not really. They're both very expensive. San Francisco is maybe even worse.", 'Niet echt. Ze zijn allebei heel duur. San Francisco is misschien nog erger.'],
        ['Hanna', 'And the weather?', 'En het weer?'],
        ['Matt', "San Francisco is warmer in winter, but it's often foggy. New York is colder in winter and hotter in summer.", 'San Francisco is warmer in de winter, maar het is vaak mistig. New York is kouder in de winter en heter in de zomer.'],
        ['Hanna', 'Which city is better for biking?', 'Welke stad is beter om te fietsen?'],
        ['Matt', "San Francisco has the steepest hills in the country. Good luck with that!", 'San Francisco heeft de steilste heuvels van het land. Succes daarmee!'],
        ['Hanna', "Okay, New York it is. It's flatter!", 'Oké, dan wordt het New York. Dat is vlakker!']
      ],
      q: [
        { t: 'mc', q: 'Which city is bigger and busier?', o: ['New York', 'San Francisco', 'They are the same'] },
        { t: 'mc', q: 'What is the problem with biking in San Francisco?', o: ['The hills are very steep', 'There is too much rain', 'There are no bike lanes'] },
        { t: 'mc', q: 'Which city does Hanna choose?', o: ['New York', 'San Francisco', 'Neither'] }
      ]
    },
    culture: { t: 'Amerikaanse steden', html: `<p>De grootste stad van de VS is <b>New York</b> (ruim 8 miljoen inwoners), gevolgd door <b>Los Angeles</b> en <b>Chicago</b>. Maar de hoofdstad is <b>Washington, D.C.</b>, niet New York!</p>
<p>New York heette vroeger <b>Nieuw-Amsterdam</b>: het was een Nederlandse kolonie. Namen als <i>Brooklyn</i> (Breukelen), <i>Harlem</i> (Haarlem) en <i>Wall Street</i> (de wal) komen uit het Nederlands.</p>
<p>🏙️ Amerikanen zeggen <i>the tallest building</i>, niet <i>the highest</i>, bij gebouwen en mensen.</p>` },
    ex: [
      { t: 'cloze', s: 'Texas is ___ than California.', a: ['bigger'], o: ['bigger', 'more big', 'biger'], nl: 'Texas is groter dan Californië.', tag: 'en-comp' },
      { t: 'cloze', s: 'This hotel is more expensive ___ that one.', a: ['than'], o: ['than', 'then', 'as'], nl: 'Dit hotel is duurder dan dat.', tag: 'en-comp' },
      { t: 'cloze', s: 'My new job is ___ than my old job.', a: ['better'], o: ['better', 'more good', 'gooder'], nl: 'Mijn nieuwe baan is beter dan mijn oude.', tag: 'en-comp' },
      { t: 'cloze', s: 'Saturday is the ___ day at the store.', a: ['busiest'], o: ['busiest', 'most busy', 'busyest'], nl: 'Zaterdag is de drukste dag in de winkel.', tag: 'en-sup' },
      { t: 'cloze', s: "It's the most beautiful beach ___ Florida.", a: ['in'], o: ['in', 'of', 'from'], nl: 'Het is het mooiste strand van Florida.', tag: 'en-sup' },
      { t: 'cloze', s: "That was the ___ movie I've ever seen.", a: ['worst'], o: ['worst', 'baddest', 'most bad'], nl: 'Dat was de slechtste film die ik ooit heb gezien.', tag: 'en-sup' },
      { t: 'cloze', s: "Boston isn't as big ___ New York.", a: ['as'], o: ['as', 'than', 'like'], nl: 'Boston is niet zo groot als New York.', tag: 'en-comp' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Amsterdam is more interesting than Rotterdam.', 'Amsterdam is interestinger than Rotterdam.', 'Amsterdam is more interesting then Rotterdam.'], tag: 'en-comp' },
      { t: 'mc', q: 'Wat was de oude naam van New York?', o: ['Nieuw-Amsterdam', 'Nieuw-Rotterdam', 'New Holland City'], tag: 'en-comp' },
      { t: 'mc', q: '«Het hoogste gebouw» in het Engels:', o: ['the tallest building', 'the highest building', 'the most tall building'], tag: 'en-sup' },
      { t: 'tr', nl: 'Mijn broer is ouder dan ik.', a: ['My brother is older than me.', 'My brother is older than I am.', 'My brother is older than I.'], tag: 'en-comp' },
      { t: 'tr', nl: 'Dit is de beste koffie van de stad.', a: ['This is the best coffee in the city.', 'This is the best coffee in town.'], tag: 'en-sup' },
      { t: 'order', s: 'Chicago is colder than Miami in winter.', nl: 'Chicago is in de winter kouder dan Miami.', tag: 'en-comp' },
      { t: 'match', p: [['safe', 'veilig'], ['dangerous', 'gevaarlijk'], ['quiet', 'rustig'], ['a skyscraper', 'een wolkenkrabber'], ['a neighborhood', 'een wijk']], tag: 'en-comp' }
    ],
    reading: {
      t: 'Fun facts about the USA', type: 'Quiz',
      p: [
        ["Alaska is the biggest state in the US. It is more than twice as big as Texas. But it has one of the smallest populations.", 'Alaska is de grootste staat van de VS. Het is meer dan twee keer zo groot als Texas. Maar het heeft een van de kleinste bevolkingen.'],
        ["The hottest place is Death Valley in California. In 1913 it was 134 degrees Fahrenheit there: that's 57 degrees Celsius!", 'De heetste plek is Death Valley in Californië. In 1913 was het daar 134 graden Fahrenheit: dat is 57 graden Celsius!'],
        ["The busiest airport in the world is in Atlanta, not in New York or Los Angeles. And the oldest city? St. Augustine, Florida, from 1565.", 'Het drukste vliegveld ter wereld is in Atlanta, niet in New York of Los Angeles. En de oudste stad? St. Augustine, Florida, uit 1565.']
      ],
      gl: [['twice as big as', 'twee keer zo groot als'], ['a state', 'een staat'], ['degrees', 'graden']],
      q: [
        { t: 'mc', q: 'What is the biggest state?', o: ['Alaska', 'Texas', 'California'] },
        { t: 'mc', q: 'Where is the busiest airport in the world?', o: ['Atlanta', 'New York', 'Los Angeles'] },
        { t: 'mc', q: 'What is the oldest city in the US?', o: ['St. Augustine', 'Boston', 'New York'] }
      ]
    },
    say: [['New York is bigger than Amsterdam.', 'New York is groter dan Amsterdam.'], ['This is the best pizza in town!', 'Dit is de beste pizza van de stad!'], ['It’s more expensive than I thought.', 'Het is duurder dan ik dacht.'], ['Which city is better?', 'Welke stad is beter?']],
    task: { nl: 'Vergelijk jouw woonplaats met een Amerikaanse stad die je kent (of wilt bezoeken) in 5 zinnen. Gebruik minstens drie vergrotende trappen en één overtreffende trap.', model: "I live in Groningen. It's much smaller than Chicago and it's quieter. Chicago is colder in winter, but it's hotter in summer. Groningen is cheaper and better for biking. But Chicago has the best deep-dish pizza in the world!" },
    scenario: { nl: 'Je twijfelt tussen twee Amerikaanse steden om te wonen.', role: 'You are Matt, an American friend who has lived in many US cities. The learner wants to move to the US and asks for advice comparing cities (cost, weather, size, safety, things to do). Use lots of comparatives and superlatives, and ask the learner what is most important to them.', goal: 'Vergelijk twee steden en kies er één, met redenen.' }
  });

  /* ───────────────────────── A2 · 5 ───────────────────────── */
  U({
    id: 'en-a2-05', level: 'A2', icon: '🌟', title: 'Have you ever…?', nl: 'Ervaringen',
    goals: ['Over ervaringen praten met de present perfect', 'ever, never, already en yet gebruiken', 'Het verschil tussen present perfect en past simple'],
    vocab: [
      ['ever', 'ooit'], ['never', 'nooit'], ['already', 'al'], ['yet', 'al (in vragen) / nog (niet)'], ['just', 'net / zojuist'],
      ['once', 'één keer'], ['twice', 'twee keer'], ['three times', 'drie keer'], ['to try', 'proberen'], ['to taste', 'proeven'],
      ['to climb', 'beklimmen'], ['to ride', 'rijden (op een paard / fiets)'], ['to win', 'winnen'], ['to break', 'breken'], ['to meet', 'ontmoeten'],
      ['a famous person', 'een beroemd persoon'], ['an experience', 'een ervaring'], ['a bucket list', 'een lijstje van dingen die je ooit wilt doen'], ['exciting', 'spannend'], ['scary', 'eng'],
      ['been (to)', 'geweest (naar)'], ['seen', 'gezien'], ['done', 'gedaan'], ['eaten', 'gegeten']
    ],
    grammar: [
      { t: 'Present perfect: have + voltooid deelwoord', es: 'Present perfect',
        html: `<p>De <b>present perfect</b> maak je met <b>have/has</b> + voltooid deelwoord: <i>I <b>have seen</b>, she <b>has been</b>, we'<b>ve eaten</b>.</i></p>
<p>Je gebruikt hem voor <b>ervaringen</b> in je leven, zonder te zeggen wannéér: <i>I'<b>ve been</b> to New York. She'<b>s</b> never <b>eaten</b> sushi.</i></p>
<p>Regelmatig: zelfde vorm als de verleden tijd (<i>visited, tried</i>). Onregelmatig: aparte vorm (<i>go – went – <b>gone/been</b>, see – saw – <b>seen</b>, eat – ate – <b>eaten</b></i>).</p>
<p><b>been to</b> = er geweest (en weer terug). <b>gone to</b> = erheen gegaan (en nog daar): <i>She's <b>gone</b> to Paris.</i> (Ze is nu in Parijs.)</p>`,
        table: [['werkwoord', 'past simple', 'voltooid deelwoord'], ['be', 'was / were', 'been'], ['see', 'saw', 'seen'], ['eat', 'ate', 'eaten'], ['do', 'did', 'done'], ['try', 'tried', 'tried'], ['meet', 'met', 'met']],
        sum: "I've been to New York. Have you ever tried sushi?",
        ex: [["I've been to the US three times.", 'Ik ben drie keer in de VS geweest.'], ["She's never seen snow.", 'Ze heeft nog nooit sneeuw gezien.']] },
      { t: 'Ever, never, already, yet', es: 'Ever / never / already / yet',
        html: `<p><b>ever</b> (ooit) in vragen: <i>Have you <b>ever</b> been to Canada?</i></p>
<p><b>never</b> (nooit): <i>I've <b>never</b> been to Canada.</i> (Niet <s>I haven't never</s>.)</p>
<p><b>already</b> (al): <i>I've <b>already</b> eaten.</i> <b>yet</b> (al, in vragen / nog niet): <i>Have you eaten <b>yet</b>? I haven't eaten <b>yet</b>.</i> <b>Yet</b> staat aan het eind van de zin.</p>
<p><b>just</b> (net): <i>I've <b>just</b> arrived.</i></p>`,
        table: [['woord', 'plek', 'voorbeeld'], ['ever', 'vraag', 'Have you ever…?'], ['never', 'bevestigende zin', "I've never…"], ['already', 'vóór het deelwoord', "I've already done it."], ['yet', 'eind van vraag/ontkenning', "Haven't you finished yet?"], ['just', 'vóór het deelwoord', "She's just left."]],
        ex: [['Have you finished your homework yet?', 'Heb je je huiswerk al af?'], ["I've already seen this movie.", 'Ik heb deze film al gezien.']] },
      { t: 'Present perfect of past simple?', es: 'Present perfect vs past simple',
        html: `<p>De grootste valkuil voor Nederlanders: in het Nederlands zeg je «ik heb hem gisteren gezien», maar in het Engels mag de present perfect <b>niet</b> met een afgerond moment.</p>
<p><b>Present perfect</b>: ervaring, géén tijdstip: <i>I'<b>ve been</b> to Chicago.</i></p>
<p><b>Past simple</b>: met een tijdstip of afgerond verhaal: <i>I <b>went</b> to Chicago <b>in 2019</b>.</i></p>
<p>Typisch gesprek: <i>Have you ever been to Chicago? — Yes, I have. I <b>went</b> there last year. It <b>was</b> great.</i> Eerst present perfect (de ervaring), dan past simple (de details).</p>`,
        table: [['present perfect', 'past simple'], ["I've been to Paris.", 'I went to Paris last year.'], ["Have you seen the movie?", 'When did you see it?'], ["I've lost my keys.", 'I lost my keys yesterday.']],
        ex: [["Have you ever met a famous person? — Yes, I met Tom Hanks in 2018.", 'Heb je ooit een beroemdheid ontmoet? — Ja, ik heb Tom Hanks in 2018 ontmoet.'], ["I've tried sushi, but I didn't like it.", 'Ik heb sushi geprobeerd, maar ik vond het niet lekker.']] }
    ],
    dialogue: {
      t: 'Never have I ever', place: 'A party in Austin 🇺🇸',
      lines: [
        ['Tyler', "Let's play a game. Have you ever been to Las Vegas?", 'Laten we een spelletje doen. Ben jij ooit in Las Vegas geweest?'],
        ['Merel', "No, I haven't. But I've been to New York twice.", 'Nee. Maar ik ben twee keer in New York geweest.'],
        ['Tyler', 'Cool! Have you ever eaten a real Texas barbecue?', 'Gaaf! Heb je ooit een echte Texaanse barbecue gegeten?'],
        ['Merel', "Yes! I tried it yesterday. It was delicious. Have you ever eaten Dutch food?", 'Ja! Ik heb het gisteren geprobeerd. Het was heerlijk. Heb jij ooit Nederlands eten gegeten?'],
        ['Tyler', "I've had stroopwafels. I love them! Have you ever ridden a horse?", 'Ik heb stroopwafels gehad. Ik ben er dol op! Heb jij ooit paardgereden?'],
        ['Merel', "Never. But I've ridden a bike every day of my life!", 'Nooit. Maar ik heb elke dag van mijn leven gefietst!'],
        ['Tyler', "Ha! Have you seen the bats in Austin yet?", 'Ha! Heb je de vleermuizen in Austin al gezien?'],
        ['Merel', "Not yet. Is it scary?", 'Nog niet. Is het eng?'],
        ['Tyler', "No, it's amazing! A million bats fly out from under a bridge every evening. Let's go tomorrow.", 'Nee, het is geweldig! Elke avond vliegen er een miljoen vleermuizen onder een brug vandaan. Laten we morgen gaan.']
      ],
      q: [
        { t: 'mc', q: 'How many times has Merel been to New York?', o: ['Twice', 'Never', 'Once'] },
        { t: 'mc', q: 'When did Merel try Texas barbecue?', o: ['Yesterday', 'Last year', 'Never'] },
        { t: 'mc', q: 'What has Merel never done?', o: ['Ridden a horse', 'Ridden a bike', 'Eaten barbecue'] }
      ]
    },
    culture: { t: 'Bucket lists', html: `<p>Een <b>bucket list</b> is een lijstje met dingen die je wilt doen voordat je sterft (<i>before you kick the bucket</i>). Amerikanen praten er graag over.</p>
<p>Populaire Amerikaanse bucket-list-items: de <b>Grand Canyon</b> zien, <b>Route 66</b> rijden, het <b>noorderlicht</b> zien in Alaska, een <b>baseball game</b> bezoeken en een echte <b>Thanksgiving</b> vieren.</p>
<p>🦇 In Austin wonen de meeste stadsvleermuizen van Noord-Amerika: elke zomeravond vliegen er zo’n 1,5 miljoen onder de Congress Avenue Bridge vandaan.</p>` },
    ex: [
      { t: 'cloze', s: 'Have you ever ___ to Canada?', a: ['been'], o: ['been', 'went', 'gone'], nl: 'Ben je ooit in Canada geweest?', tag: 'en-pp' },
      { t: 'cloze', s: "I've never ___ sushi.", a: ['eaten'], o: ['eaten', 'ate', 'eat'], nl: 'Ik heb nog nooit sushi gegeten.', tag: 'en-pp' },
      { t: 'cloze', s: 'She ___ seen that movie three times.', a: ['has'], o: ['has', 'have', 'is'], nl: 'Ze heeft die film drie keer gezien.', tag: 'en-pp' },
      { t: 'cloze', s: "Have you finished your report ___?", a: ['yet'], o: ['yet', 'already', 'ever'], nl: 'Heb je je verslag al af?', tag: 'en-ever' },
      { t: 'cloze', s: "I've ___ done it. Look!", a: ['already'], o: ['already', 'yet', 'ever'], nl: 'Ik heb het al gedaan. Kijk!', tag: 'en-ever' },
      { t: 'cloze', s: 'I ___ to Chicago in 2019.', a: ['went'], o: ['went', 'have been', 'have gone'], nl: 'Ik ben in 2019 naar Chicago gegaan.', tag: 'en-pp' },
      { t: 'cloze', s: 'We’ve ___ arrived. Give us a minute!', a: ['just'], o: ['just', 'yet', 'ever'], nl: 'We zijn net aangekomen. Geef ons even!', tag: 'en-ever' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I saw that movie last week.', 'I have seen that movie last week.', 'I have saw that movie last week.'], tag: 'en-pp' },
      { t: 'mc', q: '«She’s gone to Paris» betekent…', o: ['Ze is nu in Parijs.', 'Ze is in Parijs geweest en weer terug.', 'Ze gaat naar Parijs.'], tag: 'en-pp' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["I've never been there.", "I haven't never been there.", "I've ever been there."], tag: 'en-ever' },
      { t: 'tr', nl: 'Ben je ooit in Amerika geweest?', a: ['Have you ever been to America?', 'Have you ever been to the US?', 'Have you ever been to the USA?', 'Have you ever been to the United States?'], tag: 'en-pp' },
      { t: 'tr', nl: 'Ik heb nog niet gegeten.', a: ["I haven't eaten yet.", 'I have not eaten yet.'], tag: 'en-ever' },
      { t: 'tr', nl: 'Hij heeft zijn sleutels verloren.', a: ["He's lost his keys.", 'He has lost his keys.', 'He lost his keys.'], tag: 'en-pp' },
      { t: 'order', s: 'Have you ever met a famous person?', nl: 'Heb jij ooit een beroemdheid ontmoet?', tag: 'en-pp' },
      { t: 'match', p: [['once', 'één keer'], ['twice', 'twee keer'], ['scary', 'eng'], ['to taste', 'proeven'], ['an experience', 'een ervaring']], tag: 'en-ever' }
    ],
    reading: {
      t: 'My bucket list', type: 'Blog',
      p: [
        ["I'm 40 this year, so I made a bucket list. Some things I've already done: I've climbed a mountain, I've run a marathon and I've seen the Northern Lights.", 'Ik word dit jaar 40, dus ik heb een bucket list gemaakt. Sommige dingen heb ik al gedaan: ik heb een berg beklommen, ik heb een marathon gelopen en ik heb het noorderlicht gezien.'],
        ["But I've never been to Japan, I've never learned to surf and I've never seen a baseball game in a real stadium.", 'Maar ik ben nog nooit in Japan geweest, ik heb nooit leren surfen en ik heb nog nooit een honkbalwedstrijd in een echt stadion gezien.'],
        ["Last week I bought tickets for a Yankees game. I haven't been yet, but I'm so excited! One thing off the list.", 'Vorige week kocht ik kaartjes voor een wedstrijd van de Yankees. Ik ben nog niet geweest, maar ik heb er zo’n zin in! Weer één ding van de lijst.']
      ],
      gl: [['a marathon', 'een marathon'], ['the Northern Lights', 'het noorderlicht'], ['to surf', 'surfen']],
      q: [
        { t: 'mc', q: 'What has the writer already done?', o: ['Run a marathon', 'Been to Japan', 'Learned to surf'] },
        { t: 'mc', q: 'What did the writer buy last week?', o: ['Tickets for a Yankees game', 'A surfboard', 'A plane ticket to Japan'] },
        { t: 'mc', q: 'Has the writer been to the baseball game yet?', o: ["No, not yet", 'Yes, last week', 'Yes, many times'] }
      ]
    },
    say: [['Have you ever been to New York?', 'Ben je ooit in New York geweest?'], ["I've never tried it.", 'Ik heb het nooit geprobeerd.'], ["I haven't finished yet.", 'Ik ben nog niet klaar.'], ["I've just arrived.", 'Ik ben net aangekomen.']],
    task: { nl: 'Schrijf 5 zinnen over je eigen ervaringen: drie dingen die je al gedaan hebt (I’ve…) en twee die je nog nooit gedaan hebt (I’ve never…). Geef bij één ervaring een detail in de past simple.', model: "I've been to the United States twice. I went to Florida in 2022 and it was amazing. I've also run a half marathon. I've never eaten a hot dog at a baseball game. And I've never seen a real cowboy!" },
    scenario: { nl: 'Je speelt «Have you ever…?» met Amerikaanse vrienden.', role: 'You are Tyler, a fun American from Austin, Texas. Play a «Have you ever…?» game with the learner. Ask about experiences (travel, food, sports, famous people). When they say yes, ask follow-up questions in the past simple (When? Where? Was it fun?). Answer their questions too.', goal: 'Vertel over je ervaringen en stel zelf vragen met Have you ever…?' }
  });
})(window.SPT);
