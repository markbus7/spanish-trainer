/* Engels voor Nederlandstaligen — niveau B2, units 6–10 (Amerikaans Engels, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B2 · 6 ───────────────────────── */
  U({
    id: 'en-b2-06', level: 'B2', icon: '🔁', title: 'Remember to, remember doing', nl: 'Gerund of to-infinitief',
    goals: ['Weten welke werkwoorden een -ing-vorm of to-infinitief krijgen', 'Betekenisverschil zien: stop, remember, forget, try, regret', 'Make, let, allow en help correct gebruiken'],
    vocab: [
      ['to avoid', 'vermijden'], ['to consider', 'overwegen'], ['to deny', 'ontkennen'], ['to admit', 'toegeven'], ['to postpone', 'uitstellen'],
      ['to afford', 'zich kunnen veroorloven'], ['to manage to', 'erin slagen om'], ['to refuse', 'weigeren'], ['to tend to', 'de neiging hebben om'], ['to be keen on', 'happig zijn op'],
      ['to look forward to', 'uitkijken naar'], ['to be used to', 'gewend zijn aan'], ['to get used to', 'wennen aan'], ['to object to', 'bezwaar hebben tegen'], ['to can’t help', 'het niet kunnen laten'],
      ['to be worth', 'de moeite waard zijn'], ['there’s no point in', 'het heeft geen zin om'], ['to feel like', 'zin hebben in'], ['to quit', 'stoppen met'], ['to struggle to', 'moeite hebben om'],
      ['to encourage', 'aanmoedigen'], ['to persuade', 'overhalen'], ['to remind', 'eraan herinneren'], ['to give up', 'opgeven / ermee stoppen']
    ],
    grammar: [
      { t: '-ing of to? Het hangt van het werkwoord af', es: 'Verb patterns',
        html: `<p>Na sommige werkwoorden komt een <b>-ing-vorm</b> (gerund): <i>enjoy, avoid, consider, deny, admit, finish, mind, suggest, keep, can't help</i>. <i>I <b>enjoy cooking</b>.</i></p>
<p>Na andere een <b>to-infinitief</b>: <i>want, decide, hope, plan, manage, refuse, afford, offer, tend, seem</i>. <i>We <b>decided to leave</b>.</i></p>
<p>Na een <b>voorzetsel</b> altijd -ing. Lastig: in <i>look forward <b>to</b></i>, <i>be used <b>to</b></i> en <i>object <b>to</b></i> is to een voorzetsel! Dus: <i>I'm looking forward to <b>seeing</b> you</i>, niet <s>to see you</s>.</p>
<p>Nederlanders zeggen vaak <s>I suggest to take a taxi</s>. Correct: <i>I suggest <b>taking</b> a taxi</i> of <i>I suggest (that) we <b>take</b> a taxi</i>.</p>`,
        table: [['patroon', 'werkwoorden', 'voorbeeld'], ['+ -ing', 'enjoy, avoid, consider, suggest, mind', 'Would you mind waiting?'], ['+ to', 'want, decide, manage, refuse, afford', "I can't afford to go."], ['voorzetsel + -ing', 'look forward to, be used to, instead of', "I'm used to working late."]],
        sum: 'I enjoy cooking. We decided to leave. I look forward to seeing you.',
        ex: [['She avoided answering the question.', 'Ze vermeed het om de vraag te beantwoorden.'], ['I managed to fix it myself.', 'Het is me gelukt het zelf te repareren.']] },
      { t: 'Stop, remember, forget, try, regret: andere betekenis', es: 'Meaning changes',
        html: `<p>Bij deze werkwoorden kan allebei, maar de betekenis verandert:</p>
<p><b>stop doing</b> = ermee ophouden: <i>I stopped smoking.</i> <b>stop to do</b> = stoppen óm iets te doen: <i>I stopped to smoke.</i> (ik stopte om een sigaret te roken)</p>
<p><b>remember doing</b> = je herinneren dat je iets deed: <i>I remember locking the door.</i> <b>remember to do</b> = eraan denken om: <i>Remember to lock the door!</i> Zo ook <b>forget</b>.</p>
<p><b>try doing</b> = iets uitproberen: <i>Try restarting your computer.</i> <b>try to do</b> = proberen (moeite doen): <i>I tried to open the window, but it was stuck.</i></p>
<p><b>regret to tell you</b> = het spijt me u te moeten zeggen (formeel). <b>regret telling</b> = spijt hebben dat je het zei.</p>`,
        table: [['werkwoord', '+ -ing', '+ to'], ['stop', 'ophouden met', 'stoppen om te'], ['remember', 'zich herinneren dat', 'eraan denken om'], ['try', 'uitproberen', 'moeite doen om'], ['regret', 'spijt hebben dat', 'het spijt me te moeten']],
        sum: 'I stopped smoking. Remember to call! Try restarting it.',
        ex: [["I'll never forget meeting you in Boston.", 'Ik zal nooit vergeten hoe ik je in Boston ontmoette.'], ["Don't forget to send the invoice.", 'Vergeet niet de factuur te sturen.']] },
      { t: 'Make, let, allow, help', es: 'Make / let / allow',
        html: `<p><b>make</b> en <b>let</b> krijgen een infinitief <b>zonder to</b>: <i>My boss <b>made me work</b> late. My parents <b>let me stay</b> out.</i></p>
<p><b>allow</b> en <b>force</b> krijgen wel <b>to</b>: <i>They <b>allowed us to</b> park here.</i> <b>help</b> kan allebei: <i>Can you help me (to) carry this?</i></p>
<p>Let op: <i>laten</i> heeft in het Engels veel vertalingen. Iets laten doen = <i>have something done</i> (B2.3). Toestaan = <i>let</i>. Achterlaten = <i>leave</i>: <i>I <b>left</b> my keys at home</i>, niet <s>let my keys</s>.</p>`,
        table: [['werkwoord', 'patroon', 'voorbeeld'], ['make', 'make + iemand + infinitief', 'She made me laugh.'], ['let', 'let + iemand + infinitief', 'Let me help.'], ['allow', 'allow + iemand + to', 'They allowed us to leave.'], ['help', 'help + iemand + (to)', 'He helped me move.']],
        ex: [["Don't make me wait.", 'Laat me niet wachten.'], ['We aren’t allowed to take photos here.', 'We mogen hier geen foto’s maken.']] }
    ],
    dialogue: {
      t: 'Trying to quit', place: 'Minneapolis 🇺🇸',
      lines: [
        ['Ashley', 'Did you remember to cancel the gym membership?', 'Heb je eraan gedacht het sportschoolabonnement op te zeggen?'],
        ['Joris', "No! I completely forgot to do it. And I remember promising you I would.", 'Nee! Ik ben het helemaal vergeten. En ik weet nog dat ik je beloofde het te doen.'],
        ['Ashley', "Well, there's no point in paying for something you never use.", 'Nou, het heeft geen zin te betalen voor iets wat je nooit gebruikt.'],
        ['Joris', "I know. I keep telling myself I'll start going again. I just can't seem to get used to getting up early.", 'Ik weet het. Ik blijf mezelf wijsmaken dat ik weer ga. Ik kan gewoon niet wennen aan vroeg opstaan.'],
        ['Ashley', 'Have you tried going in the evening instead?', 'Heb je het weleens ’s avonds geprobeerd?'],
        ['Joris', "I tried to, but I'm always too tired. My manager makes us stay late every week.", 'Ik heb het geprobeerd, maar ik ben altijd te moe. Mijn manager laat ons elke week overwerken.'],
        ['Ashley', "Then maybe it's worth switching to running. They can't make you pay for the park.", 'Dan is het misschien de moeite waard om over te stappen op hardlopen. Voor het park kunnen ze je niet laten betalen.'],
        ['Joris', "Fair enough. I'm actually looking forward to trying it.", 'Daar zit wat in. Ik kijk er eigenlijk naar uit om het te proberen.']
      ],
      q: [
        { t: 'mc', q: 'What did Joris forget to do?', o: ['Cancel the gym membership', 'Lock the door', 'Call his manager'] },
        { t: 'mc', q: 'Why doesn’t he go in the evening?', o: ['He’s too tired because he works late', 'The gym is closed', 'He prefers mornings'] },
        { t: 'mc', q: 'Which sentence is correct?', o: ["I'm looking forward to trying it.", "I'm looking forward to try it.", "I'm looking forward try it."] }
      ]
    },
    culture: { t: 'New Year’s resolutions', html: `<p>Op 1 januari maken veel Amerikanen <b>New Year's resolutions</b>: <i>I'm going to quit smoking, stop eating junk food, start going to the gym.</i> In februari is de sportschool meestal weer leeg.</p>
<p>Handige uitdrukkingen: <i>to fall off the wagon</i> (terugvallen), <i>to stick to something</i> (volhouden) en <i>to kick a habit</i> (een gewoonte afleren).</p>
<p>🇬🇧 In Brits Engels hoor je vaker <i>the gym</i> én <i>the leisure centre</i>; een abonnement is daar ook <i>a membership</i>, maar opzeggen is in Groot-Brittannië <i>to cancel</i> (met dubbele l in <i>cancelled</i>).</p>` },
    ex: [
      { t: 'cloze', s: 'Would you mind ___ the window?', a: ['opening'], o: ['opening', 'to open', 'open'], nl: 'Zou je het raam willen openen?', tag: 'enb-gerinf' },
      { t: 'cloze', s: "We can't afford ___ a new car this year.", a: ['to buy'], o: ['to buy', 'buying', 'buy'], nl: 'We kunnen ons dit jaar geen nieuwe auto veroorloven.', tag: 'enb-gerinf' },
      { t: 'cloze', s: "I'm really looking forward to ___ you next week.", a: ['seeing'], o: ['seeing', 'see', 'have seen'], nl: 'Ik kijk er erg naar uit je volgende week te zien.', x: 'In look forward to is to een voorzetsel, dus -ing.', tag: 'enb-gerinf' },
      { t: 'cloze', s: 'She suggested ___ a break.', a: ['taking'], o: ['taking', 'to take', 'take'], nl: 'Ze stelde voor om pauze te nemen.', tag: 'enb-gerinf' },
      { t: 'cloze', s: "He stopped ___ when he was 40. He hasn't had a cigarette since.", a: ['smoking'], o: ['smoking', 'to smoke', 'smoke'], nl: 'Hij is op zijn veertigste gestopt met roken.', tag: 'enb-gerinf' },
      { t: 'cloze', s: "Please remember ___ the lights when you leave.", a: ['to turn off'], o: ['to turn off', 'turning off', 'turn off'], nl: 'Denk er alsjeblieft aan het licht uit te doen als je weggaat.', tag: 'enb-gerinf' },
      { t: 'cloze', s: 'My parents never let me ___ up late.', a: ['stay'], o: ['stay', 'to stay', 'staying'], nl: 'Mijn ouders lieten me nooit laat opblijven.', tag: 'enb-pattern' },
      { t: 'cloze', s: "We weren't allowed ___ our phones during the exam.", a: ['to use'], o: ['to use', 'use', 'using'], nl: 'We mochten tijdens het examen onze telefoons niet gebruiken.', tag: 'enb-pattern' },
      { t: 'mc', q: 'Je computer doet het niet. Je advies?', o: ['Try restarting it.', 'Try to restarting it.', 'Try restart it.'], x: 'Try doing = iets uitproberen.', tag: 'enb-gerinf' },
      { t: 'mc', q: '«I remember locking the door» betekent…', o: ['Ik weet nog dat ik de deur op slot deed.', 'Ik moet eraan denken de deur op slot te doen.', 'Ik vergat de deur op slot te doen.'], tag: 'enb-gerinf' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['I left my keys at home.', 'I let my keys at home.', 'I let my keys home.'], tag: 'enb-falsefriend' },
      { t: 'tr', nl: 'Ik ben gewend vroeg op te staan.', a: ["I'm used to getting up early.", 'I am used to getting up early.', "I'm used to waking up early."], tag: 'enb-gerinf' },
      { t: 'tr', nl: 'Het heeft geen zin om te wachten.', a: ["There's no point in waiting.", 'There is no point in waiting.', "There's no point waiting."], tag: 'enb-gerinf' },
      { t: 'tr', nl: 'Ze liet me lachen.', a: ['She made me laugh.'], x: 'Laten = make als je iemand iets laat doen.', tag: 'enb-pattern' },
      { t: 'order', s: "Don't forget to call your mother tonight.", nl: 'Vergeet niet vanavond je moeder te bellen.', tag: 'enb-gerinf' },
      { t: 'match', p: [['to avoid', 'vermijden'], ['to afford', 'zich veroorloven'], ['to refuse', 'weigeren'], ['to persuade', 'overhalen'], ['to admit', 'toegeven']], tag: 'enb-pattern' }
    ],
    reading: {
      t: 'Why we can’t stop scrolling', type: 'Populairwetenschappelijk artikel',
      p: [
        ["Most of us have tried to spend less time on our phones. We delete apps, turn off notifications and promise ourselves to stop scrolling before bed. And yet, we keep coming back.", 'De meesten van ons hebben weleens geprobeerd minder tijd op hun telefoon door te brengen. We verwijderen apps, zetten meldingen uit en beloven onszelf te stoppen met scrollen voor het slapengaan. En toch komen we steeds terug.'],
        ["Psychologists say this is no accident. Apps are designed to make us feel like checking them again and again. Each new post gives the brain a small reward.", 'Psychologen zeggen dat dit geen toeval is. Apps zijn ontworpen om ons steeds opnieuw zin te geven ze te checken. Elk nieuw bericht geeft het brein een kleine beloning.'],
        ["So what works? Experts suggest replacing the habit rather than fighting it. Try reading a paper book, or leave your phone in another room. Willpower alone rarely manages to beat good design.", 'Wat werkt er dan wel? Experts stellen voor de gewoonte te vervangen in plaats van ertegen te vechten. Probeer eens een papieren boek te lezen, of laat je telefoon in een andere kamer liggen. Wilskracht alleen wint zelden van goed ontwerp.'],
        ["And if you fail? Don't give up. Most people need several attempts before they get used to a new routine. It's worth trying again.", 'En als het mislukt? Geef niet op. De meeste mensen hebben meerdere pogingen nodig voordat ze aan een nieuwe routine gewend zijn. Het is de moeite waard om het opnieuw te proberen.']
      ],
      gl: [['a notification', 'een melding'], ['a reward', 'een beloning'], ['willpower', 'wilskracht'], ['an attempt', 'een poging']],
      q: [
        { t: 'mc', q: 'Why do we keep coming back to our phones?', o: ['Apps are designed to make us check them', 'We need them for work', 'Phones are cheap'] },
        { t: 'mc', q: 'What do experts suggest?', o: ['Replacing the habit', 'Buying a new phone', 'Using more apps'] },
        { t: 'mc', q: 'What should you do if you fail?', o: ['Don’t give up and try again', 'Delete your phone', 'Stop reading books'] }
      ]
    },
    say: [["I'm looking forward to seeing you.", 'Ik kijk ernaar uit je te zien.'], ["Remember to lock the door.", 'Denk eraan de deur op slot te doen.'], ['Have you tried restarting it?', 'Heb je geprobeerd hem opnieuw op te starten?'], ["It's worth a try.", 'Het is het proberen waard.']],
    task: { nl: 'Schrijf 4–5 zinnen over een gewoonte die je wilt veranderen. Wat heb je al geprobeerd, wat wil je stoppen en waar moet je aan wennen? Gebruik minstens één werkwoord met -ing, één met to en één van stop/remember/try.', model: "I want to stop checking my phone first thing in the morning. I've tried leaving it in the kitchen, but I keep forgetting to do it. I'm not used to waking up without an alarm on my phone, so I'm considering buying an old-fashioned alarm clock. I really hope to manage it this month." },
    scenario: { nl: 'Je praat met een Amerikaanse lifecoach over goede voornemens.', role: 'You are Coach Taylor, an upbeat American life coach. Ask the learner about a habit they want to change, what they have tried, what they keep forgetting to do, and what they look forward to. Give practical tips with "try doing", "avoid doing", "remember to".', goal: 'Vertel over je voornemen en wat je al geprobeerd hebt.' }
  });

  /* ───────────────────────── B2 · 7 ───────────────────────── */
  U({
    id: 'en-b2-07', level: 'B2', icon: '🗞️', title: 'She insisted on paying', nl: 'Indirecte rede en reporting verbs',
    goals: ['Vertellen wat iemand zei zonder steeds said te gebruiken', 'Reporting verbs met het juiste patroon: deny doing, urge someone to, accuse someone of', 'Indirecte vragen netjes formuleren'],
    vocab: [
      ['to claim', 'beweren'], ['to insist on', 'erop staan'], ['to deny', 'ontkennen'], ['to admit', 'toegeven'], ['to accuse someone of', 'iemand beschuldigen van'],
      ['to blame someone for', 'iemand de schuld geven van'], ['to urge', 'dringend aansporen'], ['to warn', 'waarschuwen'], ['to threaten', 'dreigen'], ['to promise', 'beloven'],
      ['to complain about', 'klagen over'], ['to apologize for', 'zich verontschuldigen voor'], ['to congratulate on', 'feliciteren met'], ['to point out', 'erop wijzen'], ['to announce', 'aankondigen'],
      ['to confirm', 'bevestigen'], ['to reveal', 'onthullen'], ['to mention', 'noemen / vermelden'], ['to state', 'verklaren'], ['a spokesperson', 'een woordvoerder'],
      ['according to', 'volgens'], ['to quote', 'citeren'], ['off the record', 'onofficieel / niet voor publicatie'], ['to leak', 'lekken']
    ],
    grammar: [
      { t: 'Indirecte rede: tijden schuiven terug', es: 'Reported speech',
        html: `<p>Vertel je later wat iemand zei, dan schuift de tijd meestal één stap terug: <i>"I'm tired."</i> → <i>She said (that) she <b>was</b> tired.</i></p>
<p><i>will</i> → <i>would</i>, <i>can</i> → <i>could</i>, present perfect en past simple → <i>had + voltooid deelwoord</i>: <i>"I've lost my keys."</i> → <i>He said he <b>had lost</b> his keys.</i></p>
<p>Is het nog steeds waar, dan mag de tijd blijven: <i>She said she <b>lives</b> in Utrecht.</i> En let op: <b>say</b> heeft geen persoon nodig, <b>tell</b> wel: <i>He <b>told me</b> that…</i>, nooit <s>He said me</s>.</p>`,
        table: [['direct', 'indirect'], ['"I am busy."', 'She said she was busy.'], ['"I will call."', 'He said he would call.'], ['"I saw it."', 'She said she had seen it.'], ['"I can help."', 'He said he could help.']],
        sum: 'She said she was tired. He told me he would call.',
        ex: [['He told us he had already eaten.', 'Hij vertelde ons dat hij al gegeten had.'], ['She said she would be late.', 'Ze zei dat ze laat zou zijn.']] },
      { t: 'Reporting verbs: meer dan said', es: 'Reporting verbs',
        html: `<p>Native speakers gebruiken liever een werkwoord dat de <b>bedoeling</b> laat zien. Elk heeft een eigen patroon:</p>
<p><b>+ to</b>: <i>agree, offer, promise, refuse, threaten</i>: <i>He <b>refused to</b> sign.</i></p>
<p><b>+ iemand + to</b>: <i>advise, urge, warn, remind, persuade, encourage</i>: <i>She <b>urged me to</b> apply.</i></p>
<p><b>+ -ing</b>: <i>deny, admit, suggest, recommend</i>: <i>He <b>denied stealing</b> the money.</i></p>
<p><b>+ voorzetsel + -ing</b>: <i>insist on, apologize for, accuse sb of, blame sb for, congratulate sb on</i>: <i>She <b>insisted on paying</b>.</i></p>
<p>Fout van Nederlanders: <s>She insisted to pay</s> en <s>He accused me to lie</s>.</p>`,
        table: [['patroon', 'werkwoorden', 'voorbeeld'], ['+ to', 'agree, offer, promise, refuse', 'He offered to help.'], ['+ iemand + to', 'advise, urge, warn, remind', 'She warned me not to go.'], ['+ -ing', 'deny, admit, suggest', 'He admitted lying.'], ['+ voorzetsel + -ing', 'insist on, apologize for, accuse of', 'They accused him of cheating.']],
        sum: 'She insisted on paying. He denied taking it. They urged us to leave.',
        ex: [['The minister refused to comment.', 'De minister weigerde commentaar te geven.'], ['He apologized for being late.', 'Hij verontschuldigde zich voor zijn late komst.']] },
      { t: 'Indirecte vragen: geen vraagvolgorde', es: 'Indirect questions',
        html: `<p>In een indirecte vraag staat de zin in <b>gewone volgorde</b> (onderwerp + werkwoord) en zonder do/does/did:</p>
<p><i>"Where do you live?"</i> → <i>She asked me where I <b>lived</b>.</i> (niet <s>where did I live</s>)</p>
<p>Ja/nee-vragen krijgen <b>if</b> of <b>whether</b>: <i>He asked <b>if</b> I was coming.</i></p>
<p>Dit geldt ook voor beleefde vragen: <i>Could you tell me where the station <b>is</b>?</i> <i>Do you know what time it <b>starts</b>?</i> Nederlanders zeggen hier vaak <s>where is the station</s>.</p>`,
        table: [['direct', 'indirect'], ['"Where is the hotel?"', 'Could you tell me where the hotel is?'], ['"Did you see it?"', 'She asked if I had seen it.'], ['"What does it cost?"', 'Do you know what it costs?']],
        ex: [['Do you know what time the store opens?', 'Weet je hoe laat de winkel opengaat?'], ['I wonder whether they will agree.', 'Ik vraag me af of ze akkoord gaan.']] }
    ],
    dialogue: {
      t: 'Office gossip', place: 'Atlanta 🇺🇸',
      lines: [
        ['Nina', "You won't believe what happened at the board meeting.", 'Je gelooft nooit wat er in de directievergadering gebeurde.'],
        ['Stijn', 'Go on, spill the tea.', 'Kom op, vertel alles.'],
        ['Nina', "Mark accused the finance director of hiding the losses. She denied knowing anything about it.", 'Mark beschuldigde de financieel directeur ervan de verliezen te verbergen. Zij ontkende er iets van te weten.'],
        ['Stijn', 'Wow. Did anyone back him up?', 'Wauw. Steunde iemand hem?'],
        ['Nina', "Not at first. But then the auditor admitted finding some strange numbers. Mark insisted on seeing the full report.", 'In eerste instantie niet. Maar toen gaf de accountant toe dat hij vreemde cijfers had gevonden. Mark stond erop het volledige rapport te zien.'],
        ['Stijn', 'And what did the CEO say?', 'En wat zei de CEO?'],
        ['Nina', "She urged everyone to stay calm and promised to look into it. She asked us not to mention it outside the room.", 'Ze spoorde iedereen aan kalm te blijven en beloofde het uit te zoeken. Ze vroeg ons het niet buiten de kamer te noemen.'],
        ['Stijn', 'Oops. Then maybe you shouldn’t have told me.', 'Oeps. Dan had je het mij misschien niet moeten vertellen.'],
        ['Nina', "Relax. This is strictly off the record.", 'Rustig maar. Dit is strikt onofficieel.']
      ],
      q: [
        { t: 'mc', q: 'What did Mark accuse the finance director of?', o: ['Hiding the losses', 'Stealing money', 'Arriving late'] },
        { t: 'mc', q: 'What did the auditor admit?', o: ['Finding some strange numbers', 'Making a mistake', 'Leaking the report'] },
        { t: 'mc', q: 'What did the CEO ask them?', o: ['Not to mention it outside the room', 'To leave the company', 'To write a report'] }
      ]
    },
    culture: { t: 'Nieuws lezen: «allegedly» en «reportedly»', html: `<p>Amerikaanse nieuwsmedia zijn voorzichtig met beschuldigingen. Je leest <i>the <b>alleged</b> fraud</i>, <i>he <b>reportedly</b> resigned</i>, <i>she <b>is said to</b> have…</i>. Zo kan niemand de krant aanklagen.</p>
<p><b>Off the record</b> betekent dat een bron iets vertelt dat niet geciteerd mag worden. <i>No comment</i> is het klassieke antwoord van een woordvoerder.</p>
<p>📰 «Spill the tea» (vertel de roddels) komt uit de Amerikaanse drag- en jongerencultuur en is nu gewone spreektaal.</p>` },
    ex: [
      { t: 'cloze', s: '"I’m tired." → She said she ___ tired.', a: ['was'], o: ['was', 'is been', 'were'], nl: 'Ze zei dat ze moe was.', tag: 'enb-report' },
      { t: 'cloze', s: '"I’ve lost my wallet." → He said he ___ his wallet.', a: ['had lost'], o: ['had lost', 'has lost', 'lost had'], nl: 'Hij zei dat hij zijn portemonnee kwijt was.', tag: 'enb-report' },
      { t: 'cloze', s: 'She ___ me that the meeting was canceled.', a: ['told'], o: ['told', 'said', 'spoke'], nl: 'Ze vertelde me dat de vergadering was afgezegd.', x: 'Tell + persoon; say zonder persoon.', tag: 'enb-report' },
      { t: 'cloze', s: 'He denied ___ the window.', a: ['breaking'], o: ['breaking', 'to break', 'that break'], nl: 'Hij ontkende dat hij het raam had gebroken.', tag: 'enb-report' },
      { t: 'cloze', s: 'My grandmother insisted ___ paying for dinner.', a: ['on'], o: ['on', 'to', 'for'], nl: 'Mijn oma stond erop het eten te betalen.', tag: 'enb-report' },
      { t: 'cloze', s: 'They accused him ___ cheating on the test.', a: ['of'], o: ['of', 'for', 'to'], nl: 'Ze beschuldigden hem ervan te spieken bij de toets.', tag: 'enb-report' },
      { t: 'cloze', s: 'The doctor advised me ___ more water.', a: ['to drink'], o: ['to drink', 'drinking', 'drink'], nl: 'De dokter raadde me aan meer water te drinken.', tag: 'enb-report' },
      { t: 'mc', q: 'Welke indirecte vraag is correct?', o: ['Could you tell me where the station is?', 'Could you tell me where is the station?', 'Could you tell me where does the station is?'], tag: 'enb-report' },
      { t: 'mc', q: '"Did you finish the report?" → She asked…', o: ['if I had finished the report.', 'did I finish the report.', 'that I finished the report.'], tag: 'enb-report' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['He apologized for being late.', 'He apologized to be late.', 'He apologized that he late.'], tag: 'enb-report' },
      { t: 'mc', q: '«Volgens de krant» is…', o: ['according to the newspaper', 'following the newspaper', 'after the newspaper'], tag: 'enb-falsefriend' },
      { t: 'tr', nl: 'Hij beloofde me te helpen.', a: ['He promised to help me.', 'He promised me he would help.', 'He promised that he would help me.'], tag: 'enb-report' },
      { t: 'tr', nl: 'Ze vroeg me waar ik woonde.', a: ['She asked me where I lived.', 'She asked where I lived.'], tag: 'enb-report' },
      { t: 'tr', nl: 'Weet je hoe laat het begint?', a: ['Do you know what time it starts?', 'Do you know when it starts?'], tag: 'enb-report' },
      { t: 'order', s: 'She warned us not to touch the wires.', nl: 'Ze waarschuwde ons de draden niet aan te raken.', tag: 'enb-report' },
      { t: 'match', p: [['to deny', 'ontkennen'], ['to urge', 'dringend aansporen'], ['to claim', 'beweren'], ['to reveal', 'onthullen'], ['to confirm', 'bevestigen']], tag: 'enb-report' }
    ],
    reading: {
      t: 'Tech giant denies data leak', type: 'Nieuwsbericht',
      p: [
        ["A major tech company has denied leaking the personal data of millions of users. A spokesperson said the company had 'found no evidence of a breach' and urged customers not to panic.", 'Een groot techbedrijf heeft ontkend de persoonsgegevens van miljoenen gebruikers te hebben gelekt. Een woordvoerder zei dat het bedrijf «geen bewijs van een inbreuk had gevonden» en spoorde klanten aan niet in paniek te raken.'],
        ["However, a former employee claims that managers knew about the problem for months. Speaking off the record, she said she had warned her boss several times.", 'Een voormalige werknemer beweert echter dat managers maandenlang van het probleem wisten. Ze zei onofficieel dat ze haar baas meerdere keren had gewaarschuwd.'],
        ["According to a report published on Tuesday, the data included names, email addresses and, in some cases, credit card numbers. The company refused to confirm these details.", 'Volgens een rapport dat dinsdag is gepubliceerd, ging het om namen, e-mailadressen en in sommige gevallen creditcardnummers. Het bedrijf weigerde deze details te bevestigen.'],
        ["Consumer groups have accused the company of putting profit before privacy. Several politicians have demanded that the CEO appear before Congress next month.", 'Consumentenorganisaties hebben het bedrijf ervan beschuldigd winst boven privacy te stellen. Meerdere politici hebben geëist dat de CEO volgende maand voor het Congres verschijnt.']
      ],
      gl: [['a breach', 'een inbreuk / lek'], ['a former employee', 'een oud-werknemer'], ['to demand', 'eisen']],
      q: [
        { t: 'mc', q: 'What did the spokesperson say?', o: ['They had found no evidence of a breach', 'They had leaked the data', 'Customers should change their passwords'] },
        { t: 'mc', q: 'What does the former employee claim?', o: ['Managers knew about the problem for months', 'She leaked the data herself', 'There was no problem'] },
        { t: 'mc', q: 'What have politicians demanded?', o: ['That the CEO appear before Congress', 'That the company close', 'That users delete their accounts'] }
      ]
    },
    say: [['She insisted on paying.', 'Ze stond erop te betalen.'], ['He denied knowing anything about it.', 'Hij ontkende er iets van te weten.'], ['Could you tell me where the station is?', 'Kunt u me vertellen waar het station is?'], ['They urged us to stay calm.', 'Ze spoorden ons aan kalm te blijven.']],
    task: { nl: 'Vertel in 4–5 zinnen over een ruzie of discussie die je hebt meegemaakt (echt of verzonnen). Gebruik minstens vier verschillende reporting verbs met het juiste patroon (bijvoorbeeld accuse of, deny, insist on, promise to, apologize for).', model: "Last week my roommate accused me of eating her yogurt. I denied touching it, of course. She insisted on checking the trash, and there it was: an empty cup with my handwriting on it. In the end I admitted eating it and promised to buy her a new one. She made me apologize for lying, too." },
    scenario: { nl: 'Je bent journalist en interviewt een Amerikaanse woordvoerder over een schandaal.', role: 'You are Mr. Grant, a careful, slightly evasive spokesperson for a big company in Atlanta. The learner is a journalist asking about a product recall. Avoid direct answers, deny some things, admit others, and refuse to comment on rumors. At the end, ask the learner to summarize what you said, using reporting verbs.', goal: 'Stel scherpe vragen en vat daarna samen wat hij beweerde, ontkende en beloofde.' }
  });

  /* ───────────────────────── B2 · 8 ───────────────────────── */
  U({
    id: 'en-b2-08', level: 'B2', icon: '🧩', title: 'The man whose car was stolen', nl: 'Betrekkelijke bijzinnen en komma’s',
    goals: ['Defining en non-defining clauses onderscheiden (met of zonder komma)', 'Whose, whom, where, when en «which» als commentaar gebruiken', 'Voorzetsels aan het eind of netjes vooraan: the person I spoke to / to whom I spoke'],
    vocab: [
      ['a landlord', 'een huisbaas'], ['a tenant', 'een huurder'], ['a neighborhood', 'een buurt'], ['a lease', 'een huurcontract'], ['a deposit', 'een borg'],
      ['to move in', 'erin trekken'], ['to move out', 'verhuizen (eruit)'], ['rent', 'huur'], ['utilities', 'gas, water en licht'], ['a roommate', 'een huisgenoot'],
      ['spacious', 'ruim'], ['cramped', 'krap / benauwd'], ['run-down', 'vervallen'], ['up-and-coming', 'opkomend (buurt)'], ['a commute', 'woon-werkverkeer'],
      ['whereby', 'waarbij / waardoor'], ['which is why', 'en daarom'], ['to sublet', 'onderverhuren'], ['a walk-up', 'een flat zonder lift'], ['a studio', 'een eenkamerappartement'],
      ['to be within walking distance', 'op loopafstand liggen'], ['to share', 'delen'], ['the suburbs', 'de buitenwijken'], ['downtown', 'het centrum']
    ],
    grammar: [
      { t: 'Defining of non-defining: de komma beslist', es: 'Defining vs. non-defining',
        html: `<p>Een <b>defining</b> bijzin is nodig om te weten wie of wat je bedoelt. <b>Geen komma</b>, en <i>that</i> mag: <i>The apartment <b>that</b> we saw yesterday was too small.</i></p>
<p>Een <b>non-defining</b> bijzin geeft alleen extra informatie. <b>Wel komma's</b>, en <b>nooit that</b>: <i>My landlord<b>,</b> who lives upstairs<b>,</b> is very friendly.</i></p>
<p>Nederlanders zetten vaak komma's waar ze niet horen, of gebruiken <s>, that</s>. Vergelijk: <i>My brother who lives in Texas is a lawyer.</i> (ik heb meer broers) vs. <i>My brother, who lives in Texas, is a lawyer.</i> (ik heb één broer)</p>`,
        table: [['type', 'komma', 'that?', 'voorbeeld'], ['defining', 'nee', 'ja', 'The man that called you is here.'], ['non-defining', 'ja', 'nee', 'Mr. Lee, who called you, is here.']],
        sum: 'The apartment that we saw was small. My landlord, who lives upstairs, is nice.',
        ex: [['The neighborhood where I grew up has changed a lot.', 'De buurt waar ik ben opgegroeid is erg veranderd.'], ['Boston, which I visited in May, is beautiful.', 'Boston, waar ik in mei was, is prachtig.']] },
      { t: 'Whose, whom en which als commentaar', es: 'Relative pronouns',
        html: `<p><b>whose</b> = van wie / waarvan: <i>The tenant <b>whose</b> rent is late…</i> Het werkt ook voor dingen: <i>a company <b>whose</b> products…</i></p>
<p><b>whom</b> is formeel, voor een lijdend voorwerp of na een voorzetsel: <i>the person <b>to whom</b> I spoke</i>. In spreektaal zeg je liever: <i>the person (who) I spoke <b>to</b></i>.</p>
<p><b>which</b> kan commentaar geven op een <b>hele zin</b>: <i>The landlord raised the rent, <b>which</b> was a shock.</i> Hier mag <b>nooit</b> <s>what</s> of <s>that</s>: Nederlanders zeggen vaak <s>…, what was a shock</s> (vanwege «wat»).</p>`,
        table: [['woord', 'gebruik', 'voorbeeld'], ['who', 'personen', 'the woman who lives here'], ['which / that', 'dingen', 'the car that I bought'], ['whose', 'bezit', 'the man whose dog barks'], ['where / when', 'plaats / tijd', 'the year when we met'], [', which', 'commentaar op de zin', 'He left, which surprised me.']],
        ex: [['She got the job, which made her parents very proud.', 'Ze kreeg de baan, wat haar ouders erg trots maakte.'], ['That’s the friend whose house we stayed at.', 'Dat is de vriend in wiens huis we logeerden.']] },
      { t: 'Weglaten en voorzetsels', es: 'Leaving out the pronoun',
        html: `<p>In een defining clause mag je <i>who/which/that</i> <b>weglaten</b> als het het lijdend voorwerp is: <i>The book (that) I'm reading is great.</i> Dat klinkt heel natuurlijk.</p>
<p>Als het het onderwerp is, mag dat niet: <i>The man <b>who</b> called you</i> (niet <s>the man called you</s>).</p>
<p>Een voorzetsel staat in spreektaal aan het <b>eind</b>: <i>the city I live <b>in</b></i>, <i>the people I work <b>with</b></i>. Dat is gewoon correct Engels. In formeel schrijven: <i>the city <b>in which</b> I live</i>.</p>
<p><b>whereby</b> (formeel) = waarbij: <i>a system <b>whereby</b> tenants can pay monthly</i>.</p>`,
        table: [['spreektaal', 'formeel'], ['the house I grew up in', 'the house in which I grew up'], ['the people I work with', 'the people with whom I work'], ['the reason we left', 'the reason for which we left']],
        ex: [["That's the guy I told you about.", 'Dat is die jongen over wie ik je vertelde.'], ['The hotel we stayed at was amazing.', 'Het hotel waar we verbleven was geweldig.']] }
    ],
    dialogue: {
      t: 'Apartment hunting', place: 'Brooklyn, New York 🇺🇸',
      lines: [
        ['Realtor', 'So this is the studio I mentioned on the phone. It’s a walk-up, which keeps the rent down.', 'Dit is dus de studio die ik aan de telefoon noemde. Het is een flat zonder lift, en daardoor blijft de huur laag.'],
        ['Femke', 'It’s a bit cramped. Is the other apartment, the one with the balcony, still available?', 'Het is wat krap. Is het andere appartement, dat met het balkon, nog beschikbaar?'],
        ['Realtor', "Unfortunately, the couple who saw it yesterday signed the lease this morning.", 'Helaas heeft het stel dat het gisteren bekeek vanochtend het huurcontract getekend.'],
        ['Femke', 'Oh, no. What about the neighborhood? Is it safe?', 'O, nee. En de buurt? Is die veilig?'],
        ['Realtor', "Very. It's an up-and-coming area where a lot of young professionals live. The subway, which is two blocks away, takes you downtown in 20 minutes.", 'Heel veilig. Het is een opkomende buurt waar veel jonge professionals wonen. De metro, die twee blokken verderop is, brengt je in 20 minuten naar het centrum.'],
        ['Femke', 'And the landlord? I had one whose idea of fixing things was ignoring my emails.', 'En de huisbaas? Ik had er ooit een wiens idee van repareren was mijn mails negeren.'],
        ['Realtor', 'Mrs. Kim, who owns the building, lives on the first floor. She’s very hands-on.', 'Mevrouw Kim, die eigenaar is van het gebouw, woont op de begane grond. Ze pakt dingen zelf aan.'],
        ['Femke', 'That’s exactly the kind of landlord I’m looking for. Are utilities included?', 'Dat is precies het soort huisbaas dat ik zoek. Zijn gas, water en licht inbegrepen?'],
        ['Realtor', "Water is. Gas and electricity aren't, which is pretty normal here.", 'Water wel. Gas en stroom niet, wat hier vrij normaal is.']
      ],
      q: [
        { t: 'mc', q: 'Why is the rent low?', o: ['Because it’s a walk-up', 'Because it’s far from the subway', 'Because it has no kitchen'] },
        { t: 'mc', q: 'What happened to the apartment with the balcony?', o: ['A couple signed the lease', 'It was demolished', 'The landlord moved in'] },
        { t: 'mc', q: 'Where does Mrs. Kim live?', o: ['On the first floor of the building', 'In the suburbs', 'In another city'] }
      ]
    },
    culture: { t: 'Huren in Amerika: first floor en deposit', html: `<p>In de VS is de <b>first floor</b> de begane grond! De Nederlandse eerste verdieping is daar de <i>second floor</i>. In Groot-Brittannië is het zoals bij ons: <i>ground floor</i>, <i>first floor</i>.</p>
<p>Bij een huurwoning betaal je meestal <i>first month's rent</i> plus <i>a security deposit</i>. Een <b>realtor</b> (🇬🇧 <i>estate agent</i>) laat je de woning zien, en een <b>walk-up</b> is een gebouw zonder lift.</p>
<p>🏙️ In New York vind je ook <i>a railroad apartment</i>: kamers achter elkaar als treinwagons, zonder gang.</p>` },
    ex: [
      { t: 'cloze', s: 'The woman ___ lives next door is a doctor.', a: ['who'], o: ['who', 'which', 'whose'], nl: 'De vrouw die naast ons woont is dokter.', tag: 'enb-relative' },
      { t: 'cloze', s: "That's the man ___ dog bit me.", a: ['whose'], o: ['whose', "who's", 'which'], nl: 'Dat is de man wiens hond me heeft gebeten.', tag: 'enb-relative' },
      { t: 'cloze', s: 'He passed all his exams, ___ surprised everyone.', a: ['which'], o: ['which', 'what', 'that'], nl: 'Hij slaagde voor al zijn examens, wat iedereen verbaasde.', x: 'Commentaar op een hele zin: , which (nooit what).', tag: 'enb-relative' },
      { t: 'cloze', s: 'I still remember the day ___ we met.', a: ['when'], o: ['when', 'where', 'which'], nl: 'Ik weet de dag nog dat we elkaar ontmoetten.', tag: 'enb-relative' },
      { t: 'cloze', s: 'This is the café ___ I wrote my first book.', a: ['where'], o: ['where', 'which', 'that'], nl: 'Dit is het café waar ik mijn eerste boek schreef.', tag: 'enb-relative' },
      { t: 'cloze', s: 'The person to ___ I spoke was very helpful.', a: ['whom'], o: ['whom', 'who', 'which'], nl: 'De persoon met wie ik sprak was erg behulpzaam.', tag: 'enb-relative' },
      { t: 'mc', q: 'Welke zin heeft de komma’s goed?', o: ['My mother, who is 70, still works.', 'My mother who is 70, still works.', 'My mother, that is 70, still works.'], tag: 'enb-relative' },
      { t: 'mc', q: 'In welke zin mag je «that» weglaten?', o: ['The movie that we watched was boring.', 'The man that lives here is rude.', 'The dog that bit me ran away.'], x: 'Weglaten kan alleen als het het lijdend voorwerp is.', tag: 'enb-relative' },
      { t: 'mc', q: '«My brother who lives in Texas is a lawyer.» Wat weet je?', o: ['Ik heb meer dan één broer.', 'Ik heb precies één broer.', 'Mijn broer verhuist naar Texas.'], tag: 'enb-relative' },
      { t: 'mc', q: 'Wat is de begane grond in Amerikaans Engels?', o: ['the first floor', 'the ground floor', 'the zero floor'], tag: 'enb-ukus' },
      { t: 'mc', q: 'Wat klinkt het meest natuurlijk in een gesprek?', o: ["That's the city I live in.", "That's the city in which I live in.", "That's the city where I live in."], tag: 'enb-register' },
      { t: 'tr', nl: 'Het boek dat ik lees is erg spannend.', a: ["The book I'm reading is very exciting.", "The book that I'm reading is very exciting.", "The book I'm reading is really exciting.", 'The book which I am reading is very exciting.'], tag: 'enb-relative' },
      { t: 'tr', nl: 'De huisbaas verhoogde de huur, wat een schok was.', a: ['The landlord raised the rent, which was a shock.', 'The landlord increased the rent, which was a shock.'], tag: 'enb-relative' },
      { t: 'order', s: "That's the friend I told you about.", nl: 'Dat is de vriend over wie ik je vertelde.', tag: 'enb-relative' },
      { t: 'match', p: [['a landlord', 'een huisbaas'], ['a tenant', 'een huurder'], ['a lease', 'een huurcontract'], ['a deposit', 'een borg'], ['cramped', 'krap'], ['run-down', 'vervallen']], tag: 'enb-colloc' }
    ],
    reading: {
      t: 'The roommate from hell', type: 'Forumbericht',
      p: [
        ["I need advice. My roommate, who I've known since college, has turned into a nightmare. He's never home during the day, which is fine, but he comes back at 3 a.m. and starts cooking.", 'Ik heb advies nodig. Mijn huisgenoot, die ik sinds de universiteit ken, is een nachtmerrie geworden. Overdag is hij nooit thuis, wat prima is, maar hij komt om drie uur ’s nachts thuis en begint te koken.'],
        ["The apartment we share is tiny, and the kitchen is right next to my bedroom. The smell of fried onions is not something I want to wake up to.", 'Het appartement dat we delen is piepklein, en de keuken zit direct naast mijn slaapkamer. De geur van gebakken uien is niet iets waar ik wakker van wil worden.'],
        ["I've talked to him twice. The first time he apologized; the second time he said I was 'too sensitive', which made me even angrier.", 'Ik heb twee keer met hem gepraat. De eerste keer bood hij zijn excuses aan; de tweede keer zei hij dat ik «te gevoelig» was, wat me nog bozer maakte.'],
        ["Our lease, which runs until June, is in both our names. Is there a way I can move out without losing my deposit? Anyone whose roommate did something similar?", 'Ons huurcontract, dat tot juni loopt, staat op onze beide namen. Kan ik eruit zonder mijn borg kwijt te raken? Iemand wiens huisgenoot iets vergelijkbaars deed?']
      ],
      gl: [['a nightmare', 'een nachtmerrie'], ['fried onions', 'gebakken uien'], ['to run until', 'lopen tot']],
      q: [
        { t: 'mc', q: 'What is the problem with the roommate?', o: ['He cooks at 3 a.m.', 'He never pays rent', 'He has a dog'] },
        { t: 'mc', q: 'What made the writer even angrier?', o: ['Being called too sensitive', 'The smell of coffee', 'His apology'] },
        { t: 'mc', q: 'What does the writer want to know?', o: ['How to move out without losing the deposit', 'How to cook onions', 'How to find a new roommate'] }
      ]
    },
    say: [['The apartment that we saw was too small.', 'Het appartement dat we zagen was te klein.'], ['My landlord, who lives upstairs, is very friendly.', 'Mijn huisbaas, die boven woont, is erg aardig.'], ['He raised the rent, which was a shock.', 'Hij verhoogde de huur, wat een schok was.'], ["That's the guy I told you about.", 'Dat is die jongen over wie ik je vertelde.']],
    task: { nl: 'Beschrijf in 4–5 zinnen de buurt of het huis waar je woont of bent opgegroeid. Gebruik minstens één non-defining clause met komma’s, één zin met whose en één «which» als commentaar.', model: "I grew up in a small town near Arnhem, where everybody knew everybody. Our house, which was built in the 1930s, had a huge garden. Our neighbor, whose son was my best friend, kept chickens. Every morning the rooster woke us up at five, which my parents absolutely hated." },
    scenario: { nl: 'Je zoekt een appartement in New York en praat met een makelaar.', role: 'You are Danny, a fast-talking but honest realtor in Brooklyn. Show the learner two or three apartments, describe them with relative clauses (the one that…, which means…, where…), answer questions about rent, utilities, the landlord and the neighborhood.', goal: 'Vergelijk de appartementen en vraag door over huur, buurt en huisbaas.' }
  });

  /* ───────────────────────── B2 · 9 ───────────────────────── */
  U({
    id: 'en-b2-09', level: 'B2', icon: '⏳', title: 'By this time next year', nl: 'De toekomst: precies en genuanceerd',
    goals: ['Future perfect en future continuous gebruiken', 'Plannen en verwachtingen nuanceren: be about to, be due to, be bound to', 'It’s (high) time + past simple en other future structures'],
    vocab: [
      ['a milestone', 'een mijlpaal'], ['to be on track', 'op koers liggen'], ['a long-term goal', 'een langetermijndoel'], ['to set a goal', 'een doel stellen'], ['to achieve', 'bereiken'],
      ['to be due to', 'gepland staan om / verwacht worden'], ['to be about to', 'op het punt staan om'], ['to be bound to', 'zeker zullen / onvermijdelijk'], ['to be likely to', 'waarschijnlijk zullen'], ['in the long run', 'op de lange termijn'],
      ['sooner or later', 'vroeg of laat'], ['by then', 'tegen die tijd'], ['a forecast', 'een voorspelling / prognose'], ['to look ahead', 'vooruitkijken'], ['to retire', 'met pensioen gaan'],
      ['a five-year plan', 'een vijfjarenplan'], ['for the foreseeable future', 'voorlopig'], ['to make it', 'het halen / slagen'], ['a deadline looms', 'een deadline komt dichterbij'], ['to wind down', 'afbouwen / tot rust komen'],
      ['to be on the verge of', 'op het randje staan van'], ['the odds are', 'de kans is groot'], ['to plan ahead', 'vooruit plannen'], ['to have something in mind', 'iets in gedachten hebben']
    ],
    grammar: [
      { t: 'Future perfect: will have done', es: 'Future perfect',
        html: `<p>Met de <b>future perfect</b> kijk je vanuit een punt in de toekomst terug: tegen dan is het al gebeurd. Vorm: <b>will have</b> + voltooid deelwoord.</p>
<p><i>By 2030, I <b>will have paid off</b> my mortgage.</i> (Tegen 2030 heb ik mijn hypotheek afbetaald.)</p>
<p>Signaalwoorden: <b>by</b> (uiterlijk, tegen), <b>by the time</b>, <b>by then</b>. Na <i>by the time</i> komt de <b>present simple</b>: <i>By the time you <b>arrive</b>, we'll have eaten.</i> (niet <s>will arrive</s>)</p>
<p>Ook voor duur: <i>In June, I <b>will have been working</b> here for ten years.</i></p>`,
        table: [['Nederlands', 'Engels'], ['Tegen vrijdag ben ik klaar.', "I'll have finished by Friday."], ['Als je aankomt, zijn we al weg.', "By the time you arrive, we'll have left."], ['In juni werk ik hier tien jaar.', "In June, I'll have been working here for ten years."]],
        sum: "By Friday, I'll have finished. By the time you arrive, we'll have left.",
        ex: [["By the end of the year, we'll have opened three new stores.", 'Tegen het eind van het jaar hebben we drie nieuwe winkels geopend.'], ["Don't call at six. I won't have gotten home yet.", 'Bel niet om zes uur. Dan ben ik nog niet thuis.']] },
      { t: 'Future continuous: will be doing', es: 'Future continuous',
        html: `<p>De <b>future continuous</b> beschrijft wat er op een moment in de toekomst <b>aan de gang</b> is: <i>This time tomorrow, I<b>'ll be lying</b> on a beach.</i></p>
<p>Het is ook een <b>beleefde</b> manier om naar plannen te vragen, zonder druk: <i><b>Will you be using</b> the car tonight?</i> klinkt vriendelijker dan <i>Will you use the car?</i> (dat klinkt als een verzoek).</p>
<p>En voor dingen die «vanzelf» gebeuren volgens planning: <i>I<b>'ll be seeing</b> Tom at the meeting anyway, so I can give it to him.</i></p>`,
        table: [['vorm', 'gebruik', 'voorbeeld'], ['will be + -ing', 'bezig op een moment', "At 8 p.m. I'll be having dinner."], ['will you be + -ing?', 'beleefd naar plannen vragen', 'Will you be joining us?'], ['will be + -ing', 'gebeurt sowieso', "I'll be passing the store anyway."]],
        ex: [["Don't call at nine. I'll be putting the kids to bed.", 'Bel niet om negen uur. Dan breng ik de kinderen naar bed.'], ['Will you be needing anything else?', 'Heeft u verder nog iets nodig?']] },
      { t: 'About to, due to, bound to en it’s time', es: 'Other future forms',
        html: `<p><b>be about to</b> = op het punt staan: <i>Hurry, the train <b>is about to</b> leave!</i></p>
<p><b>be due to</b> = gepland/verwacht: <i>The plane <b>is due to</b> land at 6:40.</i> (Niet verwarren met <i>due to</i> = vanwege.)</p>
<p><b>be bound to</b> = het gebeurt zeker: <i>If you keep practicing, you<b>'re bound to</b> improve.</i> <b>be likely to</b> = waarschijnlijk.</p>
<p><b>It's (high) time</b> + <b>past simple</b>: het wordt (hoog) tijd: <i>It's high time we <b>left</b>.</i> De verleden tijd klinkt vreemd, maar betekent hier: het had al moeten gebeuren. Of: <i>It's time <b>to</b> leave.</i></p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['be about to', 'op het punt staan', "I'm about to leave."], ['be due to', 'gepland staan', 'The baby is due in May.'], ['be bound to', 'zeker zullen', "It's bound to rain."], ["it's high time + past", 'hoog tijd', "It's high time you got a job."]],
        ex: [["It's bound to happen sooner or later.", 'Vroeg of laat gebeurt het zeker.'], ["It's high time we talked about this.", 'Het wordt hoog tijd dat we hierover praten.']] }
    ],
    dialogue: {
      t: 'The five-year plan', place: 'Seattle 🇺🇸',
      lines: [
        ['Emma', 'So, where do you see yourself in five years?', 'En, waar zie je jezelf over vijf jaar?'],
        ['Thijs', "Honestly? By then I'll have finished my MBA, and hopefully I'll be running my own team.", 'Eerlijk? Tegen die tijd heb ik mijn MBA afgerond, en hopelijk leid ik dan mijn eigen team.'],
        ['Emma', "Ambitious! You're bound to make it if you keep working like this.", 'Ambitieus! Je haalt het zeker als je zo blijft werken.'],
        ['Thijs', "Thanks. What about you? Weren't you about to start your own business?", 'Bedankt. En jij? Stond jij niet op het punt een eigen bedrijf te beginnen?'],
        ['Emma', "I was. But my first child is due in March, so I've put it off for the foreseeable future.", 'Klopt. Maar mijn eerste kind wordt in maart verwacht, dus ik heb het voorlopig uitgesteld.'],
        ['Thijs', "Congratulations! This time next year you'll be changing diapers instead of writing business plans.", 'Gefeliciteerd! Over een jaar verschoon je luiers in plaats van ondernemingsplannen te schrijven.'],
        ['Emma', "Ha! And in the long run, who knows? Maybe I'll have started two companies by the time I'm forty.", 'Ha! En op de lange termijn, wie weet? Misschien heb ik twee bedrijven opgericht tegen de tijd dat ik veertig ben.'],
        ['Thijs', "I wouldn't bet against it. Anyway, it's high time we got back to work.", 'Daar zou ik niet tegen wedden. Hoe dan ook, het wordt hoog tijd dat we weer aan het werk gaan.']
      ],
      q: [
        { t: 'mc', q: 'What will Thijs have done in five years?', o: ['Finished his MBA', 'Started a company', 'Moved to Europe'] },
        { t: 'mc', q: 'Why has Emma put off her business?', o: ['Her first child is due in March', 'She lost her job', 'She is going back to school'] },
        { t: 'mc', q: 'What does «It’s high time we got back to work» mean?', o: ['They should go back to work now', 'They went back to work yesterday', 'They will never work again'] }
      ]
    },
    culture: { t: '«Where do you see yourself in five years?»', html: `<p>Dit is een klassieke vraag in Amerikaanse sollicitatiegesprekken. Men verwacht een positief, ambitieus antwoord, maar niet arrogant. <i>I'd like to have grown into a leadership role</i> werkt beter dan <i>I want your job.</i></p>
<p>Nederlanders zijn vaak bescheidener of juist heel direct. In de VS wordt <b>zelfpromotie</b> normaal gevonden: je mag laten zien wat je hebt bereikt.</p>
<p>🇬🇧 Een Brit antwoordt vaker met wat zelfspot: <i>Hopefully still employed!</i> In de VS kan dat verkeerd vallen.</p>` },
    ex: [
      { t: 'cloze', s: 'By next June, I ___ my degree.', a: ['will have finished'], o: ['will have finished', 'will finish', 'have finished'], nl: 'Tegen volgend jaar juni heb ik mijn diploma gehaald.', tag: 'enb-future' },
      { t: 'cloze', s: 'By the time you ___, the movie will have started.', a: ['arrive'], o: ['arrive', 'will arrive', 'arrived'], nl: 'Als je aankomt, is de film al begonnen.', x: 'Na by the time de present simple.', tag: 'enb-future' },
      { t: 'cloze', s: 'This time tomorrow, I ___ over the Atlantic.', a: ['will be flying'], o: ['will be flying', 'will have flown', 'fly'], nl: 'Morgen om deze tijd vlieg ik boven de Atlantische Oceaan.', tag: 'enb-future' },
      { t: 'cloze', s: '___ you be using the car tonight? I need to go to the store.', a: ['Will'], o: ['Will', 'Are', 'Do'], nl: 'Gebruik je de auto vanavond? Ik moet naar de winkel.', tag: 'enb-future' },
      { t: 'cloze', s: 'Quick, the show is ___ to start!', a: ['about'], o: ['about', 'due', 'bound'], nl: 'Snel, de show begint zo!', tag: 'enb-future' },
      { t: 'cloze', s: 'The train is ___ to arrive at 9:15.', a: ['due'], o: ['due', 'about', 'likely to be'], nl: 'De trein wordt om 9.15 uur verwacht.', tag: 'enb-future' },
      { t: 'cloze', s: "It's high time you ___ a decision.", a: ['made'], o: ['made', 'make', 'will make'], nl: 'Het wordt hoog tijd dat je een besluit neemt.', tag: 'enb-future' },
      { t: 'mc', q: '«If you keep practicing, you’re bound to improve» betekent…', o: ['Je gaat zeker vooruit.', 'Je moet vooruitgaan.', 'Je gaat misschien vooruit.'], tag: 'enb-future' },
      { t: 'mc', q: 'Wat klinkt het beleefdst als je naar iemands plannen vraagt?', o: ['Will you be joining us for dinner?', 'Will you join us for dinner?', 'Do you join us for dinner?'], tag: 'enb-register' },
      { t: 'mc', q: '«Voorlopig» (niet binnenkort veranderen) is…', o: ['for the foreseeable future', 'for the meantime future', 'provisionally forever'], tag: 'enb-idiom' },
      { t: 'mc', q: '«The flight was delayed due to fog.» Wat betekent due to hier?', o: ['vanwege', 'gepland om', 'op het punt om'], tag: 'enb-future' },
      { t: 'tr', nl: 'Tegen 2030 ben ik met pensioen.', a: ["By 2030, I'll have retired.", 'By 2030 I will have retired.', "I'll have retired by 2030."], tag: 'enb-future' },
      { t: 'tr', nl: 'Ik sta op het punt te vertrekken.', a: ["I'm about to leave.", 'I am about to leave.'], tag: 'enb-future' },
      { t: 'order', s: "By the time we get there, they'll have left.", nl: 'Tegen de tijd dat we er zijn, zijn ze al weg.', tag: 'enb-future' },
      { t: 'match', p: [['a milestone', 'een mijlpaal'], ['to be on track', 'op koers liggen'], ['in the long run', 'op de lange termijn'], ['sooner or later', 'vroeg of laat'], ['a forecast', 'een prognose']], tag: 'enb-colloc' }
    ],
    reading: {
      t: 'Letter to my future self', type: 'Persoonlijke brief',
      p: [
        ["Dear future me, by the time you read this, you'll have turned forty. I hope you'll have stopped worrying about what other people think.", 'Lieve toekomstige ik, als je dit leest, ben je veertig geworden. Ik hoop dat je dan gestopt bent met je zorgen maken over wat anderen denken.'],
        ["Right now I'm about to move to a new city for a job I'm not sure about. In ten years, you'll know whether it was the right decision. I'm bound to make mistakes, but I hope they were good ones.", 'Op dit moment sta ik op het punt naar een nieuwe stad te verhuizen voor een baan waar ik niet zeker van ben. Over tien jaar weet jij of het de juiste beslissing was. Ik ga zeker fouten maken, maar ik hoop dat het goede fouten waren.'],
        ["I imagine that on a Sunday morning you'll be drinking coffee on a balcony, reading a real newspaper. Please tell me you'll have learned to cook something other than pasta.", 'Ik stel me voor dat je op een zondagochtend koffie drinkt op een balkon, met een echte krant. Zeg me alsjeblieft dat je dan iets anders dan pasta hebt leren koken.'],
        ["Finally: it's high time you called Grandma more often. She won't be around forever. Love, your younger self.", 'Tot slot: het wordt hoog tijd dat je oma vaker belt. Ze is er niet voor altijd. Liefs, je jongere zelf.']
      ],
      gl: [['to turn forty', 'veertig worden'], ['to be around', 'er zijn (in leven zijn)'], ['to imagine', 'zich voorstellen']],
      q: [
        { t: 'mc', q: 'How old will the writer be when they read the letter?', o: ['Forty', 'Thirty', 'Fifty'] },
        { t: 'mc', q: 'What is the writer about to do?', o: ['Move to a new city', 'Get married', 'Retire'] },
        { t: 'mc', q: 'What does the writer say it’s high time to do?', o: ['Call Grandma more often', 'Learn to cook pasta', 'Buy a newspaper'] }
      ]
    },
    say: [["By then, I'll have finished my degree.", 'Tegen die tijd heb ik mijn diploma gehaald.'], ["This time next week, I'll be lying on a beach.", 'Volgende week om deze tijd lig ik op het strand.'], ["You're bound to make it.", 'Je haalt het zeker.'], ["It's high time we left.", 'Het wordt hoog tijd dat we gaan.']],
    task: { nl: 'Schrijf 4–5 zinnen over waar je over vijf of tien jaar wilt zijn. Gebruik de future perfect (will have…), de future continuous (will be …-ing) en minstens één van about to, due to, bound to of it’s high time.', model: "In five years, I'll have finished renovating our house, and I'll be working fewer hours. By then, my daughter will have started high school. I'm about to start a course in project management, so I'm bound to have a better job too. And it's high time I learned to play the guitar properly." },
    scenario: { nl: 'Je hebt een loopbaangesprek met een Amerikaanse mentor.', role: 'You are Patricia, an experienced American career mentor in Seattle. Ask the learner about their goals for the next five and ten years: what they will have achieved, what they will be doing day to day, and what is due to happen soon. Push them gently to be specific and ambitious.', goal: 'Vertel over je doelen met will have done en will be doing.' }
  });

  /* ───────────────────────── B2 · 10 ───────────────────────── */
  U({
    id: 'en-b2-10', level: 'B2', icon: '🧭', title: 'However, despite, whereas', nl: 'Verbindingswoorden en formeel schrijven',
    goals: ['Although, despite, however en whereas correct gebruiken (met de juiste interpunctie)', 'Een formele mail of korte tekst logisch opbouwen', 'Formeel en informeel register onderscheiden'],
    vocab: [
      ['although', 'hoewel'], ['despite', 'ondanks'], ['in spite of', 'ondanks'], ['however', 'echter'], ['whereas', 'terwijl (tegenstelling)'],
      ['nevertheless', 'toch / desondanks'], ['therefore', 'daarom'], ['as a result', 'als gevolg daarvan'], ['furthermore', 'bovendien'], ['in addition', 'daarnaast'],
      ['on the other hand', 'aan de andere kant'], ['on the contrary', 'integendeel'], ['as long as', 'zolang'], ['unless', 'tenzij'], ['provided that', 'mits'],
      ['in order to', 'om te'], ['so as not to', 'om niet te'], ['owing to', 'vanwege'], ['regarding', 'met betrekking tot'], ['to enclose / attach', 'bijvoegen'],
      ['I am writing to…', 'Ik schrijf u om…'], ['at your earliest convenience', 'zo spoedig mogelijk'], ['to look forward to hearing from you', 'uw reactie tegemoetzien'], ['to whom it may concern', 'aan wie het aangaat']
    ],
    grammar: [
      { t: 'Although, despite, however: zelfde idee, andere grammatica', es: 'Contrast',
        html: `<p>Ze drukken allemaal een tegenstelling uit, maar de zinsbouw verschilt:</p>
<p><b>although / even though</b> + een hele zin: <i><b>Although</b> it was raining, we went out.</i></p>
<p><b>despite / in spite of</b> + zelfstandig naamwoord of <b>-ing</b>: <i><b>Despite</b> the rain, we went out.</i> <i><b>Despite</b> being tired, she kept going.</i> Fout: <s>despite of the rain</s> en <s>despite it was raining</s>. Wil je toch een zin: <i>despite <b>the fact that</b> it was raining</i>.</p>
<p><b>however</b> verbindt twee <b>losse zinnen</b>. Zet er een punt of puntkomma voor en een komma achter: <i>It was raining<b>. However,</b> we went out.</i> Fout: <s>It was raining, however we went out.</s></p>`,
        table: [['woord', 'gevolgd door', 'voorbeeld'], ['although', 'een zin', 'Although she was ill, she came.'], ['despite / in spite of', 'naamwoord of -ing', 'Despite her illness, she came.'], ['however', 'nieuwe zin (. However,)', 'She was ill. However, she came.'], ['whereas', 'contrast tussen twee feiten', 'I love tea, whereas he hates it.']],
        sum: 'Although it rained, we went out. Despite the rain, we went out. It rained. However, we went out.',
        ex: [['Despite having little experience, he got the job.', 'Ondanks dat hij weinig ervaring had, kreeg hij de baan.'], ['The plan is risky. Nevertheless, we should try.', 'Het plan is riskant. Toch moeten we het proberen.']] },
      { t: 'Doel en voorwaarde: in order to, unless, provided that', es: 'Purpose & condition',
        html: `<p>Doel: <b>to</b> of formeler <b>in order to</b>: <i>We moved <b>in order to</b> be closer to family.</i> Negatief: <b>so as not to</b> of <b>so that … won't</b>: <i>I left early <b>so as not to</b> miss the train.</i> Nederlanders zeggen vaak <s>for to</s> of <s>for not missing</s>.</p>
<p>Voorwaarde: <b>unless</b> = tenzij (= if not): <i>We'll go <b>unless</b> it rains.</i> Geen will na unless: <s>unless it will rain</s>.</p>
<p><b>provided (that) / as long as</b> = mits / zolang: <i>You can borrow it <b>as long as</b> you bring it back.</i></p>`,
        table: [['functie', 'woorden', 'voorbeeld'], ['doel', 'to, in order to, so that', 'I called to apologize.'], ['negatief doel', 'so as not to, so that … not', 'I whispered so as not to wake her.'], ['voorwaarde', 'unless, provided that, as long as', "I'll come unless I'm sick."]],
        ex: [["You won't get in unless you have a ticket.", 'Je komt er niet in tenzij je een kaartje hebt.'], ['You can stay, provided that you help with the dishes.', 'Je mag blijven, mits je helpt met de afwas.']] },
      { t: 'Register: van appje tot formele mail', es: 'Formal vs. informal',
        html: `<p>Nederlands zakelijk taalgebruik is vrij direct en informeel. Engels heeft een duidelijker verschil tussen registers.</p>
<p><b>Formeel</b>: <i>I am writing to inquire about…</i>, <i>Could you please…</i>, <i>I would be grateful if…</i>, <i>Please find attached…</i>, <i>I look forward to hearing from you.</i> Geen samentrekkingen (<i>I am</i>, niet <i>I'm</i>).</p>
<p><b>Informeel</b>: <i>Just a quick note to…</i>, <i>Can you…?</i>, <i>Here's the file</i>, <i>Talk soon!</i></p>
<p>Valkuil: <s>Hereby I send you</s> (hierbij stuur ik u) is Dunglish. Zeg: <i>Please find attached…</i> of <i>I've attached…</i></p>`,
        table: [['informeel', 'formeel'], ['I want to ask about…', 'I am writing to inquire about…'], ['Can you send me…?', 'Could you please send me…?'], ["Here's the file.", 'Please find attached the file.'], ['Hope to hear from you!', 'I look forward to hearing from you.'], ['Sorry for…', 'I apologize for… / We regret…']],
        ex: [['I would be grateful if you could reply by Friday.', 'Ik zou het op prijs stellen als u voor vrijdag kunt reageren.'], ['Please find attached my résumé.', 'Bijgevoegd vindt u mijn cv.']] }
    ],
    dialogue: {
      t: 'Help with a complaint letter', place: 'Philadelphia 🇺🇸',
      lines: [
        ['Pieter', "Can you look at my complaint to the airline? I started with «Hereby I want to complain».", 'Kun je naar mijn klacht aan de luchtvaartmaatschappij kijken? Ik begon met «Hereby I want to complain».'],
        ['Grace', "Let's change that. Try «I am writing to complain about my flight on March 3rd.»", 'Laten we dat veranderen. Probeer «I am writing to complain about my flight on March 3rd.»'],
        ['Pieter', 'Okay. Then: «Despite I booked early, my seat was given away.»', 'Oké. Dan: «Despite I booked early, my seat was given away.»'],
        ['Grace', "Close! Either «Although I booked early» or «Despite booking early».", 'Bijna! Of «Although I booked early», of «Despite booking early».'],
        ['Pieter', "Got it. And I want to say they were rude, however I don't want to sound angry.", 'Duidelijk. En ik wil zeggen dat ze onbeleefd waren, maar ik wil niet boos klinken.'],
        ['Grace', "Then write: «The staff were unhelpful. However, I understand they were under pressure.» That sounds firm but fair.", 'Schrijf dan: «The staff were unhelpful. However, I understand they were under pressure.» Dat klinkt stevig maar redelijk.'],
        ['Pieter', 'Nice. And at the end, «I hope to hear from you soon»?', 'Mooi. En aan het eind «I hope to hear from you soon»?'],
        ['Grace', "Go with «I look forward to hearing from you at your earliest convenience.» Very formal, very polite, very effective.", 'Kies «I look forward to hearing from you at your earliest convenience.» Heel formeel, heel beleefd, heel effectief.']
      ],
      q: [
        { t: 'mc', q: 'What is wrong with «Despite I booked early»?', o: ['Despite needs a noun or -ing form', 'Booked is the wrong tense', 'Early should be earlier'] },
        { t: 'mc', q: 'How should Pieter use «however»?', o: ['At the start of a new sentence, followed by a comma', 'In the middle of a sentence after a comma', 'Only at the end of the letter'] },
        { t: 'mc', q: 'What does Grace suggest as an ending?', o: ['I look forward to hearing from you at your earliest convenience.', 'Hope to hear from you soon!', 'Hereby I end my letter.'] }
      ]
    },
    culture: { t: 'Klagen op zijn Amerikaans', html: `<p>Amerikaanse bedrijven zijn erg gericht op <b>customer service</b>. Een beleefde maar duidelijke klacht levert vaak iets op: <i>a refund</i> (geld terug), <i>a voucher</i> of <i>a credit</i>.</p>
<p>De toon is belangrijk. Te direct («This is unacceptable and you must pay») werkt minder goed dan <i>I would appreciate it if you could look into this.</i></p>
<p>🇬🇧 Britse brieven eindigen met <i>Yours sincerely</i> (als je de naam weet) of <i>Yours faithfully</i> (als je die niet weet). In de VS schrijf je bijna altijd gewoon <i>Sincerely</i>.</p>` },
    ex: [
      { t: 'cloze', s: '___ it was very cold, we went for a swim.', a: ['Although'], o: ['Although', 'Despite', 'However'], nl: 'Hoewel het heel koud was, gingen we zwemmen.', tag: 'enb-linking' },
      { t: 'cloze', s: '___ the cold, we went for a swim.', a: ['Despite'], o: ['Despite', 'Although', 'Despite of'], nl: 'Ondanks de kou gingen we zwemmen.', tag: 'enb-linking' },
      { t: 'cloze', s: 'Despite ___ tired, she finished the marathon.', a: ['being'], o: ['being', 'she was', 'to be'], nl: 'Ondanks dat ze moe was, liep ze de marathon uit.', tag: 'enb-linking' },
      { t: 'cloze', s: 'The hotel was expensive. ___, the service was excellent.', a: ['However'], o: ['However', 'Although', 'Despite'], nl: 'Het hotel was duur. De service was echter uitstekend.', tag: 'enb-linking' },
      { t: 'cloze', s: 'My sister loves horror movies, ___ I can’t stand them.', a: ['whereas'], o: ['whereas', 'despite', 'however'], nl: 'Mijn zus is dol op horrorfilms, terwijl ik ze niet kan uitstaan.', tag: 'enb-linking' },
      { t: 'cloze', s: "We'll have the party outside ___ it rains.", a: ['unless'], o: ['unless', 'if', 'provided'], nl: 'We houden het feest buiten, tenzij het regent.', tag: 'enb-linking' },
      { t: 'cloze', s: 'I took a taxi so as not ___ late.', a: ['to be'], o: ['to be', 'being', 'for being'], nl: 'Ik nam een taxi om niet te laat te komen.', tag: 'enb-linking' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['It was late. However, we kept working.', 'It was late, however we kept working.', 'It was late however, we kept working.'], tag: 'enb-linking' },
      { t: 'mc', q: '«Hierbij stuur ik u mijn cv» in een formele mail…', o: ['Please find attached my résumé.', 'Hereby I send you my CV.', 'Here is my CV, hereby.'], tag: 'enb-register' },
      { t: 'mc', q: 'Wat is het meest formeel?', o: ['I would be grateful if you could reply.', 'Can you get back to me?', 'Let me know, okay?'], tag: 'enb-register' },
      { t: 'mc', q: 'Welke zin is correct?', o: ["I'll call you unless I'm too busy.", "I'll call you unless I will be too busy.", "I'll call you unless I'm not busy."], tag: 'enb-linking' },
      { t: 'tr', nl: 'Ondanks het slechte weer was het een geweldige dag.', a: ['Despite the bad weather, it was a great day.', 'In spite of the bad weather, it was a great day.', 'Despite the bad weather, it was an amazing day.'], tag: 'enb-linking' },
      { t: 'tr', nl: 'Ik kijk uit naar uw reactie.', a: ['I look forward to hearing from you.', 'I look forward to your reply.'], tag: 'enb-register' },
      { t: 'order', s: 'Although the job was hard, she never complained.', nl: 'Hoewel het werk zwaar was, klaagde ze nooit.', tag: 'enb-linking' },
      { t: 'match', p: [['although', 'hoewel'], ['despite', 'ondanks'], ['whereas', 'terwijl'], ['unless', 'tenzij'], ['provided that', 'mits'], ['therefore', 'daarom']], tag: 'enb-linking' }
    ],
    reading: {
      t: 'A formal complaint', type: 'Formele e-mail',
      p: [
        ["Dear Sir or Madam, I am writing to complain about the service I received on flight AL 482 from Philadelphia to Amsterdam on March 3rd.", 'Geachte heer, mevrouw, ik schrijf u om te klagen over de service die ik heb gekregen op vlucht AL 482 van Philadelphia naar Amsterdam op 3 maart.'],
        ["Despite having booked and paid for my seat three months in advance, I was informed at the gate that the flight was overbooked. As a result, I was moved to a flight eleven hours later.", 'Hoewel ik mijn stoel drie maanden van tevoren had geboekt en betaald, kreeg ik bij de gate te horen dat de vlucht overboekt was. Als gevolg daarvan werd ik omgeboekt naar een vlucht elf uur later.'],
        ["Although I understand that overbooking is common, I was not offered a meal voucher or a hotel room. Furthermore, the staff were unhelpful when I asked about compensation.", 'Hoewel ik begrijp dat overboeken gebruikelijk is, kreeg ik geen maaltijdbon of hotelkamer aangeboden. Bovendien was het personeel niet behulpzaam toen ik naar een vergoeding vroeg.'],
        ["I would therefore be grateful if you could refund the cost of my ticket. Please find attached my booking confirmation. I look forward to hearing from you at your earliest convenience. Sincerely, Pieter de Vries", 'Ik zou het daarom op prijs stellen als u de kosten van mijn ticket kunt terugbetalen. Bijgevoegd vindt u mijn boekingsbevestiging. Ik zie uw reactie graag zo spoedig mogelijk tegemoet. Met vriendelijke groet, Pieter de Vries']
      ],
      gl: [['overbooked', 'overboekt'], ['compensation', 'schadevergoeding'], ['booking confirmation', 'boekingsbevestiging']],
      q: [
        { t: 'mc', q: 'Why was Pieter moved to another flight?', o: ['The flight was overbooked', 'He arrived late', 'The plane was broken'] },
        { t: 'mc', q: 'What was he not offered?', o: ['A meal voucher or a hotel room', 'A new ticket', 'A seat on any flight'] },
        { t: 'mc', q: 'What does he ask for?', o: ['A refund of the ticket', 'A free upgrade', 'An apology letter'] }
      ]
    },
    say: [['Although it was raining, we went out.', 'Hoewel het regende, gingen we naar buiten.'], ['Despite being tired, she kept going.', 'Ondanks dat ze moe was, ging ze door.'], ['I am writing to inquire about your services.', 'Ik schrijf u om te informeren naar uw diensten.'], ['I look forward to hearing from you.', 'Ik zie uw reactie graag tegemoet.']],
    task: { nl: 'Schrijf een korte formele klachtmail (5–6 zinnen) over een product of dienst. Gebruik although, despite, however en minstens één formele vaste uitdrukking (I am writing to…, I would be grateful if…, I look forward to…).', model: "Dear Sir or Madam, I am writing to complain about the coffee machine I ordered from your website on May 2nd. Despite being brand new, it stopped working after three days. Although I followed the instructions carefully, it now only produces cold water. However, I have always been happy with your products in the past. I would be grateful if you could replace the machine or refund my money. I look forward to hearing from you. Sincerely, Anna Bakker" },
    scenario: { nl: 'Je belt de klantenservice van een Amerikaanse webwinkel met een klacht.', role: 'You are Michelle, a polite customer service agent for an American online store. The learner has a complaint about a late or damaged order. Follow the company rules, ask for details, and only offer a refund if the learner explains the problem clearly and politely. Model formal phrases (I apologize for…, I would be happy to…, unfortunately, however).', goal: 'Leg je klacht beleefd maar stevig uit en regel een oplossing.' }
  });
})(window.SPT);
