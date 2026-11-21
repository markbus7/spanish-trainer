/* Engels voor Nederlandstaligen — niveau C1, units 1–5 (Amerikaans Engels, uitleg in het Nederlands).
   Op C1 draait het om nuance: nadruk, register, collocaties en idioom, en de fouten die zelfs heel goede Nederlandse sprekers nog maken. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'enc-inversion': 'inversie (Never have I…, Had I known…)', 'enc-cleft': 'cleft sentences en nadruk', 'enc-hedge': 'beleefd en voorzichtig formuleren',
    'enc-colloc': 'sterke collocaties', 'enc-idiom': 'idioom en uitdrukkingen', 'enc-participle': 'participle clauses (Having finished…)',
    'enc-article': 'lidwoorden en telbaarheid', 'enc-academic': 'academische en zakelijke stijl', 'enc-present': 'presenteren en overtuigen', 'enc-subjunctive': 'subjunctive en formele constructies',
    'enc-stress': 'klemtoon en uitspraak'
  });

  /* ───────────────────────── C1 · 1 ───────────────────────── */
  U({
    id: 'en-c1-01', level: 'C1', icon: '🔄', title: 'Never have I seen such a mess', nl: 'Inversie voor nadruk en stijl',
    goals: ['Inversie na negatieve woorden: Never have I…, Not only did she…', 'Voorwaardelijke inversie: Had I known…, Should you need…, Were it not for…', 'Weten wanneer inversie natuurlijk klinkt en wanneer gekunsteld'],
    vocab: [
      ['seldom', 'zelden'], ['rarely', 'zelden'], ['scarcely', 'nauwelijks'], ['hardly … when', 'nauwelijks … of'], ['no sooner … than', 'nog maar net … of'],
      ['under no circumstances', 'in geen geval'], ['on no account', 'onder geen beding'], ['not until', 'pas toen / pas als'], ['only then', 'pas toen'], ['little did I know', 'ik had geen idee'],
      ['at no point', 'op geen enkel moment'], ['nowhere else', 'nergens anders'], ['so great was', 'zo groot was'], ['such was', 'zo groot was (zodanig)'], ['were it not for', 'als … er niet was geweest'],
      ['should you need', 'mocht u … nodig hebben'], ['had I known', 'als ik had geweten'], ['in no way', 'op geen enkele manier'], ['not once', 'geen enkele keer'], ['by no means', 'allerminst'],
      ['a turn of events', 'een wending'], ['to come to light', 'aan het licht komen'], ['unprecedented', 'ongekend'], ['a landmark decision', 'een historische beslissing']
    ],
    grammar: [
      { t: 'Inversie na een negatief of beperkend woord', es: 'Negative inversion',
        html: `<p>Begint een zin met een negatief of beperkend woord, dan draai je onderwerp en hulpwerkwoord om, net als in een vraag: <i><b>Never have I</b> seen such a mess.</i></p>
<p>Geen hulpwerkwoord? Dan komt er <b>do/does/did</b> bij: <i><b>Not only did she</b> win, she broke the record.</i> Het Nederlands kent inversie ook («Nooit heb ik…»), maar daar zonder <i>did</i>: Nederlanders zeggen daarom vaak <s>Not only she won</s> of <s>Never I have seen</s>.</p>
<p>Woorden: <i>never, rarely, seldom, hardly … when, no sooner … than, not only, not until, only then, little, under no circumstances, at no point, in no way</i>.</p>
<p>Let op: bij <b>not until</b> en <b>only after/when</b> draait de <b>tweede</b> zin om: <i>Not until I got home <b>did I realize</b>…</i></p>`,
        table: [['gewoon', 'met inversie'], ['I have never seen…', 'Never have I seen…'], ['She not only won…', 'Not only did she win…'], ['I had just arrived when…', 'Hardly had I arrived when…'], ['I realized it only later.', 'Only later did I realize it.'], ["You mustn't touch it.", 'Under no circumstances must you touch it.']],
        sum: 'Never have I seen such a mess. Not only did she win, she broke the record.',
        ex: [['No sooner had we sat down than the fire alarm went off.', 'We zaten nog maar net of het brandalarm ging af.'], ['Little did they know that the boss was listening.', 'Ze hadden geen idee dat de baas meeluisterde.']] },
      { t: 'Voorwaardelijke inversie: zonder if', es: 'Conditional inversion',
        html: `<p>In formeel Engels kun je <b>if</b> weglaten en het hulpwerkwoord vooraan zetten:</p>
<p><i>If I had known</i> → <b>Had I known</b>, I would have called.</p>
<p><i>If you should need help</i> → <b>Should you need</b> any help, please contact us. (heel gebruikelijk in zakelijke mails: «mocht u…»)</p>
<p><i>If it were not for</i> → <b>Were it not for</b> her support, I would have quit.</p>
<p>Ontkennend: <i><b>Had I not</b> seen it…</i>, nooit <s>Hadn't I seen it</s>.</p>`,
        table: [['met if', 'inversie', 'Nederlands'], ['If I had known…', 'Had I known…', 'Had ik het geweten…'], ['If you should have questions…', 'Should you have questions…', 'Mocht u vragen hebben…'], ['If it were not for…', 'Were it not for…', 'Als … er niet was'], ["If he hadn't helped…", 'Had he not helped…', 'Als hij niet had geholpen…']],
        ex: [['Should you have any questions, do not hesitate to contact me.', 'Mocht u vragen hebben, neem dan gerust contact met me op.'], ['Had it not been for the rain, we would have won.', 'Als het niet had geregend, hadden we gewonnen.']] },
      { t: 'So en such vooraan', es: 'So / such inversion',
        html: `<p>Voor extra nadruk kan <b>so + bijvoeglijk naamwoord</b> vooraan, met inversie: <i><b>So loud was</b> the music that we couldn't talk.</i></p>
<p>Met een zelfstandig naamwoord gebruik je <b>such</b>: <i><b>Such was</b> the demand that the tickets sold out in minutes.</i></p>
<p>Dit is literair en journalistiek. In een gesprek klinkt het al snel overdreven; zeg daar gewoon <i>The music was so loud that…</i></p>`,
        table: [['neutraal', 'nadrukkelijk'], ['The storm was so strong that…', 'So strong was the storm that…'], ['The demand was so great that…', 'Such was the demand that…']],
        ex: [['So severe were the floods that thousands had to leave their homes.', 'De overstromingen waren zo hevig dat duizenden hun huis moesten verlaten.'], ['Such was his talent that he was hired on the spot.', 'Zijn talent was zo groot dat hij ter plekke werd aangenomen.']] }
    ],
    dialogue: {
      t: 'The worst trade show ever', place: 'Las Vegas 🇺🇸',
      lines: [
        ['Grace', 'So, how was the trade show? Was it worth the trip?', 'En, hoe was de beurs? Was het de reis waard?'],
        ['Wouter', 'Honestly? Never have I seen such chaos. Not only did our booth arrive late, half of it was missing.', 'Eerlijk? Nog nooit heb ik zo’n chaos gezien. Niet alleen kwam onze stand te laat, de helft ontbrak ook nog.'],
        ['Grace', 'You’re kidding. What did you do?', 'Je maakt een grapje. Wat hebben jullie gedaan?'],
        ['Wouter', 'We improvised with a table and some posters. And no sooner had we set it up than the power went out.', 'We improviseerden met een tafel en wat posters. En we hadden het nog maar net opgezet of de stroom viel uit.'],
        ['Grace', 'Oh no. Did you get any leads at all?', 'O nee. Hebben jullie überhaupt leads binnengehaald?'],
        ['Wouter', 'That’s the funny part. Little did we know that our «emergency booth» would become the talk of the floor.', 'Dat is het grappige. We hadden geen idee dat onze «noodstand» het gesprek van de dag zou worden.'],
        ['Grace', 'Seriously? People liked it?', 'Echt? Vonden mensen het leuk?'],
        ['Wouter', 'Such was the curiosity that we had a line all afternoon. Had we had our normal booth, nobody would have noticed us.', 'De nieuwsgierigheid was zo groot dat er de hele middag een rij stond. Hadden we onze normale stand gehad, dan had niemand ons opgemerkt.'],
        ['Grace', 'Well, under no circumstances are you allowed to tell the marketing team that.', 'Nou, dat mag je in geen geval aan het marketingteam vertellen.']
      ],
      q: [
        { t: 'mc', q: 'What went wrong with the booth?', o: ['It arrived late and half was missing', 'It was too big', 'It was in the wrong city'] },
        { t: 'mc', q: 'What happened right after they set up?', o: ['The power went out', 'The show closed', 'It started raining'] },
        { t: 'mc', q: 'Why did they get so many visitors?', o: ['People were curious about the improvised booth', 'They gave away free food', 'Their marketing was excellent'] }
      ]
    },
    culture: { t: 'Inversie: stijlmiddel, geen dagelijkse kost', html: `<p>Inversie hoor je in toespraken, nieuwsberichten, literatuur en formele brieven. Presidenten gebruiken het graag: <i>Never before have so many…</i></p>
<p>In een gewoon gesprek gebruiken native speakers het vooral om een verhaal dramatisch te maken (<i>No sooner had I sat down…</i>) of met humor, zoals Grace hierboven.</p>
<p>📧 Zakelijk is <b>Should you have any questions…</b> heel gangbaar, net als het Nederlandse «Mocht u vragen hebben…». Het is beleefder dan <i>If you have questions…</i>, zonder stijf te klinken.</p>` },
    ex: [
      { t: 'cloze', s: 'Never ___ such a beautiful sunset.', a: ['have I seen'], o: ['have I seen', 'I have seen', 'I saw'], nl: 'Nog nooit heb ik zo’n mooie zonsondergang gezien.', tag: 'enc-inversion' },
      { t: 'cloze', s: 'Not only ___ late, but he also forgot the slides.', a: ['was he'], o: ['was he', 'he was', 'did he was'], nl: 'Hij was niet alleen te laat, hij vergat ook de slides.', tag: 'enc-inversion' },
      { t: 'cloze', s: 'Not only ___ the exam, she got the highest score.', a: ['did she pass'], o: ['did she pass', 'she passed', 'passed she'], nl: 'Ze haalde niet alleen het examen, ze had ook de hoogste score.', x: 'Geen hulpwerkwoord? Dan komt er did bij.', tag: 'enc-inversion' },
      { t: 'cloze', s: 'No sooner had I closed the door ___ the phone rang.', a: ['than'], o: ['than', 'when', 'that'], nl: 'Ik had de deur nog maar net dichtgedaan of de telefoon ging.', tag: 'enc-inversion' },
      { t: 'cloze', s: 'Hardly had we started ___ it began to rain.', a: ['when'], o: ['when', 'than', 'then'], nl: 'We waren nog maar net begonnen of het begon te regenen.', tag: 'enc-inversion' },
      { t: 'cloze', s: '___ you need any further information, please let me know.', a: ['Should'], o: ['Should', 'Would', 'If should'], nl: 'Mocht u meer informatie nodig hebben, laat het me dan weten.', tag: 'enc-inversion' },
      { t: 'cloze', s: '___ I known about the strike, I would have taken the car.', a: ['Had'], o: ['Had', 'If', 'Would'], nl: 'Als ik van de staking had geweten, had ik de auto genomen.', tag: 'enc-inversion' },
      { t: 'cloze', s: 'Not until I got home ___ that I had lost my wallet.', a: ['did I realize'], o: ['did I realize', 'I realized', 'I did realize'], nl: 'Pas toen ik thuiskwam, besefte ik dat ik mijn portemonnee kwijt was.', tag: 'enc-inversion' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Had I not seen it, I wouldn’t have believed it.', 'Hadn’t I seen it, I wouldn’t have believed it.', 'Had not I seen it, I wouldn’t have believed it.'], tag: 'enc-inversion' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Rarely do we get such good weather.', 'Rarely we get such good weather.', 'Rarely get we such good weather.'], tag: 'enc-inversion' },
      { t: 'mc', q: 'Waar klinkt inversie het meest natuurlijk?', o: ['In een formele toespraak of nieuwsbericht', 'In een appje aan een vriend', 'Bij het bestellen van koffie'], tag: 'enb-register' },
      { t: 'tr', nl: 'Ik had geen idee dat hij gelijk had.', a: ['Little did I know that he was right.', 'Little did I know he was right.', 'I had no idea that he was right.', 'I had no idea he was right.'], tag: 'enc-inversion' },
      { t: 'tr', nl: 'Onder geen beding mag je deze deur openen.', a: ['Under no circumstances must you open this door.', 'Under no circumstances should you open this door.', 'On no account must you open this door.', 'On no account should you open this door.'], tag: 'enc-inversion' },
      { t: 'order', s: 'Seldom have I met someone so generous.', nl: 'Zelden heb ik iemand ontmoet die zo gul is.', tag: 'enc-inversion' },
      { t: 'match', p: [['seldom', 'zelden'], ['scarcely', 'nauwelijks'], ['by no means', 'allerminst'], ['unprecedented', 'ongekend'], ['to come to light', 'aan het licht komen']], tag: 'enc-colloc' }
    ],
    reading: {
      t: 'A speech that changed a town', type: 'Toespraak (fragment)',
      p: [
        ["Friends, neighbors, fellow citizens: never before has this town faced a challenge like the one we face today. The factory that employed one in three of us is closing its doors.", 'Vrienden, buren, medeburgers: nooit eerder stond deze stad voor een uitdaging zoals die van vandaag. De fabriek waar een op de drie van ons werkte, sluit haar deuren.'],
        ["Not only does this mean the loss of jobs; it means the loss of a story we have told ourselves for a hundred years. Little did our grandparents know, when they built it, that it would one day stand empty.", 'Dit betekent niet alleen het verlies van banen; het betekent het verlies van een verhaal dat we onszelf honderd jaar hebben verteld. Onze grootouders hadden geen idee, toen ze hem bouwden, dat hij ooit leeg zou staan.'],
        ["But at no point in our history have we given up. Were it not for the courage of the people in this room, there would be no hospital, no library, no school on Main Street.", 'Maar op geen enkel moment in onze geschiedenis hebben we opgegeven. Was de moed van de mensen in deze zaal er niet geweest, dan was er geen ziekenhuis, geen bibliotheek en geen school aan Main Street.'],
        ["So let us not mourn what we have lost. Only by working together will we build what comes next. And should anyone tell you this town is finished, tell them: we have heard that before.", 'Laten we dus niet rouwen om wat we kwijt zijn. Alleen door samen te werken bouwen we wat er komt. En mocht iemand je vertellen dat deze stad afgeschreven is, zeg dan: dat hebben we eerder gehoord.']
      ],
      gl: [['fellow citizens', 'medeburgers'], ['to mourn', 'rouwen'], ['to employ', 'in dienst hebben']],
      q: [
        { t: 'mc', q: 'What is the challenge the town faces?', o: ['The factory is closing', 'A flood', 'A new highway'] },
        { t: 'mc', q: 'What does «Were it not for the courage of the people» suggest?', o: ['Without their courage, the town would have less', 'The people were not brave', 'The hospital is closing too'] },
        { t: 'mc', q: 'What is the main message of the speech?', o: ['Work together and don’t give up', 'Move to another town', 'Blame the factory owners'] }
      ]
    },
    say: [['Never have I seen such a mess.', 'Nog nooit heb ik zo’n puinhoop gezien.'], ['Should you have any questions, let me know.', 'Mocht je vragen hebben, laat het me weten.'], ['Had I known, I would have called.', 'Had ik het geweten, dan had ik gebeld.'], ['Not only did she win, she broke the record.', 'Ze won niet alleen, ze verbrak ook het record.']],
    task: { nl: 'Schrijf een kort, dramatisch verslag (5 zinnen) van een dag waarop alles misging. Gebruik minstens drie vormen van inversie (bijvoorbeeld no sooner … than, not only, little did I know, had I known).', model: "Never have I had such a terrible Monday. No sooner had I left the house than it started pouring. Not only did I miss my train, but I also left my laptop on the platform. Little did I know that a stranger would bring it to my office an hour later. Had she not been so kind, I would have lost a month of work." },
    scenario: { nl: 'Je houdt een korte toespraak op een bedrijfsfeest en oefent met een Amerikaanse speechcoach.', role: 'You are Marcus, an American speechwriter and speaking coach. The learner is preparing a short, inspiring speech for a company anniversary. Ask about the company’s story, then help them make it more powerful with inversion (Never before have we…, Not only did we…, Only by…). Give concrete feedback on rhythm and impact.', goal: 'Bouw een korte, krachtige toespraak met inversie op.' }
  });

  /* ───────────────────────── C1 · 2 ───────────────────────── */
  U({
    id: 'en-c1-02', level: 'C1', icon: '🎯', title: 'What I need is a holiday', nl: 'Cleft sentences en nadruk',
    goals: ['Nadruk leggen met It was … that en What … is', 'Emfatisch do/did gebruiken (I do like it!)', 'Nadruk in spreektaal: the thing is, the point is, all I want is'],
    vocab: [
      ['the thing is', 'het punt is / het zit zo'], ['the point is', 'waar het om gaat'], ['the reason why', 'de reden waarom'], ['all I want is', 'het enige wat ik wil'], ['what matters is', 'waar het om draait'],
      ['the last thing I need', 'het laatste waar ik op zit te wachten'], ['to make a point', 'een punt maken'], ['to stress', 'benadrukken'], ['to emphasize', 'benadrukken'], ['to highlight', 'uitlichten'],
      ['to put it bluntly', 'om het bot te zeggen'], ['to be fair', 'eerlijk is eerlijk'], ['mind you', 'let wel'], ['the bottom line', 'waar het uiteindelijk om gaat'], ['at the end of the day', 'uiteindelijk'],
      ['by all means', 'ga je gang / zeker'], ['first and foremost', 'eerst en vooral'], ['above all', 'bovenal'], ['in particular', 'in het bijzonder'], ['of all people', 'uitgerekend (hij/zij)'],
      ['the very', 'precies die / juist die'], ['whatsoever', 'helemaal (geen)'], ['in the slightest', 'in het minst'], ['by far', 'veruit']
    ],
    grammar: [
      { t: 'It-cleft: It was … that', es: 'It-clefts',
        html: `<p>Met <b>It is/was … that/who</b> zet je één deel van de zin in de schijnwerpers. In het Nederlands doe je dat vaak met klemtoon of woordvolgorde; in het Engels met deze constructie.</p>
<p><i>Tom broke the window.</i> → <i><b>It was Tom who</b> broke the window</i> (niet iemand anders). <i><b>It was the window that</b> Tom broke</i> (niet de deur). <i><b>It was yesterday that</b> Tom broke it</i> (niet vandaag).</p>
<p>Handig om iets te corrigeren: <i>It wasn't me who said that, <b>it was</b> Sarah.</i> Nederlanders zeggen vaak <s>It was me who have said it</s>: het werkwoord blijft gewoon in de juiste vorm (<i>who said</i>).</p>`,
        table: [['neutraal', 'nadruk op…', 'cleft'], ['Anna called me.', 'Anna', 'It was Anna who called me.'], ['I met her in Boston.', 'Boston', 'It was in Boston that I met her.'], ['We need money.', 'money', "It's money that we need."]],
        sum: 'It was Anna who called. It was in Boston that we met.',
        ex: [["It's not the money that bothers me, it's the attitude.", 'Het gaat me niet om het geld, het gaat om de houding.'], ['It was only when I moved abroad that I appreciated home.', 'Pas toen ik naar het buitenland verhuisde, leerde ik thuis waarderen.']] },
      { t: 'What-cleft: What I need is…', es: 'Wh-clefts',
        html: `<p>Een <b>what-cleft</b> bouwt spanning op en zet de nadruk aan het eind: <i><b>What I need is</b> a long holiday.</i> (Wat ik nodig heb, is…)</p>
<p>Ook met een handeling: <i><b>What we did was</b> call the police.</i> <i><b>What you should do is</b> talk to her.</i> Na <i>do</i> volgt meestal de kale infinitief.</p>
<p>Varianten: <b>All</b> I want is… (Het enige wat…), <b>The thing</b> I don't understand is…, <b>The reason</b> I'm calling is…, <b>The place</b> where we met was…</p>
<p>Fout: <s>What I need, it is a holiday</s>. Geen extra <i>it</i>.</p>`,
        table: [['neutraal', 'what-cleft'], ['I need a break.', 'What I need is a break.'], ['I hate the noise.', 'What I hate is the noise.'], ['We called the police.', 'What we did was call the police.'], ['I only want to sleep.', 'All I want is to sleep.']],
        ex: [["What really annoys me is people who don't listen.", 'Wat me echt irriteert, zijn mensen die niet luisteren.'], ["The reason I'm calling is to apologize.", 'Ik bel omdat ik mijn excuses wil aanbieden.']] },
      { t: 'Emfatisch do en nadrukwoorden', es: 'Emphatic do',
        html: `<p>Met <b>do/does/did</b> in een bevestigende zin leg je nadruk of spreek je iemand tegen: <i>I <b>do</b> like your idea, I just think it's too expensive.</i> <i>She <b>did</b> call. Check your phone!</i> In het Nederlands zeg je «wél».</p>
<p>Ook beleefd en warm: <i><b>Do</b> sit down.</i> <i><b>Do</b> let me know.</i></p>
<p>Andere versterkers: <b>the very</b> (<i>at the very end</i>), <b>whatsoever / at all</b> na een ontkenning (<i>no idea whatsoever</i>), <b>by far</b> (<i>by far the best</i>), <b>of all people</b> (<i>He, of all people, should know.</i> = uitgerekend hij).</p>`,
        table: [['Nederlands', 'Engels'], ['Ik vind het wél leuk.', 'I do like it.'], ['Hij heeft wél gebeld.', 'He did call.'], ['Ik heb helemaal geen idee.', 'I have no idea whatsoever.'], ['Uitgerekend jij!', 'You, of all people!']],
        ex: [["I didn't forget your birthday. I did send a card!", 'Ik ben je verjaardag niet vergeten. Ik heb wél een kaart gestuurd!'], ['This is by far the best pizza in town.', 'Dit is veruit de beste pizza van de stad.']] }
    ],
    dialogue: {
      t: 'Who ate my lunch?', place: 'San Diego 🇺🇸',
      lines: [
        ['Maya', 'Okay, who took my lunch from the fridge? It had my name on it.', 'Oké, wie heeft mijn lunch uit de koelkast gepakt? Mijn naam stond erop.'],
        ['Ruben', "Don't look at me. It wasn't me who took it. I brought my own.", 'Kijk mij niet aan. Ik heb hem niet gepakt. Ik had zelf eten mee.'],
        ['Maya', "I'm not accusing you. What I'm saying is that this is the third time this month.", 'Ik beschuldig je niet. Wat ik zeg, is dat dit de derde keer deze maand is.'],
        ['Ruben', "To be fair, it might have been the new intern. He did say he forgot his wallet.", 'Eerlijk is eerlijk, het kan de nieuwe stagiair zijn geweest. Hij zei wél dat hij zijn portemonnee was vergeten.'],
        ['Maya', "Him, of all people? He's so polite. The thing is, I don't mind sharing. What I mind is not being asked.", 'Uitgerekend hij? Hij is zo beleefd. Het punt is, ik vind delen niet erg. Wat ik erg vind, is dat er niet gevraagd wordt.'],
        ['Ruben', "Exactly. What you should do is put a funny note on the fridge.", 'Precies. Wat je moet doen, is een grappig briefje op de koelkast plakken.'],
        ['Maya', "Good idea. «It is not your lunch that you're eating.»", 'Goed idee. «Het is niet jouw lunch die je opeet.»'],
        ['Ruben', 'Ha! Maybe something a bit more direct. The last thing we need is a passive-aggressive office.', 'Ha! Misschien iets directers. Het laatste waar we op zitten te wachten, is een passief-agressief kantoor.']
      ],
      q: [
        { t: 'mc', q: 'What bothers Maya most?', o: ['Not being asked', 'Sharing her food', 'The new intern’s manners'] },
        { t: 'mc', q: 'What does «He did say he forgot his wallet» suggest?', o: ['He really said it (emphasis)', 'He didn’t say it', 'He will say it later'] },
        { t: 'mc', q: 'What does Ruben suggest?', o: ['Putting a note on the fridge', 'Calling HR', 'Buying a new fridge'] }
      ]
    },
    culture: { t: 'Passief-agressief op kantoor', html: `<p>Amerikanen vermijden vaak directe confrontatie op het werk, wat soms leidt tot <b>passive-aggressive</b> communicatie: briefjes op de koelkast, of mails met <i>Per my last email…</i> (= Ik had het je al gezegd!).</p>
<p>Nederlanders zijn juist bekend om hun directheid. Wat voor ons eerlijk is, kan in de VS bot overkomen. Een cleft helpt om iets duidelijk maar vriendelijk te zeggen: <i>What would really help is…</i> klinkt zachter dan <i>You need to…</i>.</p>
<p>🇬🇧 In Groot-Brittannië is de indirectheid nog groter; daarover meer in de unit over beleefdheid.</p>` },
    ex: [
      { t: 'cloze', s: 'It was my sister ___ told me the news.', a: ['who'], o: ['who', 'which', 'what'], nl: 'Het was mijn zus die me het nieuws vertelde.', tag: 'enc-cleft' },
      { t: 'cloze', s: 'It was in Chicago ___ they first met.', a: ['that'], o: ['that', 'where', 'which'], nl: 'Het was in Chicago dat ze elkaar voor het eerst ontmoetten.', tag: 'enc-cleft' },
      { t: 'cloze', s: '___ I need right now is a strong cup of coffee.', a: ['What'], o: ['What', 'That', 'Which'], nl: 'Wat ik nu nodig heb, is een sterke kop koffie.', tag: 'enc-cleft' },
      { t: 'cloze', s: 'What we did ___ call a locksmith.', a: ['was'], o: ['was', 'did', 'it was'], nl: 'Wat we deden, was een slotenmaker bellen.', tag: 'enc-cleft' },
      { t: 'cloze', s: "I ___ like the design. I'm just not sure about the color.", a: ['do'], o: ['do', 'am', 'does'], nl: 'Ik vind het ontwerp wél mooi. Ik twijfel alleen over de kleur.', tag: 'enc-cleft' },
      { t: 'cloze', s: "I have no idea ___. Ask someone else.", a: ['whatsoever'], o: ['whatsoever', 'whatever', 'at least'], nl: 'Ik heb helemaal geen idee. Vraag het iemand anders.', tag: 'enc-cleft' },
      { t: 'cloze', s: 'All I want ___ to sleep for twelve hours.', a: ['is'], o: ['is', 'it is', 'are'], nl: 'Het enige wat ik wil, is twaalf uur slapen.', tag: 'enc-cleft' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['What I need is a break.', 'What I need, it is a break.', 'That I need is a break.'], tag: 'enc-cleft' },
      { t: 'mc', q: '«Hij heeft wél gebeld!» is…', o: ['He did call!', 'He has well called!', 'He called well!'], tag: 'enc-cleft' },
      { t: 'mc', q: '«He, of all people, should know that» betekent…', o: ['Juist hij zou dat moeten weten.', 'Iedereen zou dat moeten weten.', 'Hij weet dat van alle mensen.'], tag: 'enc-idiom' },
      { t: 'mc', q: 'Welke formulering klinkt het vriendelijkst?', o: ['What would really help is a quick update.', 'You need to update me.', 'Update me now.'], tag: 'enc-hedge' },
      { t: 'tr', nl: 'Het was niet ik die dat zei.', a: ["It wasn't me who said that.", 'It was not me who said that.', "It wasn't me that said that.", "It wasn't I who said that."], tag: 'enc-cleft' },
      { t: 'tr', nl: 'Wat me irriteert, is het lawaai.', a: ['What annoys me is the noise.', 'What irritates me is the noise.', 'What bothers me is the noise.'], tag: 'enc-cleft' },
      { t: 'order', s: 'The reason I called is to say thank you.', nl: 'Ik belde om je te bedanken.', tag: 'enc-cleft' },
      { t: 'match', p: [['the bottom line', 'waar het om draait'], ['to put it bluntly', 'om het bot te zeggen'], ['to be fair', 'eerlijk is eerlijk'], ['by far', 'veruit'], ['above all', 'bovenal']], tag: 'enc-idiom' }
    ],
    reading: {
      t: 'What nobody tells you about moving abroad', type: 'Essay',
      p: [
        ["Everyone warns you about the paperwork, the language and the weather. What nobody tells you about is the loneliness of the supermarket.", 'Iedereen waarschuwt je voor de papierwinkel, de taal en het weer. Waar niemand je over vertelt, is de eenzaamheid van de supermarkt.'],
        ["It was in aisle seven of a store in Ohio that I finally broke down. I couldn't find the kind of bread I had eaten every day of my life, and suddenly I missed everything.", 'Het was in gangpad zeven van een winkel in Ohio dat ik uiteindelijk instortte. Ik kon het soort brood dat ik elke dag van mijn leven had gegeten niet vinden, en plotseling miste ik alles.'],
        ["The thing is, it wasn't really about bread. What I was missing was the feeling of knowing how things work without having to think.", 'Het punt is, het ging niet echt om brood. Wat ik miste, was het gevoel te weten hoe dingen werken zonder erover na te hoeven denken.'],
        ["Ten years later, I do feel at home here. But what I've learned is that home is not a place. It's the moment you stop noticing that you're a foreigner.", 'Tien jaar later voel ik me hier wél thuis. Maar wat ik heb geleerd, is dat thuis geen plek is. Het is het moment waarop je niet meer merkt dat je een buitenlander bent.']
      ],
      gl: [['aisle', 'gangpad'], ['to break down', 'instorten (emotioneel)'], ['a foreigner', 'een buitenlander']],
      q: [
        { t: 'mc', q: 'Where did the writer break down?', o: ['In a supermarket in Ohio', 'At the airport', 'At a bakery in Amsterdam'] },
        { t: 'mc', q: 'What was the writer really missing?', o: ['The feeling of knowing how things work', 'A specific bread', 'Their family'] },
        { t: 'mc', q: 'According to the writer, what is home?', o: ['The moment you stop noticing you’re a foreigner', 'The place you were born', 'A house you own'] }
      ]
    },
    say: [['What I need is a holiday.', 'Wat ik nodig heb, is vakantie.'], ['It was Sarah who told me.', 'Het was Sarah die het me vertelde.'], ['I do like it, I promise.', 'Ik vind het wél leuk, echt.'], ["The thing is, I don't have time.", 'Het punt is, ik heb geen tijd.']],
    task: { nl: 'Je collega denkt dat jij een fout hebt gemaakt in een rapport, maar dat klopt niet. Schrijf 4–5 zinnen waarin je dat vriendelijk maar duidelijk rechtzet. Gebruik minstens één it-cleft, één what-cleft en één emfatisch do/did.', model: "I think there's a small misunderstanding. It wasn't me who changed the numbers in the report; it was the finance team, after our meeting. I did check the first version carefully. What we should probably do is go through it together on Monday. The last thing I want is for the client to get the wrong figures." },
    scenario: { nl: 'Je bespreekt een misverstand met een Amerikaanse collega.', role: 'You are Jordan, an American colleague who believes the learner forgot to send an important file to a client. The learner did send it, but to the wrong address. Be a bit frustrated at first but open to explanation. Encourage the learner to clarify with emphasis (It was…, What happened was…, I did send it…).', goal: 'Zet het misverstand recht met cleft sentences en emfatisch do/did.' }
  });

  /* ───────────────────────── C1 · 3 ───────────────────────── */
  U({
    id: 'en-c1-03', level: 'C1', icon: '🎩', title: 'I was wondering if…', nl: 'Beleefdheid, indirectheid en de Nederlandse directheid',
    goals: ['Verzoeken en kritiek verzachten (I was wondering if…, It might be worth…)', 'Begrijpen wat Amerikanen en Britten écht bedoelen', 'Nee zeggen en het oneens zijn zonder bot te klinken'],
    vocab: [
      ['I was wondering if', 'ik vroeg me af of'], ['would you mind', 'zou u het erg vinden'], ['it might be worth', 'het is misschien de moeite waard om'], ['I’m not sure that’s quite right', 'ik weet niet of dat helemaal klopt'], ['with all due respect', 'met alle respect'],
      ['to see where you’re coming from', 'begrijpen waar je vandaan komt'], ['to take something on board', 'iets ter harte nemen'], ['to push back', 'tegengas geven'], ['to sugarcoat', 'mooier voorstellen dan het is'], ['blunt', 'bot / heel direct'],
      ['tactful', 'tactvol'], ['to beat around the bush', 'eromheen draaien'], ['to put it mildly', 'zacht uitgedrukt'], ['a slight concern', 'een kleine zorg (vaak: een grote zorg)'], ['to touch on', 'aanstippen'],
      ['food for thought', 'stof tot nadenken'], ['to agree to disagree', 'het erover eens zijn dat je het oneens bent'], ['to come across as', 'overkomen als'], ['constructive criticism', 'opbouwende kritiek'], ['to soften', 'verzachten'],
      ['a fair point', 'een terecht punt'], ['I hear you', 'ik begrijp je'], ['that’s interesting', 'interessant (vaak: daar ben ik het niet mee eens)'], ['not bad at all', 'helemaal niet slecht (vaak: erg goed)']
    ],
    grammar: [
      { t: 'Verzachten met tijd en modal', es: 'Softening',
        html: `<p>Engels maakt verzoeken beleefder door <b>afstand</b> te nemen: verleden tijd, continuous en modals.</p>
<p><i>I want to ask…</i> → <i>I <b>was wondering</b> if I <b>could</b> ask…</i> Het gaat niet over het verleden: de verleden tijd maakt het alleen zachter.</p>
<p>Ook: <i><b>Would you mind</b> sending it again?</i> (+ -ing!), <i><b>Could you possibly</b>…?</i>, <i>It <b>might be worth</b> checking…</i>, <i>I'd <b>suggest</b> we…</i></p>
<p>Nederlanders vertalen vaak letterlijk: <s>Can you send me the file?</s> is niet fout, maar <i>Could you send me the file when you get a chance?</i> klinkt een stuk vriendelijker.</p>`,
        table: [['direct (Nederlands)', 'zachter (Engels)'], ['Stuur me het bestand.', 'Could you send me the file when you have a moment?'], ['Ik wil vrijdag vrij.', 'I was wondering if I could take Friday off.'], ['Dat is fout.', "I'm not sure that's quite right."], ['Je moet het checken.', 'It might be worth double-checking.']],
        sum: 'I was wondering if you could help. Would you mind checking this?',
        ex: [['I was hoping we could discuss the budget.', 'Ik hoopte dat we het budget konden bespreken.'], ['Would you mind closing the window?', 'Zou je het raam dicht willen doen?']] },
      { t: 'Het oneens zijn zonder te kwetsen', es: 'Disagreeing politely',
        html: `<p>Engelstaligen beginnen vaak met erkenning en zeggen pas daarna «maar»: <i><b>I see where you're coming from, but</b>…</i>, <i><b>That's a fair point. However</b>…</i>, <i><b>I hear you</b>, and…</i></p>
<p>Hedging maakt een mening minder absoluut: <i>I <b>tend to think</b>…</i>, <i>I'm <b>not entirely convinced</b>…</i>, <i>Wouldn't it be better to…?</i> Een vraag als tegenvoorstel is heel gebruikelijk.</p>
<p>«Ik ben het er niet mee eens» klinkt in het Engels als <i>I disagree</i> al snel scherp. Zachter: <i>I'm not sure I agree</i> of <i>I see it slightly differently</i>.</p>`,
        table: [['te direct', 'diplomatiek'], ['I disagree.', 'I see it a bit differently.'], ['That will never work.', "I'm not sure that would work in practice."], ['You are wrong.', "I think there might be a misunderstanding."], ['No.', "I'm afraid that won't be possible."]],
        ex: [["I see your point, but I'm not entirely convinced.", 'Ik snap je punt, maar ik ben er niet helemaal van overtuigd.'], ["Wouldn't it make more sense to wait until June?", 'Zou het niet logischer zijn om tot juni te wachten?']] },
      { t: 'Wat ze zeggen en wat ze bedoelen', es: 'Reading between the lines',
        html: `<p>Vooral Britten (en in mindere mate Amerikanen) zeggen veel indirect. Een beroemd lijstje:</p>
<p><i>«That's an interesting idea.»</i> = ik vind het geen goed idee. <i>«With all due respect…»</i> = ik ga je flink tegenspreken. <i>«I have a slight concern.»</i> = ik heb een groot probleem. <i>«Not bad»</i> = (Brits) best goed.</p>
<p>Amerikanen zijn juist vaak <b>overdreven positief</b>: <i>«Great job!»</i> kan ook gewoon «oké» betekenen, en <i>«Let's grab coffee sometime»</i> is niet altijd een echte uitnodiging.</p>
<p>Nederlanders nemen woorden vaak letterlijk. Let op de toon en wat er <b>niet</b> gezegd wordt.</p>`,
        table: [['wat ze zeggen', 'wat ze (vaak) bedoelen'], ["That's an interesting idea.", 'Daar ben ik het niet mee eens.'], ['I have a slight concern.', 'Ik heb een groot probleem.'], ["I'll bear it in mind.", 'Ik ga er niets mee doen.'], ["We should grab lunch sometime!", 'Leuk je te zien (geen echte afspraak).']],
        ex: [["I'll bear it in mind.", 'Ik zal eraan denken. (Vaak: ik doe er niets mee.)'], ['With all due respect, I think we need more data.', 'Met alle respect, ik denk dat we meer data nodig hebben.']] }
    ],
    dialogue: {
      t: 'Feedback on a proposal', place: 'Boston 🇺🇸',
      lines: [
        ['Linda', "Thanks for sending the proposal, Jeroen. Overall, it's a really solid start.", 'Bedankt voor het voorstel, Jeroen. Al met al is het een heel degelijk begin.'],
        ['Jeroen', 'Thanks. So, what do you think is wrong with it?', 'Bedankt. Dus, wat vind je er fout aan?'],
        ['Linda', "Ha, nothing's wrong exactly. I was just wondering if we could take another look at the budget section.", 'Ha, er is niet echt iets fout. Ik vroeg me alleen af of we nog eens naar het budgetgedeelte kunnen kijken.'],
        ['Jeroen', "The numbers are correct. I checked them twice.", 'De cijfers kloppen. Ik heb ze twee keer gecontroleerd.'],
        ['Linda', "I'm sure they are. It's more that the client might find the total a little high. It might be worth breaking it down into phases.", 'Dat geloof ik zeker. Het is meer dat de klant het totaal misschien wat hoog vindt. Het is misschien de moeite waard het in fases op te delen.'],
        ['Jeroen', "Ah, I see where you're coming from. That's a fair point.", 'Ah, ik snap waar je vandaan komt. Dat is een terecht punt.'],
        ['Linda', "And I have a slight concern about the timeline. Would you mind adding a bit of buffer?", 'En ik heb een kleine zorg over de planning. Zou je er wat speling in willen bouwen?'],
        ['Jeroen', "Sure. To be honest, in the Netherlands we'd just say «this is too expensive and too fast».", 'Tuurlijk. Eerlijk gezegd zouden we in Nederland gewoon zeggen «dit is te duur en te snel».'],
        ['Linda', "Ha! I'll take that on board. Maybe a little Dutch honesty would save us all some time.", 'Ha! Dat neem ik ter harte. Misschien zou een beetje Nederlandse eerlijkheid ons allemaal tijd besparen.']
      ],
      q: [
        { t: 'mc', q: 'What does Linda really think about the budget?', o: ['It’s probably too high for the client', 'The numbers are wrong', 'It’s perfect'] },
        { t: 'mc', q: 'What does «a slight concern» about the timeline probably mean?', o: ['The timeline is too tight', 'The timeline is fine', 'There is no timeline'] },
        { t: 'mc', q: 'What does Jeroen say about the Dutch?', o: ['They would say it more directly', 'They never give feedback', 'They are always polite'] }
      ]
    },
    culture: { t: 'De Nederlandse directheid', html: `<p>Nederlanders staan internationaal bekend als <b>direct</b>. Voor ons is dat eerlijk en efficiënt; voor veel Amerikanen en Britten klinkt het al snel <i>blunt</i>, <i>rude</i> of zelfs <i>aggressive</i>.</p>
<p>In de VS is de <b>feedback sandwich</b> populair: iets positiefs, dan de kritiek, dan weer iets positiefs. Het risico: Nederlanders horen alleen het positieve en missen de boodschap.</p>
<p>🇬🇧 Britten zijn nog indirecter. Erin Meyer (<i>The Culture Map</i>) laat zien dat Nederlanders en Britten op hetzelfde woord <i>«quite good»</i> totaal anders reageren: voor een Brit is het vaak een teleurstelling.</p>` },
    ex: [
      { t: 'cloze', s: 'I was ___ if you could help me with this report.', a: ['wondering'], o: ['wondering', 'asking me', 'wanting'], nl: 'Ik vroeg me af of je me met dit rapport zou kunnen helpen.', tag: 'enc-hedge' },
      { t: 'cloze', s: 'Would you mind ___ the presentation to Thursday?', a: ['moving'], o: ['moving', 'to move', 'move'], nl: 'Zou je het erg vinden de presentatie naar donderdag te verplaatsen?', tag: 'enc-hedge' },
      { t: 'cloze', s: 'It might be ___ double-checking the figures.', a: ['worth'], o: ['worth', 'worthy', 'value'], nl: 'Het is misschien de moeite waard de cijfers nog eens te controleren.', tag: 'enc-hedge' },
      { t: 'cloze', s: "I see where you're coming ___, but I'm not convinced.", a: ['from'], o: ['from', 'to', 'at'], nl: 'Ik snap waar je vandaan komt, maar ik ben niet overtuigd.', tag: 'enc-hedge' },
      { t: 'cloze', s: "I'm not sure that's ___ right.", a: ['quite'], o: ['quite', 'very', 'much'], nl: 'Ik weet niet of dat helemaal klopt.', tag: 'enc-hedge' },
      { t: 'mc', q: 'Een Britse collega zegt «That’s an interesting idea.» Wat bedoelt ze waarschijnlijk?', o: ['Ze is het er niet mee eens.', 'Ze is enthousiast.', 'Ze snapt het niet.'], tag: 'enc-hedge' },
      { t: 'mc', q: 'Wat is de meest diplomatieke manier om nee te zeggen?', o: ["I'm afraid that won't be possible.", 'No, that is not possible.', "No way, that's impossible."], tag: 'enc-hedge' },
      { t: 'mc', q: '«I’ll bear it in mind» betekent vaak…', o: ['Ik doe er (waarschijnlijk) niets mee.', 'Ik doe het meteen.', 'Ik ben boos.'], tag: 'enc-hedge' },
      { t: 'mc', q: 'Welke reactie is het minst bot?', o: ['I see it slightly differently.', 'I disagree completely.', "You're wrong about that."], tag: 'enc-hedge' },
      { t: 'mc', q: '«To sugarcoat something» is…', o: ['iets mooier voorstellen dan het is', 'iets zoets eten', 'iets uitstellen'], tag: 'enc-idiom' },
      { t: 'tr', nl: 'Ik vroeg me af of ik vrijdag vrij kon nemen.', a: ['I was wondering if I could take Friday off.', 'I was wondering whether I could take Friday off.', 'I was wondering if I could have Friday off.'], tag: 'enc-hedge' },
      { t: 'tr', nl: 'Dat is een terecht punt.', a: ["That's a fair point.", 'That is a fair point.', "That's a good point."], tag: 'enc-hedge' },
      { t: 'order', s: "I hear you, but I see it a bit differently.", nl: 'Ik begrijp je, maar ik zie het een beetje anders.', tag: 'enc-hedge' },
      { t: 'match', p: [['blunt', 'bot'], ['tactful', 'tactvol'], ['to push back', 'tegengas geven'], ['food for thought', 'stof tot nadenken'], ['to come across as', 'overkomen als']], tag: 'enc-colloc' },
      { t: 'cloze', s: "Let's agree to ___. We'll never see eye to eye on this.", a: ['disagree'], o: ['disagree', 'agree', 'differ'], nl: 'Laten we het erover eens zijn dat we het oneens zijn.', tag: 'enc-idiom' }
    ],
    reading: {
      t: 'Why the Dutch seem rude (and why they aren’t)', type: 'Opiniestuk',
      p: [
        ["When my Dutch colleague told me my presentation was «too long and a bit boring», I spent the evening wondering if I should quit. The next morning, she brought me coffee and asked how my weekend was.", 'Toen mijn Nederlandse collega zei dat mijn presentatie «te lang en een beetje saai» was, vroeg ik me de hele avond af of ik moest stoppen. De volgende ochtend bracht ze me koffie en vroeg hoe mijn weekend was.'],
        ["It took me a year to understand. For her, honest feedback was a sign of respect. Sugarcoating it would have meant she didn't think I could handle the truth.", 'Het kostte me een jaar om het te begrijpen. Voor haar was eerlijke feedback een teken van respect. Het mooier maken zou betekend hebben dat ze dacht dat ik de waarheid niet aankon.'],
        ["Americans, on the other hand, tend to wrap criticism in so much praise that the message gets lost. «Great work, just a few small tweaks» can mean «start again».", 'Amerikanen daarentegen pakken kritiek vaak in zoveel lof in dat de boodschap verloren gaat. «Goed gedaan, alleen een paar kleine aanpassingen» kan betekenen «begin opnieuw».'],
        ["Neither style is better. But if you work across cultures, it's worth learning to translate, not just the words, but the intention behind them.", 'Geen van beide stijlen is beter. Maar als je met andere culturen werkt, is het de moeite waard te leren vertalen, niet alleen de woorden, maar ook de bedoeling erachter.']
      ],
      gl: [['a tweak', 'een kleine aanpassing'], ['to wrap', 'inpakken'], ['intention', 'bedoeling']],
      q: [
        { t: 'mc', q: 'How did the writer feel after the feedback?', o: ['Upset, they wondered whether to quit', 'Happy and proud', 'Indifferent'] },
        { t: 'mc', q: 'Why was the Dutch colleague so direct?', o: ['For her, honest feedback was a sign of respect', 'She didn’t like the writer', 'She was in a hurry'] },
        { t: 'mc', q: 'What is the writer’s conclusion?', o: ['Learn to translate the intention behind the words', 'The Dutch style is better', 'Never give feedback'] }
      ]
    },
    say: [['I was wondering if you could help me.', 'Ik vroeg me af of je me kon helpen.'], ["I see where you're coming from, but…", 'Ik snap waar je vandaan komt, maar…'], ["I'm not sure that's quite right.", 'Ik weet niet of dat helemaal klopt.'], ['It might be worth taking another look.', 'Het is misschien de moeite waard er nog eens naar te kijken.']],
    task: { nl: 'Een Amerikaanse collega heeft een plan gemaakt dat volgens jou niet werkt (te duur en te laat). Schrijf een korte mail (5 zinnen) waarin je dat diplomatiek maar duidelijk zegt. Gebruik minstens drie verzachtende formuleringen.', model: "Hi Mike, thanks for putting the plan together, it's clear you've put a lot of work into it. I was wondering if we could take another look at the budget, as I'm a little concerned the client might find it on the high side. It might also be worth adding some buffer to the timeline. I see where you're coming from with the June launch, but I'm not entirely sure it's realistic. Would you be free to discuss it tomorrow?" },
    scenario: { nl: 'Je geeft feedback aan een Amerikaanse collega op haar presentatie.', role: 'You are Rachel, an American colleague who just gave a presentation that was too long and unclear. You are a bit sensitive about feedback. React naturally: if the learner is too blunt, show you feel hurt; if they are diplomatic, be open and grateful. At the end, tell them honestly how their feedback came across.', goal: 'Geef eerlijke maar diplomatieke feedback zonder bot over te komen.' }
  });

  /* ───────────────────────── C1 · 4 ───────────────────────── */
  U({
    id: 'en-c1-04', level: 'C1', icon: '🧲', title: 'Bitterly disappointed', nl: 'Sterke collocaties',
    goals: ['Bijwoord + bijvoeglijk naamwoord: fully aware, deeply concerned, highly unlikely', 'Werkwoord + zelfstandig naamwoord: strike a balance, pose a threat, meet a deadline', 'Letterlijke vertalingen vermijden die net niet kloppen'],
    vocab: [
      ['bitterly disappointed', 'vreselijk teleurgesteld'], ['fully aware', 'zich volledig bewust'], ['deeply concerned', 'zeer bezorgd'], ['highly unlikely', 'hoogst onwaarschijnlijk'], ['utterly ridiculous', 'volkomen belachelijk'],
      ['painfully slow', 'tergend langzaam'], ['seriously ill', 'ernstig ziek'], ['widely available', 'overal verkrijgbaar'], ['strongly recommend', 'sterk aanraden'], ['to strike a balance', 'een evenwicht vinden'],
      ['to pose a threat', 'een bedreiging vormen'], ['to meet a deadline', 'een deadline halen'], ['to raise awareness', 'bewustzijn vergroten'], ['to draw a conclusion', 'een conclusie trekken'], ['to pay attention', 'opletten'],
      ['to make an effort', 'moeite doen'], ['to take a risk', 'een risico nemen'], ['to run a risk', 'het risico lopen'], ['to place an order', 'een bestelling plaatsen'], ['to reach an agreement', 'tot een akkoord komen'],
      ['heavy traffic', 'druk verkeer'], ['a strong accent', 'een zwaar accent'], ['a narrow escape', 'op het nippertje ontsnapt'], ['common sense', 'gezond verstand']
    ],
    grammar: [
      { t: 'Wat is een collocatie?', es: 'Collocations',
        html: `<p>Een <b>collocatie</b> is een vaste combinatie van woorden die native speakers automatisch gebruiken. Grammaticaal kan er van alles, maar maar één combinatie klinkt natuurlijk.</p>
<p>Je zegt <i><b>heavy</b> traffic</i>, niet <s>busy traffic</s> (Nederlands: druk verkeer). <i>A <b>strong</b> accent</i> of <i>a <b>heavy</b> accent</i>, niet <s>a thick accent</s>... al hoor je dat laatste ook. <i><b>Make</b> a decision</i>, maar <i><b>take</b> a risk</i>.</p>
<p>Op C1 is het verschil tussen «goed Engels» en «native-achtig Engels» vaak precies dit. Leer woorden daarom in combinaties, niet los.</p>`,
        table: [['Nederlands', 'letterlijk (onnatuurlijk)', 'collocatie'], ['druk verkeer', 'busy traffic', 'heavy traffic'], ['een conclusie trekken', 'pull a conclusion', 'draw a conclusion'], ['een deadline halen', 'reach a deadline', 'meet a deadline'], ['een risico lopen', 'walk a risk', 'run a risk'], ['grote kans', 'big chance', 'good chance / high probability']],
        sum: 'Heavy traffic, draw a conclusion, meet a deadline.',
        ex: [['There was heavy traffic on the highway this morning.', 'Er was vanochtend druk verkeer op de snelweg.'], ["We need to draw some conclusions from this.", 'We moeten hier wat conclusies uit trekken.']] },
      { t: 'Bijwoord + bijvoeglijk naamwoord', es: 'Adverb + adjective',
        html: `<p>Nederlanders gebruiken vaak <i>very</i> of <i>really</i>. Native speakers kiezen een <b>specifieker</b> bijwoord dat bij het adjectief hoort:</p>
<p><i><b>bitterly</b> disappointed</i>, <i><b>deeply</b> concerned/moved/grateful</i>, <i><b>fully</b> aware</i>, <i><b>highly</b> unlikely/recommended/qualified</i>, <i><b>utterly</b> ridiculous/exhausted</i>, <i><b>painfully</b> slow/obvious/shy</i>, <i><b>seriously</b> ill/injured</i>, <i><b>widely</b> available/known</i>.</p>
<p>Let op: met «absolute» adjectieven (<i>exhausted, ridiculous, perfect, impossible</i>) kun je geen <s>very</s> gebruiken, wel <b>absolutely</b>, <b>utterly</b>, <b>completely</b>: <i>absolutely exhausted</i>, niet <s>very exhausted</s>.</p>`,
        table: [['bijwoord', 'past bij', 'voorbeeld'], ['highly', 'unlikely, recommended, qualified', "It's highly unlikely."], ['deeply', 'concerned, moved, grateful', "I'm deeply grateful."], ['fully', 'aware, booked, committed', "We're fully aware of that."], ['bitterly', 'disappointed, cold', 'They were bitterly disappointed.'], ['absolutely / utterly', 'exhausted, ridiculous, impossible', "I'm absolutely exhausted."]],
        ex: [["I'm fully aware of the risks.", 'Ik ben me volledig bewust van de risico’s.'], ['This restaurant comes highly recommended.', 'Dit restaurant wordt sterk aangeraden.']] },
      { t: 'Werkwoord + zelfstandig naamwoord', es: 'Verb + noun',
        html: `<p>Bij formeel en zakelijk Engels draait veel om de juiste werkwoorden bij een zelfstandig naamwoord:</p>
<p><i><b>strike</b> a balance</i>, <i><b>pose</b> a threat/a question</i>, <i><b>raise</b> awareness/concerns/a question</i>, <i><b>meet</b> a deadline/a target/demand</i>, <i><b>reach</b> an agreement/a conclusion</i>, <i><b>place</b> an order</i>, <i><b>conduct</b> research/a survey</i>, <i><b>address</b> an issue</i>.</p>
<p>Klassieke Nederlandse fouten: <s>do an effort</s> (<i>make an effort</i>), <s>make a test</s> (<i>take a test</i>), <s>give attention</s> (<i>pay attention</i>), <s>do research to</s> (<i>do research on/into</i>).</p>`,
        table: [['werkwoord', 'gaat met', 'voorbeeld'], ['raise', 'awareness, concerns, money', 'The campaign raised awareness.'], ['address', 'an issue, a problem, a concern', "We need to address this issue."], ['conduct', 'research, a survey, an interview', 'They conducted a survey.'], ['pose', 'a threat, a risk, a question', 'This poses a serious risk.']],
        ex: [['We need to strike a balance between speed and quality.', 'We moeten een evenwicht vinden tussen snelheid en kwaliteit.'], ['Climate change poses a serious threat to coastal cities.', 'Klimaatverandering vormt een serieuze bedreiging voor kuststeden.']] }
    ],
    dialogue: {
      t: 'A difficult quarter', place: 'Chicago 🇺🇸',
      lines: [
        ['Director', "Let's not sugarcoat it. Our numbers this quarter were painfully low.", 'Laten we het niet mooier maken dan het is. Onze cijfers waren dit kwartaal pijnlijk laag.'],
        ['Iris', "We're fully aware of that. The supply problems posed a serious threat to our deliveries.", 'Daar zijn we ons volledig van bewust. De leveringsproblemen vormden een serieuze bedreiging voor onze leveringen.'],
        ['Director', 'Did we meet any of our targets?', 'Hebben we nog doelen gehaald?'],
        ['Iris', "Customer satisfaction, yes. But it's highly unlikely we'll reach the annual sales target.", 'Klanttevredenheid wel. Maar het is hoogst onwaarschijnlijk dat we het jaarlijkse verkoopdoel halen.'],
        ['Director', "The board will be bitterly disappointed. What conclusions have you drawn?", 'Het bestuur zal vreselijk teleurgesteld zijn. Welke conclusies heb je getrokken?'],
        ['Iris', "That we took too big a risk relying on a single supplier. We need to strike a balance between cost and security.", 'Dat we een te groot risico namen door op één leverancier te vertrouwen. We moeten een evenwicht vinden tussen kosten en zekerheid.'],
        ['Director', "Agreed. I'd strongly recommend presenting that to the board yourself.", 'Eens. Ik raad je sterk aan dat zelf aan het bestuur te presenteren.'],
        ['Iris', "I'll make every effort to have a plan ready by Friday.", 'Ik zal er alles aan doen om vrijdag een plan klaar te hebben.']
      ],
      q: [
        { t: 'mc', q: 'What caused the low numbers?', o: ['Supply problems', 'Bad marketing', 'A strike'] },
        { t: 'mc', q: 'Which target did they meet?', o: ['Customer satisfaction', 'Annual sales', 'Profit'] },
        { t: 'mc', q: 'What risk did they take?', o: ['Relying on a single supplier', 'Hiring too many people', 'Opening a new store'] }
      ]
    },
    culture: { t: 'Hoe leer je collocaties?', html: `<p>Native speakers leren collocaties door veel te lezen en te luisteren. Een paar handige gewoontes:</p>
<p>📚 Gebruik een <b>collocation dictionary</b> (bijvoorbeeld de <i>Oxford Collocations Dictionary</i>) of zoek in een zoekmachine met aanhalingstekens: <i>"meet a deadline"</i> geeft miljoenen resultaten, <i>"reach a deadline"</i> veel minder.</p>
<p>📝 Schrijf nieuwe woorden altijd met hun «vriendjes» op: niet <i>deadline</i>, maar <i>meet / miss / extend a deadline</i>.</p>
<p>🇬🇧/🇺🇸 Een paar collocaties verschillen: Brits <i>take a decision</i> naast <i>make a decision</i>; Amerikaans bijna altijd <i>make a decision</i>.</p>` },
    ex: [
      { t: 'cloze', s: "We're fully ___ of the risks involved.", a: ['aware'], o: ['aware', 'conscious about', 'knowing'], nl: 'We zijn ons volledig bewust van de risico’s.', tag: 'enc-colloc' },
      { t: 'cloze', s: "It's ___ unlikely that they'll accept the offer.", a: ['highly'], o: ['highly', 'strongly', 'heavily'], nl: 'Het is hoogst onwaarschijnlijk dat ze het aanbod accepteren.', tag: 'enc-colloc' },
      { t: 'cloze', s: 'The fans were ___ disappointed by the result.', a: ['bitterly'], o: ['bitterly', 'heavily', 'strongly'], nl: 'De fans waren vreselijk teleurgesteld door de uitslag.', tag: 'enc-colloc' },
      { t: 'cloze', s: "I'm absolutely ___ after that hike.", a: ['exhausted'], o: ['exhausted', 'tired', 'sleepy'], nl: 'Ik ben helemaal kapot na die wandeling.', x: 'Absolutely past bij «absolute» adjectieven zoals exhausted.', tag: 'enc-colloc' },
      { t: 'cloze', s: 'We need to ___ a balance between work and family.', a: ['strike'], o: ['strike', 'make', 'find out'], nl: 'We moeten een evenwicht vinden tussen werk en gezin.', tag: 'enc-colloc' },
      { t: 'cloze', s: "If we don't hurry, we won't ___ the deadline.", a: ['meet'], o: ['meet', 'reach', 'make up'], nl: 'Als we ons niet haasten, halen we de deadline niet.', tag: 'enc-colloc' },
      { t: 'cloze', s: 'Please ___ attention to the safety instructions.', a: ['pay'], o: ['pay', 'give', 'make'], nl: 'Let alstublieft op de veiligheidsinstructies.', tag: 'enb-makedo' },
      { t: 'cloze', s: 'The campaign aims to ___ awareness of mental health.', a: ['raise'], o: ['raise', 'rise', 'grow'], nl: 'De campagne wil het bewustzijn rond mentale gezondheid vergroten.', tag: 'enc-colloc' },
      { t: 'mc', q: '«Druk verkeer» is…', o: ['heavy traffic', 'busy traffic', 'full traffic'], tag: 'enc-colloc' },
      { t: 'mc', q: '«Moeite doen» is…', o: ['make an effort', 'do an effort', 'give an effort'], tag: 'enb-makedo' },
      { t: 'mc', q: 'Welke combinatie is fout?', o: ['very exhausted', 'absolutely exhausted', 'completely exhausted'], tag: 'enc-colloc' },
      { t: 'tr', nl: 'Ik raad dit hotel sterk aan.', a: ['I strongly recommend this hotel.', 'I would strongly recommend this hotel.', "I'd strongly recommend this hotel."], tag: 'enc-colloc' },
      { t: 'tr', nl: 'Dit vormt een serieus risico.', a: ['This poses a serious risk.', 'This poses a serious threat.'], tag: 'enc-colloc' },
      { t: 'order', s: 'We finally reached an agreement after hours of talks.', nl: 'Na urenlange gesprekken kwamen we eindelijk tot een akkoord.', tag: 'enc-colloc' },
      { t: 'match', p: [['heavy', 'traffic'], ['draw', 'a conclusion'], ['pose', 'a threat'], ['meet', 'a deadline'], ['place', 'an order'], ['conduct', 'a survey']], tag: 'enc-colloc' }
    ],
    reading: {
      t: 'Why your English sounds «almost» native', type: 'Blog van een taalcoach',
      p: [
        ["Many of my Dutch clients speak English with perfect grammar and a huge vocabulary. And yet, something sounds slightly off. Nine times out of ten, the culprit is collocation.", 'Veel van mijn Nederlandse cliënten spreken Engels met perfecte grammatica en een enorme woordenschat. En toch klinkt er iets net niet. Negen van de tien keer is de boosdoener collocatie.'],
        ["They say «I did an effort» instead of «I made an effort», or «the chance is big» instead of «there's a good chance». Every word is correct, but the combination isn't.", 'Ze zeggen «I did an effort» in plaats van «I made an effort», of «the chance is big» in plaats van «there’s a good chance». Elk woord klopt, maar de combinatie niet.'],
        ["Native speakers rarely notice these errors consciously, but they register them. The effect is a subtle impression of «foreign», even when the speaker is highly fluent.", 'Moedertaalsprekers merken deze fouten zelden bewust op, maar ze registreren ze wel. Het effect is een subtiele indruk van «buitenlands», zelfs als de spreker zeer vloeiend is.'],
        ["My advice is painfully simple: stop learning single words. Learn chunks. Every time you look up a word, write down the verbs and adjectives that naturally go with it.", 'Mijn advies is pijnlijk simpel: stop met losse woorden leren. Leer stukjes taal. Elke keer dat je een woord opzoekt, noteer je de werkwoorden en bijvoeglijke naamwoorden die er vanzelf bij horen.']
      ],
      gl: [['the culprit', 'de boosdoener'], ['consciously', 'bewust'], ['chunks', 'brokken / vaste stukjes taal']],
      q: [
        { t: 'mc', q: 'What is usually the problem with fluent Dutch speakers?', o: ['Collocation', 'Grammar', 'Pronunciation'] },
        { t: 'mc', q: 'How do native speakers react to these errors?', o: ['They register them without consciously noticing', 'They always correct them', 'They laugh'] },
        { t: 'mc', q: 'What does the writer advise?', o: ['Learn chunks, not single words', 'Study more grammar', 'Watch more movies with subtitles'] }
      ]
    },
    say: [["I'm fully aware of that.", 'Daar ben ik me volledig van bewust.'], ["It's highly unlikely.", 'Het is hoogst onwaarschijnlijk.'], ['We need to strike a balance.', 'We moeten een evenwicht vinden.'], ['I made every effort to finish on time.', 'Ik heb er alles aan gedaan om op tijd klaar te zijn.']],
    task: { nl: 'Schrijf een korte update (5 zinnen) over een project dat tegenzat. Gebruik minstens zes collocaties uit deze unit (bijvoorbeeld meet a deadline, pose a threat, strike a balance, highly unlikely, fully aware, draw conclusions).', model: "Unfortunately, we didn't meet the deadline for the new app. We were fully aware that the budget was tight, but the technical problems posed a bigger threat than expected. It's highly unlikely that we'll launch before March. We've drawn some important conclusions, though. Next time, we need to strike a better balance between ambition and realism." },
    scenario: { nl: 'Je praat met een Amerikaanse redacteur die je tekst natuurlijker wil maken.', role: 'You are Dana, an American editor. The learner tells you about their week at work. Every time they use an unnatural word combination (busy traffic, do an effort, reach a deadline, very exhausted, big chance), gently suggest the natural collocation and ask them to use it in a new sentence.', goal: 'Vertel over je week en gebruik natuurlijke collocaties.' }
  });

  /* ───────────────────────── C1 · 5 ───────────────────────── */
  U({
    id: 'en-c1-05', level: 'C1', icon: '🗣️', title: 'Let’s cut to the chase', nl: 'Idioom en uitdrukkingen',
    goals: ['De bekendste Amerikaanse idiomen begrijpen en gebruiken', 'Sport- en zakenmetaforen herkennen', 'Weten wanneer idioom past (en wanneer het geforceerd klinkt)'],
    vocab: [
      ['to cut to the chase', 'meteen ter zake komen'], ['a ballpark figure', 'een ruwe schatting'], ['back to square one', 'terug naar af'], ['the elephant in the room', 'het probleem waar niemand over begint'], ['to hit the ground running', 'vliegend van start gaan'],
      ['to drop the ball', 'een steek laten vallen'], ['to call the shots', 'de lakens uitdelen'], ['a long shot', 'een gok (kleine kans)'], ['to touch base', 'even contact hebben'], ['to think outside the box', 'out of the box denken'],
      ['to get the ball rolling', 'de bal aan het rollen brengen'], ['a game changer', 'iets wat alles verandert'], ['to be on the same page', 'op één lijn zitten'], ['the last straw', 'de druppel die de emmer doet overlopen'], ['to bite the bullet', 'door de zure appel heen bijten'],
      ['to play it by ear', 'het op zijn beloop laten'], ['to go the extra mile', 'een stapje extra doen'], ['to be in the same boat', 'in hetzelfde schuitje zitten'], ['a blessing in disguise', 'een geluk bij een ongeluk'], ['to see eye to eye', 'het met elkaar eens zijn'],
      ['to step up to the plate', 'verantwoordelijkheid nemen'], ['out of left field', 'uit het niets'], ['to jump the gun', 'te vroeg van start gaan'], ['to keep someone posted', 'iemand op de hoogte houden']
    ],
    grammar: [
      { t: 'Idioom: betekenis is niet de som van de woorden', es: 'Idioms',
        html: `<p>Een <b>idioom</b> betekent iets anders dan de losse woorden. <i>Bite the bullet</i> heeft niets met kogels te maken: het betekent «door de zure appel heen bijten».</p>
<p>Veel Nederlandse uitdrukkingen hebben een Engelse tegenhanger, maar met <b>andere beelden</b>: «de druppel die de emmer doet overlopen» = <i>the last straw</i> (het laatste strootje op de rug van de kameel). «Terug naar af» = <i>back to square one</i>.</p>
<p>Letterlijk vertalen levert Dunglish op: <s>That is another cook</s>, <s>Now comes the monkey out of the sleeve</s>. Leuk voor een grap, maar niet in een vergadering.</p>`,
        table: [['Nederlands', 'Engels idioom'], ['terug naar af', 'back to square one'], ['de druppel die de emmer doet overlopen', 'the last straw'], ['door de zure appel heen bijten', 'bite the bullet'], ['in hetzelfde schuitje zitten', 'be in the same boat'], ['de aap komt uit de mouw', 'the truth comes out / the cat is out of the bag']],
        sum: "Let's bite the bullet. We're back to square one.",
        ex: [["The printer broke again. That's the last straw!", 'De printer is weer kapot. Dat is de druppel!'], ["Don't worry, we're all in the same boat.", 'Maak je geen zorgen, we zitten allemaal in hetzelfde schuitje.']] },
      { t: 'Sportmetaforen in Amerikaans zakenEngels', es: 'Sports metaphors',
        html: `<p>Amerikanen praten op het werk alsof ze op het sportveld staan, vooral met honkbal (baseball) en American football:</p>
<p><b>a ballpark figure</b> = ruwe schatting (ballpark = honkbalstadion). <b>to step up to the plate</b> = verantwoordelijkheid nemen. <b>out of left field</b> = onverwacht, raar. <b>to touch base</b> = even contact hebben. <b>to drop the ball</b> = een fout maken, iets laten liggen. <b>a game changer</b> = iets wat alles verandert.</p>
<p>🇬🇧 Britten gebruiken eerder cricket- en voetbalbeelden: <i>a sticky wicket</i> (lastige situatie), <i>to move the goalposts</i> (de regels tussentijds veranderen, dat kennen Amerikanen ook).</p>`,
        table: [['idioom', 'sport', 'betekenis'], ['a ballpark figure', 'honkbal', 'ruwe schatting'], ['to drop the ball', 'honkbal/football', 'een steek laten vallen'], ['to step up to the plate', 'honkbal', 'verantwoordelijkheid nemen'], ['to move the goalposts', 'voetbal', 'de regels veranderen']],
        ex: [['Can you give me a ballpark figure?', 'Kun je me een ruwe schatting geven?'], ['Somebody dropped the ball on this order.', 'Iemand heeft bij deze bestelling een steek laten vallen.']] },
      { t: 'Wanneer wel, wanneer niet', es: 'Using idioms well',
        html: `<p>Idioom laat zien dat je de taal beheerst, maar te veel klinkt geforceerd, zeker uit de mond van een niet-native. Een paar regels:</p>
<p>1. Gebruik idioom dat je <b>vaak hebt gehoord</b>, niet iets uit een lijstje van 1950 (<i>It's raining cats and dogs</i> hoor je zelden van Amerikanen onder de 60).</p>
<p>2. Pas op met <b>vaste vormen</b>: het is <i>a piece of cake</i>, niet <s>a cake piece</s>; <i>once in a blue moon</i>, niet <s>once in a blue month</s>.</p>
<p>3. In formele teksten (contracten, rapporten) liever geen idioom. In vergaderingen, e-mails en gesprekken juist wel.</p>`,
        table: [['klinkt natuurlijk', 'klinkt ouderwets of geforceerd'], ["Let's play it by ear.", "It's raining cats and dogs."], ["That's a long shot.", 'Every cloud has a silver lining.'], ["We're on the same page.", "Don't count your chickens before they hatch."]],
        ex: [["I don't know if we'll have time. Let's play it by ear.", 'Ik weet niet of we tijd hebben. Laten we het op ons af laten komen.'], ["It's a long shot, but it's worth trying.", 'De kans is klein, maar het is het proberen waard.']] }
    ],
    dialogue: {
      t: 'Kickoff meeting', place: 'Denver 🇺🇸',
      lines: [
        ['Steve', "Alright, let's cut to the chase. We need a new website by June. Ideas?", 'Oké, laten we meteen ter zake komen. We hebben in juni een nieuwe website nodig. Ideeën?'],
        ['Anouk', "Before we jump the gun, can we address the elephant in the room? The budget.", 'Voordat we te vroeg van start gaan, kunnen we het probleem bespreken waar niemand over begint? Het budget.'],
        ['Steve', 'Fair enough. Can you give me a ballpark figure?', 'Terecht. Kun je me een ruwe schatting geven?'],
        ['Anouk', "Around fifty thousand. Last time, the agency dropped the ball and we were back to square one.", 'Rond de vijftigduizend. De vorige keer liet het bureau een steek vallen en waren we terug bij af.'],
        ['Steve', "Right. So this time, who's going to step up to the plate and manage it?", 'Klopt. Dus wie neemt deze keer de verantwoordelijkheid en leidt het?'],
        ['Anouk', "I can. If I can call the shots, I'll hit the ground running next week.", 'Ik kan dat. Als ik de lakens mag uitdelen, ga ik volgende week vliegend van start.'],
        ['Steve', "Great. Let's touch base on Friday and make sure we're on the same page.", 'Mooi. Laten we vrijdag even bijpraten en zorgen dat we op één lijn zitten.'],
        ['Anouk', "Sounds good. I'll keep you posted.", 'Klinkt goed. Ik hou je op de hoogte.']
      ],
      q: [
        { t: 'mc', q: 'What is «the elephant in the room»?', o: ['The budget', 'The website design', 'The agency'] },
        { t: 'mc', q: 'What happened last time?', o: ['The agency dropped the ball', 'The website was a success', 'Steve quit'] },
        { t: 'mc', q: 'What will they do on Friday?', o: ['Touch base and check they agree', 'Launch the website', 'Hire a new agency'] }
      ]
    },
    culture: { t: 'Corporate buzzwords: liefde en haat', html: `<p>Kantoorjargon als <i>circle back</i>, <i>low-hanging fruit</i>, <i>move the needle</i> en <i>synergy</i> wordt in de VS veel gebruikt, en net zo vaak belachelijk gemaakt. Er bestaat zelfs <b>buzzword bingo</b> voor saaie vergaderingen.</p>
<p>De serie <i>The Office</i> en de film <i>Office Space</i> leven op deze taal. Wil je natuurlijk klinken, gebruik dan de gewone idiomen (<i>on the same page</i>, <i>touch base</i>) en vermijd de ergste buzzwords.</p>
<p>🏈 Op maandagochtend praten Amerikaanse collega's vaak over de football van het weekend. Een paar sporttermen begrijpen helpt bij small talk.</p>` },
    ex: [
      { t: 'cloze', s: "We don't have much time, so let's cut to the ___.", a: ['chase'], o: ['chase', 'point', 'case'], nl: 'We hebben weinig tijd, dus laten we meteen ter zake komen.', tag: 'enc-idiom' },
      { t: 'cloze', s: "The project failed and now we're back to square ___.", a: ['one'], o: ['one', 'zero', 'first'], nl: 'Het project mislukte en nu zijn we terug bij af.', tag: 'enc-idiom' },
      { t: 'cloze', s: 'Can you give me a ___ figure? It doesn’t have to be exact.', a: ['ballpark'], o: ['ballpark', 'football', 'rough-and-ready'], nl: 'Kun je me een ruwe schatting geven? Het hoeft niet precies.', tag: 'enc-idiom' },
      { t: 'cloze', s: 'Nobody mentioned the layoffs. It was the elephant in the ___.', a: ['room'], o: ['room', 'office', 'house'], nl: 'Niemand noemde de ontslagen. Het was het probleem waar niemand over begon.', tag: 'enc-idiom' },
      { t: 'cloze', s: "I hate going to the dentist, but I'll just have to bite the ___.", a: ['bullet'], o: ['bullet', 'apple', 'lemon'], nl: 'Ik haat de tandarts, maar ik moet door de zure appel heen bijten.', tag: 'enc-idiom' },
      { t: 'cloze', s: 'He was late again this morning. That was the last ___.', a: ['straw'], o: ['straw', 'drop', 'drip'], nl: 'Hij was vanochtend weer te laat. Dat was de druppel.', tag: 'enc-idiom' },
      { t: 'mc', q: '«To drop the ball» betekent…', o: ['een steek laten vallen', 'opgeven', 'een feest geven'], tag: 'enc-idiom' },
      { t: 'mc', q: '«That’s a long shot» betekent…', o: ['De kans is klein.', 'Dat duurt lang.', 'Dat is ver weg.'], tag: 'enc-idiom' },
      { t: 'mc', q: 'Welke uitdrukking klinkt ouderwets in modern Amerikaans Engels?', o: ["It's raining cats and dogs.", "Let's play it by ear.", "We're on the same page."], tag: 'enc-idiom' },
      { t: 'mc', q: '«In hetzelfde schuitje zitten» is…', o: ['to be in the same boat', 'to sit in the same ship', 'to be on the same bike'], tag: 'enc-idiom' },
      { t: 'tr', nl: 'Laten we het op ons af laten komen.', a: ["Let's play it by ear.", 'Let us play it by ear.'], tag: 'enc-idiom' },
      { t: 'tr', nl: 'Ik hou je op de hoogte.', a: ["I'll keep you posted.", 'I will keep you posted.', "I'll keep you updated.", "I'll keep you in the loop."], tag: 'enc-idiom' },
      { t: 'order', s: "Let's touch base next week to get the ball rolling.", nl: 'Laten we volgende week even contact hebben om de bal aan het rollen te brengen.', tag: 'enc-idiom' },
      { t: 'match', p: [['to jump the gun', 'te vroeg beginnen'], ['to call the shots', 'de lakens uitdelen'], ['out of left field', 'uit het niets'], ['to see eye to eye', 'het eens zijn'], ['to go the extra mile', 'een stapje extra doen']], tag: 'enc-idiom' },
      { t: 'cloze', s: "Losing that client was a blessing in ___. We found a much better one.", a: ['disguise'], o: ['disguise', 'secret', 'hiding'], nl: 'Het verlies van die klant was een geluk bij een ongeluk. We vonden een veel betere.', tag: 'enc-idiom' }
    ],
    reading: {
      t: 'Speaking fluent «office»', type: 'Humoristische column',
      p: [
        ["On my first day at an American company, my manager told me to «hit the ground running», «touch base with Kevin» and «grab the low-hanging fruit». I nodded and went to look for a fruit bowl.", 'Op mijn eerste dag bij een Amerikaans bedrijf zei mijn manager dat ik «vliegend van start moest gaan», «even contact moest hebben met Kevin» en «het laaghangend fruit moest plukken». Ik knikte en ging op zoek naar een fruitschaal.'],
        ["By the end of the week, I had learned that a «ballpark figure» was not about baseball, and that «let's take this offline» did not mean turning off the Wi-Fi.", 'Aan het eind van de week had ik geleerd dat een «ballpark figure» niets met honkbal te maken had, en dat «let’s take this offline» niet betekende dat je de wifi uitzette.'],
        ["The real breakthrough came when I said, during a meeting, «I think we're not on the same page». Everyone turned to look at me. I had finally become one of them.", 'De echte doorbraak kwam toen ik in een vergadering zei: «I think we’re not on the same page.» Iedereen keek me aan. Ik was eindelijk een van hen geworden.'],
        ["Now, three years later, I catch myself saying «let's circle back on this» to my own family. My mother is deeply concerned.", 'Nu, drie jaar later, betrap ik mezelf erop dat ik tegen mijn eigen familie zeg «let’s circle back on this». Mijn moeder maakt zich ernstig zorgen.']
      ],
      gl: [['low-hanging fruit', 'laaghangend fruit (makkelijke winst)'], ['to take something offline', 'iets buiten de vergadering bespreken'], ['to circle back', 'er later op terugkomen']],
      q: [
        { t: 'mc', q: 'What did the writer do after the first instructions?', o: ['Looked for a fruit bowl', 'Called Kevin', 'Went home'] },
        { t: 'mc', q: 'What does «let’s take this offline» mean?', o: ['Let’s discuss it outside the meeting', 'Turn off the Wi-Fi', 'Delete the file'] },
        { t: 'mc', q: 'Why is the writer’s mother concerned?', o: ['The writer uses office jargon at home', 'The writer lost their job', 'The writer moved to the US'] }
      ]
    },
    say: [["Let's cut to the chase.", 'Laten we meteen ter zake komen.'], ['Can you give me a ballpark figure?', 'Kun je me een ruwe schatting geven?'], ["We're back to square one.", 'We zijn terug bij af.'], ["Let's make sure we're on the same page.", 'Laten we zorgen dat we op één lijn zitten.']],
    task: { nl: 'Schrijf een korte, natuurlijke Slack-update (4–5 zinnen) aan je team over een project dat opnieuw moet. Gebruik vier idiomen uit deze unit, zonder dat het geforceerd klinkt.', model: "Quick update, team: the client changed their mind on the design, so we're back to square one. I know it's frustrating, but we're all in the same boat. Can everyone give me a ballpark figure for how much time they need? Let's touch base tomorrow at ten to make sure we're on the same page." },
    scenario: { nl: 'Je doet mee aan een Amerikaanse teamvergadering vol idioom.', role: 'You are Steve, an energetic American project manager in Denver who uses a lot of business idioms (ballpark, touch base, drop the ball, on the same page, step up to the plate). Lead a short planning meeting with the learner. If they misunderstand an idiom, explain it briefly. Encourage them to use idioms back.', goal: 'Plan een project, begrijp de idiomen en gebruik er zelf een paar.' }
  });
})(window.SPT);
