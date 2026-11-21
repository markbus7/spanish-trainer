/* Engels voor Nederlandstaligen: niveaus, niveautest A1–C2, vrije gesprekken en uitdrukkingen van de dag.
   Amerikaans Engels (spelling en uitspraak); waar het Brits anders is, staat dat in de uitleg. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-nl')) return;

  /* Wat je per niveau kunt (de standaardteksten gaan over Spaans). */
  const CAN = {
    A1: ['Jezelf voorstellen en eenvoudige vragen stellen', 'Over familie, eten, je dag en je stad praten', 'Bestellen, kopen en de weg vragen'],
    A2: ['Vertellen wat je gisteren en vroeger deed', 'Ervaringen, plannen en voorspellingen delen', 'Bij de dokter, op reis en in winkels je redden'],
    B1: ['Meningen geven en een gesprek gaande houden', 'Present perfect, conditionals en passief gebruiken', 'Series en nieuws in grote lijnen volgen'],
    B2: ['Vlot en spontaan praten, ook over abstracte onderwerpen', 'Lastige grammatica: mixed conditionals, modals in het verleden, inversie light', 'Typische Nederlandse fouten en valse vrienden vermijden'],
    C1: ['Register bewust kiezen: zakelijk, academisch en informeel', 'Idioom, phrasal verbs en collocaties als een native gebruiken', 'Inversie, cleft sentences en nuance in schrijven en spreken'],
    C2: ['Ironie, understatement en woordgrappen begrijpen en gebruiken', 'Amerikaans en Brits Engels moeiteloos herkennen', 'Vrijwel foutloos en volkomen natuurlijk formuleren']
  };
  const NAME = { A1: 'Beginner', A2: 'Elementary', B1: 'Intermediate', B2: 'Upper intermediate', C1: 'Advanced', C2: 'Proficiency' };
  S.C.LEVELS.forEach(L => { if (CAN[L.id]) L.can = CAN[L.id]; if (NAME[L.id]) L.es = NAME[L.id]; });

  /* Niveautest A1–C2: de eerste optie is de juiste. */
  S.placement = [
    { lv: 'A1', q: 'I ___ from the Netherlands.', o: ['am', 'is', 'are'] },
    { lv: 'A1', q: 'She ___ two children.', o: ['has', 'have', 'is'] },
    { lv: 'A1', q: '___ you like coffee?', o: ['Do', 'Does', 'Are'] },
    { lv: 'A1', q: 'He ___ in Utrecht.', o: ['lives', 'live', 'living'] },
    { lv: 'A1', q: "My sister ___ like fish.", o: ["doesn't", "don't", 'not'] },
    { lv: 'A1', q: 'I am 30 ___ old.', o: ['years', 'year', 'ages'] },
    { lv: 'A1', q: '___ a supermarket near here?', o: ['Is there', 'There is', 'Has it'] },
    { lv: 'A1', q: 'I would like ___ apple, please.', o: ['an', 'a', 'some'] },
    { lv: 'A1', q: 'The meeting is ___ Monday.', o: ['on', 'in', 'at'] },
    { lv: 'A1', q: 'This is Tom and ___ wife.', o: ['his', 'her', 'he'] },
    { lv: 'A1', q: 'We ___ watch TV in the morning.', o: ['never', 'not never', "don't never"] },
    { lv: 'A1', q: 'How ___ is this jacket?', o: ['much', 'many', 'cost'] },
    { lv: 'A1', q: 'They ___ my friends.', o: ['are', 'is', 'be'] },
    { lv: 'A1', q: "Look! It ___.", o: ["'s raining", 'rains', 'rain'] },
    { lv: 'A2', q: 'I ___ to Spain last summer.', o: ['went', 'have gone', 'go'] },
    { lv: 'A2', q: 'Did you ___ the email?', o: ['get', 'got', 'gotten'] },
    { lv: 'A2', q: 'She is ___ than her brother.', o: ['older', 'more old', 'oldest'] },
    { lv: 'A2', q: 'Have you ever ___ sushi?', o: ['eaten', 'ate', 'eat'] },
    { lv: 'A2', q: "I haven't finished it ___.", o: ['yet', 'already', 'still'] },
    { lv: 'A2', q: 'You ___ see a doctor about that cough.', o: ['should', 'should to', 'must to'] },
    { lv: 'A2', q: 'I was cooking when the phone ___.', o: ['rang', 'was ringing', 'rings'] },
    { lv: 'A2', q: "We're ___ visit my parents this weekend.", o: ['going to', 'go to', 'will to'] },
    { lv: 'A2', q: 'How ___ people came to the party?', o: ['many', 'much', 'lot'] },
    { lv: 'A2', q: 'If it rains, we ___ stay inside.', o: ['will', 'would', 'are'] },
    { lv: 'A2', q: 'I moved here three years ___.', o: ['ago', 'before', 'since'] },
    { lv: 'A2', q: 'Can I ___ a photo of you?', o: ['take', 'make', 'do'] },
    { lv: 'A2', q: 'He drives very ___.', o: ['carefully', 'careful', 'care'] },
    { lv: 'A2', q: 'I’m not used to ___ so early.', o: ['getting up', 'get up', 'got up'] },
    { lv: 'B1', q: "I've lived in Amsterdam ___ 2015.", o: ['since', 'for', 'from'] },
    { lv: 'B1', q: "I've known her ___ ten years.", o: ['for', 'since', 'during'] },
    { lv: 'B1', q: "We've been ___ for over an hour.", o: ['waiting', 'waited', 'wait'] },
    { lv: 'B1', q: 'The bridge ___ built in 1932.', o: ['was', 'has', 'is'] },
    { lv: 'B1', q: 'If I ___ more time, I would learn Japanese.', o: ['had', 'have', 'would have'] },
    { lv: 'B1', q: 'That’s the man ___ car was stolen.', o: ['whose', 'who', 'which'] },
    { lv: 'B1', q: 'She told me she ___ busy.', o: ['was', 'is being', 'were'] },
    { lv: 'B1', q: 'When I arrived, the film had already ___.', o: ['started', 'start', 'starting'] },
    { lv: 'B1', q: 'I’m looking forward to ___ you.', o: ['seeing', 'see', 'have seen'] },
    { lv: 'B1', q: 'He suggested ___ a taxi.', o: ['taking', 'to take', 'that we take to'] },
    { lv: 'B1', q: 'I want ___ me.', o: ['you to help', 'that you help', 'you help'] },
    { lv: 'B1', q: 'She ___ me how to cook this dish.', o: ['taught', 'learned', 'learnt'] },
    { lv: 'B1', q: 'Could you tell me where ___?', o: ['the station is', 'is the station', 'the station'] },
    { lv: 'B1', q: 'He has ___ a lot of progress.', o: ['made', 'done', 'had'] },
    { lv: 'B2', q: 'If I had left earlier, I ___ the train.', o: ["wouldn't have missed", "wouldn't miss", "didn't miss"] },
    { lv: 'B2', q: 'If she had taken the job, she ___ in London now.', o: ['would be living', 'would have lived', 'will live'] },
    { lv: 'B2', q: 'I wish I ___ that. It was a mistake.', o: ["hadn't said", "didn't say", "wouldn't say"] },
    { lv: 'B2', q: 'He ___ the keys. They’re not here.', o: ['must have taken', 'must take', 'should take'] },
    { lv: 'B2', q: "She can't ___ the message. She hasn't replied.", o: ['have seen', 'see', 'saw'] },
    { lv: 'B2', q: "I'm having my car ___ tomorrow.", o: ['repaired', 'repair', 'to repair'] },
    { lv: 'B2', q: 'He is said ___ very rich.', o: ['to be', 'being', 'that he is'] },
    { lv: 'B2', q: 'I stopped ___ coffee because I couldn’t sleep.', o: ['drinking', 'to drink', 'drink'] },
    { lv: 'B2', q: 'She denied ___ the money.', o: ['taking', 'to take', 'that take'] },
    { lv: 'B2', q: 'Despite ___ tired, she finished the report.', o: ['being', 'she was', 'of being'] },
    { lv: 'B2', q: "We'll have to put ___ the meeting until next week.", o: ['off', 'out', 'away'] },
    { lv: 'B2', q: 'Which word means “uiteindelijk”?', o: ['eventually', 'possibly', 'actually'] },
    { lv: 'B2', q: 'By the time you arrive, I ___ dinner.', o: ['will have made', 'will make', 'make'] },
    { lv: 'B2', q: "It's high time we ___ home.", o: ['went', 'go', 'will go'] },
    { lv: 'C1', q: 'Not only ___ late, but he also forgot the documents.', o: ['was he', 'he was', 'he has been'] },
    { lv: 'C1', q: 'Never ___ such a beautiful view.', o: ['have I seen', 'I have seen', 'I saw'] },
    { lv: 'C1', q: 'Had I known, I ___ differently.', o: ['would have acted', 'would act', 'had acted'] },
    { lv: 'C1', q: '___ you need any help, just let me know.', o: ['Should', 'Would', 'If should'] },
    { lv: 'C1', q: 'What I need ___ a long holiday.', o: ['is', 'are', 'it is'] },
    { lv: 'C1', q: 'The plan was, ___, a complete failure.', o: ['to all intents and purposes', 'at all intents and purposes', 'for all intends and purposes'] },
    { lv: 'C1', q: 'She was ___ aware of the risks.', o: ['fully', 'highly', 'deeply'] },
    { lv: 'C1', q: 'The new policy came ___ a lot of criticism.', o: ['in for', 'up with', 'down to'] },
    { lv: 'C1', q: 'It’s no use ___ about it now.', o: ['complaining', 'to complain', 'complain'] },
    { lv: 'C1', q: 'The more you practice, ___ you get.', o: ['the better', 'better', 'the best'] },
    { lv: 'C1', q: 'Little ___ that she was being watched.', o: ['did she know', 'she knew', 'knew she'] },
    { lv: 'C1', q: 'We need to ___ a balance between cost and quality.', o: ['strike', 'make', 'find out'] },
    { lv: 'C1', q: 'The report ___ the importance of early action.', o: ['highlights', 'highlightens', 'heightens up'] },
    { lv: 'C1', q: 'Which is the most formal? “We ___ any inconvenience.”', o: ['regret', 'are sorry about', 'feel bad about'] },
    { lv: 'C2', q: 'Which sentence is a British understatement for “this is terrible”?', o: ["It's not ideal.", "It's awful.", "It's kind of bad, I guess."] },
    { lv: 'C2', q: 'He left the company, ___ his colleagues were delighted.', o: ['much to the delight of', 'much for the delight of', 'to much delight of'] },
    { lv: 'C2', q: 'Rarely ___ a debut novel received such praise.', o: ['has', 'had been', 'did'] },
    { lv: 'C2', q: 'So ___ was the storm that the ferry was cancelled.', o: ['severe', 'severely', 'much severe'] },
    { lv: 'C2', q: 'The minister ___ the question and talked about something else.', o: ['sidestepped', 'sidelined', 'stepped aside'] },
    { lv: 'C2', q: '“To be honest, I could care less.” In careful usage this should be…', o: ["I couldn't care less.", 'I could care more.', "I care couldn't less."] },
    { lv: 'C2', q: 'She has a ___ for languages.', o: ['flair', 'flare', 'flier'] },
    { lv: 'C2', q: 'His explanation was so ___ that nobody understood it.', o: ['convoluted', 'concise', 'congenial'] },
    { lv: 'C2', q: 'The project is ___ by budget cuts.', o: ['hamstrung', 'hamstringed', 'hamstrang'] },
    { lv: 'C2', q: 'Which is correct?', o: ['The data suggest that the theory holds.', 'The datas suggests that the theory holds.', 'The data suggests the theory holding.'] },
    { lv: 'C2', q: 'Which word is closest to “ubiquitous”?', o: ['everywhere', 'unique', 'ambiguous'] },
    { lv: 'C2', q: 'He tends to ___ his achievements; he’s far too modest.', o: ['downplay', 'overplay', 'play out'] },
    { lv: 'C2', q: '“That’s brave” said by a British colleague about your plan most likely means…', o: ["I think it's risky or unwise.", 'I admire your courage.', "I don't understand it."] },
    { lv: 'C2', q: 'Choose the most idiomatic: “Let’s not ___ the gun.”', o: ['jump', 'shoot', 'run'] }
  ];

  /* Vrije gesprekken met Profe Lupe. */
  S.scenarios = [
    { id: 'en-nl-free', icon: '💬', lv: 'A1', title: 'Vrij gesprek', place: 'Verenigde Staten 🇺🇸', role: 'You are a friendly American (choose a city and say it at the start). Have a natural conversation about daily life, hobbies and plans, adapted to the learner’s level.', goal: 'Praat over wat je wilt.' },
    { id: 'en-nl-coffee', icon: '☕', lv: 'A1', title: 'Bestellen in een coffeeshop', place: 'Seattle 🇺🇸', role: 'You are Jake, a cheerful barista in Seattle. Ask for the order, the size and the name for the cup.', goal: 'Bestel iets te drinken en te eten en zeg je naam voor de beker.' },
    { id: 'en-nl-weekend', icon: '🕰️', lv: 'A2', title: 'Je weekend vertellen', place: 'Chicago 🇺🇸', role: 'You are Amy, a coworker in Chicago. It is Monday morning. Ask what the learner did on the weekend and ask follow-up questions in the past simple.', goal: 'Vertel wat je in het weekend deed en reageer op haar verhaal.' },
    { id: 'en-nl-interview', icon: '💼', lv: 'B1', title: 'Sollicitatiegesprek', place: 'Boston 🇺🇸', role: 'You are Karen, an HR manager in Boston interviewing the learner. Ask about experience (How long have you…?), strengths, and a difficult situation they handled.', goal: 'Vertel over je ervaring en beantwoord lastige vragen.' },
    { id: 'en-nl-negotiate', icon: '🤝', lv: 'B2', title: 'Onderhandelen over een deal', place: 'New York 🇺🇸', role: 'You are Dan, a sharp but fair procurement manager in New York. Negotiate price, delivery time and payment terms with the learner, who is selling a service. Push back politely, make counteroffers, and use natural business idioms (ballpark figure, meet halfway, deal-breaker). Correct only clear errors, briefly.', goal: 'Onderhandel een goede deal: prijs, levertijd en betaling.' },
    { id: 'en-nl-debate', icon: '🗳️', lv: 'B2', title: 'Discussie: thuiswerken', place: 'San Francisco 🇺🇸', role: 'You are Priya, a tech lead in San Francisco who strongly believes in returning to the office. Debate remote work with the learner: challenge their arguments, ask for evidence, and concede points gracefully when they are good.', goal: 'Verdedig je standpunt met argumenten en reageer op tegenargumenten.' },
    { id: 'en-nl-pitch', icon: '📊', lv: 'C1', title: 'Een voorstel pitchen aan de directie', place: 'London 🇬🇧', role: 'You are Charlotte, a senior British executive in London, polite but very direct in a British way (understatement, "I’m not sure that’s quite right"). The learner pitches a project. Ask probing questions about cost, risk and timeline. At the end, give honest feedback on how persuasive and natural their English sounded.', goal: 'Overtuig haar van je plan en ga goed om met kritische vragen.' },
    { id: 'en-nl-smalltalk', icon: '🥂', lv: 'C1', title: 'Netwerkborrel', place: 'Washington, D.C. 🇺🇸', role: 'You are Ben, a witty American consultant at a networking reception. Make small talk, use humor and idioms, change topics naturally, and see if the learner can keep up and close the conversation gracefully.', goal: 'Voer luchtige small talk, maak een grapje terug en sluit het gesprek netjes af.' },
    { id: 'en-nl-nuance', icon: '🎭', lv: 'C2', title: 'Ironie en ondertoon', place: 'Oxford 🇬🇧', role: 'You are Professor Hughes, a dry-witted Oxford don. Talk about books, politics or culture using irony, understatement and the occasional pun. Check whether the learner picks up on subtext; if they miss it, explain briefly afterwards. Point out anything in their English that sounds even slightly non-native.', goal: 'Vang de ironie op, antwoord met dezelfde droge humor en klink volkomen natuurlijk.' }
  ];

  /* Uitdrukking van de dag: [Engels, Nederlands, vlag]. */
  S.phrases = [
    ['The ball is in your court.', 'Nu is het aan jou (jij moet de volgende stap zetten).', '🇺🇸'],
    ["Let's not beat around the bush.", 'Laten we er niet omheen draaien.', '🇺🇸'],
    ["That's a bit of a stretch.", 'Dat is wel erg vergezocht.', '🇺🇸'],
    ['I’ll take it with a grain of salt.', 'Ik neem het met een korreltje zout.', '🇺🇸'],
    ["It's not rocket science.", 'Het is geen hogere wiskunde.', '🇺🇸'],
    ['We’re on the same page.', 'We zitten op één lijn.', '🇺🇸'],
    ["Don't get your hopes up.", 'Verwacht er niet te veel van.', '🇺🇸'],
    ['It’s six of one, half a dozen of the other.', 'Het is lood om oud ijzer.', '🇬🇧'],
    ['Keep me in the loop.', 'Hou me op de hoogte.', '🇺🇸'],
    ['That ship has sailed.', 'Die kans is verkeken.', '🇺🇸'],
    ['Better safe than sorry.', 'Voorkomen is beter dan genezen.', '🇺🇸'],
    ['He has a chip on his shoulder.', 'Hij voelt zich snel tekortgedaan (en is daar wrokkig over).', '🇺🇸'],
    ["I'm not going to sugarcoat it.", 'Ik ga het niet mooier maken dan het is.', '🇺🇸'],
    ['Bob’s your uncle.', 'En klaar is Kees.', '🇬🇧']
  ];
})(window.SPT);
