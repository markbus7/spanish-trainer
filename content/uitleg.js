/* ⓘ Uitleg zonder AI: vooraf geschreven toelichting bij lastige zinnen en vaste uitdrukkingen (A1–B1).
   Kost geen API-tokens en werkt offline.

   Twee soorten:
   - ZINNEN: uitleg bij één bepaalde zin uit een dialoog, tekst of oefening. De sleutel is de Spaanse zin
     precies zoals in de lesstof (hoofdletters en leestekens maken niet uit). In een alinea mag de sleutel
     ook één zin uit die alinea zijn.
   - UITDRUKKINGEN: algemene valkuilen (lidwoorden, ser/estar, por/para, vaste uitdrukkingen, regionale
     woorden). Die verschijnen bij élke zin waarin het patroon voorkomt, ook in nieuwe lesstof.
     Patroon = reguliere expressie op de zin in kleine letters zonder leestekens.

   Wil je uitleg direct in de lesstof zetten? Dat kan ook: dialoogregel [wie, es, nl, 'uitleg'],
   leesalinea [es, nl, 'uitleg'] of een oefening met i: 'uitleg'.
   tests/run.js controleert dat elke zin-sleutel nog in de lesstof staat en dat elk patroon ergens raakt. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return; // lesstof van de cursus Spaans (uitleg in het Nederlands)

  const ZINNEN = {
    /* ── A1 · 1 Primer día en la universidad ── */
    '¡Hola! Buenos días.': '<b>Buenos días</b> staat altijd in het meervoud (letterlijk: "goede dagen"). Zo ook <i>buenas tardes</i> en <i>buenas noches</i>. <i>Buenas noches</i> zeg je ook als begroeting zodra het donker is, niet alleen bij het slapengaan.',
    'Buenos días. ¿Cómo estás?': '<b>¿Cómo estás?</b> met <b>estar</b>: het gaat om hoe je je nú voelt. Spreek je iemand met usted aan, dan zeg je <i>¿Cómo está?</i>',
    'Encantado. ¿Eres estudiante?': 'Daniel is een man, dus <b>encantado</b>. Sofía zou <b>encantada</b> zeggen. <i>Mucho gusto</i> blijft voor iedereen hetzelfde.',
    'Sí, soy estudiante de arquitectura. ¿Y tú?': '<b>estudiante de arquitectura</b>: het vak komt na <b>de</b>, zonder lidwoord. Zo ook <i>profesor de inglés</i>, <i>clase de salsa</i>.',
    '¡Qué bien! Yo soy de aquí, de la Ciudad de México.': '<b>Ser de</b> = komen uit (herkomst). <b>Yo</b> staat er voor het contrast: jij komt uit Guadalajara, <i>ík</i> ben van hier. Normaal laat je yo weg.',

    /* ── A1 · 2 Una fiesta en Lima ── */
    'Mira, Mark, te presento a mis amigos. Él es Andrés.': '<b>Te presento a…</b> = mag ik je voorstellen aan… De <b>a</b> staat er omdat het om personen gaat. Bij het voorstellen zeg je <i>Él es Andrés</i> (hij is Andrés), waar wij "dit is Andrés" zeggen.',
    'Y ella es Valentina. Es argentina.': 'Nationaliteit met <b>ser</b> en met een kleine letter. Bij een vrouw krijgt het een -a: <i>argentino → argentina</i>, <i>holandés → holandesa</i>.',
    'Valentina es muy simpática y muy trabajadora.': '<b>Simpático/simpática</b> betekent aardig, vriendelijk. Let op de vrouwelijke vormen: <i>simpática</i>, <i>trabajadora</i> (trabajador krijgt er een -a bij).',
    '¡Gracias, Andrés! Tú también.': '<b>También</b> = ook, bij een bevestigende zin. Na een ontkenning gebruik je <b>tampoco</b>: <i>yo tampoco</i> = ik ook niet.',
    'Es una profesora excelente': 'Bij een beroep zeg je zonder lidwoord <i>es profesora</i>. Staat er een bijvoeglijk naamwoord bij, dan komt het lidwoord terug: <b>es una profesora excelente</b>.',

    /* ── A1 · 3 Las fotos de la familia ── */
    'No, ella es mi tía Carmen, la hermana de mi papá. Mi mamá es ella, con el perro.': 'Bezit met <b>de</b>: <i>la hermana de mi papá</i> = de zus van mijn vader. Het Spaans heeft geen \'s-vorm zoals "papa\'s zus".',
    '¿Tienes hermanos?': '<b>Hermanos</b> kan broers betekenen, maar ook broers én zussen samen. Bij een gemengde groep gebruikt het Spaans de mannelijke meervoudsvorm. Zo ook <i>hijos</i> = kinderen.',
    'Sí, tengo una hermana mayor y un hermano menor. Mi hermana tiene dos hijos.': '<b>Mayor / menor</b> = ouder / jonger, bij broers en zussen. Ze staan achter het woord: <i>una hermana mayor</i>.',
    '¡Sí! Mis sobrinos se llaman Tomás y Sara. ¿Y tú? ¿Tienes una familia grande?': '<b>Sobrinos</b> = neefjes en nichtjes (kinderen van je broer of zus). Kinderen van je oom of tante zijn <b>primos</b>. Het Nederlandse "neef" heeft dus twee Spaanse woorden.',
    'No, es pequeña. Somos mis papás, mi hermano y yo. Y nuestro gato, Pancho.': '<b>Somos…</b> = wij zijn… Zo som je je gezin op. Jezelf noem je als laatste: <i>mi hermano y yo</i>. <b>Nuestro</b> past zich aan: <i>nuestro gato</i>, <i>nuestra casa</i>.',
    'Querida Anouk:': 'Een brief begin je met <b>Querido/Querida</b> + naam en een <b>dubbele punt</b>, niet met een komma.',
    'Un abrazo, Mateo.': '<b>Un abrazo</b> (een knuffel) = groetjes. Informeel afsluiten kan ook met <i>un beso</i> of <i>saludos</i>.',

    /* ── A1 · 4 ¿Hay un banco por aquí? ── */
    'Disculpe, señora. ¿Hay un banco por aquí?': '<b>Disculpe</b> = pardon, in de usted-vorm. Tegen een vriend zeg je <i>disculpa</i>.',
    'Sí, hay uno en la plaza, al lado de la iglesia.': '<b>Uno</b> vervangt <i>un banco</i>: er is er één. <i>Un</i> wordt <b>uno</b> als er geen zelfstandig naamwoord achter staat. Voor een vrouwelijk woord: <i>hay una enfrente del banco</i>.',
    'No, está muy cerca. Está a dos cuadras. Siga derecho y luego a la izquierda.': '<b>Estar a</b> + afstand: <i>está a dos cuadras</i> = het is twee blokken verderop. <b>Derecho</b> = rechtdoor, maar <b>a la derecha</b> = naar rechts. Verwar ze niet! <i>Siga</i> is de usted-vorm van seguir.',
    'Con mucho gusto.': '<b>Con mucho gusto</b> = graag gedaan. Heel gewoon in 🇨🇴 Colombia en Midden-Amerika; elders zeg je vaker <i>de nada</i>.',

    /* ── A1 · 5 Hablando de rutinas ── */
    'Oye, Mark, ¿a qué hora llegas a la oficina?': '<b>Llegar a</b> = aankomen in/op. Je komt áán bij een plek, dus met <b>a</b>, niet met en.',
    'Yo nunca trabajo después de las seis. En la tarde estudio español.': '<b>Nunca</b> vóór het werkwoord: <i>nunca trabajo</i>. Zet je het erachter, dan heb je ook <b>no</b> nodig: <i>no trabajo nunca</i>.',
    'Si quieres, practicamos juntos a la hora de almuerzo.': '<b>Si</b> (zonder accent) = als. <b>Sí</b> (met accent) = ja. De tegenwoordige tijd <i>practicamos</i> klinkt hier als een voorstel: zullen we oefenen?',
    '¡Me encanta la idea!': '<b>Encantar</b> = heel erg leuk vinden, sterker dan gustar. Zeg dus niet <s>me encanta mucho</s>.',
    'Ceno a las nueve, como muchos chilenos.': '<b>Como</b> betekent hier "zoals". Pas op: <i>como</i> is ook "ik eet" (van comer). De zin laat zien welke het is.',

    /* ── A1 · 6 ¿Qué te gusta hacer? ── */
    'Mmm… no mucho. No bailo muy bien.': '<b>Muy</b> staat vóór een bijvoeglijk naamwoord of bijwoord: <i>muy bien</i>, <i>muy alto</i>. <b>Mucho</b> hoort bij een werkwoord of zelfstandig naamwoord: <i>no mucho</i>, <i>bailo mucho</i>, <i>mucho café</i>.',
    '¡Aquí en Medellín todo el mundo baila salsa! Yo te enseño.': '<b>Todo el mundo</b> = iedereen (letterlijk: de hele wereld). Het werkwoord staat in het enkelvoud: <i>todo el mundo baila</i>.',
    'Me gusta el fútbol, ¡soy fan del Nacional! Pero no me gusta correr.': 'Bij gustar zet je het lidwoord erbij: <b>me gusta el fútbol</b>, niet <s>me gusta fútbol</s>. Nacional is de voetbalclub Atlético Nacional uit Medellín.',
    'A mí tampoco. Prefiero caminar en la montaña.': '<b>A mí tampoco</b> = ik ook niet, als antwoord op een ontkenning (<i>no me gusta correr</i>). Na een bevestiging zeg je <i>a mí también</i>. Bij gustar-zinnen zeg je <b>a mí</b>, niet <s>yo</s>.',
    'Entonces el domingo vamos a caminar y después, ¡a bailar!': '<b>¡A bailar!</b> = en nu dansen! Kort voor <i>vamos a bailar</i>.',
    'Tampoco me gusta el desorden.': '<b>Tampoco</b> vooraan: dan heb je geen <i>no</i> nodig. <i>Tampoco me gusta</i> = <i>no me gusta tampoco</i>.',

    /* ── A1 · 7 En la taquería ── */
    'Buenas tardes, jóvenes. ¿Qué les sirvo?': '<b>Jóvenes</b> (jongelui) is in 🇲🇽 een beleefde aanspreekvorm, ook tegen volwassenen. <b>Les</b> hoort bij ustedes: <i>¿qué les sirvo?</i> = wat mag ik jullie brengen?',
    'La verde, sí. La roja es menos picante.': '<b>La verde</b> = de groene (saus). Het zelfstandig naamwoord valt weg, het lidwoord blijft. <i>Salsa</i> is vrouwelijk, dus <i>la</i>.',
    'Yo quiero una quesadilla con queso y un agua de horchata.': '<b>Agua</b> is vrouwelijk, maar je zegt <b>un agua / el agua</b>, omdat het met een beklemtoonde a begint. Daarna gewoon vrouwelijk: <i>el agua fresca</i>, <i>las aguas</i>.',
    '¿Y para tomar, joven?': '<b>Tomar</b> = drinken (en nemen). In Latijns-Amerika hoor je <i>¿para tomar?</i> veel vaker dan <i>beber</i>.',
    '¿Nos trae la cuenta, por favor?': 'Beleefd vragen met de tegenwoordige tijd: <b>¿Nos trae…?</b> = brengt u ons…? In 🇨🇴 hoor je ook <i>¿Me regala la cuenta?</i> (letterlijk: schenkt u me de rekening).',
    'Claro que sí. Son ciento ochenta pesos.': 'Prijzen met <b>son</b> (meervoud). <b>Cien</b> wordt <b>ciento</b> als er nog een getal volgt: <i>ciento ochenta</i>, maar <i>cien pesos</i>.',
    'Pregunte por el plato vegetariano.': '<b>Preguntar por</b> = vragen naar. <i>Pregunte</i> is de usted-vorm van de gebiedende wijs.',

    /* ── A1 · 8 En casa de la familia anfitriona ── */
    'Mark, ¿a qué hora te levantas mañana?': '<b>Mañana</b> zonder lidwoord = morgen. <b>La mañana</b> = de ochtend. Morgenochtend = <i>mañana en la mañana</i> of <i>mañana por la mañana</i>.',
    '¡Qué temprano! Mis hijos se levantan a las siete y se bañan primero.': '<b>Bañarse</b> = douchen of in bad gaan (Latijns-Amerika). In Spanje is douchen meestal <i>ducharse</i>. Het voornaamwoord past zich aan: <i>se levantan, se bañan</i>.',
    'No hay problema. Yo me baño en la noche, antes de acostarme.': 'Na een voorzetsel (<i>antes de</i>, <i>después de</i>) komt de infinitief, met het voornaamwoord eraan vast: <b>antes de acostarme</b>, niet <s>antes de me acostar</s>.',
    'Sí, pero rápido. Primero me visto, luego desayuno y después salgo para el trabajo.': 'Volgorde: <b>primero → luego → después</b>. <i>Salgo</i> is onregelmatig (yo salgo). <i>Salir para</i> = vertrekken naar.',
    '¿Y a qué hora vuelves?': '<b>Volver</b> = terugkomen. Stamwisseling o → ue: <i>vuelvo, vuelves, vuelve</i>, maar <i>volvemos</i>.',
    'Muy bien, ¡eres muy organizado!': '<b>Eres organizado</b> met ser: het is een eigenschap van Mark. Met estar zou het gaan over iets dat nú netjes geordend is.',
    'A medianoche me tomo un café con mis compañeros.': '<b>Tomarse un café</b> = (lekker) een kop koffie drinken. Met <i>me</i> klinkt het persoonlijker. <b>A medianoche</b> = om middernacht.',
    'Nunca me quedo dormido en el trabajo': '<b>Quedarse dormido</b> = (per ongeluk) in slaap vallen, en ook: je verslapen.',

    /* ── A1 · 9 En una tienda de ropa ── */
    'Buenas. ¿Le puedo ayudar en algo?': '<b>Buenas</b> = korte begroeting voor elk moment van de dag. <b>Le</b> = u. <i>¿Le puedo ayudar?</i> en <i>¿Puedo ayudarle?</i> zijn allebei goed: het voornaamwoord staat vóór het vervoegde werkwoord of vast aan de infinitief.',
    'Sí, gracias. ¿Cuánto cuesta esta chaqueta?': '<b>Cuesta</b> bij één ding, <b>cuestan</b> bij meer: <i>¿cuánto cuestan los zapatos?</i> <b>Esta</b> = deze (dicht bij mij).',
    '¿Esa negra? Cuesta doscientos mil pesos.': '<b>Esa</b> = die (dicht bij jou). <b>Doscientos</b> wordt <i>doscientas</i> bij vrouwelijke woorden: <i>doscientas personas</i>. <i>Mil</i> verandert nooit.',
    'Uf, es un poco cara. ¿Y aquella azul?': '<b>Aquella</b> = die daar (ver van ons allebei). Rijtje: <i>esta</i> (hier) · <i>esa</i> (bij jou) · <i>aquella</i> (daarginds). <i>Cara</i> past zich aan <i>la chaqueta</i> aan.',
    'Aquella está en descuento: ciento veinte mil.': '<b>Estar en descuento</b> = in de aanbieding zijn: tijdelijk, dus estar.',
    '¿Me la puedo probar?': '<b>Probarse</b> = passen (kleding). <b>La</b> = hem, want <i>la chaqueta</i> is vrouwelijk. Het Nederlandse "hem/het" wordt lo of la, afhankelijk van het Spaanse woord.',
    'Mediana, creo… Mmm, me queda un poco grande.': '<b>Quedar</b> = zitten, passen (kleding): <i>me queda grande</i> = hij is me te groot. Het werkt als gustar: <i>me queda</i>, <i>me quedan</i> (los zapatos).',
    '¡Perfecta! Me la llevo. ¿Puedo pagar con tarjeta?': '<b>Me la llevo</b> = ik neem hem (mee). <i>Llevarse</i> = meenemen, kopen. <i>Perfecta</i> past zich aan <i>la chaqueta</i> aan.',
    'Sí, con tarjeta o en efectivo, como quiera.': '<b>En efectivo</b> = contant. <b>Como quiera</b> = zoals u wilt (subjuntivo, omdat de keuze open is).',

    /* ── A1 · 10 Una llamada ── */
    'Hola, Diego. Estoy haciendo la maleta. ¡Mañana voy a viajar a Santiago de Chile!': '<b>Hacer la maleta</b> = de koffer inpakken (vaste uitdrukking, letterlijk: de koffer maken).',
    '¡Qué padre! ¿Y qué clima hace allá ahora?': '<b>Allá</b> = daar (ver weg), <i>aquí</i> = hier. Het weer vraag je met hacer: <i>¿qué clima hace?</i> of <i>¿qué tiempo hace?</i>',
    'En diciembre es verano en Chile, entonces hace calor y hace mucho sol.': 'Op het zuidelijk halfrond is december zomer! <b>Entonces</b> = dus, dan. In Latijns-Amerika hoor je het heel vaak.',
    'Aquí en Monterrey está haciendo frío y está lloviendo.': '<b>Llover</b> heeft maar één vorm per tijd, voor "het": <i>llueve</i>, <i>está lloviendo</i>, <i>llovió</i>.',
    'Me voy a quedar en casa. Voy a ver series y voy a cocinar pozole.': '<b>Me voy a quedar</b> = <b>voy a quedarme</b>: het voornaamwoord mag vóór <i>voy</i> of vast aan de infinitief. <i>Quedarse en casa</i> = thuisblijven.',
    '¡No olvides el bloqueador!': '<b>No olvides</b> = vergeet niet. De ontkennende gebiedende wijs gebruikt de subjuntivo: <i>olvides</i>, niet <s>olvidas</s>.',
    'Si van a salir, lleven el paraguas.': '<b>Lleven</b> = neem mee (gebiedende wijs voor ustedes). <i>Llevar</i> = meenemen of dragen, <i>traer</i> = (hierheen) brengen.',
    'por la tarde va a haber tormentas': '<b>Va a haber</b> = er gaan … komen (toekomst van <i>hay</i>). <i>Haber</i> blijft enkelvoud, ook bij meervoud: nooit <s>van a haber</s>.',

    /* ── A2 · 1 ¿Cómo te fue el fin de semana? ── */
    '¡Muy bien! El sábado visité el volcán Poás con unos amigos.': 'Indefinido (<i>visité</i>) voor een afgeronde gebeurtenis op een bepaald moment (<i>el sábado</i>). Bij een plek geen persoonlijke a: <i>visité el volcán</i>, maar <i>visité a mis abuelos</i>.',
    '¡Qué tuanis! ¿Y vieron el cráter?': '<b>Vieron</b> = jullie zagen (ustedes). In Latijns-Amerika gebruik je <i>ustedes</i> ook tegen vrienden, nooit <s>vosotros (visteis)</s>.',
    'Sí, llegamos muy temprano y lo vimos perfecto. Después llovió un poco.': '<b>Llegamos</b> kan "we komen aan" en "we kwamen aan" zijn: bij -ar- en -ir-werkwoorden is de wij-vorm in beide tijden gelijk. De context beslist. <b>Lo</b> = hem (el cráter).',
    'El domingo me quedé en casa. Limpié el apartamento, cociné y anoche miré una película. ¿Y tú?': '<b>Anoche</b> = gisteravond, één woord. <i>Mirar una película</i> of <i>ver una película</i> = een film kijken.',
    'Yo salí a bailar el viernes y volví a las tres de la mañana. El sábado dormí todo el día.': '<b>Salir a bailar</b> = gaan stappen, uit dansen. <b>Todo el día</b> = de hele dag, maar <b>todos los días</b> = elke dag. Verwar ze niet!',
    'Almorcé con mi familia y después estudié para un examen.': '<b>Almorcé</b> met een c: almorzar → yo almorcé (de z wordt c vóór e). <i>Estudiar para un examen</i> = leren voor een examen (doel → para).',
    'Por desgracia, no vimos nada por las nubes': '<b>Por desgracia</b> = helaas. <b>Por las nubes</b> = vanwege de wolken: <i>por</i> geeft de oorzaak.',

    /* ── A2 · 2 El viaje a Cusco ── */
    '¡Fue increíble! Fui con mi hermano en junio.': '<b>Fue / fui</b>: ser en ir hebben in de indefinido precies dezelfde vormen. <i>Fue increíble</i> = het wás ongelooflijk (ser), <i>fui con mi hermano</i> = ik gíng met mijn broer (ir). De zin laat zien welke het is.',
    'Fuimos en avión de Lima a Cusco. Pero el primer día estuve un poco mal por la altura.': '<b>De … a …</b> = van … naar … <b>Por la altura</b> = door de hoogte (oorzaak). <b>Primero</b> wordt <b>primer</b> vóór een mannelijk woord: <i>el primer día</i>.',
    'Sí, la señora del hostal nos hizo un mate. ¡Y funcionó!': '<b>Hizo</b> met een z: hacer → <i>hice, hiciste, hizo</i>. <i>Nos hizo un mate</i> = ze zette een mate voor ons.',
    '¿Y pudieron ver Machu Picchu?': '<b>Poder</b> in de indefinido betekent dat het echt lukte: <i>pudieron ver</i> = ze hebben het kunnen zien (en zagen het).',
    'Dijo que fue el mejor viaje de su vida. Y trajimos muchos regalos para la familia.': '<b>Dijo</b> en <b>trajimos</b> hebben een j-stam: decir → <i>dije, dijo</i>; traer → <i>traje, trajimos</i>. <i>El mejor … de su vida</i> = de beste … van zijn leven.',
    'pero valió la pena': '<b>Valer la pena</b> = de moeite waard zijn. <i>Valió la pena</i> = het was de moeite waard.',

    /* ── A2 · 3 ¿Cómo eras de niño? ── */
    'Carlos, ¿dónde vivías cuando eras niño?': 'Imperfecto (<i>vivías, eras</i>) voor hoe het vroeger wás: een situatie zonder duidelijk begin of einde. <i>Cuando eras niño</i> = toen je klein was.',
    'Vivía en un pueblo cerca de Antigua. Mis abuelos tenían una finca de café.': '<b>Mis abuelos</b> = mijn opa en oma. <b>Finca</b> = boerderij of landgoed; in Midden-Amerika vaak een koffieplantage.',
    'Todos los días jugaba fútbol con mis primos en la calle. No teníamos videojuegos, pero éramos muy felices.': '<b>Todos los días</b> + imperfecto = iets wat je vroeger steeds deed (gewoonte). <b>Éramos felices</b> met ser: gelukkig zijn als algemene toestand.',
    'Sí, la escuela era pequeña. Mi maestra se llamaba doña Marta y era muy estricta.': '<b>Doña</b> (en <i>don</i>) + voornaam is een respectvolle aanspreekvorm voor oudere mensen. <b>Maestra</b> = juf (basisschool).',
    '¡Para nada! Era muy travieso. ¿Y tú? ¿Cómo eras de niño?': '<b>¡Para nada!</b> = helemaal niet! <b>De niño</b> = als kind: <i>de</i> + levensfase (<i>de joven, de pequeño</i>).',
    '¿Extrañas esa época?': '<b>Extrañar</b> = missen (Latijns-Amerika). In Spanje zegt men <i>echar de menos</i>.',
    'toda la casa olía a canela': '<b>Oler a</b> = ruiken naar. <i>Olía</i> is de imperfecto van oler (met een h in de tegenwoordige tijd: <i>huele</i>).',
    'jugábamos a las escondidas en el patio': '<b>Jugar a las escondidas</b> = verstoppertje spelen (Latijns-Amerika). In Spanje: <i>al escondite</i>.',
    'no siempre me portaba bien': '<b>Portarse bien / mal</b> = zich goed / slecht gedragen.',

    /* ── A2 · 4 ¡Perdí mi celular! ── */
    '¿Qué te pasó? Te ves nervioso.': '<b>Verse</b> = er … uitzien: <i>te ves nervioso</i> = je ziet er zenuwachtig uit. <b>¿Qué te pasó?</b> = wat is er met je gebeurd?',
    'Eran las once de la noche y llovía mucho. Tomé un taxi para volver a casa.': 'Imperfecto voor de achtergrond (<i>eran las once, llovía</i>), indefinido voor wat er gebeurde (<i>tomé</i>). De tijd in het verleden: altijd <b>era/eran</b>: <i>eran las once</i>, <i>era la una</i>.',
    'Mientras el taxista manejaba, yo hablaba por teléfono con mi mamá. Cuando llegamos, pagué y salí rápido por la lluvia.': '<b>Mientras</b> + imperfecto: twee dingen die tegelijk bezig waren. Daarna indefinido voor de reeks acties: <i>llegamos, pagué, salí</i>. <i>Pagué</i> met een u: pagar → pagué.',
    'Y dejaste el celular en el taxi…': '<b>Dejar</b> = laten liggen, achterlaten (en ook: laten, toestaan).',
    '¡Exacto! Me di cuenta cinco minutos después. Estaba muy asustado.': '<b>Darse cuenta (de)</b> = merken, doorhebben. <b>Estaba asustado</b> met estar: een toestand op dat moment.',
    'Llamé a mi número desde el teléfono de un vecino y, por suerte, ¡el taxista contestó! Hoy en la mañana me lo trajo.': '<b>Me lo trajo</b> = hij bracht hem (lo = el celular) naar mij. Eerst aan wie (me), dan wat (lo). <b>Por suerte</b> = gelukkig.',
    '¡Qué buena gente!': '<b>Gente</b> is enkelvoud en vrouwelijk: <i>la gente es amable</i>. <b>Ser buena gente</b> = een goed mens zijn, ook voor één persoon.',

    /* ── A2 · 5 La lista de deseos ── */
    'Mark, ¿alguna vez has probado el ajiaco?': '<b>Alguna vez</b> = ooit. Met de pretérito perfecto (<i>has probado</i>) vraag je naar ervaringen tot nu toe. <i>Probar</i> = proeven, en ook proberen of passen.',
    'No, nunca lo he probado. ¿Qué es?': '<b>Lo</b> staat vóór de hele werkwoordsgroep: <i>lo he probado</i>, nooit <s>he lo probado</s>. <i>He</i> en het voltooid deelwoord blijven altijd bij elkaar.',
    'Es una sopa típica de Bogotá, con pollo, papa y mazorca. Te va a encantar.': '<b>Te va a encantar</b> = je gaat het heerlijk vinden. Ook in de toekomst werkt encantar als gustar: het gerecht is het onderwerp.',
    'He estado en Medellín y en Cartagena, pero todavía no he visitado el Eje Cafetero.': '<b>He estado en</b> = ik ben in … geweest. Met estar, want het gaat om waar je was.',
    '¡Tienes que ir! Yo he ido tres veces. ¿Alguna vez has montado a caballo?': '<b>Montar a caballo</b> = paardrijden. <b>Tres veces</b> = drie keer (vez → veces: de z wordt c).',
    'Sí, una vez, en Holanda… pero me caí.': '<b>Me caí</b> = ik viel (eraf). <i>Caerse</i> = vallen, met een y in de 3e persoon: <i>se cayó</i>.',
    'Bueno, lo pongo en mi lista de deseos.': '<b>Lista de deseos</b> = verlanglijst, bucketlist. <i>Pongo</i>: poner heeft een onregelmatige yo-vorm (net als <i>salgo, tengo, hago</i>).',
    'Nunca me he atrevido': '<b>Atreverse (a)</b> = durven. Het voornaamwoord staat vóór <i>he</i>: <i>me he atrevido</i>.',

    /* ── A2 · 6 En el consultorio ── */
    'Buenos días, pase y siéntese. ¿Qué le pasa?': '<b>Pase</b> en <b>siéntese</b> zijn gebiedende wijzen voor usted. Bij een bevestigende gebiedende wijs plak je het voornaamwoord eraan: <i>siéntese</i> (en dan komt er een accent bij). <b>¿Qué le pasa?</b> = wat is er met u aan de hand?',
    'Buenos días, doctora. Me siento muy mal desde ayer.': '<b>Sentirse</b> = zich voelen: <i>me siento mal</i>. Zonder se is het voelen of spijt hebben: <i>lo siento</i> = het spijt me. <b>Desde ayer</b> = sinds gisteren.',
    '¿Tiene fiebre?': '<b>Tener fiebre</b> = koorts hebben, zonder lidwoord. Zo ook <i>tener tos</i>, <i>tener gripa</i>.',
    'A ver… abra la boca, por favor. Mmm, tiene la garganta muy roja. Es una gripa fuerte.': '<b>A ver</b> = even kijken. Bij lichaamsdelen gebruik je <b>el/la</b>, niet mi/su: <i>tiene la garganta roja</i> = uw keel is rood.',
    'No, mejor no. Hay que quedarse en casa dos o tres días. ¡Que se mejore!': '<b>¡Que se mejore!</b> = beterschap! <i>Que</i> + subjuntivo drukt een wens uit. Tegen tú: <i>¡que te mejores!</i>',
    'le cuesta respirar': '<b>Costar</b> werkt hier als gustar: <i>le cuesta respirar</i> = ademhalen kost hem/haar moeite.',

    /* ── A2 · 7 La mudanza ── */
    'Güey, ¿me haces un favor? Mañana es mi mudanza.': '<b>Mañana es mi mudanza</b>: ser voor een gebeurtenis (wanneer of waar iets plaatsvindt). <b>¿Me haces un favor?</b> = wil je me een plezier doen?',
    '¿Me prestas tu carro? Tengo muchas cajas.': '<b>Prestar</b> = uitlenen. <i>¿Me prestas…?</i> = mag ik … van je lenen? (letterlijk: leen je mij …?).',
    'Sí, te lo presto. ¿A qué hora lo necesitas?': '<b>Te lo presto</b>: eerst aan wie (<i>te</i>), dan wat (<i>lo</i> = el carro).',
    'No, no la tengo, pero la puedo comprar en la mañana.': '<b>La</b> = het, want <i>la cinta</i> is vrouwelijk. Het Nederlandse "het" wordt lo of la, afhankelijk van het Spaanse woord.',
    '¡Sale! Oye, ¿te acuerdas del libro que te presté?': '<b>¡Sale!</b> = oké, afgesproken (🇲🇽). <b>Acordarse de</b> = zich herinneren: <i>¿te acuerdas del libro?</i> (de + el = del).',
    '¿El de Juan Rulfo? Sí, ya lo terminé. Te lo devuelvo mañana.': '<b>El de…</b> = dat van… Het zelfstandig naamwoord (<i>libro</i>) valt weg, het lidwoord blijft. <b>Devolver</b> = teruggeven.',
    'Perfecto. Y a mi hermana le debo dinero… ¿Se lo puedes dar tú? Ella vive cerca de tu casa.': '<b>A mi hermana le debo</b>: het meewerkend voorwerp staat er dubbel (<i>a mi hermana</i> + <i>le</i>). Dat is in het Spaans normaal.',
    'Sí, dámelo y se lo doy hoy en la noche.': '<b>Dámelo</b> = geef het mij: <i>da + me + lo</i> aan elkaar, met een accent zodat de klemtoon op <i>da</i> blijft.',
    'Te debo una.': '<b>Te debo una</b> = ik sta bij je in het krijt (letterlijk: ik ben je er een schuldig).',
    'No hay de qué.': '<b>No hay de qué</b> = graag gedaan, geen dank.',
    'Te las dejo con el portero.': '<b>Te las dejo</b> = ik laat ze (las llaves) voor je achter. Eerst aan wie (te), dan wat (las).',

    /* ── A2 · 8 ¿Bogotá o la Ciudad de México? ── */
    'Estoy pensando en vivir un año en Latinoamérica. ¿Qué ciudad es mejor: Bogotá o la Ciudad de México?': '<b>Pensar en</b> = denken aan, overwegen. Met <i>en</i>, niet met a.',
    '¡La Ciudad de México, obvio! Es más grande que Bogotá y es una de las ciudades con más museos del mundo.': '<b>Más … que</b> = …er dan: <i>más grande que</i>. "Ter wereld" = <b>del mundo</b> (met de).',
    'Sí, pero también tiene más tráfico. Bogotá es más tranquila.': '<b>Es tranquila</b> met ser: een eigenschap van de stad. <i>Estar tranquilo</i> gaat over hoe iemand zich nu voelt (rustig zijn).',
    'Bueno, hace fresco, pero el clima no es tan malo como dices. Y la gente es amabilísima.': '<b>Tan … como</b> = zo … als: <i>no es tan malo como dices</i> = niet zo slecht als je zegt.',
    'Bogotá es un poco más barata. Y está a 2.600 metros, más alta que la Ciudad de México.': '<b>Estar a</b> + afstand of hoogte: <i>está a 2.600 metros</i>. Duizendtallen schrijf je met een punt: 2.600.',
    'Eso sí. Pero los tacos de México son los mejores del mundo.': '<b>Mejor</b> = beter, <b>el mejor / los mejores</b> = de beste. Niet <s>más bueno</s>. <b>Eso sí</b> = dat wel, dat klopt.',
    'Ja, ja. Creo que las dos son igual de interesantes.': '<b>Igual de</b> + bijvoeglijk naamwoord = even …: <i>igual de interesantes</i>. <b>Las dos</b> = allebei (de steden).',

    /* ── A2 · 9 La entrevista de trabajo ── */
    'Buenos días, Mark. Gracias por venir. ¿Por qué quiere trabajar en nuestra empresa?': '<b>¿Por qué?</b> (twee woorden, accent) = waarom? Het antwoord <b>porque</b> (één woord, geen accent) = omdat.',
    '¿Dónde se ve dentro de cinco años?': '<b>Dentro de cinco años</b> = over vijf jaar. <i>Hace cinco años</i> = vijf jaar geleden. <b>Se ve</b> = ziet u zichzelf.',
    'Dentro de cinco años tendré más experiencia y seré jefe de un equipo. También hablaré español con fluidez.': 'Futuro: <i>tendré</i> (tener heeft de stam <b>tendr-</b>) en <i>seré</i>. <i>Jefe</i> zonder un: bij een functie na ser geen lidwoord.',
    'Muy bien. El puesto es de tiempo completo. Tendrá que viajar mucho por la región.': '<b>Por la región</b> = door de regio heen: beweging door een gebied → <i>por</i>. <b>Tiempo completo</b> = fulltime.',
    'Podré empezar el primero de marzo.': 'Datum: <b>el primero de marzo</b> (of <i>el uno de marzo</i>), daarna gewone getallen: <i>el dos de marzo</i>. Maanden schrijf je met een kleine letter.',
    'Excelente. Le mandaremos una respuesta por correo antes del viernes.': '<b>Antes del viernes</b> = vóór vrijdag (de + el = del).',
    '¡Lo esperamos!': '<b>Lo esperamos</b> = we verwachten u. <i>Lo</i> = u (een man), <i>la</i> voor een vrouw.',

    /* ── A2 · 10 El guacamole de la abuela ── */
    'Mira, mijo, te voy a enseñar a hacer guacamole de verdad.': '<b>Enseñar a</b> + infinitief = (iemand) leren hoe je iets doet. <b>De verdad</b> = echt.',
    'Primero, lava los tomates y el cilantro. Luego corta la cebolla muy finita.': '<b>Lava</b> en <b>corta</b> zijn gebiedende wijzen voor tú. Ze lijken op de él/ella-vorm: <i>él lava → ¡lava!</i> <b>Finita</b> = heel fijn (verkleinwoord van fina).',
    '¿Así está bien?': '<b>Así</b> = zo, op deze manier. <i>¿Está bien?</i> = is het goed?',
    'Sí, perfecto. Ahora abre los aguacates y saca la semilla. ¡Ojo con el cuchillo!': '<b>¡Ojo!</b> = pas op! (letterlijk: oog). <i>Ojo con…</i> = pas op met…',
    'Pon los aguacates en el molcajete y machácalos bien.': '<b>Pon</b> is de onregelmatige tú-gebiedende wijs van poner. <b>Machácalos</b> = prak ze fijn (<i>machaca + los</i>, met accent).',
    '¿Le pongo el chile ya?': '<b>Le pongo</b> = doe ik er … in? <i>Le</i> verwijst naar het gerecht. <b>Ya</b> = nu al, meteen.',
    'Sí, pero ponle poquito, que pica mucho. Después agrega la cebolla, el tomate, el cilantro, sal y unas gotas de limón.': '<b>Que pica mucho</b>: <i>que</i> = want (spreektaal). <i>Picar</i> = pittig zijn. <b>Poquito</b> = een klein beetje (verkleinwoord van poco).',
    'Pruébalo. Y sírvelo con totopos. ¡Provecho!': '<b>¡Provecho!</b> = eet smakelijk (kort voor <i>buen provecho</i>). <b>Pruébalo</b> = proef het: <i>prueba + lo</i>.',
    '¡Listo el pollo!': '<b>¡Listo el pollo!</b> = klaar is Kees! (letterlijk: de kip is klaar).',

    /* ── A2 · 11 La mochila perdida ── */
    'Disculpe, ¿alguien ha traído una mochila azul?': '<b>Alguien</b> = iemand, <b>nadie</b> = niemand. <i>Traído</i> is het voltooid deelwoord van traer, met een accent op de í.',
    'A ver… No, hoy nadie ha traído ninguna mochila azul.': '<b>Ninguna mochila</b> = geen enkele rugzak. <i>Ningún / ninguna</i> past zich aan het woord aan.',
    '¡No puede ser! Tengo todo ahí: el pasaporte, la billetera, los lentes…': '<b>¡No puede ser!</b> = dat kan niet waar zijn! Bij je eigen spullen gebruik je vaak <b>el/la</b> in plaats van mi: <i>el pasaporte</i> = mijn paspoort.',
    'Tranquilo, no pasa nada. ¿Dónde la dejó?': '<b>No pasa nada</b> = er is niets aan de hand. <b>La</b> = hem (<i>la mochila</i> is vrouwelijk).',
    'No, viajo solo. Y nunca pierdo nada, de verdad.': '<b>Solo</b> = alleen. Tegenwoordig schrijf je het altijd zonder accent, ook als het "slechts" betekent.',
    'Espere… Ahí viene el chofer con algo. ¿Es suya esta mochila?': '<b>¿Es suya?</b> = is hij van u? <i>Suyo/suya</i> past zich aan het ding aan: <i>la mochila → suya</i>.',
    '¡Sí, es mía! Muchísimas gracias. Mire, esto es para usted, para un café.': '<b>Es mía</b> = hij is van mij (<i>mía</i>, want mochila is vrouwelijk). <b>Para usted</b> = voor u (para + ontvanger).',
    'No, no, para mí no es nada. Es mi trabajo. Pero revise que no falte nada, ¿sí?': '<b>Revise que no falte nada</b> = kijk na of er niets ontbreekt. Na zo\'n verzoek komt de subjuntivo: <i>falte</i>.',
    'Todo está aquí. ¡Ni siquiera abrieron la mochila!': '<b>Ni siquiera</b> = niet eens. <i>Abrieron</i> = ze hebben … opengemaakt ("ze" in het algemeen).',
    'Si son suyos, escríbanme.': '<b>Escríbanme</b> = schrijf me (gebiedende wijs voor ustedes + me).',

    /* ── A2 · 12 Un paseo por la Zona Colonial ── */
    'Muy bien, aunque todavía no me acostumbro al calor.': '<b>Acostumbrarse a</b> = wennen aan: <i>me acostumbro al calor</i> (a + el = al).',
    'Normal. Como vienes de Holanda, para ti todo es muy caliente.': '<b>Como</b> aan het begin van de zin = aangezien, omdat. <b>Caliente</b> = heet/warm voor dingen (eten, water); voor het weer zeg je <i>hace calor</i>.',
    'Sí. Pero lo que más me gusta es la gente. Todo el mundo habla contigo.': '<b>Contigo</b> = met jou (<i>con + ti</i> wordt één woord). Zo ook <i>conmigo</i> = met mij.',
    'Es verdad. Aquí se vive en la calle. Mira, esa es la casa donde nació mi abuelo.': '<b>Donde</b> = waar, in een bijzin zonder accent. In een vraag mét accent: <i>¿dónde?</i>',
    '¡Qué bonita! ¿Y qué es ese lugar con tanta música?': '<b>Tanto/tanta</b> = zoveel: <i>tanta música</i> (música is vrouwelijk). Vóór een bijvoeglijk naamwoord wordt het <b>tan</b>: <i>tan bonita</i>.',
    'O sea, no es solo una tienda, sino un lugar para estar con los vecinos.': '<b>No … sino</b> = niet … maar (wel). Na een ontkenning, als je iets verbetert, gebruik je <i>sino</i> in plaats van pero. <b>O sea</b> = dus, met andere woorden.',
    '¡Guagua! Y la guagua que va al malecón pasa por aquí. ¡Vamos!': '<b>Pasar por</b> = langskomen (via). <b>El malecón</b> = de boulevard langs de zee.',
    'Además, se comen la s.': '<b>Se comen la s</b> = ze "eten de s op": Dominicanen spreken een s aan het eind van een lettergreep vaak niet uit (<i>lo do</i> = los dos).',
    '¿Si volvería a Holanda?': 'Hier herhaalt Pieter de vraag: "óf ik terug zou gaan?". <b>Si</b> = of, en dan mag er een condicional achter. In een als-zin (si = als) kan dat niet: daar komt de subjuntivo (<i>si pudiera, volvería</i>).',

    /* ── B1 · 1 Las doce uvas ── */
    '¡Ya casi son las doce! ¿Tienes tus uvas, Mark?': '<b>Ya casi</b> = al bijna. Klokkijken met ser in het meervoud: <i>son las doce</i>, behalve <i>es la una</i>.',
    'Con cada campanada te comes una uva y pides un deseo. Son doce deseos, uno para cada mes.': '<b>Comerse</b> = (helemaal) opeten; het <i>te</i> maakt het af. <b>Pedir un deseo</b> = een wens doen. <i>Cada</i> verandert nooit: <i>cada mes, cada campanada</i>.',
    'Que mi familia esté bien, que tenga un buen trabajo… y que por fin hable español con fluidez.': 'Elke wens begint met <b>que + subjuntivo</b> (<i>esté, tenga, hable</i>): kort voor "ik wens dat…". <b>Por fin</b> = eindelijk.',
    'Para eso te recomiendo que vengas a México más seguido, mijo.': '<b>Más seguido</b> = vaker (Latijns-Amerika); in Spanje <i>más a menudo</i>.',
    'Y yo quiero que este año dejemos de trabajar tanto y que viajemos más.': '<b>Quiero que</b> + een ander (wij) → subjuntivo. Gaat het alleen om jezelf, dan infinitief: <i>quiero viajar más</i>.',
    'Bueno, ¡salud! Que este año sea el mejor de todos.': '<b>¡Salud!</b> = proost (en "gezondheid" na een nies).',
    '¡Salud! Y que se cumplan todos nuestros deseos.': '<b>Cumplirse</b> = uitkomen (wensen, dromen).',
    'Le pedimos a nuestros lectores que nos escribieran sus deseos para el próximo año.': 'Na <b>pedir que</b> komt de subjuntivo. <i>Escribieran</i> is de imperfecto de subjuntivo, omdat het verzoek in het verleden ligt.',
    'Lo único que quiero es que mis nietos me visiten más.': '<b>Lo único que</b> = het enige wat. Na <i>quiero (es) que</i> komt de subjuntivo: <i>visiten</i>.',

    /* ── B1 · 2 ¿Viste el final? ── */
    'Parcero, ¿ya viste el último capítulo de la serie?': '<b>¿Ya viste?</b> = heb je al gezien? In Latijns-Amerika gebruik je hier meestal de indefinido; in Spanje eerder <i>¿has visto ya?</i>',
    'Sí, anoche. ¡Qué final tan raro! No creo que sea el final de verdad.': '<b>¡Qué</b> + zelfstandig naamwoord + <b>tan</b> + bijvoeglijk naamwoord! = wat een …!: <i>¡qué final tan raro!</i>',
    'Yo creo que sí. Los actores dijeron que no hay segunda temporada.': '<b>Creo que sí</b> = ik denk van wel. <i>Creo que no</i> = ik denk van niet.',
    '¿Muere? Yo no estoy segura de que muera. Es posible que esté vivo.': '<b>Estar vivo</b> = in leven zijn: met estar! <i>Ser vivo</i> betekent pienter, slim.',
    'Tienes razón. Es importante que la gente conozca la otra Medellín.': '<b>La otra Medellín</b>: hier vrouwelijk, omdat je aan <i>la ciudad</i> denkt.',
    'Pues yo vine por el clima, la gente… ¡y las arepas!': '<b>Venir por</b> = komen vanwege (por = reden). <i>Vine</i> is de onregelmatige indefinido van venir.',

    /* ── B1 · 3 Antes del vuelo ── */
    'Casi. Salgo mañana a las seis, así que tengo que estar en el aeropuerto a las cuatro.': '<b>Así que</b> = dus.',
    '¡Chévere! Gracias. ¿Y cuando llegue a Arequipa, quién me recoge?': '<b>Recoger</b> = ophalen (iemand of iets). In 🇲🇽 zegt men ook <i>pasar por alguien</i>.',
    '¿Le aviso cuando aterrice?': '<b>Avisar</b> = laten weten, waarschuwen. <b>Aterrice</b>: aterrizar, de z wordt c vóór e.',
    'Sí, escríbele al toque. Y no salgas sin que ella te encuentre, que el aeropuerto es pequeño pero hay mucha gente.': '<b>No salgas</b> = ga niet weg: de ontkennende gebiedende wijs gebruikt de subjuntivo. <b>Escríbele</b> = schrijf haar (escribe + le, met accent).',
    'Tranquila. Me quedo esperando hasta que llegue.': '<b>Quedarse</b> + gerundio = blijven …: <i>me quedo esperando</i> = ik blijf wachten.',

    /* ── B1 · 4 ¿Me voy o me quedo? ── */
    'Oye, Mark, necesito un consejo. Me ofrecieron una pega en Ámsterdam.': '<b>Me ofrecieron</b> = ik kreeg … aangeboden (letterlijk: ze boden me aan; "ze" in het algemeen).',
    'Que no sé si me atrevo. Tendría que dejar a mi familia, mi depa, todo… ¿Tú qué harías?': '<b>Que…</b> aan het begin = nou, dat… (een antwoord). <b>Tendría que</b> = ik zou moeten. <b>¿Tú qué harías?</b> = wat zou jij doen? (hacer → har-).',
    'Pero extrañaría mucho a mi mamá. Y en Holanda hace un frío terrible, ¿cachai?': '<b>Hace un frío terrible</b>: met <i>un</i> + bijvoeglijk naamwoord maak je het weer sterker. <b>Extrañar a</b> mi mamá: persoonlijke a.',
    'Bueno, frío hace, eso es verdad. Pero podrías volver a Chile en vacaciones.': '<b>Frío hace</b> = koud is het wél: door frío vooraan te zetten leg je er nadruk op. <b>Volver a</b> + plaats = teruggaan naar.',
    'Sí… ¿Y crees que me costaría mucho aprender holandés?': '<b>Costar</b> (moeite kosten) werkt als gustar: <i>me costaría</i> = het zou me moeite kosten.',
    'Al principio, sí. Yo en tu lugar tomaría clases antes de irme. Te ayudaría bastante.': '<b>Antes de irme</b>: dezelfde persoon → <i>antes de</i> + infinitief. Een andere persoon → <i>antes de que</i> + subjuntivo (<i>antes de que te vayas</i>).',
    '¡Por supuesto! Y te presentaría a mis amigos. No estarías sola.': '<b>Estar solo/sola</b> = alleen zijn: met estar.',
    'Ya, me convenciste. Mañana le escribo a la empresa.': '<b>Ya</b> = oké, goed (🇨🇱 heel gewoon). <b>Le escribo a la empresa</b>: het meewerkend voorwerp staat er dubbel (le + a la empresa).',
    'Después, ya vería.': '<b>Ya vería</b> = dat zou ik dan wel zien.',

    /* ── B1 · 5 La boda equivocada ── */
    'Uf… Resulta que llegué a la iglesia a las cinco y la ceremonia ya había empezado.': '<b>Resulta que</b> = nou, het zit zo; het blijkt dat. <b>Había empezado</b> (pluscuamperfecto) = was al begonnen: gebeurd vóór een ander moment in het verleden.',
    '¿Cómo? Pero la invitación decía a las cinco y media.': '<b>Decía</b>: wat er op de uitnodiging stond. Voor teksten gebruik je <i>decir</i>: <i>la invitación dice…</i>',
    '¡No manches! ¿Te habías equivocado de iglesia?': '<b>Equivocarse de</b> + zelfstandig naamwoord = de verkeerde … nemen: <i>equivocarse de iglesia</i> = naar de verkeerde kerk gaan. Zonder lidwoord!',
    'Sí. Cuando la novia entró, me di cuenta de que no era tu prima.': '<b>La novia</b> = de bruid (en ook: vriendin, verloofde). <i>El novio</i> = de bruidegom, vriend. <b>Darse cuenta de que</b> = merken dat.',
    'Salí despacito, pero una señora ya me había visto. Me preguntó si era amigo del novio.': '<b>Preguntar si</b> = vragen of. <i>Era amigo</i>: geen un bij een rol of relatie na ser.',
    'Ya se habían casado y todos estaban comiendo pastel. ¡Me lo había perdido todo!': '<b>Casarse</b> = trouwen. <b>Perderse algo</b> = iets missen (een feest, een film). <i>Lo</i> verwijst vooruit naar <i>todo</i>.',
    'Bueno, por lo menos llegaste al baile. Y ahora tienes una anécdota buenísima.': '<b>Por lo menos</b> = in elk geval, minstens.',
    'el señor nunca había oído hablar de Puebla': '<b>Oír hablar de</b> = horen van, gehoord hebben over.',

    /* ── B1 · 6 Caminata en Monteverde ── */
    'Primero: no se salgan del sendero. Y por favor, no toquen las plantas ni los animales.': 'Ontkennende gebiedende wijs voor ustedes = subjuntivo: <i>no se salgan, no toquen</i>. <i>Toquen</i> met qu: tocar → toque. <b>Ni</b> = en ook niet.',
    '¿Y si vemos un mono? ¿Le puedo dar un poquito de fruta?': '<b>Si</b> + tegenwoordige tijd = als (een echte mogelijkheid).',
    '¡No, no le des nada! Está prohibido alimentar a los animales. Se enferman.': '<b>No le des</b> = geef hem niets: de ontkennende gebiedende wijs van dar is <i>des</i>. <b>Está prohibido</b> + infinitief = het is verboden om… <b>Enfermarse</b> = ziek worden.',
    'Disculpe, ¿hay serpientes aquí? Me dan mucho miedo.': '<b>Me dan miedo</b> = ik ben er bang voor (letterlijk: ze geven mij angst). Werkt als gustar: <i>me da miedo</i> (één ding), <i>me dan miedo</i> (meer).',
    'Algunas, pero no se preocupe. Si ve una, no se acerque y no grite. Solo avíseme.': 'Gebiedende wijs voor usted: bevestigend plak je het voornaamwoord eraan (<i>avíseme</i>), ontkennend staat het los ervoor (<i>no se acerque</i>).',
    '¡Qué tuanis! Pero no hagan ruido, que se asusta. Sáquenle fotos, pero sin flash.': '<b>Hacer ruido</b> = lawaai maken. <b>Sacar fotos</b> = foto\'s maken (Latijns-Amerika); ook <i>tomar fotos</i>.',
    'Tranquila. Agárrese bien y no mire para abajo. Diay, ¡ya casi llegamos!': '<b>Para abajo</b> = naar beneden. <b>Ya casi llegamos</b> = we zijn er bijna: tegenwoordige tijd voor iets wat zo gebeurt.',
    'llévensela con ustedes': '<b>Llévensela</b> = neem hem (la basura) mee: <i>lleven + se + la</i>.',

    /* ── B1 · 7 El chisme de la oficina ── */
    'Mark, ¿supiste lo de Rodrigo? Dizque renunció ayer.': '<b>¿Supiste?</b> (saber in de indefinido) = heb je het gehoord? <b>Lo de Rodrigo</b> = dat gedoe met Rodrigo.',
    '¿En serio? Pero el lunes me dijo que estaba feliz en la chamba.': 'Indirecte rede: <i>«estoy feliz»</i> wordt <b>me dijo que estaba feliz</b> (tegenwoordige tijd → imperfecto).',
    'Pues a mí me contó que le habían ofrecido un puesto en Antigua.': 'Indirecte rede: <i>«me ofrecieron»</i> wordt <b>le habían ofrecido</b> (pluscuamperfecto).',
    'Que iba a trabajar en un hotel y que ganaría el doble.': 'Indirecte rede: <i>«voy a trabajar»</i> wordt <b>iba a trabajar</b>, <i>«ganaré»</i> wordt <b>ganaría</b> (futuro → condicional).',
    'Al parecer, le preguntó si podía quedarse hasta fin de mes.': '<b>Al parecer</b> = blijkbaar. <b>Preguntar si</b> = vragen of.',
    'Bueno, en realidad Rodrigo me acaba de mandar un audio.': '<b>Un audio</b> = een spraakbericht (WhatsApp).',
    'Dice que no renunció, que solo pidió vacaciones. Y que por favor no le creamos a nadie.': 'Met <b>dice que</b> (nu) blijven de tijden gelijk. Een verzoek doorgeven: <i>que</i> + subjuntivo (<i>no le creamos</i>).',
    '¡Ay, qué pena! Entonces el chisme lo inventó la de contabilidad.': '<b>¡Qué pena!</b> betekent in 🇬🇹🇨🇴🇲🇽 vaak "wat gênant", elders "wat jammer". <b>La de contabilidad</b> = die (vrouw) van de boekhouding.',
    'Me pidió que le dijera que la llame esta tarde.': '<b>Me pidió que le dijera</b>: <i>pedir</i> in het verleden → imperfecto de subjuntivo (<i>dijera</i>).',

    /* ── B1 · 8 Voluntarios en Galápagos ── */
    '¿Hay mucha basura? Pensé que las islas estaban protegidas.': '<b>Estar protegido</b> = beschermd zijn: een resultaat, dus estar + voltooid deelwoord.',
    'Lo están, pero el mar trae plástico de todo el mundo. Si no lo recogemos, las tortugas se lo comen.': '<b>Lo están</b> = dat zijn ze: <i>lo</i> vervangt het bijvoeglijk naamwoord (protegidas). Zo ook: <i>¿Estás cansado? — Sí, lo estoy.</i>',
    'Algunas especies sí. Si seguimos trabajando, se van a recuperar. Pero no lo vamos a lograr a menos que los turistas también ayuden.': '<b>Seguir</b> + gerundio = blijven …: <i>seguimos trabajando</i>.',
    '¿Qué deberían hacer los turistas?': '<b>Deberían</b> (condicional van deber) = zouden moeten: een advies.',
    '¡Bacán! Toma. Y si ves un lobo marino, no te acerques. Muerden.': '<b>Toma</b> = alsjeblieft, als je iemand iets geeft. <b>Lobo marino</b> = zeeleeuw (letterlijk: zeewolf).',

    /* ── B1 · 9 La primera cita ── */
    'Es que ayer salí con Mariana, la chica del curso de salsa.': '<b>Es que…</b> = nou, het zit zo… (je geeft een verklaring). <b>Salir con alguien</b> = met iemand uitgaan, daten.',
    '¡No manches! ¿Y qué tal? Cuéntamelo todo.': '<b>Cuéntamelo</b> = vertel het me: <i>cuenta + me + lo</i>, met een accent.',
    'Ella es muy lista. Empezó a hablar de música y me relajé. Luego fuimos a cenar birria.': '<b>Ser listo/lista</b> = slim zijn, maar <b>estar listo/lista</b> = klaar zijn! Ser of estar verandert hier de betekenis.',
    '¿Y estaba rica la birria?': '<b>Estar rico</b> = lekker zijn (eten dat je proeft). <b>Ser rico</b> = rijk zijn!',
    '¡Qué oso! ¿Y no se rió de ti?': '<b>Reírse de</b> alguien = iemand uitlachen. <i>Reírse con</i> alguien = samen lachen.',
    '¡Me late! Ya te estás volviendo un tapatío de verdad.': '<b>Tapatío</b> = iemand uit Guadalajara (🇲🇽 Jalisco).',

    /* ── B1 · 10 ¿Más turistas en Cusco? ── */
    'Gracias. En primer lugar, las ruinas se están deteriorando. Por lo tanto, creo que es necesario que limitemos las entradas.': 'Woorden om te argumenteren: <b>en primer lugar</b> = ten eerste, <b>por lo tanto</b> = daarom.',
    'Tiene parte de razón. Sin embargo, si destruimos Machu Picchu, no habrá turismo en el futuro.': '<b>Sin embargo</b> = echter, toch. <b>Habrá</b> = er zal … zijn (toekomst van hay).',
    'Pero no todos los turistas piensan así. Además, ya subieron mucho los precios en la ciudad.': '<b>Subir</b> = stijgen (prijzen). Het onderwerp (<i>los precios</i>) staat hier achter het werkwoord; dat is in het Spaans heel gewoon.',
    'Exacto. Por un lado el turismo trae dinero; por otro lado, muchos cusqueños ya no pueden pagar el alquiler en el centro.': '<b>Por un lado … por otro lado</b> = aan de ene kant … aan de andere kant.',
    'Propongo que los turistas se queden más días y visiten otros lugares, no solo Machu Picchu.': '<b>Propongo que</b> + subjuntivo (<i>se queden, visiten</i>). <i>Propongo</i> heeft een g, net als <i>pongo</i>.',
    'En eso estoy de acuerdo. En resumen: menos turistas al mismo tiempo, pero más tiempo en la región.': '<b>En resumen</b> = samengevat. <b>Al mismo tiempo</b> = tegelijk.'
  };

  /* Algemene valkuilen en vaste uitdrukkingen: [patroon, titel, uitleg]. */
  const UITDRUKKINGEN = [
    /* — vaste uitdrukkingen zonder lidwoord — */
    ['en clase|a clase|en casa|a casa|desde casa|de casa', 'en clase · en casa', '<b>La clase</b> en <b>la casa</b> zijn vrouwelijk. Toch zeg je <b>en clase</b> (in de les) en <b>en casa</b> (thuis) zonder lidwoord: dat zijn vaste uitdrukkingen. Zo ook <i>a casa</i> (naar huis) en <i>desde casa</i> (vanuit huis). Gaat het om een bepaald lokaal of huis, dan komt het lidwoord terug: <i>en la clase de Ana</i>, <i>en la casa de mi abuela</i>. En <i>en casa de…</i> = bij … thuis.'],
    ['nos vemos', 'nos vemos', '<b>Nos vemos</b> = tot ziens, we zien elkaar (letterlijk: wij zien ons). Vaak met een tijd of plek erbij: <i>nos vemos mañana</i>, <i>nos vemos en clase</i>.'],
    ['^bueno', 'bueno…', '<b>Bueno</b> aan het begin van een zin = oké, nou. Zo rond je iets af of ga je verder. In 🇲🇽 neem je er ook de telefoon mee op: <i>¿Bueno?</i>'],
    ['oye', 'oye', '<b>Oye</b> = hé, zeg (letterlijk: hoor, van <i>oír</i>). Tegen usted: <i>oiga</i>.'],

    /* — tener, hacer, gustar — */
    ['(?:tengo|tienes|tiene|tenemos|tienen|tenía|tenías|tenían)(?: (?:\\p{L}+|\\d+)){1,4} años|cuántos años', 'tener … años', 'Leeftijd met <b>tener</b> (hebben), niet met ser: <i>tiene sesenta y dos años</i> = hij is 62. Vragen: <i>¿Cuántos años tienes?</i>'],
    ['(?:tengo|tienes|tiene|tenemos|tienen|tenía|teníamos|tenían|tuve)(?: (?:mucho|mucha|tanto|tanta))? (?:hambre|sed|frío|calor|miedo|sueño|razón|prisa|suerte)', 'tener hambre, miedo, razón…', 'Waar wij "zijn" zeggen, gebruikt het Spaans vaak <b>tener</b>: <i>tener hambre</i> (honger hebben), <i>tener miedo</i> (bang zijn), <i>tener razón</i> (gelijk hebben), <i>tener suerte</i> (geluk hebben). Versterken met <b>mucho/mucha</b>, niet met muy: <i>tengo mucha hambre</i> (hambre is vrouwelijk), <i>tengo mucho miedo</i>.'],
    ['(?:tengo|tienes|tiene|tenemos|tienen|tuve|tuvimos|tuvo|tuvieron|tendría|tendrá|tenía) que|hay que', 'tener que · hay que', '<b>Tener que</b> + infinitief = moeten (een bepaald persoon): <i>tienes que ir</i>. <b>Hay que</b> + infinitief = men moet, je moet (algemeen, voor iedereen): <i>hay que quedarse en casa</i>. <b>Deber</b> = moeten of horen te (plicht, advies).'],
    ['(?:hace|hacía|hizo|hará|hacer|haciendo)(?: (?:mucho|mucha|un|tanto|más|muy buen|buen|mal))? (?:calor|frío|sol|viento|fresco|tiempo)', 'hace calor · hace frío', 'Het weer met <b>hacer</b>: <i>hace calor</i> (het is warm), <i>hace frío</i>, <i>hace sol</i>, <i>hace viento</i>. Versterken met <b>mucho</b>, niet met muy: <i>hace mucho calor</i>. <i>Caliente</i> gebruik je voor dingen (eten, water), niet voor het weer.'],
    ['hace (?:un|una|dos|tres|cuatro|cinco|seis|diez|\\d+|muchos|muchas|poco|mucho) (?:año|años|mes|meses|semana|semanas|día|días|hora|horas|minutos|tiempo)|desde hace', 'hace + tijd', '<b>Hace</b> + tijd = … geleden: <i>hace un año</i> = een jaar geleden. <b>Desde hace</b> + tijd = al … (en het duurt nog): <i>vive aquí desde hace cinco años</i> = hij woont hier al vijf jaar. Let op: in het Spaans in de tegenwoordige tijd.'],
    ['(?:me|te|le|nos|les) (?:gusta|gustan|gustaba|gustaban|gustó|gustaría|encanta|encantan|encantaba|encantó|interesa|interesan|interesaba)', 'gustar', '<b>Gustar</b> werkt omgekeerd: letterlijk "het bevalt mij". Wat je leuk vindt, is het onderwerp: <i>me gusta el fútbol</i> (één ding), <i>me gustan los deportes</i> (meer dingen), <i>me gusta bailar</i> (een werkwoord: altijd gusta). Wie het leuk vindt: me, te, le, nos, les. <i>A mí, a ti, a Ana</i> erbij geeft nadruk of maakt duidelijk wie: <i>a Ana le gusta</i>. Encantar en interesar werken net zo.'],
    ['(?:me|te|le|nos|les) (?:duele|duelen|dolió|dolía|dolieron)', 'doler', '<b>Doler</b> (pijn doen) werkt als gustar: <i>me duele la cabeza</i>, <i>me duelen los pies</i>. Bij lichaamsdelen gebruik je <b>el/la</b>, niet mi: <i>me duele la garganta</i>, niet <s>mi garganta</s>.'],

    /* — hay / estar / plaats — */
    ['hay(?! que| de qué)', 'hay', '<b>Hay</b> = er is / er zijn, één vorm voor enkelvoud en meervoud. Gebruik hay bij iets nieuws of onbepaalds: <i>un, una, unos</i>, getallen, <i>mucho</i>. Voor een bekend, bepaald ding gebruik je <b>estar</b>: <i>hay un banco en la plaza</i>, maar <i>el banco está en la plaza</i>.'],
    ['(?:al lado|enfrente|detrás|delante|dentro|encima|debajo|cerca|lejos) del?|(?:está|están|estás|estamos|estoy) (?:muy )?(?:cerca|lejos)', 'al lado de · cerca de', 'Plaatswoorden krijgen <b>de</b> erachter: <i>al lado de, cerca de, enfrente de, detrás de</i>. Volgt er <i>el</i>, dan wordt <b>de + el = del</b>: <i>al lado del banco</i>. Met la blijft het los: <i>al lado de la iglesia</i>. Waar iets ís, zeg je met <b>estar</b>: <i>la plaza está cerca</i>.'],
    ['por aquí|por allá', 'por aquí', '<b>Por aquí</b> = hier in de buurt, hierlangs. Zo ook <i>por allá</i> = daar ergens.'],
    ['en (?:avión|bus|carro|tren|metro|barco)|a pie', 'en bus · a pie', 'Vervoer met <b>en</b>: <i>en bus, en avión, en carro</i>. Te voet = <b>a pie</b>.'],

    /* — tijd — */
    ['a las (?:una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)|a la una', 'a las ocho', 'Hoe laat: <b>a las</b> + getal (<i>las horas</i>), maar <b>a la una</b> (één uur). <b>Y media</b> = half, ná het uur: <i>las ocho y media</i> = half negen! <i>Y cuarto</i> = kwart over, <i>menos cuarto</i> = kwart voor.'],
    ['(?:por|en) la (?:mañana|tarde|noche)|de la (?:mañana|tarde|noche)', 'en la mañana · por la tarde', 'In Latijns-Amerika zeg je vaak <b>en la mañana / en la tarde / en la noche</b>; in Spanje <i>por la mañana</i>. Beide zijn goed. Na een kloktijd gebruik je <b>de</b>: <i>a las siete de la mañana</i>. Let op: <i>mañana</i> zonder la = morgen.'],
    ['(?:los|el) (?:lunes|martes|miércoles|jueves|viernes|sábado|sábados|domingo|domingos)', 'el sábado · los sábados', 'Bij dagen geen voorzetsel: <b>el sábado</b> = (op) zaterdag, deze keer. <b>Los sábados</b> = op zaterdag, elke week. Dagen schrijf je met een kleine letter.'],

    /* — ser, estar en lidwoorden — */
    ['(?:soy|eres|es|somos|son|era|seré|sería) (?:estudiante|estudiantes|profesor|profesora|ingeniero|ingeniera|periodista|médico|médica|doctor|doctora|enfermero|enfermera|taxista|diseñador|diseñadora|dentista|cocinero|cocineros|cocinera|abogado|abogada|jefe|jefa|guía|mesero|mesera|recepcionista|voluntario|voluntaria|turista|cantante|propietaria|propietario)(?!\\p{L})', 'soy ingeniero', 'Bij een beroep of functie na <b>ser</b> gebruik je <b>geen un/una</b>: <i>soy ingeniero</i>, <i>es periodista</i>. Zet je er een bijvoeglijk naamwoord bij, dan komt het lidwoord terug: <i>es una profesora excelente</i>.'],
    ['(?:mis|tus|sus) papás', 'mis papás', '<b>Mis papás</b> = mijn ouders (papá + mamá). Heel gewoon in Latijns-Amerika; iets formeler is <i>mis padres</i>.'],
    ['de acuerdo', 'estar de acuerdo', '<b>Estar de acuerdo (con)</b> = het eens zijn (met). Altijd met estar: <i>estoy de acuerdo</i>, <i>no estoy de acuerdo</i>. Alleen <i>¡De acuerdo!</i> = oké, afgesproken.'],

    /* — voorzetsels: a, por, para — */
    ['(?:visit\\p{L}*|conoc\\p{L}*|busc\\p{L}*|extrañ\\p{L}*|cuid\\p{L}*|ayud\\p{L}*) a (?:mi|mis|tu|tus|su|sus|nuestro|nuestra|nuestros|nuestras|la|el|los|las|alguien|nadie|esa|ese|muchas|muchos)(?!\\p{L})', 'de persoonlijke a', 'De "persoonlijke a": is een bekend persoon (of huisdier) het lijdend voorwerp, dan zet je er <b>a</b> voor: <i>visito a mis abuelos</i>, <i>extraño a mi mamá</i>, <i>no conocía a nadie</i>. Bij dingen en plaatsen niet: <i>visité el volcán</i>. Het Nederlands heeft hier niets voor.'],
    ['para (?!que)\\p{L}+(?:ar|er|ir|ír)(?:me|te|se|lo|la|los|las|le|les)?', 'para + infinitief', '<b>Para</b> + infinitief = om te …: <i>para practicar</i> = om te oefenen. Gebruik hier nooit por.'],
    ['por (?:teléfono|video|correo|videollamada|whatsapp)', 'por teléfono', '<b>Por</b> voor het middel: <i>por teléfono</i> (telefonisch), <i>por correo</i> (per e-mail), <i>por video</i> (via video).'],
    ['gracias por', 'gracias por', '<b>Gracias por</b> + reden: <i>gracias por venir</i>, <i>gracias por todo</i>. Nooit <s>gracias para</s>.'],
    ['por eso|por lo tanto', 'por eso', '<b>Por eso</b> en <b>por lo tanto</b> = daarom. <i>Por lo tanto</i> is wat formeler.'],
    ['para (?:mí|ti)|conmigo|contigo', 'para mí · contigo', 'Na een voorzetsel gebruik je <b>mí</b> en <b>ti</b> (niet yo/tú): <i>para mí, para ti, de mí</i>. <i>Mí</i> krijgt een accent (anders is het <i>mi</i> = mijn), <i>ti</i> nooit. Uitzondering: <b>con</b> → <i>conmigo, contigo</i>.'],
    ['jug\\p{L}* (?:al )?(?:fútbol|béisbol|tenis|dominó)', 'jugar fútbol', 'Een sport spelen: <b>jugar fútbol</b> (Latijns-Amerika) of <i>jugar al fútbol</i> (Spanje en ook veel in Latijns-Amerika). Allebei goed. Een instrument bespelen is <i>tocar</i>: <i>tocar la guitarra</i>.'],

    /* — werkwoordsvormen — */
    ['(?:voy|vas|va|vamos|van|iba|ibas|íbamos|iban) a \\p{L}+(?:ar|er|ir|ír)(?:me|te|se|nos|lo|la|los|las|le|les)?', 'ir a + infinitief', '<b>Ir a</b> + infinitief = gaan … (nabije toekomst): <i>voy a viajar</i> = ik ga reizen. Vergeet de <b>a</b> niet! <i>Vamos a</i> + infinitief kan ook "laten we…" betekenen. In het verleden: <i>iba a trabajar</i> = hij zou gaan werken.'],
    ['(?:estoy|estás|está|estamos|están|estaba|estabas|estaban|estábamos|estén)(?: \\p{L}+)? \\p{L}+(?:ando|iendo|yendo)(?:me|te|se|lo|la)?', 'estar + gerundio', '<b>Estar</b> + gerundio (-ando / -iendo) = bezig zijn met: <i>estoy haciendo la maleta</i> = ik ben mijn koffer aan het inpakken. Voor wat er nú aan de gang is. Onregelmatig: <i>leer → leyendo</i>, <i>dormir → durmiendo</i>, <i>decir → diciendo</i>.'],
    ['se (?:lo|la|los|las)(?! comen)(?!\\p{L})', 'se lo', 'Twee voornaamwoorden: eerst aan wie, dan wat: <i>te lo presto</i>, <i>me lo trajo</i>. <b>Le</b> en <b>les</b> worden <b>se</b> vóór lo/la/los/las: <i>se lo doy</i> (ik geef het hem/haar), nooit <s>le lo doy</s>.'],
    ['(?:cómo|qué tal) (?:te|le|les|nos) (?:fue|va)|la pas(?:amos|aste|é|aron|ó)', '¿Cómo te fue?', '<b>¿Cómo te fue?</b> = hoe ging het (je)? Van <i>ir</i>: <i>ir bien / mal</i>. Nu: <i>¿cómo te va?</i> <b>Pasarla bien</b> = het leuk hebben (Latijns-Amerika); in Spanje <i>pasarlo bien</i>.'],
    ['se (?:me|te|le|nos|les) (?:cayó|cayeron|olvidó|olvidaron|rompió|perdió|perdieron|acabó)', 'se me cayó', '<b>Se me cayó</b> = het viel (per ongeluk). Met <i>se + me/te/le</i> klinkt het als iets wat je overkomt, niet wat je expres doet: <i>se me olvidó</i> = ik ben het vergeten.'],
    ['(?:me|te|se|nos) (?:puse|puso|pusieron|pone|ponen|ponía|pongo|quedé|quedó)(?: (?:muy|tan))? (?:nervioso|nerviosa|rojo|roja|contento|contenta|triste|callado|callada|enfermo|enferma)|volviendo un|vuelto diferente|vuelvo arrogante|nos hicimos|convirtió en|llegó a ser', 'worden: ponerse, quedarse, volverse', 'Het Spaans heeft niet één woord voor "worden": <b>ponerse</b> voor een snelle, tijdelijke verandering (<i>me puse rojo</i>), <b>quedarse</b> voor de toestand ná iets (<i>me quedé callado</i>), <b>volverse</b> voor een blijvende verandering (<i>volverse arrogante</i>), <b>hacerse</b> voor iets waar je naartoe groeit (<i>nos hicimos amigos</i>), <b>convertirse en</b> = veranderen in, <b>llegar a ser</b> = uiteindelijk worden.'],
    ['acab\\p{L}* de \\p{L}+(?:ar|er|ir)|vuelv\\p{L}* a \\p{L}+(?:ar|er|ir)|volv\\p{L}* a \\p{L}+(?:ar|er|ir)|dej\\p{L}* de \\p{L}+(?:ar|er|ir)', 'acabar de · volver a · dejar de', 'Handige combinaties met een infinitief: <b>acabar de</b> = net …: <i>me acaba de mandar</i> = hij heeft me net gestuurd. <b>Volver a</b> = opnieuw …: <i>volvemos a salir</i> = we gaan weer uit. <b>Dejar de</b> = stoppen met: <i>dejar de trabajar</i>.'],
    ['\\p{L}+ísim(?:o|a|os|as)', '-ísimo', '<b>-ísimo / -ísima</b> = heel erg, super: <i>muchísimo, riquísima, amabilísima</i>. Het accent staat altijd op de í.'],
    ['no (?:\\p{L}+ ){1,4}(?:nada|nadie|ningún|ninguna|ninguno|nunca)', 'dubbele ontkenning', 'Dubbele ontkenning is in het Spaans juist goed: <i>no vimos nada</i> (we zagen niets), <i>no hablé con nadie</i>. Staat <i>nada, nadie, nunca</i> vóór het werkwoord, dan valt no weg: <i>nunca pierdo nada</i>, <i>nadie ha traído…</i>'],
    ['todavía no|ya no', 'todavía no · ya no', '<b>Todavía no</b> = nog niet. <b>Ya no</b> = niet meer. <i>Ya</i> = al, nu; <i>todavía</i> = nog (steeds).'],
    ['lo que', 'lo que', '<b>Lo que</b> = wat (het ding dat): <i>lo que más me gusta</i> = wat ik het leukst vind. In een vraag gebruik je <i>qué</i>: <i>¿qué te gusta?</i>'],
    ['(?:aquí )?se (?:vive|come|compra|juega|baila|puede|dice|habla|necesita|busca)', 'se impersonal', '<b>Se</b> + 3e persoon = men, je (algemeen): <i>aquí se vive bien</i> = hier leef je goed, <i>se compra de todo</i> = je koopt er van alles.'],
    ['aunque', 'aunque', '<b>Aunque</b> + indicativo = hoewel (het is zo): <i>aunque entiendo el problema</i>. <b>Aunque</b> + subjuntivo = ook al (misschien, of het maakt niet uit): <i>aunque me cueste más</i>.'],

    /* — subjuntivo — */
    ['ojalá', 'ojalá', '<b>Ojalá (que)</b> + subjuntivo = hopelijk, ik hoop dat: <i>ojalá que vengan</i>. Het woord komt uit het Arabisch ("als God het wil"). <i>Que</i> mag je weglaten.'],
    ['(?:quiero|quieres|quiere|queremos|quieren|espero|recomiendo|pido|pide|deseo|propongo|es importante|es necesario|es posible|es mejor|es normal|es una lástima|me alegra|me sorprende|me molesta es|me preocupa es|dudo|no creo|segura de|seguro de) que', 'que + subjuntivo', 'Na een wens, advies, gevoel, twijfel of oordeel + <b>que</b> komt de <b>subjuntivo</b> als het om iemand anders gaat: <i>quiero que vengas</i>, <i>es importante que la gente conozca…</i>, <i>dudo que esté vivo</i>. Gaat het over jezelf, dan vaak de infinitief: <i>quiero venir</i>.'],
    ['(?<!no )(?:creo|pienso|crees) que', 'creo que', '<b>Creo que / pienso que</b> (ik denk dat) + gewone indicativo: <i>creo que es verdad</i>. Met een ontkenning wordt het twijfel, en dan komt de subjuntivo: <i>no creo que sea verdad</i>.'],
    ['cuando|en cuanto|hasta que|antes de que|después de que', 'cuando + subjuntivo', 'Gaat het over de toekomst, dan krijgen <b>cuando</b>, <b>en cuanto</b> (zodra) en <b>hasta que</b> (totdat) de subjuntivo: <i>cuando llegues</i> = als je aankomt. Over vroeger of een gewoonte gebruik je de indicativo: <i>cuando era niño</i>, <i>cuando llego a casa</i>. <b>Antes de que</b> heeft altijd de subjuntivo.'],
    ['para que|sin que|a menos que', 'para que · sin que', '<b>Para que</b> (zodat), <b>sin que</b> (zonder dat) en <b>a menos que</b> (tenzij) hebben altijd de subjuntivo: <i>para que no gastes</i>, <i>a menos que ayuden</i>.'],
    ['si (?:tuviera|tuvieran|tuvieras|pudiera|fuera|fueras|hubiera|hubiéramos|hubieran|estuviera|supiera)', 'si tuviera…', '<b>Si</b> + imperfecto de subjuntivo + condicional = als … zou …: een onwerkelijke situatie (<i>si tuvieran un año libre, viajarían</i>). <b>Si hubiera</b> + voltooid deelwoord = als … had …, voor het verleden dat niet meer te veranderen is.'],
    ['yo que tú|yo en tu lugar', 'yo que tú', '<b>Yo que tú</b> / <b>yo en tu lugar</b> + condicional = als ik jou was, zou ik …: <i>yo que tú, aceptaría</i>.'],

    /* — regionale woorden — */
    ['chévere', 'chévere', '<b>Chévere</b> = tof, leuk. Vooral 🇨🇴 Colombia, 🇻🇪 Venezuela, 🇵🇪 Peru en het Caribisch gebied.'],
    ['bacán', 'bacán', '<b>Bacán</b> = tof, gaaf. 🇨🇱 Chili, 🇵🇪 Peru en ook 🇨🇴 Colombia.'],
    ['qué padre|padrísimo', '¡qué padre!', '<b>¡Qué padre!</b> = wat tof! (🇲🇽). <i>Padre</i> betekent hier dus niet vader. Ook: <i>padrísimo</i>.'],
    ['tuanis', 'tuanis', '<b>Tuanis</b> = tof, cool (🇨🇷 Costa Rica).'],
    ['pura vida', 'pura vida', '<b>Pura vida</b> is hét Costa Ricaanse woord (🇨🇷): hallo, top, alles goed, bedankt… het past bijna overal.'],
    ['güey', 'güey', '<b>Güey</b> (ook: wey) = gast, man (🇲🇽, tussen vrienden). Tegen onbekenden kan het onbeleefd klinken.'],
    ['parcero|parce', 'parcero', '<b>Parcero / parce</b> = maat, vriend (🇨🇴, vooral Medellín).'],
    ['cachai', 'cachai', '<b>¿Cachai?</b> = snap je? (🇨🇱, van <i>cachar</i> = snappen).'],
    ['al tiro', 'al tiro', '<b>Al tiro</b> = meteen, direct (🇨🇱).'],
    ['al toque', 'al toque', '<b>Al toque</b> = meteen, direct (🇵🇪🇦🇷🇺🇾).'],
    ['una pega|la pega', 'la pega', '<b>La pega</b> = het werk, de baan (🇨🇱 spreektaal).'],
    ['depa', 'el depa', '<b>El depa</b> = het appartement, kort voor <i>departamento</i> (🇨🇱🇲🇽🇵🇪). In Spanje: <i>el piso</i>.'],
    ['jal(?:ar|o|a|as|an|é|ó)', 'jalar', '<b>Jalar</b> = trekken (Latijns-Amerika; in Spanje <i>tirar</i>). In 🇵🇪 ook: iemand een lift geven: <i>te jalo al aeropuerto</i>.'],
    ['chilero', 'chilero', '<b>Chilero</b> = tof, gaaf (🇬🇹 Guatemala).'],
    ['qué lo qué', '¡qué lo qué!', '<b>¡Qué lo qué!</b> = hoe is \'t? (🇩🇴 Dominicaanse Republiek).'],
    ['guaguas?', 'la guagua', '<b>La guagua</b> = de bus (🇩🇴🇨🇺🇵🇷). Let op: in 🇨🇱 Chili en 🇪🇨 Ecuador betekent <i>guagua</i> baby!'],
    ['colmado', 'el colmado', '<b>El colmado</b> = de buurtwinkel (🇩🇴), ook een ontmoetingsplek met muziek.'],
    ['xopá', '¡xopá!', '<b>¡Xopá!</b> = hoi, hoe is \'t? (🇵🇦 Panama, verbasterd van <i>¿qué pasó?</i>).'],
    ['qué oso', '¡qué oso!', '<b>¡Qué oso!</b> = wat gênant! (🇲🇽🇨🇴, letterlijk: wat een beer). <i>Hacer el oso</i> = jezelf voor schut zetten.'],
    ['no manches', '¡no manches!', '<b>¡No manches!</b> = dat meen je niet! (🇲🇽 spreektaal).'],
    ['me late', '¡me late!', '<b>¡Me late!</b> = dat lijkt me wat, te gek! (🇲🇽).'],
    ['aguas que', '¡aguas!', '<b>¡Aguas!</b> = pas op! (🇲🇽).'],
    ['dizque', 'dizque', '<b>Dizque</b> = zogenaamd, naar het schijnt (🇲🇽🇨🇴 spreektaal, van <i>dice que</i>).'],
    ['mij[oa]', 'mijo / mija', '<b>Mijo / mija</b> = van <i>mi hijo / mi hija</i>: jongen, lieverd. Ook tegen mensen die geen familie zijn.'],
    ['de una', '¡de una!', '<b>¡De una!</b> = tuurlijk, meteen! (🇨🇴).'],
    ['diay', 'diay', '<b>Diay</b> = nou ja, tja, kom op (🇨🇷 stopwoordje).'],
    ['mae', 'mae', '<b>Mae</b> = gast, man (🇨🇷 informeel).'],
    ['ni modo', 'ni modo', '<b>Ni modo</b> = jammer dan, niks aan te doen (🇲🇽 en Midden-Amerika).'],
    ['onda', 'onda', '<b>Onda</b> = sfeer, vibe. <i>¿Qué onda?</i> = hoe is \'t? (🇲🇽). <i>De buena onda</i> = op een leuke manier. <i>Ser buena onda</i> = aardig zijn.'],
    ['chamba', 'la chamba', '<b>La chamba</b> = het werk (🇲🇽🇵🇪🇬🇹 spreektaal).'],
    ['plata', 'la plata', '<b>La plata</b> = geld (Zuid-Amerika; letterlijk: zilver). In 🇲🇽 zeg je ook <i>lana</i>.'],
    ['carros?|manej\\p{L}*', 'carro · manejar', 'Auto = <b>el carro</b> (🇲🇽🇨🇴🇵🇪 en Midden-Amerika), <i>el auto</i> (🇨🇱🇦🇷), <i>el coche</i> (🇪🇸). Autorijden = <b>manejar</b> in Latijns-Amerika, <i>conducir</i> in Spanje.'],
    ['celular', 'el celular', '<b>El celular</b> = de mobiele telefoon (Latijns-Amerika). In Spanje: <i>el móvil</i>.'],
    ['jugos?', 'el jugo', '<b>El jugo</b> = het sap (Latijns-Amerika). In Spanje: <i>el zumo</i>.'],
    ['papas?', 'la papa', '<b>La papa</b> = de aardappel (Latijns-Amerika; Spanje: <i>patata</i>). Let op: <i>el papa</i> = de paus, <i>el papá</i> = de vader.'],
    ['palta|aguacates?', 'aguacate · palta', 'Avocado = <b>el aguacate</b> (🇲🇽🇨🇴 en Midden-Amerika) of <b>la palta</b> (🇨🇱🇦🇷🇵🇪🇺🇾).'],
    ['lentes', 'los lentes', '<b>Los lentes</b> = de bril (Latijns-Amerika). In Spanje: <i>las gafas</i>.'],
    ['bloqueador', 'el bloqueador', '<b>El bloqueador</b> = zonnebrandcrème (🇲🇽🇨🇴🇵🇪). Ook: <i>protector solar</i>.'],
    ['gripa', 'la gripa', '<b>La gripa</b> = de griep (🇨🇴🇲🇽). Elders: <i>la gripe</i>.'],
    ['cuadras?', 'la cuadra', '<b>La cuadra</b> = een huizenblok, als afstand: van straathoek tot straathoek. <i>A dos cuadras</i> = twee blokken verderop.'],
    ['chao', 'chao', '<b>Chao</b> = doei (van het Italiaanse <i>ciao</i>). In heel Latijns-Amerika heel gewoon.'],
    ['tic[oa]s?', 'tico / tica', '<b>Tico / tica</b> = Costa Ricaan(s). De bijnaam komt van hun verkleinwoorden op <i>-tico</i> (<i>chiquitico</i>).'],
    ['soroche', 'el soroche', '<b>El soroche</b> = hoogteziekte (Andes: 🇵🇪🇧🇴🇪🇨).'],
    ['arriendo', 'el arriendo', '<b>El arriendo</b> = de huur (🇨🇴🇨🇱). Elders: <i>el alquiler</i>.'],
    ['medias', 'las medias', '<b>Las medias</b> = sokken (Latijns-Amerika). In Spanje: <i>los calcetines</i> (en <i>medias</i> = panty\'s).'],
    ['totopos', 'los totopos', '<b>Los totopos</b> = tortillachips (🇲🇽).']
  ];

  /* ---------- zoeken ---------- */
  const norm = s => String(s || '').toLowerCase().normalize('NFC').replace(/[¡!¿?.,;:«»"“”()…—–]/g, ' ').replace(/\s+/g, ' ').trim();
  const zin = Object.entries(ZINNEN).map(([k, html]) => ({ k, n: norm(k), html }));
  const uit = UITDRUKKINGEN.map(([p, t, html]) => ({ p, re: new RegExp('(?<!\\p{L})(?:' + p + ')(?!\\p{L})', 'u'), t, html }));
  const MAX = 4;

  /** Uitleg bij een Spaanse zin of alinea. opt.extra: uitleg uit de lesstof zelf.
      opt.seen: Set om een algemene uitleg maar één keer per scherm te tonen. */
  function find(text, opt = {}) {
    const n = norm(text);
    if (!n) return [];
    const out = [];
    if (opt.extra) out.push({ html: opt.extra });
    zin.forEach(z => {
      if (n === z.n || n.includes(z.n) || (z.n.includes(n) && n.split(' ').length >= 4)) out.push({ html: z.html });
    });
    for (const u of uit) {
      if (out.length >= MAX) break;
      if (!u.re.test(n)) continue;
      if (opt.seen) { if (opt.seen.has(u.p)) continue; opt.seen.add(u.p); }
      out.push({ t: u.t, html: u.html });
    }
    return out;
  }

  S.Uitleg = { find, norm, ZINNEN, UITDRUKKINGEN, _patterns: uit };
})(window.SPT);
