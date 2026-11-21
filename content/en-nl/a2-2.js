/* Engels voor Nederlandstaligen — niveau A2, units 6–10 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-pcont': 'past continuous (was doing)', 'en-when': 'when / while', 'en-will': 'will (toekomst en voorspellingen)', 'en-future': 'will of going to',
    'en-haveto': 'have to / don’t have to', 'en-must': 'must / mustn’t', 'en-count': 'telbaar en ontelbaar', 'en-much': 'much / many / a lot of',
    'en-if1': 'if + present, will (eerste conditional)', 'en-adv': 'bijwoorden (quickly, well…)'
  });

  /* ───────────────────────── A2 · 6 ───────────────────────── */
  U({
    id: 'en-a2-06', level: 'A2', icon: '📰', title: 'What happened?', nl: 'Wat is er gebeurd?',
    goals: ['Vertellen wat er aan de hand was met de past continuous', 'when en while gebruiken', 'Een kort verhaal of ongelukje navertellen'],
    vocab: [
      ['to happen', 'gebeuren'], ['an accident', 'een ongeluk'], ['to fall', 'vallen'], ['to drop', 'laten vallen'], ['to break', 'breken'],
      ['to hit', 'raken / botsen'], ['to slip', 'uitglijden'], ['to crash', 'botsen / neerstorten'], ['to steal', 'stelen'], ['a thief', 'een dief'],
      ['the police', 'de politie'], ['a witness', 'een getuige'], ['suddenly', 'plotseling'], ['luckily', 'gelukkig'], ['unfortunately', 'helaas'],
      ['while', 'terwijl'], ['when', 'toen / wanneer'], ['at that moment', 'op dat moment'], ['in the end', 'uiteindelijk'], ['to scream', 'gillen'],
      ['to run away', 'wegrennen'], ['to call 911', '911 bellen'], ['hurt', 'gewond'], ['a story', 'een verhaal']
    ],
    grammar: [
      { t: 'Past continuous: was / were + -ing', es: 'Past continuous',
        html: `<p>Met de <b>past continuous</b> zeg je waar iemand <b>mee bezig was</b> op een moment in het verleden: <b>was/were + -ing</b>.</p>
<p><i>At eight o'clock I <b>was watching</b> TV. They <b>were having</b> dinner.</i></p>
<p>Het Nederlands zegt «ik was tv aan het kijken» of gewoon «ik keek tv». In het Engels gebruik je de continuous voor de <b>achtergrond</b> van een verhaal: <i>It <b>was raining</b> and people <b>were walking</b> fast.</i></p>`,
        table: [['', 'voorbeeld'], ['I / he / she / it', 'I was sleeping.'], ['you / we / they', 'We were sleeping.'], ['vraag', 'What were you doing?'], ['ontkenning', "She wasn't listening."]],
        sum: 'I was watching TV. What were you doing?',
        ex: [['What were you doing at ten last night?', 'Wat was je gisteravond om tien uur aan het doen?'], ['The sun was shining and the birds were singing.', 'De zon scheen en de vogels zongen.']] },
      { t: 'When en while: achtergrond en onderbreking', es: 'When / while',
        html: `<p>Een lange handeling (past continuous) wordt <b>onderbroken</b> door een korte (past simple):</p>
<p><i>I <b>was cooking</b> <b>when</b> the phone <b>rang</b>.</i> (Ik was aan het koken toen de telefoon ging.)</p>
<p><i><b>While</b> I <b>was walking</b> home, I <b>saw</b> an accident.</i> (Terwijl ik naar huis liep, zag ik een ongeluk.)</p>
<p>Na <b>while</b> komt meestal de continuous, na <b>when</b> meestal de past simple.</p>
<p>Let op: <b>when</b> = toen én wanneer. Het Nederlandse «als» in de verleden tijd («Als ik thuiskwam…») is ook vaak <i>when</i>.</p>`,
        table: [['lange handeling', 'onderbreking'], ['I was driving', 'when a cat ran across the road.'], ['While she was sleeping,', 'someone knocked on the door.'], ['We were having dinner', 'when the lights went out.']],
        ex: [['I was taking a shower when you called.', 'Ik stond onder de douche toen je belde.'], ['While we were waiting for the bus, it started to rain.', 'Terwijl we op de bus wachtten, begon het te regenen.']] }
    ],
    dialogue: {
      t: 'The stolen bike', place: 'Portland, Oregon 🇺🇸',
      lines: [
        ['Officer', 'Good afternoon. What happened?', 'Goedemiddag. Wat is er gebeurd?'],
        ['Sven', 'Someone stole my bike!', 'Iemand heeft mijn fiets gestolen!'],
        ['Officer', "I'm sorry to hear that. Where was it?", 'Wat vervelend. Waar stond hij?'],
        ['Sven', "It was outside the coffee shop. I was having a coffee inside.", 'Hij stond buiten bij het koffietentje. Ik zat binnen koffie te drinken.'],
        ['Officer', 'Did you see the thief?', 'Heb je de dief gezien?'],
        ['Sven', "Yes! While I was paying, I looked out the window. A young man was riding away on my bike.", 'Ja! Terwijl ik aan het betalen was, keek ik uit het raam. Een jonge man reed weg op mijn fiets.'],
        ['Officer', 'Was the bike locked?', 'Zat hij op slot?'],
        ['Sven', "Yes, but just with a small lock. In the Netherlands we always use two locks. I forgot!", 'Ja, maar alleen met een klein slotje. In Nederland gebruiken we altijd twee sloten. Ik was het vergeten!'],
        ['Officer', "Okay. Can you describe him? What was he wearing?", 'Oké. Kun je hem beschrijven? Wat had hij aan?'],
        ['Sven', 'He was wearing a red jacket and a baseball cap.', 'Hij droeg een rode jas en een honkbalpet.']
      ],
      q: [
        { t: 'mc', q: 'What was Sven doing when the bike was stolen?', o: ['He was having a coffee', 'He was riding his bike', 'He was talking to the police'] },
        { t: 'mc', q: 'What was the thief wearing?', o: ['A red jacket and a baseball cap', 'A blue jacket', 'A black hat'] },
        { t: 'mc', q: "Why was the bike easy to steal?", o: ['It only had a small lock', 'It had no lock', 'It was inside'] }
      ]
    },
    culture: { t: 'Portland en fietsen', html: `<p><b>Portland, Oregon</b> is een van de meest fietsvriendelijke steden van de VS. Ongeveer 6 procent van de inwoners fietst naar het werk. In Amsterdam is dat zo’n 35 procent!</p>
<p>Ook in de VS worden veel fietsen gestolen. Amerikanen gebruiken vaak een zwaar <b>U-lock</b> (beugelslot).</p>
<p>👮 Bij een misdaad of noodgeval bel je <b>911</b>. Voor iets wat niet dringend is (zoals een gestolen fiets) bel je het <i>non-emergency number</i> van de lokale politie.</p>` },
    ex: [
      { t: 'cloze', s: 'At nine p.m. I ___ watching a movie.', a: ['was'], o: ['was', 'were', 'did'], nl: 'Om negen uur ’s avonds was ik een film aan het kijken.', tag: 'en-pcont' },
      { t: 'cloze', s: 'They ___ playing soccer when it started to rain.', a: ['were'], o: ['were', 'was', 'are'], nl: 'Ze waren aan het voetballen toen het begon te regenen.', tag: 'en-pcont' },
      { t: 'cloze', s: 'I was cooking when the phone ___.', a: ['rang'], o: ['rang', 'was ringing', 'rings'], nl: 'Ik was aan het koken toen de telefoon ging.', tag: 'en-when' },
      { t: 'cloze', s: '___ I was walking home, I saw an old friend.', a: ['While'], o: ['While', 'During', 'When that'], nl: 'Terwijl ik naar huis liep, zag ik een oude vriend.', tag: 'en-when' },
      { t: 'cloze', s: 'She slipped and ___ on the ice.', a: ['fell'], o: ['fell', 'falled', 'was falling'], nl: 'Ze gleed uit en viel op het ijs.', tag: 'en-irr' },
      { t: 'cloze', s: 'What ___ you doing at midnight?', a: ['were'], o: ['were', 'did', 'was'], nl: 'Wat was je om middernacht aan het doen?', tag: 'en-pcont' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I was sleeping when the alarm went off.', 'I slept when the alarm was going off.', 'I was sleep when the alarm went off.'], tag: 'en-when' },
      { t: 'mc', q: '«During» of «while»? «___ the movie, my phone rang.»', o: ['During', 'While', 'When'], x: 'During + zelfstandig naamwoord; while + bijzin.', tag: 'en-when' },
      { t: 'mc', q: '«Gelukkig» (fortunately) in het Engels:', o: ['luckily', 'happily', 'gladly'], tag: 'en-pcont' },
      { t: 'mc', q: 'Wie zag het ongeluk gebeuren?', o: ['a witness', 'a thief', 'a victim of view'], tag: 'en-pcont' },
      { t: 'tr', nl: 'Wat was je aan het doen?', a: ['What were you doing?'], tag: 'en-pcont' },
      { t: 'tr', nl: 'Het regende toen we aankwamen.', a: ['It was raining when we arrived.'], tag: 'en-when' },
      { t: 'tr', nl: 'Ik liet mijn telefoon vallen.', a: ['I dropped my phone.'], tag: 'en-past' },
      { t: 'order', s: 'While I was driving, a deer jumped onto the road.', nl: 'Terwijl ik reed, sprong er een hert de weg op.', tag: 'en-when' },
      { t: 'match', p: [['suddenly', 'plotseling'], ['unfortunately', 'helaas'], ['a thief', 'een dief'], ['to steal', 'stelen'], ['in the end', 'uiteindelijk']], tag: 'en-pcont' }
    ],
    reading: {
      t: 'Lucky escape', type: 'Krantenbericht',
      p: [
        ["DENVER — A 72-year-old woman had a lucky escape on Tuesday morning. She was walking her dog in the park when a large tree fell down.", 'DENVER — Een 72-jarige vrouw ontsnapte dinsdagochtend ternauwernood. Ze was haar hond aan het uitlaten in het park toen er een grote boom omviel.'],
        ["«It was very windy and the trees were moving a lot,» said a witness. «Suddenly the dog stopped and started barking. The woman stopped too.»", '«Het waaide hard en de bomen bewogen heel erg,» zei een getuige. «Plotseling stopte de hond en begon te blaffen. De vrouw stopte ook.»'],
        ["At that moment, the tree crashed onto the path in front of them. Luckily, nobody was hurt. «My dog saved my life,» she said. «He's getting a big steak tonight.»", 'Op dat moment stortte de boom op het pad vlak voor hen neer. Gelukkig raakte niemand gewond. «Mijn hond heeft mijn leven gered,» zei ze. «Hij krijgt vanavond een grote biefstuk.»']
      ],
      gl: [['a lucky escape', 'ternauwernood ontsnapt'], ['to bark', 'blaffen'], ['to save', 'redden']],
      q: [
        { t: 'mc', q: 'What was the woman doing?', o: ['Walking her dog', 'Riding her bike', 'Sitting on a bench'] },
        { t: 'mc', q: 'Why did the woman stop?', o: ['Her dog stopped and barked', 'She saw the tree fall', 'She was tired'] },
        { t: 'mc', q: 'Was anybody hurt?', o: ['No', 'Yes, the woman', 'Yes, the dog'] }
      ]
    },
    say: [['What happened?', 'Wat is er gebeurd?'], ['I was cooking when you called.', 'Ik was aan het koken toen je belde.'], ['Someone stole my bike!', 'Iemand heeft mijn fiets gestolen!'], ['Luckily, nobody was hurt.', 'Gelukkig raakte niemand gewond.']],
    task: { nl: 'Vertel in 5 zinnen over een klein ongelukje of iets geks dat je is overkomen. Gebruik minstens twee keer de past continuous en één keer when of while.', model: "Last winter I was biking to work when it started to snow. The streets were very slippery. While I was turning a corner, I fell off my bike. Luckily I wasn't hurt, but my laptop was broken. I took the train for the rest of the week!" },
    scenario: { nl: 'Je doet aangifte bij de Amerikaanse politie.', role: 'You are Officer Lee, a calm police officer in Portland. The learner reports that something was stolen (a bike, a bag or a phone). Ask what happened, where they were, what they were doing at the time, and ask them to describe the thief (What was he/she wearing?).', goal: 'Vertel precies wat er gebeurde en beschrijf de dief.' }
  });

  /* ───────────────────────── A2 · 7 ───────────────────────── */
  U({
    id: 'en-a2-07', level: 'A2', icon: '🔮', title: 'The future', nl: 'De toekomst',
    goals: ['Voorspellen, beloven en spontaan besluiten met will', 'Het verschil tussen will en going to', 'Let op: will ≠ «wil»!'],
    vocab: [
      ['the future', 'de toekomst'], ['to predict', 'voorspellen'], ['to promise', 'beloven'], ['to decide', 'besluiten'], ['maybe', 'misschien'],
      ['probably', 'waarschijnlijk'], ['definitely', 'zeker / beslist'], ['I think…', 'ik denk…'], ['I hope…', 'ik hoop…'], ['in ten years', 'over tien jaar'],
      ['soon', 'binnenkort'], ['later', 'later'], ['someday', 'ooit (in de toekomst)'], ['next year', 'volgend jaar'], ['a robot', 'een robot'],
      ['a self-driving car', 'een zelfrijdende auto'], ['to retire', 'met pensioen gaan'], ['to move', 'verhuizen'], ['to get married', 'trouwen'], ['to change', 'veranderen'],
      ['to want', 'willen'], ["I'll help you.", 'Ik help je wel.'], ["I won't tell anyone.", 'Ik zal het aan niemand vertellen.'], ['Shall we…?', 'Zullen we…?']
    ],
    grammar: [
      { t: 'Will: voorspellingen, beloftes en spontane besluiten', es: 'Will',
        html: `<p><b>will</b> + kaal werkwoord, voor alle personen. Kort: <b>'ll</b>. Ontkennend: <b>won't</b> (= will not).</p>
<p><b>Voorspelling</b>: <i>I think it <b>will</b> rain tomorrow. Robots <b>will</b> do our work.</i></p>
<p><b>Belofte</b>: <i>I'<b>ll</b> call you tonight. I <b>won't</b> tell anyone.</i></p>
<p><b>Spontaan besluit</b> (op dit moment): <i>The phone is ringing. — I'<b>ll</b> get it!</i></p>
<p>⚠️ Valse vriend: <b>will</b> betekent <b>niet</b> «wil»! «Ik wil koffie» = <i>I <b>want</b> coffee</i>. <i>I will coffee</i> bestaat niet.</p>`,
        table: [['Nederlands', 'Engels'], ['Ik wil een koffie.', 'I want a coffee. / I’d like a coffee.'], ['Ik zal je helpen.', "I'll help you."], ['Het gaat morgen regenen.', 'It will rain tomorrow.'], ['Ik zal het niet vertellen.', "I won't tell."]],
        sum: "I'll call you. I want coffee. (will ≠ wil!)",
        ex: [["Don't worry, I'll help you with your bags.", 'Maak je geen zorgen, ik help je wel met je tassen.'], ['I think she will love the present.', 'Ik denk dat ze het cadeau geweldig zal vinden.']] },
      { t: 'Will of going to?', es: 'Will or going to',
        html: `<p><b>going to</b>: een <b>plan</b> dat al vaststaat, of iets wat je al ziet aankomen: <i>I'm <b>going to</b> study in Boston next year.</i> (al besloten) <i>Look at those clouds! It's <b>going to</b> rain.</i></p>
<p><b>will</b>: een <b>besluit op dit moment</b>, een belofte of een mening over de toekomst: <i>I'<b>ll</b> have the chicken, please.</i> (net besloten) <i>I think it <b>will</b> be a great year.</i></p>
<p>Afspraken die vastliggen (met tijd en plaats) zeg je vaak met de <b>present continuous</b>: <i>I'<b>m meeting</b> Tom at six.</i></p>`,
        table: [['situatie', 'vorm', 'voorbeeld'], ['vast plan', 'going to', "I'm going to buy a car."], ['spontaan besluit', 'will', "I'll take this one."], ['belofte', 'will', "I'll be there."], ['mening / voorspelling', 'will', 'I think you’ll like it.'], ['afspraak', 'present continuous', "I'm seeing the dentist on Friday."]],
        ex: [["We're going to visit Florida in March.", 'We gaan in maart naar Florida.'], ["It's cold. — I'll close the window.", 'Het is koud. — Ik doe het raam wel dicht.']] }
    ],
    dialogue: {
      t: 'Plans for the future', place: 'San Diego 🇺🇸',
      lines: [
        ['Olivia', "So, what are you going to do after your internship?", 'Wat ga je doen na je stage?'],
        ['Jesse', "I'm going to go back to the Netherlands and finish my master's.", 'Ik ga terug naar Nederland om mijn master af te maken.'],
        ['Olivia', 'And after that? Will you come back to the US?', 'En daarna? Kom je terug naar de VS?'],
        ['Jesse', "Maybe. I want to work in California someday. I think it will be difficult to get a visa, though.", 'Misschien. Ik wil ooit in Californië werken. Ik denk wel dat het moeilijk wordt om een visum te krijgen.'],
        ['Olivia', "Don't worry, I'll help you. My company hires a lot of international people.", 'Maak je geen zorgen, ik help je wel. Mijn bedrijf neemt veel internationale mensen aan.'],
        ['Jesse', 'Really? That would be amazing!', 'Echt? Dat zou geweldig zijn!'],
        ['Olivia', "I'll send you some information tonight. I promise.", 'Ik stuur je vanavond wat informatie. Beloofd.'],
        ['Jesse', "Thanks! I'll buy you dinner. What do you want to eat?", 'Dank je! Ik trakteer je op een etentje. Wat wil je eten?'],
        ['Olivia', "Tacos, of course. This is San Diego!", 'Taco’s natuurlijk. Dit is San Diego!']
      ],
      q: [
        { t: 'mc', q: "What is Jesse going to do after the internship?", o: ['Go back and finish his master’s', 'Stay in San Diego', 'Start a company'] },
        { t: 'mc', q: 'What does Olivia promise?', o: ['To send information tonight', 'To buy dinner', 'To give him a job'] },
        { t: 'mc', q: 'What does Olivia want to eat?', o: ['Tacos', 'Pizza', 'Sushi'] }
      ]
    },
    culture: { t: 'Werken in de VS', html: `<p>Om in de VS te mogen werken heb je een <b>visum</b> nodig, bijvoorbeeld een <i>H-1B</i> (voor hoogopgeleide werknemers) of een <i>J-1</i> (voor stages en uitwisselingen). Dat is ingewikkeld en duurt vaak lang.</p>
<p>Amerikanen praten graag over hun plannen en dromen: <i>Someday I'm going to start my own business!</i> Optimisme over de toekomst hoort bij de cultuur (de <i>American Dream</i>).</p>
<p>🌮 San Diego ligt vlak bij de Mexicaanse grens en heeft een sterke Mexicaanse invloed: je vindt er de beste taco’s van de VS.</p>` },
    ex: [
      { t: 'cloze', s: "It's dark. I ___ turn on the light.", a: ["'ll"], o: ["'ll", "'m going", 'want'], nl: 'Het is donker. Ik doe het licht wel aan.', tag: 'en-will' },
      { t: 'cloze', s: "I ___ a glass of water, please.", a: ['want'], o: ['want', 'will', 'wil'], nl: 'Ik wil een glas water, alstublieft.', tag: 'en-will' },
      { t: 'cloze', s: "Don't worry. I ___ tell anyone.", a: ["won't"], o: ["won't", "willn't", "don't will"], nl: 'Maak je geen zorgen. Ik vertel het aan niemand.', tag: 'en-will' },
      { t: 'cloze', s: "We ___ going to move to Boston in June. It's all planned.", a: ['are'], o: ['are', 'will', 'do'], nl: 'We gaan in juni naar Boston verhuizen. Het is allemaal gepland.', tag: 'en-future' },
      { t: 'cloze', s: 'Look at those black clouds! It’s ___ to rain.', a: ['going'], o: ['going', 'will', 'want'], nl: 'Kijk naar die zwarte wolken! Het gaat regenen.', tag: 'en-future' },
      { t: 'cloze', s: 'I think robots ___ do most jobs in the future.', a: ['will'], o: ['will', 'are going', 'want'], nl: 'Ik denk dat robots in de toekomst de meeste banen zullen doen.', tag: 'en-will' },
      { t: 'mc', q: 'Wat betekent «I will call you»?', o: ['Ik zal je bellen.', 'Ik wil je bellen.', 'Ik bel je nu.'], tag: 'en-will' },
      { t: 'mc', q: 'De ober vraagt wat je wilt. Je besluit nu. Je zegt:', o: ["I'll have the fish, please.", "I'm going to have the fish.", 'I will the fish.'], tag: 'en-future' },
      { t: 'mc', q: '«Zullen we gaan?» in het Engels:', o: ['Shall we go?', 'Will we go?', 'Want we go?'], tag: 'en-will' },
      { t: 'mc', q: 'Welke zin beschrijft een vast plan?', o: ["I'm going to study medicine next year.", "I'll study medicine, I promise!", 'I study medicine maybe.'], tag: 'en-future' },
      { t: 'tr', nl: 'Ik help je wel.', a: ["I'll help you.", 'I will help you.'], tag: 'en-will' },
      { t: 'tr', nl: 'Ik wil een nieuwe auto.', a: ['I want a new car.'], tag: 'en-will' },
      { t: 'tr', nl: 'Wat ga je dit weekend doen?', a: ['What are you going to do this weekend?', 'What are you doing this weekend?'], tag: 'en-future' },
      { t: 'order', s: "I think it will be a great year.", nl: 'Ik denk dat het een geweldig jaar wordt.', tag: 'en-will' },
      { t: 'match', p: [['probably', 'waarschijnlijk'], ['definitely', 'zeker'], ['someday', 'ooit'], ['to promise', 'beloven'], ['to retire', 'met pensioen gaan']], tag: 'en-will' }
    ],
    reading: {
      t: 'Life in 2050', type: 'Artikel',
      p: [
        ["What will life be like in 2050? Experts have some interesting predictions.", 'Hoe zal het leven eruitzien in 2050? Experts hebben een paar interessante voorspellingen.'],
        ["Most cars will drive themselves, and many people won't have a car at all. Robots will clean our homes and cook our dinners. We'll probably work only four days a week.", 'De meeste auto’s zullen zelf rijden, en veel mensen zullen helemaal geen auto meer hebben. Robots zullen ons huis schoonmaken en ons eten koken. We zullen waarschijnlijk maar vier dagen per week werken.'],
        ["But some things won't change. «People will still want to meet their friends and eat good food,» says one expert. «Technology can't change that.»", 'Maar sommige dingen veranderen niet. «Mensen zullen nog steeds hun vrienden willen ontmoeten en lekker willen eten,» zegt een expert. «Technologie kan dat niet veranderen.»']
      ],
      gl: [['predictions', 'voorspellingen'], ['themselves', 'zelf'], ['at all', 'helemaal (niet)']],
      q: [
        { t: 'mc', q: 'What will most cars do in 2050?', o: ['Drive themselves', 'Fly', 'Disappear'] },
        { t: 'mc', q: 'How many days a week will people probably work?', o: ['Four', 'Five', 'Two'] },
        { t: 'mc', q: "What won't change, according to the expert?", o: ['People will still want to meet friends', 'Cars', 'Work'] }
      ]
    },
    say: [["I'll call you tomorrow.", 'Ik bel je morgen.'], ['I want a coffee.', 'Ik wil een koffie.'], ["I'm going to visit Canada next year.", 'Ik ga volgend jaar naar Canada.'], ["I think it will rain.", 'Ik denk dat het gaat regenen.']],
    task: { nl: 'Schrijf 5 zinnen over je toekomst: twee vaste plannen (going to), twee voorspellingen (I think… will) en één belofte aan jezelf (I’ll… / I won’t…).', model: "Next summer I'm going to visit my cousin in Toronto. I'm also going to start a new job in September. I think the job will be hard but fun. I think I'll speak much better English next year. And I promise: I won't stop practicing!" },
    scenario: { nl: 'Een Amerikaanse collega vraagt naar je toekomstplannen.', role: 'You are Olivia, a friendly manager at a tech company in San Diego. The learner is finishing an internship. Ask about their plans and dreams (going to, will). Offer to help with something and make a promise. Mention that "will" and the Dutch "wil" are different if they mix them up.', goal: 'Vertel over je plannen en verwachtingen en reageer op een aanbod.' }
  });

  /* ───────────────────────── A2 · 8 ───────────────────────── */
  U({
    id: 'en-a2-08', level: 'A2', icon: '💼', title: 'At work', nl: 'Op het werk',
    goals: ['Over je werk en taken vertellen', 'Verplichtingen: have to / don’t have to', 'Regels: must / mustn’t, en waarom mustn’t ≠ «hoeft niet»'],
    vocab: [
      ['a job', 'een baan'], ['a company', 'een bedrijf'], ['an office', 'een kantoor'], ['a boss / a manager', 'een baas / manager'], ['a colleague / a coworker', 'een collega'],
      ['a meeting', 'een vergadering'], ['a deadline', 'een deadline'], ['to work from home', 'thuiswerken'], ['full-time', 'voltijds'], ['part-time', 'deeltijds'],
      ['a salary', 'een salaris'], ['to earn', 'verdienen'], ['a uniform', 'een uniform'], ['a shift', 'een dienst'], ['overtime', 'overuren'],
      ['to hire', 'aannemen'], ['to fire', 'ontslaan'], ['to quit', 'ontslag nemen'], ['a day off', 'een vrije dag'], ['vacation days', 'vakantiedagen'],
      ['What do you do?', 'Wat doe je voor werk?'], ['I work as a…', 'Ik werk als…'], ['I work for…', 'Ik werk bij… (bedrijf)'], ['a nurse', 'een verpleegkundige'], ['an engineer', 'een ingenieur']
    ],
    grammar: [
      { t: 'Have to en don’t have to', es: 'Have to',
        html: `<p><b>have to</b> = moeten (verplichting, vaak door regels of omstandigheden): <i>I <b>have to</b> wear a uniform. She <b>has to</b> work on Saturdays.</i></p>
<p><b>don't have to</b> = hoeven niet, het is niet nodig: <i>You <b>don't have to</b> wear a tie.</i> (Het mag wel, maar het hoeft niet.)</p>
<p>Verleden tijd: <b>had to</b>: <i>I <b>had to</b> work late yesterday.</i></p>
<p>Vraag: <i><b>Do</b> you <b>have to</b> work tomorrow?</i></p>`,
        table: [['', 'voorbeeld', 'Nederlands'], ['have to', 'I have to start at eight.', 'Ik moet om acht uur beginnen.'], ['has to', 'He has to travel a lot.', 'Hij moet veel reizen.'], ["don't have to", "You don't have to come.", 'Je hoeft niet te komen.'], ['had to', 'We had to wait.', 'We moesten wachten.']],
        sum: "I have to work. I don't have to wear a tie.",
        ex: [["Nurses have to work at night sometimes.", 'Verpleegkundigen moeten soms ’s nachts werken.'], ["I don't have to go to the office on Fridays.", 'Ik hoef op vrijdag niet naar kantoor.']] },
      { t: 'Must en mustn’t: pas op!', es: 'Must / mustn’t',
        html: `<p><b>must</b> = moeten (sterk, vaak een regel of eigen gevoel): <i>You <b>must</b> wear a helmet.</i> In gewoon Amerikaans Engels hoor je vaker <i>have to</i>; <i>must</i> zie je op bordjes en in regels.</p>
<p>⚠️ <b>mustn't</b> betekent <b>het mag niet</b>, het is verboden! <i>You <b>mustn't</b> smoke here.</i> (Je mag hier niet roken.)</p>
<p>Dat is iets heel anders dan <b>don't have to</b> (hoeft niet). Nederlanders verwarren dit vaak, omdat «moet niet» en «hoeft niet» op elkaar lijken.</p>
<p><i>You <b>mustn't</b> tell him.</i> = Je mag het hem niet vertellen. <i>You <b>don't have to</b> tell him.</i> = Je hoeft het hem niet te vertellen.</p>`,
        table: [['Engels', 'betekenis'], ['You must wear a helmet.', 'Je moet een helm dragen (regel).'], ["You mustn't park here.", 'Je mag hier niet parkeren!'], ["You don't have to park here.", 'Je hoeft hier niet te parkeren.'], ["You can't park here.", 'Je mag hier niet parkeren (spreektaal).']],
        ex: [["You mustn't use your phone while driving.", 'Je mag niet bellen tijdens het rijden.'], ["You don't have to pay. It's free.", 'Je hoeft niet te betalen. Het is gratis.']] }
    ],
    dialogue: {
      t: 'The first day', place: 'Atlanta 🇺🇸',
      lines: [
        ['Linda', "Welcome to the team, Bas! Let me show you around.", 'Welkom in het team, Bas! Ik laat je even rondkijken.'],
        ['Bas', 'Thank you! What time do I have to start?', 'Dank je! Hoe laat moet ik beginnen?'],
        ['Linda', "We start at nine, but you don't have to be here exactly at nine. Nine thirty is fine.", 'We beginnen om negen uur, maar je hoeft niet precies om negen uur hier te zijn. Half tien is ook prima.'],
        ['Bas', 'Great. Do I have to wear a suit?', 'Top. Moet ik een pak dragen?'],
        ['Linda', "No, you don't have to. Jeans are fine. But you mustn't wear shorts in the office.", 'Nee, dat hoeft niet. Een spijkerbroek is prima. Maar je mag geen korte broek dragen op kantoor.'],
        ['Bas', 'Can I work from home?', 'Kan ik thuiswerken?'],
        ['Linda', "Yes, on Fridays. But you have to come to the team meeting on Monday mornings.", 'Ja, op vrijdag. Maar je moet op maandagochtend naar het teamoverleg komen.'],
        ['Bas', "Okay. And lunch? In the Netherlands we eat sandwiches at our desks.", 'Oké. En de lunch? In Nederland eten we boterhammen aan ons bureau.'],
        ['Linda', "Same here! But on Thursdays the company buys pizza for everyone.", 'Hier ook! Maar op donderdag trakteert het bedrijf iedereen op pizza.']
      ],
      q: [
        { t: 'mc', q: 'Does Bas have to wear a suit?', o: ["No, he doesn't have to", 'Yes, every day', 'Only on Mondays'] },
        { t: 'mc', q: 'What mustn’t Bas wear?', o: ['Shorts', 'Jeans', 'A suit'] },
        { t: 'mc', q: 'When does Bas have to come to the office?', o: ['On Monday mornings', 'On Fridays', 'Never'] }
      ]
    },
    culture: { t: 'Werken in Amerika', html: `<p>Amerikanen hebben veel <b>minder vakantiedagen</b> dan Nederlanders: vaak maar 10 tot 15 dagen per jaar, en er is geen wettelijk minimum. Veel mensen nemen niet eens al hun dagen op.</p>
<p>Je kunt in de meeste staten zonder reden worden ontslagen (<i>at-will employment</i>). Daar staat tegenover dat je ook snel een nieuwe baan kunt vinden.</p>
<p>💼 Bij een kennismaking is <i>What do you do?</i> (Wat doe je voor werk?) een van de eerste vragen. Werk is in de VS een belangrijk deel van je identiteit.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ to get up at six for work.', a: ['have'], o: ['have', 'must', 'has'], nl: 'Ik moet om zes uur opstaan voor mijn werk.', tag: 'en-haveto' },
      { t: 'cloze', s: 'She ___ to travel a lot for her job.', a: ['has'], o: ['has', 'have', 'must'], nl: 'Ze moet veel reizen voor haar werk.', tag: 'en-haveto' },
      { t: 'cloze', s: "You don't ___ to bring anything. We have everything.", a: ['have'], o: ['have', 'must', 'need'], nl: 'Je hoeft niets mee te nemen. We hebben alles.', tag: 'en-haveto' },
      { t: 'cloze', s: "You ___ smoke in the building. It's forbidden.", a: ["mustn't"], o: ["mustn't", "don't have to", 'must'], nl: 'Je mag niet roken in het gebouw. Het is verboden.', tag: 'en-must' },
      { t: 'cloze', s: 'Yesterday I ___ to work until ten p.m.', a: ['had'], o: ['had', 'have', 'must'], nl: 'Gisteren moest ik tot tien uur ’s avonds werken.', tag: 'en-haveto' },
      { t: 'cloze', s: 'I work ___ a big tech company.', a: ['for'], o: ['for', 'by', 'at the'], nl: 'Ik werk bij een groot techbedrijf.', tag: 'en-haveto' },
      { t: 'mc', q: '«You mustn’t tell her» betekent…', o: ['Je mag het haar niet vertellen.', 'Je hoeft het haar niet te vertellen.', 'Je moet het haar vertellen.'], tag: 'en-must' },
      { t: 'mc', q: '«Je hoeft niet te komen» in het Engels:', o: ["You don't have to come.", "You mustn't come.", "You must not come."], tag: 'en-haveto' },
      { t: 'mc', q: 'Hoe vraag je naar iemands beroep?', o: ['What do you do?', 'What is your work doing?', 'What are you working?'], tag: 'en-haveto' },
      { t: 'mc', q: '«Ik werk als verpleegkundige»:', o: ['I work as a nurse.', 'I work like a nurse.', 'I work as nurse.'], tag: 'en-haveto' },
      { t: 'tr', nl: 'Moet je morgen werken?', a: ['Do you have to work tomorrow?'], tag: 'en-haveto' },
      { t: 'tr', nl: 'Je mag hier niet parkeren.', a: ["You mustn't park here.", "You can't park here.", 'You must not park here.', 'You cannot park here.'], tag: 'en-must' },
      { t: 'tr', nl: 'Ik hoef geen uniform te dragen.', a: ["I don't have to wear a uniform.", 'I do not have to wear a uniform.'], tag: 'en-haveto' },
      { t: 'order', s: "I have to finish this report before Friday.", nl: 'Ik moet dit verslag voor vrijdag afmaken.', tag: 'en-haveto' },
      { t: 'match', p: [['a deadline', 'een deadline'], ['a salary', 'een salaris'], ['to quit', 'ontslag nemen'], ['to hire', 'aannemen'], ['a coworker', 'een collega'], ['overtime', 'overuren']], tag: 'en-haveto' }
    ],
    reading: {
      t: 'Rules for new employees', type: 'Personeelshandboek',
      p: [
        ["Welcome to Green Leaf Foods! Here are some important rules. All employees must wear a name tag. In the kitchen, you must wear gloves and a hair net.", 'Welkom bij Green Leaf Foods! Hier zijn enkele belangrijke regels. Alle medewerkers moeten een naambordje dragen. In de keuken moet je handschoenen en een haarnetje dragen.'],
        ["You mustn't use your phone in the kitchen. You don't have to bring lunch: there is a free salad bar for employees.", 'Je mag je telefoon niet gebruiken in de keuken. Je hoeft geen lunch mee te nemen: er is een gratis saladebar voor medewerkers.'],
        ["If you are sick, you have to call your manager before 7 a.m. You don't have to bring a doctor's note for one day.", 'Als je ziek bent, moet je je manager voor 7 uur ’s ochtends bellen. Voor één dag hoef je geen doktersverklaring mee te nemen.']
      ],
      gl: [['a name tag', 'een naambordje'], ['gloves', 'handschoenen'], ["a doctor's note", 'een doktersverklaring']],
      q: [
        { t: 'mc', q: 'What mustn’t you do in the kitchen?', o: ['Use your phone', 'Wear gloves', 'Wear a name tag'] },
        { t: 'mc', q: 'Why don’t you have to bring lunch?', o: ['There is a free salad bar', 'Lunch is not allowed', 'You work only mornings'] },
        { t: 'mc', q: 'What do you have to do if you are sick?', o: ['Call your manager before 7 a.m.', 'Bring a doctor’s note', 'Send an email'] }
      ]
    },
    say: [['What do you do?', 'Wat doe je voor werk?'], ['I have to work late tonight.', 'Ik moet vanavond lang werken.'], ["You don't have to come.", 'Je hoeft niet te komen.'], ["You mustn't smoke here.", 'Je mag hier niet roken.']],
    task: { nl: 'Beschrijf je werk of studie in 5 zinnen: wat je doet, wat je moet doen (have to), wat niet hoeft (don’t have to) en één regel (mustn’t).', model: "I work as an engineer for a big company in Eindhoven. I have to start at half past eight. I don't have to wear a suit; jeans are fine. I have to go to a lot of meetings. We mustn't take photos in the lab." },
    scenario: { nl: 'Het is je eerste werkdag bij een Amerikaans bedrijf.', role: 'You are Linda, a friendly team manager at an office in Atlanta. It is the learner’s first day. Explain the office rules and answer their questions about hours, clothes, working from home and lunch. Use have to, don’t have to, must and mustn’t clearly.', goal: 'Stel vragen over de regels en begrijp wat je moet, niet hoeft en niet mag.' }
  });

  /* ───────────────────────── A2 · 9 ───────────────────────── */
  U({
    id: 'en-a2-09', level: 'A2', icon: '🍳', title: 'Let’s cook!', nl: 'Koken!',
    goals: ['Een recept volgen en uitleggen', 'Telbare en ontelbare woorden', 'much, many, a lot of, a little, a few'],
    vocab: [
      ['a recipe', 'een recept'], ['an ingredient', 'een ingrediënt'], ['flour', 'bloem / meel'], ['sugar', 'suiker'], ['butter', 'boter'],
      ['salt', 'zout'], ['pepper', 'peper'], ['oil', 'olie'], ['an onion', 'een ui'], ['garlic', 'knoflook'],
      ['a tomato', 'een tomaat'], ['a potato', 'een aardappel'], ['meat', 'vlees'], ['to cut', 'snijden'], ['to mix', 'mengen'],
      ['to boil', 'koken (in water)'], ['to fry', 'bakken (in de pan)'], ['to bake', 'bakken (in de oven)'], ['to add', 'toevoegen'], ['the oven', 'de oven'],
      ['a pan', 'een pan / koekenpan'], ['a cup', 'een kopje (maat)'], ['a spoonful', 'een lepel (vol)'], ['a slice', 'een plak / snee']
    ],
    grammar: [
      { t: 'Telbaar en ontelbaar', es: 'Countable / uncountable',
        html: `<p><b>Telbare</b> woorden kun je tellen: <i>an egg, two eggs, three tomatoes</i>. Ze hebben een meervoud.</p>
<p><b>Ontelbare</b> woorden kun je niet tellen: <i>water, milk, sugar, flour, butter, rice, bread, money</i>. Geen <i>a/an</i> en geen meervoud: <s>a sugar</s>, <s>breads</s>.</p>
<p>Wil je ze toch tellen, gebruik dan een maat: <i>a cup <b>of</b> sugar, a slice <b>of</b> bread, a bottle <b>of</b> water, a piece <b>of</b> cake</i>.</p>
<p>Let op: sommige woorden zijn in het Engels ontelbaar maar in het Nederlands niet: <i>advice</i> (advies/adviezen), <i>information, furniture, homework, news</i>.</p>`,
        table: [['telbaar', 'ontelbaar', 'maat'], ['an egg / eggs', 'bread', 'a slice of bread'], ['an apple / apples', 'water', 'a glass of water'], ['a tomato / tomatoes', 'sugar', 'a spoonful of sugar'], ['a cookie / cookies', 'cake', 'a piece of cake']],
        sum: 'two eggs, some milk, a cup of flour.',
        ex: [['We need three eggs and a cup of milk.', 'We hebben drie eieren en een kopje melk nodig.'], ['Can I have a slice of bread?', 'Mag ik een snee brood?']] },
      { t: 'Much, many, a lot of', es: 'Much / many / a lot of',
        html: `<p><b>many</b> + telbaar meervoud: <i>How <b>many</b> eggs? Not <b>many</b> tomatoes.</i></p>
<p><b>much</b> + ontelbaar: <i>How <b>much</b> sugar? Not <b>much</b> time.</i></p>
<p><b>a lot of</b> kan bij allebei, en is in bevestigende zinnen het gewoonst: <i>a lot of eggs, a lot of sugar</i>. Zeg liever <i>I have a lot of time</i> dan <i>I have much time</i>.</p>
<p>Een beetje / een paar: <b>a little</b> + ontelbaar (<i>a little salt</i>), <b>a few</b> + telbaar (<i>a few onions</i>).</p>`,
        table: [['', 'telbaar', 'ontelbaar'], ['hoeveel?', 'How many…?', 'How much…?'], ['veel', 'a lot of / many', 'a lot of / much'], ['een beetje / een paar', 'a few', 'a little'], ['niet veel', 'not many', 'not much']],
        ex: [['How much butter do we need?', 'Hoeveel boter hebben we nodig?'], ['Add a little salt and a few onions.', 'Voeg een beetje zout en een paar uien toe.']] }
    ],
    dialogue: {
      t: 'Dutch pancakes', place: 'A kitchen in Seattle 🇺🇸',
      lines: [
        ['Emma', "So, what are we making today?", 'Wat gaan we vandaag maken?'],
        ['Anouk', "Dutch pancakes! They're bigger and thinner than American pancakes.", 'Nederlandse pannenkoeken! Ze zijn groter en dunner dan Amerikaanse pancakes.'],
        ['Emma', 'Cool! How many eggs do we need?', 'Gaaf! Hoeveel eieren hebben we nodig?'],
        ['Anouk', "Three eggs, two cups of flour and about three cups of milk.", 'Drie eieren, twee kopjes bloem en ongeveer drie kopjes melk.'],
        ['Emma', 'How much sugar?', 'Hoeveel suiker?'],
        ['Anouk', "None! Just a little salt. We add the sweet stuff later.", 'Geen! Alleen een beetje zout. Het zoete doen we er later op.'],
        ['Emma', "Okay, I'm mixing everything. Now what?", 'Oké, ik meng alles. En nu?'],
        ['Anouk', "Heat a little butter in the pan. Pour in the batter and fry it for a few minutes on each side.", 'Verhit een beetje boter in de pan. Giet het beslag erin en bak het een paar minuten aan elke kant.'],
        ['Emma', 'And then maple syrup?', 'En dan ahornsiroop?'],
        ['Anouk', "No way! Dutch syrup or powdered sugar. Or bacon and cheese!", 'Echt niet! Nederlandse stroop of poedersuiker. Of spek en kaas!']
      ],
      q: [
        { t: 'mc', q: 'How many eggs do they need?', o: ['Three', 'Two', 'Four'] },
        { t: 'mc', q: 'How much sugar is in the batter?', o: ['None', 'A cup', 'A little'] },
        { t: 'mc', q: 'What does Anouk NOT want on the pancakes?', o: ['Maple syrup', 'Powdered sugar', 'Bacon and cheese'] }
      ]
    },
    culture: { t: 'Cups en Fahrenheit in de keuken', html: `<p>Amerikaanse recepten gebruiken geen grammen, maar <b>cups</b> (ongeveer 240 ml), <b>tablespoons</b> (eetlepels, tbsp) en <b>teaspoons</b> (theelepels, tsp). De oventemperatuur staat in <b>Fahrenheit</b>: 350 °F is ongeveer 175 °C.</p>
<p>Amerikaanse <b>pancakes</b> zijn klein, dik en luchtig, en worden gegeten met boter en <i>maple syrup</i>. Nederlandse pannenkoeken heten in de VS soms <i>Dutch crepes</i>. Een <i>Dutch baby</i> is iets heel anders: een soort ovenpannenkoek uit Seattle!</p>
<p>🍪 Een <i>cookie</i> is een koekje en een <i>biscuit</i> is in de VS een hartig broodje (in het VK juist een koekje).</p>` },
    ex: [
      { t: 'cloze', s: 'How ___ eggs do we need?', a: ['many'], o: ['many', 'much', 'a lot'], nl: 'Hoeveel eieren hebben we nodig?', tag: 'en-much' },
      { t: 'cloze', s: 'How ___ milk is there?', a: ['much'], o: ['much', 'many', 'lot'], nl: 'Hoeveel melk is er?', tag: 'en-much' },
      { t: 'cloze', s: 'Add a ___ salt.', a: ['little'], o: ['little', 'few', 'many'], nl: 'Voeg een beetje zout toe.', tag: 'en-much' },
      { t: 'cloze', s: 'Cut a ___ onions.', a: ['few'], o: ['few', 'little', 'much'], nl: 'Snijd een paar uien.', tag: 'en-much' },
      { t: 'cloze', s: 'Can I have a slice ___ cake?', a: ['of'], o: ['of', 'from', '—'], nl: 'Mag ik een stuk taart?', tag: 'en-count' },
      { t: 'cloze', s: 'I need some ___ for this recipe.', a: ['flour'], o: ['flour', 'flours', 'a flour'], nl: 'Ik heb wat bloem nodig voor dit recept.', tag: 'en-count' },
      { t: 'cloze', s: 'Bake the cake in the ___ for 30 minutes.', a: ['oven'], o: ['oven', 'pan', 'fridge'], nl: 'Bak de taart 30 minuten in de oven.', tag: 'en-count' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Can you give me some advice?', 'Can you give me an advice?', 'Can you give me some advices?'], tag: 'en-count' },
      { t: 'mc', q: 'Welk woord is ontelbaar?', o: ['butter', 'egg', 'tomato'], tag: 'en-count' },
      { t: 'mc', q: '«Bakken in de oven» is…', o: ['to bake', 'to fry', 'to boil'], tag: 'en-count' },
      { t: 'mc', q: 'Welke zin klinkt het meest natuurlijk?', o: ['I have a lot of time.', 'I have much time.', 'I have many time.'], tag: 'en-much' },
      { t: 'tr', nl: 'Hoeveel suiker heb je nodig?', a: ['How much sugar do you need?'], tag: 'en-much' },
      { t: 'tr', nl: 'We hebben niet veel tijd.', a: ["We don't have much time.", 'We do not have much time.', "We haven't got much time."], tag: 'en-much' },
      { t: 'order', s: 'Mix the flour with two eggs and some milk.', nl: 'Meng de bloem met twee eieren en wat melk.', tag: 'en-count' },
      { t: 'match', p: [['garlic', 'knoflook'], ['flour', 'bloem'], ['to boil', 'koken (in water)'], ['to fry', 'bakken (in de pan)'], ['a recipe', 'een recept']], tag: 'en-count' }
    ],
    reading: {
      t: 'Grandma’s chocolate chip cookies', type: 'Recept',
      p: [
        ["Ingredients: 1 cup of butter, 1 cup of sugar, 2 eggs, 2 and a half cups of flour, a little salt and a lot of chocolate chips!", 'Ingrediënten: 1 kopje boter, 1 kopje suiker, 2 eieren, 2,5 kopje bloem, een beetje zout en heel veel chocoladestukjes!'],
        ["First, mix the butter and sugar. Then add the eggs, one at a time. Slowly add the flour and salt. Finally, add the chocolate chips.", 'Meng eerst de boter en de suiker. Voeg dan de eieren toe, één voor één. Voeg langzaam de bloem en het zout toe. Doe er als laatste de chocoladestukjes bij.'],
        ["Put small balls of dough on a baking sheet. Bake at 350 degrees for 10 to 12 minutes. Don't eat too many at once!", 'Leg kleine bolletjes deeg op een bakplaat. Bak op 175 graden in 10 tot 12 minuten. Eet er niet te veel tegelijk!']
      ],
      gl: [['dough', 'deeg'], ['a baking sheet', 'een bakplaat'], ['at once', 'tegelijk']],
      q: [
        { t: 'mc', q: 'How many eggs do you need?', o: ['Two', 'One', 'Three'] },
        { t: 'mc', q: 'What do you add last?', o: ['The chocolate chips', 'The eggs', 'The butter'] },
        { t: 'mc', q: 'How long do you bake the cookies?', o: ['10 to 12 minutes', '30 minutes', 'One hour'] }
      ]
    },
    say: [['How many eggs do we need?', 'Hoeveel eieren hebben we nodig?'], ['Add a little salt.', 'Voeg een beetje zout toe.'], ['This smells delicious!', 'Dit ruikt heerlijk!'], ['Can I have the recipe?', 'Mag ik het recept?']],
    task: { nl: 'Schrijf een eenvoudig recept van een gerecht dat je vaak maakt (5–6 zinnen): ingrediënten met hoeveelheden, en de stappen. Gebruik a little / a few / a lot of en minstens drie kookwerkwoorden.', model: "My favorite dish is stamppot. You need a lot of potatoes, some kale, a little butter, a little milk and a few sausages. First, boil the potatoes and the kale for twenty minutes. Then mash them with the butter and milk. Add a little salt and pepper. Serve it with the sausages!" },
    scenario: { nl: 'Je kookt samen met een Amerikaanse vriendin een Nederlands gerecht.', role: 'You are Emma, an American friend in Seattle who loves cooking. The learner is teaching you to make a Dutch dish. Ask questions about the ingredients and quantities (How much…? How many…?) and the steps. Mention American measurements (cups, Fahrenheit) and compare with American food.', goal: 'Leg een recept uit met hoeveelheden en stappen.' }
  });

  /* ───────────────────────── A2 · 10 ───────────────────────── */
  U({
    id: 'en-a2-10', level: 'A2', icon: '❤️', title: 'If you’re free…', nl: 'Plannen, voorwaarden en relaties',
    goals: ['Voorwaarden met if + present, will (eerste conditional)', 'Bijwoorden: quickly, carefully, well', 'Afspreken, afzeggen en relaties beschrijven'],
    vocab: [
      ['if', 'als (voorwaarde)'], ['unless', 'tenzij'], ['as soon as', 'zodra'], ['a date', 'een afspraakje'], ['to go out', 'uitgaan'],
      ['to ask someone out', 'iemand mee uit vragen'], ['to break up', 'het uitmaken'], ['to fall in love', 'verliefd worden'], ['to get along', 'goed met elkaar overweg kunnen'], ['to argue', 'ruziemaken'],
      ['to cancel', 'afzeggen'], ['to be late', 'te laat zijn'], ['to make plans', 'plannen maken'], ['a relationship', 'een relatie'], ['a partner', 'een partner'],
      ['quickly', 'snel'], ['slowly', 'langzaam'], ['carefully', 'voorzichtig'], ['well', 'goed (bijwoord)'], ['hard', 'hard (werken)'],
      ['honestly', 'eerlijk gezegd'], ['Text me!', 'App me!'], ['No worries.', 'Geen zorgen.'], ['Maybe another time.', 'Misschien een andere keer.']
    ],
    grammar: [
      { t: 'If + present, will', es: 'First conditional',
        html: `<p>Voor een <b>echte mogelijkheid</b> in de toekomst gebruik je: <b>if + present simple</b>, <b>will + werkwoord</b>.</p>
<p><i><b>If</b> it <b>rains</b>, we'<b>ll stay</b> home. <b>If</b> you <b>are</b> free, I'<b>ll call</b> you.</i></p>
<p>Let op: na <b>if</b> gebruik je <b>géén will</b>: <s>If it will rain</s>. Net als in het Nederlands: «Als het regent» (niet «als het zal regenen»).</p>
<p>Ook na <b>when, as soon as, unless</b>: <i>I'll call you <b>when</b> I <b>arrive</b>. <b>Unless</b> it <b>rains</b>, we'll go.</i></p>
<p>Let op «als»: <b>if</b> = als (voorwaarde, misschien), <b>when</b> = als/wanneer (het gebeurt zeker): <i>When I get home, I'll eat.</i></p>`,
        table: [['if-zin (present)', 'hoofdzin (will)'], ['If it rains,', "we'll stay home."], ['If you study,', "you'll pass."], ["If I'm late,", "I'll text you."], ['When I arrive,', "I'll call you."]],
        sum: "If it rains, we'll stay home. (niet: if it will rain)",
        ex: [["If you're free on Saturday, we'll go to the beach.", 'Als je zaterdag vrij bent, gaan we naar het strand.'], ["I'll text you as soon as I get home.", 'Ik app je zodra ik thuis ben.']] },
      { t: 'Bijwoorden: -ly', es: 'Adverbs',
        html: `<p>Een <b>bijvoeglijk naamwoord</b> zegt iets over een zelfstandig naamwoord: <i>a <b>quick</b> lunch, a <b>careful</b> driver</i>.</p>
<p>Een <b>bijwoord</b> zegt iets over een werkwoord (hoe doe je iets?): <i>She eats <b>quickly</b>. He drives <b>carefully</b>.</i> Meestal: bijvoeglijk naamwoord + <b>-ly</b>.</p>
<p>In het Nederlands is dat hetzelfde woord («een snelle auto», «hij rijdt snel»). In het Engels niet! Fout: <s>He drives careful</s>.</p>
<p>Onregelmatig: <i>good → <b>well</b></i> (<i>She speaks English <b>well</b>.</i>), <i>fast → <b>fast</b></i>, <i>hard → <b>hard</b></i> (<i>hardly</i> betekent «nauwelijks»!).</p>`,
        table: [['bijv. nw.', 'bijwoord'], ['quick', 'quickly'], ['careful', 'carefully'], ['happy', 'happily'], ['good', 'well'], ['fast', 'fast'], ['hard', 'hard (hardly = nauwelijks)']],
        ex: [['You speak English very well!', 'Je spreekt heel goed Engels!'], ['Please drive carefully.', 'Rijd alsjeblieft voorzichtig.']] }
    ],
    dialogue: {
      t: 'A second date', place: 'Nashville 🇺🇸',
      lines: [
        ['Ryan', "Hey Lisa, I had a really great time last night.", 'Hé Lisa, ik vond het gisteravond echt heel leuk.'],
        ['Lisa', "Me too! You dance really well, by the way.", 'Ik ook! Je danst trouwens echt goed.'],
        ['Ryan', 'Ha, thanks. So, are you free on Friday?', 'Ha, dank je. Ben je vrijdag vrij?'],
        ['Lisa', "Maybe. If I finish work early, I'll be free.", 'Misschien. Als ik vroeg klaar ben met werken, ben ik vrij.'],
        ['Ryan', "Great. If the weather's nice, we'll have a picnic by the river.", 'Top. Als het mooi weer is, gaan we picknicken bij de rivier.'],
        ['Lisa', "And if it rains?", 'En als het regent?'],
        ['Ryan', "If it rains, I'll cook dinner for you. I cook quite well, too.", 'Als het regent, kook ik voor je. Ik kook ook best goed.'],
        ['Lisa', "Sounds perfect. I'll text you as soon as I know.", 'Klinkt perfect. Ik app je zodra ik het weet.'],
        ['Ryan', "Okay. Drive carefully! It's icy tonight.", 'Oké. Rijd voorzichtig! Het is glad vanavond.']
      ],
      q: [
        { t: 'mc', q: 'When will Lisa be free on Friday?', o: ['If she finishes work early', 'If it rains', 'After the picnic'] },
        { t: 'mc', q: 'What will they do if it rains?', o: ['Ryan will cook dinner', 'They will go dancing', 'They will cancel'] },
        { t: 'mc', q: 'Why does Ryan say «Drive carefully»?', o: ["It's icy tonight", "Lisa drives fast", "It's raining"] }
      ]
    },
    culture: { t: 'Daten in Amerika', html: `<p>In de VS is <b>dating</b> vaak formeler dan in Nederland. Iemand vraagt je mee uit (<i>to ask someone out</i>) voor een etentje of een drankje: dat heet een <i>date</i>. Na een paar dates bespreek je of je <i>exclusive</i> bent.</p>
<p>Wie betaalt? Traditioneel de persoon die de ander mee uit vroeg, maar steeds vaker deelt men de rekening (<i>to split the check</i>). Nederlanders noemen dat «Dutch» betalen: <i>to go Dutch</i>!</p>
<p>🎸 Nashville, Tennessee is de hoofdstad van de <b>countrymuziek</b>. Op Broadway (de straat) speelt in bijna elke bar elke avond live muziek.</p>` },
    ex: [
      { t: 'cloze', s: "If it ___ tomorrow, we'll stay home.", a: ['rains'], o: ['rains', 'will rain', 'rain'], nl: 'Als het morgen regent, blijven we thuis.', tag: 'en-if1' },
      { t: 'cloze', s: "If you study hard, you ___ pass the exam.", a: ['will'], o: ['will', 'would', 'are'], nl: 'Als je hard studeert, haal je het examen.', tag: 'en-if1' },
      { t: 'cloze', s: "I'll call you when I ___ home.", a: ['get'], o: ['get', 'will get', 'got'], nl: 'Ik bel je als ik thuis ben.', tag: 'en-if1' },
      { t: 'cloze', s: "We'll go to the beach ___ it rains.", a: ['unless'], o: ['unless', 'if', 'when'], nl: 'We gaan naar het strand, tenzij het regent.', tag: 'en-if1' },
      { t: 'cloze', s: 'She speaks English very ___.', a: ['well'], o: ['well', 'good', 'goodly'], nl: 'Ze spreekt heel goed Engels.', tag: 'en-adv' },
      { t: 'cloze', s: 'Please drive ___. The roads are icy.', a: ['carefully'], o: ['carefully', 'careful', 'carefuly'], nl: 'Rijd alsjeblieft voorzichtig. De wegen zijn glad.', tag: 'en-adv' },
      { t: 'cloze', s: 'He ran ___ to catch the bus.', a: ['quickly'], o: ['quickly', 'quick', 'quicker'], nl: 'Hij rende snel om de bus te halen.', tag: 'en-adv' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["If I'm late, I'll text you.", "If I will be late, I'll text you.", "If I'll be late, I text you."], tag: 'en-if1' },
      { t: 'mc', q: '«I hardly work» betekent…', o: ['Ik werk nauwelijks.', 'Ik werk heel hard.', 'Ik werk hard.'], tag: 'en-adv' },
      { t: 'mc', q: '«To go Dutch» betekent…', o: ['de rekening delen', 'naar Nederland gaan', 'fietsen'], tag: 'en-if1' },
      { t: 'mc', q: '«Ik app je zodra ik het weet»:', o: ["I'll text you as soon as I know.", "I'll text you as soon as I'll know.", 'I text you when I will know.'], tag: 'en-if1' },
      { t: 'tr', nl: 'Als je vrij bent, bel ik je.', a: ["If you're free, I'll call you.", 'If you are free, I will call you.', "If you're free, I will call you."], tag: 'en-if1' },
      { t: 'tr', nl: 'Hij werkt hard.', a: ['He works hard.'], tag: 'en-adv' },
      { t: 'order', s: "If the weather is nice, we'll have a picnic.", nl: 'Als het mooi weer is, gaan we picknicken.', tag: 'en-if1' },
      { t: 'match', p: [['to break up', 'het uitmaken'], ['to get along', 'goed overweg kunnen'], ['to cancel', 'afzeggen'], ['to argue', 'ruziemaken'], ['unless', 'tenzij']], tag: 'en-if1' }
    ],
    reading: {
      t: 'Dear Abby', type: 'Adviesrubriek',
      p: [
        ["Dear Abby, my boyfriend is always late. Yesterday he arrived an hour late for dinner with my parents! I love him, but I'm getting tired of waiting. What should I do? — Waiting in Wisconsin", 'Beste Abby, mijn vriend is altijd te laat. Gisteren kwam hij een uur te laat bij het etentje met mijn ouders! Ik hou van hem, maar ik word moe van het wachten. Wat moet ik doen? — Wachtend in Wisconsin'],
        ["Dear Waiting, talk to him calmly and honestly. If you tell him how you feel, he'll understand. Maybe he doesn't know how much it hurts you.", 'Beste Wachtend, praat rustig en eerlijk met hem. Als je hem vertelt hoe je je voelt, zal hij het begrijpen. Misschien weet hij niet hoeveel pijn het je doet.'],
        ["And here's a tip: next time, if he's more than 15 minutes late, start without him. If he misses dinner, he'll be on time next time! — Abby", 'En hier is een tip: als hij de volgende keer meer dan een kwartier te laat is, begin dan zonder hem. Als hij het eten mist, is hij de volgende keer wel op tijd! — Abby']
      ],
      gl: [['to get tired of', 'genoeg krijgen van'], ['calmly', 'rustig'], ['on time', 'op tijd']],
      q: [
        { t: 'mc', q: "What is the boyfriend's problem?", o: ['He is always late', 'He never calls', 'He cooks badly'] },
        { t: 'mc', q: 'How should she talk to him?', o: ['Calmly and honestly', 'Angrily', 'By text message'] },
        { t: 'mc', q: 'What should she do if he’s more than 15 minutes late?', o: ['Start dinner without him', 'Call his parents', 'Break up with him'] }
      ]
    },
    say: [["If you're free, let's meet.", 'Als je vrij bent, laten we afspreken.'], ["I'll text you when I get home.", 'Ik app je als ik thuis ben.'], ['You speak English really well!', 'Je spreekt echt goed Engels!'], ['Maybe another time.', 'Misschien een andere keer.']],
    task: { nl: 'Schrijf een appje (5 zinnen) aan een vriend om iets af te spreken voor het weekend, met minstens drie if-zinnen (Als het mooi weer is…, Als je geen tijd hebt…) en twee bijwoorden.', model: "Hi Ryan! Are you free on Saturday? If the weather's nice, we'll go to the lake. If it rains, we can watch a movie at my place. If you can't come, no worries. Text me quickly so I can make plans!" },
    scenario: { nl: 'Je maakt plannen met een Amerikaanse vriend, met allerlei «als…».', role: 'You are Ryan, a charming and easygoing American from Nashville. Make plans with the learner for the weekend. Use lots of first conditionals (If it rains, we’ll…; If you’re free, I’ll…) and ask them what they want to do in different situations. If they use «if … will» in the if-clause, gently correct it.', goal: 'Maak plannen met voorwaarden (if…) en spreek iets af.' }
  });
})(window.SPT);
