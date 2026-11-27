/* Duits voor Nederlandstaligen — niveau A2, units 6–10 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-komp': 'vergelijken (größer als, am größten)', 'de-dass': 'dass-zinnen', 'de-beruf': 'beroepen (zonder lidwoord)', 'de-dativverb': 'werkwoorden met derde naamval (helfen, gefallen)',
    'de-wem': 'wem? (aan wie): dem, der, den', 'de-hoeflich': 'beleefd vragen (könnten, hätte gern, würde)', 'de-adjend': 'uitgang bijvoeglijk naamwoord', 'de-refl': 'wederkerende werkwoorden (sich freuen)',
    'de-wenn': 'wenn-zinnen (voorwaarde)'
  });

  /* ───────────────────────── A2 · 6 ───────────────────────── */
  U({
    id: 'de-a2-06', level: 'A2', icon: '🏞️', title: 'Stadt oder Land?', nl: 'Vergelijken: stad en platteland',
    goals: ['Dingen en plaatsen vergelijken', 'De vergrotende en overtreffende trap maken', 'Kiezen tussen als en wie', 'Je voorkeur uitleggen'],
    vocab: [
      ['das Land', 'het platteland / het land'], ['die Großstadt', 'de grote stad'], ['die Natur', 'de natuur'], ['der Verkehr', 'het verkeer'], ['die Luft', 'de lucht'], ['der Lärm', 'het lawaai'], ['die Ruhe', 'de rust'],
      ['das Leben', 'het leven'], ['der Einwohner', 'de inwoner'], ['das Gebäude', 'het gebouw'], ['der Wald', 'het bos'], ['der Fluss', 'de rivier'], ['das Feld', 'het veld / de akker'], ['schnell', 'snel'], ['langsam', 'langzaam'],
      ['sauber', 'schoon'], ['schmutzig', 'vies'], ['interessant', 'interessant'], ['bequem', 'comfortabel / makkelijk'], ['gefährlich', 'gevaarlijk'], ['sicher', 'veilig / zeker'], ['hoch', 'hoog'],
      ['besser', 'beter'], ['mehr', 'meer'], ['lieber', 'liever'], ['am liebsten', 'het liefst'], ['genauso … wie', 'net zo … als'], ['der Vorteil / der Nachteil', 'het voordeel / het nadeel']
    ],
    grammar: [
      { t: 'De vergrotende trap: -er + als', es: 'Der Komparativ',
        html: `<p>Vergelijken gaat als in het Nederlands: bijvoeglijk naamwoord + <b>-er</b>: <i>schnell → schnell<b>er</b>, klein → klein<b>er</b></i>. Het Duits gebruikt <b>nooit</b> <i>mehr</i> + bijvoeglijk naamwoord: <i>interessant<b>er</b></i>, niet <s>mehr interessant</s>.</p>
<p><i>Dan</i> is <b>als</b>: <i>Berlin ist größer <b>als</b> München.</i> <i>Net zo … als</i> is <b>so … wie</b>: <i>Köln ist <b>so</b> groß <b>wie</b> Amsterdam.</i> Let op: Nederlanders zeggen vaak «groter als»; in het Duits is dat juist goed, en <s>größer wie</s> is fout.</p>
<p><b>Uitzondering:</b> veel korte woorden met <i>a, o, u</i> krijgen een <b>Umlaut</b>: <i>alt → <b>ä</b>lter, groß → gr<b>ö</b>ßer, jung → j<b>ü</b>nger, warm → wärmer, kalt → kälter, lang → länger, kurz → kürzer</i>. <b>Waarom?</b> De oude uitgang had een i-klank die de klinker ervoor kleurde, hetzelfde verschijnsel als bij <i>du fährst</i>.</p>
<p><b>Uitzondering:</b> helemaal onregelmatig zijn <b>gut → besser</b>, <b>viel → mehr</b>, <b>gern → lieber</b> en <b>hoch → höher</b> (de c valt weg). <b>Waarom?</b> Het zijn zeer oude, veelgebruikte woorden waarvan de trappen van verschillende stammen komen, net als <i>goed – beter</i> in het Nederlands.</p>`,
        table: [['', 'vergrotende trap', 'overtreffende trap'], ['schnell', 'schneller', 'am schnellsten'], ['alt', 'älter', 'am ältesten'], ['groß', 'größer', 'am größten'], ['gut', 'besser', 'am besten'], ['viel', 'mehr', 'am meisten'], ['gern', 'lieber', 'am liebsten'], ['hoch', 'höher', 'am höchsten']],
        sum: 'Schnell, schneller, am schnellsten. Gut, besser, am besten.',
        ex: [['Die Luft auf dem Land ist sauberer als in der Stadt.', 'De lucht op het platteland is schoner dan in de stad.'], ['Mein Bruder ist älter als ich, aber ich bin größer.', 'Mijn broer is ouder dan ik, maar ik ben langer.'], ['Hamburg ist nicht so teuer wie München.', 'Hamburg is niet zo duur als München.']] },
      { t: 'De overtreffende trap: am …-sten', es: 'Der Superlativ',
        html: `<p>De overtreffende trap na een werkwoord is <b>am</b> + bijvoeglijk naamwoord + <b>-sten</b>: <i>Der ICE fährt <b>am schnellsten</b>.</i> Vóór een zelfstandig naamwoord: <i>der schnell<b>ste</b> Zug, die schön<b>ste</b> Stadt</i>.</p>
<p><b>Uitzondering:</b> na <i>-t, -d, -s, -ß, -z, -sch</i> komt er een extra <b>e</b>: <i>alt → am ält<b>e</b>sten, kurz → am kürz<b>e</b>sten, heiß → am heiß<b>e</b>sten</i>. <b>Waarom?</b> Zonder die e zijn twee s-klanken of <i>tst</i> niet uit te spreken. Alleen <b>groß → am größten</b> doet het zonder e (de ß en s smelten samen).</p>`,
        table: [['', 'na werkwoord', 'vóór zelfst. nw.'], ['schön', 'am schönsten', 'die schönste Stadt'], ['alt', 'am ältesten', 'das älteste Haus'], ['groß', 'am größten', 'der größte Fluss'], ['gut', 'am besten', 'der beste Film']],
        ex: [['Welche Stadt gefällt dir am besten?', 'Welke stad bevalt je het best?'], ['Die Zugspitze ist der höchste Berg in Deutschland.', 'De Zugspitze is de hoogste berg van Duitsland.'], ['Am liebsten wohne ich am Meer.', 'Het liefst woon ik aan zee.']] }
    ],
    dialogue: {
      t: 'Stadt oder Dorf?', place: 'Freiburg 🇩🇪',
      lines: [
        ['Mila', 'Ich ziehe nächstes Jahr aufs Land. In der Stadt ist es mir zu laut.', 'Ik verhuis volgend jaar naar het platteland. In de stad is het me te lawaaiig.'],
        ['Tim', 'Wirklich? Ich finde die Stadt viel interessanter als das Land.', 'Echt? Ik vind de stad veel interessanter dan het platteland.'],
        ['Mila', 'Ja, aber auf dem Land ist die Luft sauberer und die Mieten sind billiger.', 'Ja, maar op het platteland is de lucht schoner en zijn de huren goedkoper.'],
        ['Tim', 'Das stimmt. Aber du brauchst ein Auto, und der Weg zur Arbeit ist länger.', 'Dat klopt. Maar je hebt een auto nodig, en de weg naar je werk is langer.'],
        ['Mila', 'Mit dem Zug bin ich genauso schnell wie jetzt mit der Straßenbahn.', 'Met de trein ben ik net zo snel als nu met de tram.'],
        ['Tim', 'Und was machst du am Abend? Hier gibt es mehr Kinos und Restaurants.', 'En wat doe je ’s avonds? Hier zijn meer bioscopen en restaurants.'],
        ['Mila', 'Ich bin am liebsten in der Natur. Und am Wochenende komme ich dich besuchen.', 'Ik ben het liefst in de natuur. En in het weekend kom ik je opzoeken.'],
        ['Tim', 'Gut. Aber das beste Eis gibt es immer noch hier in der Stadt!', 'Goed. Maar het beste ijs is er nog altijd hier in de stad!']
      ],
      q: [
        { t: 'mc', q: 'Warum will Mila aufs Land ziehen?', o: ['In der Stadt ist es ihr zu laut.', 'Sie hat eine neue Arbeit.', 'Sie mag keine Kinos.'] },
        { t: 'mc', q: 'Was ist auf dem Land billiger?', o: ['Die Mieten', 'Die Autos', 'Die Restaurants'] },
        { t: 'mc', q: 'Was findet Tim besser in der Stadt?', o: ['Es gibt mehr Kinos und Restaurants.', 'Die Luft ist sauberer.', 'Es ist ruhiger.'] }
      ]
    },
    culture: { t: 'Een land zonder één grote hoofdstad', html: `<p>Duitsland heeft niet één alles overheersende stad zoals Parijs of Londen. Door de lange geschiedenis van kleine staten zijn er veel sterke centra: <b>Berlin</b> (politiek), <b>Frankfurt</b> (banken), <b>München</b> (techniek en bier), <b>Hamburg</b> (haven en media), <b>Köln</b> (carnaval en tv).</p>
<p>De zestien <b>Bundesländer</b> hebben elk een eigen regering, eigen schoolvakanties en vaak een eigen dialect.</p>
<p>🏔️ De hoogste berg is de <b>Zugspitze</b> (2962 m), de langste rivier binnen Duitsland de <b>Rhein</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'Berlin ist ___ als München.', a: ['größer'], o: ['größer', 'großer', 'mehr groß'], nl: 'Berlijn is groter dan München.', x: 'Uitzondering: groß krijgt een Umlaut in de vergrotende trap: größer.', tag: 'de-komp' },
      { t: 'cloze', s: 'Mein Bruder ist ___ als ich.', a: ['älter'], o: ['älter', 'alter', 'mehr alt'], nl: 'Mijn broer is ouder dan ik.', tag: 'de-komp' },
      { t: 'cloze', s: 'Der Film ist ___ als das Buch.', a: ['interessanter'], o: ['interessanter', 'mehr interessant', 'interessantest'], nl: 'De film is interessanter dan het boek.', x: 'Het Duits gebruikt nooit mehr + bijvoeglijk naamwoord: altijd -er.', tag: 'de-komp' },
      { t: 'cloze', s: 'Dieser Kuchen ist ___ als der andere.', a: ['besser'], o: ['besser', 'guter', 'güter'], nl: 'Deze taart is beter dan de andere.', x: 'Uitzondering: gut – besser – am besten is helemaal onregelmatig, net als goed – beter – best.', tag: 'de-komp' },
      { t: 'cloze', s: 'Köln ist so groß ___ Amsterdam.', a: ['wie'], o: ['wie', 'als', 'dann'], nl: 'Keulen is zo groot als Amsterdam.', tag: 'de-komp' },
      { t: 'cloze', s: 'Der ICE ist schneller ___ der Bus.', a: ['als'], o: ['als', 'wie', 'dann'], nl: 'De ICE is sneller dan de bus.', tag: 'de-komp' },
      { t: 'cloze', s: 'Der ICE fährt am ___.', a: ['schnellsten'], o: ['schnellsten', 'schnellste', 'schneller'], nl: 'De ICE rijdt het snelst.', tag: 'de-komp' },
      { t: 'cloze', s: 'Ich trinke gern Tee, aber ___ trinke ich Kaffee.', a: ['lieber'], o: ['lieber', 'gerner', 'mehr gern'], nl: 'Ik drink graag thee, maar liever drink ik koffie.', x: 'Uitzondering: gern – lieber – am liebsten.', tag: 'de-komp' },
      { t: 'mc', q: 'Wat is de overtreffende trap van «alt»?', o: ['am ältesten', 'am ältsten', 'am altesten'], x: 'Uitzondering: na -t komt een extra e (anders is het niet uit te spreken), plus Umlaut.', tag: 'de-komp' },
      { t: 'mc', q: 'Hoe zeg je «de hoogste berg»?', o: ['der höchste Berg', 'der hochste Berg', 'der höhste Berg'], tag: 'de-komp' },
      { t: 'tr', nl: 'De stad is duurder dan het platteland.', a: ['Die Stadt ist teurer als das Land.'], tag: 'de-komp' },
      { t: 'tr', nl: 'Ik woon het liefst aan zee.', a: ['Ich wohne am liebsten am Meer.', 'Am liebsten wohne ich am Meer.'], tag: 'de-komp' },
      { t: 'tr', nl: 'Mijn zus is net zo oud als jij.', a: ['Meine Schwester ist genauso alt wie du.', 'Meine Schwester ist so alt wie du.'], tag: 'de-komp' },
      { t: 'order', s: 'Auf dem Land ist das Leben ruhiger als in der Stadt.', nl: 'Op het platteland is het leven rustiger dan in de stad.', tag: 'de-komp' },
      { t: 'match', p: [['sauber', 'schoon'], ['schmutzig', 'vies'], ['gefährlich', 'gevaarlijk'], ['der Lärm', 'het lawaai'], ['die Ruhe', 'de rust']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Wo lebt man besser?', type: 'Lezersbrief',
      p: [
        ['Ich habe zehn Jahre in Berlin gewohnt und lebe jetzt in einem Dorf in Bayern. Viele Freunde fragen mich: Wo ist es besser? Meine Antwort: Es kommt darauf an.', 'Ik heb tien jaar in Berlijn gewoond en woon nu in een dorp in Beieren. Veel vrienden vragen me: waar is het beter? Mijn antwoord: dat hangt ervan af.'],
        ['In Berlin war das Leben schneller und interessanter. Es gab mehr Arbeit, mehr Kultur und die besten Restaurants. Aber die Wohnungen waren kleiner und viel teurer, und es war immer laut.', 'In Berlijn was het leven sneller en interessanter. Er was meer werk, meer cultuur en er waren de beste restaurants. Maar de woningen waren kleiner en veel duurder, en het was altijd lawaaiig.'],
        ['Hier im Dorf ist alles ruhiger. Die Luft ist sauberer, die Nachbarn sind freundlicher und meine Kinder können draußen spielen. Nur der Bus fährt seltener. Am liebsten hätte ich beides!', 'Hier in het dorp is alles rustiger. De lucht is schoner, de buren zijn vriendelijker en mijn kinderen kunnen buiten spelen. Alleen de bus rijdt minder vaak. Het liefst had ik allebei!']
      ],
      gl: [['es kommt darauf an', 'dat hangt ervan af'], ['die Antwort', 'het antwoord'], ['freundlich', 'vriendelijk'], ['selten', 'zelden'], ['beides', 'allebei']],
      q: [
        { t: 'mc', q: 'Wo wohnt der Autor jetzt?', o: ['In einem Dorf in Bayern', 'In Berlin', 'In München'] },
        { t: 'mc', q: 'Was war in Berlin teurer?', o: ['Die Wohnungen', 'Die Busse', 'Das Essen'] },
        { t: 'mc', q: 'Was ist im Dorf ein Nachteil?', o: ['Der Bus fährt seltener.', 'Die Luft ist schmutziger.', 'Die Nachbarn sind unfreundlich.'] }
      ]
    },
    say: [['Berlin ist größer als München.', 'Berlijn is groter dan München.'], ['Ich wohne lieber in der Stadt.', 'Ik woon liever in de stad.'], ['Das ist der schönste Park.', 'Dat is het mooiste park.'], ['Auf dem Land ist es ruhiger.', 'Op het platteland is het rustiger.']],
    task: { nl: 'Vergelijk twee plaatsen die je kent (bijvoorbeeld je woonplaats en een andere stad). Wat is groter, duurder, mooier? Waar woon je het liefst? (4 zinnen)', model: 'Ich wohne in Utrecht. Utrecht ist kleiner als Amsterdam, aber es ist ruhiger und gemütlicher. Die Mieten sind fast so hoch wie in Amsterdam. Am liebsten wohne ich in der Nähe vom Zentrum.' },
    scenario: { nl: 'Je discussieert met een Duitse vriend: stad of platteland?', role: 'You are Tim from Freiburg. You love city life. Discuss with the learner whether it is better to live in the city or in the countryside; compare prices, noise, nature, transport, and ask for their preference. A2 German, use "du".', goal: 'Vergelijk stad en platteland en zeg waar je het liefst woont.' }
  });

  /* ───────────────────────── A2 · 7 ───────────────────────── */
  U({
    id: 'de-a2-07', level: 'A2', icon: '💼', title: 'Arbeit und Beruf', nl: 'Werk en beroep',
    goals: ['Over je werk en beroep praten', 'Zeggen wat je denkt of hoopt met dass', 'Beroepen noemen zonder lidwoord', 'De woordvolgorde in bijzinnen beheersen'],
    vocab: [
      ['der Beruf', 'het beroep'], ['die Stelle', 'de baan / de vacature'], ['die Firma', 'het bedrijf'], ['der Chef / die Chefin', 'de baas'], ['der Kollege / die Kollegin', 'de collega'], ['das Gehalt', 'het salaris'],
      ['verdienen', 'verdienen'], ['die Besprechung', 'de vergadering / het overleg'], ['der Kunde / die Kundin', 'de klant'], ['der Krankenpfleger / die Krankenpflegerin', 'de verpleegkundige'], ['der Ingenieur / die Ingenieurin', 'de ingenieur'],
      ['der Verkäufer / die Verkäuferin', 'de verkoper / de verkoopster'], ['der Handwerker', 'de vakman'], ['die Ausbildung', 'de (beroeps)opleiding'], ['das Studium', 'de studie'], ['die Erfahrung', 'de ervaring'],
      ['selbstständig', 'zelfstandig (zzp’er)'], ['arbeitslos', 'werkloos'], ['Teilzeit / Vollzeit', 'deeltijd / voltijd'], ['die Überstunden', 'de overuren'], ['kündigen', 'ontslag nemen / opzeggen'],
      ['sich bewerben', 'solliciteren'], ['Was sind Sie von Beruf?', 'Wat is uw beroep?'], ['Ich glaube, dass …', 'Ik geloof dat …'], ['Ich hoffe, dass …', 'Ik hoop dat …'], ['anstrengend', 'vermoeiend / zwaar'], ['Spaß machen', 'leuk zijn']
    ],
    grammar: [
      { t: 'dass-zinnen', es: 'Nebensätze mit dass',
        html: `<p>Na <b>dass</b> (dat) gaat het vervoegde werkwoord naar het <b>einde</b>, net als bij <i>weil</i>: <i>Ich glaube, <b>dass</b> er heute nicht <b>kommt</b>.</i> Vóór <i>dass</i> staat altijd een <b>komma</b>.</p>
<p>Scheidbare werkwoorden worden in de bijzin weer <b>één woord</b>: <i>Er ruft an. → Ich hoffe, dass er <b>anruft</b>.</i></p>
<p><b>Let op de spelling:</b> <b>dass</b> (met twee s) is het voegwoord <i>dat</i>; <b>das</b> (met één s) is het lidwoord of het aanwijzend/betrekkelijk voornaamwoord. Truc: kun je in het Nederlands <i>dit</i> of <i>welk(e)</i> zeggen, dan is het <i>das</i>; anders <i>dass</i>.</p>
<p><b>Verschil met het Nederlands:</b> bij twee werkwoorden staat het vervoegde werkwoord achteraan: <i>…, dass ich morgen arbeiten <b>muss</b></i> (dat ik morgen <i>moet werken</i>).</p>`,
        table: [['hoofdzin', 'met dass'], ['Er kommt heute.', 'Ich glaube, dass er heute kommt.'], ['Sie hat eine neue Stelle.', 'Ich habe gehört, dass sie eine neue Stelle hat.'], ['Er ruft morgen an.', 'Ich hoffe, dass er morgen anruft.'], ['Ich muss viel arbeiten.', 'Es ist schade, dass ich viel arbeiten muss.']],
        sum: 'Ich glaube, dass er kommt. Dass: Verb am Ende.',
        ex: [['Ich finde, dass die Arbeit interessant ist.', 'Ik vind dat het werk interessant is.'], ['Mein Chef sagt, dass wir Überstunden machen müssen.', 'Mijn baas zegt dat we overuren moeten maken.'], ['Schön, dass du gekommen bist!', 'Fijn dat je gekomen bent!']] },
      { t: 'Beroepen: zonder lidwoord en met -in', es: 'Berufe',
        html: `<p>Bij beroepen, nationaliteiten en religies staat na <i>sein</i> en <i>werden</i> <b>geen lidwoord</b>: <i>Ich bin Lehrer. Sie wird Ärztin.</i> Dat is hetzelfde als in het Nederlands.</p>
<p>De vrouwelijke vorm krijgt <b>-in</b>: <i>Lehrer → Lehrer<b>in</b>, Verkäufer → Verkäuferin</i>. In het meervoud <b>-innen</b>: <i>die Lehrerinnen</i>.</p>
<p><b>Uitzondering:</b> bij sommige woorden komt er een Umlaut bij: <i>Arzt → <b>Ä</b>rztin, Koch → K<b>ö</b>chin</i>. En <i>der Krankenpfleger</i> heeft naast <i>die Krankenpflegerin</i> ook nog de oudere vorm <i>die Krankenschwester</i>. <b>Waarom de Umlaut?</b> De uitgang <i>-in</i> bevat een i, en die kleurt bij korte, oude woorden de klinker ervoor.</p>
<p><b>Uitzondering:</b> <i>der Kollege</i> en <i>der Kunde</i> zijn «zwakke mannelijke woorden»: ze krijgen in alle andere naamvallen <b>-n</b>: <i>Ich helfe dem Kolleg<b>en</b>. Ich rufe den Kund<b>en</b> an.</i> <b>Waarom?</b> Mannelijke woorden op <i>-e</i> voor personen volgen een oude verbuiging die verder verdwenen is.</p>`,
        table: [['mannelijk', 'vrouwelijk', 'Nederlands'], ['der Lehrer', 'die Lehrerin', 'leraar / lerares'], ['der Arzt', 'die Ärztin', 'arts'], ['der Koch', 'die Köchin', 'kok / kokkin'], ['der Kollege', 'die Kollegin', 'collega'], ['der Kunde', 'die Kundin', 'klant']],
        ex: [['Was sind Sie von Beruf? — Ich bin Ingenieurin.', 'Wat is uw beroep? — Ik ben ingenieur.'], ['Mein Bruder möchte Koch werden.', 'Mijn broer wil kok worden.'], ['Ich arbeite als Verkäufer in einem Kaufhaus.', 'Ik werk als verkoper in een warenhuis.']] }
    ],
    dialogue: {
      t: 'Die neue Stelle', place: 'Düsseldorf 🇩🇪',
      lines: [
        ['Lena', 'Hallo Felix! Ich habe gehört, dass du eine neue Stelle hast.', 'Hoi Felix! Ik heb gehoord dat je een nieuwe baan hebt.'],
        ['Felix', 'Ja, ich arbeite seit einem Monat als Koch in einem Hotel.', 'Ja, ik werk sinds een maand als kok in een hotel.'],
        ['Lena', 'Und, macht die Arbeit Spaß?', 'En, is het werk leuk?'],
        ['Felix', 'Ja, sehr. Die Kollegen sind nett und ich finde, dass die Chefin fair ist.', 'Ja, heel erg. De collega’s zijn aardig en ik vind dat de baas eerlijk is.'],
        ['Lena', 'Verdienst du jetzt mehr als in der Bäckerei?', 'Verdien je nu meer dan in de bakkerij?'],
        ['Felix', 'Ein bisschen. Aber es ist anstrengend, weil ich oft am Wochenende arbeiten muss.', 'Een beetje. Maar het is zwaar, omdat ik vaak in het weekend moet werken.'],
        ['Lena', 'Schade, dass wir uns dann weniger sehen.', 'Jammer dat we elkaar dan minder zien.'],
        ['Felix', 'Stimmt. Aber ich hoffe, dass ich nächstes Jahr Teilzeit arbeiten kann. Und du? Bist du noch Krankenpflegerin?', 'Klopt. Maar ik hoop dat ik volgend jaar in deeltijd kan werken. En jij? Ben je nog verpleegkundige?'],
        ['Lena', 'Ja, aber ich glaube, dass ich bald etwas Neues suche.', 'Ja, maar ik denk dat ik binnenkort iets nieuws ga zoeken.']
      ],
      q: [
        { t: 'mc', q: 'Was ist Felix jetzt von Beruf?', o: ['Koch', 'Bäcker', 'Krankenpfleger'] },
        { t: 'mc', q: 'Warum ist die Arbeit anstrengend?', o: ['Er muss oft am Wochenende arbeiten.', 'Die Kollegen sind nicht nett.', 'Er verdient zu wenig.'] },
        { t: 'mc', q: 'Was hofft Felix?', o: ['Dass er nächstes Jahr Teilzeit arbeiten kann.', 'Dass er mehr verdient.', 'Dass Lena im Hotel arbeitet.'] }
      ]
    },
    culture: { t: 'De Ausbildung en titels op het werk', html: `<p>Veel Duitse jongeren doen na school een <b>duale Ausbildung</b>: drie jaar lang een paar dagen werken in een bedrijf en een paar dagen naar de <i>Berufsschule</i>. Dit systeem staat wereldwijd bekend en levert zeer goed opgeleide vakmensen op.</p>
<p>Op het werk zeg je vaker <b>Sie</b> en gebruik je <b>Herr/Frau</b> + achternaam, soms na jaren nog. Academische titels horen erbij: <i>Guten Tag, Frau Doktor Schmidt.</i> In start-ups en jonge bedrijven wordt wel meteen geduzt.</p>
<p>💼 Valse vriend: <b>der Chef</b> is je <i>baas</i>, niet de kok (dat is <i>der Koch</i> of <i>der Küchenchef</i>). En <b>die Firma</b> is elk bedrijf, niet alleen een firma.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich glaube, dass er heute nicht ___.', a: ['kommt'], o: ['kommt', 'kommen', 'kommt er'], nl: 'Ik geloof dat hij vandaag niet komt.', tag: 'de-dass' },
      { t: 'cloze', s: 'Ich hoffe, dass du morgen Zeit ___.', a: ['hast'], o: ['hast', 'haben', 'hat'], nl: 'Ik hoop dat je morgen tijd hebt.', tag: 'de-dass' },
      { t: 'cloze', s: 'Er sagt, dass er morgen ___.', a: ['anruft'], o: ['anruft', 'ruft an', 'anrufen'], nl: 'Hij zegt dat hij morgen belt.', x: 'In de bijzin wordt een scheidbaar werkwoord weer één woord: anruft.', tag: 'de-dass' },
      { t: 'cloze', s: 'Schade, dass ich arbeiten ___.', a: ['muss'], o: ['muss', 'müssen', 'musst'], nl: 'Jammer dat ik moet werken.', x: 'Het vervoegde werkwoord staat helemaal achteraan: arbeiten muss (Nederlands: moet werken).', tag: 'de-dass' },
      { t: 'cloze', s: 'Ich weiß, ___ das Gehalt gut ist.', a: ['dass'], o: ['dass', 'das', 'was'], nl: 'Ik weet dat het salaris goed is.', x: 'Voegwoord «dat» = dass met twee s. Het lidwoord (das Gehalt) heeft één s.', tag: 'de-dass' },
      { t: 'cloze', s: 'Meine Schwester ist ___.', a: ['Ärztin'], o: ['Ärztin', 'eine Ärztin', 'Arztin'], nl: 'Mijn zus is arts.', x: 'Beroepen staan na sein zonder lidwoord. Uitzondering: Arzt krijgt in de vrouwelijke vorm een Umlaut: Ärztin.', tag: 'de-beruf' },
      { t: 'cloze', s: 'Ich helfe dem ___.', a: ['Kollegen'], o: ['Kollegen', 'Kollege', 'Kolleger'], nl: 'Ik help de collega.', x: 'Uitzondering: der Kollege is een zwak mannelijk woord en krijgt buiten de eerste naamval altijd -n.', tag: 'de-beruf' },
      { t: 'mc', q: 'Hoe zeg je «Hij wil kok worden»?', o: ['Er möchte Koch werden.', 'Er möchte ein Chef werden.', 'Er will Koch sein werden.'], x: 'Valse vriend: der Chef = de baas. De kok = der Koch.', tag: 'de-beruf' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ich finde, dass die Arbeit Spaß macht.', 'Ich finde, dass macht die Arbeit Spaß.', 'Ich finde, dass die Arbeit macht Spaß.'], tag: 'de-dass' },
      { t: 'mc', q: 'Wat betekent «sich bewerben»?', o: ['solliciteren', 'reclame maken', 'zich bewijzen'], tag: 'de-vok' },
      { t: 'tr', nl: 'Wat is uw beroep?', a: ['Was sind Sie von Beruf?', 'Was machen Sie beruflich?'], tag: 'de-beruf' },
      { t: 'tr', nl: 'Ik ben leraar.', a: ['Ich bin Lehrer.', 'Ich bin Lehrerin.'], tag: 'de-beruf' },
      { t: 'tr', nl: 'Ik hoop dat je komt.', a: ['Ich hoffe, dass du kommst.'], tag: 'de-dass' },
      { t: 'order', s: 'Ich glaube, dass meine Kollegin morgen nicht kommt.', nl: 'Ik geloof dat mijn collega morgen niet komt.', tag: 'de-dass' },
      { t: 'match', p: [['das Gehalt', 'het salaris'], ['die Stelle', 'de baan'], ['der Kunde', 'de klant'], ['die Erfahrung', 'de ervaring'], ['kündigen', 'ontslag nemen']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Mein Beruf: Krankenpflegerin', type: 'Interview in een personeelsblad',
      p: [
        ['Ich heiße Lena Hoffmann und ich arbeite seit acht Jahren als Krankenpflegerin in einem Krankenhaus in Düsseldorf. Nach der Schule habe ich eine Ausbildung gemacht, die drei Jahre gedauert hat.', 'Ik heet Lena Hoffmann en ik werk sinds acht jaar als verpleegkundige in een ziekenhuis in Düsseldorf. Na school heb ik een opleiding gedaan, die drie jaar heeft geduurd.'],
        ['Ich finde, dass mein Beruf sehr wichtig ist. Ich helfe jeden Tag Menschen, und das macht mir Spaß. Aber die Arbeit ist auch anstrengend. Ich muss oft nachts arbeiten und mache viele Überstunden.', 'Ik vind dat mijn beroep heel belangrijk is. Ik help elke dag mensen, en dat vind ik leuk. Maar het werk is ook zwaar. Ik moet vaak ’s nachts werken en maak veel overuren.'],
        ['Viele Leute glauben, dass wir gut verdienen. Das stimmt leider nicht. Ich hoffe, dass sich das bald ändert, denn wir brauchen mehr Kolleginnen und Kollegen.', 'Veel mensen denken dat we goed verdienen. Dat klopt helaas niet. Ik hoop dat dat snel verandert, want we hebben meer collega’s nodig.']
      ],
      gl: [['das Krankenhaus', 'het ziekenhuis'], ['wichtig', 'belangrijk'], ['nachts', '’s nachts'], ['das stimmt', 'dat klopt'], ['sich ändern', 'veranderen']],
      q: [
        { t: 'mc', q: 'Wie lange hat Lenas Ausbildung gedauert?', o: ['Drei Jahre', 'Acht Jahre', 'Ein Jahr'] },
        { t: 'mc', q: 'Was findet Lena anstrengend?', o: ['Nachtarbeit und Überstunden', 'Die Kollegen', 'Den Weg zur Arbeit'] },
        { t: 'mc', q: 'Was hofft Lena?', o: ['Dass sich das Gehalt bald ändert.', 'Dass sie weniger arbeiten kann.', 'Dass sie Ärztin wird.'] }
      ]
    },
    say: [['Was sind Sie von Beruf?', 'Wat is uw beroep?'], ['Ich arbeite als Ingenieur.', 'Ik werk als ingenieur.'], ['Ich finde, dass die Arbeit Spaß macht.', 'Ik vind dat het werk leuk is.'], ['Ich hoffe, dass ich die Stelle bekomme.', 'Ik hoop dat ik de baan krijg.']],
    task: { nl: 'Vertel over je werk of studie: wat doe je, wat vind je ervan en wat hoop je? Gebruik minstens twee keer dass (4 zinnen).', model: 'Ich arbeite als Verkäuferin in einer Buchhandlung. Ich finde, dass die Arbeit interessant ist, weil ich Bücher liebe. Leider verdiene ich nicht viel. Ich hoffe, dass ich bald Vollzeit arbeiten kann.' },
    scenario: { nl: 'Op een feestje vraagt iemand naar je werk.', role: 'You are Herr Brandt, an engineer from Düsseldorf, making small talk at a party. Ask the learner what they do, whether they like it, and what they hope for; share your own opinion using "Ich finde, dass …". A2 German, start with "Sie".', goal: 'Vertel over je werk en geef je mening met dass-zinnen.' }
  });

  /* ───────────────────────── A2 · 8 ───────────────────────── */
  U({
    id: 'de-a2-08', level: 'A2', icon: '🎁', title: 'Feste und Geschenke', nl: 'Feesten en cadeaus',
    goals: ['Over feesten en cadeaus praten', 'Zeggen aan wie je iets geeft (derde naamval)', 'Werkwoorden met de derde naamval gebruiken: helfen, danken, gefallen', 'Iemand feliciteren en bedanken'],
    vocab: [
      ['das Fest', 'het feest'], ['Weihnachten', 'Kerstmis'], ['Ostern', 'Pasen'], ['Silvester', 'oudejaarsavond'], ['die Hochzeit', 'de bruiloft'], ['das Geschenk', 'het cadeau'], ['schenken', 'cadeau geven'],
      ['geben', 'geven'], ['bekommen', 'krijgen'], ['schicken', 'sturen'], ['zeigen', 'laten zien'], ['bringen', 'brengen'], ['gehören', 'toebehoren'], ['gefallen', 'bevallen'], ['danken', 'bedanken'],
      ['gratulieren', 'feliciteren'], ['die Blume', 'de bloem'], ['die Kerze', 'de kaars'], ['der Gast', 'de gast'], ['die Einladung', 'de uitnodiging'], ['der Gutschein', 'de cadeaubon'], ['die Überraschung', 'de verrassing'],
      ['Frohe Weihnachten!', 'Fijne kerst!'], ['Guten Rutsch!', 'Prettige jaarwisseling!'], ['Alles Gute!', 'Het beste!'], ['Vielen Dank!', 'Hartelijk dank!'], ['wünschen', 'wensen'], ['feiern', 'vieren']
    ],
    grammar: [
      { t: 'Wem? De derde naamval: aan wie', es: 'Der Dativ: wem?',
        html: `<p>Bij werkwoorden van <b>geven</b> (<i>geben, schenken, schicken, zeigen, bringen</i>) zijn er twee voorwerpen: het ding (<b>wat?</b> → vierde naamval) en de persoon (<b>aan wie?</b> → <b>derde naamval</b>). Het Duits heeft geen <i>aan</i> nodig: <i>Ich schenke <b>meinem Vater</b> ein Buch.</i></p>
<p>Lidwoorden in de derde naamval: <b>dem</b> (m), <b>der</b> (v), <b>dem</b> (o), <b>den … -n</b> (mv). Met <i>ein/mein/kein</i>: <b>-em, -er, -em, -en</b>.</p>
<p>Volgorde: eerst de <b>persoon</b> (3e), dan het <b>ding</b> (4e): <i>Ich gebe <b>der Frau</b> <b>die Blumen</b>.</i> <b>Uitzondering:</b> is het ding een voornaamwoord (<i>es, ihn, sie</i>), dan komt dat <b>eerst</b>: <i>Ich gebe <b>es ihr</b>.</i> <b>Waarom?</b> Korte, onbeklemtoonde woorden schuiven in het Duits naar voren in de zin.</p>
<p><b>Uitzondering:</b> in het meervoud krijgt ook het zelfstandig naamwoord een <b>-n</b>: <i>die Kinder → <b>den Kindern</b>, die Freunde → mit meinen Freunde<b>n</b></i>. <b>Waarom?</b> Dit is een overgebleven naamvalsuitgang; hij vervalt bij woorden die al op <i>-n</i> of <i>-s</i> eindigen.</p>`,
        table: [['', '1e naamval', '3e naamval (wem?)'], ['mannelijk', 'der / mein Vater', 'dem / meinem Vater'], ['vrouwelijk', 'die / meine Mutter', 'der / meiner Mutter'], ['onzijdig', 'das / mein Kind', 'dem / meinem Kind'], ['meervoud', 'die / meine Kinder', 'den / meinen Kindern']],
        sum: 'Wem? Dem Vater, der Mutter, dem Kind, den Kindern.',
        ex: [['Ich schenke meiner Mutter Blumen.', 'Ik geef mijn moeder bloemen.'], ['Kannst du mir das Foto zeigen? — Ja, ich zeige es dir.', 'Kun je me de foto laten zien? — Ja, ik laat hem je zien.'], ['Wir schicken den Großeltern eine Karte.', 'We sturen de grootouders een kaart.']] },
      { t: 'Werkwoorden met de derde naamval', es: 'Verben mit Dativ',
        html: `<p>Een kleine groep werkwoorden krijgt <b>altijd de derde naamval</b>, ook waar het Nederlands gewoon een lijdend voorwerp heeft: <b>helfen, danken, gratulieren, gefallen, gehören, antworten, schmecken, passen</b>.</p>
<p><i>Ich helfe <b>dir</b></i> (niet <s>dich</s>). <i>Ich danke <b>Ihnen</b>. Ich gratuliere <b>dem</b> Kollegen.</i></p>
<p><b>Uitzondering op het gewone patroon (lijdend voorwerp = vierde naamval). Waarom?</b> Deze werkwoorden drukken uit dat iets <i>ten goede komt aan</i> iemand: je geeft «hulp aan», «dank aan», «gelukwensen aan» iemand. Die persoon is dus eigenlijk een ontvanger, en ontvangers staan in de derde naamval.</p>
<p>Bij <b>gefallen</b>, <b>schmecken</b> en <b>gehören</b> draait de zin om: het ding is het onderwerp. <i>Das Geschenk <b>gefällt mir</b></i> (ik vind het cadeau mooi). <i>Der Kuchen <b>schmeckt mir</b>. Das Buch <b>gehört ihm</b>.</i></p>`,
        table: [['werkwoord', 'voorbeeld', 'Nederlands'], ['helfen', 'Kann ich Ihnen helfen?', 'Kan ik u helpen?'], ['danken', 'Ich danke dir.', 'Ik bedank je.'], ['gratulieren', 'Wir gratulieren ihr.', 'We feliciteren haar.'], ['gefallen', 'Die Stadt gefällt mir.', 'Ik vind de stad mooi.'], ['gehören', 'Das Auto gehört meinem Bruder.', 'De auto is van mijn broer.'], ['schmecken', 'Schmeckt es dir?', 'Smaakt het je?']],
        ex: [['Das Kleid gefällt mir sehr.', 'Ik vind de jurk heel mooi.'], ['Wem gehört diese Tasche? — Sie gehört der Lehrerin.', 'Van wie is deze tas? — Hij is van de lerares.'], ['Ich gratuliere dir zum Geburtstag!', 'Ik feliciteer je met je verjaardag!']] }
    ],
    dialogue: {
      t: 'Was schenken wir Oma?', place: 'Nürnberg 🇩🇪',
      lines: [
        ['Lea', 'Bald ist Weihnachten. Was schenken wir Oma dieses Jahr?', 'Het is bijna Kerstmis. Wat geven we oma dit jaar?'],
        ['Tim', 'Keine Ahnung. Letztes Jahr haben wir ihr einen Schal geschenkt.', 'Geen idee. Vorig jaar hebben we haar een sjaal gegeven.'],
        ['Lea', 'Ja, und er hat ihr nicht gefallen. Sie hat ihn Tante Karin gegeben!', 'Ja, en ze vond hem niet mooi. Ze heeft hem aan tante Karin gegeven!'],
        ['Tim', 'Stimmt. Vielleicht einen Gutschein für das Theater?', 'Klopt. Misschien een cadeaubon voor het theater?'],
        ['Lea', 'Gute Idee, das gefällt ihr bestimmt. Und Opa?', 'Goed idee, dat vindt ze vast leuk. En opa?'],
        ['Tim', 'Dem schenken wir ein Buch über Züge. Hilfst du mir beim Einpacken?', 'Die geven we een boek over treinen. Help je me met inpakken?'],
        ['Lea', 'Klar helfe ich dir. Und was wünschst du dir?', 'Natuurlijk help ik je. En wat wil jij hebben?'],
        ['Tim', 'Nichts Großes. Schenk mir einfach keine Socken mehr!', 'Niets groots. Geef me gewoon geen sokken meer!']
      ],
      q: [
        { t: 'mc', q: 'Was haben sie Oma letztes Jahr geschenkt?', o: ['Einen Schal', 'Ein Buch', 'Einen Gutschein'] },
        { t: 'mc', q: 'Was bekommt Opa?', o: ['Ein Buch über Züge', 'Socken', 'Einen Gutschein für das Theater'] },
        { t: 'mc', q: 'Was möchte Tim nicht mehr bekommen?', o: ['Socken', 'Bücher', 'Blumen'] }
      ]
    },
    culture: { t: 'Kerst op 24 december en Guten Rutsch', html: `<p>In Duitsland is <b>Heiligabend</b> (24 december) het belangrijkste moment: dan staat de boom er en worden ’s avonds de cadeaus uitgepakt, de <b>Bescherung</b>. De cadeaus brengt het <b>Christkind</b> (zuiden) of de <b>Weihnachtsmann</b> (noorden).</p>
<p>In de weken ervoor bezoekt iedereen de <b>Weihnachtsmarkt</b>, met <i>Glühwein</i>, <i>Lebkuchen</i> en <i>Bratwurst</i>. De beroemdste is de <i>Christkindlesmarkt</i> in Neurenberg.</p>
<p>🎆 Voor oud en nieuw wens je elkaar <b>Guten Rutsch!</b> (letterlijk: goede glijpartij) en om middernacht <b>Frohes neues Jahr!</b></p>
<p>Bij een etentje neem je bloemen of wijn mee. Bloemen geef je <b>zonder papier</b> en liever geen rode rozen (te romantisch).</p>` },
    ex: [
      { t: 'cloze', s: 'Ich schenke ___ Vater ein Buch.', a: ['meinem'], o: ['meinem', 'meinen', 'mein'], nl: 'Ik geef mijn vader een boek.', x: 'Aan wie? → derde naamval: mein Vater → meinem Vater.', tag: 'de-wem' },
      { t: 'cloze', s: 'Wir schicken ___ Oma eine Karte.', a: ['der'], o: ['der', 'die', 'dem'], nl: 'We sturen oma een kaart.', tag: 'de-wem' },
      { t: 'cloze', s: 'Er gibt ___ Kind einen Apfel.', a: ['dem'], o: ['dem', 'das', 'den'], nl: 'Hij geeft het kind een appel.', tag: 'de-wem' },
      { t: 'cloze', s: 'Sie zeigt den ___ die Fotos.', a: ['Kindern'], o: ['Kindern', 'Kinder', 'Kinden'], nl: 'Ze laat de kinderen de foto’s zien.', x: 'Uitzondering: in de derde naamval meervoud krijgt het zelfstandig naamwoord een extra -n: den Kindern.', tag: 'de-wem' },
      { t: 'cloze', s: 'Kann ich ___ helfen? (u)', a: ['Ihnen'], o: ['Ihnen', 'Sie', 'Ihr'], nl: 'Kan ik u helpen?', x: 'Uitzondering: helfen krijgt altijd de derde naamval; de geholpene «ontvangt» de hulp.', tag: 'de-dativverb' },
      { t: 'cloze', s: 'Das Geschenk gefällt ___ sehr. (ik)', a: ['mir'], o: ['mir', 'mich', 'ich'], nl: 'Ik vind het cadeau heel mooi.', tag: 'de-dativverb' },
      { t: 'cloze', s: 'Das Auto gehört ___ Bruder.', a: ['meinem'], o: ['meinem', 'meinen', 'meiner'], nl: 'De auto is van mijn broer.', tag: 'de-dativverb' },
      { t: 'cloze', s: 'Ich danke ___ für die Blumen. (jij)', a: ['dir'], o: ['dir', 'dich', 'du'], nl: 'Ik bedank je voor de bloemen.', tag: 'de-dativverb' },
      { t: 'mc', q: 'Welke volgorde is goed?', o: ['Ich gebe es ihr.', 'Ich gebe ihr es.', 'Ich es gebe ihr.'], x: 'Uitzondering: is het ding een voornaamwoord (es), dan komt dat vóór de persoon.', tag: 'de-wem' },
      { t: 'mc', q: 'Wat wens je iemand op oudejaarsavond?', o: ['Guten Rutsch!', 'Frohe Ostern!', 'Gute Besserung!'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik geef mijn moeder bloemen.', a: ['Ich schenke meiner Mutter Blumen.', 'Ich gebe meiner Mutter Blumen.'], tag: 'de-wem' },
      { t: 'tr', nl: 'Ik vind de stad mooi.', a: ['Die Stadt gefällt mir.', 'Mir gefällt die Stadt.', 'Ich finde die Stadt schön.'], tag: 'de-dativverb' },
      { t: 'tr', nl: 'Kun je me helpen?', a: ['Kannst du mir helfen?'], tag: 'de-dativverb' },
      { t: 'order', s: 'Zu Weihnachten schenken wir den Kindern ein Spiel.', nl: 'Met Kerstmis geven we de kinderen een spel.', tag: 'de-wem' },
      { t: 'match', p: [['schenken', 'cadeau geven'], ['bekommen', 'krijgen'], ['gehören', 'toebehoren'], ['gefallen', 'bevallen'], ['gratulieren', 'feliciteren']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Weihnachten bei uns', type: 'Brief aan een penvriend',
      p: [
        ['Lieber Daan, du hast mich gefragt, wie wir Weihnachten feiern. Am 24. Dezember schmücken wir am Morgen den Baum. Am Abend kommt die ganze Familie, und wir essen zusammen Kartoffelsalat mit Würstchen.', 'Beste Daan, je vroeg me hoe wij Kerstmis vieren. Op 24 december versieren we ’s ochtends de boom. ’s Avonds komt de hele familie, en we eten samen aardappelsalade met worstjes.'],
        ['Nach dem Essen ist die Bescherung. Dieses Jahr schenke ich meinem Bruder Kopfhörer und meiner Schwester ein Parfüm. Den Großeltern schenken wir Kinder zusammen einen Fotokalender.', 'Na het eten is het uitdelen van de cadeaus. Dit jaar geef ik mijn broer een koptelefoon en mijn zus een parfum. De grootouders geven wij, de kinderen, samen een fotokalender.'],
        ['Meine Mutter backt jedes Jahr Plätzchen. Die schmecken mir am besten! Ich schicke dir ein paar. Frohe Weihnachten und einen guten Rutsch! Deine Lea', 'Mijn moeder bakt elk jaar koekjes. Die vind ik het lekkerst! Ik stuur je er een paar. Fijne kerst en een goede jaarwisseling! Je Lea']
      ],
      gl: [['schmücken', 'versieren'], ['die Bescherung', 'het uitdelen van de cadeaus'], ['die Kopfhörer', 'de koptelefoon'], ['die Plätzchen', 'de (kerst)koekjes'], ['ein paar', 'een paar']],
      q: [
        { t: 'mc', q: 'Was isst die Familie am 24. Dezember?', o: ['Kartoffelsalat mit Würstchen', 'Gans mit Rotkohl', 'Plätzchen'] },
        { t: 'mc', q: 'Was schenkt Lea ihrer Schwester?', o: ['Ein Parfüm', 'Kopfhörer', 'Einen Fotokalender'] },
        { t: 'mc', q: 'Was schickt Lea Daan?', o: ['Plätzchen', 'Einen Kalender', 'Ein Foto vom Baum'] }
      ]
    },
    say: [['Ich schenke meiner Mutter Blumen.', 'Ik geef mijn moeder bloemen.'], ['Das gefällt mir sehr.', 'Dat vind ik heel mooi.'], ['Kannst du mir helfen?', 'Kun je me helpen?'], ['Frohe Weihnachten und einen guten Rutsch!', 'Fijne kerst en een goede jaarwisseling!']],
    task: { nl: 'Vertel wat je drie mensen cadeau geeft (of gaf) en waarom. Let op de derde naamval (4 zinnen).', model: 'Zum Geburtstag schenke ich meinem Vater ein Kochbuch, weil er gern kocht. Meiner Schwester gebe ich einen Gutschein für das Kino. Meinen Eltern schicke ich Blumen. Ich hoffe, dass es ihnen gefällt.' },
    scenario: { nl: 'Je zoekt met een Duitse vriendin kerstcadeaus uit voor haar familie.', role: 'You are Lea from Nuremberg, shopping at the Christmas market with the learner. Ask for gift ideas for your father, your grandmother and your little brother, react to suggestions ("Das gefällt ihm bestimmt" / "Das hat sie schon"), and ask what they give their own family. A2 German, use "du".', goal: 'Stel cadeaus voor en zeg aan wie je wat geeft.' }
  });

  /* ───────────────────────── A2 · 9 ───────────────────────── */
  U({
    id: 'de-a2-09', level: 'A2', icon: '🍽️', title: 'Im Restaurant', nl: 'Uit eten: beleefd vragen en beschrijven',
    goals: ['Een tafel reserveren en bestellen', 'Beleefd vragen met könnten, hätte gern en würde', 'Het bijvoeglijk naamwoord vóór een woord verbuigen', 'Klagen en betalen'],
    vocab: [
      ['die Speisekarte', 'de menukaart'], ['die Vorspeise', 'het voorgerecht'], ['das Hauptgericht', 'het hoofdgerecht'], ['die Nachspeise', 'het nagerecht'], ['das Getränk', 'het drankje'], ['das Fleisch', 'het vlees'],
      ['der Fisch', 'de vis'], ['das Gemüse', 'de groente'], ['die Kartoffel', 'de aardappel'], ['der Reis', 'de rijst'], ['die Nudeln', 'de pasta'], ['das Schnitzel', 'de schnitzel'], ['scharf', 'pittig / scherp'],
      ['süß', 'zoet'], ['salzig', 'zout'], ['frisch', 'vers'], ['vegetarisch', 'vegetarisch'], ['der Kellner / die Kellnerin', 'de ober / de serveerster'], ['das Trinkgeld', 'de fooi'], ['reservieren', 'reserveren'],
      ['bestellen', 'bestellen'], ['empfehlen', 'aanbevelen'], ['Ich hätte gern …', 'Ik zou graag … willen'], ['Könnten Sie …?', 'Zou u … kunnen?'], ['Zusammen oder getrennt?', 'Samen of apart?'], ['Stimmt so.', 'Laat maar zitten.'],
      ['Hat es geschmeckt?', 'Heeft het gesmaakt?'], ['satt', 'vol (verzadigd)']
    ],
    grammar: [
      { t: 'Beleefd vragen: könnten, hätte, würde', es: 'Höfliche Bitten mit Konjunktiv II',
        html: `<p>In een restaurant of winkel vraag je beleefd met de vormen mét Umlaut: <b>Könnten Sie …?</b> (zou u kunnen), <b>Ich hätte gern …</b> (ik zou graag … hebben), <b>Ich würde gern …</b> + heel werkwoord (ik zou graag …).</p>
<p>Vergelijk: <i>Kannst du mir helfen?</i> (kun je) → <i><b>Könntest</b> du mir helfen?</i> (zou je kunnen). <i>Ich will ein Bier</i> klinkt als een bevel; <i>Ich <b>hätte gern</b> ein Bier</i> is netjes.</p>
<p>Deze vormen heten <b>Konjunktiv II</b>. Je maakt ze van de verleden tijd + Umlaut: <i>konnte → k<b>ö</b>nnte, hatte → h<b>ä</b>tte, wurde → w<b>ü</b>rde, war → w<b>ä</b>re</i>.</p>
<p><b>Uitzondering:</b> <i>wollte</i> en <i>sollte</i> krijgen <b>geen</b> Umlaut: <i>ich wollte, ich sollte</i> zijn zowel verleden tijd als beleefde vorm. <b>Waarom?</b> Hun stam heeft ook in de tegenwoordige tijd nooit een Umlaut gehad (<i>wollen, sollen</i>), dus er valt niets terug te zetten.</p>`,
        table: [['direct', 'beleefd', 'Nederlands'], ['Ich will einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'Ik zou graag een koffie willen.'], ['Können Sie mir helfen?', 'Könnten Sie mir helfen?', 'Zou u mij kunnen helpen?'], ['Ich will bestellen.', 'Ich würde gern bestellen.', 'Ik zou graag willen bestellen.'], ['Haben Sie einen Tisch?', 'Hätten Sie einen Tisch für zwei?', 'Zou u een tafel voor twee hebben?']],
        sum: 'Ich hätte gern einen Kaffee. Könnten Sie mir helfen? Ich würde gern bestellen.',
        ex: [['Könnten Sie uns die Speisekarte bringen?', 'Zou u ons de menukaart kunnen brengen?'], ['Ich hätte gern das Schnitzel mit Kartoffeln.', 'Ik zou graag de schnitzel met aardappelen willen.'], ['Wir würden gern zahlen.', 'We zouden graag willen betalen.']] },
      { t: 'Het bijvoeglijk naamwoord vóór een zelfstandig naamwoord', es: 'Adjektivendungen (Nominativ und Akkusativ)',
        html: `<p>Na <i>sein</i> blijft het bijvoeglijk naamwoord kaal: <i>Der Wein ist <b>gut</b>.</i> Maar <b>vóór</b> een zelfstandig naamwoord krijgt het een uitgang. Het principe: <b>ergens moet het geslacht zichtbaar zijn</b>.</p>
<p>Na <b>der/die/das</b> is het geslacht al duidelijk → het bijvoeglijk naamwoord krijgt gewoon <b>-e</b>: <i>der gut<b>e</b> Wein, die frisch<b>e</b> Suppe, das kalt<b>e</b> Bier</i>.</p>
<p>Na <b>ein</b> is bij mannelijk en onzijdig het geslacht níét te zien → het bijvoeglijk naamwoord neemt de eindletter van <i>de<b>r</b></i> en <i>da<b>s</b></i> over: <i>ein gut<b>er</b> Wein, ein kalt<b>es</b> Bier</i>. Vrouwelijk: <i>eine frisch<b>e</b> Suppe</i>.</p>
<p><b>Uitzondering:</b> in de <b>vierde naamval mannelijk</b> en in het <b>meervoud</b> na een lidwoord is het altijd <b>-en</b>: <i>Ich nehme den gut<b>en</b> Wein / einen gut<b>en</b> Wein. Die frisch<b>en</b> Brötchen.</i> <b>Waarom?</b> Overal waar het lidwoord zélf van vorm verandert (der → den) of meervoud is, krijgt het bijvoeglijk naamwoord de «zwakke» uitgang -en.</p>`,
        table: [['', 'na der/die/das', 'na ein/eine'], ['mannelijk (1e nv.)', 'der gute Wein', 'ein guter Wein'], ['mannelijk (4e nv.)', 'den guten Wein', 'einen guten Wein'], ['vrouwelijk', 'die frische Suppe', 'eine frische Suppe'], ['onzijdig', 'das kalte Bier', 'ein kaltes Bier'], ['meervoud', 'die frischen Nudeln', 'keine frischen Nudeln']],
        ex: [['Ich hätte gern einen kleinen Salat und ein großes Wasser.', 'Ik zou graag een kleine salade en een groot glas water willen.'], ['Das ist ein sehr guter Fisch.', 'Dat is een heel goede vis.'], ['Die frische Suppe schmeckt mir.', 'De verse soep smaakt me.']] }
    ],
    dialogue: {
      t: 'Einen Tisch für zwei, bitte', place: 'Salzburg 🇦🇹',
      lines: [
        ['Sanne', 'Guten Abend. Hätten Sie einen Tisch für zwei Personen?', 'Goedenavond. Zou u een tafel voor twee personen hebben?'],
        ['Kellner', 'Guten Abend. Haben Sie reserviert?', 'Goedenavond. Hebt u gereserveerd?'],
        ['Sanne', 'Nein, leider nicht.', 'Nee, helaas niet.'],
        ['Kellner', 'Kein Problem. Der kleine Tisch am Fenster ist noch frei. Bitte schön, die Speisekarte.', 'Geen probleem. Het kleine tafeltje bij het raam is nog vrij. Alstublieft, de menukaart.'],
        ['Sanne', 'Danke. Was könnten Sie uns empfehlen?', 'Dank u. Wat zou u ons kunnen aanbevelen?'],
        ['Kellner', 'Das Wiener Schnitzel ist sehr gut, und heute haben wir frischen Fisch.', 'De Wiener schnitzel is heel goed, en vandaag hebben we verse vis.'],
        ['Sanne', 'Dann hätte ich gern den Fisch mit Gemüse und ein kleines Bier.', 'Dan zou ik graag de vis met groente en een klein biertje willen.'],
        ['Kellner', 'Sehr gern. … Hat es geschmeckt?', 'Heel graag. … Heeft het gesmaakt?'],
        ['Sanne', 'Ja, ausgezeichnet. Wir würden gern zahlen. Zusammen, bitte.', 'Ja, uitstekend. We zouden graag willen betalen. Samen, alstublieft.'],
        ['Kellner', 'Das macht 46 Euro.', 'Dat is 46 euro.'],
        ['Sanne', 'Fünfzig, stimmt so.', 'Vijftig, laat maar zitten.']
      ],
      q: [
        { t: 'mc', q: 'Hat Sanne reserviert?', o: ['Nein', 'Ja', 'Ja, für vier Personen'] },
        { t: 'mc', q: 'Was bestellt Sanne?', o: ['Den Fisch mit Gemüse und ein kleines Bier', 'Das Wiener Schnitzel', 'Nur einen Salat'] },
        { t: 'mc', q: 'Wie viel Trinkgeld gibt sie?', o: ['Vier Euro', 'Fünfzig Euro', 'Nichts'] }
      ]
    },
    culture: { t: 'Zusammen oder getrennt?', html: `<p>Aan het eind vraagt de ober bijna altijd: <b>Zusammen oder getrennt?</b> Apart betalen is in Duitsland en Oostenrijk heel gewoon, ook onder vrienden; de ober rekent het ter plekke per persoon uit.</p>
<p><b>Trinkgeld</b> is ongeveer 5 tot 10 procent. Je noemt het totaalbedrag dat je wilt betalen (<i>«Fünfzig, bitte»</i>) of zegt <b>Stimmt so</b>.</p>
<p>🥤 Water is niet gratis: je bestelt <i>ein Mineralwasser</i>, met prik (<b>mit Kohlensäure / mit Sprudel</b>) of zonder (<b>still</b>). <i>Leitungswasser</i> (kraanwater) vragen is ongebruikelijk.</p>
<p>Je wenst elkaar <b>Guten Appetit!</b> en wacht met drinken tot er geproost is: <b>Prost!</b> of bij wijn <b>Zum Wohl!</b>, en kijk elkaar daarbij aan.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich ___ gern einen Kaffee.', a: ['hätte'], o: ['hätte', 'hatte', 'habe'], nl: 'Ik zou graag een koffie willen.', x: 'Beleefd = mét Umlaut: hätte. Hatte (zonder) is verleden tijd: had.', tag: 'de-hoeflich' },
      { t: 'cloze', s: '___ Sie mir bitte helfen?', a: ['Könnten'], o: ['Könnten', 'Konnten', 'Kannst'], nl: 'Zou u mij alstublieft kunnen helpen?', tag: 'de-hoeflich' },
      { t: 'cloze', s: 'Wir ___ gern bestellen.', a: ['würden'], o: ['würden', 'wurden', 'werden'], nl: 'We zouden graag willen bestellen.', tag: 'de-hoeflich' },
      { t: 'cloze', s: 'Das ist ein gut___ Wein.', a: ['er'], o: ['er', 'e', 'en'], nl: 'Dat is een goede wijn.', x: 'Na ein is het geslacht niet zichtbaar: het bijvoeglijk naamwoord neemt de -r van der over.', tag: 'de-adjend' },
      { t: 'cloze', s: 'Ich nehme ein kalt___ Bier.', a: ['es'], o: ['es', 'e', 'en'], nl: 'Ik neem een koud bier.', x: 'Bier is das: na ein krijgt het bijvoeglijk naamwoord de -s van das.', tag: 'de-adjend' },
      { t: 'cloze', s: 'Die frisch___ Suppe schmeckt gut.', a: ['e'], o: ['e', 'er', 'en'], nl: 'De verse soep smaakt goed.', tag: 'de-adjend' },
      { t: 'cloze', s: 'Ich hätte gern einen klein___ Salat.', a: ['en'], o: ['en', 'er', 'e'], nl: 'Ik zou graag een kleine salade willen.', x: 'Uitzondering: vierde naamval mannelijk is altijd -en (einen kleinen), omdat ook het lidwoord daar verandert.', tag: 'de-adjend' },
      { t: 'cloze', s: 'Der klein___ Tisch ist frei.', a: ['e'], o: ['e', 'er', 'en'], nl: 'Het kleine tafeltje is vrij.', tag: 'de-adjend' },
      { t: 'mc', q: 'Wat zeg je als de ober het wisselgeld mag houden?', o: ['Stimmt so.', 'Zusammen, bitte.', 'Guten Appetit.'], tag: 'de-vok' },
      { t: 'mc', q: 'Welke vorm heeft géén Umlaut in de beleefde vorm?', o: ['wollte', 'könnte', 'hätte'], x: 'Uitzondering: wollte en sollte krijgen geen Umlaut, omdat wollen en sollen nooit een Umlaut hebben gehad.', tag: 'de-hoeflich' },
      { t: 'tr', nl: 'Zou u ons de menukaart kunnen brengen?', a: ['Könnten Sie uns die Speisekarte bringen?', 'Könnten Sie uns bitte die Speisekarte bringen?'], tag: 'de-hoeflich' },
      { t: 'tr', nl: 'Ik zou graag de vis willen.', a: ['Ich hätte gern den Fisch.', 'Ich hätte gerne den Fisch.', 'Ich möchte den Fisch.'], tag: 'de-hoeflich' },
      { t: 'tr', nl: 'Een groot glas water, alstublieft.', a: ['Ein großes Wasser, bitte.', 'Ein großes Glas Wasser, bitte.'], tag: 'de-adjend' },
      { t: 'order', s: 'Wir hätten gern einen Tisch für vier Personen.', nl: 'We zouden graag een tafel voor vier personen willen.', tag: 'de-hoeflich' },
      { t: 'match', p: [['scharf', 'pittig'], ['süß', 'zoet'], ['frisch', 'vers'], ['satt', 'vol'], ['das Trinkgeld', 'de fooi']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Gasthaus zum Goldenen Hirsch', type: 'Recensie',
      p: [
        ['Letzten Samstag waren wir im Gasthaus zum Goldenen Hirsch in Salzburg. Wir hatten einen schönen Tisch im Garten reserviert. Der junge Kellner war sehr freundlich und hat uns gut beraten.', 'Afgelopen zaterdag waren we in Gasthaus zum Goldenen Hirsch in Salzburg. We hadden een mooie tafel in de tuin gereserveerd. De jonge ober was heel vriendelijk en heeft ons goed geadviseerd.'],
        ['Als Vorspeise hatte ich eine heiße Suppe, danach ein großes Schnitzel mit Kartoffelsalat. Das Fleisch war zart und der Salat frisch. Meine Frau hatte einen gegrillten Fisch. Er war leider ein bisschen zu salzig.', 'Als voorgerecht had ik een hete soep, daarna een grote schnitzel met aardappelsalade. Het vlees was mals en de salade vers. Mijn vrouw had een gegrilde vis. Die was helaas een beetje te zout.'],
        ['Die Nachspeise war das Beste: ein warmer Apfelstrudel mit Vanilleeis. Die Preise sind nicht billig, aber fair. Wir kommen gern wieder!', 'Het nagerecht was het beste: een warme apfelstrudel met vanille-ijs. De prijzen zijn niet goedkoop, maar eerlijk. We komen graag terug!']
      ],
      gl: [['beraten', 'adviseren'], ['zart', 'mals'], ['gegrillt', 'gegrild'], ['das Beste', 'het beste'], ['wiederkommen', 'terugkomen']],
      q: [
        { t: 'mc', q: 'Wo hat das Paar gegessen?', o: ['Im Garten', 'Am Fenster', 'An der Bar'] },
        { t: 'mc', q: 'Was war nicht perfekt?', o: ['Der Fisch war zu salzig.', 'Der Kellner war unfreundlich.', 'Das Schnitzel war kalt.'] },
        { t: 'mc', q: 'Was war das Beste?', o: ['Der Apfelstrudel', 'Die Suppe', 'Der Salat'] }
      ]
    },
    say: [['Ich hätte gern das Schnitzel.', 'Ik zou graag de schnitzel willen.'], ['Könnten Sie uns die Speisekarte bringen?', 'Zou u ons de menukaart kunnen brengen?'], ['Wir würden gern zahlen.', 'We zouden graag willen betalen.'], ['Ein großes Wasser und einen kleinen Salat, bitte.', 'Een groot water en een kleine salade, alstublieft.']],
    task: { nl: 'Je bent in een restaurant. Vraag beleefd om een tafel, bestel een voor- en hoofdgerecht met een drankje en vraag om de rekening (4 zinnen).', model: 'Guten Abend, hätten Sie einen Tisch für zwei? Ich hätte gern eine kleine Suppe und danach den frischen Fisch. Dazu würde ich gern ein großes Wasser trinken. Könnten Sie uns bitte die Rechnung bringen?' },
    scenario: { nl: 'Je gaat uit eten in Salzburg en bestelt voor jezelf.', role: 'You are Herr Leitner, a polite waiter in a traditional restaurant in Salzburg. Ask about a reservation, recommend the schnitzel and the fresh fish, take the order, ask "Hat es geschmeckt?" and "Zusammen oder getrennt?". A2 German, use "Sie".', goal: 'Reserveer, bestel beleefd en betaal met fooi.' }
  });

  /* ───────────────────────── A2 · 10 ───────────────────────── */
  U({
    id: 'de-a2-10', level: 'A2', icon: '📱', title: 'Alltag und Medien', nl: 'Dagelijks leven en media',
    goals: ['Over je gewoontes en media praten', 'Wederkerende werkwoorden gebruiken: ich freue mich', 'Een voorwaarde uitdrukken met wenn', 'Zeggen waar je je voor interesseert'],
    vocab: [
      ['das Handy', 'de mobiele telefoon'], ['die Nachricht', 'het bericht'], ['die Nachrichten', 'het nieuws'], ['die Zeitung', 'de krant'], ['das Internet', 'het internet'], ['die Sendung', 'de uitzending'],
      ['die Serie', 'de serie'], ['der Bildschirm', 'het scherm'], ['herunterladen', 'downloaden'], ['schicken', 'sturen'], ['anrufen', 'opbellen'], ['telefonieren', 'bellen'], ['sich freuen', 'zich verheugen / blij zijn'],
      ['sich interessieren für', 'zich interesseren voor'], ['sich ärgern', 'zich ergeren'], ['sich fühlen', 'zich voelen'], ['sich beeilen', 'zich haasten'], ['sich treffen', 'afspreken'], ['sich waschen', 'zich wassen'],
      ['sich anziehen', 'zich aankleden'], ['sich setzen', 'gaan zitten'], ['sich entschuldigen', 'zijn excuses aanbieden'], ['die Gewohnheit', 'de gewoonte'], ['täglich', 'dagelijks'], ['wenn', 'als / wanneer'],
      ['das Passwort', 'het wachtwoord'], ['der Akku', 'de accu / batterij'], ['leer', 'leeg']
    ],
    grammar: [
      { t: 'Wederkerende werkwoorden', es: 'Reflexive Verben',
        html: `<p>Net als <i>zich wassen</i> hebben Duitse wederkerende werkwoorden een extra voornaamwoord. Het verschil met het Nederlands: het is alleen <b>sich</b> in de 3e persoon en bij <i>Sie</i>; verder gebruik je de gewone vormen <b>mich, dich, uns, euch</b>.</p>
<p><i>Ich freue <b>mich</b>. Du freust <b>dich</b>. Er freut <b>sich</b>. Wir freuen <b>uns</b>.</i> In het Nederlands: ik verheug <i>me</i>, jij verheugt <i>je</i>, hij verheugt <i>zich</i>.</p>
<p>Niet alle wederkerende werkwoorden komen overeen. Duits wél, Nederlands niet: <b>sich treffen</b> (afspreken), <b>sich setzen</b> (gaan zitten), <b>sich beeilen</b> (opschieten), <b>sich freuen</b> (blij zijn).</p>
<p><b>Uitzondering:</b> staat er nóg een lijdend voorwerp in de zin, dan staat het wederkerend voornaamwoord in de <b>derde naamval</b>: <i>Ich wasche <b>mich</b></i>, maar <i>Ich wasche <b>mir</b> die Hände</i>. <b>Waarom?</b> Een zin kan maar één lijdend voorwerp (vierde naamval) hebben; hier zijn dat de handen, dus «ik» wordt de ontvanger (derde naamval). Je ziet het verschil alleen bij <i>ich</i> (mir) en <i>du</i> (dir).</p>`,
        table: [['', 'sich freuen', 'Nederlands'], ['ich', 'freue mich', 'ik ben blij'], ['du', 'freust dich', 'jij bent blij'], ['er / sie / es', 'freut sich', 'hij / zij is blij'], ['wir', 'freuen uns', 'wij zijn blij'], ['ihr', 'freut euch', 'jullie zijn blij'], ['sie / Sie', 'freuen sich', 'zij zijn / u bent blij']],
        sum: 'Ich freue mich, du freust dich, er freut sich, wir freuen uns.',
        ex: [['Ich interessiere mich für Politik.', 'Ik interesseer me voor politiek.'], ['Wir treffen uns um acht vor dem Kino.', 'We spreken om acht uur af voor de bioscoop.'], ['Beeil dich, der Film fängt an!', 'Schiet op, de film begint!']] },
      { t: 'wenn: als (voorwaarde)', es: 'Nebensätze mit wenn',
        html: `<p>Een voorwaarde begint met <b>wenn</b> (als). Het is een bijzin: het werkwoord gaat naar het <b>einde</b>. <i><b>Wenn</b> ich Zeit <b>habe</b>, rufe ich dich an.</i></p>
<p>Begint de zin met de <i>wenn</i>-zin, dan staat in de hoofdzin het <b>werkwoord meteen na de komma</b>: <i>Wenn es regnet, <b>bleibe</b> ich zu Hause.</i> Zo krijg je «werkwoord, werkwoord» rond de komma, precies zoals in het Nederlands: <i>Als het regent, blijf ik thuis.</i></p>
<p><b>Let op (valse vrienden):</b> het Nederlandse <i>als</i> = <b>wenn</b>. Het Duitse <b>als</b> = <i>toen</i> of <i>dan</i> (bij vergelijken). En <b>wann</b> is alleen het vraagwoord <i>wanneer?</i></p>
<p>Na <i>sich freuen</i> hoort een vast voorzetsel: <b>sich freuen auf</b> + 4e nv. = uitkijken naar (toekomst); <b>sich freuen über</b> + 4e nv. = blij zijn met (nu).</p>`,
        table: [['Nederlands', 'Duits', 'voorbeeld'], ['als (voorwaarde)', 'wenn', 'Wenn du willst, helfe ich dir.'], ['toen', 'als', 'Als ich jung war, …'], ['wanneer? (vraag)', 'wann', 'Wann kommst du?'], ['uitkijken naar', 'sich freuen auf', 'Ich freue mich auf das Wochenende.'], ['blij zijn met', 'sich freuen über', 'Ich freue mich über das Geschenk.']],
        ex: [['Wenn mein Akku leer ist, kann ich dich nicht anrufen.', 'Als mijn batterij leeg is, kan ik je niet bellen.'], ['Ich schicke dir eine Nachricht, wenn ich ankomme.', 'Ik stuur je een bericht als ik aankom.'], ['Ich freue mich auf den Urlaub.', 'Ik kijk uit naar de vakantie.']] }
    ],
    dialogue: {
      t: 'Immer am Handy', place: 'Bern 🇨🇭',
      lines: [
        ['Mila', 'Jonas, du bist schon wieder am Handy! Wir wollten uns doch unterhalten.', 'Jonas, je zit alweer op je telefoon! We zouden toch kletsen.'],
        ['Jonas', 'Entschuldigung. Ich lese nur schnell die Nachrichten.', 'Sorry. Ik lees alleen even snel het nieuws.'],
        ['Mila', 'Interessierst du dich so für Politik?', 'Interesseer je je zo voor politiek?'],
        ['Jonas', 'Nein, für Fußball. Wenn mein Verein spielt, muss ich alles wissen.', 'Nee, voor voetbal. Als mijn club speelt, moet ik alles weten.'],
        ['Mila', 'Ich ärgere mich, wenn Leute beim Essen aufs Handy schauen.', 'Ik erger me als mensen tijdens het eten op hun telefoon kijken.'],
        ['Jonas', 'Du hast recht. Ich lege es weg. Wie fühlst du dich heute?', 'Je hebt gelijk. Ik leg hem weg. Hoe voel je je vandaag?'],
        ['Mila', 'Gut! Ich freue mich auf das Wochenende. Treffen wir uns am Samstag?', 'Goed! Ik kijk uit naar het weekend. Spreken we zaterdag af?'],
        ['Jonas', 'Gern. Wenn das Wetter schön ist, können wir an den See fahren.', 'Graag. Als het mooi weer is, kunnen we naar het meer gaan.'],
        ['Mila', 'Super. Aber dein Handy bleibt zu Hause!', 'Top. Maar je telefoon blijft thuis!']
      ],
      q: [
        { t: 'mc', q: 'Wofür interessiert sich Jonas?', o: ['Für Fußball', 'Für Politik', 'Für Serien'] },
        { t: 'mc', q: 'Worüber ärgert sich Mila?', o: ['Wenn Leute beim Essen aufs Handy schauen.', 'Wenn Jonas zu spät kommt.', 'Wenn es regnet.'] },
        { t: 'mc', q: 'Was machen sie am Samstag, wenn das Wetter schön ist?', o: ['Sie fahren an den See.', 'Sie sehen eine Serie.', 'Sie bleiben zu Hause.'] }
      ]
    },
    culture: { t: 'Handy, Tatort en de Rundfunkbeitrag', html: `<p>Het Duitse woord voor mobiele telefoon is <b>das Handy</b>: het klinkt Engels, maar bestaat in het Engels niet in die betekenis. Zulke woorden heten <i>Scheinanglizismen</i>; nog een paar: <b>der Beamer</b> en <b>das Homeoffice</b>.</p>
<p>Op zondagavond om kwart over acht kijkt half Duitsland naar <b>Tatort</b>, een misdaadserie die al sinds 1970 loopt, elke week in een andere stad.</p>
<p>📺 Elk huishouden betaalt de <b>Rundfunkbeitrag</b> voor de publieke omroepen ARD en ZDF, of je nu tv kijkt of niet.</p>
<p>Duitsers zijn zuinig op hun <b>Datenschutz</b> (privacy): veel mensen betalen liever contant en zetten niet alles online.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich freue ___ auf das Wochenende.', a: ['mich'], o: ['mich', 'sich', 'mir'], nl: 'Ik kijk uit naar het weekend.', tag: 'de-refl' },
      { t: 'cloze', s: 'Er interessiert ___ für Musik.', a: ['sich'], o: ['sich', 'ihn', 'ihm'], nl: 'Hij interesseert zich voor muziek.', tag: 'de-refl' },
      { t: 'cloze', s: 'Wir treffen ___ um acht.', a: ['uns'], o: ['uns', 'sich', 'wir'], nl: 'We spreken om acht uur af.', tag: 'de-refl' },
      { t: 'cloze', s: 'Wie fühlst du ___?', a: ['dich'], o: ['dich', 'dir', 'sich'], nl: 'Hoe voel je je?', tag: 'de-refl' },
      { t: 'cloze', s: 'Ich wasche ___ die Hände.', a: ['mir'], o: ['mir', 'mich', 'sich'], nl: 'Ik was mijn handen.', x: 'Uitzondering: er is al een lijdend voorwerp (die Hände), dus het wederkerend voornaamwoord staat in de derde naamval: mir.', tag: 'de-refl' },
      { t: 'cloze', s: '___ ich Zeit habe, rufe ich dich an.', a: ['Wenn'], o: ['Wenn', 'Als', 'Wann'], nl: 'Als ik tijd heb, bel ik je.', x: 'Valse vriend: Nederlands «als» (voorwaarde) = wenn. Duits als = toen.', tag: 'de-wenn' },
      { t: 'cloze', s: 'Wenn es regnet, ___ ich zu Hause.', a: ['bleibe'], o: ['bleibe', 'ich bleibe', 'bleiben'], nl: 'Als het regent, blijf ik thuis.', x: 'Na de bijzin begint de hoofdzin met het werkwoord: …, bleibe ich.', tag: 'de-wenn' },
      { t: 'cloze', s: 'Ich schicke dir eine Nachricht, wenn ich ___.', a: ['ankomme'], o: ['ankomme', 'komme an', 'ankommen'], nl: 'Ik stuur je een bericht als ik aankom.', tag: 'de-wenn' },
      { t: 'mc', q: 'Wat betekent «Ich freue mich über das Geschenk»?', o: ['Ik ben blij met het cadeau.', 'Ik kijk uit naar het cadeau.', 'Ik erger me aan het cadeau.'], x: 'Sich freuen über = blij zijn met (nu); sich freuen auf = uitkijken naar (toekomst).', tag: 'de-refl' },
      { t: 'mc', q: 'Wat is «das Handy»?', o: ['de mobiele telefoon', 'de hand', 'handig'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik interesseer me voor sport.', a: ['Ich interessiere mich für Sport.'], tag: 'de-refl' },
      { t: 'tr', nl: 'Schiet op!', a: ['Beeil dich!', 'Beeilen Sie sich!', 'Beeilt euch!'], tag: 'de-refl' },
      { t: 'tr', nl: 'Als je wilt, help ik je.', a: ['Wenn du willst, helfe ich dir.', 'Wenn du möchtest, helfe ich dir.'], tag: 'de-wenn' },
      { t: 'order', s: 'Wenn das Wetter schön ist, fahren wir an den See.', nl: 'Als het mooi weer is, gaan we naar het meer.', tag: 'de-wenn' },
      { t: 'match', p: [['sich freuen', 'blij zijn'], ['sich ärgern', 'zich ergeren'], ['sich beeilen', 'zich haasten'], ['sich treffen', 'afspreken'], ['sich setzen', 'gaan zitten']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Eine Woche ohne Handy', type: 'Column',
      p: [
        ['Letzten Monat habe ich etwas Verrücktes gemacht: Ich habe eine Woche ohne Handy gelebt. Meine Freunde haben gelacht. Sie haben gesagt, dass ich das nie schaffe.', 'Vorige maand heb ik iets geks gedaan: ik heb een week zonder telefoon geleefd. Mijn vrienden lachten. Ze zeiden dat ik dat nooit zou redden.'],
        ['Die ersten Tage waren schwer. Ich habe mich oft gelangweilt und ich habe mich geärgert, weil ich keine Nachrichten lesen konnte. Wenn ich mich mit jemandem treffen wollte, musste ich vorher alles genau planen.', 'De eerste dagen waren zwaar. Ik verveelde me vaak en ik ergerde me, omdat ik geen berichten kon lezen. Als ik met iemand wilde afspreken, moest ik vooraf alles precies plannen.'],
        ['Aber nach drei Tagen habe ich mich besser gefühlt. Ich habe mehr gelesen, besser geschlafen und mich mehr mit meiner Familie unterhalten. Jetzt lege ich das Handy weg, wenn ich esse. Ich freue mich über die Ruhe!', 'Maar na drie dagen voelde ik me beter. Ik heb meer gelezen, beter geslapen en meer met mijn familie gepraat. Nu leg ik de telefoon weg als ik eet. Ik ben blij met de rust!']
      ],
      gl: [['verrückt', 'gek'], ['schaffen', 'redden / voor elkaar krijgen'], ['sich langweilen', 'zich vervelen'], ['vorher', 'vooraf'], ['sich unterhalten', 'praten / kletsen']],
      q: [
        { t: 'mc', q: 'Was hat die Autorin gemacht?', o: ['Eine Woche ohne Handy gelebt', 'Ein neues Handy gekauft', 'Eine Woche Urlaub gemacht'] },
        { t: 'mc', q: 'Warum hat sie sich am Anfang geärgert?', o: ['Sie konnte keine Nachrichten lesen.', 'Ihre Freunde haben gelacht.', 'Sie hat schlecht geschlafen.'] },
        { t: 'mc', q: 'Was macht sie jetzt, wenn sie isst?', o: ['Sie legt das Handy weg.', 'Sie liest Nachrichten.', 'Sie telefoniert.'] }
      ]
    },
    say: [['Ich interessiere mich für Musik.', 'Ik interesseer me voor muziek.'], ['Ich freue mich auf das Wochenende.', 'Ik kijk uit naar het weekend.'], ['Wenn ich Zeit habe, rufe ich dich an.', 'Als ik tijd heb, bel ik je.'], ['Wir treffen uns um acht.', 'We spreken om acht uur af.']],
    task: { nl: 'Vertel over je mediagewoontes: waar interesseer je je voor, waar erger je je aan en wat doe je als je vrije tijd hebt? (4 zinnen)', model: 'Ich interessiere mich für Musik und Reisen. Ich lese täglich die Nachrichten auf dem Handy. Ich ärgere mich, wenn das Internet langsam ist. Wenn ich Zeit habe, sehe ich am Abend eine Serie.' },
    scenario: { nl: 'Je praat met een Zwitserse vriend over telefoons en media.', role: 'You are Jonas from Bern. Talk with the learner about media habits: how much time on the phone, favourite series, what annoys them. Use reflexive verbs (sich interessieren, sich ärgern, sich freuen) and wenn-clauses, and ask questions back. A2 German, use "du".', goal: 'Vertel over je gewoontes met wederkerende werkwoorden en wenn.' }
  });
})(window.SPT);
