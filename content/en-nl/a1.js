/* Engels voor Nederlandstaligen — niveau A1, units 1–5 (Amerikaans Engels, uitleg in het Nederlands).
   Velden: in vocab/zinnen is [0] de doeltaal (Engels) en [1] het Nederlands.
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzes, eerste = juist), tr (NL→EN), order, match. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-be': 'het werkwoord to be (am, is, are)', 'en-pron': 'persoonlijke voornaamwoorden (I, you, he…)', 'en-art': 'a / an / the', 'en-have': 'have / has',
    'en-poss': 'my, your, his, her…', 'en-plural': 'meervoud (-s, -es)', 'en-like': 'like / don’t like', 'en-do': 'do / does in vragen',
    'en-ps': 'present simple (-s bij he/she)', 'en-time': 'de tijd / klokkijken', 'en-there': 'there is / there are', 'en-prep': 'voorzetsels van plaats',
    'en-imp': 'gebiedende wijs (turn left…)', 'en-q': 'vraagwoorden', 'en-order': 'woordvolgorde', 'en-num': 'getallen'
  });

  /* ───────────────────────── A1 · 1 ───────────────────────── */
  U({
    id: 'en-a1-01', level: 'A1', icon: '👋', title: 'Hello! Nice to meet you', nl: 'Begroeten en jezelf voorstellen',
    goals: ['Iemand begroeten en afscheid nemen', 'Zeggen hoe je heet en waar je vandaan komt', 'I am, you are, he is gebruiken'],
    vocab: [
      ['hello', 'hallo'], ['hi', 'hoi'], ['good morning', 'goedemorgen'], ['good afternoon', 'goedemiddag'], ['good evening', 'goedenavond (bij aankomst)'],
      ['good night', 'welterusten / goedenacht (bij vertrek)'], ['goodbye', 'tot ziens'], ['bye', 'doei'], ['see you later', 'tot later'], ['How are you?', 'Hoe gaat het?'],
      ["I'm fine, thanks.", 'Goed, dank je.'], ['And you?', 'En met jou?'], ["What's your name?", 'Hoe heet je?'], ['My name is…', 'Ik heet…'],
      ['Nice to meet you.', 'Leuk je te ontmoeten.'], ['Where are you from?', 'Waar kom je vandaan?'], ["I'm from the Netherlands.", 'Ik kom uit Nederland.'], ['thank you', 'dank je wel'],
      ["you're welcome", 'graag gedaan'], ['please', 'alsjeblieft (bij een verzoek)'], ['sorry', 'sorry'], ['excuse me', 'pardon'], ['yes', 'ja'], ['no', 'nee'],
      ['friend', 'vriend / vriendin'], ['teacher', 'leraar / lerares'], ['student', 'student / leerling']
    ],
    grammar: [
      { t: 'Het werkwoord to be: zijn', es: 'The verb to be',
        html: `<p><b>To be</b> betekent <i>zijn</i>. Net als in het Nederlands (ben, bent, is, zijn) heeft het verschillende vormen: <b>am</b>, <b>is</b> en <b>are</b>.</p>
<p>In spreektaal gebruik je bijna altijd de <b>korte vorm</b>: <b>I'm</b>, <b>you're</b>, <b>he's</b>, <b>she's</b>, <b>it's</b>, <b>we're</b>, <b>they're</b>.</p>
<p>Let op: je leeftijd zeg je ook met <i>to be</i>: <i>I <b>am</b> 30.</i> Niet <s>I have 30 years</s>.</p>`,
        table: [['', 'lange vorm', 'korte vorm'], ['ik ben', 'I am', "I'm"], ['jij bent / u bent / jullie zijn', 'you are', "you're"], ['hij / zij / het is', 'he / she / it is', "he's / she's / it's"], ['wij zijn', 'we are', "we're"], ['zij zijn', 'they are', "they're"]],
        sum: 'I am, you are, he is, she is, we are, they are.',
        ex: [["I'm Sanne. I'm from Utrecht.", 'Ik ben Sanne. Ik kom uit Utrecht.'], ['She is a teacher.', 'Zij is lerares.'], ["We're 25.", 'We zijn 25.']] },
      { t: 'You: jij, u en jullie', es: 'You',
        html: `<p>In het Engels is er maar één woord voor <i>jij</i>, <i>u</i> en <i>jullie</i>: <b>you</b>. Beleefdheid laat je horen met woorden als <b>please</b>, <b>thank you</b> en <b>excuse me</b>, niet met een aparte vorm.</p>
<p><b>I</b> (ik) schrijf je altijd met een <b>hoofdletter</b>, ook midden in een zin: <i>Tom and <b>I</b> are friends.</i></p>
<p>Let op: <b>please</b> gebruik je als je iets vraagt. Als je iets aangeeft, zeg je <b>here you go</b>, niet <s>please</s>.</p>`,
        table: [['Nederlands', 'Engels'], ['jij bent', 'you are'], ['u bent', 'you are'], ['jullie zijn', 'you are'], ['alsjeblieft (iets geven)', 'here you go']],
        ex: [['Are you a student?', 'Ben jij student? / Bent u student?'], ['Here you go.', 'Alsjeblieft. (bij het aangeven)']] },
      { t: 'Vragen en ontkenningen met to be', es: 'Questions and negatives',
        html: `<p>Een vraag maak je door het werkwoord <b>vóór</b> het onderwerp te zetten, net als in het Nederlands: <b>Are you</b> from Amsterdam? (Ben jij…?) <b>Is she</b> a teacher?</p>
<p>Een ontkenning maak je met <b>not</b> ná het werkwoord: <b>I'm not</b> tired. <b>He isn't</b> here. <b>They aren't</b> students.</p>
<p>Kort antwoorden: <i>Are you Dutch? — <b>Yes, I am.</b> / <b>No, I'm not.</b></i> Alleen «Yes» kan ook, maar klinkt kortaf.</p>`,
        table: [['bevestigend', 'vraag', 'ontkenning'], ['You are tired.', 'Are you tired?', "You aren't tired."], ['She is from Delft.', 'Is she from Delft?', "She isn't from Delft."]],
        ex: [['Are you from the Netherlands? — Yes, I am.', 'Kom jij uit Nederland? — Ja.'], ["I'm not a teacher. I'm a student.", 'Ik ben geen leraar. Ik ben student.']] }
    ],
    dialogue: {
      t: 'First day at the language school', place: 'Boston 🇺🇸',
      lines: [
        ['Sanne', 'Hi! Good morning.', 'Hoi! Goedemorgen.'],
        ['Mike', 'Good morning. How are you?', 'Goedemorgen. Hoe gaat het?'],
        ['Sanne', "I'm fine, thanks. And you?", 'Goed, dank je. En met jou?'],
        ['Mike', "I'm great. My name is Mike. What's your name?", 'Prima. Ik heet Mike. Hoe heet jij?'],
        ['Sanne', "I'm Sanne. Nice to meet you.", 'Ik ben Sanne. Leuk je te ontmoeten.'],
        ['Mike', 'Nice to meet you too. Where are you from?', 'Insgelijks. Waar kom je vandaan?'],
        ['Sanne', "I'm from Utrecht, in the Netherlands. Are you from Boston?", 'Ik kom uit Utrecht, in Nederland. Kom jij uit Boston?'],
        ['Mike', "No, I'm not. I'm from Texas. I'm the new English teacher.", 'Nee. Ik kom uit Texas. Ik ben de nieuwe leraar Engels.'],
        ['Sanne', 'Oh, great! See you in class.', 'O, leuk! Tot in de les.'],
        ['Mike', 'See you later, Sanne!', 'Tot later, Sanne!']
      ],
      q: [
        { t: 'mc', q: 'Where is Sanne from?', o: ['From Utrecht', 'From Texas', 'From Boston'] },
        { t: 'mc', q: 'Who is Mike?', o: ['The new English teacher', 'A student', "Sanne's brother"] },
        { t: 'mc', q: 'How is Sanne?', o: ["She's fine", "She's tired", "She's sad"] }
      ]
    },
    culture: { t: 'Hi, voornamen en «How are you?»', html: `<p>Amerikanen gebruiken snel je <b>voornaam</b>, ook bij je baas of leraar: <i>Hi, Mike!</i> Bij oudere mensen of in formele situaties zeg je <b>Mr.</b> (meneer) of <b>Ms.</b> (mevrouw) met de achternaam: <i>Good morning, Ms. Smith.</i></p>
<p><b>How are you?</b> is vaak gewoon een groet, geen echte vraag. Een kort, positief antwoord is normaal: <i>Good, thanks. And you?</i></p>
<p>🤝 Bij een eerste ontmoeting geef je een hand. Drie zoenen, zoals in Nederland, zijn in de VS niet gebruikelijk.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ from the Netherlands.', a: ['am'], o: ['am', 'is', 'are'], nl: 'Ik kom uit Nederland.', tag: 'en-be' },
      { t: 'cloze', s: 'She ___ a teacher.', a: ['is'], o: ['is', 'am', 'are'], nl: 'Zij is lerares.', tag: 'en-be' },
      { t: 'cloze', s: 'We ___ friends.', a: ['are'], o: ['are', 'is', 'am'], nl: 'Wij zijn vrienden.', tag: 'en-be' },
      { t: 'cloze', s: '___ you a student?', a: ['Are'], o: ['Are', 'Is', 'Am'], nl: 'Ben jij student?', tag: 'en-be' },
      { t: 'cloze', s: 'They ___ from Belgium.', a: ['are'], h: 'to be', nl: 'Zij komen uit België.', tag: 'en-be' },
      { t: 'cloze', s: 'Tom and ___ are friends.', a: ['I'], o: ['I', 'me', 'i'], nl: 'Tom en ik zijn vrienden.', x: 'I schrijf je altijd met een hoofdletter.', tag: 'en-pron' },
      { t: 'mc', q: 'Iemand zegt «Nice to meet you». Wat zeg je terug?', o: ['Nice to meet you too.', "You're welcome.", 'Good night.'], tag: 'en-be' },
      { t: 'mc', q: 'Hoe zeg je «Ik ben 30 jaar»?', o: ["I'm 30.", 'I have 30 years.', 'I have 30.'], tag: 'en-be' },
      { t: 'mc', q: 'Wat zeg je als je ’s avonds weggaat of gaat slapen?', o: ['Good night.', 'Good evening.', 'Good morning.'], x: 'Good evening zeg je bij aankomst, good night bij vertrek.', tag: 'en-be' },
      { t: 'mc', q: 'Je geeft iemand zijn koffie. Je zegt:', o: ['Here you go.', 'Please.', "You're welcome."], tag: 'en-pron' },
      { t: 'tr', nl: 'Ik heet Anna.', a: ['My name is Anna.', "I'm Anna.", 'I am Anna.', "My name's Anna."], tag: 'en-pron' },
      { t: 'tr', nl: 'Ik kom uit Nederland.', a: ["I'm from the Netherlands.", 'I am from the Netherlands.', "I'm from Holland.", 'I am from Holland.'], tag: 'en-be' },
      { t: 'tr', nl: 'Hoe gaat het?', a: ['How are you?', "How's it going?", 'How are you doing?'], tag: 'en-be' },
      { t: 'tr', nl: 'Zij is geen student.', a: ["She isn't a student.", 'She is not a student.', "She's not a student."], tag: 'en-be' },
      { t: 'order', s: 'Nice to meet you, my name is Sanne.', nl: 'Leuk je te ontmoeten, ik heet Sanne.', tag: 'en-order' },
      { t: 'match', p: [['hello', 'hallo'], ['goodbye', 'tot ziens'], ['thank you', 'dank je wel'], ['please', 'alsjeblieft'], ['excuse me', 'pardon']], tag: 'en-be' }
    ],
    reading: {
      t: 'Hi, I’m Daan', type: 'Profiel in een taal-app',
      p: [
        ["Hi! My name is Daan de Vries. I'm from Rotterdam, in the Netherlands. I'm 24 years old and I'm a student.", 'Hoi! Ik heet Daan de Vries. Ik kom uit Rotterdam, in Nederland. Ik ben 24 jaar en ik ben student.'],
        ["I speak Dutch and a little English. I'm not very good at English, but I want to learn.", 'Ik spreek Nederlands en een beetje Engels. Ik ben niet zo goed in Engels, maar ik wil het leren.'],
        ["I'm looking for friends from the United States and Canada. Write to me! See you soon.", 'Ik zoek vrienden uit de Verenigde Staten en Canada. Schrijf me! Tot snel.']
      ],
      gl: [['years old', 'jaar (oud)'], ['a little', 'een beetje'], ['I want to learn', 'ik wil leren'], ["I'm looking for", 'ik zoek']],
      q: [
        { t: 'mc', q: 'Where is Daan from?', o: ['Rotterdam', 'Canada', 'The United States'] },
        { t: 'mc', q: 'How old is Daan?', o: ['24', '14', '42'] },
        { t: 'mc', q: 'What is Daan looking for?', o: ['Friends from the US and Canada', 'A job', 'A teacher'] }
      ]
    },
    say: [['Hello, how are you?', 'Hallo, hoe gaat het?'], ["I'm fine, thanks. And you?", 'Goed, dank je. En met jou?'], ['My name is Sanne. Nice to meet you.', 'Ik heet Sanne. Leuk je te ontmoeten.'], ["I'm from the Netherlands.", 'Ik kom uit Nederland.']],
    task: { nl: 'Stel jezelf voor in 3 of 4 zinnen: groet, zeg hoe je heet, waar je vandaan komt en vraag hoe het met de ander gaat.', model: "Hi! Good morning. My name is Anna and I'm from the Netherlands. I'm a student. How are you?" },
    scenario: { nl: 'Je ontmoet Jessica, een nieuwe collega uit Florida.', role: 'You are Jessica, a friendly new coworker from Miami, Florida. It is your first day at an international office in Amsterdam.', goal: 'Groet Jessica, stel jezelf voor en vraag waar ze vandaan komt.' }
  });

  /* ───────────────────────── A1 · 2 ───────────────────────── */
  U({
    id: 'en-a1-02', level: 'A1', icon: '👨‍👩‍👧', title: 'My family', nl: 'Je familie',
    goals: ['Je familie voorstellen', 'have / has en my, your, his, her gebruiken', 'Getallen tot 100 en leeftijden'],
    vocab: [
      ['mother / mom', 'moeder / mam'], ['father / dad', 'vader / pap'], ['parents', 'ouders'], ['brother', 'broer'], ['sister', 'zus'],
      ['son', 'zoon'], ['daughter', 'dochter'], ['children / kids', 'kinderen'], ['husband', 'man (echtgenoot)'], ['wife', 'vrouw (echtgenote)'],
      ['boyfriend', 'vriend (relatie)'], ['girlfriend', 'vriendin (relatie)'], ['grandmother / grandma', 'oma'], ['grandfather / grandpa', 'opa'], ['aunt', 'tante'],
      ['uncle', 'oom'], ['cousin', 'neef / nicht (kind van oom of tante)'], ['nephew', 'neefje (kind van broer of zus)'], ['niece', 'nichtje (kind van broer of zus)'], ['dog', 'hond'],
      ['cat', 'kat'], ['married', 'getrouwd'], ['single', 'vrijgezel'], ['old', 'oud'], ['young', 'jong']
    ],
    grammar: [
      { t: 'Have en has: hebben', es: 'Have / has',
        html: `<p><b>Have</b> betekent <i>hebben</i>. Bij <b>he, she, it</b> wordt het <b>has</b>:</p>
<p><i>I <b>have</b> a brother. She <b>has</b> two sisters. We <b>have</b> a dog.</i></p>
<p>Zoals je bij unit 1 zag: leeftijd zeg je met <b>to be</b>, niet met have: <i>My son <b>is</b> six.</i> Niet <s>has six years</s>.</p>`,
        table: [['', 'have'], ['I / you / we / they', 'have'], ['he / she / it', 'has']],
        sum: 'I have, you have, he has, she has.',
        ex: [['I have two brothers.', 'Ik heb twee broers.'], ['My sister has a cat.', 'Mijn zus heeft een kat.']] },
      { t: 'My, your, his, her: van wie?', es: 'Possessives',
        html: `<p>Bezittelijke voornaamwoorden: <b>my</b> (mijn), <b>your</b> (jouw/uw/jullie), <b>his</b> (zijn), <b>her</b> (haar), <b>its</b> (zijn/haar, bij dingen en dieren), <b>our</b> (ons/onze), <b>their</b> (hun).</p>
<p>Let op: <b>his</b> = van een man, <b>her</b> = van een vrouw. <i>Anna and <b>her</b> brother.</i> <i>Tom and <b>his</b> sister.</i></p>
<p>Van iemand: <b>'s</b>, net als «Jans fiets»: <i>Anna<b>'s</b> brother</i> (de broer van Anna), <i>my mom<b>'s</b> car</i>.</p>`,
        table: [['', 'Engels', 'Nederlands'], ['I', 'my', 'mijn'], ['you', 'your', 'jouw / uw / jullie'], ['he', 'his', 'zijn'], ['she', 'her', 'haar'], ['we', 'our', 'ons / onze'], ['they', 'their', 'hun']],
        ex: [["This is my sister. Her name is Lisa.", 'Dit is mijn zus. Haar naam is Lisa.'], ["Tom's dad is a doctor.", 'De vader van Tom is dokter.']] },
      { t: 'Getallen: eerst de tientallen', es: 'Numbers',
        html: `<p>Pas op met getallen boven de twintig! In het Nederlands zeg je eerst de eenheid (<i>een-en-twintig</i>), in het Engels eerst het <b>tiental</b>: <b>twenty-one</b> (twintig-een).</p>
<p>13–19 eindigen op <b>-teen</b> (thirteen, fourteen). Tientallen eindigen op <b>-ty</b> (twenty, thirty, forty). Let op het verschil in uitspraak: <i>thir<b>TEEN</b></i> (13) en <i><b>THIR</b>ty</i> (30).</p>
<p>Spelling: <b>forty</b> (niet <s>fourty</s>), en een streepje tussen tiental en eenheid: <i>forty-two</i>.</p>`,
        table: [['getal', 'Engels'], ['13 / 30', 'thirteen / thirty'], ['14 / 40', 'fourteen / forty'], ['21', 'twenty-one'], ['45', 'forty-five'], ['99', 'ninety-nine'], ['100', 'one hundred']],
        ex: [['My grandma is eighty-four.', 'Mijn oma is vierentachtig.'], ['I have twenty-one cousins!', 'Ik heb eenentwintig neven en nichten!']] }
    ],
    dialogue: {
      t: 'Family photos', place: 'Chicago 🇺🇸',
      lines: [
        ['Emily', 'Is this your family?', 'Is dit je familie?'],
        ['Bram', "Yes! This is my mom and this is my dad.", 'Ja! Dit is mijn moeder en dit is mijn vader.'],
        ['Emily', 'And who is this?', 'En wie is dit?'],
        ['Bram', "That's my sister, Femke. She's twenty-three. She has a little boy.", 'Dat is mijn zus, Femke. Ze is drieëntwintig. Ze heeft een zoontje.'],
        ['Emily', "Oh, he's so cute! What's his name?", 'O, wat schattig! Hoe heet hij?'],
        ['Bram', "His name is Jip. He's two. He's my nephew.", 'Hij heet Jip. Hij is twee. Hij is mijn neefje.'],
        ['Emily', 'Do you have brothers too?', 'Heb je ook broers?'],
        ['Bram', "No, just one sister. And a dog! His name is Bolletje.", 'Nee, alleen één zus. En een hond! Hij heet Bolletje.'],
        ['Emily', 'Bo-le-che? That’s a hard name!', 'Bo-le-tsje? Wat een moeilijke naam!']
      ],
      q: [
        { t: 'mc', q: 'How old is Femke?', o: ['23', '2', '33'] },
        { t: 'mc', q: 'Who is Jip?', o: ["Bram's nephew", "Bram's brother", "Bram's dog"] },
        { t: 'mc', q: 'Does Bram have a brother?', o: ['No, he has one sister', 'Yes, two brothers', 'Yes, one brother'] }
      ]
    },
    culture: { t: 'Gezin in Amerika', html: `<p>Amerikanen zeggen <b>mom</b> en <b>dad</b> (de Britten: <i>mum</i> en <i>dad</i>). Kinderen zeggen soms <i>mommy</i> en <i>daddy</i>.</p>
<p>Let op het verschil tussen <b>cousin</b> (kind van je oom of tante) en <b>nephew / niece</b> (kind van je broer of zus). In het Nederlands zijn het allemaal neven en nichten!</p>
<p>👨‍👩‍👧 Op Thanksgiving (eind november) komt de hele familie samen voor een groot diner met kalkoen.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ two sisters.', a: ['have'], o: ['have', 'has', 'am'], nl: 'Ik heb twee zussen.', tag: 'en-have' },
      { t: 'cloze', s: 'My brother ___ a dog.', a: ['has'], o: ['has', 'have', 'is'], nl: 'Mijn broer heeft een hond.', tag: 'en-have' },
      { t: 'cloze', s: 'Anna and ___ husband live in Leiden.', a: ['her'], o: ['her', 'his', 'she'], nl: 'Anna en haar man wonen in Leiden.', tag: 'en-poss' },
      { t: 'cloze', s: 'Tom and ___ sister are students.', a: ['his'], o: ['his', 'her', 'he'], nl: 'Tom en zijn zus zijn student.', tag: 'en-poss' },
      { t: 'cloze', s: 'We love ___ grandma.', a: ['our'], o: ['our', 'we', 'us'], nl: 'We houden van onze oma.', tag: 'en-poss' },
      { t: 'cloze', s: 'My daughter ___ seven.', a: ['is'], o: ['is', 'has', 'have'], nl: 'Mijn dochter is zeven.', tag: 'en-be' },
      { t: 'mc', q: 'Hoe zeg je 45 in het Engels?', o: ['forty-five', 'five-forty', 'fourty-five'], tag: 'en-num' },
      { t: 'mc', q: 'Het kind van je broer (een jongen) is je…', o: ['nephew', 'cousin', 'niece'], tag: 'en-poss' },
      { t: 'mc', q: '«De auto van mijn moeder» in het Engels:', o: ["my mom's car", 'the car of my mom', 'my moms car'], tag: 'en-poss' },
      { t: 'mc', q: 'Welk getal is «thirty»?', o: ['30', '13', '3'], tag: 'en-num' },
      { t: 'tr', nl: 'Mijn zus heet Lisa.', a: ["My sister's name is Lisa.", 'My sister is called Lisa.', 'My sister is Lisa.'], tag: 'en-poss' },
      { t: 'tr', nl: 'Hebben jullie kinderen?', a: ['Do you have children?', 'Do you have kids?', 'Do you have any children?', 'Do you have any kids?'], tag: 'en-have' },
      { t: 'tr', nl: 'Mijn opa is tachtig.', a: ['My grandpa is eighty.', 'My grandfather is eighty.', 'My grandpa is 80.', 'My grandfather is 80.'], tag: 'en-num' },
      { t: 'order', s: 'This is my brother and his wife.', nl: 'Dit is mijn broer en zijn vrouw.', tag: 'en-poss' },
      { t: 'match', p: [['aunt', 'tante'], ['uncle', 'oom'], ['daughter', 'dochter'], ['parents', 'ouders'], ['wife', 'vrouw (echtgenote)']], tag: 'en-poss' }
    ],
    reading: {
      t: 'Meet the Bakker family', type: 'Blog',
      p: [
        ["Hi, I'm Lotte. I'm 35 and I live in Haarlem with my husband, Erik, and our two kids.", 'Hoi, ik ben Lotte. Ik ben 35 en ik woon in Haarlem met mijn man, Erik, en onze twee kinderen.'],
        ["Our son, Thijs, is eight, and our daughter, Noor, is five. Thijs has a lot of friends. Noor has a cat. Its name is Mies.", 'Onze zoon, Thijs, is acht, en onze dochter, Noor, is vijf. Thijs heeft veel vrienden. Noor heeft een kat. Hij heet Mies.'],
        ["My parents live in Zwolle. My sister lives in New York with her American husband. Their apartment is very small, but the view is great!", 'Mijn ouders wonen in Zwolle. Mijn zus woont in New York met haar Amerikaanse man. Hun appartement is heel klein, maar het uitzicht is geweldig!']
      ],
      gl: [['a lot of', 'veel'], ['apartment', 'appartement'], ['the view', 'het uitzicht']],
      q: [
        { t: 'mc', q: 'How many children does Lotte have?', o: ['Two', 'One', 'Three'] },
        { t: 'mc', q: 'Who has a cat?', o: ['Noor', 'Thijs', 'Erik'] },
        { t: 'mc', q: "Where does Lotte's sister live?", o: ['In New York', 'In Zwolle', 'In Haarlem'] }
      ]
    },
    say: [['This is my family.', 'Dit is mijn familie.'], ['I have one brother and two sisters.', 'Ik heb één broer en twee zussen.'], ['My mom is fifty-two.', 'Mijn moeder is tweeënvijftig.'], ["Her name is Femke.", 'Zij heet Femke.']],
    task: { nl: 'Beschrijf je familie in 4 of 5 zinnen: wie zijn er, hoe heten ze en hoe oud zijn ze? Gebruik have/has en my/his/her.', model: "I have a small family. My mom's name is Ellen and she's fifty-eight. My dad is sixty. I have one sister. Her name is Femke and she has a little boy." },
    scenario: { nl: 'Je laat foto’s van je familie zien aan een Amerikaanse vriendin.', role: 'You are Emily, a curious and friendly American from Chicago. The learner shows you photos of their family on their phone. Ask simple questions: who is this, what is his/her name, how old is he/she.', goal: 'Vertel over je familie in je rol (verzin gerust namen): namen, leeftijden en wie wie is.' }
  });

  /* ───────────────────────── A1 · 3 ───────────────────────── */
  U({
    id: 'en-a1-03', level: 'A1', icon: '🍔', title: 'Food and drinks', nl: 'Eten en drinken',
    goals: ['Eten en drinken bestellen', 'a, an en the gebruiken', 'Zeggen wat je wel en niet lekker vindt: like / don’t like'],
    vocab: [
      ['water', 'water'], ['coffee', 'koffie'], ['tea', 'thee'], ['milk', 'melk'], ['juice', 'sap'],
      ['beer', 'bier'], ['wine', 'wijn'], ['bread', 'brood'], ['cheese', 'kaas'], ['egg', 'ei'],
      ['apple', 'appel'], ['banana', 'banaan'], ['chicken', 'kip'], ['fish', 'vis'], ['rice', 'rijst'],
      ['fries', 'patat'], ['salad', 'salade'], ['breakfast', 'ontbijt'], ['lunch', 'lunch'], ['dinner', 'avondeten'],
      ['the check', 'de rekening'], ["I'd like…", 'Ik wil graag…'], ['delicious', 'heerlijk'], ['hungry', 'hongerig'], ['thirsty', 'dorstig']
    ],
    grammar: [
      { t: 'A, an en the', es: 'Articles',
        html: `<p><b>a / an</b> = een. Gebruik <b>an</b> vóór een <b>klinkerklank</b>: <i><b>an</b> apple, <b>an</b> egg, <b>an</b> hour</i> (de h is stom). Anders <b>a</b>: <i><b>a</b> banana, <b>a</b> university</i> (klinkt als «joe»).</p>
<p><b>the</b> = de én het. Fijn: in het Engels hoef je niet te kiezen tussen de en het!</p>
<p>Let op: bij beroepen gebruik je wél <b>a</b>, anders dan in het Nederlands: <i>She is <b>a</b> doctor.</i> (Zij is dokter.)</p>`,
        table: [['Nederlands', 'Engels'], ['een banaan', 'a banana'], ['een appel', 'an apple'], ['de kaas / het brood', 'the cheese / the bread'], ['Zij is lerares.', 'She is a teacher.']],
        sum: 'a banana, an apple, the cheese.',
        ex: [["I'd like an orange juice, please.", 'Ik wil graag een jus d’orange.'], ['My brother is a cook.', 'Mijn broer is kok.']] },
      { t: 'Like en don’t like', es: 'Likes and dislikes',
        html: `<p><b>I like</b> = ik vind … lekker / leuk. <b>I don't like</b> = ik vind … niet lekker.</p>
<p>Bij he/she/it krijgt het werkwoord een <b>-s</b>: <i>She <b>likes</b> fish.</i> Ontkennend: <i>She <b>doesn't like</b> fish</i> (dan géén -s meer bij like).</p>
<p>Iets in het algemeen: geen the. <i>I like coffee.</i> (koffie in het algemeen) Niet <s>I like the coffee</s>, tenzij je een bepaalde koffie bedoelt.</p>
<p>Beleefd bestellen: <b>I'd like</b> (= I would like) = ik wil graag. Dat is beleefder dan <i>I want</i>.</p>`,
        table: [['', 'bevestigend', 'ontkennend'], ['I / you / we / they', 'like', "don't like"], ['he / she / it', 'likes', "doesn't like"]],
        ex: [["I like cheese, but I don't like milk.", 'Ik houd van kaas, maar ik vind melk niet lekker.'], ["My dad doesn't like spicy food.", 'Mijn vader houdt niet van pittig eten.']] },
      { t: 'Meervoud: -s en -es', es: 'Plurals',
        html: `<p>Meestal maak je een meervoud met <b>-s</b>: <i>egg → eggs, apple → apples</i>.</p>
<p>Na -s, -sh, -ch, -x en soms -o: <b>-es</b>: <i>glass → glasses, sandwich → sandwiches, potato → potatoes</i>. Medeklinker + y → <b>-ies</b>: <i>cherry → cherries</i>.</p>
<p>Onregelmatig: <i>child → children, man → men, woman → women, person → people, fish → fish</i>.</p>
<p>Sommige woorden hebben geen meervoud: <i>water, bread, rice, milk</i>. Je zegt <i>some bread</i> of <i>a piece of bread</i>.</p>`,
        table: [['enkelvoud', 'meervoud'], ['an egg', 'two eggs'], ['a sandwich', 'two sandwiches'], ['a cherry', 'cherries'], ['a child', 'children'], ['a person', 'people']],
        ex: [['Two coffees, please.', 'Twee koffie, alstublieft.'], ['The children like fries.', 'De kinderen houden van patat.']] }
    ],
    dialogue: {
      t: 'At a diner', place: 'New York 🇺🇸',
      lines: [
        ['Waiter', "Hi there! What can I get you?", 'Hallo! Wat mag ik voor jullie brengen?'],
        ['Joost', "Hi. I'd like a coffee and a cheese sandwich, please.", 'Hoi. Ik wil graag een koffie en een broodje kaas.'],
        ['Waiter', 'Sure. And for you?', 'Natuurlijk. En voor jou?'],
        ['Iris', "I'd like an orange juice and the chicken salad.", 'Ik wil graag een jus d’orange en de kipsalade.'],
        ['Waiter', 'Any fries with that?', 'Wil je er patat bij?'],
        ['Iris', "No, thanks. I don't like fries.", 'Nee, dank je. Ik houd niet van patat.'],
        ['Joost', "Really? I love fries! With mayo, please.", 'Echt? Ik ben dol op patat! Met mayo, graag.'],
        ['Waiter', 'Mayo? On fries? Okay… Coming right up!', 'Mayo? Op patat? Oké… Komt eraan!'],
        ['Iris', 'Excuse me, can we have the check, please?', 'Pardon, mogen we de rekening?']
      ],
      q: [
        { t: 'mc', q: 'What does Joost order?', o: ['A coffee and a cheese sandwich', 'An orange juice', 'The chicken salad'] },
        { t: 'mc', q: "Why doesn't Iris want fries?", o: ["She doesn't like fries", "She isn't hungry", 'They are expensive'] },
        { t: 'mc', q: 'What does Joost want with his fries?', o: ['Mayo', 'Ketchup', 'Cheese'] }
      ]
    },
    culture: { t: 'Uit eten in de VS', html: `<p>In Amerikaanse restaurants krijg je meestal gratis <b>ijswater</b>, en je koffie wordt vaak gratis bijgevuld (<i>free refills</i>).</p>
<p>De rekening heet <b>the check</b> (Brits: <i>the bill</i>). Je betaalt aan tafel, en <b>fooi</b> (<i>tip</i>) is bijna verplicht: 15 tot 20 procent. Bedienend personeel verdient er een groot deel van hun loon mee.</p>
<p>🍟 Patat heet <b>fries</b> (Brits: <i>chips</i>). Mayonaise op patat vinden Amerikanen vreemd: zij nemen ketchup.</p>` },
    ex: [
      { t: 'cloze', s: "I'd like ___ apple, please.", a: ['an'], o: ['an', 'a', 'the'], nl: 'Ik wil graag een appel.', tag: 'en-art' },
      { t: 'cloze', s: 'She is ___ doctor.', a: ['a'], o: ['a', 'an', '—'], nl: 'Zij is dokter.', x: 'Bij beroepen gebruik je in het Engels a/an.', tag: 'en-art' },
      { t: 'cloze', s: 'I ___ like fish.', a: ["don't"], o: ["don't", "doesn't", 'not'], nl: 'Ik houd niet van vis.', tag: 'en-like' },
      { t: 'cloze', s: 'My sister ___ cheese.', a: ['likes'], o: ['likes', 'like', 'liking'], nl: 'Mijn zus houdt van kaas.', tag: 'en-like' },
      { t: 'cloze', s: "He doesn't ___ coffee.", a: ['like'], o: ['like', 'likes', 'liking'], nl: 'Hij houdt niet van koffie.', tag: 'en-like' },
      { t: 'cloze', s: 'Two ___, please.', a: ['sandwiches'], o: ['sandwiches', 'sandwichs', 'sandwich'], nl: 'Twee broodjes, alstublieft.', tag: 'en-plural' },
      { t: 'mc', q: 'Wat is het meervoud van «child»?', o: ['children', 'childs', 'childes'], tag: 'en-plural' },
      { t: 'mc', q: 'Hoe vraag je om de rekening in de VS?', o: ['Can we have the check, please?', 'Can we have the count, please?', 'The money, please.'], tag: 'en-art' },
      { t: 'mc', q: 'Welke is beleefd?', o: ["I'd like a tea, please.", 'I want tea.', 'Give me tea.'], tag: 'en-like' },
      { t: 'mc', q: '«an hour» of «a hour»?', o: ['an hour', 'a hour', 'the hour of'], x: 'De h in hour spreek je niet uit.', tag: 'en-art' },
      { t: 'tr', nl: 'Ik houd van koffie.', a: ['I like coffee.', 'I love coffee.'], tag: 'en-like' },
      { t: 'tr', nl: 'Ik wil graag een thee, alstublieft.', a: ["I'd like a tea, please.", "I'd like a cup of tea, please.", 'I would like a tea, please.', "I'd like some tea, please."], tag: 'en-like' },
      { t: 'tr', nl: 'Hij vindt vis niet lekker.', a: ["He doesn't like fish.", 'He does not like fish.'], tag: 'en-like' },
      { t: 'order', s: "I'd like a coffee and an egg sandwich.", nl: 'Ik wil graag een koffie en een broodje ei.', tag: 'en-art' },
      { t: 'match', p: [['bread', 'brood'], ['cheese', 'kaas'], ['chicken', 'kip'], ['juice', 'sap'], ['fries', 'patat'], ['the check', 'de rekening']], tag: 'en-art' }
    ],
    reading: {
      t: 'The Sunrise Diner', type: 'Menukaart',
      p: [
        ["BREAKFAST (6 a.m. to 11 a.m.): Two eggs, toast and coffee: $9. Pancakes with fruit: $11. Free coffee refills!", 'ONTBIJT (6 tot 11 uur ’s ochtends): Twee eieren, toast en koffie: $9. Pannenkoeken met fruit: $11. Gratis koffie bijvullen!'],
        ["LUNCH (11 a.m. to 4 p.m.): Cheeseburger and fries: $14. Chicken salad: $12. Soup of the day: $7.", 'LUNCH (11 tot 4 uur): Cheeseburger met patat: $14. Kipsalade: $12. Soep van de dag: $7.'],
        ["DRINKS: Coffee, tea: $3. Orange juice: $4. Milkshake: $6. All prices do not include tax and tip.", 'DRANKEN: Koffie, thee: $3. Jus d’orange: $4. Milkshake: $6. Alle prijzen zijn exclusief belasting en fooi.']
      ],
      gl: [['pancakes', 'pannenkoeken'], ['soup of the day', 'soep van de dag'], ['tax', 'belasting']],
      q: [
        { t: 'mc', q: 'How much is the chicken salad?', o: ['$12', '$14', '$9'] },
        { t: 'mc', q: 'When is breakfast?', o: ['From 6 a.m. to 11 a.m.', 'From 11 a.m. to 4 p.m.', 'All day'] },
        { t: 'mc', q: 'What is free?', o: ['Coffee refills', 'Orange juice', 'The tip'] }
      ]
    },
    say: [["I'd like a coffee, please.", 'Ik wil graag een koffie.'], ["I don't like fish.", 'Ik houd niet van vis.'], ['Can we have the check, please?', 'Mogen we de rekening?'], ['This is delicious!', 'Dit is heerlijk!']],
    task: { nl: 'Schrijf 4 zinnen over wat je graag eet en drinkt en wat je niet lekker vindt. Gebruik like/don’t like en a/an.', model: "I like coffee and I love cheese. I don't like milk. For breakfast I have bread and an egg. My husband likes fish, but I don't." },
    scenario: { nl: 'Je bestelt eten in een Amerikaanse diner.', role: 'You are Jenny, a cheerful waitress at a classic American diner in New York. Take the learner’s order: drinks, food, side dishes. Ask simple questions and offer refills. At the end, bring the check.', goal: 'Bestel een drankje en iets te eten en vraag om de rekening.' }
  });

  /* ───────────────────────── A1 · 4 ───────────────────────── */
  U({
    id: 'en-a1-04', level: 'A1', icon: '⏰', title: 'My day', nl: 'Je dagelijkse routine',
    goals: ['Je dag beschrijven met de present simple', 'Vragen stellen met do / does', 'Klokkijken: half past, quarter to'],
    vocab: [
      ['to wake up', 'wakker worden'], ['to get up', 'opstaan'], ['to take a shower', 'douchen'], ['to get dressed', 'je aankleden'], ['to have breakfast', 'ontbijten'],
      ['to go to work', 'naar je werk gaan'], ['to start', 'beginnen'], ['to finish', 'eindigen / afmaken'], ['to come home', 'thuiskomen'], ['to cook', 'koken'],
      ['to watch TV', 'tv kijken'], ['to go to bed', 'naar bed gaan'], ['every day', 'elke dag'], ['always', 'altijd'], ['usually', 'meestal'],
      ['often', 'vaak'], ['sometimes', 'soms'], ['never', 'nooit'], ['in the morning', '’s ochtends'], ['in the evening', '’s avonds'],
      ['at night', '’s nachts'], ['What time is it?', 'Hoe laat is het?'], ["o'clock", 'uur'], ['half past', 'half (… over)'], ['a quarter to', 'kwart voor']
    ],
    grammar: [
      { t: 'Present simple: wat je altijd of vaak doet', es: 'Present simple',
        html: `<p>De <b>present simple</b> gebruik je voor gewoontes en dingen die altijd zo zijn: <i>I <b>work</b> in Amsterdam. I <b>get up</b> at seven.</i></p>
<p>Bij <b>he, she, it</b> komt er een <b>-s</b> bij: <i>She <b>works</b>. He <b>gets up</b>. It <b>starts</b> at nine.</i> Na -sh, -ch, -o: <b>-es</b>: <i>watches, goes, does</i>. <i>have</i> → <b>has</b>.</p>
<p>Dit is de meest gemaakte fout, ook door gevorderden: vergeet de <b>-s</b> niet!</p>
<p>Woorden als <b>always, usually, often, never</b> staan <b>vóór</b> het werkwoord: <i>I <b>always</b> drink coffee.</i> Niet <s>I drink always coffee</s> (zoals in het Nederlands).</p>`,
        table: [['', 'werken', 'gaan'], ['I / you / we / they', 'work', 'go'], ['he / she / it', 'works', 'goes']],
        sum: 'I work, she works. I go, he goes.',
        ex: [['I usually get up at seven.', 'Ik sta meestal om zeven uur op.'], ['My husband works from home.', 'Mijn man werkt thuis.']] },
      { t: 'Vragen en ontkenningen met do / does', es: 'Do / does',
        html: `<p>Het Nederlands zet het werkwoord gewoon vooraan: <i>Werk jij hier?</i> Het Engels gebruikt een hulpwerkwoord: <b>do</b> (of <b>does</b> bij he/she/it).</p>
<p>Vraag: <i><b>Do</b> you work here? <b>Does</b> she like tea?</i> Niet <s>Work you here?</s></p>
<p>Ontkenning: <i>I <b>don't</b> work on Fridays. He <b>doesn't</b> eat meat.</i> Niet <s>I work not</s>.</p>
<p>Na <i>does / doesn't</i> valt de <b>-s</b> weg: <i>Does she <b>work</b>?</i> (niet <s>works</s>)</p>`,
        table: [['', 'vraag', 'ontkenning'], ['I / you / we / they', 'Do you work?', "I don't work."], ['he / she / it', 'Does she work?', "She doesn't work."]],
        ex: [['What time do you start work?', 'Hoe laat begin je met werken?'], ["She doesn't drink coffee in the evening.", 'Ze drinkt ’s avonds geen koffie.']] },
      { t: 'Klokkijken: let op «half»!', es: 'Telling the time',
        html: `<p>Hele uren: <i>It's seven <b>o'clock</b>.</i> Kwartier: <i>a quarter <b>past</b> seven</i> (7:15), <i>a quarter <b>to</b> eight</i> (7:45).</p>
<p>⚠️ Grote valkuil: in het Nederlands is <i>half acht</i> = 7:30. In het Engels is het <b>half past seven</b> (half over zeven). Britten zeggen soms <i>half seven</i>, en dat betekent dan 7:30, niet 6:30!</p>
<p>Amerikanen zeggen tijden vaak gewoon digitaal: <i>seven thirty</i>, <i>seven forty-five</i>. Gebruik <b>a.m.</b> (ochtend) en <b>p.m.</b> (middag/avond) in plaats van 24-uurstijd: <i>8 p.m.</i> = 20:00.</p>`,
        table: [['tijd', 'Engels', 'digitaal (VS)'], ['7:00', "seven o'clock", 'seven'], ['7:15', 'a quarter past seven', 'seven fifteen'], ['7:30', 'half past seven', 'seven thirty'], ['7:45', 'a quarter to eight', 'seven forty-five'], ['20:00', '8 p.m.', 'eight p.m.']],
        ex: [["The meeting starts at ten thirty.", 'De vergadering begint om half elf.'], ['I go to bed at eleven p.m.', 'Ik ga om 23:00 uur naar bed.']] }
    ],
    dialogue: {
      t: 'A busy day', place: 'Seattle 🇺🇸',
      lines: [
        ['Kevin', 'You look tired! What time do you get up?', 'Je ziet er moe uit! Hoe laat sta je op?'],
        ['Mirjam', 'At five thirty. I start work at seven.', 'Om half zes. Ik begin om zeven uur met werken.'],
        ['Kevin', 'Wow, early! Do you take the bus?', 'Wauw, vroeg! Neem je de bus?'],
        ['Mirjam', 'No, I bike. I always bike to work. I’m Dutch!', 'Nee, ik fiets. Ik fiets altijd naar mijn werk. Ik ben Nederlands!'],
        ['Kevin', 'Even in the rain?', 'Zelfs in de regen?'],
        ['Mirjam', 'Yes, even in the rain. What about you?', 'Ja, zelfs in de regen. En jij?'],
        ['Kevin', "I drive. I usually get up at eight and I start at nine.", 'Ik rijd. Ik sta meestal om acht uur op en ik begin om negen uur.'],
        ['Mirjam', 'And what do you do in the evening?', 'En wat doe je ’s avonds?'],
        ['Kevin', 'I cook dinner and watch TV. I never go to bed before midnight.', 'Ik kook en kijk tv. Ik ga nooit voor middernacht naar bed.']
      ],
      q: [
        { t: 'mc', q: 'What time does Mirjam get up?', o: ['At five thirty', 'At seven', 'At eight'] },
        { t: 'mc', q: 'How does Mirjam go to work?', o: ['She bikes', 'She drives', 'She takes the bus'] },
        { t: 'mc', q: 'What does Kevin do in the evening?', o: ['He cooks and watches TV', 'He bikes', 'He goes to bed early'] }
      ]
    },
    culture: { t: 'Fietsen en forenzen', html: `<p>In de meeste Amerikaanse steden gaat iedereen met de <b>auto</b> naar het werk (<i>to commute</i> = forenzen). Fietsen naar je werk is in steden als Portland, Seattle en Minneapolis wel in opkomst.</p>
<p>Amerikanen beginnen vaak vroeg (8 of 9 uur) en eten hun lunch snel, soms achter hun bureau. Het avondeten (<i>dinner</i>) is rond 6 uur.</p>
<p>⏰ Let op het verschil: in de VS gebruik je <b>a.m.</b> en <b>p.m.</b>, bijna nooit de 24-uursklok. 24-uurstijd heet daar <i>military time</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'She ___ at a hospital.', a: ['works'], o: ['works', 'work', 'working'], nl: 'Ze werkt in een ziekenhuis.', tag: 'en-ps' },
      { t: 'cloze', s: 'He ___ to bed at eleven.', a: ['goes'], o: ['goes', 'go', 'gos'], nl: 'Hij gaat om elf uur naar bed.', tag: 'en-ps' },
      { t: 'cloze', s: '___ you work on Saturdays?', a: ['Do'], o: ['Do', 'Does', 'Are'], nl: 'Werk je op zaterdag?', tag: 'en-do' },
      { t: 'cloze', s: '___ your brother like his job?', a: ['Does'], o: ['Does', 'Do', 'Is'], nl: 'Vindt je broer zijn baan leuk?', tag: 'en-do' },
      { t: 'cloze', s: "I ___ eat breakfast. I'm never hungry.", a: ["don't"], o: ["don't", "doesn't", 'not'], nl: 'Ik ontbijt niet. Ik heb nooit honger.', tag: 'en-do' },
      { t: 'cloze', s: 'I ___ drink coffee in the morning.', a: ['always'], o: ['always', 'never not', 'all time'], nl: 'Ik drink ’s ochtends altijd koffie.', tag: 'en-ps' },
      { t: 'mc', q: 'Hoe laat is «half past eight»?', o: ['8:30', '7:30', '8:15'], tag: 'en-time' },
      { t: 'mc', q: 'Hoe zeg je «Werk jij hier?»', o: ['Do you work here?', 'Work you here?', 'Are you work here?'], tag: 'en-do' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I usually get up at seven.', 'I get up usually at seven.', 'Usually I get at seven up.'], tag: 'en-order' },
      { t: 'mc', q: '«Kwart voor negen» in het Engels:', o: ['a quarter to nine', 'a quarter for nine', 'a quarter past nine'], tag: 'en-time' },
      { t: 'tr', nl: 'Hoe laat is het?', a: ['What time is it?', "What's the time?"], tag: 'en-time' },
      { t: 'tr', nl: 'Ze drinkt geen koffie.', a: ["She doesn't drink coffee.", 'She does not drink coffee.'], tag: 'en-do' },
      { t: 'tr', nl: 'Ik sta om zeven uur op.', a: ['I get up at seven.', "I get up at seven o'clock.", 'I get up at 7.'], tag: 'en-ps' },
      { t: 'order', s: 'What time does the store open?', nl: 'Hoe laat gaat de winkel open?', tag: 'en-do' },
      { t: 'match', p: [['always', 'altijd'], ['never', 'nooit'], ['sometimes', 'soms'], ['usually', 'meestal'], ['often', 'vaak']], tag: 'en-ps' }
    ],
    reading: {
      t: 'A day in the life of a nurse', type: 'Interview',
      p: [
        ["Maria is a nurse in Houston. She works at night, from 7 p.m. to 7 a.m., three days a week.", 'Maria is verpleegkundige in Houston. Ze werkt ’s nachts, van 19:00 tot 07:00 uur, drie dagen per week.'],
        ["After work, she comes home and sleeps until two in the afternoon. Then she has breakfast. «Yes, breakfast at two p.m.!» she laughs.", 'Na haar werk komt ze thuis en slaapt ze tot twee uur ’s middags. Dan ontbijt ze. «Ja, ontbijt om twee uur ’s middags!» lacht ze.'],
        ["On her days off, she goes to the gym and visits her parents. She never works on Sundays.", 'Op haar vrije dagen gaat ze naar de sportschool en bezoekt ze haar ouders. Ze werkt nooit op zondag.']
      ],
      gl: [['a nurse', 'een verpleegkundige'], ['until', 'tot'], ['days off', 'vrije dagen']],
      q: [
        { t: 'mc', q: 'When does Maria work?', o: ['At night', 'In the morning', 'In the afternoon'] },
        { t: 'mc', q: 'What time does she have breakfast?', o: ['At two p.m.', 'At seven a.m.', 'At seven p.m.'] },
        { t: 'mc', q: 'What does she never do?', o: ['Work on Sundays', 'Visit her parents', 'Go to the gym'] }
      ]
    },
    say: [['I get up at seven.', 'Ik sta om zeven uur op.'], ['She works in an office.', 'Ze werkt op een kantoor.'], ['Do you work on Fridays?', 'Werk je op vrijdag?'], ["It's half past eight.", 'Het is half negen.']],
    task: { nl: 'Beschrijf je gewone dag in 5 zinnen: hoe laat je opstaat, wat je doet en wanneer je naar bed gaat. Gebruik always/usually/never en schrijf één zin over iemand anders (met -s!).', model: "I usually get up at half past six. I always have coffee and bread for breakfast. I bike to work and I start at eight thirty. In the evening I cook and watch TV. My partner works from home and never gets up before eight." },
    scenario: { nl: 'Een Amerikaanse collega vraagt naar je dagelijkse routine.', role: 'You are Kevin, a friendly coworker from Seattle. Ask the learner about their daily routine: when they get up, how they go to work, what they do in the evening. Share your own routine too. Use simple present tense questions.', goal: 'Vertel over je dag en stel zelf vragen met do/does.' }
  });

  /* ───────────────────────── A1 · 5 ───────────────────────── */
  U({
    id: 'en-a1-05', level: 'A1', icon: '🏙️', title: 'In the city', nl: 'In de stad',
    goals: ['Vragen waar iets is en de weg wijzen', 'there is / there are gebruiken', 'Voorzetsels van plaats: next to, between, across from'],
    vocab: [
      ['street', 'straat'], ['avenue', 'laan / avenue'], ['corner', 'hoek'], ['block', 'blok (huizenblok)'], ['traffic light', 'stoplicht'],
      ['bank', 'bank'], ['pharmacy / drugstore', 'apotheek / drogist'], ['supermarket / grocery store', 'supermarkt'], ['museum', 'museum'], ['park', 'park'],
      ['train station', 'treinstation'], ['subway', 'metro'], ['bus stop', 'bushalte'], ['hotel', 'hotel'], ['restaurant', 'restaurant'],
      ['restroom', 'wc (in een openbaar gebouw)'], ['to turn left', 'linksaf slaan'], ['to turn right', 'rechtsaf slaan'], ['to go straight', 'rechtdoor gaan'], ['next to', 'naast'],
      ['across from', 'tegenover'], ['between', 'tussen'], ['near', 'dichtbij'], ['far', 'ver'], ['Where is…?', 'Waar is…?']
    ],
    grammar: [
      { t: 'There is / there are: er is, er zijn', es: 'There is / there are',
        html: `<p><b>There is</b> (er is) gebruik je bij één ding, <b>there are</b> (er zijn) bij meer dingen:</p>
<p><i><b>There's</b> a bank on the corner. <b>There are</b> two museums near here.</i></p>
<p>Vraag: <i><b>Is there</b> a pharmacy near here? <b>Are there</b> any restaurants?</i></p>
<p>Ontkenning: <i><b>There isn't</b> a subway. <b>There aren't</b> any hotels.</i></p>
<p>Let op: zeg niet <s>It has a bank</s> of <s>It gives a bank</s>, zoals in sommige andere talen.</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['bevestigend', "There's a park.", 'There are two parks.'], ['vraag', 'Is there a park?', 'Are there any parks?'], ['ontkennend', "There isn't a park.", "There aren't any parks."]],
        sum: "There's a bank. There are two parks. Is there a subway?",
        ex: [['Is there a supermarket near here?', 'Is er een supermarkt hier in de buurt?'], ['There are a lot of tourists in Times Square.', 'Er zijn veel toeristen op Times Square.']] },
      { t: 'Voorzetsels van plaats', es: 'Prepositions of place',
        html: `<p><b>next to</b> = naast. <b>across from</b> = tegenover (Brits ook: <i>opposite</i>). <b>between</b> = tussen. <b>on the corner</b> = op de hoek. <b>near</b> = dichtbij.</p>
<p><b>on</b> + straat: <i>The hotel is <b>on</b> Main Street.</i> (Brits soms: <i>in</i>.) <b>at</b> + precies adres: <i><b>at</b> 25 Main Street</i>.</p>
<p><b>in</b> + stad, land of gebouw: <i><b>in</b> New York, <b>in</b> the museum</i>.</p>`,
        table: [['Engels', 'Nederlands', 'voorbeeld'], ['next to', 'naast', 'next to the bank'], ['across from', 'tegenover', 'across from the park'], ['between', 'tussen', 'between the hotel and the bank'], ['on', 'in (straat)', 'on Fifth Avenue'], ['at', 'op (adres)', 'at 10 Main Street']],
        ex: [['The pharmacy is next to the bank.', 'De apotheek is naast de bank.'], ['The museum is on Fifth Avenue, across from the park.', 'Het museum is aan Fifth Avenue, tegenover het park.']] },
      { t: 'De weg wijzen: de gebiedende wijs', es: 'Imperative',
        html: `<p>Instructies geef je met het <b>kale werkwoord</b>, zonder onderwerp: <i><b>Go</b> straight. <b>Turn</b> left. <b>Take</b> the subway.</i></p>
<p>Ontkennend: <b>Don't</b> + werkwoord: <i><b>Don't</b> turn right.</i></p>
<p>Beleefd vragen: <i><b>Excuse me</b>, how do I get to the station?</i> of <i>Could you tell me where the museum is?</i></p>
<p>In Amerikaanse steden tel je vaak <b>blocks</b>: <i>Go straight for two blocks, then turn left.</i></p>`,
        table: [['Engels', 'Nederlands'], ['Go straight.', 'Ga rechtdoor.'], ['Turn left / right.', 'Sla linksaf / rechtsaf.'], ['Take the first right.', 'Neem de eerste rechts.'], ["It's on your left.", 'Het is aan je linkerhand.'], ["Don't cross the street.", 'Steek de straat niet over.']],
        ex: [['Go straight for two blocks and turn right.', 'Ga twee blokken rechtdoor en sla rechtsaf.'], ["It's on your left, next to the bank.", 'Het is aan je linkerhand, naast de bank.']] }
    ],
    dialogue: {
      t: 'Lost in Manhattan', place: 'New York 🇺🇸',
      lines: [
        ['Ruben', 'Excuse me, is there a subway station near here?', 'Pardon, is er hier in de buurt een metrostation?'],
        ['Woman', 'Yes, there is. Go straight for two blocks.', 'Ja. Ga twee blokken rechtdoor.'],
        ['Ruben', 'Two blocks. Okay.', 'Twee blokken. Oké.'],
        ['Woman', "Then turn left on Lexington Avenue. The station is on the corner, next to a Starbucks.", 'Sla dan linksaf Lexington Avenue in. Het station is op de hoek, naast een Starbucks.'],
        ['Ruben', 'Thank you! And is there a pharmacy near here too?', 'Dank u! En is er hier ook een apotheek in de buurt?'],
        ['Woman', "There's a drugstore across from the station.", 'Er is een drogist tegenover het station.'],
        ['Ruben', 'Great. Is it far?', 'Top. Is het ver?'],
        ['Woman', "No, it's about five minutes. Have a nice day!", 'Nee, ongeveer vijf minuten. Fijne dag!'],
        ['Ruben', 'You too. Thanks a lot!', 'Jij ook. Heel erg bedankt!']
      ],
      q: [
        { t: 'mc', q: 'Where is the subway station?', o: ['On the corner, next to a Starbucks', 'Across from the park', 'Next to the pharmacy'] },
        { t: 'mc', q: 'Where is the drugstore?', o: ['Across from the station', 'Next to Starbucks', 'Two blocks away'] },
        { t: 'mc', q: 'How far is it?', o: ['About five minutes', 'About fifty minutes', 'Two hours'] }
      ]
    },
    culture: { t: 'Blocks, streets en avenues', html: `<p>Veel Amerikaanse steden zijn gebouwd als een <b>raster</b> (<i>grid</i>). In Manhattan lopen de <b>avenues</b> van noord naar zuid en de <b>streets</b> van oost naar west. Afstanden tel je in <b>blocks</b>.</p>
<p>Een openbare wc heet <b>restroom</b> of <b>bathroom</b>, niet <i>toilet</i> (dat is de pot zelf). Vraag dus: <i>Excuse me, where's the restroom?</i></p>
<p>🚶 Amerikanen steken over bij het stoplicht. Door rood lopen (<i>jaywalking</i>) is in sommige steden verboden.</p>` },
    ex: [
      { t: 'cloze', s: "___ a bank on the corner.", a: ["There's"], o: ["There's", "It's", 'Has'], nl: 'Er is een bank op de hoek.', tag: 'en-there' },
      { t: 'cloze', s: 'There ___ three hotels on this street.', a: ['are'], o: ['are', 'is', 'be'], nl: 'Er zijn drie hotels in deze straat.', tag: 'en-there' },
      { t: 'cloze', s: '___ there a restroom here?', a: ['Is'], o: ['Is', 'Are', 'Has'], nl: 'Is er hier een wc?', tag: 'en-there' },
      { t: 'cloze', s: 'The café is ___ to the museum.', a: ['next'], o: ['next', 'near to', 'beside of'], nl: 'Het café is naast het museum.', tag: 'en-prep' },
      { t: 'cloze', s: 'The hotel is ___ Main Street.', a: ['on'], o: ['on', 'at', 'by'], nl: 'Het hotel is in Main Street.', tag: 'en-prep' },
      { t: 'cloze', s: '___ left at the traffic light.', a: ['Turn'], o: ['Turn', 'Turns', 'You turn to'], nl: 'Sla linksaf bij het stoplicht.', tag: 'en-imp' },
      { t: 'mc', q: '«Tegenover het park» in het Engels:', o: ['across from the park', 'against the park', 'opposite of the park'], tag: 'en-prep' },
      { t: 'mc', q: 'Hoe vraag je waar de wc is in een restaurant?', o: ["Where's the restroom?", "Where's the toilet room?", 'Where is the WC?'], tag: 'en-q' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["There aren't any hotels here.", "It doesn't have hotels here.", "There isn't any hotels here."], tag: 'en-there' },
      { t: 'mc', q: '«Ga rechtdoor» in het Engels:', o: ['Go straight.', 'Go right.', 'Go direct.'], tag: 'en-imp' },
      { t: 'tr', nl: 'Is er een supermarkt in de buurt?', a: ['Is there a supermarket near here?', 'Is there a supermarket nearby?', 'Is there a grocery store near here?', 'Is there a grocery store nearby?'], tag: 'en-there' },
      { t: 'tr', nl: 'Sla rechtsaf.', a: ['Turn right.'], tag: 'en-imp' },
      { t: 'tr', nl: 'De bank is tussen het hotel en het park.', a: ['The bank is between the hotel and the park.'], tag: 'en-prep' },
      { t: 'order', s: 'Excuse me, where is the train station?', nl: 'Pardon, waar is het treinstation?', tag: 'en-q' },
      { t: 'match', p: [['near', 'dichtbij'], ['far', 'ver'], ['corner', 'hoek'], ['subway', 'metro'], ['bus stop', 'bushalte']], tag: 'en-prep' }
    ],
    reading: {
      t: 'Welcome to Maple Street', type: 'Folder voor nieuwe bewoners',
      p: [
        ["Welcome to the neighborhood! Maple Street is a quiet street with a lot of trees. There is a small park at the end of the street.", 'Welkom in de buurt! Maple Street is een rustige straat met veel bomen. Er is een klein park aan het eind van de straat.'],
        ["There is a grocery store on the corner of Maple and Oak. Next to the grocery store there is a pharmacy, and across from it there's a great coffee shop.", 'Er is een supermarkt op de hoek van Maple en Oak. Naast de supermarkt is een apotheek, en daar tegenover zit een geweldig koffietentje.'],
        ["The bus stop is between the library and the bank. Bus 12 goes downtown every fifteen minutes. There isn't a subway here.", 'De bushalte is tussen de bibliotheek en de bank. Bus 12 gaat elk kwartier naar het centrum. Er is hier geen metro.']
      ],
      gl: [['neighborhood', 'buurt'], ['quiet', 'rustig'], ['downtown', 'het centrum']],
      q: [
        { t: 'mc', q: 'Where is the pharmacy?', o: ['Next to the grocery store', 'Across from the park', 'Between the library and the bank'] },
        { t: 'mc', q: 'How often does bus 12 go downtown?', o: ['Every fifteen minutes', 'Every hour', 'Every five minutes'] },
        { t: 'mc', q: 'Is there a subway?', o: ['No, there isn’t', 'Yes, on the corner', 'Yes, next to the bank'] }
      ]
    },
    say: [['Excuse me, is there a bank near here?', 'Pardon, is er hier een bank in de buurt?'], ['Go straight and turn left.', 'Ga rechtdoor en sla linksaf.'], ["It's next to the museum.", 'Het is naast het museum.'], ["Where's the restroom?", 'Waar is de wc?']],
    task: { nl: 'Beschrijf je eigen straat of buurt in 4 of 5 zinnen. Gebruik there is / there are en minstens twee voorzetsels (next to, across from, between, near).', model: "I live on a small street in Utrecht. There's a supermarket on the corner. Next to the supermarket there's a bakery. There are a lot of bikes in front of my house. The train station is near, about ten minutes by bike." },
    scenario: { nl: 'Je bent verdwaald in New York en vraagt de weg.', role: 'You are a helpful New Yorker on the street in Manhattan. The learner is a tourist asking for directions to places (subway station, museum, pharmacy, restroom). Give simple directions with blocks, left/right and landmarks.', goal: 'Vraag de weg naar twee plekken en begrijp de uitleg.' }
  });
})(window.SPT);
