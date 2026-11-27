/* Duits voor Nederlandstaligen — niveau A1, units 6–10 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-adj': 'bijvoeglijk naamwoord', 'de-modal': 'modale werkwoorden (können, müssen, wollen)', 'de-stark': 'sterke werkwoorden (du fährst, er liest)', 'de-gern': 'gern / lieber',
    'de-tempo': 'am, um, im (tijd)', 'de-perf': 'Perfekt (ich habe gemacht)', 'de-war': 'war / hatte', 'de-pron': 'persoonlijke voornaamwoorden (ihn, sie, es)', 'de-wo': 'wo? met derde naamval'
  });

  /* ───────────────────────── A1 · 6 ───────────────────────── */
  U({
    id: 'de-a1-06', level: 'A1', icon: '🛍️', title: 'Einkaufen', nl: 'Winkelen: kleding, kleuren en prijzen',
    goals: ['Kleding en kleuren benoemen', 'Naar de prijs en de maat vragen', 'Tellen tot 100 en verder', 'ihn, sie, es gebruiken: Ich nehme ihn'],
    vocab: [
      ['die Hose', 'de broek'], ['das Hemd', 'het overhemd'], ['das T-Shirt', 'het T-shirt'], ['der Pullover', 'de trui'], ['die Jacke', 'de jas / het jack'], ['der Mantel', 'de (lange) jas'], ['das Kleid', 'de jurk'],
      ['der Rock', 'de rok'], ['der Schuh / die Schuhe', 'de schoen / de schoenen'], ['die Tasche', 'de tas'], ['rot', 'rood'], ['blau', 'blauw'], ['grün', 'groen'], ['gelb', 'geel'], ['schwarz', 'zwart'], ['weiß', 'wit'],
      ['teuer', 'duur'], ['billig', 'goedkoop'], ['groß', 'groot'], ['klein', 'klein'], ['die Größe', 'de maat'], ['anprobieren', 'passen (kleding)'], ['Was kostet …?', 'Wat kost …?'], ['Das ist zu teuer.', 'Dat is te duur.'],
      ['dreißig, vierzig, fünfzig', 'dertig, veertig, vijftig'], ['einundzwanzig', 'eenentwintig'], ['hundert', 'honderd'], ['Kann ich mit Karte zahlen?', 'Kan ik met de kaart betalen?']
    ],
    grammar: [
      { t: 'ihn, sie, es: het lijdend voorwerp vervangen', es: 'Personalpronomen im Akkusativ',
        html: `<p>In het Nederlands zeg je over elk ding <i>hem</i> of <i>het</i>: <i>Ik neem hem.</i> In het Duits kies je het voornaamwoord op het <b>geslacht</b> van het woord, ook bij dingen: <b>der → er / ihn</b>, <b>die → sie</b>, <b>das → es</b>.</p>
<p>Als <b>onderwerp</b>: <i>Der Pullover ist schön. <b>Er</b> kostet 40 Euro.</i> Als <b>lijdend voorwerp</b> (vierde naamval): <i>Ich nehme <b>ihn</b>.</i> Net als bij de lidwoorden verandert alleen mannelijk: <b>er → ihn</b>.</p>
<p>Een jas (<i>die Jacke</i>) is dus <b>sie</b>: <i>Die Jacke ist schön. Ich nehme <b>sie</b>.</i> Niet <s>ich nehme es</s>.</p>`,
        table: [['', 'onderwerp', 'lijdend voorwerp', 'voorbeeld'], ['der Rock', 'er', 'ihn', 'Ich kaufe ihn.'], ['die Hose', 'sie', 'sie', 'Ich kaufe sie.'], ['das Hemd', 'es', 'es', 'Ich kaufe es.'], ['die Schuhe (mv.)', 'sie', 'sie', 'Ich kaufe sie.']],
        sum: 'Der Rock: Ich nehme ihn. Die Hose: Ich nehme sie. Das Hemd: Ich nehme es.',
        ex: [['Wie findest du den Mantel? — Ich finde ihn zu teuer.', 'Wat vind je van de jas? — Ik vind hem te duur.'], ['Die Tasche ist schön. Was kostet sie?', 'De tas is mooi. Wat kost hij?']] },
      { t: 'Getallen: eerst de eenheden', es: 'Die Zahlen bis 100',
        html: `<p>Duitse getallen werken als de Nederlandse: eerst de eenheid, dan het tiental, met <b>und</b> ertussen: <b>einundzwanzig</b> (21), <b>fünfunddreißig</b> (35). Je schrijft ze aan elkaar.</p>
<p>De tientallen eindigen op <b>-zig</b>: <i>zwanzig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig</i>. <b>Uitzondering:</b> <b>dreißig</b> (30) eindigt op <b>-ßig</b>. <b>Waarom?</b> De oude t-klank werd in het Duits na een medeklinker een <i>z</i> (<i>zwan-zig, vier-zig</i>), maar na een klinker een scherpe <i>s</i>. Alleen <i>drei</i> eindigt op een klinker, dus alleen daar staat <i>ß</i>.</p>
<p>Let ook op: <b>sechzehn / sechzig</b> (zonder s van sechs) en <b>siebzehn / siebzig</b> (zonder -en van sieben), omdat ze anders moeilijk uit te spreken zijn. Prijzen: <i>9,50 € = neun Euro fünfzig</i>.</p>`,
        table: [['', '', ''], ['20 zwanzig', '30 dreißig', '40 vierzig'], ['50 fünfzig', '60 sechzig', '70 siebzig'], ['80 achtzig', '90 neunzig', '100 hundert'], ['21 einundzwanzig', '47 siebenundvierzig', '99 neunundneunzig']],
        ex: [['Die Hose kostet neunundvierzig Euro.', 'De broek kost negenenveertig euro.'], ['Ich brauche Größe achtunddreißig.', 'Ik heb maat achtendertig nodig.']] }
    ],
    dialogue: {
      t: 'Im Kaufhaus', place: 'Frankfurt 🇩🇪',
      lines: [
        ['Verkäuferin', 'Guten Tag! Kann ich Ihnen helfen?', 'Goedendag! Kan ik u helpen?'],
        ['Daan', 'Ja, ich suche einen Pullover.', 'Ja, ik zoek een trui.'],
        ['Verkäuferin', 'Welche Größe haben Sie?', 'Welke maat hebt u?'],
        ['Daan', 'Größe M. Haben Sie den Pullover auch in Blau?', 'Maat M. Hebt u die trui ook in het blauw?'],
        ['Verkäuferin', 'Ja, hier ist er. Möchten Sie ihn anprobieren?', 'Ja, hier is hij. Wilt u hem passen?'],
        ['Daan', 'Ja, gern. … Er ist ein bisschen klein. Haben Sie ihn auch in L?', 'Ja, graag. … Hij is een beetje klein. Hebt u hem ook in L?'],
        ['Verkäuferin', 'Natürlich. Bitte schön.', 'Natuurlijk. Alstublieft.'],
        ['Daan', 'Der passt gut. Was kostet er?', 'Die past goed. Wat kost hij?'],
        ['Verkäuferin', 'Neunundfünfzig Euro.', 'Negenenvijftig euro.'],
        ['Daan', 'Gut, ich nehme ihn. Kann ich mit Karte zahlen?', 'Goed, ik neem hem. Kan ik met de kaart betalen?']
      ],
      q: [
        { t: 'mc', q: 'Was sucht Daan?', o: ['Einen Pullover', 'Eine Jacke', 'Eine Hose'] },
        { t: 'mc', q: 'Welche Farbe möchte er?', o: ['Blau', 'Rot', 'Schwarz'] },
        { t: 'mc', q: 'Was kostet der Pullover?', o: ['59 Euro', '95 Euro', '49 Euro'] }
      ]
    },
    culture: { t: 'Contant geld en de Pfand-automaat', html: `<p>Duitsland is nog steeds een land van <b>Bargeld</b> (contant geld). In kleine winkels, bakkerijen en veel cafés kun je niet altijd pinnen: <i>Nur Barzahlung</i>. Neem dus altijd wat contant geld mee.</p>
<p>Op flessen en blikjes zit <b>Pfand</b> (statiegeld). Je levert ze in bij de automaat in de supermarkt en krijgt een bon.</p>
<p>🧥 Valse vriend: <b>der Rock</b> is een <i>rok</i>, geen rockmuziek. En <b>billig</b> betekent <i>goedkoop</i>, maar ook <i>van slechte kwaliteit</i>; netter is <b>günstig</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'Der Rock ist schön. Ich nehme ___.', a: ['ihn'], o: ['ihn', 'es', 'sie'], nl: 'De rok is mooi. Ik neem hem.', x: 'Rock is der: als lijdend voorwerp wordt er → ihn.', tag: 'de-pron' },
      { t: 'cloze', s: 'Die Jacke ist teuer. Ich kaufe ___ nicht.', a: ['sie'], o: ['sie', 'ihn', 'es'], nl: 'De jas is duur. Ik koop hem niet.', x: 'Jacke is die, dus sie. In het Nederlands zeg je «hem», in het Duits volg je het geslacht.', tag: 'de-pron' },
      { t: 'cloze', s: 'Das Hemd passt gut. Ich nehme ___.', a: ['es'], o: ['es', 'ihn', 'sie'], nl: 'Het overhemd past goed. Ik neem het.', tag: 'de-pron' },
      { t: 'cloze', s: 'Wo ist der Mantel? — ___ ist hier.', a: ['Er'], o: ['Er', 'Es', 'Ihn'], nl: 'Waar is de jas? — Hij is hier.', tag: 'de-pron' },
      { t: 'cloze', s: 'Ich suche ___ Pullover.', a: ['einen'], o: ['einen', 'ein', 'eine'], nl: 'Ik zoek een trui.', tag: 'de-akk' },
      { t: 'mc', q: 'Welk getal is «siebenundvierzig»?', o: ['47', '74', '417'], tag: 'de-num' },
      { t: 'mc', q: 'Hoe schrijf je 30?', o: ['dreißig', 'dreizig', 'dreisig'], x: 'Uitzondering: alleen dreißig eindigt op -ßig; alle andere tientallen op -zig.', tag: 'de-num' },
      { t: 'mc', q: 'Hoe schrijf je 16?', o: ['sechzehn', 'sechszehn', 'sechzig'], x: 'In sechzehn en sechzig valt de s van sechs weg, omdat het anders lastig uit te spreken is.', tag: 'de-num' },
      { t: 'mc', q: 'Wat betekent «anprobieren»?', o: ['passen (kleding)', 'uitproberen', 'aanbieden'], tag: 'de-vok' },
      { t: 'mc', q: 'Hoe vraag je naar de prijs van de schoenen?', o: ['Was kosten die Schuhe?', 'Was kostet die Schuhe?', 'Wie teuer die Schuhe?'], x: 'Schuhe is meervoud, dus het werkwoord ook: kosten.', tag: 'de-plural' },
      { t: 'tr', nl: 'Ik zoek een broek.', a: ['Ich suche eine Hose.'], tag: 'de-akk' },
      { t: 'tr', nl: 'Dat is te duur.', a: ['Das ist zu teuer.'], tag: 'de-adj' },
      { t: 'tr', nl: 'De jurk is mooi. Ik neem hem.', a: ['Das Kleid ist schön. Ich nehme es.'], tag: 'de-pron' },
      { t: 'order', s: 'Kann ich die Hose anprobieren?', nl: 'Kan ik de broek passen?', tag: 'de-modal' },
      { t: 'match', p: [['rot', 'rood'], ['gelb', 'geel'], ['schwarz', 'zwart'], ['weiß', 'wit'], ['grün', 'groen']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Sommerschlussverkauf', type: 'Advertentie',
      p: [
        ['Diese Woche im Kaufhaus Becker: Alles ist billiger! Hosen ab neunundzwanzig Euro, T-Shirts ab neun Euro und Jacken ab fünfzig Euro.', 'Deze week bij warenhuis Becker: alles is goedkoper! Broeken vanaf negenentwintig euro, T-shirts vanaf negen euro en jassen vanaf vijftig euro.'],
        ['Suchen Sie einen Mantel für den Winter? Wir haben Mäntel in Schwarz, Blau und Grün. Sie können alles anprobieren.', 'Zoekt u een jas voor de winter? We hebben jassen in zwart, blauw en groen. U kunt alles passen.'],
        ['Wir sind von Montag bis Samstag von neun bis zwanzig Uhr für Sie da. Am Sonntag ist das Kaufhaus geschlossen.', 'We zijn er van maandag tot en met zaterdag van negen tot twintig uur voor u. Op zondag is het warenhuis gesloten.']
      ],
      gl: [['diese Woche', 'deze week'], ['ab', 'vanaf'], ['das Kaufhaus', 'het warenhuis'], ['geschlossen', 'gesloten'], ['für Sie da', 'er voor u']],
      q: [
        { t: 'mc', q: 'Was kosten T-Shirts?', o: ['Ab neun Euro', 'Ab neunundzwanzig Euro', 'Ab fünfzig Euro'] },
        { t: 'mc', q: 'In welchen Farben gibt es Mäntel?', o: ['Schwarz, Blau und Grün', 'Rot, Gelb und Weiß', 'Nur in Schwarz'] },
        { t: 'mc', q: 'Wann ist das Kaufhaus geschlossen?', o: ['Am Sonntag', 'Am Samstag', 'Am Montag'] }
      ]
    },
    say: [['Ich suche eine Jacke.', 'Ik zoek een jas.'], ['Kann ich das anprobieren?', 'Kan ik dit passen?'], ['Was kostet der Pullover?', 'Wat kost de trui?'], ['Ich nehme ihn.', 'Ik neem hem.']],
    task: { nl: 'Je bent in een kledingwinkel. Zeg wat je zoekt, in welke kleur en maat, en vraag wat het kost (3 of 4 zinnen).', model: 'Guten Tag, ich suche eine Jacke in Schwarz. Ich habe Größe M. Kann ich sie anprobieren? Was kostet sie?' },
    scenario: { nl: 'Je zoekt een winterjas in een warenhuis in Frankfurt.', role: 'You are Frau Yilmaz, a helpful shop assistant in a department store in Frankfurt. Ask what the customer is looking for, the size and the color, offer to let them try it on, and tell the price. Use "Sie" and simple German (A1).', goal: 'Koop een jas: zeg kleur en maat, pas hem en vraag de prijs.' }
  });

  /* ───────────────────────── A1 · 7 ───────────────────────── */
  U({
    id: 'de-a1-07', level: 'A1', icon: '🏠', title: 'Meine Wohnung', nl: 'Wonen: je huis en je kamers',
    goals: ['Je woning en kamers beschrijven', 'Zeggen waar iets staat of ligt', 'Bijvoeglijke naamwoorden gebruiken na sein', 'Het meervoud herkennen'],
    vocab: [
      ['die Wohnung', 'het appartement / de woning'], ['das Haus', 'het huis'], ['das Zimmer', 'de kamer'], ['das Wohnzimmer', 'de woonkamer'], ['das Schlafzimmer', 'de slaapkamer'], ['die Küche', 'de keuken'],
      ['das Bad', 'de badkamer'], ['der Balkon', 'het balkon'], ['der Garten', 'de tuin'], ['der Tisch', 'de tafel'], ['der Stuhl', 'de stoel'], ['das Bett', 'het bed'], ['das Sofa', 'de bank (om op te zitten)'],
      ['der Schrank', 'de kast'], ['die Lampe', 'de lamp'], ['das Fenster', 'het raam'], ['die Tür', 'de deur'], ['die Miete', 'de huur'], ['der Nachbar / die Nachbarin', 'de buurman / de buurvrouw'], ['hell', 'licht'],
      ['dunkel', 'donker'], ['ruhig', 'rustig'], ['laut', 'luidruchtig / hard'], ['gemütlich', 'gezellig'], ['auf', 'op'], ['unter', 'onder'], ['vor', 'voor'], ['hinter', 'achter']
    ],
    grammar: [
      { t: 'Waar staat het? stehen, liegen, hängen + derde naamval', es: 'Wo? Präpositionen mit Dativ',
        html: `<p>Waar het Nederlands vaak gewoon <i>is</i> zegt, kiest het Duits graag een precies werkwoord: dingen <b>stehen</b> (staan rechtop: kast, lamp), <b>liegen</b> (liggen plat: boek, tapijt) of <b>hängen</b> (hangen).</p>
<p>Na <b>auf, unter, vor, hinter, neben, in, an</b> volgt op de vraag <b>Wo?</b> de derde naamval: <i>auf <b>dem</b> Tisch, unter <b>dem</b> Bett, in <b>der</b> Küche, an <b>der</b> Wand</i>.</p>
<p>Onthoud: <b>der/das → dem</b>, <b>die → der</b>. En: <i>in dem = <b>im</b></i>, <i>an dem = <b>am</b></i>.</p>`,
        table: [['voorzetsel', 'voorbeeld', 'Nederlands'], ['auf', 'Das Buch liegt auf dem Tisch.', 'Het boek ligt op de tafel.'], ['unter', 'Die Katze ist unter dem Bett.', 'De kat zit onder het bed.'], ['in', 'Der Tisch steht in der Küche.', 'De tafel staat in de keuken.'], ['vor', 'Das Auto steht vor dem Haus.', 'De auto staat voor het huis.'], ['an', 'Die Lampe hängt an der Wand.', 'De lamp hangt aan de muur.']],
        sum: 'Wo? Auf dem Tisch, unter dem Bett, in der Küche.',
        ex: [['Der Schrank steht im Schlafzimmer.', 'De kast staat in de slaapkamer.'], ['Die Schlüssel liegen auf dem Tisch.', 'De sleutels liggen op tafel.']] },
      { t: 'Het meervoud: vijf manieren', es: 'Der Plural',
        html: `<p>Het Duitse meervoud heeft geen vaste regel zoals <i>-en</i> of <i>-s</i>. Er zijn vijf hoofdtypen, vaak met een <b>Umlaut</b> erbij. Leer het meervoud daarom meteen mee: <i>der Stuhl, die St<b>ü</b>hl<b>e</b></i>.</p>
<p>Vuistregels: woorden op <b>-e</b> (meestal <i>die</i>) krijgen <b>-n</b>: <i>Lampe → Lampen</i>. Woorden op <b>-er, -el, -en</b> blijven vaak gelijk: <i>das Zimmer → die Zimmer</i>. Leenwoorden krijgen <b>-s</b>: <i>Sofa → Sofas</i>.</p>
<p><b>Uitzondering:</b> <i>das Haus → die H<b>ä</b>us<b>er</b></i>, <i>der Mann → die M<b>ä</b>nn<b>er</b></i>, <i>das Kind → die Kind<b>er</b></i>: korte, oude woorden krijgen vaak <b>-er</b> met Umlaut. <b>Waarom?</b> Dit is een oud Germaans meervoud; in het Nederlands zie je het nog in <i>kinderen</i> en <i>eieren</i>.</p>`,
        table: [['type', 'enkelvoud', 'meervoud'], ['-e (+ Umlaut)', 'der Tisch, der Stuhl', 'die Tische, die Stühle'], ['-(e)n', 'die Lampe, die Tür', 'die Lampen, die Türen'], ['-er (+ Umlaut)', 'das Haus, das Kind', 'die Häuser, die Kinder'], ['gelijk (+ Umlaut)', 'das Zimmer, der Garten', 'die Zimmer, die Gärten'], ['-s', 'das Sofa, der Balkon', 'die Sofas, die Balkons']],
        ex: [['Die Wohnung hat drei Zimmer und zwei Balkons.', 'Het appartement heeft drie kamers en twee balkons.'], ['Die Stühle stehen in der Küche.', 'De stoelen staan in de keuken.']] }
    ],
    dialogue: {
      t: 'Die neue Wohnung', place: 'Leipzig 🇩🇪',
      lines: [
        ['Lena', 'Willkommen in meiner neuen Wohnung!', 'Welkom in mijn nieuwe appartement!'],
        ['Tim', 'Wow, sie ist schön! Und so hell. Wie viele Zimmer hast du?', 'Wauw, het is mooi! En zo licht. Hoeveel kamers heb je?'],
        ['Lena', 'Zwei Zimmer, eine Küche und ein Bad. Hier ist das Wohnzimmer.', 'Twee kamers, een keuken en een badkamer. Hier is de woonkamer.'],
        ['Tim', 'Das Sofa ist gemütlich. Und wo ist das Schlafzimmer?', 'De bank is gezellig. En waar is de slaapkamer?'],
        ['Lena', 'Neben dem Bad. Es ist klein, aber ruhig. Das Bett steht vor dem Fenster.', 'Naast de badkamer. Hij is klein, maar rustig. Het bed staat voor het raam.'],
        ['Tim', 'Hast du auch einen Balkon?', 'Heb je ook een balkon?'],
        ['Lena', 'Ja, hinter der Küche. Aber es gibt noch keine Stühle.', 'Ja, achter de keuken. Maar er zijn nog geen stoelen.'],
        ['Tim', 'Und die Miete? Ist sie teuer?', 'En de huur? Is die hoog?'],
        ['Lena', 'Nein, sie ist okay: siebenhundert Euro. Nur die Nachbarn sind ein bisschen laut.', 'Nee, die valt mee: zevenhonderd euro. Alleen de buren zijn een beetje luidruchtig.']
      ],
      q: [
        { t: 'mc', q: 'Wie viele Zimmer hat die Wohnung?', o: ['Zwei', 'Drei', 'Vier'] },
        { t: 'mc', q: 'Wo ist das Schlafzimmer?', o: ['Neben dem Bad', 'Hinter der Küche', 'Neben dem Wohnzimmer'] },
        { t: 'mc', q: 'Was ist das Problem?', o: ['Die Nachbarn sind laut.', 'Die Miete ist zu teuer.', 'Die Wohnung ist dunkel.'] }
      ]
    },
    culture: { t: 'Kaltmiete, Warmmiete en een keuken zonder keuken', html: `<p>In een Duitse woningadvertentie staat de <b>Kaltmiete</b> (kale huur) en de <b>Warmmiete</b> (huur inclusief verwarming en bijkomende kosten, de <i>Nebenkosten</i>). Kijk dus goed welk bedrag je ziet.</p>
<p>Een «2-Zimmer-Wohnung» heeft twee kamers <b>plus</b> keuken en badkamer; die tellen niet mee. En schrik niet: veel huurwoningen worden <b>zonder keuken</b> opgeleverd. De huurder neemt zijn eigen <i>Einbauküche</i> mee.</p>
<p>🤫 In veel flats geldt de <b>Hausordnung</b> met <b>Ruhezeiten</b>: tussen 22 en 6 uur, en vaak ook rond de middag, is het stil.</p>` },
    ex: [
      { t: 'cloze', s: 'Das Buch liegt auf ___ Tisch.', a: ['dem'], o: ['dem', 'der', 'den'], nl: 'Het boek ligt op de tafel.', tag: 'de-wo' },
      { t: 'cloze', s: 'Der Tisch steht in ___ Küche.', a: ['der'], o: ['der', 'die', 'dem'], nl: 'De tafel staat in de keuken.', x: 'Wo? → derde naamval; Küche is die, en die wordt der.', tag: 'de-wo' },
      { t: 'cloze', s: 'Die Katze schläft unter ___ Bett.', a: ['dem'], o: ['dem', 'das', 'der'], nl: 'De kat slaapt onder het bed.', tag: 'de-wo' },
      { t: 'cloze', s: 'Der Schrank steht ___ Schlafzimmer.', a: ['im'], o: ['im', 'in', 'am'], nl: 'De kast staat in de slaapkamer.', tag: 'de-wo' },
      { t: 'cloze', s: 'Das Auto steht vor ___ Haus.', a: ['dem'], h: 'das Haus → ?', nl: 'De auto staat voor het huis.', tag: 'de-wo' },
      { t: 'mc', q: 'Wat is het meervoud van «das Haus»?', o: ['die Häuser', 'die Hause', 'die Hausen'], x: 'Uitzondering: korte, oude woorden krijgen vaak -er met Umlaut (Haus → Häuser), een oud Germaans meervoud.', tag: 'de-plural' },
      { t: 'mc', q: 'Wat is het meervoud van «der Stuhl»?', o: ['die Stühle', 'die Stuhlen', 'die Stuhls'], tag: 'de-plural' },
      { t: 'mc', q: 'Wat is het meervoud van «die Lampe»?', o: ['die Lampen', 'die Lampe', 'die Lämper'], tag: 'de-plural' },
      { t: 'mc', q: 'Wat is het meervoud van «das Zimmer»?', o: ['die Zimmer', 'die Zimmers', 'die Zimmern'], x: 'Woorden op -er, -el en -en blijven in het meervoud meestal gelijk.', tag: 'de-plural' },
      { t: 'mc', q: 'Welk werkwoord past? «Das Buch ___ auf dem Tisch.»', o: ['liegt', 'steht', 'hängt'], x: 'Een boek ligt plat: liegen. Een kast of fles staat rechtop: stehen.', tag: 'de-vok' },
      { t: 'tr', nl: 'De woning is klein, maar gezellig.', a: ['Die Wohnung ist klein, aber gemütlich.'], tag: 'de-adj' },
      { t: 'tr', nl: 'De lamp staat naast het bed.', a: ['Die Lampe steht neben dem Bett.', 'Die Lampe ist neben dem Bett.'], tag: 'de-wo' },
      { t: 'tr', nl: 'Ik heb twee kamers en een balkon.', a: ['Ich habe zwei Zimmer und einen Balkon.'], tag: 'de-akk' },
      { t: 'order', s: 'Der Schrank steht hinter der Tür im Schlafzimmer.', nl: 'De kast staat achter de deur in de slaapkamer.', tag: 'de-wo' },
      { t: 'match', p: [['die Küche', 'de keuken'], ['das Bad', 'de badkamer'], ['der Stuhl', 'de stoel'], ['das Fenster', 'het raam'], ['die Tür', 'de deur']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Wohnung zu vermieten', type: 'Woningadvertentie',
      p: [
        ['Schöne 3-Zimmer-Wohnung in Leipzig zu vermieten. Die Wohnung ist 75 Quadratmeter groß und liegt im zweiten Stock. Sie ist hell und sehr ruhig.', 'Mooi driekamerappartement in Leipzig te huur. De woning is 75 vierkante meter groot en ligt op de tweede verdieping. Hij is licht en heel rustig.'],
        ['Es gibt ein Wohnzimmer, zwei Schlafzimmer, eine Küche und ein Bad. Das Wohnzimmer hat einen Balkon. Im Haus gibt es auch einen Garten für alle Nachbarn.', 'Er is een woonkamer, twee slaapkamers, een keuken en een badkamer. De woonkamer heeft een balkon. Bij het huis is ook een tuin voor alle buren.'],
        ['Die Kaltmiete ist 800 Euro im Monat. Der Supermarkt und die Haltestelle sind in der Nähe. Rufen Sie an: Frau Winkler, Telefon 0341 55 66 77.', 'De kale huur is 800 euro per maand. De supermarkt en de halte zijn in de buurt. Bel: mevrouw Winkler, telefoon 0341 55 66 77.']
      ],
      gl: [['zu vermieten', 'te huur'], ['der Stock', 'de verdieping'], ['der Quadratmeter', 'de vierkante meter'], ['im Monat', 'per maand'], ['anrufen', 'opbellen']],
      q: [
        { t: 'mc', q: 'Wie viele Schlafzimmer hat die Wohnung?', o: ['Zwei', 'Drei', 'Eins'] },
        { t: 'mc', q: 'Was hat das Wohnzimmer?', o: ['Einen Balkon', 'Einen Garten', 'Zwei Fenster'] },
        { t: 'mc', q: 'Was kostet die Wohnung im Monat?', o: ['800 Euro Kaltmiete', '750 Euro Warmmiete', '80 Euro'] }
      ]
    },
    say: [['Meine Wohnung hat zwei Zimmer.', 'Mijn woning heeft twee kamers.'], ['Die Küche ist klein, aber hell.', 'De keuken is klein, maar licht.'], ['Das Bett steht im Schlafzimmer.', 'Het bed staat in de slaapkamer.'], ['Die Miete ist nicht teuer.', 'De huur is niet hoog.']],
    task: { nl: 'Beschrijf je woning in 4 zinnen: hoeveel kamers, hoe ziet het eruit en waar staat iets?', model: 'Ich wohne in einer Wohnung in Utrecht. Sie hat drei Zimmer und einen Balkon. Das Wohnzimmer ist groß und hell. Mein Bett steht neben dem Fenster.' },
    scenario: { nl: 'Je bekijkt een huurwoning in Leipzig.', role: 'You are Frau Winkler, a landlady in Leipzig showing a flat to the learner. Describe the rooms, answer questions about the rent, the balcony and the neighbours. Use "Sie" and simple German (A1).', goal: 'Vraag naar de kamers, de huur en of het rustig is.' }
  });

  /* ───────────────────────── A1 · 8 ───────────────────────── */
  U({
    id: 'de-a1-08', level: 'A1', icon: '⚽', title: 'Freizeit und Hobbys', nl: 'Vrije tijd en hobby’s',
    goals: ['Over je hobby’s praten', 'Zeggen wat je graag doet met gern', 'können, wollen en müssen gebruiken', 'Sterke werkwoorden herkennen: du fährst, er liest'],
    vocab: [
      ['das Hobby', 'de hobby'], ['die Freizeit', 'de vrije tijd'], ['spielen', 'spelen'], ['Fußball spielen', 'voetballen'], ['schwimmen', 'zwemmen'], ['lesen', 'lezen'], ['fahren', 'rijden / gaan (met vervoer)'],
      ['Fahrrad fahren', 'fietsen'], ['laufen', 'hardlopen / lopen'], ['tanzen', 'dansen'], ['singen', 'zingen'], ['Musik hören', 'muziek luisteren'], ['sehen', 'zien'], ['treffen', 'ontmoeten / afspreken met'],
      ['sprechen', 'spreken'], ['das Buch', 'het boek'], ['der Film', 'de film'], ['das Kino', 'de bioscoop'], ['das Wochenende', 'het weekend'], ['gern', 'graag'], ['lieber', 'liever'], ['oft', 'vaak'], ['manchmal', 'soms'],
      ['nie', 'nooit'], ['können', 'kunnen'], ['wollen', 'willen'], ['müssen', 'moeten'], ['Lust haben', 'zin hebben']
    ],
    grammar: [
      { t: 'Sterke werkwoorden: klinkerwissel bij du en er', es: 'Starke Verben im Präsens',
        html: `<p>Een groep veelgebruikte werkwoorden verandert van klinker in de <b>2e en 3e persoon enkelvoud</b> (du, er/sie/es). Alle andere vormen zijn gewoon.</p>
<p>Drie patronen: <b>a → ä</b> (<i>fahren: du fährst, er fährt</i>), <b>e → i</b> (<i>sprechen: du sprichst, er spricht</i>) en <b>e → ie</b> (<i>lesen: du liest, er liest; sehen: du siehst, er sieht</i>).</p>
<p><b>Uitzondering op de gewone vervoeging.</b> <b>Waarom?</b> Dit zijn oude Germaanse sterke werkwoorden. De uitgangen <i>-st</i> en <i>-t</i> hadden vroeger een i-klank, en die kleurde de klinker ervoor (Umlaut). Het Nederlands heeft dat verloren (<i>jij vaart, hij leest</i>), het Duits niet.</p>`,
        table: [['', 'fahren', 'sprechen', 'lesen'], ['ich', 'fahre', 'spreche', 'lese'], ['du', 'fährst', 'sprichst', 'liest'], ['er / sie / es', 'fährt', 'spricht', 'liest'], ['wir', 'fahren', 'sprechen', 'lesen'], ['ihr', 'fahrt', 'sprecht', 'lest'], ['sie / Sie', 'fahren', 'sprechen', 'lesen']],
        sum: 'Ich fahre, du fährst, er fährt. Ich lese, du liest, er liest.',
        ex: [['Fährst du gern Fahrrad? — Ja, ich fahre jeden Tag.', 'Fiets je graag? — Ja, ik fiets elke dag.'], ['Meine Schwester liest viel und spricht drei Sprachen.', 'Mijn zus leest veel en spreekt drie talen.'], ['Er trifft am Samstag seine Freunde.', 'Hij spreekt zaterdag af met zijn vrienden.']] },
      { t: 'können, wollen, müssen: het tweede werkwoord achteraan', es: 'Modalverben',
        html: `<p><b>Können</b> (kunnen), <b>wollen</b> (willen) en <b>müssen</b> (moeten) staan op plaats 2; het andere werkwoord gaat als heel werkwoord naar het <b>einde</b> van de zin: <i>Ich <b>kann</b> gut <b>schwimmen</b>.</i> Dat is hetzelfde als in het Nederlands.</p>
<p><b>Uitzondering:</b> modale werkwoorden hebben bij <b>ich</b> en <b>er/sie/es</b> <b>geen uitgang</b> en vaak een andere klinker in het enkelvoud: <i>ich kann, er kann</i> (niet <s>ich könne</s>, <s>er kannt</s>); <i>ich will, er will; ich muss, er muss</i>. <b>Waarom?</b> Het waren oorspronkelijk verleden-tijdsvormen die een tegenwoordige betekenis kregen; die hadden bij ich en er nooit een uitgang. Het Nederlands doet hetzelfde: <i>ik kan, hij kan</i>.</p>
<p><b>Gern</b> zet je achter het werkwoord: <i>Ich schwimme <b>gern</b></i> (ik zwem graag). Liever = <b>lieber</b>.</p>`,
        table: [['', 'können', 'wollen', 'müssen'], ['ich', 'kann', 'will', 'muss'], ['du', 'kannst', 'willst', 'musst'], ['er / sie / es', 'kann', 'will', 'muss'], ['wir', 'können', 'wollen', 'müssen'], ['ihr', 'könnt', 'wollt', 'müsst'], ['sie / Sie', 'können', 'wollen', 'müssen']],
        ex: [['Kannst du Gitarre spielen?', 'Kun je gitaar spelen?'], ['Ich will am Wochenende ins Kino gehen.', 'Ik wil in het weekend naar de bioscoop gaan.'], ['Wir müssen heute arbeiten.', 'We moeten vandaag werken.']] }
    ],
    dialogue: {
      t: 'Was machst du am Wochenende?', place: 'Zürich 🇨🇭',
      lines: [
        ['Mila', 'Was machst du gern in deiner Freizeit, Jonas?', 'Wat doe je graag in je vrije tijd, Jonas?'],
        ['Jonas', 'Ich fahre gern Fahrrad und ich spiele Fußball. Und du?', 'Ik fiets graag en ik voetbal. En jij?'],
        ['Mila', 'Ich lese viel und ich schwimme gern. Fußball spiele ich nie.', 'Ik lees veel en ik zwem graag. Voetballen doe ik nooit.'],
        ['Jonas', 'Kannst du gut schwimmen?', 'Kun je goed zwemmen?'],
        ['Mila', 'Ja, ziemlich gut. Am Samstag will ich im See schwimmen. Hast du Lust?', 'Ja, vrij goed. Zaterdag wil ik in het meer zwemmen. Heb je zin?'],
        ['Jonas', 'Am Samstag kann ich leider nicht. Ich muss arbeiten.', 'Zaterdag kan ik helaas niet. Ik moet werken.'],
        ['Mila', 'Schade! Und am Sonntag?', 'Jammer! En zondag?'],
        ['Jonas', 'Am Sonntag habe ich Zeit. Fährst du mit dem Fahrrad zum See?', 'Zondag heb ik tijd. Ga je met de fiets naar het meer?'],
        ['Mila', 'Ja, klar. Dann treffen wir uns um zehn Uhr am Bahnhof.', 'Ja, natuurlijk. Dan zien we elkaar om tien uur bij het station.']
      ],
      q: [
        { t: 'mc', q: 'Was macht Mila gern?', o: ['Lesen und schwimmen', 'Fußball spielen', 'Fahrrad fahren und tanzen'] },
        { t: 'mc', q: 'Warum kann Jonas am Samstag nicht?', o: ['Er muss arbeiten.', 'Er kann nicht schwimmen.', 'Er hat keine Lust.'] },
        { t: 'mc', q: 'Wo treffen sie sich am Sonntag?', o: ['Am Bahnhof', 'Am See', 'Im Kino'] }
      ]
    },
    culture: { t: 'Vereine, wandelen en de valse vriend See', html: `<p>Duitsland is het land van de <b>Vereine</b> (verenigingen): er zijn er meer dan 600.000, voor voetbal, zang, schieten, tuinieren en nog veel meer. Wie ergens nieuw komt wonen, leert mensen kennen via de <i>Verein</i>.</p>
<p>Op zondag gaan veel mensen <b>wandern</b> (wandelen in de natuur), vaak met een stop bij een <i>Biergarten</i> of <i>Hütte</i>.</p>
<p>🌊 Valse vrienden: <b>der See</b> is <i>het meer</i>, en <b>das Meer</b> (of <i>die See</i>) is <i>de zee</i>. Precies andersom dan je denkt! En <b>laufen</b> is in Duitsland meestal <i>hardlopen</i> of gewoon <i>lopen</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Du ___ gern Fahrrad.', a: ['fährst'], o: ['fährst', 'fahrst', 'fährt'], nl: 'Jij fietst graag.', x: 'Uitzondering: fahren is sterk, a wordt ä bij du en er: du fährst.', tag: 'de-stark' },
      { t: 'cloze', s: 'Meine Schwester ___ ein Buch.', a: ['liest'], o: ['liest', 'lest', 'lesen'], nl: 'Mijn zus leest een boek.', x: 'Uitzondering: lesen is sterk, e wordt ie bij du en er: er liest.', tag: 'de-stark' },
      { t: 'cloze', s: 'Er ___ sehr gut Deutsch.', a: ['spricht'], o: ['spricht', 'sprecht', 'sprichst'], nl: 'Hij spreekt heel goed Duits.', tag: 'de-stark' },
      { t: 'cloze', s: 'Wir ___ am Sonntag an den See.', a: ['fahren'], o: ['fahren', 'fähren', 'fährt'], nl: 'We gaan zondag naar het meer.', x: 'Alleen du en er/sie/es krijgen de klinkerwissel; wir fahren blijft gewoon.', tag: 'de-stark' },
      { t: 'cloze', s: 'Ich ___ gut schwimmen.', a: ['kann'], o: ['kann', 'kanne', 'können'], nl: 'Ik kan goed zwemmen.', x: 'Uitzondering: modale werkwoorden hebben bij ich en er geen uitgang: ich kann, er kann.', tag: 'de-modal' },
      { t: 'cloze', s: 'Er ___ heute arbeiten.', a: ['muss'], o: ['muss', 'musst', 'müsst'], nl: 'Hij moet vandaag werken.', tag: 'de-modal' },
      { t: 'cloze', s: '___ du ins Kino gehen?', a: ['Willst'], o: ['Willst', 'Wollst', 'Will'], nl: 'Wil je naar de bioscoop gaan?', tag: 'de-modal' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ich kann gut Fußball spielen.', 'Ich kann spielen gut Fußball.', 'Ich kann gut spielen Fußball.'], x: 'Het tweede werkwoord gaat als heel werkwoord naar het einde van de zin.', tag: 'de-modal' },
      { t: 'mc', q: 'Hoe zeg je «Ik zwem graag»?', o: ['Ich schwimme gern.', 'Ich gern schwimme.', 'Ich mag schwimmen gern.'], tag: 'de-gern' },
      { t: 'mc', q: 'Wat is «der See»?', o: ['het meer', 'de zee', 'de zeef'], x: 'Valse vriend: der See = het meer; das Meer = de zee.', tag: 'de-vok' },
      { t: 'tr', nl: 'Ik lees graag.', a: ['Ich lese gern.', 'Ich lese gerne.'], tag: 'de-gern' },
      { t: 'tr', nl: 'Kun je dansen?', a: ['Kannst du tanzen?'], tag: 'de-modal' },
      { t: 'tr', nl: 'Ik moet vandaag werken.', a: ['Ich muss heute arbeiten.', 'Heute muss ich arbeiten.'], tag: 'de-modal' },
      { t: 'order', s: 'Am Wochenende will ich mit Freunden ins Kino gehen.', nl: 'In het weekend wil ik met vrienden naar de bioscoop gaan.', tag: 'de-modal' },
      { t: 'match', p: [['oft', 'vaak'], ['manchmal', 'soms'], ['nie', 'nooit'], ['gern', 'graag'], ['lieber', 'liever']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Mein Hobby', type: 'Bericht op een forum',
      p: [
        ['Hallo, ich bin Jonas aus Zürich. In meiner Freizeit mache ich viel Sport. Ich spiele zweimal pro Woche Fußball in einem Verein, und am Wochenende fahre ich Fahrrad.', 'Hallo, ik ben Jonas uit Zürich. In mijn vrije tijd sport ik veel. Ik voetbal twee keer per week bij een vereniging en in het weekend fiets ik.'],
        ['Mein Bruder ist ganz anders. Er macht nie Sport. Er liest lieber Bücher und sieht gern Filme. Er kann auch sehr gut kochen.', 'Mijn broer is heel anders. Hij sport nooit. Hij leest liever boeken en kijkt graag films. Hij kan ook heel goed koken.'],
        ['Am Sonntag wollen wir zusammen an den See fahren. Ich will schwimmen, aber mein Bruder will nur lesen. Das ist okay, er muss ja nicht schwimmen!', 'Zondag willen we samen naar het meer gaan. Ik wil zwemmen, maar mijn broer wil alleen lezen. Dat is prima, hij hoeft toch niet te zwemmen!']
      ],
      gl: [['zweimal pro Woche', 'twee keer per week'], ['der Verein', 'de vereniging'], ['ganz anders', 'heel anders'], ['er muss nicht', 'hij hoeft niet']],
      q: [
        { t: 'mc', q: 'Wie oft spielt Jonas Fußball?', o: ['Zweimal pro Woche', 'Jeden Tag', 'Nie'] },
        { t: 'mc', q: 'Was macht sein Bruder gern?', o: ['Lesen und Filme sehen', 'Fahrrad fahren', 'Fußball spielen'] },
        { t: 'mc', q: 'Was wollen sie am Sonntag machen?', o: ['An den See fahren', 'Ins Kino gehen', 'Zusammen kochen'] }
      ]
    },
    say: [['Ich fahre gern Fahrrad.', 'Ik fiets graag.'], ['Kannst du gut schwimmen?', 'Kun je goed zwemmen?'], ['Am Wochenende will ich ins Kino gehen.', 'In het weekend wil ik naar de bioscoop gaan.'], ['Ich muss heute arbeiten.', 'Ik moet vandaag werken.']],
    task: { nl: 'Vertel in 4 zinnen wat je graag doet, wat je goed kunt en wat je dit weekend wilt of moet doen.', model: 'In meiner Freizeit lese ich gern und ich fahre oft Fahrrad. Ich kann gut kochen. Am Samstag will ich Freunde treffen. Am Sonntag muss ich leider arbeiten.' },
    scenario: { nl: 'Je maakt plannen voor het weekend met een Zwitserse vriend.', role: 'You are Jonas from Zurich, a sporty friend of the learner. Ask about their hobbies, say what you like, and try to make a plan for the weekend; you cannot on Saturday because you have to work. Simple German (A1), use "du".', goal: 'Vertel over je hobby’s en spreek iets af voor het weekend.' }
  });

  /* ───────────────────────── A1 · 9 ───────────────────────── */
  U({
    id: 'de-a1-09', level: 'A1', icon: '📅', title: 'Termine und Verabredungen', nl: 'Afspraken: dagen, maanden en de datum',
    goals: ['Dagen, maanden en de datum zeggen', 'Een afspraak maken en afzeggen', 'am, um en im kiezen', 'Tijd vóór plaats zetten in de zin'],
    vocab: [
      ['Montag', 'maandag'], ['Dienstag', 'dinsdag'], ['Mittwoch', 'woensdag'], ['Donnerstag', 'donderdag'], ['Freitag', 'vrijdag'], ['Samstag', 'zaterdag'], ['Sonntag', 'zondag'],
      ['die Woche', 'de week'], ['der Monat', 'de maand'], ['das Jahr', 'het jaar'], ['Januar, Februar, März', 'januari, februari, maart'], ['April, Mai, Juni', 'april, mei, juni'], ['Juli, August, September', 'juli, augustus, september'],
      ['Oktober, November, Dezember', 'oktober, november, december'], ['der Geburtstag', 'de verjaardag'], ['der Termin', 'de afspraak (zakelijk, dokter)'], ['die Verabredung', 'de afspraak (privé)'], ['die Party', 'het feest'],
      ['einladen', 'uitnodigen'], ['Zeit haben', 'tijd hebben'], ['Wann?', 'Wanneer?'], ['heute Abend', 'vanavond'], ['übermorgen', 'overmorgen'], ['nächste Woche', 'volgende week'], ['Das geht leider nicht.', 'Dat gaat helaas niet.'],
      ['Passt es dir am Freitag?', 'Schikt het je vrijdag?'], ['Bis dann!', 'Tot dan!'], ['Herzlichen Glückwunsch!', 'Gefeliciteerd!']
    ],
    grammar: [
      { t: 'am, um, im: voorzetsels van tijd', es: 'Temporale Präpositionen',
        html: `<p>Drie voorzetsels dekken bijna alles: <b>um</b> + kloktijd (<i>um acht Uhr</i>), <b>am</b> + dag, dagdeel en datum (<i>am Montag, am Abend, am 3. Mai</i>), <b>im</b> + maand, seizoen en jaar-met-woord (<i>im Januar, im Sommer</i>).</p>
<p>Het Nederlands zegt <i>op maandag</i> en <i>in januari</i>; in het Duits is <i>op</i> dus <b>am</b>, nooit <s>auf Montag</s>.</p>
<p><b>Uitzondering:</b> het is <b>in der Nacht</b> (niet <s>am Nacht</s>). <b>Waarom?</b> <i>Am</i> is <i>an dem</i>, en dat past alleen bij <i>der</i>- en <i>das</i>-woorden (<i>der Abend, der Montag</i>). <i>Nacht</i> is <i>die</i>, en daarbij hoort <i>in der</i>. En een jaartal krijgt géén voorzetsel: <i>Ich bin 1994 geboren</i> (niet <s>in 1994</s>).</p>`,
        table: [['voorzetsel', 'wanneer', 'voorbeeld'], ['um', 'kloktijd', 'um halb neun'], ['am', 'dag, dagdeel, datum', 'am Freitag, am Morgen, am 5. Juni'], ['im', 'maand, seizoen', 'im März, im Winter'], ['in der', 'nacht', 'in der Nacht'], ['—', 'jaartal', '2025']],
        sum: 'Um acht Uhr, am Montag, im Januar.',
        ex: [['Die Party ist am Samstag um acht Uhr.', 'Het feest is zaterdag om acht uur.'], ['Ich habe im Juli Geburtstag.', 'Ik ben in juli jarig.'], ['Am Wochenende habe ich Zeit.', 'In het weekend heb ik tijd.']] },
      { t: 'De datum en de volgorde tijd – plaats', es: 'Das Datum und die Wortstellung',
        html: `<p>De datum zeg je met een rangtelwoord: tot 19 met <b>-te</b>, vanaf 20 met <b>-ste</b>: <i>der zweite, der vierte, der zwanzigste</i>. Na <b>am</b> komt er <b>-n</b> bij: <i>am zweite<b>n</b> Mai, am zwanzigste<b>n</b> Juni</i>. Je schrijft een punt: <i>am 2. Mai</i>.</p>
<p><b>Uitzondering:</b> <b>der erste</b> (1e), <b>der dritte</b> (3e) en <b>der siebte</b> (7e) zijn onregelmatig, niet <s>einte</s>, <s>dreite</s>, <s>siebente</s>. <b>Waarom?</b> Het zijn heel oude vormen; ook het Nederlands heeft <i>eerste</i> en <i>derde</i> in plaats van «eende» en «driede».</p>
<p>In een Duitse zin komt <b>tijd vóór plaats</b>: <i>Ich fahre <b>am Samstag nach Berlin</b>.</i> Ezelsbrug: <b>te-ka-mo-lo</b> (temporal, kausal, modal, lokal): wanneer – waarom – hoe – waar.</p>`,
        table: [['datum', 'je zegt'], ['1.5.', 'der erste Mai / am ersten Mai'], ['3.10.', 'der dritte Oktober / am dritten Oktober'], ['7.7.', 'der siebte Juli / am siebten Juli'], ['24.12.', 'der vierundzwanzigste Dezember / am vierundzwanzigsten Dezember']],
        ex: [['Wann hast du Geburtstag? — Am dritten April.', 'Wanneer ben je jarig? — Op drie april.'], ['Wir fahren im Sommer mit dem Zug nach Wien.', 'We gaan in de zomer met de trein naar Wenen.']] }
    ],
    dialogue: {
      t: 'Hast du am Freitag Zeit?', place: 'Hannover 🇩🇪',
      lines: [
        ['Lea', 'Hallo Tim! Ich habe am Freitag Geburtstag und mache eine Party. Hast du Zeit?', 'Hoi Tim! Ik ben vrijdag jarig en geef een feest. Heb je tijd?'],
        ['Tim', 'Am Freitag? Das ist der zwölfte, oder?', 'Vrijdag? Dat is de twaalfde, toch?'],
        ['Lea', 'Nein, der dreizehnte. Freitag, der dreizehnte Juni!', 'Nee, de dertiende. Vrijdag de dertiende juni!'],
        ['Tim', 'Oh nein. Am Freitag habe ich um sechs Uhr einen Termin beim Zahnarzt.', 'O nee. Vrijdag heb ik om zes uur een afspraak bij de tandarts.'],
        ['Lea', 'Kein Problem. Die Party fängt erst um acht Uhr an.', 'Geen probleem. Het feest begint pas om acht uur.'],
        ['Tim', 'Super, dann komme ich gern. Wo feierst du?', 'Super, dan kom ik graag. Waar vier je het?'],
        ['Lea', 'Bei mir zu Hause. Ich lade auch Mila und Jonas ein.', 'Bij mij thuis. Ik nodig ook Mila en Jonas uit.'],
        ['Tim', 'Schön! Was möchtest du zum Geburtstag?', 'Leuk! Wat wil je voor je verjaardag?'],
        ['Lea', 'Nichts! Bring einfach gute Laune mit. Bis Freitag!', 'Niets! Neem gewoon een goed humeur mee. Tot vrijdag!']
      ],
      q: [
        { t: 'mc', q: 'Wann hat Lea Geburtstag?', o: ['Am 13. Juni', 'Am 12. Juni', 'Am 30. Juni'] },
        { t: 'mc', q: 'Was hat Tim am Freitag um sechs Uhr?', o: ['Einen Termin beim Zahnarzt', 'Eine Party', 'Arbeit'] },
        { t: 'mc', q: 'Wo ist die Party?', o: ['Bei Lea zu Hause', 'In einem Restaurant', 'Bei Tim'] }
      ]
    },
    culture: { t: 'Nooit te vroeg feliciteren', html: `<p>Feliciteer een Duitser <b>nooit vóór</b> zijn verjaardag: dat brengt ongeluk. Veel mensen doen daarom aan <b>reinfeiern</b>: op de avond ervoor samenkomen en om middernacht proosten.</p>
<p>De jarige trakteert zelf, ook op het werk: je neemt taart mee voor je collega’s. Je feliciteert alleen de jarige, niet de hele familie zoals in Nederland.</p>
<p>📅 Het verschil tussen <b>Termin</b> en <b>Verabredung</b>: een <i>Termin</i> heb je bij de dokter, de kapper of op het werk; een <i>Verabredung</i> met vrienden. De datum schrijf je met punten: <i>13.06.2025</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Die Party ist ___ Samstag.', a: ['am'], o: ['am', 'im', 'um'], nl: 'Het feest is op zaterdag.', tag: 'de-tempo' },
      { t: 'cloze', s: 'Der Film fängt ___ acht Uhr an.', a: ['um'], o: ['um', 'am', 'im'], nl: 'De film begint om acht uur.', tag: 'de-tempo' },
      { t: 'cloze', s: 'Ich habe ___ Juli Geburtstag.', a: ['im'], o: ['im', 'am', 'um'], nl: 'Ik ben in juli jarig.', tag: 'de-tempo' },
      { t: 'cloze', s: '___ Abend sehe ich fern.', a: ['Am'], o: ['Am', 'Im', 'Um'], nl: '’s Avonds kijk ik tv.', tag: 'de-tempo' },
      { t: 'cloze', s: 'In ___ Nacht schlafe ich.', a: ['der'], o: ['der', 'dem', 'die'], nl: '’s Nachts slaap ik.', x: 'Uitzondering: in der Nacht, niet am Nacht. Am = an dem en past alleen bij der/das-woorden; Nacht is die.', tag: 'de-tempo' },
      { t: 'mc', q: 'Hoe zeg je «Ik ben in 1994 geboren»?', o: ['Ich bin 1994 geboren.', 'Ich bin in 1994 geboren.', 'Ich bin am 1994 geboren.'], x: 'Uitzondering: een jaartal krijgt in het Duits geen voorzetsel.', tag: 'de-tempo' },
      { t: 'mc', q: 'Hoe zeg je «op 3 mei»?', o: ['am dritten Mai', 'am dreiten Mai', 'im dritten Mai'], x: 'Uitzondering: dritte is onregelmatig (niet dreite), net als erste en siebte.', tag: 'de-num' },
      { t: 'mc', q: 'Hoe zeg je «de eerste januari»?', o: ['der erste Januar', 'der einte Januar', 'der einste Januar'], tag: 'de-num' },
      { t: 'mc', q: 'Welke zin heeft de juiste volgorde?', o: ['Ich fahre am Samstag nach Berlin.', 'Ich fahre nach Berlin am Samstag.', 'Ich am Samstag fahre nach Berlin.'], x: 'Tijd komt vóór plaats: wanneer – waar.', tag: 'de-v2' },
      { t: 'mc', q: 'Je hebt een afspraak bij de tandarts. Dat is een …', o: ['Termin', 'Verabredung', 'Party'], tag: 'de-vok' },
      { t: 'tr', nl: 'Heb je vrijdag tijd?', a: ['Hast du am Freitag Zeit?', 'Hast du Freitag Zeit?'], tag: 'de-tempo' },
      { t: 'tr', nl: 'Dat gaat helaas niet.', a: ['Das geht leider nicht.'], tag: 'de-vok' },
      { t: 'tr', nl: 'Wanneer ben je jarig?', a: ['Wann hast du Geburtstag?'], tag: 'de-w' },
      { t: 'order', s: 'Ich habe am Montag um neun Uhr einen Termin.', nl: 'Ik heb maandag om negen uur een afspraak.', tag: 'de-v2' },
      { t: 'match', p: [['Dienstag', 'dinsdag'], ['Mittwoch', 'woensdag'], ['Donnerstag', 'donderdag'], ['Samstag', 'zaterdag'], ['Sonntag', 'zondag']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Einladung', type: 'Uitnodiging per e-mail',
      p: [
        ['Liebe Freunde, am Samstag, dem 21. Juni, werde ich dreißig! Das möchte ich mit euch feiern. Die Party fängt um 19 Uhr an.', 'Lieve vrienden, zaterdag 21 juni word ik dertig! Dat wil ik met jullie vieren. Het feest begint om 19 uur.'],
        ['Wir feiern im Garten von meinen Eltern in Hannover, Lindenstraße 12. Es gibt Essen und Getränke. Bringt bitte gute Musik mit!', 'We vieren het in de tuin van mijn ouders in Hannover, Lindenstraße 12. Er is eten en drinken. Neem alsjeblieft goede muziek mee!'],
        ['Könnt ihr kommen? Schreibt mir bitte bis Mittwoch. Ich freue mich auf euch! Eure Lea', 'Kunnen jullie komen? Schrijf me alsjeblieft vóór woensdag. Ik kijk ernaar uit jullie te zien! Jullie Lea']
      ],
      gl: [['ich werde dreißig', 'ik word dertig'], ['feiern', 'vieren'], ['die Getränke', 'de drankjes'], ['bis Mittwoch', 'uiterlijk woensdag'], ['ich freue mich auf euch', 'ik kijk naar jullie uit']],
      q: [
        { t: 'mc', q: 'Wie alt wird Lea?', o: ['Dreißig', 'Dreizehn', 'Einundzwanzig'] },
        { t: 'mc', q: 'Wo ist die Party?', o: ['Im Garten von Leas Eltern', 'In Leas Wohnung', 'In einem Café'] },
        { t: 'mc', q: 'Was sollen die Gäste mitbringen?', o: ['Gute Musik', 'Essen', 'Getränke'] }
      ]
    },
    say: [['Hast du am Samstag Zeit?', 'Heb je zaterdag tijd?'], ['Ich habe im Mai Geburtstag.', 'Ik ben in mei jarig.'], ['Das geht leider nicht.', 'Dat gaat helaas niet.'], ['Herzlichen Glückwunsch zum Geburtstag!', 'Gefeliciteerd met je verjaardag!']],
    task: { nl: 'Nodig een vriend uit voor iets leuks: zeg wat, op welke dag, hoe laat en waar (3 of 4 zinnen).', model: 'Hallo Tim! Ich mache am Samstag, dem 5. Juli, eine Party. Sie fängt um acht Uhr an. Wir feiern bei mir zu Hause. Hast du Zeit?' },
    scenario: { nl: 'Je wilt met een Duitse collega afspreken, maar jullie agenda’s zitten vol.', role: 'You are Lea, a busy colleague from Hanover. The learner wants to meet for coffee. You cannot on Monday (dentist) or Wednesday (sport), but Thursday afternoon works. Simple German (A1), use "du".', goal: 'Vind een dag en tijd waarop jullie allebei kunnen.' }
  });

  /* ───────────────────────── A1 · 10 ───────────────────────── */
  U({
    id: 'de-a1-10', level: 'A1', icon: '🕰️', title: 'Gestern', nl: 'Vertellen wat je gisteren deed',
    goals: ['Over gisteren en vorige week vertellen', 'Het Perfekt maken met haben: ich habe gemacht', 'war en hatte gebruiken'],
    vocab: [
      ['gestern', 'gisteren'], ['vorgestern', 'eergisteren'], ['letzte Woche', 'vorige week'], ['letztes Jahr', 'vorig jaar'], ['am Wochenende', 'in het weekend'], ['schon', 'al'], ['noch nicht', 'nog niet'],
      ['gemacht', 'gedaan / gemaakt'], ['gekauft', 'gekocht'], ['gespielt', 'gespeeld'], ['gearbeitet', 'gewerkt'], ['gelernt', 'geleerd'], ['gekocht', 'gekookt'], ['gegessen', 'gegeten'], ['getrunken', 'gedronken'],
      ['gesehen', 'gezien'], ['gelesen', 'gelezen'], ['geschlafen', 'geslapen'], ['besucht', 'bezocht'], ['Ich war zu Hause.', 'Ik was thuis.'], ['Ich hatte keine Zeit.', 'Ik had geen tijd.'], ['Wie war es?', 'Hoe was het?'],
      ['Es war toll.', 'Het was geweldig.'], ['langweilig', 'saai'], ['müde', 'moe'], ['der Urlaub', 'de vakantie'], ['das Wetter', 'het weer']
    ],
    grammar: [
      { t: 'Het Perfekt: haben + voltooid deelwoord', es: 'Das Perfekt mit haben',
        html: `<p>Als Duitsers <b>praten</b> over het verleden, gebruiken ze bijna altijd het <b>Perfekt</b>, ook waar het Nederlands de onvoltooid verleden tijd neemt: <i>Gestern <b>habe</b> ich Pizza <b>gegessen</b></i> = Gisteren <i>at</i> ik pizza.</p>
<p>Je maakt het met <b>haben</b> op plaats 2 en het <b>voltooid deelwoord</b> helemaal achteraan. Regelmatig deelwoord: <b>ge- + stam + -t</b>: <i>machen → <b>ge</b>mach<b>t</b>, kaufen → gekauft, arbeiten → gearbeit<b>e</b>t</i>.</p>
<p><b>Uitzondering:</b> sterke werkwoorden eindigen op <b>-en</b> en veranderen vaak van klinker: <i>essen → <b>gegessen</b>, trinken → <b>getrunken</b>, sehen → <b>gesehen</b>, lesen → <b>gelesen</b></i>. <b>Waarom?</b> Het zijn dezelfde oude sterke werkwoorden als in het Nederlands (gegeten, gedronken, gezien). Meestal kun je de Nederlandse vorm als kompas gebruiken.</p>
<p><b>Uitzondering:</b> werkwoorden die beginnen met <i>be-, ver-, er-</i> en werkwoorden op <i>-ieren</i> krijgen <b>geen ge-</b>: <i>besuchen → <b>besucht</b>, studieren → <b>studiert</b></i>. <b>Waarom?</b> De klemtoon ligt bij deze werkwoorden niet op de eerste lettergreep, en <i>ge-</i> komt alleen vóór een beklemtoonde lettergreep.</p>`,
        table: [['heel werkwoord', 'deelwoord', 'voorbeeld'], ['machen', 'gemacht', 'Was hast du gemacht?'], ['kaufen', 'gekauft', 'Ich habe Brot gekauft.'], ['essen', 'gegessen', 'Wir haben Pizza gegessen.'], ['sehen', 'gesehen', 'Er hat einen Film gesehen.'], ['besuchen', 'besucht', 'Sie hat ihre Oma besucht.']],
        sum: 'Ich habe gemacht, du hast gekauft, er hat gegessen. Das Partizip steht am Ende.',
        ex: [['Was hast du gestern gemacht? — Ich habe gearbeitet.', 'Wat heb je gisteren gedaan? — Ik heb gewerkt.'], ['Wir haben am Wochenende einen Film gesehen.', 'We hebben in het weekend een film gezien.'], ['Hast du schon gegessen?', 'Heb je al gegeten?']] },
      { t: 'war en hatte', es: 'war und hatte',
        html: `<p>Bij <b>sein</b> en <b>haben</b> gebruiken Duitsers ook in de spreektaal de gewone verleden tijd (Präteritum): <b>ich war</b> (ik was) en <b>ich hatte</b> (ik had). Dat is korter dan <i>ich bin gewesen</i> en <i>ich habe gehabt</i>.</p>
<p>Let op: bij <b>ich</b> en <b>er/sie/es</b> is de vorm gelijk en zonder uitgang: <i>ich war, er war</i>; <i>ich hatte, er hatte</i>.</p>`,
        table: [['', 'sein', 'haben'], ['ich', 'war', 'hatte'], ['du', 'warst', 'hattest'], ['er / sie / es', 'war', 'hatte'], ['wir', 'waren', 'hatten'], ['ihr', 'wart', 'hattet'], ['sie / Sie', 'waren', 'hatten']],
        ex: [['Wo warst du gestern? — Ich war zu Hause.', 'Waar was je gisteren? — Ik was thuis.'], ['Wir hatten keine Zeit.', 'We hadden geen tijd.'], ['Das Wetter war schön.', 'Het weer was mooi.']] }
    ],
    dialogue: {
      t: 'Wie war dein Wochenende?', place: 'Dresden 🇩🇪',
      lines: [
        ['Sanne', 'Guten Morgen, Felix! Wie war dein Wochenende?', 'Goedemorgen, Felix! Hoe was je weekend?'],
        ['Felix', 'Es war toll! Am Samstag habe ich meine Eltern besucht.', 'Het was geweldig! Zaterdag heb ik mijn ouders bezocht.'],
        ['Sanne', 'Schön. Und was habt ihr gemacht?', 'Leuk. En wat hebben jullie gedaan?'],
        ['Felix', 'Wir haben zusammen gekocht und viel gegessen. Am Abend haben wir Karten gespielt.', 'We hebben samen gekookt en veel gegeten. ’s Avonds hebben we gekaart.'],
        ['Sanne', 'Und am Sonntag?', 'En zondag?'],
        ['Felix', 'Am Sonntag war ich müde. Ich habe lange geschlafen und ein Buch gelesen. Und du?', 'Zondag was ik moe. Ik heb lang geslapen en een boek gelezen. En jij?'],
        ['Sanne', 'Ich hatte keine Zeit für Hobbys. Ich habe Deutsch gelernt und Wäsche gewaschen.', 'Ik had geen tijd voor hobby’s. Ik heb Duits geleerd en de was gedaan.'],
        ['Felix', 'Das klingt langweilig!', 'Dat klinkt saai!'],
        ['Sanne', 'Ein bisschen. Aber am Abend habe ich einen guten Film gesehen.', 'Een beetje. Maar ’s avonds heb ik een goede film gezien.']
      ],
      q: [
        { t: 'mc', q: 'Wen hat Felix am Samstag besucht?', o: ['Seine Eltern', 'Seine Freunde', 'Sanne'] },
        { t: 'mc', q: 'Was hat Felix am Sonntag gemacht?', o: ['Lange geschlafen und gelesen', 'Karten gespielt', 'Gearbeitet'] },
        { t: 'mc', q: 'Was hat Sanne am Abend gemacht?', o: ['Einen Film gesehen', 'Deutsch gelernt', 'Gekocht'] }
      ]
    },
    culture: { t: 'Praten in het Perfekt, schrijven in het Präteritum', html: `<p>In gesprekken hoor je in Duitsland bijna alleen het <b>Perfekt</b>: <i>Ich habe gegessen.</i> De gewone verleden tijd (<i>ich aß</i>) kom je vooral tegen in boeken, kranten en sprookjes. In het zuiden en in Oostenrijk en Zwitserland is dat nog sterker.</p>
<p>Alleen <b>war</b>, <b>hatte</b> en de modale werkwoorden (<i>konnte, musste, wollte</i>) gebruik je ook in de spreektaal in het Präteritum.</p>
<p>🧺 Valse vriend: <b>gekocht</b> betekent <i>gekookt</i> (van kochen). <i>Gekocht</i> in het Nederlands is in het Duits <b>gekauft</b>!</p>` },
    ex: [
      { t: 'cloze', s: 'Ich ___ gestern gearbeitet.', a: ['habe'], o: ['habe', 'bin', 'hat'], nl: 'Ik heb gisteren gewerkt.', tag: 'de-perf' },
      { t: 'cloze', s: 'Was hast du am Wochenende ___?', a: ['gemacht'], o: ['gemacht', 'machen', 'gemachen'], nl: 'Wat heb je in het weekend gedaan?', tag: 'de-perf' },
      { t: 'cloze', s: 'Wir haben Pizza ___.', a: ['gegessen'], o: ['gegessen', 'geesst', 'gegesst'], nl: 'We hebben pizza gegeten.', x: 'Uitzondering: essen is sterk, het deelwoord eindigt op -en: gegessen (net als het Nederlandse gegeten).', tag: 'de-perf' },
      { t: 'cloze', s: 'Er hat einen Film ___.', a: ['gesehen'], o: ['gesehen', 'geseht', 'gesieht'], nl: 'Hij heeft een film gezien.', tag: 'de-perf' },
      { t: 'cloze', s: 'Sie hat ihre Oma ___.', a: ['besucht'], o: ['besucht', 'gebesucht', 'besuchen'], nl: 'Zij heeft haar oma bezocht.', x: 'Uitzondering: werkwoorden met be-, ver-, er- krijgen geen ge-, omdat de klemtoon niet op de eerste lettergreep ligt.', tag: 'de-perf' },
      { t: 'cloze', s: 'Ich habe Brot ___.', a: ['gekauft'], o: ['gekauft', 'gekocht', 'gekaufen'], nl: 'Ik heb brood gekocht.', x: 'Valse vriend: gekocht = gekookt. Gekocht (NL) = gekauft.', tag: 'de-perf' },
      { t: 'cloze', s: 'Gestern ___ ich zu Hause.', a: ['war'], o: ['war', 'hatte', 'bin'], nl: 'Gisteren was ik thuis.', tag: 'de-war' },
      { t: 'cloze', s: 'Wir ___ keine Zeit.', a: ['hatten'], o: ['hatten', 'waren', 'hatte'], nl: 'We hadden geen tijd.', tag: 'de-war' },
      { t: 'mc', q: 'Welke zin heeft de juiste woordvolgorde?', o: ['Ich habe gestern ein Buch gelesen.', 'Ich habe gelesen gestern ein Buch.', 'Ich gestern habe ein Buch gelesen.'], x: 'Haben staat op plaats 2, het deelwoord helemaal achteraan.', tag: 'de-perf' },
      { t: 'mc', q: 'Wat betekent «Ich habe gekocht»?', o: ['Ik heb gekookt.', 'Ik heb gekocht.', 'Ik heb gekeken.'], tag: 'de-vok' },
      { t: 'tr', nl: 'Wat heb je gisteren gedaan?', a: ['Was hast du gestern gemacht?'], tag: 'de-perf' },
      { t: 'tr', nl: 'Het was geweldig.', a: ['Es war toll.', 'Das war toll.'], tag: 'de-war' },
      { t: 'tr', nl: 'Ik heb lang geslapen.', a: ['Ich habe lange geschlafen.', 'Ich habe lang geschlafen.'], tag: 'de-perf' },
      { t: 'order', s: 'Am Samstag haben wir zusammen gekocht.', nl: 'Zaterdag hebben we samen gekookt.', tag: 'de-perf' },
      { t: 'match', p: [['gegessen', 'gegeten'], ['getrunken', 'gedronken'], ['gelesen', 'gelezen'], ['gekauft', 'gekocht'], ['gekocht', 'gekookt']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Mein Wochenende in Dresden', type: 'Dagboek',
      p: [
        ['Sonntag, 15. Juni. Dieses Wochenende war ich in Dresden. Am Samstag habe ich die Altstadt besucht und viele Fotos gemacht. Das Wetter war sehr schön.', 'Zondag 15 juni. Dit weekend was ik in Dresden. Zaterdag heb ik de oude binnenstad bezocht en veel foto’s gemaakt. Het weer was heel mooi.'],
        ['Am Mittag habe ich in einem kleinen Restaurant gegessen. Ich habe eine Suppe und einen Salat bestellt. Danach habe ich einen Kaffee getrunken und ein Stück Kuchen gegessen.', '’s Middags heb ik in een klein restaurant gegeten. Ik heb een soep en een salade besteld. Daarna heb ik een koffie gedronken en een stuk taart gegeten.'],
        ['Am Abend hatte ich keine Lust mehr auf Kultur. Ich habe im Hotel einen Film gesehen und gut geschlafen. Es war ein tolles Wochenende!', '’s Avonds had ik geen zin meer in cultuur. Ik heb in het hotel een film gekeken en goed geslapen. Het was een geweldig weekend!']
      ],
      gl: [['dieses Wochenende', 'dit weekend'], ['bestellt', 'besteld'], ['danach', 'daarna'], ['ein Stück', 'een stuk'], ['keine Lust mehr', 'geen zin meer']],
      q: [
        { t: 'mc', q: 'Wo war die Autorin am Wochenende?', o: ['In Dresden', 'In Berlin', 'Zu Hause'] },
        { t: 'mc', q: 'Was hat sie am Mittag gegessen?', o: ['Eine Suppe und einen Salat', 'Eine Pizza', 'Nur Kuchen'] },
        { t: 'mc', q: 'Was hat sie am Abend gemacht?', o: ['Einen Film gesehen', 'Die Altstadt besucht', 'Fotos gemacht'] }
      ]
    },
    say: [['Was hast du gestern gemacht?', 'Wat heb je gisteren gedaan?'], ['Ich habe einen Film gesehen.', 'Ik heb een film gezien.'], ['Ich war zu Hause.', 'Ik was thuis.'], ['Es war toll!', 'Het was geweldig!']],
    task: { nl: 'Vertel in 4 zinnen wat je gisteren of afgelopen weekend hebt gedaan en hoe het was.', model: 'Am Samstag habe ich Freunde besucht. Wir haben zusammen gekocht und einen Film gesehen. Am Sonntag war ich zu Hause und habe ein Buch gelesen. Es war ein schönes Wochenende.' },
    scenario: { nl: 'Het is maandagochtend. Je collega vraagt naar je weekend.', role: 'You are Felix, a friendly colleague in Dresden. It is Monday morning. Ask what the learner did on the weekend, react, ask one or two follow-up questions in the Perfekt, and tell briefly about your own weekend. Simple German (A1), use "du".', goal: 'Vertel wat je in het weekend hebt gedaan en vraag naar het zijne.' }
  });
})(window.SPT);
