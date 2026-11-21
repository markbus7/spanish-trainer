/* Engels voor Nederlandstaligen — niveau B1, units 6–10 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-reported': 'indirecte rede (she said that…)', 'en-pastperf': 'past perfect (had done)', 'en-deduce': 'must / might / can’t (vermoedens)',
    'en-gerund': '-ing of to (enjoy doing / want to do)', 'en-phrasal': 'phrasal verbs', 'en-formal': 'formele e-mail en klachten'
  });

  /* ───────────────────────── B1 · 6 ───────────────────────── */
  U({
    id: 'en-b1-06', level: 'B1', icon: '💬', title: 'She said that…', nl: 'Vertellen wat iemand zei',
    goals: ['Indirecte rede: een tijd terug (is → was)', 'say en tell correct gebruiken', 'Vragen en verzoeken doorgeven: asked if, told me to'],
    vocab: [
      ['to say', 'zeggen'], ['to tell', 'vertellen / zeggen tegen'], ['to ask', 'vragen'], ['to explain', 'uitleggen'], ['to promise', 'beloven'],
      ['to complain', 'klagen'], ['to mention', 'noemen / vermelden'], ['to reply', 'antwoorden'], ['to admit', 'toegeven'], ['to deny', 'ontkennen'],
      ['to whisper', 'fluisteren'], ['to shout', 'schreeuwen'], ['gossip', 'roddel(s)'], ['a rumor', 'een gerucht'], ['a message', 'een bericht'],
      ['apparently', 'blijkbaar'], ['according to', 'volgens'], ['the day before', 'de dag ervoor'], ['the next day', 'de volgende dag'], ['that day', 'die dag'],
      ['to let someone know', 'iemand laten weten'], ['to pass on', 'doorgeven'], ['to find out', 'erachter komen'], ['to keep a secret', 'een geheim bewaren']
    ],
    grammar: [
      { t: 'Indirecte rede: één tijd terug', es: 'Reported speech',
        html: `<p>Vertel je wat iemand <b>zei</b> (verleden tijd), dan gaat de tijd in de bijzin meestal <b>één stap terug</b>:</p>
<p><i>«I <b>am</b> tired.»</i> → <i>She said (that) she <b>was</b> tired.</i></p>
<p><i>«I <b>live</b> in Boston.»</i> → <i>He said he <b>lived</b> in Boston.</i></p>
<p><i>«I <b>will</b> call you.»</i> → <i>She said she <b>would</b> call me.</i> <i>«I <b>can</b> help.»</i> → <i>He said he <b>could</b> help.</i></p>
<p>Ook <b>voornaamwoorden</b> en <b>tijdwoorden</b> veranderen: <i>«I'll see you <b>tomorrow</b>»</i> → <i>She said she'd see <b>me</b> <b>the next day</b>.</i></p>
<p>In spreektaal blijft de tijd vaak gelijk als iets nog steeds waar is: <i>He said he <b>lives</b> in Boston.</i></p>`,
        table: [['direct', 'indirect'], ['«I am…»', 'she said she was…'], ['«I work…»', 'she said she worked…'], ['«I will…»', 'she said she would…'], ['«I can…»', 'she said she could…'], ['«I have done…» / «I did…»', 'she said she had done…']],
        sum: '«I’m tired.» → She said she was tired.',
        ex: [['He said he was moving to Texas.', 'Hij zei dat hij naar Texas ging verhuizen.'], ['She told me she would be late.', 'Ze zei tegen me dat ze te laat zou zijn.']] },
      { t: 'Say of tell?', es: 'Say vs tell',
        html: `<p><b>say</b> = zeggen (zonder persoon erachter): <i>She <b>said</b> that she was busy.</i> Met persoon: <i>She said <b>to me</b>…</i> (minder gebruikelijk).</p>
<p><b>tell</b> + persoon = zeggen tegen / vertellen aan: <i>She <b>told me</b> that she was busy.</i> Niet <s>She said me</s>!</p>
<p>Vaste combinaties met tell: <i>tell the truth, tell a lie, tell a story, tell a joke, tell the time</i>.</p>
<p>Vaste combinaties met say: <i>say hello, say goodbye, say sorry, say something, say no</i>.</p>`,
        table: [['say', 'tell'], ['She said (that)…', 'She told me (that)…'], ['say hello / goodbye', 'tell the truth / a lie'], ['say something', 'tell a story / a joke'], ['say sorry', 'tell someone a secret']],
        ex: [["He told me a funny story.", 'Hij vertelde me een grappig verhaal.'], ["She didn't say goodbye.", 'Ze heeft geen gedag gezegd.']] },
      { t: 'Vragen en opdrachten doorgeven', es: 'Reported questions and requests',
        html: `<p><b>Ja/nee-vragen</b>: <b>asked if / whether</b>: <i>«Are you coming?»</i> → <i>He asked <b>if</b> I was coming.</i></p>
<p><b>Vraagwoordvragen</b>: vraagwoord + gewone woordvolgorde (géén vraagvorm): <i>«Where do you live?»</i> → <i>She asked where I <b>lived</b>.</i> Niet <s>where did I live</s>.</p>
<p><b>Opdrachten en verzoeken</b>: <b>told / asked + persoon + to</b>: <i>«Close the door.»</i> → <i>He <b>told me to close</b> the door.</i> <i>«Please don't smoke.»</i> → <i>She <b>asked us not to smoke</b>.</i></p>`,
        table: [['direct', 'indirect'], ['«Are you hungry?»', 'He asked if I was hungry.'], ['«What time is it?»', 'She asked what time it was.'], ['«Sit down.»', 'He told me to sit down.'], ['«Please wait.»', 'She asked me to wait.'], ["«Don't be late.»", 'He told us not to be late.']],
        ex: [['The officer asked where I was going.', 'De agent vroeg waar ik naartoe ging.'], ['My boss told me to send the report today.', 'Mijn baas zei dat ik het verslag vandaag moest sturen.']] }
    ],
    dialogue: {
      t: 'Office gossip', place: 'Dallas, Texas 🇺🇸',
      lines: [
        ['Jen', "Did you hear about Brian? He told me he was leaving the company!", 'Heb je het gehoord van Brian? Hij zei tegen me dat hij het bedrijf verlaat!'],
        ['Maarten', 'Really? What did he say exactly?', 'Echt? Wat zei hij precies?'],
        ['Jen', "He said he had found a new job in Austin. And he said he would start next month.", 'Hij zei dat hij een nieuwe baan in Austin had gevonden. En hij zei dat hij volgende maand zou beginnen.'],
        ['Maarten', "Wow. Did he say why?", 'Wauw. Zei hij waarom?'],
        ['Jen', "He said the salary was much better. And he told me not to tell anyone yet.", 'Hij zei dat het salaris veel beter was. En hij zei dat ik het nog aan niemand mocht vertellen.'],
        ['Maarten', "Jen! You just told me!", 'Jen! Je hebt het me net verteld!'],
        ['Jen', "Oops. Well, you're not anyone, you're my friend. Can you keep a secret?", 'Oeps. Nou ja, jij bent niet zomaar iemand, jij bent mijn vriend. Kun je een geheim bewaren?'],
        ['Maarten', "Of course. But the boss asked me this morning if I knew anything about Brian's plans.", 'Natuurlijk. Maar de baas vroeg me vanochtend of ik iets wist over de plannen van Brian.'],
        ['Jen', "What did you tell her?", 'Wat heb je tegen haar gezegd?'],
        ['Maarten', "I said I didn't know anything. And that was true… until now!", 'Ik zei dat ik niets wist. En dat was waar… tot nu!']
      ],
      q: [
        { t: 'mc', q: 'Where did Brian find a new job?', o: ['In Austin', 'In Dallas', 'In Houston'] },
        { t: 'mc', q: 'What did Brian tell Jen?', o: ['Not to tell anyone yet', 'To apply for his job', 'To call the boss'] },
        { t: 'mc', q: 'What did the boss ask Maarten?', o: ["If he knew anything about Brian's plans", 'If he wanted a new job', 'Where Brian was'] }
      ]
    },
    culture: { t: 'Texas: alles is groter', html: `<p>Texas is na Alaska de grootste staat van de VS: groter dan Frankrijk. Het motto is <i>Everything's bigger in Texas</i>: grotere auto’s, grotere steaks, grotere hoeden.</p>
<p>Texanen staan bekend om hun <b>gastvrijheid</b> en hun accent, met woorden als <i>y'all</i> (jullie) en <i>fixin' to</i> (op het punt staan).</p>
<p>💬 Op Amerikaanse werkplekken is roddelen (<i>office gossip</i>) niet gewaardeerd. Vertel een geheim niet door met <i>«He told me not to tell anyone, but…»</i>!</p>` },
    ex: [
      { t: 'cloze', s: '«I’m hungry.» → She said she ___ hungry.', a: ['was'], o: ['was', 'is', 'were'], nl: 'Ze zei dat ze honger had.', tag: 'en-reported' },
      { t: 'cloze', s: '«I will call you.» → He said he ___ call me.', a: ['would'], o: ['would', 'will', 'wants'], nl: 'Hij zei dat hij me zou bellen.', tag: 'en-reported' },
      { t: 'cloze', s: 'She ___ me that she was tired.', a: ['told'], o: ['told', 'said', 'say'], nl: 'Ze zei tegen me dat ze moe was.', tag: 'en-reported' },
      { t: 'cloze', s: 'He ___ that he was busy.', a: ['said'], o: ['said', 'told', 'told me to'], nl: 'Hij zei dat hij het druk had.', tag: 'en-reported' },
      { t: 'cloze', s: 'She asked ___ I wanted coffee.', a: ['if'], o: ['if', 'that', 'what'], nl: 'Ze vroeg of ik koffie wilde.', tag: 'en-reported' },
      { t: 'cloze', s: 'The teacher told us ___ be quiet.', a: ['to'], o: ['to', 'that', 'for'], nl: 'De leraar zei dat we stil moesten zijn.', tag: 'en-reported' },
      { t: 'cloze', s: "Don't tell a ___. Tell me the truth!", a: ['lie'], o: ['lie', 'lying', 'false'], nl: 'Lieg niet. Vertel me de waarheid!', tag: 'en-reported' },
      { t: 'mc', q: '«Where do you work?» → He asked…', o: ['where I worked.', 'where did I work.', 'where do I work.'], tag: 'en-reported' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['She told me the news.', 'She said me the news.', 'She told to me the news.'], tag: 'en-reported' },
      { t: 'mc', q: '«Please don’t park here.» → She asked us…', o: ['not to park there.', "don't park there.", 'to not parking here.'], tag: 'en-reported' },
      { t: 'mc', q: '«Apparently» betekent…', o: ['blijkbaar', 'duidelijk', 'helaas'], tag: 'en-reported' },
      { t: 'tr', nl: 'Hij zei dat hij moe was.', a: ['He said that he was tired.', 'He said he was tired.'], tag: 'en-reported' },
      { t: 'tr', nl: 'Ze vroeg me waar ik woonde.', a: ['She asked me where I lived.', 'She asked where I lived.'], tag: 'en-reported' },
      { t: 'order', s: 'My boss told me to finish the report today.', nl: 'Mijn baas zei dat ik het verslag vandaag moest afmaken.', tag: 'en-reported' },
      { t: 'match', p: [['to whisper', 'fluisteren'], ['to admit', 'toegeven'], ['to deny', 'ontkennen'], ['a rumor', 'een gerucht'], ['according to', 'volgens']], tag: 'en-reported' }
    ],
    reading: {
      t: 'The interview', type: 'E-mail aan een vriendin',
      p: [
        ["Hi Sara! I had my job interview at the museum today. The manager was really nice. She asked me why I wanted to work there and what I knew about American art.", 'Hoi Sara! Ik had vandaag mijn sollicitatiegesprek bij het museum. De manager was heel aardig. Ze vroeg me waarom ik daar wilde werken en wat ik wist over Amerikaanse kunst.'],
        ["I told her that I had studied art history in Leiden and that I loved Edward Hopper. She said that Hopper was her favorite painter too!", 'Ik vertelde haar dat ik kunstgeschiedenis in Leiden had gestudeerd en dat ik dol was op Edward Hopper. Ze zei dat Hopper ook haar favoriete schilder was!'],
        ["At the end, she said they would make a decision next week. She asked me to send her my references. Fingers crossed! Love, Eva", 'Aan het eind zei ze dat ze volgende week een besluit zouden nemen. Ze vroeg me om haar mijn referenties te sturen. Duimen maar! Liefs, Eva']
      ],
      gl: [['references', 'referenties'], ['a decision', 'een besluit'], ['Fingers crossed!', 'Duimen maar!']],
      q: [
        { t: 'mc', q: 'What did the manager ask Eva?', o: ['Why she wanted to work there', 'How old she was', 'Where she lived'] },
        { t: 'mc', q: "Who is the manager's favorite painter?", o: ['Edward Hopper', 'Rembrandt', 'Van Gogh'] },
        { t: 'mc', q: 'What did the manager ask Eva to send?', o: ['Her references', 'Her photos', 'Her passport'] }
      ]
    },
    say: [['She said she was tired.', 'Ze zei dat ze moe was.'], ['He told me to wait.', 'Hij zei dat ik moest wachten.'], ['They asked if we were ready.', 'Ze vroegen of we klaar waren.'], ['Can you keep a secret?', 'Kun je een geheim bewaren?']],
    task: { nl: 'Vertel in 5 zinnen over een gesprek dat je onlangs had (met een collega, vriend of familielid). Wat zei de ander, wat vroeg hij of zij, en wat zei jij terug? Gebruik said, told, asked if en asked me to.', model: "Yesterday my sister called me. She said she was pregnant! She asked if I wanted to be the godmother. I told her I would love to. Then she asked me not to tell our parents yet, because she wanted to tell them herself." },
    scenario: { nl: 'Je vertelt een collega wat de baas in een vergadering zei.', role: 'You are Jen, a talkative coworker in Dallas. You missed an important meeting. Ask the learner what the boss said, what people asked and what everyone was told to do. Encourage them to use reported speech (She said that…, He asked if…, She told us to…).', goal: 'Vertel na wat er gezegd en gevraagd werd met indirecte rede.' }
  });

  /* ───────────────────────── B1 · 7 ───────────────────────── */
  U({
    id: 'en-b1-07', level: 'B1', icon: '📖', title: 'It had already happened', nl: 'Verhalen vertellen: de past perfect',
    goals: ['De past perfect: had + voltooid deelwoord', 'De volgorde van gebeurtenissen duidelijk maken', 'Een spannend verhaal vertellen met verbindingswoorden'],
    vocab: [
      ['by the time', 'tegen de tijd dat'], ['already', 'al'], ['before', 'voordat / daarvoor'], ['after', 'nadat / daarna'], ['as soon as', 'zodra'],
      ['just', 'net'], ['never before', 'nooit eerder'], ['once upon a time', 'er was eens'], ['in the end', 'uiteindelijk'], ['meanwhile', 'ondertussen'],
      ['to realize', 'beseffen'], ['to notice', 'opmerken'], ['to forget', 'vergeten'], ['to leave', 'vertrekken / laten liggen'], ['to miss', 'missen (bus, trein)'],
      ['to lock', 'op slot doen'], ['to run out of', 'zonder… komen te zitten'], ['a gate', 'een gate / hek'], ['to board', 'aan boord gaan'], ['to take off', 'opstijgen'],
      ['to land', 'landen'], ['embarrassed', 'beschaamd'], ['relieved', 'opgelucht'], ['a disaster', 'een ramp']
    ],
    grammar: [
      { t: 'Past perfect: had + voltooid deelwoord', es: 'Past perfect',
        html: `<p>De <b>past perfect</b> gebruik je voor iets wat <b>nog eerder</b> gebeurde dan een ander moment in het verleden: <b>had + voltooid deelwoord</b>, voor alle personen.</p>
<p><i>When I got to the station, the train <b>had</b> already <b>left</b>.</i> (Eerst vertrok de trein, daarna kwam ik.)</p>
<p>Vergelijk: <i>When I got to the station, the train <b>left</b>.</i> (Ik kwam, en op dat moment vertrok hij.)</p>
<p>Het Nederlands werkt net zo: «De trein <b>was</b> al <b>vertrokken</b>». Alleen gebruikt het Engels altijd <b>had</b>, ook waar het Nederlands «was» zegt: <s>the train was left</s>.</p>`,
        table: [['', 'voorbeeld', 'Nederlands'], ['bevestigend', 'She had already eaten.', 'Ze had al gegeten.'], ['ontkennend', "I hadn't seen it before.", 'Ik had het nog nooit gezien.'], ['vraag', 'Had you met him before?', 'Had je hem al eens ontmoet?'], ['was → had', 'He had gone home.', 'Hij was naar huis gegaan.']],
        sum: 'When I arrived, the train had already left.',
        ex: [["By the time we got to the party, everyone had gone home.", 'Tegen de tijd dat we op het feest aankwamen, was iedereen al naar huis.'], ["I had never seen snow before I moved to Chicago.", 'Ik had nog nooit sneeuw gezien voordat ik naar Chicago verhuisde.']] },
      { t: 'Verhalen vertellen: volgorde', es: 'Storytelling',
        html: `<p>Een goed verhaal gebruikt verschillende tijden samen:</p>
<p><b>Past continuous</b> voor de achtergrond: <i>It <b>was raining</b> and I <b>was walking</b> home.</i></p>
<p><b>Past simple</b> voor de gebeurtenissen: <i>Suddenly I <b>heard</b> a noise.</i></p>
<p><b>Past perfect</b> voor wat daarvóór gebeurde: <i>I <b>realized</b> I <b>had left</b> my keys at the office.</i></p>
<p>Verbindingswoorden: <i>first, then, after that, suddenly, meanwhile, by the time, in the end</i>.</p>`,
        table: [['functie', 'tijd', 'voorbeeld'], ['achtergrond', 'past continuous', 'It was getting dark.'], ['gebeurtenis', 'past simple', 'I opened the door.'], ['nog eerder', 'past perfect', 'Someone had been in the house.']],
        ex: [["I was sitting on the plane when I realized I had forgotten my passport at home.", 'Ik zat in het vliegtuig toen ik besefte dat ik mijn paspoort thuis was vergeten.'], ['In the end, everything turned out fine.', 'Uiteindelijk kwam alles goed.']] }
    ],
    dialogue: {
      t: 'A travel disaster', place: 'O’Hare Airport, Chicago ✈️',
      lines: [
        ['Mike', "You look stressed! What happened?", 'Je ziet er gestrest uit! Wat is er gebeurd?'],
        ['Jasper', "What a day. I was on my way to the airport when I realized I had left my passport at the hotel.", 'Wat een dag. Ik was op weg naar het vliegveld toen ik besefte dat ik mijn paspoort in het hotel had laten liggen.'],
        ['Mike', 'Oh no! Did you go back?', 'O nee! Ben je teruggegaan?'],
        ['Jasper', "Yes, but by the time I got back to the hotel, the cleaner had already put it in lost and found.", 'Ja, maar tegen de tijd dat ik terug was bij het hotel, had de schoonmaker het al bij de gevonden voorwerpen gelegd.'],
        ['Mike', 'And did you make your flight?', 'En heb je je vlucht gehaald?'],
        ['Jasper', "No. When I arrived at the gate, the plane had just taken off.", 'Nee. Toen ik bij de gate aankwam, was het vliegtuig net opgestegen.'],
        ['Mike', "That's terrible. What did you do?", 'Wat vreselijk. Wat heb je gedaan?'],
        ['Jasper', "I booked a new flight for tomorrow. I'd never missed a flight before!", 'Ik heb een nieuwe vlucht voor morgen geboekt. Ik had nog nooit een vlucht gemist!'],
        ['Mike', "Well, look on the bright side: one more night in Chicago. Deep-dish pizza?", 'Nou, kijk naar de positieve kant: nog een nacht in Chicago. Deep-dish pizza?']
      ],
      q: [
        { t: 'mc', q: 'What had Jasper left at the hotel?', o: ['His passport', 'His phone', 'His suitcase'] },
        { t: 'mc', q: 'What had happened when Jasper arrived at the gate?', o: ['The plane had just taken off', 'The flight was delayed', 'The gate had changed'] },
        { t: 'mc', q: 'What does Mike suggest?', o: ['Deep-dish pizza', 'Taking a train', 'Calling the airline'] }
      ]
    },
    culture: { t: 'Chicago', html: `<p><b>Chicago</b> is de derde stad van de VS, aan het Michiganmeer. De bijnaam is <i>The Windy City</i>. De stad is beroemd om zijn architectuur: hier werd in 1885 de eerste wolkenkrabber ter wereld gebouwd.</p>
<p><b>O'Hare</b> is een van de drukste vliegvelden ter wereld. Een gemiste vlucht is geen uitzondering: bij <i>the gate</i> kun je vragen naar <i>the next available flight</i>.</p>
<p>🍕 <b>Deep-dish pizza</b> is een dikke pizza in een diepe pan, met de kaas onder de tomatensaus. New Yorkers vinden het eigenlijk geen pizza: een eeuwige discussie!</p>` },
    ex: [
      { t: 'cloze', s: 'When I got to the station, the train ___ already left.', a: ['had'], o: ['had', 'was', 'has'], nl: 'Toen ik op het station kwam, was de trein al vertrokken.', tag: 'en-pastperf' },
      { t: 'cloze', s: "I'd never ___ a hurricane before.", a: ['seen'], o: ['seen', 'saw', 'see'], nl: 'Ik had nog nooit een orkaan gezien.', tag: 'en-pastperf' },
      { t: 'cloze', s: 'By the time we arrived, the movie ___ started.', a: ['had'], o: ['had', 'has', 'is'], nl: 'Tegen de tijd dat we aankwamen, was de film al begonnen.', tag: 'en-pastperf' },
      { t: 'cloze', s: 'She realized she ___ forgotten her keys.', a: ['had'], o: ['had', 'was', 'have'], nl: 'Ze besefte dat ze haar sleutels was vergeten.', tag: 'en-pastperf' },
      { t: 'cloze', s: 'We ___ out of gas in the middle of the desert.', a: ['ran'], o: ['ran', 'had run', 'run'], nl: 'Midden in de woestijn kwamen we zonder benzine te zitten.', tag: 'en-pastperf' },
      { t: 'cloze', s: "It ___ raining when we left the house.", a: ['was'], o: ['was', 'had', 'did'], nl: 'Het regende toen we het huis verlieten.', tag: 'en-pcont' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['When I arrived, everyone had gone home.', 'When I arrived, everyone was gone home.', 'When I arrived, everyone has gone home.'], tag: 'en-pastperf' },
      { t: 'mc', q: '«When I arrived, she left.» betekent…', o: ['Ze vertrok toen ik aankwam.', 'Ze was al weg toen ik aankwam.', 'Ze vertrekt als ik aankom.'], tag: 'en-pastperf' },
      { t: 'mc', q: '«Opgelucht» in het Engels:', o: ['relieved', 'relaxed', 'released'], tag: 'en-pastperf' },
      { t: 'mc', q: '«Tegen de tijd dat…»:', o: ['by the time', 'until the time', 'at the time that'], tag: 'en-pastperf' },
      { t: 'tr', nl: 'Ik had hem nog nooit ontmoet.', a: ["I had never met him.", "I'd never met him.", "I had never met him before.", "I'd never met him before."], tag: 'en-pastperf' },
      { t: 'tr', nl: 'Het vliegtuig was al opgestegen.', a: ['The plane had already taken off.'], tag: 'en-pastperf' },
      { t: 'order', s: 'I realized that I had left my phone in the taxi.', nl: 'Ik besefte dat ik mijn telefoon in de taxi had laten liggen.', tag: 'en-pastperf' },
      { t: 'match', p: [['meanwhile', 'ondertussen'], ['embarrassed', 'beschaamd'], ['to board', 'aan boord gaan'], ['to notice', 'opmerken'], ['a disaster', 'een ramp']], tag: 'en-pastperf' }
    ],
    reading: {
      t: 'The wrong house', type: 'Kort verhaal',
      p: [
        ["It was two in the morning and it was snowing hard. Tom had been at a party, and he was tired. He walked up to the house, put his key in the door and… it didn't work.", 'Het was twee uur ’s nachts en het sneeuwde hard. Tom was op een feest geweest en hij was moe. Hij liep naar het huis, stak zijn sleutel in de deur en… het werkte niet.'],
        ["He tried again. Nothing. Then a light came on and an old woman opened the door. She was holding a baseball bat. Tom suddenly realized that he had walked to the wrong house!", 'Hij probeerde het nog een keer. Niets. Toen ging er een lamp aan en deed een oude vrouw de deur open. Ze had een honkbalknuppel in haar hand. Tom besefte plotseling dat hij naar het verkeerde huis was gelopen!'],
        ["He had moved to the neighborhood only a week before, and all the houses looked the same in the snow. Luckily, the woman laughed. In the end, she made him a hot chocolate and called him a taxi.", 'Hij was pas een week eerder naar de buurt verhuisd, en in de sneeuw zagen alle huizen er hetzelfde uit. Gelukkig moest de vrouw lachen. Uiteindelijk maakte ze warme chocolademelk voor hem en belde ze een taxi.']
      ],
      gl: [['a baseball bat', 'een honkbalknuppel'], ['to look the same', 'er hetzelfde uitzien'], ['hot chocolate', 'warme chocolademelk']],
      q: [
        { t: 'mc', q: "Why didn't Tom's key work?", o: ['He was at the wrong house', 'The lock was frozen', 'He had the wrong key'] },
        { t: 'mc', q: 'When had Tom moved to the neighborhood?', o: ['Only a week before', 'Years ago', 'That night'] },
        { t: 'mc', q: 'What did the woman do in the end?', o: ['She made him a hot chocolate', 'She called the police', 'She closed the door'] }
      ]
    },
    say: [['The train had already left.', 'De trein was al vertrokken.'], ["I'd never seen anything like it.", 'Ik had nog nooit zoiets gezien.'], ['I realized I had forgotten my keys.', 'Ik besefte dat ik mijn sleutels was vergeten.'], ['In the end, everything was fine.', 'Uiteindelijk was alles goed.']],
    task: { nl: 'Vertel in 6 zinnen een verhaal over een dag waarop alles misging (echt of verzonnen). Gebruik de past continuous voor de achtergrond, de past simple voor wat er gebeurde en minstens twee keer de past perfect.', model: "It was a Monday morning and it was raining. I was rushing to an important meeting when I realized I had left my laptop at home. I ran back, but by the time I got home, my bus had already left. I called a taxi. When I finally arrived, the meeting had started without me. In the end, my boss laughed and said it happens to everyone." },
    scenario: { nl: 'Je vertelt een Amerikaanse vriend over een reis waarbij alles misging.', role: 'You are Mike, a friendly American in Chicago. The learner tells you about a disaster (a missed flight, a lost bag, a bad day). Ask questions about what happened and what had happened before (Had you…? Why hadn’t you…?). React with sympathy and humor.', goal: 'Vertel een verhaal met de juiste volgorde: past continuous, past simple en past perfect.' }
  });

  /* ───────────────────────── B1 · 8 ───────────────────────── */
  U({
    id: 'en-b1-08', level: 'B1', icon: '🕵️', title: 'It must be…', nl: 'Vermoedens uitspreken',
    goals: ['Vermoedens over nu: must, might, could, can’t', 'Vermoedens over het verleden: must have, might have, can’t have', 'Het verschil tussen must (zeker) en must (verplichting)'],
    vocab: [
      ['a clue', 'een aanwijzing'], ['evidence', 'bewijs'], ['a suspect', 'een verdachte'], ['a detective', 'een detective / rechercheur'], ['a mystery', 'een mysterie'],
      ['to solve', 'oplossen'], ['to guess', 'raden'], ['to suppose', 'veronderstellen'], ['certain', 'zeker'], ['possible', 'mogelijk'],
      ['impossible', 'onmogelijk'], ['probably', 'waarschijnlijk'], ['obviously', 'overduidelijk'], ['footprints', 'voetafdrukken'], ['a witness', 'een getuige'],
      ['strange', 'vreemd'], ['to disappear', 'verdwijnen'], ['to break in', 'inbreken'], ['a noise', 'een geluid'], ['to hide', 'verstoppen'],
      ['missing', 'vermist / ontbrekend'], ['I bet…', 'ik wed dat…'], ['No way!', 'Echt niet!'], ['It makes sense.', 'Het klopt / Het is logisch.']
    ],
    grammar: [
      { t: 'Must, might, can’t: hoe zeker ben je?', es: 'Modals of deduction',
        html: `<p>Met deze werkwoorden zeg je hoe <b>zeker</b> je bent van iets (nu):</p>
<p><b>must</b> = moet wel (bijna zeker ja): <i>He's wearing a uniform. He <b>must</b> be a pilot.</i></p>
<p><b>might / may / could</b> = zou kunnen (misschien): <i>She <b>might</b> be at home. It <b>could</b> be the mailman.</i></p>
<p><b>can't</b> = kan niet (bijna zeker nee): <i>That <b>can't</b> be Tom. He's in Japan.</i></p>
<p>Let op: het tegenovergestelde van <i>must</i> (zeker) is <b>can't</b>, niet <s>mustn't</s>. <i>Mustn't</i> betekent «mag niet» (zie A2).</p>`,
        table: [['zekerheid', 'woord', 'voorbeeld'], ['bijna zeker ja', 'must', 'She must be tired.'], ['misschien', 'might / may / could', 'She might be tired.'], ['bijna zeker nee', "can't", "She can't be tired. She slept 12 hours."]],
        sum: "He must be a pilot. She might be home. That can't be true!",
        ex: [["You've been working all day. You must be exhausted.", 'Je hebt de hele dag gewerkt. Je moet wel uitgeput zijn.'], ["Someone's at the door. It might be the pizza.", 'Er staat iemand aan de deur. Het zou de pizza kunnen zijn.']] },
      { t: 'Vermoedens over het verleden', es: 'Past deduction',
        html: `<p>Over het verleden: <b>must / might / can't + have + voltooid deelwoord</b>:</p>
<p><i>The ground is wet. It <b>must have rained</b>.</i> (Het moet wel geregend hebben.)</p>
<p><i>She didn't answer. She <b>might have been</b> asleep.</i> (Ze lag misschien te slapen.)</p>
<p><i>He <b>can't have stolen</b> it. He was with me all night.</i> (Hij kan het niet gestolen hebben.)</p>
<p>In spreektaal klinkt <i>must have</i> als «must-of». Schrijf het nooit als <s>must of</s>!</p>`,
        table: [['vorm', 'voorbeeld', 'Nederlands'], ['must have + vd', 'He must have left.', 'Hij moet wel vertrokken zijn.'], ['might have + vd', 'I might have lost it.', 'Misschien ben ik het kwijtgeraakt.'], ["can't have + vd", "She can't have seen us.", 'Ze kan ons niet gezien hebben.']],
        ex: [["The lights are off. They must have gone to bed.", 'De lichten zijn uit. Ze zijn vast naar bed gegaan.'], ["I can't find my wallet. I might have left it in the car.", 'Ik kan mijn portemonnee niet vinden. Misschien heb ik hem in de auto laten liggen.']] }
    ],
    dialogue: {
      t: 'The missing cake', place: 'A house in New Orleans 🇺🇸',
      lines: [
        ['Grandma Rose', "Where's my pecan pie? I left it on the kitchen table an hour ago!", 'Waar is mijn pecantaart? Ik heb hem een uur geleden op de keukentafel gezet!'],
        ['Annelies', "Hmm, a mystery. Someone must have eaten it.", 'Hmm, een mysterie. Iemand moet hem opgegeten hebben.'],
        ['Grandma Rose', "It can't have been Grandpa. He's been in the garden all afternoon.", 'Het kan opa niet geweest zijn. Hij is de hele middag in de tuin geweest.'],
        ['Annelies', "Look, there are crumbs on the floor. And small footprints.", 'Kijk, er liggen kruimels op de vloer. En kleine voetafdrukken.'],
        ['Grandma Rose', "Small footprints? It might have been the kids.", 'Kleine voetafdrukken? Het kunnen de kinderen geweest zijn.'],
        ['Annelies', "Or… the footprints have four toes. It must have been Biscuit!", 'Of… de voetafdrukken hebben vier tenen. Het moet Biscuit geweest zijn!'],
        ['Grandma Rose', "The dog? No way! He can't reach the table.", 'De hond? Echt niet! Hij kan niet bij de tafel.'],
        ['Annelies', "He might have jumped on a chair. Look, he's under the sofa, and his face is covered in pecans.", 'Hij kan op een stoel zijn gesprongen. Kijk, hij ligt onder de bank, en zijn snuit zit onder de pecannoten.'],
        ['Grandma Rose', "Case solved. Biscuit, you are in big trouble!", 'Zaak opgelost. Biscuit, jij zit flink in de problemen!']
      ],
      q: [
        { t: 'mc', q: "Why can't it have been Grandpa?", o: ['He was in the garden all afternoon', "He doesn't like pie", 'He was asleep'] },
        { t: 'mc', q: 'What clue did Annelies find first?', o: ['Crumbs and small footprints', 'An empty plate', 'A witness'] },
        { t: 'mc', q: 'Who ate the pie?', o: ['Biscuit, the dog', 'The kids', 'Grandpa'] }
      ]
    },
    culture: { t: 'New Orleans', html: `<p><b>New Orleans</b> in Louisiana is een van de bijzonderste steden van de VS, met Franse, Spaanse, Afrikaanse en Caribische invloeden. Het is de geboorteplaats van de <b>jazz</b>.</p>
<p>Het eten is beroemd: <i>gumbo</i>, <i>jambalaya</i>, <i>beignets</i> (gefrituurde deegkussentjes met poedersuiker) en <i>pecan pie</i>. Elk jaar is er het grote carnaval <b>Mardi Gras</b>.</p>
<p>🕵️ Amerikanen zijn dol op <i>true crime</i>: podcasts en series over echte misdaden. Detectivetaal als <i>suspect</i>, <i>clue</i> en <i>alibi</i> hoor je dus vaak.</p>` },
    ex: [
      { t: 'cloze', s: "She's wearing a white coat. She ___ be a doctor.", a: ['must'], o: ['must', "can't", 'mustn’t'], nl: 'Ze draagt een witte jas. Ze is vast dokter.', tag: 'en-deduce' },
      { t: 'cloze', s: "That ___ be true! It's impossible.", a: ["can't"], o: ["can't", "mustn't", "don't"], nl: 'Dat kan niet waar zijn! Het is onmogelijk.', tag: 'en-deduce' },
      { t: 'cloze', s: "I'm not sure where he is. He ___ be at the gym.", a: ['might'], o: ['might', 'must', "can't"], nl: 'Ik weet niet zeker waar hij is. Hij is misschien in de sportschool.', tag: 'en-deduce' },
      { t: 'cloze', s: 'The street is wet. It must ___ rained.', a: ['have'], o: ['have', 'of', 'had'], nl: 'De straat is nat. Het moet geregend hebben.', tag: 'en-deduce' },
      { t: 'cloze', s: "He can't have ___ it. He was with me.", a: ['done'], o: ['done', 'did', 'do'], nl: 'Hij kan het niet gedaan hebben. Hij was bij mij.', tag: 'en-deduce' },
      { t: 'cloze', s: "I can't find my keys. I ___ have left them at work.", a: ['might'], o: ['might', 'must not', "can't"], nl: 'Ik kan mijn sleutels niet vinden. Misschien heb ik ze op het werk laten liggen.', tag: 'en-deduce' },
      { t: 'mc', q: 'Wat is het tegenovergestelde van «He must be rich»?', o: ["He can't be rich.", "He mustn't be rich.", "He doesn't must be rich."], tag: 'en-deduce' },
      { t: 'mc', q: 'Welke spelling is correct?', o: ['must have', 'must of', "must've of"], tag: 'en-deduce' },
      { t: 'mc', q: '«You must be tired» betekent…', o: ['Je bent vast moe.', 'Je moet moe zijn (opdracht).', 'Je mag niet moe zijn.'], tag: 'en-deduce' },
      { t: 'mc', q: '«Een aanwijzing» in het Engels:', o: ['a clue', 'a hint of proof', 'an indication of crime'], tag: 'en-deduce' },
      { t: 'tr', nl: 'Ze is vast thuis.', a: ['She must be at home.', 'She must be home.'], tag: 'en-deduce' },
      { t: 'tr', nl: 'Hij is het misschien vergeten.', a: ['He might have forgotten.', 'He may have forgotten.', 'He could have forgotten.', 'He might have forgotten it.'], tag: 'en-deduce' },
      { t: 'tr', nl: 'Dat kan Tom niet zijn.', a: ["That can't be Tom.", 'That cannot be Tom.'], tag: 'en-deduce' },
      { t: 'order', s: 'Someone must have taken my umbrella.', nl: 'Iemand moet mijn paraplu hebben meegenomen.', tag: 'en-deduce' },
      { t: 'match', p: [['a suspect', 'een verdachte'], ['to solve', 'oplossen'], ['to disappear', 'verdwijnen'], ['footprints', 'voetafdrukken'], ['evidence', 'bewijs']], tag: 'en-deduce' }
    ],
    reading: {
      t: 'The strange neighbor', type: 'Forumbericht',
      p: [
        ["My new neighbor is a mystery. He always leaves the house at 10 p.m. and comes back at 6 a.m. He must work at night. Maybe he's a nurse or a security guard.", 'Mijn nieuwe buurman is een mysterie. Hij gaat altijd om 22:00 uur het huis uit en komt om 06:00 uur terug. Hij werkt vast ’s nachts. Misschien is hij verpleegkundige of beveiliger.'],
        ["He has a huge telescope on his balcony. He might be an astronomer! Or he could just like looking at stars. Last week a big box arrived. It can't have been furniture: it was too small and too heavy.", 'Hij heeft een enorme telescoop op zijn balkon. Misschien is hij astronoom! Of hij kijkt gewoon graag naar de sterren. Vorige week kwam er een grote doos. Het kan geen meubel zijn geweest: het was te klein en te zwaar.'],
        ["Yesterday I finally met him. He's a baker! He works at night so the bread is ready in the morning. The telescope is his hobby. And the box? It must have been flour!", 'Gisteren heb ik hem eindelijk ontmoet. Hij is bakker! Hij werkt ’s nachts zodat het brood ’s ochtends klaar is. De telescoop is zijn hobby. En de doos? Dat moet meel zijn geweest!']
      ],
      gl: [['a security guard', 'een beveiliger'], ['an astronomer', 'een sterrenkundige'], ['heavy', 'zwaar']],
      q: [
        { t: 'mc', q: 'Why did the writer think the neighbor worked at night?', o: ['He leaves at 10 p.m. and comes back at 6 a.m.', 'He wears a uniform', 'He told the writer'] },
        { t: 'mc', q: 'What is the neighbor’s job?', o: ['Baker', 'Astronomer', 'Nurse'] },
        { t: 'mc', q: 'What was probably in the box?', o: ['Flour', 'Furniture', 'A telescope'] }
      ]
    },
    say: [['You must be tired.', 'Je bent vast moe.'], ['It might rain later.', 'Het gaat misschien later regenen.'], ["That can't be right!", 'Dat kan niet kloppen!'], ['She must have forgotten.', 'Ze is het vast vergeten.']],
    task: { nl: 'Kijk om je heen of denk aan iemand die je niet goed kent (een buurman, iemand in de trein). Schrijf 5 zinnen met vermoedens: wat doet die persoon, waar komt hij vandaan, wat heeft hij net gedaan? Gebruik must, might, can’t en must have.', model: "The woman across from me on the train must be a student: she's reading a thick biology book. She might be going to the university in Utrecht. She looks very tired; she must have studied all night. She can't be Dutch, because she's speaking English on the phone. She might be American!" },
    scenario: { nl: 'Je lost samen met een Amerikaanse vriendin een klein mysterie op.', role: 'You are Annelies’s American friend Jade, an amateur detective in New Orleans. Present a small mystery (a missing phone, a strange noise, a broken window). Give clues one by one and ask the learner what they think happened. Use and encourage must, might, can’t (have).', goal: 'Los het mysterie op met vermoedens: must, might en can’t (have).' }
  });

  /* ───────────────────────── B1 · 9 ───────────────────────── */
  U({
    id: 'en-b1-09', level: 'B1', icon: '🎯', title: 'I enjoy learning', nl: '-ing of to: smaak en plannen',
    goals: ['Werkwoorden met -ing: enjoy, finish, avoid, mind', 'Werkwoorden met to: want, decide, hope, plan', 'Na een voorzetsel altijd -ing'],
    vocab: [
      ['to enjoy', 'genieten van / leuk vinden'], ['to avoid', 'vermijden'], ['to finish', 'afmaken'], ['to mind', 'het erg vinden'], ['to suggest', 'voorstellen'],
      ['to consider', 'overwegen'], ['to keep', 'blijven (doen)'], ['to give up', 'opgeven / stoppen met'], ['to want', 'willen'], ['to decide', 'besluiten'],
      ['to hope', 'hopen'], ['to plan', 'van plan zijn'], ['to agree', 'akkoord gaan / afspreken'], ['to refuse', 'weigeren'], ['to manage', 'erin slagen'],
      ['to afford', 'kunnen betalen'], ['to look forward to', 'zich verheugen op'], ['to be good at', 'goed zijn in'], ['to be interested in', 'geïnteresseerd zijn in'], ['to be afraid of', 'bang zijn voor'],
      ['a goal', 'een doel'], ['a resolution', 'een (goed) voornemen'], ['to procrastinate', 'uitstellen'], ['a habit', 'een gewoonte']
    ],
    grammar: [
      { t: 'Werkwoord + -ing', es: 'Verb + -ing',
        html: `<p>Na deze werkwoorden komt het volgende werkwoord met <b>-ing</b>:</p>
<p><i>enjoy, finish, avoid, mind, suggest, consider, keep, give up, practice, miss, can't stand</i>.</p>
<p><i>I <b>enjoy cooking</b>. She <b>finished writing</b> the report. <b>Would you mind closing</b> the window? He <b>gave up smoking</b>.</i></p>
<p>Fout: <s>I enjoy to cook</s>. Nederlanders zeggen dit vaak, omdat het Nederlands «te» gebruikt (ik vind het leuk om te koken).</p>
<p><i>Would you mind…?</i> is een beleefde vraag. Antwoord <i>No, not at all</i> betekent: nee, ik vind het niet erg = ja, dat doe ik!</p>`,
        table: [['werkwoord', 'voorbeeld', 'Nederlands'], ['enjoy', 'I enjoy reading.', 'Ik lees graag.'], ['avoid', 'I avoid eating sugar.', 'Ik vermijd suiker.'], ['finish', 'Have you finished eating?', 'Ben je klaar met eten?'], ['mind', "Do you mind waiting?", 'Vind je het erg om te wachten?'], ['give up', 'She gave up smoking.', 'Ze is gestopt met roken.']],
        sum: 'I enjoy cooking. (niet: I enjoy to cook)',
        ex: [['Would you mind turning down the music?', 'Zou je de muziek wat zachter willen zetten?'], ['I keep forgetting her name.', 'Ik vergeet steeds haar naam.']] },
      { t: 'Werkwoord + to', es: 'Verb + to',
        html: `<p>Na deze werkwoorden komt <b>to + werkwoord</b>:</p>
<p><i>want, decide, hope, plan, agree, refuse, manage, afford, learn, promise, need, would like</i>.</p>
<p><i>I <b>want to learn</b> Spanish. We <b>decided to move</b>. She <b>managed to finish</b> on time. I can't <b>afford to buy</b> a car.</i></p>
<p>Na <i>like, love, hate, start, begin</i> mag allebei: <i>I like <b>swimming</b> / I like <b>to swim</b>.</i> (In de VS is <i>to</i> iets gewoner.)</p>`,
        table: [['werkwoord', 'voorbeeld'], ['want', 'I want to travel.'], ['decide', 'She decided to quit.'], ['hope', 'We hope to see you soon.'], ['manage', 'I managed to fix it.'], ['would like', "I'd like to order, please."]],
        ex: [["I've decided to learn the guitar.", 'Ik heb besloten gitaar te leren spelen.'], ['We hope to visit Canada next year.', 'We hopen volgend jaar naar Canada te gaan.']] },
      { t: 'Na een voorzetsel: altijd -ing', es: 'Preposition + -ing',
        html: `<p>Staat er een <b>voorzetsel</b> (in, at, of, about, for, before, after, without…) vóór een werkwoord, dan krijgt dat werkwoord <b>-ing</b>:</p>
<p><i>I'm good <b>at cooking</b>. She's interested <b>in learning</b> Dutch. Thanks <b>for helping</b>! He left <b>without saying</b> goodbye.</i></p>
<p>Lastig geval: <b>look forward to</b> + <b>-ing</b>. Hier is <i>to</i> een voorzetsel! <i>I look forward <b>to seeing</b> you.</i> Niet <s>to see</s>. Dit staat onder bijna elke formele e-mail, dus onthoud het goed.</p>`,
        table: [['voorzetsel', 'voorbeeld'], ['good at', "I'm good at drawing."], ['interested in', "She's interested in starting a business."], ['afraid of', "He's afraid of flying."], ['before / after', 'Wash your hands before eating.'], ['look forward to', 'I look forward to hearing from you.']],
        ex: [['I look forward to meeting you.', 'Ik kijk ernaar uit je te ontmoeten.'], ["I'm thinking about changing jobs.", 'Ik denk erover om van baan te veranderen.']] }
    ],
    dialogue: {
      t: 'New Year’s resolutions', place: 'Times Square, New York 🎆',
      lines: [
        ['Chris', "Happy New Year! So, what are your resolutions?", 'Gelukkig Nieuwjaar! Wat zijn jouw goede voornemens?'],
        ['Roos', "I want to run a half marathon. And I've decided to stop eating so much sugar.", 'Ik wil een halve marathon lopen. En ik heb besloten om niet meer zoveel suiker te eten.'],
        ['Chris', "Good luck with the sugar! I can't imagine giving up cookies.", 'Succes met die suiker! Ik kan me niet voorstellen dat ik stop met koekjes.'],
        ['Roos', "What about you?", 'En jij?'],
        ['Chris', "I'm planning to learn Dutch! I'm really interested in visiting Amsterdam.", 'Ik ben van plan Nederlands te leren! Ik heb veel zin om Amsterdam te bezoeken.'],
        ['Roos', "Really? I'd love to help. Do you mind practicing with me on Zoom?", 'Echt? Ik help je graag. Vind je het goed om met mij te oefenen via Zoom?'],
        ['Chris', "Not at all! I'm terrible at pronouncing the «g», though.", 'Helemaal niet! Ik ben wel slecht in het uitspreken van de «g».'],
        ['Roos', "Everyone is. Just keep practicing. Gggggezellig!", 'Iedereen. Blijf gewoon oefenen. Gggggezellig!'],
        ['Chris', "Gezzelig? I look forward to learning what that means.", 'Gezzelig? Ik ben benieuwd wat dat betekent.']
      ],
      q: [
        { t: 'mc', q: 'What has Roos decided to do?', o: ['Stop eating so much sugar', 'Learn Dutch', 'Give up cookies'] },
        { t: 'mc', q: 'What is Chris planning to do?', o: ['Learn Dutch', 'Run a marathon', 'Move to Amsterdam'] },
        { t: 'mc', q: 'What is Chris bad at?', o: ['Pronouncing the Dutch «g»', 'Running', 'Using Zoom'] }
      ]
    },
    culture: { t: 'Nieuwjaar in Times Square', html: `<p>Op oudejaarsavond staan meer dan een miljoen mensen op <b>Times Square</b> in New York om de <i>ball drop</i> te zien: om middernacht zakt een grote verlichte bal langs een paal naar beneden.</p>
<p>Net als Nederlanders maken Amerikanen <b>New Year's resolutions</b>: vaker sporten, gezonder eten, minder op je telefoon. Volgens onderzoek houdt maar ongeveer 1 op de 10 mensen het een heel jaar vol.</p>
<p>🥂 Om middernacht zingen Amerikanen <i>Auld Lang Syne</i>, een oud Schots lied, en geven ze vaak hun partner een kus.</p>` },
    ex: [
      { t: 'cloze', s: 'I really enjoy ___ by the ocean.', a: ['walking'], o: ['walking', 'to walk', 'walk'], nl: 'Ik wandel heel graag langs de oceaan.', tag: 'en-gerund' },
      { t: 'cloze', s: 'She decided ___ a new car.', a: ['to buy'], o: ['to buy', 'buying', 'buy'], nl: 'Ze besloot een nieuwe auto te kopen.', tag: 'en-gerund' },
      { t: 'cloze', s: 'Would you mind ___ the door?', a: ['closing'], o: ['closing', 'to close', 'close'], nl: 'Zou je de deur dicht willen doen?', tag: 'en-gerund' },
      { t: 'cloze', s: 'I look forward to ___ from you.', a: ['hearing'], o: ['hearing', 'hear', 'heard'], nl: 'Ik zie uw reactie graag tegemoet.', tag: 'en-gerund' },
      { t: 'cloze', s: "He's very good ___ fixing things.", a: ['at'], o: ['at', 'in', 'on'], nl: 'Hij is heel goed in dingen repareren.', tag: 'en-gerund' },
      { t: 'cloze', s: 'We can’t afford ___ on vacation this year.', a: ['to go'], o: ['to go', 'going', 'go'], nl: 'We kunnen het ons dit jaar niet veroorloven op vakantie te gaan.', tag: 'en-gerund' },
      { t: 'cloze', s: 'My dad gave up ___ ten years ago.', a: ['smoking'], o: ['smoking', 'to smoke', 'smoke'], nl: 'Mijn vader is tien jaar geleden gestopt met roken.', tag: 'en-gerund' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I enjoy cooking for friends.', 'I enjoy to cook for friends.', 'I enjoy cook for friends.'], tag: 'en-gerund' },
      { t: 'mc', q: '«Do you mind if I sit here?» — Het is goed. Je zegt:', o: ['No, not at all.', 'Yes, I do.', 'Yes, I mind.'], tag: 'en-gerund' },
      { t: 'mc', q: '«Ik ben erin geslaagd het te repareren»:', o: ['I managed to fix it.', 'I managed fixing it.', 'I succeeded to fix it.'], tag: 'en-gerund' },
      { t: 'mc', q: '«To procrastinate» betekent…', o: ['dingen uitstellen', 'heel hard werken', 'van tevoren plannen'], tag: 'en-gerund' },
      { t: 'tr', nl: 'Ik wil Spaans leren.', a: ['I want to learn Spanish.'], tag: 'en-gerund' },
      { t: 'tr', nl: 'Ze is bang om te vliegen.', a: ["She's afraid of flying.", 'She is afraid of flying.', "She's scared of flying.", 'She is scared of flying.'], tag: 'en-gerund' },
      { t: 'order', s: "I'm thinking about changing my job.", nl: 'Ik denk erover om van baan te veranderen.', tag: 'en-gerund' },
      { t: 'match', p: [['to avoid', 'vermijden'], ['to refuse', 'weigeren'], ['to give up', 'opgeven'], ['a resolution', 'een voornemen'], ['to consider', 'overwegen']], tag: 'en-gerund' }
    ],
    reading: {
      t: 'How to keep your resolutions', type: 'Tips',
      p: [
        ["Do you keep making the same resolutions every year? You're not alone. Most people stop trying after a few weeks.", 'Maak je elk jaar weer dezelfde voornemens? Je bent niet de enige. De meeste mensen geven het na een paar weken op.'],
        ["First, avoid making too many changes at once. Choose one goal and decide to work on it every day. Small steps are better than big promises.", 'Vermijd ten eerste te veel veranderingen tegelijk. Kies één doel en besluit er elke dag aan te werken. Kleine stappen zijn beter dan grote beloftes.'],
        ["Second, find a friend who wants to do the same thing. It's easier to keep going if you're not alone. And finally, don't give up after one bad day. Just keep practicing!", 'Zoek ten tweede een vriend die hetzelfde wil. Het is makkelijker vol te houden als je het niet alleen doet. En tot slot: geef niet op na één slechte dag. Blijf gewoon oefenen!']
      ],
      gl: [['at once', 'tegelijk'], ['to keep going', 'volhouden'], ['a promise', 'een belofte']],
      q: [
        { t: 'mc', q: 'When do most people stop trying?', o: ['After a few weeks', 'After a year', 'Before they start'] },
        { t: 'mc', q: 'What should you avoid?', o: ['Making too many changes at once', 'Having goals', 'Working with friends'] },
        { t: 'mc', q: 'What should you do after a bad day?', o: ['Keep practicing', 'Give up', 'Make a new resolution'] }
      ]
    },
    say: [['I enjoy reading.', 'Ik lees graag.'], ["I've decided to learn the guitar.", 'Ik heb besloten gitaar te leren spelen.'], ['Would you mind helping me?', 'Zou je me willen helpen?'], ['I look forward to seeing you.', 'Ik verheug me erop je te zien.']],
    task: { nl: 'Schrijf 5 of 6 zinnen over je goede voornemens of doelen voor dit jaar. Gebruik minstens drie werkwoorden met -ing (enjoy, avoid, give up, keep…) en drie met to (want, decide, hope, plan…), plus één keer look forward to.', model: "This year I want to speak English more confidently. I've decided to watch one American series a week without subtitles. I'm also planning to run a 10K in the spring. I want to avoid eating fast food and I hope to give up drinking soda. I really enjoy learning new things, and I look forward to seeing my progress!" },
    scenario: { nl: 'Je praat met een Amerikaanse vriend over goede voornemens.', role: 'You are Chris, a cheerful American in New York on New Year’s Eve. Talk with the learner about their resolutions, hobbies and plans. Ask questions that need -ing or to (What do you enjoy doing? What have you decided to change? What are you good at?). Gently correct «enjoy to» or «look forward to see».', goal: 'Praat over je doelen en hobby’s met de juiste -ing- en to-vormen.' }
  });

  /* ───────────────────────── B1 · 10 ───────────────────────── */
  U({
    id: 'en-b1-10', level: 'B1', icon: '✉️', title: 'I’d like to complain', nl: 'Klachten, formele e-mails en phrasal verbs',
    goals: ['Een formele klacht of e-mail schrijven', 'Beleefd en duidelijk klagen, zonder te direct te zijn', 'Veelgebruikte phrasal verbs: look into, sort out, call back'],
    vocab: [
      ['a complaint', 'een klacht'], ['to complain about', 'klagen over'], ['a refund', 'terugbetaling / geld terug'], ['a replacement', 'vervanging'], ['damaged', 'beschadigd'],
      ['faulty', 'defect'], ['a delay', 'een vertraging'], ['customer service', 'klantenservice'], ['an order number', 'een bestelnummer'], ['to apologize', 'zich verontschuldigen'],
      ['to look into', 'uitzoeken / onderzoeken'], ['to sort out', 'regelen / oplossen'], ['to call back', 'terugbellen'], ['to fill out', 'invullen (formulier)'], ['to turn down', 'afwijzen / zachter zetten'],
      ['to put up with', 'pikken / verdragen'], ['to get back to', 'terugkomen bij'], ['to find out', 'erachter komen'], ['to follow up', 'opvolgen'], ['Dear Sir or Madam', 'Geachte heer/mevrouw'],
      ['Sincerely', 'Met vriendelijke groet'], ['I am writing to…', 'Ik schrijf u om…'], ['unacceptable', 'onacceptabel'], ['disappointed', 'teleurgesteld']
    ],
    grammar: [
      { t: 'Een formele e-mail', es: 'Formal emails',
        html: `<p>Een Engelse formele e-mail heeft een vaste opbouw:</p>
<p><b>Aanhef</b>: <i>Dear Ms. Johnson,</i> (naam bekend) of <i>Dear Sir or Madam,</i> / <i>To whom it may concern,</i> (onbekend). Na de aanhef een <b>komma</b>, en de eerste zin begint met een hoofdletter.</p>
<p><b>Doel</b>: <i>I am writing to complain about… / to ask about… / to inform you that…</i></p>
<p><b>Verzoek</b>: <i>I would be grateful if you could… / Could you please…?</i></p>
<p><b>Afsluiting</b>: <i>I look forward to hearing from you.</i> + <i>Sincerely,</i> (VS) of <i>Kind regards,</i>. Bij <i>Dear Sir or Madam</i> sluiten Britten af met <i>Yours faithfully</i>, maar in de VS is <i>Sincerely</i> gewoon.</p>
<p>Gebruik geen afkortingen als <i>don't</i> of <i>I'm</i> in een heel formele brief.</p>`,
        table: [['onderdeel', 'formeel'], ['aanhef', 'Dear Mr. Brown, / Dear Sir or Madam,'], ['doel', 'I am writing to complain about…'], ['verzoek', 'I would be grateful if you could…'], ['afsluiten', 'I look forward to hearing from you.'], ['groet', 'Sincerely, / Kind regards,']],
        sum: 'Dear Sir or Madam, I am writing to… I look forward to hearing from you. Sincerely,',
        ex: [['I am writing to complain about my recent order.', 'Ik schrijf u om te klagen over mijn recente bestelling.'], ['I would be grateful if you could send me a refund.', 'Ik zou het op prijs stellen als u mij het geld kunt terugstorten.']] },
      { t: 'Beleefd klagen', es: 'Complaining politely',
        html: `<p>Nederlanders zijn vaak <b>direct</b>: «Dit is slecht en ik wil mijn geld terug.» In het Engels klinkt dat al snel <b>onbeleefd</b>. Zeg hetzelfde, maar verpakt:</p>
<p><i>Unfortunately, the item <b>arrived damaged</b>.</i> (niet: <s>You sent me a broken product</s>)</p>
<p><i>I <b>was disappointed</b> to find that…</i> / <i>I'm afraid there seems to be a problem with…</i></p>
<p><i>I would <b>appreciate it if</b> you could…</i> / <i>Could you <b>possibly</b>…?</i></p>
<p>Wees duidelijk over wat je wilt (<i>a refund, a replacement</i>), maar blijf vriendelijk. Dat werkt in de VS bijna altijd beter.</p>`,
        table: [['te direct', 'beleefd'], ['Your product is broken.', 'Unfortunately, the product appears to be faulty.'], ['I want my money back.', 'I would like to request a refund.'], ['This is terrible service.', 'I was rather disappointed with the service.'], ['Answer me quickly.', 'I would appreciate a quick reply.']],
        ex: [["I'm afraid there seems to be a mistake on my bill.", 'Ik ben bang dat er een fout op mijn rekening staat.'], ['I would appreciate it if you could look into this.', 'Ik zou het waarderen als u dit zou willen uitzoeken.']] },
      { t: 'Phrasal verbs voor klantenservice', es: 'Phrasal verbs',
        html: `<p><b>Phrasal verbs</b> zijn werkwoorden met een voorzetsel of bijwoord, met een eigen betekenis. In gesprekken met klantenservice hoor je ze voortdurend:</p>
<p><i>We'll <b>look into</b> it.</i> (uitzoeken) <i>Let me <b>sort</b> it <b>out</b>.</i> (regelen) <i>Can I <b>call</b> you <b>back</b>?</i> (terugbellen) <i>Please <b>fill out</b> this form.</i> (invullen) <i>I'll <b>get back to</b> you tomorrow.</i> (bij je terugkomen) <i>I won't <b>put up with</b> this!</i> (pikken)</p>
<p>Bij sommige mag het voorwerp ertussen: <i>fill out the form / fill <b>it</b> out</i>. Is het voorwerp een voornaamwoord (it, them), dan móét het ertussen: <i>call <b>me</b> back</i>, niet <s>call back me</s>.</p>`,
        table: [['phrasal verb', 'betekenis', 'voorbeeld'], ['look into', 'uitzoeken', "We'll look into the problem."], ['sort out', 'regelen', "I'll sort it out."], ['call back', 'terugbellen', 'Can you call me back?'], ['fill out', 'invullen', 'Fill out the form.'], ['get back to', 'terugkomen bij', "I'll get back to you."]],
        ex: [["Don't worry, we'll sort it out today.", 'Maak je geen zorgen, we regelen het vandaag.'], ["Could you call me back in ten minutes?", 'Kunt u me over tien minuten terugbellen?']] }
    ],
    dialogue: {
      t: 'Calling customer service', place: 'On the phone ☎️',
      lines: [
        ['Agent', "Thank you for calling TechWorld. My name is Ashley. How can I help you today?", 'Bedankt voor het bellen met TechWorld. Ik ben Ashley. Waarmee kan ik u vandaag helpen?'],
        ['Rick', "Hi, Ashley. I'm afraid there's a problem with my order. The laptop arrived damaged.", 'Hallo Ashley. Ik ben bang dat er een probleem is met mijn bestelling. De laptop is beschadigd aangekomen.'],
        ['Agent', "I'm so sorry to hear that. Could I have your order number, please?", 'Wat vervelend om te horen. Mag ik uw bestelnummer, alstublieft?'],
        ['Rick', "Sure, it's 4-5-8-2-1-9. The screen is cracked.", 'Natuurlijk, het is 4-5-8-2-1-9. Het scherm is gebarsten.'],
        ['Agent', "Thank you. Let me look into it. Would you prefer a replacement or a refund?", 'Dank u. Ik zoek het even uit. Wilt u liever een vervangend exemplaar of uw geld terug?'],
        ['Rick', "I'd prefer a replacement, please. I need it for work.", 'Liever een vervangend exemplaar, alstublieft. Ik heb hem nodig voor mijn werk.'],
        ['Agent', "No problem. I'll sort it out right away. You'll need to fill out a short return form online.", 'Geen probleem. Ik regel het meteen. U moet online een kort retourformulier invullen.'],
        ['Rick', "Okay. And when will the new one arrive?", 'Oké. En wanneer komt de nieuwe?'],
        ['Agent', "Within three business days. I'll send you an email to follow up. Is there anything else I can help you with?", 'Binnen drie werkdagen. Ik stuur u een e-mail ter bevestiging. Kan ik u nog ergens anders mee helpen?'],
        ['Rick', "No, that's all. Thanks for your help!", 'Nee, dat was het. Bedankt voor uw hulp!']
      ],
      q: [
        { t: 'mc', q: 'What was wrong with the laptop?', o: ['The screen was cracked', 'It was the wrong color', 'It never arrived'] },
        { t: 'mc', q: 'What does Rick prefer?', o: ['A replacement', 'A refund', 'A discount'] },
        { t: 'mc', q: 'When will the new laptop arrive?', o: ['Within three business days', 'Tomorrow', 'Next month'] }
      ]
    },
    culture: { t: 'Klantenservice in de VS', html: `<p>Amerikaanse klantenservice is meestal heel <b>vriendelijk</b>: <i>I'm so sorry to hear that!</i> en <i>Is there anything else I can help you with?</i> hoor je bij bijna elk gesprek.</p>
<p>Ruilen en terugbrengen is in de VS heel gewoon. Veel winkels hebben een ruim <b>return policy</b>: 30 tot 90 dagen, vaak zonder vragen. Bewaar altijd je bon (<i>receipt</i>).</p>
<p>📞 Vriendelijk maar duidelijk blijven werkt het best. Wordt je klacht niet opgelost, vraag dan: <i>Could I speak to a supervisor, please?</i></p>` },
    ex: [
      { t: 'cloze', s: 'I am writing ___ complain about my order.', a: ['to'], o: ['to', 'for', 'because'], nl: 'Ik schrijf u om te klagen over mijn bestelling.', tag: 'en-formal' },
      { t: 'cloze', s: 'I would be ___ if you could send me a refund.', a: ['grateful'], o: ['grateful', 'thankful for', 'happy that'], nl: 'Ik zou het op prijs stellen als u mij het geld terugstuurt.', tag: 'en-formal' },
      { t: 'cloze', s: 'I look forward to ___ from you.', a: ['hearing'], o: ['hearing', 'hear', 'heard'], nl: 'Ik zie uw reactie met belangstelling tegemoet.', tag: 'en-formal' },
      { t: 'cloze', s: "We'll look ___ the problem and get back to you.", a: ['into'], o: ['into', 'at', 'for'], nl: 'We zoeken het probleem uit en komen bij u terug.', tag: 'en-phrasal' },
      { t: 'cloze', s: 'Please fill ___ this form.', a: ['out'], o: ['out', 'up', 'in to'], nl: 'Vul dit formulier alstublieft in.', tag: 'en-phrasal' },
      { t: 'cloze', s: "Can you call ___ back later?", a: ['me'], o: ['me', 'I', 'to me'], nl: 'Kun je me later terugbellen?', tag: 'en-phrasal' },
      { t: 'cloze', s: "I won't put up ___ this noise anymore!", a: ['with'], o: ['with', 'on', 'for'], nl: 'Ik pik dit lawaai niet langer!', tag: 'en-phrasal' },
      { t: 'mc', q: 'Welke zin is het meest beleefd?', o: ['Unfortunately, the item arrived damaged.', 'You sent me a broken item.', 'Your company is terrible.'], tag: 'en-formal' },
      { t: 'mc', q: 'Hoe sluit je een formele Amerikaanse e-mail af?', o: ['Sincerely,', 'Greetings,', 'Bye,'], tag: 'en-formal' },
      { t: 'mc', q: '«To sort out» betekent…', o: ['regelen / oplossen', 'sorteren op kleur', 'eruit gooien'], tag: 'en-phrasal' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Can you call me back?', 'Can you call back me?', 'Can you back call me?'], tag: 'en-phrasal' },
      { t: 'tr', nl: 'Ik wil graag mijn geld terug.', a: ['I would like a refund.', "I'd like a refund.", 'I would like to request a refund.', "I'd like my money back."], tag: 'en-formal' },
      { t: 'tr', nl: 'Ik kom morgen bij je terug.', a: ["I'll get back to you tomorrow.", 'I will get back to you tomorrow.'], tag: 'en-phrasal' },
      { t: 'order', s: 'I am writing to complain about the service.', nl: 'Ik schrijf u om te klagen over de service.', tag: 'en-formal' },
      { t: 'match', p: [['faulty', 'defect'], ['a refund', 'geld terug'], ['a delay', 'een vertraging'], ['disappointed', 'teleurgesteld'], ['unacceptable', 'onacceptabel'], ['to follow up', 'opvolgen']], tag: 'en-formal' }
    ],
    reading: {
      t: 'A complaint email', type: 'Formele e-mail',
      p: [
        ["Dear Sir or Madam, I am writing to complain about my stay at the Lakeview Hotel from March 3 to March 6. I had booked a quiet room with a lake view.", 'Geachte heer/mevrouw, ik schrijf u om te klagen over mijn verblijf in het Lakeview Hotel van 3 tot en met 6 maart. Ik had een rustige kamer met uitzicht op het meer geboekt.'],
        ["Unfortunately, my room was next to the elevator and looked out on the parking lot. The air conditioning was also faulty. I reported this to the front desk twice, but nobody looked into it.", 'Helaas lag mijn kamer naast de lift en keek hij uit op de parkeerplaats. De airconditioning was ook defect. Ik heb dit twee keer bij de receptie gemeld, maar niemand heeft het uitgezocht.'],
        ["I was very disappointed, as I had chosen your hotel for a special occasion. I would be grateful if you could offer a partial refund. I look forward to hearing from you. Sincerely, Karin de Boer", 'Ik was erg teleurgesteld, omdat ik uw hotel voor een speciale gelegenheid had gekozen. Ik zou het op prijs stellen als u een gedeeltelijke terugbetaling kunt aanbieden. Ik zie uw reactie met belangstelling tegemoet. Met vriendelijke groet, Karin de Boer']
      ],
      gl: [['the parking lot', 'de parkeerplaats'], ['a special occasion', 'een speciale gelegenheid'], ['partial', 'gedeeltelijk']],
      q: [
        { t: 'mc', q: 'What kind of room had Karin booked?', o: ['A quiet room with a lake view', 'A room next to the elevator', 'A suite'] },
        { t: 'mc', q: 'What else was wrong?', o: ['The air conditioning was faulty', 'The bed was too small', 'There was no Wi-Fi'] },
        { t: 'mc', q: 'What does Karin ask for?', o: ['A partial refund', 'A free night', 'A new room'] }
      ]
    },
    say: [["I'm afraid there's a problem with my order.", 'Ik ben bang dat er een probleem is met mijn bestelling.'], ["I'd like to request a refund.", 'Ik wil graag mijn geld terug.'], ['Could you look into it, please?', 'Zou u het willen uitzoeken?'], ['I look forward to hearing from you.', 'Ik zie uw reactie graag tegemoet.']],
    task: { nl: 'Schrijf een formele klachtmail (6–7 zinnen) aan een Amerikaanse webwinkel: je bestelling kwam te laat en beschadigd aan. Gebruik de vaste opbouw (aanhef, doel, probleem, verzoek, afsluiting), beleefde formuleringen en minstens één phrasal verb.', model: "Dear Sir or Madam, I am writing to complain about my order #78412, which I placed on May 2. Unfortunately, the package arrived ten days late and the coffee machine inside was damaged. I contacted your customer service by phone, but nobody called me back. I would be grateful if you could look into this and send me a replacement as soon as possible. I look forward to hearing from you. Sincerely, Daan Visser" },
    scenario: { nl: 'Je belt een Amerikaanse klantenservice met een klacht.', role: 'You are Ashley, a polite customer service agent at an American online store. The learner calls about a problem with an order (late, damaged or wrong item). Follow the typical script: apologize, ask for the order number, offer a refund or replacement, use phrasal verbs (look into, sort out, get back to, fill out). If the learner is very blunt, stay friendly but model a more polite phrasing.', goal: 'Leg je klacht beleefd maar duidelijk uit en regel een oplossing.' }
  });
})(window.SPT);
