/* Duits voor Nederlandstaligen — niveau C1, units 6–10 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-konn-c1': 'voegwoorden van de schrijftaal (indem, sofern, zumal, wohingegen)', 'de-dadurch': 'dadurch, dass / insofern, als / je nachdem', 'de-modalverg': 'vermoeden over het verleden (muss gewesen sein, kann nicht gesagt haben)',
    'de-scheinen': 'scheinen, drohen, pflegen + zu', 'de-varietaet': 'Duits in Oostenrijk en Zwitserland', 'de-wortbildung': 'woordvorming (voorvoegsels en -bar, -los, -haft)',
    'de-es': 'es als plaatshouder', 'de-mittelfeld': 'volgorde in het midden en na het werkwoord', 'de-idiom': 'uitdrukkingen en gezegden', 'de-genprep-c1': 'angesichts, anlässlich, hinsichtlich, zugunsten, ungeachtet'
  });

  /* ───────────────────────── C1 · 6 ───────────────────────── */
  U({
    id: 'de-c1-06', level: 'C1', icon: '🤖', title: 'Arbeit im Wandel', nl: 'Werk verandert: doordat, voor zover, temeer daar',
    goals: ['Over automatisering, thuiswerken en de arbeidsmarkt praten', 'Voegwoorden van de schrijftaal gebruiken (indem, sofern, zumal, wohingegen)', 'Oorzaak en voorwaarde nauwkeurig uitdrukken (dadurch, dass / je nachdem)', 'Een betoog opbouwen'],
    vocab: [
      ['die Digitalisierung', 'de digitalisering'], ['die Automatisierung', 'de automatisering'], ['der Arbeitsmarkt', 'de arbeidsmarkt'], ['die Fachkraft', 'de vakkracht'], ['die Qualifikation', 'de kwalificatie'],
      ['das Homeoffice', 'het thuiswerken'], ['die Gleitzeit', 'de flexibele werktijden'], ['die Teilzeit', 'het deeltijdwerk'], ['die Vereinbarkeit', 'de combineerbaarheid (werk en gezin)'], ['der Betriebsrat', 'de ondernemingsraad'],
      ['die Gewerkschaft', 'de vakbond'], ['der Tarifvertrag', 'de cao'], ['der Streik', 'de staking'], ['die Umschulung', 'de omscholing'], ['ersetzen', 'vervangen'],
      ['wegfallen', 'wegvallen'], ['entstehen', 'ontstaan'], ['bewältigen', 'aankunnen, het hoofd bieden'], ['die Anforderung', 'de eis'], ['sich anpassen an', 'zich aanpassen aan'],
      ['die Rente', 'het pensioen'], ['das Renteneintrittsalter', 'de pensioenleeftijd'], ['selbstständig', 'zelfstandig'], ['befristet', 'tijdelijk (contract)'], ['unbefristet', 'vast, voor onbepaalde tijd'], ['die Wertschätzung', 'de waardering']
    ],
    grammar: [
      { t: 'Indem, sofern, zumal, wohingegen', es: 'Konnektoren der Schriftsprache',
        html: `<p>Op C1-niveau heb je voegwoorden nodig die een verband <b>precies</b> benoemen. Ze leiden allemaal een bijzin in (werkwoord achteraan):</p>
<p><b>indem</b> = doordat, door te (het <b>middel</b>): <i>Man spart Zeit, <b>indem</b> man von zu Hause <b>arbeitet</b>.</i><br><b>sofern / soweit</b> = voor zover, mits: <i><b>Sofern</b> der Chef zustimmt, …</i><br><b>zumal</b> = temeer daar (extra reden): <i>Ich bleibe, <b>zumal</b> das Gehalt stimmt.</i><br><b>wohingegen / während</b> = terwijl daarentegen: <i>Er arbeitet Vollzeit, <b>wohingegen</b> sie Teilzeit arbeitet.</i><br><b>falls</b> = voor het geval dat · <b>solange</b> = zolang · <b>sobald</b> = zodra · <b>ehe</b> = voordat (deftig)</p>
<p><b>Uitzondering:</b> <i>indem</i> is geen <i>in dem</i>. <i>Indem</i> (één woord) is een voegwoord voor het middel; <i>in dem</i> (twee woorden) is voorzetsel + betrekkelijk voornaamwoord: <i>das Büro, <b>in dem</b> ich arbeite</i>. <b>Waarom?</b> Het voegwoord is uit de losse woorden ontstaan («in dat» iets gebeurt), maar heeft een eigen betekenis gekregen en wordt daarom aaneengeschreven. Voor het Nederlands <i>terwijl</i> gebruik je het nooit: dat is <i>während</i>.</p>`,
        table: [['voegwoord', 'verband', 'Nederlands'], ['indem', 'middel', 'doordat, door te'], ['sofern, soweit', 'beperkende voorwaarde', 'voor zover, mits'], ['zumal', 'extra reden', 'temeer daar'], ['wohingegen', 'tegenstelling', 'terwijl daarentegen'], ['falls', 'mogelijke voorwaarde', 'voor het geval dat'], ['ehe', 'tijd', 'voordat']],
        sum: 'Man lernt, indem man Fehler macht. Sofern nichts dazwischenkommt, bin ich dabei.',
        ex: [['Viele Firmen sparen Kosten, indem sie Büroflächen verkleinern.', 'Veel bedrijven besparen kosten door kantoorruimte te verkleinen.'], ['Sofern die Technik funktioniert, kann ich überall arbeiten.', 'Voor zover de techniek werkt, kan ik overal werken.'], ['In der Industrie fallen Stellen weg, wohingegen in der Pflege Tausende fehlen.', 'In de industrie vallen banen weg, terwijl er in de zorg duizenden ontbreken.']] },
      { t: 'Dadurch, dass / insofern, als / je nachdem', es: 'Korrelate: dadurch dass, insofern als, je nachdem',
        html: `<p>Sommige verbanden worden met een <b>tweedelige</b> constructie gemaakt: een aankondigend woord in de hoofdzin en een voegwoord in de bijzin.</p>
<p><b>dadurch, dass</b> = doordat (oorzaak, vaak iets wat je niet zelf doet): <i><b>Dadurch, dass</b> viele zu Hause arbeiten, stehen Büros leer.</i></p>
<p><b>insofern, als</b> = in zoverre dat: <i>Das ist <b>insofern</b> ein Problem, <b>als</b> niemand zuständig ist.</i></p>
<p><b>je nachdem, ob / wie / wer</b> = afhankelijk van of/hoe/wie: <i><b>Je nachdem, wie</b> man rechnet, sind es 10 oder 20 Prozent.</i></p>
<p><b>es sei denn</b> (tenzij) en <b>geschweige denn</b> (laat staan): <i>Ich habe keine Zeit zum Lesen, <b>geschweige denn</b> zum Schreiben.</i></p>
<p><b>Uitzondering:</b> het Nederlandse <i>doordat</i> is in het Duits <b>twee woorden met een komma ertussen</b>: <i>dadurch, dass</i>. Alleen als degene die handelt hetzelfde is als het onderwerp, kun je het korte <i>indem</i> nemen. <b>Waarom?</b> <i>Dadurch</i> hoort grammaticaal bij de hoofdzin (het is een bijwoord: «daardoor»), <i>dass</i> opent de bijzin; daarom staan ze aan weerszijden van de komma en kan <i>dadurch</i> ook verderop staan: <i>Das Problem entsteht <b>dadurch</b>, <b>dass</b> …</i></p>`,
        table: [['constructie', 'voorbeeld'], ['dadurch, dass', 'Dadurch, dass er pendelt, verliert er zwei Stunden.'], ['insofern, als', 'Das stimmt insofern, als die Zahlen steigen.'], ['je nachdem, ob', 'Je nachdem, ob es regnet, fahre ich Rad oder Bus.'], ['geschweige denn', 'Er kann kaum lesen, geschweige denn schreiben.']],
        ex: [['Dadurch, dass Roboter Routinearbeiten übernehmen, entstehen neue Berufe.', 'Doordat robots routinewerk overnemen, ontstaan er nieuwe beroepen.'], ['Je nachdem, in welcher Branche man arbeitet, sind die Folgen verschieden.', 'Afhankelijk van de branche waarin je werkt, zijn de gevolgen verschillend.'], ['Die Reform ist insofern gelungen, als mehr Frauen Vollzeit arbeiten.', 'De hervorming is in zoverre geslaagd dat meer vrouwen voltijds werken.']] }
    ],
    dialogue: {
      t: 'Betriebsversammlung', place: 'Wolfsburg 🇩🇪',
      lines: [
        ['Frau Yilmaz', 'Kolleginnen und Kollegen, die Geschäftsführung will bis 2030 dreißig Prozent der Montage automatisieren.', 'Collega’s, de directie wil uiterlijk in 2030 dertig procent van de montage automatiseren.'],
        ['Herr Kowalski', 'Und was heißt das für uns? Fallen Stellen weg?', 'En wat betekent dat voor ons? Vallen er banen weg?'],
        ['Frau Yilmaz', 'Je nachdem, wie schnell die Umschulung läuft. Sofern alle mitmachen, soll niemand entlassen werden.', 'Afhankelijk van hoe snel de omscholing loopt. Voor zover iedereen meedoet, wordt naar verluidt niemand ontslagen.'],
        ['Herr Kowalski', 'Das glaube ich erst, wenn es im Tarifvertrag steht. Zumal man uns das 2019 auch schon versprochen hat.', 'Dat geloof ik pas als het in de cao staat. Temeer daar men ons dat in 2019 ook al beloofd heeft.'],
        ['Frau Yilmaz', 'Verstehe ich. Der Betriebsrat hat deshalb durchgesetzt, dass die Zusage schriftlich kommt.', 'Dat begrijp ik. De ondernemingsraad heeft er daarom voor gezorgd dat de toezegging schriftelijk komt.'],
        ['Herr Kowalski', 'Und die Älteren? Ich bin 58. Ich lerne kein Programmieren mehr.', 'En de ouderen? Ik ben 58. Ik leer geen programmeren meer.'],
        ['Frau Yilmaz', 'Müssen Sie auch nicht. Die Jüngeren werden umgeschult, wohingegen die über 55 in der Qualitätskontrolle bleiben können.', 'Hoeft u ook niet. De jongeren worden omgeschoold, terwijl de 55-plussers in de kwaliteitscontrole kunnen blijven.'],
        ['Herr Kowalski', 'Gut. Dadurch, dass Sie das so klar sagen, bin ich schon etwas ruhiger.', 'Goed. Doordat u dat zo duidelijk zegt, ben ik al wat rustiger.']
      ],
      q: [
        { t: 'mc', q: 'Was will die Geschäftsführung?', o: ['Dreißig Prozent der Montage automatisieren', 'Das Werk schließen', 'Die Gehälter senken'] },
        { t: 'mc', q: 'Warum ist Herr Kowalski skeptisch?', o: ['Weil man das 2019 schon versprochen hat', 'Weil er nicht in der Gewerkschaft ist', 'Weil er kündigen will'] },
        { t: 'mc', q: 'Was passiert mit den über 55-Jährigen?', o: ['Sie können in der Qualitätskontrolle bleiben', 'Sie werden entlassen', 'Sie müssen programmieren lernen'] }
      ]
    },
    culture: { t: 'Mitbestimmung: werknemers aan de bestuurstafel', html: `<p>🤝 Uniek aan Duitsland is de <b>Mitbestimmung</b>. In elk bedrijf met vijf of meer werknemers mag een <b>Betriebsrat</b> worden gekozen, die meebeslist over werktijden, ontslagen en reorganisaties. In grote ondernemingen bestaat de <b>Aufsichtsrat</b> (raad van commissarissen) voor de helft uit vertegenwoordigers van de werknemers.</p>
<p>Lonen worden per sector onderhandeld tussen <b>Gewerkschaften</b> (zoals IG Metall en ver.di) en werkgevers; het resultaat is de <b>Tarifvertrag</b>. Stakingen zijn zeldzamer dan in Frankrijk, maar als de <i>Lokführer</i> staken, staat het hele land stil.</p>
<p>Typisch ook: de <b>Kurzarbeit</b>. In een crisis werken mensen minder uren en vult de staat een deel van het loon aan, zodat niemand ontslagen hoeft te worden. Het woord is zelfs door het Engels overgenomen.</p>` },
    ex: [
      { t: 'cloze', s: 'Man spart Zeit, ___ man von zu Hause arbeitet.', a: ['indem'], o: ['indem', 'in dem', 'während'], nl: 'Je bespaart tijd door vanuit huis te werken.', x: 'Uitzondering: indem (één woord) is een voegwoord voor het middel; in dem (twee woorden) is voorzetsel + betrekkelijk voornaamwoord.', tag: 'de-konn-c1' },
      { t: 'cloze', s: '___ der Chef zustimmt, arbeite ich freitags zu Hause.', a: ['Sofern'], o: ['Sofern', 'Zumal', 'Wohingegen'], nl: 'Mits de baas instemt, werk ik op vrijdag thuis.', tag: 'de-konn-c1' },
      { t: 'cloze', s: 'Ich bleibe bei der Firma, ___ das Gehalt stimmt.', a: ['zumal'], o: ['zumal', 'indem', 'ehe'], nl: 'Ik blijf bij het bedrijf, temeer daar het salaris klopt.', tag: 'de-konn-c1' },
      { t: 'cloze', s: 'Er arbeitet Vollzeit, ___ sie Teilzeit arbeitet.', a: ['wohingegen'], o: ['wohingegen', 'sofern', 'indem'], nl: 'Hij werkt voltijds, terwijl zij in deeltijd werkt.', tag: 'de-konn-c1' },
      { t: 'cloze', s: 'Dadurch, ___ viele zu Hause arbeiten, stehen Büros leer.', a: ['dass'], o: ['dass', 'weil', 'als'], nl: 'Doordat velen thuis werken, staan kantoren leeg.', x: 'Uitzondering t.o.v. het Nederlands: «doordat» is twee woorden met een komma. Reden: dadurch hoort bij de hoofdzin, dass opent de bijzin.', tag: 'de-dadurch' },
      { t: 'cloze', s: 'Je ___, wie man rechnet, sind es zehn oder zwanzig Prozent.', a: ['nachdem'], o: ['nachdem', 'desto', 'mehr'], nl: 'Afhankelijk van hoe je rekent, is het tien of twintig procent.', tag: 'de-dadurch' },
      { t: 'cloze', s: 'Das ist insofern ein Problem, ___ niemand zuständig ist.', a: ['als'], o: ['als', 'dass', 'wie'], nl: 'Dat is in zoverre een probleem dat niemand verantwoordelijk is.', tag: 'de-dadurch' },
      { t: 'mc', q: 'Wat betekent «geschweige denn»?', o: ['laat staan', 'tenzij', 'zwijg dan'], tag: 'de-dadurch' },
      { t: 'mc', q: 'Welk voegwoord geeft een extra reden?', o: ['zumal', 'sofern', 'wohingegen'], tag: 'de-konn-c1' },
      { t: 'mc', q: 'Wat is «der Betriebsrat»?', o: ['de ondernemingsraad', 'de bedrijfsleider', 'het bedrijfsadvies'], tag: 'de-vok' },
      { t: 'tr', nl: 'Je leert door fouten te maken.', a: ['Man lernt, indem man Fehler macht.', 'Du lernst, indem du Fehler machst.'], tag: 'de-konn-c1' },
      { t: 'tr', nl: 'Ik heb een vast contract.', a: ['Ich habe einen unbefristeten Vertrag.', 'Ich habe einen unbefristeten Arbeitsvertrag.'], tag: 'de-vok' },
      { t: 'tr', nl: 'Afhankelijk van of het regent', a: ['Je nachdem, ob es regnet'], tag: 'de-dadurch' },
      { t: 'order', s: 'Sofern die Technik funktioniert, kann ich überall arbeiten.', nl: 'Voor zover de techniek werkt, kan ik overal werken.', tag: 'de-konn-c1' },
      { t: 'match', p: [['die Gewerkschaft', 'de vakbond'], ['der Streik', 'de staking'], ['ersetzen', 'vervangen'], ['befristet', 'tijdelijk'], ['die Rente', 'het pensioen']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Nimmt uns die Maschine die Arbeit weg?', type: 'Essay',
      p: [
        ['Seit es Maschinen gibt, gibt es die Angst, sie könnten den Menschen überflüssig machen. Bisher hat sie sich nicht bestätigt: Dadurch, dass alte Berufe wegfielen, entstanden stets neue. Ob das auch für die künstliche Intelligenz gilt, ist allerdings umstritten, zumal sie erstmals auch geistige Arbeit übernimmt.', 'Sinds er machines zijn, bestaat de angst dat ze de mens overbodig zouden kunnen maken. Tot nu toe is die niet bewaarheid: doordat oude beroepen wegvielen, ontstonden er steeds nieuwe. Of dat ook voor kunstmatige intelligentie geldt, is echter omstreden, temeer daar zij voor het eerst ook denkwerk overneemt.'],
        ['Je nachdem, welche Studie man liest, sind zwischen zehn und fünfzig Prozent aller Tätigkeiten betroffen. Einig sind sich die Forscher nur insofern, als Routine am stärksten gefährdet ist. Wer mit Menschen arbeitet, in der Pflege oder im Handwerk, hat wenig zu befürchten, wohingegen manche Büroberufe ganz verschwinden dürften.', 'Afhankelijk van welke studie je leest, wordt tussen tien en vijftig procent van alle werkzaamheden geraakt. De onderzoekers zijn het alleen in zoverre eens dat routine het sterkst bedreigd wordt. Wie met mensen werkt, in de zorg of in het ambacht, heeft weinig te vrezen, terwijl sommige kantoorberoepen waarschijnlijk helemaal zullen verdwijnen.'],
        ['Die Gesellschaft kann den Wandel bewältigen, indem sie rechtzeitig in Weiterbildung investiert. Sofern das gelingt, könnte die Technik sogar das größte Problem des Arbeitsmarkts lösen: Es fehlen nicht Stellen, sondern Menschen.', 'De samenleving kan de verandering aan door op tijd in bijscholing te investeren. Voor zover dat lukt, zou de techniek zelfs het grootste probleem van de arbeidsmarkt kunnen oplossen: er ontbreken geen banen, maar mensen.']
      ],
      gl: [['überflüssig', 'overbodig'], ['sich bestätigen', 'bewaarheid worden'], ['die Tätigkeit', 'de werkzaamheid'], ['gefährdet', 'bedreigd'], ['das Handwerk', 'het ambacht'], ['rechtzeitig', 'op tijd']],
      q: [
        { t: 'mc', q: 'Warum ist die Lage bei der KI anders?', o: ['Sie übernimmt erstmals auch geistige Arbeit', 'Sie ist teurer als frühere Maschinen', 'Sie schafft keine neuen Berufe'] },
        { t: 'mc', q: 'Worin sind sich die Forscher einig?', o: ['Dass Routine am stärksten gefährdet ist', 'Dass fünfzig Prozent der Stellen wegfallen', 'Dass die Pflege verschwindet'] },
        { t: 'mc', q: 'Wie kann die Gesellschaft den Wandel bewältigen?', o: ['Indem sie in Weiterbildung investiert', 'Indem sie die Technik verbietet', 'Indem alle länger arbeiten'] }
      ]
    },
    say: [['Man lernt, indem man Fehler macht.', 'Je leert door fouten te maken.'], ['Sofern nichts dazwischenkommt, bin ich dabei.', 'Als er niets tussen komt, ben ik erbij.'], ['Je nachdem, wie man rechnet, ist das viel oder wenig.', 'Afhankelijk van hoe je rekent, is dat veel of weinig.']],
    task: { nl: 'Schrijf een kort betoog (5 zinnen) over thuiswerken of automatisering. Gebruik indem, sofern, zumal of wohingegen (minstens drie) en één keer dadurch, dass of je nachdem.', model: 'Homeoffice hat viele Vorteile, sofern man zu Hause einen ruhigen Platz hat. Man spart Zeit, indem man nicht pendelt. Dadurch, dass man die Kollegen seltener sieht, fehlt allerdings der Austausch. Ältere schätzen die Ruhe, wohingegen Jüngere oft das Büro vermissen. Je nachdem, wie der Beruf ist, passt eine Mischung am besten.' },
    scenario: { nl: 'Op je werk in Duitsland wordt aangekondigd dat een deel van het werk geautomatiseerd wordt. Je praat met iemand van de ondernemingsraad.', role: 'Frau Yilmaz, voorzitter van de Betriebsrat, eerlijk en strijdbaar', goal: 'Vraag wat de plannen voor jouw baan betekenen, onder welke voorwaarden (sofern) je kunt blijven en wat de ondernemingsraad doet.' }
  });

  /* ───────────────────────── C1 · 7 ───────────────────────── */
  U({
    id: 'de-c1-07', level: 'C1', icon: '🕵️', title: 'Der Fall: Vermutungen', nl: 'De zaak: het moet zo gegaan zijn',
    goals: ['Een misdaadverhaal of rechtszaak volgen', 'Vermoedens over het verleden uitdrukken (muss gewesen sein, kann nicht gesagt haben)', 'Scheinen, drohen en pflegen met zu gebruiken', 'Een gebeurtenis reconstrueren'],
    vocab: [
      ['der Fall', 'de zaak, het geval'], ['das Verbrechen', 'het misdrijf'], ['der Täter / die Täterin', 'de dader'], ['das Opfer', 'het slachtoffer'], ['der Zeuge / die Zeugin', 'de getuige'],
      ['der Verdacht', 'de verdenking'], ['der Verdächtige', 'de verdachte'], ['das Alibi', 'het alibi'], ['die Spur', 'het spoor'], ['der Beweis', 'het bewijs'],
      ['ermitteln', 'onderzoeken (politie)'], ['die Ermittlung', 'het (politie)onderzoek'], ['der Kommissar / die Kommissarin', 'de inspecteur'], ['verhören', 'verhoren'], ['gestehen', 'bekennen'],
      ['leugnen', 'ontkennen'], ['der Einbruch', 'de inbraak'], ['der Diebstahl', 'de diefstal'], ['der Mord', 'de moord'], ['festnehmen', 'aanhouden'],
      ['das Gericht', 'de rechtbank'], ['das Urteil', 'het vonnis'], ['der Angeklagte', 'de aangeklaagde'], ['freisprechen', 'vrijspreken'], ['verurteilen', 'veroordelen'], ['das Motiv', 'het motief']
    ],
    grammar: [
      { t: 'Hij moet het geweten hebben', es: 'Subjektive Modalverben in der Vergangenheit',
        html: `<p>Een vermoeden over iets wat <b>al gebeurd is</b>, maak je met een modaal werkwoord in de <b>tegenwoordige tijd</b> + deelwoord + <b>haben/sein</b>:</p>
<p><i>Er <b>muss</b> den Täter <b>gekannt haben</b>.</i> (ik ben er zeker van)<br><i>Sie <b>dürfte</b> gegen Mitternacht <b>gegangen sein</b>.</i> (waarschijnlijk)<br><i>Er <b>könnte</b> sich <b>geirrt haben</b>.</i> (mogelijk)<br><i>Das <b>kann</b> er nicht <b>gesagt haben</b>.</i> (uitgesloten)<br><i>Er <b>soll</b> in Zürich <b>gesehen worden sein</b>.</i> (men zegt)<br><i>Sie <b>will</b> nichts <b>gehört haben</b>.</i> (zij beweert)</p>
<p>Vergelijk het met de gewone betekenis in het verleden, waar het <b>modale werkwoord zelf</b> in de verleden tijd staat:</p>
<p><i>Er <b>musste</b> den Täter kennen.</i> = hij was verplicht hem te kennen (feit) · <i>Er <b>muss</b> den Täter <b>gekannt haben</b>.</i> = het kan niet anders of hij kende hem (mijn conclusie nu)</p>
<p><b>Uitzondering:</b> het Nederlands gebruikt in beide gevallen dezelfde volgorde (<i>moet … hebben gekend</i>), het Duits zet <b>haben/sein helemaal achteraan</b>, na het deelwoord, en in het passief komt daar nog <i>worden</i> tussen: <i>gesehen <b>worden sein</b></i>. <b>Waarom?</b> In de Duitse werkwoordsgroep staat elk hulpwerkwoord direct achter het woord dat het bestuurt: deelwoord → worden → sein → (modaal op plaats twee).</p>`,
        table: [['zekerheid', 'vorm', 'Nederlands'], ['zeker', 'Er muss es gewusst haben.', 'Hij moet het geweten hebben.'], ['waarschijnlijk', 'Er dürfte es gewusst haben.', 'Hij zal het wel geweten hebben.'], ['mogelijk', 'Er könnte es gewusst haben.', 'Hij zou het geweten kunnen hebben.'], ['uitgesloten', 'Er kann es nicht gewusst haben.', 'Hij kan het niet geweten hebben.'], ['van horen zeggen', 'Er soll es gewusst haben.', 'Hij schijnt het geweten te hebben.']],
        sum: 'Er muss es gewusst haben. Sie kann nicht dort gewesen sein. Er soll gesehen worden sein.',
        ex: [['Der Täter muss durch das Fenster gekommen sein.', 'De dader moet door het raam gekomen zijn.'], ['Die Nachbarin will um zehn einen Schrei gehört haben.', 'De buurvrouw beweert om tien uur een schreeuw gehoord te hebben.'], ['Das Bild dürfte schon vor Tagen gestohlen worden sein.', 'Het schilderij zal waarschijnlijk al dagen geleden gestolen zijn.']] },
      { t: 'Scheinen, drohen, pflegen + zu', es: 'Modalitätsverben: scheinen, drohen, pflegen',
        html: `<p>Een paar werkwoorden gedragen zich als halve modale werkwoorden. Ze krijgen een heel werkwoord met <b>zu</b> en vormen samen één gezegde, <b>zonder komma</b>:</p>
<p><b>scheinen … zu</b> = lijken te: <i>Er <b>scheint</b> nichts <b>zu wissen</b>.</i> Verleden: <i>Er <b>scheint</b> es <b>vergessen zu haben</b>.</i><br><b>drohen … zu</b> = dreigen te (iets slechts staat te gebeuren): <i>Das Haus <b>droht einzustürzen</b>.</i><br><b>pflegen … zu</b> = gewoon zijn te (deftig): <i>Er <b>pflegt</b> früh <b>aufzustehen</b>.</i><br><b>brauchen … zu</b> (alleen met <i>nicht/nur/kein</i>) = hoeven: <i>Du <b>brauchst</b> nicht <b>zu kommen</b>.</i><br><b>haben … zu</b> = moeten: <i>Sie <b>haben</b> hier nichts <b>zu suchen</b>.</i></p>
<p><b>Uitzondering:</b> <i>drohen</i> en <i>versprechen</i> hebben twee betekenissen met verschillende leestekens. Met een persoon die echt dreigt of belooft, staat er een komma: <i>Er drohte, die Polizei zu rufen.</i> Als half-modaal werkwoord (iets staat te gebeuren) staat er geen komma: <i>Der Fall droht zu scheitern.</i> <i>Das verspricht ein schöner Tag zu werden.</i> <b>Waarom?</b> In het eerste geval zijn het twee handelingen (dreigen + bellen), dus twee zinsdelen; in het tweede is het één gezegde, en dat splits je niet.</p>`,
        table: [['werkwoord', 'betekenis', 'voorbeeld'], ['scheinen zu', 'lijken te', 'Sie scheint müde zu sein.'], ['drohen zu', 'dreigen te', 'Der Plan droht zu scheitern.'], ['pflegen zu', 'plegen te', 'Er pflegte abends zu lesen.'], ['nicht brauchen zu', 'niet hoeven', 'Sie brauchen nichts zu sagen.'], ['haben zu', 'moeten', 'Ich habe noch zu arbeiten.']],
        ex: [['Der Zeuge scheint die Wahrheit zu sagen.', 'De getuige lijkt de waarheid te spreken.'], ['Die Ermittlungen drohen im Sand zu verlaufen.', 'Het onderzoek dreigt dood te lopen.'], ['Das Opfer pflegte jeden Abend spazieren zu gehen.', 'Het slachtoffer placht elke avond te gaan wandelen.']] }
    ],
    dialogue: {
      t: 'Am Tatort', place: 'Zürich 🇨🇭',
      lines: [
        ['Kommissarin Frei', 'Also, was haben wir? Das Gemälde war gestern Abend noch da?', 'Dus, wat hebben we? Het schilderij was er gisteravond nog?'],
        ['Wachmann Huber', 'Um 22 Uhr habe ich es noch gesehen. Der Dieb muss zwischen zehn und sechs gekommen sein.', 'Om 22 uur heb ik het nog gezien. De dief moet tussen tien en zes gekomen zijn.'],
        ['Kommissarin Frei', 'Kein Fenster kaputt, kein Alarm. Er kann nicht von außen gekommen sein.', 'Geen raam kapot, geen alarm. Hij kan niet van buiten gekomen zijn.'],
        ['Wachmann Huber', 'Sie meinen, es war jemand vom Museum?', 'U bedoelt dat het iemand van het museum was?'],
        ['Kommissarin Frei', 'Oder jemand, der einen Schlüssel hatte. Die Alarmanlage scheint ausgeschaltet worden zu sein. Wer weiß, wie das geht?', 'Of iemand die een sleutel had. De alarminstallatie lijkt uitgeschakeld te zijn. Wie weet hoe dat moet?'],
        ['Wachmann Huber', 'Nur der Direktor, die Technikerin und ich. Aber ich habe nichts damit zu tun!', 'Alleen de directeur, de technicus en ik. Maar ik heb er niets mee te maken!'],
        ['Kommissarin Frei', 'Das habe ich nicht gesagt. Der Direktor soll gestern früher gegangen sein, stimmt das?', 'Dat heb ik niet gezegd. De directeur schijnt gisteren eerder weggegaan te zijn, klopt dat?'],
        ['Wachmann Huber', 'Ja. Er will bei einem Abendessen gewesen sein. Seltsam, er pflegt sonst immer als Letzter zu gehen.', 'Ja. Hij beweert bij een diner te zijn geweest. Vreemd, hij pleegt anders altijd als laatste te gaan.'],
        ['Kommissarin Frei', 'Interessant. Sie brauchen jetzt nichts weiter zu sagen. Aber bleiben Sie in der Stadt.', 'Interessant. U hoeft nu verder niets te zeggen. Maar blijf in de stad.']
      ],
      q: [
        { t: 'mc', q: 'Wann muss der Dieb gekommen sein?', o: ['Zwischen zehn und sechs Uhr', 'Vor 22 Uhr', 'Am Nachmittag'] },
        { t: 'mc', q: 'Warum kann er nicht von außen gekommen sein?', o: ['Kein Fenster ist kaputt und es gab keinen Alarm', 'Die Tür war offen', 'Es lag Schnee'] },
        { t: 'mc', q: 'Was ist seltsam am Direktor?', o: ['Er geht sonst immer als Letzter', 'Er hat keinen Schlüssel', 'Er kennt die Alarmanlage nicht'] }
      ]
    },
    culture: { t: 'Zondagavond, kwart over acht: Tatort', html: `<p>📺 Sinds 1970 zendt de ARD op zondagavond om <b>20.15 uur</b> de krimi <b>Tatort</b> uit. Elke aflevering speelt in een andere stad met een eigen team: het duo uit Münster is komisch, die uit Dortmund somber, de Weense inspecteurs praten Weens. Miljoenen kijken, ook in Oostenrijk en Zwitserland, en in veel cafés is er <i>Public Viewing</i>. Op maandag praat het hele land erover.</p>
<p>Het Duitse taalgebied is dol op misdaad: de <b>Krimi</b> is het best verkochte boekgenre, vaak als <b>Regionalkrimi</b> die in één streek speelt (de Eifel, Oost-Friesland, Allgäu), met veel lokaal eten en dialect.</p>
<p>Juridisch goed om te weten: tot een veroordeling geldt de <i>Unschuldsvermutung</i>. Media schrijven daarom <i>der mutmaßliche Täter</i> en noemen verdachten alleen bij voornaam en eerste letter: <i>Thomas K.</i></p>` },
    ex: [
      { t: 'cloze', s: 'Der Täter ___ durch das Fenster gekommen sein. (ik ben er zeker van)', a: ['muss'], o: ['muss', 'musste', 'will'], nl: 'De dader moet door het raam gekomen zijn.', x: 'Het modale werkwoord staat in de tegenwoordige tijd: het is mijn conclusie van nu. «Musste» zou een verplichting toen zijn.', tag: 'de-modalverg' },
      { t: 'cloze', s: 'Das kann er nicht gesagt ___.', a: ['haben'], o: ['haben', 'sein', 'hat'], nl: 'Dat kan hij niet gezegd hebben.', tag: 'de-modalverg' },
      { t: 'cloze', s: 'Sie dürfte gegen Mitternacht gegangen ___.', a: ['sein'], o: ['sein', 'haben', 'ist'], nl: 'Ze zal wel rond middernacht weggegaan zijn.', tag: 'de-modalverg' },
      { t: 'cloze', s: 'Die Nachbarin ___ einen Schrei gehört haben. (zij beweert het)', a: ['will'], o: ['will', 'soll', 'muss'], nl: 'De buurvrouw beweert een schreeuw gehoord te hebben.', tag: 'de-modalverg' },
      { t: 'cloze', s: 'Er soll in Zürich gesehen ___ sein.', a: ['worden'], o: ['worden', 'geworden', 'werden'], nl: 'Hij schijnt in Zürich gezien te zijn.', x: 'Uitzondering t.o.v. het Nederlands: in het Duits komt worden tussen deelwoord en sein. Reden: elk hulpwerkwoord staat direct achter het woord dat het bestuurt.', tag: 'de-modalverg' },
      { t: 'cloze', s: 'Der Zeuge ___ die Wahrheit zu sagen.', a: ['scheint'], o: ['scheint', 'schein', 'pflegt'], nl: 'De getuige lijkt de waarheid te spreken.', tag: 'de-scheinen' },
      { t: 'cloze', s: 'Sie brauchen nichts ___ sagen.', a: ['zu'], o: ['zu', 'um', 'für'], nl: 'U hoeft niets te zeggen.', tag: 'de-scheinen' },
      { t: 'mc', q: 'Welke zin heeft de juiste komma?', o: ['Das Haus droht einzustürzen.', 'Das Haus droht, einzustürzen.', 'Das Haus, droht einzustürzen.'], x: 'Uitzondering: als half-modaal werkwoord (iets staat te gebeuren) krijgt drohen geen komma. Reden: het is één gezegde. Bij echt dreigen wél: Er drohte, die Polizei zu rufen.', tag: 'de-scheinen' },
      { t: 'mc', q: 'Wat is het verschil? «Er musste es wissen.» / «Er muss es gewusst haben.»', o: ['verplichting toen / mijn conclusie nu', 'mijn conclusie nu / verplichting toen', 'geen verschil'], tag: 'de-modalverg' },
      { t: 'mc', q: 'Wat betekent «gestehen»?', o: ['bekennen', 'ontkennen', 'opstaan'], tag: 'de-vok' },
      { t: 'tr', nl: 'Hij moet het geweten hebben.', a: ['Er muss es gewusst haben.', 'Er muss das gewusst haben.'], tag: 'de-modalverg' },
      { t: 'tr', nl: 'Ze lijkt moe te zijn.', a: ['Sie scheint müde zu sein.'], tag: 'de-scheinen' },
      { t: 'tr', nl: 'De verdachte is aangehouden.', a: ['Der Verdächtige wurde festgenommen.', 'Der Verdächtige ist festgenommen worden.', 'Die Verdächtige wurde festgenommen.'], tag: 'de-vok' },
      { t: 'order', s: 'Die Nachbarin will um zehn einen Schrei gehört haben.', nl: 'De buurvrouw beweert om tien uur een schreeuw gehoord te hebben.', tag: 'de-modalverg' },
      { t: 'match', p: [['der Zeuge', 'de getuige'], ['die Spur', 'het spoor'], ['leugnen', 'ontkennen'], ['das Urteil', 'het vonnis'], ['der Einbruch', 'de inbraak']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Das verschwundene Bild', type: 'Krantenbericht',
      p: [
        ['Aus dem Kunsthaus Zürich ist in der Nacht auf Dienstag ein Gemälde im Wert von rund zwei Millionen Franken verschwunden. Da weder Türen noch Fenster beschädigt waren, muss der Täter über einen Schlüssel verfügt haben. Die Alarmanlage scheint kurz vor Mitternacht ausgeschaltet worden zu sein.', 'Uit het Kunsthaus Zürich is in de nacht van maandag op dinsdag een schilderij ter waarde van ongeveer twee miljoen frank verdwenen. Omdat deuren noch ramen beschadigd waren, moet de dader over een sleutel beschikt hebben. De alarminstallatie lijkt kort voor middernacht uitgeschakeld te zijn.'],
        ['Die Polizei geht davon aus, dass der Diebstahl sorgfältig geplant war. Der Täter dürfte das Gebäude gut gekannt haben, denn er wich allen Kameras aus. Ein Anwohner will gegen ein Uhr einen dunklen Lieferwagen bemerkt haben. Ob dieser mit der Tat zu tun hat, ist unklar.', 'De politie gaat ervan uit dat de diefstal zorgvuldig gepland was. De dader zal het gebouw goed gekend hebben, want hij ontweek alle camera’s. Een omwonende beweert rond één uur een donkere bestelwagen opgemerkt te hebben. Of die met het misdrijf te maken heeft, is onduidelijk.'],
        ['Einem Medienbericht zufolge soll ein Mitarbeiter des Museums bereits verhört worden sein. Die Polizei wollte das nicht bestätigen. Das Bild selbst droht unterdessen für immer zu verschwinden: Gestohlene Kunst pflegt nach wenigen Tagen im Ausland aufzutauchen oder gar nicht mehr.', 'Volgens een mediabericht schijnt een medewerker van het museum al verhoord te zijn. De politie wilde dat niet bevestigen. Het schilderij zelf dreigt intussen voorgoed te verdwijnen: gestolen kunst pleegt na enkele dagen in het buitenland op te duiken of helemaal niet meer.']
      ],
      gl: [['im Wert von', 'ter waarde van'], ['verfügen über', 'beschikken over'], ['ausweichen', 'ontwijken'], ['der Anwohner', 'de omwonende'], ['der Lieferwagen', 'de bestelwagen'], ['auftauchen', 'opduiken']],
      q: [
        { t: 'mc', q: 'Warum muss der Täter einen Schlüssel gehabt haben?', o: ['Weil weder Türen noch Fenster beschädigt waren', 'Weil der Wachmann schlief', 'Weil er Mitarbeiter war'] },
        { t: 'mc', q: 'Wie sicher ist, dass der Anwohner einen Lieferwagen gesehen hat?', o: ['Er behauptet es selbst (will … bemerkt haben)', 'Die Polizei hat es bewiesen', 'Es gibt ein Video'] },
        { t: 'mc', q: 'Was droht mit dem Bild zu geschehen?', o: ['Es droht für immer zu verschwinden', 'Es droht zerstört zu werden', 'Es droht verkauft zu werden'] }
      ]
    },
    say: [['Er muss es gewusst haben.', 'Hij moet het geweten hebben.'], ['Das kann sie nicht gesagt haben.', 'Dat kan ze niet gezegd hebben.'], ['Er scheint die Wahrheit zu sagen.', 'Hij lijkt de waarheid te spreken.']],
    task: { nl: 'Reconstrueer in 5 zinnen een (verzonnen) inbraak of verdwijning. Gebruik muss, kann nicht, dürfte, soll of will + deelwoord + haben/sein (minstens vier) en één keer scheinen of drohen + zu.', model: 'Der Dieb muss in der Nacht gekommen sein, denn abends war das Fahrrad noch da. Er kann nicht über den Zaun geklettert sein, der ist zu hoch. Er dürfte also einen Schlüssel für das Tor gehabt haben. Der Nachbar will nichts gehört haben. Das Fahrrad scheint für immer verschwunden zu sein.' },
    scenario: { nl: 'Er is ingebroken bij je Zwitserse buren. Een inspecteur stelt je als getuige vragen.', role: 'Kommissarin Frei, een scherpe Zürcher inspecteur die niets voor waar aanneemt', goal: 'Vertel wat je hebt gezien en gehoord, trek zelf conclusies (Der Täter muss … haben) en beantwoord haar vragen over je buren.' }
  });

  /* ───────────────────────── C1 · 8 ───────────────────────── */
  U({
    id: 'de-c1-08', level: 'C1', icon: '🏔️', title: 'Deutsch ist nicht gleich Deutsch', nl: 'Oostenrijk en Zwitserland: andere woorden, zelfde taal',
    goals: ['Oostenrijks en Zwitsers Standaardduits herkennen', 'De belangrijkste andere woorden voor eten, verkeer en dagelijks leven kennen', 'Nieuwe woorden afleiden met voorvoegsels en -bar, -los, -haft', 'Verschillen in beleefdheid en begroeting kennen'],
    vocab: [
      ['der Jänner (AT)', 'januari'], ['das Sackerl (AT)', 'het tasje, het zakje'], ['der Erdapfel (AT)', 'de aardappel'], ['die Marille (AT)', 'de abrikoos'], ['der Paradeiser (AT)', 'de tomaat'],
      ['der Topfen (AT)', 'de kwark'], ['das Schlagobers (AT)', 'de slagroom'], ['die Semmel (AT, Zuid-DE)', 'het broodje'], ['heuer (AT)', 'dit jaar'], ['die Matura (AT, CH)', 'het eindexamen'],
      ['das Velo (CH)', 'de fiets'], ['das Billett (CH)', 'het kaartje'], ['das Trottoir (CH)', 'de stoep'], ['parkieren (CH)', 'parkeren'], ['grillieren (CH)', 'barbecueën'],
      ['der Coiffeur (CH)', 'de kapper'], ['das Natel (CH)', 'de mobiele telefoon'], ['das Morgenessen (CH)', 'het ontbijt'], ['der Spital (CH) / das Spital (AT)', 'het ziekenhuis'], ['Grüezi (CH)', 'goedendag'],
      ['Servus (AT, Beieren)', 'hoi; dag'], ['Grüß Gott (AT, Zuid-DE)', 'goedendag'], ['die Mundart', 'het dialect'], ['das Hochdeutsch', 'het Standaardduits'], ['die Aussprache', 'de uitspraak'], ['verständlich', 'verstaanbaar, begrijpelijk']
    ],
    grammar: [
      { t: 'Drie landen, drie standaarden', es: 'Varietäten: Österreich und die Schweiz',
        html: `<p>Duits is een <b>pluricentrische</b> taal: Duitsland, Oostenrijk en Zwitserland hebben elk hun eigen <b>correcte</b> standaardtaal, met eigen woorden, uitspraak en een paar eigen regels. Dat is iets anders dan dialect.</p>
<p><b>Oostenrijk:</b> eigen woorden vooral voor eten (<i>Erdäpfel, Paradeiser, Marillen, Topfen, Faschiertes</i> = gehakt) en maanden (<i>Jänner, Feber</i>). Perfekt van <i>sitzen, stehen, liegen</i> met <b>sein</b>: <i>Ich <b>bin</b> gesessen.</i> Verkleinwoorden op <b>-erl</b>: <i>ein Sackerl, ein Achterl</i>. Titels zijn belangrijk: <i>Herr Magister, Frau Doktor</i>.</p>
<p><b>Zwitserland:</b> veel Franse leenwoorden (<i>Velo, Billett, Trottoir, Coiffeur, merci</i>), werkwoorden op <b>-ieren</b> (<i>parkieren, grillieren</i>), en vooral: <b>geen ß</b>. Men schrijft altijd <i>ss</i>: <i>Strasse, heissen, gross</i>. Getallen: <i>1’000’000</i> met apostrof.</p>
<p>Zwitsers spreken onderling <b>Schweizerdeutsch</b> (dialect) en schrijven Standaardduits. Tegen jou schakelen ze over op «Schriftdeutsch». Vraag gerust: <i>Könnten Sie bitte Hochdeutsch sprechen?</i></p>
<p><b>Uitzondering:</b> <i>Ich bin gesessen / gestanden / gelegen</i> is in Oostenrijk, Zwitserland en Zuid-Duitsland goed, terwijl de regel uit het noorden <i>haben</i> voorschrijft (geen beweging). <b>Waarom?</b> In het zuiden worden deze werkwoorden opgevat als «een toestand aannemen», en verandering van toestand krijgt <i>sein</i>. Beide zijn correct Standaardduits; kies de vorm van het land waar je bent.</p>`,
        table: [['Duitsland', 'Oostenrijk', 'Zwitserland', 'Nederlands'], ['Januar', 'Jänner', 'Januar', 'januari'], ['Tüte', 'Sackerl', 'Sack', 'tasje'], ['Fahrrad', 'Fahrrad, Radl', 'Velo', 'fiets'], ['Abitur', 'Matura', 'Matura', 'eindexamen'], ['Krankenhaus', 'Spital', 'Spital', 'ziekenhuis'], ['Sahne', 'Schlagobers', 'Rahm', 'slagroom'], ['Straße', 'Straße', 'Strasse', 'straat']],
        sum: 'Grüß Gott! Ein Sackerl, bitte. · Grüezi! Wo kann ich das Velo parkieren?',
        ex: [['Heuer fahren wir im Jänner nach Tirol.', 'Dit jaar gaan we in januari naar Tirol.'], ['Darf ich hier mein Velo parkieren?', 'Mag ik hier mijn fiets parkeren?'], ['Ich bin zwei Stunden im Zug gestanden.', 'Ik heb twee uur in de trein gestaan.']] },
      { t: 'Woorden bouwen: be-, ver-, zer-, ent- en -bar, -los, -haft', es: 'Wortbildung: Präfixe und Suffixe',
        html: `<p>Met een handvol bouwstenen begrijp je duizenden woorden die je nooit hebt geleerd.</p>
<p><b>Voorvoegsels (onscheidbaar):</b><br><b>be-</b> maakt een werkwoord overgankelijk: <i>antworten auf → <b>be</b>antworten</i> (zonder voorzetsel)<br><b>ver-</b> = fout, weg, of «maken tot»: <i><b>ver</b>laufen</i> (verdwalen), <i><b>ver</b>schenken</i>, <i><b>ver</b>bessern</i><br><b>zer-</b> = kapot: <i><b>zer</b>brechen, <b>zer</b>stören, <b>zer</b>reißen</i><br><b>ent-</b> = weg van, het omgekeerde: <i><b>ent</b>decken, <b>ent</b>spannen, <b>ent</b>schuldigen</i><br><b>miss-</b> = verkeerd: <i><b>miss</b>verstehen</i> · <b>er-</b> = resultaat bereiken: <i><b>er</b>reichen, <b>er</b>kennen</i></p>
<p><b>Achtervoegsels voor bijvoeglijke naamwoorden:</b><br><b>-bar</b> = kan worden: <i>essbar, erreichbar</i> · <b>-los</b> = zonder: <i>arbeitslos, kostenlos</i> · <b>-haft</b> = als, met de aard van: <i>fehlerhaft, traumhaft</i> · <b>-sam</b> = geneigd tot: <i>sparsam, schweigsam</i> · <b>-mäßig</b> = volgens, wat betreft: <i>regelmäßig, planmäßig</i> · <b>un-</b> = niet: <i>unlesbar</i></p>
<p><b>Uitzondering:</b> het voorvoegsel <i>ver-</i> is onvoorspelbaar: <i>verkaufen</i> is het tegendeel van <i>kaufen</i>, maar <i>verschlafen</i> is «te lang slapen» en <i>versprechen</i> is zowel «beloven» als (met <i>sich</i>) «zich verspreken». <b>Waarom?</b> In <i>ver-</i> zijn drie oude voorvoegsels samengevallen (met de betekenissen «weg», «voorbij/verkeerd» en «volledig»). Leer <i>ver-</i>-woorden daarom per stuk.</p>`,
        table: [['bouwsteen', 'betekenis', 'voorbeelden'], ['zer-', 'kapot', 'zerstören, zerschneiden'], ['ent-', 'weg, omkering', 'entfernen, entladen'], ['-bar', 'kan worden', 'machbar, trinkbar'], ['-los', 'zonder', 'hoffnungslos, sprachlos'], ['-haft', 'met de aard van', 'ernsthaft, märchenhaft'], ['-sam', 'geneigd tot', 'arbeitsam, einsam']],
        ex: [['Das Wasser ist trinkbar, aber geschmacklos.', 'Het water is drinkbaar, maar smakeloos.'], ['Ich habe mich im Dialekt völlig verlaufen.', 'Ik ben in het dialect helemaal verdwaald.'], ['Die Aussicht war märchenhaft.', 'Het uitzicht was sprookjesachtig.']] }
    ],
    dialogue: {
      t: 'Am Bahnhof in Bern', place: 'Bern 🇨🇭',
      lines: [
        ['Frau Aebischer', 'Grüezi. Was darf’s sein?', 'Goedendag. Wat mag het zijn?'],
        ['Herr Visser', 'Guten Tag. Eine Fahrkarte nach Interlaken, bitte, und ich möchte mein Fahrrad mitnehmen.', 'Goedendag. Een kaartje naar Interlaken, alstublieft, en ik wil mijn fiets meenemen.'],
        ['Frau Aebischer', 'Ein Billett nach Interlaken, einfach oder retour? Und fürs Velo brauchen Sie eine Tageskarte.', 'Een kaartje naar Interlaken, enkel of retour? En voor de fiets hebt u een dagkaart nodig.'],
        ['Herr Visser', 'Retour, bitte. Entschuldigung, ich bin in Wien gewesen, dort heißt alles wieder anders.', 'Retour, alstublieft. Sorry, ik ben in Wenen geweest, daar heet alles weer anders.'],
        ['Frau Aebischer', 'Das glaube ich. Dort bekommen Sie ein Sackerl, bei uns einen Sack. Das macht 58 Franken 40.', 'Dat geloof ik. Daar krijgt u een Sackerl, bij ons een Sack. Dat is 58 frank 40.'],
        ['Herr Visser', 'Kann ich mit Karte zahlen?', 'Kan ik met de kaart betalen?'],
        ['Frau Aebischer', 'Selbstverständlich. Der Zug fährt um 14.04 Uhr auf Gleis 6. Das Velo können Sie im Wagen mit dem Velo-Zeichen parkieren.', 'Vanzelfsprekend. De trein vertrekt om 14.04 uur van spoor 6. De fiets kunt u neerzetten in de wagon met het fietsteken.'],
        ['Herr Visser', 'Merci vielmal. So sagt man das hier, oder?', 'Merci vielmal. Zo zeg je dat hier, toch?'],
        ['Frau Aebischer', 'Genau so. Adieu und gute Reise!', 'Precies zo. Tot ziens en goede reis!']
      ],
      q: [
        { t: 'mc', q: 'Wie nennt Frau Aebischer das Fahrrad?', o: ['Velo', 'Radl', 'Bike'] },
        { t: 'mc', q: 'Was braucht Herr Visser für das Fahrrad?', o: ['Eine Tageskarte', 'Nichts', 'Eine Reservierung'] },
        { t: 'mc', q: 'Wie bedankt man sich in der Schweiz?', o: ['Merci vielmal', 'Servus', 'Grüß Gott'] }
      ]
    },
    culture: { t: 'Röstigraben, Schmäh en het hoogste Hochdeutsch', html: `<p>🇨🇭 Zwitserland heeft <b>vier landstalen</b>: Duits (ongeveer 62 %), Frans, Italiaans en Reto-Romaans. De grens tussen Duits- en Franstalig heet gekscherend de <b>Röstigraben</b>. Het gesproken <b>Schwiizerdütsch</b> is voor Duitsers nauwelijks te volgen; op de Duitse tv worden Zwitsers vaak ondertiteld.</p>
<p>🇦🇹 In Oostenrijk hoor je de <b>Wiener Schmäh</b>: een mengsel van charme, ironie en mopperen. Een ober heet <i>Herr Ober</i>, koffie bestel je nooit als «Kaffee» maar als <i>Melange, Verlängerter</i> of <i>kleiner Brauner</i>. Bij het EU-lidmaatschap heeft Oostenrijk 23 eigen woorden laten beschermen, waaronder <i>Erdäpfel</i> en <i>Marillen</i>.</p>
<p>🇩🇪 En waar spreekt men «het zuiverste» Duits? Traditioneel noemt men <b>Hannover</b>. De ironie: de oorspronkelijke taal daar was Nederduits (Platt), nauw verwant aan het Nederlands; juist daarom leerde men het Hoogduits er «uit het boek».</p>` },
    ex: [
      { t: 'cloze', s: 'In Österreich sagt man für Januar: ___.', a: ['Jänner'], o: ['Jänner', 'Januari', 'Jenner'], nl: 'In Oostenrijk zegt men voor januari: Jänner.', tag: 'de-varietaet' },
      { t: 'cloze', s: 'In der Schweiz fährt man ___. (fiets)', a: ['Velo'], o: ['Velo', 'Radl', 'Sackerl'], nl: 'In Zwitserland rijd je Velo.', tag: 'de-varietaet' },
      { t: 'cloze', s: 'In der Schweiz schreibt man: die ___.', a: ['Strasse'], o: ['Strasse', 'Straße', 'Strase'], nl: 'In Zwitserland schrijft men: die Strasse.', x: 'Zwitserland gebruikt geen ß, altijd ss.', tag: 'de-varietaet' },
      { t: 'cloze', s: 'Ich ___ zwei Stunden gestanden. (Oostenrijkse standaard)', a: ['bin'], o: ['bin', 'habe', 'war'], nl: 'Ik heb twee uur gestaan.', x: 'Uitzondering op de noordelijke regel: in het zuiden krijgen stehen, sitzen en liegen sein. Reden: ze gelden daar als «een toestand aannemen». Beide vormen zijn correct.', tag: 'de-varietaet' },
      { t: 'cloze', s: 'Das Glas ist ___brochen. (kapot)', a: ['zer'], o: ['zer', 'ent', 'be'], nl: 'Het glas is gebroken.', tag: 'de-wortbildung' },
      { t: 'cloze', s: 'Der Eintritt ist kosten___.', a: ['los'], o: ['los', 'bar', 'haft'], nl: 'De toegang is gratis.', tag: 'de-wortbildung' },
      { t: 'cloze', s: 'Das Wasser ist trink___.', a: ['bar'], o: ['bar', 'los', 'sam'], nl: 'Het water is drinkbaar.', tag: 'de-wortbildung' },
      { t: 'mc', q: 'Wat zijn «Paradeiser» en «Erdäpfel»?', o: ['tomaten en aardappelen', 'paradijsvogels en aardbeien', 'paprika’s en appels'], tag: 'de-varietaet' },
      { t: 'mc', q: 'Wat betekent «verschlafen»?', o: ['te lang slapen', 'niet slapen', 'in slaap vallen'], x: 'Uitzondering: ver- is onvoorspelbaar (verkaufen, verschlafen, versprechen). Reden: drie oude voorvoegsels zijn erin samengevallen. Leer ze per stuk.', tag: 'de-wortbildung' },
      { t: 'mc', q: 'Welk woord betekent «zonder woorden, sprakeloos»?', o: ['sprachlos', 'sprachbar', 'sprachhaft'], tag: 'de-wortbildung' },
      { t: 'tr', nl: 'Een tasje, alstublieft. (in Wenen)', a: ['Ein Sackerl, bitte.'], tag: 'de-varietaet' },
      { t: 'tr', nl: 'Kunt u alstublieft Standaardduits spreken?', a: ['Könnten Sie bitte Hochdeutsch sprechen?', 'Können Sie bitte Hochdeutsch sprechen?'], tag: 'de-varietaet' },
      { t: 'tr', nl: 'Ik heb je verkeerd begrepen.', a: ['Ich habe dich missverstanden.', 'Ich habe dich falsch verstanden.'], tag: 'de-wortbildung' },
      { t: 'order', s: 'Heuer fahren wir im Jänner nach Tirol.', nl: 'Dit jaar gaan we in januari naar Tirol.', tag: 'de-varietaet' },
      { t: 'match', p: [['die Marille', 'de abrikoos'], ['das Billett', 'het kaartje'], ['der Topfen', 'de kwark'], ['der Coiffeur', 'de kapper'], ['heuer', 'dit jaar']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Warum Schweizer im deutschen Fernsehen Untertitel bekommen', type: 'Column',
      p: [
        ['Als ich vor zwanzig Jahren von Hamburg nach Zürich zog, dachte ich, ich müsse keine neue Sprache lernen. Ein Irrtum. Am ersten Tag fragte mich die Vermieterin, ob ich das Velo im Keller parkieren wolle und ob ich schon ein Natel hätte. Ich war sprachlos.', 'Toen ik twintig jaar geleden van Hamburg naar Zürich verhuisde, dacht ik dat ik geen nieuwe taal hoefde te leren. Een vergissing. Op de eerste dag vroeg de verhuurster of ik de fiets in de kelder wilde stallen en of ik al een mobieltje had. Ik was sprakeloos.'],
        ['Dabei sprach sie Hochdeutsch mit mir, mühsam und höflich. Untereinander reden Schweizer Mundart, und die ist für Norddeutsche so gut wie unverständlich. Das Seltsame: Schweizerdeutsch ist keine Schriftsprache. Geschrieben wird Standarddeutsch, nur ohne ß und mit Wörtern wie «Trottoir» und «grillieren».', 'Daarbij sprak ze Standaardduits met mij, moeizaam en beleefd. Onderling praten Zwitsers dialect, en dat is voor Noord-Duitsers zo goed als onverstaanbaar. Het vreemde: Zwitserduits is geen schrijftaal. Geschreven wordt Standaardduits, alleen zonder ß en met woorden als «Trottoir» en «grillieren».'],
        ['Inzwischen verstehe ich fast alles und sage selbst «merci» und «exgüsi». Nur eines habe ich nicht gelernt: langsamer zu sprechen. Deutsche gelten hier als schnell, direkt und ein wenig laut. Meine Nachbarin meint, das sei unverbesserlich. Ich fürchte, sie hat recht.', 'Inmiddels versta ik bijna alles en zeg ik zelf «merci» en «exgüsi». Slechts één ding heb ik niet geleerd: langzamer praten. Duitsers gelden hier als snel, direct en een beetje luid. Mijn buurvrouw vindt dat dat onverbeterlijk is. Ik vrees dat ze gelijk heeft.']
      ],
      gl: [['der Irrtum', 'de vergissing'], ['mühsam', 'moeizaam'], ['untereinander', 'onderling'], ['exgüsi (CH)', 'sorry, pardon'], ['unverbesserlich', 'onverbeterlijk']],
      q: [
        { t: 'mc', q: 'Was dachte der Autor vor dem Umzug?', o: ['Er müsse keine neue Sprache lernen', 'Er müsse Französisch lernen', 'Die Schweizer sprächen kein Deutsch'] },
        { t: 'mc', q: 'Was ist das Seltsame am Schweizerdeutschen?', o: ['Es ist keine Schriftsprache', 'Es hat kein ß', 'Es wird nur in Zürich gesprochen'] },
        { t: 'mc', q: 'Wie gelten Deutsche in der Schweiz?', o: ['Als schnell, direkt und ein wenig laut', 'Als langsam und höflich', 'Als schweigsam'] }
      ]
    },
    say: [['Grüezi! Ein Billett nach Bern, bitte.', 'Goedendag! Een kaartje naar Bern, alstublieft.'], ['Servus! Ein Sackerl, bitte.', 'Hoi! Een tasje, alstublieft.'], ['Könnten Sie bitte Hochdeutsch sprechen?', 'Zou u alstublieft Standaardduits kunnen spreken?']],
    task: { nl: 'Schrijf 5 zinnen over een (echte of verzonnen) reis door Oostenrijk en Zwitserland. Gebruik minstens vier woorden uit die landen en drie afgeleide woorden met -bar, -los, -haft of zer-/ver-/ent-.', model: 'Heuer waren wir im Jänner in Wien und danach in Zürich. In Wien gab es Erdäpfelsalat und Marillenknödel, einfach traumhaft. In Zürich habe ich ein Velo gemietet, aber das Billett für den Zug war fast unbezahlbar. Den Dialekt habe ich völlig missverstanden. Trotzdem war die Reise unvergesslich.' },
    scenario: { nl: 'Je koopt aan het loket in Bern een treinkaartje en wilt je fiets meenemen.', role: 'Frau Aebischer, een vriendelijke lokettiste die Standaardduits met Zwitserse woorden spreekt', goal: 'Bestel je kaartje, vraag naar de fiets (Velo), vraag na wat een woord betekent dat je niet kent en bedank op z’n Zwitsers.' }
  });

  /* ───────────────────────── C1 · 9 ───────────────────────── */
  U({
    id: 'de-c1-09', level: 'C1', icon: '🧩', title: 'Satzbau für Fortgeschrittene', nl: 'Zinsbouw: es, het midden van de zin en wat erachter mag',
    goals: ['Begrijpen wanneer es verplicht is en wanneer het verdwijnt', 'De volgorde in het midden van de zin sturen', 'Zinsdelen bewust achter het werkwoord plaatsen', 'Nadruk leggen door de volgorde'],
    vocab: [
      ['der Satzbau', 'de zinsbouw'], ['die Betonung', 'de klemtoon, de nadruk'], ['hervorheben', 'benadrukken'], ['die Reihenfolge', 'de volgorde'], ['die Ausnahme', 'de uitzondering'],
      ['es geht um', 'het gaat om'], ['es kommt auf … an', 'het komt aan op'], ['es handelt sich um', 'het betreft'], ['es fehlt an', 'er is gebrek aan'], ['es gelingt mir', 'het lukt me'],
      ['es lohnt sich', 'het loont, het is de moeite waard'], ['es heißt, dass', 'men zegt dat'], ['es liegt an', 'het ligt aan'], ['es eilig haben', 'haast hebben'], ['es ernst meinen', 'het serieus menen'],
      ['übrigens', 'overigens, trouwens'], ['immerhin', 'in elk geval, toch'], ['ohnehin', 'toch al'], ['ausgerechnet', 'uitgerekend'], ['lediglich', 'slechts'],
      ['keineswegs', 'geenszins'], ['durchaus', 'zeer zeker, best wel'], ['geradezu', 'ronduit'], ['zumindest', 'tenminste'], ['im Übrigen', 'voor het overige'], ['nachträglich', 'achteraf']
    ],
    grammar: [
      { t: 'Het kleine woordje es', es: 'Das Pronomen es: Platzhalter und Korrelat',
        html: `<p><i>Es</i> heeft vier functies, en per functie verschilt of het mag wegvallen.</p>
<p><b>1. Echt voornaamwoord</b> (verwijst naar een <i>das</i>-woord): <i>Das Buch? <b>Es</b> liegt dort.</i> Blijft altijd.</p>
<p><b>2. Vast onderdeel</b> van het werkwoord (weer, tijd, vaste uitdrukkingen): <i><b>Es</b> regnet. <b>Es</b> gibt … <b>Es</b> geht um …</i> Blijft <b>altijd</b>, ook midden in de zin: <i>Heute regnet <b>es</b>.</i></p>
<p><b>3. Plaatshouder op plaats één</b>: het vult alleen de eerste plaats, zodat het werkwoord op twee kan staan. Het echte onderwerp komt later: <i><b>Es</b> kamen viele Leute.</i> Zodra er iets anders vooraan staat, <b>verdwijnt</b> het: <i>Gestern kamen viele Leute.</i> Dit geldt ook voor het passief zonder onderwerp: <i><b>Es</b> wurde viel gelacht.</i> → <i>Dort wurde viel gelacht.</i></p>
<p><b>4. Vooruitverwijzing</b> naar een <i>dass</i>-zin of infinitief: <i><b>Es</b> freut mich, dass du kommst.</i> Staat de bijzin vooraan, dan vervalt <i>es</i>: <i>Dass du kommst, freut mich.</i></p>
<p><b>Uitzondering:</b> bij type 3 richt het werkwoord zich <b>niet</b> naar <i>es</i>, maar naar het echte onderwerp erachter: <i>Es <b>kamen</b> viele Leute</i> (meervoud), niet <s>es kam</s>. <b>Waarom?</b> <i>Es</i> is hier geen onderwerp maar alleen een opvuller van de eerste plaats; het onderwerp is <i>viele Leute</i>. In het Nederlands doet <i>er</i> dit werk (<i>er kwamen veel mensen</i>).</p>`,
        table: [['functie', 'voorbeeld', 'valt weg?'], ['voornaamwoord', 'Es (das Kind) schläft.', 'nee'], ['vast bij werkwoord', 'Heute gibt es Suppe.', 'nee'], ['plaatshouder', 'Es wurde getanzt. → Hier wurde getanzt.', 'ja'], ['vooruitverwijzing', 'Es ist schön, dass … → Dass …, ist schön.', 'ja, als de bijzin vooraan staat']],
        sum: 'Es wurde viel gelacht. → Gestern wurde viel gelacht. · Heute regnet es.',
        ex: [['Es haben sich über hundert Leute beworben.', 'Er hebben zich meer dan honderd mensen aangemeld.'], ['In diesem Text geht es um den Satzbau.', 'In deze tekst gaat het om de zinsbouw.'], ['Mir ist es gelungen, ihn zu überzeugen.', 'Het is me gelukt hem te overtuigen.']] },
      { t: 'Het middenveld en het achterveld', es: 'Mittelfeld und Nachfeld',
        html: `<p>Tussen het werkwoord op plaats twee en de werkwoordsdelen aan het einde ligt het <b>Mittelfeld</b>. De volgorde daar volgt een paar vuistregels:</p>
<p>1. <b>Kort vóór lang:</b> voornaamwoorden direct na het werkwoord, in de volgorde <b>1e – 4e – 3e naamval</b>: <i>Ich habe <b>es ihm</b> gestern gegeben.</i><br>2. Bij naamwoorden: <b>3e vóór 4e</b>, en <b>bekend vóór nieuw</b>: <i>Ich habe <b>dem Kollegen einen Brief</b> geschrieben.</i><br>3. Bepalingen: <b>te-ka-mo-lo</b> (temporal – kausal – modal – lokal): <i>Ich bin <b>gestern wegen des Streiks mit dem Auto nach Köln</b> gefahren.</i><br>4. Wat <b>nieuw of belangrijk</b> is, schuift naar rechts; <i>nicht</i> staat vóór wat je ontkent.</p>
<p>Na het laatste werkwoord komt het <b>Nachfeld</b>. Daar mogen: vergelijkingen met <i>als/wie</i> (<i>Er ist schneller gelaufen <b>als ich</b></i>), bijzinnen, en in gesproken Duits ook lange voorzetselgroepen: <i>Ich habe lange gewartet <b>auf diesen Moment</b>.</i> Dat heet <b>Ausklammerung</b> en maakt de zin lichter.</p>
<p><b>Uitzondering:</b> is het lijdend voorwerp een voornaamwoord en het meewerkend voorwerp een naamwoord, dan draait de volgorde om: <i>Ich gebe <b>es dem Kollegen</b></i> (4e vóór 3e). <b>Waarom?</b> De regel «kort vóór lang» gaat boven de regel «3e vóór 4e»: onbeklemtoonde voornaamwoorden kruipen altijd zo dicht mogelijk tegen het werkwoord aan.</p>`,
        table: [['regel', 'voorbeeld'], ['voornaamwoorden: 4e – 3e', 'Ich schicke es dir morgen.'], ['naamwoorden: 3e – 4e', 'Ich schicke der Chefin den Bericht.'], ['te-ka-mo-lo', 'Er kam heute wegen des Staus zu spät ins Büro.'], ['Nachfeld: vergelijking', 'Das hat länger gedauert als geplant.'], ['Ausklammerung', 'Ich habe mich gefreut über deinen Brief.']],
        ex: [['Sie hat es mir gestern erst gesagt.', 'Ze heeft het me gisteren pas gezegd.'], ['Wir sind am Samstag trotz des Regens zu Fuß in die Stadt gegangen.', 'We zijn zaterdag ondanks de regen te voet naar de stad gegaan.'], ['Er hat mehr gearbeitet als alle anderen.', 'Hij heeft meer gewerkt dan alle anderen.']] }
    ],
    dialogue: {
      t: 'Im Schreibkurs', place: 'Leipzig 🇩🇪',
      lines: [
        ['Frau Lindner', 'Herr Bakker, Ihr Text ist gut, aber fast jeder Satz beginnt mit «Es». Lesen Sie mal den ersten.', 'Meneer Bakker, uw tekst is goed, maar bijna elke zin begint met «Es». Leest u de eerste eens.'],
        ['Herr Bakker', '«Es haben gestern viele Leute an der Demonstration teilgenommen.»', '«Er hebben gisteren veel mensen aan de demonstratie deelgenomen.»'],
        ['Frau Lindner', 'Grammatisch richtig. Aber was ist Ihnen wichtig? Stellen Sie das nach vorn oder ans Ende.', 'Grammaticaal juist. Maar wat is voor u belangrijk? Zet dat vooraan of aan het einde.'],
        ['Herr Bakker', '«Gestern haben viele Leute an der Demonstration teilgenommen.» Dann fällt das «es» weg?', '«Gisteren hebben veel mensen aan de demonstratie deelgenomen.» Dan valt «es» weg?'],
        ['Frau Lindner', 'Genau, es war ja nur ein Platzhalter. Aber bei «Es regnete» bleibt es: «Gestern regnete es.»', 'Precies, het was immers alleen een plaatshouder. Maar bij «Es regnete» blijft het: «Gestern regnete es.»'],
        ['Herr Bakker', 'Und hier? «Ich habe dem Bürgermeister es gesagt.»', 'En hier? «Ich habe dem Bürgermeister es gesagt.»'],
        ['Frau Lindner', 'Das klingt falsch. Kurze Pronomen kommen zuerst: «Ich habe es dem Bürgermeister gesagt.»', 'Dat klinkt fout. Korte voornaamwoorden komen eerst: «Ich habe es dem Bürgermeister gesagt.»'],
        ['Herr Bakker', 'Kurz vor lang. Das ist ja einfacher, als ich gedacht habe.', 'Kort vóór lang. Dat is toch eenvoudiger dan ik dacht.'],
        ['Frau Lindner', 'Sehen Sie, und «als ich gedacht habe» steht ganz richtig im Nachfeld.', 'Ziet u, en «als ich gedacht habe» staat helemaal juist in het achterveld.']
      ],
      q: [
        { t: 'mc', q: 'Was ist das Problem in Herrn Bakkers Text?', o: ['Fast jeder Satz beginnt mit «Es»', 'Die Sätze sind zu kurz', 'Es fehlen die Verben'] },
        { t: 'mc', q: 'Wann bleibt «es» auch im Satzinneren?', o: ['Bei «Es regnete» (festes es)', 'Bei «Es kamen viele Leute»', 'Nie'] },
        { t: 'mc', q: 'Welche Regel nennt Herr Bakker?', o: ['Kurz vor lang', 'Lang vor kurz', 'Dativ vor Akkusativ'] }
      ]
    },
    culture: { t: 'De langste woorden en de liefde voor de komma', html: `<p>📏 Het Duits staat bekend om zijn lange woorden. Het langste dat ooit in gebruik was, een wet uit Mecklenburg-Vorpommern: <i>Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz</i> (63 letters). Het is in 2013 afgeschaft. In het dagelijks leven kort men alles juist af: <i>Kita</i> (Kindertagesstätte), <i>Azubi</i>, <i>Kripo</i>, <i>BAföG</i>.</p>
<p>Over spelling en komma’s wordt hartstochtelijk gestreden. De <b>Rechtschreibreform</b> van 1996 (onder meer <i>daß → dass</i>) leidde tot rechtszaken en kranten die jarenlang weigerden mee te doen. De norm staat in de <b>Duden</b>, het gele woordenboek dat in elk kantoor ligt.</p>
<p>En de komma? Anders dan in het Nederlands is hij <b>verplicht</b> vóór elke bijzin. Het klassieke grapje: <i>«Komm, wir essen, Opa!»</i> tegenover <i>«Komm, wir essen Opa!»</i> Komma’s redden levens.</p>` },
    ex: [
      { t: 'cloze', s: 'Es ___ viele Leute. (kommen, verleden tijd)', a: ['kamen'], o: ['kamen', 'kam', 'kommt'], nl: 'Er kwamen veel mensen.', x: 'Uitzondering: het werkwoord richt zich naar het echte onderwerp (viele Leute), niet naar es. Reden: es is alleen een plaatshouder.', tag: 'de-es' },
      { t: 'cloze', s: 'Es wurde viel gelacht. → Gestern ___ viel gelacht.', a: ['wurde'], o: ['wurde', 'wurde es', 'es wurde'], nl: 'Gisteren werd er veel gelachen.', x: 'De plaatshouder es verdwijnt zodra iets anders vooraan staat.', tag: 'de-es' },
      { t: 'cloze', s: 'Heute regnet ___.', a: ['es'], o: ['es', 'er', 'das'], nl: 'Vandaag regent het.', x: 'Bij weerwerkwoorden is es een vast onderdeel en blijft het altijd.', tag: 'de-es' },
      { t: 'cloze', s: 'In diesem Text geht ___ um den Satzbau.', a: ['es'], o: ['es', 'er', 'man'], nl: 'In deze tekst gaat het om de zinsbouw.', tag: 'de-es' },
      { t: 'cloze', s: 'Ich habe ___ gestern gegeben. (het / aan hem)', a: ['es ihm'], o: ['es ihm', 'ihm es', 'ihm das es'], nl: 'Ik heb het hem gisteren gegeven.', tag: 'de-mittelfeld' },
      { t: 'cloze', s: 'Ich gebe ___ den Bericht. (aan de cheffin)', a: ['der Chefin'], o: ['der Chefin', 'die Chefin', 'zu der Chefin'], nl: 'Ik geef de cheffin het rapport.', tag: 'de-mittelfeld' },
      { t: 'cloze', s: 'Er ist schneller gelaufen ___ ich.', a: ['als'], o: ['als', 'wie', 'dann'], nl: 'Hij heeft sneller gelopen dan ik.', x: 'De vergelijking staat in het achterveld, ná het deelwoord.', tag: 'de-mittelfeld' },
      { t: 'mc', q: 'Welke volgorde is het meest natuurlijk?', o: ['Ich bin gestern wegen des Streiks mit dem Auto nach Köln gefahren.', 'Ich bin nach Köln mit dem Auto wegen des Streiks gestern gefahren.', 'Ich bin mit dem Auto nach Köln gestern wegen des Streiks gefahren.'], x: 'Vuistregel te-ka-mo-lo: tijd, reden, manier, plaats.', tag: 'de-mittelfeld' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ich gebe es dem Kollegen.', 'Ich gebe dem Kollegen es.', 'Ich gebe dem Kollegen ihn es.'], x: 'Uitzondering op «3e vóór 4e»: een voornaamwoord gaat altijd vóór een naamwoord. Reden: kort vóór lang gaat boven de naamvalsvolgorde.', tag: 'de-mittelfeld' },
      { t: 'mc', q: 'Wat betekent «ausgerechnet heute»?', o: ['uitgerekend vandaag', 'uitgerekend door vandaag', 'vandaag berekend'], tag: 'de-vok' },
      { t: 'tr', nl: 'Het is me gelukt.', a: ['Es ist mir gelungen.', 'Mir ist es gelungen.'], tag: 'de-es' },
      { t: 'tr', nl: 'Dat hangt van het weer af.', a: ['Das kommt auf das Wetter an.', 'Es kommt auf das Wetter an.', 'Das hängt vom Wetter ab.'], tag: 'de-es' },
      { t: 'tr', nl: 'Ze heeft het me gisteren gezegd.', a: ['Sie hat es mir gestern gesagt.'], tag: 'de-mittelfeld' },
      { t: 'order', s: 'Wir sind am Samstag trotz des Regens zu Fuß in die Stadt gegangen.', nl: 'We zijn zaterdag ondanks de regen te voet naar de stad gegaan.', tag: 'de-mittelfeld' },
      { t: 'match', p: [['übrigens', 'overigens'], ['lediglich', 'slechts'], ['keineswegs', 'geenszins'], ['zumindest', 'tenminste'], ['durchaus', 'zeer zeker']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Ein Satz ist wie ein Regal', type: 'Uit een schrijfgids',
      p: [
        ['Der deutsche Satz ist wie ein Regal mit festen Fächern. Ganz vorn steht genau ein Element, danach das Verb, und am Ende warten die übrigen Verbteile. Dazwischen liegt das Mittelfeld, und hier entscheidet sich, ob ein Satz elegant oder schwerfällig klingt.', 'De Duitse zin is als een kast met vaste vakken. Helemaal vooraan staat precies één element, daarna het werkwoord, en aan het einde wachten de overige werkwoordsdelen. Daartussen ligt het middenveld, en hier wordt beslist of een zin elegant of log klinkt.'],
        ['Es gilt eine einfache Regel: Bekanntes steht links, Neues rechts. Vergleichen Sie: «Ich habe meiner Schwester ein Buch geschenkt» (neu ist das Buch) und «Ich habe das Buch meiner Schwester geschenkt» (neu ist die Schwester). Es lohnt sich, beim Schreiben jeden Satz daraufhin zu prüfen.', 'Er geldt een eenvoudige regel: het bekende staat links, het nieuwe rechts. Vergelijk: «Ich habe meiner Schwester ein Buch geschenkt» (nieuw is het boek) en «Ich habe das Buch meiner Schwester geschenkt» (nieuw is de zus). Het loont om bij het schrijven elke zin daarop te controleren.'],
        ['Wer viel zu sagen hat, sollte das Mittelfeld nicht überladen. Stellen Sie ruhig etwas hinter das Verb: «Wir haben lange diskutiert über diese Frage» ist im Gespräch völlig normal. Und beginnen Sie nicht jeden Satz mit «Es». Meist findet sich etwas Besseres für den ersten Platz.', 'Wie veel te zeggen heeft, moet het middenveld niet overladen. Zet gerust iets achter het werkwoord: «Wir haben lange diskutiert über diese Frage» is in een gesprek volkomen normaal. En begin niet elke zin met «Es». Meestal is er iets beters te vinden voor de eerste plaats.']
      ],
      gl: [['das Regal', 'de kast, het rek'], ['das Fach', 'het vak'], ['schwerfällig', 'log, moeizaam'], ['daraufhin', 'daarop'], ['überladen', 'overladen']],
      q: [
        { t: 'mc', q: 'Womit wird der deutsche Satz verglichen?', o: ['Mit einem Regal mit festen Fächern', 'Mit einem Zug', 'Mit einem Baum'] },
        { t: 'mc', q: 'Welche Regel gilt im Mittelfeld?', o: ['Bekanntes steht links, Neues rechts', 'Neues steht links, Bekanntes rechts', 'Alles ist frei'] },
        { t: 'mc', q: 'Was empfiehlt der Text am Ende?', o: ['Nicht jeden Satz mit «Es» zu beginnen', 'Immer mit «Es» zu beginnen', 'Nie etwas hinter das Verb zu stellen'] }
      ]
    },
    say: [['Es kamen viele Leute.', 'Er kwamen veel mensen.'], ['Ich habe es ihm gestern gesagt.', 'Ik heb het hem gisteren gezegd.'], ['Das hat länger gedauert als geplant.', 'Dat heeft langer geduurd dan gepland.']],
    task: { nl: 'Schrijf 5 zinnen over wat je gisteren hebt gedaan. Begin geen enkele zin met ich of es, gebruik één keer twee voornaamwoorden achter elkaar (es ihm, sie mir) en één keer de volgorde tijd, reden, manier, plaats.', model: 'Gestern bin ich wegen des schönen Wetters mit dem Rad ins Büro gefahren. Dort wartete schon meine Kollegin mit einem Bericht. Sie hat ihn mir sofort gegeben. Am Nachmittag wurde lange über die Zahlen diskutiert. Abends hat es dann doch noch geregnet.' },
    scenario: { nl: 'Je volgt een schrijfcursus Duits en bespreekt je tekst met de docente.', role: 'Frau Lindner, een docente die van heldere zinnen houdt en alles met voorbeelden uitlegt', goal: 'Lees een zin voor die je lastig vond, vraag waar een zinsdeel hoort en formuleer de zin opnieuw met een andere volgorde.' }
  });

  /* ───────────────────────── C1 · 10 ───────────────────────── */
  U({
    id: 'de-c1-10', level: 'C1', icon: '🐖', title: 'Redewendungen', nl: 'Uitdrukkingen: Schwein gehabt!',
    goals: ['Veelgebruikte uitdrukkingen begrijpen en zelf gebruiken', 'Valkuilen herkennen waar Nederlands en Duits net verschillen', 'Formele voorzetsels gebruiken (angesichts, anlässlich, hinsichtlich)', 'Een toespraakje of formele uitnodiging begrijpen'],
    vocab: [
      ['Schwein haben', 'geluk hebben'], ['die Daumen drücken', 'duimen (voor iemand)'], ['jemandem auf die Nerven gehen', 'op iemands zenuwen werken'], ['den Nagel auf den Kopf treffen', 'de spijker op de kop slaan'], ['ins Fettnäpfchen treten', 'een flater slaan'],
      ['etwas auf die lange Bank schieben', 'iets op de lange baan schuiven'], ['unter vier Augen', 'onder vier ogen'], ['aus allen Wolken fallen', 'uit de lucht komen vallen (van verbazing)'], ['jemanden auf den Arm nehmen', 'iemand voor de gek houden'], ['Das ist mir Wurst.', 'Dat kan me niets schelen.'],
      ['Ich verstehe nur Bahnhof.', 'Ik begrijp er niets van.'], ['Da liegt der Hund begraben.', 'Daar zit het probleem.'], ['die Nase voll haben', 'er genoeg van hebben'], ['zwei Fliegen mit einer Klappe schlagen', 'twee vliegen in één klap slaan'], ['auf dem Holzweg sein', 'op het verkeerde spoor zitten'],
      ['Tomaten auf den Augen haben', 'iets niet zien wat duidelijk is'], ['etwas durch die Blume sagen', 'iets voorzichtig, verbloemd zeggen'], ['im Stich lassen', 'in de steek laten'], ['Hals- und Beinbruch!', 'Succes! (toi toi toi)'], ['einen Kater haben', 'een kater hebben'],
      ['angesichts', 'gezien, in het licht van'], ['anlässlich', 'ter gelegenheid van'], ['hinsichtlich', 'met betrekking tot'], ['zugunsten', 'ten gunste van'], ['ungeachtet', 'ongeacht'], ['die Redewendung', 'de uitdrukking']
    ],
    grammar: [
      { t: 'Uitdrukkingen: bijna hetzelfde, net anders', es: 'Redewendungen und ihre Tücken',
        html: `<p>Nederlands en Duits delen honderden uitdrukkingen. Dat is een voordeel én een val: vaak verschilt precies <b>één woord</b>, een lidwoord of een voorzetsel.</p>
<p><b>Gelijk:</b> <i>zwei Fliegen mit einer Klappe schlagen · den Nagel auf den Kopf treffen · im Stich lassen · unter vier Augen</i></p>
<p><b>Net anders:</b> <i>etwas auf die lange <b>Bank</b> schieben</i> (NL: baan) · <i>jemandem die <b>Daumen drücken</b></i> (NL: duimen) · <i>aus allen <b>Wolken</b> fallen</i> = stomverbaasd zijn (NL: uit de lucht vallen = onverwacht opduiken) · <i>jemanden <b>auf den Arm</b> nehmen</i> = voor de gek houden (niet: op de arm nemen)</p>
<p><b>Alleen Duits:</b> <i>Schwein haben</i> (geluk hebben) · <i>Das ist mir Wurst</i> · <i>Ich verstehe nur Bahnhof</i> · <i>ins Fettnäpfchen treten</i> · <i>Tomaten auf den Augen haben</i></p>
<p>Een uitdrukking is <b>versteend</b>: je mag er geen woord in vervangen, geen lidwoord veranderen en hem meestal niet in het passief zetten. Wel vervoeg je het werkwoord gewoon: <i>Da <b>hast</b> du aber Schwein <b>gehabt</b>!</i></p>
<p><b>Uitzondering:</b> in <i>Das ist mir Wurst</i> en <i>Schwein haben</i> staat het naamwoord <b>zonder lidwoord</b>, terwijl een telbaar naamwoord in het enkelvoud normaal een lidwoord nodig heeft. <b>Waarom?</b> In vaste verbindingen gedraagt het naamwoord zich als deel van het gezegde, niet als los ding; hetzelfde zie je in <i>Auto fahren</i> en <i>Klavier spielen</i>.</p>`,
        table: [['Duits', 'letterlijk', 'betekenis'], ['Schwein haben', 'varken hebben', 'geluk hebben'], ['nur Bahnhof verstehen', 'alleen station begrijpen', 'er niets van snappen'], ['Das ist mir Wurst.', 'dat is mij worst', 'het kan me niet schelen'], ['ins Fettnäpfchen treten', 'in het vetpotje trappen', 'een flater slaan'], ['auf dem Holzweg sein', 'op de houtweg zijn', 'het mis hebben'], ['die Daumen drücken', 'de duimen drukken', 'duimen']],
        sum: 'Schwein gehabt! Ich drücke dir die Daumen. Das ist mir Wurst.',
        ex: [['Ich drücke dir für die Prüfung die Daumen!', 'Ik duim voor je bij het examen!'], ['Da bist du aber auf dem Holzweg.', 'Daar zit je er toch echt naast.'], ['Entschuldigung, ich verstehe nur Bahnhof.', 'Sorry, ik begrijp er niets van.']] },
      { t: 'Angesichts, anlässlich, hinsichtlich', es: 'Präpositionen der gehobenen Sprache',
        html: `<p>In toespraken, uitnodigingen en officiële brieven kom je een groep deftige voorzetsels tegen. Ze krijgen bijna allemaal de <b>tweede naamval</b>:</p>
<p><b>angesichts</b> (gezien): <i>angesichts der Lage</i> · <b>anlässlich</b> (ter gelegenheid van): <i>anlässlich des Jubiläums</i> · <b>hinsichtlich / bezüglich</b> (met betrekking tot): <i>hinsichtlich Ihrer Anfrage</i> · <b>zugunsten</b> (ten gunste van) · <b>ungeachtet</b> (ongeacht) · <b>mangels</b> (bij gebrek aan) · <b>seitens</b> (van de kant van) · <b>anstelle</b> (in plaats van) · <b>um … willen</b> (omwille van): <i>um des Friedens willen</i></p>
<p>Met de <b>derde naamval</b>: <b>gemäß</b> (overeenkomstig), <b>entsprechend</b> (overeenkomstig), <b>zuliebe</b> (ter wille van, achter het naamwoord: <i>dir zuliebe</i>), <b>gegenüber</b>.</p>
<p>In een gewoon gesprek klinken ze stijf. Daar zeg je <i>wegen, zu, für, über</i>.</p>
<p><b>Uitzondering:</b> sommige van deze voorzetsels staan <b>achter</b> het naamwoord in plaats van ervoor: <i>meiner Meinung <b>nach</b>, dir <b>zuliebe</b>, dem Bericht <b>zufolge</b>, den Regeln <b>entsprechend</b></i>. <b>Waarom?</b> Het zijn van oorsprong bijwoorden of werkwoordsvormen die pas later als voorzetsel zijn gaan werken; ze hebben hun oude plaats achter het naamwoord gehouden.</p>`,
        table: [['voorzetsel', 'naamval', 'voorbeeld'], ['angesichts', '2', 'angesichts der Kosten'], ['anlässlich', '2', 'anlässlich seines 60. Geburtstags'], ['hinsichtlich', '2', 'hinsichtlich der Termine'], ['zugunsten', '2', 'zugunsten der Kinder'], ['ungeachtet', '2', 'ungeachtet aller Kritik'], ['gemäß', '3', 'gemäß dem Vertrag'], ['zuliebe', '3, erachter', 'den Kindern zuliebe']],
        ex: [['Anlässlich des Firmenjubiläums laden wir Sie herzlich ein.', 'Ter gelegenheid van het bedrijfsjubileum nodigen wij u hartelijk uit.'], ['Angesichts der Lage müssen wir sparen.', 'Gezien de situatie moeten we bezuinigen.'], ['Dir zuliebe bleibe ich noch eine Stunde.', 'Voor jou blijf ik nog een uur.']] }
    ],
    dialogue: {
      t: 'Auf der Betriebsfeier', place: 'Nürnberg 🇩🇪',
      lines: [
        ['Anna', 'Uff, ich glaube, ich bin gerade ins Fettnäpfchen getreten.', 'Oef, ik geloof dat ik net een flater heb geslagen.'],
        ['Markus', 'Was hast du denn gemacht?', 'Wat heb je dan gedaan?'],
        ['Anna', 'Ich habe die Frau vom Chef gefragt, wann das Baby kommt. Sie ist gar nicht schwanger.', 'Ik heb de vrouw van de baas gevraagd wanneer de baby komt. Ze is helemaal niet zwanger.'],
        ['Markus', 'Oh nein! Da bist du ja aus allen Wolken gefallen.', 'O nee! Toen stond je vast perplex.'],
        ['Anna', 'Sie auch. Und dann wollte ich einen Witz machen, aber sie hat nur Bahnhof verstanden.', 'Zij ook. En toen wilde ik een grap maken, maar ze begreep er niets van.'],
        ['Markus', 'Mach dir nichts draus. Der Chef hat heute so gute Laune, dem ist alles Wurst.', 'Trek het je niet aan. De baas is vandaag zo goedgehumeurd, die kan alles niets schelen.'],
        ['Anna', 'Meinst du? Ich habe morgen mein Gespräch wegen der Gehaltserhöhung.', 'Denk je? Ik heb morgen mijn gesprek over de salarisverhoging.'],
        ['Markus', 'Dann drücke ich dir die Daumen. Und sag es ihm unter vier Augen, nicht durch die Blume.', 'Dan duim ik voor je. En zeg het hem onder vier ogen, niet verbloemd.'],
        ['Anna', 'Wenn das klappt, habe ich wirklich Schwein gehabt.', 'Als dat lukt, heb ik echt geluk gehad.']
      ],
      q: [
        { t: 'mc', q: 'Was ist Anna passiert?', o: ['Sie ist ins Fettnäpfchen getreten', 'Sie hat Schwein gehabt', 'Sie hat einen Kater'] },
        { t: 'mc', q: 'Was bedeutet «Dem ist alles Wurst»?', o: ['Ihm ist alles egal', 'Er isst gern Wurst', 'Er ist wütend'] },
        { t: 'mc', q: 'Was hat Anna morgen?', o: ['Ein Gespräch wegen der Gehaltserhöhung', 'Eine Prüfung', 'Einen freien Tag'] }
      ]
    },
    culture: { t: 'Waarom zoveel varkens en worsten?', html: `<p>🐖 Het varken is in het Duits een <b>geluksdier</b>. Met oud en nieuw geef je elkaar een marsepeinen <i>Glücksschwein</i>, en <i>Schwein gehabt!</i> betekent dat je door het oog van de naald bent gekropen. De herkomst is omstreden; mogelijk kreeg de verliezer van een middeleeuws schietfeest als troostprijs een varken.</p>
<p>🌭 De worst is overal: <i>Das ist mir Wurst</i> (zuidelijk: <i>Wurscht</i>), <i>Es geht um die Wurst</i> (het is erop of eronder), <i>eine Extrawurst kriegen</i> (een voorkeursbehandeling krijgen), <i>die beleidigte Leberwurst spielen</i> (de beledigde uithangen).</p>
<p>En <i>Ich verstehe nur Bahnhof</i>? Soldaten in de Eerste Wereldoorlog wilden maar één woord horen: <i>Bahnhof</i>, want dat betekende naar huis. Al het andere ging het ene oor in en het andere uit.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich drücke dir die ___!', a: ['Daumen'], o: ['Daumen', 'Finger', 'Hände'], nl: 'Ik duim voor je!', tag: 'de-idiom' },
      { t: 'cloze', s: 'Da hast du aber ___ gehabt!', a: ['Schwein'], o: ['Schwein', 'Kuh', 'Hund'], nl: 'Daar heb je toch geluk gehad!', x: 'Uitzondering: Schwein staat hier zonder lidwoord. Reden: in vaste verbindingen is het naamwoord deel van het gezegde (vgl. Auto fahren).', tag: 'de-idiom' },
      { t: 'cloze', s: 'Ich verstehe nur ___.', a: ['Bahnhof'], o: ['Bahnhof', 'Flughafen', 'Zug'], nl: 'Ik begrijp er niets van.', tag: 'de-idiom' },
      { t: 'cloze', s: 'Wir schieben das nicht auf die lange ___.', a: ['Bank'], o: ['Bank', 'Bahn', 'Straße'], nl: 'We schuiven dat niet op de lange baan.', x: 'Net anders dan in het Nederlands: Bank, niet Bahn.', tag: 'de-idiom' },
      { t: 'cloze', s: '___ des Jubiläums laden wir Sie ein.', a: ['Anlässlich'], o: ['Anlässlich', 'Angesichts', 'Ungeachtet'], nl: 'Ter gelegenheid van het jubileum nodigen wij u uit.', tag: 'de-genprep-c1' },
      { t: 'cloze', s: 'Angesichts ___ Lage müssen wir sparen.', a: ['der'], o: ['der', 'die', 'den'], nl: 'Gezien de situatie moeten we bezuinigen.', tag: 'de-genprep-c1' },
      { t: 'cloze', s: 'Dir ___ bleibe ich noch eine Stunde.', a: ['zuliebe'], o: ['zuliebe', 'zugunsten', 'anlässlich'], nl: 'Voor jou blijf ik nog een uur.', x: 'Uitzondering: zuliebe staat achter het naamwoord, met de derde naamval. Reden: het is van oorsprong een bijwoord dat zijn oude plaats heeft gehouden.', tag: 'de-genprep-c1' },
      { t: 'mc', q: 'Wat betekent «jemanden auf den Arm nehmen»?', o: ['iemand voor de gek houden', 'iemand op de arm dragen', 'iemand helpen'], tag: 'de-idiom' },
      { t: 'mc', q: 'Wat betekent «Ich bin aus allen Wolken gefallen»?', o: ['Ik was stomverbaasd.', 'Ik kwam onverwacht langs.', 'Ik ben gevallen.'], x: 'Valkuil: Nederlands «uit de lucht komen vallen» betekent iets anders (onverwacht opduiken).', tag: 'de-idiom' },
      { t: 'mc', q: 'Welke naamval krijgt «gemäß»?', o: ['de derde naamval', 'de tweede naamval', 'de vierde naamval'], tag: 'de-genprep-c1' },
      { t: 'tr', nl: 'Dat kan me niets schelen. (met Wurst)', a: ['Das ist mir Wurst.', 'Das ist mir wurst.'], tag: 'de-idiom' },
      { t: 'tr', nl: 'Kunnen we onder vier ogen praten?', a: ['Können wir unter vier Augen sprechen?', 'Können wir unter vier Augen reden?'], tag: 'de-idiom' },
      { t: 'tr', nl: 'met betrekking tot uw vraag', a: ['hinsichtlich Ihrer Frage', 'hinsichtlich Ihrer Anfrage', 'bezüglich Ihrer Frage', 'bezüglich Ihrer Anfrage'], tag: 'de-genprep-c1' },
      { t: 'order', s: 'Da bist du aber auf dem Holzweg.', nl: 'Daar zit je er toch echt naast.', tag: 'de-idiom' },
      { t: 'match', p: [['Schwein haben', 'geluk hebben'], ['die Nase voll haben', 'er genoeg van hebben'], ['im Stich lassen', 'in de steek laten'], ['einen Kater haben', 'een kater hebben'], ['ungeachtet', 'ongeacht']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Rede zum 25-jährigen Firmenjubiläum', type: 'Toespraak',
      p: [
        ['Liebe Kolleginnen und Kollegen, anlässlich unseres 25-jährigen Jubiläums möchte ich ein paar Worte sagen, und ich verspreche, es kurz zu machen. Als wir 1999 in einer Garage angefangen haben, hat uns die Bank erklärt, wir seien auf dem Holzweg. Wir haben trotzdem weitergemacht.', 'Beste collega’s, ter gelegenheid van ons 25-jarig jubileum wil ik een paar woorden zeggen, en ik beloof het kort te houden. Toen we in 1999 in een garage begonnen, heeft de bank ons uitgelegd dat we op het verkeerde spoor zaten. We zijn toch doorgegaan.'],
        ['Es gab Jahre, in denen wir die Nase voll hatten. 2009 ging es um die Wurst: Wir hatten Aufträge für genau drei Wochen. Dass ausgerechnet dann der große Kunde aus Rotterdam anrief, war nicht Können, da haben wir schlicht Schwein gehabt. Aber niemand von Ihnen hat uns in dieser Zeit im Stich gelassen.', 'Er waren jaren waarin we er genoeg van hadden. In 2009 was het erop of eronder: we hadden opdrachten voor precies drie weken. Dat uitgerekend toen de grote klant uit Rotterdam belde, was geen kunde, daar hebben we gewoon geluk gehad. Maar niemand van u heeft ons in die tijd in de steek gelaten.'],
        ['Angesichts der aktuellen Lage will ich nichts durch die Blume sagen: Die nächsten Jahre werden nicht einfach. Ungeachtet aller Schwierigkeiten bin ich aber überzeugt, dass wir es schaffen. Hinsichtlich des Buffets habe ich nur eine Bitte: Lassen Sie mir etwas übrig. Auf die nächsten 25 Jahre!', 'Gezien de huidige situatie wil ik niets verbloemen: de komende jaren worden niet makkelijk. Ongeacht alle moeilijkheden ben ik er echter van overtuigd dat we het redden. Met betrekking tot het buffet heb ik maar één verzoek: laat iets voor me over. Op de volgende 25 jaar!']
      ],
      gl: [['das Jubiläum', 'het jubileum'], ['der Auftrag', 'de opdracht'], ['das Können', 'de kunde, het kunnen'], ['schlicht', 'gewoonweg'], ['es schaffen', 'het redden']],
      q: [
        { t: 'mc', q: 'Was sagte die Bank 1999?', o: ['Die Gründer seien auf dem Holzweg', 'Die Idee sei genial', 'Sie gebe gern Geld'] },
        { t: 'mc', q: 'Was passierte 2009?', o: ['Ein großer Kunde aus Rotterdam rief an', 'Die Firma zog nach Rotterdam', 'Alle Mitarbeiter gingen'] },
        { t: 'mc', q: 'Was bedeutet «nichts durch die Blume sagen»?', o: ['Offen und direkt sprechen', 'Blumen verschenken', 'Nichts sagen'] }
      ]
    },
    say: [['Ich drücke dir die Daumen!', 'Ik duim voor je!'], ['Da hast du aber Schwein gehabt!', 'Daar heb je toch geluk gehad!'], ['Entschuldigung, ich verstehe nur Bahnhof.', 'Sorry, ik begrijp er niets van.']],
    task: { nl: 'Schrijf een kort toespraakje (5 zinnen) voor een verjaardag, jubileum of afscheid. Gebruik drie uitdrukkingen en twee formele voorzetsels (anlässlich, angesichts, hinsichtlich, ungeachtet).', model: 'Liebe Petra, anlässlich deines Abschieds möchte ich dir danken. Du hast uns nie im Stich gelassen, auch wenn wir dir manchmal auf die Nerven gegangen sind. Ungeachtet aller Probleme hast du immer den Nagel auf den Kopf getroffen. Mit dir als Kollegin haben wir wirklich Schwein gehabt. Für deine neue Stelle drücken wir dir alle die Daumen!' },
    scenario: { nl: 'Je bent op een Duits bedrijfsfeest en hebt net iets doms gezegd tegen de vrouw van de baas. Je vertelt het aan een collega.', role: 'Markus, een nuchtere collega uit Neurenberg die in spreekwoorden praat', goal: 'Vertel wat er gebeurd is (ins Fettnäpfchen treten), vraag wat je moet doen en gebruik zelf minstens twee uitdrukkingen.' }
  });
})(window.SPT);
