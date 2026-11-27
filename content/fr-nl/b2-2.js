/* Frans voor Nederlandstaligen — niveau B2, units 6–10 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-rel-comp': 'samengestelde relatieven (auquel, duquel, lesquels)', 'fr-part-pres': 'participe présent en adjectif verbal', 'fr-concordance': 'indirecte rede in het verleden (overeenkomst van tijden)',
    'fr-verbes-intro': 'werkwoorden om te citeren (affirmer, promettre de…)', 'fr-y-en2': 'y en en bij werkwoorden met een voorzetsel', 'fr-prep-verbe': 'werkwoord + à of de',
    'fr-fut-ant': 'futur antérieur', 'fr-temps-expr': 'tijdsuitdrukkingen (depuis, il y a, dans, en, dès que)', 'fr-inf-passe': 'infinitif passé (après avoir…)', 'fr-causatif': 'laten doen: faire + infinitief', 'fr-formel': 'formele brief en mail'
  });

  /* ───────────────────────── B2 · 6 ───────────────────────── */
  U({
    id: "fr-b2-06", level: "B2", icon: "🏙️", title: "La ville dans laquelle je vis", nl: "Samenleven in de stad: lequel, auquel, duquel en de vorm op -ant",
    goals: ["Over wonen, buurt en samenleven praten", "Betrekkelijke bijzinnen maken na een voorzetsel", "Het participe présent herkennen in geschreven Frans", "Het spellingverschil fatigant / fatiguant begrijpen"],
    vocab: [
      ["le quartier", "de wijk"], ["la banlieue", "de voorstad"], ["le logement", "de woning"], ["le loyer", "de huur"], ["le locataire / la locataire", "de huurder"], ["le propriétaire / la propriétaire", "de eigenaar"],
      ["la colocation", "het samenwonen met huisgenoten"], ["le voisinage", "de buurt / de buren"], ["l'immeuble", "het flatgebouw"], ["le HLM", "de sociale huurwoning"], ["l'association", "de vereniging"], ["le bénévole / la bénévole", "de vrijwilliger"],
      ["la mixité sociale", "de sociale mix"], ["l'espace vert", "het groen / de groene zone"], ["les transports en commun", "het openbaar vervoer"], ["le bruit", "het lawaai"], ["la solidarité", "de solidariteit"], ["s'installer", "zich vestigen"],
      ["déménager", "verhuizen"], ["emménager", "intrekken"], ["s'entendre avec", "kunnen opschieten met"], ["grâce auquel", "dankzij welke"], ["au sein de", "binnen (een groep)"], ["participer à", "deelnemen aan"],
      ["appartenir à", "behoren tot"], ["concernant", "betreffende"], ["étant donné que", "aangezien"], ["le vivre-ensemble", "het samenleven"]
    ],
    grammar: [
      { t: "Lequel na een voorzetsel: auquel, duquel, dans laquelle", es: "Les pronoms relatifs composés",
        html: `<p>Je kent <i>qui, que, où</i> en <i>dont</i>. Maar wat doe je na een <b>voorzetsel</b>? «De stad <u>waarin</u> ik woon», «de reden <u>waarom</u>», «de vrienden <u>met wie</u>»: daarvoor heeft het Frans <b>lequel</b>, dat zich aanpast aan het woord waar het naar verwijst.</p>
<p><b>voorzetsel + lequel / laquelle / lesquels / lesquelles</b><br><i>la ville <b>dans laquelle</b> je vis</i> · <i>le projet <b>sur lequel</b> je travaille</i> · <i>les raisons <b>pour lesquelles</b> je pars</i></p>
<p>⚠️ <b>Met à en de versmelt het</b>, net als het lidwoord (<i>à + le = au</i>):<br><b>à:</b> <i><b>auquel</b>, à laquelle, <b>auxquels</b>, <b>auxquelles</b></i>: <i>le club <b>auquel</b> j'appartiens</i><br><b>de:</b> <i><b>duquel</b>, de laquelle, <b>desquels</b>, <b>desquelles</b></i>: <i>le parc <b>près duquel</b> j'habite</i></p>
<p><b>Personen:</b> na een voorzetsel gebruik je voor mensen liever <b>qui</b>: <i>l'ami <b>avec qui</b> je vis</i> (ook goed: <i>avec lequel</i>). Voor dingen kan <i>qui</i> niet.</p>
<p>⚠️ <b>Dont of duquel?</b> Bij gewoon <i>de</i> gebruik je <b>dont</b>: <i>le film <b>dont</b> je parle</i>. Maar zit <i>de</i> in een <b>langer voorzetsel</b> (<i>près de, à côté de, au milieu de, à cause de</i>), dan moet het <b>duquel</b> zijn: <i>le lac <b>au bord duquel</b> on campe</i>. Waarom? <i>Dont</i> moet direct achter het woord staan waar het bij hoort; staat er nog <i>au bord</i> tussen, dan kan dat niet.</p>
<p>⚠️ <b>Uitzondering:</b> na <i>parmi</i> en <i>entre</i> gebruik je ook voor personen <i>lesquels</i>, niet <i>qui</i>: <i>les candidats <b>parmi lesquels</b> il faut choisir</i>.</p>
<p>💬 In spreektaal wordt <i>dans lequel</i> voor een plaats bijna altijd <b>où</b>: <i>la ville <b>où</b> je vis</i>.</p>`,
        table: [["", "mannelijk", "vrouwelijk", "m. meervoud", "v. meervoud"], ["(sur, avec, pour…)", "lequel", "laquelle", "lesquels", "lesquelles"], ["à +", "auquel", "à laquelle", "auxquels", "auxquelles"], ["de +", "duquel", "de laquelle", "desquels", "desquelles"]],
        ex: [["C'est une association à laquelle je donne deux heures par semaine.", "Het is een vereniging waaraan ik twee uur per week geef."], ["Voici les voisins grâce auxquels j'ai trouvé ce logement.", "Dit zijn de buren dankzij wie ik deze woning heb gevonden."]] },
      { t: "De vorm op -ant: participe présent en bijvoeglijk naamwoord", es: "Le participe présent et l'adjectif verbal",
        html: `<p>Van de gérondif (<i>en marchant</i>) ken je de vorm op <b>-ant</b>. Zonder <i>en</i> bestaat hij ook, in twee gedaanten:</p>
<p>1️⃣ <b>Participe présent</b> (werkwoord): verandert <b>nooit</b> en vervangt in geschreven Frans een bijzin met <i>qui</i> of een reden. <i>Les personnes <b>habitant</b> ce quartier</i> = <i>qui habitent</i>. · <i><b>Étant</b> malade, il est resté chez lui.</i> = <i>Comme il était malade…</i> · <i>Nous cherchons un employé <b>parlant</b> néerlandais.</i> Je komt het vooral tegen in advertenties, brieven en kranten.</p>
<p>2️⃣ <b>Adjectif verbal</b> (bijvoeglijk naamwoord): past zich <b>wel</b> aan en zegt hoe iets is. <i>un film <b>intéressant</b>, une histoire <b>intéressante</b></i> · <i>des enfants <b>charmants</b></i>.</p>
<p><b>Het verschil testen:</b> kun je er <i>très</i> voor zetten of het door een ander bijvoeglijk naamwoord vervangen? Dan is het een bijvoeglijk naamwoord. Heeft het een lijdend voorwerp of een bepaling achter zich? Dan is het een werkwoord. <i>des rues <b>très bruyantes</b></i> ↔ <i>des voisins <b>faisant</b> du bruit la nuit</i>.</p>
<p>⚠️ <b>Uitzondering in de spelling:</b> bij een handvol werkwoorden schrijf je de twee vormen <b>verschillend</b>:</p>
<p><i>fatigu<b>ant</b></i> (werkwoord) ↔ <i>fatig<b>ant</b></i> (vermoeiend)<br><i>convainqu<b>ant</b></i> ↔ <i>convainc<b>ant</b></i> (overtuigend)<br><i>provoqu<b>ant</b></i> ↔ <i>provoc<b>ant</b></i> (uitdagend)<br><i>différ<b>ant</b></i> ↔ <i>différ<b>ent</b></i> (verschillend)<br><i>précéd<b>ant</b></i> ↔ <i>précéd<b>ent</b></i> (vorig)<br><i>négligeant</i> ↔ <i>néglig<b>ent</b></i> (nalatig)</p>
<p><b>Waarom?</b> Het participe houdt de stam van het werkwoord aan (<i>fatigu-er → fatigu-ant</i>); het bijvoeglijk naamwoord is rechtstreeks uit het Latijn overgenomen (<i>differens, -entis</i>) en hoeft de u niet, want die diende alleen om de g hard te houden vóór een e.</p>`,
        table: [["participe présent (onveranderlijk)", "bijvoeglijk naamwoord (past zich aan)"], ["un travail fatiguant tout le monde", "un travail fatigant"], ["des arguments convainquant le jury", "des arguments convaincants"], ["des opinions différant des miennes", "des opinions différentes"]],
        ex: [["Les locataires souhaitant participer peuvent s'inscrire ici.", "Huurders die willen meedoen, kunnen zich hier inschrijven."], ["Ne connaissant personne, elle s'est inscrite dans une association.", "Omdat ze niemand kende, heeft ze zich bij een vereniging aangesloten."]] }
    ],
    dialogue: {
      t: "La fête des voisins", place: "Lille 🇫🇷",
      lines: [
        ["Nadège", "Bonsoir ! Vous êtes le nouveau locataire du troisième, n'est-ce pas ?", "Goedenavond! U bent de nieuwe huurder van de derde verdieping, toch?"],
        ["Tom", "Oui, j'ai emménagé il y a deux semaines. Je m'appelle Tom.", "Ja, ik ben er twee weken geleden ingetrokken. Ik heet Tom."],
        ["Nadège", "Enchantée, Nadège. C'est l'immeuble dans lequel j'ai grandi, figurez-vous !", "Aangenaam, Nadège. Dit is het gebouw waarin ik ben opgegroeid, stelt u zich voor!"],
        ["Tom", "Vraiment ? Alors vous connaissez tout le monde.", "Echt? Dan kent u iedereen."],
        ["Nadège", "Presque. Vous voyez la dame à côté de laquelle est assis le petit garçon ? C'est madame Diallo, la présidente de notre association.", "Bijna. Ziet u de dame naast wie dat jongetje zit? Dat is mevrouw Diallo, de voorzitter van onze vereniging."],
        ["Tom", "Une association ? À quoi sert-elle ?", "Een vereniging? Waar dient die voor?"],
        ["Nadège", "C'est grâce à elle qu'on a un jardin partagé. Les habitants souhaitant y participer paient cinq euros par an.", "Dankzij haar hebben we een gedeelde tuin. Bewoners die willen meedoen, betalen vijf euro per jaar."],
        ["Tom", "C'est exactement le genre de projet auquel j'aimerais participer.", "Dat is precies het soort project waaraan ik graag zou meedoen."],
        ["Nadège", "Parfait ! Venez, je vous présente. Et ne vous inquiétez pas pour le bruit ce soir : une fois par an, c'est permis.", "Perfect! Kom, ik stel u voor. En maakt u zich geen zorgen over het lawaai vanavond: één keer per jaar mag het."],
        ["Tom", "Ça ne me dérange pas. Venant d'Amsterdam, je suis habitué !", "Dat stoort me niet. Ik kom uit Amsterdam, ik ben het gewend!"]
      ],
      q: [
        { t: "mc", q: "Depuis quand Tom habite-t-il l'immeuble ?", o: ["Depuis deux semaines", "Depuis son enfance", "Depuis un an"] },
        { t: "mc", q: "Qui est madame Diallo ?", o: ["La présidente de l'association", "La propriétaire de l'immeuble", "La mère de Nadège"] },
        { t: "mc", q: "À quoi Tom aimerait-il participer ?", o: ["Au jardin partagé", "À une colocation", "À un déménagement"] }
      ]
    },
    culture: { t: "La Fête des voisins en de HLM", html: `<p>Op de laatste vrijdag van mei (of begin juni) zetten Fransen tafels op de binnenplaats of in de hal en neemt iedereen iets te eten mee: <b>la Fête des voisins</b>. Het idee ontstond in 1999 in Parijs, nadat een oudere bewoonster pas maanden na haar dood in haar appartement was gevonden. Nu doen miljoenen mensen in heel Europa mee.</p>
<p>Ongeveer één op de zes Franse huishoudens woont in een <b>HLM</b> (<i>habitation à loyer modéré</i>), een sociale huurwoning. De wet verplicht grotere gemeenten om minstens 20 tot 25 procent sociale woningen te hebben, juist om <i>la mixité sociale</i> te bevorderen. Rijke gemeenten betalen soms liever de boete.</p>
<p>Het woord <i>banlieue</i> betekent gewoon «voorstad», maar roept in Frankrijk vaak het beeld op van de grote flatwijken rond Parijs, Lyon en Marseille.</p>` },
    ex: [
      { t: "cloze", s: "C'est la ville dans ___ je suis né.", a: ["laquelle"], o: ["laquelle", "lequel", "que"], nl: "Dat is de stad waarin ik geboren ben.", x: "La ville is vrouwelijk: dans laquelle.", tag: "fr-rel-comp" },
      { t: "cloze", s: "C'est le projet ___ je participe. (participer à)", a: ["auquel"], o: ["auquel", "à lequel", "dont"], nl: "Dat is het project waaraan ik deelneem.", x: "à + lequel versmelt tot auquel, net als à + le = au.", tag: "fr-rel-comp" },
      { t: "cloze", s: "Le parc près ___ j'habite est très calme.", a: ["duquel"], o: ["duquel", "dont", "de que"], nl: "Het park waarbij ik in de buurt woon is heel rustig.", x: "Uitzondering: na een langer voorzetsel met de (près de) kan dont niet; het moet duquel zijn.", tag: "fr-rel-comp" },
      { t: "cloze", s: "Les raisons pour ___ il part sont personnelles.", a: ["lesquelles"], o: ["lesquelles", "lesquels", "laquelle"], nl: "De redenen waarom hij vertrekt zijn persoonlijk.", tag: "fr-rel-comp" },
      { t: "cloze", s: "Nous cherchons un employé ___ néerlandais.", a: ["parlant"], o: ["parlant", "parlants", "parlé"], nl: "We zoeken een medewerker die Nederlands spreekt.", x: "Participe présent: verandert nooit.", tag: "fr-part-pres" },
      { t: "cloze", s: "C'est un travail très ___ .", a: ["fatigant"], o: ["fatigant", "fatiguant", "fatigué"], nl: "Het is heel vermoeiend werk.", x: "Uitzondering in de spelling: het bijvoeglijk naamwoord is fatigant, zonder u.", tag: "fr-part-pres" },
      { t: "mc", q: "Welke zin is correct?", o: ["L'ami avec qui je vis.", "L'ami avec que je vis.", "L'ami avec dont je vis."], x: "Na een voorzetsel bij personen: qui.", tag: "fr-rel-comp" },
      { t: "mc", q: "«Étant malade, il est resté chez lui.» Wat betekent «étant malade»?", o: ["Omdat hij ziek was", "Hoewel hij ziek was", "Toen hij beter was"], tag: "fr-part-pres" },
      { t: "mc", q: "Welke spelling is het bijvoeglijk naamwoord «verschillend»?", o: ["différent", "différant", "différend"], tag: "fr-part-pres" },
      { t: "tr", nl: "De vrienden met wie ik woon.", a: ["Les amis avec qui je vis.", "Les amis avec lesquels je vis.", "Les amis avec qui j'habite.", "Les amis avec lesquels j'habite."], tag: "fr-rel-comp" },
      { t: "tr", nl: "Ik ben twee weken geleden verhuisd.", a: ["J'ai déménagé il y a deux semaines."], tag: "fr-voc" },
      { t: "tr", nl: "Ik kan goed opschieten met mijn buren.", a: ["Je m'entends bien avec mes voisins."], tag: "fr-voc" },
      { t: "order", s: "C'est le genre de projet auquel j'aimerais participer.", nl: "Dat is het soort project waaraan ik graag zou meedoen.", tag: "fr-ordre" },
      { t: "match", p: [["à + lequel", "auquel"], ["de + lequel", "duquel"], ["à + lesquels", "auxquels"], ["de + lesquelles", "desquelles"], ["à + laquelle", "à laquelle"]], tag: "fr-rel-comp" }
    ],
    reading: {
      t: "Annonce : jardin partagé du quartier Fives", type: "Mededeling",
      p: [
        ["L'association « Fives en vert », au sein de laquelle travaillent une trentaine de bénévoles, ouvre un nouveau jardin partagé rue de Lannoy. Le terrain, sur lequel se trouvait autrefois une usine, a été entièrement nettoyé par la ville.", "De vereniging 'Fives en vert', waarbinnen een dertigtal vrijwilligers werken, opent een nieuwe gedeelde tuin in de rue de Lannoy. Het terrein, waarop vroeger een fabriek stond, is door de stad volledig schoongemaakt."],
        ["Les habitants souhaitant cultiver une parcelle peuvent s'inscrire avant le 15 mars. Les personnes ne disposant pas de matériel pourront en emprunter sur place. Étant donné le nombre limité de parcelles, la priorité sera donnée aux familles vivant en appartement.", "Bewoners die een perceel willen bewerken, kunnen zich vóór 15 maart inschrijven. Wie geen materiaal heeft, kan het ter plaatse lenen. Gezien het beperkte aantal percelen krijgen gezinnen die in een appartement wonen voorrang."],
        ["Ce jardin est avant tout un lieu de rencontre grâce auquel nous espérons renforcer la solidarité entre voisins. Une réunion, à laquelle tous sont invités, aura lieu samedi à dix heures.", "Deze tuin is vóór alles een ontmoetingsplek waarmee we de solidariteit tussen buren hopen te versterken. Een bijeenkomst, waarvoor iedereen is uitgenodigd, vindt zaterdag om tien uur plaats."]
      ],
      gl: [["la parcelle", "het perceel"], ["cultiver", "bewerken / telen"], ["disposer de", "beschikken over"], ["emprunter", "lenen"], ["renforcer", "versterken"]],
      q: [
        { t: "mc", q: "Qu'y avait-il autrefois sur le terrain ?", o: ["Une usine", "Un parc", "Une école"] },
        { t: "mc", q: "Qui aura la priorité ?", o: ["Les familles vivant en appartement", "Les bénévoles", "Les propriétaires"] },
        { t: "mc", q: "Quel est le but principal du jardin ?", o: ["Renforcer la solidarité entre voisins", "Vendre des légumes", "Remplacer l'usine"] }
      ]
    },
    say: [["C'est la ville dans laquelle je vis.", "Dat is de stad waarin ik woon."], ["C'est un projet auquel j'aimerais participer.", "Dat is een project waaraan ik graag zou meedoen."], ["Je m'entends bien avec mes voisins.", "Ik kan goed opschieten met mijn buren."], ["J'ai emménagé il y a deux semaines.", "Ik ben er twee weken geleden ingetrokken."]],
    task: { nl: "Beschrijf je buurt in 5 zinnen. Gebruik drie betrekkelijke bijzinnen met een voorzetsel (dans lequel, auquel, près duquel, avec qui…).", model: "J'habite un quartier dans lequel on trouve encore de petits commerces. L'immeuble près duquel je gare mon vélo date de 1930. Mes voisins, avec qui je m'entends très bien, organisent une fête chaque été. Il y a aussi une association à laquelle je donne quelques heures par mois. C'est la raison pour laquelle je ne veux pas déménager." },
    scenario: { nl: "Je bent net verhuisd naar Lille en bent op het buurtfeest. Maak kennis met een buurvrouw.", role: "You are Nadège, a warm neighbour in Lille who has lived in the building all her life. At the Fête des voisins, welcome the learner (new tenant), introduce other neighbours and the residents' association, and ask about where they lived before. Use relative clauses with prepositions naturally (l'immeuble dans lequel…, l'association à laquelle…, la dame à côté de laquelle…, les voisins avec qui…). Use vous. If the learner writes 'à lequel' or uses 'dont' after 'près de', give the right form in passing.", goal: "Stel jezelf voor, vertel waar je vandaan komt en gebruik twee keer een voorzetsel + lequel/laquelle/qui (dans lequel, auquel, avec qui)." }
  });

  /* ───────────────────────── B2 · 7 ───────────────────────── */
  U({
    id: "fr-b2-07", level: "B2", icon: "📱", title: "Il a promis qu'il rappellerait", nl: "Digitaal leven: nauwkeurig navertellen wat iemand zei",
    goals: ["Over internet, privacy en schermen praten", "Navertellen in het verleden met de juiste tijden", "Tijd- en plaatswoorden aanpassen (demain → le lendemain)", "Het juiste werkwoord kiezen om te citeren: affirmer, promettre, reprocher"],
    vocab: [
      ["le numérique", "de digitale wereld"], ["l'écran", "het scherm"], ["le réseau social", "het sociale netwerk"], ["les données personnelles", "de persoonsgegevens"], ["la vie privée", "de privacy"], ["le mot de passe", "het wachtwoord"],
      ["télécharger", "downloaden"], ["mettre à jour", "updaten"], ["se connecter", "inloggen"], ["le compte", "het account"], ["l'appli", "de app"], ["le piratage", "het hacken"],
      ["l'intelligence artificielle", "de kunstmatige intelligentie"], ["l'algorithme", "het algoritme"], ["accro", "verslaafd (informeel)"], ["se déconnecter", "uitloggen / offline gaan"], ["prétendre", "beweren (zonder bewijs)"], ["avouer", "bekennen"],
      ["promettre", "beloven"], ["reprocher", "verwijten"], ["conseiller", "aanraden"], ["prévenir", "waarschuwen"], ["ajouter", "toevoegen"], ["préciser", "preciseren"],
      ["le lendemain", "de volgende dag"], ["la veille", "de dag ervoor"], ["ce jour-là", "die dag"], ["l'arnaque", "de oplichting"]
    ],
    grammar: [
      { t: "Indirecte rede in het verleden: de tijden schuiven op", es: "Le discours rapporté au passé",
        html: `<p>Op B1 leerde je de basis: <i>Il dit qu'il <b>est</b> fatigué</i> → <i>Il <b>a dit</b> qu'il <b>était</b> fatigué.</i> Staat het inleidende werkwoord in het <b>verleden</b>, dan schuift elke tijd één stap terug. Dat heet <i>la concordance des temps</i>. Hier is het volledige systeem:</p>
<p><b>présent → imparfait:</b> «Je <b>suis</b> en ligne.» → Elle a dit qu'elle <b>était</b> en ligne.<br><b>passé composé → plus-que-parfait:</b> «J'<b>ai changé</b> mon mot de passe.» → Il a dit qu'il <b>avait changé</b> son mot de passe.<br><b>futur → conditionnel:</b> «Je te <b>rappellerai</b>.» → Il a promis qu'il me <b>rappellerait</b>.<br><b>futur antérieur → conditionnel passé:</b> «J'<b>aurai fini</b>.» → Il a dit qu'il <b>aurait fini</b>.</p>
<p><b>Wat niet verandert:</b> imparfait, plus-que-parfait, conditionnel en subjonctif blijven zoals ze zijn.</p>
<p>⚠️ <b>Let op, hier gaan Nederlanders de mist in:</b> de toekomst in het verleden is in het Frans de <b>conditionnel</b>, niet de futur. «Hij zei dat hij <u>zou</u> komen» = <i>Il a dit qu'il <b>viendrait</b></i>. Dat lijkt op het Nederlands. Maar: «Hij zei dat hij komt» kan in het Nederlands ook; in verzorgd Frans <b>niet</b>.</p>
<p><b>Gebiedende wijs → de + infinitief:</b> «<b>Éteins</b> ton téléphone !» → Elle m'a demandé <b>d'éteindre</b> mon téléphone. Ontkennend: <b>de ne pas</b> + infinitief.</p>
<p><b>Vragen:</b> ja/nee → <b>si</b>; <i>qu'est-ce que</i> → <b>ce que</b>; <i>qu'est-ce qui</i> → <b>ce qui</b>; andere vraagwoorden blijven. Geen inversie, geen vraagteken: <i>Il m'a demandé <b>si</b> j'avais un compte et <b>ce que</b> je pensais de l'appli.</i></p>
<p><b>Tijd en plaats schuiven mee:</b> <i>aujourd'hui → ce jour-là</i> · <i>demain → le lendemain</i> · <i>hier → la veille</i> · <i>la semaine prochaine → la semaine suivante</i> · <i>la semaine dernière → la semaine précédente</i> · <i>ici → là</i> · <i>maintenant → à ce moment-là</i>.</p>
<p>⚠️ <b>Uitzondering:</b> is wat gezegd werd <b>nog steeds waar</b> of een algemene waarheid, dan mag de tijd blijven staan: <i>Le professeur a expliqué que la Terre <b>tourne</b> autour du Soleil.</i> Waarom? Terugschuiven zou suggereren dat het niet meer geldt.</p>`,
        table: [["directe rede", "indirecte rede (verleden)"], ["« Je suis fatigué. »", "Il a dit qu'il était fatigué."], ["« J'ai tout supprimé. »", "Il a dit qu'il avait tout supprimé."], ["« Je t'écrirai demain. »", "Il a dit qu'il m'écrirait le lendemain."], ["« Ne clique pas ! »", "Il m'a dit de ne pas cliquer."], ["« Tu as vu ce message ? »", "Il m'a demandé si j'avais vu ce message."]],
        ex: [["Elle m'a prévenu que le site n'était pas fiable.", "Ze waarschuwde me dat de site niet betrouwbaar was."], ["Ils ont annoncé qu'ils fermeraient mon compte le lendemain.", "Ze kondigden aan dat ze mijn account de volgende dag zouden sluiten."]] },
      { t: "Meer dan «dire»: werkwoorden om te citeren", es: "Les verbes introducteurs",
        html: `<p>Goed navertellen is ook: het juiste werkwoord kiezen. Daarmee vat je de <b>bedoeling</b> van de spreker samen. Let op wat erachter komt: <b>que</b> + zin, of <b>de</b> + infinitief.</p>
<p><b>+ que + zin</b> (mededelen): <i>affirmer</i> (stellig beweren), <i>déclarer</i>, <i>expliquer</i>, <i>préciser</i>, <i>ajouter</i>, <i>répondre</i>, <i>avouer / reconnaître</i> (toegeven), <i>prétendre</i> (beweren: de spreker gelooft het niet!), <i>prévenir</i> (waarschuwen).</p>
<p><b>+ à quelqu'un + de + infinitief</b> (iemand iets laten doen): <i>demander, conseiller, proposer, suggérer, ordonner, interdire, permettre, reprocher</i>: <i>Il <b>m'a conseillé de</b> changer mon mot de passe.</i> · <i>Elle <b>lui a reproché d'</b>être toujours sur son téléphone.</i></p>
<p><b>+ de + infinitief</b> (zelf iets doen): <i>promettre, accepter, refuser, menacer, jurer</i>: <i>Il <b>a promis de</b> rappeler.</i> · <i>Elle <b>a refusé de</b> donner son adresse.</i></p>
<p>⚠️ <b>Uitzonderingen zonder aan-vorm:</b> <i>remercier, féliciter, accuser, prier, supplier</i> en <i>encourager, inviter</i> hebben een <b>lijdend</b> voorwerp, geen <i>à</i>: <i>Je <b>l'</b>ai remercié <b>d'</b>être venu.</i> · <i>On <b>l'</b>a accusé <b>d'</b>avoir piraté le site.</i> · <i>Je <b>l'</b>ai encouragé <b>à</b> continuer.</i> (met <i>à</i> vóór de infinitief!). Waarom? Bij deze werkwoorden is de persoon degene die de handeling ondergaat (je bedankt iemand), niet degene aan wie je iets meedeelt.</p>
<p>⚠️ <b>Valse vriend:</b> <i>prétendre</i> is niet «pretenderen te zijn» of «doen alsof» (dat is <i>faire semblant</i>), maar «beweren». <i>Il prétend qu'on l'a piraté.</i> = Hij beweert dat hij gehackt is (en ik twijfel eraan).</p>`,
        table: [["directe rede", "met een precies werkwoord"], ["« D'accord, je viendrai. »", "Il a accepté de venir."], ["« Tu devrais te déconnecter. »", "Il m'a conseillé de me déconnecter."], ["« C'est moi qui ai fait ça. »", "Il a avoué qu'il avait fait ça."], ["« Tu es toujours en retard ! »", "Il m'a reproché d'être toujours en retard."], ["« Merci d'être venu. »", "Il m'a remercié d'être venu."]],
        ex: [["Le vendeur a prétendu que l'appareil était neuf.", "De verkoper beweerde dat het apparaat nieuw was."], ["Elle a promis de ne plus regarder son téléphone à table.", "Ze beloofde niet meer op haar telefoon te kijken aan tafel."]] }
    ],
    dialogue: {
      t: "Un drôle de message", place: "Québec 🇨🇦",
      lines: [
        ["Félix", "Tu as l'air inquiète. Qu'est-ce qui se passe ?", "Je ziet er bezorgd uit. Wat is er aan de hand?"],
        ["Sanne", "J'ai reçu un message de ma banque hier soir. Enfin, je croyais que c'était ma banque.", "Ik kreeg gisteravond een bericht van mijn bank. Tenminste, ik dacht dat het mijn bank was."],
        ["Félix", "Aïe. Qu'est-ce qu'il disait ?", "Au. Wat stond erin?"],
        ["Sanne", "Qu'on avait piraté mon compte et que je devais cliquer sur un lien pour le protéger.", "Dat mijn account gehackt was en dat ik op een link moest klikken om het te beveiligen."],
        ["Félix", "Et tu as cliqué ?", "En heb je geklikt?"],
        ["Sanne", "Non. Ils demandaient aussi mon mot de passe, ça m'a paru bizarre. J'ai appelé la banque ce matin.", "Nee. Ze vroegen ook mijn wachtwoord, dat vond ik vreemd. Ik heb vanochtend de bank gebeld."],
        ["Félix", "Qu'est-ce qu'ils t'ont répondu ?", "Wat hebben ze geantwoord?"],
        ["Sanne", "La conseillère m'a expliqué que c'était une arnaque et que la banque ne demandait jamais de mot de passe par message.", "De adviseur legde uit dat het oplichting was en dat de bank nooit per bericht om een wachtwoord vraagt."],
        ["Félix", "Ouf. Elle t'a conseillé de faire quelque chose ?", "Oef. Heeft ze je aangeraden iets te doen?"],
        ["Sanne", "De changer mon mot de passe quand même, et elle a promis qu'elle me rappellerait demain.", "Toch mijn wachtwoord te veranderen, en ze beloofde dat ze me morgen zou terugbellen."],
        ["Félix", "Tu as bien fait de ne pas cliquer. Mon oncle, lui, a avoué qu'il avait tout donné : nom, adresse, numéro de carte…", "Goed dat je niet geklikt hebt. Mijn oom heeft toegegeven dat hij alles had gegeven: naam, adres, kaartnummer…"]
      ],
      q: [
        { t: "mc", q: "Que disait le message ?", o: ["Que le compte de Sanne avait été piraté", "Que Sanne avait gagné de l'argent", "Que la banque fermait"] },
        { t: "mc", q: "Qu'a expliqué la conseillère ?", o: ["Que c'était une arnaque", "Que Sanne devait cliquer sur le lien", "Que le compte était vide"] },
        { t: "mc", q: "Qu'a promis la conseillère ?", o: ["De rappeler le lendemain", "De changer le mot de passe", "D'appeler la police"] }
      ]
    },
    culture: { t: "Courriel, pourriel en de strijd tegen het Engels", html: `<p>In Québec waakt het <b>Office québécois de la langue française</b> over de taal, en nergens is men zo creatief met digitale woorden. Een e-mail is een <b>courriel</b> (<i>courrier électronique</i>), spam is <b>pourriel</b> (<i>poubelle</i> + <i>courriel</i>), chatten is <b>clavarder</b> (<i>clavier</i> + <i>bavarder</i>), een podcast is een <b>balado</b> en phishing is <b>hameçonnage</b>.</p>
<p>In Frankrijk zegt men meestal gewoon <i>un mail</i>, <i>un spam</i>, <i>un podcast</i>, al is <i>courriel</i> officieel. Wel typisch Frans: <i>un ordinateur</i> (computer), <i>un logiciel</i> (software), <i>le numérique</i> (digitaal; <i>digital</i> betekent eigenlijk «van de vingers») en de apenstaart heet <b>arobase</b>.</p>
<p>Europa's strenge privacywet, in het Frans <b>le RGPD</b>, is mede geïnspireerd op de Franse <i>loi Informatique et Libertés</i> uit 1978 en haar toezichthouder, de <b>CNIL</b>.</p>` },
    ex: [
      { t: "cloze", s: "« Je suis en ligne. » → Elle a dit qu'elle ___ en ligne.", a: ["était"], o: ["était", "est", "serait"], nl: "Ze zei dat ze online was.", tag: "fr-concordance" },
      { t: "cloze", s: "« J'ai changé mon mot de passe. » → Il a dit qu'il ___ changé son mot de passe.", a: ["avait"], o: ["avait", "a", "aurait"], nl: "Hij zei dat hij zijn wachtwoord had veranderd.", tag: "fr-concordance" },
      { t: "cloze", s: "« Je te rappellerai. » → Elle a promis qu'elle me ___ .", a: ["rappellerait"], o: ["rappellerait", "rappellera", "rappelait"], nl: "Ze beloofde dat ze me zou terugbellen.", x: "Let op: toekomst in het verleden = conditionnel.", tag: "fr-concordance" },
      { t: "cloze", s: "« Ne clique pas ! » → Il m'a dit de ne pas ___ .", a: ["cliquer"], o: ["cliquer", "clique", "cliquais"], nl: "Hij zei dat ik niet moest klikken.", tag: "fr-concordance" },
      { t: "cloze", s: "« Je viendrai demain. » → Il a dit qu'il viendrait ___ .", a: ["le lendemain"], o: ["le lendemain", "demain", "la veille"], nl: "Hij zei dat hij de volgende dag zou komen.", tag: "fr-concordance" },
      { t: "cloze", s: "Il m'a conseillé ___ changer mon mot de passe.", a: ["de"], o: ["de", "à", "que"], nl: "Hij raadde me aan mijn wachtwoord te veranderen.", tag: "fr-verbes-intro" },
      { t: "mc", q: "«Il prétend qu'on l'a piraté.» Wat denkt de spreker?", o: ["Ik twijfel eraan", "Het is zeker waar", "Hij doet alsof hij een hacker is"], x: "Valse vriend: prétendre = beweren (zonder dat de spreker het gelooft).", tag: "fr-verbes-intro" },
      { t: "mc", q: "Welke zin is correct?", o: ["Je l'ai remercié d'être venu.", "Je lui ai remercié d'être venu.", "Je l'ai remercié à être venu."], x: "Uitzondering: remercier heeft een lijdend voorwerp (le), geen à.", tag: "fr-verbes-intro" },
      { t: "mc", q: "«Qu'est-ce que tu fais ?» → Il m'a demandé…", o: ["ce que je faisais.", "qu'est-ce que je faisais.", "que je faisais."], tag: "fr-concordance" },
      { t: "tr", nl: "Ze zei dat ze moe was.", a: ["Elle a dit qu'elle était fatiguée."], tag: "fr-concordance" },
      { t: "tr", nl: "Hij weigerde zijn adres te geven.", a: ["Il a refusé de donner son adresse."], tag: "fr-verbes-intro" },
      { t: "tr", nl: "Het is oplichting.", a: ["C'est une arnaque."], tag: "fr-voc" },
      { t: "order", s: "Il m'a demandé si j'avais vu ce message.", nl: "Hij vroeg me of ik dat bericht had gezien.", tag: "fr-ordre" },
      { t: "match", p: [["demain", "le lendemain"], ["hier", "la veille"], ["aujourd'hui", "ce jour-là"], ["la semaine prochaine", "la semaine suivante"], ["maintenant", "à ce moment-là"]], tag: "fr-concordance" }
    ],
    reading: {
      t: "Une semaine sans écran", type: "Reportage",
      p: [
        ["Dans un collège de Rimouski, au Québec, les élèves ont relevé un défi : sept jours sans téléphone. La directrice nous a expliqué que l'idée venait des élèves eux-mêmes. Plusieurs lui avaient avoué qu'ils passaient plus de six heures par jour devant un écran.", "Op een middelbare school in Rimouski, in Québec, zijn de leerlingen een uitdaging aangegaan: zeven dagen zonder telefoon. De directrice legde ons uit dat het idee van de leerlingen zelf kwam. Verschillenden hadden haar bekend dat ze meer dan zes uur per dag voor een scherm zaten."],
        ["Les premiers jours ont été difficiles. Léa, quatorze ans, nous a confié qu'elle avait cherché son téléphone dans sa poche au moins cinquante fois. Son ami Thomas a prétendu que cela ne le dérangeait pas, mais ses parents ont précisé qu'il n'avait jamais été d'aussi mauvaise humeur.", "De eerste dagen waren moeilijk. Léa, veertien jaar, vertrouwde ons toe dat ze haar telefoon minstens vijftig keer in haar zak had gezocht. Haar vriend Thomas beweerde dat het hem niets deed, maar zijn ouders voegden eraan toe dat hij nog nooit zo'n slecht humeur had gehad."],
        ["À la fin de la semaine, la plupart ont reconnu qu'ils dormaient mieux. Certains ont promis qu'ils éteindraient leur téléphone chaque soir à vingt et une heures. Tiendront-ils parole ? La directrice a répondu en souriant qu'elle poserait la question le mois suivant.", "Aan het eind van de week gaven de meesten toe dat ze beter sliepen. Sommigen beloofden dat ze hun telefoon elke avond om negen uur zouden uitzetten. Zullen ze woord houden? De directrice antwoordde glimlachend dat ze de vraag de maand daarop zou stellen."]
      ],
      gl: [["relever un défi", "een uitdaging aangaan"], ["confier", "toevertrouwen"], ["la poche", "de zak"], ["l'humeur", "het humeur"], ["tenir parole", "woord houden"]],
      q: [
        { t: "mc", q: "De qui venait l'idée du défi ?", o: ["Des élèves", "De la directrice", "Des parents"] },
        { t: "mc", q: "Qu'ont précisé les parents de Thomas ?", o: ["Qu'il n'avait jamais été d'aussi mauvaise humeur", "Que cela ne le dérangeait pas", "Qu'il dormait mieux"] },
        { t: "mc", q: "Qu'ont promis certains élèves ?", o: ["D'éteindre leur téléphone chaque soir", "De ne plus jamais utiliser de téléphone", "De refaire le défi chaque mois"] }
      ]
    },
    say: [["Elle a promis qu'elle me rappellerait.", "Ze beloofde dat ze me zou terugbellen."], ["Il m'a conseillé de changer mon mot de passe.", "Hij raadde me aan mijn wachtwoord te veranderen."], ["Elle m'a demandé si j'avais un compte.", "Ze vroeg me of ik een account had."], ["C'est une arnaque, ne clique pas !", "Het is oplichting, klik niet!"]],
    task: { nl: "Vertel in 5 zinnen een gesprek na dat je gisteren had (met een helpdesk, een collega, een vriend). Gebruik vier verschillende werkwoorden: bijvoorbeeld expliquer, demander, conseiller, promettre.", model: "Hier, j'ai appelé mon opérateur parce que ma connexion ne marchait plus. Le technicien m'a demandé si j'avais redémarré la box. Je lui ai répondu que je l'avais fait trois fois. Il m'a alors expliqué qu'il y avait une panne dans mon quartier et m'a conseillé d'attendre. Il a promis que tout serait réparé le lendemain." },
    scenario: { nl: "Je kreeg een verdacht bericht van «je bank». Vertel een vriend in Québec wat erin stond en wat de bank zei.", role: "You are Félix, a friend from Québec City who works in IT. The learner received a suspicious message and called the bank. Ask what the message said, what the bank answered, what they advised and promised. Your questions should invite reported speech in the past (Qu'est-ce qu'il disait ? Qu'est-ce qu'ils t'ont répondu ?). Tell a short story of your own using varied reporting verbs (avouer, prétendre, conseiller de, promettre que + conditionnel). If the learner keeps the futur after a past reporting verb, model the conditionnel. Use a few Québec terms (courriel, hameçonnage) and explain them if asked.", goal: "Vertel wat er in het bericht stond en wat de bank zei, met minstens één plus-que-parfait en één conditionnel na een verleden tijd." }
  });

  /* ───────────────────────── B2 · 8 ───────────────────────── */
  U({
    id: "fr-b2-08", level: "B2", icon: "🎭", title: "J'y tiens beaucoup", nl: "Kunst en cultuur: werkwoorden met à en de, en wat y en en dan doen",
    goals: ["Over film, theater, musea en erfgoed praten", "Weten welk voorzetsel bij een werkwoord hoort", "Y en en gebruiken bij werkwoorden met à en de", "Het verschil maken tussen een ding (y, en) en een persoon (à lui, de lui)"],
    vocab: [
      ["le patrimoine", "het erfgoed"], ["l'œuvre", "het (kunst)werk"], ["le chef-d'œuvre", "het meesterwerk"], ["l'exposition", "de tentoonstelling"], ["le tableau", "het schilderij"], ["la sculpture", "het beeldhouwwerk"],
      ["la pièce de théâtre", "het toneelstuk"], ["le metteur en scène", "de regisseur (toneel)"], ["le réalisateur / la réalisatrice", "de regisseur (film)"], ["le comédien / la comédienne", "de acteur / actrice (toneel)"], ["la séance", "de voorstelling (bioscoop)"], ["le spectateur", "de toeschouwer"],
      ["tenir à", "gehecht zijn aan / staan op"], ["s'intéresser à", "zich interesseren voor"], ["assister à", "bijwonen"], ["s'habituer à", "wennen aan"], ["renoncer à", "afzien van"], ["réfléchir à", "nadenken over"],
      ["se souvenir de", "zich herinneren"], ["se passer de", "kunnen missen / zonder kunnen"], ["se méfier de", "wantrouwen"], ["s'occuper de", "zich bezighouden met / zorgen voor"], ["se moquer de", "spotten met"], ["rêver de", "dromen van"],
      ["dépendre de", "afhangen van"], ["manquer à", "gemist worden door"], ["plaire à", "bevallen aan"], ["bouleversant / bouleversante", "aangrijpend"]
    ],
    grammar: [
      { t: "Werkwoord + à of de: het voorzetsel hoort bij het werkwoord", es: "Les verbes à préposition",
        html: `<p>In het Nederlands denk je <i>aan</i> iets, droom je <i>van</i> iets en interesseer je je <i>voor</i> iets. Het Frans heeft bijna altijd <b>à</b> of <b>de</b>, maar welke van de twee valt niet te raden uit het Nederlands. Leer het werkwoord daarom <b>samen met zijn voorzetsel</b>.</p>
<p><b>Met à:</b> <i>penser à</i> (denken aan), <i>s'intéresser à</i>, <i>tenir à</i>, <i>assister à</i>, <i>participer à</i>, <i>s'habituer à</i>, <i>renoncer à</i>, <i>réfléchir à</i>, <i>jouer à</i> (een spel), <i>ressembler à</i>.</p>
<p><b>Met de:</b> <i>parler de</i>, <i>rêver de</i>, <i>se souvenir de</i>, <i>s'occuper de</i>, <i>avoir besoin / envie / peur de</i>, <i>se passer de</i>, <i>se méfier de</i>, <i>dépendre de</i>, <i>jouer de</i> (een instrument), <i>profiter de</i>.</p>
<p>⚠️ <b>Let op, één werkwoord, twee voorzetsels, twee betekenissen:</b><br><i>penser <b>à</b></i> = denken aan: <i>Je pense <b>à</b> toi.</i> ↔ <i>penser <b>de</b></i> = vinden van: <i>Qu'est-ce que tu penses <b>de</b> ce film ?</i><br><i>jouer <b>à</b></i> + spel/sport: <i>jouer <b>au</b> tennis</i> ↔ <i>jouer <b>de</b></i> + instrument: <i>jouer <b>du</b> piano</i><br><i>manquer <b>à</b></i>: <i>Tu <b>me</b> manques.</i> = <u>Ik</u> mis <u>jou</u>. ↔ <i>manquer <b>de</b></i> = tekortkomen aan: <i>Il manque <b>de</b> patience.</i></p>
<p>⚠️ <b>De omgekeerde wereld van manquer en plaire:</b> bij <i>manquer à</i> en <i>plaire à</i> is het onderwerp het ding of de persoon die het gevoel <b>veroorzaakt</b>. <i>Paris <b>me</b> manque.</i> = Ik mis Parijs. <i>Ce tableau <b>lui</b> plaît.</i> = Hij vindt dit schilderij mooi. Waarom? Letterlijk staat er «Parijs ontbreekt aan mij», «dit schilderij bevalt hem»: het Frans bekijkt het vanuit het ding, niet vanuit jou.</p>
<p>⚠️ <b>Uitzonderingen zonder voorzetsel</b> waar het Nederlands er wel een heeft: <i>attendre</i> (wachten op), <i>chercher</i> (zoeken naar), <i>écouter</i> (luisteren naar), <i>regarder</i> (kijken naar), <i>demander</i> (vragen om): <i>J'attends le bus. J'écoute la radio.</i></p>`,
        table: [["werkwoord", "voorbeeld", "vertaling"], ["tenir à", "Je tiens à ce tableau.", "Ik ben gehecht aan dit schilderij."], ["assister à", "J'ai assisté au spectacle.", "Ik heb de voorstelling bijgewoond."], ["se souvenir de", "Je me souviens de ce film.", "Ik herinner me die film."], ["se passer de", "Je ne peux pas me passer de musique.", "Ik kan niet zonder muziek."], ["plaire à", "Cette pièce m'a plu.", "Dat stuk beviel me."]],
        ex: [["Qu'est-ce que tu as pensé de l'exposition ?", "Wat vond je van de tentoonstelling?"], ["Ma ville natale me manque.", "Ik mis mijn geboortestad."]] },
      { t: "Y en en bij deze werkwoorden: ding of persoon?", es: "Y, en ou pronom tonique ?",
        html: `<p>Nu het voorzetsel vastligt, kun je het zinsdeel vervangen. De regel is eenvoudig, maar hij heeft een belangrijke splitsing:</p>
<p><b>à + ding → y</b>: <i>Je pense <b>à mon avenir</b>.</i> → <i>J'<b>y</b> pense.</i> · <i>Tu tiens à ce livre ?</i> → <i>Oui, j'<b>y</b> tiens.</i><br><b>de + ding → en</b>: <i>Je me souviens <b>de ce film</b>.</i> → <i>Je m'<b>en</b> souviens.</i> · <i>J'ai besoin de repos.</i> → <i>J'<b>en</b> ai besoin.</i></p>
<p>⚠️ <b>Uitzondering: bij personen geen y of en.</b> Dan blijft het voorzetsel staan met een beklemtoond voornaamwoord:<br><b>à + persoon → à moi, à toi, à lui, à elle, à eux…</b>: <i>Je pense <b>à Marie</b>.</i> → <i>Je pense <b>à elle</b>.</i> (niet <s>j'y pense</s>, niet <s>je lui pense</s>)<br><b>de + persoon → de lui, d'elle, d'eux…</b>: <i>Je me souviens <b>de Paul</b>.</i> → <i>Je me souviens <b>de lui</b>.</i></p>
<p><b>Waarom?</b> <i>Y</i> en <i>en</i> betekenen oorspronkelijk «daar» en «daarvandaan»: plaatswoorden, en dus voor dingen. Een mens een «daar» noemen voelt in verzorgd Frans onbeleefd. (In spreektaal hoor je <i>je m'en souviens</i> ook wel voor personen.)</p>
<p>⚠️ <b>Tweede splitsing bij à + persoon:</b> de meeste werkwoorden met <i>à</i> nemen gewoon <b>lui / leur</b>: <i>Je parle à Marie → Je <b>lui</b> parle. Ça plaît à mes amis → Ça <b>leur</b> plaît.</i> Alleen een kleine groep eist <i>à lui / à elle</i>: <i>penser à, tenir à, s'intéresser à, s'habituer à, faire attention à, renoncer à</i> en alle wederkerende werkwoorden met <i>à</i>. Ezelsbrug: het zijn werkwoorden van <b>aandacht en gehechtheid</b>, niet van geven of zeggen.</p>
<p><b>En + hele zin:</b> <i>y</i> en <i>en</i> kunnen ook een hele gedachte vervangen: <i>Tu as pensé <b>à réserver</b> ? Oui, j'<b>y</b> ai pensé.</i> · <i>Tu te souviens <b>qu'on a rendez-vous</b> ? Oui, je m'<b>en</b> souviens.</i> En het neutrale <b>le</b> vervangt een zin na een werkwoord zonder voorzetsel: <i>Il est malade, je <b>le</b> sais.</i></p>`,
        table: [["zin", "ding", "persoon"], ["penser à", "J'y pense.", "Je pense à lui / à elle."], ["s'intéresser à", "Je m'y intéresse.", "Je m'intéresse à eux."], ["parler de", "J'en parle.", "Je parle de lui / d'elle."], ["se méfier de", "Je m'en méfie.", "Je me méfie d'eux."], ["parler à / plaire à", "(kan niet)", "Je lui parle. Ça lui plaît."]],
        ex: [["Ce musée ? Je m'en souviens très bien, j'y suis allé avec mon grand-père. Je pense souvent à lui.", "Dat museum? Ik herinner het me heel goed, ik ben er met mijn opa geweest. Ik denk vaak aan hem."], ["Le théâtre, je ne peux pas m'en passer.", "Toneel, daar kan ik niet zonder."]] }
    ],
    dialogue: {
      t: "À la sortie du théâtre", place: "Avignon 🇫🇷",
      lines: [
        ["Chloé", "Alors, qu'est-ce que tu as pensé de la pièce ?", "En, wat vond je van het stuk?"],
        ["Daan", "Elle m'a beaucoup plu. La scène finale était bouleversante. J'y pense encore.", "Het beviel me erg. De slotscène was aangrijpend. Ik denk er nog steeds aan."],
        ["Chloé", "Et la comédienne principale ? Tu te souviens d'elle ? On l'a vue l'an dernier dans Molière.", "En de hoofdrolspeelster? Herinner je je haar? We zagen haar vorig jaar in Molière."],
        ["Daan", "Ah oui, je me souviens d'elle ! Elle est encore meilleure cette année.", "O ja, ik herinner me haar! Ze is dit jaar nog beter."],
        ["Chloé", "Le metteur en scène, en revanche… Je me méfie un peu de lui. Il aime trop provoquer.", "De regisseur daarentegen… Ik wantrouw hem een beetje. Hij houdt te veel van provoceren."],
        ["Daan", "Moi, je m'y suis habitué. Et le festival, tu y viens chaque année ?", "Ik ben eraan gewend. En het festival, kom je er elk jaar?"],
        ["Chloé", "Depuis quinze ans. Je ne pourrais pas m'en passer. J'y tiens énormément.", "Al vijftien jaar. Ik zou er niet zonder kunnen. Ik ben er enorm aan gehecht."],
        ["Daan", "Je comprends. Demain, il y a une séance à dix heures dans la cour du Palais des papes. Ça te dit ?", "Dat begrijp ik. Morgen is er om tien uur een voorstelling op de binnenplaats van het Pausenpaleis. Zin?"],
        ["Chloé", "J'en rêve depuis des mois, mais il n'y a plus de places.", "Daar droom ik al maanden van, maar er zijn geen plaatsen meer."],
        ["Daan", "Justement, j'en ai deux. J'ai pensé à toi en les achetant.", "Nou, ik heb er twee. Ik dacht aan jou toen ik ze kocht."]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce que Daan a pensé de la pièce ?", o: ["Elle lui a beaucoup plu", "Elle était trop longue", "Il ne s'en souvient pas"] },
        { t: "mc", q: "De qui Chloé se méfie-t-elle ?", o: ["Du metteur en scène", "De la comédienne", "De Daan"] },
        { t: "mc", q: "Pourquoi Chloé peut-elle quand même aller à la séance ?", o: ["Daan a deux places", "Il reste des places", "Elle connaît le metteur en scène"] }
      ]
    },
    culture: { t: "Het Festival d'Avignon en de culturele uitzondering", html: `<p>Elk jaar in juli verandert <b>Avignon</b> in één groot theater. Het officiële festival (het <i>In</i>, opgericht in 1947) speelt op prestigieuze plekken zoals de binnenplaats van het Pausenpaleis; daaromheen bloeit het <i>Off</i>, met meer dan duizend voorstellingen in garages, kelders en schoollokalen. Acteurs delen op straat hun eigen flyers uit.</p>
<p>Frankrijk verdedigt zijn cultuur ook politiek, met <b>l'exception culturelle</b>: cultuur is geen gewone koopwaar. Daarom moet de radio minstens 35 procent Franstalige liedjes draaien, gaat een deel van elk bioscoopkaartje naar nieuwe Franse films, en zijn de nationale musea op de eerste zondag van de maand vaak gratis.</p>
<p>Een weekend in september zijn tijdens de <b>Journées du patrimoine</b> duizenden gebouwen open die anders gesloten blijven, tot en met het Élysée.</p>` },
    ex: [
      { t: "cloze", s: "Qu'est-ce que tu penses ___ ce film ?", a: ["de"], o: ["de", "à", "sur"], nl: "Wat vind je van deze film?", x: "Penser de = vinden van; penser à = denken aan.", tag: "fr-prep-verbe" },
      { t: "cloze", s: "Elle joue ___ piano depuis dix ans.", a: ["du"], o: ["du", "au", "le"], nl: "Ze speelt al tien jaar piano.", x: "Jouer de + instrument; jouer à + spel of sport.", tag: "fr-prep-verbe" },
      { t: "cloze", s: "Je pense à mon avenir. → J'___ pense.", a: ["y"], o: ["y", "en", "lui"], nl: "Ik denk eraan.", tag: "fr-y-en2" },
      { t: "cloze", s: "Je me souviens de ce musée. → Je m'___ souviens.", a: ["en"], o: ["en", "y", "le"], nl: "Ik herinner het me.", tag: "fr-y-en2" },
      { t: "cloze", s: "Je pense à Marie. → Je pense à ___ .", a: ["elle"], o: ["elle", "lui", "y"], nl: "Ik denk aan haar.", x: "Uitzondering: bij een persoon geen y, maar à + beklemtoond voornaamwoord.", tag: "fr-y-en2" },
      { t: "cloze", s: "Paris ___ manque. (ik mis Parijs)", a: ["me"], o: ["me", "je", "moi"], nl: "Ik mis Parijs.", x: "Manquer à: het onderwerp is wat gemist wordt.", tag: "fr-prep-verbe" },
      { t: "mc", q: "Welke zin betekent «Ik mis je»?", o: ["Tu me manques.", "Je te manque.", "Je manque de toi."], tag: "fr-prep-verbe" },
      { t: "mc", q: "«Je parle à mes amis.» Hoe vervang je «à mes amis»?", o: ["Je leur parle.", "J'y parle.", "Je parle à leur."], x: "Parler à is een gewoon aan-werkwoord: lui / leur.", tag: "fr-y-en2" },
      { t: "mc", q: "Welk werkwoord heeft in het Frans GEEN voorzetsel?", o: ["attendre (wachten op)", "penser (denken aan)", "rêver (dromen van)"], tag: "fr-prep-verbe" },
      { t: "tr", nl: "Ik ben eraan gehecht.", a: ["J'y tiens."], tag: "fr-y-en2" },
      { t: "tr", nl: "Ik kan er niet zonder.", a: ["Je ne peux pas m'en passer."], tag: "fr-y-en2" },
      { t: "tr", nl: "Het stuk beviel me erg.", a: ["La pièce m'a beaucoup plu."], tag: "fr-prep-verbe" },
      { t: "order", s: "J'ai pensé à toi en les achetant.", nl: "Ik dacht aan jou toen ik ze kocht.", tag: "fr-ordre" },
      { t: "match", p: [["tenir à", "gehecht zijn aan"], ["se passer de", "zonder kunnen"], ["se méfier de", "wantrouwen"], ["assister à", "bijwonen"], ["renoncer à", "afzien van"]], tag: "fr-prep-verbe" }
    ],
    reading: {
      t: "Notre-Dame, cinq ans après", type: "Krantenartikel",
      p: [
        ["Le 15 avril 2019, le monde entier a regardé brûler Notre-Dame de Paris. Beaucoup de Parisiens s'en souviennent comme si c'était hier. « J'y pensais chaque fois que je traversais la Seine, raconte Hélène, guide depuis trente ans. Cette cathédrale me manquait comme une personne. »", "Op 15 april 2019 keek de hele wereld toe hoe de Notre-Dame van Parijs brandde. Veel Parijzenaars herinneren het zich alsof het gisteren was. 'Ik dacht eraan telkens als ik de Seine overstak,' vertelt Hélène, al dertig jaar gids. 'Ik miste die kathedraal als een mens.'"],
        ["La reconstruction a duré cinq ans. Plus de deux mille artisans y ont participé : charpentiers, tailleurs de pierre, maîtres verriers. Certains métiers avaient presque disparu ; on a dû former des jeunes pour s'en occuper. Les Français tenaient à ce que la flèche soit reconstruite à l'identique.", "De wederopbouw duurde vijf jaar. Meer dan tweeduizend ambachtslieden namen eraan deel: timmerlieden, steenhouwers, glazeniers. Sommige beroepen waren bijna verdwenen; men moest jongeren opleiden om zich ermee bezig te houden. De Fransen stonden erop dat de torenspits identiek werd herbouwd."],
        ["Depuis la réouverture, des millions de visiteurs ont assisté à une messe ou à un concert. « On ne peut pas se passer du patrimoine, dit Hélène. Il ne nous appartient pas : nous en sommes seulement les gardiens. »", "Sinds de heropening hebben miljoenen bezoekers een mis of een concert bijgewoond. 'We kunnen niet zonder erfgoed,' zegt Hélène. 'Het is niet van ons: wij zijn er alleen de hoeders van.'"]
      ],
      gl: [["brûler", "branden"], ["l'artisan", "de ambachtsman"], ["le charpentier", "de timmerman"], ["la flèche", "de torenspits"], ["le gardien", "de hoeder / bewaker"]],
      q: [
        { t: "mc", q: "Que dit Hélène de la cathédrale ?", o: ["Elle lui manquait comme une personne", "Elle ne s'en souvient pas", "Elle ne l'aimait pas"] },
        { t: "mc", q: "À quoi les Français tenaient-ils ?", o: ["À une flèche reconstruite à l'identique", "À une flèche moderne", "À fermer la cathédrale"] },
        { t: "mc", q: "Selon Hélène, que sommes-nous par rapport au patrimoine ?", o: ["Seulement les gardiens", "Les propriétaires", "Les spectateurs"] }
      ]
    },
    say: [["Qu'est-ce que tu as pensé de la pièce ?", "Wat vond je van het stuk?"], ["J'y tiens énormément.", "Ik ben er enorm aan gehecht."], ["Je ne peux pas m'en passer.", "Ik kan er niet zonder."], ["Tu me manques.", "Ik mis je."]],
    task: { nl: "Schrijf 5 zinnen over een film, boek, museum of voorstelling. Gebruik penser de, se souvenir de, tenir à of s'intéresser à, en vervang minstens twee keer een zinsdeel door y of en.", model: "La semaine dernière, j'ai assisté à un concert de jazz à Bruxelles. Je m'intéresse à cette musique depuis longtemps et je ne peux plus m'en passer. Le pianiste m'a beaucoup plu : je me souviens de lui, je l'avais déjà vu à Paris. Qu'est-ce que j'ai pensé de la salle ? Elle était trop petite, mais on s'y habitue. Ce genre de soirée, j'y tiens beaucoup." },
    scenario: { nl: "Je komt met een Franse vriendin uit het theater in Avignon. Praat na over het stuk.", role: "You are Chloé, a theatre lover who has come to the Avignon festival for fifteen years. After a play, discuss it with the learner: what they thought of it (penser de), which scene they remember (se souvenir de), which actors they liked (plaire à), whether they are attached to such festivals (tenir à). Use y and en naturally and stressed pronouns for people (je me souviens d'elle, je pense à lui). If the learner says 'j'y pense' about a person or 'je lui pense', give the correct form lightly. Propose another show tomorrow.", goal: "Zeg wat je van het stuk vond, gebruik één keer y en één keer en, en verwijs één keer naar een persoon met à lui / d'elle." }
  });

  /* ───────────────────────── B2 · 9 ───────────────────────── */
  U({
    id: "fr-b2-09", level: "B2", icon: "🔮", title: "Quand j'aurai fini", nl: "De toekomst: wat tegen die tijd gebeurd zal zijn, en de tijdswoorden op een rij",
    goals: ["Over plannen, voorspellingen en de wereld van morgen praten", "De futur antérieur maken en gebruiken", "Kiezen tussen depuis, il y a, pendant, pour, dans en en", "Volgorde uitdrukken met dès que, une fois que, tant que"],
    vocab: [
      ["l'avenir", "de toekomst"], ["prévoir", "voorzien / plannen"], ["la prévision", "de voorspelling"], ["d'ici", "tegen / binnen (tijd)"], ["d'ici là", "tegen die tijd"], ["à long terme", "op lange termijn"],
      ["à court terme", "op korte termijn"], ["dès que", "zodra"], ["aussitôt que", "zodra (formeler)"], ["une fois que", "als eenmaal"], ["tant que", "zolang"], ["jusqu'à ce que", "totdat"],
      ["en attendant", "in afwachting / intussen"], ["désormais", "voortaan"], ["dorénavant", "van nu af aan"], ["tôt ou tard", "vroeg of laat"], ["le progrès", "de vooruitgang"], ["la découverte", "de ontdekking"],
      ["le chercheur / la chercheuse", "de onderzoeker"], ["vieillir", "ouder worden"], ["la retraite", "het pensioen"], ["l'espérance de vie", "de levensverwachting"], ["remplacer", "vervangen"], ["disparaître", "verdwijnen"],
      ["le siècle", "de eeuw"], ["la décennie", "het decennium"], ["s'attendre à", "verwachten"], ["il se peut que", "het kan zijn dat"]
    ],
    grammar: [
      { t: "De futur antérieur: wat dan al gebeurd zal zijn", es: "Le futur antérieur",
        html: `<p>Met de <b>futur antérieur</b> kijk je vanuit een punt in de toekomst terug op iets wat dan <b>al af</b> is. In het Nederlands: «zal hebben gedaan», maar meestal zeggen wij gewoon «heb gedaan» of «klaar ben».</p>
<p><b>Vorm:</b> <i>avoir</i> of <i>être</i> in de <b>futur simple</b> + voltooid deelwoord: <i>j'<b>aurai</b> fini</i> · <i>elle <b>sera</b> partie</i> · <i>nous nous <b>serons</b> levés</i>.</p>
<p><b>Gebruik 1: tegen een bepaald moment.</b> <i>Dans dix ans, on <b>aura trouvé</b> un vaccin.</i> · <i>D'ici vendredi, j'<b>aurai terminé</b> le rapport.</i></p>
<p><b>Gebruik 2: eerst dit, dan dat</b> (na <i>quand, dès que, une fois que, après que</i>). De eerste handeling staat in de futur antérieur, de tweede in de futur simple: <i>Quand j'<b>aurai fini</b>, je t'<b>appellerai</b>.</i> · <i>Dès qu'elle <b>sera arrivée</b>, on <b>commencera</b>.</i></p>
<p>⚠️ <b>Let op, een groot verschil met het Nederlands:</b> wij zeggen «Als ik <u>klaar ben</u>, bel ik je»: tegenwoordige tijd. In het Frans mag na <i>quand</i> en <i>dès que</i> <b>geen présent of passé composé</b> staan als het over de toekomst gaat: niet <s>quand j'ai fini, je t'appellerai</s>. Waarom? Het Frans markeert de tijd in <b>beide</b> zinsdelen: ligt het in de toekomst, dan krijgt het een toekomende tijd, ook in de bijzin.</p>
<p>⚠️ <b>Uitzondering: na si nooit futur.</b> <i><b>Si</b> j'<b>ai fini</b> à temps, je t'appellerai.</i> Na <i>si</i> blijft het présent of passé composé. <i>Quand</i> = het gebeurt zeker; <i>si</i> = misschien.</p>
<p><b>Gebruik 3: een vermoeden</b> over het verleden: <i>Il n'est pas là. Il <b>aura oublié</b>.</i> = Hij zal het wel vergeten zijn.</p>`,
        table: [["", "avoir", "être"], ["je / j'", "aurai fini", "serai parti(e)"], ["tu", "auras fini", "seras parti(e)"], ["il / elle", "aura fini", "sera parti / partie"], ["nous", "aurons fini", "serons parti(e)s"], ["vous", "aurez fini", "serez parti(e)(s)"], ["ils / elles", "auront fini", "seront partis / parties"]],
        ex: [["Une fois que tu auras lu ce livre, tu comprendras.", "Als je dit boek eenmaal gelezen hebt, begrijp je het."], ["En 2050, la population mondiale aura dépassé neuf milliards.", "In 2050 zal de wereldbevolking de negen miljard zijn gepasseerd."]] },
      { t: "Tijdswoorden: depuis, il y a, pendant, pour, dans, en", es: "Les expressions de temps",
        html: `<p>Zes kleine woorden die Nederlanders vaak door elkaar halen, omdat wij voor verschillende dingen «in», «voor» en «al» gebruiken.</p>
<p><b>depuis</b> = sinds / al … (het duurt <b>nog voort</b>) + <b>présent</b>: <i>J'habite ici <b>depuis</b> cinq ans.</i> (Ik woon hier al vijf jaar.)<br><b>il y a</b> = … geleden (een punt in het verleden): <i>J'ai déménagé <b>il y a</b> cinq ans.</i><br><b>pendant</b> = gedurende (een afgesloten duur): <i>J'ai habité à Lyon <b>pendant</b> cinq ans.</i><br><b>pour</b> = voor (een <b>geplande</b> duur, vooruitkijkend): <i>Je pars <b>pour</b> trois mois.</i><br><b>dans</b> = over (vanaf nu, wanneer het <b>begint</b>): <i>Je pars <b>dans</b> dix minutes.</i><br><b>en</b> = in (hoe lang het <b>duurt</b> om iets te doen): <i>J'ai lu ce livre <b>en</b> deux jours.</i></p>
<p>⚠️ <b>Dans of en? Het klassieke misverstand.</b> <i>Je ferai ce travail <b>dans</b> deux heures.</i> = Ik begin er over twee uur aan. <i>Je ferai ce travail <b>en</b> deux heures.</i> = Het kost me twee uur. Het Nederlandse «in twee uur» kan beide betekenen; het Frans kiest.</p>
<p>⚠️ <b>Uitzondering bij depuis:</b> met een <b>ontkenning</b> gebruik je de passé composé: <i>Je <b>n'ai pas vu</b> Paul depuis un an.</i> Waarom? Niet-zien is geen handeling die voortduurt, maar een afwezigheid die je vanaf nu terugmeet.</p>
<p><b>Voegwoorden van tijd en hun wijs:</b><br><b>indicatif:</b> <i>quand, dès que, aussitôt que, une fois que, après que, pendant que, tant que</i> (zolang): <i><b>Tant qu'</b>il <b>pleuvra</b>, on restera ici.</i><br><b>subjonctif:</b> <i>avant que, jusqu'à ce que, en attendant que</i>: <i>Reste <b>jusqu'à ce que</b> je <b>revienne</b>.</i> Ezelsbrug: wat nog <b>niet bereikt</b> is, krijgt de subjonctif.</p>
<p>En let op <b>d'ici</b> + tijd = «tegen, binnen nu en»: <i><b>d'ici</b> 2040</i>, <i><b>d'ici</b> la fin du mois</i>.</p>`,
        table: [["woord", "vraag", "voorbeeld"], ["depuis", "sinds wanneer? (duurt nog)", "Je travaille ici depuis 2019."], ["il y a", "hoe lang geleden?", "Je suis arrivé il y a une heure."], ["pendant", "hoe lang duurde het?", "J'ai dormi pendant dix heures."], ["pour", "voor hoe lang (gepland)?", "Elle est à Dakar pour un an."], ["dans", "over hoeveel tijd?", "Le train part dans cinq minutes."], ["en", "in hoeveel tijd klaar?", "Il a couru dix kilomètres en une heure."]],
        ex: [["J'apprends le français depuis deux ans et je pars en France dans un mois, pour six semaines.", "Ik leer al twee jaar Frans en vertrek over een maand naar Frankrijk, voor zes weken."], ["Tant que tu n'auras pas essayé, tu ne sauras pas.", "Zolang je het niet geprobeerd hebt, weet je het niet."]] }
    ],
    dialogue: {
      t: "Dans dix ans", place: "Dakar 🇸🇳",
      lines: [
        ["Aya", "Tom, tu te vois où dans dix ans ?", "Tom, waar zie je jezelf over tien jaar?"],
        ["Tom", "Bonne question ! D'ici là, j'aurai sûrement changé trois fois de travail.", "Goede vraag! Tegen die tijd ben ik vast drie keer van baan veranderd."],
        ["Aya", "Seulement trois ? Moi, j'espère que j'aurai ouvert ma propre entreprise.", "Maar drie? Ik hoop dat ik dan mijn eigen bedrijf heb geopend."],
        ["Tom", "Ici, à Dakar ?", "Hier, in Dakar?"],
        ["Aya", "Oui. Je travaille dans l'énergie solaire depuis quatre ans. Dès que j'aurai économisé assez, je me lancerai.", "Ja. Ik werk al vier jaar in de zonne-energie. Zodra ik genoeg gespaard heb, begin ik eraan."],
        ["Tom", "C'est courageux. Et tu penses y arriver en combien de temps ?", "Dat is moedig. En in hoeveel tijd denk je dat het lukt?"],
        ["Aya", "En deux ou trois ans, si tout va bien. Tant que je n'aurai pas essayé, je ne serai pas tranquille.", "In twee of drie jaar, als alles goed gaat. Zolang ik het niet geprobeerd heb, heb ik geen rust."],
        ["Tom", "Moi, je suis arrivé ici il y a six mois, pour un an. Je repars dans six mois… en principe.", "Ik ben hier zes maanden geleden aangekomen, voor een jaar. Ik vertrek over zes maanden weer… in principe."],
        ["Aya", "En principe ? Tu vas rester jusqu'à ce que je sois riche et que je t'embauche !", "In principe? Jij blijft totdat ik rijk ben en je aanneem!"],
        ["Tom", "Marché conclu. Une fois que tu auras signé ton premier contrat, c'est moi qui offrirai le thiéboudienne.", "Afgesproken. Als je eenmaal je eerste contract hebt getekend, trakteer ik op thiéboudienne."]
      ],
      q: [
        { t: "mc", q: "Depuis combien de temps Aya travaille-t-elle dans l'énergie solaire ?", o: ["Depuis quatre ans", "Depuis six mois", "Depuis dix ans"] },
        { t: "mc", q: "Quand Aya se lancera-t-elle ?", o: ["Dès qu'elle aura économisé assez", "Dans dix ans", "Quand Tom sera parti"] },
        { t: "mc", q: "Quand Tom est-il arrivé à Dakar ?", o: ["Il y a six mois", "Il y a un an", "Dans six mois"] }
      ]
    },
    culture: { t: "Het Frans van morgen is Afrikaans", html: `<p>Vandaag spreken ruim driehonderd miljoen mensen Frans. Volgens de <i>Organisation internationale de la Francophonie</i> zullen dat er tegen 2050 meer dan zevenhonderd miljoen zijn, en <b>acht op de tien</b> zullen in Afrika wonen. De grootste Franstalige stad ter wereld is nu al niet Parijs, maar <b>Kinshasa</b>.</p>
<p>In Dakar spreekt bijna iedereen ook <b>Wolof</b>, en de twee talen lopen vrolijk door elkaar. Het nationale gerecht <b>thiéboudienne</b> (rijst met vis; het woord is Wolof) staat sinds 2021 op de Unesco-lijst van immaterieel erfgoed.</p>
<p>West-Afrikaans Frans heeft eigen woorden: <i>une essencerie</i> (tankstation), <i>dibiterie</i> (grillrestaurant), <i>ça va un peu</i> (het gaat wel), en <i>on est ensemble</i> (letterlijk «we zijn samen»: tot ziens, we houden contact).</p>` },
    ex: [
      { t: "cloze", s: "Quand j'___ fini, je t'appellerai.", a: ["aurai"], o: ["aurai", "ai", "aurais"], nl: "Als ik klaar ben, bel ik je.", x: "Let op: na quand over de toekomst geen présent, maar futur antérieur.", tag: "fr-fut-ant" },
      { t: "cloze", s: "Dès qu'elle ___ arrivée, on commencera.", a: ["sera"], o: ["sera", "est", "aura"], nl: "Zodra ze is aangekomen, beginnen we.", tag: "fr-fut-ant" },
      { t: "cloze", s: "Si j'___ fini à temps, je viendrai.", a: ["ai"], o: ["ai", "aurai", "aurais"], nl: "Als ik op tijd klaar ben, kom ik.", x: "Uitzondering: na si nooit futur.", tag: "fr-fut-ant" },
      { t: "cloze", s: "J'habite ici ___ cinq ans. (nog steeds)", a: ["depuis"], o: ["depuis", "pendant", "il y a"], nl: "Ik woon hier al vijf jaar.", tag: "fr-temps-expr" },
      { t: "cloze", s: "Le train part ___ dix minutes.", a: ["dans"], o: ["dans", "en", "pour"], nl: "De trein vertrekt over tien minuten.", tag: "fr-temps-expr" },
      { t: "cloze", s: "J'ai lu ce roman ___ deux jours.", a: ["en"], o: ["en", "dans", "depuis"], nl: "Ik heb deze roman in twee dagen gelezen.", x: "En = hoe lang het duurde om het te doen.", tag: "fr-temps-expr" },
      { t: "mc", q: "«Je ferai ce travail dans deux heures.» Wat betekent dit?", o: ["Ik begin er over twee uur aan.", "Het kost me twee uur.", "Ik doe het al twee uur."], tag: "fr-temps-expr" },
      { t: "mc", q: "Welke zin is correct?", o: ["Je n'ai pas vu Paul depuis un an.", "Je ne vois pas Paul il y a un an.", "Je n'ai pas vu Paul dans un an."], x: "Uitzondering: depuis + ontkenning → passé composé.", tag: "fr-temps-expr" },
      { t: "mc", q: "«Il n'est pas là. Il aura oublié.» Wat betekent de tweede zin?", o: ["Hij zal het wel vergeten zijn.", "Hij zal het vergeten.", "Hij had het vergeten."], tag: "fr-fut-ant" },
      { t: "tr", nl: "Ik ben zes maanden geleden aangekomen.", a: ["Je suis arrivé il y a six mois.", "Je suis arrivée il y a six mois."], tag: "fr-temps-expr" },
      { t: "tr", nl: "Blijf totdat ik terugkom.", a: ["Reste jusqu'à ce que je revienne.", "Restez jusqu'à ce que je revienne."], tag: "fr-temps-expr" },
      { t: "tr", nl: "Tegen vrijdag heb ik het rapport af.", a: ["D'ici vendredi, j'aurai terminé le rapport.", "D'ici vendredi, j'aurai fini le rapport."], tag: "fr-fut-ant" },
      { t: "order", s: "Une fois que tu auras lu ce livre, tu comprendras.", nl: "Als je dit boek eenmaal gelezen hebt, begrijp je het.", tag: "fr-ordre" },
      { t: "match", p: [["depuis", "sinds / al"], ["il y a", "geleden"], ["dans", "over"], ["dès que", "zodra"], ["tant que", "zolang"]], tag: "fr-temps-expr" }
    ],
    reading: {
      t: "Lettre à moi-même, à ouvrir dans vingt ans", type: "Brief",
      p: [
        ["Cher moi de quarante-cinq ans, quand tu liras cette lettre, vingt années auront passé. Tu auras sans doute oublié ce petit appartement de Dakar où je t'écris, et la chaleur de cet après-midi. Moi, je suis ici depuis trois mois et je ne sais pas encore si je resterai.", "Beste ik van vijfenveertig, als je deze brief leest, zijn er twintig jaar voorbij. Je zult dit kleine appartement in Dakar waar ik je schrijf wel vergeten zijn, en de hitte van deze middag. Ik ben hier nu drie maanden en weet nog niet of ik blijf."],
        ["J'espère que d'ici là tu auras appris à dire non, que tu auras voyagé plus que moi et que tu n'auras pas renoncé à écrire. Si tu as des enfants, raconte-leur que leur père a traversé le Sahara en bus, en quatre jours, il y a très longtemps.", "Ik hoop dat je tegen die tijd nee hebt leren zeggen, dat je meer gereisd hebt dan ik en dat je het schrijven niet hebt opgegeven. Als je kinderen hebt, vertel ze dan dat hun vader heel lang geleden in vier dagen per bus de Sahara is overgestoken."],
        ["Tant que tu te souviendras de qui tu étais à vingt-cinq ans, tout ira bien. Et dès que tu auras fini de lire, sors, regarde le ciel et pense à moi. Je t'attends ici, dans le passé.", "Zolang je je herinnert wie je op je vijfentwintigste was, komt alles goed. En zodra je klaar bent met lezen: ga naar buiten, kijk naar de lucht en denk aan mij. Ik wacht hier op je, in het verleden."]
      ],
      gl: [["sans doute", "waarschijnlijk"], ["la chaleur", "de hitte"], ["renoncer à", "opgeven"], ["traverser", "oversteken"], ["le ciel", "de lucht / hemel"]],
      q: [
        { t: "mc", q: "Depuis combien de temps l'auteur est-il à Dakar ?", o: ["Depuis trois mois", "Depuis vingt ans", "Depuis quatre jours"] },
        { t: "mc", q: "Qu'espère-t-il pour son futur moi ?", o: ["Qu'il aura appris à dire non", "Qu'il sera devenu riche", "Qu'il aura oublié Dakar"] },
        { t: "mc", q: "En combien de temps a-t-il traversé le Sahara ?", o: ["En quatre jours", "En trois mois", "En vingt ans"] }
      ]
    },
    say: [["Quand j'aurai fini, je t'appellerai.", "Als ik klaar ben, bel ik je."], ["J'habite ici depuis cinq ans.", "Ik woon hier al vijf jaar."], ["Le train part dans dix minutes.", "De trein vertrekt over tien minuten."], ["D'ici là, tout aura changé.", "Tegen die tijd is alles veranderd."]],
    task: { nl: "Schrijf een korte brief (5 of 6 zinnen) aan jezelf over tien jaar. Gebruik drie keer de futur antérieur en minstens drie tijdswoorden (depuis, dans, d'ici, dès que, tant que…).", model: "Cher moi, quand tu liras ces lignes, dix ans auront passé. J'apprends le français depuis deux ans ; d'ici là, j'espère que tu l'auras parfaitement appris. Tu auras peut-être déménagé à l'étranger, pour quelques années. Dès que tu auras lu cette lettre, écris-en une autre. Tant que tu continueras à apprendre, tu resteras jeune." },
    scenario: { nl: "Een Senegalese collega in Dakar vraagt waar je jezelf over tien jaar ziet. Praat over plannen en dromen.", role: "You are Aya, an ambitious engineer in Dakar who wants to start a solar-energy company. Ask the learner where they see themselves in ten years, how long they have been learning French or doing their job (depuis), when they arrived (il y a), how long they are staying (pour), when they leave (dans). Talk about your own plans with the futur antérieur (d'ici là j'aurai…, dès que j'aurai…, une fois que…). If the learner uses a présent after quand/dès que for the future, or confuses dans/en or depuis/il y a, model the right one. Add a little Senegalese colour (thiéboudienne, on est ensemble).", goal: "Zeg wat je tegen die tijd bereikt zult hebben (futur antérieur), en gebruik depuis, il y a en dans elk één keer correct." }
  });

  /* ───────────────────────── B2 · 10 ───────────────────────── */
  U({
    id: "fr-b2-10", level: "B2", icon: "✉️", title: "Veuillez agréer…", nl: "Formeel schrijven: brieven, klachten en laten doen",
    goals: ["Een formele brief of mail openen en afsluiten", "Een klacht of verzoek beleefd formuleren", "De infinitif passé gebruiken: après avoir…", "Zeggen dat je iets laat doen: faire + infinitief"],
    vocab: [
      ["le courrier", "de post / de brief"], ["la lettre de réclamation", "de klachtbrief"], ["l'objet", "het onderwerp (van een brief)"], ["la pièce jointe", "de bijlage"], ["ci-joint", "bijgevoegd"], ["le destinataire", "de geadresseerde"],
      ["l'expéditeur", "de afzender"], ["suite à", "naar aanleiding van"], ["par la présente", "hierbij"], ["je me permets de", "ik ben zo vrij om"], ["je vous prie de", "ik verzoek u"], ["veuillez", "wilt u (zo goed zijn)"],
      ["dans les meilleurs délais", "zo spoedig mogelijk"], ["le remboursement", "de terugbetaling"], ["rembourser", "terugbetalen"], ["le dédommagement", "de schadevergoeding"], ["la facture", "de factuur"], ["le devis", "de offerte"],
      ["la commande", "de bestelling"], ["livrer", "leveren"], ["le retard", "de vertraging"], ["défectueux / défectueuse", "defect"], ["réparer", "repareren"], ["faire réparer", "laten repareren"],
      ["constater", "vaststellen"], ["regretter", "betreuren"], ["cordialement", "met vriendelijke groet"], ["dans l'attente de", "in afwachting van"]
    ],
    grammar: [
      { t: "De formele brief: vaste formules", es: "La lettre formelle",
        html: `<p>Een Franse formele brief volgt strengere regels dan een Nederlandse. De toon is afstandelijker en de slotzin opvallend lang. Je hoeft die zinnen niet zelf te verzinnen: het zijn <b>vaste formules</b>.</p>
<p><b>Aanhef:</b> <i><b>Madame, Monsieur,</b></i> (als je niet weet wie het leest) · <i><b>Madame,</b></i> of <i><b>Monsieur,</b></i> · <i>Madame la Directrice,</i><br>⚠️ <b>Uitzondering op wat je verwacht:</b> schrijf <b>niet</b> <s>Cher Monsieur Dupont</s> in een formele brief, en zet de <b>achternaam niet</b> in de aanhef. Waarom? <i>Cher</i> met een naam suggereert dat je iemand persoonlijk kent; in een zakelijke brief aan een onbekende komt dat te vertrouwelijk over.</p>
<p><b>Openen:</b> <i><b>Suite à</b> notre conversation téléphonique du 3 mai…</i> · <i><b>Je me permets de</b> vous écrire au sujet de…</i> · <i><b>Par la présente,</b> je souhaite vous informer que…</i></p>
<p><b>Verzoeken:</b> <i><b>Je vous prie de</b> bien vouloir me rembourser.</i> · <i><b>Je vous serais reconnaissant(e) de</b> me répondre rapidement.</i> · <i><b>Veuillez</b> trouver ci-joint la facture.</i> (<i>veuillez</i> is de gebiedende wijs van <i>vouloir</i>)</p>
<p><b>Klagen:</b> <i><b>J'ai le regret de</b> constater que…</i> · <i><b>Je tiens à</b> vous signaler que…</i> · <i>Sans réponse de votre part, <b>je me verrai dans l'obligation de</b>…</i></p>
<p><b>Afsluiten:</b> <i><b>Dans l'attente de</b> votre réponse,</i> gevolgd door de slotformule:<br><i><b>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</b></i><br>In de slotformule herhaal je <b>precies</b> de aanhef. In een e-mail volstaat <i><b>Cordialement,</b></i> of iets warmer <i>Bien cordialement,</i>.</p>
<p>⚠️ <b>Let op ci-joint:</b> vóór het zelfstandig naamwoord onveranderlijk (<i><b>Ci-joint</b> la facture</i>), erachter past het zich aan (<i>la facture <b>ci-jointe</b></i>).</p>`,
        table: [["informeel", "formeel"], ["Salut Paul,", "Madame, Monsieur,"], ["Je t'écris pour…", "Je me permets de vous écrire au sujet de…"], ["Tu peux me rembourser ?", "Je vous prie de bien vouloir me rembourser."], ["Réponds vite !", "Dans l'attente de votre réponse, …"], ["À plus !", "Je vous prie d'agréer l'expression de mes salutations distinguées."]],
        ex: [["Veuillez trouver ci-joint une copie de ma facture.", "Bijgevoegd vindt u een kopie van mijn factuur."], ["Je vous serais reconnaissante de traiter ma demande dans les meilleurs délais.", "Ik zou u dankbaar zijn als u mijn verzoek zo spoedig mogelijk behandelt."]] },
      { t: "Après avoir… en faire réparer", es: "L'infinitif passé et le causatif",
        html: `<p><b>1. De infinitif passé: na iets gedaan te hebben</b></p>
<p>Na <b>après</b> kan in het Frans geen gewone infinitief staan. Je gebruikt de <b>infinitif passé</b>: <i>avoir</i> of <i>être</i> + voltooid deelwoord. <i><b>Après avoir lu</b> votre lettre, je vous ai téléphoné.</i> · <i><b>Après être arrivée</b>, elle a défait sa valise.</i> (met <i>être</i>: overeenkomst!) · <i><b>Après s'être reposé</b>, il est reparti.</i></p>
<p>⚠️ <b>Let op:</b> niet <s>après lire</s>. Waarom? Wat na iets komt, is per definitie afgerond; het Frans wil die afronding zien. (Vergelijk <i><b>avant de</b> lire</i>: daar is het nog niet gebeurd, dus de gewone infinitief.)</p>
<p>Je vindt de infinitif passé ook na werkwoorden van gevoel en dank: <i>Merci <b>d'être venu</b>.</i> · <i>Je regrette <b>de ne pas avoir répondu</b> plus tôt.</i> · <i>Je suis désolé <b>d'avoir oublié</b>.</i> Beide handelingen moeten hetzelfde onderwerp hebben.</p>
<p><b>2. Laten doen: faire + infinitief</b></p>
<p>Doe je iets niet zelf maar <b>laat</b> je het doen, dan gebruik je <b>faire + infinitief</b>: <i>Je <b>fais réparer</b> ma voiture.</i> (Ik laat mijn auto repareren.) · <i>Elle <b>a fait construire</b> une maison.</i> Wie het doet, komt erbij met <b>par</b> of <b>à</b>: <i>J'ai fait réparer mon vélo <b>par</b> un voisin.</i></p>
<p>⚠️ <b>Uitzondering in de woordvolgorde:</b> <i>faire</i> en de infinitief zijn <b>onscheidbaar</b>. Voornaamwoorden komen vóór <i>faire</i>, niet vóór de infinitief: <i>Je <b>la</b> fais réparer.</i> (niet <s>je fais la réparer</s>). En het deelwoord <i>fait</i> blijft hier <b>altijd onveranderd</b>: <i>la voiture que j'ai <b>fait</b> réparer</i>. Waarom? <i>La voiture</i> is niet het lijdend voorwerp van <i>faire</i> maar van <i>réparer</i>.</p>
<p><b>se faire + infinitief</b> = iets (bij jezelf) laten doen, of iets overkomen: <i>Je <b>me suis fait couper</b> les cheveux.</i> · <i>Il <b>s'est fait voler</b> son portefeuille.</i> (Zijn portemonnee is gestolen.)</p>
<p><b>laisser + infinitief</b> = toelaten: <i><b>Laisse</b>-moi <b>parler</b> !</i> Onthoud: <i>faire</i> = ervoor zorgen dat, <i>laisser</i> = niet tegenhouden. Het Nederlandse «laten» dekt beide.</p>`,
        table: [["zelf doen", "laten doen"], ["Je répare ma voiture.", "Je fais réparer ma voiture."], ["Elle coupe ses cheveux.", "Elle se fait couper les cheveux."], ["Nous avons repeint le salon.", "Nous avons fait repeindre le salon."], ["Je la répare.", "Je la fais réparer."]],
        ex: [["Après avoir attendu trois semaines, j'ai décidé de vous écrire.", "Na drie weken gewacht te hebben, heb ik besloten u te schrijven."], ["J'ai fait livrer la commande chez mes parents.", "Ik heb de bestelling bij mijn ouders laten bezorgen."]] }
    ],
    dialogue: {
      t: "Au service clients", place: "Bruxelles 🇧🇪",
      lines: [
        ["Agent", "Service clients, bonjour. En quoi puis-je vous aider ?", "Klantenservice, goedendag. Waarmee kan ik u helpen?"],
        ["Sanne", "Bonjour, monsieur. J'ai commandé un lave-vaisselle il y a un mois. Il a été livré avec dix jours de retard, et il est défectueux.", "Goedendag, meneer. Ik heb een maand geleden een vaatwasser besteld. Hij is tien dagen te laat geleverd en hij is defect."],
        ["Agent", "Je suis désolé de l'apprendre. Avez-vous votre numéro de commande ?", "Het spijt me dat te horen. Hebt u uw bestelnummer?"],
        ["Sanne", "Oui, c'est le 48-721. Après avoir essayé trois fois, j'ai constaté qu'il ne chauffait pas.", "Ja, het is 48-721. Na het drie keer geprobeerd te hebben, stelde ik vast dat hij niet opwarmt."],
        ["Agent", "Je vois. Nous pouvons le faire réparer : un technicien passerait chez vous la semaine prochaine.", "Ik begrijp het. We kunnen hem laten repareren: er zou volgende week een monteur bij u langskomen."],
        ["Sanne", "Je préférerais le faire remplacer, ou être remboursée. J'ai déjà perdu beaucoup de temps.", "Ik zou hem liever laten vervangen, of mijn geld terugkrijgen. Ik heb al veel tijd verloren."],
        ["Agent", "Je comprends. Pour un remboursement, je vous prie de nous envoyer une demande écrite avec la facture.", "Dat begrijp ik. Voor een terugbetaling verzoek ik u ons een schriftelijke aanvraag te sturen met de factuur."],
        ["Sanne", "Très bien. Vous la recevrez aujourd'hui. Dans quel délai aurai-je une réponse ?", "Goed. U ontvangt die vandaag. Binnen welke termijn krijg ik antwoord?"],
        ["Agent", "Sous dix jours, madame. Et nous ferons enlever l'appareil à nos frais.", "Binnen tien dagen, mevrouw. En we laten het apparaat op onze kosten ophalen."],
        ["Sanne", "Je vous remercie d'avoir pris ma demande au sérieux. Bonne journée.", "Dank u dat u mijn verzoek serieus hebt genomen. Fijne dag."]
      ],
      q: [
        { t: "mc", q: "Quel est le problème de Sanne ?", o: ["Son lave-vaisselle est arrivé en retard et ne fonctionne pas", "Elle n'a jamais reçu sa commande", "Elle a perdu sa facture"] },
        { t: "mc", q: "Que propose d'abord l'agent ?", o: ["De faire réparer l'appareil", "De rembourser tout de suite", "De livrer un deuxième appareil"] },
        { t: "mc", q: "Que doit envoyer Sanne pour être remboursée ?", o: ["Une demande écrite avec la facture", "L'appareil par la poste", "Une photo du technicien"] }
      ]
    },
    culture: { t: "Waarom de Franse slotzin zo lang is", html: `<p><i>Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées</i>: letterlijk «Ik verzoek u, mevrouw, de uitdrukking van mijn voorname groeten te aanvaarden». Voor Nederlanders klinkt het als de achttiende eeuw, en daar komt het ook vandaan. Toch gebruiken Fransen het nog dagelijks in brieven aan de overheid, een verhuurder of een werkgever. Het weglaten valt op als slordig.</p>
<p>Er bestaan nuances: <i>salutations distinguées</i> is neutraal, <i>sentiments respectueux</i> schrijf je aan iemand hoger in rang, <i>sentiments les meilleurs</i> aan iemand die je kent. In e-mails is de korte ladder: <i>Cordialement</i> → <i>Bien cordialement</i> → <i>Bien à vous</i> (dat laatste vooral in <b>België</b>, waar het heel gewoon is).</p>
<p>Een klacht heet <i>une réclamation</i>. En een aangetekende brief, het zware geschut van elke Franse consument, is <b>une lettre recommandée avec accusé de réception</b>, afgekort <i>LRAR</i>.</p>` },
    ex: [
      { t: "cloze", s: "Après ___ lu votre lettre, je vous ai appelé.", a: ["avoir"], o: ["avoir", "ayant", "ai"], nl: "Na uw brief gelezen te hebben, heb ik u gebeld.", x: "Let op: na après altijd de infinitif passé, nooit après lire.", tag: "fr-inf-passe" },
      { t: "cloze", s: "Après ___ arrivée, elle a défait sa valise.", a: ["être"], o: ["être", "avoir", "est"], nl: "Na aankomst pakte ze haar koffer uit.", tag: "fr-inf-passe" },
      { t: "cloze", s: "Merci d'___ venu.", a: ["être"], o: ["être", "avoir", "es"], nl: "Bedankt dat je gekomen bent.", tag: "fr-inf-passe" },
      { t: "cloze", s: "Je ___ réparer ma voiture au garage.", a: ["fais"], o: ["fais", "laisse", "suis"], nl: "Ik laat mijn auto bij de garage repareren.", tag: "fr-causatif" },
      { t: "cloze", s: "Ma voiture ? Je ___ fais réparer demain.", a: ["la"], o: ["la", "lui", "y"], nl: "Mijn auto? Ik laat hem morgen repareren.", x: "Uitzondering in de volgorde: het voornaamwoord komt vóór faire, niet vóór de infinitief.", tag: "fr-causatif" },
      { t: "cloze", s: "___ trouver ci-joint la facture.", a: ["Veuillez"], o: ["Veuillez", "Voulez", "Vouloir"], nl: "Bijgevoegd vindt u de factuur.", tag: "fr-formel" },
      { t: "mc", q: "Welke aanhef past in een formele brief aan een onbekende?", o: ["Madame, Monsieur,", "Cher Monsieur Dupont,", "Bonjour à tous,"], x: "Uitzondering op je gevoel: geen cher en geen achternaam.", tag: "fr-formel" },
      { t: "mc", q: "«Il s'est fait voler son vélo.» Wat is er gebeurd?", o: ["Zijn fiets is gestolen.", "Hij heeft een fiets gestolen.", "Hij heeft zijn fiets laten maken."], tag: "fr-causatif" },
      { t: "mc", q: "Welke zin is goed gespeld?", o: ["La maison qu'il a fait construire.", "La maison qu'il a faite construire.", "La maison qu'il a faits construire."], x: "Uitzondering: fait + infinitief blijft altijd onveranderd.", tag: "fr-causatif" },
      { t: "tr", nl: "Ik heb mijn haar laten knippen.", a: ["Je me suis fait couper les cheveux."], tag: "fr-causatif" },
      { t: "tr", nl: "In afwachting van uw antwoord.", a: ["Dans l'attente de votre réponse."], tag: "fr-formel" },
      { t: "tr", nl: "Het spijt me dat ik het vergeten ben.", a: ["Je suis désolé d'avoir oublié.", "Je suis désolée d'avoir oublié."], tag: "fr-inf-passe" },
      { t: "order", s: "Je vous prie de bien vouloir me rembourser.", nl: "Ik verzoek u mij terug te betalen.", tag: "fr-ordre" },
      { t: "match", p: [["ci-joint", "bijgevoegd"], ["suite à", "naar aanleiding van"], ["le devis", "de offerte"], ["la facture", "de factuur"], ["cordialement", "met vriendelijke groet"]], tag: "fr-formel" }
    ],
    reading: {
      t: "Lettre de réclamation", type: "Formele brief",
      p: [
        ["Objet : commande n° 48-721, demande de remboursement. Madame, Monsieur, suite à notre conversation téléphonique de ce jour, je me permets de vous confirmer par écrit ma demande. Le 2 avril, j'ai commandé sur votre site un lave-vaisselle, qui m'a été livré avec dix jours de retard.", "Betreft: bestelling nr. 48-721, verzoek om terugbetaling. Geachte mevrouw, geachte heer, naar aanleiding van ons telefoongesprek van vandaag ben ik zo vrij u mijn verzoek schriftelijk te bevestigen. Op 2 april heb ik op uw site een vaatwasser besteld, die tien dagen te laat bij mij is afgeleverd."],
        ["Après l'avoir fait installer par un professionnel, j'ai constaté que l'appareil ne chauffait pas. J'ai le regret de vous informer que, malgré trois essais, le problème persiste. Je vous prie donc de bien vouloir procéder au remboursement de la somme de 549 euros et de faire enlever l'appareil à vos frais.", "Nadat ik hem door een vakman had laten installeren, stelde ik vast dat het apparaat niet opwarmt. Tot mijn spijt moet ik u meedelen dat het probleem ondanks drie pogingen aanhoudt. Ik verzoek u daarom over te gaan tot terugbetaling van het bedrag van 549 euro en het apparaat op uw kosten te laten ophalen."],
        ["Vous trouverez ci-joint une copie de la facture. Dans l'attente de votre réponse, que j'espère recevoir dans les meilleurs délais, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. Sanne de Vries", "Bijgevoegd vindt u een kopie van de factuur. In afwachting van uw antwoord, dat ik zo spoedig mogelijk hoop te ontvangen, verblijf ik met de meeste hoogachting. Sanne de Vries"]
      ],
      gl: [["confirmer", "bevestigen"], ["le professionnel", "de vakman"], ["persister", "aanhouden"], ["procéder à", "overgaan tot"], ["à vos frais", "op uw kosten"]],
      q: [
        { t: "mc", q: "Pourquoi Sanne écrit-elle cette lettre ?", o: ["Pour confirmer sa demande de remboursement", "Pour commander un lave-vaisselle", "Pour remercier le technicien"] },
        { t: "mc", q: "Qui a installé l'appareil ?", o: ["Un professionnel", "Sanne elle-même", "Le livreur"] },
        { t: "mc", q: "Qu'est-ce qui est joint à la lettre ?", o: ["Une copie de la facture", "L'appareil", "Un devis"] }
      ]
    },
    say: [["Je vous prie de bien vouloir me rembourser.", "Ik verzoek u mij terug te betalen."], ["Après avoir attendu trois semaines, je vous écris.", "Na drie weken gewacht te hebben, schrijf ik u."], ["Je fais réparer ma voiture.", "Ik laat mijn auto repareren."], ["Merci d'avoir répondu si vite.", "Dank dat u zo snel hebt geantwoord."]],
    task: { nl: "Schrijf een korte formele klachtmail (5 of 6 zinnen) over een bestelling of dienst. Gebruik een formele aanhef, één keer après avoir…, één keer faire + infinitief en een passende slotformule.", model: "Madame, Monsieur, je me permets de vous écrire au sujet de ma commande du 12 mai. Après avoir attendu trois semaines, je n'ai toujours rien reçu. J'ai fait vérifier mon adresse par votre service : elle est correcte. Je vous prie donc de bien vouloir me livrer dans les meilleurs délais ou de me rembourser. Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées." },
    scenario: { nl: "Je belt de klantenservice van een Belgische webwinkel: je bestelling kwam te laat en is kapot. Blijf beleefd maar vasthoudend.", role: "You are a polite but procedure-bound customer service agent at a Belgian online shop in Brussels. The learner calls about a late and defective delivery. Ask for the order number, what exactly is wrong, and what they have already tried. First offer a repair (nous pouvons le faire réparer), and only after they insist, explain how to request a refund in writing. Use formal vous, formulas like 'je vous prie de', 'veuillez', 'dans les meilleurs délais', and causative faire (faire enlever, faire livrer). If the learner says 'après essayer', model 'après avoir essayé'.", goal: "Leg het probleem uit met après avoir…, vraag om vervanging of terugbetaling met een beleefde formule en gebruik één keer faire + infinitief." }
  });
})(window.SPT);
