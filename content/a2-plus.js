/* Niveau A2 — aanvulling: extra woorden, extra oefeningen en een leestekst per unit.
   Alles wordt achteraan de bestaande unit toegevoegd (zie S.extendUnit), zodat je voortgang blijft kloppen. */
(function (S) {
  'use strict';
  const X = S.extendUnit;

  /* ───────── A2 · 1 ───────── */
  X('a2-01', {
    vocab: [
      ['celebrar', 'vieren'], ['invitar', 'uitnodigen'], ['alquilar', 'huren'], ['regresar', 'terugkomen', 'in Latijns-Amerika vaker dan volver'], ['ayudar', 'helpen'],
      ['decidir', 'besluiten'], ['compartir', 'delen'], ['olvidar', 'vergeten'], ['cambiar', 'veranderen; wisselen'], ['gastar', 'uitgeven (geld)'],
      ['la boda', 'de bruiloft'], ['el lunes pasado', 'afgelopen maandag'], ['hace un mes', 'een maand geleden'], ['anteanoche', 'eergisteravond'],
      ['el tico / la tica', 'de Costa Ricaan(se)', 'CR (informeel, heel gewoon)'], ['mae', 'gast, kerel', 'CR (informeel)'],
      ['el casado', 'Costa Ricaans bord met rijst, bonen, vlees en bakbanaan', 'CR'], ['tarde en la noche', 'laat op de avond']
    ],
    ex: [
      { t: 'cloze', s: 'Ayer yo ___ a casa a las ocho.', h: 'llegar', a: ['llegué'], nl: 'Gisteren kwam ik om acht uur thuis.', x: 'Llegar → llegué: de u houdt de g hard.', tag: 'pret-regular' },
      { t: 'cloze', s: 'El sábado pasado nosotros ___ una fiesta.', h: 'organizar', a: ['organizamos'], nl: 'Afgelopen zaterdag organiseerden we een feest.', tag: 'pret-regular' },
      { t: 'mc', q: 'Yo ___ la cuenta. (pagar)', o: ['pagué', 'pagé', 'pagó'], tag: 'pret-regular' },
      { t: 'tr', nl: 'Gisteren heb ik mijn moeder geholpen.', a: ['Ayer ayudé a mi mamá.', 'Ayer ayudé a mi madre.'], x: 'In Latijns-Amerika gebruik je hier de indefinido.', tag: 'pret-regular' },
      { t: 'tr', nl: 'Ze besloten een auto te huren.', a: ['Decidieron alquilar un carro.', 'Ellos decidieron alquilar un carro.', 'Decidieron rentar un carro.', 'Decidieron alquilar un auto.'], tag: 'pret-regular' }
    ],
    reading: {
      t: 'Mi primer fin de semana en Costa Rica', type: 'E-mail',
      p: [
        ['¡Hola, mamá! Ya pasé mi primera semana como voluntaria en San José. El viernes terminé las clases a las tres y por la tarde visité el Museo del Oro con otra voluntaria.',
          'Hoi mam! Mijn eerste week als vrijwilliger in San José zit erop. Vrijdag was ik om drie uur klaar met de lessen en ’s middags bezocht ik het Goudmuseum met een andere vrijwilliger.'],
        ['El sábado mi familia tica me invitó a la boda de un primo. ¡Bailé salsa toda la noche! Comí mucho y conocí a muchas personas. Regresamos a casa tarde en la noche.',
          'Zaterdag nodigde mijn Costa Ricaanse gastgezin me uit voor de bruiloft van een neef. Ik heb de hele nacht salsa gedanst! Ik heb veel gegeten en heel veel mensen leren kennen. We kwamen laat op de avond thuis.'],
        ['El domingo decidimos alquilar un carro y manejamos hasta el volcán Poás. Por desgracia, no vimos nada por las nubes, pero la pasamos muy bien.',
          'Zondag besloten we een auto te huren en reden we naar de vulkaan Poás. Helaas zagen we niets door de wolken, maar we hebben het heel leuk gehad.'],
        ['En el camino almorzamos un casado en un restaurante pequeño. Gasté muy poco dinero. Aquí todos dicen «pura vida». ¡Ya entiendo por qué! Un beso, Emma.',
          'Onderweg aten we een casado in een klein restaurant. Ik heb heel weinig geld uitgegeven. Hier zegt iedereen «pura vida». Nu begrijp ik waarom! Een kus, Emma.']
      ],
      gl: [['el / la voluntario/a', 'de vrijwilliger'], ['la familia tica', 'het (Costa Ricaanse) gastgezin'], ['por las nubes', 'door de wolken'], ['en el camino', 'onderweg']],
      q: [
        { t: 'mc', q: '¿Qué hizo Emma el viernes por la tarde?', o: ['Visitó el Museo del Oro', 'Fue a una boda', 'Manejó hasta el volcán'] },
        { t: 'mc', q: '¿Quién la invitó a la boda?', o: ['Su familia tica', 'Otra voluntaria', 'Su mamá'] },
        { t: 'mc', q: '¿Por qué no vieron nada en el volcán?', o: ['Por las nubes', 'Porque llegaron tarde', 'Porque estaba cerrado'] },
        { t: 'mc', q: '¿Qué es un «casado»?', o: ['Un plato típico de Costa Rica', 'Un hombre que se casó', 'Un carro alquilado'] }
      ]
    }
  });

  /* ───────── A2 · 2 ───────── */
  X('a2-02', {
    vocab: [
      ['el tren', 'de trein'], ['el bus cama', 'de nachtbus met ligstoelen', 'PE · AR · CL'], ['la mochila', 'de rugzak'], ['el / la mochilero/a', 'de backpacker'],
      ['la habitación', 'de (hotel)kamer', 'MX ook: el cuarto'], ['la llegada', 'de aankomst'], ['la salida', 'het vertrek; de uitgang'], ['el retraso', 'de vertraging', 'MX: el atraso / la demora'],
      ['despegar', 'opstijgen'], ['aterrizar', 'landen'], ['el sendero', 'het wandelpad'], ['la cascada', 'de waterval'], ['el mirador', 'het uitkijkpunt'],
      ['el amanecer', 'de zonsopgang'], ['el atardecer', 'de zonsondergang'], ['agotado / agotada', 'uitgeput'], ['la plata', 'het geld', 'in grote delen van Zuid-Amerika'],
      ['valer la pena', 'de moeite waard zijn']
    ],
    ex: [
      { t: 'cloze', s: 'Ayer nosotros ___ a Machu Picchu.', h: 'ir', a: ['fuimos'], nl: 'Gisteren gingen we naar Machu Picchu.', tag: 'pret-irregular' },
      { t: 'cloze', s: 'Mis amigos no ___ venir.', h: 'poder', a: ['pudieron'], nl: 'Mijn vrienden konden niet komen.', tag: 'pret-irregular' },
      { t: 'cloze', s: '¿Dónde ___ mi pasaporte, Ana?', h: 'poner, tú', a: ['pusiste'], nl: 'Waar heb je mijn paspoort gelegd, Ana?', tag: 'pret-irregular' },
      { t: 'mc', q: 'Él ___ un viaje increíble. (hacer)', o: ['hizo', 'hició', 'hizó'], x: 'Hacer → hizo (met z, zonder accent).', tag: 'pret-irregular' },
      { t: 'tr', nl: 'Het was de moeite waard.', a: ['Valió la pena.', 'Sí valió la pena.'], tag: 'pret-irregular' }
    ],
    reading: {
      t: 'Diario de viaje: tres días en Cusco', type: 'Reisdagboek',
      p: [
        ['Día 1. Llegamos a Cusco en avión desde Lima. El vuelo tuvo un retraso de dos horas, pero por fin aterrizamos. Al llegar sentí el soroche: me dolió la cabeza toda la tarde.',
          'Dag 1. We kwamen met het vliegtuig vanuit Lima in Cusco aan. De vlucht had twee uur vertraging, maar eindelijk landden we. Bij aankomst kreeg ik last van hoogteziekte: ik had de hele middag hoofdpijn.'],
        ['Día 2. Fuimos al Valle Sagrado con un guía muy simpático. Hicimos un sendero hasta una cascada y vimos ruinas incas. Mi amiga Sophie se puso muy contenta: sacó más de doscientas fotos.',
          'Dag 2. We gingen naar de Heilige Vallei met een heel aardige gids. We liepen een wandelpad naar een waterval en zagen Inca-ruïnes. Mijn vriendin Sophie was heel blij: ze maakte meer dan tweehonderd foto’s.'],
        ['Día 3. Tomamos el tren a Aguas Calientes a las cinco de la mañana. Desde el mirador vimos el amanecer sobre Machu Picchu. No pude decir nada. ¡Fue increíble!',
          'Dag 3. We namen om vijf uur ’s ochtends de trein naar Aguas Calientes. Vanaf het uitkijkpunt zagen we de zonsopgang boven Machu Picchu. Ik kon niets zeggen. Het was ongelooflijk!'],
        ['Por la noche volvimos a Cusco agotadas. Gastamos mucha plata en este viaje, pero valió la pena.',
          '’s Avonds kwamen we uitgeput terug in Cusco. We hebben veel geld uitgegeven aan deze reis, maar het was de moeite waard.']
      ],
      gl: [['por fin', 'eindelijk'], ['al llegar', 'bij aankomst'], ['ponerse contento/a', 'blij worden'], ['sobre', 'boven; over']],
      q: [
        { t: 'mc', q: '¿Qué pasó con el vuelo?', o: ['Tuvo un retraso de dos horas', 'Lo perdieron', 'Llegó temprano'] },
        { t: 'mc', q: '¿Qué le pasó al llegar a Cusco?', o: ['Le dolió la cabeza por el soroche', 'Perdió su mochila', 'Conoció a un guía'] },
        { t: 'mc', q: '¿Qué hizo Sophie en el Valle Sagrado?', o: ['Sacó más de doscientas fotos', 'Durmió todo el día', 'Tomó el tren'] },
        { t: 'mc', q: '¿Qué vieron desde el mirador?', o: ['El amanecer sobre Machu Picchu', 'El atardecer en Lima', 'Una cascada'] }
      ]
    }
  });

  /* ───────── A2 · 3 ───────── */
  X('a2-03', {
    vocab: [
      ['la bicicleta', 'de fiets'], ['jugar a las escondidas', 'verstoppertje spelen'], ['el columpio', 'de schommel'], ['las caricaturas', 'de tekenfilms', 'MX · CO; ook: los dibujos animados'],
      ['portarse bien / mal', 'zich goed / slecht gedragen'], ['pelear(se)', 'ruzie maken, vechten'], ['el cuento', 'het (sprookjes)verhaal'], ['contar cuentos', 'verhalen vertellen'],
      ['el patio', 'de binnenplaats'], ['el árbol', 'de boom'], ['subirse a los árboles', 'in bomen klimmen'], ['los dulces', 'het snoep'], ['la tiendita', 'het winkeltje op de hoek', 'MX · CO'],
      ['obediente', 'gehoorzaam'], ['feliz', 'gelukkig'], ['la nana', 'de oppas, kindermeisje', 'MX · CO'], ['el olor', 'de geur'], ['oler a…', 'ruiken naar…']
    ],
    ex: [
      { t: 'cloze', s: 'Cuando era niña, yo ___ en el campo.', h: 'vivir', a: ['vivía'], nl: 'Toen ik klein was, woonde ik op het platteland.', tag: 'imperfect' },
      { t: 'cloze', s: '¿Qué ___ ustedes los domingos?', h: 'hacer', a: ['hacían'], nl: 'Wat deden jullie op zondag?', tag: 'imperfect' },
      { t: 'cloze', s: 'Nosotros ___ a la playa cada verano.', a: ['íbamos'], o: ['íbamos', 'ibamos', 'fuimos a'], nl: 'We gingen elke zomer naar het strand.', x: 'Ir in de imperfecto: iba, ibas, iba, íbamos, iban.', tag: 'imperfect' },
      { t: 'mc', q: 'Welke zin beschrijft een gewoonte in het verleden?', o: ['Todos los veranos íbamos a la playa.', 'Un verano fuimos a la playa.', 'Este verano vamos a la playa.'], tag: 'imperfect' },
      { t: 'tr', nl: 'Vroeger keek ik elke middag tekenfilms.', a: ['Antes veía caricaturas todas las tardes.', 'Antes veía dibujos animados todas las tardes.', 'Antes miraba caricaturas todas las tardes.', 'Antes miraba dibujos animados todas las tardes.'], tag: 'imperfect' }
    ],
    reading: {
      t: 'La casa de mi abuela', type: 'Herinnering',
      p: [
        ['Cuando era pequeño, pasaba todas las vacaciones en la casa de mi abuela en Oaxaca. Era una casa vieja con un patio enorme y un árbol de mangos.',
          'Toen ik klein was, bracht ik alle vakanties door in het huis van mijn oma in Oaxaca. Het was een oud huis met een enorme binnenplaats en een mangoboom.'],
        ['Por las mañanas mi abuela preparaba chocolate caliente y toda la casa olía a canela. Mis primos y yo nos subíamos al árbol y jugábamos a las escondidas en el patio.',
          '’s Ochtends maakte mijn oma warme chocolademelk en het hele huis rook naar kaneel. Mijn neven en ik klommen in de boom en speelden verstoppertje op de binnenplaats.'],
        ['No teníamos televisión, pero no importaba. Por las noches mi abuelo nos contaba cuentos de fantasmas y nosotros teníamos mucho miedo.',
          'We hadden geen televisie, maar dat maakte niet uit. ’s Avonds vertelde mijn opa ons spookverhalen en waren we heel bang.'],
        ['Yo era un niño travieso y no siempre me portaba bien. Ahora la casa ya no existe, pero todavía extraño el olor a canela.',
          'Ik was een ondeugend kind en ik gedroeg me niet altijd goed. Nu bestaat het huis niet meer, maar ik mis de geur van kaneel nog steeds.']
      ],
      gl: [['pasar las vacaciones', 'de vakantie doorbrengen'], ['la canela', 'de kaneel'], ['no importaba', 'het maakte niet uit'], ['el fantasma', 'het spook']],
      q: [
        { t: 'mc', q: '¿Dónde pasaba las vacaciones el narrador?', o: ['En la casa de su abuela en Oaxaca', 'En la playa', 'En la ciudad con sus papás'] },
        { t: 'mc', q: '¿Qué preparaba la abuela por las mañanas?', o: ['Chocolate caliente', 'Café con leche', 'Jugo de mango'] },
        { t: 'mc', q: '¿Qué hacía el abuelo por las noches?', o: ['Contaba cuentos de fantasmas', 'Veía la televisión', 'Se subía al árbol'] },
        { t: 'mc', q: '¿Qué extraña todavía el narrador?', o: ['El olor a canela', 'La televisión', 'Los fantasmas'] }
      ]
    }
  });

  /* ───────── A2 · 4 ───────── */
  X('a2-04', {
    vocab: [
      ['perderse (ie)', 'verdwalen, kwijtraken'], ['encontrar (ue)', 'vinden'], ['gritar', 'schreeuwen'], ['llorar', 'huilen'], ['reírse', 'lachen'],
      ['el susto', 'de schrik'], ['¡qué susto!', 'wat schrok ik!'], ['ocurrir', 'gebeuren'], ['el accidente', 'het ongeluk'], ['chocar', 'botsen'],
      ['la ambulancia', 'de ambulance'], ['herido / herida', 'gewond'], ['el / la testigo', 'de getuige'], ['poner una denuncia', 'aangifte doen'],
      ['la noticia', 'het nieuws(bericht)'], ['tener suerte', 'geluk hebben'], ['mientras tanto', 'ondertussen'], ['ponerse nervioso/a', 'zenuwachtig worden']
    ],
    ex: [
      { t: 'cloze', s: 'Cuando ___ a casa, mi hermano estaba durmiendo.', h: 'llegar, yo', a: ['llegué'], nl: 'Toen ik thuiskwam, lag mijn broer te slapen.', tag: 'pret-imp' },
      { t: 'cloze', s: 'Mientras nosotros ___, sonó el teléfono.', h: 'cenar', a: ['cenábamos'], nl: 'Terwijl we aan het eten waren, ging de telefoon.', tag: 'pret-imp' },
      { t: 'cloze', s: 'La niña ___ en el mercado, pero la policía la encontró.', h: 'perderse', a: ['se perdió'], nl: 'Het meisje raakte de weg kwijt op de markt, maar de politie vond haar.', tag: 'pret-imp' },
      { t: 'mc', q: 'Welke tijd gebruik je voor de achtergrond (het decor) van een verhaal?', o: ['de imperfecto', 'de indefinido', 'de futuro'], tag: 'pret-imp' },
      { t: 'tr', nl: 'Ik zag een ongeluk toen ik naar mijn werk liep.', a: ['Vi un accidente cuando caminaba al trabajo.', 'Vi un accidente cuando iba al trabajo.', 'Vi un accidente mientras caminaba al trabajo.', 'Vi un accidente cuando iba caminando al trabajo.'], tag: 'pret-imp' }
    ],
    reading: {
      t: 'Un perro encuentra a un niño perdido', type: 'Nieuwsbericht',
      p: [
        ['Valparaíso, Chile. El domingo pasado un niño de cinco años se perdió en el cerro Alegre. Eran las cuatro de la tarde y había mucha gente en las calles por la feria de arte.',
          'Valparaíso, Chili. Afgelopen zondag raakte een jongen van vijf jaar vermist op de heuvel Cerro Alegre. Het was vier uur ’s middags en er waren veel mensen op straat vanwege de kunstmarkt.'],
        ['Mientras su mamá compraba un cuadro, el pequeño Tomás vio un perro y empezó a seguirlo. Cuando la madre se dio cuenta, el niño ya no estaba.',
          'Terwijl zijn moeder een schilderij kocht, zag de kleine Tomás een hond en begon hem te volgen. Toen de moeder het doorhad, was het kind al weg.'],
        ['La mamá llamó a la policía y muchos vecinos ayudaron a buscarlo. Mientras tanto, Tomás caminaba solo por las escaleras del cerro. Tenía miedo y lloraba.',
          'De moeder belde de politie en veel buurtbewoners hielpen zoeken. Ondertussen liep Tomás alleen over de trappen van de heuvel. Hij was bang en huilde.'],
        ['Por suerte, una hora después, el mismo perro volvió a la plaza con el niño. «¡Qué susto!», dijo la madre. Los vecinos dicen que el perro se llama Capitán y que vive en la plaza desde hace años.',
          'Gelukkig kwam dezelfde hond een uur later met de jongen terug op het plein. «Wat ben ik geschrokken!», zei de moeder. De buurtbewoners zeggen dat de hond Capitán heet en al jaren op het plein woont.']
      ],
      gl: [['el cerro', 'de heuvel'], ['la feria', 'de markt, beurs'], ['seguir', 'volgen'], ['desde hace años', 'al jaren']],
      q: [
        { t: 'mc', q: '¿Por qué había mucha gente en las calles?', o: ['Por la feria de arte', 'Por un accidente', 'Porque era lunes'] },
        { t: 'mc', q: '¿Qué hacía la mamá cuando Tomás se fue?', o: ['Compraba un cuadro', 'Llamaba a la policía', 'Buscaba al perro'] },
        { t: 'mc', q: '¿Cómo se sentía Tomás en las escaleras?', o: ['Tenía miedo y lloraba', 'Estaba feliz', 'Estaba dormido'] },
        { t: 'mc', q: '¿Quién trajo al niño a la plaza?', o: ['El perro Capitán', 'La policía', 'Un vecino'] }
      ]
    }
  });

  /* ───────── A2 · 5 ───────── */
  X('a2-05', {
    vocab: [
      ['hacer surf', 'surfen'], ['saltar en paracaídas', 'parachutespringen'], ['la tirolesa', 'de zipline', 'MX · AR; CO/CR: el canopy'], ['el glaciar', 'de gletsjer'],
      ['recorrer', 'rondreizen, doorkruisen'], ['el sueño', 'de droom'], ['cumplir un sueño', 'een droom waarmaken'], ['tener miedo', 'bang zijn'],
      ['atreverse a…', 'durven…'], ['famoso / famosa', 'beroemd'], ['ganar un premio', 'een prijs winnen'], ['emocionante', 'spannend'],
      ['el delfín rosado', 'de roze rivierdolfijn'], ['la Amazonía', 'het Amazonegebied'], ['el cuy', 'de cavia (gerecht)', 'PE · EC'],
      ['los chapulines', 'gefrituurde sprinkhanen', 'MX (Oaxaca)'], ['descubrir', 'ontdekken'], ['hasta ahora', 'tot nu toe']
    ],
    ex: [
      { t: 'cloze', s: '¿Alguna vez ___ el cuy?', h: 'probar, tú', a: ['has probado'], nl: 'Heb je ooit cavia geproefd?', tag: 'perfect' },
      { t: 'cloze', s: 'Nosotros nunca ___ un glaciar.', h: 'ver', a: ['hemos visto'], nl: 'We hebben nog nooit een gletsjer gezien.', tag: 'perfect' },
      { t: 'mc', q: 'Participio van «descubrir»:', o: ['descubierto', 'descubrido', 'descubrito'], x: 'Net als abrir → abierto: descubrir → descubierto.', tag: 'perfect' },
      { t: 'mc', q: 'Wat zeg je in Latijns-Amerika meestal over vanochtend?', o: ['Esta mañana desayuné tarde.', 'Esta mañana he desayunado tarde.', 'Esta mañana desayunaba tarde.'], x: 'Voor een afgesloten moment gebruiken Latijns-Amerikanen meestal de indefinido, ook bij «esta mañana».', tag: 'perfect' },
      { t: 'tr', nl: 'Ik heb nog nooit gesurft.', a: ['Nunca he hecho surf.', 'Todavía no he hecho surf.', 'Nunca he surfeado.', 'Yo nunca he hecho surf.'], tag: 'perfect' },
      { t: 'cloze', s: 'Mis papás acaban ___ llegar de Chile.', a: ['de'], o: ['de', 'a', 'que'], nl: 'Mijn ouders zijn net terug uit Chili.', tag: 'periphrasis' },
      { t: 'cloze', s: 'Después del accidente, nunca ___ a manejar.', a: ['volví'], o: ['volví', 'dejé', 'acabé'], nl: 'Na het ongeluk ben ik nooit meer gaan rijden.', x: 'Volver a + infinitief = opnieuw / weer iets doen.', tag: 'periphrasis' },
      { t: 'cloze', s: 'Mi abuelo dejó ___ fumar a los sesenta años.', a: ['de'], o: ['de', 'a', 'en'], nl: 'Mijn opa is op zijn zestigste gestopt met roken.', tag: 'periphrasis' },
      { t: 'tr', nl: 'Ik heb net gegeten.', a: ['Acabo de comer.', 'Acabo de almorzar.', 'Acabo de cenar.', 'Yo acabo de comer.'], x: 'In Latijns-Amerika zeg je dit bijna altijd met acabar de.', tag: 'periphrasis' }
    ],
    grammar: [
      { t: 'Acabar de, volver a, dejar de, empezar a', es: 'Perífrasis verbales',
        html: `<p>Met een vervoegd werkwoord + voorzetsel + infinitief zeg je heel precies <b>wanneer</b> of <b>hoe</b> iets gebeurt:</p>
<p><b>acabar de</b> + inf. = net iets gedaan hebben: <i>Acabo de llegar.</i> (Ik ben net aangekomen.) In Latijns-Amerika hoor je dit veel vaker dan de perfecto.</p>
<p><b>volver a</b> + inf. = iets opnieuw doen: <i>¿Puedes volver a explicarlo?</i> · <b>dejar de</b> + inf. = stoppen met: <i>Dejé de fumar.</i> · <b>empezar a</b> + inf. = beginnen met: <i>Empecé a estudiar español hace un año.</i></p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['acabar de + inf.', 'net …', 'Acabamos de comer.'], ['volver a + inf.', 'weer, opnieuw', 'Nunca volví a verlo.'], ['dejar de + inf.', 'stoppen met', 'Deja de llorar.'], ['empezar a + inf.', 'beginnen met', 'Empieza a llover.'], ['soler + inf.', 'gewoonlijk …', 'Suelo correr los lunes.']] }
    ],
    reading: {
      t: 'Un año en Sudamérica', type: 'Blog',
      p: [
        ['Hace un año dejé mi trabajo en Utrecht para recorrer Sudamérica con mi mochila. Hoy quiero compartir con ustedes todo lo que he hecho hasta ahora.',
          'Een jaar geleden ben ik gestopt met mijn werk in Utrecht om met mijn rugzak door Zuid-Amerika te reizen. Vandaag wil ik met jullie delen wat ik tot nu toe heb gedaan.'],
        ['He visto los glaciares de la Patagonia y he caminado por el desierto de Atacama. En Colombia he aprendido a bailar salsa, ¡aunque todavía bailo bastante mal!',
          'Ik heb de gletsjers van Patagonië gezien en ik heb door de Atacamawoestijn gelopen. In Colombia heb ik salsa leren dansen, al dans ik nog steeds behoorlijk slecht!'],
        ['En Perú he probado el cuy. En la Amazonía he visto delfines rosados desde una canoa. Ha sido una de las experiencias más emocionantes de mi vida.',
          'In Peru heb ik cavia geproefd. In het Amazonegebied heb ik vanuit een kano roze dolfijnen gezien. Het was een van de spannendste ervaringen van mijn leven.'],
        ['Pero todavía no he cumplido mi gran sueño: saltar en paracaídas. Nunca me he atrevido porque tengo mucho miedo a las alturas. ¿Y ustedes? ¿Qué cosas nunca han hecho?',
          'Maar mijn grote droom heb ik nog niet waargemaakt: parachutespringen. Ik heb het nooit gedurfd, want ik ben heel bang voor hoogtes. En jullie? Wat hebben jullie nog nooit gedaan?']
      ],
      gl: [['dejar el trabajo', 'stoppen met je werk'], ['lo que', 'wat (dat wat)'], ['aunque', 'hoewel, al'], ['las alturas', 'de hoogtes']],
      q: [
        { t: 'mc', q: '¿Qué ha aprendido la autora en Colombia?', o: ['A bailar salsa', 'A hacer surf', 'A saltar en paracaídas'] },
        { t: 'mc', q: '¿Dónde ha visto delfines rosados?', o: ['En la Amazonía', 'En la Patagonia', 'En Atacama'] },
        { t: 'mc', q: '¿Qué sueño todavía no ha cumplido?', o: ['Saltar en paracaídas', 'Ver un glaciar', 'Probar el cuy'] },
        { t: 'mc', q: '¿Por qué nunca lo ha hecho?', o: ['Porque tiene miedo a las alturas', 'Porque es muy caro', 'Porque no tiene tiempo'] }
      ]
    }
  });

  /* ───────── A2 · 6 ───────── */
  X('a2-06', {
    vocab: [
      ['el consultorio', 'de spreekkamer, praktijk'], ['urgencias', 'de spoedeisende hulp', 'ook: la sala de emergencias'], ['el jarabe', 'de (hoest)siroop'],
      ['la inyección', 'de injectie'], ['la vacuna', 'het vaccin'], ['estornudar', 'niezen'], ['toser', 'hoesten'], ['vomitar', 'overgeven'],
      ['cortarse', 'zich snijden'], ['quemarse', 'zich branden; verbranden (zon)'], ['romperse (un brazo)', '(een arm) breken'], ['el yeso', 'het gips'],
      ['la curita', 'de pleister', 'in heel Latijns-Amerika (merknaam)'], ['la presión', 'de bloeddruk'], ['sano / sana', 'gezond'], ['el chequeo', 'de controle (bij de arts)'],
      ['hacer ejercicio', 'bewegen, sporten'], ['embarazada', 'zwanger']
    ],
    ex: [
      { t: 'cloze', s: 'Me ___ los pies después de caminar tanto.', a: ['duelen'], o: ['duelen', 'duele', 'dolen'], nl: 'Mijn voeten doen pijn na zoveel lopen.', tag: 'doler' },
      { t: 'cloze', s: 'A mi papá le ___ la espalda.', h: 'doler', a: ['duele'], nl: 'Mijn vader heeft rugpijn.', tag: 'doler' },
      { t: 'cloze', s: 'Tú ___ tomar mucha agua.', a: ['debes'], o: ['debes', 'debe', 'deber'], nl: 'Je moet veel water drinken.', tag: 'obligation' },
      { t: 'mc', q: 'Je hebt keelpijn. Wat zeg je?', o: ['Me duele la garganta.', 'Tengo dolor la garganta.', 'Me duelo la garganta.'], tag: 'doler' },
      { t: 'tr', nl: 'Je moet uitrusten en veel water drinken.', a: ['Tienes que descansar y tomar mucha agua.', 'Debes descansar y tomar mucha agua.', 'Tienes que descansar y beber mucha agua.', 'Debes descansar y beber mucha agua.'], tag: 'obligation' }
    ],
    reading: {
      t: 'Consejos para viajar a la altura', type: 'Folder',
      p: [
        ['Ciudades como La Paz, Cusco o Quito están a más de 2.800 metros de altura. Muchos turistas sufren de soroche: les duele la cabeza, se sienten mareados y no pueden dormir bien.',
          'Steden als La Paz, Cusco of Quito liggen hoger dan 2.800 meter. Veel toeristen krijgen hoogteziekte: ze hebben hoofdpijn, voelen zich duizelig en kunnen niet goed slapen.'],
        ['¿Qué hay que hacer? Los primeros dos días debe descansar y caminar despacio. No es buena idea hacer ejercicio fuerte. Tiene que tomar mucha agua y comer poco.',
          'Wat moet je doen? De eerste twee dagen moet u rusten en langzaam lopen. Zwaar sporten is geen goed idee. U moet veel water drinken en weinig eten.'],
        ['En Perú y Bolivia mucha gente toma mate de coca, una infusión tradicional que ayuda con los síntomas. También puede comprar pastillas en la farmacia.',
          'In Peru en Bolivia drinken veel mensen coca-thee, een traditionele kruidenthee die helpt tegen de klachten. U kunt ook tabletten kopen bij de apotheek.'],
        ['Si tiene fiebre, vomita o le cuesta respirar, debe ir a urgencias. Y no olvide el bloqueador: a esa altura el sol quema mucho más.',
          'Als u koorts heeft, overgeeft of moeilijk ademt, moet u naar de spoedeisende hulp. En vergeet de zonnebrand niet: op die hoogte verbrandt de zon veel sneller.']
      ],
      gl: [['sufrir de', 'last hebben van'], ['la infusión', 'de kruidenthee'], ['los síntomas', 'de klachten, symptomen'], ['le cuesta respirar', 'hij/zij ademt moeilijk']],
      q: [
        { t: 'mc', q: '¿Qué síntomas tiene el soroche?', o: ['Dolor de cabeza, mareo y problemas para dormir', 'Tos y alergia', 'Dolor de muelas'] },
        { t: 'mc', q: '¿Qué debe hacer los primeros dos días?', o: ['Descansar y caminar despacio', 'Hacer mucho ejercicio', 'Comer mucho'] },
        { t: 'mc', q: '¿Qué es el mate de coca?', o: ['Una infusión tradicional', 'Una pastilla', 'Un tipo de bloqueador'] },
        { t: 'mc', q: '¿Cuándo debe ir a urgencias?', o: ['Si tiene fiebre, vomita o le cuesta respirar', 'Si le duelen los pies', 'Si no tiene bloqueador'] }
      ]
    }
  });

  /* ───────── A2 · 7 ───────── */
  X('a2-07', {
    vocab: [
      ['arreglar', 'repareren, regelen'], ['la herramienta', 'het gereedschap'], ['la escalera', 'de trap; de ladder'], ['cuidar', 'zorgen voor, oppassen op'],
      ['regar (ie) las plantas', 'de planten water geven'], ['recoger', 'ophalen; opruimen'], ['llevar', 'brengen; meenemen; dragen'], ['el paquete', 'het pakket'],
      ['agradecer', 'bedanken'], ['te debo una', 'ik sta bij je in het krijt'], ['no hay de qué', 'graag gedaan'], ['echar una mano', 'een handje helpen'],
      ['la sorpresa', 'de verrassing'], ['envolver (ue)', 'inpakken (cadeau)'], ['el ramo de flores', 'de bos bloemen'], ['pasar por…', 'langskomen bij…'],
      ['de una', 'meteen, prima!', 'CO (informeel)'], ['¡qué amable!', 'wat aardig!']
    ],
    ex: [
      { t: 'cloze', s: '¿Tienes mis llaves? — Sí, ___ tengo.', a: ['las'], o: ['las', 'los', 'les'], nl: 'Heb jij mijn sleutels? — Ja, ik heb ze.', tag: 'object-pron' },
      { t: 'cloze', s: 'Voy a regalar___ un libro a mi hermana.', a: ['le'], o: ['le', 'la', 'lo'], nl: 'Ik ga mijn zus een boek geven.', x: 'Meewerkend voorwerp (aan mijn zus) = le.', tag: 'object-pron' },
      { t: 'cloze', s: '¿Le diste el regalo a Ana? — Sí, ___ lo di.', a: ['se'], o: ['se', 'le', 'la'], nl: 'Heb je Ana het cadeau gegeven? — Ja, ik heb het haar gegeven.', x: 'Le + lo wordt se lo.', tag: 'object-pron' },
      { t: 'mc', q: '«Ik leen het (el libro) aan jou»:', o: ['Te lo presto.', 'Lo te presto.', 'Te le presto.'], tag: 'object-pron' },
      { t: 'tr', nl: 'Kun je me een handje helpen?', a: ['¿Me puedes echar una mano?', '¿Me echas una mano?', '¿Puedes echarme una mano?', '¿Me puedes ayudar?', '¿Me ayudas?'], tag: 'object-pron' }
    ],
    reading: {
      t: '¿Me cuidas la casa?', type: 'WhatsApp-gesprek',
      p: [
        ['Laura: ¡Hola, Felipe! ¿Me haces un favor? El sábado me voy a Cartagena por una semana. ¿Puedes cuidarme la casa? — Felipe: ¡De una! ¿Qué necesitas?',
          'Laura: Hoi Felipe! Wil je me een plezier doen? Zaterdag ga ik een week naar Cartagena. Kun je op mijn huis passen? — Felipe: Prima! Wat heb je nodig?'],
        ['Laura: Tengo que regar las plantas dos veces por semana. Y Michi, mi gata, necesita comida todos los días. La comida está en la cocina. ¿Se la puedes dar por la mañana?',
          'Laura: De planten moeten twee keer per week water krijgen. En Michi, mijn kat, heeft elke dag eten nodig. Het eten staat in de keuken. Kun je het haar ’s ochtends geven?'],
        ['Laura: Ah, y el martes llega un paquete. ¿Lo puedes recoger en la portería? — Felipe: Claro, no hay problema. ¿Y las llaves? — Laura: Te las dejo con el portero.',
          'Laura: O, en dinsdag komt er een pakket. Kun je het bij de portiersloge ophalen? — Felipe: Natuurlijk, geen probleem. En de sleutels? — Laura: Ik laat ze voor je achter bij de portier.'],
        ['Laura: ¡Mil gracias! Te debo una. Te traigo un regalo de Cartagena. — Felipe: No hay de qué. ¡Que te vaya bien!',
          'Laura: Duizendmaal dank! Ik sta bij je in het krijt. Ik neem een cadeautje voor je mee uit Cartagena. — Felipe: Graag gedaan. Goede reis!']
      ],
      gl: [['dos veces por semana', 'twee keer per week'], ['la portería', 'de portiersloge (CO)'], ['dejar', 'achterlaten'], ['¡que te vaya bien!', 'het ga je goed! / goede reis!']],
      q: [
        { t: 'mc', q: '¿Adónde va Laura?', o: ['A Cartagena', 'A Bogotá', 'A casa de Felipe'] },
        { t: 'mc', q: '¿Cuándo tiene que dar la comida a Michi?', o: ['Por la mañana, todos los días', 'Dos veces por semana', 'Solo el martes'] },
        { t: 'mc', q: '¿Dónde tiene que recoger Felipe el paquete?', o: ['En la portería', 'En la cocina', 'En el correo'] },
        { t: 'mc', q: '¿Con quién deja Laura las llaves?', o: ['Con el portero', 'Con Michi', 'Con su vecina'] }
      ]
    }
  });

  /* ───────── A2 · 8 ───────── */
  X('a2-08', {
    vocab: [
      ['la contaminación', 'de vervuiling'], ['el arriendo / el alquiler', 'de huur', 'arriendo: CO · CL; MX: la renta'], ['la calidad de vida', 'de kwaliteit van leven'],
      ['el rascacielos', 'de wolkenkrabber'], ['el trancón', 'de file', 'CO; MX: el embotellamiento; AR: el embotellamiento / el atasco'], ['enorme', 'enorm'],
      ['templado / templada', 'gematigd (klimaat)'], ['el nivel del mar', 'de zeespiegel'], ['acogedor / acogedora', 'gezellig, knus'], ['agradable', 'aangenaam'],
      ['caótico / caótica', 'chaotisch'], ['la ciclovía', 'het fietspad', 'op zondag zijn in Bogotá grote wegen ciclovía'], ['la zona verde', 'het groen, park'],
      ['mientras que', 'terwijl (tegenstelling)'], ['sin embargo', 'echter'], ['la mitad', 'de helft'], ['el doble', 'het dubbele'], ['de verdad', 'echt, werkelijk']
    ],
    ex: [
      { t: 'cloze', s: 'Bogotá es ___ fría que Cartagena.', a: ['más'], o: ['más', 'tan', 'muy'], nl: 'Bogota is kouder dan Cartagena.', tag: 'comparatives' },
      { t: 'cloze', s: 'Lima es tan grande ___ Bogotá.', a: ['como'], o: ['como', 'que', 'de'], nl: 'Lima is even groot als Bogota.', tag: 'comparatives' },
      { t: 'cloze', s: 'Es la ciudad más bonita ___ país.', a: ['del'], o: ['del', 'que', 'en el'], nl: 'Het is de mooiste stad van het land.', tag: 'comparatives' },
      { t: 'mc', q: 'Vergrotende trap van «malo»:', o: ['peor', 'malísimo', 'menor'], tag: 'comparatives' },
      { t: 'tr', nl: 'Het leven in Medellín is goedkoper dan in Amsterdam.', a: ['La vida en Medellín es más barata que en Ámsterdam.', 'La vida en Medellín es más barata que en Amsterdam.', 'El costo de vida en Medellín es más bajo que en Ámsterdam.'], tag: 'comparatives' }
    ],
    reading: {
      t: '¿Medellín o Santiago?', type: 'Artikel',
      p: [
        ['Cada año más extranjeros deciden vivir en Latinoamérica. Dos de las ciudades favoritas son Medellín, en Colombia, y Santiago, en Chile. ¿Cuál es mejor? Depende de lo que buscas.',
          'Elk jaar besluiten meer buitenlanders in Latijns-Amerika te gaan wonen. Twee van de favoriete steden zijn Medellín, in Colombia, en Santiago, in Chili. Welke is beter? Dat hangt af van wat je zoekt.'],
        ['Medellín tiene un clima templado todo el año: por eso la llaman «la ciudad de la eterna primavera». Santiago, en cambio, tiene cuatro estaciones. En invierno hace bastante frío y en verano hace más calor que en Medellín.',
          'Medellín heeft het hele jaar een gematigd klimaat: daarom noemen ze het «de stad van de eeuwige lente». Santiago heeft daarentegen vier seizoenen. In de winter is het behoorlijk koud en in de zomer is het warmer dan in Medellín.'],
        ['Santiago es más grande y más moderna, con rascacielos y un metro excelente. Sin embargo, el arriendo es casi el doble. En Medellín la vida es mucho más barata, pero el tráfico es igual de caótico.',
          'Santiago is groter en moderner, met wolkenkrabbers en een uitstekende metro. Toch is de huur bijna het dubbele. In Medellín is het leven veel goedkoper, maar het verkeer is net zo chaotisch.'],
        ['Los dos tienen algo en común: la gente es muy acogedora. Y desde las dos ciudades puedes ver montañas. ¡Las de Santiago tienen nieve!',
          'Ze hebben iets gemeen: de mensen zijn heel gastvrij. En vanuit beide steden zie je bergen. Die van Santiago hebben sneeuw!']
      ],
      gl: [['el / la extranjero/a', 'de buitenlander'], ['depende de', 'het hangt af van'], ['eterno / eterna', 'eeuwig'], ['en común', 'gemeenschappelijk']],
      q: [
        { t: 'mc', q: '¿Por qué llaman a Medellín «la ciudad de la eterna primavera»?', o: ['Por su clima templado todo el año', 'Por sus flores', 'Porque siempre llueve'] },
        { t: 'mc', q: '¿Qué ciudad es más cara para vivir?', o: ['Santiago', 'Medellín', 'Las dos igual'] },
        { t: 'mc', q: '¿Qué tienen las dos ciudades en común?', o: ['La gente es muy acogedora', 'El metro', 'El clima'] },
        { t: 'mc', q: 'Según el texto, el tráfico en Medellín es…', o: ['igual de caótico que en Santiago', 'mejor que en Santiago', 'muy tranquilo'] }
      ]
    }
  });

  /* ───────── A2 · 9 ───────── */
  X('a2-09', {
    vocab: [
      ['el contrato', 'het contract'], ['contratar', 'aannemen (personeel)'], ['despedir (i)', 'ontslaan'], ['renunciar', 'ontslag nemen'],
      ['el / la cliente', 'de klant'], ['el / la gerente', 'de manager'], ['la capacitación', 'de training, bijscholing'], ['el / la practicante', 'de stagiair(e)', 'ook: el / la pasante'],
      ['las prácticas', 'de stage', 'ook: la pasantía'], ['el aguinaldo', 'de dertiende maand (eindejaarsbonus)', 'in heel Latijns-Amerika verplicht'],
      ['la meta', 'het doel'], ['el negocio propio', 'het eigen bedrijf'], ['el emprendedor / la emprendedora', 'de ondernemer'], ['la jornada laboral', 'de werkdag (uren)'],
      ['las horas extra', 'de overuren'], ['el plazo', 'de termijn, deadline'], ['bilingüe', 'tweetalig'], ['me encantaría', 'ik zou het heel leuk vinden']
    ],
    ex: [
      { t: 'cloze', s: 'El próximo año ___ más experiencia.', h: 'tener, yo', a: ['tendré'], nl: 'Volgend jaar heb ik meer ervaring.', tag: 'future' },
      { t: 'cloze', s: '¿___ venir a la reunión mañana?', h: 'poder, tú', a: ['Podrás'], nl: 'Kun je morgen naar de vergadering komen?', tag: 'future' },
      { t: 'cloze', s: 'Trabajo ___ ganar dinero.', a: ['para'], o: ['para', 'por'], nl: 'Ik werk om geld te verdienen.', tag: 'por-para' },
      { t: 'cloze', s: 'Gracias ___ tu ayuda.', a: ['por'], o: ['por', 'para'], nl: 'Bedankt voor je hulp.', tag: 'por-para' },
      { t: 'tr', nl: 'Over vijf jaar heb ik mijn eigen bedrijf.', a: ['Dentro de cinco años tendré mi propio negocio.', 'En cinco años tendré mi propio negocio.', 'Dentro de cinco años tendré mi propia empresa.', 'En cinco años tendré mi propia empresa.'], tag: 'future' }
    ],
    reading: {
      t: 'Se busca guía turístico bilingüe', type: 'Vacature',
      p: [
        ['Viajes Caribe Azul, una empresa de turismo en Cartagena, busca guía turístico bilingüe (español e inglés) para empezar el próximo mes. Contrato de un año, tiempo completo.',
          'Viajes Caribe Azul, een toerismebedrijf in Cartagena, zoekt een tweetalige reisgids (Spaans en Engels) die volgende maand kan beginnen. Contract voor een jaar, fulltime.'],
        ['¿Qué harás? Acompañarás a grupos de turistas por el centro histórico y las islas del Rosario. También ayudarás a los clientes con sus reservas.',
          'Wat ga je doen? Je begeleidt groepen toeristen door het historische centrum en naar de Rosario-eilanden. Je helpt klanten ook met hun reserveringen.'],
        ['¿Qué ofrecemos? Un buen sueldo, aguinaldo, seguro médico y una capacitación de dos semanas. La jornada laboral será de ocho horas, con un día libre a la semana.',
          'Wat bieden we? Een goed salaris, een dertiende maand, een zorgverzekering en een training van twee weken. De werkdag is acht uur, met één vrije dag per week.'],
        ['Para solicitar el puesto, mande su currículum antes del 30 de este mes. Las entrevistas serán por videollamada. ¡Lo esperamos!',
          'Om te solliciteren, stuur je cv vóór de 30e van deze maand. De sollicitatiegesprekken zijn via videobellen. We verwachten u graag!']
      ],
      gl: [['se busca', 'gezocht'], ['acompañar', 'begeleiden'], ['el día libre', 'de vrije dag'], ['la videollamada', 'het videogesprek']],
      q: [
        { t: 'mc', q: '¿Qué idiomas tiene que hablar el guía?', o: ['Español e inglés', 'Solo español', 'Español y francés'] },
        { t: 'mc', q: '¿Por cuánto tiempo es el contrato?', o: ['Un año', 'Dos semanas', 'Un mes'] },
        { t: 'mc', q: '¿Qué ofrece la empresa además del sueldo?', o: ['Aguinaldo, seguro médico y capacitación', 'Un carro y una casa', 'Viajes gratis a Europa'] },
        { t: 'mc', q: '¿Cómo serán las entrevistas?', o: ['Por videollamada', 'En la oficina', 'En las islas del Rosario'] }
      ]
    }
  });

  /* ───────── A2 · 10 ───────── */
  X('a2-10', {
    vocab: [
      ['el ingrediente', 'het ingrediënt'], ['la harina', 'het meel'], ['la mantequilla', 'de boter', 'AR · UY: la manteca'], ['el aceite', 'de olie'], ['el ajo', 'de knoflook'],
      ['el limón', 'de limoen / citroen'], ['calentar (ie)', 'verwarmen'], ['revolver (ue)', 'roeren'], ['tapar', 'afdekken'], ['amasar', 'kneden'],
      ['dorar', 'goudbruin bakken'], ['a fuego lento', 'op laag vuur'], ['la masa', 'het deeg'], ['la cucharada', 'de eetlepel (hoeveelheid)'], ['la taza', 'het kopje; de kop (maat)'],
      ['el trozo', 'het stuk'], ['servir (i)', 'opdienen'], ['¡listo el pollo!', 'klaar is Kees!', 'informeel, o.a. CO · PE · CL']
    ],
    ex: [
      { t: 'cloze', s: '___ la cebolla en trozos pequeños.', h: 'cortar, tú', a: ['Corta'], nl: 'Snijd de ui in kleine stukjes.', tag: 'imperative' },
      { t: 'cloze', s: '___ la olla en el fuego, señora.', h: 'poner, usted', a: ['Ponga'], nl: 'Zet de pan op het vuur, mevrouw.', tag: 'imperative' },
      { t: 'cloze', s: '___ el aceite primero, chicos.', h: 'calentar, ustedes', a: ['Calienten'], nl: 'Verwarm eerst de olie, jongens.', tag: 'imperative' },
      { t: 'mc', q: '«Geef het (el libro) aan mij» (tú):', o: ['Dámelo.', 'Dame lo.', 'Me lo da.'], tag: 'imperative' },
      { t: 'tr', nl: 'Meng het meel met de boter.', a: ['Mezcla la harina con la mantequilla.', 'Mezcle la harina con la mantequilla.', 'Mezclen la harina con la mantequilla.'], tag: 'imperative' }
    ],
    reading: {
      t: 'Arepas de queso', type: 'Recept',
      p: [
        ['Ingredientes para 6 arepas: 2 tazas de harina de maíz precocida, 2 tazas y media de agua tibia, 1 taza de queso rallado, 1 cucharadita de sal y un poco de mantequilla.',
          'Ingrediënten voor 6 arepa’s: 2 kopjes voorgekookt maïsmeel, 2,5 kopje lauw water, 1 kopje geraspte kaas, 1 theelepel zout en een beetje boter.'],
        ['Primero, mezcla el agua con la sal en un recipiente grande. Luego agrega la harina poco a poco y revuelve con la mano. Amasa durante dos o tres minutos hasta tener una masa suave.',
          'Meng eerst het water met het zout in een grote kom. Voeg daarna beetje bij beetje het meel toe en roer met je hand. Kneed twee à drie minuten tot je een zacht deeg hebt.'],
        ['Agrega el queso y amasa otra vez. Haz seis bolitas y aplástalas con las manos. Las arepas deben tener un centímetro de grosor.',
          'Voeg de kaas toe en kneed opnieuw. Maak zes balletjes en druk ze plat met je handen. De arepa’s moeten een centimeter dik zijn.'],
        ['Calienta una sartén con un poco de aceite a fuego medio. Dora las arepas cinco minutos por cada lado. Sírvelas calientes con mantequilla. ¡Listo el pollo!',
          'Verhit een koekenpan met een beetje olie op middelhoog vuur. Bak de arepa’s vijf minuten per kant goudbruin. Dien ze warm op met boter. Klaar is Kees!']
      ],
      gl: [['precocido / precocida', 'voorgekookt'], ['tibio / tibia', 'lauw'], ['rallado / rallada', 'geraspt'], ['aplastar', 'platdrukken']],
      q: [
        { t: 'mc', q: '¿Cuántas arepas salen con esta receta?', o: ['Seis', 'Dos', 'Cinco'] },
        { t: 'mc', q: '¿Qué haces primero?', o: ['Mezclar el agua con la sal', 'Agregar el queso', 'Calentar la sartén'] },
        { t: 'mc', q: '¿Cuánto tiempo doras cada lado?', o: ['Cinco minutos', 'Un minuto', 'Diez minutos'] },
        { t: 'mc', q: '¿Cómo se sirven las arepas?', o: ['Calientes, con mantequilla', 'Frías, con limón', 'Con arroz y frijoles'] }
      ]
    }
  });
})(window.SPT);
