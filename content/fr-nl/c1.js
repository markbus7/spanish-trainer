/* Frans voor Nederlandstaligen — niveau C1, units 1–5 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-soutenu': 'verzorgd en formeel Frans (registre soutenu)', 'fr-inversion': 'inversie na peut-être, ainsi, aussi, à peine', 'fr-modal': 'voorzichtig formuleren (il semblerait que, devoir, pouvoir)',
    'fr-faux-amis': 'valse vrienden', 'fr-passif2': 'passief met se voir, se faire, se laisser', 'fr-style-nominal': 'naamwoordstijl in formele teksten',
    'fr-subj-imp': 'subjonctif imparfait herkennen', 'fr-passe-ant': 'passé antérieur herkennen', 'fr-tout': 'tout, même en tel: wanneer passen ze zich aan?', 'fr-quelque': 'quelque, quel que, quoique, quoi que'
  });

  /* ───────────────────────── C1 · 1 ───────────────────────── */
  U({
    id: "fr-c1-01", level: "C1", icon: "🎚️", title: "Peut-être faudrait-il…", nl: "Drie registers: van straat tot toespraak",
    goals: ["Familier, courant en soutenu van elkaar onderscheiden", "Hetzelfde zeggen in drie registers", "Inversie herkennen en gebruiken na peut-être, ainsi, aussi, à peine", "Het juiste register kiezen voor de situatie"],
    vocab: [
      ["le registre", "het register / de stijllaag"], ["soutenu / soutenue", "verzorgd, formeel"], ["courant / courante", "gewoon, neutraal"], ["familier / familière", "informeel"], ["s'exprimer", "zich uitdrukken"], ["la tournure", "de zinswending"],
      ["néanmoins", "niettemin"], ["en outre", "bovendien"], ["certes", "weliswaar"], ["ainsi", "zo / aldus"], ["à peine", "nauwelijks"], ["sans doute", "waarschijnlijk"],
      ["demeurer", "blijven / wonen (formeel)"], ["se rendre à", "zich begeven naar"], ["souhaiter", "wensen"], ["solliciter", "verzoeken om"], ["s'entretenir avec", "een gesprek hebben met"], ["convier", "uitnodigen (formeel)"],
      ["l'allocution", "de toespraak"], ["le discours", "de rede"], ["l'auditoire", "het gehoor / publiek"], ["l'élocution", "de dictie"], ["la bagnole", "de auto (informeel)"], ["le bouquin", "het boek (informeel)"],
      ["se casser", "weggaan (informeel)"], ["se tromper", "zich vergissen"], ["avoir tort", "ongelijk hebben"], ["il convient de", "het is gepast om"]
    ],
    grammar: [
      { t: "Familier, courant, soutenu", es: "Les trois registres",
        html: `<p>Op B1 leerde je het verschil tussen spreektaal en schooltaal. Op C1 moet je er <b>drie</b> beheersen en er bewust tussen wisselen. Het Frans is hierin strenger dan het Nederlands: een verkeerd register valt meteen op.</p>
<p><b>Familier</b> (vrienden, familie): <i>ne</i> valt weg, <i>on</i> voor <i>nous</i>, vragen met toon, eigen woorden. <i>T'as vu le bouquin que j'ai acheté ?</i><br><b>Courant</b> (werk, winkel, krant): volledige vormen, <i>est-ce que</i>, neutrale woorden. <i>Est-ce que tu as vu le livre que j'ai acheté ?</i><br><b>Soutenu</b> (toespraak, literatuur, officiële brief): inversie, <i>nous</i>, zeldzamere woorden, passé simple, subjonctif op alle plekken. <i>Avez-vous vu l'ouvrage dont j'ai fait l'acquisition ?</i></p>
<p><b>Kenmerken van het soutenu:</b></p>
<p>1️⃣ <b>Inversie</b> in vragen, ook met een zelfstandig naamwoord als onderwerp: <i>Votre frère <b>viendra-t-il</b> ?</i> (het zelfstandig naamwoord blijft staan, het voornaamwoord komt erbij).<br>2️⃣ <b>Ne zonder pas</b> bij <i>pouvoir, savoir, oser, cesser</i>: <i>Je <b>ne saurais</b> vous dire.</i> (Ik zou het u niet kunnen zeggen.) · <i>Il <b>ne cesse</b> de pleuvoir.</i><br>3️⃣ <b>Preciezere werkwoorden</b> in plaats van <i>faire, dire, avoir, il y a</i>: <i>effectuer, déclarer, posséder, il existe</i>.<br>4️⃣ <b>Nous</b> en volledige ontkenning, nooit <i>on</i> voor «wij».</p>
<p>⚠️ <b>Let op, de uitzondering <i>je ne saurais</i>:</b> dit is de conditionnel van <i>savoir</i>, maar het betekent hier <b>«ik kan niet»</b>, niet «ik zou niet weten». Waarom? In het oude Frans betekende <i>savoir</i> ook «kunnen» (zoals nog in <i>savoir nager</i>); deze beleefde wending heeft dat bewaard.</p>
<p>⚠️ <b>Te hoog mikken is ook een fout.</b> Een appje in het soutenu klinkt ironisch of afstandelijk. Het doel is niet «zo deftig mogelijk», maar <b>passend</b>.</p>`,
        table: [["familier", "courant", "soutenu"], ["J'sais pas.", "Je ne sais pas.", "Je l'ignore. / Je ne saurais dire."], ["On se casse ?", "On part ?", "Partons-nous ?"], ["C'est quoi, ton boulot ?", "Qu'est-ce que tu fais comme travail ?", "Quelle est votre profession ?"], ["Il a plein de fric.", "Il a beaucoup d'argent.", "Il dispose d'une fortune considérable."], ["Faut que j'y aille.", "Il faut que j'y aille.", "Il me faut prendre congé."]],
        ex: [["Je ne saurais trop vous remercier.", "Ik kan u niet genoeg bedanken."], ["Monsieur le Maire nous a conviés à une réception.", "De burgemeester heeft ons uitgenodigd voor een receptie."]] },
      { t: "Inversie na peut-être, ainsi, aussi, à peine", es: "L'inversion après certains adverbes",
        html: `<p>In verzorgd Frans keert de volgorde van onderwerp en werkwoord om als de zin <b>begint</b> met bepaalde bijwoorden. Voor Nederlanders voelt dat natuurlijk (wij doen het altijd: «Misschien <u>komt hij</u>»), maar in het Frans is het een stijlkenmerk dat maar bij een <b>korte lijst</b> hoort.</p>
<p><b>peut-être</b> (misschien): <i><b>Peut-être viendra-t-il</b> demain.</i><br><b>sans doute</b> (waarschijnlijk): <i><b>Sans doute a-t-elle</b> raison.</i><br><b>ainsi</b> (zo, aldus): <i><b>Ainsi parlait-il</b> à ses élèves.</i><br><b>aussi</b> (daarom, dus): <i>Il pleuvait ; <b>aussi sommes-nous</b> restés.</i><br><b>à peine</b> (nauwelijks): <i><b>À peine était-il</b> sorti <b>que</b> le téléphone sonna.</i><br><b>encore</b> (maar dan nog): <i><b>Encore faut-il</b> le prouver.</i><br><b>du moins / tout au plus</b>: <i><b>Du moins le croit-il.</b></i></p>
<p>⚠️ <b>Valkuil: aussi vooraan betekent niet «ook».</b> Aan het begin van een zin, met inversie, betekent <i>aussi</i> <b>«daarom»</b>. Voor «ook» zet je het midden in de zin of gebruik je <i>de plus, en outre</i>: <i>Il est <b>aussi</b> venu.</i> Waarom? <i>Aussi</i> komt van «al zo»: vooraan trekt het een conclusie uit wat voorafging.</p>
<p><b>Drie manieren om «misschien» te zeggen:</b><br><i>Il viendra <b>peut-être</b>.</i> (neutraal)<br><i><b>Peut-être qu'</b>il viendra.</i> (spreektaal, geen inversie)<br><i><b>Peut-être viendra-t-il.</b></i> (soutenu)<br>⚠️ Fout is de mengvorm <s>Peut-être il viendra</s>: vooraan moet je kiezen tussen <i>que</i> of inversie.</p>
<p>Met een zelfstandig naamwoord als onderwerp gebruik je de <b>complexe inversie</b>: <i>Peut-être <b>votre frère viendra-t-il</b>.</i></p>`,
        table: [["neutraal", "soutenu met inversie"], ["Il a peut-être oublié.", "Peut-être a-t-il oublié."], ["Elle a sans doute raison.", "Sans doute a-t-elle raison."], ["Il était à peine arrivé qu'on l'appela.", "À peine était-il arrivé qu'on l'appela."], ["Donc nous avons refusé.", "Aussi avons-nous refusé."]],
        ex: [["Peut-être faudrait-il revoir cette décision.", "Misschien zou deze beslissing herzien moeten worden."], ["La salle était pleine ; aussi a-t-on ouvert une seconde séance.", "De zaal was vol; daarom is er een tweede voorstelling ingelast."]] }
    ],
    dialogue: {
      t: "Avant le discours", place: "Bruxelles 🇧🇪",
      lines: [
        ["Camille", "Alors, Daan, prêt pour ton discours de ce soir ?", "En Daan, klaar voor je toespraak van vanavond?"],
        ["Daan", "Pas vraiment. J'ai écrit : « Salut tout le monde, on est super contents que vous soyez là. »", "Niet echt. Ik heb geschreven: 'Hoi allemaal, we zijn superblij dat jullie er zijn.'"],
        ["Camille", "Devant l'ambassadeur ? C'est un peu familier, non ?", "Voor de ambassadeur? Dat is een beetje informeel, toch?"],
        ["Daan", "C'est ce que je craignais. Comment dirais-tu ?", "Dat vreesde ik al. Hoe zou jij het zeggen?"],
        ["Camille", "« Mesdames et Messieurs, nous sommes très heureux de vous accueillir ce soir. »", "'Dames en heren, wij zijn zeer verheugd u vanavond te mogen ontvangen.'"],
        ["Daan", "D'accord. Et après : « Peut-être que vous vous demandez pourquoi on a choisi Bruxelles. »", "Oké. En daarna: 'Misschien vragen jullie je af waarom we Brussel hebben gekozen.'"],
        ["Camille", "Plus soutenu : « Peut-être vous demandez-vous pourquoi nous avons choisi Bruxelles. »", "Formeler: 'Wellicht vraagt u zich af waarom wij Brussel hebben gekozen.'"],
        ["Daan", "Avec l'inversion. Ça sonne tout de suite plus élégant.", "Met inversie. Dat klinkt meteen eleganter."],
        ["Camille", "Voilà. Mais n'en fais pas trop : si tu dis « je ne saurais trop vous remercier » à chaque phrase, on va rire.", "Precies. Maar overdrijf niet: als je in elke zin 'ik kan u niet genoeg bedanken' zegt, gaan ze lachen."],
        ["Daan", "Compris. Soutenu, mais pas ridicule. Et au buffet, je peux dire « salut » ?", "Begrepen. Verzorgd, maar niet belachelijk. En bij het buffet, mag ik dan 'hoi' zeggen?"],
        ["Camille", "Au buffet, tu dis ce que tu veux !", "Bij het buffet zeg je wat je wilt!"]
      ],
      q: [
        { t: "mc", q: "Pourquoi la première phrase de Daan ne convient-elle pas ?", o: ["Elle est trop familière pour l'occasion", "Elle contient une faute de grammaire", "Elle est trop longue"] },
        { t: "mc", q: "Que change Camille dans la phrase avec « peut-être » ?", o: ["Elle ajoute l'inversion", "Elle supprime peut-être", "Elle ajoute « que »"] },
        { t: "mc", q: "Quel conseil Camille donne-t-elle ?", o: ["Ne pas exagérer le registre soutenu", "Parler comme au buffet", "Apprendre le discours par cœur"] }
      ]
    },
    culture: { t: "De Académie en «le bon usage»", html: `<p>Sinds 1635 waken veertig «onsterfelijken» van de <b>Académie française</b> over de taal. Hun woordenboek verschijnt zo traag (de negende editie nam bijna negentig jaar) dat Fransen er zelf grappen over maken. Maar het idee erachter leeft sterk: dat er zoiets bestaat als <b>le bon usage</b>, het goede gebruik.</p>
<p>De echte autoriteit in de praktijk is een <b>Belg</b>: Maurice Grevisse, wiens grammatica <i>Le Bon Usage</i> (1936) op het bureau van elke redacteur ligt. In Brussel zetelt ook veel van de Europese vertaalwereld, wat de stad tot een hoofdstad van het verzorgde Frans maakt.</p>
<p>Fransen beoordelen elkaar op taal. Een politicus die goed spreekt, krijgt het compliment <i>il s'exprime bien</i>; een dictee op televisie (<i>la dictée de Pivot</i>) trok jarenlang miljoenen kijkers.</p>` },
    ex: [
      { t: "cloze", s: "Peut-être ___ demain. (venir, il, soutenu)", a: ["viendra-t-il"], o: ["viendra-t-il", "il viendra", "qu'il viendra-t-il"], nl: "Misschien komt hij morgen.", x: "Peut-être vooraan in het soutenu: inversie, met -t- tussen twee klinkers.", tag: "fr-inversion" },
      { t: "cloze", s: "À peine était-il sorti ___ le téléphone sonna.", a: ["que"], o: ["que", "quand", "et"], nl: "Hij was nog maar net weg of de telefoon ging.", tag: "fr-inversion" },
      { t: "cloze", s: "Il pleuvait ; ___ sommes-nous restés à la maison.", a: ["aussi"], o: ["aussi", "ainsi", "alors"], nl: "Het regende; daarom zijn we thuisgebleven.", x: "Valkuil: aussi vooraan met inversie betekent «daarom», niet «ook».", tag: "fr-inversion" },
      { t: "cloze", s: "Je ne ___ vous dire. (ik kan het u niet zeggen)", a: ["saurais"], o: ["saurais", "sais", "saurai"], nl: "Ik zou het u niet kunnen zeggen.", x: "Uitzondering: je ne saurais = ik kan niet, zonder pas.", tag: "fr-soutenu" },
      { t: "cloze", s: "Sans doute a-t-___ raison.", a: ["elle"], o: ["elle", "la", "lui"], nl: "Waarschijnlijk heeft ze gelijk.", tag: "fr-inversion" },
      { t: "cloze", s: "Votre frère viendra-t-___ ?", a: ["il"], o: ["il", "lui", "le"], nl: "Komt uw broer?", x: "Complexe inversie: het zelfstandig naamwoord blijft staan, het voornaamwoord komt erbij.", tag: "fr-inversion" },
      { t: "mc", q: "Welke zin is soutenu?", o: ["Je l'ignore.", "J'sais pas.", "Je ne sais pas."], tag: "fr-soutenu" },
      { t: "mc", q: "Welke zin is FOUT?", o: ["Peut-être il viendra.", "Peut-être qu'il viendra.", "Peut-être viendra-t-il."], x: "Vooraan kies je: que (spreektaal) of inversie (soutenu).", tag: "fr-inversion" },
      { t: "mc", q: "Wat is het neutrale woord voor «le bouquin»?", o: ["le livre", "l'ouvrage", "le journal"], tag: "fr-soutenu" },
      { t: "tr", nl: "Wij zijn zeer verheugd u te ontvangen.", a: ["Nous sommes très heureux de vous accueillir."], tag: "fr-soutenu" },
      { t: "tr", nl: "Wat is uw beroep?", a: ["Quelle est votre profession ?"], tag: "fr-soutenu" },
      { t: "tr", nl: "Misschien heeft hij het vergeten. (soutenu)", a: ["Peut-être a-t-il oublié.", "Peut-être l'a-t-il oublié."], tag: "fr-inversion" },
      { t: "order", s: "Peut-être faudrait-il revoir cette décision.", nl: "Misschien zou deze beslissing herzien moeten worden.", tag: "fr-ordre" },
      { t: "match", p: [["le fric", "l'argent"], ["le bouquin", "le livre"], ["se casser", "partir"], ["le boulot", "le travail"], ["la bagnole", "la voiture"]], tag: "fr-soutenu" }
    ],
    reading: {
      t: "Trois façons de refuser une invitation", type: "Stijlgids",
      p: [
        ["Imaginez que vous receviez une invitation à laquelle vous ne pouvez pas répondre favorablement. À un ami, vous écrirez : « Désolé, je peux pas venir samedi, j'ai un truc. On se voit la semaine prochaine ? » Personne ne s'en offusquera.", "Stel dat u een uitnodiging ontvangt waarop u niet kunt ingaan. Aan een vriend schrijft u: 'Sorry, ik kan zaterdag niet, ik heb iets. Zien we elkaar volgende week?' Niemand zal daar aanstoot aan nemen."],
        ["À un collègue, le ton change : « Je vous remercie de votre invitation, mais je ne serai malheureusement pas disponible samedi. J'espère que nous aurons bientôt une autre occasion. » C'est le registre courant, celui qui convient à presque toutes les situations.", "Tegen een collega verandert de toon: 'Dank voor uw uitnodiging, maar ik ben zaterdag helaas niet beschikbaar. Ik hoop dat we binnenkort een andere gelegenheid hebben.' Dat is het gewone register, dat bij bijna alle situaties past."],
        ["À un ministre, enfin, vous répondrez : « Je suis très sensible à l'honneur que vous me faites. Aussi est-ce avec un vif regret que je me vois contraint de décliner votre invitation. » Peut-être trouvez-vous cela excessif ; sachez pourtant qu'en France, la forme fait partie du message.", "Aan een minister, ten slotte, antwoordt u: 'Ik ben zeer gevoelig voor de eer die u mij bewijst. Het is dan ook met grote spijt dat ik mij genoodzaakt zie uw uitnodiging af te slaan.' Misschien vindt u dat overdreven; weet echter dat in Frankrijk de vorm deel uitmaakt van de boodschap."]
      ],
      gl: [["s'offusquer", "aanstoot nemen"], ["disponible", "beschikbaar"], ["sensible à", "gevoelig voor"], ["contraint de", "genoodzaakt om"], ["décliner", "afslaan"]],
      q: [
        { t: "mc", q: "Quel registre convient à presque toutes les situations ?", o: ["Le registre courant", "Le registre familier", "Le registre soutenu"] },
        { t: "mc", q: "Dans la lettre au ministre, que signifie « aussi » ?", o: ["C'est pourquoi", "Également", "Très"] },
        { t: "mc", q: "Que veut dire la dernière phrase ?", o: ["En France, la manière de dire compte autant que le contenu", "Il faut toujours refuser poliment", "Les ministres aiment les longues lettres"] }
      ]
    },
    say: [["Peut-être faudrait-il revoir cette décision.", "Misschien zou deze beslissing herzien moeten worden."], ["Je ne saurais vous dire.", "Ik zou het u niet kunnen zeggen."], ["Nous sommes très heureux de vous accueillir.", "Wij zijn zeer verheugd u te ontvangen."], ["Sans doute avez-vous raison.", "Waarschijnlijk hebt u gelijk."]],
    task: { nl: "Schrijf dezelfde boodschap drie keer: je komt te laat op een afspraak. Eén keer aan een vriend (familier), één keer aan een collega (courant), één keer aan een directeur (soutenu, met één inversie).", model: "Familier : Salut ! J'suis à la bourre, j'arrive dans vingt minutes, désolé ! — Courant : Bonjour Claire, je suis désolé, j'aurai une vingtaine de minutes de retard. Commencez sans moi si nécessaire. — Soutenu : Madame la Directrice, je vous prie de bien vouloir excuser mon retard. Peut-être pourrions-nous reporter notre entretien d'une demi-heure ; je vous en serais très reconnaissant." },
    scenario: { nl: "Je moet vanavond een korte welkomsttoespraak houden op een receptie in Brussel. Een collega helpt je de toon goed te krijgen.", role: "You are Camille, a Belgian communications officer in Brussels helping the learner prepare a short welcome speech for a formal reception. Ask them to say their sentences, then show how to move each from familier to courant to soutenu (nous instead of on, inversion after peut-être / sans doute / aussi, more precise verbs). Praise what works and warn against overdoing it. Switch registers yourself to illustrate, and ask the learner to rephrase one informal sentence formally.", goal: "Zeg één zin eerst informeel en dan formeel, en gebruik één inversie na peut-être of sans doute." }
  });

  /* ───────────────────────── C1 · 2 ───────────────────────── */
  U({
    id: "fr-c1-02", level: "C1", icon: "🧠", title: "Il semblerait que…", nl: "Nuanceren: voorzichtig formuleren en valse vrienden",
    goals: ["Een bewering afzwakken of versterken", "Waarschijnlijkheid uitdrukken met devoir en pouvoir", "Het verschil kennen tussen il semble que en il me semble que", "Hardnekkige valse vrienden tussen Nederlands en Frans vermijden"],
    vocab: [
      ["nuancer", "nuanceren"], ["il semblerait que", "het lijkt erop dat"], ["il se peut que", "het kan zijn dat"], ["vraisemblablement", "naar alle waarschijnlijkheid"], ["apparemment", "blijkbaar"], ["à vrai dire", "eerlijk gezegd"],
      ["en quelque sorte", "in zekere zin"], ["dans une certaine mesure", "tot op zekere hoogte"], ["pour ainsi dire", "om zo te zeggen"], ["à mon sens", "naar mijn mening"], ["force est de constater que", "we moeten wel vaststellen dat"], ["il va de soi que", "het spreekt vanzelf dat"],
      ["éventuellement", "eventueel / mogelijkerwijs"], ["actuellement", "momenteel"], ["en fait", "eigenlijk / in feite"], ["finalement", "uiteindelijk"], ["sans doute", "waarschijnlijk"], ["sans aucun doute", "zonder enige twijfel"],
      ["sensible", "gevoelig"], ["raisonnable", "verstandig"], ["la librairie", "de boekwinkel"], ["assister à", "bijwonen"], ["achever", "voltooien"], ["rester", "blijven"],
      ["se reposer", "uitrusten"], ["l'hypothèse", "de hypothese"], ["supposer", "veronderstellen"], ["affirmer", "stellig beweren"]
    ],
    grammar: [
      { t: "Voorzichtig formuleren: de schaal van zekerheid", es: "La modalisation",
        html: `<p>Op C1 zeg je niet alleen wát je denkt, maar ook <b>hoe zeker</b> je ervan bent. Het Frans heeft daar een fijnmazig systeem voor, en de wijs (indicatif of subjonctif) beweegt mee met de zekerheid.</p>
<p><b>Zeker:</b> <i>Il est certain / évident que</i> + <b>indicatif</b> · <i>Il va de soi que</i> · <i>Force est de constater que</i><br><b>Waarschijnlijk:</b> <i>Il est probable que</i> + <b>indicatif</b> · <i>sans doute</i> · <i>vraisemblablement</i><br><b>Mogelijk:</b> <i>Il est possible que</i> / <i>Il se peut que</i> + <b>subjonctif</b><br><b>Twijfelachtig:</b> <i>Il est peu probable que</i> / <i>Je doute que</i> + <b>subjonctif</b></p>
<p>⚠️ <b>Uitzondering waar bijna iedereen in trapt: sans doute.</b> Letterlijk «zonder twijfel», maar het betekent tegenwoordig <b>«waarschijnlijk»</b>. Wil je echt «zonder twijfel» zeggen, dan is het <i>sans <b>aucun</b> doute</i>. Waarom? De uitdrukking is door veelvuldig beleefd gebruik afgezwakt: wie iets zegt «zonder twijfel», geeft daarmee toe dat twijfel denkbaar was.</p>
<p>⚠️ <b>Il semble que / il me semble que:</b><br><i><b>Il semble que</b> ce <b>soit</b> vrai.</i> → subjonctif (de indruk is onpersoonlijk, onzeker)<br><i><b>Il me semble que</b> c'<b>est</b> vrai.</i> → indicatif (het is mijn mening: «volgens mij»)<br>Waarom? Met <i>me</i> neem je de bewering voor je rekening; dan is het voor jou een feit.</p>
<p><b>Devoir en pouvoir als vermoeden:</b><br><i>Il <b>doit</b> être malade.</i> = Hij zal wel ziek zijn. · <i>Il <b>a dû</b> oublier.</i> = Hij zal het wel vergeten zijn.<br><i>Il <b>peut</b> y avoir une erreur.</i> = Er kan een fout in zitten. · <i>Il <b>a pu</b> se tromper.</i> = Hij kan zich vergist hebben.<br><i>Il <b>devrait</b> arriver vers midi.</i> = Als het goed is, komt hij rond twaalf uur.</p>
<p><b>Afzwakkers:</b> <i>en quelque sorte, dans une certaine mesure, pour ainsi dire, plus ou moins, à vrai dire</i>. <b>Versterkers:</b> <i>bel et bien</i> (wel degelijk), <i>à coup sûr</i>, <i>indéniablement</i>.</p>`,
        table: [["zekerheid", "uitdrukking", "wijs"], ["100%", "Il est évident qu'il a raison.", "indicatif"], ["±80%", "Il a sans doute raison.", "indicatif"], ["±50%", "Il se peut qu'il ait raison.", "subjonctif"], ["±20%", "Il est peu probable qu'il ait raison.", "subjonctif"], ["mijn indruk", "Il me semble qu'il a raison.", "indicatif"]],
        ex: [["Il semblerait que les négociations aient échoué.", "Het lijkt erop dat de onderhandelingen zijn mislukt."], ["Elle a dû rater son train.", "Ze zal haar trein wel gemist hebben."]] },
      { t: "Valse vrienden voor Nederlandstaligen", es: "Les faux amis",
        html: `<p>Het Nederlands heeft honderden Franse leenwoorden. De meeste helpen je; een paar tientallen zijn in de loop van de tijd van betekenis <b>verschoven</b> en zetten je op het verkeerde been. Deze kom je op C1 voortdurend tegen:</p>
<p><b>éventuellement</b> ≠ uiteindelijk (dat is Engels <i>eventually</i>). Het betekent <b>«eventueel, mogelijkerwijs»</b>. «Uiteindelijk» = <i>finalement</i>.<br><b>actuellement</b> ≠ eigenlijk. Het betekent <b>«momenteel»</b>. «Eigenlijk» = <i>en fait, à vrai dire</i>.<br><b>sensible</b> ≠ verstandig (Engels <i>sensible</i>). Het betekent <b>«gevoelig»</b>. «Verstandig» = <i>raisonnable, sensé</i>.<br><b>rester</b> ≠ rusten. Het betekent <b>«blijven»</b>. «Rusten» = <i>se reposer</i>.<br><b>la librairie</b> ≠ bibliotheek. Het is de <b>boekwinkel</b>. «Bibliotheek» = <i>la bibliothèque</i>.<br><b>assister à</b> ≠ assisteren. Het is <b>«bijwonen»</b>. «Helpen» = <i>aider</i>.<br><b>achever</b> ≠ bereiken (Engels <i>achieve</i>). Het is <b>«voltooien»</b>. «Bereiken» = <i>atteindre, réaliser</i>.<br><b>la monnaie</b> ≠ geld in het algemeen. Het is <b>wisselgeld / munt</b>. «Geld» = <i>l'argent</i>.<br><b>le délai</b> ≠ vertraging (Engels <i>delay</i>). Het is de <b>termijn</b>. «Vertraging» = <i>le retard</i>.<br><b>la figure</b> ≠ figuur (lichaam). Het is het <b>gezicht</b>. «Figuur» = <i>la silhouette, la ligne</i>.<br><b>blesser</b> ≠ zegenen (Engels <i>bless</i>). Het is <b>«verwonden»</b>.<br><b>le stage</b> ≠ podium. Het is de <b>stage</b>. «Podium» = <i>la scène</i>.</p>
<p>⚠️ <b>Let op solliciter:</b> het betekent «verzoeken om» (<i>solliciter un rendez-vous</i>); «solliciteren naar een baan» is <b>postuler</b>.</p>
<p>⚠️ <b>Uitzondering: dezelfde vorm, twee betekenissen.</b> Bij een paar bijvoeglijke naamwoorden hangt de betekenis af van de plaats: <i>un <b>brave</b> homme</i> is een goeiig mens, <i>un homme <b>brave</b></i> een dapper man. De <b>plaats</b> van het bijvoeglijk naamwoord verandert de betekenis; zo ook <i>un <b>ancien</b> collègue</i> (oud-collega) ↔ <i>un meuble <b>ancien</b></i> (antiek meubel), <i>ma <b>propre</b> chambre</i> (mijn eigen kamer) ↔ <i>ma chambre <b>propre</b></i> (mijn schone kamer).</p>
<p><b>Waarom gebeurt dit?</b> Leenwoorden worden op één moment geleend en leven daarna in twee talen hun eigen leven. Het Nederlandse «eventueel» is trouw gebleven aan het Frans; het Engelse <i>eventually</i> is afgedreven, en wie veel Engels spreekt, neemt die afwijking mee.</p>`,
        table: [["Frans", "betekent", "en niet"], ["éventuellement", "eventueel", "uiteindelijk (finalement)"], ["actuellement", "momenteel", "eigenlijk (en fait)"], ["sensible", "gevoelig", "verstandig (raisonnable)"], ["rester", "blijven", "rusten (se reposer)"], ["le délai", "de termijn", "de vertraging (le retard)"], ["achever", "voltooien", "bereiken (atteindre)"]],
        ex: [["Actuellement, je travaille à Lille ; je pourrais éventuellement déménager.", "Momenteel werk ik in Lille; ik zou eventueel kunnen verhuizen."], ["C'est un ancien collègue, un homme très sensible.", "Het is een oud-collega, een heel gevoelig man."]] }
    ],
    dialogue: {
      t: "Réunion d'équipe", place: "Lausanne 🇨🇭",
      lines: [
        ["Mathieu", "Bon, où en est le projet ? Sanne, vous aviez promis les chiffres pour aujourd'hui.", "Goed, hoe staat het project ervoor? Sanne, u had de cijfers voor vandaag beloofd."],
        ["Sanne", "Oui. Actuellement, nous avons soixante pour cent des réponses. Il me semble que c'est suffisant pour une première analyse.", "Ja. Momenteel hebben we zestig procent van de antwoorden. Volgens mij is dat genoeg voor een eerste analyse."],
        ["Mathieu", "Et les résultats ?", "En de resultaten?"],
        ["Sanne", "Il semblerait que les clients soient plutôt satisfaits. Mais je préfère rester prudente : l'échantillon est petit.", "Het lijkt erop dat de klanten vrij tevreden zijn. Maar ik blijf liever voorzichtig: de steekproef is klein."],
        ["Mathieu", "Vous pensez finir quand ?", "Wanneer denkt u klaar te zijn?"],
        ["Sanne", "Le délai était vendredi. Nous devrions y arriver, à moins d'un imprévu.", "De termijn was vrijdag. Als het goed is, halen we dat, tenzij er iets onverwachts gebeurt."],
        ["Mathieu", "Éventuellement, on pourrait demander de l'aide à l'équipe de Genève.", "Eventueel zouden we het team in Genève om hulp kunnen vragen."],
        ["Sanne", "Ce serait raisonnable. À vrai dire, Karim a dû tout faire seul cette semaine.", "Dat zou verstandig zijn. Eerlijk gezegd heeft Karim deze week alles alleen moeten doen."],
        ["Mathieu", "Très bien. Et le client, il assistera à la présentation ?", "Goed. En de klant, woont die de presentatie bij?"],
        ["Sanne", "Sans doute. Il n'a pas encore confirmé, mais il a dit que c'était très probable.", "Waarschijnlijk. Hij heeft nog niet bevestigd, maar hij zei dat het heel waarschijnlijk was."]
      ],
      q: [
        { t: "mc", q: "Que veut dire Sanne par « actuellement » ?", o: ["En ce moment", "En réalité", "Finalement"] },
        { t: "mc", q: "Pourquoi Sanne reste-t-elle prudente ?", o: ["Parce que l'échantillon est petit", "Parce que les clients sont mécontents", "Parce que le délai est passé"] },
        { t: "mc", q: "Le client viendra-t-il à la présentation ?", o: ["Probablement, mais ce n'est pas confirmé", "Oui, c'est certain", "Non, il a refusé"] }
      ]
    },
    culture: { t: "Zwitserse voorzichtigheid en de kunst van het understatement", html: `<p>In Franstalig Zwitserland, <b>la Suisse romande</b>, is men trots op de consensus. Vergaderingen zijn beleefder en trager dan in Parijs: men valt elkaar minder in de rede en formuleert kritiek omzichtig. Een Zwitser die zegt <i>c'est pas faux</i> (het is niet onjuist) is het soms gewoon met je eens.</p>
<p>Fransen gebruiken het understatement, <b>la litote</b>, juist als stijlmiddel: <i>ce n'est pas mal</i> betekent vaak «het is echt goed», en <i>ce n'est pas terrible</i> betekent «het is niet best» (terwijl <i>terrible</i> alleen in spreektaal ook «geweldig» kan betekenen).</p>
<p>Zwitsers Frans heeft eigen woorden: <i>septante, huitante, nonante</i> voor 70, 80, 90; <i>le natel</i> (mobiele telefoon), <i>un cornet</i> (plastic zak) en <i>ça joue ?</i> (gaat het zo? klopt het?).</p>` },
    ex: [
      { t: "cloze", s: "Il semble que ce ___ vrai.", a: ["soit"], o: ["soit", "est", "sera"], nl: "Het schijnt waar te zijn.", x: "Il semble que: onpersoonlijke indruk, subjonctif.", tag: "fr-modal" },
      { t: "cloze", s: "Il me semble que c'___ vrai.", a: ["est"], o: ["est", "soit", "serait"], nl: "Volgens mij is het waar.", x: "Uitzondering: met me is het jouw mening, dus indicatif.", tag: "fr-modal" },
      { t: "cloze", s: "Elle n'est pas là. Elle a ___ rater son train.", a: ["dû"], o: ["dû", "devoir", "doit"], nl: "Ze is er niet. Ze zal haar trein wel gemist hebben.", tag: "fr-modal" },
      { t: "cloze", s: "Il se peut qu'il ___ raison.", a: ["ait"], o: ["ait", "a", "aura"], nl: "Het kan zijn dat hij gelijk heeft.", tag: "fr-modal" },
      { t: "cloze", s: "___ , je travaille à Lille. (momenteel)", a: ["Actuellement"], o: ["Actuellement", "En fait", "Finalement"], nl: "Momenteel werk ik in Lille.", x: "Valse vriend: actuellement = momenteel, niet eigenlijk.", tag: "fr-faux-amis" },
      { t: "cloze", s: "Je voudrais me ___ un peu. (uitrusten)", a: ["reposer"], o: ["reposer", "rester", "restaurer"], nl: "Ik zou wat willen uitrusten.", x: "Valse vriend: rester = blijven.", tag: "fr-faux-amis" },
      { t: "mc", q: "Wat betekent «Il a sans doute raison»?", o: ["Hij heeft waarschijnlijk gelijk.", "Hij heeft zonder enige twijfel gelijk.", "Hij heeft geen gelijk."], x: "Uitzondering: sans doute is afgezwakt tot «waarschijnlijk».", tag: "fr-modal" },
      { t: "mc", q: "Wat betekent «éventuellement»?", o: ["eventueel, mogelijkerwijs", "uiteindelijk", "even later"], tag: "fr-faux-amis" },
      { t: "mc", q: "Wat is «un ancien collègue»?", o: ["een oud-collega", "een bejaarde collega", "een antieke collega"], x: "Vóór het woord: voormalig. Erachter: oud, antiek.", tag: "fr-faux-amis" },
      { t: "tr", nl: "Als het goed is, komt hij rond twaalf uur.", a: ["Il devrait arriver vers midi."], tag: "fr-modal" },
      { t: "tr", nl: "Dat zou verstandig zijn.", a: ["Ce serait raisonnable.", "Ce serait sensé."], tag: "fr-faux-amis" },
      { t: "tr", nl: "Eerlijk gezegd weet ik het niet.", a: ["À vrai dire, je ne sais pas.", "À vrai dire, je ne le sais pas."], tag: "fr-modal" },
      { t: "order", s: "Il semblerait que les négociations aient échoué.", nl: "Het lijkt erop dat de onderhandelingen zijn mislukt.", tag: "fr-ordre" },
      { t: "match", p: [["sensible", "gevoelig"], ["rester", "blijven"], ["le délai", "de termijn"], ["achever", "voltooien"], ["la librairie", "de boekwinkel"]], tag: "fr-faux-amis" }
    ],
    reading: {
      t: "Le chocolat rend-il intelligent ?", type: "Wetenschapsjournalistiek",
      p: [
        ["Une étude publiée il y a quelques années a fait le tour du monde : plus un pays consomme de chocolat, plus il compterait de prix Nobel. La Suisse, championne dans les deux catégories, semblait en être la preuve. Faut-il en conclure que le chocolat rend intelligent ?", "Een studie die een paar jaar geleden verscheen, ging de wereld rond: hoe meer chocolade een land eet, hoe meer Nobelprijzen het zou tellen. Zwitserland, kampioen in beide categorieën, leek daarvan het bewijs. Moeten we daaruit concluderen dat chocolade intelligent maakt?"],
        ["Il est peu probable que ce soit le cas. L'auteur lui-même reconnaissait qu'il s'agissait, dans une certaine mesure, d'une plaisanterie. Il se peut que les pays riches aient à la fois plus de chocolat et plus de laboratoires. Autrement dit, les deux phénomènes doivent avoir une cause commune.", "Het is weinig waarschijnlijk dat dat zo is. De auteur gaf zelf toe dat het tot op zekere hoogte een grap was. Het kan zijn dat rijke landen tegelijk meer chocolade en meer laboratoria hebben. Met andere woorden: de twee verschijnselen zullen wel een gemeenschappelijke oorzaak hebben."],
        ["Force est de constater, pourtant, que de nombreux journaux ont présenté ce résultat comme un fait. Il me semble que la leçon est claire : devant un chiffre surprenant, mieux vaut dire « il semblerait » que « il est prouvé ».", "We moeten echter vaststellen dat veel kranten dit resultaat als een feit hebben gepresenteerd. Volgens mij is de les duidelijk: bij een verrassend cijfer kun je beter 'het lijkt erop' zeggen dan 'het is bewezen'."]
      ],
      gl: [["consommer", "consumeren / eten"], ["la preuve", "het bewijs"], ["la plaisanterie", "de grap"], ["le phénomène", "het verschijnsel"], ["prouver", "bewijzen"]],
      q: [
        { t: "mc", q: "Que montrait l'étude ?", o: ["Un lien entre chocolat et prix Nobel", "Que les Suisses n'aiment pas le chocolat", "Que le chocolat est dangereux"] },
        { t: "mc", q: "Quelle explication l'auteur de l'article propose-t-il ?", o: ["Une cause commune : la richesse", "Le chocolat rend intelligent", "Les prix Nobel mangent trop"] },
        { t: "mc", q: "Quelle est la leçon ?", o: ["Il vaut mieux formuler prudemment", "Il faut manger plus de chocolat", "Les études sont toujours fausses"] }
      ]
    },
    say: [["Il semblerait que ce soit vrai.", "Het lijkt erop dat het waar is."], ["Il me semble que vous avez raison.", "Volgens mij hebt u gelijk."], ["Elle a dû rater son train.", "Ze zal haar trein wel gemist hebben."], ["Dans une certaine mesure, oui.", "Tot op zekere hoogte wel."]],
    task: { nl: "Schrijf 5 zinnen over een bewering die je onlangs las of hoorde. Gebruik drie niveaus van zekerheid (il est évident que, il se peut que, il est peu probable que) en vermijd één valse vriend bewust.", model: "J'ai lu que le télétravail rendrait les employés plus productifs. Il est évident que certains y gagnent du temps. Il se peut cependant que l'effet soit temporaire. Il est peu probable que ce soit vrai pour tous les métiers. Actuellement, à vrai dire, il me semble que personne ne peut l'affirmer." },
    scenario: { nl: "In een teamvergadering in Lausanne presenteer je voorlopige resultaten. Je chef wil zekerheid, jij moet eerlijk nuanceren.", role: "You are Mathieu, a demanding but fair team leader in Lausanne. The learner presents preliminary survey results. Press them: Are you sure? When will it be finished? Will the client attend? The learner should hedge appropriately (il semblerait que + subjonctif, il me semble que + indicatif, devoir/pouvoir for probability, sans doute, dans une certaine mesure). Use vous. Drop in the words éventuellement, actuellement and délai so the learner must understand them correctly, and react with mild confusion if they use a false friend (rester for se reposer, sensible for raisonnable).", goal: "Presenteer een resultaat met il semblerait que, geef je eigen indruk met il me semble que en gebruik actuellement of éventuellement correct." }
  });

  /* ───────────────────────── C1 · 3 ───────────────────────── */
  U({
    id: "fr-c1-03", level: "C1", icon: "🏛️", title: "Il s'est vu refuser…", nl: "Politiek en instellingen: het passief in al zijn vormen",
    goals: ["Over politiek, wetten en instellingen praten", "Passieve wendingen herkennen: se voir, se faire, se laisser", "Formele teksten in naamwoordstijl begrijpen", "Zelf een zin van werkwoordstijl naar naamwoordstijl omzetten"],
    vocab: [
      ["le gouvernement", "de regering"], ["le Premier ministre", "de premier"], ["le Parlement", "het parlement"], ["l'Assemblée nationale", "de Tweede Kamer (Frankrijk)"], ["le Sénat", "de Senaat"], ["le député / la députée", "het Kamerlid"],
      ["l'élu / l'élue", "de gekozen vertegenwoordiger"], ["le scrutin", "de stemming"], ["le suffrage", "het kiesrecht / de stem"], ["voter une loi", "een wet aannemen"], ["le projet de loi", "het wetsvoorstel"], ["l'amendement", "het amendement"],
      ["adopter", "aannemen"], ["rejeter", "verwerpen"], ["promulguer", "afkondigen"], ["la réforme", "de hervorming"], ["le mandat", "de ambtstermijn"], ["le pouvoir", "de macht"],
      ["la laïcité", "de scheiding van kerk en staat"], ["le citoyen / la citoyenne", "de burger"], ["la mairie", "het gemeentehuis"], ["la préfecture", "de prefectuur"], ["la motion de censure", "de motie van wantrouwen"], ["dissoudre", "ontbinden"],
      ["la mise en œuvre", "de uitvoering"], ["l'entrée en vigueur", "de inwerkingtreding"], ["se voir contraint de", "zich genoodzaakt zien om"], ["en vertu de", "krachtens"]
    ],
    grammar: [
      { t: "Passief zonder être: se voir, se faire, se laisser", es: "Les tournures passives",
        html: `<p>Het gewone passief (<i>être</i> + deelwoord) ken je. Het heeft één grote beperking: alleen een <b>lijdend</b> voorwerp kan onderwerp worden. «Hem werd een visum geweigerd» kan dus niet als <s>Il a été refusé un visa</s>. Daarvoor heeft formeel Frans een elegante oplossing.</p>
<p><b>se voir + infinitief</b> (de persoon aan wie iets gebeurt wordt onderwerp):<br><i>On <b>lui</b> a refusé un visa.</i> → <i>Il <b>s'est vu refuser</b> un visa.</i> (Hem werd een visum geweigerd.)<br><i>Elle <b>s'est vu attribuer</b> le prix.</i> (Haar werd de prijs toegekend.)<br>Ook met een deelwoord: <i>Il <b>s'est vu contraint</b> de démissionner.</i> (Hij zag zich genoodzaakt af te treden.)</p>
<p><b>se faire + infinitief</b>: het onderwerp ondergaat iets, vaak onaangenaam, soms door eigen toedoen: <i>Il <b>s'est fait licencier</b>.</i> (Hij is ontslagen.) · <i>Elle <b>s'est fait élire</b>.</i> (Ze heeft zich laten verkiezen / is verkozen.)</p>
<p><b>se laisser + infinitief</b>: het onderwerp verzet zich niet: <i>Il <b>s'est laissé convaincre</b>.</i> (Hij heeft zich laten overtuigen.)</p>
<p>⚠️ <b>Uitzondering in de spelling:</b> het deelwoord in <i>se faire + infinitief</i> blijft <b>altijd</b> onveranderd: <i>Elle s'est <b>fait</b> élire</i> (nooit <s>faite</s>). Bij <i>se voir + infinitief</i> blijft <i>vu</i> onveranderd als het onderwerp de handeling <b>ondergaat</b>: <i>Elle s'est <b>vu</b> refuser l'entrée.</i> Waarom? <i>Se</i> is hier meewerkend voorwerp («aan haar werd geweigerd»), en met een meewerkend voorwerp past een deelwoord zich nooit aan.</p>
<p><b>Andere manieren om de dader weg te laten:</b><br><b>on:</b> <i><b>On</b> a voté la loi hier.</i><br><b>wederkerend:</b> <i>La loi <b>s'applique</b> à tous. Ce mot <b>s'écrit</b> avec deux l.</i><br><b>onpersoonlijk passief</b> (zeer formeel): <i><b>Il a été décidé</b> de reporter le vote.</i> (Er is besloten…) · <i><b>Il est interdit</b> de fumer.</i></p>`,
        table: [["actief met on", "passieve wending"], ["On lui a refusé l'entrée.", "Il s'est vu refuser l'entrée."], ["On l'a élue maire.", "Elle s'est fait élire maire."], ["On a décidé de reporter le vote.", "Il a été décidé de reporter le vote."], ["On applique la loi à tous.", "La loi s'applique à tous."]],
        ex: [["Le ministre s'est vu reprocher son silence.", "De minister werd zijn zwijgen verweten."], ["Il a été convenu que les deux partis gouverneraient ensemble.", "Er is overeengekomen dat de twee partijen samen zouden regeren."]] },
      { t: "Naamwoordstijl: zo schrijven wetten en kranten", es: "Le style nominal",
        html: `<p>Op B2 zag je krantenkoppen zonder werkwoord. In wetteksten, beleidsstukken en academisch Frans gaat dat veel verder: hele bijzinnen worden vervangen door een <b>zelfstandig naamwoord met een voorzetsel</b>. Het resultaat is compact en afstandelijk; je moet het vooral kunnen <b>ontcijferen</b>.</p>
<p><b>Bijzin → voorzetselgroep:</b><br><i>parce que les prix ont augmenté</i> → <b>en raison de la hausse</b> des prix<br><i>quand la loi entrera en vigueur</i> → <b>dès l'entrée en vigueur</b> de la loi<br><i>bien que le Sénat s'y oppose</i> → <b>malgré l'opposition</b> du Sénat<br><i>pour que la réforme soit mise en œuvre</i> → <b>en vue de la mise en œuvre</b> de la réforme<br><i>si le Parlement est d'accord</i> → <b>sous réserve de l'accord</b> du Parlement</p>
<p><b>Vaste formele voorzetsels:</b> <i>en vertu de</i> (krachtens), <i>conformément à</i> (overeenkomstig), <i>à l'issue de</i> (na afloop van), <i>au terme de</i> (aan het eind van), <i>dans le cadre de</i> (in het kader van), <i>à l'égard de</i> (ten aanzien van), <i>faute de</i> (bij gebrek aan), <i>à défaut de</i>.</p>
<p>⚠️ <b>Let op de keten met de:</b> het Frans stapelt zelfstandige naamwoorden met <i>de</i>: <i>le report <b>de</b> l'examen <b>du</b> projet <b>de</b> loi</i>. Lees zo'n keten <b>van achter naar voren</b>, zoals een Nederlandse samenstelling: «wetsvoorstel-behandeling-uitstel».</p>
<p>⚠️ <b>Uitzondering: onderwerp of lijdend voorwerp?</b> <i>la critique <b>du ministre</b></i> kan betekenen dat de minister kritiek geeft óf krijgt. Waarom? Bij nominalisatie verdwijnt het verschil tussen onderwerp en lijdend voorwerp; allebei worden <i>de</i> + naamwoord. Wil je duidelijk zijn, dan gebruik je <i>par</i> voor de dader: <i>la critique du projet <b>par</b> le ministre</i>.</p>
<p><b>Wanneer zelf gebruiken?</b> In een formele brief of een samenvatting. In een gesprek klinkt het stijf: zeg daar gewoon <i>parce que les prix ont augmenté</i>.</p>`,
        table: [["met werkwoord", "naamwoordstijl"], ["Avant que le président arrive", "Avant l'arrivée du président"], ["Parce qu'il manque de temps", "Faute de temps"], ["Après que les députés ont voté", "À l'issue du vote des députés"], ["Comme la loi le prévoit", "Conformément à la loi"]],
        ex: [["En raison du rejet de l'amendement, le texte sera réexaminé.", "Wegens de verwerping van het amendement wordt de tekst opnieuw behandeld."], ["Sous réserve de l'accord du Sénat, la loi entrera en vigueur en janvier.", "Onder voorbehoud van instemming van de Senaat treedt de wet in januari in werking."]] }
    ],
    dialogue: {
      t: "Devant la mairie", place: "Strasbourg 🇫🇷",
      lines: [
        ["Tom", "Tu as l'air furieux, Karim. Qu'est-ce qui t'arrive ?", "Je ziet er woedend uit, Karim. Wat is er aan de hand?"],
        ["Karim", "Je me suis vu refuser mon permis de construire. Pour la deuxième fois !", "Mijn bouwvergunning is geweigerd. Voor de tweede keer!"],
        ["Tom", "Pour quelle raison ?", "Om welke reden?"],
        ["Karim", "« En vertu de l'article 12 du plan d'urbanisme ». Autrement dit : mon toit est trop haut de trente centimètres.", "'Krachtens artikel 12 van het bestemmingsplan'. Met andere woorden: mijn dak is dertig centimeter te hoog."],
        ["Tom", "Et tu ne peux pas contester ?", "En kun je niet in beroep gaan?"],
        ["Karim", "Si, dans un délai de deux mois. Mais il a été décidé de fermer le service en août, évidemment.", "Jawel, binnen een termijn van twee maanden. Maar er is besloten de dienst in augustus te sluiten, natuurlijk."],
        ["Tom", "L'administration française… Tu as parlé à ton élue ?", "De Franse bureaucratie… Heb je met je raadslid gesproken?"],
        ["Karim", "Oui. Elle s'est fait élire en promettant de simplifier les démarches. Résultat : il y a un formulaire de plus.", "Ja. Ze heeft zich laten verkiezen met de belofte de procedures te vereenvoudigen. Resultaat: er is een formulier bij gekomen."],
        ["Tom", "Ne te laisse pas décourager. Chez nous aussi, les règles s'appliquent à tout le monde, même quand elles sont absurdes.", "Laat je niet ontmoedigen. Bij ons gelden de regels ook voor iedereen, zelfs als ze absurd zijn."],
        ["Karim", "Tu as raison. Faute de mieux, je vais baisser le toit. Mais aux prochaines élections, je m'en souviendrai !", "Je hebt gelijk. Bij gebrek aan beter verlaag ik het dak. Maar bij de volgende verkiezingen zal ik eraan denken!"]
      ],
      q: [
        { t: "mc", q: "Qu'est-il arrivé à Karim ?", o: ["On lui a refusé son permis de construire", "Il a refusé un permis", "Il a été élu"] },
        { t: "mc", q: "Pourquoi le permis a-t-il été refusé ?", o: ["Le toit est trop haut", "Le service est fermé en août", "Karim n'a pas rempli le formulaire"] },
        { t: "mc", q: "Que va faire Karim finalement ?", o: ["Baisser le toit", "Déménager", "Se présenter aux élections"] }
      ]
    },
    culture: { t: "De Vijfde Republiek in het kort", html: `<p>Frankrijk leeft sinds 1958 onder de <b>Cinquième République</b>, ontworpen door generaal de Gaulle. De <b>president</b> wordt rechtstreeks gekozen voor vijf jaar (<i>le quinquennat</i>) en heeft veel meer macht dan een Nederlandse premier of de Belgische koning: hij benoemt de premier en kan de Assemblée nationale ontbinden.</p>
<p>Wonen president en parlementaire meerderheid in verschillende politieke kampen, dan spreekt men van <b>cohabitation</b>. Via <b>artikel 49.3</b> van de grondwet kan de regering een wet zonder stemming doordrukken, tenzij de Kamer een <i>motion de censure</i> aanneemt: een bron van eindeloos debat.</p>
<p>Kernwoord van de republiek is <b>la laïcité</b>: sinds de wet van 1905 zijn kerk en staat strikt gescheiden. En op elk gemeentehuis staat het devies: <i>Liberté, Égalité, Fraternité</i>. Straatsburg deelt de zetel van het Europees Parlement met Brussel.</p>` },
    ex: [
      { t: "cloze", s: "Il s'est ___ refuser un visa.", a: ["vu"], o: ["vu", "été", "eu"], nl: "Hem werd een visum geweigerd.", x: "Se voir + infinitief: de persoon aan wie iets gebeurt wordt onderwerp.", tag: "fr-passif2" },
      { t: "cloze", s: "Elle s'est ___ élire maire.", a: ["fait"], o: ["fait", "faite", "faire"], nl: "Ze is tot burgemeester verkozen.", x: "Uitzondering: fait + infinitief blijft altijd onveranderd.", tag: "fr-passif2" },
      { t: "cloze", s: "Il a ___ décidé de reporter le vote.", a: ["été"], o: ["été", "eu", "fait"], nl: "Er is besloten de stemming uit te stellen.", tag: "fr-passif2" },
      { t: "cloze", s: "Cette loi ___ à tous les citoyens.", a: ["s'applique"], o: ["s'applique", "applique", "est appliquant"], nl: "Deze wet geldt voor alle burgers.", tag: "fr-passif2" },
      { t: "cloze", s: "___ de temps, nous n'avons pas pu finir.", a: ["Faute"], o: ["Faute", "Malgré", "Sous"], nl: "Bij gebrek aan tijd hebben we het niet kunnen afmaken.", tag: "fr-style-nominal" },
      { t: "cloze", s: "En ___ de l'article 12, le permis est refusé.", a: ["vertu"], o: ["vertu", "raison", "cadre"], nl: "Krachtens artikel 12 wordt de vergunning geweigerd.", tag: "fr-style-nominal" },
      { t: "mc", q: "«Quand la loi entrera en vigueur» in naamwoordstijl:", o: ["Dès l'entrée en vigueur de la loi", "Malgré l'entrée en vigueur de la loi", "Faute de l'entrée en vigueur de la loi"], tag: "fr-style-nominal" },
      { t: "mc", q: "Waarom kan «Il a été refusé un visa» niet met «il» = hij?", o: ["Alleen een lijdend voorwerp kan onderwerp van het passief worden", "Refuser heeft geen passief", "Visa is vrouwelijk"], tag: "fr-passif2" },
      { t: "mc", q: "Wat betekent «à l'issue de la réunion»?", o: ["na afloop van de vergadering", "tijdens de vergadering", "bij de uitgang van de vergaderzaal"], tag: "fr-style-nominal" },
      { t: "tr", nl: "Hij heeft zich laten overtuigen.", a: ["Il s'est laissé convaincre."], tag: "fr-passif2" },
      { t: "tr", nl: "Het is verboden te roken.", a: ["Il est interdit de fumer."], tag: "fr-passif2" },
      { t: "tr", nl: "Overeenkomstig de wet.", a: ["Conformément à la loi."], tag: "fr-style-nominal" },
      { t: "order", s: "Le ministre s'est vu reprocher son silence.", nl: "De minister werd zijn zwijgen verweten.", tag: "fr-ordre" },
      { t: "match", p: [["en vertu de", "krachtens"], ["faute de", "bij gebrek aan"], ["à l'issue de", "na afloop van"], ["dans le cadre de", "in het kader van"], ["sous réserve de", "onder voorbehoud van"]], tag: "fr-style-nominal" }
    ],
    reading: {
      t: "Communiqué de la mairie", type: "Officiële mededeling",
      p: [
        ["À l'issue de la séance du conseil municipal du 12 juin, il a été décidé de limiter la circulation automobile dans le centre historique. Cette mesure, adoptée par vingt-huit voix contre onze, entrera en vigueur dès la rentrée de septembre.", "Na afloop van de gemeenteraadsvergadering van 12 juni is besloten het autoverkeer in het historische centrum te beperken. Deze maatregel, aangenomen met achtentwintig stemmen tegen elf, treedt in werking bij het begin van het nieuwe seizoen in september."],
        ["En vertu de cet arrêté, seuls les riverains et les véhicules de livraison se verront accorder un accès permanent. Les commerçants, qui s'étaient vu refuser une première demande de dérogation, pourront déposer un nouveau dossier, sous réserve de l'avis favorable de la préfecture.", "Krachtens dit besluit krijgen alleen omwonenden en bestelwagens permanente toegang. De winkeliers, wier eerste verzoek om ontheffing was afgewezen, kunnen een nieuw dossier indienen, onder voorbehoud van een gunstig advies van de prefectuur."],
        ["Faute de consensus, la question du stationnement a été reportée à une séance ultérieure. Conformément à la loi, une réunion publique sera organisée dans le cadre de la mise en œuvre du projet. Les citoyens y sont cordialement invités.", "Bij gebrek aan consensus is de parkeerkwestie verschoven naar een latere vergadering. Overeenkomstig de wet wordt er in het kader van de uitvoering van het project een openbare bijeenkomst gehouden. De burgers zijn van harte uitgenodigd."]
      ],
      gl: [["le conseil municipal", "de gemeenteraad"], ["l'arrêté", "het besluit"], ["le riverain", "de omwonende"], ["la dérogation", "de ontheffing"], ["ultérieur / ultérieure", "later"]],
      q: [
        { t: "mc", q: "Qu'a décidé le conseil municipal ?", o: ["De limiter les voitures dans le centre historique", "De fermer les commerces", "De construire un parking"] },
        { t: "mc", q: "Qu'était-il arrivé aux commerçants ?", o: ["Leur première demande avait été refusée", "Ils avaient obtenu un accès permanent", "Ils avaient voté contre"] },
        { t: "mc", q: "Pourquoi la question du stationnement est-elle reportée ?", o: ["Parce qu'il n'y avait pas de consensus", "Parce que la préfecture a refusé", "Parce que la loi l'interdit"] }
      ]
    },
    say: [["Il s'est vu refuser son permis.", "Zijn vergunning is hem geweigerd."], ["Il a été décidé de reporter le vote.", "Er is besloten de stemming uit te stellen."], ["Faute de temps, nous n'avons pas fini.", "Bij gebrek aan tijd zijn we niet klaar."], ["La loi s'applique à tous.", "De wet geldt voor iedereen."]],
    task: { nl: "Herschrijf dit bericht in formele stijl (4 of 5 zinnen): «De gemeente heeft besloten dat het zwembad dichtgaat omdat er geen geld is. Ze hebben de sportclub geen subsidie gegeven. Als de raad het goedvindt, gaat het volgend jaar weer open.» Gebruik il a été décidé, se voir + infinitief en twee formele voorzetsels.", model: "Faute de moyens financiers, il a été décidé de fermer la piscine municipale. Le club de natation s'est vu refuser la subvention qu'il avait sollicitée. Sous réserve de l'accord du conseil, l'établissement rouvrira l'année prochaine. Conformément à la loi, les abonnés seront remboursés." },
    scenario: { nl: "Je krijgt in Straatsburg een formele afwijzing van de gemeente. Een Franse vriend helpt je de ambtelijke taal te begrijpen en te reageren.", role: "You are Karim, a French friend in Strasbourg with long experience of French bureaucracy. The learner has received a formal refusal letter from the town hall (permit, subsidy or parking card). Ask what it says, 'translate' the administrative phrases into plain French (en vertu de, faute de, sous réserve de, il a été décidé), and help them plan an appeal. Use passive turns yourself (tu t'es vu refuser…, elle s'est fait élire…, ça se fait). Be humorous about the administration but practical.", goal: "Vertel wat je geweigerd is met se voir refuser, leg de reden uit met een formeel voorzetsel en zeg wat er besloten is met il a été décidé." }
  });

  /* ───────────────────────── C1 · 4 ───────────────────────── */
  U({
    id: "fr-c1-04", level: "C1", icon: "🪶", title: "Bien qu'il fût tard", nl: "Klassieke literatuur lezen: de tijden die alleen op papier bestaan",
    goals: ["Klassieke Franse literatuur kunnen lezen", "De subjonctif imparfait herkennen en begrijpen", "De passé antérieur herkennen", "Weten wat je in modern Frans in plaats daarvan zegt"],
    vocab: [
      ["l'œuvre", "het werk / oeuvre"], ["le siècle des Lumières", "de eeuw van de Verlichting"], ["le romancier / la romancière", "de romanschrijver"], ["le dramaturge", "de toneelschrijver"], ["le poète / la poétesse", "de dichter"], ["le vers", "de versregel"],
      ["la rime", "het rijm"], ["la prose", "het proza"], ["le narrateur", "de verteller"], ["le style", "de stijl"], ["la métaphore", "de metafoor"], ["l'ironie", "de ironie"],
      ["jadis", "eertijds"], ["naguère", "onlangs / nog niet zo lang geleden (literair)"], ["dès lors", "van toen af / bijgevolg"], ["lorsque", "toen / wanneer"], ["quoique", "hoewel"], ["afin que", "opdat"],
      ["nul / nulle", "geen enkel(e) (literair)"], ["guère", "nauwelijks"], ["fort", "zeer (literair)"], ["certes", "voorwaar / zeker"], ["le chagrin", "het verdriet"], ["la demeure", "de woning (literair)"],
      ["songer à", "denken aan (literair)"], ["s'en aller", "weggaan"], ["désuet / désuète", "ouderwets"], ["l'usage", "het gebruik"]
    ],
    grammar: [
      { t: "De subjonctif imparfait: alleen herkennen", es: "L'imparfait du subjonctif",
        html: `<p>Lees je Voltaire, Flaubert of Proust, dan stuit je op vormen als <i>qu'il <b>fût</b></i>, <i>qu'elle <b>eût</b></i>, <i>qu'ils <b>parlassent</b></i>. Dat is de <b>subjonctif imparfait</b>. In de klassieke regels van de overeenkomst der tijden hoort hij na een hoofdzin in het <b>verleden</b>:</p>
<p><i>Je <b>veux</b> qu'il <b>vienne</b>.</i> (nu → subjonctif présent)<br><i>Je <b>voulais</b> qu'il <b>vînt</b>.</i> (verleden → subjonctif imparfait)</p>
<p>In modern Frans, gesproken én geschreven, zeg je gewoon <i>Je voulais qu'il <b>vienne</b></i>. Je hoeft deze tijd dus <b>nooit zelf te maken</b>. Maar zonder hem te herkennen kun je de klassieken niet lezen.</p>
<p><b>Hoe herken je hem?</b> Neem de <b>passé simple</b> (3e persoon enkelvoud) en kijk naar de klinker:</p>
<p><i>il parl<b>a</b></i> → <i>qu'il parl<b>ât</b>, qu'ils parl<b>assent</b></i><br><i>il fin<b>i</b>t</i> → <i>qu'il fin<b>ît</b>, qu'ils fin<b>issent</b></i><br><i>il f<b>u</b>t</i> → <i>qu'il f<b>ût</b>, qu'ils f<b>ussent</b></i><br><i>il e<b>u</b>t</i> → <i>qu'il e<b>ût</b>, qu'ils e<b>ussent</b></i><br><i>il v<b>in</b>t</i> → <i>qu'il v<b>în</b>t, qu'ils v<b>inssent</b></i></p>
<p>💡 <b>Het herkenningsteken:</b> in de 3e persoon enkelvoud een <b>circonflexe + t</b> (<i>-ât, -ît, -ût</i>); in de andere personen <b>-ss-</b> (<i>-asse, -isses, -ussions</i>).</p>
<p>⚠️ <b>Let op, één accent maakt het verschil:</b> <i>il <b>fut</b></i> (passé simple: hij was) ↔ <i>qu'il <b>fût</b></i> (subjonctif imparfait). <i>il <b>eut</b></i> ↔ <i>qu'il <b>eût</b></i>. Waarom? Het dakje staat op de plek van een verdwenen <b>s</b> (<i>fust, eust</i>), dezelfde s die je in <i>fusse, eusse</i> nog ziet.</p>
<p>⚠️ <b>Uitzondering: eût en fût als conditionnel.</b> In literair Frans kan <i>il <b>eût</b> fait</i> ook betekenen <i>il <b>aurait</b> fait</i> (hij zou hebben gedaan), en <i>il <b>fût</b> venu</i> = <i>il <b>serait</b> venu</i>. <i>Qui l'<b>eût</b> cru ?</i> = Wie had dat gedacht? Waarom? In het Latijn drukte dezelfde vorm zowel de wens als de onwerkelijkheid uit; het literaire Frans heeft die dubbele rol bewaard.</p>
<p>Fransen vinden de vormen op <i>-asse</i> zelf komisch (<i>que vous l'aimassiez</i>) en gebruiken ze voor een grap.</p>`,
        table: [["literair", "modern", "vertaling"], ["Je voulais qu'il vînt.", "Je voulais qu'il vienne.", "Ik wilde dat hij kwam."], ["Bien qu'il fût tard…", "Bien qu'il soit tard…", "Hoewel het laat was…"], ["Il fallait qu'elle partît.", "Il fallait qu'elle parte.", "Ze moest vertrekken."], ["Qui l'eût cru ?", "Qui l'aurait cru ?", "Wie had dat gedacht?"]],
        ex: [["Il craignait que la nuit ne fût trop courte.", "Hij vreesde dat de nacht te kort zou zijn."], ["Elle parla doucement afin que nul ne l'entendît.", "Ze sprak zacht opdat niemand haar zou horen."]] },
      { t: "De passé antérieur en het literaire tijdensysteem", es: "Le passé antérieur",
        html: `<p>In een roman vervangt de passé simple de passé composé. Logisch dus dat ook de «voltooide» tijd een literaire tegenhanger heeft: de <b>passé antérieur</b>. Hij drukt uit dat iets <b>net vóór</b> een andere gebeurtenis in de passé simple was afgerond.</p>
<p><b>Vorm:</b> <i>avoir</i> of <i>être</i> in de <b>passé simple</b> + voltooid deelwoord: <i>il <b>eut</b> fini</i> · <i>elle <b>fut</b> partie</i> · <i>ils <b>eurent</b> mangé</i>.</p>
<p>Je vindt hem bijna alleen na <b>quand, lorsque, dès que, aussitôt que, après que, à peine … que</b>:<br><i><b>Dès qu'</b>il <b>eut fini</b>, il sortit.</i> (Zodra hij klaar was, ging hij naar buiten.)<br><i><b>À peine fut-elle arrivée que</b> la pluie commença.</i> (Nauwelijks was ze aangekomen of het begon te regenen.)</p>
<p><b>Modern Frans</b> gebruikt hier de plus-que-parfait of een andere bouw: <i>Dès qu'il <b>a eu</b> fini…</i> (spreektaal, <i>passé surcomposé</i>) of <i><b>Après avoir fini</b>, il est sorti.</i></p>
<p><b>Het literaire systeem naast het gewone:</b></p>
<p>gebeurtenis: <i>il a parlé</i> ↔ <i>il <b>parla</b></i><br>net daarvoor afgerond: <i>il avait parlé</i> ↔ <i>il <b>eut parlé</b></i><br>subjonctif na verleden: <i>qu'il parle</i> ↔ <i>qu'il <b>parlât</b></i><br>subjonctif voltooid na verleden: <i>qu'il ait parlé</i> ↔ <i>qu'il <b>eût parlé</b></i></p>
<p>⚠️ <b>Let op, niet verwarren:</b> <i>il <b>eut</b> fini</i> (passé antérieur, zonder accent: een feit) ↔ <i>qu'il <b>eût</b> fini</i> (subjonctif plus-que-parfait, met accent). En <i>il <b>fut</b> aimé</i> is geen passé antérieur maar een <b>passief</b> in de passé simple (hij werd bemind): <i>aimer</i> gaat immers met <i>avoir</i>. Waarom is dat lastig? <i>Être</i> + deelwoord kan zowel een voltooide tijd zijn (bij être-werkwoorden) als een passief; je moet weten welk hulpwerkwoord het werkwoord normaal neemt.</p>
<p>De <b>imparfait</b> en de <b>plus-que-parfait</b> blijven in literair Frans gewoon wat ze zijn: achtergrond en voorgeschiedenis.</p>`,
        table: [["literair", "modern"], ["Quand il eut dîné, il se coucha.", "Quand il a eu dîné / Après avoir dîné, il s'est couché."], ["Dès qu'elle fut sortie, il pleura.", "Dès qu'elle est sortie, il a pleuré."], ["À peine eut-il parlé qu'il le regretta.", "À peine avait-il parlé qu'il l'a regretté."]],
        ex: [["Lorsqu'ils eurent traversé le fleuve, ils aperçurent la ville.", "Toen ze de rivier waren overgestoken, zagen ze de stad."], ["Après qu'elle eut lu la lettre, elle la brûla.", "Nadat ze de brief had gelezen, verbrandde ze hem."]] }
    ],
    dialogue: {
      t: "À la bibliothèque universitaire", place: "Louvain-la-Neuve 🇧🇪",
      lines: [
        ["Sanne", "Excuse-moi, Félix, tu peux m'aider ? Je lis Candide pour mon cours et je bloque sur une phrase.", "Sorry Félix, kun je me helpen? Ik lees Candide voor mijn college en ik loop vast op een zin."],
        ["Félix", "Montre. « Il fallait qu'il partît sans que personne le vît. » Ah, du Voltaire pur !", "Laat zien. 'Il fallait qu'il partît sans que personne le vît.' Ah, zuivere Voltaire!"],
        ["Sanne", "« Partît », « vît »… Ce sont des fautes de frappe ?", "'Partît', 'vît'… Zijn dat typefouten?"],
        ["Félix", "Pas du tout ! C'est l'imparfait du subjonctif. Aujourd'hui on dirait : « qu'il parte sans que personne le voie ».", "Helemaal niet! Dat is de subjonctif imparfait. Tegenwoordig zou je zeggen: 'qu'il parte sans que personne le voie'."],
        ["Sanne", "Donc le sens est le même ? Je dois apprendre à le conjuguer ?", "Dus de betekenis is hetzelfde? Moet ik hem leren vervoegen?"],
        ["Félix", "Surtout pas. Même nous, on ne l'emploie plus. Il suffit de le reconnaître : un accent circonflexe et un t.", "Vooral niet. Zelfs wij gebruiken hem niet meer. Herkennen is genoeg: een dakje en een t."],
        ["Sanne", "Et ici : « Dès qu'il eut fini, il s'en alla » ?", "En hier: 'Dès qu'il eut fini, il s'en alla'?"],
        ["Félix", "Passé antérieur. « Dès qu'il a eu fini, il est parti. » Tout ce que tu connais, mais en costume d'époque.", "Passé antérieur. 'Zodra hij klaar was, ging hij weg.' Alles wat je al kent, maar in historisch kostuum."],
        ["Sanne", "J'aime bien cette image. Et toi, tu ne les utilises vraiment jamais ?", "Mooi beeld. En jij, gebruik je ze echt nooit?"],
        ["Félix", "Une seule fois par an, pour faire rire : « Encore eût-il fallu que je le susse ! »", "Eén keer per jaar, om mensen aan het lachen te maken: 'Dan had ik het wel moeten weten!'"]
      ],
      q: [
        { t: "mc", q: "Que sont « partît » et « vît » ?", o: ["Des formes de l'imparfait du subjonctif", "Des fautes de frappe", "Des formes du futur"] },
        { t: "mc", q: "Que conseille Félix ?", o: ["De reconnaître ces formes, pas de les conjuguer", "De les apprendre par cœur", "De ne pas lire Voltaire"] },
        { t: "mc", q: "Comment dit-on « dès qu'il eut fini » en français moderne ?", o: ["Dès qu'il a eu fini", "Dès qu'il finira", "Dès qu'il finissait"] }
      ]
    },
    culture: { t: "Waarom Franse scholieren Molière nog lezen", html: `<p>Het Frans van de zeventiende eeuw, de taal van <b>Molière</b>, <b>Racine</b> en <b>La Fontaine</b>, is voor een Fransman van nu vrijwel zonder hulp leesbaar. Dat is geen toeval: de Académie en het onderwijs hebben de schrijftaal eeuwenlang bewust stabiel gehouden. Het Frans heet daarom <i>la langue de Molière</i>.</p>
<p>Elke scholier leert fabels van La Fontaine uit het hoofd (<i>Le Corbeau et le Renard</i>), en voor het <i>bac de français</i> lezen ze onder meer Voltaire, Hugo, Flaubert en Camus. Camus' <i>L'Étranger</i> (1942) brak overigens met de traditie: het is in de <b>passé composé</b> geschreven, wat toen als schokkend werd ervaren.</p>
<p>Belgische auteurs horen er vanzelfsprekend bij: Simenon (Maigret), Amélie Nothomb, en Hergé, in wiens Kuifje-albums kapitein Haddock grossiert in deftige scheldwoorden.</p>` },
    ex: [
      { t: "cloze", s: "« Je voulais qu'il vînt. » In modern Frans: Je voulais qu'il ___ .", a: ["vienne"], o: ["vienne", "vient", "viendra"], nl: "Ik wilde dat hij kwam.", tag: "fr-subj-imp" },
      { t: "cloze", s: "« Bien qu'il fût malade » = Bien qu'il ___ malade.", a: ["soit"], o: ["soit", "est", "sera"], nl: "Hoewel hij ziek was.", x: "Fût met dakje is de subjonctif imparfait van être.", tag: "fr-subj-imp" },
      { t: "cloze", s: "« Qui l'eût cru ? » = Qui l'___ cru ?", a: ["aurait"], o: ["aurait", "avait", "aura"], nl: "Wie had dat gedacht?", x: "Uitzondering: literair eût kan ook conditionnel passé zijn.", tag: "fr-subj-imp" },
      { t: "cloze", s: "Dès qu'il ___ fini, il sortit. (passé antérieur)", a: ["eut"], o: ["eut", "eût", "aurait"], nl: "Zodra hij klaar was, ging hij naar buiten.", x: "Zonder accent: passé antérieur, een feit.", tag: "fr-passe-ant" },
      { t: "cloze", s: "À peine fut-elle arrivée ___ la pluie commença.", a: ["que"], o: ["que", "quand", "dès"], nl: "Nauwelijks was ze aangekomen of het begon te regenen.", tag: "fr-passe-ant" },
      { t: "cloze", s: "« Lorsqu'ils eurent mangé » = Après ___ mangé.", a: ["avoir"], o: ["avoir", "être", "eu"], nl: "Nadat ze gegeten hadden.", tag: "fr-passe-ant" },
      { t: "mc", q: "Waaraan herken je de subjonctif imparfait in de 3e persoon enkelvoud?", o: ["Aan een circonflexe + t", "Aan de uitgang -ait", "Aan de uitgang -ra"], tag: "fr-subj-imp" },
      { t: "mc", q: "Welke vorm is passé simple (geen subjonctif)?", o: ["il fut", "qu'il fût", "qu'il fusse"], x: "Let op: één accent maakt het verschil.", tag: "fr-subj-imp" },
      { t: "mc", q: "Wat is «il fut aimé»?", o: ["Passief in de passé simple: hij werd bemind", "Passé antérieur: hij had bemind", "Subjonctif imparfait"], x: "Aimer gaat met avoir; être + deelwoord is hier dus passief.", tag: "fr-passe-ant" },
      { t: "tr", nl: "Hoewel het laat is, werken we door. (modern Frans)", a: ["Bien qu'il soit tard, nous continuons à travailler.", "Bien qu'il soit tard, on continue à travailler.", "Bien qu'il soit tard, nous continuons de travailler."], tag: "fr-subj-imp" },
      { t: "tr", nl: "Ze moest vertrekken. (modern, met il fallait que)", a: ["Il fallait qu'elle parte."], tag: "fr-subj-imp" },
      { t: "tr", nl: "Na de brief gelezen te hebben, verbrandde ze hem. (modern)", a: ["Après avoir lu la lettre, elle l'a brûlée."], tag: "fr-passe-ant" },
      { t: "order", s: "Elle parla doucement afin que nul ne l'entendît.", nl: "Ze sprak zacht opdat niemand haar zou horen.", tag: "fr-ordre" },
      { t: "match", p: [["qu'il fût", "qu'il soit"], ["qu'il eût", "qu'il ait"], ["qu'il vînt", "qu'il vienne"], ["qu'il fît", "qu'il fasse"], ["qu'il pût", "qu'il puisse"]], tag: "fr-subj-imp" }
    ],
    reading: {
      t: "Le voyageur et l'aubergiste", type: "Verhaal in klassieke stijl",
      p: [
        ["Un soir d'automne, un voyageur frappa à la porte d'une auberge isolée. Bien qu'il fût fort tard et que la pluie tombât depuis des heures, l'aubergiste refusa d'abord de lui ouvrir : il craignait que ce ne fût un voleur.", "Op een herfstavond klopte een reiziger aan de deur van een afgelegen herberg. Hoewel het zeer laat was en de regen al uren viel, weigerde de waard eerst hem open te doen: hij vreesde dat het een dief was."],
        ["Lorsque l'étranger eut juré qu'il ne voulait qu'un peu de pain, l'homme le laissa entrer. Dès qu'il eut mangé, le voyageur posa sur la table une pièce d'or et demanda qu'on lui donnât une chambre. L'aubergiste n'en avait jamais vu de si brillante.", "Toen de vreemdeling gezworen had dat hij alleen wat brood wilde, liet de man hem binnen. Zodra hij gegeten had, legde de reiziger een goudstuk op tafel en vroeg of men hem een kamer wilde geven. De waard had er nog nooit zo'n glanzende gezien."],
        ["Le lendemain, la chambre était vide. Sur le lit, il y avait une seconde pièce et un mot : « Pour celui qui ouvre sa porte avant de savoir à qui. » Qui l'eût cru ? On raconte que, depuis ce jour, l'auberge ne fut plus jamais fermée à clé.", "De volgende dag was de kamer leeg. Op het bed lag een tweede goudstuk en een briefje: 'Voor wie zijn deur opent voordat hij weet voor wie.' Wie had dat gedacht? Men vertelt dat de herberg sinds die dag nooit meer op slot is gedaan."]
      ],
      gl: [["l'auberge", "de herberg"], ["l'aubergiste", "de waard"], ["le voleur", "de dief"], ["jurer", "zweren"], ["fermer à clé", "op slot doen"]],
      q: [
        { t: "mc", q: "Pourquoi l'aubergiste hésitait-il à ouvrir ?", o: ["Il craignait que ce soit un voleur", "Il n'avait plus de chambre", "Il dormait déjà"] },
        { t: "mc", q: "Que demanda le voyageur après avoir mangé ?", o: ["Une chambre", "Encore du pain", "Un cheval"] },
        { t: "mc", q: "Que signifie « Qui l'eût cru ? »", o: ["Qui l'aurait cru ?", "Qui le croit ?", "Qui l'a eu ?"] }
      ]
    },
    say: [["Bien qu'il soit tard, je continue.", "Hoewel het laat is, ga ik door."], ["Qui l'eût cru ?", "Wie had dat gedacht?"], ["Il fallait qu'elle parte.", "Ze moest vertrekken."], ["Dès qu'il eut fini, il sortit.", "Zodra hij klaar was, ging hij naar buiten."]],
    task: { nl: "«Vertaal» deze klassieke zinnen naar modern Frans en schrijf daarna zelf twee zinnen in moderne stijl over een boek dat je las: «Il fallut qu'elle partît avant que le jour ne se levât. Dès qu'il eut compris, il s'en alla. Qui l'eût cru ?»", model: "Il a fallu qu'elle parte avant que le jour se lève. Dès qu'il a compris, il est parti. Qui l'aurait cru ? — J'ai lu L'Étranger de Camus le mois dernier. Bien que le style soit très simple, le livre m'a profondément troublé." },
    scenario: { nl: "In de universiteitsbibliotheek van Louvain-la-Neuve lees je een klassieke tekst en loop je vast op vreemde werkwoordsvormen. Een student helpt je.", role: "You are Félix, a literature student in Louvain-la-Neuve who loves the classics. The learner is reading Voltaire, Flaubert or Maupassant and gets stuck on imparfait du subjonctif and passé antérieur forms. Give them short classical sentences (qu'il fût, qu'elle vînt, dès qu'il eut fini, à peine fut-il sorti que…) and ask them to say each in modern French; confirm or correct. Explain the recognition trick (circumflex + t, -ss-). Reassure them that nobody uses these forms in speech, and end with a joking 'Encore eût-il fallu que je le susse !'", goal: "Zet twee klassieke zinnen om naar modern Frans en leg in je eigen woorden uit waaraan je de subjonctif imparfait herkent." }
  });

  /* ───────────────────────── C1 · 5 ───────────────────────── */
  U({
    id: "fr-c1-05", level: "C1", icon: "🧩", title: "Tout, même, quelque", nl: "Kleine woorden, grote valkuilen",
    goals: ["Weten wanneer tout verandert en wanneer niet", "Même als bijwoord en als bijvoeglijk naamwoord onderscheiden", "Quelque, quel que, quoique en quoi que uit elkaar houden", "Deze woorden correct schrijven in een verzorgde tekst"],
    vocab: [
      ["tout à fait", "helemaal"], ["tout de même", "toch"], ["tout à coup", "plotseling"], ["tout compte fait", "alles welbeschouwd"], ["à tout prix", "tot elke prijs"], ["en tout cas", "in elk geval"],
      ["quand même", "toch"], ["de même", "evenzo"], ["même pas", "zelfs niet"], ["moi-même", "ikzelf"], ["le même / la même", "dezelfde"], ["quelque chose", "iets"],
      ["quelques-uns / quelques-unes", "sommige(n)"], ["quelque part", "ergens"], ["quel que soit", "wat ook … is"], ["quoi que", "wat ook"], ["quoique", "hoewel"], ["où que", "waar ook"],
      ["tel / telle", "zo'n / dergelijk"], ["tel quel", "zoals het is"], ["un tel", "die en die"], ["n'importe quel", "om het even welk"], ["quiconque", "al wie"], ["quelconque", "een of ander / middelmatig"],
      ["chacun / chacune", "ieder"], ["aucun / aucune", "geen enkel(e)"], ["certains", "sommigen"], ["plusieurs", "verscheidene"]
    ],
    grammar: [
      { t: "Tout en même: wanneer passen ze zich aan?", es: "Tout et même",
        html: `<p><b>Tout</b> is vier woorden in één. Welke het is, bepaalt of het verandert.</p>
<p>1️⃣ <b>Bijvoeglijk</b> (al, heel, elk): past zich aan. <i><b>tout</b> le jour, <b>toute</b> la nuit, <b>tous</b> les jours, <b>toutes</b> les nuits</i>.<br>2️⃣ <b>Voornaamwoord</b> (alles, allen): <i><b>Tout</b> va bien. Ils sont <b>tous</b> venus.</i> (hier hoor je de <b>s</b>: «toes») · <i>Elles sont <b>toutes</b> là.</i><br>3️⃣ <b>Zelfstandig naamwoord</b>: <i>le <b>tout</b></i> (het geheel).<br>4️⃣ <b>Bijwoord</b> (helemaal, heel): in principe <b>onveranderlijk</b>. <i>Ils sont <b>tout</b> contents.</i> · <i>Elle est <b>tout</b> étonnée.</i> · <i>Elle est <b>tout</b> heureuse.</i></p>
<p>⚠️ <b>De beroemde uitzondering:</b> het bijwoord <i>tout</i> past zich tóch aan vóór een <b>vrouwelijk</b> bijvoeglijk naamwoord dat met een <b>medeklinker of aangeblazen h</b> begint: <i>Elle est <b>toute</b> petite. Elles sont <b>toutes</b> contentes. Elle est <b>toute</b> honteuse.</i> Waarom? Puur om de <b>klank</b>: zonder -e zou je de t niet horen en klinkt het als mannelijk; vóór een klinker hoor je de t al door de verbinding (<i>tout_étonnée</i>), dus is de -e daar niet nodig.</p>
<p>⚠️ <b>Gevolg, een dubbelzinnigheid:</b> <i>Elles sont <b>toutes</b> contentes</i> kan «ze zijn allemaal blij» (voornaamwoord) of «ze zijn heel blij» (bijwoord) betekenen.</p>
<p><b>Même</b> werkt net zo:</p>
<p><b>Bijvoeglijk</b> (dezelfde, zelf): past zich aan. <i>les <b>mêmes</b> erreurs</i> · <i>eux-<b>mêmes</b></i> · <i>Ce sont ses paroles <b>mêmes</b>.</i> (zijn eigen woorden)<br><b>Bijwoord</b> (zelfs): onveranderlijk. <i><b>Même</b> les enfants le savent.</i> · <i>Ils ont <b>même</b> ri.</i></p>
<p><b>Test:</b> kun je het vervangen door <i>aussi / jusqu'à</i>? Dan is het «zelfs» en verandert het niet. <i>Les experts <b>même</b> se trompent</i> (zelfs de experts) ↔ <i>les experts <b>eux-mêmes</b></i> (de experts zelf).</p>`,
        table: [["zin", "soort", "verandert?"], ["Tous les jours", "bijvoeglijk", "ja"], ["Ils sont tous là.", "voornaamwoord", "ja (s hoorbaar)"], ["Ils sont tout contents.", "bijwoord", "nee"], ["Elle est tout émue.", "bijwoord + klinker", "nee"], ["Elle est toute surprise.", "bijwoord + medeklinker (v.)", "ja, om de klank"], ["Même les enfants", "bijwoord (zelfs)", "nee"], ["les mêmes enfants", "bijvoeglijk (dezelfde)", "ja"]],
        ex: [["Elle était toute pâle et tout essoufflée.", "Ze was helemaal bleek en helemaal buiten adem."], ["Ils ont tous fait les mêmes fautes, même les meilleurs.", "Ze hebben allemaal dezelfde fouten gemaakt, zelfs de besten."]] },
      { t: "Quelque, quel que, quoique, quoi que", es: "Quelque / quel que, quoique / quoi que",
        html: `<p>Vier vormen die hetzelfde <b>klinken</b> en dus alleen bij het schrijven problemen geven. Ook Fransen maken hier fouten; op C1 wordt van je verwacht dat je ze uit elkaar houdt.</p>
<p><b>quoique</b> (één woord) = <b>hoewel</b> = <i>bien que</i> + subjonctif: <i><b>Quoiqu'</b>il soit tard, je reste.</i><br><b>quoi que</b> (twee woorden) = <b>wat ook</b> + subjonctif: <i><b>Quoi que</b> tu dises, je reste.</i><br><b>Test:</b> kun je het vervangen door <i>bien que</i>? Dan één woord.</p>
<p><b>quelque(s)</b> (één woord) + zelfstandig naamwoord = <b>enig(e), een paar</b>: <i><b>quelques</b> amis</i>, <i>depuis <b>quelque</b> temps</i>.<br><b>quel(le)(s) que</b> (twee woorden) + <i>être</i> in de subjonctif = <b>welk(e) ook</b>: <i><b>Quelle que soit</b> ta décision, je te soutiendrai.</i> · <i><b>Quels que soient</b> les risques…</i> Hier past <i>quel</i> zich aan het onderwerp aan.<br><b>Test:</b> staat er direct een vorm van <i>être</i> (<i>soit, soient, fût</i>) achter? Dan twee woorden.</p>
<p>⚠️ <b>Uitzondering: quelque als bijwoord.</b> Vóór een <b>getal</b> betekent <i>quelque</i> «ongeveer» en blijft het <b>onveranderd</b>: <i>les <b>quelque</b> deux cents invités</i> (de circa tweehonderd gasten), tegenover <i>les <b>quelques</b> invités</i> (de paar gasten). Waarom? Een bijwoord verandert nooit; hier zegt het iets over het getal, niet over de gasten.</p>
<p><b>Verwante vormen met de subjonctif:</b> <i><b>où que</b> tu ailles</i> (waar je ook gaat), <i><b>qui que</b> ce soit</i> (wie dan ook), <i><b>quoi qu'il en soit</b></i> (hoe het ook zij), <i><b>si</b> grand <b>qu'</b>il soit</i> / <i><b>aussi</b> grand <b>soit-il</b></i> (hoe groot hij ook is).</p>
<p><b>En tel:</b> past zich altijd aan: <i>une <b>telle</b> chance</i>, <i>de <b>tels</b> propos</i>. <i><b>Tel quel</b></i> = zoals het is (<i>Je l'ai laissée <b>telle quelle</b></i>). ⚠️ Zonder lidwoord in een vergelijking richt <i>tel</i> zich naar wat <b>volgt</b>: <i>Il a filé, <b>telle</b> une flèche.</i></p>`,
        table: [["vorm", "betekenis", "voorbeeld"], ["quoique", "hoewel", "Quoiqu'il pleuve, je sors."], ["quoi que", "wat ook", "Quoi qu'il arrive, je sors."], ["quelques", "een paar", "J'ai quelques questions."], ["quel(le) que soit", "welk(e) ook", "Quelle que soit l'heure, appelle-moi."], ["quelque + getal", "ongeveer", "Il y a quelque trois cents ans."]],
        ex: [["Quelles que soient vos raisons, je les respecte.", "Wat uw redenen ook zijn, ik respecteer ze."], ["Quoi qu'il en soit, la décision est prise.", "Hoe het ook zij, de beslissing is genomen."]] }
    ],
    dialogue: {
      t: "La relecture", place: "Montréal 🇨🇦",
      lines: [
        ["Chloé", "J'ai relu ton article, Tom. Il est tout à fait publiable, mais j'ai corrigé quelques détails.", "Ik heb je artikel nagelezen, Tom. Het is helemaal publiceerbaar, maar ik heb een paar details verbeterd."],
        ["Tom", "Quelques ? La page est toute rouge !", "Een paar? De pagina is helemaal rood!"],
        ["Chloé", "Ce sont toujours les mêmes. Regarde : « quoique tu dises ». Ici, c'est en deux mots.", "Het zijn steeds dezelfde. Kijk: 'quoique tu dises'. Hier is het in twee woorden."],
        ["Tom", "Pourquoi ? Je croyais que quoique voulait dire « hoewel ».", "Waarom? Ik dacht dat quoique 'hoewel' betekende."],
        ["Chloé", "Justement. Ici tu veux dire « peu importe ce que tu dis ». Donc : quoi que.", "Juist. Hier bedoel je 'wat je ook zegt'. Dus: quoi que."],
        ["Tom", "D'accord. Et là, « quelque soit la raison » ?", "Oké. En daar, 'quelque soit la raison'?"],
        ["Chloé", "Devant « soit », toujours en deux mots, et ça s'accorde : quelle que soit la raison.", "Vóór 'soit' altijd in twee woorden, en het past zich aan: quelle que soit la raison."],
        ["Tom", "Même les Français font ces fautes, non ?", "Zelfs Fransen maken die fouten, toch?"],
        ["Chloé", "Tous ! Moi-même, je vérifie chaque fois. Ah, et « elle était toute émue » : sans e, puisque émue commence par une voyelle.", "Allemaal! Ikzelf controleer het elke keer. O, en 'elle était toute émue': zonder e, want émue begint met een klinker."],
        ["Tom", "Tout émue, mais toute surprise. Quelle langue ! Quoi qu'il en soit, merci.", "Tout émue, maar toute surprise. Wat een taal! Hoe het ook zij, bedankt."]
      ],
      q: [
        { t: "mc", q: "Pourquoi faut-il écrire « quoi que tu dises » en deux mots ?", o: ["Parce que cela signifie « peu importe ce que »", "Parce que cela signifie « bien que »", "Parce que c'est du québécois"] },
        { t: "mc", q: "Comment écrit-on correctement ?", o: ["Quelle que soit la raison", "Quelque soit la raison", "Quel que soit la raison"] },
        { t: "mc", q: "Pourquoi « tout émue » sans e ?", o: ["Émue commence par une voyelle", "Émue est masculin", "Tout ne change jamais"] }
      ]
    },
    culture: { t: "Het dictee als nationale sport", html: `<p>In de Franstalige wereld is spelling een bron van trots en van angst. <b>La dictée</b> is op school een vast ritueel, en volwassenen doen vrijwillig mee aan wedstrijden. De beroemdste, de <i>Dicos d'or</i> van Bernard Pivot, werd jarenlang op televisie uitgezonden.</p>
<p>De moeder aller dictees is die van <b>Prosper Mérimée</b> (1857), geschreven om het hof van Napoleon III te vermaken. De keizer zou 75 fouten hebben gemaakt, de keizerin 62; de Oostenrijkse ambassadeur maar 3.</p>
<p>In 1990 keurde de Académie een voorzichtige <b>spellinghervorming</b> goed (<i>ognon</i> naast <i>oignon</i>, <i>cout</i> naast <i>coût</i>). Beide spellingen zijn sindsdien juist, maar het oude gebruik is taai. Québec en België hebben de nieuwe spelling sneller in het onderwijs ingevoerd dan Frankrijk.</p>` },
    ex: [
      { t: "cloze", s: "Elle est ___ petite.", a: ["toute"], o: ["toute", "tout", "tous"], nl: "Ze is heel klein.", x: "Uitzondering: vóór een vrouwelijk bijvoeglijk naamwoord met een medeklinker past tout zich aan, om de klank.", tag: "fr-tout" },
      { t: "cloze", s: "Elle est ___ étonnée.", a: ["tout"], o: ["tout", "toute", "toutes"], nl: "Ze is heel verbaasd.", x: "Vóór een klinker blijft het bijwoord tout onveranderd.", tag: "fr-tout" },
      { t: "cloze", s: "Ils sont ___ venus hier soir. (allemaal)", a: ["tous"], o: ["tous", "tout", "toutes"], nl: "Ze zijn gisteravond allemaal gekomen.", tag: "fr-tout" },
      { t: "cloze", s: "___ les enfants le savent. (zelfs)", a: ["Même"], o: ["Même", "Mêmes", "Les mêmes"], nl: "Zelfs de kinderen weten het.", x: "Même = zelfs is een bijwoord en verandert niet.", tag: "fr-tout" },
      { t: "cloze", s: "___ tu dises, je ne changerai pas d'avis. (wat ook)", a: ["Quoi que"], o: ["Quoi que", "Quoique", "Quelque"], nl: "Wat je ook zegt, ik verander niet van mening.", tag: "fr-quelque" },
      { t: "cloze", s: "___ soit ta décision, je te soutiendrai.", a: ["Quelle que"], o: ["Quelle que", "Quelque", "Quel que"], nl: "Wat je beslissing ook is, ik zal je steunen.", x: "Vóór soit: twee woorden, en quel past zich aan (la décision).", tag: "fr-quelque" },
      { t: "mc", q: "Welke zin betekent «de circa tweehonderd gasten»?", o: ["les quelque deux cents invités", "les quelques deux cents invités", "les quels que deux cents invités"], x: "Uitzondering: quelque vóór een getal is een bijwoord en verandert niet.", tag: "fr-quelque" },
      { t: "mc", q: "Welke zin kan twee dingen betekenen?", o: ["Elles sont toutes contentes.", "Elles sont tout émues.", "Ils sont tous contents."], x: "Toutes: «allemaal» of «heel».", tag: "fr-tout" },
      { t: "mc", q: "Welk woord kun je vervangen door «bien que»?", o: ["quoique", "quoi que", "quel que"], tag: "fr-quelque" },
      { t: "tr", nl: "Hoe het ook zij, bedankt.", a: ["Quoi qu'il en soit, merci."], tag: "fr-quelque" },
      { t: "tr", nl: "Ikzelf controleer het elke keer.", a: ["Moi-même, je vérifie chaque fois.", "Moi-même, je vérifie à chaque fois.", "Je vérifie moi-même chaque fois."], tag: "fr-tout" },
      { t: "tr", nl: "Ze maken allemaal dezelfde fouten.", a: ["Ils font tous les mêmes fautes.", "Ils font tous les mêmes erreurs.", "Elles font toutes les mêmes fautes."], tag: "fr-tout" },
      { t: "order", s: "Quelles que soient vos raisons, je les respecte.", nl: "Wat uw redenen ook zijn, ik respecteer ze.", tag: "fr-ordre" },
      { t: "match", p: [["quoique", "hoewel"], ["quoi que", "wat ook"], ["où que", "waar ook"], ["quiconque", "al wie"], ["tel quel", "zoals het is"]], tag: "fr-quelque" }
    ],
    reading: {
      t: "Faut-il simplifier l'orthographe ?", type: "Column",
      p: [
        ["Quelque trois cents millions de personnes écrivent le français, et toutes, ou presque, hésitent devant les mêmes mots. Quoique l'orthographe soit enseignée dès l'âge de six ans, même les étudiants font des fautes que leurs grands-parents n'auraient pas commises. Faut-il donc tout simplifier ?", "Zo'n driehonderd miljoen mensen schrijven Frans, en allemaal, of bijna allemaal, aarzelen ze bij dezelfde woorden. Hoewel spelling vanaf zesjarige leeftijd wordt onderwezen, maken zelfs studenten fouten die hun grootouders niet gemaakt zouden hebben. Moeten we dan alles vereenvoudigen?"],
        ["Les partisans de la réforme rappellent que certaines règles sont tout à fait arbitraires. Pourquoi « toute petite » mais « tout étonnée » ? Quelle que soit l'explication, disent-ils, on perd des centaines d'heures à apprendre des exceptions. Leurs adversaires répondent qu'une langue n'est pas un outil quelconque : elle porte une histoire.", "De voorstanders van hervorming wijzen erop dat sommige regels volkomen willekeurig zijn. Waarom 'toute petite' maar 'tout étonnée'? Wat de verklaring ook is, zeggen ze, je verliest honderden uren aan het leren van uitzonderingen. Hun tegenstanders antwoorden dat een taal niet zomaar een werktuig is: ze draagt een geschiedenis."],
        ["Quoi qu'on en pense, l'usage finira par trancher, comme il l'a toujours fait. En attendant, je continuerai, moi-même, à ouvrir le dictionnaire, tout en sachant que mes petits-enfants écriront peut-être « ognon » sans rougir.", "Wat men er ook van denkt, het gebruik zal uiteindelijk beslissen, zoals het altijd heeft gedaan. In de tussentijd blijf ikzelf het woordenboek openslaan, in de wetenschap dat mijn kleinkinderen misschien 'ognon' zullen schrijven zonder te blozen."]
      ],
      gl: [["hésiter", "aarzelen"], ["le partisan", "de voorstander"], ["arbitraire", "willekeurig"], ["l'outil", "het werktuig"], ["trancher", "de knoop doorhakken"]],
      q: [
        { t: "mc", q: "Que signifie « quelque trois cents millions » ?", o: ["Environ trois cents millions", "Quelques-uns des trois cents millions", "Plus de trois cents millions"] },
        { t: "mc", q: "Quel est l'argument des adversaires de la réforme ?", o: ["Une langue porte une histoire", "Les règles sont arbitraires", "On perd des heures à l'école"] },
        { t: "mc", q: "Selon l'auteur, qui décidera finalement ?", o: ["L'usage", "L'Académie", "Les professeurs"] }
      ]
    },
    say: [["Quoi qu'il en soit, la décision est prise.", "Hoe het ook zij, de beslissing is genomen."], ["Quelle que soit ta décision, je te soutiendrai.", "Wat je beslissing ook is, ik zal je steunen."], ["Elle était toute surprise et tout émue.", "Ze was heel verrast en heel ontroerd."], ["Même les meilleurs se trompent.", "Zelfs de besten vergissen zich."]],
    task: { nl: "Schrijf 5 zinnen over een belofte die je iemand doet. Gebruik quoi que, quel(le) que soit, où que, en twee keer tout (één keer als bijwoord vóór een vrouwelijk bijvoeglijk naamwoord).", model: "Quoi qu'il arrive, je serai là pour toi. Quelles que soient les difficultés, nous les traverserons ensemble. Où que tu ailles, tu pourras m'appeler. Ta mère était toute contente quand je le lui ai dit, et même tout émue. Tous tes amis pensent la même chose." },
    scenario: { nl: "Een redacteur in Montréal kijkt je Franse tekst na en legt de terugkerende spelfouten uit.", role: "You are Chloé, an editor at a magazine in Montréal, kind but precise. You are proofreading the learner's article. Quote short phrases containing typical mistakes (quoique/quoi que, quelque/quel que soit, tout/toute before a feminine adjective, même/mêmes) and ask the learner which spelling is right and why. Give them the quick tests (replace by bien que; is it followed by soit?). Admit that native speakers make these mistakes too. Ask them to produce two correct sentences of their own.", goal: "Leg het verschil uit tussen quoique en quoi que, en maak één correcte zin met quel(le) que soit en één met toute + bijvoeglijk naamwoord." }
  });
})(window.SPT);
