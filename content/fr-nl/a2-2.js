/* Frans voor Nederlandstaligen — niveau A2, units 6–10 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-comp': 'vergelijken (plus / moins / aussi … que)', 'fr-sup': 'overtreffende trap (le plus, le meilleur)', 'fr-coi': 'lui en leur', 'fr-y': 'y (er, daar, erheen)',
    'fr-metier': 'beroepen zonder lidwoord', 'fr-futur': 'futur simple', 'fr-quand': 'quand / si + toekomst', 'fr-pc-imp': 'passé composé of imparfait',
    'fr-conn': 'tijd en volgorde (d\'abord, puis, il y a, pendant)', 'fr-rel': 'qui, que, où', 'fr-recent': 'venir de / être en train de'
  });

  /* ───────────────────────── A2 · 6 ───────────────────────── */
  U({
    id: "fr-a2-06", level: "A2", icon: "⚖️", title: "Plus ou moins", nl: "Vergelijken: stad of platteland?",
    goals: ["Dingen, mensen en plaatsen vergelijken", "Zeggen wat het beste, duurste of mooiste is", "Je woonplek beschrijven", "Je voorkeur uitleggen"],
    vocab: [
      ["la ville", "de stad"], ["la banlieue", "de voorstad"], ["le quartier", "de wijk"], ["le centre-ville", "het centrum"], ["l'immeuble", "het flatgebouw"], ["le loyer", "de huur"],
      ["le bruit", "het lawaai"], ["bruyant / bruyante", "lawaaiig"], ["calme", "rustig"], ["animé / animée", "levendig"], ["propre", "schoon"], ["sale", "vies"],
      ["dangereux / dangereuse", "gevaarlijk"], ["tranquille", "rustig / kalm"], ["pratique", "handig"], ["la circulation", "het verkeer"], ["les transports en commun", "het openbaar vervoer"], ["l'espace", "de ruimte"],
      ["la nature", "de natuur"], ["la vie", "het leven"], ["plus … que", "meer … dan / -er dan"], ["moins … que", "minder … dan"], ["aussi … que", "even … als"], ["autant de", "evenveel"],
      ["meilleur / meilleure", "beter (bijv. nw.)"], ["mieux", "beter (bijwoord)"], ["pire", "slechter / erger"], ["le plus", "het meest"], ["préférer", "de voorkeur geven aan"], ["déménager", "verhuizen"]
    ],
    grammar: [
      { t: "Vergelijken: plus, moins, aussi … que", es: "Le comparatif",
        html: `<p>Het Frans heeft geen uitgang zoals het Nederlandse <i>-er</i> (groter, duurder). Je zet er een los woordje vóór:</p>
<p><b>plus</b> + bijv. nw. + <b>que</b> = -er dan · <b>moins</b> + bijv. nw. + <b>que</b> = minder … dan · <b>aussi</b> + bijv. nw. + <b>que</b> = even … als</p>
<p><i>Paris est <b>plus</b> cher <b>que</b> Lyon.</i> · <i>Le village est <b>moins</b> bruyant <b>que</b> la ville.</i> · <i>Mon quartier est <b>aussi</b> calme <b>que</b> ton quartier.</i></p>
<p>Het bijvoeglijk naamwoord past zich gewoon aan: <i>La ville est plus animé<b>e</b> que la campagne.</i></p>
<p>Bij een <b>zelfstandig naamwoord</b> gebruik je <b>plus de / moins de / autant de</b>: <i>Il y a <b>plus de</b> bruit en ville.</i> <i>Il y a <b>autant de</b> magasins ici.</i></p>
<p>Na <i>que</i> komt de beklemtoonde vorm: <i>plus grand que <b>moi</b></i>, <i>que <b>toi</b></i>, <i>que <b>lui</b></i> (niet <s>que je</s>).</p>`,
        table: [["", "vorm", "voorbeeld"], ["+", "plus … que", "Lyon est plus petit que Paris."], ["−", "moins … que", "Le bus est moins rapide que le métro."], ["=", "aussi … que", "Elle est aussi grande que moi."], ["zelfst. nw.", "plus de … que", "Il y a plus de parcs ici."]],
        ex: [["La vie à la campagne est plus tranquille.", "Het leven op het platteland is rustiger."], ["Les loyers sont moins chers à Montréal qu'à Paris.", "De huren zijn in Montréal goedkoper dan in Parijs."]] },
      { t: "Meilleur, mieux en pire", es: "Les comparatifs irréguliers",
        html: `<p>⚠️ <b>Uitzondering:</b> <i>bon</i> (goed) en <i>bien</i> (goed, bijwoord) krijgen géén <i>plus</i>. Ze hebben een eigen vergrotende trap: <b>bon → meilleur</b> en <b>bien → mieux</b>. Dus nooit <s>plus bon</s> of <s>plus bien</s>.</p>
<p><b>Waarom?</b> Net als in het Nederlands (<i>goed → beter</i>, niet «goeder») en het Engels (<i>good → better</i>): het meest gebruikte woord heeft zijn oude, eigen vorm uit het Latijn bewaard.</p>
<p><b>Meilleur of mieux?</b> <i>Meilleur</i> is een <b>bijvoeglijk naamwoord</b>: het zegt iets over een ding of persoon en past zich aan. <i>Ce pain est meilleur. Cette pizza est meilleur<b>e</b>.</i> <i>Mieux</i> is een <b>bijwoord</b>: het zegt iets over een werkwoord en verandert nooit. <i>Elle chante mieux que moi. Je dors mieux ici.</i></p>
<p>Ezelsbruggetje: kun je in het Nederlands «lekkerder / van betere kwaliteit» zeggen → <i>meilleur</i>. Gaat het om hóé je iets doet → <i>mieux</i>.</p>
<p>⚠️ <b>Uitzondering:</b> <i>mauvais</i> (slecht) wordt meestal gewoon <i>plus mauvais</i>, maar heeft ook de eigen vorm <b>pire</b> (erger): <i>La circulation est pire le lundi.</i></p>`,
        table: [["basis", "vergrotende trap", "voorbeeld"], ["bon", "meilleur(e)", "Ce café est meilleur."], ["bien", "mieux", "Je parle mieux qu'avant."], ["mauvais", "pire / plus mauvais", "C'est pire qu'hier."]],
        ex: [["Le pain est meilleur dans cette boulangerie.", "Het brood is lekkerder bij deze bakker."], ["On vit mieux à la campagne.", "Je leeft beter op het platteland."]] },
      { t: "De overtreffende trap: le plus, le moins", es: "Le superlatif",
        html: `<p>Voor «de/het …ste» zet je het lidwoord vóór <i>plus</i> of <i>moins</i>: <b>le plus</b>, <b>la plus</b>, <b>les plus</b>. <i>C'est <b>la plus grande</b> ville du Québec.</i></p>
<p><b>Let op, anders dan in het Nederlands:</b> na de overtreffende trap komt <b>de</b> (niet <i>dans</i> of <i>à</i>): <i>le plus beau quartier <b>de</b> la ville</i> (het mooiste van/in de stad), <i>le plus grand pays <b>du</b> monde</i>.</p>
<p>Staat het bijvoeglijk naamwoord normaal <b>achter</b> het zelfstandig naamwoord, dan herhaal je het lidwoord: <i>le quartier <b>le plus animé</b></i>, <i>la rue <b>la plus chère</b></i>.</p>
<p>⚠️ <b>Uitzondering:</b> ook hier <i>bon → <b>le meilleur</b></i> en <i>bien → <b>le mieux</b></i>: <i>C'est le meilleur restaurant du quartier.</i></p>`,
        table: [["", "voorbeeld", "vertaling"], ["le plus", "le plus grand parc", "het grootste park"], ["la plus", "la ville la plus chère", "de duurste stad"], ["le moins", "le quartier le moins bruyant", "de minst lawaaiige wijk"], ["uitzondering", "la meilleure boulangerie", "de beste bakker"]],
        ex: [["Montréal est la plus grande ville du Québec.", "Montréal is de grootste stad van Québec."], ["C'est le meilleur café de la rue.", "Het is het beste café van de straat."]] }
    ],
    dialogue: {
      t: "Paris ou Montréal ?", place: "Montréal 🇨🇦",
      lines: [
        ["Chloé", "Alors Daan, tu préfères Montréal ou Paris ?", "En Daan, vind je Montréal of Parijs leuker?"],
        ["Daan", "Difficile ! Paris est plus beau, mais Montréal est plus tranquille.", "Moeilijk! Parijs is mooier, maar Montréal is rustiger."],
        ["Chloé", "Et les loyers sont moins chers ici qu'à Paris.", "En de huren zijn hier lager dan in Parijs."],
        ["Daan", "C'est vrai. Mon appartement est plus grand que mon studio à Paris.", "Dat is waar. Mijn appartement is groter dan mijn studio in Parijs."],
        ["Chloé", "Mais l'hiver est pire, non ?", "Maar de winter is erger, toch?"],
        ["Daan", "Oh oui ! Il fait beaucoup plus froid. Moins vingt en janvier !", "O ja! Het is veel kouder. Min twintig in januari!"],
        ["Chloé", "Et les gens ? Ils sont aussi sympas qu'à Paris ?", "En de mensen? Zijn ze even aardig als in Parijs?"],
        ["Daan", "Ils sont plus sympas ! Et je trouve que les bagels sont meilleurs ici.", "Ze zijn aardiger! En ik vind dat de bagels hier lekkerder zijn."],
        ["Chloé", "Bien sûr. Montréal a les meilleurs bagels du monde !", "Natuurlijk. Montréal heeft de beste bagels van de wereld!"],
        ["Daan", "Mais je comprends mieux le français de Paris…", "Maar ik versta het Frans van Parijs beter…"]
      ],
      q: [
        { t: "mc", q: "Où est-ce que les loyers sont moins chers ?", o: ["À Montréal", "À Paris", "C'est pareil"] },
        { t: "mc", q: "Comment est l'hiver à Montréal ?", o: ["Plus froid qu'à Paris", "Moins froid qu'à Paris", "Aussi froid qu'à Paris"] },
        { t: "mc", q: "Qu'est-ce qui est meilleur à Montréal, selon Daan ?", o: ["Les bagels", "Le pain", "Le café"] }
      ]
    },
    culture: { t: "Montréal: Frans met een eigen klank", html: `<p><b>Montréal</b> is na Parijs een van de grootste Franstalige steden ter wereld. In de winter daalt de temperatuur tot ver onder nul; daarom is er een hele <b>ondergrondse stad</b> (<i>le RÉSO</i>) met winkels en metrostations.</p>
<p>Het <b>Québécois</b> klinkt anders dan Frans uit Frankrijk en heeft eigen woorden: <i>une blonde</i> (een vriendin), <i>un chum</i> (een vriend), <i>magasiner</i> (winkelen), <i>la fin de semaine</i> (het weekend). Ook de maaltijden heten anders: <i>déjeuner</i> is er het ontbijt, <i>dîner</i> de lunch en <i>souper</i> het avondeten, net als in België en Zwitserland.</p>
<p>🥯 De bagels van Montréal worden in honing-water gekookt en in een houtoven gebakken. Montréalers vinden ze uiteraard <i>meilleurs</i> dan die van New York.</p>` },
    ex: [
      { t: "cloze", s: "Paris est ___ grand que Lyon.", a: ["plus"], o: ["plus", "aussi", "mieux"], nl: "Parijs is groter dan Lyon.", tag: "fr-comp" },
      { t: "cloze", s: "Le village est moins bruyant ___ la ville.", a: ["que"], o: ["que", "de", "comme"], nl: "Het dorp is minder lawaaiig dan de stad.", tag: "fr-comp" },
      { t: "cloze", s: "Elle est ___ grande que son frère.", a: ["aussi"], o: ["aussi", "autant", "si"], nl: "Ze is even groot als haar broer.", tag: "fr-comp" },
      { t: "cloze", s: "Ce pain est ___ que l'autre.", a: ["meilleur"], o: ["meilleur", "plus bon", "mieux"], nl: "Dit brood is lekkerder dan het andere.", x: "Uitzondering: bon → meilleur, nooit «plus bon».", tag: "fr-comp" },
      { t: "cloze", s: "Elle parle ___ français que moi.", a: ["mieux"], o: ["mieux", "meilleur", "plus bien"], nl: "Ze spreekt beter Frans dan ik.", x: "Uitzondering: bien → mieux. Het zegt iets over «parler», dus bijwoord.", tag: "fr-comp" },
      { t: "cloze", s: "Il y a plus ___ bruit en ville.", a: ["de"], o: ["de", "du", "que"], nl: "Er is meer lawaai in de stad.", x: "Bij een zelfstandig naamwoord: plus de.", tag: "fr-comp" },
      { t: "cloze", s: "C'est la plus belle ville ___ monde.", a: ["du"], o: ["du", "dans le", "au"], nl: "Het is de mooiste stad ter wereld.", x: "Na de overtreffende trap komt de (de + le = du).", tag: "fr-sup" },
      { t: "cloze", s: "C'est ___ restaurant du quartier.", a: ["le meilleur"], o: ["le meilleur", "le plus bon", "le mieux"], nl: "Het is het beste restaurant van de wijk.", x: "Uitzondering: bon → le meilleur.", tag: "fr-sup" },
      { t: "mc", q: "Welke zin is goed?", o: ["Il est plus grand que moi.", "Il est plus grand que je.", "Il est plus grand de moi."], x: "Na que komt de beklemtoonde vorm: moi, toi, lui.", tag: "fr-comp" },
      { t: "mc", q: "Hoe zeg je «de duurste straat»?", o: ["la rue la plus chère", "la plus rue chère", "la rue plus chère"], x: "Staat het bijv. nw. achter het zelfst. nw., dan herhaal je het lidwoord.", tag: "fr-sup" },
      { t: "mc", q: "«Cette pizza est ___.» Wat past?", o: ["meilleure", "mieux", "meilleur"], x: "Meilleur past zich aan: la pizza → meilleure.", tag: "fr-comp" },
      { t: "tr", nl: "Montréal is rustiger dan Parijs.", a: ["Montréal est plus tranquille que Paris.", "Montréal est plus calme que Paris."], tag: "fr-comp" },
      { t: "tr", nl: "De winter is erger.", a: ["L'hiver est pire."], tag: "fr-comp" },
      { t: "tr", nl: "Het is de grootste stad van het land.", a: ["C'est la plus grande ville du pays."], tag: "fr-sup" },
      { t: "tr", nl: "Ik slaap hier beter.", a: ["Je dors mieux ici.", "Ici, je dors mieux."], tag: "fr-comp" },
      { t: "order", s: "Les loyers sont moins chers ici qu'à Paris.", nl: "De huren zijn hier lager dan in Parijs.", tag: "fr-ordre" },
      { t: "match", p: [["calme", "rustig"], ["bruyant", "lawaaiig"], ["propre", "schoon"], ["sale", "vies"], ["pratique", "handig"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Ville ou campagne ?", type: "Forumbericht",
      p: [
        ["J'ai habité dix ans à Paris et maintenant j'habite dans un petit village en Bretagne. Qu'est-ce qui est mieux ? Ça dépend !", "Ik heb tien jaar in Parijs gewoond en nu woon ik in een klein dorp in Bretagne. Wat is beter? Dat hangt ervan af!"],
        ["À la campagne, la vie est plus calme et l'air est plus propre. Ma maison est plus grande que mon appartement à Paris, et le loyer est moins cher. Je dors mieux et j'ai plus de temps.", "Op het platteland is het leven rustiger en de lucht schoner. Mijn huis is groter dan mijn appartement in Parijs, en de huur is lager. Ik slaap beter en heb meer tijd."],
        ["Mais en ville, les transports en commun sont meilleurs et il y a plus de magasins. Ici, le cinéma le plus proche est à trente kilomètres ! Le plus difficile, c'est l'hiver : il y a moins de choses à faire.", "Maar in de stad is het openbaar vervoer beter en zijn er meer winkels. Hier is de dichtstbijzijnde bioscoop dertig kilometer verderop! Het moeilijkste is de winter: er is minder te doen."]
      ],
      gl: [["ça dépend", "dat hangt ervan af"], ["l'air", "de lucht"], ["proche", "dichtbij"], ["la chose", "het ding"], ["la Bretagne", "Bretagne (regio in West-Frankrijk)"]],
      q: [
        { t: "mc", q: "Où habite l'auteur maintenant ?", o: ["Dans un village en Bretagne", "À Paris", "À Montréal"] },
        { t: "mc", q: "Qu'est-ce qui est meilleur en ville ?", o: ["Les transports en commun", "L'air", "Le loyer"] },
        { t: "mc", q: "Qu'est-ce qui est le plus difficile à la campagne ?", o: ["L'hiver", "Le bruit", "Le loyer"] }
      ]
    },
    say: [["Paris est plus cher que Lyon.", "Parijs is duurder dan Lyon."], ["C'est le meilleur restaurant du quartier.", "Het is het beste restaurant van de wijk."], ["Je préfère la campagne.", "Ik geef de voorkeur aan het platteland."], ["On vit mieux ici.", "Je leeft hier beter."]],
    task: { nl: "Vergelijk in 4 of 5 zinnen twee plaatsen die je kent (bijvoorbeeld je woonplaats en een vakantieplek).", model: "J'habite à Utrecht, mais j'adore Lyon. Utrecht est plus petit et plus calme que Lyon. À Lyon, les restaurants sont meilleurs, mais les loyers sont plus chers. Il y a autant de vélos à Utrecht qu'à Amsterdam ! Pour moi, Utrecht est la ville la plus pratique." },
    scenario: { nl: "Je praat met een vriendin uit Montréal over waar je het liefst zou wonen.", role: "You are Chloé, a cheerful friend from Montréal, Québec. Chat with the learner about where it is better to live: big city or countryside, Montréal or their own town. Ask them to compare prices, weather, people and food, and give your own opinions with plus/moins/aussi … que and meilleur/mieux. Use tu and simple French; you may use one or two Québec words like fin de semaine.", goal: "Vergelijk je woonplaats met een andere plek op minstens drie punten en zeg wat je het beste vindt." }
  });

  /* ───────────────────────── A2 · 7 ───────────────────────── */
  U({
    id: "fr-a2-07", level: "A2", icon: "💼", title: "Au travail", nl: "Werk: beroepen, collega's en de telefoon",
    goals: ["Over je werk en beroep praten", "Een eenvoudig telefoongesprek voeren", "Lui en leur gebruiken", "Het woordje y gebruiken"],
    vocab: [
      ["le travail", "het werk"], ["le métier", "het beroep"], ["le bureau", "het kantoor / het bureau"], ["l'entreprise", "het bedrijf"], ["le collègue / la collègue", "de collega"], ["le patron / la patronne", "de baas"],
      ["le client / la cliente", "de klant"], ["la réunion", "de vergadering"], ["le salaire", "het salaris"], ["l'entretien", "het sollicitatiegesprek"], ["le stage", "de stage"], ["le CV", "het cv"],
      ["infirmier / infirmière", "verpleegkundige"], ["ingénieur / ingénieure", "ingenieur"], ["vendeur / vendeuse", "verkoper / verkoopster"], ["professeur", "leraar / lerares"], ["avocat / avocate", "advocaat"], ["cuisinier / cuisinière", "kok"],
      ["informaticien / informaticienne", "IT'er"], ["au chômage", "werkloos"], ["à la retraite", "met pensioen"], ["envoyer", "sturen"], ["téléphoner à", "bellen naar"], ["rappeler", "terugbellen"],
      ["expliquer", "uitleggen"], ["demander", "vragen"], ["Allô ?", "Hallo? (aan de telefoon)"], ["C'est de la part de qui ?", "Met wie spreek ik?"], ["Ne quittez pas.", "Blijft u aan de lijn."], ["laisser un message", "een bericht achterlaten"]
    ],
    grammar: [
      { t: "Beroepen: zonder lidwoord", es: "Les professions sans article",
        html: `<p>⚠️ <b>Let op, anders dan in het Nederlands:</b> na <i>être</i> krijgt een beroep <b>geen lidwoord</b>. <i>Je suis professeur.</i> (Ik ben <u>een</u> leraar → ik ben leraar.) <i>Elle est infirmière.</i> In het Nederlands kan «een» er vaak bij, in het Frans niet: <s>Je suis un professeur</s>.</p>
<p>⚠️ <b>Uitzondering:</b> komt er een <b>bijvoeglijk naamwoord</b> bij, of begin je met <b>c'est</b>, dan komt het lidwoord terug: <i>C'est <b>un</b> professeur.</i> <i>Elle est <b>une</b> excellente infirmière.</i> Waarom? Zonder lidwoord is het beroep een soort eigenschap (zoals «ik ben moe»); met een bijvoeglijk naamwoord praat je over één bepaalde persoon.</p>
<p>De meeste beroepen hebben een vrouwelijke vorm: <i>vendeur → vend<b>euse</b></i>, <i>infirmier → infirmi<b>ère</b></i>, <i>informaticien → informaticien<b>ne</b></i>, <i>avocat → avocat<b>e</b></i>, <i>acteur → act<b>rice</b></i>. Woorden op -e blijven gelijk: <i>un / une journaliste</i>.</p>`,
        table: [["mannelijk", "vrouwelijk", "uitgang"], ["vendeur", "vendeuse", "-eur → -euse"], ["infirmier", "infirmière", "-er → -ère"], ["informaticien", "informaticienne", "-ien → -ienne"], ["directeur", "directrice", "-teur → -trice"], ["journaliste", "journaliste", "blijft gelijk"]],
        ex: [["Mon père est cuisinier.", "Mijn vader is kok."], ["Qu'est-ce que vous faites dans la vie ?", "Wat doet u voor werk?"], ["C'est une très bonne avocate.", "Ze is een heel goede advocaat."]] },
      { t: "Lui en leur: aan hem, aan haar, aan hen", es: "Les pronoms COI : lui, leur",
        html: `<p>Na werkwoorden met <b>à + persoon</b> (<i>téléphoner à, parler à, écrire à, répondre à, demander à, donner à, envoyer à, expliquer à, dire à</i>) vervang je die persoon door <b>lui</b> (enkelvoud) of <b>leur</b> (meervoud).</p>
<p><i>Je téléphone <u>à Marc</u> → Je <b>lui</b> téléphone.</i> · <i>Je téléphone <u>à Marie</u> → Je <b>lui</b> téléphone.</i> · <i>J'écris <u>aux clients</u> → Je <b>leur</b> écris.</i></p>
<p><b>Lui</b> is hier zowel «hem» als «haar»: er is geen verschil tussen mannelijk en vrouwelijk. De plaats is dezelfde als bij <i>le, la, les</i>: <b>vóór het werkwoord</b> (of vóór de infinitief): <i>Je vais <b>lui</b> envoyer un mail.</i></p>
<p>⚠️ <b>Let op, hier wijkt het Frans af van het Nederlands:</b> <i>téléphoner</i> heeft <b>à</b> (je belt «aan» iemand), dus <i>je <b>lui</b> téléphone</i>, niet <s>je le téléphone</s>. Maar <i>appeler</i> (ook: bellen) heeft géén à: <i>je <b>l'</b>appelle</i>. En <i>aider</i> en <i>écouter</i> ook niet: <i>je <b>l'</b>aide</i>, <i>je <b>les</b> écoute</i> (wij: luisteren <u>naar</u>).</p>
<p>Voor <i>mij, jou, ons, jullie</i> is er geen verschil met wat je al kent: <b>me, te, nous, vous</b>: <i>Il <b>me</b> téléphone. Je <b>vous</b> envoie le document.</i></p>`,
        table: [["met à + persoon", "met voornaamwoord"], ["Je parle à mon patron.", "Je lui parle."], ["Elle répond à la cliente.", "Elle lui répond."], ["Nous écrivons aux collègues.", "Nous leur écrivons."], ["Tu demandes à tes parents ?", "Tu leur demandes ?"]],
        ex: [["Je lui envoie le CV aujourd'hui.", "Ik stuur hem/haar het cv vandaag."], ["Vous pouvez leur expliquer le problème ?", "Kunt u hun het probleem uitleggen?"], ["Je ne lui ai pas encore répondu.", "Ik heb hem/haar nog niet geantwoord."]] },
      { t: "Y: er, daar, erheen", es: "Le pronom y",
        html: `<p>Het woordje <b>y</b> vervangt een <b>plaats</b> die met <i>à, en, dans, chez, sur</i> wordt aangeduid. Het betekent «er, daar, erheen» en staat ook <b>vóór het werkwoord</b>.</p>
<p><i>Tu vas <u>au bureau</u> ? — Oui, j'<b>y</b> vais.</i> (Ja, ik ga erheen.)<br><i>Vous travaillez <u>à Abidjan</u> ? — Oui, j'<b>y</b> travaille depuis deux ans.</i><br><i>Elle est <u>chez le client</u> ? — Oui, elle <b>y</b> est.</i></p>
<p><b>Y of en?</b> <i>Y</i> = waar je bent of heen gaat (<i>à</i>). <i>En</i> = waar je vandaan komt of een hoeveelheid (<i>de</i>): <i>Je viens <u>du bureau</u> → J'<b>en</b> viens.</i></p>
<p>Je kent <i>y</i> al uit een vaste uitdrukking: <b>il y a</b> (er is). En uit <i>On y va !</i> (We gaan! / Kom op!) en <i>Allez-y !</i> (Ga uw gang!).</p>
<p>⚠️ <b>Uitzondering:</b> vóór de toekomende tijd van <i>aller</i> valt <i>y</i> weg, omdat twee i-klanken botsen: <i>J'irai</i> (niet <s>j'y irai</s>).</p>`,
        table: [["vraag", "antwoord met y"], ["Tu vas à la réunion ?", "Oui, j'y vais."], ["Il habite en France ?", "Oui, il y habite."], ["Vous êtes déjà allés au Sénégal ?", "Non, nous n'y sommes jamais allés."]],
        ex: [["Le bureau ? J'y arrive à neuf heures.", "Het kantoor? Ik kom er om negen uur aan."], ["On y va ?", "Zullen we gaan?"]] }
    ],
    dialogue: {
      t: "Un appel au bureau", place: "Abidjan 🇨🇮",
      lines: [
        ["Aya", "Allô ? Entreprise Kouamé, bonjour.", "Hallo? Bedrijf Kouamé, goedendag."],
        ["Tom", "Bonjour, madame. Je voudrais parler à monsieur Kouamé, s'il vous plaît.", "Goedendag, mevrouw. Ik wil graag meneer Kouamé spreken, alstublieft."],
        ["Aya", "C'est de la part de qui ?", "Met wie spreek ik?"],
        ["Tom", "Tom Bakker. Je suis ingénieur et je lui ai envoyé mon CV la semaine dernière.", "Tom Bakker. Ik ben ingenieur en ik heb hem vorige week mijn cv gestuurd."],
        ["Aya", "Ne quittez pas… Je suis désolée, il est en réunion. Il y est jusqu'à midi.", "Blijft u aan de lijn… Het spijt me, hij zit in een vergadering. Hij is daar tot twaalf uur."],
        ["Tom", "Est-ce que je peux lui laisser un message ?", "Kan ik een bericht voor hem achterlaten?"],
        ["Aya", "Bien sûr. Je lui dis quoi ?", "Natuurlijk. Wat zal ik hem zeggen?"],
        ["Tom", "Je suis à Abidjan cette semaine. Il peut me rappeler cet après-midi ?", "Ik ben deze week in Abidjan. Kan hij me vanmiddag terugbellen?"],
        ["Aya", "D'accord, je lui donne votre message. Vous connaissez notre bureau au Plateau ?", "Goed, ik geef hem uw bericht door. Kent u ons kantoor in Le Plateau?"],
        ["Tom", "Oui, j'y suis allé hier. Merci beaucoup, madame !", "Ja, ik ben er gisteren geweest. Hartelijk dank, mevrouw!"]
      ],
      q: [
        { t: "mc", q: "Quel est le métier de Tom ?", o: ["Ingénieur", "Avocat", "Informaticien"] },
        { t: "mc", q: "Pourquoi monsieur Kouamé ne peut-il pas parler ?", o: ["Il est en réunion", "Il est en vacances", "Il est malade"] },
        { t: "mc", q: "Qu'est-ce que Tom demande ?", o: ["De le rappeler cet après-midi", "D'envoyer un CV", "De venir à midi"] }
      ]
    },
    culture: { t: "Werken in het Frans: van Parijs tot Abidjan", html: `<p><b>Abidjan</b>, de economische hoofdstad van Ivoorkust, is een van de grootste Franstalige steden ter wereld. In de zakenwijk <b>Le Plateau</b> staan de kantoortorens. Frans is er de taal van werk, school en bestuur, naast tientallen lokale talen.</p>
<p>Op het werk zeg je in het Frans bijna altijd eerst <b>vous</b>. Collega's stappen vaak snel over op <i>tu</i>, maar wacht tot de ander het voorstelt: <i>«On peut se tutoyer ?»</i></p>
<p>📞 Aan de telefoon zeg je <b>Allô ?</b> (alleen aan de telefoon, nooit op straat). Een e-mail sluit je af met <i>Cordialement</i> (met vriendelijke groet).</p>
<p>In Frankrijk is de wettelijke werkweek <b>35 uur</b>, en de lunchpauze is heilig: vaak een uur of langer, liefst aan tafel.</p>` },
    ex: [
      { t: "cloze", s: "Ma sœur est ___.", a: ["infirmière"], o: ["infirmière", "une infirmière", "infirmier"], nl: "Mijn zus is verpleegkundige.", x: "Anders dan in het Nederlands: na être geen lidwoord bij een beroep.", tag: "fr-metier" },
      { t: "cloze", s: "C'est ___ bon cuisinier.", a: ["un"], o: ["un", "une", "le"], nl: "Hij is een goede kok.", x: "Uitzondering: met c'est of een bijvoeglijk naamwoord komt het lidwoord terug.", tag: "fr-metier" },
      { t: "cloze", s: "Je téléphone à Marc. → Je ___ téléphone.", a: ["lui"], o: ["lui", "le", "leur"], nl: "Ik bel hem.", x: "Téléphoner à: dus lui, niet le.", tag: "fr-coi" },
      { t: "cloze", s: "J'écris aux clients. → Je ___ écris.", a: ["leur"], o: ["leur", "les", "lui"], nl: "Ik schrijf hun.", tag: "fr-coi" },
      { t: "cloze", s: "Tu parles à Marie ? Oui, je ___ parle.", a: ["lui"], o: ["lui", "la", "elle"], nl: "Praat je met Marie? Ja, ik praat met haar.", x: "Lui is ook «haar»: geen verschil tussen mannelijk en vrouwelijk.", tag: "fr-coi" },
      { t: "cloze", s: "Tu vas au bureau ? Oui, j'___ vais.", a: ["y"], o: ["y", "en", "le"], nl: "Ga je naar kantoor? Ja, ik ga erheen.", tag: "fr-y" },
      { t: "cloze", s: "Elle travaille à Abidjan ? Oui, elle ___ travaille.", a: ["y"], o: ["y", "en", "lui"], nl: "Werkt ze in Abidjan? Ja, ze werkt er.", tag: "fr-y" },
      { t: "cloze", s: "J'appelle le client. → Je ___ appelle.", a: ["l'"], o: ["l'", "lui", "leur"], nl: "Ik bel hem.", x: "Let op: appeler heeft geen à, dus le/l'. Téléphoner à wel: lui.", tag: "fr-coi" },
      { t: "mc", q: "Welke zin is goed?", o: ["Je vais lui envoyer un mail.", "Je lui vais envoyer un mail.", "Je vais envoyer lui un mail."], x: "Bij twee werkwoorden staat lui vóór de infinitief.", tag: "fr-coi" },
      { t: "mc", q: "Wat zeg je als je de telefoon opneemt?", o: ["Allô ?", "Salut ?", "Bonjour, qui ?"], tag: "fr-voc" },
      { t: "mc", q: "«Je viens du bureau.» Hoe vervang je «du bureau»?", o: ["J'en viens.", "J'y viens.", "Je le viens."], x: "Waar je vandaan komt (de) = en. Waar je bent of heen gaat (à) = y.", tag: "fr-y" },
      { t: "tr", nl: "Ik ben ingenieur.", a: ["Je suis ingénieur.", "Je suis ingénieure."], tag: "fr-metier" },
      { t: "tr", nl: "Kan ik een bericht achterlaten?", a: ["Est-ce que je peux laisser un message ?", "Je peux laisser un message ?", "Puis-je laisser un message ?"], tag: "fr-voc" },
      { t: "tr", nl: "Ik geef hem uw bericht.", a: ["Je lui donne votre message."], tag: "fr-coi" },
      { t: "tr", nl: "Zullen we gaan?", a: ["On y va ?"], tag: "fr-y" },
      { t: "order", s: "Je lui ai envoyé mon CV la semaine dernière.", nl: "Ik heb hem vorige week mijn cv gestuurd.", tag: "fr-ordre" },
      { t: "match", p: [["le métier", "het beroep"], ["la réunion", "de vergadering"], ["le patron", "de baas"], ["le salaire", "het salaris"], ["le stage", "de stage"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Aya, assistante à Abidjan", type: "Portret in een bedrijfsblad",
      p: [
        ["Aya Koné a vingt-huit ans. Elle est assistante de direction dans une entreprise d'informatique à Abidjan. Elle y travaille depuis trois ans.", "Aya Koné is achtentwintig. Ze is directieassistente bij een IT-bedrijf in Abidjan. Ze werkt er al drie jaar."],
        ["Le matin, elle arrive au bureau à huit heures. Elle lit les mails des clients et elle leur répond. Son patron voyage beaucoup : elle lui téléphone tous les jours et elle lui envoie les documents importants.", "'s Ochtends komt ze om acht uur op kantoor. Ze leest de mails van de klanten en beantwoordt ze. Haar baas reist veel: ze belt hem elke dag en stuurt hem de belangrijke documenten."],
        ["Aya aime son métier, mais les journées sont longues. Son rêve ? Elle veut devenir avocate. Le soir, elle étudie le droit à l'université. « C'est difficile, mais j'y arrive ! »", "Aya houdt van haar beroep, maar de dagen zijn lang. Haar droom? Ze wil advocaat worden. 's Avonds studeert ze rechten aan de universiteit. 'Het is zwaar, maar het lukt me!'"]
      ],
      gl: [["l'assistante de direction", "de directieassistente"], ["l'informatique", "de IT / informatica"], ["le rêve", "de droom"], ["le droit", "rechten (studie)"], ["j'y arrive", "het lukt me"]],
      q: [
        { t: "mc", q: "Depuis combien de temps Aya travaille-t-elle dans cette entreprise ?", o: ["Depuis trois ans", "Depuis huit ans", "Depuis un an"] },
        { t: "mc", q: "Que fait-elle pour son patron ?", o: ["Elle lui envoie les documents importants", "Elle voyage avec lui", "Elle lui prépare le déjeuner"] },
        { t: "mc", q: "Que veut-elle devenir ?", o: ["Avocate", "Informaticienne", "Patronne"] }
      ]
    },
    say: [["Qu'est-ce que vous faites dans la vie ?", "Wat doet u voor werk?"], ["Je suis infirmière.", "Ik ben verpleegkundige."], ["Je peux lui laisser un message ?", "Kan ik een bericht voor hem achterlaten?"], ["Je lui téléphone demain.", "Ik bel hem morgen."]],
    task: { nl: "Beschrijf in 4 of 5 zinnen je werk (of het werk van iemand die je kent): beroep, waar, sinds wanneer, wat doe je?", model: "Je suis informaticien dans une petite entreprise à Utrecht. J'y travaille depuis cinq ans. Je parle beaucoup avec les clients et je leur explique les programmes. Ma patronne est sympa : je lui envoie un rapport chaque vendredi." },
    scenario: { nl: "Je belt naar een bedrijf in Abidjan en wilt iemand spreken die er niet is.", role: "You are Aya, a polite assistant at Entreprise Kouamé in Abidjan, Côte d'Ivoire. The learner phones and wants to speak to Monsieur Kouamé, who is in a meeting until noon. Ask who is calling, offer to take a message, confirm their phone number and when he can call back. Use vous and simple, professional French.", goal: "Zeg wie je bent en wat je beroep is, vraag naar meneer Kouamé en laat een bericht achter." }
  });

  /* ───────────────────────── A2 · 8 ───────────────────────── */
  U({
    id: "fr-a2-08", level: "A2", icon: "🔮", title: "Un jour, je serai…", nl: "De toekomst: plannen, dromen en voorspellingen",
    goals: ["Over de toekomst en je dromen praten", "De futur simple maken", "De onregelmatige toekomststammen gebruiken", "Zinnen met quand en si over later maken"],
    vocab: [
      ["l'avenir", "de toekomst"], ["le rêve", "de droom"], ["le projet", "het plan / het project"], ["un jour", "ooit / op een dag"], ["bientôt", "binnenkort"], ["dans dix ans", "over tien jaar"],
      ["l'année prochaine", "volgend jaar"], ["plus tard", "later"], ["peut-être", "misschien"], ["sûrement", "vast en zeker"], ["espérer", "hopen"], ["réussir", "slagen"],
      ["gagner", "verdienen / winnen"], ["voyager", "reizen"], ["construire", "bouwen"], ["changer", "veranderen"], ["apprendre", "leren"], ["l'université", "de universiteit"],
      ["le diplôme", "het diploma"], ["l'examen", "het examen"], ["le monde", "de wereld"], ["le pays", "het land"], ["à l'étranger", "in / naar het buitenland"], ["riche", "rijk"],
      ["célèbre", "beroemd"], ["heureux / heureuse", "gelukkig"], ["je serai", "ik zal zijn"], ["j'aurai", "ik zal hebben"], ["j'irai", "ik zal gaan"], ["Inch'Allah", "als God het wil (veel gebruikt in West-Afrika)"]
    ],
    grammar: [
      { t: "Futur simple: de vorm", es: "Le futur simple : formation",
        html: `<p>De <b>futur simple</b> is de «echte» toekomende tijd. Hij is makkelijk: neem de <b>hele infinitief</b> en zet er de uitgangen <b>-ai, -as, -a, -ons, -ez, -ont</b> achter. Die uitgangen ken je al: het zijn de vormen van <i>avoir</i> (<i>j'<b>ai</b>, tu <b>as</b>, il <b>a</b>, nous av<b>ons</b>, vous av<b>ez</b>, ils <b>ont</b></i>).</p>
<p><i>parler → je parler<b>ai</b></i> · <i>finir → tu finir<b>as</b></i> · <i>voyager → nous voyager<b>ons</b></i></p>
<p>Werkwoorden op <b>-re</b> verliezen eerst de laatste e: <i>prendre → je prendr<b>ai</b></i>, <i>attendre → il attendr<b>a</b></i>.</p>
<p>Je herkent de futur altijd aan de <b>r</b> vóór de uitgang.</p>
<p><b>Futur simple of futur proche?</b> <i>Je vais partir</i> (futur proche) is dichtbij en al besloten. <i>Je partirai</i> (futur simple) is verder weg, minder zeker, of klinkt als een belofte of voorspelling. In gesproken Frans hoor je de futur proche het meest; in geschreven Frans, weerberichten en beloftes de futur simple.</p>`,
        table: [["", "parler", "finir", "prendre"], ["je", "parlerai", "finirai", "prendrai"], ["tu", "parleras", "finiras", "prendras"], ["il / elle / on", "parlera", "finira", "prendra"], ["nous", "parlerons", "finirons", "prendrons"], ["vous", "parlerez", "finirez", "prendrez"], ["ils / elles", "parleront", "finiront", "prendront"]],
        ex: [["Un jour, je voyagerai en Afrique.", "Ooit zal ik naar Afrika reizen."], ["Nous finirons demain.", "We maken het morgen af."], ["Tu comprendras plus tard.", "Je zult het later begrijpen."]] },
      { t: "Onregelmatige toekomststammen", es: "Les radicaux irréguliers du futur",
        html: `<p>⚠️ <b>Uitzondering:</b> een groep veelgebruikte werkwoorden heeft een <b>eigen stam</b> in de futur. De uitgangen blijven altijd dezelfde en de stam eindigt altijd op <b>-r</b>. <b>Waarom?</b> Het zijn weer de oudste, meest gebruikte werkwoorden: hun stam is in de loop van de tijd samengetrokken (<i>avoir + ai → aurai</i>).</p>
<p>De belangrijkste: <b>être → ser-</b>, <b>avoir → aur-</b>, <b>aller → ir-</b>, <b>faire → fer-</b>, <b>venir → viendr-</b>, <b>voir → verr-</b>, <b>pouvoir → pourr-</b>, <b>vouloir → voudr-</b>, <b>devoir → devr-</b>, <b>savoir → saur-</b>.</p>
<p>En bij de onpersoonlijke werkwoorden: <i>il faut → il <b>faudra</b></i>, <i>il pleut → il <b>pleuvra</b></i>, <i>il y a → il y <b>aura</b></i>.</p>
<p>Ezelsbruggetje: <i>voudr-</i> ken je al van <i>je <b>voudr</b>ais</i> (ik zou graag willen); en <i>verr-</i> en <i>pourr-</i> hebben een dubbele r.</p>`,
        table: [["infinitief", "stam", "je-vorm", "vertaling"], ["être", "ser-", "je serai", "ik zal zijn"], ["avoir", "aur-", "j'aurai", "ik zal hebben"], ["aller", "ir-", "j'irai", "ik zal gaan"], ["faire", "fer-", "je ferai", "ik zal doen"], ["venir", "viendr-", "je viendrai", "ik zal komen"], ["voir", "verr-", "je verrai", "ik zal zien"], ["pouvoir", "pourr-", "je pourrai", "ik zal kunnen"]],
        ex: [["Dans dix ans, je serai médecin.", "Over tien jaar ben ik arts."], ["Demain, il fera beau.", "Morgen wordt het mooi weer."], ["Nous irons à Dakar l'année prochaine.", "We gaan volgend jaar naar Dakar."]] },
      { t: "Quand en si: toekomst na «als»", es: "Quand + futur, si + présent",
        html: `<p>⚠️ <b>Let op, anders dan in het Nederlands:</b> na <b>quand</b> (wanneer, als) gebruikt het Frans de <b>futur</b> als het over later gaat. Wij zeggen «Als ik groot <u>ben</u>, word ik piloot», het Frans zegt: <i>Quand je <b>serai</b> grand, je <b>serai</b> pilote.</i> Twee keer futur.</p>
<p><b>Waarom?</b> Het Frans is hier consequenter: het «groot zijn» ligt ook echt in de toekomst.</p>
<p>⚠️ <b>Uitzondering:</b> na <b>si</b> (als, indien: een voorwaarde) komt juist <b>nooit</b> de futur, maar de tegenwoordige tijd: <i><b>Si</b> j'<b>ai</b> le temps, je <b>viendrai</b>.</i> (Als ik tijd heb, kom ik.) Ezelsbruggetje op Franse scholen: <i>«Les si n'aiment pas les -rai»</i>: na si geen -rai.</p>
<p>Het verschil: <i>quand</i> = het gebeurt zeker, alleen het moment is open. <i>Si</i> = het is niet zeker.</p>`,
        table: [["bijzin", "hoofdzin", "vertaling"], ["Quand j'aurai mon diplôme,", "je chercherai un travail.", "Als ik mijn diploma heb, zoek ik werk."], ["Quand tu viendras,", "nous irons à la plage.", "Als je komt, gaan we naar het strand."], ["Si tu viens,", "nous irons à la plage.", "Als (indien) je komt, gaan we naar het strand."], ["S'il pleut,", "je resterai ici.", "Als het regent, blijf ik hier."]],
        ex: [["Quand je serai riche, j'achèterai une maison.", "Als ik rijk ben, koop ik een huis."], ["Si j'ai le temps, je t'appellerai.", "Als ik tijd heb, bel ik je."]] }
    ],
    dialogue: {
      t: "Sur la plage de Ngor", place: "Dakar 🇸🇳",
      lines: [
        ["Awa", "Sanne, qu'est-ce que tu feras quand tu auras ton diplôme ?", "Sanne, wat ga je doen als je je diploma hebt?"],
        ["Sanne", "Je ne sais pas encore. Je voyagerai peut-être un an. Et toi ?", "Ik weet het nog niet. Misschien ga ik een jaar reizen. En jij?"],
        ["Awa", "Moi, je serai médecin. Je travaillerai dans un hôpital ici, à Dakar.", "Ik word arts. Ik ga in een ziekenhuis werken, hier in Dakar."],
        ["Sanne", "Tu ne partiras pas à l'étranger ?", "Ga je niet naar het buitenland?"],
        ["Awa", "Si je peux, j'irai en France pour étudier deux ans. Mais je reviendrai.", "Als het kan, ga ik twee jaar in Frankrijk studeren. Maar ik kom terug."],
        ["Sanne", "Et dans dix ans ? Tu auras des enfants ?", "En over tien jaar? Heb je dan kinderen?"],
        ["Awa", "Peut-être. J'aurai une grande maison près de la mer, inch'Allah.", "Misschien. Ik heb dan een groot huis bij de zee, als God het wil."],
        ["Sanne", "Quand tu auras ta maison, je viendrai te voir !", "Als je je huis hebt, kom ik je opzoeken!"],
        ["Awa", "Bien sûr ! Tu verras, on fera un grand thiéboudienne.", "Natuurlijk! Je zult zien, we maken een grote thiéboudienne."],
        ["Sanne", "Il faudra m'apprendre la recette !", "Je zult me het recept moeten leren!"]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce qu'Awa fera plus tard ?", o: ["Elle sera médecin", "Elle voyagera un an", "Elle sera professeur"] },
        { t: "mc", q: "Où ira-t-elle étudier, si elle peut ?", o: ["En France", "Au Canada", "En Belgique"] },
        { t: "mc", q: "Que fera Sanne quand Awa aura sa maison ?", o: ["Elle viendra la voir", "Elle achètera une maison", "Elle partira à l'étranger"] }
      ]
    },
    culture: { t: "Senegal: teranga en thiéboudienne", html: `<p><b>Senegal</b> staat bekend om de <b>teranga</b>: gastvrijheid. Een gast krijgt altijd eten aangeboden, en je eet samen uit één grote schaal.</p>
<p>Het nationale gerecht is <b>thiéboudienne</b> (uitspraak ongeveer «tjeb-oe-djen»): rijst met vis, groenten en tomatensaus. Het staat op de UNESCO-lijst van immaterieel erfgoed.</p>
<p>Frans is de officiële taal, maar thuis en op straat spreken de meeste mensen <b>Wolof</b>. Je hoort vaak <i>inch'Allah</i> («als God het wil») als iemand over de toekomst praat: het is vriendelijk en gewoon, ook in het Frans.</p>
<p>🌍 Tegen 2050 woont naar verwachting de meerderheid van alle Franstaligen in <b>Afrika</b>. De toekomst van het Frans ligt dus voor een groot deel daar.</p>` },
    ex: [
      { t: "cloze", s: "Demain, je ___ avec mon patron.", a: ["parlerai"], o: ["parlerai", "parlerais", "parlera"], nl: "Morgen praat ik met mijn baas.", tag: "fr-futur" },
      { t: "cloze", s: "Nous ___ à huit heures.", a: ["finirons"], o: ["finirons", "finissons", "finiront"], nl: "We zijn om acht uur klaar.", tag: "fr-futur" },
      { t: "cloze", s: "Dans dix ans, je ___ médecin.", a: ["serai"], o: ["serai", "êtrai", "suis"], nl: "Over tien jaar ben ik arts.", x: "Uitzondering: être heeft de toekomststam ser-.", tag: "fr-futur" },
      { t: "cloze", s: "Tu ___ une grande maison.", a: ["auras"], o: ["auras", "avoiras", "as"], nl: "Je zult een groot huis hebben.", x: "Uitzondering: avoir → aur-.", tag: "fr-futur" },
      { t: "cloze", s: "L'année prochaine, nous ___ au Sénégal.", a: ["irons"], o: ["irons", "allerons", "allons"], nl: "Volgend jaar gaan we naar Senegal.", x: "Uitzondering: aller → ir-.", tag: "fr-futur" },
      { t: "cloze", s: "Demain, il ___ beau.", a: ["fera"], o: ["fera", "faira", "fait"], nl: "Morgen wordt het mooi weer.", x: "Uitzondering: faire → fer-.", tag: "fr-futur" },
      { t: "cloze", s: "Quand je ___ grand, je serai pilote.", a: ["serai"], o: ["serai", "suis", "étais"], nl: "Als ik groot ben, word ik piloot.", x: "Anders dan in het Nederlands: na quand komt de futur als het over later gaat.", tag: "fr-quand" },
      { t: "cloze", s: "Si j'___ le temps, je viendrai.", a: ["ai"], o: ["ai", "aurai", "avais"], nl: "Als ik tijd heb, kom ik.", x: "Uitzondering: na si nooit de futur, maar de tegenwoordige tijd.", tag: "fr-quand" },
      { t: "mc", q: "Hoe maak je de futur simple van een regelmatig werkwoord?", o: ["infinitief + -ai, -as, -a…", "nous-stam + -ais", "avoir + deelwoord"], tag: "fr-futur" },
      { t: "mc", q: "Welke vorm is goed?", o: ["je verrai", "je voirai", "je verai"], x: "Uitzondering: voir → verr- (met dubbele r).", tag: "fr-futur" },
      { t: "mc", q: "Welke zin is goed?", o: ["S'il pleut, je resterai ici.", "S'il pleuvra, je resterai ici.", "S'il pleuvrait, je resterai ici."], x: "Na si: tegenwoordige tijd. De futur staat in het andere deel.", tag: "fr-quand" },
      { t: "tr", nl: "Ooit zal ik naar Afrika reizen.", a: ["Un jour, je voyagerai en Afrique.", "Un jour je voyagerai en Afrique."], tag: "fr-futur" },
      { t: "tr", nl: "Je zult zien!", a: ["Tu verras !", "Vous verrez !"], tag: "fr-futur" },
      { t: "tr", nl: "Als ik tijd heb, bel ik je.", a: ["Si j'ai le temps, je t'appellerai.", "Si j'ai le temps, je te téléphonerai."], tag: "fr-quand" },
      { t: "tr", nl: "Ik kom terug.", a: ["Je reviendrai."], tag: "fr-futur" },
      { t: "order", s: "Quand j'aurai mon diplôme, je chercherai un travail.", nl: "Als ik mijn diploma heb, zoek ik werk.", tag: "fr-ordre" },
      { t: "match", p: [["être", "je serai"], ["avoir", "j'aurai"], ["aller", "j'irai"], ["faire", "je ferai"], ["venir", "je viendrai"]], tag: "fr-futur" }
    ],
    reading: {
      t: "Dakar en 2050", type: "Schoolopstel",
      p: [
        ["En 2050, j'aurai quarante ans. J'habiterai toujours à Dakar, mais la ville sera très différente. Il y aura plus d'habitants et beaucoup de nouveaux immeubles.", "In 2050 ben ik veertig. Ik woon dan nog steeds in Dakar, maar de stad zal heel anders zijn. Er zullen meer inwoners zijn en veel nieuwe gebouwen."],
        ["Les voitures seront électriques et il y aura moins de bruit. Nous prendrons le train pour aller au travail. Les enfants apprendront à l'école avec des ordinateurs, mais ils joueront toujours au foot sur la plage.", "De auto's zullen elektrisch zijn en er zal minder lawaai zijn. We nemen de trein naar ons werk. De kinderen leren op school met computers, maar ze voetballen nog steeds op het strand."],
        ["Moi, je serai ingénieure. Je construirai des maisons qui restent fraîches sans climatisation. Si je réussis, je pourrai aider mon pays. Quand je serai vieille, je raconterai tout ça à mes petits-enfants !", "Ik ben dan ingenieur. Ik bouw huizen die koel blijven zonder airco. Als ik slaag, kan ik mijn land helpen. Als ik oud ben, vertel ik dat allemaal aan mijn kleinkinderen!"]
      ],
      gl: [["l'habitant", "de inwoner"], ["électrique", "elektrisch"], ["frais / fraîche", "koel"], ["la climatisation", "de airco"], ["les petits-enfants", "de kleinkinderen"]],
      q: [
        { t: "mc", q: "Quel âge aura-t-elle en 2050 ?", o: ["Quarante ans", "Cinquante ans", "Vingt ans"] },
        { t: "mc", q: "Comment seront les voitures ?", o: ["Électriques", "Plus bruyantes", "Plus grandes"] },
        { t: "mc", q: "Quel sera son métier ?", o: ["Ingénieure", "Professeure", "Médecin"] }
      ]
    },
    say: [["Un jour, j'irai au Sénégal.", "Ooit ga ik naar Senegal."], ["Dans dix ans, je serai heureux.", "Over tien jaar ben ik gelukkig."], ["Quand j'aurai le temps, je viendrai.", "Als ik tijd heb, kom ik."], ["Tu verras !", "Je zult zien!"]],
    task: { nl: "Schrijf 4 of 5 zinnen over jezelf over tien jaar: waar woon je, wat doe je, wat heb je dan? Gebruik de futur simple.", model: "Dans dix ans, j'habiterai dans une maison près de la mer. Je parlerai très bien français et je voyagerai souvent en France. J'aurai peut-être un chien. Si j'ai assez d'argent, je ferai un grand voyage en Afrique. Je serai heureux !" },
    scenario: { nl: "Je zit met een Senegalese vriendin op het strand van Dakar en jullie praten over de toekomst.", role: "You are Awa, a medical student from Dakar, Senegal. Sit on Ngor beach with the learner and talk about the future: ask what they will do next year, in ten years, where they will live, and share your own dreams (becoming a doctor, a house by the sea). Use tu, the futur simple, and simple French. You may say inch'Allah once.", goal: "Vertel drie dingen die je in de toekomst zult doen en vraag naar de plannen van je vriendin." }
  });

  /* ───────────────────────── A2 · 9 ───────────────────────── */
  U({
    id: "fr-a2-09", level: "A2", icon: "📖", title: "Raconter une histoire", nl: "Een verhaal vertellen: wat gebeurde er?",
    goals: ["Een gebeurtenis of verhaal uit het verleden vertellen", "Kiezen tussen passé composé en imparfait", "Je verhaal ordenen met d'abord, puis, soudain, enfin", "Il y a, pendant en depuis uit elkaar houden"],
    vocab: [
      ["l'histoire", "het verhaal"], ["d'abord", "eerst"], ["puis", "dan / daarna"], ["ensuite", "vervolgens"], ["enfin", "ten slotte / eindelijk"], ["soudain", "plotseling"],
      ["tout à coup", "ineens"], ["pendant que", "terwijl"], ["à ce moment-là", "op dat moment"], ["il y a deux jours", "twee dagen geleden"], ["pendant", "gedurende"], ["heureusement", "gelukkig"],
      ["malheureusement", "helaas"], ["l'accident", "het ongeluk"], ["le voleur", "de dief"], ["la police", "de politie"], ["le portefeuille", "de portemonnee"], ["la clé", "de sleutel"],
      ["l'orage", "het onweer"], ["la panne", "de pech / de storing"], ["le bruit", "het geluid"], ["crier", "schreeuwen"], ["courir", "rennen"], ["voler", "stelen"],
      ["se passer", "gebeuren"], ["avoir peur", "bang zijn"], ["avoir de la chance", "geluk hebben"], ["se réveiller", "wakker worden"], ["Qu'est-ce qui s'est passé ?", "Wat is er gebeurd?"], ["Quelle histoire !", "Wat een verhaal!"]
    ],
    grammar: [
      { t: "Passé composé of imparfait?", es: "Passé composé ou imparfait ?",
        html: `<p>In een verhaal heb je beide verleden tijden nodig. Denk aan een film:</p>
<p>🎬 De <b>imparfait</b> is het <b>decor</b>: hoe het was, wat er aan de gang was, het weer, je gevoel, wat je altijd deed. <i>Il <b>faisait</b> nuit. Je <b>dormais</b>. J'<b>avais</b> peur.</i></p>
<p>⚡ De <b>passé composé</b> is de <b>actie</b>: wat er (plotseling, één keer, na elkaar) gebeurde. <i>Soudain, j'<b>ai entendu</b> un bruit. Je <b>me suis levé</b> et j'<b>ai ouvert</b> la porte.</i></p>
<p>Vaak staan ze samen in één zin: iets was aan de gang (imparfait) toen er iets gebeurde (passé composé). <i>Je <b>dormais</b> quand le téléphone <b>a sonné</b>.</i> (Ik sliep toen de telefoon ging.)</p>
<p><b>Let op:</b> het Nederlands zegt in beide gevallen «sliep» en «ging»: één verleden tijd. Je moet in het Frans dus bij elk werkwoord kiezen. Vraag je af: <b>was het de achtergrond, of gebeurde het?</b></p>
<p>⚠️ <b>Let op bij être en avoir:</b> die staan in een verhaal bijna altijd in de imparfait, omdat ze een toestand beschrijven (<i>j'étais fatigué, il y avait du monde</i>). In de passé composé betekenen ze een plotselinge verandering: <i>j'<b>ai eu</b> peur</i> = ik schrok (ik kreeg ineens angst).</p>`,
        table: [["imparfait (decor)", "passé composé (actie)"], ["Il pleuvait.", "J'ai pris un taxi."], ["Je regardais la télé", "quand tu as appelé."], ["Nous étions à la plage.", "Soudain, l'orage est arrivé."], ["Tous les jours, je prenais le bus.", "Ce jour-là, j'ai pris le vélo."]],
        ex: [["Il faisait beau, alors nous sommes allés à la plage.", "Het was mooi weer, dus zijn we naar het strand gegaan."], ["Pendant que je dormais, quelqu'un a volé mon sac.", "Terwijl ik sliep, heeft iemand mijn tas gestolen."]] },
      { t: "Signaalwoorden en volgorde", es: "Les connecteurs du récit",
        html: `<p>Sommige woorden wijzen de weg:</p>
<p>➡️ <b>Passé composé</b> na: <i>soudain, tout à coup, à ce moment-là, un jour, hier, d'abord, puis, ensuite, enfin</i> (één moment of een reeks gebeurtenissen).</p>
<p>➡️ <b>Imparfait</b> na: <i>tous les jours, souvent, d'habitude, chaque été, pendant que, à l'époque</i> (gewoonte of iets wat aan de gang was).</p>
<p>Met <b>d'abord … puis / ensuite … enfin</b> zet je gebeurtenissen op een rij: <i><b>D'abord</b>, j'ai cherché dans mon sac. <b>Puis</b> j'ai téléphoné au restaurant. <b>Enfin</b>, j'ai appelé la police.</i></p>
<p>⚠️ <b>Let op:</b> <i>pendant <b>que</b></i> + zin = «terwijl» (imparfait). <i>Pendant</i> + tijdsduur = «gedurende» (zie hieronder).</p>`,
        table: [["woord", "tijd", "voorbeeld"], ["soudain", "passé composé", "Soudain, il a crié."], ["tous les jours", "imparfait", "Tous les jours, il criait."], ["pendant que", "imparfait", "Pendant que je mangeais…"], ["puis", "passé composé", "Puis je suis parti."]],
        ex: [["D'abord, nous avons mangé. Ensuite, nous sommes sortis.", "Eerst hebben we gegeten. Daarna zijn we uitgegaan."], ["Tout à coup, la lumière s'est éteinte.", "Ineens ging het licht uit."]] },
      { t: "Il y a, pendant, depuis", es: "Il y a, pendant, depuis",
        html: `<p>Drie kleine woorden voor tijd die Nederlandstaligen vaak door elkaar halen:</p>
<p><b>il y a</b> + tijd = <b>geleden</b>. Het staat <u>vóór</u> de tijd (in het Nederlands erachter). <i>Je suis arrivé <b>il y a</b> deux jours.</i> (twee dagen geleden) → passé composé.</p>
<p><b>pendant</b> + tijd = <b>gedurende</b>, een afgesloten periode. <i>J'ai habité à Port-au-Prince <b>pendant</b> trois ans.</i> (drie jaar lang; nu niet meer) → passé composé.</p>
<p><b>depuis</b> + tijd = <b>al / sinds</b>, het duurt nog. <i>J'habite ici <b>depuis</b> trois ans.</i> → tegenwoordige tijd (zie unit 4).</p>
<p>⚠️ <b>Let op:</b> <i>il y a</i> betekent ook «er is / er zijn». Je ziet het verschil aan wat erachter staat: <i>il y a <u>un problème</u></i> (er is een probleem) tegenover <i>il y a <u>une heure</u></i> (een uur geleden).</p>`,
        table: [["woord", "betekenis", "voorbeeld"], ["il y a", "geleden", "Il est parti il y a une heure."], ["pendant", "gedurende (klaar)", "J'ai dormi pendant dix heures."], ["depuis", "al / sinds (duurt nog)", "Je dors mal depuis lundi."]],
        ex: [["J'ai perdu mes clés il y a trois jours.", "Ik ben drie dagen geleden mijn sleutels kwijtgeraakt."], ["Nous avons attendu pendant deux heures.", "We hebben twee uur gewacht."]] }
    ],
    dialogue: {
      t: "Une nuit d'orage", place: "Port-au-Prince 🇭🇹",
      lines: [
        ["Tom", "Tu as l'air fatiguée, Nadège. Qu'est-ce qui s'est passé ?", "Je ziet er moe uit, Nadège. Wat is er gebeurd?"],
        ["Nadège", "Oh, quelle nuit ! Hier soir, j'étais seule à la maison et je regardais un film.", "O, wat een nacht! Gisteravond was ik alleen thuis en ik keek een film."],
        ["Tom", "Et alors ?", "En toen?"],
        ["Nadège", "Il pleuvait très fort. Tout à coup, il y a eu une panne d'électricité.", "Het regende heel hard. Ineens viel de stroom uit."],
        ["Tom", "Tu as eu peur ?", "Schrok je?"],
        ["Nadège", "Un peu. D'abord, j'ai cherché une bougie. Puis j'ai entendu un bruit dans la cuisine.", "Een beetje. Eerst heb ik een kaars gezocht. Toen hoorde ik een geluid in de keuken."],
        ["Tom", "Un voleur ?", "Een dief?"],
        ["Nadège", "C'est ce que je pensais ! J'ai crié et j'ai couru chez la voisine.", "Dat dacht ik! Ik heb geschreeuwd en ben naar de buurvrouw gerend."],
        ["Tom", "Et c'était quoi, finalement ?", "En wat was het uiteindelijk?"],
        ["Nadège", "Le chat de la voisine ! Il était entré par la fenêtre parce qu'il avait peur de l'orage.", "De kat van de buurvrouw! Hij was door het raam binnengekomen omdat hij bang was voor het onweer."],
        ["Tom", "Quelle histoire ! Heureusement, ce n'était pas un voleur.", "Wat een verhaal! Gelukkig was het geen dief."]
      ],
      q: [
        { t: "mc", q: "Que faisait Nadège hier soir ?", o: ["Elle regardait un film", "Elle dormait", "Elle cuisinait"] },
        { t: "mc", q: "Qu'est-ce qui s'est passé tout à coup ?", o: ["Il y a eu une panne d'électricité", "Un voleur est entré", "Le téléphone a sonné"] },
        { t: "mc", q: "D'où venait le bruit ?", o: ["Du chat de la voisine", "D'un voleur", "De la télévision"] }
      ]
    },
    culture: { t: "Haïti: verhalen vertellen met «Krik? Krak!»", html: `<p><b>Haïti</b> was in 1804 de eerste onafhankelijke zwarte republiek ter wereld, na een opstand van tot slaaf gemaakte mensen tegen Frankrijk. Het land heeft twee officiële talen: <b>Frans</b> en <b>Haïtiaans Creools</b> (<i>kreyòl</i>), dat iedereen spreekt.</p>
<p>Verhalen vertellen is er een kunst. Een verteller roept <b>«Krik ?»</b> en het publiek antwoordt <b>«Krak !»</b>: dat betekent «wij luisteren». Daarna begint het verhaal, vaak over de slimme <i>Ti Malice</i> en de domme <i>Bouki</i>.</p>
<p>⚡ In het regenseizoen zijn zware onweersbuien en stroomstoringen (<i>pannes d'électricité</i>, in Haïti ook <i>blackout</i>) heel gewoon; veel huizen hebben kaarsen of een generator klaarstaan.</p>` },
    ex: [
      { t: "cloze", s: "Il ___ nuit et il pleuvait.", a: ["faisait"], o: ["faisait", "a fait", "fait"], nl: "Het was nacht en het regende.", x: "Decor (hoe het was): imparfait.", tag: "fr-pc-imp" },
      { t: "cloze", s: "Soudain, j'___ un bruit.", a: ["ai entendu"], o: ["ai entendu", "entendais", "entends"], nl: "Plotseling hoorde ik een geluid.", x: "Soudain + plotselinge gebeurtenis: passé composé.", tag: "fr-pc-imp" },
      { t: "cloze", s: "Je dormais quand le téléphone ___.", a: ["a sonné"], o: ["a sonné", "sonnait", "sonne"], nl: "Ik sliep toen de telefoon ging.", x: "Slapen was aan de gang (imparfait); het rinkelen gebeurde (passé composé).", tag: "fr-pc-imp" },
      { t: "cloze", s: "Pendant que je ___, quelqu'un a volé mon sac.", a: ["mangeais"], o: ["mangeais", "ai mangé", "mange"], nl: "Terwijl ik at, heeft iemand mijn tas gestolen.", x: "Pendant que = terwijl: imparfait.", tag: "fr-pc-imp" },
      { t: "cloze", s: "Tous les étés, nous ___ à la mer.", a: ["allions"], o: ["allions", "sommes allés", "irons"], nl: "Elke zomer gingen we naar zee.", x: "Gewoonte: imparfait.", tag: "fr-pc-imp" },
      { t: "cloze", s: "D'abord, j'ai cherché une bougie. ___ j'ai entendu un bruit.", a: ["Puis"], o: ["Puis", "Pendant", "Depuis"], nl: "Eerst zocht ik een kaars. Toen hoorde ik een geluid.", tag: "fr-conn" },
      { t: "cloze", s: "Je suis arrivé ___ deux jours.", a: ["il y a"], o: ["il y a", "depuis", "pendant"], nl: "Ik ben twee dagen geleden aangekomen.", x: "Il y a + tijd = geleden (staat vóór de tijd).", tag: "fr-conn" },
      { t: "cloze", s: "Nous avons attendu ___ deux heures.", a: ["pendant"], o: ["pendant", "depuis", "il y a"], nl: "We hebben twee uur gewacht.", x: "Afgesloten periode: pendant.", tag: "fr-conn" },
      { t: "mc", q: "Welke tijd gebruik je voor het decor van een verhaal?", o: ["imparfait", "passé composé", "futur simple"], tag: "fr-pc-imp" },
      { t: "mc", q: "Wat betekent «J'ai eu peur»?", o: ["Ik schrok.", "Ik was altijd bang.", "Ik ben bang."], x: "Avoir in de passé composé = een plotselinge verandering.", tag: "fr-pc-imp" },
      { t: "mc", q: "Hoe zeg je «drie jaar geleden»?", o: ["il y a trois ans", "trois ans il y a", "depuis trois ans"], x: "Anders dan in het Nederlands staat il y a vóór de tijd.", tag: "fr-conn" },
      { t: "tr", nl: "Wat is er gebeurd?", a: ["Qu'est-ce qui s'est passé ?"], tag: "fr-voc" },
      { t: "tr", nl: "Het regende en ik was moe.", a: ["Il pleuvait et j'étais fatigué.", "Il pleuvait et j'étais fatiguée."], tag: "fr-pc-imp" },
      { t: "tr", nl: "Plotseling ging de telefoon.", a: ["Soudain, le téléphone a sonné.", "Soudain le téléphone a sonné.", "Tout à coup, le téléphone a sonné.", "Tout à coup le téléphone a sonné."], tag: "fr-pc-imp" },
      { t: "tr", nl: "Gelukkig was het geen dief.", a: ["Heureusement, ce n'était pas un voleur.", "Heureusement ce n'était pas un voleur."], tag: "fr-pc-imp" },
      { t: "order", s: "Je regardais un film quand tu as appelé.", nl: "Ik keek een film toen je belde.", tag: "fr-ordre" },
      { t: "match", p: [["d'abord", "eerst"], ["puis", "daarna"], ["enfin", "ten slotte"], ["soudain", "plotseling"], ["pendant que", "terwijl"]], tag: "fr-conn" }
    ],
    reading: {
      t: "Mon portefeuille", type: "Verhaal op sociale media",
      p: [
        ["Il y a une semaine, j'étais au marché de Pétion-Ville. Il faisait chaud et il y avait beaucoup de monde. Je cherchais des mangues pour ma mère.", "Een week geleden was ik op de markt van Pétion-Ville. Het was warm en er waren veel mensen. Ik zocht mango's voor mijn moeder."],
        ["J'ai choisi six mangues et j'ai voulu payer. Mais mon portefeuille n'était plus dans mon sac ! D'abord, j'ai cherché partout. Puis j'ai demandé à la vendeuse, mais elle n'avait rien vu. J'étais vraiment triste.", "Ik koos zes mango's en wilde betalen. Maar mijn portemonnee zat niet meer in mijn tas! Eerst zocht ik overal. Toen vroeg ik het de verkoopster, maar zij had niets gezien. Ik was echt verdrietig."],
        ["Tout à coup, un petit garçon est arrivé. Il courait et il criait : « Madame, madame ! » Il tenait mon portefeuille dans la main. Je lui ai donné un grand merci et deux mangues. J'ai eu de la chance !", "Ineens kwam er een jongetje aan. Hij rende en riep: 'Mevrouw, mevrouw!' Hij hield mijn portemonnee in zijn hand. Ik heb hem hartelijk bedankt en hem twee mango's gegeven. Ik heb geluk gehad!"]
      ],
      gl: [["beaucoup de monde", "veel mensen"], ["la mangue", "de mango"], ["ne … plus", "niet meer"], ["triste", "verdrietig"], ["tenir", "vasthouden"]],
      q: [
        { t: "mc", q: "Que cherchait-elle au marché ?", o: ["Des mangues", "Son portefeuille", "Sa mère"] },
        { t: "mc", q: "Quel était le problème ?", o: ["Son portefeuille n'était plus dans son sac", "Les mangues étaient trop chères", "Il pleuvait"] },
        { t: "mc", q: "Qui a trouvé le portefeuille ?", o: ["Un petit garçon", "La vendeuse", "La police"] }
      ]
    },
    say: [["Qu'est-ce qui s'est passé ?", "Wat is er gebeurd?"], ["Il pleuvait et j'étais seul.", "Het regende en ik was alleen."], ["Soudain, j'ai entendu un bruit.", "Plotseling hoorde ik een geluid."], ["J'ai eu de la chance !", "Ik heb geluk gehad!"]],
    task: { nl: "Vertel in 5 zinnen iets wat je is overkomen: eerst het decor (imparfait), dan wat er gebeurde (passé composé).", model: "Il y a deux ans, j'étais en vacances à Nice. Il faisait très chaud et je me promenais sur la plage. Tout à coup, un chien a pris mon sandwich ! D'abord, j'ai crié, puis j'ai ri. Enfin, j'ai acheté un autre sandwich." },
    scenario: { nl: "Een Haïtiaanse vriendin ziet dat je moe bent en wil weten wat er vannacht gebeurd is.", role: "You are Nadège, a lively friend from Port-au-Prince, Haiti, who loves stories. Ask the learner what happened to them last night or last week, react with short exclamations (Et alors ? Quelle histoire !), ask what the weather was like, how they felt and how it ended. Then tell a very short story of your own with a storm and a power cut. Use tu and simple French with imparfait and passé composé.", goal: "Vertel een kort verhaal met decor en gebeurtenissen, en gebruik d'abord, puis en enfin." }
  });

  /* ───────────────────────── A2 · 10 ───────────────────────── */
  U({
    id: "fr-a2-10", level: "A2", icon: "🧭", title: "Les gens et les lieux", nl: "Mensen en plekken beschrijven",
    goals: ["Mensen en plaatsen nauwkeuriger beschrijven", "Zinnen verbinden met qui, que en où", "Zeggen wat je net gedaan hebt met venir de", "Zeggen waar je mee bezig bent met être en train de"],
    vocab: [
      ["la personne", "de persoon"], ["les gens", "de mensen"], ["l'endroit", "de plek"], ["le lieu", "de plaats"], ["le souk", "de soek (overdekte markt)"], ["la mosquée", "de moskee"],
      ["la place", "het plein"], ["la ruelle", "het steegje"], ["l'artisan", "de ambachtsman"], ["le tapis", "het tapijt"], ["les épices", "de specerijen"], ["le thé à la menthe", "de muntthee"],
      ["accueillant / accueillante", "gastvrij"], ["généreux / généreuse", "gul"], ["drôle", "grappig"], ["sérieux / sérieuse", "serieus"], ["bavard / bavarde", "spraakzaam"], ["curieux / curieuse", "nieuwsgierig"],
      ["connaître", "kennen"], ["ressembler à", "lijken op"], ["décrire", "beschrijven"], ["montrer", "laten zien"], ["se trouver", "zich bevinden"], ["négocier", "onderhandelen / afdingen"],
      ["celui qui / celle qui", "degene die"], ["quelqu'un", "iemand"], ["quelque part", "ergens"], ["je viens de", "ik heb net"], ["en train de", "bezig met"], ["tout près", "vlakbij"]
    ],
    grammar: [
      { t: "Qui en que: die, dat", es: "Les pronoms relatifs qui et que",
        html: `<p>Met <b>qui</b> en <b>que</b> plak je twee zinnen aan elkaar. In het Nederlands zeg je in beide gevallen «die» of «dat», in het Frans moet je kiezen. De keuze hangt <b>niet</b> af van persoon of ding, maar van de <b>functie</b> in de bijzin:</p>
<p><b>qui</b> = <b>onderwerp</b> van de bijzin. Er volgt direct een <b>werkwoord</b>. <i>L'homme <b>qui</b> <u>parle</u> est mon voisin.</i> (De man die praat…)</p>
<p><b>que</b> = <b>lijdend voorwerp</b>. Er volgt eerst een <b>ander onderwerp</b>. <i>L'homme <b>que</b> <u>tu</u> vois est mon voisin.</i> (De man die jij ziet…)</p>
<p>Snelle test: komt er meteen een werkwoord → <b>qui</b>. Komt er eerst een persoon of naam (je, tu, Marie, mon frère) → <b>que</b>.</p>
<p>⚠️ <b>Let op:</b> <i>que</i> wordt <b>qu'</b> voor een klinker (<i>le tapis <b>qu'</b>il achète</i>), maar <i>qui</i> wordt <b>nooit</b> ingekort: <i>la femme <b>qui</b> arrive</i>. Waarom? Anders zou je qui en que niet meer uit elkaar kunnen houden.</p>
<p>⚠️ <b>Anders dan in het Engels en soms het Nederlands:</b> je mag <i>que</i> nooit weglaten.</p>`,
        table: [["", "functie", "voorbeeld"], ["qui", "onderwerp (+ werkwoord)", "C'est un ami qui habite à Fès."], ["que", "lijdend voorwerp (+ onderwerp)", "C'est un ami que je connais bien."], ["qu'", "que voor klinker", "C'est le thé qu'elle préfère."]],
        ex: [["J'ai une amie qui parle arabe et français.", "Ik heb een vriendin die Arabisch en Frans spreekt."], ["Le tapis que j'ai acheté est magnifique.", "Het tapijt dat ik gekocht heb, is prachtig."]] },
      { t: "Où: waar, waarin, waarop", es: "Le pronom relatif où",
        html: `<p><b>Où</b> verbindt een zin met een <b>plaats</b>: <i>C'est le café <b>où</b> je travaille.</i> (Het café waar ik werk.) <i>La ville <b>où</b> je suis né.</i></p>
<p>⚠️ <b>Let op, anders dan in het Nederlands:</b> <i>où</i> gebruik je ook voor een <b>tijd</b>. Wij zeggen «de dag <u>dat</u> / <u>waarop</u>», het Frans zegt <i>le jour <b>où</b></i>: <i>Le jour <b>où</b> je suis arrivé, il pleuvait.</i> Niet <s>le jour que</s>.</p>
<p>Vergelijk: <i>la ville <b>que</b> je visite</i> (ik bezoek de stad: lijdend voorwerp) tegenover <i>la ville <b>où</b> j'habite</i> (ik woon <u>in</u> de stad: plaats).</p>`,
        table: [["", "voorbeeld", "vertaling"], ["plaats", "le souk où j'achète les épices", "de soek waar ik de specerijen koop"], ["plaats", "le pays où il est né", "het land waar hij geboren is"], ["tijd", "le jour où nous sommes partis", "de dag dat we vertrokken"], ["tijd", "l'année où j'ai eu mon diplôme", "het jaar dat ik mijn diploma haalde"]],
        ex: [["Voici le restaurant où nous avons mangé hier.", "Dit is het restaurant waar we gisteren gegeten hebben."], ["C'est le moment où tout a changé.", "Dat is het moment waarop alles veranderde."]] },
      { t: "Venir de en être en train de", es: "Le passé récent et le présent progressif",
        html: `<p>Twee handige constructies rond het «nu»:</p>
<p><b>venir de + infinitief</b> = iets <b>net</b> gedaan hebben. <i>Je <b>viens de</b> manger.</i> (Ik heb net gegeten.) Je vervoegt <i>venir</i> in de tegenwoordige tijd: <i>je viens, tu viens, il vient, nous venons, vous venez, ils viennent</i>.</p>
<p><b>Let op:</b> het Nederlands gebruikt hier een verleden tijd + «net». Het Frans gebruikt de <b>tegenwoordige tijd</b> van venir, letterlijk «ik kom van eten». Het woordje <i>juste</i> is niet nodig.</p>
<p><b>être en train de + infinitief</b> = <b>bezig zijn</b> met iets, op dit moment. <i>Je <b>suis en train de</b> lire.</i> (Ik ben aan het lezen.) Het Frans heeft geen aparte vorm zoals het Engelse <i>-ing</i>; meestal volstaat de gewone tegenwoordige tijd (<i>je lis</i>). Je gebruikt <i>en train de</i> alleen als je wilt benadrukken dat het nú bezig is.</p>
<p>⚠️ <b>Valse vriend:</b> <i>en train</i> heeft niets met een trein te maken. <i>Train</i> betekent hier «gang, vaart».</p>
<p>Samen met de futur proche heb je nu drie tijden rond het heden: <i>Je <b>viens de</b> commencer</i> (net) · <i>Je <b>suis en train de</b> travailler</i> (nu) · <i>Je <b>vais</b> finir</i> (zo meteen).</p>`,
        table: [["constructie", "voorbeeld", "vertaling"], ["venir de", "Il vient d'arriver.", "Hij is net aangekomen."], ["être en train de", "Il est en train de négocier.", "Hij is aan het afdingen."], ["aller", "Il va payer.", "Hij gaat betalen."]],
        ex: [["Nous venons de visiter la médina.", "We hebben net de medina bezocht."], ["Ne me dérange pas, je suis en train de travailler.", "Stoor me niet, ik ben aan het werk."]] }
    ],
    dialogue: {
      t: "Dans la médina", place: "Fès 🇲🇦",
      lines: [
        ["Youssef", "Voilà, c'est la médina de Fès. C'est l'endroit que je préfère au monde.", "Kijk, dit is de medina van Fès. Het is de plek waar ik het meest van houd."],
        ["Sanne", "C'est magnifique ! Et l'homme qui nous regarde, là-bas, c'est qui ?", "Het is prachtig! En de man die naar ons kijkt, daarginds, wie is dat?"],
        ["Youssef", "C'est mon oncle Driss. C'est lui qui vend les plus beaux tapis du souk.", "Dat is mijn oom Driss. Hij is degene die de mooiste tapijten van de soek verkoopt."],
        ["Sanne", "Qu'est-ce qu'il est en train de faire ?", "Wat is hij aan het doen?"],
        ["Youssef", "Il est en train de négocier avec un client. Regarde, c'est la boutique où j'ai grandi !", "Hij is aan het onderhandelen met een klant. Kijk, dat is het winkeltje waar ik opgegroeid ben!"],
        ["Sanne", "Et ce tapis rouge que je vois dans la vitrine, il coûte combien ?", "En dat rode tapijt dat ik in de etalage zie, hoeveel kost dat?"],
        ["Youssef", "Ah, celui-là, il vient de le vendre. Mais il y en a d'autres.", "Ah, dat heeft hij net verkocht. Maar er zijn er nog andere."],
        ["Driss", "Bienvenue ! Vous êtes l'amie que Youssef a rencontrée à Paris ?", "Welkom! U bent de vriendin die Youssef in Parijs ontmoet heeft?"],
        ["Sanne", "Oui, c'est moi. Je viens d'arriver au Maroc.", "Ja, dat ben ik. Ik ben net in Marokko aangekomen."],
        ["Driss", "Alors asseyez-vous ! Ma femme est en train de préparer le thé à la menthe.", "Ga dan zitten! Mijn vrouw is muntthee aan het zetten."]
      ],
      q: [
        { t: "mc", q: "Qui est l'homme qui les regarde ?", o: ["L'oncle de Youssef", "Un client", "Le père de Sanne"] },
        { t: "mc", q: "Qu'est-ce que Driss est en train de faire ?", o: ["Il négocie avec un client", "Il prépare le thé", "Il visite la médina"] },
        { t: "mc", q: "Pourquoi Sanne ne peut-elle pas acheter le tapis rouge ?", o: ["Driss vient de le vendre", "Il est trop cher", "Il n'est pas à vendre"] }
      ]
    },
    culture: { t: "Fès: de grootste medina en de kunst van het afdingen", html: `<p>De <b>medina van Fès</b> in Marokko is een van de grootste autovrije stadscentra ter wereld: meer dan 9000 steegjes, waar ezels en handkarren het vervoer doen. Hier staat ook de <b>Al Quaraouiyine</b>, vaak genoemd als de oudste nog bestaande universiteit ter wereld (gesticht in 859).</p>
<p>In de <b>souk</b> hoort <b>afdingen</b> (<i>négocier</i>, <i>marchander</i>) erbij: het is een gesprek, geen ruzie. Je begint met een begroeting, vraagt de prijs, biedt lager en komt ergens in het midden uit. Lachen helpt.</p>
<p>🍵 <b>Thé à la menthe</b> wordt van hoog ingeschonken zodat er schuim op komt. Een glas weigeren is onbeleefd; het is een teken van gastvrijheid.</p>
<p>In Marokko spreken mensen thuis <b>Darija</b> (Marokkaans Arabisch) of <b>Amazigh</b>; Frans is de taal van handel, hoger onderwijs en toerisme. Je hoort vaak een mix in één zin.</p>` },
    ex: [
      { t: "cloze", s: "C'est un ami ___ habite à Fès.", a: ["qui"], o: ["qui", "que", "où"], nl: "Het is een vriend die in Fès woont.", x: "Er volgt direct een werkwoord: qui (onderwerp).", tag: "fr-rel" },
      { t: "cloze", s: "C'est un ami ___ je connais bien.", a: ["que"], o: ["que", "qui", "où"], nl: "Het is een vriend die ik goed ken.", x: "Er volgt eerst een onderwerp (je): que.", tag: "fr-rel" },
      { t: "cloze", s: "Le tapis ___ il vend est très beau.", a: ["qu'"], o: ["qu'", "qui", "que"], nl: "Het tapijt dat hij verkoopt, is heel mooi.", x: "Que wordt qu' voor een klinker.", tag: "fr-rel" },
      { t: "cloze", s: "C'est la boutique ___ j'ai grandi.", a: ["où"], o: ["où", "que", "qui"], nl: "Dat is het winkeltje waar ik opgegroeid ben.", tag: "fr-rel" },
      { t: "cloze", s: "Le jour ___ je suis arrivé, il pleuvait.", a: ["où"], o: ["où", "que", "quand"], nl: "De dag dat ik aankwam, regende het.", x: "Anders dan in het Nederlands: ook bij tijd gebruik je où.", tag: "fr-rel" },
      { t: "cloze", s: "La femme ___ arrive est ma tante.", a: ["qui"], o: ["qui", "qu'", "que"], nl: "De vrouw die eraan komt, is mijn tante.", x: "Let op: qui wordt nooit ingekort, ook niet voor een klinker.", tag: "fr-rel" },
      { t: "cloze", s: "Je ___ de manger.", a: ["viens"], o: ["viens", "vais", "suis"], nl: "Ik heb net gegeten.", tag: "fr-recent" },
      { t: "cloze", s: "Elle est en ___ de préparer le thé.", a: ["train"], o: ["train", "cours", "temps"], nl: "Ze is thee aan het zetten.", tag: "fr-recent" },
      { t: "mc", q: "Wat betekent «Il vient d'arriver»?", o: ["Hij is net aangekomen.", "Hij komt eraan.", "Hij gaat aankomen."], tag: "fr-recent" },
      { t: "mc", q: "Hoe kies je tussen qui en que?", o: ["qui = onderwerp, que = lijdend voorwerp", "qui = persoon, que = ding", "qui = enkelvoud, que = meervoud"], x: "Het hangt af van de functie in de bijzin, niet van persoon of ding.", tag: "fr-rel" },
      { t: "mc", q: "Welke zin is goed?", o: ["Le film que j'ai vu est super.", "Le film j'ai vu est super.", "Le film qui j'ai vu est super."], x: "Que mag je nooit weglaten; en vóór een onderwerp (je) is het que.", tag: "fr-rel" },
      { t: "tr", nl: "Ik ben net aangekomen.", a: ["Je viens d'arriver."], tag: "fr-recent" },
      { t: "tr", nl: "Ik ben aan het werk.", a: ["Je suis en train de travailler.", "Je travaille."], tag: "fr-recent" },
      { t: "tr", nl: "Dat is de stad waar ik woon.", a: ["C'est la ville où j'habite."], tag: "fr-rel" },
      { t: "tr", nl: "Het boek dat ik lees, is grappig.", a: ["Le livre que je lis est drôle."], tag: "fr-rel" },
      { t: "order", s: "C'est l'endroit que je préfère au monde.", nl: "Het is de plek waar ik het meest van houd.", tag: "fr-ordre" },
      { t: "match", p: [["accueillant", "gastvrij"], ["drôle", "grappig"], ["bavard", "spraakzaam"], ["curieux", "nieuwsgierig"], ["généreux", "gul"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Une journée à Fès", type: "Reisblog",
      p: [
        ["Nous venons de passer trois jours à Fès, une ville que je voulais visiter depuis longtemps. La médina est un endroit où on se perd facilement : il y a des milliers de ruelles qui se ressemblent.", "We hebben net drie dagen in Fès doorgebracht, een stad die ik al lang wilde bezoeken. De medina is een plek waar je makkelijk verdwaalt: er zijn duizenden steegjes die op elkaar lijken."],
        ["Notre guide, Youssef, est un jeune homme drôle et bavard qui connaît tout le monde. Il nous a montré la boutique où son oncle vend des tapis, et le petit restaurant où sa tante prépare le meilleur couscous de la ville.", "Onze gids, Youssef, is een grappige en spraakzame jongeman die iedereen kent. Hij liet ons het winkeltje zien waar zijn oom tapijten verkoopt, en het restaurantje waar zijn tante de beste couscous van de stad maakt."],
        ["En ce moment, je suis en train d'écrire sur une terrasse. Le thé à la menthe qu'on vient de me servir est très sucré, mais délicieux. Le jour où nous partirons, je serai triste !", "Op dit moment zit ik op een terras te schrijven. De muntthee die ze me net geserveerd hebben, is erg zoet, maar heerlijk. De dag dat we vertrekken, zal ik verdrietig zijn!"]
      ],
      gl: [["depuis longtemps", "al lang"], ["facilement", "makkelijk"], ["des milliers de", "duizenden"], ["le guide", "de gids"], ["sucré", "zoet"]],
      q: [
        { t: "mc", q: "Pourquoi se perd-on facilement dans la médina ?", o: ["Les ruelles se ressemblent", "Il n'y a pas de guide", "Il fait nuit"] },
        { t: "mc", q: "Comment est Youssef ?", o: ["Drôle et bavard", "Sérieux et timide", "Vieux et calme"] },
        { t: "mc", q: "Que fait l'auteur en ce moment ?", o: ["Il écrit sur une terrasse", "Il négocie un tapis", "Il mange un couscous"] }
      ]
    },
    say: [["C'est l'endroit que je préfère.", "Het is de plek waar ik het meest van houd."], ["J'ai un ami qui habite au Maroc.", "Ik heb een vriend die in Marokko woont."], ["Je viens d'arriver.", "Ik ben net aangekomen."], ["Je suis en train de travailler.", "Ik ben aan het werk."]],
    task: { nl: "Beschrijf in 4 of 5 zinnen een persoon en een plek die belangrijk voor je zijn. Gebruik qui, que en où.", model: "Ma meilleure amie est une femme drôle qui adore voyager. C'est quelqu'un que je connais depuis l'école primaire. L'endroit que je préfère, c'est le petit café où nous prenons un thé chaque samedi. Je viens de lui téléphoner : elle est en train de préparer nos vacances !" },
    scenario: { nl: "Een Marokkaanse vriend laat je de medina van Fès zien en stelt je voor aan zijn familie.", role: "You are Youssef, a talkative young guide from Fès, Morocco. Walk the learner through the medina: point out people and places using qui, que and où (the man who sells spices, the shop where you grew up, the tea your aunt makes). Ask the learner to describe their own favourite place and a person who matters to them, and ask what they have just done today. Use tu and simple French.", goal: "Beschrijf een persoon en een plek met qui, que of où, en zeg wat je net gedaan hebt." }
  });
})(window.SPT);
