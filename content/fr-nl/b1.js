/* Frans voor Nederlandstaligen — niveau B1, units 1–5 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-subj': 'subjonctif (vorm en gebruik na il faut que, vouloir que)', 'fr-subj-irr': 'onregelmatige subjonctif (sois, aie, aille, fasse…)', 'fr-cond': 'conditionnel présent', 'fr-si-imp': 'si + imparfait → conditionnel',
    'fr-politesse': 'beleefd vragen (pourriez-vous, je voudrais)', 'fr-pqp': 'plus-que-parfait', 'fr-indirect': 'indirecte rede (il dit que, il a demandé si)', 'fr-double': 'twee voornaamwoorden (me le, le lui, lui en)',
    'fr-imp-pron': 'gebiedende wijs met voornaamwoorden', 'fr-passif': 'lijdende vorm (être + deelwoord)', 'fr-on': 'on in plaats van de lijdende vorm'
  });

  /* ───────────────────────── B1 · 1 ───────────────────────── */
  U({
    id: "fr-b1-01", level: "B1", icon: "🧹", title: "Il faut que…", nl: "Samenwonen: wat er moet gebeuren",
    goals: ["Zeggen wat er moet gebeuren en wat je wilt dat een ander doet", "De subjonctif présent maken", "De belangrijkste onregelmatige subjonctifs gebruiken", "Taken in huis verdelen"],
    vocab: [
      ["la colocation", "het gedeelde huis / samenwonen met huisgenoten"], ["le / la colocataire", "de huisgenoot"], ["les tâches ménagères", "de huishoudelijke taken"], ["le ménage", "het huishouden / de schoonmaak"], ["la vaisselle", "de afwas"], ["la lessive", "de was"],
      ["les poubelles", "de vuilnisbakken"], ["l'aspirateur", "de stofzuiger"], ["ranger", "opruimen"], ["nettoyer", "schoonmaken"], ["partager", "delen"], ["sortir les poubelles", "het vuilnis buiten zetten"],
      ["passer l'aspirateur", "stofzuigen"], ["faire les courses", "boodschappen doen"], ["le frigo", "de koelkast"], ["le bail", "het huurcontract"], ["les charges", "de servicekosten / vaste lasten"], ["la règle", "de regel"],
      ["il faut que", "het is nodig dat / … moet"], ["je veux que", "ik wil dat"], ["j'aimerais que", "ik zou graag willen dat"], ["il est important que", "het is belangrijk dat"], ["exiger", "eisen"], ["se plaindre", "klagen"],
      ["s'entendre bien", "het goed met elkaar kunnen vinden"], ["se disputer", "ruzie maken"], ["en désordre", "rommelig"], ["chacun son tour", "ieder op zijn beurt"], ["ça m'énerve", "dat irriteert me"], ["d'accord", "akkoord"]
    ],
    grammar: [
      { t: "De subjonctif présent: vorm", es: "Le subjonctif présent : formation",
        html: `<p>De <b>subjonctif</b> is geen tijd maar een <b>wijs</b>: je gebruikt hem na bepaalde uitdrukkingen met <b>que</b>, wanneer iets niet een feit is maar een <b>wens, noodzaak, gevoel of twijfel</b>. Het Nederlands heeft hem niet meer (alleen nog in «leve de koning»), dus je moet hem echt leren.</p>
<p><b>Zo maak je hem:</b> neem de <b>ils-vorm</b> van de tegenwoordige tijd, haal <b>-ent</b> weg, en voeg toe: <b>-e, -es, -e, -ions, -iez, -ent</b>.</p>
<p><i>ils parl<s>ent</s> → que je parl<b>e</b></i> · <i>ils finiss<s>ent</s> → que je finiss<b>e</b></i> · <i>ils prenn<s>ent</s> → que je prenn<b>e</b></i> · <i>ils sort<s>ent</s> → que je sort<b>e</b></i></p>
<p>Goed nieuws: bij <b>-er</b>-werkwoorden zijn <i>je, tu, il</i> en <i>ils</i> precies gelijk aan de gewone tegenwoordige tijd. Je hoort het verschil pas bij -ir en -re: <i>il finit</i> → <i>qu'il fini<b>ss</b>e</i>, <i>il prend</i> → <i>qu'il pre<b>nn</b>e</i>.</p>
<p>De <b>nous</b>- en <b>vous</b>-vorm zijn gelijk aan de <b>imparfait</b>: <i>que nous parl<b>ions</b>, que vous parl<b>iez</b></i>. ⚠️ Daardoor krijgen werkwoorden met twee stammen ook hier twee stammen: <i>que je <b>prenn</b>e</i> maar <i>que nous <b>pren</b>ions</i>; <i>que je <b>vienn</b>e</i> maar <i>que nous <b>ven</b>ions</i>.</p>`,
        table: [["", "parler", "finir", "prendre"], ["que je", "parle", "finisse", "prenne"], ["que tu", "parles", "finisses", "prennes"], ["qu'il / elle / on", "parle", "finisse", "prenne"], ["que nous", "parlions", "finissions", "prenions"], ["que vous", "parliez", "finissiez", "preniez"], ["qu'ils / elles", "parlent", "finissent", "prennent"]],
        ex: [["Il faut que tu ranges ta chambre.", "Je moet je kamer opruimen."], ["Je veux que vous finissiez avant midi.", "Ik wil dat jullie vóór twaalf uur klaar zijn."], ["Il faut qu'on sorte les poubelles ce soir.", "We moeten vanavond het vuilnis buiten zetten."]] },
      { t: "Onregelmatige subjonctifs", es: "Les subjonctifs irréguliers",
        html: `<p>⚠️ <b>Uitzondering:</b> een handvol werkwoorden heeft een eigen subjonctif-stam. Het zijn (alweer) de meest gebruikte, dus je hoort ze voortdurend. <b>Waarom?</b> Ze komen rechtstreeks uit oude Latijnse vormen en zijn door veelvuldig gebruik nooit «rechtgetrokken».</p>
<p><b>être → que je sois</b> · <b>avoir → que j'aie</b> · <b>aller → que j'aille</b> · <b>faire → que je fasse</b> · <b>pouvoir → que je puisse</b> · <b>savoir → que je sache</b> · <b>vouloir → que je veuille</b></p>
<p><i>Faire, pouvoir</i> en <i>savoir</i> houden hun ene stam in alle personen (<i>que nous fassions, que vous puissiez</i>). <i>Aller</i> en <i>vouloir</i> wisselen: <i>que j'<b>aill</b>e</i> maar <i>que nous <b>all</b>ions</i>.</p>
<p>⚠️ <b>Extra uitzondering:</b> <i>être</i> en <i>avoir</i> wijken ook in de <b>uitgangen</b> af: <i>que je sois, tu sois, il soi<b>t</b>, nous soy<b>ons</b>, vous soy<b>ez</b>, ils soient</i> en <i>que j'aie, tu aies, il ai<b>t</b>, nous ay<b>ons</b>, vous ay<b>ez</b>, ils aient</i>. Geen -e bij il, geen -i- bij nous/vous.</p>
<p>En onpersoonlijk: <i>il faut → qu'il <b>faille</b></i>, <i>il pleut → qu'il <b>pleuve</b></i>.</p>`,
        table: [["infinitief", "que je…", "que nous…"], ["être", "sois", "soyons"], ["avoir", "aie", "ayons"], ["aller", "aille", "allions"], ["faire", "fasse", "fassions"], ["pouvoir", "puisse", "puissions"], ["savoir", "sache", "sachions"], ["vouloir", "veuille", "voulions"]],
        ex: [["Il faut que tu sois à l'heure.", "Je moet op tijd zijn."], ["Je veux qu'il fasse la vaisselle.", "Ik wil dat hij de afwas doet."], ["Il faut que j'aille à la banque.", "Ik moet naar de bank."]] },
      { t: "Wanneer subjonctif, wanneer infinitief?", es: "Subjonctif ou infinitif ?",
        html: `<p>Na deze uitdrukkingen volgt <b>que + subjonctif</b>:</p>
<p>🔸 <b>noodzaak</b>: <i>il faut que, il est nécessaire que, il est important que</i><br>🔸 <b>wil en wens</b>: <i>je veux que, j'aimerais que, je préfère que, j'exige que, je souhaite que</i></p>
<p>⚠️ <b>Let op, de grote regel:</b> de subjonctif komt alleen als er <b>twee verschillende onderwerpen</b> zijn. Is het onderwerp hetzelfde, dan gebruik je gewoon de <b>infinitief</b>:</p>
<p><i><u>Je</u> veux que <u>tu</u> partes.</i> (Ik wil dat jij vertrekt: twee personen → subjonctif.)<br><i><u>Je</u> veux partir.</i> (Ik wil vertrekken: één persoon → infinitief. Niet <s>je veux que je parte</s>.)</p>
<p>Hetzelfde bij <i>il faut</i>: <i>Il faut partir</i> (algemeen: men moet weg) tegenover <i>Il faut que <u>tu</u> partes</i> (jíj moet weg).</p>
<p>⚠️ <b>Uitzondering:</b> <i>espérer que</i> (hopen dat) lijkt een wens, maar krijgt de <b>gewone wijs</b> (indicatif), meestal de futur: <i>J'espère que tu <b>viendras</b>.</i> Waarom? Bij hopen ga je ervan uit dat het werkelijk gebeurt. <i>Souhaiter que</i> (wensen) krijgt wél subjonctif.</p>`,
        table: [["één onderwerp", "twee onderwerpen"], ["Je veux dormir.", "Je veux que tu dormes."], ["Il faut ranger.", "Il faut que vous rangiez."], ["J'aimerais venir.", "J'aimerais qu'elle vienne."]],
        ex: [["J'aimerais que tu fasses moins de bruit.", "Ik zou graag willen dat je minder lawaai maakt."], ["Il est important que chacun paie les charges.", "Het is belangrijk dat iedereen de vaste lasten betaalt."]] }
    ],
    dialogue: {
      t: "Réunion de colocation", place: "Bruxelles 🇧🇪",
      lines: [
        ["Élodie", "Bon, il faut qu'on parle. L'appartement est vraiment en désordre.", "Goed, we moeten praten. Het appartement is echt een rommel."],
        ["Daan", "C'est vrai. Il faut que quelqu'un fasse la vaisselle : elle est là depuis trois jours.", "Dat is waar. Iemand moet de afwas doen: die staat er al drie dagen."],
        ["Maxime", "Ce n'est pas moi ! Moi, j'ai sorti les poubelles lundi.", "Ik niet! Ik heb maandag het vuilnis buiten gezet."],
        ["Élodie", "Je ne veux pas qu'on se dispute. J'aimerais qu'on ait des règles claires.", "Ik wil niet dat we ruzie maken. Ik zou graag duidelijke regels willen."],
        ["Daan", "Bonne idée. Il faut que chacun sache ce qu'il doit faire.", "Goed idee. Iedereen moet weten wat hij moet doen."],
        ["Maxime", "D'accord. Mais je préfère que ce soit chacun son tour.", "Akkoord. Maar ik heb liever dat het ieder op zijn beurt is."],
        ["Élodie", "Alors cette semaine, Daan, il faut que tu passes l'aspirateur.", "Dan moet jij, Daan, deze week stofzuigen."],
        ["Daan", "Pas de problème. Et Maxime, j'aimerais que tu ranges tes chaussures dans l'entrée.", "Geen probleem. En Maxime, ik zou graag willen dat je je schoenen in de hal opruimt."],
        ["Maxime", "Ça va, ça va. Et il faut qu'Élodie aille faire les courses, alors !", "Oké, oké. En dan moet Élodie boodschappen gaan doen!"],
        ["Élodie", "Très bien. J'espère que ça marchera mieux comme ça.", "Prima. Ik hoop dat het zo beter gaat."]
      ],
      q: [
        { t: "mc", q: "Quel est le problème dans la colocation ?", o: ["L'appartement est en désordre", "Le loyer est trop cher", "Le voisin fait du bruit"] },
        { t: "mc", q: "Qu'est-ce qu'Élodie aimerait ?", o: ["Qu'ils aient des règles claires", "Que Maxime déménage", "Qu'ils achètent un aspirateur"] },
        { t: "mc", q: "Qu'est-ce que Daan doit faire cette semaine ?", o: ["Passer l'aspirateur", "Faire les courses", "Sortir les poubelles"] }
      ]
    },
    culture: { t: "La coloc en de «kot» in Brussel", html: `<p>Samenwonen met huisgenoten heet <b>la colocation</b>, kortweg <i>la coloc</i>. In dure steden als Parijs, Brussel en Genève doen ook werkende dertigers het. De film <i>L'Auberge espagnole</i> (2002) maakte het begrip beroemd: «une auberge espagnole» is sindsdien een plek waar alles door elkaar loopt.</p>
<p>In België woont een student op een <b>kot</b>, een woord dat het Belgisch Frans uit het Nederlands heeft geleend. Een huisgenoot is er een <i>cokoteur</i> of <i>cokoteuse</i>, en samenwonen heet <i>koter</i>.</p>
<p>🗑️ In Brussel moet het vuilnis in zakken van een verplichte kleur (wit, blauw, geel, oranje) op vaste dagen buiten. Vergeet je dat, dan riskeer je een boete: een klassieke bron van <i>coloc</i>-ruzies.</p>` },
    ex: [
      { t: "cloze", s: "Il faut que tu ___ ta chambre.", a: ["ranges"], o: ["ranges", "ranger", "rangeras"], nl: "Je moet je kamer opruimen.", tag: "fr-subj" },
      { t: "cloze", s: "Je veux que vous ___ avant midi.", a: ["finissiez"], o: ["finissiez", "finissez", "finirez"], nl: "Ik wil dat jullie vóór twaalf uur klaar zijn.", x: "Nous/vous in de subjonctif = de imparfait-vorm: -ions, -iez.", tag: "fr-subj" },
      { t: "cloze", s: "Il faut qu'il ___ le bus.", a: ["prenne"], o: ["prenne", "prend", "prende"], nl: "Hij moet de bus nemen.", x: "Stam van ils prennent: prenn- + e.", tag: "fr-subj" },
      { t: "cloze", s: "Il faut que tu ___ à l'heure.", a: ["sois"], o: ["sois", "es", "êtes"], nl: "Je moet op tijd zijn.", x: "Uitzondering: être → que tu sois.", tag: "fr-subj-irr" },
      { t: "cloze", s: "J'aimerais qu'on ___ des règles.", a: ["ait"], o: ["ait", "a", "aie"], nl: "Ik zou graag willen dat we regels hebben.", x: "Uitzondering: avoir → qu'il/on ait (met -t, zonder -e).", tag: "fr-subj-irr" },
      { t: "cloze", s: "Il faut que j'___ à la banque.", a: ["aille"], o: ["aille", "vais", "alle"], nl: "Ik moet naar de bank.", x: "Uitzondering: aller → que j'aille.", tag: "fr-subj-irr" },
      { t: "cloze", s: "Je veux qu'il ___ la vaisselle.", a: ["fasse"], o: ["fasse", "fait", "faise"], nl: "Ik wil dat hij de afwas doet.", x: "Uitzondering: faire → fass-.", tag: "fr-subj-irr" },
      { t: "cloze", s: "J'espère que tu ___ demain.", a: ["viendras"], o: ["viendras", "viennes", "venir"], nl: "Ik hoop dat je morgen komt.", x: "Uitzondering: espérer que krijgt geen subjonctif maar de gewone wijs (hier futur).", tag: "fr-subj" },
      { t: "mc", q: "Welke zin is goed?", o: ["Je veux partir.", "Je veux que je parte.", "Je veux que partir."], x: "Eén onderwerp: infinitief. De subjonctif komt alleen bij twee verschillende onderwerpen.", tag: "fr-subj" },
      { t: "mc", q: "Van welke vorm maak je de subjonctif-stam?", o: ["de ils-vorm van de tegenwoordige tijd", "de infinitief", "de nous-vorm van de tegenwoordige tijd"], tag: "fr-subj" },
      { t: "mc", q: "Welke vorm is de subjonctif van «pouvoir»?", o: ["que je puisse", "que je peuve", "que je pouvoie"], x: "Uitzondering: pouvoir → puiss-.", tag: "fr-subj-irr" },
      { t: "tr", nl: "Je moet de afwas doen.", a: ["Il faut que tu fasses la vaisselle.", "Tu dois faire la vaisselle."], tag: "fr-subj-irr" },
      { t: "tr", nl: "Ik wil dat je komt.", a: ["Je veux que tu viennes."], tag: "fr-subj" },
      { t: "tr", nl: "We moeten praten.", a: ["Il faut qu'on parle.", "Il faut que nous parlions.", "Nous devons parler.", "On doit parler."], tag: "fr-subj" },
      { t: "tr", nl: "Dat irriteert me.", a: ["Ça m'énerve."], tag: "fr-voc" },
      { t: "order", s: "J'aimerais que tu ranges tes chaussures dans l'entrée.", nl: "Ik zou graag willen dat je je schoenen in de hal opruimt.", tag: "fr-ordre" },
      { t: "match", p: [["être", "que je sois"], ["avoir", "que j'aie"], ["aller", "que j'aille"], ["faire", "que je fasse"], ["savoir", "que je sache"]], tag: "fr-subj-irr" }
    ],
    reading: {
      t: "Les dix règles de notre coloc", type: "Briefje op de koelkast",
      p: [
        ["Chers colocataires, pour que la vie ensemble soit agréable, voici quelques règles. D'abord, il faut que chacun fasse sa vaisselle le jour même. Personne n'aime trouver des assiettes sales le matin.", "Beste huisgenoten, om het samenleven prettig te houden, hier een paar regels. Ten eerste moet iedereen zijn afwas dezelfde dag doen. Niemand vindt het leuk om 's ochtends vuile borden te vinden."],
        ["Ensuite, il est important que nous partagions les tâches ménagères. Chaque semaine, il faut que quelqu'un passe l'aspirateur et que quelqu'un d'autre sorte les poubelles. Le tableau est sur le frigo.", "Verder is het belangrijk dat we de huishoudelijke taken delen. Elke week moet iemand stofzuigen en iemand anders het vuilnis buiten zetten. Het schema hangt op de koelkast."],
        ["Enfin, après vingt-deux heures, nous aimerions que tout le monde fasse moins de bruit. Si vous voulez inviter des amis, il faut que vous préveniez les autres. J'espère que tout le monde sera d'accord !", "Tot slot zouden we graag willen dat iedereen na tien uur 's avonds minder lawaai maakt. Als je vrienden wilt uitnodigen, moet je de anderen waarschuwen. Ik hoop dat iedereen het ermee eens is!"]
      ],
      gl: [["pour que", "opdat / zodat (+ subjonctif)"], ["le jour même", "dezelfde dag"], ["l'assiette", "het bord"], ["le tableau", "het schema / het bord"], ["prévenir", "waarschuwen / vooraf laten weten"]],
      q: [
        { t: "mc", q: "Quand faut-il faire sa vaisselle ?", o: ["Le jour même", "Une fois par semaine", "Le lendemain matin"] },
        { t: "mc", q: "Où se trouve le tableau des tâches ?", o: ["Sur le frigo", "Dans l'entrée", "Dans la salle de bains"] },
        { t: "mc", q: "Que faut-il faire si on veut inviter des amis ?", o: ["Prévenir les autres", "Payer les charges", "Faire les courses"] }
      ]
    },
    say: [["Il faut que tu fasses la vaisselle.", "Je moet de afwas doen."], ["J'aimerais qu'on ait des règles claires.", "Ik zou graag duidelijke regels willen."], ["Je ne veux pas qu'on se dispute.", "Ik wil niet dat we ruzie maken."], ["Il faut que j'y aille.", "Ik moet gaan."]],
    task: { nl: "Schrijf 4 of 5 huisregels voor huisgenoten of je gezin. Gebruik il faut que, je veux que of j'aimerais que.", model: "Il faut que chacun range ses affaires le soir. J'aimerais que nous fassions les courses ensemble le samedi. Il est important que tout le monde paie les charges avant le cinq du mois. Je ne veux pas que quelqu'un fume dans l'appartement. Et il faut qu'on soit gentils les uns avec les autres !" },
    scenario: { nl: "Huisvergadering in Brussel: het huis is een rommel en jullie verdelen de taken.", role: "You are Élodie, an organised but friendly flatmate in a shared flat in Brussels. Hold a flat meeting with the learner: say what annoys you (dishes, shoes in the hallway, noise), propose rules with il faut que / j'aimerais que + subjonctif, ask the learner what they want the others to do, and agree on who does what this week. Use tu and natural French.", goal: "Zeg twee dingen die er moeten gebeuren, één ding dat je van een huisgenoot wilt, en spreek een taakverdeling af." }
  });

  /* ───────────────────────── B1 · 2 ───────────────────────── */
  U({
    id: "fr-b1-02", level: "B1", icon: "💭", title: "Si j'étais riche…", nl: "Wat als…? Dromen en beleefd vragen",
    goals: ["Over denkbeeldige situaties praten", "De conditionnel présent maken", "Zinnen met si + imparfait bouwen", "Beleefd iets vragen of voorstellen"],
    vocab: [
      ["le rêve", "de droom"], ["rêver de", "dromen van"], ["le loto", "de lotto"], ["gagner au loto", "de lotto winnen"], ["la fortune", "het fortuin"], ["le million", "het miljoen"],
      ["dépenser", "uitgeven"], ["économiser", "sparen"], ["investir", "investeren"], ["prêter", "uitlenen"], ["emprunter", "lenen"], ["la dette", "de schuld"],
      ["démissionner", "ontslag nemen"], ["faire le tour du monde", "een wereldreis maken"], ["le bateau", "de boot"], ["le chalet", "het chalet"], ["l'île", "het eiland"], ["l'association", "de vereniging / het goede doel"],
      ["à ta place", "in jouw plaats"], ["au cas où", "voor het geval dat"], ["imaginer", "zich voorstellen"], ["sans hésiter", "zonder aarzelen"], ["ça dépend", "dat hangt ervan af"], ["raisonnable", "verstandig"],
      ["je voudrais", "ik zou graag willen"], ["j'aimerais", "ik zou graag"], ["tu devrais", "je zou moeten"], ["on pourrait", "we zouden kunnen"], ["pourriez-vous", "zou u kunnen"], ["ce serait génial", "dat zou geweldig zijn"]
    ],
    grammar: [
      { t: "Conditionnel présent: de vorm", es: "Le conditionnel présent : formation",
        html: `<p>De <b>conditionnel</b> is het Franse «zou». Je kunt hem al maken, want hij is een combinatie van twee dingen die je kent:</p>
<p><b>de stam van de futur</b> (infinitief, of de onregelmatige stam) + <b>de uitgangen van de imparfait</b> (<i>-ais, -ais, -ait, -ions, -iez, -aient</i>).</p>
<p><i>parler → je parler<b>ais</b></i> (ik zou praten) · <i>finir → tu finir<b>ais</b></i> · <i>prendre → il prendr<b>ait</b></i></p>
<p>⚠️ <b>Uitzondering:</b> de werkwoorden met een onregelmatige stam in de futur hebben diezelfde stam hier: <i>être → je <b>ser</b>ais</i>, <i>avoir → j'<b>aur</b>ais</i>, <i>aller → j'<b>ir</b>ais</i>, <i>faire → je <b>fer</b>ais</i>, <i>pouvoir → je <b>pourr</b>ais</i>, <i>vouloir → je <b>voudr</b>ais</i>, <i>devoir → je <b>devr</b>ais</i>, <i>venir → je <b>viendr</b>ais</i>, <i>voir → je <b>verr</b>ais</i>, <i>savoir → je <b>saur</b>ais</i>, <i>il faut → il <b>faudr</b>ait</i>. Wie de futur kent, kent ze dus al.</p>
<p>⚠️ <b>Let op de uitspraak en spelling:</b> <i>je parler<b>ai</b></i> (futur: ik zal praten) en <i>je parler<b>ais</b></i> (conditionnel: ik zou praten) klinken voor veel Fransen (bijna) hetzelfde. Alleen de <b>-s</b> maakt in schrift het verschil.</p>`,
        table: [["", "parler", "être", "avoir"], ["je / j'", "parlerais", "serais", "aurais"], ["tu", "parlerais", "serais", "aurais"], ["il / elle / on", "parlerait", "serait", "aurait"], ["nous", "parlerions", "serions", "aurions"], ["vous", "parleriez", "seriez", "auriez"], ["ils / elles", "parleraient", "seraient", "auraient"]],
        ex: [["J'achèterais un chalet à la montagne.", "Ik zou een chalet in de bergen kopen."], ["Ce serait génial !", "Dat zou geweldig zijn!"], ["Nous ferions le tour du monde.", "We zouden een wereldreis maken."]] },
      { t: "Si + imparfait → conditionnel", es: "L'hypothèse : si + imparfait",
        html: `<p>Voor iets wat <b>niet echt is</b> of <b>onwaarschijnlijk</b> («als ik rijk was, zou ik…»), gebruik je: <b>si + imparfait</b>, en in het andere deel de <b>conditionnel</b>.</p>
<p><i><b>Si</b> j'<b>étais</b> riche, j'<b>achèterais</b> un bateau.</i> (Als ik rijk was, zou ik een boot kopen.)</p>
<p>⚠️ <b>Let op, de klassieke fout van Nederlandstaligen:</b> wij zeggen vaak «Als ik rijk <u>zou zijn</u>, <u>zou</u> ik…» met twee keer «zou». In het Frans mag na <b>si nooit</b> een conditionnel (en ook geen futur): niet <s>si j'aurais</s>, niet <s>si je serais</s>. Het ezelsbruggetje van unit A2·8 geldt hier ook: <i>«Les si n'aiment pas les -rai(s)»</i>.</p>
<p><b>Waarom imparfait?</b> De imparfait drukt hier geen verleden uit, maar <b>afstand tot de werkelijkheid</b>, precies zoals het Nederlandse «was» in «als ik rijk was».</p>
<p>Vergelijk de twee soorten voorwaarden:</p>
<p>✅ <b>echt mogelijk:</b> <i>si + présent → futur</i>: <i>Si j'<b>ai</b> le temps, je <b>viendrai</b>.</i><br>💭 <b>denkbeeldig:</b> <i>si + imparfait → conditionnel</i>: <i>Si j'<b>avais</b> le temps, je <b>viendrais</b>.</i> (maar ik heb geen tijd)</p>
<p>De volgorde mag omgedraaid: <i>J'achèterais un bateau si j'étais riche.</i> En <i>si</i> wordt <i>s'</i> alleen vóór <i>il(s)</i>: <i>s'il pleuvait</i>, maar <i>si elle venait</i>.</p>`,
        table: [["si + imparfait", "conditionnel"], ["Si j'avais plus de temps,", "je lirais plus."], ["Si tu étais à ma place,", "qu'est-ce que tu ferais ?"], ["Si nous gagnions au loto,", "nous démissionnerions."], ["S'il faisait beau,", "on irait au lac."]],
        ex: [["Si je pouvais, je partirais demain.", "Als ik kon, zou ik morgen vertrekken."], ["Qu'est-ce que tu ferais si tu gagnais un million ?", "Wat zou je doen als je een miljoen won?"]] },
      { t: "Beleefd vragen, adviseren en voorstellen", es: "Le conditionnel de politesse",
        html: `<p>De conditionnel maakt alles <b>zachter en beleefder</b>, net als «zou» in het Nederlands:</p>
<p>🙏 <b>vragen:</b> <i><b>Pourriez</b>-vous m'aider ?</i> (Zou u me kunnen helpen?) · <i>Je <b>voudrais</b> un café.</i> · <i><b>Auriez</b>-vous l'heure ?</i> · <i>Est-ce que je <b>pourrais</b> essayer ?</i></p>
<p>💡 <b>advies:</b> <i>Tu <b>devrais</b> te reposer.</i> (Je zou moeten uitrusten.) · <i>À ta place, je <b>prendrais</b> le train.</i> · <i>Il <b>faudrait</b> réserver.</i></p>
<p>🤝 <b>voorstel:</b> <i>On <b>pourrait</b> aller au lac.</i> (We zouden naar het meer kunnen gaan.) · <i>Ça te <b>dirait</b> de venir ?</i> (Zou je zin hebben om te komen?)</p>
<p><b>Let op het verschil in toon:</b> <i>Je veux un café</i> klinkt in een café als een bevel, bijna onbeleefd. Zeg altijd <i>Je voudrais</i>. En <i>Vous pouvez… ?</i> is neutraal, <i>Pourriez-vous… ?</i> is echt beleefd.</p>`,
        table: [["direct", "beleefd"], ["Je veux un billet.", "Je voudrais un billet."], ["Vous pouvez répéter ?", "Pourriez-vous répéter ?"], ["Tu dois dormir.", "Tu devrais dormir."], ["On va au cinéma ?", "On pourrait aller au cinéma."]],
        ex: [["Pourriez-vous me dire où est la gare ?", "Zou u me kunnen zeggen waar het station is?"], ["Tu devrais économiser un peu.", "Je zou een beetje moeten sparen."]] }
    ],
    dialogue: {
      t: "Au bord du lac Léman", place: "Lausanne 🇨🇭",
      lines: [
        ["Mathieu", "Tu as vu ? Quelqu'un a gagné cent millions à l'Euro Millions !", "Heb je het gezien? Iemand heeft honderd miljoen gewonnen met EuroMillions!"],
        ["Sanne", "Cent millions… Qu'est-ce que tu ferais, toi, si tu gagnais ?", "Honderd miljoen… Wat zou jij doen als je won?"],
        ["Mathieu", "D'abord, je démissionnerais. Sans hésiter !", "Eerst zou ik ontslag nemen. Zonder aarzelen!"],
        ["Sanne", "Vraiment ? Moi, à ta place, je continuerais à travailler. Je m'ennuierais sinon.", "Echt? Ik zou in jouw plaats blijven werken. Anders zou ik me vervelen."],
        ["Mathieu", "Pas moi ! J'achèterais un chalet à Verbier et un bateau sur le lac.", "Ik niet! Ik zou een chalet in Verbier kopen en een boot op het meer."],
        ["Sanne", "Et tu donnerais de l'argent à ta famille ?", "En zou je geld aan je familie geven?"],
        ["Mathieu", "Bien sûr. Mes parents n'auraient plus de dettes. Et toi, tu ferais quoi ?", "Natuurlijk. Mijn ouders zouden geen schulden meer hebben. En jij, wat zou jij doen?"],
        ["Sanne", "Si j'avais autant d'argent, je ferais le tour du monde. Et je donnerais la moitié à des associations.", "Als ik zoveel geld had, zou ik een wereldreis maken. En ik zou de helft aan goede doelen geven."],
        ["Mathieu", "Tu es trop raisonnable ! Bon, on devrait peut-être acheter un billet, non ?", "Je bent te verstandig! Nou, we zouden misschien een lot moeten kopen, toch?"],
        ["Sanne", "Tu pourrais me prêter deux francs ? Je n'ai pas de monnaie.", "Zou je me twee frank kunnen lenen? Ik heb geen kleingeld."]
      ],
      q: [
        { t: "mc", q: "Que ferait Mathieu d'abord s'il gagnait ?", o: ["Il démissionnerait", "Il ferait le tour du monde", "Il achèterait une voiture"] },
        { t: "mc", q: "Que ferait Sanne à sa place ?", o: ["Elle continuerait à travailler", "Elle achèterait un chalet", "Elle ne ferait rien"] },
        { t: "mc", q: "Qu'est-ce que Sanne donnerait aux associations ?", o: ["La moitié de l'argent", "Tout l'argent", "Deux francs"] }
      ]
    },
    culture: { t: "Zwitserland: franken, septante en beleefdheid", html: `<p>In <b>Romandië</b>, het Franstalige westen van Zwitserland (Genève, Lausanne, Neuchâtel), betaal je met <b>Zwitserse franken</b> (CHF), niet met euro's. <b>Verbier</b> is een chic skidorp in het kanton Wallis; het <b>Lac Léman</b> (Meer van Genève) ligt tussen Zwitserland en Frankrijk.</p>
<p>Zwitsers Frans telt logisch: <i>septante</i> (70), <i>huitante</i> (80, in Vaud, Wallis en Fribourg) en <i>nonante</i> (90). Een mobieltje heet er <i>un natel</i> en «tot ziens» is vaak <i>adieu</i>, ook als begroeting.</p>
<p>🙏 Beleefdheid is belangrijk in de Franstalige wereld. Een vraag aan een onbekende begin je altijd met <i>Bonjour</i> en <i>Excusez-moi</i>, en je gebruikt de conditionnel: <i>«Pourriez-vous… ?»</i> Wie zonder <i>bonjour</i> iets vraagt, krijgt vaak een koel antwoord.</p>` },
    ex: [
      { t: "cloze", s: "Si j'étais riche, j'___ un bateau.", a: ["achèterais"], o: ["achèterais", "achèterai", "achetais"], nl: "Als ik rijk was, zou ik een boot kopen.", tag: "fr-cond" },
      { t: "cloze", s: "Ce ___ génial !", a: ["serait"], o: ["serait", "sera", "était"], nl: "Dat zou geweldig zijn!", x: "Uitzondering: être heeft de stam ser- (zoals in de futur).", tag: "fr-cond" },
      { t: "cloze", s: "Si j'___ le temps, je viendrais.", a: ["avais"], o: ["avais", "aurais", "ai"], nl: "Als ik tijd had, zou ik komen.", x: "Na si nooit een conditionnel: si + imparfait.", tag: "fr-si-imp" },
      { t: "cloze", s: "Qu'est-ce que tu ferais si tu ___ au loto ?", a: ["gagnais"], o: ["gagnais", "gagnerais", "gagnes"], nl: "Wat zou je doen als je de lotto won?", tag: "fr-si-imp" },
      { t: "cloze", s: "S'il faisait beau, on ___ au lac.", a: ["irait"], o: ["irait", "allait", "ira"], nl: "Als het mooi weer was, zouden we naar het meer gaan.", x: "Uitzondering: aller → ir-.", tag: "fr-cond" },
      { t: "cloze", s: "___-vous m'aider, s'il vous plaît ?", a: ["Pourriez"], o: ["Pourriez", "Pouvez", "Pourrez"], nl: "Zou u me kunnen helpen, alstublieft?", tag: "fr-politesse" },
      { t: "cloze", s: "Tu ___ te reposer un peu.", a: ["devrais"], o: ["devrais", "dois", "devras"], nl: "Je zou een beetje moeten uitrusten.", tag: "fr-politesse" },
      { t: "cloze", s: "À ta place, je ___ le train.", a: ["prendrais"], o: ["prendrais", "prenais", "prends"], nl: "In jouw plaats zou ik de trein nemen.", tag: "fr-cond" },
      { t: "mc", q: "Hoe maak je de conditionnel?", o: ["futur-stam + uitgangen van de imparfait", "imparfait-stam + uitgangen van de futur", "infinitief + avoir"], tag: "fr-cond" },
      { t: "mc", q: "Welke zin is goed?", o: ["Si j'avais de l'argent, je voyagerais.", "Si j'aurais de l'argent, je voyagerais.", "Si j'avais de l'argent, je voyageais."], x: "Anders dan «als ik zou hebben»: na si nooit conditionnel.", tag: "fr-si-imp" },
      { t: "mc", q: "Wat is het beleefdst in een café?", o: ["Je voudrais un café, s'il vous plaît.", "Je veux un café.", "Un café !"], tag: "fr-politesse" },
      { t: "tr", nl: "Ik zou graag een wereldreis maken.", a: ["J'aimerais faire le tour du monde.", "Je voudrais faire le tour du monde."], tag: "fr-cond" },
      { t: "tr", nl: "Wat zou jij doen in mijn plaats?", a: ["Qu'est-ce que tu ferais à ma place ?", "Que ferais-tu à ma place ?", "Tu ferais quoi à ma place ?"], tag: "fr-cond" },
      { t: "tr", nl: "We zouden naar de bioscoop kunnen gaan.", a: ["On pourrait aller au cinéma.", "Nous pourrions aller au cinéma."], tag: "fr-politesse" },
      { t: "tr", nl: "Als ik kon, zou ik morgen vertrekken.", a: ["Si je pouvais, je partirais demain."], tag: "fr-si-imp" },
      { t: "order", s: "Si j'avais autant d'argent, je ferais le tour du monde.", nl: "Als ik zoveel geld had, zou ik een wereldreis maken.", tag: "fr-ordre" },
      { t: "match", p: [["être", "je serais"], ["avoir", "j'aurais"], ["pouvoir", "je pourrais"], ["devoir", "je devrais"], ["vouloir", "je voudrais"]], tag: "fr-cond" }
    ],
    reading: {
      t: "Et si vous gagniez un million ?", type: "Straatinterview in een krant",
      p: [
        ["Nous avons posé la question à trois personnes à Lausanne. Léa, 24 ans, étudiante : « Si je gagnais un million, je paierais d'abord mes études. Ensuite, j'achèterais un petit appartement, parce que les loyers ici sont très chers. »", "We stelden de vraag aan drie mensen in Lausanne. Léa, 24 jaar, studente: 'Als ik een miljoen won, zou ik eerst mijn studie betalen. Daarna zou ik een klein appartement kopen, want de huren hier zijn erg hoog.'"],
        ["Bernard, 58 ans, boulanger : « Moi, je ne changerais rien. J'aime mon métier. Je me lèverais toujours à quatre heures ! Mais j'emmènerais ma femme en voyage : elle rêve de voir le Japon. »", "Bernard, 58 jaar, bakker: 'Ik zou niets veranderen. Ik houd van mijn vak. Ik zou nog steeds om vier uur opstaan! Maar ik zou mijn vrouw meenemen op reis: ze droomt ervan Japan te zien.'"],
        ["Amina, 35 ans, infirmière : « Je ne jouerais jamais au loto, donc je ne pourrais pas gagner ! Mais si quelqu'un me donnait un million, j'en garderais une partie pour mes enfants et je créerais une association pour les personnes âgées. »", "Amina, 35 jaar, verpleegkundige: 'Ik zou nooit meedoen aan de lotto, dus ik zou niet kunnen winnen! Maar als iemand me een miljoen gaf, zou ik een deel houden voor mijn kinderen en een vereniging voor ouderen oprichten.'"]
      ],
      gl: [["poser une question", "een vraag stellen"], ["emmener", "meenemen (een persoon)"], ["garder", "houden / bewaren"], ["créer", "oprichten"], ["les personnes âgées", "de ouderen"]],
      q: [
        { t: "mc", q: "Que ferait Léa d'abord ?", o: ["Elle paierait ses études", "Elle achèterait un bateau", "Elle partirait au Japon"] },
        { t: "mc", q: "Qu'est-ce que Bernard changerait ?", o: ["Rien, il aime son métier", "Il démissionnerait", "Il déménagerait"] },
        { t: "mc", q: "Pourquoi Amina ne pourrait-elle pas gagner ?", o: ["Elle ne joue jamais au loto", "Elle n'a pas d'argent", "Elle habite à l'étranger"] }
      ]
    },
    say: [["Si j'étais riche, je ferais le tour du monde.", "Als ik rijk was, zou ik een wereldreis maken."], ["Qu'est-ce que tu ferais à ma place ?", "Wat zou jij doen in mijn plaats?"], ["Pourriez-vous m'aider, s'il vous plaît ?", "Zou u me kunnen helpen, alstublieft?"], ["Tu devrais te reposer.", "Je zou moeten uitrusten."]],
    task: { nl: "Wat zou jij doen als je een miljoen won? Schrijf 4 of 5 zinnen met si + imparfait en de conditionnel.", model: "Si je gagnais un million, je ne démissionnerais pas tout de suite. D'abord, j'achèterais une maison avec un grand jardin. Ensuite, je partirais six mois en voyage avec ma famille. Je donnerais aussi de l'argent à une association. Et bien sûr, j'inviterais tous mes amis au restaurant !" },
    scenario: { nl: "Je zit met een Zwitserse vriend aan het meer en jullie fantaseren over de lotto.", role: "You are Mathieu, a playful friend from Lausanne, Switzerland. Sit by Lake Geneva with the learner and play 'what if': ask what they would do if they won a hundred million, if they could live anywhere, if they had one year off. Share your own answers (quit your job, chalet in Verbier, boat on the lake), tease them gently if they are too sensible, and give one piece of advice with tu devrais. Use tu, si + imparfait and the conditionnel.", goal: "Zeg drie dingen die je zou doen, vraag wat je vriend zou doen en vraag hem beleefd om iets." }
  });

  /* ───────────────────────── B1 · 3 ───────────────────────── */
  U({
    id: "fr-b1-03", level: "B1", icon: "🗣️", title: "Il m'a dit que…", nl: "Doorvertellen wat iemand zei",
    goals: ["Vertellen wat iemand gezegd of gevraagd heeft", "De plus-que-parfait maken en gebruiken", "Tijden aanpassen in de indirecte rede", "Een misverstand uitleggen"],
    vocab: [
      ["dire que", "zeggen dat"], ["demander si", "vragen of"], ["répondre que", "antwoorden dat"], ["expliquer que", "uitleggen dat"], ["annoncer", "aankondigen"], ["promettre", "beloven"],
      ["prévenir", "waarschuwen / laten weten"], ["raconter", "vertellen"], ["avouer", "bekennen"], ["mentir", "liegen"], ["le mensonge", "de leugen"], ["la vérité", "de waarheid"],
      ["le malentendu", "het misverstand"], ["la rumeur", "het gerucht"], ["la nouvelle", "het nieuws(bericht)"], ["le secret", "het geheim"], ["la surprise", "de verrassing"], ["le rendez-vous", "de afspraak"],
      ["se tromper", "zich vergissen"], ["s'excuser", "zich verontschuldigen"], ["avoir raison", "gelijk hebben"], ["avoir tort", "ongelijk hebben"], ["être au courant", "op de hoogte zijn"], ["déjà", "al"],
      ["la veille", "de dag ervoor"], ["le lendemain", "de dag erna"], ["ce jour-là", "die dag"], ["à l'avance", "van tevoren"], ["Je n'en reviens pas !", "Ik kan het niet geloven!"], ["Tu plaisantes ?", "Meen je dat?"]
    ],
    grammar: [
      { t: "De plus-que-parfait", es: "Le plus-que-parfait",
        html: `<p>De <b>plus-que-parfait</b> is de «voltooid verleden tijd»: iets wat <b>al gebeurd was</b> vóór iets anders in het verleden. Hij werkt precies zoals het Nederlandse «had / was + voltooid deelwoord».</p>
<p><b>Vorm:</b> <b>avoir of être in de imparfait</b> + voltooid deelwoord. De keuze tussen avoir en être en de regels voor aanpassing zijn dezelfde als bij de passé composé.</p>
<p><i>j'<b>avais</b> mangé</i> (ik had gegeten) · <i>elle <b>était</b> parti<b>e</b></i> (ze was vertrokken) · <i>nous nous <b>étions</b> levé<b>s</b></i> (we waren opgestaan)</p>
<p><b>Gebruik:</b> zet twee momenten in het verleden in de juiste volgorde. <i>Quand je suis arrivé, le train <b>était</b> déjà <b>parti</b>.</i> (Toen ik aankwam, was de trein al vertrokken.) Eerst vertrok de trein (plus-que-parfait), daarna kwam ik aan (passé composé).</p>
<p>Korte bijwoorden (<i>déjà, encore, jamais, bien</i>) staan weer tussen hulpwerkwoord en deelwoord: <i>Je n'avais <b>jamais</b> vu ça.</i></p>`,
        table: [["", "avoir + deelwoord", "être + deelwoord"], ["je / j'", "avais dit", "étais venu(e)"], ["tu", "avais dit", "étais venu(e)"], ["il / elle", "avait dit", "était venu / venue"], ["nous", "avions dit", "étions venu(e)s"], ["vous", "aviez dit", "étiez venu(e)(s)"], ["ils / elles", "avaient dit", "étaient venus / venues"]],
        ex: [["J'avais oublié mon rendez-vous.", "Ik was mijn afspraak vergeten."], ["Elle était déjà partie quand j'ai appelé.", "Ze was al vertrokken toen ik belde."], ["Nous n'avions rien compris.", "We hadden er niets van begrepen."]] },
      { t: "Indirecte rede: il dit que, il demande si", es: "Le discours indirect",
        html: `<p>Als je doorvertelt wat iemand zegt, verandert de zin op drie punten:</p>
<p>1️⃣ <b>Mededeling</b> → <b>que</b>: <i>« Je suis fatigué. » → Il dit <b>qu'</b>il est fatigué.</i> Het woordje <i>que</i> mag je nooit weglaten.</p>
<p>2️⃣ <b>Ja/nee-vraag</b> → <b>si</b> (= of): <i>« Tu viens ? » → Il demande <b>si</b> je viens.</i><br><b>Vraag met vraagwoord</b> → het vraagwoord blijft: <i>« Où habites-tu ? » → Il demande <b>où</b> j'habite.</i></p>
<p>⚠️ <b>Uitzondering:</b> <i>qu'est-ce que</i> wordt <b>ce que</b>, en <i>qu'est-ce qui</i> wordt <b>ce qui</b>: <i>« Qu'est-ce que tu fais ? » → Il demande <b>ce que</b> je fais.</i> Waarom? <i>Est-ce que</i> is een vraagvorm en verdwijnt in een bijzin; er blijft een «leeg» <i>que</i> over, dat het steuntje <i>ce</i> nodig heeft.</p>
<p>3️⃣ <b>Bevel</b> → <b>de + infinitief</b>: <i>« Attends ! » → Il me dit <b>d'</b>attendre.</i> <i>« Ne pars pas ! » → Il me demande <b>de ne pas</b> partir.</i></p>
<p><b>Let op de woordvolgorde:</b> in de indirecte vraag komt geen inversie en geen <i>est-ce que</i> meer: niet <s>il demande où habites-tu</s>, maar <i>il demande où <u>tu habites</u></i>. En vergeet niet de personen aan te passen (<i>je → il</i>, <i>ton → mon</i>).</p>`,
        table: [["direct", "indirect"], ["« J'ai faim. »", "Elle dit qu'elle a faim."], ["« Tu es libre ? »", "Il demande si je suis libre."], ["« Quand pars-tu ? »", "Il demande quand je pars."], ["« Qu'est-ce que tu veux ? »", "Il demande ce que je veux."], ["« Appelle-moi ! »", "Il me dit de l'appeler."]],
        ex: [["Elle dit qu'elle arrive dans dix minutes.", "Ze zegt dat ze over tien minuten komt."], ["Il veut savoir si tu es au courant.", "Hij wil weten of je op de hoogte bent."]] },
      { t: "Tijden aanpassen: il a dit que…", es: "La concordance des temps",
        html: `<p>Staat het inleidende werkwoord in de <b>verleden tijd</b> (<i>il <b>a dit</b> que, elle <b>a demandé</b> si</i>), dan schuiven de tijden in de bijzin één stap naar achteren. Het Nederlands doet dat ook («hij zei dat hij moe <u>was</u>»), dus je gevoel helpt.</p>
<p><b>présent → imparfait</b>: <i>« Je <u>suis</u> malade. » → Il a dit qu'il <b>était</b> malade.</i><br><b>passé composé → plus-que-parfait</b>: <i>« J'<u>ai oublié</u>. » → Il a dit qu'il <b>avait oublié</b>.</i><br><b>futur → conditionnel</b>: <i>« Je <u>viendrai</u>. » → Il a dit qu'il <b>viendrait</b>.</i></p>
<p>⚠️ <b>Let op de laatste:</b> hier is de conditionnel geen «zou» van onzekerheid, maar de <b>toekomst gezien vanuit het verleden</b>. Het Nederlands doet hetzelfde: «hij zei dat hij <u>zou</u> komen».</p>
<p>De imparfait en de plus-que-parfait blijven zoals ze zijn. Ook tijdwoorden schuiven mee: <i>demain → le lendemain</i>, <i>hier → la veille</i>, <i>aujourd'hui → ce jour-là</i>.</p>`,
        table: [["hij zei letterlijk", "il a dit que…"], ["« Je travaille. »", "… qu'il travaillait."], ["« J'ai fini. »", "… qu'il avait fini."], ["« Je t'appellerai demain. »", "… qu'il m'appellerait le lendemain."], ["« J'étais là. »", "… qu'il était là."]],
        ex: [["Elle m'a dit qu'elle avait réservé une table.", "Ze zei me dat ze een tafel had gereserveerd."], ["Il a promis qu'il viendrait.", "Hij heeft beloofd dat hij zou komen."]] }
    ],
    dialogue: {
      t: "Un malentendu", place: "Paris 🇫🇷",
      lines: [
        ["Camille", "Tom ! Où étais-tu hier soir ? Je t'ai attendu une heure devant le cinéma !", "Tom! Waar was je gisteravond? Ik heb een uur op je gewacht voor de bioscoop!"],
        ["Tom", "Quoi ? Mais Julien m'avait dit que tu avais annulé !", "Wat? Maar Julien had me gezegd dat je had afgezegd!"],
        ["Camille", "Moi ? Je n'ai jamais dit ça ! Je lui avais seulement demandé si tu étais au courant de l'heure.", "Ik? Dat heb ik nooit gezegd! Ik had hem alleen gevraagd of je wist hoe laat het was."],
        ["Tom", "Il m'a dit que tu étais malade et que tu resterais chez toi.", "Hij zei dat je ziek was en dat je thuis zou blijven."],
        ["Camille", "N'importe quoi ! J'avais dit que j'avais été malade la semaine dernière.", "Onzin! Ik had gezegd dat ik vorige week ziek was geweest."],
        ["Tom", "Je n'en reviens pas. Je suis vraiment désolé. J'avais même acheté les billets à l'avance.", "Ik kan het niet geloven. Het spijt me echt. Ik had de kaartjes zelfs van tevoren gekocht."],
        ["Camille", "Et moi, je me suis demandé ce que j'avais fait de mal.", "En ik vroeg me af wat ik verkeerd had gedaan."],
        ["Tom", "Rien du tout ! C'est un malentendu. Je vais demander à Julien pourquoi il a raconté ça.", "Helemaal niets! Het is een misverstand. Ik ga Julien vragen waarom hij dat verteld heeft."],
        ["Camille", "Dis-lui de mieux écouter la prochaine fois ! Bon, on y va ce soir ?", "Zeg hem dat hij de volgende keer beter moet luisteren! Nou, gaan we vanavond?"],
        ["Tom", "Avec plaisir. Et cette fois, je te promets que je serai là.", "Graag. En deze keer beloof ik je dat ik er zal zijn."]
      ],
      q: [
        { t: "mc", q: "Pourquoi Tom n'est-il pas venu au cinéma ?", o: ["Julien lui avait dit que Camille avait annulé", "Il était malade", "Il avait oublié les billets"] },
        { t: "mc", q: "Qu'est-ce que Camille avait vraiment dit à Julien ?", o: ["Qu'elle avait été malade la semaine dernière", "Qu'elle resterait chez elle", "Qu'elle n'aimait pas le film"] },
        { t: "mc", q: "Qu'est-ce que Tom avait fait à l'avance ?", o: ["Il avait acheté les billets", "Il avait réservé un restaurant", "Il avait appelé Camille"] }
      ]
    },
    culture: { t: "«Le téléphone arabe» en Franse stopwoordjes", html: `<p>Het kinderspel waarbij een zin van oor tot oor wordt doorgefluisterd en steeds verandert, heet in het Frans <b>le téléphone arabe</b> (letterlijk «de Arabische telefoon»; in Québec en steeds vaker in Frankrijk zegt men neutraler <i>le téléphone sans fil</i>). De uitdrukking gebruik je ook voor geruchten: <i>«Je l'ai appris par le téléphone arabe.»</i></p>
<p>Als Fransen iets navertellen, hoor je veel kleine reactiewoorden: <i>N'importe quoi !</i> (onzin!), <i>Tu plaisantes ?</i> (meen je dat?), <i>Ah bon ?</i> (o ja?), <i>C'est pas vrai !</i> (dat meen je niet!), <i>Je n'en reviens pas !</i> (ik kan het niet geloven).</p>
<p>📰 In nieuwsberichten gebruikt het Frans de <b>conditionnel</b> voor onbevestigd nieuws: <i>«Le ministre <b>aurait</b> démissionné»</i> = de minister zou zijn afgetreden (naar verluidt).</p>` },
    ex: [
      { t: "cloze", s: "Quand je suis arrivé, le train ___ déjà parti.", a: ["était"], o: ["était", "avait", "est"], nl: "Toen ik aankwam, was de trein al vertrokken.", x: "Partir krijgt être, ook in de plus-que-parfait.", tag: "fr-pqp" },
      { t: "cloze", s: "J'___ oublié mon rendez-vous.", a: ["avais"], o: ["avais", "étais", "ai"], nl: "Ik was mijn afspraak vergeten.", tag: "fr-pqp" },
      { t: "cloze", s: "Elle dit ___ elle est fatiguée.", a: ["qu'"], o: ["qu'", "si", "ce que"], nl: "Ze zegt dat ze moe is.", tag: "fr-indirect" },
      { t: "cloze", s: "Il demande ___ tu viens ce soir.", a: ["si"], o: ["si", "que", "est-ce que"], nl: "Hij vraagt of je vanavond komt.", x: "Ja/nee-vraag in de indirecte rede: si (= of).", tag: "fr-indirect" },
      { t: "cloze", s: "Elle demande ___ tu fais.", a: ["ce que"], o: ["ce que", "qu'est-ce que", "que"], nl: "Ze vraagt wat je doet.", x: "Uitzondering: qu'est-ce que wordt ce que in de indirecte rede.", tag: "fr-indirect" },
      { t: "cloze", s: "Il a dit qu'il ___ malade.", a: ["était"], o: ["était", "est", "sera"], nl: "Hij zei dat hij ziek was.", x: "Na il a dit: présent → imparfait.", tag: "fr-indirect" },
      { t: "cloze", s: "Elle a promis qu'elle ___.", a: ["viendrait"], o: ["viendrait", "viendra", "venait"], nl: "Ze heeft beloofd dat ze zou komen.", x: "Na een verleden tijd: futur → conditionnel.", tag: "fr-indirect" },
      { t: "cloze", s: "Il me dit ___ attendre.", a: ["d'"], o: ["d'", "que", "à"], nl: "Hij zegt me dat ik moet wachten.", x: "Een bevel wordt de + infinitief.", tag: "fr-indirect" },
      { t: "mc", q: "Hoe maak je de plus-que-parfait?", o: ["avoir/être in de imparfait + deelwoord", "avoir/être in de futur + deelwoord", "imparfait + infinitief"], tag: "fr-pqp" },
      { t: "mc", q: "«Où habites-tu ?» Wat wordt dat?", o: ["Il demande où j'habite.", "Il demande où habites-tu.", "Il demande où est-ce que j'habite."], x: "In de indirecte vraag: geen inversie, geen est-ce que.", tag: "fr-indirect" },
      { t: "mc", q: "«J'ai fini.» → Il a dit qu'il…", o: ["avait fini.", "a fini.", "finissait."], x: "Passé composé → plus-que-parfait.", tag: "fr-indirect" },
      { t: "tr", nl: "Ze zei dat ze ziek was.", a: ["Elle a dit qu'elle était malade."], tag: "fr-indirect" },
      { t: "tr", nl: "Ik had de kaartjes al gekocht.", a: ["J'avais déjà acheté les billets."], tag: "fr-pqp" },
      { t: "tr", nl: "Het is een misverstand.", a: ["C'est un malentendu."], tag: "fr-voc" },
      { t: "tr", nl: "Hij vraagt of je op de hoogte bent.", a: ["Il demande si tu es au courant.", "Il demande si vous êtes au courant."], tag: "fr-indirect" },
      { t: "order", s: "Julien m'avait dit que tu avais annulé.", nl: "Julien had me gezegd dat je had afgezegd.", tag: "fr-ordre" },
      { t: "match", p: [["le mensonge", "de leugen"], ["la vérité", "de waarheid"], ["la rumeur", "het gerucht"], ["la veille", "de dag ervoor"], ["le lendemain", "de dag erna"]], tag: "fr-voc" }
    ],
    reading: {
      t: "La surprise ratée", type: "E-mail aan een vriendin",
      p: [
        ["Chère Inès, il faut que je te raconte ce qui s'est passé samedi. Nous avions organisé une fête surprise pour les quarante ans de Paul. Tout le monde avait promis de garder le secret.", "Lieve Inès, ik moet je vertellen wat er zaterdag gebeurd is. We hadden een verrassingsfeest georganiseerd voor Pauls veertigste verjaardag. Iedereen had beloofd het geheim te bewaren."],
        ["Vendredi, sa mère lui a téléphoné. Elle lui a demandé s'il avait déjà choisi sa chemise pour la fête ! Paul a répondu qu'il ne comprenait pas. Alors elle a dit qu'elle s'était trompée et qu'elle parlait d'une autre fête. Bien sûr, il n'a rien cru.", "Vrijdag belde zijn moeder hem. Ze vroeg hem of hij zijn overhemd voor het feest al had uitgekozen! Paul antwoordde dat hij het niet begreep. Toen zei ze dat ze zich had vergist en dat ze het over een ander feest had. Natuurlijk geloofde hij er niets van."],
        ["Samedi soir, quand il est entré, il a fait semblant d'être surpris. Plus tard, il m'a avoué qu'il savait tout depuis la veille. Mais il m'a dit que c'était quand même la plus belle fête de sa vie !", "Zaterdagavond, toen hij binnenkwam, deed hij alsof hij verrast was. Later bekende hij me dat hij alles sinds de dag ervoor wist. Maar hij zei me dat het toch het mooiste feest van zijn leven was!"]
      ],
      gl: [["raté", "mislukt"], ["garder le secret", "het geheim bewaren"], ["croire", "geloven"], ["faire semblant de", "doen alsof"], ["quand même", "toch"]],
      q: [
        { t: "mc", q: "Qu'est-ce qu'ils avaient organisé ?", o: ["Une fête surprise", "Un voyage", "Un dîner au restaurant"] },
        { t: "mc", q: "Qui a révélé le secret ?", o: ["La mère de Paul", "Inès", "Un collègue"] },
        { t: "mc", q: "Qu'est-ce que Paul a avoué plus tard ?", o: ["Qu'il savait tout depuis la veille", "Qu'il n'aimait pas les fêtes", "Qu'il avait menti sur son âge"] }
      ]
    },
    say: [["Il m'a dit qu'il viendrait.", "Hij zei me dat hij zou komen."], ["Elle m'a demandé si j'étais libre.", "Ze vroeg me of ik vrij was."], ["C'est un malentendu.", "Het is een misverstand."], ["Je n'en reviens pas !", "Ik kan het niet geloven!"]],
    task: { nl: "Vertel in 5 zinnen een gesprek na dat je onlangs had: wat zei of vroeg de ander, en wat antwoordde jij?", model: "Hier, ma voisine m'a demandé si je pouvais garder son chat pendant les vacances. Je lui ai répondu que j'étais d'accord. Elle m'a expliqué qu'elle partirait deux semaines en Italie. Elle a dit que le chat avait déjà mangé et qu'il était très calme. Je lui ai promis que je viendrais tous les jours." },
    scenario: { nl: "Een vriendin in Parijs is boos omdat je niet kwam opdagen. Leg het misverstand uit.", role: "You are Camille, a friend in Paris who waited an hour in front of the cinema last night. You are annoyed at first. Ask the learner where they were, what exactly Julien had told them, and why they did not call. Correct the record (you only said you had been ill last week), accept their apology and suggest going tonight instead. Use tu and natural French with indirect speech and the plus-que-parfait.", goal: "Vertel wat een ander je had gezegd, bied je excuses aan en maak een nieuwe afspraak." }
  });

  /* ───────────────────────── B1 · 4 ───────────────────────── */
  U({
    id: "fr-b1-04", level: "B1", icon: "📦", title: "Je te le prête", nl: "Lenen, geven en teruggeven",
    goals: ["Iets lenen, uitlenen en terugvragen", "Twee voornaamwoorden in één zin combineren", "De gebiedende wijs met voornaamwoorden gebruiken", "Hulp vragen en aanbieden bij een verhuizing"],
    vocab: [
      ["le déménagement", "de verhuizing"], ["le carton", "de (verhuis)doos"], ["le camion", "de vrachtwagen / verhuiswagen"], ["le meuble", "het meubel"], ["l'outil", "het gereedschap"], ["la perceuse", "de boormachine"],
      ["le marteau", "de hamer"], ["l'échelle", "de ladder"], ["le tournevis", "de schroevendraaier"], ["l'étagère", "de (boeken)plank"], ["le canapé", "de bank"], ["lourd / lourde", "zwaar"],
      ["léger / légère", "licht"], ["fragile", "breekbaar"], ["prêter", "uitlenen"], ["emprunter", "lenen (van iemand)"], ["rendre", "teruggeven"], ["apporter", "(mee)brengen"],
      ["porter", "dragen"], ["poser", "neerzetten"], ["monter", "in elkaar zetten / naar boven brengen"], ["casser", "breken"], ["réparer", "repareren"], ["donner un coup de main", "een handje helpen"],
      ["avoir besoin de", "nodig hebben"], ["Fais attention !", "Pas op!"], ["Tiens !", "Hier! / Alsjeblieft!"], ["Ça ne me dérange pas.", "Dat vind ik niet erg."], ["Je te revaudrai ça.", "Ik sta bij je in het krijt."], ["Pas de souci.", "Geen probleem."]
    ],
    grammar: [
      { t: "Twee voornaamwoorden: de volgorde", es: "Les doubles pronoms",
        html: `<p>Soms wil je twee dingen tegelijk vervangen: <i>Je prête <u>la perceuse</u> <u>à Paul</u> → Je <b>la lui</b> prête.</i> (Ik leen hem haar uit.) Beide voornaamwoorden staan vóór het werkwoord, in een <b>vaste volgorde</b>:</p>
<p><b>me / te / se / nous / vous</b> → <b>le / la / les</b> → <b>lui / leur</b> → <b>y</b> → <b>en</b></p>
<p>In de praktijk zijn er twee combinaties die je steeds nodig hebt:</p>
<p>1️⃣ <b>me, te, nous, vous + le, la, les</b>: de persoon eerst. <i>Il <b>me le</b> donne.</i> (Hij geeft het mij.) <i>Je <b>te la</b> prête.</i> <i>Elle <b>nous les</b> apporte.</i></p>
<p>2️⃣ <b>le, la, les + lui, leur</b>: het ding eerst. <i>Je <b>le lui</b> donne.</i> (Ik geef het hem/haar.) <i>Nous <b>les leur</b> rendons.</i></p>
<p>⚠️ <b>Let op, dit voelt als een uitzondering:</b> bij <i>me/te/nous/vous</i> staat de persoon vooraan, bij <i>lui/leur</i> juist achteraan. <b>Waarom?</b> Het Frans zet de derde persoon met <i>l-</i> in alfabetische volgorde: <b>l</b>e/<b>l</b>a/<b>l</b>es komt vóór <b>l</b>ui/<b>l</b>eur. Ezelsbruggetje: <i>«le lui»</i> en <i>«la leur»</i>, altijd kort vóór lang.</p>
<p><b>En</b> staat altijd als laatste: <i>Je <b>lui en</b> donne deux.</i> (Ik geef hem er twee.) <i>Il <b>m'en</b> a parlé.</i> <i>Il <b>y en</b> a.</i></p>
<p>Ontkenning en samengestelde tijden veranderen niets aan de volgorde: <i>Je <b>ne te le</b> prête <b>pas</b>.</i> <i>Je <b>le lui</b> ai rendu.</i> <i>Je vais <b>te les</b> apporter.</i></p>`,
        table: [["zin", "met twee voornaamwoorden", "vertaling"], ["Tu me donnes le marteau.", "Tu me le donnes.", "Je geeft hem mij."], ["Je te prête ma voiture.", "Je te la prête.", "Ik leen hem je uit."], ["Je rends l'échelle à Léa.", "Je la lui rends.", "Ik geef hem haar terug."], ["Il donne les clés aux voisins.", "Il les leur donne.", "Hij geeft ze hun."], ["Je donne des cartons à Paul.", "Je lui en donne.", "Ik geef hem er een paar."]],
        ex: [["Ta perceuse ? Je te la rends demain.", "Je boormachine? Die geef ik je morgen terug."], ["Les cartons, je les lui ai déjà apportés.", "De dozen heb ik hem al gebracht."]] },
      { t: "Gebiedende wijs met voornaamwoorden", es: "L'impératif avec pronoms",
        html: `<p>⚠️ <b>Uitzondering op alles hierboven:</b> bij een <b>bevestigend bevel</b> staan de voornaamwoorden <b>achter</b> het werkwoord, met <b>streepjes</b>, en de volgorde is altijd: <b>ding – persoon</b>.</p>
<p><i>Donne-<b>le-moi</b> !</i> (Geef het mij!) · <i>Prête-<b>la-lui</b> !</i> · <i>Apportez-<b>les-nous</b> !</i> · <i>Donne-<b>m'en</b> !</i> (Geef me er wat van!)</p>
<p>⚠️ <b>Nog een uitzondering:</b> achter het werkwoord worden <i>me</i> en <i>te</i> → <b>moi</b> en <b>toi</b>: <i>Aide-<b>moi</b> ! Assieds-<b>toi</b> !</i> Waarom? <i>Me</i> en <i>te</i> zijn te zwak om de klemtoon aan het eind van een zin te dragen; <i>moi</i> en <i>toi</i> zijn de beklemtoonde vormen. Vóór <i>en</i> blijft het <i>m'</i> / <i>t'</i>: <i>Donne-m'en.</i></p>
<p>Bij een <b>verbod</b> (ontkennend bevel) geldt weer de gewone volgorde vóór het werkwoord: <i><b>Ne me le</b> donne <b>pas</b> !</i> <i><b>Ne la lui</b> prête <b>pas</b> !</i></p>
<p>⚠️ <b>Spellinguitzondering:</b> de tu-vorm van -er-werkwoorden heeft in de gebiedende wijs geen -s (<i>Donne ! Va !</i>), maar krijgt die terug vóór <i>y</i> en <i>en</i>, voor de uitspraak: <i>Donne<b>s</b>-en ! Va<b>s</b>-y !</i></p>`,
        table: [["bevestigend", "ontkennend"], ["Donne-le-moi !", "Ne me le donne pas !"], ["Rends-la-lui !", "Ne la lui rends pas !"], ["Montrez-les-nous !", "Ne nous les montrez pas !"], ["Vas-y !", "N'y va pas !"]],
        ex: [["Passe-moi le tournevis, s'il te plaît.", "Geef me de schroevendraaier even aan, alsjeblieft."], ["Ce carton est fragile : pose-le doucement !", "Deze doos is breekbaar: zet hem voorzichtig neer!"]] }
    ],
    dialogue: {
      t: "Le jour du déménagement", place: "Québec 🇨🇦",
      lines: [
        ["Félix", "Salut Daan ! Merci d'être venu me donner un coup de main.", "Hoi Daan! Bedankt dat je me een handje komt helpen."],
        ["Daan", "Pas de souci. J'ai apporté ma perceuse. Tu en as besoin ?", "Geen probleem. Ik heb mijn boormachine meegenomen. Heb je die nodig?"],
        ["Félix", "Oui ! Tu peux me la prêter jusqu'à dimanche ?", "Ja! Kun je die tot zondag aan me uitlenen?"],
        ["Daan", "Bien sûr, je te la laisse. Et l'échelle de ta voisine, tu la lui as rendue ?", "Natuurlijk, ik laat hem bij je. En de ladder van je buurvrouw, heb je die teruggegeven?"],
        ["Félix", "Pas encore. Je la lui rendrai ce soir. Tiens, prends ce carton, mais fais attention : c'est fragile !", "Nog niet. Ik geef hem vanavond terug. Hier, neem deze doos, maar pas op: hij is breekbaar!"],
        ["Daan", "Je le pose où ?", "Waar zet ik hem neer?"],
        ["Félix", "Pose-le dans la cuisine. Et les clés du camion, donne-les-moi, je vais le déplacer.", "Zet hem in de keuken. En de sleutels van de verhuiswagen, geef die maar aan mij, ik ga hem verzetten."],
        ["Daan", "Les voilà. Dis, il te reste des cartons vides ? Ma sœur déménage le mois prochain.", "Alsjeblieft. Zeg, heb je nog lege dozen over? Mijn zus verhuist volgende maand."],
        ["Félix", "J'en ai plein ! Je lui en donnerai une vingtaine.", "Ik heb er een heleboel! Ik geef haar er een stuk of twintig."],
        ["Daan", "Super, je le lui dirai. Bon, ce canapé, on le monte à deux ?", "Top, ik zal het haar zeggen. Goed, die bank, tillen we die met z'n tweeën naar boven?"],
        ["Félix", "Vas-y, prends ce côté-là. Je te revaudrai ça, promis : je t'invite pour une poutine !", "Kom op, neem jij die kant. Ik sta bij je in het krijt, beloofd: ik trakteer je op een poutine!"]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce que Daan prête à Félix ?", o: ["Sa perceuse", "Son échelle", "Son camion"] },
        { t: "mc", q: "Quand Félix rendra-t-il l'échelle à sa voisine ?", o: ["Ce soir", "Dimanche", "Le mois prochain"] },
        { t: "mc", q: "Que donnera Félix à la sœur de Daan ?", o: ["Une vingtaine de cartons", "Un canapé", "Les clés du camion"] }
      ]
    },
    culture: { t: "1 juli in Québec: iedereen verhuist", html: `<p>In <b>Québec</b> lopen bijna alle huurcontracten af op <b>30 juni</b>. Het gevolg: op <b>1 juli</b>, de Canadese nationale feestdag, verhuizen honderdduizenden mensen tegelijk. De dag heet <i>la journée nationale du déménagement</i>. Verhuiswagens zijn maanden van tevoren volgeboekt en op de stoep staan bergen afgedankte meubels.</p>
<p>Vrienden helpen elkaar en worden traditioneel betaald in <b>pizza en bier</b>, of in <b>poutine</b>: friet met kaaskorrels (<i>fromage en grains</i>) en bruine jus, hét gerecht van Québec.</p>
<p>🗣️ Het Québécois heeft eigen woorden: een vrachtwagen is in de spreektaal <i>un truck</i>, en in Québec wordt in informele situaties veel sneller <b>tu</b> gezegd dan in Frankrijk, ook tegen onbekenden.</p>` },
    ex: [
      { t: "cloze", s: "Ta perceuse ? Je ___ rends demain.", a: ["te la"], o: ["te la", "la te", "te le"], nl: "Je boormachine? Die geef ik je morgen terug.", x: "Me/te/nous/vous komt vóór le/la/les.", tag: "fr-double" },
      { t: "cloze", s: "Le marteau ? Il ___ donne.", a: ["me le"], o: ["me le", "le me", "moi le"], nl: "De hamer? Hij geeft hem mij.", tag: "fr-double" },
      { t: "cloze", s: "L'échelle de Léa ? Je ___ rends ce soir.", a: ["la lui"], o: ["la lui", "lui la", "le lui"], nl: "De ladder van Léa? Ik geef hem haar vanavond terug.", x: "Uitzondering in de volgorde: le/la/les komt vóór lui/leur.", tag: "fr-double" },
      { t: "cloze", s: "Les clés ? Nous ___ donnons.", a: ["les leur"], o: ["les leur", "leur les", "les lui"], nl: "De sleutels? We geven ze hun.", tag: "fr-double" },
      { t: "cloze", s: "Des cartons ? Je lui ___ donne dix.", a: ["en"], o: ["en", "les", "y"], nl: "Dozen? Ik geef hem er tien.", x: "En staat altijd als laatste.", tag: "fr-double" },
      { t: "cloze", s: "Les clés ! Donne-les-___ !", a: ["moi"], o: ["moi", "me", "m'"], nl: "De sleutels! Geef ze aan mij!", x: "Uitzondering: achter het werkwoord wordt me → moi.", tag: "fr-imp-pron" },
      { t: "cloze", s: "Ce carton est fragile : pose-___ doucement.", a: ["le"], o: ["le", "lui", "en"], nl: "Deze doos is breekbaar: zet hem voorzichtig neer.", tag: "fr-imp-pron" },
      { t: "cloze", s: "Ne ___ donne pas !", a: ["me le"], o: ["me le", "le moi", "le me"], nl: "Geef het me niet!", x: "Bij een verbod geldt weer de gewone volgorde vóór het werkwoord.", tag: "fr-imp-pron" },
      { t: "mc", q: "«Je donne le livre à Marie.» Met twee voornaamwoorden:", o: ["Je le lui donne.", "Je lui le donne.", "Je la lui donne."], x: "Ding (le) vóór lui.", tag: "fr-double" },
      { t: "mc", q: "Hoe zeg je «Geef het hem!»?", o: ["Donne-le-lui !", "Donne-lui-le !", "Le lui donne !"], x: "Bevestigend bevel: achter het werkwoord, ding eerst.", tag: "fr-imp-pron" },
      { t: "mc", q: "Welke vorm is goed?", o: ["Vas-y !", "Va-y !", "Vas y !"], x: "Spellinguitzondering: vóór y en en krijgt de tu-vorm een -s terug.", tag: "fr-imp-pron" },
      { t: "tr", nl: "Ik leen hem je uit. (de auto)", a: ["Je te la prête."], tag: "fr-double" },
      { t: "tr", nl: "Geef het mij! (het boek)", a: ["Donne-le-moi !", "Donnez-le-moi !"], tag: "fr-imp-pron" },
      { t: "tr", nl: "Ik heb het hem al gezegd.", a: ["Je le lui ai déjà dit."], tag: "fr-double" },
      { t: "tr", nl: "Kun je me een handje helpen?", a: ["Tu peux me donner un coup de main ?", "Est-ce que tu peux me donner un coup de main ?", "Peux-tu me donner un coup de main ?"], tag: "fr-voc" },
      { t: "order", s: "L'échelle, je la lui rendrai ce soir.", nl: "De ladder geef ik haar vanavond terug.", tag: "fr-ordre" },
      { t: "match", p: [["prêter", "uitlenen"], ["emprunter", "lenen"], ["rendre", "teruggeven"], ["porter", "dragen"], ["casser", "breken"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Petite annonce entre voisins", type: "Bericht in een buurtgroep",
      p: [
        ["Bonjour à tous ! Je déménage le premier juillet, comme tout le monde. J'ai besoin d'une échelle et d'une perceuse pour le week-end. Si quelqu'un en a une, pourrait-il me la prêter ? Je la lui rendrai lundi matin, promis.", "Hallo allemaal! Ik verhuis op 1 juli, zoals iedereen. Ik heb een ladder en een boormachine nodig voor het weekend. Als iemand er een heeft, zou die hem aan mij kunnen uitlenen? Ik geef hem maandagochtend terug, beloofd."],
        ["En échange, j'ai beaucoup de choses à donner : une étagère blanche, deux chaises et un vieux canapé confortable. Si vous les voulez, dites-le-moi vite ! Je vous les apporterai avec plaisir, si vous habitez dans le quartier.", "In ruil heb ik veel weg te geven: een witte boekenplank, twee stoelen en een oude, comfortabele bank. Als u ze wilt hebben, laat het me snel weten! Ik breng ze met plezier naar u toe, als u in de wijk woont."],
        ["J'ai aussi une trentaine de cartons vides. Mon voisin m'en a demandé dix, je les lui ai déjà donnés. Il en reste vingt : venez les chercher samedi. Merci et bon déménagement à tous !", "Ik heb ook een stuk of dertig lege dozen. Mijn buurman vroeg er tien, die heb ik hem al gegeven. Er zijn er nog twintig over: kom ze zaterdag halen. Bedankt en succes met de verhuizing allemaal!"]
      ],
      gl: [["la petite annonce", "de kleine advertentie"], ["en échange", "in ruil"], ["confortable", "comfortabel"], ["une trentaine", "een stuk of dertig"], ["il en reste", "er zijn er nog … over"]],
      q: [
        { t: "mc", q: "De quoi a-t-il besoin pour le week-end ?", o: ["D'une échelle et d'une perceuse", "D'un camion", "De cartons"] },
        { t: "mc", q: "Qu'est-ce qu'il veut donner ?", o: ["Une étagère, deux chaises et un canapé", "Une perceuse", "Un lit et une table"] },
        { t: "mc", q: "Combien de cartons reste-t-il ?", o: ["Vingt", "Dix", "Trente"] }
      ]
    },
    say: [["Tu peux me la prêter ?", "Kun je hem aan me uitlenen?"], ["Je te le rends demain.", "Ik geef het je morgen terug."], ["Donne-le-moi, s'il te plaît.", "Geef het me, alsjeblieft."], ["Je le lui ai déjà dit.", "Ik heb het hem al gezegd."]],
    task: { nl: "Schrijf een berichtje (4 of 5 zinnen) aan een buur of vriend: je wilt iets lenen, zegt wanneer je het teruggeeft en biedt iets aan in ruil.", model: "Salut Léa ! J'ai une petite question : tu as toujours ta grande échelle ? Est-ce que tu pourrais me la prêter samedi ? Je te la rendrai dimanche soir. En échange, j'ai des tomates du jardin : je t'en apporterai un kilo. Merci d'avance !" },
    scenario: { nl: "Je helpt een vriend in Québec met verhuizen: dozen, gereedschap en een zware bank.", role: "You are Félix, a cheerful friend in Québec City moving house on 1 July. The learner came to help. Ask to borrow their tools, tell them where to put boxes (use imperatives with pronouns: pose-le, donne-les-moi), ask whether they returned something to a neighbour, offer them spare boxes, and promise poutine afterwards. Use tu and natural French with double pronouns (je te la rends, je lui en donne).", goal: "Leen iets uit met de juiste voornaamwoorden, vraag waar iets heen moet en geef één opdracht met een voornaamwoord." }
  });

  /* ───────────────────────── B1 · 5 ───────────────────────── */
  U({
    id: "fr-b1-05", level: "B1", icon: "📰", title: "On dit que…", nl: "Nieuws en feiten: wat er gedaan wordt",
    goals: ["Nieuwsberichten en feiten begrijpen en navertellen", "De lijdende vorm maken", "On gebruiken waar het Nederlands «er wordt» zegt", "Over uitvindingen, geschiedenis en gebeurtenissen praten"],
    vocab: [
      ["les informations", "het nieuws"], ["le journal", "de krant / het journaal"], ["l'article", "het artikel"], ["le titre", "de (kranten)kop"], ["le / la journaliste", "de journalist"], ["l'événement", "de gebeurtenis"],
      ["annoncer", "aankondigen"], ["publier", "publiceren"], ["découvrir", "ontdekken"], ["inventer", "uitvinden"], ["construire", "bouwen"], ["détruire", "verwoesten"],
      ["élire", "verkiezen"], ["arrêter", "arresteren / stoppen"], ["blesser", "verwonden"], ["sauver", "redden"], ["fonder", "stichten"], ["produire", "produceren"],
      ["le gouvernement", "de regering"], ["le président / la présidente", "de president"], ["les élections", "de verkiezingen"], ["la loi", "de wet"], ["la manifestation", "de demonstratie"], ["la grève", "de staking"],
      ["le fleuve", "de rivier (die in zee uitmondt)"], ["le barrage", "de stuwdam"], ["la forêt", "het bos"], ["selon", "volgens"], ["d'après", "volgens"], ["il paraît que", "het schijnt dat"]
    ],
    grammar: [
      { t: "De lijdende vorm: être + deelwoord", es: "La voix passive",
        html: `<p>In de <b>lijdende vorm</b> (passif) staat niet de dader centraal, maar wat er <b>gebeurt</b>. Je maakt hem met <b>être + voltooid deelwoord</b>. De dader kun je toevoegen met <b>par</b> (door).</p>
<p><i>Les ouvriers construisent le pont.</i> → <i>Le pont <b>est construit</b> (par les ouvriers).</i></p>
<p>⚠️ <b>Let op, anders dan in het Nederlands:</b> wij gebruiken <b>worden</b> («de brug <u>wordt</u> gebouwd»), het Frans gebruikt altijd <b>être</b>. Er bestaat geen Frans «worden» voor de lijdende vorm. <i>Le pont est construit</i> kan dus zowel «wordt gebouwd» als «is gebouwd» betekenen; de context en de tijd maken het duidelijk.</p>
<p><b>De tijd zit in être:</b> <i>il <b>est</b> construit</i> (wordt) · <i>il <b>a été</b> construit</i> (is / werd gebouwd) · <i>il <b>était</b> construit</i> (werd, beschrijvend) · <i>il <b>sera</b> construit</i> (zal worden gebouwd) · <i>il <b>serait</b> construit</i> (zou worden).</p>
<p><b>Het deelwoord past zich altijd aan</b> het onderwerp aan, want het staat bij être: <i>La ville a été fondé<b>e</b> en 1881.</i> <i>Les lois sont voté<b>es</b>.</i></p>
<p>⚠️ <b>Uitzondering:</b> alleen een <b>lijdend voorwerp</b> kan onderwerp van een lijdende zin worden. Wat in het Nederlands wél kan («<u>mij</u> werd gezegd», «er werd <u>hem</u> een boek gegeven»), kan in het Frans <b>niet</b> met de passif: niet <s>j'ai été dit</s>. Daarvoor gebruik je <i>on</i> (zie hieronder): <i><b>On</b> m'a dit…</i></p>`,
        table: [["tijd", "lijdende vorm", "vertaling"], ["présent", "Le journal est publié chaque jour.", "De krant wordt elke dag uitgegeven."], ["passé composé", "La ville a été fondée en 1881.", "De stad is in 1881 gesticht."], ["futur", "Le barrage sera construit en 2030.", "De dam zal in 2030 gebouwd worden."], ["met dader", "Le vaccin a été découvert par une chercheuse.", "Het vaccin is ontdekt door een onderzoekster."]],
        ex: [["Le président a été élu hier.", "De president is gisteren gekozen."], ["Trois personnes ont été blessées.", "Drie mensen zijn gewond geraakt."], ["Cette chanson est connue de tous.", "Dit lied is bij iedereen bekend."]] },
      { t: "On: er wordt, men, ze", es: "On à la place du passif",
        html: `<p>In gesproken Frans klinkt de lijdende vorm vaak zwaar. Als de dader onbekend of onbelangrijk is, kiest een Fransman liever <b>on</b> + een gewone, actieve zin. Dat is de natuurlijke vertaling van het Nederlandse <b>«er wordt…»</b> en <b>«men»</b>.</p>
<p><i><b>On</b> parle français ici.</i> (Hier wordt Frans gesproken.)<br><i><b>On</b> a volé mon vélo.</i> (Mijn fiets is gestolen.)<br><i><b>On</b> m'a dit que c'était fermé.</i> (Er is mij gezegd dat het dicht was.)<br><i><b>On</b> dit que le fleuve Congo est le plus profond du monde.</i> (Men zegt dat…)</p>
<p><b>On</b> krijgt altijd een werkwoord in de <b>derde persoon enkelvoud</b> (zoals <i>il</i>), ook als het «wij» of «ze» betekent.</p>
<p>Een derde manier, vooral voor gewoontes en regels, is de <b>wederkerende vorm</b>: <i>Ça ne <b>se dit</b> pas.</i> (Dat zeg je niet.) <i>Le vin blanc <b>se boit</b> frais.</i> (Witte wijn wordt koel gedronken.) <i>Ça <b>se voit</b>.</i> (Dat is te zien.)</p>
<p><b>Wanneer dan wél de passif?</b> In geschreven taal, nieuws en formele teksten, en altijd als je de dader wilt noemen met <i>par</i>.</p>`,
        table: [["Nederlands", "natuurlijk Frans"], ["Er wordt hier niet gerookt.", "On ne fume pas ici."], ["Mijn tas is gestolen.", "On a volé mon sac."], ["Mij is niets gevraagd.", "On ne m'a rien demandé."], ["Dat wordt zo geschreven.", "Ça s'écrit comme ça."]],
        ex: [["On construit un nouveau pont sur le fleuve.", "Er wordt een nieuwe brug over de rivier gebouwd."], ["En Belgique, on parle trois langues.", "In België worden drie talen gesproken."]] },
      { t: "Par of de?", es: "Le complément d'agent : par ou de",
        html: `<p>De dader krijgt bijna altijd <b>par</b>: <i>Le livre a été écrit <b>par</b> un auteur congolais.</i></p>
<p>⚠️ <b>Uitzondering:</b> na werkwoorden die een <b>gevoel of een toestand</b> beschrijven (geen echte handeling), gebruikt het Frans vaak <b>de</b>: <i>aimé de, connu de, respecté de, entouré de, couvert de, rempli de, suivi de, accompagné de</i>.</p>
<p><i>Elle est aimée <b>de</b> tous.</i> (Ze is bij iedereen geliefd.) · <i>La montagne est couverte <b>de</b> neige.</i> · <i>Le président est entouré <b>de</b> journalistes.</i></p>
<p><b>Waarom?</b> Bij <i>par</i> doet iemand actief iets. Bij <i>de</i> is er geen actie, alleen een toestand: de sneeuw «doet» niets, ze ligt er gewoon.</p>
<p>En om onbevestigd nieuws door te geven: <b>selon</b> / <b>d'après</b> (volgens) en <b>il paraît que</b> (het schijnt dat): <i><b>Selon</b> le journal, la grève continuera demain.</i> <i><b>Il paraît qu'</b>il va démissionner.</i></p>`,
        table: [["", "voorbeeld", "vertaling"], ["par (handeling)", "arrêté par la police", "gearresteerd door de politie"], ["par (handeling)", "détruit par l'orage", "verwoest door het onweer"], ["de (toestand)", "connu de tout le monde", "bij iedereen bekend"], ["de (toestand)", "couvert de forêts", "bedekt met bossen"]],
        ex: [["Kinshasa est entourée de collines.", "Kinshasa is omringd door heuvels."], ["Le voleur a été arrêté par deux policiers.", "De dief is door twee agenten gearresteerd."]] }
    ],
    dialogue: {
      t: "À la radio, le matin", place: "Kinshasa 🇨🇩",
      lines: [
        ["Présentatrice", "Bonjour, il est sept heures à Kinshasa. Voici les titres du journal.", "Goedemorgen, het is zeven uur in Kinshasa. Dit zijn de koppen van het journaal."],
        ["Présentatrice", "Un nouveau pont sera construit sur le fleuve Congo. Le projet a été annoncé hier par le gouvernement.", "Er wordt een nieuwe brug over de Congostroom gebouwd. Het project is gisteren door de regering aangekondigd."],
        ["Sanne", "Tu as entendu, Patrick ? On va enfin construire ce pont !", "Hoorde je dat, Patrick? Ze gaan die brug eindelijk bouwen!"],
        ["Patrick", "Oui. On en parle depuis vingt ans. Il paraît que les travaux seront finis en 2030.", "Ja. Er wordt al twintig jaar over gepraat. Het schijnt dat het werk in 2030 klaar is."],
        ["Présentatrice", "À Goma, trois personnes ont été sauvées après l'orage d'hier. Plusieurs maisons ont été détruites.", "In Goma zijn drie mensen gered na het onweer van gisteren. Meerdere huizen zijn verwoest."],
        ["Sanne", "C'est terrible. Est-ce que quelqu'un a été blessé ?", "Dat is vreselijk. Is er iemand gewond geraakt?"],
        ["Patrick", "On ne le sait pas encore. D'après le journaliste, la route est fermée.", "Dat weet men nog niet. Volgens de journalist is de weg afgesloten."],
        ["Présentatrice", "Culture : le dernier album de Fally Ipupa est déjà écouté dans toute l'Afrique.", "Cultuur: het nieuwste album van Fally Ipupa wordt al in heel Afrika beluisterd."],
        ["Patrick", "Ça ne m'étonne pas ! La rumba congolaise est connue de tout le monde.", "Dat verbaast me niet! De Congolese rumba is bij iedereen bekend."],
        ["Sanne", "On m'a dit qu'elle était inscrite au patrimoine de l'UNESCO. C'est vrai ?", "Er is mij verteld dat ze op de UNESCO-erfgoedlijst staat. Klopt dat?"],
        ["Patrick", "Oui, depuis 2021. Ici, on en est très fiers !", "Ja, sinds 2021. Daar zijn we hier erg trots op!"]
      ],
      q: [
        { t: "mc", q: "Qu'est-ce qui sera construit sur le fleuve Congo ?", o: ["Un nouveau pont", "Un barrage", "Une route"] },
        { t: "mc", q: "Que s'est-il passé à Goma ?", o: ["Des maisons ont été détruites par un orage", "Un président a été élu", "Une grève a commencé"] },
        { t: "mc", q: "Depuis quand la rumba congolaise est-elle inscrite à l'UNESCO ?", o: ["Depuis 2021", "Depuis 2030", "Depuis vingt ans"] }
      ]
    },
    culture: { t: "Kinshasa: de grootste Franstalige stad ter wereld", html: `<p><b>Kinshasa</b>, hoofdstad van de Democratische Republiek Congo, heeft meer dan 15 miljoen inwoners en is daarmee de <b>grootste Franstalige stad ter wereld</b>, groter dan Parijs. Aan de overkant van de rivier ligt <b>Brazzaville</b>, hoofdstad van het andere Congo: de twee dichtst bij elkaar gelegen hoofdsteden ter wereld (na Rome en Vaticaanstad), nog altijd zonder brug ertussen.</p>
<p>Frans is de officiële taal, maar op straat hoor je vooral <b>Lingala</b>, naast Swahili, Kikongo en Tshiluba. Het Frans van Kinshasa heeft eigen woorden: <i>un wewa</i> (een motortaxi), <i>la sape</i> (de kunst van het elegant gekleed gaan; de beoefenaars heten <i>sapeurs</i>).</p>
<p>🎶 De <b>Congolese rumba</b> staat sinds 2021 op de UNESCO-lijst van immaterieel erfgoed. Namen als Papa Wemba, Koffi Olomidé en Fally Ipupa zijn in heel Afrika beroemd.</p>
<p>De <b>Congostroom</b> is de diepste rivier ter wereld (meer dan 220 meter) en na de Amazone de waterrijkste.</p>` },
    ex: [
      { t: "cloze", s: "Le pont ___ construit en 2030.", a: ["sera"], o: ["sera", "va", "aura"], nl: "De brug zal in 2030 gebouwd worden.", x: "Lijdende vorm: altijd être; de tijd zit in être.", tag: "fr-passif" },
      { t: "cloze", s: "La ville a été ___ en 1881.", a: ["fondée"], o: ["fondée", "fondé", "fonder"], nl: "De stad is in 1881 gesticht.", x: "Het deelwoord past zich aan: la ville → -e.", tag: "fr-passif" },
      { t: "cloze", s: "Trois personnes ont ___ blessées.", a: ["été"], o: ["été", "étaient", "eu"], nl: "Drie mensen zijn gewond geraakt.", tag: "fr-passif" },
      { t: "cloze", s: "Le voleur a été arrêté ___ la police.", a: ["par"], o: ["par", "de", "à"], nl: "De dief is door de politie gearresteerd.", tag: "fr-passif" },
      { t: "cloze", s: "Cette chanteuse est connue ___ tout le monde.", a: ["de"], o: ["de", "par", "à"], nl: "Deze zangeres is bij iedereen bekend.", x: "Uitzondering: bij een toestand of gevoel (connu, aimé) gebruik je de.", tag: "fr-passif" },
      { t: "cloze", s: "___ parle français ici.", a: ["On"], o: ["On", "Il", "Ils"], nl: "Hier wordt Frans gesproken.", tag: "fr-on" },
      { t: "cloze", s: "On ___ volé mon vélo.", a: ["a"], o: ["a", "ont", "est"], nl: "Mijn fiets is gestolen.", x: "On krijgt altijd de derde persoon enkelvoud.", tag: "fr-on" },
      { t: "cloze", s: "Ça ne ___ dit pas.", a: ["se"], o: ["se", "est", "on"], nl: "Dat zeg je niet.", tag: "fr-on" },
      { t: "mc", q: "Hoe vertaal je «De brug wordt gebouwd»?", o: ["Le pont est construit.", "Le pont devient construit.", "Le pont va construit."], x: "Anders dan in het Nederlands: geen «worden», altijd être.", tag: "fr-passif" },
      { t: "mc", q: "Hoe zeg je natuurlijk «Mij is gezegd dat…»?", o: ["On m'a dit que…", "J'ai été dit que…", "Je suis dit que…"], x: "Uitzondering: een meewerkend voorwerp kan geen onderwerp van de passif worden. Gebruik on.", tag: "fr-on" },
      { t: "mc", q: "Welke zin is goed?", o: ["La montagne est couverte de neige.", "La montagne est couverte par neige.", "La montagne est couvert de neige."], tag: "fr-passif" },
      { t: "tr", nl: "De president is gisteren gekozen.", a: ["Le président a été élu hier.", "La présidente a été élue hier."], tag: "fr-passif" },
      { t: "tr", nl: "In België worden drie talen gesproken.", a: ["En Belgique, on parle trois langues.", "On parle trois langues en Belgique."], tag: "fr-on" },
      { t: "tr", nl: "Het schijnt dat hij ontslag gaat nemen.", a: ["Il paraît qu'il va démissionner."], tag: "fr-voc" },
      { t: "tr", nl: "Dit boek is door een vrouw geschreven.", a: ["Ce livre a été écrit par une femme."], tag: "fr-passif" },
      { t: "order", s: "Le projet a été annoncé hier par le gouvernement.", nl: "Het project is gisteren door de regering aangekondigd.", tag: "fr-ordre" },
      { t: "match", p: [["découvrir", "ontdekken"], ["inventer", "uitvinden"], ["détruire", "verwoesten"], ["élire", "verkiezen"], ["sauver", "redden"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Le fleuve Congo en cinq faits", type: "Artikel in een jongerentijdschrift",
      p: [
        ["Le fleuve Congo est connu de tous les Africains, mais savez-vous qu'il est le fleuve le plus profond du monde ? Il a été exploré par les Européens seulement à la fin du dix-neuvième siècle. Aujourd'hui, il est utilisé comme une grande route : on y transporte des personnes, des fruits et du bois.", "De Congostroom is bij alle Afrikanen bekend, maar weet u dat het de diepste rivier ter wereld is? Hij is pas aan het eind van de negentiende eeuw door Europeanen verkend. Tegenwoordig wordt hij gebruikt als een grote weg: er worden mensen, fruit en hout over vervoerd."],
        ["Le barrage d'Inga a été construit dans les années soixante-dix. Une grande partie de l'électricité du pays y est produite. Un nouveau barrage, encore plus grand, sera peut-être construit un jour : selon les ingénieurs, il pourrait donner de l'électricité à la moitié de l'Afrique.", "De Inga-dam is in de jaren zeventig gebouwd. Een groot deel van de elektriciteit van het land wordt er opgewekt. Een nieuwe, nog grotere dam wordt misschien ooit gebouwd: volgens de ingenieurs zou hij de helft van Afrika van stroom kunnen voorzien."],
        ["La forêt qui entoure le fleuve est appelée « le deuxième poumon de la planète », après l'Amazonie. Elle est habitée par des gorilles, des éléphants et des okapis. Malheureusement, chaque année, des milliers d'arbres sont coupés. Il faut que cette forêt soit protégée !", "Het bos rond de rivier wordt 'de tweede long van de planeet' genoemd, na het Amazonegebied. Er leven gorilla's, olifanten en okapi's. Helaas worden er elk jaar duizenden bomen gekapt. Dit bos moet beschermd worden!"]
      ],
      gl: [["profond", "diep"], ["explorer", "verkennen"], ["le bois", "het hout"], ["le poumon", "de long"], ["protéger", "beschermen"]],
      q: [
        { t: "mc", q: "Qu'est-ce qui est transporté sur le fleuve ?", o: ["Des personnes, des fruits et du bois", "Seulement de l'électricité", "Des voitures"] },
        { t: "mc", q: "Quand le barrage d'Inga a-t-il été construit ?", o: ["Dans les années soixante-dix", "Au dix-neuvième siècle", "En 2021"] },
        { t: "mc", q: "Comment la forêt est-elle appelée ?", o: ["Le deuxième poumon de la planète", "La grande route", "Le cœur de l'Afrique"] }
      ]
    },
    say: [["Le pont sera construit en 2030.", "De brug zal in 2030 gebouwd worden."], ["On m'a dit que c'était fermé.", "Er is mij gezegd dat het dicht was."], ["On parle français ici.", "Hier wordt Frans gesproken."], ["Il paraît que c'est vrai.", "Het schijnt dat het waar is."]],
    task: { nl: "Schrijf een kort nieuwsbericht van 4 of 5 zinnen (echt of verzonnen) met minstens twee zinnen in de lijdende vorm en één met on.", model: "Un nouveau musée a été ouvert hier à Utrecht. Il a été construit en deux ans par une architecte néerlandaise. On y montre l'histoire du vélo aux Pays-Bas. Selon le journal, le musée sera visité par cent mille personnes cette année. Il paraît que l'entrée est gratuite le dimanche." },
    scenario: { nl: "Je luistert met een Congolese vriend naar het ochtendnieuws in Kinshasa en bespreekt de berichten.", role: "You are Patrick, a well-informed friend in Kinshasa, DR Congo. Listen to the morning radio news with the learner and discuss three items: a bridge to be built over the Congo river, storm damage in Goma, and the success of Congolese rumba. Use the passive (a été annoncé, sera construit), on (on dit que, on m'a dit), il paraît que and selon. Ask the learner what is in the news in their own country. Use tu and clear French.", goal: "Vertel twee nieuwsfeiten in de lijdende vorm of met on, en vraag je vriend naar een bericht." }
  });
})(window.SPT);
