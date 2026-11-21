/* Engels voor Nederlandstaligen — niveau B1, units 1–5 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-usedto': 'used to', 'en-ppc': 'present perfect continuous', 'en-forsince': 'for / since', 'en-passive': 'de lijdende vorm (passive)',
    'en-if2': 'if + past, would (tweede conditional)', 'en-wish': 'I wish…', 'en-rel': 'betrekkelijke bijzinnen (who, which, that)', 'en-where': 'where / whose'
  });

  /* ───────────────────────── B1 · 1 ───────────────────────── */
  U({
    id: 'en-b1-01', level: 'B1', icon: '📼', title: 'I used to…', nl: 'Vroeger en nu',
    goals: ['Vertellen hoe het vroeger was met used to', 'Vroeger en nu vergelijken', 'Het verschil tussen used to, be used to en get used to'],
    vocab: [
      ['childhood', 'jeugd (kindertijd)'], ['to grow up', 'opgroeien'], ['a teenager', 'een tiener'], ['when I was young', 'toen ik jong was'], ['in the past', 'vroeger'],
      ['nowadays', 'tegenwoordig'], ['these days', 'tegenwoordig'], ['anymore', 'niet meer'], ['still', 'nog steeds'], ['a habit', 'een gewoonte'],
      ['a cassette', 'een cassettebandje'], ['a landline', 'een vaste telefoon'], ['a VCR', 'een videorecorder'], ['to rewind', 'terugspoelen'], ['old-fashioned', 'ouderwets'],
      ['to remember', 'zich herinneren'], ['to miss', 'missen'], ['to change', 'veranderen'], ['to get used to', 'wennen aan'], ['to be used to', 'gewend zijn aan'],
      ['shy', 'verlegen'], ['outgoing', 'extravert'], ['curly hair', 'krullend haar'], ['to hang out', 'rondhangen / chillen']
    ],
    grammar: [
      { t: 'Used to: vroeger wel, nu niet meer', es: 'Used to',
        html: `<p>Met <b>used to</b> + werkwoord vertel je over gewoontes of situaties die <b>vroeger</b> zo waren, maar <b>nu niet meer</b>:</p>
<p><i>I <b>used to</b> live in Rotterdam.</i> (Vroeger woonde ik in Rotterdam.) <i>She <b>used to</b> have long hair.</i></p>
<p>Ontkenning en vraag met <b>did</b>, en dan <b>use to</b> (zonder -d): <i>I <b>didn't use to</b> like coffee. <b>Did</b> you <b>use to</b> play soccer?</i></p>
<p>Het Nederlands zegt meestal «vroeger» + verleden tijd. In het Engels kan dat ook (<i>I lived in Rotterdam</i>), maar <i>used to</i> maakt duidelijk dat het nu anders is.</p>`,
        table: [['', 'voorbeeld', 'Nederlands'], ['bevestigend', 'I used to smoke.', 'Vroeger rookte ik.'], ['ontkennend', "I didn't use to like tea.", 'Vroeger vond ik thee niet lekker.'], ['vraag', 'Did you use to live here?', 'Woonde jij hier vroeger?']],
        sum: 'I used to live in Rotterdam. Now I live in Boston.',
        ex: [['We used to go camping every summer.', 'Vroeger gingen we elke zomer kamperen.'], ["I didn't use to like vegetables, but now I love them.", 'Vroeger vond ik groente niet lekker, maar nu ben ik er dol op.']] },
      { t: 'Used to, be used to, get used to', es: 'Be / get used to',
        html: `<p>Drie vormen die op elkaar lijken, maar iets anders betekenen:</p>
<p><b>used to + werkwoord</b> = vroeger: <i>I <b>used to drive</b> on the left.</i></p>
<p><b>be used to + -ing / zelfst. nw.</b> = gewend zijn aan: <i>I'<b>m used to driving</b> on the right.</i> <i>She'<b>s used to</b> the cold.</i></p>
<p><b>get used to + -ing / zelfst. nw.</b> = wennen aan: <i>I'm <b>getting used to</b> American food.</i> <i>You'll <b>get used to</b> it!</i></p>
<p>Na <i>be/get used to</i> komt dus <b>-ing</b>, niet het hele werkwoord: <s>I'm used to drive</s>.</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['used to + ww', 'vroeger', 'I used to work at night.'], ['be used to + -ing', 'gewend zijn', "I'm used to working at night."], ['get used to + -ing', 'wennen', "I'm getting used to working at night."]],
        ex: [["I'm not used to tipping. In the Netherlands we don't tip much.", 'Ik ben niet gewend om fooi te geven. In Nederland geven we weinig fooi.'], ["Don't worry, you'll get used to the time difference.", 'Maak je geen zorgen, je went wel aan het tijdsverschil.']] }
    ],
    dialogue: {
      t: 'Old photos', place: 'Cleveland 🇺🇸',
      lines: [
        ['Grandpa Joe', "Look at this photo. That's me in 1975.", 'Kijk naar deze foto. Dat ben ik in 1975.'],
        ['Wouter', "No way! You used to have long hair!", 'Echt niet! Jij had vroeger lang haar!'],
        ['Grandpa Joe', "I did. And I used to play the guitar in a band. We used to practice in my parents' garage.", 'Klopt. En ik speelde gitaar in een band. We oefenden altijd in de garage van mijn ouders.'],
        ['Wouter', 'Did you use to play concerts?', 'Gaven jullie ook concerten?'],
        ['Grandpa Joe', "Only at school dances. We weren't very good! What about you? What did you use to do as a kid?", 'Alleen op schoolfeesten. We waren niet zo goed! En jij? Wat deed jij vroeger als kind?'],
        ['Wouter', "I used to ride my bike everywhere. In Holland everyone bikes, even in the rain.", 'Ik fietste overal naartoe. In Nederland fietst iedereen, zelfs in de regen.'],
        ['Grandpa Joe', 'And now? Do you miss it here?', 'En nu? Mis je het hier?'],
        ['Wouter', "A little. I'm still getting used to driving everywhere. But I'm used to the big portions now!", 'Een beetje. Ik moet nog steeds wennen aan overal met de auto heen gaan. Maar aan de grote porties ben ik nu wel gewend!']
      ],
      q: [
        { t: 'mc', q: 'What did Grandpa Joe use to have?', o: ['Long hair', 'A motorcycle', 'A beard'] },
        { t: 'mc', q: 'Where did the band use to practice?', o: ["In his parents' garage", 'At school', 'In a studio'] },
        { t: 'mc', q: 'What is Wouter still getting used to?', o: ['Driving everywhere', 'The big portions', 'The weather'] }
      ]
    },
    culture: { t: 'Nostalgie: de jaren 80 en 90', html: `<p>Amerikanen zijn dol op <b>nostalgie</b>. Series als <i>Stranger Things</i> spelen in de jaren 80, en woorden als <i>mixtape</i>, <i>Walkman</i> en <i>VCR</i> roepen herinneringen op.</p>
<p>Een typisch gesprek begint met <i>Back in my day…</i> (in mijn tijd…) of <i>When I was a kid, we used to…</i>. Grootouders vertellen graag hoe ze vroeger <i>uphill both ways</i> naar school moesten lopen (een bekende grap: bergop, heen én terug).</p>
<p>📼 Een <i>landline</i> is een vaste telefoon. Veel jonge Amerikanen hebben er nooit een gehad.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ to live in Amsterdam, but now I live in Denver.', a: ['used'], o: ['used', 'use', 'was used'], nl: 'Vroeger woonde ik in Amsterdam, maar nu woon ik in Denver.', tag: 'en-usedto' },
      { t: 'cloze', s: "Did you ___ to play an instrument?", a: ['use'], o: ['use', 'used', 'using'], nl: 'Speelde je vroeger een instrument?', tag: 'en-usedto' },
      { t: 'cloze', s: "I'm not used to ___ on the right.", a: ['driving'], o: ['driving', 'drive', 'drove'], nl: 'Ik ben niet gewend om rechts te rijden.', tag: 'en-usedto' },
      { t: 'cloze', s: "You'll get used ___ the weather.", a: ['to'], o: ['to', 'at', 'with'], nl: 'Je went wel aan het weer.', tag: 'en-usedto' },
      { t: 'cloze', s: "She didn't use to ___ coffee.", a: ['drink'], o: ['drink', 'drinking', 'drank'], nl: 'Vroeger dronk ze geen koffie.', tag: 'en-usedto' },
      { t: 'cloze', s: "We don't have a landline ___.", a: ['anymore'], o: ['anymore', 'still', 'already'], nl: 'We hebben geen vaste telefoon meer.', tag: 'en-usedto' },
      { t: 'mc', q: '«I’m used to getting up early» betekent…', o: ['Ik ben gewend om vroeg op te staan.', 'Vroeger stond ik vroeg op.', 'Ik moet wennen aan vroeg opstaan.'], tag: 'en-usedto' },
      { t: 'mc', q: '«Ik moet nog wennen aan het eten»:', o: ["I'm still getting used to the food.", 'I still used to the food.', "I'm still use to the food."], tag: 'en-usedto' },
      { t: 'mc', q: '«Tegenwoordig» in het Engels:', o: ['nowadays', 'todays', 'in these times of now'], tag: 'en-usedto' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['He used to be shy.', 'He use to be shy.', 'He was used to be shy.'], tag: 'en-usedto' },
      { t: 'tr', nl: 'Vroeger had ik krullend haar.', a: ['I used to have curly hair.'], tag: 'en-usedto' },
      { t: 'tr', nl: 'Ik ben gewend aan de kou.', a: ["I'm used to the cold.", 'I am used to the cold.'], tag: 'en-usedto' },
      { t: 'tr', nl: 'Ze speelde vroeger tennis.', a: ['She used to play tennis.'], tag: 'en-usedto' },
      { t: 'order', s: 'We used to spend every summer at the beach.', nl: 'Vroeger brachten we elke zomer door aan het strand.', tag: 'en-usedto' },
      { t: 'match', p: [['childhood', 'jeugd'], ['to grow up', 'opgroeien'], ['shy', 'verlegen'], ['outgoing', 'extravert'], ['old-fashioned', 'ouderwets']], tag: 'en-usedto' }
    ],
    reading: {
      t: 'Growing up in the 90s', type: 'Column',
      p: [
        ["When I was a kid in the 1990s, life was very different. We didn't use to have smartphones. If you wanted to talk to a friend, you called their house and spoke to their mom first.", 'Toen ik in de jaren 90 een kind was, was het leven heel anders. We hadden geen smartphones. Als je een vriend wilde spreken, belde je naar zijn huis en sprak je eerst zijn moeder.'],
        ["We used to rent movies from a video store every Friday. If you didn't rewind the tape, you had to pay a fine! And we used to make mixtapes for people we liked.", 'Elke vrijdag huurden we films bij de videotheek. Als je de band niet terugspoelde, kreeg je een boete! En we maakten mixtapes voor mensen die we leuk vonden.'],
        ["Nowadays my kids can't imagine it. But honestly? I still miss the excitement of waiting for a song on the radio so I could record it.", 'Tegenwoordig kunnen mijn kinderen het zich niet voorstellen. Maar eerlijk gezegd? Ik mis nog steeds de spanning van wachten op een liedje op de radio, zodat ik het kon opnemen.']
      ],
      gl: [['a fine', 'een boete'], ['to imagine', 'zich voorstellen'], ['to record', 'opnemen']],
      q: [
        { t: 'mc', q: 'How did kids talk to friends in the 90s?', o: ["They called their friend's house", 'They sent text messages', 'They used video calls'] },
        { t: 'mc', q: "What happened if you didn't rewind the tape?", o: ['You had to pay a fine', 'The store closed', 'Nothing'] },
        { t: 'mc', q: 'What does the writer still miss?', o: ['Waiting to record a song from the radio', 'The video store', 'Landlines'] }
      ]
    },
    say: [['I used to live in the Netherlands.', 'Vroeger woonde ik in Nederland.'], ["I'm not used to this.", 'Ik ben dit niet gewend.'], ["You'll get used to it.", 'Je went er wel aan.'], ['Did you use to play sports?', 'Deed je vroeger aan sport?']],
    task: { nl: 'Schrijf 5 zinnen over hoe je leven vroeger was en hoe het nu is. Gebruik minstens drie keer used to, één keer didn’t use to en één keer be/get used to.', model: "When I was a teenager, I used to be very shy. I used to spend hours playing video games. I didn't use to like reading, but now I read every night. I used to live with my parents in Breda; now I live in Amsterdam. I'm used to the busy city now, but it took a while!" },
    scenario: { nl: 'Je praat met een Amerikaanse opa over vroeger.', role: 'You are Grandpa Joe, a warm, chatty 75-year-old from Cleveland, Ohio. Tell the learner stories about the old days (used to…) and ask them how their childhood was and what has changed. Ask if they are getting used to life in the US.', goal: 'Vertel over vroeger met used to en vergelijk met nu.' }
  });

  /* ───────────────────────── B1 · 2 ───────────────────────── */
  U({
    id: 'en-b1-02', level: 'B1', icon: '⏳', title: 'How long have you…?', nl: 'Sinds wanneer en hoe lang',
    goals: ['De grootste Nederlandse fout vermijden: I live here since 2020', 'for en since correct gebruiken', 'De present perfect continuous: I’ve been waiting'],
    vocab: [
      ['for', 'voor / al (een periode)'], ['since', 'sinds (een beginpunt)'], ['How long…?', 'Hoe lang…?'], ['ages', 'een eeuwigheid'], ['recently', 'onlangs / de laatste tijd'],
      ['lately', 'de laatste tijd'], ['so far', 'tot nu toe'], ['to wait', 'wachten'], ['to learn', 'leren'], ['to know', 'kennen / weten'],
      ['to live', 'wonen'], ['to work', 'werken'], ['to date someone', 'met iemand gaan / daten'], ['to be married', 'getrouwd zijn'], ['a decade', 'een decennium'],
      ['a while', 'een tijdje'], ['exhausted', 'uitgeput'], ['to rain', 'regenen'], ['to train', 'trainen'], ['to practice', 'oefenen'],
      ['an anniversary', 'een jubileum / trouwdag'], ['all day', 'de hele dag'], ['since then', 'sindsdien'], ['for a long time', 'al lang']
    ],
    grammar: [
      { t: 'Sinds en al: niet de tegenwoordige tijd!', es: 'For and since',
        html: `<p>De bekendste fout van Nederlanders in het Engels: <s>I live here since 2020.</s> <s>I know him for ten years.</s></p>
<p>Voor iets wat in het verleden <b>begon</b> en <b>nu nog doorgaat</b>, gebruik je in het Engels de <b>present perfect</b>: <i>I'<b>ve lived</b> here since 2020. I'<b>ve known</b> him for ten years.</i></p>
<p><b>since</b> + beginpunt: <i>since 2020, since Monday, since I was a child</i>.</p>
<p><b>for</b> + periode: <i>for ten years, for two hours, for a long time</i>.</p>
<p>Vraag: <i><b>How long have</b> you <b>lived</b> here?</i> (Niet <s>How long do you live here?</s>, en ook niet <s>How long are you here?</s>, want dat betekent: hoe lang blijf je nog?)</p>`,
        table: [['Nederlands', 'fout', 'goed'], ['Ik woon hier sinds 2020.', 'I live here since 2020.', "I've lived here since 2020."], ['Ik ken haar al tien jaar.', 'I know her for ten years.', "I've known her for ten years."], ['Hoe lang ben je al getrouwd?', 'How long are you married?', 'How long have you been married?'], ['Ik heb hem al jaren niet gezien.', "I don't see him for years.", "I haven't seen him for years."]],
        sum: "I've lived here since 2020. I've known her for ten years.",
        ex: [["We've been married for twelve years.", 'We zijn al twaalf jaar getrouwd.'], ["I haven't seen my brother since Christmas.", 'Ik heb mijn broer sinds Kerstmis niet gezien.']] },
      { t: 'Present perfect continuous', es: 'Present perfect continuous',
        html: `<p>Voor een <b>activiteit</b> die al een tijdje bezig is (en vaak nog doorgaat), gebruik je de <b>present perfect continuous</b>: <b>have/has been + -ing</b>.</p>
<p><i>I'<b>ve been waiting</b> for an hour!</i> (Ik sta al een uur te wachten!) <i>It'<b>s been raining</b> all day.</i> <i>How long <b>have</b> you <b>been learning</b> English?</i></p>
<p>Ook als je het <b>resultaat</b> ziet: <i>You look tired. — I'<b>ve been working</b> all night.</i></p>
<p>Bij werkwoorden die een <b>toestand</b> zijn (know, like, be, have, want) gebruik je geen continuous: <i>I'<b>ve known</b> her for years</i> (niet <s>I've been knowing</s>).</p>`,
        table: [['', 'voorbeeld', 'Nederlands'], ['activiteit', "I've been studying for three hours.", 'Ik zit al drie uur te studeren.'], ['vraag', 'How long have you been waiting?', 'Hoe lang sta je al te wachten?'], ['resultaat', "She's been crying.", 'Ze heeft gehuild (je ziet het).'], ['toestand', "I've known him since 2010.", 'Ik ken hem sinds 2010.']],
        ex: [["I've been learning English since I was ten.", 'Ik leer Engels sinds mijn tiende.'], ["We've been driving for six hours. Let's stop!", 'We rijden al zes uur. Laten we stoppen!']] }
    ],
    dialogue: {
      t: 'Small talk at a wedding', place: 'Charleston, South Carolina 🇺🇸',
      lines: [
        ['Megan', "Hi! I'm Megan, the bride's sister. How do you know the couple?", 'Hoi! Ik ben Megan, de zus van de bruid. Hoe ken jij het bruidspaar?'],
        ['Joris', "I work with Sam. We've worked together since 2019.", 'Ik werk met Sam. We werken sinds 2019 samen.'],
        ['Megan', 'Oh, nice! And how long have you lived in the US?', 'O, leuk! En hoe lang woon je al in de VS?'],
        ['Joris', "I've been here for five years now. I came for a job and never left.", 'Ik ben hier nu vijf jaar. Ik kwam voor een baan en ben nooit meer weggegaan.'],
        ['Megan', 'Your English is great! How long have you been learning it?', 'Je Engels is geweldig! Hoe lang leer je het al?'],
        ['Joris', "Since I was a kid. In the Netherlands we watch a lot of American TV without dubbing.", 'Sinds ik een kind was. In Nederland kijken we veel Amerikaanse tv zonder nasynchronisatie.'],
        ['Megan', "That explains it. Oh, look, they're cutting the cake! I've been waiting for this all day.", 'Dat verklaart het. O kijk, ze snijden de taart aan! Daar wacht ik al de hele dag op.'],
        ['Joris', "Me too. I haven't eaten since breakfast!", 'Ik ook. Ik heb sinds het ontbijt niets gegeten!']
      ],
      q: [
        { t: 'mc', q: 'How long has Joris worked with Sam?', o: ['Since 2019', 'For two years', 'Since he was a kid'] },
        { t: 'mc', q: 'How long has Joris lived in the US?', o: ['For five years', 'Since 2010', 'For one year'] },
        { t: 'mc', q: 'Why is Joris’s English so good?', o: ['Dutch TV shows American programs without dubbing', 'He studied in the US', 'His parents are American'] }
      ]
    },
    culture: { t: 'Bruiloften in het Zuiden', html: `<p><b>Charleston</b> in South Carolina is een van de populairste trouwplaatsen van de VS, met oude huizen, eikenbomen met <i>Spanish moss</i> en zuidelijke gastvrijheid.</p>
<p>Op een Amerikaanse bruiloft zijn er een <b>maid of honor</b> en <b>best man</b>, een <b>rehearsal dinner</b> de avond ervoor en toespraken (<i>toasts</i>) tijdens het diner. Cadeaus kies je van een <i>registry</i> (verlanglijst).</p>
<p>📺 Dat Nederlanders zo goed Engels spreken, komt mede doordat buitenlandse series hier ondertiteld worden en niet nagesynchroniseerd, zoals in Duitsland of Spanje.</p>` },
    ex: [
      { t: 'cloze', s: "I've lived in Chicago ___ 2018.", a: ['since'], o: ['since', 'for', 'from'], nl: 'Ik woon sinds 2018 in Chicago.', tag: 'en-forsince' },
      { t: 'cloze', s: "We've known each other ___ twenty years.", a: ['for'], o: ['for', 'since', 'during'], nl: 'We kennen elkaar al twintig jaar.', tag: 'en-forsince' },
      { t: 'cloze', s: '___ in Boston since March.', a: ["I've been"], o: ["I've been", "I'm", 'I was'], nl: 'Ik ben sinds maart in Boston.', tag: 'en-forsince' },
      { t: 'cloze', s: "How long ___ you been married?", a: ['have'], o: ['have', 'are', 'do'], nl: 'Hoe lang ben je al getrouwd?', tag: 'en-forsince' },
      { t: 'cloze', s: "It's ___ raining all day.", a: ['been'], o: ['been', 'being', 'be'], nl: 'Het regent al de hele dag.', tag: 'en-ppc' },
      { t: 'cloze', s: "I've been ___ for the bus for 30 minutes!", a: ['waiting'], o: ['waiting', 'waited', 'wait'], nl: 'Ik sta al een half uur op de bus te wachten!', tag: 'en-ppc' },
      { t: 'cloze', s: "I haven't seen her ___ ages.", a: ['for'], o: ['for', 'since', 'in the'], nl: 'Ik heb haar in geen eeuwen gezien.', tag: 'en-forsince' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["I've worked here since May.", 'I work here since May.', 'I am working here since May.'], tag: 'en-forsince' },
      { t: 'mc', q: '«How long are you here?» betekent…', o: ['Hoe lang blijf je (nog) hier?', 'Hoe lang ben je al hier?', 'Hoe groot ben je?'], tag: 'en-forsince' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["I've known him for years.", "I've been knowing him for years.", 'I know him since years.'], tag: 'en-ppc' },
      { t: 'tr', nl: 'Ik woon hier al tien jaar.', a: ["I've lived here for ten years.", 'I have lived here for ten years.', "I've been living here for ten years.", 'I have been living here for ten years.'], tag: 'en-forsince' },
      { t: 'tr', nl: 'Hoe lang leer je al Engels?', a: ['How long have you been learning English?', 'How long have you been studying English?', 'How long have you learned English?'], tag: 'en-ppc' },
      { t: 'tr', nl: 'Ik ken haar sinds de middelbare school.', a: ["I've known her since high school.", 'I have known her since high school.'], tag: 'en-forsince' },
      { t: 'order', s: "We've been driving for six hours.", nl: 'We rijden al zes uur.', tag: 'en-ppc' },
      { t: 'match', p: [['lately', 'de laatste tijd'], ['so far', 'tot nu toe'], ['a while', 'een tijdje'], ['since then', 'sindsdien'], ['an anniversary', 'een jubileum']], tag: 'en-forsince' }
    ],
    reading: {
      t: '50 years together', type: 'Lokaal nieuws',
      p: [
        ["Bob and Linda Miller from Savannah, Georgia, have been married for fifty years. They have lived in the same house since 1976.", 'Bob en Linda Miller uit Savannah, Georgia, zijn vijftig jaar getrouwd. Ze wonen sinds 1976 in hetzelfde huis.'],
        ["«We've known each other since we were six,» says Linda. «We went to the same elementary school. He's been making me laugh since the first day.»", '«We kennen elkaar al sinds ons zesde,» zegt Linda. «We zaten op dezelfde basisschool. Hij laat me al lachen sinds de eerste dag.»'],
        ["Their secret? «We've been dancing together every Saturday night for fifty years,» says Bob. «Even when we argue, we still dance.»", 'Hun geheim? «We dansen al vijftig jaar elke zaterdagavond samen,» zegt Bob. «Zelfs als we ruzie hebben, dansen we nog steeds.»']
      ],
      gl: [['elementary school', 'basisschool'], ['the secret', 'het geheim'], ['to argue', 'ruziemaken']],
      q: [
        { t: 'mc', q: 'How long have Bob and Linda been married?', o: ['Fifty years', 'Since they were six', 'Since 1976'] },
        { t: 'mc', q: 'Since when have they known each other?', o: ['Since they were six', 'Since 1976', 'For ten years'] },
        { t: 'mc', q: 'What have they been doing every Saturday night?', o: ['Dancing together', 'Arguing', 'Going to the movies'] }
      ]
    },
    say: [["I've lived here for five years.", 'Ik woon hier al vijf jaar.'], ['How long have you been learning English?', 'Hoe lang leer je al Engels?'], ["I've been waiting for ages!", 'Ik sta al eeuwen te wachten!'], ["We've known each other since college.", 'We kennen elkaar sinds de universiteit.']],
    task: { nl: 'Schrijf 5 zinnen over jezelf: hoe lang je ergens woont, werkt, iemand kent en iets leert. Gebruik for én since, en minstens één present perfect continuous.', model: "I've lived in Leiden since 2015. I've worked as a teacher for eight years. I've known my best friend since primary school. I've been learning English for most of my life, but I've been taking lessons only since January. I've been trying to watch American TV without subtitles!" },
    scenario: { nl: 'Je maakt kennis met iemand op een Amerikaanse bruiloft.', role: 'You are Megan, a friendly guest at a wedding in Charleston, South Carolina. Make small talk with the learner. Ask How long… questions (How long have you known the couple / lived in the US / been learning English?). If the learner says «I live here since…» or «I know him for…», gently model the correct present perfect.', goal: 'Beantwoord How long…?-vragen correct met for en since.' }
  });

  /* ───────────────────────── B1 · 3 ───────────────────────── */
  U({
    id: 'en-b1-03', level: 'B1', icon: '🏭', title: 'Made in…', nl: 'Hoe iets gemaakt wordt: de lijdende vorm',
    goals: ['De passive in de tegenwoordige en verleden tijd', 'Uitleggen hoe iets gemaakt of gedaan wordt', 'by gebruiken om te zeggen door wie'],
    vocab: [
      ['to make', 'maken'], ['to build', 'bouwen'], ['to invent', 'uitvinden'], ['to discover', 'ontdekken'], ['to produce', 'produceren'],
      ['to grow', 'verbouwen / groeien'], ['to sell', 'verkopen'], ['to export', 'exporteren'], ['to design', 'ontwerpen'], ['to found', 'oprichten'],
      ['a factory', 'een fabriek'], ['a product', 'een product'], ['a brand', 'een merk'], ['materials', 'materialen'], ['wood', 'hout'],
      ['plastic', 'plastic'], ['steel', 'staal'], ['cotton', 'katoen'], ['by hand', 'met de hand'], ['worldwide', 'wereldwijd'],
      ['an invention', 'een uitvinding'], ['to be based in', 'gevestigd zijn in'], ['to recycle', 'recyclen'], ['to ship', 'verzenden']
    ],
    grammar: [
      { t: 'De passive: is made, was built', es: 'The passive',
        html: `<p>In de <b>passive</b> (lijdende vorm) staat het <b>ding</b> centraal, niet wie het doet. Vorm: <b>to be + voltooid deelwoord</b>.</p>
<p><b>Present</b>: <i>Cheese <b>is made</b> from milk. iPhones <b>are made</b> in China.</i></p>
<p><b>Past</b>: <i>The bridge <b>was built</b> in 1937. These photos <b>were taken</b> in Paris.</i></p>
<p>Het Nederlands gebruikt hier «worden» of «zijn»: «Kaas <b>wordt</b> van melk gemaakt.» «De brug <b>werd</b> in 1937 gebouwd.» In het Engels is het altijd een vorm van <b>to be</b>: <s>Cheese becomes made</s>.</p>`,
        table: [['tijd', 'actief', 'passief'], ['present', 'They make cars here.', 'Cars are made here.'], ['past', 'They built it in 1937.', 'It was built in 1937.'], ['present perfect', 'They have sold the house.', 'The house has been sold.'], ['met can', 'You can recycle it.', 'It can be recycled.']],
        sum: 'Cheese is made from milk. The bridge was built in 1937.',
        ex: [['Gouda cheese is made in the Netherlands.', 'Goudse kaas wordt in Nederland gemaakt.'], ['The Golden Gate Bridge was opened in 1937.', 'De Golden Gate Bridge werd in 1937 geopend.']] },
      { t: 'By: door wie?', es: 'By',
        html: `<p>Wil je zeggen <b>door wie</b> iets gedaan is, gebruik dan <b>by</b>: <i>The telephone was invented <b>by</b> Alexander Graham Bell.</i> <i>The Night Watch was painted <b>by</b> Rembrandt.</i></p>
<p>Vaak laat je de dader weg, omdat die onbekend of onbelangrijk is: <i>My bike <b>was stolen</b>.</i> (Door wie? Weet ik niet.)</p>
<p>Let op: <i>made <b>of</b></i> = gemaakt van (het materiaal zie je nog: <i>made of wood</i>), <i>made <b>from</b></i> = gemaakt uit (het materiaal is veranderd: <i>made from grapes</i>), <i>made <b>in</b></i> = gemaakt in (een land).</p>`,
        table: [['voorzetsel', 'betekenis', 'voorbeeld'], ['by', 'door (wie)', 'painted by Van Gogh'], ['made of', 'van (zichtbaar materiaal)', 'made of wood'], ['made from', 'uit (veranderd)', 'Wine is made from grapes.'], ['made in', 'in (land)', 'made in the USA']],
        ex: [['This table is made of oak.', 'Deze tafel is van eikenhout.'], ['Sunflowers was painted by Vincent van Gogh.', 'De Zonnebloemen is geschilderd door Vincent van Gogh.']] }
    ],
    dialogue: {
      t: 'A factory tour', place: 'Hershey, Pennsylvania 🇺🇸',
      lines: [
        ['Guide', "Welcome to the chocolate factory! This company was founded in 1894.", 'Welkom in de chocoladefabriek! Dit bedrijf werd in 1894 opgericht.'],
        ['Lotte', 'Wow. Where are the cocoa beans grown?', 'Wauw. Waar worden de cacaobonen verbouwd?'],
        ['Guide', "Mostly in West Africa. They're shipped to the US by boat.", 'Vooral in West-Afrika. Ze worden per boot naar de VS verscheept.'],
        ['Lotte', 'And how is the chocolate made?', 'En hoe wordt de chocolade gemaakt?'],
        ['Guide', "First, the beans are roasted. Then they're crushed and mixed with sugar and milk.", 'Eerst worden de bonen geroosterd. Daarna worden ze vermalen en gemengd met suiker en melk.'],
        ['Lotte', 'Is everything done by machines?', 'Wordt alles door machines gedaan?'],
        ['Guide', "Almost everything. But the special chocolates are still decorated by hand.", 'Bijna alles. Maar de speciale bonbons worden nog steeds met de hand versierd.'],
        ['Lotte', "Fun fact: milk chocolate was invented in Switzerland, but cocoa powder was invented by a Dutchman, Van Houten!", 'Leuk weetje: melkchocolade is uitgevonden in Zwitserland, maar cacaopoeder werd uitgevonden door een Nederlander, Van Houten!'],
        ['Guide', "I didn't know that! Here, try a free sample.", 'Dat wist ik niet! Hier, proef een gratis monster.']
      ],
      q: [
        { t: 'mc', q: 'When was the company founded?', o: ['In 1894', 'In 1984', 'In 1948'] },
        { t: 'mc', q: 'Where are the cocoa beans mostly grown?', o: ['In West Africa', 'In Pennsylvania', 'In Switzerland'] },
        { t: 'mc', q: 'Who invented cocoa powder?', o: ['Van Houten, a Dutchman', 'A Swiss chocolatier', 'Milton Hershey'] }
      ]
    },
    culture: { t: 'Amerikaanse uitvindingen', html: `<p>Veel bekende dingen zijn in de VS uitgevonden: de <b>gloeilamp</b> (verbeterd door Thomas Edison), het <b>vliegtuig</b> (door de gebroeders Wright, 1903), het <b>internet</b> (als militair project begonnen) en de <b>smartphone</b> zoals we die kennen.</p>
<p>Maar ook Nederlanders hebben veel uitgevonden: de <b>microscoop</b>, de <b>wifi</b> (mede ontwikkeld in Nieuwegein), de <b>cd</b> (Philips) en de <b>bluetooth</b>-techniek.</p>
<p>🍫 Hershey, Pennsylvania is een hele stad rond een chocoladefabriek: de straatlantaarns hebben de vorm van chocolaatjes.</p>` },
    ex: [
      { t: 'cloze', s: 'Cheese ___ made from milk.', a: ['is'], o: ['is', 'becomes', 'are'], nl: 'Kaas wordt van melk gemaakt.', tag: 'en-passive' },
      { t: 'cloze', s: 'The Empire State Building ___ built in 1931.', a: ['was'], o: ['was', 'is', 'became'], nl: 'Het Empire State Building werd in 1931 gebouwd.', tag: 'en-passive' },
      { t: 'cloze', s: 'These shoes are made ___ Italy.', a: ['in'], o: ['in', 'by', 'of'], nl: 'Deze schoenen zijn in Italië gemaakt.', tag: 'en-passive' },
      { t: 'cloze', s: 'The light bulb was improved ___ Thomas Edison.', a: ['by'], o: ['by', 'from', 'of'], nl: 'De gloeilamp werd verbeterd door Thomas Edison.', tag: 'en-passive' },
      { t: 'cloze', s: 'This chair is made ___ wood.', a: ['of'], o: ['of', 'by', 'in'], nl: 'Deze stoel is van hout.', tag: 'en-passive' },
      { t: 'cloze', s: 'Millions of phones ___ sold every year.', a: ['are'], o: ['are', 'is', 'were be'], nl: 'Elk jaar worden er miljoenen telefoons verkocht.', tag: 'en-passive' },
      { t: 'cloze', s: 'My wallet ___ stolen on the subway.', a: ['was'], o: ['was', 'is been', 'became'], nl: 'Mijn portemonnee werd gestolen in de metro.', tag: 'en-passive' },
      { t: 'mc', q: '«De brief werd gisteren verstuurd»:', o: ['The letter was sent yesterday.', 'The letter became sent yesterday.', 'The letter is sent yesterday.'], tag: 'en-passive' },
      { t: 'mc', q: '«Wine is made ___ grapes.»', o: ['from', 'of', 'by'], tag: 'en-passive' },
      { t: 'mc', q: 'Welke zin is passief?', o: ['English is spoken here.', 'They speak English here.', 'We are speaking English.'], tag: 'en-passive' },
      { t: 'mc', q: 'Wie schilderde De Nachtwacht? «The Night Watch was painted ___ Rembrandt.»', o: ['by', 'from', 'with'], tag: 'en-passive' },
      { t: 'tr', nl: 'Hier wordt Engels gesproken.', a: ['English is spoken here.'], tag: 'en-passive' },
      { t: 'tr', nl: 'Het huis werd in 1920 gebouwd.', a: ['The house was built in 1920.'], tag: 'en-passive' },
      { t: 'order', s: 'These T-shirts are made of organic cotton.', nl: 'Deze T-shirts zijn van biologisch katoen.', tag: 'en-passive' },
      { t: 'match', p: [['to invent', 'uitvinden'], ['to found', 'oprichten'], ['a factory', 'een fabriek'], ['by hand', 'met de hand'], ['steel', 'staal'], ['worldwide', 'wereldwijd']], tag: 'en-passive' }
    ],
    reading: {
      t: 'The story of blue jeans', type: 'Achtergrondartikel',
      p: [
        ["Blue jeans are worn by millions of people around the world. But where do they come from?", 'Spijkerbroeken worden door miljoenen mensen over de hele wereld gedragen. Maar waar komen ze vandaan?'],
        ["The first jeans were made in 1873 in San Francisco. They were designed by Levi Strauss, a German immigrant, and Jacob Davis, a tailor. They were made for miners and workers, so they had to be very strong.", 'De eerste spijkerbroeken werden in 1873 in San Francisco gemaakt. Ze werden ontworpen door Levi Strauss, een Duitse immigrant, en Jacob Davis, een kleermaker. Ze werden gemaakt voor mijnwerkers en arbeiders, dus ze moesten heel sterk zijn.'],
        ["Jeans are made of cotton, and the blue color is called indigo. Today, more than a billion pairs are sold every year. Old jeans can even be recycled into new ones.", 'Spijkerbroeken zijn van katoen, en de blauwe kleur heet indigo. Tegenwoordig worden er elk jaar meer dan een miljard verkocht. Oude spijkerbroeken kunnen zelfs gerecycled worden tot nieuwe.']
      ],
      gl: [['an immigrant', 'een immigrant'], ['a tailor', 'een kleermaker'], ['miners', 'mijnwerkers']],
      q: [
        { t: 'mc', q: 'Where were the first jeans made?', o: ['In San Francisco', 'In Germany', 'In New York'] },
        { t: 'mc', q: 'Who were the first jeans made for?', o: ['Miners and workers', 'Teenagers', 'Cowboys only'] },
        { t: 'mc', q: 'How many pairs are sold every year?', o: ['More than a billion', 'About a million', 'A thousand'] }
      ]
    },
    say: [['It was made in the USA.', 'Het is in de VS gemaakt.'], ['English is spoken here.', 'Hier wordt Engels gesproken.'], ['My bike was stolen.', 'Mijn fiets is gestolen.'], ['It was invented by a Dutchman.', 'Het werd uitgevonden door een Nederlander.']],
    task: { nl: 'Beschrijf in 5 zinnen een typisch Nederlands product (kaas, stroopwafels, klompen, fietsen…): waar en hoe het gemaakt wordt, door wie, en waar het verkocht wordt. Gebruik minstens vier passieve zinnen.', model: "Stroopwafels are made in the Netherlands. They were first baked in Gouda around 1800. Two thin waffles are filled with caramel syrup. Today they are produced in big factories, but in markets they are still made by hand. They are sold all over the world, even at Starbucks!" },
    scenario: { nl: 'Je geeft een rondleiding of krijgt er een in een Amerikaanse fabriek.', role: 'You are a tour guide at a famous factory in the US (chocolate, cars, guitars or jeans). Explain how the product is made using the passive (is made, was founded, are shipped). Answer the learner’s questions and ask them how a typical Dutch product is made.', goal: 'Stel vragen en leg uit hoe iets gemaakt wordt met de passive.' }
  });

  /* ───────────────────────── B1 · 4 ───────────────────────── */
  U({
    id: 'en-b1-04', level: 'B1', icon: '💭', title: 'If I had a million dollars', nl: 'Denkbeeldige situaties',
    goals: ['Fantaseren met if + past, would (tweede conditional)', 'If I were you… om advies te geven', 'Wensen uiten met I wish…'],
    vocab: [
      ['a million', 'een miljoen'], ['to win the lottery', 'de loterij winnen'], ['rich', 'rijk'], ['poor', 'arm'], ['to afford', 'kunnen betalen'],
      ['to give away', 'weggeven'], ['a charity', 'een goed doel'], ['to quit your job', 'je baan opzeggen'], ['to travel the world', 'de wereld rondreizen'], ['a mansion', 'een villa'],
      ['a yacht', 'een jacht'], ['a superpower', 'een superkracht'], ['to fly', 'vliegen'], ['invisible', 'onzichtbaar'], ['to read minds', 'gedachten lezen'],
      ['to be able to', 'kunnen'], ['imagine', 'stel je voor'], ['If I were you…', 'Als ik jou was…'], ['I wish…', 'Ik wou dat…'], ['to regret', 'spijt hebben'],
      ['realistic', 'realistisch'], ['a dream', 'een droom'], ['probably', 'waarschijnlijk'], ['would', 'zou']
    ],
    grammar: [
      { t: 'If + past, would', es: 'Second conditional',
        html: `<p>Voor een <b>denkbeeldige</b> of onwaarschijnlijke situatie (nu of in de toekomst) gebruik je: <b>if + past simple</b>, <b>would + werkwoord</b>.</p>
<p><i><b>If</b> I <b>had</b> a million dollars, I <b>would</b> buy a house on the beach.</i> (Ik heb het geld niet.)</p>
<p><i><b>If</b> she <b>lived</b> closer, we<b>'d</b> see her more often.</i></p>
<p>Net als in het Nederlands («Als ik een miljoen <b>had</b>, <b>zou</b> ik…»). Maar: géén <i>would</i> in de if-zin: <s>If I would have a million…</s>. Dat zeggen Nederlanders vaak!</p>
<p>Vergelijk: <i>If I <b>win</b>, I'<b>ll</b>…</i> (echte kans) en <i>If I <b>won</b>, I'<b>d</b>…</i> (onwaarschijnlijk).</p>`,
        table: [['if-zin (past)', 'hoofdzin (would)'], ['If I had more time,', "I'd learn to play the piano."], ['If I lived in New York,', 'I would go to Broadway every week.'], ["If we didn't have kids,", "we'd travel more."], ['If you could fly,', 'where would you go?']],
        sum: "If I had a million dollars, I'd travel the world. (niet: if I would have)",
        ex: [["If I won the lottery, I'd quit my job.", 'Als ik de loterij won, zou ik mijn baan opzeggen.'], ['What would you do if you could be invisible?', 'Wat zou je doen als je onzichtbaar kon zijn?']] },
      { t: 'If I were you… en I wish…', es: 'If I were / I wish',
        html: `<p>Bij <b>to be</b> gebruik je in een denkbeeldige if-zin vaak <b>were</b> voor alle personen: <i>If I <b>were</b> rich… If he <b>were</b> here…</i> (<i>was</i> hoor je ook in spreektaal.)</p>
<p><b>If I were you</b>, I'd… is een vaste manier om <b>advies</b> te geven: <i><b>If I were you</b>, I'd call her.</i> (Als ik jou was, zou ik haar bellen.)</p>
<p><b>I wish</b> + past = ik wou dat (iets nu anders was): <i>I <b>wish</b> I <b>had</b> more time. I <b>wish</b> I <b>were</b> taller. I <b>wish</b> I <b>could</b> speak Japanese.</i></p>
<p>Niet <s>I wish I have</s>. En let op: <i>wish</i> is niet hetzelfde als <i>want</i>: <i>I want a coffee</i> (niet <s>I wish a coffee</s>).</p>`,
        table: [['Nederlands', 'Engels'], ['Als ik jou was, zou ik…', "If I were you, I'd…"], ['Ik wou dat ik meer tijd had.', 'I wish I had more time.'], ['Ik wou dat ik kon zingen.', 'I wish I could sing.'], ['Ik wou dat het zomer was.', 'I wish it were summer.']],
        ex: [["If I were you, I'd take the job.", 'Als ik jou was, zou ik de baan aannemen.'], ['I wish I lived closer to the ocean.', 'Ik wou dat ik dichter bij de zee woonde.']] }
    ],
    dialogue: {
      t: 'The lottery ticket', place: 'Las Vegas 🇺🇸',
      lines: [
        ['Kayla', "The jackpot is 500 million dollars this week! What would you do if you won?", 'De jackpot is deze week 500 miljoen dollar! Wat zou jij doen als je won?'],
        ['Stijn', "If I won that much, I'd buy a farm in Montana and live with a lot of dogs.", 'Als ik zoveel won, zou ik een boerderij in Montana kopen en met heel veel honden leven.'],
        ['Kayla', "Ha! I'd travel the world first. Then I'd give half the money to charity.", 'Ha! Ik zou eerst de wereld rondreizen. Daarna zou ik de helft aan goede doelen geven.'],
        ['Stijn', "That's generous. Would you quit your job?", 'Dat is gul. Zou je je baan opzeggen?'],
        ['Kayla', "Definitely! I wish I could quit tomorrow. My boss is terrible.", 'Absoluut! Ik wou dat ik morgen kon stoppen. Mijn baas is verschrikkelijk.'],
        ['Stijn', "If I were you, I'd look for a new job now. Don't wait for the lottery!", 'Als ik jou was, zou ik nu een nieuwe baan zoeken. Wacht niet op de loterij!'],
        ['Kayla', "You're right. The chance of winning is one in 300 million.", 'Je hebt gelijk. De kans om te winnen is één op 300 miljoen.'],
        ['Stijn', "Exactly. If I were you, I wouldn't buy the ticket at all.", 'Precies. Als ik jou was, zou ik het lot helemaal niet kopen.'],
        ['Kayla', "Too late. I already bought two. One is for you!", 'Te laat. Ik heb er al twee gekocht. Eén is voor jou!']
      ],
      q: [
        { t: 'mc', q: 'What would Stijn do if he won?', o: ['Buy a farm in Montana', 'Travel the world', 'Give it all to charity'] },
        { t: 'mc', q: 'Why does Kayla want to quit her job?', o: ['Her boss is terrible', 'She is tired', 'She wants to travel'] },
        { t: 'mc', q: 'What does Stijn advise Kayla?', o: ['To look for a new job now', 'To buy more tickets', 'To move to Montana'] }
      ]
    },
    culture: { t: 'De loterij en de American Dream', html: `<p>In de VS zijn loterijen als <b>Powerball</b> en <b>Mega Millions</b> enorm populair. De jackpot loopt soms op tot meer dan een miljard dollar. De kans om te winnen is ongeveer één op 300 miljoen.</p>
<p>De <b>American Dream</b> is het idee dat iedereen in Amerika door hard werken rijk en succesvol kan worden. Veel Amerikanen dromen hardop: <i>If I had the money, I'd start my own business.</i></p>
<p>🎰 In Las Vegas staan zelfs op het vliegveld gokautomaten. Gokken is in Nevada legaal, maar in veel andere staten niet.</p>` },
    ex: [
      { t: 'cloze', s: 'If I ___ more money, I would buy a house.', a: ['had'], o: ['had', 'would have', 'have'], nl: 'Als ik meer geld had, zou ik een huis kopen.', tag: 'en-if2' },
      { t: 'cloze', s: 'If she lived closer, we ___ see her more often.', a: ['would'], o: ['would', 'will', 'had'], nl: 'Als ze dichterbij woonde, zouden we haar vaker zien.', tag: 'en-if2' },
      { t: 'cloze', s: "If I ___ you, I'd talk to him.", a: ['were'], o: ['were', 'am', 'would be'], nl: 'Als ik jou was, zou ik met hem praten.', tag: 'en-if2' },
      { t: 'cloze', s: 'I wish I ___ speak Spanish.', a: ['could'], o: ['could', 'can', 'will'], nl: 'Ik wou dat ik Spaans sprak.', tag: 'en-wish' },
      { t: 'cloze', s: 'I wish I ___ more time.', a: ['had'], o: ['had', 'have', 'would have'], nl: 'Ik wou dat ik meer tijd had.', tag: 'en-wish' },
      { t: 'cloze', s: 'What ___ you do if you could fly?', a: ['would'], o: ['would', 'will', 'do'], nl: 'Wat zou je doen als je kon vliegen?', tag: 'en-if2' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["If I had a car, I'd drive to work.", "If I would have a car, I'd drive to work.", 'If I have a car, I would drive to work.'], tag: 'en-if2' },
      { t: 'mc', q: '«If I won» of «If I win»? De kans is heel klein.', o: ["If I won the lottery, I'd…", "If I win the lottery, I'll…", "If I will win the lottery…"], tag: 'en-if2' },
      { t: 'mc', q: '«Ik wil een koffie» in het Engels:', o: ['I want a coffee.', 'I wish a coffee.', 'I will a coffee.'], tag: 'en-wish' },
      { t: 'mc', q: 'Hoe geef je advies?', o: ["If I were you, I'd see a doctor.", 'If I am you, I see a doctor.', 'If I would be you, I would see a doctor.'], tag: 'en-if2' },
      { t: 'tr', nl: 'Als ik rijk was, zou ik de wereld rondreizen.', a: ["If I were rich, I'd travel the world.", 'If I were rich, I would travel the world.', "If I was rich, I'd travel the world.", 'If I was rich, I would travel the world.'], tag: 'en-if2' },
      { t: 'tr', nl: 'Ik wou dat het weekend was.', a: ['I wish it were the weekend.', 'I wish it was the weekend.', 'I wish it were weekend.'], tag: 'en-wish' },
      { t: 'order', s: "If I could have a superpower, I'd choose flying.", nl: 'Als ik een superkracht mocht hebben, zou ik vliegen kiezen.', tag: 'en-if2' },
      { t: 'match', p: [['to afford', 'kunnen betalen'], ['a charity', 'een goed doel'], ['invisible', 'onzichtbaar'], ['to regret', 'spijt hebben'], ['a mansion', 'een villa']], tag: 'en-if2' }
    ],
    reading: {
      t: 'What would you do?', type: 'Straatinterviews',
      p: [
        ["We asked people in Times Square: what would you do with a million dollars? «I'd pay off my student loans,» said Jordan, 26. «I wish I'd never taken them!»", 'We vroegen mensen op Times Square: wat zou jij doen met een miljoen dollar? «Ik zou mijn studieschuld afbetalen,» zei Jordan, 26. «Ik wou dat ik die nooit was aangegaan!»'],
        ["«If I had a million dollars, I'd open a bakery,» said Maria, 41. «I've always wanted to bake for a living.»", '«Als ik een miljoen dollar had, zou ik een bakkerij openen,» zei Maria, 41. «Ik heb altijd al van bakken mijn beroep willen maken.»'],
        ["And Harold, 82? «Honestly? I wouldn't change anything. If I were younger, maybe. But I already have everything I need.»", 'En Harold, 82? «Eerlijk gezegd? Ik zou niets veranderen. Als ik jonger was, misschien. Maar ik heb al alles wat ik nodig heb.»']
      ],
      gl: [['student loans', 'studieschuld'], ['to pay off', 'afbetalen'], ['for a living', 'als beroep']],
      q: [
        { t: 'mc', q: 'What would Jordan do with the money?', o: ['Pay off student loans', 'Open a bakery', 'Nothing'] },
        { t: 'mc', q: 'What has Maria always wanted?', o: ['To bake for a living', 'To travel', 'To retire'] },
        { t: 'mc', q: 'Why wouldn’t Harold change anything?', o: ['He already has everything he needs', 'He is too old to travel', "He doesn't like money"] }
      ]
    },
    say: [["If I had a million dollars, I'd travel the world.", 'Als ik een miljoen dollar had, zou ik de wereld rondreizen.'], ["If I were you, I'd call her.", 'Als ik jou was, zou ik haar bellen.'], ['I wish I had more time.', 'Ik wou dat ik meer tijd had.'], ['What would you do?', 'Wat zou jij doen?']],
    task: { nl: 'Schrijf 5 zinnen: wat zou je doen als je een miljoen won? Welke superkracht zou je kiezen? Geef ook één advies met If I were you… en één wens met I wish…', model: "If I won a million dollars, I'd buy a small house by the sea. I'd also give some money to my parents. If I could have a superpower, I'd choose teleporting, so I'd never sit in traffic again. I wish I had more free time. My friend wants to quit her job; if I were her, I'd do it!" },
    scenario: { nl: 'Je fantaseert met een Amerikaanse vriendin over wat je zou doen als…', role: 'You are Kayla, an imaginative American friend in Las Vegas. Ask the learner lots of «What would you do if…?» questions (won the lottery, could live anywhere, had a superpower, were president). Share your own answers. Also ask for advice on a small problem so the learner can say «If I were you…».', goal: 'Fantaseer met would, geef advies met If I were you en uit een wens met I wish.' }
  });

  /* ───────────────────────── B1 · 5 ───────────────────────── */
  U({
    id: 'en-b1-05', level: 'B1', icon: '🔎', title: 'The person who…', nl: 'Mensen en dingen beschrijven',
    goals: ['Betrekkelijke bijzinnen met who, which en that', 'where en whose gebruiken', 'Mensen beschrijven: uiterlijk en karakter'],
    vocab: [
      ['tall', 'lang'], ['short', 'klein / kort'], ['slim', 'slank'], ['overweight', 'te zwaar'], ['a beard', 'een baard'],
      ['a mustache', 'een snor'], ['glasses', 'een bril'], ['blond', 'blond'], ['bald', 'kaal'], ['in his thirties', 'in de dertig'],
      ['friendly', 'vriendelijk'], ['funny', 'grappig'], ['smart', 'slim'], ['lazy', 'lui'], ['generous', 'gul'],
      ['selfish', 'egoïstisch'], ['honest', 'eerlijk'], ['reliable', 'betrouwbaar'], ['moody', 'humeurig'], ['to look like', 'lijken op (uiterlijk)'],
      ['to be like', 'zijn als (karakter)'], ['a neighbor', 'een buurman / buurvrouw'], ['a roommate', 'een huisgenoot'], ['a stranger', 'een onbekende']
    ],
    grammar: [
      { t: 'Who, which en that', es: 'Relative clauses',
        html: `<p>Met een <b>betrekkelijke bijzin</b> zeg je welke persoon of welk ding je bedoelt:</p>
<p><b>who</b> voor <b>mensen</b>: <i>The woman <b>who</b> lives next door is a doctor.</i></p>
<p><b>which</b> voor <b>dingen en dieren</b>: <i>The car <b>which</b> I bought is red.</i></p>
<p><b>that</b> kan voor allebei (en is in Amerikaans Engels heel gewoon): <i>the man <b>that</b> called, the book <b>that</b> I read</i>.</p>
<p>Let op: Nederlanders gebruiken vaak <s>what</s> (van «wat»): <s>the book what I read</s>. Dat is fout. En niet <s>the man which</s> voor een persoon.</p>
<p>Is het onderwerp van de bijzin iemand anders, dan mag je who/which/that weglaten: <i>The book (that) I read was great.</i></p>`,
        table: [['', 'mensen', 'dingen'], ['formeel', 'who', 'which'], ['informeel / VS', 'that', 'that'], ['fout', 'which (bij mensen)', 'what']],
        sum: 'the woman who lives next door, the car that I bought.',
        ex: [['The guy who fixed my car was really friendly.', 'De man die mijn auto repareerde was echt vriendelijk.'], ['Is this the phone that you lost?', 'Is dit de telefoon die je kwijt was?']] },
      { t: 'Where en whose', es: 'Where / whose',
        html: `<p><b>where</b> voor een <b>plaats</b>: <i>This is the restaurant <b>where</b> we met.</i> (waar we elkaar ontmoetten)</p>
<p><b>whose</b> = van wie, wiens, wier: <i>That's the man <b>whose</b> dog bit me.</i> (de man van wie de hond…) <i>I have a friend <b>whose</b> mother is American.</i></p>
<p>Niet verwarren met <b>who's</b> (= who is): <i><b>Who's</b> that?</i></p>`,
        table: [['woord', 'betekenis', 'voorbeeld'], ['where', 'waar', 'the city where I was born'], ['whose', 'van wie', 'the girl whose bike was stolen'], ["who's", 'wie is', "Who's your favorite actor?"]],
        ex: [['Chicago is the city where I studied.', 'Chicago is de stad waar ik heb gestudeerd.'], ["She's the neighbor whose cat is always in our yard.", 'Zij is de buurvrouw van wie de kat altijd in onze tuin zit.']] },
      { t: 'Iemand beschrijven: look like en be like', es: 'Describing people',
        html: `<p><b>What does she look like?</b> = Hoe ziet ze eruit? <i>She's tall and has curly hair.</i></p>
<p><b>What is she like?</b> = Wat voor iemand is ze? (karakter) <i>She's funny and very generous.</i></p>
<p><b>Who does she look like?</b> = Op wie lijkt ze? <i>She looks like her dad.</i></p>
<p>Leeftijd vaag: <i>He's in his thirties</i> (hij is in de dertig), <i>She's about forty.</i></p>
<p>Wees in de VS voorzichtig met opmerkingen over gewicht of uiterlijk: <i>overweight</i> is neutraler dan <i>fat</i>, en vaak zeg je het gewoon niet.</p>`,
        table: [['vraag', 'betekenis', 'antwoord'], ['What does he look like?', 'Hoe ziet hij eruit?', "He's tall with a beard."], ['What is he like?', 'Wat voor iemand is hij?', "He's friendly but a bit lazy."], ['Who does he look like?', 'Op wie lijkt hij?', 'He looks like his mom.']],
        ex: [["What's your new boss like? — She's strict but fair.", 'Hoe is je nieuwe baas? — Ze is streng maar eerlijk.'], ["He's in his forties and has a gray beard.", 'Hij is in de veertig en heeft een grijze baard.']] }
    ],
    dialogue: {
      t: 'Who’s who at the party', place: 'Washington, D.C. 🇺🇸',
      lines: [
        ['Hannah', "I don't know anyone here. Who's the tall guy who's talking to Mark?", 'Ik ken hier niemand. Wie is die lange man die met Mark praat?'],
        ['Tim', "That's Dave. He's the one whose wife works at the White House.", 'Dat is Dave. Hij is degene van wie de vrouw in het Witte Huis werkt.'],
        ['Hannah', 'Wow! What is he like?', 'Wauw! Wat voor iemand is hij?'],
        ['Tim', "He's really funny, but he talks a lot. And the woman who's wearing the red dress is his wife, Michelle.", 'Hij is heel grappig, maar hij praat veel. En de vrouw die de rode jurk aanheeft is zijn vrouw, Michelle.'],
        ['Hannah', "And the man with the glasses? He looks like someone I know.", 'En de man met de bril? Hij lijkt op iemand die ik ken.'],
        ['Tim', "That's Ahmed. He owns the restaurant where we had dinner last week.", 'Dat is Ahmed. Hij is de eigenaar van het restaurant waar we vorige week hebben gegeten.'],
        ['Hannah', 'Oh, the one that has the amazing falafel!', 'O, dat met die geweldige falafel!'],
        ['Tim', "Exactly. Come on, I'll introduce you. Everyone here is really friendly.", 'Precies. Kom, ik stel je voor. Iedereen hier is heel vriendelijk.']
      ],
      q: [
        { t: 'mc', q: "Where does Dave's wife work?", o: ['At the White House', 'At a restaurant', 'At a school'] },
        { t: 'mc', q: 'What is Dave like?', o: ['Funny, but he talks a lot', 'Shy and quiet', 'Rude'] },
        { t: 'mc', q: 'Who is Ahmed?', o: ['The owner of a restaurant', "Dave's brother", "Hannah's neighbor"] }
      ]
    },
    culture: { t: 'Washington, D.C.', html: `<p><b>Washington, D.C.</b> is de hoofdstad van de VS. «D.C.» staat voor <i>District of Columbia</i>: het is geen staat. Je vindt er het Witte Huis, het Capitool en de gratis musea van het <b>Smithsonian</b>.</p>
<p>Op Amerikaanse feestjes stellen mensen je actief aan elkaar voor (<i>Let me introduce you to…</i>). Het is normaal om op een onbekende af te stappen: <i>Hi, I'm Hannah. How do you know the host?</i></p>
<p>🗣️ Een gesprek beginnen met iemands werk is in D.C. heel gewoon: <i>So, what do you do?</i> Veel mensen werken er voor de overheid of in de politiek.</p>` },
    ex: [
      { t: 'cloze', s: 'The woman ___ lives next door is a nurse.', a: ['who'], o: ['who', 'which', 'what'], nl: 'De vrouw die naast ons woont is verpleegkundige.', tag: 'en-rel' },
      { t: 'cloze', s: 'The book ___ I read last week was amazing.', a: ['that'], o: ['that', 'what', 'who'], nl: 'Het boek dat ik vorige week las was geweldig.', tag: 'en-rel' },
      { t: 'cloze', s: "This is the café ___ we first met.", a: ['where'], o: ['where', 'which', 'that where'], nl: 'Dit is het café waar we elkaar voor het eerst ontmoetten.', tag: 'en-where' },
      { t: 'cloze', s: "That's the guy ___ car was stolen.", a: ['whose'], o: ['whose', "who's", 'who'], nl: 'Dat is de man van wie de auto is gestolen.', tag: 'en-where' },
      { t: 'cloze', s: 'What does your brother look ___?', a: ['like'], o: ['like', 'as', 'how'], nl: 'Hoe ziet je broer eruit?', tag: 'en-rel' },
      { t: 'cloze', s: "She's ___ her thirties.", a: ['in'], o: ['in', 'on', 'at'], nl: 'Ze is in de dertig.', tag: 'en-rel' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['The movie that we saw was boring.', 'The movie what we saw was boring.', 'The movie who we saw was boring.'], tag: 'en-rel' },
      { t: 'mc', q: '«What is she like?» betekent…', o: ['Wat voor iemand is ze?', 'Wat vindt ze leuk?', 'Hoe ziet ze eruit?'], tag: 'en-rel' },
      { t: 'mc', q: 'Iemand die altijd aan zichzelf denkt is…', o: ['selfish', 'generous', 'reliable'], tag: 'en-rel' },
      { t: 'mc', q: '«Who’s» of «whose»? «___ coat is this?»', o: ['Whose', "Who's", 'Who'], tag: 'en-where' },
      { t: 'tr', nl: 'De man die me hielp was heel aardig.', a: ['The man who helped me was very nice.', 'The man that helped me was very nice.', 'The man who helped me was very kind.'], tag: 'en-rel' },
      { t: 'tr', nl: 'Ze lijkt op haar moeder.', a: ['She looks like her mother.', 'She looks like her mom.'], tag: 'en-rel' },
      { t: 'tr', nl: 'Amsterdam is de stad waar ik geboren ben.', a: ['Amsterdam is the city where I was born.'], tag: 'en-where' },
      { t: 'order', s: 'I have a friend whose father is a famous chef.', nl: 'Ik heb een vriend van wie de vader een beroemde kok is.', tag: 'en-where' },
      { t: 'match', p: [['bald', 'kaal'], ['a beard', 'een baard'], ['generous', 'gul'], ['honest', 'eerlijk'], ['moody', 'humeurig'], ['a stranger', 'een onbekende']], tag: 'en-rel' }
    ],
    reading: {
      t: 'Lost and found', type: 'Oproep op een buurtsite',
      p: [
        ["Hi neighbors! Yesterday I found a wallet on Elm Street, near the park where the kids play soccer. It's a brown leather wallet which has a library card inside.", 'Hoi buren! Gisteren vond ik een portemonnee in Elm Street, bij het park waar de kinderen voetballen. Het is een bruine leren portemonnee met een bibliotheekpasje erin.'],
        ["I also want to thank the man who helped me last week when my car broke down. He was in his fifties, had a gray beard and was wearing a Red Sox cap. He didn't tell me his name.", 'Ik wil ook de man bedanken die me vorige week hielp toen mijn auto kapotging. Hij was in de vijftig, had een grijze baard en droeg een Red Sox-pet. Hij heeft zijn naam niet gezegd.'],
        ["If you're the person whose wallet this is, or if you know the man that helped me, please send me a message. This is a neighborhood where people take care of each other!", 'Als jij de persoon bent van wie deze portemonnee is, of als je de man kent die me hielp, stuur me dan een bericht. Dit is een buurt waar mensen voor elkaar zorgen!']
      ],
      gl: [['leather', 'leer'], ['to break down', 'kapotgaan (auto)'], ['to take care of', 'zorgen voor']],
      q: [
        { t: 'mc', q: 'Where was the wallet found?', o: ['On Elm Street, near the park', 'In the library', 'In a car'] },
        { t: 'mc', q: 'What did the man who helped look like?', o: ['In his fifties, with a gray beard', 'Young and blond', 'Bald, with glasses'] },
        { t: 'mc', q: 'What kind of neighborhood is it?', o: ['One where people take care of each other', 'A dangerous one', 'A very quiet one'] }
      ]
    },
    say: [['The woman who lives next door is very nice.', 'De vrouw die naast ons woont is heel aardig.'], ['What does he look like?', 'Hoe ziet hij eruit?'], ["What's she like?", 'Wat voor iemand is zij?'], ["That's the restaurant where we met.", 'Dat is het restaurant waar we elkaar ontmoetten.']],
    task: { nl: 'Beschrijf twee mensen uit je leven in 5 zinnen: hoe ze eruitzien en wat voor iemand ze zijn. Gebruik who, which/that, where of whose minstens drie keer.', model: "My best friend is a woman who I met at university. She's tall, has short dark hair and wears glasses. She's the kind of person that always makes you laugh. My neighbor is an old man whose garden is the most beautiful on our street. He lives in the house where my grandparents used to live." },
    scenario: { nl: 'Je bent op een feest in Washington en vraagt wie iedereen is.', role: 'You are Tim, an outgoing American host at a party in Washington, D.C. The learner doesn’t know anyone. Describe the guests using relative clauses (the man who…, the woman whose…, the guy that…) and talk about what they look like and what they are like. Ask the learner to describe someone too.', goal: 'Vraag naar mensen en beschrijf ze met who, which, that, where en whose.' }
  });
})(window.SPT);
