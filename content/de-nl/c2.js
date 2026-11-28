/* Duits voor Nederlandstaligen — niveau C2, units 1–5 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-register': 'register kiezen (deftig, neutraal, spreektaal)', 'de-umgang': 'spreektaalvormen (nix, ’ne, haste, is’)', 'de-konj-lit': 'literaire Konjunktiv (stünde, käme, möge)', 'de-genobj': 'werkwoorden met tweede naamval (bedürfen, gedenken)',
    'de-hervor': 'nadruk door zinsbouw (Es war …, der / Den kenne ich)', 'de-rhet': 'stijlfiguren (nicht unklug, retorische vraag)', 'de-substadj': 'bijvoeglijk naamwoord als naamwoord (das Gute, der Reisende)', 'de-abstrakt': 'abstracte naamwoorden (-heit, -keit, -tum, -nis)',
    'de-dialekt': 'dialecten verstaan', 'de-lautversch': 'klankverschuiving Nederlands ↔ Duits (p/pf, t/z, k/ch)'
  });

  /* ───────────────────────── C2 · 1 ───────────────────────── */
  U({
    id: 'de-c2-01', level: 'C2', icon: '🎚️', title: 'Stil und Register', nl: 'Stijl: het juiste register kiezen',
    goals: ['Hetzelfde zeggen op drie niveaus: deftig, neutraal en spreektaal', 'Herkennen welk register een tekst of spreker gebruikt', 'Ingeslikte spreektaalvormen verstaan (haste, nix, ’ne)', 'Je toon aanpassen aan de situatie'],
    vocab: [
      ['bekommen · erhalten · kriegen', 'krijgen (neutraal · formeel · spreektaal)'], ['beginnen · anfangen · loslegen', 'beginnen (formeel · neutraal · spreektaal)'], ['das Geld · die Kohle', 'het geld · de poen'], ['arbeiten · schuften · malochen', 'werken · zwoegen · buffelen'], ['essen · speisen · futtern', 'eten · dineren · bikken'],
      ['das Auto · der Wagen · die Karre', 'de auto · de wagen · de kar'], ['sterben · versterben · abkratzen', 'sterven · overlijden · de pijp uit gaan'], ['sich befinden', 'zich bevinden (formeel)'], ['verfügen über', 'beschikken over (formeel)'], ['benötigen', 'nodig hebben (formeel)'],
      ['gestatten', 'toestaan (formeel)'], ['erwerben', 'verwerven, kopen (formeel)'], ['toll · klasse · geil', 'tof · geweldig · vet (jongerentaal)'], ['kapieren', 'snappen (spreektaal)'], ['quatschen', 'kletsen (spreektaal)'],
      ['mies', 'beroerd (spreektaal)'], ['pleite', 'blut (spreektaal)'], ['hinkriegen', 'voor elkaar krijgen (spreektaal)'], ['abhauen', 'ervandoor gaan (spreektaal)'], ['Bock haben auf', 'zin hebben in (spreektaal)'],
      ['gehoben', 'deftig, verheven'], ['umgangssprachlich', 'in de spreektaal'], ['salopp', 'losjes, nonchalant'], ['der Tonfall', 'de toon, de intonatie'], ['angemessen', 'gepast'], ['die Floskel', 'de holle frase']
    ],
    grammar: [
      { t: 'Drie manieren om hetzelfde te zeggen', es: 'Stilebenen: gehoben, neutral, umgangssprachlich',
        html: `<p>Op C2-niveau gaat het niet meer om goed of fout, maar om <b>gepast</b>. Het Duits heeft voor bijna alles drie lagen, en het woordenboek (Duden) noteert ze met <i>geh.</i> (gehoben), geen aanduiding (neutraal), <i>ugs.</i> (umgangssprachlich) en <i>salopp</i> of <i>derb</i>.</p>
<p><b>Woordkeus:</b> <i>erhalten – bekommen – kriegen</i> · <i>das Antlitz – das Gesicht – die Visage</i> · <i>sich begeben – gehen – latschen</i>.</p>
<p><b>Grammatica:</b> het formele register gebruikt de tweede naamval (<i>wegen des Wetters</i>), het Präteritum (<i>ich ging</i>), de Konjunktiv I en naamwoordstijl. De spreektaal neemt de derde naamval (<i>wegen dem Wetter</i>), het Perfekt (<i>ich bin gegangen</i>), <i>würde</i> en bijzinnen.</p>
<p><b>Aanspreken:</b> <i>Sehr geehrte Frau Dr. Roth</i> – <i>Guten Tag, Frau Roth</i> – <i>Hallo Eva</i> – <i>Hi</i>. De slotformule hoort erbij: <i>Mit freundlichen Grüßen</i> – <i>Viele Grüße</i> – <i>Liebe Grüße (LG)</i>.</p>
<p><b>Uitzondering:</b> «deftiger» is niet altijd «beleefder». Tegen een vriend klinkt <i>Ich wäre Ihnen sehr verbunden</i> niet hoffelijk maar <b>ironisch of kil</b>. <b>Waarom?</b> Register drukt afstand uit: wie een te hoog register kiest, schept afstand waar nabijheid verwacht wordt. Gepast is wat bij de relatie en de situatie hoort.</p>`,
        table: [['gehoben', 'neutraal', 'spreektaal'], ['erhalten', 'bekommen', 'kriegen'], ['speisen', 'essen', 'futtern'], ['sich erkundigen', 'fragen', 'nachhaken'], ['verstehen Sie mich recht', 'verstehen Sie mich nicht falsch', 'versteh mich nicht falsch'], ['Ich bedaure sehr.', 'Es tut mir leid.', 'Sorry. / Tut mir leid.'], ['aufgrund des Regens', 'wegen des Regens', 'wegen dem Regen']],
        sum: 'Ich habe Ihr Schreiben erhalten. · Ich habe deinen Brief bekommen. · Ich hab deine Mail gekriegt.',
        ex: [['Wir bitten um Ihr Verständnis.', 'Wij vragen om uw begrip. (formeel)'], ['Kannst du mir kurz helfen?', 'Kun je me even helpen? (neutraal)'], ['Kriegst du das allein hin?', 'Krijg je dat alleen voor elkaar? (spreektaal)']] },
      { t: 'Haste mal ’ne Minute? Ingeslikte vormen', es: 'Verschleifungen der gesprochenen Sprache',
        html: `<p>Gesproken Duits slikt klanken in. Je hoeft zo niet te schrijven (behalve in chats), maar je moet het <b>verstaan</b>.</p>
<p><b>-e valt weg:</b> <i>ich hab, ich geh, ich komm, heut</i>.<br><b>ein → ’n, eine → ’ne, einen → ’nen:</b> <i>Hast du <b>’ne</b> Minute?</i><br><b>ist → is, nicht → nich, nichts → nix, etwas → was, mal → ma:</b> <i>Das <b>is nix</b> für mich.</i><br><b>werkwoord + du smelt samen:</b> <i>hast du → <b>haste</b>, bist du → <b>biste</b>, kannst du → <b>kannste</b>, weißt du → <b>weißte</b></i>.<br><b>werkwoord + es / wir:</b> <i>gibt es → <b>gibt’s</b>, geht es → <b>geht’s</b>, haben wir → <b>hamwa</b></i> (noordelijk), <i>ham mer</i> (zuidelijk).<br><b>voorzetsel + lidwoord:</b> <i>auf dem → <b>aufm</b>, mit dem → <b>mit’m</b>, in das → <b>ins</b>, für das → <b>fürs</b></i>.</p>
<p>Typisch gesproken zijn ook <b>weil</b> met hoofdzinsvolgorde (<i>…, weil ich <b>hab</b> keine Zeit</i>) en <b>tun</b> als hulpwerkwoord (<i>Ich <b>tu</b> grad kochen</i>). Beide gelden in geschreven Duits als fout.</p>
<p><b>Uitzondering:</b> een paar samentrekkingen zijn <b>wél</b> standaardtaal en zelfs verplicht: <i>im, am, zum, zur, ins, vom, beim</i>. <i>In dem Sommer</i> betekent dan iets anders dan <i>im Sommer</i> (in díé zomer). <b>Waarom?</b> Deze vormen zijn al eeuwen ingeburgerd en hebben een eigen functie gekregen: samengetrokken is het lidwoord neutraal, los is het aanwijzend.</p>`,
        table: [['voluit', 'gesproken'], ['Hast du eine Minute?', 'Haste ’ne Minute?'], ['Das ist nichts.', 'Das is nix.'], ['Weißt du etwas?', 'Weißte was?'], ['Wie geht es dir?', 'Wie geht’s?'], ['Ich habe es nicht.', 'Ich hab’s nich.'], ['Kannst du einmal schauen?', 'Kannste ma gucken?']],
        ex: [['Haste mal ’nen Euro?', 'Heb je even een euro?'], ['Is nich so schlimm.', 'Is niet zo erg.'], ['Was gibt’s denn da zu lachen?', 'Wat valt er daar te lachen?']] }
    ],
    dialogue: {
      t: 'Ein Text, drei Versionen', place: 'Hamburg 🇩🇪',
      lines: [
        ['Anna', 'Ole, kannst du mal schauen? Ich muss meiner Vermieterin schreiben, dass die Heizung kaputt ist.', 'Ole, kun je even kijken? Ik moet mijn verhuurster schrijven dat de verwarming kapot is.'],
        ['Ole', 'Zeig her. «Hallo Frau Petersen, die Heizung is schon wieder im Eimer.» Äh, nee. So redest du mit mir, nicht mit ihr.', 'Laat zien. «Hallo mevrouw Petersen, de verwarming is alweer naar de knoppen.» Eh, nee. Zo praat je met mij, niet met haar.'],
        ['Anna', 'Zu salopp? Dann eben: «Sehr geehrte Frau Petersen, hiermit setze ich Sie in Kenntnis, dass die Heizungsanlage defekt ist.»', 'Te losjes? Dan maar: «Geachte mevrouw Petersen, hierbij stel ik u ervan in kennis dat de verwarmingsinstallatie defect is.»'],
        ['Ole', 'Jetzt klingst du wie ein Anwalt. Sie denkt, du willst sie verklagen.', 'Nu klink je als een advocaat. Ze denkt dat je haar wilt aanklagen.'],
        ['Anna', 'Was denn dann?', 'Wat dan wel?'],
        ['Ole', '«Guten Tag, Frau Petersen, leider funktioniert die Heizung seit gestern nicht mehr. Könnten Sie bitte jemanden vorbeischicken?» Freundlich, klar, fertig.', '«Goedendag mevrouw Petersen, helaas doet de verwarming het sinds gisteren niet meer. Zou u alstublieft iemand langs kunnen sturen?» Vriendelijk, duidelijk, klaar.'],
        ['Anna', 'Und am Ende «Liebe Grüße»?', 'En aan het einde «Liebe Grüße»?'],
        ['Ole', 'Lieber «Viele Grüße». «Liebe Grüße» kriegt bei mir nur meine Oma.', 'Liever «Viele Grüße». «Liebe Grüße» krijgt bij mij alleen mijn oma.']
      ],
      q: [
        { t: 'mc', q: 'Was ist an Annas erster Version falsch?', o: ['Sie ist zu salopp', 'Sie ist zu lang', 'Sie ist unhöflich formuliert, aber korrekt'] },
        { t: 'mc', q: 'Wie klingt die zweite Version laut Ole?', o: ['Wie von einem Anwalt', 'Wie von einem Kind', 'Genau richtig'] },
        { t: 'mc', q: 'Welche Grußformel empfiehlt Ole?', o: ['Viele Grüße', 'Liebe Grüße', 'Hochachtungsvoll'] }
      ]
    },
    culture: { t: 'Kiezdeutsch, Jugendwort en de Duden', html: `<p>📖 Elk jaar kiest een uitgeverij het <b>Jugendwort des Jahres</b>. Winnaars als <i>cringe</i>, <i>smash</i>, <i>goofy</i> en <i>Digga</i> laten zien hoe sterk Engels en straattaal doorwerken. Zodra het woord gekozen is, vinden jongeren het meestal niet meer cool.</p>
<p>In de grote steden is <b>Kiezdeutsch</b> ontstaan, een jongerentaal met invloeden uit Turks en Arabisch: <i>Ich geh Schule</i> (zonder voorzetsel en lidwoord), <i>Lan, wallah, Bruder</i>. Taalkundigen beschouwen het als een nieuw dialect met eigen regels, niet als «slecht Duits».</p>
<p>Aan de andere kant staat het <b>Bildungsbürgertum</b>: wie in een sollicitatiebrief <i>kriegen</i> schrijft of de tweede naamval vermijdt, valt door de mand. De bestseller <i>Der Dativ ist dem Genitiv sein Tod</i> maakte van taalfouten een nationaal gezelschapsspel.</p>` },
    ex: [
      { t: 'cloze', s: 'Wir haben Ihr Schreiben ___. (formeel)', a: ['erhalten'], o: ['erhalten', 'gekriegt', 'abgekriegt'], nl: 'Wij hebben uw brief ontvangen.', tag: 'de-register' },
      { t: 'cloze', s: 'Hast du meine Mail ___? (spreektaal)', a: ['gekriegt'], o: ['gekriegt', 'erhalten', 'empfangen'], nl: 'Heb je mijn mail gekregen?', tag: 'de-register' },
      { t: 'cloze', s: '___ des Regens fällt das Fest aus. (formeel)', a: ['Aufgrund'], o: ['Aufgrund', 'Wegen dem', 'Weil'], nl: 'Vanwege de regen gaat het feest niet door.', tag: 'de-register' },
      { t: 'cloze', s: 'Haste mal ___ Minute? (eine, ingeslikt)', a: ['’ne'], o: ['’ne', '’nen', '’n'], nl: 'Heb je even een minuutje?', tag: 'de-umgang' },
      { t: 'cloze', s: 'Das is ___ für mich. (nichts, spreektaal)', a: ['nix'], o: ['nix', 'nich', 'was'], nl: 'Dat is niks voor mij.', tag: 'de-umgang' },
      { t: 'cloze', s: '«Kannste» is voluit: kannst ___.', a: ['du'], o: ['du', 'es', 'sie'], nl: '«Kannste» = kannst du.', tag: 'de-umgang' },
      { t: 'cloze', s: 'Wie ___? (geht es, ingeslikt)', a: ['geht’s'], o: ['geht’s', 'gehts es', 'geh’s'], nl: 'Hoe gaat het?', tag: 'de-umgang' },
      { t: 'mc', q: 'Welk drietal loopt van formeel naar spreektaal?', o: ['speisen – essen – futtern', 'futtern – essen – speisen', 'essen – speisen – futtern'], tag: 'de-register' },
      { t: 'mc', q: 'Je schrijft een goede vriend: «Ich wäre Ihnen sehr verbunden.» Hoe komt dat over?', o: ['Ironisch of kil', 'Extra beleefd', 'Heel hartelijk'], x: 'Uitzondering: deftiger is niet altijd beleefder. Reden: een hoog register schept afstand, en bij een vriend past nabijheid.', tag: 'de-register' },
      { t: 'mc', q: 'Welke samentrekking is gewoon Standaardduits?', o: ['im Sommer', 'aufm Tisch', 'mit’m Auto'], x: 'Uitzondering: im, am, zum, zur, ins, vom, beim zijn standaard. Reden: ze zijn eeuwenoud en hebben een eigen functie gekregen.', tag: 'de-umgang' },
      { t: 'tr', nl: 'Wij vragen om uw begrip. (formeel)', a: ['Wir bitten um Ihr Verständnis.'], tag: 'de-register' },
      { t: 'tr', nl: 'Ik heb geen zin. (spreektaal, met Bock)', a: ['Ich habe keinen Bock.', 'Ich hab keinen Bock.', 'Ich hab kein Bock.'], tag: 'de-register' },
      { t: 'tr', nl: 'Snap je dat? (spreektaal)', a: ['Kapierst du das?', 'Kapierste das?'], tag: 'de-register' },
      { t: 'order', s: 'Könnten Sie bitte jemanden vorbeischicken?', nl: 'Zou u alstublieft iemand langs kunnen sturen?', tag: 'de-register' },
      { t: 'match', p: [['benötigen', 'nodig hebben (formeel)'], ['quatschen', 'kletsen'], ['pleite', 'blut'], ['abhauen', 'ervandoor gaan'], ['angemessen', 'gepast']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Dreimal dieselbe Nachricht', type: 'Stijlvergelijking',
      p: [
        ['Sehr geehrte Fahrgäste, aufgrund einer technischen Störung an einem Stellwerk kommt es im gesamten Stadtgebiet zu erheblichen Beeinträchtigungen des Zugverkehrs. Wir bitten Sie, die entstandenen Unannehmlichkeiten zu entschuldigen, und empfehlen, auf andere Verkehrsmittel auszuweichen.', 'Geachte reizigers, vanwege een technische storing aan een seinhuis komt het in het hele stadsgebied tot aanzienlijke hinder voor het treinverkeer. Wij verzoeken u het ontstane ongemak te excuseren en raden aan op andere vervoermiddelen uit te wijken. (formeel: omroepbericht)'],
        ['Wegen einer Störung am Stellwerk fahren heute in Hamburg kaum Züge. Die Bahn rät, auf Busse umzusteigen. Wie lange die Reparatur dauert, ist noch nicht bekannt.', 'Vanwege een storing aan het seinhuis rijden er vandaag in Hamburg nauwelijks treinen. De spoorwegen raden aan op bussen over te stappen. Hoe lang de reparatie duurt, is nog niet bekend. (neutraal: krantenbericht)'],
        ['Boah, die Bahn is schon wieder platt. Irgendwas am Stellwerk, keine Ahnung. Ich steh seit ’ner Stunde am Hauptbahnhof und krieg die Krise. Kannste mich abholen? Sonst komm ich heut nich mehr heim.', 'Poeh, de trein ligt er alweer uit. Iets met het seinhuis, geen idee. Ik sta al een uur op het centraal station en word gek. Kun je me ophalen? Anders kom ik vandaag niet meer thuis. (spreektaal: appje)']
      ],
      gl: [['das Stellwerk', 'het seinhuis'], ['die Beeinträchtigung', 'de hinder'], ['die Unannehmlichkeit', 'het ongemak'], ['ausweichen auf', 'uitwijken naar'], ['die Krise kriegen', 'gek worden (spreektaal)']],
      q: [
        { t: 'mc', q: 'Woran erkennt man das gehobene Register im ersten Text?', o: ['An Genitiv, Nominalstil und Wörtern wie «Beeinträchtigungen»', 'An kurzen Sätzen', 'An Wörtern wie «Boah»'] },
        { t: 'mc', q: 'Was bedeutet «Ich krieg die Krise»?', o: ['Ich werde gleich verrückt', 'Ich bekomme Geld', 'Ich bin krank'] },
        { t: 'mc', q: 'Welche Formen im dritten Text sind verschliffen?', o: ['is, ’ner, kannste, nich', 'aufgrund, erheblichen', 'wegen, rät, dauert'] }
      ]
    },
    say: [['Wir bitten um Ihr Verständnis.', 'Wij vragen om uw begrip.'], ['Haste mal ’ne Minute?', 'Heb je even een minuutje?'], ['Kriegst du das allein hin?', 'Krijg je dat alleen voor elkaar?']],
    task: { nl: 'Schrijf dezelfde boodschap drie keer (elk 1 à 2 zinnen): je komt te laat op een afspraak. Eén keer formeel aan een klant, één keer neutraal aan een collega, één keer als appje aan een vriend.', model: 'Sehr geehrter Herr Braun, aufgrund einer Zugverspätung werde ich leider erst gegen 15 Uhr bei Ihnen eintreffen. Ich bitte um Ihr Verständnis. / Hallo Sabine, mein Zug hat Verspätung, ich bin erst um drei da. Fangt ruhig schon an. / Sorry, Bahn is wieder platt. Komm ’ne halbe Stunde später. Bestellste mir schon mal ’n Bier?' },
    scenario: { nl: 'Je moet een bericht aan je Duitse verhuurster schrijven en vraagt een Hamburgse vriend om de toon te controleren.', role: 'Ole, een nuchtere Hamburger die precies weet welke toon waar past', goal: 'Lees je versie voor, vraag of het te formeel of te losjes is, en maak samen een versie die past.' }
  });

  /* ───────────────────────── C2 · 2 ───────────────────────── */
  U({
    id: 'de-c2-02', level: 'C2', icon: '📜', title: 'Sprache der Literatur', nl: 'Literair Duits: stünde, möge, des Lebens',
    goals: ['Literaire en plechtige teksten lezen', 'Oude Konjunktiv-vormen herkennen (stünde, hülfe, käme)', 'Wensformules met möge en sei begrijpen', 'Werkwoorden met de tweede naamval herkennen'],
    vocab: [
      ['die Dichtung', 'de dichtkunst, de literatuur'], ['der Dichter / die Dichterin', 'de dichter'], ['das Gedicht', 'het gedicht'], ['der Vers', 'het vers, de versregel'], ['die Strophe', 'de strofe'],
      ['der Reim', 'het rijm'], ['die Novelle', 'de novelle'], ['das Märchen', 'het sprookje'], ['die Sage', 'de sage'], ['das Gleichnis', 'de gelijkenis'],
      ['das Antlitz', 'het gelaat (dichterlijk)'], ['das Haupt', 'het hoofd (plechtig)'], ['das Gemüt', 'het gemoed'], ['die Wehmut', 'de weemoed'], ['die Sehnsucht', 'het verlangen'],
      ['einst', 'eens, ooit'], ['gleichwohl', 'niettemin'], ['indes', 'intussen; echter'], ['fürwahr', 'voorwaar'], ['wohlan', 'welaan'],
      ['gedenken', 'gedenken, herdenken'], ['bedürfen', 'behoeven'], ['sich entsinnen', 'zich herinneren (deftig)'], ['sich erfreuen', 'zich verheugen in'], ['harren', 'wachten op (dichterlijk)'], ['walten', 'heersen (plechtig)']
    ],
    grammar: [
      { t: 'Stünde, käme, hülfe: de oude Konjunktiv II', es: 'Literarischer Konjunktiv II und Wunschformeln',
        html: `<p>In gesproken Duits zeg je <i>würde stehen</i>. Literaire en plechtige teksten gebruiken de <b>echte Konjunktiv II</b> van sterke werkwoorden: verleden-tijdsstam + Umlaut + -e.</p>
<p><i>kommen – kam – <b>käme</b></i> · <i>gehen – ging – <b>ginge</b></i> · <i>geben – gab – <b>gäbe</b></i> · <i>wissen – wusste – <b>wüsste</b></i> · <i>tragen – trug – <b>trüge</b></i> · <i>schreiben – schrieb – <b>schriebe</b></i></p>
<p>In het dagelijks leven leven er maar een handvol: <i>wäre, hätte, käme, gäbe, ginge, wüsste, bräuchte</i>. De rest (<i>flöge, schwämme, läse</i>) is boekentaal.</p>
<p><b>Wensformules</b> met de Konjunktiv I: <i>Er <b>lebe</b> hoch!</i> · <i><b>Möge</b> es dir gut gehen!</i> · <i>Gott <b>sei</b> Dank!</i> · <i>Es <b>sei</b> denn …</i> · <i><b>Sei</b> es Sommer, <b>sei</b> es Winter</i> (hetzij … hetzij). In recepten en wiskunde: <i>Man <b>nehme</b> drei Eier.</i> · <i>Gegeben <b>sei</b> ein Dreieck.</i></p>
<p><b>Uitzondering:</b> een paar werkwoorden hebben een Konjunktiv II met een <b>andere klinker</b> dan de verleden tijd: <i>helfen – half – <b>hülfe</b></i>, <i>stehen – stand – <b>stünde</b></i>, <i>sterben – starb – <b>stürbe</b></i>, <i>werfen – warf – <b>würfe</b></i>. <b>Waarom?</b> Deze werkwoorden hadden vroeger in het meervoud van de verleden tijd een <i>u</i> (<i>wir hulfen, wir stunden</i>), en de Konjunktiv is van dat meervoud afgeleid. Het meervoud is later aangepast, de Konjunktiv bleef staan. <i>Stände</i> en <i>hälfe</i> bestaan ook, maar klinken als <i>Stände</i> (stands) en <i>Hälfte</i>.</p>`,
        table: [['heel werkwoord', 'Präteritum', 'Konjunktiv II', 'spreektaal'], ['kommen', 'kam', 'käme', 'würde kommen'], ['geben', 'gab', 'gäbe', 'würde geben'], ['stehen', 'stand', 'stünde', 'würde stehen'], ['helfen', 'half', 'hülfe', 'würde helfen'], ['tragen', 'trug', 'trüge', 'würde tragen'], ['fliegen', 'flog', 'flöge', 'würde fliegen']],
        sum: 'Wenn er nur käme! Es stünde schlecht um uns. Möge es gelingen!',
        ex: [['Ach, wenn doch der Frühling käme!', 'Ach, kwam de lente maar!'], ['Wer hülfe mir, wenn nicht du?', 'Wie zou me helpen, zo niet jij?'], ['Möge der Bessere gewinnen.', 'Moge de beste winnen.']] },
      { t: 'Werkwoorden met de tweede naamval', es: 'Genitivobjekt und feste Genitive',
        html: `<p>Een kleine groep werkwoorden krijgt het voorwerp in de <b>tweede naamval</b>. Je vindt ze in literatuur, toespraken en rechtstaal:</p>
<p><b>gedenken</b> (herdenken): <i>Wir gedenken <b>der Opfer</b>.</i> · <b>bedürfen</b> (behoeven): <i>Das bedarf <b>keiner Erklärung</b>.</i> · <b>sich erfreuen</b>: <i>Er erfreut sich <b>bester Gesundheit</b>.</i> · <b>sich bedienen</b> (zich bedienen van) · <b>sich entsinnen</b> (zich herinneren) · <b>sich schämen</b> · <b>jemanden beschuldigen / anklagen / verdächtigen</b>: <i>Man beschuldigt ihn <b>des Diebstahls</b>.</i></p>
<p>Ook bijvoeglijke naamwoorden: <i>sich <b>einer Sache</b> bewusst / sicher sein</i>, <i><b>des Lebens</b> müde</i>, <i><b>der Rede</b> wert</i>.</p>
<p>En bijwoordelijke tweede naamvallen, die je als vaste uitdrukking leert: <i><b>eines Tages</b></i> (op een dag), <i><b>meines Erachtens</b></i> (naar mijn mening), <i><b>guten Mutes</b></i> (goedgemutst), <i><b>schweren Herzens</b></i> (met pijn in het hart), <i><b>letzten Endes</b></i> (uiteindelijk).</p>
<p><b>Uitzondering:</b> <i>eines Nachts</i> (op een nacht) heeft een mannelijke uitgang, terwijl <i>die Nacht</i> vrouwelijk is. <b>Waarom?</b> De vorm is gemaakt naar het voorbeeld van <i>eines Tages, eines Abends, eines Morgens</i>; de reeks was sterker dan het geslacht. Vandaar ook het bijwoord <i>nachts</i> naast <i>tags, abends, morgens</i>.</p>`,
        table: [['werkwoord / uitdrukking', 'voorbeeld', 'gewoon Duits'], ['gedenken + 2', 'der Toten gedenken', 'an die Toten denken'], ['bedürfen + 2', 'Das bedarf der Zustimmung.', 'Das braucht die Zustimmung.'], ['sich erinnern + 2 (oud)', 'Ich erinnere mich dessen.', 'Ich erinnere mich daran.'], ['bewusst + 2', 'sich der Gefahr bewusst sein', '(geen alternatief)'], ['meines Erachtens', 'Meines Erachtens ist das falsch.', 'Meiner Meinung nach …']],
        ex: [['Schweren Herzens nahm sie Abschied.', 'Met pijn in het hart nam ze afscheid.'], ['Ich bin mir dessen durchaus bewusst.', 'Ik ben me daar zeer wel van bewust.'], ['Eines Tages wirst du mich verstehen.', 'Op een dag zul je me begrijpen.']] }
    ],
    dialogue: {
      t: 'Im Lesekreis', place: 'Weimar 🇩🇪',
      lines: [
        ['Frau Albrecht', 'Wer liest die nächste Strophe? Herr Mulder, Sie vielleicht?', 'Wie leest de volgende strofe? Meneer Mulder, u misschien?'],
        ['Herr Mulder', 'Gern. «Ach, wenn er nur käme, eh der Winter beginnt, und stünde am Tor wie einst als Kind.» Verzeihung, was heißt «stünde»?', 'Graag. «Ach, kwam hij maar, eer de winter begint, en stond hij aan de poort zoals eens als kind.» Neemt u me niet kwalijk, wat betekent «stünde»?'],
        ['Frau Albrecht', 'Das ist «würde stehen». Der alte Konjunktiv von «stehen».', 'Dat is «würde stehen». De oude Konjunktiv van «stehen».'],
        ['Herr Mulder', 'Aber die Vergangenheit ist doch «stand». Müsste es nicht «stände» heißen?', 'Maar de verleden tijd is toch «stand». Zou het niet «stände» moeten zijn?'],
        ['Frau Albrecht', 'Beides gibt es. «Stünde» ist älter und schöner. Früher sagte man «wir stunden».', 'Beide bestaan. «Stünde» is ouder en mooier. Vroeger zei men «wir stunden».'],
        ['Herr Mulder', 'Und «eh»? Und «einst»?', 'En «eh»? En «einst»?'],
        ['Frau Albrecht', '«Ehe» heißt «bevor», «einst» heißt «früher einmal». So spricht heute niemand mehr, es sei denn, er hält eine Trauerrede.', '«Ehe» betekent «voordat», «einst» betekent «vroeger eens». Zo spreekt nu niemand meer, tenzij hij een rouwrede houdt.'],
        ['Herr Mulder', 'Schade eigentlich. Es klingt, als hätte die Sprache damals mehr Zeit gehabt.', 'Eigenlijk jammer. Het klinkt alsof de taal toen meer tijd had.'],
        ['Frau Albrecht', 'Das haben Sie schön gesagt. Meines Erachtens ist das genau der Punkt.', 'Dat hebt u mooi gezegd. Naar mijn mening is dat precies het punt.']
      ],
      q: [
        { t: 'mc', q: 'Was bedeutet «stünde»?', o: ['würde stehen', 'hat gestanden', 'steht'], },
        { t: 'mc', q: 'Was bedeutet «einst»?', o: ['früher einmal', 'einmal pro Tag', 'sofort'] },
        { t: 'mc', q: 'Wann spricht man laut Frau Albrecht heute noch so?', o: ['In einer Trauerrede', 'Beim Einkaufen', 'Im Büro'] }
      ]
    },
    culture: { t: 'Weimar, Goethe en het Reclam-boekje', html: `<p>📚 Het stadje <b>Weimar</b> in Thüringen (65.000 inwoners) is het hart van de Duitse literatuur: <b>Goethe</b> en <b>Schiller</b> woonden er rond 1800 op loopafstand van elkaar. Die periode heet de <i>Weimarer Klassik</i>. Hun dubbelstandbeeld voor het theater staat op elke ansichtkaart.</p>
<p>Elke Duitse scholier kent de gele <b>Reclam-Hefte</b>: kleine, spotgoedkope uitgaven van de klassiekers, volgeschreven met aantekeningen in de marge. Sinds 1867 zijn er meer dan 600 miljoen van verkocht.</p>
<p>Citaten uit <i>Faust</i> zitten diep in de taal, vaak zonder dat mensen het weten: <i>«Das also war des Pudels Kern»</i> (dus dát zat erachter), <i>«Hier bin ich Mensch, hier darf ich’s sein»</i>, <i>«Zwei Seelen wohnen, ach, in meiner Brust»</i>. Wie ze herkent, begrijpt de helft van de krantenkoppen.</p>` },
    ex: [
      { t: 'cloze', s: 'Ach, wenn er nur ___! (kommen, literair)', a: ['käme'], o: ['käme', 'kam', 'komme'], nl: 'Ach, kwam hij maar!', tag: 'de-konj-lit' },
      { t: 'cloze', s: 'Es ___ schlecht um uns. (stehen, literair)', a: ['stünde'], o: ['stünde', 'stand', 'stehe'], nl: 'Het zou er slecht voor ons voorstaan.', x: 'Uitzondering: stünde heeft een ü, terwijl de verleden tijd stand is. Reden: de Konjunktiv komt van het oude meervoud «wir stunden».', tag: 'de-konj-lit' },
      { t: 'cloze', s: 'Wer ___ mir, wenn nicht du? (helfen, literair)', a: ['hülfe'], o: ['hülfe', 'half', 'helfe'], nl: 'Wie zou me helpen, zo niet jij?', tag: 'de-konj-lit' },
      { t: 'cloze', s: '___ der Bessere gewinnen.', a: ['Möge'], o: ['Möge', 'Mag', 'Möchte'], nl: 'Moge de beste winnen.', tag: 'de-konj-lit' },
      { t: 'cloze', s: 'Wir gedenken ___ Opfer.', a: ['der'], o: ['der', 'die', 'den'], nl: 'Wij gedenken de slachtoffers.', tag: 'de-genobj' },
      { t: 'cloze', s: 'Das bedarf ___ Erklärung.', a: ['keiner'], o: ['keiner', 'keine', 'keinen'], nl: 'Dat behoeft geen uitleg.', tag: 'de-genobj' },
      { t: 'cloze', s: 'Ich bin mir ___ bewusst.', a: ['dessen'], o: ['dessen', 'das', 'dem'], nl: 'Ik ben me daarvan bewust.', tag: 'de-genobj' },
      { t: 'mc', q: 'Wat betekent «Man nehme drei Eier»?', o: ['Men neme drie eieren (recepttaal)', 'Men nam drie eieren', 'Men zou drie eieren nemen'], tag: 'de-konj-lit' },
      { t: 'mc', q: 'Waarom is het «eines Nachts» en niet «einer Nacht»?', o: ['Naar het voorbeeld van eines Tages, eines Abends', 'Omdat Nacht mannelijk is', 'Het is een drukfout'], x: 'Uitzondering: die Nacht is vrouwelijk, maar de vaste reeks (eines Tages, eines Abends) was sterker dan het geslacht.', tag: 'de-genobj' },
      { t: 'mc', q: 'Wat betekent «schweren Herzens»?', o: ['met pijn in het hart', 'met een zwaar lichaam', 'hartelijk'], tag: 'de-genobj' },
      { t: 'tr', nl: 'Naar mijn mening is dat fout. (deftig, met Erachtens)', a: ['Meines Erachtens ist das falsch.'], tag: 'de-genobj' },
      { t: 'tr', nl: 'Op een dag zul je me begrijpen.', a: ['Eines Tages wirst du mich verstehen.'], tag: 'de-genobj' },
      { t: 'tr', nl: 'Godzijdank!', a: ['Gott sei Dank!', 'Gott sei Dank.'], tag: 'de-konj-lit' },
      { t: 'order', s: 'Schweren Herzens nahm sie Abschied von ihrer Heimat.', nl: 'Met pijn in het hart nam ze afscheid van haar geboortestreek.', tag: 'de-genobj' },
      { t: 'match', p: [['das Gedicht', 'het gedicht'], ['einst', 'eens, ooit'], ['das Antlitz', 'het gelaat'], ['die Wehmut', 'de weemoed'], ['gleichwohl', 'niettemin']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Der Brief an den Sohn', type: 'Fragment uit een novelle',
      p: [
        ['Eines Abends, als der Regen an die Scheiben schlug, setzte sich der alte Lehrer an seinen Tisch und begann zu schreiben. «Mein lieber Sohn», schrieb er, «ich bin mir dessen bewusst, dass du diesen Brief vielleicht nie lesen wirst. Gleichwohl bedarf es keiner Entschuldigung, dass ich ihn schreibe.»', 'Op een avond, toen de regen tegen de ruiten sloeg, ging de oude leraar aan zijn tafel zitten en begon te schrijven. «Mijn lieve zoon», schreef hij, «ik ben me ervan bewust dat je deze brief misschien nooit zult lezen. Niettemin behoeft het geen verontschuldiging dat ik hem schrijf.»'],
        ['«Wüsste ich, wo du bist, ich käme noch heute. Stünde ich vor deiner Tür, so fände ich wohl keine Worte. Doch hier, allein mit dem Papier, will ich es versuchen. Ich gedenke oft jenes Sommers, da wir zusammen am Fluss saßen und du mich fragtest, ob Fische träumen.»', '«Wist ik waar je bent, ik kwam vandaag nog. Stond ik voor je deur, dan vond ik wellicht geen woorden. Maar hier, alleen met het papier, wil ik het proberen. Ik denk vaak terug aan die zomer toen we samen aan de rivier zaten en jij me vroeg of vissen dromen.»'],
        ['«Ich war dir kein guter Vater, das sei gesagt. Möge dir gelingen, was mir nicht gelang. Und solltest du eines Tages heimkehren, so wisse: Die Tür ist nicht verschlossen.» Er legte die Feder nieder. Draußen hatte der Regen aufgehört, als hätte auch er gelauscht.', '«Ik was geen goede vader voor je, dat zij gezegd. Moge jou lukken wat mij niet lukte. En mocht je op een dag naar huis terugkeren, weet dan: de deur is niet op slot.» Hij legde de pen neer. Buiten was de regen opgehouden, alsof ook die geluisterd had.']
      ],
      gl: [['die Scheibe', 'de ruit'], ['jener, jene, jenes', 'die, dat (daar, toen)'], ['da (literair)', 'toen'], ['heimkehren', 'naar huis terugkeren'], ['die Feder', 'de (ganzen)veer, de pen'], ['lauschen', 'luisteren (aandachtig)']],
      q: [
        { t: 'mc', q: 'Wessen ist sich der Lehrer bewusst?', o: ['Dass der Sohn den Brief vielleicht nie liest', 'Dass er krank ist', 'Dass der Sohn im Nachbarhaus wohnt'] },
        { t: 'mc', q: 'Was bedeutet «Wüsste ich, wo du bist, ich käme noch heute»?', o: ['Wenn ich wüsste, wo du bist, würde ich heute noch kommen', 'Ich weiß, wo du bist, und komme heute', 'Ich wusste es und kam'] },
        { t: 'mc', q: 'Was wünscht der Vater dem Sohn?', o: ['Dass ihm gelingt, was dem Vater nicht gelang', 'Dass er Lehrer wird', 'Dass er nie zurückkommt'] }
      ]
    },
    say: [['Ach, wenn er nur käme!', 'Ach, kwam hij maar!'], ['Möge der Bessere gewinnen.', 'Moge de beste winnen.'], ['Meines Erachtens ist das falsch.', 'Naar mijn mening is dat fout.']],
    task: { nl: 'Schrijf 4 à 5 zinnen in plechtige stijl: een wens of korte toespraak voor een bruiloft, afscheid of herdenking. Gebruik één oude Konjunktiv II (käme, wüsste, stünde, gäbe), één wens met möge en twee tweede naamvallen (gedenken, eines Tages, meines Erachtens, schweren Herzens).', model: 'Liebe Freunde, schweren Herzens nehmen wir heute Abschied von unserem Kollegen. Wir gedenken seiner Güte und seines Humors. Gäbe es mehr Menschen wie ihn, die Welt wäre ein besserer Ort. Möge er in unseren Herzen weiterleben. Eines Tages werden wir lächeln, wenn wir an ihn denken.' },
    scenario: { nl: 'Je doet mee aan een leeskring in Weimar en begrijpt een ouderwetse versregel niet.', role: 'Frau Albrecht, een gepensioneerde lerares Duits die van oude woorden houdt', goal: 'Lees een regel voor, vraag naar een vorm die je niet kent (stünde, einst, ehe) en zeg wat je van de stijl vindt.' }
  });

  /* ───────────────────────── C2 · 3 ───────────────────────── */
  U({
    id: 'de-c2-03', level: 'C2', icon: '🎤', title: 'Rhetorik', nl: 'Retorica: nadruk leggen en overtuigen',
    goals: ['Een toespraak analyseren en zelf opbouwen', 'Nadruk leggen met zinsbouw (Es war …, der / Den kenne ich)', 'Stijlfiguren herkennen: understatement, drieslag, retorische vraag', 'Overtuigend en genuanceerd formuleren'],
    vocab: [
      ['die Rede', 'de toespraak'], ['der Redner / die Rednerin', 'de spreker'], ['die Ansprache', 'de toespraak (kort, officieel)'], ['der Vortrag', 'de lezing'], ['das Publikum', 'het publiek'],
      ['überzeugen', 'overtuigen'], ['überreden', 'overhalen'], ['betonen', 'benadrukken'], ['andeuten', 'laten doorschemeren'], ['zuspitzen', 'aanscherpen'],
      ['übertreiben', 'overdrijven'], ['untertreiben', 'understaten, afzwakken'], ['die Pointe', 'de pointe'], ['das Stilmittel', 'het stijlmiddel'], ['die Wiederholung', 'de herhaling'],
      ['die Steigerung', 'de climax, de trap'], ['der Gegensatz', 'de tegenstelling'], ['die Anspielung', 'de toespeling'], ['eindringlich', 'indringend'], ['schlagfertig', 'gevat'],
      ['wohlgemerkt', 'let wel'], ['schlechthin', 'bij uitstek'], ['geradezu', 'ronduit'], ['keineswegs', 'geenszins'], ['mitnichten', 'geenszins (deftig)'], ['in der Tat', 'inderdaad']
    ],
    grammar: [
      { t: 'Nadruk door zinsbouw', es: 'Hervorhebung: Spaltsatz, Vorfeld, Herausstellung',
        html: `<p>In het Duits leg je nadruk niet alleen met je stem, maar met de <b>plaats in de zin</b>.</p>
<p><b>1. De eerste plaats.</b> Zet wat je wilt benadrukken vooraan, ook als het een voorwerp is: <i><b>Den</b> kenne ich!</i> · <i><b>Geld</b> habe ich keins.</i> · <i><b>Gelogen</b> hat er nicht.</i> De naamval maakt duidelijk wie wat doet.</p>
<p><b>2. De gekloofde zin</b> (Spaltsatz): <i><b>Es war</b> die Kanzlerin, <b>die</b> das entschied.</i> · <i><b>Es sind</b> die kleinen Dinge, <b>die</b> zählen.</i> Formeler dan in het Nederlands of Engels, dus spaarzaam gebruiken.</p>
<p><b>3. Was …, ist …</b>: <i><b>Was</b> wir brauchen, <b>ist</b> Mut.</i> · <i><b>Was</b> mich ärgert, <b>ist</b> sein Ton.</i></p>
<p><b>4. Vooropplaatsing met herneming:</b> <i><b>Diese Regierung, die</b> hat nichts verstanden.</i> · <i><b>Der Peter, der</b> kommt nie pünktlich.</i> Typisch voor gesproken taal.</p>
<p><b>5. Losse aanvulling achteraf:</b> <i>Ich habe ihn gesehen, <b>und zwar gestern</b>.</i></p>
<p><b>Uitzondering:</b> in de gekloofde zin richt het werkwoord zich naar het woord <b>ná</b> <i>es</i>: <i>Es <b>sind</b> die Kinder, die leiden</i> (niet <i>es ist</i>). <b>Waarom?</b> <i>Es</i> is ook hier alleen een plaatshouder; het eigenlijke onderwerp is <i>die Kinder</i>. Het Nederlands doet hetzelfde (<i>het zijn de kinderen</i>), het Engels niet (<i>it is the children</i>).</p>`,
        table: [['neutraal', 'met nadruk'], ['Ich kenne den Mann.', 'Den Mann kenne ich.'], ['Die Wähler entscheiden.', 'Es sind die Wähler, die entscheiden.'], ['Wir brauchen Zeit.', 'Was wir brauchen, ist Zeit.'], ['Er hat nicht gelogen.', 'Gelogen hat er nicht.'], ['Ich komme morgen.', 'Ich komme, und zwar morgen.']],
        sum: 'Den kenne ich! Es sind die kleinen Dinge, die zählen. Was wir brauchen, ist Mut.',
        ex: [['Nicht die Technik ist das Problem, sondern unser Umgang mit ihr.', 'Niet de techniek is het probleem, maar onze omgang ermee.'], ['Was mich wirklich überrascht hat, war die Reaktion des Publikums.', 'Wat me echt heeft verrast, was de reactie van het publiek.'], ['Versprochen hat er viel, gehalten wenig.', 'Beloofd heeft hij veel, waargemaakt weinig.']] },
      { t: 'Niet onverstandig: stijlfiguren', es: 'Rhetorische Mittel',
        html: `<p>Goede sprekers gebruiken een vaste gereedschapskist. De belangrijkste gereedschappen in het Duits:</p>
<p><b>Litotes</b> (dubbele ontkenning als versterking): <i><b>nicht unklug</b></i> = behoorlijk slim · <i><b>nicht ohne</b> Risiko</i> · <i><b>kein schlechter</b> Wein</i> = een heel goede. Duitsers zijn zuinig met lof; <i>nicht schlecht</i> is een compliment.</p>
<p><b>Drieslag</b> (Trikolon): <i>schnell, sicher, sauber</i> · <i>Ich kam, ich sah, ich siegte.</i></p>
<p><b>Anafoor</b> (herhaling aan het begin): <i><b>Wir werden</b> kämpfen. <b>Wir werden</b> arbeiten. <b>Wir werden</b> gewinnen.</i></p>
<p><b>Retorische vraag</b>, vaak met <i>etwa</i> of <i>denn</i>: <i>Wollen wir das <b>etwa</b> hinnehmen?</i> (verwacht antwoord: nee)</p>
<p><b>Antithese</b>: <i>nicht …, sondern …</i> · <i>zwar …, aber …</i></p>
<p><b>Paarformules</b> met stafrijm: <i>mit Kind und Kegel, bei Nacht und Nebel, fix und fertig, klipp und klar</i>.</p>
<p><b>Uitzondering:</b> in de litotes heffen twee ontkenningen elkaar <b>niet gewoon op</b>: <i>nicht unfreundlich</i> is minder dan <i>freundlich</i>, maar <i>nicht übel</i> is méér dan «niet slecht». <b>Waarom?</b> De betekenis hangt af van de toon en de verwachting: bij een eigenschap die je verwacht (vriendelijk) klinkt de omweg terughoudend; bij een oordeel is het understatement juist een versterking. Luister naar de klemtoon.</p>`,
        table: [['stijlmiddel', 'voorbeeld', 'effect'], ['Litotes', 'nicht unwichtig', 'voorzichtige versterking'], ['Trikolon', 'frei, gleich, geheim', 'ritme, volledigheid'], ['Anapher', 'Ich habe … Ich habe …', 'nadruk, pathos'], ['rhetorische Frage', 'Wer will das schon?', 'instemming afdwingen'], ['Paarformel', 'klipp und klar', 'kracht, onthoudbaar']],
        ex: [['Das war kein schlechter Vortrag.', 'Dat was een heel behoorlijke lezing.'], ['Ich sage es klipp und klar: So geht es nicht weiter.', 'Ik zeg het klip en klaar: zo kan het niet verder.'], ['Soll das etwa die Lösung sein?', 'Moet dat soms de oplossing zijn?']] }
    ],
    dialogue: {
      t: 'Generalprobe für eine Rede', place: 'Bonn 🇩🇪',
      lines: [
        ['Anna', 'Christoph, hörst du dir kurz den Anfang meiner Rede an? «Sehr geehrte Damen und Herren, wir brauchen in unserer Stadt mehr Radwege.»', 'Christoph, wil je even naar het begin van mijn toespraak luisteren? «Geachte dames en heren, we hebben in onze stad meer fietspaden nodig.»'],
        ['Christoph', 'Inhaltlich richtig, aber da schläft der Saal ein. Was ist dein wichtigstes Wort?', 'Inhoudelijk juist, maar daar valt de zaal van in slaap. Wat is je belangrijkste woord?'],
        ['Anna', 'Radwege. Oder nein: Sicherheit.', 'Fietspaden. Of nee: veiligheid.'],
        ['Christoph', 'Dann stell es heraus. «Was diese Stadt braucht, ist nicht mehr Asphalt. Was diese Stadt braucht, ist Sicherheit.»', 'Zet dat dan voorop. «Wat deze stad nodig heeft, is niet meer asfalt. Wat deze stad nodig heeft, is veiligheid.»'],
        ['Anna', 'Oh, das ist gut. Und dann die Zahlen?', 'O, dat is goed. En dan de cijfers?'],
        ['Christoph', 'Erst eine Frage: «Wollen wir etwa warten, bis wieder ein Kind verletzt wird?» Dann die Zahlen. Kurz, klar, konkret.', 'Eerst een vraag: «Willen we soms wachten tot er weer een kind gewond raakt?» Dan de cijfers. Kort, helder, concreet.'],
        ['Anna', 'Ist das nicht zu dramatisch? In den Niederlanden würde man das übertrieben finden.', 'Is dat niet te dramatisch? In Nederland zou men dat overdreven vinden.'],
        ['Christoph', 'Für eine Rede im Stadtrat ist es nicht zu viel. Und am Schluss untertreibst du: «Das wäre, wie ich finde, kein schlechter Anfang.»', 'Voor een toespraak in de gemeenteraad is het niet te veel. En aan het slot zwak je af: «Dat zou, vind ik, geen slecht begin zijn.»'],
        ['Anna', 'Nicht unklug. Danke!', 'Niet onverstandig. Dank je!']
      ],
      q: [
        { t: 'mc', q: 'Was kritisiert Christoph am ersten Satz?', o: ['Er ist richtig, aber langweilig', 'Er ist grammatisch falsch', 'Er ist zu lang'] },
        { t: 'mc', q: 'Welches Mittel schlägt er für den Anfang vor?', o: ['«Was diese Stadt braucht, ist …» mit Wiederholung', 'Einen Witz', 'Ein Zitat von Goethe'] },
        { t: 'mc', q: 'Was bedeutet Annas «Nicht unklug»?', o: ['Ziemlich klug', 'Dumm', 'Unverständlich'] }
      ]
    },
    culture: { t: 'Toespraken die Duitsland veranderden', html: `<p>🎤 Na 1945 wantrouwde Duitsland grote redenaars, om begrijpelijke redenen. De stijl in de Bondsdag is daarom zakelijker dan in Londen of Parijs. Toch zijn er toespraken die iedereen kent.</p>
<p><b>Ernst Reuter</b>, burgemeester van West-Berlijn tijdens de blokkade (1948): <i>«Ihr Völker der Welt, schaut auf diese Stadt!»</i> <b>Richard von Weizsäcker</b> noemde 8 mei 1945 in 1985 als eerste bondspresident een <i>«Tag der Befreiung»</i>. En <b>Willy Brandt</b> zei bij de val van de Muur: <i>«Jetzt wächst zusammen, was zusammengehört.»</i></p>
<p>Zonder woorden, maar het beroemdst: Brandts <b>Kniefall von Warschau</b> (1970), toen hij knielde voor het monument van het getto.</p>
<p>In het dagelijks leven geldt: op een verjaardag of bruiloft wordt een <b>Rede</b> verwacht, liefst met een rijmpje. En gevatheid heet <i>Schlagfertigkeit</i>: het woord waar elke Duitser jaloers op is.</p>` },
    ex: [
      { t: 'cloze', s: '___ kenne ich! (die man, met nadruk)', a: ['Den'], o: ['Den', 'Der', 'Dem'], nl: 'Díé ken ik!', x: 'Het voorwerp staat vooraan en houdt zijn vierde naamval: den.', tag: 'de-hervor' },
      { t: 'cloze', s: 'Es ___ die kleinen Dinge, die zählen.', a: ['sind'], o: ['sind', 'ist', 'war'], nl: 'Het zijn de kleine dingen die tellen.', x: 'Uitzondering: het werkwoord richt zich naar het woord na es (die Dinge). Reden: es is alleen plaatshouder.', tag: 'de-hervor' },
      { t: 'cloze', s: '___ wir brauchen, ist Mut.', a: ['Was'], o: ['Was', 'Das', 'Dass'], nl: 'Wat we nodig hebben, is moed.', tag: 'de-hervor' },
      { t: 'cloze', s: 'Ich habe ihn gesehen, und ___ gestern.', a: ['zwar'], o: ['zwar', 'aber', 'doch'], nl: 'Ik heb hem gezien, en wel gisteren.', tag: 'de-hervor' },
      { t: 'cloze', s: 'Das war kein ___ Vortrag. (= een heel goede)', a: ['schlechter'], o: ['schlechter', 'guter', 'schlecht'], nl: 'Dat was een heel behoorlijke lezing.', tag: 'de-rhet' },
      { t: 'cloze', s: 'Ich sage es klipp und ___.', a: ['klar'], o: ['klar', 'kurz', 'klug'], nl: 'Ik zeg het klip en klaar.', tag: 'de-rhet' },
      { t: 'cloze', s: 'Wollen wir das ___ hinnehmen? (retorisch: nee toch?)', a: ['etwa'], o: ['etwa', 'etwas', 'eben'], nl: 'Willen we dat soms accepteren?', tag: 'de-rhet' },
      { t: 'mc', q: 'Wat betekent «Das ist nicht ohne»?', o: ['Dat is niet mis, behoorlijk pittig', 'Dat is zonder waarde', 'Dat is niet aanwezig'], tag: 'de-rhet' },
      { t: 'mc', q: 'Een Duitse collega zegt over je presentatie: «Nicht übel.» Wat bedoelt hij?', o: ['Goed gedaan', 'Matig', 'Slecht'], x: 'Uitzondering: bij een oordeel versterkt het understatement juist. Reden: de betekenis hangt af van toon en verwachting, niet van rekenkunde met ontkenningen.', tag: 'de-rhet' },
      { t: 'mc', q: 'Welk stijlmiddel is «Wir werden kämpfen. Wir werden arbeiten. Wir werden gewinnen.»?', o: ['Anafoor met drieslag', 'Litotes', 'Retorische vraag'], tag: 'de-rhet' },
      { t: 'tr', nl: 'Geld heb ik niet. (nadruk op geld)', a: ['Geld habe ich keins.', 'Geld habe ich nicht.', 'Geld habe ich keines.'], tag: 'de-hervor' },
      { t: 'tr', nl: 'Wat me ergert, is zijn toon.', a: ['Was mich ärgert, ist sein Ton.'], tag: 'de-hervor' },
      { t: 'tr', nl: 'Dat is niet onbelangrijk.', a: ['Das ist nicht unwichtig.'], tag: 'de-rhet' },
      { t: 'order', s: 'Versprochen hat er viel, gehalten wenig.', nl: 'Beloofd heeft hij veel, waargemaakt weinig.', tag: 'de-hervor' },
      { t: 'match', p: [['überreden', 'overhalen'], ['übertreiben', 'overdrijven'], ['schlagfertig', 'gevat'], ['die Anspielung', 'de toespeling'], ['keineswegs', 'geenszins']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Rede zur Eröffnung der Stadtbibliothek', type: 'Toespraak',
      p: [
        ['Liebe Bürgerinnen und Bürger, man hat mir gesagt, eine Bibliothek sei im Zeitalter des Internets nicht mehr nötig. Man hat mir gesagt, sie sei zu teuer. Man hat mir gesagt, die jungen Leute läsen ohnehin nicht mehr. Ich habe mir das angehört. Überzeugt hat es mich nicht.', 'Beste burgers, men heeft mij gezegd dat een bibliotheek in het internettijdperk niet meer nodig is. Men heeft mij gezegd dat ze te duur is. Men heeft mij gezegd dat de jonge mensen toch al niet meer lezen. Ik heb dat aangehoord. Overtuigd heeft het me niet.'],
        ['Denn was eine Stadt zusammenhält, sind nicht Straßen und Kabel. Es sind die Orte, an denen man sich begegnet, ohne etwas kaufen zu müssen. Ein Ort, der allen gehört: dem Kind und der Professorin, dem Rentner und dem Flüchtling. Wollen wir etwa behaupten, das sei Luxus?', 'Want wat een stad bij elkaar houdt, zijn geen straten en kabels. Het zijn de plekken waar je elkaar ontmoet zonder iets te hoeven kopen. Een plek die van iedereen is: van het kind en de hoogleraar, van de gepensioneerde en de vluchteling. Willen we soms beweren dat dat luxe is?'],
        ['Zwölf Millionen hat dieses Haus gekostet. Das ist, zugegeben, nicht wenig. Aber billig war noch nie, was bleiben soll. Geplant haben wir zehn Jahre, gebaut drei, gestritten die ganze Zeit. Heute stehen wir hier, und ich finde, wohlgemerkt als jemand, der selten lobt: Das ist kein schlechter Tag für unsere Stadt.', 'Twaalf miljoen heeft dit huis gekost. Dat is, toegegeven, niet weinig. Maar goedkoop was nog nooit wat moet blijven. Gepland hebben we tien jaar, gebouwd drie, geruzied de hele tijd. Vandaag staan we hier, en ik vind, let wel als iemand die zelden prijst: dit is geen slechte dag voor onze stad.']
      ],
      gl: [['das Zeitalter', 'het tijdperk'], ['zusammenhalten', 'bij elkaar houden'], ['sich begegnen', 'elkaar ontmoeten'], ['der Flüchtling', 'de vluchteling'], ['zugegeben', 'toegegeven']],
      q: [
        { t: 'mc', q: 'Welches Stilmittel prägt den ersten Absatz?', o: ['Anapher: «Man hat mir gesagt …»', 'Litotes', 'Reim'] },
        { t: 'mc', q: 'Was hält laut der Rednerin eine Stadt zusammen?', o: ['Orte, an denen man sich begegnet', 'Straßen und Kabel', 'Das Internet'] },
        { t: 'mc', q: 'Was bedeutet «Das ist kein schlechter Tag für unsere Stadt»?', o: ['Es ist ein sehr guter Tag', 'Es ist ein mittelmäßiger Tag', 'Es ist ein schlechter Tag'] }
      ]
    },
    say: [['Was wir brauchen, ist Mut.', 'Wat we nodig hebben, is moed.'], ['Es sind die kleinen Dinge, die zählen.', 'Het zijn de kleine dingen die tellen.'], ['Das war kein schlechter Vortrag.', 'Dat was een heel behoorlijke lezing.']],
    task: { nl: 'Schrijf het begin van een toespraak (5 zinnen) over iets wat jou aan het hart gaat. Gebruik één «Was …, ist …», één retorische vraag met etwa, één drieslag en één understatement (nicht un…, kein schlechter …).', model: 'Liebe Nachbarn, was unsere Straße braucht, ist kein neuer Parkplatz. Was unsere Straße braucht, ist ein Platz zum Spielen, zum Reden, zum Leben. Wollen wir etwa, dass unsere Kinder nur noch drinnen sitzen? Die Stadt gibt uns dafür 5.000 Euro. Das ist, wie ich finde, kein schlechter Anfang.' },
    scenario: { nl: 'Je moet in Duitsland een korte toespraak houden en oefent met een bevriende speechschrijver.', role: 'Christoph, een voormalig speechschrijver uit Bonn die elke zin scherper wil', goal: 'Zeg je openingszin, vraag hoe die sterker kan, en probeer zelf een versie met «Was …, ist …» en een retorische vraag.' }
  });

  /* ───────────────────────── C2 · 4 ───────────────────────── */
  U({
    id: 'de-c2-04', level: 'C2', icon: '🦉', title: 'Denken und Abstraktion', nl: 'Filosofie: das Gute, der Einzelne, die Freiheit',
    goals: ['Abstracte en filosofische teksten lezen', 'Bijvoeglijke naamwoorden en deelwoorden als naamwoord gebruiken en verbuigen', 'Abstracte naamwoorden vormen en hun geslacht voorspellen', 'Een gedachtegang precies weergeven'],
    vocab: [
      ['das Dasein', 'het bestaan'], ['das Bewusstsein', 'het bewustzijn'], ['die Vernunft', 'de rede'], ['der Verstand', 'het verstand'], ['die Erkenntnis', 'de kennis, het inzicht'],
      ['die Wahrnehmung', 'de waarneming'], ['die Wirklichkeit', 'de werkelijkheid'], ['der Zweifel', 'de twijfel'], ['die Aufklärung', 'de Verlichting'], ['die Mündigkeit', 'de mondigheid'],
      ['die Willensfreiheit', 'de vrije wil'], ['die Pflicht', 'de plicht'], ['das Gewissen', 'het geweten'], ['die Würde', 'de waardigheid'], ['die Gerechtigkeit', 'de rechtvaardigheid'],
      ['das Wesen', 'het wezen, de aard'], ['der Begriff', 'het begrip'], ['die Anschauung', 'de aanschouwing, de opvatting'], ['die Weltanschauung', 'de wereldbeschouwing'], ['der Zeitgeist', 'de tijdgeest'],
      ['an sich', 'op zichzelf'], ['schlechthin', 'bij uitstek, als zodanig'], ['das Einzelne · der Einzelne', 'het afzonderlijke · het individu'], ['das Ganze', 'het geheel'], ['der Angehörige', 'het familielid, de naaste'], ['der Vorgesetzte', 'de leidinggevende']
    ],
    grammar: [
      { t: 'Das Gute, der Fremde, etwas Neues', es: 'Substantivierte Adjektive und Partizipien',
        html: `<p>Elk bijvoeglijk naamwoord en elk deelwoord kan een zelfstandig naamwoord worden. Het krijgt een <b>hoofdletter</b>, maar blijft <b>verbogen als een bijvoeglijk naamwoord</b>: de uitgang hangt af van het lidwoord ervoor.</p>
<p><b>Personen</b> (mannelijk/vrouwelijk/meervoud): <i>der Deutsch<b>e</b>, ein Deutsch<b>er</b>, die Deutsch<b>e</b>, die Deutsch<b>en</b>, Deutsch<b>e</b></i> (zonder lidwoord). Zo ook: <i>der Angestellte, der Reisende, der Vorgesetzte, der Verwandte, der Bekannte, der Erwachsene, der Jugendliche, der Beamte, der Vorsitzende</i>.</p>
<p><b>Abstracties</b> (altijd onzijdig): <i>das Gut<b>e</b>, das Schön<b>e</b>, das Wesentlich<b>e</b>, das Ganz<b>e</b></i>. Na <i>etwas, nichts, viel, wenig</i>: uitgang <b>-es</b>: <i>etwas Neu<b>es</b>, nichts Gut<b>es</b></i>. Na <i>alles</i>: <b>-e</b>: <i>alles Gut<b>e</b></i>.</p>
<p>In de derde naamval: <i>mit einem Bekannt<b>en</b>, von etwas Neu<b>em</b>, im Wesentlich<b>en</b></i>.</p>
<p><b>Uitzondering:</b> <i>ein Beamt<b>er</b></i> maar <i>der Beamt<b>e</b></i>, en de vrouwelijke vorm is <i>die Beamt<b>in</b></i> (een gewoon naamwoord), terwijl het bij alle andere <i>die Angestellt<b>e</b>, die Bekannt<b>e</b></i> is. <b>Waarom?</b> <i>Beamter</i> is een oud deelwoord (<i>der Beamtete</i>, «de met een ambt beklede») dat mannelijk als bijvoeglijk naamwoord verbogen bleef, maar voor de vrouwelijke vorm al vroeg het gewone achtervoegsel <i>-in</i> kreeg.</p>`,
        table: [['', 'met der/die/das', 'met ein/eine', 'zonder lidwoord'], ['mannelijk', 'der Deutsche', 'ein Deutscher', 'Deutscher'], ['vrouwelijk', 'die Deutsche', 'eine Deutsche', 'Deutsche'], ['meervoud', 'die Deutschen', 'keine Deutschen', 'Deutsche'], ['onzijdig abstract', 'das Gute', 'etwas Gutes', 'Gutes'], ['3e naamval', 'dem Deutschen', 'einem Deutschen', 'mit Gutem']],
        sum: 'der Deutsche, ein Deutscher · das Gute, etwas Gutes, alles Gute',
        ex: [['Ein Bekannter von mir ist Beamter.', 'Een kennis van mij is ambtenaar.'], ['Das Wesentliche ist für die Augen unsichtbar.', 'Het wezenlijke is voor de ogen onzichtbaar.'], ['Ich wünsche dir alles Gute und viel Schönes.', 'Ik wens je al het goede en veel moois.']] },
      { t: 'Abstracte naamwoorden bouwen', es: 'Abstrakta: -heit, -keit, -ung, -tum, -nis, -schaft',
        html: `<p>Het Duits vormt abstracte begrippen met vaste achtervoegsels, en die bepalen het <b>geslacht</b>:</p>
<p><b>die:</b> <b>-heit</b> (<i>Freiheit, Wahrheit</i>) · <b>-keit</b> na <i>-ig, -lich, -bar, -sam</i> (<i>Möglichkeit, Dankbarkeit</i>) · <b>-ung</b> (<i>Hoffnung</i>) · <b>-schaft</b> (<i>Gesellschaft</i>) · <b>-ion, -tät, -ik</b> (<i>Realität</i>)</p>
<p><b>das:</b> <b>-tum</b> (<i>Eigentum, Christentum</i>) · <b>-nis</b> meestal (<i>Ergebnis, Verständnis</i>) · alle <b>hele werkwoorden als naamwoord</b> (<i>das Denken, das Sein, das Werden</i>)</p>
<p><b>der:</b> korte naamwoorden van een werkwoordstam (<i>der Gedanke, der Wille, der Zweifel, der Begriff, der Sinn</i>) · <b>-ismus</b> (<i>der Idealismus</i>)</p>
<p>Duitse filosofen plakken er graag meerdere aan elkaar: <i>die Unzulänglichkeit, die Daseinsberechtigung, das In-der-Welt-Sein</i> (Heidegger).</p>
<p><b>Uitzondering:</b> <i>-tum</i> is onzijdig, maar het is <b>der</b> <i>Reichtum</i> en <b>der</b> <i>Irrtum</i>. En <i>-nis</i> is meestal onzijdig, maar het is <b>die</b> <i>Erkenntnis, die Erlaubnis, die Kenntnis, die Finsternis</i>. <b>Waarom?</b> <i>Reichtum</i> en <i>Irrtum</i> hebben het geslacht van hun oude vorm bewaard; bij <i>-nis</i> bestonden van oudsher een onzijdige en een vrouwelijke reeks naast elkaar, waarbij de vrouwelijke vaak een toestand of handeling aanduidt.</p>`,
        table: [['achtervoegsel', 'geslacht', 'voorbeelden', 'uitzonderingen'], ['-heit, -keit', 'die', 'Freiheit, Einsamkeit', 'geen'], ['-ung, -schaft', 'die', 'Meinung, Wissenschaft', 'geen'], ['-tum', 'das', 'Eigentum, Wachstum', 'der Reichtum, der Irrtum'], ['-nis', 'das', 'Geheimnis, Gedächtnis', 'die Erkenntnis, die Erlaubnis'], ['werkwoord als naamwoord', 'das', 'das Denken, das Leben', 'geen']],
        ex: [['Die Freiheit des Einzelnen endet dort, wo die Freiheit des Anderen beginnt.', 'De vrijheid van het individu eindigt waar de vrijheid van de ander begint.'], ['Irren ist menschlich, aber im Irrtum zu verharren ist töricht.', 'Vergissen is menselijk, maar in de vergissing volharden is dwaas.'], ['Die Erkenntnis kam spät.', 'Het inzicht kwam laat.']] }
    ],
    dialogue: {
      t: 'Nach der Vorlesung', place: 'Tübingen 🇩🇪',
      lines: [
        ['Anna', 'Hast du verstanden, was Professor Haas mit «dem Guten an sich» gemeint hat?', 'Heb jij begrepen wat professor Haas bedoelde met «het goede op zichzelf»?'],
        ['Jakob', 'Ich glaube schon. Nicht etwas Gutes, wie ein gutes Essen, sondern das Gute schlechthin. Die Idee.', 'Ik denk van wel. Niet iets goeds, zoals een goede maaltijd, maar het goede als zodanig. Het idee.'],
        ['Anna', 'Und warum sagt er «der Einzelne» und nicht einfach «der Mensch»?', 'En waarom zegt hij «der Einzelne» en niet gewoon «de mens»?'],
        ['Jakob', 'Weil es ihm um den Gegensatz geht: der Einzelne und das Ganze, also die Gesellschaft.', 'Omdat het hem om de tegenstelling gaat: het individu en het geheel, dus de samenleving.'],
        ['Anna', 'Auf Niederländisch brauche ich dafür drei Wörter. Im Deutschen macht man einfach ein Adjektiv groß.', 'In het Nederlands heb ik daar drie woorden voor nodig. In het Duits maak je gewoon van een bijvoeglijk naamwoord een hoofdletterwoord.'],
        ['Jakob', 'Das ist das Schöne daran. Und das Gefährliche. Man kann stundenlang über «das Sein» reden, ohne etwas zu sagen.', 'Dat is het mooie eraan. En het gevaarlijke. Je kunt urenlang over «het zijn» praten zonder iets te zeggen.'],
        ['Anna', 'Kant hat immerhin etwas gesagt. «Habe Mut, dich deines eigenen Verstandes zu bedienen.»', 'Kant heeft tenminste iets gezegd. «Heb de moed je van je eigen verstand te bedienen.»'],
        ['Jakob', 'Mit Genitiv, wohlgemerkt. Selbst die Aufklärung kommt nicht ohne schwierige Grammatik aus.', 'Met tweede naamval, let wel. Zelfs de Verlichting komt niet zonder moeilijke grammatica uit.']
      ],
      q: [
        { t: 'mc', q: 'Was ist «das Gute an sich»?', o: ['Die Idee des Guten, nicht ein gutes Ding', 'Ein gutes Essen', 'Ein guter Mensch'] },
        { t: 'mc', q: 'Welchen Gegensatz meint der Professor?', o: ['Der Einzelne und das Ganze', 'Der Mensch und das Tier', 'Das Gute und das Schöne'] },
        { t: 'mc', q: 'Was findet Jakob gefährlich?', o: ['Dass man lange reden kann, ohne etwas zu sagen', 'Dass Kant zu schwierig ist', 'Dass Niederländisch drei Wörter braucht'] }
      ]
    },
    culture: { t: 'Dichter und Denker', html: `<p>🦉 <b>Immanuel Kant</b> (1724–1804) verliet zijn geboortestad Königsberg nooit en wandelde zo stipt dat de buren er de klok op gelijk zetten. Zijn antwoord op de vraag «Was ist Aufklärung?» kent elke scholier: <i>«der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit»</i>.</p>
<p>Na hem kwamen <b>Hegel</b>, <b>Schopenhauer</b>, <b>Marx</b>, <b>Nietzsche</b>, <b>Heidegger</b> en <b>Hannah Arendt</b>. Het Duits geldt als filosofentaal omdat je er eindeloos nieuwe begrippen mee kunt bouwen. Veel ervan zijn onvertaald de wereld overgegaan: <i>Weltanschauung, Zeitgeist, Angst, Weltschmerz, Schadenfreude, Fingerspitzengefühl</i>.</p>
<p>Het eerste artikel van het <b>Grundgesetz</b> is zelf een stukje filosofie: <i>«Die Würde des Menschen ist unantastbar.»</i> Het mag nooit gewijzigd worden; de zogeheten <i>Ewigkeitsklausel</i> verbiedt dat.</p>` },
    ex: [
      { t: 'cloze', s: 'Er ist ___. (Duitser, zonder lidwoord)', a: ['Deutscher'], o: ['Deutscher', 'Deutsche', 'Deutschen'], nl: 'Hij is Duitser.', tag: 'de-substadj' },
      { t: 'cloze', s: 'Ich habe mit einem ___ gesprochen. (kennis, man)', a: ['Bekannten'], o: ['Bekannten', 'Bekannter', 'Bekannte'], nl: 'Ik heb met een kennis gesproken.', tag: 'de-substadj' },
      { t: 'cloze', s: 'Gibt es etwas ___? (nieuw)', a: ['Neues'], o: ['Neues', 'Neue', 'neu'], nl: 'Is er iets nieuws?', tag: 'de-substadj' },
      { t: 'cloze', s: 'Ich wünsche dir alles ___!', a: ['Gute'], o: ['Gute', 'Gutes', 'Guten'], nl: 'Ik wens je al het goede!', x: 'Na alles is de uitgang -e; na etwas, nichts, viel is het -es.', tag: 'de-substadj' },
      { t: 'cloze', s: '___ Freiheit ist ein hohes Gut.', a: ['Die'], o: ['Die', 'Das', 'Der'], nl: 'De vrijheid is een groot goed.', tag: 'de-abstrakt' },
      { t: 'cloze', s: '___ Reichtum macht nicht glücklich.', a: ['Der'], o: ['Der', 'Das', 'Die'], nl: 'Rijkdom maakt niet gelukkig.', x: 'Uitzondering: -tum is onzijdig, maar der Reichtum en der Irrtum zijn mannelijk. Reden: ze hebben het geslacht van hun oude vorm bewaard.', tag: 'de-abstrakt' },
      { t: 'cloze', s: '___ Erkenntnis kam spät.', a: ['Die'], o: ['Die', 'Das', 'Der'], nl: 'Het inzicht kwam laat.', x: 'Uitzondering: -nis is meestal onzijdig, maar die Erkenntnis, die Erlaubnis. Reden: er bestonden van oudsher twee reeksen naast elkaar.', tag: 'de-abstrakt' },
      { t: 'mc', q: 'Wat is de vrouwelijke vorm van «der Beamte»?', o: ['die Beamtin', 'die Beamte', 'die Beamter'], x: 'Uitzondering: bij alle andere is het die Angestellte, die Bekannte. Reden: Beamter kreeg voor het vrouwelijk al vroeg het gewone achtervoegsel -in.', tag: 'de-substadj' },
      { t: 'mc', q: 'Welk geslacht heeft een heel werkwoord dat naamwoord wordt (Denken, Leben)?', o: ['altijd das', 'altijd der', 'altijd die'], tag: 'de-abstrakt' },
      { t: 'mc', q: 'Wat betekent «die Würde»?', o: ['de waardigheid', 'de waarde', 'de woede'], tag: 'de-vok' },
      { t: 'tr', nl: 'het wezenlijke', a: ['das Wesentliche'], tag: 'de-substadj' },
      { t: 'tr', nl: 'een volwassene (man) en twee jongeren', a: ['ein Erwachsener und zwei Jugendliche'], tag: 'de-substadj' },
      { t: 'tr', nl: 'De waardigheid van de mens is onaantastbaar.', a: ['Die Würde des Menschen ist unantastbar.'], tag: 'de-abstrakt' },
      { t: 'order', s: 'Das Wesentliche ist für die Augen unsichtbar.', nl: 'Het wezenlijke is voor de ogen onzichtbaar.', tag: 'de-substadj' },
      { t: 'match', p: [['die Vernunft', 'de rede'], ['das Gewissen', 'het geweten'], ['der Zweifel', 'de twijfel'], ['die Pflicht', 'de plicht'], ['der Begriff', 'het begrip']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Was heißt hier Freiheit?', type: 'Filosofisch essay',
      p: [
        ['Über die Freiheit zu sprechen, heißt zunächst, zwei Dinge zu unterscheiden. Das eine ist die Freiheit von etwas: von Zwang, von Not, von Bevormundung. Das andere ist die Freiheit zu etwas: zum eigenen Urteil, zum Handeln, zum Irrtum. Wer nur das Erste hat, ist ungebunden, aber noch nicht frei.', 'Over vrijheid spreken betekent allereerst twee dingen onderscheiden. Het ene is de vrijheid van iets: van dwang, van nood, van betutteling. Het andere is de vrijheid tot iets: tot een eigen oordeel, tot handelen, tot vergissing. Wie alleen het eerste heeft, is ongebonden, maar nog niet vrij.'],
        ['Kant nannte das Mündigkeit: den Mut, sich des eigenen Verstandes zu bedienen. Bemerkenswert ist, dass er nicht vom Können spricht, sondern vom Mut. Das Schwierige ist offenbar nicht das Denken, sondern das Aushalten dessen, was beim Denken herauskommt. Der Unmündige hat es bequemer.', 'Kant noemde dat mondigheid: de moed om je van je eigen verstand te bedienen. Opmerkelijk is dat hij niet van kunnen spreekt, maar van moed. Het moeilijke is kennelijk niet het denken, maar het verdragen van wat er bij het denken uitkomt. De onmondige heeft het gemakkelijker.'],
        ['Daraus folgt etwas Unbequemes. Die Freiheit des Einzelnen ist keine Eigenschaft, die man besitzt wie ein Auto. Sie ist eine Tätigkeit. Man hat sie nur, solange man sie ausübt, und man verliert sie nicht durch ein Verbot, sondern durch Gewohnheit. Das Gefährliche an der Unfreiheit ist, dass sie sich so angenehm anfühlen kann.', 'Daaruit volgt iets ongemakkelijks. De vrijheid van het individu is geen eigenschap die je bezit zoals een auto. Ze is een activiteit. Je hebt haar alleen zolang je haar uitoefent, en je verliest haar niet door een verbod, maar door gewoonte. Het gevaarlijke aan onvrijheid is dat ze zo aangenaam kan aanvoelen.']
      ],
      gl: [['der Zwang', 'de dwang'], ['die Bevormundung', 'de betutteling'], ['bemerkenswert', 'opmerkelijk'], ['aushalten', 'verdragen'], ['ausüben', 'uitoefenen']],
      q: [
        { t: 'mc', q: 'Welche zwei Arten von Freiheit unterscheidet der Text?', o: ['Freiheit von etwas und Freiheit zu etwas', 'Freiheit des Einzelnen und des Staates', 'Alte und neue Freiheit'] },
        { t: 'mc', q: 'Was ist laut Text das Schwierige?', o: ['Das Aushalten dessen, was beim Denken herauskommt', 'Das Denken selbst', 'Das Lesen von Kant'] },
        { t: 'mc', q: 'Wodurch verliert man die Freiheit?', o: ['Durch Gewohnheit', 'Durch ein Verbot', 'Durch Armut'] }
      ]
    },
    say: [['Das Wesentliche ist unsichtbar.', 'Het wezenlijke is onzichtbaar.'], ['Ich wünsche dir alles Gute.', 'Ik wens je al het goede.'], ['Die Würde des Menschen ist unantastbar.', 'De waardigheid van de mens is onaantastbaar.']],
    task: { nl: 'Schrijf een korte beschouwing (5 zinnen) over geluk, vrijheid of waarheid. Gebruik drie bijvoeglijke naamwoorden als naamwoord (das Gute, der Einzelne, etwas Neues) en vier abstracte naamwoorden met verschillend achtervoegsel.', model: 'Das Glück ist kein Besitz, sondern eine Tätigkeit. Der Einzelne sucht es oft im Reichtum, findet es aber eher in der Freundschaft. Das Schöne daran ist, dass es wenig kostet. Das Schwierige ist, es zu erkennen, solange es da ist. Vielleicht ist Dankbarkeit die einzige Erkenntnis, die wirklich glücklich macht.' },
    scenario: { nl: 'Na een college filosofie praat je met een Duitse medestudent na over een moeilijk begrip.', role: 'Jakob, een student filosofie uit Tübingen die graag precies formuleert', goal: 'Vraag wat een begrip betekent (das Gute an sich, der Einzelne), geef je eigen uitleg en noem een voorbeeld.' }
  });

  /* ───────────────────────── C2 · 5 ───────────────────────── */
  U({
    id: 'de-c2-05', level: 'C2', icon: '🗺️', title: 'Dialekte verstehen', nl: 'Dialecten: van Platt tot Bairisch',
    goals: ['De grote dialectgebieden herkennen aan klank en woorden', 'Veelgehoorde dialectvormen verstaan (i, net, wat, dat, gell, moin)', 'De verwantschap tussen Nederlands, Nederduits en Hoogduits benutten', 'Beleefd reageren als je iemand niet verstaat'],
    vocab: [
      ['Moin! (Noord)', 'hallo, goedendag (de hele dag)'], ['Tach! (West, Noord)', 'dag!'], ['Grüß Gott! (Zuid)', 'goedendag'], ['Servus! (Zuid, AT)', 'hoi; dag'], ['Tschüss! · Tschö! (Rijnland)', 'doei!'],
      ['Pfiat di! (Beieren, AT)', 'dag! (bij afscheid)'], ['schnacken (Noord)', 'praten, kletsen'], ['klönen (Noord)', 'gezellig kletsen'], ['kieken (Noord)', 'kijken'], ['lütt (Noord)', 'klein'],
      ['dat · wat (Noord, Rijnland)', 'das · was'], ['ick · icke (Berlijn)', 'ich'], ['jut (Berlijn, Rijnland)', 'gut'], ['i (Zuid)', 'ich'], ['net · ned · nit (Zuid)', 'nicht'],
      ['a bissl (Zuid)', 'een beetje'], ['gell? · gelle? (Zuid)', 'toch? hè?'], ['oder? (CH) · ne? (Noord)', 'toch? hè?'], ['das Mädle (Zwaben) · das Madl (Beieren)', 'het meisje'], ['der Bub (Zuid)', 'de jongen'],
      ['schaffen (Zwaben)', 'werken'], ['das Brötchen · die Semmel · die Schrippe · das Weckle', 'het broodje (noord · zuid · Berlijn · Zwaben)'], ['Samstag · Sonnabend', 'zaterdag (zuid/west · noord/oost)'], ['die Mundart', 'het dialect'], ['das Plattdeutsch', 'het Nederduits'], ['verständlich', 'verstaanbaar']
    ],
    grammar: [
      { t: 'Wat hoor je waar?', es: 'Dialekträume: Merkmale zum Wiedererkennen',
        html: `<p>Je hoeft geen dialect te spreken, maar wie in Duitsland woont of werkt, hoort het elke dag. Met een paar kenmerken plaats je een spreker al.</p>
<p><b>Noorden (Platt, Hamburg, Bremen):</b> <i>Moin</i>, <i>s-pitzer S-tein</i> (sp/st als in het Nederlands, niet <i>sjp/sjt</i>), <i>dat, wat, ik</i>, veel woorden die je als Nederlander herkent: <i>kieken, lütt, Water</i>.</p>
<p><b>Berlijn:</b> <i>ick</i>, <i>g → j</i> (<i>jut, janz, jeht</i>), <i>dit, wat</i>, <i>-er → -a</i> (<i>Mutta</i>), en een directe toon: de <i>Berliner Schnauze</i>.</p>
<p><b>Rijnland (Keulen):</b> <i>g → j</i> (<i>jeck</i>), <i>dat, wat</i>, zangerige toon, <i>-chen → -che</i>. <i>Et kütt wie et kütt</i> (het komt zoals het komt).</p>
<p><b>Saksen:</b> zachte medeklinkers (<i>p → b, t → d, k → g</i>: <i>Gaffee</i>), klinkers naar achteren.</p>
<p><b>Zwaben:</b> <i>-le</i> als verkleinwoord (<i>Häusle, Spätzle</i>), <i>isch, bisch</i> (<i>st → scht</i>), <i>net</i>, <i>schaffen</i> = werken.</p>
<p><b>Beieren en Oostenrijk:</b> <i>i</i> (ich), <i>ned</i>, <i>a</i> (ein), <i>-erl</i> (<i>Bisserl</i>), <i>oa</i> voor <i>ei</i> (<i>oans, zwoa</i>), rollende r.</p>
<p><b>Uitzondering:</b> in het zuiden staat een <b>lidwoord vóór voornamen</b>: <i><b>der</b> Peter, <b>die</b> Maria</i>, wat in het noorden als fout of neerbuigend klinkt. <b>Waarom?</b> In de zuidelijke dialecten is het lidwoord bij namen de gewone manier om een bekende persoon aan te duiden; het maakt de naam vertrouwd. In geschreven Standaardduits laat je het weg.</p>`,
        table: [['Standaardduits', 'Noord', 'Berlijn', 'Zwaben', 'Beieren'], ['ich', 'ik', 'ick', 'i', 'i'], ['nicht', 'nich', 'nich', 'net', 'ned'], ['das / was', 'dat / wat', 'dit / wat', 'des / was', 'des / wos'], ['ein bisschen', 'en beten', '’n bisschen', 'a bissle', 'a bissl'], ['Guten Tag', 'Moin', 'Tach', 'Grüß Gott', 'Grüß Gott / Servus']],
        sum: 'Moin! Wat is dat? · Ick bin Berliner. · I woaß ned. · Des isch net schlecht.',
        ex: [['Dat is ’n lütten Jung. (Noord)', 'Das ist ein kleiner Junge. = Dat is een klein jongetje.'], ['I hob koa Zeit. (Beieren)', 'Ich habe keine Zeit. = Ik heb geen tijd.'], ['Mir schaffet beim Daimler. (Zwaben)', 'Wir arbeiten bei Daimler. = Wij werken bij Daimler.']] },
      { t: 'Nederlands als sleutel: de klankverschuiving', es: 'Die zweite Lautverschiebung',
        html: `<p>Waarom lijkt Platt zo op Nederlands? Omdat het Hoogduits rond het jaar 600 een <b>klankverschuiving</b> heeft doorgemaakt die het noorden (en het Nederlands en Engels) niet meedeed. Wie het patroon kent, kan vanuit het Nederlands Duitse woorden raden, en omgekeerd.</p>
<p><b>p → pf / f:</b> <i>peper – <b>Pf</b>effer, appel – A<b>pf</b>el, schip – Schi<b>ff</b>, slapen – schla<b>f</b>en, hopen – ho<b>ff</b>en</i><br><b>t → z / ss:</b> <i>tien – <b>z</b>ehn, tijd – <b>Z</b>eit, tong – <b>Z</b>unge, water – Wa<b>ss</b>er, eten – e<b>ss</b>en, dat – da<b>s</b></i><br><b>k → ch:</b> <i>maken – ma<b>ch</b>en, ik – i<b>ch</b>, boek – Bu<b>ch</b>, ook – au<b>ch</b></i><br><b>d → t:</b> <i>dag – <b>T</b>ag, deur – <b>T</b>ür, doen – <b>t</b>un, goed – gu<b>t</b></i><br><b>v/f tussen klinkers → b:</b> <i>geven – ge<b>b</b>en, leven – le<b>b</b>en, zeven – sie<b>b</b>en</i></p>
<p>De grens loopt van Düsseldorf (de <b>Benrather Linie</b>, <i>maken/machen</i>) dwars door Duitsland naar Berlijn. Ten noorden ervan zegt men traditioneel <i>ik, maken, dat, Water</i>.</p>
<p><b>Uitzondering:</b> na <i>s</i> is de <i>p, t, k</i> <b>niet</b> verschoven: <i>steen – <b>St</b>ein, spelen – <b>sp</b>ielen</i>, en ook niet in <i>tr-</i>: <i>trouw – <b>tr</b>eu</i>. <b>Waarom?</b> De verschuiving trof alleen klanken die «vrij» stonden; in de vaste combinaties <i>sp, st, sk, tr, ft, ht</i> werd de medeklinker beschermd door zijn buurman. Leenwoorden van ná 600 (<i>Paket, Tee, Tante</i>) deden natuurlijk ook niet mee.</p>`,
        table: [['Nederlands', 'Platt', 'Hoogduits', 'regel'], ['appel', 'Appel', 'Apfel', 'p → pf'], ['slapen', 'slapen', 'schlafen', 'p → f'], ['tijd', 'Tiet', 'Zeit', 't → z'], ['water', 'Water', 'Wasser', 't → ss'], ['maken', 'maken', 'machen', 'k → ch'], ['dag', 'Dag', 'Tag', 'd → t']],
        ex: [['pond → Pfund, peper → Pfeffer', 'p aan het begin wordt pf'], ['zitten → sitzen, hart → Herz', 't wordt z of tz'], ['week → Woche, zoeken → suchen', 'k na klinker wordt ch']] }
    ],
    dialogue: {
      t: 'Auf dem Wochenmarkt', place: 'München 🇩🇪',
      lines: [
        ['Marktfrau', 'Grüß Gott! Wos derf’s denn sei?', 'Goedendag! Wat mag het zijn?'],
        ['Herr Smit', 'Guten Tag. Ich hätte gern ein Pfund Tomaten und vier Brötchen.', 'Goedendag. Ik wil graag een pond tomaten en vier broodjes.'],
        ['Marktfrau', 'Semmeln moana S’. De gibt’s beim Bäcker drüben. Aber Tomaten hob i, ganz frische. Sonst no wos?', 'Semmeln bedoelt u. Die zijn er bij de bakker aan de overkant. Maar tomaten heb ik, heel verse. Verder nog iets?'],
        ['Herr Smit', 'Entschuldigung, ich habe das nicht ganz verstanden. Könnten Sie das bitte noch einmal sagen?', 'Sorry, ik heb dat niet helemaal verstaan. Zou u dat alstublieft nog eens kunnen zeggen?'],
        ['Marktfrau', 'Ach, Sie san ned von do, gell? Ich habe gefragt, ob Sie sonst noch etwas möchten.', 'Ach, u bent niet van hier, hè? Ik vroeg of u verder nog iets wilt.'],
        ['Herr Smit', 'Nein, ich komme aus den Niederlanden. Vielleicht noch ein bisschen Petersilie.', 'Nee, ik kom uit Nederland. Misschien nog een beetje peterselie.'],
        ['Marktfrau', 'A bisserl Petersil, freilich. Aus Holland! Do versteh i Sie fast besser als die Preißn.', 'Een beetje peterselie, natuurlijk. Uit Holland! Dan versta ik u bijna beter dan de Pruisen.'],
        ['Herr Smit', 'Die Preußen?', 'De Pruisen?'],
        ['Marktfrau', 'So nennen wir die Norddeutschen. Nix für ungut! Macht drei Euro zwanzig. Pfiat Eana!', 'Zo noemen wij de Noord-Duitsers. Niet kwaad bedoeld! Dat is drie euro twintig. Tot ziens!']
      ],
      q: [
        { t: 'mc', q: 'Wie heißen Brötchen in München?', o: ['Semmeln', 'Schrippen', 'Weckle'] },
        { t: 'mc', q: 'Was sagt Herr Smit, als er nichts versteht?', o: ['Könnten Sie das bitte noch einmal sagen?', 'Sprechen Sie Englisch?', 'Er sagt nichts'] },
        { t: 'mc', q: 'Wen nennt die Marktfrau «Preißn»?', o: ['Die Norddeutschen', 'Die Niederländer', 'Die Österreicher'] }
      ]
    },
    culture: { t: 'Weißwurstäquator en Platt aan de grens', html: `<p>🥨 Duitsers verdelen hun land graag in tweeën langs de <b>Weißwurstäquator</b>: ten zuiden ervan eet men Weißwurst, zegt men <i>Grüß Gott</i> en heet iedere noorderling een <i>Preiß</i>. Waar de lijn precies ligt (de Main? de Donau?) is zelf een geliefd twistpunt.</p>
<p>Dialect heeft in het zuiden aanzien: Beierse en Zwabische politici spreken het op tv, en Baden-Württemberg adverteerde jarenlang met <i>«Wir können alles. Außer Hochdeutsch.»</i> In het noorden is het <b>Plattdeutsch</b> bijna uit het dagelijks leven verdwenen, maar het wordt als erkende streektaal beschermd en weer op scholen gegeven.</p>
<p>🇳🇱 Voor Nederlanders interessant: aan de grens liepen de dialecten vroeger vloeiend in elkaar over. Het Platt van Oost-Friesland, het Emsland en het Münsterland lijkt sterk op het Gronings, Drents en Twents. Oudere mensen aan weerszijden verstaan elkaar nog zonder Hoogduits of Nederlands.</p>` },
    ex: [
      { t: 'cloze', s: 'In Hamburg zegt men de hele dag: ___!', a: ['Moin'], o: ['Moin', 'Servus', 'Grüezi'], nl: 'In Hamburg zegt men de hele dag: Moin!', tag: 'de-dialekt' },
      { t: 'cloze', s: 'Beiers «I hob koa Zeit» = Ich habe ___ Zeit.', a: ['keine'], o: ['keine', 'kaum', 'eine'], nl: 'Ik heb geen tijd.', tag: 'de-dialekt' },
      { t: 'cloze', s: 'Zwabisch «schaffen» betekent: ___.', a: ['arbeiten'], o: ['arbeiten', 'schlafen', 'schaffen (klaarspelen)'], nl: 'Zwabisch «schaffen» betekent werken.', tag: 'de-dialekt' },
      { t: 'cloze', s: 'Berlijns «Dit is jut» = Das ist ___.', a: ['gut'], o: ['gut', 'jung', 'jetzt'], nl: 'Dat is goed.', tag: 'de-dialekt' },
      { t: 'cloze', s: 'Nederlands «appel» → Hoogduits: ___', a: ['Apfel'], o: ['Apfel', 'Appel', 'Abfel'], nl: 'appel → Apfel (p wordt pf)', tag: 'de-lautversch' },
      { t: 'cloze', s: 'Nederlands «tijd» → Hoogduits: ___', a: ['Zeit'], o: ['Zeit', 'Teit', 'Seit'], nl: 'tijd → Zeit (t wordt z)', tag: 'de-lautversch' },
      { t: 'cloze', s: 'Nederlands «zoeken» → Hoogduits: ___', a: ['suchen'], o: ['suchen', 'suken', 'zuchen'], nl: 'zoeken → suchen (k wordt ch)', tag: 'de-lautversch' },
      { t: 'mc', q: 'Waarom is het «steen – Stein» en niet «Szein»?', o: ['Na s is de t niet verschoven', 'Omdat het een leenwoord is', 'Het is een toevallige uitzondering zonder reden'], x: 'Uitzondering op t → z: in sp, st, sk, tr bleef de medeklinker staan. Reden: de buurklank beschermde hem tegen de verschuiving.', tag: 'de-lautversch' },
      { t: 'mc', q: 'Een Beierse collega zegt «der Peter kommt». Wat is hier aan de hand?', o: ['Zuidelijk gebruik: lidwoord voor een voornaam', 'Hij maakt een fout', 'Peter is een achternaam'], x: 'Uitzondering op het Standaardduits: in het zuiden maakt het lidwoord een naam vertrouwd. In geschreven Duits laat je het weg.', tag: 'de-dialekt' },
      { t: 'mc', q: 'Wat betekent «gell?» aan het einde van een zin?', o: ['toch? hè?', 'geld?', 'snel?'], tag: 'de-dialekt' },
      { t: 'tr', nl: 'Zou u dat alstublieft nog eens kunnen zeggen?', a: ['Könnten Sie das bitte noch einmal sagen?', 'Könnten Sie das bitte nochmal sagen?', 'Könnten Sie das bitte wiederholen?'], tag: 'de-dialekt' },
      { t: 'tr', nl: 'Ik heb u helaas niet verstaan.', a: ['Ich habe Sie leider nicht verstanden.', 'Leider habe ich Sie nicht verstanden.'], tag: 'de-dialekt' },
      { t: 'tr', nl: 'water, eten, dat (in het Hoogduits)', a: ['Wasser, essen, das'], tag: 'de-lautversch' },
      { t: 'order', s: 'Könnten Sie bitte etwas langsamer sprechen?', nl: 'Zou u alstublieft wat langzamer kunnen spreken?', tag: 'de-dialekt' },
      { t: 'match', p: [['schnacken', 'praten'], ['lütt', 'klein'], ['a bissl', 'een beetje'], ['der Bub', 'de jongen'], ['Sonnabend', 'zaterdag']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Stirbt der Dialekt?', type: 'Achtergrondartikel',
      p: [
        ['Noch vor hundert Jahren sprach fast jeder Deutsche zu Hause Mundart und lernte Hochdeutsch erst in der Schule, beinahe wie eine Fremdsprache. Heute ist es umgekehrt. Vor allem im Norden wachsen kaum noch Kinder mit Plattdeutsch auf; Fernsehen, Umzüge und der Wunsch, «richtig» zu sprechen, haben die alten Sprachen verdrängt.', 'Nog maar honderd jaar geleden sprak bijna elke Duitser thuis dialect en leerde hij pas op school Hoogduits, bijna als een vreemde taal. Nu is het omgekeerd. Vooral in het noorden groeien nauwelijks nog kinderen op met Nederduits; televisie, verhuizingen en de wens om «goed» te spreken hebben de oude talen verdrongen.'],
        ['Im Süden sieht es anders aus. In Bayern, Schwaben und vor allem in der Schweiz gehört der Dialekt zum Alltag, auch bei jungen Leuten und Akademikern. Forscher beobachten allerdings, dass die Ortsdialekte verschwinden und größere Regionalsprachen entstehen: Man hört, dass jemand aus Bayern kommt, aber nicht mehr, aus welchem Dorf.', 'In het zuiden ziet het er anders uit. In Beieren, Zwaben en vooral in Zwitserland hoort het dialect bij het dagelijks leven, ook bij jonge mensen en academici. Onderzoekers zien echter dat de plaatselijke dialecten verdwijnen en grotere streektalen ontstaan: je hoort dat iemand uit Beieren komt, maar niet meer uit welk dorp.'],
        ['Zugleich erlebt die Mundart ein kleines Comeback. Bands singen auf Kölsch und Bairisch, Schulen bieten Platt als Wahlfach an, und in sozialen Medien schreiben junge Leute, wie sie sprechen. Studien deuten darauf hin, dass Kinder, die mit Dialekt und Hochdeutsch aufwachsen, später leichter Fremdsprachen lernen.', 'Tegelijk beleeft het dialect een kleine comeback. Bands zingen in het Keuls en Beiers, scholen bieden Platt aan als keuzevak, en op sociale media schrijven jonge mensen zoals ze praten. Studies wijzen erop dat kinderen die met dialect en Hoogduits opgroeien, later makkelijker vreemde talen leren.']
      ],
      gl: [['umgekehrt', 'omgekeerd'], ['verdrängen', 'verdringen'], ['der Alltag', 'het dagelijks leven'], ['das Wahlfach', 'het keuzevak'], ['hindeuten auf', 'wijzen op']],
      q: [
        { t: 'mc', q: 'Wie war es vor hundert Jahren?', o: ['Fast alle sprachen zu Hause Mundart', 'Niemand sprach Dialekt', 'Hochdeutsch war verboten'] },
        { t: 'mc', q: 'Was beobachten Forscher im Süden?', o: ['Ortsdialekte verschwinden, Regionalsprachen entstehen', 'Der Dialekt verschwindet völlig', 'Nur alte Leute sprechen Dialekt'] },
        { t: 'mc', q: 'Welchen Vorteil haben Kinder mit Dialekt und Hochdeutsch?', o: ['Sie lernen später leichter Fremdsprachen', 'Sie schreiben besser', 'Sie bekommen bessere Noten in Mathematik'] }
      ]
    },
    say: [['Moin! Wie geht’s?', 'Hallo! Hoe gaat het?'], ['Könnten Sie das bitte noch einmal sagen?', 'Zou u dat alstublieft nog eens kunnen zeggen?'], ['Entschuldigung, ich habe Sie nicht verstanden.', 'Sorry, ik heb u niet verstaan.']],
    task: { nl: 'Schrijf 5 zinnen (in Standaardduits) over een dialect dat jij kent, Nederlands of Duits. Leg met twee voorbeelden uit hoe je met de klankverschuiving een Duits woord uit het Nederlands kunt afleiden.', model: 'Ich komme aus Groningen, und unser Dialekt ähnelt dem Plattdeutschen sehr. Meine Großmutter verstand die Leute in Ostfriesland ohne Probleme. Mit der Lautverschiebung kann ich viele deutsche Wörter erraten: Aus «tien» wird «zehn», aus «maken» wird «machen». Nach s funktioniert das nicht, deshalb heißt «steen» einfach «Stein». Schade finde ich, dass junge Leute den Dialekt kaum noch sprechen.' },
    scenario: { nl: 'Je doet boodschappen op een markt in München en de marktvrouw praat Beiers.', role: 'Een hartelijke Münchner marktvrouw die dialect spreekt en overschakelt als je het vraagt', goal: 'Bestel groente en brood, vraag beleefd of ze iets wil herhalen, en vraag wat een dialectwoord betekent.' }
  });
})(window.SPT);
