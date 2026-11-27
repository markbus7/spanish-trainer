/* Duits voor Nederlandstaligen — niveau B2, units 1–5 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-konj2verg': 'Konjunktiv II verleden (hätte gemacht, wäre gegangen)', 'de-wunsch': 'onvervulbare wens (Wenn ich nur …!)', 'de-konj1': 'indirecte rede met Konjunktiv I (er habe, sie sei)',
    'de-konj1-ersatz': 'indirecte rede: vervangvorm (sie hätten, würden)', 'de-passivmodal': 'lijdende vorm met modaal werkwoord (muss gemacht werden)', 'de-passiversatz': 'alternatieven voor de lijdende vorm (lässt sich, ist zu, -bar)',
    'de-doppel': 'tweedelige voegwoorden (sowohl … als auch, weder … noch)', 'de-konnektor': 'verbindingswoorden (deshalb, trotzdem, sodass, dennoch)', 'de-part1': 'tegenwoordig deelwoord (steigend, lachend)', 'de-partadj': 'deelwoord als bijvoeglijk naamwoord (das renovierte Haus)'
  });

  /* ───────────────────────── B2 · 1 ───────────────────────── */
  U({
    id: 'de-b2-01', level: 'B2', icon: '💼', title: 'Bewerbung und Karriere', nl: 'Solliciteren: had ik maar …',
    goals: ['Over loopbaan, sollicitatie en gemiste kansen praten', 'Zeggen wat je anders had gedaan (hätte gemacht, wäre gegangen)', 'Spijt en onvervulbare wensen uitdrukken', 'Een sollicitatiegesprek voeren'],
    vocab: [
      ['die Bewerbung', 'de sollicitatie'], ['sich bewerben um', 'solliciteren naar'], ['der Lebenslauf', 'het cv'], ['das Anschreiben', 'de sollicitatiebrief'], ['das Vorstellungsgespräch', 'het sollicitatiegesprek'],
      ['die Stelle', 'de baan, de vacature'], ['die Stellenanzeige', 'de vacaturetekst'], ['die Berufserfahrung', 'de werkervaring'], ['die Stärke', 'de sterke kant'], ['die Schwäche', 'de zwakke kant'],
      ['die Probezeit', 'de proeftijd'], ['das Gehalt', 'het salaris'], ['die Gehaltsvorstellung', 'de salariswens'], ['die Beförderung', 'de promotie'], ['kündigen', 'ontslag nemen, opzeggen'],
      ['die Absage', 'de afwijzing'], ['die Zusage', 'de toezegging'], ['die Weiterbildung', 'de bijscholing'], ['der Arbeitgeber', 'de werkgever'], ['der Arbeitnehmer', 'de werknemer'],
      ['die Herausforderung', 'de uitdaging'], ['die Verantwortung', 'de verantwoordelijkheid'], ['bereuen', 'spijt hebben van'], ['verpassen', 'missen (kans, trein)'], ['zuverlässig', 'betrouwbaar'], ['beinahe', 'bijna']
    ],
    grammar: [
      { t: 'Had gedaan, was gegaan: de Konjunktiv II van het verleden', es: 'Konjunktiv II der Vergangenheit',
        html: `<p>Voor iets wat in het verleden <b>niet</b> gebeurd is maar had kunnen gebeuren, gebruik je <b>hätte</b> of <b>wäre</b> + voltooid deelwoord: <i>Ich <b>hätte</b> mehr <b>gelernt</b>. Ich <b>wäre</b> früher <b>gegangen</b>.</i></p>
<p>Je kiest <i>hätte</i> of <i>wäre</i> precies zoals <i>haben</i> of <i>sein</i> in het Perfekt. Er is maar <b>één</b> verleden vorm: het Nederlandse <i>zou hebben gedaan</i> én <i>had gedaan</i> zijn allebei <i>hätte gemacht</i>.</p>
<p>In een <b>wenn-zin</b> staat de vorm in beide delen: <i>Wenn ich das <b>gewusst hätte</b>, <b>wäre</b> ich nicht <b>gekommen</b>.</i> Je mag <i>wenn</i> weglaten; dan begint de zin met het werkwoord: <i><b>Hätte</b> ich das gewusst, …</i></p>
<p><b>Uitzondering:</b> met een modaal werkwoord staan er twee hele werkwoorden aan het einde, en <i>hätte</i> staat in de bijzin er <b>vóór</b>: <i>…, dass ich das <b>hätte machen sollen</b></i>. <b>Waarom?</b> Na een heel werkwoord wordt het deelwoord van een modaal werkwoord zelf een heel werkwoord (<i>sollen</i> in plaats van <i>gesollt</i>); bij zo’n dubbele infinitief schuift de persoonsvorm naar voren.</p>`,
        table: [['', 'vorm', 'Nederlands'], ['haben-werkwoord', 'ich hätte gefragt', 'ik had gevraagd / zou hebben gevraagd'], ['sein-werkwoord', 'ich wäre geblieben', 'ik was gebleven / zou zijn gebleven'], ['met modaal ww.', 'ich hätte fragen sollen', 'ik had moeten vragen'], ['zonder wenn', 'Hätte ich nur gefragt!', 'Had ik maar gevraagd!']],
        sum: 'Ich hätte es gemacht. Ich wäre gekommen. Das hättest du sagen sollen.',
        ex: [['Wenn ich mich früher beworben hätte, hätte ich die Stelle bekommen.', 'Als ik eerder had gesolliciteerd, had ik de baan gekregen.'], ['Du hättest mich anrufen können.', 'Je had me kunnen bellen.'], ['An deiner Stelle wäre ich geblieben.', 'In jouw plaats was ik gebleven.']] },
      { t: 'Had ik maar …! Onvervulbare wensen', es: 'Irreale Wunschsätze',
        html: `<p>Spijt en wensen die niet (meer) kunnen uitkomen, zeg je met <b>Wenn … nur / doch</b> + Konjunktiv II, of zonder <i>wenn</i> met het werkwoord vooraan:</p>
<p><i><b>Wenn</b> ich <b>nur</b> mehr Zeit <b>hätte</b>!</i> (nu) · <i><b>Hätte</b> ich <b>doch</b> nichts <b>gesagt</b>!</i> (verleden)</p>
<p>De woordjes <b>nur, doch, bloß</b> zijn hier verplicht: ze maken van de zin een wens. Zonder zo’n woordje is het een onafgemaakte voorwaarde.</p>
<p>Voor iets wat nét niet gebeurd is, gebruik je <b>fast</b> of <b>beinahe</b> + Konjunktiv II verleden: <i>Ich <b>hätte</b> den Termin <b>beinahe vergessen</b></i> (ik was de afspraak bijna vergeten).</p>
<p><b>Uitzondering:</b> het Nederlands zegt hier <i>was vergeten</i> (gewone verleden tijd), het Duits <i>hätte vergessen</i>. <b>Waarom?</b> Het is niet echt gebeurd, en alles wat niet echt is, krijgt in het Duits de Konjunktiv II.</p>`,
        table: [['situatie', 'wens'], ['Ich habe keine Erfahrung.', 'Wenn ich nur mehr Erfahrung hätte!'], ['Ich habe gekündigt.', 'Hätte ich bloß nicht gekündigt!'], ['Er ist nicht gekommen.', 'Wäre er doch gekommen!']],
        ex: [['Hätte ich doch Informatik studiert!', 'Had ik maar informatica gestudeerd!'], ['Wenn ich bloß nicht so nervös gewesen wäre!', 'Was ik maar niet zo zenuwachtig geweest!'], ['Ich hätte fast den Zug verpasst.', 'Ik had bijna de trein gemist.']] }
    ],
    dialogue: {
      t: 'Nach dem Vorstellungsgespräch', place: 'Frankfurt 🇩🇪',
      lines: [
        ['Anna', 'Na, wie ist dein Vorstellungsgespräch gelaufen?', 'En, hoe is je sollicitatiegesprek gegaan?'],
        ['Jonas', 'Ehrlich gesagt nicht so gut. Ich hätte mich besser vorbereiten sollen.', 'Eerlijk gezegd niet zo goed. Ik had me beter moeten voorbereiden.'],
        ['Anna', 'Was ist denn passiert?', 'Wat is er dan gebeurd?'],
        ['Jonas', 'Sie haben nach meinen Schwächen gefragt, und mir ist nichts eingefallen. Beinahe hätte ich «Pünktlichkeit» gesagt.', 'Ze vroegen naar mijn zwakke kanten, en ik kon niets bedenken. Ik had bijna «punctualiteit» gezegd.'],
        ['Anna', 'Oje. Und die Gehaltsvorstellung?', 'O jee. En de salariswens?'],
        ['Jonas', 'Da habe ich viel zu wenig genannt. Hätte ich doch vorher im Internet nachgeschaut!', 'Daar heb ik veel te weinig genoemd. Had ik maar eerst op internet gekeken!'],
        ['Anna', 'An deiner Stelle hätte ich einfach nach dem üblichen Gehalt gefragt.', 'In jouw plaats had ik gewoon naar het gebruikelijke salaris gevraagd.'],
        ['Jonas', 'Stimmt. Wenn ich nicht so nervös gewesen wäre, wäre mir das auch eingefallen.', 'Klopt. Als ik niet zo zenuwachtig was geweest, was ik daar ook op gekomen.'],
        ['Anna', 'Warte erst mal ab. Vielleicht bekommst du trotzdem eine Zusage.', 'Wacht eerst maar af. Misschien krijg je toch een toezegging.']
      ],
      q: [
        { t: 'mc', q: 'Was hätte Jonas tun sollen?', o: ['Sich besser vorbereiten', 'Früher kommen', 'Mehr Gehalt nennen als üblich'] },
        { t: 'mc', q: 'Was hätte er beinahe als Schwäche genannt?', o: ['Pünktlichkeit', 'Ungeduld', 'Nervosität'] },
        { t: 'mc', q: 'Was hätte Anna an seiner Stelle gemacht?', o: ['Nach dem üblichen Gehalt gefragt', 'Das Gespräch abgebrochen', 'Gar nichts gesagt'] }
      ]
    },
    culture: { t: 'Solliciteren in Duitsland: de Bewerbungsmappe', html: `<p>Een Duitse sollicitatie is formeler dan een Nederlandse. Verwacht wordt een <b>Anschreiben</b> van precies één pagina, een <b>tabellarischer Lebenslauf</b> (in tabelvorm, nieuwste eerst) en kopieën van je <b>Zeugnisse</b>: diploma’s én getuigschriften van vorige werkgevers.</p>
<p>📄 Dat <b>Arbeitszeugnis</b> is een kunst op zich. Werkgevers mogen niets negatiefs schrijven, dus is er een geheimtaal ontstaan: <i>«stets zu unserer vollsten Zufriedenheit»</i> is een tien, <i>«hat sich bemüht»</i> (heeft zijn best gedaan) betekent dat het niets werd.</p>
<p>Een foto op het cv is niet meer verplicht, maar nog heel gewoon. En je spreekt de mensen aan met <b>Sie</b> en <i>Herr/Frau</i> + achternaam, tot zij iets anders voorstellen.</p>` },
    ex: [
      { t: 'cloze', s: 'Wenn ich das gewusst ___, wäre ich gekommen.', a: ['hätte'], o: ['hätte', 'wäre', 'würde'], nl: 'Als ik dat geweten had, was ik gekomen.', tag: 'de-konj2verg' },
      { t: 'cloze', s: 'An deiner Stelle ___ ich zu Hause geblieben.', a: ['wäre'], o: ['wäre', 'hätte', 'würde'], nl: 'In jouw plaats was ik thuisgebleven.', x: 'bleiben gaat met sein, dus hier wäre.', tag: 'de-konj2verg' },
      { t: 'cloze', s: 'Du hättest mich anrufen ___.', a: ['können'], o: ['können', 'gekonnt', 'könntest'], nl: 'Je had me kunnen bellen.', x: 'Uitzondering: na een heel werkwoord wordt het deelwoord van een modaal werkwoord zelf een heel werkwoord (können, niet gekonnt).', tag: 'de-konj2verg' },
      { t: 'cloze', s: '___ ich doch nichts gesagt!', a: ['Hätte'], o: ['Hätte', 'Wäre', 'Habe'], nl: 'Had ik maar niets gezegd!', tag: 'de-wunsch' },
      { t: 'cloze', s: 'Wenn ich ___ mehr Erfahrung hätte!', a: ['nur'], o: ['nur', 'nie', 'schon'], nl: 'Had ik maar meer ervaring!', tag: 'de-wunsch' },
      { t: 'cloze', s: 'Ich hätte den Termin ___ vergessen.', a: ['beinahe'], o: ['beinahe', 'bloß', 'kaum'], nl: 'Ik was de afspraak bijna vergeten.', tag: 'de-wunsch' },
      { t: 'cloze', s: 'Wäre er doch früher ___!', a: ['gekommen'], o: ['gekommen', 'kommen', 'kam'], nl: 'Was hij maar eerder gekomen!', tag: 'de-wunsch' },
      { t: 'mc', q: 'Hoe zeg je «Ik had moeten vragen»?', o: ['Ich hätte fragen sollen.', 'Ich hatte fragen gesollt.', 'Ich sollte gefragt haben.'], tag: 'de-konj2verg' },
      { t: 'mc', q: 'Welke zin heeft de juiste volgorde?', o: ['Ich weiß, dass ich das hätte sagen sollen.', 'Ich weiß, dass ich das sagen sollen hätte.', 'Ich weiß, dass ich das sagen hätte gesollt.'], x: 'Uitzondering: bij twee hele werkwoorden aan het einde schuift hätte ervoor. Reden: de dubbele infinitief blijft bij elkaar.', tag: 'de-konj2verg' },
      { t: 'mc', q: 'Wat betekent «eine Absage bekommen»?', o: ['afgewezen worden', 'een afspraak krijgen', 'ontslag nemen'], tag: 'de-vok' },
      { t: 'tr', nl: 'Had ik maar meer geleerd!', a: ['Hätte ich doch mehr gelernt!', 'Hätte ich nur mehr gelernt!', 'Hätte ich bloß mehr gelernt!', 'Wenn ich doch mehr gelernt hätte!', 'Wenn ich nur mehr gelernt hätte!'], tag: 'de-wunsch' },
      { t: 'tr', nl: 'Ik had de baan gekregen.', a: ['Ich hätte die Stelle bekommen.'], tag: 'de-konj2verg' },
      { t: 'tr', nl: 'Dat had je moeten zeggen.', a: ['Das hättest du sagen sollen.', 'Du hättest das sagen sollen.', 'Das hättest du sagen müssen.', 'Du hättest das sagen müssen.'], tag: 'de-konj2verg' },
      { t: 'order', s: 'Wenn ich nicht so nervös gewesen wäre, hätte ich besser geantwortet.', nl: 'Als ik niet zo zenuwachtig was geweest, had ik beter geantwoord.', tag: 'de-konj2verg' },
      { t: 'match', p: [['die Bewerbung', 'de sollicitatie'], ['der Lebenslauf', 'het cv'], ['das Gehalt', 'het salaris'], ['kündigen', 'ontslag nemen'], ['die Zusage', 'de toezegging']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Was ich heute anders machen würde', type: 'Column in een loopbaanmagazine',
      p: [
        ['Mit 22 Jahren habe ich meine erste Stelle bei einer Bank angenommen, weil meine Eltern es so wollten. Hätte ich damals auf mein Gefühl gehört, wäre ich Tischlerin geworden. Stattdessen saß ich acht Jahre lang vor Tabellen.', 'Op mijn 22e heb ik mijn eerste baan bij een bank aangenomen, omdat mijn ouders dat wilden. Had ik toen naar mijn gevoel geluisterd, dan was ik meubelmaakster geworden. In plaats daarvan zat ik acht jaar lang achter tabellen.'],
        ['Ich bereue diese Zeit nicht ganz. Ohne die Bank hätte ich nie gelernt, wie man verhandelt, und ich hätte meinen Mann nicht kennengelernt. Aber ich hätte früher kündigen sollen. Beinahe wäre ich für immer geblieben, nur wegen der Sicherheit.', 'Ik heb niet helemaal spijt van die tijd. Zonder de bank had ik nooit geleerd hoe je onderhandelt, en had ik mijn man niet leren kennen. Maar ik had eerder ontslag moeten nemen. Ik was bijna voor altijd gebleven, alleen vanwege de zekerheid.'],
        ['Heute habe ich eine kleine Werkstatt in Leipzig. Mein Rat an junge Leute: Fragt euch nicht, was ihr werden sollt, sondern was ihr gern den ganzen Tag macht. Wenn mir das jemand mit 22 gesagt hätte, hätte ich viel Zeit gespart.', 'Nu heb ik een kleine werkplaats in Leipzig. Mijn raad aan jonge mensen: vraag je niet af wat je moet worden, maar wat je graag de hele dag doet. Als iemand me dat op mijn 22e had gezegd, had ik veel tijd bespaard.']
      ],
      gl: [['die Tischlerin', 'de meubelmaakster'], ['verhandeln', 'onderhandelen'], ['die Sicherheit', 'de zekerheid'], ['die Werkstatt', 'de werkplaats'], ['sparen', 'besparen']],
      q: [
        { t: 'mc', q: 'Was wäre die Autorin fast geworden?', o: ['Tischlerin', 'Lehrerin', 'Bankdirektorin'] },
        { t: 'mc', q: 'Was hätte sie früher tun sollen?', o: ['Kündigen', 'Heiraten', 'Studieren'] },
        { t: 'mc', q: 'Was rät sie jungen Leuten?', o: ['Zu fragen, was sie gern den ganzen Tag machen', 'Bei einer Bank anzufangen', 'Auf die Eltern zu hören'] }
      ]
    },
    say: [['Ich hätte mich besser vorbereiten sollen.', 'Ik had me beter moeten voorbereiden.'], ['Hätte ich das doch früher gewusst!', 'Had ik dat maar eerder geweten!'], ['An deiner Stelle wäre ich geblieben.', 'In jouw plaats was ik gebleven.']],
    task: { nl: 'Schrijf 4 zinnen over een beslissing uit je verleden: wat had je anders gedaan? Gebruik hätte/wäre + deelwoord en één wens met doch of nur.', model: 'Nach der Schule habe ich sofort gearbeitet. Wenn ich mehr Geld gehabt hätte, wäre ich ein Jahr gereist. Ich hätte auch früher eine Fremdsprache lernen sollen. Hätte ich doch mit zwanzig Deutsch gelernt!' },
    scenario: { nl: 'Je hebt een sollicitatiegesprek gehad dat matig ging. Je praat na met een Duitse vriend.', role: 'Jonas, een vriend die pas zelf een baan heeft gevonden en graag meedenkt', goal: 'Vertel wat er misging, zeg wat je had moeten doen (hätte … sollen) en vraag wat hij in jouw plaats had gedaan.' }
  });

  /* ───────────────────────── B2 · 2 ───────────────────────── */
  U({
    id: 'de-b2-02', level: 'B2', icon: '📰', title: 'Medien und Nachrichten', nl: 'Het nieuws: de indirecte rede',
    goals: ['Nieuwsberichten lezen en samenvatten', 'Weergeven wat iemand zei met de Konjunktiv I', 'Herkennen wanneer een krant afstand neemt van een uitspraak', 'Over betrouwbaarheid van bronnen praten'],
    vocab: [
      ['die Nachricht', 'het bericht, het nieuws'], ['die Schlagzeile', 'de krantenkop'], ['der Bericht', 'het verslag'], ['berichten über', 'berichten over'], ['die Quelle', 'de bron'],
      ['die Pressekonferenz', 'de persconferentie'], ['der Sprecher / die Sprecherin', 'de woordvoerder'], ['die Regierung', 'de regering'], ['behaupten', 'beweren'], ['mitteilen', 'meedelen'],
      ['betonen', 'benadrukken'], ['bestätigen', 'bevestigen'], ['bestreiten', 'ontkennen, betwisten'], ['laut', 'volgens'], ['angeblich', 'naar verluidt, zogenaamd'],
      ['die Falschmeldung', 'het nepbericht'], ['glaubwürdig', 'geloofwaardig'], ['die Meinungsfreiheit', 'de vrijheid van meningsuiting'], ['der Rundfunk', 'de omroep'], ['die Sendung', 'de uitzending'],
      ['der Zuschauer', 'de kijker'], ['veröffentlichen', 'publiceren'], ['die Umfrage', 'de enquête, de peiling'], ['zuständig', 'bevoegd, verantwoordelijk'], ['der Vorwurf', 'het verwijt, de beschuldiging'], ['die Stellungnahme', 'de (officiële) reactie']
    ],
    grammar: [
      { t: 'Hij zegt, hij habe …: de Konjunktiv I', es: 'Indirekte Rede: Konjunktiv I',
        html: `<p>Duitse kranten en journaals geven uitspraken van anderen weer in de <b>Konjunktiv I</b>. Daarmee zegt de journalist: <i>dit zijn zijn woorden, niet de mijne</i>. Het Nederlands heeft zo’n vorm niet.</p>
<p>Je maakt hem met de stam + <b>-e</b>. In de praktijk heb je bijna alleen de <b>derde persoon enkelvoud</b> nodig: <i>er <b>habe</b>, er <b>komme</b>, sie <b>wisse</b>, er <b>könne</b>, sie <b>werde</b></i>.</p>
<p><i>Direct:</i> Der Minister: «Ich <b>habe</b> keine Zeit.» → <i>Indirect:</i> Der Minister sagt, er <b>habe</b> keine Zeit.</p>
<p>Er hoeft geen <i>dass</i> bij; dan blijft de volgorde van een hoofdzin. Mét <i>dass</i> gaat het werkwoord naar het einde: <i>…, dass er keine Zeit <b>habe</b>.</i></p>
<p>Verleden: één vorm, <b>habe/sei + deelwoord</b>: <i>Er sagte, er <b>habe</b> nichts <b>gewusst</b> / er <b>sei</b> zu Hause <b>gewesen</b>.</i> De tijd van <i>sagen</i> maakt niet uit; het Duits schuift de tijden niet op zoals het Engels.</p>
<p><b>Uitzondering:</b> <i>sein</i> heeft als enige in alle personen een eigen vorm zonder -e in het enkelvoud: <b>ich sei, du seist, er sei, wir seien, sie seien</b>. <b>Waarom?</b> <i>Sein</i> is zo onregelmatig dat de Konjunktiv nergens met de gewone vorm samenvalt, en dus overal bruikbaar is.</p>`,
        table: [['', 'Indikativ', 'Konjunktiv I'], ['haben', 'er hat', 'er habe'], ['sein', 'er ist / sie sind', 'er sei / sie seien'], ['werden', 'er wird', 'er werde'], ['können', 'er kann', 'er könne'], ['wissen', 'er weiß', 'er wisse'], ['kommen', 'er kommt', 'er komme']],
        sum: 'Er sagt, er habe keine Zeit. Sie sagt, sie sei krank. Er sagte, er habe nichts gewusst.',
        ex: [['Die Sprecherin teilte mit, der Minister sei krank.', 'De woordvoerster deelde mee dat de minister ziek is.'], ['Der Zeuge sagte, er habe nichts gesehen.', 'De getuige zei dat hij niets had gezien.'], ['Die Firma betont, sie halte sich an alle Regeln.', 'Het bedrijf benadrukt dat het zich aan alle regels houdt.']] },
      { t: 'Als de vorm niet te zien is: vervangvormen', es: 'Ersatzformen: Konjunktiv II und würde',
        html: `<p>Bij <i>ich, wir</i> en <i>sie</i> (meervoud) is de Konjunktiv I meestal <b>gelijk</b> aan de gewone tegenwoordige tijd: <i>sie haben</i> = <i>sie haben</i>. De lezer ziet dan niet dat het indirecte rede is.</p>
<p>In dat geval stap je over op de <b>Konjunktiv II</b>: <i>Die Minister sagen, sie <b>hätten</b> keine Zeit.</i> Is ook die niet herkenbaar (zwakke werkwoorden: <i>sie machten</i>), dan neem je <b>würde</b>: <i>…, sie <b>würden</b> es bald <b>machen</b>.</i></p>
<p><b>Uitzondering:</b> hier betekent de Konjunktiv II dus <b>niet</b> «onwerkelijk» of «zou». <b>Waarom?</b> Hij springt alleen in als herkenbare vervanger; de betekenis blijft neutraal doorgeven wat iemand zei.</p>
<p>Vragen en bevelen: een vraag wordt een bijzin met <b>ob</b> of het vraagwoord (<i>Er fragte, <b>ob</b> sie Zeit <b>habe</b></i>); een bevel krijgt <b>solle</b> (<i>Sie sagte, er <b>solle</b> warten</i>).</p>
<p>In een gewoon gesprek hoor je bijna altijd de Indikativ of <i>würde</i>: <i>Er hat gesagt, er hat keine Zeit.</i> De Konjunktiv I is schrijftaal; je moet hem vooral <b>herkennen</b>.</p>`,
        table: [['direct', 'indirect'], ['«Wir haben Zeit.»', 'Sie sagen, sie hätten Zeit.'], ['«Wir arbeiten daran.»', 'Sie sagen, sie würden daran arbeiten.'], ['«Hast du Zeit?»', 'Er fragt, ob sie Zeit habe.'], ['«Warte!»', 'Sie sagt, er solle warten.']],
        ex: [['Die Bewohner sagen, sie hätten nichts gehört.', 'De bewoners zeggen dat ze niets hebben gehoord.'], ['Der Arzt sagte, ich solle mehr schlafen.', 'De dokter zei dat ik meer moest slapen.'], ['Sie fragte, ob er die Nachricht gelesen habe.', 'Ze vroeg of hij het bericht had gelezen.']] }
    ],
    dialogue: {
      t: 'Stimmt das überhaupt?', place: 'Hamburg 🇩🇪',
      lines: [
        ['Anna', 'Hast du die Schlagzeile gesehen? Die Regierung will angeblich das Bargeld abschaffen.', 'Heb je de krantenkop gezien? De regering wil naar verluidt het contante geld afschaffen.'],
        ['Tobias', 'Wo hast du das denn gelesen?', 'Waar heb je dat dan gelezen?'],
        ['Anna', 'In einem Post. Da steht, ein Sprecher habe das gestern bestätigt.', 'In een post. Daar staat dat een woordvoerder dat gisteren heeft bevestigd.'],
        ['Tobias', 'Moment, ich schaue nach. Hier: Das Ministerium bestreitet das. Es teilt mit, es gebe keine solchen Pläne.', 'Momentje, ik kijk even. Hier: het ministerie ontkent dat. Het deelt mee dat er geen zulke plannen zijn.'],
        ['Anna', 'Und der Sprecher?', 'En de woordvoerder?'],
        ['Tobias', 'Er sagt, man habe ihn falsch zitiert. Er habe nur über eine Umfrage gesprochen.', 'Hij zegt dat men hem verkeerd heeft geciteerd. Hij heeft alleen over een peiling gesproken.'],
        ['Anna', 'Also eine Falschmeldung. Ich hätte die Quelle prüfen sollen.', 'Dus een nepbericht. Ik had de bron moeten controleren.'],
        ['Tobias', 'Passiert jedem. Mein Opa sagt immer, man solle nur die Hälfte glauben.', 'Overkomt iedereen. Mijn opa zegt altijd dat je maar de helft moet geloven.']
      ],
      q: [
        { t: 'mc', q: 'Was stand in dem Post?', o: ['Die Regierung wolle das Bargeld abschaffen', 'Die Regierung sei zurückgetreten', 'Das Bargeld werde teurer'] },
        { t: 'mc', q: 'Was sagt das Ministerium?', o: ['Es gebe keine solchen Pläne', 'Die Pläne seien fertig', 'Der Sprecher sei entlassen'] },
        { t: 'mc', q: 'Worüber hat der Sprecher wirklich gesprochen?', o: ['Über eine Umfrage', 'Über ein neues Gesetz', 'Über seinen Opa'] }
      ]
    },
    culture: { t: 'Tagesschau, Rundfunkbeitrag en de krant aan de ontbijttafel', html: `<p>Om <b>20.00 uur</b> precies begint op de ARD de <b>Tagesschau</b>: sinds 1952 een kwartier nieuws, zonder franje. Veel Duitsers bellen elkaar pas na 20.15 uur. Luister eens: bijna elke zin over een politicus staat in de Konjunktiv I.</p>
<p>📺 De publieke omroepen (ARD, ZDF, in Oostenrijk ORF, in Zwitserland SRF) worden betaald uit de <b>Rundfunkbeitrag</b>: elk huishouden betaalt een vast bedrag per maand, of je nu kijkt of niet. Daarover wordt graag en veel gemopperd.</p>
<p>Duitsland is nog een echt krantenland, met grote regionale bladen. Landelijk bekend zijn de <i>Süddeutsche Zeitung</i>, de <i>Frankfurter Allgemeine</i>, het weekblad <i>Die Zeit</i> en het boulevardblad <i>Bild</i> met zijn enorme koppen.</p>` },
    ex: [
      { t: 'cloze', s: 'Der Minister sagt, er ___ keine Zeit.', a: ['habe'], o: ['habe', 'hat', 'hätte'], nl: 'De minister zegt dat hij geen tijd heeft.', tag: 'de-konj1' },
      { t: 'cloze', s: 'Die Sprecherin teilt mit, der Chef ___ krank.', a: ['sei'], o: ['sei', 'ist', 'wäre'], nl: 'De woordvoerster deelt mee dat de baas ziek is.', tag: 'de-konj1' },
      { t: 'cloze', s: 'Der Zeuge sagte, er habe nichts ___.', a: ['gesehen'], o: ['gesehen', 'sehen', 'sah'], nl: 'De getuige zei dat hij niets had gezien.', tag: 'de-konj1' },
      { t: 'cloze', s: 'Die Bewohner sagen, sie ___ nichts gehört.', a: ['hätten'], o: ['hätten', 'haben', 'habe'], nl: 'De bewoners zeggen dat ze niets hebben gehoord.', x: 'Uitzondering: «sie haben» is niet als Konjunktiv I te herkennen, daarom springt de Konjunktiv II in. Het betekent hier niet «zouden».', tag: 'de-konj1-ersatz' },
      { t: 'cloze', s: 'Der Arzt sagte, ich ___ mehr schlafen.', a: ['solle'], o: ['solle', 'soll', 'sollte'], nl: 'De dokter zei dat ik meer moest slapen.', tag: 'de-konj1-ersatz' },
      { t: 'cloze', s: 'Sie fragte, ___ er die Nachricht gelesen habe.', a: ['ob'], o: ['ob', 'wenn', 'dass'], nl: 'Ze vroeg of hij het bericht had gelezen.', tag: 'de-konj1-ersatz' },
      { t: 'cloze', s: 'Die Firma betont, sie ___ alles erklären.', a: ['könne'], o: ['könne', 'kann', 'konnte'], nl: 'Het bedrijf benadrukt dat het alles kan uitleggen.', tag: 'de-konj1' },
      { t: 'mc', q: 'Waarom gebruikt een krant «er habe» in plaats van «er hat»?', o: ['Om te laten zien dat het de woorden van een ander zijn', 'Omdat het in het verleden gebeurde', 'Omdat het onwaar is'], x: 'De Konjunktiv I is neutraal: hij zegt niets over waar of onwaar.', tag: 'de-konj1' },
      { t: 'mc', q: 'Wat is de Konjunktiv I van «er weiß»?', o: ['er wisse', 'er wüsste', 'er weiße'], tag: 'de-konj1' },
      { t: 'mc', q: 'Wat betekent «angeblich»?', o: ['naar verluidt', 'duidelijk', 'eindelijk'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ze zegt dat ze moe is. (krantenstijl)', a: ['Sie sagt, sie sei müde.', 'Sie sagt, dass sie müde sei.'], tag: 'de-konj1' },
      { t: 'tr', nl: 'Hij zei dat hij niets had geweten. (krantenstijl)', a: ['Er sagte, er habe nichts gewusst.', 'Er sagte, dass er nichts gewusst habe.'], tag: 'de-konj1' },
      { t: 'tr', nl: 'Het ministerie ontkent dat.', a: ['Das Ministerium bestreitet das.'], tag: 'de-vok' },
      { t: 'order', s: 'Der Sprecher sagt, man habe ihn falsch zitiert.', nl: 'De woordvoerder zegt dat men hem verkeerd heeft geciteerd.', tag: 'de-konj1' },
      { t: 'match', p: [['behaupten', 'beweren'], ['bestätigen', 'bevestigen'], ['die Quelle', 'de bron'], ['die Schlagzeile', 'de krantenkop'], ['glaubwürdig', 'geloofwaardig']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Streit um neue Buslinie', type: 'Bericht uit een regionale krant',
      p: [
        ['Die Stadt Freiburg will ab dem kommenden Jahr eine neue Buslinie durch die Altstadt einrichten. Das teilte Bürgermeister Martin Keller am Dienstag mit. Die Linie sei notwendig, weil immer mehr Menschen auf das Auto verzichten wollten.', 'De stad Freiburg wil vanaf volgend jaar een nieuwe buslijn door de oude binnenstad instellen. Dat deelde burgemeester Martin Keller dinsdag mee. De lijn is volgens hem nodig, omdat steeds meer mensen de auto willen laten staan.'],
        ['Die Händler in der Altstadt sehen das anders. Eine Sprecherin sagte, die Busse würden die Fußgänger stören und den Markt gefährden. Man habe die Geschäftsleute nicht gefragt. Sie fordert, die Stadt solle die Pläne noch einmal prüfen.', 'De winkeliers in de binnenstad zien dat anders. Een woordvoerster zei dat de bussen de voetgangers storen en de markt in gevaar brengen. Men heeft de ondernemers niet geraadpleegd. Ze eist dat de stad de plannen nog eens bekijkt.'],
        ['Keller bestreitet den Vorwurf. Es habe drei öffentliche Treffen gegeben, zu denen alle eingeladen gewesen seien. Laut einer Umfrage der Stadt sind 61 Prozent der Bewohner für die neue Linie. Der Stadtrat entscheidet im März.', 'Keller wijst het verwijt van de hand. Er zijn volgens hem drie openbare bijeenkomsten geweest waarvoor iedereen was uitgenodigd. Volgens een peiling van de stad is 61 procent van de bewoners voor de nieuwe lijn. De gemeenteraad beslist in maart.']
      ],
      gl: [['einrichten', 'instellen'], ['verzichten auf', 'afzien van'], ['der Händler', 'de winkelier'], ['gefährden', 'in gevaar brengen'], ['fordern', 'eisen'], ['der Stadtrat', 'de gemeenteraad']],
      q: [
        { t: 'mc', q: 'Warum ist die Linie laut Bürgermeister notwendig?', o: ['Weil mehr Menschen auf das Auto verzichten wollen', 'Weil die Altstadt zu klein ist', 'Weil die Händler es fordern'] },
        { t: 'mc', q: 'Was sagen die Händler?', o: ['Man habe sie nicht gefragt', 'Die Linie sei zu teuer', 'Sie wollten mehr Busse'] },
        { t: 'mc', q: 'Welcher Satz ist eine Tatsache der Zeitung selbst, keine indirekte Rede?', o: ['Der Stadtrat entscheidet im März.', 'Die Linie sei notwendig.', 'Es habe drei öffentliche Treffen gegeben.'] }
      ]
    },
    say: [['Er sagt, er habe keine Zeit.', 'Hij zegt dat hij geen tijd heeft.'], ['Die Sprecherin teilte mit, der Minister sei krank.', 'De woordvoerster deelde mee dat de minister ziek is.'], ['Das Ministerium bestreitet den Vorwurf.', 'Het ministerie wijst het verwijt van de hand.']],
    task: { nl: 'Schrijf een kort nieuwsbericht (4 zinnen) over iets in jouw stad. Geef twee uitspraken van anderen weer in de Konjunktiv I (er habe, sie sei, es gebe).', model: 'In Utrecht wird der Bahnhof wieder umgebaut. Die Stadt teilte mit, die Arbeiten seien notwendig und würden zwei Jahre dauern. Ein Sprecher der Bahn sagte, es gebe keine Probleme für Reisende. Viele Bewohner glauben das nicht.' },
    scenario: { nl: 'Een Duitse kennis vertelt je een wild verhaal dat hij online heeft gelezen. Jij vraagt door naar de bron.', role: 'Tobias, een vriend die graag nieuws deelt en soms te snel iets gelooft', goal: 'Vraag waar hij het gelezen heeft, vertel wat jij erover hebt gehoord (er sagt, es sei …) en spreek af hoe jullie het nagaan.' }
  });

  /* ───────────────────────── B2 · 3 ───────────────────────── */
  U({
    id: 'de-b2-03', level: 'B2', icon: '🌍', title: 'Umwelt und Klima', nl: 'Milieu: wat moet er gedaan worden?',
    goals: ['Over klimaat, energie en afval praten', 'De lijdende vorm met moeten, kunnen en mogen gebruiken', 'Compacte alternatieven herkennen (lässt sich, ist zu, -bar)', 'Maatregelen voorstellen en beoordelen'],
    vocab: [
      ['die Umwelt', 'het milieu'], ['der Klimawandel', 'de klimaatverandering'], ['der Umweltschutz', 'de milieubescherming'], ['die erneuerbaren Energien', 'de duurzame energie'], ['die Windkraft', 'de windenergie'],
      ['das Kohlekraftwerk', 'de kolencentrale'], ['der Ausstoß', 'de uitstoot'], ['der Müll', 'het afval'], ['die Mülltrennung', 'het afval scheiden'], ['das Pfand', 'het statiegeld'],
      ['die Verpackung', 'de verpakking'], ['verschwenden', 'verspillen'], ['sparen', 'besparen'], ['senken', 'verlagen'], ['verbieten', 'verbieden'],
      ['fördern', 'bevorderen, subsidiëren'], ['die Maßnahme', 'de maatregel'], ['der Verbrauch', 'het verbruik'], ['nachhaltig', 'duurzaam'], ['umweltfreundlich', 'milieuvriendelijk'],
      ['die Dürre', 'de droogte'], ['das Hochwasser', 'de overstroming, het hoogwater'], ['die Wärmepumpe', 'de warmtepomp'], ['dämmen', 'isoleren'], ['wiederverwertbar', 'recyclebaar'], ['vermeidbar', 'te vermijden']
    ],
    grammar: [
      { t: 'Muss gemacht werden: lijdende vorm met een modaal werkwoord', es: 'Passiv mit Modalverben',
        html: `<p>Wat er moet, kan of mag gebeuren, zeg je met een <b>modaal werkwoord</b> + voltooid deelwoord + <b>werden</b>: <i>Der Müll <b>muss getrennt werden</b>.</i> Het modale werkwoord staat op plaats twee, <i>werden</i> helemaal achteraan (als heel werkwoord, onverbogen).</p>
<p>Verleden: alleen het modale werkwoord verandert: <i>Das Haus <b>musste</b> gedämmt werden.</i> Konjunktiv II voor advies: <i>Es <b>müsste</b> mehr <b>getan werden</b></i> (er zou meer gedaan moeten worden).</p>
<p>In de bijzin staat het modale werkwoord achteraan: <i>…, weil der Ausstoß <b>gesenkt werden muss</b>.</i></p>
<p><b>Uitzondering:</b> het Nederlands kan de volgorde omdraaien (<i>moet worden gedaan</i> of <i>gedaan moet worden</i>), het Duits niet: het is altijd <b>deelwoord – werden – modaal</b>. <b>Waarom?</b> In het Duits staat in de werkwoordsgroep achteraan altijd het werkwoord dat «het hoogst» is als laatste; die volgorde is vast.</p>`,
        table: [['', 'voorbeeld', 'Nederlands'], ['nu', 'Das muss geändert werden.', 'Dat moet veranderd worden.'], ['verleden', 'Das konnte nicht verhindert werden.', 'Dat kon niet voorkomen worden.'], ['advies', 'Das sollte verboten werden.', 'Dat zou verboden moeten worden.'], ['bijzin', '…, dass mehr getan werden muss.', '… dat er meer gedaan moet worden.']],
        sum: 'Der Müll muss getrennt werden. Das darf nicht vergessen werden. Es müsste mehr getan werden.',
        ex: [['Plastik kann wiederverwertet werden.', 'Plastic kan gerecycled worden.'], ['Hier dürfen keine Autos geparkt werden.', 'Hier mogen geen auto’s geparkeerd worden.'], ['Die Kohlekraftwerke sollen bis 2038 abgeschaltet werden.', 'De kolencentrales moeten uiterlijk in 2038 uitgeschakeld worden.']] },
      { t: 'Korter kan ook: lässt sich, ist zu, -bar', es: 'Passiversatzformen',
        html: `<p>Geschreven Duits vermijdt lange passieve zinnen met drie vaste alternatieven. Alle drie betekenen <i>kan (of moet) … worden</i>:</p>
<p>1. <b>sich lassen</b> + heel werkwoord = kan worden: <i>Das Problem <b>lässt sich</b> lösen</i> (= kann gelöst werden).</p>
<p>2. <b>sein + zu</b> + heel werkwoord = kan óf moet worden: <i>Die Regeln <b>sind zu beachten</b></i> (= müssen beachtet werden). <i>Das <b>ist</b> nicht <b>zu ändern</b></i> (= kann nicht geändert werden).</p>
<p>3. Bijvoeglijk naamwoord op <b>-bar</b> = kan worden: <i>Das ist <b>machbar</b>, <b>vermeidbar</b>, <b>trinkbar</b>.</i> Vergelijk Nederlands <i>-baar</i>.</p>
<p><b>Uitzondering:</b> bij <i>sein + zu</i> zie je aan de vorm niet of het <i>kunnen</i> of <i>moeten</i> is. <b>Waarom?</b> De constructie drukt alleen uit dat de handeling «te doen» is; de context beslist. Vuistregel: in voorschriften en regels is het <i>moeten</i>, met <i>nicht, kaum, leicht, schwer</i> is het <i>kunnen</i>.</p>`,
        table: [['passief', 'alternatief'], ['Das kann gelöst werden.', 'Das lässt sich lösen. / Das ist lösbar.'], ['Das muss beachtet werden.', 'Das ist zu beachten.'], ['Das kann nicht vermieden werden.', 'Das lässt sich nicht vermeiden. / Das ist unvermeidbar.']],
        ex: [['Dieser Fehler lässt sich leicht vermeiden.', 'Deze fout is makkelijk te vermijden.'], ['Der Müll ist bis Freitag an die Straße zu stellen.', 'Het afval moet uiterlijk vrijdag aan de straat gezet worden.'], ['Die Verpackung ist wiederverwertbar.', 'De verpakking is recyclebaar.']] }
    ],
    dialogue: {
      t: 'Im Mehrfamilienhaus: die Mülltonnen', place: 'Stuttgart 🇩🇪',
      lines: [
        ['Anna', 'Herr Bauer, können Sie mir das mit den Tonnen noch einmal erklären? Bei uns ist das einfacher.', 'Meneer Bauer, kunt u me dat met de containers nog eens uitleggen? Bij ons is dat eenvoudiger.'],
        ['Herr Bauer', 'Gern. Papier muss in die blaue Tonne geworfen werden, Verpackungen in den gelben Sack.', 'Graag. Papier moet in de blauwe container gegooid worden, verpakkingen in de gele zak.'],
        ['Anna', 'Und Glas? Das lässt sich hier nirgends finden.', 'En glas? Dat is hier nergens te vinden.'],
        ['Herr Bauer', 'Glas ist zum Container an der Ecke zu bringen. Aber bitte nicht sonntags, das darf nicht gemacht werden.', 'Glas moet naar de container op de hoek gebracht worden. Maar alstublieft niet op zondag, dat mag niet.'],
        ['Anna', 'Wegen des Lärms, verstehe. Und die Pfandflaschen?', 'Vanwege het lawaai, begrijp ik. En de statiegeldflessen?'],
        ['Herr Bauer', 'Die können im Supermarkt zurückgegeben werden. Fünfundzwanzig Cent pro Flasche!', 'Die kunnen in de supermarkt ingeleverd worden. Vijfentwintig cent per fles!'],
        ['Anna', 'Das ist machbar. Es müsste nur irgendwo aufgeschrieben werden.', 'Dat is te doen. Het zou alleen ergens opgeschreven moeten worden.'],
        ['Herr Bauer', 'Steht alles im Müllkalender. Der ist an der Kellertür zu finden.', 'Staat allemaal in de afvalkalender. Die is op de kelderdeur te vinden.']
      ],
      q: [
        { t: 'mc', q: 'Wohin muss Papier geworfen werden?', o: ['In die blaue Tonne', 'In den gelben Sack', 'In den Container an der Ecke'] },
        { t: 'mc', q: 'Was darf sonntags nicht gemacht werden?', o: ['Glas wegbringen', 'Papier trennen', 'Pfandflaschen zurückgeben'] },
        { t: 'mc', q: 'Wo können Pfandflaschen zurückgegeben werden?', o: ['Im Supermarkt', 'Beim Hausmeister', 'Im Keller'] }
      ]
    },
    culture: { t: 'Wereldkampioen afval scheiden en de Energiewende', html: `<p>♻️ Duitsers scheiden afval met overgave: <b>blaue Tonne</b> (papier), <b>gelber Sack</b> of <b>gelbe Tonne</b> (verpakkingen), <b>Biotonne</b> (gft), <b>Restmüll</b>, en glas op kleur (<i>Weißglas, Braunglas, Grünglas</i>). Wie het fout doet, krijgt een briefje van de buren.</p>
<p>Op bijna alle flessen en blikjes zit <b>Pfand</b>: 25 cent op wegwerpflessen, 8 of 15 cent op herbruikbare. Lege flessen zet je in de stad naast de prullenbak, zodat <i>Pfandsammler</i> ze kunnen meenemen.</p>
<p>⚡ De <b>Energiewende</b> is het grote Duitse project: weg van kernenergie (de laatste centrales gingen in 2023 dicht) en kolen, naar wind en zon. Er wordt hartstochtelijk over gediscussieerd, vooral over windmolens in het landschap en de prijs van stroom.</p>` },
    ex: [
      { t: 'cloze', s: 'Der Müll muss getrennt ___.', a: ['werden'], o: ['werden', 'worden', 'sein'], nl: 'Het afval moet gescheiden worden.', tag: 'de-passivmodal' },
      { t: 'cloze', s: 'Hier ___ nicht geraucht werden.', a: ['darf'], o: ['darf', 'ist', 'wird'], nl: 'Hier mag niet gerookt worden.', tag: 'de-passivmodal' },
      { t: 'cloze', s: 'Das Haus ___ gedämmt werden. (verleden)', a: ['musste'], o: ['musste', 'muss', 'gemusst'], nl: 'Het huis moest geïsoleerd worden.', tag: 'de-passivmodal' },
      { t: 'cloze', s: 'Ich finde, dass mehr getan werden ___.', a: ['muss'], o: ['muss', 'werden', 'ist'], nl: 'Ik vind dat er meer gedaan moet worden.', x: 'Uitzondering: in de Duitse bijzin is de volgorde vast: deelwoord, werden, modaal werkwoord. Het Nederlands mag wisselen, het Duits niet.', tag: 'de-passivmodal' },
      { t: 'cloze', s: 'Das Problem ___ sich lösen.', a: ['lässt'], o: ['lässt', 'kann', 'ist'], nl: 'Het probleem is op te lossen.', tag: 'de-passiversatz' },
      { t: 'cloze', s: 'Die Regeln sind ___ beachten.', a: ['zu'], o: ['zu', 'um', 'für'], nl: 'De regels moeten in acht genomen worden.', tag: 'de-passiversatz' },
      { t: 'cloze', s: 'Diese Verpackung ist wiederverwert___.', a: ['bar'], o: ['bar', 'lich', 'ig'], nl: 'Deze verpakking is recyclebaar.', tag: 'de-passiversatz' },
      { t: 'mc', q: '«Der Antrag ist bis Montag abzugeben.» Wat betekent dat?', o: ['De aanvraag moet uiterlijk maandag ingeleverd worden.', 'De aanvraag is maandag ingeleverd.', 'De aanvraag mag niet ingeleverd worden.'], x: 'sein + zu in een voorschrift betekent moeten. Uitzondering: met nicht/leicht/schwer betekent het juist kunnen; de context beslist.', tag: 'de-passiversatz' },
      { t: 'mc', q: 'Welke zin betekent hetzelfde als «Das kann nicht vermieden werden»?', o: ['Das lässt sich nicht vermeiden.', 'Das muss man vermeiden.', 'Das ist zu vermeiden.'], tag: 'de-passiversatz' },
      { t: 'mc', q: 'Wat is «das Pfand»?', o: ['het statiegeld', 'de vuilnisbak', 'de boete'], tag: 'de-vok' },
      { t: 'tr', nl: 'Dat moet veranderd worden.', a: ['Das muss geändert werden.', 'Das muss verändert werden.'], tag: 'de-passivmodal' },
      { t: 'tr', nl: 'Plastic kan gerecycled worden.', a: ['Plastik kann wiederverwertet werden.', 'Plastik kann recycelt werden.', 'Plastik lässt sich wiederverwerten.', 'Plastik lässt sich recyceln.'], tag: 'de-passivmodal' },
      { t: 'tr', nl: 'Dat is te doen.', a: ['Das ist machbar.', 'Das lässt sich machen.'], tag: 'de-passiversatz' },
      { t: 'order', s: 'Die Kohlekraftwerke sollen bis 2038 abgeschaltet werden.', nl: 'De kolencentrales moeten uiterlijk in 2038 uitgeschakeld worden.', tag: 'de-passivmodal' },
      { t: 'match', p: [['der Müll', 'het afval'], ['nachhaltig', 'duurzaam'], ['verschwenden', 'verspillen'], ['die Maßnahme', 'de maatregel'], ['das Hochwasser', 'de overstroming']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Eine Stadt ohne Müll?', type: 'Achtergrondartikel',
      p: [
        ['Die Stadt Kiel will die erste «Zero-Waste-Stadt» Deutschlands werden. Bis 2035 soll der Restmüll pro Person halbiert werden. Dafür müssen viele Gewohnheiten geändert werden, sagt die Stadt, aber das Ziel sei erreichbar.', 'De stad Kiel wil de eerste «zero-waste-stad» van Duitsland worden. Uiterlijk in 2035 moet het restafval per persoon gehalveerd zijn. Daarvoor moeten veel gewoonten veranderd worden, zegt de stad, maar het doel is volgens haar haalbaar.'],
        ['Über hundert Maßnahmen sind geplant. In Schulen und Kantinen dürfen keine Einwegbecher mehr benutzt werden. Kaputte Geräte können in Reparaturcafés kostenlos repariert werden. Und auf Märkten lässt sich Obst inzwischen fast überall ohne Verpackung kaufen.', 'Er zijn meer dan honderd maatregelen gepland. In scholen en kantines mogen geen wegwerpbekers meer gebruikt worden. Kapotte apparaten kunnen in repaircafés gratis gerepareerd worden. En op markten is fruit inmiddels bijna overal zonder verpakking te koop.'],
        ['Kritiker meinen, das Problem sei so nicht zu lösen: Der meiste Müll entstehe in der Industrie, nicht zu Hause. Die Stadt antwortet, beides müsse getan werden. Kleine Schritte seien nicht alles, aber unverzichtbar.', 'Critici vinden dat het probleem zo niet op te lossen is: het meeste afval ontstaat volgens hen in de industrie, niet thuis. De stad antwoordt dat beide dingen gedaan moeten worden. Kleine stappen zijn niet alles, maar wel onmisbaar.']
      ],
      gl: [['halbieren', 'halveren'], ['die Gewohnheit', 'de gewoonte'], ['erreichbar', 'haalbaar'], ['der Einwegbecher', 'de wegwerpbeker'], ['unverzichtbar', 'onmisbaar']],
      q: [
        { t: 'mc', q: 'Was soll bis 2035 halbiert werden?', o: ['Der Restmüll pro Person', 'Der Stromverbrauch', 'Die Zahl der Autos'] },
        { t: 'mc', q: 'Was darf in Kantinen nicht mehr benutzt werden?', o: ['Einwegbecher', 'Plastiktüten', 'Glasflaschen'] },
        { t: 'mc', q: 'Was sagen die Kritiker?', o: ['Der meiste Müll entstehe in der Industrie', 'Die Maßnahmen seien zu teuer', 'Reparaturcafés seien unnötig'] }
      ]
    },
    say: [['Das muss geändert werden.', 'Dat moet veranderd worden.'], ['Das Problem lässt sich lösen.', 'Het probleem is op te lossen.'], ['Es müsste viel mehr getan werden.', 'Er zou veel meer gedaan moeten worden.']],
    task: { nl: 'Schrijf 4 zinnen over wat er in jouw stad of land voor het milieu gedaan moet worden. Gebruik twee keer modaal werkwoord + deelwoord + werden en één keer lässt sich of -bar.', model: 'In meiner Stadt müssen mehr Radwege gebaut werden. Alte Häuser sollten besser gedämmt werden. Viel Müll lässt sich leicht vermeiden, zum Beispiel mit einer eigenen Tasche. Ich finde, das ist machbar.' },
    scenario: { nl: 'Je bent net verhuisd naar een Duitse flat en snapt het afvalsysteem niet. Je vraagt het aan de buurman.', role: 'Herr Bauer, een behulpzame maar precieze buurman die al dertig jaar in het huis woont', goal: 'Vraag wat waar gegooid moet worden, wat niet mag (darf nicht … werden) en waar je de regels kunt vinden.' }
  });

  /* ───────────────────────── B2 · 4 ───────────────────────── */
  U({
    id: 'de-b2-04', level: 'B2', icon: '🧘', title: 'Gesundheit und Stress', nl: 'Gezondheid: zowel … als, noch … noch',
    goals: ['Over stress, slaap en leefstijl praten', 'Tweedelige voegwoorden gebruiken (sowohl … als auch, weder … noch)', 'Gevolgen en tegenstellingen verbinden (deshalb, trotzdem, sodass)', 'Advies geven en afwegen'],
    vocab: [
      ['die Gesundheit', 'de gezondheid'], ['der Stress', 'de stress'], ['die Belastung', 'de belasting, de druk'], ['die Erschöpfung', 'de uitputting'], ['sich erholen', 'bijkomen, uitrusten'],
      ['die Ernährung', 'de voeding'], ['ausgewogen', 'evenwichtig'], ['die Bewegung', 'de beweging'], ['der Schlafmangel', 'het slaaptekort'], ['die Gewohnheit', 'de gewoonte'],
      ['abschalten', 'afschakelen, tot rust komen'], ['sich entspannen', 'zich ontspannen'], ['die Krankenkasse', 'de zorgverzekeraar'], ['die Krankschreibung', 'de ziekmelding (van de arts)'], ['die Vorsorge', 'de preventie'],
      ['die Sucht', 'de verslaving'], ['verzichten auf', 'afzien van, laten staan'], ['zunehmen', 'aankomen'], ['abnehmen', 'afvallen'], ['leiden an', 'lijden aan'],
      ['die Beschwerden', 'de klachten'], ['die Kur', 'de kuur'], ['vorbeugen', 'voorkomen (ziekte)'], ['seelisch', 'geestelijk, psychisch'], ['körperlich', 'lichamelijk'], ['ständig', 'voortdurend']
    ],
    grammar: [
      { t: 'Voegwoorden in tweeën', es: 'Zweiteilige Konnektoren',
        html: `<p>Vijf paren kom je voortdurend tegen. Elk deel staat direct vóór het stuk dat het verbindt:</p>
<p><b>sowohl … als auch</b> (zowel … als): <i>Ich mache <b>sowohl</b> Yoga <b>als auch</b> Krafttraining.</i><br><b>nicht nur … sondern auch</b> (niet alleen … maar ook)<br><b>entweder … oder</b> (óf … óf)<br><b>weder … noch</b> (noch … noch)<br><b>zwar … aber</b> (weliswaar … maar)</p>
<p>Verbinden ze twee hele zinnen, dan telt het eerste deel als gewoon zinsdeel op plaats één: <i><b>Entweder</b> gehst du zum Arzt, <b>oder</b> ich rufe ihn an.</i> <i><b>Zwar</b> ist er müde, <b>aber</b> er arbeitet weiter.</i></p>
<p><b>Uitzondering:</b> <i>weder … noch</i> is zelf al ontkennend; er komt <b>geen</b> <i>nicht</i> of <i>kein</i> bij: <i>Ich rauche <b>weder</b>, <b>noch</b> trinke ich.</i> <b>Waarom?</b> Net Duits kent geen dubbele ontkenning: twee ontkenningen zouden elkaar opheffen.</p>
<p>Let op de volgorde: na <i>noch</i> aan het begin van een zin volgt meteen het werkwoord (<i>noch <b>trinke</b> ich</i>), na <i>oder, aber, sondern</i> niet (<i>oder ich <b>rufe</b> an</i>).</p>`,
        table: [['paar', 'betekenis', 'voorbeeld'], ['sowohl … als auch', 'zowel … als', 'sowohl körperlich als auch seelisch'], ['nicht nur … sondern auch', 'niet alleen … maar ook', 'nicht nur gesund, sondern auch lecker'], ['entweder … oder', 'óf … óf', 'entweder heute oder morgen'], ['weder … noch', 'noch … noch', 'weder Zeit noch Lust'], ['zwar … aber', 'weliswaar … maar', 'zwar teuer, aber gut']],
        sum: 'Sowohl Sport als auch Schlaf sind wichtig. Ich habe weder Zeit noch Lust. Das ist zwar teuer, aber gut.',
        ex: [['Stress schadet nicht nur dem Körper, sondern auch der Seele.', 'Stress schaadt niet alleen het lichaam, maar ook de geest.'], ['Ich habe weder Zeit noch Geld für eine Kur.', 'Ik heb tijd noch geld voor een kuur.'], ['Zwar schlafe ich acht Stunden, aber ich bin trotzdem müde.', 'Ik slaap weliswaar acht uur, maar ik ben toch moe.']] },
      { t: 'Deshalb, trotzdem, sodass: gevolg en tegenstelling', es: 'Konnektoren: Folge und Gegensatz',
        html: `<p>Hetzelfde verband kun je op drie manieren uitdrukken; het verschil zit in de <b>woordvolgorde</b>.</p>
<p><b>Bijwoord</b> (telt als plaats één, werkwoord volgt direct): <b>deshalb, deswegen, daher</b> (daarom), <b>trotzdem, dennoch</b> (toch), <b>außerdem</b> (bovendien), <b>stattdessen</b> (in plaats daarvan): <i>Ich schlafe schlecht, <b>deshalb bin</b> ich müde.</i></p>
<p><b>Onderschikkend</b> (werkwoord achteraan): <b>sodass</b> (zodat, gevolg), <b>obwohl</b>, <b>während</b> (terwijl, tegenstelling): <i>Ich schlafe schlecht, <b>sodass</b> ich müde <b>bin</b>.</i></p>
<p><b>so … dass</b> met een bijvoeglijk naamwoord ertussen: <i>Ich war <b>so</b> müde, <b>dass</b> ich sofort eingeschlafen bin.</i></p>
<p><b>Uitzondering:</b> <i>trotzdem</i> en <i>obwohl</i> betekenen bijna hetzelfde, maar staan in <b>tegenovergestelde</b> zinshelften: <i>obwohl</i> staat bij de reden die niet werkt, <i>trotzdem</i> bij het onverwachte resultaat. <b>Waarom?</b> <i>Obwohl</i> is een voegwoord dat een bijzin opent; <i>trotzdem</i> is een bijwoord dat terugverwijst naar wat al gezegd is.</p>`,
        table: [['', 'voorbeeld'], ['deshalb', 'Er hat Stress, deshalb schläft er schlecht.'], ['sodass', 'Er hat Stress, sodass er schlecht schläft.'], ['obwohl', 'Obwohl er müde ist, arbeitet er weiter.'], ['trotzdem', 'Er ist müde, trotzdem arbeitet er weiter.']],
        ex: [['Ich habe zu viel gearbeitet, deshalb brauche ich Urlaub.', 'Ik heb te veel gewerkt, daarom heb ik vakantie nodig.'], ['Sie isst gesund, dennoch fühlt sie sich schwach.', 'Ze eet gezond, toch voelt ze zich zwak.'], ['Er war so erschöpft, dass er nicht mehr aufstehen konnte.', 'Hij was zo uitgeput dat hij niet meer kon opstaan.']] }
    ],
    dialogue: {
      t: 'Beim Hausarzt', place: 'Graz 🇦🇹',
      lines: [
        ['Dr. Wagner', 'Guten Tag, Herr Peters. Was führt Sie zu mir?', 'Goedendag, meneer Peters. Wat brengt u bij mij?'],
        ['Herr Peters', 'Ich bin ständig müde. Zwar schlafe ich genug, aber morgens bin ich trotzdem erschöpft.', 'Ik ben voortdurend moe. Ik slaap weliswaar genoeg, maar ’s ochtends ben ik toch uitgeput.'],
        ['Dr. Wagner', 'Haben Sie sowohl körperliche als auch seelische Belastungen?', 'Hebt u zowel lichamelijke als psychische belasting?'],
        ['Herr Peters', 'Vor allem im Büro. Ich habe weder Pausen noch freie Wochenenden.', 'Vooral op kantoor. Ik heb pauzes noch vrije weekenden.'],
        ['Dr. Wagner', 'Das ist nicht nur ungesund, sondern auch gefährlich. Bewegen Sie sich regelmäßig?', 'Dat is niet alleen ongezond, maar ook gevaarlijk. Beweegt u regelmatig?'],
        ['Herr Peters', 'Kaum. Abends bin ich so müde, dass ich nur noch fernsehe.', 'Nauwelijks. ’s Avonds ben ik zo moe dat ik alleen nog tv kijk.'],
        ['Dr. Wagner', 'Entweder Sie ändern etwas, oder Ihr Körper zwingt Sie dazu. Ich schreibe Sie eine Woche krank.', 'Of u verandert iets, of uw lichaam dwingt u ertoe. Ik schrijf u een week ziek.'],
        ['Herr Peters', 'Eine ganze Woche? Deshalb bin ich eigentlich nicht gekommen …', 'Een hele week? Daarvoor was ik eigenlijk niet gekomen …'],
        ['Dr. Wagner', 'Trotzdem. Und danach sprechen wir über eine Kur.', 'Toch. En daarna praten we over een kuur.']
      ],
      q: [
        { t: 'mc', q: 'Was ist das Problem von Herrn Peters?', o: ['Er ist trotz genug Schlaf ständig müde', 'Er schläft zu wenig', 'Er hat Rückenschmerzen'] },
        { t: 'mc', q: 'Was hat er im Büro nicht?', o: ['Weder Pausen noch freie Wochenenden', 'Weder Kollegen noch einen Chef', 'Weder Arbeit noch Geld'] },
        { t: 'mc', q: 'Was macht die Ärztin?', o: ['Sie schreibt ihn eine Woche krank', 'Sie schickt ihn sofort ins Krankenhaus', 'Sie gibt ihm Schlaftabletten'] }
      ]
    },
    culture: { t: 'De gele brief, de Kur en «Feierabend»', html: `<p>🩺 Ben je in Duitsland ziek, dan ga je naar de huisarts voor een <b>Krankschreibung</b> (officieel: <i>Arbeitsunfähigkeitsbescheinigung</i>, kort <b>AU</b>). Die moet uiterlijk op de vierde ziektedag bij je werkgever zijn. Jarenlang was dat een geel papiertje, <i>der gelbe Schein</i>; nu gaat het digitaal.</p>
<p>Typisch Duits is de <b>Kur</b>: drie weken in een kuuroord (alle plaatsen met <i>Bad</i> in de naam: Bad Kissingen, Baden-Baden) om te herstellen, grotendeels betaald door de <b>Krankenkasse</b>. Dokters schrijven hem voor bij uitputting en chronische klachten.</p>
<p>En dan <b>Feierabend</b>: het moment waarop je werk erop zit. <i>«Schönen Feierabend!»</i> zeg je tegen collega’s bij het weggaan. In veel bedrijven is mailen na Feierabend uitdrukkelijk niet de bedoeling.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich mache sowohl Yoga ___ auch Krafttraining.', a: ['als'], o: ['als', 'und', 'wie'], nl: 'Ik doe zowel yoga als krachttraining.', tag: 'de-doppel' },
      { t: 'cloze', s: 'Ich habe ___ Zeit noch Lust.', a: ['weder'], o: ['weder', 'entweder', 'nicht'], nl: 'Ik heb tijd noch zin.', tag: 'de-doppel' },
      { t: 'cloze', s: 'Das ist nicht nur gesund, ___ auch lecker.', a: ['sondern'], o: ['sondern', 'aber', 'oder'], nl: 'Dat is niet alleen gezond, maar ook lekker.', tag: 'de-doppel' },
      { t: 'cloze', s: '___ gehst du zum Arzt, oder ich rufe ihn an.', a: ['Entweder'], o: ['Entweder', 'Weder', 'Zwar'], nl: 'Of je gaat naar de dokter, of ik bel hem.', tag: 'de-doppel' },
      { t: 'cloze', s: 'Ich schlafe schlecht, ___ bin ich müde.', a: ['deshalb'], o: ['deshalb', 'sodass', 'weil'], nl: 'Ik slaap slecht, daarom ben ik moe.', x: 'Na deshalb volgt meteen het werkwoord; na sodass zou het werkwoord achteraan staan.', tag: 'de-konnektor' },
      { t: 'cloze', s: 'Er ist müde, ___ arbeitet er weiter.', a: ['trotzdem'], o: ['trotzdem', 'obwohl', 'deshalb'], nl: 'Hij is moe, toch werkt hij door.', x: 'Uitzondering: trotzdem en obwohl betekenen bijna hetzelfde, maar trotzdem is een bijwoord (werkwoord direct erna) en staat bij het onverwachte resultaat.', tag: 'de-konnektor' },
      { t: 'cloze', s: 'Ich war so müde, ___ ich sofort eingeschlafen bin.', a: ['dass'], o: ['dass', 'sodass', 'weil'], nl: 'Ik was zo moe dat ik meteen in slaap ben gevallen.', tag: 'de-konnektor' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ich rauche weder, noch trinke ich.', 'Ich rauche weder nicht, noch trinke ich nicht.', 'Ich rauche weder, noch ich trinke.'], x: 'Uitzondering: weder … noch is zelf al ontkennend, dus zonder nicht. Reden: net Duits kent geen dubbele ontkenning. Na noch volgt meteen het werkwoord.', tag: 'de-doppel' },
      { t: 'mc', q: 'Wat betekent «zwar … aber»?', o: ['weliswaar … maar', 'zowel … als', 'óf … óf'], tag: 'de-doppel' },
      { t: 'mc', q: 'Wat betekent «sich erholen»?', o: ['bijkomen, uitrusten', 'zich herhalen', 'iets ophalen'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik heb tijd noch geld.', a: ['Ich habe weder Zeit noch Geld.'], tag: 'de-doppel' },
      { t: 'tr', nl: 'Het is weliswaar duur, maar goed.', a: ['Es ist zwar teuer, aber gut.', 'Das ist zwar teuer, aber gut.'], tag: 'de-doppel' },
      { t: 'tr', nl: 'Ik heb veel stress, daarom slaap ik slecht.', a: ['Ich habe viel Stress, deshalb schlafe ich schlecht.', 'Ich habe viel Stress, deswegen schlafe ich schlecht.', 'Ich habe viel Stress, daher schlafe ich schlecht.'], tag: 'de-konnektor' },
      { t: 'order', s: 'Stress schadet nicht nur dem Körper, sondern auch der Seele.', nl: 'Stress schaadt niet alleen het lichaam, maar ook de geest.', tag: 'de-doppel' },
      { t: 'match', p: [['die Ernährung', 'de voeding'], ['abnehmen', 'afvallen'], ['die Krankenkasse', 'de zorgverzekeraar'], ['ständig', 'voortdurend'], ['vorbeugen', 'voorkomen']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Immer erreichbar, nie erholt', type: 'Artikel uit een gezondheidsblad',
      p: [
        ['Fast jeder zweite Berufstätige in Deutschland liest abends noch dienstliche Nachrichten. Das hat Folgen: Wer ständig erreichbar ist, kann weder richtig abschalten noch gut schlafen. Viele merken das zwar, ändern aber nichts.', 'Bijna een op de twee werkenden in Duitsland leest ’s avonds nog berichten van het werk. Dat heeft gevolgen: wie voortdurend bereikbaar is, kan niet echt afschakelen en ook niet goed slapen. Velen merken dat wel, maar veranderen niets.'],
        ['Ärzte warnen, dass der Körper sowohl Bewegung als auch echte Pausen braucht. Fehlt beides, steigt nicht nur der Blutdruck, sondern auch das Risiko für seelische Erkrankungen. Die Zahl der Krankschreibungen wegen Erschöpfung hat sich in zwanzig Jahren verdoppelt.', 'Artsen waarschuwen dat het lichaam zowel beweging als echte pauzes nodig heeft. Ontbreekt allebei, dan stijgt niet alleen de bloeddruk, maar ook het risico op psychische aandoeningen. Het aantal ziekmeldingen wegens uitputting is in twintig jaar verdubbeld.'],
        ['Einige Firmen reagieren. Bei einem großen Autohersteller werden E-Mails nach 18 Uhr nicht mehr zugestellt, sodass niemand in Versuchung kommt. Andere setzen auf Kurse. Entweder, sagen Experten, ändern sich die Regeln im Betrieb, oder die besten Kurse helfen wenig.', 'Sommige bedrijven reageren. Bij een grote autofabrikant worden e-mails na 18 uur niet meer bezorgd, zodat niemand in de verleiding komt. Andere zetten in op cursussen. Of de regels in het bedrijf veranderen, zeggen experts, of de beste cursussen helpen weinig.']
      ],
      gl: [['berufstätig', 'werkend'], ['dienstlich', 'van het werk, zakelijk'], ['der Blutdruck', 'de bloeddruk'], ['zustellen', 'bezorgen'], ['die Versuchung', 'de verleiding'], ['der Betrieb', 'het bedrijf']],
      q: [
        { t: 'mc', q: 'Was kann man nicht, wenn man ständig erreichbar ist?', o: ['Weder abschalten noch gut schlafen', 'Weder arbeiten noch essen', 'Weder lesen noch schreiben'] },
        { t: 'mc', q: 'Was hat sich in zwanzig Jahren verdoppelt?', o: ['Die Krankschreibungen wegen Erschöpfung', 'Die Zahl der E-Mails', 'Die Arbeitszeit'] },
        { t: 'mc', q: 'Was macht ein großer Autohersteller?', o: ['Er stellt nach 18 Uhr keine E-Mails mehr zu', 'Er verbietet Handys', 'Er schließt freitags'] }
      ]
    },
    say: [['Ich habe weder Zeit noch Lust.', 'Ik heb tijd noch zin.'], ['Das ist nicht nur gesund, sondern auch lecker.', 'Dat is niet alleen gezond, maar ook lekker.'], ['Ich bin müde, trotzdem gehe ich zum Sport.', 'Ik ben moe, toch ga ik sporten.']],
    task: { nl: 'Beschrijf in 4 zinnen hoe je met stress omgaat. Gebruik twee tweedelige voegwoorden en één keer deshalb of trotzdem.', model: 'Ich arbeite viel, deshalb brauche ich abends Ruhe. Ich mache sowohl Spaziergänge als auch Yoga. Am Wochenende lese ich weder E-Mails noch Nachrichten. Das ist zwar nicht immer einfach, aber es hilft.' },
    scenario: { nl: 'Je bent al weken moe en gaat naar een huisarts in Oostenrijk.', role: 'Dr. Wagner, een directe maar vriendelijke huisarts', goal: 'Beschrijf je klachten met zwar … aber en weder … noch, beantwoord de vragen over je leefstijl en vraag wat je moet veranderen.' }
  });

  /* ───────────────────────── B2 · 5 ───────────────────────── */
  U({
    id: 'de-b2-05', level: 'B2', icon: '🏙️', title: 'Stadt, Land, Wandel', nl: 'Stad en platteland: deelwoorden als bijvoeglijk naamwoord',
    goals: ['Over woningnood, verkeer en leven op het platteland praten', 'Het tegenwoordig deelwoord gebruiken (die steigenden Mieten)', 'Het voltooid deelwoord als bijvoeglijk naamwoord gebruiken (das renovierte Haus)', 'Ontwikkelingen en trends beschrijven'],
    vocab: [
      ['die Großstadt', 'de grote stad'], ['das Dorf', 'het dorp'], ['die Landflucht', 'de leegloop van het platteland'], ['der Stadtrand', 'de rand van de stad'], ['der Vorort', 'de voorstad'],
      ['die Wohnungsnot', 'de woningnood'], ['die Miete', 'de huur'], ['bezahlbar', 'betaalbaar'], ['der Leerstand', 'de leegstand'], ['die Bevölkerung', 'de bevolking'],
      ['der Einwohner', 'de inwoner'], ['wachsen', 'groeien'], ['schrumpfen', 'krimpen'], ['steigen', 'stijgen'], ['sinken', 'dalen'],
      ['pendeln', 'forenzen'], ['der Pendler', 'de forens'], ['der Nahverkehr', 'het openbaar vervoer (lokaal)'], ['der Stau', 'de file'], ['die Infrastruktur', 'de infrastructuur'],
      ['die Gemeinde', 'de gemeente'], ['der Bürgermeister', 'de burgemeester'], ['abgelegen', 'afgelegen'], ['belebt', 'levendig, druk'], ['die Entwicklung', 'de ontwikkeling'], ['zunehmend', 'in toenemende mate']
    ],
    grammar: [
      { t: 'Stijgend, groeiend: het tegenwoordig deelwoord', es: 'Partizip I als Adjektiv',
        html: `<p>Het <b>Partizip I</b> maak je met het hele werkwoord + <b>-d</b>: <i>steigen → steigen<b>d</b></i>, <i>wachsen → wachsen<b>d</b></i>. Het beschrijft iets wat <b>op dat moment bezig</b> is, en is altijd actief: <i>die steigenden Mieten</i> = de huren die stijgen.</p>
<p>Vóór een zelfstandig naamwoord krijgt het de gewone uitgang van een bijvoeglijk naamwoord: <i>die steigend<b>en</b> Mieten, ein wachsend<b>es</b> Problem, mit steigend<b>er</b> Tendenz</i>.</p>
<p>Als bijwoord blijft het onveranderd: <i>Sie kam <b>lachend</b> herein.</i></p>
<p><b>Uitzondering:</b> je kunt het Partizip I <b>niet</b> met <i>sein</i> gebruiken om te zeggen dat iets bezig is: niet <s>Die Mieten sind steigend</s>, maar <i>Die Mieten <b>steigen</b></i>. <b>Waarom?</b> Het Duits heeft geen duurvorm zoals het Engelse <i>are rising</i>; de gewone tegenwoordige tijd drukt dat al uit. Alleen deelwoorden die echte bijvoeglijke naamwoorden zijn geworden, kunnen na <i>sein</i>: <i>Der Film ist <b>spannend</b>. Das ist <b>anstrengend</b>.</i></p>`,
        table: [['werkwoord', 'Partizip I', 'voorbeeld'], ['steigen', 'steigend', 'die steigenden Preise'], ['wachsen', 'wachsend', 'eine wachsende Stadt'], ['fehlen', 'fehlend', 'die fehlenden Wohnungen'], ['pendeln', 'pendelnd', 'die pendelnden Arbeitnehmer']],
        sum: 'die steigenden Mieten, eine wachsende Stadt, die fehlenden Wohnungen',
        ex: [['Die wachsende Bevölkerung braucht mehr Wohnungen.', 'De groeiende bevolking heeft meer woningen nodig.'], ['Wegen der steigenden Mieten ziehen viele an den Stadtrand.', 'Vanwege de stijgende huren verhuizen velen naar de rand van de stad.'], ['Das ist ein dringendes Problem.', 'Dat is een dringend probleem.']] },
      { t: 'Gerenoveerd, gestegen: het voltooid deelwoord vóór een naamwoord', es: 'Partizip II als Adjektiv',
        html: `<p>Ook het <b>Partizip II</b> kan vóór een zelfstandig naamwoord staan, weer met een gewone uitgang: <i>das <b>renovierte</b> Haus, ein <b>geplanter</b> Neubau, die <b>gestiegenen</b> Kosten</i>.</p>
<p>De betekenis is anders dan bij het Partizip I. Vergelijk:</p>
<p><i>die <b>steigenden</b> Preise</i> = de prijzen die (nu) stijgen · <i>die <b>gestiegenen</b> Preise</i> = de prijzen die gestegen zijn (klaar).</p>
<p>Bij werkwoorden met een lijdend voorwerp is het Partizip II <b>passief</b>: <i>die gebaute Brücke</i> = de brug die gebouwd is. Bij werkwoorden met <i>sein</i> is het actief en afgelopen: <i>der angekommene Zug</i> = de trein die aangekomen is.</p>
<p><b>Uitzondering:</b> van werkwoorden met <i>haben</i> zónder lijdend voorwerp (<i>schlafen, arbeiten, helfen</i>) kun je het Partizip II niet zo gebruiken: niet <s>das geschlafene Kind</s>. <b>Waarom?</b> Er is niemand die de handeling ondergaat en er is ook geen verandering van toestand; het deelwoord heeft dan niets om te beschrijven. Je neemt het Partizip I: <i>das schlafende Kind</i>.</p>`,
        table: [['Partizip I (bezig, actief)', 'Partizip II (klaar of passief)'], ['die steigenden Mieten', 'die gestiegenen Mieten'], ['das renovierende Unternehmen', 'das renovierte Haus'], ['der ankommende Zug', 'der angekommene Zug'], ['die wachsende Stadt', 'die gewachsene Stadt']],
        ex: [['Das frisch renovierte Rathaus wurde gestern eröffnet.', 'Het pas gerenoveerde stadhuis is gisteren geopend.'], ['Die geplante Buslinie kostet zwei Millionen Euro.', 'De geplande buslijn kost twee miljoen euro.'], ['Viele verlassene Dörfer werden wieder belebt.', 'Veel verlaten dorpen worden weer tot leven gebracht.']] }
    ],
    dialogue: {
      t: 'Stadt oder Land?', place: 'Leipzig 🇩🇪',
      lines: [
        ['Anna', 'Stimmt es, dass ihr aufs Land zieht?', 'Klopt het dat jullie naar het platteland verhuizen?'],
        ['Felix', 'Ja. Bei den ständig steigenden Mieten hier können wir uns keine größere Wohnung leisten.', 'Ja. Met die voortdurend stijgende huren hier kunnen we ons geen grotere woning veroorloven.'],
        ['Anna', 'Aber die fehlenden Ärzte, der Bus, der zweimal am Tag fährt …', 'Maar het gebrek aan dokters, de bus die twee keer per dag rijdt …'],
        ['Felix', 'Das Dorf hat einen neu gebauten Bahnhof. In vierzig Minuten bin ich im Büro.', 'Het dorp heeft een nieuw gebouwd station. In veertig minuten ben ik op kantoor.'],
        ['Anna', 'Und das Haus?', 'En het huis?'],
        ['Felix', 'Ein leer stehender Bauernhof, wunderschön, aber nicht renoviert. Das wird ein wachsendes Projekt.', 'Een leegstaande boerderij, prachtig, maar niet gerenoveerd. Dat wordt een groeiend project.'],
        ['Anna', 'Ich würde die belebten Straßen vermissen. Und die spielenden Kinder im Hof.', 'Ik zou de levendige straten missen. En de spelende kinderen op de binnenplaats.'],
        ['Felix', 'Spielende Kinder gibt es dort auch. Nur keinen Stau.', 'Spelende kinderen zijn daar ook. Alleen geen file.']
      ],
      q: [
        { t: 'mc', q: 'Warum zieht Felix aufs Land?', o: ['Wegen der steigenden Mieten', 'Wegen einer neuen Stelle', 'Wegen des Lärms'] },
        { t: 'mc', q: 'Was hat das Dorf?', o: ['Einen neu gebauten Bahnhof', 'Ein renoviertes Krankenhaus', 'Eine wachsende Universität'] },
        { t: 'mc', q: 'Was würde Anna vermissen?', o: ['Die belebten Straßen', 'Den Stau', 'Die hohen Mieten'] }
      ]
    },
    culture: { t: 'Geen hoofdstad die alles opslokt', html: `<p>Anders dan Frankrijk of Engeland heeft Duitsland geen stad waar alles om draait. Door de eeuwenlange versnippering in vorstendommen heeft elk gebied zijn eigen centrum: <b>Frankfurt</b> voor het geld, <b>Hamburg</b> voor de haven en de media, <b>München</b> voor techniek, <b>Berlijn</b> voor politiek en cultuur. Veel wereldbedrijven zitten in kleine steden: de <i>Hidden Champions</i> van het <b>Mittelstand</b>.</p>
<p>🏘️ Intussen kampen de grote steden met <b>Wohnungsnot</b>. Berlijn stemde in 2021 zelfs over het onteigenen van grote verhuurders. De <b>Mietpreisbremse</b> («huurprijsrem») moet stijgingen beperken.</p>
<p>In delen van het oosten speelt het omgekeerde: dorpen lopen leeg. Sommige gemeenten lokken nieuwe bewoners met <i>Probewohnen</i>: een maand gratis proefwonen.</p>` },
    ex: [
      { t: 'cloze', s: 'Die ___ Mieten sind ein Problem. (steigen, nu bezig)', a: ['steigenden'], o: ['steigenden', 'gestiegenen', 'steigen'], nl: 'De stijgende huren zijn een probleem.', tag: 'de-part1' },
      { t: 'cloze', s: 'Das ist eine schnell ___ Stadt. (wachsen)', a: ['wachsende'], o: ['wachsende', 'gewachsene', 'wachsend'], nl: 'Dat is een snel groeiende stad.', tag: 'de-part1' },
      { t: 'cloze', s: 'Sie kam ___ herein. (lachen)', a: ['lachend'], o: ['lachend', 'gelacht', 'lachende'], nl: 'Ze kwam lachend binnen.', x: 'Als bijwoord krijgt het deelwoord geen uitgang.', tag: 'de-part1' },
      { t: 'cloze', s: 'Das frisch ___ Rathaus ist schön. (renovieren)', a: ['renovierte'], o: ['renovierte', 'renovierende', 'renoviert'], nl: 'Het pas gerenoveerde stadhuis is mooi.', tag: 'de-partadj' },
      { t: 'cloze', s: 'Die ___ Buslinie kostet viel Geld. (planen)', a: ['geplante'], o: ['geplante', 'planende', 'geplant'], nl: 'De geplande buslijn kost veel geld.', tag: 'de-partadj' },
      { t: 'cloze', s: 'Der gerade ___ Zug fährt gleich weiter. (ankommen, klaar)', a: ['angekommene'], o: ['angekommene', 'ankommende', 'angekommen'], nl: 'De zojuist aangekomen trein rijdt zo verder.', tag: 'de-partadj' },
      { t: 'cloze', s: 'Das ___ Kind liegt im Bett. (schlafen)', a: ['schlafende'], o: ['schlafende', 'geschlafene', 'schlafen'], nl: 'Het slapende kind ligt in bed.', x: 'Uitzondering: van schlafen bestaat geen «das geschlafene Kind». Reden: niemand ondergaat de handeling en er verandert geen toestand.', tag: 'de-part1' },
      { t: 'mc', q: 'Wat is het verschil tussen «die steigenden Preise» en «die gestiegenen Preise»?', o: ['stijgen nu / zijn gestegen', 'zijn gestegen / stijgen nu', 'geen verschil'], tag: 'de-partadj' },
      { t: 'mc', q: 'Welke zin is goed Duits?', o: ['Die Mieten steigen.', 'Die Mieten sind steigend.', 'Die Mieten sind am steigenden.'], x: 'Uitzondering: het Partizip I kan niet na sein om «bezig zijn» uit te drukken. Reden: het Duits heeft geen duurvorm; de tegenwoordige tijd volstaat.', tag: 'de-part1' },
      { t: 'mc', q: 'Wat is een «Pendler»?', o: ['een forens', 'een slinger', 'een huurder'], tag: 'de-vok' },
      { t: 'tr', nl: 'de groeiende bevolking', a: ['die wachsende Bevölkerung'], tag: 'de-part1' },
      { t: 'tr', nl: 'het gerenoveerde huis', a: ['das renovierte Haus'], tag: 'de-partadj' },
      { t: 'tr', nl: 'Dat is een dringend probleem.', a: ['Das ist ein dringendes Problem.'], tag: 'de-part1' },
      { t: 'order', s: 'Wegen der steigenden Mieten ziehen viele an den Stadtrand.', nl: 'Vanwege de stijgende huren verhuizen velen naar de rand van de stad.', tag: 'de-part1' },
      { t: 'match', p: [['das Dorf', 'het dorp'], ['der Stau', 'de file'], ['schrumpfen', 'krimpen'], ['bezahlbar', 'betaalbaar'], ['abgelegen', 'afgelegen']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Ein Dorf sucht Nachbarn', type: 'Reportage',
      p: [
        ['Vor zehn Jahren war Wiesenburg in Brandenburg ein sterbendes Dorf. Die Schule war geschlossen, der letzte Laden aufgegeben, und in der Hauptstraße standen zwölf verlassene Häuser. Die jungen Leute waren in die wachsenden Städte gezogen.', 'Tien jaar geleden was Wiesenburg in Brandenburg een uitstervend dorp. De school was gesloten, de laatste winkel opgegeven, en in de hoofdstraat stonden twaalf verlaten huizen. De jonge mensen waren naar de groeiende steden getrokken.'],
        ['Dann hatte die neu gewählte Bürgermeisterin eine Idee. Sie bot gestressten Großstädtern an, einen Monat kostenlos in einem renovierten Haus zu wohnen. Über tausend Menschen bewarben sich. Von den ausgewählten Familien sind acht geblieben.', 'Toen had de pas gekozen burgemeester een idee. Ze bood gestreste stedelingen aan om een maand gratis in een gerenoveerd huis te wonen. Meer dan duizend mensen meldden zich aan. Van de uitgekozen gezinnen zijn er acht gebleven.'],
        ['Heute gibt es wieder einen Laden, betrieben von einem zugezogenen Paar aus Berlin, und ein gut funktionierendes Büro für Menschen, die von zu Hause arbeiten. Die steigende Einwohnerzahl bringt aber auch Streit: Die Preise für die verbliebenen Häuser haben sich verdreifacht.', 'Nu is er weer een winkel, gerund door een stel dat uit Berlijn is komen wonen, en een goed werkend kantoor voor mensen die vanuit huis werken. Het stijgende inwonertal brengt echter ook ruzie: de prijzen van de overgebleven huizen zijn verdrievoudigd.']
      ],
      gl: [['aufgeben', 'opgeven'], ['verlassen', 'verlaten'], ['sich bewerben', 'zich aanmelden'], ['zugezogen', 'van elders komen wonen'], ['verdreifachen', 'verdrievoudigen']],
      q: [
        { t: 'mc', q: 'Was bot die Bürgermeisterin an?', o: ['Einen Monat kostenlos in einem renovierten Haus zu wohnen', 'Ein Haus für einen Euro', 'Eine Stelle im Rathaus'] },
        { t: 'mc', q: 'Wie viele der ausgewählten Familien sind geblieben?', o: ['Acht', 'Zwölf', 'Über tausend'] },
        { t: 'mc', q: 'Welches Problem bringt die steigende Einwohnerzahl?', o: ['Die Hauspreise haben sich verdreifacht', 'Die Schule ist zu klein', 'Es gibt zu viel Verkehr'] }
      ]
    },
    say: [['Die steigenden Mieten sind ein großes Problem.', 'De stijgende huren zijn een groot probleem.'], ['Wir wohnen in einem frisch renovierten Haus.', 'We wonen in een pas gerenoveerd huis.'], ['Das ist eine schnell wachsende Stadt.', 'Dat is een snel groeiende stad.']],
    task: { nl: 'Beschrijf in 4 zinnen hoe jouw woonplaats verandert. Gebruik twee keer een Partizip I (steigend, wachsend, fehlend) en twee keer een Partizip II (gebaut, renoviert, geplant) vóór een naamwoord.', model: 'Ich wohne in einer wachsenden Stadt in den Niederlanden. Die steigenden Hauspreise sind für junge Leute ein Problem. Am Stadtrand gibt es ein neu gebautes Viertel. Der seit Jahren geplante Bahnhof ist aber immer noch nicht fertig.' },
    scenario: { nl: 'Een Duitse vriend overweegt van de stad naar een dorp te verhuizen en vraagt jouw mening.', role: 'Felix, een dertiger uit Leipzig die genoeg heeft van de hoge huren', goal: 'Vraag naar zijn redenen, noem voor- en nadelen (die fehlenden Ärzte, die steigenden Mieten) en zeg wat jij zou kiezen.' }
  });
})(window.SPT);
