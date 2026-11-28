/* Duits voor Nederlandstaligen — niveau C1, units 1–5 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-partattr': 'uitgebreide bepaling vóór het naamwoord (die von … beschlossenen Maßnahmen)', 'de-gerundiv': 'zu + Partizip I (die zu lösende Aufgabe)', 'de-nominalstil': 'naamwoordstijl en werkwoordstijl omzetten',
    'de-fvg': 'vaste werkwoordsverbinding (zur Verfügung stehen, in Betracht ziehen)', 'de-konj1-zeit': 'indirecte rede: tijden, vragen en verzoeken', 'de-distanz': 'afstand nemen van een bron (laut, zufolge, angeblich)',
    'de-zustand': 'toestandspassief (ist geöffnet) tegenover handelingspassief (wird geöffnet)', 'de-bekommen': 'bekommen-passief (Er bekommt das Buch geschenkt)', 'de-alsob': 'als ob / als wäre + Konjunktiv II', 'de-irreal-c1': 'zu … als dass, beinahe, es sei denn'
  });

  /* ───────────────────────── C1 · 1 ───────────────────────── */
  U({
    id: 'de-c1-01', level: 'C1', icon: '🗞️', title: 'Zeitungsdeutsch', nl: 'Krantenduits: lange bepalingen vóór het naamwoord',
    goals: ['Lange krantenzinnen ontleden en begrijpen', 'Een uitgebreide bepaling vóór het naamwoord lezen en maken', 'Zu + Partizip I herkennen (die zu lösende Aufgabe)', 'Een bijzin omzetten in een compacte bepaling en terug'],
    vocab: [
      ['die Maßnahme', 'de maatregel'], ['beschließen', 'besluiten'], ['der Beschluss', 'het besluit'], ['verabschieden', 'aannemen (wet)'], ['der Gesetzentwurf', 'het wetsontwerp'],
      ['die Behörde', 'de instantie, de overheidsdienst'], ['der Ausschuss', 'de commissie'], ['die Abstimmung', 'de stemming'], ['die Opposition', 'de oppositie'], ['fordern', 'eisen'],
      ['ablehnen', 'afwijzen'], ['umsetzen', 'uitvoeren, in praktijk brengen'], ['die Umsetzung', 'de uitvoering'], ['betreffen', 'betreffen, raken'], ['die Betroffenen', 'de getroffenen, de betrokkenen'],
      ['vorliegen', 'voorliggen, beschikbaar zijn'], ['zuständig', 'bevoegd'], ['die Auswirkung', 'de uitwerking, het gevolg'], ['erheblich', 'aanzienlijk'], ['bislang', 'tot dusver'],
      ['angesichts', 'gezien, met het oog op'], ['der Sachverhalt', 'de toedracht, de feiten'], ['klären', 'ophelderen'], ['vorläufig', 'voorlopig'], ['der Haushalt', 'de begroting; het huishouden'], ['ursprünglich', 'oorspronkelijk']
    ],
    grammar: [
      { t: 'De hele bijzin vóór het naamwoord', es: 'Erweitertes Partizipialattribut',
        html: `<p>Geschreven Duits kan een complete betrekkelijke bijzin <b>tussen lidwoord en naamwoord</b> persen. Het deelwoord staat direct vóór het naamwoord en krijgt een gewone uitgang; alles wat erbij hoort, staat ervoor:</p>
<p><i>die Maßnahmen, die gestern von der Regierung beschlossen wurden</i><br>→ <i><b>die</b> gestern von der Regierung <b>beschlossenen Maßnahmen</b></i></p>
<p><b>Zo lees je het:</b> zie je een lidwoord gevolgd door een voorzetsel, een bijwoord of nóg een lidwoord (<i>die von …, der seit …, das in der …</i>), dan begint er een ingebedde bepaling. Zoek het deelwoord met uitgang en het naamwoord erachter; lees dan terug.</p>
<p><b>Partizip II</b> = passief of afgelopen (<i>die beschlossenen Maßnahmen</i> = die besloten zijn). <b>Partizip I</b> = actief en gelijktijdig (<i>die seit Jahren steigenden Kosten</i> = die al jaren stijgen).</p>
<p><b>Uitzondering:</b> in zo’n bepaling staat het deelwoord <b>achteraan</b>, ná alle aanvullingen, terwijl een gewoon bijvoeglijk naamwoord geen aanvullingen vóór zich duldt in het Nederlands. <b>Waarom?</b> De groep gedraagt zich als een Duitse bijzin, en daar staat het werkwoord altijd aan het einde; alleen is het werkwoord hier een deelwoord met een naamvalsuitgang geworden.</p>`,
        table: [['bijzin', 'bepaling vóór het naamwoord'], ['der Zug, der um 8 Uhr abfährt', 'der um 8 Uhr abfahrende Zug'], ['die Studie, die letzte Woche veröffentlicht wurde', 'die letzte Woche veröffentlichte Studie'], ['ein Problem, das seit Jahren bekannt ist', 'ein seit Jahren bekanntes Problem'], ['die Bürger, die von der Reform betroffen sind', 'die von der Reform betroffenen Bürger']],
        sum: 'die gestern von der Regierung beschlossenen Maßnahmen · die seit Jahren steigenden Kosten',
        ex: [['Der vom Ausschuss vorgelegte Bericht umfasst 300 Seiten.', 'Het door de commissie voorgelegde rapport telt 300 pagina’s.'], ['Die für morgen geplante Abstimmung wurde verschoben.', 'De voor morgen geplande stemming is uitgesteld.'], ['Die in den Niederlanden lebenden Deutschen dürfen ebenfalls wählen.', 'De in Nederland wonende Duitsers mogen eveneens stemmen.']] },
      { t: 'Die zu lösende Aufgabe: wat nog moet gebeuren', es: 'Gerundivum: zu + Partizip I',
        html: `<p><b>zu + Partizip I</b> vóór een naamwoord betekent dat iets <b>moet of kan worden gedaan</b>. Het is de bijvoeglijke versie van <i>sein + zu</i>:</p>
<p><i>Die Aufgabe <b>ist zu lösen</b>.</i> → <i>die <b>zu lösende</b> Aufgabe</i> (de op te lossen opgave)<br><i>die <b>zu erwartenden</b> Kosten</i> (de te verwachten kosten) · <i>ein nicht <b>zu unterschätzendes</b> Risiko</i> (een niet te onderschatten risico)</p>
<p>Bij scheidbare werkwoorden staat <i>zu</i> in het midden: <i>die <b>einzuhaltenden</b> Fristen</i> (de in acht te nemen termijnen).</p>
<p>Het Nederlands doet hetzelfde met <i>te + heel werkwoord</i>, zonder uitgang. Het Duits heeft de <b>-d-</b> en een uitgang nodig.</p>
<p><b>Uitzondering:</b> de vorm ziet er actief uit (Partizip I), maar de betekenis is <b>passief</b>: <i>die zu lösende Aufgabe</i> lost niets op, ze moet opgelost <i>worden</i>. <b>Waarom?</b> De vorm is geen echt Partizip I, maar komt van de oude verbogen infinitief met <i>zu</i> (<i>zu lösen-</i>); de -d- is er later tussen gekomen naar het voorbeeld van het deelwoord.</p>`,
        table: [['sein + zu', 'vóór het naamwoord', 'Nederlands'], ['Die Frage ist zu klären.', 'die zu klärende Frage', 'de op te helderen vraag'], ['Die Kosten sind zu erwarten.', 'die zu erwartenden Kosten', 'de te verwachten kosten'], ['Die Frist ist einzuhalten.', 'die einzuhaltende Frist', 'de in acht te nemen termijn']],
        ex: [['Die noch zu klärenden Fragen werden morgen besprochen.', 'De nog op te helderen vragen worden morgen besproken.'], ['Das ist ein ernst zu nehmender Einwand.', 'Dat is een serieus te nemen bezwaar.'], ['Die zu zahlende Summe beträgt 400 Euro.', 'Het te betalen bedrag is 400 euro.']] }
    ],
    dialogue: {
      t: 'Was steht da eigentlich?', place: 'Berlin 🇩🇪',
      lines: [
        ['Anna', 'Kannst du mir helfen? Ich verstehe diesen Satz in der Zeitung nicht.', 'Kun je me helpen? Ik begrijp deze zin in de krant niet.'],
        ['Daniel', 'Zeig mal. «Die von der Opposition seit Monaten geforderte und nun vom Kabinett beschlossene Reform …» Ja, typisch.', 'Laat eens zien. «De door de oppositie al maanden geëiste en nu door het kabinet besloten hervorming …» Ja, typisch.'],
        ['Anna', 'Wo ist denn das Verb?', 'Waar is het werkwoord dan?'],
        ['Daniel', 'Das kommt erst viel später. Such zuerst das Nomen: «Reform». Alles zwischen «die» und «Reform» beschreibt die Reform.', 'Dat komt pas veel later. Zoek eerst het naamwoord: «Reform». Alles tussen «die» en «Reform» beschrijft de hervorming.'],
        ['Anna', 'Also: die Reform, die die Opposition gefordert und das Kabinett beschlossen hat.', 'Dus: de hervorming die de oppositie heeft geëist en het kabinet heeft besloten.'],
        ['Daniel', 'Genau. Und hier: «die noch zu klärenden Fragen».', 'Precies. En hier: «die noch zu klärenden Fragen».'],
        ['Anna', 'Die Fragen, die noch geklärt werden müssen?', 'De vragen die nog opgehelderd moeten worden?'],
        ['Daniel', 'Perfekt. So spricht kein Mensch, aber so schreibt jede Behörde.', 'Perfect. Zo praat geen mens, maar zo schrijft elke instantie.']
      ],
      q: [
        { t: 'mc', q: 'Was soll Anna zuerst suchen?', o: ['Das Nomen', 'Das Verb', 'Das Subjekt des Hauptsatzes'] },
        { t: 'mc', q: 'Was bedeutet «die noch zu klärenden Fragen»?', o: ['Fragen, die noch geklärt werden müssen', 'Fragen, die schon geklärt sind', 'Fragen, die jemand gerade klärt'] },
        { t: 'mc', q: 'Wer schreibt laut Daniel so?', o: ['Jede Behörde', 'Kein Mensch', 'Nur die Opposition'] }
      ]
    },
    culture: { t: 'Mark Twain en de Duitse zin', html: `<p>De Amerikaanse schrijver <b>Mark Twain</b> schreef in 1880 het essay <i>The Awful German Language</i>. Zijn bekendste klacht: in een Duitse krant duikt de lezer de zin in en komt pas aan de andere kant van de oceaan weer boven, met het werkwoord in zijn mond.</p>
<p>📰 Die stijl heet <b>Nominalstil</b> of spottend <b>Papierdeutsch</b>. Kwaliteitskranten als de <i>FAZ</i> en de <i>Süddeutsche</i> gebruiken hem nog volop; in de <i>Tagesschau</i> hoor je hem elke avond. Stijlgidsen raden hem al honderd jaar af, zonder veel succes.</p>
<p>Voor jou als lezer is het goede nieuws: het is een <b>vast patroon</b>. Wie het lidwoord en het bijbehorende naamwoord vindt, heeft de zin gekraakt. Zelf hoef je zo niet te schrijven; in een mail is een bijzin vriendelijker.</p>` },
    ex: [
      { t: 'cloze', s: 'die gestern von der Regierung ___ Maßnahmen (beschließen)', a: ['beschlossenen'], o: ['beschlossenen', 'beschließenden', 'beschlossen'], nl: 'de gisteren door de regering besloten maatregelen', tag: 'de-partattr' },
      { t: 'cloze', s: 'die seit Jahren ___ Kosten (steigen, nog bezig)', a: ['steigenden'], o: ['steigenden', 'gestiegenen', 'steigende'], nl: 'de al jaren stijgende kosten', tag: 'de-partattr' },
      { t: 'cloze', s: 'der um acht Uhr ___ Zug (abfahren)', a: ['abfahrende'], o: ['abfahrende', 'abgefahrene', 'abfahrenden'], nl: 'de om acht uur vertrekkende trein', tag: 'de-partattr' },
      { t: 'cloze', s: 'die von der Reform ___ Bürger (betreffen)', a: ['betroffenen'], o: ['betroffenen', 'betreffenden', 'betroffen'], nl: 'de door de hervorming getroffen burgers', tag: 'de-partattr' },
      { t: 'cloze', s: 'die noch zu ___ Fragen (klären)', a: ['klärenden'], o: ['klärenden', 'geklärten', 'klären'], nl: 'de nog op te helderen vragen', tag: 'de-gerundiv' },
      { t: 'cloze', s: 'die ___ Fristen (einhalten: die in acht genomen moeten worden)', a: ['einzuhaltenden'], o: ['einzuhaltenden', 'zu einhaltenden', 'eingehaltenen'], nl: 'de in acht te nemen termijnen', x: 'Bij een scheidbaar werkwoord staat zu in het midden: ein-zu-haltend.', tag: 'de-gerundiv' },
      { t: 'cloze', s: 'ein ernst zu ___ Einwand (nehmen)', a: ['nehmender'], o: ['nehmender', 'genommener', 'nehmen'], nl: 'een serieus te nemen bezwaar', tag: 'de-gerundiv' },
      { t: 'mc', q: '«die zu zahlende Summe»: wat betekent dat?', o: ['het bedrag dat betaald moet worden', 'het bedrag dat betaalt', 'het bedrag dat betaald is'], x: 'Uitzondering: de vorm lijkt actief (Partizip I), maar de betekenis is passief. Reden: het komt van de oude verbogen infinitief met zu.', tag: 'de-gerundiv' },
      { t: 'mc', q: 'Waar staat het deelwoord in een uitgebreide bepaling?', o: ['Direct vóór het naamwoord, na alle aanvullingen', 'Direct na het lidwoord', 'Aan het einde van de zin'], x: 'Uitzondering t.o.v. een gewoon bijvoeglijk naamwoord: de groep is als een bijzin gebouwd, met het werkwoord (hier het deelwoord) achteraan.', tag: 'de-partattr' },
      { t: 'mc', q: 'Wat is «der Gesetzentwurf»?', o: ['het wetsontwerp', 'de grondwet', 'de wetgever'], tag: 'de-vok' },
      { t: 'tr', nl: 'de voor morgen geplande stemming', a: ['die für morgen geplante Abstimmung'], tag: 'de-partattr' },
      { t: 'tr', nl: 'de te verwachten kosten', a: ['die zu erwartenden Kosten'], tag: 'de-gerundiv' },
      { t: 'tr', nl: 'het door de commissie voorgelegde rapport', a: ['der vom Ausschuss vorgelegte Bericht', 'der von dem Ausschuss vorgelegte Bericht'], tag: 'de-partattr' },
      { t: 'order', s: 'Die für morgen geplante Abstimmung wurde verschoben.', nl: 'De voor morgen geplande stemming is uitgesteld.', tag: 'de-partattr' },
      { t: 'match', p: [['beschließen', 'besluiten'], ['ablehnen', 'afwijzen'], ['die Behörde', 'de instantie'], ['erheblich', 'aanzienlijk'], ['vorläufig', 'voorlopig']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Bundestag verabschiedet umstrittenes Heizungsgesetz', type: 'Krantenbericht',
      p: [
        ['Der Bundestag hat am Freitag das seit Monaten heftig diskutierte Heizungsgesetz verabschiedet. Die von der Opposition bis zuletzt abgelehnte Reform sieht vor, dass neu eingebaute Heizungen künftig zu mindestens 65 Prozent mit erneuerbaren Energien betrieben werden müssen.', 'De Bondsdag heeft vrijdag de al maanden heftig bediscussieerde verwarmingswet aangenomen. De door de oppositie tot het laatst afgewezen hervorming bepaalt dat nieuw ingebouwde verwarmingen voortaan voor minstens 65 procent op duurzame energie moeten draaien.'],
        ['Die ursprünglich für Januar geplante Regelung gilt nun zunächst nur für Neubauten. Für bereits bestehende Gebäude sind lange Übergangsfristen vorgesehen. Die von vielen Hausbesitzern befürchteten Kosten sollen durch eine vom Staat finanzierte Förderung von bis zu 70 Prozent gesenkt werden.', 'De oorspronkelijk voor januari geplande regeling geldt nu eerst alleen voor nieuwbouw. Voor reeds bestaande gebouwen zijn lange overgangstermijnen voorzien. De door veel huiseigenaren gevreesde kosten moeten door een door de staat gefinancierde subsidie van maximaal 70 procent omlaag.'],
        ['Zahlreiche noch zu klärende Detailfragen wurden an den zuständigen Ausschuss überwiesen. Angesichts der zu erwartenden Klagen dürfte das letzte Wort allerdings noch nicht gesprochen sein.', 'Talrijke nog op te helderen detailvragen zijn naar de bevoegde commissie verwezen. Gezien de te verwachten rechtszaken zal het laatste woord echter waarschijnlijk nog niet gesproken zijn.']
      ],
      gl: [['vorsehen', 'bepalen, voorzien'], ['betreiben', 'laten draaien'], ['die Übergangsfrist', 'de overgangstermijn'], ['befürchten', 'vrezen'], ['überweisen', 'verwijzen; overmaken'], ['die Klage', 'de rechtszaak, de klacht']],
      q: [
        { t: 'mc', q: 'Für welche Gebäude gilt die Regelung zunächst?', o: ['Nur für Neubauten', 'Für alle Gebäude', 'Nur für Mietwohnungen'] },
        { t: 'mc', q: 'Wer hat die Reform bis zuletzt abgelehnt?', o: ['Die Opposition', 'Der zuständige Ausschuss', 'Die Hausbesitzer'] },
        { t: 'mc', q: 'Was bedeutet «die zu erwartenden Klagen»?', o: ['Klagen, mit denen man rechnen muss', 'Klagen, die schon entschieden sind', 'Klagen, die man nicht erwartet'] }
      ]
    },
    say: [['Die für morgen geplante Abstimmung wurde verschoben.', 'De voor morgen geplande stemming is uitgesteld.'], ['Das ist ein ernst zu nehmender Einwand.', 'Dat is een serieus te nemen bezwaar.'], ['Die noch zu klärenden Fragen besprechen wir morgen.', 'De nog op te helderen vragen bespreken we morgen.']],
    task: { nl: 'Schrijf drie krantenzinnen over nieuws uit jouw land. Gebruik in elke zin een uitgebreide bepaling vóór het naamwoord, waarvan één met zu + Partizip I.', model: 'Die seit Jahren steigenden Mieten sind in Amsterdam das wichtigste Thema. Der von der Stadt vorgelegte Plan sieht tausend neue Wohnungen vor. Die noch zu lösenden Probleme sind allerdings erheblich.' },
    scenario: { nl: 'Je leest met een Duitse vriend een moeilijk krantenartikel en probeert de zinnen uit te pluizen.', role: 'Daniel, een geduldige journalist die uitlegt hoe krantenduits in elkaar zit', goal: 'Lees een lange zin voor, vraag waar het werkwoord is, en zeg de zin daarna in je eigen woorden met een bijzin.' }
  });

  /* ───────────────────────── C1 · 2 ───────────────────────── */
  U({
    id: 'de-c1-02', level: 'C1', icon: '🎓', title: 'Studium und Wissenschaftssprache', nl: 'Wetenschappelijk Duits: naamwoordstijl en vaste verbindingen',
    goals: ['Wetenschappelijke en zakelijke teksten lezen en schrijven', 'Wisselen tussen naamwoordstijl en werkwoordstijl', 'Vaste werkwoordsverbindingen gebruiken (in Betracht ziehen, zur Verfügung stehen)', 'Een onderzoek samenvatten'],
    vocab: [
      ['die Hochschule', 'de hogeschool, de universiteit'], ['die Vorlesung', 'het hoorcollege'], ['das Seminar', 'de werkgroep'], ['die Hausarbeit', 'het werkstuk, de paper'], ['die Abschlussarbeit', 'de scriptie'],
      ['der Dozent / die Dozentin', 'de docent'], ['die Fragestellung', 'de vraagstelling'], ['der Ansatz', 'de benadering'], ['die Untersuchung', 'het onderzoek'], ['die Annahme', 'de aanname'],
      ['belegen', 'aantonen, staven'], ['widerlegen', 'weerleggen'], ['die Erkenntnis', 'het inzicht'], ['der Zusammenhang', 'het verband'], ['die Voraussetzung', 'de voorwaarde'],
      ['in Betracht ziehen', 'in overweging nemen'], ['zur Verfügung stehen', 'ter beschikking staan'], ['in Anspruch nehmen', 'gebruikmaken van'], ['zum Ausdruck bringen', 'tot uitdrukking brengen'], ['Bezug nehmen auf', 'verwijzen naar'],
      ['unter Beweis stellen', 'bewijzen'], ['zur Sprache kommen', 'ter sprake komen'], ['in Zweifel ziehen', 'in twijfel trekken'], ['die Quellenangabe', 'de bronvermelding'], ['zitieren', 'citeren'], ['das Plagiat', 'het plagiaat']
    ],
    grammar: [
      { t: 'Naamwoordstijl en werkwoordstijl', es: 'Nominalstil und Verbalstil',
        html: `<p>Wetenschappelijke teksten staan in de <b>Nominalstil</b>: handelingen worden naamwoorden, verbonden met voorzetsels en tweede naamvallen. In gesproken Duits en in een goed leesbare tekst gebruik je de <b>Verbalstil</b> met bijzinnen. Je moet tussen beide kunnen wisselen.</p>
<p><i>Nominal:</i> <b>Nach Abschluss der Untersuchung</b> erfolgte <b>die Auswertung der Daten</b>.<br><i>Verbal:</i> <b>Nachdem</b> die Untersuchung <b>abgeschlossen war</b>, <b>wurden</b> die Daten <b>ausgewertet</b>.</p>
<p>Bij het omzetten verandert de rest mee: een <b>bijwoord</b> wordt een <b>bijvoeglijk naamwoord</b> (<i>stark steigen → der <b>starke</b> Anstieg</i>), het <b>onderwerp</b> wordt tweede naamval of <i>durch</i> (<i>die Regierung beschließt → der Beschluss <b>der Regierung</b></i>), het <b>lijdend voorwerp</b> wordt tweede naamval (<i>Daten auswerten → die Auswertung <b>der Daten</b></i>).</p>
<p><b>Uitzondering:</b> heeft het werkwoord een vast voorzetsel, dan blijft dat voorzetsel ook bij het naamwoord staan en komt er <b>geen</b> tweede naamval: <i>auf etwas hoffen → die Hoffnung <b>auf</b> Frieden</i>, <i>an etwas teilnehmen → die Teilnahme <b>an</b> der Studie</i>. <b>Waarom?</b> Het voorzetsel hoort bij de betekenis van het woord zelf en verhuist dus mee; de tweede naamval is alleen voor onderwerp en lijdend voorwerp.</p>`,
        table: [['werkwoordstijl', 'naamwoordstijl'], ['weil die Kosten stark steigen', 'wegen des starken Anstiegs der Kosten'], ['um die Qualität zu verbessern', 'zur Verbesserung der Qualität'], ['wenn man die Daten vergleicht', 'beim Vergleich der Daten'], ['dass er an der Studie teilnimmt', 'seine Teilnahme an der Studie']],
        sum: 'Nachdem die Daten ausgewertet waren → nach Auswertung der Daten',
        ex: [['Zur Überprüfung der Annahme wurden 200 Personen befragt.', 'Om de aanname te toetsen werden 200 personen ondervraagd.'], ['Bei genauerer Betrachtung zeigt sich ein Zusammenhang.', 'Bij nadere beschouwing blijkt er een verband.'], ['Die Teilnahme an der Vorlesung ist Voraussetzung für die Prüfung.', 'Deelname aan het hoorcollege is voorwaarde voor het tentamen.']] },
      { t: 'In Betracht ziehen: werkwoorden in drie woorden', es: 'Funktionsverbgefüge',
        html: `<p>Een <b>Funktionsverbgefüge</b> is een vaste groep van voorzetsel + naamwoord + een «leeg» werkwoord (<i>bringen, kommen, stehen, stellen, nehmen, ziehen</i>). De betekenis zit in het naamwoord; het werkwoord geeft alleen de richting aan.</p>
<p>Veel verbindingen vormen <b>paren</b> van actief en passief:<br><i>etwas <b>zur Sprache bringen</b></i> (ter sprake brengen) ↔ <i><b>zur Sprache kommen</b></i> (ter sprake komen)<br><i>etwas <b>zur Verfügung stellen</b></i> (ter beschikking stellen) ↔ <i><b>zur Verfügung stehen</b></i><br><i>etwas <b>in Frage stellen</b></i> ↔ <i><b>in Frage kommen</b></i> (in aanmerking komen)</p>
<p>Met <i>bringen/stellen/nehmen/ziehen</i> doet iemand iets; met <i>kommen/stehen</i> gebeurt het vanzelf of is het een toestand. Zo vermijd je het passief.</p>
<p><b>Uitzondering:</b> <i>in Frage <b>stellen</b></i> (betwijfelen) en <i>in Frage <b>kommen</b></i> (in aanmerking komen) lijken een paar, maar betekenen iets heel anders. <b>Waarom?</b> <i>Frage</i> heeft twee betekenissen: «twijfel» in de eerste en «keuze waarover gepraat wordt» in de tweede. <i>Das kommt nicht in Frage!</i> = geen sprake van!</p>`,
        table: [['verbinding', 'gewoon werkwoord', 'Nederlands'], ['in Betracht ziehen', 'erwägen', 'in overweging nemen'], ['zum Ausdruck bringen', 'ausdrücken', 'tot uitdrukking brengen'], ['in Anspruch nehmen', 'nutzen', 'gebruikmaken van'], ['unter Beweis stellen', 'beweisen', 'bewijzen'], ['zur Verfügung stehen', '(verfügbar sein)', 'ter beschikking staan'], ['in Zweifel ziehen', 'bezweifeln', 'in twijfel trekken']],
        ex: [['Wir müssen auch andere Ursachen in Betracht ziehen.', 'We moeten ook andere oorzaken in overweging nemen.'], ['Die Daten stehen allen Forschern zur Verfügung.', 'De gegevens staan alle onderzoekers ter beschikking.'], ['Das kommt überhaupt nicht in Frage.', 'Daar is absoluut geen sprake van.']] }
    ],
    dialogue: {
      t: 'Sprechstunde bei der Dozentin', place: 'Heidelberg 🇩🇪',
      lines: [
        ['Frau Dr. Roth', 'Herr Jansen, ich habe Ihre Hausarbeit gelesen. Inhaltlich überzeugend, sprachlich noch zu mündlich.', 'Meneer Jansen, ik heb uw paper gelezen. Inhoudelijk overtuigend, qua taal nog te spreektalig.'],
        ['Herr Jansen', 'Zu mündlich? Können Sie mir ein Beispiel geben?', 'Te spreektalig? Kunt u me een voorbeeld geven?'],
        ['Frau Dr. Roth', 'Sie schreiben: «Weil die Zahlen so stark gestiegen sind, habe ich mir gedacht …» Besser: «Aufgrund des starken Anstiegs der Zahlen wurde die Annahme überprüft.»', 'U schrijft: «Omdat de cijfers zo sterk gestegen zijn, dacht ik …» Beter: «Op grond van de sterke stijging van de cijfers werd de aanname getoetst.»'],
        ['Herr Jansen', 'Also ohne «ich» und mit mehr Nomen.', 'Dus zonder «ik» en met meer naamwoorden.'],
        ['Frau Dr. Roth', 'Richtig. Außerdem sollten Sie andere Erklärungen in Betracht ziehen. Das kommt bei Ihnen kaum zur Sprache.', 'Juist. Bovendien zou u andere verklaringen in overweging moeten nemen. Dat komt bij u nauwelijks ter sprake.'],
        ['Herr Jansen', 'Stehen mir dafür noch zwei Wochen zur Verfügung?', 'Staan mij daarvoor nog twee weken ter beschikking?'],
        ['Frau Dr. Roth', 'Sehen Sie, Sie können es ja. Zwei Wochen, einverstanden. Und denken Sie an die Quellenangaben.', 'Ziet u, u kunt het wel. Twee weken, akkoord. En denk aan de bronvermeldingen.'],
        ['Herr Jansen', 'Selbstverständlich. Vielen Dank für Ihre Zeit.', 'Vanzelfsprekend. Hartelijk dank voor uw tijd.']
      ],
      q: [
        { t: 'mc', q: 'Was kritisiert die Dozentin?', o: ['Die Sprache ist zu mündlich', 'Der Inhalt überzeugt nicht', 'Die Arbeit ist zu lang'] },
        { t: 'mc', q: 'Was soll Herr Jansen in Betracht ziehen?', o: ['Andere Erklärungen', 'Ein anderes Thema', 'Ein anderes Studium'] },
        { t: 'mc', q: 'Wie viel Zeit bekommt er?', o: ['Zwei Wochen', 'Zwei Tage', 'Einen Monat'] }
      ]
    },
    culture: { t: 'Herr Doktor, het academisch kwartiertje en plagiaat', html: `<p>🎓 In Duitsland en vooral Oostenrijk hoort een <b>doctorstitel</b> bij de naam: hij staat op het naambordje, in het paspoort en in de aanhef (<i>Sehr geehrte Frau Dr. Roth</i>). Een hoogleraar spreek je aan met <i>Herr/Frau Professor</i> + achternaam, nooit met de voornaam.</p>
<p>Colleges beginnen <b>c. t.</b> (<i>cum tempore</i>): een kwartier later dan aangegeven, het <i>akademisches Viertel</i>. Staat er <b>s. t.</b> (<i>sine tempore</i>), dan is het stipt. Na een goed college wordt er niet geklapt maar met de knokkels op tafel <b>geklopt</b>.</p>
<p>Omdat de titel zoveel aanzien geeft, is <b>plagiaat</b> een politieke kwestie: meerdere ministers moesten aftreden nadat internetspeurders overgeschreven passages in hun proefschrift hadden gevonden.</p>` },
    ex: [
      { t: 'cloze', s: 'weil die Kosten stark steigen → wegen des ___ Anstiegs der Kosten', a: ['starken'], o: ['starken', 'stark', 'starkes'], nl: 'vanwege de sterke stijging van de kosten', x: 'Het bijwoord (stark) wordt bij het naamwoord een bijvoeglijk naamwoord met uitgang.', tag: 'de-nominalstil' },
      { t: 'cloze', s: 'um die Qualität zu verbessern → ___ Verbesserung der Qualität', a: ['zur'], o: ['zur', 'für', 'um'], nl: 'ter verbetering van de kwaliteit', tag: 'de-nominalstil' },
      { t: 'cloze', s: 'Daten auswerten → die Auswertung ___ Daten', a: ['der'], o: ['der', 'die', 'den'], nl: 'de analyse van de gegevens', tag: 'de-nominalstil' },
      { t: 'cloze', s: 'an der Studie teilnehmen → die Teilnahme ___ der Studie', a: ['an'], o: ['an', 'von', 'bei'], nl: 'de deelname aan de studie', x: 'Uitzondering: een vast voorzetsel verhuist mee naar het naamwoord; er komt geen tweede naamval. Reden: het hoort bij de betekenis van het woord.', tag: 'de-nominalstil' },
      { t: 'cloze', s: 'Wir müssen das in Betracht ___.', a: ['ziehen'], o: ['ziehen', 'nehmen', 'stellen'], nl: 'We moeten dat in overweging nemen.', tag: 'de-fvg' },
      { t: 'cloze', s: 'Die Daten ___ allen zur Verfügung.', a: ['stehen'], o: ['stehen', 'stellen', 'kommen'], nl: 'De gegevens staan iedereen ter beschikking.', x: 'stehen = toestand; stellen = iemand doet het (Wir stellen die Daten zur Verfügung).', tag: 'de-fvg' },
      { t: 'cloze', s: 'Das Thema ist gar nicht zur Sprache ___.', a: ['gekommen'], o: ['gekommen', 'gebracht', 'gestellt'], nl: 'Het onderwerp is helemaal niet ter sprake gekomen.', tag: 'de-fvg' },
      { t: 'mc', q: 'Wat betekent «Das kommt nicht in Frage»?', o: ['Daar is geen sprake van.', 'Dat wordt niet betwijfeld.', 'Daar komt geen vraag over.'], x: 'Uitzondering: in Frage kommen (in aanmerking komen) is niet het passief van in Frage stellen (betwijfelen). Reden: Frage heeft hier twee verschillende betekenissen.', tag: 'de-fvg' },
      { t: 'mc', q: 'Welke zin staat in de naamwoordstijl?', o: ['Nach Abschluss der Untersuchung erfolgte die Auswertung.', 'Nachdem wir fertig waren, haben wir alles ausgewertet.', 'Wir haben untersucht und dann ausgewertet.'], tag: 'de-nominalstil' },
      { t: 'mc', q: 'Wat is «die Vorlesung»?', o: ['het hoorcollege', 'de voorleesavond alleen', 'het voorwoord'], tag: 'de-vok' },
      { t: 'tr', nl: 'Bij nadere beschouwing', a: ['Bei genauerer Betrachtung', 'Bei näherer Betrachtung'], tag: 'de-nominalstil' },
      { t: 'tr', nl: 'We moeten andere oorzaken in overweging nemen.', a: ['Wir müssen andere Ursachen in Betracht ziehen.', 'Wir müssen auch andere Ursachen in Betracht ziehen.'], tag: 'de-fvg' },
      { t: 'tr', nl: 'Ik maak gebruik van uw hulp.', a: ['Ich nehme Ihre Hilfe in Anspruch.'], tag: 'de-fvg' },
      { t: 'order', s: 'Zur Überprüfung der Annahme wurden zweihundert Personen befragt.', nl: 'Om de aanname te toetsen werden tweehonderd personen ondervraagd.', tag: 'de-nominalstil' },
      { t: 'match', p: [['belegen', 'aantonen'], ['widerlegen', 'weerleggen'], ['der Ansatz', 'de benadering'], ['der Zusammenhang', 'het verband'], ['die Hausarbeit', 'het werkstuk']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Zweisprachigkeit und Gedächtnis', type: 'Samenvatting van een onderzoek',
      p: [
        ['Die vorliegende Studie geht der Frage nach, ob das regelmäßige Sprechen zweier Sprachen einen Einfluss auf das Gedächtnis im Alter hat. Zur Überprüfung dieser Annahme wurden 480 Personen zwischen 60 und 80 Jahren über einen Zeitraum von fünf Jahren untersucht.', 'De onderhavige studie onderzoekt de vraag of het regelmatig spreken van twee talen invloed heeft op het geheugen op hogere leeftijd. Om deze aanname te toetsen werden 480 personen tussen 60 en 80 jaar over een periode van vijf jaar onderzocht.'],
        ['Bei der Auswertung der Daten zeigte sich ein deutlicher Zusammenhang: Zweisprachige Teilnehmer schnitten in Gedächtnistests im Durchschnitt besser ab. Dabei muss allerdings in Betracht gezogen werden, dass sie häufiger über einen höheren Bildungsabschluss verfügten.', 'Bij de analyse van de gegevens bleek een duidelijk verband: tweetalige deelnemers scoorden in geheugentests gemiddeld beter. Daarbij moet echter in overweging worden genomen dat ze vaker een hogere opleiding hadden.'],
        ['Nach Berücksichtigung dieses Faktors blieb der Unterschied bestehen, fiel jedoch geringer aus. Die Ergebnisse stellen frühere Untersuchungen nicht in Frage, bringen aber zum Ausdruck, dass weitere Forschung erforderlich ist. Die Daten stehen anderen Forschern auf Anfrage zur Verfügung.', 'Na het meewegen van deze factor bleef het verschil bestaan, maar viel het kleiner uit. De resultaten trekken eerder onderzoek niet in twijfel, maar brengen tot uitdrukking dat verder onderzoek nodig is. De gegevens staan andere onderzoekers op verzoek ter beschikking.']
      ],
      gl: [['einer Frage nachgehen', 'een vraag onderzoeken'], ['das Gedächtnis', 'het geheugen'], ['abschneiden', 'scoren, presteren'], ['der Bildungsabschluss', 'het opleidingsniveau'], ['die Berücksichtigung', 'het meewegen'], ['erforderlich', 'vereist, nodig']],
      q: [
        { t: 'mc', q: 'Welcher Frage geht die Studie nach?', o: ['Ob Zweisprachigkeit das Gedächtnis im Alter beeinflusst', 'Ob ältere Menschen Sprachen lernen können', 'Ob Bildung das Gedächtnis verbessert'] },
        { t: 'mc', q: 'Was muss in Betracht gezogen werden?', o: ['Der höhere Bildungsabschluss der Zweisprachigen', 'Das Alter der Forscher', 'Die Dauer der Tests'] },
        { t: 'mc', q: 'Was geschah nach Berücksichtigung dieses Faktors?', o: ['Der Unterschied blieb, war aber geringer', 'Der Unterschied verschwand', 'Der Unterschied wurde größer'] }
      ]
    },
    say: [['Das müssen wir in Betracht ziehen.', 'Dat moeten we in overweging nemen.'], ['Die Daten stehen allen zur Verfügung.', 'De gegevens staan iedereen ter beschikking.'], ['Das kommt überhaupt nicht in Frage.', 'Daar is absoluut geen sprake van.']],
    task: { nl: 'Vat in 4 zinnen een onderzoek of artikel samen dat je kent, in wetenschappelijke stijl: zonder «ich», met twee omzettingen naar naamwoordstijl en twee vaste verbindingen.', model: 'Die Studie untersucht den Einfluss von Bewegung auf den Schlaf. Bei der Auswertung der Daten zeigte sich ein deutlicher Zusammenhang. Andere Faktoren wie das Alter wurden ebenfalls in Betracht gezogen. Die Ergebnisse stehen im Internet zur Verfügung.' },
    scenario: { nl: 'Je bespreekt je paper met een Duitse docente tijdens haar spreekuur.', role: 'Frau Dr. Roth, een strenge maar eerlijke docente die je met Sie aanspreekt', goal: 'Vraag wat er beter kan, formuleer één zin opnieuw in formeel Duits, en vraag om uitstel (zur Verfügung stehen).' }
  });

  /* ───────────────────────── C1 · 3 ───────────────────────── */
  U({
    id: 'de-c1-03', level: 'C1', icon: '🏛️', title: 'Politik und Gesellschaft', nl: 'Politiek: precies weergeven wat iemand zei',
    goals: ['Het Duitse politieke systeem en debat volgen', 'De indirecte rede in alle tijden beheersen', 'Vragen en verzoeken indirect weergeven', 'Afstand nemen van een bron (laut, zufolge, angeblich)'],
    vocab: [
      ['der Bundestag', 'de Bondsdag (parlement)'], ['der Bundesrat', 'de Bondsraad (deelstatenkamer)'], ['der Bundeskanzler', 'de bondskanselier'], ['das Bundesland', 'de deelstaat'], ['die Koalition', 'de coalitie'],
      ['der Abgeordnete', 'het parlementslid'], ['die Fraktion', 'de fractie'], ['die Wahl', 'de verkiezing'], ['die Stimme', 'de stem'], ['der Wahlkampf', 'de verkiezingscampagne'],
      ['das Grundgesetz', 'de grondwet (van Duitsland)'], ['das Bundesverfassungsgericht', 'het constitutioneel hof'], ['der Föderalismus', 'het federalisme'], ['zurücktreten', 'aftreden'], ['der Rücktritt', 'het aftreden'],
      ['verhandeln', 'onderhandelen'], ['die Verhandlung', 'de onderhandeling'], ['einräumen', 'toegeven'], ['zurückweisen', 'van de hand wijzen'], ['ankündigen', 'aankondigen'],
      ['versichern', 'verzekeren, garanderen'], ['zufolge', 'volgens'], ['dem Vernehmen nach', 'naar verluidt'], ['mutmaßlich', 'vermoedelijk'], ['die Stellungnahme', 'de reactie, het standpunt'], ['die Fünf-Prozent-Hürde', 'de kiesdrempel van vijf procent']
    ],
    grammar: [
      { t: 'Indirecte rede: verleden, toekomst, vraag, verzoek', es: 'Indirekte Rede: Zeiten, Fragen, Aufforderungen',
        html: `<p>De Konjunktiv I kent maar <b>drie tijden</b>, ongeacht de tijd van het inleidende werkwoord:</p>
<p><b>Gelijktijdig:</b> <i>Er sagt/sagte, er <b>habe</b> keine Zeit.</i><br><b>Eerder:</b> <i>Er sagt/sagte, er <b>habe</b> nichts <b>gewusst</b> / er <b>sei</b> nicht <b>dabei gewesen</b>.</i> Alle drie de directe verleden tijden (Präteritum, Perfekt, Plusquamperfekt) worden deze ene vorm.<br><b>Later:</b> <i>Er sagt/sagte, er <b>werde</b> zurücktreten.</i></p>
<p><b>Passief:</b> <i>Es <b>werde</b> geprüft</i> (nu) · <i>Es <b>sei</b> geprüft <b>worden</b></i> (eerder).</p>
<p><b>Vraag:</b> met <i>ob</i> of het vraagwoord, werkwoord achteraan: <i>Sie fragte, <b>ob</b> er zurücktreten <b>werde</b> / <b>wann</b> er davon erfahren <b>habe</b>.</i></p>
<p><b>Verzoek of bevel:</b> met <b>sollen</b> (bevel) of <b>mögen</b> (beleefd verzoek): <i>Er sagte, sie <b>solle</b> warten.</i> · <i>Er bat, man <b>möge</b> ihn entschuldigen.</i></p>
<p>Voornaamwoorden en tijdsaanduidingen schuiven mee: <i>ich → er, hier → dort, morgen → am nächsten Tag</i>.</p>
<p><b>Uitzondering:</b> anders dan in het Engels en Nederlands <b>schuift de tijd niet op</b> na een verleden tijd: <i>Er sagte, er <b>habe</b> Zeit</i> (niet <i>hatte</i>). <b>Waarom?</b> De Konjunktiv markeert al dat het een weergave is; de tijd geeft alleen de verhouding tot het moment van spreken aan (gelijk, eerder, later).</p>`,
        table: [['direct', 'indirect'], ['«Ich weiß nichts.»', 'Er sagte, er wisse nichts.'], ['«Ich wusste nichts.» / «Ich habe nichts gewusst.»', 'Er sagte, er habe nichts gewusst.'], ['«Ich werde zurücktreten.»', 'Er sagte, er werde zurücktreten.'], ['«Wann haben Sie es erfahren?»', 'Sie fragte, wann er es erfahren habe.'], ['«Warten Sie bitte!»', 'Er bat, man möge warten.']],
        sum: 'Er sagte, er habe nichts gewusst. Er werde zurücktreten. Man möge ihn entschuldigen.',
        ex: [['Die Kanzlerin erklärte, sie sei über den Vorgang nicht informiert worden.', 'De kanselier verklaarde dat ze over de gang van zaken niet was geïnformeerd.'], ['Der Minister kündigte an, er werde das Gesetz noch vor dem Sommer vorlegen.', 'De minister kondigde aan dat hij de wet nog voor de zomer zal voorleggen.'], ['Die Journalistin wollte wissen, ob er einen Rücktritt ausschließe.', 'De journaliste wilde weten of hij aftreden uitsluit.']] },
      { t: 'Laut, zufolge, angeblich: wie zegt het?', es: 'Distanzierung: Quellenangaben',
        html: `<p>Naast de Konjunktiv heeft het Duits woorden waarmee je de <b>bron</b> noemt of <b>afstand</b> neemt.</p>
<p><b>Neutraal, bron genoemd:</b> <b>laut</b> + 3/2 (vóór het naamwoord, meestal zonder lidwoord: <i>laut Polizei</i>) · <b>zufolge</b> + 3 (erachter: <i>dem Bericht <b>zufolge</b></i>) · <b>nach</b> Angaben + 2 (<i>nach Angaben der Polizei</i>).</p>
<p><b>Met twijfel:</b> <b>angeblich</b> (naar het heet, de spreker gelooft het niet erg) · <b>vermeintlich</b> (ten onrechte aangenomen) · <b>sogenannt</b> (zogeheten, vaak ironisch).</p>
<p><b>Juridisch voorzichtig:</b> <b>mutmaßlich</b> (vermoedelijk: <i>der mutmaßliche Täter</i>, zolang iemand niet veroordeeld is).</p>
<p><b>Uitzondering:</b> na <i>laut</i> of <i>zufolge</i> staat het werkwoord in de gewone <b>Indikativ</b>, niet in de Konjunktiv: <i>Laut Polizei <b>gab</b> es keine Verletzten.</i> <b>Waarom?</b> De bron is al genoemd; een tweede markering zou dubbelop zijn. Kranten doen het soms toch, maar het geldt als stijlfout.</p>`,
        table: [['woord', 'plaats / naamval', 'voorbeeld'], ['laut', 'ervoor, + 3 (of 2)', 'laut einer Umfrage'], ['zufolge', 'erachter, + 3', 'einem Bericht zufolge'], ['nach Angaben', '+ 2', 'nach Angaben des Ministeriums'], ['angeblich', 'bijwoord', 'Er war angeblich krank.'], ['mutmaßlich', 'bijv. nw. / bijwoord', 'der mutmaßliche Täter']],
        ex: [['Einem Zeitungsbericht zufolge plant die Koalition neue Steuern.', 'Volgens een krantenbericht plant de coalitie nieuwe belastingen.'], ['Der Abgeordnete war angeblich nicht erreichbar.', 'Het parlementslid was naar het heet niet bereikbaar.'], ['Der mutmaßliche Täter wurde festgenommen.', 'De vermoedelijke dader is aangehouden.']] }
    ],
    dialogue: {
      t: 'Nach der Pressekonferenz', place: 'Berlin 🇩🇪',
      lines: [
        ['Anna', 'Ich habe die Pressekonferenz nur halb gesehen. Was hat der Minister denn gesagt?', 'Ik heb de persconferentie maar half gezien. Wat heeft de minister dan gezegd?'],
        ['Jörg', 'Im Grunde nichts. Er habe von den Verträgen nichts gewusst und sei erst letzte Woche informiert worden.', 'In feite niets. Hij zou van de contracten niets hebben geweten en is naar eigen zeggen pas vorige week geïnformeerd.'],
        ['Anna', 'Und tritt er zurück?', 'En treedt hij af?'],
        ['Jörg', 'Eine Journalistin hat gefragt, ob er einen Rücktritt ausschließe. Er sagte nur, er werde die Ergebnisse der Prüfung abwarten.', 'Een journaliste vroeg of hij aftreden uitsluit. Hij zei alleen dat hij de uitkomsten van het onderzoek zal afwachten.'],
        ['Anna', 'Das klingt nicht gut für ihn.', 'Dat klinkt niet goed voor hem.'],
        ['Jörg', 'Einem Bericht zufolge gibt es E-Mails, die das Gegenteil beweisen. Angeblich schon vom März.', 'Volgens een bericht zijn er e-mails die het tegendeel bewijzen. Naar het heet al van maart.'],
        ['Anna', 'Und die Kanzlerin?', 'En de kanselier?'],
        ['Jörg', 'Ihr Sprecher bat, man möge die Prüfung abwarten. Sie habe volles Vertrauen. Du weißt, was das in Berlin heißt.', 'Haar woordvoerder verzocht de uitkomst van het onderzoek af te wachten. Ze heeft naar zijn zeggen het volste vertrouwen. Je weet wat dat in Berlijn betekent.'],
        ['Anna', 'Dass er nächste Woche weg ist?', 'Dat hij volgende week weg is?']
      ],
      q: [
        { t: 'mc', q: 'Was sagte der Minister über die Verträge?', o: ['Er habe nichts davon gewusst', 'Er habe sie selbst unterschrieben', 'Sie seien schon beendet'] },
        { t: 'mc', q: 'Was gibt es einem Bericht zufolge?', o: ['E-Mails, die das Gegenteil beweisen', 'Einen neuen Minister', 'Eine Umfrage'] },
        { t: 'mc', q: 'Was bat der Sprecher der Kanzlerin?', o: ['Man möge die Prüfung abwarten', 'Man solle sofort wählen', 'Man möge den Minister entlassen'] }
      ]
    },
    culture: { t: 'Zestien landen, twee stemmen, één Kanzler', html: `<p>🏛️ Duitsland is een <b>Bundesrepublik</b> van <b>16 Bundesländer</b>, elk met een eigen regering, parlement en minister-president. Onderwijs, politie en cultuur zijn zaak van de deelstaten; daarom verschillen schoolvakanties en eindexamens per <i>Land</i>. Via de <b>Bundesrat</b> beslissen de deelstaten mee over landelijke wetten.</p>
<p>Bij de verkiezingen voor de <b>Bundestag</b> heeft elke kiezer <b>twee stemmen</b>: de <i>Erststimme</i> voor een kandidaat uit het eigen district, de <i>Zweitstimme</i> voor een partij. Die tweede bepaalt de zetelverdeling. Een partij moet <b>vijf procent</b> halen; die drempel moet versnippering zoals in de Weimarrepubliek voorkomen.</p>
<p>De <b>Bundeskanzler</b> wordt door de Bondsdag gekozen en kan alleen worden afgezet als er tegelijk een opvolger wordt gekozen: het <i>konstruktives Misstrauensvotum</i>. De <b>Bundespräsident</b> is staatshoofd met vooral een ceremoniële rol.</p>` },
    ex: [
      { t: 'cloze', s: 'Er sagte, er ___ nichts gewusst.', a: ['habe'], o: ['habe', 'hatte', 'hat'], nl: 'Hij zei dat hij niets had geweten.', x: 'Uitzondering t.o.v. het Nederlands: de tijd schuift niet op na sagte. Reden: de Konjunktiv markeert de weergave al.', tag: 'de-konj1-zeit' },
      { t: 'cloze', s: 'Sie erklärte, sie ___ nicht dabei gewesen.', a: ['sei'], o: ['sei', 'habe', 'war'], nl: 'Ze verklaarde dat ze er niet bij was geweest.', tag: 'de-konj1-zeit' },
      { t: 'cloze', s: 'Er kündigte an, er ___ zurücktreten.', a: ['werde'], o: ['werde', 'wird', 'würde'], nl: 'Hij kondigde aan dat hij zal aftreden.', tag: 'de-konj1-zeit' },
      { t: 'cloze', s: 'Sie fragte, ___ er einen Rücktritt ausschließe.', a: ['ob'], o: ['ob', 'dass', 'wenn'], nl: 'Ze vroeg of hij aftreden uitsluit.', tag: 'de-konj1-zeit' },
      { t: 'cloze', s: 'Er bat, man ___ ihn entschuldigen. (beleefd verzoek)', a: ['möge'], o: ['möge', 'solle', 'müsse'], nl: 'Hij verzocht hem te verontschuldigen.', tag: 'de-konj1-zeit' },
      { t: 'cloze', s: 'Der Vertrag sei bereits geprüft ___.', a: ['worden'], o: ['worden', 'geworden', 'werden'], nl: 'Het contract is volgens hem al gecontroleerd.', tag: 'de-konj1-zeit' },
      { t: 'cloze', s: 'Einem Bericht ___ plant die Koalition neue Steuern.', a: ['zufolge'], o: ['zufolge', 'laut', 'nach'], nl: 'Volgens een bericht plant de coalitie nieuwe belastingen.', x: 'zufolge staat achter het naamwoord (met derde naamval); laut staat ervoor.', tag: 'de-distanz' },
      { t: 'mc', q: 'Welke zin is stilistisch juist?', o: ['Laut Polizei gab es keine Verletzten.', 'Laut Polizei habe es keine Verletzten gegeben.', 'Laut Polizei gäbe es keine Verletzten.'], x: 'Uitzondering: na laut/zufolge staat de gewone Indikativ. Reden: de bron is al genoemd, een Konjunktiv zou dubbelop zijn.', tag: 'de-distanz' },
      { t: 'mc', q: 'Welk woord gebruikt een krant voor iemand die nog niet veroordeeld is?', o: ['der mutmaßliche Täter', 'der sogenannte Täter', 'der angebliche Täter'], tag: 'de-distanz' },
      { t: 'mc', q: 'Wat is «der Bundesrat»?', o: ['de kamer van de deelstaten', 'de bondskanselier', 'de gemeenteraad'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ze zei dat ze er niets van had geweten. (krantenstijl)', a: ['Sie sagte, sie habe nichts davon gewusst.', 'Sie sagte, sie habe davon nichts gewusst.'], tag: 'de-konj1-zeit' },
      { t: 'tr', nl: 'volgens een peiling', a: ['laut einer Umfrage', 'einer Umfrage zufolge', 'nach einer Umfrage'], tag: 'de-distanz' },
      { t: 'tr', nl: 'De minister is afgetreden.', a: ['Der Minister ist zurückgetreten.', 'Die Ministerin ist zurückgetreten.'], tag: 'de-vok' },
      { t: 'order', s: 'Die Journalistin wollte wissen, ob er einen Rücktritt ausschließe.', nl: 'De journaliste wilde weten of hij aftreden uitsluit.', tag: 'de-konj1-zeit' },
      { t: 'match', p: [['die Wahl', 'de verkiezing'], ['zurücktreten', 'aftreden'], ['einräumen', 'toegeven'], ['ankündigen', 'aankondigen'], ['das Bundesland', 'de deelstaat']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Minister weist Vorwürfe zurück', type: 'Krantenbericht',
      p: [
        ['Verkehrsminister Holger Brandt hat am Mittwoch alle Vorwürfe im Zusammenhang mit den Beraterverträgen seines Hauses zurückgewiesen. Er habe von den Aufträgen an die Firma seines Schwagers nichts gewusst, sagte Brandt vor Journalisten in Berlin. Die Verträge seien ohne seine Beteiligung geschlossen worden.', 'Verkeersminister Holger Brandt heeft woensdag alle beschuldigingen in verband met de adviescontracten van zijn ministerie van de hand gewezen. Hij heeft van de opdrachten aan het bedrijf van zijn zwager niets geweten, zei Brandt tegenover journalisten in Berlijn. De contracten zijn volgens hem zonder zijn betrokkenheid gesloten.'],
        ['Auf die Frage, ob er einen Rücktritt ausschließe, antwortete der Minister ausweichend. Er werde das Ergebnis der internen Prüfung abwarten. Zugleich räumte er ein, dass Fehler gemacht worden seien. Wer dafür verantwortlich sei, lasse sich noch nicht sagen.', 'Op de vraag of hij aftreden uitsluit, antwoordde de minister ontwijkend. Hij zal de uitkomst van het interne onderzoek afwachten. Tegelijk gaf hij toe dat er fouten zijn gemaakt. Wie daarvoor verantwoordelijk is, valt volgens hem nog niet te zeggen.'],
        ['Einem Bericht des «Spiegel» zufolge liegen dem Ausschuss jedoch E-Mails vor, in denen Brandt bereits im März über die Verträge informiert wurde. Die Opposition forderte, der Minister möge sein Amt bis zur Klärung ruhen lassen. Laut einer Umfrage sprechen sich 58 Prozent der Befragten für einen Rücktritt aus.', 'Volgens een bericht van «Der Spiegel» beschikt de commissie echter over e-mails waarin Brandt al in maart over de contracten werd geïnformeerd. De oppositie eiste dat de minister zijn ambt tot de opheldering laat rusten. Volgens een peiling spreekt 58 procent van de ondervraagden zich uit voor aftreden.']
      ],
      gl: [['der Beratervertrag', 'het adviescontract'], ['der Schwager', 'de zwager'], ['die Beteiligung', 'de betrokkenheid'], ['ausweichend', 'ontwijkend'], ['das Amt ruhen lassen', 'het ambt laten rusten'], ['sich aussprechen für', 'zich uitspreken voor']],
      q: [
        { t: 'mc', q: 'Was behauptet der Minister?', o: ['Er habe von den Aufträgen nichts gewusst', 'Er habe die Verträge selbst geschlossen', 'Es habe keine Verträge gegeben'] },
        { t: 'mc', q: 'Welcher Satz ist keine indirekte Rede, sondern eine Aussage der Zeitung?', o: ['Laut einer Umfrage sprechen sich 58 Prozent für einen Rücktritt aus.', 'Die Verträge seien ohne seine Beteiligung geschlossen worden.', 'Er werde das Ergebnis der Prüfung abwarten.'] },
        { t: 'mc', q: 'Was fordert die Opposition?', o: ['Der Minister möge sein Amt ruhen lassen', 'Die Kanzlerin solle zurücktreten', 'Der Ausschuss solle aufgelöst werden'] }
      ]
    },
    say: [['Er sagte, er habe nichts davon gewusst.', 'Hij zei dat hij er niets van had geweten.'], ['Einem Bericht zufolge plant die Koalition neue Steuern.', 'Volgens een bericht plant de coalitie nieuwe belastingen.'], ['Sie fragte, ob er zurücktreten werde.', 'Ze vroeg of hij zal aftreden.']],
    task: { nl: 'Geef in 5 zinnen een (echt of verzonnen) interview met een politicus weer in krantenstijl. Gebruik de indirecte rede voor nu, eerder en later, één indirecte vraag en één bron met laut of zufolge.', model: 'Die Bürgermeisterin erklärte, die Stadt habe genug Geld für neue Schulen. Im letzten Jahr sei bereits viel gebaut worden. Sie kündigte an, man werde bis 2030 zehn weitere Schulen eröffnen. Auf die Frage, ob dafür die Steuern steigen müssten, antwortete sie nicht. Laut Opposition fehlen dafür 40 Millionen Euro.' },
    scenario: { nl: 'Een Duitse vriend heeft een persconferentie gezien die jij gemist hebt. Jullie bespreken wat er gezegd is.', role: 'Jörg, een politiek geïnteresseerde Berlijner met een droog gevoel voor humor', goal: 'Vraag wat de minister zei, geef zelf door wat jij in de krant las (Einem Bericht zufolge …) en zeg wat je ervan gelooft.' }
  });

  /* ───────────────────────── C1 · 4 ───────────────────────── */
  U({
    id: 'de-c1-04', level: 'C1', icon: '📑', title: 'Ämter und Verträge', nl: 'Instanties en contracten: is geopend, wordt geopend, krijgt toegestuurd',
    goals: ['Brieven van instanties en contracten begrijpen', 'Toestand en handeling uit elkaar houden (ist geöffnet / wird geöffnet)', 'Het bekommen-passief gebruiken', 'Een formeel bezwaar of verzoek schrijven'],
    vocab: [
      ['das Amt', 'het (overheids)kantoor'], ['der Antrag', 'de aanvraag'], ['beantragen', 'aanvragen'], ['das Formular', 'het formulier'], ['die Bescheinigung', 'de verklaring, het bewijs'],
      ['der Bescheid', 'de beschikking, het besluit'], ['der Widerspruch', 'het bezwaar'], ['Widerspruch einlegen', 'bezwaar maken'], ['die Frist', 'de termijn'], ['fristgerecht', 'binnen de termijn'],
      ['die Unterlagen', 'de stukken, de papieren'], ['einreichen', 'indienen'], ['genehmigen', 'goedkeuren'], ['bewilligen', 'toekennen'], ['die Gebühr', 'de leges, het tarief'],
      ['der Vertrag', 'het contract'], ['die Kündigungsfrist', 'de opzegtermijn'], ['gültig', 'geldig'], ['ablaufen', 'verlopen'], ['verlängern', 'verlengen'],
      ['die Vollmacht', 'de volmacht'], ['beglaubigen', 'legaliseren, waarmerken'], ['zustellen', 'bezorgen (officieel)'], ['erstatten', 'vergoeden, terugbetalen'], ['verpflichtet', 'verplicht'], ['die Anmeldung', 'de inschrijving, de aanmelding']
    ],
    grammar: [
      { t: 'Ist geöffnet of wird geöffnet?', es: 'Zustandspassiv und Vorgangspassiv',
        html: `<p>Het Duits heeft twee lijdende vormen en houdt ze strikt uit elkaar:</p>
<p><b>werden + deelwoord</b> = de <b>handeling</b>, er gebeurt iets: <i>Der Antrag <b>wird geprüft</b></i> (wordt nu behandeld).<br><b>sein + deelwoord</b> = de <b>toestand</b>, het resultaat: <i>Der Antrag <b>ist genehmigt</b></i> (is goedgekeurd, klaar).</p>
<p>Het Nederlandse <i>is geopend</i> is dubbelzinnig. Vraag jezelf af: <b>gebeurde het</b> (dan <i>wurde geöffnet</i> of <i>ist geöffnet <b>worden</b></i>) of <b>is het zo</b> (dan <i>ist geöffnet</i>)?</p>
<p><i>Das Amt <b>ist</b> von 8 bis 12 <b>geöffnet</b>.</i> (toestand) · <i>Das Amt <b>wurde</b> 1950 <b>eröffnet</b>.</i> (gebeurtenis)</p>
<p>Bij de toestand noem je normaal <b>geen dader</b> met <i>von</i>: niet <s>Die Tür ist vom Hausmeister geschlossen</s>.</p>
<p><b>Uitzondering:</b> het Nederlandse <i>Het huis <b>is</b> in 1900 gebouwd</i> is in het Duits <b>nooit</b> <i>ist gebaut</i>, maar <i><b>wurde</b> gebaut</i> of <i>ist gebaut <b>worden</b></i>. <b>Waarom?</b> Een jaartal wijst op de gebeurtenis, niet op de toestand; het Nederlands laat <i>geworden</i> weg in de voltooide tijd, het Duits moet <i>worden</i> zeggen.</p>`,
        table: [['', 'handeling (werden)', 'toestand (sein)'], ['nu', 'Der Vertrag wird unterschrieben.', 'Der Vertrag ist unterschrieben.'], ['verleden', 'Der Vertrag wurde unterschrieben.', 'Der Vertrag war unterschrieben.'], ['voltooid', 'Der Vertrag ist unterschrieben worden.', '(Der Vertrag ist unterschrieben gewesen.)'], ['Nederlands', 'wordt / werd / is getekend', 'is / was getekend (ligt klaar)']],
        sum: 'Der Antrag wird geprüft. Der Antrag ist genehmigt. Das Haus wurde 1900 gebaut.',
        ex: [['Ihr Antrag ist bei uns eingegangen und wird derzeit bearbeitet.', 'Uw aanvraag is bij ons binnengekomen en wordt momenteel behandeld.'], ['Der Pass ist seit März abgelaufen.', 'Het paspoort is sinds maart verlopen.'], ['Die Gebühr ist bereits bezahlt.', 'De leges zijn al betaald.']] },
      { t: 'Er bekommt es zugeschickt: het bekommen-passief', es: 'bekommen-Passiv (Rezipientenpassiv)',
        html: `<p>In een gewoon passief wordt het <b>lijdend voorwerp</b> onderwerp. Wil je de <b>ontvanger</b> (de derde naamval) tot onderwerp maken, dan gebruik je <b>bekommen</b> (of <i>kriegen</i> in spreektaal, <i>erhalten</i> formeel) + deelwoord:</p>
<p><i>Man schickt <b>mir</b> den Bescheid zu.</i><br>→ gewoon passief: <i>Der Bescheid <b>wird</b> mir <b>zugeschickt</b>.</i><br>→ bekommen-passief: <i><b>Ich bekomme</b> den Bescheid <b>zugeschickt</b>.</i></p>
<p>Het Nederlands heeft precies dezelfde constructie met <i>krijgen</i>: <i>Ik <b>krijg</b> het besluit <b>toegestuurd</b>.</i> Dat helpt.</p>
<p>Het kan alleen bij werkwoorden met een ontvanger in de derde naamval: <i>schenken, schicken, erklären, erstatten, bezahlen, sagen, mitteilen</i>.</p>
<p><b>Uitzondering:</b> het Duits kan de derde naamval <b>niet</b> direct onderwerp van een <i>werden</i>-passief maken zoals het Engels (<i>I was given a book</i>): niet <s>Ich wurde ein Buch geschenkt</s>, maar <i><b>Mir</b> wurde ein Buch geschenkt</i> of <i>Ich <b>bekam</b> ein Buch geschenkt</i>. <b>Waarom?</b> In het Duits blijft een derde naamval altijd een derde naamval; alleen een vierde naamval kan onderwerp worden. <i>Bekommen</i> is de omweg.</p>`,
        table: [['actief', 'bekommen-passief'], ['Man erstattet mir die Kosten.', 'Ich bekomme die Kosten erstattet.'], ['Man hat ihr gekündigt.', 'Sie hat gekündigt bekommen.'], ['Man erklärt uns das Formular.', 'Wir bekommen das Formular erklärt.'], ['Jemand hat ihm das Auto repariert.', 'Er hat das Auto repariert bekommen.']],
        ex: [['Sie bekommen die Unterlagen per Post zugestellt.', 'U krijgt de stukken per post bezorgd.'], ['Ich habe die Gebühr erstattet bekommen.', 'Ik heb de leges terugbetaald gekregen.'], ['Mir wurde mitgeteilt, dass die Frist abgelaufen ist.', 'Mij werd meegedeeld dat de termijn verlopen is.']] }
    ],
    dialogue: {
      t: 'Im Bürgeramt', place: 'München 🇩🇪',
      lines: [
        ['Frau Kraus', 'Der Nächste, bitte. Was kann ich für Sie tun?', 'De volgende, alstublieft. Wat kan ik voor u doen?'],
        ['Herr de Boer', 'Guten Tag. Ich habe einen Bescheid zugeschickt bekommen, dass mein Antrag abgelehnt ist. Ich verstehe nicht, warum.', 'Goedendag. Ik heb een beschikking toegestuurd gekregen dat mijn aanvraag is afgewezen. Ik begrijp niet waarom.'],
        ['Frau Kraus', 'Zeigen Sie mal. Hier steht: Die Unterlagen wurden nicht fristgerecht eingereicht.', 'Laat u eens zien. Hier staat: de stukken zijn niet binnen de termijn ingediend.'],
        ['Herr de Boer', 'Aber ich habe sie am zwölften abgeschickt, und die Frist war der fünfzehnte!', 'Maar ik heb ze op de twaalfde verstuurd, en de termijn was de vijftiende!'],
        ['Frau Kraus', 'Bei uns sind sie erst am achtzehnten eingegangen. Es zählt der Tag, an dem die Unterlagen hier sind.', 'Bij ons zijn ze pas op de achttiende binnengekomen. De dag waarop de stukken hier zijn, telt.'],
        ['Herr de Boer', 'Und jetzt? Ist die Sache damit erledigt?', 'En nu? Is de zaak daarmee afgedaan?'],
        ['Frau Kraus', 'Nein. Sie können innerhalb eines Monats Widerspruch einlegen. Dann wird der Fall noch einmal geprüft.', 'Nee. U kunt binnen een maand bezwaar maken. Dan wordt het geval opnieuw bekeken.'],
        ['Herr de Boer', 'Bekomme ich dafür ein Formular?', 'Krijg ik daar een formulier voor?'],
        ['Frau Kraus', 'Das geht formlos. Aber schriftlich, bitte, und mit Unterschrift. Und diesmal am besten persönlich abgeben.', 'Dat kan vormvrij. Maar schriftelijk, alstublieft, en met handtekening. En deze keer het liefst persoonlijk afgeven.']
      ],
      q: [
        { t: 'mc', q: 'Warum wurde der Antrag abgelehnt?', o: ['Die Unterlagen wurden nicht fristgerecht eingereicht', 'Die Gebühr war nicht bezahlt', 'Der Pass war abgelaufen'] },
        { t: 'mc', q: 'Welcher Tag zählt für die Frist?', o: ['Der Tag, an dem die Unterlagen beim Amt sind', 'Der Tag, an dem man sie abschickt', 'Der Tag der Unterschrift'] },
        { t: 'mc', q: 'Was kann Herr de Boer tun?', o: ['Innerhalb eines Monats Widerspruch einlegen', 'Nichts mehr', 'Einen neuen Pass beantragen'] }
      ]
    },
    culture: { t: 'Amtsdeutsch, de Anmeldung en het stempel', html: `<p>📋 Wie in Duitsland gaat wonen, moet zich binnen <b>twee weken</b> inschrijven bij het <i>Einwohnermeldeamt</i> of <i>Bürgeramt</i>: de <b>Anmeldung</b>. Zonder die <i>Meldebescheinigung</i> krijg je geen bankrekening, geen internet en geen bibliotheekpas. De verhuurder moet er een aparte verklaring voor tekenen, de <i>Wohnungsgeberbestätigung</i>.</p>
<p>De taal van instanties heet <b>Amtsdeutsch</b> of <b>Beamtendeutsch</b>, en ook Duitsers begrijpen het vaak niet. Klassiekers: <i>Lichtzeichenanlage</i> (verkeerslicht), <i>Personenvereinzelungsanlage</i> (draaihek) en <i>raumübergreifendes Großgrün</i> (boom).</p>
<p>Belangrijk: veel gebeurt nog <b>op papier</b>, met handtekening, stempel en per post. Bewaar alles, noteer elk <i>Aktenzeichen</i> (dossiernummer) en let op de <b>Frist</b>. Een bezwaar heet <i>Widerspruch</i> en moet meestal binnen een maand binnen zijn.</p>` },
    ex: [
      { t: 'cloze', s: 'Das Amt ___ von 8 bis 12 Uhr geöffnet.', a: ['ist'], o: ['ist', 'wird', 'hat'], nl: 'Het kantoor is van 8 tot 12 uur geopend.', tag: 'de-zustand' },
      { t: 'cloze', s: 'Ihr Antrag ___ derzeit bearbeitet. (men is ermee bezig)', a: ['wird'], o: ['wird', 'ist', 'hat'], nl: 'Uw aanvraag wordt momenteel behandeld.', tag: 'de-zustand' },
      { t: 'cloze', s: 'Das Rathaus ___ 1900 gebaut.', a: ['wurde'], o: ['wurde', 'ist', 'war'], nl: 'Het stadhuis is in 1900 gebouwd.', x: 'Uitzondering t.o.v. het Nederlands: bij een jaartal is het een gebeurtenis, dus wurde (of ist … worden), nooit alleen ist gebaut.', tag: 'de-zustand' },
      { t: 'cloze', s: 'Der Vertrag ist gestern unterschrieben ___.', a: ['worden'], o: ['worden', 'geworden', 'gewesen'], nl: 'Het contract is gisteren getekend.', tag: 'de-zustand' },
      { t: 'cloze', s: 'Ich ___ den Bescheid per Post zugeschickt.', a: ['bekomme'], o: ['bekomme', 'werde', 'bin'], nl: 'Ik krijg de beschikking per post toegestuurd.', tag: 'de-bekommen' },
      { t: 'cloze', s: '___ wurde mitgeteilt, dass die Frist abgelaufen ist.', a: ['Mir'], o: ['Mir', 'Ich', 'Mich'], nl: 'Mij werd meegedeeld dat de termijn verlopen is.', x: 'Uitzondering t.o.v. het Engels: een derde naamval kan geen onderwerp van werden worden. Reden: alleen een vierde naamval wordt onderwerp; de ontvanger blijft mir.', tag: 'de-bekommen' },
      { t: 'cloze', s: 'Sie hat die Kosten erstattet ___.', a: ['bekommen'], o: ['bekommen', 'worden', 'geworden'], nl: 'Ze heeft de kosten vergoed gekregen.', tag: 'de-bekommen' },
      { t: 'mc', q: 'Welke zin beschrijft een toestand?', o: ['Die Gebühr ist bezahlt.', 'Die Gebühr wird bezahlt.', 'Die Gebühr ist bezahlt worden.'], tag: 'de-zustand' },
      { t: 'mc', q: 'Hoe zeg je «Ik kreeg een boek cadeau»?', o: ['Ich bekam ein Buch geschenkt.', 'Ich wurde ein Buch geschenkt.', 'Ich war ein Buch geschenkt.'], tag: 'de-bekommen' },
      { t: 'mc', q: 'Wat betekent «Widerspruch einlegen»?', o: ['bezwaar maken', 'een aanvraag indienen', 'tegenspreken in een gesprek'], tag: 'de-vok' },
      { t: 'tr', nl: 'Het paspoort is verlopen.', a: ['Der Pass ist abgelaufen.', 'Der Reisepass ist abgelaufen.'], tag: 'de-zustand' },
      { t: 'tr', nl: 'De aanvraag wordt behandeld.', a: ['Der Antrag wird bearbeitet.', 'Der Antrag wird geprüft.'], tag: 'de-zustand' },
      { t: 'tr', nl: 'U krijgt de stukken toegestuurd.', a: ['Sie bekommen die Unterlagen zugeschickt.', 'Sie bekommen die Unterlagen zugesandt.', 'Sie erhalten die Unterlagen zugeschickt.'], tag: 'de-bekommen' },
      { t: 'order', s: 'Ihr Antrag ist eingegangen und wird derzeit bearbeitet.', nl: 'Uw aanvraag is binnengekomen en wordt momenteel behandeld.', tag: 'de-zustand' },
      { t: 'match', p: [['der Antrag', 'de aanvraag'], ['die Frist', 'de termijn'], ['einreichen', 'indienen'], ['gültig', 'geldig'], ['die Vollmacht', 'de volmacht']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Bescheid über Ihren Antrag auf Wohngeld', type: 'Brief van een instantie',
      p: [
        ['Sehr geehrter Herr de Boer, Ihr Antrag auf Wohngeld vom 12. Mai ist am 18. Mai bei uns eingegangen. Nach Prüfung der Unterlagen müssen wir Ihnen mitteilen, dass der Antrag in der vorliegenden Form nicht bewilligt werden kann.', 'Geachte heer De Boer, uw aanvraag voor huurtoeslag van 12 mei is op 18 mei bij ons binnengekomen. Na controle van de stukken moeten wij u meedelen dat de aanvraag in de huidige vorm niet kan worden toegekend.'],
        ['Begründung: Die erforderliche Bescheinigung Ihres Arbeitgebers ist nicht beigefügt. Zudem ist der Mietvertrag nicht von beiden Parteien unterschrieben. Sie werden gebeten, die fehlenden Unterlagen bis zum 30. Juni nachzureichen. Andernfalls gilt der Antrag als zurückgenommen.', 'Motivering: de vereiste verklaring van uw werkgever is niet bijgevoegd. Bovendien is het huurcontract niet door beide partijen ondertekend. U wordt verzocht de ontbrekende stukken uiterlijk 30 juni na te sturen. Anders geldt de aanvraag als ingetrokken.'],
        ['Gegen diesen Bescheid kann innerhalb eines Monats nach Zustellung Widerspruch eingelegt werden. Der Widerspruch ist schriftlich bei der oben genannten Behörde einzureichen. Bereits gezahlte Gebühren bekommen Sie im Falle einer Ablehnung nicht erstattet. Mit freundlichen Grüßen, im Auftrag: Kraus', 'Tegen deze beschikking kan binnen een maand na bezorging bezwaar worden gemaakt. Het bezwaar moet schriftelijk bij de bovengenoemde instantie worden ingediend. Reeds betaalde leges krijgt u bij een afwijzing niet terugbetaald. Met vriendelijke groet, namens deze: Kraus']
      ],
      gl: [['das Wohngeld', 'de huurtoeslag'], ['die Begründung', 'de motivering'], ['beifügen', 'bijvoegen'], ['nachreichen', 'nasturen'], ['andernfalls', 'anders, zo niet'], ['im Auftrag (i. A.)', 'namens deze']],
      q: [
        { t: 'mc', q: 'Was fehlt bei dem Antrag?', o: ['Die Bescheinigung des Arbeitgebers', 'Der Pass', 'Die Gebühr'] },
        { t: 'mc', q: 'Was passiert, wenn die Unterlagen nicht bis zum 30. Juni da sind?', o: ['Der Antrag gilt als zurückgenommen', 'Der Antrag wird trotzdem bewilligt', 'Die Frist wird automatisch verlängert'] },
        { t: 'mc', q: '«Der Widerspruch ist schriftlich einzureichen.» Was bedeutet das?', o: ['Er muss schriftlich eingereicht werden', 'Er ist schon eingereicht', 'Er kann mündlich eingereicht werden'] }
      ]
    },
    say: [['Ihr Antrag wird derzeit bearbeitet.', 'Uw aanvraag wordt momenteel behandeld.'], ['Ich habe den Bescheid zugeschickt bekommen.', 'Ik heb de beschikking toegestuurd gekregen.'], ['Ich möchte Widerspruch einlegen.', 'Ik wil bezwaar maken.']],
    task: { nl: 'Schrijf een kort formeel bezwaar (5 zinnen) tegen een afwijzing. Gebruik één toestandspassief, één handelingspassief en één keer bekommen + deelwoord.', model: 'Sehr geehrte Damen und Herren, hiermit lege ich Widerspruch gegen Ihren Bescheid vom 2. Juni ein. Die Unterlagen wurden am 12. Mai abgeschickt und sind vollständig. Den Mietvertrag habe ich inzwischen von meinem Vermieter unterschrieben bekommen. Er ist diesem Schreiben beigefügt. Ich bitte Sie, den Antrag erneut zu prüfen. Mit freundlichen Grüßen' },
    scenario: { nl: 'Je aanvraag is afgewezen en je gaat naar het Bürgeramt om te vragen waarom.', role: 'Frau Kraus, een correcte ambtenaar die precies de regels volgt maar wel helpt', goal: 'Leg uit wat je toegestuurd hebt gekregen, vraag naar de reden en de termijn, en vraag hoe je bezwaar kunt maken.' }
  });

  /* ───────────────────────── C1 · 5 ───────────────────────── */
  U({
    id: 'de-c1-05', level: 'C1', icon: '🎭', title: 'Kunst, Bühne, Literatur', nl: 'Kunst en literatuur: alsof, bijna, te … om',
    goals: ['Over theater, boeken en kunst praten en oordelen', 'Vergelijkingen maken met als ob en als + werkwoord', 'Onwerkelijke gevolgen uitdrukken (zu … als dass)', 'Een recensie lezen en schrijven'],
    vocab: [
      ['die Aufführung', 'de voorstelling'], ['die Inszenierung', 'de enscenering, de regie'], ['die Bühne', 'het toneel'], ['das Stück', 'het (toneel)stuk'], ['der Regisseur / die Regisseurin', 'de regisseur'],
      ['die Hauptrolle', 'de hoofdrol'], ['der Schauspieler', 'de acteur'], ['die Uraufführung', 'de wereldpremière'], ['das Publikum', 'het publiek'], ['der Beifall', 'het applaus'],
      ['die Rezension', 'de recensie'], ['der Kritiker', 'de criticus'], ['loben', 'prijzen'], ['verreißen', 'afkraken'], ['der Roman', 'de roman'],
      ['die Erzählung', 'het verhaal, de novelle'], ['die Handlung', 'de plot, de handeling'], ['die Figur', 'het personage'], ['der Erzähler', 'de verteller'], ['das Werk', 'het werk'],
      ['die Ausstellung', 'de tentoonstelling'], ['das Gemälde', 'het schilderij'], ['beeindruckend', 'indrukwekkend'], ['langatmig', 'langdradig'], ['ergreifend', 'aangrijpend'], ['gelungen', 'geslaagd']
    ],
    grammar: [
      { t: 'Als ob: doen alsof', es: 'Irreale Vergleichssätze: als ob, als',
        html: `<p>Een vergelijking met iets wat <b>niet echt zo is</b>, maak je met <b>als ob</b> + Konjunktiv II, werkwoord achteraan:</p>
<p><i>Er tut so, <b>als ob</b> er alles <b>wüsste</b>.</i> (hij doet alsof hij alles weet)<br>Verleden: <i>Sie sah aus, <b>als ob</b> sie die ganze Nacht nicht <b>geschlafen hätte</b>.</i></p>
<p>In geschreven Duits laat men <i>ob</i> graag weg. Dan staat het <b>werkwoord direct na als</b>: <i>Er tut so, <b>als wüsste</b> er alles. Sie sah aus, <b>als hätte</b> sie nicht geschlafen.</i></p>
<p>Ook mogelijk: <b>als wenn</b> (spreektaal) en <b>wie wenn</b> (zuidelijk). In literaire teksten zie je de Konjunktiv I: <i>…, als <b>sei</b> nichts geschehen.</i></p>
<p><b>Uitzondering:</b> het Nederlands gebruikt na <i>alsof</i> de gewone tijd (<i>alsof hij alles <b>weet</b></i>), het Duits de <b>Konjunktiv II</b>. <b>Waarom?</b> De vergelijking is per definitie niet de werkelijkheid, en het Duits markeert alles wat niet echt is met de Konjunktiv. In spreektaal hoor je de Indikativ wel, in geschreven Duits geldt hij als fout.</p>`,
        table: [['', 'voorbeeld'], ['als ob + … werkwoord', 'Er tut, als ob er nichts gehört hätte.'], ['als + werkwoord', 'Er tut, als hätte er nichts gehört.'], ['nu', 'Du redest, als wärst du der Regisseur.'], ['literair (Konj. I)', 'Sie lächelte, als sei nichts geschehen.']],
        sum: 'Er tut so, als ob er alles wüsste. Sie sah aus, als hätte sie nicht geschlafen.',
        ex: [['Der Schauspieler spielte, als ginge es um sein Leben.', 'De acteur speelde alsof het om zijn leven ging.'], ['Es kommt mir vor, als ob ich das Stück schon einmal gesehen hätte.', 'Het komt me voor alsof ik het stuk al eens gezien heb.'], ['Tu nicht so, als wäre das nichts Besonderes.', 'Doe niet alsof dat niets bijzonders is.']] },
      { t: 'Te … om, tenzij, bijna', es: 'zu … als dass, es sei denn, beinahe',
        html: `<p>Drie constructies voor het gevorderde werk met de Konjunktiv II:</p>
<p><b>zu + bijv. nw. …, als dass</b> + Konjunktiv II = te … dan dat het zou kunnen: <i>Das Stück ist <b>zu</b> lang, <b>als dass</b> man es an einem Abend spielen <b>könnte</b>.</i> Bij hetzelfde onderwerp gewoon <b>um … zu</b>: <i>Ich bin zu müde, <b>um</b> ins Theater <b>zu gehen</b>.</i></p>
<p><b>es sei denn, (dass)</b> = tenzij; daarna een gewone hoofdzin in de Indikativ: <i>Ich komme mit, <b>es sei denn</b>, es gibt keine Karten mehr.</i></p>
<p><b>beinahe / fast</b> + Konjunktiv II verleden = bijna (maar niet): <i>Ich <b>wäre</b> beinahe <b>eingeschlafen</b>.</i></p>
<p><b>ohne dass / anstatt dass</b> + Konjunktiv II als iets niet gebeurde: <i>Er ging, <b>ohne dass</b> es jemand <b>bemerkt hätte</b>.</i></p>
<p><b>Uitzondering:</b> <i>es sei denn</i> bevat zelf een Konjunktiv I (<i>sei</i>), maar de zin erna staat in de <b>Indikativ</b>. <b>Waarom?</b> <i>Es sei denn</i> is een versteende formule («het zij dan dat»); de voorwaarde die volgt is reëel mogelijk en krijgt dus de gewone vorm.</p>`,
        table: [['constructie', 'betekenis', 'voorbeeld'], ['zu …, als dass', 'te … dan dat', 'zu teuer, als dass ich es kaufen könnte'], ['zu …, um zu', 'te … om te', 'zu müde, um auszugehen'], ['es sei denn', 'tenzij', '…, es sei denn, es regnet.'], ['beinahe + Konj. II', 'bijna (niet gebeurd)', 'Ich hätte beinahe geweint.'], ['ohne dass', 'zonder dat', 'ohne dass ich es gemerkt hätte']],
        ex: [['Der Roman ist zu komplex, als dass man ihn nacherzählen könnte.', 'De roman is te complex om hem na te kunnen vertellen.'], ['Wir gehen zur Premiere, es sei denn, sie ist ausverkauft.', 'We gaan naar de première, tenzij ze uitverkocht is.'], ['Das Publikum hätte den Regisseur beinahe ausgepfiffen.', 'Het publiek had de regisseur bijna uitgefloten.']] }
    ],
    dialogue: {
      t: 'In der Pause', place: 'Wien 🇦🇹',
      lines: [
        ['Anna', 'Na, wie gefällt dir die Inszenierung?', 'En, hoe bevalt de enscenering je?'],
        ['Clemens', 'Ehrlich? Der Regisseur tut so, als hätte er Goethe persönlich gekannt. Aber verstanden hat er ihn nicht.', 'Eerlijk? De regisseur doet alsof hij Goethe persoonlijk heeft gekend. Maar begrepen heeft hij hem niet.'],
        ['Anna', 'Ich fand den ersten Akt ergreifend. Die Hauptdarstellerin spielt, als ginge es um ihr Leben.', 'Ik vond het eerste bedrijf aangrijpend. De hoofdrolspeelster speelt alsof het om haar leven gaat.'],
        ['Clemens', 'Sie ist großartig, das gebe ich zu. Aber dieses Bühnenbild! Ich wäre beinahe eingeschlafen.', 'Ze is geweldig, dat geef ik toe. Maar dat decor! Ik was bijna in slaap gevallen.'],
        ['Anna', 'Du bist einfach zu streng, als dass dir irgendetwas gefallen könnte.', 'Jij bent gewoon te streng om ooit iets mooi te kunnen vinden.'],
        ['Clemens', 'Das stimmt nicht. Letztes Jahr im Burgtheater habe ich geweint.', 'Dat is niet waar. Vorig jaar in het Burgtheater heb ik gehuild.'],
        ['Anna', 'Bleibst du für den zweiten Teil?', 'Blijf je voor het tweede deel?'],
        ['Clemens', 'Natürlich. Es sei denn, es gibt am Buffet keinen Sekt mehr.', 'Natuurlijk. Tenzij er bij het buffet geen sekt meer is.']
      ],
      q: [
        { t: 'mc', q: 'Was sagt Clemens über den Regisseur?', o: ['Er tue so, als hätte er Goethe gekannt', 'Er sei der beste Regisseur Wiens', 'Er habe das Stück selbst geschrieben'] },
        { t: 'mc', q: 'Was wäre Clemens beinahe passiert?', o: ['Er wäre eingeschlafen', 'Er hätte geweint', 'Er wäre gegangen'] },
        { t: 'mc', q: 'Unter welcher Bedingung bleibt Clemens nicht?', o: ['Wenn es keinen Sekt mehr gibt', 'Wenn die Hauptdarstellerin geht', 'Wenn Anna geht'] }
      ]
    },
    culture: { t: 'Het land met de meeste theaters ter wereld', html: `<p>🎭 Duitsland telt ongeveer <b>140 door de overheid betaalde theaters</b>, meer dan welk land ook. Dat komt door de oude versnippering: elke vorst wilde zijn eigen <i>Hoftheater</i>, en die huizen bestaan nog als <b>Stadttheater</b> en <b>Staatstheater</b>, met een vast gezelschap en elke avond een ander stuk.</p>
<p>In Wenen is het <b>Burgtheater</b> («die Burg») een nationaal heiligdom; acteurs zijn er bekender dan voetballers. In de zomer trekken de <b>Salzburger Festspiele</b> en de Wagnerfestspiele in <b>Bayreuth</b> publiek uit de hele wereld. Voor Bayreuth wacht je soms jaren op een kaartje.</p>
<p>📚 Klassiekers die elke scholier leest: Goethes <i>Faust</i>, Schillers <i>Die Räuber</i>, Kafka’s <i>Die Verwandlung</i>. En elk najaar is de <b>Frankfurter Buchmesse</b> de grootste boekenbeurs ter wereld.</p>` },
    ex: [
      { t: 'cloze', s: 'Er tut so, als ob er alles ___.', a: ['wüsste'], o: ['wüsste', 'weiß', 'wissen'], nl: 'Hij doet alsof hij alles weet.', x: 'Uitzondering t.o.v. het Nederlands: na als ob staat de Konjunktiv II. Reden: de vergelijking is niet de werkelijkheid.', tag: 'de-alsob' },
      { t: 'cloze', s: 'Sie sah aus, als ___ sie nicht geschlafen.', a: ['hätte'], o: ['hätte', 'ob', 'hat'], nl: 'Ze zag eruit alsof ze niet geslapen had.', x: 'Zonder ob staat het werkwoord direct na als.', tag: 'de-alsob' },
      { t: 'cloze', s: 'Du redest, als ___ du der Regisseur.', a: ['wärst'], o: ['wärst', 'bist', 'seist'], nl: 'Je praat alsof je de regisseur bent.', tag: 'de-alsob' },
      { t: 'cloze', s: 'Es kommt mir vor, als ___ ich das schon gesehen hätte.', a: ['ob'], o: ['ob', 'dass', 'wie'], nl: 'Het komt me voor alsof ik dat al gezien heb.', tag: 'de-alsob' },
      { t: 'cloze', s: 'Das Stück ist zu lang, als ___ man es an einem Abend spielen könnte.', a: ['dass'], o: ['dass', 'ob', 'wenn'], nl: 'Het stuk is te lang om het op één avond te kunnen spelen.', tag: 'de-irreal-c1' },
      { t: 'cloze', s: 'Ich komme mit, es ___ denn, es gibt keine Karten mehr.', a: ['sei'], o: ['sei', 'ist', 'wäre'], nl: 'Ik ga mee, tenzij er geen kaartjes meer zijn.', tag: 'de-irreal-c1' },
      { t: 'cloze', s: 'Ich ___ beinahe eingeschlafen.', a: ['wäre'], o: ['wäre', 'war', 'hätte'], nl: 'Ik was bijna in slaap gevallen.', tag: 'de-irreal-c1' },
      { t: 'mc', q: 'Welke zin is goed geschreven Duits?', o: ['Wir gehen hin, es sei denn, es regnet.', 'Wir gehen hin, es sei denn, es regne.', 'Wir gehen hin, es sei denn, es regnen würde.'], x: 'Uitzondering: na es sei denn volgt de gewone Indikativ. Reden: es sei denn is een versteende formule; de voorwaarde zelf is reëel.', tag: 'de-irreal-c1' },
      { t: 'mc', q: 'Welke twee zinnen betekenen hetzelfde als «…, als ob er krank wäre»?', o: ['…, als wäre er krank', '…, als er krank wäre', '…, als ob wäre er krank'], tag: 'de-alsob' },
      { t: 'mc', q: 'Wat betekent «ein Stück verreißen»?', o: ['een stuk afkraken', 'een stuk verscheuren', 'een stuk prijzen'], tag: 'de-vok' },
      { t: 'tr', nl: 'Doe niet alsof je het niet weet.', a: ['Tu nicht so, als ob du es nicht wüsstest.', 'Tu nicht so, als wüsstest du es nicht.', 'Tu nicht so, als ob du das nicht wüsstest.'], tag: 'de-alsob' },
      { t: 'tr', nl: 'Ik had bijna gehuild.', a: ['Ich hätte beinahe geweint.', 'Ich hätte fast geweint.'], tag: 'de-irreal-c1' },
      { t: 'tr', nl: 'De voorstelling was indrukwekkend.', a: ['Die Aufführung war beeindruckend.', 'Die Vorstellung war beeindruckend.'], tag: 'de-vok' },
      { t: 'order', s: 'Der Schauspieler spielte, als ginge es um sein Leben.', nl: 'De acteur speelde alsof het om zijn leven ging.', tag: 'de-alsob' },
      { t: 'match', p: [['die Bühne', 'het toneel'], ['der Beifall', 'het applaus'], ['langatmig', 'langdradig'], ['das Gemälde', 'het schilderij'], ['gelungen', 'geslaagd']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Ein Faust für das 21. Jahrhundert?', type: 'Theaterrecensie',
      p: [
        ['Am Schauspielhaus hat Regisseurin Lena Hofer Goethes «Faust» auf die Bühne gebracht, und sie tut dabei so, als wäre das Stück gestern geschrieben worden. Faust ist bei ihr ein erschöpfter Wissenschaftler in einem Großraumbüro, Mephisto ein glatter Unternehmensberater.', 'In het Schauspielhaus heeft regisseur Lena Hofer Goethes «Faust» op de planken gebracht, en ze doet daarbij alsof het stuk gisteren geschreven is. Faust is bij haar een uitgeputte wetenschapper in een kantoortuin, Mephisto een gladde organisatieadviseur.'],
        ['Das funktioniert im ersten Teil erstaunlich gut. Jonas Brehm spielt den Faust, als hätte er seit Jahren nicht geschlafen, und Maria Kant ist eine Gretchen, die sich nichts gefallen lässt. Im zweiten Teil jedoch wird der Abend zu lang, als dass die Spannung halten könnte. Mancher Zuschauer wäre beinahe eingenickt.', 'Dat werkt in het eerste deel verbazend goed. Jonas Brehm speelt Faust alsof hij al jaren niet geslapen heeft, en Maria Kant is een Gretchen die niet over zich laat lopen. In het tweede deel wordt de avond echter te lang om de spanning vast te kunnen houden. Menig toeschouwer was bijna ingedommeld.'],
        ['Am Ende gab es dennoch langen Beifall, vor allem für die Schauspieler. Wer Goethe liebt, wie er im Buch steht, sollte zu Hause bleiben. Allen anderen sei dieser Abend empfohlen, es sei denn, sie haben am nächsten Morgen früh einen Termin: Die Aufführung dauert vier Stunden.', 'Aan het einde was er toch lang applaus, vooral voor de acteurs. Wie van Goethe houdt zoals hij in het boek staat, kan beter thuisblijven. Alle anderen zij deze avond aanbevolen, tenzij ze de volgende ochtend vroeg een afspraak hebben: de voorstelling duurt vier uur.']
      ],
      gl: [['das Großraumbüro', 'de kantoortuin'], ['glatt', 'glad'], ['sich nichts gefallen lassen', 'niet over zich laten lopen'], ['einnicken', 'indommelen'], ['empfehlen', 'aanbevelen']],
      q: [
        { t: 'mc', q: 'Wie zeigt die Regisseurin den Faust?', o: ['Als erschöpften Wissenschaftler im Großraumbüro', 'Als mittelalterlichen Gelehrten', 'Als Unternehmensberater'] },
        { t: 'mc', q: 'Was ist das Problem im zweiten Teil?', o: ['Der Abend wird zu lang', 'Die Schauspieler sind schlecht', 'Das Publikum pfeift'] },
        { t: 'mc', q: 'Wem wird der Abend nicht empfohlen?', o: ['Wer Goethe liebt, wie er im Buch steht', 'Wer moderne Inszenierungen mag', 'Wer gute Schauspieler sehen will'] }
      ]
    },
    say: [['Er tut so, als ob er alles wüsste.', 'Hij doet alsof hij alles weet.'], ['Ich wäre beinahe eingeschlafen.', 'Ik was bijna in slaap gevallen.'], ['Wir kommen, es sei denn, es gibt keine Karten mehr.', 'We komen, tenzij er geen kaartjes meer zijn.']],
    task: { nl: 'Schrijf een korte recensie (5 zinnen) van een film, boek of voorstelling. Gebruik één keer als ob of als + werkwoord, één keer zu … als dass of beinahe, en één keer es sei denn.', model: 'Der Film ist beeindruckend, aber langatmig. Die Hauptdarstellerin spielt, als wäre sie wirklich eine Königin. Die Handlung ist allerdings zu kompliziert, als dass man sie in zwei Sätzen erklären könnte. In der Mitte wäre ich beinahe eingeschlafen. Ich empfehle ihn trotzdem, es sei denn, man mag keine historischen Filme.' },
    scenario: { nl: 'Je staat in de pauze van een toneelvoorstelling in Wenen met een kritische Oostenrijkse vriend.', role: 'Clemens, een theaterliefhebber die niet snel tevreden is', goal: 'Vraag wat hij ervan vindt, spreek hem tegen, zeg hoe de acteurs spelen (als ob …) en spreek af of jullie blijven.' }
  });
})(window.SPT);
