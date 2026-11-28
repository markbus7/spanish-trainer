/* Duits voor Nederlandstaligen — niveau C2, units 6–10 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-amt': 'ambtelijke voorzetsels (gemäß, zwecks, mangels, laut)', 'de-vorschrift': 'wetstaal: muss, soll, kann, ist zu', 'de-ton': 'combinaties van toonwoordjes (ja wohl, eben doch, ruhig mal)', 'de-ironie': 'ironie en ondertoon herkennen',
    'de-wandel': 'taalverandering (wegen dem, weil + hoofdzin, gewunken)', 'de-fremd': 'Engelse leenwoorden in het Duits (geslacht, vervoeging)', 'de-sprichwort': 'spreekwoorden', 'de-zitat': 'gevleugelde woorden en citaten',
    'de-falsch': 'valse vrienden Nederlands–Duits', 'de-nlfehler': 'typische fouten van Nederlandstaligen'
  });

  /* ───────────────────────── C2 · 6 ───────────────────────── */
  U({
    id: 'de-c2-06', level: 'C2', icon: '⚖️', title: 'Juristen- und Amtsdeutsch', nl: 'Wetstaal en ambtelijk Duits ontcijferen',
    goals: ['Een officieel besluit (Bescheid) lezen en in gewoon Duits navertellen', 'Ambtelijke voorzetsels met de juiste naamval begrijpen', 'Het verschil tussen muss, soll en kann in regels kennen', 'Zelf een formeel bezwaar formuleren'],
    vocab: [
      ['die Behörde', 'de overheidsinstantie'], ['der Bescheid', 'het (officiële) besluit'], ['der Antrag', 'de aanvraag'], ['der Widerspruch', 'het bezwaar'], ['die Frist', 'de termijn'],
      ['der Paragraf (§)', 'de paragraaf, het artikel'], ['der Absatz (Abs.)', 'het lid (van een artikel)'], ['das Gesetz', 'de wet'], ['die Verordnung', 'de verordening'], ['die Vorschrift', 'het voorschrift'],
      ['die Rechtsbehelfsbelehrung', 'de bezwaarclausule'], ['der Sachbearbeiter / die Sachbearbeiterin', 'de behandelend ambtenaar'], ['das Aktenzeichen', 'het dossiernummer'], ['die Vollmacht', 'de volmacht'], ['die Bescheinigung', 'de verklaring, het bewijs'],
      ['die Unterlagen (mv.)', 'de stukken, de documenten'], ['einreichen', 'indienen'], ['bewilligen', 'toekennen'], ['ablehnen', 'afwijzen'], ['Widerspruch einlegen', 'bezwaar maken'],
      ['in Kraft treten', 'in werking treden'], ['unverzüglich', 'onverwijld'], ['fristgerecht', 'binnen de termijn'], ['erforderlich', 'vereist'], ['zuständig', 'bevoegd, verantwoordelijk'], ['rechtskräftig', 'onherroepelijk']
    ],
    grammar: [
      { t: 'Gemäß, zwecks, mangels: ambtelijke voorzetsels', es: 'Präpositionen der Verwaltungssprache',
        html: `<p>Ambtenaren en juristen gebruiken voorzetsels die je in een gesprek nooit hoort. Je hoeft ze niet zelf te gebruiken, maar je moet ze kunnen <b>vertalen naar gewoon Duits</b>.</p>
<p><b>Met de tweede naamval:</b> <i><b>zwecks</b></i> (ten behoeve van, om te) · <i><b>mangels</b></i> (bij gebrek aan) · <i><b>kraft</b></i> (krachtens) · <i><b>seitens</b></i> (van de kant van) · <i><b>hinsichtlich / bezüglich</b></i> (met betrekking tot) · <i><b>anlässlich</b></i> (ter gelegenheid van) · <i><b>ungeachtet</b></i> (ongeacht) · <i><b>vorbehaltlich</b></i> (onder voorbehoud van).</p>
<p><b>Met de derde naamval:</b> <i><b>gemäß</b></i> (overeenkomstig) · <i><b>entsprechend</b></i> (overeenkomstig) · <i><b>zufolge</b></i> (volgens; staat <b>achter</b> het naamwoord: <i>dem Bericht zufolge</i>) · <i><b>laut</b></i> (volgens; ook tweede naamval).</p>
<p>Daarbij horen verwijswoorden als <i>hiermit, hierzu, diesbezüglich, nachstehend, o. g. (oben genannt), i. V. m. (in Verbindung mit), ggf. (gegebenenfalls)</i>.</p>
<p><b>Uitzondering:</b> een naamwoord <b>zonder lidwoord of bijvoeglijk naamwoord</b> blijft na deze voorzetsels onverbogen, en in het meervoud krijgt het de derde naamval: <i>laut Vertrag, gemäß Paragraf 5, mangels Beweise<b>n</b>, zwecks Terminabsprache</i>. <b>Waarom?</b> Een tweede naamval moet in het Duits zichtbaar zijn aan een lidwoord of een uitgang van een bijvoeglijk naamwoord. Is er geen van beide, dan valt men terug op de onverbogen vorm of op de derde naamval, die wel herkenbaar is.</p>`,
        table: [['ambtelijk', 'naamval', 'gewoon Duits'], ['zwecks Prüfung der Unterlagen', '2', 'um die Unterlagen zu prüfen'], ['mangels ausreichender Beweise', '2', 'weil es nicht genug Beweise gibt'], ['gemäß dem Mietvertrag', '3', 'so, wie es im Mietvertrag steht'], ['dem Gutachten zufolge', '3 (achteraan)', 'im Gutachten steht, dass …'], ['seitens der Behörde', '2', 'von der Behörde'], ['hinsichtlich Ihrer Anfrage', '2', 'zu Ihrer Frage']],
        sum: 'gemäß dem Vertrag · mangels ausreichender Beweise · zwecks Terminabsprache · dem Bericht zufolge',
        ex: [['Zwecks Terminvereinbarung bitten wir um Rückruf.', 'Voor het maken van een afspraak verzoeken wij u terug te bellen.'], ['Der Antrag wurde mangels Unterlagen abgelehnt.', 'De aanvraag is bij gebrek aan stukken afgewezen.'], ['Gemäß § 5 Abs. 2 ist die Miete im Voraus zu zahlen.', 'Volgens artikel 5 lid 2 moet de huur vooruit worden betaald.']] },
      { t: 'Muss, soll, kann: hoe dwingend is een regel?', es: 'Muss-, Soll- und Kann-Vorschriften',
        html: `<p>In wetten, contracten en besluiten heeft elk hulpwerkwoord een <b>vaste juridische betekenis</b>. Daar hangt vanaf of je ergens recht op hebt.</p>
<p><b>Muss-Vorschrift</b> (geen keuze): <i>muss</i>, <i><b>ist zu</b> + heel werkwoord</i>, <i><b>hat zu</b> + heel werkwoord</i>, of gewoon de tegenwoordige tijd: <i>Der Mieter <b>hat</b> die Schäden <b>zu</b> ersetzen.</i> · <i>Der Antrag <b>ist</b> schriftlich <b>zu</b> stellen.</i> · <i>Die Behörde <b>erteilt</b> die Genehmigung.</i></p>
<p><b>Soll-Vorschrift</b> (in de regel verplicht): <i>Der Bescheid <b>soll</b> innerhalb von vier Wochen ergehen.</i></p>
<p><b>Kann-Vorschrift</b> (de instantie mag kiezen, <i>Ermessen</i>): <i>Die Behörde <b>kann</b> eine Ausnahme zulassen.</i></p>
<p><b>Verbod:</b> <i><b>darf nicht</b></i>, <i><b>ist nicht gestattet</b></i>, <i><b>ist unzulässig</b></i>.</p>
<p>Let ook op <i><b>grundsätzlich</b></i>: in de omgangstaal betekent het «uit principe, altijd», bij juristen «in de regel, maar met uitzonderingen».</p>
<p><b>Uitzondering:</b> <i>soll</i> is in een wet <b>geen advies</b>, zoals in de gewone taal (<i>Du sollst mehr schlafen</i>), maar een <b>verplichting</b> waarvan alleen in een ongewoon geval mag worden afgeweken. <b>Waarom?</b> De wetgever heeft een tussenstap nodig tussen «altijd» en «naar keuze». Juristen hebben daarvoor <i>sollen</i> vastgelegd als «moet, tenzij er een bijzondere reden is». Wie een Soll-Vorschrift leest als vriendelijke aanbeveling, mist een termijn.</p>`,
        table: [['formulering', 'betekenis', 'ruimte voor de instantie'], ['muss / ist zu / hat zu', 'verplicht', 'geen'], ['soll', 'verplicht in het normale geval', 'alleen bij bijzondere reden'], ['kann', 'bevoegdheid', 'vrije afweging (Ermessen)'], ['darf nicht', 'verbod', 'geen'], ['grundsätzlich', 'in de regel', 'uitzonderingen mogelijk']],
        ex: [['Der Widerspruch ist innerhalb eines Monats einzulegen.', 'Het bezwaar moet binnen een maand worden ingediend.'], ['Die Behörde kann die Frist verlängern.', 'De instantie kan de termijn verlengen.'], ['Hunde sind grundsätzlich an der Leine zu führen.', 'Honden moeten in de regel aan de lijn.']] }
    ],
    dialogue: {
      t: 'Was steht in diesem Bescheid?', place: 'Köln 🇩🇪',
      lines: [
        ['Anna', 'Guten Tag, Herr Krause. Ich habe diesen Bescheid bekommen und verstehe ihn ehrlich gesagt nicht.', 'Goedendag meneer Krause. Ik heb dit besluit gekregen en begrijp het eerlijk gezegd niet.'],
        ['Herr Krause', 'Zeigen Sie mal. «Gemäß § 12 Abs. 3 ist der Antrag mangels Vorlage der erforderlichen Unterlagen abzulehnen.» Ja, das ist unser schönstes Deutsch.', 'Laat eens zien. «Overeenkomstig artikel 12 lid 3 dient de aanvraag bij gebrek aan overlegging van de vereiste stukken te worden afgewezen.» Ja, dat is ons mooiste Duits.'],
        ['Anna', 'Was heißt das in normalen Worten?', 'Wat betekent dat in gewone woorden?'],
        ['Herr Krause', 'Wir mussten Ihren Antrag ablehnen, weil ein Dokument fehlt. Nämlich die Bescheinigung Ihres Arbeitgebers.', 'We moesten uw aanvraag afwijzen omdat er een document ontbreekt. Namelijk de verklaring van uw werkgever.'],
        ['Anna', 'Die habe ich inzwischen. Kann ich sie nachreichen?', 'Die heb ik inmiddels. Kan ik die nasturen?'],
        ['Herr Krause', 'Ja. Hier unten steht die Rechtsbehelfsbelehrung: Der Widerspruch ist innerhalb eines Monats schriftlich einzulegen.', 'Ja. Hier onderaan staat de bezwaarclausule: het bezwaar moet binnen een maand schriftelijk worden ingediend.'],
        ['Anna', '«Ist einzulegen» bedeutet «muss», oder? Nicht «kann»?', '«Ist einzulegen» betekent «moet», toch? Niet «kan»?'],
        ['Herr Krause', 'Genau. Wenn Sie widersprechen wollen, dann nur schriftlich und fristgerecht. Schreiben Sie das Aktenzeichen dazu, sonst findet es bei uns niemand.', 'Precies. Als u bezwaar wilt maken, dan alleen schriftelijk en binnen de termijn. Zet het dossiernummer erbij, anders vindt niemand het hier terug.'],
        ['Anna', 'Vielen Dank. Wenn alle Bescheide so erklärt würden, bräuchte man keinen Anwalt.', 'Hartelijk dank. Als alle besluiten zo werden uitgelegd, had je geen advocaat nodig.']
      ],
      q: [
        { t: 'mc', q: 'Warum wurde der Antrag abgelehnt?', o: ['Weil ein Dokument fehlte', 'Weil die Frist abgelaufen war', 'Weil Anna nicht zuständig war'] },
        { t: 'mc', q: 'Was bedeutet «ist einzulegen»?', o: ['muss eingelegt werden', 'kann eingelegt werden', 'wurde eingelegt'] },
        { t: 'mc', q: 'Was soll Anna auf den Widerspruch schreiben?', o: ['Das Aktenzeichen', 'Ihre Telefonnummer', 'Den Namen ihres Anwalts'] }
      ]
    },
    culture: { t: 'Beamtendeutsch en de strijd om begrijpelijke taal', html: `<p>⚖️ Het Duitse ambtelijke taalgebruik heeft een eigen spotnaam: <b>Beamtendeutsch</b> of <i>Behördendeutsch</i>. Beroemde voorbeelden zijn de <i>Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz</i> (een echte wet uit Mecklenburg-Vorpommern, 63 letters) en het woord <i>raumübergreifendes Großgrün</i> voor een boom.</p>
<p>De reden is niet alleen gewoonte: een besluit moet <b>voor de rechter standhouden</b>, dus kiezen ambtenaren de formulering uit de wet. Sinds een aantal jaren hebben veel gemeenten daarom vertalers voor <b>Leichte Sprache</b> en <b>Einfache Sprache</b> in dienst, en de Bondsdag heeft een eigen redactie die wetsontwerpen op begrijpelijkheid controleert.</p>
<p>Praktisch: onder elk besluit staat de <b>Rechtsbehelfsbelehrung</b>. Daar lees je bij wie en binnen welke termijn (meestal één maand) je bezwaar kunt maken. Ontbreekt die tekst of klopt hij niet, dan wordt de termijn een jaar.</p>` },
    ex: [
      { t: 'cloze', s: '___ dem Mietvertrag ist die Miete im Voraus zu zahlen.', a: ['Gemäß'], o: ['Gemäß', 'Zwecks', 'Mangels'], nl: 'Overeenkomstig het huurcontract moet de huur vooruit worden betaald.', tag: 'de-amt' },
      { t: 'cloze', s: 'Der Antrag wurde ___ ausreichender Beweise abgelehnt.', a: ['mangels'], o: ['mangels', 'gemäß', 'zufolge'], nl: 'De aanvraag is bij gebrek aan voldoende bewijs afgewezen.', tag: 'de-amt' },
      { t: 'cloze', s: 'Dem Gutachten ___ ist das Haus sicher.', a: ['zufolge'], o: ['zufolge', 'gemäß', 'laut'], nl: 'Volgens het rapport is het huis veilig.', x: 'Zufolge staat achter het naamwoord en krijgt de derde naamval.', tag: 'de-amt' },
      { t: 'cloze', s: 'mangels ___ (bewijzen, zonder lidwoord)', a: ['Beweisen'], o: ['Beweisen', 'Beweise', 'Beweises'], nl: 'bij gebrek aan bewijzen', x: 'Uitzondering: zonder lidwoord of bijvoeglijk naamwoord staat het meervoud in de derde naamval. Reden: een tweede naamval moet zichtbaar zijn aan een lidwoord of uitgang.', tag: 'de-amt' },
      { t: 'cloze', s: 'Der Widerspruch ___ schriftlich einzulegen.', a: ['ist'], o: ['ist', 'kann', 'soll'], nl: 'Het bezwaar moet schriftelijk worden ingediend.', tag: 'de-vorschrift' },
      { t: 'cloze', s: 'Der Mieter ___ die Schäden zu ersetzen.', a: ['hat'], o: ['hat', 'ist', 'wird'], nl: 'De huurder moet de schade vergoeden.', tag: 'de-vorschrift' },
      { t: 'cloze', s: 'Die Behörde ___ eine Ausnahme zulassen. (ze mag kiezen)', a: ['kann'], o: ['kann', 'muss', 'hat'], nl: 'De instantie kan een uitzondering toestaan.', tag: 'de-vorschrift' },
      { t: 'mc', q: 'In een wet staat: «Der Bescheid soll innerhalb von vier Wochen ergehen.» Wat betekent dat?', o: ['Het moet, tenzij er een bijzondere reden is', 'Het is een vriendelijk advies', 'De instantie mag zelf kiezen'], x: 'Uitzondering op het gewone gebruik van sollen: in wetstaal is het een verplichting voor het normale geval. Reden: juristen hebben een tussenstap nodig tussen «altijd» en «naar keuze».', tag: 'de-vorschrift' },
      { t: 'mc', q: 'Wat betekent «grundsätzlich» in een juridische tekst?', o: ['in de regel, met uitzonderingen', 'altijd, zonder uitzondering', 'nooit'], tag: 'de-vorschrift' },
      { t: 'mc', q: 'Hoe zeg je «zwecks Prüfung der Unterlagen» in gewoon Duits?', o: ['um die Unterlagen zu prüfen', 'weil die Unterlagen fehlen', 'trotz der Unterlagen'], tag: 'de-amt' },
      { t: 'tr', nl: 'Ik maak hierbij bezwaar tegen het besluit.', a: ['Hiermit lege ich Widerspruch gegen den Bescheid ein.', 'Ich lege hiermit Widerspruch gegen den Bescheid ein.'], tag: 'de-amt' },
      { t: 'tr', nl: 'volgens contract (met laut, zonder lidwoord)', a: ['laut Vertrag'], tag: 'de-amt' },
      { t: 'tr', nl: 'De aanvraag moet schriftelijk worden ingediend. (met ist … zu)', a: ['Der Antrag ist schriftlich einzureichen.', 'Der Antrag ist schriftlich zu stellen.'], tag: 'de-vorschrift' },
      { t: 'order', s: 'Der Widerspruch ist innerhalb eines Monats schriftlich einzulegen.', nl: 'Het bezwaar moet binnen een maand schriftelijk worden ingediend.', tag: 'de-vorschrift' },
      { t: 'match', p: [['der Bescheid', 'het besluit'], ['die Frist', 'de termijn'], ['einreichen', 'indienen'], ['unverzüglich', 'onverwijld'], ['zuständig', 'bevoegd']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Ablehnungsbescheid und Übersetzung', type: 'Officieel besluit',
      p: [
        ['Sehr geehrte Frau de Vries, hinsichtlich Ihres Antrags auf Erteilung eines Bewohnerparkausweises vom 3. März teilen wir Ihnen mit, dass diesem gemäß § 4 Abs. 1 der Parkraumverordnung nicht entsprochen werden kann. Die Erteilung setzt voraus, dass der Antragsteller mit Hauptwohnsitz im betreffenden Gebiet gemeldet ist.', 'Geachte mevrouw de Vries, met betrekking tot uw aanvraag van 3 maart voor een bewonersparkeervergunning delen wij u mee dat hieraan op grond van artikel 4 lid 1 van de parkeerverordening niet kan worden voldaan. Voor toekenning is vereist dat de aanvrager met hoofdverblijf in het betreffende gebied staat ingeschreven.'],
        ['Laut Melderegister sind Sie dort lediglich mit Nebenwohnsitz erfasst. Mangels Erfüllung der genannten Voraussetzung war der Antrag abzulehnen. In begründeten Einzelfällen kann die Behörde eine Ausnahme zulassen; ein entsprechender Nachweis wäre unverzüglich einzureichen.', 'Volgens het bevolkingsregister staat u daar slechts met een tweede verblijf geregistreerd. Omdat niet aan de genoemde voorwaarde is voldaan, moest de aanvraag worden afgewezen. In gemotiveerde afzonderlijke gevallen kan de instantie een uitzondering toestaan; een bijbehorend bewijs zou onverwijld moeten worden ingediend.'],
        ['Auf gut Deutsch: Frau de Vries bekommt keinen Parkausweis, weil sie in dem Viertel nur ihren zweiten Wohnsitz hat. Wenn sie einen guten Grund hat, zum Beispiel ihre Arbeit, darf das Amt trotzdem Ja sagen, muss es aber nicht. Den Beweis soll sie so schnell wie möglich schicken. Gegen den Bescheid kann sie einen Monat lang Widerspruch einlegen.', 'In gewoon Duits: mevrouw de Vries krijgt geen parkeervergunning omdat ze in die wijk alleen haar tweede woonadres heeft. Als ze een goede reden heeft, bijvoorbeeld haar werk, mag de instantie toch ja zeggen, maar dat hoeft niet. Het bewijs moet ze zo snel mogelijk opsturen. Tegen het besluit kan ze een maand lang bezwaar maken.']
      ],
      gl: [['die Erteilung', 'de toekenning, de afgifte'], ['einem Antrag entsprechen', 'een aanvraag inwilligen'], ['der Hauptwohnsitz', 'het hoofdverblijf'], ['lediglich', 'slechts'], ['die Voraussetzung', 'de voorwaarde'], ['der Nachweis', 'het bewijs']],
      q: [
        { t: 'mc', q: 'Warum bekommt Frau de Vries keinen Parkausweis?', o: ['Sie ist dort nur mit Nebenwohnsitz gemeldet', 'Sie hat kein Auto', 'Sie hat den Antrag zu spät gestellt'] },
        { t: 'mc', q: 'Was bedeutet «kann die Behörde eine Ausnahme zulassen»?', o: ['Das Amt darf Ja sagen, muss aber nicht', 'Das Amt muss eine Ausnahme machen', 'Ausnahmen sind verboten'] },
        { t: 'mc', q: 'Was heißt «unverzüglich einzureichen»?', o: ['so schnell wie möglich schicken', 'innerhalb eines Jahres schicken', 'nicht schicken'] }
      ]
    },
    say: [['Hiermit lege ich Widerspruch ein.', 'Hierbij maak ik bezwaar.'], ['Was heißt das in normalen Worten?', 'Wat betekent dat in gewone woorden?'], ['Der Antrag ist schriftlich zu stellen.', 'De aanvraag moet schriftelijk worden ingediend.']],
    task: { nl: 'Schrijf een kort formeel bezwaar (4 à 5 zinnen) tegen een afgewezen aanvraag. Noem het dossiernummer, verwijs met gemäß of laut naar een regel, leg uit welk stuk je alsnog meestuurt en vraag om een nieuw besluit.', model: 'Sehr geehrte Damen und Herren, hiermit lege ich fristgerecht Widerspruch gegen Ihren Bescheid vom 10. April ein (Aktenzeichen 42/1178). Laut Bescheid wurde mein Antrag mangels einer Bescheinigung des Arbeitgebers abgelehnt. Diese Bescheinigung reiche ich hiermit nach. Gemäß § 12 Abs. 3 sind damit alle Voraussetzungen erfüllt. Ich bitte Sie daher, meinen Antrag erneut zu prüfen. Mit freundlichen Grüßen' },
    scenario: { nl: 'Je hebt een Duits besluit gekregen dat je niet begrijpt en gaat naar het loket van de gemeente.', role: 'Herr Krause, een behulpzame ambtenaar in Keulen die ambtelijke taal in gewoon Duits kan omzetten', goal: 'Vraag wat een zin uit het besluit betekent, vraag of iets «moet» of «kan», en vraag hoe je bezwaar maakt.' }
  });

  /* ───────────────────────── C2 · 7 ───────────────────────── */
  U({
    id: 'de-c2-07', level: 'C2', icon: '😏', title: 'Ironie und Zwischentöne', nl: 'Ironie en ondertoon: wat er écht bedoeld wordt',
    goals: ['Ironie herkennen aan woordkeus en toonwoordjes', 'Combinaties van toonwoordjes begrijpen (ja wohl, eben doch, ruhig mal)', 'Tussen de regels lezen: kritiek die als lof verpakt is', 'Zelf met een knipoog reageren'],
    vocab: [
      ['die Ironie', 'de ironie'], ['der Spott', 'de spot'], ['der Unterton', 'de ondertoon'], ['die Andeutung', 'de toespeling, de hint'], ['zwischen den Zeilen lesen', 'tussen de regels door lezen'],
      ['etwas durch die Blume sagen', 'iets omfloerst zeggen'], ['augenzwinkernd', 'met een knipoog'], ['trocken', 'droog (van humor)'], ['bissig', 'bijtend'], ['schnippisch', 'snibbig'],
      ['etwas ernst meinen', 'iets serieus bedoelen'], ['jemanden auf den Arm nehmen', 'iemand voor de gek houden'], ['jemanden aufziehen', 'iemand plagen'], ['Na toll!', 'Nou, lekker dan!'], ['Schöne Bescherung!', 'Dat is een mooie boel!'],
      ['Das hat mir gerade noch gefehlt.', 'Dat kon er ook nog wel bij.'], ['Du bist mir ja einer!', 'Jij bent me er ook eentje!'], ['Von wegen!', 'Mooi niet! Dat had je gedacht!'], ['ausgerechnet', 'uitgerekend'], ['eh · ohnehin · sowieso', 'toch al, sowieso'],
      ['ruhig', 'gerust (toonwoordje)'], ['wohl', 'zeker, vermoedelijk'], ['nun mal', 'nu eenmaal'], ['immerhin', 'in elk geval, toch nog'], ['allerdings', 'weliswaar; nou en of'], ['gewissermaßen', 'in zekere zin']
    ],
    grammar: [
      { t: 'Ja wohl, eben doch, ruhig mal: toonwoordjes in combinatie', es: 'Kombinationen von Modalpartikeln',
        html: `<p>Losse toonwoordjes (<i>ja, doch, mal, eben, halt</i>) ken je al. Moedertaalsprekers <b>stapelen</b> ze, en elke combinatie heeft een eigen kleur.</p>
<p><b>ja wohl</b> (verontwaardiging): <i>Das ist <b>ja wohl</b> die Höhe!</i> (Dat is toch zeker het toppunt!)<br><b>doch wohl</b> (bange hoop): <i>Du hast <b>doch wohl</b> nicht den Schlüssel vergessen?</i><br><b>eben doch / halt doch</b> (zie je wel): <i>Es war <b>eben doch</b> zu teuer.</i><br><b>nun mal / eben / halt</b> (er is niets aan te doen): <i>Das ist <b>nun mal</b> so.</i><br><b>ruhig mal</b> (vriendelijke aanmoediging): <i>Du kannst <b>ruhig mal</b> fragen.</i><br><b>schon mal</b> (alvast): <i>Fang <b>schon mal</b> an.</i><br><b>aber auch</b> (verbaasde bevestiging): <i>Das ist <b>aber auch</b> teuer!</i><br><b>doch mal / doch einfach</b> (voorstel): <i>Ruf <b>doch einfach mal</b> an.</i><br><b>eh / sowieso / ohnehin</b> (toch al): <i>Ich wollte <b>eh</b> gehen.</i></p>
<p>De <b>volgorde ligt vast</b>: <i>ja</i> en <i>denn</i> eerst, dan <i>doch, eben, halt</i>, dan <i>wohl, auch, schon</i>, en <i>mal</i> als laatste: <i>Das kannst du <b>ja doch wohl mal</b> machen.</i></p>
<p><b>Uitzondering:</b> <i>ruhig</i> betekent als toonwoordje <b>niet «rustig, stil»</b>: <i>Ihr könnt <b>ruhig</b> laut sein</i> is geen tegenspraak, maar betekent «jullie mogen gerust lawaai maken». <b>Waarom?</b> Het toonwoordje komt van de betekenis «met een gerust hart, zonder zorgen» en geeft toestemming. Het krijgt dan <b>geen klemtoon</b>; met klemtoon is het weer het gewone bijvoeglijk naamwoord.</p>`,
        table: [['combinatie', 'kleur', 'voorbeeld'], ['ja wohl', 'verontwaardigd', 'Das ist ja wohl ein Witz!'], ['doch wohl', 'ongerust', 'Du gehst doch wohl nicht schon?'], ['eben doch', 'zie je wel', 'Er hatte eben doch recht.'], ['nun mal', 'berusting', 'So bin ich nun mal.'], ['ruhig mal', 'aanmoediging', 'Sag es ruhig mal laut.'], ['aber auch', 'verbazing', 'Du hast aber auch ein Glück!']],
        sum: 'Das ist ja wohl die Höhe! · Das ist nun mal so. · Frag ruhig mal nach.',
        ex: [['Das hättest du mir ja ruhig mal sagen können.', 'Dat had je me nou best eens kunnen zeggen.'], ['Er kommt wohl doch nicht mehr.', 'Hij komt zeker toch niet meer.'], ['Wenn du eh in die Stadt fährst, nimm mich mit.', 'Als je toch al naar de stad gaat, neem me dan mee.']] },
      { t: 'Na toll! Ironie herkennen', es: 'Ironiesignale',
        html: `<p>Ironie werkt in het Duits droger dan in het Nederlands en wordt minder vaak met een lach aangekondigd. Let op deze signalen:</p>
<p><b>1. Lof met <i>ja, ja mal wieder, na</i>:</b> <i>Das hast du <b>ja mal wieder</b> toll hingekriegt.</i> · <i><b>Na</b> super.</i> · <i><b>Na</b>, das kann <b>ja</b> heiter werden.</i> (dat belooft wat)</p>
<p><b>2. <i>schön</i> en <i>fein</i> bij iets vervelends:</b> <i>Das ist ja eine <b>schöne</b> Bescherung.</i> · <i>Du bist mir ein <b>feiner</b> Freund.</i></p>
<p><b>3. De «betrokken» derde naamval <i>mir</i>:</b> <i>Du bist <b>mir</b> ja einer!</i> · <i>Das war <b>mir</b> vielleicht ein Abend!</i></p>
<p><b>4. Vaste afwijzingen:</b> <i><b>Von wegen!</b></i> (mooi niet) · <i><b>Das wäre ja noch schöner!</b></i> (dat ontbrak er nog aan) · <i><b>Wer’s glaubt, wird selig.</b></i> (maak dat de kat wijs)</p>
<p><b>5. Overdreven beleefdheid:</b> <i>Wären der Herr vielleicht so gütig, den Müll rauszubringen?</i></p>
<p><b>Uitzondering:</b> <i>ganz</i> kan versterken én afzwakken. <i><b>Ganz</b> toll, ganz falsch, ganz allein</i> = helemaal; maar <i><b>ganz</b> gut, ganz nett, ganz schön</i> (zonder klemtoon op <i>ganz</i>) = «redelijk, best wel». Een Duitser die je eten <i>ganz gut</i> noemt, is matig enthousiast. <b>Waarom?</b> Bij woorden die al een uiterste aanduiden, kan <i>ganz</i> alleen «volledig» betekenen. Bij gewone positieve woorden die je in gradaties kunt denken, is het onbeklemtoonde <i>ganz</i> verzwakt tot «tamelijk». Met klemtoon (<i><b>gánz</b> gut</i> bestaat nauwelijks) kiest men liever <i>sehr</i> of <i>richtig</i>.</p>`,
        table: [['letterlijk', 'bedoeld'], ['Na toll.', 'Wat vervelend.'], ['Das hast du ja fein gemacht.', 'Dat heb je verprutst.'], ['Schöne Bescherung!', 'Wat een ellende!'], ['Von wegen pünktlich!', 'Helemaal niet op tijd!'], ['Das Essen war ganz gut.', 'Het eten was redelijk.'], ['Du bist mir ja ein Held.', 'Een mooie held ben jij.']],
        ex: [['Ausgerechnet heute muss es regnen. Na toll.', 'Uitgerekend vandaag moet het regenen. Lekker dan.'], ['«Er hilft dir bestimmt.» – «Von wegen!»', '«Hij helpt je vast.» – «Mooi niet!»'], ['Der Film war ganz nett, mehr aber auch nicht.', 'De film was best aardig, maar meer ook niet.']] }
    ],
    dialogue: {
      t: 'Der Umzug', place: 'Leipzig 🇩🇪',
      lines: [
        ['Anna', 'Felix, wo bleibt denn der Transporter? Du wolltest doch um neun da sein.', 'Felix, waar blijft die bestelbus nou? Je zou er toch om negen zijn.'],
        ['Felix', 'Tja. Die Firma hat mir ausgerechnet heute einen Kleinwagen statt des Transporters gegeben.', 'Tja. Het bedrijf heeft me uitgerekend vandaag een kleine auto gegeven in plaats van de bestelbus.'],
        ['Anna', 'Na toll. Und das Sofa binden wir aufs Dach, oder wie?', 'Lekker dan. En de bank binden we op het dak, of hoe zie je dat?'],
        ['Felix', 'Du kannst ruhig lachen. Ich habe schon eine Lösung: Mein Onkel leiht uns seinen Anhänger.', 'Lach gerust. Ik heb al een oplossing: mijn oom leent ons zijn aanhanger.'],
        ['Anna', 'Dein Onkel, der letztes Mal «in zehn Minuten» kommen wollte und nach drei Stunden da war? Das kann ja heiter werden.', 'Je oom, die de vorige keer «over tien minuten» zou komen en er na drie uur was? Dat belooft wat.'],
        ['Felix', 'Diesmal ist er pünktlich. Er hat es versprochen.', 'Deze keer is hij op tijd. Hij heeft het beloofd.'],
        ['Anna', 'Von wegen! Wer’s glaubt, wird selig. Aber gut, wir haben eh keine andere Wahl.', 'Mooi niet! Maak dat de kat wijs. Maar goed, we hebben toch geen andere keus.'],
        ['Felix', 'Siehst du. Und immerhin habe ich Brötchen mitgebracht.', 'Zie je wel. En ik heb in elk geval broodjes meegenomen.'],
        ['Anna', 'Du bist mir ja einer. Na los, gib schon eins her.', 'Jij bent me er ook eentje. Nou vooruit, geef er maar een.']
      ],
      q: [
        { t: 'mc', q: 'Was meint Anna mit «Na toll»?', o: ['Sie ärgert sich', 'Sie freut sich', 'Sie findet den Kleinwagen schön'] },
        { t: 'mc', q: 'Was bedeutet «Von wegen!»?', o: ['Das glaube ich nicht', 'Wegen des Wetters', 'Einverstanden'] },
        { t: 'mc', q: 'Was bedeutet «Du kannst ruhig lachen»?', o: ['Du darfst gern lachen', 'Lach bitte leise', 'Du sollst nicht lachen'] }
      ]
    },
    culture: { t: 'Hebben Duitsers humor?', html: `<p>😏 Het cliché wil dat Duitsers geen humor hebben. Dat klopt niet, maar de humor is <b>anders verpakt</b>. Waar Nederlanders graag zichzelf en elkaar plagen, houden Duitsers humor en ernst meer gescheiden: in een vergadering is het ernst, bij het bier daarna wordt er gelachen.</p>
<p>De grote meester van de droge observatie was <b>Loriot</b> (1923–2011). Zijn sketches over stijve burgers die hopeloos langs elkaar heen praten (<i>«Früher war mehr Lametta!»</i>, <i>«Das Ei ist hart!»</i>) kan half Duitsland uit het hoofd opzeggen.</p>
<p>Politieke satire heet <b>Kabarett</b> en heeft een lange traditie; op tv zijn de <i>heute-show</i> en <i>Die Anstalt</i> bekend, en het blad <i>Titanic</i> is berucht.</p>
<p>Let op met Nederlandse zelfspot: <i>«Ik kan er niks van»</i> wordt in Duitsland soms letterlijk genomen. En een Duits <i>«Nicht schlecht»</i> of <i>«Kann man machen»</i> is geen sarcasme, maar een compliment.</p>` },
    ex: [
      { t: 'cloze', s: 'Das ist ja ___ die Höhe! (verontwaardigd)', a: ['wohl'], o: ['wohl', 'mal', 'eh'], nl: 'Dat is toch zeker het toppunt!', tag: 'de-ton' },
      { t: 'cloze', s: 'Das ist ___ mal so. (er is niets aan te doen)', a: ['nun'], o: ['nun', 'ruhig', 'schon'], nl: 'Dat is nu eenmaal zo.', tag: 'de-ton' },
      { t: 'cloze', s: 'Du kannst ___ mal fragen. (gerust)', a: ['ruhig'], o: ['ruhig', 'wohl', 'eben'], nl: 'Je kunt het gerust eens vragen.', tag: 'de-ton' },
      { t: 'cloze', s: 'Ich wollte ___ gehen. (toch al)', a: ['eh'], o: ['eh', 'ja', 'mal'], nl: 'Ik wilde toch al gaan.', tag: 'de-ton' },
      { t: 'cloze', s: '«Er hilft dir bestimmt.» – «Von ___!»', a: ['wegen'], o: ['wegen', 'weg', 'wem'], nl: '«Hij helpt je vast.» – «Mooi niet!»', tag: 'de-ironie' },
      { t: 'cloze', s: '___ heute muss es regnen. (uitgerekend)', a: ['Ausgerechnet'], o: ['Ausgerechnet', 'Immerhin', 'Allerdings'], nl: 'Uitgerekend vandaag moet het regenen.', tag: 'de-ironie' },
      { t: 'cloze', s: 'Das hat mir gerade noch ___.', a: ['gefehlt'], o: ['gefehlt', 'gefallen', 'geholfen'], nl: 'Dat kon er ook nog wel bij.', tag: 'de-ironie' },
      { t: 'mc', q: '«Ihr könnt ruhig laut sein.» Wat betekent dat?', o: ['Jullie mogen gerust lawaai maken', 'Jullie moeten stil zijn', 'Jullie zijn rustig en luid tegelijk'], x: 'Uitzondering: ruhig is hier een toonwoordje en betekent niet «stil». Reden: het komt van «met een gerust hart» en geeft toestemming; het krijgt dan geen klemtoon.', tag: 'de-ton' },
      { t: 'mc', q: 'Een Duitse gast zegt: «Das Essen war ganz gut.» Hoe enthousiast is hij?', o: ['Matig: het was redelijk', 'Heel enthousiast', 'Hij vond het slecht'], x: 'Uitzondering: ganz versterkt bij uitersten (ganz toll, ganz falsch), maar zwakt af bij gewone positieve woorden (ganz gut, ganz nett). Reden: daar is onbeklemtoond ganz verzwakt tot «tamelijk».', tag: 'de-ironie' },
      { t: 'mc', q: 'Wat betekent «Das kann ja heiter werden»?', o: ['Dat belooft weinig goeds', 'Dat wordt een vrolijk feest', 'Het wordt mooi weer'], tag: 'de-ironie' },
      { t: 'tr', nl: 'Jij bent me er ook eentje!', a: ['Du bist mir ja einer!', 'Du bist mir ja einer.', 'Du bist mir einer!'], tag: 'de-ironie' },
      { t: 'tr', nl: 'Begin alvast.', a: ['Fang schon mal an.', 'Fang schon mal an!', 'Fangen Sie schon mal an.'], tag: 'de-ton' },
      { t: 'tr', nl: 'Hij had dus toch gelijk. (met eben doch)', a: ['Er hatte eben doch recht.', 'Er hatte eben doch Recht.'], tag: 'de-ton' },
      { t: 'order', s: 'Das hättest du mir ruhig mal sagen können.', nl: 'Dat had je me best eens kunnen zeggen.', tag: 'de-ton' },
      { t: 'match', p: [['der Unterton', 'de ondertoon'], ['bissig', 'bijtend'], ['jemanden aufziehen', 'iemand plagen'], ['immerhin', 'in elk geval'], ['augenzwinkernd', 'met een knipoog']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Ein Arbeitszeugnis lesen', type: 'Achtergrond: verborgen boodschappen',
      p: [
        ['Wer in Deutschland eine Stelle verlässt, hat Anspruch auf ein Arbeitszeugnis. Das Gesetz verlangt, dass es «wohlwollend» formuliert ist: Offene Kritik ist nicht erlaubt. Die Folge ist eine Geheimsprache, in der fast alles freundlich klingt und fast nichts so gemeint ist.', 'Wie in Duitsland een baan verlaat, heeft recht op een getuigschrift. De wet eist dat het «welwillend» geformuleerd is: openlijke kritiek is niet toegestaan. Het gevolg is een geheimtaal waarin bijna alles vriendelijk klinkt en bijna niets zo bedoeld is.'],
        ['«Er hat die ihm übertragenen Aufgaben stets zu unserer vollsten Zufriedenheit erledigt» bedeutet: sehr gut. Fehlt das Wort «stets», ist es nur noch gut; ohne «vollsten» befriedigend. «Er hat sich bemüht» heißt: Er hat es versucht, aber nicht geschafft. Und wer «durch seine Geselligkeit zur Verbesserung des Betriebsklimas beitrug», hat vermutlich zu viel getrunken.', '«Hij heeft de hem opgedragen taken steeds tot onze volste tevredenheid uitgevoerd» betekent: zeer goed. Ontbreekt het woord «stets», dan is het nog maar goed; zonder «vollsten» voldoende. «Hij heeft zijn best gedaan» betekent: hij heeft het geprobeerd, maar het is niet gelukt. En wie «door zijn gezelligheid bijdroeg aan de verbetering van de werksfeer», heeft vermoedelijk te veel gedronken.'],
        ['Wichtig ist auch, was fehlt. Steht am Ende kein Satz des Bedauerns und kein Wunsch für die Zukunft, ist man offenbar froh, dass der Mitarbeiter geht. Personalchefs lesen deshalb jedes Zeugnis zweimal: einmal die Wörter und einmal die Lücken. Für Niederländer, die Direktheit gewohnt sind, ist das gewöhnungsbedürftig.', 'Belangrijk is ook wat er ontbreekt. Staat er aan het eind geen zin van spijt en geen wens voor de toekomst, dan is men kennelijk blij dat de medewerker vertrekt. Personeelschefs lezen daarom elk getuigschrift twee keer: één keer de woorden en één keer de gaten. Voor Nederlanders, die directheid gewend zijn, is dat even wennen.']
      ],
      gl: [['das Arbeitszeugnis', 'het getuigschrift (van de werkgever)'], ['wohlwollend', 'welwillend'], ['stets', 'steeds, altijd'], ['sich bemühen', 'zijn best doen'], ['die Lücke', 'het gat, de leemte'], ['gewöhnungsbedürftig', 'even wennen']],
      q: [
        { t: 'mc', q: 'Warum gibt es in Arbeitszeugnissen eine Geheimsprache?', o: ['Weil offene Kritik nicht erlaubt ist', 'Weil Chefs gern Rätsel schreiben', 'Weil niemand sie liest'] },
        { t: 'mc', q: 'Was bedeutet «Er hat sich bemüht»?', o: ['Er hat es versucht, aber nicht geschafft', 'Er war der Beste', 'Er hat sehr viel gearbeitet und Erfolg gehabt'] },
        { t: 'mc', q: 'Was bedeutet es, wenn am Ende kein Wunsch für die Zukunft steht?', o: ['Man ist froh, dass der Mitarbeiter geht', 'Der Platz hat nicht gereicht', 'Der Mitarbeiter bleibt'] }
      ]
    },
    say: [['Das ist ja wohl die Höhe!', 'Dat is toch zeker het toppunt!'], ['Na toll. Das hat mir gerade noch gefehlt.', 'Lekker dan. Dat kon er ook nog wel bij.'], ['Du kannst ruhig mal fragen.', 'Je kunt het gerust eens vragen.']],
    task: { nl: 'Schrijf een kort appgesprek (6 regels) tussen twee vrienden over een mislukte dag. Gebruik twee ironische uitroepen (Na toll, Von wegen, Schöne Bescherung) en drie combinaties van toonwoordjes (ja wohl, nun mal, ruhig mal, eh, eben doch).', model: '– Der Zug fällt aus. Na toll. – Ausgerechnet heute? Das ist ja wohl ein Witz. – Die Bahn sagt, in zehn Minuten kommt Ersatz. – Von wegen! Das sagen sie immer. – Ist nun mal so. Ich wollte eh noch einen Kaffee trinken. – Dann trink ruhig mal zwei, das dauert.' },
    scenario: { nl: 'Je helpt een Duitse vriend verhuizen en alles loopt mis. Jullie blijven er droog onder.', role: 'Felix, een optimistische Leipziger die elk probleem wegwuift en droge grapjes maakt', goal: 'Reageer ironisch op slecht nieuws, vraag of hij iets serieus meent, en gebruik minstens twee toonwoordjes.' }
  });

  /* ───────────────────────── C2 · 8 ───────────────────────── */
  U({
    id: 'de-c2-08', level: 'C2', icon: '🔄', title: 'Sprachwandel', nl: 'Taalverandering: Denglisch, gendern en «wegen dem»',
    goals: ['Uitleggen hoe het Duits nu verandert', 'Standaardtaal en spreektaal uit elkaar houden bij omstreden vormen', 'Engelse leenwoorden goed verbuigen en vervoegen', 'Je mening geven in het debat over gendern en anglicismen'],
    vocab: [
      ['der Sprachwandel', 'de taalverandering'], ['der Anglizismus', 'het anglicisme'], ['das Lehnwort', 'het leenwoord'], ['das Fremdwort', 'het vreemde woord'], ['der Sprachverfall', 'de taalverloedering'],
      ['das Denglisch', 'het Duits-Engelse mengtaaltje'], ['gendern', 'genderen (inclusief formuleren)'], ['das Gendersternchen', 'het gendersterretje'], ['geschlechtergerecht', 'genderinclusief'], ['die Studierenden (mv.)', 'de studenten (genderneutraal)'],
      ['die Lehrkraft', 'de leerkracht'], ['das Handy', 'de mobiele telefoon'], ['der Beamer', 'de beamer'], ['das Homeoffice', 'het thuiswerken'], ['das Public Viewing', 'wedstrijd kijken op een groot scherm buiten'],
      ['downloaden · herunterladen', 'downloaden'], ['googeln', 'googelen'], ['liken', 'liken'], ['chillen', 'chillen'], ['checken', 'checken; snappen'],
      ['das Meeting · die Besprechung', 'de vergadering'], ['die Mail', 'de mail'], ['der Shitstorm', 'de storm van kritiek online'], ['veraltet', 'verouderd'], ['sich einbürgern', 'ingeburgerd raken'], ['die Rechtschreibreform', 'de spellinghervorming']
    ],
    grammar: [
      { t: 'Wat er nu verandert', es: 'Tendenzen der Gegenwartssprache',
        html: `<p>Taal verandert altijd, en wat vandaag als fout geldt, staat over vijftig jaar vaak in het woordenboek. Op C2-niveau moet je weten <b>wat al mag</b> en wat nog alleen gesproken is.</p>
<p><b>1. Tweede naamval wijkt:</b> <i>wegen <b>dem</b> Wetter</i>, <i>das Auto <b>von</b> meinem Vater</i>, <i>während <b>dem</b> Essen</i>. Gesproken heel gewoon, geschreven nog tweede naamval.</p>
<p><b>2. <i>weil</i> met hoofdzinsvolgorde:</b> <i>…, weil ich <b>hab</b> keine Zeit.</i> Alleen gesproken.</p>
<p><b>3. <i>brauchen</i> zonder <i>zu</i>:</b> <i>Du brauchst nicht kommen.</i> Gesproken; geschreven <i>zu kommen</i>.</p>
<p><b>4. <i>als</i> en <i>wie</i>:</b> <i>größer <b>wie</b> ich</i> geldt als fout; standaard is <i>größer <b>als</b></i>, <i>so groß <b>wie</b></i>.</p>
<p><b>5. Sterke werkwoorden worden zwak:</b> <i>backen – <b>backte</b></i> (vroeger <i>buk</i>), <i>melken – <b>melkte</b></i> (vroeger <i>molk</i>), <i>fragen – fragte</i> (<i>frug</i> is verdwenen).</p>
<p><b>6. Leenvertalingen uit het Engels:</b> <i>Sinn <b>machen</b></i> (naast <i>Sinn ergeben</i>), <i>nicht wirklich</i>, <i>in 2024</i> (standaard: <i>im Jahr 2024</i> of alleen <i>2024</i>).</p>
<p><b>Uitzondering:</b> de trend is sterk → zwak, maar <i>winken</i> gaat de <b>andere kant</b> op: naast het oorspronkelijke <i>gewinkt</i> hoor je overal <i><b>gewunken</b></i>, en de Duden noemt dat inmiddels gangbaar. <b>Waarom?</b> Taal verandert door analogie: <i>winken</i> rijmt op <i>sinken – gesunken, trinken – getrunken, stinken – gestunken</i>, en dat sterke rijtje trekt het werkwoord naar zich toe.</p>`,
        table: [['gesproken / nieuw', 'geschreven standaard', 'status'], ['wegen dem Regen', 'wegen des Regens', 'spreektaal, breed geaccepteerd'], ['weil ich hab keine Zeit', 'weil ich keine Zeit habe', 'alleen gesproken'], ['Du brauchst nicht kommen.', 'Du brauchst nicht zu kommen.', 'spreektaal'], ['größer wie', 'größer als', 'geldt als fout'], ['Das macht Sinn.', 'Das ergibt Sinn.', 'beide gangbaar'], ['gewunken', 'gewinkt', 'beide gangbaar']],
        sum: 'wegen des Regens (schrijven) · wegen dem Regen (praten) · größer als, so groß wie',
        ex: [['Ich bin größer als mein Bruder, aber nicht so groß wie mein Vater.', 'Ik ben groter dan mijn broer, maar niet zo groot als mijn vader.'], ['Sie hat mir zum Abschied gewunken.', 'Ze heeft me bij het afscheid gezwaaid.'], ['Früher sagte man «er buk», heute «er backte».', 'Vroeger zei men «er buk», nu «er backte».']] },
      { t: 'Gegoogelt, das Meeting, die Mail: Engels inburgeren', es: 'Integration von Anglizismen',
        html: `<p>Engelse woorden krijgen in het Duits een <b>geslacht, een meervoud en Duitse uitgangen</b>.</p>
<p><b>Geslacht</b> volgt een Duits voorbeeld of de uitgang: <i><b>der</b> Computer</i> (zoals <i>-er: der Rechner</i>), <i><b>das</b> Meeting, das Training</i> (<i>-ing</i> is onzijdig), <i><b>die</b> Party</i> (zoals <i>die Feier</i>), <i><b>der</b> Job</i> (zoals <i>der Beruf</i>), <i><b>das</b> Team, das Baby, das Handy</i>.</p>
<p><b>Meervoud</b> meestal <i>-s</i>: <i>die Jobs, die Partys, die Babys</i> (geen <i>-ies</i>!). Woorden op <i>-er</i> blijven gelijk: <i>die Computer</i>.</p>
<p><b>Werkwoorden</b> worden zwak vervoegd: <i>googeln – ich goog<b>le</b> – ge<b>googelt</b></i>, <i>checken – ge<b>checkt</b></i>, <i>liken – ge<b>likt</b></i>, <i>chillen – ge<b>chillt</b></i>. Samengestelde: <i>down<b>ge</b>loadet</i> of <i><b>ge</b>downloadet</i>, <i>up<b>ge</b>datet</i>.</p>
<p><b>Schijn-Engels:</b> <i>das Handy</i> (mobile phone), <i>der Beamer</i> (projector), <i>das Public Viewing</i>, <i>der Oldtimer</i> (vintage car), <i>das Homeoffice</i> bestaan zo niet in het Engels.</p>
<p><b>Gendern:</b> naast <i>Studenten und Studentinnen</i> zie je <i>Student<b>*innen</b></i>, <i>Student<b>:innen</b></i> en neutrale vormen als <i>Studier<b>ende</b>, Lehr<b>kräfte</b>, Mitarbeit<b>ende</b></i>. Overheden in sommige deelstaten verbieden het sterretje, andere schrijven het voor.</p>
<p><b>Uitzondering:</b> het is in Duitsland <b>die</b> <i>Mail</i>, maar in Oostenrijk, Zwitserland en delen van Zuid-Duitsland <b>das</b> <i>Mail</i>. <b>Waarom?</b> Een leenwoord heeft van huis uit geen geslacht en krijgt er een door analogie. In het noorden dacht men aan <i>die Post</i>, in het zuiden behandelde men het als een onzijdig vreemd woord, zoals <i>das Telegramm</i>. Beide zijn in hun eigen gebied correct.</p>`,
        table: [['Engels', 'Duits', 'let op'], ['the job', 'der Job, die Jobs', 'zoals der Beruf'], ['the meeting', 'das Meeting, die Meetings', '-ing = das'], ['the party', 'die Party, die Partys', 'meervoud -ys'], ['to google', 'googeln, gegoogelt', 'zwak vervoegd'], ['to download', 'downgeloadet / gedownloadet', 'beide mogelijk'], ['mobile phone', 'das Handy', 'schijn-Engels']],
        ex: [['Ich habe es schnell gegoogelt.', 'Ik heb het snel gegoogeld.'], ['Das Meeting wurde auf Montag verschoben.', 'De vergadering is naar maandag verschoven.'], ['Die Studierenden arbeiten heute im Homeoffice.', 'De studenten werken vandaag thuis.']] }
    ],
    dialogue: {
      t: 'Streit am Küchentisch', place: 'Hannover 🇩🇪',
      lines: [
        ['Oma Helga', 'Jonas, was hast du da eben gesagt? Du hast das «gecheckt» und findest es «nice»?', 'Jonas, wat zei je daarnet? Je hebt het «gecheckt» en vindt het «nice»?'],
        ['Jonas', 'Ja, Oma. Ich hab’s verstanden und finde es gut. So redet man halt.', 'Ja, oma. Ik heb het begrepen en vind het goed. Zo praat men nu eenmaal.'],
        ['Oma Helga', 'Zu meiner Zeit hat man Deutsch gesprochen. Und jetzt heißt es auch noch «wegen dem Wetter». Der Genitiv stirbt aus!', 'In mijn tijd sprak men Duits. En nu is het ook nog «wegen dem Wetter». De tweede naamval sterft uit!'],
        ['Jonas', 'Oma, du sagst selbst «Portemonnaie», «Trottoir» und «Friseur». Das war vor zweihundert Jahren genauso neu, nur eben Französisch.', 'Oma, jij zegt zelf «Portemonnaie», «Trottoir» en «Friseur». Dat was tweehonderd jaar geleden net zo nieuw, alleen dan Frans.'],
        ['Oma Helga', 'Das ist etwas anderes. Das sind doch deutsche Wörter!', 'Dat is iets anders. Dat zijn toch Duitse woorden!'],
        ['Jonas', 'Siehst du? In hundert Jahren sagt das jemand über «Handy». Und das ist nicht mal Englisch.', 'Zie je? Over honderd jaar zegt iemand dat over «Handy». En dat is niet eens Engels.'],
        ['Oma Helga', 'Na gut. Aber in deiner Bewerbung schreibst du «wegen des Wetters», verstanden?', 'Nou goed. Maar in je sollicitatiebrief schrijf je «wegen des Wetters», begrepen?'],
        ['Jonas', 'Versprochen. Schreiben und Reden sind eh zwei Paar Schuhe.', 'Beloofd. Schrijven en praten zijn toch al twee verschillende dingen.']
      ],
      q: [
        { t: 'mc', q: 'Worüber ärgert sich Oma Helga?', o: ['Über englische Wörter und den Dativ nach «wegen»', 'Über Jonas’ Noten', 'Über das Wetter'] },
        { t: 'mc', q: 'Welches Argument bringt Jonas?', o: ['Auch Omas Wörter waren einmal neue Fremdwörter', 'Englisch ist schöner als Deutsch', 'Der Genitiv war immer falsch'] },
        { t: 'mc', q: 'Worauf einigen sie sich?', o: ['In der Bewerbung schreibt Jonas den Genitiv', 'Jonas spricht nie mehr Englisch', 'Oma lernt Englisch'] }
      ]
    },
    culture: { t: 'De Duden, de Rechtschreibrat en het sterretje', html: `<p>🔄 Anders dan Frankrijk heeft Duitsland geen academie die de taal vastlegt. De <b>Duden</b> is een uitgeverij die beschrijft wat mensen schrijven; bindend is alleen de spelling, en daarover beslist de <b>Rat für deutsche Rechtschreibung</b>, waarin Duitsland, Oostenrijk, Zwitserland, Zuid-Tirol, Liechtenstein en Oost-België samenwerken.</p>
<p>De <b>Rechtschreibreform</b> van 1996 leidde tot jaren ruzie. Kranten weigerden mee te doen en er kwam zelfs een referendum. Het zichtbaarste resultaat: <i>daß</i> werd <i>dass</i>, en <i>ß</i> staat alleen nog na een lange klinker.</p>
<p>Het nieuwste strijdpunt is het <b>Gendern</b>. Voorstanders vinden dat <i>die Lehrer</i> vrouwen onzichtbaar maakt, tegenstanders vinden <i>Lehrer*innen</i> onleesbaar. Beieren en enkele andere deelstaten hebben het sterretje op scholen en bij de overheid verboden; veel universiteiten en steden gebruiken het juist. De Rechtschreibrat heeft het teken tot nu toe niet in de officiële spelling opgenomen.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich bin größer ___ mein Bruder. (standaard)', a: ['als'], o: ['als', 'wie', 'dann'], nl: 'Ik ben groter dan mijn broer.', tag: 'de-wandel' },
      { t: 'cloze', s: 'In een sollicitatiebrief: wegen ___ Wetters', a: ['des'], o: ['des', 'dem', 'das'], nl: 'vanwege het weer (geschreven standaard)', tag: 'de-wandel' },
      { t: 'cloze', s: 'Du brauchst nicht ___ kommen. (geschreven standaard)', a: ['zu'], o: ['zu', 'um', 'für'], nl: 'Je hoeft niet te komen.', tag: 'de-wandel' },
      { t: 'cloze', s: 'Ich habe es schnell ___. (googeln)', a: ['gegoogelt'], o: ['gegoogelt', 'googelt', 'gegoogled'], nl: 'Ik heb het snel gegoogeld.', tag: 'de-fremd' },
      { t: 'cloze', s: '___ Meeting beginnt um zehn.', a: ['Das'], o: ['Das', 'Der', 'Die'], nl: 'De vergadering begint om tien uur.', x: 'Engelse woorden op -ing zijn in het Duits onzijdig.', tag: 'de-fremd' },
      { t: 'cloze', s: 'Meervoud van «die Party»: die ___', a: ['Partys'], o: ['Partys', 'Parties', 'Partyen'], nl: 'de feestjes', tag: 'de-fremd' },
      { t: 'cloze', s: 'Genderneutraal voor «die Studenten»: die ___', a: ['Studierenden'], o: ['Studierenden', 'Studierten', 'Studenter'], nl: 'de studenten (neutraal)', tag: 'de-fremd' },
      { t: 'mc', q: 'Welk woord is schijn-Engels en bestaat zo niet in het Engels?', o: ['das Handy', 'der Computer', 'das Team'], tag: 'de-fremd' },
      { t: 'mc', q: 'Waarom zeggen steeds meer Duitsers «gewunken» in plaats van «gewinkt»?', o: ['Naar het voorbeeld van gesunken, getrunken', 'Omdat het een Engels leenwoord is', 'Omdat de Duden het voorschrijft'], x: 'Uitzondering op de trend sterk → zwak. Reden: analogie met het rijtje sinken, trinken, stinken trekt winken naar de sterke vervoeging.', tag: 'de-wandel' },
      { t: 'mc', q: 'Is het «die Mail» of «das Mail»?', o: ['Die Mail in Duitsland, das Mail in Oostenrijk en Zwitserland', 'Alleen die Mail is juist', 'Alleen das Mail is juist'], x: 'Uitzondering: het geslacht verschilt per regio. Reden: een leenwoord krijgt zijn geslacht door analogie (die Post tegenover onzijdig vreemd woord).', tag: 'de-fremd' },
      { t: 'tr', nl: 'Dat is logisch. (met Sinn)', a: ['Das ergibt Sinn.', 'Das macht Sinn.'], tag: 'de-wandel' },
      { t: 'tr', nl: 'Ik heb het bestand gedownload.', a: ['Ich habe die Datei heruntergeladen.', 'Ich habe die Datei downgeloadet.', 'Ich habe die Datei gedownloadet.'], tag: 'de-fremd' },
      { t: 'tr', nl: 'Ze is net zo groot als ik.', a: ['Sie ist so groß wie ich.', 'Sie ist genauso groß wie ich.'], tag: 'de-wandel' },
      { t: 'order', s: 'Schreiben und Reden sind zwei Paar Schuhe.', nl: 'Schrijven en praten zijn twee verschillende dingen.', tag: 'de-wandel' },
      { t: 'match', p: [['das Lehnwort', 'het leenwoord'], ['veraltet', 'verouderd'], ['sich einbürgern', 'ingeburgerd raken'], ['die Lehrkraft', 'de leerkracht'], ['der Sprachverfall', 'de taalverloedering']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Früher war alles besser, auch die Sprache?', type: 'Column',
      p: [
        ['Die Klage ist so alt wie die Sprache selbst. Schon im 17. Jahrhundert gründeten gelehrte Herren Gesellschaften, um das Deutsche vor dem Französischen zu retten. Sie schlugen vor, «Fenster» durch «Tageleuchter» und «Nase» durch «Gesichtserker» zu ersetzen. Durchgesetzt haben sich andere ihrer Vorschläge: «Anschrift» für Adresse, «Augenblick» für Moment, «Bücherei» für Bibliothek.', 'De klacht is zo oud als de taal zelf. Al in de 17e eeuw richtten geleerde heren genootschappen op om het Duits van het Frans te redden. Ze stelden voor «Fenster» door «Tageleuchter» en «Nase» door «Gesichtserker» te vervangen. Andere voorstellen van hen zijn wel aangeslagen: «Anschrift» voor adres, «Augenblick» voor moment, «Bücherei» voor bibliotheek.'],
        ['Heute richtet sich der Ärger gegen das Englische. Tatsächlich machen Anglizismen nur wenige Prozent des Wortschatzes aus, und die meisten verschwinden so schnell, wie sie gekommen sind. Wer sagt noch «Walkman» oder «chatten gehen»? Was bleibt, wird angepasst: Wir sagen «gegoogelt», nicht «googled», und geben jedem Wort brav einen Artikel.', 'Nu richt de ergernis zich tegen het Engels. In werkelijkheid maken anglicismen maar een paar procent van de woordenschat uit, en de meeste verdwijnen net zo snel als ze gekomen zijn. Wie zegt er nog «Walkman»? Wat blijft, wordt aangepast: we zeggen «gegoogelt», niet «googled», en geven elk woord braaf een lidwoord.'],
        ['Sprachwissenschaftler sehen deshalb keinen Verfall, sondern Wandel. Der Genitiv zieht sich aus der gesprochenen Sprache zurück, lebt aber in der geschriebenen munter weiter. Eine Sprache, die sich nicht mehr verändert, ist nicht gerettet. Sie ist tot, wie das Lateinische.', 'Taalkundigen zien daarom geen verval, maar verandering. De tweede naamval trekt zich terug uit de gesproken taal, maar leeft in de geschreven taal vrolijk verder. Een taal die niet meer verandert, is niet gered. Ze is dood, zoals het Latijn.']
      ],
      gl: [['die Klage', 'de klacht'], ['gelehrt', 'geleerd'], ['sich durchsetzen', 'aanslaan, het winnen'], ['der Wortschatz', 'de woordenschat'], ['anpassen', 'aanpassen'], ['munter', 'vrolijk, monter']],
      q: [
        { t: 'mc', q: 'Wovor wollte man das Deutsche im 17. Jahrhundert retten?', o: ['Vor dem Französischen', 'Vor dem Englischen', 'Vor dem Niederländischen'] },
        { t: 'mc', q: 'Welches Wort hat sich als deutscher Ersatz durchgesetzt?', o: ['Augenblick', 'Gesichtserker', 'Tageleuchter'] },
        { t: 'mc', q: 'Wie sehen Sprachwissenschaftler die Entwicklung?', o: ['Als Wandel, nicht als Verfall', 'Als Katastrophe', 'Als Ende des Deutschen'] }
      ]
    },
    say: [['Ich habe es schnell gegoogelt.', 'Ik heb het snel gegoogeld.'], ['Ich bin größer als mein Bruder.', 'Ik ben groter dan mijn broer.'], ['Sprache verändert sich, und das ist gut so.', 'Taal verandert, en dat is maar goed ook.']],
    task: { nl: 'Schrijf je mening (5 zinnen) over Engelse woorden of over gendern in het Duits of Nederlands. Noem een argument voor en een tegen, gebruik twee Engelse leenwoorden met het juiste lidwoord en één vergelijking met als of wie.', model: 'Ich finde Anglizismen weniger schlimm, als viele behaupten. Einerseits ist «das Meeting» nicht besser als «die Besprechung», und manche benutzen Englisch nur, um wichtig zu klingen. Andererseits fehlt für «der Shitstorm» einfach ein gutes deutsches Wort. Im Niederländischen ist es genauso wie im Deutschen: Die meisten Modewörter verschwinden von selbst. Sprache verändert sich, und das ist gut so.' },
    scenario: { nl: 'Aan de keukentafel bij een Duitse familie ontstaat een discussie over «goed Duits» tussen oma en kleinzoon. Jij wordt om je mening gevraagd.', role: 'Oma Helga, een oud-lerares uit Hannover die vindt dat de taal achteruitgaat, maar wel openstaat voor argumenten', goal: 'Geef je mening over Engelse woorden, vergelijk met het Nederlands en vraag welke vorm je in een brief moet schrijven.' }
  });

  /* ───────────────────────── C2 · 9 ───────────────────────── */
  U({
    id: 'de-c2-09', level: 'C2', icon: '🪶', title: 'Sprichwörter und Zitate', nl: 'Spreekwoorden en gevleugelde woorden',
    goals: ['De bekendste Duitse spreekwoorden begrijpen en op het juiste moment gebruiken', 'Verbasterde spreekwoorden in koppen en reclame herkennen', 'Citaten inleiden en naar de bron verwijzen', 'Zien waar het Nederlands een ander beeld gebruikt'],
    vocab: [
      ['das Sprichwort', 'het spreekwoord'], ['die Redensart', 'de zegswijze'], ['das geflügelte Wort', 'het gevleugelde woord'], ['das Zitat', 'het citaat'], ['Aller Anfang ist schwer.', 'Alle begin is moeilijk.'],
      ['Übung macht den Meister.', 'Oefening baart kunst.'], ['Morgenstund hat Gold im Mund.', 'De morgenstond heeft goud in de mond.'], ['Ende gut, alles gut.', 'Eind goed, al goed.'], ['Der Apfel fällt nicht weit vom Stamm.', 'De appel valt niet ver van de boom.'], ['Viele Köche verderben den Brei.', 'Veel koks bederven de brij.'],
      ['Reden ist Silber, Schweigen ist Gold.', 'Spreken is zilver, zwijgen is goud.'], ['Ohne Fleiß kein Preis.', 'Zonder inspanning geen beloning.'], ['Lügen haben kurze Beine.', 'Al is de leugen nog zo snel, de waarheid achterhaalt haar wel.'], ['Wer zuletzt lacht, lacht am besten.', 'Wie het laatst lacht, lacht het best.'], ['Kleider machen Leute.', 'Kleren maken de man.'],
      ['Gut Ding will Weile haben.', 'Goed werk heeft tijd nodig.'], ['Was Hänschen nicht lernt, lernt Hans nimmermehr.', 'Jong geleerd, oud gedaan.'], ['Andere Länder, andere Sitten.', '’s Lands wijs, ’s lands eer.'], ['Aus den Augen, aus dem Sinn.', 'Uit het oog, uit het hart.'], ['Es ist noch kein Meister vom Himmel gefallen.', 'Niemand wordt als meester geboren.'],
      ['Wo ein Wille ist, ist auch ein Weg.', 'Waar een wil is, is een weg.'], ['Das ist nicht mein Bier.', 'Dat is mijn zaak niet.'], ['Da liegt der Hund begraben.', 'Daar zit ’m de kneep.'], ['zwei Fliegen mit einer Klappe schlagen', 'twee vliegen in één klap slaan'], ['die Katze im Sack kaufen', 'een kat in de zak kopen'], ['den Nagel auf den Kopf treffen', 'de spijker op zijn kop slaan']
    ],
    grammar: [
      { t: 'Hoe een spreekwoord gebouwd is', es: 'Bauformen des Sprichworts',
        html: `<p>Spreekwoorden volgen een handvol vaste bouwpatronen. Wie die kent, herkent ook een spreekwoord dat hij nog nooit gehoord heeft.</p>
<p><b>1. Wer …, (der) …</b>: <i><b>Wer</b> A sagt, muss auch B sagen.</i> · <i><b>Wer</b> zuletzt lacht, lacht am besten.</i> · <i><b>Wer</b> nicht hören will, muss fühlen.</i></p>
<p><b>2. Twee helften zonder werkwoord:</b> <i>Ende gut, alles gut.</i> · <i>Andere Länder, andere Sitten.</i> · <i>Ohne Fleiß kein Preis.</i> · <i>Aus den Augen, aus dem Sinn.</i></p>
<p><b>3. Algemene uitspraak in de tegenwoordige tijd, vaak zonder lidwoord:</b> <i>Übung macht den Meister.</i> · <i>Lügen haben kurze Beine.</i> · <i>Kleider machen Leute.</i></p>
<p><b>4. Rijm en stafrijm</b> maken het onthoudbaar: <i>Morgenst<b>und</b> hat Gold im M<b>und</b>.</i> · <i>Ohne Fl<b>eiß</b> kein Pr<b>eis</b>.</i> · <i><b>G</b>lück und <b>G</b>las, wie leicht bricht das.</i></p>
<p><b>5. Was …, (das) …</b>: <i><b>Was</b> du heute kannst besorgen, das verschiebe nicht auf morgen.</i></p>
<p><b>Uitzondering:</b> in spreekwoorden ontbreken soms uitgangen die volgens de grammatica verplicht zijn: <i><b>Gut</b> Ding will Weile haben</i> (niet <i>gutes Ding</i>), <i>Morgenst<b>und</b></i> (niet <i>Morgenstunde</i>), <i><b>Unrecht</b> Gut gedeiht nicht</i>. <b>Waarom?</b> Spreekwoorden zijn versteende taal uit een tijd waarin het bijvoeglijk naamwoord vóór een onzijdig woord nog onverbogen mocht blijven, en het ritme van het vers ging vóór de uitgang. Je mag ze niet «verbeteren»: wie <i>gutes Ding</i> zegt, citeert verkeerd.</p>`,
        table: [['patroon', 'voorbeeld', 'Nederlands'], ['Wer …, …', 'Wer wagt, gewinnt.', 'Wie waagt, die wint.'], ['A, B (zonder werkwoord)', 'Ende gut, alles gut.', 'Eind goed, al goed.'], ['zonder lidwoord', 'Not macht erfinderisch.', 'Nood maakt vindingrijk.'], ['rijm', 'Eile mit Weile.', 'Haast je langzaam.'], ['Was …, das …', 'Was sich liebt, das neckt sich.', 'Wat van elkaar houdt, plaagt elkaar.']],
        sum: 'Wer A sagt, muss auch B sagen. · Ende gut, alles gut. · Gut Ding will Weile haben.',
        ex: [['Wer nicht wagt, der nicht gewinnt.', 'Wie niet waagt, die niet wint.'], ['Was du heute kannst besorgen, das verschiebe nicht auf morgen.', 'Stel niet uit tot morgen wat je vandaag kunt doen.'], ['Einem geschenkten Gaul schaut man nicht ins Maul.', 'Een gegeven paard kijkt men niet in de bek.']] },
      { t: 'Citeren, verwijzen en verbasteren', es: 'Zitieren und Abwandeln',
        html: `<p>Gevleugelde woorden komen uit de Bijbel, van Goethe en Schiller, uit films en reclame. Duitsers citeren ze zelden plechtig; meestal met een knipoog of in een <b>verbasterde</b> vorm.</p>
<p><b>Inleiden:</b> <i><b>Wie heißt es so schön:</b> …</i> · <i><b>Wie schon Goethe sagte:</b> …</i> · <i><b>frei nach</b> Schiller</i> (vrij naar) · <i><b>Um mit</b> Brecht <b>zu sprechen:</b> …</i> · <i><b>Nicht umsonst sagt man:</b> …</i></p>
<p><b>Half citeren</b> (de luisteraar vult aan): <i>Na ja, wer A sagt …</i> · <i>Der Apfel fällt eben nicht weit …</i></p>
<p><b>Verbasteren</b> in koppen en reclame: <i>Morgenstund hat <b>Blei im Hintern</b>.</i> · <i>Aller Anfang ist <b>teuer</b>.</i> · <i>Wer zu spät kommt, den bestraft <b>die Bahn</b>.</i> (naar Gorbatsjovs <i>«…, den bestraft das Leben»</i>)</p>
<p><b>Bekende bronnen:</b> <i>«Die Axt im Haus erspart den Zimmermann»</i> (Schiller) · <i>«Erst kommt das Fressen, dann kommt die Moral»</i> (Brecht) · <i>«Wir schaffen das»</i> (Merkel) · <i>«Ich bin ein Berliner»</i> (Kennedy).</p>
<p><b>Uitzondering:</b> de meeste spreekwoorden hebben een Nederlandse tweeling, maar bij sommige is het <b>beeld anders</b>, en dan gaat letterlijk vertalen mis: <i>Da liegt der <b>Hund</b> begraben</i> = daar zit ’m de kneep · <i>Das ist nicht mein <b>Bier</b></i> = dat is mijn pakkie-an niet · <i>Ich verstehe nur <b>Bahnhof</b></i> = ik snap er geen snars van · <i>Das ist <b>Jacke wie Hose</b></i> = dat is lood om oud ijzer. <b>Waarom?</b> Uitdrukkingen bewaren beelden uit de eigen geschiedenis en cultuur van een taalgebied. Ze zijn niet uit losse woorden opgebouwd, dus kun je ze ook niet woord voor woord omzetten.</p>`,
        table: [['Duits', 'letterlijk', 'Nederlands'], ['Ich verstehe nur Bahnhof.', 'Ik versta alleen station.', 'Ik snap er niets van.'], ['Das ist Jacke wie Hose.', 'Dat is jas als broek.', 'Dat is lood om oud ijzer.'], ['Da liegt der Hund begraben.', 'Daar ligt de hond begraven.', 'Daar zit ’m de kneep.'], ['Das ist nicht mein Bier.', 'Dat is niet mijn bier.', 'Dat is mijn zaak niet.'], ['Jetzt geht’s um die Wurst.', 'Nu gaat het om de worst.', 'Nu komt het erop aan.']],
        ex: [['Wie heißt es so schön: Übung macht den Meister.', 'Zoals dat zo mooi heet: oefening baart kunst.'], ['Tut mir leid, ich verstehe nur Bahnhof.', 'Sorry, ik snap er geen snars van.'], ['Ob heute oder morgen, das ist Jacke wie Hose.', 'Vandaag of morgen, dat maakt niets uit.']] }
    ],
    dialogue: {
      t: 'Deutsch für Fortgeschrittene', place: 'Frankfurt am Main 🇩🇪',
      lines: [
        ['Anna', 'Markus, ich habe heute im Büro gesagt: «Jetzt kommt der Affe aus dem Ärmel.» Alle haben mich angeschaut, als wäre ich verrückt.', 'Markus, ik zei vandaag op kantoor: «Nu komt de aap uit de mouw.» Iedereen keek me aan alsof ik gek was.'],
        ['Markus', 'Der Affe aus dem Ärmel? Das gibt es bei uns nicht. Was soll das heißen?', 'De aap uit de mouw? Dat bestaat bij ons niet. Wat moet dat betekenen?'],
        ['Anna', 'Dass endlich die Wahrheit herauskommt.', 'Dat eindelijk de waarheid boven tafel komt.'],
        ['Markus', 'Ach so! Bei uns lässt man «die Katze aus dem Sack». Anderes Tier, gleiche Idee.', 'O zo! Bij ons laat je «de kat uit de zak». Ander dier, zelfde idee.'],
        ['Anna', 'Und ich dachte, Sprichwörter kann man einfach übersetzen. Aller Anfang ist schwer.', 'En ik dacht dat je spreekwoorden gewoon kon vertalen. Alle begin is moeilijk.'],
        ['Markus', 'Siehst du, das war perfekt. Und keine Sorge: Es ist noch kein Meister vom Himmel gefallen.', 'Zie je, dat was perfect. En geen zorgen: niemand wordt als meester geboren.'],
        ['Anna', 'Mein Chef hat danach gesagt, er verstehe nur Bahnhof. Hat er etwa den Zug gemeint?', 'Mijn chef zei daarna dat hij alleen «station» verstond. Bedoelde hij soms de trein?'],
        ['Markus', 'Nein, das heißt: Er hat gar nichts verstanden. Wie heißt es so schön: Andere Länder, andere Sitten.', 'Nee, dat betekent: hij begreep er helemaal niets van. Zoals dat zo mooi heet: ’s lands wijs, ’s lands eer.']
      ],
      q: [
        { t: 'mc', q: 'Warum schauten die Kollegen Anna komisch an?', o: ['Sie hat eine niederländische Redensart wörtlich übersetzt', 'Sie hat zu leise gesprochen', 'Sie hat einen Affen mitgebracht'] },
        { t: 'mc', q: 'Wie sagt man auf Deutsch, dass die Wahrheit herauskommt?', o: ['die Katze aus dem Sack lassen', 'den Affen aus dem Ärmel holen', 'den Hund begraben'] },
        { t: 'mc', q: 'Was bedeutet «Ich verstehe nur Bahnhof»?', o: ['Ich verstehe gar nichts', 'Ich muss zum Zug', 'Ich verstehe alles'] }
      ]
    },
    culture: { t: 'Waar komen ze vandaan?', html: `<p>🪶 Het begrip <b>geflügelte Worte</b> komt van Homerus, maar werd in Duitsland een begrip door <b>Georg Büchmann</b>, die in 1864 een verzameling citaten onder die titel uitgaf. «Der Büchmann» wordt nog altijd herdrukt.</p>
<p>De grootste leverancier is <b>Martin Luther</b>. Voor zijn Bijbelvertaling (1534) wilde hij <i>«dem Volk aufs Maul schauen»</i> (luisteren hoe het volk praat), en hij bedacht onderweg uitdrukkingen die iedereen nog gebruikt: <i>ein Buch mit sieben Siegeln, Perlen vor die Säue werfen, sein Licht unter den Scheffel stellen, der Wolf im Schafspelz</i>. Omdat de Nederlandse Statenvertaling uit dezelfde bron putte, bestaan veel van deze uitdrukkingen ook bij ons.</p>
<p><i>«Ich verstehe nur Bahnhof»</i> stamt waarschijnlijk uit de Eerste Wereldoorlog: uitgeputte soldaten wilden alleen nog over het station horen, dus over de reis naar huis.</p>
<p>En een nieuwer gevleugeld woord kent elke Duitser: Merkels <i>«Wir schaffen das»</i> (2015), sindsdien eindeloos geciteerd, geprezen en bespot.</p>` },
    ex: [
      { t: 'cloze', s: 'Übung macht den ___.', a: ['Meister'], o: ['Meister', 'Lehrer', 'Schüler'], nl: 'Oefening baart kunst.', tag: 'de-sprichwort' },
      { t: 'cloze', s: 'Der Apfel fällt nicht weit vom ___.', a: ['Stamm'], o: ['Stamm', 'Baum', 'Ast'], nl: 'De appel valt niet ver van de boom.', x: 'Het Duits zegt Stamm (stam), niet Baum.', tag: 'de-sprichwort' },
      { t: 'cloze', s: 'Wer A sagt, muss auch ___ sagen.', a: ['B'], o: ['B', 'Z', 'Ja'], nl: 'Wie A zegt, moet ook B zeggen.', tag: 'de-sprichwort' },
      { t: 'cloze', s: 'Lügen haben kurze ___.', a: ['Beine'], o: ['Beine', 'Arme', 'Nasen'], nl: 'Leugens komen altijd uit.', tag: 'de-sprichwort' },
      { t: 'cloze', s: 'Tut mir leid, ich verstehe nur ___.', a: ['Bahnhof'], o: ['Bahnhof', 'Flughafen', 'Zug'], nl: 'Sorry, ik snap er niets van.', tag: 'de-zitat' },
      { t: 'cloze', s: 'Wie ___ es so schön: Ende gut, alles gut.', a: ['heißt'], o: ['heißt', 'sagt', 'nennt'], nl: 'Zoals dat zo mooi heet: eind goed, al goed.', tag: 'de-zitat' },
      { t: 'cloze', s: 'Das ist nicht mein ___. (mijn zaak niet)', a: ['Bier'], o: ['Bier', 'Wein', 'Brot'], nl: 'Dat is mijn zaak niet.', tag: 'de-zitat' },
      { t: 'mc', q: 'Waarom is het «Gut Ding will Weile haben» en niet «Gutes Ding»?', o: ['Het is versteende oude taal; ritme ging voor de uitgang', 'Ding is hier meervoud', 'Het is een drukfout die is blijven hangen'], x: 'Uitzondering op de verbuiging van het bijvoeglijk naamwoord. Reden: spreekwoorden bewaren oude vormen en je mag ze niet «verbeteren».', tag: 'de-sprichwort' },
      { t: 'mc', q: 'Hoe zeg je «Nu komt de aap uit de mouw» in het Duits?', o: ['Jetzt lässt er die Katze aus dem Sack.', 'Jetzt kommt der Affe aus dem Ärmel.', 'Jetzt liegt der Hund begraben.'], x: 'Uitzondering: hier gebruikt het Duits een ander beeld. Reden: uitdrukkingen bewaren beelden uit de eigen cultuur en zijn niet woord voor woord om te zetten.', tag: 'de-zitat' },
      { t: 'mc', q: 'Wat betekent «Das ist Jacke wie Hose»?', o: ['Dat maakt niets uit', 'Dat past niet bij elkaar', 'Dat is te duur'], tag: 'de-zitat' },
      { t: 'tr', nl: 'Alle begin is moeilijk.', a: ['Aller Anfang ist schwer.'], tag: 'de-sprichwort' },
      { t: 'tr', nl: 'Eind goed, al goed.', a: ['Ende gut, alles gut.'], tag: 'de-sprichwort' },
      { t: 'tr', nl: 'Je hebt de spijker op zijn kop geslagen.', a: ['Du hast den Nagel auf den Kopf getroffen.', 'Sie haben den Nagel auf den Kopf getroffen.'], tag: 'de-zitat' },
      { t: 'order', s: 'Es ist noch kein Meister vom Himmel gefallen.', nl: 'Niemand wordt als meester geboren.', tag: 'de-sprichwort' },
      { t: 'match', p: [['Kleider machen Leute.', 'Kleren maken de man.'], ['Aus den Augen, aus dem Sinn.', 'Uit het oog, uit het hart.'], ['Andere Länder, andere Sitten.', '’s Lands wijs, ’s lands eer.'], ['Ohne Fleiß kein Preis.', 'Zonder inspanning geen beloning.'], ['Viele Köche verderben den Brei.', 'Veel koks bederven de brij.']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Wer zu spät kommt …', type: 'Achtergrond: de geschiedenis van een citaat',
      p: [
        ['Im Oktober 1989 besuchte Michail Gorbatschow Ost-Berlin zum vierzigsten Geburtstag der DDR. Vor Journalisten sagte er einen Satz, der auf Deutsch berühmt wurde: «Wer zu spät kommt, den bestraft das Leben.» Einen Monat später fiel die Mauer, und der Satz galt als Prophezeiung.', 'In oktober 1989 bezocht Michail Gorbatsjov Oost-Berlijn voor de veertigste verjaardag van de DDR. Tegenover journalisten zei hij een zin die in het Duits beroemd werd: «Wie te laat komt, wordt door het leven gestraft.» Een maand later viel de Muur, en de zin gold als voorspelling.'],
        ['Das Merkwürdige ist: So hat er es nie gesagt. Auf Russisch sprach er ungefähr davon, dass Gefahren auf diejenigen warten, die nicht auf das Leben reagieren. Die knappe Fassung stammt von seinem Sprecher, der den Gedanken für die Presse zusammenfasste. Sie hat die Form eines Sprichworts: «Wer …, den …», allgemein, ohne Namen, leicht zu merken.', 'Het merkwaardige is: zo heeft hij het nooit gezegd. In het Russisch sprak hij ongeveer over gevaren die wachten op wie niet op het leven reageert. De bondige versie komt van zijn woordvoerder, die de gedachte voor de pers samenvatte. Ze heeft de vorm van een spreekwoord: «Wie …, die …», algemeen, zonder namen, makkelijk te onthouden.'],
        ['Seitdem lebt der Satz ein eigenes Leben. Zeitungen schreiben «Wer zu spät kommt, den bestraft der Wähler», Werbetexter «Wer zu spät bucht, den bestraft der Preis». So entstehen geflügelte Worte: Nicht der Redner macht sie berühmt, sondern alle, die sie wiederholen und verändern.', 'Sindsdien leidt de zin een eigen leven. Kranten schrijven «Wie te laat komt, wordt door de kiezer gestraft», reclameschrijvers «Wie te laat boekt, wordt door de prijs gestraft». Zo ontstaan gevleugelde woorden: niet de spreker maakt ze beroemd, maar iedereen die ze herhaalt en verandert.']
      ],
      gl: [['bestrafen', 'straffen'], ['die Prophezeiung', 'de voorspelling'], ['merkwürdig', 'merkwaardig'], ['die Fassung', 'de versie'], ['knapp', 'bondig, kort'], ['der Werbetexter', 'de reclameschrijver']],
      q: [
        { t: 'mc', q: 'Wann wurde der Satz berühmt?', o: ['Kurz vor dem Fall der Mauer 1989', 'Nach der Wiedervereinigung 1990', 'Im Jahr 1961'] },
        { t: 'mc', q: 'Was ist das Merkwürdige an dem Zitat?', o: ['Gorbatschow hat es so nie gesagt', 'Es ist eigentlich von Goethe', 'Niemand kennt es'] },
        { t: 'mc', q: 'Wie entstehen laut Text geflügelte Worte?', o: ['Durch alle, die sie wiederholen und verändern', 'Durch den Redner allein', 'Durch Wörterbücher'] }
      ]
    },
    say: [['Übung macht den Meister.', 'Oefening baart kunst.'], ['Es ist noch kein Meister vom Himmel gefallen.', 'Niemand wordt als meester geboren.'], ['Ich verstehe nur Bahnhof.', 'Ik snap er geen snars van.']],
    task: { nl: 'Schrijf 5 zinnen over iets wat je hebt meegemaakt en gebruik daarbij twee Duitse spreekwoorden op het juiste moment. Leid er één in met «Wie heißt es so schön» en noem één Nederlandse uitdrukking die in het Duits een ander beeld heeft.', model: 'Als ich anfing, Deutsch zu lernen, verstand ich nur Bahnhof. Aber wie heißt es so schön: Aller Anfang ist schwer. Ich habe jeden Tag geübt, denn Übung macht den Meister. Lustig finde ich, dass man auf Deutsch «die Katze aus dem Sack lässt», während bei uns «der Affe aus dem Ärmel kommt». Heute lese ich deutsche Zeitungen, also: Ende gut, alles gut.' },
    scenario: { nl: 'Je hebt op je Duitse werk een Nederlandse uitdrukking letterlijk vertaald en niemand begreep je. Je vraagt een collega om hulp.', role: 'Markus, een collega uit Frankfurt die van spreekwoorden houdt en graag de herkomst uitlegt', goal: 'Vertel welke uitdrukking je gebruikte, vraag naar de Duitse versie en gebruik zelf een passend Duits spreekwoord.' }
  });

  /* ───────────────────────── C2 · 10 ───────────────────────── */
  U({
    id: 'de-c2-10', level: 'C2', icon: '🎓', title: 'Meisterprüfung', nl: 'Meesterproef: valse vrienden en typische Nederlandse fouten',
    goals: ['De gevaarlijkste valse vrienden tussen Nederlands en Duits uit elkaar houden', 'De fouten vermijden waaraan je een Nederlander herkent', 'Hebben en zijn, voorzetsels en woordvolgorde in lastige gevallen goed kiezen', 'Je eigen tekst nalopen op «Nederlands Duits»'],
    vocab: [
      ['bellen', 'blaffen (opbellen = anrufen)'], ['das Meer', 'de zee'], ['der See', 'het meer'], ['die See', 'de zee'], ['doof', 'dom, stom (doof = taub)'],
      ['deftig', 'stevig, hartig (deftig = vornehm)'], ['schlimm', 'erg (slim = klug, schlau)'], ['mögen', 'lusten, aardig vinden (mogen = dürfen)'], ['dürfen', 'mogen (durven = sich trauen)'], ['die Dose', 'het blik(je) (doos = die Schachtel)'],
      ['der Enkel', 'het kleinkind (enkel = der Knöchel)'], ['die Tapete', 'het behang (tapijt = der Teppich)'], ['selten', 'zelden; zeldzaam'], ['seltsam', 'vreemd, raar'], ['klar', 'helder, duidelijk (klaar = fertig)'],
      ['der Mist', 'de mest; de onzin (mist = der Nebel)'], ['aufheben', 'oprapen; bewaren (opheffen = auflösen)'], ['versuchen', 'proberen (verzoeken = bitten)'], ['der Winkel', 'de hoek (winkel = das Geschäft)'], ['schattig', 'schaduwrijk (schattig = süß, niedlich)'],
      ['das Lokal', 'het café, het restaurant (lokaal = der Raum)'], ['wie', 'hoe (wie = wer)'], ['wer', 'wie (waar = wo)'], ['also', 'dus (alzo, ook = auch)'], ['der Termin', 'de afspraak (termijn = die Frist)'], ['drücken · drucken', 'duwen, drukken · afdrukken, printen']
    ],
    grammar: [
      { t: 'Valse vrienden: het lijkt Nederlands, maar is het niet', es: 'Falsche Freunde Niederländisch–Deutsch',
        html: `<p>Omdat Duits en Nederlands zo verwant zijn, vertrouw je op gelijkenis. Meestal terecht, maar deze woorden laten je struikelen. Leer ze <b>in paren</b>.</p>
<p><b>Werkwoorden:</b> <i><b>bellen</b></i> = blaffen (ik bel je = <i>ich rufe dich an</i>) · <i><b>mögen</b></i> = lusten, aardig vinden (mag ik? = <i>darf ich?</i>) · <i><b>dürfen</b></i> = mogen (durven = <i>sich trauen, wagen</i>) · <i><b>versuchen</b></i> = proberen (verzoeken = <i>bitten</i>) · <i><b>aufheben</b></i> = oprapen, bewaren · <i><b>sich irren</b></i> = zich vergissen (<i>vergessen</i> = vergeten).</p>
<p><b>Bijvoeglijke naamwoorden:</b> <i><b>doof</b></i> = dom · <i><b>deftig</b></i> = stevig, hartig (<i>ein deftiges Essen</i>) · <i><b>schlimm</b></i> = erg · <i><b>klar</b></i> = helder · <i><b>schattig</b></i> = schaduwrijk · <i><b>seltsam</b></i> = raar (zeldzaam = <i>selten</i>) · <i><b>brav</b></i> = zoet, gehoorzaam (niet «dapper»).</p>
<p><b>Naamwoorden:</b> <i><b>die Dose</b></i> = blikje · <i><b>der Enkel</b></i> = kleinkind · <i><b>die Tapete</b></i> = behang · <i><b>der Winkel</b></i> = hoek · <i><b>der Mist</b></i> = mest, onzin · <i><b>das Lokal</b></i> = café · <i><b>der Termin</b></i> = afspraak.</p>
<p><b>Kleine woordjes:</b> <i><b>wie</b></i> = hoe, <i><b>wer</b></i> = wie, <i><b>wo</b></i> = waar · <i><b>also</b></i> = dus · <i><b>bald</b></i> = binnenkort (bijna = <i>fast</i>).</p>
<p><b>Uitzondering:</b> bij <i>zee</i> en <i>meer</i> staat alles <b>kruislings</b>: <i>das <b>Meer</b></i> = de zee, <i>der <b>See</b></i> = het meer, en dan is er nog <i>die <b>See</b></i> = de zee (<i>die Nordsee, auf hoher See</i>). <b>Waarom?</b> Beide woorden betekenden in het Oudgermaans gewoon «groot water». Het Nederlands en het Duits hebben ze later elk anders verdeeld; het Duits heeft bovendien met het geslacht onderscheid gemaakt tussen binnenwater (<i>der</i>) en open zee (<i>die</i>).</p>`,
        table: [['Duits', 'betekent', 'Nederlands woord is in het Duits'], ['bellen', 'blaffen', 'bellen = anrufen'], ['das Meer / der See', 'de zee / het meer', 'kruislings!'], ['doof', 'dom', 'doof = taub'], ['die Dose', 'het blikje', 'doos = die Schachtel'], ['mögen', 'lusten, graag mogen', 'mogen = dürfen'], ['der Winkel', 'de hoek', 'winkel = das Geschäft']],
        sum: 'Ich rufe dich an (niet: belle). · Darf ich? (niet: Mag ich?) · das Meer = de zee, der See = het meer',
        ex: [['Der Hund bellt, und ich rufe dich später an.', 'De hond blaft, en ik bel je later.'], ['Wir fahren im Sommer ans Meer und im Herbst an den Bodensee.', 'We gaan in de zomer naar zee en in de herfst naar het Bodenmeer.'], ['Das ist nicht schlimm, aber auch nicht besonders klug.', 'Dat is niet erg, maar ook niet bijzonder slim.']] },
      { t: 'Hieraan herken je een Nederlander', es: 'Typische Interferenzfehler',
        html: `<p>Ook op hoog niveau blijven een paar Nederlandse patronen doorschemeren. Loop je tekst hierop na.</p>
<p><b>1. Hebben of zijn.</b> Duits kiest <i>haben</i> waar wij <i>zijn</i> zeggen: <i>ich <b>habe</b> angefangen / begonnen</i> (ik ben begonnen), <i>ich <b>habe</b> vergessen</i> (ik ben vergeten), <i>ich <b>habe</b> zugenommen / abgenommen</i> (ik ben aangekomen / afgevallen), <i>es <b>hat</b> aufgehört</i> (het is opgehouden), <i>ich <b>habe</b> geheiratet</i> (ik ben getrouwd).</p>
<p><b>2. Werkwoorden aan het eind.</b> In de bijzin staat de persoonsvorm in het Duits <b>altijd achteraan</b>: <i>dass er kommen <b>kann</b></i>, <i>dass sie es gesagt <b>hat</b></i>. De Nederlandse «rode volgorde» (<i>dat hij kan komen, dat ze het heeft gezegd</i>) bestaat niet.</p>
<p><b>3. Voorzetsels.</b> <i><b>am</b> Wochenende</i> (in het weekend) · <i><b>in</b> zwei Wochen</i> (over twee weken) · <i><b>vor</b> zwei Jahren</i> (twee jaar geleden) · <i><b>in</b> der Schule, <b>bei</b> der Arbeit</i> (op school, op het werk) · <i>Interesse <b>an</b></i> · <i>sich freuen <b>auf / über</b></i> · <i><b>im</b> Moment</i> (op het moment).</p>
<p><b>4. «Er».</b> <i>Er zijn veel mensen</i> = <i><b>Es gibt</b> viele Leute</i> · <i>Ik heb er drie</i> = <i>Ich habe drei (<b>davon</b>)</i> · <i>Ik denk eraan</i> = <i>Ich denke <b>daran</b></i>.</p>
<p><b>5. Vaste wendingen.</b> <i>Ik ben het ermee eens</i> = <i>Ich bin <b>einverstanden</b> / Ich stimme zu</i> · <i>Ik heb er zin in</i> = <i>Ich habe <b>Lust darauf</b></i> · <i>Dat klopt</i> = <i>Das <b>stimmt</b></i> · <i>lekker weer</i> = <i><b>schönes</b> Wetter</i> (<i>lecker</i> alleen voor eten).</p>
<p><b>Uitzondering:</b> op regel 2 is er één geval waarin de persoonsvorm <b>niet</b> achteraan staat: bij twee hele werkwoorden aan het eind gaat <i>haben</i> ervóór: <i>…, dass er nicht <b>hat</b> kommen können</i> · <i>…, weil ich sie <b>habe</b> singen hören</i>. <b>Waarom?</b> Het Duits houdt het paar hele werkwoorden (de zogeheten <i>Ersatzinfinitiv</i>) bij elkaar als slot van de zin, en dan is er achteraan geen plaats meer voor het hulpwerkwoord. Het is een rest van de oudere, vrijere volgorde die het Nederlands juist heeft bewaard.</p>`,
        table: [['Nederlands', 'fout «Nederlands Duits»', 'goed Duits'], ['Ik ben begonnen.', 'Ich bin begonnen.', 'Ich habe begonnen / angefangen.'], ['dat hij kan komen', 'dass er kann kommen', 'dass er kommen kann'], ['in het weekend', 'im Wochenende', 'am Wochenende'], ['over twee weken', 'über zwei Wochen', 'in zwei Wochen'], ['Ik bel je.', 'Ich belle dich.', 'Ich rufe dich an.'], ['Ik ben het ermee eens.', 'Ich bin es einig.', 'Ich bin einverstanden.']],
        ex: [['Ich habe ganz vergessen, dass wir am Wochenende verabredet sind.', 'Ik ben helemaal vergeten dat we in het weekend hebben afgesproken.'], ['In zwei Wochen fange ich bei der neuen Firma an.', 'Over twee weken begin ik bij het nieuwe bedrijf.'], ['Schade, dass er nicht hat kommen können.', 'Jammer dat hij niet heeft kunnen komen.']] }
    ],
    dialogue: {
      t: 'Die letzte Korrektur', place: 'Münster 🇩🇪',
      lines: [
        ['Anna', 'Paul, liest du meine Rede für die Abschlussfeier noch einmal durch? Ich will keinen einzigen Fehler mehr drin haben.', 'Paul, lees jij mijn toespraak voor de slotbijeenkomst nog een keer door? Ik wil er geen enkele fout meer in hebben.'],
        ['Paul', 'Gern. Dein Deutsch ist ausgezeichnet. Aber hier: «Ich bin vor zwei Jahren mit Deutsch begonnen.»', 'Graag. Je Duits is uitstekend. Maar hier: «Ich bin vor zwei Jahren mit Deutsch begonnen.»'],
        ['Anna', 'Oh nein. «Ich habe begonnen.» Das ist mein Niederländisch.', 'O nee. «Ich habe begonnen.» Dat is mijn Nederlands.'],
        ['Paul', 'Und dann: «Ich hoffe, dass ich Sie alle bald wieder werde sehen.»', 'En dan: «Ich hoffe, dass ich Sie alle bald wieder werde sehen.»'],
        ['Anna', '«Wiedersehen werde.» Das Verb ganz ans Ende. Ich weiß es ja, aber es rutscht mir immer wieder durch.', '«Wiedersehen werde.» Het werkwoord helemaal aan het eind. Ik weet het wel, maar het glipt er steeds weer tussendoor.'],
        ['Paul', 'Und mein Lieblingssatz: «Wenn Sie Fragen haben, bellen Sie mich ruhig.»', 'En mijn lievelingszin: «Als u vragen hebt, blaf me gerust.»'],
        ['Anna', 'Nein! Habe ich das wirklich geschrieben? «Rufen Sie mich ruhig an.»', 'Nee! Heb ik dat echt geschreven? «Rufen Sie mich ruhig an.»'],
        ['Paul', 'Eigentlich schade. Ich hätte gern gesehen, wie hundert Leute dich anbellen. Der Rest ist fehlerfrei. Du kannst stolz sein.', 'Eigenlijk jammer. Ik had graag gezien hoe honderd mensen naar je blaffen. De rest is foutloos. Je mag trots zijn.'],
        ['Anna', 'Danke. Es ist noch kein Meister vom Himmel gefallen, aber ich bin nah dran.', 'Dank je. Niemand wordt als meester geboren, maar ik ben er dichtbij.']
      ],
      q: [
        { t: 'mc', q: 'Was ist falsch an «Ich bin begonnen»?', o: ['Im Deutschen heißt es «ich habe begonnen»', 'Das Wort «begonnen» gibt es nicht', 'Es fehlt ein Komma'] },
        { t: 'mc', q: 'Was hat Anna statt «anrufen» geschrieben?', o: ['bellen', 'klingeln', 'telefonieren'] },
        { t: 'mc', q: 'Wie findet Paul die Rede insgesamt?', o: ['Fast fehlerfrei', 'Sehr schlecht', 'Zu lang'] }
      ]
    },
    culture: { t: 'C2 gehaald. En nu?', html: `<p>🎓 Wie tot hier gekomen is, kan in principe alles lezen en zeggen. De hoogste officiële examens zijn het <b>Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom</b> en het <b>ÖSD C2</b> in Oostenrijk. Voor een studie aan een Duitse universiteit is C1 (TestDaF of DSH) meestal genoeg.</p>
<p>Wat daarna nog te winnen valt, staat in geen leerboek: het gevoel voor wat <b>gepast</b> is. Daarvoor helpt alleen veel lezen en luisteren. Een paar suggesties: de weekkrant <b>Die Zeit</b> voor lange stukken, de <b>Tagesschau</b> voor helder nieuwsduits, de zondagavondkrimi <b>Tatort</b> voor spreektaal en dialect, en podcasts voor het tempo van echte gesprekken.</p>
<p>🇳🇱🇩🇪 En bedenk: Duitsers waarderen het enorm als een Nederlander goed Duits spreekt, juist omdat ze weten dat het minder vanzelfsprekend is geworden. Een licht accent en een enkele <i>«ich bin vergessen»</i> vinden ze eerder charmant dan storend. <i>Herzlichen Glückwunsch, und weiter so!</i></p>` },
    ex: [
      { t: 'cloze', s: 'Ich ___ dich heute Abend an. (bellen)', a: ['rufe'], o: ['rufe', 'belle', 'klingle'], nl: 'Ik bel je vanavond.', x: 'Valse vriend: bellen betekent in het Duits blaffen.', tag: 'de-falsch' },
      { t: 'cloze', s: 'Wir fahren im Sommer ans ___. (naar zee)', a: ['Meer'], o: ['Meer', 'See', 'Zee'], nl: 'We gaan in de zomer naar zee.', x: 'Uitzondering: kruislings. Das Meer = de zee, der See = het meer. Reden: beide betekenden vroeger «groot water» en zijn in elke taal anders verdeeld.', tag: 'de-falsch' },
      { t: 'cloze', s: '___ ich hier rauchen? (mag ik)', a: ['Darf'], o: ['Darf', 'Mag', 'Durf'], nl: 'Mag ik hier roken?', tag: 'de-falsch' },
      { t: 'cloze', s: 'Ich ___ vor zwei Jahren mit Deutsch angefangen.', a: ['habe'], o: ['habe', 'bin', 'war'], nl: 'Ik ben twee jaar geleden met Duits begonnen.', tag: 'de-nlfehler' },
      { t: 'cloze', s: 'Ich hoffe, dass er morgen kommen ___.', a: ['kann'], o: ['kann', 'kommt', 'können'], nl: 'Ik hoop dat hij morgen kan komen.', x: 'In de bijzin staat de persoonsvorm in het Duits achteraan: kommen kann.', tag: 'de-nlfehler' },
      { t: 'cloze', s: 'Was machst du ___ Wochenende?', a: ['am'], o: ['am', 'im', 'ins'], nl: 'Wat doe je in het weekend?', tag: 'de-nlfehler' },
      { t: 'cloze', s: '___ zwei Wochen fahre ich nach Wien. (over twee weken)', a: ['In'], o: ['In', 'Über', 'Vor'], nl: 'Over twee weken ga ik naar Wenen.', tag: 'de-nlfehler' },
      { t: 'mc', q: 'Wat betekent «ein deftiges Essen»?', o: ['een stevige, hartige maaltijd', 'een chic diner', 'een duur etentje'], tag: 'de-falsch' },
      { t: 'mc', q: 'Welke zin is goed Duits?', o: ['Schade, dass er nicht hat kommen können.', 'Schade, dass er nicht kommen können hat.', 'Schade, dass er nicht hat können kommen.'], x: 'Uitzondering op «persoonsvorm achteraan»: bij twee hele werkwoorden aan het eind gaat haben ervoor. Reden: het paar hele werkwoorden blijft bij elkaar als slot van de zin.', tag: 'de-nlfehler' },
      { t: 'mc', q: 'Hoe zeg je «Ik ben het ermee eens»?', o: ['Ich bin einverstanden.', 'Ich bin es einig.', 'Ich bin es damit eins.'], tag: 'de-nlfehler' },
      { t: 'tr', nl: 'Ik ben je naam vergeten.', a: ['Ich habe deinen Namen vergessen.', 'Ich habe Ihren Namen vergessen.'], tag: 'de-nlfehler' },
      { t: 'tr', nl: 'Dat is niet erg.', a: ['Das ist nicht schlimm.'], tag: 'de-falsch' },
      { t: 'tr', nl: 'Er zijn veel winkels in de stad.', a: ['Es gibt viele Geschäfte in der Stadt.', 'In der Stadt gibt es viele Geschäfte.', 'Es gibt viele Läden in der Stadt.'], tag: 'de-nlfehler' },
      { t: 'order', s: 'Ich habe ganz vergessen, dass wir verabredet sind.', nl: 'Ik ben helemaal vergeten dat we hebben afgesproken.', tag: 'de-nlfehler' },
      { t: 'match', p: [['die Dose', 'het blikje'], ['der Enkel', 'het kleinkind'], ['die Tapete', 'het behang'], ['seltsam', 'raar'], ['der Winkel', 'de hoek']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Brief an mich selbst', type: 'Persoonlijke terugblik',
      p: [
        ['Liebe Anna von vor drei Jahren, du stehst gerade in einer Bäckerei in Aachen und traust dich nicht, den Mund aufzumachen. Du willst «zwei Brötchen» sagen und überlegst, ob es «zwei» oder «zwo» heißt. Ich schreibe dir, um dir zu sagen: Es wird besser. Viel besser.', 'Lieve Anna van drie jaar geleden, je staat nu in een bakkerij in Aken en durft je mond niet open te doen. Je wilt «twee broodjes» zeggen en vraagt je af of het «zwei» of «zwo» is. Ik schrijf je om te zeggen: het wordt beter. Veel beter.'],
        ['Du wirst Fehler machen, über die du noch Jahre lachst. Du wirst einem Kunden schreiben, er solle dich «bellen». Du wirst ein «deftiges» Kleid loben und nicht verstehen, warum die Kollegin beleidigt ist. Und du wirst hundertmal «ich bin vergessen» sagen, bis es eines Tages einfach aufhört. Niemand wird dir je böse sein.', 'Je zult fouten maken waar je nog jaren om lacht. Je zult een klant schrijven dat hij je moet «blaffen». Je zult een «deftiges» jurk prijzen en niet begrijpen waarom je collega beledigd is. En je zult honderd keer «ich bin vergessen» zeggen, tot het op een dag gewoon ophoudt. Niemand zal ooit boos op je zijn.'],
        ['Was ich damals nicht wusste: Eine Sprache lernt man nicht, um fehlerfrei zu sein. Man lernt sie, um mit Menschen zu reden, die man sonst nie kennengelernt hätte. Heute habe ich Freunde in Leipzig, lese Kafka im Original und streite mit meinem Vermieter auf Amtsdeutsch. Hätte mir das damals jemand gesagt, ich hätte nur Bahnhof verstanden.', 'Wat ik toen niet wist: een taal leer je niet om foutloos te zijn. Je leert haar om met mensen te praten die je anders nooit had leren kennen. Nu heb ik vrienden in Leipzig, lees ik Kafka in het origineel en ruzie ik met mijn huisbaas in ambtelijk Duits. Had iemand me dat toen gezegd, ik had er niets van begrepen.']
      ],
      gl: [['sich trauen', 'durven'], ['überlegen', 'nadenken, zich afvragen'], ['beleidigt', 'beledigd'], ['jemandem böse sein', 'boos zijn op iemand'], ['streiten', 'ruziën'], ['im Original', 'in het origineel']],
      q: [
        { t: 'mc', q: 'Wo steht die «Anna von vor drei Jahren»?', o: ['In einer Bäckerei in Aachen', 'In einem Büro in Leipzig', 'Am Bahnhof'] },
        { t: 'mc', q: 'Warum war die Kollegin beleidigt?', o: ['«Deftig» bedeutet auf Deutsch nicht «vornehm», sondern «derb, kräftig»', 'Anna hat das Kleid nicht gesehen', 'Die Kollegin mochte keine Komplimente'] },
        { t: 'mc', q: 'Wozu lernt man laut Anna eine Sprache?', o: ['Um mit Menschen zu reden, die man sonst nie kennengelernt hätte', 'Um fehlerfrei zu sein', 'Um Prüfungen zu bestehen'] }
      ]
    },
    say: [['Ich rufe dich heute Abend an.', 'Ik bel je vanavond.'], ['Ich habe vor zwei Jahren mit Deutsch angefangen.', 'Ik ben twee jaar geleden met Duits begonnen.'], ['Schade, dass er nicht hat kommen können.', 'Jammer dat hij niet heeft kunnen komen.']],
    task: { nl: 'Schrijf een brief aan jezelf als beginner (6 zinnen). Vertel wat je nu kunt, welke typische Nederlandse fout je het langst hebt gemaakt en welke valse vriend je ooit in verlegenheid bracht. Loop je tekst na op hebben/zijn, woordvolgorde in de bijzin en voorzetsels.', model: 'Lieber Anfänger, ich schreibe dir, weil ich dir Mut machen möchte. Vor drei Jahren habe ich mit Deutsch angefangen und konnte kaum ein Brötchen bestellen. Am längsten habe ich «ich bin vergessen» gesagt, obwohl ich die Regel kannte. Einmal habe ich eine Kollegin gefragt, ob ich sie «bellen» dürfe, und das ganze Büro hat gelacht. Heute weiß ich, dass man aus solchen Fehlern am meisten lernt. In zwei Wochen mache ich die C2-Prüfung, und ich freue mich darauf.' },
    scenario: { nl: 'Je hebt een Duitse toespraak geschreven voor een afscheid en laat een Duitse vriend de laatste correctie doen.', role: 'Paul, een taalgevoelige vriend uit Münster die de typische fouten van Nederlanders kent en ze met humor aanwijst', goal: 'Lees een paar zinnen voor, verbeter zelf een fout met hebben/zijn of woordvolgorde, en vraag of een woord een valse vriend is.' }
  });
})(window.SPT);
