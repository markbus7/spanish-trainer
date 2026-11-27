/* Uitbreiding «Op reis», verdieping per land (Spaans): bij elk land een eigen dialoog en een eigen gesprek met Profe Lupe.
   Hoort bij content/landen.js; js/mundo.js toont het op de landpagina onder «Praten in <land>».
   Per land:
     dialog = { t: titel, nl: waar het over gaat, place: 'Stad 🇽🇽' (de vlag kiest het personage en de stem),
                who: { naam: 'f' | 'm' } (voor de stem; Mark is de leerling),
                lines: [spreker, Spaans, Nederlands, uitleg], q: drie vragen (eerste optie is goed) }
              De uitleg (4e veld) benoemt elk lokaal woord met het neutrale woord erbij. Wijkt een vorm af van de regel
              uit de basiscursus (vos querés, ¿cómo tú estás?, venís), dan staat er «Uitzondering» met de reden.
     talk   = { title, place, nl: wie Lupe speelt, goal, role: opdracht voor de AI (Spaans), local: het taalgebruik (Engels, voor de AI) }
   Mark praat steeds neutraal Latijns-Amerikaans Spaans, zoals in de basiscursus; de ander praat zoals in het land. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return;
  const add = (id, x) => { const p = (S.places || []).find(q => q.id === id); if (p) Object.assign(p, x); };
  const LOC = (w, land, neu) => '🗺️ <b>' + w + '</b>: zo zeggen ze het in ' + land + '. Neutraal: <b>' + neu + '</b>.';
  const VOS = (vorm, neu, land) => '⚠️ <b>Uitzondering:</b> <b>' + vorm + '</b> in plaats van <b>' + neu + '</b>. In ' + land + ' zeg je onder vrienden <b>vos</b> in plaats van tú, met een eigen werkwoordsvorm met de klemtoon achteraan. Reden: die vorm komt van het oude <i>vosotros</i> (tenéis → tenés, tomad → tomá). Jij mag gewoon <b>' + neu + '</b> blijven zeggen.';
  const TUV = (zin, neu) => '⚠️ <b>Uitzondering:</b> <b>' + zin + '</b> in plaats van <b>' + neu + '</b>. In het Caribisch gebied blijft <b>tú</b> vóór het werkwoord staan, ook in een vraag. Reden: de s aan het eind valt daar weg (<i>estás</i> klinkt als <i>etá</i>), dus zonder tú hoor je niet meer wie er bedoeld wordt.';

  add('mx', {
    dialog: { t: 'Después de la chamba', nl: 'Sofía haalt je op na het werk.', place: 'Ciudad de México 🇲🇽', who: { 'Sofía': 'f', Mark: 'm' },
      lines: [
        ['Sofía', '¡Qué onda, Mark! ¿Ya saliste de la chamba?', 'Hoe is het, Mark! Ben je al klaar met werken?', LOC('¿qué onda?', 'Mexico', '¿cómo estás?') + '<br>' + LOC('la chamba', 'Mexico', 'el trabajo')],
        ['Mark', 'Sí, por fin. Hoy tuve mucho trabajo.', 'Ja, eindelijk. Vandaag had ik veel werk.'],
        ['Sofía', '¡Órale! Entonces vamos por unos tacos. Yo invito.', 'Kom op! Dan gaan we taco’s halen. Ik trakteer.', '🗺️ <b>¡órale!</b> hoor je in Mexico de hele dag: oké, kom op of wauw, afhankelijk van de toon.'],
        ['Mark', '¡Qué bueno! ¿Vamos en metro?', 'Wat fijn! Gaan we met de metro?'],
        ['Sofía', 'No, mejor en camión. Pasa ahorita.', 'Nee, liever met de bus. Hij komt zo.', LOC('el camión', 'Mexico', 'el autobús') + ' In andere landen is een camión een vrachtwagen.'],
        ['Mark', '¿«Ahorita» es ahora mismo?', 'Is «ahorita» nu meteen?'],
        ['Sofía', 'A veces. Aquí «ahorita» puede ser en cinco minutos… o en una hora.', 'Soms. Hier kan «ahorita» over vijf minuten zijn… of over een uur.', '🗺️ <b>ahorita</b> is het verkleinwoord van ahora. In Mexico betekent het vaak «straks, misschien», niet «nu meteen».'],
        ['Mark', 'Entonces mejor caminamos, ¿no?', 'Dan kunnen we beter lopen, toch?'],
        ['Sofía', '¡Ándale! Así llegamos con más hambre. ¡Qué padre!', 'Precies! Dan komen we met meer honger aan. Wat tof!', LOC('¡qué padre!', 'Mexico', '¡qué bueno!')]
      ],
      q: [
        { t: 'mc', q: '¿Quién invita los tacos?', o: ['Sofía', 'Mark', 'Nadie'] },
        { t: 'mc', q: '¿Qué es «el camión» en México?', o: ['El autobús', 'El trabajo', 'El dinero'] },
        { t: 'mc', q: '¿Cómo van al final a los tacos?', o: ['Caminando', 'En metro', 'En camión'] }
      ] },
    talk: { title: 'Op de tianguis (straatmarkt)', place: 'Coyoacán, Ciudad de México', nl: 'Lupe speelt doña Chayo, die op de zondagsmarkt armbandjes en esquites verkoopt.', goal: 'Vraag wat iets kost, ding een beetje af en reageer op haar Mexicaanse uitroepen.',
      role: 'Eres doña Chayo, vendedora de artesanías y esquites en el tianguis de Coyoacán, en la Ciudad de México. Hablas con cariño y buen humor, dices «joven» o «güerito», preguntas «¿mande?» cuando no entiendes y aceptas regatear un poco.',
      local: 'Mexico City speech: "¿mande?" instead of "¿qué?", diminutives (ahorita, tantito, cafecito), exclamations like ¡órale!, ¡ándale!, ¡qué padre!' }
  });

  add('gt', {
    dialog: { t: 'La camioneta a Antigua', nl: 'Ana Lucía helpt je de goede bus te vinden.', place: 'Ciudad de Guatemala 🇬🇹', who: { 'Ana Lucía': 'f', Mark: 'm' },
      lines: [
        ['Ana Lucía', '¡Qué onda, Mark! ¿Vos también vas para Antigua?', 'Hoe is het, Mark! Ga jij ook naar Antigua?', '🗺️ <b>vos</b>: in Guatemala zeg je onder vrienden vos in plaats van tú.'],
        ['Mark', 'Sí, pero no sé qué bus tomar.', 'Ja, maar ik weet niet welke bus ik moet nemen.'],
        ['Ana Lucía', 'Tomá esta camioneta. Sale ya y cuesta diez quetzales.', 'Neem deze bus. Hij vertrekt zo en kost tien quetzal.', VOS('tomá', 'toma', 'Guatemala') + '<br>' + LOC('la camioneta', 'Guatemala', 'el autobús')],
        ['Mark', '¡Qué bueno! No tengo mucho dinero.', 'Wat fijn! Ik heb niet veel geld.'],
        ['Ana Lucía', 'Yo tampoco tengo mucho pisto. ¿Tenés chumpa? En Antigua hace frío de noche.', 'Ik heb ook niet veel geld. Heb je een jas? In Antigua is het ’s nachts koud.', LOC('el pisto', 'Guatemala', 'el dinero') + '<br>' + LOC('la chumpa', 'Guatemala', 'la chaqueta') + '<br>' + VOS('tenés', 'tienes', 'Guatemala')],
        ['Mark', 'Sí, tengo una chaqueta en la mochila.', 'Ja, ik heb een jas in mijn rugzak.'],
        ['Ana Lucía', '¡Cabal! Entonces subamos, que ya se va.', 'Precies! Laten we dan instappen, want hij vertrekt al.', LOC('¡cabal!', 'Guatemala', '¡exacto!')],
        ['Mark', '¡Qué chilero es viajar así!', 'Wat tof om zo te reizen!', LOC('¡qué chilero!', 'Guatemala', '¡qué bueno!')]
      ],
      q: [
        { t: 'mc', q: '¿Adónde van Mark y Ana Lucía?', o: ['A Antigua', 'A la playa', 'Al aeropuerto'] },
        { t: 'mc', q: '¿Qué es «el pisto»?', o: ['El dinero', 'La chaqueta', 'El bus'] },
        { t: 'mc', q: '¿Por qué necesita Mark una chumpa?', o: ['Porque hace frío de noche', 'Porque llueve mucho', 'Porque es elegante'] }
      ] },
    talk: { title: 'Op de koffiefinca', place: 'Antigua', nl: 'Lupe speelt Maynor, gids op een koffieplantage aan de voet van de vulkaan.', goal: 'Vraag hoe koffie wordt gemaakt, proef een kopje en reageer op het Guatemalteekse vos.',
      role: 'Eres Maynor, guía de una finca de café cerca de Antigua Guatemala, al pie del volcán de Agua. Tratas al visitante de vos (vos querés, vos tenés, mirá, vení), explicas cómo se cultiva y se tuesta el café y ofreces una taza.',
      local: 'Guatemalan speech: voseo among friends (vos tenés, vos querés, imperative tomá, vení), clear s, words like chilero, cabal, pisto' }
  });

  add('sv', {
    dialog: { t: 'En la pupusería', nl: 'Je proeft je eerste pupusa bij Marisol.', place: 'San Salvador 🇸🇻', who: { Marisol: 'f', Mark: 'm' },
      lines: [
        ['Marisol', '¡Hola! ¿Qué ondas? ¿Qué vas a querer?', 'Hoi! Hoe is het? Wat wil je hebben?', LOC('¿qué ondas?', 'El Salvador', '¿cómo estás?')],
        ['Mark', 'Buenas tardes. Quiero probar las pupusas. ¿Cuáles me recomienda?', 'Goedemiddag. Ik wil de pupusa’s proberen. Welke raadt u me aan?'],
        ['Marisol', 'Probá las revueltas: llevan queso, frijoles y chicharrón.', 'Probeer de gemengde: er zit kaas, bonen en varkensvlees in.', VOS('probá', 'prueba', 'El Salvador')],
        ['Mark', 'Entonces dos revueltas, por favor. ¿Se comen con tenedor?', 'Dan twee gemengde, alstublieft. Eet je ze met een vork?'],
        ['Marisol', '¡No, hombre! Se comen con la mano, y con curtido encima.', 'Nee joh! Je eet ze met je hand, met curtido erop.', '🗺️ <b>el curtido</b>: zuurkoolsalade met wortel en oregano, die er in El Salvador altijd bij hoort.'],
        ['Mark', '¡Qué ricas! ¿Cuánto es?', 'Wat lekker! Hoeveel is het?'],
        ['Marisol', 'Un dólar con cincuenta. Aquí no necesitás mucho pisto para comer bien.', 'Een dollar vijftig. Hier heb je niet veel geld nodig om goed te eten.', LOC('el pisto', 'El Salvador', 'el dinero') + '<br>' + VOS('necesitás', 'necesitas', 'El Salvador')],
        ['Mark', '¡Qué chivo! Mañana vuelvo con mis amigos.', 'Wat tof! Morgen kom ik terug met mijn vrienden.', LOC('¡qué chivo!', 'El Salvador', '¡qué bueno!')],
        ['Marisol', '¡Va pues! Aquí los espero.', 'Oké, goed! Ik wacht hier op jullie.', LOC('¡va pues!', 'El Salvador', '¡está bien!')]
      ],
      q: [
        { t: 'mc', q: '¿Qué llevan las pupusas revueltas?', o: ['Queso, frijoles y chicharrón', 'Pollo y arroz', 'Solo queso'] },
        { t: 'mc', q: '¿Cómo se comen las pupusas?', o: ['Con la mano', 'Con tenedor', 'Con cuchara'] },
        { t: 'mc', q: '¿Qué significa «¡qué chivo!»?', o: ['¡Qué bueno!', '¡Qué caro!', '¡Qué lástima!'] }
      ] },
    talk: { title: 'Surfles op het strand', place: 'Playa El Tunco', nl: 'Lupe speelt Kevin, surfleraar op het zwarte strand van El Tunco.', goal: 'Regel een surfles: de tijd, de prijs en wat je moet meenemen.',
      role: 'Eres Kevin, instructor de surf en la playa El Tunco, en El Salvador. Eres relajado y simpático, tratas al visitante de vos (vos querés, vos podés, vení) y explicas horarios, precios y el nivel de las olas.',
      local: 'Salvadoran speech: voseo (vos sos, vos podés), s often aspirated, words like chivo, pisto, chero, va pues, vaya pues' }
  });

  add('hn', {
    dialog: { t: 'Una baleada en la pulpería', nl: 'Josué laat je het bekendste Hondurese gerecht proeven.', place: 'Tegucigalpa 🇭🇳', who: { 'Josué': 'm', Mark: 'm' },
      lines: [
        ['Josué', '¡Hola, Mark! ¿Ya probaste las baleadas?', 'Hoi Mark! Heb je de baleadas al geproefd?'],
        ['Mark', 'Todavía no. ¿Qué son?', 'Nog niet. Wat zijn dat?'],
        ['Josué', 'Tortillas de harina con frijoles, queso y mantequilla. Las venden en la pulpería de la esquina.', 'Tarwetortilla’s met bonen, kaas en room. Ze verkopen ze in het winkeltje op de hoek.', LOC('la pulpería', 'Honduras', 'la tienda del barrio')],
        ['Mark', '¿Una pulpería? ¿Venden pulpo?', 'Een pulpería? Verkopen ze octopus?'],
        ['Josué', '¡Ja, ja, no! Es una tienda pequeña del barrio. Vení, vamos.', 'Haha, nee! Het is een klein buurtwinkeltje. Kom, we gaan.', VOS('vení', 'ven', 'Honduras')],
        ['Mark', '¿Son caras?', 'Zijn ze duur?'],
        ['Josué', 'No, hombre, no necesitás mucho pisto. Yo invito: vos sos mi alero.', 'Nee joh, je hebt niet veel geld nodig. Ik trakteer: jij bent mijn beste vriend.', LOC('el pisto', 'Honduras', 'el dinero') + '<br>' + LOC('mi alero', 'Honduras', 'mi mejor amigo') + '<br>' + VOS('vos sos', 'tú eres', 'Honduras')],
        ['Mark', '¡Gracias! Entonces yo pago los refrescos.', 'Dank je! Dan betaal ik de frisdrank.'],
        ['Josué', '¡Cheque! Vamos, que tengo hambre.', 'Oké! Kom, want ik heb honger.', LOC('¡cheque!', 'Honduras', '¡de acuerdo!')]
      ],
      q: [
        { t: 'mc', q: '¿Qué es una pulpería?', o: ['Una tienda pequeña del barrio', 'Un restaurante de pulpo', 'Una farmacia'] },
        { t: 'mc', q: '¿Qué lleva una baleada?', o: ['Frijoles, queso y mantequilla', 'Carne y papas', 'Pescado y arroz'] },
        { t: 'mc', q: '¿Qué significa «¡cheque!»?', o: ['De acuerdo', 'Adiós', 'Cuidado'] }
      ] },
    talk: { title: 'Naar de Maya-ruïnes van Copán', place: 'Copán Ruinas', nl: 'Lupe speelt doña Reina, die een hostel heeft vlak bij de ruïnes.', goal: 'Vraag hoe je bij de ruïnes komt, wat het kost en waar je lekker kunt eten.',
      role: 'Eres doña Reina, dueña de un hostal en Copán Ruinas, Honduras. Eres amable y conversadora, tratas al huésped de vos, explicas cómo llegar a las ruinas mayas, los horarios y precios, y recomiendas baleadas para el desayuno.',
      local: 'Honduran speech: voseo (vos sos, vos tenés), final s often dropped, words like cheque, pisto, alero, pulpería, catracho' }
  });

  add('ni', {
    dialog: { t: 'Gallo pinto para el chele', nl: 'Ontbijten bij Xiomara in Granada.', place: 'Granada 🇳🇮', who: { Xiomara: 'f', Mark: 'm' },
      lines: [
        ['Xiomara', '¡Buenas! ¿Idiay, chele? ¿Andás perdido?', 'Hallo! Hé, blanke? Ben je verdwaald?', '🗺️ <b>chele</b>: zo noemen ze in Nicaragua iemand met een lichte huid of een buitenlander. Het is niet onaardig bedoeld.<br>' + VOS('andás', 'andas', 'Nicaragua')],
        ['Mark', 'Un poco. Busco un lugar para desayunar.', 'Een beetje. Ik zoek een plek om te ontbijten.'],
        ['Xiomara', 'Aquí mismo. Tengo gallo pinto con huevo y queso.', 'Hier dus. Ik heb gallo pinto met ei en kaas.'],
        ['Mark', '¿Gallo? ¿Es pollo?', 'Gallo? Is dat kip?'],
        ['Xiomara', '¡No! Es arroz con frijoles. Se llama así por los colores.', 'Nee! Het is rijst met bonen. Het heet zo vanwege de kleuren.', '🗺️ <b>el gallo pinto</b> («gespikkelde haan»): rijst met rode bonen, het ontbijt van Nicaragua en Costa Rica.'],
        ['Mark', 'Ah, entonces uno, por favor. ¿Cuánto cuesta?', 'O, dan één, alstublieft. Hoeveel kost het?'],
        ['Xiomara', 'Ochenta córdobas. Sentate, ya te lo traigo.', 'Tachtig córdoba. Ga zitten, ik breng het zo.', VOS('sentate', 'siéntate', 'Nicaragua')],
        ['Mark', '¡Qué tuani! Gracias.', 'Wat tof! Dank u.', LOC('¡qué tuani!', 'Nicaragua', '¡qué bueno!')],
        ['Xiomara', '¡Dale pues! Buen provecho.', 'Goed zo! Eet smakelijk.', LOC('¡dale pues!', 'Nicaragua', '¡está bien!')]
      ],
      q: [
        { t: 'mc', q: '¿Qué es el gallo pinto?', o: ['Arroz con frijoles', 'Pollo frito', 'Una sopa de pescado'] },
        { t: 'mc', q: '¿Cuánto cuesta el desayuno?', o: ['Ochenta córdobas', 'Dieciocho córdobas', 'Ocho dólares'] },
        { t: 'mc', q: '¿Qué significa «tuani»?', o: ['Muy bueno', 'Muy caro', 'Muy lejos'] }
      ] },
    talk: { title: 'Met de boot naar Ometepe', place: 'Isla de Ometepe', nl: 'Lupe speelt Marlon, schipper en gids op het vulkaaneiland in het Meer van Nicaragua.', goal: 'Regel een boottocht en vraag naar de twee vulkanen.',
      role: 'Eres Marlon, lanchero y guía de la isla de Ometepe, en el lago Cocibolca de Nicaragua. Hablas rápido y alegre, tratas al visitante de vos, y explicas los volcanes Concepción y Maderas, los precios de la lancha y los horarios.',
      local: 'Nicaraguan speech: voseo (vos querés, andá, sentate), final s dropped, words like tuani, chunche, dale pues, ¿idiay?' }
  });

  add('cr', {
    dialog: { t: 'Almuerzo en la soda', nl: 'Andrea zegt «usted» tegen je. Is ze boos?', place: 'San José 🇨🇷', who: { Andrea: 'f', Mark: 'm' },
      lines: [
        ['Andrea', '¡Pura vida, Mark! ¿Cómo está?', 'Alles goed, Mark! Hoe gaat het?', '⚠️ <b>Uitzondering:</b> <b>¿Cómo está?</b> (usted) tegen een vriend, in plaats van <b>¿cómo estás?</b>. In Costa Rica zeg je usted tegen iedereen, ook tegen vrienden, kinderen en huisdieren. Reden: tú klonk daar vroeger te vrijpostig, en usted is zo de gewone, warme vorm geworden.'],
        ['Mark', '¡Hola, Andrea! Muy bien. ¿Por qué me hablas de usted? ¿Estás enojada?', 'Hoi Andrea! Heel goed. Waarom zeg je u tegen me? Ben je boos?'],
        ['Andrea', '¡Ja, ja, no, mae! Aquí le decimos «usted» a todo el mundo, hasta al perro.', 'Haha, nee joh! Hier zeggen we «u» tegen iedereen, zelfs tegen de hond.', LOC('mae', 'Costa Rica', 'amigo')],
        ['Mark', '¡Qué curioso! ¿Y adónde vamos a almorzar?', 'Wat grappig! En waar gaan we lunchen?'],
        ['Andrea', 'A una soda. Tienen un casado buenísimo.', 'Naar een soda. Ze hebben een heerlijke casado.'],
        ['Mark', '¿Una soda? ¿Un refresco?', 'Een soda? Frisdrank?'],
        ['Andrea', 'No, una soda es un restaurante pequeño y barato. Y el casado es arroz, frijoles, carne y ensalada.', 'Nee, een soda is een klein, goedkoop restaurantje. En de casado is rijst, bonen, vlees en salade.', LOC('la soda', 'Costa Rica', 'el restaurante pequeño') + ' Elders is soda gewoon frisdrank.'],
        ['Mark', '¡Qué bueno! Vamos, tengo hambre.', 'Wat fijn! Kom, ik heb honger.'],
        ['Andrea', '¡Tuanis! Vamos de una vez.', 'Top! We gaan meteen.', LOC('¡tuanis!', 'Costa Rica', '¡qué bueno!')]
      ],
      q: [
        { t: 'mc', q: '¿Por qué Andrea le dice «usted» a Mark?', o: ['Porque en Costa Rica es normal', 'Porque está enojada', 'Porque no lo conoce'] },
        { t: 'mc', q: '¿Qué es una soda en Costa Rica?', o: ['Un restaurante pequeño y barato', 'Un refresco', 'Una tienda de ropa'] },
        { t: 'mc', q: '¿Qué lleva un casado?', o: ['Arroz, frijoles, carne y ensalada', 'Solo carne', 'Pan con queso'] }
      ] },
    talk: { title: 'In het nevelwoud', place: 'Monteverde', nl: 'Lupe speelt Greivin, natuurgids in het nevelwoud van Monteverde.', goal: 'Vraag welke dieren je kunt zien, hoe lang de wandeling is en wat je moet meenemen.',
      role: 'Eres Greivin, guía naturalista en el bosque nuboso de Monteverde, Costa Rica. Tratas a todos de usted, también con confianza, dices «pura vida» y «con mucho gusto», y hablas de perezosos, quetzales y ranas.',
      local: 'Costa Rican speech: usted with everyone (never tú), "pura vida", "con mucho gusto" instead of "de nada", diminutives in -tico (chiquitico, un momentico), words like mae, tuanis, brete' }
  });

  add('pa', {
    dialog: { t: 'Pa’ el Casco Viejo', nl: 'Met Yaritza de oude stad in, vol Engelse leenwoorden.', place: 'Ciudad de Panamá 🇵🇦', who: { Yaritza: 'f', Mark: 'm' },
      lines: [
        ['Yaritza', '¡Qué xopá, Mark! ¿Todo bien?', 'Hoe is het, Mark! Alles goed?', '🗺️ <b>¿qué xopá?</b> (spreek uit: ke sjopá): «¿qué pasó?» met de lettergrepen omgedraaid. Neutraal: <b>¿qué tal?</b>'],
        ['Mark', '¡Hola, Yaritza! Todo bien, pero ¡qué calor hace!', 'Hoi Yaritza! Alles goed, maar wat is het warm!'],
        ['Yaritza', 'Así es Panamá. Vamos pa’ el Casco Viejo a tomar algo frío.', 'Zo is Panama. We gaan naar de oude stad om iets kouds te drinken.', '🗺️ <b>pa’</b> is de korte spreekvorm van <b>para</b>. Je hoort het overal in het Caribisch gebied; schrijf zelf para.'],
        ['Mark', 'Buena idea. ¿Queda lejos?', 'Goed idee. Is het ver?'],
        ['Yaritza', 'No, ahí mismo. Y allá vive mi frin Roberto. Te lo presento.', 'Nee, vlakbij. En daar woont mijn vriend Roberto. Ik stel je aan hem voor.', '🗺️ <b>el frin</b>: leenwoord uit het Engels (friend). Neutraal: <b>el amigo</b>.'],
        ['Mark', '¿Tu «frin»? ¡Ah, tu amigo! Viene del inglés, ¿verdad?', 'Je «frin»? O, je vriend! Dat komt uit het Engels, toch?'],
        ['Yaritza', '¡Ofi! Aquí usamos buco palabras del inglés, por el Canal.', 'Klopt! Hier gebruiken we heel veel woorden uit het Engels, door het Kanaal.', LOC('¡ofi!', 'Panama', '¡claro!') + '<br>' + LOC('buco', 'Panama', 'mucho') + ' Buco komt van het Franse beaucoup, uit de tijd dat Fransen aan het kanaal begonnen.'],
        ['Mark', '¡Chuleta! Tengo mucho que aprender.', 'Jeetje! Ik heb nog veel te leren.', LOC('¡chuleta!', 'Panama', '¡caramba!')],
        ['Yaritza', 'Tranquilo, tú vas al cien.', 'Rustig maar, jij doet het top.', LOC('al cien', 'Panama', 'muy bien')]
      ],
      q: [
        { t: 'mc', q: '¿Adónde van Yaritza y Mark?', o: ['Al Casco Viejo', 'Al aeropuerto', 'A la playa'] },
        { t: 'mc', q: '¿Qué significa «el frin»?', o: ['El amigo', 'El frío', 'El hermano'] },
        { t: 'mc', q: '¿Por qué hay muchas palabras del inglés en Panamá?', o: ['Por el Canal', 'Por la televisión', 'Por el clima'] }
      ] },
    talk: { title: 'Met de taxi naar het kanaal', place: 'Ciudad de Panamá', nl: 'Lupe speelt Rubén, taxichauffeur die je naar de sluizen van Miraflores brengt.', goal: 'Spreek een prijs af, vraag naar het kanaal en vraag waar je daarna kunt eten.',
      role: 'Eres Rubén, taxista de Ciudad de Panamá que lleva al pasajero a las esclusas de Miraflores. Hablas rápido y con humor, dices «pa’» en vez de «para», usas algunas palabras del inglés (frin, pritty, ofi) y cuentas datos del Canal.',
      local: 'Panamanian speech: fast Caribbean rhythm, "pa’" for "para", English loanwords (frin, bróder, pritty, ofi), words like ¿qué xopá?, vaina, buco, chuleta' }
  });

  add('cu', {
    dialog: { t: 'En el almendrón', nl: 'Een rit door Havana in een taxi uit 1956.', place: 'La Habana 🇨🇺', who: { Yunior: 'm', Mark: 'm' },
      lines: [
        ['Yunior', '¡Asere, qué bolá! ¿Para dónde tú vas?', 'Hé maat, hoe is het! Waar ga je heen?', LOC('asere, ¿qué bolá?', 'Cuba', 'amigo, ¿qué tal?') + '<br>' + TUV('¿Para dónde tú vas?', '¿Para dónde vas?')],
        ['Mark', 'Buenos días. Voy al Malecón. ¿Cuánto cuesta?', 'Goedemorgen. Ik ga naar de Malecón. Hoeveel kost het?'],
        ['Yunior', 'Para ti, cinco fulas. Sube, que este almendrón es del año cincuenta y seis.', 'Voor jou vijf dollar. Stap in, want deze oude Amerikaan is uit zesenvijftig.', LOC('los fulas', 'Cuba', 'los dólares') + '<br>🗺️ <b>el almendrón</b>: een oude Amerikaanse auto uit de jaren vijftig die als taxi rijdt. Hij lijkt op een grote amandel (almendra).'],
        ['Mark', '¡Qué bárbaro! ¿Y todavía funciona?', 'Geweldig! En doet hij het nog?'],
        ['Yunior', 'Claro. Aquí lo arreglamos todo. No es fácil, pero se puede.', 'Tuurlijk. Hier repareren we alles. Het is niet makkelijk, maar het kan.', '🗺️ <b>no es fácil</b>: de bekendste Cubaanse zucht, over alles wat moeite kost.'],
        ['Mark', '¿Trabajas todos los días?', 'Werk je elke dag?'],
        ['Yunior', 'Todos. La pincha es dura, pero me gusta hablar con los yumas.', 'Elke dag. Het werk is zwaar, maar ik praat graag met de buitenlanders.', LOC('la pincha', 'Cuba', 'el trabajo') + '<br>' + LOC('el yuma', 'Cuba', 'el extranjero')],
        ['Mark', '¿Yo soy un yuma?', 'Ben ik een yuma?'],
        ['Yunior', '¡Ja, ja! Tú ya eres un socio. ¡Llegamos!', 'Haha! Jij bent al een maat. We zijn er!', LOC('el socio', 'Cuba', 'el amigo')]
      ],
      q: [
        { t: 'mc', q: '¿Adónde va Mark?', o: ['Al Malecón', 'Al aeropuerto', 'Al mercado'] },
        { t: 'mc', q: '¿Qué es un almendrón?', o: ['Un taxi viejo americano', 'Una fruta', 'Un restaurante'] },
        { t: 'mc', q: '¿Qué significa «la pincha»?', o: ['El trabajo', 'El dinero', 'La comida'] }
      ] },
    talk: { title: 'Eten in een paladar', place: 'La Habana Vieja', nl: 'Lupe speelt Mayelín, die thuis een klein restaurant heeft in Oud-Havana.', goal: 'Bestel eten, vraag wat de gerechten zijn en praat over muziek.',
      role: 'Eres Mayelín, dueña de un paladar (restaurante en casa) en La Habana Vieja. Eres cálida y bromista, dices «mi amor» y «mi vida», explicas la ropa vieja y los moros y cristianos y hablas de son y salsa.',
      local: 'Cuban speech: tú before the verb in questions (¿qué tú quieres?, ¿cómo tú estás?), final s dropped, words like asere, ¿qué bolá?, socio, jama, ¡qué bárbaro!, no es fácil' }
  });

  add('do', {
    dialog: { t: 'En el colmado', nl: 'Yokasta neemt je mee naar het buurtwinkeltje, waar ook gedanst wordt.', place: 'Santo Domingo 🇩🇴', who: { Yokasta: 'f', Mark: 'm' },
      lines: [
        ['Yokasta', '¡Mark! ¿Qué lo que? ¿Cómo tú estás?', 'Mark! Hoe is het? Hoe gaat het met je?', LOC('¿qué lo que?', 'de Dominicaanse Republiek', '¿qué tal?') + '<br>' + TUV('¿Cómo tú estás?', '¿Cómo estás?')],
        ['Mark', '¡Hola, Yokasta! Bien, pero tengo sed.', 'Hoi Yokasta! Goed, maar ik heb dorst.'],
        ['Yokasta', 'Vamos al colmado de la esquina. Ahí hay jugos bien fríos.', 'We gaan naar de colmado op de hoek. Daar hebben ze lekker koude sapjes.', LOC('el colmado', 'de Dominicaanse Republiek', 'la tienda del barrio')],
        ['Mark', '¿Un colmado es un supermercado?', 'Is een colmado een supermarkt?'],
        ['Yokasta', 'No, es una tienda pequeña del barrio. Ahí la gente también baila y conversa. ¡Hay tremenda chercha!', 'Nee, het is een klein buurtwinkeltje. De mensen dansen en kletsen er ook. Het is er hartstikke gezellig!', '🗺️ <b>la chercha</b>: gezellig geklets en gelach met vrienden. Neutraal: <b>la conversación alegre</b>.'],
        ['Mark', '¡Qué chévere! ¿Vamos en carro?', 'Wat tof! Gaan we met de auto?'],
        ['Yokasta', 'No, en guagua. O en motoconcho, si no tienes miedo.', 'Nee, met de bus. Of met de mototaxi, als je niet bang bent.', LOC('la guagua', 'het Caribisch gebied', 'el autobús') + '<br>🗺️ <b>el motoconcho</b>: een motor die als taxi rijdt.'],
        ['Mark', 'Mejor en guagua… Dame un chin de tiempo y busco mi dinero.', 'Liever met de bus… Geef me heel even, dan pak ik mijn geld.', LOC('un chin', 'de Dominicaanse Republiek', 'un poco')],
        ['Yokasta', '¡Ta to! Te espero aquí.', 'Helemaal goed! Ik wacht hier op je.', '🗺️ <b>¡ta to!</b> is de korte spreekvorm van <b>está todo (bien)</b>.']
      ],
      q: [
        { t: 'mc', q: '¿Qué es un colmado?', o: ['Una tienda pequeña del barrio', 'Un supermercado grande', 'Una escuela de baile'] },
        { t: 'mc', q: '¿Cómo van al colmado?', o: ['En guagua', 'En motoconcho', 'En carro'] },
        { t: 'mc', q: '¿Qué significa «un chin»?', o: ['Un poco', 'Mucho', 'Nada'] }
      ] },
    talk: { title: 'Merengue leren dansen', place: 'Zona Colonial, Santo Domingo', nl: 'Lupe speelt Wilkin, dansleraar merengue en bachata in de oude stad.', goal: 'Spreek een dansles af en vraag naar muziek en uitgaan in de stad.',
      role: 'Eres Wilkin, profesor de merengue y bachata en la Zona Colonial de Santo Domingo. Eres alegre y hablas rápido, pones a tú delante del verbo (¿cómo tú estás?, ¿qué tú quieres?) y explicas horarios, precios y los pasos básicos.',
      local: 'Dominican speech: tú before the verb in questions, final s dropped, fast rhythm, words like ¿qué lo que?, vaina, un chin, chévere, jevi, ¡ta to!' }
  });

  add('pr', {
    dialog: { t: 'A janguear en la playa', nl: 'Coralis nodigt je uit om mee te gaan met haar vriendengroep.', place: 'San Juan 🇵🇷', who: { Coralis: 'f', Mark: 'm' },
      lines: [
        ['Coralis', '¡Wepa, Mark! ¿Tú vienes a janguear con el corillo?', 'Joepie, Mark! Kom je mee uit met de groep?', TUV('¿Tú vienes…?', '¿Vienes…?') + '<br>' + LOC('el corillo', 'Puerto Rico', 'el grupo de amigos')],
        ['Mark', '¿A «janguear»? ¿Qué es eso?', '«Janguear»? Wat is dat?'],
        ['Coralis', 'Salir con los amigos. Viene del inglés «hang out».', 'Uitgaan met je vrienden. Het komt van het Engelse «hang out».', '🗺️ <b>janguear</b>: leenwoord uit het Engels (to hang out). Neutraal: <b>salir con amigos</b>.'],
        ['Mark', '¡Ah! Sí, claro. ¿Adónde van?', 'O! Ja, natuurlijk. Waar gaan jullie heen?'],
        ['Coralis', 'A la playa. Vamos en guagua y llevamos chinas y un bizcocho.', 'Naar het strand. We gaan met de bus en nemen sinaasappels en een taart mee.', LOC('la guagua', 'Puerto Rico', 'el autobús') + '<br>' + LOC('el bizcocho', 'Puerto Rico', 'el pastel')],
        ['Mark', '¿Chinas? ¿Vienen amigas de China?', 'Chinas? Komen er vriendinnen uit China?'],
        ['Coralis', '¡Ay bendito, no! Aquí una china es una naranja.', 'Ach gut, nee! Hier is een china een sinaasappel.', LOC('la china', 'Puerto Rico', 'la naranja') + ' De eerste zoete sinaasappels kwamen uit China, vandaar.'],
        ['Mark', '¡Ja, ja! Entonces yo llevo las bebidas.', 'Haha! Dan neem ik de drankjes mee.'],
        ['Coralis', '¡Brutal! Nos vemos a las tres.', 'Geweldig! We zien elkaar om drie uur.', LOC('¡brutal!', 'Puerto Rico', '¡genial!')]
      ],
      q: [
        { t: 'mc', q: '¿Qué significa «janguear»?', o: ['Salir con los amigos', 'Trabajar mucho', 'Ir de compras'] },
        { t: 'mc', q: '¿Qué es una «china» en Puerto Rico?', o: ['Una naranja', 'Una amiga', 'Una playa'] },
        { t: 'mc', q: '¿Qué lleva Mark a la playa?', o: ['Las bebidas', 'El bizcocho', 'Las chinas'] }
      ] },
    talk: { title: 'Door Oud San Juan', place: 'Viejo San Juan', nl: 'Lupe speelt Marisela, gids in de kleurige straten van Oud San Juan.', goal: 'Vraag de weg, wat je moet zien en wat je moet proeven.',
      role: 'Eres Marisela, guía turística en el Viejo San Juan, Puerto Rico. Eres expresiva y cariñosa, mezclas alguna palabra del inglés, dices «¡wepa!» y «¡ay bendito!», y recomiendas El Morro, una piragua y mofongo.',
      local: 'Puerto Rican speech: tú before the verb in questions, English loanwords (janguear, parquear), r sometimes like l, words like wepa, guagua, china, chavos, brutal, pana' }
  });

  add('ve', {
    dialog: { t: 'Una arepa en Caracas', nl: 'Génesis begroet je met «¿qué más?». Wat meer?', place: 'Caracas 🇻🇪', who: { 'Génesis': 'f', Mark: 'm' },
      lines: [
        ['Génesis', '¡Epa, Mark! ¿Qué más?', 'Hé, Mark! Hoe gaat het?', LOC('¡epa!', 'Venezuela', '¡hola!')],
        ['Mark', '¿Qué más… qué? No entiendo.', 'Wat meer… wat? Ik begrijp het niet.'],
        ['Génesis', '¡Ja, ja! «¿Qué más?» es «¿cómo estás?», chamo.', 'Haha! «¿Qué más?» is «hoe gaat het?», jongen.', LOC('¿qué más?', 'Venezuela en Colombia', '¿cómo estás?') + '<br>' + LOC('chamo', 'Venezuela', 'chico, amigo')],
        ['Mark', '¡Ah! Muy bien, gracias. Pero tengo hambre.', 'O! Heel goed, dank je. Maar ik heb honger.'],
        ['Génesis', 'Entonces vamos a comer arepas. Conozco una arepera muy chévere.', 'Dan gaan we arepa’s eten. Ik ken een heel leuke arepazaak.', '🗺️ <b>la arepa</b>: rond maïsbroodje dat je vult. In Venezuela eet je het bij elke maaltijd.'],
        ['Mark', '¿Qué lleva una arepa?', 'Wat zit er in een arepa?'],
        ['Génesis', 'De todo: queso, carne, aguacate… Yo siempre pido la reina pepiada, con pollo y aguacate.', 'Van alles: kaas, vlees, avocado… Ik bestel altijd de reina pepiada, met kip en avocado.'],
        ['Mark', '¡Qué rico! ¿Vamos caminando?', 'Wat lekker! Gaan we lopen?'],
        ['Génesis', 'No, mi pana Luis nos da la cola en su carro. ¡Qué fino!', 'Nee, mijn maat Luis geeft ons een lift in zijn auto. Wat fijn!', LOC('mi pana', 'Venezuela', 'mi amigo') + '<br>' + LOC('dar la cola', 'Venezuela', 'llevar en carro') + ' Elders is la cola de rij of de staart.']
      ],
      q: [
        { t: 'mc', q: '¿Qué significa «¿qué más?» en Venezuela?', o: ['¿Cómo estás?', '¿Qué quieres?', '¿Cuánto cuesta?'] },
        { t: 'mc', q: '¿Qué van a comer?', o: ['Arepas', 'Tacos', 'Pizza'] },
        { t: 'mc', q: '¿Cómo van a la arepera?', o: ['En el carro de un amigo', 'Caminando', 'En metro'] }
      ] },
    talk: { title: 'In de arepera', place: 'Caracas', nl: 'Lupe speelt señora Yajaira, die al dertig jaar arepa’s bakt.', goal: 'Bestel een arepa, vraag naar de vullingen en maak een praatje.',
      role: 'Eres la señora Yajaira, dueña de una arepera en Caracas. Eres maternal y conversadora, dices «mi amor», «chamo» y «¡epa!», explicas los rellenos (reina pepiada, pelúa, dominó) y ofreces jugo de parchita.',
      local: 'Venezuelan speech: melodic intonation, soft s, words like chamo, pana, chévere, ¿qué más?, ¡qué fino!, burda de, vaina' }
  });

  add('co', {
    dialog: { t: 'Un tinto en Bogotá', nl: 'Mateo bestelt «een tinto» om tien uur ’s ochtends.', place: 'Bogotá 🇨🇴', who: { Mateo: 'm', Mark: 'm' },
      lines: [
        ['Mateo', '¡Quiubo, Mark! ¿Nos tomamos un tinto?', 'Hoe is het, Mark! Zullen we een tinto nemen?', '🗺️ <b>¿quiubo?</b> is samengetrokken uit <b>¿qué hubo?</b> Neutraal: <b>¿qué tal?</b>'],
        ['Mark', '¿Un tinto? ¿Vino a las diez de la mañana?', 'Een tinto? Wijn om tien uur ’s ochtends?'],
        ['Mateo', '¡No, parce! Aquí un tinto es un café negro.', 'Nee, maat! Hier is een tinto een zwarte koffie.', LOC('un tinto', 'Colombia', 'un café negro') + ' Elders is vino tinto rode wijn.<br>' + LOC('parce', 'Colombia', 'amigo')],
        ['Mark', '¡Ah, qué bueno! Entonces sí.', 'O, wat fijn! Dan wel.'],
        ['Mateo', 'Buenos días. ¿Me regala dos tintos, por favor?', 'Goedemorgen. Mag ik twee zwarte koffie, alstublieft?', '🗺️ <b>¿me regala…?</b>: zo bestel je beleefd in Colombia. Je krijgt het niet cadeau! Neutraal: <b>¿me da…?</b>'],
        ['Mark', '¿«Me regala»? ¿No hay que pagar?', '«Me regala»? Hoef je niet te betalen?'],
        ['Mateo', 'Sí, claro. Es una forma amable de pedir. Aquí todo se pide así.', 'Jawel, natuurlijk. Het is een vriendelijke manier van vragen. Hier bestel je alles zo.'],
        ['Mark', '¡Listo! Entonces yo pago. ¿Cuánta plata es?', 'Oké! Dan betaal ik. Hoeveel geld is het?', LOC('¡listo!', 'Colombia', '¡de acuerdo!') + '<br>' + LOC('la plata', 'Zuid-Amerika', 'el dinero')],
        ['Mateo', 'Cuatro mil pesos. ¡Qué chévere, gracias!', 'Vierduizend peso. Wat tof, dank je!']
      ],
      q: [
        { t: 'mc', q: '¿Qué es un tinto en Colombia?', o: ['Un café negro', 'Un vino', 'Un jugo'] },
        { t: 'mc', q: '¿Para qué se dice «¿me regala…?»?', o: ['Para pedir algo con amabilidad', 'Para pedir algo gratis', 'Para dar un regalo'] },
        { t: 'mc', q: '¿Quién paga los tintos?', o: ['Mark', 'Mateo', 'Nadie'] }
      ] },
    talk: { title: 'Op de koffiefinca', place: 'Salento, Eje Cafetero', nl: 'Lupe speelt don Octavio, koffieboer in de groene heuvels van de koffiestreek.', goal: 'Vraag naar de finca, proef de koffie en koop een pak om mee te nemen.',
      role: 'Eres don Octavio, caficultor de una finca cerca de Salento, en el Eje Cafetero de Colombia. Tratas de usted con mucho cariño («mijo», «a la orden», «con mucho gusto», «¿sí o qué?»), explicas la cosecha y el tostado y ofreces un tinto.',
      local: 'Colombian (paisa/coffee region) speech: warm usted even with friends, "¿me regala…?" to order, "a la orden", "con mucho gusto", words like tinto, plata, ¡listo!, ¡hágale!, chévere, bacano' }
  });

  add('ec', {
    dialog: { t: 'Un jugo en el mercado', nl: 'Bij señora Elena leer je wat «ya mismo» echt betekent.', place: 'Quito 🇪🇨', who: { 'Señora Elena': 'f', Mark: 'm' },
      lines: [
        ['Señora Elena', 'Buenos días, joven. ¿Qué le doy?', 'Goedemorgen, jongeman. Wat mag het zijn?'],
        ['Mark', 'Buenos días. Un jugo de mora, por favor. ¡Achachay, qué frío hace hoy!', 'Goedemorgen. Een bramensap, alstublieft. Brr, wat is het koud vandaag!', '🗺️ <b>¡achachay!</b>: uitroep bij kou, uit het Quechua. Bij hitte zeg je <b>¡arrarray!</b>'],
        ['Señora Elena', '¡Ja, ja! Ya habla como quiteño. Ya mismo le preparo el jugo.', 'Haha! U praat al als iemand uit Quito. Ik maak het sap zo voor u.', '🗺️ <b>ya mismo</b>: zo meteen. Let op: het kan in Ecuador nog best even duren.'],
        ['Mark', '¿«Ya mismo» es ahora?', 'Is «ya mismo» nu?'],
        ['Señora Elena', 'Sí… o en un ratito. No se apure.', 'Ja… of over een poosje. Haast u niet.'],
        ['Mark', 'Está bien. ¿Dónde pago?', 'Dat is goed. Waar betaal ik?'],
        ['Señora Elena', 'En la caja. Mi ñaña le da cobrando.', 'Bij de kassa. Mijn zus rekent met u af.', LOC('mi ñaña', 'Ecuador', 'mi hermana') + '<br>⚠️ <b>Uitzondering:</b> <b>le da cobrando</b> in plaats van <b>le cobra</b>. In de Andes van Ecuador maak je iets beleefder met <b>dar</b> + een vorm op -ndo (dame pasando la sal = geef me even het zout). Reden: die bouw komt uit het Quechua, dat de mensen daar ook spreken.'],
        ['Mark', '¿Su ñaña?', 'Uw ñaña?'],
        ['Señora Elena', 'Mi hermana. Aquí decimos ñaño y ñaña.', 'Mijn zus. Hier zeggen we ñaño en ñaña.'],
        ['Mark', '¡Chévere! Muchas gracias.', 'Tof! Hartelijk dank.']
      ],
      q: [
        { t: 'mc', q: '¿Qué pide Mark?', o: ['Un jugo de mora', 'Un café', 'Una sopa'] },
        { t: 'mc', q: '¿Qué dice la gente en Ecuador cuando hace frío?', o: ['¡Achachay!', '¡Arrarray!', '¡Chévere!'] },
        { t: 'mc', q: '¿Quién es la «ñaña» de la señora Elena?', o: ['Su hermana', 'Su hija', 'Su vecina'] }
      ] },
    talk: { title: 'Op de markt van Otavalo', place: 'Otavalo', nl: 'Lupe speelt señora Tamia, die op de beroemde markt geweven sjaals en poncho’s verkoopt.', goal: 'Koop een sjaal of poncho, vraag waar hij van gemaakt is en ding een beetje af.',
      role: 'Eres la señora Tamia, artesana kichwa del mercado de Otavalo, Ecuador. Hablas pausado y muy cortés, usas «ya mismo», «¿no cierto?» y la forma «dame viendo / le doy rebajando», explicas la lana de alpaca y los colores, y regateas con paciencia.',
      local: 'Ecuadorian highland speech: slow and clear, polite "dar + gerund" (dame pasando, le doy envolviendo), "ya mismo", "¿no cierto?", words like ñaño/ñaña, chévere, ¡achachay!, guagua (baby)' }
  });

  add('pe', {
    dialog: { t: 'Paltas con yapa', nl: 'Met Lucía naar de markt, waar je altijd iets extra’s krijgt.', place: 'Lima 🇵🇪', who: { 'Lucía': 'f', Mark: 'm' },
      lines: [
        ['Lucía', '¡Habla, Mark! ¿Vamos al mercado?', 'Hé, Mark! Gaan we naar de markt?', LOC('¡habla!', 'Peru', '¡hola!, ¿qué tal?')],
        ['Mark', '¡Claro! Quiero comprar fruta. ¿Vamos en taxi?', 'Natuurlijk! Ik wil fruit kopen. Gaan we met de taxi?'],
        ['Lucía', 'No, en combi. Es más barato y llegamos al toque.', 'Nee, met het busje. Dat is goedkoper en we zijn er zo.', LOC('la combi', 'Peru', 'el minibús') + '<br>' + LOC('al toque', 'Peru', 'enseguida')],
        ['Mark', 'Mira, ¡qué aguacates tan grandes!', 'Kijk, wat een grote avocado’s!'],
        ['Lucía', 'Aquí se llaman paltas. Y la casera siempre da yapa.', 'Hier heten ze paltas. En de vaste verkoopster geeft altijd een extraatje.', LOC('la palta', 'Peru, Chili, Bolivia en Argentinië', 'el aguacate') + ' Palta komt uit het Quechua, aguacate uit het Nahuatl (Mexico).<br>🗺️ <b>la casera</b>: de verkoopster bij wie je altijd koopt.'],
        ['Mark', '¿Qué es la yapa?', 'Wat is de yapa?'],
        ['Lucía', 'Un poquito más, gratis. Tú compras cuatro paltas y te da cinco.', 'Een beetje extra, gratis. Jij koopt vier avocado’s en ze geeft er vijf.', '🗺️ <b>la yapa</b>: het gratis extraatje, uit het Quechua (yapay = erbij doen).'],
        ['Mark', '¡Bacán! En Holanda no hay yapa.', 'Tof! In Nederland heb je geen yapa.', LOC('¡bacán!', 'Peru', '¡genial!')],
        ['Lucía', '¡Ya, pues! Entonces aprovecha. Después tomamos unas chelas.', 'Nou dan! Maak er dan gebruik van. Daarna drinken we een paar biertjes.', LOC('la chela', 'Peru', 'la cerveza')]
      ],
      q: [
        { t: 'mc', q: '¿Cómo van al mercado?', o: ['En combi', 'En taxi', 'Caminando'] },
        { t: 'mc', q: '¿Qué es una palta?', o: ['Un aguacate', 'Una papa', 'Una manzana'] },
        { t: 'mc', q: '¿Qué es la yapa?', o: ['Un poco más, gratis', 'El precio', 'La bolsa'] }
      ] },
    talk: { title: 'In de cevichería', place: 'Miraflores, Lima', nl: 'Lupe speelt Renzo, ober in een cevichería aan zee.', goal: 'Bestel ceviche, vraag hoe pittig het is en reken af.',
      role: 'Eres Renzo, mozo de una cevichería en Miraflores, Lima. Eres atento y orgulloso de la comida peruana, dices «al toque», «¡ya!» y «causa» con confianza, recomiendas ceviche, leche de tigre y chicha morada y preguntas cuánto ají quiere el cliente.',
      local: 'Peruvian (Lima) speech: clear and unhurried, diminutives (ahorita, un ratito), "¡ya!" for okay, words like causa, pata, al toque, bacán, chela, chamba, palta' }
  });

  add('bo', {
    dialog: { t: 'Soroche y salteñas', nl: 'Op bijna vierduizend meter hoogte: Wara weet raad.', place: 'La Paz 🇧🇴', who: { Wara: 'f', Mark: 'm' },
      lines: [
        ['Wara', '¡Hola, cumpa! ¿Cómo te sientes en La Paz?', 'Hoi maat! Hoe voel je je in La Paz?', LOC('cumpa', 'Bolivia', 'amigo') + ' Het is kort voor compadre.'],
        ['Mark', 'Un poco mal. Me duele la cabeza.', 'Niet zo goed. Ik heb hoofdpijn.'],
        ['Wara', 'Es el soroche, por la altura. Estamos a casi cuatro mil metros.', 'Dat is hoogteziekte, door de hoogte. We zitten op bijna vierduizend meter.', LOC('el soroche', 'de Andes', 'el mal de altura') + ' Het woord komt uit het Quechua.'],
        ['Mark', '¿Y qué puedo hacer?', 'En wat kan ik doen?'],
        ['Wara', 'Camina despacito y toma un mate de coca, ¿ya?', 'Loop rustig aan en drink cocathee, oké?', '🗺️ <b>¿ya?</b> achter een zin betekent in Bolivia «oké?». En <b>despacito</b>: Bolivianen maken graag alles klein en vriendelijk.'],
        ['Mark', 'Bueno. ¿Y para comer?', 'Goed. En om te eten?'],
        ['Wara', 'Una salteña. Pero cuidado: tiene jugo adentro. Hay que comerla sin manchar la ropa.', 'Een salteña. Maar pas op: er zit sap in. Je moet hem eten zonder je kleren vies te maken.', '🗺️ <b>la salteña</b>: gevuld deegpasteitje met sappig vlees, het tussendoortje van de ochtend.'],
        ['Mark', '¡Qué difícil! ¿Vamos en taxi?', 'Wat moeilijk! Gaan we met de taxi?'],
        ['Wara', 'No, en micro. O en teleférico, que es más lindo. ¡Ya, pues, vamos!', 'Nee, met de bus. Of met de kabelbaan, dat is mooier. Kom op, we gaan!', LOC('el micro', 'Bolivia', 'el autobús')]
      ],
      q: [
        { t: 'mc', q: '¿Qué es el soroche?', o: ['El mal de altura', 'Una comida', 'Un bus'] },
        { t: 'mc', q: '¿Qué recomienda Wara para el soroche?', o: ['Un mate de coca', 'Un café', 'Una cerveza'] },
        { t: 'mc', q: '¿Por qué hay que tener cuidado con la salteña?', o: ['Porque tiene jugo adentro', 'Porque pica mucho', 'Porque es muy cara'] }
      ] },
    talk: { title: 'Naar de zoutvlakte', place: 'Uyuni', nl: 'Lupe speelt doña Sabina, die tochten over de Salar de Uyuni regelt.', goal: 'Boek een tocht: hoeveel dagen, wat het kost en welke kleren je nodig hebt tegen de kou.',
      role: 'Eres doña Sabina, que organiza tours al Salar de Uyuni, Bolivia. Hablas tranquila y con muchos diminutivos (ahorita, cerquita, friíto), terminas frases con «¿ya?» y «pues», y explicas los días del tour, el precio, el frío y la altura.',
      local: 'Bolivian highland speech: calm tone, clear s, many diminutives, "¿ya?" and "pues" at the end of sentences, Aymara/Quechua words like wawa, soroche, ¡jallalla!' }
  });

  add('py', {
    dialog: { t: 'Tereré para el calor', nl: 'Arami mengt Spaans en Guaraní, en deelt haar koude mate.', place: 'Asunción 🇵🇾', who: { Arami: 'f', Mark: 'm' },
      lines: [
        ['Arami', '¡Mba’éichapa, Mark!', 'Hoe gaat het, Mark!', '🗺️ <b>¿mba’éichapa?</b> is Guaraní voor «hoe gaat het?». Neutraal Spaans: <b>¿cómo estás?</b>'],
        ['Mark', '¡Hola, Arami! ¿Eso es guaraní?', 'Hoi Arami! Is dat Guaraní?'],
        ['Arami', 'Sí. Aquí casi todos hablamos español y guaraní, y los mezclamos. Eso se llama jopara.', 'Ja. Hier spreken we bijna allemaal Spaans en Guaraní, en we mengen ze. Dat heet jopara.', '🗺️ <b>el jopara</b> («mengsel» in het Guaraní): Spaans en Guaraní door elkaar in één zin.'],
        ['Mark', '¡Qué interesante! ¿Y qué tomas?', 'Wat interessant! En wat drink je?'],
        ['Arami', 'Tereré. Es mate frío, con hielo y hierbas. ¿Querés probar?', 'Tereré. Dat is koude mate, met ijs en kruiden. Wil je proeven?', VOS('¿querés?', '¿quieres?', 'Paraguay')],
        ['Mark', 'Sí, gracias. ¡Uy, qué fresco!', 'Ja, dank je. O, wat fris!'],
        ['Arami', 'Con este calor es lo mejor. Y con una chipa, mejor todavía.', 'Met deze hitte is het het beste. En met een chipa erbij nog beter.', '🗺️ <b>la chipa</b>: kaasbroodje van maniokmeel, dat je op elke straathoek koopt.'],
        ['Mark', '¿Dónde compro chipa?', 'Waar koop ik chipa?'],
        ['Arami', 'En la esquina hay una chipera. ¡Jaha! Vamos juntos.', 'Op de hoek staat een chipaverkoopster. Kom! We gaan samen.', '🗺️ <b>¡jaha!</b> is Guaraní voor «kom, we gaan!». Neutraal: <b>¡vamos!</b>']
      ],
      q: [
        { t: 'mc', q: '¿Qué lenguas se hablan en Paraguay?', o: ['Español y guaraní', 'Español y portugués', 'Solo español'] },
        { t: 'mc', q: '¿Qué es el tereré?', o: ['Mate frío', 'Un pan con queso', 'Una sopa'] },
        { t: 'mc', q: '¿Qué significa «¡jaha!»?', o: ['¡Vamos!', '¡Gracias!', '¡Hola!'] }
      ] },
    talk: { title: 'Kruiden voor je tereré', place: 'Mercado 4, Asunción', nl: 'Lupe speelt ña Deolinda, die op de markt verse kruiden voor de tereré stampt.', goal: 'Koop kruiden voor je tereré en vraag wat haar Guaraní-woorden betekenen.',
      role: 'Eres ña Deolinda, yuyera del Mercado 4 de Asunción: vendes hierbas frescas (menta’i, cedrón, burrito) para el tereré. Tratas al cliente de vos, mezclas alguna palabra en guaraní (¡nde!, ¡jaha!, mba’éichapa) y la explicas si te preguntan.',
      local: 'Paraguayan speech: voseo (vos querés, vos tenés), a few Guaraní words mixed in (jopara), filler "luego" and "nomás", words like tereré, chipa, plata' }
  });

  add('cl', {
    dialog: { t: 'La once', nl: 'Catalina nodigt je uit voor «de elf», om zeven uur ’s avonds.', place: 'Santiago 🇨🇱', who: { Catalina: 'f', Mark: 'm' },
      lines: [
        ['Catalina', '¡Hola, Mark! ¿Cómo estái?', 'Hoi Mark! Hoe gaat het?', '⚠️ <b>Uitzondering:</b> <b>¿cómo estái?</b> in plaats van <b>¿cómo estás?</b>. In Chili eindigt de jij-vorm in spreektaal op -ái of -ís (estái, tenís, querís). Reden: het is de oude <i>vosotros</i>-vorm (estáis) waar de s van is weggevallen. Je schrijft het niet; jij zegt gewoon <b>estás</b>.'],
        ['Mark', '¡Hola, Catalina! Bien, pero cansado. Salí tarde del trabajo.', 'Hoi Catalina! Goed, maar moe. Ik was laat klaar met werken.'],
        ['Catalina', 'Yo también salí tarde de la pega. ¿Vamos a mi casa a tomar once?', 'Ik was ook laat klaar met werken. Gaan we bij mij thuis once eten?', LOC('la pega', 'Chili', 'el trabajo')],
        ['Mark', '¿Once? ¡Pero son las siete!', 'Elf? Maar het is zeven uur!'],
        ['Catalina', '¡Ja, ja! La once es una comida: té, pan, palta y queso. ¿Cachai?', 'Haha! De once is een maaltijd: thee, brood, avocado en kaas. Snap je?', '🗺️ <b>la once</b>: lichte avondmaaltijd met thee en brood.<br>' + LOC('¿cachai?', 'Chili', '¿entiendes?') + ' Het komt van het Engelse to catch.'],
        ['Mark', '¡Ah, ya entiendo! ¿Y cómo vamos?', 'O, nu snap ik het! En hoe gaan we?'],
        ['Catalina', 'En micro. Pasa al tiro, po.', 'Met de bus. Hij komt meteen, hoor.', LOC('la micro', 'Chili', 'el autobús') + '<br>' + LOC('al tiro', 'Chili', 'enseguida')],
        ['Mark', '¿«Po»?', '«Po»?'],
        ['Catalina', 'Es «pues». Lo decimos todo el tiempo: sí, po; no, po; ya, po.', 'Dat is «pues». We zeggen het de hele tijd: ja hoor, nee hoor, oké dan.', '🗺️ <b>po</b>: de Chileense korte vorm van <b>pues</b>, achter bijna elke zin.'],
        ['Mark', '¡Bacán! Vamos, po.', 'Tof! Kom, we gaan.', LOC('¡bacán!', 'Chili', '¡genial!')]
      ],
      q: [
        { t: 'mc', q: '¿Qué es «la once» en Chile?', o: ['Una comida con té y pan', 'Un número de bus', 'Una hora de la noche'] },
        { t: 'mc', q: '¿Qué significa «la pega»?', o: ['El trabajo', 'La casa', 'La amiga'] },
        { t: 'mc', q: '¿Qué significa «al tiro»?', o: ['Enseguida', 'Mañana', 'Nunca'] }
      ] },
    talk: { title: 'Door de heuvels van Valparaíso', place: 'Valparaíso', nl: 'Lupe speelt Nacho, student die je de heuvels en muurschilderingen laat zien.', goal: 'Vraag de weg, praat over de stad en spreek af voor vanavond.',
      role: 'Eres Nacho, estudiante de Valparaíso que muestra los cerros, los ascensores y los murales a un visitante. Hablas rápido, dices «po», «¿cachai?», «bacán» y «al tiro», y usas a veces la forma chilena (¿cómo estái?, ¿querís?). Si el visitante no entiende, lo repites en español neutro.',
      local: 'Chilean speech: fast, final s dropped, "po" after sentences, "¿cachai?", colloquial tú forms in -ái/-ís (estái, querís, tenís), words like bacán, fome, pega, al tiro, micro, once, harto' }
  });

  add('ar', {
    dialog: { t: 'Unos mates en la plaza', nl: 'Valentina leert je mate drinken, en wat «gracias» daarbij betekent.', place: 'Buenos Aires 🇦🇷', who: { Valentina: 'f', Mark: 'm' },
      lines: [
        ['Valentina', '¡Che, Mark! ¿Querés unos mates?', 'Hé, Mark! Wil je mate?', LOC('che', 'Argentinië', 'oye') + '<br>' + VOS('¿querés?', '¿quieres?', 'Argentinië')],
        ['Mark', '¡Hola, Valentina! Sí, gracias. Nunca tomé mate.', 'Hoi Valentina! Ja, dank je. Ik heb nog nooit mate gedronken.'],
        ['Valentina', '¿En serio? Mirá: yo te lo preparo y vos tomás todo.', 'Echt? Kijk: ik maak hem voor je klaar en jij drinkt alles op.', VOS('mirá, vos tomás', 'mira, tú tomas', 'Argentinië')],
        ['Mark', 'Mmm… es amargo. ¡Gracias!', 'Mmm… hij is bitter. Dank je!'],
        ['Valentina', '¡Ojo! Si decís «gracias», significa que no querés más.', 'Let op! Als je «gracias» zegt, betekent dat dat je niet meer wilt.', '🗺️ Bij mate zeg je pas <b>gracias</b> als je genoeg hebt gehad.'],
        ['Mark', '¡Uy! Entonces… ¡quiero más!', 'Oei! Dan… wil ik meer!'],
        ['Valentina', '¡Ja, ja! Sos re gracioso. ¿Venís al asado el domingo?', 'Haha! Je bent heel grappig. Kom je zondag naar de barbecue?', LOC('re gracioso', 'Argentinië', 'muy gracioso') + '<br>' + VOS('sos, venís', 'eres, vienes', 'Argentinië')],
        ['Mark', '¡Dale! ¿Cómo llego a tu casa?', 'Oké! Hoe kom ik bij je huis?', LOC('¡dale!', 'Argentinië', '¡de acuerdo!')],
        ['Valentina', 'Tomate el bondi sesenta. Te bajás en la plaza y ya está.', 'Neem bus zestig. Je stapt uit bij het plein en dat is het.', LOC('el bondi', 'Argentinië', 'el autobús') + '<br>' + VOS('tomate, te bajás', 'tómate, te bajas', 'Argentinië')]
      ],
      q: [
        { t: 'mc', q: '¿Qué significa decir «gracias» cuando tomas mate?', o: ['Que no quieres más', 'Que quieres más azúcar', 'Que tienes que pagar'] },
        { t: 'mc', q: '¿Qué significa «re gracioso»?', o: ['Muy gracioso', 'Poco gracioso', 'Nada gracioso'] },
        { t: 'mc', q: '¿Cómo va Mark a la casa de Valentina?', o: ['En el bondi', 'En taxi', 'En tren'] }
      ] },
    talk: { title: 'In de boekhandel met café', place: 'Avenida Corrientes, Buenos Aires', nl: 'Lupe speelt Flor, boekverkoopster op de straat die nooit slaapt.', goal: 'Vraag om een boekentip, bestel een koffie en praat over de stad.',
      role: 'Eres Flor, librera porteña de una librería con café en la avenida Corrientes de Buenos Aires. Hablás con voseo (vos querés, mirá, contame), decís «che», «dale», «re» y «¡bárbaro!», recomendás libros fáciles y un cortado con medialunas.',
      local: 'Rioplatense (Buenos Aires) speech: voseo (vos tenés, vos sos, imperative mirá, vení, contame), ll/y pronounced "sh", words like che, dale, re-, laburo, bondi, guita, ¡bárbaro!' }
  });

  add('uy', {
    dialog: { t: 'Por la rambla', nl: 'Facundo gaat nergens heen zonder thermoskan en mate.', place: 'Montevideo 🇺🇾', who: { Facundo: 'm', Mark: 'm' },
      lines: [
        ['Facundo', '¡Bo, Mark! ¿Todo bien? ¿Venís a la rambla?', 'Hé, Mark! Alles goed? Kom je mee naar de boulevard?', LOC('bo', 'Uruguay', 'oye') + '<br>' + VOS('¿venís?', '¿vienes?', 'Uruguay')],
        ['Mark', '¡Hola, Facundo! Sí, vamos. ¿Qué llevas ahí?', 'Hoi Facundo! Ja, we gaan. Wat heb je daar bij je?'],
        ['Facundo', 'El termo y el mate. Acá no salimos de casa sin ellos.', 'De thermoskan en de mate. Hier gaan we de deur niet uit zonder.', LOC('acá', 'Uruguay en Argentinië', 'aquí')],
        ['Mark', '¿También cuando caminan?', 'Ook als jullie lopen?'],
        ['Facundo', '¡Siempre! Mirá a la gente: todos con el termo abajo del brazo.', 'Altijd! Kijk naar de mensen: allemaal met de thermoskan onder hun arm.', VOS('mirá', 'mira', 'Uruguay')],
        ['Mark', '¡Es verdad! ¿Y vamos caminando o en bus?', 'Dat is waar! En gaan we lopen of met de bus?'],
        ['Facundo', 'En ómnibus hasta Pocitos y después caminamos. ¿Ta?', 'Met de bus tot Pocitos en daarna lopen we. Oké?', LOC('el ómnibus', 'Uruguay', 'el autobús')],
        ['Mark', '¿«Ta»?', '«Ta»?'],
        ['Facundo', '«Ta» es «está bien». Lo decimos para todo.', '«Ta» is «het is goed». We zeggen het bij alles.', '🗺️ <b>ta</b> is de korte spreekvorm van <b>está (bien)</b>, het bekendste woordje van Uruguay.'],
        ['Mark', '¡Ta! Me gusta Uruguay.', 'Oké! Ik vind Uruguay leuk.']
      ],
      q: [
        { t: 'mc', q: '¿Qué lleva siempre Facundo?', o: ['El termo y el mate', 'Una guitarra', 'Un paraguas'] },
        { t: 'mc', q: '¿Qué significa «ta»?', o: ['Está bien', 'Gracias', 'Adiós'] },
        { t: 'mc', q: '¿Cómo van hasta Pocitos?', o: ['En ómnibus', 'En taxi', 'En bicicleta'] }
      ] },
    talk: { title: 'Op de Mercado del Puerto', place: 'Montevideo', nl: 'Lupe speelt Gonzalo, grillmeester in de oude markthal bij de haven.', goal: 'Bestel vlees of een chivito en praat over voetbal en mate.',
      role: 'Eres Gonzalo, parrillero del Mercado del Puerto de Montevideo. Sos tranquilo y amable, hablás con voseo (¿qué querés?, probá), decís «bo», «ta» y «¡de más!», recomendás el chivito y el asado y te gusta hablar de fútbol y de mate.',
      local: 'Uruguayan speech: voseo verb forms (vos or tú + tenés, querés), ll/y pronounced "sh", words like bo, ta, ¡de más!, ¡salado!, guita, laburo, ómnibus, championes' }
  });

  add('es', {
    dialog: { t: 'De cañas en Madrid', nl: 'Carmen zegt «venís» en «coche». Jij leert het anders.', place: 'Madrid 🇪🇸', who: { Carmen: 'f', Mark: 'm' },
      lines: [
        ['Carmen', '¡Hola, Mark! ¿Qué tal? ¿Tú y tus amigos venís de cañas esta noche?', 'Hoi Mark! Hoe gaat het? Komen jij en je vrienden vanavond een biertje drinken?', '⚠️ <b>Uitzondering:</b> <b>venís</b> (vosotros) in plaats van <b>vienen</b> (ustedes). In Spanje zeg je tegen een groep vrienden <b>vosotros</b>, met een eigen werkwoordsvorm. Reden: Spanje heeft de oude informele meervoudsvorm bewaard; in Latijns-Amerika is ustedes de enige vorm geworden. Jij blijft gewoon <b>ustedes vienen</b> zeggen.'],
        ['Mark', '¡Hola, Carmen! ¿«Venís»? En mi curso dicen «ustedes vienen».', 'Hoi Carmen! «Venís»? In mijn cursus zeggen ze «ustedes vienen».'],
        ['Carmen', 'Claro, tú aprendes español de América. Aquí a los amigos les decimos «vosotros».', 'Natuurlijk, jij leert Spaans van Amerika. Hier zeggen we «vosotros» tegen vrienden.'],
        ['Mark', 'Está bien. ¿Y qué es una caña?', 'Oké. En wat is een caña?'],
        ['Carmen', 'Una cerveza pequeña. Y con la caña te dan una tapa gratis. ¡Mola!', 'Een klein biertje. En bij je biertje krijg je een gratis tapa. Dat is tof!', LOC('¡mola!', 'Spanje', '¡qué bueno!')],
        ['Mark', '¡Qué bueno! ¿Vamos en carro?', 'Wat fijn! Gaan we met de auto?'],
        ['Carmen', '¿En coche? ¡Qué va! En metro, tío. He quedado con todos a las nueve.', 'Met de auto? Welnee! Met de metro, joh. Ik heb met iedereen om negen uur afgesproken.', LOC('el coche', 'Spanje', 'el carro') + '<br>⚠️ <b>Uitzondering:</b> <b>he quedado</b> in plaats van <b>quedé</b>. In Spanje gebruik je de voltooide tijd (he + -ado) voor wat vandaag gebeurd is. Reden: voor Spanjaarden hoort vandaag nog bij «nu»; in Latijns-Amerika zeg je meestal <b>quedé</b>.'],
        ['Mark', 'Perfecto. Te llamo al celular si me pierdo.', 'Perfect. Ik bel je op je mobiel als ik verdwaal.'],
        ['Carmen', '¡Vale! Aquí decimos «móvil», pero te entiendo. ¡Venga, hasta luego!', 'Oké! Hier zeggen we «móvil», maar ik begrijp je. Kom, tot straks!', LOC('¡vale!', 'Spanje', '¡está bien!') + '<br>' + LOC('el móvil', 'Spanje', 'el celular')]
      ],
      q: [
        { t: 'mc', q: '¿Qué es una caña en España?', o: ['Una cerveza pequeña', 'Un café', 'Un taxi'] },
        { t: 'mc', q: '¿Cómo dicen «carro» en España?', o: ['Coche', 'Móvil', 'Zumo'] },
        { t: 'mc', q: '¿A quién le dicen «vosotros» en España?', o: ['A un grupo de amigos', 'Al jefe', 'A una persona sola'] }
      ] },
    talk: { title: 'Tapas bestellen', place: 'La Latina, Madrid', nl: 'Lupe speelt Paco, ober in een drukke tapasbar.', goal: 'Bestel tapas en drankjes voor je groep en vraag om de rekening.',
      role: 'Eres Paco, camarero de un bar de tapas en el barrio de La Latina, Madrid. Hablas deprisa y con gracia, tratas al grupo de vosotros («¿qué os pongo?», «¿queréis algo más?»), dices «vale», «venga» y «ahora mismo», y recomiendas tortilla, croquetas y bravas.',
      local: 'Peninsular Spanish (Madrid): vosotros for a group (¿qué queréis?, os pongo), present perfect for today (¿habéis pedido ya?), words like vale, venga, tío/tía, caña, zumo, móvil. The learner uses Latin American forms (ustedes, celular, jugo): these are correct, never correct them into Spain forms.' }
  });

  add('gq', {
    dialog: { t: 'Español en África', nl: 'Santiago vertelt over het enige Spaanstalige land van Afrika.', place: 'Malabo 🇬🇶', who: { Santiago: 'm', Mark: 'm' },
      lines: [
        ['Santiago', '¡Mbolo, Mark! Bienvenido a Malabo.', 'Hallo, Mark! Welkom in Malabo.', '🗺️ <b>¡mbolo!</b> is «hallo» in het Fang, de grootste taal van het land. Neutraal Spaans: <b>¡hola!</b>'],
        ['Mark', '¡Hola, Santiago! No sabía que aquí se habla español.', 'Hoi Santiago! Ik wist niet dat ze hier Spaans spreken.'],
        ['Santiago', 'Sí. Es el único país de África con el español como lengua oficial.', 'Ja. Het is het enige land in Afrika met Spaans als officiële taal.'],
        ['Mark', '¿Y todos lo hablan en casa?', 'En spreekt iedereen het thuis?'],
        ['Santiago', 'En la escuela y en el trabajo, sí. En casa muchos hablamos fang, bubi o pichi.', 'Op school en op het werk wel. Thuis spreken velen van ons Fang, Bubi of Pichi.', '🗺️ <b>el pichi</b>: een creooltaal op basis van het Engels, op het eiland Bioko.'],
        ['Mark', '¿Y el español de aquí es como el de América?', 'En is het Spaans van hier zoals dat van Amerika?'],
        ['Santiago', 'Se parece más al de España. A mis alumnos les digo: «¿Habéis hecho la tarea?»', 'Het lijkt meer op dat van Spanje. Tegen mijn leerlingen zeg ik: «Hebben jullie het huiswerk gemaakt?»', '⚠️ <b>Uitzondering:</b> <b>¿habéis hecho?</b> (vosotros) in plaats van <b>¿hicieron?</b> (ustedes). Reden: Equatoriaal-Guinea was tot 1968 een Spaanse kolonie en heeft het Spaans van Spanje overgenomen, met vosotros.'],
        ['Mark', 'En mi curso decimos «¿Hicieron la tarea?».', 'In mijn cursus zeggen we «¿Hicieron la tarea?».'],
        ['Santiago', 'Las dos formas están bien. ¡Vale! Ahora vamos a ver el mercado.', 'Beide vormen zijn goed. Oké! Nu gaan we de markt bekijken.']
      ],
      q: [
        { t: 'mc', q: '¿Dónde está Guinea Ecuatorial?', o: ['En África', 'En América del Sur', 'En Asia'] },
        { t: 'mc', q: '¿Qué lenguas hablan muchos en casa?', o: ['Fang, bubi o pichi', 'Quechua y aimara', 'Náhuatl y maya'] },
        { t: 'mc', q: '¿A qué español se parece más el de Guinea Ecuatorial?', o: ['Al de España', 'Al de México', 'Al de Argentina'] }
      ] },
    talk: { title: 'Op de markt van Malabo', place: 'Malabo, isla de Bioko', nl: 'Lupe speelt mamá Consuelo, die fruit verkoopt op de centrale markt.', goal: 'Koop fruit en vraag naar de talen en het eiland Bioko.',
      role: 'Eres mamá Consuelo, vendedora de fruta en el mercado central de Malabo, Guinea Ecuatorial. Hablas despacio y con claridad, tratas a los grupos de vosotros, dices «¡mbolo!» y «vale», vendes plátanos, piñas y malanga y cuentas con orgullo las lenguas del país (fang, bubi, pichi).',
      local: 'Equatoguinean Spanish: close to Peninsular Spanish (vosotros for groups, vale, coche, móvil), every syllable pronounced clearly, a few Fang words (¡mbolo!). The learner uses Latin American forms: these are correct.' }
  });

  add('us', {
    dialog: { t: 'El lonche en Los Ángeles', nl: 'Brenda mengt Spaans en Engels in één zin: Spanglish.', place: 'Los Ángeles 🇺🇸', who: { Brenda: 'f', Mark: 'm' },
      lines: [
        ['Brenda', '¡Hola, Mark! ¿Ya comiste tu lonche?', 'Hoi Mark! Heb je je lunch al op?', '🗺️ <b>el lonche</b>: leenwoord uit het Engels (lunch). Neutraal: <b>el almuerzo</b>.'],
        ['Mark', '¿Mi qué?', 'Mijn wat?'],
        ['Brenda', 'Tu lonche, el almuerzo. Viene de «lunch». Aquí mezclamos español e inglés.', 'Je lonche, de lunch. Het komt van «lunch». Hier mengen we Spaans en Engels.'],
        ['Mark', '¡Ah, Spanglish! No, todavía no comí.', 'O, Spanglish! Nee, ik heb nog niet gegeten.'],
        ['Brenda', 'Entonces vamos a la marqueta por unos tacos. Voy a parquear la troca enfrente.', 'Dan gaan we naar de supermarkt voor een paar taco’s. Ik parkeer de pick-up aan de overkant.', LOC('la marqueta', 'de VS', 'el supermercado') + ' (uit het Engels: market)<br>' + LOC('parquear', 'de VS', 'estacionar') + ' (uit het Engels: to park)'],
        ['Mark', '¿La troca es tu carro?', 'Is de troca je auto?'],
        ['Brenda', 'Es una camioneta grande, de «truck». Mi abuela dice que no es español correcto.', 'Het is een grote pick-up, van «truck». Mijn oma zegt dat het geen goed Spaans is.', LOC('la troca', 'de VS en Noord-Mexico', 'la camioneta')],
        ['Mark', '¿Y tú qué piensas?', 'En wat vind jij?'],
        ['Brenda', 'Que es nuestro español. Aquí lo hablamos más de cuarenta millones de personas.', 'Dat het ons Spaans is. Hier spreken meer dan veertig miljoen mensen het.']
      ],
      q: [
        { t: 'mc', q: '¿Qué es «el lonche»?', o: ['El almuerzo', 'El carro', 'El trabajo'] },
        { t: 'mc', q: '¿De qué palabra inglesa viene «troca»?', o: ['Truck', 'Train', 'Track'] },
        { t: 'mc', q: '¿Cuántas personas hablan español en Estados Unidos?', o: ['Más de cuarenta millones', 'Cuatro millones', 'Cuatrocientos mil'] }
      ] },
    talk: { title: 'In de taquería in East L.A.', place: 'Este de Los Ángeles', nl: 'Lupe speelt Jessica, die in de taquería van haar familie werkt.', goal: 'Bestel je lunch en ontdek wat haar Spanglish-woorden betekenen.',
      role: 'Eres Jessica, que atiende la taquería de su familia en el Este de Los Ángeles. Hablas español con palabras del inglés adaptadas (lonche, troca, parquear, marqueta, «te llamo para atrás») y a veces cambias al inglés una palabra suelta. Eres amable y orgullosa de tus dos lenguas.',
      local: 'US Spanish / Spanglish: adapted English loanwords (lonche, troca, parquear, marqueta, textear, aplicar), calques (llamar para atrás), occasional single English words. Keep the sentences themselves in Spanish.' }
  });
})(window.SPT);
