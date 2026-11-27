/* Frans voor Nederlandstaligen — niveau A2, units 1–5 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-pc-avoir': 'passé composé met avoir', 'fr-pp': 'voltooid deelwoord (parlé, fini, pris…)', 'fr-pc-etre': 'passé composé met être (+ aanpassing)', 'fr-pc-refl': 'passé composé van wederkerende werkwoorden',
    'fr-imparfait': 'imparfait (vorm en gebruik)', 'fr-mal': 'avoir mal à + lichaamsdeel', 'fr-ilfaut': 'il faut / devoir', 'fr-depuis': 'depuis + tegenwoordige tijd',
    'fr-cod': 'le, la, les als voornaamwoord', 'fr-en': 'en (ervan / er … van)', 'fr-resto': 'bestellen in een restaurant'
  });

  /* ───────────────────────── A2 · 1 ───────────────────────── */
  U({
    id: "fr-a2-01", level: "A2", icon: "📅", title: "Le week-end dernier", nl: "Vertellen wat je gedaan hebt",
    goals: ["Vertellen wat je gisteren of vorig weekend gedaan hebt", "De passé composé met avoir maken", "Regelmatige en onregelmatige voltooide deelwoorden gebruiken", "Ontkennen in de verleden tijd"],
    vocab: [
      ["hier", "gisteren"], ["hier soir", "gisteravond"], ["avant-hier", "eergisteren"], ["la semaine dernière", "vorige week"], ["le week-end dernier", "vorig weekend"], ["l'année dernière", "vorig jaar"],
      ["déjà", "al"], ["pas encore", "nog niet"], ["visiter", "bezoeken (een plaats)"], ["rencontrer", "ontmoeten"], ["passer", "doorbrengen"], ["oublier", "vergeten"],
      ["perdre", "verliezen / kwijtraken"], ["trouver", "vinden"], ["attendre", "wachten (op)"], ["répondre", "antwoorden"], ["choisir", "kiezen"], ["réserver", "reserveren"],
      ["le concert", "het concert"], ["l'exposition", "de tentoonstelling"], ["le billet", "het kaartje"], ["la soirée", "de avond / het feestje"], ["le marché aux puces", "de rommelmarkt"],
      ["j'ai fait", "ik heb gedaan / gemaakt"], ["j'ai pris", "ik heb genomen"], ["j'ai vu", "ik heb gezien"], ["j'ai eu", "ik heb gehad"], ["j'ai été", "ik ben geweest"],
      ["j'ai bu", "ik heb gedronken"], ["j'ai lu", "ik heb gelezen"], ["j'ai dit", "ik heb gezegd"], ["j'ai mis", "ik heb gezet / aangetrokken"], ["C'était super !", "Het was geweldig!"]
    ],
    grammar: [
      { t: "Passé composé met avoir", es: "Le passé composé avec avoir",
        html: `<p>Met de <b>passé composé</b> vertel je wat er gebeurd is. Je maakt hem net als de Nederlandse voltooide tijd: <b>avoir</b> in de tegenwoordige tijd + <b>voltooid deelwoord</b>. <i>J'<b>ai mangé</b></i> = ik heb gegeten.</p>
<p><b>Let op, anders dan in het Nederlands:</b> het Frans gebruikt de passé composé ook waar wij de gewone verleden tijd zeggen. <i>Hier, j'ai mangé une pizza</i> = Gisteren <u>at</u> ik een pizza. In gesproken Frans is dit dé verleden tijd voor wat er gebeurde.</p>
<p>Het voltooid deelwoord staat <b>direct achter avoir</b>, niet aan het eind van de zin zoals in het Nederlands: <i>J'ai <b>regardé</b> un film</i> (ik heb een film <u>gekeken</u>).</p>
<p>Zo maak je het regelmatige deelwoord:</p>
<p><b>-er → -é</b> (parler → parlé) · <b>-ir → -i</b> (finir → fini) · <b>-re → -u</b> (attendre → attendu)</p>`,
        table: [["", "avoir", "deelwoord"], ["j'", "ai", "parlé"], ["tu", "as", "parlé"], ["il / elle / on", "a", "parlé"], ["nous", "avons", "parlé"], ["vous", "avez", "parlé"], ["ils / elles", "ont", "parlé"]],
        ex: [["Hier, j'ai travaillé à la maison.", "Gisteren heb ik thuis gewerkt."], ["Nous avons choisi un bon restaurant.", "We hebben een goed restaurant gekozen."], ["Ils ont attendu le bus.", "Ze hebben op de bus gewacht."]] },
      { t: "Onregelmatige voltooide deelwoorden", es: "Les participes passés irréguliers",
        html: `<p>⚠️ <b>Uitzondering:</b> juist de meest gebruikte werkwoorden hebben een eigen voltooid deelwoord dat je niet met de regel kunt maken. <b>Waarom?</b> Het zijn heel oude, veelgebruikte werkwoorden; ze zijn in de loop van de eeuwen afgesleten tot korte vormen (net als in het Nederlands: <i>zijn → geweest</i>, <i>doen → gedaan</i>).</p>
<p>Leer ze als vaste paren. Veel korte eindigen op <b>-u</b>: <i>vu, bu, lu, eu, pu, voulu, dû</i>. Een groepje eindigt op <b>-is</b>: <i>pris, mis</i> (en <i>appris, compris</i>). En <i>fait</i> en <i>dit</i> eindigen op <b>-t</b>.</p>
<p>⚠️ <b>Let op de uitspraak:</b> <i>eu</i> spreek je uit als <b>[u]</b> (zoals in het Nederlandse <i>nu</i>), niet als «eu».</p>
<p>⚠️ <b>Uitzondering:</b> <i>être</i> krijgt als hulpwerkwoord <b>avoir</b>: <i>j'<b>ai</b> été</i>. In het Nederlands zeg je «ik <u>ben</u> geweest», in het Frans letterlijk «ik <u>heb</u> geweest».</p>`,
        table: [["werkwoord", "deelwoord", "voorbeeld"], ["faire", "fait", "j'ai fait"], ["prendre", "pris", "j'ai pris"], ["mettre", "mis", "j'ai mis"], ["voir", "vu", "j'ai vu"], ["boire", "bu", "j'ai bu"], ["lire", "lu", "j'ai lu"], ["avoir", "eu", "j'ai eu"], ["être", "été", "j'ai été"], ["dire", "dit", "j'ai dit"], ["pouvoir", "pu", "j'ai pu"]],
        ex: [["Qu'est-ce que tu as fait hier ?", "Wat heb je gisteren gedaan?"], ["J'ai vu un très bon film.", "Ik heb een heel goede film gezien."], ["Elle a pris le train de huit heures.", "Ze heeft de trein van acht uur genomen."]] },
      { t: "Ontkenning en bijwoorden in de passé composé", es: "La négation au passé composé",
        html: `<p>In de passé composé komen <b>ne … pas</b> om het <b>hulpwerkwoord</b> heen, niet om het deelwoord: <i>Je <b>n'ai pas</b> mangé</i>. Het deelwoord komt daarna.</p>
<p>Hetzelfde geldt voor <i>ne … jamais</i> (nooit) en <i>ne … rien</i> (niets): <i>Je n'ai <b>jamais</b> visité Lyon</i>, <i>Il n'a <b>rien</b> dit</i>.</p>
<p>Korte bijwoorden zoals <b>déjà</b> (al), <b>bien</b>, <b>beaucoup</b>, <b>trop</b> en <b>encore</b> staan ook tussen avoir en het deelwoord: <i>J'ai <b>déjà</b> vu ce film</i>, <i>Nous avons <b>bien</b> mangé</i>.</p>
<p>In gesproken Frans valt <i>ne</i> vaak weg: <i>J'ai pas mangé</i>. Schrijf het wel altijd.</p>`,
        table: [["bevestigend", "ontkennend"], ["J'ai mangé.", "Je n'ai pas mangé."], ["Tu as vu le film.", "Tu n'as pas vu le film."], ["Elle a tout compris.", "Elle n'a rien compris."], ["On a déjà réservé.", "On n'a pas encore réservé."]],
        ex: [["Je n'ai pas trouvé mon billet.", "Ik heb mijn kaartje niet gevonden."], ["Vous avez déjà visité le musée ?", "Hebt u het museum al bezocht?"], ["Non, pas encore.", "Nee, nog niet."]] }
    ],
    dialogue: {
      t: "Lundi matin au bureau", place: "Lyon 🇫🇷",
      lines: [
        ["Karim", "Salut Sanne ! Tu as passé un bon week-end ?", "Hoi Sanne! Heb je een goed weekend gehad?"],
        ["Sanne", "Oui, super ! Samedi, j'ai visité le Vieux Lyon avec une amie.", "Ja, geweldig! Zaterdag heb ik het oude centrum van Lyon bezocht met een vriendin."],
        ["Karim", "Vous avez mangé dans un bouchon ?", "Hebben jullie in een bouchon gegeten?"],
        ["Sanne", "Oui, nous avons pris le menu du jour. On a très bien mangé !", "Ja, we hebben het dagmenu genomen. We hebben heel lekker gegeten!"],
        ["Karim", "Et dimanche, qu'est-ce que tu as fait ?", "En zondag, wat heb je gedaan?"],
        ["Sanne", "J'ai été au marché aux puces et j'ai trouvé un vieux livre. Et toi ?", "Ik ben naar de rommelmarkt geweest en ik heb een oud boek gevonden. En jij?"],
        ["Karim", "Moi, j'ai vu un concert samedi soir. Mais j'ai perdu mon téléphone !", "Ik heb zaterdagavond een concert gezien. Maar ik ben mijn telefoon kwijtgeraakt!"],
        ["Sanne", "Oh non ! Tu n'as pas encore trouvé ton téléphone ?", "O nee! Heb je je telefoon nog niet gevonden?"],
        ["Karim", "Non, j'ai cherché partout. J'ai déjà acheté un nouveau téléphone ce matin.", "Nee, ik heb overal gezocht. Ik heb vanochtend al een nieuwe telefoon gekocht."]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce que Sanne a fait samedi ?", o: ["Elle a visité le Vieux Lyon", "Elle a vu un concert", "Elle a travaillé"] },
        { t: "mc", q: "Qu'est-ce que Sanne a trouvé au marché aux puces ?", o: ["Un vieux livre", "Un téléphone", "Un billet"] },
        { t: "mc", q: "Qu'est-ce que Karim a perdu ?", o: ["Son téléphone", "Son livre", "Son billet de concert"] }
      ]
    },
    culture: { t: "Bouchons in Lyon en het Franse weekend", html: `<p><b>Lyon</b> noemt zichzelf de gastronomische hoofdstad van Frankrijk. In een <b>bouchon</b>, een klein traditioneel restaurant, eet je stevige streekgerechten aan geruite tafelkleedjes.</p>
<p>Op maandagochtend is <i>«Tu as passé un bon week-end ?»</i> de standaardvraag op het werk. Je antwoordt kort en vraagt het terug: <i>«Oui, très bien, et toi ?»</i></p>
<p>Op zondag zijn veel winkels in Frankrijk dicht, maar de <b>marché</b> en de <b>marché aux puces</b> (rommelmarkt, letterlijk «vlooienmarkt») zijn dan juist druk.</p>` },
    ex: [
      { t: "cloze", s: "Hier, j'___ regardé un film.", a: ["ai"], o: ["ai", "as", "a"], nl: "Gisteren heb ik een film gekeken.", tag: "fr-pc-avoir" },
      { t: "cloze", s: "Nous ___ visité le musée.", a: ["avons"], o: ["avons", "avez", "ont"], nl: "We hebben het museum bezocht.", tag: "fr-pc-avoir" },
      { t: "cloze", s: "Ils ont ___ le bus.", a: ["attendu"], o: ["attendu", "attendé", "attendi"], nl: "Ze hebben op de bus gewacht.", x: "Werkwoorden op -re krijgen -u: attendre → attendu.", tag: "fr-pp" },
      { t: "cloze", s: "Tu as ___ ton travail ?", a: ["fini"], o: ["fini", "finu", "finé"], nl: "Heb je je werk af?", x: "Werkwoorden op -ir krijgen -i: finir → fini.", tag: "fr-pp" },
      { t: "cloze", s: "Qu'est-ce que tu as ___ hier ?", a: ["fait"], o: ["fait", "fais", "faité"], nl: "Wat heb je gisteren gedaan?", x: "Uitzondering: faire → fait (onregelmatig deelwoord).", tag: "fr-pp" },
      { t: "cloze", s: "Elle a ___ le train.", a: ["pris"], o: ["pris", "prendu", "prené"], nl: "Ze heeft de trein genomen.", x: "Uitzondering: prendre → pris, niet «prendu».", tag: "fr-pp" },
      { t: "cloze", s: "J'ai ___ un bon livre.", a: ["lu"], o: ["lu", "li", "lit"], nl: "Ik heb een goed boek gelezen.", x: "Uitzondering: lire → lu.", tag: "fr-pp" },
      { t: "cloze", s: "Je n'ai ___ mangé ce matin.", a: ["pas"], o: ["pas", "ne", "non"], nl: "Ik heb vanochtend niet gegeten.", tag: "fr-pc-avoir" },
      { t: "mc", q: "Hoe zeg je «ik ben in Parijs geweest»?", o: ["J'ai été à Paris.", "Je suis été à Paris.", "J'ai être à Paris."], x: "Uitzondering t.o.v. het Nederlands: être krijgt avoir (j'ai été).", tag: "fr-pc-avoir" },
      { t: "mc", q: "Welke zin is goed?", o: ["J'ai déjà vu ce film.", "J'ai vu déjà ce film.", "Je déjà ai vu ce film."], x: "Déjà staat tussen avoir en het deelwoord.", tag: "fr-pc-avoir" },
      { t: "mc", q: "Wat is het voltooid deelwoord van «avoir»?", o: ["eu", "avu", "été"], x: "Uitzondering: avoir → eu (uitspraak: [u]).", tag: "fr-pp" },
      { t: "tr", nl: "Ik heb een film gezien.", a: ["J'ai vu un film."], tag: "fr-pp" },
      { t: "tr", nl: "We hebben heel lekker gegeten.", a: ["Nous avons très bien mangé.", "On a très bien mangé."], tag: "fr-pc-avoir" },
      { t: "tr", nl: "Hij heeft niets gezegd.", a: ["Il n'a rien dit."], tag: "fr-pp" },
      { t: "tr", nl: "Heb je een goed weekend gehad?", a: ["Tu as passé un bon week-end ?", "Est-ce que tu as passé un bon week-end ?", "As-tu passé un bon week-end ?"], tag: "fr-voc" },
      { t: "order", s: "Je n'ai pas encore trouvé mon billet.", nl: "Ik heb mijn kaartje nog niet gevonden.", tag: "fr-ordre" },
      { t: "match", p: [["faire", "fait"], ["prendre", "pris"], ["voir", "vu"], ["boire", "bu"], ["être", "été"]], tag: "fr-pp" }
    ],
    reading: {
      t: "Un samedi à Lyon", type: "Bericht aan een vriend",
      p: [
        ["Salut Thomas ! Samedi, j'ai passé une journée super à Lyon. Le matin, j'ai pris le train de sept heures et j'ai lu mon livre pendant le voyage.", "Hoi Thomas! Zaterdag heb ik een geweldige dag in Lyon gehad. 's Ochtends heb ik de trein van zeven uur genomen en tijdens de reis heb ik mijn boek gelezen."],
        ["À midi, j'ai rencontré Camille. Nous avons mangé dans un petit restaurant et nous avons bu un verre de vin rouge. Après, nous avons visité une exposition de photos.", "Om twaalf uur heb ik Camille ontmoet. We hebben in een klein restaurant gegeten en een glas rode wijn gedronken. Daarna hebben we een fototentoonstelling bezocht."],
        ["Le soir, j'ai voulu acheter un cadeau pour toi, mais je n'ai rien trouvé. Désolé ! Et toi, qu'est-ce que tu as fait ?", "'s Avonds heb ik een cadeau voor je willen kopen, maar ik heb niets gevonden. Sorry! En jij, wat heb jij gedaan?"]
      ],
      gl: [["la journée", "de dag (van begin tot eind)"], ["pendant", "tijdens"], ["un verre de vin", "een glas wijn"], ["le cadeau", "het cadeau"], ["j'ai voulu", "ik heb gewild"]],
      q: [
        { t: "mc", q: "Qu'est-ce qu'il a fait pendant le voyage ?", o: ["Il a lu son livre", "Il a dormi", "Il a travaillé"] },
        { t: "mc", q: "Qu'est-ce qu'ils ont visité ?", o: ["Une exposition de photos", "Un marché aux puces", "Un concert"] },
        { t: "mc", q: "Il a trouvé un cadeau ?", o: ["Non, il n'a rien trouvé", "Oui, un livre", "Oui, une photo"] }
      ]
    },
    say: [["Qu'est-ce que tu as fait hier ?", "Wat heb je gisteren gedaan?"], ["J'ai passé un très bon week-end.", "Ik heb een heel goed weekend gehad."], ["Je n'ai pas encore mangé.", "Ik heb nog niet gegeten."], ["Nous avons vu un film.", "We hebben een film gezien."]],
    task: { nl: "Vertel in 4 of 5 zinnen wat je vorig weekend gedaan hebt. Gebruik de passé composé.", model: "Samedi, j'ai fait les courses et j'ai rencontré une amie en ville. Nous avons bu un café. Le soir, j'ai regardé un film. Dimanche, je n'ai rien fait : j'ai lu un livre à la maison." },
    scenario: { nl: "Het is maandagochtend. Je Franse collega in Lyon vraagt naar je weekend.", role: "You are Karim, a friendly colleague in Lyon. It is Monday morning. Ask the learner what they did last weekend, react with interest, ask one or two follow-up questions, and tell them briefly about your own weekend. Use tu and simple French in the passé composé.", goal: "Vertel wat je zaterdag en zondag gedaan hebt en vraag wat je collega gedaan heeft." }
  });

  /* ───────────────────────── A2 · 2 ───────────────────────── */
  U({
    id: "fr-a2-02", level: "A2", icon: "🧳", title: "En voyage", nl: "Op reis: vertrekken, aankomen en terugkomen",
    goals: ["Over een reis vertellen", "De passé composé met être maken", "Het deelwoord aanpassen aan het onderwerp", "Wederkerende werkwoorden in de verleden tijd gebruiken"],
    vocab: [
      ["le voyage", "de reis"], ["les vacances", "de vakantie"], ["la valise", "de koffer"], ["le passeport", "het paspoort"], ["l'aéroport", "het vliegveld"], ["l'avion", "het vliegtuig"],
      ["le vol", "de vlucht"], ["le quai", "het perron"], ["l'aller-retour", "het retourtje"], ["en retard", "te laat"], ["à l'heure", "op tijd"], ["la plage", "het strand"],
      ["arriver", "aankomen"], ["partir", "vertrekken"], ["entrer", "binnengaan"], ["sortir", "naar buiten gaan / uitgaan"], ["monter", "naar boven gaan / instappen"], ["descendre", "naar beneden gaan / uitstappen"],
      ["rester", "blijven"], ["tomber", "vallen"], ["rentrer", "naar huis gaan / terugkomen"], ["retourner", "teruggaan"], ["naître", "geboren worden"], ["mourir", "sterven"],
      ["devenir", "worden"], ["se promener", "wandelen"], ["se reposer", "uitrusten"], ["se perdre", "verdwalen"], ["s'amuser", "plezier hebben"], ["Bon voyage !", "Goede reis!"]
    ],
    grammar: [
      { t: "Passé composé met être", es: "Le passé composé avec être",
        html: `<p>⚠️ <b>Uitzondering:</b> een vaste groep van ongeveer vijftien werkwoorden maakt de passé composé niet met avoir maar met <b>être</b>: <i>Je <b>suis</b> allé</i> (ik ben gegaan).</p>
<p><b>Waarom?</b> Het zijn werkwoorden van <b>beweging of verandering</b> waarbij het onderwerp zelf ergens anders of iets anders wordt: gaan, komen, aankomen, vertrekken, geboren worden, sterven. Het Nederlands doet vaak hetzelfde (ik <u>ben</u> gekomen, ik <u>ben</u> gebleven), dus je gevoel helpt je meestal.</p>
<p>De lijst, in paren van tegengestelden: <b>aller / venir</b>, <b>arriver / partir</b>, <b>entrer / sortir</b>, <b>monter / descendre</b>, <b>naître / mourir</b>, plus <b>rester, tomber, retourner, rentrer, devenir, revenir</b>.</p>
<p>⚠️ <b>Let op, hier gaat je Nederlandse gevoel mis:</b> <i>être</i> zelf krijgt avoir (<i>j'ai été</i>), en gewone bewegingswerkwoorden zoals <i>marcher, courir, voyager</i> ook: <i>J'<b>ai</b> marché</i>, <i>j'<b>ai</b> voyagé</i>. Alleen de vaste lijst krijgt être.</p>
<p>Onregelmatige deelwoorden in deze groep: <i>venir → <b>venu</b></i>, <i>naître → <b>né</b></i>, <i>mourir → <b>mort</b></i>, <i>devenir → <b>devenu</b></i>.</p>`,
        table: [["", "être", "deelwoord"], ["je", "suis", "allé(e)"], ["tu", "es", "allé(e)"], ["il / elle", "est", "allé / allée"], ["nous", "sommes", "allé(e)s"], ["vous", "êtes", "allé(e)(s)"], ["ils / elles", "sont", "allés / allées"]],
        ex: [["Je suis arrivé à Marseille à midi.", "Ik ben om twaalf uur in Marseille aangekomen."], ["Elle est née à Marrakech.", "Ze is in Marrakech geboren."], ["Nous sommes restés trois jours.", "We zijn drie dagen gebleven."]] },
      { t: "Het deelwoord past zich aan bij être", es: "L'accord du participe passé",
        html: `<p>Bij <b>être</b> gedraagt het deelwoord zich als een bijvoeglijk naamwoord: het past zich aan het <b>onderwerp</b> aan. Vrouwelijk krijgt <b>-e</b>, meervoud <b>-s</b>, vrouwelijk meervoud <b>-es</b>.</p>
<p><i>Il est parti</i> · <i>Elle est parti<b>e</b></i> · <i>Ils sont parti<b>s</b></i> · <i>Elles sont parti<b>es</b></i>.</p>
<p>Meestal hoor je het verschil niet (<i>allé, allée, allés</i> klinken gelijk), maar je schrijft het wel. ⚠️ <b>Uitzondering in de uitspraak:</b> bij <i>mort → mort<b>e</b></i> hoor je de t wél.</p>
<p>Een vrouw schrijft dus <i>je suis allé<b>e</b></i>, een man <i>je suis allé</i>. Bij <b>on</b> in de betekenis «wij» mag je aanpassen: <i>on est allés</i>.</p>
<p><b>Let op:</b> bij <b>avoir</b> pas je het deelwoord niet aan het onderwerp aan: <i>Elle a mangé</i> (geen -e).</p>`,
        table: [["onderwerp", "zin"], ["Paul", "Paul est arrivé."], ["Marie", "Marie est arrivée."], ["Paul et Marie", "Ils sont arrivés."], ["Marie et Léa", "Elles sont arrivées."]],
        ex: [["Ma sœur est partie en vacances.", "Mijn zus is op vakantie gegaan."], ["Mes parents sont rentrés hier.", "Mijn ouders zijn gisteren thuisgekomen."]] },
      { t: "Wederkerende werkwoorden in de passé composé", es: "Les verbes pronominaux au passé composé",
        html: `<p><b>Alle</b> wederkerende werkwoorden (<i>se lever, se promener, s'amuser…</i>) krijgen <b>être</b>. Het wederkerend voornaamwoord staat vóór être: <i>Je <b>me suis</b> levé</i>.</p>
<p><b>Let op, anders dan in het Nederlands:</b> wij zeggen «ik <u>heb</u> me gewassen», het Frans zegt letterlijk «ik <u>ben</u> me gewassen»: <i>Je me <b>suis</b> lavé</i>.</p>
<p>Het deelwoord past zich hier ook aan het onderwerp aan: <i>Elle s'est levé<b>e</b></i>, <i>Nous nous sommes promené<b>s</b></i>.</p>
<p>Ontkenning: <i>ne</i> komt vóór het wederkerend voornaamwoord, <i>pas</i> na être: <i>Je <b>ne</b> me suis <b>pas</b> reposé</i>.</p>`,
        table: [["", "vorm"], ["je", "me suis amusé(e)"], ["tu", "t'es amusé(e)"], ["il / elle", "s'est amusé / amusée"], ["nous", "nous sommes amusé(e)s"], ["vous", "vous êtes amusé(e)(s)"], ["ils / elles", "se sont amusés / amusées"]],
        ex: [["Je me suis levé à six heures.", "Ik ben om zes uur opgestaan."], ["Nous nous sommes perdus dans la médina.", "We zijn verdwaald in de medina."], ["Elle ne s'est pas reposée.", "Ze heeft niet uitgerust."]] }
    ],
    dialogue: {
      t: "De retour de vacances", place: "Marseille 🇫🇷",
      lines: [
        ["Inès", "Tom ! Tu es rentré quand ?", "Tom! Wanneer ben je teruggekomen?"],
        ["Tom", "Je suis rentré hier soir. Nous sommes allés au Maroc, à Marrakech.", "Ik ben gisteravond thuisgekomen. We zijn naar Marokko gegaan, naar Marrakech."],
        ["Inès", "Génial ! Vous êtes partis en avion ?", "Geweldig! Zijn jullie met het vliegtuig vertrokken?"],
        ["Tom", "Oui. Mais le vol est parti en retard et nous sommes arrivés à minuit.", "Ja. Maar de vlucht is te laat vertrokken en we zijn om middernacht aangekomen."],
        ["Inès", "Et vous êtes restés combien de temps ?", "En hoe lang zijn jullie gebleven?"],
        ["Tom", "Une semaine. Le premier jour, nous nous sommes perdus dans la médina !", "Een week. De eerste dag zijn we verdwaald in de medina!"],
        ["Inès", "Ça ne m'étonne pas. Ma mère est née à Marrakech, et elle se perd encore.", "Dat verbaast me niet. Mijn moeder is in Marrakech geboren, en ze verdwaalt nog steeds."],
        ["Tom", "Ma copine est tombée dans la rue, mais ce n'est pas grave. On s'est bien amusés.", "Mijn vriendin is op straat gevallen, maar het is niet erg. We hebben veel plezier gehad."],
        ["Inès", "Vous êtes montés dans les montagnes de l'Atlas ?", "Zijn jullie het Atlasgebergte in gegaan?"],
        ["Tom", "Non, pas cette fois. Nous allons retourner au Maroc l'année prochaine !", "Nee, deze keer niet. We gaan volgend jaar terug naar Marokko!"]
      ],
      q: [
        { t: "mc", q: "Où est-ce que Tom est allé ?", o: ["Au Maroc", "En Tunisie", "À Marseille"] },
        { t: "mc", q: "À quelle heure sont-ils arrivés ?", o: ["À minuit", "À midi", "Le matin"] },
        { t: "mc", q: "Qu'est-ce qui s'est passé le premier jour ?", o: ["Ils se sont perdus", "Ils sont montés dans l'Atlas", "Ils sont rentrés"] }
      ]
    },
    culture: { t: "Marseille, Marokko en de grote vakantie", html: `<p><b>Marseille</b> is de poort naar de Middellandse Zee. Veel inwoners hebben familie in Marokko, Algerije of Tunesië; in de zomer vertrekken er volle veerboten en vliegtuigen naar de overkant.</p>
<p>In <b>Marokko</b> is Frans geen officiële taal, maar je komt er in steden, winkels en hotels heel ver mee. Een <b>médina</b> is de oude, ommuurde binnenstad vol smalle steegjes: verdwalen hoort erbij.</p>
<p>🏖️ Fransen nemen massaal vakantie in juli en augustus. Wie in juli gaat, heet een <i>juillettiste</i>, wie in augustus gaat een <i>aoûtien</i>. Op de wisseldagen staat het vast op de <i>autoroute du Soleil</i>.</p>` },
    ex: [
      { t: "cloze", s: "Je ___ allé à Marseille.", a: ["suis"], o: ["suis", "ai", "es"], nl: "Ik ben naar Marseille gegaan.", x: "Uitzondering: aller hoort bij de groep met être.", tag: "fr-pc-etre" },
      { t: "cloze", s: "Nous ___ arrivés à minuit.", a: ["sommes"], o: ["sommes", "avons", "sont"], nl: "We zijn om middernacht aangekomen.", tag: "fr-pc-etre" },
      { t: "cloze", s: "Elle est ___ hier.", a: ["partie"], o: ["partie", "parti", "partis"], nl: "Ze is gisteren vertrokken.", x: "Bij être past het deelwoord zich aan: elle → -e.", tag: "fr-pc-etre" },
      { t: "cloze", s: "Mes parents sont ___ à la maison.", a: ["restés"], o: ["restés", "resté", "restées"], nl: "Mijn ouders zijn thuisgebleven.", x: "Mannelijk meervoud: -s.", tag: "fr-pc-etre" },
      { t: "cloze", s: "Hier, j'___ voyagé en train.", a: ["ai"], o: ["ai", "suis", "es"], nl: "Gisteren heb ik met de trein gereisd.", x: "Let op: voyager is beweging, maar staat niet op de être-lijst. Dus avoir.", tag: "fr-pc-avoir" },
      { t: "cloze", s: "Ma grand-mère est ___ à Marrakech.", a: ["née"], o: ["née", "né", "naîtrée"], nl: "Mijn oma is in Marrakech geboren.", x: "Uitzondering: naître → né (onregelmatig), hier + e voor vrouwelijk.", tag: "fr-pp" },
      { t: "cloze", s: "Je me ___ levé à sept heures.", a: ["suis"], o: ["suis", "ai", "est"], nl: "Ik ben om zeven uur opgestaan.", x: "Alle wederkerende werkwoorden krijgen être.", tag: "fr-pc-refl" },
      { t: "cloze", s: "Elles se sont bien ___.", a: ["amusées"], o: ["amusées", "amusé", "amusés"], nl: "Ze (vrouwen) hebben veel plezier gehad.", tag: "fr-pc-refl" },
      { t: "mc", q: "Welk werkwoord krijgt être in de passé composé?", o: ["venir", "manger", "marcher"], x: "Venir staat op de vaste être-lijst; marcher (lopen) niet.", tag: "fr-pc-etre" },
      { t: "mc", q: "Hoe zeg je «ik heb me gewassen»?", o: ["Je me suis lavé.", "Je m'ai lavé.", "J'ai me lavé."], x: "Anders dan in het Nederlands: wederkerend = altijd être.", tag: "fr-pc-refl" },
      { t: "mc", q: "Wat is het voltooid deelwoord van «venir»?", o: ["venu", "veni", "vené"], x: "Uitzondering: venir → venu.", tag: "fr-pp" },
      { t: "tr", nl: "Ik ben gisteravond thuisgekomen.", a: ["Je suis rentré hier soir.", "Je suis rentrée hier soir."], tag: "fr-pc-etre" },
      { t: "tr", nl: "We zijn een week gebleven.", a: ["Nous sommes restés une semaine.", "Nous sommes restées une semaine.", "On est restés une semaine.", "On est resté une semaine."], tag: "fr-pc-etre" },
      { t: "tr", nl: "De trein is te laat vertrokken.", a: ["Le train est parti en retard."], tag: "fr-pc-etre" },
      { t: "tr", nl: "Goede reis!", a: ["Bon voyage !"], tag: "fr-voc" },
      { t: "order", s: "Nous nous sommes promenés sur la plage.", nl: "We hebben op het strand gewandeld.", tag: "fr-ordre" },
      { t: "match", p: [["arriver", "partir"], ["entrer", "sortir"], ["monter", "descendre"], ["naître", "mourir"], ["aller", "venir"]], tag: "fr-pc-etre" }
    ],
    reading: {
      t: "Carte postale de Marrakech", type: "Ansichtkaart",
      p: [
        ["Chère Mamie, nous sommes bien arrivés à Marrakech ! L'avion est parti à l'heure et nous sommes descendus à l'hôtel vers quinze heures.", "Lieve oma, we zijn goed aangekomen in Marrakech! Het vliegtuig is op tijd vertrokken en we zijn rond drie uur 's middags in het hotel aangekomen."],
        ["Hier, nous sommes allés au marché et je me suis perdue dans les petites rues. Papa est monté sur un chameau et il est tombé, mais il s'est bien amusé !", "Gisteren zijn we naar de markt gegaan en ik ben verdwaald in de kleine straatjes. Papa is op een kameel geklommen en hij is gevallen, maar hij heeft veel plezier gehad!"],
        ["Aujourd'hui, nous sommes restés à la piscine et nous nous sommes reposés. Nous rentrons dimanche. Je t'embrasse, Léa", "Vandaag zijn we bij het zwembad gebleven en hebben we uitgerust. We komen zondag terug. Kusjes, Léa"]
      ],
      gl: [["Mamie", "oma (koosnaam)"], ["descendre à l'hôtel", "zijn intrek nemen in het hotel"], ["le chameau", "de kameel"], ["la piscine", "het zwembad"], ["Je t'embrasse", "kusjes (ik omhels je)"]],
      q: [
        { t: "mc", q: "L'avion est parti en retard ?", o: ["Non, à l'heure", "Oui, très en retard", "On ne sait pas"] },
        { t: "mc", q: "Qui est tombé ?", o: ["Papa", "Léa", "Mamie"] },
        { t: "mc", q: "Qu'est-ce qu'ils ont fait aujourd'hui ?", o: ["Ils se sont reposés à la piscine", "Ils sont allés au marché", "Ils sont rentrés"] }
      ]
    },
    say: [["Je suis allé au Maroc.", "Ik ben naar Marokko gegaan."], ["Nous sommes arrivés en retard.", "We zijn te laat aangekomen."], ["Je me suis bien amusé.", "Ik heb veel plezier gehad."], ["Tu es rentré quand ?", "Wanneer ben je teruggekomen?"]],
    task: { nl: "Schrijf een ansichtkaart (4 of 5 zinnen) over een reis: waar ben je heen gegaan, wanneer aangekomen, wat is er gebeurd?", model: "Chère Julie, je suis arrivée à Marseille lundi. Mardi, je suis allée à la plage et je me suis promenée dans le vieux port. Hier, je suis restée à l'hôtel parce qu'il a plu. Je rentre samedi. Bises !" },
    scenario: { nl: "Je bent net terug van vakantie en een vriendin in Marseille wil er alles over horen.", role: "You are Inès, a curious friend from Marseille whose family comes from Morocco. The learner just came back from a trip. Ask where they went, how they travelled, how long they stayed and whether anything funny happened. Use tu and simple French in the passé composé.", goal: "Vertel waar je heen bent gegaan, hoe lang je gebleven bent en één ding dat er gebeurd is." }
  });

  /* ───────────────────────── A2 · 3 ───────────────────────── */
  U({
    id: "fr-a2-03", level: "A2", icon: "🧸", title: "Quand j'étais petit", nl: "Vroeger: je jeugd en hoe het was",
    goals: ["Over je jeugd en vroeger vertellen", "De imparfait maken", "Gewoontes en beschrijvingen in het verleden geven", "Vroeger en nu vergelijken"],
    vocab: [
      ["l'enfance", "de kindertijd"], ["quand j'étais petit", "toen ik klein was"], ["à l'époque", "in die tijd"], ["autrefois", "vroeger"], ["avant", "vroeger / daarvoor"], ["maintenant", "nu"],
      ["tous les jours", "elke dag"], ["chaque été", "elke zomer"], ["souvent", "vaak"], ["d'habitude", "gewoonlijk"], ["le village", "het dorp"], ["la campagne", "het platteland"],
      ["la ferme", "de boerderij"], ["le jardin", "de tuin"], ["le voisin", "de buurman"], ["le jouet", "het speelgoed"], ["la bande dessinée", "het stripboek"], ["le dessin animé", "de tekenfilm"],
      ["l'école primaire", "de basisschool"], ["le maître / la maîtresse", "de meester / de juf"], ["la récréation", "het speelkwartier"], ["les bonbons", "de snoepjes"], ["le vélo", "de fiets"],
      ["jouer", "spelen"], ["grandir", "opgroeien"], ["habiter", "wonen"], ["se souvenir de", "zich herinneren"], ["raconter", "vertellen"], ["timide", "verlegen"], ["sage", "braaf"]
    ],
    grammar: [
      { t: "Imparfait: de vorm", es: "L'imparfait : formation",
        html: `<p>De <b>imparfait</b> is de tweede verleden tijd. Je maakt hem zo: neem de <b>nous-vorm</b> van de tegenwoordige tijd, haal <b>-ons</b> weg, en zet er de uitgangen <b>-ais, -ais, -ait, -ions, -iez, -aient</b> achter.</p>
<p><i>nous parl<s>ons</s> → je parl<b>ais</b></i> · <i>nous finiss<s>ons</s> → je finiss<b>ais</b></i> · <i>nous pren<s>ons</s> → je pren<b>ais</b></i> · <i>nous fais<s>ons</s> → je fais<b>ais</b></i>.</p>
<p>Fijn: <b>-ais, -ais, -ait en -aient klinken alle vier hetzelfde</b> (als «è»). En bijna alle werkwoorden zijn regelmatig, ook <i>avoir</i> (<i>j'avais</i>), <i>aller</i> (<i>j'allais</i>) en <i>faire</i> (<i>je faisais</i>).</p>
<p>⚠️ <b>De enige uitzondering: être.</b> De nous-vorm <i>sommes</i> eindigt niet op -ons, dus de regel werkt niet. De stam is <b>ét-</b>: <i>j'<b>étais</b>, tu étais, il était, nous étions, vous étiez, ils étaient</i>.</p>
<p>⚠️ <b>Spellinguitzondering:</b> bij werkwoorden op <b>-ger</b> en <b>-cer</b> blijft de e of de ç staan vóór een a, om de zachte klank te bewaren: <i>je mang<b>e</b>ais</i>, <i>je commen<b>ç</b>ais</i>. Maar: <i>nous mangions</i>, <i>nous commencions</i> (daar volgt een i, dus het is niet nodig).</p>`,
        table: [["", "parler", "être", "avoir"], ["je / j'", "parlais", "étais", "avais"], ["tu", "parlais", "étais", "avais"], ["il / elle / on", "parlait", "était", "avait"], ["nous", "parlions", "étions", "avions"], ["vous", "parliez", "étiez", "aviez"], ["ils / elles", "parlaient", "étaient", "avaient"]],
        ex: [["J'habitais dans un petit village.", "Ik woonde in een klein dorp."], ["Nous avions un grand jardin.", "We hadden een grote tuin."], ["Mes grands-parents étaient très gentils.", "Mijn grootouders waren heel aardig."]] },
      { t: "Imparfait: wanneer gebruik je hem?", es: "L'imparfait : emploi",
        html: `<p>De imparfait gebruik je voor de <b>achtergrond</b> in het verleden, niet voor wat er op één moment gebeurde:</p>
<p>1. <b>Gewoontes</b>: wat je vroeger regelmatig deed. <i>Tous les étés, nous <b>allions</b> chez ma grand-mère.</i> (Elke zomer gingen we naar mijn oma.)</p>
<p>2. <b>Beschrijvingen</b>: hoe iets of iemand was, het weer, je leeftijd, je gevoel. <i>Il <b>faisait</b> beau. J'<b>avais</b> dix ans. La maison <b>était</b> grande.</i></p>
<p>Signaalwoorden: <i>quand j'étais petit, autrefois, à l'époque, tous les jours, souvent, d'habitude, chaque été</i>.</p>
<p><b>Let op:</b> het Nederlands heeft maar één eenvoudige verleden tijd (<i>ik speelde</i>). In het Frans moet je kiezen: <i>je jouais</i> (ik speelde altijd / was aan het spelen) of <i>j'ai joué</i> (ik heb één keer gespeeld, klaar). Meer daarover in unit 9.</p>`,
        table: [["gebruik", "voorbeeld", "vertaling"], ["gewoonte", "Je jouais dehors tous les jours.", "Ik speelde elke dag buiten."], ["beschrijving", "Le village était très calme.", "Het dorp was heel rustig."], ["leeftijd", "J'avais huit ans.", "Ik was acht."], ["weer", "Il neigeait souvent.", "Het sneeuwde vaak."]],
        ex: [["Quand j'étais petite, je lisais beaucoup de bandes dessinées.", "Toen ik klein was, las ik veel stripboeken."], ["Avant, on n'avait pas de téléphone portable.", "Vroeger hadden we geen mobiele telefoon."]] }
    ],
    dialogue: {
      t: "Chez la grand-mère", place: "Namur 🇧🇪",
      lines: [
        ["Lucas", "Mamie, tu habitais où quand tu étais petite ?", "Oma, waar woonde je toen je klein was?"],
        ["Mamie", "J'habitais dans une ferme, à la campagne. Nous étions six enfants.", "Ik woonde op een boerderij, op het platteland. We waren met zes kinderen."],
        ["Lucas", "Six ! Et vous aviez une télévision ?", "Zes! En hadden jullie een televisie?"],
        ["Mamie", "Non, on n'avait pas de télévision. Le soir, mon père racontait des histoires.", "Nee, we hadden geen televisie. 's Avonds vertelde mijn vader verhalen."],
        ["Lucas", "Et tu allais à l'école en voiture ?", "En ging je met de auto naar school?"],
        ["Mamie", "Mais non ! J'allais à l'école à vélo, même quand il neigeait.", "Welnee! Ik ging met de fiets naar school, zelfs als het sneeuwde."],
        ["Lucas", "Tu étais sage à l'école ?", "Was je braaf op school?"],
        ["Mamie", "Pas toujours. Je parlais trop et la maîtresse n'était pas contente.", "Niet altijd. Ik praatte te veel en de juf was niet blij."],
        ["Lucas", "Qu'est-ce que vous mangiez le dimanche ?", "Wat aten jullie op zondag?"],
        ["Mamie", "Le dimanche, ma mère faisait des gaufres. C'était délicieux !", "Op zondag bakte mijn moeder wafels. Het was heerlijk!"]
      ],
      q: [
        { t: "mc", q: "Où habitait Mamie quand elle était petite ?", o: ["Dans une ferme", "En ville", "Dans un appartement"] },
        { t: "mc", q: "Comment est-ce qu'elle allait à l'école ?", o: ["À vélo", "En voiture", "En bus"] },
        { t: "mc", q: "Que faisait sa mère le dimanche ?", o: ["Des gaufres", "Des crêpes", "Des histoires"] }
      ]
    },
    culture: { t: "Strips, wafels en «septante»", html: `<p><b>België</b> is het land van de <b>bande dessinée</b> (BD): Kuifje (<i>Tintin</i>), de Smurfen (<i>les Schtroumpfs</i>), Guust (<i>Gaston Lagaffe</i>) en Robbedoes (<i>Spirou</i>) komen er allemaal vandaan. In het Frans heet de strip «de negende kunst».</p>
<p>Een Waalse oma zegt <i>septante</i> (70) en <i>nonante</i> (90), en eet 's middags <i>le dîner</i> en 's avonds <i>le souper</i>. In Frankrijk is <i>le dîner</i> juist het avondeten.</p>
<p>🧇 Er zijn twee beroemde Belgische wafels: de luchtige <i>gaufre de Bruxelles</i> en de zoete, stevige <i>gaufre de Liège</i> met parelsuiker.</p>` },
    ex: [
      { t: "cloze", s: "Quand j'___ petit, j'habitais à la campagne.", a: ["étais"], o: ["étais", "était", "ai été"], nl: "Toen ik klein was, woonde ik op het platteland.", x: "Uitzondering: être is het enige werkwoord met een eigen imparfait-stam (ét-).", tag: "fr-imparfait" },
      { t: "cloze", s: "Nous ___ un grand jardin.", a: ["avions"], o: ["avions", "avons", "aviez"], nl: "We hadden een grote tuin.", tag: "fr-imparfait" },
      { t: "cloze", s: "Tous les jours, je ___ au foot.", a: ["jouais"], o: ["jouais", "joué", "jouait"], nl: "Elke dag speelde ik voetbal.", tag: "fr-imparfait" },
      { t: "cloze", s: "Mes parents ___ beaucoup.", a: ["travaillaient"], o: ["travaillaient", "travaillait", "travaillais"], nl: "Mijn ouders werkten veel.", x: "Ils/elles: -aient (klinkt hetzelfde als -ait).", tag: "fr-imparfait" },
      { t: "cloze", s: "Le dimanche, nous ___ des gaufres.", a: ["mangions"], o: ["mangions", "mangeions", "mangons"], nl: "Op zondag aten we wafels.", x: "Vóór een i is de extra e niet nodig: nous mangions.", tag: "fr-imparfait" },
      { t: "cloze", s: "Je ___ trop de bonbons.", a: ["mangeais"], o: ["mangeais", "mangais", "mangeai"], nl: "Ik at te veel snoepjes.", x: "Spellinguitzondering: de e blijft vóór een a, anders klinkt de g hard.", tag: "fr-imparfait" },
      { t: "cloze", s: "Il ___ beau et nous étions contents.", a: ["faisait"], o: ["faisait", "a fait", "fait"], nl: "Het was mooi weer en we waren blij.", x: "Beschrijving van het weer: imparfait.", tag: "fr-imparfait" },
      { t: "cloze", s: "Vous ___ où à l'époque ?", a: ["habitiez"], o: ["habitiez", "habitez", "habitaient"], nl: "Waar woonden jullie in die tijd?", tag: "fr-imparfait" },
      { t: "mc", q: "Hoe vind je de stam van de imparfait?", o: ["nous-vorm zonder -ons", "infinitief zonder -er", "je-vorm zonder -e"], tag: "fr-imparfait" },
      { t: "mc", q: "Welke zin beschrijft een gewoonte van vroeger?", o: ["J'allais à l'école à vélo.", "Je suis allé à l'école à vélo.", "Je vais à l'école à vélo."], tag: "fr-imparfait" },
      { t: "mc", q: "Welke vorm is goed?", o: ["je commençais", "je commencais", "je commenceais"], x: "Spellinguitzondering: c wordt ç vóór een a.", tag: "fr-imparfait" },
      { t: "tr", nl: "Ik was acht jaar.", a: ["J'avais huit ans."], tag: "fr-imparfait" },
      { t: "tr", nl: "We hadden geen televisie.", a: ["Nous n'avions pas de télévision.", "On n'avait pas de télévision.", "Nous n'avions pas de télé.", "On n'avait pas de télé."], tag: "fr-imparfait" },
      { t: "tr", nl: "Het was heerlijk!", a: ["C'était délicieux !"], tag: "fr-imparfait" },
      { t: "tr", nl: "Vroeger woonde ik in een dorp.", a: ["Avant, j'habitais dans un village.", "Autrefois, j'habitais dans un village.", "Avant j'habitais dans un village.", "Autrefois j'habitais dans un village."], tag: "fr-imparfait" },
      { t: "order", s: "Quand j'étais petite, je lisais beaucoup.", nl: "Toen ik klein was, las ik veel.", tag: "fr-ordre" },
      { t: "match", p: [["le village", "het dorp"], ["la ferme", "de boerderij"], ["le jouet", "het speelgoed"], ["autrefois", "vroeger"], ["sage", "braaf"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Mon enfance à Namur", type: "Blog",
      p: [
        ["Quand j'étais petit, nous habitions dans une vieille maison près de la Meuse. La maison n'était pas grande, mais il y avait un jardin avec des pommiers.", "Toen ik klein was, woonden we in een oud huis bij de Maas. Het huis was niet groot, maar er was een tuin met appelbomen."],
        ["Tous les mercredis après-midi, j'allais chez mon voisin Julien. Nous lisions des bandes dessinées et nous regardions des dessins animés. Sa mère nous donnait toujours des bonbons.", "Elke woensdagmiddag ging ik naar mijn buurjongen Julien. We lazen stripboeken en keken tekenfilms. Zijn moeder gaf ons altijd snoepjes."],
        ["À l'école, j'étais timide et je ne parlais pas beaucoup. Mais à la récréation, je jouais au foot avec tout le monde. C'était une belle époque !", "Op school was ik verlegen en praatte ik niet veel. Maar in het speelkwartier voetbalde ik met iedereen. Het was een mooie tijd!"]
      ],
      gl: [["la Meuse", "de Maas"], ["le pommier", "de appelboom"], ["il y avait", "er was / er waren"], ["donner", "geven"], ["tout le monde", "iedereen"]],
      q: [
        { t: "mc", q: "Qu'est-ce qu'il y avait dans le jardin ?", o: ["Des pommiers", "Une piscine", "Une ferme"] },
        { t: "mc", q: "Que faisait-il le mercredi après-midi ?", o: ["Il allait chez son voisin", "Il allait à l'école", "Il travaillait à la ferme"] },
        { t: "mc", q: "Comment était-il à l'école ?", o: ["Timide", "Méchant", "Bavard"] }
      ]
    },
    say: [["Quand j'étais petit, j'habitais à la campagne.", "Toen ik klein was, woonde ik op het platteland."], ["On n'avait pas de télévision.", "We hadden geen televisie."], ["C'était délicieux !", "Het was heerlijk!"], ["Tu étais sage à l'école ?", "Was je braaf op school?"]],
    task: { nl: "Beschrijf in 4 of 5 zinnen je jeugd: waar woonde je, hoe was je, wat deed je vaak? Gebruik de imparfait.", model: "Quand j'étais petit, j'habitais dans un village près d'Utrecht. J'avais un chien et un vieux vélo rouge. Tous les jours, je jouais dehors avec mes voisins. J'étais un peu timide, mais j'aimais beaucoup l'école." },
    scenario: { nl: "Je praat met een Belgische oma over hoe het vroeger was en vertelt over je eigen jeugd.", role: "You are Mamie Jeanne, a warm grandmother from Namur, Belgium. Tell the learner short memories from your childhood on a farm (no television, cycling to school, waffles on Sunday) and ask them about their own childhood: where they lived, what they played, what they liked to eat. Use tu and simple French in the imparfait. Say septante and nonante for 70 and 90.", goal: "Vertel waar je woonde, wat je vaak deed en stel de oma twee vragen over vroeger." }
  });

  /* ───────────────────────── A2 · 4 ───────────────────────── */
  U({
    id: "fr-a2-04", level: "A2", icon: "🩺", title: "Chez le médecin", nl: "Bij de dokter: je lichaam en je gezondheid",
    goals: ["Lichaamsdelen benoemen", "Zeggen waar je pijn hebt", "Advies begrijpen en geven met il faut en devoir", "Zeggen hoe lang je al iets hebt met depuis"],
    vocab: [
      ["la tête", "het hoofd"], ["le ventre", "de buik"], ["le dos", "de rug"], ["la gorge", "de keel"], ["le bras", "de arm"], ["la jambe", "het been"],
      ["le pied", "de voet"], ["la main", "de hand"], ["l'œil / les yeux", "het oog / de ogen"], ["l'oreille", "het oor"], ["la dent", "de tand"], ["le genou", "de knie"],
      ["malade", "ziek"], ["la fièvre", "de koorts"], ["le rhume", "de verkoudheid"], ["la grippe", "de griep"], ["tousser", "hoesten"], ["fatigué / fatiguée", "moe"],
      ["le médecin", "de dokter"], ["le rendez-vous", "de afspraak"], ["l'ordonnance", "het recept"], ["le médicament", "het medicijn"], ["la pharmacie", "de apotheek"], ["les urgences", "de spoedeisende hulp"],
      ["J'ai mal à la tête.", "Ik heb hoofdpijn."], ["Je ne me sens pas bien.", "Ik voel me niet goed."], ["Qu'est-ce qui ne va pas ?", "Wat scheelt eraan?"], ["se soigner", "goed voor jezelf zorgen / zich laten behandelen"], ["Bon rétablissement !", "Beterschap!"], ["depuis", "sinds / al"]
    ],
    grammar: [
      { t: "Avoir mal à: pijn hebben", es: "Avoir mal à + partie du corps",
        html: `<p>Pijn druk je uit met <b>avoir mal à</b> + lidwoord + lichaamsdeel. Het voorzetsel <i>à</i> smelt samen met het lidwoord, zoals je al kent van <i>aller au cinéma</i>:</p>
<p><b>à + le = au</b> · <b>à + la = à la</b> · <b>à + l' = à l'</b> · <b>à + les = aux</b></p>
<p><i>J'ai mal <b>au</b> dos</i> · <i>J'ai mal <b>à la</b> tête</i> · <i>J'ai mal <b>à l'</b>oreille</i> · <i>J'ai mal <b>aux</b> dents</i>.</p>
<p><b>Let op, anders dan in het Nederlands:</b> het Frans gebruikt bij lichaamsdelen het <b>lidwoord</b>, niet het bezittelijk voornaamwoord. Wij zeggen «<u>mijn</u> rug doet pijn», het Frans zegt «ik heb pijn aan <u>de</u> rug». Dus niet <s>j'ai mal à mon dos</s>. Het is toch al duidelijk van wie de rug is.</p>
<p>⚠️ <b>Uitzondering in het meervoud:</b> <i>un œil</i> → <i>des <b>yeux</b></i> (een compleet ander woord), en <i>un genou</i> → <i>des genou<b>x</b></i> (met -x in plaats van -s). <b>Waarom?</b> <i>Yeux</i> komt van een oude meervoudsvorm die sterk is afgesleten; <i>genou</i> hoort bij een rijtje van zeven woorden op -ou met -x (<i>bijou, caillou, chou, genou, hibou, joujou, pou</i>).</p>`,
        table: [["lichaamsdeel", "pijn", "vertaling"], ["le ventre", "J'ai mal au ventre.", "Ik heb buikpijn."], ["la gorge", "J'ai mal à la gorge.", "Ik heb keelpijn."], ["l'épaule", "J'ai mal à l'épaule.", "Ik heb pijn in mijn schouder."], ["les yeux", "J'ai mal aux yeux.", "Mijn ogen doen pijn."]],
        ex: [["Où est-ce que vous avez mal ?", "Waar hebt u pijn?"], ["Mon fils a mal aux dents.", "Mijn zoon heeft kiespijn."]] },
      { t: "Il faut en devoir: moeten", es: "Il faut / devoir + infinitif",
        html: `<p><b>Il faut + infinitief</b> betekent «je moet / men moet / het is nodig». Het is <b>onpersoonlijk</b>: het bestaat alleen met <i>il</i> en zegt niet wie het moet doen. <i>Il faut boire beaucoup d'eau.</i></p>
<p><b>Devoir + infinitief</b> zegt wél wie: <i>Vous <b>devez</b> rester au lit.</i> Vervoeging: <i>je dois, tu dois, il doit, nous devons, vous devez, ils doivent</i>.</p>
<p><b>Let op de ontkenning:</b> <i>Il <b>ne faut pas</b> fumer</i> betekent «je <u>mag niet</u> roken» (verbod), niet «je hoeft niet te roken». «Niet hoeven» is <i>ce n'est pas nécessaire</i> of <i>vous n'avez pas besoin de…</i></p>
<p>Voor vriendelijk advies gebruikt een arts vaak de <b>impératif met vous</b>: <i>Prenez ce médicament. Reposez-vous. Ne sortez pas.</i></p>`,
        table: [["vorm", "voorbeeld", "vertaling"], ["il faut", "Il faut dormir.", "Je moet slapen."], ["il ne faut pas", "Il ne faut pas sortir.", "Je mag niet naar buiten."], ["devoir", "Tu dois voir un médecin.", "Je moet naar een dokter."], ["impératif", "Buvez beaucoup d'eau.", "Drink veel water."]],
        ex: [["Il faut prendre un rendez-vous.", "Je moet een afspraak maken."], ["Vous devez prendre ce médicament trois fois par jour.", "U moet dit medicijn drie keer per dag nemen."]] },
      { t: "Depuis + tegenwoordige tijd", es: "Depuis + présent",
        html: `<p>⚠️ <b>Let op, een bekende valkuil:</b> iets wat in het verleden begon en <b>nu nog duurt</b>, zeg je in het Frans met <b>depuis + tegenwoordige tijd</b>. <i>J'<b>ai</b> mal à la tête <b>depuis</b> trois jours.</i> (Ik heb al drie dagen hoofdpijn.)</p>
<p>Het Nederlands doet dat ook («ik <u>heb</u> al drie dagen…»), maar wie via het Engels denkt (<i>I have had…</i>) kiest vaak ten onrechte de passé composé. <b>Waarom tegenwoordige tijd?</b> Omdat het nog steeds waar is: je hébt nu nog hoofdpijn.</p>
<p><i>Depuis</i> kan een <b>duur</b> hebben (<i>depuis deux semaines</i> = al twee weken) of een <b>beginpunt</b> (<i>depuis lundi</i> = sinds maandag).</p>
<p>Vraag: <i><b>Depuis quand</b> est-ce que vous toussez ?</i> (Sinds wanneer hoest u?) of <i><b>Depuis combien de temps</b>… ?</i> (Hoe lang al…?)</p>`,
        table: [["Frans", "Nederlands"], ["J'habite ici depuis 2020.", "Ik woon hier sinds 2020."], ["Je tousse depuis une semaine.", "Ik hoest al een week."], ["Il est malade depuis hier.", "Hij is sinds gisteren ziek."]],
        ex: [["Depuis quand avez-vous de la fièvre ?", "Sinds wanneer hebt u koorts?"], ["J'apprends le français depuis six mois.", "Ik leer al zes maanden Frans."]] }
    ],
    dialogue: {
      t: "Dans le cabinet du médecin", place: "Genève 🇨🇭",
      lines: [
        ["Médecin", "Bonjour, monsieur. Qu'est-ce qui ne va pas ?", "Goedendag, meneer. Wat scheelt eraan?"],
        ["Daan", "Bonjour, docteur. Je ne me sens pas bien. J'ai mal à la gorge et à la tête.", "Goedendag, dokter. Ik voel me niet goed. Ik heb keelpijn en hoofdpijn."],
        ["Médecin", "Depuis quand ?", "Sinds wanneer?"],
        ["Daan", "Depuis trois jours. Et je tousse beaucoup la nuit.", "Al drie dagen. En ik hoest veel 's nachts."],
        ["Médecin", "Vous avez de la fièvre ?", "Hebt u koorts?"],
        ["Daan", "Oui, trente-huit et demi ce matin. J'ai aussi mal au dos.", "Ja, achtendertig en een half vanochtend. Ik heb ook rugpijn."],
        ["Médecin", "Ouvrez la bouche, s'il vous plaît. Oui, c'est une grippe.", "Doet u uw mond open, alstublieft. Ja, het is griep."],
        ["Daan", "Est-ce que je dois prendre des médicaments ?", "Moet ik medicijnen nemen?"],
        ["Médecin", "Oui, voici une ordonnance. Il faut rester au lit et boire beaucoup. Il ne faut pas aller au travail.", "Ja, hier is een recept. U moet in bed blijven en veel drinken. U mag niet naar het werk gaan."],
        ["Daan", "D'accord. Merci, docteur.", "Goed. Dank u, dokter."],
        ["Médecin", "Reposez-vous bien. Bon rétablissement !", "Rust goed uit. Beterschap!"]
      ],
      q: [
        { t: "mc", q: "Où est-ce que Daan a mal ?", o: ["À la gorge, à la tête et au dos", "Au ventre", "Aux dents"] },
        { t: "mc", q: "Depuis quand est-il malade ?", o: ["Depuis trois jours", "Depuis une semaine", "Depuis hier"] },
        { t: "mc", q: "Qu'est-ce qu'il ne faut pas faire ?", o: ["Aller au travail", "Boire beaucoup", "Rester au lit"] }
      ]
    },
    culture: { t: "Naar de dokter in Frankrijk en Zwitserland", html: `<p>In Frankrijk betaal je de huisarts (<i>médecin généraliste</i>) meestal direct na het consult; met je <b>carte Vitale</b> krijg je het grootste deel automatisch terug. Als toerist neem je je Europese zorgpas mee.</p>
<p>Een Franse <b>pharmacie</b> herken je aan het groene, knipperende kruis. De apotheker geeft veel advies; voor kleine kwalen ga je daar eerst heen.</p>
<p>🚑 Noodnummers: in Frankrijk <b>15</b> (SAMU, medische hulp), in heel Europa <b>112</b>, in Zwitserland <b>144</b>. In Genève is de zorg uitstekend, maar duur: een verzekering is er verplicht.</p>
<p>Als iemand niest, zeg je <i>«À tes souhaits !»</i> (of beleefd: <i>«À vos souhaits !»</i>), letterlijk «op je wensen».</p>` },
    ex: [
      { t: "cloze", s: "J'ai mal ___ tête.", a: ["à la"], o: ["à la", "au", "aux"], nl: "Ik heb hoofdpijn.", tag: "fr-mal" },
      { t: "cloze", s: "Il a mal ___ ventre.", a: ["au"], o: ["au", "à le", "à la"], nl: "Hij heeft buikpijn.", x: "à + le smelt samen tot au.", tag: "fr-mal" },
      { t: "cloze", s: "Elle a mal ___ dents.", a: ["aux"], o: ["aux", "au", "à les"], nl: "Ze heeft kiespijn.", x: "à + les smelt samen tot aux.", tag: "fr-mal" },
      { t: "cloze", s: "J'ai mal ___ oreille.", a: ["à l'"], o: ["à l'", "au", "à la"], nl: "Ik heb oorpijn.", tag: "fr-mal" },
      { t: "cloze", s: "Il ___ boire beaucoup d'eau.", a: ["faut"], o: ["faut", "doit", "faire"], nl: "Je moet veel water drinken.", tag: "fr-ilfaut" },
      { t: "cloze", s: "Vous ___ rester au lit.", a: ["devez"], o: ["devez", "doivent", "faut"], nl: "U moet in bed blijven.", tag: "fr-ilfaut" },
      { t: "cloze", s: "Je ___ malade depuis lundi.", a: ["suis"], o: ["suis", "ai été", "étais"], nl: "Ik ben sinds maandag ziek.", x: "Het duurt nog: depuis + tegenwoordige tijd.", tag: "fr-depuis" },
      { t: "cloze", s: "J'ai mal aux ___.", a: ["yeux"], o: ["yeux", "œils", "œil"], nl: "Mijn ogen doen pijn.", x: "Uitzondering: het meervoud van œil is yeux.", tag: "fr-mal" },
      { t: "mc", q: "Hoe zeg je «mijn rug doet pijn»?", o: ["J'ai mal au dos.", "J'ai mal à mon dos.", "Mon dos a mal."], x: "Anders dan in het Nederlands: lidwoord, geen «mijn».", tag: "fr-mal" },
      { t: "mc", q: "Wat betekent «Il ne faut pas sortir»?", o: ["Je mag niet naar buiten.", "Je hoeft niet naar buiten.", "Hij gaat niet naar buiten."], x: "Il ne faut pas is een verbod, geen «niet hoeven».", tag: "fr-ilfaut" },
      { t: "mc", q: "Hoe zeg je «Ik hoest al een week»?", o: ["Je tousse depuis une semaine.", "J'ai toussé depuis une semaine.", "Je tousse il y a une semaine."], x: "Het duurt nog: tegenwoordige tijd met depuis.", tag: "fr-depuis" },
      { t: "tr", nl: "Ik voel me niet goed.", a: ["Je ne me sens pas bien."], tag: "fr-voc" },
      { t: "tr", nl: "Ik heb keelpijn.", a: ["J'ai mal à la gorge."], tag: "fr-mal" },
      { t: "tr", nl: "Je moet een afspraak maken.", a: ["Il faut prendre un rendez-vous.", "Il faut prendre rendez-vous.", "Tu dois prendre un rendez-vous.", "Tu dois prendre rendez-vous."], tag: "fr-ilfaut" },
      { t: "tr", nl: "Beterschap!", a: ["Bon rétablissement !"], tag: "fr-voc" },
      { t: "order", s: "J'ai mal à la tête depuis trois jours.", nl: "Ik heb al drie dagen hoofdpijn.", tag: "fr-ordre" },
      { t: "match", p: [["la tête", "het hoofd"], ["le dos", "de rug"], ["la jambe", "het been"], ["la main", "de hand"], ["le genou", "de knie"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Conseils contre la grippe", type: "Folder van de apotheek",
      p: [
        ["C'est l'hiver et beaucoup de personnes sont malades. Vous avez de la fièvre, vous toussez et vous avez mal à la tête ? C'est peut-être la grippe.", "Het is winter en veel mensen zijn ziek. Hebt u koorts, hoest u en hebt u hoofdpijn? Misschien is het griep."],
        ["Il faut rester à la maison et se reposer. Buvez beaucoup d'eau ou de thé chaud. Il ne faut pas aller au travail : vos collègues peuvent tomber malades aussi.", "U moet thuisblijven en uitrusten. Drink veel water of warme thee. U mag niet naar het werk gaan: uw collega's kunnen ook ziek worden."],
        ["Vous êtes malade depuis plus de cinq jours ? Alors vous devez prendre un rendez-vous chez votre médecin. Et n'oubliez pas : il faut se laver les mains souvent !", "Bent u al meer dan vijf dagen ziek? Dan moet u een afspraak maken bij uw arts. En vergeet niet: u moet vaak uw handen wassen!"]
      ],
      gl: [["peut-être", "misschien"], ["chaud", "warm"], ["tomber malade", "ziek worden"], ["plus de", "meer dan"], ["se laver les mains", "zijn handen wassen"]],
      q: [
        { t: "mc", q: "Qu'est-ce qu'il faut faire quand on a la grippe ?", o: ["Rester à la maison", "Aller au travail", "Faire du sport"] },
        { t: "mc", q: "Qu'est-ce qu'il faut boire ?", o: ["De l'eau ou du thé chaud", "Du café", "Du vin"] },
        { t: "mc", q: "Quand faut-il voir le médecin ?", o: ["Après plus de cinq jours", "Le premier jour", "Jamais"] }
      ]
    },
    say: [["J'ai mal à la tête.", "Ik heb hoofdpijn."], ["Je ne me sens pas bien.", "Ik voel me niet goed."], ["Je tousse depuis trois jours.", "Ik hoest al drie dagen."], ["Il faut rester au lit.", "Je moet in bed blijven."]],
    task: { nl: "Schrijf een kort bericht aan je baas (4 zinnen): je bent ziek, wat heb je, sinds wanneer, en wat zegt de dokter?", model: "Bonjour madame Morel, je suis malade depuis hier. J'ai de la fièvre et j'ai très mal à la gorge. Le médecin dit que je dois rester au lit trois jours. Je vais revenir au bureau lundi." },
    scenario: { nl: "Je bent op vakantie in Genève en voelt je ziek. Je gaat naar de dokter.", role: "You are a calm, friendly doctor in Geneva, Switzerland. Ask the learner what is wrong, where it hurts, since when, and whether they have a fever. Then give simple advice with il faut, vous devez and the imperative (rest, drink, medicine from the pharmacy). Use vous and simple French.", goal: "Zeg waar je pijn hebt en sinds wanneer, en vraag wat je moet doen." }
  });

  /* ───────────────────────── A2 · 5 ───────────────────────── */
  U({
    id: "fr-a2-05", level: "A2", icon: "🍽️", title: "Au restaurant", nl: "Uit eten: bestellen, vragen en afrekenen",
    goals: ["Een tafel reserveren en bestellen", "Iets over het eten zeggen en afrekenen", "Le, la en les als voornaamwoord gebruiken", "Het woordje en gebruiken voor hoeveelheden"],
    vocab: [
      ["la carte", "de menukaart"], ["le menu", "het (vaste) menu"], ["l'entrée", "het voorgerecht"], ["le plat", "het hoofdgerecht / het gerecht"], ["le dessert", "het nagerecht"], ["le plat du jour", "de dagschotel"],
      ["la viande", "het vlees"], ["le poisson", "de vis"], ["le poulet", "de kip"], ["les légumes", "de groenten"], ["les frites", "de friet"], ["le riz", "de rijst"],
      ["la salade", "de salade / de sla"], ["la soupe", "de soep"], ["le sel", "het zout"], ["le poivre", "de peper"], ["la carafe d'eau", "de karaf (kraan)water"], ["le serveur / la serveuse", "de ober / de serveerster"],
      ["commander", "bestellen"], ["goûter", "proeven"], ["recommander", "aanraden"], ["l'addition", "de rekening"], ["le pourboire", "de fooi"], ["végétarien / végétarienne", "vegetarisch"],
      ["Vous avez choisi ?", "Hebt u gekozen?"], ["Je vais prendre…", "Ik neem…"], ["C'est délicieux.", "Het is heerlijk."], ["L'addition, s'il vous plaît.", "De rekening, alstublieft."], ["à point", "medium (gebakken)"], ["Bon appétit !", "Eet smakelijk!"]
    ],
    grammar: [
      { t: "Le, la, les: hem, haar, het, ze", es: "Les pronoms COD : le, la, les",
        html: `<p>Om een woord niet te herhalen, vervang je het door <b>le</b> (mannelijk), <b>la</b> (vrouwelijk) of <b>les</b> (meervoud). Voor een klinker worden <i>le</i> en <i>la</i> → <b>l'</b>.</p>
<p><b>Let op, anders dan in het Nederlands:</b> het voornaamwoord staat <b>vóór het werkwoord</b>. Wij zeggen «ik neem <u>hem</u>», het Frans zegt «ik <u>hem</u> neem»: <i>Je <b>le</b> prends.</i></p>
<p><i>Tu connais ce restaurant ? — Oui, je <b>le</b> connais.</i><br><i>Vous prenez la soupe ? — Oui, je <b>la</b> prends.</i><br><i>Tu aimes les frites ? — Oui, je <b>les</b> adore.</i></p>
<p>Bij twee werkwoorden staat het voornaamwoord vóór de <b>infinitief</b>: <i>Je vais <b>le</b> goûter</i>, <i>Je voudrais <b>la</b> commander</i>. Bij ontkenning blijven voornaamwoord en werkwoord samen: <i>Je <b>ne le</b> prends <b>pas</b></i>.</p>
<p>⚠️ <b>Uitzondering:</b> alleen bij de <b>bevestigende gebiedende wijs</b> staat het voornaamwoord erachter, met een streepje: <i>Prends-<b>le</b> ! Goûtez-<b>la</b> !</i> <b>Waarom?</b> Een bevel begint met het werkwoord; het voornaamwoord kan dan nergens anders heen. Bij een verbod geldt de gewone regel weer: <i>Ne <b>le</b> prends pas !</i></p>`,
        table: [["", "voornaamwoord", "voorbeeld"], ["le poisson", "le / l'", "Je le prends."], ["la salade", "la / l'", "Je la prends."], ["les légumes", "les", "Je les prends."], ["l'addition", "l'", "Je l'ai."], ["bevel", "-le / -la / -les", "Goûte-le !"]],
        ex: [["Le dessert ? Je le prends après.", "Het toetje? Dat neem ik daarna."], ["Cette tarte, vous devez la goûter !", "Deze taart, die moet u proeven!"], ["Les frites, je ne les aime pas.", "Friet, daar houd ik niet van."]] },
      { t: "En: ervan, er", es: "Le pronom en",
        html: `<p>Het woordje <b>en</b> vervangt iets wat met <b>du, de la, des</b> of met een <b>hoeveelheid</b> wordt aangeduid. Het lijkt op het Nederlandse «er» in «ik heb <u>er</u> drie».</p>
<p><i>Vous avez du pain ? — Oui, j'<b>en</b> ai.</i> (Ja, dat heb ik.)<br><i>Tu veux des frites ? — Oui, j'<b>en</b> veux.</i><br><i>Vous avez des enfants ? — Oui, j'<b>en</b> ai deux.</i> (Ja, ik heb <u>er</u> twee.)</p>
<p><b>Let op:</b> het getal of de hoeveelheid blijft staan, <i>en</i> vervangt alleen het zelfstandig naamwoord: <i>J'en prends <b>un</b></i>, <i>J'en voudrais <b>un peu</b></i>, <i>Il y en a <b>beaucoup</b></i>.</p>
<p><b>Le/la/les of en?</b> Gaat het om iets <b>bepaalds</b> (de, die, mijn), dan <i>le/la/les</i>: <i>Je prends <u>le</u> gâteau → Je <b>le</b> prends.</i> Gaat het om een <b>onbepaalde hoeveelheid</b> (wat, een, drie), dan <i>en</i>: <i>Je prends <u>du</u> gâteau → J'<b>en</b> prends.</i></p>
<p>Ontkenning: <i>Je <b>n'en</b> veux <b>pas</b>, merci.</i></p>`,
        table: [["vraag", "antwoord met en"], ["Tu veux du café ?", "Oui, j'en veux."], ["Vous avez des desserts ?", "Oui, nous en avons cinq."], ["Il y a du sel ?", "Non, il n'y en a pas."], ["Tu prends une entrée ?", "Oui, j'en prends une."]],
        ex: [["Du vin ? Non merci, je n'en bois pas.", "Wijn? Nee dank je, dat drink ik niet."], ["Des frites ? J'en voudrais un peu.", "Friet? Ik wil er graag een beetje van."]] }
    ],
    dialogue: {
      t: "Un dîner dans un petit restaurant", place: "Paris 🇫🇷",
      lines: [
        ["Serveur", "Bonsoir ! Vous avez réservé ?", "Goedenavond! Hebt u gereserveerd?"],
        ["Sanne", "Oui, une table pour deux, au nom de De Vries.", "Ja, een tafel voor twee, op naam van De Vries."],
        ["Serveur", "Très bien. Voici la carte. Le plat du jour, c'est le poulet aux légumes.", "Heel goed. Hier is de kaart. De dagschotel is kip met groenten."],
        ["Sanne", "Le poulet, vous le recommandez ?", "De kip, raadt u die aan?"],
        ["Serveur", "Oui, tout le monde l'adore. Vous avez choisi ?", "Ja, iedereen is er dol op. Hebt u gekozen?"],
        ["Sanne", "Je vais prendre la soupe en entrée, et ensuite le plat du jour.", "Ik neem de soep als voorgerecht, en daarna de dagschotel."],
        ["Tom", "Et pour moi, le poisson avec des frites. Vous avez du pain ?", "En voor mij de vis met friet. Hebt u brood?"],
        ["Serveur", "Bien sûr, j'en apporte tout de suite. Et comme boisson ?", "Natuurlijk, ik breng het meteen. En wat wilt u drinken?"],
        ["Tom", "Une carafe d'eau, s'il vous plaît. Et du vin rouge : nous en voudrions deux verres.", "Een karaf water, alstublieft. En rode wijn: we willen er graag twee glazen van."],
        ["Serveur", "Parfait. Et les desserts, vous les commandez maintenant ?", "Prima. En de nagerechten, bestelt u die nu?"],
        ["Sanne", "Non, nous allons les choisir après. Merci !", "Nee, die kiezen we straks. Dank u!"]
      ],
      q: [
        { t: "mc", q: "Quel est le plat du jour ?", o: ["Le poulet aux légumes", "Le poisson avec des frites", "La soupe"] },
        { t: "mc", q: "Qu'est-ce que Tom commande ?", o: ["Le poisson avec des frites", "Le plat du jour", "Une salade"] },
        { t: "mc", q: "Quand vont-ils choisir les desserts ?", o: ["Après", "Maintenant", "Ils n'en veulent pas"] }
      ]
    },
    culture: { t: "Uit eten in Frankrijk", html: `<p>Een Frans restaurant heeft vaak een <b>menu</b> (ook <i>formule</i>): een vaste combinatie van <i>entrée + plat</i> of <i>plat + dessert</i> voor een vaste prijs. ⚠️ Let op de valse vriend: de menukaart zelf heet <b>la carte</b>; <i>le menu</i> is dat vaste meergangenmenu. En <i>l'entrée</i> is het <b>voor</b>gerecht, niet het hoofdgerecht.</p>
<p>💧 Een <b>carafe d'eau</b> (kraanwater) is gratis en heel gewoon om te vragen, net als brood.</p>
<p>De bediening zit bij de prijs in (<i>service compris</i>). Een <b>pourboire</b> is dus niet verplicht; bij tevredenheid laat je een paar euro liggen.</p>
<p>De ober komt de rekening niet uit zichzelf brengen: dat zou onbeleefd zijn. Je vraagt erom: <i>«L'addition, s'il vous plaît.»</i></p>` },
    ex: [
      { t: "cloze", s: "Le poisson ? Je ___ prends.", a: ["le"], o: ["le", "la", "en"], nl: "De vis? Die neem ik.", tag: "fr-cod" },
      { t: "cloze", s: "La soupe ? Je ___ adore.", a: ["l'"], o: ["l'", "la", "en"], nl: "De soep? Daar ben ik dol op.", x: "La wordt l' voor een klinker.", tag: "fr-cod" },
      { t: "cloze", s: "Les légumes, tu ___ manges ?", a: ["les"], o: ["les", "le", "en"], nl: "De groenten, eet je die?", tag: "fr-cod" },
      { t: "cloze", s: "Du pain ? Oui, j'___ veux.", a: ["en"], o: ["en", "le", "y"], nl: "Brood? Ja, dat wil ik.", x: "Du pain = onbepaalde hoeveelheid, dus en.", tag: "fr-en" },
      { t: "cloze", s: "Des desserts ? Nous ___ avons cinq.", a: ["en"], o: ["en", "les", "des"], nl: "Nagerechten? We hebben er vijf.", tag: "fr-en" },
      { t: "cloze", s: "Ce plat est délicieux. Goûte-___ !", a: ["le"], o: ["le", "en", "la"], nl: "Dit gerecht is heerlijk. Proef het!", x: "Uitzondering: bij een bevestigend bevel staat het voornaamwoord achter het werkwoord.", tag: "fr-cod" },
      { t: "cloze", s: "Du vin ? Non merci, je n'___ bois pas.", a: ["en"], o: ["en", "le", "y"], nl: "Wijn? Nee dank je, dat drink ik niet.", tag: "fr-en" },
      { t: "mc", q: "Welke zin is goed?", o: ["Je le prends.", "Je prends le.", "Je prends lui."], x: "Anders dan in het Nederlands: het voornaamwoord staat vóór het werkwoord.", tag: "fr-cod" },
      { t: "mc", q: "Hoe zeg je «Ik ga het proeven»?", o: ["Je vais le goûter.", "Je le vais goûter.", "Je vais goûter le."], x: "Bij twee werkwoorden staat het voornaamwoord vóór de infinitief.", tag: "fr-cod" },
      { t: "mc", q: "Wat is «l'entrée» in een Frans restaurant?", o: ["het voorgerecht", "het hoofdgerecht", "de ingang van de keuken"], tag: "fr-resto" },
      { t: "mc", q: "«Je prends du gâteau.» Hoe vervang je «du gâteau»?", o: ["J'en prends.", "Je le prends.", "Je la prends."], x: "Du = onbepaalde hoeveelheid, dus en. Le gâteau (bepaald) zou «je le prends» worden.", tag: "fr-en" },
      { t: "tr", nl: "De rekening, alstublieft.", a: ["L'addition, s'il vous plaît."], tag: "fr-resto" },
      { t: "tr", nl: "Ik neem de dagschotel.", a: ["Je vais prendre le plat du jour.", "Je prends le plat du jour."], tag: "fr-resto" },
      { t: "tr", nl: "Ik heb er twee.", a: ["J'en ai deux."], tag: "fr-en" },
      { t: "tr", nl: "Ik ken hem niet.", a: ["Je ne le connais pas."], tag: "fr-cod" },
      { t: "order", s: "Les desserts, nous allons les choisir après.", nl: "De nagerechten, die kiezen we straks.", tag: "fr-ordre" },
      { t: "match", p: [["l'entrée", "het voorgerecht"], ["le plat", "het hoofdgerecht"], ["l'addition", "de rekening"], ["le pourboire", "de fooi"], ["la carte", "de menukaart"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Chez Léon : un avis", type: "Recensie op internet",
      p: [
        ["Hier soir, nous avons dîné Chez Léon, un petit restaurant près de la gare. Le serveur était très sympa et il nous a tout expliqué.", "Gisteravond hebben we gegeten bij Chez Léon, een klein restaurant bij het station. De ober was heel aardig en hij heeft ons alles uitgelegd."],
        ["J'ai pris le menu à vingt-deux euros : une soupe de légumes, puis le poisson avec du riz. Le poisson était délicieux, je le recommande ! Mon mari a choisi le poulet, mais il ne l'a pas beaucoup aimé.", "Ik heb het menu van tweeëntwintig euro genomen: een groentesoep, daarna de vis met rijst. De vis was heerlijk, ik raad hem aan! Mijn man heeft de kip gekozen, maar hij vond hem niet zo lekker."],
        ["Les desserts sont faits maison. Il y en a six et nous en avons goûté deux. La carafe d'eau et le pain sont gratuits. Nous allons revenir !", "De nagerechten zijn huisgemaakt. Er zijn er zes en we hebben er twee geproefd. De karaf water en het brood zijn gratis. We komen terug!"]
      ],
      gl: [["un avis", "een recensie / mening"], ["dîner", "(avond)eten"], ["sympa", "aardig"], ["fait maison", "huisgemaakt"], ["gratuit", "gratis"]],
      q: [
        { t: "mc", q: "Qu'est-ce qu'elle recommande ?", o: ["Le poisson", "Le poulet", "La soupe"] },
        { t: "mc", q: "Combien de desserts ont-ils goûté ?", o: ["Deux", "Six", "Un"] },
        { t: "mc", q: "Qu'est-ce qui est gratuit ?", o: ["L'eau et le pain", "Le dessert", "Le vin"] }
      ]
    },
    say: [["Une table pour deux, s'il vous plaît.", "Een tafel voor twee, alstublieft."], ["Je vais prendre le plat du jour.", "Ik neem de dagschotel."], ["Qu'est-ce que vous recommandez ?", "Wat raadt u aan?"], ["L'addition, s'il vous plaît.", "De rekening, alstublieft."]],
    task: { nl: "Schrijf een korte recensie (4 of 5 zinnen) over een restaurant: wat heb je gegeten, hoe was het, raad je het aan?", model: "Samedi, j'ai mangé dans un restaurant italien. J'ai pris une salade en entrée et ensuite une pizza. La pizza était délicieuse, je la recommande. Les desserts ? Je n'en ai pas pris. Le serveur était très sympa." },
    scenario: { nl: "Je gaat uit eten in een klein restaurant in Parijs.", role: "You are a professional but friendly waiter in a small Parisian restaurant. Welcome the learner, ask if they reserved, present the plat du jour (chicken with vegetables, 16 euros) and the menu (starter + main, 22 euros), take their order for food and drinks, ask about dessert and bring the bill when asked. Use vous and simple French.", goal: "Bestel een voorgerecht, een hoofdgerecht en iets te drinken, vraag wat de ober aanraadt en vraag om de rekening." }
  });
})(window.SPT);
