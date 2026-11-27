/* Duits voor Nederlandstaligen — niveau A1, units 1–5 (Hoogduits uit Duitsland, uitleg in het Nederlands).
   Velden: in vocab/zinnen is [0] de doeltaal (Duits) en [1] het Nederlands.
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzes, eerste = juist), tr (NL→DE), order, match.
   Dialogen: de eerste spreker krijgt de vrouwenstem, de tweede de mannenstem (tools/tts-texts.js). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-sein': 'het werkwoord sein (bin, bist, ist)', 'de-du': 'du of Sie', 'de-w': 'vraagwoorden (wie, wo, woher…)', 'de-haben': 'haben (habe, hast, hat)',
    'de-art': 'der, die, das', 'de-poss': 'mein, dein, sein, ihr', 'de-akk': 'vierde naamval (den, einen)', 'de-kein': 'kein / nicht', 'de-praes': 'tegenwoordige tijd (regelmatig)',
    'de-trenn': 'scheidbare werkwoorden', 'de-v2': 'woordvolgorde: werkwoord op plaats 2', 'de-zeit': 'de tijd / klokkijken', 'de-dat': 'derde naamval (dem, der)', 'de-imp': 'gebiedende wijs',
    'de-gibt': 'es gibt', 'de-num': 'getallen', 'de-plural': 'meervoud', 'de-vok': 'woordenschat'
  });

  /* ───────────────────────── A1 · 1 ───────────────────────── */
  U({
    id: 'de-a1-01', level: 'A1', icon: '👋', title: 'Hallo! Ich heiße …', nl: 'Begroeten en jezelf voorstellen',
    goals: ['Iemand begroeten en afscheid nemen', 'Zeggen hoe je heet en waar je vandaan komt', 'ich bin, du bist, er ist gebruiken', 'Kiezen tussen du en Sie'],
    vocab: [
      ['Hallo', 'hallo'], ['Guten Morgen', 'goedemorgen'], ['Guten Tag', 'goedendag / goedemiddag'], ['Guten Abend', 'goedenavond'], ['Gute Nacht', 'welterusten'],
      ['Tschüss', 'doei'], ['Auf Wiedersehen', 'tot ziens'], ['Bis später', 'tot later'], ['Wie geht’s?', 'Hoe gaat het?'], ['Wie geht es Ihnen?', 'Hoe gaat het met u?'],
      ['Gut, danke.', 'Goed, dank je.'], ['Und dir?', 'En met jou?'], ['Wie heißt du?', 'Hoe heet je?'], ['Ich heiße …', 'Ik heet …'], ['Freut mich.', 'Aangenaam.'],
      ['Woher kommst du?', 'Waar kom je vandaan?'], ['Ich komme aus den Niederlanden.', 'Ik kom uit Nederland.'], ['danke', 'dank je / bedankt'], ['bitte', 'alsjeblieft / graag gedaan'],
      ['Entschuldigung', 'sorry / pardon'], ['ja', 'ja'], ['nein', 'nee'], ['der Freund / die Freundin', 'de vriend / de vriendin'], ['der Lehrer / die Lehrerin', 'de leraar / de lerares']
    ],
    grammar: [
      { t: 'Het werkwoord sein: zijn', es: 'Das Verb sein',
        html: `<p><b>Sein</b> betekent <i>zijn</i>. Het lijkt op het Nederlands, maar let op de vormen: <b>ich bin</b>, <b>du bist</b>, <b>er ist</b>.</p>
<p><b>Uitzondering:</b> <i>sein</i> is het meest onregelmatige werkwoord van het Duits; geen enkele vorm volgt de gewone regel (stam + uitgang). <b>Waarom?</b> Het is het meest gebruikte werkwoord, en zulke woorden houden hun oude vormen vast. Net als in het Nederlands (ben, is, zijn) komen de vormen van verschillende oude stammen.</p>
<p>Het Duits heeft een eigen vorm voor <i>jullie</i>: <b>ihr seid</b>. En <b>sie sind</b> (zij) en <b>Sie sind</b> (u) klinken hetzelfde; alleen de hoofdletter verschilt.</p>`,
        table: [['', 'sein', 'Nederlands'], ['ich', 'bin', 'ik ben'], ['du', 'bist', 'jij bent'], ['er / sie / es', 'ist', 'hij / zij / het is'], ['wir', 'sind', 'wij zijn'], ['ihr', 'seid', 'jullie zijn'], ['sie / Sie', 'sind', 'zij zijn / u bent']],
        sum: 'Ich bin, du bist, er ist, wir sind, ihr seid, sie sind.',
        ex: [['Ich bin Sanne. Ich bin aus Utrecht.', 'Ik ben Sanne. Ik kom uit Utrecht.'], ['Er ist Lehrer.', 'Hij is leraar.'], ['Wir sind Freunde.', 'Wij zijn vrienden.']] },
      { t: 'du of Sie', es: 'du oder Sie',
        html: `<p>Net als <i>jij</i> en <i>u</i> heeft het Duits <b>du</b> en <b>Sie</b>. Duitsers zeggen veel langer <b>Sie</b> dan Nederlanders <i>u</i> zeggen: tegen onbekende volwassenen, in winkels, bij de dokter en vaak ook op het werk.</p>
<p><b>Sie</b> (u) schrijf je altijd met een <b>hoofdletter</b> en krijgt de werkwoordsvorm van <i>zij (meervoud)</i>: <i>Woher kommen <b>Sie</b>?</i> Tegen vrienden, familie, kinderen en medestudenten zeg je <b>du</b>.</p>
<p>Bij <b>du</b> eindigt het werkwoord op <b>-st</b>: <i>du komm<b>st</b>, du heiß<b>t</b></i>. <b>Uitzondering:</b> na een stam op <i>s, ß</i> of <i>z</i> komt er alleen een <b>-t</b> bij (<i>du heißt</i>, niet <s>du heißst</s>). <b>Waarom?</b> Twee s-klanken achter elkaar zijn niet uit te spreken, dus de s van de uitgang valt weg.</p>`,
        table: [['', 'du (informeel)', 'Sie (beleefd)'], ['Hoe heet je / u?', 'Wie heißt du?', 'Wie heißen Sie?'], ['Waar kom je / komt u vandaan?', 'Woher kommst du?', 'Woher kommen Sie?'], ['Hoe gaat het?', 'Wie geht es dir?', 'Wie geht es Ihnen?']],
        ex: [['Wie heißen Sie? — Ich heiße Peter Schmidt.', 'Hoe heet u? — Ik heet Peter Schmidt.'], ['Woher kommst du? — Aus Rotterdam.', 'Waar kom je vandaan? — Uit Rotterdam.']] },
      { t: 'Hoofdletters en de ß', es: 'Großschreibung und ß',
        html: `<p>In het Duits schrijf je <b>elk zelfstandig naamwoord</b> met een hoofdletter, ook midden in de zin: <i>der <b>L</b>ehrer, die <b>F</b>reundin, der <b>T</b>ag</i>. Zo herken je ze meteen.</p>
<p>De letter <b>ß</b> (Eszett) spreek je uit als een scherpe <b>s</b>: <i>heißen</i> klinkt als «haisen». Hij staat na een lange klinker of een tweeklank. Kun je hem niet typen? Dan mag <b>ss</b>. De puntjes op <b>ä, ö, ü</b> (Umlaut) veranderen de klank: <i>ü</i> klinkt als de Nederlandse <i>uu</i>, <i>ö</i> als <i>eu</i>, <i>ä</i> als <i>è</i>.</p>`,
        table: [['Duits', 'klinkt als', 'voorbeeld'], ['ß', 's', 'heißen, Straße'], ['ü', 'uu', 'Tschüss, fünf'], ['ö', 'eu', 'schön, hören'], ['ä', 'è', 'spät, Mädchen'], ['ei', 'ai', 'nein, heißen'], ['ie', 'ie', 'wie, sieben']],
        ex: [['Ich heiße Anna.', 'Ik heet Anna.'], ['Tschüss, bis später!', 'Doei, tot later!']] }
    ],
    dialogue: {
      t: 'Erster Tag im Sprachkurs', place: 'Berlin 🇩🇪',
      lines: [
        ['Sanne', 'Hallo! Guten Morgen.', 'Hallo! Goedemorgen.'],
        ['Jonas', 'Guten Morgen. Wie geht’s?', 'Goedemorgen. Hoe gaat het?'],
        ['Sanne', 'Gut, danke. Und dir?', 'Goed, dank je. En met jou?'],
        ['Jonas', 'Auch gut. Ich heiße Jonas. Wie heißt du?', 'Ook goed. Ik heet Jonas. Hoe heet jij?'],
        ['Sanne', 'Ich bin Sanne. Freut mich.', 'Ik ben Sanne. Aangenaam.'],
        ['Jonas', 'Freut mich auch. Woher kommst du?', 'Insgelijks. Waar kom je vandaan?'],
        ['Sanne', 'Ich komme aus Utrecht, aus den Niederlanden. Bist du aus Berlin?', 'Ik kom uit Utrecht, uit Nederland. Kom jij uit Berlijn?'],
        ['Jonas', 'Nein, ich bin aus Hamburg. Ich bin der neue Lehrer.', 'Nee, ik kom uit Hamburg. Ik ben de nieuwe leraar.'],
        ['Sanne', 'Oh! Entschuldigung, Herr …?', 'O! Sorry, meneer …?'],
        ['Jonas', 'Kein Problem. Hier sagen wir alle du. Bis später, Sanne!', 'Geen probleem. Hier zeggen we allemaal du. Tot later, Sanne!']
      ],
      q: [
        { t: 'mc', q: 'Woher kommt Sanne?', o: ['Aus Utrecht', 'Aus Hamburg', 'Aus Berlin'] },
        { t: 'mc', q: 'Wer ist Jonas?', o: ['Der neue Lehrer', 'Ein Student', 'Sannes Bruder'] },
        { t: 'mc', q: 'Wie geht es Sanne?', o: ['Gut', 'Nicht gut', 'Sie ist müde'] }
      ]
    },
    culture: { t: 'Siezen, duzen en handen schudden', html: `<p>In Duitsland is <b>Sie</b> de veilige keuze bij volwassenen die je niet kent. Je gebruikt dan <b>Herr</b> (meneer) of <b>Frau</b> (mevrouw) met de achternaam: <i>Guten Tag, Frau Müller.</i> De oudere of hogere persoon biedt het <b>du</b> aan: <i>Wir können uns duzen.</i></p>
<p>Bij een eerste ontmoeting geef je een <b>hand</b> en kijk je de ander aan. Drie zoenen, zoals in Nederland, zijn ongebruikelijk.</p>
<p>🌍 In het zuiden en in Oostenrijk hoor je <b>Grüß Gott</b> en <b>Servus</b>, in het noorden <b>Moin</b> (de hele dag!), in Zwitserland <b>Grüezi</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich ___ aus den Niederlanden.', a: ['bin'], o: ['bin', 'bist', 'ist'], nl: 'Ik kom uit Nederland.', tag: 'de-sein' },
      { t: 'cloze', s: 'Er ___ Lehrer.', a: ['ist'], o: ['ist', 'bin', 'sind'], nl: 'Hij is leraar.', tag: 'de-sein' },
      { t: 'cloze', s: 'Wir ___ Freunde.', a: ['sind'], o: ['sind', 'seid', 'ist'], nl: 'Wij zijn vrienden.', tag: 'de-sein' },
      { t: 'cloze', s: '___ du aus Berlin?', a: ['Bist'], o: ['Bist', 'Ist', 'Bin'], nl: 'Kom jij uit Berlijn?', tag: 'de-sein' },
      { t: 'cloze', s: 'Ihr ___ Studenten.', a: ['seid'], h: 'sein', nl: 'Jullie zijn studenten.', x: 'Bij ihr (jullie) hoort seid. Let op: sind is voor wir en sie/Sie.', tag: 'de-sein' },
      { t: 'cloze', s: 'Wie ___ Sie?', a: ['heißen'], o: ['heißen', 'heißt', 'heiße'], nl: 'Hoe heet u?', x: 'Sie (u) krijgt dezelfde vorm als sie (zij, meervoud): heißen.', tag: 'de-du' },
      { t: 'mc', q: 'Je spreekt een onbekende vrouw van 50 aan in een winkel. Wat zeg je?', o: ['Entschuldigung, wie heißen Sie?', 'Entschuldigung, wie heißt du?', 'Hallo, wer bist du?'], tag: 'de-du' },
      { t: 'mc', q: 'Iemand zegt «Freut mich». Wat zeg je terug?', o: ['Freut mich auch.', 'Bitte.', 'Gute Nacht.'], tag: 'de-vok' },
      { t: 'mc', q: 'Welke zin is goed geschreven?', o: ['Der Lehrer ist aus Hamburg.', 'Der lehrer ist aus Hamburg.', 'der Lehrer ist aus hamburg.'], x: 'Zelfstandige naamwoorden (Lehrer) en namen (Hamburg) krijgen in het Duits altijd een hoofdletter.', tag: 'de-vok' },
      { t: 'mc', q: 'Wat zeg je als je ’s avonds gaat slapen?', o: ['Gute Nacht.', 'Guten Abend.', 'Guten Morgen.'], x: 'Guten Abend zeg je bij aankomst, Gute Nacht voor het slapengaan.', tag: 'de-vok' },
      { t: 'tr', nl: 'Ik heet Anna.', a: ['Ich heiße Anna.', 'Ich bin Anna.', 'Mein Name ist Anna.'], tag: 'de-sein' },
      { t: 'tr', nl: 'Waar kom je vandaan?', a: ['Woher kommst du?', 'Wo kommst du her?'], tag: 'de-w' },
      { t: 'tr', nl: 'Hoe gaat het met u?', a: ['Wie geht es Ihnen?', 'Wie geht’s Ihnen?'], tag: 'de-du' },
      { t: 'tr', nl: 'Ik kom uit Nederland.', a: ['Ich komme aus den Niederlanden.', 'Ich bin aus den Niederlanden.', 'Ich komme aus Holland.'], tag: 'de-sein' },
      { t: 'order', s: 'Ich heiße Sanne und ich komme aus Utrecht.', nl: 'Ik heet Sanne en ik kom uit Utrecht.', tag: 'de-v2' },
      { t: 'match', p: [['Hallo', 'hallo'], ['Tschüss', 'doei'], ['danke', 'bedankt'], ['bitte', 'alsjeblieft'], ['Entschuldigung', 'sorry']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Hallo, ich bin Daan', type: 'Profiel in een taal-app',
      p: [
        ['Hallo! Ich heiße Daan de Vries. Ich komme aus Rotterdam, aus den Niederlanden. Ich bin 24 Jahre alt und ich bin Student.', 'Hallo! Ik heet Daan de Vries. Ik kom uit Rotterdam, uit Nederland. Ik ben 24 jaar oud en ik ben student.'],
        ['Ich spreche Niederländisch, Englisch und ein bisschen Deutsch. Mein Deutsch ist noch nicht gut, aber ich lerne jeden Tag.', 'Ik spreek Nederlands, Engels en een beetje Duits. Mijn Duits is nog niet goed, maar ik leer elke dag.'],
        ['Ich suche Freunde aus Deutschland, Österreich und der Schweiz. Schreib mir! Bis bald.', 'Ik zoek vrienden uit Duitsland, Oostenrijk en Zwitserland. Schrijf me! Tot snel.']
      ],
      gl: [['Jahre alt', 'jaar oud'], ['ein bisschen', 'een beetje'], ['noch nicht', 'nog niet'], ['ich suche', 'ik zoek'], ['bis bald', 'tot snel']],
      q: [
        { t: 'mc', q: 'Woher kommt Daan?', o: ['Aus Rotterdam', 'Aus Österreich', 'Aus der Schweiz'] },
        { t: 'mc', q: 'Wie alt ist Daan?', o: ['24', '14', '42'] },
        { t: 'mc', q: 'Was sucht Daan?', o: ['Freunde', 'Einen Lehrer', 'Eine Arbeit'] }
      ]
    },
    say: [['Hallo, wie geht’s?', 'Hallo, hoe gaat het?'], ['Gut, danke. Und dir?', 'Goed, dank je. En met jou?'], ['Ich heiße Sanne. Freut mich.', 'Ik heet Sanne. Aangenaam.'], ['Ich komme aus den Niederlanden.', 'Ik kom uit Nederland.']],
    task: { nl: 'Stel jezelf voor in 3 of 4 zinnen: groet, zeg hoe je heet, waar je vandaan komt en vraag hoe het met de ander gaat.', model: 'Hallo! Guten Tag. Ich heiße Anna und ich komme aus den Niederlanden. Ich bin Studentin. Wie geht’s?' },
    scenario: { nl: 'Je ontmoet Lena, een nieuwe collega uit München.', role: 'You are Lena, a friendly new coworker from Munich. It is your first day at an international office in Amsterdam. Speak simple German (A1) and use "du".', goal: 'Groet Lena, stel jezelf voor en vraag waar ze vandaan komt.' }
  });

  /* ───────────────────────── A1 · 2 ───────────────────────── */
  U({
    id: 'de-a1-02', level: 'A1', icon: '👨‍👩‍👧', title: 'Meine Familie', nl: 'Je familie',
    goals: ['Je familie voorstellen', 'der, die en das herkennen', 'haben en mein / dein gebruiken', 'Tellen tot 20'],
    vocab: [
      ['die Familie', 'de familie / het gezin'], ['die Mutter', 'de moeder'], ['der Vater', 'de vader'], ['die Eltern', 'de ouders'], ['der Bruder', 'de broer'], ['die Schwester', 'de zus'],
      ['die Geschwister', 'de broers en zussen'], ['der Sohn', 'de zoon'], ['die Tochter', 'de dochter'], ['das Kind', 'het kind'], ['das Mädchen', 'het meisje'], ['der Junge', 'de jongen'],
      ['die Großmutter / die Oma', 'de grootmoeder / de oma'], ['der Großvater / der Opa', 'de grootvader / de opa'], ['der Mann', 'de man / de echtgenoot'], ['die Frau', 'de vrouw / de echtgenote'],
      ['der Hund', 'de hond'], ['die Katze', 'de kat'], ['verheiratet', 'getrouwd'], ['ledig', 'ongehuwd'], ['Wie alt bist du?', 'Hoe oud ben je?'], ['Ich bin 30 Jahre alt.', 'Ik ben 30 jaar oud.'],
      ['eins, zwei, drei', 'één, twee, drie'], ['vier, fünf, sechs', 'vier, vijf, zes'], ['sieben, acht, neun, zehn', 'zeven, acht, negen, tien'], ['elf, zwölf', 'elf, twaalf'], ['zwanzig', 'twintig']
    ],
    grammar: [
      { t: 'der, die, das: drie geslachten', es: 'Der bestimmte Artikel',
        html: `<p>Het Nederlands heeft <i>de</i> en <i>het</i>; het Duits heeft <b>drie</b> lidwoorden: <b>der</b> (mannelijk), <b>die</b> (vrouwelijk) en <b>das</b> (onzijdig). In het meervoud is het altijd <b>die</b>.</p>
<p>Handig: een <b>het-woord</b> is in het Duits meestal <b>das</b> (<i>het kind → das Kind, het huis → das Haus</i>). Een <b>de-woord</b> is <b>der</b> of <b>die</b>; dat leer je per woord. Leer een nieuw woord daarom altijd mét lidwoord.</p>
<p><b>Uitzondering:</b> <b>das Mädchen</b> (het meisje) is onzijdig, hoewel het om een vrouwelijk persoon gaat. <b>Waarom?</b> Woorden op <b>-chen</b> en <b>-lein</b> zijn verkleinwoorden, en die zijn altijd <i>das</i>, net als in het Nederlands (<i>het meisje</i>). De uitgang bepaalt het geslacht, niet de betekenis.</p>
<p>Na <i>ein</i>: <b>ein</b> Bruder (der), <b>eine</b> Schwester (die), <b>ein</b> Kind (das).</p>`,
        table: [['', 'bepaald', 'onbepaald', 'voorbeeld'], ['mannelijk', 'der', 'ein', 'der Vater, ein Bruder'], ['vrouwelijk', 'die', 'eine', 'die Mutter, eine Schwester'], ['onzijdig', 'das', 'ein', 'das Kind, ein Mädchen'], ['meervoud', 'die', '—', 'die Eltern, Kinder']],
        sum: 'Der Vater, die Mutter, das Kind. Im Plural: die Eltern.',
        ex: [['Der Vater heißt Peter und die Mutter heißt Karin.', 'De vader heet Peter en de moeder heet Karin.'], ['Das Mädchen ist meine Schwester.', 'Het meisje is mijn zus.']] },
      { t: 'haben en mein, dein, sein, ihr', es: 'haben und Possessivartikel',
        html: `<p><b>Haben</b> (hebben): <i>ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben</i>. <b>Uitzondering:</b> bij <i>du</i> en <i>er</i> valt de <b>b</b> weg: <b>du hast</b>, <b>er hat</b> (niet <s>du habst</s>, <s>er habt</s>). <b>Waarom?</b> Veelgebruikte vormen slijten af in de spreektaal; vergelijk het Nederlandse <i>hij heeft</i> naast <i>hebben</i>.</p>
<p>Bezit: <b>mein</b> (mijn), <b>dein</b> (jouw), <b>sein</b> (zijn), <b>ihr</b> (haar), <b>Ihr</b> (uw). Bij een <b>die-woord</b> en in het meervoud komt er een <b>-e</b> achter, net als bij <i>eine</i>: <i>mein Bruder</i>, maar <i>mein<b>e</b> Schwester, mein<b>e</b> Eltern</i>.</p>
<p>Leeftijd zeg je met <b>sein</b>, net als in het Nederlands: <i>Ich <b>bin</b> 30 Jahre alt.</i></p>`,
        table: [['', 'der / das', 'die / meervoud'], ['mijn', 'mein Vater, mein Kind', 'meine Mutter, meine Eltern'], ['jouw', 'dein Bruder', 'deine Schwester'], ['zijn', 'sein Hund', 'seine Katze'], ['haar', 'ihr Mann', 'ihre Tochter']],
        ex: [['Ich habe zwei Brüder und eine Schwester.', 'Ik heb twee broers en één zus.'], ['Hast du Kinder? — Ja, ich habe einen Sohn.', 'Heb je kinderen? — Ja, ik heb een zoon.'], ['Das ist meine Mutter und das ist ihr Hund.', 'Dat is mijn moeder en dat is haar hond.']] }
    ],
    dialogue: {
      t: 'Ein Foto von der Familie', place: 'Köln 🇩🇪',
      lines: [
        ['Mila', 'Schau mal, das ist meine Familie.', 'Kijk eens, dit is mijn familie.'],
        ['Tim', 'Schön! Wer ist das?', 'Mooi! Wie is dat?'],
        ['Mila', 'Das ist mein Vater. Er heißt Peter und er ist 58 Jahre alt.', 'Dat is mijn vader. Hij heet Peter en hij is 58 jaar oud.'],
        ['Tim', 'Und die Frau? Ist das deine Mutter?', 'En de vrouw? Is dat je moeder?'],
        ['Mila', 'Ja, das ist meine Mutter. Und das Mädchen ist meine Schwester Lea.', 'Ja, dat is mijn moeder. En het meisje is mijn zus Lea.'],
        ['Tim', 'Hast du auch einen Bruder?', 'Heb je ook een broer?'],
        ['Mila', 'Nein, ich habe keinen Bruder. Aber wir haben einen Hund. Und du? Hast du Geschwister?', 'Nee, ik heb geen broer. Maar we hebben een hond. En jij? Heb je broers of zussen?'],
        ['Tim', 'Ja, ich habe zwei Brüder. Sie sind zwölf und fünfzehn.', 'Ja, ik heb twee broers. Ze zijn twaalf en vijftien.']
      ],
      q: [
        { t: 'mc', q: 'Wie heißt Milas Vater?', o: ['Peter', 'Tim', 'Lea'] },
        { t: 'mc', q: 'Wer ist Lea?', o: ['Milas Schwester', 'Milas Mutter', 'Tims Schwester'] },
        { t: 'mc', q: 'Wie viele Brüder hat Tim?', o: ['Zwei', 'Einen', 'Keinen'] }
      ]
    },
    culture: { t: 'Geschwister, Oma en Opa', html: `<p>Het Duits heeft één handig woord voor <i>broers en zussen</i> samen: <b>die Geschwister</b>. <i>Hast du Geschwister?</i> vraag je dus aan iedereen.</p>
<p>In het dagelijks leven zeggen Duitsers <b>Mama</b> en <b>Papa</b>, <b>Oma</b> en <b>Opa</b>. <i>Mutter</i> en <i>Vater</i> klinken wat formeler.</p>
<p>Let op de valse vriend: <b>die Frau</b> is zowel <i>de vrouw</i> als <i>mevrouw</i>, en <b>mein Mann</b> betekent <i>mijn echtgenoot</i>.</p>` },
    ex: [
      { t: 'cloze', s: '___ Vater heißt Peter.', a: ['Der'], o: ['Der', 'Die', 'Das'], nl: 'De vader heet Peter.', tag: 'de-art' },
      { t: 'cloze', s: '___ Mutter ist 55 Jahre alt.', a: ['Die'], o: ['Die', 'Der', 'Das'], nl: 'De moeder is 55 jaar oud.', tag: 'de-art' },
      { t: 'cloze', s: '___ Kind ist klein.', a: ['Das'], o: ['Das', 'Der', 'Die'], nl: 'Het kind is klein.', x: 'Een het-woord (het kind) is in het Duits meestal das.', tag: 'de-art' },
      { t: 'cloze', s: '___ Mädchen ist meine Schwester.', a: ['Das'], o: ['Das', 'Die', 'Der'], nl: 'Het meisje is mijn zus.', x: 'Uitzondering: das Mädchen is onzijdig, omdat woorden op -chen (verkleinwoorden) altijd das zijn.', tag: 'de-art' },
      { t: 'cloze', s: 'Ich ___ zwei Brüder.', a: ['habe'], o: ['habe', 'hast', 'hat'], nl: 'Ik heb twee broers.', tag: 'de-haben' },
      { t: 'cloze', s: '___ du Geschwister?', a: ['Hast'], o: ['Hast', 'Habst', 'Hat'], nl: 'Heb je broers of zussen?', x: 'Uitzondering: bij du en er valt de b van haben weg: du hast, er hat.', tag: 'de-haben' },
      { t: 'cloze', s: 'Sie ___ einen Hund.', a: ['hat'], h: 'haben (zij, enkelvoud)', nl: 'Zij heeft een hond.', tag: 'de-haben' },
      { t: 'cloze', s: 'Das ist ___ Schwester.', a: ['meine'], o: ['meine', 'mein', 'meinen'], nl: 'Dat is mijn zus.', x: 'Schwester is een die-woord: mein krijgt dan een -e.', tag: 'de-poss' },
      { t: 'cloze', s: 'Das ist ___ Bruder.', a: ['mein'], o: ['mein', 'meine', 'meiner'], nl: 'Dat is mijn broer.', tag: 'de-poss' },
      { t: 'mc', q: 'Hoe vraag je of iemand broers of zussen heeft?', o: ['Hast du Geschwister?', 'Hast du Eltern?', 'Bist du Geschwister?'], tag: 'de-haben' },
      { t: 'mc', q: 'Welk getal is «zwölf»?', o: ['12', '20', '2'], tag: 'de-num' },
      { t: 'tr', nl: 'Ik heb een zus.', a: ['Ich habe eine Schwester.'], tag: 'de-haben' },
      { t: 'tr', nl: 'Dat is mijn vader.', a: ['Das ist mein Vater.'], tag: 'de-poss' },
      { t: 'tr', nl: 'Hoe oud ben je?', a: ['Wie alt bist du?'], tag: 'de-sein' },
      { t: 'order', s: 'Meine Eltern haben einen Hund und eine Katze.', nl: 'Mijn ouders hebben een hond en een kat.', tag: 'de-v2' },
      { t: 'match', p: [['die Mutter', 'de moeder'], ['der Vater', 'de vader'], ['die Schwester', 'de zus'], ['der Bruder', 'de broer'], ['das Kind', 'het kind']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Meine Familie', type: 'Berichtje aan een taalmaatje',
      p: [
        ['Ich heiße Lea und ich bin 19 Jahre alt. Meine Familie ist nicht groß. Wir sind vier Personen: mein Vater, meine Mutter, meine Schwester Mila und ich.', 'Ik heet Lea en ik ben 19 jaar oud. Mijn familie is niet groot. We zijn met z’n vieren: mijn vader, mijn moeder, mijn zus Mila en ik.'],
        ['Mein Vater ist Lehrer und meine Mutter ist Ärztin. Meine Schwester ist 24 und sie ist verheiratet. Ihr Mann heißt Tim.', 'Mijn vader is leraar en mijn moeder is arts. Mijn zus is 24 en ze is getrouwd. Haar man heet Tim.'],
        ['Wir haben auch einen Hund. Er heißt Bruno und er ist schon zwölf Jahre alt. Meine Oma sagt: Bruno ist auch ein Kind von uns!', 'We hebben ook een hond. Hij heet Bruno en hij is al twaalf jaar oud. Mijn oma zegt: Bruno is ook een kind van ons!']
      ],
      gl: [['nicht groß', 'niet groot'], ['die Ärztin', 'de (vrouwelijke) arts'], ['schon', 'al'], ['von uns', 'van ons']],
      q: [
        { t: 'mc', q: 'Wie viele Personen sind in Leas Familie?', o: ['Vier', 'Drei', 'Fünf'] },
        { t: 'mc', q: 'Was ist Leas Mutter von Beruf?', o: ['Ärztin', 'Lehrerin', 'Studentin'] },
        { t: 'mc', q: 'Wer ist Bruno?', o: ['Der Hund', 'Der Bruder', 'Der Mann von Mila'] }
      ]
    },
    say: [['Das ist meine Familie.', 'Dit is mijn familie.'], ['Ich habe einen Bruder und eine Schwester.', 'Ik heb een broer en een zus.'], ['Meine Mutter heißt Karin.', 'Mijn moeder heet Karin.'], ['Hast du Geschwister?', 'Heb je broers of zussen?']],
    task: { nl: 'Beschrijf je familie in 4 zinnen: wie zijn er, hoe heten ze en hoe oud zijn ze?', model: 'Meine Familie ist klein. Mein Vater heißt Jan und meine Mutter heißt Els. Ich habe einen Bruder, er ist 20 Jahre alt. Wir haben auch eine Katze.' },
    scenario: { nl: 'Je laat je Duitse gastgezin een familiefoto zien.', role: 'You are Frau Becker, a warm host mother in Cologne. The learner shows you a family photo. Ask simple questions (A1) about who is who, names and ages. Use "du".', goal: 'Vertel wie er op de foto staan en vraag naar haar familie.' }
  });

  /* ───────────────────────── A1 · 3 ───────────────────────── */
  U({
    id: 'de-a1-03', level: 'A1', icon: '🥨', title: 'Essen und Trinken', nl: 'Eten en drinken bestellen',
    goals: ['Iets bestellen in een café', 'De vierde naamval gebruiken: einen Kaffee', 'Zeggen wat je (niet) wilt met möchten, kein en nicht'],
    vocab: [
      ['der Kaffee', 'de koffie'], ['der Tee', 'de thee'], ['das Wasser', 'het water'], ['der Saft', 'het sap'], ['das Bier', 'het bier'], ['der Wein', 'de wijn'], ['die Milch', 'de melk'],
      ['das Brot', 'het brood'], ['das Brötchen', 'het broodje'], ['der Käse', 'de kaas'], ['die Wurst', 'de worst'], ['der Kuchen', 'de taart / de cake'], ['die Suppe', 'de soep'], ['der Salat', 'de salade'],
      ['das Ei', 'het ei'], ['der Apfel', 'de appel'], ['das Frühstück', 'het ontbijt'], ['essen', 'eten'], ['trinken', 'drinken'], ['Ich möchte …', 'Ik wil graag …'], ['Ich nehme …', 'Ik neem …'],
      ['Was kostet das?', 'Wat kost dat?'], ['Die Rechnung, bitte.', 'De rekening, alstublieft.'], ['lecker', 'lekker'], ['Ich habe Hunger.', 'Ik heb honger.'], ['Ich habe Durst.', 'Ik heb dorst.'], ['Guten Appetit!', 'Eet smakelijk!']
    ],
    grammar: [
      { t: 'De vierde naamval: der wordt den', es: 'Der Akkusativ',
        html: `<p>Het Duits heeft <b>naamvallen</b>: het lidwoord verandert met de rol van het woord in de zin. Het <b>onderwerp</b> staat in de eerste naamval (Nominativ): <i><b>Der</b> Kaffee ist heiß.</i> Het <b>lijdend voorwerp</b> (wat je eet, drinkt, hebt, neemt) staat in de vierde naamval (Akkusativ).</p>
<p>Goed nieuws: alleen <b>mannelijk</b> verandert. <b>der → den</b>, <b>ein → einen</b>, <b>mein → meinen</b>, <b>kein → keinen</b>. Bij <i>die</i> en <i>das</i> blijft alles gelijk.</p>
<p>Ezelsbruggetje: is het woord <b>der</b> én doe je er iets mee? Dan <b>-en</b>: <i>Ich trinke ein<b>en</b> Kaffee.</i></p>`,
        table: [['', '1e naamval (onderwerp)', '4e naamval (lijdend voorwerp)'], ['mannelijk', 'der / ein Kaffee', 'den / einen Kaffee'], ['vrouwelijk', 'die / eine Suppe', 'die / eine Suppe'], ['onzijdig', 'das / ein Bier', 'das / ein Bier'], ['meervoud', 'die Brötchen', 'die Brötchen']],
        sum: 'Der Kaffee ist gut. Ich nehme den Kaffee. Nur maskulin: der wird den, ein wird einen.',
        ex: [['Ich möchte einen Tee und ein Brötchen.', 'Ik wil graag een thee en een broodje.'], ['Er isst den Kuchen.', 'Hij eet de taart.'], ['Wir nehmen eine Suppe und einen Salat.', 'Wij nemen een soep en een salade.']] },
      { t: 'möchten, kein en nicht', es: 'möchten, kein und nicht',
        html: `<p>Met <b>ich möchte</b> (ik wil graag) bestel je beleefd: <i>Ich möchte einen Kaffee, bitte.</i> <b>Ich will</b> klinkt in een café veel te bot. Vormen: <i>ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie/Sie möchten</i>.</p>
<p><b>Kein</b> = geen. Het werkt precies als <i>ein</i>: <i>Ich habe <b>keinen</b> Hunger</i> (der), <i><b>keine</b> Milch</i> (die), <i><b>kein</b> Brot</i> (das).</p>
<p><b>Nicht</b> = niet. Gebruik het bij werkwoorden en bijvoeglijke naamwoorden: <i>Ich trinke <b>nicht</b>. Das ist <b>nicht</b> lecker.</i></p>
<p><b>Uitzondering:</b> <i>essen</i> verandert van klinker bij du en er: <b>du isst</b>, <b>er isst</b> (niet <s>du esst</s>). <b>Waarom?</b> Het is een sterk werkwoord: de <i>e</i> wordt <i>i</i> in de 2e en 3e persoon enkelvoud, een oud patroon dat je bij meer werkwoorden gaat zien (sprechen → du sprichst).</p>`,
        table: [['Nederlands', 'Duits'], ['een koffie / geen koffie', 'einen Kaffee / keinen Kaffee'], ['een soep / geen soep', 'eine Suppe / keine Suppe'], ['een bier / geen bier', 'ein Bier / kein Bier'], ['ik eet niet', 'ich esse nicht']],
        ex: [['Möchten Sie einen Kaffee? — Nein danke, ich trinke keinen Kaffee.', 'Wilt u een koffie? — Nee dank u, ik drink geen koffie.'], ['Du isst kein Fleisch, oder?', 'Jij eet geen vlees, toch?']] }
    ],
    dialogue: {
      t: 'Im Café', place: 'Wien 🇦🇹',
      lines: [
        ['Kellnerin', 'Guten Tag! Was möchten Sie?', 'Goedendag! Wat wilt u hebben?'],
        ['Daan', 'Guten Tag. Ich möchte einen Kaffee, bitte.', 'Goedendag. Ik wil graag een koffie.'],
        ['Kellnerin', 'Gern. Möchten Sie auch etwas essen?', 'Graag. Wilt u ook iets eten?'],
        ['Daan', 'Ja. Was ist das? Ist das ein Apfelkuchen?', 'Ja. Wat is dat? Is dat een appeltaart?'],
        ['Kellnerin', 'Nein, das ist ein Käsekuchen. Der Apfelkuchen ist leider aus.', 'Nee, dat is een kwarktaart. De appeltaart is helaas op.'],
        ['Daan', 'Dann nehme ich den Käsekuchen. Und ein Wasser, bitte.', 'Dan neem ik de kwarktaart. En een water, graag.'],
        ['Kellnerin', 'Sehr gern. Einen Kaffee, einen Käsekuchen und ein Wasser.', 'Heel graag. Een koffie, een kwarktaart en een water.'],
        ['Daan', 'Danke. Was kostet das?', 'Dank u. Wat kost dat?'],
        ['Kellnerin', 'Das macht zwölf Euro.', 'Dat is twaalf euro.']
      ],
      q: [
        { t: 'mc', q: 'Was trinkt Daan?', o: ['Einen Kaffee und ein Wasser', 'Einen Tee', 'Ein Bier'] },
        { t: 'mc', q: 'Warum nimmt Daan keinen Apfelkuchen?', o: ['Der Apfelkuchen ist aus.', 'Er hat keinen Hunger.', 'Er ist zu teuer.'] },
        { t: 'mc', q: 'Was kostet alles zusammen?', o: ['Zwölf Euro', 'Zwei Euro', 'Zwanzig Euro'] }
      ]
    },
    culture: { t: 'Kaffee und Kuchen, Brötchen en fooi', html: `<p>Op zondagmiddag is het tijd voor <b>Kaffee und Kuchen</b>: koffie met een flink stuk taart, thuis of in een café. In Wenen is de koffiehuiscultuur zelfs werelderfgoed.</p>
<p>Het <b>Frühstück</b> is vaak uitgebreid, met <b>Brötchen</b> (in het zuiden <i>Semmeln</i>), kaas en worst. Het warme eten is traditioneel ’s middags.</p>
<p>💶 <b>Fooi</b> geef je door het bedrag af te ronden terwijl je betaalt: de rekening is 12 euro en je zegt <i>«Vierzehn, bitte»</i>. Geld op tafel laten liggen is ongebruikelijk. <i>Stimmt so</i> betekent: laat de rest maar zitten.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich möchte ___ Kaffee, bitte.', a: ['einen'], o: ['einen', 'ein', 'eine'], nl: 'Ik wil graag een koffie.', x: 'Kaffee is der, en het is het lijdend voorwerp: ein wordt einen.', tag: 'de-akk' },
      { t: 'cloze', s: 'Wir nehmen ___ Suppe.', a: ['eine'], o: ['eine', 'einen', 'ein'], nl: 'Wij nemen een soep.', x: 'Suppe is die: in de vierde naamval verandert er niets.', tag: 'de-akk' },
      { t: 'cloze', s: 'Er trinkt ___ Bier.', a: ['ein'], o: ['ein', 'einen', 'eine'], nl: 'Hij drinkt een bier.', tag: 'de-akk' },
      { t: 'cloze', s: 'Ich nehme ___ Kuchen.', a: ['den'], o: ['den', 'der', 'das'], nl: 'Ik neem de taart.', tag: 'de-akk' },
      { t: 'cloze', s: '___ Kaffee ist heiß.', a: ['Der'], o: ['Der', 'Den', 'Einen'], nl: 'De koffie is heet.', x: 'Hier is Kaffee het onderwerp: eerste naamval, dus der.', tag: 'de-akk' },
      { t: 'cloze', s: 'Ich habe ___ Hunger.', a: ['keinen'], o: ['keinen', 'kein', 'nicht'], nl: 'Ik heb geen honger.', tag: 'de-kein' },
      { t: 'cloze', s: 'Das ist ___ lecker.', a: ['nicht'], o: ['nicht', 'kein', 'keine'], nl: 'Dat is niet lekker.', tag: 'de-kein' },
      { t: 'cloze', s: 'Du ___ kein Fleisch.', a: ['isst'], o: ['isst', 'esst', 'esse'], nl: 'Jij eet geen vlees.', x: 'Uitzondering: essen is een sterk werkwoord, de e wordt i bij du en er: du isst, er isst.', tag: 'de-praes' },
      { t: 'mc', q: 'Hoe bestel je beleefd een thee?', o: ['Ich möchte einen Tee, bitte.', 'Ich will Tee.', 'Gib mir einen Tee.'], tag: 'de-akk' },
      { t: 'mc', q: 'Wat betekent «Die Rechnung, bitte»?', o: ['De rekening, alstublieft.', 'Het recept, alstublieft.', 'Reken maar uit.'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik wil graag een water.', a: ['Ich möchte ein Wasser.', 'Ich möchte ein Wasser, bitte.', 'Ich hätte gern ein Wasser.'], tag: 'de-akk' },
      { t: 'tr', nl: 'Ik drink geen koffie.', a: ['Ich trinke keinen Kaffee.'], tag: 'de-kein' },
      { t: 'tr', nl: 'Wat kost dat?', a: ['Was kostet das?', 'Wie viel kostet das?'], tag: 'de-w' },
      { t: 'order', s: 'Ich nehme einen Salat und ein Wasser, bitte.', nl: 'Ik neem een salade en een water, graag.', tag: 'de-akk' },
      { t: 'match', p: [['das Brot', 'het brood'], ['der Käse', 'de kaas'], ['die Milch', 'de melk'], ['der Saft', 'het sap'], ['das Ei', 'het ei']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Frühstück bei Familie Becker', type: 'Blogbericht',
      p: [
        ['Am Sonntag essen wir immer zusammen Frühstück. Es gibt Brötchen, Käse, Wurst und Eier. Mein Vater trinkt Kaffee und meine Mutter trinkt Tee.', 'Op zondag ontbijten we altijd samen. Er zijn broodjes, kaas, worst en eieren. Mijn vader drinkt koffie en mijn moeder drinkt thee.'],
        ['Ich esse keine Wurst, denn ich esse kein Fleisch. Ich nehme ein Brötchen mit Käse und einen Apfel. Dazu trinke ich einen Orangensaft.', 'Ik eet geen worst, want ik eet geen vlees. Ik neem een broodje met kaas en een appel. Daarbij drink ik een sinaasappelsap.'],
        ['Am Nachmittag kommt meine Oma. Sie bringt immer einen Kuchen mit. Ihr Apfelkuchen ist sehr lecker!', '’s Middags komt mijn oma. Ze neemt altijd een taart mee. Haar appeltaart is heel lekker!']
      ],
      gl: [['immer', 'altijd'], ['zusammen', 'samen'], ['es gibt', 'er is / er zijn'], ['denn', 'want'], ['dazu', 'daarbij'], ['mitbringen', 'meenemen']],
      q: [
        { t: 'mc', q: 'Was trinkt der Vater?', o: ['Kaffee', 'Tee', 'Saft'] },
        { t: 'mc', q: 'Warum isst die Autorin keine Wurst?', o: ['Sie isst kein Fleisch.', 'Sie hat keinen Hunger.', 'Die Wurst ist aus.'] },
        { t: 'mc', q: 'Was bringt die Oma mit?', o: ['Einen Kuchen', 'Brötchen', 'Einen Salat'] }
      ]
    },
    say: [['Ich möchte einen Kaffee, bitte.', 'Ik wil graag een koffie.'], ['Ich nehme den Kuchen.', 'Ik neem de taart.'], ['Die Rechnung, bitte.', 'De rekening, alstublieft.'], ['Ich habe keinen Hunger.', 'Ik heb geen honger.']],
    task: { nl: 'Je zit in een café. Bestel iets te drinken en te eten en vraag om de rekening (3 of 4 zinnen).', model: 'Guten Tag! Ich möchte einen Tee und ein Brötchen mit Käse, bitte. Ich nehme auch einen Apfelkuchen. Die Rechnung, bitte.' },
    scenario: { nl: 'Je bestelt in een bakkerij-café in Wenen.', role: 'You are Herr Gruber, a polite waiter in a traditional Viennese café. Take the order, say one item is sold out and suggest another, then tell the price. Use "Sie" and simple German (A1).', goal: 'Bestel iets te drinken en te eten en vraag wat het kost.' }
  });

  /* ───────────────────────── A1 · 4 ───────────────────────── */
  U({
    id: 'de-a1-04', level: 'A1', icon: '⏰', title: 'Mein Tag', nl: 'Je dag en de tijd',
    goals: ['Zeggen hoe laat het is', 'Je dag beschrijven met regelmatige werkwoorden', 'Scheidbare werkwoorden gebruiken: ich stehe auf', 'Het werkwoord op de tweede plaats zetten'],
    vocab: [
      ['aufstehen', 'opstaan'], ['frühstücken', 'ontbijten'], ['arbeiten', 'werken'], ['lernen', 'leren'], ['wohnen', 'wonen'], ['machen', 'doen / maken'], ['kochen', 'koken'], ['einkaufen', 'boodschappen doen'],
      ['fernsehen', 'tv kijken'], ['anfangen', 'beginnen'], ['schlafen', 'slapen'], ['gehen', 'gaan / lopen'], ['kommen', 'komen'], ['die Arbeit', 'het werk'], ['die Schule', 'de school'], ['das Büro', 'het kantoor'],
      ['der Morgen', 'de ochtend'], ['der Abend', 'de avond'], ['heute', 'vandaag'], ['morgen', 'morgen'], ['Wie spät ist es?', 'Hoe laat is het?'], ['Es ist acht Uhr.', 'Het is acht uur.'], ['halb neun', 'half negen'],
      ['Viertel nach acht', 'kwart over acht'], ['Viertel vor neun', 'kwart voor negen'], ['um sieben Uhr', 'om zeven uur'], ['früh', 'vroeg'], ['spät', 'laat']
    ],
    grammar: [
      { t: 'De tegenwoordige tijd', es: 'Das Präsens',
        html: `<p>Haal <b>-en</b> van het hele werkwoord af en je hebt de stam: <i>wohnen → wohn-</i>. Daarachter komen de uitgangen <b>-e, -st, -t, -en, -t, -en</b>.</p>
<p>Verschil met het Nederlands: bij <b>ich</b> komt er een <b>-e</b> achter (<i>ich wohn<b>e</b></i>), en <b>ihr</b> (jullie) heeft een eigen vorm op <b>-t</b> (<i>ihr wohn<b>t</b></i>).</p>
<p><b>Uitzondering:</b> eindigt de stam op <b>-t</b> of <b>-d</b> (<i>arbeiten, finden</i>), dan komt er een extra <b>e</b> tussen: <i>du arbeit<b>e</b>st, er arbeit<b>e</b>t</i>. <b>Waarom?</b> Anders kun je de uitgang niet horen of uitspreken (<s>er arbeitt</s>).</p>`,
        table: [['', 'wohnen', 'arbeiten'], ['ich', 'wohne', 'arbeite'], ['du', 'wohnst', 'arbeitest'], ['er / sie / es', 'wohnt', 'arbeitet'], ['wir', 'wohnen', 'arbeiten'], ['ihr', 'wohnt', 'arbeitet'], ['sie / Sie', 'wohnen', 'arbeiten']],
        sum: 'Ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen.',
        ex: [['Ich wohne in Berlin und arbeite in Potsdam.', 'Ik woon in Berlijn en werk in Potsdam.'], ['Wo arbeitest du?', 'Waar werk je?'], ['Wir lernen Deutsch.', 'Wij leren Duits.']] },
      { t: 'Scheidbare werkwoorden en woordvolgorde', es: 'Trennbare Verben und Wortstellung',
        html: `<p>Net als in het Nederlands (<i>opstaan → ik sta op</i>) zijn veel Duitse werkwoorden <b>scheidbaar</b>: het voorvoegsel gaat naar het <b>einde van de zin</b>. <i>aufstehen → Ich <b>stehe</b> um sieben Uhr <b>auf</b>.</i></p>
<p>Het vervoegde werkwoord staat in een gewone zin altijd op <b>plaats 2</b>. Begin je met de tijd, dan komt het onderwerp ná het werkwoord: <i><b>Um acht Uhr</b> frühstücke <b>ich</b>.</i> Dat doet het Nederlands ook: <i>Om acht uur ontbijt ik.</i></p>
<p><b>Uitzondering:</b> <i>schlafen, anfangen</i> en <i>fernsehen</i> veranderen van klinker bij du en er: <b>du schläfst, er schläft</b>; <b>es fängt an</b>; <b>er sieht fern</b>. <b>Waarom?</b> Het zijn sterke werkwoorden: <i>a → ä</i> en <i>e → ie</i> in de 2e en 3e persoon enkelvoud.</p>`,
        table: [['heel werkwoord', 'zin'], ['aufstehen', 'Ich stehe früh auf.'], ['einkaufen', 'Er kauft heute ein.'], ['fernsehen', 'Wir sehen am Abend fern.'], ['anfangen', 'Die Arbeit fängt um neun Uhr an.']],
        ex: [['Wann stehst du auf? — Ich stehe um halb sieben auf.', 'Wanneer sta je op? — Ik sta om half zeven op.'], ['Am Abend sehe ich fern.', '’s Avonds kijk ik tv.']] },
      { t: 'Klokkijken', es: 'Die Uhrzeit',
        html: `<p>De klok werkt bijna als in het Nederlands: <b>Viertel nach acht</b> (kwart over acht), <b>Viertel vor neun</b> (kwart voor negen) en <b>halb neun</b> = half negen (8:30), dus ook «half op weg naar negen».</p>
<p>Let op: het Nederlandse <i>tien voor half negen</i> bestaat in het Duits zo niet; zeg <b>zwanzig nach acht</b>. <i>Om</i> een tijd is <b>um</b>: <i>um acht Uhr</i>. Officieel (trein, afspraak) gebruik je 24 uur: <i>18.30 Uhr = achtzehn Uhr dreißig</i>.</p>`,
        table: [['tijd', 'Duits'], ['8:00', 'acht Uhr'], ['8:15', 'Viertel nach acht'], ['8:20', 'zwanzig nach acht'], ['8:30', 'halb neun'], ['8:45', 'Viertel vor neun']],
        ex: [['Wie spät ist es? — Es ist halb zehn.', 'Hoe laat is het? — Het is half tien.'], ['Der Kurs fängt um neun Uhr an.', 'De cursus begint om negen uur.']] }
    ],
    dialogue: {
      t: 'Wann stehst du auf?', place: 'München 🇩🇪',
      lines: [
        ['Lena', 'Du siehst müde aus, Felix. Wann stehst du auf?', 'Je ziet er moe uit, Felix. Hoe laat sta je op?'],
        ['Felix', 'Ich stehe um halb sechs auf. Meine Arbeit fängt um sieben Uhr an.', 'Ik sta om half zes op. Mijn werk begint om zeven uur.'],
        ['Lena', 'So früh! Ich stehe erst um acht Uhr auf.', 'Zo vroeg! Ik sta pas om acht uur op.'],
        ['Felix', 'Und wann arbeitest du?', 'En wanneer werk je?'],
        ['Lena', 'Ich arbeite von neun bis fünf im Büro. Am Abend koche ich und sehe fern.', 'Ik werk van negen tot vijf op kantoor. ’s Avonds kook ik en kijk ik tv.'],
        ['Felix', 'Ich kaufe nach der Arbeit ein und dann lerne ich Englisch.', 'Ik doe na het werk boodschappen en dan leer ik Engels.'],
        ['Lena', 'Und wann schläfst du?', 'En wanneer slaap je?'],
        ['Felix', 'Um zehn Uhr. Wie spät ist es jetzt?', 'Om tien uur. Hoe laat is het nu?'],
        ['Lena', 'Es ist Viertel vor zehn. Gute Nacht, Felix!', 'Het is kwart voor tien. Welterusten, Felix!']
      ],
      q: [
        { t: 'mc', q: 'Wann steht Felix auf?', o: ['Um halb sechs', 'Um acht Uhr', 'Um sieben Uhr'] },
        { t: 'mc', q: 'Was macht Lena am Abend?', o: ['Sie kocht und sieht fern.', 'Sie kauft ein.', 'Sie lernt Englisch.'] },
        { t: 'mc', q: 'Wie spät ist es?', o: ['Viertel vor zehn', 'Viertel nach zehn', 'Halb zehn'] }
      ]
    },
    culture: { t: 'Pünktlichkeit en Feierabend', html: `<p>Duitsers staan bekend om hun <b>Pünktlichkeit</b>: een afspraak om 10 uur begint om 10 uur. Kom je vijf minuten te laat, dan laat je dat even weten.</p>
<p>Na het werk begint de <b>Feierabend</b>: de vrije avond. Collega’s wensen elkaar <i>Schönen Feierabend!</i> En op zondag is het <b>Ruhetag</b>: de meeste winkels zijn dicht, en boren of grasmaaien doe je dan niet.</p>
<p>⏰ <i>Halb neun</i> is half negen. Maar let op in het zuiden en oosten: daar hoor je ook <i>viertel neun</i> (8:15) en <i>drei viertel neun</i> (8:45).</p>` },
    ex: [
      { t: 'cloze', s: 'Ich ___ in Berlin.', a: ['wohne'], o: ['wohne', 'wohnst', 'wohnt'], nl: 'Ik woon in Berlijn.', tag: 'de-praes' },
      { t: 'cloze', s: 'Wo ___ du?', a: ['arbeitest'], o: ['arbeitest', 'arbeitst', 'arbeitet'], nl: 'Waar werk je?', x: 'Uitzondering: na een stam op -t komt er een extra e: du arbeitest, anders is het niet uit te spreken.', tag: 'de-praes' },
      { t: 'cloze', s: 'Ihr ___ Deutsch.', a: ['lernt'], o: ['lernt', 'lernen', 'lernst'], nl: 'Jullie leren Duits.', tag: 'de-praes' },
      { t: 'cloze', s: 'Ich stehe um sieben Uhr ___.', a: ['auf'], o: ['auf', 'an', 'ein'], nl: 'Ik sta om zeven uur op.', tag: 'de-trenn' },
      { t: 'cloze', s: 'Der Kurs ___ um neun Uhr an.', a: ['fängt'], o: ['fängt', 'fangt', 'fangen'], nl: 'De cursus begint om negen uur.', x: 'Uitzondering: anfangen is sterk, a wordt ä bij du en er: es fängt an.', tag: 'de-trenn' },
      { t: 'cloze', s: 'Am Abend ___ ich fern.', a: ['sehe'], h: 'fernsehen', nl: '’s Avonds kijk ik tv.', tag: 'de-trenn' },
      { t: 'mc', q: 'Welke zin heeft de juiste woordvolgorde?', o: ['Um acht Uhr frühstücke ich.', 'Um acht Uhr ich frühstücke.', 'Um acht Uhr frühstücken ich.'], x: 'Het werkwoord staat op plaats 2; begint de zin met de tijd, dan volgt het onderwerp ná het werkwoord.', tag: 'de-v2' },
      { t: 'mc', q: 'Hoe laat is «halb neun»?', o: ['8:30', '9:30', '8:00'], tag: 'de-zeit' },
      { t: 'mc', q: 'Hoe zeg je 7:45?', o: ['Viertel vor acht', 'Viertel nach sieben', 'Halb acht'], tag: 'de-zeit' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Er kauft heute ein.', 'Er einkauft heute.', 'Er kauft ein heute.'], tag: 'de-trenn' },
      { t: 'tr', nl: 'Hoe laat is het?', a: ['Wie spät ist es?', 'Wie viel Uhr ist es?'], tag: 'de-zeit' },
      { t: 'tr', nl: 'Ik sta vroeg op.', a: ['Ich stehe früh auf.'], tag: 'de-trenn' },
      { t: 'tr', nl: 'Wij werken vandaag.', a: ['Wir arbeiten heute.', 'Heute arbeiten wir.'], tag: 'de-praes' },
      { t: 'order', s: 'Heute stehe ich um halb sieben auf.', nl: 'Vandaag sta ik om half zeven op.', tag: 'de-v2' },
      { t: 'match', p: [['aufstehen', 'opstaan'], ['einkaufen', 'boodschappen doen'], ['fernsehen', 'tv kijken'], ['schlafen', 'slapen'], ['kochen', 'koken']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Ein Tag im Leben von Felix', type: 'Tekst uit een cursusboek',
      p: [
        ['Felix ist Bäcker und wohnt in München. Er steht jeden Tag um halb sechs auf. Um sechs Uhr frühstückt er: Er isst ein Brötchen und trinkt einen Kaffee.', 'Felix is bakker en woont in München. Hij staat elke dag om half zes op. Om zes uur ontbijt hij: hij eet een broodje en drinkt een koffie.'],
        ['Seine Arbeit fängt um sieben Uhr an. Er arbeitet bis drei Uhr. Dann kauft er ein und geht nach Hause.', 'Zijn werk begint om zeven uur. Hij werkt tot drie uur. Dan doet hij boodschappen en gaat hij naar huis.'],
        ['Am Abend kocht Felix und lernt Englisch. Er sieht nicht fern, denn er ist müde. Um zehn Uhr schläft er schon.', '’s Avonds kookt Felix en leert hij Engels. Hij kijkt geen tv, want hij is moe. Om tien uur slaapt hij al.']
      ],
      gl: [['der Bäcker', 'de bakker'], ['jeden Tag', 'elke dag'], ['bis', 'tot'], ['nach Hause', 'naar huis'], ['müde', 'moe']],
      q: [
        { t: 'mc', q: 'Was ist Felix von Beruf?', o: ['Bäcker', 'Lehrer', 'Kellner'] },
        { t: 'mc', q: 'Wann fängt seine Arbeit an?', o: ['Um sieben Uhr', 'Um halb sechs', 'Um drei Uhr'] },
        { t: 'mc', q: 'Warum sieht Felix nicht fern?', o: ['Er ist müde.', 'Er hat keinen Fernseher.', 'Er arbeitet am Abend.'] }
      ]
    },
    say: [['Ich stehe um sieben Uhr auf.', 'Ik sta om zeven uur op.'], ['Wie spät ist es?', 'Hoe laat is het?'], ['Es ist halb neun.', 'Het is half negen.'], ['Am Abend sehe ich fern.', '’s Avonds kijk ik tv.']],
    task: { nl: 'Beschrijf je dag in 4 zinnen: wanneer sta je op, wanneer werk of leer je en wat doe je ’s avonds?', model: 'Ich stehe um sieben Uhr auf. Um acht Uhr frühstücke ich. Ich arbeite von neun bis fünf. Am Abend koche ich und sehe fern.' },
    scenario: { nl: 'Je praat met je nieuwe huisgenoot over jullie dagritme.', role: 'You are Felix, a baker from Munich and the learner’s new roommate. Ask when they get up, work and sleep, and tell about your own early schedule. Simple German (A1), use "du".', goal: 'Vertel hoe jouw dag eruitziet en vraag naar de zijne.' }
  });

  /* ───────────────────────── A1 · 5 ───────────────────────── */
  U({
    id: 'de-a1-05', level: 'A1', icon: '🏙️', title: 'In der Stadt', nl: 'De weg vragen in de stad',
    goals: ['Vragen waar iets is', 'De weg wijzen en begrijpen', 'es gibt gebruiken', 'De derde naamval na in, an, neben: in der Stadt, am Bahnhof'],
    vocab: [
      ['die Stadt', 'de stad'], ['die Straße', 'de straat'], ['der Bahnhof', 'het station'], ['der Supermarkt', 'de supermarkt'], ['die Apotheke', 'de apotheek'], ['die Bank', 'de bank'], ['das Hotel', 'het hotel'],
      ['das Rathaus', 'het stadhuis'], ['der Platz', 'het plein'], ['die Kirche', 'de kerk'], ['das Museum', 'het museum'], ['die Haltestelle', 'de halte'], ['die Ampel', 'het stoplicht'], ['die Ecke', 'de hoek'],
      ['links', 'links'], ['rechts', 'rechts'], ['geradeaus', 'rechtdoor'], ['Wo ist …?', 'Waar is …?'], ['Es gibt …', 'Er is / er zijn …'], ['in der Nähe', 'in de buurt'], ['weit', 'ver'], ['neben', 'naast'],
      ['gegenüber', 'tegenover'], ['hier', 'hier'], ['dort', 'daar'], ['Gehen Sie geradeaus.', 'Gaat u rechtdoor.'], ['Ich bin fremd hier.', 'Ik ben hier niet bekend.']
    ],
    grammar: [
      { t: 'Waar? De derde naamval na in, an, neben', es: 'Wo? Der Dativ',
        html: `<p>Op de vraag <b>Wo?</b> (waar?) volgt na <b>in, an, auf, neben, vor, hinter</b> de <b>derde naamval</b> (Dativ). Het lidwoord verandert: <b>der → dem</b>, <b>das → dem</b>, <b>die → der</b>.</p>
<p>Ja, <i>die</i> wordt <b>der</b>: <i>die Stadt → in <b>der</b> Stadt</i>. Dat voelt vreemd, maar het Nederlands had dit vroeger ook; je ziet het nog in vaste resten zoals <i>in <b>der</b> minne schikken</i> en <i><b>ter</b> plaatse</i> (te + der).</p>
<p>Vaak smelten voorzetsel en lidwoord samen: <b>in dem → im</b>, <b>an dem → am</b>: <i><b>im</b> Supermarkt, <b>am</b> Bahnhof</i>.</p>`,
        table: [['', '1e naamval', '3e naamval (wo?)'], ['mannelijk', 'der Bahnhof', 'am Bahnhof (an dem)'], ['onzijdig', 'das Hotel', 'im Hotel (in dem)'], ['vrouwelijk', 'die Stadt', 'in der Stadt'], ['vrouwelijk', 'die Bank', 'neben der Bank']],
        sum: 'Wo? Im Hotel, am Bahnhof, in der Stadt. Der und das werden dem, die wird der.',
        ex: [['Die Apotheke ist neben der Bank.', 'De apotheek is naast de bank.'], ['Ich bin im Supermarkt.', 'Ik ben in de supermarkt.'], ['Wir treffen uns am Bahnhof.', 'We spreken af bij het station.']] },
      { t: 'es gibt en de gebiedende wijs met Sie', es: 'es gibt und der Imperativ',
        html: `<p><b>Es gibt</b> betekent <i>er is / er zijn</i>. Het blijft altijd enkelvoud en krijgt de <b>vierde naamval</b>: <i>Es gibt hier ein<b>en</b> Supermarkt. Es gibt zwei Hotels.</i></p>
<p><b>Uitzondering:</b> je zegt niet <s>es ist einen Supermarkt</s>. <b>Waarom?</b> <i>Es gibt</i> komt van <i>geben</i> (geven): letterlijk «het geeft een supermarkt». Wat «gegeven» wordt, is het lijdend voorwerp, en dat staat in de vierde naamval.</p>
<p>De weg wijzen doe je met de <b>gebiedende wijs</b>. Bij Sie: werkwoord + Sie: <i><b>Gehen Sie</b> geradeaus. <b>Nehmen Sie</b> die zweite Straße links.</i> Met <i>bitte</i> klinkt het vriendelijk.</p>`,
        table: [['Nederlands', 'Duits'], ['Er is een bank.', 'Es gibt eine Bank.'], ['Er is geen station.', 'Es gibt keinen Bahnhof.'], ['Ga rechtdoor. (u)', 'Gehen Sie geradeaus.'], ['Sla links af. (u)', 'Gehen Sie nach links.']],
        ex: [['Gibt es hier eine Apotheke? — Ja, in der Goethestraße.', 'Is hier een apotheek? — Ja, in de Goethestraat.'], ['Gehen Sie an der Ampel rechts.', 'Gaat u bij het stoplicht rechts.']] }
    ],
    dialogue: {
      t: 'Entschuldigung, wo ist der Bahnhof?', place: 'Hamburg 🇩🇪',
      lines: [
        ['Sanne', 'Entschuldigung, ich bin fremd hier. Wo ist der Bahnhof?', 'Pardon, ik ben hier niet bekend. Waar is het station?'],
        ['Mann', 'Der Bahnhof? Der ist nicht weit. Gehen Sie hier geradeaus bis zur Ampel.', 'Het station? Dat is niet ver. Gaat u hier rechtdoor tot het stoplicht.'],
        ['Sanne', 'Geradeaus bis zur Ampel. Und dann?', 'Rechtdoor tot het stoplicht. En dan?'],
        ['Mann', 'An der Ampel gehen Sie nach links. Der Bahnhof ist neben dem Rathaus.', 'Bij het stoplicht gaat u naar links. Het station is naast het stadhuis.'],
        ['Sanne', 'Danke. Gibt es dort auch eine Apotheke?', 'Dank u. Is daar ook een apotheek?'],
        ['Mann', 'Ja, es gibt eine Apotheke im Bahnhof und eine gegenüber der Kirche.', 'Ja, er is een apotheek in het station en een tegenover de kerk.'],
        ['Sanne', 'Super. Vielen Dank!', 'Super. Hartelijk dank!'],
        ['Mann', 'Bitte, gern. Schönen Tag noch!', 'Graag gedaan. Nog een fijne dag!']
      ],
      q: [
        { t: 'mc', q: 'Was sucht Sanne?', o: ['Den Bahnhof', 'Das Rathaus', 'Ein Hotel'] },
        { t: 'mc', q: 'Wo ist der Bahnhof?', o: ['Neben dem Rathaus', 'Gegenüber der Kirche', 'Neben der Bank'] },
        { t: 'mc', q: 'Wo gibt es eine Apotheke?', o: ['Im Bahnhof', 'Im Rathaus', 'An der Ampel'] }
      ]
    },
    culture: { t: 'Bij rood blijf je staan', html: `<p>In Duitsland wacht je als voetganger bij een rode <b>Ampel</b>, ook als er geen auto te zien is. Oversteken door rood kost een boete en levert boze blikken op, zeker als er kinderen bij staan.</p>
<p>Het <b>Ampelmännchen</b> met hoed uit de voormalige DDR is in Berlijn een geliefd symbool geworden.</p>
<p>🚉 Het woord <b>Bahnhof</b> is mannelijk (<i>der</i>), ook al is het in het Nederlands <i>het station</i>. De regel «het-woord = das» geldt dus alleen als het Duitse woord op het Nederlandse lijkt.</p>` },
    ex: [
      { t: 'cloze', s: 'Ich bin in ___ Stadt.', a: ['der'], o: ['der', 'die', 'dem'], nl: 'Ik ben in de stad.', x: 'Wo? → derde naamval. Stadt is die, en die wordt der.', tag: 'de-dat' },
      { t: 'cloze', s: 'Die Apotheke ist neben ___ Hotel.', a: ['dem'], o: ['dem', 'das', 'der'], nl: 'De apotheek is naast het hotel.', tag: 'de-dat' },
      { t: 'cloze', s: 'Wir sind ___ Bahnhof.', a: ['am'], o: ['am', 'an', 'in'], nl: 'We zijn bij het station.', x: 'an + dem smelt samen tot am.', tag: 'de-dat' },
      { t: 'cloze', s: 'Er ist ___ Supermarkt.', a: ['im'], o: ['im', 'in', 'am'], nl: 'Hij is in de supermarkt.', tag: 'de-dat' },
      { t: 'cloze', s: 'Die Bank ist gegenüber ___ Kirche.', a: ['der'], o: ['der', 'die', 'dem'], nl: 'De bank is tegenover de kerk.', tag: 'de-dat' },
      { t: 'cloze', s: 'Es gibt hier ___ Supermarkt.', a: ['einen'], o: ['einen', 'ein', 'einem'], nl: 'Er is hier een supermarkt.', x: 'Na es gibt volgt de vierde naamval: der Supermarkt → einen Supermarkt.', tag: 'de-gibt' },
      { t: 'cloze', s: '___ Sie geradeaus.', a: ['Gehen'], o: ['Gehen', 'Geht', 'Gehst'], nl: 'Gaat u rechtdoor.', tag: 'de-imp' },
      { t: 'mc', q: 'Hoe vraag je of er een apotheek in de buurt is?', o: ['Gibt es hier eine Apotheke?', 'Ist es hier eine Apotheke?', 'Hat es hier eine Apotheke?'], tag: 'de-gibt' },
      { t: 'mc', q: 'Wat betekent «geradeaus»?', o: ['rechtdoor', 'rechtsaf', 'meteen'], tag: 'de-vok' },
      { t: 'mc', q: 'Welk lidwoord hoort bij «Bahnhof»?', o: ['der', 'das', 'die'], x: 'Let op: het station, maar der Bahnhof. De regel «het-woord = das» werkt alleen bij woorden die op elkaar lijken.', tag: 'de-art' },
      { t: 'tr', nl: 'Waar is het station?', a: ['Wo ist der Bahnhof?'], tag: 'de-w' },
      { t: 'tr', nl: 'Het hotel is naast de bank.', a: ['Das Hotel ist neben der Bank.'], tag: 'de-dat' },
      { t: 'tr', nl: 'Is hier een supermarkt?', a: ['Gibt es hier einen Supermarkt?', 'Gibt es einen Supermarkt hier?', 'Ist hier ein Supermarkt?'], tag: 'de-gibt' },
      { t: 'order', s: 'Gehen Sie an der Ampel nach links.', nl: 'Gaat u bij het stoplicht naar links.', tag: 'de-imp' },
      { t: 'match', p: [['links', 'links'], ['rechts', 'rechts'], ['geradeaus', 'rechtdoor'], ['neben', 'naast'], ['gegenüber', 'tegenover']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Willkommen in Lübeck', type: 'Folder van het toeristenbureau',
      p: [
        ['Lübeck ist eine schöne Stadt im Norden von Deutschland. In der Altstadt gibt es viele Kirchen, ein Museum und das berühmte Holstentor.', 'Lübeck is een mooie stad in het noorden van Duitsland. In de oude binnenstad zijn veel kerken, een museum en de beroemde Holstentor.'],
        ['Der Bahnhof ist nicht weit: Gehen Sie zehn Minuten geradeaus und Sie sind am Rathaus. Neben dem Rathaus ist der Markt.', 'Het station is niet ver: loop tien minuten rechtdoor en u bent bij het stadhuis. Naast het stadhuis is de markt.'],
        ['Haben Sie Hunger? Im Café gegenüber der Kirche gibt es Kaffee und Lübecker Marzipan. Guten Appetit!', 'Hebt u honger? In het café tegenover de kerk is er koffie en Lübecker marsepein. Eet smakelijk!']
      ],
      gl: [['im Norden', 'in het noorden'], ['die Altstadt', 'de oude binnenstad'], ['berühmt', 'beroemd'], ['viele', 'veel'], ['der Markt', 'de markt']],
      q: [
        { t: 'mc', q: 'Wo liegt Lübeck?', o: ['Im Norden von Deutschland', 'In Österreich', 'Im Süden von Deutschland'] },
        { t: 'mc', q: 'Was ist neben dem Rathaus?', o: ['Der Markt', 'Der Bahnhof', 'Das Museum'] },
        { t: 'mc', q: 'Was gibt es im Café?', o: ['Kaffee und Marzipan', 'Suppe und Salat', 'Bier und Wurst'] }
      ]
    },
    say: [['Entschuldigung, wo ist der Bahnhof?', 'Pardon, waar is het station?'], ['Gibt es hier eine Apotheke?', 'Is hier een apotheek?'], ['Gehen Sie geradeaus und dann links.', 'Gaat u rechtdoor en dan links.'], ['Das Hotel ist neben der Bank.', 'Het hotel is naast de bank.']],
    task: { nl: 'Iemand vraagt de weg naar de supermarkt bij jou in de buurt. Leg het uit in 3 of 4 zinnen.', model: 'Der Supermarkt ist nicht weit. Gehen Sie hier geradeaus bis zur Ampel. Dann gehen Sie nach rechts. Der Supermarkt ist neben der Apotheke.' },
    scenario: { nl: 'Je bent verdwaald in Hamburg en vraagt de weg naar je hotel.', role: 'You are Herr Petersen, a helpful older man in Hamburg. The learner asks for directions to Hotel Hansa, which is next to the town hall. Give clear, simple directions (A1) and use "Sie".', goal: 'Vraag de weg naar je hotel en herhaal de route om te checken.' }
  });
})(window.SPT);
