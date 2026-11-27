/* Frans voor Nederlandstaligen — niveau A1, units 6–10 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-adj': 'bijvoeglijk naamwoord (vorm en plaats)', 'fr-dem': 'ce, cet, cette, ces', 'fr-faire': 'faire (je fais, il fait…)', 'fr-meteo': 'het weer (il fait, il pleut)',
    'fr-pouvoir': 'pouvoir, vouloir, devoir', 'fr-neg': 'ontkenning (ne … pas, jamais, rien)', 'fr-loisir': 'faire du / jouer au / jouer du', 'fr-ir-re': 'werkwoorden op -ir en -re (finir, prendre)',
    'fr-futur-proche': 'futur proche (je vais + infinitief)', 'fr-date': 'data en maanden', 'fr-saison': 'maanden en seizoenen (en, au)'
  });

  /* ───────────────────────── A1 · 6 ───────────────────────── */
  U({
    id: 'fr-a1-06', level: 'A1', icon: '🛍️', title: 'Faire les magasins', nl: 'Winkelen: kleren, kleuren en prijzen',
    goals: ['Kleren en kleuren benoemen', 'Naar de prijs en de maat vragen', 'Tellen tot 100 (ook 70, 80 en 90)', 'Bijvoeglijke naamwoorden aanpassen en op de goede plaats zetten'],
    vocab: [
      ["le magasin", "de winkel"], ["le vêtement", "het kledingstuk"], ["le pantalon", "de broek"], ["la chemise", "het overhemd"], ["la robe", "de jurk"], ["la jupe", "de rok"],
      ["le pull", "de trui"], ["le manteau", "de jas (lang, winter)"], ["la veste", "het jasje / het colbert"], ["les chaussures", "de schoenen"], ["le sac", "de tas"], ["la taille", "de maat"],
      ["rouge", "rood"], ["bleu / bleue", "blauw"], ["vert / verte", "groen"], ["noir / noire", "zwart"], ["blanc / blanche", "wit"], ["jaune", "geel"], ["gris / grise", "grijs"],
      ["cher / chère", "duur"], ["bon marché", "goedkoop"], ["beau / belle", "mooi"], ["nouveau / nouvelle", "nieuw"], ["vieux / vieille", "oud"], ["joli / jolie", "leuk / mooi"],
      ["Ça coûte combien ?", "Hoeveel kost dat?"], ["C'est trop cher.", "Dat is te duur."], ["Je peux essayer ?", "Mag ik passen?"], ["acheter", "kopen"], ["payer", "betalen"],
      ["trente", "dertig"], ["quarante", "veertig"], ["cinquante", "vijftig"], ["soixante", "zestig"], ["soixante-dix", "zeventig"], ["quatre-vingts", "tachtig"], ["quatre-vingt-dix", "negentig"], ["cent", "honderd"]
    ],
    grammar: [
      { t: "Getallen 20–100", es: "Les nombres de 20 à 100",
        html: `<p>Tot 69 gaat het zoals je verwacht: tiental + eenheid met een streepje: <b>vingt-deux</b> (22), <b>trente-cinq</b> (35). Het Frans zegt eerst het tiental en dan de eenheid, dus andersom dan het Nederlands (vijf-en-dertig).</p>
<p>Bij 21, 31, 41, 51 en 61 komt er <b>et</b> tussen: <b>vingt et un</b>, <b>trente et un</b>.</p>
<p>⚠️ <b>Uitzondering: 70, 80 en 90 zijn rekensommen.</b> 70 = <b>soixante-dix</b> (60 + 10), 80 = <b>quatre-vingts</b> (4 × 20), 90 = <b>quatre-vingt-dix</b> (4 × 20 + 10). Daarna tel je door: 71 = <i>soixante et onze</i> (60 + 11), 75 = <i>soixante-quinze</i>, 92 = <i>quatre-vingt-douze</i> (80 + 12), 99 = <i>quatre-vingt-dix-neuf</i>.</p>
<p><b>Waarom?</b> Het is een overblijfsel van het oude tellen in twintigtallen (zoals het Deens en het Keltisch dat deden). In <b>België en Zwitserland</b> is het wél logisch: daar zegt men <b>septante</b> (70) en <b>nonante</b> (90), en in delen van Zwitserland ook <b>huitante</b> (80). In Frankrijk en Québec gebruik je de rekensommen.</p>
<p>Kleine spellingregel: <i>quatre-vingt<b>s</b></i> heeft alleen een -s als er niets meer achter komt (80), niet in <i>quatre-vingt-trois</i> (83).</p>`,
        table: [["getal", "Frans", "letterlijk"], ["21", "vingt et un", "twintig en een"], ["47", "quarante-sept", "veertig-zeven"], ["70", "soixante-dix", "zestig-tien"], ["71", "soixante et onze", "zestig en elf"], ["80", "quatre-vingts", "vier-twintigen"], ["95", "quatre-vingt-quinze", "vier-twintig-vijftien"], ["100", "cent", "honderd"]],
        ex: [["Ça coûte soixante-quinze euros.", "Dat kost vijfenzeventig euro."], ["Ma grand-mère a quatre-vingt-deux ans.", "Mijn oma is tweeëntachtig."]] },
      { t: "Bijvoeglijk naamwoord: vorm en plaats", es: "L'adjectif : accord et place",
        html: `<p>Een bijvoeglijk naamwoord past zich aan het zelfstandig naamwoord aan: <b>-e</b> voor vrouwelijk, <b>-s</b> voor meervoud, <b>-es</b> voor vrouwelijk meervoud. <i>Un pantalon vert, une robe vert<b>e</b>, des pantalons vert<b>s</b>, des robes vert<b>es</b>.</i></p>
<p><b>Plaats:</b> anders dan in het Nederlands staat het bijvoeglijk naamwoord meestal <b>achter</b> het zelfstandig naamwoord. Kleuren staan er altijd achter: <i>une chemise <b>blanche</b></i> (een wit overhemd).</p>
<p>⚠️ <b>Uitzondering op de plaats:</b> een klein groepje korte, veelgebruikte bijvoeglijke naamwoorden staat <b>vóór</b> het zelfstandig naamwoord: <i>beau, joli, jeune, vieux, nouveau, bon, mauvais, grand, petit, gros</i>. Ezelsbruggetje: schoonheid, leeftijd, goedheid en grootte. <i>Une <b>petite</b> robe noire</i>, <i>un <b>beau</b> manteau</i>. Waarom? Het zijn de oudste, meest gebruikte woorden; ze zijn als vast duo met het zelfstandig naamwoord gaan klinken.</p>
<p>⚠️ <b>Uitzonderingen in de vorm:</b> een paar bijvoeglijke naamwoorden hebben een eigen vrouwelijke vorm: <i>blanc → blanche</i>, <i>beau → belle</i>, <i>nouveau → nouvelle</i>, <i>vieux → vieille</i>, <i>cher → chère</i>. En <i>beau, nouveau, vieux</i> worden <b>bel, nouvel, vieil</b> voor een mannelijk woord met een klinker: <i>un <b>bel</b> hôtel</i>. Waarom? Zo botsen er geen twee klinkers (<s>un beau hôtel</s> loopt niet lekker).</p>
<p>Eindigt het woord al op -e (<i>rouge, jaune</i>), dan is mannelijk en vrouwelijk gelijk.</p>`,
        table: [["mannelijk", "vrouwelijk", "plaats"], ["un pull vert", "une jupe verte", "achter (kleur)"], ["un pull blanc", "une jupe blanche", "achter (kleur)"], ["un petit sac", "une petite robe", "vóór (grootte)"], ["un beau manteau", "une belle veste", "vóór (schoonheid)"], ["un nouveau pantalon", "une nouvelle chemise", "vóór (leeftijd)"]],
        ex: [["J'aime la robe rouge.", "Ik vind de rode jurk mooi."], ["Il a une nouvelle veste noire.", "Hij heeft een nieuw zwart jasje."], ["Les chaussures sont chères.", "De schoenen zijn duur."]] },
      { t: "Ce, cet, cette, ces: deze / die", es: "Les adjectifs démonstratifs",
        html: `<p>Het Frans maakt geen verschil tussen <i>deze</i> en <i>die</i>, of tussen <i>dit</i> en <i>dat</i>. Je kiest alleen op geslacht en getal: <b>ce</b> (mannelijk), <b>cette</b> (vrouwelijk), <b>ces</b> (meervoud).</p>
<p>⚠️ <b>Uitzondering:</b> voor een mannelijk woord dat met een <b>klinker of stomme h</b> begint, wordt <i>ce</i> → <b>cet</b>: <i>cet hôtel</i>, <i>cet ami</i>. Waarom? Net als bij <i>mon amie</i> en <i>bel hôtel</i>: het Frans vermijdt twee botsende klinkers. <i>Cet</i> klinkt precies als <i>cette</i>.</p>
<p>Wil je toch het verschil tussen <i>deze</i> en <i>die</i> maken, dan plak je <b>-ci</b> (hier) of <b>-là</b> (daar) achter het woord: <i>cette robe-ci</i> / <i>cette robe-là</i>.</p>`,
        table: [["", "vorm", "voorbeeld"], ["mannelijk", "ce", "ce pantalon"], ["mannelijk + klinker", "cet", "cet hôtel"], ["vrouwelijk", "cette", "cette chemise"], ["meervoud", "ces", "ces chaussures"]],
        ex: [["Ce pull coûte combien ?", "Hoeveel kost deze trui?"], ["J'aime cette veste.", "Ik vind dit jasje mooi."], ["Ces chaussures sont trop petites.", "Deze schoenen zijn te klein."]] }
    ],
    dialogue: {
      t: "Dans une boutique", place: "Montréal 🇨🇦",
      lines: [
        ["Vendeuse", "Bonjour ! Je peux vous aider ?", "Goedendag! Kan ik u helpen?"],
        ["Sanne", "Oui, je cherche une veste pour l'hiver.", "Ja, ik zoek een jas voor de winter."],
        ["Vendeuse", "Nous avons cette veste noire et ce manteau gris.", "We hebben dit zwarte jasje en deze grijze jas."],
        ["Sanne", "Le manteau gris est très beau. Il coûte combien ?", "De grijze jas is heel mooi. Hoeveel kost hij?"],
        ["Vendeuse", "Cent quatre-vingt-dix dollars.", "Honderdnegentig dollar."],
        ["Sanne", "Oh, c'est trop cher pour moi. Et la veste noire ?", "O, dat is te duur voor mij. En het zwarte jasje?"],
        ["Vendeuse", "Soixante-quinze dollars. Vous faites quelle taille ?", "Vijfenzeventig dollar. Welke maat hebt u?"],
        ["Sanne", "Je fais du trente-huit. Je peux essayer ?", "Ik heb maat achtendertig. Mag ik passen?"],
        ["Vendeuse", "Bien sûr. Les cabines sont là-bas, à gauche.", "Natuurlijk. De paskamers zijn daarginds, links."],
        ["Sanne", "Elle est parfaite. Je la prends !", "Het zit perfect. Ik neem het!"]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce que Sanne cherche ?", o: ["Une veste pour l'hiver", "Une robe", "Des chaussures"] },
        { t: "mc", q: "Le manteau gris coûte combien ?", o: ["190 dollars", "75 dollars", "180 dollars"] },
        { t: "mc", q: "Qu'est-ce que Sanne achète ?", o: ["La veste noire", "Le manteau gris", "Rien"] }
      ]
    },
    culture: { t: "Soldes, maten en «Bonjour» in de winkel", html: `<p>Twee keer per jaar zijn er in Frankrijk officiële <b>soldes</b> (uitverkoop): in januari en eind juni. De data zijn wettelijk vastgelegd en iedereen wacht erop.</p>
<p>Ook in een kledingwinkel groet je bij binnenkomst (<i>Bonjour !</i>) en bij vertrek (<i>Merci, au revoir !</i>), ook als je niets koopt.</p>
<p>👗 Franse kledingmaten zijn <b>één maat groter genummerd</b> dan Nederlandse: Nederlands 38 is Frans <b>40</b>. Schoenmaten zijn hetzelfde.</p>
<p>In Québec betaal je in <b>dollars</b> en komt de belasting er bij de kassa nog bovenop. In België hoor je <i>septante</i> en <i>nonante</i> bij de prijs.</p>` },
    ex: [
      { t: "cloze", s: "Une robe ___.", a: ["verte"], o: ["verte", "vert", "verts"], nl: "Een groene jurk.", tag: "fr-adj" },
      { t: "cloze", s: "Des chaussures ___.", a: ["noires"], o: ["noires", "noir", "noire"], nl: "Zwarte schoenen.", x: "Chaussures is vrouwelijk meervoud: -es.", tag: "fr-adj" },
      { t: "cloze", s: "Une chemise ___.", a: ["blanche"], o: ["blanche", "blance", "blanc"], nl: "Een wit overhemd.", x: "Uitzondering: blanc heeft een eigen vrouwelijke vorm, blanche.", tag: "fr-adj" },
      { t: "cloze", s: "Une ___ veste.", a: ["belle"], o: ["belle", "beau", "bel"], nl: "Een mooi jasje.", x: "Uitzondering: beau wordt belle in het vrouwelijk.", tag: "fr-adj" },
      { t: "cloze", s: "___ pantalon est trop grand.", a: ["Ce"], o: ["Ce", "Cette", "Ces"], nl: "Deze broek is te groot.", tag: "fr-dem" },
      { t: "cloze", s: "___ hôtel est cher.", a: ["Cet"], o: ["Cet", "Ce", "Cette"], nl: "Dit hotel is duur.", x: "Uitzondering: voor een mannelijk woord met klinker of stomme h wordt ce → cet.", tag: "fr-dem" },
      { t: "cloze", s: "___ chaussures sont jolies.", a: ["Ces"], o: ["Ces", "Ce", "Cette"], nl: "Deze schoenen zijn leuk.", tag: "fr-dem" },
      { t: "mc", q: "Welk getal is «soixante-dix»?", o: ["70", "60", "16"], x: "Uitzondering: 70 = 60 + 10.", tag: "fr-num" },
      { t: "mc", q: "Welk getal is «quatre-vingt-douze»?", o: ["92", "82", "412"], x: "4 × 20 + 12 = 92.", tag: "fr-num" },
      { t: "mc", q: "Hoe zeg je «een klein zwart jurkje»?", o: ["une petite robe noire", "une noire petite robe", "une robe petite noire"], x: "Petit staat (als uitzondering) vóór het zelfstandig naamwoord, de kleur erachter.", tag: "fr-adj" },
      { t: "mc", q: "Wat zegt een Belg voor 90?", o: ["nonante", "quatre-vingt-dix", "neuvante"], tag: "fr-num" },
      { t: "tr", nl: "Hoeveel kost dat?", a: ["Ça coûte combien ?", "Combien ça coûte ?", "C'est combien ?"], tag: "fr-voc" },
      { t: "tr", nl: "Dat is te duur.", a: ["C'est trop cher."], tag: "fr-voc" },
      { t: "tr", nl: "Ik zoek een blauwe trui.", a: ["Je cherche un pull bleu."], tag: "fr-adj" },
      { t: "tr", nl: "Mag ik passen?", a: ["Je peux essayer ?", "Est-ce que je peux essayer ?", "Puis-je essayer ?"], tag: "fr-voc" },
      { t: "order", s: "Je voudrais acheter cette petite veste rouge.", nl: "Ik wil graag dit kleine rode jasje kopen.", tag: "fr-ordre" },
      { t: "match", p: [["rouge", "rood"], ["bleu", "blauw"], ["vert", "groen"], ["noir", "zwart"], ["blanc", "wit"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Les soldes commencent !", type: "Reclame van een warenhuis",
      p: [
        ["Mercredi, c'est le premier jour des soldes dans notre magasin ! Tous les vêtements d'hiver sont à moitié prix.", "Woensdag is de eerste dag van de uitverkoop in onze winkel! Alle winterkleding is voor de halve prijs."],
        ["Les manteaux coûtent maintenant quatre-vingts euros. Les pulls sont à vingt-cinq euros et les belles chemises blanches à trente euros.", "De jassen kosten nu tachtig euro. De truien zijn vijfentwintig euro en de mooie witte overhemden dertig euro."],
        ["Vous cherchez de nouvelles chaussures ? Nous avons des chaussures noires, grises et bleues, de la taille trente-six à la taille quarante-six.", "Zoekt u nieuwe schoenen? We hebben zwarte, grijze en blauwe schoenen, van maat zesendertig tot maat zesenveertig."]
      ],
      gl: [["les soldes", "de uitverkoop"], ["à moitié prix", "voor de halve prijs"], ["maintenant", "nu"], ["tous les vêtements", "alle kleren"], ["premier", "eerste"]],
      q: [
        { t: "mc", q: "Les soldes commencent quel jour ?", o: ["Mercredi", "Samedi", "Lundi"] },
        { t: "mc", q: "Combien coûtent les manteaux ?", o: ["80 euros", "25 euros", "30 euros"] },
        { t: "mc", q: "De quelle couleur sont les chemises ?", o: ["Blanches", "Noires", "Bleues"] }
      ]
    },
    say: [["Ça coûte combien ?", "Hoeveel kost dat?"], ["Je cherche une veste noire.", "Ik zoek een zwart jasje."], ["Je peux essayer ?", "Mag ik passen?"], ["C'est trop cher pour moi.", "Dat is te duur voor mij."]],
    task: { nl: "Beschrijf in 3 of 4 zinnen wat je vandaag aanhebt, met kleuren.", model: "Aujourd'hui, je porte un pantalon noir et une chemise blanche. J'ai aussi un vieux pull bleu. Mes chaussures sont nouvelles : elles sont grises." },
    scenario: { nl: "Je zoekt een cadeau (een trui) in een kledingwinkel in Montréal.", role: "You are a friendly shop assistant in a clothing store in Montréal. Help the learner find a sweater: ask about color and size, give prices in dollars, and offer a cheaper option if they say it is too expensive. Use vous and simple French.", goal: "Zeg wat je zoekt, vraag naar de prijs en de maat, en beslis of je het koopt." }
  });

  /* ───────────────────────── A1 · 7 ───────────────────────── */
  U({
    id: "fr-a1-07", level: "A1", icon: "🌦️", title: "Quel temps fait-il ?", nl: "Het weer, de seizoenen en wat je kunt",
    goals: ["Over het weer praten", "Maanden en seizoenen noemen", "Het werkwoord faire gebruiken", "Zeggen wat je kunt, wilt en moet"],
    vocab: [
      ["le temps", "het weer / de tijd"], ["le soleil", "de zon"], ["la pluie", "de regen"], ["la neige", "de sneeuw"], ["le vent", "de wind"], ["un nuage", "een wolk"],
      ["Il fait beau.", "Het is mooi weer."], ["Il fait mauvais.", "Het is slecht weer."], ["Il fait chaud.", "Het is warm."], ["Il fait froid.", "Het is koud."], ["Il pleut.", "Het regent."], ["Il neige.", "Het sneeuwt."],
      ["Il y a du vent.", "Het waait."], ["le printemps", "de lente"], ["l'été", "de zomer"], ["l'automne", "de herfst"], ["l'hiver", "de winter"], ["la saison", "het seizoen"],
      ["janvier", "januari"], ["février", "februari"], ["mars", "maart"], ["avril", "april"], ["mai", "mei"], ["juin", "juni"], ["juillet", "juli"], ["août", "augustus"],
      ["septembre", "september"], ["octobre", "oktober"], ["novembre", "november"], ["décembre", "december"], ["les vacances", "de vakantie"], ["la mer", "de zee"], ["la montagne", "de bergen"],
      ["nager", "zwemmen"], ["faire du ski", "skiën"], ["le parapluie", "de paraplu"]
    ],
    grammar: [
      { t: "Faire en het weer", es: "Le verbe faire et la météo",
        html: `<p><b>Faire</b> betekent <i>doen</i> en <i>maken</i>. Het is <b>onregelmatig</b>, en je hebt het de hele dag nodig.</p>
<p>⚠️ <b>Uitzondering:</b> <i>vous <b>faites</b></i> eindigt niet op -ez. Er zijn maar drie werkwoorden in het hele Frans met een vous-vorm op <b>-tes</b>: <i>vous êtes</i> (être), <i>vous faites</i> (faire) en <i>vous dites</i> (dire). Het zijn heel oude vormen die rechtstreeks uit het Latijn komen. En let op <i>ils <b>font</b></i>, net als <i>ils ont, ils sont, ils vont</i>.</p>
<p>Uitspraak: <i>nous faisons</i> klinkt als «fuhzon», niet «fèzon».</p>
<p><b>Het weer</b> beschrijf je met <b>il fait</b> + bijvoeglijk naamwoord: <i>Il fait beau, il fait chaud, il fait froid.</i> Het Nederlands gebruikt hier <i>zijn</i> (het is warm), het Frans <b>faire</b>: <s>Il est chaud</s> is fout.</p>
<p>Regen en sneeuw hebben een eigen werkwoord: <b>il pleut</b>, <b>il neige</b>. Voor wind, zon en wolken gebruik je <b>il y a</b>: <i>Il y a du vent. Il y a du soleil.</i></p>`,
        table: [["", "faire"], ["je", "fais"], ["tu", "fais"], ["il / elle / on", "fait"], ["nous", "faisons"], ["vous", "faites"], ["ils / elles", "font"]],
        sum: "Je fais, tu fais, il fait, nous faisons, vous faites, ils font.",
        ex: [["Qu'est-ce que tu fais ?", "Wat doe je?"], ["Il fait froid aujourd'hui.", "Het is koud vandaag."], ["En hiver, nous faisons du ski.", "In de winter skiën we."]] },
      { t: "Maanden en seizoenen: en juillet, en été, au printemps", es: "Les mois et les saisons",
        html: `<p>Maanden en seizoenen schrijf je met een <b>kleine letter</b>. Voor <i>in</i> + maand gebruik je <b>en</b>: <i>en janvier</i>, <i>en août</i>.</p>
<p>Ook bij drie seizoenen is het <b>en</b>: <i>en été, en automne, en hiver</i>.</p>
<p>⚠️ <b>Uitzondering:</b> het is <b>au printemps</b>, niet <s>en printemps</s>. Waarom? <i>Été, automne</i> en <i>hiver</i> beginnen met een klinker(klank), en daar past <i>en</i> soepel voor. <i>Printemps</i> begint met een medeklinker en krijgt daarom <i>au</i> (à + le).</p>
<p>Een datum zeg je met <b>le</b> + gewoon getal: <i>le 14 juillet</i>, <i>le 3 mai</i>. Alleen de eerste dag van de maand is anders: <b>le premier</b> janvier.</p>`,
        table: [["Frans", "Nederlands"], ["en mars", "in maart"], ["en été", "in de zomer"], ["en hiver", "in de winter"], ["au printemps", "in de lente"], ["le 14 juillet", "(op) 14 juli"], ["le premier mai", "(op) 1 mei"]],
        ex: [["En août, il fait très chaud.", "In augustus is het heel warm."], ["Au printemps, il pleut souvent.", "In de lente regent het vaak."], ["Mon anniversaire est le 12 octobre.", "Mijn verjaardag is op 12 oktober."]] },
      { t: "Pouvoir, vouloir, devoir: kunnen, willen, moeten", es: "Pouvoir, vouloir, devoir",
        html: `<p>Deze drie werkwoorden zijn <b>onregelmatig</b> en lijken op elkaar: de stam verandert (<i>peu- / pouv-</i>, <i>veu- / voul-</i>, <i>doi- / dev-</i>) en de uitgangen bij je en tu zijn <b>-x</b> bij <i>pouvoir</i> en <i>vouloir</i>: <i>je peu<b>x</b>, je veu<b>x</b></i>. Erachter komt een <b>heel werkwoord</b> (infinitief): <i>Je peux <b>nager</b>.</i></p>
<p>De ontkenning staat om het eerste werkwoord: <i>Je <b>ne</b> peux <b>pas</b> venir.</i></p>
<p>⚠️ <b>Let op: «kunnen» is twee werkwoorden.</b> <b>Pouvoir</b> = kunnen omdat het mogelijk of toegestaan is. <b>Savoir</b> = kunnen omdat je het geleerd hebt. <i>Je <b>sais</b> nager</i> = ik kan zwemmen (ik heb het geleerd). <i>Je ne <b>peux</b> pas nager aujourd'hui</i> = ik kan vandaag niet zwemmen (ik ben ziek, het zwembad is dicht).</p>`,
        table: [["", "pouvoir", "vouloir", "devoir"], ["je", "peux", "veux", "dois"], ["tu", "peux", "veux", "dois"], ["il / elle / on", "peut", "veut", "doit"], ["nous", "pouvons", "voulons", "devons"], ["vous", "pouvez", "voulez", "devez"], ["ils / elles", "peuvent", "veulent", "doivent"]],
        ex: [["Tu peux fermer la fenêtre ?", "Kun je het raam dichtdoen?"], ["Je veux aller à la mer.", "Ik wil naar zee gaan."], ["Il pleut : nous devons prendre un parapluie.", "Het regent: we moeten een paraplu meenemen."]] }
    ],
    dialogue: {
      t: "Les vacances approchent", place: "Nice 🇫🇷",
      lines: [
        ["Hugo", "Quel temps fait-il aux Pays-Bas en ce moment ?", "Wat voor weer is het nu in Nederland?"],
        ["Sanne", "Il fait froid et il pleut. C'est normal en novembre.", "Het is koud en het regent. Dat is normaal in november."],
        ["Hugo", "Ici, à Nice, il fait beau. Il y a du soleil !", "Hier in Nice is het mooi weer. De zon schijnt!"],
        ["Sanne", "Tu as de la chance. Tu peux nager en novembre ?", "Jij hebt geluk. Kun je in november zwemmen?"],
        ["Hugo", "Non, la mer est trop froide. Mais en été, je nage tous les jours.", "Nee, de zee is te koud. Maar in de zomer zwem ik elke dag."],
        ["Sanne", "Moi, je préfère l'hiver. Je veux faire du ski en février.", "Ik heb liever de winter. Ik wil in februari gaan skiën."],
        ["Hugo", "Tu sais faire du ski ?", "Kun je skiën?"],
        ["Sanne", "Oui, un peu. Je vais à la montagne avec mes parents.", "Ja, een beetje. Ik ga naar de bergen met mijn ouders."],
        ["Hugo", "Et au printemps, tu dois venir à Nice !", "En in de lente moet je naar Nice komen!"],
        ["Sanne", "Avec plaisir. En avril, je peux.", "Graag. In april kan ik."]
      ],
      q: [
        { t: "mc", q: "Quel temps fait-il aux Pays-Bas ?", o: ["Il fait froid et il pleut", "Il fait beau", "Il neige"] },
        { t: "mc", q: "Pourquoi Hugo ne nage-t-il pas en novembre ?", o: ["La mer est trop froide", "Il ne sait pas nager", "Il pleut"] },
        { t: "mc", q: "Qu'est-ce que Sanne veut faire en février ?", o: ["Du ski", "Aller à Nice", "Nager"] }
      ]
    },
    culture: { t: "Juillettistes, aoûtiens en het weer als gespreksstof", html: `<p>Frankrijk gaat massaal op vakantie in de zomer. Wie in juli gaat, heet een <b>juillettiste</b>; wie in augustus gaat, een <b>aoûtien</b>. Begin augustus liggen veel bedrijven stil en zijn kleine winkels in de steden gesloten: <i>Fermeture annuelle</i>.</p>
<p>⛷️ In februari heeft elk deel van Frankrijk twee weken <b>vacances d'hiver</b>, in drie zones verspreid, zodat niet iedereen tegelijk naar de Alpen rijdt.</p>
<p>Het klimaat verschilt sterk: zacht en regenachtig in Bretagne, heet en droog aan de Middellandse Zee, koud in de bergen. In het zuiden waait soms de <b>mistral</b>, een harde, koude wind.</p>
<p>In Québec is het in de winter gerust −25 °C: <i>Il fait frette !</i> zeggen ze daar.</p>` },
    ex: [
      { t: "cloze", s: "Il ___ beau aujourd'hui.", a: ["fait"], o: ["fait", "est", "a"], nl: "Het is mooi weer vandaag.", x: "Het weer beschrijf je met faire, niet met être.", tag: "fr-meteo" },
      { t: "cloze", s: "Qu'est-ce que vous ___ ?", a: ["faites"], o: ["faites", "faisez", "font"], nl: "Wat doen jullie?", x: "Uitzondering: vous faites, niet faisez. Net als vous êtes en vous dites.", tag: "fr-faire" },
      { t: "cloze", s: "Ils ___ du ski en hiver.", a: ["font"], o: ["font", "faisent", "fait"], nl: "Ze skiën in de winter.", tag: "fr-faire" },
      { t: "cloze", s: "Je ___ du sport le samedi.", a: ["fais"], h: "faire", nl: "Ik sport op zaterdag.", tag: "fr-faire" },
      { t: "cloze", s: "___ printemps, il pleut souvent.", a: ["Au"], o: ["Au", "En", "Dans le"], nl: "In de lente regent het vaak.", x: "Uitzondering: au printemps, maar en été, en automne, en hiver.", tag: "fr-saison" },
      { t: "cloze", s: "___ été, il fait chaud.", a: ["En"], o: ["En", "Au", "À"], nl: "In de zomer is het warm.", tag: "fr-saison" },
      { t: "cloze", s: "Je ___ aller à la mer.", a: ["veux"], o: ["veux", "veut", "voulons"], nl: "Ik wil naar zee gaan.", tag: "fr-pouvoir" },
      { t: "cloze", s: "Nous ___ partir demain.", a: ["devons"], o: ["devons", "doivent", "dois"], nl: "We moeten morgen vertrekken.", tag: "fr-pouvoir" },
      { t: "mc", q: "«Ik kan zwemmen» (ik heb het geleerd):", o: ["Je sais nager.", "Je peux nager.", "Je connais nager."], x: "Savoir = kunnen omdat je het geleerd hebt. Pouvoir = het is mogelijk of het mag.", tag: "fr-pouvoir" },
      { t: "mc", q: "Hoe zeg je «Het regent»?", o: ["Il pleut.", "Il fait pluie.", "Il est pluie."], tag: "fr-meteo" },
      { t: "mc", q: "Hoe zeg je «op 1 mei»?", o: ["le premier mai", "le un mai", "en premier mai"], x: "Alleen bij de eerste dag gebruik je premier; daarna gewone getallen (le deux mai).", tag: "fr-date" },
      { t: "tr", nl: "Wat voor weer is het?", a: ["Quel temps fait-il ?", "Il fait quel temps ?", "Quel temps il fait ?"], tag: "fr-meteo" },
      { t: "tr", nl: "Het is koud in januari.", a: ["Il fait froid en janvier.", "En janvier, il fait froid."], tag: "fr-meteo" },
      { t: "tr", nl: "Ik kan morgen niet komen.", a: ["Je ne peux pas venir demain.", "Demain, je ne peux pas venir."], tag: "fr-pouvoir" },
      { t: "tr", nl: "Wat doe je?", a: ["Qu'est-ce que tu fais ?", "Tu fais quoi ?", "Que fais-tu ?"], tag: "fr-faire" },
      { t: "order", s: "En hiver nous faisons du ski à la montagne.", nl: "In de winter skiën we in de bergen.", tag: "fr-ordre" },
      { t: "match", p: [["le printemps", "de lente"], ["l'été", "de zomer"], ["l'automne", "de herfst"], ["l'hiver", "de winter"], ["la pluie", "de regen"]], tag: "fr-voc" }
    ],
    reading: {
      t: "La météo de la semaine", type: "Weerbericht op de radio",
      p: [
        ["Bonjour ! Voici la météo pour ce week-end. Samedi, il fait beau dans le sud : il y a du soleil et il fait vingt-deux degrés à Marseille.", "Goedendag! Hier is het weerbericht voor dit weekend. Zaterdag is het mooi weer in het zuiden: de zon schijnt en het is tweeëntwintig graden in Marseille."],
        ["Dans le nord, il pleut et il y a du vent. À Lille, il fait douze degrés. Vous devez prendre un parapluie !", "In het noorden regent het en waait het. In Lille is het twaalf graden. U moet een paraplu meenemen!"],
        ["Dimanche, il fait froid à la montagne et il neige dans les Alpes. Vous pouvez faire du ski, mais attention sur la route.", "Zondag is het koud in de bergen en sneeuwt het in de Alpen. U kunt skiën, maar pas op op de weg."]
      ],
      gl: [["la météo", "het weerbericht"], ["le sud", "het zuiden"], ["le nord", "het noorden"], ["le degré", "de graad"], ["la route", "de weg"]],
      q: [
        { t: "mc", q: "Quel temps fait-il à Marseille samedi ?", o: ["Il fait beau", "Il pleut", "Il neige"] },
        { t: "mc", q: "Il fait combien de degrés à Lille ?", o: ["Douze", "Vingt-deux", "Deux"] },
        { t: "mc", q: "Où est-ce qu'il neige dimanche ?", o: ["Dans les Alpes", "À Lille", "Dans le sud"] }
      ]
    },
    say: [["Quel temps fait-il ?", "Wat voor weer is het?"], ["Il fait froid et il pleut.", "Het is koud en het regent."], ["En été, je vais à la mer.", "In de zomer ga ik naar zee."], ["Je ne peux pas venir demain.", "Ik kan morgen niet komen."]],
    task: { nl: "Schrijf 3 of 4 zinnen over het weer bij jou: hoe is het vandaag, en welk seizoen vind je het fijnst en waarom?", model: "Aujourd'hui, il fait froid et il y a du vent. Je préfère l'été, parce qu'il fait chaud et je peux nager. En hiver, il pleut souvent aux Pays-Bas." },
    scenario: { nl: "Je belt met een Franse vriend en praat over het weer en vakantieplannen.", role: "You are Hugo, a friend from Nice. Chat with the learner about the weather where they are, which season they prefer and what they want to do on their next vacation. Use tu and simple French.", goal: "Vertel wat voor weer het is en wat je in de vakantie wilt doen." }
  });

  /* ───────────────────────── A1 · 8 ───────────────────────── */
  U({
    id: "fr-a1-08", level: "A1", icon: "⚽", title: "Les loisirs", nl: "Vrije tijd en hobby's",
    goals: ["Over je hobby's praten", "Zeggen wat je graag en niet graag doet", "Vragen stellen met est-ce que", "Ontkennen met ne … pas, ne … jamais en ne … rien"],
    vocab: [
      ["le sport", "de sport"], ["le foot", "het voetbal"], ["le tennis", "het tennis"], ["le vélo", "de fiets / het fietsen"], ["la natation", "het zwemmen"], ["la randonnée", "het wandelen / de trektocht"],
      ["la musique", "de muziek"], ["la guitare", "de gitaar"], ["le piano", "de piano"], ["le cinéma", "de bioscoop"], ["le film", "de film"], ["le livre", "het boek"],
      ["lire", "lezen"], ["écouter", "luisteren naar"], ["jouer", "spelen"], ["chanter", "zingen"], ["danser", "dansen"], ["cuisiner", "koken"], ["sortir", "uitgaan"],
      ["voyager", "reizen"], ["se promener", "wandelen"], ["le week-end", "het weekend"], ["le temps libre", "de vrije tijd"],
      ["souvent", "vaak"], ["parfois", "soms"], ["toujours", "altijd"], ["ne … jamais", "nooit"], ["ne … rien", "niets"], ["J'adore…", "Ik ben dol op…"], ["Je déteste…", "Ik heb een hekel aan…"],
      ["Je préfère…", "Ik heb liever…"], ["ensemble", "samen"], ["une équipe", "een team / een ploeg"], ["gagner", "winnen"], ["Pourquoi ?", "Waarom?"], ["parce que", "omdat"]
    ],
    grammar: [
      { t: "Aimer + heel werkwoord, en faire du / jouer au / jouer du", es: "Parler de ses loisirs",
        html: `<p>Na <b>aimer, adorer, préférer</b> en <b>détester</b> komt een <b>heel werkwoord</b> (infinitief), zonder «te»: <i>J'aime <b>lire</b>.</i> (Ik hou van lezen.) <i>Elle déteste <b>cuisiner</b>.</i> Of een zelfstandig naamwoord met <b>le, la, les</b>: <i>J'adore <b>le</b> cinéma.</i></p>
<p>Voor sporten en activiteiten gebruik je <b>faire du / de la / de l'</b>: <i>faire <b>du</b> vélo</i>, <i>faire <b>de la</b> natation</i>.</p>
<p>Bij <b>jouer</b> hangt het voorzetsel af van wat je speelt. Een <b>sport of spel</b>: <b>jouer à</b> → <i>jouer <b>au</b> foot, jouer <b>aux</b> cartes</i>. Een <b>instrument</b>: <b>jouer de</b> → <i>jouer <b>du</b> piano, jouer <b>de la</b> guitare</i>. Het Nederlands zegt in beide gevallen gewoon «spelen».</p>
<p>⚠️ <b>Uitzondering na een ontkenning:</b> <i>du, de la</i> worden <b>de</b>: <i>Je ne fais <b>pas de</b> sport.</i> Maar bij <i>jouer au / jouer du</i> blijft het lidwoord staan: <i>Je ne joue <b>pas au</b> foot.</i> Waarom? Daar hoort <i>au / du</i> bij het voorzetsel van het werkwoord (jouer à, jouer de); het is geen hoeveelheid.</p>`,
        table: [["", "voorbeeld", "betekenis"], ["aimer + infinitief", "J'aime danser.", "Ik hou van dansen."], ["faire du / de la", "Je fais du vélo.", "Ik fiets."], ["jouer à (sport)", "Je joue au tennis.", "Ik tennis."], ["jouer de (instrument)", "Je joue du piano.", "Ik speel piano."]],
        ex: [["Tu aimes voyager ?", "Hou je van reizen?"], ["Elle joue de la guitare dans un groupe.", "Ze speelt gitaar in een band."], ["Nous faisons de la randonnée le dimanche.", "We wandelen op zondag."]] },
      { t: "Ontkennen: ne … pas, ne … jamais, ne … rien", es: "La négation",
        html: `<p>De Franse ontkenning bestaat uit <b>twee delen</b> die om het vervoegde werkwoord heen staan: <b>ne</b> + werkwoord + <b>pas</b>. Voor een klinker wordt <i>ne</i> → <b>n'</b>: <i>Je <b>n'</b>aime <b>pas</b> le foot.</i></p>
<p>Wissel <i>pas</i> voor een ander woord en je krijgt een andere ontkenning: <b>ne … jamais</b> (nooit), <b>ne … rien</b> (niets), <b>ne … plus</b> (niet meer), <b>ne … personne</b> (niemand).</p>
<p>Let op: je gebruikt <i>pas</i> dan <b>niet</b> meer erbij. <i>Je ne fais <b>jamais</b> de sport</i>, niet <s>je ne fais pas jamais</s>.</p>
<p>In <b>spreektaal</b> laten Fransen <i>ne</i> bijna altijd weg: <i>J'aime pas ça. Je sais pas.</i> Je hoort het de hele dag; schrijf en leer het wél met <i>ne</i>.</p>
<p>Bij twee werkwoorden staat de ontkenning om het <b>eerste</b>: <i>Je <b>ne</b> veux <b>pas</b> sortir.</i></p>`,
        table: [["ontkenning", "voorbeeld", "betekenis"], ["ne … pas", "Je ne danse pas.", "Ik dans niet."], ["ne … jamais", "Il ne lit jamais.", "Hij leest nooit."], ["ne … rien", "Je ne fais rien.", "Ik doe niets."], ["ne … plus", "Elle ne joue plus.", "Ze speelt niet meer."]],
        ex: [["Je n'aime pas le tennis.", "Ik hou niet van tennis."], ["Nous ne sortons jamais le lundi.", "We gaan nooit uit op maandag."], ["Le dimanche, je ne fais rien.", "Op zondag doe ik niets."]] },
      { t: "Vragen stellen: toon, est-ce que, omkering", es: "Poser des questions",
        html: `<p>Er zijn drie manieren om een vraag te stellen, van informeel naar formeel:</p>
<p>1. <b>Vraagtoon</b> (spreektaal): <i>Tu aimes le sport ?</i></p>
<p>2. <b>Est-ce que</b> ervoor (altijd goed, neutraal): <i><b>Est-ce que</b> tu aimes le sport ?</i> De woordvolgorde blijft die van een gewone zin. Voor een klinker: <i>est-ce <b>qu'</b>il…</i></p>
<p>3. <b>Omkering</b> met een streepje (formeel, geschreven): <i>Aimes-tu le sport ?</i> ⚠️ <b>Uitzondering:</b> eindigt het werkwoord op een klinker en volgt <i>il, elle</i> of <i>on</i>, dan komt er een <b>-t-</b> tussen: <i>Joue<b>-t-</b>il au foot ?</i> Die t betekent niets; hij staat er alleen om twee klinkers niet te laten botsen.</p>
<p>Vraagwoorden: <b>où</b> (waar), <b>quand</b> (wanneer), <b>comment</b> (hoe), <b>pourquoi</b> (waarom), <b>combien</b> (hoeveel), <b>qui</b> (wie), <b>qu'est-ce que</b> (wat). <i>Qu'est-ce que tu fais ?</i> In spreektaal ook achteraan: <i>Tu fais <b>quoi</b> ?</i> <i>Tu habites <b>où</b> ?</i></p>`,
        table: [["", "voorbeeld"], ["vraagtoon", "Vous jouez au tennis ?"], ["est-ce que", "Est-ce que vous jouez au tennis ?"], ["omkering", "Jouez-vous au tennis ?"], ["met vraagwoord", "Où est-ce que vous jouez ?"], ["wat", "Qu'est-ce que tu lis ?"]],
        ex: [["Est-ce que tu fais du sport ?", "Doe je aan sport?"], ["Pourquoi est-ce que tu ne sors pas ?", "Waarom ga je niet uit?"], ["Qu'est-ce que vous faites le week-end ?", "Wat doen jullie in het weekend?"]] }
    ],
    dialogue: {
      t: "Qu'est-ce que tu fais le week-end ?", place: "Toulouse 🇫🇷",
      lines: [
        ["Manon", "Qu'est-ce que tu fais le week-end, Daan ?", "Wat doe jij in het weekend, Daan?"],
        ["Daan", "Le samedi, je joue au foot avec mon équipe. Et toi ?", "Op zaterdag voetbal ik met mijn team. En jij?"],
        ["Manon", "Moi, je déteste le foot ! Je préfère la musique. Je joue de la guitare.", "Ik heb een hekel aan voetbal! Ik heb liever muziek. Ik speel gitaar."],
        ["Daan", "Ah bon ? Est-ce que tu chantes aussi ?", "O ja? Zing je ook?"],
        ["Manon", "Non, je ne chante jamais. Je chante très mal !", "Nee, ik zing nooit. Ik zing heel slecht!"],
        ["Daan", "Et le dimanche, tu fais du sport ?", "En op zondag, sport je dan?"],
        ["Manon", "Parfois, je fais de la randonnée. Mais souvent, je ne fais rien.", "Soms ga ik wandelen. Maar vaak doe ik niets."],
        ["Daan", "Tu aimes aller au cinéma ?", "Ga je graag naar de bioscoop?"],
        ["Manon", "Oui, j'adore ça ! Il y a un bon film ce soir.", "Ja, daar ben ik dol op! Er draait vanavond een goede film."],
        ["Daan", "Super. On y va ensemble ?", "Top. Gaan we samen?"]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce que Daan fait le samedi ?", o: ["Il joue au foot", "Il joue de la guitare", "Il fait de la randonnée"] },
        { t: "mc", q: "Pourquoi Manon ne chante-t-elle jamais ?", o: ["Elle chante très mal", "Elle déteste la musique", "Elle n'a pas le temps"] },
        { t: "mc", q: "Qu'est-ce que Manon adore ?", o: ["Aller au cinéma", "Le foot", "Chanter"] }
      ]
    },
    culture: { t: "Verenigingen, pétanque en de zevende kunst", html: `<p>Frankrijk heeft meer dan een miljoen <b>associations</b> (verenigingen): voor sport, muziek, wandelen, toneel. In september houdt bijna elke gemeente een <i>forum des associations</i>, waar je je voor het hele jaar inschrijft.</p>
<p>🎬 Film heet in Frankrijk <b>le septième art</b>, de zevende kunst. Fransen gaan vaker naar de bioscoop dan bijna alle andere Europeanen, en buitenlandse films zijn er meestal nagesynchroniseerd: zoek naar <b>VO</b> (<i>version originale</i>) als je de originele taal wilt.</p>
<p>In het zuiden speelt men op elk dorpsplein <b>pétanque</b> (jeu de boules). Wielrennen is nationale passie: in juli volgt het hele land <b>le Tour de France</b>.</p>` },
    ex: [
      { t: "cloze", s: "Je joue ___ tennis.", a: ["au"], o: ["au", "du", "le"], nl: "Ik tennis.", x: "Een sport: jouer à → au.", tag: "fr-loisir" },
      { t: "cloze", s: "Elle joue ___ piano.", a: ["du"], o: ["du", "au", "le"], nl: "Ze speelt piano.", x: "Een instrument: jouer de → du.", tag: "fr-loisir" },
      { t: "cloze", s: "Nous faisons ___ vélo.", a: ["du"], o: ["du", "au", "le"], nl: "We fietsen.", tag: "fr-loisir" },
      { t: "cloze", s: "J'aime ___.", a: ["lire"], o: ["lire", "lis", "de lire"], nl: "Ik hou van lezen.", x: "Na aimer komt het hele werkwoord, zonder de of à.", tag: "fr-loisir" },
      { t: "cloze", s: "Je ne fais pas ___ sport.", a: ["de"], o: ["de", "du", "le"], nl: "Ik doe niet aan sport.", x: "Uitzondering: na een ontkenning wordt du → de.", tag: "fr-neg" },
      { t: "cloze", s: "Il ne lit ___.", a: ["jamais"], o: ["jamais", "pas jamais", "toujours"], nl: "Hij leest nooit.", x: "Jamais vervangt pas; je gebruikt ze niet samen.", tag: "fr-neg" },
      { t: "cloze", s: "Le dimanche, je ne fais ___.", a: ["rien"], o: ["rien", "pas rien", "jamais"], nl: "Op zondag doe ik niets.", tag: "fr-neg" },
      { t: "cloze", s: "Je ___ aime pas le foot.", a: ["n'"], o: ["n'", "ne", "pas"], nl: "Ik hou niet van voetbal.", tag: "fr-neg" },
      { t: "cloze", s: "___ tu aimes danser ?", a: ["Est-ce que"], o: ["Est-ce que", "Qu'est-ce que", "Est-ce"], nl: "Hou je van dansen?", tag: "fr-q" },
      { t: "mc", q: "Hoe vraag je «Wat doe je?»", o: ["Qu'est-ce que tu fais ?", "Est-ce que tu fais ?", "Quoi tu fais ?"], tag: "fr-q" },
      { t: "mc", q: "Welke zin is juist (formeel)?", o: ["Joue-t-il au foot ?", "Joue-il au foot ?", "Joue il au foot ?"], x: "Uitzondering: tussen twee klinkers komt een -t-.", tag: "fr-q" },
      { t: "mc", q: "In spreektaal hoor je «J'aime pas ça». Wat is er weggelaten?", o: ["ne", "pas", "je"], tag: "fr-neg" },
      { t: "tr", nl: "Ik speel gitaar.", a: ["Je joue de la guitare."], tag: "fr-loisir" },
      { t: "tr", nl: "Ik dans niet graag.", a: ["Je n'aime pas danser."], tag: "fr-neg" },
      { t: "tr", nl: "Wat doe je in het weekend?", a: ["Qu'est-ce que tu fais le week-end ?", "Tu fais quoi le week-end ?", "Que fais-tu le week-end ?", "Qu'est-ce que vous faites le week-end ?"], tag: "fr-q" },
      { t: "tr", nl: "We gaan vaak naar de bioscoop.", a: ["Nous allons souvent au cinéma.", "On va souvent au cinéma."], tag: "fr-voc" },
      { t: "order", s: "Le samedi je joue au foot avec mes amis.", nl: "Op zaterdag voetbal ik met mijn vrienden.", tag: "fr-ordre" },
      { t: "match", p: [["souvent", "vaak"], ["parfois", "soms"], ["toujours", "altijd"], ["jamais", "nooit"], ["ensemble", "samen"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Cherche partenaire de tennis", type: "Advertentie op een prikbord",
      p: [
        ["Bonjour ! Je m'appelle Karim, j'ai trente-deux ans et j'habite à Toulouse. Je cherche un ou une partenaire pour jouer au tennis le samedi matin.", "Hallo! Ik heet Karim, ik ben tweeëndertig en ik woon in Toulouse. Ik zoek een partner om op zaterdagochtend te tennissen."],
        ["Je ne joue pas très bien, mais j'adore ça. Je fais aussi du vélo et de la natation. Je n'aime pas le foot.", "Ik speel niet zo goed, maar ik vind het geweldig. Ik fiets en zwem ook. Ik hou niet van voetbal."],
        ["Le soir, j'aime cuisiner et écouter de la musique. Je ne regarde jamais la télé. Vous voulez jouer avec moi ? Écrivez-moi !", "'s Avonds kook ik graag en luister ik naar muziek. Ik kijk nooit tv. Wilt u met mij spelen? Schrijf me!"]
      ],
      gl: [["un / une partenaire", "een partner"], ["très bien", "heel goed"], ["aussi", "ook"], ["le soir", "'s avonds"], ["avec moi", "met mij"]],
      q: [
        { t: "mc", q: "Qu'est-ce que Karim cherche ?", o: ["Un partenaire de tennis", "Une équipe de foot", "Un professeur de musique"] },
        { t: "mc", q: "Quel sport est-ce que Karim n'aime pas ?", o: ["Le foot", "Le vélo", "La natation"] },
        { t: "mc", q: "Qu'est-ce que Karim ne fait jamais ?", o: ["Regarder la télé", "Cuisiner", "Écouter de la musique"] }
      ]
    },
    say: [["Qu'est-ce que tu fais le week-end ?", "Wat doe je in het weekend?"], ["Je joue au tennis et je fais du vélo.", "Ik tennis en ik fiets."], ["Je n'aime pas danser.", "Ik dans niet graag."], ["J'adore aller au cinéma.", "Ik ga dolgraag naar de bioscoop."]],
    task: { nl: "Schrijf 4 zinnen over je vrije tijd: wat doe je graag, hoe vaak, en wat doe je nooit?", model: "Le week-end, je fais souvent du vélo avec mes amis. J'aime lire et écouter de la musique. Parfois, je vais au cinéma. Je ne joue jamais au foot, parce que je déteste ça." },
    scenario: { nl: "Je leert Manon kennen op een feestje en jullie praten over hobby's.", role: "You are Manon, a sociable woman from Toulouse who plays guitar and loves cinema but hates football. Ask the learner about their hobbies, how often they do them and what they don't like. Use tu and simple French.", goal: "Vertel wat je graag doet, wat je nooit doet, en vraag naar haar hobby's." }
  });

  /* ───────────────────────── A1 · 9 ───────────────────────── */
  U({
    id: "fr-a1-09", level: "A1", icon: "🏠", title: "À la maison", nl: "Thuis: kamers en meubels",
    goals: ["Je huis en de kamers beschrijven", "Zeggen waar iets staat", "Werkwoorden op -ir en -re gebruiken (finir, prendre)", "Chez gebruiken (bij iemand thuis)"],
    vocab: [
      ["la maison", "het huis"], ["un appartement", "een appartement"], ["la pièce", "de kamer / het vertrek"], ["le salon", "de woonkamer"], ["la cuisine", "de keuken"], ["la chambre", "de slaapkamer"],
      ["la salle de bains", "de badkamer"], ["le jardin", "de tuin"], ["un étage", "een verdieping"], ["un escalier", "een trap"], ["la porte", "de deur"], ["la fenêtre", "het raam"],
      ["le lit", "het bed"], ["la table", "de tafel"], ["la chaise", "de stoel"], ["le canapé", "de bank (om op te zitten)"], ["une armoire", "een kast"], ["le frigo", "de koelkast"],
      ["la lampe", "de lamp"], ["le mur", "de muur"], ["la clé", "de sleutel"], ["le loyer", "de huur"], ["le voisin / la voisine", "de buurman / de buurvrouw"],
      ["sur", "op"], ["sous", "onder"], ["dans", "in"], ["chez", "bij (iemand thuis)"], ["habiter", "wonen"], ["louer", "huren"], ["choisir", "kiezen"],
      ["prendre", "nemen"], ["attendre", "wachten (op)"], ["comprendre", "begrijpen"], ["apprendre", "leren"], ["confortable", "comfortabel"], ["calme", "rustig"]
    ],
    grammar: [
      { t: "Werkwoorden op -ir: finir, choisir", es: "Les verbes en -ir",
        html: `<p>De tweede groep werkwoorden eindigt op <b>-ir</b>. De uitgangen zijn <b>-is, -is, -it, -issons, -issez, -issent</b>. In het meervoud komt er dus <b>-iss-</b> tussen: <i>nous fin<b>iss</b>ons</i>.</p>
<p>Zo gaan <i>finir</i> (eindigen), <i>choisir</i> (kiezen), <i>réussir</i> (slagen), <i>remplir</i> (invullen), <i>réfléchir</i> (nadenken).</p>
<p>⚠️ <b>Uitzondering:</b> niet alle werkwoorden op -ir volgen dit patroon. Een kleine, maar veelgebruikte groep krijgt <b>geen -iss-</b> en verliest in het enkelvoud de laatste medeklinker van de stam: <i>dormir → je <b>dors</b>, nous <b>dormons</b></i>; <i>sortir → je <b>sors</b>, nous <b>sortons</b></i>; <i>partir → je <b>pars</b></i>. Waarom? Dit zijn oudere werkwoorden uit een andere Latijnse groep. Je herkent ze niet aan de vorm; leer bij een nieuw -ir-werkwoord meteen de nous-vorm erbij.</p>`,
        table: [["", "finir (regelmatig)", "dormir (uitzondering)"], ["je", "finis", "dors"], ["tu", "finis", "dors"], ["il / elle / on", "finit", "dort"], ["nous", "finissons", "dormons"], ["vous", "finissez", "dormez"], ["ils / elles", "finissent", "dorment"]],
        sum: "Je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
        ex: [["Je finis à cinq heures.", "Ik ben om vijf uur klaar."], ["Vous choisissez quelle chambre ?", "Welke kamer kiest u?"], ["Les enfants dorment.", "De kinderen slapen."]] },
      { t: "Werkwoorden op -re: attendre en prendre", es: "Les verbes en -re",
        html: `<p>De derde groep eindigt op <b>-re</b>. Regelmatige werkwoorden zoals <i>attendre</i> (wachten), <i>vendre</i> (verkopen), <i>répondre</i> (antwoorden) krijgen <b>-s, -s, –, -ons, -ez, -ent</b>. Bij hij/zij komt er <b>niets</b> achter de stam: <i>il attend</i>.</p>
<p>⚠️ <b>Uitzondering: prendre</b> (nemen) en zijn familie <i>comprendre</i> (begrijpen) en <i>apprendre</i> (leren) verliezen in het meervoud de <b>d</b>: <i>nous <b>prenons</b>, vous <b>prenez</b>, ils <b>prennent</b></i> (met dubbel n), niet <s>nous prendons</s>. Het enkelvoud is gewoon: <i>je prends, tu prends, il prend</i>.</p>
<p><i>Prendre</i> gebruik je veel breder dan «nemen»: <i>prendre le bus</i> (de bus nemen), <i>prendre un café</i> (koffie drinken), <i>prendre le petit déjeuner</i> (ontbijten), <i>prendre une douche</i> (douchen).</p>
<p>Let op: <i>attendre</i> heeft <b>geen</b> voorzetsel. <i>J'attends <b>le bus</b></i> = Ik wacht <b>op</b> de bus.</p>`,
        table: [["", "attendre", "prendre"], ["je / j'", "attends", "prends"], ["tu", "attends", "prends"], ["il / elle / on", "attend", "prend"], ["nous", "attendons", "prenons"], ["vous", "attendez", "prenez"], ["ils / elles", "attendent", "prennent"]],
        ex: [["Je prends le bus à huit heures.", "Ik neem de bus om acht uur."], ["Vous comprenez le français ?", "Begrijpt u Frans?"], ["Nous attendons les voisins.", "We wachten op de buren."]] },
      { t: "Chez, dans, sur, sous", es: "Chez et les prépositions de lieu",
        html: `<p><b>Chez</b> betekent <i>bij iemand thuis</i> of <i>bij iemand in de zaak</i>. Erachter komt altijd een <b>persoon</b>, nooit een gebouw: <i>chez moi</i> (bij mij thuis), <i>chez Paul</i>, <i>chez le médecin</i> (bij de dokter), <i>chez le boulanger</i> (bij de bakker).</p>
<p>Na <i>chez</i> (en na andere voorzetsels) gebruik je de <b>beklemtoonde vorm</b> van het voornaamwoord: <b>moi, toi, lui, elle, nous, vous, eux, elles</b>. <i>Je rentre chez <b>moi</b>. Tu viens chez <b>nous</b> ?</i></p>
<p>Vergelijk: <i>Je vais <b>chez</b> le boulanger</i> (persoon) ↔ <i>Je vais <b>à la</b> boulangerie</i> (gebouw).</p>
<p><b>Dans</b> = in (binnenin), <b>sur</b> = op, <b>sous</b> = onder: <i>Les clés sont <b>dans</b> le sac, <b>sur</b> la table ou <b>sous</b> le canapé.</i></p>`,
        table: [["Frans", "Nederlands"], ["chez moi", "bij mij thuis"], ["chez toi", "bij jou thuis"], ["chez mes parents", "bij mijn ouders"], ["chez le médecin", "bij de dokter"], ["dans la cuisine", "in de keuken"], ["sur la table", "op de tafel"], ["sous le lit", "onder het bed"]],
        ex: [["Ce soir, on mange chez moi.", "Vanavond eten we bij mij thuis."], ["Le chat dort sous la table.", "De kat slaapt onder de tafel."], ["Il habite encore chez ses parents.", "Hij woont nog bij zijn ouders."]] }
    ],
    dialogue: {
      t: "La visite de l'appartement", place: "Lyon 🇫🇷",
      lines: [
        ["Agent", "Bonjour ! Entrez. Voici le salon.", "Goedendag! Komt u binnen. Dit is de woonkamer."],
        ["Daan", "Il est grand ! Et il y a deux fenêtres.", "Hij is groot! En er zijn twee ramen."],
        ["Agent", "Oui, c'est très calme. La cuisine est à droite, avec un frigo neuf.", "Ja, het is heel rustig. De keuken is rechts, met een nieuwe koelkast."],
        ["Daan", "Il y a combien de chambres ?", "Hoeveel slaapkamers zijn er?"],
        ["Agent", "Deux chambres. La salle de bains est entre les chambres.", "Twee slaapkamers. De badkamer ligt tussen de slaapkamers."],
        ["Daan", "Est-ce qu'il y a un jardin ?", "Is er een tuin?"],
        ["Agent", "Non, nous sommes au troisième étage. Mais il y a un parc en face.", "Nee, we zitten op de derde verdieping. Maar er is een park aan de overkant."],
        ["Daan", "Je comprends. Et le loyer, c'est combien ?", "Ik begrijp het. En de huur, hoeveel is die?"],
        ["Agent", "Neuf cents euros par mois. Vous prenez l'appartement ?", "Negenhonderd euro per maand. Neemt u het appartement?"],
        ["Daan", "Je dois réfléchir. Je réponds demain, d'accord ?", "Ik moet erover nadenken. Ik geef morgen antwoord, goed?"]
      ],
      q: [
        { t: "mc", q: "Il y a combien de chambres ?", o: ["Deux", "Trois", "Une"] },
        { t: "mc", q: "Pourquoi n'y a-t-il pas de jardin ?", o: ["L'appartement est au troisième étage", "Le jardin est trop petit", "Il y a un parc"] },
        { t: "mc", q: "Qu'est-ce que Daan décide ?", o: ["Il veut réfléchir", "Il prend l'appartement", "Il ne veut pas l'appartement"] }
      ]
    },
    culture: { t: "F2, T3 en de «rez-de-chaussée»", html: `<p>In Franse woonadvertenties zie je codes als <b>F2</b> of <b>T3</b>. Het cijfer telt de <b>hoofdkamers</b> (woonkamer + slaapkamers); keuken en badkamer tellen niet mee. Een T3 heeft dus een woonkamer en twee slaapkamers.</p>
<p>🏢 De begane grond heet <b>le rez-de-chaussée</b> (afgekort RDC). <b>Le premier étage</b> is de eerste verdieping erboven.</p>
<p>In veel Franse huizen is het toilet een <b>aparte ruimte</b> (<i>les toilettes</i> of <i>les WC</i>), los van <i>la salle de bains</i>. Vraag je bij iemand thuis naar «la salle de bains», dan kom je mogelijk in een kamer zonder wc terecht.</p>
<p>Huren in Parijs is duur: voor een <b>studio</b> van 20 m² betaal je al snel 900 euro. Huurders moeten vaak een dik <b>dossier</b> met loonstroken en een borgsteller aanleveren.</p>` },
    ex: [
      { t: "cloze", s: "Je ___ à six heures.", a: ["finis"], o: ["finis", "finit", "finissons"], nl: "Ik ben om zes uur klaar.", tag: "fr-ir-re" },
      { t: "cloze", s: "Nous ___ à midi.", a: ["finissons"], o: ["finissons", "finons", "finissez"], nl: "Wij zijn om twaalf uur klaar.", x: "In het meervoud komt -iss- ertussen.", tag: "fr-ir-re" },
      { t: "cloze", s: "Ils ___ une chambre.", a: ["choisissent"], o: ["choisissent", "choisent", "choisit"], nl: "Ze kiezen een kamer.", tag: "fr-ir-re" },
      { t: "cloze", s: "Nous ___ bien ici.", a: ["dormons"], o: ["dormons", "dormissons", "dorment"], nl: "We slapen hier goed.", x: "Uitzondering: dormir krijgt geen -iss-.", tag: "fr-ir-re" },
      { t: "cloze", s: "Je ___ le bus.", a: ["prends"], o: ["prends", "prend", "prenons"], nl: "Ik neem de bus.", tag: "fr-ir-re" },
      { t: "cloze", s: "Vous ___ le français ?", a: ["comprenez"], o: ["comprenez", "comprendez", "comprennent"], nl: "Begrijpt u Frans?", x: "Uitzondering: prendre, comprendre en apprendre verliezen de d in het meervoud.", tag: "fr-ir-re" },
      { t: "cloze", s: "Ils ___ un café.", a: ["prennent"], o: ["prennent", "prendent", "prenent"], nl: "Ze drinken een koffie.", tag: "fr-ir-re" },
      { t: "cloze", s: "Elle ___ le métro.", a: ["attend"], o: ["attend", "attends", "attent"], nl: "Ze wacht op de metro.", x: "Bij -re-werkwoorden komt er bij il/elle niets achter de stam.", tag: "fr-ir-re" },
      { t: "cloze", s: "Ce soir, on mange ___ moi.", a: ["chez"], o: ["chez", "à", "dans"], nl: "Vanavond eten we bij mij thuis.", tag: "fr-prep" },
      { t: "mc", q: "Hoe zeg je «Ik wacht op de bus»?", o: ["J'attends le bus.", "J'attends sur le bus.", "J'attends pour le bus."], x: "Attendre heeft geen voorzetsel.", tag: "fr-ir-re" },
      { t: "mc", q: "Welke zin is juist?", o: ["Je vais chez le médecin.", "Je vais chez la pharmacie.", "Je vais à le médecin."], x: "Chez + persoon. Een gebouw krijgt à.", tag: "fr-prep" },
      { t: "mc", q: "Een appartement «T3» heeft:", o: ["een woonkamer en twee slaapkamers", "drie slaapkamers", "drie verdiepingen"], tag: "fr-voc" },
      { t: "tr", nl: "De sleutels liggen op de tafel.", a: ["Les clés sont sur la table."], tag: "fr-prep" },
      { t: "tr", nl: "Ik woon in een klein appartement.", a: ["J'habite dans un petit appartement."], tag: "fr-voc" },
      { t: "tr", nl: "Ik begrijp het niet.", a: ["Je ne comprends pas."], tag: "fr-ir-re" },
      { t: "tr", nl: "Wij leren Frans.", a: ["Nous apprenons le français.", "On apprend le français."], tag: "fr-ir-re" },
      { t: "order", s: "La salle de bains est entre les deux chambres.", nl: "De badkamer ligt tussen de twee slaapkamers.", tag: "fr-ordre" },
      { t: "match", p: [["le salon", "de woonkamer"], ["la cuisine", "de keuken"], ["la chambre", "de slaapkamer"], ["le jardin", "de tuin"], ["la fenêtre", "het raam"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Appartement à louer", type: "Woonadvertentie",
      p: [
        ["À louer : bel appartement T3 au deuxième étage, dans une rue calme près du centre de Lyon. Soixante-cinq mètres carrés.", "Te huur: mooi driekamerappartement op de tweede verdieping, in een rustige straat dicht bij het centrum van Lyon. Vijfenzestig vierkante meter."],
        ["Il y a un grand salon avec deux fenêtres, une cuisine neuve, deux chambres et une salle de bains. Les toilettes sont séparées. Il n'y a pas de jardin.", "Er is een grote woonkamer met twee ramen, een nieuwe keuken, twee slaapkamers en een badkamer. Het toilet is apart. Er is geen tuin."],
        ["Le loyer est de neuf cent cinquante euros par mois. Le métro est à cinq minutes à pied. Vous prenez rendez-vous par téléphone.", "De huur is negenhonderdvijftig euro per maand. De metro is vijf minuten lopen. U maakt telefonisch een afspraak."]
      ],
      gl: [["à louer", "te huur"], ["mètres carrés", "vierkante meter"], ["neuf / neuve", "(gloed)nieuw"], ["séparé / séparée", "apart"], ["prendre rendez-vous", "een afspraak maken"]],
      q: [
        { t: "mc", q: "L'appartement est à quel étage ?", o: ["Au deuxième", "Au troisième", "Au rez-de-chaussée"] },
        { t: "mc", q: "Qu'est-ce qu'il n'y a pas ?", o: ["Un jardin", "Une salle de bains", "Un salon"] },
        { t: "mc", q: "Le loyer est de combien ?", o: ["950 euros", "900 euros", "590 euros"] }
      ]
    },
    say: [["J'habite dans un appartement.", "Ik woon in een appartement."], ["Il y a combien de chambres ?", "Hoeveel slaapkamers zijn er?"], ["Les clés sont sur la table.", "De sleutels liggen op de tafel."], ["Tu viens chez moi ce soir ?", "Kom je vanavond bij mij?"]],
    task: { nl: "Beschrijf je huis of appartement in 4 zinnen: welke kamers zijn er en wat staat waar?", model: "J'habite dans un appartement au premier étage. Il y a un salon, une cuisine et deux chambres. Dans le salon, il y a un grand canapé et une table. Je n'ai pas de jardin, mais le quartier est calme." },
    scenario: { nl: "Je bezichtigt een appartement in Lyon met een makelaar.", role: "You are a real-estate agent in Lyon showing an apartment (T3, third floor, 900 euros per month, no garden). Answer the learner's questions about rooms, rent and the neighborhood, and ask if they want to take it. Use vous and simple French.", goal: "Vraag naar de kamers, de huur en de buurt, en zeg of je het neemt." }
  });

  /* ───────────────────────── A1 · 10 ───────────────────────── */
  U({
    id: "fr-a1-10", level: "A1", icon: "📅", title: "Projets et invitations", nl: "Plannen en uitnodigingen",
    goals: ["Vertellen wat je gaat doen (futur proche)", "Iemand uitnodigen, en een uitnodiging aannemen of afslaan", "Een afspraak maken met dag, datum en tijd", "Venir en het verschil tussen à en de gebruiken"],
    vocab: [
      ["le projet", "het plan"], ["une invitation", "een uitnodiging"], ["inviter", "uitnodigen"], ["la fête", "het feest"], ["un anniversaire", "een verjaardag"], ["le cadeau", "het cadeau"],
      ["le rendez-vous", "de afspraak"], ["venir", "komen"], ["rester", "blijven"], ["partir", "vertrekken"], ["arriver", "aankomen"], ["apporter", "meebrengen"],
      ["ce soir", "vanavond"], ["demain matin", "morgenochtend"], ["la semaine prochaine", "volgende week"], ["le mois prochain", "volgende maand"], ["bientôt", "binnenkort"],
      ["Tu es libre ?", "Ben je vrij?"], ["Ça te dit ?", "Heb je zin?"], ["Avec plaisir !", "Graag!"], ["D'accord.", "Oké. / Akkoord."], ["Bonne idée !", "Goed idee!"],
      ["Désolé, je ne peux pas.", "Sorry, ik kan niet."], ["C'est dommage.", "Dat is jammer."], ["une autre fois", "een andere keer"], ["peut-être", "misschien"],
      ["On se retrouve où ?", "Waar spreken we af?"], ["À quelle heure ?", "Hoe laat?"], ["occupé / occupée", "bezet / druk"], ["le restaurant", "het restaurant"], ["le concert", "het concert"],
      ["Joyeux anniversaire !", "Gefeliciteerd met je verjaardag!"], ["À tout à l'heure !", "Tot straks!"]
    ],
    grammar: [
      { t: "Futur proche: je vais + heel werkwoord", es: "Le futur proche",
        html: `<p>Om te zeggen wat je <b>gaat doen</b>, gebruik je de tegenwoordige tijd van <b>aller</b> + een <b>heel werkwoord</b>. Precies zoals in het Nederlands: <i>Je <b>vais</b> manger</i> = Ik ga eten.</p>
<p>Dit is in spreektaal dé manier om over de toekomst te praten; je kunt er jaren mee vooruit.</p>
<p>De ontkenning staat om <b>aller</b>: <i>Je <b>ne</b> vais <b>pas</b> venir.</i> Bij een wederkerend werkwoord blijft <i>me / te / se</i> bij het hele werkwoord staan: <i>Je vais <b>me</b> coucher.</i></p>
<p>Net als in het Nederlands kun je voor de nabije toekomst ook gewoon de <b>tegenwoordige tijd</b> gebruiken met een tijdsbepaling: <i>Demain, je travaille.</i></p>`,
        table: [["", "aller", "+ infinitief", "betekenis"], ["je", "vais", "partir", "ik ga vertrekken"], ["tu", "vas", "venir", "jij gaat komen"], ["il / elle / on", "va", "rester", "hij / zij gaat blijven"], ["nous", "allons", "manger", "wij gaan eten"], ["vous", "allez", "voir", "u gaat zien"], ["ils / elles", "vont", "arriver", "zij gaan aankomen"]],
        sum: "Je vais partir, tu vas venir, il va rester, nous allons manger.",
        ex: [["Ce soir, je vais regarder un film.", "Vanavond ga ik een film kijken."], ["Qu'est-ce que tu vas faire demain ?", "Wat ga je morgen doen?"], ["Il ne va pas venir à la fête.", "Hij gaat niet naar het feest komen."]] },
      { t: "Venir: komen", es: "Le verbe venir",
        html: `<p><b>Venir</b> (komen) is <b>onregelmatig</b>: de stam wisselt tussen <b>vien-</b> (enkelvoud en zij-vorm) en <b>ven-</b> (nous, vous). Zo gaan ook <i>revenir</i> (terugkomen), <i>devenir</i> (worden) en <i>tenir</i> (vasthouden).</p>
<p>Met <b>de</b> zeg je waar je vandaan komt: <i>Je viens <b>de</b> Rotterdam, <b>des</b> Pays-Bas, <b>du</b> Canada, <b>de</b> France.</i> Met <b>à</b> / <b>chez</b> waar je naartoe komt: <i>Tu viens <b>à</b> la fête ? Tu viens <b>chez</b> moi ?</i></p>
<p>Let op een verschil met het Nederlands: «Ik kom eraan!» is in het Frans <b>J'arrive !</b>, niet <s>je viens</s>.</p>`,
        table: [["", "venir"], ["je", "viens"], ["tu", "viens"], ["il / elle / on", "vient"], ["nous", "venons"], ["vous", "venez"], ["ils / elles", "viennent"]],
        ex: [["Tu viens avec nous ?", "Kom je met ons mee?"], ["Mes parents viennent dimanche.", "Mijn ouders komen zondag."], ["Vous venez d'où ?", "Waar komt u vandaan?"]] },
      { t: "Uitnodigen, aannemen en afslaan", es: "Inviter, accepter, refuser",
        html: `<p>Uitnodigen doe je met <b>Tu veux… ?</b> / <b>Vous voulez… ?</b> + heel werkwoord, of informeel met <b>Ça te dit de… ?</b> (Heb je zin om…?). Heel gewoon is ook <b>On</b> + werkwoord als voorstel: <i><b>On va</b> au cinéma ?</i> = Zullen we naar de bioscoop gaan?</p>
<p>Aannemen: <b>Avec plaisir ! Bonne idée ! D'accord. Volontiers.</b></p>
<p>Afslaan doe je in het Frans zelden met een kaal «non». Je zegt eerst sorry, geeft een reden en stelt iets anders voor: <i><b>Désolé(e), je ne peux pas</b>, je travaille. <b>Une autre fois ?</b></i></p>
<p>⚠️ <b>Let op:</b> <i>désolé</i> krijgt een <b>-e</b> als een vrouw het schrijft: <i>désolé<b>e</b></i>. Je hoort geen verschil.</p>`,
        table: [["", "Frans"], ["uitnodigen", "Tu veux venir dîner samedi ?"], ["voorstellen", "On va au concert ?"], ["aannemen", "Avec plaisir ! / Bonne idée !"], ["afslaan", "Désolé, je ne peux pas. Je suis occupé."], ["alternatief", "Une autre fois ? / Dimanche, peut-être ?"]],
        ex: [["Ça te dit d'aller au restaurant ?", "Heb je zin om naar een restaurant te gaan?"], ["On se retrouve à huit heures devant le cinéma.", "We spreken om acht uur af voor de bioscoop."]] }
    ],
    dialogue: {
      t: "Tu es libre samedi ?", place: "Dakar 🇸🇳",
      lines: [
        ["Awa", "Salut Sanne ! Tu es libre samedi soir ?", "Hoi Sanne! Ben je zaterdagavond vrij?"],
        ["Sanne", "Samedi ? Je ne sais pas. Pourquoi ?", "Zaterdag? Ik weet het niet. Hoezo?"],
        ["Awa", "C'est mon anniversaire. Je vais faire une fête chez moi.", "Ik ben jarig. Ik ga een feest geven bij mij thuis."],
        ["Sanne", "Oh, super ! Avec plaisir. À quelle heure ?", "O, leuk! Graag. Hoe laat?"],
        ["Awa", "Vers huit heures. Ma mère va cuisiner un thiéboudienne.", "Rond acht uur. Mijn moeder gaat thiéboudienne koken."],
        ["Sanne", "Miam ! Je peux apporter quelque chose ?", "Mmm! Kan ik iets meebrengen?"],
        ["Awa", "Du jus de fruits, si tu veux. Daan va venir aussi ?", "Vruchtensap, als je wilt. Gaat Daan ook komen?"],
        ["Sanne", "Non, c'est dommage. Il va partir à Saint-Louis vendredi.", "Nee, dat is jammer. Hij gaat vrijdag naar Saint-Louis vertrekken."],
        ["Awa", "Tant pis. Une autre fois, alors.", "Jammer dan. Een andere keer dus."],
        ["Sanne", "D'accord. À samedi, et joyeux anniversaire !", "Oké. Tot zaterdag, en gefeliciteerd!"]
      ],
      q: [
        { t: "mc", q: "Pourquoi Awa fait-elle une fête ?", o: ["C'est son anniversaire", "Elle a un nouvel appartement", "Sanne va partir"] },
        { t: "mc", q: "Qu'est-ce que Sanne va apporter ?", o: ["Du jus de fruits", "Un gâteau", "Du vin"] },
        { t: "mc", q: "Pourquoi Daan ne vient-il pas ?", o: ["Il va partir à Saint-Louis", "Il travaille samedi", "Il est malade"] }
      ]
    },
    culture: { t: "Op tijd komen, iets meebrengen en «la francophonie»", html: `<p>Ben je bij Fransen thuis uitgenodigd voor het eten, kom dan <b>niet te vroeg</b>: tien tot vijftien minuten later dan afgesproken is beleefd en heet <b>le quart d'heure de politesse</b>. Voor een zakelijke afspraak ben je wél stipt.</p>
<p>🎁 Breng iets mee: bloemen, chocolade of een fles wijn. Aan tafel wacht je tot de gastvrouw of gastheer <b>Bon appétit !</b> zegt.</p>
<p>Frans is niet alleen de taal van Frankrijk. Meer dan 300 miljoen mensen op vijf continenten spreken het: dat heet <b>la francophonie</b>. In <b>Senegal</b> is Frans de officiële taal naast het Wolof; het nationale gerecht <b>thiéboudienne</b> is rijst met vis. De meeste Franstaligen ter wereld wonen tegenwoordig in <b>Afrika</b>.</p>` },
    ex: [
      { t: "cloze", s: "Ce soir, je ___ regarder un film.", a: ["vais"], o: ["vais", "va", "aller"], nl: "Vanavond ga ik een film kijken.", tag: "fr-futur-proche" },
      { t: "cloze", s: "Nous ___ partir demain.", a: ["allons"], o: ["allons", "allez", "vont"], nl: "We gaan morgen vertrekken.", tag: "fr-futur-proche" },
      { t: "cloze", s: "Ils ___ arriver à midi.", a: ["vont"], o: ["vont", "va", "allons"], nl: "Ze gaan om twaalf uur aankomen.", tag: "fr-futur-proche" },
      { t: "cloze", s: "Elle va ___ une fête.", a: ["faire"], o: ["faire", "fait", "fais"], nl: "Ze gaat een feest geven.", x: "Na aller komt het hele werkwoord.", tag: "fr-futur-proche" },
      { t: "cloze", s: "Je ne vais ___ venir.", a: ["pas"], o: ["pas", "ne", "rien"], nl: "Ik ga niet komen.", tag: "fr-futur-proche" },
      { t: "cloze", s: "Tu ___ avec nous ?", a: ["viens"], o: ["viens", "vient", "venez"], nl: "Kom je met ons mee?", tag: "fr-ir-re" },
      { t: "cloze", s: "Mes amis ___ samedi.", a: ["viennent"], o: ["viennent", "venent", "vient"], nl: "Mijn vrienden komen zaterdag.", x: "Onregelmatig: de stam wisselt tussen vien- en ven-, met dubbel n in ils viennent.", tag: "fr-ir-re" },
      { t: "cloze", s: "Je viens ___ Pays-Bas.", a: ["des"], o: ["des", "de", "aux"], nl: "Ik kom uit Nederland.", x: "De + les = des.", tag: "fr-aller" },
      { t: "mc", q: "Je wordt geroepen en zegt «Ik kom eraan!»", o: ["J'arrive !", "Je viens !", "Je vais !"], tag: "fr-voc" },
      { t: "mc", q: "Hoe sla je beleefd een uitnodiging af?", o: ["Désolé, je ne peux pas. Une autre fois ?", "Non.", "Je ne veux pas."], tag: "fr-voc" },
      { t: "mc", q: "«On va au cinéma ?» betekent hier:", o: ["Zullen we naar de bioscoop gaan?", "Men gaat naar de bioscoop.", "Gaat hij naar de bioscoop?"], tag: "fr-q" },
      { t: "mc", q: "Je bent om 20.00 uur bij Fransen thuis uitgenodigd. Wanneer bel je aan?", o: ["Rond 20.10–20.15 uur", "Om 19.45 uur", "Precies om 20.00 uur, geen minuut later"], tag: "fr-voc" },
      { t: "tr", nl: "Wat ga je morgen doen?", a: ["Qu'est-ce que tu vas faire demain ?", "Tu vas faire quoi demain ?", "Que vas-tu faire demain ?", "Qu'est-ce que vous allez faire demain ?"], tag: "fr-futur-proche" },
      { t: "tr", nl: "Ik ga mijn vrienden uitnodigen.", a: ["Je vais inviter mes amis."], tag: "fr-futur-proche" },
      { t: "tr", nl: "Sorry, ik kan niet.", a: ["Désolé, je ne peux pas.", "Désolée, je ne peux pas."], tag: "fr-pouvoir" },
      { t: "tr", nl: "Ben je vrij zaterdag?", a: ["Tu es libre samedi ?", "Est-ce que tu es libre samedi ?", "Es-tu libre samedi ?"], tag: "fr-q" },
      { t: "order", s: "Samedi soir je vais faire une fête chez moi.", nl: "Zaterdagavond ga ik een feest geven bij mij thuis.", tag: "fr-ordre" },
      { t: "match", p: [["venir", "komen"], ["partir", "vertrekken"], ["rester", "blijven"], ["arriver", "aankomen"], ["apporter", "meebrengen"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Invitation", type: "Uitnodiging per bericht",
      p: [
        ["Chers amis, je vais avoir trente ans le 15 juin ! Pour mon anniversaire, je vais faire une grande fête dans le jardin de mes parents, à Bruxelles.", "Lieve vrienden, ik word op 15 juni dertig! Voor mijn verjaardag ga ik een groot feest geven in de tuin van mijn ouders, in Brussel."],
        ["La fête commence à sept heures du soir. Mon frère va jouer de la guitare et nous allons danser. Vous pouvez apporter une boisson ou un dessert.", "Het feest begint om zeven uur 's avonds. Mijn broer gaat gitaar spelen en we gaan dansen. Jullie kunnen een drankje of een toetje meebrengen."],
        ["Est-ce que vous allez venir ? Répondez avant le premier juin, s'il vous plaît. S'il pleut, nous allons faire la fête dans le salon !", "Gaan jullie komen? Antwoord alsjeblieft vóór 1 juni. Als het regent, gaan we het feest in de woonkamer houden!"]
      ],
      gl: [["chers amis", "lieve vrienden"], ["une boisson", "een drankje"], ["un dessert", "een toetje"], ["avant", "vóór"], ["s'il pleut", "als het regent"]],
      q: [
        { t: "mc", q: "La fête est à quelle date ?", o: ["Le 15 juin", "Le premier juin", "Le 30 juin"] },
        { t: "mc", q: "Qui va jouer de la guitare ?", o: ["Le frère", "Les parents", "Les amis"] },
        { t: "mc", q: "Qu'est-ce qui se passe s'il pleut ?", o: ["La fête est dans le salon", "Il n'y a pas de fête", "La fête est dimanche"] }
      ]
    },
    say: [["Qu'est-ce que tu vas faire ce week-end ?", "Wat ga je dit weekend doen?"], ["Tu veux venir chez moi samedi ?", "Wil je zaterdag bij mij komen?"], ["Avec plaisir ! À quelle heure ?", "Graag! Hoe laat?"], ["Désolé, je ne peux pas.", "Sorry, ik kan niet."]],
    task: { nl: "Schrijf een korte uitnodiging (4 zinnen): wat ga je doen, wanneer, waar, en wat moet de ander meebrengen?", model: "Salut ! Samedi, je vais faire une fête chez moi pour mon anniversaire. Ça commence à huit heures. Tu peux apporter une boisson ? Est-ce que tu vas venir ?" },
    scenario: { nl: "Een vriendin uit Dakar nodigt je uit voor haar verjaardag, maar je kunt niet de hele avond.", role: "You are Awa, a warm friend from Dakar, Senegal. Invite the learner to your birthday party on Saturday at 8 pm at your place. Answer questions about time, place and what to bring, and react if they cannot come or must leave early. Use tu and simple French.", goal: "Neem de uitnodiging aan, vraag hoe laat en wat je moet meebrengen, en zeg wat je daarna gaat doen." }
  });
})(window.SPT);
