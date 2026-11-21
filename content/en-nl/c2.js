/* Engels voor Nederlandstaligen — niveau C2, units 1–5 (Amerikaans Engels, uitleg in het Nederlands).
   C2 = perfectioneren: connotatie, idioom, ironie, ellips, woordvorming. Het verschil tussen «heel goed» en «moedertaalniveau». */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'enx-nuance': 'connotatie en bijna-synoniemen', 'enx-idiom': 'beeldspraak, spreekwoorden en idioom', 'enx-irony': 'ironie, understatement en tussen de regels lezen',
    'enx-ellipsis': 'ellips en substitutie (so do I, if not, I hope so)', 'enx-wordform': 'woordvorming: voor- en achtervoegsels, samenstellingen', 'enx-dunglish': 'Dunglish: subtiele fouten van gevorderde Nederlanders',
    'enx-style': 'stijl, ritme en interpunctie', 'enx-spoken': 'spreektaal, slang en discourse markers', 'enx-register': 'vaktaal: juridisch, financieel en onderhandelen',
    'enx-culture': 'humor, woordspel en culturele verwijzingen'
  });

  /* ───────────────────────── C2 · 1 ───────────────────────── */
  U({
    id: 'en-c2-01', level: 'C2', icon: '🎨', title: 'Slim, skinny or scrawny?', nl: 'Connotatie en bijna-synoniemen',
    goals: ['Het verschil voelen tussen woorden met dezelfde betekenis maar een andere lading', 'Positief, neutraal en negatief kiezen: thrifty, frugal, stingy', 'Formeel versus informeel synoniem: commence / begin / kick off'],
    vocab: [
      ['slender', 'slank (positief)'], ['skinny', 'mager (neutraal tot negatief)'], ['scrawny', 'schriel'], ['thrifty', 'zuinig (positief)'], ['frugal', 'sober / zuinig'],
      ['stingy', 'gierig'], ['assertive', 'assertief (positief)'], ['pushy', 'opdringerig'], ['confident', 'zelfverzekerd'], ['arrogant', 'arrogant'],
      ['curious', 'nieuwsgierig'], ['nosy', 'bemoeizuchtig'], ['determined', 'vastberaden'], ['stubborn', 'koppig'], ['youthful', 'jeugdig'],
      ['childish', 'kinderachtig'], ['childlike', 'kinderlijk (onschuldig)'], ['to stroll', 'kuieren'], ['to stride', 'met grote passen lopen'], ['to trudge', 'sjokken'],
      ['to glance', 'een blik werpen'], ['to stare', 'staren'], ['to glare', 'boos aankijken'], ['to peer', 'turen'], ['to gaze', 'staren (dromerig)'],
      ['economical', 'zuinig (in gebruik)'], ['economic', 'economisch']
    ],
    grammar: [
      { t: 'Dezelfde betekenis, een andere lading', es: 'Connotation',
        html: `<p>Op C2-niveau gaat het er niet meer om óf je een woord kent, maar welke <b>lading</b> het heeft. Veel Engelse woorden hebben een positieve, neutrale en negatieve variant:</p>
<p><i>She's <b>slender</b></i> (compliment) — <i>She's <b>thin</b></i> (neutraal) — <i>She's <b>skinny</b></i> (eerder kritisch) — <i>She's <b>scrawny</b></i> (negatief).</p>
<p><i>He's <b>thrifty</b></i> (goed met geld) — <i>He's <b>frugal</b></i> (sober) — <i>He's <b>cheap</b> / <b>stingy</b></i> (gierig).</p>
<p>Nederlanders kiezen vaak het eerste woord uit het woordenboek. <i>My boss is very <b>stubborn</b></i> is negatief; als je bewondering bedoelt, zeg je <i><b>determined</b></i> of <i><b>persistent</b></i>.</p>`,
        table: [['positief', 'neutraal', 'negatief'], ['slender', 'thin', 'skinny / scrawny'], ['thrifty', 'frugal', 'stingy / cheap'], ['assertive', 'direct', 'pushy / aggressive'], ['curious', 'interested', 'nosy'], ['determined', 'firm', 'stubborn / pig-headed']],
        sum: 'Slender is a compliment. Skinny is not.',
        ex: [["She's very thrifty; she never wastes a cent.", 'Ze is heel zuinig; ze verspilt nooit een cent.'], ["Don't be so nosy. It's none of your business.", 'Wees niet zo bemoeizuchtig. Het gaat je niets aan.']] },
      { t: 'Precieze werkwoorden in plaats van «walk» en «look»', es: 'Precise verbs',
        html: `<p>Moedertaalsprekers vermijden het algemene <i>walk slowly</i> of <i>look angrily</i>. Ze gebruiken een <b>precies werkwoord</b> dat de manier al in zich heeft:</p>
<p><b>Lopen</b>: <i>stroll</i> (ontspannen), <i>stride</i> (vastberaden), <i>trudge</i> (moe, zwaar), <i>tiptoe</i> (op je tenen), <i>wander</i> (doelloos), <i>limp</i> (manken).</p>
<p><b>Kijken</b>: <i>glance</i> (kort), <i>stare</i> (lang, strak), <i>glare</i> (boos), <i>peer</i> (turen, moeite om te zien), <i>gaze</i> (lang, dromerig), <i>glimpse</i> (net even zien).</p>
<p>Zo wordt <i>She walked slowly and tiredly home</i> → <i>She <b>trudged</b> home.</i></p>`,
        table: [['algemeen', 'precies'], ['walk in a relaxed way', 'stroll'], ['walk tiredly', 'trudge'], ['walk confidently', 'stride'], ['look angrily', 'glare'], ['look quickly', 'glance'], ['look with difficulty', 'peer']],
        ex: [['He glared at me across the table.', 'Hij keek me over de tafel boos aan.'], ['We strolled along the beach at sunset.', 'We kuierden bij zonsondergang langs het strand.']] },
      { t: 'Verwarrende paren', es: 'Commonly confused words',
        html: `<p>Een paar paren gaan zelfs bij heel goede sprekers mis:</p>
<p><b>economic</b> (van de economie: <i>economic growth</i>) vs. <b>economical</b> (zuinig: <i>an economical car</i>).</p>
<p><b>childish</b> (kinderachtig, negatief) vs. <b>childlike</b> (kinderlijk, onschuldig, positief: <i>childlike wonder</i>).</p>
<p><b>historic</b> (historisch belangrijk: <i>a historic moment</i>) vs. <b>historical</b> (uit de geschiedenis: <i>historical documents</i>).</p>
<p><b>sensible</b> (verstandig) vs. <b>sensitive</b> (gevoelig). <b>Sensible</b> is géén «sensibel»!</p>`,
        table: [['woord', 'betekenis', 'voorbeeld'], ['economic', 'economisch', 'economic policy'], ['economical', 'zuinig', 'an economical car'], ['historic', 'historisch belangrijk', 'a historic victory'], ['historical', 'uit de geschiedenis', 'a historical novel'], ['sensible', 'verstandig', 'a sensible decision']],
        ex: [['She looked at the snow with childlike wonder.', 'Ze keek met kinderlijke verwondering naar de sneeuw.'], ["That's a very sensible idea.", 'Dat is een heel verstandig idee.']] }
    ],
    dialogue: {
      t: 'The reference letter', place: 'Boston 🇺🇸',
      lines: [
        ['Rachel', "Can you look at my reference letter for Jeroen before I send it?", 'Kun je even naar mijn referentiebrief voor Jeroen kijken voordat ik hem verstuur?'],
        ['Tom', "Sure. «Jeroen is very stubborn and pushy.» Hmm. Do you actually want him to get the job?", 'Tuurlijk. «Jeroen is very stubborn and pushy.» Hmm. Wil je eigenlijk wel dat hij de baan krijgt?'],
        ['Rachel', "Of course! I meant he never gives up.", 'Natuurlijk! Ik bedoelde dat hij nooit opgeeft.'],
        ['Tom', "Then say he's «determined» and «assertive». Same facts, completely different picture.", 'Zeg dan dat hij «determined» en «assertive» is. Dezelfde feiten, een totaal ander beeld.'],
        ['Rachel', "And «He is very cheap with company money»?", 'En «He is very cheap with company money»?'],
        ['Tom', "«Cheap» sounds like he won't buy a round of drinks. Try «He's careful and economical with company resources.»", '«Cheap» klinkt alsof hij nooit een rondje geeft. Probeer «He’s careful and economical with company resources.»'],
        ['Rachel', "Wow. English is a minefield.", 'Wauw. Engels is een mijnenveld.'],
        ['Tom', "Every language is. You just notice it more in someone else's.", 'Elke taal is dat. Je merkt het alleen meer in die van een ander.']
      ],
      q: [
        { t: 'mc', q: 'What did Rachel actually mean by «stubborn»?', o: ['He never gives up', 'He is difficult to work with', 'He is lazy'] },
        { t: 'mc', q: 'Why is «cheap» a problem?', o: ['It sounds negative, like he’s stingy', 'It’s too formal', 'It’s spelled wrong'] },
        { t: 'mc', q: 'What does Tom say about every language?', o: ['Every language is a minefield', 'English is the hardest', 'Dutch is easier'] }
      ]
    },
    culture: { t: 'Amerikaanse positiviteit', html: `<p>Amerikanen kiezen bijna altijd het <b>positiefste</b> woord dat nog waar is. Een probleem is een <i>challenge</i>, een zwak punt is an <i>area for growth</i>, en «niet slecht» is <i>pretty good</i>.</p>
<p>Nederlandse directheid («Dat is gewoon slecht») kan in de VS hard aankomen, zeker op papier. In referenties en beoordelingen lezen Amerikanen negatieve woorden als zware kritiek.</p>
<p>🔍 Omgekeerd: als een Amerikaan iets alleen <i>fine</i> of <i>interesting</i> noemt, is dat vaak een teken dat hij het níet goed vindt.</p>` },
    ex: [
      { t: 'cloze', s: "She's very ___; she saves money on everything without being mean.", a: ['thrifty'], o: ['thrifty', 'stingy', 'cheap'], nl: 'Ze is heel zuinig; ze bespaart op alles zonder gierig te zijn.', tag: 'enx-nuance' },
      { t: 'cloze', s: 'The model was tall and ___.', a: ['slender'], o: ['slender', 'scrawny', 'skinny'], nl: 'Het model was lang en slank.', tag: 'enx-nuance' },
      { t: 'cloze', s: 'After the long hike, we ___ back to the car.', a: ['trudged'], o: ['trudged', 'strolled', 'stared'], nl: 'Na de lange wandeling sjokten we terug naar de auto.', tag: 'enx-nuance' },
      { t: 'cloze', s: 'He ___ at me as if I had insulted his mother.', a: ['glared'], o: ['glared', 'glanced', 'gazed'], nl: 'Hij keek me boos aan alsof ik zijn moeder had beledigd.', tag: 'enx-nuance' },
      { t: 'cloze', s: 'This car is very ___: it uses very little gas.', a: ['economical'], o: ['economical', 'economic', 'economy'], nl: 'Deze auto is erg zuinig: hij verbruikt heel weinig benzine.', tag: 'enx-nuance' },
      { t: 'cloze', s: 'The fall of the Berlin Wall was a ___ moment.', a: ['historic'], o: ['historic', 'historical', 'history'], nl: 'De val van de Berlijnse Muur was een historisch moment.', tag: 'enx-nuance' },
      { t: 'cloze', s: 'Stop being so ___! You’re thirty, not five.', a: ['childish'], o: ['childish', 'childlike', 'childly'], nl: 'Doe niet zo kinderachtig! Je bent dertig, geen vijf.', tag: 'enx-nuance' },
      { t: 'mc', q: 'Welk woord is een compliment in een sollicitatiebrief?', o: ['determined', 'stubborn', 'pig-headed'], tag: 'enx-nuance' },
      { t: 'mc', q: '«My neighbor is very nosy» betekent…', o: ['Mijn buurman bemoeit zich overal mee', 'Mijn buurman heeft een grote neus', 'Mijn buurman is heel slim'], tag: 'enx-nuance' },
      { t: 'mc', q: 'Wat betekent «a sensible decision»?', o: ['een verstandig besluit', 'een gevoelig besluit', 'een sensibel besluit'], tag: 'enx-dunglish' },
      { t: 'mc', q: 'Je kijkt even snel op je horloge. Je…', o: ['glance at your watch', 'stare at your watch', 'gaze at your watch'], tag: 'enx-nuance' },
      { t: 'tr', nl: 'We kuierden door het park.', a: ['We strolled through the park.', 'We strolled in the park.', 'We strolled around the park.'], tag: 'enx-nuance' },
      { t: 'tr', nl: 'Ze is niet gierig, ze is zuinig.', a: ["She isn't stingy, she's thrifty.", 'She is not stingy, she is thrifty.', "She's not stingy, she's thrifty.", "She isn't cheap, she's thrifty."], tag: 'enx-nuance' },
      { t: 'order', s: 'The children watched the fireworks with childlike wonder.', nl: 'De kinderen keken met kinderlijke verwondering naar het vuurwerk.', tag: 'enx-nuance' },
      { t: 'match', p: [['to peer', 'turen'], ['to stride', 'met grote passen lopen'], ['to gaze', 'dromerig staren'], ['pushy', 'opdringerig'], ['frugal', 'sober']], tag: 'enx-nuance' }
    ],
    reading: {
      t: 'The same story, twice', type: 'Taalexperiment',
      p: [
        ["Read these two descriptions of the same man. Version one: «A skinny, stubborn old man trudged into the café, stared at the menu and demanded the cheapest coffee.»", 'Lees deze twee beschrijvingen van dezelfde man. Versie één: «Een magere, koppige oude man sjokte het café binnen, staarde naar de kaart en eiste de goedkoopste koffie.»'],
        ["Version two: «A slender, determined elderly gentleman strolled into the café, studied the menu and asked for the most economical coffee.»", 'Versie twee: «Een slanke, vastberaden oudere heer kuierde het café binnen, bestudeerde de kaart en vroeg om de voordeligste koffie.»'],
        ["Not a single fact has changed. He is still thin, still persistent, still careful with money. Yet most readers dislike the first man and quite like the second.", 'Er is geen enkel feit veranderd. Hij is nog steeds mager, nog steeds volhardend, nog steeds zuinig. Toch vinden de meeste lezers de eerste man onsympathiek en de tweede best aardig.'],
        ["This is the power of connotation. Journalists, lawyers and advertisers use it every day. At C2 level, you should be able to see it, and to use it yourself.", 'Dat is de kracht van connotatie. Journalisten, advocaten en reclamemakers gebruiken het elke dag. Op C2-niveau moet je het kunnen zien, en het zelf kunnen gebruiken.']
      ],
      gl: [['to demand', 'eisen'], ['persistent', 'volhardend'], ['advertisers', 'reclamemakers']],
      q: [
        { t: 'mc', q: 'How many facts change between the two versions?', o: ['None', 'One', 'All of them'] },
        { t: 'mc', q: 'How do most readers feel about the second man?', o: ['They quite like him', 'They dislike him', 'They feel sorry for him'] },
        { t: 'mc', q: 'Who uses connotation every day, according to the text?', o: ['Journalists, lawyers and advertisers', 'Only poets', 'Nobody on purpose'] }
      ]
    },
    say: [["She's thrifty, not stingy.", 'Ze is zuinig, niet gierig.'], ['He strode into the room.', 'Hij beende de kamer binnen.'], ["That's a very sensible decision.", 'Dat is een heel verstandig besluit.'], ['She glanced at her phone.', 'Ze wierp een blik op haar telefoon.']],
    task: { nl: 'Beschrijf iemand die je kent twee keer in 3 zinnen: één keer zo negatief mogelijk en één keer zo positief mogelijk, met precies dezelfde feiten. Gebruik woorden uit deze unit.', model: "Negative: My uncle is a stingy, stubborn man who stares at everyone and trudges around the house all day. Positive: My uncle is a thrifty, determined man who takes a real interest in people and likes to stroll around the house. Same uncle, very different impression." },
    scenario: { nl: 'Je schrijft samen met een Amerikaanse collega een functioneringsbeoordeling.', role: 'You are Tom, an American HR manager in Boston. Help the learner write a performance review for a team member. When they use words with a negative connotation (stubborn, pushy, cheap, nosy, bossy), point it out and suggest more diplomatic but honest alternatives. Discuss the difference in tone.', goal: 'Schrijf een eerlijke maar diplomatieke beoordeling met de juiste woordkeuze.' }
  });

  /* ───────────────────────── C2 · 2 ───────────────────────── */
  U({
    id: 'en-c2-02', level: 'C2', icon: '🐘', title: 'The elephant in the room', nl: 'Beeldspraak, spreekwoorden en idioom',
    goals: ['Idioom uit sport, zee en dieren herkennen en gebruiken', 'Spreekwoorden en hun verkorte vorm: «when in Rome…»', 'Nederlandse uitdrukkingen niet letterlijk vertalen'],
    vocab: [
      ['the elephant in the room', 'het probleem waar niemand over begint'], ['to step up to the plate', 'je verantwoordelijkheid nemen'], ['a whole new ball game', 'een heel andere situatie'], ['to touch base', 'even contact opnemen'], ['out of left field', 'totaal onverwacht'],
      ['a long shot', 'een gok met weinig kans'], ['to call the shots', 'de lakens uitdelen'], ['to learn the ropes', 'het vak leren'], ['to be on the same page', 'op één lijn zitten'], ['in the same boat', 'in hetzelfde schuitje'],
      ['to rock the boat', 'de boel op stelten zetten'], ['to go the extra mile', 'een stapje extra doen'], ['to cut corners', 'de kantjes ervan aflopen'], ['to bite the bullet', 'door de zure appel heen bijten'], ['to spill the beans', 'je mond voorbijpraten'],
      ['to let the cat out of the bag', 'een geheim verklappen'], ['a red herring', 'een afleidingsmanoeuvre'], ['to beat around the bush', 'eromheen draaien'], ['the last straw', 'de druppel die de emmer doet overlopen'], ['a blessing in disguise', 'een geluk bij een ongeluk'],
      ['to pull someone’s leg', 'iemand voor de gek houden'], ['once in a blue moon', 'zelden'], ['when pigs fly', 'met sint-juttemis']
    ],
    grammar: [
      { t: 'Amerikaans idioom: honkbal, zee en dieren', es: 'American idioms',
        html: `<p>Amerikaans zakelijk Engels zit vol <b>honkbaltaal</b>, ook bij mensen die nooit naar honkbal kijken:</p>
<p><i><b>step up to the plate</b></i> (verantwoordelijkheid nemen), <i><b>touch base</b></i> (even contact hebben), <i><b>out of left field</b></i> (onverwacht), <i><b>a ballpark figure</b></i> (een ruwe schatting), <i><b>right off the bat</b></i> (meteen), <i><b>a whole new ball game</b></i> (een heel andere situatie).</p>
<p>Uit de <b>zeevaart</b>: <i>learn the ropes, rock the boat, in the same boat, smooth sailing, on deck</i>.</p>
<p>Idioom is <b>vast</b>: je mag het woord niet vervangen. <s>The elephant in the house</s> of <s>touch the base</s> klinkt meteen vreemd.</p>`,
        table: [['idioom', 'betekenis'], ['a ballpark figure', 'een ruwe schatting'], ['right off the bat', 'meteen, direct'], ['out of left field', 'totaal onverwacht'], ["it's a whole new ball game", 'het is een heel andere situatie'], ['to learn the ropes', 'het vak leren']],
        sum: "Can you give me a ballpark figure? Let's touch base next week.",
        ex: [["Can you give me a ballpark figure for the budget?", 'Kun je me een ruwe schatting van het budget geven?'], ["Let's touch base again after the holidays.", 'Laten we na de feestdagen weer even contact hebben.']] },
      { t: 'Spreekwoorden en hun verkorte vorm', es: 'Proverbs',
        html: `<p>Moedertaalsprekers maken spreekwoorden vaak <b>niet af</b>. De luisteraar vult de rest aan:</p>
<p><i>Well, <b>when in Rome</b>…</i> (…do as the Romans do: doe zoals de lokale mensen). <i><b>Speak of the devil</b>!</i> (…and he shall appear: als je het over de duivel hebt). <i>It's a case of <b>the early bird</b>…</i> (…catches the worm). <i><b>If the shoe fits</b>…</i> (…wear it: wie de schoen past).</p>
<p>Ook vaak omgebogen: <i>It's not rocket science</i> (zo moeilijk is het niet), <i>Rome wasn't built in a day</i>.</p>`,
        table: [['verkort', 'volledig', 'Nederlands'], ['When in Rome…', '…do as the Romans do.', "'s lands wijs, 's lands eer"], ['Speak of the devil!', '…and he shall appear.', 'Als je het over de duivel hebt…'], ['The early bird…', '…catches the worm.', 'De morgenstond heeft goud in de mond.'], ['If the shoe fits…', '…wear it.', 'Wie de schoen past, trekke hem aan.']],
        ex: [["Speak of the devil! We were just talking about you.", 'Als je het over de duivel hebt! We hadden het net over jou.'], ['When in Rome… so we ate dinner at ten.', "'s Lands wijs, 's lands eer… dus we aten om tien uur."]] },
      { t: 'Nederlandse uitdrukkingen: niet letterlijk vertalen', es: 'Dutch idioms in English',
        html: `<p>Nederlandse uitdrukkingen letterlijk vertalen is een bekende bron van <b>Dunglish</b> (en van grappen):</p>
<p><s>That's another cook</s> (dat is een ander koekje) → <i>That's a different story / a whole new ball game.</i></p>
<p><s>I'm not from sugar</s> (ik ben niet van suiker) → <i>I won't melt.</i></p>
<p><s>Now comes the monkey out of the sleeve</s> → <i>Now the truth comes out / So that's the catch.</i></p>
<p><s>There is no cow on the ice</s> → <i>There's no rush / no harm done.</i></p>
<p><s>With the door in the house falling</s> → <i>to cut to the chase / to get straight to the point.</i></p>`,
        table: [['Nederlands', 'Engels'], ['de druppel die de emmer doet overlopen', 'the last straw'], ['met de deur in huis vallen', 'to cut to the chase'], ['dat is een ander koekje', "that's a different story"], ['ik ben niet van suiker', "I won't melt"], ['met sint-juttemis', 'when pigs fly']],
        ex: [["It's just a bit of rain. I won't melt.", "Het is maar een beetje regen. Ik ben niet van suiker."], ["Losing that job was a blessing in disguise.", 'Het verliezen van die baan was een geluk bij een ongeluk.']] }
    ],
    dialogue: {
      t: 'The team meeting', place: 'Chicago 🇺🇸',
      lines: [
        ['Mike', "Okay, team, let's address the elephant in the room: we're three weeks behind schedule.", 'Oké team, laten we het olifant-in-de-kamer-probleem aanpakken: we lopen drie weken achter.'],
        ['Femke', "I'll be honest, the client's new requirements came out of left field.", 'Eerlijk gezegd kwamen de nieuwe eisen van de klant totaal onverwacht.'],
        ['Mike', "Agreed. It's a whole new ball game now. Can you give me a ballpark figure for the extra time?", 'Mee eens. Het is nu een heel andere situatie. Kun je me een ruwe schatting geven van de extra tijd?'],
        ['Femke', "Two weeks, if we don't cut corners. And I don't think we should.", 'Twee weken, als we de kantjes er niet van aflopen. En ik vind niet dat we dat moeten doen.'],
        ['Mike', "Fine. We'll have to bite the bullet and tell the client.", 'Prima. We zullen door de zure appel heen moeten bijten en het de klant vertellen.'],
        ['Femke', "I can step up to the plate and call them, if you like.", 'Ik kan mijn verantwoordelijkheid nemen en ze bellen, als je wilt.'],
        ['Mike', "That'd be great. And don't beat around the bush. They'll appreciate the honesty.", 'Dat zou top zijn. En draai er niet omheen. Ze zullen de eerlijkheid waarderen.'],
        ['Femke', "Don't worry. I'm Dutch. Beating around the bush is not exactly my problem.", 'Maak je geen zorgen. Ik ben Nederlands. Eromheen draaien is niet echt mijn probleem.']
      ],
      q: [
        { t: 'mc', q: 'What is «the elephant in the room»?', o: ['They are three weeks behind', 'A new client', 'A budget surplus'] },
        { t: 'mc', q: 'How much extra time does Femke estimate?', o: ['Two weeks', 'Three weeks', 'One month'] },
        { t: 'mc', q: 'Why is Femke not worried about being direct?', o: ['She’s Dutch', 'She doesn’t like the client', 'Mike will help her'] }
      ]
    },
    culture: { t: 'Corporate speak en buzzwords', html: `<p>Amerikaans kantoor-Engels heeft eigen <b>jargon</b> dat soms bespot wordt: <i>circle back, move the needle, low-hanging fruit, think outside the box, synergy, bandwidth</i> («I don't have the bandwidth» = ik heb geen tijd).</p>
<p>Het is nuttig om dit te <b>begrijpen</b>, maar gebruik het spaarzaam. Te veel buzzwords klinken leeg en een beetje lachwekkend, zoals in de tv-serie <i>The Office</i>.</p>
<p>⚾ Honkbalidioom is wél normaal en hoor je overal, ook bij mensen die niet van sport houden.</p>` },
    ex: [
      { t: 'cloze', s: "Let's address the ___ in the room: the budget is too small.", a: ['elephant'], o: ['elephant', 'cow', 'monkey'], nl: 'Laten we het onbesproken probleem benoemen: het budget is te klein.', tag: 'enx-idiom' },
      { t: 'cloze', s: 'Can you give me a ___ figure? It doesn’t have to be exact.', a: ['ballpark'], o: ['ballpark', 'baseball', 'round'], nl: 'Kun je me een ruwe schatting geven? Het hoeft niet precies.', tag: 'enx-idiom' },
      { t: 'cloze', s: "It's only rain. I won't ___.", a: ['melt'], o: ['melt', 'dissolve', 'be sugar'], nl: 'Het is maar regen. Ik ben niet van suiker.', tag: 'enx-idiom' },
      { t: 'cloze', s: 'His comment came completely out of ___ field.', a: ['left'], o: ['left', 'right', 'the'], nl: 'Zijn opmerking kwam totaal onverwacht.', tag: 'enx-idiom' },
      { t: 'cloze', s: 'We’re all in the same ___, so let’s help each other.', a: ['boat'], o: ['boat', 'ship', 'house'], nl: 'We zitten allemaal in hetzelfde schuitje, dus laten we elkaar helpen.', tag: 'enx-idiom' },
      { t: 'cloze', s: 'Stop beating around the ___ and tell me what happened.', a: ['bush'], o: ['bush', 'tree', 'house'], nl: 'Draai er niet omheen en vertel me wat er is gebeurd.', tag: 'enx-idiom' },
      { t: 'cloze', s: 'Losing that job turned out to be a blessing in ___.', a: ['disguise'], o: ['disguise', 'secret', 'hiding'], nl: 'Het verlies van die baan bleek een geluk bij een ongeluk.', tag: 'enx-idiom' },
      { t: 'mc', q: '«Met de deur in huis vallen» in het Engels:', o: ['to cut to the chase', 'to fall with the door into the house', 'to break the door'], tag: 'enx-dunglish' },
      { t: 'mc', q: '«Met sint-juttemis» in het Engels:', o: ['when pigs fly', 'on Saint Jut’s day', 'once in a while'], tag: 'enx-idiom' },
      { t: 'mc', q: 'Wat betekent «Speak of the devil!»?', o: ['Daar heb je hem net, we hadden het over jou', 'Pas op, gevaar!', 'Ik geloof je niet'], tag: 'enx-idiom' },
      { t: 'mc', q: '«I’m just pulling your leg» betekent…', o: ['Ik hou je voor de gek', 'Ik help je overeind', 'Ik trek aan je been'], tag: 'enx-idiom' },
      { t: 'tr', nl: 'Dat was de druppel die de emmer deed overlopen.', a: ['That was the last straw.', 'It was the last straw.', 'That was the final straw.'], tag: 'enx-idiom' },
      { t: 'tr', nl: 'Laten we volgende week even contact hebben.', a: ["Let's touch base next week.", 'Let us touch base next week.'], tag: 'enx-idiom' },
      { t: 'order', s: "It's a whole new ball game now.", nl: 'Het is nu een heel andere situatie.', tag: 'enx-idiom' },
      { t: 'match', p: [['to cut corners', 'de kantjes ervan aflopen'], ['to spill the beans', 'je mond voorbijpraten'], ['to learn the ropes', 'het vak leren'], ['once in a blue moon', 'zelden'], ['to call the shots', 'de lakens uitdelen']], tag: 'enx-idiom' }
    ],
    reading: {
      t: 'Dunglish: a love story', type: 'Column',
      p: [
        ["When I moved to Utrecht, my Dutch colleagues spoke excellent English. Almost too excellent. They used words I had to look up. And then, every now and then, something wonderful would happen.", 'Toen ik naar Utrecht verhuisde, spraken mijn Nederlandse collega’s uitstekend Engels. Bijna té uitstekend. Ze gebruikten woorden die ik moest opzoeken. En dan, af en toe, gebeurde er iets prachtigs.'],
        ["«We have to fall with the door into the house,» said my manager in my first meeting. I nodded seriously and wrote it down. It was only later that a friend explained it meant «let's get straight to the point».", '«We have to fall with the door into the house,» zei mijn manager in mijn eerste vergadering. Ik knikte serieus en schreef het op. Pas later legde een vriend uit dat het «laten we meteen ter zake komen» betekende.'],
        ["Since then I've collected dozens. «I'm not from sugar.» «That's another cook.» «Now the monkey comes out of the sleeve.» My favorite remains «You can say that hard», which I now use myself.", 'Sindsdien heb ik er tientallen verzameld. «I’m not from sugar.» «That’s another cook.» «Now the monkey comes out of the sleeve.» Mijn favoriet blijft «You can say that hard», die ik nu zelf ook gebruik.'],
        ["I would never ask my colleagues to stop. These sentences are the best proof that a language is more than its words. They carry a whole culture, door, house and monkey included.", 'Ik zou mijn collega’s nooit vragen ermee te stoppen. Deze zinnen zijn het beste bewijs dat een taal meer is dan haar woorden. Ze dragen een hele cultuur met zich mee, inclusief deur, huis en aap.']
      ],
      gl: [['to look up', 'opzoeken'], ['dozens', 'tientallen'], ['proof', 'bewijs']],
      q: [
        { t: 'mc', q: 'How did the writer react in the first meeting?', o: ['They nodded and wrote it down', 'They laughed out loud', 'They asked what it meant'] },
        { t: 'mc', q: 'Which expression does the writer now use themselves?', o: ['You can say that hard', 'I’m not from sugar', 'That’s another cook'] },
        { t: 'mc', q: 'What does the writer think of Dunglish?', o: ['They love it', 'They find it annoying', 'They want colleagues to stop'] }
      ]
    },
    say: [["Let's address the elephant in the room.", 'Laten we het onbesproken probleem benoemen.'], ["It's not rocket science.", 'Zo moeilijk is het niet.'], ["Can you give me a ballpark figure?", 'Kun je een ruwe schatting geven?'], ["I'm just pulling your leg.", 'Ik hou je maar voor de gek.']],
    task: { nl: 'Schrijf een korte e-mail (5 zinnen) aan een Amerikaanse collega over een project dat tegenzit. Gebruik minstens vier idiomen uit deze unit, op een natuurlijke manier.', model: "Hi Mike, I'll cut to the chase: the client's new request came out of left field, and it's a whole new ball game now. Could you give me a ballpark figure for the extra cost? I'd rather not cut corners, so we may have to bite the bullet and ask for more time. Let's touch base on Thursday. Thanks, Femke" },
    scenario: { nl: 'Je hebt een informeel gesprek met een Amerikaanse collega vol idioom.', role: 'You are Mike, a chatty project manager from Chicago who uses a lot of American idioms (baseball and business). Talk with the learner about a project or their week. Use idioms naturally; if the learner seems unsure, explain one briefly. If they translate a Dutch idiom literally, react with friendly amusement and give the English equivalent.', goal: 'Begrijp en gebruik Amerikaans idioom in een natuurlijk gesprek.' }
  });

  /* ───────────────────────── C2 · 3 ───────────────────────── */
  U({
    id: 'en-c2-03', level: 'C2', icon: '🙃', title: 'Oh, great. Just perfect.', nl: 'Ironie, understatement en tussen de regels lezen',
    goals: ['Sarcasme en ironie herkennen aan woordkeus en intonatie', 'Understatement begrijpen: «not bad», «a bit of a problem»', 'Wat Amerikanen en Britten écht bedoelen'],
    vocab: [
      ['sarcasm', 'sarcasme'], ['irony', 'ironie'], ['understatement', 'understatement / onderdrijving'], ['overstatement', 'overdrijving'], ['deadpan', 'droog / met een stalen gezicht'],
      ['tongue-in-cheek', 'half grappend / ironisch'], ['to read between the lines', 'tussen de regels lezen'], ['a backhanded compliment', 'een compliment met een steek'], ['dry humor', 'droge humor'], ['to take something at face value', 'iets letterlijk opvatten'],
      ['to be lost on someone', 'aan iemand voorbijgaan'], ['subtle', 'subtiel'], ['a hint', 'een hint'], ['to imply', 'impliceren'], ['to infer', 'afleiden'],
      ['with all due respect', 'met alle respect'], ['interesting (ironisch)', 'vreemd / niet goed'], ['brave (ironisch)', 'gewaagd / dom'], ['I hear what you say', 'ik ben het niet met je eens'], ['not the sharpest tool in the shed', 'niet de slimste'],
      ['yeah, right', 'ja hoor, vast'], ['tell me about it', 'nou, wat je zegt'], ['big deal', 'nou en'], ['thanks a lot', 'nou bedankt (ironisch)']
    ],
    grammar: [
      { t: 'Sarcasme herkennen', es: 'Sarcasm',
        html: `<p>Bij sarcasme zeg je het <b>tegenovergestelde</b> van wat je bedoelt. In het Engels herken je het aan:</p>
<p><b>Overdreven positieve woorden</b> in een negatieve situatie: <i>Oh, <b>great</b>. My flight is canceled. <b>Just perfect</b>.</i></p>
<p><b>Vaste sarcastische reacties</b>: <i><b>Yeah, right.</b></i> (dat geloof ik niet), <i><b>Big deal.</b></i> (nou en), <i><b>Thanks a lot.</b></i> (dankjewel voor niks), <i><b>Tell me about it.</b></i> (wat je zegt, ik weet er alles van: dit is géén vraag!)</p>
<p><b>Intonatie</b>: langzaam, vlak of juist overdreven. <i>«Wow. What a surprise.»</i></p>
<p>Let op: <i>Tell me about it</i> betekent meestal níet «vertel het me»!</p>`,
        table: [['zin', 'letterlijk', 'bedoeld'], ['Yeah, right.', 'Ja, klopt.', 'Dat geloof ik niet.'], ['Tell me about it.', 'Vertel het me.', 'Ik weet er alles van.'], ['Big deal.', 'Groot ding.', 'Nou en?'], ['Thanks a lot.', 'Heel erg bedankt.', 'Dankjewel voor niks.'], ['Oh, great.', 'O, geweldig.', 'O nee.']],
        sum: '«Tell me about it» means: I know exactly what you mean.',
        ex: [['«This traffic is terrible.» «Tell me about it. I’ve been here for an hour.»', '«Dit verkeer is verschrikkelijk.» «Wat je zegt. Ik sta hier al een uur.»'], ['«He says he’ll pay me back tomorrow.» «Yeah, right.»', '«Hij zegt dat hij me morgen terugbetaalt.» «Ja hoor, vast.»']] },
      { t: 'Understatement', es: 'Understatement',
        html: `<p>Bij <b>understatement</b> maak je iets kleiner dan het is. Dat is typisch Brits, maar Amerikanen doen het ook:</p>
<p><i>It's <b>a bit</b> chilly</i> (bij -15 °C). <i>We have <b>a slight problem</b></i> (de server ligt plat). <i>He's <b>not the most patient</b> person</i> (hij is erg ongeduldig). <i><b>Not bad</b> at all</i> (heel goed).</p>
<p>Ontkenning van het tegendeel (<b>litotes</b>): <i>not unlike</i> (vergelijkbaar), <i>not without problems</i> (met flinke problemen), <i>no small achievement</i> (een grote prestatie).</p>
<p>Nederlanders die alles letterlijk nemen, missen hierdoor soms dat er écht iets mis is.</p>`,
        table: [['understatement', 'bedoeld'], ["It's a bit of a problem.", 'Het is een groot probleem.'], ["That's not ideal.", 'Dat is slecht.'], ['Not bad at all.', 'Heel goed.'], ['It was no small achievement.', 'Het was een geweldige prestatie.'], ["He's not exactly a genius.", 'Hij is niet slim.']],
        ex: [["The project was not without its challenges.", 'Het project kende flinke problemen.'], ["Running a marathon at 70 is no small achievement.", 'Op je 70e een marathon lopen is een geweldige prestatie.']] },
      { t: 'Wat ze écht bedoelen', es: 'Reading between the lines',
        html: `<p>Een paar beleefde zinnen hebben in zakelijke context een <b>verborgen betekenis</b>, vooral in het Brits, maar je hoort ze ook in de VS:</p>
<p><i><b>That's an interesting idea.</b></i> → Ik vind het geen goed idee.</p>
<p><i><b>With all due respect…</b></i> → Ik ga je nu flink tegenspreken.</p>
<p><i><b>I hear what you say.</b></i> → Ik ben het niet met je eens.</p>
<p><i><b>That's a very brave proposal.</b></i> → Dat is een dwaas plan.</p>
<p><i><b>I'll bear it in mind.</b></i> → Ik ga er niets mee doen.</p>
<p>Een <b>backhanded compliment</b> klinkt positief maar steekt: <i>You look great for your age.</i> <i>Your English is good for a Dutch person.</i></p>`,
        table: [['wat ze zeggen', 'wat ze bedoelen'], ["That's an interesting idea.", "I don't like it."], ['With all due respect…', "I think you're wrong."], ["I'll bear it in mind.", "I'll forget it."], ['Quite good.', 'Disappointing (Brits).'], ['Very brave.', 'Foolish.']],
        ex: [['With all due respect, I think the numbers are wrong.', 'Met alle respect, ik denk dat de cijfers niet kloppen.'], ["That's certainly an interesting approach.", 'Dat is zeker een… opvallende aanpak.']] }
    ],
    dialogue: {
      t: 'Delayed at O’Hare', place: 'Chicago O’Hare ✈️',
      lines: [
        ['Announcement', "We regret to inform you that flight 212 to Amsterdam has been delayed by four hours.", 'Tot onze spijt moeten wij u meedelen dat vlucht 212 naar Amsterdam vier uur vertraging heeft.'],
        ['Jake', "Oh, fantastic. Just what I needed today.", 'O, fantastisch. Precies wat ik vandaag nodig had.'],
        ['Anouk', "Wait, are you happy about it?", 'Wacht, ben je er blij mee?'],
        ['Jake', "Ha, no. That was sarcasm. I've got a meeting in Amsterdam at nine.", 'Ha, nee. Dat was sarcasme. Ik heb om negen uur een vergadering in Amsterdam.'],
        ['Anouk', "Ah. Well, that's a bit of a problem.", 'Ah. Nou, dat is een beetje een probleem.'],
        ['Jake', "A bit of a problem? Now who's being sarcastic?", 'Een beetje een probleem? Wie is er nu sarcastisch?'],
        ['Anouk', "That was understatement, actually. Very different. I learned it from the British.", 'Dat was een understatement, eigenlijk. Heel iets anders. Geleerd van de Britten.'],
        ['Jake', "Tell me about it. My boss is British. When he says «quite good», I start updating my résumé.", 'Wat je zegt. Mijn baas is Brits. Als hij «quite good» zegt, begin ik mijn cv bij te werken.']
      ],
      q: [
        { t: 'mc', q: 'How does Jake really feel about the delay?', o: ['Annoyed', 'Happy', 'Relieved'] },
        { t: 'mc', q: 'What does Anouk use instead of sarcasm?', o: ['Understatement', 'Overstatement', 'A compliment'] },
        { t: 'mc', q: 'What does Jake do when his boss says «quite good»?', o: ['He starts updating his résumé', 'He celebrates', 'He asks for a raise'] }
      ]
    },
    culture: { t: 'Amerikaanse versus Britse humor', html: `<p>Een bekend cliché: <b>Amerikaanse humor</b> is directer en uitbundiger, <b>Britse humor</b> is droger, met veel ironie en understatement. Er zit iets van waarheid in.</p>
<p>Amerikanen geven vaak een signaal dat ze een grapje maken: een lach, «just kidding», of «/s» online. Britten houden juist een stalen gezicht (<i>deadpan</i>).</p>
<p>🇳🇱 Nederlandse humor zit daar vaak tussenin, maar Nederlanders nemen Engelse beleefdheid nogal eens letterlijk. Als een Brit zegt «we must have lunch sometime», is dat zelden een uitnodiging.</p>` },
    ex: [
      { t: 'cloze', s: '«My car broke down again.» «Tell me ___ it. Mine’s been in the garage all week.»', a: ['about'], o: ['about', 'of', 'on'], nl: '«Mijn auto is weer kapot.» «Wat je zegt. De mijne staat al de hele week in de garage.»', tag: 'enx-irony' },
      { t: 'cloze', s: '«He says he’ll finish it today.» «Yeah, ___.»', a: ['right'], o: ['right', 'sure thing', 'correct'], nl: '«Hij zegt dat hij het vandaag afmaakt.» «Ja hoor, vast.»', tag: 'enx-irony' },
      { t: 'cloze', s: 'Running a company at 22 is no ___ achievement.', a: ['small'], o: ['small', 'little', 'big'], nl: 'Op je 22e een bedrijf runnen is een grote prestatie.', tag: 'enx-irony' },
      { t: 'cloze', s: 'With all due ___, I think you’re wrong.', a: ['respect'], o: ['respect', 'honor', 'regard'], nl: 'Met alle respect, ik denk dat je ongelijk hebt.', tag: 'enx-irony' },
      { t: 'cloze', s: "You shouldn't take everything he says at face ___.", a: ['value'], o: ['value', 'level', 'worth'], nl: 'Je moet niet alles wat hij zegt letterlijk opvatten.', tag: 'enx-irony' },
      { t: 'mc', q: 'Je buurman zegt bij -20 °C: «It’s a bit nippy today.» Dit is…', o: ['understatement', 'sarcasme', 'een compliment'], tag: 'enx-irony' },
      { t: 'mc', q: 'Een Britse manager zegt: «That’s a very brave proposal.» Hij bedoelt…', o: ['Ik vind het een dwaas plan.', 'Ik bewonder je moed.', 'Laten we het doen.'], tag: 'enx-irony' },
      { t: 'mc', q: '«You look great for your age» is een…', o: ['backhanded compliment', 'gewoon compliment', 'belediging zonder meer'], tag: 'enx-irony' },
      { t: 'mc', q: 'Je collega morst koffie op je laptop. Je zegt sarcastisch:', o: ['Thanks a lot.', 'Thank you very much indeed.', 'No problem at all.'], tag: 'enx-irony' },
      { t: 'mc', q: '«I’ll bear it in mind» betekent in een vergadering vaak…', o: ['Ik ga er niets mee doen.', 'Ik onthoud het zeker.', 'Ik ga het meteen regelen.'], tag: 'enx-irony' },
      { t: 'tr', nl: 'Het project kende flinke problemen. (understatement: not without…)', a: ['The project was not without its problems.', 'The project was not without problems.', 'The project was not without its challenges.'], tag: 'enx-irony' },
      { t: 'tr', nl: 'Wat je zegt! (ik weet er alles van)', a: ['Tell me about it!', 'Tell me about it.'], tag: 'enx-irony' },
      { t: 'order', s: "That's certainly an interesting idea.", nl: 'Dat is zeker een… interessant idee.', tag: 'enx-irony' },
      { t: 'match', p: [['deadpan', 'met een stalen gezicht'], ['to imply', 'impliceren'], ['to infer', 'afleiden'], ['tongue-in-cheek', 'half grappend'], ['subtle', 'subtiel']], tag: 'enx-irony' }
    ],
    reading: {
      t: 'What the British say, what they mean', type: 'Bekend lijstje',
      p: [
        ["Some years ago a table went viral online. It was titled «What the British say, what they mean, and what others understand». It was meant as a joke, but many people recognized it immediately.", 'Een paar jaar geleden ging er een tabel viraal. De titel was «Wat de Britten zeggen, wat ze bedoelen, en wat anderen begrijpen». Het was als grap bedoeld, maar veel mensen herkenden het meteen.'],
        ["«I hear what you say» means «I disagree and don't want to discuss it further». Others understand: «He accepts my point of view».", '«I hear what you say» betekent «Ik ben het niet met je eens en wil er niet verder over praten». Anderen begrijpen: «Hij accepteert mijn standpunt».'],
        ["«Very interesting» means «That is clearly nonsense». Others understand: «They are impressed». And «I'm sure it's my fault» means «It's your fault», while others hear exactly what was said.", '«Very interesting» betekent «Dat is duidelijk onzin». Anderen begrijpen: «Ze zijn onder de indruk». En «I’m sure it’s my fault» betekent «Het is jouw schuld», terwijl anderen precies horen wat er gezegd werd.'],
        ["In the original table, the «others» were Dutch. Perhaps that's no coincidence: Dutch directness and British politeness are almost perfect opposites.", 'In de oorspronkelijke tabel waren de «anderen» Nederlanders. Misschien is dat geen toeval: Nederlandse directheid en Britse beleefdheid zijn bijna perfecte tegenpolen.']
      ],
      gl: [['to go viral', 'viraal gaan'], ['nonsense', 'onzin'], ['coincidence', 'toeval']],
      q: [
        { t: 'mc', q: 'What does «I hear what you say» really mean?', o: ['I disagree', 'I agree completely', 'Please speak louder'] },
        { t: 'mc', q: 'Who were the «others» in the original table?', o: ['The Dutch', 'The Americans', 'The French'] },
        { t: 'mc', q: 'What does «I’m sure it’s my fault» really mean?', o: ['It’s your fault', 'It’s my fault', 'It’s nobody’s fault'] }
      ]
    },
    say: [['Oh, great. Just what I needed.', 'O, geweldig. Precies wat ik nodig had.'], ['Tell me about it.', 'Wat je zegt.'], ["It's not ideal.", 'Het is niet ideaal.'], ['With all due respect, I disagree.', 'Met alle respect, ik ben het er niet mee eens.']],
    task: { nl: 'Schrijf een kort dialoogje (6 regels) tussen twee collega’s op een slechte maandagochtend. Gebruik minstens één keer sarcasme, één understatement en één «verborgen betekenis»-zin.', model: "A: Oh, wonderful. The coffee machine is broken again. B: Tell me about it. I've had no coffee since six. A: And the boss wants the report by ten. B: That's a bit of a challenge. A: I suggested we postpone it. He said it was «an interesting idea». B: So that's a no, then." },
    scenario: { nl: 'Je praat met een Amerikaanse collega met een heel droog gevoel voor humor.', role: 'You are Jake, an American colleague with a very dry, sarcastic sense of humor. Chat with the learner about work or travel. Use sarcasm, understatement and phrases like «tell me about it» and «yeah, right» naturally. If the learner takes something literally, playfully explain what you meant. Encourage them to try sarcasm or understatement themselves.', goal: 'Herken sarcasme en understatement en gebruik ze zelf.' }
  });

  /* ───────────────────────── C2 · 4 ───────────────────────── */
  U({
    id: 'en-c2-04', level: 'C2', icon: '✂️', title: 'I hope so. So do I.', nl: 'Ellips en substitutie: zeggen zonder te herhalen',
    goals: ['Substitutie met so, not, one, do so: I think so, I hope not', 'Ellips: woorden weglaten die al bekend zijn: «I\u2019d love to.»', 'Korte reacties: So do I, Neither have I, I might'],
    vocab: [
      ['I think so', 'ik denk het wel'], ['I hope not', 'ik hoop van niet'], ['I’m afraid so', 'ik ben bang van wel'], ['I’m afraid not', 'helaas niet'], ['I suppose so', 'ik neem aan van wel'],
      ['I doubt it', 'ik betwijfel het'], ['if so', 'zo ja'], ['if not', 'zo niet'], ['so do I', 'ik ook'], ['neither do I', 'ik ook niet'],
      ['nor have I', 'ik ook niet'], ['to do so', 'dat doen'], ['the former', 'de eerste / het eerste'], ['the latter', 'de laatste / het laatste'], ['likewise', 'insgelijks / evenzo'],
      ['the same goes for', 'hetzelfde geldt voor'], ['I’d love to', 'heel graag'], ['you shouldn’t have', 'dat had je niet hoeven doen'], ['if need be', 'zo nodig'], ['if anything', 'eerder nog / zo mogelijk'],
      ['if at all', 'als het al'], ['as is', 'zoals het is'], ['as such', 'als zodanig']
    ],
    grammar: [
      { t: 'Substitutie met so en not', es: 'Substitution with so/not',
        html: `<p>Waar het Nederlands «het» of «van wel/niet» gebruikt, gebruikt het Engels <b>so</b> of <b>not</b>:</p>
<p><i>Is it going to rain? — I <b>think so</b>. / I <b>hope not</b>. / I'm <b>afraid so</b>. / I <b>don't think so</b>.</i></p>
<p>Fout: <s>I think it</s>, <s>I hope it</s>, <s>I hope so not</s>. Nederlanders zeggen vaak <s>I think so not</s> of <s>I hope it</s>: dat bestaat niet.</p>
<p>Bij <i>think, believe, expect, suppose</i> zeg je meestal <i>I <b>don't</b> think so</i> (natuurlijker dan <i>I think not</i>, dat formeel of grappig klinkt). Bij <i>hope</i> en <i>afraid</i> altijd <i>I hope <b>not</b></i>, <i>I'm afraid <b>not</b></i>.</p>
<p>Ook: <i><b>if so</b></i> (zo ja), <i><b>if not</b></i> (zo niet).</p>`,
        table: [['Nederlands', 'Engels'], ['Ik denk het wel.', 'I think so.'], ['Ik denk het niet.', "I don't think so."], ['Ik hoop van niet.', 'I hope not.'], ['Ik ben bang van wel.', "I'm afraid so."], ['Zo ja, …', 'If so, …']],
        sum: 'I think so. I hope not. If so… If not…',
        ex: [["«Will he come?» «I doubt it.»", '«Komt hij?» «Ik betwijfel het.»'], ["Are you free on Friday? If so, let's have lunch.", 'Ben je vrijdag vrij? Zo ja, laten we lunchen.']] },
      { t: 'So do I, neither have I: korte reacties', es: 'Short responses',
        html: `<p>Om te reageren met «ik ook» of «ik ook niet» herhaal je het <b>hulpwerkwoord</b> met inversie:</p>
<p><i>I love sushi. — <b>So do I.</b></i> <i>She's been to Japan. — <b>So have I.</b></i> <i>I can't swim. — <b>Neither can I.</b> / <b>Nor can I.</b></i> <i>I didn't see it. — <b>Neither did I.</b></i></p>
<p>Spreektaal: <i>Me too. / Me neither.</i> (prima informeel, maar <i>So do I</i> is netter).</p>
<p>Ook als <b>korte antwoorden</b> laat je het werkwoord weg en houd je het hulpwerkwoord: <i>Are you coming? — I <b>might</b>.</i> <i>Have you finished? — <b>Almost</b>.</i> <i>Would you like to join us? — I'<b>d love to</b>.</i> (niet <s>I'd love</s>).</p>`,
        table: [['bewering', '«ik ook»', '«ik ook niet» / anders'], ['I love jazz.', 'So do I.', "I don't."], ["I've seen it.", 'So have I.', "I haven't."], ["I can't come.", 'Neither can I.', 'I can.'], ["I wasn't there.", 'Neither was I.', 'I was.'], ["I'll help.", 'So will I.', "I won't."]],
        ex: [["«I've never been to Texas.» «Neither have I.»", '«Ik ben nog nooit in Texas geweest.» «Ik ook niet.»'], ["«Would you like to come?» «I'd love to.»", '«Wil je meekomen?» «Heel graag.»']] },
      { t: 'Ellips en verwijzing in formeel Engels', es: 'Ellipsis & reference',
        html: `<p>In formele teksten vermijd je herhaling met <b>do so</b>, <b>the former / the latter</b> en <b>one(s)</b>:</p>
<p><i>Employees may work from home if they wish to <b>do so</b>.</i> (= work from home)</p>
<p><i>Both Boston and Austin are great cities, but I prefer <b>the latter</b>.</i> (= Austin) <i><b>The former</b></i> = de eerste van twee.</p>
<p><i>I don't like the red shirt; I prefer the blue <b>one</b>.</i> Meervoud: <i>the blue <b>ones</b></i>.</p>
<p>En met hulpwerkwoorden: <i>He said he would call, but he <b>didn't</b>.</i> <i>I haven't read it, but I <b>will</b>.</i> In het Nederlands zeg je hier vaak «het»: <s>but he didn't do it</s> is niet fout, maar omslachtig.</p>`,
        table: [['herhaling', 'met ellips/substitutie'], ['If you want to leave, you may leave.', 'If you want to leave, you may do so.'], ['I prefer Austin to Boston; Austin is warmer.', 'I prefer Austin to Boston; the former is warmer.'], ["I wanted to call, but I didn't call.", "I wanted to call, but I didn't."], ['I like the old car more than the new car.', 'I like the old car more than the new one.']],
        ex: [["Customers who wish to cancel may do so online.", 'Klanten die willen opzeggen, kunnen dat online doen.'], ["She promised to help, and she did.", 'Ze beloofde te helpen, en dat deed ze ook.']] }
    ],
    dialogue: {
      t: 'Planning the weekend', place: 'Austin, Texas 🇺🇸',
      lines: [
        ['Lucas', "Are you going to the barbecue on Saturday?", 'Ga je zaterdag naar de barbecue?'],
        ['Iris', "I think so. Is Ryan coming?", 'Ik denk het wel. Komt Ryan ook?'],
        ['Lucas', "I hope not. He talked about crypto for three hours last time.", 'Ik hoop van niet. De vorige keer praatte hij drie uur over crypto.'],
        ['Iris', "Ha. I've never understood crypto.", 'Ha. Ik heb crypto nooit begrepen.'],
        ['Lucas', "Neither have I. And I'm not planning to.", 'Ik ook niet. En dat ben ik ook niet van plan.'],
        ['Iris', "Should I bring something? Maybe a salad?", 'Moet ik iets meenemen? Misschien een salade?'],
        ['Lucas', "If you'd like to. If not, no worries. There'll be enough food for an army.", 'Als je wilt. Zo niet, geen zorgen. Er is eten genoeg voor een heel leger.'],
        ['Iris', "I'd love to. I'll make my grandmother's potato salad.", 'Heel graag. Ik maak de aardappelsalade van mijn oma.'],
        ['Lucas', "Is it any good?", 'Is die lekker?'],
        ['Iris', "I'd like to think so. If anything, it's too good. People stop talking about crypto.", 'Ik denk het graag. Hij is zo mogelijk té lekker. Mensen houden op over crypto te praten.']
      ],
      q: [
        { t: 'mc', q: 'Why does Lucas hope Ryan isn’t coming?', o: ['He talked about crypto for hours', 'He never brings food', 'He always arrives late'] },
        { t: 'mc', q: 'What does Iris offer to bring?', o: ['Potato salad', 'Dessert', 'Drinks'] },
        { t: 'mc', q: 'What does «Neither have I» mean here?', o: ['I haven’t understood crypto either', 'I have understood crypto', 'I haven’t been to a barbecue'] }
      ]
    },
    culture: { t: 'Texas en de barbecue', html: `<p>In Texas is <b>barbecue</b> (of <i>BBQ</i>) geen roosteren op een grillplaat, maar urenlang (soms 12+ uur) <b>langzaam roken</b> van vlees, vooral <i>brisket</i> (runderborst). Austin is er beroemd om.</p>
<p>Wat Nederlanders «barbecueën» noemen, heet in de VS vaak <b>grilling</b>: <i>We're grilling burgers in the backyard.</i></p>
<p>🥗 Een <b>potluck</b> is een feest waar iedereen iets meeneemt. Vraag bij een uitnodiging altijd <i>Should I bring anything?</i> Het antwoord is vaak <i>Just yourself!</i>, maar iets meenemen wordt gewaardeerd.</p>` },
    ex: [
      { t: 'cloze', s: '«Will it rain tomorrow?» «I hope ___.»', a: ['not'], o: ['not', 'no', "it don't"], nl: '«Gaat het morgen regenen?» «Ik hoop van niet.»', tag: 'enx-ellipsis' },
      { t: 'cloze', s: '«Is the store still open?» «I think ___.»', a: ['so'], o: ['so', 'it', 'yes'], nl: '«Is de winkel nog open?» «Ik denk het wel.»', tag: 'enx-ellipsis' },
      { t: 'cloze', s: '«I’ve never seen snow.» «Neither ___ I.»', a: ['have'], o: ['have', 'do', 'am'], nl: '«Ik heb nog nooit sneeuw gezien.» «Ik ook niet.»', tag: 'enx-ellipsis' },
      { t: 'cloze', s: '«I really enjoyed the concert.» «So ___ I.»', a: ['did'], o: ['did', 'have', 'was'], nl: '«Ik heb echt genoten van het concert.» «Ik ook.»', tag: 'enx-ellipsis' },
      { t: 'cloze', s: '«Would you like to join us for dinner?» «I’d love ___.»', a: ['to'], o: ['to', 'it', 'that'], nl: '«Wil je met ons komen eten?» «Heel graag.»', tag: 'enx-ellipsis' },
      { t: 'cloze', s: 'Guests who wish to check out early may ___ so at the front desk.', a: ['do'], o: ['do', 'make', 'it'], nl: 'Gasten die eerder willen uitchecken, kunnen dat bij de receptie doen.', tag: 'enx-ellipsis' },
      { t: 'cloze', s: 'I like both cities, but I prefer the ___: Austin is warmer.', a: ['latter'], o: ['latter', 'later', 'last'], nl: 'Ik vind beide steden leuk, maar ik heb een voorkeur voor de laatste: Austin is warmer.', tag: 'enx-ellipsis' },
      { t: 'mc', q: '«Ik ben bang van wel» in het Engels:', o: ["I'm afraid so.", "I'm afraid of yes.", "I'm afraid it."], tag: 'enx-ellipsis' },
      { t: 'mc', q: 'Welke reactie op «I can’t drive.» is correct?', o: ['Neither can I.', 'Neither I can.', 'So can’t I.'], tag: 'enx-ellipsis' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["I don't think so.", 'I think so not.', "I don't think it."], tag: 'enx-dunglish' },
      { t: 'mc', q: '«Are you coming tonight?» Je weet het nog niet. Je zegt:', o: ['I might.', 'I might come it.', 'Maybe I do it.'], tag: 'enx-ellipsis' },
      { t: 'tr', nl: 'Ben je klaar? Zo ja, dan kunnen we gaan.', a: ["Are you ready? If so, we can go.", "Are you done? If so, we can go.", "Are you finished? If so, we can go.", "Are you ready? If so, we can leave."], tag: 'enx-ellipsis' },
      { t: 'tr', nl: 'Hij zei dat hij zou bellen, maar dat deed hij niet.', a: ["He said he would call, but he didn't.", "He said he'd call, but he didn't.", 'He said he would call, but he did not.'], tag: 'enx-ellipsis' },
      { t: 'order', s: "I haven't read the book yet, but I will.", nl: 'Ik heb het boek nog niet gelezen, maar dat ga ik doen.', tag: 'enx-ellipsis' },
      { t: 'match', p: [['if need be', 'zo nodig'], ['if anything', 'eerder nog'], ['if at all', 'als het al'], ['likewise', 'evenzo'], ['the former', 'de eerste']], tag: 'enx-ellipsis' }
    ],
    reading: {
      t: 'Why English hates repetition', type: 'Taalblog',
      p: [
        ["Teachers of English writing often tell students to avoid repeating the same word. Dutch is more tolerant of repetition; English feels it as clumsy.", 'Docenten Engels schrijven zeggen vaak tegen leerlingen dat ze niet steeds hetzelfde woord moeten herhalen. Het Nederlands verdraagt herhaling beter; het Engels voelt het als onhandig.'],
        ["Native speakers solve this in two ways. Sometimes they substitute: «I think so», «the latter», «do so», «one». Sometimes they simply leave words out: «I'd love to», «I might», «So have I».", 'Moedertaalsprekers lossen dit op twee manieren op. Soms vervangen ze: «I think so», «the latter», «do so», «one». Soms laten ze woorden gewoon weg: «I’d love to», «I might», «So have I».'],
        ["These short forms are so natural that leaving them out sounds odd. «Would you like to come?» — «Yes, I would like to come to the party» is grammatically perfect, but sounds like a robot.", 'Deze korte vormen zijn zo natuurlijk dat ze weglaten vreemd klinkt. «Would you like to come?» — «Yes, I would like to come to the party» is grammaticaal perfect, maar klinkt als een robot.'],
        ["If you want to sound fluent, listen for what native speakers don't say. Often, the missing words are the most important ones.", 'Als je vloeiend wilt klinken, luister dan naar wat moedertaalsprekers níet zeggen. Vaak zijn de ontbrekende woorden de belangrijkste.']
      ],
      gl: [['clumsy', 'onhandig'], ['tolerant', 'verdraagzaam'], ['odd', 'vreemd']],
      q: [
        { t: 'mc', q: 'How does English feel about repetition?', o: ['It feels clumsy', 'It sounds formal', 'It is preferred'] },
        { t: 'mc', q: 'What are the two ways native speakers avoid repetition?', o: ['Substitution and leaving words out', 'Synonyms and pauses', 'Gestures and slang'] },
        { t: 'mc', q: 'What does a full answer like «Yes, I would like to come to the party» sound like?', o: ['A robot', 'A poet', 'A child'] }
      ]
    },
    say: [['I hope not.', 'Ik hoop van niet.'], ["I'm afraid so.", 'Ik ben bang van wel.'], ['Neither have I.', 'Ik ook niet.'], ["I'd love to.", 'Heel graag.']],
    task: { nl: 'Schrijf een chatgesprek van 8 korte berichten waarin je met een vriend een etentje plant. Gebruik minstens vijf korte vormen uit deze unit (I think so, I hope not, So do I, Neither have I, I’d love to, if so, if not…).', model: "A: Are you free on Friday? B: I think so. Why? A: Want to try the new Thai place? B: I'd love to. Have you been there? A: No. B: Neither have I. Is it expensive? A: I hope not! If so, we'll just share a dish." },
    scenario: { nl: 'Je maakt plannen met een Amerikaanse vriend uit Austin.', role: 'You are Lucas, a relaxed friend from Austin, Texas. Make weekend plans with the learner (barbecue, live music, a trip). Ask lots of yes/no questions so they can practice short answers (I think so, I hope not, I’d love to, So do I, Neither have I). If they answer with long full sentences, gently model the shorter natural version.', goal: 'Maak plannen en reageer met korte, natuurlijke antwoorden.' }
  });

  /* ───────────────────────── C2 · 5 ───────────────────────── */
  U({
    id: 'en-c2-05', level: 'C2', icon: '🧱', title: 'Unbelievably, the misunderstanding was unforgettable', nl: 'Woordvorming: voor- en achtervoegsels, samenstellingen',
    goals: ['Woorden afleiden met voor- en achtervoegsels: un-, mis-, over-, -ness, -ity, -ize', 'Werkwoord wordt zelfstandig naamwoord en andersom (conversion)', 'Samenstellingen en Amerikaanse nieuwvormingen'],
    vocab: [
      ['to misunderstand', 'verkeerd begrijpen'], ['to mislead', 'misleiden'], ['to overestimate', 'overschatten'], ['to outperform', 'beter presteren dan'], ['to undergo', 'ondergaan'],
      ['to reconsider', 'heroverwegen'], ['unforgettable', 'onvergetelijk'], ['irreversible', 'onomkeerbaar'], ['inevitable', 'onvermijdelijk'], ['unprecedented', 'ongekend'],
      ['awareness', 'bewustzijn'], ['reliability', 'betrouwbaarheid'], ['to prioritize', 'prioriteren'], ['to broaden', 'verbreden'], ['to strengthen', 'versterken'],
      ['a breakthrough', 'een doorbraak'], ['a setback', 'een tegenslag'], ['a drawback', 'een nadeel'], ['an outcome', 'een uitkomst'], ['an upgrade', 'een upgrade'],
      ['a workaround', 'een noodoplossing'], ['a takeover', 'een overname'], ['to google', 'googelen'], ['to text', 'appen / sms’en']
    ],
    grammar: [
      { t: 'Voorvoegsels: betekenis veranderen', es: 'Prefixes',
        html: `<p>Met een <b>voorvoegsel</b> verander je de betekenis van een woord:</p>
<p><b>Ontkenning</b>: <i>un-</i> (unhappy), <i>in-</i> (incorrect), <i>im-</i> voor p/m/b (impossible, immature), <i>il-</i> voor l (illegal), <i>ir-</i> voor r (irregular), <i>dis-</i> (dishonest), <i>non-</i> (non-profit).</p>
<p><b>Verkeerd</b>: <i>mis-</i> (misunderstand, mislead, misspell). <b>Te veel / te weinig</b>: <i>over-</i>, <i>under-</i> (overestimate, underpaid). <b>Beter dan</b>: <i>out-</i> (outperform, outlive, outnumber). <b>Opnieuw</b>: <i>re-</i> (reconsider, rethink). <b>Vóór / na</b>: <i>pre-</i>, <i>post-</i> (pre-war, postgraduate).</p>
<p>Let op: <i>in-</i> betekent niet altijd «niet»: <i>inflammable</i> = <b>brandbaar</b> (net als <i>flammable</i>)! Het tegendeel is <i>non-flammable</i>.</p>`,
        table: [['voorvoegsel', 'betekenis', 'voorbeeld'], ['un- / in- / im- / il- / ir-', 'niet', 'unaware, inaccurate, impatient, illogical, irrelevant'], ['mis-', 'verkeerd', 'misinterpret, misjudge'], ['over- / under-', 'te veel / te weinig', 'overcook, underestimate'], ['out-', 'meer of beter dan', 'outgrow, outsmart'], ['re-', 'opnieuw', 'rebuild, redefine']],
        sum: 'impossible, illegal, irregular, misunderstand, outperform, reconsider',
        ex: [["I think you've misjudged the situation.", 'Ik denk dat je de situatie verkeerd hebt ingeschat.'], ['Small companies sometimes outperform big ones.', 'Kleine bedrijven presteren soms beter dan grote.']] },
      { t: 'Achtervoegsels: woordsoort veranderen', es: 'Suffixes',
        html: `<p>Met een <b>achtervoegsel</b> maak je van het ene woord een andere woordsoort:</p>
<p><b>Zelfstandig naamwoord</b>: <i>-ness</i> (awareness, kindness), <i>-ity</i> (reliability, creativity), <i>-ment</i> (development), <i>-tion/-sion</i> (decision), <i>-ance/-ence</i> (performance, independence), <i>-ship</i> (leadership), <i>-hood</i> (childhood).</p>
<p><b>Werkwoord</b>: <i>-ize</i> (prioritize, modernize, 🇬🇧 vaak <i>-ise</i>), <i>-en</i> (broaden, strengthen, widen), <i>-ify</i> (simplify, clarify).</p>
<p><b>Bijvoeglijk naamwoord</b>: <i>-able/-ible</i> (reliable, flexible), <i>-ful/-less</i> (useful, useless), <i>-ive</i> (creative), <i>-ous</i> (dangerous).</p>
<p>Klemtoon kan verschuiven: <i><b>PHO</b>tograph</i> → <i>pho<b>TO</b>grapher</i> → <i>photo<b>GRA</b>phic</i>.</p>`,
        table: [['werkwoord', 'zelfst. nw.', 'bijv. nw.'], ['rely', 'reliability', 'reliable'], ['create', 'creativity', 'creative'], ['decide', 'decision', 'decisive'], ['strengthen', 'strength', 'strong'], ['simplify', 'simplicity', 'simple']],
        ex: [['We need to prioritize our customers.', 'We moeten onze klanten voorrang geven.'], ['Reliability is more important than speed.', 'Betrouwbaarheid is belangrijker dan snelheid.']] },
      { t: 'Conversion en samenstellingen', es: 'Conversion & compounds',
        html: `<p><b>Conversion</b>: in het Engels kan een woord vaak zonder verandering van woordsoort wisselen. Zelfstandig naamwoord → werkwoord: <i>to <b>email</b> someone, to <b>text</b>, to <b>google</b>, to <b>host</b> a party, to <b>chair</b> a meeting, to <b>impact</b></i>. Werkwoord → zelfstandig naamwoord: <i>a <b>must</b>, a <b>buy</b> (a good buy), a <b>read</b> (a great read)</i>.</p>
<p><b>Phrasal verbs als zelfstandig naamwoord</b>: <i>break through → a <b>breakthrough</b></i>, <i>set back → a <b>setback</b></i>, <i>take over → a <b>takeover</b></i>, <i>work around → a <b>workaround</b></i>, <i>come out → the <b>outcome</b></i>.</p>
<p>Nieuwe Amerikaanse woorden ontstaan zo continu: <i>to <b>adult</b></i> (volwassen dingen doen), <i>to <b>ghost</b> someone</i> (iemand plots negeren), <i>a <b>staycation</b></i> (vakantie thuis).</p>`,
        table: [['phrasal verb', 'zelfst. nw.', 'betekenis'], ['break through', 'a breakthrough', 'een doorbraak'], ['set back', 'a setback', 'een tegenslag'], ['take over', 'a takeover', 'een overname'], ['work around', 'a workaround', 'een noodoplossing'], ['come out', 'an outcome', 'een uitkomst']],
        ex: [["The book is a great read.", 'Het boek leest heerlijk.'], ['After months of research, they finally had a breakthrough.', 'Na maanden onderzoek hadden ze eindelijk een doorbraak.']] }
    ],
    dialogue: {
      t: 'The startup pitch review', place: 'Seattle 🇺🇸',
      lines: [
        ['Dana', "Your deck is good, Joost, but some of the word choices are… unusual.", 'Je presentatie is goed, Joost, maar sommige woordkeuzes zijn… ongewoon.'],
        ['Joost', "Like what?", 'Zoals?'],
        ['Dana', "«Our product has a big unreliableness.» I think you mean «unreliability», but you really don't want to say that at all.", '«Our product has a big unreliableness.» Ik denk dat je «unreliability» bedoelt, maar dat wil je eigenlijk helemaal niet zeggen.'],
        ['Joost', "Oh no. I meant the competitors' products are unreliable.", 'O nee. Ik bedoelde dat de producten van de concurrenten onbetrouwbaar zijn.'],
        ['Dana', "Then say «We outperform competitors on reliability.» Short, strong, and you prioritize your strength.", 'Zeg dan «We outperform competitors on reliability.» Kort, krachtig, en je zet je sterke punt voorop.'],
        ['Joost', "Good. And the slide about last year?", 'Goed. En de dia over vorig jaar?'],
        ['Dana', "«We had a set back but then a break through.» Those are nouns here, so one word each: a setback, a breakthrough.", '«We had a set back but then a break through.» Dat zijn hier zelfstandige naamwoorden, dus één woord: a setback, a breakthrough.'],
        ['Joost', "Got it. I underestimated how tricky English word formation is.", 'Begrepen. Ik heb onderschat hoe lastig Engelse woordvorming is.'],
        ['Dana', "Don't worry. Your English is unbelievably good. That's not a backhanded compliment, I promise.", 'Maak je geen zorgen. Je Engels is ongelooflijk goed. Dat is geen compliment met een steek, beloofd.']
      ],
      q: [
        { t: 'mc', q: 'What did Joost actually want to say about reliability?', o: ['Competitors’ products are unreliable', 'His product is unreliable', 'Reliability doesn’t matter'] },
        { t: 'mc', q: 'How should «set back» and «break through» be written as nouns?', o: ['setback, breakthrough', 'set-back, break-through', 'set back, break through'] },
        { t: 'mc', q: 'What did Joost underestimate?', o: ['How tricky word formation is', 'The competition', 'The length of the pitch'] }
      ]
    },
    culture: { t: 'Amerikaans versus Brits spellen', html: `<p>Bij woordvorming zie je veel verschil in spelling:</p>
<p>🇺🇸 <b>-ize</b>, <b>-or</b>, <b>-er</b>, <b>-ense</b>: <i>organize, color, center, defense, traveled</i></p>
<p>🇬🇧 <b>-ise</b>, <b>-our</b>, <b>-re</b>, <b>-ence</b>: <i>organise, colour, centre, defence, travelled</i></p>
<p>Deze verschillen komen grotendeels van Noah Webster, die in 1828 zijn <i>American Dictionary of the English Language</i> publiceerde. Hij wilde een eenvoudigere, «Amerikaanse» spelling.</p>
<p>✍️ Kies één stijl en blijf consequent. In deze cursus gebruiken we Amerikaanse spelling.</p>` },
    ex: [
      { t: 'cloze', s: 'It is ___ to park here. You’ll get a ticket.', a: ['illegal'], o: ['illegal', 'unlegal', 'inlegal'], nl: 'Het is verboden hier te parkeren. Je krijgt een bon.', tag: 'enx-wordform' },
      { t: 'cloze', s: 'That comment is completely ___ to our discussion.', a: ['irrelevant'], o: ['irrelevant', 'unrelevant', 'inrelevant'], nl: 'Die opmerking is totaal irrelevant voor onze discussie.', tag: 'enx-wordform' },
      { t: 'cloze', s: "Don't ___ him. He's smarter than he looks.", a: ['underestimate'], o: ['underestimate', 'misestimate', 'outestimate'], nl: 'Onderschat hem niet. Hij is slimmer dan hij lijkt.', tag: 'enx-wordform' },
      { t: 'cloze', s: 'Our team ___ the competition in every category.', a: ['outperformed'], o: ['outperformed', 'overperformed', 'reperformed'], nl: 'Ons team presteerde in elke categorie beter dan de concurrentie.', tag: 'enx-wordform' },
      { t: 'cloze', s: 'We need to ___ our team with two new developers.', a: ['strengthen'], o: ['strengthen', 'strongen', 'strengthify'], nl: 'We moeten ons team versterken met twee nieuwe ontwikkelaars.', tag: 'enx-wordform' },
      { t: 'cloze', s: 'Customers care most about ___.', a: ['reliability'], o: ['reliability', 'reliableness', 'reliance'], nl: 'Klanten vinden betrouwbaarheid het belangrijkst.', tag: 'enx-wordform' },
      { t: 'cloze', s: 'The scientists finally made a ___ in cancer research.', a: ['breakthrough'], o: ['breakthrough', 'break through', 'throughbreak'], nl: 'De wetenschappers boekten eindelijk een doorbraak in kankeronderzoek.', tag: 'enx-wordform' },
      { t: 'mc', q: 'Wat betekent «inflammable»?', o: ['brandbaar', 'onbrandbaar', 'ontstoken'], tag: 'enx-wordform' },
      { t: 'mc', q: 'Wat is het zelfstandig naamwoord van «aware»?', o: ['awareness', 'awarity', 'awarement'], tag: 'enx-wordform' },
      { t: 'mc', q: '«This novel is a great read» betekent…', o: ['Dit boek leest heerlijk.', 'Dit boek is rood.', 'Dit boek is groot.'], tag: 'enx-wordform' },
      { t: 'mc', q: '«She ghosted me» betekent…', o: ['Ze liet ineens niets meer van zich horen.', 'Ze schrok me de stuipen op het lijf.', 'Ze schreef mijn tekst.'], tag: 'enx-wordform' },
      { t: 'tr', nl: 'Ik heb hem verkeerd begrepen.', a: ['I misunderstood him.', 'I have misunderstood him.', "I've misunderstood him."], tag: 'enx-wordform' },
      { t: 'tr', nl: 'De gevolgen zijn onomkeerbaar.', a: ['The consequences are irreversible.', 'The effects are irreversible.'], tag: 'enx-wordform' },
      { t: 'order', s: 'The company faced an unprecedented setback last year.', nl: 'Het bedrijf kreeg vorig jaar een ongekende tegenslag te verwerken.', tag: 'enx-wordform' },
      { t: 'match', p: [['a workaround', 'een noodoplossing'], ['a takeover', 'een overname'], ['an outcome', 'een uitkomst'], ['inevitable', 'onvermijdelijk'], ['to broaden', 'verbreden'], ['to reconsider', 'heroverwegen']], tag: 'enx-wordform' }
    ],
    reading: {
      t: 'How new words are born', type: 'Populairwetenschappelijk artikel',
      p: [
        ["Every year, dictionaries like Merriam-Webster add hundreds of new words. Very few are truly new. Most are built from old pieces, like Lego.", 'Elk jaar voegen woordenboeken als Merriam-Webster honderden nieuwe woorden toe. Maar weinig daarvan zijn echt nieuw. De meeste zijn opgebouwd uit oude stukjes, zoals Lego.'],
        ["Some words are blends of two others: «brunch» (breakfast and lunch), «podcast» (iPod and broadcast) and «staycation» (stay and vacation).", 'Sommige woorden zijn mengsels van twee andere: «brunch» (breakfast en lunch), «podcast» (iPod en broadcast) en «staycation» (stay en vacation).'],
        ["Others come from conversion: a noun simply starts being used as a verb. Twenty years ago, nobody «googled» anything. Today, your grandmother probably does.", 'Andere ontstaan door conversie: een zelfstandig naamwoord wordt gewoon als werkwoord gebruikt. Twintig jaar geleden «googelde» niemand iets. Tegenwoordig doet je oma het waarschijnlijk.'],
        ["English is unusually flexible in this way. That flexibility is one reason why it has more words than almost any other language, and why learning it never really ends.", 'Het Engels is op dit gebied ongewoon flexibel. Die flexibiliteit is een van de redenen waarom het meer woorden heeft dan bijna elke andere taal, en waarom je er eigenlijk nooit klaar mee bent.']
      ],
      gl: [['a blend', 'een mengsel'], ['to broadcast', 'uitzenden'], ['flexibility', 'flexibiliteit']],
      q: [
        { t: 'mc', q: 'What does the article compare word formation to?', o: ['Lego', 'Cooking', 'Painting'] },
        { t: 'mc', q: 'Which two words make «staycation»?', o: ['stay and vacation', 'station and vacation', 'stay and location'] },
        { t: 'mc', q: 'Why does learning English «never really end»?', o: ['It keeps creating new words', 'The grammar keeps changing', 'There are too many accents'] }
      ]
    },
    say: [["I think I misunderstood you.", 'Ik denk dat ik je verkeerd begreep.'], ['We outperformed the competition.', 'We presteerden beter dan de concurrentie.'], ["It was a temporary setback.", 'Het was een tijdelijke tegenslag.'], ['We need to prioritize.', 'We moeten prioriteiten stellen.']],
    task: { nl: 'Beschrijf in 5 zinnen een project, studie of hobby met een tegenslag en een doorbraak. Gebruik minstens zes woorden met voor- of achtervoegsels (mis-, over-, out-, re-, -ness, -ity, -ize, -en) en twee phrasal-verb-zelfstandige-naamwoorden (setback, breakthrough, outcome…).', model: "Last year I decided to rebuild an old sailboat. I had seriously underestimated the work, and after a major setback with the engine I almost gave up. My friend helped me reconsider the plan and prioritize the most important repairs. The breakthrough came when we found a simple workaround for the electrical problems. The outcome was unforgettable: our first trip on the IJsselmeer." },
    scenario: { nl: 'Je oefent een pitch voor investeerders met een Amerikaanse startup-coach.', role: 'You are Dana, a startup advisor in Seattle. The learner pitches a company or product idea. Help them sharpen their vocabulary: suggest stronger derived words (outperform, prioritize, reliability, breakthrough), and correct word-formation errors (e.g. unreliableness, set back as a noun, inlegal). Keep the conversation practical and encouraging.', goal: 'Pitch je idee met precieze, goed gevormde woorden.' }
  });
})(window.SPT);
