/* Uitbreiding «Op reis», verdieping per land (Duits): bij elk land een eigen dialoog en een eigen gesprek met de docent.
   Zelfde vorm als content/landen-praten.js (Spaans). Sanne is de bezoeker (me) en praat het Duits van de basiscursus (Duitsland);
   de ander praat zoals in het land. Uitleg: 🗺️ lokaal woord + standaardwoord, of «⚠️ Uitzondering» met de reden. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('de-nl')) return;
  const add = (id, x) => { const p = (S.places || []).find(q => q.id === id); if (p) { x.dialog.me = 'Sanne'; Object.assign(p, x); } };
  const LOC = (w, land, neu) => '🗺️ <b>' + w + '</b>: zo zeggen ze het in ' + land + '. Standaard: <b>' + neu + '</b>.';
  const UITZ = (vorm, neu, uitleg, reden) => '⚠️ <b>Uitzondering:</b> <b>' + vorm + '</b> in plaats van <b>' + neu + '</b>. ' + uitleg + ' Reden: ' + reden;
  const Q = (q, a, b, c) => ({ t: 'mc', q, o: [a, b, c] });

  add('de', {
    dialog: { t: 'Moin! Na?', nl: 'In Hamburg zeg je ook ’s avonds «Moin». Jonas heeft geen zin om te koken.', place: 'Hamburg 🇩🇪', who: { Jonas: 'm', Sanne: 'f' },
      lines: [
        ['Jonas', 'Moin, Sanne! Na?', 'Hoi, Sanne! En?', LOC('Moin!', 'Noord-Duitsland', 'Hallo!') + '<br>🗺️ <b>Na?</b> is de kortste vraag van het Duits: «en, hoe is het?»'],
        ['Sanne', 'Hallo Jonas! Guten Morgen… aber es ist schon Abend!', 'Hallo Jonas! Goedemorgen… maar het is al avond!'],
        ['Jonas', '«Moin» sagt man hier den ganzen Tag. Hast du Hunger?', '«Moin» zeg je hier de hele dag. Heb je honger?', '⚠️ <b>Uitzondering:</b> <b>Moin</b> lijkt op Morgen, maar je zegt het de hele dag, ook ’s avonds. Reden: het komt waarschijnlijk van het Nederduitse en Friese «moi» (mooi, goed), niet van «Morgen».'],
        ['Sanne', 'Ja, ein bisschen. Und du?', 'Ja, een beetje. En jij?'],
        ['Jonas', 'Ich hab keinen Bock auf Kochen. Gehen wir in die Kneipe?', 'Ik heb geen zin om te koken. Gaan we naar de kroeg?', UITZ('ich hab', 'ich habe', 'In spreektaal valt de -e aan het eind vaak weg: ich hab, ich komm, ich geh.', 'een onbeklemtoonde -e slijt weg als je snel praat. Je schrijft wel «ich habe».') + '<br>' + LOC('keinen Bock haben', 'Duitsland (spreektaal)', 'keine Lust haben') + '<br>' + LOC('die Kneipe', 'Duitsland (spreektaal)', 'die Bar, das Lokal')],
        ['Sanne', 'Gern! Ist die Kneipe teuer?', 'Graag! Is de kroeg duur?'],
        ['Jonas', 'Quatsch! Ein Feierabendbier kostet drei Euro.', 'Onzin! Een biertje na het werk kost drie euro.', LOC('Quatsch!', 'Duitsland (spreektaal)', 'Unsinn!') + '<br>🗺️ <b>das Feierabendbier</b>: het biertje na het werk. <b>Feierabend</b> is het moment dat je werkdag erop zit.'],
        ['Sanne', 'Super. Kommt dein Freund Lukas auch?', 'Top. Komt je vriend Lukas ook?'],
        ['Jonas', 'Ja, mein Kumpel kommt auch. Das wird krass!', 'Ja, mijn maat komt ook. Dat wordt te gek!', LOC('der Kumpel', 'Duitsland (spreektaal)', 'der Freund') + '<br>' + LOC('krass', 'Duitsland (spreektaal)', 'toll, extrem')]
      ],
      q: [Q('Wann sagt man in Hamburg «Moin»?', 'Den ganzen Tag', 'Nur am Morgen', 'Nur am Abend'), Q('Wohin gehen Jonas und Sanne?', 'In die Kneipe', 'Ins Kino', 'Nach Hause'), Q('Was kostet ein Feierabendbier?', 'Drei Euro', 'Fünf Euro', 'Zehn Euro')] },
    talk: { title: 'Bij de bakker', place: 'Berlin', nl: 'Je docent speelt Herr Krause, een Berlijnse bakker: kortaf, maar met een goed hart.', goal: 'Koop broodjes en koffie, vraag wat het kost en betaal.',
      role: 'You are Herr Krause, a baker in Berlin with the typical "Berliner Schnauze": blunt and quick, but good-hearted and funny. You call bread rolls "Schrippen", say "Na?" as a greeting, "Mahlzeit!" around noon and "Tschüssi!" at the end, and ask "Sonst noch wat?".',
      local: 'Colloquial German of Germany: Moin / Na?, dropped endings (ich hab, nich, is), a light touch of Berlin dialect (ick, dit, wat, Schrippe), words like Quatsch, krass, Kumpel, Feierabend' }
  });

  add('at', {
    dialog: { t: 'Das geht sich aus!', nl: 'Florian neemt je mee naar een Weens eetcafé, waar een stoel geen Stuhl heet.', place: 'Wien 🇦🇹', who: { Florian: 'm', Sanne: 'f' },
      lines: [
        ['Florian', 'Servus, Sanne! Willkommen in Wien.', 'Hoi, Sanne! Welkom in Wenen.', LOC('Servus!', 'Oostenrijk', 'Hallo! / Tschüss!') + ' Je zegt het bij het komen én bij het gaan.'],
        ['Sanne', 'Hallo Florian! Ich habe Hunger. Gehen wir essen?', 'Hallo Florian! Ik heb honger. Gaan we eten?'],
        ['Florian', 'Ja, ich kenne ein Beisl. Dort ist das Schnitzel leiwand!', 'Ja, ik ken een eetcafé. Daar is de schnitzel geweldig!', LOC('das Beisl', 'Oostenrijk', 'das kleine Lokal') + '<br>' + LOC('leiwand', 'Wenen', 'toll, super')],
        ['Sanne', 'Was gibt es zum Schnitzel?', 'Wat krijg je bij de schnitzel?'],
        ['Florian', 'Erdäpfel und einen Salat mit Paradeisern.', 'Aardappelen en een salade met tomaten.', LOC('der Erdapfel', 'Oostenrijk', 'die Kartoffel') + ' Net als ons «aardappel».<br>' + LOC('der Paradeiser', 'Oostenrijk', 'die Tomate') + ' Letterlijk: paradijsappel.'],
        ['Sanne', 'Kartoffeln und Tomaten, richtig? Haben wir genug Zeit? Mein Zug fährt um acht.', 'Aardappelen en tomaten, toch? Hebben we genoeg tijd? Mijn trein gaat om acht uur.'],
        ['Florian', 'Ja, das geht sich aus! Komm, nimm den Sessel am Fenster.', 'Ja, dat halen we net! Kom, neem de stoel bij het raam.', LOC('das geht sich aus', 'Oostenrijk', 'das passt, das reicht')],
        ['Sanne', 'Den Sessel? Das ist doch ein Stuhl!', 'De fauteuil? Dat is toch een stoel!'],
        ['Florian', 'Bei uns heißt jeder Stuhl Sessel. Mahlzeit!', 'Bij ons heet elke stoel Sessel. Eet smakelijk!', UITZ('der Sessel', 'der Stuhl', 'In Oostenrijk is een Sessel een gewone stoel; in Duitsland is het een fauteuil.', '«Sessel» betekende vroeger elk meubel om op te zitten. Duitsland ging er later alleen de luie stoel mee bedoelen, Oostenrijk niet.')]
      ],
      q: [Q('Was ist ein Beisl?', 'Ein kleines Lokal', 'Ein Zug', 'Ein Kaffee'), Q('Was sind Erdäpfel?', 'Kartoffeln', 'Tomaten', 'Äpfel'), Q('Was ist ein Sessel in Österreich?', 'Ein Stuhl', 'Ein Tisch', 'Ein Fenster')] },
    talk: { title: 'In het koffiehuis', place: 'Wien', nl: 'Je docent speelt Herr Franz, ober in een deftig Weens koffiehuis.', goal: 'Bestel een koffie en een stuk taart, en vraag daarna om de rekening.',
      role: 'You are Herr Franz, a waiter ("Herr Ober") in a traditional Viennese coffee house. You are dignified, a little grumpy and secretly charming. You greet with "Grüß Gott", say "Bitte sehr" and "Sehr wohl", serve Melange and Sachertorte "mit Schlagobers", and coffee always comes with a glass of water.',
      local: 'Austrian German: Grüß Gott, Servus, Baba, die Melange, das Schlagobers, das Sackerl, Erdäpfel, Paradeiser, "das geht sich aus", diminutives in -erl, leiwand' }
  });

  add('ch', {
    dialog: { t: 'Das Tram und das Velo', nl: 'In Zürich klinkt het Duits een beetje Frans. Reto helpt je op weg.', place: 'Zürich 🇨🇭', who: { Reto: 'm', Sanne: 'f' },
      lines: [
        ['Reto', 'Grüezi, Sanne! Willkommen in Zürich.', 'Goedendag, Sanne! Welkom in Zürich.', LOC('Grüezi!', 'Zwitserland', 'Guten Tag!')],
        ['Sanne', 'Guten Tag, Reto! Fahren wir mit dem Bus in die Stadt?', 'Goedendag, Reto! Gaan we met de bus naar de stad?'],
        ['Reto', 'Nein, wir nehmen das Tram. Hast du schon ein Billett?', 'Nee, we nemen de tram. Heb je al een kaartje?', UITZ('das Tram', 'die Straßenbahn (die Tram)', 'In Zwitserland is Tram onzijdig.', 'de Zwitsers namen het woord over van het Engelse «tramway»; in Duitsland is «die Tram» een afkorting van «die Trambahn», en dus vrouwelijk.') + '<br>' + LOC('das Billett', 'Zwitserland', 'die Fahrkarte')],
        ['Sanne', 'Ein Billett? Ach so, eine Fahrkarte! Nein, noch nicht.', 'Een Billett? O, een kaartje! Nee, nog niet.'],
        ['Reto', 'Kein Problem. Und morgen fahren wir mit dem Velo zum See.', 'Geen probleem. En morgen gaan we met de fiets naar het meer.', LOC('das Velo', 'Zwitserland', 'das Fahrrad') + ' Het komt uit het Frans (vélo).'],
        ['Sanne', 'Mit dem Fahrrad? Schön! Und was essen wir zum Frühstück?', 'Met de fiets? Leuk! En wat eten we bij het ontbijt?'],
        ['Reto', 'Zum Zmorge gibt es ein Gipfeli und ein Müesli.', 'Bij het ontbijt is er een croissant en muesli.', LOC('der Zmorge', 'Zwitserland', 'das Frühstück') + '<br>' + LOC('das Gipfeli', 'Zwitserland', 'das Croissant') + '<br>🗺️ Verkleinwoorden eindigen in Zwitserland op <b>-li</b>, niet op -chen.'],
        ['Sanne', 'Lecker! Vielen Dank, Reto.', 'Lekker! Hartelijk dank, Reto.'],
        ['Reto', 'Gern! Hier sagt man: Merci vilmal. Uf Widerluege, bis morgen!', 'Graag gedaan! Hier zeg je: Merci vilmal. Tot ziens, tot morgen!', LOC('Merci vilmal!', 'Zwitserland', 'Vielen Dank!') + '<br>' + LOC('Uf Widerluege!', 'Zwitserland', 'Auf Wiedersehen!')]
      ],
      q: [Q('Was ist ein Billett?', 'Eine Fahrkarte', 'Ein Fahrrad', 'Ein Frühstück'), Q('Wie fahren sie morgen zum See?', 'Mit dem Velo', 'Mit dem Tram', 'Mit dem Auto'), Q('Was ist ein Gipfeli?', 'Ein Croissant', 'Ein Berg', 'Ein Kaffee')] },
    talk: { title: 'Aan het loket op het station', place: 'Zürich Hauptbahnhof', nl: 'Je docent speelt Frau Meier, die treinkaartjes verkoopt.', goal: 'Koop een kaartje naar Luzern, vraag de prijs in franken en van welk spoor de trein vertrekt.',
      role: 'You are Frau Meier, who sells tickets at the counter of Zurich main station. You are precise, calm and friendly. You speak Swiss Standard German (not dialect), greet with "Grüezi", say "Billett", "Perron" and "Merci vilmal", give prices in Franken, and the train leaves exactly on time.',
      local: 'Swiss Standard German: Grüezi, das Billett, das Velo, das Tram, der Perron, parkieren, Merci vilmal, Uf Widerluege, diminutives in -li, ss instead of ß. No full dialect.' }
  });

  add('li', {
    dialog: { t: 'Hoi im Ländle', nl: 'Fabian laat je zijn piepkleine land zien, met een kasteel erboven.', place: 'Vaduz 🇱🇮', who: { Fabian: 'm', Sanne: 'f' },
      lines: [
        ['Fabian', 'Hoi, Sanne! Willkommen im Ländle.', 'Hoi, Sanne! Welkom in het landje.', LOC('Hoi!', 'Liechtenstein', 'Hallo!') + ' Precies zoals bij ons.<br>🗺️ <b>das Ländle</b>: het landje, de koosnaam voor Liechtenstein.'],
        ['Sanne', 'Hoi, Fabian! Das Land ist wirklich klein!', 'Hoi, Fabian! Het land is echt klein!'],
        ['Fabian', 'Ja, wir haben nur elf Gemeinden. Siehst du das Schloss da oben?', 'Ja, we hebben maar elf gemeenten. Zie je het kasteel daarboven?'],
        ['Sanne', 'Ja! Wer wohnt dort?', 'Ja! Wie woont daar?'],
        ['Fabian', 'Der Fürst. Liechtenstein ist ein Fürstentum.', 'De vorst. Liechtenstein is een vorstendom.', '🗺️ <b>der Fürst</b>: de vorst. Liechtenstein heeft geen koning, maar een vorst, en heet daarom <b>das Fürstentum</b>.'],
        ['Sanne', 'Kann man das Schloss besuchen?', 'Kun je het kasteel bezoeken?'],
        ['Fabian', 'Leider nicht. Aber wir können mit dem Velo zum Rhein fahren.', 'Helaas niet. Maar we kunnen met de fiets naar de Rijn gaan.', LOC('das Velo', 'Liechtenstein en Zwitserland', 'das Fahrrad')],
        ['Sanne', 'Gern! Was kostet ein Velo für einen Tag?', 'Graag! Wat kost een fiets voor een dag?'],
        ['Fabian', 'Zwanzig Franken. Wir zahlen hier mit Schweizer Franken, nicht mit Euro.', 'Twintig frank. We betalen hier met Zwitserse franken, niet met euro’s.', '⚠️ <b>Uitzondering:</b> je betaalt met <b>Franken</b>, niet met Euro, al heeft Liechtenstein geen eigen munt. Reden: het land heeft sinds 1924 een douane- en muntunie met Zwitserland.']
      ],
      q: [Q('Wer wohnt im Schloss?', 'Der Fürst', 'Fabian', 'Niemand'), Q('Wie viele Gemeinden hat Liechtenstein?', 'Elf', 'Zwanzig', 'Hundert'), Q('Womit zahlt man in Liechtenstein?', 'Mit Franken', 'Mit Euro', 'Mit Dollar')] },
    talk: { title: 'Bij het toeristenbureau', place: 'Vaduz', nl: 'Je docent speelt Herr Marxer van het toeristenbureau.', goal: 'Vraag wat je kunt zien, haal een stempel in je paspoort en vraag wat dat kost.',
      role: 'You are Herr Marxer, who works at the tourist office (Liechtenstein Center) in Vaduz. You are friendly and proud of the small country. You greet with "Hoi", recommend the walk up to the castle, the Kunstmuseum and the vineyards of the Fürst, and offer the souvenir passport stamp for three Franken.',
      local: 'Standard German as used in Liechtenstein, with Swiss-style words: Hoi, Tschau, das Velo, das Billett, Franken and Rappen, das Ländle, der Fürst' }
  });

  add('lu', {
    dialog: { t: 'Moien!', nl: 'Luc groeit op met drie talen. Dat hoor je aan zijn Duits.', place: 'Luxemburg 🇱🇺', who: { Luc: 'm', Sanne: 'f' },
      lines: [
        ['Luc', 'Moien, Sanne! Willkommen in Luxemburg.', 'Hallo, Sanne! Welkom in Luxemburg.', LOC('Moien!', 'Luxemburg', 'Hallo!') + ' Het is Luxemburgs.'],
        ['Sanne', 'Guten Morgen, Luc!', 'Goedemorgen, Luc!'],
        ['Luc', '«Moien» heißt einfach «Hallo». Das sagen wir den ganzen Tag.', '«Moien» betekent gewoon «hallo». Dat zeggen we de hele dag.'],
        ['Sanne', 'Ach so! Moien! Sprichst du zu Hause Deutsch?', 'O zo! Moien! Spreek je thuis Duits?'],
        ['Luc', 'Nein, Luxemburgisch. Aber in der Schule lernen wir auch Deutsch und Französisch. Wir sind dreisprachig.', 'Nee, Luxemburgs. Maar op school leren we ook Duits en Frans. We zijn drietalig.', '🗺️ <b>dreisprachig</b>: drietalig. Luxemburgs is de taal van thuis, Duits leer je het eerst lezen en schrijven, en Frans is de taal van de wet.'],
        ['Sanne', 'Drei Sprachen! Und wo arbeitest du?', 'Drie talen! En waar werk je?'],
        ['Luc', 'In der Stadt. Viele Kollegen sind Grenzgänger: Sie wohnen in Deutschland, Frankreich oder Belgien.', 'In de stad. Veel collega’s zijn grensarbeiders: ze wonen in Duitsland, Frankrijk of België.', '🗺️ <b>der Grenzgänger</b>: iemand die elke dag de grens over gaat om te werken. In Luxemburg is dat bijna de helft van de werknemers.'],
        ['Sanne', 'Interessant. Gehen wir zu Fuß ins Zentrum?', 'Interessant. Gaan we te voet naar het centrum?'],
        ['Luc', 'Ja, aber bleib auf dem Trottoir, da kommt ein Camion! Äddi, bis später!', 'Ja, maar blijf op de stoep, daar komt een vrachtwagen! Dag, tot later!', UITZ('das Trottoir, der Camion', 'der Gehweg, der Lastwagen', 'In Luxemburg gebruik je in het Duits veel Franse woorden.', 'Frans is er de taal van bestuur, wet en verkeersborden; die woorden gebruikt iedereen in alle drie de talen.') + '<br>' + LOC('Äddi!', 'Luxemburg', 'Tschüss!')]
      ],
      q: [Q('Was heißt «Moien»?', 'Hallo', 'Gute Nacht', 'Danke'), Q('Wie viele Sprachen spricht Luc?', 'Drei', 'Zwei', 'Eine'), Q('Was ist ein Camion?', 'Ein Lastwagen', 'Ein Gehweg', 'Ein Zug')] },
    talk: { title: 'In het café', place: 'Luxemburg-Stadt', nl: 'Je docent speelt Frau Schmit, serveerster die moeiteloos van taal wisselt.', goal: 'Bestel koffie en iets te eten, en vraag welke talen ze in Luxemburg spreken.',
      role: 'You are Frau Schmit, a waitress in a café on the Place d’Armes in Luxembourg City. You are cheerful and switch easily between languages, but you stay in German for this customer. You greet with "Moien", say "Merci" and "Äddi", and like to explain how Luxembourgers use three languages every day.',
      local: 'German as used in Luxembourg: Moien, Äddi, Merci, French loanwords (das Trottoir, der Camion, der Coiffeur), mentions of Luxembourgish and French; the sentences stay in standard German' }
  });

  add('be', {
    dialog: { t: 'Deutsch in Belgien', nl: 'In Eupen is Duits de moedertaal. Tobias belt je op zijn «GSM».', place: 'Eupen 🇧🇪', who: { Tobias: 'm', Sanne: 'f' },
      lines: [
        ['Tobias', 'Guten Tag, Sanne! Willkommen in Ostbelgien.', 'Goedendag, Sanne! Welkom in Oost-België.', '🗺️ <b>Ostbelgien</b>: het Duitstalige stukje van België, rond Eupen en Sankt Vith.'],
        ['Sanne', 'Hallo Tobias! Spricht man hier wirklich Deutsch?', 'Hallo Tobias! Spreken ze hier echt Duits?'],
        ['Tobias', 'Ja! Hier leben fast achtzigtausend Belgier mit Deutsch als Muttersprache.', 'Ja! Hier wonen bijna tachtigduizend Belgen met Duits als moedertaal.'],
        ['Sanne', 'Das wusste ich nicht! Sprichst du auch Französisch?', 'Dat wist ik niet! Spreek je ook Frans?'],
        ['Tobias', 'Natürlich, ich bin zweisprachig. Und ein bisschen Niederländisch kann ich auch.', 'Natuurlijk, ik ben tweetalig. En een beetje Nederlands kan ik ook.', '🗺️ <b>zweisprachig</b>: tweetalig. België heeft drie officiële talen: Nederlands, Frans en Duits.'],
        ['Sanne', 'Toll! Kann ich dich morgen anrufen?', 'Wat goed! Kan ik je morgen bellen?'],
        ['Tobias', 'Klar, ruf mich auf dem GSM an.', 'Tuurlijk, bel me op mijn mobiel.', UITZ('der GSM', 'das Handy', 'In Oost-België heet een mobieltje GSM, net als in Vlaanderen en Wallonië.', 'het is de naam van de techniek (GSM-netwerk), die in heel België het gewone woord is geworden. Duitsland koos het zelfbedachte «Handy».')],
        ['Sanne', 'GSM? Ach, das Handy! Und was essen wir heute?', 'GSM? O, de mobiel! En wat eten we vandaag?'],
        ['Tobias', 'Fritten, natürlich! Wir sind in Belgien. Danach wandern wir im Hohen Venn.', 'Friet, natuurlijk! We zijn in België. Daarna wandelen we in de Hoge Venen.', LOC('die Fritten', 'Oost-België', 'die Pommes') + '<br>🗺️ <b>das Hohe Venn</b>: de Hoge Venen, het natuurgebied bij Eupen.']
      ],
      q: [Q('Welche Sprache ist in Ostbelgien Muttersprache?', 'Deutsch', 'Spanisch', 'Englisch'), Q('Was ist ein GSM?', 'Ein Handy', 'Ein Auto', 'Ein Restaurant'), Q('Was essen sie heute?', 'Fritten', 'Pizza', 'Suppe')] },
    talk: { title: 'Bij de frietkraam', place: 'Eupen', nl: 'Je docent speelt Frau Schmitz van de frietkraam op het marktplein.', goal: 'Bestel friet met een saus, vraag wat het kost en maak een praatje over de drie talen van België.',
      role: 'You are Frau Schmitz, who runs a Frittenbude on the market square in Eupen, in German-speaking East Belgium. You are down-to-earth and friendly, proud to be Belgian, speak German with customers and switch to French or Dutch when needed. You ask "Mit Mayo?" and say "GSM" for a mobile phone.',
      local: 'German of East Belgium: der GSM, die Fritten, der Schöffe, die Mutuelle, occasional French words, mentions of Belgium’s three languages; otherwise standard German' }
  });
})(window.SPT);
