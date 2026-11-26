/* Extra grammatica-oefeningen voor A2 en B1 (november 2026), zodat oefenen en unittoetsen minder op elkaar lijken.
   Onderaan: A1-aanvulling uit de voorstellen van Lupe (rapport 24 november 2026): al/del, hay vs. estar,
   lidwoord na gustar, het weer met hacer, ir a + infinitief, bijvoeglijke naamwoorden in het meervoud en cuánto/cuánta.
   Alles wordt achteraan de bestaande unit toegevoegd (zie S.extendUnit), zodat je voortgang blijft kloppen. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return; // lesstof van de cursus Spaans (uitleg in het Nederlands)
  const X = S.extendUnit;

  /* ======================= A2 ======================= */
  X('a2-01', { ex: [
    { t: 'cloze', s: 'Anoche nosotros ___ tacos al pastor.', h: 'cenar', a: ['cenamos'], nl: 'Gisteravond aten we tacos al pastor.', tag: 'pret-regular' },
    { t: 'cloze', s: 'Yo ___ el partido a las nueve.', h: 'empezar', a: ['empecé'], nl: 'Ik begon om negen uur aan de wedstrijd.', x: 'Empezar → empecé: z wordt c voor e.', tag: 'pret-regular' },
    { t: 'cloze', s: '¿A qué hora ___ ustedes del trabajo?', h: 'salir', a: ['salieron'], nl: 'Hoe laat gingen jullie van je werk weg?', tag: 'pret-regular' },
    { t: 'mc', q: 'Mi hermana ___ un libro muy bueno. (leer)', o: ['leyó', 'leió', 'lió'], x: 'Tussen twee klinkers wordt i een y: leyó, leyeron.', tag: 'pret-regular' },
    { t: 'order', s: 'El lunes pasado compré un celular nuevo.', nl: 'Afgelopen maandag kocht ik een nieuwe mobiel.', tag: 'pret-regular' },
    { t: 'tr', nl: 'Wij hebben gisteren de hele dag gewerkt.', a: ['Ayer trabajamos todo el día.', 'Nosotros trabajamos todo el día ayer.', 'Trabajamos todo el día ayer.'], x: 'In Latijns-Amerika: indefinido, niet «hemos trabajado».', tag: 'pret-regular' }
  ] });
  X('a2-02', { ex: [
    { t: 'cloze', s: 'El año pasado mis papás ___ a Cartagena.', h: 'ir', a: ['fueron'], nl: 'Vorig jaar gingen mijn ouders naar Cartagena.', tag: 'pret-irregular' },
    { t: 'cloze', s: '¿Dónde ___ (tú) las llaves?', h: 'poner', a: ['pusiste'], nl: 'Waar heb je de sleutels gelegd?', tag: 'pret-irregular' },
    { t: 'cloze', s: 'Nosotros no ___ ir a la playa por la lluvia.', h: 'poder', a: ['pudimos'], nl: 'We konden niet naar het strand vanwege de regen.', tag: 'pret-irregular' },
    { t: 'mc', q: 'Ellos me ___ la verdad. (decir)', o: ['dijeron', 'dijieron', 'decieron'], x: 'Na j valt de i weg: dijeron, trajeron, condujeron.', tag: 'pret-irregular' },
    { t: 'mc', q: '«Fue» kan betekenen:', o: ['hij ging én hij was', 'alleen hij ging', 'alleen hij was'], x: 'Ser en ir hebben in de indefinido dezelfde vormen. De zin maakt duidelijk welke bedoeld is.', tag: 'pret-irregular' },
    { t: 'tr', nl: 'Ik moest vroeg opstaan.', a: ['Tuve que levantarme temprano.', 'Me tuve que levantar temprano.', 'Tuve que despertarme temprano.'], tag: 'pret-irregular' }
  ] });
  X('a2-03', { ex: [
    { t: 'cloze', s: 'De niño, yo ___ en un pueblo pequeño.', h: 'vivir', a: ['vivía'], nl: 'Als kind woonde ik in een klein dorp.', tag: 'imperfect' },
    { t: 'cloze', s: 'Mi abuela siempre nos ___ cuentos.', h: 'contar', a: ['contaba'], nl: 'Mijn oma vertelde ons altijd verhaaltjes.', tag: 'imperfect' },
    { t: 'cloze', s: 'Antes nosotros ___ al colegio en bus.', h: 'ir', a: ['íbamos'], nl: 'Vroeger gingen we met de bus naar school.', tag: 'imperfect' },
    { t: 'mc', q: 'Welke vorm is GEEN imperfecto?', o: ['comí', 'comía', 'comíamos'], tag: 'imperfect' },
    { t: 'order', s: 'Cuando era chico me gustaba jugar en la calle.', nl: 'Toen ik klein was speelde ik graag op straat.', tag: 'imperfect' },
    { t: 'tr', nl: 'Vroeger had mijn vader een rode auto.', a: ['Antes mi papá tenía un carro rojo.', 'Antes mi padre tenía un carro rojo.', 'Antes mi papá tenía un auto rojo.', 'Mi papá antes tenía un carro rojo.'], tag: 'imperfect' }
  ] });
  X('a2-04', { ex: [
    { t: 'cloze', s: 'Mientras yo ___, sonó el teléfono.', a: ['cocinaba'], o: ['cocinaba', 'cociné', 'cocino'], nl: 'Terwijl ik aan het koken was, ging de telefoon.', x: 'Decor (aan de gang) = imperfecto, de onderbreking = indefinido.', tag: 'pret-imp' },
    { t: 'cloze', s: 'Era tarde y ___ mucho frío.', a: ['hacía'], o: ['hacía', 'hizo', 'hace'], nl: 'Het was laat en erg koud.', tag: 'pret-imp' },
    { t: 'cloze', s: 'De repente ___ un ruido muy fuerte.', a: ['escuchamos'], o: ['escuchamos', 'escuchábamos', 'escuchar'], nl: 'Plotseling hoorden we een heel hard geluid.', x: '«De repente» kondigt een gebeurtenis aan: indefinido.', tag: 'pret-imp' },
    { t: 'mc', q: '«Ayer conocí a Lucía.» Wat betekent «conocí» hier?', o: ['ik heb leren kennen', 'ik kende al', 'ik wist'], x: 'Conocer in de indefinido = voor het eerst ontmoeten.', tag: 'pret-imp' },
    { t: 'mc', q: '«No quise ir.» betekent:', o: ['Ik weigerde te gaan.', 'Ik had geen zin om te gaan.', 'Ik wil niet gaan.'], tag: 'pret-imp' },
    { t: 'tr', nl: 'Het regende toen we aankwamen.', a: ['Llovía cuando llegamos.', 'Estaba lloviendo cuando llegamos.', 'Cuando llegamos llovía.', 'Cuando llegamos, llovía.', 'Cuando llegamos estaba lloviendo.'], tag: 'pret-imp' }
  ] });
  X('a2-05', { ex: [
    { t: 'cloze', s: '¿Alguna vez ___ (tú) mole poblano?', h: 'probar', a: ['has probado'], nl: 'Heb je ooit mole poblano geproefd?', tag: 'perfect' },
    { t: 'cloze', s: 'Nunca he ___ una novela en español.', h: 'escribir', a: ['escrito'], nl: 'Ik heb nooit een roman in het Spaans geschreven.', tag: 'perfect' },
    { t: 'cloze', s: 'Mis amigos todavía no han ___ de Perú.', h: 'volver', a: ['vuelto'], nl: 'Mijn vrienden zijn nog niet terug uit Peru.', tag: 'perfect' },
    { t: 'mc', q: 'Participio van «romper»:', o: ['roto', 'rompido', 'rompto'], tag: 'perfect' },
    { t: 'cloze', s: 'Acabo de ___ con mi jefe.', a: ['hablar'], o: ['hablar', 'hablado', 'hablo'], nl: 'Ik heb net met mijn baas gesproken.', tag: 'periphrasis' },
    { t: 'tr', nl: 'Ik ben nog nooit in Bolivia geweest.', a: ['Nunca he estado en Bolivia.', 'Todavía no he estado en Bolivia.', 'Nunca he ido a Bolivia.', 'No he estado nunca en Bolivia.'], tag: 'perfect' }
  ] });
  X('a2-06', { ex: [
    { t: 'cloze', s: 'A mi hijo le ___ los oídos.', a: ['duelen'], o: ['duelen', 'duele', 'duelo'], nl: 'Mijn zoon heeft oorpijn.', x: 'Meervoud (los oídos) → duelen.', tag: 'doler' },
    { t: 'cloze', s: '¿Te ___ la garganta?', a: ['duele'], o: ['duele', 'duelen', 'dueles'], nl: 'Heb je keelpijn?', tag: 'doler' },
    { t: 'cloze', s: 'Usted ___ tomar mucha agua.', a: ['debe'], o: ['debe', 'tiene', 'hay'], nl: 'U moet veel water drinken.', tag: 'obligation' },
    { t: 'mc', q: '«Hay que descansar.» betekent:', o: ['Je moet rusten (algemeen).', 'Er is rust.', 'Hij moet rusten.'], tag: 'obligation' },
    { t: 'order', s: 'Me duele mucho la cabeza desde ayer.', nl: 'Ik heb sinds gisteren erge hoofdpijn.', tag: 'doler' },
    { t: 'tr', nl: 'Ik heb buikpijn.', a: ['Me duele el estómago.', 'Me duele la panza.', 'Me duele la barriga.', 'Tengo dolor de estómago.'], x: 'In Mexico zeg je vaak «la panza».', tag: 'doler' }
  ] });
  X('a2-07', { ex: [
    { t: 'cloze', s: '¿Las flores? Yo ___ compré en el mercado.', a: ['las'], o: ['las', 'les', 'los'], nl: 'De bloemen? Die heb ik op de markt gekocht.', tag: 'object-pron' },
    { t: 'cloze', s: 'A mi mamá ___ regalé un perfume.', a: ['le'], o: ['le', 'la', 'lo'], nl: 'Ik gaf mijn moeder een parfum.', tag: 'object-pron' },
    { t: 'cloze', s: '¿El libro? Ya ___ di a Pedro.', a: ['se lo'], o: ['se lo', 'le lo', 'lo le'], nl: 'Het boek? Dat heb ik al aan Pedro gegeven.', x: 'Le + lo wordt se lo.', tag: 'object-pron' },
    { t: 'mc', q: '«Te lo explico.» betekent:', o: ['Ik leg het je uit.', 'Jij legt het mij uit.', 'Ik leg het hem uit.'], tag: 'object-pron' },
    { t: 'order', s: 'Mis amigos me la mandaron ayer.', nl: 'Mijn vrienden hebben hem (de foto) me gisteren gestuurd.', tag: 'object-pron' },
    { t: 'tr', nl: 'Kun je het mij lenen?', a: ['¿Me lo puedes prestar?', '¿Puedes prestármelo?', '¿Me la puedes prestar?', '¿Puedes prestármela?', '¿Me lo prestas?'], tag: 'object-pron' }
  ] });
  X('a2-08', { ex: [
    { t: 'cloze', s: 'Lima es ___ grande que Cusco.', a: ['más'], o: ['más', 'tan', 'muy'], nl: 'Lima is groter dan Cusco.', tag: 'comparatives' },
    { t: 'cloze', s: 'Mi barrio es tan tranquilo ___ el tuyo.', a: ['como'], o: ['como', 'que', 'de'], nl: 'Mijn wijk is net zo rustig als de jouwe.', tag: 'comparatives' },
    { t: 'cloze', s: 'Este café es ___ que el de ayer.', a: ['mejor'], o: ['mejor', 'más bueno', 'buenísimo'], nl: 'Deze koffie is beter dan die van gisteren.', tag: 'comparatives' },
    { t: 'mc', q: 'La comida aquí es ___. (heel lekker)', o: ['riquísima', 'muy riquísima', 'más rica'], tag: 'comparatives' },
    { t: 'mc', q: 'Medellín tiene más ___ dos millones de habitantes.', o: ['de', 'que', 'como'], x: 'Bij getallen: más de.', tag: 'comparatives' },
    { t: 'tr', nl: 'Bogotá is de grootste stad van Colombia.', a: ['Bogotá es la ciudad más grande de Colombia.'], tag: 'comparatives' }
  ] });
  X('a2-09', { ex: [
    { t: 'cloze', s: 'El próximo año ___ (yo) un trabajo nuevo.', h: 'tener', a: ['tendré'], nl: 'Volgend jaar heb ik een nieuwe baan.', tag: 'future' },
    { t: 'cloze', s: 'Mañana ___ calor en Monterrey.', h: 'hacer', a: ['hará'], nl: 'Morgen wordt het warm in Monterrey.', tag: 'future' },
    { t: 'cloze', s: '¿Qué ___ ustedes después de la universidad?', h: 'hacer', a: ['harán'], nl: 'Wat gaan jullie doen na de universiteit?', tag: 'future' },
    { t: 'cloze', s: 'Trabajo ___ ganar dinero.', a: ['para'], o: ['para', 'por'], nl: 'Ik werk om geld te verdienen.', tag: 'por-para' },
    { t: 'cloze', s: 'Gracias ___ tu ayuda.', a: ['por'], o: ['por', 'para'], nl: 'Bedankt voor je hulp.', tag: 'por-para' },
    { t: 'tr', nl: 'Ik zal je morgen bellen.', a: ['Te llamaré mañana.', 'Mañana te llamaré.', 'Te voy a llamar mañana.', 'Mañana te voy a llamar.'], tag: 'future' }
  ] });
  X('a2-10', { ex: [
    { t: 'cloze', s: '¡___ la puerta, por favor! (tú, cerrar)', a: ['Cierra'], nl: 'Doe de deur dicht, alsjeblieft!', tag: 'imperative' },
    { t: 'cloze', s: '___ aquí, señora. (sentarse, usted)', a: ['Siéntese'], nl: 'Gaat u hier zitten, mevrouw.', tag: 'imperative' },
    { t: 'cloze', s: '___ temprano, chicos. (venir, ustedes)', a: ['Vengan'], nl: 'Kom vroeg, jongens.', tag: 'imperative' },
    { t: 'mc', q: 'Imperativo van «hacer» voor tú:', o: ['haz', 'hace', 'haga'], tag: 'imperative' },
    { t: 'mc', q: '«Dímelo.» betekent:', o: ['Zeg het me.', 'Ik zeg het je.', 'Zeg het hem.'], tag: 'imperative' },
    { t: 'tr', nl: 'Neem de eerste straat rechts. (usted)', a: ['Tome la primera calle a la derecha.', 'Agarre la primera calle a la derecha.', 'Tome la primera a la derecha.'], tag: 'imperative' }
  ] });
  X('a2-11', { ex: [
    { t: 'cloze', s: 'No hay ___ en la oficina.', a: ['nadie'], o: ['nadie', 'alguien', 'nada'], nl: 'Er is niemand op kantoor.', tag: 'negation' },
    { t: 'cloze', s: 'No compré ___ en el mercado.', a: ['nada'], o: ['nada', 'algo', 'nunca'], nl: 'Ik heb niets op de markt gekocht.', tag: 'negation' },
    { t: 'cloze', s: '¿Tienes ___ libro de cocina?', a: ['algún'], o: ['algún', 'alguno', 'ningún'], nl: 'Heb je een kookboek?', x: 'Voor een mannelijk woord: algún, ningún.', tag: 'negation' },
    { t: 'cloze', s: '¿Quieres venir ___?', a: ['conmigo'], o: ['conmigo', 'con mí', 'con yo'], nl: 'Wil je met mij meekomen?', tag: 'prep-pron' },
    { t: 'mc', q: '«Tampoco» betekent:', o: ['ook niet', 'ook', 'nooit'], tag: 'negation' },
    { t: 'tr', nl: 'Ik heb nooit iemand gezien.', a: ['Nunca he visto a nadie.', 'Nunca vi a nadie.', 'No he visto nunca a nadie.', 'No vi nunca a nadie.'], tag: 'negation' }
  ] });
  X('a2-12', { ex: [
    { t: 'cloze', s: 'Este es el barrio ___ crecí.', a: ['donde'], o: ['donde', 'que', 'lo que'], nl: 'Dit is de wijk waar ik ben opgegroeid.', tag: 'relative' },
    { t: 'cloze', s: 'No entiendo ___ dices.', a: ['lo que'], o: ['lo que', 'que', 'qué'], nl: 'Ik begrijp niet wat je zegt.', tag: 'relative' },
    { t: 'cloze', s: 'En Chile ___ come mucho pan.', a: ['se'], o: ['se', 'le', 'uno se'], nl: 'In Chili eet men veel brood.', tag: 'se-impersonal' },
    { t: 'cloze', s: 'Me gusta la ciudad, ___ es un poco cara.', a: ['pero'], o: ['pero', 'porque', 'entonces'], nl: 'Ik vind de stad leuk, maar hij is wat duur.', tag: 'connectors' },
    { t: 'mc', q: 'No salí ___ estaba cansado.', o: ['porque', 'por eso', 'aunque'], tag: 'connectors' },
    { t: 'tr', nl: 'Hier spreekt men Spaans.', a: ['Aquí se habla español.', 'Acá se habla español.'], tag: 'se-impersonal' }
  ] });

  /* ======================= B1 ======================= */
  X('b1-01', { ex: [
    { t: 'cloze', s: 'Ojalá que ___ buen tiempo el sábado.', h: 'hacer', a: ['haga'], nl: 'Hopelijk is het zaterdag mooi weer.', tag: 'subj-wish' },
    { t: 'cloze', s: 'Mi jefa quiere que nosotros ___ más temprano.', h: 'empezar', a: ['empecemos'], nl: 'Mijn baas wil dat we eerder beginnen.', x: 'Empezar → empiece, maar nosotros: empecemos.', tag: 'subj-wish' },
    { t: 'cloze', s: 'Te recomiendo que ___ el ceviche.', h: 'probar', a: ['pruebes'], nl: 'Ik raad je aan de ceviche te proberen.', tag: 'subj-wish' },
    { t: 'mc', q: 'Subjuntivo van «estar» (yo):', o: ['esté', 'este', 'estoy'], x: 'Let op het accent: esté. «Este» is «deze».', tag: 'subj-wish' },
    { t: 'order', s: 'Espero que te vaya muy bien en el examen.', nl: 'Ik hoop dat je examen heel goed gaat.', tag: 'subj-wish' },
    { t: 'tr', nl: 'Ik wil dat je me helpt.', a: ['Quiero que me ayudes.', 'Necesito que me ayudes.'], tag: 'subj-wish' }
  ] });
  X('b1-02', { ex: [
    { t: 'cloze', s: 'No creo que Ana ___ razón.', h: 'tener', a: ['tenga'], nl: 'Ik denk niet dat Ana gelijk heeft.', tag: 'subj-opinion' },
    { t: 'cloze', s: 'Creo que Ana ___ razón.', h: 'tener', a: ['tiene'], nl: 'Ik denk dat Ana gelijk heeft.', x: 'Bevestigend creo que → indicativo.', tag: 'subj-opinion' },
    { t: 'cloze', s: 'Es importante que todos ___ a tiempo a la reunión.', h: 'llegar', a: ['lleguen'], nl: 'Het is belangrijk dat iedereen op tijd op de vergadering is.', tag: 'subj-opinion' },
    { t: 'cloze', s: 'Me alegra que ustedes ___ aquí.', h: 'estar', a: ['estén'], nl: 'Ik ben blij dat jullie hier zijn.', tag: 'subj-emotion' },
    { t: 'mc', q: 'Es verdad que el examen ___ difícil.', o: ['es', 'sea', 'ser'], x: 'Es verdad / es cierto / es obvio que → indicativo.', tag: 'subj-opinion' },
    { t: 'tr', nl: 'Het is mogelijk dat het morgen regent.', a: ['Es posible que llueva mañana.', 'Es posible que mañana llueva.', 'Puede que llueva mañana.', 'Puede ser que llueva mañana.'], tag: 'subj-opinion' }
  ] });
  X('b1-03', { ex: [
    { t: 'cloze', s: 'Cuando ___ a casa, te llamo.', h: 'llegar, yo', a: ['llegue'], nl: 'Als ik thuiskom, bel ik je.', tag: 'subj-time' },
    { t: 'cloze', s: 'Cuando ___ a casa, siempre te llamo.', h: 'llegar, yo', a: ['llego'], nl: 'Als ik thuiskom, bel ik je altijd.', x: 'Een gewoonte → indicativo.', tag: 'subj-time' },
    { t: 'cloze', s: 'Te lo explico para que lo ___.', h: 'entender', a: ['entiendas'], nl: 'Ik leg het je uit zodat je het begrijpt.', tag: 'subj-purpose' },
    { t: 'cloze', s: 'Salimos antes de que ___ a llover.', h: 'empezar', a: ['empiece'], nl: 'We gaan weg voordat het begint te regenen.', tag: 'subj-purpose' },
    { t: 'mc', q: 'En cuanto ___ el dinero, te pago.', o: ['tenga', 'tengo', 'tendré'], tag: 'subj-time' },
    { t: 'tr', nl: 'Bel me als je in Quito bent.', a: ['Llámame cuando estés en Quito.', 'Llámame cuando llegues a Quito.', 'Cuando estés en Quito, llámame.', 'Cuando llegues a Quito, llámame.'], tag: 'subj-time' }
  ] });
  X('b1-04', { ex: [
    { t: 'cloze', s: 'Yo que tú, ___ con ella.', h: 'hablar', a: ['hablaría'], nl: 'Als ik jou was, zou ik met haar praten.', tag: 'conditional' },
    { t: 'cloze', s: '¿___ (usted) cerrar la ventana, por favor?', h: 'poder', a: ['Podría'], nl: 'Zou u het raam dicht willen doen?', tag: 'conditional' },
    { t: 'cloze', s: 'Con más tiempo, nosotros ___ más.', h: 'viajar', a: ['viajaríamos'], nl: 'Met meer tijd zouden we meer reizen.', tag: 'conditional' },
    { t: 'mc', q: 'Condicional van «decir» (ellos):', o: ['dirían', 'decirían', 'dicerían'], tag: 'conditional' },
    { t: 'mc', q: '«Serían las diez cuando llegó.» betekent:', o: ['Het zal ongeveer tien uur geweest zijn toen hij kwam.', 'Het wordt tien uur als hij komt.', 'Het was precies tien uur.'], x: 'Condicional voor een vermoeden over het verleden.', tag: 'conditional' },
    { t: 'tr', nl: 'Ik zou graag een koffie willen.', a: ['Me gustaría un café.', 'Quisiera un café.', 'Me gustaría tomar un café.'], tag: 'conditional' }
  ] });
  X('b1-05', { ex: [
    { t: 'cloze', s: 'Cuando llegamos, la película ya ___.', h: 'empezar', a: ['había empezado'], nl: 'Toen we aankwamen, was de film al begonnen.', tag: 'pluperfect' },
    { t: 'cloze', s: 'Nunca ___ (yo) tanta nieve antes.', h: 'ver', a: ['había visto'], nl: 'Ik had nog nooit zoveel sneeuw gezien.', tag: 'pluperfect' },
    { t: 'cloze', s: 'Ellos ya se ___ cuando sonó la alarma.', h: 'despertar', a: ['habían despertado'], nl: 'Ze waren al wakker toen de wekker ging.', tag: 'pluperfect' },
    { t: 'mc', q: 'Pluscuamperfecto van «hacer» (tú):', o: ['habías hecho', 'habías hacido', 'hubiste hecho'], tag: 'pluperfect' },
    { t: 'order', s: 'Me dijo que ya había comido.', nl: 'Hij zei dat hij al had gegeten.', tag: 'pluperfect' },
    { t: 'tr', nl: 'Ze had haar paspoort thuis vergeten.', a: ['Había olvidado su pasaporte en casa.', 'Se le había olvidado el pasaporte en casa.', 'Ella había olvidado su pasaporte en casa.', 'Había dejado su pasaporte en casa.'], tag: 'pluperfect' }
  ] });
  X('b1-06', { ex: [
    { t: 'cloze', s: '¡No ___ tan rápido! (tú, manejar)', a: ['manejes'], nl: 'Rij niet zo hard!', tag: 'neg-imperative' },
    { t: 'cloze', s: 'No ___ nada a nadie. (tú, decir)', a: ['digas'], nl: 'Zeg niets tegen niemand.', tag: 'neg-imperative' },
    { t: 'cloze', s: 'Por favor, no ___ aquí. (ustedes, fumar)', a: ['fumen'], nl: 'Alstublieft niet roken hier.', tag: 'neg-imperative' },
    { t: 'mc', q: 'Ontkenning van «Dímelo»:', o: ['No me lo digas.', 'No dímelo.', 'No me lo dices.'], tag: 'neg-imperative' },
    { t: 'mc', q: '«No te vayas.» betekent:', o: ['Ga niet weg.', 'Je gaat niet weg.', 'Ga weg.'], tag: 'neg-imperative' },
    { t: 'tr', nl: 'Maak je geen zorgen, alles komt goed.', a: ['No te preocupes, todo va a salir bien.', 'No te preocupes, todo saldrá bien.', 'No te preocupes, todo va a estar bien.', 'Tranquilo, todo va a salir bien.'], tag: 'neg-imperative' }
  ] });
  X('b1-07', { ex: [
    { t: 'cloze', s: '«Estoy cansada.» → Ella dijo que ___ cansada.', a: ['estaba'], o: ['estaba', 'está', 'estuvo'], nl: 'Ze zei dat ze moe was.', tag: 'reported' },
    { t: 'cloze', s: '«Voy a llamar.» → Dijo que ___ a llamar.', a: ['iba'], o: ['iba', 'va', 'fue'], nl: 'Hij zei dat hij zou bellen.', tag: 'reported' },
    { t: 'cloze', s: '«Lo terminaré mañana.» → Dijo que lo ___ al día siguiente.', a: ['terminaría'], o: ['terminaría', 'terminará', 'terminaba'], nl: 'Hij zei dat hij het de volgende dag zou afmaken.', tag: 'reported' },
    { t: 'cloze', s: '«Ven a las ocho.» → Me pide que ___ a las ocho.', a: ['venga'], o: ['venga', 'vengo', 'ven'], nl: 'Ze vraagt me om acht uur te komen.', x: 'Een verzoek doorgeven: pedir que + subjuntivo.', tag: 'reported' },
    { t: 'mc', q: '«¿Tienes hambre?» → Me preguntó ___ tenía hambre.', o: ['si', 'que', 'qué'], tag: 'reported' },
    { t: 'tr', nl: 'Hij zegt dat hij morgen komt.', a: ['Dice que viene mañana.', 'Dice que vendrá mañana.', 'Dice que va a venir mañana.'], x: 'Dice que (heden) → geen tijdsverschuiving.', tag: 'reported' }
  ] });
  X('b1-08', { ex: [
    { t: 'cloze', s: 'Si ___ el bus, llegaremos tarde.', h: 'perder, nosotros', a: ['perdemos'], nl: 'Als we de bus missen, komen we te laat.', x: 'Si + presente, nooit si + futuro.', tag: 'si-clause' },
    { t: 'cloze', s: 'Si reciclamos más, ___ menos basura.', h: 'haber', a: ['habrá'], nl: 'Als we meer recyclen, zal er minder afval zijn.', tag: 'si-clause' },
    { t: 'cloze', s: 'Te presto el carro siempre que lo ___ con cuidado.', h: 'manejar', a: ['manejes'], nl: 'Ik leen je de auto, mits je voorzichtig rijdt.', tag: 'subj-opinion' },
    { t: 'mc', q: 'No iremos a menos que ___ buen tiempo.', o: ['haga', 'hace', 'hará'], tag: 'subj-opinion' },
    { t: 'order', s: 'Si apagas la luz, ahorras energía.', nl: 'Als je het licht uitdoet, bespaar je energie.', tag: 'si-clause' },
    { t: 'tr', nl: 'Als je wilt, kunnen we samen gaan.', a: ['Si quieres, podemos ir juntos.', 'Si quieres podemos ir juntos.', 'Si quieres, podemos ir juntas.', 'Podemos ir juntos si quieres.'], tag: 'si-clause' }
  ] });
  X('b1-09', { ex: [
    { t: 'cloze', s: 'Cuando vio el precio, se ___ pálido.', a: ['puso'], o: ['puso', 'volvió', 'hizo'], nl: 'Toen hij de prijs zag, werd hij bleek.', x: 'Ponerse = een tijdelijke verandering (kleur, stemming).', tag: 'become' },
    { t: 'cloze', s: 'Con los años, mi abuelo se ___ muy sabio.', a: ['volvió'], o: ['volvió', 'puso', 'quedó'], nl: 'Met de jaren werd mijn opa erg wijs.', tag: 'become' },
    { t: 'cloze', s: 'Después del accidente se ___ ciego.', a: ['quedó'], o: ['quedó', 'puso', 'hizo'], nl: 'Na het ongeluk werd hij blind.', tag: 'become' },
    { t: 'cloze', s: 'Ella se ___ médica después de muchos años de estudio.', a: ['hizo'], o: ['hizo', 'puso', 'quedó'], nl: 'Na jaren studie werd ze arts.', x: 'Hacerse = worden door eigen inzet.', tag: 'become' },
    { t: 'mc', q: '«Juan es listo» vs. «Juan está listo»:', o: ['slim vs. klaar', 'klaar vs. slim', 'allebei slim'], tag: 'ser-estar' },
    { t: 'tr', nl: 'Ik word nerveus als ik moet spreken.', a: ['Me pongo nervioso cuando tengo que hablar.', 'Me pongo nerviosa cuando tengo que hablar.', 'Me pongo nervioso cuando hablo.', 'Cuando tengo que hablar me pongo nervioso.'], tag: 'become' }
  ] });
  X('b1-10', { ex: [
    { t: 'cloze', s: 'Aunque ___ cansado, voy a ir. (ik ben het echt)', h: 'estar', a: ['estoy'], nl: 'Hoewel ik moe ben, ga ik.', x: 'Een feit → aunque + indicativo.', tag: 'argument' },
    { t: 'cloze', s: 'Aunque ___ mañana, iremos a la playa. (misschien)', h: 'llover', a: ['llueva'], nl: 'Zelfs als het morgen regent, gaan we naar het strand.', x: 'Onzeker → aunque + subjuntivo.', tag: 'argument' },
    { t: 'mc', q: 'Welk woord leidt een tegenargument in?', o: ['Sin embargo', 'Además', 'Por lo tanto'], tag: 'argument' },
    { t: 'mc', q: '«Por lo tanto» betekent:', o: ['daarom', 'bovendien', 'hoewel'], tag: 'argument' },
    { t: 'order', s: 'Por un lado es barato, pero por otro lado es lento.', nl: 'Aan de ene kant is het goedkoop, maar aan de andere kant is het traag.', tag: 'argument' },
    { t: 'tr', nl: 'Daar ben ik het niet mee eens.', a: ['No estoy de acuerdo con eso.', 'No estoy de acuerdo.', 'Con eso no estoy de acuerdo.'], tag: 'argument' }
  ] });
  /* ======================= A1 · voorstellen van Lupe (24 nov 2026) ======================= */
  // Wat er al verwerkt is, zodat Lupe in haar rapport/voorstellen niet opnieuw hetzelfde voorstelt
  // (oude foutcijfers blijven namelijk staan). Bij een nieuwe ronde: regel toevoegen of bijwerken.
  // date = moment van mergen (UTC). Punten zonder nieuwe fouten daarna laat het rapport voor Lupe weg.
  S.reworked = (S.reworked || []).concat([
    { tag: 'contractions', unit: 'a1-04', v: '1.63.1', date: '2026-11-24T21:19:00Z', what: 'uitleg al/del + uitzondering bij namen, ±20 invul-, meerkeuze- en vertaaloefeningen' },
    { tag: 'hay-estar', unit: 'a1-04', v: '1.63.2', date: '2026-11-24T21:28:00Z', what: 'korte regel hay vs. estar (nooit ser voor een plek, wél es bij een evenement: ¿dónde es la fiesta?), «¿Qué hay para ver?», ±22 oefeningen met keuze hay/está/es' },
    { tag: 'stem-change', unit: 'a1-07', v: '1.63.2', date: '2026-11-24T21:28:00Z', what: 'invuloefeningen recomendar/preferir/empezar (e → ie) met yo/usted/ustedes/nosotros' },
    { tag: 'pres-regular', unit: 'a1-05', v: '1.63.2', date: '2026-11-24T21:28:00Z', what: 'waarschuwing «trabajando» ≠ «ik werk» (trabajo) + oefeningen yo/usted/nosotros' },
    { tag: 'connectors', unit: 'a2-12', v: '1.63.2', date: '2026-11-24T21:28:00Z', what: 'uitleg «que» na creer/pensar/decir (nooit weglaten) + está vs. esta, 5 oefeningen' },
    { tag: 'tu-usted', unit: 'a1-01', v: '1.63.2', date: '2026-11-24T21:28:00Z', what: 'don/doña alleen voor een ander, nooit voor jezelf, 3 oefeningen' },
    { tag: 'conj', unit: 'a1-04', v: '1.63.3', date: '2026-11-24T21:36:00Z', what: '8 typoefeningen gemengd vervoegen (ser, estar, ir, vivir, tener) in een stad-context' },
    { tag: 'plural', unit: 'a1-02', v: '1.63.3', date: '2026-11-24T21:36:00Z', what: '6 typoefeningen meervoud (-s, -es, -z → -ces) met beroepen en personen' },
    { tag: 'possessive', unit: 'a1-03', v: '1.63.3', date: '2026-11-24T21:36:00Z', what: '6 oefeningen mi/tu/su/nuestro, su = zijn/haar/uw/hun' },
    { tag: 'hay-estar', unit: 'a1-04', v: '1.64.2', date: '2026-11-25T00:40:00Z', what: 'beslisregel bepaald (el/la/mi/ese/naam) → está, onbepaald (un/una/geen lidwoord/getal) → hay; woordtegels en vertaalzinnen; ¿Dónde queda…? goed' },
    { tag: 'contractions', unit: 'a1-04', v: '1.64.2', date: '2026-11-25T00:40:00Z', what: 'meervoud zonder samentrekking (de los, a las) en al centro, 7 oefeningen' },
    { tag: 'conj', unit: 'a1-04', v: '1.64.2', date: '2026-11-25T00:40:00Z', what: 'tabel estar + llamarse (me/te/se) en 8 invuloefeningen met de persoon in de zin' },
    { ids: ['w|a1-04|48', 'w|a1-04|29'], v: '1.64.2', date: '2026-11-25T00:40:00Z', what: '¿puede ayudarme? telt goed; hay blijft hay bij meervoud; zinnen met enfrente de' },
    { tag: 'numbers', unit: 'a1-03', v: '1.64.2', date: '2026-11-25T00:40:00Z', what: 'uitzondering un vóór een zelfstandig naamwoord (ochenta y un años), 5 typoefeningen' },
    { tag: 'gender', unit: 'a1-02', v: '1.65.1', date: '2026-11-25T00:52:00Z', what: '-ma-woorden in zinnen (el/un + mannelijk bijv. nw. typen) en vrouwelijke beroepen: -o → -a, -or → -ora, ⚠ -tor → -triz, -ista/-e gelijk' },
    { tag: 'articles', unit: 'a1-02', v: '1.65.1', date: '2026-11-25T00:52:00Z', what: 'beroepszinnen als woordtegels, vertalen en dictee (el señor López es ingeniero, soy cocinero), spelling beroepen' },
    { tag: 'prepositions', unit: 'a1-04', v: '1.65.1', date: '2026-11-25T00:52:00Z', what: 'está of hay met plaatsvoorzetsels (encima de, detrás de, al lado de, enfrente de), 5 meerkeuze' },
    { ids: ['w|a1-04|48', 'w|a1-04|29', 'w|a1-04|37'], v: '1.65.1', date: '2026-11-25T00:52:00Z', what: 'dicteezinnen met hay una enfrente del banco, la catedral en ¿me puede ayudar?' },
    { tag: 'hay-estar', unit: 'a1-04', v: '1.65.2', date: '2026-11-25T01:20:00Z', what: '5 vrije typvertalingen hay un/una/dos + enfrente de (⚠ hay uno zonder zelfst. nw.), no hay ningún' },
    { tag: 'ser-estar', unit: 'a1-04', v: '1.65.2', date: '2026-11-25T01:20:00Z', what: '4 typvertalingen ¿Dónde está/están…? met accent (locatie = estar, nooit ¿dónde es?)' },
    { tag: 'articles', unit: 'a1-02', v: '1.63.1', date: '2026-11-24T21:19:00Z', what: 'uitleg wél/géén lidwoord (beroep na ser, na gustar), ±15 oefeningen in a1-02 en a1-06' },
    { tag: 'gender', unit: 'a1-02', v: '1.63.1', date: '2026-11-24T21:19:00Z', what: 'lijstje woorden op -ma (el problema, el idioma…) met oefeningen' },
    { tag: 'adj-agree', unit: 'a1-03', v: '1.62.0', date: '2026-11-24T20:57:00Z', what: 'uitleg bijvoeglijke naamwoorden in het meervoud, 8 oefeningen' },
    { tag: 'numbers', unit: 'a1-03', v: '1.63.1', date: '2026-11-24T21:19:00Z', what: 'uitleg getallen 30–99 (sesenta/setenta), 12 oefeningen' },
    { tag: 'weather', unit: 'a1-10', v: '1.62.0', date: '2026-11-24T20:57:00Z', what: 'uitleg hace bij het weer, oefeningen' },
    { tag: 'ir-a', unit: 'a1-10', v: '1.62.0', date: '2026-11-24T20:57:00Z', what: 'ir a + infinitief, 7 oefeningen' },
    { tag: 'questions', unit: 'a1-10', v: '1.62.0', date: '2026-11-24T20:57:00Z', what: 'cuánto/cuánta/cuántos/cuántas, 7 oefeningen' },
    { ids: ['w|a1-01|17'], v: '1.62.0', date: '2026-11-24T20:57:00Z', what: '«mucho gusto» telt goed' },
    { ids: ['w|a1-03|32', 'w|a1-03|37', 'w|a1-03|47', 'w|a1-03|48'], v: '1.63.1', date: '2026-11-24T21:19:00Z', what: 'suegro, divorciado, carnal en ñaña in voorbeeldzinnen geoefend' }
  ]);
  // A1 · 2 Personas y profesiones: wanneer wél en wanneer géén lidwoord
  X('a1-02', {
    grammar: [
      { t: 'Wél of géén lidwoord?', es: '¿Con o sin artículo?',
        html: `<p>Het Spaans gebruikt <b>vaker een lidwoord</b> dan het Nederlands:</p>
<p>✅ Als je iets <b>in het algemeen</b> bedoelt: <i><b>La</b> gente aquí es muy simpática. <b>Los</b> médicos trabajan mucho.</i></p>
<p>✅ Bij <b>señor / señora + naam</b> als je óver iemand praat: <i><b>La</b> señora García es abogada.</i> (Spreek je iemand direct aan, dan zonder: <i>Buenos días, señora García.</i>)</p>
<p>✅ Na <b>gustar</b> en <b>encantar</b>: <i>Me gusta <b>el</b> trabajo. Me gustan <b>los</b> tacos.</i></p>
<p>❌ Géén lidwoord bij een beroep of nationaliteit na <b>ser</b>: <i>Soy médico. Es argentina.</i> Maar mét een bijvoeglijk naamwoord erbij wel <i>un/una</i>: <i>Es <b>un</b> médico excelente.</i></p>`,
        sum: 'Lo general lleva artículo (la gente, los tacos). La profesión después de «ser», no: soy médico.' },
      { t: 'Woorden op -ma: vaak mannelijk', es: 'El problema, el idioma…',
        html: `<p>Veel woorden op <b>-ma</b> komen uit het Grieks en zijn <b>mannelijk</b>, ook al eindigen ze op -a. Leer ze met <i>el</i> erbij.</p>
<p>⚠️ Niet alle: <i>la cama</i> (het bed), <i>la forma</i> (de vorm) en <i>la mamá</i> zijn gewoon vrouwelijk.</p>`,
        table: [['mannelijk (el)', 'betekenis'], ['el problema', 'het probleem'], ['el idioma', 'de taal'], ['el sistema', 'het systeem'], ['el programa', 'het programma'], ['el tema', 'het onderwerp'], ['el clima', 'het klimaat / weer'], ['el drama', 'het drama']],
        sum: 'El problema, el idioma, el sistema, el tema, el clima: masculinos.' }
    ],
    ex: [
      { t: 'mc', q: 'Welke zin is goed?', o: ['La señora García es abogada.', 'Señora García es abogada.', 'La señora García es una abogada.'], x: 'Over iemand praten: la señora García. Beroep na ser: zonder lidwoord.', tag: 'articles' },
      { t: 'mc', q: '«Hij is een uitstekende arts.»', o: ['Es un médico excelente.', 'Es médico excelente.', 'Es el médico excelente.'], x: 'Beroep mét bijvoeglijk naamwoord: dan wél un/una.', tag: 'articles' },
      { t: 'cloze', s: '___ profesores de mi universidad son muy simpáticos.', a: ['Los'], o: ['Los', 'Las', 'El'], nl: 'De docenten van mijn universiteit zijn heel aardig.', tag: 'articles' },
      { t: 'cloze', s: '___ gente en Lima es muy amable.', a: ['La'], o: ['La', 'El', 'Los'], nl: 'De mensen in Lima zijn heel vriendelijk.', x: 'La gente is enkelvoud en vrouwelijk, en krijgt in het Spaans een lidwoord.', tag: 'articles' },
      { t: 'cloze', s: 'Me gusta ___ trabajo de periodista.', a: ['el'], o: ['el', 'la', 'un'], nl: 'Ik vind het werk van journalist leuk.', x: 'Na gustar komt een lidwoord: me gusta el trabajo.', tag: 'articles' },
      { t: 'cloze', s: 'A Andrés le gustan ___ ciudades grandes.', a: ['las'], o: ['las', 'los', 'la'], nl: 'Andrés houdt van grote steden.', tag: 'articles' },
      { t: 'mc', q: '«Mijn zus is lerares.»', o: ['Mi hermana es profesora.', 'Mi hermana es una profesora.', 'Mi hermana es la profesora.'], tag: 'articles' },
      { t: 'tr', nl: 'Meneer López is ingenieur.', a: ['El señor López es ingeniero.'], x: 'El señor López (over iemand), ingeniero zonder lidwoord.', tag: 'articles' },
      { t: 'mc', q: '«Mijn zus is dokter.»', o: ['Mi hermana es doctora.', 'Mi hermana es una doctora.', 'Mi hermana es la doctora.'], x: 'Beroep na ser: zonder lidwoord.', tag: 'articles' },
      { t: 'cloze', s: '___ problema es grande.', a: ['El'], o: ['El', 'La', 'Los'], nl: 'Het probleem is groot.', x: 'Problema eindigt op -a, maar is mannelijk.', tag: 'gender' },
      { t: 'cloze', s: 'Me gusta ___ café.', a: ['el'], o: ['el', 'la', 'un'], nl: 'Ik hou van koffie.', tag: 'articles' },
      { t: 'cloze', s: 'Me gusta ___ música.', a: ['la'], o: ['la', 'el', 'los'], nl: 'Ik hou van muziek.', tag: 'articles' },
      { t: 'tr', nl: 'Pedro is kok.', a: ['Pedro es cocinero.'], x: 'Beroep na ser: zonder lidwoord.', tag: 'articles' },
      { t: 'cloze', s: 'El español es ___ idioma muy bonito.', a: ['un'], o: ['un', 'una', 'unos'], nl: 'Spaans is een heel mooie taal.', x: 'El idioma is mannelijk: un idioma.', tag: 'gender' },
      { t: 'cloze', s: '___ tema de hoy es la familia.', a: ['El'], o: ['El', 'La', 'Los'], nl: 'Het onderwerp van vandaag is de familie.', tag: 'gender' },
      { t: 'mc', q: 'Welke is vrouwelijk?', o: ['la cama', 'el problema', 'el sistema'], x: 'Cama is gewoon vrouwelijk; problema en sistema zijn mannelijk.', tag: 'gender' },
      { t: 'tr', nl: 'Ik ben student.', a: ['Soy estudiante.', 'Yo soy estudiante.'], x: 'Beroep/studie na ser: zonder lidwoord.', tag: 'articles' }
    ]
  });

  // A1 · 3 Mi familia: bijvoeglijke naamwoorden in het meervoud
  X('a1-03', {
    grammar: [
      { t: 'Bijvoeglijke naamwoorden in het meervoud', es: 'Adjetivos en plural',
        html: `<p>Gaat het over meer personen of dingen, dan krijgt ook het bijvoeglijk naamwoord een meervoud: <b>-o → -os</b>, <b>-a → -as</b>, <b>-e → -es</b>, medeklinker <b>+ -es</b>.</p>
<p>Een <b>gemengde groep</b> (man + vrouw) krijgt de mannelijke vorm: <i>mi hermano y mi hermana → mis hermanos viven <b>solos</b></i>.</p>`,
        table: [['enkelvoud', 'meervoud'], ['mi primo es alto', 'mis primos son altos'], ['mi tía es simpática', 'mis tías son simpáticas'], ['mi abuelo es inteligente', 'mis abuelos son inteligentes'], ['mi hermana es joven', 'mis hermanas son jóvenes']],
        sum: 'Mis hermanos viven solos. Mis abuelas son muy simpáticas.' },
      { t: 'Getallen 30–99', es: 'Los números del 30 al 99',
        html: `<p>Vanaf 31 maak je getallen met <b>tiental + y + eenheid</b>, in drie losse woorden: <i>treinta <b>y</b> uno, cuarenta <b>y</b> siete, setenta <b>y</b> seis</i>. (16–29 schrijf je juist als één woord: <i>veintiséis</i>.)</p>
<p>⚠️ Let op de tientallen die op elkaar lijken: <b>sesenta</b> (60) en <b>setenta</b> (70).</p>`,
        table: [['tiental', '', 'voorbeeld'], ['30', 'treinta', '34 treinta y cuatro'], ['40', 'cuarenta', '47 cuarenta y siete'], ['50', 'cincuenta', '58 cincuenta y ocho'], ['60', 'sesenta', '63 sesenta y tres'], ['70', 'setenta', '76 setenta y seis'], ['80', 'ochenta', '85 ochenta y cinco'], ['90', 'noventa', '99 noventa y nueve']],
        sum: 'Cuarenta y siete, setenta y seis, noventa y nueve: siempre con «y».' }
    ],
    ex: [
      { t: 'cloze', s: 'Mis hermanos viven ___.', h: 'solo', a: ['solos'], nl: 'Mijn broer en zus wonen alleen.', x: 'Gemengde groep → mannelijk meervoud: solos.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Mis abuelas son muy ___.', h: 'simpático', a: ['simpáticas'], nl: 'Mijn oma’s zijn heel aardig.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Mis primos son ___.', h: 'alto', a: ['altos'], nl: 'Mijn neven zijn lang.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Mis tías son ___.', h: 'joven', a: ['jóvenes'], nl: 'Mijn tantes zijn jong.', x: 'Joven → jóvenes: het accent komt erbij om de klemtoon te houden.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Los perros de mi tío son muy ___.', h: 'grande', a: ['grandes'], nl: 'De honden van mijn oom zijn heel groot.', tag: 'adj-agree' },
      { t: 'mc', q: '«Mijn broer en mijn zus zijn getrouwd.»', o: ['Mi hermano y mi hermana están casados.', 'Mi hermano y mi hermana están casadas.', 'Mi hermano y mi hermana están casado.'], x: 'Man + vrouw samen → mannelijk meervoud.', tag: 'adj-agree' },
      { t: 'tr', nl: 'Mijn ouders zijn heel aardig.', a: ['Mis papás son muy simpáticos.', 'Mis padres son muy simpáticos.', 'Mis papás son muy amables.', 'Mis padres son muy amables.'], tag: 'adj-agree' },
      { t: 'tr', nl: 'Mijn zussen zijn lang.', a: ['Mis hermanas son altas.'], tag: 'adj-agree' },
      { t: 'cloze', s: 'Mi abuelo tiene ___ años. (76)', a: ['setenta y seis'], nl: 'Mijn opa is 76 jaar.', x: '70 = setenta (niet sesenta) + y + seis.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi tía tiene ___ años. (47)', a: ['cuarenta y siete'], nl: 'Mijn tante is 47 jaar.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi papá tiene ___ años. (63)', a: ['sesenta y tres'], nl: 'Mijn vader is 63 jaar.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi abuela tiene ___ años. (85)', a: ['ochenta y cinco'], nl: 'Mijn oma is 85 jaar.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi mamá tiene ___ años. (58)', a: ['cincuenta y ocho'], nl: 'Mijn moeder is 58 jaar.', tag: 'numbers' },
      { t: 'mc', q: 'Hoe schrijf je 76?', o: ['setenta y seis', 'sesenta y seis', 'setentaiseis'], x: '70 = setenta, 60 = sesenta.', tag: 'numbers' },
      { t: 'mc', q: 'Hoe schrijf je 94?', o: ['noventa y cuatro', 'nueventa y cuatro', 'noventicuatro'], tag: 'numbers' },
      { t: 'mc', q: '«sesenta y ocho» is…', o: ['68', '78', '86'], tag: 'numbers' },
      { t: 'tr', nl: 'Mijn opa is negenenveertig jaar.', a: ['Mi abuelo tiene cuarenta y nueve años.', 'Mi abuelo tiene 49 años.'], tag: 'numbers' },
      { t: 'cloze', s: 'Mi profesor tiene ___ años. (53)', a: ['cincuenta y tres'], nl: 'Mijn leraar is 53 jaar.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi bisabuela tiene ___ años. (81)', a: ['ochenta y un', 'ochenta y uno'], nl: 'Mijn overgrootmoeder is 81 jaar.', x: 'Voor een mannelijk woord (años) wordt uno → un: ochenta y un años.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi prima tiene ___ años. (29)', a: ['veintinueve'], nl: 'Mijn nicht is 29 jaar.', x: 'Tot en met 29 één woord: veintinueve.', tag: 'numbers' },
      // familiewoorden die vaak misgaan (Lupe-rapport): in een zin
      { t: 'tr', nl: 'Mijn schoonmoeder kookt heel lekker.', a: ['Mi suegra cocina muy rico.', 'Mi suegra cocina muy bien.', 'Mi suegra cocina riquísimo.'], tag: 'vocab' },
      { t: 'cloze', s: 'El papá de mi esposa es mi ___.', a: ['suegro'], nl: 'De vader van mijn vrouw is mijn schoonvader.', tag: 'vocab' },
      { t: 'tr', nl: 'Mijn ouders zijn gescheiden.', a: ['Mis papás están divorciados.', 'Mis padres están divorciados.', 'Mis papás son divorciados.', 'Mis padres son divorciados.'], x: 'In Latijns-Amerika meestal: están divorciados.', tag: 'vocab' },
      { t: 'cloze', s: 'Mi tía está ___.', h: 'divorciado', a: ['divorciada'], nl: 'Mijn tante is gescheiden.', tag: 'adj-agree' },
      { t: 'mc', q: 'Een Mexicaan zegt «Mi carnal vive en Monterrey». Wie is dat?', o: ['zijn broer of heel goede vriend', 'zijn vader', 'zijn buurman'], tag: 'vocab' },
      { t: 'mc', q: 'Een Ecuadoriaanse zegt «Mi ñaña tiene veinte años». Wie is dat?', o: ['haar zus', 'haar oma', 'haar dochter'], x: 'Ñaña = zus, ñaño = broer (Ecuador, informeel).', tag: 'vocab' }
    ]
  });

  // A1 · 4 Mi ciudad: al / del (en wanneer níet) + hay vs. estar
  X('a1-04', {
    grammar: [
      { t: 'al en del: wanneer wel, wanneer niet', es: '¿Al, a la, del, de la?',
        html: `<p><b>a + el = al</b> en <b>de + el = del</b>. Dat is verplicht: <s>a el</s> en <s>de el</s> schrijf je nooit.</p>
<p>⚠️ Het gebeurt <b>alleen bij el</b>. Bij <b>la</b>, <b>los</b> en <b>las</b> blijven de woordjes los: <i>a la plaza, de la iglesia, a los parques, de las tiendas</i>.</p>
<p>📌 Ook <b>niet</b> als <i>El</i> bij een <b>naam</b> hoort (met hoofdletter): <i>Viajo <b>a El</b> Salvador. Leo una noticia <b>de El</b> Tiempo</i> (een Colombiaanse krant).</p>`,
        table: [['', 'a (naar)', 'de (van / uit)'], ['el museo', 'al museo', 'del museo'], ['la plaza', 'a la plaza', 'de la plaza'], ['los parques', 'a los parques', 'de los parques'], ['las tiendas', 'a las tiendas', 'de las tiendas']],
        ex: [['Voy al museo y vengo del parque.', 'Ik ga naar het museum en ik kom van het park.'], ['El banco está enfrente de la iglesia.', 'De bank is tegenover de kerk.']],
        sum: 'Solo con «el»: al, del. Con la, los, las no se junta nada.' },
      { t: 'Kort: hay = er is · estar = waar het is', es: 'Hay o está: la regla corta',
        html: `<p><b>hay</b> = <i>er is / er zijn</i>: je vertelt dát iets er is (iets nieuws, met <i>un/una</i>, een getal, of zonder lidwoord). Na <i>hay</i> komt nooit <s>el/la</s>.</p>
<p><b>estar</b> = <i>waar</i> iets bekends is (met <i>el/la</i>, <i>mi/tu</i> of een naam).</p>
<p>❌ <b>ser</b> gebruik je níet voor de plek van een gebouw of ding: <i>¿Dónde <b>está</b> el hospital?</i>, nooit <s>¿dónde es?</s>. Kort: <b>¿Dónde está + el/la/mi …?</b> en <b>¿Hay + un/una/mucho …?</b></p>`,
        table: [['hay (er is …)', 'estar (waar is …)'], ['¿Qué hay para ver aquí?', '¿Dónde está el museo?'], ['Hay un mercado en el centro.', 'El mercado está en el centro.'], ['Hay muchos restaurantes.', 'Los restaurantes están en la plaza.'], ['No hay supermercado.', 'Mi casa está cerca.']],
        sum: '«Hay» dice que algo existe; «estar» dice dónde está algo conocido.' }
    ],
    ex: [
      // al / del
      { t: 'cloze', s: 'Voy ___ museo.', a: ['al'], o: ['al', 'a el', 'a la'], nl: 'Ik ga naar het museum.', tag: 'contractions' },
      { t: 'cloze', s: 'Vengo ___ parque.', a: ['del'], o: ['del', 'de el', 'de la'], nl: 'Ik kom van het park.', tag: 'contractions' },
      { t: 'cloze', s: 'Vamos ___ plaza.', a: ['a la'], o: ['a la', 'al', 'a el'], nl: 'We gaan naar het plein.', x: 'Bij la geen samentrekking: a la plaza.', tag: 'contractions' },
      { t: 'cloze', s: 'La parada está enfrente ___ estación.', a: ['de la'], o: ['de la', 'del', 'de el'], nl: 'De halte is tegenover het station.', x: 'La estación is vrouwelijk: de la, niet del.', tag: 'contractions' },
      { t: 'cloze', s: 'El hotel está cerca ___ mercados.', a: ['de los'], o: ['de los', 'del', 'dels'], nl: 'Het hotel is dicht bij de markten.', x: 'Bij los geen samentrekking: de los.', tag: 'contractions' },
      { t: 'cloze', s: 'Mañana vamos ___ tiendas del centro.', a: ['a las'], o: ['a las', 'al', 'a los'], nl: 'Morgen gaan we naar de winkels in het centrum.', tag: 'contractions' },
      { t: 'cloze', s: 'El cajero está al lado ___ hospital.', a: ['del'], o: ['del', 'de la', 'de el'], nl: 'De geldautomaat is naast het ziekenhuis.', tag: 'contractions' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Voy al banco.', 'Voy a el banco.', 'Voy del banco.'], x: 'a + el = al, altijd.', tag: 'contractions' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Salgo de la farmacia.', 'Salgo del farmacia.', 'Salgo de el farmacia.'], x: 'La farmacia → de la farmacia. Del alleen bij el.', tag: 'contractions' },
      { t: 'tr', nl: 'Ik ga naar het museum en ik kom van het park.', a: ['Voy al museo y vengo del parque.', 'Yo voy al museo y vengo del parque.'], tag: 'contractions' },
      { t: 'tr', nl: 'We gaan naar het centrum.', a: ['Vamos al centro.', 'Nosotros vamos al centro.'], tag: 'contractions' },
      { t: 'order', s: 'El museo está lejos del centro.', nl: 'Het museum is ver van het centrum.', tag: 'contractions' },
      // hay vs. estar
      { t: 'cloze', s: '¿Qué ___ para ver aquí?', a: ['hay'], o: ['hay', 'está', 'es'], nl: 'Wat is er hier te zien?', tag: 'hay-estar' },
      { t: 'cloze', s: '¿Dónde ___ el museo?', a: ['está'], o: ['está', 'hay', 'es'], nl: 'Waar is het museum?', tag: 'hay-estar' },
      { t: 'cloze', s: 'En el centro ___ muchos restaurantes.', a: ['hay'], o: ['hay', 'están', 'son'], nl: 'In het centrum zijn veel restaurants.', tag: 'hay-estar' },
      { t: 'cloze', s: 'Los restaurantes ___ en la plaza.', a: ['están'], o: ['están', 'hay', 'son'], nl: 'De restaurants zijn op het plein.', x: 'Los restaurantes (bekend, met los) → estar.', tag: 'hay-estar' },
      { t: 'cloze', s: 'En mi calle no ___ supermercado.', a: ['hay'], o: ['hay', 'está', 'es'], nl: 'In mijn straat is geen supermarkt.', x: 'Ontkenning: no hay, vaak zonder lidwoord.', tag: 'hay-estar' },
      { t: 'cloze', s: '¿Dónde ___ mi celular? No lo encuentro.', a: ['está'], o: ['está', 'hay', 'es'], nl: 'Waar is mijn mobiel? Ik kan hem niet vinden.', tag: 'hay-estar' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['La catedral está en la plaza.', 'Hay la catedral en la plaza.', 'La catedral hay en la plaza.'], x: 'Na hay nooit el/la. Een bekend gebouw → estar.', tag: 'hay-estar' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Hay dos parques cerca.', 'Están dos parques cerca.', 'Son dos parques cerca.'], x: 'Een getal (iets nieuws noemen) → hay.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Wat is er hier te zien?', a: ['¿Qué hay para ver aquí?', '¿Qué hay para ver por aquí?', '¿Qué hay que ver aquí?'], tag: 'hay-estar' },
      { t: 'tr', nl: 'Er is een markt in het centrum.', a: ['Hay un mercado en el centro.', 'En el centro hay un mercado.'], tag: 'hay-estar' },
      { t: 'tr', nl: 'De markt is in het centrum.', a: ['El mercado está en el centro.'], tag: 'hay-estar' },
      { t: 'cloze', s: 'El libro es ___ profesor.', a: ['del'], o: ['del', 'de el', 'al'], nl: 'Het boek is van de leraar.', tag: 'contractions' },
      { t: 'cloze', s: 'Mañana vamos ___ mercado.', a: ['al'], o: ['al', 'a el', 'a la'], nl: 'Morgen gaan we naar de markt.', tag: 'contractions' },
      { t: 'cloze', s: 'El banco está al lado ___ hotel.', a: ['del'], o: ['del', 'de la', 'al'], nl: 'De bank is naast het hotel.', tag: 'contractions' },
      { t: 'mc', q: '«Ik reis naar El Salvador.»', o: ['Viajo a El Salvador.', 'Viajo al Salvador.', 'Viajo a la Salvador.'], x: 'El hoort bij de naam van het land, dus geen samentrekking.', tag: 'contractions' },
      { t: 'cloze', s: '¿___ un banco aquí?', a: ['Hay'], o: ['Hay', 'Está', 'Es'], nl: 'Is er hier een bank?', tag: 'hay-estar' },
      { t: 'cloze', s: 'La farmacia ___ cerca.', a: ['está'], o: ['está', 'hay', 'es'], nl: 'De apotheek is in de buurt.', x: 'La farmacia (bekend) → estar. Ser gebruik je nooit voor een plek.', tag: 'hay-estar' },
      { t: 'tr', nl: 'In mijn stad zijn veel parken.', a: ['En mi ciudad hay muchos parques.', 'Hay muchos parques en mi ciudad.'], tag: 'hay-estar' },
      { t: 'cloze', s: 'La escuela está cerca ___ parque.', a: ['del'], o: ['del', 'de el', 'de la'], nl: 'De school is dicht bij het park.', tag: 'contractions' },
      { t: 'cloze', s: 'Vamos ___ playa mañana.', a: ['a la'], o: ['a la', 'al', 'a el'], nl: 'We gaan morgen naar het strand.', tag: 'contractions' },
      { t: 'cloze', s: 'El carro es ___ profesor.', a: ['del'], o: ['del', 'de la', 'de el'], nl: 'De auto is van de leraar.', tag: 'contractions' },
      { t: 'cloze', s: '¿Dónde ___ el hospital?', a: ['está'], o: ['está', 'es', 'hay'], nl: 'Waar is het ziekenhuis?', x: 'Plek van een gebouw: estar, nooit ser.', tag: 'hay-estar' },
      { t: 'mc', q: '«Pardon, waar is het ziekenhuis?»', o: ['Disculpe, ¿dónde está el hospital?', 'Disculpe, ¿dónde es el hospital?', 'Disculpe, ¿dónde hay el hospital?'], x: 'Dónde está + el/la: estar. Ser niet voor een plek, en na hay nooit el.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Is er een bank in de buurt?', a: ['¿Hay un banco cerca?', '¿Hay un banco por aquí?', '¿Hay un banco cerca de aquí?'], tag: 'hay-estar' },
      { t: 'tr', nl: 'Wat is er hier mooi om te zien?', a: ['¿Qué hay bonito para ver aquí?', '¿Qué hay de bonito para ver aquí?', '¿Qué hay bonito para ver por aquí?', '¿Qué hay de bonito para ver por aquí?'], x: 'Hay voor «er is», niet es.', tag: 'hay-estar' }
    ]
  });

  // A1 · 6 ¿Qué te gusta?: na gustar komt een lidwoord
  X('a1-06', {
    grammar: [
      { t: 'Na gustar: mét lidwoord', es: 'Me gusta el picante',
        html: `<p>In het Nederlands zeg je <i>ik hou van tacos</i>, zonder lidwoord. In het Spaans zet je na <b>gustar</b>, <b>encantar</b> en <b>interesar</b> wél een lidwoord: <i>Me gustan <b>los</b> tacos. Me gusta <b>el</b> picante. Me encanta <b>la</b> música.</i></p>
<p>Na gustar komt een <b>werkwoord</b>? Dan juist géén lidwoord: <i>Me gusta bailar.</i></p>`,
        ex: [['Me gusta el picante.', 'Ik hou van pittig eten.'], ['¿Te gustan los gatos?', 'Hou je van katten?']],
        sum: 'Me gusta + el/la/los/las + cosa · me gusta + infinitivo.' }
    ],
    ex: [
      { t: 'cloze', s: 'Me gusta ___ picante.', a: ['el'], o: ['el', 'la', 'los'], nl: 'Ik hou van pittig eten.', tag: 'articles' },
      { t: 'cloze', s: 'Me gustan ___ tacos.', a: ['los'], o: ['los', 'las', 'el'], nl: 'Ik vind tacos lekker.', tag: 'articles' },
      { t: 'cloze', s: 'A Lucía le encanta ___ música cubana.', a: ['la'], o: ['la', 'el', 'los'], nl: 'Lucía is dol op Cubaanse muziek.', tag: 'articles' },
      { t: 'cloze', s: 'No me gustan ___ películas de terror.', a: ['las'], o: ['las', 'los', 'la'], nl: 'Ik hou niet van horrorfilms.', tag: 'articles' },
      { t: 'cloze', s: 'Nos gusta ___ café de Colombia.', a: ['el'], o: ['el', 'la', 'los'], nl: 'Wij houden van Colombiaanse koffie.', tag: 'articles' },
      { t: 'mc', q: '«Ik vind tacos lekker.»', o: ['Me gustan los tacos.', 'Me gustan tacos.', 'Me gusta los tacos.'], x: 'Na gustar een lidwoord, en gustan omdat tacos meervoud is.', tag: 'articles' },
      { t: 'mc', q: '«Ik dans graag.»', o: ['Me gusta bailar.', 'Me gusta el bailar.', 'Me gusta la bailar.'], x: 'Bij een werkwoord géén lidwoord.', tag: 'articles' },
      { t: 'tr', nl: 'Ik hou van pittig eten.', a: ['Me gusta la comida picante.', 'Me gusta el picante.', 'A mí me gusta la comida picante.', 'Me encanta la comida picante.', 'Me encanta el picante.'], tag: 'articles' },
      { t: 'tr', nl: 'Wij houden van voetbal.', a: ['Nos gusta el fútbol.', 'A nosotros nos gusta el fútbol.', 'Nos encanta el fútbol.'], tag: 'articles' },
      { t: 'tr', nl: 'Hou je van katten?', a: ['¿Te gustan los gatos?', '¿A ti te gustan los gatos?', '¿Le gustan los gatos?'], tag: 'articles' }
    ]
  });

  // A1 · 10 Planes y el clima: weer met hacer, ir a + infinitief, cuánto/cuánta
  X('a1-10', {
    grammar: [
      { t: 'Het weer: hace, niet es', es: '¿Qué tiempo hace?',
        html: `<p>Voor het weer gebruik je <b>hacer</b>: <i>¿Qué tiempo <b>hace</b>? · ¿Qué clima <b>hace</b>? — <b>Hace</b> calor / frío / sol / buen tiempo.</i> Nooit <s>es calor</s> of <s>es frío</s>.</p>
<p>Over het weer van morgen? Gebruik <b>ir a + infinitief</b>: <i>Mañana <b>va a hacer</b> calor. <b>Va a llover.</b></i> Na <b>ir a</b> komt altijd het hele werkwoord: <i>voy a <b>hacer</b></i>, niet <s>voy a hago</s> of <s>voy hacer</s>.</p>`,
        ex: [['¿Qué tiempo hace hoy? — Hace mucho sol.', 'Wat voor weer is het vandaag? — De zon schijnt volop.'], ['Mañana va a hacer frío.', 'Morgen wordt het koud.']],
        sum: 'El clima con «hacer»: hace calor. El futuro: va a hacer calor, va a llover.' },
      { t: 'Hoeveel? cuánto, cuánta, cuántos, cuántas', es: '¿Cuánto o cuánta?',
        html: `<p><b>Cuánto</b> past zich aan het woord erna aan, net als een bijvoeglijk naamwoord.</p>
<p>Zonder zelfstandig naamwoord erachter gebruik je <b>cuánto</b>: <i>¿Cuánto cuesta?</i></p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['mannelijk', '¿cuánto tiempo?', '¿cuántos días?'], ['vrouwelijk', '¿cuánta lluvia?', '¿cuántas horas?']],
        sum: 'Cuánto tiempo, cuánta lluvia, cuántos días, cuántas horas.' }
    ],
    ex: [
      // weer met hacer
      { t: 'cloze', s: '¿Qué tiempo ___ hoy?', a: ['hace'], o: ['hace', 'es', 'está'], nl: 'Wat voor weer is het vandaag?', tag: 'weather' },
      { t: 'cloze', s: 'Hoy ___ buen tiempo.', a: ['hace'], o: ['hace', 'es', 'está'], nl: 'Vandaag is het lekker weer.', tag: 'weather' },
      { t: 'mc', q: '«Het is koud.»', o: ['Hace frío.', 'Es frío.', 'Tiene frío.'], x: 'Weer = hacer. Tener frío is: (iemand) heeft het koud.', tag: 'weather' },
      { t: 'tr', nl: 'Wat voor weer is het?', a: ['¿Qué tiempo hace?', '¿Qué clima hace?', '¿Cómo está el clima?', '¿Cómo está el tiempo?'], tag: 'weather' },
      // ir a + infinitief
      { t: 'cloze', s: 'Mañana ___ a hacer calor.', h: 'ir', a: ['va'], nl: 'Morgen wordt het warm.', tag: 'ir-a' },
      { t: 'cloze', s: 'Este sábado yo ___ a ir a la playa.', h: 'ir', a: ['voy'], nl: 'Deze zaterdag ga ik naar het strand.', tag: 'ir-a' },
      { t: 'cloze', s: '¿Qué ___ a hacer tú esta noche?', h: 'ir', a: ['vas'], nl: 'Wat ga jij vanavond doen?', tag: 'ir-a' },
      { t: 'cloze', s: 'Ellos van a ___ a Cusco en mayo.', h: 'viajar', a: ['viajar'], nl: 'Zij gaan in mei naar Cusco reizen.', x: 'Na ir a komt altijd de infinitief.', tag: 'ir-a' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Voy a hacer la maleta.', 'Voy hacer la maleta.', 'Voy a hago la maleta.'], x: 'ir + a + infinitief: voy a hacer.', tag: 'ir-a' },
      { t: 'tr', nl: 'Morgen gaat het regenen.', a: ['Mañana va a llover.', 'Va a llover mañana.'], tag: 'ir-a' },
      { t: 'tr', nl: 'Dit weekend gaan we koken.', a: ['Este fin de semana vamos a cocinar.', 'Vamos a cocinar este fin de semana.'], tag: 'ir-a' },
      // cuánto / cuánta
      { t: 'cloze', s: '¿___ tiempo vas a estar en Chile?', a: ['Cuánto'], o: ['Cuánto', 'Cuánta', 'Cuántos'], nl: 'Hoe lang blijf je in Chili?', x: 'El tiempo is mannelijk enkelvoud: cuánto tiempo.', tag: 'questions' },
      { t: 'cloze', s: '¿___ días vas a estar en Cusco?', a: ['Cuántos'], o: ['Cuántos', 'Cuántas', 'Cuánto'], nl: 'Hoeveel dagen blijf je in Cusco?', tag: 'questions' },
      { t: 'cloze', s: '¿___ horas de sol hay en verano?', a: ['Cuántas'], o: ['Cuántas', 'Cuántos', 'Cuánta'], nl: 'Hoeveel uur zon is er in de zomer?', tag: 'questions' },
      { t: 'cloze', s: '¿___ lluvia cae en abril?', a: ['Cuánta'], o: ['Cuánta', 'Cuánto', 'Cuántas'], nl: 'Hoeveel regen valt er in april?', x: 'La lluvia is vrouwelijk enkelvoud: cuánta.', tag: 'questions' },
      { t: 'cloze', s: '¿___ grados hace hoy?', a: ['Cuántos'], o: ['Cuántos', 'Cuánto', 'Cuántas'], nl: 'Hoeveel graden is het vandaag?', tag: 'questions' },
      { t: 'mc', q: '«Hoeveel koffers neem je mee?»', o: ['¿Cuántas maletas llevas?', '¿Cuántos maletas llevas?', '¿Cuánta maletas llevas?'], tag: 'questions' },
      { t: 'tr', nl: 'Hoeveel tijd hebben we?', a: ['¿Cuánto tiempo tenemos?'], tag: 'questions' }
    ]
  });
  /* ---------- Lupe-rapport 24 nov, vierde ronde ---------- */
  // A1 · 1: don / doña nooit voor jezelf
  X('a1-01', {
    grammar: [
      { t: 'don en doña: alleen voor een ander', es: 'Don y doña',
        html: `<p><b>don</b> (voor een man) en <b>doña</b> (voor een vrouw) zet je beleefd vóór de <b>voornaam van een ander</b>, vaak iemand die ouder is: <i>Buenos días, don Pedro. ¿Cómo está, doña Rosa?</i></p>
<p>❌ Over <b>jezelf</b> gebruik je het nooit: <i>Soy Mark</i> of <i>Me llamo Mark</i>, niet <s>Soy don Mark</s>.</p>`,
        sum: '«Don» y «doña» son para otras personas, nunca para uno mismo.' }
    ],
    ex: [
      { t: 'mc', q: 'Je stelt jezelf voor aan een oudere meneer. Wat zeg je?', o: ['Mucho gusto, don Pedro. Me llamo Mark.', 'Mucho gusto, Pedro. Soy don Mark.', 'Mucho gusto. Me llamo don Mark.'], x: 'Don voor de ander, nooit voor jezelf.', tag: 'tu-usted' },
      { t: 'mc', q: '— ¿Cómo se llama usted? Wat antwoord je?', o: ['Me llamo Mark.', 'Me llamo don Mark.', 'Soy don Mark.'], tag: 'tu-usted' },
      { t: 'cloze', s: 'Buenos días, ___ Rosa. ¿Cómo está?', a: ['doña'], o: ['doña', 'don', 'señorita'], nl: 'Goedemorgen, mevrouw Rosa. Hoe gaat het met u?', tag: 'tu-usted' }
    ]
  });

  // A1 · 4: hay / está / es (es bij een evenement)
  X('a1-04', {
    grammar: [
      { t: 'Hay, está of es?', es: '¿Hay, está o es?',
        html: `<p>🔎 <b>Wat is er (te zien / te doen)?</b> = <i>¿Qué <b>hay</b> para ver / para hacer?</i></p>
<p>📍 <b>Waar is het museum?</b> = <i>¿Dónde <b>está</b> el museo?</i> (een plek, een gebouw, een ding)</p>
<p>🎉 <b>Waar is het feest?</b> = <i>¿Dónde <b>es</b> la fiesta?</i> Bij een <b>evenement</b> (feest, concert, vergadering, les) gebruik je wél <b>ser</b>: het gaat om waar het plaatsvindt.</p>`,
        sum: 'Lugar de una cosa: está. Evento: es (la fiesta es en mi casa). Existencia: hay.' }
    ],
    ex: [
      { t: 'cloze', s: '¿Qué ___ para ver en tu ciudad?', a: ['hay'], o: ['hay', 'es', 'está'], nl: 'Wat is er te zien in jouw stad?', tag: 'hay-estar' },
      { t: 'cloze', s: 'En mi barrio ___ un parque bonito.', a: ['hay'], o: ['hay', 'es', 'está'], nl: 'In mijn buurt is een mooi park.', tag: 'hay-estar' },
      { t: 'cloze', s: 'El hotel ___ cerca de la plaza.', a: ['está'], o: ['está', 'es', 'hay'], nl: 'Het hotel is vlak bij het plein.', tag: 'hay-estar' },
      { t: 'cloze', s: '¿Dónde ___ la fiesta de Ana?', a: ['es'], o: ['es', 'está', 'hay'], nl: 'Waar is het feest van Ana?', x: 'Een evenement (feest, concert) → ser: la fiesta es en su casa.', tag: 'hay-estar' },
      { t: 'cloze', s: 'El concierto ___ en el parque.', a: ['es'], o: ['es', 'está', 'hay'], nl: 'Het concert is in het park.', x: 'Evenement → es.', tag: 'hay-estar' },
      { t: 'cloze', s: 'Mi casa ___ cerca del parque.', a: ['está'], o: ['está', 'es', 'hay'], nl: 'Mijn huis ligt dicht bij het park.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Wat is er hier te doen?', a: ['¿Qué hay para hacer aquí?', '¿Qué hay que hacer aquí?', '¿Qué hay para hacer por aquí?'], tag: 'hay-estar' }
    ]
  });

  // A1 · 5: «trabajando» is niet «ik werk»
  X('a1-05', {
    grammar: [
      { t: 'Let op: trabajo, niet trabajando', es: 'Trabajo, no «trabajando»',
        html: `<p>«Ik werk» is gewoon de presente: <b>trabajo</b>. De vorm <i>trabajando</i> (werkend) kan nooit alleen staan; je gebruikt hem pas later met <i>estar</i>: <i>estoy trabajando</i> = ik ben aan het werk.</p>
<p>Kijk goed naar de persoon: <i>yo trabaj<b>o</b> · usted trabaj<b>a</b> · nosotros trabaj<b>amos</b></i>.</p>`,
        sum: 'Yo trabajo, usted trabaja, nosotros trabajamos.' }
    ],
    ex: [
      { t: 'cloze', s: 'Yo ___ en una oficina.', h: 'trabajar', a: ['trabajo'], nl: 'Ik werk op een kantoor.', x: 'Ik werk = trabajo (niet trabajando).', tag: 'pres-regular' },
      { t: 'mc', q: '«Ik werk in Utrecht.»', o: ['Trabajo en Utrecht.', 'Trabajando en Utrecht.', 'Trabaja en Utrecht.'], x: 'Yo → -o: trabajo.', tag: 'pres-regular' },
      { t: 'cloze', s: '¿Dónde ___ usted?', h: 'vivir', a: ['vive'], nl: 'Waar woont u?', x: 'Usted krijgt de vorm van él/ella: vive.', tag: 'pres-regular' },
      { t: 'cloze', s: 'Nosotros ___ español los martes.', h: 'estudiar', a: ['estudiamos'], nl: 'Wij studeren Spaans op dinsdag.', tag: 'pres-regular' },
      { t: 'cloze', s: '¿___ usted inglés?', h: 'hablar', a: ['Habla'], nl: 'Spreekt u Engels?', tag: 'pres-regular' }
    ]
  });

  // A1 · 7: stamwisselaars met usted / ustedes
  X('a1-07', {
    ex: [
      { t: 'cloze', s: '¿Qué ___ usted?', h: 'recomendar', a: ['recomienda'], nl: 'Wat raadt u aan?', x: 'Recomendar: e → ie (recomiendo, recomienda), maar nosotros recomendamos.', tag: 'stem-change' },
      { t: 'cloze', s: '¿Qué ___ ustedes?', h: 'recomendar', a: ['recomiendan'], nl: 'Wat raden jullie aan?', tag: 'stem-change' },
      { t: 'cloze', s: 'Te ___ los tacos al pastor.', h: 'recomendar, yo', a: ['recomiendo'], nl: 'Ik raad je de tacos al pastor aan.', tag: 'stem-change' },
      { t: 'cloze', s: 'Ella ___ comer tacos.', h: 'preferir', a: ['prefiere'], nl: 'Zij eet liever taco’s.', tag: 'stem-change' },
      { t: 'cloze', s: 'Nosotros ___ a las ocho.', h: 'empezar', a: ['empezamos'], nl: 'Wij beginnen om acht uur.', x: 'Bij nosotros geen ie: empezamos.', tag: 'stem-change' },
      { t: 'tr', nl: 'Wat raadt u aan?', a: ['¿Qué recomienda?', '¿Qué me recomienda?', '¿Qué recomienda usted?', '¿Usted qué recomienda?'], tag: 'stem-change' }
    ]
  });

  // A2 · 12: que na creer / pensar / decir, está vs. esta
  X('a2-12', {
    grammar: [
      { t: 'Ik denk dát …: que mag niet weg', es: 'Creo que…',
        html: `<p>In het Nederlands mag <i>dat</i> soms weg (<i>ik denk het is mooi</i>). In het Spaans <b>nooit</b>: na <b>creer, pensar, decir, saber</b> komt altijd <b>que</b>: <i>Creo <b>que</b> la ciudad es bonita.</i></p>
<p>✍️ Let op het accent: <b>está</b> = is (estar) · <b>esta</b> = deze: <i>Creo que <b>esta</b> casa <b>está</b> limpia.</i></p>`,
        sum: 'Creo que…, pienso que…, dice que…: el «que» nunca se omite.' }
    ],
    ex: [
      { t: 'cloze', s: 'Creo ___ la ciudad es bonita.', a: ['que'], o: ['que', 'de', 'qué'], nl: 'Ik denk dat de stad mooi is.', x: 'Na creer altijd que (zonder accent).', tag: 'connectors' },
      { t: 'cloze', s: 'Mi amiga dice ___ aquí se vive bien.', a: ['que'], o: ['que', 'qué', 'lo'], nl: 'Mijn vriendin zegt dat je hier goed leeft.', tag: 'connectors' },
      { t: 'cloze', s: 'Pienso que la playa ___ muy tranquila hoy.', a: ['está'], o: ['está', 'esta', 'es'], nl: 'Ik denk dat het strand vandaag heel rustig is.', x: 'Está (met accent) = is; esta = deze.', tag: 'connectors' },
      { t: 'cloze', s: 'Creo que ___ casa es grande.', a: ['esta'], o: ['esta', 'está', 'este'], nl: 'Ik denk dat dit huis groot is.', x: 'Esta (zonder accent) = deze/dit, bij casa (vrouwelijk).', tag: 'connectors' },
      { t: 'tr', nl: 'Ik denk dat het mooi is.', a: ['Creo que es bonito.', 'Creo que está bonito.', 'Pienso que es bonito.', 'Creo que es bonita.', 'Creo que está bonita.', 'Creo que es lindo.'], tag: 'connectors' }
    ]
  });
  /* ---------- Lupe-rapport 24 nov, vijfde ronde ---------- */
  X('a1-04', { ex: [
    { t: 'cloze', s: 'Yo ___ en una ciudad grande.', h: 'vivir', a: ['vivo'], nl: 'Ik woon in een grote stad.', tag: 'conj' },
    { t: 'cloze', s: 'Nosotros ___ al centro en metro.', h: 'ir', a: ['vamos'], nl: 'Wij gaan met de metro naar het centrum.', tag: 'conj' },
    { t: 'cloze', s: 'Ustedes ___ muchos museos en su ciudad.', h: 'tener', a: ['tienen'], nl: 'Jullie hebben veel musea in jullie stad.', tag: 'conj' },
    { t: 'cloze', s: 'Tú ___ de Lima, ¿verdad?', h: 'ser', a: ['eres'], nl: 'Jij komt uit Lima, toch?', tag: 'conj' },
    { t: 'cloze', s: '¿Dónde ___ usted ahora?', h: 'estar', a: ['está'], nl: 'Waar bent u nu?', tag: 'conj' },
    { t: 'cloze', s: '¿Tú ___ al mercado hoy?', h: 'ir', a: ['vas'], nl: 'Ga jij vandaag naar de markt?', tag: 'conj' },
    { t: 'cloze', s: 'Mis amigos ___ en el barrio de San Telmo.', h: 'vivir', a: ['viven'], nl: 'Mijn vrienden wonen in de wijk San Telmo.', tag: 'conj' },
    { t: 'cloze', s: 'Yo no ___ carro, voy en bus.', h: 'tener', a: ['tengo'], nl: 'Ik heb geen auto, ik ga met de bus.', tag: 'conj' }
  ] });
  X('a1-02', { ex: [
    { t: 'cloze', s: 'Los ___ trabajan aquí.', h: 'doctor', a: ['doctores'], nl: 'De dokters werken hier.', x: 'Medeklinker aan het eind → -es.', tag: 'plural' },
    { t: 'cloze', s: 'Dos ___ hablan inglés.', h: 'profesor', a: ['profesores'], nl: 'Twee leraren spreken Engels.', tag: 'plural' },
    { t: 'cloze', s: 'Las ___ son simpáticas.', h: 'mujer', a: ['mujeres'], nl: 'De vrouwen zijn aardig.', tag: 'plural' },
    { t: 'cloze', s: 'Tres ___ viven en mi ciudad.', h: 'juez', a: ['jueces'], nl: 'Drie rechters wonen in mijn stad.', x: '-z wordt -ces: juez → jueces.', tag: 'plural' },
    { t: 'cloze', s: 'Mis ___ son cocineros.', h: 'amigo', a: ['amigos'], nl: 'Mijn vrienden zijn koks.', x: 'Klinker aan het eind → -s.', tag: 'plural' },
    { t: 'cloze', s: 'Ellos son ___.', h: 'alemán', a: ['alemanes'], nl: 'Zij zijn Duitsers.', x: 'Alemán → alemanes: het accent valt weg, want de klemtoon blijft op -ma-.', tag: 'plural' }
  ] });
  X('a1-03', { ex: [
    { t: 'cloze', s: '___ padres viven en Quito.', h: 'mijn', a: ['Mis'], nl: 'Mijn ouders wonen in Quito.', x: 'Meervoud (padres) → mis.', tag: 'possessive' },
    { t: 'cloze', s: 'Ella habla con ___ hermano.', h: 'haar', a: ['su'], nl: 'Zij praat met haar broer.', tag: 'possessive' },
    { t: 'cloze', s: 'Nosotros queremos mucho a ___ abuela.', h: 'onze', a: ['nuestra'], nl: 'Wij houden veel van onze oma.', x: 'Nuestro past zich aan: abuela → nuestra.', tag: 'possessive' },
    { t: 'cloze', s: 'Señor López, ¿cómo está ___ familia?', h: 'uw', a: ['su'], nl: 'Meneer López, hoe is het met uw familie?', tag: 'possessive' },
    { t: 'cloze', s: 'Ellos visitan a ___ tíos.', h: 'hun', a: ['sus'], nl: 'Zij bezoeken hun ooms en tantes.', tag: 'possessive' },
    { t: 'tr', nl: 'Is dat jouw hond?', a: ['¿Ese es tu perro?', '¿Es tu perro?'], tag: 'possessive' }
  ] });
  /* ---------- Lupe-rapport 25 nov (op basis van nieuwe fouten) ---------- */
  X('a1-04', {
    grammar: [
      { t: 'Beslisregel: está of hay?', es: '¿Está o hay? La regla',
        html: `<p>Kijk naar het woordje <b>vóór</b> het ding:</p>
<p>📍 <b>bepaald</b>: <i>el, la, los, las, mi, tu, ese, esa</i> of een <b>naam</b> → <b>está / están</b><br><i>El banco está cerca. Mis llaves están en la mesa. ¿Dónde está el museo Frida Kahlo?</i></p>
<p>✨ <b>onbepaald</b>: <i>un, una, unos</i>, een <b>getal</b>, <i>mucho/muchos</i> of <b>geen lidwoord</b> → <b>hay</b><br><i>Hay un banco cerca. Hay dos hoteles. ¿Hay baños aquí?</i></p>
<p>⚠️ <b>Uitzondering:</b> <i>hay</i> verandert nooit, ook niet bij meervoud: <i>hay un hotel · hay dos hoteles</i> (nooit <s>han</s> of <s>están dos hoteles</s>).</p>`,
        table: [['bepaald → está(n)', 'onbepaald → hay'], ['¿Dónde está el banco?', 'Hay un banco cerca.'], ['El museo está en el centro.', 'Hay un museo en el centro.'], ['Mis llaves están en la mesa.', 'Hay unas llaves en la mesa.'], ['Los baños están allí.', '¿Hay baños aquí?']],
        sum: 'El/la/mi + cosa → está. Un/una/número/nada → hay.' },
      { t: 'De los, a las: geen samentrekking in het meervoud', es: 'De los, a las',
        html: `<p>Samentrekken doe je <b>alleen bij el</b> (mannelijk enkelvoud): <i>al centro, del parque</i>.</p>
<p>⚠️ <b>Uitzondering</b> waar het vaak misgaat: in het <b>meervoud</b> blijft alles los: <i>cerca <b>de los</b> mercados · vamos <b>a las</b> playas</i> (nooit <s>dels</s> of <s>als</s>).</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['mannelijk', 'al centro · del parque', 'a los parques · de los mercados'], ['vrouwelijk', 'a la playa · de la plaza', 'a las playas · de las plazas']],
        sum: 'Al y del solo con «el». De los, de las, a los, a las: separados.' },
      { t: 'estar en llamarse in de presente', es: 'Estar y llamarse',
        html: `<p>Kijk naar de persoon in de zin en kies de vorm. Bij <b>llamarse</b> hoort er altijd een klein woordje vóór: <b>me, te, se, nos</b>.</p>
<p>⚠️ <b>Uitzondering</b> om op te letten: <i>usted</i> en <i>ustedes</i> krijgen de vorm van <i>él</i> en <i>ellos</i>: <i>usted está, usted se llama · ustedes están, ustedes se llaman</i>.</p>`,
        table: [['persoon', 'estar', 'llamarse'], ['yo', 'estoy', 'me llamo'], ['tú', 'estás', 'te llamas'], ['él / ella / usted', 'está', 'se llama'], ['nosotros', 'estamos', 'nos llamamos'], ['ellos / ellas / ustedes', 'están', 'se llaman']],
        sum: '¿Cómo te llamas? — Me llamo Mark. ¿Dónde estás? — Estoy en la plaza.' }
    ],
    ex: [
      // hay / está: woordtegels en vertalen
      { t: 'order', s: '¿Dónde está el banco?', nl: 'Waar is de bank?', tag: 'hay-estar' },
      { t: 'order', s: 'Hay un banco cerca.', nl: 'Er is een bank in de buurt.', tag: 'hay-estar' },
      { t: 'order', s: 'Mis llaves están en la mesa.', nl: 'Mijn sleutels liggen op tafel.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Zijn er hier toiletten?', a: ['¿Hay baños aquí?', '¿Hay baños por aquí?', '¿Aquí hay baños?'], tag: 'hay-estar' },
      { t: 'tr', nl: 'Het museum is in het centrum.', a: ['El museo está en el centro.'], x: 'El museo (bepaald) → está.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Er zijn twee hotels.', a: ['Hay dos hoteles.'], x: 'Hay blijft hay, ook bij meervoud.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Er is een apotheek tegenover de bank.', a: ['Hay una farmacia enfrente del banco.', 'Enfrente del banco hay una farmacia.'], tag: 'hay-estar' },
      // al / del: meervoud en centro
      { t: 'cloze', s: 'Vamos ___ centro.', a: ['al'], nl: 'We gaan naar het centrum.', tag: 'contractions' },
      { t: 'cloze', s: 'La farmacia está lejos ___ parque.', a: ['del'], nl: 'De apotheek is ver van het park.', tag: 'contractions' },
      { t: 'cloze', s: 'Vamos ___ playas de Cartagena.', a: ['a las'], nl: 'We gaan naar de stranden van Cartagena.', x: 'Meervoud: geen samentrekking, a las.', tag: 'contractions' },
      { t: 'cloze', s: 'Es la casa ___ señor López.', a: ['del'], nl: 'Het is het huis van meneer López.', x: 'De + el señor = del señor.', tag: 'contractions' },
      { t: 'cloze', s: 'El hostal está cerca ___ museos.', a: ['de los'], nl: 'Het hostel is dicht bij de musea.', tag: 'contractions' },
      { t: 'cloze', s: 'Voy ___ tiendas del centro.', a: ['a las'], nl: 'Ik ga naar de winkels in het centrum.', tag: 'contractions' },
      { t: 'cloze', s: 'La catedral está enfrente ___ plaza.', a: ['de la'], nl: 'De kathedraal is tegenover het plein.', tag: 'contractions' },
      // estar / llamarse
      { t: 'cloze', s: 'Tú ___ en la plaza.', h: 'estar', a: ['estás'], nl: 'Jij bent op het plein.', tag: 'conj' },
      { t: 'cloze', s: 'Ellos ___ en el hotel.', h: 'estar', a: ['están'], nl: 'Zij zijn in het hotel.', tag: 'conj' },
      { t: 'cloze', s: 'Usted ___ cerca del banco.', h: 'estar', a: ['está'], nl: 'U bent dicht bij de bank.', x: 'Usted → vorm van él/ella: está.', tag: 'conj' },
      { t: 'cloze', s: 'Nosotros ___ en el centro.', h: 'estar', a: ['estamos'], nl: 'Wij zijn in het centrum.', tag: 'conj' },
      { t: 'cloze', s: '¿Cómo ___ (tú)?', h: 'llamarse', a: ['te llamas'], nl: 'Hoe heet je?', x: 'Llamarse heeft altijd me/te/se: te llamas.', tag: 'conj' },
      { t: 'cloze', s: 'Yo me ___ Mark.', h: 'llamarse', a: ['llamo'], nl: 'Ik heet Mark.', tag: 'conj' },
      { t: 'cloze', s: '¿Cómo ___ usted?', h: 'llamarse', a: ['se llama'], nl: 'Hoe heet u?', tag: 'conj' },
      { t: 'cloze', s: 'Mis amigas ___ Ana y Lucía.', h: 'llamarse', a: ['se llaman'], nl: 'Mijn vriendinnen heten Ana en Lucía.', tag: 'conj' },
      // hulp vragen
      { t: 'tr', nl: 'Pardon, kunt u me helpen?', a: ['Disculpe, ¿me puede ayudar?', 'Disculpe, ¿puede ayudarme?', 'Perdón, ¿me puede ayudar?', 'Perdón, ¿puede ayudarme?', 'Disculpe, ¿me podría ayudar?'], tag: 'vocab' }
    ]
  });
  X('a1-03', {
    grammar: [
      { t: 'Uno wordt un vóór een zelfstandig naamwoord', es: 'Ochenta y un años',
        html: `<p>Getallen bouw je met <b>tiental + y + eenheid</b>: <i>cuarenta y siete, setenta y seis</i>.</p>
<p>⚠️ <b>Uitzondering:</b> eindigt het getal op <b>uno</b> en komt er een (mannelijk) zelfstandig naamwoord achter, dan wordt het <b>un</b>: <i>ochenta y <b>un</b> años, veinti<b>ún</b> años, sesenta y <b>un</b> días</i>. Bij een vrouwelijk woord: <i>treinta y <b>una</b> casas</i>. Los getal (bij tellen): <i>ochenta y uno</i>.</p>`,
        sum: 'Ochenta y un años, treinta y una casas, contar: ochenta y uno.' }
    ],
    ex: [
      { t: 'cloze', s: 'Mi tío tiene ___ años. (47)', a: ['cuarenta y siete'], nl: 'Mijn oom is 47 jaar.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi abuela tiene ___ años. (81)', a: ['ochenta y un'], nl: 'Mijn oma is 81 jaar.', x: 'Uitzondering: vóór años wordt uno → un.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi padre tiene ___ años. (61)', a: ['sesenta y un'], nl: 'Mijn vader is 61 jaar.', x: 'Uitzondering: vóór años wordt uno → un.', tag: 'numbers' },
      { t: 'cloze', s: 'Mi tía tiene ___ años. (76)', a: ['setenta y seis'], nl: 'Mijn tante is 76 jaar.', tag: 'numbers' },
      { t: 'cloze', s: 'En mi calle hay ___ casas. (31)', a: ['treinta y una'], nl: 'In mijn straat staan 31 huizen.', x: 'Vrouwelijk woord (casas) → una.', tag: 'numbers' }
    ]
  });
  /* ---------- Lupe-rapport 25 nov, tweede ronde ---------- */
  X('a1-02', {
    grammar: [
      { t: 'Beroepen: mannelijk en vrouwelijk', es: 'Profesiones: masculino y femenino',
        html: `<p>De regel: <b>-o → -a</b> (<i>ingeniero → ingeniera</i>) en <b>-or → -ora</b> (<i>doctor → doctora, profesor → profesora</i>).</p>
<p>Woorden op <b>-ista</b> en <b>-e</b> blijven gelijk, alleen het lidwoord verandert: <i>el / la dentista, el / la periodista, el / la estudiante</i>.</p>
<p>⚠️ <b>Uitzondering:</b> <b>-tor → -triz</b> bij een paar woorden: <i>el actor → la actriz</i> (net als <i>el emperador → la emperatriz</i>). Niet <s>la actora</s>.</p>
<p>✍️ Spelling: <i>ingeniero</i> (niet <s>ingenieur</s>), <i>cocinero</i>, <i>abogado</i>, <i>médico</i>. Over iemand: <i><b>el</b> señor López es ingeniero</i>; over jezelf: <i>Soy cocinero</i> (zonder lidwoord).</p>`,
        table: [['mannelijk', 'vrouwelijk', ''], ['el ingeniero', 'la ingeniera', '-o → -a'], ['el doctor', 'la doctora', '-or → -ora'], ['el dentista', 'la dentista', '-ista: gelijk'], ['el estudiante', 'la estudiante', '-e: gelijk'], ['el actor', 'la actriz', '⚠️ -tor → -triz']],
        sum: 'Doctor → doctora; dentista no cambia; ¡ojo! actor → actriz.' }
    ],
    ex: [
      // -ma-woorden in een zin: lidwoord + woord samen
      { t: 'cloze', s: '___ problema es difícil.', a: ['El'], nl: 'Het probleem is moeilijk.', x: '-ma = bijna altijd el: el problema.', tag: 'gender' },
      { t: 'cloze', s: 'Es ___ tema interesante.', a: ['un'], nl: 'Het is een interessant onderwerp.', x: 'El tema → un tema.', tag: 'gender' },
      { t: 'cloze', s: '___ idioma español es bonito.', a: ['El'], nl: 'De Spaanse taal is mooi.', tag: 'gender' },
      { t: 'cloze', s: 'Es un tema muy ___.', h: 'complicado / complicada', a: ['complicado'], nl: 'Het is een heel ingewikkeld onderwerp.', x: 'Tema is mannelijk (-ma), dus ook het bijvoeglijk naamwoord: complicado.', tag: 'gender' },
      { t: 'cloze', s: '___ programa de hoy es corto.', a: ['El'], nl: 'Het programma van vandaag is kort.', tag: 'gender' },
      // vrouwelijke beroepen
      { t: 'mc', q: 'Vrouwelijke vorm van «el doctor»:', o: ['la doctora', 'la doctriz', 'la doctor'], x: '-or → -ora.', tag: 'gender' },
      { t: 'mc', q: 'Vrouwelijke vorm van «el dentista»:', o: ['la dentista', 'la dentisto', 'la dentistra'], x: '-ista blijft gelijk.', tag: 'gender' },
      { t: 'mc', q: '«Zij is actrice.»', o: ['Es actriz.', 'Es actora.', 'Es una actor.'], x: '⚠️ Uitzondering: actor → actriz.', tag: 'gender' },
      { t: 'mc', q: 'Vrouwelijke vorm van «el profesor»:', o: ['la profesora', 'la profesriz', 'la profesor'], tag: 'gender' },
      // beroepszinnen: woordtegels en vertalen
      { t: 'order', s: 'El señor López es ingeniero.', nl: 'Meneer López is ingenieur.', tag: 'articles' },
      { t: 'order', s: 'La señora Díaz es doctora.', nl: 'Mevrouw Díaz is dokter.', tag: 'articles' },
      { t: 'tr', nl: 'Mijn moeder is advocaat.', a: ['Mi madre es abogada.', 'Mi mamá es abogada.'], x: 'Vrouw → abogada, zonder lidwoord.', tag: 'articles' },
      { t: 'tr', nl: 'Ik ben kok.', a: ['Soy cocinero.', 'Soy cocinera.', 'Yo soy cocinero.', 'Yo soy cocinera.'], tag: 'articles' }
    ],
    say: [['El señor López es ingeniero.', 'Meneer López is ingenieur.'], ['Mi madre es abogada.', 'Mijn moeder is advocaat.'], ['La señora Díaz es doctora.', 'Mevrouw Díaz is dokter.']]
  });
  X('a1-04', {
    ex: [
      { t: 'cloze', s: 'El libro ___ encima de la mesa.', a: ['está'], o: ['está', 'hay', 'es'], nl: 'Het boek ligt op tafel.', x: 'El libro (bepaald) → está, ook met een voorzetsel erna.', tag: 'prepositions' },
      { t: 'cloze', s: '___ un banco cerca de aquí.', a: ['Hay'], o: ['Hay', 'Está', 'Es'], nl: 'Er is hier dichtbij een bank.', tag: 'prepositions' },
      { t: 'cloze', s: 'Mi carro ___ detrás del hotel.', a: ['está'], o: ['está', 'hay', 'es'], nl: 'Mijn auto staat achter het hotel.', tag: 'prepositions' },
      { t: 'cloze', s: 'La catedral ___ al lado del parque.', a: ['está'], o: ['está', 'hay', 'es'], nl: 'De kathedraal ligt naast het park.', tag: 'prepositions' },
      { t: 'cloze', s: '___ una farmacia enfrente del banco.', a: ['Hay'], o: ['Hay', 'Está', 'Es'], nl: 'Er is een apotheek tegenover de bank.', tag: 'prepositions' },
      { t: 'order', s: 'Hay un hotel enfrente de la catedral.', nl: 'Er is een hotel tegenover de kathedraal.', tag: 'prepositions' }
    ],
    // ook als dictee (Práctica › Luisteren) en spreekoefening
    say: [['Sí, hay una enfrente del banco.', 'Ja, er is er een tegenover de bank.'], ['La catedral está enfrente del parque.', 'De kathedraal ligt tegenover het park.'], ['¿Me puede ayudar, por favor?', 'Kunt u me helpen, alstublieft?'], ['Hay un hotel enfrente de la catedral.', 'Er is een hotel tegenover de kathedraal.']]
  });
  // Lupe 25 nov: hay un/una + enfrente de en ¿Dónde está/están…? helemaal zelf typen
  X('a1-04', {
    ex: [
      { t: 'tr', nl: 'Er is een apotheek tegenover het hotel.', a: ['Hay una farmacia enfrente del hotel.', 'Enfrente del hotel hay una farmacia.'], x: 'Hay + una (onbepaald). Tegenover = enfrente de, en de + el = del. Zonder «el frente».', tag: 'hay-estar' },
      { t: 'tr', nl: 'Is er een bank hier in de buurt?', a: ['¿Hay un banco cerca de aquí?', '¿Hay un banco por aquí?', '¿Hay un banco cerca?'], tag: 'hay-estar' },
      { t: 'tr', nl: 'Ja, er is er een tegenover het plein.', a: ['Sí, hay uno enfrente de la plaza.'], x: '⚠️ Uitzondering: zonder zelfstandig naamwoord erna wordt un → uno («er is er een» = hay uno, voor el banco). Bij een vrouwelijk woord blijft het una: hay una.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Nee, er is geen restaurant tegenover het park.', a: ['No, no hay ningún restaurante enfrente del parque.', 'No, no hay restaurante enfrente del parque.', 'No, no hay restaurantes enfrente del parque.'], x: 'Geen = no hay (ningún) …: twee keer no is in het Spaans gewoon goed.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Er zijn twee winkels tegenover de kerk.', a: ['Hay dos tiendas enfrente de la iglesia.', 'Enfrente de la iglesia hay dos tiendas.'], x: 'Ook in het meervoud blijft het hay. La iglesia → de la (niet del).', tag: 'hay-estar' },
      { t: 'tr', nl: 'Waar zijn de taxi\'s?', a: ['¿Dónde están los taxis?'], x: 'Plaats = estar; los taxis is meervoud → están. Dónde krijgt een accent in een vraag.', tag: 'ser-estar' },
      { t: 'tr', nl: 'Waar is jouw huis?', a: ['¿Dónde está tu casa?'], x: 'Waar iets is = estar, nooit «¿dónde es?». Dónde met accent.', tag: 'ser-estar' },
      { t: 'tr', nl: 'Waar is het busstation?', a: ['¿Dónde está la estación de autobuses?', '¿Dónde está la terminal de autobuses?', '¿Dónde está la estación de buses?', '¿Dónde está la terminal de buses?'], tag: 'ser-estar' },
      { t: 'tr', nl: 'Waar is mijn telefoon?', a: ['¿Dónde está mi celular?', '¿Dónde está mi teléfono?'], x: 'In Latijns-Amerika zeg je meestal celular (in Spanje móvil).', tag: 'ser-estar' }
    ],
    say: [['Sí, hay uno enfrente de la plaza.', 'Ja, er is er een tegenover het plein.'], ['¿Dónde están los taxis?', 'Waar zijn de taxi\'s?']]
  });
  /* ---------- Lupe-rapport 27 nov, achtste ronde ---------- */
  S.reworked = S.reworked.concat([
    { tag: 'contractions', unit: 'a1-04', v: '1.69.1', date: '2026-11-26T23:51:00Z', what: 'tip «lado de» → al lado del, «a» → al; 9 typoefeningen waarin je de hele combinatie typt (al lado del, al, del, al lado de la)' },
    { tag: 'hay-estar', unit: 'a1-04', v: '1.69.1', date: '2026-11-26T23:51:00Z', what: '5 typoefeningen hay of está met het lidwoord als hint (un/una → hay, el/la → está), «centro» (niet centrum) en ¿Dónde está…? met accent' },
    { tag: 'conj', unit: 'a1-04', v: '1.69.1', date: '2026-11-26T23:51:00Z', what: 'ser en llamarse met nosotros/ustedes/usted in de zin: somos/son, nos llamamos/se llaman/se llama, 9 oefeningen in a1-01 en a1-04' },
    { tag: 'ser', unit: 'a1-01', v: '1.69.1', date: '2026-11-26T23:51:00Z', what: 'nosotros somos ↔ ustedes son, ustedes se llaman ↔ usted se llama, 6 invuloefeningen' },
    { tag: 'prepositions', unit: 'a1-04', v: '1.69.1', date: '2026-11-26T23:51:00Z', what: 'a la derecha / a la izquierda / debajo de / enfrente de als hele uitdrukking: uitleg, 8 typoefeningen; alleen «derecha» typen geeft de hint «a la …»' },
    { ids: ['w|a1-04|25', 'w|a1-04|41'], v: '1.69.1', date: '2026-11-26T23:51:00Z', what: 'voorbeeldzinnen a la derecha en debajo de, hint «a la …» / «… de» als een stukje ontbreekt' },
    { ids: ['w|a1-01|6'], v: '1.69.1', date: '2026-11-26T23:51:00Z', what: '«¿Cómo estás?» telt goed bij «hoe is het?» (ook zonder accenten en vraagtekens)' }
  ]);
  X('a1-01', { ex: [
    // het onderwerp staat in de zin: kies/typ de goede vorm
    { t: 'cloze', s: 'Nosotros ___ de Perú.', a: ['somos'], o: ['somos', 'son', 'es'], nl: 'Wij komen uit Peru.', x: 'Nosotros (wij) → somos. Son hoort bij ustedes / ellos.', tag: 'ser' },
    { t: 'cloze', s: 'Ustedes ___ de Chile, ¿no?', a: ['son'], o: ['son', 'somos', 'eres'], nl: 'Jullie komen uit Chili, toch?', x: 'Ustedes gebruikt dezelfde vorm als ellos: son. In Latijns-Amerika is ustedes zowel «jullie» als «u» (meervoud).', tag: 'ser' },
    { t: 'cloze', s: 'Nosotros nos ___ Ana y Luis.', h: 'llamarse', a: ['llamamos'], nl: 'Wij heten Ana en Luis.', x: 'Nosotros → nos llamamos (de uitgang -amos, niet «llamos»).', tag: 'ser' },
    { t: 'cloze', s: 'Ella se ___ Marta.', h: 'llamarse', a: ['llama'], nl: 'Zij heet Marta.', tag: 'ser' },
    { t: 'cloze', s: 'Ustedes se ___ López, ¿verdad?', a: ['llaman'], o: ['llaman', 'llama', 'llamamos'], nl: 'Jullie heten López, toch?', x: 'Ustedes = meer personen → se llaman. Eén persoon met usted → se llama.', tag: 'ser' },
    { t: 'cloze', s: 'Usted se ___ Daniel, ¿verdad?', h: 'llamarse', a: ['llama'], nl: 'U heet Daniel, toch?', x: 'Usted is één persoon en krijgt de vorm van él/ella: se llama.', tag: 'tu-usted' }
  ] });
  X('a1-04', {
    grammar: [
      { t: 'Tip: al lado del en al', es: 'Al lado del banco',
        html: `<p>Kijk wat er <b>vóór el</b> staat:</p>
<p>👉 <b>lado de</b> + el → <b>al lado del</b>: <i>La panadería está <b>al lado del</b> banco.</i> Hier zitten er dus twee in: <i>al</i> (vast in <i>al lado</i>) en <i>del</i> (de + el).</p>
<p>👉 <b>a</b> + el → <b>al</b>: <i>Voy <b>al</b> mercado.</i> En <b>de</b> + el → <b>del</b>: <i>después <b>del</b> trabajo.</i></p>
<p>Bij <b>la</b> trek je niets samen, maar <i>al lado</i> blijft: <i>al lado <b>de la</b> plaza</i>.</p>`,
        ex: [['La panadería está al lado del banco.', 'De bakkerij is naast de bank.'], ['Vamos al cine después del trabajo.', 'We gaan na het werk naar de bioscoop.']],
        sum: 'Lado de + el = al lado del. A + el = al.' },
      { t: 'Plaatswoorden: altijd de hele uitdrukking', es: 'A la derecha, debajo de, enfrente de',
        html: `<p>Deze woorden hebben vaste kleine woordjes erbij. Leer ze <b>als één geheel</b>:</p>
<p>✅ <b>a la</b> derecha / <b>a la</b> izquierda (niet alleen <s>derecha</s>), <b>debajo de</b> (onder, met <i>de</i>; <s>abajo</s> = beneden), <b>enfrente de</b> (tegenover, aan elkaar).</p>
<p>Komt er <i>el</i> achter, dan wordt <i>de + el</i> weer <b>del</b>: <i>debajo <b>del</b> carro, enfrente <b>del</b> hotel</i>.</p>`,
        table: [['uitdrukking', 'betekenis', 'voorbeeld'], ['a la derecha', 'rechts', 'El banco está a la derecha.'], ['a la izquierda', 'links', 'Gire a la izquierda.'], ['debajo de', 'onder', 'El gato está debajo de la mesa.'], ['enfrente de', 'tegenover', 'Hay una tienda enfrente del hotel.']],
        sum: 'A la derecha, a la izquierda, debajo de, enfrente de: siempre completos.' }
    ],
    ex: [
      // al / del: de hele combinatie zelf typen
      { t: 'cloze', s: 'La panadería está ___ banco.', h: 'naast', a: ['al lado del'], nl: 'De bakkerij is naast de bank.', x: 'Al lado de + el banco → al lado del banco.', tag: 'contractions' },
      { t: 'cloze', s: 'Voy ___ mercado.', h: 'naar de', a: ['al'], nl: 'Ik ga naar de markt.', x: 'A + el = al.', tag: 'contractions' },
      { t: 'cloze', s: 'El hotel está ___ museo.', h: 'naast', a: ['al lado del'], nl: 'Het hotel is naast het museum.', tag: 'contractions' },
      { t: 'cloze', s: 'La parada está ___ plaza.', h: 'naast', a: ['al lado de la'], nl: 'De halte is naast het plein.', x: 'La plaza is vrouwelijk: de la, géén samentrekking. Al lado blijft wel al.', tag: 'contractions' },
      { t: 'tr', nl: 'De bakkerij is naast de bank.', a: ['La panadería está al lado del banco.'], x: 'Lado de + el → al lado del.', tag: 'contractions' },
      { t: 'tr', nl: 'Ik ga naar de markt.', a: ['Voy al mercado.'], x: 'A + el = al.', tag: 'contractions' },
      { t: 'tr', nl: 'Het hotel is naast het museum.', a: ['El hotel está al lado del museo.'], tag: 'contractions' },
      { t: 'tr', nl: 'De halte is naast het park.', a: ['La parada está al lado del parque.'], tag: 'contractions' },
      { t: 'tr', nl: 'We gaan na het werk naar de bioscoop.', a: ['Vamos al cine después del trabajo.', 'Después del trabajo vamos al cine.'], x: 'Al cine (a + el) en después del trabajo (de + el).', tag: 'contractions' },
      // hay of está: het lidwoord is de hint
      { t: 'cloze', s: '¿___ una farmacia por aquí?', h: 'hay / está · let op: una', a: ['Hay'], nl: 'Is er hier een apotheek?', x: 'Una = onbepaald (iets nieuws) → hay.', tag: 'hay-estar' },
      { t: 'cloze', s: 'El mercado ___ en el centro.', h: 'hay / está · let op: el', a: ['está'], nl: 'De markt is in het centrum.', x: 'El mercado = bepaald → está. Let op: centro, niet «centrum».', tag: 'hay-estar' },
      { t: 'cloze', s: '¿Dónde ___ la parada de bus?', h: 'hay / está · let op: la', a: ['está'], nl: 'Waar is de bushalte?', x: '¿Dónde está + el/la …? Dónde en está allebei met accent.', tag: 'hay-estar' },
      { t: 'cloze', s: '___ un banco cerca del parque.', h: 'hay / está · let op: un', a: ['Hay'], nl: 'Er is een bank bij het park.', x: 'Un = onbepaald → hay.', tag: 'hay-estar' },
      { t: 'cloze', s: 'La catedral ___ enfrente del museo.', h: 'hay / está · let op: la', a: ['está'], nl: 'De kathedraal is tegenover het museum.', tag: 'hay-estar' },
      { t: 'tr', nl: 'Er is een markt in het centrum.', a: ['Hay un mercado en el centro.', 'En el centro hay un mercado.'], x: 'Un mercado → hay. In het Spaans: el centro (niet «centrum»).', tag: 'hay-estar' },
      { t: 'tr', nl: 'Waar is de markt?', a: ['¿Dónde está el mercado?'], x: 'Dónde krijgt in een vraag altijd een accent.', tag: 'ser-estar' },
      // ser / llamarse met het onderwerp in de zin
      { t: 'cloze', s: 'Nosotros ___ turistas holandeses.', h: 'ser', a: ['somos'], nl: 'Wij zijn Nederlandse toeristen.', x: 'Nosotros → somos. Son is voor ustedes / ellos.', tag: 'conj' },
      { t: 'cloze', s: 'Ustedes ___ de aquí, ¿verdad?', h: 'ser', a: ['son'], nl: 'Jullie zijn van hier, toch?', tag: 'conj' },
      { t: 'cloze', s: 'Nosotros nos ___ Mark y Ana.', h: 'llamarse', a: ['llamamos'], nl: 'Wij heten Mark en Ana.', x: 'Nos llamamos: -amos bij nosotros.', tag: 'conj' },
      // plaatswoorden: de hele uitdrukking typen
      { t: 'cloze', s: 'El banco está ___.', h: 'rechts', a: ['a la derecha'], nl: 'De bank is rechts.', x: 'Altijd met a la: a la derecha.', tag: 'prepositions' },
      { t: 'cloze', s: 'El gato está ___ la mesa.', h: 'onder', a: ['debajo de'], nl: 'De kat zit onder de tafel.', x: 'Debajo de = onder (met de). Abajo = beneden.', tag: 'prepositions' },
      { t: 'cloze', s: 'Hay una tienda ___ hotel.', h: 'tegenover', a: ['enfrente del'], nl: 'Er is een winkel tegenover het hotel.', x: 'Enfrente de (aan elkaar) + el hotel → enfrente del hotel.', tag: 'prepositions' },
      { t: 'tr', nl: 'De bank is rechts.', a: ['El banco está a la derecha.'], x: 'Rechts = a la derecha, de hele uitdrukking.', tag: 'prepositions' },
      { t: 'tr', nl: 'De kat zit onder de tafel.', a: ['El gato está debajo de la mesa.'], tag: 'prepositions' },
      { t: 'tr', nl: 'Er is een winkel tegenover het hotel.', a: ['Hay una tienda enfrente del hotel.', 'Enfrente del hotel hay una tienda.'], tag: 'prepositions' },
      { t: 'tr', nl: 'Ga links af. (u)', a: ['Gire a la izquierda.', 'Doble a la izquierda.', 'Voltee a la izquierda.'], x: 'Links = a la izquierda. Voltee hoor je vooral in Mexico.', tag: 'prepositions' },
      { t: 'tr', nl: 'De hond ligt onder de auto.', a: ['El perro está debajo del carro.', 'El perro está debajo del auto.'], x: 'Debajo de + el carro → debajo del carro. In Latijns-Amerika: el carro (of el auto).', tag: 'prepositions' }
    ],
    say: [['La panadería está al lado del banco.', 'De bakkerij is naast de bank.'], ['El banco está a la derecha.', 'De bank is rechts.'], ['El perro está debajo del carro.', 'De hond ligt onder de auto.']]
  });
})(window.SPT);
