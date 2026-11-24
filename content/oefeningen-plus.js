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
  S.reworked = (S.reworked || []).concat([
    { tag: 'contractions', unit: 'a1-04', v: '1.63.1', date: '2026-11-24', what: 'uitleg al/del + uitzondering bij namen, ±20 invul-, meerkeuze- en vertaaloefeningen' },
    { tag: 'hay-estar', unit: 'a1-04', v: '1.63.1', date: '2026-11-24', what: 'korte regel hay vs. estar (en nooit ser voor een plek) met contrastparen, ±17 oefeningen' },
    { tag: 'articles', unit: 'a1-02', v: '1.63.1', date: '2026-11-24', what: 'uitleg wél/géén lidwoord (beroep na ser, na gustar), ±15 oefeningen in a1-02 en a1-06' },
    { tag: 'gender', unit: 'a1-02', v: '1.63.1', date: '2026-11-24', what: 'lijstje woorden op -ma (el problema, el idioma…) met oefeningen' },
    { tag: 'adj-agree', unit: 'a1-03', v: '1.62.0', date: '2026-11-24', what: 'uitleg bijvoeglijke naamwoorden in het meervoud, 8 oefeningen' },
    { tag: 'numbers', unit: 'a1-03', v: '1.63.1', date: '2026-11-24', what: 'uitleg getallen 30–99 (sesenta/setenta), 12 oefeningen' },
    { tag: 'weather', unit: 'a1-10', v: '1.62.0', date: '2026-11-24', what: 'uitleg hace bij het weer, oefeningen' },
    { tag: 'ir-a', unit: 'a1-10', v: '1.62.0', date: '2026-11-24', what: 'ir a + infinitief, 7 oefeningen' },
    { tag: 'questions', unit: 'a1-10', v: '1.62.0', date: '2026-11-24', what: 'cuánto/cuánta/cuántos/cuántas, 7 oefeningen' },
    { ids: ['w|a1-01|17'], v: '1.62.0', date: '2026-11-24', what: '«mucho gusto» telt goed' },
    { ids: ['w|a1-03|32', 'w|a1-03|37', 'w|a1-03|47', 'w|a1-03|48'], v: '1.63.1', date: '2026-11-24', what: 'suegro, divorciado, carnal en ñaña in voorbeeldzinnen geoefend' }
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
})(window.SPT);
