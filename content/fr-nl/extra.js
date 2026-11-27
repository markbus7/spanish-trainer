/* Frans voor Nederlandstaligen: niveaus, niveautest, vrije gesprekken en uitdrukkingen van de dag.
   Frans van Frankrijk; waar het in België, Zwitserland of Québec anders is, staat dat in de uitleg en in «Op reis». */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const T = S.frTypo || (x => x);

  /* Wat je per niveau kunt (de standaardteksten gaan over een andere taal). */
  const CAN = {
    A1: ['Jezelf voorstellen en eenvoudige vragen stellen', 'Over familie, eten, je dag en je stad praten', 'Bestellen, kopen en de weg vragen'],
    A2: ['Vertellen wat je gisteren en vroeger deed (passé composé en imparfait)', 'Plannen maken en over de toekomst praten', 'Bij de dokter, op reis en in een restaurant je redden'],
    B1: ['Meningen, wensen en twijfels uitdrukken (subjonctif)', 'Een verhaal vertellen en een gesprek gaande houden', 'Nieuws en series in grote lijnen volgen'],
    B2: ['Vlot en spontaan praten met moedertaalsprekers', 'Nuance aanbrengen met tijden, wijzen en verbindingswoorden', 'Argumenteren en debatteren'],
    C1: ['Lange, complexe teksten begrijpen', 'Register bewust kiezen: familier, courant, soutenu', 'Presenteren en betogen schrijven'],
    C2: ['Nuance, ironie en woordspel begrijpen', 'Idioom en regionale varianten herkennen en gebruiken', 'Vrijwel alles moeiteloos begrijpen']
  };
  const NAME = { A1: 'Débutant', A2: 'Élémentaire', B1: 'Intermédiaire', B2: 'Intermédiaire avancé', C1: 'Avancé', C2: 'Maîtrise' };
  S.C.LEVELS.forEach(L => { if (CAN[L.id]) L.can = CAN[L.id]; if (NAME[L.id]) L.es = NAME[L.id]; });

  /* Niveautest: de eerste optie is de juiste. nl = vertaling van de hele zin. */
  S.placement = T([
    { lv: 'A1', q: 'Je ___ néerlandais.', o: ['suis', 'es', 'ai'], nl: 'Ik ben Nederlander.' },
    { lv: 'A1', q: 'Elle ___ vingt ans.', o: ['a', 'est', 'as'], nl: 'Zij is twintig jaar.' },
    { lv: 'A1', q: 'Voici ___ mère.', o: ['ma', 'mon', 'mes'], nl: 'Dit is mijn moeder.' },
    { lv: 'A1', q: 'Je voudrais ___ café, s\'il vous plaît.', o: ['un', 'une', 'des'], nl: 'Ik wil graag een koffie, alstublieft.' },
    { lv: 'A1', q: 'Je mange ___ pain.', o: ['du', 'de la', 'le'], nl: 'Ik eet brood.' },
    { lv: 'A1', q: 'Il ne mange pas ___ viande.', o: ['de', 'de la', 'la'], nl: 'Hij eet geen vlees.' },
    { lv: 'A1', q: 'Je ___ lève à sept heures.', o: ['me', 'te', 'se'], nl: 'Ik sta om zeven uur op.' },
    { lv: 'A1', q: 'Nous ___ au cinéma.', o: ['allons', 'allez', 'vont'], nl: 'Wij gaan naar de bioscoop.' },
    { lv: 'A1', q: 'Je vais ___ supermarché.', o: ['au', 'à le', 'à la'], nl: 'Ik ga naar de supermarkt.' },
    { lv: 'A1', q: 'Il ___ beau aujourd\'hui.', o: ['fait', 'est', 'a'], nl: 'Het is mooi weer vandaag.' },
    { lv: 'A1', q: 'Une robe ___.', o: ['blanche', 'blanc', 'blancs'], nl: 'Een witte jurk.' },
    { lv: 'A1', q: 'Elle joue ___ piano.', o: ['du', 'au', 'le'], nl: 'Ze speelt piano.' },
    { lv: 'A1', q: 'Vous ___ le français ?', o: ['comprenez', 'comprendez', 'comprennent'], nl: 'Begrijpt u Frans?' },
    { lv: 'A1', q: 'Demain, je ___ partir à Lyon.', o: ['vais', 'va', 'suis'], nl: 'Morgen ga ik naar Lyon vertrekken.' },
    { lv: 'A2', q: 'Hier, j\'___ mangé au restaurant.', o: ['ai', 'suis', 'a'], nl: 'Gisteren heb ik in een restaurant gegeten.' },
    { lv: 'A2', q: 'Elle ___ allée à Paris.', o: ['est', 'a', 'es'], nl: 'Zij is naar Parijs gegaan.' },
    { lv: 'A2', q: 'Nous avons ___ un bon film.', o: ['vu', 'voir', 'vus'], nl: 'We hebben een goede film gezien.' },
    { lv: 'A2', q: 'Quand j\'étais petit, je ___ au foot.', o: ['jouais', 'ai joué', 'joue'], nl: 'Toen ik klein was, voetbalde ik.' },
    { lv: 'A2', q: 'J\'ai mal ___ tête.', o: ['à la', 'au', 'de la'], nl: 'Ik heb hoofdpijn.' },
    { lv: 'A2', q: 'Ce livre ? Je ___ lis ce soir.', o: ['le', 'lui', 'en'], nl: 'Dit boek? Ik lees het vanavond.' },
    { lv: 'A2', q: 'Je téléphone à Marie. Je ___ téléphone.', o: ['lui', 'la', 'elle'], nl: 'Ik bel Marie. Ik bel haar.' },
    { lv: 'A2', q: 'Du pain ? Oui, j\'___ veux.', o: ['en', 'y', 'le'], nl: 'Brood? Ja, daar wil ik wat van.' },
    { lv: 'A2', q: 'Paris est ___ grand que Lyon.', o: ['plus', 'très', 'beaucoup'], nl: 'Parijs is groter dan Lyon.' },
    { lv: 'A2', q: 'Demain, il ___ beau.', o: ['fera', 'faisait', 'a fait'], nl: 'Morgen wordt het mooi weer.' },
    { lv: 'A2', q: 'Il pleuvait quand je ___.', o: ['suis sorti', 'sortais', 'sors'], nl: 'Het regende toen ik naar buiten ging.' },
    { lv: 'A2', q: 'C\'est le film ___ j\'ai vu hier.', o: ['que', 'qui', 'où'], nl: 'Dat is de film die ik gisteren heb gezien.' },
    { lv: 'A2', q: 'Je ___ de finir mon travail.', o: ['viens', 'vais', 'suis'], nl: 'Ik heb net mijn werk afgemaakt.' },
    { lv: 'A2', q: 'Il ___ faire du sport.', o: ['faut', 'doit de', 'fait'], nl: 'Je moet sporten. (Het is nodig om te sporten.)' },
    { lv: 'B1', q: 'Il faut que tu ___ à l\'heure.', o: ['sois', 'es', 'seras'], nl: 'Je moet op tijd zijn.' },
    { lv: 'B1', q: 'Je veux que vous ___ ce livre.', o: ['lisiez', 'lisez', 'lirez'], nl: 'Ik wil dat jullie dit boek lezen.' },
    { lv: 'B1', q: 'Si j\'avais le temps, je ___ plus.', o: ['voyagerais', 'voyagerai', 'voyageais'], nl: 'Als ik tijd had, zou ik meer reizen.' },
    { lv: 'B1', q: 'Quand je suis arrivé, le train ___ parti.', o: ['était déjà', 'est déjà', 'a déjà'], nl: 'Toen ik aankwam, was de trein al vertrokken.' },
    { lv: 'B1', q: 'Il m\'a dit qu\'il ___ fatigué.', o: ['était', 'est', 'soit'], nl: 'Hij zei me dat hij moe was.' },
    { lv: 'B1', q: 'Ce livre ? Je ___ ai donné.', o: ['le lui', 'lui le', 'lui l\''], nl: 'Dit boek? Ik heb het hem gegeven.' },
    { lv: 'B1', q: 'Ce pont ___ construit en 1900.', o: ['a été', 'a', 'est été'], nl: 'Deze brug is in 1900 gebouwd.' },
    { lv: 'B1', q: 'Il travaille ___ écoutant la radio.', o: ['en', 'à', 'par'], nl: 'Hij werkt terwijl hij naar de radio luistert.' },
    { lv: 'B1', q: 'Je ne pense pas qu\'il ___ raison.', o: ['ait', 'a', 'aura'], nl: 'Ik denk niet dat hij gelijk heeft.' },
    { lv: 'B1', q: 'J\'___ dû t\'appeler hier.', o: ['aurais', 'aurai', 'avais'], nl: 'Ik had je gisteren moeten bellen.' },
    { lv: 'B1', q: 'C\'est le livre ___ je t\'ai parlé.', o: ['dont', 'que', 'qui'], nl: 'Dat is het boek waarover ik je verteld heb.' },
    { lv: 'B1', q: 'Dis-moi ___ tu veux.', o: ['ce que', 'ce qui', 'quoi que'], nl: 'Zeg me wat je wilt.' },
    { lv: 'B1', q: 'Bien qu\'il ___ malade, il travaille.', o: ['soit', 'est', 'était'], nl: 'Hoewel hij ziek is, werkt hij.' },
    { lv: 'B1', q: 'Elle s\'est ___ les mains.', o: ['lavé', 'lavée', 'lavées'], nl: 'Ze heeft haar handen gewassen.' }
  ]);

  /* Vrije gesprekken met Profe Lupe. */
  S.scenarios = [
    { id: 'fr-nl-free', icon: '💬', lv: 'A1', title: 'Vrij gesprek', place: 'Frankrijk 🇫🇷', role: 'You are a friendly French person (choose a city and say it at the start). Have a natural conversation in French about daily life, hobbies and plans, adapted to the learner’s level.', goal: 'Praat over wat je wilt.' },
    { id: 'fr-nl-boulangerie', icon: '🥖', lv: 'A1', title: 'Bij de bakker', place: 'Paris 🇫🇷', role: 'You are Madame Leroy, a kind baker in a Paris boulangerie. Greet the customer, ask what they would like, say the price in euros and wish them a good day. Use vous and simple French.', goal: 'Groet, bestel brood en iets lekkers, betaal en neem afscheid.' },
    { id: 'fr-nl-weekend', icon: '🕰️', lv: 'A2', title: 'Je weekend vertellen', place: 'Lyon 🇫🇷', role: 'You are Julien, a coworker in Lyon. It is Monday morning. Ask what the learner did on the weekend and ask follow-up questions in the passé composé and imparfait. Use tu.', goal: 'Vertel wat je in het weekend hebt gedaan en reageer op zijn verhaal.' },
    { id: 'fr-nl-medecin', icon: '🩺', lv: 'A2', title: 'Bij de huisarts', place: 'Bruxelles 🇧🇪', role: 'You are Docteur Lambert, a calm general practitioner in Brussels. Ask the patient what is wrong, since when, and give simple advice (il faut…, vous devez…). Use vous.', goal: 'Leg uit wat je klachten zijn en vraag wat je moet doen.' },
    { id: 'fr-nl-entretien', icon: '💼', lv: 'B1', title: 'Sollicitatiegesprek', place: 'Genève 🇨🇭', role: 'You are Madame Favre, an HR manager in Geneva interviewing the learner. Ask about experience, strengths, why they want the job, and a hypothetical (Que feriez-vous si… ?). Use vous.', goal: 'Vertel over je ervaring en beantwoord een «wat zou u doen als»-vraag.' },
    { id: 'fr-nl-debat', icon: '🗳️', lv: 'B1', title: 'Discussie: stad of platteland', place: 'Montréal 🇨🇦', role: 'You are Étienne from Montréal, who is convinced that life in a big city is better than in the countryside. Discuss it with the learner: give your opinion, ask for theirs, and gently challenge their arguments. Use tu.', goal: 'Geef je mening met argumenten en reageer op de zijne.' }
  ];

  /* Uitdrukking van de dag: [Frans, Nederlands, vlag]. */
  S.phrases = T([
    ['Ce n\'est pas la mer à boire.', 'Zo moeilijk is het niet. (letterlijk: het is niet de zee leegdrinken)', '🇫🇷'],
    ['Il pleut des cordes.', 'Het regent pijpenstelen. (letterlijk: het regent touwen)', '🇫🇷'],
    ['J\'ai un chat dans la gorge.', 'Ik heb een kikker in mijn keel. (in het Frans is het een kat)', '🇫🇷'],
    ['Ça coûte les yeux de la tête.', 'Dat kost een fortuin. (letterlijk: de ogen uit je hoofd)', '🇫🇷'],
    ['Avoir le cafard.', 'In de put zitten. (letterlijk: de kakkerlak hebben)', '🇫🇷'],
    ['Poser un lapin à quelqu\'un.', 'Iemand laten zitten, niet komen opdagen. (letterlijk: een konijn neerzetten)', '🇫🇷'],
    ['Ce n\'est pas mes oignons.', 'Dat zijn mijn zaken niet. (letterlijk: mijn uien)', '🇫🇷'],
    ['Revenons à nos moutons.', 'Laten we terugkomen op het onderwerp. (letterlijk: op onze schapen)', '🇫🇷'],
    ['Il n\'y a pas le feu au lac.', 'Er is geen haast bij. (letterlijk: het meer staat niet in brand)', '🇨🇭'],
    ['Il drache !', 'Het giet!', '🇧🇪'],
    ['Avoir un coup de foudre.', 'Op slag verliefd worden. (letterlijk: een blikseminslag krijgen)', '🇫🇷'],
    ['C\'est le fun !', 'Dat is leuk!', '🇨🇦'],
    ['Petit à petit, l\'oiseau fait son nid.', 'Stukje bij beetje kom je er. (letterlijk: beetje bij beetje bouwt de vogel zijn nest)', '🇫🇷'],
    ['Quand on parle du loup…', 'Als je over de duivel spreekt… (in het Frans is het de wolf)', '🇫🇷'],
    ['On est ensemble.', 'We staan er samen voor.', '🇸🇳'],
    ['Avoir la pêche.', 'Barsten van de energie. (letterlijk: de perzik hebben)', '🇫🇷']
  ]);
})(window.SPT);
