/* Extensión «De viaje», a fondo por país (neerlandés para hispanohablantes): cada país tiene su propio diálogo y su propia
   conversación con el docente. Misma forma que content/landen-praten.js. Diego es el visitante (me) y habla el neerlandés
   del curso (Países Bajos); la otra persona habla como en su país. Las explicaciones están en español:
   🗺️ palabra local + palabra estándar, o «⚠️ Excepción» con el motivo. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('nl-es')) return;
  const add = (id, x) => { const p = (S.places || []).find(q => q.id === id); if (p) { x.dialog.me = 'Diego'; Object.assign(p, x); } };
  const LOC = (w, land, neu) => '🗺️ <b>' + w + '</b>: así se dice en ' + land + '. Estándar: <b>' + neu + '</b>.';
  const UITZ = (vorm, neu, uitleg, reden) => '⚠️ <b>Excepción:</b> <b>' + vorm + '</b> en lugar de <b>' + neu + '</b>. ' + uitleg + ' Motivo: ' + reden;
  const Q = (q, a, b, c) => ({ t: 'mc', q, o: [a, b, c] });

  add('nl', {
    dialog: { t: 'Gezellig!', nl: 'Lotte te lleva en bicicleta por Ámsterdam y te enseña una palabra sin traducción.', place: 'Amsterdam 🇳🇱', who: { Lotte: 'f', Diego: 'm' },
      lines: [
        ['Lotte', 'Hoi Diego! Welkom in Amsterdam.', '¡Hola, Diego! Bienvenido a Ámsterdam.', '🗺️ <b>hoi</b>: el saludo informal de todos los días. Para despedirte dices <b>doei</b>.'],
        ['Diego', 'Hallo Lotte! Dank je wel. Wat doen we vandaag?', '¡Hola, Lotte! Muchas gracias. ¿Qué hacemos hoy?'],
        ['Lotte', 'We gaan fietsen! Ik heb een fiets voor jou.', '¡Vamos a andar en bicicleta! Tengo una bicicleta para ti.', '🗺️ <b>de fiets</b>: la bicicleta. En los Países Bajos hay más bicicletas que personas.'],
        ['Diego', 'Leuk! En daarna?', '¡Qué bien! ¿Y después?'],
        ['Lotte', 'Daarna gaan we naar een café. Het is daar heel gezellig.', 'Después vamos a un café. Allí es muy acogedor.', '🗺️ <b>gezellig</b>: no tiene traducción exacta. Es un ambiente agradable, cálido, con gente que te cae bien.'],
        ['Diego', 'Wat betekent «gezellig»?', '¿Qué significa «gezellig»?'],
        ['Lotte', 'Dat is moeilijk! Warm, leuk, met vrienden. Wacht even, ik pak mijn jas.', '¡Es difícil! Cálido, agradable, con amigos. Espera un momentito, agarro mi chaqueta.', '🗺️ <b>even</b>: un momentito. Los neerlandeses lo ponen en todas partes para sonar más amables: <i>wacht even</i>, <i>kom even</i>.'],
        ['Diego', 'Oké. Ik heb zin in een stroopwafel.', 'Está bien. Tengo ganas de un stroopwafel.'],
        ['Lotte', 'Lekker! Die kopen we op de markt. Kom, we gaan!', '¡Qué rico! Los compramos en el mercado. ¡Ven, vámonos!', '⚠️ <b>Excepción:</b> <b>lekker</b> no se usa solo para la comida: también dices <i>lekker weer</i> (buen clima) y <i>slaap lekker</i> (que duermas bien). Motivo: la palabra significa «agradable para los sentidos», y su uso se extendió a todo lo que se siente bien.']
      ],
      q: [Q('Wat gaan Lotte en Diego doen?', 'Fietsen', 'Zwemmen', 'Slapen'), Q('Waar is het gezellig?', 'In het café', 'In de trein', 'Op het werk'), Q('Wat wil Diego eten?', 'Een stroopwafel', 'Een pizza', 'Een appel')] },
    talk: { title: 'Comprar queso en el mercado', place: 'Albert Cuyp, Ámsterdam', nl: 'Tu docente hace de Henk, vendedor de queso en el mercado.', goal: 'Prueba un queso, pide un pedazo y pregunta cuánto cuesta.',
      role: 'You are Henk, a cheerful cheese seller at the Albert Cuyp market in Amsterdam. You are direct and funny in the Dutch way, let customers taste (jong, belegen, oud), say "lekker, hè?", "zeg het maar" and "anders nog iets?", and finish with "doei!".',
      local: 'Everyday Dutch of the Netherlands: hoi, doei, lekker, gezellig, even, hoor, nou, short and direct sentences, "je" instead of "u" very quickly' }
  });

  add('be', {
    dialog: { t: 'Een schone stad', nl: 'En Gante, «schoon» no significa limpio. Emma te invita a comer papas fritas.', place: 'Gent 🇧🇪', who: { Emma: 'f', Diego: 'm' },
      lines: [
        ['Emma', 'Dag Diego! Welkom in Gent.', '¡Hola, Diego! Bienvenido a Gante.'],
        ['Diego', 'Hallo Emma! Wat een mooie stad!', '¡Hola, Emma! ¡Qué ciudad tan bonita!'],
        ['Emma', 'Ja, Gent is een schone stad.', 'Sí, Gante es una ciudad bonita.', UITZ('schoon', 'mooi', 'En Flandes, schoon significa «bonito»; en los Países Bajos significa «limpio».', 'en el neerlandés antiguo, schoon quería decir «bonito» (como schön en alemán). Flandes conservó ese sentido; en los Países Bajos cambió a «limpio».')],
        ['Diego', 'Schoon? Maar de stad is ook mooi, toch?', '¿Limpia? Pero la ciudad también es bonita, ¿no?'],
        ['Emma', 'Bij ons is «schoon» mooi! Hebt ge honger?', '¡Aquí «schoon» es bonito! ¿Tienes hambre?', UITZ('hebt ge', 'heb je', 'En Flandes se dice ge (o gij) en lugar de je (o jij), y el verbo conserva la -t también en la pregunta.', 'ge y gij son los pronombres antiguos; en los Países Bajos se perdieron, y en Flandes siguen vivos en el habla diaria.')],
        ['Diego', 'Ja, een beetje. Wat eten we?', 'Sí, un poco. ¿Qué comemos?'],
        ['Emma', 'Frietjes van het frietkot! Ik heb er echt goesting in.', '¡Papas fritas del puesto! De verdad tengo ganas.', '🗺️ <b>het frietkot</b>: el puesto de papas fritas. Las papas fritas son belgas, no francesas.<br>' + LOC('goesting', 'Flandes', 'zin') + ' Viene del francés antiguo <i>goust</i>, pariente del español <i>gusto</i>.'],
        ['Diego', 'Lekker! Ik bel even mijn moeder. Waar is mijn mobiel?', '¡Qué rico! Llamo un momento a mi mamá. ¿Dónde está mi celular?'],
        ['Emma', 'Je gsm ligt op tafel. Allez, we zijn weg!', 'Tu celular está en la mesa. ¡Vamos, nos fuimos!', LOC('de gsm', 'Flandes', 'de mobiel, de telefoon') + '<br>' + LOC('allez', 'Flandes', 'kom op, vooruit') + ' Es francés: en Bélgica las dos lenguas conviven.']
      ],
      q: [Q('Wat betekent «schoon» in Vlaanderen?', 'Mooi', 'Duur', 'Klein'), Q('Waar kopen ze frietjes?', 'Bij het frietkot', 'In de supermarkt', 'Op school'), Q('Wat is een gsm?', 'Een mobiele telefoon', 'Een fiets', 'Een tafel')] },
    talk: { title: 'En la chocolatería', place: 'Brujas', nl: 'Tu docente hace de la señora Peeters, que vende bombones en el centro de Brujas.', goal: 'Compra una cajita de bombones para regalar y pregunta cuánto cuesta.',
      role: 'You are Mevrouw Peeters, who sells handmade pralines in a chocolate shop in Bruges, Flanders. You are polite and warm, use "u" with customers, say "alstublieft" when handing something over, "amai" when surprised, "zalig" for delicious and "dikke merci" among friends, and let the customer taste one praline.',
      local: 'Flemish Dutch: ge / gij next to polite u, soft g, allez, amai, goesting, zalig, plezant, schoon for mooi, de gsm, efkes, salut for goodbye' }
  });

  add('sr', {
    dialog: { t: 'Fa waka?', nl: 'En Paramaribo se mezclan el neerlandés y el sranan. Joyce te enseña las primeras palabras.', place: 'Paramaribo 🇸🇷', who: { Joyce: 'f', Diego: 'm' },
      lines: [
        ['Joyce', 'Fa waka, Diego? Welkom in Paramaribo!', '¿Qué tal, Diego? ¡Bienvenido a Paramaribo!', LOC('fa waka?', 'Surinam (sranan)', 'hoe gaat het?')],
        ['Diego', 'Hallo Joyce! Sorry, wat zeg je?', '¡Hola, Joyce! Perdón, ¿qué dices?'],
        ['Joyce', '«Fa waka?» is Sranan. Het betekent: hoe gaat het?', '«Fa waka?» es sranan. Significa: ¿cómo te va?', '🗺️ El <b>sranan tongo</b> es la lengua criolla de Surinam. Casi todos la hablan, además del neerlandés.'],
        ['Diego', 'O! Goed, dank je. Het is hier wel heel warm!', '¡Ah! Bien, gracias. ¡Aquí sí que hace calor!'],
        ['Joyce', 'No span, baya. We gaan zo iets kouds drinken.', 'Tranquilo, hermano. Ahora vamos a tomar algo frío.', '⚠️ <b>Excepción:</b> <b>no span, baya</b> son palabras de sranan dentro de una frase en neerlandés. Motivo: en Surinam casi todos hablan las dos lenguas; el sranan es la lengua de la calle y de la amistad, y el neerlandés la de la escuela y la oficina.'],
        ['Diego', 'Graag. En wat eten we vanavond?', 'Con gusto. ¿Y qué comemos esta noche?'],
        ['Joyce', 'Mijn moeder maakt pom. Dat is echt switi!', 'Mi mamá hace pom. ¡Es riquísimo!', '🗺️ <b>de pom</b>: plato al horno con pollo y pomtajer (una raíz). Es el plato de fiesta de Surinam.<br>' + LOC('switi', 'Surinam (sranan)', 'lekker')],
        ['Diego', 'Pom? Dat ken ik niet.', '¿Pom? No lo conozco.'],
        ['Joyce', 'Tjo! Dan moet je het proeven. En morgen eten we roti.', '¡Oye! Entonces tienes que probarlo. Y mañana comemos roti.', LOC('tjo!', 'Surinam', 'zo! / hé!') + '<br>🗺️ <b>de roti</b>: pan plano con curry, de la cocina indostana de Surinam.']
      ],
      q: [Q('Wat betekent «fa waka»?', 'Hoe gaat het?', 'Waar woon je?', 'Tot ziens'), Q('Wat maakt de moeder van Joyce?', 'Pom', 'Soep', 'Brood'), Q('Wat betekent «switi»?', 'Lekker', 'Warm', 'Duur')] },
    talk: { title: 'En el mercado central', place: 'Paramaribo', nl: 'Tu docente hace de la tía Irma, que vende fruta y roti en el mercado.', goal: 'Compra fruta y un roti, pregunta el precio y aprende dos palabras de sranan.',
      role: 'You are Tante Irma, who sells fruit and roti at the central market of Paramaribo, Suriname. You are warm and funny, greet with "Fa waka?", say "no span" and "switi", call the customer "mi boi" or "schat", end sentences with "toch?", and give prices in Surinamese dollars.',
      local: 'Surinamese Dutch: clear vowels, "toch?" at the end of sentences, Sranan words (fa waka, no span, switi, mi boi, baya, tori, tjo, kaba). Keep the sentences themselves in Dutch.' }
  });

  add('cw', {
    dialog: { t: 'Bon bini!', nl: 'En Curazao vas a entender casi todo: el papiamento se parece mucho al español.', place: 'Willemstad 🇨🇼', who: { Chantal: 'f', Diego: 'm' },
      lines: [
        ['Chantal', 'Bon bini, Diego! Kon ta bai?', '¡Bienvenido, Diego! ¿Cómo va?', '🗺️ <b>bon bini</b> = bienvenido; <b>kon ta bai?</b> = ¿cómo va? Es papiamento, y se parece mucho al español. En neerlandés: <b>welkom</b>, <b>hoe gaat het?</b>'],
        ['Diego', 'Hallo Chantal! Dat lijkt op Spaans! Is dat Papiaments?', '¡Hola, Chantal! ¡Se parece al español! ¿Es papiamento?'],
        ['Chantal', 'Ja! Jij zegt: «Mi ta bon.» Dat is: het gaat goed.', '¡Sí! Tú dices: «Mi ta bon.» Es decir: estoy bien.', '⚠️ <b>Excepción:</b> en papiamento el verbo no cambia: <b>mi ta</b>, <b>bo ta</b>, <b>nos ta</b>. Motivo: es una lengua criolla (con base portuguesa y española, y palabras del neerlandés y de lenguas africanas); marca el tiempo con una partícula (<i>ta</i>) y no con terminaciones.'],
        ['Diego', 'Mi ta bon! Wat makkelijk voor mij.', '¡Mi ta bon! Qué fácil para mí.'],
        ['Chantal', 'Zie je! Ik ga even naar de toko. Wil jij iets drinken?', '¡Ya ves! Voy un momento a la tiendita. ¿Quieres tomar algo?', LOC('de toko', 'Curazao y Aruba', 'de winkel')],
        ['Diego', 'Ja, graag. Een cola, alsjeblieft.', 'Sí, con gusto. Una cola, por favor.'],
        ['Chantal', 'Is goed, dushi. En wil je eten met pika?', 'Está bien, cariño. ¿Y quieres comida con picante?', '🗺️ <b>dushi</b>: cariño, y también rico o lindo. Viene de <i>dulce</i>. Es la palabra más famosa de la isla.<br>' + LOC('pika', 'Curazao (papiamento)', 'pittig')],
        ['Diego', 'Pika? Pittig? Ja, lekker! Danki!', '¿Pika? ¿Picante? ¡Sí, qué rico! ¡Gracias!', LOC('danki', 'Curazao (papiamento)', 'dank je')],
        ['Chantal', 'Heel goed! Ayo, tot zo!', '¡Muy bien! ¡Chao, hasta ahorita!', LOC('ayo', 'Curazao (papiamento)', 'doei, tot ziens')]
      ],
      q: [Q('Wat betekent «bon bini»?', 'Welkom', 'Tot ziens', 'Dank je'), Q('Waar gaat Chantal naartoe?', 'Naar de toko', 'Naar het strand', 'Naar school'), Q('Wat betekent «pika»?', 'Pittig', 'Zoet', 'Koud')] },
    talk: { title: 'Un batido en la playa', place: 'Mambo Beach, Curazao', nl: 'Tu docente hace de Mila, que vende batidos de fruta en la playa.', goal: 'Pide un batido y algo de comer, y saluda en papiamento.',
      role: 'You are Mila, who sells fresh fruit shakes (batidos) at a beach stand on Curaçao. You are sunny and relaxed, speak Dutch with the customer, greet with "Bon dia!" and "Kon ta bai?", call everyone "dushi", say "danki" and "ayo", and wish them "pasa un bon dia".',
      local: 'Dutch of Curaçao and Aruba with Papiamento words: bon bini, bon dia, kon ta bai?, mi ta bon, danki, dushi, ayo, pasa un bon dia, de toko. The learner speaks Spanish: point out how close Papiamento is to Spanish. Keep the sentences themselves in Dutch.' }
  });

  add('za', {
    dialog: { t: 'Ek praat nie Nederlands nie', nl: 'El afrikáans es hijo del neerlandés. Annelie y Diego se entienden cada uno en su idioma.', place: 'Kaapstad 🇿🇦', who: { Annelie: 'f', Diego: 'm' },
      lines: [
        ['Annelie', 'Goeie môre, Diego! Hoe gaan dit?', '¡Buenos días, Diego! ¿Cómo estás?', LOC('goeie môre', 'Sudáfrica (afrikáans)', 'goedemorgen') + '<br>' + LOC('hoe gaan dit?', 'Sudáfrica (afrikáans)', 'hoe gaat het?')],
        ['Diego', 'Goedemorgen, Annelie! Goed, dank je. En met jou?', '¡Buenos días, Annelie! Bien, gracias. ¿Y tú?'],
        ['Annelie', 'Baie goed, dankie! Ek is bly jy is hier.', '¡Muy bien, gracias! Me alegra que estés aquí.', UITZ('ek is, jy is', 'ik ben, jij bent', 'En afrikáans el verbo no cambia según la persona: ek is, jy is, ons is.', 'el afrikáans nació del neerlandés del siglo XVII, hablado en el Cabo entre gente de muchas lenguas; las terminaciones se perdieron.') + '<br>' + LOC('baie', 'Sudáfrica (afrikáans)', 'heel, veel')],
        ['Diego', 'Ik begrijp bijna alles! Afrikaans lijkt op Nederlands.', '¡Entiendo casi todo! El afrikáans se parece al neerlandés.'],
        ['Annelie', 'Ja! Maar ek praat nie Nederlands nie.', '¡Sí! Pero yo no hablo neerlandés.', UITZ('ek praat nie … nie', 'ik praat niet …', 'El afrikáans niega dos veces: un «nie» después del verbo y otro al final de la frase.', 'el segundo «nie» cierra la frase. Es un rasgo propio del afrikáans, que no existe en el neerlandés estándar.')],
        ['Diego', 'Twee keer «nie»! Wat doen we vanavond?', '¡Dos veces «nie»! ¿Qué hacemos esta noche?'],
        ['Annelie', 'Ons gaan braai! Die kos is baie lekker.', '¡Vamos a hacer un asado! La comida es muy rica.', '🗺️ <b>die braai</b>: el asado, la gran tradición sudafricana. En neerlandés: <b>de barbecue</b>.<br>🗺️ En afrikáans solo hay un artículo: <b>die</b>. En neerlandés hay dos: de y het.'],
        ['Diego', 'Een barbecue? Mooi! Ik kom graag.', '¿Un asado? ¡Qué bien! Voy con gusto.'],
        ['Annelie', 'Dis reg! Kom kuier by ons. Totsiens!', '¡Está bien! Ven a visitarnos. ¡Adiós!', LOC('dis reg', 'Sudáfrica (afrikáans)', 'dat is goed') + '<br>' + LOC('kuier', 'Sudáfrica (afrikáans)', 'op bezoek komen') + '<br>' + LOC('totsiens', 'Sudáfrica (afrikáans)', 'tot ziens')]
      ],
      q: [Q('Welke taal spreekt Annelie?', 'Afrikaans', 'Engels', 'Duits'), Q('Wat doen ze vanavond?', 'Braaien', 'Zwemmen', 'Werken'), Q('Hoe zegt Annelie «ik»?', 'Ek', 'Jy', 'Ons')] },
    talk: { title: 'En una finca de vinos', place: 'Stellenbosch', nl: 'Tu docente hace del tío Kobus, dueño de una finca de vinos cerca de Ciudad del Cabo.', goal: 'Saluda, pide probar un jugo de uva o un vino y pregunta el precio. Fíjate en las diferencias con el neerlandés.',
      role: 'You are Oom Kobus, owner of a small wine farm near Stellenbosch, South Africa. You are hearty and hospitable and speak simple Afrikaans: "Goeie môre!", "Baie welkom!", "Dis lekker, nè?", "Baie dankie", "Totsiens". You invite the visitor to a braai.',
      local: 'Afrikaans, kept simple and close to Dutch: ek / jy / ons with an unchanging verb (ek is, jy is), double negation (nie … nie), baie, lekker, dankie, totsiens, die braai, kuier. The learner answers in Dutch of the Netherlands: accept that fully, never mark it as a mistake, and show the Dutch equivalent of each Afrikaans word.' }
  });
})(window.SPT);
