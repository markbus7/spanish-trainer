/* Engels voor Nederlandstaligen — niveau A1, units 6–10 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-this': 'this, that, these, those', 'en-price': 'prijzen en grote getallen', 'en-can': 'can / can’t',
    'en-weather': 'het weer', 'en-ing': 'like / love + -ing', 'en-pc': 'present continuous (I’m doing)',
    'en-home': 'het huis', 'en-goingto': 'going to (plannen)', 'en-dates': 'dagen, maanden en datums', 'en-obj': 'me, him, her, us, them'
  });

  /* ───────────────────────── A1 · 6 ───────────────────────── */
  U({
    id: 'en-a1-06', level: 'A1', icon: '🛍️', title: 'Shopping', nl: 'Winkelen',
    goals: ['Vragen naar prijzen en maten', 'this, that, these, those gebruiken', 'Bedragen in dollars zeggen'],
    vocab: [
      ['How much is it?', 'Hoeveel kost het?'], ['How much are they?', 'Hoeveel kosten ze?'], ['expensive', 'duur'], ['cheap', 'goedkoop'], ['on sale', 'in de aanbieding'],
      ['a dollar', 'een dollar'], ['a cent', 'een cent'], ['cash', 'contant'], ['a credit card', 'een creditcard'], ['a receipt', 'een bon / kassabon'],
      ['size', 'maat'], ['small', 'klein'], ['medium', 'middel'], ['large', 'groot'], ['shirt', 'overhemd / shirt'],
      ['T-shirt', 'T-shirt'], ['pants', 'broek (VS)'], ['shoes', 'schoenen'], ['jacket', 'jas / jasje'], ['dress', 'jurk'],
      ['to try on', 'passen'], ['the fitting room', 'het pashokje'], ["I'm just looking.", 'Ik kijk alleen even.'], ["I'll take it.", 'Ik neem het.'], ['Can I help you?', 'Kan ik u helpen?']
    ],
    grammar: [
      { t: 'This, that, these, those', es: 'Demonstratives',
        html: `<p><b>this</b> = dit / deze (één ding, dichtbij). <b>that</b> = dat / die (één ding, verder weg).</p>
<p><b>these</b> = deze (meer dingen, dichtbij). <b>those</b> = die (meer dingen, verder weg).</p>
<p>Fijn: je hoeft niet te kiezen tussen de- en het-woorden. Alleen <b>enkelvoud of meervoud</b> en <b>dichtbij of ver</b> tellen.</p>
<p>Let op de uitspraak: <i>th</i> spreek je uit met je tong tussen je tanden, niet als <i>d</i>. <i>this</i> klinkt niet als <s>dis</s>.</p>`,
        table: [['', 'dichtbij', 'ver weg'], ['enkelvoud', 'this shirt', 'that shirt'], ['meervoud', 'these shoes', 'those shoes']],
        sum: 'this shirt, that shirt, these shoes, those shoes.',
        ex: [['How much is this jacket?', 'Hoeveel kost dit jasje?'], ['I like those shoes.', 'Ik vind die schoenen mooi.']] },
      { t: 'Prijzen en grote getallen', es: 'Prices',
        html: `<p>Prijzen lees je zo: <i>$5.99</i> = <b>five ninety-nine</b> of <i>five dollars and ninety-nine cents</i>. Het dollarteken staat vóór het bedrag, maar je spreekt het achteraan uit.</p>
<p>Let op: in het Engels gebruik je een <b>punt</b> voor centen en een <b>komma</b> voor duizendtallen: <i>$1,250.50</i>. In het Nederlands is dat precies andersom!</p>
<p>Grote getallen: <i>a hundred</i> (100), <i>a thousand</i> (1,000), <i>a million</i> (1,000,000). Geen -s: <i>two hundred</i>, niet <s>two hundreds</s>.</p>`,
        table: [['geschreven', 'uitgesproken'], ['$3.50', 'three fifty'], ['$12.99', 'twelve ninety-nine'], ['$150', 'a hundred and fifty dollars'], ['$2,000', 'two thousand dollars'], ['€1.250,00 (NL)', '€1,250.00 (EN)']],
        ex: [["It's nineteen ninety-nine.", 'Het kost 19,99.'], ['The TV is six hundred dollars.', 'De tv kost zeshonderd dollar.']] },
      { t: 'Hoeveel? How much en how many', es: 'How much / how many',
        html: `<p><b>How much…?</b> = Hoeveel kost…? <i>How much <b>is</b> this shirt?</i> (enkelvoud) <i>How much <b>are</b> these shoes?</i> (meervoud)</p>
<p>Om een aantal te vragen: <b>How many</b> + meervoud: <i>How many T-shirts do you want?</i></p>
<p>Handige zinnen: <i>Do you have this <b>in a medium</b>?</i> (in maat M) <i>Do you have it <b>in blue</b>?</i> <i>Can I <b>try it on</b>?</i></p>`,
        table: [['vraag', 'Nederlands'], ['How much is it?', 'Hoeveel kost het?'], ['How much are they?', 'Hoeveel kosten ze?'], ['Do you have it in a large?', 'Heeft u het in maat L?'], ['Can I try it on?', 'Mag ik het passen?'], ['Can I pay by card?', 'Kan ik pinnen / met kaart betalen?']],
        ex: [['Do you have these pants in a smaller size?', 'Heeft u deze broek in een kleinere maat?'], ['Can I pay by card?', 'Kan ik met mijn kaart betalen?']] }
    ],
    dialogue: {
      t: 'At a clothing store', place: 'San Francisco 🇺🇸',
      lines: [
        ['Clerk', 'Hi! Can I help you?', 'Hallo! Kan ik je helpen?'],
        ['Eva', "Yes, please. How much is this jacket?", 'Ja, graag. Hoeveel kost dit jasje?'],
        ['Clerk', "It's eighty-nine ninety-nine. But it's on sale today: twenty percent off.", 'Het kost 89,99. Maar het is vandaag in de aanbieding: twintig procent korting.'],
        ['Eva', 'Nice! Do you have it in a medium?', 'Leuk! Heeft u het in maat M?'],
        ['Clerk', 'Let me check. Yes, here you go. The fitting room is over there.', 'Even kijken. Ja, alsjeblieft. Het pashokje is daar.'],
        ['Eva', "It's perfect. I'll take it. And how much are those T-shirts?", 'Het is perfect. Ik neem het. En hoeveel kosten die T-shirts?'],
        ['Clerk', 'Fifteen dollars each, or two for twenty-five.', 'Vijftien dollar per stuk, of twee voor vijfentwintig.'],
        ['Eva', "I'll take two. Can I pay by card?", 'Ik neem er twee. Kan ik met mijn kaart betalen?'],
        ['Clerk', 'Of course. Would you like a receipt?', 'Natuurlijk. Wil je een bonnetje?']
      ],
      q: [
        { t: 'mc', q: 'What size does Eva want?', o: ['Medium', 'Small', 'Large'] },
        { t: 'mc', q: 'How much are two T-shirts?', o: ['$25', '$15', '$30'] },
        { t: 'mc', q: 'How does Eva pay?', o: ['By card', 'In cash', 'With her phone'] }
      ]
    },
    culture: { t: 'Prijzen en belasting', html: `<p>Let op: in de VS staat de <b>prijs zonder btw</b> (<i>sales tax</i>) op het kaartje. Bij de kassa komt er nog 0 tot 10 procent bij, afhankelijk van de staat. Iets van $20 kost dus misschien $21,80.</p>
<p>Amerikaanse kledingmaten en schoenmaten zijn anders dan Europese. Een Europese 38 is ongeveer een Amerikaanse 8 (dames). Vraag gerust: <i>What's this in European sizes?</i></p>
<p>🛍️ <i>Pants</i> is in de VS een broek, maar in Groot-Brittannië een onderbroek! Britten zeggen <i>trousers</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'How much is ___ shirt? (dichtbij)', a: ['this'], o: ['this', 'these', 'those'], nl: 'Hoeveel kost dit overhemd?', tag: 'en-this' },
      { t: 'cloze', s: 'I like ___ shoes over there.', a: ['those'], o: ['those', 'that', 'this'], nl: 'Ik vind die schoenen daar mooi.', tag: 'en-this' },
      { t: 'cloze', s: '___ apples are delicious. (dichtbij)', a: ['These'], o: ['These', 'This', 'That'], nl: 'Deze appels zijn heerlijk.', tag: 'en-this' },
      { t: 'cloze', s: 'How much ___ these pants?', a: ['are'], o: ['are', 'is', 'cost'], nl: 'Hoeveel kost deze broek?', tag: 'en-price' },
      { t: 'cloze', s: 'Can I ___ it on?', a: ['try'], o: ['try', 'pass', 'test'], nl: 'Mag ik het passen?', tag: 'en-price' },
      { t: 'mc', q: 'Hoe zeg je $4.50?', o: ['four fifty', 'four comma fifty', 'four and a half dollar'], tag: 'en-price' },
      { t: 'mc', q: 'Hoe schrijf je tweeduizend vijfhonderd dollar in het Engels?', o: ['$2,500', '$2.500', '$2 500,-'], tag: 'en-price' },
      { t: 'mc', q: 'Wat zeg je als je alleen even rondkijkt?', o: ["I'm just looking.", "I'm only watching.", 'I look only.'], tag: 'en-price' },
      { t: 'mc', q: '«pants» in Amerikaans Engels is…', o: ['een broek', 'een onderbroek', 'een jas'], tag: 'en-price' },
      { t: 'mc', q: 'Hoe zeg je «tweehonderd»?', o: ['two hundred', 'two hundreds', 'twohundred'], tag: 'en-num' },
      { t: 'tr', nl: 'Hoeveel kost het?', a: ['How much is it?', 'How much does it cost?'], tag: 'en-price' },
      { t: 'tr', nl: 'Ik neem het.', a: ["I'll take it.", 'I will take it.'], tag: 'en-price' },
      { t: 'tr', nl: 'Heeft u dit in maat L?', a: ['Do you have this in a large?', 'Do you have this in large?', 'Do you have this in size large?'], tag: 'en-price' },
      { t: 'order', s: 'Do you have this jacket in blue?', nl: 'Heeft u dit jasje in het blauw?', tag: 'en-this' },
      { t: 'match', p: [['cheap', 'goedkoop'], ['expensive', 'duur'], ['a receipt', 'een bonnetje'], ['on sale', 'in de aanbieding'], ['cash', 'contant']], tag: 'en-price' }
    ],
    reading: {
      t: 'Black Friday', type: 'Advertentie',
      p: [
        ["BLACK FRIDAY at Miller's! This Friday only: everything is 30% off!", 'BLACK FRIDAY bij Miller’s! Alleen deze vrijdag: alles 30% korting!'],
        ["Jeans: were $60, now $42. Winter jackets: were $150, now only $105. Kids' shoes: two pairs for $40.", 'Spijkerbroeken: waren $60, nu $42. Winterjassen: waren $150, nu maar $105. Kinderschoenen: twee paar voor $40.'],
        ["We open at 5 a.m. Pay with cash or card. No returns on sale items. Don't miss it!", 'We gaan om 5 uur ’s ochtends open. Betaal contant of met je kaart. Afgeprijsde artikelen kun je niet ruilen. Mis het niet!']
      ],
      gl: [['30% off', '30% korting'], ['a pair', 'een paar'], ['returns', 'retouren / ruilen']],
      q: [
        { t: 'mc', q: 'How much is a winter jacket on Black Friday?', o: ['$105', '$150', '$42'] },
        { t: 'mc', q: 'What time does the store open?', o: ['At 5 a.m.', 'At 5 p.m.', 'At 9 a.m.'] },
        { t: 'mc', q: 'Can you return sale items?', o: ['No', 'Yes, with a receipt', 'Yes, within 30 days'] }
      ]
    },
    say: [['How much is this?', 'Hoeveel kost dit?'], ['Can I try it on?', 'Mag ik het passen?'], ["I'll take it.", 'Ik neem het.'], ['Can I pay by card?', 'Kan ik met mijn kaart betalen?']],
    task: { nl: 'Je bent in een Amerikaanse kledingwinkel. Schrijf 4 of 5 zinnen die je tegen de verkoper zegt: vraag naar prijs, maat en kleur, en reken af.', model: "Hi, how much are these shoes? Do you have them in a size 8? Can I try them on? They're perfect. I'll take them. Can I pay by card, please?" },
    scenario: { nl: 'Je koopt kleding in een winkel in San Francisco.', role: 'You are a friendly sales clerk at a clothing store in San Francisco. Help the learner find clothes: ask about size and color, tell them prices (some items on sale) and show them the fitting room. At the end, help them pay.', goal: 'Koop een kledingstuk: vraag prijs, maat en kleur en reken af.' }
  });

  /* ───────────────────────── A1 · 7 ───────────────────────── */
  U({
    id: 'en-a1-07', level: 'A1', icon: '🌦️', title: 'Weather and abilities', nl: 'Het weer en wat je kunt',
    goals: ['Over het weer praten', 'can en can’t gebruiken', 'Temperaturen in Fahrenheit begrijpen'],
    vocab: [
      ['sunny', 'zonnig'], ['cloudy', 'bewolkt'], ['rainy', 'regenachtig'], ['windy', 'winderig'], ['snowy', 'sneeuwachtig'],
      ['hot', 'heet'], ['warm', 'warm'], ['cool', 'koel / fris'], ['cold', 'koud'], ['It’s raining.', 'Het regent.'],
      ['It’s snowing.', 'Het sneeuwt.'], ['the weather', 'het weer'], ['a degree', 'een graad'], ['spring', 'lente'], ['summer', 'zomer'],
      ['fall', 'herfst (VS)'], ['winter', 'winter'], ['to swim', 'zwemmen'], ['to ride a bike', 'fietsen'], ['to drive', 'autorijden'],
      ['to sing', 'zingen'], ['to dance', 'dansen'], ['to cook', 'koken'], ['to speak', 'spreken'], ['an umbrella', 'een paraplu']
    ],
    grammar: [
      { t: 'Het weer: it is…', es: 'The weather',
        html: `<p>Over het weer praat je met <b>it</b>, net als in het Nederlands: <i><b>It's</b> sunny. <b>It's</b> cold. <b>It's</b> raining.</i></p>
<p>Bijvoeglijk naamwoord: <i>It's <b>sunny / cloudy / windy</b>.</i> Iets wat nu gebeurt: <i>It's <b>raining</b> / <b>snowing</b>.</i></p>
<p>Vragen: <i><b>What's the weather like</b> in Chicago?</i> (Hoe is het weer in Chicago?) Niet <s>How is the weather like?</s></p>
<p><b>Fahrenheit</b>: Amerikanen gebruiken graden Fahrenheit. 32 °F = 0 °C, 50 °F = 10 °C, 70 °F = 21 °C, 90 °F = 32 °C. Ruwe rekenregel: (°F − 30) ÷ 2.</p>`,
        table: [['°F', '°C', 'gevoel'], ['32 °F', '0 °C', 'freezing'], ['50 °F', '10 °C', 'cool'], ['70 °F', '21 °C', 'warm / nice'], ['90 °F', '32 °C', 'hot']],
        sum: "It's sunny. It's raining. What's the weather like?",
        ex: [["It's 75 degrees and sunny.", 'Het is 24 graden en zonnig.'], ["What's the weather like in Florida?", 'Hoe is het weer in Florida?']] },
      { t: 'Can en can’t: kunnen', es: 'Can / can’t',
        html: `<p><b>can</b> = kunnen / mogen. Het is voor alle personen hetzelfde, geen -s: <i>I can, she <b>can</b></i> (niet <s>cans</s>).</p>
<p>Na <i>can</i> komt het kale werkwoord, zonder <i>to</i>: <i>I can <b>swim</b>.</i> Niet <s>I can to swim</s>.</p>
<p>Ontkenning: <b>can't</b> (= cannot): <i>I <b>can't</b> dance.</i> Vraag: <i><b>Can</b> you drive?</i> — <i>Yes, I can. / No, I can't.</i></p>
<p>Uitspraak (VS): <i>can</i> klinkt kort en zwak («kun»), <i>can't</i> klinkt langer met een duidelijke a: «kèènt».</p>`,
        table: [['', 'bevestigend', 'ontkennend', 'vraag'], ['alle personen', 'I can swim.', "I can't swim.", 'Can you swim?']],
        ex: [["I can speak Dutch, English and a little German.", 'Ik spreek Nederlands, Engels en een beetje Duits.'], ["My son can't ride a bike yet.", 'Mijn zoon kan nog niet fietsen.']] }
    ],
    dialogue: {
      t: 'A weekend trip', place: 'Chicago 🇺🇸',
      lines: [
        ['Jason', "What's the weather like this weekend?", 'Hoe wordt het weer dit weekend?'],
        ['Lieke', "Saturday is sunny and seventy-five degrees.", 'Zaterdag is het zonnig en vierentwintig graden.'],
        ['Jason', 'Seventy-five? Great! Can you swim? We can go to the lake.', 'Vierentwintig? Top! Kun je zwemmen? Dan kunnen we naar het meer.'],
        ['Lieke', "Of course I can swim! And can you ride a bike? We can bike there.", 'Natuurlijk kan ik zwemmen! En kun jij fietsen? Dan kunnen we erheen fietsen.'],
        ['Jason', "Yes, I can, but not very well. It's ten miles!", 'Ja, maar niet zo goed. Het is zestien kilometer!'],
        ['Lieke', 'Ten miles is nothing. I bike every day in Holland.', 'Zestien kilometer is niks. Ik fiets in Nederland elke dag.'],
        ['Jason', "Okay, okay. And Sunday?", 'Oké, oké. En zondag?'],
        ['Lieke', "Sunday it's cloudy and windy. Maybe rain.", 'Zondag is het bewolkt en winderig. Misschien regen.'],
        ['Jason', "Then we can stay home and cook. I can't cook, but you can!", 'Dan kunnen we thuisblijven en koken. Ik kan niet koken, maar jij wel!']
      ],
      q: [
        { t: 'mc', q: 'What is the weather like on Saturday?', o: ['Sunny and 75 degrees', 'Cloudy and windy', 'Rainy and cold'] },
        { t: 'mc', q: 'Can Jason ride a bike?', o: ['Yes, but not very well', "No, he can't", 'Yes, very well'] },
        { t: 'mc', q: "Who can't cook?", o: ['Jason', 'Lieke', 'Both of them'] }
      ]
    },
    culture: { t: 'Fahrenheit, miles en pounds', html: `<p>De VS gebruikt een ander maatsysteem: <b>Fahrenheit</b> voor temperatuur, <b>miles</b> voor afstand (1 mile ≈ 1,6 km), <b>pounds</b> voor gewicht (1 lb ≈ 0,45 kg) en <b>feet</b> en <b>inches</b> voor lengte.</p>
<p>Als iemand zegt <i>It's in the 90s</i>, is het tussen 32 en 37 graden: heet! <i>It's in the 20s</i> betekent flink vriezen.</p>
<p>🍂 De herfst heet in de VS meestal <b>fall</b> (Brits: <i>autumn</i>). Het weer verschilt enorm: Florida is altijd warm, Minnesota heeft strenge winters.</p>` },
    ex: [
      { t: 'cloze', s: "It's ___ today. Take an umbrella!", a: ['raining'], o: ['raining', 'rain', 'rainy day'], nl: 'Het regent vandaag. Neem een paraplu mee!', tag: 'en-weather' },
      { t: 'cloze', s: "What's the weather ___ in Miami?", a: ['like'], o: ['like', 'how', 'as'], nl: 'Hoe is het weer in Miami?', tag: 'en-weather' },
      { t: 'cloze', s: 'She ___ speak three languages.', a: ['can'], o: ['can', 'cans', 'can to'], nl: 'Ze spreekt drie talen.', tag: 'en-can' },
      { t: 'cloze', s: "I can't ___ very well.", a: ['dance'], o: ['dance', 'to dance', 'dancing'], nl: 'Ik kan niet zo goed dansen.', tag: 'en-can' },
      { t: 'cloze', s: '___ you drive?', a: ['Can'], o: ['Can', 'Do', 'Are'], nl: 'Kun je autorijden?', tag: 'en-can' },
      { t: 'mc', q: '70 °F is ongeveer…', o: ['21 °C', '70 °C', '7 °C'], tag: 'en-weather' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['He can swim.', 'He cans swim.', 'He can to swim.'], tag: 'en-can' },
      { t: 'mc', q: '«Herfst» in Amerikaans Engels:', o: ['fall', 'harvest', 'leaf time'], tag: 'en-weather' },
      { t: 'mc', q: '«Can you ride a bike?» — Je kunt het niet. Je zegt:', o: ["No, I can't.", "No, I don't.", "No, I'm not."], tag: 'en-can' },
      { t: 'tr', nl: 'Het is koud en winderig.', a: ["It's cold and windy.", 'It is cold and windy.'], tag: 'en-weather' },
      { t: 'tr', nl: 'Ik kan niet koken.', a: ["I can't cook.", 'I cannot cook.'], tag: 'en-can' },
      { t: 'tr', nl: 'Het sneeuwt!', a: ["It's snowing!", 'It is snowing!'], tag: 'en-weather' },
      { t: 'order', s: 'My daughter can swim very well.', nl: 'Mijn dochter kan heel goed zwemmen.', tag: 'en-can' },
      { t: 'match', p: [['sunny', 'zonnig'], ['cloudy', 'bewolkt'], ['windy', 'winderig'], ['cold', 'koud'], ['an umbrella', 'een paraplu']], tag: 'en-weather' }
    ],
    reading: {
      t: 'Weather forecast', type: 'Weerbericht',
      p: [
        ["Good morning, Denver! Today it's sunny and cool, with a high of 55 degrees. Perfect weather for a walk in the park.", 'Goedemorgen, Denver! Vandaag is het zonnig en fris, met een maximum van 13 graden. Perfect weer voor een wandeling in het park.'],
        ["Tonight it's cloudy and cold, around 30 degrees. Tomorrow it's snowing in the mountains, so be careful on the roads.", 'Vannacht is het bewolkt en koud, rond de min 1. Morgen sneeuwt het in de bergen, dus wees voorzichtig op de weg.'],
        ["On the weekend it's warm again: 65 degrees and sunny. You can go hiking, but don't forget your sunscreen!", 'In het weekend is het weer warm: 18 graden en zonnig. Je kunt gaan wandelen, maar vergeet je zonnebrandcrème niet!']
      ],
      gl: [['a high of', 'een maximum van'], ['be careful', 'wees voorzichtig'], ['sunscreen', 'zonnebrandcrème']],
      q: [
        { t: 'mc', q: 'What is the weather like today?', o: ['Sunny and cool', 'Cloudy and cold', 'Snowy'] },
        { t: 'mc', q: 'Where is it snowing tomorrow?', o: ['In the mountains', 'In the city', 'In the park'] },
        { t: 'mc', q: 'What can you do on the weekend?', o: ['Go hiking', 'Go skiing', 'Stay inside'] }
      ]
    },
    say: [["It's sunny today.", 'Het is zonnig vandaag.'], ["What's the weather like?", 'Hoe is het weer?'], ['I can swim, but I can’t dance.', 'Ik kan zwemmen, maar ik kan niet dansen.'], ["It's raining again!", 'Het regent alweer!']],
    task: { nl: 'Schrijf 4 of 5 zinnen: hoe is het weer vandaag waar jij bent, en wat kun je wel en niet goed (zwemmen, koken, zingen, autorijden…)?', model: "Today it's cloudy and a little cold in Amsterdam. It's about 50 degrees. I can ride a bike in the rain, no problem! I can cook and I can swim, but I can't sing. My friends say I can't dance either." },
    scenario: { nl: 'Je plant een dagje uit met een Amerikaanse vriend en het weer speelt een rol.', role: 'You are Jason, a friendly American from Chicago. Plan a day out with the learner. Talk about the weather forecast (in Fahrenheit) and ask what they can do: swim, bike, cook, play sports. Suggest activities based on the weather.', goal: 'Praat over het weer en vertel wat je wel en niet kunt.' }
  });

  /* ───────────────────────── A1 · 8 ───────────────────────── */
  U({
    id: 'en-a1-08', level: 'A1', icon: '⚽', title: 'Free time', nl: 'Vrije tijd',
    goals: ['Over hobby’s praten met like / love + -ing', 'De present continuous: wat je nú doet', 'Het verschil tussen I play en I’m playing'],
    vocab: [
      ['free time', 'vrije tijd'], ['a hobby', 'een hobby'], ['to read', 'lezen'], ['to play soccer', 'voetballen (VS)'], ['to play the guitar', 'gitaar spelen'],
      ['to go running', 'gaan hardlopen'], ['to go to the movies', 'naar de film gaan'], ['to listen to music', 'naar muziek luisteren'], ['to play video games', 'gamen'], ['to take photos', 'foto’s maken'],
      ['to paint', 'schilderen'], ['to travel', 'reizen'], ['to hang out with friends', 'met vrienden afspreken'], ['the gym', 'de sportschool'], ['a game', 'een wedstrijd / spel'],
      ['a team', 'een team'], ['to love', 'dol zijn op'], ['to hate', 'een hekel hebben aan'], ['to enjoy', 'genieten van'], ['boring', 'saai'],
      ['fun', 'leuk'], ['right now', 'nu'], ['at the moment', 'op dit moment'], ['on the weekend', 'in het weekend']
    ],
    grammar: [
      { t: 'Like / love / hate + -ing', es: 'Like + -ing',
        html: `<p>Na <b>like, love, hate, enjoy</b> zet je het werkwoord met <b>-ing</b>: <i>I like <b>reading</b>. She loves <b>dancing</b>. I hate <b>running</b>.</i></p>
<p>Spelling: <i>dance → danc<b>ing</b></i> (e valt weg), <i>swim → swi<b>mming</b>, run → ru<b>nning</b></i> (medeklinker verdubbelt na korte klinker).</p>
<p>Let op: <b>play</b> voor sport met een bal en spelletjes (<i>play soccer, play tennis</i>), <b>go</b> + -ing voor activiteiten (<i>go running, go swimming, go shopping</i>), <b>do</b> voor bijvoorbeeld <i>do yoga</i>.</p>
<p>⚽ <b>Soccer</b> = voetbal in de VS. <i>Football</i> is daar American football!</p>`,
        table: [['', 'voorbeeld'], ['play + sport/spel', 'play soccer, play chess'], ['go + -ing', 'go running, go swimming'], ['do + activiteit', 'do yoga, do karate'], ['like + -ing', 'I like cooking.']],
        sum: 'I like reading. I love swimming. I go running.',
        ex: [['I love playing the guitar.', 'Ik speel heel graag gitaar.'], ['We go swimming on Saturdays.', 'We gaan op zaterdag zwemmen.']] },
      { t: 'Present continuous: nu bezig', es: 'Present continuous',
        html: `<p>Wat je <b>nu</b> aan het doen bent, zeg je met <b>am/is/are + -ing</b>: <i>I'<b>m reading</b>. She'<b>s cooking</b>. They'<b>re playing</b> soccer.</i></p>
<p>Het Nederlands zegt vaak gewoon «ik lees» of «ik ben aan het lezen». Het Engels is strenger: voor nu gebruik je bijna altijd de <b>continuous</b>.</p>
<p><i>Wat doe je?</i> → twee vragen in het Engels:<br><i>What <b>do</b> you do?</i> = Wat voor werk doe je? (altijd)<br><i>What <b>are</b> you <b>doing</b>?</i> = Waar ben je nu mee bezig?</p>`,
        table: [['present simple (gewoonte)', 'present continuous (nu)'], ['I play soccer on Sundays.', "I'm playing soccer right now."], ['She reads every night.', "She's reading at the moment."], ['What do you do?', 'What are you doing?']],
        ex: [["Shh! I'm watching the game.", 'Sst! Ik kijk naar de wedstrijd.'], ['What are you doing right now?', 'Waar ben je nu mee bezig?']] }
    ],
    dialogue: {
      t: 'A phone call', place: 'Denver 🇺🇸',
      lines: [
        ['Ashley', "Hi, Tim! What are you doing?", 'Hoi Tim! Wat ben je aan het doen?'],
        ['Tim', "Hi! I'm watching a soccer game. Ajax is playing!", 'Hoi! Ik kijk naar een voetbalwedstrijd. Ajax speelt!'],
        ['Ashley', "Soccer? I don't really like watching soccer. It's a little boring.", 'Voetbal? Ik vind voetbal kijken niet zo leuk. Het is een beetje saai.'],
        ['Tim', "Boring? No way! What do you like doing in your free time?", 'Saai? Echt niet! Wat doe je graag in je vrije tijd?'],
        ['Ashley', 'I love hiking and taking photos. And I play the guitar.', 'Ik wandel heel graag en ik maak graag foto’s. En ik speel gitaar.'],
        ['Tim', 'Cool! I go running on the weekend. Do you want to go hiking on Saturday?', 'Gaaf! Ik ga in het weekend hardlopen. Wil je zaterdag gaan wandelen?'],
        ['Ashley', "Sure! What's the score, by the way?", 'Tuurlijk! Hoe staat het trouwens?'],
        ['Tim', "Two-one for Ajax. Oh wait, they're scoring again!", 'Twee-één voor Ajax. O wacht, ze scoren weer!']
      ],
      q: [
        { t: 'mc', q: 'What is Tim doing?', o: ['Watching a soccer game', 'Playing soccer', 'Going running'] },
        { t: 'mc', q: 'What does Ashley love?', o: ['Hiking and taking photos', 'Watching soccer', 'Running'] },
        { t: 'mc', q: 'What do they plan for Saturday?', o: ['Going hiking', 'Watching soccer', 'Playing the guitar'] }
      ]
    },
    culture: { t: 'Sport in Amerika', html: `<p>De grote vier Amerikaanse sporten zijn <b>American football</b>, <b>baseball</b>, <b>basketball</b> en <b>ice hockey</b>. De <i>Super Bowl</i> (finale van het American football) is het grootste tv-evenement van het jaar.</p>
<p>Voetbal heet <b>soccer</b> en wordt steeds populairder, zeker bij kinderen en vrouwen. Het Amerikaanse vrouwenteam is een van de beste ter wereld.</p>
<p>🏀 Sport op school en universiteit (<i>college sports</i>) is in de VS heel belangrijk: wedstrijden trekken soms meer dan 100.000 toeschouwers.</p>` },
    ex: [
      { t: 'cloze', s: 'I love ___ in the ocean.', a: ['swimming'], o: ['swimming', 'swim', 'swiming'], nl: 'Ik zwem heel graag in de zee.', tag: 'en-ing' },
      { t: 'cloze', s: 'She enjoys ___ books.', a: ['reading'], o: ['reading', 'read', 'to reading'], nl: 'Ze leest graag boeken.', tag: 'en-ing' },
      { t: 'cloze', s: 'We ___ soccer every Sunday.', a: ['play'], o: ['play', 'do', 'go'], nl: 'We voetballen elke zondag.', tag: 'en-ing' },
      { t: 'cloze', s: 'I go ___ in the park.', a: ['running'], o: ['running', 'run', 'to run'], nl: 'Ik ga hardlopen in het park.', tag: 'en-ing' },
      { t: 'cloze', s: "Shh! The baby ___ sleeping.", a: ['is'], o: ['is', 'are', 'does'], nl: 'Sst! De baby slaapt.', tag: 'en-pc' },
      { t: 'cloze', s: "What are you ___ right now?", a: ['doing'], o: ['doing', 'do', 'does'], nl: 'Wat ben je nu aan het doen?', tag: 'en-pc' },
      { t: 'mc', q: 'Welke zin beschrijft iets wat nu gebeurt?', o: ["I'm reading a book.", 'I read a book every week.', 'I like reading.'], tag: 'en-pc' },
      { t: 'mc', q: '«What do you do?» betekent meestal…', o: ['Wat voor werk doe je?', 'Wat ben je nu aan het doen?', 'Hoe gaat het?'], tag: 'en-pc' },
      { t: 'mc', q: 'Voetbal heet in de VS…', o: ['soccer', 'football', 'footy'], tag: 'en-ing' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I do yoga on Mondays.', 'I play yoga on Mondays.', 'I go yoga on Mondays.'], tag: 'en-ing' },
      { t: 'tr', nl: 'Ik kijk graag films.', a: ['I like watching movies.', 'I love watching movies.', 'I enjoy watching movies.', 'I like watching films.'], tag: 'en-ing' },
      { t: 'tr', nl: 'Ze is aan het koken.', a: ["She's cooking.", 'She is cooking.'], tag: 'en-pc' },
      { t: 'tr', nl: 'Wat ben je aan het doen?', a: ['What are you doing?'], tag: 'en-pc' },
      { t: 'order', s: "My brother is playing video games again.", nl: 'Mijn broer zit weer te gamen.', tag: 'en-pc' },
      { t: 'match', p: [['boring', 'saai'], ['fun', 'leuk'], ['the gym', 'de sportschool'], ['to hate', 'een hekel hebben aan'], ['to enjoy', 'genieten van']], tag: 'en-ing' }
    ],
    reading: {
      t: 'What are they doing?', type: 'Fotoverhaal',
      p: [
        ["It's Saturday afternoon in Central Park. The sun is shining and a lot of people are enjoying their free time.", 'Het is zaterdagmiddag in Central Park. De zon schijnt en veel mensen genieten van hun vrije tijd.'],
        ["A family is having a picnic. Two kids are playing baseball and their dad is taking photos. Near the lake, a woman is painting.", 'Een gezin houdt een picknick. Twee kinderen spelen honkbal en hun vader maakt foto’s. Bij het meer zit een vrouw te schilderen.'],
        ["A group of friends is listening to music, and an old man is reading a newspaper. He comes here every Saturday. He loves reading in the park.", 'Een groep vrienden luistert naar muziek, en een oude man leest de krant. Hij komt hier elke zaterdag. Hij leest heel graag in het park.']
      ],
      gl: [['the sun is shining', 'de zon schijnt'], ['a picnic', 'een picknick'], ['a newspaper', 'een krant']],
      q: [
        { t: 'mc', q: 'What are the two kids doing?', o: ['Playing baseball', 'Painting', 'Reading'] },
        { t: 'mc', q: 'Who is painting?', o: ['A woman near the lake', 'The dad', 'The old man'] },
        { t: 'mc', q: 'How often does the old man come to the park?', o: ['Every Saturday', 'Every day', 'Never'] }
      ]
    },
    say: [['I love reading.', 'Ik lees heel graag.'], ["I'm watching TV right now.", 'Ik kijk nu tv.'], ['What do you like doing in your free time?', 'Wat doe je graag in je vrije tijd?'], ['We play soccer on Sundays.', 'We voetballen op zondag.']],
    task: { nl: 'Schrijf 5 zinnen over je hobby’s: wat je graag doet en wat niet (like/love/hate + -ing), en wat je op dit moment aan het doen bent.', model: "In my free time I love reading and cooking. I go running on Sunday mornings. I don't like watching soccer, but I like playing tennis. Right now I'm sitting on the couch and I'm learning English!" },
    scenario: { nl: 'Je belt met een Amerikaanse vriendin over vrije tijd.', role: 'You are Ashley, a sporty American from Denver who loves hiking and photography. Call the learner. Ask what they are doing right now and what they like doing in their free time. Suggest doing an activity together this weekend.', goal: 'Vertel wat je nu doet en wat je hobby’s zijn.' }
  });

  /* ───────────────────────── A1 · 9 ───────────────────────── */
  U({
    id: 'en-a1-09', level: 'A1', icon: '🏠', title: 'At home', nl: 'Thuis',
    goals: ['Je huis en kamers beschrijven', 'Meubels en voorwerpen benoemen met voorzetsels', 'Wat er in huis is: there is / there are en some / any'],
    vocab: [
      ['a house', 'een huis'], ['an apartment', 'een appartement'], ['a room', 'een kamer'], ['the living room', 'de woonkamer'], ['the kitchen', 'de keuken'],
      ['the bedroom', 'de slaapkamer'], ['the bathroom', 'de badkamer'], ['the yard', 'de tuin (VS)'], ['the garage', 'de garage'], ['upstairs', 'boven'],
      ['downstairs', 'beneden'], ['a table', 'een tafel'], ['a chair', 'een stoel'], ['a couch', 'een bank (om op te zitten)'], ['a bed', 'een bed'],
      ['a closet', 'een kast (inbouw)'], ['a fridge', 'een koelkast'], ['a stove', 'een fornuis'], ['a lamp', 'een lamp'], ['a window', 'een raam'],
      ['a door', 'een deur'], ['a floor', 'een vloer / verdieping'], ['on', 'op'], ['under', 'onder'], ['in front of', 'voor'], ['behind', 'achter']
    ],
    grammar: [
      { t: 'Some en any', es: 'Some / any',
        html: `<p><b>some</b> = wat, een paar, sommige. Je gebruikt het in <b>bevestigende</b> zinnen: <i>There are <b>some</b> chairs in the kitchen.</i></p>
<p><b>any</b> gebruik je in <b>vragen</b> en <b>ontkenningen</b>: <i>Are there <b>any</b> towels? There aren't <b>any</b> chairs.</i></p>
<p>Bij een aanbod of verzoek gebruik je wél <i>some</i>: <i>Would you like <b>some</b> coffee?</i></p>
<p>In het Nederlands laat je dit woord vaak weg («Zijn er handdoeken?»). In het Engels mag dat ook, maar met <i>any</i> klinkt het natuurlijker.</p>`,
        table: [['', 'voorbeeld'], ['bevestigend', 'There are some books on the shelf.'], ['vraag', 'Are there any books?'], ['ontkennend', "There aren't any books."], ['aanbod', 'Would you like some tea?']],
        sum: 'some in positive sentences, any in questions and negatives.',
        ex: [["Is there any milk in the fridge?", 'Is er nog melk in de koelkast?'], ["There are some towels in the bathroom.", 'Er liggen wat handdoeken in de badkamer.']] },
      { t: 'Voorzetsels in huis', es: 'Prepositions at home',
        html: `<p><b>on</b> = op (met contact): <i>The lamp is <b>on</b> the table.</i> <b>in</b> = in: <i>The milk is <b>in</b> the fridge.</i> <b>under</b> = onder. <b>behind</b> = achter. <b>in front of</b> = vóór. <b>next to</b> = naast.</p>
<p>Verdiepingen: <i><b>on</b> the first floor</i>. Let op: in de VS is de <b>first floor</b> de begane grond! De Nederlandse «eerste verdieping» is in de VS de <b>second floor</b>.</p>
<p><b>upstairs</b> (boven) en <b>downstairs</b> (beneden) gebruik je zonder voorzetsel: <i>The bedroom is <b>upstairs</b>.</i> Niet <s>on upstairs</s>.</p>`,
        table: [['Nederland', 'VS', 'VK'], ['begane grond', 'first floor', 'ground floor'], ['eerste verdieping', 'second floor', 'first floor'], ['tweede verdieping', 'third floor', 'second floor']],
        ex: [['The keys are on the table, next to the lamp.', 'De sleutels liggen op tafel, naast de lamp.'], ["Our apartment is on the third floor.", 'Ons appartement is op de tweede verdieping.']] }
    ],
    dialogue: {
      t: 'Looking at an apartment', place: 'Austin, Texas 🇺🇸',
      lines: [
        ['Agent', "Welcome! This is the living room. It's big and has a lot of light.", 'Welkom! Dit is de woonkamer. Hij is groot en heeft veel licht.'],
        ['Koen', "It's nice. Is there any furniture?", 'Mooi. Zijn er meubels?'],
        ['Agent', "Yes, there's a couch and a TV. The kitchen is behind this door.", 'Ja, er staan een bank en een tv. De keuken is achter deze deur.'],
        ['Koen', 'Is there a dishwasher?', 'Is er een vaatwasser?'],
        ['Agent', "Yes, there is. And there's a big fridge, too. The bedrooms are upstairs.", 'Ja. En er is ook een grote koelkast. De slaapkamers zijn boven.'],
        ['Koen', 'How many bedrooms are there?', 'Hoeveel slaapkamers zijn er?'],
        ['Agent', 'Two bedrooms and one bathroom. And there’s a small yard in front of the house.', 'Twee slaapkamers en één badkamer. En er is een kleine tuin voor het huis.'],
        ['Koen', 'Is there a garage? I need a place for my bike.', 'Is er een garage? Ik heb een plek nodig voor mijn fiets.'],
        ['Agent', "A bike? Sure, there's a garage. Most people here have two cars, though!", 'Een fiets? Tuurlijk, er is een garage. De meeste mensen hier hebben wel twee auto’s!']
      ],
      q: [
        { t: 'mc', q: 'Where are the bedrooms?', o: ['Upstairs', 'Downstairs', 'Behind the kitchen'] },
        { t: 'mc', q: 'How many bedrooms are there?', o: ['Two', 'One', 'Three'] },
        { t: 'mc', q: 'Why does Koen want a garage?', o: ['For his bike', 'For his two cars', 'For his furniture'] }
      ]
    },
    culture: { t: 'Wonen in Amerika', html: `<p>Amerikaanse huizen zijn gemiddeld veel <b>groter</b> dan Nederlandse. Veel gezinnen wonen in de <b>suburbs</b> (buitenwijken), in een vrijstaand huis met een garage en een tuin (<i>yard</i>).</p>
<p>Kamers tel je anders: een advertentie voor een <i>2-bedroom apartment</i> heeft twee slaapkamers <b>plus</b> een woonkamer. In Nederland heet dat een driekamerappartement.</p>
<p>🧺 Veel Amerikanen hebben een <i>washer</i> en <i>dryer</i> in huis, of delen een <i>laundry room</i> in het gebouw. Een droogrek is ongebruikelijk.</p>` },
    ex: [
      { t: 'cloze', s: 'There are ___ books on the table.', a: ['some'], o: ['some', 'any', 'a'], nl: 'Er liggen wat boeken op tafel.', tag: 'en-home' },
      { t: 'cloze', s: 'Is there ___ milk in the fridge?', a: ['any'], o: ['any', 'some of', 'a'], nl: 'Is er nog melk in de koelkast?', tag: 'en-home' },
      { t: 'cloze', s: "There aren't ___ chairs in the kitchen.", a: ['any'], o: ['any', 'some', 'no'], nl: 'Er staan geen stoelen in de keuken.', tag: 'en-home' },
      { t: 'cloze', s: 'The cat is ___ the bed.', a: ['under'], o: ['under', 'below of', 'down'], nl: 'De kat ligt onder het bed.', tag: 'en-prep' },
      { t: 'cloze', s: 'The bathroom is ___.', a: ['upstairs'], o: ['upstairs', 'on upstairs', 'at up'], nl: 'De badkamer is boven.', tag: 'en-home' },
      { t: 'cloze', s: 'Would you like ___ coffee?', a: ['some'], o: ['some', 'any', 'a few'], nl: 'Wil je wat koffie?', tag: 'en-home' },
      { t: 'mc', q: 'De Nederlandse «eerste verdieping» is in de VS de…', o: ['second floor', 'first floor', 'ground floor'], tag: 'en-home' },
      { t: 'mc', q: 'Waar zit je op in de woonkamer?', o: ['a couch', 'a bank', 'a closet'], tag: 'en-home' },
      { t: 'mc', q: '«De sleutels liggen op de tafel»:', o: ['The keys are on the table.', 'The keys are at the table.', 'The keys lie in the table.'], tag: 'en-prep' },
      { t: 'mc', q: 'Een «2-bedroom apartment» heeft…', o: ['twee slaapkamers en een woonkamer', 'twee kamers in totaal', 'twee badkamers'], tag: 'en-home' },
      { t: 'tr', nl: 'De keuken is beneden.', a: ['The kitchen is downstairs.'], tag: 'en-home' },
      { t: 'tr', nl: 'Er is een lamp naast het bed.', a: ["There's a lamp next to the bed.", 'There is a lamp next to the bed.'], tag: 'en-there' },
      { t: 'tr', nl: 'Zijn er handdoeken?', a: ['Are there any towels?', 'Are there towels?'], tag: 'en-home' },
      { t: 'order', s: 'There is a big table in the kitchen.', nl: 'Er staat een grote tafel in de keuken.', tag: 'en-there' },
      { t: 'match', p: [['a fridge', 'een koelkast'], ['a stove', 'een fornuis'], ['a closet', 'een kast'], ['the yard', 'de tuin'], ['a window', 'een raam'], ['behind', 'achter']], tag: 'en-home' }
    ],
    reading: {
      t: 'For rent: sunny apartment', type: 'Woonadvertentie',
      p: [
        ["FOR RENT: Sunny 1-bedroom apartment in downtown Portland, $1,600 a month. Available June 1.", 'TE HUUR: Zonnig appartement met 1 slaapkamer in het centrum van Portland, $1.600 per maand. Beschikbaar vanaf 1 juni.'],
        ["The apartment is on the fourth floor. There's an elevator. The living room has big windows and there's a small balcony with a view of the river.", 'Het appartement is op de derde verdieping. Er is een lift. De woonkamer heeft grote ramen en er is een klein balkon met uitzicht op de rivier.'],
        ["The kitchen has a new stove and a dishwasher. There isn't a washer in the apartment, but there's a laundry room downstairs. No pets, please.", 'De keuken heeft een nieuw fornuis en een vaatwasser. Er is geen wasmachine in het appartement, maar er is beneden een washok. Geen huisdieren, alstublieft.']
      ],
      gl: [['for rent', 'te huur'], ['an elevator', 'een lift'], ['pets', 'huisdieren']],
      q: [
        { t: 'mc', q: 'How much is the rent?', o: ['$1,600 a month', '$1,600 a week', '$600 a month'] },
        { t: 'mc', q: 'What is in the kitchen?', o: ['A new stove and a dishwasher', 'A washer', 'A balcony'] },
        { t: 'mc', q: 'Can you have a dog?', o: ['No', 'Yes', 'Only a small one'] }
      ]
    },
    say: [['My apartment is small but nice.', 'Mijn appartement is klein maar fijn.'], ['The bedroom is upstairs.', 'De slaapkamer is boven.'], ['Is there any coffee?', 'Is er nog koffie?'], ['The keys are on the table.', 'De sleutels liggen op tafel.']],
    task: { nl: 'Beschrijf je huis of appartement in 5 zinnen: hoeveel kamers, wat staat er waar, en wat is er niet? Gebruik there is/are, some/any en voorzetsels.', model: "I live in a small apartment in Amsterdam. There's a living room, a kitchen, one bedroom and a bathroom. In the living room there's a big couch in front of the TV. There aren't any closets, so my clothes are under the bed! The apartment is on the third floor and there isn't an elevator." },
    scenario: { nl: 'Je bekijkt een appartement in Austin met een makelaar.', role: 'You are a cheerful real estate agent in Austin, Texas, showing the learner an apartment. Describe the rooms, furniture and features. Answer questions about what there is and isn’t (dishwasher, garage, washer, yard). Mention the rent in dollars.', goal: 'Stel vragen over het appartement en beslis of je het wilt huren.' }
  });

  /* ───────────────────────── A1 · 10 ───────────────────────── */
  U({
    id: 'en-a1-10', level: 'A1', icon: '📅', title: 'Plans and invitations', nl: 'Plannen en uitnodigingen',
    goals: ['Plannen maken met going to', 'Iemand uitnodigen en reageren', 'Dagen, maanden en datums; me, him, her, us, them'],
    vocab: [
      ['Monday', 'maandag'], ['Tuesday', 'dinsdag'], ['Wednesday', 'woensdag'], ['Thursday', 'donderdag'], ['Friday', 'vrijdag'],
      ['Saturday', 'zaterdag'], ['Sunday', 'zondag'], ['January', 'januari'], ['May', 'mei'], ['July', 'juli'],
      ['October', 'oktober'], ['December', 'december'], ['a birthday', 'een verjaardag'], ['a party', 'een feest'], ['tomorrow', 'morgen'],
      ['tonight', 'vanavond'], ['next week', 'volgende week'], ['Would you like to…?', 'Heb je zin om…?'], ['Sounds great!', 'Klinkt goed!'], ["I'd love to.", 'Heel graag.'],
      ["Sorry, I can't.", 'Sorry, ik kan niet.'], ["I'm busy.", 'Ik heb het druk.'], ['to invite', 'uitnodigen'], ['to meet', 'afspreken / ontmoeten'], ['to celebrate', 'vieren']
    ],
    grammar: [
      { t: 'Going to: plannen', es: 'Going to',
        html: `<p>Voor plannen gebruik je <b>am/is/are + going to + werkwoord</b>: <i>I'<b>m going to</b> visit my grandma. We'<b>re going to</b> have a party.</i></p>
<p>Het Nederlands gebruikt vaak gewoon de tegenwoordige tijd: «Morgen ga ik naar Utrecht.» In het Engels: <i>Tomorrow I'<b>m going to</b> go to Utrecht</i>, of korter: <i>I'<b>m going</b> to Utrecht tomorrow.</i></p>
<p>Vraag: <i><b>Are</b> you <b>going to</b> come?</i> Ontkenning: <i>I'<b>m not going to</b> work on Saturday.</i></p>
<p>Woordvolgorde: in het Nederlands zeg je «Morgen <b>ga ik</b>». In het Engels blijft het onderwerp vóór het werkwoord: <i>Tomorrow <b>I'm going</b>…</i></p>`,
        table: [['', 'voorbeeld'], ['bevestigend', "I'm going to call her."], ['vraag', 'Are you going to call her?'], ['ontkennend', "I'm not going to call her."], ['woordvolgorde', 'Tomorrow I am going to… (niet: Tomorrow am I…)']],
        sum: "I'm going to visit my parents. What are you going to do?",
        ex: [["What are you going to do this weekend?", 'Wat ga je dit weekend doen?'], ["Tomorrow I'm going to clean the house.", 'Morgen ga ik het huis schoonmaken.']] },
      { t: 'Datums en voorzetsels van tijd', es: 'Dates',
        html: `<p>Dagen en maanden schrijf je in het Engels met een <b>hoofdletter</b>: <i>Monday, July</i>. Niet <s>monday, july</s>.</p>
<p>Datums in de VS: <b>maand eerst</b>! <i>July 4</i> (4 juli). Geschreven: <i>7/4/2026</i> = 4 juli, niet 7 april. Uitspreken: <i>July fourth</i>.</p>
<p>Voorzetsels: <b>on</b> + dag/datum (<i>on Monday, on July 4</i>), <b>in</b> + maand/jaar (<i>in May, in 2026</i>), <b>at</b> + tijd (<i>at 8 p.m.</i>).</p>`,
        table: [['', 'voorbeeld'], ['on + dag', 'on Friday'], ['on + datum', 'on March 3'], ['in + maand', 'in December'], ['at + tijd', 'at seven o’clock'], ['VS-datum 3/12', '12 maart']],
        ex: [["My birthday is on October 12.", 'Mijn verjaardag is op 12 oktober.'], ['The party is on Saturday at eight.', 'Het feest is zaterdag om acht uur.']] },
      { t: 'Me, him, her, us, them', es: 'Object pronouns',
        html: `<p>Als iemand het <b>lijdend voorwerp</b> is (na een werkwoord of voorzetsel), gebruik je een andere vorm: <b>me</b> (mij), <b>you</b> (jou), <b>him</b> (hem), <b>her</b> (haar), <b>it</b> (het), <b>us</b> (ons), <b>them</b> (hen/hun/ze).</p>
<p><i>Call <b>me</b>! I love <b>her</b>. Can you help <b>us</b>? I'm going to invite <b>them</b>.</i></p>
<p>Fout: <s>Call I</s>, <s>I like she</s>. En na <i>with, for, to</i>: <i>Come with <b>us</b>! This is for <b>him</b>.</i></p>`,
        table: [['onderwerp', 'lijdend voorwerp', 'Nederlands'], ['I', 'me', 'mij / me'], ['he', 'him', 'hem'], ['she', 'her', 'haar'], ['we', 'us', 'ons'], ['they', 'them', 'hen / ze']],
        ex: [['Do you want to come with us?', 'Wil je met ons mee?'], ["I'm going to call him tonight.", 'Ik ga hem vanavond bellen.']] }
    ],
    dialogue: {
      t: 'A birthday invitation', place: 'Miami 🇺🇸',
      lines: [
        ['Carlos', "Hey, Ilse! Are you free on Saturday?", 'Hé, Ilse! Ben je zaterdag vrij?'],
        ['Ilse', "I think so. Why?", 'Ik denk het wel. Hoezo?'],
        ['Carlos', "It's my birthday! I'm going to have a party at the beach. Would you like to come?", 'Ik ben jarig! Ik ga een feestje op het strand geven. Heb je zin om te komen?'],
        ['Ilse', "I'd love to! What time?", 'Heel graag! Hoe laat?'],
        ['Carlos', 'At six. We’re going to have a barbecue and watch the sunset.', 'Om zes uur. We gaan barbecueën en naar de zonsondergang kijken.'],
        ['Ilse', 'Sounds great! Can I bring my roommate? Her name is Jade.', 'Klinkt goed! Mag ik mijn huisgenoot meenemen? Ze heet Jade.'],
        ['Carlos', 'Of course! Bring her. The more, the merrier.', 'Natuurlijk! Neem haar mee. Hoe meer zielen, hoe meer vreugd.'],
        ['Ilse', "Great. I'm going to bake you a Dutch apple pie!", 'Top. Ik ga een Hollandse appeltaart voor je bakken!'],
        ['Carlos', "Wow, thank you! See you on Saturday!", 'Wauw, dank je! Tot zaterdag!']
      ],
      q: [
        { t: 'mc', q: 'Where is the party?', o: ['At the beach', 'At Carlos’s house', 'At a restaurant'] },
        { t: 'mc', q: 'What time does the party start?', o: ['At six', 'At eight', 'At noon'] },
        { t: 'mc', q: 'What is Ilse going to bake?', o: ['A Dutch apple pie', 'A birthday cake', 'Cookies'] }
      ]
    },
    culture: { t: 'Uitnodigingen en feestdagen', html: `<p>Op een Amerikaans verjaardagsfeest <b>feliciteer</b> je de jarige zelf: <i>Happy birthday!</i> Familie en vrienden feliciteren («gefeliciteerd met je zus») doe je niet.</p>
<p>Een uitnodiging als <i>We should get coffee sometime!</i> is vaak gewoon beleefd en geen echte afspraak. Een echte uitnodiging heeft een dag en tijd: <i>Do you want to get coffee on Friday at ten?</i></p>
<p>🎆 Belangrijke Amerikaanse feestdagen: <b>Independence Day</b> (July 4), <b>Thanksgiving</b> (vierde donderdag van november), <b>Halloween</b> (October 31) en <b>Memorial Day</b> (eind mei).</p>` },
    ex: [
      { t: 'cloze', s: "I'm ___ to visit my parents on Sunday.", a: ['going'], o: ['going', 'go', 'goes'], nl: 'Ik ga zondag bij mijn ouders op bezoek.', tag: 'en-goingto' },
      { t: 'cloze', s: '___ you going to come to the party?', a: ['Are'], o: ['Are', 'Do', 'Will'], nl: 'Kom je naar het feest?', tag: 'en-goingto' },
      { t: 'cloze', s: 'My birthday is ___ May.', a: ['in'], o: ['in', 'on', 'at'], nl: 'Mijn verjaardag is in mei.', tag: 'en-dates' },
      { t: 'cloze', s: "Let's meet ___ Friday.", a: ['on'], o: ['on', 'in', 'at'], nl: 'Laten we vrijdag afspreken.', tag: 'en-dates' },
      { t: 'cloze', s: 'Can you help ___? (ons)', a: ['us'], o: ['us', 'we', 'our'], nl: 'Kun je ons helpen?', tag: 'en-obj' },
      { t: 'cloze', s: "I don't know ___. (hem)", a: ['him'], o: ['him', 'he', 'his'], nl: 'Ik ken hem niet.', tag: 'en-obj' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["Tomorrow I'm going to work.", 'Tomorrow am I going to work.', 'Tomorrow go I to work.'], tag: 'en-order' },
      { t: 'mc', q: 'In de VS betekent 5/6/2026…', o: ['6 mei 2026', '5 juni 2026', '5 juni 2006'], tag: 'en-dates' },
      { t: 'mc', q: 'Iemand nodigt je uit. Je wilt graag. Je zegt:', o: ["I'd love to!", "I'd love!", 'I love it to!'], tag: 'en-goingto' },
      { t: 'mc', q: 'Hoe schrijf je «dinsdag» in het Engels?', o: ['Tuesday', 'tuesday', 'Thuesday'], tag: 'en-dates' },
      { t: 'tr', nl: 'Wat ga je dit weekend doen?', a: ['What are you going to do this weekend?', 'What are you doing this weekend?'], tag: 'en-goingto' },
      { t: 'tr', nl: 'Sorry, ik kan niet. Ik heb het druk.', a: ["Sorry, I can't. I'm busy.", 'Sorry, I cannot. I am busy.', "Sorry, I can't. I am busy."], tag: 'en-goingto' },
      { t: 'tr', nl: 'Bel me morgen!', a: ['Call me tomorrow!', 'Call me tomorrow.'], tag: 'en-obj' },
      { t: 'order', s: 'Would you like to come to my party?', nl: 'Heb je zin om naar mijn feestje te komen?', tag: 'en-goingto' },
      { t: 'match', p: [['tonight', 'vanavond'], ['tomorrow', 'morgen'], ['next week', 'volgende week'], ['to invite', 'uitnodigen'], ['to celebrate', 'vieren']], tag: 'en-dates' }
    ],
    reading: {
      t: 'You’re invited!', type: 'Uitnodiging',
      p: [
        ["You're invited to Emma's 30th birthday party! When: Saturday, August 15, at 7 p.m. Where: Emma's house, 22 Oak Street.", 'Je bent uitgenodigd voor het 30e verjaardagsfeest van Emma! Wanneer: zaterdag 15 augustus, om 19:00 uur. Waar: bij Emma thuis, Oak Street 22.'],
        ["We're going to have pizza, music and a lot of fun. Please don't bring presents. Just bring yourself and a smile!", 'We gaan pizza eten, muziek luisteren en veel plezier maken. Graag geen cadeaus. Neem alleen jezelf en een glimlach mee!'],
        ["It's a surprise, so don't tell her! Please RSVP to her husband, Jake, by August 8.", 'Het is een verrassing, dus vertel het haar niet! Laat het uiterlijk 8 augustus weten aan haar man, Jake.']
      ],
      gl: [['presents', 'cadeaus'], ['a surprise', 'een verrassing'], ['RSVP', 'laat weten of je komt']],
      q: [
        { t: 'mc', q: 'When is the party?', o: ['Saturday, August 15, at 7 p.m.', 'August 8', 'Sunday at 7 a.m.'] },
        { t: 'mc', q: 'What should you bring?', o: ['Nothing, just yourself', 'A present', 'Pizza'] },
        { t: 'mc', q: 'Who do you tell if you are coming?', o: ['Jake, her husband', 'Emma', 'Nobody'] }
      ]
    },
    say: [["Would you like to come to my party?", 'Heb je zin om naar mijn feestje te komen?'], ["I'd love to!", 'Heel graag!'], ["I'm going to visit my grandma on Sunday.", 'Ik ga zondag naar mijn oma.'], ["Sorry, I can't. I'm busy.", 'Sorry, ik kan niet. Ik heb het druk.']],
    task: { nl: 'Schrijf een korte uitnodiging (4–5 zinnen) voor een feest of etentje. Noem de dag, datum en tijd, zeg wat jullie gaan doen (going to) en vraag of de ander komt.', model: "Hi Jessica! I'm going to have a dinner party on Saturday, June 6, at seven. I'm going to cook Dutch food. My friends Tom and Lisa are going to come too. Would you like to come? Let me know!" },
    scenario: { nl: 'Een Amerikaanse vriend nodigt je uit voor een feest.', role: 'You are Carlos, a fun-loving friend from Miami. Invite the learner to your birthday party. Answer their questions about the day, time, place and plans (going to). Ask if they can come and if they want to bring someone.', goal: 'Reageer op de uitnodiging, vraag naar details en zeg wat je meeneemt.' }
  });
})(window.SPT);
