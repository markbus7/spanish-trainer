/* Duits voor Nederlandstaligen — niveau B1, units 6–10 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-gen': 'tweede naamval (des, der)', 'de-genprep': 'wegen, trotz, während + tweede naamval', 'de-zu': 'heel werkwoord met zu', 'de-umzu': 'um … zu, ohne … zu, statt … zu',
    'de-indirekt': 'indirecte vraag (ob, wann, wo)', 'de-praepverb': 'werkwoord met vast voorzetsel (warten auf)', 'de-da': 'darauf, damit / worauf, womit', 'de-plusq': 'Plusquamperfekt (hatte gemacht)',
    'de-nachdem': 'nachdem, bevor, während, sobald', 'de-jedesto': 'je … desto', 'de-ndekl': 'zwakke mannelijke woorden (den Kollegen)', 'de-lassen': 'lassen (laten)'
  });

  /* ───────────────────────── B1 · 6 ───────────────────────── */
  U({
    id: 'de-b1-06', level: 'B1', icon: '🏘️', title: 'Wohnen und Nachbarn', nl: 'Wonen: de tweede naamval',
    goals: ['Over huur, buren en regels praten', 'Bezit uitdrukken met de tweede naamval', 'Wegen, trotz en während gebruiken', 'Een klacht of mededeling in een flat begrijpen'],
    vocab: [
      ['der Mieter / die Mieterin', 'de huurder'], ['der Vermieter / die Vermieterin', 'de verhuurder'], ['der Mietvertrag', 'het huurcontract'], ['die Nebenkosten', 'de servicekosten'], ['die Kaution', 'de borg'],
      ['der Hausmeister', 'de huismeester'], ['das Treppenhaus', 'het trappenhuis'], ['der Keller', 'de kelder'], ['das Dach', 'het dak'], ['die Heizung', 'de verwarming'], ['der Aufzug', 'de lift'], ['der Lärm', 'het lawaai'],
      ['die Hausordnung', 'het huisreglement'], ['die Ruhezeit', 'de rusttijd'], ['der Umzug', 'de verhuizing'], ['umziehen', 'verhuizen'], ['einziehen / ausziehen', 'erin trekken / eruit trekken'], ['renovieren', 'opknappen'],
      ['sich beschweren über', 'klagen over'], ['stören', 'storen'], ['kaputt', 'kapot'], ['wegen', 'vanwege'], ['trotz', 'ondanks'], ['während', 'tijdens'], ['innerhalb', 'binnen'], ['der Besitzer', 'de eigenaar']
    ],
    grammar: [
      { t: 'De tweede naamval: van wie?', es: 'Der Genitiv',
        html: `<p>De <b>tweede naamval</b> (Genitiv) drukt bezit uit, waar het Nederlands <i>van</i> gebruikt: <i>das Auto <b>des Nachbarn</b></i> (de auto van de buurman), <i>die Wohnung <b>der Lehrerin</b></i>.</p>
<p>Lidwoorden: <b>des</b> (m/o) en <b>der</b> (v/mv). Met <i>ein/mein</i>: <b>eines / meines</b> en <b>einer / meiner</b>.</p>
<p><b>Uitzondering:</b> mannelijke en onzijdige woorden krijgen zelf ook een uitgang: <b>-s</b>, of <b>-es</b> bij korte woorden en na een sisklank: <i>des Vermieter<b>s</b>, des Haus<b>es</b>, des Kind<b>es</b></i>. <b>Waarom?</b> Het is dezelfde bezits-s als in <i>Marks fiets</i> of <i>’s avonds</i> (= des avonds): in het Nederlands bijna verdwenen, in het Duits nog levend.</p>
<p>Bij namen zet je de <b>-s</b> achter de naam, <b>zonder apostrof</b>: <i>Annas Wohnung, Herrn Müllers Auto</i>.</p>
<p>In de spreektaal hoor je vaak <b>von + 3e naamval</b>: <i>das Auto <b>von meinem</b> Nachbarn</i>. Dat is goed in een gesprek; in geschreven Duits is de tweede naamval netter.</p>`,
        table: [['', 'lidwoord', 'voorbeeld', 'Nederlands'], ['mannelijk', 'des / eines … -(e)s', 'der Schlüssel des Mieters', 'de sleutel van de huurder'], ['vrouwelijk', 'der / einer', 'die Wohnung der Nachbarin', 'de woning van de buurvrouw'], ['onzijdig', 'des / eines … -(e)s', 'das Dach des Hauses', 'het dak van het huis'], ['meervoud', 'der / meiner', 'die Namen der Kinder', 'de namen van de kinderen']],
        sum: 'Das Auto des Nachbarn. Die Wohnung der Lehrerin. Das Dach des Hauses.',
        ex: [['Die Tür des Kellers ist kaputt.', 'De deur van de kelder is kapot.'], ['Das ist die Katze meiner Nachbarin.', 'Dat is de kat van mijn buurvrouw.'], ['Am Ende des Monats ziehen wir um.', 'Aan het einde van de maand verhuizen we.']] },
      { t: 'wegen, trotz, während', es: 'Präpositionen mit Genitiv',
        html: `<p>Vier veelgebruikte voorzetsels krijgen de tweede naamval: <b>wegen</b> (vanwege), <b>trotz</b> (ondanks), <b>während</b> (tijdens), <b>innerhalb</b> (binnen).</p>
<p><i><b>Wegen des Lärms</b> kann ich nicht schlafen. <b>Trotz des Regens</b> gehen wir spazieren. <b>Während der Ferien</b> ist das Büro geschlossen.</i></p>
<p>Deze voorzetsels zijn compacte versies van een bijzin: <i>wegen des Regens</i> = <i>weil es regnet</i>; <i>trotz des Regens</i> = <i>obwohl es regnet</i>; <i>während des Essens</i> = <i>während wir essen</i>.</p>
<p><b>Uitzondering:</b> met een persoonlijk voornaamwoord zeg je niet <s>wegen mir</s> in net Duits, maar <b>meinetwegen, deinetwegen, seinetwegen</b>. <b>Waarom?</b> De oude tweede naamval van <i>ich</i> (<i>meiner</i>) is met <i>wegen</i> tot één woord versmolten. <i>Meinetwegen</i> betekent ook <i>wat mij betreft</i>.</p>
<p>In de spreektaal hoor je na <i>wegen</i> en <i>trotz</i> ook de derde naamval (<i>wegen dem Regen</i>). Dat begrijpt iedereen, maar schrijf de tweede naamval.</p>`,
        table: [['voorzetsel', 'voorbeeld', 'als bijzin'], ['wegen', 'wegen des Wetters', 'weil das Wetter schlecht ist'], ['trotz', 'trotz der Kälte', 'obwohl es kalt ist'], ['während', 'während der Arbeit', 'während ich arbeite'], ['innerhalb', 'innerhalb einer Woche', '(binnen een week)']],
        ex: [['Wegen der Renovierung ist der Aufzug außer Betrieb.', 'Vanwege de renovatie is de lift buiten gebruik.'], ['Trotz des hohen Preises haben wir die Wohnung genommen.', 'Ondanks de hoge prijs hebben we de woning genomen.'], ['Während der Ruhezeit darf man nicht bohren.', 'Tijdens de rusttijd mag je niet boren.']] }
    ],
    dialogue: {
      t: 'Ärger im Treppenhaus', place: 'Wien 🇦🇹',
      lines: [
        ['Anna', 'Guten Abend, Herr Novak. Darf ich Sie kurz stören?', 'Goedenavond, meneer Novak. Mag ik u even storen?'],
        ['Herr Novak', 'Natürlich, Frau de Vries. Worum geht es?', 'Natuurlijk, mevrouw De Vries. Waar gaat het om?'],
        ['Anna', 'Wegen der Musik des neuen Mieters im dritten Stock kann ich seit Tagen nicht schlafen.', 'Vanwege de muziek van de nieuwe huurder op de derde verdieping kan ik al dagen niet slapen.'],
        ['Herr Novak', 'Das habe ich auch gehört. Trotz der Hausordnung feiert er jede Nacht.', 'Dat heb ik ook gehoord. Ondanks het huisreglement feest hij elke nacht.'],
        ['Anna', 'Haben Sie schon mit ihm gesprochen?', 'Hebt u al met hem gesproken?'],
        ['Herr Novak', 'Noch nicht. Ich rufe morgen die Besitzerin des Hauses an.', 'Nog niet. Ik bel morgen de eigenaresse van het huis.'],
        ['Anna', 'Danke. Übrigens, die Heizung im Keller macht auch komische Geräusche.', 'Dank u. Trouwens, de verwarming in de kelder maakt ook rare geluiden.'],
        ['Herr Novak', 'Die wird innerhalb einer Woche repariert. Während der Arbeiten gibt es leider kein warmes Wasser.', 'Die wordt binnen een week gerepareerd. Tijdens de werkzaamheden is er helaas geen warm water.'],
        ['Anna', 'Na gut, meinetwegen. Hauptsache, es wird wieder ruhig.', 'Nou goed, wat mij betreft. Als het maar weer rustig wordt.']
      ],
      q: [
        { t: 'mc', q: 'Warum kann Anna nicht schlafen?', o: ['Wegen der Musik des neuen Mieters', 'Wegen der Heizung', 'Wegen des Aufzugs'] },
        { t: 'mc', q: 'Wen ruft Herr Novak morgen an?', o: ['Die Besitzerin des Hauses', 'Die Polizei', 'Den neuen Mieter'] },
        { t: 'mc', q: 'Was gibt es während der Arbeiten nicht?', o: ['Warmes Wasser', 'Strom', 'Internet'] }
      ]
    },
    culture: { t: 'Huren, Kehrwoche en de Hausordnung', html: `<p>In Duitsland, Oostenrijk en Zwitserland <b>huurt</b> meer dan de helft van de mensen, vaak hun hele leven. Let bij een advertentie op <b>Kaltmiete</b> (kale huur) en <b>Warmmiete</b> (inclusief <i>Nebenkosten</i> zoals verwarming). De <b>Kaution</b> is meestal drie maanden huur.</p>
<p>Verrassing: veel huurwoningen worden <b>zonder keuken</b> verhuurd. De vorige huurder neemt zijn <i>Einbauküche</i> mee of verkoopt hem aan jou.</p>
<p>🧹 In de <b>Hausordnung</b> staan de <i>Ruhezeiten</i> (meestal 22 tot 6 uur en zondag de hele dag). In Zuid-Duitsland bestaat nog de <b>Kehrwoche</b>: om de beurt veeg je het trappenhuis, en er hangt een bordje aan je deur als jij aan de beurt bent.</p>` },
    ex: [
      { t: 'cloze', s: 'Das ist das Auto ___ Nachbarn.', a: ['des'], o: ['des', 'der', 'dem'], nl: 'Dat is de auto van de buurman.', tag: 'de-gen' },
      { t: 'cloze', s: 'Die Wohnung ___ Lehrerin ist groß.', a: ['der'], o: ['der', 'des', 'die'], nl: 'De woning van de lerares is groot.', tag: 'de-gen' },
      { t: 'cloze', s: 'Das Dach des ___ ist neu.', a: ['Hauses'], o: ['Hauses', 'Haus', 'Hauss'], nl: 'Het dak van het huis is nieuw.', x: 'Uitzondering: onzijdige en mannelijke woorden krijgen zelf -(e)s; na een sisklank is het -es: des Hauses.', tag: 'de-gen' },
      { t: 'cloze', s: 'Am Ende ___ Monats ziehen wir um.', a: ['des'], o: ['des', 'der', 'dem'], nl: 'Aan het einde van de maand verhuizen we.', tag: 'de-gen' },
      { t: 'cloze', s: '___ des Regens gehen wir spazieren.', a: ['Trotz'], o: ['Trotz', 'Wegen', 'Während'], nl: 'Ondanks de regen gaan we wandelen.', tag: 'de-genprep' },
      { t: 'cloze', s: '___ des Lärms kann ich nicht schlafen.', a: ['Wegen'], o: ['Wegen', 'Trotz', 'Innerhalb'], nl: 'Vanwege het lawaai kan ik niet slapen.', tag: 'de-genprep' },
      { t: 'cloze', s: 'Während ___ Ferien ist das Büro geschlossen.', a: ['der'], o: ['der', 'den', 'des'], nl: 'Tijdens de vakantie is het kantoor gesloten.', tag: 'de-genprep' },
      { t: 'mc', q: 'Hoe zeg je «de woning van Anna»?', o: ['Annas Wohnung', 'Anna’s Wohnung', 'die Wohnung Anna'], x: 'Bij namen komt de -s direct achter de naam, zonder apostrof.', tag: 'de-gen' },
      { t: 'mc', q: 'Wat betekent «meinetwegen»?', o: ['wat mij betreft / vanwege mij', 'mijn weg', 'onderweg'], x: 'Uitzondering: wegen + ich wordt één woord: meinetwegen (niet wegen mir in net Duits).', tag: 'de-genprep' },
      { t: 'mc', q: 'Wat is de «Warmmiete»?', o: ['huur inclusief servicekosten', 'huur in de zomer', 'de borg'], tag: 'de-vok' },
      { t: 'tr', nl: 'De sleutel van de huurder is weg.', a: ['Der Schlüssel des Mieters ist weg.', 'Der Schlüssel der Mieterin ist weg.'], tag: 'de-gen' },
      { t: 'tr', nl: 'Vanwege het weer blijven we thuis.', a: ['Wegen des Wetters bleiben wir zu Hause.'], tag: 'de-genprep' },
      { t: 'tr', nl: 'Tijdens het eten praten we niet over werk.', a: ['Während des Essens sprechen wir nicht über die Arbeit.', 'Während des Essens reden wir nicht über die Arbeit.', 'Während des Essens sprechen wir nicht über Arbeit.'], tag: 'de-genprep' },
      { t: 'order', s: 'Trotz des hohen Preises haben wir die Wohnung genommen.', nl: 'Ondanks de hoge prijs hebben we de woning genomen.', tag: 'de-genprep' },
      { t: 'match', p: [['der Mieter', 'de huurder'], ['die Kaution', 'de borg'], ['der Aufzug', 'de lift'], ['umziehen', 'verhuizen'], ['stören', 'storen']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Aushang im Treppenhaus', type: 'Mededeling van de verhuurder',
      p: [
        ['Liebe Mieterinnen und Mieter, wegen der Renovierung des Daches wird ab Montag ein Gerüst vor dem Haus aufgebaut. Die Arbeiten dauern voraussichtlich drei Wochen.', 'Beste huurders, vanwege de renovatie van het dak wordt vanaf maandag een steiger voor het huis opgebouwd. De werkzaamheden duren naar verwachting drie weken.'],
        ['Während der Arbeiten kann der Hof nicht als Parkplatz benutzt werden. Bitte stellen Sie die Fahrräder in den Keller. Trotz aller Vorsicht kann es tagsüber laut werden. Dafür bitten wir um Ihr Verständnis.', 'Tijdens de werkzaamheden kan de binnenplaats niet als parkeerplaats worden gebruikt. Zet u de fietsen alstublieft in de kelder. Ondanks alle voorzichtigheid kan het overdag lawaaiig worden. Daarvoor vragen we uw begrip.'],
        ['Außerdem erinnern wir an die Hausordnung: Innerhalb der Ruhezeiten, also zwischen 22 und 6 Uhr, ist Lärm zu vermeiden. Bei Fragen wenden Sie sich bitte an das Büro des Hausmeisters. Mit freundlichen Grüßen, Ihre Hausverwaltung', 'Bovendien herinneren we aan het huisreglement: binnen de rusttijden, dus tussen 22 en 6 uur, moet lawaai vermeden worden. Bij vragen kunt u zich wenden tot het kantoor van de huismeester. Met vriendelijke groet, uw beheerder']
      ],
      gl: [['das Gerüst', 'de steiger'], ['voraussichtlich', 'naar verwachting'], ['der Hof', 'de binnenplaats'], ['das Verständnis', 'het begrip'], ['vermeiden', 'vermijden']],
      q: [
        { t: 'mc', q: 'Warum wird ein Gerüst aufgebaut?', o: ['Wegen der Renovierung des Daches', 'Wegen eines Umzugs', 'Wegen der Heizung'] },
        { t: 'mc', q: 'Wohin sollen die Fahrräder?', o: ['In den Keller', 'In den Hof', 'Vor das Haus'] },
        { t: 'mc', q: 'Wann sind die Ruhezeiten?', o: ['Zwischen 22 und 6 Uhr', 'Zwischen 12 und 14 Uhr', 'Nur am Sonntag'] }
      ]
    },
    say: [['Das ist die Wohnung meiner Nachbarin.', 'Dat is de woning van mijn buurvrouw.'], ['Wegen des Lärms kann ich nicht schlafen.', 'Vanwege het lawaai kan ik niet slapen.'], ['Trotz des Regens gehen wir spazieren.', 'Ondanks de regen gaan we wandelen.']],
    task: { nl: 'Schrijf een kort briefje aan je verhuurder of buurman over een probleem (lawaai, kapotte verwarming). Gebruik wegen, trotz of während en één tweede naamval (4 zinnen).', model: 'Sehr geehrter Herr Novak, wegen der kaputten Heizung ist es in meiner Wohnung sehr kalt. Trotz meines Anrufs letzte Woche ist noch niemand gekommen. Könnten Sie bitte innerhalb der nächsten Tage einen Handwerker schicken? Mit freundlichen Grüßen, S. de Vries' },
    scenario: { nl: 'Je klaagt bij de huismeester over lawaai en een kapotte verwarming.', role: 'You are Herr Novak, caretaker of an apartment building in Vienna. The learner is a tenant with complaints (noise, heating). Ask for details, explain what will be done and when ("innerhalb einer Woche", "wegen der Renovierung"), stay polite. B1 German, use "Sie".', goal: 'Leg een probleem uit en vraag om een oplossing.' }
  });

  /* ───────────────────────── B1 · 7 ───────────────────────── */
  U({
    id: 'de-b1-07', level: 'B1', icon: '🏃', title: 'Gesund leben', nl: 'Gezond leven: zu en um … zu',
    goals: ['Over gezondheid, sport en voornemens praten', 'Het hele werkwoord met zu gebruiken', 'Een doel uitdrukken met um … zu en damit', 'Weten wanneer er géén zu komt'],
    vocab: [
      ['die Gesundheit', 'de gezondheid'], ['die Ernährung', 'de voeding'], ['die Bewegung', 'de beweging'], ['das Fitnessstudio', 'de sportschool'], ['der Verein', 'de vereniging / de club'], ['das Training', 'de training'],
      ['abnehmen', 'afvallen'], ['zunehmen', 'aankomen'], ['sich ernähren', 'zich voeden / eten'], ['sich entspannen', 'zich ontspannen'], ['sich erholen', 'bijkomen / herstellen'], ['der Stress', 'de stress'],
      ['die Gewohnheit', 'de gewoonte'], ['rauchen', 'roken'], ['verzichten auf', 'afzien van'], ['versuchen', 'proberen'], ['vorhaben', 'van plan zijn'], ['aufhören', 'ophouden'], ['anfangen', 'beginnen'],
      ['sich vornehmen', 'zich voornemen'], ['schaffen', 'redden / lukken'], ['es lohnt sich', 'het loont'], ['Lust haben', 'zin hebben'], ['fit', 'fit'], ['erschöpft', 'uitgeput'], ['regelmäßig', 'regelmatig']
    ],
    grammar: [
      { t: 'Het hele werkwoord met zu', es: 'Infinitiv mit zu',
        html: `<p>Na veel werkwoorden en uitdrukkingen volgt <b>zu + heel werkwoord</b> aan het einde, net als Nederlands <i>te</i>: <i>Ich versuche, mehr Sport <b>zu machen</b>.</i> (Ik probeer meer te sporten.)</p>
<p>Zo ook na: <i>anfangen, aufhören, vergessen, vorhaben, hoffen, Lust haben, Zeit haben, es ist schwer / wichtig / schön</i>.</p>
<p><b>Verschil met het Nederlands:</b> bij scheidbare werkwoorden komt <b>zu ertussen</b> en schrijf je alles <b>aan elkaar</b>: <i>auf<b>zu</b>hören, an<b>zu</b>fangen, ein<b>zu</b>kaufen</i> (Nederlands: <i>op te houden</i>, los).</p>
<p><b>Uitzondering:</b> <b>geen zu</b> na modale werkwoorden (<i>können, müssen, wollen …</i>), na <i>werden</i>, <i>lassen</i>, <i>gehen</i>, <i>bleiben</i> en na <i>sehen/hören</i>: <i>Ich muss gehen. Ich gehe einkaufen. Ich höre ihn singen.</i> <b>Waarom?</b> Deze werkwoorden vormen één geheel met het tweede werkwoord (ze zijn een soort hulpwerkwoord), terwijl <i>zu</i> juist een aparte «zin in de zin» markeert.</p>
<p><b>Uitzondering:</b> <i>brauchen</i> krijgt wél <i>zu</i>, maar alleen met <i>nicht</i> of <i>nur</i>: <i>Du brauchst nicht <b>zu</b> kommen.</i> (Je hoeft niet te komen.)</p>`,
        table: [['met zu', 'zonder zu'], ['Ich versuche, früh zu schlafen.', 'Ich will früh schlafen.'], ['Ich habe vor, abzunehmen.', 'Ich werde abnehmen.'], ['Es ist wichtig, viel zu trinken.', 'Man muss viel trinken.'], ['Ich habe Lust, schwimmen zu gehen.', 'Ich gehe schwimmen.']],
        sum: 'Ich versuche, mehr Sport zu machen. Ich höre auf zu rauchen. Ich fange an einzukaufen.',
        ex: [['Ich habe aufgehört zu rauchen.', 'Ik ben gestopt met roken.'], ['Hast du Lust, heute Abend mitzukommen?', 'Heb je zin om vanavond mee te komen?'], ['Es ist nicht leicht, jeden Tag früh aufzustehen.', 'Het is niet makkelijk om elke dag vroeg op te staan.']] },
      { t: 'um … zu, ohne … zu, statt … zu en damit', es: 'um … zu, ohne … zu, statt … zu, damit',
        html: `<p>Een <b>doel</b> druk je uit met <b>um … zu</b> (om … te): <i>Ich gehe ins Fitnessstudio, <b>um</b> fit <b>zu</b> bleiben.</i></p>
<p><b>Verschil met het Nederlands:</b> wij zeggen overal <i>om te</i> (<i>Het is leuk om te zwemmen</i>). In het Duits gebruik je <b>um</b> alleen als je <b>«met het doel om»</b> kunt zeggen. Anders alleen <i>zu</i>: <i>Es ist schön, <b>zu</b> schwimmen</i> (niet <s>um zu schwimmen</s>).</p>
<p><b>Uitzondering:</b> <i>um … zu</i> kan alleen als het <b>onderwerp hetzelfde</b> is. Bij twee verschillende onderwerpen moet je <b>damit</b> (opdat, zodat) + bijzin gebruiken: <i><b>Ich</b> koche gesund, <b>damit meine Kinder</b> fit bleiben.</i> <b>Waarom?</b> Een heel werkwoord met <i>zu</i> heeft geen eigen onderwerp; het leent dat van de hoofdzin.</p>
<p><b>ohne … zu</b> = zonder te: <i>Er ging, <b>ohne</b> etwas <b>zu</b> sagen.</i> <b>statt … zu</b> = in plaats van te: <i><b>Statt zu</b> lernen, sieht er fern.</i></p>`,
        table: [['', 'voorbeeld', 'Nederlands'], ['um … zu', 'Ich laufe, um abzunehmen.', 'Ik loop hard om af te vallen.'], ['damit', 'Ich spreche langsam, damit du mich verstehst.', 'Ik praat langzaam, zodat je me begrijpt.'], ['ohne … zu', 'Sie isst, ohne zu reden.', 'Ze eet zonder te praten.'], ['statt … zu', 'Statt zu fahren, gehe ich zu Fuß.', 'In plaats van te rijden ga ik lopen.']],
        ex: [['Ich fahre mit dem Rad zur Arbeit, um mich mehr zu bewegen.', 'Ik fiets naar mijn werk om meer te bewegen.'], ['Sie nimmt die Treppe, statt den Aufzug zu benutzen.', 'Ze neemt de trap in plaats van de lift te gebruiken.'], ['Ich stelle den Wecker, damit wir nicht verschlafen.', 'Ik zet de wekker zodat we ons niet verslapen.']] }
    ],
    dialogue: {
      t: 'Gute Vorsätze', place: 'München 🇩🇪',
      lines: [
        ['Lena', 'Na, Markus, wie läuft es mit deinen guten Vorsätzen?', 'Zo, Markus, hoe gaat het met je goede voornemens?'],
        ['Markus', 'Na ja. Ich habe versucht, jeden Morgen zu joggen. Nach einer Woche habe ich aufgehört.', 'Tja. Ik heb geprobeerd elke ochtend te joggen. Na een week ben ik gestopt.'],
        ['Lena', 'Warum denn?', 'Waarom dan?'],
        ['Markus', 'Es ist so schwer, um sechs Uhr aufzustehen. Und ich habe keine Lust, allein zu laufen.', 'Het is zo moeilijk om om zes uur op te staan. En ik heb geen zin om alleen te lopen.'],
        ['Lena', 'Dann komm doch in meinen Verein! Wir trainieren zweimal pro Woche, um für den Stadtlauf fit zu werden.', 'Kom dan bij mijn club! We trainen twee keer per week om fit te worden voor de stadsloop.'],
        ['Markus', 'Hm. Brauche ich dafür teure Schuhe?', 'Hm. Heb ik daar dure schoenen voor nodig?'],
        ['Lena', 'Nein, du brauchst nichts zu kaufen. Komm einfach vorbei, ohne lange nachzudenken.', 'Nee, je hoeft niets te kopen. Kom gewoon langs zonder lang na te denken.'],
        ['Markus', 'Also gut. Ich habe vor, am Donnerstag mitzukommen. Erinnerst du mich, damit ich es nicht vergesse?', 'Goed dan. Ik ben van plan donderdag mee te komen. Herinner je me eraan, zodat ik het niet vergeet?']
      ],
      q: [
        { t: 'mc', q: 'Was hat Markus versucht?', o: ['Jeden Morgen zu joggen', 'Mit dem Rauchen aufzuhören', 'Jeden Tag zu schwimmen'] },
        { t: 'mc', q: 'Warum trainiert Lenas Verein?', o: ['Um für den Stadtlauf fit zu werden', 'Um abzunehmen', 'Um neue Leute kennenzulernen'] },
        { t: 'mc', q: 'Was muss Markus kaufen?', o: ['Nichts', 'Teure Schuhe', 'Eine Uhr'] }
      ]
    },
    culture: { t: 'Vereine, Wandern en de Kur', html: `<p>Duitsland is het land van de <b>Vereine</b>: er zijn er meer dan 600.000, van voetbal en gymnastiek tot koren en volkstuinen. Wie nieuw is in een stad, maakt het snelst vrienden via een <i>Sportverein</i>.</p>
<p>Op zondag gaat men <b>wandern</b> (flinke wandelingen in de natuur, met <i>Brotzeit</i> in de rugzak) of <b>spazieren</b> (een rustig ommetje).</p>
<p>🌿 Typisch Duits is de <b>Kur</b>: een verblijf van enkele weken in een kuuroord om te herstellen, soms vergoed door de zorgverzekering. Plaatsen met <b>Bad</b> in de naam (<i>Bad Kissingen, Baden-Baden</i>) zijn zulke kuuroorden.</p>
<p>En bij een verkoudheid krijg je steevast het advies: <i>viel Tee trinken</i> en frisse lucht.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich versuche, mehr Wasser ___ trinken.', a: ['zu'], o: ['zu', 'um', 'für'], nl: 'Ik probeer meer water te drinken.', tag: 'de-zu' },
      { t: 'cloze', s: 'Ich habe keine Lust, früh ___.', a: ['aufzustehen'], o: ['aufzustehen', 'zu aufstehen', 'auf zu stehen'], nl: 'Ik heb geen zin om vroeg op te staan.', x: 'Bij scheidbare werkwoorden komt zu ertussen en schrijf je alles aan elkaar: aufzustehen.', tag: 'de-zu' },
      { t: 'cloze', s: 'Ich muss mehr Sport ___.', a: ['machen'], o: ['machen', 'zu machen', 'gemacht'], nl: 'Ik moet meer sporten.', x: 'Uitzondering: na modale werkwoorden komt geen zu; ze vormen één geheel met het tweede werkwoord.', tag: 'de-zu' },
      { t: 'cloze', s: 'Du brauchst nicht ___ kommen.', a: ['zu'], o: ['zu', 'um', 'an'], nl: 'Je hoeft niet te komen.', tag: 'de-zu' },
      { t: 'cloze', s: 'Ich jogge, ___ fit zu bleiben.', a: ['um'], o: ['um', 'damit', 'für'], nl: 'Ik jog om fit te blijven.', tag: 'de-umzu' },
      { t: 'cloze', s: 'Es ist schön, im See ___ schwimmen.', a: ['zu'], o: ['zu', 'um zu', 'für zu'], nl: 'Het is fijn om in het meer te zwemmen.', x: 'Um gebruik je alleen bij een doel («met het doel om»). Hier is geen doel, dus alleen zu.', tag: 'de-umzu' },
      { t: 'cloze', s: 'Ich koche gesund, ___ meine Kinder fit bleiben.', a: ['damit'], o: ['damit', 'um', 'ohne'], nl: 'Ik kook gezond, zodat mijn kinderen fit blijven.', x: 'Uitzondering: twee verschillende onderwerpen (ich / meine Kinder) → geen um … zu maar damit.', tag: 'de-umzu' },
      { t: 'cloze', s: 'Er ging, ___ etwas zu sagen.', a: ['ohne'], o: ['ohne', 'um', 'statt dass'], nl: 'Hij ging weg zonder iets te zeggen.', tag: 'de-umzu' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ich gehe heute schwimmen.', 'Ich gehe heute zu schwimmen.', 'Ich gehe heute um zu schwimmen.'], x: 'Uitzondering: na gehen + activiteit komt geen zu.', tag: 'de-zu' },
      { t: 'mc', q: 'Wat betekent «abnehmen»?', o: ['afvallen', 'afnemen van een toets', 'aankomen'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik ben gestopt met roken.', a: ['Ich habe aufgehört zu rauchen.', 'Ich habe aufgehört, zu rauchen.', 'Ich habe mit dem Rauchen aufgehört.'], tag: 'de-zu' },
      { t: 'tr', nl: 'Ik leer Duits om in Berlijn te werken.', a: ['Ich lerne Deutsch, um in Berlin zu arbeiten.'], tag: 'de-umzu' },
      { t: 'tr', nl: 'Heb je zin om mee te komen?', a: ['Hast du Lust mitzukommen?', 'Hast du Lust, mitzukommen?'], tag: 'de-zu' },
      { t: 'order', s: 'Ich fahre mit dem Rad, um mich mehr zu bewegen.', nl: 'Ik ga met de fiets om meer te bewegen.', tag: 'de-umzu' },
      { t: 'match', p: [['abnehmen', 'afvallen'], ['zunehmen', 'aankomen'], ['sich erholen', 'bijkomen'], ['verzichten auf', 'afzien van'], ['erschöpft', 'uitgeput']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Fünf Tipps für ein gesünderes Leben', type: 'Artikel in een gezondheidsblad',
      p: [
        ['Viele Menschen nehmen sich im Januar vor, gesünder zu leben. Aber schon im Februar haben die meisten wieder aufgehört. Der Grund: Sie versuchen, alles auf einmal zu ändern. Es ist besser, klein anzufangen.', 'Veel mensen nemen zich in januari voor om gezonder te leven. Maar al in februari zijn de meesten weer gestopt. De reden: ze proberen alles in één keer te veranderen. Het is beter om klein te beginnen.'],
        ['Erstens: Gehen Sie jeden Tag zwanzig Minuten zu Fuß, statt das Auto zu nehmen. Zweitens: Trinken Sie Wasser, ohne auf den Durst zu warten. Drittens: Legen Sie das Handy am Abend weg, um besser zu schlafen.', 'Ten eerste: loop elke dag twintig minuten in plaats van de auto te nemen. Ten tweede: drink water zonder op dorst te wachten. Ten derde: leg ’s avonds de telefoon weg om beter te slapen.'],
        ['Viertens: Suchen Sie sich einen Partner, damit das Training mehr Spaß macht. Und fünftens: Vergessen Sie nicht, sich zu erholen. Es lohnt sich nicht, jeden Tag erschöpft zu sein. Gesund leben heißt auch, Pausen zu machen.', 'Ten vierde: zoek een partner, zodat de training leuker is. En ten vijfde: vergeet niet bij te komen. Het loont niet om elke dag uitgeput te zijn. Gezond leven betekent ook pauzes nemen.']
      ],
      gl: [['auf einmal', 'in één keer'], ['zu Fuß gehen', 'lopen'], ['der Durst', 'de dorst'], ['die Pause', 'de pauze'], ['heißt', 'betekent']],
      q: [
        { t: 'mc', q: 'Warum hören viele im Februar wieder auf?', o: ['Sie versuchen, alles auf einmal zu ändern.', 'Sie haben keine Zeit.', 'Das Wetter ist zu schlecht.'] },
        { t: 'mc', q: 'Was soll man am Abend tun, um besser zu schlafen?', o: ['Das Handy weglegen', 'Viel Wasser trinken', 'Zwanzig Minuten laufen'] },
        { t: 'mc', q: 'Was ist der fünfte Tipp?', o: ['Sich erholen und Pausen machen', 'Einen Partner suchen', 'Jeden Tag trainieren'] }
      ]
    },
    say: [['Ich versuche, mehr Sport zu machen.', 'Ik probeer meer te sporten.'], ['Ich habe keine Lust, früh aufzustehen.', 'Ik heb geen zin om vroeg op te staan.'], ['Ich lerne Deutsch, um in Berlin zu arbeiten.', 'Ik leer Duits om in Berlijn te werken.'], ['Du brauchst nicht zu kommen.', 'Je hoeft niet te komen.']],
    task: { nl: 'Wat zijn jouw goede voornemens? Schrijf 4 zinnen met zu en um … zu: wat probeer je, waarmee wil je stoppen, en waarom?', model: 'Ich habe vor, dreimal pro Woche schwimmen zu gehen. Außerdem versuche ich, weniger Zucker zu essen. Ich mache das, um mich fitter zu fühlen. Es ist nicht leicht, aber es lohnt sich.' },
    scenario: { nl: 'Een vriendin vraagt naar je goede voornemens en nodigt je uit bij haar sportclub.', role: 'You are Lena from Munich, a keen runner. Ask the learner about their health resolutions, what they have tried and why they stopped, and invite them to your club. Use "zu" and "um … zu" naturally ("Hast du Lust, mitzukommen?"). B1 German, use "du".', goal: 'Vertel wat je probeert en met welk doel.' }
  });

  /* ───────────────────────── B1 · 8 ───────────────────────── */
  U({
    id: 'de-b1-08', level: 'B1', icon: '🏛️', title: 'Auf dem Amt', nl: 'Bij instanties: indirecte vragen en vaste voorzetsels',
    goals: ['Beleefd om informatie vragen bij een instantie', 'Indirecte vragen maken met ob en een vraagwoord', 'Werkwoorden met een vast voorzetsel gebruiken', 'Darauf, damit en worauf, womit begrijpen'],
    vocab: [
      ['das Amt', 'de instantie / het kantoor'], ['die Behörde', 'de overheidsinstantie'], ['das Formular', 'het formulier'], ['ausfüllen', 'invullen'], ['der Antrag', 'de aanvraag'], ['beantragen', 'aanvragen'],
      ['die Unterschrift', 'de handtekening'], ['unterschreiben', 'ondertekenen'], ['der Ausweis', 'het identiteitsbewijs'], ['der Termin', 'de afspraak'], ['die Unterlagen', 'de papieren / documenten'], ['die Frist', 'de termijn'],
      ['sich anmelden', 'zich inschrijven'], ['zuständig', 'bevoegd / verantwoordelijk'], ['warten auf', 'wachten op'], ['sich kümmern um', 'zorgen voor / regelen'], ['sich erkundigen nach', 'informeren naar'],
      ['sich ärgern über', 'zich ergeren aan'], ['denken an', 'denken aan'], ['teilnehmen an', 'deelnemen aan'], ['abhängen von', 'afhangen van'], ['sich gewöhnen an', 'wennen aan'], ['bitten um', 'vragen om'],
      ['achten auf', 'letten op'], ['Könnten Sie mir sagen, …?', 'Zou u me kunnen zeggen …?'], ['die Gebühr', 'de leges / het tarief']
    ],
    grammar: [
      { t: 'Indirecte vragen: ob en vraagwoord', es: 'Indirekte Fragen',
        html: `<p>Beleefd vragen doe je vaak met een inleiding: <i>Könnten Sie mir sagen, …? Wissen Sie, …? Ich möchte wissen, …</i> De vraag erachter wordt een <b>bijzin</b>: het werkwoord gaat naar het <b>einde</b>.</p>
<p>Met een vraagwoord: <i>Wo <b>ist</b> das Büro?</i> → <i>Wissen Sie, <b>wo</b> das Büro <b>ist</b>?</i></p>
<p>Zonder vraagwoord (ja/nee-vraag) gebruik je <b>ob</b> (of): <i><b>Brauche</b> ich einen Termin?</i> → <i>Können Sie mir sagen, <b>ob</b> ich einen Termin <b>brauche</b>?</i></p>
<p><b>Valkuil:</b> het Nederlandse <i>of</i> heeft twee vertalingen. <b>ob</b> = <i>of</i> in een indirecte vraag; <b>oder</b> = <i>of</i> bij een keuze (<i>Tee oder Kaffee?</i>). En <i>als/indien</i> is <b>wenn</b>, niet <i>ob</i>.</p>`,
        table: [['directe vraag', 'indirecte vraag'], ['Wann öffnet das Amt?', 'Wissen Sie, wann das Amt öffnet?'], ['Wo kann ich parken?', 'Können Sie mir sagen, wo ich parken kann?'], ['Ist das Formular richtig?', 'Ich bin nicht sicher, ob das Formular richtig ist.'], ['Kommt er morgen?', 'Ich weiß nicht, ob er morgen kommt.']],
        sum: 'Wissen Sie, wo das Büro ist? Ich weiß nicht, ob er kommt.',
        ex: [['Könnten Sie mir sagen, welche Unterlagen ich brauche?', 'Zou u me kunnen zeggen welke documenten ik nodig heb?'], ['Ich möchte wissen, ob ich mich online anmelden kann.', 'Ik wil graag weten of ik me online kan inschrijven.'], ['Weißt du, wie lange das dauert?', 'Weet je hoelang dat duurt?']] },
      { t: 'Vaste voorzetsels en darauf / worauf', es: 'Verben mit Präpositionen, da- und wo-',
        html: `<p>Veel werkwoorden hebben een <b>vast voorzetsel</b>, en dat is vaak een <b>ander</b> dan in het Nederlands. Leer ze als één geheel, mét de naamval: <i>warten <b>auf</b></i> + 4 (wachten <i>op</i>), <i>denken <b>an</b></i> + 4 (denken <i>aan</i>), <i>sich interessieren <b>für</b></i> + 4, <i>teilnehmen <b>an</b></i> + 3, <i>abhängen <b>von</b></i> + 3.</p>
<p><b>Uitzondering op wat je zou verwachten:</b> bij deze werkwoorden kies je de naamval niet met «beweging of plaats»; hij ligt vast per werkwoord. <i>Auf</i> en <i>über</i> hebben hier bijna altijd de <b>vierde</b> naamval: <i>Ich warte auf <b>den</b> Bus. Ich ärgere mich über <b>den</b> Lärm.</i> <b>Waarom?</b> Het voorzetsel heeft hier geen ruimtelijke betekenis meer, dus de regel wo/wohin kan niet werken.</p>
<p>Verwijs je naar een <b>ding</b>, dan gebruik je <b>da(r)- + voorzetsel</b>: <i>Ich warte <b>darauf</b>.</i> (Ik wacht erop.) Vragen: <b>wo(r)-</b>: <i><b>Worauf</b> wartest du?</i> De <b>r</b> komt ertussen als het voorzetsel met een klinker begint: <i>da<b>r</b>auf, da<b>r</b>über, wo<b>r</b>an</i>, maar <i>damit, dafür, wovon</i>.</p>
<p><b>Uitzondering:</b> bij <b>personen</b> gebruik je geen <i>da-/wo-</i>, maar voorzetsel + voornaamwoord: <i>Ich warte <b>auf ihn</b>. <b>Auf wen</b> wartest du?</i> <b>Waarom?</b> <i>Da</i> en <i>wo</i> zijn «plaatswoorden» en kunnen alleen naar zaken verwijzen; het Nederlands doet dat in nette taal ook (<i>op wie</i> tegenover <i>waarop</i>).</p>`,
        table: [['werkwoord', 'zaak', 'vraag (zaak)', 'persoon'], ['warten auf + 4', 'darauf', 'Worauf?', 'auf ihn / Auf wen?'], ['denken an + 4', 'daran', 'Woran?', 'an sie / An wen?'], ['sich ärgern über + 4', 'darüber', 'Worüber?', 'über ihn / Über wen?'], ['sich kümmern um + 4', 'darum', 'Worum?', 'um sie / Um wen?'], ['abhängen von + 3', 'davon', 'Wovon?', 'von ihm / Von wem?']],
        ex: [['Ich warte seit einer Stunde auf meinen Termin.', 'Ik wacht al een uur op mijn afspraak.'], ['Worüber ärgerst du dich? — Über die lange Wartezeit.', 'Waar erger je je aan? — Aan de lange wachttijd.'], ['Das hängt davon ab, ob Sie alle Unterlagen haben.', 'Dat hangt ervan af of u alle documenten hebt.']] }
    ],
    dialogue: {
      t: 'Im Bürgeramt', place: 'Berlin 🇩🇪',
      lines: [
        ['Sanne', 'Guten Tag. Ich bin neu in Berlin und möchte mich anmelden. Können Sie mir sagen, ob ich hier richtig bin?', 'Goedendag. Ik ben nieuw in Berlijn en wil me inschrijven. Kunt u me zeggen of ik hier goed ben?'],
        ['Beamter', 'Ja, da sind Sie hier richtig. Haben Sie einen Termin?', 'Ja, dan bent u hier goed. Hebt u een afspraak?'],
        ['Sanne', 'Ja, um zehn Uhr. Ich wusste nicht, welche Unterlagen ich brauche.', 'Ja, om tien uur. Ik wist niet welke documenten ik nodig heb.'],
        ['Beamter', 'Ihren Ausweis und die Bestätigung des Vermieters. Haben Sie daran gedacht?', 'Uw identiteitsbewijs en de verklaring van de verhuurder. Hebt u daaraan gedacht?'],
        ['Sanne', 'Den Ausweis habe ich. Auf die Bestätigung warte ich noch.', 'Het identiteitsbewijs heb ik. Op de verklaring wacht ik nog.'],
        ['Beamter', 'Ohne sie geht es leider nicht. Bitte kümmern Sie sich darum und kommen Sie wieder.', 'Zonder gaat het helaas niet. Regelt u dat alstublieft en komt u terug.'],
        ['Sanne', 'Wissen Sie, wie lange ich dann auf einen neuen Termin warten muss?', 'Weet u hoelang ik dan op een nieuwe afspraak moet wachten?'],
        ['Beamter', 'Das hängt vom Bezirk ab. Meistens zwei bis drei Wochen.', 'Dat hangt van het stadsdeel af. Meestal twee tot drie weken.'],
        ['Sanne', 'Drei Wochen! Daran muss ich mich wohl gewöhnen.', 'Drie weken! Daar moet ik zeker aan wennen.']
      ],
      q: [
        { t: 'mc', q: 'Was möchte Sanne im Bürgeramt machen?', o: ['Sich anmelden', 'Einen Ausweis beantragen', 'Ein Auto anmelden'] },
        { t: 'mc', q: 'Worauf wartet Sanne noch?', o: ['Auf die Bestätigung des Vermieters', 'Auf ihren Ausweis', 'Auf einen Brief vom Amt'] },
        { t: 'mc', q: 'Wovon hängt die Wartezeit ab?', o: ['Vom Bezirk', 'Vom Wetter', 'Von der Gebühr'] }
      ]
    },
    culture: { t: 'Anmeldung, Termin en papier', html: `<p>Wie in Duitsland gaat wonen, moet zich binnen twee weken <b>anmelden</b> bij het <i>Bürgeramt</i> of <i>Einwohnermeldeamt</i>. Daarvoor heb je de <b>Wohnungsgeberbestätigung</b> van je verhuurder nodig. Zonder <i>Anmeldung</i> geen bankrekening, geen telefooncontract.</p>
<p>De Duitse bureaucratie is grondig en houdt van <b>papier</b>: brieven per post, een stempel, een handtekening. Veel gaat nog niet online, en een fax is geen museumstuk.</p>
<p>🗂️ Bewaar alles in een <b>Ordner</b> (ordner): Duitsers staan erom bekend dat ze elke brief netjes afleggen.</p>
<p>Een nuttig woord: <b>die Frist</b>. Een termijn missen kan echt gevolgen hebben, dus reageer op tijd.</p>` },
    ex: [
      { t: 'cloze', s: 'Wissen Sie, wo das Büro ___?', a: ['ist'], o: ['ist', 'ist das', 'sein'], nl: 'Weet u waar het kantoor is?', tag: 'de-indirekt' },
      { t: 'cloze', s: 'Können Sie mir sagen, ___ ich einen Termin brauche?', a: ['ob'], o: ['ob', 'oder', 'wenn'], nl: 'Kunt u me zeggen of ik een afspraak nodig heb?', x: 'Of in een indirecte vraag = ob. Oder is «of» bij een keuze; wenn is «als».', tag: 'de-indirekt' },
      { t: 'cloze', s: 'Ich weiß nicht, wann der Zug ___.', a: ['abfährt'], o: ['abfährt', 'fährt ab', 'abfahren'], nl: 'Ik weet niet wanneer de trein vertrekt.', tag: 'de-indirekt' },
      { t: 'cloze', s: 'Ich warte ___ den Bus.', a: ['auf'], o: ['auf', 'für', 'an'], nl: 'Ik wacht op de bus.', tag: 'de-praepverb' },
      { t: 'cloze', s: 'Ich denke oft ___ meine Familie.', a: ['an'], o: ['an', 'auf', 'über'], nl: 'Ik denk vaak aan mijn familie.', tag: 'de-praepverb' },
      { t: 'cloze', s: 'Er ärgert sich über ___ Lärm.', a: ['den'], o: ['den', 'dem', 'der'], nl: 'Hij ergert zich aan het lawaai.', x: 'Uitzondering: bij een vast voorzetsel ligt de naamval vast; über heeft hier de vierde naamval, omdat het geen plaats meer aanduidt.', tag: 'de-praepverb' },
      { t: 'cloze', s: 'Das hängt ___ Wetter ab.', a: ['vom'], o: ['vom', 'am', 'auf das'], nl: 'Dat hangt van het weer af.', tag: 'de-praepverb' },
      { t: 'cloze', s: '___ wartest du? — Auf den Bus.', a: ['Worauf'], o: ['Worauf', 'Wofür', 'Auf wen'], nl: 'Waar wacht je op? — Op de bus.', tag: 'de-da' },
      { t: 'cloze', s: 'Der Brief kommt morgen. Ich warte schon lange ___.', a: ['darauf'], o: ['darauf', 'auf ihm', 'dafür'], nl: 'De brief komt morgen. Ik wacht er al lang op.', tag: 'de-da' },
      { t: 'mc', q: 'Je wacht op een persoon. Wat vraag je?', o: ['Auf wen wartest du?', 'Worauf wartest du?', 'Wofür wartest du?'], x: 'Uitzondering: bij personen geen wo-/da-, maar voorzetsel + voornaamwoord.', tag: 'de-da' },
      { t: 'mc', q: 'Welke is goed?', o: ['Ich interessiere mich für Geschichte.', 'Ich interessiere mich in Geschichte.', 'Ich interessiere mich an Geschichte.'], tag: 'de-praepverb' },
      { t: 'tr', nl: 'Weet u hoe laat het is?', a: ['Wissen Sie, wie spät es ist?', 'Wissen Sie, wie viel Uhr es ist?'], tag: 'de-indirekt' },
      { t: 'tr', nl: 'Ik weet niet of hij komt.', a: ['Ich weiß nicht, ob er kommt.'], tag: 'de-indirekt' },
      { t: 'tr', nl: 'Waar denk je aan?', a: ['Woran denkst du?'], tag: 'de-da' },
      { t: 'order', s: 'Könnten Sie mir sagen, wo ich das Formular bekomme?', nl: 'Zou u me kunnen zeggen waar ik het formulier krijg?', tag: 'de-indirekt' },
      { t: 'match', p: [['der Antrag', 'de aanvraag'], ['die Unterschrift', 'de handtekening'], ['die Frist', 'de termijn'], ['ausfüllen', 'invullen'], ['zuständig', 'bevoegd']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Neu in Deutschland: die ersten Schritte', type: 'Informatiefolder',
      p: [
        ['Sie sind gerade nach Deutschland gezogen? Dann fragen Sie sich sicher, was Sie zuerst erledigen müssen. Das Wichtigste ist die Anmeldung. Innerhalb von zwei Wochen müssen Sie dem Bürgeramt mitteilen, wo Sie wohnen.', 'U bent net naar Duitsland verhuisd? Dan vraagt u zich vast af wat u eerst moet regelen. Het belangrijkste is de inschrijving. Binnen twee weken moet u het Bürgeramt laten weten waar u woont.'],
        ['Erkundigen Sie sich rechtzeitig nach einem Termin, denn darauf muss man in großen Städten oft lange warten. Achten Sie darauf, dass Sie alle Unterlagen dabeihaben: Ausweis, Mietvertrag und die Bestätigung des Vermieters.', 'Informeer op tijd naar een afspraak, want daarop moet je in grote steden vaak lang wachten. Let erop dat u alle documenten bij u hebt: identiteitsbewijs, huurcontract en de verklaring van de verhuurder.'],
        ['Danach können Sie ein Konto eröffnen und sich um eine Krankenversicherung kümmern. Ob Sie auch eine Steuernummer brauchen, hängt von Ihrer Arbeit ab. Wenn Sie nicht wissen, welches Amt zuständig ist, hilft Ihnen die Telefonnummer 115.', 'Daarna kunt u een rekening openen en een zorgverzekering regelen. Of u ook een belastingnummer nodig hebt, hangt van uw werk af. Als u niet weet welke instantie bevoegd is, helpt het telefoonnummer 115 u.']
      ],
      gl: [['erledigen', 'afhandelen / regelen'], ['mitteilen', 'meedelen'], ['rechtzeitig', 'op tijd'], ['das Konto', 'de rekening'], ['die Krankenversicherung', 'de zorgverzekering']],
      q: [
        { t: 'mc', q: 'Was muss man zuerst erledigen?', o: ['Die Anmeldung', 'Ein Konto eröffnen', 'Eine Steuernummer beantragen'] },
        { t: 'mc', q: 'Worauf muss man in großen Städten oft lange warten?', o: ['Auf einen Termin', 'Auf den Mietvertrag', 'Auf den Ausweis'] },
        { t: 'mc', q: 'Wovon hängt ab, ob man eine Steuernummer braucht?', o: ['Von der Arbeit', 'Vom Alter', 'Von der Stadt'] }
      ]
    },
    say: [['Können Sie mir sagen, wo das Büro ist?', 'Kunt u me zeggen waar het kantoor is?'], ['Ich weiß nicht, ob ich einen Termin brauche.', 'Ik weet niet of ik een afspraak nodig heb.'], ['Worauf warten Sie?', 'Waar wacht u op?'], ['Das hängt vom Wetter ab.', 'Dat hangt van het weer af.']],
    task: { nl: 'Je belt een Duitse instantie. Stel drie beleefde indirecte vragen (openingstijden, documenten, kosten) en gebruik één werkwoord met vast voorzetsel (4 zinnen).', model: 'Guten Tag, könnten Sie mir sagen, wann das Bürgeramt geöffnet ist? Ich möchte außerdem wissen, welche Unterlagen ich mitbringen muss. Wissen Sie, ob die Anmeldung etwas kostet? Ich warte seit drei Wochen auf einen Termin.' },
    scenario: { nl: 'Je schrijft je in bij het Bürgeramt in Berlijn.', role: 'You are an official at the Bürgeramt in Berlin: correct, a bit formal, but helpful. The learner wants to register their address. Ask for documents, explain what is missing and what to do, answer their indirect questions about waiting times and fees. B1 German, use "Sie".', goal: 'Stel beleefde indirecte vragen en regel je inschrijving.' }
  });

  /* ───────────────────────── B1 · 9 ───────────────────────── */
  U({
    id: 'de-b1-09', level: 'B1', icon: '🧳', title: 'Pannen unterwegs', nl: 'Pech onderweg: wat was er eerst gebeurd?',
    goals: ['Vertellen wat er misging op reis', 'Het Plusquamperfekt gebruiken voor wat eerder gebeurde', 'Tijdsbijzinnen maken met nachdem, bevor, während en sobald', 'Een klacht indienen of om hulp vragen'],
    vocab: [
      ['die Panne', 'de pech / de storing'], ['die Verspätung', 'de vertraging'], ['der Anschluss', 'de aansluiting'], ['verpassen', 'missen (trein, bus)'], ['ausfallen', 'uitvallen'], ['der Streik', 'de staking'],
      ['das Gepäck', 'de bagage'], ['der Koffer', 'de koffer'], ['verlieren', 'verliezen'], ['stehlen', 'stelen'], ['der Diebstahl', 'de diefstal'], ['die Polizei', 'de politie'], ['der Unfall', 'het ongeluk'],
      ['der Stau', 'de file'], ['tanken', 'tanken'], ['die Werkstatt', 'de garage (werkplaats)'], ['die Versicherung', 'de verzekering'], ['die Entschädigung', 'de schadevergoeding'], ['sich verlaufen', 'verdwalen (te voet)'],
      ['sich verfahren', 'verdwalen (met auto)'], ['umsteigen', 'overstappen'], ['buchen', 'boeken'], ['stornieren', 'annuleren'], ['nachdem', 'nadat'], ['bevor', 'voordat'], ['sobald', 'zodra'], ['zum Glück', 'gelukkig']
    ],
    grammar: [
      { t: 'Het Plusquamperfekt: hatte / war + deelwoord', es: 'Das Plusquamperfekt',
        html: `<p>Voor iets wat <b>vóór</b> een ander moment in het verleden gebeurde, gebruik je het <b>Plusquamperfekt</b>: de verleden tijd van <i>haben</i> of <i>sein</i> + voltooid deelwoord. Net als Nederlands <i>had gedaan / was gegaan</i>.</p>
<p><i>Als ich am Bahnhof ankam, <b>war</b> der Zug schon <b>abgefahren</b>.</i> (… was de trein al vertrokken.)<br><i>Ich <b>hatte</b> mein Ticket zu Hause <b>vergessen</b>.</i></p>
<p>De keuze tussen <i>hatte</i> en <i>war</i> is dezelfde als in het Perfekt: <b>war</b> bij beweging en verandering (<i>war gegangen, war eingeschlafen</i>) en bij <i>sein, bleiben, werden, passieren</i>; anders <b>hatte</b>.</p>
<p><b>Verschil met het Nederlands:</b> <i>vergeten</i> en <i>beginnen</i> gaan in het Duits met <b>haben</b>: <i>Ich <b>hatte</b> es vergessen</i> (Nederlands: ik <i>was</i> het vergeten), <i>Der Film <b>hatte</b> schon angefangen</i> (… <i>was</i> al begonnen). <b>Waarom?</b> Ze drukken in het Duits geen beweging of toestandsverandering van het onderwerp uit, en alleen daar hoort <i>sein</i> bij.</p>`,
        table: [['', 'met haben', 'met sein'], ['ich', 'hatte gebucht', 'war gefahren'], ['du', 'hattest gebucht', 'warst gefahren'], ['er / sie / es', 'hatte gebucht', 'war gefahren'], ['wir', 'hatten gebucht', 'waren gefahren'], ['ihr', 'hattet gebucht', 'wart gefahren'], ['sie / Sie', 'hatten gebucht', 'waren gefahren']],
        sum: 'Ich hatte gebucht. Der Zug war schon abgefahren.',
        ex: [['Als wir ankamen, hatte das Restaurant schon geschlossen.', 'Toen we aankwamen, was het restaurant al gesloten.'], ['Ich merkte, dass ich meinen Pass vergessen hatte.', 'Ik merkte dat ik mijn paspoort was vergeten.'], ['Sie war noch nie in Wien gewesen.', 'Ze was nog nooit in Wenen geweest.']] },
      { t: 'nachdem, bevor, während, sobald', es: 'Temporale Nebensätze',
        html: `<p>Tijdsbijzinnen beginnen met <b>nachdem</b> (nadat), <b>bevor</b> (voordat), <b>während</b> (terwijl), <b>sobald</b> (zodra), <b>bis</b> (totdat), <b>seit</b> (sinds). Het werkwoord staat aan het einde.</p>
<p><b>Nachdem</b> vraagt een <b>tijdsprong</b>: de bijzin staat één tijd verder terug dan de hoofdzin. <i><b>Nachdem</b> ich gegessen <b>hatte</b>, <b>ging</b> ich ins Bett.</i> (Plusquamperfekt + Präteritum) of <i>Nachdem ich gegessen <b>habe</b>, <b>gehe</b> ich ins Bett.</i> (Perfekt + tegenwoordige tijd)</p>
<p><b>Uitzondering:</b> <i>nachdem</i> is het enige voegwoord dat dit <b>verplicht</b>; bij <i>bevor</i> staat gewoon dezelfde tijd in beide delen: <i>Bevor ich ins Bett <b>ging</b>, <b>putzte</b> ich die Zähne.</i> <b>Waarom?</b> «Nadat» betekent letterlijk dat het ene al afgelopen is voordat het andere begint; het Duits laat dat consequent in de werkwoordstijd zien.</p>
<p><b>Let op:</b> <b>während</b> is zowel voegwoord (<i>terwijl</i> + bijzin) als voorzetsel (<i>tijdens</i> + 2e naamval): <i>während ich schlief</i> ↔ <i>während des Fluges</i>. En <b>nach</b> (voorzetsel, na) is iets anders dan <b>nachdem</b> (voegwoord, nadat): <i>nach dem Essen</i> ↔ <i>nachdem wir gegessen hatten</i>.</p>`,
        table: [['voegwoord', 'Nederlands', 'voorbeeld'], ['nachdem', 'nadat', 'Nachdem wir gelandet waren, suchten wir ein Taxi.'], ['bevor', 'voordat', 'Bevor du fährst, musst du tanken.'], ['während', 'terwijl', 'Während ich wartete, las ich ein Buch.'], ['sobald', 'zodra', 'Ich rufe an, sobald ich ankomme.'], ['bis', 'totdat', 'Warte hier, bis ich zurückkomme.']],
        ex: [['Nachdem wir zwei Stunden gewartet hatten, kam endlich der Bus.', 'Nadat we twee uur hadden gewacht, kwam eindelijk de bus.'], ['Bevor wir losfuhren, hatte ich das Hotel gebucht.', 'Voordat we vertrokken, had ik het hotel geboekt.'], ['Sobald ich mein Gepäck habe, schreibe ich dir.', 'Zodra ik mijn bagage heb, schrijf ik je.']] }
    ],
    dialogue: {
      t: 'Wo ist mein Koffer?', place: 'Frankfurt 🇩🇪',
      lines: [
        ['Sanne', 'Entschuldigung, mein Koffer ist nicht angekommen. Ich bin aus Amsterdam gekommen.', 'Neemt u me niet kwalijk, mijn koffer is niet aangekomen. Ik kom uit Amsterdam.'],
        ['Mitarbeiter', 'Das tut mir leid. Hatten Sie einen direkten Flug?', 'Dat spijt me. Had u een rechtstreekse vlucht?'],
        ['Sanne', 'Nein. Der erste Flug war ausgefallen, deshalb musste ich in Düsseldorf umsteigen.', 'Nee. De eerste vlucht was uitgevallen, daarom moest ik in Düsseldorf overstappen.'],
        ['Mitarbeiter', 'Verstehe. Hatten Sie den Koffer schon aufgegeben, bevor der Flug gestrichen wurde?', 'Ik begrijp het. Had u de koffer al afgegeven voordat de vlucht werd geschrapt?'],
        ['Sanne', 'Ja. Nachdem ich ihn aufgegeben hatte, kam die Durchsage.', 'Ja. Nadat ik hem had afgegeven, kwam de omroep.'],
        ['Mitarbeiter', 'Dann ist er wahrscheinlich in Amsterdam geblieben. Füllen Sie bitte dieses Formular aus.', 'Dan is hij waarschijnlijk in Amsterdam gebleven. Vult u alstublieft dit formulier in.'],
        ['Sanne', 'Und wann bekomme ich ihn?', 'En wanneer krijg ik hem?'],
        ['Mitarbeiter', 'Sobald er hier ist, bringen wir ihn in Ihr Hotel. Meistens dauert das einen Tag.', 'Zodra hij hier is, brengen we hem naar uw hotel. Meestal duurt dat een dag.'],
        ['Sanne', 'Zum Glück hatte ich die wichtigsten Sachen ins Handgepäck gepackt.', 'Gelukkig had ik de belangrijkste spullen in mijn handbagage gedaan.']
      ],
      q: [
        { t: 'mc', q: 'Warum musste Sanne umsteigen?', o: ['Der erste Flug war ausgefallen.', 'Sie hatte den Flug verpasst.', 'Sie wollte Düsseldorf sehen.'] },
        { t: 'mc', q: 'Wo ist der Koffer wahrscheinlich?', o: ['In Amsterdam', 'In Düsseldorf', 'Im Hotel'] },
        { t: 'mc', q: 'Was hatte Sanne zum Glück gemacht?', o: ['Die wichtigsten Sachen ins Handgepäck gepackt', 'Eine Versicherung gebucht', 'Ein zweites Ticket gekauft'] }
      ]
    },
    culture: { t: 'De Deutsche Bahn en de Stau', html: `<p>Het cliché van de stipte Duitse trein klopt niet meer: de <b>Deutsche Bahn</b> staat juist bekend om <b>Verspätungen</b>. De zin <i>«Grund dafür ist eine Störung im Betriebsablauf»</i> kent iedere reiziger. Bij meer dan 60 minuten vertraging krijg je 25 procent van de ticketprijs terug, bij 120 minuten de helft.</p>
<p>Met het <b>Deutschlandticket</b> reis je voor een vast maandbedrag met alle regionale treinen, bussen en trams in het hele land (niet met de ICE).</p>
<p>🚗 Op de Autobahn hoor je op de radio de <b>Staumeldungen</b>. Bij een file moet iedereen een <b>Rettungsgasse</b> vormen: links naar links, de rest naar rechts, zodat hulpdiensten erdoor kunnen. Dat is verplicht.</p>
<p>Pech? De gele engelen van de <b>ADAC</b> zijn de Duitse wegenwacht.</p>` },
    ex: [
      { t: 'cloze', s: 'Als ich ankam, ___ der Zug schon abgefahren.', a: ['war'], o: ['war', 'hatte', 'ist'], nl: 'Toen ik aankwam, was de trein al vertrokken.', tag: 'de-plusq' },
      { t: 'cloze', s: 'Ich ___ mein Ticket zu Hause vergessen.', a: ['hatte'], o: ['hatte', 'war', 'habe'], nl: 'Ik was mijn kaartje thuis vergeten.', x: 'Verschil met het Nederlands: vergessen gaat met haben (hatte vergessen), omdat het geen beweging of verandering van het onderwerp is.', tag: 'de-plusq' },
      { t: 'cloze', s: 'Der Film ___ schon angefangen.', a: ['hatte'], o: ['hatte', 'war', 'wurde'], nl: 'De film was al begonnen.', tag: 'de-plusq' },
      { t: 'cloze', s: 'Sie ___ noch nie in Berlin gewesen.', a: ['war'], o: ['war', 'hatte', 'wurde'], nl: 'Ze was nog nooit in Berlijn geweest.', tag: 'de-plusq' },
      { t: 'cloze', s: 'Nachdem wir gegessen ___, gingen wir spazieren.', a: ['hatten'], o: ['hatten', 'haben', 'aßen'], nl: 'Nadat we hadden gegeten, gingen we wandelen.', x: 'Uitzondering: nachdem verplicht een tijdsprong: Plusquamperfekt in de bijzin, Präteritum in de hoofdzin.', tag: 'de-nachdem' },
      { t: 'cloze', s: '___ du losfährst, musst du tanken.', a: ['Bevor'], o: ['Bevor', 'Nachdem', 'Vor'], nl: 'Voordat je vertrekt, moet je tanken.', tag: 'de-nachdem' },
      { t: 'cloze', s: 'Ich rufe dich an, ___ ich im Hotel bin.', a: ['sobald'], o: ['sobald', 'bevor', 'während'], nl: 'Ik bel je zodra ik in het hotel ben.', tag: 'de-nachdem' },
      { t: 'cloze', s: '___ ich wartete, las ich die Zeitung.', a: ['Während'], o: ['Während', 'Nachdem', 'Wegen'], nl: 'Terwijl ik wachtte, las ik de krant.', tag: 'de-nachdem' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Nach dem Essen gingen wir nach Hause.', 'Nachdem Essen gingen wir nach Hause.', 'Nachdem dem Essen gingen wir nach Hause.'], x: 'Nach = voorzetsel (na het eten). Nachdem = voegwoord en heeft een hele bijzin met werkwoord nodig.', tag: 'de-nachdem' },
      { t: 'mc', q: 'Wat betekent «den Anschluss verpassen»?', o: ['de aansluiting missen', 'de aansluiting passen', 'de stekker verliezen'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik had het hotel al geboekt.', a: ['Ich hatte das Hotel schon gebucht.', 'Ich hatte das Hotel bereits gebucht.'], tag: 'de-plusq' },
      { t: 'tr', nl: 'De trein was al vertrokken.', a: ['Der Zug war schon abgefahren.', 'Der Zug war bereits abgefahren.'], tag: 'de-plusq' },
      { t: 'tr', nl: 'Zodra ik aankom, bel ik je.', a: ['Sobald ich ankomme, rufe ich dich an.'], tag: 'de-nachdem' },
      { t: 'order', s: 'Nachdem wir zwei Stunden gewartet hatten, kam endlich der Bus.', nl: 'Nadat we twee uur hadden gewacht, kwam eindelijk de bus.', tag: 'de-nachdem' },
      { t: 'match', p: [['die Verspätung', 'de vertraging'], ['der Stau', 'de file'], ['das Gepäck', 'de bagage'], ['stornieren', 'annuleren'], ['umsteigen', 'overstappen']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Die schlimmste Reise meines Lebens', type: 'Reisblog',
      p: [
        ['Letzten Sommer wollten wir mit dem Zug von Utrecht nach Wien fahren. Ich hatte alles perfekt geplant und die Tickets drei Monate vorher gebucht. Aber schon in Köln begannen die Probleme: Unser Anschlusszug war ausgefallen.', 'Afgelopen zomer wilden we met de trein van Utrecht naar Wenen reizen. Ik had alles perfect gepland en de kaartjes drie maanden van tevoren geboekt. Maar al in Keulen begonnen de problemen: onze aansluitende trein was uitgevallen.'],
        ['Nachdem wir zwei Stunden gewartet hatten, stiegen wir in einen anderen Zug. Während wir schliefen, hielt er lange in Nürnberg. Als wir aufwachten, merkte ich, dass jemand meine Tasche gestohlen hatte. Darin waren mein Handy und mein Geld gewesen.', 'Nadat we twee uur hadden gewacht, stapten we in een andere trein. Terwijl we sliepen, stond hij lang stil in Neurenberg. Toen we wakker werden, merkte ik dat iemand mijn tas had gestolen. Daarin hadden mijn telefoon en mijn geld gezeten.'],
        ['Bevor wir weiterfahren konnten, mussten wir zur Polizei. Wir kamen erst um Mitternacht in Wien an. Das Hotel hatte unser Zimmer schon an andere Gäste gegeben. Zum Glück fand der Mann an der Rezeption noch ein kleines Zimmer für uns. Sobald ich im Bett lag, schlief ich ein.', 'Voordat we verder konden reizen, moesten we naar de politie. We kwamen pas om middernacht in Wenen aan. Het hotel had onze kamer al aan andere gasten gegeven. Gelukkig vond de man bij de receptie nog een kleine kamer voor ons. Zodra ik in bed lag, viel ik in slaap.']
      ],
      gl: [['vorher', 'van tevoren'], ['aufwachen', 'wakker worden'], ['merken', 'merken'], ['die Mitternacht', 'de middernacht'], ['einschlafen', 'in slaap vallen']],
      q: [
        { t: 'mc', q: 'Was passierte in Köln?', o: ['Der Anschlusszug war ausgefallen.', 'Die Tasche wurde gestohlen.', 'Das Hotel war voll.'] },
        { t: 'mc', q: 'Was hatte jemand gestohlen, während sie schliefen?', o: ['Die Tasche mit Handy und Geld', 'Die Tickets', 'Den Koffer'] },
        { t: 'mc', q: 'Was hatte das Hotel gemacht?', o: ['Das Zimmer an andere Gäste gegeben', 'Die Buchung storniert', 'Die Polizei gerufen'] }
      ]
    },
    say: [['Der Zug war schon abgefahren.', 'De trein was al vertrokken.'], ['Ich hatte mein Ticket vergessen.', 'Ik was mijn kaartje vergeten.'], ['Nachdem wir gegessen hatten, gingen wir spazieren.', 'Nadat we hadden gegeten, gingen we wandelen.'], ['Sobald ich ankomme, rufe ich dich an.', 'Zodra ik aankom, bel ik je.']],
    task: { nl: 'Vertel over een reis waarbij iets misging. Gebruik het Plusquamperfekt en minstens twee van: nachdem, bevor, während, sobald (5 zinnen).', model: 'Vor zwei Jahren flog ich nach München. Als ich am Flughafen ankam, merkte ich, dass ich meinen Pass zu Hause vergessen hatte. Nachdem ich meine Schwester angerufen hatte, brachte sie ihn mir mit dem Taxi. Während ich wartete, war ich sehr nervös. Zum Glück hatte der Flug Verspätung.' },
    scenario: { nl: 'Je koffer is niet aangekomen op het vliegveld van Frankfurt.', role: 'You are an employee at the lost-luggage desk at Frankfurt airport. The learner\'s suitcase has not arrived. Ask about the flight, what happened before (connection, check-in), what the suitcase looks like, and explain the procedure ("Sobald er hier ist, …"). B1 German, use "Sie".', goal: 'Leg uit wat er was gebeurd en regel een oplossing.' }
  });

  /* ───────────────────────── B1 · 10 ───────────────────────── */
  U({
    id: 'de-b1-10', level: 'B1', icon: '🔮', title: 'Die Zukunft', nl: 'De toekomst: werden, je … desto en lassen',
    goals: ['Over plannen, voorspellingen en techniek praten', 'De toekomende tijd met werden gebruiken voor voorspellingen', 'Verbanden leggen met je … desto', 'Lassen en de zwakke mannelijke woorden herkennen'],
    vocab: [
      ['die Zukunft', 'de toekomst'], ['die Vergangenheit', 'het verleden'], ['die Gegenwart', 'het heden'], ['die Technik', 'de techniek'], ['die künstliche Intelligenz', 'de kunstmatige intelligentie'], ['der Roboter', 'de robot'],
      ['die Erfindung', 'de uitvinding'], ['erfinden', 'uitvinden'], ['entwickeln', 'ontwikkelen'], ['die Entwicklung', 'de ontwikkeling'], ['der Fortschritt', 'de vooruitgang'], ['die Forschung', 'het onderzoek'],
      ['der Wissenschaftler', 'de wetenschapper'], ['der Mensch', 'de mens'], ['der Student', 'de student'], ['der Experte', 'de expert'], ['vermuten', 'vermoeden'], ['vorhersagen', 'voorspellen'], ['die Prognose', 'de prognose'],
      ['sich verändern', 'veranderen'], ['ersetzen', 'vervangen'], ['lassen', 'laten'], ['reparieren lassen', 'laten repareren'], ['je … desto', 'hoe … hoe'], ['wohl', 'waarschijnlijk / wel'], ['bestimmt', 'vast en zeker']
    ],
    grammar: [
      { t: 'Futur I en je … desto', es: 'Futur I und je … desto',
        html: `<p>De toekomende tijd is <b>werden + heel werkwoord</b>: <i>In zwanzig Jahren <b>werden</b> die meisten Autos elektrisch <b>fahren</b>.</i></p>
<p><b>Verschil met het Nederlands:</b> waar wij <i>zullen</i> of <i>gaan</i> zeggen, gebruikt het Duits <b>werden</b>, nooit <s>gehen</s> en nooit <s>sollen</s>: <i>Ik ga morgen werken</i> = <i>Ich <b>arbeite</b> morgen</i> of <i>Ich <b>werde</b> morgen arbeiten</i>. Voor gewone plannen volstaat de tegenwoordige tijd + tijdwoord; <i>werden</i> gebruik je vooral voor <b>voorspellingen</b>, <b>beloftes</b> en <b>vermoedens</b>.</p>
<p>Met <b>wohl</b> druk je een vermoeden over <b>nu</b> uit: <i>Er <b>wird wohl</b> krank <b>sein</b>.</i> (Hij zal wel ziek zijn.)</p>
<p><b>Je … desto</b> (hoe … hoe) verbindt twee vergrotende trappen. <b>Uitzondering op de gewone woordvolgorde:</b> na <i>je</i> staat het werkwoord aan het <b>einde</b> (bijzin), na <i>desto</i> + vergrotende trap volgt <b>meteen</b> het werkwoord: <i><b>Je</b> mehr ich <b>lerne</b>, <b>desto</b> besser <b>spreche</b> ich.</i> <b>Waarom?</b> Het <i>je</i>-deel is de voorwaarde (een bijzin), het <i>desto</i>-deel de hoofdzin, waarin «desto + bijvoeglijk naamwoord» samen de eerste plaats innemen.</p>`,
        table: [['', 'werden', 'voorbeeld'], ['ich', 'werde', 'Ich werde dich nie vergessen.'], ['du', 'wirst', 'Du wirst es schaffen.'], ['er / sie / es', 'wird', 'Es wird morgen regnen.'], ['wir', 'werden', 'Wir werden sehen.'], ['ihr', 'werdet', 'Ihr werdet staunen.'], ['sie / Sie', 'werden', 'Sie werden wohl zu Hause sein.']],
        sum: 'Ich werde lernen. Es wird regnen. Je mehr ich lerne, desto besser spreche ich.',
        ex: [['Roboter werden viele Arbeiten übernehmen.', 'Robots zullen veel werk overnemen.'], ['Je älter ich werde, desto weniger schlafe ich.', 'Hoe ouder ik word, hoe minder ik slaap.'], ['Sie wird wohl noch im Büro sein.', 'Ze zal wel nog op kantoor zijn.']] },
      { t: 'lassen en zwakke mannelijke woorden', es: 'lassen und die n-Deklination',
        html: `<p><b>Lassen</b> (du lässt, er lässt; ließ; gelassen) heeft drie betekenissen: <b>laten doen</b> (<i>Ich lasse mein Auto reparieren</i>), <b>toestaan</b> (<i>Lass mich schlafen!</i>) en <b>laten liggen</b> (<i>Ich lasse die Tasche hier</i>). Het tweede werkwoord staat zonder <i>zu</i> aan het einde.</p>
<p><b>Uitzondering:</b> in het Perfekt met een tweede werkwoord wordt het deelwoord niet <i>gelassen</i> maar blijft het <b>lassen</b>: <i>Ich habe mein Auto reparieren <b>lassen</b>.</i> <b>Waarom?</b> Net als de modale werkwoorden gedraagt <i>lassen</i> zich als hulpwerkwoord; twee werkwoorden achter elkaar blijven dan allebei in de hele vorm (Nederlands doet dat ook: <i>heb laten repareren</i>).</p>
<p><b>Zwakke mannelijke woorden (n-Deklination).</b> <b>Uitzondering:</b> een groep mannelijke woorden krijgt in álle naamvallen behalve de eerste enkelvoud <b>-(e)n</b>: <i>der Mensch → den Mensch<b>en</b>, dem Menschen, des Menschen</i>. Het gaat om woorden op <b>-e</b> voor personen en dieren (<i>der Kollege, der Kunde, der Junge, der Experte, der Löwe</i>), woorden op <b>-ent, -ant, -ist, -at</b> (<i>der Student, der Tourist, der Präsident</i>) en een paar losse (<i>der Mensch, der Herr, der Nachbar</i>). <b>Waarom?</b> Het is een restant van een oude verbuigingsklasse; vandaar ook <i>Herr<b>n</b> Müller</i> op een envelop.</p>`,
        table: [['', 'gewoon woord', 'zwak woord'], ['1e naamval', 'der Lehrer', 'der Student'], ['4e naamval', 'den Lehrer', 'den Studenten'], ['3e naamval', 'dem Lehrer', 'dem Studenten'], ['2e naamval', 'des Lehrers', 'des Studenten']],
        ex: [['Ich lasse mir morgen die Haare schneiden.', 'Ik laat morgen mijn haar knippen.'], ['Wir haben einen Experten gefragt.', 'We hebben een expert gevraagd.'], ['Kennst du den Jungen dort?', 'Ken je die jongen daar?']] }
    ],
    dialogue: {
      t: 'In zwanzig Jahren', place: 'Stuttgart 🇩🇪',
      lines: [
        ['Mila', 'Was glaubst du, wie werden wir in zwanzig Jahren leben?', 'Wat denk je, hoe zullen we over twintig jaar leven?'],
        ['Jonas', 'Ich vermute, dass Roboter die meisten Arbeiten übernehmen werden.', 'Ik vermoed dat robots het meeste werk zullen overnemen.'],
        ['Mila', 'Das glaube ich nicht. Einen Menschen kann man nicht einfach ersetzen.', 'Dat geloof ik niet. Een mens kun je niet zomaar vervangen.'],
        ['Jonas', 'Vielleicht nicht den Arzt, aber den Kassierer bestimmt. Je besser die Technik wird, desto weniger müssen wir arbeiten.', 'Misschien niet de arts, maar de kassamedewerker zeker wel. Hoe beter de techniek wordt, hoe minder we hoeven te werken.'],
        ['Mila', 'Oder desto mehr! Ich habe gestern einen Experten im Radio gehört. Er sagt, es werden neue Berufe entstehen.', 'Of juist hoe meer! Ik heb gisteren een expert op de radio gehoord. Hij zegt dat er nieuwe beroepen zullen ontstaan.'],
        ['Jonas', 'Mag sein. Ich lasse mich überraschen.', 'Kan zijn. Ik laat me verrassen.'],
        ['Mila', 'Und wirst du dann endlich dein Deutsch perfekt sprechen?', 'En zul je dan eindelijk je Duits perfect spreken?'],
        ['Jonas', 'Sehr witzig. Aber ja: Je mehr ich übe, desto besser wird es.', 'Heel grappig. Maar ja: hoe meer ik oefen, hoe beter het wordt.']
      ],
      q: [
        { t: 'mc', q: 'Was vermutet Jonas?', o: ['Roboter werden die meisten Arbeiten übernehmen.', 'Niemand wird mehr arbeiten.', 'Es wird keine Ärzte mehr geben.'] },
        { t: 'mc', q: 'Was sagt der Experte im Radio?', o: ['Es werden neue Berufe entstehen.', 'Die Technik wird schlechter.', 'Alle Berufe werden verschwinden.'] },
        { t: 'mc', q: 'Was sagt Jonas über das Üben?', o: ['Je mehr er übt, desto besser wird es.', 'Er übt nie.', 'Üben hilft nicht.'] }
      ]
    },
    culture: { t: 'Vorsprung durch Technik', html: `<p>Duitsland ziet zichzelf graag als <b>Land der Ingenieure</b>. De auto (Carl Benz, 1886), de boekdrukkunst (Gutenberg), de röntgenstraling, de aspirine en het mp3-formaat komen er vandaan. Het keurmerk <b>Made in Germany</b> was ooit door de Britten bedoeld als waarschuwing en werd juist een aanbeveling.</p>
<p>Het land draait op het <b>Mittelstand</b>: duizenden middelgrote familiebedrijven, vaak in kleine plaatsen, die wereldmarktleider zijn in één heel specifiek product (<i>Hidden Champions</i>).</p>
<p>🔬 Tegelijk is men voorzichtig met nieuwe techniek: over <i>Datenschutz</i>, kunstmatige intelligentie en kernenergie wordt lang en grondig gediscussieerd. Het woord <b>Technikfolgenabschätzung</b> (inschatting van de gevolgen van techniek) is typisch Duits: één woord, zes lettergrepen te veel, en precies wat het zegt.</p>
<p>Gefeliciteerd: je hebt niveau B1 afgerond. <b>Herzlichen Glückwunsch!</b></p>` },
    ex: [
      { t: 'cloze', s: 'Morgen ___ es regnen.', a: ['wird'], o: ['wird', 'geht', 'soll wird'], nl: 'Morgen gaat het regenen.', x: 'De toekomst maak je met werden, nooit met gehen.', tag: 'de-futur' },
      { t: 'cloze', s: 'Du ___ es bestimmt schaffen.', a: ['wirst'], o: ['wirst', 'werdest', 'wird'], nl: 'Je gaat het vast redden.', tag: 'de-futur' },
      { t: 'cloze', s: 'Er ___ wohl noch im Büro sein.', a: ['wird'], o: ['wird', 'würde', 'wurde'], nl: 'Hij zal wel nog op kantoor zijn.', tag: 'de-futur' },
      { t: 'cloze', s: 'Je mehr ich lerne, ___ besser spreche ich.', a: ['desto'], o: ['desto', 'je', 'so'], nl: 'Hoe meer ik leer, hoe beter ik spreek.', tag: 'de-jedesto' },
      { t: 'cloze', s: 'Je älter er ___, desto ruhiger wird er.', a: ['wird'], o: ['wird', 'wird er', 'werden'], nl: 'Hoe ouder hij wordt, hoe rustiger hij wordt.', x: 'Na je staat het werkwoord aan het einde (bijzin); na desto + vergrotende trap volgt het meteen.', tag: 'de-jedesto' },
      { t: 'cloze', s: 'Ich ___ mein Auto reparieren.', a: ['lasse'], o: ['lasse', 'lässt', 'mache'], nl: 'Ik laat mijn auto repareren.', tag: 'de-lassen' },
      { t: 'cloze', s: 'Ich habe mir die Haare schneiden ___.', a: ['lassen'], o: ['lassen', 'gelassen', 'lässt'], nl: 'Ik heb mijn haar laten knippen.', x: 'Uitzondering: met een tweede werkwoord blijft het lassen (niet gelassen), net als bij modale werkwoorden.', tag: 'de-lassen' },
      { t: 'cloze', s: 'Ich kenne den ___ nicht.', a: ['Studenten'], o: ['Studenten', 'Student', 'Students'], nl: 'Ik ken de student niet.', x: 'Uitzondering: der Student is een zwak mannelijk woord en krijgt buiten de eerste naamval -en.', tag: 'de-ndekl' },
      { t: 'cloze', s: 'Wir haben einen ___ gefragt.', a: ['Experten'], o: ['Experten', 'Experte', 'Experter'], nl: 'We hebben een expert gevraagd.', tag: 'de-ndekl' },
      { t: 'mc', q: 'Hoe zeg je «Ik ga morgen werken» (gewoon plan)?', o: ['Ich arbeite morgen.', 'Ich gehe morgen arbeiten.', 'Ich soll morgen arbeiten.'], x: 'Voor gewone plannen gebruikt het Duits de tegenwoordige tijd + tijdwoord.', tag: 'de-futur' },
      { t: 'mc', q: 'Wat staat er op een envelop?', o: ['Herrn Müller', 'Herr Müller', 'Herren Müller'], x: 'Uitzondering: Herr is een zwak mannelijk woord: buiten de eerste naamval Herrn.', tag: 'de-ndekl' },
      { t: 'tr', nl: 'Ik zal je nooit vergeten.', a: ['Ich werde dich nie vergessen.'], tag: 'de-futur' },
      { t: 'tr', nl: 'Hoe meer ik oefen, hoe beter het gaat.', a: ['Je mehr ich übe, desto besser geht es.', 'Je mehr ich übe, desto besser wird es.', 'Je mehr ich übe, umso besser geht es.'], tag: 'de-jedesto' },
      { t: 'tr', nl: 'Laat me met rust!', a: ['Lass mich in Ruhe!', 'Lassen Sie mich in Ruhe!'], tag: 'de-lassen' },
      { t: 'order', s: 'In zwanzig Jahren werden die meisten Autos elektrisch fahren.', nl: 'Over twintig jaar zullen de meeste auto’s elektrisch rijden.', tag: 'de-futur' },
      { t: 'match', p: [['die Zukunft', 'de toekomst'], ['die Erfindung', 'de uitvinding'], ['der Fortschritt', 'de vooruitgang'], ['ersetzen', 'vervangen'], ['vermuten', 'vermoeden']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Wie werden wir 2050 wohnen?', type: 'Toekomstartikel',
      p: [
        ['Experten sind sich einig: Unsere Städte werden sich in den nächsten Jahrzehnten stark verändern. Im Jahr 2050 werden wohl zwei Drittel aller Menschen in Städten leben. Je mehr Menschen dort wohnen, desto wichtiger wird der Platz.', 'Experts zijn het eens: onze steden zullen de komende decennia sterk veranderen. In het jaar 2050 zal waarschijnlijk twee derde van alle mensen in steden wonen. Hoe meer mensen daar wonen, hoe belangrijker de ruimte wordt.'],
        ['Deshalb wird man höher bauen, und auf den Dächern werden Gärten entstehen. Die Häuser werden ihren Strom selbst herstellen. Viele Dinge wird man nicht mehr besitzen, sondern teilen: das Auto, die Werkzeuge, vielleicht sogar die Küche.', 'Daarom zal men hoger bouwen, en op de daken zullen tuinen ontstaan. De huizen zullen hun stroom zelf opwekken. Veel dingen zal men niet meer bezitten, maar delen: de auto, het gereedschap, misschien zelfs de keuken.'],
        ['Und der Alltag? Einkäufe wird man sich liefern lassen, und ein Roboter wird die Wohnung putzen. Ob wir dann glücklicher sein werden, kann kein Wissenschaftler vorhersagen. Eines ist sicher: Den Menschen wird die Technik nicht ersetzen.', 'En het dagelijks leven? Boodschappen zal men laten bezorgen, en een robot zal de woning schoonmaken. Of we dan gelukkiger zullen zijn, kan geen wetenschapper voorspellen. Eén ding is zeker: de mens zal de techniek niet vervangen.']
      ],
      gl: [['sich einig sein', 'het eens zijn'], ['das Jahrzehnt', 'het decennium'], ['besitzen', 'bezitten'], ['das Werkzeug', 'het gereedschap'], ['liefern', 'bezorgen']],
      q: [
        { t: 'mc', q: 'Wo werden 2050 die meisten Menschen leben?', o: ['In Städten', 'Auf dem Land', 'Am Meer'] },
        { t: 'mc', q: 'Was wird auf den Dächern entstehen?', o: ['Gärten', 'Parkplätze', 'Schwimmbäder'] },
        { t: 'mc', q: 'Was kann kein Wissenschaftler vorhersagen?', o: ['Ob wir glücklicher sein werden', 'Wie hoch man bauen wird', 'Wer die Wohnung putzt'] }
      ]
    },
    say: [['Morgen wird es regnen.', 'Morgen gaat het regenen.'], ['Je mehr ich übe, desto besser spreche ich.', 'Hoe meer ik oefen, hoe beter ik spreek.'], ['Ich lasse mein Auto reparieren.', 'Ik laat mijn auto repareren.'], ['Er wird wohl zu Hause sein.', 'Hij zal wel thuis zijn.']],
    task: { nl: 'Hoe ziet jouw leven er over tien jaar uit? Doe drie voorspellingen met werden en gebruik één keer je … desto (4 zinnen).', model: 'In zehn Jahren werde ich wahrscheinlich in einem kleineren Haus wohnen. Meine Kinder werden studieren, und ich werde mehr reisen. Ich werde bestimmt fließend Deutsch sprechen. Je mehr ich jetzt lerne, desto leichter wird es später.' },
    scenario: { nl: 'Je filosofeert met een Duitse vriend over de toekomst.', role: 'You are Jonas from Stuttgart, an engineer who loves technology. Discuss the future with the learner: work, robots, cities, climate. Make predictions with "werden", use "je … desto", and ask for their predictions and plans. B1 German, use "du".', goal: 'Doe voorspellingen en leg verbanden met je … desto.' }
  });
})(window.SPT);
