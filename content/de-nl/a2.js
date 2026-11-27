/* Duits voor Nederlandstaligen — niveau A2, units 1–5 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-perfsein': 'Perfekt met sein (ich bin gefahren)', 'de-part': 'voltooid deelwoord (onregelmatig)', 'de-praet-modal': 'konnte, musste, wollte, durfte', 'de-als': 'als of wenn (verleden)',
    'de-datpron': 'mir, dir, ihm, ihr (derde naamval)', 'de-sollen': 'sollen / dürfen', 'de-seit': 'seit + derde naamval', 'de-weil': 'weil: werkwoord achteraan', 'de-futur': 'toekomst (werden)',
    'de-wohin': 'wohin? (vierde naamval) of wo? (derde naamval)', 'de-mit': 'mit, zu, nach, bei, aus, von + derde naamval'
  });

  /* ───────────────────────── A2 · 1 ───────────────────────── */
  U({
    id: 'de-a2-01', level: 'A2', icon: '🧳', title: 'Im Urlaub', nl: 'Vertellen over je vakantie',
    goals: ['Over een reis vertellen', 'Het Perfekt met sein maken: ich bin gefahren', 'Kiezen tussen haben en sein', 'Onregelmatige deelwoorden herkennen'],
    vocab: [
      ['die Reise', 'de reis'], ['reisen', 'reizen'], ['fliegen', 'vliegen'], ['bleiben', 'blijven'], ['ankommen', 'aankomen'], ['abfahren', 'vertrekken'], ['der Flug', 'de vlucht'], ['der Flughafen', 'het vliegveld'],
      ['das Gepäck', 'de bagage'], ['der Koffer', 'de koffer'], ['der Strand', 'het strand'], ['der Berg / die Berge', 'de berg / de bergen'], ['das Meer', 'de zee'], ['die Insel', 'het eiland'], ['wandern', 'wandelen (in de natuur)'],
      ['besichtigen', 'bezichtigen'], ['die Sehenswürdigkeit', 'de bezienswaardigheid'], ['die Unterkunft', 'het onderkomen'], ['buchen', 'boeken'], ['der Ausflug', 'het uitstapje'], ['gefahren', 'gereden / gegaan'],
      ['gegangen', 'gegaan / gelopen'], ['geflogen', 'gevlogen'], ['geblieben', 'gebleven'], ['gekommen', 'gekomen'], ['gewesen', 'geweest'], ['passiert', 'gebeurd'], ['Wie war die Reise?', 'Hoe was de reis?']
    ],
    grammar: [
      { t: 'Het Perfekt met sein', es: 'Das Perfekt mit sein',
        html: `<p>De meeste werkwoorden krijgen <i>haben</i>. Maar werkwoorden van <b>beweging van A naar B</b> (<i>gehen, fahren, fliegen, kommen, reisen</i>) en van <b>verandering van toestand</b> (<i>aufstehen, einschlafen, werden</i>) krijgen <b>sein</b>: <i>Ich <b>bin</b> nach Wien <b>gefahren</b>.</i></p>
<p>Dit is bijna gelijk aan het Nederlands: <i>ik <b>ben</b> gegaan, ik <b>ben</b> gekomen</i>. Twijfel je? Denk aan de Nederlandse zin.</p>
<p><b>Uitzondering:</b> ook <b>sein</b> en <b>bleiben</b> krijgen <i>sein</i>, hoewel er niets beweegt: <i>Ich <b>bin</b> zu Hause <b>geblieben</b>. Ich <b>bin</b> in Rom <b>gewesen</b>.</i> <b>Waarom?</b> Het zijn «toestandswerkwoorden» die van oudsher bij <i>sein</i> horen, net als in het Nederlands (ik <i>ben</i> gebleven, ik <i>ben</i> geweest).</p>
<p><b>Let op het verschil met het Nederlands:</b> <i>Ik <b>ben</b> vergeten</i> en <i>ik <b>ben</b> begonnen</i> zijn in het Duits met <b>haben</b>: <i>Ich <b>habe</b> vergessen. Ich <b>habe</b> angefangen.</i> <b>Waarom?</b> Er is geen beweging of verandering van toestand, en het Duits houdt zich daar strikter aan dan het Nederlands.</p>`,
        table: [['heel werkwoord', 'Perfekt', 'Nederlands'], ['fahren', 'ich bin gefahren', 'ik ben gegaan / gereden'], ['gehen', 'ich bin gegangen', 'ik ben gegaan'], ['fliegen', 'ich bin geflogen', 'ik ben gevlogen'], ['kommen', 'ich bin gekommen', 'ik ben gekomen'], ['bleiben', 'ich bin geblieben', 'ik ben gebleven'], ['sein', 'ich bin gewesen', 'ik ben geweest']],
        sum: 'Bewegung und Veränderung: sein. Ich bin gefahren, ich bin geblieben, ich bin gewesen.',
        ex: [['Wir sind im Sommer nach Italien geflogen.', 'We zijn in de zomer naar Italië gevlogen.'], ['Bist du schon in Berlin gewesen?', 'Ben je al in Berlijn geweest?'], ['Er ist um acht Uhr angekommen.', 'Hij is om acht uur aangekomen.']] },
      { t: 'Scheidbaar in het Perfekt: ge- in het midden', es: 'Trennbare Verben im Perfekt',
        html: `<p>Bij scheidbare werkwoorden komt <b>ge-</b> tússen het voorvoegsel en de stam, precies zoals in het Nederlands: <i>ankommen → an<b>ge</b>kommen</i> (aan<b>ge</b>komen), <i>einkaufen → ein<b>ge</b>kauft</i>, <i>aufstehen → auf<b>ge</b>standen</i>.</p>
<p><b>Uitzondering:</b> werkwoorden op <b>-ieren</b> en met <b>be-, ver-, er-, ent-</b> krijgen geen <i>ge-</i>: <i>passieren → <b>passiert</b>, besichtigen → <b>besichtigt</b>, vergessen → <b>vergessen</b></i>. <b>Waarom?</b> <i>Ge-</i> staat alleen vóór een beklemtoonde lettergreep, en bij deze werkwoorden ligt de klemtoon verderop.</p>`,
        table: [['heel werkwoord', 'deelwoord', 'hulpwerkwoord'], ['ankommen', 'angekommen', 'sein'], ['abfahren', 'abgefahren', 'sein'], ['aufstehen', 'aufgestanden', 'sein'], ['einkaufen', 'eingekauft', 'haben'], ['besichtigen', 'besichtigt', 'haben'], ['passieren', 'passiert', 'sein']],
        ex: [['Der Zug ist pünktlich abgefahren.', 'De trein is op tijd vertrokken.'], ['Wir haben das Schloss besichtigt.', 'We hebben het kasteel bezichtigd.'], ['Was ist passiert?', 'Wat is er gebeurd?']] }
    ],
    dialogue: {
      t: 'Wie war dein Urlaub?', place: 'Innsbruck 🇦🇹',
      lines: [
        ['Lena', 'Hallo Daan! Du bist ja braun. Wo bist du gewesen?', 'Hoi Daan! Wat ben jij bruin. Waar ben je geweest?'],
        ['Daan', 'Ich war zwei Wochen in Österreich. Wir sind mit dem Zug nach Innsbruck gefahren.', 'Ik was twee weken in Oostenrijk. We zijn met de trein naar Innsbruck gegaan.'],
        ['Lena', 'Toll! Und was habt ihr dort gemacht?', 'Gaaf! En wat hebben jullie daar gedaan?'],
        ['Daan', 'Wir sind viel gewandert und haben die Altstadt besichtigt. Einmal sind wir auf einen Berg gestiegen.', 'We hebben veel gewandeld en de oude binnenstad bezichtigd. Eén keer zijn we een berg op geklommen.'],
        ['Lena', 'Seid ihr im Hotel geblieben?', 'Zijn jullie in een hotel gebleven?'],
        ['Daan', 'Nein, wir haben eine kleine Wohnung gebucht. Das war billiger.', 'Nee, we hebben een klein appartement geboekt. Dat was goedkoper.'],
        ['Lena', 'Und ist alles gut gegangen?', 'En is alles goed gegaan?'],
        ['Daan', 'Fast. Am ersten Tag ist mein Koffer nicht angekommen. Ich habe zwei Tage dasselbe T-Shirt getragen!', 'Bijna. De eerste dag is mijn koffer niet aangekomen. Ik heb twee dagen hetzelfde T-shirt gedragen!']
      ],
      q: [
        { t: 'mc', q: 'Wie ist Daan nach Innsbruck gefahren?', o: ['Mit dem Zug', 'Mit dem Auto', 'Mit dem Flugzeug'] },
        { t: 'mc', q: 'Wo haben sie gewohnt?', o: ['In einer kleinen Wohnung', 'Im Hotel', 'Bei Freunden'] },
        { t: 'mc', q: 'Was ist am ersten Tag passiert?', o: ['Der Koffer ist nicht angekommen.', 'Der Zug ist nicht gefahren.', 'Daan ist krank geworden.'] }
      ]
    },
    culture: { t: 'Reiseweltmeister', html: `<p>Duitsers noemen zichzelf graag <b>Reiseweltmeister</b> (wereldkampioen reizen). Met gemiddeld dertig vakantiedagen per jaar gaan velen meerdere keren weg, het liefst naar de Oostzee, de Alpen, Mallorca of Italië.</p>
<p>In de zomer liggen de <b>Sommerferien</b> per deelstaat op een ander moment, om files te spreiden. Toch staat er op de Autobahn richting het zuiden altijd <b>Stau</b>.</p>
<p>🏖️ Valse vriend: <b>das Meer</b> is <i>de zee</i>; <b>der See</b> is <i>het meer</i>. En <i>Urlaub</i> is vakantie van je werk; <i>Ferien</i> zijn schoolvakanties.</p>` },
    ex: [
      { t: 'cloze', s: 'Wir ___ nach Italien geflogen.', a: ['sind'], o: ['sind', 'haben', 'waren'], nl: 'We zijn naar Italië gevlogen.', x: 'Beweging van A naar B: Perfekt met sein.', tag: 'de-perfsein' },
      { t: 'cloze', s: 'Ich ___ einen Koffer gekauft.', a: ['habe'], o: ['habe', 'bin', 'hat'], nl: 'Ik heb een koffer gekocht.', tag: 'de-perfsein' },
      { t: 'cloze', s: 'Er ___ zu Hause geblieben.', a: ['ist'], o: ['ist', 'hat', 'war'], nl: 'Hij is thuis gebleven.', x: 'Uitzondering: bleiben krijgt sein, hoewel er niets beweegt (net als in het Nederlands: is gebleven).', tag: 'de-perfsein' },
      { t: 'cloze', s: 'Ich ___ meinen Pass vergessen.', a: ['habe'], o: ['habe', 'bin', 'ist'], nl: 'Ik ben mijn paspoort vergeten.', x: 'Let op: Nederlands «ben vergeten», Duits «habe vergessen»: er is geen beweging of verandering van toestand.', tag: 'de-perfsein' },
      { t: 'cloze', s: 'Der Zug ist pünktlich ___.', a: ['angekommen'], o: ['angekommen', 'geankommt', 'ankommen'], nl: 'De trein is op tijd aangekomen.', x: 'Scheidbaar werkwoord: ge- komt in het midden: an-ge-kommen.', tag: 'de-part' },
      { t: 'cloze', s: 'Wir haben die Stadt ___.', a: ['besichtigt'], o: ['besichtigt', 'gebesichtigt', 'besichtigen'], nl: 'We hebben de stad bezichtigd.', x: 'Uitzondering: werkwoorden met be- krijgen geen ge-.', tag: 'de-part' },
      { t: 'cloze', s: 'Bist du schon in Wien ___?', a: ['gewesen'], h: 'sein', nl: 'Ben je al in Wenen geweest?', tag: 'de-part' },
      { t: 'cloze', s: 'Sie ist gestern nach Hause ___.', a: ['gegangen'], o: ['gegangen', 'gegeht', 'gegehen'], nl: 'Ze is gisteren naar huis gegaan.', tag: 'de-part' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ich habe angefangen.', 'Ich bin angefangen.', 'Ich bin anfangen.'], x: 'Let op: Nederlands «ben begonnen», Duits «habe angefangen».', tag: 'de-perfsein' },
      { t: 'mc', q: 'Wat is «das Meer»?', o: ['de zee', 'het meer', 'meer (hoeveelheid)'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik ben naar Berlijn gegaan.', a: ['Ich bin nach Berlin gefahren.', 'Ich bin nach Berlin gegangen.', 'Ich bin nach Berlin gereist.'], tag: 'de-perfsein' },
      { t: 'tr', nl: 'Wat is er gebeurd?', a: ['Was ist passiert?', 'Was ist geschehen?'], tag: 'de-perfsein' },
      { t: 'tr', nl: 'We zijn twee weken gebleven.', a: ['Wir sind zwei Wochen geblieben.'], tag: 'de-perfsein' },
      { t: 'order', s: 'Letztes Jahr sind wir mit dem Auto nach Österreich gefahren.', nl: 'Vorig jaar zijn we met de auto naar Oostenrijk gegaan.', tag: 'de-perfsein' },
      { t: 'match', p: [['gefahren', 'gereden'], ['geflogen', 'gevlogen'], ['geblieben', 'gebleven'], ['gekommen', 'gekomen'], ['gewesen', 'geweest']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Grüße von der Ostsee', type: 'Ansichtkaart',
      p: [
        ['Liebe Oma, viele Grüße von der Insel Rügen! Wir sind am Samstag mit dem Zug angekommen. Die Reise hat sieben Stunden gedauert, aber es ist alles gut gegangen.', 'Lieve oma, veel groeten van het eiland Rügen! We zijn zaterdag met de trein aangekomen. De reis heeft zeven uur geduurd, maar alles is goed gegaan.'],
        ['Das Wetter ist herrlich. Gestern sind wir den ganzen Tag am Strand geblieben und ich bin im Meer geschwommen. Das Wasser war kalt!', 'Het weer is heerlijk. Gisteren zijn we de hele dag op het strand gebleven en ik heb in zee gezwommen. Het water was koud!'],
        ['Heute haben wir einen Ausflug gemacht und die weißen Felsen besichtigt. Morgen fahren wir mit dem Fahrrad. Bis bald! Deine Mila', 'Vandaag hebben we een uitstapje gemaakt en de witte rotsen bezichtigd. Morgen gaan we fietsen. Tot snel! Je Mila']
      ],
      gl: [['viele Grüße', 'veel groeten'], ['gedauert', 'geduurd'], ['herrlich', 'heerlijk'], ['geschwommen', 'gezwommen'], ['der Felsen', 'de rots']],
      q: [
        { t: 'mc', q: 'Wie lange hat die Reise gedauert?', o: ['Sieben Stunden', 'Sieben Tage', 'Zwei Stunden'] },
        { t: 'mc', q: 'Was hat Mila gestern gemacht?', o: ['Sie ist im Meer geschwommen.', 'Sie hat die Felsen besichtigt.', 'Sie ist Fahrrad gefahren.'] },
        { t: 'mc', q: 'Wie war das Wasser?', o: ['Kalt', 'Warm', 'Schmutzig'] }
      ]
    },
    say: [['Ich bin nach Österreich gefahren.', 'Ik ben naar Oostenrijk gegaan.'], ['Wir sind zwei Wochen geblieben.', 'We zijn twee weken gebleven.'], ['Wir haben die Altstadt besichtigt.', 'We hebben de oude binnenstad bezichtigd.'], ['Was ist passiert?', 'Wat is er gebeurd?']],
    task: { nl: 'Vertel in 4 of 5 zinnen over je laatste vakantie: waar ben je heen gegaan, hoe, wat heb je gedaan?', model: 'Letzten Sommer bin ich nach Österreich gefahren. Ich bin zwei Wochen geblieben. Ich bin viel gewandert und habe Wien besichtigt. Das Wetter war schön. Es war ein toller Urlaub.' },
    scenario: { nl: 'Je vertelt een Oostenrijkse kennis over je laatste reis.', role: 'You are Lena from Innsbruck. Ask the learner about their last holiday: where they went, how they travelled, where they stayed, and whether anything went wrong. React naturally. A2 German, use "du".', goal: 'Vertel over je vakantie in het Perfekt, met haben én sein.' }
  });

  /* ───────────────────────── A2 · 2 ───────────────────────── */
  U({
    id: 'de-a2-02', level: 'A2', icon: '🧒', title: 'Als ich ein Kind war', nl: 'Vertellen over vroeger',
    goals: ['Over je jeugd vertellen', 'konnte, musste, wollte, durfte gebruiken', 'Kiezen tussen als en wenn', 'Zeggen wat je (niet) mocht'],
    vocab: [
      ['die Kindheit', 'de kindertijd'], ['früher', 'vroeger'], ['damals', 'toen (destijds)'], ['als Kind', 'als kind'], ['die Schule', 'de school'], ['die Klasse', 'de klas'], ['die Hausaufgaben', 'het huiswerk'],
      ['das Dorf', 'het dorp'], ['auf dem Land', 'op het platteland'], ['der Spielplatz', 'de speeltuin'], ['das Spielzeug', 'het speelgoed'], ['die Großeltern', 'de grootouders'], ['streng', 'streng'], ['brav', 'braaf'],
      ['frech', 'brutaal / ondeugend'], ['dürfen', 'mogen'], ['erlauben', 'toestaan'], ['verboten', 'verboden'], ['jung', 'jong'], ['alt', 'oud'], ['sich erinnern', 'zich herinneren'], ['umziehen', 'verhuizen'],
      ['aufwachsen', 'opgroeien'], ['die Erinnerung', 'de herinnering'], ['lustig', 'grappig'], ['traurig', 'verdrietig'], ['Ich konnte nicht …', 'Ik kon niet …'], ['Ich musste …', 'Ik moest …']
    ],
    grammar: [
      { t: 'Modale werkwoorden in de verleden tijd', es: 'Modalverben im Präteritum',
        html: `<p>Modale werkwoorden gebruik je in het verleden bijna altijd in het <b>Präteritum</b> (niet in het Perfekt): <i>Ich <b>konnte</b> nicht kommen</i>, niet <s>ich habe nicht kommen gekonnt</s>.</p>
<p>Je maakt de vorm met de stam <b>zonder Umlaut</b> + <b>-te</b>: <i>können → k<b>o</b>nn<b>te</b>, müssen → m<b>u</b>ss<b>te</b>, dürfen → d<b>u</b>rf<b>te</b>, wollen → wollte, sollen → sollte</i>. Bij <i>ich</i> en <i>er/sie/es</i> is de vorm gelijk.</p>
<p><b>Uitzondering:</b> de Umlaut verdwijnt. <b>Waarom is dat belangrijk?</b> Mét Umlaut betekent het iets anders: <b>konnte</b> = <i>kon</i> (verleden), <b>könnte</b> = <i>zou kunnen</i> (beleefd of onwerkelijk). <i>Ich konnte helfen</i> (ik kon helpen) tegenover <i>Ich könnte helfen</i> (ik zou kunnen helpen).</p>
<p><b>Dürfen</b> = mogen (toestemming). Valse vriend: het Nederlandse <i>durven</i> is in het Duits <b>sich trauen</b> of <b>wagen</b>.</p>`,
        table: [['', 'können', 'müssen', 'dürfen', 'wollen'], ['ich', 'konnte', 'musste', 'durfte', 'wollte'], ['du', 'konntest', 'musstest', 'durftest', 'wolltest'], ['er / sie / es', 'konnte', 'musste', 'durfte', 'wollte'], ['wir', 'konnten', 'mussten', 'durften', 'wollten'], ['ihr', 'konntet', 'musstet', 'durftet', 'wolltet'], ['sie / Sie', 'konnten', 'mussten', 'durften', 'wollten']],
        sum: 'Ich konnte, ich musste, ich durfte, ich wollte. Ohne Umlaut!',
        ex: [['Als Kind durfte ich nicht lange fernsehen.', 'Als kind mocht ik niet lang tv kijken.'], ['Wir mussten jeden Tag Hausaufgaben machen.', 'We moesten elke dag huiswerk maken.'], ['Mit fünf konnte ich schon lesen.', 'Op mijn vijfde kon ik al lezen.']] },
      { t: 'als of wenn?', es: 'als oder wenn',
        html: `<p>Het Nederlandse <i>toen</i> is in het Duits <b>als</b>: één gebeurtenis of periode in het verleden. <i><b>Als</b> ich ein Kind war, wohnten wir auf dem Land.</i></p>
<p><b>Wenn</b> gebruik je voor iets wat <b>telkens</b> gebeurde (= steeds wanneer), en voor het heden en de toekomst: <i><b>Wenn</b> meine Oma kam, brachte sie immer Kuchen mit.</i></p>
<p>Na <i>als</i> en <i>wenn</i> begint een bijzin: het werkwoord gaat naar het <b>einde</b>. Staat de bijzin vooraan, dan begint de hoofdzin met het werkwoord: <i>Als ich klein <b>war</b>, <b>hatte</b> ich einen Hund.</i></p>
<p>Valse vriend: het Nederlandse <i>als</i> (voorwaarde) is in het Duits <b>wenn</b>; het Nederlandse <i>toen</i> is <b>als</b>.</p>`,
        table: [['Nederlands', 'Duits', 'voorbeeld'], ['toen (één keer / periode)', 'als', 'Als ich zehn war, sind wir umgezogen.'], ['(telkens) als / wanneer', 'wenn', 'Wenn es regnete, spielten wir drinnen.'], ['als (voorwaarde)', 'wenn', 'Wenn du Zeit hast, komm vorbei.']],
        ex: [['Als ich jung war, wollte ich Pilot werden.', 'Toen ik jong was, wilde ik piloot worden.'], ['Wenn wir Ferien hatten, fuhren wir immer ans Meer.', 'Als we vakantie hadden, gingen we altijd naar zee.']] }
    ],
    dialogue: {
      t: 'Bei Oma und Opa', place: 'Schwarzwald 🇩🇪',
      lines: [
        ['Mila', 'Opa, wie war das früher, als du ein Kind warst?', 'Opa, hoe was dat vroeger, toen je een kind was?'],
        ['Opa', 'Ganz anders! Wir wohnten in einem kleinen Dorf. Ich musste jeden Tag fünf Kilometer zur Schule laufen.', 'Heel anders! We woonden in een klein dorp. Ik moest elke dag vijf kilometer naar school lopen.'],
        ['Mila', 'Fünf Kilometer! Konntest du nicht mit dem Bus fahren?', 'Vijf kilometer! Kon je niet met de bus gaan?'],
        ['Opa', 'Nein, es gab keinen Bus. Und nach der Schule musste ich meinem Vater helfen.', 'Nee, er was geen bus. En na school moest ik mijn vader helpen.'],
        ['Mila', 'Durftest du auch spielen?', 'Mocht je ook spelen?'],
        ['Opa', 'Natürlich. Wenn die Arbeit fertig war, durften wir Fußball spielen. Aber wir mussten um sieben zu Hause sein.', 'Natuurlijk. Als het werk klaar was, mochten we voetballen. Maar we moesten om zeven uur thuis zijn.'],
        ['Mila', 'Und was wolltest du werden?', 'En wat wilde je worden?'],
        ['Opa', 'Ich wollte Lokführer werden. Aber als ich sechzehn war, habe ich deine Oma getroffen. Dann wollte ich nur noch hier bleiben.', 'Ik wilde machinist worden. Maar toen ik zestien was, heb ik je oma ontmoet. Toen wilde ik alleen nog maar hier blijven.']
      ],
      q: [
        { t: 'mc', q: 'Wie kam Opa zur Schule?', o: ['Zu Fuß', 'Mit dem Bus', 'Mit dem Fahrrad'] },
        { t: 'mc', q: 'Wann durften die Kinder Fußball spielen?', o: ['Wenn die Arbeit fertig war', 'Nie', 'Vor der Schule'] },
        { t: 'mc', q: 'Was wollte Opa werden?', o: ['Lokführer', 'Lehrer', 'Bauer'] }
      ]
    },
    culture: { t: 'Schultüte en het eerste schooljaar', html: `<p>Op de eerste schooldag krijgt elk Duits kind een <b>Schultüte</b>: een grote kartonnen puntzak vol snoep en schoolspullen. De <b>Einschulung</b> is een echt familiefeest.</p>
<p>Duitse basisscholen gingen lang alleen ’s ochtends; kinderen aten warm thuis. Steeds meer scholen zijn nu een <b>Ganztagsschule</b>.</p>
<p>👵 Het Duitse <b>brav</b> betekent <i>braaf, gehoorzaam</i>, niet <i>dapper</i> (dat is <i>mutig</i> of <i>tapfer</i>).</p>` },
    ex: [
      { t: 'cloze', s: 'Als Kind ___ ich nicht schwimmen.', a: ['konnte'], o: ['konnte', 'könnte', 'kann'], nl: 'Als kind kon ik niet zwemmen.', x: 'Uitzondering: in het Präteritum verdwijnt de Umlaut. Könnte (mét Umlaut) betekent «zou kunnen».', tag: 'de-praet-modal' },
      { t: 'cloze', s: 'Wir ___ um sieben zu Hause sein.', a: ['mussten'], o: ['mussten', 'müssten', 'musste'], nl: 'We moesten om zeven uur thuis zijn.', tag: 'de-praet-modal' },
      { t: 'cloze', s: 'Ich ___ Pilot werden.', a: ['wollte'], o: ['wollte', 'will', 'wolle'], nl: 'Ik wilde piloot worden.', tag: 'de-praet-modal' },
      { t: 'cloze', s: '___ du lange fernsehen?', a: ['Durftest'], o: ['Durftest', 'Dürftest', 'Durfte'], nl: 'Mocht je lang tv kijken?', tag: 'de-praet-modal' },
      { t: 'cloze', s: '___ ich ein Kind war, wohnten wir in Köln.', a: ['Als'], o: ['Als', 'Wenn', 'Wann'], nl: 'Toen ik een kind was, woonden we in Keulen.', x: 'Eén periode in het verleden = als.', tag: 'de-als' },
      { t: 'cloze', s: '___ meine Oma kam, brachte sie immer Kuchen mit.', a: ['Wenn'], o: ['Wenn', 'Als', 'Wann'], nl: 'Als mijn oma kwam, nam ze altijd taart mee.', x: 'Iets wat telkens gebeurde («immer») = wenn.', tag: 'de-als' },
      { t: 'cloze', s: 'Als ich zehn ___, sind wir umgezogen.', a: ['war'], o: ['war', 'bin', 'wäre'], nl: 'Toen ik tien was, zijn we verhuisd.', tag: 'de-als' },
      { t: 'mc', q: 'Welke zin heeft de juiste woordvolgorde?', o: ['Als ich klein war, hatte ich einen Hund.', 'Als ich klein war, ich hatte einen Hund.', 'Als ich war klein, hatte ich einen Hund.'], x: 'In de bijzin staat het werkwoord achteraan; daarna begint de hoofdzin met het werkwoord.', tag: 'de-als' },
      { t: 'mc', q: 'Wat betekent «Ich durfte nicht»?', o: ['Ik mocht niet.', 'Ik durfde niet.', 'Ik hoefde niet.'], x: 'Valse vriend: dürfen = mogen. Durven = sich trauen.', tag: 'de-praet-modal' },
      { t: 'mc', q: 'Wat betekent «brav»?', o: ['braaf', 'dapper', 'bruin'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik moest elke dag huiswerk maken.', a: ['Ich musste jeden Tag Hausaufgaben machen.', 'Ich musste jeden Tag meine Hausaufgaben machen.'], tag: 'de-praet-modal' },
      { t: 'tr', nl: 'Toen ik jong was, woonde ik in een dorp.', a: ['Als ich jung war, wohnte ich in einem Dorf.', 'Als ich jung war, habe ich in einem Dorf gewohnt.'], tag: 'de-als' },
      { t: 'tr', nl: 'Wij mochten niet buiten spelen.', a: ['Wir durften nicht draußen spielen.'], tag: 'de-praet-modal' },
      { t: 'order', s: 'Als Kind wollte ich immer Lehrerin werden.', nl: 'Als kind wilde ik altijd lerares worden.', tag: 'de-praet-modal' },
      { t: 'match', p: [['konnte', 'kon'], ['musste', 'moest'], ['durfte', 'mocht'], ['wollte', 'wilde'], ['hatte', 'had']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Meine Kindheit auf dem Land', type: 'Stukje uit een familieblog',
      p: [
        ['Ich bin in einem kleinen Dorf im Schwarzwald aufgewachsen. Unser Haus war alt, aber gemütlich. Als ich klein war, hatten wir Hühner, zwei Katzen und einen Hund.', 'Ik ben opgegroeid in een klein dorp in het Zwarte Woud. Ons huis was oud, maar gezellig. Toen ik klein was, hadden we kippen, twee katten en een hond.'],
        ['Meine Eltern waren streng. Ich durfte nicht viel fernsehen und musste immer zuerst die Hausaufgaben machen. Aber im Sommer konnten wir den ganzen Tag draußen spielen.', 'Mijn ouders waren streng. Ik mocht niet veel tv kijken en moest altijd eerst mijn huiswerk maken. Maar in de zomer konden we de hele dag buiten spelen.'],
        ['Als ich zwölf war, sind wir in die Stadt umgezogen. Am Anfang war ich traurig, denn ich wollte nicht weg. Heute erinnere ich mich gern an das Dorf.', 'Toen ik twaalf was, zijn we naar de stad verhuisd. In het begin was ik verdrietig, want ik wilde niet weg. Nu denk ik graag terug aan het dorp.']
      ],
      gl: [['die Hühner', 'de kippen'], ['zuerst', 'eerst'], ['draußen', 'buiten'], ['am Anfang', 'in het begin'], ['weg', 'weg']],
      q: [
        { t: 'mc', q: 'Wo ist die Autorin aufgewachsen?', o: ['In einem Dorf im Schwarzwald', 'In einer großen Stadt', 'Am Meer'] },
        { t: 'mc', q: 'Was musste sie immer zuerst machen?', o: ['Die Hausaufgaben', 'Den Hund füttern', 'Fernsehen'] },
        { t: 'mc', q: 'Was ist passiert, als sie zwölf war?', o: ['Die Familie ist umgezogen.', 'Sie hat einen Hund bekommen.', 'Sie ist in die Schule gekommen.'] }
      ]
    },
    say: [['Als Kind konnte ich nicht schwimmen.', 'Als kind kon ik niet zwemmen.'], ['Ich musste früh ins Bett gehen.', 'Ik moest vroeg naar bed.'], ['Als ich klein war, wohnten wir auf dem Land.', 'Toen ik klein was, woonden we op het platteland.'], ['Was wolltest du werden?', 'Wat wilde je worden?']],
    task: { nl: 'Vertel in 4 of 5 zinnen over je jeugd: waar woonde je, wat moest je, wat mocht je (niet) en wat wilde je worden?', model: 'Als ich ein Kind war, wohnten wir in Zwolle. Ich musste um acht Uhr ins Bett gehen. Ich durfte nicht viel fernsehen, aber ich konnte immer draußen spielen. Ich wollte Tierärztin werden.' },
    scenario: { nl: 'Je praat met een oudere buurman over vroeger.', role: 'You are Herr Maier, a kind 75-year-old neighbour from the Black Forest. Tell a little about your childhood and ask the learner about theirs: where they lived, what they had to do, what they were allowed to do, what they wanted to become. A2 German, use "Sie" at first and then offer "du".', goal: 'Vertel over je jeugd met konnte, musste, durfte en wollte.' }
  });

  /* ───────────────────────── A2 · 3 ───────────────────────── */
  U({
    id: 'de-a2-03', level: 'A2', icon: '🩺', title: 'Beim Arzt', nl: 'Bij de dokter',
    goals: ['Zeggen wat je mankeert', 'mir, dir, ihm en ihr gebruiken', 'Advies begrijpen met sollen en dürfen', 'Zeggen sinds wanneer met seit'],
    vocab: [
      ['der Arzt / die Ärztin', 'de arts'], ['die Praxis', 'de praktijk'], ['krank', 'ziek'], ['gesund', 'gezond'], ['der Kopf', 'het hoofd'], ['der Hals', 'de keel / de hals'], ['der Bauch', 'de buik'], ['der Rücken', 'de rug'],
      ['das Bein', 'het been'], ['der Arm', 'de arm'], ['der Zahn', 'de tand'], ['das Auge', 'het oog'], ['das Ohr', 'het oor'], ['die Schmerzen', 'de pijn'], ['Kopfschmerzen', 'hoofdpijn'], ['das Fieber', 'de koorts'],
      ['der Husten', 'de hoest'], ['der Schnupfen', 'de verkoudheid (neus)'], ['die Erkältung', 'de verkoudheid'], ['wehtun', 'pijn doen'], ['das Medikament', 'het medicijn'], ['die Tablette', 'de tablet / de pil'],
      ['das Rezept', 'het recept'], ['Was fehlt Ihnen?', 'Wat scheelt u?'], ['Mir ist schlecht.', 'Ik ben misselijk.'], ['Gute Besserung!', 'Beterschap!'], ['sich ausruhen', 'uitrusten'], ['seit', 'sinds / al']
    ],
    grammar: [
      { t: 'mir, dir, ihm, ihr: de derde naamval van personen', es: 'Personalpronomen im Dativ',
        html: `<p>In het Nederlands zeg je <i>mijn hoofd doet pijn</i>. Het Duits zegt: <i>Der Kopf tut <b>mir</b> weh</i>, letterlijk «het hoofd doet <b>aan mij</b> pijn». De persoon staat in de <b>derde naamval</b> (Dativ): <b>mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen</b>.</p>
<p>Dezelfde vormen gebruik je bij gevoelens en toestanden: <i><b>Mir</b> ist kalt</i> (ik heb het koud), <i><b>Mir</b> ist schlecht</i> (ik ben misselijk), <i>Wie geht es <b>dir</b>?</i></p>
<p><b>Uitzondering:</b> zeg niet <s>Ich bin kalt</s> of <s>Ich bin schlecht</s>. <b>Waarom?</b> Met <i>ich bin</i> beschrijf je wat je <i>bent</i> (een koud of slecht mens); een gevoel dat je overkomt, staat in de derde naamval: het is «aan mij» koud.</p>
<p><b>Helfen</b> en <b>wehtun</b> krijgen altijd de derde naamval: <i>Der Arzt hilft <b>mir</b>.</i></p>`,
        table: [['1e naamval', '4e naamval', '3e naamval'], ['ich', 'mich', 'mir'], ['du', 'dich', 'dir'], ['er', 'ihn', 'ihm'], ['sie', 'sie', 'ihr'], ['wir', 'uns', 'uns'], ['ihr', 'euch', 'euch'], ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen']],
        sum: 'Der Kopf tut mir weh. Wie geht es dir? Der Arzt hilft ihm.',
        ex: [['Was tut Ihnen weh? — Der Rücken tut mir weh.', 'Wat doet er pijn? — Mijn rug doet pijn.'], ['Mir ist kalt. Kannst du mir eine Decke geben?', 'Ik heb het koud. Kun je me een deken geven?'], ['Die Tabletten helfen ihr nicht.', 'De tabletten helpen haar niet.']] },
      { t: 'sollen, dürfen en seit', es: 'sollen, dürfen und seit',
        html: `<p><b>Sollen</b> gebruik je voor het advies of de opdracht van iemand anders: <i>Der Arzt sagt, ich <b>soll</b> viel trinken.</i> <b>Dürfen</b> is mogen; <b>nicht dürfen</b> is <i>niet mogen</i>: <i>Sie <b>dürfen</b> nicht rauchen.</i></p>
<p><b>Let op:</b> <b>nicht müssen</b> betekent <i>niet hoeven</i>, niet <i>niet mogen</i>! <i>Du musst nicht kommen</i> = je hoeft niet te komen.</p>
<p><b>Seit</b> + derde naamval betekent <i>sinds / al</i>. Het Duits gebruikt dan de <b>tegenwoordige tijd</b>, net als het Nederlands: <i>Ich <b>habe seit</b> drei Tagen Fieber</i> (ik heb al drie dagen koorts).</p>
<p><b>Uitzondering:</b> in de derde naamval <b>meervoud</b> krijgt ook het zelfstandig naamwoord een <b>-n</b>: <i>drei Tage → seit drei Tage<b>n</b></i>. <b>Waarom?</b> Het is een oude naamvalsuitgang die alleen in de Dativ meervoud is overgebleven; hij vervalt als het woord al op -n of -s eindigt (<i>seit zwei Wochen, mit den Autos</i>).</p>`,
        table: [['Duits', 'Nederlands'], ['Ich soll im Bett bleiben.', 'Ik moet (van de dokter) in bed blijven.'], ['Sie dürfen nicht arbeiten.', 'U mag niet werken.'], ['Du musst nicht kommen.', 'Je hoeft niet te komen.'], ['seit einem Tag / seit drei Tagen', 'sinds een dag / al drie dagen'], ['seit einer Woche', 'sinds een week']],
        ex: [['Seit wann haben Sie Husten? — Seit einer Woche.', 'Sinds wanneer hoest u? — Sinds een week.'], ['Sie sollen diese Tabletten dreimal am Tag nehmen.', 'U moet deze tabletten drie keer per dag innemen.']] }
    ],
    dialogue: {
      t: 'In der Praxis', place: 'Stuttgart 🇩🇪',
      lines: [
        ['Ärztin', 'Guten Tag, Herr de Vries. Was fehlt Ihnen?', 'Goedendag, meneer De Vries. Wat scheelt u?'],
        ['Daan', 'Guten Tag. Mir geht es nicht gut. Ich habe Halsschmerzen und Husten.', 'Goedendag. Het gaat niet goed met me. Ik heb keelpijn en ik hoest.'],
        ['Ärztin', 'Seit wann haben Sie das?', 'Sinds wanneer hebt u dat?'],
        ['Daan', 'Seit drei Tagen. Und seit gestern tut mir auch der Kopf weh.', 'Al drie dagen. En sinds gisteren heb ik ook hoofdpijn.'],
        ['Ärztin', 'Haben Sie Fieber?', 'Hebt u koorts?'],
        ['Daan', 'Ja, heute Morgen hatte ich 38,5.', 'Ja, vanochtend had ik 38,5.'],
        ['Ärztin', 'Das ist eine starke Erkältung. Sie sollen viel trinken und sich ausruhen. Ich gebe Ihnen ein Rezept für Tabletten.', 'Dat is een flinke verkoudheid. U moet veel drinken en uitrusten. Ik geef u een recept voor tabletten.'],
        ['Daan', 'Darf ich morgen arbeiten?', 'Mag ik morgen werken?'],
        ['Ärztin', 'Nein, Sie dürfen diese Woche nicht arbeiten. Ich schreibe Sie krank. Gute Besserung!', 'Nee, u mag deze week niet werken. Ik schrijf u een ziekmelding. Beterschap!']
      ],
      q: [
        { t: 'mc', q: 'Was fehlt Daan?', o: ['Er hat Halsschmerzen, Husten und Fieber.', 'Er hat Bauchschmerzen.', 'Sein Rücken tut weh.'] },
        { t: 'mc', q: 'Seit wann ist er krank?', o: ['Seit drei Tagen', 'Seit einer Woche', 'Seit gestern'] },
        { t: 'mc', q: 'Was soll Daan machen?', o: ['Viel trinken und sich ausruhen', 'Sport machen', 'Morgen arbeiten'] }
      ]
    },
    culture: { t: 'De Krankschreibung en de apotheek', html: `<p>Wie in Duitsland ziek is, heeft meestal vanaf de derde dag een <b>Krankschreibung</b> (ziekmelding van de arts) nodig voor de werkgever. Je gaat dus eerder naar de huisarts dan in Nederland.</p>
<p>Medicijnen koop je alleen in de <b>Apotheke</b> (herkenbaar aan de rode A), niet bij de drogist. Ook paracetamol krijg je daar, niet in de supermarkt.</p>
<p>🤧 Als iemand niest, zeg je <b>Gesundheit!</b> Valse vriend: <b>das Rezept</b> is zowel een doktersrecept als een kookrecept, maar een <i>Rezension</i> is een recensie.</p>` },
    ex: [
      { t: 'cloze', s: 'Der Kopf tut ___ weh.', a: ['mir'], o: ['mir', 'mich', 'ich'], nl: 'Ik heb hoofdpijn.', tag: 'de-datpron' },
      { t: 'cloze', s: 'Wie geht es ___?', a: ['dir'], o: ['dir', 'dich', 'du'], nl: 'Hoe gaat het met je?', tag: 'de-datpron' },
      { t: 'cloze', s: 'Der Arzt hilft ___. (hij)', a: ['ihm'], o: ['ihm', 'ihn', 'er'], nl: 'De dokter helpt hem.', x: 'Helfen krijgt altijd de derde naamval: ihm, niet ihn.', tag: 'de-datpron' },
      { t: 'cloze', s: 'Die Tabletten helfen ___ nicht. (zij, enkelvoud)', a: ['ihr'], o: ['ihr', 'sie', 'ihnen'], nl: 'De tabletten helpen haar niet.', tag: 'de-datpron' },
      { t: 'cloze', s: '___ ist kalt.', a: ['Mir'], o: ['Mir', 'Ich', 'Mich'], nl: 'Ik heb het koud.', x: 'Uitzondering: niet «Ich bin kalt». Een gevoel dat je overkomt staat in de derde naamval.', tag: 'de-datpron' },
      { t: 'cloze', s: 'Ich habe seit drei ___ Fieber.', a: ['Tagen'], o: ['Tagen', 'Tage', 'Tag'], nl: 'Ik heb al drie dagen koorts.', x: 'Uitzondering: in de derde naamval meervoud krijgt het zelfstandig naamwoord een extra -n: Tage → Tagen.', tag: 'de-seit' },
      { t: 'cloze', s: 'Seit ___ Woche habe ich Husten.', a: ['einer'], o: ['einer', 'eine', 'einem'], nl: 'Sinds een week hoest ik.', tag: 'de-seit' },
      { t: 'cloze', s: 'Der Arzt sagt, ich ___ viel trinken.', a: ['soll'], o: ['soll', 'darf nicht', 'will'], nl: 'De dokter zegt dat ik veel moet drinken.', tag: 'de-sollen' },
      { t: 'mc', q: 'Wat betekent «Du musst nicht kommen»?', o: ['Je hoeft niet te komen.', 'Je mag niet komen.', 'Je kunt niet komen.'], x: 'Let op: nicht müssen = niet hoeven. Niet mogen = nicht dürfen.', tag: 'de-sollen' },
      { t: 'mc', q: 'Iemand niest. Wat zeg je?', o: ['Gesundheit!', 'Gute Besserung!', 'Guten Appetit!'], tag: 'de-vok' },
      { t: 'tr', nl: 'Mijn rug doet pijn.', a: ['Der Rücken tut mir weh.', 'Mein Rücken tut weh.', 'Mir tut der Rücken weh.', 'Ich habe Rückenschmerzen.'], tag: 'de-datpron' },
      { t: 'tr', nl: 'U mag niet roken.', a: ['Sie dürfen nicht rauchen.'], tag: 'de-sollen' },
      { t: 'tr', nl: 'Ik ben misselijk.', a: ['Mir ist schlecht.', 'Mir ist übel.'], tag: 'de-datpron' },
      { t: 'order', s: 'Seit gestern tut mir der Hals weh.', nl: 'Sinds gisteren heb ik keelpijn.', tag: 'de-seit' },
      { t: 'match', p: [['der Kopf', 'het hoofd'], ['der Bauch', 'de buik'], ['der Rücken', 'de rug'], ['das Bein', 'het been'], ['der Zahn', 'de tand']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Krank im Bett', type: 'Appjes',
      p: [
        ['Hallo Tim, ich kann heute leider nicht zum Training kommen. Ich bin seit Montag krank. Mir tut alles weh: der Kopf, der Hals und der Rücken.', 'Hoi Tim, ik kan vandaag helaas niet naar de training komen. Ik ben sinds maandag ziek. Alles doet pijn: mijn hoofd, mijn keel en mijn rug.'],
        ['Gestern war ich beim Arzt. Er hat gesagt, ich habe eine Grippe. Ich soll im Bett bleiben und viel Tee trinken. Sport darf ich diese Woche nicht machen.', 'Gisteren was ik bij de dokter. Hij zei dat ik griep heb. Ik moet in bed blijven en veel thee drinken. Sporten mag ik deze week niet.'],
        ['Kannst du mir bitte die Hausaufgaben schicken? Und sag dem Trainer, es tut mir leid. Nächste Woche bin ich hoffentlich wieder gesund!', 'Kun je me alsjeblieft het huiswerk sturen? En zeg tegen de trainer dat het me spijt. Volgende week ben ik hopelijk weer gezond!']
      ],
      gl: [['die Grippe', 'de griep'], ['schicken', 'sturen'], ['es tut mir leid', 'het spijt me'], ['hoffentlich', 'hopelijk'], ['wieder', 'weer']],
      q: [
        { t: 'mc', q: 'Seit wann ist die Person krank?', o: ['Seit Montag', 'Seit gestern', 'Seit einer Woche'] },
        { t: 'mc', q: 'Was soll sie machen?', o: ['Im Bett bleiben und Tee trinken', 'Zum Training gehen', 'Tabletten kaufen'] },
        { t: 'mc', q: 'Was soll Tim schicken?', o: ['Die Hausaufgaben', 'Tee', 'Ein Rezept'] }
      ]
    },
    say: [['Der Kopf tut mir weh.', 'Ik heb hoofdpijn.'], ['Ich habe seit drei Tagen Fieber.', 'Ik heb al drie dagen koorts.'], ['Mir ist schlecht.', 'Ik ben misselijk.'], ['Darf ich morgen arbeiten?', 'Mag ik morgen werken?']],
    task: { nl: 'Je bent ziek en schrijft een bericht aan je baas: wat heb je, sinds wanneer, en wat zei de dokter? (4 zinnen)', model: 'Guten Morgen, Frau Becker. Ich kann heute leider nicht kommen. Ich habe seit gestern Fieber und der Hals tut mir weh. Der Arzt sagt, ich soll drei Tage zu Hause bleiben.' },
    scenario: { nl: 'Je bent ziek geworden in Duitsland en gaat naar de huisarts.', role: 'You are Dr. Weber, a calm general practitioner in Stuttgart. Ask what is wrong (Was fehlt Ihnen?), since when, whether there is fever, then give advice with "Sie sollen …" and "Sie dürfen nicht …". A2 German, use "Sie".', goal: 'Beschrijf je klachten, zeg sinds wanneer en vraag wat je wel en niet mag.' }
  });

  /* ───────────────────────── A2 · 4 ───────────────────────── */
  U({
    id: 'de-a2-04', level: 'A2', icon: '🌦️', title: 'Wetter und Pläne', nl: 'Het weer en je plannen',
    goals: ['Over het weer en de seizoenen praten', 'Een reden geven met weil en denn', 'Het werkwoord achteraan zetten in een bijzin', 'Over de toekomst praten'],
    vocab: [
      ['die Sonne', 'de zon'], ['der Regen', 'de regen'], ['der Schnee', 'de sneeuw'], ['der Wind', 'de wind'], ['die Wolke', 'de wolk'], ['das Gewitter', 'het onweer'], ['Es regnet.', 'Het regent.'], ['Es schneit.', 'Het sneeuwt.'],
      ['Die Sonne scheint.', 'De zon schijnt.'], ['warm', 'warm'], ['kalt', 'koud'], ['heiß', 'heet'], ['kühl', 'koel'], ['nass', 'nat'], ['trocken', 'droog'], ['der Frühling', 'de lente'], ['der Sommer', 'de zomer'],
      ['der Herbst', 'de herfst'], ['der Winter', 'de winter'], ['die Temperatur', 'de temperatuur'], ['der Grad', 'de graad'], ['der Regenschirm', 'de paraplu'], ['die Wettervorhersage', 'het weerbericht'],
      ['weil', 'omdat'], ['denn', 'want'], ['deshalb', 'daarom'], ['wahrscheinlich', 'waarschijnlijk'], ['vielleicht', 'misschien']
    ],
    grammar: [
      { t: 'weil: het werkwoord gaat naar het einde', es: 'Nebensätze mit weil',
        html: `<p>Na <b>weil</b> (omdat) begint een <b>bijzin</b>: het vervoegde werkwoord gaat naar het <b>einde</b>. <i>Ich bleibe zu Hause, <b>weil</b> es <b>regnet</b>.</i> Dat doet het Nederlands ook: <i>omdat het regent</i>.</p>
<p>Verschil met het Nederlands: bij twee werkwoorden staat het <b>vervoegde werkwoord helemaal achteraan</b>: <i>…, weil ich arbeiten <b>muss</b></i> (omdat ik <i>moet werken</i>); <i>…, weil er gekommen <b>ist</b></i> (omdat hij <i>is gekomen</i>). Vóór <i>weil</i> staat altijd een <b>komma</b>.</p>
<p><b>Uitzondering:</b> na <b>denn</b> (want) verandert de woordvolgorde <b>niet</b>: <i>Ich bleibe zu Hause, <b>denn</b> es <b>regnet</b>.</i> <b>Waarom?</b> <i>Denn</i> verbindt twee hoofdzinnen, net als <i>und, aber</i> en <i>oder</i>; het telt niet mee als zinsdeel. <i>Weil</i> maakt de zin ondergeschikt.</p>
<p>Na <b>deshalb</b> (daarom) volgt meteen het werkwoord (inversie): <i>Es regnet, <b>deshalb bleibe</b> ich zu Hause.</i></p>`,
        table: [['voegwoord', 'woordvolgorde', 'voorbeeld'], ['weil', 'werkwoord achteraan', '…, weil ich müde bin.'], ['denn', 'gewoon (werkwoord op 2)', '…, denn ich bin müde.'], ['deshalb', 'werkwoord direct erna', 'Ich bin müde, deshalb schlafe ich.'], ['weil + modaal', 'vervoegd ww. achteraan', '…, weil ich arbeiten muss.']],
        sum: 'Ich bleibe zu Hause, weil es regnet. Weil: Verb am Ende.',
        ex: [['Wir fahren nicht ans Meer, weil das Wetter schlecht ist.', 'We gaan niet naar zee, omdat het weer slecht is.'], ['Ich nehme einen Regenschirm mit, denn es regnet.', 'Ik neem een paraplu mee, want het regent.'], ['Warum kommst du nicht? — Weil ich arbeiten muss.', 'Waarom kom je niet? — Omdat ik moet werken.']] },
      { t: 'Over de toekomst praten', es: 'Das Futur',
        html: `<p>Voor plannen gebruikt het Duits meestal gewoon de <b>tegenwoordige tijd</b> met een tijdsbepaling: <i>Morgen <b>fahre</b> ich nach Köln.</i></p>
<p>Voor voorspellingen en vermoedens bestaat het <b>Futur</b>: <b>werden</b> + heel werkwoord achteraan: <i>Morgen <b>wird</b> es <b>regnen</b>.</i></p>
<p><b>Let op (valse vriend):</b> het Nederlandse <i>ik zal</i> is <b>ich werde</b>, niet <s>ich soll</s> en niet <s>ich will</s>. <b>Ich will</b> betekent <i>ik wil</i>! En <i>ik ga morgen werken</i> is niet <s>ich gehe arbeiten</s> als plan, maar <i>ich arbeite morgen</i> of <i>ich werde morgen arbeiten</i>.</p>
<p><b>Uitzondering:</b> <i>werden</i> is onregelmatig bij du en er: <b>du wirst, er wird</b> (niet <s>du werdest</s>, <s>er werdet</s>). <b>Waarom?</b> Het is een sterk werkwoord (e → i) dat door veel gebruik bovendien de <i>d</i> van de stam is kwijtgeraakt.</p>`,
        table: [['', 'werden', 'voorbeeld'], ['ich', 'werde', 'Ich werde dich anrufen.'], ['du', 'wirst', 'Du wirst es sehen.'], ['er / sie / es', 'wird', 'Es wird schneien.'], ['wir', 'werden', 'Wir werden sehen.'], ['ihr', 'werdet', 'Ihr werdet nass.'], ['sie / Sie', 'werden', 'Sie werden kommen.']],
        ex: [['Am Wochenende wird es warm.', 'In het weekend wordt het warm.'], ['Ich glaube, es wird morgen regnen.', 'Ik denk dat het morgen gaat regenen.'], ['Nächste Woche fliege ich nach Wien.', 'Volgende week vlieg ik naar Wenen.']] }
    ],
    dialogue: {
      t: 'Was machen wir am Wochenende?', place: 'Kiel 🇩🇪',
      lines: [
        ['Lea', 'Hast du die Wettervorhersage gesehen? Am Samstag wird es regnen.', 'Heb je het weerbericht gezien? Zaterdag gaat het regenen.'],
        ['Jonas', 'Schon wieder? Schade, ich wollte ans Meer fahren, weil ich schwimmen möchte.', 'Alweer? Jammer, ik wilde naar zee gaan, omdat ik graag wil zwemmen.'],
        ['Lea', 'Bei zwölf Grad? Du bist verrückt! Das Wasser ist viel zu kalt.', 'Bij twaalf graden? Je bent gek! Het water is veel te koud.'],
        ['Jonas', 'Dann gehen wir ins Museum, denn dort ist es trocken.', 'Dan gaan we naar het museum, want daar is het droog.'],
        ['Lea', 'Gute Idee. Und am Sonntag? Da wird die Sonne scheinen.', 'Goed idee. En zondag? Dan gaat de zon schijnen.'],
        ['Jonas', 'Wirklich? Dann machen wir am Sonntag eine Radtour.', 'Echt? Dan maken we zondag een fietstocht.'],
        ['Lea', 'Gern, aber nicht zu früh, weil ich am Samstagabend ausgehen will.', 'Graag, maar niet te vroeg, omdat ik zaterdagavond uit wil gaan.'],
        ['Jonas', 'Okay, wir fahren um elf los. Nimm trotzdem eine Jacke mit. Hier im Norden weiß man nie!', 'Oké, we vertrekken om elf uur. Neem toch een jas mee. Hier in het noorden weet je het nooit!']
      ],
      q: [
        { t: 'mc', q: 'Wie wird das Wetter am Samstag?', o: ['Es wird regnen.', 'Die Sonne wird scheinen.', 'Es wird schneien.'] },
        { t: 'mc', q: 'Warum gehen sie ins Museum?', o: ['Weil es dort trocken ist.', 'Weil es billig ist.', 'Weil Lea Kunst liebt.'] },
        { t: 'mc', q: 'Was machen sie am Sonntag?', o: ['Eine Radtour', 'Sie fahren ans Meer.', 'Sie bleiben zu Hause.'] }
      ]
    },
    culture: { t: 'Er bestaat geen slecht weer', html: `<p>Een geliefd Duits gezegde: <b>«Es gibt kein schlechtes Wetter, nur falsche Kleidung.»</b> Er bestaat geen slecht weer, alleen verkeerde kleding. Duitsers gaan ook bij regen wandelen, met een <i>Regenjacke</i> en stevige schoenen.</p>
<p>In het noorden waait het bijna altijd; daar heet stevige wind met regen gewoon <b>Schietwetter</b>. In het zuiden kan het in de zomer flink onweren, en in de Alpen ligt in de winter veel sneeuw.</p>
<p>🌡️ Temperaturen zeg je zo: <i>Es sind zwölf Grad</i> of <i>Es ist zwölf Grad warm</i>. Onder nul: <i>minus fünf Grad</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich bleibe zu Hause, weil es ___.', a: ['regnet'], o: ['regnet', 'regnen', 'regnete es'], nl: 'Ik blijf thuis, omdat het regent.', tag: 'de-weil' },
      { t: 'cloze', s: 'Er kommt nicht, weil er krank ___.', a: ['ist'], o: ['ist', 'sein', 'bin'], nl: 'Hij komt niet, omdat hij ziek is.', tag: 'de-weil' },
      { t: 'cloze', s: 'Ich kann nicht kommen, weil ich arbeiten ___.', a: ['muss'], o: ['muss', 'müssen', 'gemusst'], nl: 'Ik kan niet komen, omdat ik moet werken.', x: 'Anders dan in het Nederlands staat het vervoegde werkwoord helemaal achteraan: arbeiten muss.', tag: 'de-weil' },
      { t: 'cloze', s: 'Wir bleiben hier, ___ es regnet. (werkwoord blijft op plaats 2)', a: ['denn'], o: ['denn', 'weil', 'deshalb'], nl: 'We blijven hier, want het regent.', x: 'Uitzondering: na denn verandert de woordvolgorde niet, omdat denn twee hoofdzinnen verbindt.', tag: 'de-weil' },
      { t: 'cloze', s: 'Morgen ___ es regnen.', a: ['wird'], o: ['wird', 'will', 'soll'], nl: 'Morgen gaat het regenen.', x: 'Voorspelling = werden. Will betekent «wil»!', tag: 'de-futur' },
      { t: 'cloze', s: 'Du ___ nass, wenn du keinen Regenschirm mitnimmst.', a: ['wirst'], o: ['wirst', 'werdest', 'wird'], nl: 'Je wordt nat als je geen paraplu meeneemt.', x: 'Uitzondering: werden is onregelmatig: du wirst, er wird.', tag: 'de-futur' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Es regnet, deshalb bleibe ich zu Hause.', 'Es regnet, deshalb ich bleibe zu Hause.', 'Es regnet, deshalb ich zu Hause bleibe.'], x: 'Na deshalb volgt meteen het werkwoord.', tag: 'de-weil' },
      { t: 'mc', q: 'Wat betekent «Ich will morgen kommen»?', o: ['Ik wil morgen komen.', 'Ik zal morgen komen.', 'Ik moet morgen komen.'], x: 'Valse vriend: ich will = ik wil. Ik zal = ich werde.', tag: 'de-futur' },
      { t: 'mc', q: 'Welke zin heeft de juiste woordvolgorde?', o: ['…, weil er gestern gekommen ist.', '…, weil er ist gestern gekommen.', '…, weil er gestern ist gekommen.'], tag: 'de-weil' },
      { t: 'mc', q: 'Welk seizoen is «der Herbst»?', o: ['de herfst', 'de lente', 'de oogst'], tag: 'de-vok' },
      { t: 'tr', nl: 'Het regent en het is koud.', a: ['Es regnet und es ist kalt.'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik neem een jas mee, omdat het koud is.', a: ['Ich nehme eine Jacke mit, weil es kalt ist.'], tag: 'de-weil' },
      { t: 'tr', nl: 'Morgen schijnt de zon.', a: ['Morgen scheint die Sonne.', 'Morgen wird die Sonne scheinen.'], tag: 'de-futur' },
      { t: 'order', s: 'Wir fahren nicht ans Meer, weil das Wetter schlecht ist.', nl: 'We gaan niet naar zee, omdat het weer slecht is.', tag: 'de-weil' },
      { t: 'match', p: [['der Frühling', 'de lente'], ['der Sommer', 'de zomer'], ['der Herbst', 'de herfst'], ['der Winter', 'de winter'], ['das Gewitter', 'het onweer']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Das Wetter am Wochenende', type: 'Weerbericht',
      p: [
        ['Am Freitag bleibt es im Norden kühl und nass. Es regnet den ganzen Tag, und an der Küste gibt es starken Wind. Die Temperaturen liegen bei zwölf Grad.', 'Vrijdag blijft het in het noorden koel en nat. Het regent de hele dag, en aan de kust staat er harde wind. De temperaturen liggen rond de twaalf graden.'],
        ['Am Samstag wird es besser, weil ein Hoch aus dem Westen kommt. Im Süden scheint schon am Morgen die Sonne, im Norden gibt es noch Wolken.', 'Zaterdag wordt het beter, omdat er een hogedrukgebied uit het westen komt. In het zuiden schijnt ’s ochtends al de zon, in het noorden zijn er nog wolken.'],
        ['Am Sonntag wird es überall sonnig und warm, mit Temperaturen bis 24 Grad. Am Abend sind in den Bergen Gewitter möglich. Vergessen Sie deshalb den Regenschirm nicht!', 'Zondag wordt het overal zonnig en warm, met temperaturen tot 24 graden. ’s Avonds is in de bergen onweer mogelijk. Vergeet daarom de paraplu niet!']
      ],
      gl: [['die Küste', 'de kust'], ['das Hoch', 'het hogedrukgebied'], ['überall', 'overal'], ['sonnig', 'zonnig'], ['möglich', 'mogelijk']],
      q: [
        { t: 'mc', q: 'Wie ist das Wetter am Freitag im Norden?', o: ['Kühl und nass', 'Sonnig und warm', 'Es schneit.'] },
        { t: 'mc', q: 'Warum wird es am Samstag besser?', o: ['Weil ein Hoch aus dem Westen kommt.', 'Weil der Wind stärker wird.', 'Weil es Sommer ist.'] },
        { t: 'mc', q: 'Was ist am Sonntagabend in den Bergen möglich?', o: ['Gewitter', 'Schnee', 'Starker Wind'] }
      ]
    },
    say: [['Wie ist das Wetter heute?', 'Wat voor weer is het vandaag?'], ['Es regnet und es ist kalt.', 'Het regent en het is koud.'], ['Ich bleibe zu Hause, weil es regnet.', 'Ik blijf thuis, omdat het regent.'], ['Morgen wird es warm.', 'Morgen wordt het warm.']],
    task: { nl: 'Beschrijf het weer van vandaag en vertel wat je daarom (niet) gaat doen. Gebruik weil of denn (4 zinnen).', model: 'Heute ist das Wetter schlecht. Es regnet und es ist nur zehn Grad. Ich gehe nicht spazieren, weil ich nicht nass werden will. Morgen wird es besser, dann fahre ich Fahrrad.' },
    scenario: { nl: 'Je plant een dagje uit met een Duitse vriendin, maar het weer werkt niet mee.', role: 'You are Lea from Kiel. Plan the weekend with the learner. The forecast: rain on Saturday, sun on Sunday. Suggest activities and ask for reasons (Warum?). A2 German, use "du".', goal: 'Maak een plan voor zaterdag en zondag en geef redenen met weil.' }
  });

  /* ───────────────────────── A2 · 5 ───────────────────────── */
  U({
    id: 'de-a2-05', level: 'A2', icon: '🚆', title: 'Unterwegs', nl: 'Onderweg: vervoer en richting',
    goals: ['Een kaartje kopen en de weg vinden met het openbaar vervoer', 'Kiezen tussen wo? en wohin?', 'mit, zu, nach, bei, aus, von gebruiken', 'in die Stadt of in der Stadt'],
    vocab: [
      ['der Zug', 'de trein'], ['die Bahn', 'de trein / het spoor'], ['die U-Bahn', 'de metro'], ['die Straßenbahn', 'de tram'], ['der Bus', 'de bus'], ['das Flugzeug', 'het vliegtuig'], ['das Auto', 'de auto'],
      ['die Fahrkarte', 'het kaartje'], ['das Gleis', 'het spoor (perron)'], ['der Bahnsteig', 'het perron'], ['die Abfahrt', 'het vertrek'], ['die Ankunft', 'de aankomst'], ['umsteigen', 'overstappen'], ['einsteigen', 'instappen'],
      ['aussteigen', 'uitstappen'], ['die Verspätung', 'de vertraging'], ['pünktlich', 'op tijd'], ['hin und zurück', 'heen en terug'], ['einfach', 'enkele reis / eenvoudig'], ['der Fahrplan', 'de dienstregeling'],
      ['der Platz', 'de plaats'], ['die Autobahn', 'de snelweg'], ['der Stau', 'de file'], ['tanken', 'tanken'], ['zu Fuß', 'te voet'], ['Wohin fährst du?', 'Waar ga je heen?'], ['legen', 'leggen'], ['stellen', 'zetten']
    ],
    grammar: [
      { t: 'Voorzetsels met altijd de derde naamval', es: 'Präpositionen mit Dativ',
        html: `<p>Na deze voorzetsels volgt <b>altijd</b> de derde naamval: <b>aus, bei, mit, nach, seit, von, zu</b>. Ezelsbrug op de melodie van «Vader Jacob»: <i>aus – bei – mit – nach – seit – von – zu</i>.</p>
<p><i>Ich fahre <b>mit dem</b> Zug. Ich komme <b>aus der</b> Schweiz. Ich wohne <b>bei meinen</b> Eltern. Ich gehe <b>zum</b> Arzt (zu dem) / <b>zur</b> Schule (zu der).</i></p>
<p><b>Naar:</b> <b>nach</b> bij steden en landen zonder lidwoord (<i>nach Berlin, nach Österreich</i>) en <i>nach Hause</i>; <b>zu</b> bij personen en gebouwen (<i>zum Bahnhof, zu Lena</i>); <b>in</b> + vierde naamval bij landen mét lidwoord en als je ergens naar binnen gaat (<i>in die Schweiz, ins Kino</i>).</p>
<p><b>Uitzondering:</b> <i>die Schweiz, die Türkei, die Niederlande</i> (mv.) en <i>die USA</i> (mv.) hebben een lidwoord, dus <b>in die Schweiz</b>, niet <s>nach Schweiz</s>. <b>Waarom?</b> De meeste landnamen zijn onzijdig en lidwoordloos; deze paar zijn vrouwelijk of meervoud en houden hun lidwoord, zoals <i>de Verenigde Staten</i> in het Nederlands.</p>`,
        table: [['voorzetsel', 'betekenis', 'voorbeeld'], ['mit', 'met', 'mit dem Bus, mit der U-Bahn'], ['zu', 'naar (persoon, gebouw)', 'zum Bahnhof, zur Arbeit'], ['nach', 'naar (stad, land), na', 'nach Wien, nach dem Essen'], ['bei', 'bij', 'bei meiner Schwester, beim Arzt'], ['aus', 'uit', 'aus dem Haus, aus den Niederlanden'], ['von', 'van', 'vom Bahnhof, von meinem Freund']],
        sum: 'Aus, bei, mit, nach, seit, von, zu: immer mit Dativ.',
        ex: [['Ich fahre mit der Straßenbahn zur Arbeit.', 'Ik ga met de tram naar mijn werk.'], ['Der Zug nach München fährt von Gleis drei.', 'De trein naar München vertrekt van spoor drie.'], ['Wir fahren in die Schweiz.', 'We gaan naar Zwitserland.']] },
      { t: 'wo? of wohin? Voorzetsels met twee naamvallen', es: 'Wechselpräpositionen',
        html: `<p>Negen voorzetsels (<b>in, an, auf, über, unter, vor, hinter, neben, zwischen</b>) kunnen twee naamvallen krijgen. De vraag bepaalt welke:</p>
<p><b>Wo?</b> (waar, je blijft op één plek) → <b>derde naamval</b>: <i>Ich bin <b>in der</b> Stadt.</i><br><b>Wohin?</b> (waarheen, er is een richting of doel) → <b>vierde naamval</b>: <i>Ich fahre <b>in die</b> Stadt.</i></p>
<p>Daarbij horen werkwoordparen: <b>stellen / stehen</b>, <b>legen / liegen</b>, <b>setzen / sitzen</b>, <b>hängen / hängen</b>. Het eerste is de handeling (wohin? + 4e naamval), het tweede het resultaat (wo? + 3e naamval): <i>Ich <b>stelle</b> die Flasche auf <b>den</b> Tisch. Die Flasche <b>steht</b> auf <b>dem</b> Tisch.</i></p>
<p>Samentrekkingen: <i>in das → <b>ins</b>, an das → <b>ans</b>, in dem → <b>im</b>, an dem → <b>am</b></i>.</p>`,
        table: [['', 'wohin? (4e naamval)', 'wo? (3e naamval)'], ['der Park', 'Ich gehe in den Park.', 'Ich bin im Park.'], ['die Stadt', 'Ich fahre in die Stadt.', 'Ich bin in der Stadt.'], ['das Kino', 'Ich gehe ins Kino.', 'Ich bin im Kino.'], ['der Tisch', 'Ich lege das Buch auf den Tisch.', 'Das Buch liegt auf dem Tisch.']],
        ex: [['Stell bitte den Koffer neben die Tür.', 'Zet de koffer alsjeblieft naast de deur.'], ['Der Koffer steht neben der Tür.', 'De koffer staat naast de deur.'], ['Wir fahren ans Meer und bleiben eine Woche am Meer.', 'We gaan naar zee en blijven een week aan zee.']] }
    ],
    dialogue: {
      t: 'Am Fahrkartenschalter', place: 'Hamburg 🇩🇪',
      lines: [
        ['Sanne', 'Guten Tag. Eine Fahrkarte nach München, bitte.', 'Goedendag. Een kaartje naar München, alstublieft.'],
        ['Mann', 'Einfach oder hin und zurück?', 'Enkele reis of retour?'],
        ['Sanne', 'Hin und zurück. Wann fährt der nächste Zug?', 'Retour. Wanneer gaat de volgende trein?'],
        ['Mann', 'Um 10.28 Uhr von Gleis vierzehn. Sie müssen in Hannover umsteigen.', 'Om 10.28 uur van spoor veertien. U moet in Hannover overstappen.'],
        ['Sanne', 'Gibt es auch einen Zug ohne Umsteigen?', 'Is er ook een trein zonder overstap?'],
        ['Mann', 'Ja, um 11.01 Uhr. Der fährt direkt, aber er hat zwanzig Minuten Verspätung.', 'Ja, om 11.01 uur. Die gaat rechtstreeks, maar hij heeft twintig minuten vertraging.'],
        ['Sanne', 'Dann nehme ich den Zug um 10.28 Uhr. Was kostet die Fahrkarte?', 'Dan neem ik de trein van 10.28 uur. Wat kost het kaartje?'],
        ['Mann', '129 Euro. Möchten Sie einen Platz reservieren?', '129 euro. Wilt u een plaats reserveren?'],
        ['Sanne', 'Ja, bitte, am Fenster. Und wie komme ich zum Gleis vierzehn?', 'Ja, graag, bij het raam. En hoe kom ik bij spoor veertien?'],
        ['Mann', 'Gehen Sie hier die Treppe hinunter und dann nach links.', 'Gaat u hier de trap af en dan naar links.']
      ],
      q: [
        { t: 'mc', q: 'Wohin fährt Sanne?', o: ['Nach München', 'Nach Hannover', 'Nach Hamburg'] },
        { t: 'mc', q: 'Wo muss sie umsteigen?', o: ['In Hannover', 'In München', 'Sie muss nicht umsteigen.'] },
        { t: 'mc', q: 'Warum nimmt sie nicht den direkten Zug?', o: ['Er hat Verspätung.', 'Er ist zu teuer.', 'Er fährt erst am Abend.'] }
      ]
    },
    culture: { t: 'De Deutsche Bahn en de Autobahn', html: `<p>De <b>Deutsche Bahn</b> (DB) rijdt met de snelle <b>ICE</b> door het hele land. Grappen over <b>Verspätung</b> zijn een nationale sport: «pünktlich wie die Bahn» wordt alleen nog ironisch gezegd.</p>
<p>Met het <b>Deutschlandticket</b> reis je voor een vast bedrag per maand in al het regionale openbaar vervoer, van bus tot regionale trein (niet in de ICE).</p>
<p>🚗 Op veel stukken <b>Autobahn</b> geldt geen maximumsnelheid, alleen een adviessnelheid van 130 km/u. Links rijden zonder in te halen is verboden.</p>
<p>Valse vriend: <b>das Gleis</b> is het spoor waar de trein staat; op het bord lees je <i>Gleis 3</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich fahre mit ___ Zug.', a: ['dem'], o: ['dem', 'den', 'der'], nl: 'Ik ga met de trein.', x: 'Na mit altijd de derde naamval: der Zug → dem Zug.', tag: 'de-mit' },
      { t: 'cloze', s: 'Sie fährt mit ___ U-Bahn.', a: ['der'], o: ['der', 'die', 'dem'], nl: 'Ze gaat met de metro.', tag: 'de-mit' },
      { t: 'cloze', s: 'Ich gehe ___ Arzt.', a: ['zum'], o: ['zum', 'zur', 'nach'], nl: 'Ik ga naar de dokter.', x: 'Naar een persoon = zu; zu + dem = zum.', tag: 'de-mit' },
      { t: 'cloze', s: 'Wir fliegen ___ Wien.', a: ['nach'], o: ['nach', 'zu', 'in'], nl: 'We vliegen naar Wenen.', tag: 'de-mit' },
      { t: 'cloze', s: 'Wir fahren in ___ Schweiz.', a: ['die'], o: ['die', 'der', 'das'], nl: 'We gaan naar Zwitserland.', x: 'Uitzondering: die Schweiz heeft een lidwoord, dus in die Schweiz (wohin? → vierde naamval), niet nach Schweiz.', tag: 'de-wohin' },
      { t: 'cloze', s: 'Ich gehe in ___ Park.', a: ['den'], o: ['den', 'dem', 'der'], nl: 'Ik ga naar het park.', x: 'Wohin? → vierde naamval: der Park → in den Park.', tag: 'de-wohin' },
      { t: 'cloze', s: 'Ich bin ___ Park.', a: ['im'], o: ['im', 'in den', 'ins'], nl: 'Ik ben in het park.', x: 'Wo? → derde naamval: in dem = im.', tag: 'de-wohin' },
      { t: 'cloze', s: 'Heute Abend gehen wir ___ Kino.', a: ['ins'], o: ['ins', 'im', 'in'], nl: 'Vanavond gaan we naar de bioscoop.', tag: 'de-wohin' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ich stelle die Flasche auf den Tisch.', 'Ich stelle die Flasche auf dem Tisch.', 'Ich stehe die Flasche auf den Tisch.'], x: 'Stellen = handeling met een richting (wohin?) → vierde naamval.', tag: 'de-wohin' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Das Buch liegt auf dem Tisch.', 'Das Buch liegt auf den Tisch.', 'Das Buch legt auf dem Tisch.'], tag: 'de-wohin' },
      { t: 'tr', nl: 'Een kaartje naar Berlijn, alstublieft.', a: ['Eine Fahrkarte nach Berlin, bitte.', 'Ein Ticket nach Berlin, bitte.'], tag: 'de-mit' },
      { t: 'tr', nl: 'Ik moet in Keulen overstappen.', a: ['Ich muss in Köln umsteigen.'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik ga met de bus naar mijn werk.', a: ['Ich fahre mit dem Bus zur Arbeit.'], tag: 'de-mit' },
      { t: 'order', s: 'Der Zug nach München fährt heute von Gleis drei.', nl: 'De trein naar München vertrekt vandaag van spoor drie.', tag: 'de-mit' },
      { t: 'match', p: [['umsteigen', 'overstappen'], ['einsteigen', 'instappen'], ['aussteigen', 'uitstappen'], ['die Verspätung', 'de vertraging'], ['der Stau', 'de file']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Mit der Bahn durch Deutschland', type: 'Reisblog',
      p: [
        ['Letzte Woche bin ich mit dem Zug von Amsterdam nach Berlin gefahren. Die Fahrt dauert etwa sechs Stunden. Ich musste nicht umsteigen, das war sehr bequem.', 'Vorige week ben ik met de trein van Amsterdam naar Berlijn gegaan. De rit duurt ongeveer zes uur. Ik hoefde niet over te stappen, dat was heel comfortabel.'],
        ['In Berlin bin ich viel mit der U-Bahn und mit der Straßenbahn gefahren. Eine Tageskarte kostet nicht viel, und man kommt überall hin. Zum Brandenburger Tor bin ich zu Fuß gegangen.', 'In Berlijn heb ik veel met de metro en de tram gereisd. Een dagkaart kost niet veel, en je komt overal. Naar de Brandenburger Tor ben ik te voet gegaan.'],
        ['Auf der Rückfahrt hatte der Zug leider eine Stunde Verspätung. Aber im Zug gab es Kaffee, und ich habe einfach ein Buch gelesen. Nächstes Mal fahre ich in die Schweiz!', 'Op de terugreis had de trein helaas een uur vertraging. Maar in de trein was er koffie, en ik heb gewoon een boek gelezen. De volgende keer ga ik naar Zwitserland!']
      ],
      gl: [['die Fahrt', 'de rit'], ['etwa', 'ongeveer'], ['bequem', 'comfortabel'], ['die Tageskarte', 'de dagkaart'], ['die Rückfahrt', 'de terugreis']],
      q: [
        { t: 'mc', q: 'Wie lange dauert die Fahrt nach Berlin?', o: ['Etwa sechs Stunden', 'Etwa zwei Stunden', 'Einen Tag'] },
        { t: 'mc', q: 'Wie ist die Autorin zum Brandenburger Tor gekommen?', o: ['Zu Fuß', 'Mit der U-Bahn', 'Mit dem Bus'] },
        { t: 'mc', q: 'Was war das Problem auf der Rückfahrt?', o: ['Der Zug hatte Verspätung.', 'Es gab keinen Kaffee.', 'Sie musste dreimal umsteigen.'] }
      ]
    },
    say: [['Eine Fahrkarte nach Köln, bitte.', 'Een kaartje naar Keulen, alstublieft.'], ['Ich fahre mit dem Zug zur Arbeit.', 'Ik ga met de trein naar mijn werk.'], ['Wo muss ich umsteigen?', 'Waar moet ik overstappen?'], ['Wir fahren in die Schweiz.', 'We gaan naar Zwitserland.']],
    task: { nl: 'Beschrijf hoe je naar je werk of school gaat: waarmee, hoe lang, moet je overstappen? (4 zinnen)', model: 'Ich fahre jeden Tag mit dem Fahrrad zum Bahnhof. Dann nehme ich den Zug nach Utrecht. Ich muss nicht umsteigen. Vom Bahnhof gehe ich zu Fuß ins Büro.' },
    scenario: { nl: 'Je koopt een treinkaartje aan het loket in Hamburg.', role: 'You are Herr Lorenz, a ticket clerk at Hamburg main station. Ask: one-way or return, which train, seat reservation. Mention a change in Hanover and a delay on the direct train. A2 German, use "Sie".', goal: 'Koop een kaartje, vraag naar spoor, overstap en vertraging.' }
  });
})(window.SPT);
