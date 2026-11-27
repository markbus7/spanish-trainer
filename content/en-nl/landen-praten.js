/* Uitbreiding «Op reis», verdieping per land (Engels): bij elk land een eigen dialoog en een eigen gesprek met de docent.
   Zelfde vorm als content/landen-praten.js (Spaans). Sanne is de bezoeker (me) en praat Amerikaans Engels zoals in de basiscursus;
   de ander praat zoals in het land. Uitleg: 🗺️ lokaal woord + standaardwoord, of «⚠️ Uitzondering» met de reden. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('en-nl')) return;
  const add = (id, x) => { const p = (S.places || []).find(q => q.id === id); if (p) { x.dialog.me = 'Sanne'; Object.assign(p, x); } };
  const LOC = (w, land, neu) => '🗺️ <b>' + w + '</b>: zo zeggen ze het in ' + land + '. Standaard: <b>' + neu + '</b>.';
  const UITZ = (vorm, neu, uitleg, reden) => '⚠️ <b>Uitzondering:</b> <b>' + vorm + '</b> in plaats van <b>' + neu + '</b>. ' + uitleg + ' Reden: ' + reden;
  const Q = (q, a, b, c) => ({ t: 'mc', q, o: [a, b, c] });

  add('us', {
    dialog: { t: 'Y’all hungry?', nl: 'Tyler uit Atlanta neemt je mee naar een diner.', place: 'Atlanta 🇺🇸', who: { Tyler: 'm', Sanne: 'f' },
      lines: [
        ['Tyler', 'Hey, what’s up? Are y’all new in town?', 'Hé, hoe is het? Zijn jullie nieuw in de stad?', UITZ('y’all', 'you', 'In het zuiden van de VS zeg je y’all (you all) tegen meer dan één persoon.', 'het Engels heeft maar één woord you voor jij én jullie; het zuiden loste dat op met een eigen meervoud.')],
        ['Sanne', 'Hi! Yes, my friend and I arrived yesterday.', 'Hoi! Ja, mijn vriendin en ik zijn gisteren aangekomen.'],
        ['Tyler', 'Awesome! Do you guys wanna grab a bite? There’s a great diner on the corner.', 'Geweldig! Willen jullie een hapje eten? Er zit een goed eettentje op de hoek.', '🗺️ <b>wanna</b> is spreektaal voor <b>want to</b>. Je hoort het overal, maar je schrijft het niet in een nette tekst.<br>' + LOC('to grab a bite', 'de VS', 'to eat something')],
        ['Sanne', 'Sure! Is it far?', 'Graag! Is het ver?'],
        ['Tyler', 'Nah, it’s right down the sidewalk. But there’s usually a line.', 'Nee, het is zo de stoep af. Maar er staat meestal een rij.', LOC('the line', 'de VS', 'the queue') + ' (zo heet het in het Verenigd Koninkrijk)'],
        ['Sanne', 'No problem. I can wait for good pancakes.', 'Geen probleem. Voor goede pannenkoeken kan ik wachten.'],
        ['Tyler', 'For real, they’re worth it. And I’m gonna get the check today.', 'Echt waar, ze zijn het waard. En ik betaal vandaag de rekening.', '🗺️ <b>gonna</b> is spreektaal voor <b>going to</b>.<br>' + LOC('the check', 'de VS', 'the bill') + ' (Brits)'],
        ['Sanne', 'That’s so kind! Then I’ll pay next time.', 'Wat aardig! Dan betaal ik de volgende keer.'],
        ['Tyler', 'Deal. Oh, my bad, I forgot to ask: what’s your name?', 'Afgesproken. O, sorry, ik vergat te vragen: hoe heet je?', LOC('my bad', 'de VS', 'my mistake, sorry')]
      ],
      q: [Q('Where do they go?', 'To a diner', 'To a museum', 'To the airport'), Q('What is "a line" in the US?', 'People waiting', 'A bus', 'A street'), Q('Who pays today?', 'Tyler', 'Sanne', 'Nobody')] },
    talk: { title: 'Bestellen in een diner', place: 'Atlanta, Georgia', nl: 'Je docent speelt Darlene, serveerster in een diner in het zuiden.', goal: 'Bestel ontbijt, vraag wat «grits» zijn en vraag om de rekening.',
      role: 'You are Darlene, a warm and chatty waitress at a diner in Atlanta, Georgia. You call customers "hon" and "sugar", say "y’all" to more than one person, offer sweet tea, biscuits and grits, and refill the coffee without being asked.',
      local: 'Southern American English: y’all, hon, "fixin’ to", "sweet tea", plus general American colloquial forms (gonna, wanna, awesome, the check, the restroom)' }
  });

  add('ca', {
    dialog: { t: 'A double-double, eh?', nl: 'Het is koud in Toronto. Liam weet wat je nodig hebt.', place: 'Toronto 🇨🇦', who: { Liam: 'm', Sanne: 'f' },
      lines: [
        ['Liam', 'Hi there! Cold today, eh?', 'Hallo! Koud vandaag, hè?', '🗺️ <b>eh?</b> achter een zin betekent in Canada «hè?» of «toch?». Standaard: <b>right?</b>'],
        ['Sanne', 'Very cold! I need a hat and a coffee.', 'Heel koud! Ik heb een muts en koffie nodig.'],
        ['Liam', 'You need a toque. And for coffee we go to Timmies.', 'Je hebt een toque nodig. En voor koffie gaan we naar Timmies.', LOC('the toque', 'Canada', 'the winter hat') + ' Het woord komt uit het Frans van Québec (tuque).'],
        ['Sanne', 'Timmies?', 'Timmies?'],
        ['Liam', 'Tim Hortons. I always get a double-double: two creams and two sugars.', 'Tim Hortons. Ik neem altijd een double-double: twee keer room en twee keer suiker.', '🗺️ <b>a double-double</b>: koffie met twee keer room en twee keer suiker. Elke Canadees kent het.'],
        ['Sanne', 'Okay, one for me too. How much is it?', 'Oké, voor mij ook een. Hoeveel kost het?'],
        ['Liam', 'About two dollars. Do you have a toonie?', 'Ongeveer twee dollar. Heb je een toonie?', '🗺️ <b>the toonie</b>: de munt van twee dollar. De munt van één dollar heet <b>the loonie</b>, naar de vogel (loon) die erop staat.'],
        ['Sanne', 'A toonie? Oh, sorry, I only have a card.', 'Een toonie? O, sorry, ik heb alleen een pasje.'],
        ['Liam', 'That’s okay, I’ll pay. And you said "sorry", so you’re already Canadian!', 'Geeft niet, ik betaal. En je zei «sorry», dus je bent al Canadees!']
      ],
      q: [Q('What is a toque?', 'A warm hat', 'A coffee', 'A coin'), Q('What is a double-double?', 'Coffee with two creams and two sugars', 'Two cups of coffee', 'A doughnut'), Q('What is a toonie?', 'A two-dollar coin', 'A bus ticket', 'A credit card')] },
    talk: { title: 'Schaatsen huren', place: 'Rideau Canal, Ottawa', nl: 'Je docent speelt Dave, die schaatsen verhuurt op het bevroren kanaal.', goal: 'Huur schaatsen in jouw maat, vraag wat het kost en waar je iets warms kunt drinken.',
      role: 'You are Dave, who rents out skates at the Rideau Canal Skateway in Ottawa, Canada. You are very polite, say "sorry" and "eh?" a lot, recommend a BeaverTail pastry and a double-double, and talk about the cold in Celsius.',
      local: 'Canadian English: "eh?", frequent "sorry", words like toque, loonie, toonie, washroom, pop, double-double' }
  });

  add('jm', {
    dialog: { t: 'Soon come', nl: 'Devon leert je je eerste woorden Patwa.', place: 'Kingston 🇯🇲', who: { Devon: 'm', Sanne: 'f' },
      lines: [
        ['Devon', 'Wah gwaan, Sanne! Welcome to Kingston.', 'Hoe is het, Sanne! Welkom in Kingston.', LOC('wah gwaan?', 'Jamaica', 'what’s going on?')],
        ['Sanne', 'Hi Devon! Sorry, what does "wah gwaan" mean?', 'Hoi Devon! Sorry, wat betekent «wah gwaan»?'],
        ['Devon', 'It means "what’s going on?" You can answer: "Mi deh yah."', 'Het betekent «hoe gaat het?» Je kunt antwoorden: «Mi deh yah.»', UITZ('mi deh yah', 'I am here', 'In het Jamaicaanse Patwa is «mi» zowel ik als mij, en «deh» betekent zijn (op een plek).', 'Patwa is een creooltaal: de woorden komen uit het Engels, de grammatica voor een groot deel uit West-Afrikaanse talen.')],
        ['Sanne', 'Mi deh yah! Did I say it right?', 'Mi deh yah! Zei ik het goed?'],
        ['Devon', 'Ya mon! Now, are you hungry? Let’s go nyam some jerk chicken.', 'Ja man! Zeg, heb je honger? Laten we jerk chicken gaan eten.', LOC('nyam', 'Jamaica', 'eat') + ' Het woord komt uit West-Afrika.'],
        ['Sanne', 'Yes, please. Is the restaurant open now?', 'Ja, graag. Is het restaurant nu open?'],
        ['Devon', 'Soon come. The cook is on his way. Tek it easy.', 'Komt zo. De kok is onderweg. Rustig aan.', '🗺️ <b>soon come</b>: ik kom zo, het komt zo. Het kan nog best even duren.'],
        ['Sanne', '"Soon come"? In five minutes?', '«Soon come»? Over vijf minuten?'],
        ['Devon', 'Maybe five minutes, maybe an hour. No problem. Everything irie.', 'Misschien vijf minuten, misschien een uur. Geen probleem. Alles is relaxed.', LOC('irie', 'Jamaica', 'fine, all right')]
      ],
      q: [Q('What does "wah gwaan" mean?', 'What’s going on?', 'Goodbye', 'Thank you'), Q('What are they going to eat?', 'Jerk chicken', 'Pizza', 'Fish and chips'), Q('What does "soon come" mean?', 'I will be there, but it can take a while', 'Come quickly', 'See you tomorrow')] },
    talk: { title: 'Bij het strandtentje', place: 'Negril', nl: 'Je docent speelt Miss Paulette, die jerk chicken verkoopt op het strand.', goal: 'Bestel eten en drinken, vraag hoe pittig het is en leer een paar woorden Patwa.',
      role: 'You are Miss Paulette, who runs a small jerk chicken stand on the beach in Negril, Jamaica. You are relaxed and funny. You speak clear English with a few Patois words (wah gwaan, ya mon, irie, likkle, soon come) and gladly explain them.',
      local: 'Jamaican English with light Patois: wah gwaan, mi deh yah, ya mon, irie, likkle, nyam, soon come. Keep the sentences themselves in understandable English.' }
  });

  add('gb', {
    dialog: { t: 'Fancy a cuppa?', nl: 'Oliver vraagt of je «all right» bent. Zie je er ziek uit?', place: 'London 🇬🇧', who: { Oliver: 'm', Sanne: 'f' },
      lines: [
        ['Oliver', 'Hiya, Sanne! You all right?', 'Hoi Sanne! Alles goed?', '🗺️ <b>You all right?</b> is in het Verenigd Koninkrijk een gewone begroeting. Standaard: <b>How are you?</b>'],
        ['Sanne', 'Hi Oliver! Yes, I’m fine. Why? Do I look sick?', 'Hoi Oliver! Ja, prima. Hoezo? Zie ik er ziek uit?'],
        ['Oliver', 'Ha, no! Here "you all right?" just means "how are you?"', 'Ha, nee! Hier betekent «you all right?» gewoon «hoe gaat het?»'],
        ['Sanne', 'Oh! Then I’m good, thanks. But I’m very tired.', 'O! Dan gaat het goed, dank je. Maar ik ben erg moe.'],
        ['Oliver', 'Me too, I’m knackered. Fancy a cuppa? Or a pint?', 'Ik ook, ik ben kapot. Zin in een kop thee? Of een biertje?', LOC('knackered', 'het VK', 'very tired') + '<br>' + LOC('a cuppa', 'het VK', 'a cup of tea') + '<br>' + LOC('fancy…?', 'het VK', 'would you like…?')],
        ['Sanne', 'A cup of tea, please. And maybe some fries.', 'Een kop thee, graag. En misschien wat patat.'],
        ['Oliver', 'Chips, you mean! Crisps are the ones in a bag.', 'Chips, bedoel je! Crisps zijn die uit een zak.', UITZ('chips', 'fries', 'In het VK zijn chips patat; wat Amerikanen chips noemen, heet daar crisps.', 'de twee landen kozen elk een ander woord toen friet en chips in de negentiende eeuw populair werden.')],
        ['Sanne', 'Right. Chips, then. Where is the restroom, by the way?', 'Oké. Chips dan. Waar is trouwens de wc?'],
        ['Oliver', 'The loo is upstairs. Mind the queue! Cheers.', 'De wc is boven. Let op de rij! Proost.', LOC('the loo', 'het VK', 'the restroom') + '<br>' + LOC('the queue', 'het VK', 'the line')]
      ],
      q: [Q('What does "You all right?" mean in the UK?', 'How are you?', 'Are you sick?', 'Are you sure?'), Q('What are "chips" in the UK?', 'Fries', 'Crisps in a bag', 'Cookies'), Q('What is "the loo"?', 'The toilet', 'The bar', 'The exit')] },
    talk: { title: 'In de fish-and-chipszaak', place: 'Manchester', nl: 'Je docent speelt Sandra, die al jaren achter de toonbank van een «chippy» staat.', goal: 'Bestel fish and chips, kies wat erop moet en betaal in ponden.',
      role: 'You are Sandra, who runs a fish and chip shop (a "chippy") in Manchester, England. You call customers "love", say "ta" for thanks and "you all right?" as a greeting, ask "salt and vinegar?" and "open or wrapped?", and give prices in pounds ("quid").',
      local: 'British English: you all right?, cheers, ta, love, mate, quid, chips/crisps, queue, loo, brilliant, British spelling. The learner uses American words (fries, restroom, line): these are correct, never mark them as mistakes.' }
  });

  add('ie', {
    dialog: { t: 'What’s the craic?', nl: 'Cian is «after finishing work». Moet hij nog beginnen?', place: 'Dublin 🇮🇪', who: { Cian: 'm', Sanne: 'f' },
      lines: [
        ['Cian', 'Hiya, Sanne! What’s the craic?', 'Hoi Sanne! Hoe is het?', LOC('What’s the craic?', 'Ierland', 'How are things?') + ' Craic (spreek uit: krak) is lol, gezelligheid of nieuws.'],
        ['Sanne', 'The… crack? Sorry?', 'De… crack? Sorry?'],
        ['Cian', 'The craic! It means fun, or news. "What’s the craic?" is "how are things?"', 'De craic! Het betekent lol, of nieuws. «What’s the craic?» is «hoe gaat het?»'],
        ['Sanne', 'Oh! I’m fine, thanks. How are you?', 'O! Het gaat goed, dank je. En met jou?'],
        ['Cian', 'I’m grand. I’m just after finishing work.', 'Prima. Ik ben net klaar met werken.', LOC('grand', 'Ierland', 'fine') + '<br>' + UITZ('I’m after finishing', 'I have just finished', 'In Ierland zeg je «after» + -ing voor iets wat net gebeurd is.', 'het is letterlijk vertaald uit het Iers (Gaelic), dat geen voltooide tijd met «hebben» kent.')],
        ['Sanne', '"After finishing"? So you are going to finish?', '«After finishing»? Dus je gaat nog stoppen?'],
        ['Cian', 'No, I have just finished. That’s how we say it here.', 'Nee, ik ben net klaar. Zo zeggen wij dat hier.'],
        ['Sanne', 'Interesting! So, what’s the plan tonight?', 'Interessant! En wat is het plan voor vanavond?'],
        ['Cian', 'There’s music at the pub. It’ll be deadly!', 'Er is muziek in de pub. Het wordt geweldig!', LOC('deadly', 'Ierland', 'great') + ' Het heeft hier niets met dodelijk te maken.']
      ],
      q: [Q('What does "What’s the craic?" mean?', 'How are things?', 'What is broken?', 'Where are you?'), Q('"I’m just after finishing work" means:', 'I have just finished work', 'I will finish work later', 'I do not work'), Q('What does "deadly" mean in Ireland?', 'Great', 'Dangerous', 'Boring')] },
    talk: { title: 'In de bed and breakfast', place: 'Galway', nl: 'Je docent speelt Maureen, de gastvrouw van een kleine B&B aan de westkust.', goal: 'Check in, vraag naar het ontbijt en vraag wat je in de buurt kunt doen.',
      role: 'You are Maureen, the friendly owner of a small bed and breakfast in Galway, Ireland. You say "grand", "what’s the craic?", "you’re very welcome" and "I’m after making tea", offer a full Irish breakfast and recommend the Cliffs of Moher and a pub with live music.',
      local: 'Irish English: grand, the craic, deadly, sound, "after + -ing" for the recent past (I’m after making tea), "your man" for "that guy"' }
  });

  add('ng', {
    dialog: { t: 'How far?', nl: 'In de file in Lagos leer je Pidgin van Emeka.', place: 'Lagos 🇳🇬', who: { Emeka: 'm', Sanne: 'f' },
      lines: [
        ['Emeka', 'How far, Sanne? Welcome to Lagos!', 'Hoe is het, Sanne? Welkom in Lagos!', LOC('How far?', 'Nigeria', 'How are you?')],
        ['Sanne', 'Hi Emeka! How far… to where?', 'Hoi Emeka! Hoe ver… naar waar?'],
        ['Emeka', 'Ha! In Pidgin, "how far?" means "how are you?" You can say: "I dey."', 'Ha! In het Pidgin betekent «how far?» «hoe gaat het?» Je kunt zeggen: «I dey.»', UITZ('I dey', 'I am fine', 'In het Nigeriaanse Pidgin betekent «dey» zijn of er zijn.', 'Pidgin is een eigen taal met Engelse woorden en een grammatica uit West-Afrikaanse talen; werkwoorden veranderen er niet van vorm.')],
        ['Sanne', 'I dey! Thank you. The traffic is terrible today.', 'I dey! Dank je. Het verkeer is verschrikkelijk vandaag.'],
        ['Emeka', 'That’s the go-slow. Lagos is famous for it. No wahala, we will arrive.', 'Dat is de file. Daar is Lagos beroemd om. Geen probleem, we komen er wel.', LOC('the go-slow', 'Nigeria', 'the traffic jam') + '<br>' + LOC('no wahala', 'Nigeria', 'no problem')],
        ['Sanne', 'Good. I’m hungry. What can we eat?', 'Mooi. Ik heb honger. Wat kunnen we eten?'],
        ['Emeka', 'We go chop jollof rice. The best in West Africa!', 'We gaan jollofrijst eten. De beste van West-Afrika!', UITZ('we go chop', 'we will eat', 'In het Pidgin zet je «go» vóór het werkwoord voor de toekomst, en «chop» is eten.', 'Pidgin maakt tijden met losse woordjes vóór het werkwoord in plaats van met will of uitgangen.')],
        ['Sanne', '"Chop" means "eat"?', 'Betekent «chop» «eten»?'],
        ['Emeka', 'Ehen! You are learning sharp sharp.', 'Precies! Je leert snel.', LOC('sharp sharp', 'Nigeria', 'very quickly')]
      ],
      q: [Q('What does "How far?" mean in Nigeria?', 'How are you?', 'How many kilometers?', 'Where is it?'), Q('What is a "go-slow"?', 'A traffic jam', 'A slow bus', 'A long walk'), Q('What does "chop" mean?', 'Eat', 'Cut', 'Sleep')] },
    talk: { title: 'Stof kopen op de markt', place: 'Balogun Market, Lagos', nl: 'Je docent speelt Mama Nkechi, die kleurige ankarastof verkoopt.', goal: 'Kies een stof, vraag de prijs en ding af.',
      role: 'You are Mama Nkechi, who sells colorful ankara fabric at Balogun Market in Lagos, Nigeria. You are lively and love to bargain. You speak clear Nigerian English with a few Pidgin words (how far?, abeg, oya, no wahala, sharp sharp) and call the customer "my sister" or "my brother".',
      local: 'Nigerian English with light Pidgin: how far?, I dey, abeg, oya, no wahala, chop, sharp sharp, ehen. Keep the sentences themselves in understandable English.' }
  });

  add('ke', {
    dialog: { t: 'A ride in a matatu', nl: 'Brian neemt je mee in het bontste busje van Nairobi.', place: 'Nairobi 🇰🇪', who: { Brian: 'm', Sanne: 'f' },
      lines: [
        ['Brian', 'Karibu, Sanne! Niaje?', 'Welkom, Sanne! Hoe is het?', '🗺️ <b>karibu</b> is Swahili voor welkom. <b>Niaje?</b> is Sheng, de straattaal van Nairobi. Standaard: <b>Welcome! How are you?</b>'],
        ['Sanne', 'Hello Brian! Asante. What does "niaje" mean?', 'Hallo Brian! Dank je. Wat betekent «niaje»?'],
        ['Brian', 'It’s Sheng for "how are you?" You answer: "Poa!"', 'Het is Sheng voor «hoe gaat het?» Je antwoordt: «Poa!»', LOC('poa', 'Kenia', 'cool, fine')],
        ['Sanne', 'Poa! How do we get to town?', 'Poa! Hoe komen we in de stad?'],
        ['Brian', 'We take a matatu. They are loud and full of music. You’ll love it.', 'We nemen een matatu. Ze zijn luid en vol muziek. Je vindt het vast geweldig.', '🗺️ <b>the matatu</b>: het beschilderde minibusje dat in Kenia het openbaar vervoer is.'],
        ['Sanne', 'Where do we get off?', 'Waar stappen we uit?'],
        ['Brian', 'We alight at the market. I’ll tell the driver.', 'We stappen uit bij de markt. Ik zeg het tegen de chauffeur.', UITZ('to alight', 'to get off', 'In Kenia is het deftige «alight» het gewone woord voor uitstappen.', 'het Engels kwam er via school en bestuur in de Britse tijd; formele woorden zijn zo dagelijkse taal geworden.')],
        ['Sanne', '"Alight"? That sounds very formal.', '«Alight»? Dat klinkt erg formeel.'],
        ['Brian', 'Here everybody says it. Sawa? Pole pole, we have time.', 'Hier zegt iedereen het. Oké? Rustig aan, we hebben tijd.', LOC('sawa', 'Kenia', 'okay') + '<br>' + LOC('pole pole', 'Kenia', 'slowly, take it easy')]
      ],
      q: [Q('What do you answer to "Niaje?"', 'Poa!', 'Karibu!', 'Asante!'), Q('What is a matatu?', 'A minibus', 'A market', 'A dish'), Q('What does "to alight" mean?', 'To get off', 'To pay', 'To turn on the light')] },
    talk: { title: 'Een safari boeken', place: 'Nairobi', nl: 'Je docent speelt Wanjiru, die bij een klein safaribureau werkt.', goal: 'Boek een dagtocht: wanneer je vertrekt, wat het kost en welke dieren je kunt zien.',
      role: 'You are Wanjiru, who works at a small safari office in Nairobi, Kenya. You are polite and enthusiastic, greet with "karibu", say "sawa" for okay and "pole pole" for take it easy, and explain day trips to Nairobi National Park and the Maasai Mara.',
      local: 'Kenyan English: clear vowels, formal words in daily use (alight, kindly), "I’m coming" for "I’ll be right back", Swahili words like karibu, asante, sawa, poa, pole pole, hakuna matata' }
  });

  add('za', {
    dialog: { t: 'Just now or now-now?', nl: 'Thabo nodigt je uit voor een braai. Maar wanneer begint die?', place: 'Cape Town 🇿🇦', who: { Thabo: 'm', Sanne: 'f' },
      lines: [
        ['Thabo', 'Howzit, Sanne! Are you coming to the braai tonight?', 'Hoe is het, Sanne! Kom je vanavond naar de braai?', LOC('howzit?', 'Zuid-Afrika', 'how are you?')],
        ['Sanne', 'Hi Thabo! A braai? What is that?', 'Hoi Thabo! Een braai? Wat is dat?'],
        ['Thabo', 'A barbecue. Meat, fire and friends. It’s lekker!', 'Een barbecue. Vlees, vuur en vrienden. Het is lekker!', LOC('the braai', 'Zuid-Afrika', 'the barbecue') + ' Het komt van het Afrikaanse braaien (braden).'],
        ['Sanne', '"Lekker"! We say that in Dutch too.', '«Lekker»! Dat zeggen wij in het Nederlands ook.'],
        ['Thabo', 'Ja, it comes from Afrikaans. I’ll light the fire just now.', 'Ja, het komt uit het Afrikaans. Ik steek het vuur straks aan.', UITZ('just now', 'later', 'In Zuid-Afrika betekent «just now» straks, ooit; niet «zojuist» zoals elders.', 'het is letterlijk het Afrikaanse «net-nou», dat ook «straks» kan betekenen.')],
        ['Sanne', 'Oh, then I’ll come right away!', 'O, dan kom ik meteen!'],
        ['Thabo', 'Eish, no rush! "Just now" means later. "Now-now" means in a minute.', 'Oei, geen haast! «Just now» betekent later. «Now-now» betekent zo meteen.', LOC('eish!', 'Zuid-Afrika', 'oh dear!')],
        ['Sanne', 'I see. And where do you live?', 'Aha. En waar woon je?'],
        ['Thabo', 'Turn left at the robot. That’s a traffic light here. Sharp!', 'Sla linksaf bij de robot. Dat is hier een stoplicht. Tot dan!', LOC('the robot', 'Zuid-Afrika', 'the traffic light')]
      ],
      q: [Q('What is a braai?', 'A barbecue', 'A drink', 'A car'), Q('What does "just now" mean in South Africa?', 'Later', 'Immediately', 'Yesterday'), Q('What is a "robot" in South Africa?', 'A traffic light', 'A machine', 'A taxi')] },
    talk: { title: 'Met de kabelbaan de Tafelberg op', place: 'Table Mountain, Cape Town', nl: 'Je docent speelt Pieter, gids bij de kabelbaan.', goal: 'Koop een kaartje, vraag naar het weer boven en hoe lang de wandeling is.',
      role: 'You are Pieter, a guide at the Table Mountain cable car in Cape Town, South Africa. You are easygoing, say "howzit", "lekker", "ja-nee", "now-now" and "just now" (and explain the difference when asked), and warn about the wind on top.',
      local: 'South African English: howzit, lekker, braai, robot, bakkie, now-now (in a minute) versus just now (later), eish, shame, sharp' }
  });

  add('in', {
    dialog: { t: 'Let’s prepone the meeting', nl: 'Op kantoor in Bangalore gaat een vergadering «naar voren».', place: 'Bangalore 🇮🇳', who: { Rahul: 'm', Sanne: 'f' },
      lines: [
        ['Rahul', 'Namaste, Sanne! Welcome to the Bangalore office.', 'Namaste, Sanne! Welkom op het kantoor in Bangalore.'],
        ['Sanne', 'Thank you, Rahul! When is our meeting?', 'Dank je, Rahul! Wanneer is onze vergadering?'],
        ['Rahul', 'It was at four, but we have to prepone it to two.', 'Die was om vier uur, maar we moeten hem vervroegen naar twee uur.', LOC('to prepone', 'India', 'to move to an earlier time') + ' Het is gemaakt als tegenhanger van postpone.'],
        ['Sanne', '"Prepone"? Is that the opposite of "postpone"?', '«Prepone»? Is dat het tegenovergestelde van «postpone»?'],
        ['Rahul', 'Exactly! We are using this word every day here.', 'Precies! We gebruiken dit woord hier elke dag.', UITZ('we are using', 'we use', 'In India hoor je de -ing-vorm ook voor gewoontes en toestanden (I am knowing, we are having).', 'talen als het Hindi gebruiken voor gewoontes een duurvorm, en die bouw is meegekomen naar het Engels.')],
        ['Sanne', 'Clever word. And where is Priya?', 'Slim woord. En waar is Priya?'],
        ['Rahul', 'She is out of station. She will come back on Monday only.', 'Ze is de stad uit. Ze komt pas maandag terug.', LOC('out of station', 'India', 'out of town') + '<br>' + UITZ('on Monday only', 'only on Monday', '«Only» staat in India vaak achteraan, voor nadruk.', 'in het Hindi staat het nadrukwoordje (hi) ook achter het woord waar het bij hoort.')],
        ['Sanne', 'Okay. Shall we have lunch first?', 'Oké. Zullen we eerst lunchen?'],
        ['Rahul', 'Achha, good idea, yaar. There is a nice hotel nearby. Don’t worry, it’s only a restaurant!', 'Oké, goed idee, maat. Er is een leuk hotel vlakbij. Maak je geen zorgen, het is gewoon een restaurant!', LOC('achha', 'India', 'okay, I see') + '<br>' + LOC('the hotel', 'India', 'the restaurant')]
      ],
      q: [Q('What does "to prepone" mean?', 'To move to an earlier time', 'To cancel', 'To move to a later time'), Q('Where is Priya?', 'Out of town', 'In the office', 'At lunch'), Q('What is a "hotel" in this dialogue?', 'A restaurant', 'A place to sleep', 'An office')] },
    talk: { title: 'Met de riksja door de stad', place: 'Mumbai', nl: 'Je docent speelt Suresh, bestuurder van een autoriksja.', goal: 'Zeg waar je heen wilt, spreek een prijs af en maak een praatje onderweg.',
      role: 'You are Suresh, an auto-rickshaw driver in Mumbai, India. You are talkative and proud of your city. You say "madam" or "sir", "achha", "no problem", "what is your good name?", use "only" and "itself" for emphasis (today only, here itself) and give prices in rupees.',
      local: 'Indian English: -ing for habits (I am knowing), "only" and "itself" for emphasis, words like prepone, out of station, lakh, achha, yaar, chalo, "what is your good name?"' }
  });

  add('sg', {
    dialog: { t: 'Can or not?', nl: 'Wei Jie neemt je mee naar de eetmarkt, waar een pakje zakdoekjes een tafel bezet houdt.', place: 'Singapore 🇸🇬', who: { 'Wei Jie': 'm', Sanne: 'f' },
      lines: [
        ['Wei Jie', 'Hello, Sanne! Have you eaten already?', 'Hallo Sanne! Heb je al gegeten?', '🗺️ <b>Have you eaten?</b> is in Singapore een gewone begroeting, zoals «hoe gaat het?».'],
        ['Sanne', 'Hi Wei Jie! Not yet. Where can we eat?', 'Hoi Wei Jie! Nog niet. Waar kunnen we eten?'],
        ['Wei Jie', 'At the hawker centre. Cheap and very good. Can?', 'Op de eetmarkt. Goedkoop en heel lekker. Oké?', UITZ('Can?', 'Is that okay?', 'In Singapore is «can» in zijn eentje een hele zin: kan dat? ja, dat kan!', 'in het Chinees en het Maleis antwoord je ook met alleen het werkwoord; Singlish neemt die korte bouw over.')],
        ['Sanne', 'Can… what?', 'Kan… wat?'],
        ['Wei Jie', '"Can?" means "is that okay?" You just say: "Can!"', '«Can?» betekent «is dat goed?» Je zegt gewoon: «Can!»'],
        ['Sanne', 'Can! Oh, why is there a packet of tissues on that table?', 'Can! O, waarom ligt er een pakje zakdoekjes op die tafel?'],
        ['Wei Jie', 'Somebody chope the seat already. It means the table is taken.', 'Iemand heeft de plek al bezet. Het betekent dat de tafel bezet is.', LOC('to chope', 'Singapore', 'to reserve a seat') + '<br>' + UITZ('somebody chope already', 'somebody has reserved', 'In Singlish krijgt het werkwoord geen verleden tijd; «already» laat zien dat het gebeurd is.', 'het Chinees en het Maleis kennen geen werkwoordstijden en gebruiken daar ook een los woordje voor.')],
        ['Sanne', 'Clever! And what should I order?', 'Slim! En wat moet ik bestellen?'],
        ['Wei Jie', 'Chicken rice lah. Confirm shiok!', 'Kip met rijst, joh. Gegarandeerd heerlijk!', '🗺️ <b>lah</b> is een woordje achter de zin dat hem vriendelijker of stelliger maakt.<br>' + LOC('shiok', 'Singapore', 'delicious, great')]
      ],
      q: [Q('Where do they eat?', 'At the hawker centre', 'At home', 'In a hotel'), Q('What does "Can?" mean in Singapore?', 'Is that okay?', 'Can you help me?', 'A can of soda'), Q('Why is there a packet of tissues on the table?', 'The seat is taken', 'The table is dirty', 'They are free')] },
    talk: { title: 'Bestellen op de eetmarkt', place: 'Maxwell Food Centre, Singapore', nl: 'Je docent speelt Uncle Tan, die al veertig jaar kip met rijst verkoopt.', goal: 'Bestel eten en drinken, zeg of je daar eet of meeneemt en betaal.',
      role: 'You are Uncle Tan, who has sold chicken rice at a hawker stall in Maxwell Food Centre, Singapore, for forty years. You speak short, fast Singlish-flavored English: "Can!", "lah", "eat here or takeaway?", "want chilli?", "shiok". You are friendly and efficient.',
      local: 'Singapore English with light Singlish: "can / cannot" as full answers, particles lah and lor, "already" for the past, words like shiok, chope, makan, paiseh, alamak. Keep it understandable.' }
  });

  add('ph', {
    dialog: { t: 'Close the light', nl: 'Paolo zegt «for a while» en «close the light». Wat bedoelt hij?', place: 'Manila 🇵🇭', who: { Paolo: 'm', Sanne: 'f' },
      lines: [
        ['Paolo', 'Mabuhay, Sanne! Welcome to Manila.', 'Welkom, Sanne! Welkom in Manilla.', '🗺️ <b>mabuhay</b> is Tagalog voor welkom (letterlijk: leef!).'],
        ['Sanne', 'Thank you, Paolo! Sorry, where is the restroom?', 'Dank je, Paolo! Sorry, waar is de wc?'],
        ['Paolo', 'The CR is over there, next to the stairs.', 'De CR is daar, naast de trap.', LOC('the CR (comfort room)', 'de Filipijnen', 'the restroom')],
        ['Sanne', 'The CR?', 'De CR?'],
        ['Paolo', 'The comfort room. That’s what we call it here.', 'De comfort room. Zo noemen wij dat hier.'],
        ['Sanne', 'Nice word! And how do we go to the mall?', 'Leuk woord! En hoe gaan we naar het winkelcentrum?'],
        ['Paolo', 'By jeepney. For a while, I’ll just get my wallet.', 'Met de jeepney. Momentje, ik pak even mijn portemonnee.', UITZ('for a while', 'just a moment', 'In de Filipijnen betekent «for a while» een ogenblikje; elders betekent het juist «een hele tijd».', 'het is een letterlijke vertaling van het Tagalog «sandali lang» (heel even).')],
        ['Sanne', '"For a while"? How long?', '«For a while»? Hoe lang?'],
        ['Paolo', 'Just a moment! And can you close the light, please?', 'Heel even maar! En kun je het licht uitdoen, alsjeblieft?', UITZ('close the light', 'turn off the light', 'Filipino’s zeggen open/close the light voor aan- en uitdoen.', 'in het Tagalog gebruik je voor licht dezelfde werkwoorden als voor een deur (bukas, sara).')],
        ['Sanne', 'Close the light… Oh, turn it off! Okay. Salamat!', 'Het licht dichtdoen… O, uitdoen! Oké. Dank je!', LOC('salamat', 'de Filipijnen', 'thank you')]
      ],
      q: [Q('What is the CR?', 'The restroom', 'The car', 'The mall'), Q('How do they go to the mall?', 'By jeepney', 'By taxi', 'On foot'), Q('What does "close the light" mean?', 'Turn off the light', 'Close the window', 'Open the door')] },
    talk: { title: 'In het buurtwinkeltje', place: 'Quezon City, Manila', nl: 'Je docent speelt Ate Marites, die een sari-sari-winkeltje aan huis heeft.', goal: 'Koop iets te drinken en beltegoed, en maak een praatje over de buurt.',
      role: 'You are Ate Marites, who runs a sari-sari store (a tiny neighborhood shop) in Quezon City, Philippines. You are cheerful and curious, mix in a few Tagalog words (salamat, po, ano), say "for a while" for "one moment" and "load" for phone credit, and love a little friendly gossip.',
      local: 'Philippine English: CR, "for a while" (one moment), open/close the light, ref (fridge), load (phone credit), Tagalog words like salamat and the polite particle po' }
  });

  add('au', {
    dialog: { t: 'A barbie this arvo', nl: 'Jack maakt elk woord korter. En je moet je «thongs» meenemen.', place: 'Sydney 🇦🇺', who: { Jack: 'm', Sanne: 'f' },
      lines: [
        ['Jack', 'G’day, Sanne! How ya going?', 'Hoi Sanne! Hoe gaat het?', LOC('G’day! How ya going?', 'Australië', 'Hello! How are you?')],
        ['Sanne', 'Hi Jack! I’m going… to the beach?', 'Hoi Jack! Ik ga… naar het strand?'],
        ['Jack', 'Ha! "How ya going?" means "how are you?"', 'Ha! «How ya going?» betekent «hoe gaat het?»'],
        ['Sanne', 'Oh! I’m good, thanks. What are you doing this afternoon?', 'O! Goed, dank je. Wat ga je vanmiddag doen?'],
        ['Jack', 'This arvo? We’re having a barbie at the beach. Wanna come?', 'Vanmiddag? We houden een barbecue op het strand. Kom je ook?', '🗺️ Australiërs korten woorden af en zetten er -o of -ie achter: <b>arvo</b> = afternoon, <b>barbie</b> = barbecue, <b>brekkie</b> = breakfast.'],
        ['Sanne', 'I’d love to! What should I bring?', 'Heel graag! Wat moet ik meenemen?'],
        ['Jack', 'Just your sunnies and your thongs.', 'Alleen je zonnebril en je teenslippers.', LOC('sunnies', 'Australië', 'sunglasses') + '<br>' + UITZ('thongs', 'flip-flops', 'In Australië zijn thongs teenslippers; in de VS is een thong een string!', 'het woord betekende oorspronkelijk «riempje»; elk land gaf het aan iets anders met een riempje.')],
        ['Sanne', 'My… thongs?', 'Mijn… thongs?'],
        ['Jack', 'Flip-flops, mate! I’ll bring the esky with heaps of drinks. No worries!', 'Teenslippers, maat! Ik neem de koelbox mee met heel veel drankjes. Geen probleem!', LOC('the esky', 'Australië', 'the cooler') + '<br>' + LOC('heaps of', 'Australië', 'a lot of')]
      ],
      q: [Q('What does "this arvo" mean?', 'This afternoon', 'This morning', 'Tomorrow'), Q('What are "thongs" in Australia?', 'Flip-flops', 'Sunglasses', 'Towels'), Q('What is an esky?', 'A cooler', 'A car', 'A barbecue')] },
    talk: { title: 'In de surfwinkel', place: 'Byron Bay', nl: 'Je docent speelt Shazza, die surfplanken verhuurt aan het strand.', goal: 'Huur een surfplank, vraag naar de golven en wat een les kost.',
      role: 'You are Shazza (Sharon), who rents out surfboards at a surf shop in Byron Bay, Australia. You are sunny and relaxed, say "g’day", "mate", "no worries", "this arvo", "heaps" and "she’ll be right", shorten words (brekkie, sunnies, servo) and warn about the sun.',
      local: 'Australian English: g’day, mate, no worries, shortened words in -o/-ie (arvo, servo, barbie, brekkie, sunnies), heaps, reckon, rising intonation' }
  });

  add('nz', {
    dialog: { t: 'Tramping and togs', nl: 'Tane neemt je een weekend mee de natuur in, met Māori-woorden erbij.', place: 'Wellington 🇳🇿', who: { Tane: 'm', Sanne: 'f' },
      lines: [
        ['Tane', 'Kia ora, Sanne! Welcome to Aotearoa.', 'Hallo Sanne! Welkom in Aotearoa.', '🗺️ <b>kia ora</b> is Māori voor hallo of dank je. <b>Aotearoa</b> is de Māori-naam van Nieuw-Zeeland.'],
        ['Sanne', 'Kia ora, Tane! Is that Māori?', 'Kia ora, Tane! Is dat Māori?'],
        ['Tane', 'Yeah, it means hello. We use a lot of Māori words in English here.', 'Ja, het betekent hallo. We gebruiken hier veel Māori-woorden in het Engels.'],
        ['Sanne', 'Beautiful. What are we doing this weekend?', 'Mooi. Wat gaan we dit weekend doen?'],
        ['Tane', 'We’re going tramping, and then we stay at my family’s bach.', 'We gaan een trektocht maken, en daarna slapen we in het vakantiehuisje van mijn familie.', LOC('tramping', 'Nieuw-Zeeland', 'hiking') + '<br>' + LOC('the bach', 'Nieuw-Zeeland', 'the small vacation house') + ' (spreek uit: betsj)'],
        ['Sanne', 'Okay! What should I bring?', 'Oké! Wat moet ik meenemen?'],
        ['Tane', 'Bring your togs and your jandals. The lake is right there.', 'Neem je zwemkleding en je teenslippers mee. Het meer ligt er vlak naast.', LOC('togs', 'Nieuw-Zeeland', 'a swimsuit') + '<br>' + LOC('jandals', 'Nieuw-Zeeland', 'flip-flops')],
        ['Sanne', 'A swimsuit and flip-flops, right? And food?', 'Zwemkleding en teenslippers, toch? En eten?'],
        ['Tane', 'Sweet as! My whānau will bring heaps of kai.', 'Top! Mijn familie neemt heel veel eten mee.', UITZ('sweet as', 'great', 'Nieuw-Zeelanders zeggen «sweet as» (en «cold as», «easy as») zonder de vergelijking af te maken.', 'het is een afgekapte vergelijking (as sweet as…); het weglaten is juist de grap geworden.') + '<br>' + LOC('whānau / kai', 'Nieuw-Zeeland', 'family / food') + ' Beide zijn Māori.']
      ],
      q: [Q('What does "kia ora" mean?', 'Hello', 'Goodbye', 'Sorry'), Q('What is "tramping"?', 'Hiking', 'Swimming', 'Shopping'), Q('What is "kai"?', 'Food', 'Family', 'A house')] },
    talk: { title: 'Een wandeltocht plannen', place: 'Tongariro National Park', nl: 'Je docent speelt Mere, boswachter in het bezoekerscentrum.', goal: 'Vraag welke route bij je past, hoe lang hij duurt en wat je moet meenemen.',
      role: 'You are Mere, a ranger at the visitor centre of Tongariro National Park, New Zealand. You are calm and helpful, greet with "kia ora", say "sweet as", "yeah, nah" and "heaps", use Māori words (whānau, kai, maunga for mountain) and explain them, and take the weather seriously.',
      local: 'New Zealand English: kia ora, sweet as, yeah nah, heaps, chur, words like tramping, togs, jandals, bach, dairy, Māori words (whānau, kai), short e sounding like i' }
  });
})(window.SPT);
