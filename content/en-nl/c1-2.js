/* Engels voor Nederlandstaligen — niveau C1, units 6–10 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C1 · 6 ───────────────────────── */
  U({
    id: 'en-c1-06', level: 'C1', icon: '📝', title: 'Having said that…', nl: 'Participle clauses: compact en elegant',
    goals: ['Bijzinnen inkorten met -ing en -ed: Having finished…, Built in 1890…', 'Negatieve en passieve vormen: Not knowing…, Having been told…', 'Dangling participles herkennen en vermijden'],
    vocab: [
      ['having said that', 'dat gezegd hebbende'], ['given that', 'gezien het feit dat'], ['considering', 'gezien / als je bedenkt'], ['judging by', 'te oordelen naar'], ['generally speaking', 'over het algemeen'],
      ['strictly speaking', 'strikt genomen'], ['assuming that', 'aangenomen dat'], ['provided that', 'mits'], ['weather permitting', 'als het weer het toelaat'], ['all things considered', 'alles bij elkaar genomen'],
      ['to be faced with', 'geconfronteerd worden met'], ['to be overwhelmed', 'overweldigd zijn'], ['to reflect on', 'nadenken over'], ['to resume', 'hervatten'], ['a draft', 'een concept'],
      ['to submit', 'indienen'], ['to revise', 'herzien'], ['concise', 'beknopt'], ['wordy', 'omslachtig / langdradig'], ['a clause', 'een bijzin'],
      ['to streamline', 'stroomlijnen'], ['seemingly', 'ogenschijnlijk'], ['upon arrival', 'bij aankomst'], ['once completed', 'eenmaal voltooid']
    ],
    grammar: [
      { t: 'Present en past participle clauses', es: 'Participle clauses',
        html: `<p>In geschreven en verzorgd Engels kort je bijzinnen vaak in met een <b>participle</b>. Dat maakt teksten compacter.</p>
<p><b>-ing</b> (actief, tegelijk): <i>As I walked home, I saw…</i> → <i><b>Walking</b> home, I saw…</i></p>
<p><b>-ed</b> (passief): <i>The house, which was built in 1890, …</i> → <i>The house, <b>built</b> in 1890, …</i> <i><b>Founded</b> in 1998, the company now has 200 employees.</i></p>
<p><b>having + -ed</b> (eerder gebeurd): <i>After I had finished the report, I went home.</i> → <i><b>Having finished</b> the report, I went home.</i></p>
<p>Ontkennend: <b>not</b> vooraan: <i><b>Not knowing</b> what to do, she called her mother.</i></p>`,
        table: [['volledige bijzin', 'participle clause'], ['Because I felt tired, I left early.', 'Feeling tired, I left early.'], ['The car that was parked outside…', 'The car parked outside…'], ['After she had read the email, she…', 'Having read the email, she…'], ["As I didn't know the way, I…", 'Not knowing the way, I…'], ['When it is heated, ice melts.', 'When heated, ice melts.']],
        sum: 'Having finished the report, I went home. Built in 1890, the house is beautiful.',
        ex: [['Not wanting to wake her, he tiptoed out of the room.', 'Omdat hij haar niet wakker wilde maken, sloop hij de kamer uit.'], ['Founded in 1998, the company now employs 200 people.', 'Het bedrijf, opgericht in 1998, heeft nu 200 werknemers.']] },
      { t: 'Dangling participles: wie doet het?', es: 'Dangling participles',
        html: `<p>Het <b>onderwerp</b> van de participle clause moet hetzelfde zijn als het onderwerp van de hoofdzin. Anders krijg je een <b>dangling participle</b>, soms met grappig resultaat:</p>
<p><s>Walking down the street, the trees looked beautiful.</s> (De bomen liepen over straat?) Goed: <i>Walking down the street, <b>I</b> noticed how beautiful the trees looked.</i></p>
<p><s>Having finished dinner, the dishes were washed.</s> Goed: <i>Having finished dinner, <b>we</b> washed the dishes.</i></p>
<p>Uitzondering: vaste uitdrukkingen als <i>generally speaking</i>, <i>considering</i>, <i>judging by</i>, <i>given that</i> hebben geen eigen onderwerp nodig.</p>`,
        table: [['dangling (fout)', 'correct'], ['Running for the bus, my bag fell.', 'Running for the bus, I dropped my bag.'], ['Being late, the meeting started without me.', 'Since I was late, the meeting started without me.'], ['Once opened, you should eat it within 3 days.', 'Once opened, it should be eaten within 3 days.']],
        ex: [['Generally speaking, Americans are very friendly.', 'Over het algemeen zijn Amerikanen erg vriendelijk.'], ['Judging by his face, the news was bad.', 'Te oordelen naar zijn gezicht was het nieuws slecht.']] },
      { t: 'Vaste openingen voor nuance', es: 'Fixed participle phrases',
        html: `<p>Een aantal participle-uitdrukkingen gebruik je als «verbindingswoord»:</p>
<p><b>Having said that</b> = dat gezegd hebbende (nuance na een standpunt): <i>The plan is expensive. <b>Having said that</b>, it could save us money in the long run.</i></p>
<p><b>Given that</b> = gezien het feit dat. <b>Considering</b> = als je bedenkt. <b>Assuming (that)</b> = aangenomen dat. <b>All things considered</b> = alles bij elkaar genomen. <b>Weather permitting</b> = als het weer meezit.</p>
<p>Deze klinken verzorgd maar niet stijf: prima in mails, presentaties en vergaderingen.</p>`,
        table: [['uitdrukking', 'Nederlands'], ['having said that', 'dat gezegd hebbende'], ['given that', 'gezien het feit dat'], ['all things considered', 'alles bij elkaar genomen'], ['weather permitting', 'als het weer het toelaat']],
        ex: [["Given that we have only two weeks, we need to prioritize.", 'Gezien het feit dat we maar twee weken hebben, moeten we prioriteiten stellen.'], ['All things considered, it was a successful year.', 'Alles bij elkaar genomen was het een succesvol jaar.']] }
    ],
    dialogue: {
      t: 'Editing the annual report', place: 'Minneapolis 🇺🇸',
      lines: [
        ['Claire', "I've read your draft. It's good, but some sentences are a bit wordy.", 'Ik heb je concept gelezen. Het is goed, maar sommige zinnen zijn wat omslachtig.'],
        ['Sven', 'Which ones? I tried to be very complete.', 'Welke? Ik heb geprobeerd heel volledig te zijn.'],
        ['Claire', "This one: «The company, which was founded in 1985 and which is based in Minneapolis, has grown.» You could say «Founded in 1985 and based in Minneapolis, the company has grown.»", 'Deze: «Het bedrijf, dat in 1985 werd opgericht en dat in Minneapolis is gevestigd, is gegroeid.» Je zou kunnen zeggen «Opgericht in 1985 en gevestigd in Minneapolis, is het bedrijf gegroeid.»'],
        ['Sven', 'Oh, that is much cleaner. And here, «After we had analyzed the data, we found…»?', 'O, dat is veel strakker. En hier, «Nadat we de data hadden geanalyseerd, vonden we…»?'],
        ['Claire', "«Having analyzed the data, we found…» Perfect. But careful with this one: «Looking at the numbers, the results are clear.»", '«Having analyzed the data, we found…» Perfect. Maar let op deze: «Looking at the numbers, the results are clear.»'],
        ['Sven', "What's wrong with it?", 'Wat is daar mis mee?'],
        ['Claire', "It's a dangling participle. The results aren't looking at anything. Say «Looking at the numbers, we can see the results are clear.»", 'Het is een dangling participle. De resultaten kijken nergens naar. Zeg «Looking at the numbers, we can see the results are clear.»'],
        ['Sven', "Got it. Having said that, I'm glad you didn't rewrite the whole thing.", 'Snap ik. Dat gezegd hebbende, ben ik blij dat je niet alles hebt herschreven.']
      ],
      q: [
        { t: 'mc', q: 'What is Claire’s main criticism?', o: ['Some sentences are wordy', 'The data is wrong', 'The report is too short'] },
        { t: 'mc', q: 'Why is «Looking at the numbers, the results are clear» wrong?', o: ['The results can’t look at anything', 'Numbers is the wrong word', 'It should be in the past'] },
        { t: 'mc', q: 'How does Sven feel at the end?', o: ['Relieved', 'Angry', 'Confused'] }
      ]
    },
    culture: { t: 'Plain English', html: `<p>In de VS en het VK bestaat een sterke <b>Plain English</b>-beweging: overheden en bedrijven worden aangemoedigd om kort en helder te schrijven. In de VS is er zelfs een wet voor (de <i>Plain Writing Act</i> van 2010).</p>
<p>Nederlands zakelijk schrijven is vaak lang en formeel («Naar aanleiding van uw schrijven van…»). Letterlijk vertaald klinkt dat in het Engels stijf en ouderwets.</p>
<p>✂️ Participle clauses helpen om korter te schrijven, maar overdrijf niet: drie in één zin is net zo lastig te lezen als een lange bijzin.</p>` },
    ex: [
      { t: 'cloze', s: '___ the report, she sent it to her manager.', a: ['Having finished'], o: ['Having finished', 'Finished', 'Having finishing'], nl: 'Nadat ze het rapport had afgerond, stuurde ze het naar haar manager.', tag: 'enc-participle' },
      { t: 'cloze', s: '___ in 1889, the Eiffel Tower is still a symbol of Paris.', a: ['Built'], o: ['Built', 'Building', 'Having building'], nl: 'De Eiffeltoren, gebouwd in 1889, is nog steeds een symbool van Parijs.', tag: 'enc-participle' },
      { t: 'cloze', s: '___ what to say, he stayed silent.', a: ['Not knowing'], o: ['Not knowing', 'Knowing not', "Don't knowing"], nl: 'Omdat hij niet wist wat hij moest zeggen, zei hij niets.', tag: 'enc-participle' },
      { t: 'cloze', s: 'The man ___ next to me on the plane was a famous actor.', a: ['sitting'], o: ['sitting', 'sat', 'who sitting'], nl: 'De man die naast me zat in het vliegtuig was een beroemde acteur.', tag: 'enc-participle' },
      { t: 'cloze', s: 'The price is high. Having ___ that, the quality is excellent.', a: ['said'], o: ['said', 'told', 'saying'], nl: 'De prijs is hoog. Dat gezegd hebbende, de kwaliteit is uitstekend.', tag: 'enc-participle' },
      { t: 'cloze', s: '___ that we only have a week, we should start now.', a: ['Given'], o: ['Given', 'Giving', 'Gave'], nl: 'Gezien het feit dat we maar een week hebben, moeten we nu beginnen.', tag: 'enc-participle' },
      { t: 'mc', q: 'Welke zin is correct (geen dangling participle)?', o: ['Walking to work, I saw an accident.', 'Walking to work, an accident happened.', 'Walking to work, the accident was terrible.'], tag: 'enc-participle' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Once opened, the product should be kept in the fridge.', 'Once opened, you should keep the product in the fridge.', 'Once opening, keep in the fridge.'], x: 'Het onderwerp (het product) is wat geopend wordt.', tag: 'enc-participle' },
      { t: 'mc', q: '«Alles bij elkaar genomen» is…', o: ['all things considered', 'all things taken', 'everything together taken'], tag: 'enc-participle' },
      { t: 'mc', q: 'Wat betekent «wordy»?', o: ['omslachtig, met te veel woorden', 'welbespraakt', 'woordelijk'], tag: 'enc-academic' },
      { t: 'tr', nl: 'Te oordelen naar de lucht gaat het regenen.', a: ["Judging by the sky, it's going to rain.", 'Judging by the sky, it is going to rain.', 'Judging from the sky, it is going to rain.', "Judging from the sky, it's going to rain."], tag: 'enc-participle' },
      { t: 'tr', nl: 'Over het algemeen is het hier veilig.', a: ["Generally speaking, it's safe here.", 'Generally speaking, it is safe here.'], tag: 'enc-participle' },
      { t: 'order', s: 'Having lived abroad for years, she speaks four languages.', nl: 'Omdat ze jarenlang in het buitenland heeft gewoond, spreekt ze vier talen.', tag: 'enc-participle' },
      { t: 'match', p: [['concise', 'beknopt'], ['wordy', 'omslachtig'], ['to revise', 'herzien'], ['a draft', 'een concept'], ['to streamline', 'stroomlijnen']], tag: 'enc-academic' },
      { t: 'cloze', s: "We'll have the barbecue on Saturday, weather ___.", a: ['permitting'], o: ['permitting', 'permitted', 'permits'], nl: 'We houden zaterdag de barbecue, als het weer het toelaat.', tag: 'enc-participle' }
    ],
    reading: {
      t: 'The bridge that almost wasn’t', type: 'Historisch artikel',
      p: [
        ["Completed in 1883, the Brooklyn Bridge was the longest suspension bridge in the world. Yet it almost never got built.", 'De Brooklyn Bridge, voltooid in 1883, was de langste hangbrug ter wereld. Toch werd hij bijna nooit gebouwd.'],
        ["Having designed the bridge, John Roebling was injured in an accident before construction began and died weeks later. His son Washington, taking over the project, soon fell ill himself.", 'Nadat hij de brug had ontworpen, raakte John Roebling gewond bij een ongeluk voordat de bouw begon, en hij stierf enkele weken later. Zijn zoon Washington, die het project overnam, werd al snel zelf ziek.'],
        ["Unable to leave his bed, Washington watched the work through a telescope. Messages were carried to the engineers by his wife, Emily, who, having studied mathematics and engineering, gradually took over much of the daily management.", 'Omdat hij zijn bed niet uit kon, volgde Washington het werk door een telescoop. Berichten werden naar de ingenieurs gebracht door zijn vrouw Emily, die, na wiskunde en techniek te hebben gestudeerd, geleidelijk een groot deel van de dagelijkse leiding overnam.'],
        ["When the bridge opened, Emily was the first person to cross it. All things considered, it is as much her bridge as theirs.", 'Toen de brug openging, was Emily de eerste die eroverheen ging. Alles bij elkaar genomen is het net zo goed haar brug als de hunne.']
      ],
      gl: [['suspension bridge', 'hangbrug'], ['to take over', 'overnemen'], ['gradually', 'geleidelijk']],
      q: [
        { t: 'mc', q: 'What happened to John Roebling?', o: ['He died after an accident', 'He finished the bridge', 'He moved to Europe'] },
        { t: 'mc', q: 'How did Washington follow the work?', o: ['Through a telescope from his bed', 'By visiting every day', 'By reading newspapers'] },
        { t: 'mc', q: 'Who was the first person to cross the bridge?', o: ['Emily Roebling', 'Washington Roebling', 'The mayor of New York'] }
      ]
    },
    say: [['Having said that, I see your point.', 'Dat gezegd hebbende, snap ik je punt.'], ['Given that we have little time, let’s start.', 'Gezien het feit dat we weinig tijd hebben, laten we beginnen.'], ['All things considered, it went well.', 'Alles bij elkaar genomen ging het goed.'], ['Not knowing what to do, I called my sister.', 'Omdat ik niet wist wat ik moest doen, belde ik mijn zus.']],
    task: { nl: 'Schrijf een korte biografie (5 zinnen) van iemand die je bewondert, in de stijl van een tijdschriftartikel. Gebruik minstens drie participle clauses (bijvoorbeeld Born in…, Having…, Not…) en let op dangling participles.', model: "Born in a small village in Friesland, my grandmother left school at fourteen. Having worked as a seamstress for ten years, she opened her own shop in Leeuwarden. Not knowing anything about business, she learned everything by trial and error. Respected by the whole town, she ran the shop for forty years. All things considered, she was the most determined person I have ever known." },
    scenario: { nl: 'Je laat een Amerikaanse redacteur je tekst verbeteren.', role: 'You are Claire, a friendly American editor in Minneapolis. The learner reads you sentences from a text they are writing (a report, a bio or a cover letter). Suggest how to make them more concise with participle clauses, and catch any dangling participles with a light joke.', goal: 'Maak je zinnen korter en eleganter met participle clauses.' }
  });

  /* ───────────────────────── C1 · 7 ───────────────────────── */
  U({
    id: 'en-c1-07', level: 'C1', icon: '🧮', title: 'Life is short, the life of a bee is shorter', nl: 'Lidwoorden en telbaarheid op C1-niveau',
    goals: ['Geen lidwoord bij algemene begrippen: Life is…, Nature…, Society…', 'Ontelbare woorden: advice, feedback, research, equipment, news', 'Lastige gevallen: in hospital / in the hospital, the most / most'],
    vocab: [
      ['advice', 'advies (ontelbaar)'], ['a piece of advice', 'een advies / een tip'], ['feedback', 'feedback (ontelbaar)'], ['research', 'onderzoek (ontelbaar)'], ['a study', 'een onderzoek (telbaar)'],
      ['equipment', 'apparatuur / uitrusting'], ['luggage / baggage', 'bagage'], ['furniture', 'meubels'], ['information', 'informatie'], ['news', 'nieuws (enkelvoud!)'],
      ['evidence', 'bewijs'], ['progress', 'vooruitgang'], ['knowledge', 'kennis'], ['homework', 'huiswerk'], ['traffic', 'verkeer'],
      ['accommodation', 'onderdak / accommodatie'], ['damage', 'schade'], ['the damages', 'de schadevergoeding'], ['society', 'de maatschappij'], ['nature', 'de natuur'],
      ['the media', 'de media'], ['the public', 'het publiek'], ['data', 'gegevens'], ['staff', 'personeel']
    ],
    grammar: [
      { t: 'Algemene begrippen: zonder the', es: 'Zero article',
        html: `<p>In het Nederlands zeg je «<b>Het</b> leven is kort», «<b>De</b> natuur is mooi», «<b>De</b> maatschappij verandert». In het Engels gebruik je bij <b>algemene, abstracte begrippen</b> géén lidwoord: <i><b>Life</b> is short. <b>Nature</b> is beautiful. <b>Society</b> is changing.</i></p>
<p>Ook bij algemene meervouden: <i><b>Dogs</b> are loyal</i> (honden in het algemeen), niet <s>The dogs are loyal</s> (dat zijn bepaalde honden).</p>
<p>Wordt het <b>specifiek</b>, dan komt the terug: <i><b>The life</b> of a bee is short. <b>The society</b> we live in…</i></p>
<p>Zo ook: <i>in <b>history</b></i>, <i><b>Love</b> is blind</i>, <i>I like <b>music</b></i>, <i><b>Most people</b></i> (niet <s>the most people</s>).</p>`,
        table: [['Nederlands', 'Engels (algemeen)', 'Engels (specifiek)'], ['het leven', 'Life is short.', 'the life of my grandfather'], ['de natuur', 'I love nature.', 'the nature of the problem'], ['de meeste mensen', 'Most people agree.', 'most of the people here'], ['de mens', 'Humans are curious.', 'the human body']],
        sum: 'Life is short. Nature is beautiful. Most people agree.',
        ex: [['History teaches us that power corrupts.', 'De geschiedenis leert ons dat macht corrumpeert.'], ['The history of this building is fascinating.', 'De geschiedenis van dit gebouw is fascinerend.']] },
      { t: 'Ontelbaar in het Engels, telbaar in het Nederlands', es: 'Uncountable nouns',
        html: `<p>Een aantal woorden is in het Nederlands telbaar, maar in het Engels <b>ontelbaar</b>: geen <i>a/an</i> en geen meervoud.</p>
<p><s>an advice</s> → <i>some advice / a piece of advice</i>. <s>informations</s> → <i>information</i>. <s>a research</s> → <i>research / a study</i>. <s>furnitures</s> → <i>furniture / a piece of furniture</i>. <s>equipments</s>, <s>luggages</s>, <s>feedbacks</s>, <s>progresses</s>.</p>
<p><b>news</b> lijkt meervoud maar is enkelvoud: <i>The news <b>is</b> good.</i> <b>data</b> kan beide (<i>the data shows / show</i>; formeel <i>show</i>).</p>
<p>Gebruik <i>much, little, a lot of, some, any</i>: <i>How <b>much</b> luggage do you have?</i></p>`,
        table: [['fout', 'goed'], ['Can you give me an advice?', 'Can you give me some advice?'], ['Thanks for the feedbacks.', 'Thanks for the feedback.'], ['I did a research on…', 'I did some research on… / I did a study on…'], ['The news are bad.', 'The news is bad.'], ['We bought new furnitures.', 'We bought new furniture.']],
        ex: [['Let me give you a piece of advice.', 'Laat me je één advies geven.'], ["We've made a lot of progress this week.", 'We hebben deze week veel vooruitgang geboekt.']] },
      { t: 'Instellingen, Brits en Amerikaans', es: 'Institutions & US/UK',
        html: `<p>Bij instellingen gebruik je geen the als het om de <b>functie</b> gaat: <i>go to <b>school</b>, go to <b>church</b>, be in <b>prison</b>, go to <b>bed</b>, go to <b>work</b></i>. Ga je ergens alleen langs als bezoeker: <i>I went to <b>the</b> school to pick up my son.</i></p>
<p>Hier verschillen Brits en Amerikaans: 🇬🇧 <i>She's in <b>hospital</b>, go to <b>university</b></i> vs. 🇺🇸 <i>She's in <b>the hospital</b>, go to <b>college</b></i> (Amerikanen zeggen bijna nooit «go to university»).</p>
<p>Collectieve woorden als <i>staff, team, government, company</i>: 🇺🇸 meestal enkelvoud (<i>The team <b>is</b> winning</i>), 🇬🇧 vaak meervoud (<i>The team <b>are</b> winning</i>).</p>`,
        table: [['', '🇺🇸 Amerikaans', '🇬🇧 Brits'], ['in het ziekenhuis', 'in the hospital', 'in hospital'], ['studeren', 'go to college', 'go to university'], ['het team wint', 'the team is winning', 'the team are winning'], ['op vakantie', 'on vacation', 'on holiday']],
        ex: [["My dad is in the hospital, but he's doing better.", 'Mijn vader ligt in het ziekenhuis, maar het gaat beter met hem.'], ['She went to college in California.', 'Ze heeft in Californië gestudeerd.']] }
    ],
    dialogue: {
      t: 'Feedback on a research proposal', place: 'Ann Arbor, Michigan 🇺🇸',
      lines: [
        ['Prof. Allen', "Thanks for your proposal, Lieke. Let me give you some feedback.", 'Bedankt voor je voorstel, Lieke. Laat me je wat feedback geven.'],
        ['Lieke', 'Thank you. I really appreciate all the advices.', 'Dank u. Ik waardeer alle adviezen echt.'],
        ['Prof. Allen', "Ha, just «advice». It's one of those words. Same as «research» and «information».", 'Ha, gewoon «advice». Het is een van die woorden. Net als «research» en «information».'],
        ['Lieke', "Oh no, I wrote «I did a research on the society» in my introduction.", 'O nee, ik schreef «I did a research on the society» in mijn inleiding.'],
        ['Prof. Allen', "Make that «I conducted research on how society…» No article for society in general.", 'Maak daar «I conducted research on how society…» van. Geen lidwoord bij maatschappij in het algemeen.'],
        ['Lieke', "That's so different from Dutch. We say «de maatschappij» all the time.", 'Dat is zo anders dan in het Nederlands. Wij zeggen steeds «de maatschappij».'],
        ['Prof. Allen', "I know. Your content is excellent, though. The data is strong, and you've made a lot of progress.", 'Dat weet ik. Je inhoud is wel uitstekend. De data zijn sterk, en je hebt veel vooruitgang geboekt.'],
        ['Lieke', "That's good news. I mean, that is good news.", 'Dat is goed nieuws. Ik bedoel, dat is goed nieuws.'],
        ['Prof. Allen', "Exactly. Singular. You're learning fast.", 'Precies. Enkelvoud. Je leert snel.']
      ],
      q: [
        { t: 'mc', q: 'What mistake does Lieke make first?', o: ['She says «advices»', 'She says «feedbacks»', 'She says «the news are»'] },
        { t: 'mc', q: 'How should Lieke write her introduction?', o: ['I conducted research on how society…', 'I did a research on the society…', 'I made researches about society…'] },
        { t: 'mc', q: 'What does the professor think of the content?', o: ['It’s excellent', 'It needs a lot of work', 'It’s too short'] }
      ]
    },
    culture: { t: 'College, university en grad school', html: `<p>In de VS betekent <b>college</b> gewoon hoger onderwijs: <i>I went to college in Ohio</i> = ik heb in Ohio gestudeerd, ook als het een <i>university</i> was. Een <b>freshman</b> is een eerstejaars, en na je bachelor ga je naar <b>grad school</b> voor een master of PhD.</p>
<p>🇬🇧 In Groot-Brittannië is <i>college</i> vaak een mbo-achtige opleiding of een onderdeel van een universiteit (zoals in Oxford). Daar zeg je <i>I went to university in Leeds</i>.</p>
<p>🏫 Een Amerikaanse <b>school</b> is alles tot en met high school, dus <i>What school did you go to?</i> kan ook over de universiteit gaan.</p>` },
    ex: [
      { t: 'cloze', s: '___ is too short to worry about small things.', a: ['Life'], o: ['Life', 'The life', 'A life'], nl: 'Het leven is te kort om je zorgen te maken over kleine dingen.', tag: 'enc-article' },
      { t: 'cloze', s: 'Can I give you a piece of ___?', a: ['advice'], o: ['advice', 'advise', 'advices'], nl: 'Mag ik je een advies geven?', tag: 'enc-article' },
      { t: 'cloze', s: 'The news ___ better than we expected.', a: ['is'], o: ['is', 'are', 'were'], nl: 'Het nieuws is beter dan we verwachtten.', tag: 'enc-article' },
      { t: 'cloze', s: '___ people prefer to work from home on Fridays.', a: ['Most'], o: ['Most', 'The most', 'Most of'], nl: 'De meeste mensen werken vrijdags liever thuis.', tag: 'enc-article' },
      { t: 'cloze', s: 'How much ___ are you taking on the trip?', a: ['luggage'], o: ['luggage', 'luggages', 'suitcase'], nl: 'Hoeveel bagage neem je mee op reis?', tag: 'enc-article' },
      { t: 'cloze', s: "We've made a lot of ___ on the project.", a: ['progress'], o: ['progress', 'progresses', 'a progress'], nl: 'We hebben veel vooruitgang geboekt met het project.', tag: 'enc-article' },
      { t: 'cloze', s: 'My grandmother is in ___ hospital, but she’s fine. (🇺🇸)', a: ['the'], o: ['the', 'a', 'no'], nl: 'Mijn oma ligt in het ziekenhuis, maar het gaat goed.', tag: 'enb-ukus' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Nature is beautiful in the fall.', 'The nature is beautiful in the fall.', 'A nature is beautiful in the fall.'], tag: 'enc-article' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Thanks for all the feedback!', 'Thanks for all the feedbacks!', 'Thanks for a feedback!'], tag: 'enc-article' },
      { t: 'mc', q: '«Ik heb een onderzoek gedaan naar…» in een academische tekst:', o: ['I conducted a study on…', 'I did a research to…', 'I made a research about…'], tag: 'enc-academic' },
      { t: 'mc', q: 'Hoe zeg je «ik heb in Boston gestudeerd» in Amerikaans Engels?', o: ['I went to college in Boston.', 'I went to the university in Boston.', 'I studied at the high school in Boston.'], tag: 'enb-ukus' },
      { t: 'tr', nl: 'De meeste mensen houden van muziek.', a: ['Most people love music.', 'Most people like music.'], tag: 'enc-article' },
      { t: 'tr', nl: 'We hebben nieuwe meubels gekocht.', a: ['We bought new furniture.', "We've bought new furniture.", 'We have bought new furniture.', 'We bought some new furniture.'], tag: 'enc-article' },
      { t: 'order', s: 'Society has changed a lot since the internet arrived.', nl: 'De maatschappij is enorm veranderd sinds de komst van internet.', tag: 'enc-article' },
      { t: 'match', p: [['evidence', 'bewijs'], ['equipment', 'apparatuur'], ['knowledge', 'kennis'], ['accommodation', 'onderdak'], ['damage', 'schade'], ['staff', 'personeel']], tag: 'enc-article' }
    ],
    reading: {
      t: 'Small words, big difference', type: 'Taalcolumn',
      p: [
        ["Ask any English teacher in the Netherlands what Dutch students get wrong, and you'll hear the same answer: the small words. Not the grammar of conditionals, but «the», «a» and «some».", 'Vraag een willekeurige docent Engels in Nederland wat Nederlandse leerlingen fout doen, en je hoort hetzelfde antwoord: de kleine woordjes. Niet de grammatica van conditionals, maar «the», «a» en «some».'],
        ["The reason is simple. Dutch uses articles with abstract ideas: «de liefde», «het leven», «de natuur». English usually doesn't. Love is love; life is life.", 'De reden is simpel. Het Nederlands gebruikt lidwoorden bij abstracte begrippen: «de liefde», «het leven», «de natuur». Het Engels meestal niet. Love is love; life is life.'],
        ["Then there are the uncountable nouns. A Dutch manager might ask for «more informations» or thank the team for «the feedbacks». Native speakers understand perfectly, but notice immediately.", 'Dan zijn er de ontelbare zelfstandige naamwoorden. Een Nederlandse manager vraagt misschien om «more informations» of bedankt het team voor «the feedbacks». Moedertaalsprekers begrijpen het prima, maar merken het meteen op.'],
        ["The good news is that this is one of the easiest habits to fix. A short list of twenty words and a bit of attention can make your English sound noticeably more natural.", 'Het goede nieuws is dat dit een van de makkelijkste gewoontes is om af te leren. Een kort lijstje van twintig woorden en een beetje aandacht kunnen je Engels merkbaar natuurlijker laten klinken.']
      ],
      gl: [['abstract ideas', 'abstracte begrippen'], ['noticeably', 'merkbaar'], ['to fix a habit', 'een gewoonte verbeteren']],
      q: [
        { t: 'mc', q: 'What do Dutch students often get wrong, according to teachers?', o: ['The small words like the, a and some', 'Conditionals', 'Phrasal verbs'] },
        { t: 'mc', q: 'Why do Dutch speakers add «the» to abstract ideas?', o: ['Dutch uses articles with abstract ideas', 'English teachers tell them to', 'It sounds more formal'] },
        { t: 'mc', q: 'What is the good news?', o: ['It’s an easy habit to fix', 'Native speakers don’t notice', 'Articles are not important'] }
      ]
    },
    say: [['Life is too short.', 'Het leven is te kort.'], ['Can I give you some advice?', 'Mag ik je wat advies geven?'], ['The news is good.', 'Het nieuws is goed.'], ['Thanks for the feedback.', 'Bedankt voor de feedback.']],
    task: { nl: 'Schrijf 5 zinnen over hoe de maatschappij is veranderd door technologie. Let op: geen lidwoord bij algemene begrippen, en gebruik minstens drie ontelbare woorden (information, research, progress, advice, knowledge…).', model: "Technology has changed society in ways nobody predicted. Information is available everywhere, but knowledge is harder to find. Research shows that most people check their phones more than eighty times a day. We have made enormous progress in medicine and communication. Still, the best advice I ever got was simple: put your phone away at dinner." },
    scenario: { nl: 'Je bespreekt je onderzoeksvoorstel met een Amerikaanse professor.', role: 'You are Professor Allen, a kind but precise American academic in Michigan. The learner explains a research or work project. Ask follow-up questions. When they make article or countability mistakes (the society, advices, informations, a research, the news are), correct them briefly and naturally, then continue.', goal: 'Leg je project uit zonder fouten met lidwoorden en ontelbare woorden.' }
  });

  /* ───────────────────────── C1 · 8 ───────────────────────── */
  U({
    id: 'en-c1-08', level: 'C1', icon: '🎓', title: 'It could be argued that…', nl: 'Academische en zakelijke stijl',
    goals: ['Voorzichtig formuleren: tend to, appear to, arguably, it could be argued', 'Nominaliseren: van werkwoord naar zelfstandig naamwoord', 'Een betoog structureren met de juiste signaalwoorden'],
    vocab: [
      ['arguably', 'je zou kunnen zeggen'], ['to tend to', 'de neiging hebben om / doorgaans'], ['to appear to', 'lijken te'], ['to suggest', 'erop wijzen / suggereren'], ['to indicate', 'aangeven'],
      ['significant', 'aanzienlijk / significant'], ['a trend', 'een trend'], ['to account for', 'verklaren / goed zijn voor'], ['a drawback', 'een nadeel'], ['a benefit', 'een voordeel'],
      ['to outweigh', 'zwaarder wegen dan'], ['to underestimate', 'onderschatten'], ['a hypothesis', 'een hypothese'], ['to assess', 'beoordelen'], ['an approach', 'een aanpak'],
      ['to implement', 'invoeren / uitvoeren'], ['in terms of', 'wat betreft'], ['with regard to', 'met betrekking tot'], ['to a large extent', 'in grote mate'], ['thus', 'aldus / daardoor'],
      ['whereby', 'waarbij'], ['notwithstanding', 'niettegenstaande'], ['to shed light on', 'licht werpen op'], ['to draw on', 'putten uit']
    ],
    grammar: [
      { t: 'Hedging: voorzichtig formuleren', es: 'Hedging',
        html: `<p>In academisch en zakelijk Engels doe je zelden absolute uitspraken. Je «dekt je in» (<b>hedging</b>):</p>
<p>Werkwoorden: <i>Young people <b>tend to</b> use social media more.</i> <i>The results <b>appear to</b> confirm…</i> <i>This <b>suggests</b> that…</i></p>
<p>Bijwoorden: <i><b>arguably</b>, <b>possibly</b>, <b>largely</b>, <b>to some extent</b>, <b>generally</b></i>.</p>
<p>Onpersoonlijk: <i><b>It could be argued that</b>…</i>, <i><b>It is widely believed that</b>…</i>, <i><b>There is some evidence that</b>…</i></p>
<p>Nederlanders schrijven vaak <s>This proves that…</s> of <s>Everybody knows that…</s>. Dat klinkt in het Engels al snel te stellig.</p>`,
        table: [['te stellig', 'gehedged'], ['This proves that…', 'This suggests that…'], ['Young people use phones more.', 'Young people tend to use phones more.'], ['This is the best solution.', 'This is arguably the best solution.'], ['Everyone agrees that…', 'It is widely accepted that…']],
        sum: 'The data suggests that… It could be argued that… People tend to…',
        ex: [['The findings appear to support the hypothesis.', 'De resultaten lijken de hypothese te ondersteunen.'], ['It could be argued that the policy has failed.', 'Men zou kunnen stellen dat het beleid is mislukt.']] },
      { t: 'Nominalisatie: werkwoorden worden zelfstandige naamwoorden', es: 'Nominalization',
        html: `<p>Formeel Engels gebruikt veel <b>zelfstandige naamwoorden</b> waar spreektaal werkwoorden gebruikt:</p>
<p><i>Prices <b>rose</b> quickly, which <b>worried</b> investors.</i> → <i>The rapid <b>rise</b> in prices caused <b>concern</b> among investors.</i></p>
<p><i>We <b>analyzed</b> the data and <b>found</b>…</i> → <i><b>Analysis</b> of the data <b>revealed</b>…</i></p>
<p>Dit maakt teksten compacter en objectiever. Maar overdrijf niet: een tekst vol nominalisaties wordt zwaar en vaag (in het Engels heet dat «bureaucratese»).</p>`,
        table: [['werkwoord (spreektaal)', 'nominalisatie (formeel)'], ['Prices increased.', 'There was an increase in prices.'], ['We decided to…', 'The decision was made to…'], ['They failed to act.', 'Their failure to act…'], ['The company grew fast.', 'The rapid growth of the company…']],
        ex: [['The introduction of the new system led to a significant reduction in costs.', 'De invoering van het nieuwe systeem leidde tot een aanzienlijke kostenverlaging.'], ['There has been a steady decline in sales.', 'Er is een gestage daling in de verkoop.']] },
      { t: 'Een betoog opbouwen', es: 'Structuring an argument',
        html: `<p>Engelse betogen volgen een duidelijke structuur met <b>signposting</b>:</p>
<p>Introductie: <i>This essay will examine…</i>, <i>The aim of this report is to…</i></p>
<p>Argumenten: <i>Firstly…</i>, <i>Furthermore…</i>, <i>In addition…</i>, <i>Another key factor is…</i></p>
<p>Tegenargument: <i>On the other hand…</i>, <i>Critics argue that…</i>, <i>While it is true that…, …</i></p>
<p>Conclusie: <i>In conclusion…</i>, <i>On balance…</i>, <i>Overall, the evidence suggests…</i></p>
<p>Let op: <b>firstly</b> (niet <s>at first</s>, dat betekent «aanvankelijk»), en <b>in conclusion</b> (niet <s>concluding</s> of <s>as a conclusion</s>).</p>`,
        table: [['functie', 'signaalwoorden'], ['opsommen', 'firstly, secondly, furthermore, in addition'], ['tegenstelling', 'however, on the other hand, while it is true that'], ['oorzaak/gevolg', 'as a result, consequently, thus'], ['afsluiten', 'in conclusion, on balance, overall']],
        ex: [['While it is true that remote work saves time, it may reduce team cohesion.', 'Hoewel het waar is dat thuiswerken tijd bespaart, kan het de teamband verzwakken.'], ['On balance, the benefits outweigh the drawbacks.', 'Alles afwegend wegen de voordelen zwaarder dan de nadelen.']] }
    ],
    dialogue: {
      t: 'Reviewing a policy paper', place: 'Washington, D.C. 🇺🇸',
      lines: [
        ['Dr. Lee', "I read your policy paper on bike lanes. The argument is strong, but the tone is a bit absolute.", 'Ik heb je beleidsnotitie over fietspaden gelezen. Het betoog is sterk, maar de toon is wat absoluut.'],
        ['Maarten', 'In what way?', 'Op welke manier?'],
        ['Dr. Lee', "You write «This proves that bike lanes reduce traffic.» The data suggests it, but one study can't prove it.", 'Je schrijft «This proves that bike lanes reduce traffic.» De data wijzen erop, maar één studie kan het niet bewijzen.'],
        ['Maarten', "Fair point. So, «The findings appear to indicate that bike lanes may reduce traffic»?", 'Terecht punt. Dus «The findings appear to indicate that bike lanes may reduce traffic»?'],
        ['Dr. Lee', "That might be a little too careful. «The findings suggest that bike lanes can significantly reduce traffic» strikes a better balance.", 'Dat is misschien net te voorzichtig. «The findings suggest that bike lanes can significantly reduce traffic» is een beter evenwicht.'],
        ['Maarten', 'And should I address the counterarguments?', 'En moet ik de tegenargumenten behandelen?'],
        ['Dr. Lee', "Definitely. Something like «Critics argue that bike lanes slow down cars. However, evidence from Amsterdam and Copenhagen suggests otherwise.»", 'Absoluut. Iets als «Critics argue that bike lanes slow down cars. However, evidence from Amsterdam and Copenhagen suggests otherwise.»'],
        ['Maarten', "I can draw on a lot of Dutch data for that, to say the least.", 'Daarvoor kan ik uit heel veel Nederlandse data putten, om het zacht uit te drukken.']
      ],
      q: [
        { t: 'mc', q: 'What is Dr. Lee’s main criticism?', o: ['The tone is too absolute', 'The data is wrong', 'The paper is too short'] },
        { t: 'mc', q: 'Why is «This proves that…» a problem?', o: ['One study can’t prove it', 'Proves is spelled wrong', 'It’s too informal'] },
        { t: 'mc', q: 'What does Dr. Lee suggest about counterarguments?', o: ['Address them and respond with evidence', 'Ignore them', 'Put them in a footnote'] }
      ]
    },
    culture: { t: 'Het Amerikaanse essay', html: `<p>Amerikaanse studenten leren vanaf de middelbare school het <b>five-paragraph essay</b>: een inleiding met een duidelijke <b>thesis statement</b>, drie alinea's met argumenten, en een conclusie. Elke alinea begint met een <b>topic sentence</b>.</p>
<p>Nederlandse betogen zijn vaak minder strak opgebouwd en directer in de conclusie. In het Engels verwacht de lezer dat je je stelling eerst aankondigt en dan onderbouwt.</p>
<p>🎓 Plagiaat wordt in de VS zeer streng aangepakt. Bij elke bron hoort een verwijzing, ook bij een samenvatting in je eigen woorden.</p>` },
    ex: [
      { t: 'cloze', s: 'Older people ___ to be more cautious with new technology.', a: ['tend'], o: ['tend', 'use', 'are used'], nl: 'Ouderen zijn doorgaans voorzichtiger met nieuwe technologie.', tag: 'enc-academic' },
      { t: 'cloze', s: 'The results ___ to confirm our hypothesis.', a: ['appear'], o: ['appear', 'seem like', 'look'], nl: 'De resultaten lijken onze hypothese te bevestigen.', tag: 'enc-academic' },
      { t: 'cloze', s: 'It could be ___ that the tax has done more harm than good.', a: ['argued'], o: ['argued', 'discussed', 'said that'], nl: 'Men zou kunnen stellen dat de belasting meer kwaad dan goed heeft gedaan.', tag: 'enc-academic' },
      { t: 'cloze', s: 'On ___, the advantages outweigh the disadvantages.', a: ['balance'], o: ['balance', 'the whole balance', 'equal'], nl: 'Alles afwegend wegen de voordelen zwaarder dan de nadelen.', tag: 'enc-academic' },
      { t: 'cloze', s: 'The benefits clearly ___ the costs.', a: ['outweigh'], o: ['outweigh', 'overweigh', 'weigh out'], nl: 'De voordelen wegen duidelijk zwaarder dan de kosten.', tag: 'enc-academic' },
      { t: 'cloze', s: '___ terms of cost, the second option is better.', a: ['In'], o: ['In', 'On', 'With'], nl: 'Wat de kosten betreft, is de tweede optie beter.', tag: 'enc-academic' },
      { t: 'mc', q: 'Welke formulering past het best in een academische tekst?', o: ['The data suggests that…', 'The data proves for sure that…', 'Everybody knows that…'], tag: 'enc-academic' },
      { t: 'mc', q: 'Hoe begin je je eerste argument?', o: ['Firstly,', 'At first,', 'First of all things,'], x: 'At first = aanvankelijk.', tag: 'enc-academic' },
      { t: 'mc', q: 'Welke zin is een nominalisatie van «prices rose sharply»?', o: ['There was a sharp rise in prices.', 'Prices were rising sharply.', 'The prices sharply rose up.'], tag: 'enc-academic' },
      { t: 'mc', q: '«To shed light on» betekent…', o: ['licht werpen op', 'het licht uitdoen', 'licht schijnen in'], tag: 'enc-academic' },
      { t: 'tr', nl: 'Dit wijst erop dat het beleid werkt.', a: ['This suggests that the policy works.', 'This suggests that the policy is working.', 'This indicates that the policy works.', 'This indicates that the policy is working.'], tag: 'enc-academic' },
      { t: 'tr', nl: 'Tot slot: de voordelen wegen zwaarder dan de nadelen.', a: ['In conclusion, the benefits outweigh the drawbacks.', 'In conclusion, the advantages outweigh the disadvantages.', 'In conclusion, the benefits outweigh the disadvantages.'], tag: 'enc-academic' },
      { t: 'order', s: 'While it is true that cars are convenient, they pollute the air.', nl: 'Hoewel het waar is dat auto’s handig zijn, vervuilen ze de lucht.', tag: 'enb-linking' },
      { t: 'match', p: [['a drawback', 'een nadeel'], ['to assess', 'beoordelen'], ['an approach', 'een aanpak'], ['to implement', 'invoeren'], ['to underestimate', 'onderschatten'], ['arguably', 'je zou kunnen zeggen']], tag: 'enc-academic' }
    ],
    reading: {
      t: 'Does remote work make us less creative?', type: 'Samenvatting van een studie',
      p: [
        ["A recent study published in the journal Nature appears to shed new light on an old debate: does working from home reduce creativity?", 'Een recente studie in het tijdschrift Nature lijkt nieuw licht te werpen op een oud debat: maakt thuiswerken ons minder creatief?'],
        ["The researchers compared teams that met in person with teams that met online. Their findings suggest that online teams tended to generate fewer new ideas, although they were equally effective at choosing the best one.", 'De onderzoekers vergeleken teams die fysiek samenkwamen met teams die online vergaderden. Hun bevindingen wijzen erop dat online teams doorgaans minder nieuwe ideeën bedachten, al waren ze even goed in het kiezen van het beste idee.'],
        ["One possible explanation is that video calls narrow our focus to the screen. In a physical room, by contrast, our eyes wander, and so, arguably, do our thoughts.", 'Een mogelijke verklaring is dat videogesprekken onze aandacht vernauwen tot het scherm. In een fysieke ruimte daarentegen dwalen onze ogen af, en dus, zou je kunnen zeggen, ook onze gedachten.'],
        ["It would be premature, however, to conclude that remote work is harmful. On balance, the evidence suggests a mixed approach: meet in person to brainstorm, and work remotely to execute.", 'Het zou echter voorbarig zijn te concluderen dat thuiswerken schadelijk is. Alles afwegend wijst het bewijs op een gemengde aanpak: kom fysiek samen om te brainstormen, en werk op afstand om uit te voeren.']
      ],
      gl: [['to generate', 'voortbrengen / bedenken'], ['premature', 'voorbarig'], ['to execute', 'uitvoeren']],
      q: [
        { t: 'mc', q: 'What did the online teams do less well?', o: ['Generate new ideas', 'Choose the best idea', 'Finish on time'] },
        { t: 'mc', q: 'What is one possible explanation?', o: ['Video calls narrow our focus to the screen', 'People at home are lazy', 'Internet connections are slow'] },
        { t: 'mc', q: 'What does the evidence suggest on balance?', o: ['A mixed approach', 'Always work in the office', 'Always work from home'] }
      ]
    },
    say: [['The data suggests that the plan is working.', 'De data wijzen erop dat het plan werkt.'], ['It could be argued that this is unfair.', 'Men zou kunnen stellen dat dit oneerlijk is.'], ['On balance, the benefits outweigh the costs.', 'Alles afwegend wegen de voordelen zwaarder dan de kosten.'], ['People tend to underestimate the risks.', 'Mensen hebben de neiging de risico’s te onderschatten.']],
    task: { nl: 'Schrijf een korte betogende alinea (5–6 zinnen) over de stelling «Steden zouden auto’s uit het centrum moeten weren». Gebruik hedging (tend to, suggest, arguably), minstens één nominalisatie en een tegenargument met While it is true that…', model: "It could be argued that banning cars from city centers would significantly improve quality of life. Studies suggest that a reduction in traffic leads to cleaner air and fewer accidents. Furthermore, pedestrians tend to spend more money in car-free streets. While it is true that some shop owners fear a loss of customers, evidence from cities such as Utrecht suggests otherwise. On balance, the benefits appear to outweigh the drawbacks." },
    scenario: { nl: 'Je verdedigt je standpunt in een academisch gesprek met een Amerikaanse onderzoeker.', role: 'You are Dr. Lee, a thoughtful American policy researcher in Washington, D.C. Discuss a policy topic with the learner (e.g. bike lanes, a four-day work week, or AI in schools). Challenge claims that are too absolute and ask for evidence. Model hedging language and praise good academic phrasing.', goal: 'Verdedig een standpunt met bewijs en voorzichtige, academische formuleringen.' }
  });

  /* ───────────────────────── C1 · 9 ───────────────────────── */
  U({
    id: 'en-c1-09', level: 'C1', icon: '🎤', title: 'Let me walk you through it', nl: 'Presenteren, overtuigen en klemtoon',
    goals: ['Een presentatie structureren met signposting', 'Overtuigen met retorische middelen: rule of three, vragen, contrast', 'Klemtoon en uitspraak: REcord vs. reCORD, en typisch Nederlandse uitspraakfouten'],
    vocab: [
      ['to walk someone through', 'iemand stap voor stap meenemen door'], ['to kick off', 'aftrappen / beginnen'], ['to wrap up', 'afronden'], ['to move on to', 'overgaan naar'], ['to elaborate on', 'uitweiden over'],
      ['a takeaway', 'een belangrijkste les'], ['to grab attention', 'de aandacht trekken'], ['a hook', 'een pakkend begin'], ['to engage', 'betrekken / boeien'], ['a slide', 'een dia'],
      ['to field questions', 'vragen beantwoorden'], ['to bear with me', 'heb even geduld'], ['to touch on', 'kort aanstippen'], ['to sum up', 'samenvatten'], ['compelling', 'overtuigend / meeslepend'],
      ['a pitch', 'een pitch / verkooppraatje'], ['to persuade', 'overtuigen'], ['a call to action', 'een oproep tot actie'], ['stage fright', 'plankenkoorts'], ['to rehearse', 'repeteren'],
      ['eye contact', 'oogcontact'], ['a filler word', 'een stopwoordje'], ['to pause', 'pauzeren'], ['an anecdote', 'een anekdote']
    ],
    grammar: [
      { t: 'Signposting: de luisteraar de weg wijzen', es: 'Signposting',
        html: `<p>Een goede Engelstalige presentatie vertelt steeds <b>waar je bent</b>. Dat heet <b>signposting</b>.</p>
<p>Openen: <i>Today I'd like to <b>walk you through</b>…</i>, <i>I've divided my talk into three parts.</i></p>
<p>Overgang: <i><b>Moving on to</b>…</i>, <i>That <b>brings me to</b> my next point.</i>, <i>Let's now <b>turn to</b>…</i></p>
<p>Verwijzen: <i>As you can see on this slide…</i>, <i>As I mentioned earlier…</i></p>
<p>Afronden: <i><b>To sum up</b>…</i>, <i>The key <b>takeaway</b> is…</i>, <i>I'd be happy to <b>take any questions</b>.</i></p>
<p>Dunglish-valkuil: <s>I will tell you something about…</s> klinkt saai. Zeg: <i>Today I want to show you why…</i></p>`,
        table: [['moment', 'uitdrukking'], ['openen', "Today I'd like to walk you through…"], ['volgend punt', 'That brings me to my next point.'], ['voorbeeld', 'Let me give you an example.'], ['samenvatten', 'To sum up, there are three key takeaways.'], ['vragen', "I'd be happy to take any questions."]],
        sum: "Let me walk you through it. That brings me to my next point. To sum up…",
        ex: [["I've divided my talk into three parts.", 'Ik heb mijn praatje in drie delen verdeeld.'], ["That brings me to my final point.", 'Dat brengt me bij mijn laatste punt.']] },
      { t: 'Overtuigen: retorische middelen', es: 'Rhetorical devices',
        html: `<p>Engelstalige sprekers gebruiken een paar klassieke trucs:</p>
<p><b>Rule of three</b>: drie elementen blijven hangen. <i>It's faster, cheaper and greener.</i> <i>Government of the people, by the people, for the people.</i></p>
<p><b>Retorische vraag</b>: <i>So what does this mean for us?</i> <i>Why does this matter?</i></p>
<p><b>Contrast</b>: <i>It's not about working harder. It's about working smarter.</i></p>
<p><b>Persoonlijk verhaal</b>: Amerikanen openen vaak met een anekdote (<i>Three years ago, I was standing in…</i>) in plaats van met een agenda.</p>`,
        table: [['middel', 'voorbeeld'], ['rule of three', 'Simple, fast and reliable.'], ['retorische vraag', 'So why should you care?'], ['contrast', "It's not a cost. It's an investment."], ['herhaling', 'We will try. We will learn. We will succeed.']],
        ex: [["It's not a cost. It's an investment.", 'Het is geen kostenpost. Het is een investering.'], ['So why should you care? Because it affects all of us.', 'Dus waarom zou het je iets kunnen schelen? Omdat het ons allemaal raakt.']] },
      { t: 'Klemtoon en uitspraak', es: 'Word stress',
        html: `<p>Sommige woorden veranderen van betekenis door de <b>klemtoon</b>: zelfstandig naamwoord op de eerste lettergreep, werkwoord op de tweede:</p>
<p><i>a <b>RE</b>cord</i> (een record/plaat) — <i>to re<b>CORD</b></i> (opnemen). <i>a <b>PRE</b>sent</i> — <i>to pre<b>SENT</b></i>. <i>an <b>OB</b>ject</i> — <i>to ob<b>JECT</b></i>. <i>an <b>IN</b>crease</i> — <i>to in<b>CREASE</b></i>.</p>
<p>Typische Nederlandse uitspraakfouten: <b>th</b> als d of s (<i>think</i> ≠ <s>sink</s>), <b>v/w</b> verwisselen (<i>very well</i>), de <b>eindklank</b> stemloos maken (<i>bed</i> klinkt als <s>bet</s>, <i>dog</i> als <s>dock</s>), en <i>comfortable</i> (Amerikaans: <b>KUMF</b>-ter-bul, drie lettergrepen).</p>`,
        table: [['zelfst. nw. (1e)', 'werkwoord (2e)'], ['a RE-cord', 'to re-CORD'], ['a PRE-sent', 'to pre-SENT'], ['an IN-crease', 'to in-CREASE'], ['a CON-tract', 'to con-TRACT'], ['a PRO-duce (groente)', 'to pro-DUCE']],
        ex: [["We need to record the meeting.", 'We moeten de vergadering opnemen.'], ['Sales showed a sharp increase.', 'De verkoop liet een sterke stijging zien.']] }
    ],
    dialogue: {
      t: 'Rehearsing the pitch', place: 'San Francisco 🇺🇸',
      lines: [
        ['Coach', "Okay, Bas, show me how you'd open.", 'Oké Bas, laat zien hoe je zou openen.'],
        ['Bas', "Good morning. Today I will tell you something about our new app. First, the agenda.", 'Goedemorgen. Vandaag ga ik u iets vertellen over onze nieuwe app. Eerst de agenda.'],
        ['Coach', "Hmm. Accurate, but nobody will remember it. What if you started with a question or a story?", 'Hmm. Klopt, maar niemand zal het onthouden. Wat als je begon met een vraag of een verhaal?'],
        ['Bas', "Like: «How many hours did you spend looking for a parking spot last month?»", 'Zoals: «Hoeveel uur zocht u vorige maand naar een parkeerplek?»'],
        ['Coach', "Much better. That's your hook. Then: «Let me walk you through how we solve that.»", 'Veel beter. Dat is je haakje. Dan: «Let me walk you through how we solve that.»'],
        ['Bas', "And then I explain it's faster, cheaper and greener.", 'En dan leg ik uit dat het sneller, goedkoper en groener is.'],
        ['Coach', "Rule of three, nice. One more thing: you said «we will reCORD a big increase». Stress the noun: a big INcrease.", 'Rule of three, mooi. Nog één ding: je zei «we will reCORD a big increase». Leg de klemtoon op het zelfstandig naamwoord: a big INcrease.'],
        ['Bas', "Got it. And I should end with a call to action, right?", 'Begrepen. En ik moet eindigen met een oproep tot actie, toch?'],
        ['Coach', "Exactly. Tell them what you want: a meeting, an investment, a pilot. Don't just say «that's it».", 'Precies. Zeg wat je wilt: een afspraak, een investering, een pilot. Zeg niet gewoon «dat was het».']
      ],
      q: [
        { t: 'mc', q: 'What is wrong with Bas’s first opening?', o: ['It’s accurate but forgettable', 'It’s too long', 'It’s rude'] },
        { t: 'mc', q: 'What is Bas’s hook?', o: ['A question about parking', 'A joke', 'A statistic about apps'] },
        { t: 'mc', q: 'How should Bas end his pitch?', o: ['With a call to action', 'With «that’s it»', 'With the agenda'] }
      ]
    },
    culture: { t: 'TED, elevator pitches en Amerikaans zelfvertrouwen', html: `<p>Amerikanen leren al op school presenteren (<i>show and tell</i>). Het ideaal is een <b>TED talk</b>: persoonlijk, enthousiast, met een verhaal en een duidelijke boodschap.</p>
<p>Een <b>elevator pitch</b> is een uitleg van 30 seconden: zo lang als een liftrit. In Silicon Valley wordt verwacht dat je die altijd paraat hebt.</p>
<p>Nederlanders presenteren vaak zakelijk en bescheiden («we hebben een app gemaakt, hij is best handig»). In de VS kan dat overkomen alsof je zelf niet in je product gelooft. Wees enthousiast, zonder te overdrijven.</p>` },
    ex: [
      { t: 'cloze', s: "Today I'd like to walk you ___ our results.", a: ['through'], o: ['through', 'over', 'along'], nl: 'Vandaag neem ik u graag mee door onze resultaten.', tag: 'enc-present' },
      { t: 'cloze', s: 'That ___ me to my next point.', a: ['brings'], o: ['brings', 'leads me', 'takes'], nl: 'Dat brengt me bij mijn volgende punt.', tag: 'enc-present' },
      { t: 'cloze', s: 'To ___ up, there are three key takeaways.', a: ['sum'], o: ['sum', 'some', 'summary'], nl: 'Samengevat zijn er drie belangrijke lessen.', tag: 'enc-present' },
      { t: 'cloze', s: "I'd be happy to ___ any questions.", a: ['take'], o: ['take', 'make', 'ask'], nl: 'Ik beantwoord graag al uw vragen.', tag: 'enc-present' },
      { t: 'cloze', s: "It's not a cost. It's an ___.", a: ['investment'], o: ['investment', 'expense', 'price'], nl: 'Het is geen kostenpost. Het is een investering.', tag: 'enc-present' },
      { t: 'mc', q: 'Waar ligt de klemtoon in «We need to record this»?', o: ['re-CORD', 'RE-cord', 'gelijk'], tag: 'enc-stress' },
      { t: 'mc', q: 'Waar ligt de klemtoon in «a big increase»?', o: ['IN-crease', 'in-CREASE', 'gelijk'], tag: 'enc-stress' },
      { t: 'mc', q: 'Welke opening werkt het best voor een Amerikaans publiek?', o: ['How many hours did you lose in traffic this week?', 'I will tell you something about traffic.', 'First, the agenda. Point one: traffic.'], tag: 'enc-present' },
      { t: 'mc', q: 'Wat is een «call to action»?', o: ['Een oproep aan het publiek om iets te doen', 'Een telefoontje na afloop', 'Een actiefilm'], tag: 'enc-present' },
      { t: 'mc', q: 'Welk voorbeeld is een «rule of three»?', o: ['Faster, cheaper and greener.', 'Fast and cheap.', 'It is very, very good.'], tag: 'enc-present' },
      { t: 'tr', nl: 'Dat brengt me bij mijn laatste punt.', a: ['That brings me to my last point.', 'That brings me to my final point.'], tag: 'enc-present' },
      { t: 'tr', nl: 'Heb even geduld, ik laat het u zien.', a: ['Bear with me, I will show you.', "Bear with me, I'll show you.", 'Bear with me while I show you.'], tag: 'enc-present' },
      { t: 'order', s: "I've divided my talk into three parts.", nl: 'Ik heb mijn praatje in drie delen verdeeld.', tag: 'enc-present' },
      { t: 'match', p: [['stage fright', 'plankenkoorts'], ['to rehearse', 'repeteren'], ['a takeaway', 'een belangrijkste les'], ['a hook', 'een pakkend begin'], ['compelling', 'overtuigend']], tag: 'enc-present' },
      { t: 'cloze', s: "Let's now ___ to the financial results.", a: ['turn'], o: ['turn', 'go over to', 'switch on'], nl: 'Laten we nu overgaan naar de financiële resultaten.', tag: 'enc-present' }
    ],
    reading: {
      t: 'How to give a talk people remember', type: 'Tips van een speechcoach',
      p: [
        ["Most presentations fail in the first thirty seconds. The speaker thanks the organizers, shows the agenda and explains who they are. By then, half the audience is checking email.", 'De meeste presentaties mislukken in de eerste dertig seconden. De spreker bedankt de organisatoren, laat de agenda zien en legt uit wie hij is. Tegen die tijd checkt de helft van het publiek zijn mail.'],
        ["Instead, start with a hook: a surprising number, a short story or a question your audience can't answer. Grab their attention first; the agenda can wait.", 'Begin in plaats daarvan met een haakje: een verrassend getal, een kort verhaal of een vraag die je publiek niet kan beantwoorden. Trek eerst de aandacht; de agenda kan wachten.'],
        ["In the middle, use signposts so people never feel lost: «So that's the problem. Now let's look at the solution.» And limit yourself to three main points. Nobody remembers seven.", 'Gebruik in het midden wegwijzers zodat mensen nooit de draad kwijtraken: «Dat is dus het probleem. Laten we nu naar de oplossing kijken.» En beperk je tot drie hoofdpunten. Niemand onthoudt er zeven.'],
        ["Finally, end with a clear call to action. Don't finish with «Okay, that's it, any questions?» Finish with the one sentence you want them to repeat at dinner tonight.", 'Eindig tot slot met een duidelijke oproep tot actie. Eindig niet met «Oké, dat was het, nog vragen?» Eindig met die ene zin die je wilt dat ze vanavond aan tafel herhalen.']
      ],
      gl: [['the organizers', 'de organisatoren'], ['to limit yourself', 'je beperken'], ['to feel lost', 'de draad kwijt zijn']],
      q: [
        { t: 'mc', q: 'Why do most presentations fail early?', o: ['They start with thanks, agenda and introductions', 'They are too short', 'The slides are ugly'] },
        { t: 'mc', q: 'How many main points does the coach recommend?', o: ['Three', 'Seven', 'One'] },
        { t: 'mc', q: 'How should you end?', o: ['With a sentence people will repeat', 'With «Any questions?»', 'With the agenda'] }
      ]
    },
    say: [["Let me walk you through our results.", 'Laat me u door onze resultaten meenemen.'], ['That brings me to my next point.', 'Dat brengt me bij mijn volgende punt.'], ["It's not a cost. It's an investment.", 'Het is geen kostenpost. Het is een investering.'], ['We saw a big increase in sales.', 'We zagen een grote stijging in de verkoop.']],
    task: { nl: 'Schrijf de opening en het slot (samen 5–6 zinnen) van een pitch voor een idee of product dat je kent. Gebruik een hook, signposting, een rule of three en een call to action.', model: "How many times this week did you search for your keys? For most of us, the answer is at least twice. Today I'd like to walk you through a tiny tag that ends that problem for good. It's simple, affordable and lasts five years. To sum up: no more lost keys, no more stress. Let's set up a pilot with your team next month." },
    scenario: { nl: 'Je oefent een pitch met een Amerikaanse speechcoach.', role: 'You are Coach Kim, an energetic American presentation coach in San Francisco. Ask the learner to pitch an idea or product in 1–2 minutes. Then give specific feedback: hook, structure, signposting, rule of three, call to action, and any word stress or pronunciation issues you notice in their writing (e.g. noun/verb stress). Ask them to try again with improvements.', goal: 'Pitch je idee en verbeter het met de feedback van de coach.' }
  });

  /* ───────────────────────── C1 · 10 ───────────────────────── */
  U({
    id: 'en-c1-10', level: 'C1', icon: '⚖️', title: 'I insist that he be informed', nl: 'Subjunctive en formele constructies',
    goals: ['De mandative subjunctive: We recommend that she be…', 'Hypothetisch: as if, would rather, were to, if it weren’t for', 'Formele constructies: but for, lest, supposing, be that as it may'],
    vocab: [
      ['to insist that', 'erop staan dat'], ['to recommend that', 'aanbevelen dat'], ['to demand that', 'eisen dat'], ['it is essential that', 'het is essentieel dat'], ['it is vital that', 'het is van levensbelang dat'],
      ['as if / as though', 'alsof'], ['would rather', 'liever willen'], ['would sooner', 'liever willen'], ['if it were to', 'als het zou'], ['were it to', 'mocht het'],
      ['but for', 'ware het niet voor'], ['supposing', 'stel dat'], ['lest', 'opdat niet'], ['be that as it may', 'hoe dan ook / dat zij zo'], ['so be it', 'het zij zo'],
      ['come what may', 'wat er ook gebeurt'], ['far be it from me', 'het zij verre van mij'], ['suffice it to say', 'het volstaat te zeggen'], ['God forbid', 'God verhoede'], ['long live', 'lang leve'],
      ['a stipulation', 'een bepaling / voorwaarde'], ['binding', 'bindend'], ['the board', 'de raad van bestuur'], ['to comply with', 'voldoen aan']
    ],
    grammar: [
      { t: 'Mandative subjunctive: that he be', es: 'Mandative subjunctive',
        html: `<p>Na werkwoorden en uitdrukkingen van <b>eisen, aanbevelen of noodzaak</b> gebruikt Amerikaans Engels de <b>kale infinitief</b>, voor alle personen: geen -s, geen was/were.</p>
<p><i>We recommend that she <b>be</b> promoted.</i> <i>The judge insisted that he <b>pay</b> the fine.</i> (niet <s>pays</s>) <i>It is essential that every employee <b>attend</b>.</i></p>
<p>Ontkennend: <b>not</b> + infinitief: <i>I suggest that he <b>not</b> go alone.</i></p>
<p>🇬🇧 Britten gebruiken hier vaak <b>should</b>: <i>We recommend that she <b>should</b> be promoted</i>, of zelfs gewoon de gewone vorm. 🇺🇸 Amerikanen gebruiken de subjunctive veel, ook in gewoon zakelijk Engels.</p>`,
        table: [['werkwoord', 'Amerikaans (subjunctive)', 'Brits (vaak)'], ['recommend', 'We recommend that he be informed.', 'We recommend that he should be informed.'], ['insist', 'She insisted that he leave.', 'She insisted that he left / should leave.'], ['essential', 'It is essential that she attend.', 'It is essential that she attends / should attend.']],
        sum: 'We recommend that she be promoted. They insisted that he pay.',
        ex: [['The doctor recommended that she take a few days off.', 'De dokter raadde aan dat ze een paar dagen vrij nam.'], ['It is vital that the client not find out.', 'Het is van levensbelang dat de klant er niet achter komt.']] },
      { t: 'Hypothetisch: as if, would rather, were to', es: 'Unreal past',
        html: `<p><b>as if / as though</b> + verleden tijd voor iets wat niet waar is: <i>He talks <b>as if</b> he <b>owned</b> the place.</i> (hij is geen eigenaar) Met to be: <i>as if he <b>were</b> the boss</i>.</p>
<p><b>would rather</b> + <b>persoon</b> + verleden tijd: <i>I'd rather you <b>didn't</b> tell anyone.</i> (Ik heb liever dat je het niemand vertelt.) Over jezelf: <i>I'd rather <b>stay</b> home.</i></p>
<p><b>were to</b> maakt een voorwaarde extra onwaarschijnlijk of formeel: <i>If the company <b>were to</b> go bankrupt, …</i> Met inversie: <i><b>Were</b> the company <b>to</b> go bankrupt, …</i></p>
<p><b>It's (about/high) time</b> + verleden tijd ken je al uit B2.</p>`,
        table: [['constructie', 'voorbeeld', 'Nederlands'], ['as if + past', 'She acts as if she knew everything.', 'Ze doet alsof ze alles weet.'], ['would rather + persoon + past', "I'd rather you called first.", 'Ik heb liever dat je eerst belt.'], ['if … were to', 'If prices were to rise, …', 'Mochten de prijzen stijgen, …'], ['were … to (inversie)', 'Were he to resign, …', 'Mocht hij aftreden, …']],
        ex: [["I'd rather you didn't smoke in here.", 'Ik heb liever dat je hier niet rookt.'], ['If you were to win the lottery, what would you do?', 'Stel dat je de loterij zou winnen, wat zou je doen?']] },
      { t: 'Formele en vaste subjunctive-uitdrukkingen', es: 'Fixed formal expressions',
        html: `<p>Een aantal oude subjunctive-vormen leeft voort in vaste uitdrukkingen:</p>
<p><i><b>Be that as it may</b>, we must decide today.</i> (Hoe dan ook…) <i><b>Come what may</b>, I'll be there.</i> <i><b>Suffice it to say</b> that he wasn't happy.</i> <i><b>Far be it from me</b> to criticize, but…</i> (= ik ga nu kritiek geven) <i><b>So be it.</b></i></p>
<p>Formele voegwoorden: <b>but for</b> = zonder (<i>But for your help, we would have failed.</i>), <b>lest</b> = opdat niet (<i>He wrote it down lest he forget.</i>), <b>supposing</b> = stel dat (<i>Supposing it rains, what then?</i>).</p>
<p>Deze klinken verzorgd, soms plechtig. <i>Far be it from me</i> wordt vaak ironisch gebruikt.</p>`,
        table: [['uitdrukking', 'Nederlands'], ['be that as it may', 'hoe dan ook / dat zij zo'], ['come what may', 'wat er ook gebeurt'], ['suffice it to say', 'het volstaat te zeggen'], ['far be it from me to…', 'het zij verre van mij om…'], ['but for', 'zonder / ware het niet voor']],
        ex: [["Suffice it to say, the meeting didn't go well.", 'Laat ik het zo zeggen: de vergadering ging niet goed.'], ['But for the rain, it would have been a perfect day.', 'Zonder de regen was het een perfecte dag geweest.']] }
    ],
    dialogue: {
      t: 'The board meeting', place: 'New York 🇺🇸',
      lines: [
        ['Chair', "Let's turn to the audit. The committee recommends that the CFO be informed immediately.", 'Laten we overgaan naar de audit. De commissie beveelt aan dat de CFO onmiddellijk wordt geïnformeerd.'],
        ['Esther', "I agree. It's essential that he not hear about it from the press.", 'Daar ben ik het mee eens. Het is essentieel dat hij het niet via de pers hoort.'],
        ['Mr. Grant', "Far be it from me to slow things down, but supposing the numbers turn out to be correct?", 'Het zij verre van mij om de zaak te vertragen, maar stel dat de cijfers toch kloppen?'],
        ['Esther', "Be that as it may, he needs to know. If the press were to find out first, the damage would be enormous.", 'Hoe dan ook, hij moet het weten. Als de pers er als eerste achter zou komen, zou de schade enorm zijn.'],
        ['Mr. Grant', "Fine. But I'd rather we kept it within this room until Friday.", 'Goed. Maar ik heb liever dat we het tot vrijdag binnen deze kamer houden.'],
        ['Chair', "Agreed. I'll insist that everyone sign a confidentiality agreement.", 'Akkoord. Ik sta erop dat iedereen een geheimhoudingsverklaring tekent.'],
        ['Esther', "And I suggest that the auditors be present on Friday as well.", 'En ik stel voor dat de accountants vrijdag ook aanwezig zijn.'],
        ['Chair', "So be it. Suffice it to say, this has been a long morning.", 'Het zij zo. Het volstaat te zeggen dat het een lange ochtend is geweest.']
      ],
      q: [
        { t: 'mc', q: 'What does the committee recommend?', o: ['That the CFO be informed immediately', 'That the CFO resign', 'That the audit be canceled'] },
        { t: 'mc', q: 'What would happen if the press found out first?', o: ['The damage would be enormous', 'Nothing', 'The CFO would be promoted'] },
        { t: 'mc', q: 'What does Mr. Grant prefer?', o: ['Keeping it within the room until Friday', 'Calling the press', 'Firing the auditors'] }
      ]
    },
    culture: { t: 'De subjunctive: springlevend in Amerika', html: `<p>Lang dachten taalkundigen dat de subjunctive uitstierf. In Amerikaans Engels is hij juist springlevend: <i>I suggest that he <b>call</b> me</i> klinkt daar heel normaal, ook in e-mails.</p>
<p>In Brits Engels hoor je eerder <i>I suggest that he <b>calls</b> me</i> of <i>should call</i>. Beide zijn correct; kies één stijl en blijf consequent.</p>
<p>📜 In juridische teksten en contracten (zoals de Amerikaanse grondwet) kom je de subjunctive overal tegen: <i>…shall be…</i>, <i>provided that it be…</i></p>` },
    ex: [
      { t: 'cloze', s: 'The doctor recommended that he ___ more rest.', a: ['get'], o: ['get', 'gets', 'got'], nl: 'De dokter raadde aan dat hij meer rust nam.', tag: 'enc-subjunctive' },
      { t: 'cloze', s: 'It is essential that every guest ___ a valid ID.', a: ['have'], o: ['have', 'has', 'had'], nl: 'Het is essentieel dat elke gast een geldig identiteitsbewijs heeft.', tag: 'enc-subjunctive' },
      { t: 'cloze', s: 'We insist that she ___ informed before Monday.', a: ['be'], o: ['be', 'is', 'will be'], nl: 'We staan erop dat ze voor maandag wordt geïnformeerd.', tag: 'enc-subjunctive' },
      { t: 'cloze', s: 'I suggest that he ___ go alone. It’s dangerous.', a: ['not'], o: ['not', "doesn't", "don't"], nl: 'Ik stel voor dat hij niet alleen gaat. Het is gevaarlijk.', tag: 'enc-subjunctive' },
      { t: 'cloze', s: 'He talks as if he ___ the boss.', a: ['were'], o: ['were', 'is being', 'be'], nl: 'Hij praat alsof hij de baas is.', tag: 'enc-subjunctive' },
      { t: 'cloze', s: "I'd rather you ___ tell anyone yet.", a: ["didn't"], o: ["didn't", "don't", 'not'], nl: 'Ik heb liever dat je het nog aan niemand vertelt.', tag: 'enc-subjunctive' },
      { t: 'cloze', s: 'If the company ___ to close, hundreds would lose their jobs.', a: ['were'], o: ['were', 'would', 'is'], nl: 'Als het bedrijf zou sluiten, zouden honderden hun baan verliezen.', tag: 'enc-subjunctive' },
      { t: 'cloze', s: '___ for your help, I would never have finished.', a: ['But'], o: ['But', 'Except', 'Only'], nl: 'Zonder jouw hulp was ik nooit klaar gekomen.', tag: 'enc-subjunctive' },
      { t: 'mc', q: '«Far be it from me to criticize, but…» betekent meestal…', o: ['Ik ga nu toch kritiek geven.', 'Ik geef nooit kritiek.', 'Ik woon ver weg.'], tag: 'enc-idiom' },
      { t: 'mc', q: 'Welke zin is typisch Amerikaans formeel?', o: ['We recommend that he be promoted.', 'We recommend that he is promoting.', 'We recommend him to be promote.'], tag: 'enc-subjunctive' },
      { t: 'mc', q: '«Come what may» betekent…', o: ['wat er ook gebeurt', 'kom wanneer je wilt', 'misschien komt het'], tag: 'enc-subjunctive' },
      { t: 'tr', nl: 'Ik heb liever dat je eerst belt.', a: ["I'd rather you called first.", 'I would rather you called first.', "I'd rather you phoned first."], tag: 'enc-subjunctive' },
      { t: 'tr', nl: 'Ze doet alsof ze alles weet.', a: ['She acts as if she knew everything.', 'She acts as though she knew everything.', 'She acts as if she knows everything.', 'She behaves as if she knew everything.'], tag: 'enc-subjunctive' },
      { t: 'order', s: 'It is vital that the client not find out.', nl: 'Het is van levensbelang dat de klant er niet achter komt.', tag: 'enc-subjunctive' },
      { t: 'match', p: [['be that as it may', 'hoe dan ook'], ['suffice it to say', 'het volstaat te zeggen'], ['lest', 'opdat niet'], ['supposing', 'stel dat'], ['so be it', 'het zij zo']], tag: 'enc-subjunctive' }
    ],
    reading: {
      t: 'Terms and conditions', type: 'Zakelijke brief',
      p: [
        ["Dear Ms. Visser, thank you for your application for the position of Senior Analyst. We are pleased to offer you the role, subject to the following conditions.", 'Geachte mevrouw Visser, dank u voor uw sollicitatie naar de functie van Senior Analyst. Met genoegen bieden wij u de functie aan, onder de volgende voorwaarden.'],
        ["It is essential that you provide proof of your right to work in the United States before your start date. We further require that all new employees complete the online compliance training within thirty days.", 'Het is essentieel dat u vóór uw startdatum aantoont dat u in de Verenigde Staten mag werken. Verder eisen wij dat alle nieuwe medewerkers binnen dertig dagen de online compliancetraining afronden.'],
        ["Should you have any questions regarding these terms, we recommend that you contact our HR department directly. Were you to decline this offer, we would appreciate it if you informed us by May 15th.", 'Mocht u vragen hebben over deze voorwaarden, dan raden wij u aan rechtstreeks contact op te nemen met onze afdeling HR. Mocht u dit aanbod afwijzen, dan stellen wij het op prijs als u ons uiterlijk 15 mei informeert.'],
        ["Suffice it to say, the entire team was impressed by your interview, and we very much hope you will accept. Sincerely, David Moore, Director of Talent", 'Het volstaat te zeggen dat het hele team onder de indruk was van uw gesprek, en we hopen van harte dat u accepteert. Met vriendelijke groet, David Moore, Director of Talent']
      ],
      gl: [['subject to', 'onder voorbehoud van'], ['proof', 'bewijs'], ['to decline', 'afwijzen']],
      q: [
        { t: 'mc', q: 'What must Ms. Visser provide before her start date?', o: ['Proof of her right to work in the US', 'A medical certificate', 'A reference letter'] },
        { t: 'mc', q: 'What must new employees complete within thirty days?', o: ['Compliance training', 'A probation period', 'A language test'] },
        { t: 'mc', q: 'What should she do if she declines?', o: ['Inform them by May 15th', 'Pay a fee', 'Call the director'] }
      ]
    },
    say: [['We recommend that she be promoted.', 'We bevelen aan dat ze promotie krijgt.'], ["I'd rather you didn't tell anyone.", 'Ik heb liever dat je het niemand vertelt.'], ['Be that as it may, we need to decide.', 'Hoe dan ook, we moeten beslissen.'], ['He acts as if he owned the place.', 'Hij doet alsof de zaak van hem is.']],
    task: { nl: 'Schrijf een formele aanbeveling (5 zinnen) aan een raad van bestuur over een probleem in je organisatie. Gebruik minstens twee keer de mandative subjunctive (recommend/insist/essential that + infinitief) en één vaste uitdrukking (be that as it may, suffice it to say…).', model: "Following the recent security incident, the committee recommends that all staff be required to use two-factor authentication. It is essential that this policy be implemented before the end of the quarter. We further suggest that an external expert review our systems. Some members feel the cost is too high. Be that as it may, the risk of another breach is simply too great." },
    scenario: { nl: 'Je zit in een formele vergadering met de raad van bestuur van een Amerikaans bedrijf.', role: 'You are Margaret Hughes, the formal and precise chair of the board of an American company in New York. A problem has come up (a data leak, a delayed product, or an unhappy major client). Lead a formal discussion with the learner, who is a director. Use and expect formal language: recommend that…, it is essential that…, were we to…, be that as it may.', goal: 'Doe formele aanbevelingen en reageer op bezwaren in de vergadering.' }
  });
})(window.SPT);
