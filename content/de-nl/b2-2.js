/* Duits voor Nederlandstaligen — niveau B2, units 6–10 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-relgen': 'betrekkelijke bijzin met dessen, deren', 'de-relwas': 'betrekkelijke bijzin met was, wo, wer', 'de-nomverb': 'vaste combinatie naamwoord + werkwoord (eine Entscheidung treffen)',
    'de-futur2': 'vermoeden met werden (wird wohl sein, wird gewesen sein)', 'de-partikel': 'kleurwoordjes (doch, ja, mal, halt, eben)', 'de-adjprep': 'bijvoeglijk naamwoord met vast voorzetsel (stolz auf)',
    'de-nominal': 'naamwoordstijl (wegen + naamwoord i.p.v. weil-zin)', 'de-genprep2': 'aufgrund, infolge, dank, mithilfe', 'de-modalsubj': 'modaal werkwoord als vermoeden (dürfte, müsste, soll, will)', 'de-rede': 'discussiezinnen (einerseits … andererseits)'
  });

  /* ───────────────────────── B2 · 6 ───────────────────────── */
  U({
    id: 'de-b2-06', level: 'B2', icon: '🔬', title: 'Forschung und Technik', nl: 'Wetenschap: wiens, waarvan, wat',
    goals: ['Over onderzoek, uitvindingen en techniek praten', 'Betrekkelijke bijzinnen maken met dessen en deren', 'Was, wo en wer als betrekkelijk voornaamwoord gebruiken', 'Een apparaat of ontdekking omschrijven'],
    vocab: [
      ['die Forschung', 'het onderzoek'], ['der Forscher / die Forscherin', 'de onderzoeker'], ['die Wissenschaft', 'de wetenschap'], ['die Erfindung', 'de uitvinding'], ['erfinden', 'uitvinden'],
      ['entdecken', 'ontdekken'], ['die Entdeckung', 'de ontdekking'], ['entwickeln', 'ontwikkelen'], ['der Versuch', 'de proef, de poging'], ['das Ergebnis', 'het resultaat'],
      ['die Studie', 'de studie, het onderzoek'], ['beweisen', 'bewijzen'], ['das Gerät', 'het apparaat'], ['die künstliche Intelligenz', 'de kunstmatige intelligentie'], ['die Daten', 'de gegevens'],
      ['der Datenschutz', 'de privacybescherming'], ['die Anwendung', 'de toepassing, de app'], ['der Fortschritt', 'de vooruitgang'], ['das Labor', 'het laboratorium'], ['die Ursache', 'de oorzaak'],
      ['die Wirkung', 'het effect, de werking'], ['der Nobelpreis', 'de Nobelprijs'], ['das Patent', 'het patent'], ['zuverlässig', 'betrouwbaar'], ['bahnbrechend', 'baanbrekend'], ['die Folge', 'het gevolg']
    ],
    grammar: [
      { t: 'Dessen en deren: van wie, waarvan', es: 'Relativpronomen im Genitiv',
        html: `<p>Voor <i>wiens, van wie, waarvan</i> gebruik je in een betrekkelijke bijzin de tweede naamval: <b>dessen</b> (bij een mannelijk of onzijdig woord) en <b>deren</b> (bij een vrouwelijk woord of meervoud).</p>
<p><i>Der Forscher, <b>dessen</b> Studie ich gelesen habe, kommt aus Wien.</i> (de onderzoeker wiens studie ik heb gelezen)<br><i>Die Firma, <b>deren</b> Geräte wir benutzen, ist pleite.</i> (het bedrijf waarvan wij de apparaten gebruiken)</p>
<p>Na <i>dessen/deren</i> volgt het bezit <b>zonder lidwoord</b>. Een voorzetsel staat ervóór: <i>die Frau, <b>mit deren</b> Hilfe …</i></p>
<p><b>Uitzondering:</b> <i>dessen</i> en <i>deren</i> veranderen niet mee met het woord dat volgt: <i>der Mann, dessen Tochter / dessen Sohn / dessen Kinder</i>. <b>Waarom?</b> Ze richten zich alleen naar de <b>bezitter</b> (het woord vóór de komma). Dat is anders dan bij <i>sein/ihr</i>, die een uitgang krijgen van het bezit.</p>`,
        table: [['verwijst naar', 'vorm', 'voorbeeld'], ['mannelijk', 'dessen', 'der Autor, dessen Buch …'], ['onzijdig', 'dessen', 'das Land, dessen Sprache …'], ['vrouwelijk', 'deren', 'die Ärztin, deren Praxis …'], ['meervoud', 'deren', 'die Leute, deren Daten …']],
        sum: 'Der Forscher, dessen Studie ich kenne. Die Firma, deren Chef neu ist.',
        ex: [['Das ist die Forscherin, deren Entdeckung alles verändert hat.', 'Dat is de onderzoekster wier ontdekking alles veranderd heeft.'], ['Ein Gerät, dessen Akku zwei Wochen hält.', 'Een apparaat waarvan de accu twee weken meegaat.'], ['Die Nutzer, deren Daten gestohlen wurden, sind wütend.', 'De gebruikers van wie de gegevens gestolen zijn, zijn woedend.']] },
      { t: 'Was, wo en wer in de bijzin', es: 'Relativsätze mit was, wo, wer',
        html: `<p>Meestal is het betrekkelijk voornaamwoord <i>der, die, das</i>. In drie gevallen gebruik je iets anders.</p>
<p><b>was</b> na onbepaalde woorden (<i>alles, etwas, nichts, vieles, das</i>), na een overtreffende trap als naamwoord (<i>das Beste, <b>was</b> …</i>) en als je naar de <b>hele zin</b> verwijst: <i>Er hat den Preis gewonnen, <b>was</b> niemanden überrascht hat.</i></p>
<p><b>wo</b> bij plaatsen (in plaats van <i>in dem/in der</i>), en verplicht bij plaatsnamen: <i>die Stadt, <b>wo</b> ich studiert habe · in Jena, <b>wo</b> Zeiss gegründet wurde</i>.</p>
<p><b>wer …, (der)</b> = wie …, die: <i><b>Wer</b> forscht, braucht Geduld.</i></p>
<p>Met een voorzetsel wordt <i>was</i> tot <b>wo(r)-</b>: <i>etwas, <b>worüber</b> wir reden müssen</i>.</p>
<p><b>Uitzondering:</b> na <i>das</i> + gewoon onzijdig naamwoord blijft het <b>das</b>: <i>das Gerät, <b>das</b> ich gekauft habe</i>, maar <i>das, <b>was</b> ich gekauft habe</i>. <b>Waarom?</b> <i>Was</i> is voor alles wat onbepaald is of geen eigen naamwoord heeft; zodra er een concreet woord met een geslacht staat, neemt dat het over.</p>`,
        table: [['na …', 'vorm', 'voorbeeld'], ['alles, nichts, etwas', 'was', 'alles, was wir wissen'], ['das Beste, das Einzige', 'was', 'das Beste, was passieren konnte'], ['hele zin', 'was', '…, was mich freut'], ['plaats', 'wo', 'das Labor, wo sie arbeitet'], ['(niemand bepaald)', 'wer', 'Wer wagt, gewinnt.']],
        ex: [['Das ist alles, was ich weiß.', 'Dat is alles wat ik weet.'], ['Die Studie wurde gestoppt, was viele kritisieren.', 'De studie is stopgezet, wat velen bekritiseren.'], ['Wer nichts versucht, entdeckt auch nichts.', 'Wie niets probeert, ontdekt ook niets.']] }
    ],
    dialogue: {
      t: 'Im Deutschen Museum', place: 'München 🇩🇪',
      lines: [
        ['Anna', 'Schau mal, das ist die Maschine, deren Erfinder nie berühmt geworden ist.', 'Kijk eens, dat is de machine waarvan de uitvinder nooit beroemd is geworden.'],
        ['Lukas', 'Konrad Zuse? Der Mann, dessen Computer im Wohnzimmer seiner Eltern stand?', 'Konrad Zuse? De man wiens computer in de woonkamer van zijn ouders stond?'],
        ['Anna', 'Genau. 1941 hat er den ersten programmierbaren Computer gebaut, was damals kaum jemand bemerkt hat.', 'Precies. In 1941 bouwde hij de eerste programmeerbare computer, wat toen bijna niemand heeft opgemerkt.'],
        ['Lukas', 'Unglaublich. Alles, was wir heute benutzen, fing in einem Wohnzimmer in Berlin an.', 'Ongelooflijk. Alles wat we nu gebruiken, begon in een woonkamer in Berlijn.'],
        ['Anna', 'Und hier: die Stadt, wo das Auto erfunden wurde. Weißt du, welche?', 'En hier: de stad waar de auto is uitgevonden. Weet je welke?'],
        ['Lukas', 'Mannheim. Aber die Frau, deren Mut das Auto bekannt gemacht hat, war Bertha Benz.', 'Mannheim. Maar de vrouw wier moed de auto bekend heeft gemaakt, was Bertha Benz.'],
        ['Anna', 'Die erste Fernfahrt, ohne ihrem Mann etwas zu sagen. Das ist das Beste, was ich heute gehört habe.', 'De eerste lange rit, zonder haar man iets te zeggen. Dat is het beste wat ik vandaag heb gehoord.'],
        ['Lukas', 'Wer wagt, gewinnt.', 'Wie waagt, die wint.']
      ],
      q: [
        { t: 'mc', q: 'Wo stand der Computer von Konrad Zuse?', o: ['Im Wohnzimmer seiner Eltern', 'In einem Labor in München', 'In einer Fabrik'] },
        { t: 'mc', q: 'Wo wurde das Auto erfunden?', o: ['In Mannheim', 'In Berlin', 'In Stuttgart'] },
        { t: 'mc', q: 'Was hat Bertha Benz gemacht?', o: ['Die erste Fernfahrt mit dem Auto', 'Den ersten Computer programmiert', 'Das Museum gegründet'] }
      ]
    },
    culture: { t: 'Land van uitvinders: van boekdruk tot mp3', html: `<p>Duitsland noemt zich graag <b>das Land der Dichter und Denker</b>, maar ook van de <i>Tüftler</i>: de knutselaars en uitvinders. Uit het Duitse taalgebied komen de <b>boekdrukkunst</b> (Gutenberg, Mainz, rond 1450), de <b>auto</b> (Benz, 1886), de <b>röntgenstraling</b>, de <b>aspirine</b>, de <b>computer</b> (Zuse) en het <b>mp3-formaat</b> (Fraunhofer-instituut, Erlangen).</p>
<p>🚗 In 1888 reed <b>Bertha Benz</b> stiekem met haar twee zoons 106 kilometer van Mannheim naar Pforzheim: de eerste lange autorit ooit. Onderweg kocht ze brandstof bij een apotheek en repareerde ze een leiding met een hoedenspeld.</p>
<p>Onderzoek gebeurt vandaag vooral bij de grote instituten: <b>Max-Planck</b> (fundamenteel), <b>Fraunhofer</b> (toegepast). En in Zwitserland bij de ETH Zürich, waar Einstein studeerde.</p>` },
    ex: [
      { t: 'cloze', s: 'Der Forscher, ___ Studie ich gelesen habe, kommt aus Wien.', a: ['dessen'], o: ['dessen', 'deren', 'der'], nl: 'De onderzoeker wiens studie ik heb gelezen, komt uit Wenen.', tag: 'de-relgen' },
      { t: 'cloze', s: 'Die Firma, ___ Geräte wir benutzen, ist pleite.', a: ['deren'], o: ['deren', 'dessen', 'die'], nl: 'Het bedrijf waarvan wij de apparaten gebruiken, is failliet.', tag: 'de-relgen' },
      { t: 'cloze', s: 'Die Nutzer, ___ Daten gestohlen wurden, sind wütend.', a: ['deren'], o: ['deren', 'dessen', 'denen'], nl: 'De gebruikers van wie de gegevens gestolen zijn, zijn woedend.', tag: 'de-relgen' },
      { t: 'cloze', s: 'Das Land, ___ Sprache ich lerne, hat viele Dialekte.', a: ['dessen'], o: ['dessen', 'deren', 'das'], nl: 'Het land waarvan ik de taal leer, heeft veel dialecten.', tag: 'de-relgen' },
      { t: 'cloze', s: 'Das ist alles, ___ ich weiß.', a: ['was'], o: ['was', 'das', 'dass'], nl: 'Dat is alles wat ik weet.', tag: 'de-relwas' },
      { t: 'cloze', s: 'Das Gerät, ___ ich gekauft habe, funktioniert nicht.', a: ['das'], o: ['das', 'was', 'dass'], nl: 'Het apparaat dat ik gekocht heb, werkt niet.', x: 'Uitzondering op «was na das»: staat er een concreet onzijdig naamwoord (das Gerät), dan blijft het das. Reden: was is alleen voor het onbepaalde.', tag: 'de-relwas' },
      { t: 'cloze', s: 'Er hat den Preis gewonnen, ___ niemanden überrascht hat.', a: ['was'], o: ['was', 'der', 'das'], nl: 'Hij heeft de prijs gewonnen, wat niemand heeft verrast.', x: 'was verwijst hier naar de hele zin ervoor.', tag: 'de-relwas' },
      { t: 'mc', q: '«Der Mann, ___ Tochter Physik studiert.» Wat komt er op de streep?', o: ['dessen', 'deren', 'dessene'], x: 'Uitzondering: dessen richt zich naar de bezitter (der Mann), niet naar het bezit (die Tochter), en krijgt geen uitgang.', tag: 'de-relgen' },
      { t: 'mc', q: 'Hoe zeg je «iets waarover we moeten praten»?', o: ['etwas, worüber wir reden müssen', 'etwas, über das was wir reden müssen', 'etwas, wo wir über reden müssen'], tag: 'de-relwas' },
      { t: 'mc', q: 'Wat betekent «die Ursache»?', o: ['de oorzaak', 'het gevolg', 'de uitvinding'], tag: 'de-vok' },
      { t: 'tr', nl: 'Dat is het beste wat ik vandaag gehoord heb.', a: ['Das ist das Beste, was ich heute gehört habe.'], tag: 'de-relwas' },
      { t: 'tr', nl: 'de vrouw wier boek ik lees', a: ['die Frau, deren Buch ich lese'], tag: 'de-relgen' },
      { t: 'tr', nl: 'Wie waagt, die wint.', a: ['Wer wagt, gewinnt.', 'Wer wagt, der gewinnt.'], tag: 'de-relwas' },
      { t: 'order', s: 'Das ist die Forscherin, deren Entdeckung alles verändert hat.', nl: 'Dat is de onderzoekster wier ontdekking alles veranderd heeft.', tag: 'de-relgen' },
      { t: 'match', p: [['die Forschung', 'het onderzoek'], ['erfinden', 'uitvinden'], ['das Ergebnis', 'het resultaat'], ['beweisen', 'bewijzen'], ['der Fortschritt', 'de vooruitgang']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Die Frau, deren Idee in jedem Handy steckt', type: 'Portret',
      p: [
        ['Hedy Lamarr, geboren 1914 in Wien, war in den dreißiger Jahren ein Filmstar, dessen Gesicht jeder kannte. Was kaum jemand wusste: Sie war auch Erfinderin. Abends, wenn andere feierten, saß sie an ihrem Zeichentisch.', 'Hedy Lamarr, geboren in 1914 in Wenen, was in de jaren dertig een filmster wier gezicht iedereen kende. Wat bijna niemand wist: ze was ook uitvindster. ’s Avonds, als anderen feestvierden, zat ze aan haar tekentafel.'],
        ['1942 meldete sie zusammen mit einem Komponisten ein Patent an: eine Technik, bei der ein Funksignal ständig die Frequenz wechselt, was es fast unmöglich macht, es zu stören. Die Marine, deren Experten die Idee nicht verstanden, legte das Patent in eine Schublade.', 'In 1942 vroeg ze samen met een componist een patent aan: een techniek waarbij een radiosignaal voortdurend van frequentie wisselt, wat het bijna onmogelijk maakt het te storen. De marine, wier experts het idee niet begrepen, legde het patent in een la.'],
        ['Jahrzehnte später wurde genau diese Technik zur Grundlage von WLAN und Bluetooth. Alles, was heute drahtlos funktioniert, verdankt ihr etwas. Geld hat sie dafür nie bekommen. In Österreich, Deutschland und der Schweiz feiert man an ihrem Geburtstag, dem 9. November, den Tag der Erfinder.', 'Tientallen jaren later werd precies deze techniek de basis van wifi en bluetooth. Alles wat tegenwoordig draadloos werkt, heeft iets aan haar te danken. Geld heeft ze er nooit voor gekregen. In Oostenrijk, Duitsland en Zwitserland viert men op haar verjaardag, 9 november, de Dag van de Uitvinders.']
      ],
      gl: [['der Zeichentisch', 'de tekentafel'], ['anmelden', 'aanvragen (patent)'], ['das Funksignal', 'het radiosignaal'], ['die Schublade', 'de la'], ['drahtlos', 'draadloos'], ['verdanken', 'te danken hebben']],
      q: [
        { t: 'mc', q: 'Was wusste kaum jemand über Hedy Lamarr?', o: ['Dass sie Erfinderin war', 'Dass sie aus Wien kam', 'Dass sie Filme machte'] },
        { t: 'mc', q: 'Was machte die Marine mit dem Patent?', o: ['Sie legte es in eine Schublade', 'Sie benutzte es sofort', 'Sie verkaufte es'] },
        { t: 'mc', q: 'Was feiert man am 9. November?', o: ['Den Tag der Erfinder', 'Den Tag des Films', 'Den Nationalfeiertag'] }
      ]
    },
    say: [['Das ist alles, was ich weiß.', 'Dat is alles wat ik weet.'], ['Der Forscher, dessen Studie ich gelesen habe, kommt aus Wien.', 'De onderzoeker wiens studie ik heb gelezen, komt uit Wenen.'], ['Wer wagt, gewinnt.', 'Wie waagt, die wint.']],
    task: { nl: 'Beschrijf in 4 zinnen een uitvinding of app die jij belangrijk vindt. Gebruik één keer dessen of deren en twee keer was (alles, was … / …, was ich gut finde).', model: 'Das Fahrrad ist eine Erfindung, deren Bedeutung oft vergessen wird. Es braucht kein Benzin, was gut für die Umwelt ist. Alles, was man braucht, sind zwei Beine. Das ist das Beste, was je erfunden wurde.' },
    scenario: { nl: 'Je loopt met een Duitse vriend door een techniekmuseum en praat over uitvindingen.', role: 'Lukas, een student werktuigbouw die alles weet van uitvinders', goal: 'Vraag naar een uitvinding, omschrijf er zelf een (ein Gerät, dessen …) en zeg wat je het beste vindt (das Beste, was …).' }
  });

  /* ───────────────────────── B2 · 7 ───────────────────────── */
  U({
    id: 'de-b2-07', level: 'B2', icon: '🧱', title: 'Mauer, Wende, Einheit', nl: 'Geschiedenis: vaste combinaties en vermoedens',
    goals: ['Over de Duitse deling en hereniging praten', 'Vaste combinaties van naamwoord en werkwoord gebruiken', 'Vermoedens uitdrukken met werden + wohl', 'Een historische gebeurtenis navertellen'],
    vocab: [
      ['die Mauer', 'de Muur'], ['die Grenze', 'de grens'], ['die Teilung', 'de deling'], ['die Wiedervereinigung', 'de hereniging'], ['die Wende', 'de omwenteling (1989)'],
      ['der Mauerfall', 'de val van de Muur'], ['die DDR', 'de DDR'], ['die Bundesrepublik', 'de Bondsrepubliek'], ['fliehen', 'vluchten'], ['die Flucht', 'de vlucht'],
      ['die Stasi', 'de Stasi (geheime dienst)'], ['überwachen', 'in de gaten houden, afluisteren'], ['die Demonstration', 'de demonstratie'], ['friedlich', 'vreedzaam'], ['die Freiheit', 'de vrijheid'],
      ['der Zeitzeuge', 'de ooggetuige (van de tijd)'], ['das Denkmal', 'het monument'], ['die Erinnerung', 'de herinnering'], ['der Weltkrieg', 'de wereldoorlog'], ['die Besatzung', 'de bezetting'],
      ['eine Entscheidung treffen', 'een beslissing nemen'], ['eine Rolle spielen', 'een rol spelen'], ['in Frage stellen', 'ter discussie stellen'], ['zu Ende gehen', 'ten einde lopen'], ['Abschied nehmen', 'afscheid nemen'], ['das Ereignis', 'de gebeurtenis']
    ],
    grammar: [
      { t: 'Eine Entscheidung treffen: vaste combinaties', es: 'Nomen-Verb-Verbindungen',
        html: `<p>Net als het Nederlands (<i>een beslissing <b>nemen</b></i>) heeft het Duits vaste paren van naamwoord + werkwoord. Het werkwoord is vaak een <b>ander</b> dan je verwacht, dus leer ze als één geheel:</p>
<p><i>eine Entscheidung <b>treffen</b></i> (niet <s>nehmen</s>) · <i>eine Frage <b>stellen</b></i> · <i>einen Fehler <b>machen</b></i> · <i>eine Rede <b>halten</b></i> · <i>Kritik <b>üben</b></i> · <i>einen Antrag <b>stellen</b></i> · <i>Rücksicht <b>nehmen</b></i> · <i>Bescheid <b>sagen</b></i>.</p>
<p>Sommige hebben een voorzetsel: <i><b>in</b> Frage <b>stellen</b>, <b>zur</b> Verfügung <b>stehen</b>, <b>in</b> Kraft <b>treten</b>, <b>zu</b> Ende <b>gehen</b></i>.</p>
<p>Vaak bestaat er ook een gewoon werkwoord: <i>eine Entscheidung treffen = entscheiden</i>. De combinatie klinkt formeler en past in kranten en brieven.</p>
<p><b>Uitzondering:</b> ontkennen doe je meestal met <b>kein</b> (<i>Er hat <b>keine</b> Entscheidung getroffen</i>), maar bij combinaties met een voorzetsel met <b>nicht</b>: <i>Das steht <b>nicht</b> zur Verfügung.</i> <b>Waarom?</b> <i>Kein</i> ontkent een naamwoord met <i>ein</i> of zonder lidwoord; na een voorzetsel hoort het naamwoord bij een vaste groep die je als geheel ontkent.</p>`,
        table: [['Nederlands', 'Duits', 'gewoon werkwoord'], ['een beslissing nemen', 'eine Entscheidung treffen', 'entscheiden'], ['een vraag stellen', 'eine Frage stellen', 'fragen'], ['een toespraak houden', 'eine Rede halten', 'reden'], ['ter discussie stellen', 'in Frage stellen', 'bezweifeln'], ['in werking treden', 'in Kraft treten', '(gelten)']],
        sum: 'eine Entscheidung treffen, eine Rede halten, in Frage stellen, zu Ende gehen',
        ex: [['Die Regierung musste schnell eine Entscheidung treffen.', 'De regering moest snel een beslissing nemen.'], ['Die Kirchen spielten 1989 eine wichtige Rolle.', 'De kerken speelden in 1989 een belangrijke rol.'], ['Das neue Gesetz tritt am 1. Januar in Kraft.', 'De nieuwe wet treedt op 1 januari in werking.']] },
      { t: 'Het zal wel …: vermoeden met werden', es: 'Futur I und II als Vermutung',
        html: `<p><b>Werden</b> + heel werkwoord drukt niet alleen de toekomst uit, maar ook een <b>vermoeden over nu</b>, vaak met <i>wohl, sicher, wahrscheinlich</i>: <i>Er <b>wird</b> wohl noch im Büro <b>sein</b></i> (hij zal nog wel op kantoor zijn).</p>
<p>Een vermoeden over het <b>verleden</b> krijgt <b>werden</b> + deelwoord + <b>haben/sein</b> (Futur II): <i>Sie <b>wird</b> den Zug <b>verpasst haben</b></i> (ze zal de trein wel gemist hebben). <i>Er <b>wird</b> schon nach Hause <b>gegangen sein</b>.</i></p>
<p>Hetzelfde Futur II betekent ook <i>zal hebben gedaan</i> in de toekomst: <i>Bis Freitag <b>werde</b> ich das Buch <b>gelesen haben</b>.</i></p>
<p><b>Uitzondering:</b> het Nederlandse <i>zal … hebben</i> heeft <i>hebben</i> vóór het deelwoord, het Duits zet <i>haben/sein</i> <b>achter</b> het deelwoord: <i>gelesen <b>haben</b></i>. <b>Waarom?</b> In de Duitse werkwoordsgroep aan het einde staat het hulpwerkwoord altijd na het deelwoord waar het bij hoort.</p>`,
        table: [['', 'vorm', 'betekenis'], ['vermoeden nu', 'Sie wird wohl krank sein.', 'Ze zal wel ziek zijn.'], ['vermoeden verleden', 'Er wird es vergessen haben.', 'Hij zal het wel vergeten zijn.'], ['af in de toekomst', 'Bis morgen werde ich es erledigt haben.', 'Morgen zal ik het afgehandeld hebben.']],
        ex: [['Das wird wohl stimmen.', 'Dat zal wel kloppen.'], ['Die Grenzer werden nicht gewusst haben, was sie tun sollten.', 'De grenswachten zullen niet geweten hebben wat ze moesten doen.'], ['In zehn Jahren wird sich vieles verändert haben.', 'Over tien jaar zal er veel veranderd zijn.']] }
    ],
    dialogue: {
      t: 'An der Bernauer Straße', place: 'Berlin 🇩🇪',
      lines: [
        ['Anna', 'Hier verlief also die Mauer. Waren Sie am 9. November 1989 in Berlin, Herr Lehmann?', 'Hier liep dus de Muur. Was u op 9 november 1989 in Berlijn, meneer Lehmann?'],
        ['Herr Lehmann', 'Ja, ich wohnte dort drüben, im Osten. Ich war 24 und dachte, die Mauer würde ewig stehen.', 'Ja, ik woonde daar aan de overkant, in het oosten. Ik was 24 en dacht dat de Muur er eeuwig zou staan.'],
        ['Anna', 'Wie haben Sie es erfahren?', 'Hoe bent u het te weten gekomen?'],
        ['Herr Lehmann', 'Im Fernsehen. Ein Politiker hielt eine Pressekonferenz und sagte, die Grenze sei ab sofort offen. Er wird selbst nicht verstanden haben, was er da sagte.', 'Op tv. Een politicus hield een persconferentie en zei dat de grens per direct open was. Hij zal zelf niet begrepen hebben wat hij daar zei.'],
        ['Anna', 'Und dann?', 'En toen?'],
        ['Herr Lehmann', 'Ich habe sofort eine Entscheidung getroffen und bin losgegangen. Tausende standen schon da. Die Grenzer wussten nicht, was sie tun sollten.', 'Ik heb meteen een beslissing genomen en ben vertrokken. Duizenden stonden er al. De grenswachten wisten niet wat ze moesten doen.'],
        ['Anna', 'Das muss unglaublich gewesen sein.', 'Dat moet ongelooflijk zijn geweest.'],
        ['Herr Lehmann', 'Fremde Menschen haben sich umarmt. In dieser Nacht ging für mich eine Welt zu Ende, und eine neue fing an.', 'Vreemden omhelsden elkaar. In die nacht liep voor mij een wereld ten einde, en een nieuwe begon.']
      ],
      q: [
        { t: 'mc', q: 'Wo wohnte Herr Lehmann 1989?', o: ['Im Osten Berlins', 'Im Westen Berlins', 'In München'] },
        { t: 'mc', q: 'Wie hat er vom Mauerfall erfahren?', o: ['Durch eine Pressekonferenz im Fernsehen', 'Von einem Grenzer', 'Aus der Zeitung am nächsten Tag'] },
        { t: 'mc', q: 'Was hat er dann gemacht?', o: ['Er ist sofort zur Grenze gegangen', 'Er ist zu Hause geblieben', 'Er hat seine Eltern angerufen'] }
      ]
    },
    culture: { t: '9 november 1989 en wat erna kwam', html: `<p>🧱 Van 1961 tot 1989 deelde de <b>Berlijnse Muur</b> de stad. Op de avond van <b>9 november 1989</b> las partijwoordvoerder Günter Schabowski op een persconferentie een briefje voor over nieuwe reisregels. Op de vraag wanneer die ingingen, stamelde hij: <i>«Das tritt nach meiner Kenntnis … ist das sofort, unverzüglich.»</i> Diezelfde nacht gingen de grensposten open.</p>
<p>Daaraan gingen maanden van <b>Montagsdemonstrationen</b> vooraf, vooral in Leipzig, met de leus <i>«Wir sind das Volk»</i>. Dat het vreedzaam bleef, heet <i>die Friedliche Revolution</i>.</p>
<p>Op <b>3 oktober 1990</b> volgde de hereniging; dat is nu de nationale feestdag, <i>der Tag der Deutschen Einheit</i>. Verschillen tussen oost en west in loon, vermogen en stemgedrag bestaan nog steeds; de woorden <b>Ossi</b> en <b>Wessi</b> hoor je nog, maar gebruik ze zelf liever niet.</p>` },
    ex: [
      { t: 'cloze', s: 'Wir müssen eine Entscheidung ___.', a: ['treffen'], o: ['treffen', 'nehmen', 'machen'], nl: 'We moeten een beslissing nemen.', x: 'Vaste combinatie: eine Entscheidung treffen. Het Nederlandse «nemen» werkt hier niet.', tag: 'de-nomverb' },
      { t: 'cloze', s: 'Darf ich eine Frage ___?', a: ['stellen'], o: ['stellen', 'fragen', 'geben'], nl: 'Mag ik een vraag stellen?', tag: 'de-nomverb' },
      { t: 'cloze', s: 'Der Präsident hat eine Rede ___.', a: ['gehalten'], o: ['gehalten', 'gegeben', 'gemacht'], nl: 'De president heeft een toespraak gehouden.', tag: 'de-nomverb' },
      { t: 'cloze', s: 'Das Gesetz tritt morgen in ___.', a: ['Kraft'], o: ['Kraft', 'Frage', 'Ende'], nl: 'De wet treedt morgen in werking.', tag: 'de-nomverb' },
      { t: 'cloze', s: 'Er ___ wohl noch im Büro sein.', a: ['wird'], o: ['wird', 'würde', 'wurde'], nl: 'Hij zal nog wel op kantoor zijn.', tag: 'de-futur2' },
      { t: 'cloze', s: 'Sie wird den Zug verpasst ___.', a: ['haben'], o: ['haben', 'sein', 'werden'], nl: 'Ze zal de trein wel gemist hebben.', x: 'Uitzondering t.o.v. het Nederlands: haben staat áchter het deelwoord. Reden: het hulpwerkwoord volgt in het Duits altijd op zijn deelwoord.', tag: 'de-futur2' },
      { t: 'cloze', s: 'Er wird schon nach Hause gegangen ___.', a: ['sein'], o: ['sein', 'haben', 'werden'], nl: 'Hij zal al wel naar huis gegaan zijn.', tag: 'de-futur2' },
      { t: 'mc', q: 'Hoe ontken je «Das steht zur Verfügung»?', o: ['Das steht nicht zur Verfügung.', 'Das steht zu keiner Verfügung.', 'Das steht kein zur Verfügung.'], x: 'Uitzondering: bij een combinatie met voorzetsel ontken je met nicht, niet met kein. Reden: je ontkent de vaste groep als geheel.', tag: 'de-nomverb' },
      { t: 'mc', q: 'Wat betekent «Das wird wohl stimmen»?', o: ['Dat zal wel kloppen.', 'Dat gaat straks stemmen.', 'Dat werd goed gestemd.'], tag: 'de-futur2' },
      { t: 'mc', q: 'Wat is «die Wende»?', o: ['de omwenteling van 1989', 'de muur', 'de bocht in de weg alleen'], tag: 'de-vok' },
      { t: 'tr', nl: 'Dat speelt geen rol.', a: ['Das spielt keine Rolle.'], tag: 'de-nomverb' },
      { t: 'tr', nl: 'Ze zal wel ziek zijn.', a: ['Sie wird wohl krank sein.', 'Sie wird sicher krank sein.', 'Sie wird wahrscheinlich krank sein.'], tag: 'de-futur2' },
      { t: 'tr', nl: 'Hij zal het wel vergeten zijn.', a: ['Er wird es wohl vergessen haben.', 'Er wird es vergessen haben.', 'Er wird es sicher vergessen haben.'], tag: 'de-futur2' },
      { t: 'order', s: 'Die Kirchen spielten 1989 eine wichtige Rolle.', nl: 'De kerken speelden in 1989 een belangrijke rol.', tag: 'de-nomverb' },
      { t: 'match', p: [['die Grenze', 'de grens'], ['fliehen', 'vluchten'], ['friedlich', 'vreedzaam'], ['das Denkmal', 'het monument'], ['die Freiheit', 'de vrijheid']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Der Tunnel unter der Mauer', type: 'Historisch artikel',
      p: [
        ['Im Sommer 1964 trafen einige Studenten in West-Berlin eine gefährliche Entscheidung: Sie wollten einen Tunnel nach Ost-Berlin graben, um Freunde und Verwandte in den Westen zu holen. Sechs Monate lang arbeiteten sie im Keller einer alten Bäckerei.', 'In de zomer van 1964 namen enkele studenten in West-Berlijn een gevaarlijke beslissing: ze wilden een tunnel naar Oost-Berlijn graven om vrienden en familie naar het westen te halen. Zes maanden lang werkten ze in de kelder van een oude bakkerij.'],
        ['Der Tunnel war 145 Meter lang und lag zwölf Meter unter der Erde. In zwei Nächten im Oktober flohen 57 Menschen, weshalb er heute «Tunnel 57» heißt. Dann wurde er verraten. Wer es war, weiß man bis heute nicht genau; die Stasi wird wohl einen Spitzel unter den Helfern gehabt haben.', 'De tunnel was 145 meter lang en lag twaalf meter onder de grond. In twee nachten in oktober vluchtten 57 mensen, waardoor hij nu «Tunnel 57» heet. Toen werd hij verraden. Wie het was, weet men tot op heden niet precies; de Stasi zal wel een verklikker onder de helpers gehad hebben.'],
        ['Einer der Studenten, Joachim Neumann, wurde später Ingenieur und baute Tunnel in der ganzen Welt, auch den unter dem Ärmelkanal. Über 1964 sagt er, er habe keine Angst gehabt, nur ein Ziel: Seine Freundin war noch drüben. Sie kam durch seinen Tunnel. Die beiden sind bis heute verheiratet.', 'Een van de studenten, Joachim Neumann, werd later ingenieur en bouwde tunnels over de hele wereld, ook die onder het Kanaal. Over 1964 zegt hij dat hij geen angst had, alleen een doel: zijn vriendin was nog aan de overkant. Ze kwam door zijn tunnel. De twee zijn tot op heden getrouwd.']
      ],
      gl: [['graben', 'graven'], ['die Verwandten', 'de familieleden'], ['verraten', 'verraden'], ['der Spitzel', 'de verklikker'], ['der Ärmelkanal', 'het Kanaal'], ['drüben', 'aan de overkant']],
      q: [
        { t: 'mc', q: 'Warum heißt der Tunnel «Tunnel 57»?', o: ['Weil 57 Menschen durch ihn flohen', 'Weil er 57 Meter lang war', 'Weil er 1957 gebaut wurde'] },
        { t: 'mc', q: 'Wo begann der Tunnel?', o: ['Im Keller einer alten Bäckerei', 'In einer Kirche', 'In einem Bahnhof'] },
        { t: 'mc', q: 'Warum hat Joachim Neumann mitgemacht?', o: ['Seine Freundin war noch im Osten', 'Er wollte Ingenieur werden', 'Er bekam Geld dafür'] }
      ]
    },
    say: [['Wir müssen eine Entscheidung treffen.', 'We moeten een beslissing nemen.'], ['Das wird wohl stimmen.', 'Dat zal wel kloppen.'], ['Er wird es vergessen haben.', 'Hij zal het wel vergeten zijn.']],
    task: { nl: 'Vertel in 4 zinnen over een historische gebeurtenis die jij je herinnert of van je ouders kent. Gebruik twee vaste combinaties (eine Rolle spielen, eine Entscheidung treffen, zu Ende gehen) en één vermoeden met wird wohl.', model: '1989 war ich noch ein Kind, aber meine Eltern haben den Mauerfall im Fernsehen gesehen. Für sie ging an diesem Abend der Kalte Krieg zu Ende. Mein Vater traf sofort die Entscheidung, nach Berlin zu fahren. Er wird wohl geweint haben, aber das sagt er nicht.' },
    scenario: { nl: 'Je staat bij het Muurmonument in Berlijn en raakt in gesprek met een oudere Berlijner.', role: 'Herr Lehmann, opgegroeid in Oost-Berlijn, vertelt graag en eerlijk over toen', goal: 'Vraag beleefd naar zijn herinneringen aan 1989, reageer met een vermoeden (Das wird … gewesen sein) en vraag wat er sindsdien veranderd is.' }
  });

  /* ───────────────────────── B2 · 8 ───────────────────────── */
  U({
    id: 'de-b2-08', level: 'B2', icon: '💬', title: 'Beziehungen und Gefühle', nl: 'Gevoelens: de kleine woordjes doch, ja, mal',
    goals: ['Over vriendschap, relaties en gevoelens praten', 'Kleurwoordjes begrijpen en gebruiken (doch, ja, mal, halt, eben, eigentlich)', 'Bijvoeglijke naamwoorden met een vast voorzetsel gebruiken', 'Natuurlijker en vriendelijker klinken'],
    vocab: [
      ['die Beziehung', 'de relatie'], ['die Freundschaft', 'de vriendschap'], ['das Vertrauen', 'het vertrouwen'], ['vertrauen', 'vertrouwen'], ['sich verlassen auf', 'rekenen op'],
      ['sich streiten', 'ruzie maken'], ['sich versöhnen', 'het goedmaken'], ['sich trennen', 'uit elkaar gaan'], ['die Eifersucht', 'de jaloezie'], ['eifersüchtig auf', 'jaloers op'],
      ['stolz auf', 'trots op'], ['enttäuscht von', 'teleurgesteld in'], ['zufrieden mit', 'tevreden met'], ['wütend auf', 'boos op'], ['dankbar für', 'dankbaar voor'],
      ['abhängig von', 'afhankelijk van'], ['verliebt in', 'verliefd op'], ['neidisch auf', 'afgunstig op'], ['die Sehnsucht', 'het verlangen'], ['das Missverständnis', 'het misverstand'],
      ['ehrlich', 'eerlijk'], ['verletzen', 'kwetsen'], ['sich entschuldigen', 'zijn excuses aanbieden'], ['verzeihen', 'vergeven'], ['die Geduld', 'het geduld'], ['einsam', 'eenzaam']
    ],
    grammar: [
      { t: 'Doch, ja, mal, halt: woordjes die de toon zetten', es: 'Modalpartikeln',
        html: `<p>Gesproken Duits zit vol kleine woordjes zonder echte betekenis. Ze zeggen iets over de <b>houding</b> van de spreker. Zonder klinkt een zin vaak kortaf. Het Nederlands heeft ze ook (<i>toch, maar, even, nou</i>), maar ze komen niet één op één overeen.</p>
<p><b>mal</b> maakt een verzoek vriendelijk: <i>Komm <b>mal</b> her.</i> (kom eens)<br><b>doch</b> dringt aan of spreekt tegen: <i>Komm <b>doch</b> mit!</i> · <i>Das habe ich dir <b>doch</b> gesagt!</i><br><b>ja</b> = zoals we allebei weten, of verbazing: <i>Du kennst ihn <b>ja</b>.</i> · <i>Das ist <b>ja</b> toll!</i><br><b>denn</b> maakt een vraag belangstellend: <i>Was ist <b>denn</b> los?</i><br><b>halt / eben</b> = het is nu eenmaal zo: <i>Das ist <b>halt</b> so.</i><br><b>eigentlich</b> = trouwens, eigenlijk: <i>Wie alt bist du <b>eigentlich</b>?</i><br><b>schon</b> stelt gerust: <i>Das klappt <b>schon</b>.</i></p>
<p>Ze staan in het midden van de zin, meestal direct na het werkwoord en de voornaamwoorden, en krijgen <b>nooit klemtoon</b>.</p>
<p><b>Uitzondering:</b> met klemtoon zijn het gewone woorden met een andere betekenis: <i><b>Ja</b>, das stimmt</i> (ja), <i>Kommst du nicht? <b>Doch!</b></i> (jawel), <i>…, <b>denn</b> ich bin müde</i> (want). <b>Waarom?</b> De kleurwoordjes zijn ontstaan uit die gewone woorden; ze hebben hun klemtoon en letterlijke betekenis verloren en alleen de gevoelswaarde gehouden.</p>`,
        table: [['woordje', 'gevoelswaarde', 'voorbeeld'], ['mal', 'vriendelijk verzoek', 'Schau mal!'], ['doch', 'aandringen, tegenspreken', 'Setz dich doch!'], ['ja', 'bekend / verbazing', 'Das ist ja interessant.'], ['denn', 'belangstelling in vraag', 'Wo warst du denn?'], ['halt, eben', 'het is nu eenmaal zo', 'So ist das eben.'], ['schon', 'geruststelling', 'Das wird schon.']],
        sum: 'Komm mal her. Das ist ja toll! Was ist denn los? Das ist halt so.',
        ex: [['Ruf mich doch mal an!', 'Bel me toch eens!'], ['Du weißt ja, wie er ist.', 'Je weet toch hoe hij is.'], ['Was hast du denn?', 'Wat is er dan met je?']] },
      { t: 'Stolz auf, zufrieden mit: het voorzetsel hoort erbij', es: 'Adjektive mit Präpositionen',
        html: `<p>Veel bijvoeglijke naamwoorden hebben een <b>vast voorzetsel</b>, en dat is vaak een ander dan in het Nederlands. Leer ze met voorzetsel én naamval:</p>
<p><i>stolz <b>auf</b> + 4</i> (trots op) · <i>wütend <b>auf</b> + 4</i> (boos op) · <i>verliebt <b>in</b> + 4</i> (verliefd <b>op</b>) · <i>enttäuscht <b>von</b> + 3</i> (teleurgesteld <b>in</b>) · <i>zufrieden <b>mit</b> + 3</i> · <i>abhängig <b>von</b> + 3</i> · <i>dankbar <b>für</b> + 4</i> · <i>interessiert <b>an</b> + 3</i> (geïnteresseerd <b>in</b>).</p>
<p>Verwijs je naar een ding of een hele zin, dan gebruik je <b>da(r)-</b>: <i>Ich bin stolz <b>darauf</b>, dass …</i> Bij personen blijft het voornaamwoord: <i>Ich bin stolz <b>auf dich</b>.</i> Vragen: <i><b>Worauf</b> bist du stolz? <b>Auf wen</b> bist du wütend?</i></p>
<p><b>Uitzondering:</b> bij deze vaste voorzetsels geldt de regel «plaats = derde, richting = vierde naamval» niet. <i>Auf</i> en <i>in</i> krijgen hier vrijwel altijd de <b>vierde</b>, <i>an</i> meestal de <b>derde</b>. <b>Waarom?</b> Het voorzetsel heeft zijn ruimtelijke betekenis verloren; de naamval is daarom per combinatie vastgelegd.</p>`,
        table: [['Duits', 'naamval', 'Nederlands'], ['stolz auf', '4', 'trots op'], ['verliebt in', '4', 'verliefd op'], ['enttäuscht von', '3', 'teleurgesteld in'], ['interessiert an', '3', 'geïnteresseerd in'], ['zufrieden mit', '3', 'tevreden met'], ['dankbar für', '4', 'dankbaar voor']],
        ex: [['Ich bin sehr stolz auf dich.', 'Ik ben heel trots op je.'], ['Sie ist enttäuscht von ihrem Freund.', 'Ze is teleurgesteld in haar vriend.'], ['Bist du zufrieden damit?', 'Ben je er tevreden mee?']] }
    ],
    dialogue: {
      t: 'Streit unter Freunden', place: 'Köln 🇩🇪',
      lines: [
        ['Anna', 'Was ist denn los mit dir? Du sagst ja gar nichts.', 'Wat is er dan met je? Je zegt helemaal niets.'],
        ['Max', 'Ach, ich bin wütend auf Paul. Er hat meinen Geburtstag vergessen. Schon wieder.', 'Ach, ik ben boos op Paul. Hij is mijn verjaardag vergeten. Alweer.'],
        ['Anna', 'Das ist halt Paul. Du kennst ihn doch.', 'Dat is nu eenmaal Paul. Je kent hem toch.'],
        ['Max', 'Eben. Seit zwanzig Jahren. Ich bin einfach enttäuscht von ihm.', 'Precies. Al twintig jaar. Ik ben gewoon teleurgesteld in hem.'],
        ['Anna', 'Hast du ihm das eigentlich mal gesagt?', 'Heb je hem dat eigenlijk weleens gezegd?'],
        ['Max', 'Nein. Er müsste das doch selbst merken.', 'Nee. Hij zou dat toch zelf moeten merken.'],
        ['Anna', 'Ruf ihn doch einfach mal an. Auf ihn kann man sich sonst immer verlassen.', 'Bel hem toch gewoon eens. Verder kun je altijd op hem rekenen.'],
        ['Max', 'Stimmt schon. Beim Umzug war er als Erster da. Na gut, ich rufe ihn an.', 'Dat klopt wel. Bij de verhuizing was hij er als eerste. Nou goed, ik bel hem.'],
        ['Anna', 'Siehst du. Das wird schon wieder.', 'Zie je wel. Dat komt wel weer goed.']
      ],
      q: [
        { t: 'mc', q: 'Warum ist Max wütend auf Paul?', o: ['Paul hat seinen Geburtstag vergessen', 'Paul hat beim Umzug nicht geholfen', 'Paul hat ihn angelogen'] },
        { t: 'mc', q: 'Was rät Anna?', o: ['Paul einfach mal anzurufen', 'Paul nie wieder zu sehen', 'Paul einen Brief zu schreiben'] },
        { t: 'mc', q: 'Was sagt Max am Ende über Paul?', o: ['Beim Umzug war er als Erster da', 'Er sei kein Freund mehr', 'Er habe sich entschuldigt'] }
      ]
    },
    culture: { t: 'Freund of Bekannter? En de kunst van het directe', html: `<p>Een Duitser noemt niet iedereen snel een <b>Freund</b>. Collega’s en mensen van de sportclub zijn <b>Bekannte</b> (kennissen); een <i>Freund</i> ken je vaak al jaren. <i>Mein Freund / meine Freundin</i> betekent meestal je partner; een gewone vriend is <i>ein Freund von mir</i>.</p>
<p>🗣️ Duitsers staan bekend als <b>direct</b>, en Nederlanders ook, maar net anders. Een Duitser zegt eerlijk dat je plan niet deugt, maar verpakt verzoeken juist zorgvuldig: <i>«Könntest du vielleicht mal …?»</i> Een kaal <i>«Gib mir das»</i> klinkt bot. De kleurwoordjes <i>mal, doch, bitte</i> zijn dus geen versiering, maar beleefdheid.</p>
<p>En het aanbieden van het <b>Du</b> is een klein ritueel, soms nog met een glas: <i>«Wollen wir uns nicht duzen? Ich bin der Max.»</i></p>` },
    ex: [
      { t: 'cloze', s: 'Komm ___ her! (vriendelijk: kom eens)', a: ['mal'], o: ['mal', 'denn', 'ja'], nl: 'Kom eens hier!', tag: 'de-partikel' },
      { t: 'cloze', s: 'Was ist ___ los? (belangstellend)', a: ['denn'], o: ['denn', 'mal', 'halt'], nl: 'Wat is er dan aan de hand?', tag: 'de-partikel' },
      { t: 'cloze', s: 'Das ist ___ toll! (verbaasd)', a: ['ja'], o: ['ja', 'mal', 'denn'], nl: 'Dat is toch geweldig!', tag: 'de-partikel' },
      { t: 'cloze', s: 'Das ist ___ so. (het is nu eenmaal zo)', a: ['halt'], o: ['halt', 'mal', 'denn'], nl: 'Dat is nu eenmaal zo.', tag: 'de-partikel' },
      { t: 'cloze', s: 'Ich bin stolz ___ dich.', a: ['auf'], o: ['auf', 'über', 'von'], nl: 'Ik ben trots op je.', tag: 'de-adjprep' },
      { t: 'cloze', s: 'Sie ist verliebt ___ ihn.', a: ['in'], o: ['in', 'auf', 'an'], nl: 'Ze is verliefd op hem.', x: 'Let op: Nederlands «op», Duits «in» + vierde naamval.', tag: 'de-adjprep' },
      { t: 'cloze', s: 'Ich bin enttäuscht ___ ihm.', a: ['von'], o: ['von', 'in', 'auf'], nl: 'Ik ben teleurgesteld in hem.', tag: 'de-adjprep' },
      { t: 'mc', q: '«Kommst du nicht mit?» Je gaat wél mee. Wat zeg je?', o: ['Doch!', 'Ja!', 'Mal!'], x: 'Uitzondering: met klemtoon is doch geen kleurwoordje maar «jawel». Reden: het kleurwoordje is uit dit gewone woord ontstaan.', tag: 'de-partikel' },
      { t: 'mc', q: 'Ik ben trots op mijn werk. → «Ich bin stolz …»', o: ['darauf', 'auf es', 'davon'], x: 'Bij dingen gebruik je da(r)- + voorzetsel; bij personen het voornaamwoord (auf dich).', tag: 'de-adjprep' },
      { t: 'mc', q: 'Welke naamval volgt op «interessiert an»?', o: ['de derde naamval', 'de vierde naamval', 'de tweede naamval'], x: 'Uitzondering: bij vaste voorzetsels geldt de wo/wohin-regel niet; de naamval ligt per combinatie vast.', tag: 'de-adjprep' },
      { t: 'tr', nl: 'Bel me toch eens!', a: ['Ruf mich doch mal an!', 'Ruf mich doch einmal an!'], tag: 'de-partikel' },
      { t: 'tr', nl: 'Ben je tevreden met je werk?', a: ['Bist du zufrieden mit deiner Arbeit?', 'Bist du mit deiner Arbeit zufrieden?'], tag: 'de-adjprep' },
      { t: 'tr', nl: 'Op wie ben je boos?', a: ['Auf wen bist du wütend?', 'Auf wen bist du böse?'], tag: 'de-adjprep' },
      { t: 'order', s: 'Du weißt ja, wie er ist.', nl: 'Je weet toch hoe hij is.', tag: 'de-partikel' },
      { t: 'match', p: [['das Vertrauen', 'het vertrouwen'], ['sich streiten', 'ruzie maken'], ['verzeihen', 'vergeven'], ['einsam', 'eenzaam'], ['die Geduld', 'het geduld']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Liebe Frau Sommer …', type: 'Lezersvraag en antwoord',
      p: [
        ['«Meine beste Freundin ist vor einem Jahr nach Zürich gezogen. Am Anfang haben wir jeden Tag telefoniert. Jetzt meldet sie sich kaum noch. Ich bin enttäuscht von ihr und, ehrlich gesagt, auch ein bisschen neidisch auf ihr neues Leben. Soll ich ihr das sagen?» (Carla, 34)', '«Mijn beste vriendin is een jaar geleden naar Zürich verhuisd. In het begin belden we elke dag. Nu laat ze bijna niets meer van zich horen. Ik ben teleurgesteld in haar en, eerlijk gezegd, ook een beetje afgunstig op haar nieuwe leven. Moet ik haar dat zeggen?» (Carla, 34)'],
        ['Liebe Carla, ja, sagen Sie es ihr doch. Aber nicht als Vorwurf. Ihre Freundin wird wohl nicht aus bösem Willen schweigen; ein neues Land kostet eben viel Kraft. Vielleicht ist sie dort einsamer, als Sie denken, und schämt sich dafür.', 'Beste Carla, ja, zeg het haar toch. Maar niet als verwijt. Uw vriendin zal wel niet uit kwade wil zwijgen; een nieuw land kost nu eenmaal veel kracht. Misschien is ze daar eenzamer dan u denkt, en schaamt ze zich daarvoor.'],
        ['Schreiben Sie ihr ruhig mal einen richtigen Brief. Erzählen Sie, worauf Sie stolz sind und wovor Sie Angst haben. Freundschaften sind nicht davon abhängig, wie oft man telefoniert, sondern davon, ob man ehrlich sein kann. Und fahren Sie hin. Zürich ist ja nicht aus der Welt.', 'Schrijf haar gerust eens een echte brief. Vertel waar u trots op bent en waar u bang voor bent. Vriendschappen hangen er niet van af hoe vaak je belt, maar of je eerlijk kunt zijn. En ga erheen. Zürich is toch niet het einde van de wereld.']
      ],
      gl: [['sich melden', 'van zich laten horen'], ['der Vorwurf', 'het verwijt'], ['schweigen', 'zwijgen'], ['sich schämen', 'zich schamen'], ['nicht aus der Welt', 'niet het einde van de wereld']],
      q: [
        { t: 'mc', q: 'Was ist Carlas Problem?', o: ['Ihre Freundin meldet sich kaum noch', 'Sie muss nach Zürich ziehen', 'Sie hat sich mit ihrer Freundin gestritten'] },
        { t: 'mc', q: 'Was vermutet Frau Sommer?', o: ['Die Freundin ist vielleicht einsamer, als Carla denkt', 'Die Freundin will keine Freundschaft mehr', 'Die Freundin hat keine Zeit'] },
        { t: 'mc', q: 'Wovon sind Freundschaften laut Frau Sommer abhängig?', o: ['Davon, ob man ehrlich sein kann', 'Davon, wie oft man telefoniert', 'Davon, wo man wohnt'] }
      ]
    },
    say: [['Was ist denn los?', 'Wat is er dan aan de hand?'], ['Ruf mich doch mal an!', 'Bel me toch eens!'], ['Ich bin sehr stolz auf dich.', 'Ik ben heel trots op je.']],
    task: { nl: 'Schrijf een kort bericht (4 zinnen) aan een vriend met wie je een misverstand hebt gehad. Gebruik drie kleurwoordjes (doch, mal, ja, eigentlich) en twee bijvoeglijke naamwoorden met voorzetsel.', model: 'Hallo Tom, ich war gestern ja ziemlich wütend auf dich, das tut mir leid. Eigentlich war ich nur enttäuscht von mir selbst. Komm doch am Samstag mal vorbei, dann reden wir. Ich bin dankbar für deine Geduld.' },
    scenario: { nl: 'Een Duitse vriend is boos op een gezamenlijke kennis. Jij probeert te bemiddelen.', role: 'Max, een trouwe maar snel gekwetste vriend uit Keulen', goal: 'Vraag wat er is (Was ist denn los?), toon begrip, en haal hem over om te bellen (Ruf ihn doch mal an).' }
  });

  /* ───────────────────────── B2 · 9 ───────────────────────── */
  U({
    id: 'de-b2-09', level: 'B2', icon: '📈', title: 'Wirtschaft und Konsum', nl: 'Economie: compact schrijven met naamwoorden',
    goals: ['Over economie, prijzen en koopgedrag praten', 'Een bijzin omzetten naar voorzetsel + naamwoord', 'Aufgrund, infolge, dank en mithilfe gebruiken', 'Een grafiek of trend beschrijven'],
    vocab: [
      ['die Wirtschaft', 'de economie'], ['das Unternehmen', 'de onderneming'], ['der Umsatz', 'de omzet'], ['der Gewinn', 'de winst'], ['der Verlust', 'het verlies'],
      ['die Inflation', 'de inflatie'], ['die Zinsen', 'de rente'], ['die Steuer', 'de belasting'], ['der Verbraucher', 'de consument'], ['die Nachfrage', 'de vraag'],
      ['das Angebot', 'het aanbod, de aanbieding'], ['der Wettbewerb', 'de concurrentie'], ['die Konkurrenz', 'de concurrent(ie)'], ['die Arbeitslosigkeit', 'de werkloosheid'], ['der Fachkräftemangel', 'het tekort aan vakmensen'],
      ['investieren in', 'investeren in'], ['die Schulden', 'de schulden'], ['sich leisten', 'zich veroorloven'], ['der Rückgang', 'de daling'], ['der Anstieg', 'de stijging'],
      ['das Wachstum', 'de groei'], ['die Lieferung', 'de levering'], ['der Mittelstand', 'het midden- en kleinbedrijf'], ['aufgrund', 'op grond van, vanwege'], ['infolge', 'als gevolg van'], ['dank', 'dankzij']
    ],
    grammar: [
      { t: 'Van bijzin naar naamwoord', es: 'Nominalisierung: vom Nebensatz zur Nominalgruppe',
        html: `<p>Kranten, rapporten en zakelijke mails vervangen een bijzin graag door <b>voorzetsel + naamwoord</b>. De inhoud is gelijk, de stijl compacter:</p>
<p><i><b>Weil</b> die Preise <b>steigen</b>, kaufen die Leute weniger.</i> → <i><b>Wegen</b> der <b>steigenden Preise</b> / <b>Wegen des Anstiegs</b> der Preise kaufen die Leute weniger.</i></p>
<p>Zo ga je te werk: 1. kies het voorzetsel dat bij het voegwoord hoort; 2. maak van het werkwoord een naamwoord (<i>steigen → der Anstieg, sinken → der Rückgang, liefern → die Lieferung</i>); 3. het oude onderwerp komt erachter in de <b>tweede naamval</b>.</p>
<p>Het werkwoord staat daarna direct achter de groep, want die telt als plaats één.</p>
<p><b>Uitzondering:</b> het naamwoord is niet altijd het werkwoord + <i>-ung</i>. Veel sterke werkwoorden hebben een kort naamwoord met een andere klinker: <i>steigen → der <b>Anstieg</b>, zurückgehen → der <b>Rückgang</b>, verlieren → der <b>Verlust</b>, wachsen → das <b>Wachstum</b></i>. <b>Waarom?</b> Deze naamwoorden zijn ouder dan het achtervoegsel <i>-ung</i> en zijn rechtstreeks van de stam gevormd, vaak van de verleden-tijdsklinker.</p>`,
        table: [['voegwoord (bijzin)', 'voorzetsel (naamwoord)', 'voorbeeld'], ['weil, da', 'wegen, aufgrund + 2', 'wegen der Inflation'], ['obwohl', 'trotz + 2', 'trotz des Verlusts'], ['während', 'während + 2', 'während der Krise'], ['nachdem', 'nach + 3', 'nach der Lieferung'], ['bevor', 'vor + 3', 'vor dem Kauf'], ['wenn, falls', 'bei + 3', 'bei steigender Nachfrage'], ['um … zu, damit', 'zu + 3, für + 4', 'zur Senkung der Kosten']],
        sum: 'Weil die Preise steigen → wegen der steigenden Preise. Obwohl es regnet → trotz des Regens.',
        ex: [['Trotz des Rückgangs der Nachfrage investiert die Firma weiter.', 'Ondanks de daling van de vraag investeert het bedrijf verder.'], ['Bei Lieferung bis Freitag gibt es zehn Prozent Rabatt.', 'Bij levering uiterlijk vrijdag is er tien procent korting.'], ['Nach dem Kauf können Sie die Ware 14 Tage zurückgeben.', 'Na de aankoop kunt u de waar 14 dagen terugbrengen.']] },
      { t: 'Aufgrund, infolge, dank, mithilfe', es: 'Präpositionen der Schriftsprache',
        html: `<p>Voor oorzaak en middel heeft geschreven Duits een reeks voorzetsels met de <b>tweede naamval</b>:</p>
<p><b>aufgrund</b> (op grond van, neutrale reden) · <b>infolge</b> (als gevolg van) · <b>dank</b> (dankzij, positieve oorzaak) · <b>mithilfe</b> (met behulp van) · <b>anstatt / statt</b> (in plaats van) · <b>außerhalb / innerhalb</b> (buiten / binnen).</p>
<p><i><b>Aufgrund</b> der hohen Zinsen bauen weniger Leute. <b>Dank</b> der neuen Technik sparen wir Energie. <b>Mithilfe</b> einer App vergleicht sie die Preise.</i></p>
<p>Zonder lidwoord of bijvoeglijk naamwoord zie je de tweede naamval niet; dan gebruik je <b>von + 3</b>: <i>infolge <b>von</b> Streiks, mithilfe <b>von</b> Daten</i>.</p>
<p><b>Uitzondering:</b> <i>dank</i> hoor en lees je ook met de <b>derde</b> naamval (<i>dank deinem Rat</i>). <b>Waarom?</b> Het komt van het werkwoord <i>danken</i>, dat de derde naamval krijgt; pas later is het bij de voorzetsels met de tweede naamval ingedeeld. Beide zijn goed, in het meervoud is de tweede gebruikelijk.</p>`,
        table: [['voorzetsel', 'betekenis', 'voorbeeld'], ['aufgrund', 'op grond van', 'aufgrund der Lage'], ['infolge', 'als gevolg van', 'infolge des Streiks'], ['dank', 'dankzij', 'dank der Förderung'], ['mithilfe', 'met behulp van', 'mithilfe einer Studie'], ['statt', 'in plaats van', 'statt eines Autos']],
        ex: [['Infolge der Krise haben viele ihre Stelle verloren.', 'Als gevolg van de crisis hebben velen hun baan verloren.'], ['Dank des guten Wetters war die Ernte reich.', 'Dankzij het goede weer was de oogst rijk.'], ['Aufgrund von Lieferproblemen ist das Produkt nicht verfügbar.', 'Vanwege leveringsproblemen is het product niet beschikbaar.']] }
    ],
    dialogue: {
      t: 'In der Bäckerei um die Ecke', place: 'Dresden 🇩🇪',
      lines: [
        ['Anna', 'Guten Morgen, Herr Schulze. Die Brötchen sind ja schon wieder teurer geworden.', 'Goedemorgen, meneer Schulze. De broodjes zijn alweer duurder geworden.'],
        ['Herr Schulze', 'Leider. Aufgrund der Energiepreise bleibt mir nichts anderes übrig. Mein Ofen läuft ab drei Uhr nachts.', 'Helaas. Vanwege de energieprijzen blijft me niets anders over. Mijn oven draait vanaf drie uur ’s nachts.'],
        ['Anna', 'Und trotz der höheren Preise kommen die Leute noch?', 'En ondanks de hogere prijzen komen de mensen nog?'],
        ['Herr Schulze', 'Die Stammkunden ja. Aber infolge der Inflation kaufen viele ihr Brot jetzt im Supermarkt.', 'De vaste klanten wel. Maar als gevolg van de inflatie kopen velen hun brood nu in de supermarkt.'],
        ['Anna', 'Das schmeckt doch ganz anders!', 'Dat smaakt toch heel anders!'],
        ['Herr Schulze', 'Eben. Aber das größte Problem ist der Fachkräftemangel. Wer will schon um zwei Uhr aufstehen?', 'Precies. Maar het grootste probleem is het tekort aan vakmensen. Wie wil er nou om twee uur opstaan?'],
        ['Anna', 'Haben Sie keinen Lehrling?', 'Hebt u geen leerling?'],
        ['Herr Schulze', 'Seit diesem Jahr wieder einen, dank einer Förderung der Stadt. Ohne ihn müsste ich montags schließen.', 'Sinds dit jaar weer een, dankzij een subsidie van de stad. Zonder hem zou ik op maandag moeten sluiten.']
      ],
      q: [
        { t: 'mc', q: 'Warum sind die Brötchen teurer?', o: ['Aufgrund der Energiepreise', 'Wegen des Wetters', 'Weil es zu viele Kunden gibt'] },
        { t: 'mc', q: 'Was ist das größte Problem des Bäckers?', o: ['Der Fachkräftemangel', 'Die Konkurrenz im Supermarkt', 'Die Steuern'] },
        { t: 'mc', q: 'Wie hat er einen Lehrling bekommen?', o: ['Dank einer Förderung der Stadt', 'Über eine Stellenanzeige', 'Durch seinen Sohn'] }
      ]
    },
    culture: { t: 'Mittelstand, Ausbildung en contant geld', html: `<p>De ruggengraat van de Duitse economie zijn niet de grote concerns, maar de <b>Mittelstand</b>: honderdduizenden familiebedrijven, vaak al generaties in dezelfde stad, die in hun niche wereldmarktleider zijn.</p>
<p>🔧 Vakmensen worden opgeleid in de <b>duale Ausbildung</b>: drie dagen werken in het bedrijf, twee dagen <i>Berufsschule</i>. Een <i>Meister</i>-titel staat in hoog aanzien. Toch zijn er te weinig <i>Azubis</i> (leerlingen); de <b>Fachkräftemangel</b> is hét economische woord van dit decennium.</p>
<p>💶 En betalen? <i>«Nur Bares ist Wahres»</i> («alleen contant is echt»). In veel bakkerijen, cafés en op markten kun je nog steeds alleen <b>bar</b> betalen. Neem dus altijd wat <b>Bargeld</b> mee, zeker buiten de grote steden.</p>` },
    ex: [
      { t: 'cloze', s: '___ der steigenden Preise kaufen die Leute weniger. (weil → ?)', a: ['Wegen'], o: ['Wegen', 'Trotz', 'Während'], nl: 'Vanwege de stijgende prijzen kopen de mensen minder.', tag: 'de-nominal' },
      { t: 'cloze', s: '___ des Verlusts investiert die Firma weiter. (obwohl → ?)', a: ['Trotz'], o: ['Trotz', 'Wegen', 'Dank'], nl: 'Ondanks het verlies investeert het bedrijf verder.', tag: 'de-nominal' },
      { t: 'cloze', s: '___ dem Kauf sollten Sie die Preise vergleichen. (bevor → ?)', a: ['Vor'], o: ['Vor', 'Nach', 'Bei'], nl: 'Vóór de aankoop zou u de prijzen moeten vergelijken.', tag: 'de-nominal' },
      { t: 'cloze', s: 'steigen → der ___', a: ['Anstieg'], o: ['Anstieg', 'Steigung', 'Gestiegene'], nl: 'stijgen → de stijging', x: 'Uitzondering op -ung: veel sterke werkwoorden hebben een kort naamwoord van de stam (Anstieg, Rückgang, Verlust). Reden: ze zijn ouder dan het achtervoegsel.', tag: 'de-nominal' },
      { t: 'cloze', s: '___ der neuen Technik sparen wir Energie. (positief)', a: ['Dank'], o: ['Dank', 'Infolge', 'Trotz'], nl: 'Dankzij de nieuwe techniek besparen we energie.', tag: 'de-genprep2' },
      { t: 'cloze', s: 'Infolge ___ Krise haben viele ihre Stelle verloren.', a: ['der'], o: ['der', 'die', 'den'], nl: 'Als gevolg van de crisis hebben velen hun baan verloren.', tag: 'de-genprep2' },
      { t: 'cloze', s: 'Aufgrund ___ Lieferproblemen ist das Produkt nicht da.', a: ['von'], o: ['von', 'der', 'des'], nl: 'Vanwege leveringsproblemen is het product er niet.', x: 'Zonder lidwoord is de tweede naamval niet te zien; dan neem je von + derde naamval.', tag: 'de-genprep2' },
      { t: 'mc', q: 'Welke zin betekent hetzelfde als «Obwohl es regnet, gehen wir»?', o: ['Trotz des Regens gehen wir.', 'Wegen des Regens gehen wir.', 'Während des Regens wir gehen.'], tag: 'de-nominal' },
      { t: 'mc', q: '«dank deinem Rat» of «dank deines Rats»?', o: ['Beide zijn goed', 'Alleen dank deines Rats', 'Alleen dank deinem Rat'], x: 'Uitzondering: dank kan met de tweede én de derde naamval. Reden: het komt van danken, dat de derde naamval heeft.', tag: 'de-genprep2' },
      { t: 'mc', q: 'Wat is «der Umsatz»?', o: ['de omzet', 'de winst', 'de verhuizing'], tag: 'de-vok' },
      { t: 'tr', nl: 'Dankzij het goede weer', a: ['Dank des guten Wetters', 'Dank dem guten Wetter'], tag: 'de-genprep2' },
      { t: 'tr', nl: 'Dat kan ik me niet veroorloven.', a: ['Das kann ich mir nicht leisten.'], tag: 'de-vok' },
      { t: 'tr', nl: 'Tijdens de crisis', a: ['Während der Krise', 'In der Krise'], tag: 'de-nominal' },
      { t: 'order', s: 'Trotz des Rückgangs der Nachfrage investiert die Firma weiter.', nl: 'Ondanks de daling van de vraag investeert het bedrijf verder.', tag: 'de-nominal' },
      { t: 'match', p: [['der Gewinn', 'de winst'], ['die Steuer', 'de belasting'], ['der Verbraucher', 'de consument'], ['die Schulden', 'de schulden'], ['das Wachstum', 'de groei']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Deutsche kaufen weniger, aber bewusster', type: 'Economisch bericht',
      p: [
        ['Infolge der hohen Inflation der letzten Jahre haben viele Haushalte in Deutschland ihr Kaufverhalten geändert. Laut einer Studie achten 64 Prozent der Verbraucher beim Einkauf stärker auf den Preis als früher. Aufgrund der gestiegenen Zinsen werden zudem größere Anschaffungen verschoben.', 'Als gevolg van de hoge inflatie van de afgelopen jaren hebben veel huishoudens in Duitsland hun koopgedrag veranderd. Volgens een studie letten 64 procent van de consumenten bij het boodschappen doen sterker op de prijs dan vroeger. Vanwege de gestegen rente worden bovendien grotere aankopen uitgesteld.'],
        ['Trotz des Rückgangs beim Konsum gibt es Gewinner. Der Umsatz von Secondhand-Plattformen ist um ein Drittel gewachsen, und Reparaturbetriebe melden volle Auftragsbücher. Dank eines staatlichen Reparaturbonus lassen in Österreich immer mehr Menschen ihre Geräte reparieren, statt neue zu kaufen.', 'Ondanks de daling van de consumptie zijn er winnaars. De omzet van tweedehandsplatforms is met een derde gegroeid, en reparatiebedrijven melden volle orderboeken. Dankzij een reparatiebonus van de staat laten in Oostenrijk steeds meer mensen hun apparaten repareren in plaats van nieuwe te kopen.'],
        ['Für den Handel in den Innenstädten ist die Lage schwierig. Bei sinkender Nachfrage und steigenden Mieten müssen vor allem kleine Geschäfte schließen. Ökonomen erwarten erst nach einer Senkung der Zinsen eine Erholung.', 'Voor de winkels in de binnensteden is de situatie moeilijk. Bij dalende vraag en stijgende huren moeten vooral kleine winkels sluiten. Economen verwachten pas na een verlaging van de rente een herstel.']
      ],
      gl: [['das Kaufverhalten', 'het koopgedrag'], ['die Anschaffung', 'de aankoop'], ['verschieben', 'uitstellen'], ['das Auftragsbuch', 'het orderboek'], ['der Handel', 'de handel, de winkels'], ['die Erholung', 'het herstel']],
      q: [
        { t: 'mc', q: 'Warum werden größere Anschaffungen verschoben?', o: ['Aufgrund der gestiegenen Zinsen', 'Wegen fehlender Produkte', 'Dank des Reparaturbonus'] },
        { t: 'mc', q: 'Wer gehört zu den Gewinnern?', o: ['Secondhand-Plattformen und Reparaturbetriebe', 'Kleine Geschäfte in der Innenstadt', 'Banken'] },
        { t: 'mc', q: 'Wann erwarten Ökonomen eine Erholung?', o: ['Nach einer Senkung der Zinsen', 'Noch in diesem Monat', 'Nie'] }
      ]
    },
    say: [['Das kann ich mir nicht leisten.', 'Dat kan ik me niet veroorloven.'], ['Aufgrund der hohen Preise kaufen wir weniger.', 'Vanwege de hoge prijzen kopen we minder.'], ['Dank der neuen Technik sparen wir Energie.', 'Dankzij de nieuwe techniek besparen we energie.']],
    task: { nl: 'Schrijf 4 zakelijke zinnen over prijzen of winkels in jouw omgeving. Zet minstens drie redenen in de naamwoordstijl (wegen/aufgrund/trotz/dank/infolge + tweede naamval).', model: 'Aufgrund der hohen Mieten schließen in meiner Stadt viele kleine Läden. Trotz der Inflation sind die Restaurants voll. Dank eines neuen Marktes kaufen wieder mehr Leute regional ein. Infolge des Fachkräftemangels hat mein Bäcker montags geschlossen.' },
    scenario: { nl: 'Je koopt brood bij een Duitse bakker en raakt aan de praat over de gestegen prijzen.', role: 'Herr Schulze, een bakker in Dresden die zijn zaak met moeite overeind houdt', goal: 'Vraag waarom alles duurder is, reageer met begrip en vraag hoe het met zijn zaak en personeel gaat.' }
  });

  /* ───────────────────────── B2 · 10 ───────────────────────── */
  U({
    id: 'de-b2-10', level: 'B2', icon: '🗣️', title: 'Diskutieren und überzeugen', nl: 'Discussiëren: het zou weleens … kunnen',
    goals: ['Een standpunt innemen, afwegen en tegenspreken', 'Met modale werkwoorden zeggen hoe zeker je bent (müsste, dürfte, könnte)', 'Met sollen en wollen doorgeven wat anderen beweren', 'Een discussie structureren met vaste zinnen'],
    vocab: [
      ['die Diskussion', 'de discussie'], ['das Argument', 'het argument'], ['der Standpunkt', 'het standpunt'], ['die Ansicht', 'de opvatting'], ['überzeugen', 'overtuigen'],
      ['zustimmen', 'instemmen'], ['widersprechen', 'tegenspreken'], ['bezweifeln', 'betwijfelen'], ['der Einwand', 'de tegenwerping'], ['der Kompromiss', 'het compromis'],
      ['der Vorteil', 'het voordeel'], ['der Nachteil', 'het nadeel'], ['einerseits', 'enerzijds'], ['andererseits', 'anderzijds'], ['allerdings', 'echter, wel'],
      ['meiner Meinung nach', 'naar mijn mening'], ['offensichtlich', 'duidelijk, kennelijk'], ['vermutlich', 'vermoedelijk'], ['zweifellos', 'ongetwijfeld'], ['die Behauptung', 'de bewering'],
      ['das Gerücht', 'het gerucht'], ['berücksichtigen', 'rekening houden met'], ['abwägen', 'afwegen'], ['das Tempolimit', 'de snelheidslimiet'], ['die Mehrheit', 'de meerderheid'], ['umstritten', 'omstreden']
    ],
    grammar: [
      { t: 'Hoe zeker ben je? Müsste, dürfte, könnte', es: 'Subjektive Modalverben: Vermutung',
        html: `<p>Met een modaal werkwoord kun je aangeven <b>hoe zeker</b> je van iets bent. Het gaat dan niet om moeten of mogen, maar om jouw inschatting:</p>
<p><i>Das <b>muss</b> stimmen.</i> (ik ben er zeker van)<br><i>Das <b>müsste</b> stimmen.</i> (dat zou moeten kloppen, bijna zeker)<br><i>Das <b>dürfte</b> stimmen.</i> (dat zal wel kloppen, waarschijnlijk)<br><i>Das <b>könnte</b> / <b>kann</b> stimmen.</i> (dat zou kunnen, mogelijk)<br><i>Das <b>kann nicht</b> stimmen.</i> (uitgesloten)</p>
<p>Over het <b>verleden</b>: modaal werkwoord + deelwoord + <b>haben/sein</b>: <i>Er <b>muss</b> es <b>gewusst haben</b></i> (hij moet het geweten hebben). <i>Sie <b>könnte</b> schon <b>gegangen sein</b>.</i></p>
<p><b>Uitzondering:</b> <i>dürfte</i> heeft hier niets met toestemming te maken. <b>Waarom?</b> De Konjunktiv II verzwakt de oude betekenis «reden hebben om»: <i>das dürfte stimmen</i> is letterlijk «er is reden om aan te nemen dat het klopt». Het is de standaardvorm voor een voorzichtige schatting in kranten: <i>Der Schaden <b>dürfte</b> bei einer Million liegen.</i></p>`,
        table: [['zekerheid', 'vorm', 'Nederlands'], ['±100 %', 'Das muss stimmen.', 'Dat moet wel kloppen.'], ['±90 %', 'Das müsste stimmen.', 'Dat zou moeten kloppen.'], ['±75 %', 'Das dürfte stimmen.', 'Dat zal wel kloppen.'], ['±50 %', 'Das könnte stimmen.', 'Dat zou kunnen kloppen.'], ['0 %', 'Das kann nicht stimmen.', 'Dat kan niet kloppen.']],
        sum: 'Das muss stimmen. Das dürfte stimmen. Das könnte stimmen. Das kann nicht stimmen.',
        ex: [['Sie müsste jeden Moment kommen.', 'Ze zou elk moment moeten komen.'], ['Das dürfte schwierig werden.', 'Dat zal wel moeilijk worden.'], ['Er kann das nicht gesagt haben.', 'Dat kan hij niet gezegd hebben.']] },
      { t: 'Sollen en wollen: het schijnt, hij beweert', es: 'sollen und wollen: fremde Behauptung',
        html: `<p>Twee modale werkwoorden geven door wat <b>iemand anders beweert</b>, zonder dat je zegt of het waar is.</p>
<p><b>sollen</b> = men zegt, het schijnt: <i>Das Restaurant <b>soll</b> sehr gut sein</i> (het schijnt heel goed te zijn). Verleden: <i>Er <b>soll</b> im Lotto <b>gewonnen haben</b>.</i></p>
<p><b>wollen</b> = hij/zij beweert het zelf, en ik twijfel: <i>Er <b>will</b> nichts <b>gesehen haben</b></i> (hij beweert niets gezien te hebben).</p>
<p><b>Uitzondering:</b> <i>wollen</i> betekent hier niet «willen». <b>Waarom?</b> De spreker geeft weer wat iemand <i>wil doen geloven</i>; de wil zit in de bewering, niet in de handeling. Je herkent deze betekenis bijna altijd aan <b>deelwoord + haben/sein</b> erachter.</p>
<p>In een discussie structureer je je betoog met vaste zinnen: <i><b>Einerseits</b> …, <b>andererseits</b> … · <b>Ich bin der Ansicht, dass</b> … · <b>Da muss ich widersprechen.</b> · <b>Das mag sein, aber</b> … · <b>Im Großen und Ganzen</b> …</i></p>`,
        table: [['', 'voorbeeld', 'betekenis'], ['sollen', 'Sie soll krank sein.', 'Ze schijnt ziek te zijn.'], ['sollen + verleden', 'Er soll gekündigt haben.', 'Hij schijnt ontslag genomen te hebben.'], ['wollen', 'Er will Arzt sein.', 'Hij beweert arts te zijn.'], ['wollen + verleden', 'Sie will es nicht gewusst haben.', 'Ze beweert het niet geweten te hebben.']],
        ex: [['In Hamburg soll es morgen schneien.', 'In Hamburg schijnt het morgen te gaan sneeuwen.'], ['Der Zeuge will den Täter erkannt haben.', 'De getuige beweert de dader herkend te hebben.'], ['Das mag sein, aber ich sehe das anders.', 'Dat kan zijn, maar ik zie dat anders.']] }
    ],
    dialogue: {
      t: 'Tempolimit: ja oder nein?', place: 'Hannover 🇩🇪',
      lines: [
        ['Anna', 'Bei uns in den Niederlanden fährt man tagsüber hundert. Warum gibt es in Deutschland eigentlich kein Tempolimit?', 'Bij ons in Nederland rijd je overdag honderd. Waarom is er in Duitsland eigenlijk geen snelheidslimiet?'],
        ['Stefan', 'Gute Frage. Die Mehrheit soll inzwischen sogar dafür sein.', 'Goede vraag. De meerderheid schijnt er inmiddels zelfs voor te zijn.'],
        ['Anna', 'Und du?', 'En jij?'],
        ['Stefan', 'Einerseits fahre ich gern schnell. Andererseits dürfte ein Limit viele Unfälle verhindern.', 'Enerzijds rijd ik graag hard. Anderzijds zal een limiet waarschijnlijk veel ongelukken voorkomen.'],
        ['Anna', 'Und für das Klima müsste es doch auch etwas bringen.', 'En voor het klimaat zou het toch ook iets moeten opleveren.'],
        ['Stefan', 'Da muss ich widersprechen: Der Effekt soll ziemlich klein sein. Das behaupten zumindest die Autohersteller.', 'Daar moet ik je tegenspreken: het effect schijnt vrij klein te zijn. Dat beweren althans de autofabrikanten.'],
        ['Anna', 'Die wollen ja auch jahrelang nichts von falschen Abgaswerten gewusst haben.', 'Die beweren ook dat ze jarenlang niets van valse uitstootwaarden hebben geweten.'],
        ['Stefan', 'Punkt für dich. Im Großen und Ganzen könnte ich mit hundertdreißig leben.', 'Punt voor jou. Over het geheel genomen zou ik met honderddertig kunnen leven.']
      ],
      q: [
        { t: 'mc', q: 'Was sagt Stefan über die Mehrheit?', o: ['Sie soll für ein Tempolimit sein', 'Sie sei strikt dagegen', 'Sie interessiere sich nicht dafür'] },
        { t: 'mc', q: 'Was dürfte ein Limit laut Stefan verhindern?', o: ['Viele Unfälle', 'Den Verkauf von Autos', 'Lange Staus'] },
        { t: 'mc', q: 'Wie endet die Diskussion?', o: ['Stefan könnte mit 130 leben', 'Stefan bleibt strikt dagegen', 'Anna ändert ihre Meinung'] }
      ]
    },
    culture: { t: 'Streitkultur: ruzie als compliment', html: `<p>Een stevige discussie heet in het Duits <b>Streitkultur</b>, en dat is een positief woord. Wie je tegenspreekt, neemt je serieus. Op school krijgen leerlingen een cijfer voor <i>mündliche Mitarbeit</i>: meedoen en argumenteren.</p>
<p>📺 Elke week kijken miljoenen naar <b>Talkshows</b> waar politici en experts een uur lang over één thema discussiëren. Favoriete onderwerpen: het <b>Tempolimit</b> op de Autobahn (ongeveer 70 procent van het snelwegnet heeft geen vaste limiet, wel een <i>Richtgeschwindigkeit</i> van 130), kernenergie en de spoorwegen.</p>
<p>Handig om te weten: Duitsers onderbreken minder dan Nederlanders. Je laat iemand uitpraten en zegt dan pas <i>«Darf ich dazu etwas sagen?»</i> En een compromis is geen nederlaag: het hele politieke systeem met zijn coalities en deelstaten draait erop.</p>` },
    ex: [
      { t: 'cloze', s: 'Das ___ stimmen. (waarschijnlijk, voorzichtige schatting)', a: ['dürfte'], o: ['dürfte', 'darf', 'will'], nl: 'Dat zal wel kloppen.', x: 'Uitzondering: dürfte gaat hier niet over toestemming, maar over waarschijnlijkheid. Reden: de Konjunktiv II verzwakt de oude betekenis «reden hebben om».', tag: 'de-modalsubj' },
      { t: 'cloze', s: 'Das ___ nicht stimmen. (uitgesloten)', a: ['kann'], o: ['kann', 'soll', 'dürfte'], nl: 'Dat kan niet kloppen.', tag: 'de-modalsubj' },
      { t: 'cloze', s: 'Er muss es gewusst ___.', a: ['haben'], o: ['haben', 'sein', 'hat'], nl: 'Hij moet het geweten hebben.', tag: 'de-modalsubj' },
      { t: 'cloze', s: 'Das Restaurant ___ sehr gut sein. (men zegt)', a: ['soll'], o: ['soll', 'will', 'muss'], nl: 'Het restaurant schijnt heel goed te zijn.', tag: 'de-modalsubj' },
      { t: 'cloze', s: 'Er ___ nichts gesehen haben. (hij beweert het zelf)', a: ['will'], o: ['will', 'soll', 'darf'], nl: 'Hij beweert niets gezien te hebben.', x: 'Uitzondering: wollen betekent hier niet «willen» maar «beweren». Reden: de wil zit in wat hij je wil doen geloven.', tag: 'de-modalsubj' },
      { t: 'cloze', s: 'Einerseits ist es teuer, ___ spart man Zeit.', a: ['andererseits'], o: ['andererseits', 'außerdem', 'einerseits'], nl: 'Enerzijds is het duur, anderzijds bespaar je tijd.', tag: 'de-rede' },
      { t: 'cloze', s: 'Meiner Meinung ___ ist das falsch.', a: ['nach'], o: ['nach', 'zu', 'von'], nl: 'Naar mijn mening is dat fout.', tag: 'de-rede' },
      { t: 'mc', q: 'Welke zin is het meest zeker?', o: ['Das muss stimmen.', 'Das dürfte stimmen.', 'Das könnte stimmen.'], tag: 'de-modalsubj' },
      { t: 'mc', q: 'Hoe spreek je iemand beleefd tegen?', o: ['Da muss ich widersprechen.', 'Das ist Quatsch.', 'Du hast keine Ahnung.'], tag: 'de-rede' },
      { t: 'mc', q: 'Wat betekent «umstritten»?', o: ['omstreden', 'omgedraaid', 'onbetwist'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ze schijnt ziek te zijn.', a: ['Sie soll krank sein.'], tag: 'de-modalsubj' },
      { t: 'tr', nl: 'Dat zou kunnen kloppen.', a: ['Das könnte stimmen.', 'Das kann stimmen.'], tag: 'de-modalsubj' },
      { t: 'tr', nl: 'Dat kan zijn, maar ik zie dat anders.', a: ['Das mag sein, aber ich sehe das anders.', 'Das kann sein, aber ich sehe das anders.'], tag: 'de-rede' },
      { t: 'order', s: 'Der Zeuge will den Täter erkannt haben.', nl: 'De getuige beweert de dader herkend te hebben.', tag: 'de-modalsubj' },
      { t: 'match', p: [['der Vorteil', 'het voordeel'], ['der Nachteil', 'het nadeel'], ['überzeugen', 'overtuigen'], ['das Gerücht', 'het gerucht'], ['die Mehrheit', 'de meerderheid']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Vier Tage arbeiten, fünf Tage Lohn?', type: 'Pro en contra',
      p: [
        ['Die Vier-Tage-Woche ist umstritten. Befürworter verweisen auf einen Versuch mit 45 deutschen Firmen: Die Beschäftigten sollen weniger gestresst und seltener krank gewesen sein, und die Produktivität sei nicht gesunken. Das dürfte vor allem für Büroberufe gelten.', 'De vierdaagse werkweek is omstreden. Voorstanders verwijzen naar een proef met 45 Duitse bedrijven: de werknemers schijnen minder gestrest en minder vaak ziek te zijn geweest, en de productiviteit is volgens hen niet gedaald. Dat zal vooral voor kantoorberoepen gelden.'],
        ['Kritiker bezweifeln das. Einerseits hätten nur Firmen mitgemacht, die ohnehin dafür waren. Andererseits könne ein Krankenhaus oder eine Bäckerei nicht einfach einen Tag schließen. Bei dem aktuellen Fachkräftemangel müsste jemand die fehlenden Stunden übernehmen, und das kann eigentlich nur teurer werden.', 'Critici betwijfelen dat. Enerzijds hebben volgens hen alleen bedrijven meegedaan die er toch al voor waren. Anderzijds kan een ziekenhuis of een bakkerij niet zomaar een dag sluiten. Bij het huidige tekort aan vakmensen zou iemand de ontbrekende uren moeten overnemen, en dat kan eigenlijk alleen maar duurder worden.'],
        ['Im Großen und Ganzen könnte die Wahrheit in der Mitte liegen. Einige Betriebe werben bereits mit der Vier-Tage-Woche um Personal und wollen damit gute Erfahrungen gemacht haben. Für alle Branchen dürfte das Modell allerdings nicht passen.', 'Over het geheel genomen zou de waarheid in het midden kunnen liggen. Sommige bedrijven werven al personeel met de vierdaagse werkweek en beweren daar goede ervaringen mee te hebben. Voor alle branches zal het model echter waarschijnlijk niet passen.']
      ],
      gl: [['der Befürworter', 'de voorstander'], ['verweisen auf', 'verwijzen naar'], ['die Beschäftigten', 'de werknemers'], ['ohnehin', 'toch al'], ['werben um', 'werven'], ['die Branche', 'de branche']],
      q: [
        { t: 'mc', q: 'Was sollen die Beschäftigten im Versuch gewesen sein?', o: ['Weniger gestresst und seltener krank', 'Unzufrieden und müde', 'Schlechter bezahlt'] },
        { t: 'mc', q: 'Welchen Einwand haben die Kritiker?', o: ['Es hätten nur Firmen mitgemacht, die ohnehin dafür waren', 'Der Versuch sei zu lang gewesen', 'Die Beschäftigten hätten gelogen'] },
        { t: 'mc', q: 'Wie sicher ist der letzte Satz des Textes?', o: ['Wahrscheinlich, aber nicht sicher (dürfte)', 'Völlig sicher (muss)', 'Ausgeschlossen (kann nicht)'] }
      ]
    },
    say: [['Da muss ich widersprechen.', 'Daar moet ik je tegenspreken.'], ['Das dürfte schwierig werden.', 'Dat zal wel moeilijk worden.'], ['Einerseits hast du recht, andererseits ist es teuer.', 'Enerzijds heb je gelijk, anderzijds is het duur.']],
    task: { nl: 'Schrijf een korte mening (5 zinnen) over een vierdaagse werkweek of een snelheidslimiet. Gebruik einerseits … andererseits, één vermoeden (dürfte, könnte, müsste) en één keer sollen voor wat «men zegt».', model: 'Meiner Meinung nach ist die Vier-Tage-Woche eine gute Idee. Einerseits hat man mehr Zeit für die Familie, andererseits wird die Arbeit an vier Tagen stressiger. In Island soll das Modell sehr gut funktionieren. Für Krankenhäuser dürfte es allerdings schwierig werden. Trotzdem sollte man es versuchen.' },
    scenario: { nl: 'Je discussieert met een Duitse collega over een snelheidslimiet op de Autobahn.', role: 'Stefan, een collega uit Hannover die graag hard rijdt maar openstaat voor argumenten', goal: 'Geef je mening, weeg af met einerseits … andererseits, spreek hem één keer beleefd tegen en probeer een compromis te vinden.' }
  });
})(window.SPT);
