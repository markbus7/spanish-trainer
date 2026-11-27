/* Frans voor Nederlandstaligen — niveau B1, units 6–10 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-gerondif': 'gérondif (en marchant)', 'fr-cause': 'oorzaak en gevolg (parce que, comme, grâce à, donc)', 'fr-opinion': 'mening: je pense que / je ne pense pas que', 'fr-subj-sent': 'subjonctif na gevoel en twijfel',
    'fr-conj': 'bien que, pour que, avant que + subjonctif', 'fr-cond-passe': 'conditionnel passé (j\'aurais dû)', 'fr-si-pqp': 'si + plus-que-parfait', 'fr-dont': 'dont',
    'fr-cequi': 'ce qui, ce que, ce dont', 'fr-lequel': 'voorzetsel + lequel', 'fr-registre': 'spreektaal en verzorgd Frans', 'fr-neg2': 'ne … que, ne … plus, ne … personne, ni … ni', 'fr-relief': 'nadruk met c\'est … qui / que'
  });

  /* ───────────────────────── B1 · 6 ───────────────────────── */
  U({
    id: "fr-b1-06", level: "B1", icon: "🏃", title: "En pleine forme", nl: "Gezond leven: gewoontes, oorzaak en gevolg",
    goals: ["Over gezondheid, sport en gewoontes praten", "Zeggen hoe of wanneer je iets doet met de gérondif", "Oorzaak en gevolg uitdrukken", "Advies geven en uitleggen waarom"],
    vocab: [
      ["la santé", "de gezondheid"], ["en forme", "fit"], ["le sommeil", "de slaap"], ["le stress", "de stress"], ["l'habitude", "de gewoonte"], ["le mode de vie", "de leefstijl"],
      ["l'alimentation", "de voeding"], ["équilibré / équilibrée", "evenwichtig"], ["gras / grasse", "vet"], ["sucré / sucrée", "zoet"], ["le régime", "het dieet"], ["grignoter", "tussendoor snoepen"],
      ["s'entraîner", "trainen"], ["courir", "hardlopen"], ["la course à pied", "het hardlopen"], ["la randonnée", "de wandeltocht"], ["la salle de sport", "de sportschool"], ["s'étirer", "stretchen"],
      ["respirer", "ademen"], ["se détendre", "zich ontspannen"], ["maigrir", "afvallen"], ["grossir", "aankomen"], ["éviter", "vermijden"], ["améliorer", "verbeteren"],
      ["grâce à", "dankzij"], ["à cause de", "door / vanwege (negatief)"], ["comme", "aangezien"], ["puisque", "aangezien / omdat toch"], ["donc", "dus"], ["c'est pourquoi", "daarom"]
    ],
    grammar: [
      { t: "De gérondif: en + -ant", es: "Le gérondif",
        html: `<p>De <b>gérondif</b> gebruik je om te zeggen dat twee dingen <b>tegelijk</b> gebeuren, of <b>hoe</b> je iets bereikt. In het Nederlands zeg je «terwijl», «al …end» of «door te…».</p>
<p><b>Vorm:</b> <b>en</b> + stam van de <b>nous-vorm</b> + <b>-ant</b>. <i>nous march<s>ons</s> → <b>en marchant</b></i> · <i>nous finiss<s>ons</s> → <b>en finissant</b></i> · <i>nous pren<s>ons</s> → <b>en prenant</b></i> · <i>nous mange<s>ons</s> → <b>en mangeant</b></i> (de e blijft, zoals in <i>nous mangeons</i>).</p>
<p>⚠️ <b>Maar drie uitzonderingen:</b> <i>être → <b>en étant</b></i>, <i>avoir → <b>en ayant</b></i>, <i>savoir → <b>en sachant</b></i>. Waarom? Dezelfde drie oude werkwoorden die ook in de subjonctif en de gebiedende wijs een eigen stam hebben (<i>sois, aie, sache</i>).</p>
<p><b>Drie betekenissen:</b></p>
<p>⏱️ <b>tegelijk:</b> <i>J'écoute un podcast <b>en courant</b>.</i> (terwijl ik hardloop)<br>🔧 <b>manier / middel:</b> <i>J'ai maigri <b>en mangeant</b> moins de sucre.</i> (door minder suiker te eten)<br>❓ <b>voorwaarde:</b> <i><b>En partant</b> maintenant, tu arriveras à l'heure.</i> (als je nu vertrekt)</p>
<p>⚠️ <b>Let op, de belangrijkste regel:</b> de gérondif heeft altijd <b>hetzelfde onderwerp</b> als het hoofdwerkwoord. <i>J'ai vu Paul <b>en sortant</b></i> = ik zag Paul toen <u>ik</u> naar buiten ging (niet Paul). Hebben de twee handelingen een verschillend onderwerp, gebruik dan <i>pendant que</i>: <i>J'ai vu Paul pendant qu'<u>il</u> sortait.</i></p>
<p>Met <b>tout en</b> benadruk je dat twee dingen echt tegelijk gebeuren, of leg je een tegenstelling: <i>Il travaille <b>tout en</b> écoutant la radio.</i></p>`,
        table: [["infinitief", "nous-vorm", "gérondif"], ["marcher", "nous marchons", "en marchant"], ["faire", "nous faisons", "en faisant"], ["boire", "nous buvons", "en buvant"], ["être", "(uitzondering)", "en étant"], ["avoir", "(uitzondering)", "en ayant"], ["savoir", "(uitzondering)", "en sachant"]],
        ex: [["Je me détends en lisant.", "Ik ontspan door te lezen."], ["Elle s'est fait mal en courant.", "Ze heeft zich bezeerd tijdens het hardlopen."], ["On apprend en faisant des erreurs.", "Je leert door fouten te maken."]] },
      { t: "Oorzaak: parce que, comme, puisque, grâce à, à cause de", es: "Exprimer la cause",
        html: `<p>Het Frans heeft meer manieren dan <i>parce que</i> om een reden te geven, en ze zijn niet inwisselbaar:</p>
<p><b>parce que</b> + zin = <b>omdat</b>: het neutrale antwoord op <i>pourquoi ?</i> Het staat meestal in het midden van de zin. <i>Je cours <b>parce que</b> ça me détend.</i></p>
<p><b>comme</b> + zin = <b>aangezien</b>. ⚠️ Staat altijd <b>vooraan</b> in de zin: <i><b>Comme</b> il pleuvait, je suis allé à la salle de sport.</i> (Niet in het midden: daar betekent <i>comme</i> «zoals».)</p>
<p><b>puisque</b> + zin = <b>aangezien, omdat … toch</b>: de reden is al bekend bij de ander. <i><b>Puisque</b> tu es là, aide-moi !</i> (Nu je er toch bent…)</p>
<p>Voor een <b>zelfstandig naamwoord</b> gebruik je geen <i>parce que</i>, maar:</p>
<p>🙂 <b>grâce à</b> + zelfst. nw. = <b>dankzij</b> (positief gevolg): <i><b>Grâce au</b> sport, je dors mieux.</i><br>🙁 <b>à cause de</b> + zelfst. nw. = <b>door, vanwege</b> (negatief gevolg): <i>Je dors mal <b>à cause du</b> stress.</i></p>
<p>⚠️ <b>Let op:</b> wij zeggen in beide gevallen «door»; het Frans laat je kiezen tussen goed en slecht nieuws. <i>Grâce à</i> voor iets negatiefs klinkt ironisch. En denk aan de samentrekking: <i>à + le = au</i>, <i>de + le = du</i>.</p>`,
        table: [["woord", "+", "voorbeeld"], ["parce que", "zin", "Je marche parce que c'est bon pour la santé."], ["comme", "zin (vooraan)", "Comme j'étais fatigué, je suis resté chez moi."], ["puisque", "zin (bekende reden)", "Puisque tu ne manges pas, je prends ton dessert."], ["grâce à", "zelfst. nw. 🙂", "Grâce à toi, j'ai réussi."], ["à cause de", "zelfst. nw. 🙁", "À cause de la pluie, on a annulé."]],
        ex: [["Grâce à la randonnée, je suis en pleine forme.", "Dankzij het wandelen ben ik in topvorm."], ["Il a grossi à cause du grignotage.", "Hij is aangekomen door het snoepen tussendoor."]] },
      { t: "Gevolg: donc, alors, c'est pourquoi", es: "Exprimer la conséquence",
        html: `<p>Het <b>gevolg</b> leid je in met:</p>
<p><b>donc</b> (dus), <b>alors</b> (dus, dan; spreektaal), <b>c'est pourquoi</b> / <b>c'est pour ça que</b> (daarom), <b>du coup</b> (dus, daardoor; heel gewoon in gesproken Frans).</p>
<p><i>Je ne dormais pas bien, <b>donc</b> j'ai arrêté le café.</i><br><i>Je travaille assis toute la journée. <b>C'est pourquoi</b> je fais du sport le soir.</i><br><i>Il pleuvait, <b>du coup</b> on est restés à la maison.</i></p>
<p>Om te zeggen <b>hoe sterk</b> iets was, met gevolg: <b>tellement / si</b> + bijv. nw. + <b>que</b> (zo … dat) en <b>tellement de</b> + zelfst. nw. + <b>que</b> (zoveel … dat).</p>
<p><i>J'étais <b>tellement</b> fatigué <b>que</b> je me suis endormi dans le métro.</i> · <i>Il mange <b>tellement de</b> sucre <b>qu'</b>il a mal aux dents.</i></p>
<p>⚠️ <b>Valse vriend:</b> <i>alors</i> betekent ook «toen» en <i>si</i> betekent ook «als» en «of». De context maakt het duidelijk: <i>si fatigué que</i> = zó moe dat.</p>`,
        table: [["woord", "voorbeeld", "vertaling"], ["donc", "Je suis malade, donc je reste au lit.", "Ik ben ziek, dus ik blijf in bed."], ["c'est pourquoi", "C'est pourquoi j'ai changé d'habitudes.", "Daarom heb ik mijn gewoontes veranderd."], ["tellement … que", "Il court tellement vite que je ne peux pas le suivre.", "Hij loopt zo hard dat ik hem niet kan bijhouden."]],
        ex: [["J'ai trop mangé, du coup j'ai mal au ventre.", "Ik heb te veel gegeten, dus ik heb buikpijn."], ["Elle était si stressée qu'elle ne dormait plus.", "Ze was zo gestrest dat ze niet meer sliep."]] }
    ],
    dialogue: {
      t: "Au parc de la Tête d'Or", place: "Lyon 🇫🇷",
      lines: [
        ["Karim", "Sanne ! Tu cours tous les matins maintenant ?", "Sanne! Loop je nu elke ochtend hard?"],
        ["Sanne", "Presque. Comme je travaille assise toute la journée, j'ai besoin de bouger.", "Bijna. Aangezien ik de hele dag zittend werk, moet ik bewegen."],
        ["Karim", "Tu as raison. Moi, je n'ai jamais le temps.", "Je hebt gelijk. Ik heb nooit tijd."],
        ["Sanne", "Moi non plus ! Mais je gagne du temps en écoutant mes podcasts en courant.", "Ik ook niet! Maar ik win tijd door tijdens het hardlopen naar mijn podcasts te luisteren."],
        ["Karim", "Pas bête. Et ça marche ? Tu te sens mieux ?", "Niet gek. En werkt het? Voel je je beter?"],
        ["Sanne", "Beaucoup mieux. Grâce au sport, je dors comme un bébé. Avant, je dormais mal à cause du stress.", "Veel beter. Dankzij het sporten slaap ik als een roos. Vroeger sliep ik slecht door de stress."],
        ["Karim", "Moi, j'ai essayé de maigrir en mangeant moins, mais je grignote tout le temps au bureau.", "Ik heb geprobeerd af te vallen door minder te eten, maar ik snoep de hele tijd op kantoor."],
        ["Sanne", "Tu devrais commencer doucement. En marchant trente minutes par jour, tu verras déjà une différence.", "Je zou rustig moeten beginnen. Als je dertig minuten per dag wandelt, merk je al verschil."],
        ["Karim", "Puisque tu es si motivée, tu m'emmènes demain ?", "Nu je toch zo gemotiveerd bent, neem je me morgen mee?"],
        ["Sanne", "Avec plaisir ! Mais on part à six heures et demie, donc ne te couche pas trop tard !", "Graag! Maar we vertrekken om half zeven, dus ga niet te laat naar bed!"]
      ],
      q: [
        { t: "mc", q: "Pourquoi Sanne court-elle ?", o: ["Parce qu'elle travaille assise toute la journée", "Parce qu'elle veut maigrir", "Parce que Karim le lui a demandé"] },
        { t: "mc", q: "Comment gagne-t-elle du temps ?", o: ["En écoutant ses podcasts en courant", "En mangeant au bureau", "En se levant plus tard"] },
        { t: "mc", q: "Pourquoi dormait-elle mal avant ?", o: ["À cause du stress", "À cause du café", "Grâce au sport"] }
      ]
    },
    culture: { t: "Franse eetgewoontes: niet tussendoor, wel aan tafel", html: `<p>In Frankrijk eet je traditioneel op <b>vaste tijden</b> en <b>aan tafel</b>: ontbijt, lunch rond half één, en avondeten rond acht uur. <b>Grignoter</b> (tussendoor snoepen) geldt als een slechte gewoonte; alleen kinderen krijgen om vier uur <i>le goûter</i>. Op reclames voor snoep en frisdrank staat verplicht: <i>«Pour votre santé, évitez de grignoter entre les repas.»</i></p>
<p>Franse artsen kunnen sinds een aantal jaar <b>sport op recept</b> voorschrijven (<i>le sport sur ordonnance</i>) aan mensen met een chronische ziekte.</p>
<p>🌳 Het <b>Parc de la Tête d'Or</b> in Lyon is een van de grootste stadsparken van Frankrijk, met een meer, een dierentuin en een hardlooprondje van bijna vier kilometer. De <b>GR</b>-paden (<i>sentiers de grande randonnée</i>), gemarkeerd met wit-rode strepen, lopen door het hele land.</p>` },
    ex: [
      { t: "cloze", s: "J'écoute de la musique en ___.", a: ["courant"], o: ["courant", "courir", "couru"], nl: "Ik luister naar muziek tijdens het hardlopen.", tag: "fr-gerondif" },
      { t: "cloze", s: "On apprend en ___ des erreurs.", a: ["faisant"], o: ["faisant", "fairant", "fait"], nl: "Je leert door fouten te maken.", x: "Stam van nous faisons: fais- + ant.", tag: "fr-gerondif" },
      { t: "cloze", s: "En ___ malade, on ne peut pas s'entraîner.", a: ["étant"], o: ["étant", "êtant", "soyant"], nl: "Als je ziek bent, kun je niet trainen.", x: "Uitzondering: être → étant.", tag: "fr-gerondif" },
      { t: "cloze", s: "J'ai maigri en ___ moins de sucre.", a: ["mangeant"], o: ["mangeant", "mangant", "mangé"], nl: "Ik ben afgevallen door minder suiker te eten.", x: "De e blijft staan vóór -ant, zoals in nous mangeons.", tag: "fr-gerondif" },
      { t: "cloze", s: "___ il pleuvait, je suis resté chez moi.", a: ["Comme"], o: ["Comme", "Parce que", "Donc"], nl: "Aangezien het regende, ben ik thuisgebleven.", x: "Comme (aangezien) staat altijd vooraan in de zin.", tag: "fr-cause" },
      { t: "cloze", s: "___ sport, je dors mieux.", a: ["Grâce au"], o: ["Grâce au", "À cause du", "Parce que"], nl: "Dankzij het sporten slaap ik beter.", x: "Positief gevolg + zelfstandig naamwoord: grâce à.", tag: "fr-cause" },
      { t: "cloze", s: "Je dors mal ___ stress.", a: ["à cause du"], o: ["à cause du", "grâce au", "parce que"], nl: "Ik slaap slecht door de stress.", x: "Negatief gevolg: à cause de.", tag: "fr-cause" },
      { t: "cloze", s: "J'étais ___ fatigué que je me suis endormi.", a: ["tellement"], o: ["tellement", "beaucoup", "très"], nl: "Ik was zo moe dat ik in slaap viel.", tag: "fr-cause" },
      { t: "mc", q: "«J'ai vu Marie en sortant.» Wie ging er naar buiten?", o: ["Ik", "Marie", "Dat is niet duidelijk"], x: "De gérondif heeft altijd hetzelfde onderwerp als het hoofdwerkwoord.", tag: "fr-gerondif" },
      { t: "mc", q: "Welke zin is goed?", o: ["Je reste ici parce qu'il pleut.", "Je reste ici comme il pleut.", "Je reste ici grâce à il pleut."], x: "In het midden van de zin: parce que. Comme (aangezien) staat vooraan.", tag: "fr-cause" },
      { t: "mc", q: "Wat betekent «du coup» in gesproken Frans?", o: ["dus / daardoor", "plotseling", "een klap"], tag: "fr-cause" },
      { t: "tr", nl: "Ik ontspan door te lezen.", a: ["Je me détends en lisant."], tag: "fr-gerondif" },
      { t: "tr", nl: "Dankzij jou ben ik geslaagd.", a: ["Grâce à toi, j'ai réussi.", "J'ai réussi grâce à toi."], tag: "fr-cause" },
      { t: "tr", nl: "Ik ben ziek, dus ik blijf thuis.", a: ["Je suis malade, donc je reste à la maison.", "Je suis malade, donc je reste chez moi.", "Je suis malade, alors je reste à la maison.", "Je suis malade, alors je reste chez moi."], tag: "fr-cause" },
      { t: "tr", nl: "Je zou rustig moeten beginnen.", a: ["Tu devrais commencer doucement.", "Vous devriez commencer doucement."], tag: "fr-voc" },
      { t: "order", s: "En marchant trente minutes par jour, tu verras une différence.", nl: "Als je dertig minuten per dag wandelt, merk je verschil.", tag: "fr-ordre" },
      { t: "match", p: [["maigrir", "afvallen"], ["grossir", "aankomen"], ["éviter", "vermijden"], ["se détendre", "zich ontspannen"], ["respirer", "ademen"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Cinq habitudes pour rester en forme", type: "Artikel op een gezondheidssite",
      p: [
        ["On croit souvent qu'il faut s'entraîner deux heures par jour pour être en forme. C'est faux ! En changeant quelques petites habitudes, on peut déjà améliorer sa santé. Par exemple, en prenant l'escalier au lieu de l'ascenseur, vous faites travailler votre cœur sans y penser.", "Vaak denken we dat je twee uur per dag moet trainen om fit te zijn. Dat klopt niet! Door een paar kleine gewoontes te veranderen, kun je je gezondheid al verbeteren. Door bijvoorbeeld de trap te nemen in plaats van de lift, zet u uw hart aan het werk zonder erbij na te denken."],
        ["Le sommeil est aussi important que le sport. Comme les écrans nous empêchent de dormir, il vaut mieux éteindre son téléphone une heure avant de se coucher. Beaucoup de gens dorment mal à cause du stress : c'est pourquoi il faut apprendre à se détendre, en respirant lentement ou en lisant.", "Slaap is even belangrijk als sport. Aangezien schermen ons uit de slaap houden, kun je beter je telefoon een uur voor het slapengaan uitzetten. Veel mensen slapen slecht door stress: daarom moet je leren ontspannen, door rustig te ademen of te lezen."],
        ["Enfin, mangez à table, et pas en regardant la télévision. Quand on mange en faisant autre chose, on mange tellement vite qu'on ne sent pas qu'on a assez mangé. Grâce à ces petits changements, vous vous sentirez mieux en quelques semaines.", "Tot slot: eet aan tafel, en niet terwijl u televisie kijkt. Als je eet terwijl je iets anders doet, eet je zo snel dat je niet voelt dat je genoeg hebt gegeten. Dankzij deze kleine veranderingen voelt u zich binnen een paar weken beter."]
      ],
      gl: [["au lieu de", "in plaats van"], ["l'ascenseur", "de lift"], ["l'écran", "het scherm"], ["empêcher de", "beletten om"], ["il vaut mieux", "het is beter om"]],
      q: [
        { t: "mc", q: "Comment peut-on faire travailler son cœur sans y penser ?", o: ["En prenant l'escalier", "En regardant la télévision", "En dormant plus"] },
        { t: "mc", q: "Pourquoi vaut-il mieux éteindre son téléphone le soir ?", o: ["Parce que les écrans empêchent de dormir", "Parce que c'est cher", "Parce qu'il faut respirer"] },
        { t: "mc", q: "Que se passe-t-il quand on mange en faisant autre chose ?", o: ["On mange trop vite", "On maigrit", "On dort mieux"] }
      ]
    },
    say: [["Je me détends en lisant.", "Ik ontspan door te lezen."], ["Grâce au sport, je dors mieux.", "Dankzij het sporten slaap ik beter."], ["Comme il pleut, je reste ici.", "Aangezien het regent, blijf ik hier."], ["C'est pourquoi j'ai changé d'habitudes.", "Daarom heb ik mijn gewoontes veranderd."]],
    task: { nl: "Beschrijf in 5 zinnen wat jij doet (of zou willen doen) om gezond te blijven. Gebruik minstens één gérondif en twee woorden voor oorzaak of gevolg.", model: "Je reste en forme en allant au travail à vélo. Comme je suis assis toute la journée, je marche aussi pendant ma pause de midi. Grâce à ces habitudes, je me sens moins stressé. Avant, je dormais mal à cause du café, donc j'ai arrêté d'en boire le soir. J'aimerais encore manger moins de sucre !" },
    scenario: { nl: "Je komt een collega tegen in het park in Lyon en jullie praten over fit blijven.", role: "You are Karim, a slightly lazy but good-humoured colleague in Lyon who wants to get fitter. Ask the learner what they do to stay healthy, how they find the time, and whether it works. Admit your bad habits (snacking at the office, sleeping late), ask for concrete advice and react to it. Use tu and natural French; model the gérondif (en marchant, en mangeant moins) and cause words (comme, grâce à, à cause de, du coup).", goal: "Vertel hoe je fit blijft met een gérondif, leg uit waarom, en geef je collega één advies." }
  });

  /* ───────────────────────── B1 · 7 ───────────────────────── */
  U({
    id: "fr-b1-07", level: "B1", icon: "🌍", title: "À mon avis…", nl: "Je mening geven: het klimaat en de toekomst",
    goals: ["Je mening geven, het eens of oneens zijn", "Kiezen tussen indicatif en subjonctif na je pense que", "De subjonctif gebruiken na gevoelens en twijfel", "Zinnen bouwen met bien que, pour que en avant que"],
    vocab: [
      ["l'environnement", "het milieu"], ["le climat", "het klimaat"], ["le réchauffement climatique", "de opwarming van de aarde"], ["la pollution", "de vervuiling"], ["les déchets", "het afval"], ["le plastique", "het plastic"],
      ["trier", "(afval) scheiden"], ["recycler", "recyclen"], ["gaspiller", "verspillen"], ["protéger", "beschermen"], ["polluer", "vervuilen"], ["consommer", "verbruiken / consumeren"],
      ["l'énergie", "de energie"], ["renouvelable", "hernieuwbaar"], ["la voiture électrique", "de elektrische auto"], ["le covoiturage", "het carpoolen"], ["la planète", "de planeet"], ["durable", "duurzaam"],
      ["à mon avis", "naar mijn mening"], ["selon moi", "volgens mij"], ["je trouve que", "ik vind dat"], ["je suis d'accord", "ik ben het ermee eens"], ["je ne suis pas d'accord", "ik ben het er niet mee eens"], ["ça dépend", "dat hangt ervan af"],
      ["je doute que", "ik betwijfel of"], ["j'ai peur que", "ik ben bang dat"], ["c'est dommage que", "het is jammer dat"], ["bien que", "hoewel"], ["pour que", "opdat / zodat"], ["avant que", "voordat"]
    ],
    grammar: [
      { t: "Je pense que… of je ne pense pas que…?", es: "L'opinion : indicatif ou subjonctif",
        html: `<p>Werkwoorden van <b>mening</b> en <b>zekerheid</b> krijgen de <b>gewone wijs</b> (indicatif), want je presenteert iets als waar:</p>
<p><i>Je pense <b>que</b> c'<b>est</b> important.</i> · <i>Je trouve <b>que</b> tu <b>as</b> raison.</i> · <i>Je crois <b>qu'</b>il <b>viendra</b>.</i> · <i>Je suis sûr <b>qu'</b>elle <b>sait</b>.</i> · <i>Il est évident <b>que</b>…</i></p>
<p>⚠️ <b>Uitzondering:</b> zodra je dezelfde werkwoorden <b>ontkent</b>, verandert de wijs. De ontkenning brengt <b>twijfel</b>, en twijfel vraagt de <b>subjonctif</b>:</p>
<p><i>Je <b>ne</b> pense <b>pas</b> que ce <b>soit</b> une bonne idée.</i> · <i>Je <b>ne</b> crois <b>pas</b> qu'il <b>vienne</b>.</i> · <i>Je <b>ne</b> suis <b>pas</b> sûr qu'elle <b>sache</b>.</i></p>
<p><b>Waarom?</b> De subjonctif is de wijs van wat <b>niet als feit</b> wordt gepresenteerd. «Ik denk dat het waar is» = voor mij een feit. «Ik denk niet dat het waar is» = ik betwijfel het.</p>
<p>Daarom krijgen ook echte twijfelwerkwoorden de subjonctif: <i>Je <b>doute</b> qu'il <b>ait</b> raison.</i> <i>Il est <b>possible</b> qu'il <b>pleuve</b>.</i> Maar ⚠️ <i>il est <b>probable</b> que</i> (waarschijnlijk) krijgt de <b>indicatif</b>: de kans is groot genoeg om het als feit te zien.</p>`,
        table: [["zekerheid → indicatif", "twijfel → subjonctif"], ["Je pense qu'il a raison.", "Je ne pense pas qu'il ait raison."], ["Je crois que c'est possible.", "Je ne crois pas que ce soit possible."], ["Je suis sûr qu'elle viendra.", "Je doute qu'elle vienne."], ["Il est probable qu'il pleuvra.", "Il est possible qu'il pleuve."]],
        ex: [["Je trouve que nous gaspillons trop.", "Ik vind dat we te veel verspillen."], ["Je ne pense pas que la voiture électrique soit la solution.", "Ik denk niet dat de elektrische auto de oplossing is."]] },
      { t: "Subjonctif na gevoelens", es: "Le subjonctif après les sentiments",
        html: `<p>Na een uitdrukking van <b>gevoel</b> (blij, bang, verdrietig, verbaasd, boos) + <b>que</b> volgt de <b>subjonctif</b>, ook als het om een feit gaat:</p>
<p><i>Je suis content <b>que</b> tu <b>sois</b> là.</i> (Ik ben blij dat je er bent.) · <i>J'ai peur <b>qu'</b>il <b>soit</b> trop tard.</i> · <i>C'est dommage <b>que</b> vous ne <b>puissiez</b> pas venir.</i> · <i>Ça m'étonne <b>qu'</b>elle ne <b>sache</b> pas.</i> · <i>Je regrette <b>que</b> ce <b>soit</b> si cher.</i></p>
<p><b>Waarom, als het toch waar is?</b> Het gaat hier niet om de informatie zelf, maar om <b>jouw reactie</b> erop. De bijzin is de aanleiding van het gevoel, niet het nieuws.</p>
<p>⚠️ <b>Dezelfde regel als in unit 1:</b> alleen bij <b>twee verschillende onderwerpen</b>. Bij hetzelfde onderwerp gebruik je <b>de + infinitief</b>: <i><u>Je</u> suis content <b>d'être</b> là.</i> (Ik ben blij dat ik er ben.) <i>J'ai peur <b>de</b> rater le train.</i></p>`,
        table: [["gevoel", "voorbeeld", "vertaling"], ["être content que", "Je suis contente que tu viennes.", "Ik ben blij dat je komt."], ["avoir peur que", "J'ai peur qu'il pleuve.", "Ik ben bang dat het gaat regenen."], ["c'est dommage que", "C'est dommage qu'il parte.", "Het is jammer dat hij weggaat."], ["zelfde onderwerp", "Je suis triste de partir.", "Ik vind het verdrietig om weg te gaan."]],
        ex: [["Je suis surpris que tu ne tries pas tes déchets.", "Het verbaast me dat je je afval niet scheidt."], ["J'ai peur que le climat change trop vite.", "Ik ben bang dat het klimaat te snel verandert."]] },
      { t: "Bien que, pour que, avant que", es: "Les conjonctions + subjonctif",
        html: `<p>Een paar voegwoorden krijgen <b>altijd</b> de subjonctif. De drie belangrijkste:</p>
<p><b>bien que</b> = <b>hoewel</b>: <i><b>Bien qu'</b>il <b>fasse</b> froid, je prends le vélo.</i> ⚠️ In het Nederlands volgt na «hoewel» een gewone tijd; in het Frans niet. Wil je de subjonctif ontlopen, zeg dan <i>même si</i> (ook al) + indicatif: <i><b>Même s'</b>il <b>fait</b> froid…</i></p>
<p><b>pour que</b> = <b>opdat, zodat</b> (doel): <i>Je le répète <b>pour que</b> tout le monde <b>comprenne</b>.</i></p>
<p><b>avant que</b> = <b>voordat</b>: <i>Agissons <b>avant qu'</b>il <b>soit</b> trop tard.</i></p>
<p>⚠️ <b>Uitzondering:</b> <i><b>après que</b></i> (nadat) krijgt officieel de <b>indicatif</b>, want wat al gebeurd is, is een feit: <i>après qu'il <b>est</b> parti</i>. (Veel Fransen zeggen toch de subjonctif, naar analogie van <i>avant que</i>; in verzorgd Frans geldt dat als fout.)</p>
<p>⚠️ <b>En weer:</b> bij hetzelfde onderwerp wordt het <b>pour + infinitief</b> en <b>avant de + infinitief</b>: <i>Je trie mes déchets <b>pour protéger</b> la planète.</i> <i>Éteins la lumière <b>avant de partir</b>.</i> (Bij <i>bien que</i> bestaat die mogelijkheid niet.)</p>`,
        table: [["voegwoord", "voorbeeld", "vertaling"], ["bien que", "Bien que ce soit difficile, j'essaie.", "Hoewel het moeilijk is, probeer ik het."], ["pour que", "Parle plus fort pour qu'on t'entende.", "Praat harder zodat we je horen."], ["avant que", "Rentrons avant qu'il pleuve.", "Laten we naar huis gaan voordat het regent."], ["même si (+ indicatif)", "Même si c'est difficile, j'essaie.", "Ook al is het moeilijk, ik probeer het."]],
        ex: [["Il faut agir pour que nos enfants aient un avenir.", "We moeten iets doen opdat onze kinderen een toekomst hebben."], ["Bien que je sois d'accord, j'ai une question.", "Hoewel ik het ermee eens ben, heb ik een vraag."]] }
    ],
    dialogue: {
      t: "Débat autour d'un café", place: "Montréal 🇨🇦",
      lines: [
        ["Chloé", "Tu as vu ? La ville veut interdire les voitures dans le centre. À mon avis, c'est une excellente idée.", "Heb je het gezien? De stad wil auto's in het centrum verbieden. Volgens mij is dat een uitstekend idee."],
        ["Daan", "Je ne suis pas sûr que ce soit si simple. Comment les gens iront-ils travailler ?", "Ik weet niet zeker of het zo eenvoudig is. Hoe gaan de mensen dan naar hun werk?"],
        ["Chloé", "En métro, à vélo… Je pense qu'on peut très bien vivre sans voiture.", "Met de metro, met de fiets… Ik denk dat je heel goed zonder auto kunt leven."],
        ["Daan", "En été, oui. Mais je doute que tout le monde prenne son vélo à moins vingt !", "In de zomer wel. Maar ik betwijfel of iedereen bij min twintig de fiets pakt!"],
        ["Chloé", "Bien qu'il fasse froid, il y a de plus en plus de cyclistes en hiver. Tu serais surpris.", "Hoewel het koud is, zijn er steeds meer fietsers in de winter. Je zou ervan opkijken."],
        ["Daan", "D'accord, mais j'ai peur que les petits magasins perdent des clients.", "Oké, maar ik ben bang dat de kleine winkels klanten verliezen."],
        ["Chloé", "Je ne crois pas que ce soit vrai. Dans les rues piétonnes, les gens achètent plus.", "Ik geloof niet dat dat waar is. In voetgangersstraten kopen mensen juist meer."],
        ["Daan", "C'est possible. Je suis content qu'on en parle, en tout cas.", "Dat kan. Ik ben in elk geval blij dat erover gepraat wordt."],
        ["Chloé", "Il faut agir maintenant, pour que nos enfants puissent respirer un air propre.", "We moeten nu iets doen, zodat onze kinderen schone lucht kunnen inademen."],
        ["Daan", "Là, je suis d'accord avec toi. Mais il faudrait plus de bus avant qu'on interdise les voitures.", "Daar ben ik het met je eens. Maar er zouden meer bussen moeten komen voordat de auto's verboden worden."]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce que la ville veut faire ?", o: ["Interdire les voitures dans le centre", "Construire un nouveau métro", "Fermer les petits magasins"] },
        { t: "mc", q: "De quoi Daan a-t-il peur ?", o: ["Que les petits magasins perdent des clients", "Qu'il fasse trop froid", "Que le métro soit trop cher"] },
        { t: "mc", q: "Sur quoi sont-ils d'accord ?", o: ["Il faut agir pour les enfants", "Il faut garder les voitures", "Les cyclistes sont dangereux"] }
      ]
    },
    culture: { t: "Debatteren op zijn Frans", html: `<p>In de Franstalige wereld is <b>discussiëren een sport</b>, geen ruzie. Aan tafel en in het café ga je graag tegen elkaar in; iemand tegenspreken (<i>«Je ne suis pas d'accord»</i>) is niet onbeleefd, maar een teken dat je de ander serieus neemt. Op school leren Franse leerlingen een betoog bouwen in drie stappen: <i>thèse, antithèse, synthèse</i>.</p>
<p>Handige woorden om tijd te winnen: <i>Alors…</i>, <i>Disons que…</i> (laten we zeggen dat), <i>En fait…</i> (eigenlijk), <i>Justement !</i> (precies!), <i>Oui, mais…</i></p>
<p>🚲 <b>Montréal</b> heeft een van de grootste fietsnetwerken van Noord-Amerika en het deelfietssysteem <b>BIXI</b>; een deel van de fietspaden wordt 's winters sneeuwvrij gehouden. In Québec heet afval scheiden <i>faire du recyclage</i> en de groene bak voor gft is <i>le bac brun</i> (bruin!).</p>` },
    ex: [
      { t: "cloze", s: "Je pense que c'___ une bonne idée.", a: ["est"], o: ["est", "soit", "serait"], nl: "Ik denk dat het een goed idee is.", x: "Mening zonder ontkenning: gewone wijs.", tag: "fr-opinion" },
      { t: "cloze", s: "Je ne pense pas que ce ___ une bonne idée.", a: ["soit"], o: ["soit", "est", "sera"], nl: "Ik denk niet dat het een goed idee is.", x: "Uitzondering: ontkende mening = twijfel → subjonctif.", tag: "fr-opinion" },
      { t: "cloze", s: "Je doute qu'il ___ raison.", a: ["ait"], o: ["ait", "a", "aura"], nl: "Ik betwijfel of hij gelijk heeft.", tag: "fr-subj-sent" },
      { t: "cloze", s: "Je suis content que tu ___ là.", a: ["sois"], o: ["sois", "es", "seras"], nl: "Ik ben blij dat je er bent.", x: "Na een gevoel + que: subjonctif.", tag: "fr-subj-sent" },
      { t: "cloze", s: "J'ai peur qu'il ___.", a: ["pleuve"], o: ["pleuve", "pleut", "pleuvra"], nl: "Ik ben bang dat het gaat regenen.", tag: "fr-subj-sent" },
      { t: "cloze", s: "___ il fasse froid, je prends le vélo.", a: ["Bien qu'"], o: ["Bien qu'", "Parce qu'", "Même s'"], nl: "Hoewel het koud is, neem ik de fiets.", x: "«Fasse» is subjonctif: dat past alleen bij bien que. Même si krijgt de gewone wijs.", tag: "fr-conj" },
      { t: "cloze", s: "Parle plus fort pour qu'on t'___.", a: ["entende"], o: ["entende", "entend", "entendra"], nl: "Praat harder zodat we je horen.", tag: "fr-conj" },
      { t: "cloze", s: "Je suis content ___ être là.", a: ["d'"], o: ["d'", "que", "pour"], nl: "Ik ben blij dat ik er ben.", x: "Zelfde onderwerp: de + infinitief, geen subjonctif.", tag: "fr-subj-sent" },
      { t: "mc", q: "Welke zin is goed?", o: ["Je crois qu'il viendra.", "Je crois qu'il vienne.", "Je crois qu'il venir."], x: "Croire que (bevestigend) = zekerheid → gewone wijs.", tag: "fr-opinion" },
      { t: "mc", q: "Welke uitdrukking krijgt géén subjonctif?", o: ["il est probable que", "il est possible que", "je doute que"], x: "Uitzondering: probable (waarschijnlijk) telt als bijna zeker → indicatif.", tag: "fr-opinion" },
      { t: "mc", q: "Hoe zeg je «Doe het licht uit voordat je weggaat»?", o: ["Éteins la lumière avant de partir.", "Éteins la lumière avant que tu partes.", "Éteins la lumière avant partir."], x: "Zelfde onderwerp: avant de + infinitief.", tag: "fr-conj" },
      { t: "tr", nl: "Naar mijn mening is het te laat.", a: ["À mon avis, c'est trop tard.", "Selon moi, c'est trop tard.", "À mon avis, il est trop tard.", "Selon moi, il est trop tard."], tag: "fr-opinion" },
      { t: "tr", nl: "Ik ben het niet met je eens.", a: ["Je ne suis pas d'accord avec toi."], tag: "fr-opinion" },
      { t: "tr", nl: "Het is jammer dat je niet kunt komen.", a: ["C'est dommage que tu ne puisses pas venir."], tag: "fr-subj-sent" },
      { t: "tr", nl: "Ik geloof niet dat dat waar is.", a: ["Je ne crois pas que ce soit vrai.", "Je ne pense pas que ce soit vrai.", "Je ne crois pas que ça soit vrai."], tag: "fr-opinion" },
      { t: "order", s: "Il faut agir pour que nos enfants aient un avenir.", nl: "We moeten iets doen opdat onze kinderen een toekomst hebben.", tag: "fr-ordre" },
      { t: "match", p: [["trier", "scheiden"], ["gaspiller", "verspillen"], ["protéger", "beschermen"], ["polluer", "vervuilen"], ["durable", "duurzaam"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Faut-il interdire le plastique ?", type: "Lezersbrieven in een krant",
      p: [
        ["Marc, Québec : « Je pense que le gouvernement a raison d'interdire les sacs en plastique. Il est évident que nous en utilisons trop. Bien que ce soit un peu moins pratique, tout le monde peut apporter son sac au magasin. »", "Marc, Québec: 'Ik denk dat de regering gelijk heeft om plastic tasjes te verbieden. Het is duidelijk dat we er te veel gebruiken. Hoewel het iets minder handig is, kan iedereen zijn eigen tas meenemen naar de winkel.'"],
        ["Sophie, Laval : « Je ne crois pas que cette loi change grand-chose. Les sacs, ce n'est qu'une petite partie du problème. J'ai peur que les gens pensent qu'ils ont fait assez. Il faudrait que les entreprises produisent moins d'emballages. »", "Sophie, Laval: 'Ik geloof niet dat deze wet veel verandert. De tasjes zijn maar een klein deel van het probleem. Ik ben bang dat mensen denken dat ze genoeg hebben gedaan. De bedrijven zouden minder verpakkingen moeten produceren.'"],
        ["Karim, Montréal : « Je suis content qu'on fasse enfin quelque chose, même si ce n'est pas parfait. Il faut commencer quelque part pour que les habitudes changent. Mais je doute qu'une seule loi suffise : c'est à chacun de nous d'agir avant qu'il soit trop tard. »", "Karim, Montréal: 'Ik ben blij dat er eindelijk iets gebeurt, ook al is het niet perfect. Je moet ergens beginnen opdat de gewoontes veranderen. Maar ik betwijfel of één wet volstaat: het is aan ieder van ons om iets te doen voordat het te laat is.'"]
      ],
      gl: [["interdire", "verbieden"], ["grand-chose", "veel (in ontkenning)"], ["l'emballage", "de verpakking"], ["suffire", "volstaan"], ["agir", "handelen / iets doen"]],
      q: [
        { t: "mc", q: "Que pense Marc de la loi ?", o: ["Il est pour", "Il est contre", "Il n'a pas d'avis"] },
        { t: "mc", q: "De quoi Sophie a-t-elle peur ?", o: ["Que les gens pensent qu'ils ont fait assez", "Que les sacs soient trop chers", "Que les magasins ferment"] },
        { t: "mc", q: "Qu'est-ce que Karim doute ?", o: ["Qu'une seule loi suffise", "Que le plastique pollue", "Que les habitudes changent"] }
      ]
    },
    say: [["À mon avis, c'est une bonne idée.", "Volgens mij is het een goed idee."], ["Je ne pense pas que ce soit vrai.", "Ik denk niet dat dat waar is."], ["Je suis content que tu sois là.", "Ik ben blij dat je er bent."], ["Je ne suis pas d'accord avec toi.", "Ik ben het niet met je eens."]],
    task: { nl: "Geef in 5 zinnen je mening over een maatregel (bijvoorbeeld auto's verbieden in het centrum). Gebruik je pense que, je ne pense pas que en bien que of pour que.", model: "À mon avis, il faut moins de voitures dans le centre. Je pense que les villes sont plus agréables quand on peut marcher tranquillement. Bien que ce soit difficile pour certains, il y a d'autres solutions. Je ne crois pas que les magasins perdent des clients. Mais il faut de bons transports pour que tout le monde puisse venir." },
    scenario: { nl: "Je debatteert met een vriendin in Montréal over een autovrij centrum. Jullie zijn het niet helemaal eens.", role: "You are Chloé, a passionate, friendly debater from Montréal who is strongly in favour of banning cars from the city centre. Ask the learner for their opinion, challenge at least two of their arguments politely (Je ne suis pas sûre que…, Tu penses vraiment que… ?), concede one point, and try to find something you both agree on. Use tu and natural French with je pense que + indicatif, je ne pense pas que / je doute que / j'ai peur que + subjonctif, bien que and pour que.", goal: "Geef je mening, spreek één argument tegen met een subjonctif en zeg waar je het wel mee eens bent." }
  });

  /* ───────────────────────── B1 · 8 ───────────────────────── */
  U({
    id: "fr-b1-08", level: "B1", icon: "😔", title: "J'aurais dû…", nl: "Spijt en verwijten: wat had gekund",
    goals: ["Spijt uitdrukken over iets wat anders had gekund", "De conditionnel passé maken", "Zinnen met si + plus-que-parfait bouwen", "Iemand vriendelijk iets verwijten en je excuses aanbieden"],
    vocab: [
      ["le regret", "de spijt"], ["regretter", "spijt hebben van / betreuren"], ["le reproche", "het verwijt"], ["reprocher", "verwijten"], ["l'erreur", "de fout"], ["la faute", "de fout / de schuld"],
      ["l'occasion", "de kans / de gelegenheid"], ["rater", "missen / verprutsen"], ["manquer", "missen"], ["la chance", "het geluk / de kans"], ["le choix", "de keuze"], ["la décision", "de beslissing"],
      ["hésiter", "aarzelen"], ["oser", "durven"], ["se rendre compte", "zich realiseren"], ["s'en vouloir", "het zichzelf kwalijk nemen"], ["pardonner", "vergeven"], ["tant pis", "jammer dan"],
      ["trop tard", "te laat"], ["à temps", "op tijd"], ["le concours", "het toelatingsexamen / de wedstrijd"], ["la bourse", "de studiebeurs"], ["le poste", "de baan / de functie"], ["l'offre", "het aanbod"],
      ["j'aurais dû", "ik had moeten"], ["j'aurais pu", "ik had kunnen"], ["j'aurais voulu", "ik had gewild"], ["tu aurais pu me le dire", "je had het me kunnen zeggen"], ["Si seulement…", "Had ik maar… / Was het maar…"], ["Ce n'est pas grave.", "Het is niet erg."]
    ],
    grammar: [
      { t: "Conditionnel passé: j'aurais dû", es: "Le conditionnel passé",
        html: `<p>Met de <b>conditionnel passé</b> praat je over wat <b>had kunnen of moeten gebeuren, maar niet gebeurd is</b>: spijt, verwijten, gemiste kansen.</p>
<p><b>Vorm:</b> <b>avoir of être in de conditionnel</b> + voltooid deelwoord. <i>j'<b>aurais</b> mangé</i> (ik zou gegeten hebben) · <i>je <b>serais</b> venu(e)</i> (ik zou gekomen zijn). Keuze van hulpwerkwoord en aanpassing: zoals altijd.</p>
<p>De drie die je het meest nodig hebt:</p>
<p>😔 <b>j'aurais dû</b> + infinitief = <b>ik had moeten</b>: <i>J'<b>aurais dû</b> t'écouter.</i><br>🤷 <b>j'aurais pu</b> + infinitief = <b>ik had kunnen</b>: <i>Tu <b>aurais pu</b> me prévenir !</i> (verwijt)<br>💭 <b>j'aurais voulu / aimé</b> + infinitief = <b>ik had graag gewild</b>: <i>J'<b>aurais aimé</b> voir ça.</i></p>
<p>⚠️ <b>Let op, anders dan in het Nederlands:</b> wij zeggen «ik <u>had</u> moeten bellen» met een gewone verleden tijd van hebben. Het Frans gebruikt hier de <b>conditionnel</b> van avoir: <i>j'<b>aurais</b> dû appeler</i>, niet <s>j'avais dû appeler</s> (dat betekent «ik had moeten bellen en heb dat ook gedaan», een verplichting in het verleden).</p>
<p>En let op de volgorde: <i>dû / pu / voulu</i> staat direct achter avoir, de infinitief komt daarna. Wij zeggen «had <u>moeten</u> bellen», het Frans ook: <i>aurais <u>dû</u> appeler</i>.</p>`,
        table: [["", "avoir + deelwoord", "être + deelwoord"], ["je / j'", "aurais dû", "serais venu(e)"], ["tu", "aurais dû", "serais venu(e)"], ["il / elle", "aurait dû", "serait venu / venue"], ["nous", "aurions dû", "serions venu(e)s"], ["vous", "auriez dû", "seriez venu(e)(s)"], ["ils / elles", "auraient dû", "seraient venus / venues"]],
        ex: [["J'aurais dû partir plus tôt.", "Ik had eerder moeten vertrekken."], ["Tu aurais pu me le dire !", "Je had het me kunnen zeggen!"], ["Nous serions venus avec plaisir.", "We zouden graag gekomen zijn."]] },
      { t: "Si + plus-que-parfait → conditionnel passé", es: "L'hypothèse dans le passé",
        html: `<p>Voor een voorwaarde in het <b>verleden</b> die <b>niet is uitgekomen</b> («als ik het geweten had, was ik gekomen»):</p>
<p><b>si + plus-que-parfait</b>, en in het andere deel de <b>conditionnel passé</b>.</p>
<p><i><b>Si</b> j'<b>avais su</b>, je <b>serais venu</b>.</i> (Als ik het geweten had, was ik gekomen.)<br><i><b>Si</b> tu m'<b>avais appelé</b>, je t'<b>aurais aidé</b>.</i></p>
<p>⚠️ <b>Dezelfde valkuil als bij «als ik rijk was»:</b> na <b>si</b> nooit een conditionnel. Niet <s>si j'aurais su</s>: dat is dé fout die Franse kinderen zelf ook maken en waar leraren om lachen (<i>«Si j'aurais su, j'aurais pas venu»</i> is een beroemde foute zin uit de film <i>La Guerre des boutons</i>).</p>
<p><b>Let op het Nederlands:</b> wij zeggen vaak twee keer «had/was»: «als ik het geweten <u>had</u>, <u>was</u> ik gekomen». In het Frans zijn de twee helften verschillend: <i>avais su</i> (plus-que-parfait) tegenover <i>serais venu</i> (conditionnel passé).</p>
<p>Je hebt nu de drie soorten voorwaarden compleet:</p>
<p>1️⃣ <i>Si j'<b>ai</b> le temps, je <b>viendrai</b>.</i> (mogelijk)<br>2️⃣ <i>Si j'<b>avais</b> le temps, je <b>viendrais</b>.</i> (denkbeeldig, nu)<br>3️⃣ <i>Si j'<b>avais eu</b> le temps, je <b>serais venu</b>.</i> (niet gebeurd, verleden)</p>
<p>Met <b>Si seulement</b> + plus-que-parfait druk je spijt uit zonder tweede deel: <i><b>Si seulement</b> j'avais osé !</i> (Had ik maar gedurfd!)</p>`,
        table: [["si + plus-que-parfait", "conditionnel passé"], ["Si j'avais su,", "je n'aurais rien dit."], ["Si tu étais venu,", "tu aurais vu Awa."], ["Si nous avions réservé,", "nous aurions eu une table."], ["S'il avait travaillé,", "il aurait réussi le concours."]],
        ex: [["Si j'avais accepté ce poste, j'habiterais à Casablanca aujourd'hui.", "Als ik die baan had aangenomen, zou ik nu in Casablanca wonen."], ["Si seulement je t'avais écouté !", "Had ik maar naar je geluisterd!"]] }
    ],
    dialogue: {
      t: "Sur la corniche, le soir", place: "Casablanca 🇲🇦",
      lines: [
        ["Youssef", "Tu as l'air pensive, Sanne. À quoi tu penses ?", "Je ziet er nadenkend uit, Sanne. Waar denk je aan?"],
        ["Sanne", "À une offre que j'ai refusée il y a deux ans. Un poste à Casablanca, justement.", "Aan een aanbod dat ik twee jaar geleden heb afgeslagen. Een baan in Casablanca, toevallig."],
        ["Youssef", "Ah bon ? Tu ne me l'avais jamais dit ! Pourquoi tu as refusé ?", "O ja? Dat had je me nooit verteld! Waarom heb je het afgeslagen?"],
        ["Sanne", "J'ai hésité trop longtemps. J'aurais dû accepter tout de suite.", "Ik heb te lang geaarzeld. Ik had het meteen moeten aannemen."],
        ["Youssef", "Tu aurais pu m'appeler ! Je t'aurais aidée à trouver un appartement.", "Je had me kunnen bellen! Ik zou je geholpen hebben een appartement te vinden."],
        ["Sanne", "Je sais. Si j'avais osé, ma vie aurait été complètement différente.", "Ik weet het. Als ik had gedurfd, was mijn leven totaal anders geweest."],
        ["Youssef", "Peut-être. Mais si tu étais venue, tu n'aurais pas rencontré Tom.", "Misschien. Maar als je gekomen was, had je Tom niet ontmoet."],
        ["Sanne", "C'est vrai. Je n'y avais pas pensé comme ça.", "Dat is waar. Zo had ik het nog niet bekeken."],
        ["Youssef", "Moi aussi, j'ai des regrets. J'aurais voulu faire des études de musique. Mon père n'était pas d'accord.", "Ik heb ook spijt van dingen. Ik had graag muziek willen studeren. Mijn vader was het er niet mee eens."],
        ["Sanne", "Il n'est jamais trop tard ! Tu pourrais commencer maintenant.", "Het is nooit te laat! Je zou nu kunnen beginnen."],
        ["Youssef", "Tu as raison. Tant pis pour le passé. Viens, on va manger un poisson au port.", "Je hebt gelijk. Jammer dan van het verleden. Kom, we gaan vis eten in de haven."]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce que Sanne regrette ?", o: ["D'avoir refusé un poste à Casablanca", "D'avoir quitté Tom", "D'avoir fait des études de musique"] },
        { t: "mc", q: "Qu'est-ce que Youssef aurait fait si elle l'avait appelé ?", o: ["Il l'aurait aidée à trouver un appartement", "Il aurait refusé", "Il serait venu aux Pays-Bas"] },
        { t: "mc", q: "Qu'est-ce que Youssef aurait voulu faire ?", o: ["Des études de musique", "Le tour du monde", "Travailler au port"] }
      ]
    },
    culture: { t: "Casablanca en «Non, je ne regrette rien»", html: `<p><b>Casablanca</b> («Casa») is de grootste stad en het economische hart van Marokko. De <b>corniche</b> is de boulevard langs de Atlantische Oceaan, waar iedereen 's avonds wandelt; ernaast staat de <b>Hassan II-moskee</b>, met een minaret van 210 meter, deels op het water gebouwd. De beroemde film <i>Casablanca</i> (1942) is overigens volledig in Hollywood opgenomen.</p>
<p>🎵 Het bekendste Franse lied over spijt is <i>«Non, je ne regrette rien»</i> van <b>Édith Piaf</b> (1960): «Nee, ik heb nergens spijt van.» De titel is een perfecte zin om <i>ne … rien</i> te onthouden.</p>
<p>Handige zinnen bij spijt en vergeving: <i>Je m'en veux</i> (ik neem het mezelf kwalijk), <i>Ce n'est pas grave</i> (het is niet erg), <i>Ça arrive</i> (dat kan gebeuren), <i>N'en parlons plus</i> (zand erover).</p>` },
    ex: [
      { t: "cloze", s: "J'___ dû partir plus tôt.", a: ["aurais"], o: ["aurais", "avais", "aurai"], nl: "Ik had eerder moeten vertrekken.", x: "Anders dan «had»: het Frans gebruikt de conditionnel van avoir.", tag: "fr-cond-passe" },
      { t: "cloze", s: "Tu aurais ___ me le dire !", a: ["pu"], o: ["pu", "pouvoir", "peux"], nl: "Je had het me kunnen zeggen!", tag: "fr-cond-passe" },
      { t: "cloze", s: "Nous ___ venus avec plaisir.", a: ["serions"], o: ["serions", "aurions", "étions"], nl: "We zouden graag gekomen zijn.", x: "Venir krijgt être, ook in de conditionnel passé.", tag: "fr-cond-passe" },
      { t: "cloze", s: "Si j'___ su, je serais venu.", a: ["avais"], o: ["avais", "aurais", "ai"], nl: "Als ik het geweten had, was ik gekomen.", x: "Na si nooit een conditionnel: si + plus-que-parfait.", tag: "fr-si-pqp" },
      { t: "cloze", s: "Si tu m'avais appelé, je t'___ aidé.", a: ["aurais"], o: ["aurais", "avais", "ai"], nl: "Als je me gebeld had, had ik je geholpen.", tag: "fr-si-pqp" },
      { t: "cloze", s: "Si elle ___ venue, elle aurait vu Paul.", a: ["était"], o: ["était", "serait", "avait"], nl: "Als ze gekomen was, had ze Paul gezien.", tag: "fr-si-pqp" },
      { t: "cloze", s: "J'aurais ___ faire des études de musique.", a: ["voulu"], o: ["voulu", "vouloir", "veux"], nl: "Ik had graag muziek willen studeren.", tag: "fr-cond-passe" },
      { t: "cloze", s: "Si ___ j'avais osé !", a: ["seulement"], o: ["seulement", "seul", "même"], nl: "Had ik maar gedurfd!", tag: "fr-si-pqp" },
      { t: "mc", q: "Hoe zeg je «Ik had moeten bellen» (maar ik deed het niet)?", o: ["J'aurais dû appeler.", "J'avais dû appeler.", "Je devais appeler."], x: "J'avais dû = ik had moeten (en deed het). Spijt = j'aurais dû.", tag: "fr-cond-passe" },
      { t: "mc", q: "Welke zin is goed?", o: ["Si j'avais su, je ne serais pas venu.", "Si j'aurais su, je ne serais pas venu.", "Si j'avais su, je n'étais pas venu."], x: "De beroemde fout: na si geen conditionnel.", tag: "fr-si-pqp" },
      { t: "mc", q: "Welke zin gaat over iets wat in het verleden níet gebeurd is?", o: ["Si j'avais eu le temps, je serais venu.", "Si j'ai le temps, je viendrai.", "Si j'avais le temps, je viendrais."], tag: "fr-si-pqp" },
      { t: "tr", nl: "Ik had naar je moeten luisteren.", a: ["J'aurais dû t'écouter.", "J'aurais dû vous écouter."], tag: "fr-cond-passe" },
      { t: "tr", nl: "Het is niet erg.", a: ["Ce n'est pas grave."], tag: "fr-voc" },
      { t: "tr", nl: "Als ik het geweten had, had ik niets gezegd.", a: ["Si j'avais su, je n'aurais rien dit."], tag: "fr-si-pqp" },
      { t: "tr", nl: "Het is nooit te laat.", a: ["Il n'est jamais trop tard.", "Ce n'est jamais trop tard."], tag: "fr-voc" },
      { t: "order", s: "Si j'avais osé, ma vie aurait été complètement différente.", nl: "Als ik had gedurfd, was mijn leven totaal anders geweest.", tag: "fr-ordre" },
      { t: "match", p: [["le regret", "de spijt"], ["le reproche", "het verwijt"], ["hésiter", "aarzelen"], ["oser", "durven"], ["rater", "missen"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Lettre à moi-même, à vingt ans", type: "Column in een tijdschrift",
      p: [
        ["Chère moi de vingt ans, si je pouvais te parler, je te dirais d'abord de ne pas avoir peur. À ton âge, j'aurais voulu partir étudier à l'étranger. J'avais même obtenu une bourse pour Montréal. Mais j'ai hésité, et j'ai laissé passer l'occasion.", "Lieve ik van twintig, als ik met je kon praten, zou ik je eerst zeggen dat je niet bang moet zijn. Op jouw leeftijd had ik graag in het buitenland willen studeren. Ik had zelfs een beurs voor Montréal gekregen. Maar ik aarzelde, en ik liet de kans voorbijgaan."],
        ["Si j'étais partie, j'aurais appris l'anglais beaucoup plus vite et j'aurais rencontré des gens du monde entier. J'aurais dû écouter ma grand-mère, qui me disait toujours : « Vas-y, tu reviendras si ça ne te plaît pas ! » Elle avait raison. J'aurais pu revenir.", "Als ik was gegaan, had ik veel sneller Engels geleerd en mensen van over de hele wereld ontmoet. Ik had naar mijn oma moeten luisteren, die altijd zei: 'Ga maar, je komt terug als het je niet bevalt!' Ze had gelijk. Ik had kunnen terugkomen."],
        ["Mais je ne regrette pas tout. Si j'avais quitté Casablanca, je n'aurais jamais rencontré ton futur mari, et tes enfants ne seraient pas nés. Alors, fais tes choix sans trop hésiter, et pardonne-toi tes erreurs. Tant pis pour le reste !", "Maar ik heb niet overal spijt van. Als ik Casablanca had verlaten, had ik je toekomstige man nooit ontmoet, en waren je kinderen niet geboren. Dus maak je keuzes zonder te veel te aarzelen, en vergeef jezelf je fouten. Jammer dan van de rest!"]
      ],
      gl: [["obtenir", "krijgen / behalen"], ["laisser passer", "voorbij laten gaan"], ["le monde entier", "de hele wereld"], ["plaire", "bevallen"], ["quitter", "verlaten"]],
      q: [
        { t: "mc", q: "Qu'est-ce que l'auteure aurait voulu faire à vingt ans ?", o: ["Partir étudier à l'étranger", "Se marier", "Travailler à Casablanca"] },
        { t: "mc", q: "Que disait sa grand-mère ?", o: ["« Vas-y, tu reviendras si ça ne te plaît pas ! »", "« Reste ici, c'est mieux. »", "« Il faut hésiter. »"] },
        { t: "mc", q: "Pourquoi ne regrette-t-elle pas tout ?", o: ["Elle n'aurait pas rencontré son mari", "Elle n'aimait pas Montréal", "Elle a appris l'anglais"] }
      ]
    },
    say: [["J'aurais dû t'écouter.", "Ik had naar je moeten luisteren."], ["Tu aurais pu me le dire !", "Je had het me kunnen zeggen!"], ["Si j'avais su, je serais venu.", "Als ik het geweten had, was ik gekomen."], ["Ce n'est pas grave.", "Het is niet erg."]],
    task: { nl: "Schrijf 5 zinnen over iets wat je anders had willen doen: wat had je moeten doen, en wat was er dan gebeurd?", model: "À dix-huit ans, j'aurais dû continuer le français à l'école. Si j'avais continué, je parlerais beaucoup mieux aujourd'hui. J'aurais aussi pu faire un stage en France. Si seulement j'avais écouté mon professeur ! Mais il n'est jamais trop tard : j'ai recommencé cette année." },
    scenario: { nl: "Een avond aan zee in Casablanca: jij en een vriend praten over gemiste kansen.", role: "You are Youssef, a thoughtful friend from Casablanca, walking along the corniche at sunset. Ask the learner whether they have regrets: a job they refused, something they should have said, a trip they did not take. React warmly, gently reproach them once (Tu aurais pu m'appeler !), share your own regret (you would have liked to study music) and end on a positive note. Use tu and natural French with j'aurais dû/pu/voulu and si + plus-que-parfait.", goal: "Vertel waar je spijt van hebt met j'aurais dû, en maak één zin met si + plus-que-parfait." }
  });

  /* ───────────────────────── B1 · 9 ───────────────────────── */
  U({
    id: "fr-b1-09", level: "B1", icon: "🏡", title: "Ce dont je rêve", nl: "Een woning zoeken: precies zeggen wat je bedoelt",
    goals: ["Een woning beschrijven en zeggen wat je zoekt", "Dont gebruiken", "Ce qui, ce que en ce dont gebruiken", "Zinnen maken met een voorzetsel + lequel"],
    vocab: [
      ["le logement", "de woning"], ["l'agence immobilière", "het makelaarskantoor"], ["l'annonce", "de advertentie"], ["le / la propriétaire", "de eigenaar / de huisbaas"], ["le / la locataire", "de huurder"], ["louer", "huren / verhuren"],
      ["la visite", "de bezichtiging"], ["la caution", "de borg"], ["meublé / meublée", "gemeubileerd"], ["lumineux / lumineuse", "licht (veel licht)"], ["spacieux / spacieuse", "ruim"], ["sombre", "donker"],
      ["l'étage", "de verdieping"], ["le rez-de-chaussée", "de begane grond"], ["la terrasse", "het terras"], ["le balcon", "het balkon"], ["la cour", "de binnenplaats"], ["le toit", "het dak"],
      ["la vue", "het uitzicht"], ["le voisinage", "de buurt / de buren"], ["donner sur", "uitkijken op"], ["avoir besoin de", "nodig hebben"], ["avoir envie de", "zin hebben in"], ["se servir de", "gebruiken"],
      ["être fier de", "trots zijn op"], ["parler de", "praten over"], ["rêver de", "dromen van"], ["s'occuper de", "zorgen voor / zich bezighouden met"], ["ce qui me plaît", "wat me bevalt"], ["ce dont j'ai besoin", "wat ik nodig heb"]
    ],
    grammar: [
      { t: "Dont: waarvan, van wie, waarover", es: "Le pronom relatif dont",
        html: `<p>Je kent <i>qui</i>, <i>que</i> en <i>où</i>. Het vierde betrekkelijk voornaamwoord is <b>dont</b>. Het vervangt altijd iets met <b>de</b>.</p>
<p>Het Frans heeft veel werkwoorden en uitdrukkingen met <b>de</b>: <i>parler <b>de</b>, avoir besoin <b>de</b>, avoir envie <b>de</b>, rêver <b>de</b>, se souvenir <b>de</b>, s'occuper <b>de</b>, se servir <b>de</b>, être fier <b>de</b>, avoir peur <b>de</b></i>. Zit zo'n <i>de</i> in de bijzin, dan wordt het <b>dont</b>:</p>
<p><i>Je t'ai parlé <u>de cet appartement</u>.</i> → <i>C'est l'appartement <b>dont</b> je t'ai parlé.</i> (waarover ik je verteld heb)<br><i>J'ai besoin <u>de ce document</u>.</i> → <i>Voici le document <b>dont</b> j'ai besoin.</i> (dat ik nodig heb)</p>
<p>⚠️ <b>Let op, hier gaat het mis voor Nederlandstaligen:</b> wij zeggen «het document <u>dat</u> ik nodig heb», dus je wilt <i>que</i> zeggen. Maar <i>avoir besoin</i> heeft <b>de</b>, dus het moet <b>dont</b> zijn. Niet <s>le document que j'ai besoin</s>. Vraag je bij elke bijzin af: <b>hoort er een <i>de</i> bij dit werkwoord?</b></p>
<p><b>Dont</b> drukt ook <b>bezit</b> uit (van wie, waarvan, wiens): <i>C'est la voisine <b>dont</b> le fils est médecin.</i> (wier zoon arts is) · <i>Une maison <b>dont</b> le toit est rouge.</i> (waarvan het dak rood is). Na <i>dont</i> houdt het zelfstandig naamwoord zijn lidwoord (<i>le fils</i>, niet <s>son fils</s>).</p>
<p><i>Dont</i> verandert nooit van vorm en is hetzelfde voor personen en dingen.</p>`,
        table: [["uitdrukking met de", "zin met dont", "vertaling"], ["parler de", "le quartier dont tu parles", "de wijk waarover je praat"], ["avoir besoin de", "l'outil dont j'ai besoin", "het gereedschap dat ik nodig heb"], ["rêver de", "la maison dont je rêve", "het huis waarvan ik droom"], ["être fier de", "un travail dont je suis fier", "werk waar ik trots op ben"], ["bezit", "un ami dont la sœur habite ici", "een vriend wiens zus hier woont"]],
        ex: [["C'est exactement l'appartement dont j'avais envie.", "Het is precies het appartement waar ik zin in had."], ["Voici la propriétaire dont je t'ai parlé.", "Dit is de huisbazin over wie ik je verteld heb."]] },
      { t: "Ce qui, ce que, ce dont: wat", es: "Ce qui, ce que, ce dont",
        html: `<p>Het Nederlandse <b>«wat»</b> (in de betekenis «datgene wat») heeft in het Frans drie vormen. Het woordje <b>ce</b> staat ervoor omdat er geen zelfstandig naamwoord is om naar te verwijzen; daarna gelden dezelfde regels als bij <i>qui / que / dont</i>:</p>
<p><b>ce qui</b> = onderwerp (er volgt direct een werkwoord): <i><b>Ce qui</b> me plaît, c'est la lumière.</i> (Wat me bevalt, is het licht.)</p>
<p><b>ce que</b> = lijdend voorwerp (er volgt een onderwerp): <i><b>Ce que</b> je cherche, c'est un deux-pièces.</i> (Wat ik zoek…)</p>
<p><b>ce dont</b> = bij een werkwoord met <i>de</i>: <i><b>Ce dont</b> j'ai besoin, c'est d'un balcon.</i> (Wat ik nodig heb…) · <i>C'est <b>ce dont</b> je rêve.</i></p>
<p>Je gebruikt ze heel vaak om <b>nadruk</b> te leggen, met <i>c'est</i> in het tweede deel: <i>Ce qui…, c'est…</i> / <i>Ce que…, c'est…</i></p>
<p>⚠️ <b>Let op het verschil met een vraag:</b> in een directe vraag zeg je <i><b>Qu'est-ce que</b> tu veux ?</i>, maar in een bijzin wordt dat <i>Je ne sais pas <b>ce que</b> tu veux.</i> En «alles wat» is altijd <b>tout ce qui / tout ce que</b>: <i>C'est <b>tout ce que</b> j'ai.</i> (Niet <s>tout que</s>.)</p>`,
        table: [["vorm", "functie", "voorbeeld"], ["ce qui", "onderwerp", "Ce qui compte, c'est le prix."], ["ce que", "lijdend voorwerp", "Dis-moi ce que tu en penses."], ["ce dont", "bij de", "C'est ce dont j'avais peur."], ["tout ce que", "alles wat", "J'ai visité tout ce qu'il y avait."]],
        ex: [["Ce qui me dérange, c'est le bruit de la rue.", "Wat me stoort, is het lawaai van de straat."], ["Je ne comprends pas ce que le propriétaire veut.", "Ik begrijp niet wat de huisbaas wil."]] },
      { t: "Voorzetsel + lequel", es: "Préposition + lequel",
        html: `<p>Na andere voorzetsels dan <i>de</i> (<i>avec, pour, dans, sur, sans, chez, à…</i>) gebruik je voor <b>dingen</b>: <b>lequel, laquelle, lesquels, lesquelles</b>. Het past zich aan het woord aan waarnaar het verwijst.</p>
<p><i>la table <b>sur laquelle</b> je travaille</i> (de tafel waarop ik werk) · <i>le stylo <b>avec lequel</b> j'écris</i> · <i>les raisons <b>pour lesquelles</b> je pars</i></p>
<p><b>Let op, anders dan in het Nederlands:</b> wij zeggen «de tafel waar ik <u>op</u> werk» en zetten het voorzetsel achteraan. In het Frans staat het voorzetsel <b>altijd vóór</b> <i>lequel</i>, nooit aan het eind van de zin.</p>
<p>⚠️ <b>Uitzondering 1:</b> met <b>à</b> en <b>de</b> smelt <i>lequel</i> samen, net als het lidwoord: <i>à + lequel = <b>auquel</b></i>, <i>à + lesquels = <b>auxquels</b></i>, <i>de + lequel = <b>duquel</b></i> (maar <i>à laquelle</i> en <i>de laquelle</i> blijven los). <i>le projet <b>auquel</b> je pense</i> (waar ik aan denk) · <i>le parc près <b>duquel</b> j'habite</i>.</p>
<p>⚠️ <b>Uitzondering 2:</b> voor <b>personen</b> gebruik je liever <b>qui</b>: <i>l'ami <b>avec qui</b> je vis</i>, <i>la personne <b>à qui</b> j'ai parlé</i>.</p>
<p>⚠️ <b>Uitzondering 3:</b> voor een plaats is <b>où</b> meestal korter en natuurlijker dan <i>dans lequel</i>: <i>l'immeuble <b>où</b> j'habite</i>.</p>`,
        table: [["voorzetsel", "voorbeeld", "vertaling"], ["dans", "le quartier dans lequel j'habite", "de wijk waarin ik woon"], ["avec", "la clé avec laquelle j'ouvre", "de sleutel waarmee ik opendoe"], ["pour", "la raison pour laquelle je déménage", "de reden waarom ik verhuis"], ["à", "l'annonce à laquelle j'ai répondu", "de advertentie waarop ik gereageerd heb"], ["persoon", "le voisin avec qui je parle", "de buurman met wie ik praat"]],
        ex: [["C'est la raison pour laquelle je cherche un autre logement.", "Dat is de reden waarom ik een andere woning zoek."], ["Voici la terrasse sur laquelle on dîne en été.", "Dit is het terras waarop we 's zomers eten."]] }
    ],
    dialogue: {
      t: "Visite d'un appartement", place: "Dakar 🇸🇳",
      lines: [
        ["Agent", "Bonjour ! Vous êtes la personne qui a répondu à l'annonce ? Entrez.", "Goedendag! Bent u degene die op de advertentie heeft gereageerd? Komt u binnen."],
        ["Sanne", "Oui, bonjour. C'est l'appartement dont vous m'avez parlé au téléphone ?", "Ja, goedendag. Is dit het appartement waarover u me aan de telefoon verteld hebt?"],
        ["Agent", "Exactement. Un trois-pièces au deuxième étage, dont la terrasse donne sur la mer.", "Precies. Een driekamerappartement op de tweede verdieping, waarvan het terras uitkijkt op zee."],
        ["Sanne", "C'est très lumineux ! C'est ce qui me plaît le plus. Et ce que je cherche, c'est le calme.", "Het is heel licht! Dat bevalt me het meest. En wat ik zoek, is rust."],
        ["Agent", "Alors vous serez contente : c'est un quartier dans lequel il y a très peu de circulation.", "Dan zult u tevreden zijn: het is een wijk waarin heel weinig verkeer is."],
        ["Sanne", "Et la cuisine ? Elle est équipée ? C'est ce dont j'ai le plus besoin.", "En de keuken? Is die ingericht? Dat heb ik het hardst nodig."],
        ["Agent", "Oui, tout ce que vous voyez reste : le frigo, la table sur laquelle vous pouvez manger…", "Ja, alles wat u ziet blijft: de koelkast, de tafel waaraan u kunt eten…"],
        ["Sanne", "Parfait. Et le propriétaire, c'est quelqu'un avec qui on peut discuter ?", "Perfect. En de eigenaar, is dat iemand met wie je kunt praten?"],
        ["Agent", "Très gentil. C'est un professeur dont les enfants habitent en France.", "Heel aardig. Het is een leraar wiens kinderen in Frankrijk wonen."],
        ["Sanne", "Et quel est le loyer ? C'est la raison pour laquelle j'hésite encore…", "En wat is de huur? Dat is de reden waarom ik nog aarzel…"],
        ["Agent", "Trois cent cinquante mille francs CFA par mois, plus deux mois de caution.", "Driehonderdvijftigduizend CFA-frank per maand, plus twee maanden borg."]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce qui plaît le plus à Sanne ?", o: ["La lumière", "Le prix", "La cuisine"] },
        { t: "mc", q: "De quoi a-t-elle le plus besoin ?", o: ["D'une cuisine équipée", "D'un garage", "D'un jardin"] },
        { t: "mc", q: "Qui est le propriétaire ?", o: ["Un professeur dont les enfants habitent en France", "L'agent immobilier", "Un voisin"] }
      ]
    },
    culture: { t: "Wonen in Dakar, en hoe Fransen kamers tellen", html: `<p>In het Frans tel je een woning in <b>pièces</b> (kamers), en daarbij tellen keuken en badkamer <b>niet</b> mee. Een <i>deux-pièces</i> (of <i>T2 / F2</i>) heeft dus een woonkamer en één slaapkamer; een <i>studio</i> heeft één kamer. Een <i>trois-pièces</i> is wat wij een appartement met twee slaapkamers noemen.</p>
<p>⚠️ En let op de verdiepingen: <i>le rez-de-chaussée</i> is de begane grond, <i>le premier étage</i> is de <b>eerste verdieping</b> (zoals in het Nederlands, anders dan in het Amerikaans-Engels).</p>
<p>In <b>Dakar</b> betaal je in <b>franc CFA</b> (XOF), de munt van acht West-Afrikaanse landen: 1 euro is vast 655,957 CFA. Bij huur is twee of drie maanden <i>caution</i> gebruikelijk. Wijken als <i>Les Almadies</i>, <i>Ngor</i> en <i>Mermoz</i> liggen aan zee; een dakterras (<i>la terrasse</i>) is er het hart van het huis, waar je 's avonds thee drinkt.</p>` },
    ex: [
      { t: "cloze", s: "C'est l'appartement ___ je t'ai parlé.", a: ["dont"], o: ["dont", "que", "où"], nl: "Dat is het appartement waarover ik je verteld heb.", x: "Parler de → dont.", tag: "fr-dont" },
      { t: "cloze", s: "Voici le document ___ j'ai besoin.", a: ["dont"], o: ["dont", "que", "qui"], nl: "Dit is het document dat ik nodig heb.", x: "Let op: wij zeggen «dat», maar avoir besoin de → dont.", tag: "fr-dont" },
      { t: "cloze", s: "C'est un voisin ___ la fille est médecin.", a: ["dont"], o: ["dont", "qui", "que"], nl: "Het is een buurman wiens dochter arts is.", x: "Bezit (wiens, waarvan): dont.", tag: "fr-dont" },
      { t: "cloze", s: "___ me plaît, c'est la lumière.", a: ["Ce qui"], o: ["Ce qui", "Ce que", "Ce dont"], nl: "Wat me bevalt, is het licht.", x: "Er volgt direct een werkwoord: ce qui (onderwerp).", tag: "fr-cequi" },
      { t: "cloze", s: "___ je cherche, c'est le calme.", a: ["Ce que"], o: ["Ce que", "Ce qui", "Ce dont"], nl: "Wat ik zoek, is rust.", tag: "fr-cequi" },
      { t: "cloze", s: "___ j'ai besoin, c'est d'un balcon.", a: ["Ce dont"], o: ["Ce dont", "Ce que", "Ce qui"], nl: "Wat ik nodig heb, is een balkon.", tag: "fr-cequi" },
      { t: "cloze", s: "La table sur ___ je travaille est trop petite.", a: ["laquelle"], o: ["laquelle", "lequel", "qui"], nl: "De tafel waarop ik werk, is te klein.", x: "La table is vrouwelijk: laquelle.", tag: "fr-lequel" },
      { t: "cloze", s: "C'est le projet ___ je pense.", a: ["auquel"], o: ["auquel", "à lequel", "dont"], nl: "Dat is het project waar ik aan denk.", x: "Uitzondering: à + lequel smelt samen tot auquel.", tag: "fr-lequel" },
      { t: "mc", q: "Welke zin is goed?", o: ["C'est tout ce que j'ai.", "C'est tout que j'ai.", "C'est tout quoi j'ai."], x: "«Alles wat» is altijd tout ce que / tout ce qui.", tag: "fr-cequi" },
      { t: "mc", q: "Hoe zeg je «de vriend met wie ik woon»?", o: ["l'ami avec qui j'habite", "l'ami que j'habite avec", "l'ami avec que j'habite"], x: "Het voorzetsel staat altijd vooraan; voor personen: qui.", tag: "fr-lequel" },
      { t: "mc", q: "Wanneer gebruik je dont?", o: ["Als er een «de» bij het werkwoord of bij bezit hoort", "Bij elk ding", "Na elk voorzetsel"], tag: "fr-dont" },
      { t: "tr", nl: "Dat is het huis waarvan ik droom.", a: ["C'est la maison dont je rêve."], tag: "fr-dont" },
      { t: "tr", nl: "Ik weet niet wat hij wil.", a: ["Je ne sais pas ce qu'il veut."], tag: "fr-cequi" },
      { t: "tr", nl: "Het appartement kijkt uit op zee.", a: ["L'appartement donne sur la mer."], tag: "fr-voc" },
      { t: "tr", nl: "Dat is de reden waarom ik verhuis.", a: ["C'est la raison pour laquelle je déménage."], tag: "fr-lequel" },
      { t: "order", s: "C'est un quartier dans lequel il y a peu de circulation.", nl: "Het is een wijk waarin weinig verkeer is.", tag: "fr-ordre" },
      { t: "match", p: [["lumineux", "licht"], ["spacieux", "ruim"], ["sombre", "donker"], ["meublé", "gemeubileerd"], ["la caution", "de borg"]], tag: "fr-voc" }
    ],
    reading: {
      t: "À louer : trois-pièces avec terrasse", type: "Advertentie en reactie",
      p: [
        ["À louer aux Almadies : bel appartement de trois pièces, au deuxième étage d'un petit immeuble dont la façade vient d'être repeinte. Le séjour, dans lequel il y a beaucoup de lumière, donne sur une terrasse d'où on voit la mer. Cuisine équipée, deux chambres, salle de bains.", "Te huur in Les Almadies: mooi driekamerappartement, op de tweede verdieping van een klein gebouw waarvan de gevel net opnieuw geschilderd is. De woonkamer, waarin veel licht valt, kijkt uit op een terras vanwaar je de zee ziet. Ingerichte keuken, twee slaapkamers, badkamer."],
        ["Ce qui rend ce logement unique, c'est son calme : la rue dans laquelle il se trouve est une impasse. Ce dont vous aurez besoin se trouve à cinq minutes à pied : boulangerie, marché, pharmacie. Le propriétaire, avec qui vous signerez le bail, habite au rez-de-chaussée.", "Wat deze woning uniek maakt, is de rust: de straat waarin hij ligt, loopt dood. Wat u nodig hebt, ligt op vijf minuten lopen: bakker, markt, apotheek. De eigenaar, met wie u het huurcontract tekent, woont op de begane grond."],
        ["Réponse de Sanne : « Bonjour, c'est exactement le genre d'appartement dont je rêve. Ce que j'aimerais savoir, c'est si les charges sont comprises. Pourriez-vous aussi me dire la date à laquelle il sera libre ? Je suis disponible pour une visite quand vous voulez. »", "Reactie van Sanne: 'Goedendag, dit is precies het soort appartement waarvan ik droom. Wat ik graag zou weten, is of de servicekosten inbegrepen zijn. Zou u me ook kunnen zeggen op welke datum het vrij is? Ik ben beschikbaar voor een bezichtiging wanneer u wilt.'"]
      ],
      gl: [["la façade", "de gevel"], ["le séjour", "de woonkamer"], ["l'impasse", "de doodlopende straat"], ["compris", "inbegrepen"], ["disponible", "beschikbaar"]],
      q: [
        { t: "mc", q: "Qu'est-ce qui rend ce logement unique ?", o: ["Son calme", "Son prix", "Sa taille"] },
        { t: "mc", q: "Où habite le propriétaire ?", o: ["Au rez-de-chaussée", "En France", "Au deuxième étage"] },
        { t: "mc", q: "Qu'est-ce que Sanne aimerait savoir ?", o: ["Si les charges sont comprises", "Si la cuisine est équipée", "S'il y a une terrasse"] }
      ]
    },
    say: [["C'est l'appartement dont je rêve.", "Het is het appartement waarvan ik droom."], ["Ce qui me plaît, c'est la lumière.", "Wat me bevalt, is het licht."], ["C'est ce dont j'ai besoin.", "Dat is wat ik nodig heb."], ["C'est la raison pour laquelle j'hésite.", "Dat is de reden waarom ik aarzel."]],
    task: { nl: "Beschrijf in 5 zinnen je droomwoning. Gebruik dont, ce qui of ce que, en één keer een voorzetsel + lequel.", model: "La maison dont je rêve se trouve près de la mer. Ce qui est important pour moi, c'est la lumière. Ce que je voudrais aussi, c'est un jardin dans lequel je pourrais planter des tomates. J'aimerais une grande cuisine dont les fenêtres donnent sur le jardin. C'est tout ce dont j'ai besoin pour être heureux !" },
    scenario: { nl: "Je bezichtigt een appartement in Dakar met een makelaar en stelt gerichte vragen.", role: "You are a polite, efficient estate agent in Dakar, Senegal, showing a bright three-room flat in Les Almadies with a terrace overlooking the sea (350,000 CFA francs a month, two months' deposit, owner lives downstairs). Ask the learner what they are looking for and what matters most to them, answer their questions about rent, charges, neighbourhood and the owner, and ask when they could move in. Use vous and natural French with dont, ce qui / ce que / ce dont and préposition + lequel.", goal: "Zeg wat je zoekt met ce que of ce dont, stel twee vragen over de woning en zeg wat je bevalt." }
  });

  /* ───────────────────────── B1 · 10 ───────────────────────── */
  U({
    id: "fr-b1-10", level: "B1", icon: "💬", title: "Ça se dit comment ?", nl: "Spreektaal, nadruk en fijnere ontkenningen",
    goals: ["Spreektaal van verzorgd Frans onderscheiden", "Veelgebruikte informele woorden begrijpen", "Ontkennen met ne … que, ne … plus, ne … personne en ni … ni", "Nadruk leggen met c'est … qui / que"],
    vocab: [
      ["le langage familier", "de spreektaal"], ["le langage soutenu", "de verzorgde taal"], ["l'argot", "het slang / de straattaal"], ["le verlan", "omkeertaal (slang met omgedraaide lettergrepen)"], ["le mot", "het woord"], ["l'expression", "de uitdrukking"],
      ["le boulot", "het werk (informeel)"], ["bosser", "werken (informeel)"], ["la bagnole", "de auto (informeel)"], ["le fric", "het geld (informeel)"], ["le pote", "de vriend / maat (informeel)"], ["le mec", "de kerel (informeel)"],
      ["la bouffe", "het eten (informeel)"], ["le truc", "het ding (informeel)"], ["sympa", "aardig / leuk (informeel)"], ["génial / géniale", "geweldig"], ["nul / nulle", "waardeloos"], ["marrant / marrante", "grappig (informeel)"],
      ["crevé / crevée", "kapot (van moeheid, informeel)"], ["J'en ai marre.", "Ik ben het zat."], ["Ça marche !", "Is goed! / Afgesproken!"], ["Laisse tomber.", "Laat maar."], ["T'inquiète.", "Maak je geen zorgen. (informeel)"], ["C'est pas grave.", "Geeft niet. (informeel)"],
      ["ne … que", "alleen maar / slechts"], ["ne … plus", "niet meer"], ["ne … personne", "niemand"], ["ne … aucun", "geen enkel"], ["ni … ni", "noch … noch"], ["quand même", "toch"]
    ],
    grammar: [
      { t: "Spreektaal en verzorgd Frans", es: "Les registres de langue",
        html: `<p>Het verschil tussen <b>geschreven</b> en <b>gesproken</b> Frans is groter dan in het Nederlands. Wie alleen schoolfrans kent, verstaat een gesprek tussen vrienden nauwelijks. Dit zijn de vaste kenmerken van de <b>spreektaal</b> (<i>le français familier</i>):</p>
<p>1️⃣ <b>Ne valt weg:</b> <i>Je <s>ne</s> sais pas</i> → <b>«Je sais pas»</b>, vaak zelfs <b>«Chais pas»</b>. <i>C'est pas grave. J'ai rien dit.</i></p>
<p>2️⃣ <b>Klanken worden ingeslikt:</b> <i>tu es</i> → <b>t'es</b>, <i>tu as</i> → <b>t'as</b>, <i>il y a</i> → <b>y a</b>, <i>je suis</i> → <b>chuis</b>, <i>il</i> → <b>i'</b>. <i>T'as vu ? Y a personne.</i></p>
<p>3️⃣ <b>Nous wordt on:</b> <i>Nous allons</i> → <b>On va</b>. In gesproken Frans hoor je <i>nous</i> als onderwerp bijna nooit.</p>
<p>4️⃣ <b>Vragen zonder inversie:</b> <i>Où vas-tu ?</i> → <b>Tu vas où ?</b> · <i>Que fais-tu ?</i> → <b>Tu fais quoi ?</b></p>
<p>5️⃣ <b>Eigen woorden:</b> <i>le travail → le boulot</i>, <i>la voiture → la bagnole</i>, <i>l'argent → le fric</i>, <i>un ami → un pote</i>, <i>manger → bouffer</i>, <i>une chose → un truc</i>.</p>
<p>⚠️ <b>Let op, een belangrijke regel voor jou als leerling:</b> je moet de spreektaal <b>begrijpen</b>, maar gebruik haar alleen bij mensen die je tutoyeert. <b>Schrijf</b> altijd <i>ne</i>, en zeg in een winkel, op het werk en tegen onbekenden de volledige vormen. Informeel praten met <i>vous</i> klinkt vreemd.</p>
<p><b>Verlan</b> is slang waarin lettergrepen worden omgedraaid (<i>l'envers</i> → <i>verlan</i>): <i>femme → <b>meuf</b></i>, <i>fou → <b>ouf</b></i>, <i>louche → <b>chelou</b></i>, <i>lourd → <b>relou</b></i>. Sommige staan al in het woordenboek.</p>`,
        table: [["verzorgd", "gewoon", "spreektaal"], ["Je ne sais pas.", "Je ne sais pas.", "Chais pas."], ["Où allez-vous ?", "Où est-ce que tu vas ?", "Tu vas où ?"], ["Nous sommes fatigués.", "Nous sommes fatigués.", "On est crevés."], ["Il n'y a personne.", "Il n'y a personne.", "Y a personne."], ["un ami", "un copain", "un pote"]],
        ex: [["T'as du boulot demain ?", "Moet je morgen werken?"], ["C'est un truc de ouf !", "Dat is echt gestoord! (verlan van fou)"], ["J'en ai marre de cette bagnole.", "Ik ben die auto zat."]] },
      { t: "Meer ontkenningen: ne … que, plus, personne, aucun, ni … ni", es: "La négation complexe",
        html: `<p>Naast <i>ne … pas, jamais, rien</i> zijn er nog een paar ontkenningen met elk hun eigen plaats:</p>
<p><b>ne … plus</b> = niet meer: <i>Je <b>ne</b> fume <b>plus</b>.</i></p>
<p><b>ne … personne</b> = niemand: <i>Je <b>ne</b> connais <b>personne</b>.</i> ⚠️ <b>Uitzondering in de plaats:</b> in de passé composé staat <i>personne</i> <b>achter</b> het deelwoord (<i>Je n'ai vu <b>personne</b></i>), terwijl <i>rien</i> en <i>pas</i> ervóór staan (<i>Je n'ai <b>rien</b> vu</i>). Als onderwerp staan ze vooraan: <i><b>Personne ne</b> sait. <b>Rien ne</b> change.</i> (zonder <i>pas</i>!)</p>
<p><b>ne … aucun(e)</b> = geen enkel(e): <i>Je <b>n'</b>ai <b>aucune</b> idée.</i></p>
<p><b>ne … ni … ni</b> = noch … noch: <i>Je <b>n'</b>aime <b>ni</b> le café <b>ni</b> le thé.</i> ⚠️ Na <i>ni</i> vallen <i>un, une, du, de la, des</i> weg: <i>Je n'ai <b>ni</b> frère <b>ni</b> sœur.</i></p>
<p>⚠️ <b>De grote uitzondering: ne … que is géén ontkenning.</b> Het betekent <b>«alleen maar, slechts»</b>: <i>Je <b>n'</b>ai <b>que</b> dix euros.</i> (Ik heb maar tien euro.) Het is hetzelfde als <i>seulement</i>. <i>Que</i> staat direct vóór het woord dat je beperkt: <i>Je ne travaille <b>que</b> le matin.</i> Omdat het geen ontkenning is, blijven <i>un, du, des</i> gewoon staan (niet → <i>de</i>): <i>Je ne bois <b>que du</b> thé.</i></p>
<p>Ontkenningen kun je <b>combineren</b>, maar nooit met <i>pas</i>: <i>Je <b>ne</b> vois <b>plus personne</b>.</i> (Ik zie niemand meer.) <i>Il <b>n'</b>y a <b>plus rien</b>.</i> Twee ontkenningen heffen elkaar in het Frans niet op.</p>`,
        table: [["vorm", "voorbeeld", "vertaling"], ["ne … plus", "Il n'habite plus ici.", "Hij woont hier niet meer."], ["ne … personne", "Je n'ai vu personne.", "Ik heb niemand gezien."], ["personne ne", "Personne n'est venu.", "Er is niemand gekomen."], ["ne … aucun", "Je n'ai aucun problème.", "Ik heb geen enkel probleem."], ["ne … ni … ni", "Il ne boit ni vin ni bière.", "Hij drinkt wijn noch bier."], ["ne … que", "Je n'ai qu'une question.", "Ik heb maar één vraag."]],
        ex: [["Je ne regarde plus la télé, je ne lis que les journaux.", "Ik kijk geen tv meer, ik lees alleen kranten."], ["Personne ne m'a rien dit.", "Niemand heeft me iets gezegd."]] },
      { t: "Nadruk: c'est … qui, c'est … que", es: "La mise en relief",
        html: `<p>In het Nederlands leg je nadruk met je <b>stem</b>: «<u>Ik</u> heb dat gezegd.» Het Frans kan een woord niet zomaar beklemtonen (de klemtoon ligt vast aan het eind van de woordgroep). In plaats daarvan <b>knipt</b> het de zin in tweeën met <b>c'est … qui / que</b>:</p>
<p><b>c'est + onderwerp + qui</b>: <i><b>C'est</b> Marie <b>qui</b> a appelé.</i> (<u>Marie</u> heeft gebeld.) <i><b>C'est moi qui</b> ai dit ça.</i></p>
<p><b>c'est + iets anders + que</b>: <i><b>C'est</b> demain <b>que</b> je pars.</i> (Ik vertrek <u>morgen</u>.) <i><b>C'est</b> ce film <b>que</b> je veux voir.</i> <i><b>C'est</b> à Paris <b>que</b> je l'ai rencontré.</i></p>
<p>⚠️ <b>Let op:</b> na <i>c'est</i> komt de <b>beklemtoonde</b> vorm: <i>c'est <b>moi</b>, <b>toi</b>, <b>lui</b>, <b>elle</b>, <b>nous</b>, <b>vous</b>, <b>eux</b>, <b>elles</b></i>. En het werkwoord na <i>qui</i> richt zich naar die persoon: <i>C'est moi qui <b>suis</b> en retard</i> (niet <s>qui est</s>), <i>C'est nous qui <b>avons</b> gagné</i>.</p>
<p>⚠️ <b>Uitzondering:</b> in het meervoud (derde persoon) zegt verzorgd Frans <b>ce sont</b>: <i><b>Ce sont</b> mes parents qui paient.</i> In de spreektaal blijft het vaak <i>c'est</i>.</p>
<p>Je kent al de zustervorm uit unit 9: <i><b>Ce qui</b> me plaît, <b>c'est</b>…</i> Samen maken ze gesproken Frans levendig.</p>`,
        table: [["neutraal", "met nadruk", "vertaling"], ["Paul a raison.", "C'est Paul qui a raison.", "Páúl heeft gelijk."], ["J'ai payé.", "C'est moi qui ai payé.", "Ík heb betaald."], ["Je pars lundi.", "C'est lundi que je pars.", "Ik vertrek máándag."], ["Je parle de toi.", "C'est de toi que je parle.", "Ik heb het over jóú."]],
        ex: [["C'est toi qui as mon stylo ?", "Heb jíj mijn pen?"], ["C'est pour ça que je t'appelle.", "Daarom bel ik je."]] }
    ],
    dialogue: {
      t: "Devant le lycée", place: "Paris 🇫🇷",
      lines: [
        ["Lina", "Salut Daan ! Ça va ? T'as l'air crevé.", "Hoi Daan! Gaat-ie? Je ziet er kapot uit."],
        ["Daan", "Salut ! Oui, je suis fatigué. Je n'ai dormi que quatre heures.", "Hoi! Ja, ik ben moe. Ik heb maar vier uur geslapen."],
        ["Lina", "Ah ouais ? T'as trop bossé ?", "O ja? Te hard gewerkt?"],
        ["Daan", "« Bossé » ? Je ne connais pas ce mot. C'est de l'argot ?", "'Bossé'? Dat woord ken ik niet. Is dat slang?"],
        ["Lina", "C'est du français familier. Bosser, c'est travailler. Et le boulot, c'est le travail.", "Dat is spreektaal. Bosser is werken. En le boulot is het werk."],
        ["Daan", "D'accord ! À l'école, on ne nous apprend ni l'argot ni le verlan. Personne ne parle comme dans mon livre !", "Oké! Op school leren ze ons geen slang en geen verlan. Niemand praat zoals in mijn boek!"],
        ["Lina", "C'est clair. Mais t'inquiète, tu parles super bien. C'est toi qui as le meilleur accent de la classe.", "Dat is duidelijk. Maar maak je geen zorgen, je praat supergoed. Jíj hebt het beste accent van de klas."],
        ["Daan", "Merci, c'est sympa. Dis, c'est ce soir qu'on va au ciné avec tes potes ?", "Dank je, dat is aardig. Zeg, gaan we vanavond naar de film met je vrienden?"],
        ["Lina", "Ouais ! Mais Hugo ne vient plus : il a plus de fric.", "Ja! Maar Hugo komt niet meer: hij heeft geen geld meer."],
        ["Daan", "Ce n'est pas grave, c'est moi qui paie pour lui. Il n'y a aucun problème.", "Geeft niet, ík betaal voor hem. Geen enkel probleem."],
        ["Lina", "T'es trop gentil ! Ça marche. On se retrouve à dix-neuf heures ?", "Je bent veel te aardig! Afgesproken. Zien we elkaar om zeven uur?"]
      ],
      q: [
        { t: "mc", q: "Combien d'heures Daan a-t-il dormi ?", o: ["Seulement quatre heures", "Dix heures", "Il n'a pas dormi"] },
        { t: "mc", q: "Que veut dire « bosser » ?", o: ["Travailler", "Dormir", "Manger"] },
        { t: "mc", q: "Pourquoi Hugo ne vient-il plus ?", o: ["Il n'a plus d'argent", "Il est malade", "Il n'aime pas le cinéma"] }
      ]
    },
    culture: { t: "Verlan, sms-taal en de Académie", html: `<p><b>Verlan</b> ontstond in de Parijse voorsteden en is via rap en film in het gewone Frans terechtgekomen. <i>Meuf</i> (vrouw, vriendin), <i>keuf</i> (agent, van <i>flic</i>), <i>ouf</i> (gek) en <i>relou</i> (irritant) hoor je overal. Sommige woorden zijn zelfs twee keer omgedraaid: <i>arabe → beur → rebeu</i>.</p>
<p>📱 In berichtjes schrijven Fransen fonetisch en kort: <b>slt</b> (salut), <b>cc</b> (coucou), <b>bcp</b> (beaucoup), <b>stp</b> (s'il te plaît), <b>tkt</b> (t'inquiète), <b>jsp</b> (je sais pas), <b>mdr</b> (mort de rire = lol), <b>bjr</b> (bonjour), <b>a+</b> (à plus tard).</p>
<p>Tegelijk heeft Frankrijk de <b>Académie française</b> (opgericht in 1635), die over de taal waakt en Franse alternatieven voorstelt voor Engelse woorden: <i>courriel</i> voor e-mail, <i>logiciel</i> voor software. In Québec gaat men daarin nog verder: daar zeg je <i>clavarder</i> (chatten) en <i>magasiner</i> (shoppen), terwijl Parijzenaars gewoon <i>chatter</i> en <i>faire du shopping</i> zeggen.</p>
<p>Gefeliciteerd: met deze unit heb je niveau <b>B1</b> afgerond. Je kunt nu vertellen, je mening geven, spijt uitdrukken en echte Fransen verstaan. <i>Bravo, et à bientôt !</i></p>` },
    ex: [
      { t: "cloze", s: "Je n'ai ___ dix euros.", a: ["que"], o: ["que", "pas", "plus"], nl: "Ik heb maar tien euro.", x: "Uitzondering: ne … que is geen ontkenning maar betekent «alleen maar».", tag: "fr-neg2" },
      { t: "cloze", s: "Il n'habite ___ ici.", a: ["plus"], o: ["plus", "que", "personne"], nl: "Hij woont hier niet meer.", tag: "fr-neg2" },
      { t: "cloze", s: "Je n'ai vu ___.", a: ["personne"], o: ["personne", "rien", "aucun"], nl: "Ik heb niemand gezien.", x: "Uitzondering in de plaats: personne staat achter het deelwoord.", tag: "fr-neg2" },
      { t: "cloze", s: "___ ne sait où il est.", a: ["Personne"], o: ["Personne", "Rien", "Aucun"], nl: "Niemand weet waar hij is.", x: "Als onderwerp: personne ne…, zonder pas.", tag: "fr-neg2" },
      { t: "cloze", s: "Je n'aime ni le café ___ le thé.", a: ["ni"], o: ["ni", "ou", "pas"], nl: "Ik houd niet van koffie en ook niet van thee.", x: "Noch … noch: ne … ni … ni.", tag: "fr-neg2" },
      { t: "cloze", s: "C'est Marie ___ a appelé.", a: ["qui"], o: ["qui", "que", "dont"], nl: "Maríé heeft gebeld.", x: "Nadruk op het onderwerp: c'est … qui.", tag: "fr-relief" },
      { t: "cloze", s: "C'est demain ___ je pars.", a: ["que"], o: ["que", "qui", "où"], nl: "Ik vertrek mórgen.", x: "Nadruk op iets anders dan het onderwerp: c'est … que.", tag: "fr-relief" },
      { t: "cloze", s: "C'est moi qui ___ en retard.", a: ["suis"], o: ["suis", "est", "es"], nl: "Ík ben te laat.", x: "Het werkwoord na qui richt zich naar moi: suis.", tag: "fr-relief" },
      { t: "mc", q: "Wat betekent «le boulot» in de spreektaal?", o: ["het werk", "de auto", "het geld"], tag: "fr-registre" },
      { t: "mc", q: "Welke zin is spreektaal?", o: ["Chais pas, y a personne.", "Je ne sais pas, il n'y a personne.", "Je l'ignore, il n'y a personne."], x: "Ne valt weg, il y a wordt y a.", tag: "fr-registre" },
      { t: "mc", q: "Welke zin is goed?", o: ["Je ne bois que du thé.", "Je ne bois que de thé.", "Je ne bois pas que thé."], x: "Ne … que is geen ontkenning, dus du blijft staan.", tag: "fr-neg2" },
      { t: "tr", nl: "Ik ben het zat.", a: ["J'en ai marre."], tag: "fr-registre" },
      { t: "tr", nl: "Ik heb geen enkel idee.", a: ["Je n'ai aucune idée."], tag: "fr-neg2" },
      { t: "tr", nl: "Ík betaal. (met nadruk)", a: ["C'est moi qui paie.", "C'est moi qui paye."], tag: "fr-relief" },
      { t: "tr", nl: "Ik werk alleen 's ochtends.", a: ["Je ne travaille que le matin.", "Je travaille seulement le matin."], tag: "fr-neg2" },
      { t: "order", s: "C'est toi qui as le meilleur accent de la classe.", nl: "Jíj hebt het beste accent van de klas.", tag: "fr-ordre" },
      { t: "match", p: [["le boulot", "le travail"], ["la bagnole", "la voiture"], ["le fric", "l'argent"], ["le pote", "l'ami"], ["bosser", "travailler"]], tag: "fr-registre" }
    ],
    reading: {
      t: "Le français des jeunes : danger ou richesse ?", type: "Opiniestuk",
      p: [
        ["Chaque année, on entend la même chose : « Les jeunes ne savent plus parler français ! » Selon certains, ils n'utilisent que cinq cents mots et ne lisent plus aucun livre. Mais est-ce vraiment vrai ? Ce n'est ni nouveau ni exact.", "Elk jaar horen we hetzelfde: 'Jongeren kunnen geen Frans meer spreken!' Volgens sommigen gebruiken ze maar vijfhonderd woorden en lezen ze geen enkel boek meer. Maar is dat echt waar? Het is nieuw noch juist."],
        ["C'est au seizième siècle qu'on se plaignait déjà de la langue des jeunes. Et le verlan, que beaucoup de gens trouvent moderne, existait déjà il y a cent ans. Ce sont les jeunes qui inventent les mots de demain : « sympa », « ciné » et « prof » étaient de l'argot ; aujourd'hui, personne ne les remarque plus.", "Al in de zestiende eeuw klaagde men over de taal van jongeren. En verlan, dat veel mensen modern vinden, bestond honderd jaar geleden al. Het zijn de jongeren die de woorden van morgen bedenken: 'sympa', 'ciné' en 'prof' waren slang; tegenwoordig valt het niemand meer op."],
        ["Ce qui compte, c'est de savoir changer de registre. Un jeune qui dit « chais pas » à ses potes et « je ne sais pas » à son professeur ne parle pas mal : il parle deux fois bien. Le vrai danger, ce n'est pas l'argot, c'est de ne connaître qu'une seule façon de parler.", "Waar het om gaat, is dat je van register kunt wisselen. Een jongere die 'chais pas' zegt tegen zijn vrienden en 'je ne sais pas' tegen zijn leraar, praat niet slecht: hij praat twee keer goed. Het echte gevaar is niet slang, maar dat je maar één manier van praten kent."]
      ],
      gl: [["la richesse", "de rijkdom"], ["se plaindre de", "klagen over"], ["remarquer", "opmerken"], ["compter", "tellen / belangrijk zijn"], ["la façon", "de manier"]],
      q: [
        { t: "mc", q: "Que disent certains chaque année ?", o: ["Que les jeunes ne savent plus parler français", "Que le verlan est interdit", "Que les jeunes lisent trop"] },
        { t: "mc", q: "Qui invente les mots de demain, selon l'auteur ?", o: ["Les jeunes", "L'Académie française", "Les professeurs"] },
        { t: "mc", q: "Quel est le vrai danger ?", o: ["Ne connaître qu'une seule façon de parler", "Utiliser le verlan", "Dire « chais pas »"] }
      ]
    },
    say: [["Je n'ai que dix euros.", "Ik heb maar tien euro."], ["Personne ne parle comme dans mon livre.", "Niemand praat zoals in mijn boek."], ["C'est moi qui paie.", "Ík betaal."], ["Ça marche !", "Afgesproken!"]],
    task: { nl: "Schrijf een kort berichtje aan een Franse vriend (informeel, 4 of 5 zinnen) en daarna dezelfde boodschap in twee nette zinnen aan een docent.", model: "Salut Hugo ! Ça va ? Je suis crevé, je n'ai dormi que cinq heures. C'est ce soir qu'on va au ciné ? T'inquiète pour le fric, c'est moi qui paie. À plus ! — Bonjour monsieur Martin, je vous écris parce que je ne pourrai pas venir au cours demain. Je n'ai malheureusement aucune autre possibilité ; pourriez-vous m'envoyer les exercices ?" },
    scenario: { nl: "Een Parijse scholiere praat snel en informeel tegen je. Vraag wat woorden betekenen en praat mee.", role: "You are Lina, a friendly 17-year-old from Paris. Talk to the learner in relaxed spoken French: drop ne, say t'es / t'as / y a, use on, and use common informal words (boulot, bosser, pote, fric, truc, crevé, sympa, ça marche, t'inquiète) and one or two verlan words (ouf, relou). When the learner asks what a word means, explain it simply in standard French. Compliment their French, make plans for the cinema tonight, and use c'est … qui/que for emphasis. Keep sentences short.", goal: "Vraag naar de betekenis van twee informele woorden, gebruik ne … que of ne … plus, en leg één keer nadruk met c'est … qui." }
  });
})(window.SPT);
