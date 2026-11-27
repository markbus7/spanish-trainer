/* Frans voor Nederlandstaligen — niveau B2, units 1–5 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-cond-presse': 'conditionnel voor onbevestigd nieuws', 'fr-nominal': 'nominalisatie (van werkwoord naar zelfstandig naamwoord)', 'fr-subj-passe': 'subjonctif passé',
    'fr-subj-ind': 'subjonctif of indicatif', 'fr-hyp': 'voorwaarden: à condition que, à moins que, au cas où', 'fr-ne-expl': 'ne explétif (zonder ontkenning)',
    'fr-accord-pp': 'overeenkomst van het voltooid deelwoord', 'fr-passe-simple': 'passé simple herkennen', 'fr-concession': 'tegenstelling en toegeving (pourtant, malgré, bien que)', 'fr-avoir-beau': 'avoir beau + infinitief'
  });

  /* ───────────────────────── B2 · 1 ───────────────────────── */
  U({
    id: "fr-b2-01", level: "B2", icon: "🗞️", title: "À la une", nl: "Nieuws en media: wat zeker is en wat niet",
    goals: ["Nieuwsberichten en krantenkoppen begrijpen", "Onbevestigd nieuws herkennen aan de conditionnel", "Krantenkoppen maken met een zelfstandig naamwoord", "Over betrouwbaarheid van bronnen praten"],
    vocab: [
      ["l'actualité", "het nieuws / de actualiteit"], ["à la une", "op de voorpagina"], ["le titre", "de kop"], ["le quotidien", "het dagblad"], ["le média", "het medium"], ["la chaîne", "de zender"],
      ["le journaliste / la journaliste", "de journalist"], ["l'enquête", "het onderzoek"], ["la source", "de bron"], ["fiable", "betrouwbaar"], ["la rumeur", "het gerucht"], ["l'infox", "het nepnieuws"],
      ["vérifier", "controleren / nagaan"], ["annoncer", "aankondigen"], ["révéler", "onthullen"], ["affirmer", "beweren / verklaren"], ["démentir", "ontkennen / tegenspreken"], ["selon", "volgens"],
      ["le témoin", "de getuige"], ["la manifestation", "de demonstratie"], ["la grève", "de staking"], ["la hausse", "de stijging"], ["la baisse", "de daling"], ["le chômage", "de werkloosheid"],
      ["le fait divers", "het gemengd bericht (ongeluk, misdaad)"], ["en direct", "live"], ["s'informer", "zich op de hoogte houden"], ["l'abonnement", "het abonnement"]
    ],
    grammar: [
      { t: "De conditionnel voor onbevestigd nieuws", es: "Le conditionnel journalistique",
        html: `<p>Je kent de conditionnel als «zou»: <i>je voudrais</i>, <i>si j'avais le temps, je voyagerais</i>. In het nieuws heeft hij nog een derde functie: de journalist geeft aan dat iets <b>nog niet bevestigd</b> is. Het Nederlands gebruikt daar «zou», «naar verluidt» of «volgens …».</p>
<p><b>Feit:</b> <i>Le ministre <b>a démissionné</b>.</i> (De minister is afgetreden.)<br><b>Onbevestigd:</b> <i>Le ministre <b>aurait démissionné</b>.</i> (De minister zou zijn afgetreden.)</p>
<p><b>Nu of toekomst:</b> conditionnel présent. <i>Le président <b>serait</b> malade.</i> (zou ziek zijn) · <i>La loi <b>entrerait</b> en vigueur en mai.</i><br><b>Verleden:</b> conditionnel passé. <i>L'accident <b>aurait fait</b> trois blessés.</i> (Bij het ongeluk zouden drie gewonden zijn gevallen.)</p>
<p>Vaak staat er een bronvermelding bij: <b>selon</b> la police, <b>d'après</b> nos informations, <b>il semblerait que</b>…</p>
<p>⚠️ <b>Let op:</b> voor Nederlanders voelt dit vertrouwd, maar het Frans gebruikt het <b>veel vaker</b> en zonder extra woord. Lees je een conditionnel in een krant zonder <i>si</i>-zin in de buurt, dan betekent het bijna altijd: «dit is niet zeker». Wie hem overslaat, leest een gerucht als een feit.</p>
<p>⚠️ <b>Uitzondering:</b> na <i>selon</i> of <i>d'après</i> mag ook de gewone tijd staan als de bron zelf zeker is: <i>Selon Météo-France, il <b>pleuvra</b> demain.</i> Waarom? Dan verwijst <i>selon</i> alleen naar wie het zegt; de conditionnel voegt er twijfel van de journalist aan toe.</p>`,
        table: [["zeker", "onbevestigd", "vertaling"], ["Il est à Paris.", "Il serait à Paris.", "Hij zou in Parijs zijn."], ["Elle a quitté le pays.", "Elle aurait quitté le pays.", "Ze zou het land hebben verlaten."], ["Les prix vont baisser.", "Les prix baisseraient.", "De prijzen zouden gaan dalen."]],
        ex: [["Selon nos informations, le suspect aurait pris la fuite.", "Volgens onze informatie zou de verdachte gevlucht zijn."], ["Le film sortirait en décembre.", "De film zou in december uitkomen."]] },
      { t: "Krantenkoppen: van werkwoord naar zelfstandig naamwoord", es: "La nominalisation",
        html: `<p>Franse koppen en formele teksten gebruiken graag een <b>zelfstandig naamwoord</b> waar je in een gesprek een werkwoord zou gebruiken. <i>Les prix augmentent</i> wordt in de kop <b>Augmentation des prix</b>. Dat heet nominalisatie.</p>
<p>De belangrijkste achtervoegsels:</p>
<p><b>-tion / -ation</b> (vrouwelijk): <i>augmenter → l'augmentation</i>, <i>manifester → la manifestation</i>, <i>construire → la construction</i><br><b>-ment</b> (mannelijk): <i>changer → le changement</i>, <i>licencier → le licenciement</i> (ontslag)<br><b>-age</b> (mannelijk): <i>atterrir → l'atterrissage</i>, <i>démarrer → le démarrage</i><br><b>-ure</b> (vrouwelijk): <i>ouvrir → l'ouverture</i>, <i>fermer → la fermeture</i><br><b>zonder achtervoegsel</b>: <i>hausser → la hausse</i>, <i>baisser → la baisse</i>, <i>arrêter → l'arrêt</i>, <i>voler → le vol</i></p>
<p>Het onderwerp of lijdend voorwerp van het werkwoord komt erachter met <b>de</b>: <i>Le musée ouvre</i> → <i>Ouverture <b>du</b> musée</i>. In koppen valt het lidwoord vooraan vaak weg.</p>
<p>⚠️ <b>Uitzonderingen die je moet kennen:</b> sommige zelfstandige naamwoorden lijken helemaal niet op hun werkwoord: <i>partir → le <b>départ</b></i>, <i>mourir → la <b>mort</b></i>, <i>naître → la <b>naissance</b></i>, <i>choisir → le <b>choix</b></i>, <i>perdre → la <b>perte</b></i>, <i>essayer → l'<b>essai</b></i>. Waarom? Ze zijn niet van het Franse werkwoord afgeleid, maar apart uit het Latijn geërfd.</p>`,
        table: [["zin", "kop"], ["Le chômage baisse.", "Baisse du chômage"], ["Le président arrive à Dakar.", "Arrivée du président à Dakar"], ["L'usine ferme.", "Fermeture de l'usine"], ["Les trains partent en retard.", "Départ retardé des trains"]],
        ex: [["Hausse des prix de l'énergie", "Energieprijzen stijgen"], ["Démission surprise du ministre", "Minister treedt onverwacht af"]] }
    ],
    dialogue: {
      t: "À la rédaction", place: "Paris 🇫🇷",
      lines: [
        ["Camille", "Sanne, tu as vu ? Selon un site belge, le maire aurait démissionné ce matin.", "Sanne, heb je het gezien? Volgens een Belgische site zou de burgemeester vanochtend zijn afgetreden."],
        ["Sanne", "« Aurait » ? Donc ce n'est pas confirmé ?", "'Zou'? Dus het is niet bevestigd?"],
        ["Camille", "Exactement. Pour l'instant, c'est une rumeur. La mairie n'a ni confirmé ni démenti.", "Precies. Voorlopig is het een gerucht. Het gemeentehuis heeft het bevestigd noch ontkend."],
        ["Sanne", "Et la source, elle est fiable ?", "En de bron, is die betrouwbaar?"],
        ["Camille", "Pas vraiment. Il faut vérifier avant de publier. Tu peux appeler la mairie ?", "Niet echt. We moeten het nagaan voor we publiceren. Kun jij het gemeentehuis bellen?"],
        ["Sanne", "Bien sûr. Et si c'est vrai, on met quoi comme titre ?", "Natuurlijk. En als het waar is, wat zetten we dan als kop?"],
        ["Camille", "Quelque chose de court : « Démission du maire ». Sans verbe, comme toujours.", "Iets korts: 'Aftreden burgemeester'. Zonder werkwoord, zoals altijd."],
        ["Sanne", "D'accord. Ah, j'ai quelqu'un au téléphone… Oui ? Merci, madame.", "Oké. Ah, ik heb iemand aan de lijn… Ja? Dank u, mevrouw."],
        ["Camille", "Alors ?", "En?"],
        ["Sanne", "C'est une infox. Le maire est en vacances, il n'a pas démissionné.", "Het is nepnieuws. De burgemeester is op vakantie, hij is niet afgetreden."],
        ["Camille", "Heureusement qu'on a vérifié. Bravo !", "Gelukkig hebben we het gecontroleerd. Goed gedaan!"]
      ],
      q: [
        { t: "mc", q: "Pourquoi Camille dit-elle « aurait démissionné » ?", o: ["Parce que l'information n'est pas confirmée", "Parce que c'est du passé", "Parce que c'est poli"] },
        { t: "mc", q: "Que fait Sanne ?", o: ["Elle appelle la mairie", "Elle publie l'article", "Elle écrit au maire"] },
        { t: "mc", q: "Où est le maire en réalité ?", o: ["En vacances", "À l'hôpital", "En Belgique"] }
      ]
    },
    culture: { t: "Kranten, de AFP en het journaal van 20 uur", html: `<p>De grote landelijke dagbladen zijn <b>Le Monde</b> (verschijnt 's middags, met de datum van de volgende dag), <b>Le Figaro</b> (rechts van het midden) en <b>Libération</b> (links). De meest gelezen krant van het land is echter regionaal: <b>Ouest-France</b>. De satirische <b>Canard enchaîné</b> onthult al meer dan honderd jaar politieke schandalen en heeft geen advertenties.</p>
<p>Veel nieuws komt van het persbureau <b>AFP</b> (Agence France-Presse), een van de drie grootste ter wereld. En het televisiejournaal van acht uur 's avonds heet simpelweg <b>le 20 heures</b>: een vaste afspraak in veel Franse huiskamers.</p>
<p>In België lees je <i>Le Soir</i>, in Zwitserland <i>Le Temps</i>, in Québec <i>Le Devoir</i> en <i>La Presse</i>.</p>` },
    ex: [
      { t: "cloze", s: "Selon la police, le suspect ___ quitté la France. (onbevestigd)", a: ["aurait"], o: ["aurait", "aura", "avait"], nl: "Volgens de politie zou de verdachte Frankrijk hebben verlaten.", x: "Onbevestigd nieuws in het verleden: conditionnel passé.", tag: "fr-cond-presse" },
      { t: "cloze", s: "Le président ___ malade, d'après un journal italien.", a: ["serait"], o: ["serait", "sera", "soit"], nl: "De president zou ziek zijn, volgens een Italiaanse krant.", tag: "fr-cond-presse" },
      { t: "cloze", s: "L'accident aurait ___ trois blessés.", a: ["fait"], o: ["fait", "faire", "faisait"], nl: "Bij het ongeluk zouden drie gewonden zijn gevallen.", tag: "fr-cond-presse" },
      { t: "cloze", s: "Les prix augmentent. → ___ des prix", a: ["Augmentation"], o: ["Augmentation", "Augmentement", "Augmentage"], nl: "Prijzen stijgen.", x: "augmenter → l'augmentation (vrouwelijk, op -ation).", tag: "fr-nominal" },
      { t: "cloze", s: "Le train part à huit heures. → ___ du train à huit heures", a: ["Départ"], o: ["Départ", "Partement", "Partage"], nl: "Vertrek van de trein om acht uur.", x: "Uitzondering: partir → le départ, apart uit het Latijn geërfd.", tag: "fr-nominal" },
      { t: "cloze", s: "L'usine ferme. → ___ de l'usine", a: ["Fermeture"], o: ["Fermeture", "Fermation", "Fermement"], nl: "Sluiting van de fabriek.", tag: "fr-nominal" },
      { t: "mc", q: "Welke zin zegt dat het nieuws NIET zeker is?", o: ["Le ministre aurait démissionné.", "Le ministre a démissionné.", "Le ministre avait démissionné."], tag: "fr-cond-presse" },
      { t: "mc", q: "Wat is het zelfstandig naamwoord bij «choisir»?", o: ["le choix", "la choisissement", "la choisition"], x: "Uitzondering: choisir → le choix.", tag: "fr-nominal" },
      { t: "mc", q: "Wat betekent «démentir»?", o: ["ontkennen, tegenspreken", "onthullen", "aankondigen"], tag: "fr-voc" },
      { t: "tr", nl: "De burgemeester zou zijn afgetreden.", a: ["Le maire aurait démissionné."], tag: "fr-cond-presse" },
      { t: "tr", nl: "Is de bron betrouwbaar?", a: ["La source est-elle fiable ?", "Est-ce que la source est fiable ?", "La source est fiable ?"], tag: "fr-voc" },
      { t: "tr", nl: "Het is een gerucht.", a: ["C'est une rumeur."], tag: "fr-voc" },
      { t: "order", s: "Il faut vérifier la source avant de publier.", nl: "Je moet de bron nagaan voor je publiceert.", tag: "fr-ordre" },
      { t: "match", p: [["augmenter", "l'augmentation"], ["partir", "le départ"], ["ouvrir", "l'ouverture"], ["changer", "le changement"], ["baisser", "la baisse"]], tag: "fr-nominal" }
    ],
    reading: {
      t: "Trois questions avant de partager", type: "Blogartikel",
      p: [
        ["Chaque jour, des milliers de fausses informations circulent sur les réseaux sociaux. Une photo ancienne, un titre choquant, et en quelques heures une rumeur devient « une vérité ». Selon une étude, une infox se répandrait six fois plus vite qu'une information vérifiée.", "Elke dag gaan duizenden valse berichten rond op sociale media. Een oude foto, een schokkende kop, en binnen een paar uur wordt een gerucht 'een waarheid'. Volgens een onderzoek zou nepnieuws zich zes keer sneller verspreiden dan gecontroleerde informatie."],
        ["Avant de partager, posez-vous trois questions. Qui parle ? Un média connu, ou un site que personne ne connaît ? D'où vient l'information ? Une bonne enquête cite toujours ses sources. Et enfin : quel est le temps du verbe ? « Le ministre aurait menti » ne veut pas dire qu'il a menti.", "Stel jezelf drie vragen voor je iets deelt. Wie spreekt er? Een bekend medium, of een site die niemand kent? Waar komt de informatie vandaan? Een goed onderzoek noemt altijd zijn bronnen. En ten slotte: in welke tijd staat het werkwoord? 'De minister zou hebben gelogen' wil niet zeggen dat hij gelogen heeft."],
        ["Vérifier prend deux minutes. Démentir une rumeur prend des semaines. Alors, la prochaine fois que vous lirez un titre incroyable, respirez, cherchez, et seulement après, partagez.", "Controleren kost twee minuten. Een gerucht ontkrachten kost weken. Dus de volgende keer dat u een ongelooflijke kop leest: haal adem, zoek het op, en deel het pas daarna."]
      ],
      gl: [["circuler", "rondgaan"], ["se répandre", "zich verspreiden"], ["citer", "noemen / citeren"], ["mentir", "liegen"], ["partager", "delen"]],
      q: [
        { t: "mc", q: "Qu'est-ce qui se répandrait six fois plus vite ?", o: ["Une infox", "Une information vérifiée", "Une photo ancienne"] },
        { t: "mc", q: "Que fait toujours une bonne enquête ?", o: ["Elle cite ses sources", "Elle utilise des photos", "Elle a un titre choquant"] },
        { t: "mc", q: "Que signifie « Le ministre aurait menti » ?", o: ["Ce n'est pas certain", "Il a menti, c'est sûr", "Il mentira bientôt"] }
      ]
    },
    say: [["Selon la police, il aurait quitté le pays.", "Volgens de politie zou hij het land hebben verlaten."], ["La source est-elle fiable ?", "Is de bron betrouwbaar?"], ["Ce n'est qu'une rumeur.", "Het is maar een gerucht."], ["Il faut vérifier avant de partager.", "Je moet controleren voor je deelt."]],
    task: { nl: "Schrijf een kort nieuwsbericht (4 of 5 zinnen) over iets wat nog niet bevestigd is. Geef het een kop zonder werkwoord en gebruik minstens twee keer de conditionnel.", model: "Fermeture surprise de la gare centrale. Selon nos informations, la gare centrale serait fermée depuis ce matin à cause d'un problème technique. Plusieurs trains auraient été annulés. La direction n'a pas encore confirmé. D'après un témoin, la situation reviendrait à la normale vers midi." },
    scenario: { nl: "Je loopt stage op een Franse nieuwsredactie. Een collega komt met een gerucht; bespreek of jullie het publiceren.", role: "You are Camille, an experienced journalist at a Paris newsroom. The learner is a Dutch intern. Bring up an unconfirmed story (a strike, a resignation, a celebrity moving abroad) using the conditionnel (il aurait…, ce serait…) and selon / d'après. Ask the learner how to verify it, whether the source is reliable, and what headline (a noun phrase without a verb) they would propose. Speak natural French at B2 level and correct gently if they state rumours as facts.", goal: "Vraag of de bron betrouwbaar is, formuleer het gerucht met de conditionnel en stel een kop zonder werkwoord voor." }
  });

  /* ───────────────────────── B2 · 2 ───────────────────────── */
  U({
    id: "fr-b2-02", level: "B2", icon: "💼", title: "Bien que j'aie tout essayé", nl: "Werk en carrière: subjonctif passé, en wanneer juist geen subjonctif",
    goals: ["Over loopbaan, sollicitaties en werkdruk praten", "De subjonctif passé maken en gebruiken", "Kiezen tussen subjonctif en indicatif na lastige uitdrukkingen", "Gevoelens over iets wat al gebeurd is uitdrukken"],
    vocab: [
      ["la carrière", "de loopbaan"], ["le poste", "de functie / baan"], ["l'entretien d'embauche", "het sollicitatiegesprek"], ["embaucher", "aannemen"], ["licencier", "ontslaan"], ["démissionner", "ontslag nemen"],
      ["le CDI", "het vaste contract"], ["le CDD", "het tijdelijke contract"], ["le salaire", "het salaris"], ["l'augmentation", "de loonsverhoging"], ["la promotion", "de promotie"], ["le télétravail", "het thuiswerken"],
      ["le patron / la patronne", "de baas"], ["le collègue / la collègue", "de collega"], ["l'équipe", "het team"], ["la réunion", "de vergadering"], ["le délai", "de deadline / termijn"], ["la charge de travail", "de werkdruk"],
      ["postuler", "solliciteren"], ["réussir", "slagen"], ["échouer", "mislukken"], ["regretter", "betreuren"], ["s'attendre à", "verwachten"], ["il est probable que", "het is waarschijnlijk dat"],
      ["il est possible que", "het is mogelijk dat"], ["après que", "nadat"], ["avant que", "voordat"], ["surmené / surmenée", "overwerkt"]
    ],
    grammar: [
      { t: "De subjonctif passé", es: "Le subjonctif passé",
        html: `<p>De subjonctif die je kent (<i>que tu viennes</i>) gaat over <b>nu of later</b>. Gaat het gevoel, de twijfel of de wens over iets wat <b>al gebeurd is</b>, dan gebruik je de <b>subjonctif passé</b>.</p>
<p><b>Vorm:</b> <i>avoir</i> of <i>être</i> in de subjonctif + voltooid deelwoord. Precies de passé composé, maar met het hulpwerkwoord in de subjonctif: <i>j'ai fini → que j'<b>aie</b> fini</i> · <i>elle est partie → qu'elle <b>soit</b> partie</i>.</p>
<p><i>Je suis content que tu <b>viennes</b>.</i> (dat je komt: nu of straks)<br><i>Je suis content que tu <b>sois venu</b>.</i> (dat je gekomen bent: al gebeurd)</p>
<p><i>Je regrette qu'il <b>ait démissionné</b>.</i> · <i>Bien que j'<b>aie</b> tout <b>essayé</b>, ça n'a pas marché.</i> · <i>C'est le meilleur poste que j'<b>aie</b> jamais <b>eu</b>.</i></p>
<p>⚠️ <b>Let op:</b> het gaat niet om de tijd van de hoofdzin, maar om de <b>volgorde</b>. Is de handeling in de bijzin eerder afgerond dan het gevoel in de hoofdzin? Dan subjonctif passé, ook als de hoofdzin in de verleden tijd staat: <i>J'étais surpris qu'elle <b>soit partie</b>.</i></p>
<p>⚠️ <b>Uitzondering na de overtreffende trap:</b> na <i>le seul, le premier, le meilleur, le plus …</i> staat de bijzin in de subjonctif: <i>C'est la seule personne qui m'<b>ait aidé</b>.</i> Waarom? Zo'n uitspraak is een persoonlijk oordeel, geen neutraal feit; de subjonctif laat die subjectiviteit zien.</p>`,
        table: [["", "avoir", "être"], ["que je / j'", "aie fini", "sois venu(e)"], ["que tu", "aies fini", "sois venu(e)"], ["qu'il / elle", "ait fini", "soit venu / venue"], ["que nous", "ayons fini", "soyons venu(e)s"], ["que vous", "ayez fini", "soyez venu(e)(s)"], ["qu'ils / elles", "aient fini", "soient venus / venues"]],
        ex: [["Je suis ravi que vous ayez accepté le poste.", "Ik ben heel blij dat u de functie hebt aangenomen."], ["Dommage qu'elle soit partie si tôt.", "Jammer dat ze zo vroeg is weggegaan."]] },
      { t: "Subjonctif of indicatif? De twijfelgevallen", es: "Subjonctif ou indicatif ?",
        html: `<p>Op B1 leerde je: wens, gevoel, twijfel en noodzaak → subjonctif. Op B2 moet je de randgevallen kennen, want daar maken ook Fransen fouten.</p>
<p><b>Waarschijnlijk of mogelijk?</b><br><i>Il est <b>probable</b> qu'il <b>viendra</b>.</i> → indicatif (de spreker verwacht het)<br><i>Il est <b>possible</b> qu'il <b>vienne</b>.</i> → subjonctif (het kan, maar het is open)<br><i>Il est <b>peu probable</b> qu'il <b>vienne</b>.</i> → subjonctif (twijfel overheerst)</p>
<p><b>Voor of na?</b><br><i><b>Avant que</b> tu <b>partes</b></i> → subjonctif (het is nog niet gebeurd)<br><i><b>Après que</b> tu <b>es parti</b></i> → indicatif (het is gebeurd, dus een feit)</p>
<p>⚠️ <b>Uitzondering waar je op moet letten:</b> veel Fransen zeggen <i>après qu'il <b>soit</b> parti</i>, naar het voorbeeld van <i>avant que</i>. In verzorgd Frans en op examens is alleen de <b>indicatif</b> goed. Waarom? Wat ná iets komt, is al gebeurd en dus werkelijkheid; daar is geen reden voor een subjonctif.</p>
<p><b>Hopen en zich verwachten:</b><br><i>J'<b>espère</b> que tu <b>réussiras</b>.</i> → indicatif<br><i>Je <b>m'attends à ce que</b> tu <b>réussisses</b>.</i> → subjonctif<br><i>Je <b>doute</b> qu'il <b>ait</b> raison</i> → subjonctif, maar <i>Je <b>me doute</b> qu'il <b>a</b> raison</i> (ik vermoed wel dat…) → indicatif!</p>
<p><b>Zeggen, denken, vinden:</b> bevestigend → indicatif; ontkennend of vragend met inversie → subjonctif: <i>Je trouve que c'<b>est</b> juste. / Je ne trouve pas que ce <b>soit</b> juste.</i></p>`,
        table: [["uitdrukking", "wijs", "voorbeeld"], ["il est probable que", "indicatif", "Il est probable qu'elle sera embauchée."], ["il est possible que", "subjonctif", "Il est possible qu'elle soit embauchée."], ["après que", "indicatif", "Après qu'il a signé, on a fêté ça."], ["avant que", "subjonctif", "Avant qu'il signe, relis le contrat."], ["espérer que", "indicatif", "J'espère qu'il viendra."], ["douter que", "subjonctif", "Je doute qu'il vienne."]],
        ex: [["Il est probable que la réunion sera annulée.", "Waarschijnlijk wordt de vergadering afgelast."], ["Je ne pense pas que ce soit une bonne idée.", "Ik denk niet dat dat een goed idee is."]] }
    ],
    dialogue: {
      t: "Après l'entretien", place: "Lyon 🇫🇷",
      lines: [
        ["Karim", "Alors, cet entretien d'embauche ? Raconte !", "En, dat sollicitatiegesprek? Vertel!"],
        ["Sanne", "Je ne sais pas trop. Je doute qu'ils aient aimé mes réponses.", "Ik weet het niet zo goed. Ik betwijfel of ze mijn antwoorden goed vonden."],
        ["Karim", "Pourquoi ? Tu t'étais bien préparée.", "Waarom? Je had je goed voorbereid."],
        ["Sanne", "Oui, mais c'est le premier entretien que j'aie passé en français. J'ai cherché mes mots.", "Ja, maar het is het eerste gesprek dat ik in het Frans heb gevoerd. Ik zocht naar woorden."],
        ["Karim", "Je suis sûr que tu as fait bonne impression. Ils t'ont parlé du salaire ?", "Ik weet zeker dat je een goede indruk hebt gemaakt. Hebben ze het over het salaris gehad?"],
        ["Sanne", "Oui. C'est un CDD de six mois, avec deux jours de télétravail. Il est possible que ça devienne un CDI.", "Ja. Het is een tijdelijk contract van zes maanden, met twee dagen thuiswerken. Het kan zijn dat het een vast contract wordt."],
        ["Karim", "C'est pas mal ! Et ils te répondent quand ?", "Niet slecht! En wanneer geven ze antwoord?"],
        ["Sanne", "Avant que la semaine se termine. Je regrette de ne pas avoir posé plus de questions sur l'équipe.", "Voordat de week om is. Ik heb er spijt van dat ik niet meer vragen over het team heb gesteld."],
        ["Karim", "Tu les poseras après qu'ils t'auront embauchée !", "Die stel je nadat ze je hebben aangenomen!"],
        ["Sanne", "J'espère que tu as raison. En tout cas, je suis contente que ce soit fini.", "Ik hoop dat je gelijk hebt. In elk geval ben ik blij dat het voorbij is."]
      ],
      q: [
        { t: "mc", q: "De quoi Sanne doute-t-elle ?", o: ["Que ses réponses aient plu", "Que le salaire soit bon", "Que Karim ait raison"] },
        { t: "mc", q: "Quel type de contrat propose l'entreprise ?", o: ["Un CDD de six mois", "Un CDI", "Un stage"] },
        { t: "mc", q: "Que regrette Sanne ?", o: ["De ne pas avoir posé plus de questions", "D'avoir postulé", "D'avoir parlé du salaire"] }
      ]
    },
    culture: { t: "CDI, 35 uur en het recht om offline te zijn", html: `<p>In Frankrijk is het <b>CDI</b> (<i>contrat à durée indéterminée</i>) de heilige graal: zonder vast contract is het moeilijk een appartement te huren of een lening te krijgen. Een <b>CDD</b> (<i>à durée déterminée</i>) is tijdelijk.</p>
<p>De wettelijke werkweek is <b>35 uur</b>. Wie meer werkt, krijgt vaak extra vrije dagen, de zogenoemde <b>RTT</b>. Sinds 2017 bestaat ook <i>le droit à la déconnexion</i>: bedrijven moeten afspraken maken over wanneer werknemers géén mail hoeven te beantwoorden.</p>
<p>Solliciteren gaat formeel: een <b>CV</b> (vaak met foto) en een <b>lettre de motivation</b>, en in het gesprek zeg je <i>vous</i>. De lunchpauze is heilig; aan je bureau eten wordt als ongezellig gezien.</p>` },
    ex: [
      { t: "cloze", s: "Je suis content que tu ___ venu hier.", a: ["sois"], o: ["sois", "es", "aies"], nl: "Ik ben blij dat je gisteren gekomen bent.", x: "Al gebeurd: subjonctif passé; venir gaat met être.", tag: "fr-subj-passe" },
      { t: "cloze", s: "Je regrette qu'il ___ démissionné.", a: ["ait"], o: ["ait", "a", "soit"], nl: "Ik betreur het dat hij ontslag heeft genomen.", tag: "fr-subj-passe" },
      { t: "cloze", s: "C'est le meilleur film que j'___ jamais vu.", a: ["aie"], o: ["aie", "ai", "avais"], nl: "Het is de beste film die ik ooit heb gezien.", x: "Uitzondering: na een overtreffende trap volgt de subjonctif, want het is een persoonlijk oordeel.", tag: "fr-subj-passe" },
      { t: "cloze", s: "Il est probable qu'elle ___ embauchée.", a: ["sera"], o: ["sera", "soit", "serait"], nl: "Waarschijnlijk wordt ze aangenomen.", x: "Probable = de spreker verwacht het: indicatif.", tag: "fr-subj-ind" },
      { t: "cloze", s: "Il est possible qu'elle ___ en retard.", a: ["soit"], o: ["soit", "est", "sera"], nl: "Het kan zijn dat ze te laat is.", tag: "fr-subj-ind" },
      { t: "cloze", s: "Après qu'il ___ signé le contrat, nous avons fêté ça.", a: ["a"], o: ["a", "ait", "aie"], nl: "Nadat hij het contract had getekend, hebben we het gevierd.", x: "Uitzondering op je gevoel: après que krijgt de indicatif, want het is al gebeurd.", tag: "fr-subj-ind" },
      { t: "mc", q: "Welke zin is correct?", o: ["J'espère que tu réussiras.", "J'espère que tu réussisses.", "J'espère que tu aies réussi."], x: "Espérer que + indicatif.", tag: "fr-subj-ind" },
      { t: "mc", q: "Welke zin betekent «Ik vermoed dat hij gelijk heeft»?", o: ["Je me doute qu'il a raison.", "Je doute qu'il ait raison.", "Je ne doute pas qu'il ait raison."], x: "Se douter que = vermoeden (indicatif); douter que = betwijfelen (subjonctif).", tag: "fr-subj-ind" },
      { t: "mc", q: "Wat is een CDI?", o: ["een vast contract", "een tijdelijk contract", "een stagecontract"], tag: "fr-voc" },
      { t: "tr", nl: "Ik ben blij dat het voorbij is.", a: ["Je suis content que ce soit fini.", "Je suis contente que ce soit fini."], tag: "fr-subj-passe" },
      { t: "tr", nl: "Jammer dat ze vertrokken is.", a: ["Dommage qu'elle soit partie.", "C'est dommage qu'elle soit partie."], tag: "fr-subj-passe" },
      { t: "tr", nl: "Ik betwijfel of hij het begrepen heeft.", a: ["Je doute qu'il ait compris."], tag: "fr-subj-passe" },
      { t: "order", s: "Il est possible que ça devienne un CDI.", nl: "Het kan zijn dat het een vast contract wordt.", tag: "fr-ordre" },
      { t: "match", p: [["embaucher", "aannemen"], ["licencier", "ontslaan"], ["postuler", "solliciteren"], ["échouer", "mislukken"], ["le délai", "de termijn"]], tag: "fr-voc" }
    ],
    reading: {
      t: "J'ai quitté mon CDI", type: "Getuigenis",
      p: [
        ["Pendant dix ans, j'ai travaillé dans une grande banque à La Défense. Un bon salaire, un CDI, une équipe sympathique. Mes parents étaient fiers que j'aie réussi. Pourtant, chaque dimanche soir, j'avais mal au ventre.", "Tien jaar lang heb ik bij een grote bank in La Défense gewerkt. Een goed salaris, een vast contract, een leuk team. Mijn ouders waren trots dat ik geslaagd was. En toch had ik elke zondagavond buikpijn."],
        ["Un jour, après qu'on m'a refusé une promotion pour la troisième fois, j'ai compris. Je doutais que ce travail ait encore un sens pour moi. J'ai démissionné avant que le surmenage me rende malade. Tout le monde m'a dit que j'étais fou.", "Op een dag, nadat me voor de derde keer een promotie was geweigerd, begreep ik het. Ik betwijfelde of dit werk nog zin voor me had. Ik heb ontslag genomen voordat de overbelasting me ziek zou maken. Iedereen zei dat ik gek was."],
        ["Aujourd'hui, je suis boulanger à Annecy. Je gagne deux fois moins et je me lève à quatre heures. C'est la meilleure décision que j'aie jamais prise. Il est probable que je ne serai jamais riche, mais il est certain que je suis heureux.", "Nu ben ik bakker in Annecy. Ik verdien de helft en sta om vier uur op. Het is de beste beslissing die ik ooit heb genomen. Waarschijnlijk zal ik nooit rijk worden, maar het staat vast dat ik gelukkig ben."]
      ],
      gl: [["fier / fière", "trots"], ["le sens", "de zin / betekenis"], ["le surmenage", "de overbelasting"], ["fou / folle", "gek"], ["la décision", "de beslissing"]],
      q: [
        { t: "mc", q: "Pourquoi ses parents étaient-ils fiers ?", o: ["Parce qu'il avait réussi", "Parce qu'il était boulanger", "Parce qu'il avait démissionné"] },
        { t: "mc", q: "Quand a-t-il compris qu'il devait partir ?", o: ["Après le refus d'une troisième promotion", "Après une maladie", "Après un entretien d'embauche"] },
        { t: "mc", q: "Que pense-t-il de sa décision ?", o: ["C'est la meilleure qu'il ait prise", "Il la regrette", "Il doute encore"] }
      ]
    },
    say: [["Je suis content que tu sois venu.", "Ik ben blij dat je gekomen bent."], ["C'est la meilleure décision que j'aie jamais prise.", "Het is de beste beslissing die ik ooit heb genomen."], ["Il est possible que ça devienne un CDI.", "Het kan zijn dat het een vast contract wordt."], ["J'espère que tu as raison.", "Ik hoop dat je gelijk hebt."]],
    task: { nl: "Schrijf 5 zinnen over een beslissing in je werk of studie. Gebruik twee keer de subjonctif passé en één keer «il est probable que» of «il est possible que».", model: "Il y a deux ans, j'ai changé de travail. Mes collègues étaient surpris que j'aie démissionné. Bien que j'aie hésité longtemps, je ne regrette rien. Il est possible que je gagne moins qu'avant, mais il est probable que je resterai ici longtemps. C'est le meilleur choix que j'aie fait." },
    scenario: { nl: "Je hebt net een sollicitatiegesprek gehad in Lyon. Een vriend vraagt hoe het ging.", role: "You are Karim, a supportive friend in Lyon. The learner just had a job interview in French. Ask how it went, what the contract and salary are, what they regret, and what they expect. Use expressions that trigger the subjonctif passé (je suis content que tu aies…, dommage que…, c'est le meilleur… que tu aies…) and contrast il est probable que + indicatif with il est possible que + subjonctif. If the learner says 'après que' + subjonctif or 'j'espère que' + subjonctif, gently give the correct form.", goal: "Vertel hoe het gesprek ging, zeg één keer wat je betreurt of betwijfelt met de subjonctif passé en zeg wat waarschijnlijk of mogelijk is." }
  });

  /* ───────────────────────── B2 · 3 ───────────────────────── */
  U({
    id: "fr-b2-03", level: "B2", icon: "🌍", title: "À moins qu'on ne change", nl: "Klimaat en milieu: voorwaarden en het vreemde woordje ne",
    goals: ["Over klimaat, energie en afval praten", "Voorwaarden uitdrukken zonder si", "De ne explétif herkennen: een ne dat niet ontkent", "Zeggen wat er gebeurt, tenzij we iets doen"],
    vocab: [
      ["le réchauffement climatique", "de opwarming van de aarde"], ["l'environnement", "het milieu"], ["la planète", "de planeet"], ["la pollution", "de vervuiling"], ["les déchets", "het afval"], ["le tri", "het scheiden (van afval)"],
      ["recycler", "recyclen"], ["gaspiller", "verspillen"], ["l'énergie renouvelable", "de hernieuwbare energie"], ["le nucléaire", "de kernenergie"], ["l'éolienne", "de windmolen"], ["le panneau solaire", "het zonnepaneel"],
      ["la sécheresse", "de droogte"], ["l'inondation", "de overstroming"], ["la canicule", "de hittegolf"], ["l'incendie", "de brand"], ["la biodiversité", "de biodiversiteit"], ["l'espèce menacée", "de bedreigde soort"],
      ["réduire", "verminderen"], ["protéger", "beschermen"], ["à condition que", "op voorwaarde dat"], ["à moins que", "tenzij"], ["au cas où", "voor het geval dat"], ["pourvu que", "als … maar / mits"],
      ["sinon", "anders"], ["de peur que", "uit angst dat"], ["craindre", "vrezen"], ["l'empreinte carbone", "de CO2-voetafdruk"]
    ],
    grammar: [
      { t: "Voorwaarden zonder si", es: "L'expression de la condition",
        html: `<p>Je kent de drie <i>si</i>-zinnen. Verzorgd Frans heeft daarnaast een reeks voegwoorden die preciezer zijn. Elk vraagt een vaste wijs: dat is het lastige.</p>
<p><b>+ subjonctif</b><br><b>à condition que</b> (op voorwaarde dat): <i>Je viens <b>à condition que</b> tu <b>conduises</b>.</i><br><b>pourvu que</b> (mits; ook: als … maar): <i><b>Pourvu qu'</b>il ne <b>pleuve</b> pas !</i> (Als het maar niet regent!)<br><b>à moins que</b> (tenzij): <i>On ira à pied, <b>à moins qu'</b>il <b>pleuve</b>.</i><br><b>en admettant que / à supposer que</b> (aangenomen dat): <i><b>À supposer que</b> ce <b>soit</b> vrai…</i></p>
<p><b>+ conditionnel</b><br><b>au cas où</b> (voor het geval dat): <i>Prends un parapluie <b>au cas où</b> il <b>pleuvrait</b>.</i></p>
<p>⚠️ <b>Uitzondering:</b> <i>au cas où</i> is het enige voegwoord van voorwaarde dat de <b>conditionnel</b> krijgt, terwijl na <i>si</i> de conditionnel juist verboden is. Waarom? <i>Au cas où</i> betekent letterlijk «in het geval waarin»: het is een betrekkelijke bijzin over een denkbeeldig geval, en daar past «zou» bij.</p>
<p><b>+ infinitief</b> (zelfde onderwerp): <i>à condition <b>de</b></i>, <i>à moins <b>de</b></i>: <i>Tu réussiras <b>à condition de</b> travailler.</i></p>
<p><b>+ zelfstandig naamwoord:</b> <b>en cas de</b> (<i>en cas d'incendie</i>), <b>sans</b> (<i>Sans toi, je n'y arriverais pas</i>), <b>avec</b>. En los: <b>sinon</b> (anders): <i>Dépêche-toi, <b>sinon</b> on va rater le train.</i></p>`,
        table: [["voegwoord", "wijs", "voorbeeld"], ["si", "indicatif", "Si on agit, on peut réussir."], ["à condition que", "subjonctif", "À condition qu'on agisse."], ["à moins que", "subjonctif", "À moins qu'on (n')agisse."], ["pourvu que", "subjonctif", "Pourvu qu'on agisse à temps !"], ["au cas où", "conditionnel", "Au cas où on agirait trop tard."]],
        ex: [["On peut limiter le réchauffement à condition que tous les pays fassent un effort.", "We kunnen de opwarming beperken, op voorwaarde dat alle landen hun best doen."], ["Garde ton téléphone allumé au cas où j'aurais besoin de toi.", "Houd je telefoon aan voor het geval ik je nodig heb."]] },
      { t: "De ne explétif: een ne dat niets ontkent", es: "Le ne explétif",
        html: `<p>In verzorgd Frans kom je zinnen tegen als <i>Je crains qu'il <b>ne</b> soit trop tard.</i> Dat betekent <b>niet</b> «ik vrees dat het niet te laat is», maar gewoon: «ik vrees dat het te laat is». Dit losse <i>ne</i>, zonder <i>pas</i>, heet de <b>ne explétif</b>. Het heeft <b>geen betekenis</b>; het is een stijlkenmerk.</p>
<p>Je vindt het op vier plekken:</p>
<p>1️⃣ na werkwoorden van <b>vrees</b>: <i>craindre que, avoir peur que, de peur que</i>: <i>J'ai peur qu'il <b>ne</b> pleuve.</i><br>2️⃣ na <b>avant que</b> en <b>à moins que</b>: <i>Partons avant qu'il <b>ne</b> soit trop tard. À moins que tu <b>ne</b> préfères rester.</i><br>3️⃣ na een <b>vergelijking</b> van ongelijkheid: <i>C'est plus grave que je <b>ne</b> pensais.</i><br>4️⃣ na <b>empêcher que, éviter que</b>: <i>Il faut éviter que la situation <b>ne</b> s'aggrave.</i></p>
<p>⚠️ <b>Let op, het verschil met een echte ontkenning:</b> <i>Je crains qu'il <b>ne</b> vienne.</i> = ik vrees dat hij komt. <i>Je crains qu'il <b>ne</b> vienne <b>pas</b>.</i> = ik vrees dat hij niet komt. Alleen <i>ne … pas</i> ontkent.</p>
<p><b>Waarom bestaat dit?</b> Wie iets vreest, wenst eigenlijk dat het <b>niet</b> gebeurt; die verborgen ontkenning is in het Latijn al in de zin geslopen en nooit meer weggegaan. Het is altijd <b>facultatief</b>: je hoeft het zelf niet te gebruiken, maar je moet het wel kunnen lezen zonder de zin om te draaien.</p>`,
        table: [["zin", "betekenis"], ["J'ai peur qu'il ne soit malade.", "Ik ben bang dat hij ziek is."], ["J'ai peur qu'il ne soit pas là.", "Ik ben bang dat hij er niet is."], ["Finis avant qu'elle n'arrive.", "Maak het af voordat ze aankomt."], ["Il est plus riche qu'on ne croit.", "Hij is rijker dan men denkt."]],
        ex: [["Les scientifiques craignent que la température n'augmente de trois degrés.", "Wetenschappers vrezen dat de temperatuur met drie graden stijgt."], ["À moins qu'on ne réduise les émissions, la situation va s'aggraver.", "Tenzij we de uitstoot verminderen, wordt de situatie erger."]] }
    ],
    dialogue: {
      t: "Au marché bio", place: "Bruxelles 🇧🇪",
      lines: [
        ["Awa", "Tu as apporté ton sac ? Ici, ils ne donnent plus de sacs en plastique.", "Heb je je tas bij je? Hier geven ze geen plastic tassen meer."],
        ["Daan", "Oui, j'en ai toujours un sur moi, au cas où j'aurais des courses à faire.", "Ja, ik heb er altijd een bij me, voor het geval ik boodschappen moet doen."],
        ["Awa", "Bravo. Moi, j'essaie de réduire mes déchets, mais ce n'est pas facile.", "Goed zo. Ik probeer mijn afval te verminderen, maar dat is niet makkelijk."],
        ["Daan", "Tu crois vraiment que ça change quelque chose ? C'est une goutte d'eau.", "Denk je echt dat dat iets verandert? Het is een druppel op een gloeiende plaat."],
        ["Awa", "Ça change quelque chose à condition que tout le monde le fasse.", "Het verandert iets, op voorwaarde dat iedereen het doet."],
        ["Daan", "Justement. Je crains que les gens ne changent pas leurs habitudes, à moins qu'on ne les y oblige.", "Precies. Ik vrees dat mensen hun gewoontes niet veranderen, tenzij je ze ertoe dwingt."],
        ["Awa", "Tu es plus pessimiste que je ne pensais !", "Je bent pessimistischer dan ik dacht!"],
        ["Daan", "Réaliste. Cet été, on a eu une canicule et des inondations la même semaine.", "Realistisch. Deze zomer hadden we een hittegolf en overstromingen in dezelfde week."],
        ["Awa", "Raison de plus pour agir avant qu'il ne soit trop tard. Tiens, goûte cette fraise.", "Reden te meer om iets te doen voordat het te laat is. Hier, proef deze aardbei."],
        ["Daan", "Mmh ! D'accord, tu m'as convaincu. Pourvu qu'il en reste demain !", "Mmm! Oké, je hebt me overtuigd. Als er morgen nog maar zijn!"]
      ],
      q: [
        { t: "mc", q: "Pourquoi Daan a-t-il toujours un sac sur lui ?", o: ["Au cas où il aurait des courses à faire", "Parce qu'Awa le lui a demandé", "Parce qu'il vend des sacs"] },
        { t: "mc", q: "Que craint Daan ?", o: ["Que les gens ne changent pas leurs habitudes", "Que les gens changent trop vite", "Qu'il n'y ait plus de fraises"] },
        { t: "mc", q: "Que veut dire Awa par « avant qu'il ne soit trop tard » ?", o: ["Avant qu'il soit trop tard", "Avant qu'il ne soit pas trop tard", "Quand il n'est jamais trop tard"] }
      ]
    },
    culture: { t: "Kernenergie, statiegeld en de Belgische vuilniszak", html: `<p>Frankrijk haalt ongeveer twee derde van zijn stroom uit <b>kernenergie</b>, meer dan welk ander land ook. Daardoor is de Franse stroom CO2-arm, maar het debat over veiligheid en afval is nooit verstomd.</p>
<p>Sinds 2016 zijn wegwerptasjes van plastic in Franse winkels verboden, en supermarkten mogen onverkocht voedsel niet meer weggooien: ze moeten het aan voedselbanken geven. Dat heet de <i>loi anti-gaspillage</i>.</p>
<p>In België betaal je voor je huisvuil per <b>zak</b>: elke gemeente heeft haar eigen gekleurde zakken, en de beroemde blauwe <b>PMD-zak</b> (in het Frans <i>PMC</i>) is voor plastic, metaal en drankkartons. Wie de verkeerde zak buitenzet, vindt hem 's avonds terug met een sticker erop.</p>` },
    ex: [
      { t: "cloze", s: "Je viens à condition que tu ___ .", a: ["conduises"], o: ["conduises", "conduis", "conduiras"], nl: "Ik kom op voorwaarde dat jij rijdt.", x: "À condition que + subjonctif.", tag: "fr-hyp" },
      { t: "cloze", s: "Prends un parapluie au cas où il ___ .", a: ["pleuvrait"], o: ["pleuvrait", "pleuve", "pleut"], nl: "Neem een paraplu mee voor het geval het regent.", x: "Uitzondering: au cas où krijgt de conditionnel.", tag: "fr-hyp" },
      { t: "cloze", s: "On ira à pied, à moins qu'il ne ___ .", a: ["pleuve"], o: ["pleuve", "pleut", "pleuvra"], nl: "We gaan te voet, tenzij het regent.", tag: "fr-hyp" },
      { t: "cloze", s: "Tu réussiras à condition ___ travailler.", a: ["de"], o: ["de", "que", "à"], nl: "Je zult slagen op voorwaarde dat je werkt.", x: "Zelfde onderwerp: à condition de + infinitief.", tag: "fr-hyp" },
      { t: "cloze", s: "Dépêche-toi, ___ on va rater le train.", a: ["sinon"], o: ["sinon", "pourvu", "à moins"], nl: "Schiet op, anders missen we de trein.", tag: "fr-hyp" },
      { t: "cloze", s: "C'est plus grave que je ___ pensais.", a: ["ne"], o: ["ne", "pas", "en"], nl: "Het is erger dan ik dacht.", x: "Ne explétif na een vergelijking: geen ontkenning.", tag: "fr-ne-expl" },
      { t: "mc", q: "Wat betekent «Je crains qu'il ne vienne»?", o: ["Ik vrees dat hij komt.", "Ik vrees dat hij niet komt.", "Ik vrees niet dat hij komt."], x: "Ne zonder pas na craindre ontkent niets.", tag: "fr-ne-expl" },
      { t: "mc", q: "Welke zin betekent «Ik ben bang dat hij er niet is»?", o: ["J'ai peur qu'il ne soit pas là.", "J'ai peur qu'il ne soit là.", "Je n'ai pas peur qu'il soit là."], tag: "fr-ne-expl" },
      { t: "mc", q: "Wat is «la canicule»?", o: ["de hittegolf", "de overstroming", "de droogte"], tag: "fr-voc" },
      { t: "tr", nl: "Als het maar niet regent!", a: ["Pourvu qu'il ne pleuve pas !"], tag: "fr-hyp" },
      { t: "tr", nl: "Voordat het te laat is.", a: ["Avant qu'il ne soit trop tard.", "Avant qu'il soit trop tard."], tag: "fr-ne-expl" },
      { t: "tr", nl: "Ik probeer mijn afval te verminderen.", a: ["J'essaie de réduire mes déchets.", "J'essaye de réduire mes déchets."], tag: "fr-voc" },
      { t: "order", s: "Tu es plus pessimiste que je ne pensais.", nl: "Je bent pessimistischer dan ik dacht.", tag: "fr-ordre" },
      { t: "match", p: [["à moins que", "tenzij"], ["au cas où", "voor het geval dat"], ["pourvu que", "mits"], ["sinon", "anders"], ["de peur que", "uit angst dat"]], tag: "fr-hyp" }
    ],
    reading: {
      t: "2050 : deux scénarios", type: "Achtergrondartikel",
      p: [
        ["Les scientifiques sont clairs : à moins que nous ne réduisions fortement nos émissions, la température moyenne augmentera de plus de deux degrés avant 2050. Les canicules seraient alors deux fois plus fréquentes, et certaines régions du sud de la France connaîtraient des sécheresses chaque été.", "De wetenschappers zijn duidelijk: tenzij we onze uitstoot sterk verminderen, stijgt de gemiddelde temperatuur vóór 2050 met meer dan twee graden. Hittegolven zouden dan twee keer zo vaak voorkomen, en sommige streken in Zuid-Frankrijk zouden elke zomer droogte kennen."],
        ["Mais un autre scénario est possible, à condition que les décisions soient prises maintenant. Avec plus d'énergies renouvelables, des logements mieux isolés et moins de gaspillage, le réchauffement pourrait être limité. Ce serait plus cher que beaucoup ne le croient, mais moins cher que de ne rien faire.", "Maar een ander scenario is mogelijk, op voorwaarde dat de beslissingen nu worden genomen. Met meer hernieuwbare energie, beter geïsoleerde woningen en minder verspilling zou de opwarming beperkt kunnen worden. Het zou duurder zijn dan velen denken, maar goedkoper dan niets doen."],
        ["Le problème, c'est le temps. Beaucoup de citoyens craignent que les gouvernements n'agissent trop tard. « On sait ce qu'il faut faire, dit une chercheuse. Pourvu qu'on le fasse avant qu'il ne soit trop tard. »", "Het probleem is de tijd. Veel burgers vrezen dat regeringen te laat in actie komen. 'We weten wat er moet gebeuren,' zegt een onderzoekster. 'Als we het maar doen voordat het te laat is.'"]
      ],
      gl: [["les émissions", "de uitstoot"], ["fréquent / fréquente", "veelvoorkomend"], ["isolé / isolée", "geïsoleerd"], ["le citoyen / la citoyenne", "de burger"], ["la chercheuse", "de onderzoekster"]],
      q: [
        { t: "mc", q: "Que se passera-t-il si on ne réduit pas les émissions ?", o: ["La température augmentera de plus de deux degrés", "Il n'y aura plus de canicules", "Le sud de la France sera inondé"] },
        { t: "mc", q: "À quelle condition l'autre scénario est-il possible ?", o: ["Si les décisions sont prises maintenant", "Si on attend 2050", "Si on arrête les énergies renouvelables"] },
        { t: "mc", q: "Que craignent beaucoup de citoyens ?", o: ["Que les gouvernements agissent trop tard", "Que les gouvernements n'agissent jamais trop tard", "Que ce soit trop cher"] }
      ]
    },
    say: [["Prends un parapluie au cas où il pleuvrait.", "Neem een paraplu mee voor het geval het regent."], ["Je crains qu'il ne soit trop tard.", "Ik vrees dat het te laat is."], ["À condition que tout le monde le fasse.", "Op voorwaarde dat iedereen het doet."], ["Pourvu qu'il fasse beau !", "Als het maar mooi weer is!"]],
    task: { nl: "Schrijf 5 zinnen over wat er volgens jou moet gebeuren voor het klimaat. Gebruik à condition que, à moins que en au cas où.", model: "On peut encore limiter le réchauffement, à condition que chaque pays fasse un effort. À moins qu'on ne change nos habitudes, les étés seront de plus en plus chauds. Moi, je prends le train au lieu de l'avion. J'ai aussi acheté des panneaux solaires au cas où l'électricité deviendrait plus chère. Pourvu que ce ne soit pas trop tard !" },
    scenario: { nl: "Op een biologische markt in Brussel praat je met een vriendin over het klimaat. Zij is optimistisch, jij mag twijfelen.", role: "You are Awa, an optimistic friend from Brussels who cares about the environment. Discuss climate, waste, energy and personal habits with the learner at a market. Use conditions without si (à condition que, à moins que, pourvu que, au cas où + conditionnel, sinon) and now and then a ne explétif (avant qu'il ne soit trop tard, plus … que je ne pensais). Ask what the learner does personally and under what conditions things could improve. If they misread a ne explétif as a negation, explain kindly.", goal: "Noem één voorwaarde met à condition que, één uitzondering met à moins que en zeg waarvoor je iets doet met au cas où." }
  });

  /* ───────────────────────── B2 · 4 ───────────────────────── */
  U({
    id: "fr-b2-04", level: "B2", icon: "📖", title: "Il était une fois", nl: "Verhalen en boeken: de passé simple lezen en het deelwoord laten kloppen",
    goals: ["Een roman of sprookje in het Frans kunnen lezen", "De passé simple herkennen en begrijpen", "Het voltooid deelwoord correct laten overeenkomen", "Over boeken en lezen praten"],
    vocab: [
      ["le roman", "de roman"], ["le conte", "het sprookje"], ["la nouvelle", "het korte verhaal"], ["le récit", "het verhaal / relaas"], ["l'intrigue", "de plot"], ["le personnage", "het personage"],
      ["le héros / l'héroïne", "de held / de heldin"], ["l'auteur / l'autrice", "de auteur"], ["l'écrivain / l'écrivaine", "de schrijver / schrijfster"], ["le chapitre", "het hoofdstuk"], ["la fin", "het einde"], ["le dénouement", "de ontknoping"],
      ["il était une fois", "er was eens"], ["soudain", "plotseling"], ["alors", "toen / dan"], ["aussitôt", "meteen"], ["jadis", "lang geleden"], ["le lendemain", "de volgende dag"],
      ["la veille", "de dag ervoor"], ["s'apercevoir", "merken"], ["se rendre compte", "zich realiseren"], ["s'enfuir", "wegvluchten"], ["raconter", "vertellen"], ["décrire", "beschrijven"],
      ["captivant / captivante", "boeiend"], ["émouvant / émouvante", "ontroerend"], ["la librairie", "de boekwinkel"], ["la bibliothèque", "de bibliotheek"]
    ],
    grammar: [
      { t: "De passé simple: de verleden tijd van boeken", es: "Le passé simple",
        html: `<p>Sla een Franse roman open en je ziet vormen als <i>il <b>alla</b></i>, <i>elle <b>fut</b></i>, <i>ils <b>prirent</b></i>. Dat is de <b>passé simple</b>. Hij betekent precies hetzelfde als de passé composé (een afgeronde gebeurtenis), maar je vindt hem <b>alleen in geschreven verhalen</b>: romans, sprookjes, geschiedenisboeken. Niemand zegt hem. Je hoeft hem dus alleen te <b>herkennen</b>.</p>
<p>In de praktijk kom je bijna alleen de 3e persoon tegen (<i>il/elle</i> en <i>ils/elles</i>):</p>
<p><b>-er:</b> <i>il parl<b>a</b>, ils parl<b>èrent</b></i><br><b>-ir, -re:</b> <i>il fin<b>it</b>, ils fin<b>irent</b></i> · <i>il vend<b>it</b>, ils vend<b>irent</b></i><br><b>veel onregelmatige op -u-:</b> <i>il voul<b>ut</b>, il p<b>ut</b>, il s<b>ut</b>, il cr<b>ut</b>, il l<b>ut</b>, il b<b>ut</b>, il conn<b>ut</b>, il véc<b>ut</b></i></p>
<p>💡 <b>Trucje:</b> de stam lijkt vaak op het voltooid deelwoord: <i>voulu → il voulut</i>, <i>pris → il prit</i>, <i>mis → il mit</i>, <i>dit → il dit</i>.</p>
<p>⚠️ <b>Uitzonderingen die je uit je hoofd moet kennen</b>, want ze lijken nergens op: <i>être → il <b>fut</b>, ils <b>furent</b></i> · <i>avoir → il <b>eut</b>, ils <b>eurent</b></i> · <i>faire → il <b>fit</b></i> · <i>voir → il <b>vit</b></i> · <i>venir → il <b>vint</b></i> · <i>naître → il <b>naquit</b></i> · <i>mourir → il <b>mourut</b></i>. Waarom zo vreemd? Het zijn directe erfstukken van de Latijnse voltooide tijd (<i>fuit, habuit, fecit, vidit, venit</i>), die in de spreektaal verdwenen is maar in de schrijftaal bewaard bleef.</p>
<p>⚠️ <b>Let op, valse vrienden:</b> <i>il <b>vit</b></i> kan «hij zag» (voir) of «hij leeft» (vivre, présent) zijn; <i>il <b>dit</b></i> en <i>il <b>finit</b></i> zijn présent én passé simple. De context beslist.</p>
<p>In een verhaal blijft de taakverdeling zoals je die kent: <b>imparfait</b> voor de achtergrond, <b>passé simple</b> (in plaats van passé composé) voor wat er gebeurt: <i>Il <b>pleuvait</b>. Soudain, la porte <b>s'ouvrit</b>.</i></p>`,
        table: [["infinitief", "il / elle", "ils / elles", "= passé composé"], ["parler", "parla", "parlèrent", "a parlé"], ["finir", "finit", "finirent", "a fini"], ["être", "fut", "furent", "a été"], ["avoir", "eut", "eurent", "a eu"], ["faire", "fit", "firent", "a fait"], ["venir", "vint", "vinrent", "est venu"], ["voir", "vit", "virent", "a vu"]],
        ex: [["Il était une fois un roi qui eut trois fils.", "Er was eens een koning die drie zonen kreeg."], ["Elle ouvrit la lettre, la lut et se mit à pleurer.", "Ze opende de brief, las hem en begon te huilen."]] },
      { t: "Het voltooid deelwoord: wanneer past het zich aan?", es: "L'accord du participe passé",
        html: `<p>Dit is het beroemdste struikelblok van de Franse spelling. Er zijn drie situaties:</p>
<p>1️⃣ <b>Met être:</b> het deelwoord richt zich naar het <b>onderwerp</b>. <i>Elle est parti<b>e</b>. Ils sont arrivé<b>s</b>.</i></p>
<p>2️⃣ <b>Met avoir:</b> het deelwoord verandert <b>niet</b>… <i>J'ai acheté des fleurs.</i><br>⚠️ <b>…behalve als het lijdend voorwerp ervóór staat.</b> Dan richt het zich naar dat lijdend voorwerp: <i>les fleurs <b>que</b> j'ai acheté<b>es</b></i> · <i>Je <b>les</b> ai acheté<b>es</b>.</i> · <i>Quel<b>le</b> robe as-tu choisi<b>e</b> ?</i><br><b>Waarom?</b> De regel werd in de zestiende eeuw overgenomen uit het Italiaans. Het idee: staat het lijdend voorwerp al vóór het deelwoord, dan weet de schrijver waar het bij hoort en kan hij het aanpassen; komt het erna, dan is het deelwoord al geschreven.</p>
<p>3️⃣ <b>Wederkerende werkwoorden</b> (altijd met <i>être</i>): meestal naar het onderwerp: <i>Elle s'est levé<b>e</b>.</i><br>⚠️ <b>Uitzondering:</b> is <i>se</i> het <b>meewerkend</b> voorwerp, dan geen overeenkomst: <i>Elle s'est lavé <b>les mains</b></i> (het lijdend voorwerp <i>les mains</i> komt erna) · <i>Ils se sont téléphoné.</i> · <i>Elles se sont parlé.</i> Waarom? Je belt en praat <i>à quelqu'un</i>: <i>se</i> is hier «aan elkaar», geen lijdend voorwerp.</p>
<p>⚠️ <b>Nog twee uitzonderingen:</b> na <b>en</b> past het deelwoord zich nooit aan (<i>Des pommes ? J'<b>en</b> ai mangé.</i>), en <b>fait + infinitief</b> blijft altijd onveranderd (<i>la maison qu'il a <b>fait</b> construire</i>).</p>
<p>Meestal <b>hoor</b> je het verschil niet. Wel bij deelwoorden op een medeklinker: <i>pris → prise</i>, <i>écrit → écrite</i>, <i>fait → faite</i>, <i>mis → mise</i>: <i>la lettre que j'ai <b>écrite</b></i>.</p>`,
        table: [["zin", "overeenkomst?", "waarom"], ["Elle est partie.", "ja", "être → onderwerp"], ["J'ai lu ces livres.", "nee", "lijdend voorwerp erna"], ["Ces livres, je les ai lus.", "ja", "lijdend voorwerp ervoor"], ["Elle s'est coupée.", "ja", "se = lijdend voorwerp"], ["Elle s'est coupé le doigt.", "nee", "le doigt = lijdend voorwerp, erna"], ["Ils se sont écrit.", "nee", "se = aan elkaar"]],
        ex: [["La lettre que tu m'as écrite m'a beaucoup touché.", "De brief die je me geschreven hebt, heeft me erg geraakt."], ["Elles se sont rencontrées à Lyon et se sont plu tout de suite.", "Ze hebben elkaar in Lyon ontmoet en vonden elkaar meteen leuk."]] }
    ],
    dialogue: {
      t: "Au club de lecture", place: "Genève 🇨🇭",
      lines: [
        ["Élodie", "Alors, Daan, tu as fini le roman que je t'ai prêté ?", "En Daan, heb je de roman uit die ik je geleend heb?"],
        ["Daan", "Presque. Je l'ai trouvé captivant, mais les premières pages, je les ai lues trois fois.", "Bijna. Ik vond hem boeiend, maar de eerste bladzijden heb ik drie keer gelezen."],
        ["Élodie", "À cause du vocabulaire ?", "Vanwege de woordenschat?"],
        ["Daan", "Non, à cause des verbes. « Il fut », « elle vint », « ils eurent »… Je ne les avais jamais vus !", "Nee, vanwege de werkwoorden. 'Il fut', 'elle vint', 'ils eurent'… Die had ik nog nooit gezien!"],
        ["Élodie", "Ah, le passé simple ! Rassure-toi, personne ne parle comme ça. On le trouve seulement dans les livres.", "Ah, de passé simple! Wees gerust, niemand praat zo. Je vindt hem alleen in boeken."],
        ["Daan", "Donc « il fut » veut dire « il a été » ?", "Dus 'il fut' betekent 'il a été'?"],
        ["Élodie", "Exactement. Et « elle vint », c'est « elle est venue ».", "Precies. En 'elle vint' is 'elle est venue'."],
        ["Daan", "Une fois que j'ai compris ça, je ne me suis plus arrêté. La scène où l'héroïne s'enfuit m'a vraiment ému.", "Toen ik dat eenmaal begreep, ben ik niet meer gestopt. De scène waarin de heldin wegvlucht, heeft me echt ontroerd."],
        ["Élodie", "Ne me raconte pas la fin ! Les deux derniers chapitres, je ne les ai pas encore relus.", "Vertel me het einde niet! De laatste twee hoofdstukken heb ik nog niet herlezen."],
        ["Daan", "Promis. Tu aurais d'autres romans à me conseiller ?", "Beloofd. Heb je nog andere romans om me aan te raden?"]
      ],
      q: [
        { t: "mc", q: "Pourquoi Daan a-t-il lu les premières pages trois fois ?", o: ["À cause des verbes au passé simple", "À cause du vocabulaire", "Parce qu'il s'ennuyait"] },
        { t: "mc", q: "Que signifie « elle vint » ?", o: ["Elle est venue", "Elle voit", "Elle vit"] },
        { t: "mc", q: "Qu'est-ce qu'Élodie ne veut pas ?", o: ["Que Daan lui raconte la fin", "Que Daan lise d'autres romans", "Prêter son livre"] }
      ]
    },
    culture: { t: "La rentrée littéraire en de Goncourt", html: `<p>Elk jaar in september verschijnen er in Frankrijk in een paar weken tijd zo'n vijfhonderd nieuwe romans: <b>la rentrée littéraire</b>. Kranten, radio en boekhandels praten wekenlang over weinig anders.</p>
<p>Het hoogtepunt is begin november de <b>prix Goncourt</b>, de belangrijkste literaire prijs. De winnaar krijgt een cheque van… tien euro, maar verkoopt daarna honderdduizenden boeken. De jury vergadert traditioneel in restaurant Drouant in Parijs.</p>
<p>Frankrijk beschermt zijn boekhandels met de <b>vaste boekenprijs</b> (<i>loi Lang</i>, 1981): een boek kost overal hetzelfde, ook online. Daardoor heeft bijna elke kleine stad nog een onafhankelijke <i>librairie</i>. Let op: een <i>librairie</i> is een boekwinkel; de bibliotheek is <i>la bibliothèque</i>.</p>` },
    ex: [
      { t: "cloze", s: "Il était une fois un roi qui ___ trois fils. (avoir, passé simple)", a: ["eut"], o: ["eut", "a", "avait"], nl: "Er was eens een koning die drie zonen kreeg.", x: "Uitzondering: avoir → il eut, een erfstuk uit het Latijn (habuit).", tag: "fr-passe-simple" },
      { t: "cloze", s: "« Elle fut surprise » = Elle a ___ surprise.", a: ["été"], o: ["été", "eu", "fait"], nl: "Ze was verrast.", x: "Fut is de passé simple van être.", tag: "fr-passe-simple" },
      { t: "cloze", s: "Les fleurs que j'ai ___ sont belles.", a: ["achetées"], o: ["achetées", "acheté", "achetés"], nl: "De bloemen die ik heb gekocht zijn mooi.", x: "Uitzondering bij avoir: lijdend voorwerp (les fleurs, vrouwelijk meervoud) staat ervoor.", tag: "fr-accord-pp" },
      { t: "cloze", s: "J'ai ___ ces livres l'année dernière.", a: ["lu"], o: ["lu", "lus", "lues"], nl: "Ik heb die boeken vorig jaar gelezen.", x: "Met avoir en het lijdend voorwerp erna: geen overeenkomst.", tag: "fr-accord-pp" },
      { t: "cloze", s: "Elle s'est ___ les mains.", a: ["lavé"], o: ["lavé", "lavée", "lavées"], nl: "Ze heeft haar handen gewassen.", x: "Uitzondering: het lijdend voorwerp (les mains) komt erna, dus geen overeenkomst.", tag: "fr-accord-pp" },
      { t: "cloze", s: "Ils se sont ___ pendant des heures.", a: ["parlé"], o: ["parlé", "parlés", "parlées"], nl: "Ze hebben urenlang met elkaar gepraat.", x: "Parler à quelqu'un: se is meewerkend voorwerp, geen overeenkomst.", tag: "fr-accord-pp" },
      { t: "mc", q: "Wat betekent «ils vinrent»?", o: ["ils sont venus", "ils ont vu", "ils viennent"], tag: "fr-passe-simple" },
      { t: "mc", q: "Waar kom je de passé simple tegen?", o: ["In romans en sprookjes", "In gesprekken met vrienden", "In appjes"], tag: "fr-passe-simple" },
      { t: "mc", q: "Welke zin is goed gespeld?", o: ["La lettre que j'ai écrite.", "La lettre que j'ai écrit.", "La lettre que j'ai écrits."], tag: "fr-accord-pp" },
      { t: "tr", nl: "Er was eens een prinses.", a: ["Il était une fois une princesse."], tag: "fr-voc" },
      { t: "tr", nl: "Ik heb ze (de bladzijden) drie keer gelezen.", a: ["Je les ai lues trois fois."], tag: "fr-accord-pp" },
      { t: "tr", nl: "Vertel me het einde niet!", a: ["Ne me raconte pas la fin !", "Ne me racontez pas la fin !"], tag: "fr-voc" },
      { t: "order", s: "Soudain, la porte s'ouvrit et un homme entra.", nl: "Plotseling ging de deur open en kwam er een man binnen.", tag: "fr-ordre" },
      { t: "match", p: [["il fut", "il a été"], ["il eut", "il a eu"], ["il fit", "il a fait"], ["il vint", "il est venu"], ["il vit", "il a vu"]], tag: "fr-passe-simple" }
    ],
    reading: {
      t: "Le pêcheur et la bouteille", type: "Sprookje",
      p: [
        ["Il était une fois, au bord du lac Léman, un vieux pêcheur qui vivait seul dans une petite maison. Chaque matin, il prenait sa barque et jetait ses filets. Un jour d'hiver, il sentit quelque chose de lourd. Il tira de toutes ses forces et vit apparaître une bouteille verte, fermée par un bouchon d'or.", "Er was eens, aan de oever van het Meer van Genève, een oude visser die alleen in een klein huis woonde. Elke ochtend nam hij zijn boot en wierp hij zijn netten uit. Op een winterdag voelde hij iets zwaars. Hij trok uit alle macht en zag een groene fles verschijnen, afgesloten met een gouden kurk."],
        ["Le pêcheur l'ouvrit. Aussitôt, une fumée blanche en sortit et prit la forme d'une femme. « Tu m'as délivrée, dit-elle. Les trois vœux que tu feras, je les réaliserai. » L'homme réfléchit longtemps. Puis il répondit : « Je n'ai besoin de rien. Mais le village a faim. »", "De visser opende haar. Meteen kwam er witte rook uit die de gedaante van een vrouw aannam. 'Je hebt me bevrijd,' zei ze. 'De drie wensen die je doet, zal ik vervullen.' De man dacht lang na. Toen antwoordde hij: 'Ik heb niets nodig. Maar het dorp heeft honger.'"],
        ["La femme sourit. Le lendemain, les filets de tous les pêcheurs furent pleins, et ils le restèrent jusqu'à la fin de leurs jours. Quant à la bouteille, le vieil homme la remit dans le lac. On dit qu'elle y est encore.", "De vrouw glimlachte. De volgende dag waren de netten van alle vissers vol, en dat bleven ze tot het einde van hun dagen. Wat de fles betreft: de oude man legde haar terug in het meer. Men zegt dat ze er nog altijd ligt."]
      ],
      gl: [["le pêcheur", "de visser"], ["le filet", "het net"], ["le bouchon", "de kurk"], ["le vœu", "de wens"], ["délivrer", "bevrijden"]],
      q: [
        { t: "mc", q: "Que trouva le pêcheur dans ses filets ?", o: ["Une bouteille verte", "Un poisson d'or", "Une femme"] },
        { t: "mc", q: "Que demanda-t-il ?", o: ["De la nourriture pour le village", "De l'or pour lui", "Une nouvelle barque"] },
        { t: "mc", q: "Que fit-il de la bouteille ?", o: ["Il la remit dans le lac", "Il la vendit", "Il la garda chez lui"] }
      ]
    },
    say: [["Il était une fois un vieux pêcheur.", "Er was eens een oude visser."], ["Les pages que j'ai lues étaient captivantes.", "De bladzijden die ik gelezen heb waren boeiend."], ["Ne me raconte pas la fin !", "Vertel me het einde niet!"], ["Elle s'est lavé les mains.", "Ze heeft haar handen gewassen."]],
    task: { nl: "Schrijf het begin van een sprookje in 5 zinnen. Begin met «Il était une fois», gebruik de imparfait voor de achtergrond en minstens drie vormen in de passé simple.", model: "Il était une fois une jeune fille qui habitait près d'une grande forêt. Elle aimait lire et rêvait de voyager. Un soir, elle entendit un bruit étrange. Elle ouvrit la porte et vit un renard blessé. Elle le prit dans ses bras et le soigna toute la nuit." },
    scenario: { nl: "Bij een leesclub in Genève bespreek je een roman. Vertel wat je ervan vond en vraag om leestips.", role: "You are Élodie, who runs a book club in Geneva. Talk with the learner about a French novel they have just read: the plot, the characters, the ending (without spoilers), what moved them. Reassure them about the passé simple if they mention it and explain a form or two (il fut = il a été). Use sentences where the past participle agrees with a preceding direct object (le livre que je t'ai prêté, les chapitres que tu as lus) and gently correct the learner's agreement mistakes when it is audible (écrite, prise, faite). Recommend one or two authors.", goal: "Zeg wat je van het boek vond, gebruik één zin met een lijdend voorwerp vóór het deelwoord (que j'ai lu(e)s, je l'ai trouvé(e)) en vraag om een leestip." }
  });

  /* ───────────────────────── B2 · 5 ───────────────────────── */
  U({
    id: "fr-b2-05", level: "B2", icon: "⚖️", title: "J'ai beau essayer", nl: "Debatteren: tegenstellen en toegeven",
    goals: ["In een discussie beleefd tegenspreken", "Een tegenstelling uitdrukken met pourtant, cependant, alors que", "Iets toegeven en toch je punt maken met bien que, malgré, même si", "De uitdrukking avoir beau gebruiken"],
    vocab: [
      ["le débat", "het debat"], ["l'argument", "het argument"], ["le point de vue", "het standpunt"], ["convaincre", "overtuigen"], ["nuancer", "nuanceren"], ["contredire", "tegenspreken"],
      ["pourtant", "toch / en toch"], ["cependant", "echter"], ["néanmoins", "niettemin"], ["toutefois", "evenwel"], ["en revanche", "daarentegen"], ["par contre", "daarentegen (informeler)"],
      ["malgré", "ondanks"], ["bien que", "hoewel"], ["quoique", "hoewel (formeler)"], ["même si", "zelfs als / ook al"], ["alors que", "terwijl (tegenstelling)"], ["tandis que", "terwijl"],
      ["quand même", "toch"], ["au contraire", "integendeel"], ["certes", "weliswaar"], ["d'un côté… de l'autre", "enerzijds… anderzijds"], ["il n'empêche que", "dat neemt niet weg dat"], ["avoir tort", "ongelijk hebben"],
      ["admettre", "toegeven"], ["l'inconvénient", "het nadeel"], ["l'avantage", "het voordeel"], ["être d'accord sur", "het eens zijn over"]
    ],
    grammar: [
      { t: "Tegenstelling en toegeving", es: "L'opposition et la concession",
        html: `<p>Het Frans maakt een verschil dat je in een debat goed kunt gebruiken:</p>
<p><b>Tegenstelling</b> (twee dingen naast elkaar die verschillen): <i>Paul est grand, <b>alors que</b> son frère est petit.</i><br><b>Toegeving</b> (iets zou het andere moeten verhinderen, maar doet dat niet): <i><b>Bien qu'</b>il soit malade, il travaille.</i></p>
<p>Wat erna komt, verschilt per woord. Dat moet je per woord leren:</p>
<p><b>+ subjonctif:</b> <b>bien que</b>, <b>quoique</b>: <i><b>Bien que</b> ce <b>soit</b> cher, j'achète.</i><br><b>+ indicatif:</b> <b>même si</b>, <b>alors que</b>, <b>tandis que</b>: <i><b>Même si</b> c'<b>est</b> cher, j'achète.</i><br><b>+ zelfstandig naamwoord:</b> <b>malgré</b>, <b>en dépit de</b> (formeel): <i><b>Malgré</b> le prix, j'achète.</i><br><b>los, tussen twee zinnen:</b> <b>pourtant, cependant, néanmoins, toutefois, quand même</b>: <i>C'est cher. <b>Pourtant</b>, j'achète. / J'achète <b>quand même</b>.</i></p>
<p>⚠️ <b>De klassieke fout:</b> <s>malgré que</s> + zin. <i>Malgré</i> is een voorzetsel en wil een zelfstandig naamwoord. Zeg <i><b>bien que</b> + zin</i>. Waarom is dit lastig? In het Nederlands kan «ondanks dat» wel; het Frans heeft voor de zin een ander woord.</p>
<p>⚠️ <b>Let op même si:</b> het betekent hetzelfde als <i>bien que</i>, maar krijgt de <b>indicatif</b>, net als gewoon <i>si</i>. <i>Bien qu'il <b>pleuve</b> = Même s'il <b>pleut</b>.</i></p>
<p>💬 <b>In een debat</b> geef je eerst toe en sla je dan toe: <i><b>Certes</b>, le train est plus lent, <b>mais</b> il pollue moins.</i> · <i>Vous avez raison sur ce point ; <b>il n'empêche que</b>…</i> · <i><b>D'un côté</b>…, <b>de l'autre</b>…</i></p>`,
        table: [["woord", "gevolgd door", "voorbeeld"], ["bien que / quoique", "subjonctif", "Bien qu'il soit tard, on continue."], ["même si", "indicatif", "Même s'il est tard, on continue."], ["malgré", "zelfstandig naamwoord", "Malgré l'heure, on continue."], ["alors que / tandis que", "indicatif", "Il dort alors que je travaille."], ["pourtant / cependant", "nieuwe zin", "Il est tard. Pourtant, on continue."]],
        ex: [["Certes, c'est plus cher, mais c'est de meilleure qualité.", "Het is weliswaar duurder, maar de kwaliteit is beter."], ["Malgré la pluie, la manifestation a eu lieu.", "Ondanks de regen is de demonstratie doorgegaan."]] },
      { t: "Avoir beau: hoe hard je ook…", es: "Avoir beau + infinitif",
        html: `<p>Een heel Franse manier om een toegeving uit te drukken is <b>avoir beau + infinitief</b>. Het betekent: «iets doen, maar zonder resultaat», «hoe … ook», «al … nog zo».</p>
<p><i>J'<b>ai beau</b> essayer, je n'y arrive pas.</i> = Ik kan proberen wat ik wil, het lukt me niet.<br><i>Il <b>a beau</b> être riche, il n'est pas heureux.</i> = Hij mag dan rijk zijn, gelukkig is hij niet.<br><i>Elle <b>avait beau</b> crier, personne ne l'entendait.</i> = Hoe hard ze ook schreeuwde, niemand hoorde haar.</p>
<p><b>Bouw:</b> je vervoegt alleen <i>avoir</i> (in elke tijd); <i>beau</i> verandert <b>nooit</b>; daarna de infinitief. De zin heeft altijd een <b>tweede deel</b> met het teleurstellende resultaat, zonder voegwoord ertussen.</p>
<p>⚠️ <b>Let op, dit is een uitzondering op alles wat je van «beau» weet:</b> het heeft hier niets met «mooi» te maken en past zich niet aan: ook een vrouw zegt <i>j'ai <b>beau</b></i>, nooit <s>belle</s>. Waarom? De uitdrukking is versteend uit het oude Frans, waar <i>avoir beau faire</i> betekende «het mooi (= gemakkelijk) hebben om iets te doen»; ironisch gebruikt werd het: je kunt het wel doen, maar het helpt niet.</p>
<p>Voor iets wat al voorbij is, gebruik je de infinitief van de voltooide tijd: <i>J'ai beau <b>avoir lu</b> le texte trois fois, je ne comprends pas.</i></p>
<p>Verwante bouwsels voor «hoe … ook»: <i><b>Quoi qu'</b>il dise</i> (wat hij ook zegt), <i><b>où que</b> tu ailles</i> (waar je ook gaat), <i><b>qui que</b> ce soit</i> (wie het ook is): altijd met de <b>subjonctif</b>.</p>`,
        table: [["met bien que", "met avoir beau"], ["Bien que je travaille beaucoup, je ne gagne pas assez.", "J'ai beau travailler beaucoup, je ne gagne pas assez."], ["Bien qu'il soit fatigué, il sort.", "Il a beau être fatigué, il sort."], ["Bien qu'on lui ait expliqué, il ne comprend pas.", "On a beau lui avoir expliqué, il ne comprend pas."]],
        ex: [["Tu as beau insister, je ne changerai pas d'avis.", "Je kunt aandringen wat je wilt, ik verander niet van mening."], ["Quoi qu'il arrive, je serai là.", "Wat er ook gebeurt, ik zal er zijn."]] }
    ],
    dialogue: {
      t: "Débat à la radio", place: "Montréal 🇨🇦",
      lines: [
        ["Présentatrice", "Faut-il interdire les voitures au centre-ville ? Mathieu, vous êtes pour.", "Moeten auto's in het stadscentrum verboden worden? Mathieu, u bent voor."],
        ["Mathieu", "Absolument. Malgré les efforts de la ville, l'air reste pollué. Il faut aller plus loin.", "Absoluut. Ondanks de inspanningen van de stad blijft de lucht vervuild. We moeten verder gaan."],
        ["Sanne", "Je comprends votre point de vue. Cependant, tout le monde n'habite pas près d'une station de métro.", "Ik begrijp uw standpunt. Echter, niet iedereen woont vlak bij een metrostation."],
        ["Mathieu", "Certes, mais on a beau construire des pistes cyclables, les gens prennent quand même leur auto.", "Zeker, maar we kunnen fietspaden aanleggen wat we willen, mensen nemen toch hun auto."],
        ["Sanne", "Parce que l'hiver, à moins vingt degrés, le vélo, ce n'est pas évident !", "Omdat fietsen in de winter, bij min twintig, niet vanzelfsprekend is!"],
        ["Mathieu", "Pourtant, à Oslo, il fait froid aussi, et le centre est sans voitures.", "En toch is het in Oslo ook koud, en het centrum is autovrij."],
        ["Sanne", "D'un côté, vous avez raison. De l'autre, Oslo a investi dans les transports pendant vingt ans.", "Aan de ene kant hebt u gelijk. Aan de andere kant heeft Oslo twintig jaar in het vervoer geïnvesteerd."],
        ["Mathieu", "Même si ça prend du temps, il faut bien commencer un jour.", "Ook al kost het tijd, je moet toch een keer beginnen."],
        ["Sanne", "Là-dessus, nous sommes d'accord. Il n'empêche qu'il faut penser aux commerçants.", "Daarover zijn we het eens. Dat neemt niet weg dat we aan de winkeliers moeten denken."],
        ["Présentatrice", "Merci à vous deux. Bien que le sujet divise, vous êtes restés courtois !", "Dank u beiden. Hoewel het onderwerp verdeelt, bent u hoffelijk gebleven!"]
      ],
      q: [
        { t: "mc", q: "Quel est le sujet du débat ?", o: ["Interdire les voitures au centre-ville", "Construire un métro", "Le prix des vélos"] },
        { t: "mc", q: "Que veut dire Mathieu avec « on a beau construire des pistes cyclables » ?", o: ["On en construit, mais ça ne suffit pas", "C'est beau de construire des pistes", "On n'en construit pas assez"] },
        { t: "mc", q: "Sur quoi Sanne et Mathieu sont-ils d'accord ?", o: ["Il faut commencer un jour", "Il fait trop froid pour le vélo", "Oslo est un mauvais exemple"] }
      ]
    },
    culture: { t: "Thèse, antithèse, synthèse", html: `<p>Franse scholieren leren vanaf hun vijftiende redeneren volgens een vast plan: <b>thèse</b> (het ene standpunt), <b>antithèse</b> (het andere), <b>synthèse</b> (een afgewogen conclusie). Het eindexamen filosofie, verplicht voor iedereen die het <i>baccalauréat</i> doet, duurt vier uur en bestaat uit één vraag, zoals: «Moet je kiezen tussen vrijheid en gelijkheid?»</p>
<p>Dat verklaart waarom Fransen graag discussiëren, aan tafel, op het werk en op tv, en waarom tegenspreken niet onbeleefd is. Een discussie is een sport, geen ruzie. Wie het direct met iedereen eens is, wordt snel saai gevonden.</p>
<p>In Québec is de toon zachter: men zoekt eerder overeenstemming, en <i>par contre</i> klinkt daar heel gewoon, terwijl sommige Franse taalpuristen liever <i>en revanche</i> horen.</p>` },
    ex: [
      { t: "cloze", s: "___ la pluie, nous sommes sortis.", a: ["Malgré"], o: ["Malgré", "Bien que", "Même si"], nl: "Ondanks de regen zijn we naar buiten gegaan.", x: "Vóór een zelfstandig naamwoord: malgré.", tag: "fr-concession" },
      { t: "cloze", s: "Bien qu'il ___ malade, il travaille.", a: ["soit"], o: ["soit", "est", "sera"], nl: "Hoewel hij ziek is, werkt hij.", tag: "fr-concession" },
      { t: "cloze", s: "Même s'il ___ malade, il travaille.", a: ["est"], o: ["est", "soit", "serait"], nl: "Ook al is hij ziek, hij werkt.", x: "Let op: même si krijgt de indicatif, net als si.", tag: "fr-concession" },
      { t: "cloze", s: "Mon frère adore la ville, ___ que moi, je préfère la campagne.", a: ["alors"], o: ["alors", "bien", "malgré"], nl: "Mijn broer houdt van de stad, terwijl ik liever het platteland heb.", tag: "fr-concession" },
      { t: "cloze", s: "J'ai ___ essayer, je n'y arrive pas.", a: ["beau"], o: ["beau", "bien", "belle"], nl: "Ik kan proberen wat ik wil, het lukt me niet.", x: "Uitzondering: beau verandert nooit in deze uitdrukking, ook niet bij een vrouw.", tag: "fr-avoir-beau" },
      { t: "cloze", s: "Elle a beau ___ riche, elle n'est pas heureuse.", a: ["être"], o: ["être", "est", "soit"], nl: "Ze mag dan rijk zijn, gelukkig is ze niet.", x: "Na avoir beau volgt de infinitief.", tag: "fr-avoir-beau" },
      { t: "mc", q: "Welke zin is correct?", o: ["Bien qu'il pleuve, on sort.", "Malgré qu'il pleut, on sort.", "Malgré il pleut, on sort."], x: "Malgré + zelfstandig naamwoord; voor een zin gebruik je bien que.", tag: "fr-concession" },
      { t: "mc", q: "Wat betekent «Tu as beau insister»?", o: ["Je kunt aandringen wat je wilt", "Je dringt mooi aan", "Je hoeft niet aan te dringen"], tag: "fr-avoir-beau" },
      { t: "mc", q: "Welk woord is het meest formeel?", o: ["néanmoins", "quand même", "par contre"], tag: "fr-concession" },
      { t: "tr", nl: "Wat er ook gebeurt, ik zal er zijn.", a: ["Quoi qu'il arrive, je serai là."], tag: "fr-avoir-beau" },
      { t: "tr", nl: "Het is duur. Toch koop ik het.", a: ["C'est cher. Pourtant, je l'achète.", "C'est cher. Je l'achète quand même.", "C'est cher. Cependant, je l'achète."], tag: "fr-concession" },
      { t: "tr", nl: "Aan de ene kant hebt u gelijk.", a: ["D'un côté, vous avez raison."], tag: "fr-voc" },
      { t: "order", s: "Il n'empêche qu'il faut penser aux commerçants.", nl: "Dat neemt niet weg dat we aan de winkeliers moeten denken.", tag: "fr-ordre" },
      { t: "match", p: [["malgré", "ondanks"], ["pourtant", "en toch"], ["en revanche", "daarentegen"], ["certes", "weliswaar"], ["au contraire", "integendeel"]], tag: "fr-concession" }
    ],
    reading: {
      t: "Faut-il supprimer les devoirs ?", type: "Betoog",
      p: [
        ["En France, les devoirs écrits à la maison sont officiellement interdits à l'école primaire depuis 1956. Pourtant, la plupart des enfants en ont encore chaque soir. Faut-il enfin appliquer la loi ? La question divise parents et enseignants.", "In Frankrijk is schriftelijk huiswerk op de basisschool sinds 1956 officieel verboden. Toch krijgen de meeste kinderen het nog elke avond. Moet de wet eindelijk worden toegepast? De vraag verdeelt ouders en leerkrachten."],
        ["D'un côté, les devoirs renforcent les inégalités : certains enfants sont aidés par leurs parents, alors que d'autres sont seuls. On a beau répéter que l'école est la même pour tous, ce n'est pas vrai à la maison. De l'autre côté, beaucoup d'enseignants estiment que, malgré ces défauts, les devoirs apprennent l'autonomie.", "Aan de ene kant versterkt huiswerk de ongelijkheid: sommige kinderen worden door hun ouders geholpen, terwijl andere er alleen voor staan. We kunnen nog zo vaak herhalen dat school voor iedereen hetzelfde is, thuis is dat niet waar. Aan de andere kant vinden veel leerkrachten dat huiswerk, ondanks die gebreken, zelfstandigheid aanleert."],
        ["Certes, il n'existe pas de solution parfaite. Néanmoins, plusieurs écoles proposent aujourd'hui une étude après la classe, où chaque élève fait ses exercices avec l'aide d'un adulte. Même si cela coûte cher, c'est peut-être le meilleur compromis.", "Zeker, een perfecte oplossing bestaat niet. Niettemin bieden verschillende scholen nu een studie-uur na de les aan, waar elke leerling zijn oefeningen maakt met hulp van een volwassene. Ook al is dat duur, het is misschien het beste compromis."]
      ],
      gl: [["les devoirs", "het huiswerk"], ["appliquer", "toepassen"], ["l'inégalité", "de ongelijkheid"], ["l'enseignant / l'enseignante", "de leerkracht"], ["l'autonomie", "de zelfstandigheid"]],
      q: [
        { t: "mc", q: "Depuis quand les devoirs écrits sont-ils interdits à l'école primaire ?", o: ["Depuis 1956", "Depuis 2017", "Ils ne sont pas interdits"] },
        { t: "mc", q: "Pourquoi les devoirs renforcent-ils les inégalités ?", o: ["Tous les enfants ne sont pas aidés à la maison", "Ils coûtent cher", "Les enseignants ne les corrigent pas"] },
        { t: "mc", q: "Quel compromis l'auteur propose-t-il ?", o: ["Une étude après la classe avec un adulte", "Plus de devoirs le week-end", "Supprimer l'école primaire"] }
      ]
    },
    say: [["J'ai beau essayer, je n'y arrive pas.", "Ik kan proberen wat ik wil, het lukt me niet."], ["Je comprends votre point de vue. Cependant…", "Ik begrijp uw standpunt. Echter…"], ["Malgré tout, je reste optimiste.", "Ondanks alles blijf ik optimistisch."], ["Là-dessus, nous sommes d'accord.", "Daarover zijn we het eens."]],
    task: { nl: "Schrijf een kort betoog (5 of 6 zinnen) voor of tegen thuiswerken. Geef eerst iets toe (certes, bien que), spreek dan tegen (cependant, pourtant) en gebruik één keer avoir beau.", model: "Certes, le télétravail permet de gagner du temps, et bien que ce soit pratique, il a des inconvénients. D'un côté, on évite les transports ; de l'autre, on voit moins ses collègues. J'ai beau aimer le calme de la maison, l'équipe me manque. Cependant, deux jours par semaine me semblent un bon compromis. Malgré quelques défauts, je ne voudrais plus revenir en arrière." },
    scenario: { nl: "Je doet mee aan een radiodebat in Montréal over auto's in de stad. De andere gast is het niet met je eens.", role: "You are Mathieu, a guest in a radio debate in Montréal who wants to ban cars from the city centre. Debate politely with the learner, who should defend another view or nuance yours. Use connectors of opposition and concession (pourtant, cependant, malgré, bien que + subjonctif, même si + indicatif, alors que, certes… mais, il n'empêche que) and 'avoir beau'. Concede a point now and then and ask the learner to respond. If they say 'malgré que', offer 'bien que' instead.", goal: "Geef één punt toe met certes of bien que, spreek tegen met pourtant of cependant en gebruik één keer avoir beau." }
  });
})(window.SPT);
