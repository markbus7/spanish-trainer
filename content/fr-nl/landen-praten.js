/* Uitbreiding «Op reis», verdieping per land (Frans): bij elk land een eigen dialoog en een eigen gesprek met de docent.
   Zelfde vorm als content/landen-praten.js (Spaans). Sanne is de bezoeker (me) en praat het Frans van de basiscursus (Frankrijk);
   de ander praat zoals in het land. Uitleg: 🗺️ lokaal woord + standaardwoord, of «⚠️ Uitzondering» met de reden. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('fr-nl')) return;
  const add = (id, x) => { const p = (S.places || []).find(q => q.id === id); if (p) { x.dialog.me = 'Sanne'; Object.assign(p, x); } };
  const LOC = (w, land, neu) => '🗺️ <b>' + w + '</b>: zo zeggen ze het in ' + land + '. Standaard: <b>' + neu + '</b>.';
  const UITZ = (vorm, neu, uitleg, reden) => '⚠️ <b>Uitzondering:</b> <b>' + vorm + '</b> in plaats van <b>' + neu + '</b>. ' + uitleg + ' Reden: ' + reden;
  const Q = (q, a, b, c) => ({ t: 'mc', q, o: [a, b, c] });

  add('fr', {
    dialog: { t: "On va manger un truc ?", nl: "Hugo uit Parijs heeft geen zin om te koken.", place: "Paris 🇫🇷", who: { Hugo: 'm', Sanne: 'f' },
      lines: [
        ["Hugo", "Salut Sanne ! Ça va ? Tu as fini le boulot ?", "Hoi Sanne! Gaat het? Ben je klaar met werken?", LOC("le boulot", "Frankrijk (spreektaal)", "le travail")],
        ["Sanne", "Salut Hugo ! Oui, j'ai fini. Je suis fatiguée.", "Hoi Hugo! Ja, ik ben klaar. Ik ben moe."],
        ["Hugo", "Moi aussi, j'ai la flemme de cuisiner. On va manger un truc ?", "Ik ook, ik heb geen zin om te koken. Gaan we iets eten?", LOC("la flemme", "Frankrijk (spreektaal)", "je n'ai pas envie") + "<br>" + LOC("un truc", "Frankrijk (spreektaal)", "quelque chose")],
        ["Sanne", "Bonne idée. Tu connais un bon restaurant ?", "Goed idee. Ken je een goed restaurant?"],
        ["Hugo", "Je sais pas… Ah si ! Il y a un petit resto ici, la bouffe est super.", "Ik weet het niet… O ja! Er is hier een klein restaurantje, het eten is top.", UITZ("je sais pas", "je ne sais pas", "In gesproken Frans valt «ne» bijna altijd weg.", "«pas» draagt de ontkenning al, en het zwakke «ne» slijt weg als je snel praat. In een nette tekst schrijf je «ne» wel.") + "<br>" + LOC("la bouffe", "Frankrijk (spreektaal)", "la nourriture")],
        ["Sanne", "D'accord. C'est cher ?", "Oké. Is het duur?"],
        ["Hugo", "Non, c'est pas cher. Et j'ai du fric aujourd'hui, je t'invite !", "Nee, het is niet duur. En ik heb vandaag geld, ik trakteer!", LOC("le fric", "Frankrijk (spreektaal)", "l'argent")],
        ["Sanne", "Merci, c'est gentil ! Alors la prochaine fois, c'est moi.", "Dank je, wat aardig! Dan ben ik de volgende keer."],
        ["Hugo", "Nickel ! Du coup, on y va ?", "Perfect! Dus, gaan we?", LOC("nickel", "Frankrijk (spreektaal)", "parfait") + "<br>🗺️ <b>du coup</b> betekent «dus». Fransen zeggen het de hele dag, als stopwoord."]
      ],
      q: [Q("Qu'est-ce que «le boulot» ?", "Le travail", "Le repas", "L'argent"), Q("Pourquoi Hugo ne veut pas cuisiner ?", "Il a la flemme", "Il n'a pas de cuisine", "Il n'a pas faim"), Q("Qui paie aujourd'hui ?", "Hugo", "Sanne", "Personne")] },
    talk: { title: "Bij de bakker", place: "Paris", nl: "Je docent speelt madame Morel, bakker in een Parijse buurt.", goal: "Koop een stokbrood en een croissant, vraag wat het kost en zeg netjes gedag.",
      role: "You are Madame Morel, a baker in a busy neighborhood bakery in Paris. You are quick, polite and a little teasing. You say «Bonjour !» first and expect it back, ask «Et avec ceci ?» and «Ce sera tout ?», and say «Bonne journée !» at the end.",
      local: "Everyday spoken French of France: «ne» is dropped (je sais pas, c'est pas cher), fillers like «du coup» and «nickel», informal words (un truc, le boulot), but always «vous» and «bonjour» with a customer" }
  });

  add('be', {
    dialog: { t: "Trois euros septante", nl: "Het giet in Brussel. Maxime weet waar de beste friet is.", place: "Bruxelles 🇧🇪", who: { Maxime: 'm', Sanne: 'f' },
      lines: [
        ["Maxime", "Bonjour Sanne ! Bienvenue à Bruxelles. Quel temps, hein ? Il drache !", "Dag Sanne! Welkom in Brussel. Wat een weer, hè? Het giet!", LOC("il drache", "België", "il pleut très fort")],
        ["Sanne", "Bonjour Maxime ! Oui, il pleut beaucoup. On va manger des frites ?", "Dag Maxime! Ja, het regent hard. Gaan we friet eten?"],
        ["Maxime", "Bonne idée ! Un grand cornet coûte trois euros septante.", "Goed idee! Een grote puntzak kost drie euro zeventig.", UITZ("septante", "soixante-dix", "Belgen zeggen septante voor 70.", "septante is de oude, regelmatige vorm (Latijn: septuaginta). Frankrijk ging later met twintigtallen tellen (60 + 10); België hield de oude vorm.")],
        ["Sanne", "Septante ? Ah, soixante-dix !", "Septante? O, zeventig!"],
        ["Maxime", "Oui ! Et nonante, c'est quatre-vingt-dix. C'est plus simple, non ?", "Ja! En nonante is negentig. Dat is makkelijker, toch?", LOC("nonante", "België", "quatre-vingt-dix")],
        ["Sanne", "Beaucoup plus simple ! Tu peux m'appeler demain matin ?", "Veel makkelijker! Kun je me morgenochtend bellen?"],
        ["Maxime", "Le matin, je ne sais pas t'appeler : je travaille. Je t'appelle à midi avec mon GSM.", "'s Ochtends kan ik je niet bellen: ik werk. Ik bel je om twaalf uur met mijn mobiel.", UITZ("je ne sais pas t'appeler", "je ne peux pas t'appeler", "Belgen zeggen vaak «savoir» waar Fransen «pouvoir» zeggen.", "het Frans leeft in België al eeuwen naast het Nederlands, waar «kunnen» allebei betekent: weten hoe het moet én de kans hebben.") + "<br>" + LOC("le GSM", "België", "le portable")],
        ["Sanne", "Parfait. Je vais à l'hôtel maintenant. On se voit ce soir ?", "Prima. Ik ga nu naar het hotel. Zien we elkaar vanavond?"],
        ["Maxime", "Oui, à tantôt, Sanne !", "Ja, tot straks, Sanne!", LOC("à tantôt", "België", "à tout à l'heure")]
      ],
      q: [Q("Combien coûte le grand cornet de frites ?", "Trois euros septante", "Trois euros nonante", "Sept euros"), Q("«Nonante», c'est…", "Quatre-vingt-dix", "Soixante-dix", "Quatre-vingts"), Q("Que veut dire «il drache» ?", "Il pleut très fort", "Il fait chaud", "Il neige")] },
    talk: { title: "Bij de frietkraam", place: "Bruxelles", nl: "Je docent speelt monsieur Jacques, die al dertig jaar friet bakt.", goal: "Bestel friet met een saus, begrijp de prijs met septante of nonante en betaal.",
      role: "You are Monsieur Jacques, who has run a friterie on a square in Brussels for thirty years. You are jovial and proud of Belgian fries. You ask «Petit ou grand cornet ?» and «Quelle sauce ?» (mayonnaise, andalouse, samouraï), give prices with septante and nonante, and say «s'il vous plaît» when you hand over the fries.",
      local: "Belgian French: septante and nonante, «savoir» for «pouvoir» (tu sais me passer… ?), «s'il vous plaît» when handing something over, à tantôt, le GSM, il drache, déjeuner/dîner/souper for the three meals" }
  });

  add('ch', {
    dialog: { t: "Ça joue ?", nl: "Yann koopt treinkaartjes. Hoeveel is «huitante» frank?", place: "Lausanne 🇨🇭", who: { Yann: 'm', Sanne: 'f' },
      lines: [
        ["Yann", "Adieu Sanne ! Bienvenue à Lausanne.", "Hallo Sanne! Welkom in Lausanne.", UITZ("adieu !", "salut !", "In Zwitserland is adieu een gewone groet onder bekenden; in Frankrijk zeg je het alleen bij een afscheid voor altijd.", "het is letterlijk «à Dieu» (God zij met je), een oude groet die in Zwitserland gewoon is gebleven.")],
        ["Sanne", "Bonjour Yann ! Merci. On prend le train pour Genève ?", "Dag Yann! Dank je. Nemen we de trein naar Genève?"],
        ["Yann", "Oui. Le billet coûte huitante francs pour deux.", "Ja. Het kaartje kost tachtig frank voor twee.", UITZ("huitante", "quatre-vingts", "In veel Zwitserse kantons is 80 huitante. Ook septante (70) en nonante (90) hoor je hier.", "het zijn de oude, regelmatige tientallen. Frankrijk ging met twintigtallen tellen (4 × 20); Zwitserland deed daar niet aan mee.")],
        ["Sanne", "Huitante ? C'est quatre-vingts ?", "Huitante? Is dat tachtig?"],
        ["Yann", "Exactement ! Le train part à dix heures. Ça joue ?", "Precies! De trein vertrekt om tien uur. Komt dat uit?", LOC("ça joue", "Zwitserland", "ça va, ça te va")],
        ["Sanne", "Ça joue ! Je dois appeler l'hôtel, mais je n'ai pas mon téléphone…", "Dat komt uit! Ik moet het hotel bellen, maar ik heb mijn telefoon niet…"],
        ["Yann", "Tiens, prends mon natel.", "Hier, neem mijn mobiel.", LOC("le natel", "Zwitserland", "le portable") + " Het is een oude merknaam (Nationales Autotelefon)."],
        ["Sanne", "Merci beaucoup, Yann !", "Heel erg bedankt, Yann!"],
        ["Yann", "Service ! Et il n'y a pas le feu au lac, on a le temps.", "Graag gedaan! En er is geen haast bij, we hebben tijd.", LOC("service !", "Zwitserland", "de rien") + "<br>🗺️ <b>il n'y a pas le feu au lac</b>: letterlijk «het meer staat niet in brand». Het betekent: rustig aan, geen haast."]
      ],
      q: [Q("Combien coûte le billet pour deux ?", "Huitante francs", "Septante francs", "Nonante francs"), Q("Qu'est-ce qu'un natel ?", "Un téléphone portable", "Un billet de train", "Un hôtel"), Q("Que veut dire «Ça joue ?»", "Ça te va ?", "Tu joues ?", "C'est cher ?")] },
    talk: { title: "Aan het loket op het station", place: "Genève", nl: "Je docent speelt madame Favre, die treinkaartjes verkoopt.", goal: "Koop een kaartje naar Lausanne, vraag de prijs en hoe laat de trein vertrekt.",
      role: "You are Madame Favre, who sells tickets at the counter of Geneva's main station. You are calm, precise and friendly, speak slowly and clearly, give prices in Swiss francs with septante, huitante and nonante, and trains are of course on time.",
      local: "Swiss French: septante, huitante, nonante, «ça joue», «service !» for «de rien», le natel, «adieu» as a greeting, a slow and clear pace" }
  });

  add('ca', {
    dialog: { t: "Tu veux-tu un café ?", nl: "Het is steenkoud in Montréal en Mathieu zegt twee keer «tu».", place: "Montréal 🇨🇦", who: { Mathieu: 'm', Sanne: 'f' },
      lines: [
        ["Mathieu", "Allô Sanne ! Bienvenue à Montréal. Il fait frette, hein ?", "Hallo Sanne! Welkom in Montréal. Steenkoud, hè?", LOC("il fait frette", "Québec", "il fait très froid") + "<br>🗺️ <b>allô</b> is in Québec een gewone begroeting; in Frankrijk zeg je het alleen aan de telefoon."],
        ["Sanne", "Bonjour Mathieu ! Oui, il fait très froid.", "Dag Mathieu! Ja, het is erg koud."],
        ["Mathieu", "Tu veux-tu un café ?", "Wil je koffie?", UITZ("tu veux-tu… ?", "est-ce que tu veux… ?", "In Québec maak je een vraag met een extra -tu achter het werkwoord. Die tweede «tu» betekent niet «jij».", "het is het oude Franse vraagwoordje «-ti» (il vient-ti ?), dat in Québec bewaard bleef en als «-tu» is gaan klinken.")],
        ["Sanne", "«Tu veux-tu» ? Deux fois «tu» ?", "«Tu veux-tu»? Twee keer «tu»?"],
        ["Mathieu", "Oui, ici le deuxième «tu» fait la question. Alors, un café ?", "Ja, hier maakt de tweede «tu» er een vraag van. Nou, koffie?"],
        ["Sanne", "Oui, merci ! Et après, on fait quoi ?", "Ja, dank je! En wat doen we daarna?"],
        ["Mathieu", "On prend mon char et on va magasiner. Il te faut une tuque !", "We pakken mijn auto en gaan winkelen. Je hebt een muts nodig!", LOC("le char", "Québec", "la voiture") + "<br>" + LOC("magasiner", "Québec", "faire les magasins") + "<br>" + LOC("la tuque", "Québec", "le bonnet")],
        ["Sanne", "D'accord. Merci pour le café !", "Oké. Bedankt voor de koffie!"],
        ["Mathieu", "Bienvenue ! Ce soir, on mange une poutine. C'est le fun !", "Graag gedaan! Vanavond eten we poutine. Dat is leuk!", UITZ("bienvenue", "de rien", "In Québec antwoord je op «merci» met «bienvenue».", "het is een letterlijke vertaling van het Engelse «you're welcome»; Québec ligt midden tussen Engelstaligen.") + "<br>" + LOC("c'est le fun", "Québec", "c'est amusant")]
      ],
      q: [Q("Que veut dire «il fait frette» ?", "Il fait très froid", "Il fait chaud", "Il pleut"), Q("Qu'est-ce qu'un «char» au Québec ?", "Une voiture", "Un chat", "Un café"), Q("Que dit Mathieu pour «de rien» ?", "Bienvenue", "Allô", "Merci")] },
    talk: { title: "In de buurtwinkel", place: "Montréal", nl: "Je docent speelt Ginette, eigenares van een «dépanneur» op de hoek.", goal: "Koop iets te drinken en een snack, en vraag de weg naar de metro.",
      role: "You are Ginette, the talkative owner of a dépanneur (corner store) in Montréal, Québec. You say «allô», switch to «tu» right away, ask questions with -tu (tu veux-tu un sac ?), answer «merci» with «bienvenue», and complain cheerfully about the cold.",
      local: "Québec French: questions with -tu (tu veux-tu ?), allô, bienvenue for «de rien», le dépanneur, magasiner, la fin de semaine, c'est le fun, il fait frette, pantoute, quick use of «tu»" }
  });

  add('ht', {
    dialog: { t: "Sak pase ?", nl: "Wilson leert je de eerste woorden Creools, op weg naar de markt.", place: "Port-au-Prince 🇭🇹", who: { Wilson: 'm', Sanne: 'f' },
      lines: [
        ["Wilson", "Bonjou, Sanne ! Sak pase ?", "Goedendag, Sanne! Hoe gaat het?", LOC("sak pase ?", "Haïti (Creools)", "ça va ?") + "<br>" + LOC("bonjou", "Haïti (Creools)", "bonjour")],
        ["Sanne", "Bonjour Wilson ! Pardon, je ne comprends pas.", "Dag Wilson! Sorry, ik begrijp het niet."],
        ["Wilson", "«Sak pase ?», c'est du créole : «ça va ?». Tu réponds : «N ap boule !»", "«Sak pase?» is Creools: «gaat het?». Je antwoordt: «N ap boule!»", "🗺️ <b>n ap boule</b>: letterlijk «we branden», maar het betekent: het gaat prima."],
        ["Sanne", "N ap boule ! C'est joli. On va au marché comment ?", "N ap boule! Mooi. Hoe gaan we naar de markt?"],
        ["Wilson", "On prend le tap-tap. C'est un petit bus plein de couleurs.", "We nemen de tap-tap. Dat is een busje vol kleuren.", "🗺️ <b>le tap-tap</b>: de beschilderde deelbus. Je tikt op de carrosserie (tap, tap) als je wilt uitstappen."],
        ["Sanne", "Super ! Ça coûte combien ?", "Leuk! Hoeveel kost dat?"],
        ["Wilson", "Vingt-cinq gourdes. Pa gen pwoblèm, je paie.", "Vijfentwintig gourde. Geen probleem, ik betaal.", UITZ("pa gen pwoblèm", "il n'y a pas de problème", "Het Haïtiaans Creools schrijft woorden zoals je ze hoort, en werkwoorden veranderen niet van vorm.", "het Creools ontstond in de achttiende eeuw uit gesproken Frans en West-Afrikaanse talen. Het is een eigen taal, geen fout Frans.") + "<br>🗺️ <b>la gourde</b> is de munt van Haïti."],
        ["Sanne", "Merci beaucoup ! Comment on dit «merci» en créole ?", "Heel erg bedankt! Hoe zeg je «dank je» in het Creools?"],
        ["Wilson", "«Mèsi anpil !» Et ce soir, on mange du griot avec de la banane pesée.", "«Mèsi anpil!» En vanavond eten we griot met gebakken bakbanaan.", LOC("mèsi anpil", "Haïti (Creools)", "merci beaucoup") + "<br>🗺️ <b>le griot</b>: gebakken stukjes varkensvlees, het feestgerecht van Haïti."]
      ],
      q: [Q("Que veut dire «Sak pase ?»", "Ça va ?", "Au revoir", "Merci"), Q("Qu'est-ce qu'un tap-tap ?", "Un petit bus", "Un plat", "Une monnaie"), Q("Comment dit-on «merci beaucoup» en créole ?", "Mèsi anpil", "N ap boule", "Bonjou")] },
    talk: { title: "Fruit kopen op de markt", place: "Port-au-Prince", nl: "Je docent speelt madame Roseline, die mango's en bananen verkoopt.", goal: "Koop fruit, vraag de prijs in gourdes en leer een paar woorden Creools.",
      role: "You are Madame Roseline, who sells mangoes and bananas at a market in Port-au-Prince, Haiti. You are warm and proud. You speak clear, careful French, greet with «Bonjou !» and «Sak pase ?», and happily teach the customer a few Creole words. Prices are in gourdes.",
      local: "Haitian French (clear and careful) with a few Haitian Creole words: bonjou, sak pase ?, n ap boule, mèsi anpil, pa gen pwoblèm. Always explain the Creole words; keep the sentences themselves in French." }
  });

  add('ma', {
    dialog: { t: "Yallah, on y va !", nl: "Met Youssef door de oude stad van Marrakech, met muntthee erbij.", place: "Marrakech 🇲🇦", who: { Youssef: 'm', Sanne: 'f' },
      lines: [
        ["Youssef", "Salam, Sanne ! Bienvenue à Marrakech.", "Hallo, Sanne! Welkom in Marrakech.", LOC("salam", "Marokko", "bonjour") + " Het is Arabisch voor «vrede»."],
        ["Sanne", "Bonjour Youssef ! Merci. On visite la vieille ville aujourd'hui ?", "Dag Youssef! Dank je. Bezoeken we vandaag de oude stad?"],
        ["Youssef", "Oui, la médina ! Et après, on va au souk. Yallah !", "Ja, de medina! En daarna gaan we naar de soek. Kom op!", LOC("la médina", "Marokko", "la vieille ville") + "<br>" + LOC("le souk", "Marokko", "le marché")],
        ["Sanne", "«Yallah» ?", "«Yallah»?"],
        ["Youssef", "Ça veut dire «on y va !». C'est de l'arabe, mais on le dit aussi en français ici.", "Het betekent «we gaan!». Het is Arabisch, maar we zeggen het hier ook in het Frans.", LOC("yallah", "Marokko", "on y va, allez")],
        ["Sanne", "D'accord, yallah ! Tu veux boire quelque chose avant ?", "Oké, yallah! Wil je eerst iets drinken?"],
        ["Youssef", "Wakha ! Un thé à la menthe, avec un chouïa de sucre.", "Oké! Een muntthee, met een beetje suiker.", UITZ("wakha", "d'accord", "In Marokko wissel je midden in een Franse zin naar het darija, het Marokkaanse Arabisch.", "bijna iedereen is er tweetalig: Frans is de taal van school en werk, darija de taal van thuis en de straat.") + "<br>" + LOC("un chouïa", "Marokko", "un peu") + " Dit woord ken je ook in Frankrijk."],
        ["Sanne", "Et demain, on va à la plage ?", "En gaan we morgen naar het strand?"],
        ["Youssef", "Demain, inchallah. Safi, on y va ?", "Morgen, als God het wil. Goed, gaan we?", "🗺️ <b>inchallah</b>: als God het wil. Je zegt het bij alles wat nog moet gebeuren.<br>" + LOC("safi", "Marokko", "c'est bon, ça suffit")]
      ],
      q: [Q("Qu'est-ce que la médina ?", "La vieille ville", "La plage", "Le thé"), Q("Que veut dire «yallah» ?", "On y va !", "Merci", "Non"), Q("Que boit Youssef ?", "Un thé à la menthe", "Un café", "De l'eau")] },
    talk: { title: "Afdingen in de soek", place: "Marrakech", nl: "Je docent speelt Hassan, die lampen en leren sloffen verkoopt.", goal: "Kies iets uit, vraag de prijs en ding af bij een glas muntthee.",
      role: "You are Hassan, who sells lamps and leather babouches in the souk of Marrakech, Morocco. You are charming and patient, offer mint tea, start with a high price in dirhams and enjoy bargaining with humor. You call the customer «mon ami» or «khouya».",
      local: "Moroccan French: rolled r, darija words mixed in (salam, wakha, safi, yallah, inchallah, khouya, un chouïa, le flouse), polite and warm" }
  });

  add('sn', {
    dialog: { t: "Nanga def ?", nl: "In Dakar duurt een begroeting lang. Moussa laat zien hoe het moet.", place: "Dakar 🇸🇳", who: { Moussa: 'm', Sanne: 'f' },
      lines: [
        ["Moussa", "Bonjour Sanne ! Nanga def ?", "Dag Sanne! Hoe gaat het?", LOC("nanga def ?", "Senegal (Wolof)", "comment ça va ?")],
        ["Sanne", "Bonjour Moussa ! Pardon ?", "Dag Moussa! Sorry?"],
        ["Moussa", "«Nanga def ?», c'est du wolof : «comment ça va ?». Tu réponds : «Mangi fi.»", "«Nanga def?» is Wolof: «hoe gaat het?». Je antwoordt: «Mangi fi.»", "🗺️ <b>mangi fi</b>: letterlijk «ik ben hier». Het betekent: het gaat goed."],
        ["Sanne", "Mangi fi ! Et toi, ça va ?", "Mangi fi! En met jou, gaat het?"],
        ["Moussa", "Ça va un peu. Et la famille ? Et le travail ?", "Het gaat goed. En de familie? En het werk?", UITZ("ça va un peu", "ça va bien", "In Senegal betekent «ça va un peu» gewoon dat het goed gaat.", "het is bescheidenheid: je schept niet op over je geluk.") + "<br>🗺️ Een begroeting duurt hier lang: je vraagt ook naar de familie, het werk en de gezondheid."],
        ["Sanne", "Tout le monde va bien, merci. Tu poses beaucoup de questions !", "Met iedereen gaat het goed, dank je. Je stelt veel vragen!"],
        ["Moussa", "Ici, on salue longtemps. C'est la teranga ! Tu viens manger le thiéboudienne chez nous ?", "Hier groeten we lang. Dat is de teranga! Kom je bij ons thiéboudienne eten?", "🗺️ <b>la teranga</b>: de Senegalese gastvrijheid (Wolof).<br>🗺️ <b>le thiéboudienne</b>: rijst met vis, het nationale gerecht."],
        ["Sanne", "Avec plaisir ! C'est très gentil. Merci !", "Graag! Wat aardig. Dank je!"],
        ["Moussa", "En wolof, on dit «jërëjëf». À ce soir, on est ensemble !", "In het Wolof zeg je «jërëjëf». Tot vanavond, we staan er samen voor!", LOC("jërëjëf", "Senegal (Wolof)", "merci") + "<br>" + LOC("on est ensemble", "Senegal", "à bientôt")]
      ],
      q: [Q("Que répond-on à «Nanga def ?»", "Mangi fi", "Jërëjëf", "Au revoir"), Q("Qu'est-ce que la teranga ?", "L'hospitalité", "Un bus", "Une boisson"), Q("Qu'est-ce que le thiéboudienne ?", "Du riz au poisson", "Un vêtement", "Une salutation")] },
    talk: { title: "In de taxi", place: "Dakar", nl: "Je docent speelt Ibrahima, taxichauffeur in een geel-zwarte taxi.", goal: "Groet uitgebreid, zeg waar je heen wilt en spreek vooraf een prijs af.",
      role: "You are Ibrahima, a taxi driver (un taximan) in Dakar, Senegal. You always start with a long greeting (Ça va ? Et la famille ? Et le travail ?), there is no meter so the price in CFA francs is agreed before leaving, and you talk about football and the teranga.",
      local: "Senegalese French: long greetings, «ça va un peu», «on est ensemble», Wolof words (nanga def, mangi fi, jërëjëf, waaw for yes), un taximan, une essencerie" }
  });

  add('ci', {
    dialog: { t: "On dit quoi ?", nl: "Koffi neemt je mee naar een maquis in Abidjan.", place: "Abidjan 🇨🇮", who: { Koffi: 'm', Sanne: 'f' },
      lines: [
        ["Koffi", "Bonjour Sanne ! On dit quoi ?", "Dag Sanne! Hoe is het?", LOC("on dit quoi ?", "Ivoorkust", "ça va ?")],
        ["Sanne", "Bonjour Koffi ! On dit… quoi ? Je ne comprends pas.", "Dag Koffi! Men zegt… wat? Ik begrijp het niet."],
        ["Koffi", "«On dit quoi ?», c'est «ça va ?». Tu réponds : «On est là !»", "«On dit quoi?» is «gaat het?». Je antwoordt: «On est là!»", "🗺️ <b>on est là</b>: letterlijk «we zijn er». Het betekent: het gaat wel, we zijn er nog."],
        ["Sanne", "On est là ! Tu as faim ?", "On est là! Heb je honger?"],
        ["Koffi", "Oui ! On va prendre gbaka pour aller au maquis.", "Ja! We nemen de minibus om naar de maquis te gaan.", UITZ("prendre gbaka", "prendre le gbaka", "In het straat-Frans van Abidjan valt het lidwoord vaak weg.", "de talen van Ivoorkust kennen geen lidwoord vóór het woord, en dat klinkt door in het Frans van de straat.") + "<br>🗺️ <b>le gbaka</b>: de minibus."],
        ["Sanne", "Le maquis, c'est un restaurant ?", "De maquis, is dat een restaurant?"],
        ["Koffi", "Oui, un petit restaurant en plein air. On mange le garba avec l'alloco.", "Ja, een klein restaurant in de open lucht. We eten garba met alloco.", "🗺️ <b>le garba</b>: cassave-couscous met gebakken tonijn. <b>l'alloco</b>: gebakken bakbanaan."],
        ["Sanne", "Ça a l'air bon ! Mais je n'ai pas beaucoup d'argent.", "Dat klinkt lekker! Maar ik heb niet veel geld."],
        ["Koffi", "Y a foye ! Je t'invite. Ce soir, on va s'enjailler !", "Geen probleem! Ik trakteer. Vanavond gaan we plezier maken!", LOC("y a foye", "Ivoorkust", "il n'y a pas de problème") + "<br>" + LOC("s'enjailler", "Ivoorkust", "s'amuser") + " Het komt van het Engelse enjoy en hoort bij het nouchi, de straattaal van Abidjan."]
      ],
      q: [Q("Que veut dire «On dit quoi ?»", "Ça va ?", "Que dis-tu ?", "Au revoir"), Q("Qu'est-ce qu'un maquis ?", "Un petit restaurant", "Un bus", "Un marché"), Q("Que veut dire «s'enjailler» ?", "S'amuser", "Manger", "Dormir")] },
    talk: { title: "Eten in de maquis", place: "Abidjan", nl: "Je docent speelt tantie Awa, de bazin van een eettentje in de open lucht.", goal: "Bestel garba of alloco met iets te drinken, vraag wat erin zit en betaal.",
      role: "You are Tantie Awa, who runs a lively maquis (open-air restaurant) in Abidjan, Côte d'Ivoire. You are loud, funny and motherly, call customers «ma chérie» or «mon frère», recommend garba, alloco and grilled chicken, and give prices in CFA francs.",
      local: "Ivorian French with light Nouchi: on dit quoi ?, on est là, y a foye, ça va aller, s'enjailler, c'est comment ?, articles sometimes dropped (prendre gbaka), yako for sympathy" }
  });

  add('cd', {
    dialog: { t: "Mbote !", nl: "In Kinshasa loopt een man in een roze pak voorbij. Patrick legt het uit.", place: "Kinshasa 🇨🇩", who: { Patrick: 'm', Sanne: 'f' },
      lines: [
        ["Patrick", "Mbote, Sanne ! Bienvenue à Kinshasa.", "Hallo, Sanne! Welkom in Kinshasa.", LOC("mbote", "Congo (Lingala)", "bonjour")],
        ["Sanne", "Mbote, Patrick ! Ça va ?", "Mbote, Patrick! Gaat het?"],
        ["Patrick", "Ça va malamu ! «Malamu», c'est «bien» en lingala.", "Het gaat goed! «Malamu» is «goed» in het Lingala.", LOC("malamu", "Congo (Lingala)", "bien")],
        ["Sanne", "Malamu ! Dis, pourquoi cet homme porte un costume rose ?", "Malamu! Zeg, waarom draagt die man een roze pak?"],
        ["Patrick", "C'est un sapeur ! Il aime la sape : les beaux vêtements.", "Dat is een sapeur! Hij houdt van de sape: mooie kleren.", "🗺️ <b>un sapeur</b>: een dandy die er altijd piekfijn uitziet. <b>La sape</b> is ook in Frankrijk spreektaal voor kleding."],
        ["Sanne", "Il est très élégant ! Il a quel âge ?", "Hij is erg elegant! Hoe oud is hij?"],
        ["Patrick", "Il a septante ans, et il danse encore la rumba !", "Hij is zeventig, en hij danst nog steeds de rumba!", UITZ("septante", "soixante-dix", "In Congo telt men zoals in België: septante (70) en nonante (90).", "Congo was een Belgische kolonie; het Frans is er via België gekomen.") + "<br>🗺️ <b>la rumba</b>: de Congolese dansmuziek, sinds 2021 werelderfgoed."],
        ["Sanne", "Septante ans ! Bravo. On va manger où ?", "Zeventig jaar! Bravo. Waar gaan we eten?"],
        ["Patrick", "Au malewa, là-bas. Je vous prie de bien vouloir me suivre, madame !", "Bij het eetkraampje, daar. Wilt u zo vriendelijk zijn mij te volgen, mevrouw!", "🗺️ <b>le malewa</b>: het eetkraampje.<br>🗺️ Congolezen spreken graag verzorgd en plechtig Frans, ook voor de grap: <b>je vous prie de bien vouloir…</b> is heel formeel."]
      ],
      q: [Q("Que veut dire «mbote» ?", "Bonjour", "Merci", "Bien"), Q("Qu'est-ce qu'un sapeur ?", "Un homme très élégant", "Un chauffeur", "Un cuisinier"), Q("Quel âge a le sapeur ?", "Septante ans", "Soixante ans", "Nonante ans")] },
    talk: { title: "Bij de kleermaker", place: "Kinshasa", nl: "Je docent speelt maître Papy, kleermaker en trotse sapeur.", goal: "Laat een overhemd of jurk maken: kies de kleur, noem je maat en vraag wanneer het klaar is.",
      role: "You are Maître Papy, a tailor and proud sapeur in Kinshasa, DR Congo. You speak elegant, slightly ceremonious French (Je vous prie…, Soyez la bienvenue), love bright colors and fine fabric, count with septante and nonante, and greet with «Mbote !».",
      local: "Congolese French: careful, formal and flowery, septante and nonante, Lingala words (mbote, malamu), la sape, un sapeur, ambiancer, le matabiche" }
  });
})(window.SPT);
