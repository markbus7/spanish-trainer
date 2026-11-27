/* Duits voor Nederlandstaligen — niveau B1, units 1–5 (uitleg in het Nederlands). Opzet: zie a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'de-obwohl': 'obwohl en trotzdem', 'de-meinung': 'je mening geven', 'de-relativ': 'betrekkelijke bijzin (der, die, das)', 'de-relativ-dat': 'betrekkelijke bijzin met derde naamval / voorzetsel',
    'de-konj2': 'Konjunktiv II: wäre, hätte, würde (onwerkelijk)', 'de-wennirreal': 'wenn ik … zou (onwerkelijke voorwaarde)', 'de-passiv': 'lijdende vorm (wird gemacht)', 'de-passiv-praet': 'lijdende vorm verleden (wurde gemacht)',
    'de-praet': 'Präteritum (verleden tijd in verhalen)', 'de-praet-stark': 'sterke werkwoorden in het Präteritum'
  });

  /* ───────────────────────── B1 · 1 ───────────────────────── */
  U({
    id: 'de-b1-01', level: 'B1', icon: '💬', title: 'Meiner Meinung nach', nl: 'Je mening geven en tegenwerpen',
    goals: ['Je mening geven en onderbouwen', 'Het eens of oneens zijn', 'Een tegenstelling uitdrukken met obwohl en trotzdem', 'Het verschil tussen bijzin en hoofdzin toepassen'],
    vocab: [
      ['die Meinung', 'de mening'], ['meiner Meinung nach', 'naar mijn mening'], ['der Grund', 'de reden'], ['das Argument', 'het argument'], ['der Vorschlag', 'het voorstel'], ['zustimmen', 'het eens zijn met'],
      ['widersprechen', 'tegenspreken'], ['überzeugen', 'overtuigen'], ['behaupten', 'beweren'], ['zweifeln', 'twijfelen'], ['Ich bin dafür / dagegen.', 'Ik ben voor / tegen.'], ['Da hast du recht.', 'Daar heb je gelijk in.'],
      ['Das sehe ich anders.', 'Dat zie ik anders.'], ['einerseits … andererseits', 'enerzijds … anderzijds'], ['obwohl', 'hoewel'], ['trotzdem', 'toch / desondanks'], ['deshalb', 'daarom'], ['außerdem', 'bovendien'],
      ['allerdings', 'echter / wel'], ['eigentlich', 'eigenlijk'], ['die Erfahrung', 'de ervaring'], ['der Vorteil', 'het voordeel'], ['der Nachteil', 'het nadeel'], ['sinnvoll', 'zinvol'], ['übertrieben', 'overdreven'],
      ['die Gesellschaft', 'de samenleving']
    ],
    grammar: [
      { t: 'obwohl en trotzdem', es: 'obwohl und trotzdem',
        html: `<p><b>Obwohl</b> (hoewel) en <b>trotzdem</b> (toch) drukken dezelfde tegenstelling uit, maar ze horen bij een ander zinsdeel en geven een <b>andere woordvolgorde</b>.</p>
<p><b>Obwohl</b> is een voegwoord en begint een <b>bijzin</b>: het werkwoord gaat naar het einde. <i><b>Obwohl</b> es <b>regnet</b>, gehe ich spazieren.</i></p>
<p><b>Trotzdem</b> is een bijwoord en staat in een <b>hoofdzin</b> op de eerste plaats; daarna komt meteen het werkwoord. <i>Es regnet. <b>Trotzdem gehe</b> ich spazieren.</i></p>
<p>Hetzelfde verschil bestaat bij <b>weil</b> (bijzin) en <b>deshalb</b> (hoofdzin): <i>Ich bleibe zu Hause, <b>weil</b> ich krank <b>bin</b>.</i> ↔ <i>Ich bin krank. <b>Deshalb bleibe</b> ich zu Hause.</i></p>
<p><b>Let op:</b> het Nederlandse <i>toch</i> is niet altijd <i>trotzdem</i>. Als stopwoordje (<i>Je komt toch?</i>) is het <b>doch</b>: <i>Du kommst doch?</i></p>`,
        table: [['', 'woordsoort', 'werkwoord', 'voorbeeld'], ['obwohl', 'voegwoord', 'aan het einde', 'Obwohl er müde ist, arbeitet er.'], ['trotzdem', 'bijwoord', 'op plaats 2', 'Er ist müde. Trotzdem arbeitet er.'], ['weil', 'voegwoord', 'aan het einde', 'Weil er müde ist, schläft er.'], ['deshalb', 'bijwoord', 'op plaats 2', 'Er ist müde. Deshalb schläft er.']],
        sum: 'Obwohl es regnet, gehe ich. Es regnet. Trotzdem gehe ich.',
        ex: [['Obwohl das Auto alt ist, fährt es noch gut.', 'Hoewel de auto oud is, rijdt hij nog goed.'], ['Das Ticket war teuer. Trotzdem habe ich es gekauft.', 'Het kaartje was duur. Toch heb ik het gekocht.'], ['Ich habe keine Zeit, deshalb komme ich nicht.', 'Ik heb geen tijd, daarom kom ik niet.']] },
      { t: 'Je mening geven', es: 'Die eigene Meinung sagen',
        html: `<p>Vaste zinnen om je mening te geven: <b>Ich finde, dass …</b>, <b>Ich denke, dass …</b>, <b>Ich bin der Meinung, dass …</b>, <b>Meiner Meinung nach …</b></p>
<p><b>Uitzondering:</b> bij <i>meiner Meinung nach</i> staat het voorzetsel <b>achter</b> het zelfstandig naamwoord, terwijl <i>nach</i> normaal ervoor staat (<i>nach dem Essen</i>). <b>Waarom?</b> Het is een versteende uitdrukking uit ouder Duits, waarin <i>nach</i> in de betekenis «volgens» vaker achteraan stond; je ziet dat ook nog in <i>dem Bericht nach</i>.</p>
<p>Na <i>Meiner Meinung nach</i> volgt <b>meteen het werkwoord</b> (geen komma, geen dass): <i>Meiner Meinung nach <b>ist</b> das falsch.</i></p>
<p><b>Uitzondering:</b> <i>zustimmen</i> en <i>widersprechen</i> krijgen de <b>derde naamval</b>: <i>Ich stimme <b>dir</b> zu. Da muss ich <b>Ihnen</b> widersprechen.</i> <b>Waarom?</b> Je geeft je instemming of tegenspraak «aan» iemand; die persoon is ontvanger.</p>
<p>Valse vriend: <b>Ich meine</b> = ik bedoel / ik vind. <i>Ik meen het</i> = <b>Ich meine es ernst.</b></p>`,
        table: [['je mening', 'het eens zijn', 'het oneens zijn'], ['Ich finde, dass …', 'Das stimmt.', 'Das stimmt nicht.'], ['Meiner Meinung nach …', 'Da hast du recht.', 'Das sehe ich anders.'], ['Ich bin der Meinung, dass …', 'Ich stimme dir zu.', 'Da muss ich widersprechen.'], ['Ich glaube, dass …', 'Genau!', 'Ich bin nicht sicher.']],
        ex: [['Meiner Meinung nach sind Handys in der Schule ein Problem.', 'Naar mijn mening zijn telefoons op school een probleem.'], ['Da stimme ich dir zu, aber es gibt auch Vorteile.', 'Daarin ben ik het met je eens, maar er zijn ook voordelen.'], ['Einerseits ist es praktisch, andererseits ist es teuer.', 'Enerzijds is het praktisch, anderzijds is het duur.']] }
    ],
    dialogue: {
      t: 'Tempolimit auf der Autobahn?', place: 'Hannover 🇩🇪',
      lines: [
        ['Anna', 'Hast du gelesen? Es gibt wieder eine Diskussion über ein Tempolimit auf der Autobahn.', 'Heb je het gelezen? Er is weer een discussie over een snelheidslimiet op de snelweg.'],
        ['Markus', 'Ja. Ich bin dagegen. Meiner Meinung nach fahren die meisten Leute vernünftig.', 'Ja. Ik ben tegen. Naar mijn mening rijden de meeste mensen verstandig.'],
        ['Anna', 'Das sehe ich anders. Obwohl es viele Unfälle gibt, fahren manche immer noch 200.', 'Dat zie ik anders. Hoewel er veel ongelukken zijn, rijden sommigen nog steeds 200.'],
        ['Markus', 'Einerseits hast du recht. Andererseits sind die Autobahnen sehr sicher gebaut.', 'Enerzijds heb je gelijk. Anderzijds zijn de snelwegen heel veilig gebouwd.'],
        ['Anna', 'Trotzdem wäre ein Limit besser für das Klima. Außerdem ist es entspannter.', 'Toch zou een limiet beter zijn voor het klimaat. Bovendien is het relaxter.'],
        ['Markus', 'Da stimme ich dir zu. Aber ich glaube nicht, dass es viel bringt.', 'Daarin ben ik het met je eens. Maar ik geloof niet dat het veel oplevert.'],
        ['Anna', 'In den Niederlanden funktioniert es doch auch!', 'In Nederland werkt het toch ook!'],
        ['Markus', 'Stimmt. Du hast mich fast überzeugt. Trotzdem fahre ich gern schnell.', 'Klopt. Je hebt me bijna overtuigd. Toch rijd ik graag hard.']
      ],
      q: [
        { t: 'mc', q: 'Was denkt Markus am Anfang über ein Tempolimit?', o: ['Er ist dagegen.', 'Er ist dafür.', 'Er hat keine Meinung.'] },
        { t: 'mc', q: 'Welches Argument nennt Anna?', o: ['Ein Limit wäre besser für das Klima.', 'Die Autobahnen sind sicher gebaut.', 'Die meisten fahren vernünftig.'] },
        { t: 'mc', q: 'Was sagt Markus am Ende?', o: ['Anna hat ihn fast überzeugt.', 'Er verkauft sein Auto.', 'Er widerspricht Anna in allem.'] }
      ]
    },
    culture: { t: 'Direct zijn: Duitse discussiecultuur', html: `<p>Duitsers zijn in discussies vaak <b>direct</b> en zakelijk: <i>«Das stimmt nicht»</i> of <i>«Da muss ich widersprechen»</i> is geen ruzie, maar een normaal onderdeel van een gesprek. Kritiek op een idee is geen kritiek op de persoon.</p>
<p>Op tv zijn <b>Talkshows</b> over politiek heel populair, en op school leren kinderen een <b>Erörterung</b> schrijven: argumenten voor, argumenten tegen, eigen conclusie.</p>
<p>🚗 Het <b>Tempolimit</b> is een klassiek strijdpunt: op ongeveer twee derde van de Autobahn geldt geen vaste maximumsnelheid, alleen een adviessnelheid (<i>Richtgeschwindigkeit</i>) van 130 km/u.</p>` },
    ex: [
      { t: 'cloze', s: '___ es regnet, gehen wir spazieren.', a: ['Obwohl'], o: ['Obwohl', 'Trotzdem', 'Deshalb'], nl: 'Hoewel het regent, gaan we wandelen.', x: 'Het werkwoord (regnet) staat aan het einde: dat is een bijzin, dus obwohl.', tag: 'de-obwohl' },
      { t: 'cloze', s: 'Es regnet. ___ gehen wir spazieren.', a: ['Trotzdem'], o: ['Trotzdem', 'Obwohl', 'Weil'], nl: 'Het regent. Toch gaan we wandelen.', x: 'Na het woord komt meteen het werkwoord (gehen): hoofdzin, dus trotzdem.', tag: 'de-obwohl' },
      { t: 'cloze', s: 'Obwohl er krank ___, geht er zur Arbeit.', a: ['ist'], o: ['ist', 'ist er', 'sein'], nl: 'Hoewel hij ziek is, gaat hij naar zijn werk.', tag: 'de-obwohl' },
      { t: 'cloze', s: 'Ich habe wenig Geld. Trotzdem ___ ich in den Urlaub.', a: ['fahre'], o: ['fahre', 'ich fahre', 'fahren'], nl: 'Ik heb weinig geld. Toch ga ik op vakantie.', tag: 'de-obwohl' },
      { t: 'cloze', s: 'Ich bin müde. ___ gehe ich früh ins Bett.', a: ['Deshalb'], o: ['Deshalb', 'Weil', 'Obwohl'], nl: 'Ik ben moe. Daarom ga ik vroeg naar bed.', tag: 'de-obwohl' },
      { t: 'cloze', s: 'Meiner Meinung nach ___ das eine gute Idee.', a: ['ist'], o: ['ist', 'dass ist', 'sein'], nl: 'Naar mijn mening is dat een goed idee.', x: 'Na Meiner Meinung nach volgt meteen het werkwoord, zonder dass en zonder komma.', tag: 'de-meinung' },
      { t: 'cloze', s: 'Ich stimme ___ zu. (jij)', a: ['dir'], o: ['dir', 'dich', 'du'], nl: 'Ik ben het met je eens.', x: 'Uitzondering: zustimmen krijgt de derde naamval; je geeft je instemming «aan» iemand.', tag: 'de-meinung' },
      { t: 'mc', q: 'Hoe zeg je «naar mijn mening»?', o: ['meiner Meinung nach', 'nach meine Meinung', 'zu meiner Meinung'], x: 'Uitzondering: in deze vaste uitdrukking staat nach achter het zelfstandig naamwoord.', tag: 'de-meinung' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Obwohl ich keine Zeit habe, helfe ich dir.', 'Obwohl ich habe keine Zeit, helfe ich dir.', 'Obwohl habe ich keine Zeit, ich helfe dir.'], tag: 'de-obwohl' },
      { t: 'mc', q: 'Wat betekent «Das sehe ich anders»?', o: ['Daar denk ik anders over.', 'Dat zie ik niet.', 'Dat ziet er anders uit.'], tag: 'de-meinung' },
      { t: 'tr', nl: 'Ik ben ertegen.', a: ['Ich bin dagegen.'], tag: 'de-meinung' },
      { t: 'tr', nl: 'Daar heb je gelijk in.', a: ['Da hast du recht.', 'Da hast du Recht.'], tag: 'de-meinung' },
      { t: 'tr', nl: 'Hoewel het duur is, koop ik het.', a: ['Obwohl es teuer ist, kaufe ich es.'], tag: 'de-obwohl' },
      { t: 'order', s: 'Obwohl ich wenig Zeit habe, lerne ich jeden Tag Deutsch.', nl: 'Hoewel ik weinig tijd heb, leer ik elke dag Duits.', tag: 'de-obwohl' },
      { t: 'match', p: [['zustimmen', 'het eens zijn'], ['widersprechen', 'tegenspreken'], ['überzeugen', 'overtuigen'], ['behaupten', 'beweren'], ['außerdem', 'bovendien']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Sollen Kinder ein Handy haben?', type: 'Forumbericht',
      p: [
        ['Meine Tochter ist neun und möchte ein Handy, weil alle in ihrer Klasse eins haben. Ich bin eigentlich dagegen. Meiner Meinung nach ist sie noch zu jung.', 'Mijn dochter is negen en wil een telefoon, omdat iedereen in haar klas er een heeft. Ik ben eigenlijk tegen. Naar mijn mening is ze nog te jong.'],
        ['Einerseits verstehe ich sie: Sie will nicht anders sein als ihre Freundinnen. Außerdem könnte sie mich anrufen, wenn sie später nach Hause kommt. Andererseits verbringen Kinder schon jetzt zu viel Zeit vor dem Bildschirm.', 'Enerzijds begrijp ik haar: ze wil niet anders zijn dan haar vriendinnen. Bovendien zou ze me kunnen bellen als ze later thuiskomt. Anderzijds brengen kinderen nu al te veel tijd voor een scherm door.'],
        ['Mein Mann sieht das anders. Er findet, dass Kinder früh lernen müssen, mit Medien umzugehen. Obwohl mich seine Argumente nicht ganz überzeugen, haben wir einen Kompromiss gefunden: ein einfaches Handy ohne Internet.', 'Mijn man ziet dat anders. Hij vindt dat kinderen vroeg moeten leren met media om te gaan. Hoewel zijn argumenten me niet helemaal overtuigen, hebben we een compromis gevonden: een eenvoudige telefoon zonder internet.']
      ],
      gl: [['verbringen', 'doorbrengen'], ['umgehen mit', 'omgaan met'], ['der Kompromiss', 'het compromis'], ['einfach', 'eenvoudig'], ['anders als', 'anders dan']],
      q: [
        { t: 'mc', q: 'Warum möchte die Tochter ein Handy?', o: ['Weil alle in ihrer Klasse eins haben.', 'Weil sie viel telefoniert.', 'Weil ihr Vater es will.'] },
        { t: 'mc', q: 'Was denkt der Mann?', o: ['Kinder müssen früh lernen, mit Medien umzugehen.', 'Kinder brauchen kein Handy.', 'Die Tochter ist zu jung.'] },
        { t: 'mc', q: 'Welchen Kompromiss finden die Eltern?', o: ['Ein einfaches Handy ohne Internet', 'Ein Handy nur am Wochenende', 'Kein Handy bis zwölf'] }
      ]
    },
    say: [['Meiner Meinung nach ist das falsch.', 'Naar mijn mening is dat fout.'], ['Da stimme ich dir zu.', 'Daarin ben ik het met je eens.'], ['Das sehe ich anders.', 'Dat zie ik anders.'], ['Obwohl es teuer ist, finde ich es gut.', 'Hoewel het duur is, vind ik het goed.']],
    task: { nl: 'Geef je mening over een stelling, bijvoorbeeld «Iedereen moet één dag per week thuiswerken». Noem een voordeel, een nadeel en je conclusie. Gebruik obwohl of trotzdem (5 zinnen).', model: 'Meiner Meinung nach ist Homeoffice eine gute Idee. Einerseits spart man Zeit, weil man nicht fahren muss. Andererseits sieht man die Kollegen weniger. Obwohl ich gern im Büro bin, arbeite ich freitags lieber zu Hause. Deshalb bin ich dafür.' },
    scenario: { nl: 'Je discussieert met een Duitse collega over een maximumsnelheid.', role: 'You are Markus from Hannover. You are against a speed limit on the Autobahn. Discuss with the learner, give arguments, react to theirs ("Da hast du recht, aber …", "Das sehe ich anders"), and let yourself be half convinced. B1 German, use "du".', goal: 'Geef je mening met argumenten en reageer op tegenargumenten.' }
  });

  /* ───────────────────────── B1 · 2 ───────────────────────── */
  U({
    id: 'de-b1-02', level: 'B1', icon: '🧑‍🤝‍🧑', title: 'Menschen, die ich kenne', nl: 'Mensen beschrijven: de betrekkelijke bijzin',
    goals: ['Mensen en dingen nader omschrijven', 'Betrekkelijke bijzinnen maken met der, die, das', 'Betrekkelijke bijzinnen met een voorzetsel gebruiken', 'Karakter en relaties beschrijven'],
    vocab: [
      ['die Beziehung', 'de relatie'], ['die Freundschaft', 'de vriendschap'], ['der Bekannte / die Bekannte', 'de kennis'], ['der Nachbar / die Nachbarin', 'de buurman / de buurvrouw'], ['der Mitbewohner', 'de huisgenoot'],
      ['der Charakter', 'het karakter'], ['zuverlässig', 'betrouwbaar'], ['ehrlich', 'eerlijk'], ['geduldig', 'geduldig'], ['großzügig', 'gul'], ['geizig', 'gierig'], ['neugierig', 'nieuwsgierig'], ['schüchtern', 'verlegen'],
      ['selbstbewusst', 'zelfverzekerd'], ['humorvoll', 'met humor'], ['stur', 'koppig'], ['sich verstehen mit', 'kunnen opschieten met'], ['sich streiten', 'ruzie maken'], ['sich verlieben in', 'verliefd worden op'],
      ['sich verlassen auf', 'vertrouwen op'], ['kennenlernen', 'leren kennen'], ['vertrauen', 'vertrouwen'], ['heiraten', 'trouwen'], ['sich trennen', 'uit elkaar gaan'], ['gemeinsam', 'gezamenlijk'], ['der Typ', 'het type / de vent']
    ],
    grammar: [
      { t: 'De betrekkelijke bijzin: der, die, das', es: 'Relativsätze im Nominativ und Akkusativ',
        html: `<p>Het Nederlandse <i>die/dat</i> is in het Duits gewoon het <b>lidwoord</b>: <b>der, die, das</b>. Het <b>geslacht</b> komt van het woord waar het naar verwijst, de <b>naamval</b> van de functie in de bijzin. Het werkwoord staat achteraan en er staan altijd <b>komma’s</b> omheen.</p>
<p><i>Der Mann, <b>der</b> dort steht, ist mein Chef.</i> (hij staat daar → onderwerp → der)<br><i>Der Mann, <b>den</b> du dort siehst, ist mein Chef.</i> (jij ziet hem → lijdend voorwerp → den)</p>
<p>Alleen bij <b>mannelijk</b> zie je het verschil tussen 1e en 4e naamval (der/den); bij <i>die</i> en <i>das</i> blijft het gelijk.</p>
<p><b>Uitzondering:</b> na <i>alles, etwas, nichts, das</i> en na een overtreffende trap gebruik je <b>was</b>, niet <i>das</i>: <i>Alles, <b>was</b> er sagt, stimmt. Das ist das Beste, <b>was</b> ich je gegessen habe.</i> <b>Waarom?</b> Deze woorden zijn onbepaald: er is geen concreet zelfstandig naamwoord met een geslacht waar <i>das</i> naar kan verwijzen.</p>`,
        table: [['', '1e naamval', '4e naamval'], ['mannelijk', 'der Mann, der …', 'der Mann, den …'], ['vrouwelijk', 'die Frau, die …', 'die Frau, die …'], ['onzijdig', 'das Kind, das …', 'das Kind, das …'], ['meervoud', 'die Leute, die …', 'die Leute, die …']],
        sum: 'Der Mann, der dort steht. Der Mann, den ich kenne. Die Frau, die hier wohnt.',
        ex: [['Das ist die Kollegin, die mir immer hilft.', 'Dat is de collega die me altijd helpt.'], ['Der Film, den wir gestern gesehen haben, war langweilig.', 'De film die we gisteren hebben gezien, was saai.'], ['Ich habe ein Buch gelesen, das mir sehr gefallen hat.', 'Ik heb een boek gelezen dat ik heel mooi vond.']] },
      { t: 'Met derde naamval en met voorzetsel', es: 'Relativsätze mit Dativ und Präposition',
        html: `<p>In de derde naamval: <b>dem</b> (m/o), <b>der</b> (v), <b>denen</b> (mv). <i>Der Freund, <b>dem</b> ich geholfen habe. Die Leute, <b>denen</b> das Haus gehört.</i></p>
<p><b>Uitzondering:</b> het meervoud is <b>denen</b>, niet <i>den</i>. <b>Waarom?</b> Het gewone lidwoord <i>den</i> krijgt hulp van de -n aan het zelfstandig naamwoord (<i>den Kindern</i>); het betrekkelijk voornaamwoord staat alleen en heeft die extra uitgang zelf nodig.</p>
<p>Een <b>voorzetsel</b> staat altijd <b>vóór</b> het betrekkelijk voornaamwoord en bepaalt de naamval. Het Nederlands zegt <i>waarmee, waarop, met wie</i>; het Duits zegt gewoon <b>voorzetsel + der/die/das</b>:</p>
<p><i>Die Freundin, <b>mit der</b> ich wohne.</i> (de vriendin met wie ik woon)<br><i>Der Stuhl, <b>auf dem</b> du sitzt.</i> (de stoel waarop je zit)<br><i>Der Mann, <b>in den</b> sie sich verliebt hat.</i></p>
<p>Je kunt het voorzetsel <b>nooit</b> naar het einde schuiven zoals in het Nederlands (<i>de stoel waar je op zit</i>).</p>`,
        table: [['', '3e naamval', 'met voorzetsel'], ['mannelijk', 'dem', 'der Freund, mit dem ich reise'], ['vrouwelijk', 'der', 'die Firma, bei der ich arbeite'], ['onzijdig', 'dem', 'das Haus, in dem ich wohne'], ['meervoud', 'denen', 'die Leute, mit denen ich arbeite']],
        ex: [['Das ist der Nachbar, dem ich mein Auto geliehen habe.', 'Dat is de buurman aan wie ik mijn auto heb geleend.'], ['Die Stadt, in der ich wohne, ist klein.', 'De stad waarin ik woon, is klein.'], ['Die Kollegen, mit denen ich arbeite, sind sehr nett.', 'De collega’s met wie ik werk, zijn heel aardig.']] }
    ],
    dialogue: {
      t: 'Wer ist das auf dem Foto?', place: 'Leipzig 🇩🇪',
      lines: [
        ['Sanne', 'Wer ist denn der Mann, der neben dir steht?', 'Wie is toch die man die naast je staat?'],
        ['Felix', 'Das ist Paul, der Mitbewohner, mit dem ich in Leipzig gewohnt habe.', 'Dat is Paul, de huisgenoot met wie ik in Leipzig heb gewoond.'],
        ['Sanne', 'Der, der immer so laut Musik gehört hat?', 'Die altijd zo hard muziek luisterde?'],
        ['Felix', 'Nein, das war Jan. Paul ist ein Typ, auf den man sich immer verlassen kann.', 'Nee, dat was Jan. Paul is een type op wie je altijd kunt vertrouwen.'],
        ['Sanne', 'Und die Frau, die das rote Kleid trägt?', 'En de vrouw die de rode jurk draagt?'],
        ['Felix', 'Das ist Miriam, die Kollegin, in die er sich verliebt hat. Sie haben letztes Jahr geheiratet.', 'Dat is Miriam, de collega op wie hij verliefd is geworden. Ze zijn vorig jaar getrouwd.'],
        ['Sanne', 'Wie schön! Und verstehst du dich gut mit ihr?', 'Wat mooi! En kun je goed met haar opschieten?'],
        ['Felix', 'Ja, sehr. Sie ist ehrlich und humorvoll. Alles, was sie sagt, meint sie auch so.', 'Ja, heel goed. Ze is eerlijk en heeft humor. Alles wat ze zegt, meent ze ook.']
      ],
      q: [
        { t: 'mc', q: 'Wer ist Paul?', o: ['Der Mitbewohner, mit dem Felix gewohnt hat', 'Der Bruder von Felix', 'Der Mann, der laut Musik gehört hat'] },
        { t: 'mc', q: 'Wie beschreibt Felix Paul?', o: ['Man kann sich auf ihn verlassen.', 'Er ist stur.', 'Er ist schüchtern.'] },
        { t: 'mc', q: 'Wer ist Miriam?', o: ['Die Frau, die Paul geheiratet hat', 'Die Schwester von Felix', 'Eine Nachbarin'] }
      ]
    },
    culture: { t: 'Freund of Bekannter?', html: `<p>Duitsers maken een scherp onderscheid tussen <b>ein Freund</b> (een echte vriend, vaak al jaren) en <b>ein Bekannter</b> (een kennis). Iemand noemt je niet snel <i>Freund</i>, maar als het zover is, is het voor lang.</p>
<p>Let op: <b>mein Freund / meine Freundin</b> betekent meestal <i>mijn vriend(in)</i> in de zin van partner. Voor een gewone vriend zeg je <b>ein Freund von mir</b> of <i>ein guter Freund</i>.</p>
<p>🏠 Veel studenten en jonge werkenden wonen in een <b>WG</b> (<i>Wohngemeinschaft</i>): je deelt keuken en badkamer met je <i>Mitbewohner</i>, en er hangt vaak een <i>Putzplan</i> (schoonmaakrooster) op de koelkast.</p>` },
    ex: [
      { t: 'cloze', s: 'Der Mann, ___ dort steht, ist mein Chef.', a: ['der'], o: ['der', 'den', 'dem'], nl: 'De man die daar staat, is mijn baas.', x: 'Hij staat daar: onderwerp van de bijzin → 1e naamval: der.', tag: 'de-relativ' },
      { t: 'cloze', s: 'Der Mann, ___ du dort siehst, ist mein Chef.', a: ['den'], o: ['den', 'der', 'dem'], nl: 'De man die je daar ziet, is mijn baas.', x: 'Jij ziet hem: lijdend voorwerp van de bijzin → 4e naamval: den.', tag: 'de-relativ' },
      { t: 'cloze', s: 'Die Frau, ___ nebenan wohnt, ist Ärztin.', a: ['die'], o: ['die', 'der', 'das'], nl: 'De vrouw die hiernaast woont, is arts.', tag: 'de-relativ' },
      { t: 'cloze', s: 'Das Buch, ___ ich lese, ist spannend.', a: ['das'], o: ['das', 'dass', 'was'], nl: 'Het boek dat ik lees, is spannend.', x: 'Betrekkelijk voornaamwoord = das met één s. Dass (twee s) is het voegwoord.', tag: 'de-relativ' },
      { t: 'cloze', s: 'Alles, ___ er sagt, stimmt.', a: ['was'], o: ['was', 'das', 'dass'], nl: 'Alles wat hij zegt, klopt.', x: 'Uitzondering: na alles, etwas en nichts gebruik je was, omdat er geen woord met een geslacht is om naar te verwijzen.', tag: 'de-relativ' },
      { t: 'cloze', s: 'Der Freund, ___ ich geholfen habe, wohnt in Köln.', a: ['dem'], o: ['dem', 'den', 'der'], nl: 'De vriend die ik heb geholpen, woont in Keulen.', x: 'Helfen krijgt de derde naamval → dem.', tag: 'de-relativ-dat' },
      { t: 'cloze', s: 'Die Kollegen, mit ___ ich arbeite, sind nett.', a: ['denen'], o: ['denen', 'den', 'die'], nl: 'De collega’s met wie ik werk, zijn aardig.', x: 'Uitzondering: derde naamval meervoud is denen (niet den), omdat het voornaamwoord alleen staat.', tag: 'de-relativ-dat' },
      { t: 'cloze', s: 'Die Stadt, in ___ ich wohne, ist klein.', a: ['der'], o: ['der', 'die', 'dem'], nl: 'De stad waarin ik woon, is klein.', tag: 'de-relativ-dat' },
      { t: 'mc', q: 'Hoe zeg je «de stoel waar je op zit»?', o: ['der Stuhl, auf dem du sitzt', 'der Stuhl, wo du auf sitzt', 'der Stuhl, den du auf sitzt'], x: 'Het voorzetsel staat altijd vóór het betrekkelijk voornaamwoord en kan niet naar achteren.', tag: 'de-relativ-dat' },
      { t: 'mc', q: 'Wat betekent «zuverlässig»?', o: ['betrouwbaar', 'toevallig', 'verlaten'], tag: 'de-vok' },
      { t: 'tr', nl: 'Dat is de vrouw die ik ken.', a: ['Das ist die Frau, die ich kenne.'], tag: 'de-relativ' },
      { t: 'tr', nl: 'Dat is de vriend met wie ik woon.', a: ['Das ist der Freund, mit dem ich wohne.', 'Das ist der Freund, mit dem ich zusammenwohne.'], tag: 'de-relativ-dat' },
      { t: 'order', s: 'Das ist der Nachbar, dem ich mein Fahrrad geliehen habe.', nl: 'Dat is de buurman aan wie ik mijn fiets heb geleend.', tag: 'de-relativ-dat' },
      { t: 'match', p: [['ehrlich', 'eerlijk'], ['geizig', 'gierig'], ['schüchtern', 'verlegen'], ['stur', 'koppig'], ['großzügig', 'gul']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Meine beste Freundin', type: 'Blog',
      p: [
        ['Es gibt Menschen, die man einmal trifft und nie vergisst. Für mich ist das Jule, die ich vor fünfzehn Jahren in der Schule kennengelernt habe. Sie war das neue Mädchen, das niemand kannte.', 'Er zijn mensen die je één keer ontmoet en nooit vergeet. Voor mij is dat Jule, die ik vijftien jaar geleden op school heb leren kennen. Zij was het nieuwe meisje dat niemand kende.'],
        ['Jule ist ein Mensch, auf den ich mich immer verlassen kann. Sie ist ehrlich, manchmal zu ehrlich, und sehr geduldig. Als ich mich von meinem Freund getrennt habe, war sie die Erste, die angerufen hat.', 'Jule is iemand op wie ik altijd kan vertrouwen. Ze is eerlijk, soms te eerlijk, en heel geduldig. Toen ik het uitmaakte met mijn vriend, was zij de eerste die belde.'],
        ['Natürlich streiten wir uns auch. Sie ist stur, und ich bin es auch. Aber die Dinge, über die wir streiten, sind nie wichtig. Eine Freundschaft, die so lange hält, ist das Beste, was es gibt.', 'Natuurlijk maken we ook ruzie. Zij is koppig, en ik ook. Maar de dingen waarover we ruziemaken, zijn nooit belangrijk. Een vriendschap die zo lang duurt, is het beste wat er is.']
      ],
      gl: [['vergessen', 'vergeten'], ['niemand', 'niemand'], ['die Erste', 'de eerste'], ['halten', 'standhouden'], ['das Ding', 'het ding']],
      q: [
        { t: 'mc', q: 'Wo hat die Autorin Jule kennengelernt?', o: ['In der Schule', 'Bei der Arbeit', 'In einer WG'] },
        { t: 'mc', q: 'Wie ist Jule?', o: ['Ehrlich, geduldig und stur', 'Schüchtern und geizig', 'Neugierig und laut'] },
        { t: 'mc', q: 'Worüber streiten die Freundinnen?', o: ['Über Dinge, die nicht wichtig sind', 'Über Geld', 'Über ihre Freunde'] }
      ]
    },
    say: [['Das ist der Kollege, der mir geholfen hat.', 'Dat is de collega die me heeft geholpen.'], ['Die Stadt, in der ich wohne, ist klein.', 'De stad waarin ik woon, is klein.'], ['Er ist ein Mensch, auf den man sich verlassen kann.', 'Hij is iemand op wie je kunt vertrouwen.']],
    task: { nl: 'Beschrijf iemand die belangrijk voor je is. Gebruik minstens drie betrekkelijke bijzinnen, waarvan één met een voorzetsel (4 zinnen).', model: 'Mein Bruder ist ein Mensch, der immer gute Laune hat. Er ist der Einzige, mit dem ich über alles reden kann. Die Wohnung, in der er wohnt, ist nur fünf Minuten von mir entfernt. Das ist etwas, was ich sehr schön finde.' },
    scenario: { nl: 'Je bekijkt foto’s met een Duitse vriend en vertelt wie de mensen zijn.', role: 'You are Felix from Leipzig, looking at the learner\'s photos. Ask who the people are ("Wer ist die Frau, die …?"), what they are like, how they met; describe your own friends with relative clauses. B1 German, use "du".', goal: 'Beschrijf mensen met betrekkelijke bijzinnen.' }
  });

  /* ───────────────────────── B1 · 3 ───────────────────────── */
  U({
    id: 'de-b1-03', level: 'B1', icon: '💭', title: 'Wenn ich reich wäre …', nl: 'Dromen en wensen: de Konjunktiv II',
    goals: ['Over onwerkelijke situaties praten', 'Wensen uitdrukken met wäre, hätte en würde', 'Onwerkelijke voorwaarden maken met wenn', 'Advies geven: An deiner Stelle würde ich …'],
    vocab: [
      ['der Traum', 'de droom'], ['träumen von', 'dromen van'], ['der Wunsch', 'de wens'], ['sich wünschen', 'wensen'], ['reich', 'rijk'], ['arm', 'arm'], ['das Glück', 'het geluk'], ['die Gelegenheit', 'de gelegenheid'],
      ['die Weltreise', 'de wereldreis'], ['gewinnen', 'winnen'], ['das Lotto', 'de lotto'], ['die Million', 'het miljoen'], ['ausgeben', 'uitgeven'], ['sparen', 'sparen'], ['spenden', 'doneren'], ['verändern', 'veranderen'],
      ['auswandern', 'emigreren'], ['aufhören', 'ophouden'], ['sich leisten', 'zich veroorloven'], ['an deiner Stelle', 'in jouw plaats'], ['wahrscheinlich', 'waarschijnlijk'], ['vielleicht', 'misschien'],
      ['unbedingt', 'beslist / per se'], ['Schade!', 'Jammer!'], ['Wenn ich nur … hätte!', 'Had ik maar …!'], ['die Insel', 'het eiland']
    ],
    grammar: [
      { t: 'Konjunktiv II: wäre, hätte, würde', es: 'Der Konjunktiv II',
        html: `<p>Voor wat <b>niet echt</b> is (dromen, wensen, «zou») gebruikt het Duits de <b>Konjunktiv II</b>. Je kent hem al van beleefde vragen: <i>Ich hätte gern …</i></p>
<p>Voor bijna alle werkwoorden gebruik je <b>würde + heel werkwoord</b> (zou …): <i>Ich <b>würde</b> eine Weltreise <b>machen</b>.</i></p>
<p><b>Uitzondering:</b> bij <i>sein, haben</i> en de modale werkwoorden gebruik je niet <i>würde</i>, maar een eigen vorm: <b>wäre, hätte, könnte, müsste, dürfte</b>. <b>Waarom?</b> Deze werkwoorden komen zo vaak voor dat hun oude, korte vormen bewaard zijn gebleven; <i>würde sein</i> is niet fout, maar klinkt omslachtig.</p>
<p>De vorm komt van de verleden tijd + Umlaut + <b>-e</b>: <i>war → w<b>ä</b>r<b>e</b>, hatte → h<b>ä</b>tte, konnte → k<b>ö</b>nnte</i>. <b>Uitzondering:</b> <i>sollte</i> en <i>wollte</i> krijgen geen Umlaut.</p>
<p><b>Verschil met het Nederlands:</b> wij zeggen vaak gewoon de verleden tijd (<i>Als ik rijk <b>was</b> …</i>). Het Duits moet hier de Konjunktiv gebruiken: <i>Wenn ich reich <b>wäre</b> …</i>, niet <s>war</s>.</p>`,
        table: [['', 'sein', 'haben', 'können', 'andere werkwoorden'], ['ich', 'wäre', 'hätte', 'könnte', 'würde … machen'], ['du', 'wärst', 'hättest', 'könntest', 'würdest … machen'], ['er / sie / es', 'wäre', 'hätte', 'könnte', 'würde … machen'], ['wir', 'wären', 'hätten', 'könnten', 'würden … machen'], ['ihr', 'wärt', 'hättet', 'könntet', 'würdet … machen'], ['sie / Sie', 'wären', 'hätten', 'könnten', 'würden … machen']],
        sum: 'Ich wäre, ich hätte, ich könnte, ich würde machen.',
        ex: [['Ich wäre jetzt gern am Strand.', 'Ik zou nu graag op het strand zijn.'], ['Mit mehr Zeit würde ich ein Instrument lernen.', 'Met meer tijd zou ik een instrument leren.'], ['Das könnte ich mir nie leisten.', 'Dat zou ik me nooit kunnen veroorloven.']] },
      { t: 'Wenn ich … wäre: onwerkelijke voorwaarde en advies', es: 'Irreale Bedingungssätze',
        html: `<p>Bij een voorwaarde die niet waar is, staat de Konjunktiv II in <b>beide</b> zinsdelen: <i>Wenn ich Zeit <b>hätte</b>, <b>würde</b> ich dir helfen.</i> (Maar ik heb geen tijd.)</p>
<p>Vergelijk met de echte voorwaarde: <i>Wenn ich Zeit <b>habe</b>, <b>helfe</b> ich dir.</i> (Dat kan gebeuren.)</p>
<p>Wensen maak je met <b>Wenn … nur/doch</b>: <i>Wenn ich <b>nur</b> mehr Geld hätte!</i> (Had ik maar meer geld!) Je kunt <i>wenn</i> ook weglaten, dan begint het werkwoord: <i><b>Hätte</b> ich nur mehr Geld!</i></p>
<p>Advies geef je met <b>An deiner Stelle würde ich …</b> of <b>Du solltest …</b>: <i>An deiner Stelle würde ich mit ihm reden. Du solltest mehr schlafen.</i></p>`,
        table: [['', 'echt (kan gebeuren)', 'onwerkelijk'], ['voorwaarde', 'Wenn ich Zeit habe, komme ich.', 'Wenn ich Zeit hätte, würde ich kommen.'], ['wens', '', 'Wenn ich nur Zeit hätte!'], ['advies', 'Rede mit ihm!', 'An deiner Stelle würde ich mit ihm reden.']],
        ex: [['Wenn ich reich wäre, würde ich nicht mehr arbeiten.', 'Als ik rijk was, zou ik niet meer werken.'], ['Wenn wir ein Auto hätten, könnten wir ans Meer fahren.', 'Als we een auto hadden, zouden we naar zee kunnen rijden.'], ['An deiner Stelle würde ich das Angebot annehmen.', 'In jouw plaats zou ik het aanbod aannemen.']] }
    ],
    dialogue: {
      t: 'Eine Million im Lotto', place: 'Zürich 🇨🇭',
      lines: [
        ['Lea', 'Was würdest du machen, wenn du eine Million im Lotto gewinnen würdest?', 'Wat zou je doen als je een miljoen in de lotto zou winnen?'],
        ['Jonas', 'Ich würde sofort aufhören zu arbeiten und eine Weltreise machen.', 'Ik zou meteen stoppen met werken en een wereldreis maken.'],
        ['Lea', 'Wirklich? Wäre dir das nicht langweilig?', 'Echt? Zou je dat niet saai vinden?'],
        ['Jonas', 'Nein! Ich hätte endlich Zeit für alles. Und du?', 'Nee! Ik zou eindelijk tijd voor alles hebben. En jij?'],
        ['Lea', 'Ich würde ein kleines Haus am See kaufen. Den Rest würde ich sparen.', 'Ik zou een klein huis aan het meer kopen. De rest zou ik sparen.'],
        ['Jonas', 'Sparen? An deiner Stelle würde ich das Geld ausgeben!', 'Sparen? In jouw plaats zou ik het geld uitgeven!'],
        ['Lea', 'Ein bisschen würde ich auch spenden. Aber wir spielen ja gar kein Lotto.', 'Een beetje zou ik ook doneren. Maar we spelen helemaal geen lotto.'],
        ['Jonas', 'Stimmt. Wenn wir nur spielen würden! Komm, wir kaufen einen Schein.', 'Klopt. Speelden we maar! Kom, we kopen een lot.']
      ],
      q: [
        { t: 'mc', q: 'Was würde Jonas mit einer Million machen?', o: ['Aufhören zu arbeiten und eine Weltreise machen', 'Ein Haus am See kaufen', 'Alles sparen'] },
        { t: 'mc', q: 'Was würde Lea kaufen?', o: ['Ein kleines Haus am See', 'Ein teures Auto', 'Eine Insel'] },
        { t: 'mc', q: 'Was ist das Problem?', o: ['Sie spielen gar kein Lotto.', 'Sie haben schon gewonnen.', 'Jonas hat kein Geld für eine Reise.'] }
      ]
    },
    culture: { t: 'Sparen, contant geld en Fernweh', html: `<p>Duitsers staan bekend als <b>spaarzaam</b>: het <i>Sparbuch</i> en de <i>Bausparvertrag</i> (sparen voor een huis) zijn een begrip, en schulden maken voelt ongemakkelijk. Het woord <b>Schuld</b> betekent zowel <i>schuld</i> (geld) als <i>schuld</i> (fout).</p>
<p>Veel mensen betalen nog graag <b>bar</b> (contant): <i>«Nur Bares ist Wahres»</i>. Neem dus altijd wat cash mee, vooral naar bakkers, markten en kleine cafés.</p>
<p>✈️ Twee mooie onvertaalbare woorden: <b>Fernweh</b> (het verlangen naar verre plekken, het tegenovergestelde van heimwee) en <b>Wanderlust</b> (de zin om eropuit te trekken).</p>` },
    ex: [
      { t: 'cloze', s: 'Wenn ich reich ___, würde ich reisen.', a: ['wäre'], o: ['wäre', 'war', 'würde'], nl: 'Als ik rijk was, zou ik reizen.', x: 'Het Nederlands gebruikt de verleden tijd (was); het Duits moet de Konjunktiv II gebruiken: wäre.', tag: 'de-wennirreal' },
      { t: 'cloze', s: 'Wenn ich Zeit ___, würde ich dir helfen.', a: ['hätte'], o: ['hätte', 'hatte', 'habe'], nl: 'Als ik tijd had, zou ik je helpen.', tag: 'de-wennirreal' },
      { t: 'cloze', s: 'Ich ___ gern eine Weltreise machen.', a: ['würde'], o: ['würde', 'wurde', 'werde'], nl: 'Ik zou graag een wereldreis maken.', x: 'Würde (met Umlaut) = zou. Wurde (zonder) = werd.', tag: 'de-konj2' },
      { t: 'cloze', s: 'Wenn wir ein Auto hätten, ___ wir ans Meer fahren.', a: ['könnten'], o: ['könnten', 'konnten', 'können'], nl: 'Als we een auto hadden, zouden we naar zee kunnen rijden.', tag: 'de-konj2' },
      { t: 'cloze', s: 'An deiner Stelle ___ ich mit ihm reden.', a: ['würde'], o: ['würde', 'wäre', 'hätte'], nl: 'In jouw plaats zou ik met hem praten.', tag: 'de-konj2' },
      { t: 'cloze', s: 'Du ___ mehr schlafen.', a: ['solltest'], o: ['solltest', 'sölltest', 'sollst würde'], nl: 'Je zou meer moeten slapen.', x: 'Uitzondering: sollte krijgt in de Konjunktiv II geen Umlaut, omdat sollen er nooit een heeft gehad.', tag: 'de-konj2' },
      { t: 'cloze', s: 'Wenn ich nur mehr Geld ___!', a: ['hätte'], o: ['hätte', 'habe', 'würde'], nl: 'Had ik maar meer geld!', tag: 'de-wennirreal' },
      { t: 'cloze', s: 'Das ___ schön!', a: ['wäre'], o: ['wäre', 'würde', 'war'], nl: 'Dat zou mooi zijn!', x: 'Uitzondering: bij sein gebruik je de eigen vorm wäre, niet würde sein.', tag: 'de-konj2' },
      { t: 'mc', q: 'Welke zin is een onwerkelijke voorwaarde?', o: ['Wenn ich Zeit hätte, würde ich kommen.', 'Wenn ich Zeit habe, komme ich.', 'Als ich Zeit hatte, kam ich.'], tag: 'de-wennirreal' },
      { t: 'mc', q: 'Wat betekent «Fernweh»?', o: ['verlangen naar verre plekken', 'heimwee', 'reisziekte'], tag: 'de-vok' },
      { t: 'tr', nl: 'Ik zou graag in Berlijn wonen.', a: ['Ich würde gern in Berlin wohnen.', 'Ich würde gerne in Berlin wohnen.'], tag: 'de-konj2' },
      { t: 'tr', nl: 'Als ik jou was, zou ik blijven.', a: ['Wenn ich du wäre, würde ich bleiben.', 'An deiner Stelle würde ich bleiben.'], tag: 'de-wennirreal' },
      { t: 'tr', nl: 'Dat zou te duur zijn.', a: ['Das wäre zu teuer.'], tag: 'de-konj2' },
      { t: 'order', s: 'Wenn ich mehr Zeit hätte, würde ich jeden Tag Sport machen.', nl: 'Als ik meer tijd had, zou ik elke dag sporten.', tag: 'de-wennirreal' },
      { t: 'match', p: [['ausgeben', 'uitgeven'], ['sparen', 'sparen'], ['spenden', 'doneren'], ['auswandern', 'emigreren'], ['sich leisten', 'zich veroorloven']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Was wäre, wenn …?', type: 'Enquête in een tijdschrift',
      p: [
        ['Wir haben drei Leser gefragt: Was würden Sie tun, wenn Sie ein Jahr frei hätten? Karin (52) aus Zürich: «Ich würde endlich Italienisch lernen und sechs Monate in Rom wohnen. Wenn ich jünger wäre, würde ich sogar auswandern.»', 'We hebben drie lezers gevraagd: wat zou u doen als u een jaar vrij had? Karin (52) uit Zürich: «Ik zou eindelijk Italiaans leren en zes maanden in Rome wonen. Als ik jonger was, zou ik zelfs emigreren.»'],
        ['Mehmet (34) aus Köln: «Ich hätte gern mehr Zeit für meine Kinder. Wir würden mit dem Wohnmobil durch Europa fahren. Ohne Handy! Das wäre das Schönste, was ich mir vorstellen kann.»', 'Mehmet (34) uit Keulen: «Ik zou graag meer tijd voor mijn kinderen hebben. We zouden met de camper door Europa rijden. Zonder telefoon! Dat zou het mooiste zijn wat ik me kan voorstellen.»'],
        ['Sophie (19) aus Graz: «Ehrlich gesagt, ich wüsste es nicht. Vielleicht würde ich in einem Tierheim arbeiten. Aber wahrscheinlich könnte ich nach zwei Monaten nicht mehr stillsitzen.»', 'Sophie (19) uit Graz: «Eerlijk gezegd zou ik het niet weten. Misschien zou ik in een dierenasiel werken. Maar waarschijnlijk zou ik na twee maanden niet meer stil kunnen zitten.»']
      ],
      gl: [['sogar', 'zelfs'], ['das Wohnmobil', 'de camper'], ['sich vorstellen', 'zich voorstellen'], ['ich wüsste', 'ik zou weten'], ['das Tierheim', 'het dierenasiel']],
      q: [
        { t: 'mc', q: 'Was würde Karin tun?', o: ['Italienisch lernen und in Rom wohnen', 'Mit dem Wohnmobil fahren', 'In einem Tierheim arbeiten'] },
        { t: 'mc', q: 'Was wünscht sich Mehmet?', o: ['Mehr Zeit für seine Kinder', 'Ein neues Handy', 'Ein Haus in Italien'] },
        { t: 'mc', q: 'Was sagt Sophie?', o: ['Sie wüsste es nicht genau.', 'Sie würde auswandern.', 'Sie würde ein Jahr schlafen.'] }
      ]
    },
    say: [['Wenn ich reich wäre, würde ich viel reisen.', 'Als ik rijk was, zou ik veel reizen.'], ['Das wäre schön!', 'Dat zou mooi zijn!'], ['An deiner Stelle würde ich es machen.', 'In jouw plaats zou ik het doen.'], ['Ich hätte gern mehr Zeit.', 'Ik zou graag meer tijd hebben.']],
    task: { nl: 'Wat zou jij doen als je een jaar vrij had en genoeg geld? Schrijf 4 zinnen met wäre, hätte en würde.', model: 'Wenn ich ein Jahr frei hätte, würde ich zuerst drei Monate durch Südamerika reisen. Danach würde ich einen Deutschkurs in Berlin machen. Ich hätte endlich Zeit zum Lesen. Das wäre ein Traum!' },
    scenario: { nl: 'Je droomt hardop met een vriend: wat als je de lotto wint?', role: 'You are Jonas from Zurich. Play "Was wäre, wenn …?" with the learner: ask what they would do with a million, a year off, or a house on an island; react and give advice with "An deiner Stelle würde ich …". B1 German, use "du".', goal: 'Praat over onwerkelijke situaties met wäre, hätte en würde.' }
  });

  /* ───────────────────────── B1 · 4 ───────────────────────── */
  U({
    id: 'de-b1-04', level: 'B1', icon: '♻️', title: 'Umwelt und Alltag', nl: 'Milieu: de lijdende vorm',
    goals: ['Over milieu en afval scheiden praten', 'De lijdende vorm maken met werden', 'Het verschil kennen tussen werden en sein in de lijdende vorm', 'Processen beschrijven: hoe wordt iets gemaakt?'],
    vocab: [
      ['die Umwelt', 'het milieu'], ['der Umweltschutz', 'de milieubescherming'], ['das Klima', 'het klimaat'], ['der Müll', 'het afval'], ['die Mülltonne', 'de afvalcontainer'], ['trennen', 'scheiden'], ['das Pfand', 'het statiegeld'],
      ['die Flasche', 'de fles'], ['die Dose', 'het blikje'], ['die Verpackung', 'de verpakking'], ['der Kunststoff', 'het plastic / de kunststof'], ['das Altpapier', 'het oud papier'], ['wegwerfen', 'weggooien'],
      ['wiederverwerten', 'recyclen'], ['verbrauchen', 'verbruiken'], ['die Energie', 'de energie'], ['der Strom', 'de stroom'], ['erneuerbar', 'hernieuwbaar'], ['die Windkraft', 'de windenergie'], ['schützen', 'beschermen'],
      ['verschmutzen', 'vervuilen'], ['herstellen', 'produceren'], ['sammeln', 'verzamelen'], ['abholen', 'ophalen'], ['umweltfreundlich', 'milieuvriendelijk'], ['nachhaltig', 'duurzaam']
    ],
    grammar: [
      { t: 'De lijdende vorm: werden + voltooid deelwoord', es: 'Das Passiv',
        html: `<p>De lijdende vorm maak je net als in het Nederlands met <b>werden</b> + voltooid deelwoord (aan het einde): <i>Der Müll <b>wird</b> jeden Montag <b>abgeholt</b>.</i> (Het afval wordt elke maandag opgehaald.)</p>
<p><b>Uitzondering:</b> <i>werden</i> is onregelmatig: <b>du wirst, er wird</b> (met i, en zonder -t bij <i>er</i>). <b>Waarom?</b> Het is een sterk werkwoord met klinkerwissel e → i (zoals <i>geben → gibt</i>); de stam eindigt al op d, waardoor de oude uitgang <i>-t</i> ermee versmolten is.</p>
<p>Wie het doet, noem je met <b>von</b> + 3e naamval: <i>Das Haus wird <b>von einem Architekten</b> geplant.</i></p>
<p>Met een modaal werkwoord: modaal + deelwoord + <b>werden</b>: <i>Der Müll <b>muss getrennt werden</b>.</i></p>
<p><b>Verschil met het Nederlands:</b> «Er wordt …» zonder onderwerp is <b>Es wird …</b>, en dat <i>es</i> verdwijnt als er iets anders vooraan staat: <i><b>Es</b> wird hier viel gebaut.</i> → <i>Hier wird viel gebaut.</i> (niet <s>Hier wird es viel gebaut</s>)</p>`,
        table: [['', 'werden', 'voorbeeld'], ['ich', 'werde', 'Ich werde abgeholt.'], ['du', 'wirst', 'Du wirst gefragt.'], ['er / sie / es', 'wird', 'Das Papier wird gesammelt.'], ['wir', 'werden', 'Wir werden informiert.'], ['ihr', 'werdet', 'Ihr werdet eingeladen.'], ['sie / Sie', 'werden', 'Die Flaschen werden getrennt.']],
        sum: 'Der Müll wird abgeholt. Die Flaschen werden gesammelt.',
        ex: [['In Deutschland wird der Müll getrennt.', 'In Duitsland wordt het afval gescheiden.'], ['Die Flaschen werden im Supermarkt zurückgegeben.', 'De flessen worden in de supermarkt teruggebracht.'], ['Hier darf nicht geraucht werden.', 'Hier mag niet gerookt worden.']] },
      { t: 'Verleden tijd en toestand: wurde / ist', es: 'Passiv Präteritum und Zustandspassiv',
        html: `<p>De verleden tijd van de lijdende vorm is <b>wurde</b> + voltooid deelwoord: <i>Das Haus <b>wurde</b> 1900 <b>gebaut</b>.</i> (werd gebouwd)</p>
<p>Let op de drie vormen die op elkaar lijken: <b>wird</b> (wordt), <b>wurde</b> (werd), <b>würde</b> (zou).</p>
<p><b>Uitzondering:</b> in het Perfekt van de lijdende vorm is het deelwoord van <i>werden</i> <b>worden</b>, zonder ge-: <i>Das Haus <b>ist</b> gebaut <b>worden</b>.</i> <b>Waarom?</b> Er staat al een voltooid deelwoord met ge- (<i>gebaut</i>); twee keer ge- achter elkaar wordt vermeden. Als zelfstandig werkwoord («worden») is het wél <i>geworden</i>: <i>Er ist Arzt geworden.</i></p>
<p><b>Valkuil voor Nederlanders:</b> «Het huis <i>is</i> gebouwd in 1900» (een gebeurtenis) is in het Duits <b>wurde gebaut</b>, niet <s>ist gebaut</s>. <i>Sein</i> + deelwoord beschrijft alleen een <b>toestand</b>, het resultaat: <i>Das Fenster <b>ist</b> geöffnet.</i> (= het staat open)</p>`,
        table: [['', 'Duits', 'Nederlands'], ['nu (proces)', 'Das Fenster wird geöffnet.', 'Het raam wordt geopend.'], ['verleden (proces)', 'Das Fenster wurde geöffnet.', 'Het raam werd / is geopend.'], ['Perfekt (proces)', 'Das Fenster ist geöffnet worden.', 'Het raam is geopend (door iemand).'], ['toestand', 'Das Fenster ist geöffnet.', 'Het raam is open.']],
        ex: [['Die Berliner Mauer wurde 1961 gebaut.', 'De Berlijnse Muur is in 1961 gebouwd.'], ['Das Pfandsystem wurde 2003 eingeführt.', 'Het statiegeldsysteem is in 2003 ingevoerd.'], ['Der Laden ist schon geschlossen.', 'De winkel is al dicht.']] }
    ],
    dialogue: {
      t: 'Welche Tonne?', place: 'Freiburg 🇩🇪',
      lines: [
        ['Sanne', 'Tim, ich wohne jetzt eine Woche hier und verstehe die Mülltonnen noch nicht.', 'Tim, ik woon hier nu een week en ik snap de afvalcontainers nog niet.'],
        ['Tim', 'Kein Problem. In der blauen Tonne wird Papier gesammelt, in der gelben Verpackungen.', 'Geen probleem. In de blauwe container wordt papier verzameld, in de gele verpakkingen.'],
        ['Sanne', 'Und die braune?', 'En de bruine?'],
        ['Tim', 'Das ist Biomüll. Der wird jede Woche abgeholt, der Restmüll nur alle zwei Wochen.', 'Dat is gft. Dat wordt elke week opgehaald, het restafval maar om de twee weken.'],
        ['Sanne', 'Und was mache ich mit den Flaschen?', 'En wat doe ik met de flessen?'],
        ['Tim', 'Pfandflaschen werden im Supermarkt zurückgegeben. Glas ohne Pfand muss zum Container gebracht werden.', 'Statiegeldflessen worden in de supermarkt ingeleverd. Glas zonder statiegeld moet naar de glasbak gebracht worden.'],
        ['Sanne', 'Puh, kompliziert. Bei uns wird nicht so genau getrennt.', 'Poeh, ingewikkeld. Bij ons wordt niet zo precies gescheiden.'],
        ['Tim', 'Man gewöhnt sich daran. Aber Achtung: Sonntags darf kein Glas eingeworfen werden. Das ist zu laut!', 'Je went eraan. Maar let op: op zondag mag er geen glas in gegooid worden. Dat is te lawaaiig!']
      ],
      q: [
        { t: 'mc', q: 'Was wird in der blauen Tonne gesammelt?', o: ['Papier', 'Verpackungen', 'Biomüll'] },
        { t: 'mc', q: 'Wie oft wird der Restmüll abgeholt?', o: ['Alle zwei Wochen', 'Jede Woche', 'Jeden Tag'] },
        { t: 'mc', q: 'Was darf man sonntags nicht tun?', o: ['Glas in den Container werfen', 'Flaschen zurückgeben', 'Papier sammeln'] }
      ]
    },
    culture: { t: 'Mülltrennung en Pfand', html: `<p>Afval scheiden is in Duitsland bijna een volkssport. De meeste huizen hebben vier containers: <b>blau</b> (papier), <b>gelb</b> (verpakkingen, <i>Gelber Sack</i>), <b>braun</b> (<i>Biomüll</i>) en <b>schwarz/grau</b> (<i>Restmüll</i>). Glas gaat op kleur naar de container: wit, bruin, groen.</p>
<p>Op bijna alle flessen en blikjes zit <b>Pfand</b>: 25 cent op wegwerpflessen en blikjes (<i>Einweg</i>), 8 of 15 cent op herbruikbare flessen (<i>Mehrweg</i>). Je levert ze in bij de <b>Pfandautomat</b> en krijgt een bon voor de kassa.</p>
<p>🤫 En dan de <b>Ruhezeiten</b>: op zondag en ’s avonds geen glas in de glasbak, niet boren en niet grasmaaien.</p>` },
    ex: [
      { t: 'cloze', s: 'Der Müll ___ jeden Montag abgeholt.', a: ['wird'], o: ['wird', 'werdet', 'ist'], nl: 'Het afval wordt elke maandag opgehaald.', x: 'Uitzondering: werden is onregelmatig: er wird (met i, zonder extra -t).', tag: 'de-passiv' },
      { t: 'cloze', s: 'Die Flaschen ___ im Supermarkt zurückgegeben.', a: ['werden'], o: ['werden', 'wird', 'sind'], nl: 'De flessen worden in de supermarkt ingeleverd.', tag: 'de-passiv' },
      { t: 'cloze', s: 'Hier wird ein neues Haus ___.', a: ['gebaut'], o: ['gebaut', 'bauen', 'baut'], nl: 'Hier wordt een nieuw huis gebouwd.', tag: 'de-passiv' },
      { t: 'cloze', s: 'Der Müll muss getrennt ___.', a: ['werden'], o: ['werden', 'worden', 'sein'], nl: 'Het afval moet gescheiden worden.', tag: 'de-passiv' },
      { t: 'cloze', s: 'Das Haus ___ 1900 gebaut.', a: ['wurde'], o: ['wurde', 'würde', 'ist'], nl: 'Het huis is in 1900 gebouwd.', x: 'Valkuil: Nederlands «is gebouwd» (gebeurtenis) = Duits wurde gebaut. Ist gebaut zou een toestand zijn.', tag: 'de-passiv-praet' },
      { t: 'cloze', s: 'Das Auto ist repariert ___.', a: ['worden'], o: ['worden', 'geworden', 'werden'], nl: 'De auto is gerepareerd.', x: 'Uitzondering: in de lijdende vorm is het deelwoord worden (zonder ge-), omdat er al een deelwoord met ge- staat.', tag: 'de-passiv-praet' },
      { t: 'cloze', s: 'Der Brief wurde ___ meiner Chefin geschrieben.', a: ['von'], o: ['von', 'durch', 'bei'], nl: 'De brief is door mijn baas geschreven.', tag: 'de-passiv' },
      { t: 'cloze', s: 'Hier ___ nicht geraucht.', a: ['wird'], o: ['wird', 'wird es', 'werden'], nl: 'Hier wordt niet gerookt.', x: 'Het loze onderwerp es verdwijnt zodra er iets anders (hier) vooraan staat.', tag: 'de-passiv' },
      { t: 'mc', q: 'Wat betekent «Der Laden ist geschlossen»?', o: ['De winkel is dicht (toestand).', 'De winkel wordt gesloten.', 'De winkel werd gesloten.'], tag: 'de-passiv-praet' },
      { t: 'mc', q: 'Welke vorm betekent «werd»?', o: ['wurde', 'würde', 'wird'], tag: 'de-passiv-praet' },
      { t: 'tr', nl: 'In Duitsland wordt veel bier gedronken.', a: ['In Deutschland wird viel Bier getrunken.'], tag: 'de-passiv' },
      { t: 'tr', nl: 'De auto wordt gerepareerd.', a: ['Das Auto wird repariert.'], tag: 'de-passiv' },
      { t: 'tr', nl: 'De kerk is in 1750 gebouwd.', a: ['Die Kirche wurde 1750 gebaut.', 'Die Kirche ist 1750 gebaut worden.'], tag: 'de-passiv-praet' },
      { t: 'order', s: 'Das Altpapier wird einmal im Monat abgeholt.', nl: 'Het oud papier wordt één keer per maand opgehaald.', tag: 'de-passiv' },
      { t: 'match', p: [['der Müll', 'het afval'], ['das Pfand', 'het statiegeld'], ['wegwerfen', 'weggooien'], ['nachhaltig', 'duurzaam'], ['der Strom', 'de stroom']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Was passiert mit einer Pfandflasche?', type: 'Informatieve tekst',
      p: [
        ['Jedes Jahr werden in Deutschland Milliarden Flaschen und Dosen zurückgegeben. Das Pfandsystem wurde 2003 eingeführt, weil zu viele Verpackungen in der Natur landeten. Heute werden über 98 Prozent der Einwegflaschen zurückgebracht.', 'Elk jaar worden in Duitsland miljarden flessen en blikjes ingeleverd. Het statiegeldsysteem is in 2003 ingevoerd, omdat te veel verpakkingen in de natuur terechtkwamen. Tegenwoordig wordt meer dan 98 procent van de wegwerpflessen teruggebracht.'],
        ['Was passiert danach? Im Automaten wird die Flasche gescannt und zusammengedrückt. Dann wird das Material in eine Fabrik gebracht. Dort wird es gewaschen, geschmolzen und zu neuem Kunststoff verarbeitet.', 'Wat gebeurt er daarna? In de automaat wordt de fles gescand en samengeperst. Dan wordt het materiaal naar een fabriek gebracht. Daar wordt het gewassen, gesmolten en tot nieuw plastic verwerkt.'],
        ['Mehrwegflaschen aus Glas werden nicht zerstört. Sie werden gereinigt und bis zu fünfzigmal neu gefüllt. Das spart viel Energie. Deshalb gelten Mehrwegflaschen als besonders umweltfreundlich.', 'Herbruikbare flessen van glas worden niet vernietigd. Ze worden schoongemaakt en tot wel vijftig keer opnieuw gevuld. Dat bespaart veel energie. Daarom gelden herbruikbare flessen als bijzonder milieuvriendelijk.']
      ],
      gl: [['einführen', 'invoeren'], ['zusammendrücken', 'samenpersen'], ['schmelzen', 'smelten'], ['zerstören', 'vernietigen'], ['gelten als', 'gelden als']],
      q: [
        { t: 'mc', q: 'Wann wurde das Pfandsystem eingeführt?', o: ['2003', '1961', '1998'] },
        { t: 'mc', q: 'Was passiert mit Einwegflaschen in der Fabrik?', o: ['Sie werden zu neuem Kunststoff verarbeitet.', 'Sie werden neu gefüllt.', 'Sie werden verbrannt.'] },
        { t: 'mc', q: 'Wie oft kann eine Mehrwegflasche aus Glas gefüllt werden?', o: ['Bis zu fünfzigmal', 'Nur einmal', 'Zweimal'] }
      ]
    },
    say: [['Der Müll wird getrennt.', 'Het afval wordt gescheiden.'], ['Das Haus wurde 1900 gebaut.', 'Het huis is in 1900 gebouwd.'], ['Die Flaschen werden zurückgegeben.', 'De flessen worden ingeleverd.'], ['Hier darf nicht geraucht werden.', 'Hier mag niet gerookt worden.']],
    task: { nl: 'Beschrijf hoe bij jou thuis of in je stad afval wordt gescheiden en opgehaald. Gebruik minstens drie keer de lijdende vorm (4 zinnen).', model: 'Bei uns wird der Müll in drei Tonnen getrennt. Das Papier wird einmal im Monat abgeholt. Glas muss zum Container gebracht werden. Seit 2023 wird auch auf Dosen Pfand bezahlt.' },
    scenario: { nl: 'Je bent net verhuisd naar Duitsland en vraagt je buurman hoe het afval werkt.', role: 'You are Tim, a friendly neighbour in Freiburg. Explain the waste system to the learner using the passive (what is collected where, when it is picked up, where bottles are returned) and ask how it is done in the Netherlands. B1 German, use "du".', goal: 'Vraag en vertel hoe iets wordt gedaan, in de lijdende vorm.' }
  });

  /* ───────────────────────── B1 · 5 ───────────────────────── */
  U({
    id: 'de-b1-05', level: 'B1', icon: '📖', title: 'Es war einmal …', nl: 'Verhalen vertellen: het Präteritum',
    goals: ['Een verhaal of levensloop in de verleden tijd vertellen', 'Het Präteritum van zwakke en sterke werkwoorden herkennen en maken', 'Weten wanneer je Präteritum en wanneer Perfekt gebruikt', 'Een sprookje of krantenbericht lezen'],
    vocab: [
      ['das Märchen', 'het sprookje'], ['die Geschichte', 'het verhaal / de geschiedenis'], ['der König / die Königin', 'de koning / de koningin'], ['der Prinz / die Prinzessin', 'de prins / de prinses'], ['die Hexe', 'de heks'],
      ['der Wolf', 'de wolf'], ['der Zwerg', 'de dwerg'], ['das Schloss', 'het kasteel / het slot'], ['der Turm', 'de toren'], ['die Mauer', 'de muur'], ['der Krieg', 'de oorlog'], ['der Frieden', 'de vrede'], ['das Jahrhundert', 'de eeuw'],
      ['geschehen', 'gebeuren'], ['passieren', 'gebeuren'], ['plötzlich', 'plotseling'], ['eines Tages', 'op een dag'], ['damals', 'toen / destijds'], ['schließlich', 'ten slotte'], ['erzählen', 'vertellen'], ['sterben', 'sterven'],
      ['geboren werden', 'geboren worden'], ['wachsen', 'groeien'], ['verlassen', 'verlaten'], ['fliehen', 'vluchten'], ['Es war einmal …', 'Er was eens …']
    ],
    grammar: [
      { t: 'Het Präteritum: regelmatig', es: 'Das Präteritum (schwache Verben)',
        html: `<p>Het <b>Präteritum</b> is de «schrijftaal-verleden tijd»: je komt het tegen in sprookjes, romans, krantenberichten en biografieën. In gesprekken gebruik je het Perfekt.</p>
<p><b>Uitzondering</b> op die verdeling: <i>sein, haben, werden</i>, de modale werkwoorden en <i>es gab, ich wusste, ich fand, ich dachte</i> staan ook in gesprekken bijna altijd in het Präteritum. <b>Waarom?</b> Het zijn korte, zeer frequente vormen; <i>ich war</i> is veel sneller dan <i>ich bin gewesen</i>.</p>
<p>Regelmatige (zwakke) werkwoorden: stam + <b>-te</b> + uitgang: <i>machen → ich mach<b>te</b>, du mach<b>test</b>, er mach<b>te</b>, wir mach<b>ten</b></i>. De <i>ich</i>- en <i>er</i>-vorm zijn <b>gelijk</b>.</p>
<p><b>Verschil met het Nederlands:</b> er is geen keuze tussen -te en -de (geen ’t kofschip): het is altijd <b>-te</b>. <i>wohnen → wohn<b>te</b></i> (woonde), <i>spielen → spiel<b>te</b></i> (speelde).</p>
<p><b>Uitzondering:</b> na een stam op <i>-t</i> of <i>-d</i> komt een extra <b>e</b>: <i>arbeiten → arbeit<b>e</b>te, warten → wartete</i>. <b>Waarom?</b> Anders hoor je de uitgang niet (<i>arbeitte</i>).</p>`,
        table: [['', 'machen', 'arbeiten', 'haben', 'sein'], ['ich', 'machte', 'arbeitete', 'hatte', 'war'], ['du', 'machtest', 'arbeitetest', 'hattest', 'warst'], ['er / sie / es', 'machte', 'arbeitete', 'hatte', 'war'], ['wir', 'machten', 'arbeiteten', 'hatten', 'waren'], ['ihr', 'machtet', 'arbeitetet', 'hattet', 'wart'], ['sie / Sie', 'machten', 'arbeiteten', 'hatten', 'waren']],
        sum: 'Ich machte, du machtest, er machte, wir machten.',
        ex: [['Es war einmal ein König, der in einem großen Schloss wohnte.', 'Er was eens een koning die in een groot kasteel woonde.'], ['Sie arbeitete zwanzig Jahre als Lehrerin.', 'Ze werkte twintig jaar als lerares.'], ['Die Kinder spielten im Wald und hörten plötzlich eine Stimme.', 'De kinderen speelden in het bos en hoorden plotseling een stem.']] },
      { t: 'Sterke werkwoorden in het Präteritum', es: 'Das Präteritum (starke Verben)',
        html: `<p>Sterke werkwoorden veranderen van <b>klinker</b> en krijgen bij <i>ich</i> en <i>er</i> <b>geen uitgang</b>: <i>gehen → ich g<b>i</b>ng, er ging; kommen → ich k<b>a</b>m; sehen → ich s<b>a</b>h</i>.</p>
<p>Goed nieuws: het zijn meestal dezelfde werkwoorden als in het Nederlands, met een vergelijkbare klinkerwissel: <i>ging – ging, kam – kwam, sah – zag, gab – gaf, schrieb – schreef, fuhr – voer, trank – dronk</i>.</p>
<p><b>Uitzondering:</b> een paar werkwoorden zijn «gemengd»: ze wisselen van klinker én krijgen <b>-te</b>: <i>denken → <b>dachte</b>, bringen → <b>brachte</b>, wissen → <b>wusste</b>, kennen → <b>kannte</b>, nennen → nannte, rennen → rannte</i>. <b>Waarom?</b> Het zijn oorspronkelijk zwakke werkwoorden waarvan de stamklinker door een oude klankwet veranderde; Nederlands heeft hetzelfde bij <i>dacht, bracht, wist</i>.</p>
<p><b>Let op (valse vrienden):</b> <i>ich <b>bekam</b></i> = ik kreeg (niet: ik bekwam), <i>ich <b>wurde</b></i> = ik werd, <i>er <b>hieß</b></i> = hij heette, <i>er <b>ließ</b></i> = hij liet.</p>`,
        table: [['heel werkwoord', 'Präteritum', 'Perfekt', 'Nederlands'], ['gehen', 'ging', 'ist gegangen', 'ging'], ['kommen', 'kam', 'ist gekommen', 'kwam'], ['sehen', 'sah', 'hat gesehen', 'zag'], ['geben', 'gab', 'hat gegeben', 'gaf'], ['finden', 'fand', 'hat gefunden', 'vond'], ['schreiben', 'schrieb', 'hat geschrieben', 'schreef'], ['denken', 'dachte', 'hat gedacht', 'dacht'], ['wissen', 'wusste', 'hat gewusst', 'wist']],
        ex: [['Eines Tages ging das Mädchen in den Wald und sah einen Wolf.', 'Op een dag ging het meisje het bos in en zag een wolf.'], ['Er schrieb einen Brief, aber er bekam keine Antwort.', 'Hij schreef een brief, maar hij kreeg geen antwoord.'], ['Ich wusste nicht, dass du in Wien warst.', 'Ik wist niet dat je in Wenen was.']] }
    ],
    dialogue: {
      t: 'Die Brüder Grimm', place: 'Kassel 🇩🇪',
      lines: [
        ['Mila', 'Wusstest du, dass die Brüder Grimm hier in Kassel lebten?', 'Wist je dat de gebroeders Grimm hier in Kassel woonden?'],
        ['Tim', 'Nein! Ich dachte, sie kamen aus Berlin.', 'Nee! Ik dacht dat ze uit Berlijn kwamen.'],
        ['Mila', 'Dort starben sie. Aber die Märchen sammelten sie hier. Eine Frau aus dem Dorf erzählte ihnen viele Geschichten.', 'Daar zijn ze gestorven. Maar de sprookjes verzamelden ze hier. Een vrouw uit het dorp vertelde hun veel verhalen.'],
        ['Tim', 'Also schrieben sie die Märchen gar nicht selbst?', 'Dus ze schreven de sprookjes helemaal niet zelf?'],
        ['Mila', 'Nein, sie hörten zu und schrieben alles auf. 1812 erschien das erste Buch.', 'Nee, ze luisterden en schreven alles op. In 1812 verscheen het eerste boek.'],
        ['Tim', 'Als Kind hatte ich Angst vor dem Wolf in «Rotkäppchen».', 'Als kind was ik bang voor de wolf in «Roodkapje».'],
        ['Mila', 'Ich auch! Die Märchen waren damals eigentlich nicht für Kinder gedacht.', 'Ik ook! De sprookjes waren destijds eigenlijk niet voor kinderen bedoeld.'],
        ['Tim', 'Das erklärt einiges. Komm, wir gehen ins Museum.', 'Dat verklaart een hoop. Kom, we gaan naar het museum.']
      ],
      q: [
        { t: 'mc', q: 'Wo sammelten die Brüder Grimm ihre Märchen?', o: ['In Kassel', 'In Berlin', 'In Wien'] },
        { t: 'mc', q: 'Wann erschien das erste Buch?', o: ['1812', '1912', '1750'] },
        { t: 'mc', q: 'Wovor hatte Tim als Kind Angst?', o: ['Vor dem Wolf', 'Vor der Hexe', 'Vor dem König'] }
      ]
    },
    culture: { t: 'Sprookjes en een gedeelde geschiedenis', html: `<p>De <b>Kinder- und Hausmärchen</b> van Jacob en Wilhelm Grimm (1812) horen bij de meest vertaalde boeken ter wereld: <i>Rotkäppchen</i> (Roodkapje), <i>Schneewittchen</i> (Sneeuwwitje), <i>Aschenputtel</i> (Assepoester), <i>Hänsel und Gretel</i>. Langs de <b>Deutsche Märchenstraße</b> van Hanau naar Bremen kun je de plekken bezoeken.</p>
<p>De Grimms waren ook taalkundigen: ze begonnen het grote <i>Deutsches Wörterbuch</i> en ontdekten klankwetten die verklaren waarom Duits <i>Wasser</i> zegt en Nederlands <i>water</i>.</p>
<p>🧱 Bij recente geschiedenis horen twee jaartallen: <b>1961</b> (bouw van de Berlijnse Muur) en <b>9 november 1989</b> (<i>der Mauerfall</i>). Op <b>3 oktober</b> viert Duitsland de <i>Tag der Deutschen Einheit</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Es ___ einmal ein König.', a: ['war'], o: ['war', 'ist', 'wurde'], nl: 'Er was eens een koning.', tag: 'de-praet' },
      { t: 'cloze', s: 'Der König ___ in einem Schloss.', a: ['wohnte'], o: ['wohnte', 'wohnde', 'wohnt'], nl: 'De koning woonde in een kasteel.', x: 'In het Duits is de uitgang altijd -te, nooit -de.', tag: 'de-praet' },
      { t: 'cloze', s: 'Sie ___ zwanzig Jahre in Berlin.', a: ['arbeitete'], o: ['arbeitete', 'arbeitte', 'arbeitet'], nl: 'Ze werkte twintig jaar in Berlijn.', x: 'Uitzondering: na een stam op -t komt een extra e: arbeitete, anders hoor je de uitgang niet.', tag: 'de-praet' },
      { t: 'cloze', s: 'Das Mädchen ___ in den Wald.', a: ['ging'], o: ['ging', 'gehte', 'gang'], nl: 'Het meisje ging het bos in.', tag: 'de-praet-stark' },
      { t: 'cloze', s: 'Plötzlich ___ ein Wolf.', a: ['kam'], o: ['kam', 'kommte', 'kamte'], nl: 'Plotseling kwam er een wolf.', tag: 'de-praet-stark' },
      { t: 'cloze', s: 'Ich ___ nicht, dass du krank warst.', a: ['wusste'], o: ['wusste', 'wisste', 'weißte'], nl: 'Ik wist niet dat je ziek was.', x: 'Uitzondering: wissen is een gemengd werkwoord: klinkerwissel én -te (wusste), net als Nederlands wist.', tag: 'de-praet-stark' },
      { t: 'cloze', s: 'Er ___ an seine Familie.', a: ['dachte'], o: ['dachte', 'denkte', 'dach'], nl: 'Hij dacht aan zijn familie.', tag: 'de-praet-stark' },
      { t: 'cloze', s: 'Sie ___ einen Brief von ihrer Tante.', a: ['bekam'], o: ['bekam', 'bekommte', 'kriegt'], nl: 'Ze kreeg een brief van haar tante.', tag: 'de-praet-stark' },
      { t: 'mc', q: 'Wanneer gebruik je meestal het Präteritum?', o: ['In geschreven verhalen en berichten', 'In elk gesprek', 'Alleen in vragen'], tag: 'de-praet' },
      { t: 'mc', q: 'Wat is het Präteritum van «sehen» bij er?', o: ['sah', 'sehte', 'sieht'], tag: 'de-praet-stark' },
      { t: 'tr', nl: 'Er was eens een prinses.', a: ['Es war einmal eine Prinzessin.'], tag: 'de-praet' },
      { t: 'tr', nl: 'Ik had geen tijd.', a: ['Ich hatte keine Zeit.'], tag: 'de-praet' },
      { t: 'tr', nl: 'Hij schreef een boek.', a: ['Er schrieb ein Buch.'], tag: 'de-praet-stark' },
      { t: 'order', s: 'Eines Tages fand der Prinz einen goldenen Schlüssel.', nl: 'Op een dag vond de prins een gouden sleutel.', tag: 'de-praet-stark' },
      { t: 'match', p: [['das Märchen', 'het sprookje'], ['die Hexe', 'de heks'], ['der Zwerg', 'de dwerg'], ['plötzlich', 'plotseling'], ['damals', 'destijds']], tag: 'de-vok' }
    ],
    reading: {
      t: 'Der Froschkönig (kurz erzählt)', type: 'Sprookje',
      p: [
        ['Es war einmal eine Prinzessin, die jeden Tag mit einer goldenen Kugel am Brunnen spielte. Eines Tages fiel die Kugel ins Wasser. Die Prinzessin weinte laut. Da kam ein Frosch und fragte: «Was gibst du mir, wenn ich dir die Kugel hole?»', 'Er was eens een prinses die elke dag met een gouden bal bij de put speelde. Op een dag viel de bal in het water. De prinses huilde luid. Toen kwam er een kikker en vroeg: «Wat geef je me als ik de bal voor je haal?»'],
        ['Sie versprach ihm alles: Er durfte von ihrem Teller essen und in ihrem Bett schlafen. Der Frosch holte die Kugel, aber die Prinzessin lief schnell nach Hause und vergaß ihn. Am Abend klopfte es an der Tür des Schlosses.', 'Ze beloofde hem alles: hij mocht van haar bord eten en in haar bed slapen. De kikker haalde de bal, maar de prinses liep snel naar huis en vergat hem. ’s Avonds werd er op de deur van het kasteel geklopt.'],
        ['Der König sagte: «Was man verspricht, muss man halten.» Die Prinzessin war so wütend, dass sie den Frosch an die Wand warf. Plötzlich stand dort ein schöner Prinz. Eine Hexe hatte ihn verzaubert. Sie heirateten und lebten glücklich.', 'De koning zei: «Wat je belooft, moet je nakomen.» De prinses was zo boos dat ze de kikker tegen de muur gooide. Plotseling stond daar een knappe prins. Een heks had hem betoverd. Ze trouwden en leefden gelukkig.']
      ],
      gl: [['die Kugel', 'de bal / de kogel'], ['der Brunnen', 'de put / de bron'], ['der Frosch', 'de kikker'], ['versprechen', 'beloven'], ['verzaubern', 'betoveren']],
      q: [
        { t: 'mc', q: 'Was fiel in den Brunnen?', o: ['Eine goldene Kugel', 'Ein goldener Schlüssel', 'Die Krone'] },
        { t: 'mc', q: 'Was versprach die Prinzessin dem Frosch?', o: ['Er durfte von ihrem Teller essen und in ihrem Bett schlafen.', 'Er bekam die Kugel.', 'Er durfte König werden.'] },
        { t: 'mc', q: 'Wie wurde der Frosch wieder ein Prinz?', o: ['Die Prinzessin warf ihn an die Wand.', 'Die Prinzessin küsste ihn.', 'Der König half ihm.'] }
      ]
    },
    say: [['Es war einmal ein König.', 'Er was eens een koning.'], ['Eines Tages ging sie in den Wald.', 'Op een dag ging ze het bos in.'], ['Ich wusste das nicht.', 'Dat wist ik niet.'], ['Sie lebten glücklich bis ans Ende.', 'Ze leefden gelukkig tot het einde.']],
    task: { nl: 'Schrijf een korte levensloop van een bekend persoon of familielid in het Präteritum (5 zinnen): waar werd hij/zij geboren, wat deed hij/zij?', model: 'Meine Großmutter wurde 1935 in Groningen geboren. Sie wuchs auf einem Bauernhof auf und ging nur sechs Jahre zur Schule. Mit zwanzig lernte sie meinen Großvater kennen. Sie arbeiteten zusammen in einer Bäckerei. Später zogen sie nach Utrecht und bekamen vier Kinder.' },
    scenario: { nl: 'Je vertelt een Duitse vriendin een sprookje of een verhaal uit je jeugd.', role: 'You are Mila from Kassel, the city of the Brothers Grimm. Ask the learner to tell a fairy tale or a childhood story, ask follow-up questions ("Und was passierte dann?"), and tell a short one yourself in the Präteritum. B1 German, use "du".', goal: 'Vertel een verhaal in de verleden tijd.' }
  });
})(window.SPT);
