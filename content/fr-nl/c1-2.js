/* Frans voor Nederlandstaligen — niveau C1, units 6–10 (Frans van Frankrijk, uitleg in het Nederlands). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-connect': 'een betoog structureren (d\'une part, en outre, en somme)', 'fr-relief2': 'nadruk: ce dont…, c\'est; voilà pourquoi', 'fr-chiffres': 'cijfers en trends (augmenter de, passer de… à)',
    'fr-accord-verbe': 'werkwoord na la plupart, un tiers, beaucoup de', 'fr-cause2': 'oorzaak, gevolg en doel in verzorgd Frans', 'fr-part-comp': 'participe composé en proposition participiale',
    'fr-franco': 'Frans in België, Zwitserland, Québec en Afrika', 'fr-anglic': 'anglicismen en hun Franse alternatieven', 'fr-litote': 'litote, eufemisme en ironie', 'fr-neg-lit': 'ne … guère, ne … point, ne … nullement'
  });

  /* ───────────────────────── C1 · 6 ───────────────────────── */
  U({
    id: "fr-c1-06", level: "C1", icon: "🎤", title: "Prendre la parole", nl: "Presenteren: structuur aanbrengen en nadruk leggen",
    goals: ["Een presentatie openen, opbouwen en afsluiten", "Je betoog structureren met verbindingswoorden", "Nadruk leggen met ce qui…, c'est en ce dont…, c'est", "Het publiek meenemen met overgangszinnen"],
    vocab: [
      ["l'exposé", "de presentatie / spreekbeurt"], ["l'intervention", "de bijdrage (op een congres)"], ["l'orateur / l'oratrice", "de spreker"], ["le public", "het publiek"], ["la diapositive", "de dia"], ["le plan", "de opzet"],
      ["tout d'abord", "allereerst"], ["dans un premier temps", "in eerste instantie"], ["ensuite", "vervolgens"], ["par ailleurs", "daarnaast"], ["en outre", "bovendien"], ["de plus", "bovendien"],
      ["d'une part… d'autre part", "enerzijds… anderzijds"], ["en revanche", "daarentegen"], ["autrement dit", "met andere woorden"], ["à savoir", "namelijk"], ["notamment", "met name"], ["en somme", "kortom"],
      ["en définitive", "uiteindelijk / per saldo"], ["pour conclure", "tot besluit"], ["aborder", "aansnijden"], ["souligner", "benadrukken"], ["mettre en évidence", "aan het licht brengen"], ["revenir sur", "terugkomen op"],
      ["passer à", "overgaan naar"], ["l'enjeu", "de inzet / wat er op het spel staat"], ["le constat", "de vaststelling"], ["prendre la parole", "het woord nemen"]
    ],
    grammar: [
      { t: "Een betoog structureren", es: "Les connecteurs logiques",
        html: `<p>Een Franse presentatie volgt een <b>aangekondigd plan</b>. De spreker zegt eerst wat hij gaat doen, doet het, en vat het dan samen. Daar horen vaste verbindingswoorden bij; ze werken als verkeersborden voor de luisteraar.</p>
<p><b>Openen:</b> <i>Je voudrais <b>aborder</b> la question de… · Mon exposé <b>s'articulera autour de</b> trois points.</i><br><b>Ordenen:</b> <i><b>Tout d'abord</b> / <b>Dans un premier temps</b>… <b>Ensuite</b> / <b>Dans un deuxième temps</b>… <b>Enfin</b>…</i><br><b>Toevoegen:</b> <i><b>de plus, en outre, par ailleurs, qui plus est</b></i> (en wat meer is)<br><b>Tegenover elkaar zetten:</b> <i><b>d'une part… d'autre part</b></i> · <i><b>en revanche</b></i> · <i><b>or</b></i><br><b>Verduidelijken:</b> <i><b>autrement dit, c'est-à-dire, à savoir, notamment, en d'autres termes</b></i><br><b>Overgaan:</b> <i><b>Venons-en à</b>… · <b>Passons maintenant à</b>… · <b>J'en viens à</b> mon deuxième point.</i><br><b>Afsluiten:</b> <i><b>en somme, en définitive, pour conclure, en un mot</b></i></p>
<p>⚠️ <b>Let op or: een valse vriend van «of».</b> <i>Or</i> betekent <b>«welnu, nu is het zo dat»</b> en leidt een feit in dat de redenering een wending geeft: <i>On pensait que le projet réussirait. <b>Or</b>, les chiffres disent le contraire.</i> «Of» is <i>ou</i>. Waarom? <i>Or</i> komt van het Latijnse <i>hora</i> (uur, nu): «op dit moment, welnu».</p>
<p>⚠️ <b>Uitzondering: enfin en finalement zijn niet hetzelfde.</b> <i><b>Enfin</b></i> = ten slotte (het laatste punt van een reeks), of «eindelijk!». <i><b>Finalement</b></i> = uiteindelijk, na twijfel of tegen de verwachting in: <i>Finalement, j'ai refusé.</i> In een opsomming gebruik je dus <i>enfin</i>.</p>
<p>⚠️ <b>Ook niet hetzelfde: par ailleurs en d'ailleurs.</b> <i>Par ailleurs</i> voegt een <b>nieuw</b> punt toe (daarnaast); <i>d'ailleurs</i> geeft een <b>bijkomend argument</b> voor wat je net zei (trouwens, overigens).</p>`,
        table: [["functie", "neutraal", "verzorgd"], ["beginnen", "d'abord", "dans un premier temps"], ["toevoegen", "aussi, et puis", "en outre, par ailleurs"], ["tegenstellen", "mais", "en revanche, or"], ["uitleggen", "c'est-à-dire", "autrement dit, à savoir"], ["afsluiten", "donc, bref", "en somme, en définitive"]],
        ex: [["Dans un premier temps, je présenterai le constat ; dans un deuxième temps, les solutions.", "Eerst presenteer ik de vaststelling; daarna de oplossingen."], ["Le budget a augmenté. Or, les résultats stagnent.", "Het budget is gestegen. Welnu, de resultaten stagneren."]] },
      { t: "Nadruk leggen: ce qui…, c'est / ce dont…, c'est", es: "La mise en relief",
        html: `<p>Op B1 leerde je <i>c'est … qui / que</i>. Voor een presentatie is de omgekeerde bouw nog krachtiger: je kondigt eerst aan <b>dat</b> er iets belangrijks komt, en noemt het dan pas. De luisteraar wacht op het antwoord.</p>
<p><b>Ce qui</b> (onderwerp) <b>…, c'est</b>: <i><b>Ce qui</b> m'inquiète, <b>c'est</b> le calendrier.</i><br><b>Ce que</b> (lijdend voorwerp) <b>…, c'est</b>: <i><b>Ce que</b> je propose, <b>c'est</b> de reporter la décision.</i><br><b>Ce dont</b> (werkwoord met <i>de</i>) <b>…, c'est</b>: <i><b>Ce dont</b> nous avons besoin, <b>c'est</b> de temps.</i><br><b>Ce à quoi</b> (werkwoord met <i>à</i>) <b>…, c'est</b>: <i><b>Ce à quoi</b> je tiens, <b>c'est</b> la transparence.</i><br><b>Ce sur quoi</b> …: <i><b>Ce sur quoi</b> je voudrais insister, <b>c'est</b> le coût.</i></p>
<p>⚠️ <b>Let op wat er na c'est komt:</b> een zelfstandig naamwoord staat er gewoon; een werkwoord krijgt <b>de</b> + infinitief (<i>c'est <b>de</b> reporter</i>) of <b>que</b> + zin (<i>c'est <b>que</b> nous manquons de temps</i>). En bij <i>ce dont</i> herhaal je in verzorgd Frans het voorzetsel: <i>Ce dont j'ai besoin, c'est <b>de</b> temps.</i></p>
<p>⚠️ <b>Uitzondering: ce sont.</b> Volgt er een meervoud, dan schrijf je in verzorgd Frans <i><b>ce sont</b></i>: <i>Ce qui compte, <b>ce sont</b> les résultats.</i> Maar vóór <i>nous</i> en <i>vous</i> blijft het <b>c'est</b>: <i>C'est nous qui décidons.</i> Waarom? <i>Ce sont</i> richt zich naar een derde persoon meervoud; <i>nous</i> en <i>vous</i> zijn eerste en tweede persoon.</p>
<p><b>Andere manieren om te benadrukken:</b><br><b>Vooropplaatsen met herhaling:</b> <i>Cette décision, je <b>la</b> regrette.</i> · <i>De l'argent, il <b>en</b> faut.</i><br><b>Voilà / voici:</b> <i><b>Voilà pourquoi</b> je vous demande d'agir.</i> · <i><b>Voici ce que</b> je propose.</i><br><b>Retorische vraag:</b> <i>Que faut-il en retenir ? Trois choses.</i></p>`,
        table: [["neutraal", "met nadruk"], ["Le calendrier m'inquiète.", "Ce qui m'inquiète, c'est le calendrier."], ["Je propose de reporter.", "Ce que je propose, c'est de reporter."], ["Nous avons besoin de temps.", "Ce dont nous avons besoin, c'est de temps."], ["Je pense à l'avenir.", "Ce à quoi je pense, c'est à l'avenir."], ["Les résultats comptent.", "Ce qui compte, ce sont les résultats."]],
        ex: [["Ce sur quoi je voudrais insister, c'est la qualité des données.", "Waar ik de nadruk op wil leggen, is de kwaliteit van de gegevens."], ["Voilà pourquoi il est urgent d'agir.", "Daarom is het dringend nodig om te handelen."]] }
    ],
    dialogue: {
      t: "Répétition générale", place: "Genève 🇨🇭",
      lines: [
        ["Élodie", "Vas-y, Daan, fais comme si j'étais le public. Tu as dix minutes.", "Toe maar Daan, doe alsof ik het publiek ben. Je hebt tien minuten."],
        ["Daan", "Bonjour à tous. Aujourd'hui, je vais parler de l'eau à Genève. Il y a beaucoup de problèmes et aussi des solutions.", "Goedendag allemaal. Vandaag ga ik praten over water in Genève. Er zijn veel problemen en ook oplossingen."],
        ["Élodie", "Stop. C'est correct, mais plat. Annonce ton plan : « Mon exposé s'articulera autour de deux points. »", "Stop. Het klopt, maar het is vlak. Kondig je opzet aan: 'Mijn presentatie draait om twee punten.'"],
        ["Daan", "D'accord. « Dans un premier temps, je présenterai le constat ; dans un deuxième temps, les solutions. »", "Oké. 'Eerst presenteer ik de vaststelling; daarna de oplossingen.'"],
        ["Élodie", "Beaucoup mieux. Et ta phrase clé ?", "Veel beter. En je kernzin?"],
        ["Daan", "« La consommation augmente trop vite. »", "'Het verbruik stijgt te snel.'"],
        ["Élodie", "Mets-la en relief : « Ce qui est préoccupant, c'est la vitesse à laquelle la consommation augmente. »", "Geef hem nadruk: 'Wat zorgwekkend is, is de snelheid waarmee het verbruik stijgt.'"],
        ["Daan", "Ah oui, on attend la suite. Et pour passer aux solutions ?", "O ja, je wacht op het vervolg. En om naar de oplossingen over te gaan?"],
        ["Élodie", "« J'en viens maintenant à mon deuxième point. » Et pour finir : « En somme… » puis une seule idée.", "'Ik kom nu bij mijn tweede punt.' En om af te sluiten: 'Kortom…' en dan één enkel idee."],
        ["Daan", "« En somme, ce dont nous avons besoin, ce n'est pas de plus d'eau, mais de moins de gaspillage. »", "'Kortom, wat we nodig hebben is niet meer water, maar minder verspilling.'"],
        ["Élodie", "Voilà ! Là, tu as un exposé.", "Kijk! Nu heb je een presentatie."]
      ],
      q: [
        { t: "mc", q: "Que reproche Élodie à la première version ?", o: ["Elle est correcte mais plate", "Elle contient des fautes", "Elle est trop longue"] },
        { t: "mc", q: "Comment Daan annonce-t-il son plan ?", o: ["Avec « dans un premier temps… dans un deuxième temps »", "Avec « bonjour à tous »", "Il ne l'annonce pas"] },
        { t: "mc", q: "Quelle est la conclusion de Daan ?", o: ["Il faut moins de gaspillage, pas plus d'eau", "Il faut plus d'eau", "Il n'y a pas de solution"] }
      ]
    },
    culture: { t: "Le plan en trois parties", html: `<p>Vraag een Fransman om iets uit te leggen en de kans is groot dat hij begint met: <i>«Il y a trois choses.»</i> Het <b>plan in drie delen</b> is op school zo vaak geoefend dat het een denkgewoonte is geworden. Een spreekbeurt zonder aangekondigde opzet voelt voor Fransen als een gebouw zonder trap.</p>
<p>De koninklijke weg naar topfuncties loopt via de <b>grandes écoles</b>, en het beruchtste toelatingsonderdeel is <b>le grand oral</b>: twintig minuten voorbereiding op een onbekend onderwerp, daarna een gestructureerd betoog voor een jury. Sinds 2021 is er ook een <i>grand oral</i> in het gewone eindexamen.</p>
<p>In Genève, zetel van tientallen internationale organisaties, is Frans naast Engels de werktaal van de <b>VN</b>. Tolken leren er dat Franse sprekers hun conclusie graag tot het eind bewaren, terwijl Angelsaksen ermee beginnen.</p>` },
    ex: [
      { t: "cloze", s: "Ce ___ m'inquiète, c'est le calendrier.", a: ["qui"], o: ["qui", "que", "dont"], nl: "Wat mij zorgen baart, is de planning.", tag: "fr-relief2" },
      { t: "cloze", s: "Ce ___ nous avons besoin, c'est de temps.", a: ["dont"], o: ["dont", "que", "qui"], nl: "Wat we nodig hebben, is tijd.", x: "Avoir besoin de: ce dont.", tag: "fr-relief2" },
      { t: "cloze", s: "Ce à ___ je tiens, c'est la transparence.", a: ["quoi"], o: ["quoi", "que", "qui"], nl: "Waar ik aan hecht, is transparantie.", tag: "fr-relief2" },
      { t: "cloze", s: "Ce qui compte, ce ___ les résultats.", a: ["sont"], o: ["sont", "est", "soit"], nl: "Wat telt, zijn de resultaten.", x: "Uitzondering: vóór een meervoud in verzorgd Frans ce sont.", tag: "fr-relief2" },
      { t: "cloze", s: "On pensait réussir. ___ , les chiffres disent le contraire.", a: ["Or"], o: ["Or", "Ou", "Donc"], nl: "We dachten te slagen. Welnu, de cijfers zeggen het tegendeel.", x: "Valse vriend: or = welnu, niet «of».", tag: "fr-connect" },
      { t: "cloze", s: "Tout d'abord…, ensuite…, ___ … (laatste punt van een reeks)", a: ["enfin"], o: ["enfin", "finalement", "en fin"], nl: "Allereerst…, vervolgens…, ten slotte…", x: "Uitzondering: in een opsomming enfin, niet finalement.", tag: "fr-connect" },
      { t: "mc", q: "Welk woord voegt een NIEUW punt toe (daarnaast)?", o: ["par ailleurs", "d'ailleurs", "ailleurs"], tag: "fr-connect" },
      { t: "mc", q: "Hoe ga je over naar je tweede punt?", o: ["J'en viens à mon deuxième point.", "Je viens de mon deuxième point.", "Je reviens du deuxième point."], tag: "fr-connect" },
      { t: "mc", q: "Welke zin is correct?", o: ["Ce que je propose, c'est de reporter.", "Ce que je propose, c'est reporter.", "Ce que je propose, c'est à reporter."], x: "Na c'est komt de + infinitief.", tag: "fr-relief2" },
      { t: "tr", nl: "Daarom is het dringend nodig om te handelen.", a: ["Voilà pourquoi il est urgent d'agir.", "C'est pourquoi il est urgent d'agir."], tag: "fr-relief2" },
      { t: "tr", nl: "Met andere woorden, we hebben geen keuze.", a: ["Autrement dit, nous n'avons pas le choix.", "En d'autres termes, nous n'avons pas le choix.", "Autrement dit, on n'a pas le choix."], tag: "fr-connect" },
      { t: "tr", nl: "Kortom, het project is geslaagd.", a: ["En somme, le projet est réussi.", "En somme, le projet a réussi.", "Bref, le projet a réussi."], tag: "fr-connect" },
      { t: "order", s: "Ce sur quoi je voudrais insister, c'est le coût.", nl: "Waar ik de nadruk op wil leggen, zijn de kosten.", tag: "fr-ordre" },
      { t: "match", p: [["en outre", "bovendien"], ["à savoir", "namelijk"], ["notamment", "met name"], ["en somme", "kortom"], ["or", "welnu"]], tag: "fr-connect" }
    ],
    reading: {
      t: "Discours d'ouverture", type: "Toespraak",
      p: [
        ["Mesdames et Messieurs, je vous remercie d'être venus si nombreux. Mon intervention s'articulera autour de deux questions. Dans un premier temps, je reviendrai sur le constat : notre ville consomme trop d'eau. Dans un deuxième temps, j'aborderai les solutions qui s'offrent à nous.", "Dames en heren, ik dank u dat u met zovelen bent gekomen. Mijn bijdrage draait om twee vragen. Eerst kom ik terug op de vaststelling: onze stad verbruikt te veel water. Daarna snijd ik de oplossingen aan die voor ons openstaan."],
        ["Tout d'abord, les chiffres. En dix ans, la consommation a augmenté de quinze pour cent. On pourrait croire que la population en est la cause. Or, elle n'a augmenté que de quatre pour cent. Autrement dit, ce n'est pas le nombre d'habitants qui pose problème : ce sont nos habitudes.", "Allereerst de cijfers. In tien jaar is het verbruik met vijftien procent gestegen. Je zou kunnen denken dat de bevolking de oorzaak is. Welnu, die is maar met vier procent toegenomen. Met andere woorden: niet het aantal inwoners is het probleem, maar onze gewoontes."],
        ["J'en viens à mon second point. Ce dont nous avons besoin, ce n'est pas d'un nouveau barrage, mais d'un réseau qui ne perde plus un litre sur cinq. En somme, la solution la moins chère est aussi la plus efficace. Voilà pourquoi je vous demande de soutenir ce projet.", "Ik kom bij mijn tweede punt. Wat we nodig hebben is geen nieuwe stuwdam, maar een leidingnet dat niet langer één op de vijf liter verliest. Kortom, de goedkoopste oplossing is ook de doeltreffendste. Daarom vraag ik u dit project te steunen."]
      ],
      gl: [["s'articuler autour de", "draaien om"], ["le constat", "de vaststelling"], ["le barrage", "de stuwdam"], ["le réseau", "het (leiding)net"], ["soutenir", "steunen"]],
      q: [
        { t: "mc", q: "Combien de parties l'orateur annonce-t-il ?", o: ["Deux", "Trois", "Cinq"] },
        { t: "mc", q: "Selon lui, quelle est la vraie cause du problème ?", o: ["Nos habitudes", "La croissance de la population", "Le manque de barrages"] },
        { t: "mc", q: "Que propose-t-il ?", o: ["Réparer le réseau", "Construire un barrage", "Augmenter le prix de l'eau"] }
      ]
    },
    say: [["Mon exposé s'articulera autour de trois points.", "Mijn presentatie draait om drie punten."], ["Ce qui m'inquiète, c'est le calendrier.", "Wat mij zorgen baart, is de planning."], ["J'en viens maintenant à mon deuxième point.", "Ik kom nu bij mijn tweede punt."], ["En somme, nous n'avons pas le choix.", "Kortom, we hebben geen keuze."]],
    task: { nl: "Schrijf de opening en het slot van een presentatie van twee minuten over een onderwerp naar keuze (6 zinnen). Kondig je opzet aan, gebruik or of en revanche, en sluit af met ce dont… c'est of ce qui… c'est.", model: "Mesdames et Messieurs, je voudrais aborder la question du télétravail. Mon exposé s'articulera autour de deux points : dans un premier temps, les avantages ; dans un deuxième temps, les limites. On dit souvent qu'il rend les équipes plus productives. Or, les études sont loin d'être unanimes. En somme, ce dont les entreprises ont besoin, ce n'est pas d'une règle unique, mais de souplesse. Je vous remercie de votre attention." },
    scenario: { nl: "Morgen houd je een presentatie op een congres in Genève. Een collega laat je oefenen en geeft feedback op de opbouw.", role: "You are Élodie, a Swiss colleague in Geneva and an experienced conference speaker. Ask the learner for the topic of their talk, then have them say their opening, one key sentence, one transition and their conclusion. After each, suggest a more structured or emphatic version (dans un premier temps…, or, autrement dit, j'en viens à…, ce qui…/ce dont… c'est, en somme, voilà pourquoi). Be encouraging and concrete, and ask them to repeat the improved version.", goal: "Kondig je opzet aan in twee delen, leg nadruk met ce qui… c'est of ce dont… c'est, en sluit af met en somme." }
  });

  /* ───────────────────────── C1 · 7 ───────────────────────── */
  U({
    id: "fr-c1-07", level: "C1", icon: "📊", title: "La plupart pensent que…", nl: "Economie en cijfers: trends beschrijven en het werkwoord laten kloppen",
    goals: ["Grafieken, percentages en trends beschrijven", "Het verschil maken tussen augmenter de en augmenter à", "Het werkwoord correct vervoegen na la plupart, un tiers, beaucoup de", "Breuken, procenten en grote getallen uitspreken"],
    vocab: [
      ["la croissance", "de groei"], ["le PIB", "het bbp"], ["l'inflation", "de inflatie"], ["le pouvoir d'achat", "de koopkracht"], ["le taux", "het percentage / tarief"], ["le taux de chômage", "het werkloosheidscijfer"],
      ["augmenter", "stijgen / verhogen"], ["diminuer", "dalen / verlagen"], ["grimper", "klimmen"], ["chuter", "kelderen"], ["stagner", "stagneren"], ["s'élever à", "bedragen"],
      ["atteindre", "bereiken"], ["dépasser", "overschrijden"], ["doubler", "verdubbelen"], ["la moitié", "de helft"], ["le tiers", "een derde"], ["le quart", "een kwart"],
      ["la plupart", "de meesten / het merendeel"], ["la majorité", "de meerderheid"], ["un milliard", "een miljard"], ["en moyenne", "gemiddeld"], ["environ", "ongeveer"], ["par rapport à", "vergeleken met"],
      ["le bénéfice", "de winst"], ["la perte", "het verlies"], ["le chiffre d'affaires", "de omzet"], ["les impôts", "de belastingen"]
    ],
    grammar: [
      { t: "Trends beschrijven: de, à, en de werkwoorden van verandering", es: "Décrire une évolution",
        html: `<p>Bij cijfers beslissen kleine voorzetsels over grote bedragen. Het Frans is hier preciezer dan het Nederlandse «met» en «naar».</p>
<p><b>augmenter / diminuer DE</b> = het <b>verschil</b>: <i>Les prix ont augmenté <b>de</b> 5 %.</i> (met 5 procent)<br><b>passer DE … À</b> = begin en eind: <i>Le taux est passé <b>de</b> 7 <b>à</b> 9 %.</i><br><b>s'élever À / atteindre</b> = het <b>eindpunt</b>: <i>Le chômage s'élève <b>à</b> 9 %.</i> · <i>Il a atteint 9 %.</i> (zonder voorzetsel!)<br><b>être EN hausse / EN baisse DE</b>: <i>Les ventes sont <b>en hausse de</b> 3 %.</i></p>
<p>⚠️ <b>Let op het verschil tussen procent en procentpunt:</b> van 7 naar 9 procent is een stijging <i>de deux <b>points</b></i>, niet <i>de 2 %</i>.</p>
<p><b>Werkwoorden op sterkte:</b> licht: <i>progresser, reculer</i> · neutraal: <i>augmenter, baisser, diminuer</i> · sterk: <i>grimper, bondir, s'envoler</i> ↔ <i>chuter, s'effondrer, dégringoler</i> · stil: <i>stagner, se stabiliser, rester stable</i>.</p>
<p><b>Getallen uitspreken:</b> de komma is <b>virgule</b>: <i>3,5 %</i> = <i>trois virgule cinq pour cent</i>. Breuken: <i>la moitié, un tiers, un quart, trois quarts, un cinquième</i>. «Twee keer zoveel» = <i>deux fois plus</i>; «verdubbelen» = <i>doubler</i>; «verdrievoudigen» = <i>tripler</i>.</p>
<p>⚠️ <b>Uitzondering: million en milliard zijn zelfstandige naamwoorden.</b> Ze krijgen een <b>-s</b> en <b>de</b> vóór wat volgt: <i>deux million<b>s d'</b>habitants</i>, <i>trois milliard<b>s d'</b>euros</i>. Maar <i>mille</i> is onveranderlijk en krijgt geen <i>de</i>: <i>deux <b>mille</b> habitants</i>. Waarom? <i>Mille</i> is een telwoord; <i>million</i> en <i>milliard</i> zijn later als naamwoorden gevormd (zoals <i>une douzaine de</i>). Volgt er nog een getal, dan vervalt <i>de</i>: <i>deux millions cinq cent mille habitants</i>.</p>
<p>⚠️ <b>Valse vriend:</b> <i>un billion</i> is in het Frans een miljoen miljoen (10¹²), niet het Amerikaanse <i>billion</i>; dat is <i>un milliard</i>.</p>`,
        table: [["zin", "betekenis"], ["Le prix a augmenté de 10 euros.", "De prijs is met 10 euro gestegen."], ["Le prix a augmenté à 10 euros.", "De prijs is tot 10 euro gestegen."], ["Le taux est passé de 2 à 4 %.", "Het percentage ging van 2 naar 4."], ["Les ventes ont doublé.", "De verkoop is verdubbeld."], ["La dette s'élève à trois milliards d'euros.", "De schuld bedraagt drie miljard euro."]],
        ex: [["L'inflation a reculé de deux points par rapport à l'an dernier.", "De inflatie is twee procentpunt gedaald vergeleken met vorig jaar."], ["Le chiffre d'affaires a bondi de 12,5 % en un trimestre.", "De omzet is in één kwartaal met 12,5 procent omhooggeschoten."]] },
      { t: "Enkelvoud of meervoud na la plupart, un tiers, beaucoup de?", es: "L'accord du verbe avec les collectifs",
        html: `<p>«De meerderheid <u>is</u> het eens» of «<u>zijn</u> het eens»? In het Frans hangt het antwoord af van het woord. Er zijn drie groepen.</p>
<p>1️⃣ <b>Altijd meervoud:</b> <b>la plupart</b> (de meesten), <b>beaucoup, peu, trop, assez, combien, nombre de, quantité de</b>: het werkwoord richt zich naar het naamwoord erachter, ook als dat is weggelaten. <i>La plupart des gens <b>pensent</b>… · La plupart <b>sont</b> d'accord. · Beaucoup <b>ont</b> voté.</i></p>
<p>⚠️ <b>Uitzondering:</b> <i>la plupart</i> ziet eruit als vrouwelijk enkelvoud, maar gedraagt zich als meervoud. Waarom? <i>La plus part</i> betekende «het grootste deel»; de betekenis «de meesten» heeft het gewonnen van de vorm. Alleen bij een enkelvoudig naamwoord is het enkelvoud: <i>La plupart <b>du temps</b> se <b>passe</b> à attendre.</i></p>
<p>2️⃣ <b>Keuze naar betekenis:</b> <b>la majorité, une partie, un groupe, une foule, une dizaine, le reste</b> en <b>breuken en procenten</b> (<i>un tiers, la moitié, 20 %</i>). Zie je de groep als <b>één geheel</b>, dan enkelvoud; denk je aan de <b>individuen</b>, dan meervoud. <i>La majorité des députés <b>a</b> voté pour.</i> (als blok) · <i>Une dizaine de personnes <b>attendaient</b>.</i> · <i>Un tiers des Français <b>vivent</b> seuls.</i> · <i>20 % de la population <b>vit</b> en ville.</i> (naar <i>population</i>, enkelvoud)</p>
<p>3️⃣ <b>Altijd enkelvoud:</b> <b>chacun, chaque, personne, tout le monde, on, le nombre de</b>: <i>Tout le monde <b>est</b> là.</i> · <i>Chacun <b>fait</b> ce qu'il veut.</i> · <i><b>Le</b> nombre de chômeurs <b>diminue</b>.</i></p>
<p>⚠️ <b>Let op het lidwoord:</b> <i><b>le</b> nombre de</i> → enkelvoud (het getal zelf daalt); <i><b>un grand</b> nombre de</i> → meervoud (veel mensen doen iets): <i>Un grand nombre de salariés <b>travaillent</b> à distance.</i></p>
<p>⚠️ <b>En plus d'un / moins de deux:</b> <i>Plus d'un candidat <b>a</b> échoué</i> (enkelvoud, naar <i>un</i>), maar <i>Moins de deux heures <b>suffisent</b></i> (meervoud, naar <i>deux</i>). De grammatica volgt hier het <b>woord</b>, niet de logica.</p>`,
        table: [["onderwerp", "werkwoord", "voorbeeld"], ["la plupart (des…)", "meervoud", "La plupart sont partis."], ["beaucoup de + mv.", "meervoud", "Beaucoup de gens le savent."], ["la majorité des…", "enkelvoud of meervoud", "La majorité a / ont voté."], ["20 % des Français", "meervoud", "20 % des Français vivent seuls."], ["tout le monde", "enkelvoud", "Tout le monde est d'accord."], ["le nombre de…", "enkelvoud", "Le nombre de clients augmente."]],
        ex: [["La plupart des économistes s'attendent à une baisse des taux.", "De meeste economen verwachten een renteverlaging."], ["Un grand nombre d'entreprises ont augmenté leurs prix, mais le nombre de faillites reste stable.", "Een groot aantal bedrijven heeft de prijzen verhoogd, maar het aantal faillissementen blijft stabiel."]] }
    ],
    dialogue: {
      t: "À la radio économique", place: "Paris 🇫🇷",
      lines: [
        ["Présentatrice", "Bonsoir. Les chiffres de l'emploi sont tombés ce matin. Sanne de Vries, économiste, vous les commentez pour nous.", "Goedenavond. De werkgelegenheidscijfers zijn vanochtend bekendgemaakt. Sanne de Vries, econome, u geeft er commentaar op."],
        ["Sanne", "Bonsoir. Le taux de chômage est passé de 7,5 à 7,1 %. Il a donc baissé de 0,4 point en un trimestre.", "Goedenavond. Het werkloosheidscijfer is van 7,5 naar 7,1 procent gegaan. Het is dus in één kwartaal met 0,4 punt gedaald."],
        ["Présentatrice", "C'est une bonne nouvelle ?", "Is dat goed nieuws?"],
        ["Sanne", "Dans une certaine mesure. La plupart des nouveaux emplois sont des contrats courts. Seul un tiers des embauches se fait en CDI.", "Tot op zekere hoogte. De meeste nieuwe banen zijn korte contracten. Slechts een derde van de aanwervingen gebeurt met een vast contract."],
        ["Présentatrice", "Et les salaires ?", "En de lonen?"],
        ["Sanne", "Ils ont augmenté de 2 % en moyenne. Or, l'inflation s'élève à 2,6 %. Autrement dit, le pouvoir d'achat recule.", "Die zijn gemiddeld met 2 procent gestegen. Welnu, de inflatie bedraagt 2,6 procent. Met andere woorden: de koopkracht daalt."],
        ["Présentatrice", "Donc tout le monde y perd ?", "Dus iedereen gaat erop achteruit?"],
        ["Sanne", "Pas tout le monde. Un grand nombre de cadres ont obtenu des hausses supérieures. Mais le nombre de salariés au SMIC, lui, ne diminue pas.", "Niet iedereen. Een groot aantal leidinggevenden heeft hogere verhogingen gekregen. Maar het aantal werknemers met het minimumloon neemt niet af."],
        ["Présentatrice", "Que faut-il attendre pour l'an prochain ?", "Wat mogen we voor volgend jaar verwachten?"],
        ["Sanne", "La croissance devrait atteindre 1,2 %. Ce n'est pas l'envolée, mais ce n'est pas la chute non plus.", "De groei zou 1,2 procent moeten bereiken. Het is geen vlucht omhoog, maar ook geen val."]
      ],
      q: [
        { t: "mc", q: "De combien le taux de chômage a-t-il baissé ?", o: ["De 0,4 point", "De 7,1 %", "De 2 %"] },
        { t: "mc", q: "Pourquoi le pouvoir d'achat recule-t-il ?", o: ["L'inflation est plus forte que la hausse des salaires", "Les salaires ont baissé", "Le chômage augmente"] },
        { t: "mc", q: "Quelle proportion des embauches se fait en CDI ?", o: ["Un tiers", "La plupart", "La moitié"] }
      ]
    },
    culture: { t: "Het SMIC, de CAC 40 en praten over geld", html: `<p>Het Franse minimumloon heet <b>le SMIC</b> en wordt elk jaar automatisch aangepast aan de inflatie. Een <i>smicard</i> is iemand die het verdient. De beursindex van Parijs is de <b>CAC 40</b>, en het statistiekbureau dat alle cijfers levert, is <b>l'INSEE</b>.</p>
<p>Over je eigen salaris praten is in Frankrijk veel meer taboe dan in Nederland. De vraag <i>«Tu gagnes combien ?»</i> stel je hooguit aan goede vrienden. Lonen worden bovendien bijna altijd <b>per maand</b> en vaak <b>bruto</b> genoemd (<i>brut</i> tegenover <i>net</i>).</p>
<p>Let op bij grote bedragen: Fransen schrijven <b>1 234,50 €</b>, met een spatie tussen de duizendtallen, een komma voor de decimalen en het euroteken erachter. In Zwitserland zie je daarentegen <i>1'234.50</i>.</p>` },
    ex: [
      { t: "cloze", s: "Les prix ont augmenté ___ 5 %.", a: ["de"], o: ["de", "à", "en"], nl: "De prijzen zijn met 5 procent gestegen.", x: "De = het verschil.", tag: "fr-chiffres" },
      { t: "cloze", s: "Le taux est passé de 7 ___ 9 %.", a: ["à"], o: ["à", "de", "en"], nl: "Het percentage is van 7 naar 9 gegaan.", tag: "fr-chiffres" },
      { t: "cloze", s: "La dette s'élève ___ trois milliards d'euros.", a: ["à"], o: ["à", "de", "sur"], nl: "De schuld bedraagt drie miljard euro.", tag: "fr-chiffres" },
      { t: "cloze", s: "La ville compte deux ___ d'habitants.", a: ["millions"], o: ["millions", "million", "mille"], nl: "De stad telt twee miljoen inwoners.", x: "Uitzondering: million is een zelfstandig naamwoord: -s en de.", tag: "fr-chiffres" },
      { t: "cloze", s: "La plupart des gens ___ d'accord.", a: ["sont"], o: ["sont", "est", "soit"], nl: "De meeste mensen zijn het eens.", x: "Uitzondering: la plupart ziet er enkelvoud uit, maar krijgt het meervoud.", tag: "fr-accord-verbe" },
      { t: "cloze", s: "Tout le monde ___ là.", a: ["est"], o: ["est", "sont", "es"], nl: "Iedereen is er.", tag: "fr-accord-verbe" },
      { t: "mc", q: "Welke zin is correct?", o: ["Le nombre de chômeurs diminue.", "Le nombre de chômeurs diminuent.", "Le nombre des chômeurs diminuons."], x: "Le nombre de: het getal zelf daalt, enkelvoud.", tag: "fr-accord-verbe" },
      { t: "mc", q: "Van 7 % naar 9 %: hoe zeg je dat correct?", o: ["une hausse de deux points", "une hausse de 2 %", "une hausse à deux points"], tag: "fr-chiffres" },
      { t: "mc", q: "Hoe spreek je 3,5 % uit?", o: ["trois virgule cinq pour cent", "trois point cinq pour cent", "trois et demi pour cents"], tag: "fr-chiffres" },
      { t: "tr", nl: "De verkoop is verdubbeld.", a: ["Les ventes ont doublé."], tag: "fr-chiffres" },
      { t: "tr", nl: "Een derde van de Fransen woont alleen.", a: ["Un tiers des Français vivent seuls.", "Un tiers des Français vit seul."], tag: "fr-accord-verbe" },
      { t: "tr", nl: "De koopkracht daalt.", a: ["Le pouvoir d'achat recule.", "Le pouvoir d'achat baisse.", "Le pouvoir d'achat diminue."], tag: "fr-chiffres" },
      { t: "order", s: "La croissance devrait atteindre un pour cent l'an prochain.", nl: "De groei zou volgend jaar één procent moeten bereiken.", tag: "fr-ordre" },
      { t: "match", p: [["grimper", "klimmen"], ["chuter", "kelderen"], ["stagner", "stagneren"], ["atteindre", "bereiken"], ["dépasser", "overschrijden"]], tag: "fr-chiffres" }
    ],
    reading: {
      t: "Le logement, premier poste de dépense", type: "Economische analyse",
      p: [
        ["En vingt ans, les prix de l'immobilier ont plus que doublé dans les grandes villes françaises, alors que les salaires n'ont augmenté que de 35 %. La plupart des jeunes ménages consacrent aujourd'hui plus d'un tiers de leurs revenus à leur logement ; à Paris, cette part atteint souvent la moitié.", "In twintig jaar zijn de vastgoedprijzen in de grote Franse steden meer dan verdubbeld, terwijl de lonen maar met 35 procent zijn gestegen. De meeste jonge huishoudens besteden nu meer dan een derde van hun inkomen aan wonen; in Parijs bedraagt dat aandeel vaak de helft."],
        ["Le nombre de propriétaires, lui, stagne. Un grand nombre de trentenaires renoncent à acheter : avec des taux passés de 1 à 4 % en deux ans, la mensualité d'un même emprunt a grimpé de près de 30 %. La majorité des agences constate une chute des ventes.", "Het aantal eigenaren stagneert daarentegen. Een groot aantal dertigers ziet af van kopen: nu de rente in twee jaar van 1 naar 4 procent is gegaan, is de maandlast van eenzelfde lening met bijna 30 procent gestegen. De meerderheid van de makelaars stelt een daling van de verkopen vast."],
        ["Faut-il s'en inquiéter ? Certains économistes estiment que les prix devraient baisser de 5 à 10 % d'ici deux ans. D'autres rappellent que tout le monde n'y gagnera pas : ceux qui ont acheté au plus haut verront la valeur de leur bien reculer.", "Moeten we ons daar zorgen over maken? Sommige economen menen dat de prijzen binnen twee jaar met 5 tot 10 procent zouden moeten dalen. Anderen wijzen erop dat niet iedereen daarbij wint: wie op het hoogtepunt kocht, ziet de waarde van zijn bezit teruglopen."]
      ],
      gl: [["l'immobilier", "het vastgoed"], ["le ménage", "het huishouden"], ["consacrer à", "besteden aan"], ["l'emprunt", "de lening"], ["la mensualité", "de maandlast"]],
      q: [
        { t: "mc", q: "De combien les salaires ont-ils augmenté en vingt ans ?", o: ["De 35 %", "De plus de 100 %", "De 4 %"] },
        { t: "mc", q: "Pourquoi beaucoup de trentenaires renoncent-ils à acheter ?", o: ["Les taux d'intérêt ont fortement augmenté", "Il n'y a plus de logements", "Les salaires ont baissé"] },
        { t: "mc", q: "Qui perdrait si les prix baissaient ?", o: ["Ceux qui ont acheté au plus haut", "Les jeunes ménages", "Les locataires"] }
      ]
    },
    say: [["Les prix ont augmenté de cinq pour cent.", "De prijzen zijn met vijf procent gestegen."], ["Le taux est passé de sept à neuf pour cent.", "Het percentage is van zeven naar negen procent gegaan."], ["La plupart des gens sont d'accord.", "De meeste mensen zijn het eens."], ["Le pouvoir d'achat recule.", "De koopkracht daalt."]],
    task: { nl: "Beschrijf in 5 zinnen een ontwikkeling in cijfers (huurprijzen, je eigen uitgaven, het aantal inwoners van je stad). Gebruik augmenter/diminuer de, passer de… à, één breuk en één keer la plupart of le nombre de.", model: "En cinq ans, les loyers de ma ville ont augmenté de 20 %. Le prix moyen d'un studio est passé de 700 à 840 euros. La plupart des étudiants consacrent désormais la moitié de leur budget au logement. Le nombre de chambres disponibles, lui, n'a pas bougé. Selon la mairie, les prix devraient se stabiliser l'an prochain." },
    scenario: { nl: "Je bent als econoom te gast in een Frans radioprogramma en geeft commentaar op de nieuwste cijfers.", role: "You are a radio host on a French business programme in Paris. Interview the learner, an economist, about today's figures: unemployment, inflation, wages, housing prices. Give them a few numbers to comment on (e.g. unemployment from 7.5 to 7.1 %, wages +2 %, inflation 2.6 %) and ask what they mean for ordinary people and what to expect next year. If they confuse 'augmenter de' and 'augmenter à', use a singular verb after 'la plupart', or say 'point' for the decimal comma, restate it correctly in your next question. Use vous and a brisk radio tone.", goal: "Becommentarieer twee cijfers met augmenter/baisser de en passer de… à, en gebruik één keer la plupart met het juiste werkwoord." }
  });

  /* ───────────────────────── C1 · 8 ───────────────────────── */
  U({
    id: "fr-c1-08", level: "C1", icon: "🎓", title: "Étant donné que…", nl: "Het betoog: oorzaak, gevolg en doel in verzorgd Frans",
    goals: ["Een betoog (dissertation) opbouwen met these, antithese en synthese", "Oorzaak, gevolg en doel uitdrukken met verzorgde voegwoorden", "Weten wanneer de sorte que de subjonctif krijgt", "Zinnen verkorten met ayant fini en étant arrivé"],
    vocab: [
      ["la dissertation", "het betoog / essay"], ["la problématique", "de probleemstelling"], ["la thèse", "de stelling"], ["l'antithèse", "de tegenstelling"], ["la synthèse", "de synthese"], ["l'argument", "het argument"],
      ["étant donné que", "aangezien"], ["vu que", "aangezien (neutraal)"], ["du fait que", "doordat"], ["sous prétexte que", "onder het voorwendsel dat"], ["faute de", "bij gebrek aan"], ["à force de", "door steeds maar te"],
      ["si bien que", "zodat (gevolg)"], ["de sorte que", "zodat"], ["au point que", "zozeer dat"], ["d'où", "vandaar"], ["par conséquent", "bijgevolg"], ["dès lors", "derhalve"],
      ["afin que", "opdat"], ["de peur que", "uit angst dat"], ["en vue de", "met het oog op"], ["découler de", "voortvloeien uit"], ["entraîner", "tot gevolg hebben"], ["susciter", "opwekken / uitlokken"],
      ["remettre en cause", "ter discussie stellen"], ["nuancer", "nuanceren"], ["il convient de", "het is gepast om"], ["force est de constater que", "we moeten wel vaststellen dat"]
    ],
    grammar: [
      { t: "Oorzaak, gevolg en doel: welke wijs?", es: "Cause, conséquence, but",
        html: `<p>In een betoog leg je voortdurend verbanden. Het Frans heeft daarvoor drie families voegwoorden, en de wijs volgt een heldere logica: wat <b>een feit</b> is, krijgt de <b>indicatif</b>; wat <b>nog bereikt moet worden</b>, krijgt de <b>subjonctif</b>.</p>
<p><b>Oorzaak (een feit → indicatif):</b> <i><b>étant donné que, vu que, du fait que, d'autant plus que</b></i> (te meer omdat), <i><b>sous prétexte que</b></i> (de spreker gelooft het niet).<br><i>Étant donné que les ressources <b>sont</b> limitées, il faut choisir.</i><br>Met een naamwoord of infinitief: <i><b>en raison de, du fait de, faute de</b> moyens · <b>à force de</b> répéter · <b>pour avoir</b> menti</i> (omdat hij gelogen had).</p>
<p><b>Gevolg (een feit → indicatif):</b> <i><b>si bien que, de sorte que, au point que, tellement… que, si… que</b></i>.<br><i>Il a plu toute la nuit, <b>si bien que</b> la route <b>est</b> coupée.</i><br>Als los zinsbegin: <i><b>par conséquent, dès lors, c'est pourquoi, d'où</b> + naamwoord</i>: <i>Il n'a pas été prévenu, <b>d'où</b> sa colère.</i></p>
<p><b>Doel (nog niet bereikt → subjonctif):</b> <i><b>afin que, pour que, de peur que, de crainte que</b></i>.<br><i>Je le répète <b>afin que</b> tout le monde <b>comprenne</b>.</i></p>
<p>⚠️ <b>Uitzondering: de sorte que, de façon que en de manière que kunnen allebei.</b> Met <b>indicatif</b> is het een <b>gevolg</b> dat er is; met <b>subjonctif</b> een <b>doel</b> dat je nastreeft. Vergelijk:<br><i>Il a parlé fort, <b>de sorte que</b> tout le monde l'<b>a</b> entendu.</i> (resultaat: ze hoorden hem)<br><i>Parlez fort, <b>de sorte que</b> tout le monde vous <b>entende</b>.</i> (bedoeling: opdat ze u horen)<br>Waarom? De wijs zegt of het resultaat <b>werkelijkheid</b> of <b>wens</b> is; het voegwoord zelf laat dat open.</p>
<p>⚠️ <b>Uitzondering: non que krijgt de subjonctif, hoewel het over een oorzaak gaat.</b> <i>Il a refusé, <b>non qu'</b>il <b>soit</b> contre, mais il manque de temps.</i> Waarom? Je <b>verwerpt</b> die oorzaak; ze is dus geen feit.</p>
<p>⚠️ <b>Let op gelijke onderwerpen:</b> zijn hoofdzin en bijzin over dezelfde persoon, gebruik dan de infinitief: <i>Je me lève tôt <b>afin de</b> ne pas être en retard</i> (niet <s>afin que je ne sois pas</s>). Net zo: <i>de peur <b>de</b> tomber, de façon <b>à</b> gagner du temps</i>.</p>`,
        table: [["verband", "voegwoord", "wijs"], ["oorzaak", "étant donné que, vu que", "indicatif"], ["verworpen oorzaak", "non que", "subjonctif"], ["gevolg", "si bien que, au point que", "indicatif"], ["doel", "afin que, de peur que", "subjonctif"], ["gevolg of doel", "de sorte que, de façon que", "indicatif of subjonctif"]],
        ex: [["Étant donné que les avis divergent, il convient de nuancer.", "Aangezien de meningen uiteenlopen, is het gepast te nuanceren."], ["Il s'est expliqué clairement, de sorte qu'il n'y ait aucun malentendu.", "Hij heeft zich helder verklaard, opdat er geen enkel misverstand zou zijn."]] },
      { t: "Zinnen verkorten: ayant fini, étant arrivé", es: "Le participe composé et la proposition participiale",
        html: `<p>Geschreven Frans houdt van compacte zinnen. In plaats van <i>comme il avait fini</i> of <i>après qu'il a fini</i> kun je een deelwoordconstructie gebruiken.</p>
<p><b>Participe présent</b> (gelijktijdig, vaak oorzaak): <i><b>Sachant</b> qu'il était tard, elle est partie.</i> (omdat ze wist…)<br><b>Participe composé</b> = <b>ayant / étant + voltooid deelwoord</b> (eerder gebeurd): <i><b>Ayant terminé</b> son rapport, il est rentré.</i> (toen/omdat hij klaar was) · <i><b>Étant arrivée</b> en avance, elle a attendu.</i> · <i><b>S'étant trompé</b> de salle, il a manqué le début.</i></p>
<p>De keuze <i>ayant</i> of <i>étant</i> volgt het gewone hulpwerkwoord, en bij <i>étant</i> richt het deelwoord zich naar het onderwerp: <i>étant arrivé<b>e</b>, étant parti<b>s</b></i>.</p>
<p>⚠️ <b>Let op: het onderwerp moet hetzelfde zijn.</b> De deelwoordgroep slaat op het onderwerp van de hoofdzin. <i>Ayant fini le travail, <b>le directeur</b> m'a félicité</i> betekent dat <b>de directeur</b> het werk af had. Bedoel je jezelf, schrijf dan: <i>Ayant fini le travail, <b>j'</b>ai été félicité par le directeur.</i></p>
<p>⚠️ <b>Uitzondering: de proposition participiale heeft wél een eigen onderwerp.</b> Dan staat dat onderwerp er uitdrukkelijk bij, vóór het deelwoord: <i><b>Le directeur étant</b> absent, la réunion est reportée.</i> · <i><b>La pluie ayant</b> cessé, nous sommes sortis.</i> · <i><b>Le dîner terminé</b>, chacun est rentré.</i> (met weggelaten <i>étant</i>). Waarom mag het hier wel? Omdat het onderwerp genoemd wordt, is er geen verwarring mogelijk. Het is de erfgenaam van de Latijnse <i>ablativus absolutus</i> en hoort bij verzorgde schrijftaal.</p>
<p>⚠️ <b>Participe présent of bijvoeglijk naamwoord?</b> Het deelwoord is <b>onveranderlijk</b> (<i>des arguments <b>convainquant</b> le jury</i>), het bijvoeglijk naamwoord past zich aan en heeft soms een andere spelling: <i>des arguments <b>convaincants</b></i>. Zo ook <i>fatiguant / fatigant, différant / différent, précédant / précédent, négligeant / négligent</i>. Waarom? Het bijvoeglijk naamwoord is een eigen woord geworden met een eigen spelling; het deelwoord blijft trouw aan de werkwoordsstam.</p>`,
        table: [["voluit", "verkort"], ["Comme il avait fini, il est parti.", "Ayant fini, il est parti."], ["Après qu'elle est arrivée, elle a téléphoné.", "Étant arrivée, elle a téléphoné."], ["Comme le directeur est absent, …", "Le directeur étant absent, …"], ["Quand le dîner a été terminé, …", "Le dîner terminé, …"], ["Parce qu'il s'était trompé, …", "S'étant trompé, …"]],
        ex: [["N'ayant pas reçu de réponse, je me permets de vous relancer.", "Aangezien ik geen antwoord heb ontvangen, ben ik zo vrij u opnieuw te benaderen."], ["Les avis étant partagés, le vote a été reporté.", "Omdat de meningen verdeeld waren, is de stemming uitgesteld."]] }
    ],
    dialogue: {
      t: "Le brouillon de Tom", place: "Lyon 🇫🇷",
      lines: [
        ["Tom", "Madame, j'ai fini mon brouillon. Le sujet, c'est : « Le progrès technique rend-il plus libre ? »", "Mevrouw, ik heb mijn kladversie af. Het onderwerp is: 'Maakt technische vooruitgang vrijer?'"],
        ["Nadège", "Voyons. Vous répondez oui dès la première ligne. Or, une dissertation ne commence jamais par la réponse.", "Eens kijken. U antwoordt ja op de eerste regel. Maar een betoog begint nooit met het antwoord."],
        ["Tom", "Ah. Aux Pays-Bas, on nous apprend à donner notre avis tout de suite.", "O. In Nederland leren we onze mening meteen te geven."],
        ["Nadège", "Ici, on pose d'abord la problématique. Étant donné que le mot « libre » a plusieurs sens, il convient de le définir.", "Hier stellen we eerst het probleem. Aangezien het woord 'vrij' meerdere betekenissen heeft, is het gepast het te definiëren."],
        ["Tom", "Et ensuite, thèse, antithèse, synthèse ?", "En daarna these, antithese, synthese?"],
        ["Nadège", "Exactement. Et reliez vos idées. Vous écrivez : « Les machines travaillent. Nous avons du temps. » Liez-les.", "Precies. En verbind uw ideeën. U schrijft: 'De machines werken. Wij hebben tijd.' Verbind ze."],
        ["Tom", "« Les machines travaillent à notre place, si bien que nous avons davantage de temps » ?", "'De machines werken in onze plaats, zodat we meer tijd hebben'?"],
        ["Nadège", "Très bien. Et ici : « Comme il a observé les usines, Marx conclut que… » Plus élégant ?", "Heel goed. En hier: 'Omdat hij de fabrieken heeft geobserveerd, concludeert Marx dat…' Eleganter?"],
        ["Tom", "« Ayant observé les usines, Marx conclut que la machine asservit l'ouvrier. »", "'Na de fabrieken te hebben geobserveerd, concludeert Marx dat de machine de arbeider tot slaaf maakt.'"],
        ["Nadège", "Parfait. Récrivez l'introduction, de sorte que le lecteur comprenne où vous allez sans connaître déjà la réponse.", "Perfect. Herschrijf de inleiding, zodat de lezer begrijpt waar u heen gaat zonder het antwoord al te kennen."]
      ],
      q: [
        { t: "mc", q: "Quelle erreur Tom a-t-il faite dans son introduction ?", o: ["Il donne sa réponse dès la première ligne", "Il n'a pas de conclusion", "Il a fait trop de fautes"] },
        { t: "mc", q: "Pourquoi faut-il définir le mot « libre » ?", o: ["Parce qu'il a plusieurs sens", "Parce qu'il est difficile à écrire", "Parce que Tom ne le connaît pas"] },
        { t: "mc", q: "Comment Tom relie-t-il ses deux phrases courtes ?", o: ["Avec « si bien que »", "Avec « afin que »", "Avec « bien que »"] }
      ]
    },
    culture: { t: "La dissertation en het vak filosofie", html: `<p>Elke Franse scholier legt op zijn achttiende een examen <b>filosofie</b> af: vier uur om een betoog te schrijven over een vraag als <i>«Peut-on être heureux sans être libre ?»</i> De onderwerpen van het <b>bac philo</b> halen elk jaar het journaal, en volwassenen bespreken ze aan de koffietafel.</p>
<p>De vorm ligt vast: een inleiding die de vraag <b>problematiseert</b> zonder haar te beantwoorden, een ontwikkeling in twee of drie delen (vaak <b>thèse, antithèse, synthèse</b>) en een slot dat de balans opmaakt. Een eigen mening in de ik-vorm aan het begin geldt als beginnersfout.</p>
<p>Voor Nederlanders, die leren om «to the point» te zijn, voelt dat omslachtig. Fransen zien het omgekeerd: wie meteen concludeert, heeft niet nagedacht. Die schoolse vorm klinkt door in krantencommentaren, zakelijke nota's en zelfs in politieke toespraken.</p>` },
    ex: [
      { t: "cloze", s: "Je le répète afin que tout le monde ___ .", a: ["comprenne"], o: ["comprenne", "comprend", "comprendra"], nl: "Ik herhaal het opdat iedereen het begrijpt.", x: "Doel: subjonctif.", tag: "fr-cause2" },
      { t: "cloze", s: "Il a plu toute la nuit, si bien que la route ___ coupée.", a: ["est"], o: ["est", "soit", "serait"], nl: "Het heeft de hele nacht geregend, zodat de weg is afgesloten.", x: "Gevolg (een feit): indicatif.", tag: "fr-cause2" },
      { t: "cloze", s: "Parlez fort, de sorte que tout le monde vous ___ .", a: ["entende"], o: ["entende", "entend", "entendra"], nl: "Spreek luid, zodat iedereen u hoort.", x: "Uitzondering: de sorte que + subjonctif als het een doel is.", tag: "fr-cause2" },
      { t: "cloze", s: "Il a refusé, non qu'il ___ contre, mais il manque de temps.", a: ["soit"], o: ["soit", "est", "était"], nl: "Hij heeft geweigerd, niet omdat hij tegen is, maar hij heeft geen tijd.", x: "Uitzondering: non que verwerpt de oorzaak, dus subjonctif.", tag: "fr-cause2" },
      { t: "cloze", s: "___ terminé son rapport, il est rentré chez lui.", a: ["Ayant"], o: ["Ayant", "Étant", "Avoir"], nl: "Toen hij zijn rapport af had, ging hij naar huis.", tag: "fr-part-comp" },
      { t: "cloze", s: "Le directeur ___ absent, la réunion est reportée.", a: ["étant"], o: ["étant", "ayant", "est"], nl: "Aangezien de directeur afwezig is, wordt de vergadering uitgesteld.", x: "Proposition participiale: eigen onderwerp vóór het deelwoord.", tag: "fr-part-comp" },
      { t: "mc", q: "Welke zin is correct (ik stond vroeg op om niet te laat te komen)?", o: ["Je me lève tôt afin de ne pas être en retard.", "Je me lève tôt afin que je ne sois pas en retard.", "Je me lève tôt afin que ne pas être en retard."], x: "Zelfde onderwerp: infinitief.", tag: "fr-cause2" },
      { t: "mc", q: "«Étant arrivé__ en avance, Sanne a attendu.» Wat komt er op de streep?", o: ["-e (arrivée)", "niets (arrivé)", "-s (arrivés)"], tag: "fr-part-comp" },
      { t: "mc", q: "Welke spelling is het bijvoeglijk naamwoord?", o: ["un travail fatigant", "un travail fatiguant", "un travail fatigand"], x: "Uitzondering: het bijvoeglijk naamwoord heeft een eigen spelling zonder u.", tag: "fr-part-comp" },
      { t: "tr", nl: "Aangezien de middelen beperkt zijn, moeten we kiezen.", a: ["Étant donné que les ressources sont limitées, il faut choisir.", "Étant donné que les moyens sont limités, il faut choisir.", "Vu que les moyens sont limités, il faut choisir."], tag: "fr-cause2" },
      { t: "tr", nl: "Hij is niet gewaarschuwd, vandaar zijn woede.", a: ["Il n'a pas été prévenu, d'où sa colère."], tag: "fr-cause2" },
      { t: "tr", nl: "Omdat de meningen verdeeld waren, is de stemming uitgesteld.", a: ["Les avis étant partagés, le vote a été reporté.", "Comme les avis étaient partagés, le vote a été reporté."], tag: "fr-part-comp" },
      { t: "order", s: "N'ayant pas reçu de réponse, je me permets de vous relancer.", nl: "Aangezien ik geen antwoord heb ontvangen, ben ik zo vrij u opnieuw te benaderen.", tag: "fr-ordre" },
      { t: "match", p: [["étant donné que", "aangezien"], ["si bien que", "zodat"], ["afin que", "opdat"], ["faute de", "bij gebrek aan"], ["dès lors", "derhalve"]], tag: "fr-cause2" }
    ],
    reading: {
      t: "Le progrès technique rend-il plus libre ?", type: "Betoog (inleiding en slot)",
      p: [
        ["On associe volontiers le progrès technique à la liberté : la machine nous délivrerait des tâches pénibles, si bien que nous disposerions de plus de temps pour nous-mêmes. Pourtant, étant donné que chaque outil crée de nouvelles dépendances, il convient de se demander si cette libération n'est pas, en partie, une illusion.", "We verbinden technische vooruitgang graag met vrijheid: de machine zou ons bevrijden van zware taken, zodat we meer tijd voor onszelf zouden hebben. Toch is het, aangezien elk werktuig nieuwe afhankelijkheden schept, gepast ons af te vragen of die bevrijding niet deels een illusie is."],
        ["Ayant montré que la technique libère du temps, puis qu'elle impose son propre rythme, nous pouvons dépasser cette opposition. Ce n'est pas l'outil qui asservit ou libère, mais l'usage que l'on en fait. Le téléphone ne nous enchaîne que faute de savoir l'éteindre.", "Nu we hebben aangetoond dat de techniek tijd vrijmaakt en vervolgens dat ze haar eigen ritme oplegt, kunnen we deze tegenstelling overstijgen. Niet het werktuig maakt tot slaaf of bevrijdt, maar het gebruik dat men ervan maakt. De telefoon ketent ons alleen doordat we hem niet weten uit te zetten."],
        ["Force est donc de constater que le progrès technique n'est une condition ni suffisante ni même nécessaire de la liberté. Il l'élargit, non qu'il la produise par lui-même, mais parce qu'il multiplie les choix possibles. Encore faut-il être capable de choisir.", "We moeten dus wel vaststellen dat technische vooruitgang geen voldoende en zelfs geen noodzakelijke voorwaarde voor vrijheid is. Hij verruimt haar, niet omdat hij haar uit zichzelf voortbrengt, maar omdat hij de mogelijke keuzes vermenigvuldigt. Dan moet men nog wel in staat zijn te kiezen."]
      ],
      gl: [["délivrer de", "bevrijden van"], ["pénible", "zwaar / moeizaam"], ["asservir", "tot slaaf maken"], ["enchaîner", "ketenen"], ["encore faut-il", "dan moet men nog wel"]],
      q: [
        { t: "mc", q: "Que fait l'introduction ?", o: ["Elle pose la question sans y répondre", "Elle donne l'avis de l'auteur", "Elle résume la conclusion"] },
        { t: "mc", q: "Selon la synthèse, qu'est-ce qui libère ou asservit ?", o: ["L'usage que l'on fait de l'outil", "L'outil lui-même", "Le temps libre"] },
        { t: "mc", q: "Quelle est la conclusion ?", o: ["La technique multiplie les choix, mais il faut savoir choisir", "La technique rend toujours libre", "La technique est dangereuse"] }
      ]
    },
    say: [["Étant donné que les avis divergent, il convient de nuancer.", "Aangezien de meningen uiteenlopen, is het gepast te nuanceren."], ["Je le répète afin que tout le monde comprenne.", "Ik herhaal het opdat iedereen het begrijpt."], ["Ayant terminé son rapport, il est rentré.", "Toen hij zijn rapport af had, ging hij naar huis."], ["Force est de constater que rien n'a changé.", "We moeten wel vaststellen dat er niets veranderd is."]],
    task: { nl: "Schrijf de inleiding van een betoog (5 zinnen) over de vraag «Faut-il toujours dire la vérité ?». Geef geen antwoord, maar stel het probleem. Gebruik étant donné que, si bien que of de sorte que, en één deelwoordconstructie (ayant…, étant…).", model: "Dire la vérité passe pour une vertu que l'on enseigne dès l'enfance. Pourtant, ayant tous menti un jour pour épargner quelqu'un, nous savons que la sincérité peut blesser. Étant donné que la vérité n'est pas toujours bonne à entendre, il convient de se demander si elle constitue un devoir absolu. Certains mensonges protègent, si bien que la franchise semble parfois cruelle. Faut-il dès lors préférer la vérité à la bienveillance ?" },
    scenario: { nl: "Je bespreekt je kladversie van een betoog met een Franse docente filosofie in Lyon.", role: "You are Nadège, a philosophy teacher at a lycée in Lyon, demanding but kind. The learner is a Dutch exchange student who has drafted a dissertation on a question you agree on together at the start (e.g. 'Faut-il toujours dire la vérité ?'). Ask for their problématique, their plan (thèse, antithèse, synthèse) and one argument per part. Push them to link ideas with étant donné que, si bien que, de sorte que, afin que, and to shorten a sentence with ayant/étant + participe. Correct mood errors after afin que / de sorte que by reformulating. Use vous.", goal: "Formuleer een probleemstelling, verbind twee ideeën met si bien que of étant donné que, en gebruik één keer afin que met de subjonctif." }
  });

  /* ───────────────────────── C1 · 9 ───────────────────────── */
  U({
    id: "fr-c1-09", level: "C1", icon: "🌐", title: "Septante, nonante, tantôt", nl: "Het Frans van België, Zwitserland, Québec en Afrika",
    goals: ["Belgisch, Zwitsers, Canadees en Afrikaans Frans herkennen", "Regionale woorden en getallen begrijpen en plaatsen", "Anglicismen herkennen en het Franse alternatief kennen", "Weten welk woord je waar gebruikt"],
    vocab: [
      ["septante", "zeventig (België, Zwitserland)"], ["nonante", "negentig (België, Zwitserland)"], ["huitante", "tachtig (delen van Zwitserland)"], ["le déjeuner / le dîner / le souper", "ontbijt / middageten / avondeten (België, Zwitserland, Québec)"], ["une fois", "eens (Belgisch stopwoord)"], ["savoir", "kunnen (België: je ne sais pas venir)"],
      ["le GSM", "de mobiele telefoon (België)"], ["le natel", "de mobiele telefoon (Zwitserland)"], ["le cellulaire", "de mobiele telefoon (Québec)"], ["le portable", "de mobiele telefoon (Frankrijk)"], ["la drache", "de plensbui (België)"], ["le kot", "de studentenkamer (België)"],
      ["la blonde", "de vriendin (Québec)"], ["le chum", "de vriend / het vriendje (Québec)"], ["magasiner", "winkelen (Québec)"], ["le char", "de auto (Québec)"], ["la fin de semaine", "het weekend (Québec)"], ["le courriel", "de e-mail (Québec, officieel)"],
      ["l'essencerie", "het tankstation (West-Afrika)"], ["le maquis", "het eethuisje (Ivoorkust)"], ["ambiancer", "feesten / sfeer maken (Afrika)"], ["présentement", "op dit moment (Québec, Afrika)"], ["le logiciel", "de software"], ["le mot-dièse", "de hashtag"],
      ["la francophonie", "de Franstalige wereld"], ["l'accent", "het accent"], ["le parler", "de spreektaal / het dialect"], ["l'emprunt", "het leenwoord"]
    ],
    grammar: [
      { t: "Eén taal, vele normen", es: "Les variétés du français",
        html: `<p>Frans is de moedertaal of de dagelijkse taal van ruim 300 miljoen mensen op vijf continenten, en de meerderheid woont <b>buiten Frankrijk</b>. Elke regio heeft eigen woorden, en soms eigen grammatica. Geen van die varianten is «fout»: het zijn <b>normen naast elkaar</b>.</p>
<p><b>België 🇧🇪 en Zwitserland 🇨🇭: de getallen.</b> <i><b>septante</b></i> (70), <i><b>nonante</b></i> (90); in de kantons Vaud, Valais en Fribourg ook <i><b>huitante</b></i> (80). België zegt wel <i>quatre-vingts</i>.</p>
<p>⚠️ <b>Uitzondering: hier is Frankrijk zelf de uitzondering.</b> <i>Soixante-dix</i> en <i>quatre-vingt-dix</i> zijn resten van een oud twintigtallig telsysteem; <i>septante</i> en <i>nonante</i> zijn de regelmatige, Latijnse vormen. Waarom houdt Frankrijk eraan vast? De Académie koos in de 17e eeuw voor het Parijse gebruik. Belgen en Zwitsers rekenen dus eenvoudiger.</p>
<p><b>De maaltijden.</b> In België, Zwitserland en Québec: <i>le <b>déjeuner</b></i> (ochtend), <i>le <b>dîner</b></i> (middag), <i>le <b>souper</b></i> (avond). In Frankrijk is alles een plaats opgeschoven: <i>petit-déjeuner, déjeuner, dîner</i>. Spreek je met een Belg af voor <i>le dîner</i>, vraag dan het uur!</p>
<p><b>Belgische grammatica:</b> <i><b>savoir</b></i> voor «kunnen»: <i>Je ne <b>sais</b> pas venir demain</i> (FR: <i>je ne <b>peux</b> pas</i>). <i><b>Tantôt</b></i> = straks of daarnet (FR: vanmiddag). <i>À <b>tantôt</b> !</i> = tot straks. Voor Nederlandstaligen voelt Belgisch Frans vaak vertrouwd, omdat het onder invloed van het Nederlands staat: <i>une fois</i> («eens»), <i>le kot, la drache</i>.</p>
<p><b>Québec 🇨🇦:</b> <i><b>tu</b></i> als vraagpartikel: <i>Tu viens-<b>tu</b> ? C'est-<b>tu</b> correct ?</i> · <i>la blonde, le chum, le char, magasiner</i> · <i><b>Bienvenue !</b></i> als antwoord op <i>merci</i> (naar <i>you're welcome</i>).</p>
<p><b>Afrika 🌍:</b> Frans is officiële taal in ruim twintig landen. Typisch: <i>l'essencerie</i> (Senegal), <i>le maquis</i> (Ivoorkust), <i>ambiancer</i>, <i>présentement</i>, en het creatieve Ivoriaanse straatfrans <b>nouchi</b>.</p>
<p>⚠️ <b>Let op valse vrienden tussen varianten:</b> <i>les gosses</i> = kinderen in Frankrijk, maar een grof woord voor teelballen in Québec. <i>Une liqueur</i> = likeur in Frankrijk, frisdrank in Québec.</p>`,
        table: [["Frankrijk", "elders", "waar"], ["soixante-dix", "septante", "België, Zwitserland"], ["quatre-vingt-dix", "nonante", "België, Zwitserland"], ["le dîner (avond)", "le souper", "België, Zwitserland, Québec"], ["le portable", "le GSM · le natel · le cellulaire", "België · Zwitserland · Québec"], ["faire du shopping", "magasiner", "Québec"], ["la station-service", "l'essencerie", "Senegal"]],
        ex: [["Il a nonante-deux ans et il habite à Namur.", "Hij is tweeënnegentig en woont in Namen."], ["On va souper chez ma blonde en fin de semaine.", "We gaan in het weekend bij mijn vriendin eten. (Québec)"]] },
      { t: "Anglicismen: le week-end of la fin de semaine?", es: "Les anglicismes",
        html: `<p>Het Frans leent al eeuwen uit het Engels, en vecht er even lang tegen. Je moet de leenwoorden <b>herkennen</b>, weten hoe ze zich <b>gedragen</b>, en het officiële alternatief <b>kennen</b>.</p>
<p><b>Ingeburgerd in Frankrijk:</b> <i>le week-end, le parking, le shopping, le smartphone, le mail, le job, cool, un challenge, le marketing</i>.<br><b>Officiële alternatieven</b> (vooral in Québec en in overheidsteksten): <i>la fin de semaine, le stationnement, le magasinage, le téléphone intelligent, le courriel, le défi, la mercatique</i>. Sommige zijn echt doorgebroken: <i>le <b>logiciel</b></i> (software), <i>l'<b>ordinateur</b></i> (computer), <i>le <b>baladeur</b></i>, <i>télécharger</i> (downloaden).</p>
<p>⚠️ <b>Uitzondering: Québec leent minder woorden, maar meer constructies.</b> Québécois zeggen <i>stationnement</i> en <i>courriel</i>, maar ook <i>tomber en amour</i> (to fall in love), <i>prendre une marche</i> (to take a walk), <i>bienvenue</i> (you're welcome). Fransen zeggen <i>parking</i>, maar <i>tomber amoureux</i>. Waarom? Québec is omringd door Engels en verdedigt de <b>woordenschat</b> bewust bij wet (<i>la loi 101</i>); de dagelijkse tweetaligheid sluipt ongemerkt in de <b>zinsbouw</b>.</p>
<p><b>Hoe gedragen leenwoorden zich?</b> Ze worden bijna altijd <b>mannelijk</b> (<i>le week-end, le job</i>; maar in Québec: <i>la job</i>!), werkwoorden gaan naar de <b>-er</b>-groep (<i>liker, spoiler, googler, checker</i>), en het meervoud krijgt een gewone <b>-s</b> (<i>des week-ends</i>).</p>
<p>⚠️ <b>Let op de valse anglicismen:</b> woorden die Engels lijken maar het niet zijn. <i>Un <b>parking</b></i> = a car park; <i>un <b>smoking</b></i> = a dinner jacket; <i>un <b>footing</b></i> = jogging; <i>un <b>pressing</b></i> = een stomerij; <i>un <b>brushing</b></i> = föhnen; <i>les <b>baskets</b></i> = sportschoenen; <i>un <b>camping-car</b></i> = een camper. Een Engelsman begrijpt ze niet. Waarom bestaan ze? Het Frans nam de <b>-ing</b>-vorm als etiket voor «plaats of activiteit» en ging er zelf mee verder.</p>
<p>⚠️ <b>En de semantische anglicismen</b>, Franse woorden met een Engelse betekenis, die in verzorgde tekst als fout gelden: <i><s>réaliser</s> que</i> → <i>se rendre compte que</i>; <i><s>supporter</s> une équipe</i> → <i>soutenir</i>; <i><s>définitivement</s></i> (definitely) → <i>absolument</i>; <i><s>opportunité</s></i> → <i>occasion</i>; <i><s>digital</s></i> → <i>numérique</i>.</p>`,
        table: [["anglicisme", "Frans alternatief", "opmerking"], ["le mail", "le courriel", "courriel is officieel"], ["le week-end", "la fin de semaine", "Québec"], ["le software", "le logiciel", "logiciel heeft gewonnen"], ["digital", "numérique", "digital = van de vinger"], ["réaliser que", "se rendre compte que", "semantisch anglicisme"], ["un parking", "(Engels: car park)", "vals anglicisme"]],
        ex: [["J'ai téléchargé le logiciel sur mon ordinateur.", "Ik heb de software op mijn computer gedownload."], ["Elle s'est rendu compte que le courriel n'était jamais parti.", "Ze besefte dat de e-mail nooit verzonden was."]] }
    ],
    dialogue: {
      t: "Au sommet de la Francophonie", place: "Bruxelles 🇧🇪",
      lines: [
        ["Mathieu", "Sanne ! On dîne ensemble ? Je connais un bon endroit près de la Grand-Place.", "Sanne! Eten we samen? Ik ken een goed adres bij de Grote Markt."],
        ["Sanne", "Volontiers. Vers vingt heures ?", "Graag. Rond acht uur 's avonds?"],
        ["Mathieu", "Vingt heures ? Ah non, je voulais dire à midi. Ici, le dîner, c'est le repas de midi. Le soir, on soupe.", "Acht uur? O nee, ik bedoelde 's middags. Hier is 'le dîner' het middageten. 's Avonds 'soupen' we."],
        ["Awa", "Chez nous à Dakar, c'est comme en France. Mais Félix, toi, tu soupes aussi, non ?", "Bij ons in Dakar is het zoals in Frankrijk. Maar Félix, jij 'soupt' toch ook?"],
        ["Félix", "Ben oui ! Pis après le souper, je prends une marche avec ma blonde.", "Jazeker! En na het avondeten maak ik een wandeling met mijn vriendin."],
        ["Sanne", "Ta blonde ? Elle est blonde ?", "Je 'blonde'? Is ze blond?"],
        ["Félix", "Pantoute ! Elle a les cheveux noirs. Une blonde, au Québec, c'est une copine.", "Helemaal niet! Ze heeft zwart haar. Een 'blonde' is in Québec een vriendin."],
        ["Mathieu", "Et ça coûte combien, ton hôtel, Félix ? Le mien, nonante-cinq euros la nuit.", "En hoeveel kost jouw hotel, Félix? Het mijne vijfennegentig euro per nacht."],
        ["Awa", "Nonante-cinq… quatre-vingt-quinze. J'adore. C'est tellement plus logique.", "Nonante-cinq… vijfennegentig. Geweldig. Dat is zoveel logischer."],
        ["Sanne", "Quatre accents, quatre vocabulaires, et pourtant on se comprend. Bon, à tantôt alors, Mathieu ?", "Vier accenten, vier woordenschatten, en toch begrijpen we elkaar. Goed, tot straks dan, Mathieu?"],
        ["Mathieu", "À tantôt ! Tu vois, tu parles déjà belge.", "Tot straks! Zie je, je praat al Belgisch."]
      ],
      q: [
        { t: "mc", q: "Quel malentendu y a-t-il entre Sanne et Mathieu ?", o: ["« Dîner » veut dire le repas de midi en Belgique", "Sanne ne connaît pas la Grand-Place", "Mathieu n'a pas faim"] },
        { t: "mc", q: "Que veut dire « ma blonde » au Québec ?", o: ["Ma copine", "Ma bière", "Ma sœur"] },
        { t: "mc", q: "Combien coûte l'hôtel de Mathieu ?", o: ["95 euros", "75 euros", "85 euros"] }
      ]
    },
    culture: { t: "Wie bepaalt wat goed Frans is?", html: `<p>De <b>Académie française</b>, in 1635 opgericht door kardinaal Richelieu, telt veertig leden, <i>les Immortels</i>, die in een groen geborduurd pak met degen vergaderen onder de koepel aan de Seine. Ze werken al sinds 1986 aan de negende editie van hun woordenboek. Hun gezag is vooral symbolisch.</p>
<p>Québec heeft een strenger wapen: de <b>Office québécois de la langue française</b> en de <b>loi 101</b> (1977), die Frans tot enige officiële taal maakt. Vandaar dat een stopbord er <i>ARRÊT</i> zegt, terwijl in Frankrijk gewoon <i>STOP</i> staat.</p>
<p>De toekomst van het Frans ligt in <b>Afrika</b>: tegen 2050 woont naar schatting 85 procent van de Franstaligen daar. De grootste Franstalige stad ter wereld is nu al <b>Kinshasa</b>, niet Parijs. De <b>Organisation internationale de la Francophonie</b> (88 staten en regeringen) houdt om de twee jaar een top.</p>` },
    ex: [
      { t: "cloze", s: "En Belgique, 90 se dit ___ .", a: ["nonante"], o: ["nonante", "neuvante", "novante"], nl: "In België zeg je voor 90 nonante.", tag: "fr-franco" },
      { t: "cloze", s: "En Suisse et en Belgique, 70 se dit ___ .", a: ["septante"], o: ["septante", "soixante-dix", "settante"], nl: "In Zwitserland en België zeg je voor 70 septante.", x: "Frankrijk is hier de uitzondering met soixante-dix.", tag: "fr-franco" },
      { t: "cloze", s: "Au Québec, le repas du soir s'appelle le ___ .", a: ["souper"], o: ["souper", "dîner", "déjeuner"], nl: "In Québec heet het avondeten le souper.", tag: "fr-franco" },
      { t: "cloze", s: "En Belgique : « Je ne ___ pas venir demain. » (= je ne peux pas)", a: ["sais"], o: ["sais", "connais", "dois"], nl: "In België: 'Ik kan morgen niet komen.'", tag: "fr-franco" },
      { t: "cloze", s: "J'ai installé le ___ sur mon ordinateur. (software)", a: ["logiciel"], o: ["logiciel", "logique", "logis"], nl: "Ik heb de software op mijn computer geïnstalleerd.", tag: "fr-anglic" },
      { t: "cloze", s: "Elle s'est rendu ___ que le courriel n'était pas parti.", a: ["compte"], o: ["compte", "conte", "comte"], nl: "Ze besefte dat de e-mail niet verzonden was.", x: "Verzorgd: se rendre compte, niet réaliser.", tag: "fr-anglic" },
      { t: "mc", q: "Welk woord is een VALS anglicisme (een Engelsman zegt het niet)?", o: ["un pressing (stomerij)", "un week-end", "un job"], tag: "fr-anglic" },
      { t: "mc", q: "Hoe heet een mobiele telefoon in Zwitserland?", o: ["le natel", "le GSM", "le cellulaire"], tag: "fr-franco" },
      { t: "mc", q: "Wat is in verzorgd Frans het juiste woord voor 'digitaal'?", o: ["numérique", "digital", "digitalique"], x: "Digital betekent eigenlijk «van de vinger» (empreinte digitale).", tag: "fr-anglic" },
      { t: "tr", nl: "Hij is tweeënnegentig. (zoals in België)", a: ["Il a nonante-deux ans."], tag: "fr-franco" },
      { t: "tr", nl: "Ik heb de software gedownload.", a: ["J'ai téléchargé le logiciel."], tag: "fr-anglic" },
      { t: "tr", nl: "Tot straks! (zoals in België)", a: ["À tantôt !", "À tantôt"], tag: "fr-franco" },
      { t: "order", s: "La plus grande ville francophone du monde est Kinshasa.", nl: "De grootste Franstalige stad ter wereld is Kinshasa.", tag: "fr-ordre" },
      { t: "match", p: [["magasiner", "winkelen (Québec)"], ["la drache", "de plensbui (België)"], ["le natel", "de mobiele telefoon (Zwitserland)"], ["l'essencerie", "het tankstation (Senegal)"], ["le courriel", "de e-mail"]], tag: "fr-voc" }
    ],
    reading: {
      t: "Le français n'appartient plus à la France", type: "Opiniestuk",
      p: [
        ["Longtemps, on a cru qu'il n'existait qu'un seul bon français, celui de Paris. Les Belges qui disaient « septante », les Québécois qui « magasinaient » et les Sénégalais qui s'arrêtaient à « l'essencerie » parlaient, pensait-on, un français de second rang. Cette idée a vécu.", "Lang heeft men gedacht dat er maar één goed Frans bestond, dat van Parijs. De Belgen die 'septante' zeiden, de Québécois die 'magasinaient' en de Senegalezen die bij 'l'essencerie' stopten, spraken, zo dacht men, een tweederangs Frans. Dat idee heeft zijn tijd gehad."],
        ["Les chiffres parlent d'eux-mêmes : la majorité des francophones vit désormais en Afrique, et Kinshasa a dépassé Paris. Les dictionnaires l'ont compris : chaque année, ils accueillent des mots venus d'Abidjan, de Montréal ou de Bruxelles. « Ambiancer » et « courriel » y figurent, tout comme « drache ».", "De cijfers spreken voor zich: de meerderheid van de Franstaligen woont voortaan in Afrika, en Kinshasa heeft Parijs voorbijgestreefd. De woordenboeken hebben het begrepen: elk jaar nemen ze woorden op uit Abidjan, Montréal of Brussel. 'Ambiancer' en 'courriel' staan erin, net als 'drache'."],
        ["Faut-il s'en inquiéter ? Certains craignent que la langue ne se fragmente. C'est oublier que l'anglais, l'espagnol et le portugais vivent très bien avec plusieurs normes. Une langue qui voyage change ; une langue qui ne change plus est une langue morte.", "Moeten we ons daar zorgen over maken? Sommigen vrezen dat de taal versplintert. Dan vergeet je dat het Engels, het Spaans en het Portugees prima leven met meerdere normen. Een taal die reist, verandert; een taal die niet meer verandert, is een dode taal."]
      ],
      gl: [["de second rang", "tweederangs"], ["avoir vécu", "zijn tijd gehad hebben"], ["accueillir", "opnemen / verwelkomen"], ["figurer", "voorkomen / staan"], ["se fragmenter", "versplinteren"]],
      q: [
        { t: "mc", q: "Quelle idée « a vécu » selon l'auteur ?", o: ["Qu'il n'existe qu'un seul bon français", "Que le français est parlé en Afrique", "Que les dictionnaires changent"] },
        { t: "mc", q: "Où vit aujourd'hui la majorité des francophones ?", o: ["En Afrique", "En France", "Au Canada"] },
        { t: "mc", q: "Que pense l'auteur de la variation ?", o: ["C'est le signe d'une langue vivante", "C'est un danger pour la langue", "Il faut l'interdire"] }
      ]
    },
    say: [["Il a nonante-deux ans.", "Hij is tweeënnegentig."], ["On va souper ensemble ce soir.", "We gaan vanavond samen eten."], ["J'ai téléchargé le logiciel.", "Ik heb de software gedownload."], ["À tantôt !", "Tot straks!"]],
    task: { nl: "Schrijf 5 zinnen waarin je aan een Franse vriend uitlegt wat je in België, Zwitserland of Québec aan de taal is opgevallen. Noem minstens drie regionale woorden met hun «Franse» tegenhanger.", model: "En Belgique, j'ai d'abord été surpris par les chiffres : on dit « septante » et « nonante », ce qui est d'ailleurs bien plus logique. Ensuite, on m'a invité à « dîner » à midi, alors que j'attendais le soir. Mon portable s'appelle un GSM, et quand il pleut très fort, c'est une « drache ». Les Belges disent aussi « je ne sais pas venir » au lieu de « je ne peux pas ». Bref, c'est du français, mais avec une couleur bien à lui." },
    scenario: { nl: "Op een Franstalige top in Brussel praat je bij de koffie met deelnemers uit België, Québec en Senegal over hun Frans.", role: "You are Mathieu, a Belgian delegate at a Francophonie summit in Brussels, chatting over coffee with the learner. Use natural Belgian French (septante, nonante, dîner at noon, souper, GSM, à tantôt, 'je ne sais pas venir'). Let small misunderstandings arise and enjoy explaining them. Ask the learner which regional words they know from Québec, Switzerland or Africa, and what Dutch speakers find familiar in Belgian French. Mention that France is the odd one out with soixante-dix. Use tu.", goal: "Vraag naar de betekenis van één regionaal woord, gebruik zelf septante of nonante in een zin, en noem één woord uit Québec of Afrika." }
  });

  /* ───────────────────────── C1 · 10 ───────────────────────── */
  U({
    id: "fr-c1-10", level: "C1", icon: "😏", title: "Ce n'est pas mal du tout", nl: "Tussen de regels: ironie, understatement en de literaire ontkenning",
    goals: ["Litotes en understatement herkennen en gebruiken", "Ironie en eufemismen in gesprekken en kranten begrijpen", "De verzorgde ontkenningen ne … guère, ne … point en ne … nullement gebruiken", "Weten wanneer ne alleen staat, zonder pas"],
    vocab: [
      ["la litote", "het understatement"], ["l'euphémisme", "het eufemisme"], ["l'ironie", "de ironie"], ["le sous-entendu", "de toespeling / wat onuitgesproken blijft"], ["le second degré", "de dubbele bodem"], ["prendre au pied de la lettre", "letterlijk nemen"],
      ["ne … guère", "nauwelijks"], ["ne … point", "geenszins (literair)"], ["ne … nullement", "in het geheel niet"], ["ne … aucunement", "op geen enkele wijze"], ["ne … que", "slechts"], ["ne … plus guère", "nauwelijks nog"],
      ["pas mal", "niet slecht / best goed"], ["pas bête", "niet dom / slim"], ["pas donné", "niet goedkoop"], ["pas franchement", "niet bepaald"], ["un tantinet", "een tikkeltje"], ["quelque peu", "enigszins"],
      ["pour le moins", "op zijn zachtst gezegd"], ["c'est le moins qu'on puisse dire", "dat is wel het minste wat je kunt zeggen"], ["laisser entendre", "laten doorschemeren"], ["insinuer", "insinueren"], ["railler", "bespotten"], ["le clin d'œil", "de knipoog"],
      ["à demi-mot", "met een half woord"], ["disparaître", "verdwijnen / overlijden (eufemisme)"], ["remercier", "bedanken / ontslaan (eufemisme)"], ["les seniors", "de ouderen (eufemisme)"]
    ],
    grammar: [
      { t: "Minder zeggen om meer te bedoelen", es: "La litote, l'euphémisme et l'ironie",
        html: `<p>Fransen zeggen zelden ronduit dat iets geweldig of verschrikkelijk is. Wie de taal echt beheerst, hoort wat er <b>niet</b> gezegd wordt.</p>
<p><b>De litote</b> ontkent het tegendeel en bedoelt daarmee iets <b>sterkers</b>: <i>Ce n'est <b>pas mal</b></i> = het is goed. <i>Ce n'est <b>pas mal du tout</b></i> = het is erg goed. <i>Il n'est <b>pas bête</b></i> = hij is slim. <i>Ce n'est <b>pas donné</b></i> = het is duur. <i>Je ne suis <b>pas mécontent</b></i> = ik ben heel tevreden. <i>Ça ne sent <b>pas la rose</b></i> = het stinkt.</p>
<p>⚠️ <b>Uitzondering: hier werkt het Frans andersom dan je verwacht.</b> In het Nederlands is «niet slecht» een lauw compliment. In het Frans kan <i>pas mal</i> een <b>echt</b> compliment zijn, en <i>pas mal de</i> betekent zelfs <b>veel</b>: <i>Il y avait <b>pas mal de</b> monde</i> = er waren heel wat mensen. Waarom? De litote is in het Frans een beleefdheidsvorm: je spaart de ander je uitroeptekens. De beroemdste staat bij Corneille: <i>«Va, je ne te hais point»</i> («Ga, ik haat je niet») en betekent «ik hou van je».</p>
<p><b>Het eufemisme</b> verzacht iets onaangenaams: <i>il nous a <b>quittés</b> / il a <b>disparu</b></i> (hij is overleden) · <i>les <b>demandeurs d'emploi</b></i> (werklozen) · <i>un <b>plan social</b></i> (massaontslag) · <i>il a été <b>remercié</b></i> (ontslagen) · <i>une <b>longue maladie</b></i> (kanker) · <i>les <b>seniors</b>, le <b>troisième âge</b></i>.</p>
<p><b>Ironie</b> zegt het omgekeerde, en de toon of de context verraadt het: <i><b>Bravo, c'est du joli !</b></i> (mooi is dat!) · <i><b>Ça commence bien !</b></i> · <i><b>Il ne manquait plus que ça !</b></i> (dat ontbrak er nog aan) · <i><b>Tu parles !</b></i> (mocht je willen) · <i><b>Belle mentalité !</b></i></p>
<p>⚠️ <b>Let op de verzachters in kranten:</b> <i><b>pour le moins</b> surprenant</i> (op zijn zachtst gezegd), <i><b>quelque peu</b> exagéré</i>, <i>un <b>tantinet</b> naïf</i>, <i>pas <b>franchement</b> convaincant</i>. Ze klinken mild, maar zijn vaak vernietigend bedoeld. En de <b>conditionnel</b> laat iets doorschemeren zonder het te beweren: <i>Le ministre <b>aurait</b> menti.</i></p>`,
        table: [["wat er staat", "wat het betekent"], ["Ce n'est pas mal du tout.", "Het is erg goed."], ["Ce n'est pas donné.", "Het is duur."], ["Il n'est pas tout jeune.", "Hij is oud."], ["Ce n'est pas faux.", "Je hebt gelijk (met tegenzin)."], ["C'est pour le moins surprenant.", "Het is hoogst merkwaardig."], ["Ça commence bien !", "Dat begint slecht."]],
        ex: [["Son discours était, pour le moins, quelque peu confus.", "Zijn toespraak was, op zijn zachtst gezegd, enigszins verward."], ["Tu as gagné ? Pas mal ! Pas mal du tout, même.", "Heb je gewonnen? Niet slecht! Erg goed zelfs."]] },
      { t: "Ne … guère, ne … point, en ne zonder pas", es: "La négation soutenue",
        html: `<p>In verzorgd en literair Frans heeft de ontkenning meer registers dan <i>ne … pas</i>.</p>
<p><b>ne … guère</b> = nauwelijks, niet veel: <i>Je <b>n'</b>ai <b>guère</b> le temps.</i> · <i>Il <b>ne</b> sort <b>plus guère</b>.</i> (nauwelijks nog)<br><b>ne … point</b> = literair of plechtig «niet»: <i>Je <b>ne</b> le crois <b>point</b>.</i><br><b>ne … nullement / aucunement</b> = in het geheel niet: <i>Cela <b>ne</b> me dérange <b>nullement</b>.</i><br><b>ne … nul / nulle</b> = geen enkele: <i><b>Nul n'</b>est censé ignorer la loi.</i> (niemand wordt geacht de wet niet te kennen)<br><b>ne … ni … ni</b>: <i>Il <b>n'</b>a <b>ni</b> ami <b>ni</b> ennemi.</i> (zonder lidwoord!)</p>
<p>⚠️ <b>Uitzondering: ne zonder pas, en toch een echte ontkenning.</b> Bij vier werkwoorden mag <i>pas</i> in verzorgd Frans wegblijven: <b>cesser, oser, pouvoir, savoir</b> (+ infinitief). <i>Il <b>ne cesse</b> de pleuvoir.</i> · <i>Je <b>n'ose</b> y croire.</i> · <i>Je <b>ne puis</b> accepter.</i> · <i>Je <b>ne saurais</b> vous dire.</i> (ik zou het u niet kunnen zeggen). Waarom? Oorspronkelijk was <i>ne</i> alléén de ontkenning; <i>pas</i> (een stap), <i>point</i> (een punt), <i>goutte</i> (een druppel) en <i>mie</i> (een kruimel) waren versterkingen, zoals «geen stap» of «geen zier». Bij deze oude, veelgebruikte werkwoorden is het oorspronkelijke gebruik bewaard.</p>
<p>⚠️ <b>Het omgekeerde: ne zonder pas, en géén ontkenning.</b> Dit is de <b>ne explétif</b> uit B2: <i>Je crains qu'il <b>ne</b> vienne</i> = ik vrees dat hij <b>komt</b>. Vergelijk: <i>Je crains qu'il <b>ne</b> vienne <b>pas</b></i> = dat hij <b>niet</b> komt. Het ene woordje <i>pas</i> keert de betekenis om.</p>
<p>⚠️ <b>Let op ne … que: geen ontkenning maar een beperking.</b> <i>Je <b>n'</b>ai <b>que</b> dix euros</i> = ik heb <b>slechts</b> tien euro. Daarom blijft het lidwoord staan: <i>Je ne bois <b>que du</b> thé</i>, terwijl het na een echte ontkenning <i>de</i> wordt: <i>Je ne bois <b>pas de</b> thé.</i> Waarom? Er wordt niets ontkend; je drinkt wel degelijk thee. En <i>ne … pas que</i> = niet alleen: <i>Il <b>n'</b>y a <b>pas que</b> le travail dans la vie.</i></p>
<p>In <b>spreektaal</b> gebeurt het tegenovergestelde: daar valt <i>ne</i> weg en blijft <i>pas</i> over: <i>J'sais pas. C'est pas grave.</i> Schrijf dat nooit in een formele tekst.</p>`,
        table: [["vorm", "betekenis", "register"], ["ne … pas", "niet", "neutraal"], ["ne … guère", "nauwelijks", "verzorgd"], ["ne … point", "niet, geenszins", "literair"], ["ne … nullement", "in het geheel niet", "verzorgd"], ["ne (cesser, oser, pouvoir, savoir)", "niet", "verzorgd"], ["ne … que", "slechts", "neutraal"]],
        ex: [["Je ne saurais trop vous recommander ce livre.", "Ik kan u dit boek niet genoeg aanbevelen."], ["Il n'y a guère que lui qui puisse nous aider.", "Er is nauwelijks iemand anders dan hij die ons kan helpen."]] }
    ],
    dialogue: {
      t: "La critique de Camille", place: "Paris 🇫🇷",
      lines: [
        ["Daan", "Alors, Camille, tu as lu mon article ? Qu'est-ce que tu en penses ?", "En Camille, heb je mijn artikel gelezen? Wat vind je ervan?"],
        ["Camille", "Ce n'est pas mal. Pas mal du tout, même.", "Het is niet slecht. Helemaal niet slecht zelfs."],
        ["Daan", "Ah… donc tu n'as pas aimé.", "O… dus je vond het niets."],
        ["Camille", "Mais si ! « Pas mal du tout », c'est un vrai compliment. Tu prends tout au pied de la lettre.", "Jawel! 'Pas mal du tout' is een echt compliment. Je neemt alles letterlijk."],
        ["Daan", "En néerlandais, « niet slecht », c'est plutôt tiède. Et l'introduction ?", "In het Nederlands is 'niet slecht' nogal lauw. En de inleiding?"],
        ["Camille", "Elle est, disons… quelque peu ambitieuse.", "Die is, laten we zeggen… enigszins ambitieus."],
        ["Daan", "Ça, c'est un compliment aussi ?", "Is dat ook een compliment?"],
        ["Camille", "Pas franchement. Ça veut dire qu'elle est trop longue. Et ton titre n'est guère accrocheur.", "Niet bepaald. Het betekent dat ze te lang is. En je titel is nauwelijks pakkend."],
        ["Daan", "Donc « pas mal » veut dire bien, et « ambitieux » veut dire raté. Je ne saurais m'y retrouver !", "Dus 'pas mal' betekent goed, en 'ambitieux' betekent mislukt. Ik zou er de weg niet in kunnen vinden!"],
        ["Camille", "« Je ne saurais »… Tu vois que tu parles français comme un livre. Ce n'est pas rien !", "'Je ne saurais'… Zie je wel dat je Frans spreekt als een boek. Dat is niet niks!"]
      ],
      q: [
        { t: "mc", q: "Que veut dire Camille par « pas mal du tout » ?", o: ["Que l'article est vraiment bon", "Que l'article est moyen", "Que l'article est mauvais"] },
        { t: "mc", q: "Que signifie « quelque peu ambitieuse » ici ?", o: ["L'introduction est trop longue", "L'introduction est excellente", "L'introduction manque"] },
        { t: "mc", q: "Pourquoi Daan se trompe-t-il ?", o: ["Il prend les mots au pied de la lettre", "Il ne connaît pas le mot « mal »", "Camille parle trop vite"] }
      ]
    },
    culture: { t: "Le second degré", html: `<p>Fransen noemen het <b>le second degré</b>: iets zeggen wat je niet letterlijk meent, en erop rekenen dat de ander het begrijpt. Wie alles <i>au premier degré</i> neemt, geldt als een beetje onnozel. De humor van het satirische weekblad <b>Le Canard enchaîné</b> (sinds 1915) drijft er volledig op: de krant onthult schandalen in woordspelingen en understatements.</p>
<p>De traditie gaat ver terug. <b>Voltaire</b> schreef in <i>Candide</i> dat alles voor het beste is «in de beste van alle mogelijke werelden», terwijl de ene ramp op de andere volgt. En aan het hof van Versailles kon een geestig, dubbelzinnig antwoord, <b>l'esprit</b>, een carrière maken of breken.</p>
<p>Voor Nederlanders, die directheid als eerlijkheid zien, is dat wennen. Een Franse chef die zegt <i>«C'est intéressant, mais on pourrait peut-être revoir quelques points»</i> bedoelt doorgaans: begin opnieuw. En <i>«Il faudra qu'on déjeune ensemble un de ces jours»</i> is geen afspraak, maar een vriendelijk afscheid.</p>` },
    ex: [
      { t: "cloze", s: "Je n'ai ___ le temps en ce moment. (nauwelijks)", a: ["guère"], o: ["guère", "guerre", "gare"], nl: "Ik heb op dit moment nauwelijks tijd.", tag: "fr-neg-lit" },
      { t: "cloze", s: "Cela ne me dérange ___ . (in het geheel niet)", a: ["nullement"], o: ["nullement", "nul", "nulle part"], nl: "Dat stoort mij in het geheel niet.", tag: "fr-neg-lit" },
      { t: "cloze", s: "Il ne ___ de pleuvoir depuis ce matin.", a: ["cesse"], o: ["cesse", "cesse pas", "cessé"], nl: "Het houdt sinds vanochtend niet op met regenen.", x: "Uitzondering: na cesser, oser, pouvoir, savoir mag pas wegblijven.", tag: "fr-neg-lit" },
      { t: "cloze", s: "Je ne bois que ___ thé.", a: ["du"], o: ["du", "de", "le"], nl: "Ik drink alleen maar thee.", x: "Ne … que is geen echte ontkenning: het lidwoord blijft.", tag: "fr-neg-lit" },
      { t: "cloze", s: "Ce n'est pas ___ du tout ! (= c'est très bien)", a: ["mal"], o: ["mal", "mauvais", "pire"], nl: "Dat is helemaal niet slecht!", tag: "fr-litote" },
      { t: "cloze", s: "Il y avait pas mal ___ monde.", a: ["de"], o: ["de", "du", "des"], nl: "Er waren heel wat mensen.", x: "Pas mal de = veel.", tag: "fr-litote" },
      { t: "mc", q: "«Ce n'est pas donné.» Wat wordt bedoeld?", o: ["Het is duur.", "Het is gratis.", "Het is een cadeau."], tag: "fr-litote" },
      { t: "mc", q: "Wat betekent «Je crains qu'il ne vienne»?", o: ["Ik vrees dat hij komt.", "Ik vrees dat hij niet komt.", "Ik hoop dat hij komt."], x: "Ne explétif: geen ontkenning.", tag: "fr-neg-lit" },
      { t: "mc", q: "«Il a été remercié.» Wat kan dit in een krant betekenen?", o: ["Hij is ontslagen.", "Hij heeft promotie gemaakt.", "Hij is uitgenodigd."], x: "Eufemisme.", tag: "fr-litote" },
      { t: "tr", nl: "Ik zou het u niet kunnen zeggen.", a: ["Je ne saurais vous le dire.", "Je ne saurais vous dire."], tag: "fr-neg-lit" },
      { t: "tr", nl: "Het is op zijn zachtst gezegd verrassend.", a: ["C'est pour le moins surprenant.", "C'est surprenant, pour le moins."], tag: "fr-litote" },
      { t: "tr", nl: "Er is niet alleen werk in het leven.", a: ["Il n'y a pas que le travail dans la vie."], tag: "fr-neg-lit" },
      { t: "order", s: "Nul n'est censé ignorer la loi.", nl: "Niemand wordt geacht de wet niet te kennen.", tag: "fr-ordre" },
      { t: "match", p: [["pas bête", "slim"], ["pas donné", "duur"], ["un tantinet", "een tikkeltje"], ["à demi-mot", "met een half woord"], ["le sous-entendu", "de toespeling"]], tag: "fr-litote" }
    ],
    reading: {
      t: "Une soirée pour le moins mémorable", type: "Recensie",
      p: [
        ["On nous avait promis « l'événement théâtral de la saison ». Disons que la soirée fut pour le moins mémorable. Le rideau s'est levé avec quarante minutes de retard, ce qui a laissé au public tout le loisir d'admirer les fauteuils, lesquels ne sont plus guère de première jeunesse.", "Ons was 'het theaterevenement van het seizoen' beloofd. Laten we zeggen dat de avond op zijn zachtst gezegd gedenkwaardig was. Het doek ging met veertig minuten vertraging op, wat het publiek alle gelegenheid gaf de stoelen te bewonderen, die niet bepaald piepjong meer zijn."],
        ["Le metteur en scène a fait des choix audacieux. Faire jouer Molière en combinaison de plongée n'était pas l'idée la plus évidente, et l'on ne saurait lui reprocher de manquer d'imagination. Les comédiens, eux, ne déméritent nullement : on les entendait presque, par moments.", "De regisseur heeft gedurfde keuzes gemaakt. Molière laten spelen in duikpak was niet het meest voor de hand liggende idee, en men zou hem geen gebrek aan verbeelding kunnen verwijten. De acteurs van hun kant stellen geenszins teleur: je kon ze bij vlagen bijna verstaan."],
        ["À l'entracte, pas mal de spectateurs ont jugé prudent d'aller prendre l'air, et n'ont point jugé utile de revenir. Ceux qui sont restés n'ont pas été déçus : la seconde partie ne durait qu'une heure. Un spectacle que l'on n'oubliera pas de sitôt, quoi qu'on fasse.", "In de pauze vonden heel wat toeschouwers het verstandig een luchtje te scheppen, en ze achtten het geenszins nuttig terug te komen. Wie bleef, werd niet teleurgesteld: het tweede deel duurde maar een uur. Een voorstelling die je niet snel vergeet, wat je ook doet."]
      ],
      gl: [["le rideau", "het doek"], ["le loisir", "de gelegenheid / vrije tijd"], ["le metteur en scène", "de regisseur"], ["démériter", "tekortschieten"], ["de sitôt", "zo gauw"]],
      q: [
        { t: "mc", q: "Quel est le ton de cette critique ?", o: ["Ironique", "Enthousiaste", "Neutre"] },
        { t: "mc", q: "Que pense vraiment le critique du spectacle ?", o: ["Qu'il était raté", "Qu'il était excellent", "Qu'il était trop court"] },
        { t: "mc", q: "Qu'ont fait beaucoup de spectateurs à l'entracte ?", o: ["Ils sont partis sans revenir", "Ils ont applaudi", "Ils ont changé de place"] }
      ]
    },
    say: [["Ce n'est pas mal du tout !", "Dat is helemaal niet slecht!"], ["Je n'ai guère le temps.", "Ik heb nauwelijks tijd."], ["Je ne saurais vous le dire.", "Ik zou het u niet kunnen zeggen."], ["C'est pour le moins surprenant.", "Het is op zijn zachtst gezegd verrassend."]],
    task: { nl: "Schrijf een ironische minirecensie (5 zinnen) van een tegenvallend restaurant, hotel of film. Zeg nergens rechtstreeks dat het slecht was: gebruik minstens twee litotes (pas donné, pas franchement…), pour le moins, en één keer ne … guère of ne … nullement.", model: "Le restaurant se présente comme « une expérience ». C'en est une, pour le moins. Le service n'est pas franchement rapide, ce qui laisse le temps d'étudier une carte qui n'est pas donnée. Le poisson n'était guère plus chaud que le vin blanc, lequel ne manquait nullement de caractère. On n'y retournera pas de sitôt, mais on ne l'oubliera pas non plus." },
    scenario: { nl: "Je vraagt een Parijse vriendin wat ze van je tekst vindt en probeert te ontcijferen wat ze écht bedoelt.", role: "You are Camille, a Parisian journalist and friend of the learner. They ask your opinion on something they wrote, cooked or organised. Answer the French way: with litotes (pas mal du tout, pas bête, ce n'est pas rien), softeners (quelque peu, un tantinet, pour le moins, pas franchement) and a little irony, never bluntly. When the learner asks what you really mean, explain it plainly and with humour, then invite them to give their own opinion on a film or restaurant using the same indirect style. Use tu.", goal: "Vraag wat een understatement echt betekent, geef zelf een oordeel met pas mal of pas franchement, en gebruik één keer ne … guère." }
  });
})(window.SPT);
