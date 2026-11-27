/* Frans voor Nederlandstaligen — niveau A1, units 1–5 (Frans van Frankrijk, uitleg in het Nederlands).
   Velden: in vocab/zinnen is [0] de doeltaal (Frans) en [1] het Nederlands.
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzes, eerste = juist), tr (NL→FR), order, match.
   Leestekens: in het Frans staat er een spatie vóór ? ! : ; en binnen « ». S.frTypo maakt daar een vaste (niet-afbrekende) spatie van. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('fr-nl')) return;
  const NB = ' ';
  const typo = s => s.replace(/ ([?!;:»])/g, NB + '$1').replace(/« /g, '«' + NB);
  S.frTypo = function fix(v, k) {
    if (typeof v === 'string') return k === 'id' || k === 'tag' ? v : typo(v);
    if (Array.isArray(v)) return v.map(x => fix(x, k));
    if (v && typeof v === 'object') { const o = {}; for (const key in v) o[key] = fix(v[key], key); return o; }
    return v;
  };
  const U = u => S.addUnit(S.frTypo(u));
  Object.assign(S.C.TAGS, {
    'fr-etre': 'être (je suis, tu es…)', 'fr-tu-vous': 'tu of vous', 'fr-avoir': 'avoir (j’ai, tu as…)', 'fr-poss': 'mon, ma, mes…', 'fr-num': 'getallen',
    'fr-art': 'le, la, l’, les / un, une, des', 'fr-partitif': 'du, de la, de l’ (delend lidwoord)', 'fr-er': 'werkwoorden op -er', 'fr-refl': 'wederkerende werkwoorden (se lever)',
    'fr-heure': 'de tijd / klokkijken', 'fr-aller': 'aller + au, à la, aux', 'fr-ilya': 'il y a', 'fr-prep': 'voorzetsels van plaats', 'fr-imp': 'gebiedende wijs',
    'fr-q': 'vragen stellen', 'fr-ordre': 'woordvolgorde', 'fr-voc': 'woordenschat', 'fr-genre': 'mannelijk of vrouwelijk'
  });

  /* ───────────────────────── A1 · 1 ───────────────────────── */
  U({
    id: 'fr-a1-01', level: 'A1', icon: '👋', title: 'Bonjour ! Enchanté', nl: 'Begroeten en jezelf voorstellen',
    goals: ['Iemand begroeten en afscheid nemen', 'Zeggen hoe je heet en waar je vandaan komt', 'Kiezen tussen tu en vous', 'Het werkwoord être gebruiken'],
    vocab: [
      ['bonjour', 'goedendag / hallo'], ['salut', 'hoi / doei'], ['bonsoir', 'goedenavond'], ['bonne nuit', 'welterusten'], ['au revoir', 'tot ziens'],
      ['à bientôt', 'tot snel'], ['à demain', 'tot morgen'], ['Comment ça va ?', 'Hoe gaat het?'], ['Ça va bien, merci.', 'Het gaat goed, dank je.'], ['Et toi ?', 'En met jou?'],
      ['Et vous ?', 'En met u?'], ['Comment tu t\'appelles ?', 'Hoe heet je?'], ['Je m\'appelle…', 'Ik heet…'], ['Enchanté.', 'Aangenaam.'],
      ['Tu viens d\'où ?', 'Waar kom je vandaan?'], ['Je viens des Pays-Bas.', 'Ik kom uit Nederland.'], ['merci', 'dank je / dank u'], ['de rien', 'graag gedaan'],
      ['s\'il vous plaît', 'alstublieft (bij een verzoek)'], ['s\'il te plaît', 'alsjeblieft (bij een verzoek)'], ['pardon', 'pardon / sorry'], ['excusez-moi', 'neemt u mij niet kwalijk'],
      ['oui', 'ja'], ['non', 'nee'], ['un ami / une amie', 'een vriend / een vriendin'], ['le professeur', 'de leraar / de docent'], ['un étudiant / une étudiante', 'een student / een studente'],
      ['néerlandais / néerlandaise', 'Nederlands (van een persoon)'], ['français / française', 'Frans (van een persoon)']
    ],
    grammar: [
      { t: 'Het werkwoord être: zijn', es: 'Le verbe être',
        html: `<p><b>Être</b> betekent <i>zijn</i>. Het is het belangrijkste werkwoord van het Frans en het is <b>helemaal onregelmatig</b>: je leert de vormen uit je hoofd.</p>
<p>In het Frans staat er <b>altijd</b> een onderwerp bij het werkwoord: <b>je</b> suis, <b>tu</b> es. Je kunt het niet weglaten zoals in het Spaans.</p>
<p>Uitspraak: de laatste medeklinker hoor je meestal <b>niet</b>. <i>Je suis</i> klinkt als «zjuh swie», <i>tu es</i> en <i>il est</i> klinken allebei als «è».</p>
<p><b>On</b> betekent letterlijk <i>men</i>, maar in spreektaal gebruiken Fransen het de hele dag voor <i>wij</i>: <i>On est à Paris</i> = We zijn in Parijs. Het werkwoord staat dan in de hij-vorm.</p>`,
        table: [['', 'être', 'uitspraak'], ['ik ben', 'je suis', 'zjuh swie'], ['jij bent', 'tu es', 'tu è'], ['hij / zij is · we zijn (spreektaal)', 'il / elle / on est', 'iel è'], ['wij zijn', 'nous sommes', 'noe som'], ['u bent / jullie zijn', 'vous êtes', 'voe-zèt'], ['zij zijn', 'ils / elles sont', 'iel son']],
        sum: 'Je suis, tu es, il est, elle est, nous sommes, vous êtes, ils sont.',
        ex: [['Je suis Sanne. Je suis néerlandaise.', 'Ik ben Sanne. Ik ben Nederlandse.'], ['Il est professeur.', 'Hij is leraar.'], ['Nous sommes à Lyon.', 'Wij zijn in Lyon.']] },
      { t: 'Tu of vous?', es: 'Tu ou vous ?',
        html: `<p>Net als in het Nederlands (jij / u) kies je in het Frans tussen <b>tu</b> en <b>vous</b>.</p>
<p><b>Tu</b> zeg je tegen vrienden, familie, kinderen en leeftijdsgenoten. <b>Vous</b> zeg je tegen onbekende volwassenen, in winkels, tegen je baas en tegen oudere mensen. Fransen zeggen veel langer <i>vous</i> dan Nederlanders <i>u</i> zeggen: bij twijfel kies je <b>vous</b>.</p>
<p>Let op: <b>vous</b> is óók het gewone woord voor <i>jullie</i>. <i>Vous êtes néerlandais ?</i> kan dus betekenen: Bent u Nederlander? of: Zijn jullie Nederlanders?</p>
<p>Daarom zijn er van veel zinnetjes twee versies: <i>Et toi ?</i> / <i>Et vous ?</i>, <i>s'il te plaît</i> / <i>s'il vous plaît</i>.</p>`,
        table: [['', 'informeel (tu)', 'beleefd (vous)'], ['Hoe gaat het?', 'Comment ça va ? / Ça va ?', 'Comment allez-vous ?'], ['Hoe heet je / heet u?', 'Comment tu t\'appelles ?', 'Comment vous vous appelez ?'], ['alsjeblieft / alstublieft', 's\'il te plaît', 's\'il vous plaît'], ['En jij / u?', 'Et toi ?', 'Et vous ?']],
        ex: [['Salut Léa, ça va ?', 'Hoi Léa, gaat het?'], ['Bonjour madame, comment allez-vous ?', 'Goedendag mevrouw, hoe gaat het met u?']] },
      { t: 'Mannelijk en vrouwelijk: néerlandais / néerlandaise', es: 'Masculin et féminin',
        html: `<p>Bijvoeglijke naamwoorden passen zich aan de persoon aan. Voor een vrouw komt er meestal een <b>-e</b> achter: <i>français → français<b>e</b></i>, <i>étudiant → étudiant<b>e</b></i>.</p>
<p>Je <b>hoort</b> het verschil: door de -e spreek je de medeklinker ervoor wél uit. <i>Français</i> klinkt als «fransè», <i>française</i> als «fransèz».</p>
<p>Eindigt het woord al op -e, dan verandert er niets: <i>il est belge</i>, <i>elle est belge</i>.</p>
<p>Een vraag stellen is makkelijk: zeg de gewone zin met een <b>vraagtoon</b> omhoog. <i>Tu es néerlandais ?</i> Een ontkenning maak je met <b>ne … pas</b> om het werkwoord heen: <i>Je <b>ne</b> suis <b>pas</b> français.</i></p>`,
        table: [['mannelijk', 'vrouwelijk', 'betekenis'], ['néerlandais', 'néerlandaise', 'Nederlands'], ['français', 'française', 'Frans'], ['étudiant', 'étudiante', 'student'], ['enchanté', 'enchantée', 'aangenaam (je hoort geen verschil)'], ['belge', 'belge', 'Belgisch']],
        ex: [['Daan est néerlandais. Sanne est néerlandaise.', 'Daan is Nederlander. Sanne is Nederlandse.'], ['Je ne suis pas professeur.', 'Ik ben geen leraar.']] }
    ],
    dialogue: {
      t: 'Premier jour à l\'école de langues', place: 'Lyon 🇫🇷',
      lines: [
        ['Sanne', 'Bonjour !', 'Goedendag!'],
        ['Hugo', 'Salut ! Ça va ?', 'Hoi! Gaat het?'],
        ['Sanne', 'Ça va bien, merci. Et toi ?', 'Het gaat goed, dank je. En met jou?'],
        ['Hugo', 'Très bien. Je m\'appelle Hugo. Comment tu t\'appelles ?', 'Heel goed. Ik heet Hugo. Hoe heet jij?'],
        ['Sanne', 'Je m\'appelle Sanne. Enchantée.', 'Ik heet Sanne. Aangenaam.'],
        ['Hugo', 'Enchanté. Tu viens d\'où ?', 'Aangenaam. Waar kom je vandaan?'],
        ['Sanne', 'Je viens des Pays-Bas. Je suis néerlandaise. Tu es étudiant ?', 'Ik kom uit Nederland. Ik ben Nederlandse. Ben jij student?'],
        ['Hugo', 'Non, je ne suis pas étudiant. Je suis le professeur de français.', 'Nee, ik ben geen student. Ik ben de leraar Frans.'],
        ['Sanne', 'Oh, pardon ! Bonjour, monsieur.', 'O, sorry! Goedendag, meneer.'],
        ['Hugo', 'Pas de problème. À demain, Sanne !', 'Geen probleem. Tot morgen, Sanne!']
      ],
      q: [
        { t: 'mc', q: 'Sanne vient d\'où ?', o: ['Des Pays-Bas', 'De France', 'De Belgique'] },
        { t: 'mc', q: 'Qui est Hugo ?', o: ['Le professeur de français', 'Un étudiant', 'Un ami de Sanne'] },
        { t: 'mc', q: 'Comment va Sanne ?', o: ['Elle va bien', 'Elle est fatiguée', 'Elle est triste'] }
      ]
    },
    culture: { t: 'Altijd eerst «bonjour»', html: `<p>In Frankrijk begin je <b>elk</b> contact met <b>Bonjour</b>: in de bakkerij, in de bus, in de lift, aan de balie. Wie meteen een vraag stelt zonder te groeten, komt onbeleefd over. Voeg er liefst <b>madame</b> of <b>monsieur</b> aan toe: <i>Bonjour, madame.</i></p>
<p>Vanaf een uur of zes 's avonds zeg je <b>Bonsoir</b>. <b>Bonne nuit</b> zeg je alleen als iemand gaat slapen.</p>
<p>😘 Vrienden en familie begroeten elkaar met <b>la bise</b>: kussen op de wang (twee in Parijs, soms drie of vier in andere streken). Bij een eerste, zakelijke ontmoeting geef je een hand.</p>
<p><b>Salut</b> is informeel en betekent zowel <i>hoi</i> als <i>doei</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Je ___ néerlandais.', a: ['suis'], o: ['suis', 'es', 'est'], nl: 'Ik ben Nederlander.', tag: 'fr-etre' },
      { t: 'cloze', s: 'Elle ___ professeur.', a: ['est'], o: ['est', 'es', 'suis'], nl: 'Zij is lerares.', tag: 'fr-etre' },
      { t: 'cloze', s: 'Nous ___ à Paris.', a: ['sommes'], o: ['sommes', 'sont', 'êtes'], nl: 'Wij zijn in Parijs.', tag: 'fr-etre' },
      { t: 'cloze', s: 'Vous ___ français ?', a: ['êtes'], o: ['êtes', 'es', 'sont'], nl: 'Bent u Frans? / Zijn jullie Frans?', tag: 'fr-etre' },
      { t: 'cloze', s: 'Tu ___ étudiant ?', a: ['es'], h: 'être', nl: 'Ben jij student?', tag: 'fr-etre' },
      { t: 'cloze', s: 'Ils ___ amis.', a: ['sont'], h: 'être', nl: 'Zij zijn vrienden.', tag: 'fr-etre' },
      { t: 'cloze', s: 'Sanne est ___.', a: ['néerlandaise'], o: ['néerlandaise', 'néerlandais', 'Pays-Bas'], nl: 'Sanne is Nederlandse.', x: 'Sanne is een vrouw: het bijvoeglijk naamwoord krijgt een -e.', tag: 'fr-genre' },
      { t: 'mc', q: 'Je komt een bakkerij binnen. Wat zeg je als eerste?', o: ['Bonjour, madame.', 'Salut !', 'Bonne nuit.'], x: 'In een winkel groet je beleefd met bonjour. Salut is voor vrienden.', tag: 'fr-tu-vous' },
      { t: 'mc', q: 'Je vraagt een onbekende mevrouw hoe het gaat.', o: ['Comment allez-vous ?', 'Ça va, toi ?', 'Comment tu t\'appelles ?'], tag: 'fr-tu-vous' },
      { t: 'mc', q: 'Iemand zegt «Merci !». Wat zeg je terug?', o: ['De rien.', 'S\'il vous plaît.', 'Enchanté.'], x: 'S\'il vous plaît gebruik je alleen bij een verzoek, niet als antwoord op merci.', tag: 'fr-voc' },
      { t: 'mc', q: 'Wat zeg je tegen een vriend om «alsjeblieft» te vragen?', o: ['s\'il te plaît', 's\'il vous plaît', 'de rien'], tag: 'fr-tu-vous' },
      { t: 'tr', nl: 'Ik heet Anna.', a: ['Je m\'appelle Anna.', 'Je suis Anna.'], tag: 'fr-voc' },
      { t: 'tr', nl: 'Ik kom uit Nederland.', a: ['Je viens des Pays-Bas.', 'Je suis des Pays-Bas.'], tag: 'fr-voc' },
      { t: 'tr', nl: 'Hoe gaat het?', a: ['Comment ça va ?', 'Ça va ?', 'Comment allez-vous ?', 'Comment vas-tu ?'], tag: 'fr-voc' },
      { t: 'tr', nl: 'Ik ben geen student.', a: ['Je ne suis pas étudiant.', 'Je ne suis pas étudiante.'], tag: 'fr-etre' },
      { t: 'order', s: 'Je ne suis pas le professeur de français.', nl: 'Ik ben niet de leraar Frans.', tag: 'fr-ordre' },
      { t: 'match', p: [['bonjour', 'goedendag'], ['au revoir', 'tot ziens'], ['merci', 'dank je'], ['de rien', 'graag gedaan'], ['à demain', 'tot morgen']], tag: 'fr-voc' }
    ],
    reading: {
      t: 'Salut, je m\'appelle Daan', type: 'Profiel in een taal-app',
      p: [
        ['Salut ! Je m\'appelle Daan de Vries. Je viens de Rotterdam, aux Pays-Bas. Je suis néerlandais et je suis étudiant.', 'Hoi! Ik heet Daan de Vries. Ik kom uit Rotterdam, in Nederland. Ik ben Nederlander en ik ben student.'],
        ['Je parle néerlandais, anglais et un peu français. Mon français n\'est pas très bon, mais je veux apprendre.', 'Ik spreek Nederlands, Engels en een beetje Frans. Mijn Frans is niet zo goed, maar ik wil het leren.'],
        ['Je cherche des amis en France, en Belgique ou au Québec. Écrivez-moi ! À bientôt.', 'Ik zoek vrienden in Frankrijk, België of Québec. Schrijf me! Tot snel.']
      ],
      gl: [['je parle', 'ik spreek'], ['un peu', 'een beetje'], ['je veux apprendre', 'ik wil leren'], ['je cherche', 'ik zoek'], ['écrivez-moi', 'schrijf me']],
      q: [
        { t: 'mc', q: 'Daan vient d\'où ?', o: ['De Rotterdam', 'De Paris', 'Du Québec'] },
        { t: 'mc', q: 'Daan est…', o: ['étudiant', 'professeur', 'français'] },
        { t: 'mc', q: 'Qu\'est-ce que Daan cherche ?', o: ['Des amis', 'Un professeur', 'Un travail'] }
      ]
    },
    say: [['Bonjour, comment ça va ?', 'Goedendag, hoe gaat het?'], ['Ça va bien, merci. Et vous ?', 'Het gaat goed, dank u. En met u?'], ['Je m\'appelle Sanne. Enchantée.', 'Ik heet Sanne. Aangenaam.'], ['Je viens des Pays-Bas.', 'Ik kom uit Nederland.']],
    task: { nl: 'Stel jezelf voor in 3 of 4 zinnen: groet, zeg hoe je heet, waar je vandaan komt en vraag hoe het met de ander gaat.', model: 'Bonjour ! Je m\'appelle Anna et je viens des Pays-Bas. Je suis étudiante. Comment ça va ?' },
    scenario: { nl: 'Je ontmoet Camille, een nieuwe collega uit Bordeaux.', role: 'You are Camille, a friendly new coworker from Bordeaux, France. It is your first day at an international office in Amsterdam. Speak simple French.', goal: 'Groet Camille, stel jezelf voor en vraag waar ze vandaan komt.' }
  });

  /* ───────────────────────── A1 · 2 ───────────────────────── */
  U({
    id: 'fr-a1-02', level: 'A1', icon: '👨‍👩‍👧', title: 'Ma famille', nl: 'Je familie',
    goals: ['Over je familie vertellen', 'Zeggen hoe oud iemand is', 'Avoir en mon, ma, mes gebruiken', 'Tellen tot 20'],
    vocab: [
      ['la famille', 'de familie / het gezin'], ['le père', 'de vader'], ['la mère', 'de moeder'], ['les parents', 'de ouders'], ['le frère', 'de broer'], ['la sœur', 'de zus'],
      ['le fils', 'de zoon'], ['la fille', 'de dochter / het meisje'], ['un enfant', 'een kind'], ['le mari', 'de echtgenoot / de man'], ['la femme', 'de vrouw / de echtgenote'],
      ['le grand-père', 'de opa'], ['la grand-mère', 'de oma'], ['un oncle', 'een oom'], ['la tante', 'de tante'], ['le cousin / la cousine', 'de neef / de nicht (kind van oom of tante)'],
      ['le chien', 'de hond'], ['le chat', 'de kat'], ['Tu as quel âge ?', 'Hoe oud ben je?'], ['J\'ai trente ans.', 'Ik ben dertig jaar.'],
      ['un', 'een (1)'], ['deux', 'twee'], ['trois', 'drie'], ['quatre', 'vier'], ['cinq', 'vijf'], ['six', 'zes'], ['sept', 'zeven'], ['huit', 'acht'], ['neuf', 'negen'], ['dix', 'tien'],
      ['onze', 'elf'], ['douze', 'twaalf'], ['quinze', 'vijftien'], ['vingt', 'twintig'], ['petit / petite', 'klein'], ['grand / grande', 'groot / lang']
    ],
    grammar: [
      { t: 'Het werkwoord avoir: hebben', es: 'Le verbe avoir',
        html: `<p><b>Avoir</b> betekent <i>hebben</i>. Net als <i>être</i> is het <b>onregelmatig</b>.</p>
<p><b>Je</b> wordt <b>j'</b> voor een klinker of een stomme h: <b>j'ai</b>, niet <s>je ai</s>. Dat heet <i>elisie</i> en gebeurt ook bij <i>le, la, ne, de</i>: <i>l'ami</i>, <i>je n'ai pas</i>.</p>
<p>⚠️ <b>Uitzondering ten opzichte van het Nederlands:</b> je leeftijd zeg je met <b>avoir</b>, niet met <i>être</i>. <i>J'<b>ai</b> trente ans</i> is letterlijk «ik heb dertig jaren». Waarom? In het Frans (en Spaans en Italiaans) «heb» je je jaren, zoals je ook honger en dorst «hebt»: <i>j'ai faim</i>, <i>j'ai soif</i>. Het woord <b>ans</b> mag je nooit weglaten.</p>
<p>Uitspraak: in <i>nous avons</i>, <i>vous avez</i>, <i>ils ont</i> hoor je de -s van het voornaamwoord als een <b>z</b>: «noe-zavon». Dat heet <i>liaison</i>. Zo hoor je het verschil tussen <i>ils ont</i> («iel-zon», ze hebben) en <i>ils sont</i> («iel son», ze zijn).</p>`,
        table: [['', 'avoir', 'uitspraak'], ['ik heb', 'j\'ai', 'zjè'], ['jij hebt', 'tu as', 'tu a'], ['hij / zij heeft', 'il / elle / on a', 'iel a'], ['wij hebben', 'nous avons', 'noe-zavon'], ['u hebt / jullie hebben', 'vous avez', 'voe-zavee'], ['zij hebben', 'ils / elles ont', 'iel-zon']],
        sum: 'J\'ai, tu as, il a, elle a, nous avons, vous avez, ils ont.',
        ex: [['J\'ai deux frères.', 'Ik heb twee broers.'], ['Elle a vingt ans.', 'Zij is twintig jaar.'], ['Vous avez des enfants ?', 'Hebt u kinderen?']] },
      { t: 'Mon, ma, mes: mijn', es: 'Mon, ma, mes',
        html: `<p>Het bezittelijk voornaamwoord richt zich in het Frans naar <b>het woord dat volgt</b>, niet naar de eigenaar. Je kiest dus op basis van het geslacht van het ding of de persoon die je «hebt».</p>
<p><b>mon</b> père (mannelijk), <b>ma</b> mère (vrouwelijk), <b>mes</b> parents (meervoud).</p>
<p>Let op bij <i>zijn</i> en <i>haar</i>: het Frans maakt daar <b>geen verschil</b> tussen. <i>Son père</i> betekent zowel <i>zijn vader</i> als <i>haar vader</i>; <i>sa mère</i> zowel <i>zijn moeder</i> als <i>haar moeder</i>.</p>
<p>⚠️ <b>Uitzondering:</b> voor een vrouwelijk woord dat met een <b>klinker</b> begint, gebruik je toch <b>mon, ton, son</b>: <i>mon amie</i> (mijn vriendin), <i>son école</i>. Waarom? <s>Ma amie</s> zou twee klinkers laten botsen; met <i>mon</i> loopt de zin soepel («mon-namie»).</p>`,
        table: [['', 'mannelijk', 'vrouwelijk', 'meervoud'], ['mijn', 'mon', 'ma', 'mes'], ['jouw', 'ton', 'ta', 'tes'], ['zijn / haar', 'son', 'sa', 'ses'], ['onze', 'notre', 'notre', 'nos'], ['uw / jullie', 'votre', 'votre', 'vos'], ['hun', 'leur', 'leur', 'leurs']],
        ex: [['Mon frère a un chien.', 'Mijn broer heeft een hond.'], ['Voici Marie et son mari.', 'Dit zijn Marie en haar man.'], ['Mes parents sont à Nice.', 'Mijn ouders zijn in Nice.']] },
      { t: 'Getallen 0–20', es: 'Les nombres de 0 à 20',
        html: `<p>De getallen tot en met 16 zijn losse woorden die je uit je hoofd leert. Vanaf 17 tel je op: <b>dix-sept</b> (tien-zeven), <b>dix-huit</b>, <b>dix-neuf</b>.</p>
<p>Uitspraak: bij <i>six</i>, <i>huit</i> en <i>dix</i> hoor je de laatste letter als het getal alleen staat («sies», «wiet», «dies»), maar <b>niet</b> voor een medeklinker: <i>six chats</i> = «sie sja». Voor een klinker klinkt de x als z: <i>six ans</i> = «sie-zan».</p>
<p><b>Un</b> heeft een vrouwelijke vorm: <i>un frère</i>, <b>une</b> sœur.</p>`,
        table: [['0–5', '6–10', '11–15', '16–20'], ['zéro', 'six', 'onze', 'seize'], ['un / une', 'sept', 'douze', 'dix-sept'], ['deux', 'huit', 'treize', 'dix-huit'], ['trois', 'neuf', 'quatorze', 'dix-neuf'], ['quatre · cinq', 'dix', 'quinze', 'vingt']],
        ex: [['J\'ai dix-huit ans.', 'Ik ben achttien jaar.'], ['Nous avons trois enfants et deux chats.', 'We hebben drie kinderen en twee katten.']] }
    ],
    dialogue: {
      t: 'Une photo de famille', place: 'Bruxelles 🇧🇪',
      lines: [
        ['Léa', 'C\'est ta famille sur la photo ?', 'Is dat jouw familie op de foto?'],
        ['Daan', 'Oui. Voici mon père et ma mère.', 'Ja. Dit zijn mijn vader en mijn moeder.'],
        ['Léa', 'Et la fille, c\'est ta sœur ?', 'En het meisje, is dat je zus?'],
        ['Daan', 'Oui, c\'est ma sœur, Emma. Elle a dix-sept ans.', 'Ja, dat is mijn zus, Emma. Ze is zeventien.'],
        ['Léa', 'Tu as aussi un frère ?', 'Heb je ook een broer?'],
        ['Daan', 'Non, je n\'ai pas de frère. Mais j\'ai un chien ! Et toi, tu as des frères et sœurs ?', 'Nee, ik heb geen broer. Maar ik heb een hond! En jij, heb jij broers en zussen?'],
        ['Léa', 'J\'ai deux frères. Ils ont douze et quinze ans.', 'Ik heb twee broers. Ze zijn twaalf en vijftien.'],
        ['Daan', 'Et tes parents, ils sont à Bruxelles ?', 'En je ouders, zijn die in Brussel?'],
        ['Léa', 'Ma mère, oui. Mon père est à Liège avec ma grand-mère.', 'Mijn moeder wel. Mijn vader is in Luik met mijn oma.'],
        ['Daan', 'Tu as une grande famille !', 'Je hebt een grote familie!']
      ],
      q: [
        { t: 'mc', q: 'Emma a quel âge ?', o: ['Dix-sept ans', 'Douze ans', 'Quinze ans'] },
        { t: 'mc', q: 'Daan a…', o: ['une sœur et un chien', 'deux frères', 'un frère et un chat'] },
        { t: 'mc', q: 'Où est le père de Léa ?', o: ['À Liège', 'À Bruxelles', 'À Paris'] }
      ]
    },
    culture: { t: 'Het Franse gezin en «Madame, Monsieur»', html: `<p>Familie is belangrijk in Frankrijk: de lange <b>zondagse lunch</b> (<i>le déjeuner du dimanche</i>) met ouders en grootouders is voor veel gezinnen een vaste gewoonte, en hij kan gerust drie uur duren.</p>
<p>Kinderen zeggen <b>papa</b> en <b>maman</b>; opa en oma heten vaak <b>papi</b> en <b>mamie</b>.</p>
<p>Let op een bekend misverstand: <b>la femme</b> betekent zowel <i>de vrouw</i> als <i>de echtgenote</i>, en <b>la fille</b> zowel <i>het meisje</i> als <i>de dochter</i>. De context maakt duidelijk wat bedoeld wordt: <i>ma femme</i> = mijn vrouw, <i>ma fille</i> = mijn dochter.</p>` },
    ex: [
      { t: 'cloze', s: 'J\'___ deux sœurs.', a: ['ai'], o: ['ai', 'as', 'a'], nl: 'Ik heb twee zussen.', tag: 'fr-avoir' },
      { t: 'cloze', s: 'Tu ___ un chien ?', a: ['as'], o: ['as', 'a', 'ai'], nl: 'Heb jij een hond?', tag: 'fr-avoir' },
      { t: 'cloze', s: 'Nous ___ trois enfants.', a: ['avons'], o: ['avons', 'avez', 'ont'], nl: 'Wij hebben drie kinderen.', tag: 'fr-avoir' },
      { t: 'cloze', s: 'Mes parents ___ un chat.', a: ['ont'], o: ['ont', 'sont', 'a'], nl: 'Mijn ouders hebben een kat.', x: 'Ont = hebben (avoir). Sont = zijn (être).', tag: 'fr-avoir' },
      { t: 'cloze', s: 'Ma sœur ___ vingt ans.', a: ['a'], o: ['a', 'est', 'as'], nl: 'Mijn zus is twintig jaar.', x: 'Uitzondering t.o.v. het Nederlands: leeftijd zeg je met avoir («ze heeft twintig jaren»).', tag: 'fr-avoir' },
      { t: 'cloze', s: 'Voici ___ mère.', a: ['ma'], o: ['ma', 'mon', 'mes'], nl: 'Dit is mijn moeder.', tag: 'fr-poss' },
      { t: 'cloze', s: 'Voici ___ parents.', a: ['mes'], o: ['mes', 'mon', 'ma'], nl: 'Dit zijn mijn ouders.', tag: 'fr-poss' },
      { t: 'cloze', s: 'Léa est ___ amie.', a: ['mon'], o: ['mon', 'ma', 'mes'], nl: 'Léa is mijn vriendin.', x: 'Uitzondering: amie is vrouwelijk, maar begint met een klinker. Daarom mon amie, niet ma amie (dat botst).', tag: 'fr-poss' },
      { t: 'mc', q: 'Hoe zeg je «Ik ben 30 jaar»?', o: ['J\'ai trente ans.', 'Je suis trente ans.', 'J\'ai trente.'], x: 'Leeftijd = avoir, en ans mag niet weg.', tag: 'fr-avoir' },
      { t: 'mc', q: '«Son père» betekent:', o: ['zijn vader of haar vader', 'alleen zijn vader', 'alleen haar vader'], x: 'Son richt zich naar père (mannelijk), niet naar de eigenaar.', tag: 'fr-poss' },
      { t: 'mc', q: 'Welk getal is «quinze»?', o: ['15', '5', '50'], tag: 'fr-num' },
      { t: 'mc', q: 'Welk getal is «dix-huit»?', o: ['18', '10', '8'], tag: 'fr-num' },
      { t: 'tr', nl: 'Ik heb een broer en een zus.', a: ['J\'ai un frère et une sœur.'], tag: 'fr-avoir' },
      { t: 'tr', nl: 'Hoe oud ben je?', a: ['Tu as quel âge ?', 'Quel âge as-tu ?', 'Quel âge tu as ?', 'Vous avez quel âge ?', 'Quel âge avez-vous ?'], tag: 'fr-avoir' },
      { t: 'tr', nl: 'Mijn vader is in Parijs.', a: ['Mon père est à Paris.'], tag: 'fr-poss' },
      { t: 'tr', nl: 'Wij hebben twee katten.', a: ['Nous avons deux chats.', 'On a deux chats.'], tag: 'fr-avoir' },
      { t: 'order', s: 'Mon frère a un chien et deux chats.', nl: 'Mijn broer heeft een hond en twee katten.', tag: 'fr-ordre' },
      { t: 'match', p: [['le père', 'de vader'], ['la mère', 'de moeder'], ['le frère', 'de broer'], ['la sœur', 'de zus'], ['la fille', 'de dochter']], tag: 'fr-voc' }
    ],
    reading: {
      t: 'La famille de Chloé', type: 'Bericht aan een penvriend',
      p: [
        ['Bonjour ! Je m\'appelle Chloé et j\'ai vingt ans. J\'habite à Nantes avec ma famille.', 'Hallo! Ik heet Chloé en ik ben twintig jaar. Ik woon in Nantes met mijn familie.'],
        ['Nous sommes cinq : mon père, ma mère, mes deux frères et moi. Mes frères s\'appellent Jules et Théo. Jules a seize ans et Théo a neuf ans.', 'We zijn met z\'n vijven: mijn vader, mijn moeder, mijn twee broers en ik. Mijn broers heten Jules en Théo. Jules is zestien en Théo is negen.'],
        ['Nous avons aussi un petit chat. Il s\'appelle Minou. Ma grand-mère habite à Paris. Elle a quatre chats !', 'We hebben ook een kleine kat. Hij heet Minou. Mijn oma woont in Parijs. Zij heeft vier katten!']
      ],
      gl: [['j\'habite', 'ik woon'], ['avec', 'met'], ['nous sommes cinq', 'we zijn met z\'n vijven'], ['aussi', 'ook'], ['ils s\'appellent', 'ze heten']],
      q: [
        { t: 'mc', q: 'Chloé a quel âge ?', o: ['Vingt ans', 'Seize ans', 'Neuf ans'] },
        { t: 'mc', q: 'Chloé a combien de frères ?', o: ['Deux', 'Cinq', 'Quatre'] },
        { t: 'mc', q: 'Qui a quatre chats ?', o: ['La grand-mère', 'Chloé', 'Théo'] }
      ]
    },
    say: [['J\'ai un frère et une sœur.', 'Ik heb een broer en een zus.'], ['Ma mère s\'appelle Anne.', 'Mijn moeder heet Anne.'], ['Tu as quel âge ?', 'Hoe oud ben je?'], ['J\'ai trente ans.', 'Ik ben dertig jaar.']],
    task: { nl: 'Beschrijf je familie in 3 of 4 zinnen: wie zijn er, hoe heten ze en hoe oud zijn ze?', model: 'J\'ai une petite famille. Mon père s\'appelle Jan et ma mère s\'appelle Els. J\'ai une sœur. Elle a dix-neuf ans. Nous avons un chien.' },
    scenario: { nl: 'Je laat een Franse vriendin een familiefoto zien.', role: 'You are Manon, a curious French friend from Toulouse. The learner shows you a family photo. Ask simple questions about their family (who, names, ages, pets). Speak simple French and use tu.', goal: 'Vertel wie er op de foto staan en hoe oud ze zijn. Vraag ook naar haar familie.' }
  });

  /* ───────────────────────── A1 · 3 ───────────────────────── */
  U({
    id: 'fr-a1-03', level: 'A1', icon: '🥐', title: 'Au café', nl: 'Eten en drinken bestellen',
    goals: ['Iets bestellen in een café of bakkerij', 'Le, la, les en un, une, des gebruiken', 'Zeggen wat je lekker vindt', 'Du, de la en de l\' gebruiken (wat brood, wat water)'],
    vocab: [
      ['le pain', 'het brood'], ['la baguette', 'het stokbrood'], ['le croissant', 'de croissant'], ['le fromage', 'de kaas'], ['le beurre', 'de boter'], ['la confiture', 'de jam'],
      ['un œuf', 'een ei'], ['la viande', 'het vlees'], ['le poisson', 'de vis'], ['le poulet', 'de kip'], ['les légumes', 'de groenten'], ['les fruits', 'het fruit'],
      ['la pomme', 'de appel'], ['les frites', 'de friet'], ['le gâteau', 'de taart / het gebak'], ['une eau', 'een water'], ['le café', 'de koffie / het café'], ['le thé', 'de thee'],
      ['le lait', 'de melk'], ['le jus d\'orange', 'de sinaasappelsap'], ['le vin', 'de wijn'], ['la bière', 'het bier'], ['Je voudrais…', 'Ik zou graag … willen'],
      ['L\'addition, s\'il vous plaît.', 'De rekening, alstublieft.'], ['J\'ai faim.', 'Ik heb honger.'], ['J\'ai soif.', 'Ik heb dorst.'], ['C\'est délicieux.', 'Het is heerlijk.'],
      ['manger', 'eten'], ['boire', 'drinken'], ['aimer', 'houden van / lekker vinden'], ['le petit déjeuner', 'het ontbijt'], ['le déjeuner', 'de lunch'], ['le dîner', 'het avondeten']
    ],
    grammar: [
      { t: 'Lidwoorden: le, la, l\', les en un, une, des', es: 'Les articles',
        html: `<p>Elk Frans zelfstandig naamwoord is <b>mannelijk</b> of <b>vrouwelijk</b>. Er is geen onzijdig, dus <i>het</i> bestaat niet. Leer elk woord meteen <b>met</b> zijn lidwoord.</p>
<p><b>De / het</b> = <b>le</b> (mannelijk), <b>la</b> (vrouwelijk), <b>les</b> (meervoud). Voor een klinker of stomme h worden <i>le</i> en <i>la</i> allebei <b>l'</b>: <i>l'eau</i>, <i>l'hôtel</i>.</p>
<p><b>Een</b> = <b>un</b> (mannelijk), <b>une</b> (vrouwelijk). En anders dan in het Nederlands heeft <i>een</i> ook een <b>meervoud</b>: <b>des</b>. <i>Des croissants</i> = croissants (een paar, niet nader bepaald). In het Nederlands zeg je dan niets, in het Frans is <i>des</i> verplicht.</p>
<p>Na werkwoorden van smaak (<i>aimer, adorer, détester</i>) gebruik je altijd <b>le, la, les</b>: <i>J'aime <b>le</b> fromage</i> = Ik hou van kaas (kaas in het algemeen).</p>
<p>Het meervoud krijgt een <b>-s</b>, maar die <b>hoor je niet</b>. Je hoort het meervoud aan het lidwoord: <i>le croissant</i> («luh») / <i>les croissants</i> («lè»).</p>`,
        table: [['', 'mannelijk', 'vrouwelijk', 'voor klinker', 'meervoud'], ['de / het', 'le pain', 'la baguette', 'l\'eau', 'les fruits'], ['een', 'un café', 'une bière', 'un œuf / une eau', 'des frites']],
        ex: [['Un café et une eau, s\'il vous plaît.', 'Een koffie en een water, alstublieft.'], ['J\'aime les légumes.', 'Ik hou van groenten.'], ['Vous avez des croissants ?', 'Hebt u croissants?']] },
      { t: 'Du, de la, de l\': «wat» brood, «wat» water', es: 'L\'article partitif',
        html: `<p>Voor een <b>onbepaalde hoeveelheid</b> van iets wat je niet telt (brood, water, kaas), gebruikt het Frans een <b>delend lidwoord</b>. In het Nederlands zeg je dan niets of «wat»: <i>Ik eet brood</i> = <i>Je mange <b>du</b> pain.</i></p>
<p><b>du</b> (mannelijk), <b>de la</b> (vrouwelijk), <b>de l'</b> (voor een klinker). Het lidwoord weglaten kan in het Frans <b>niet</b>: <s>Je mange pain</s> is fout.</p>
<p>⚠️ <b>Uitzondering:</b> na een <b>ontkenning</b> worden <i>du, de la, de l', un, une, des</i> allemaal <b>de</b> (of <b>d'</b>): <i>Je mange du pain → Je ne mange <b>pas de</b> pain.</i> <i>J'ai un frère → Je n'ai <b>pas de</b> frère.</i> Waarom? De hoeveelheid is nul, en na een hoeveelheid (ook <i>beaucoup de</i>, <i>un peu de</i>) staat in het Frans altijd alleen <i>de</i>.</p>
<p>Vergelijk: <i>J'aime <b>le</b> café</i> (koffie in het algemeen) ↔ <i>Je bois <b>du</b> café</i> (een hoeveelheid koffie).</p>`,
        table: [['', 'vorm', 'voorbeeld', 'ontkenning'], ['mannelijk', 'du', 'du pain', 'pas de pain'], ['vrouwelijk', 'de la', 'de la confiture', 'pas de confiture'], ['voor klinker', 'de l\'', 'de l\'eau', 'pas d\'eau']],
        ex: [['Je voudrais du fromage et de la confiture.', 'Ik wil graag kaas en jam.'], ['Elle boit de l\'eau.', 'Ze drinkt water.'], ['Il ne mange pas de viande.', 'Hij eet geen vlees.']] },
      { t: 'Werkwoorden op -er: manger, aimer', es: 'Les verbes en -er',
        html: `<p>Ongeveer 90% van de Franse werkwoorden eindigt op <b>-er</b> en gaat volgens één vast patroon. Haal <i>-er</i> eraf en zet de uitgang erachter: <b>-e, -es, -e, -ons, -ez, -ent</b>.</p>
<p>Goed nieuws voor je uitspraak: <i>j'aime, tu aimes, il aime, ils aiment</i> klinken <b>alle vier hetzelfde</b> («èm»). De uitgangen -e, -es en -ent zijn stom. Alleen <i>-ons</i> en <i>-ez</i> hoor je.</p>
<p>⚠️ <b>Uitzondering in de spelling:</b> bij <i>manger</i> schrijf je <i>nous mang<b>e</b>ons</i>, met een extra e. Waarom? Zonder die e zou de g voor de o hard klinken (als in «gare»); de e houdt de zachte zj-klank.</p>
<p><b>Je voudrais</b> (ik zou graag willen) is de beleefde manier om te bestellen. <i>Je veux</i> (ik wil) klinkt in een café bot.</p>`,
        table: [['', 'aimer', 'manger'], ['je / j\'', 'aime', 'mange'], ['tu', 'aimes', 'manges'], ['il / elle / on', 'aime', 'mange'], ['nous', 'aimons', 'mangeons'], ['vous', 'aimez', 'mangez'], ['ils / elles', 'aiment', 'mangent']],
        sum: 'J\'aime, tu aimes, il aime, nous aimons, vous aimez, ils aiment.',
        ex: [['Tu aimes le poisson ?', 'Hou je van vis?'], ['Nous mangeons à midi.', 'We eten om twaalf uur.'], ['Je voudrais un thé, s\'il vous plaît.', 'Ik wil graag een thee, alstublieft.']] }
    ],
    dialogue: {
      t: 'À la terrasse', place: 'Paris 🇫🇷',
      lines: [
        ['Serveur', 'Bonjour ! Vous désirez ?', 'Goedendag! Wat mag het zijn?'],
        ['Sanne', 'Bonjour. Je voudrais un café et un croissant, s\'il vous plaît.', 'Goedendag. Ik wil graag een koffie en een croissant, alstublieft.'],
        ['Serveur', 'Très bien. Et pour vous, monsieur ?', 'Heel goed. En voor u, meneer?'],
        ['Daan', 'Vous avez du jus d\'orange ?', 'Hebt u sinaasappelsap?'],
        ['Serveur', 'Oui, bien sûr. Vous mangez quelque chose ?', 'Ja, natuurlijk. Eet u iets?'],
        ['Daan', 'Oui, j\'ai faim ! Je voudrais du pain avec du beurre et de la confiture.', 'Ja, ik heb honger! Ik wil graag brood met boter en jam.'],
        ['Serveur', 'Désolé, nous n\'avons pas de confiture aujourd\'hui.', 'Het spijt me, we hebben vandaag geen jam.'],
        ['Daan', 'Alors, avec du fromage.', 'Dan met kaas.'],
        ['Sanne', 'Mmm, le croissant est délicieux !', 'Mmm, de croissant is heerlijk!'],
        ['Daan', 'L\'addition, s\'il vous plaît.', 'De rekening, alstublieft.']
      ],
      q: [
        { t: 'mc', q: 'Qu\'est-ce que Sanne commande ?', o: ['Un café et un croissant', 'Un thé et du pain', 'Un jus d\'orange'] },
        { t: 'mc', q: 'Qu\'est-ce que le café n\'a pas aujourd\'hui ?', o: ['De la confiture', 'Du fromage', 'Du jus d\'orange'] },
        { t: 'mc', q: 'Qui a faim ?', o: ['Daan', 'Sanne', 'Le serveur'] }
      ]
    },
    culture: { t: 'Koffie, brood en vaste etenstijden', html: `<p>Bestel je in Frankrijk <b>un café</b>, dan krijg je een <b>espresso</b>. Wil je een grote kop met melk, vraag dan <b>un café crème</b> of <b>un grand crème</b>; zwarte «lange» koffie is <b>un café allongé</b>.</p>
<p>🥖 De bakker (<i>la boulangerie</i>) is heilig: veel Fransen halen elke dag vers brood. Het ontbijt is licht en zoet: brood met boter en jam of een croissant, geen kaas of vleeswaren.</p>
<p>Fransen eten op <b>vaste tijden</b>: lunch rond 12.30 uur, avondeten pas rond 20.00 uur. Veel restaurants zijn tussen 14.00 en 19.00 uur gewoon dicht.</p>
<p>Een fooi is niet verplicht (bediening is <i>service compris</i>), maar een paar muntjes laten liggen is vriendelijk.</p>` },
    ex: [
      { t: 'cloze', s: 'Je voudrais ___ café, s\'il vous plaît.', a: ['un'], o: ['un', 'une', 'des'], nl: 'Ik wil graag een koffie, alstublieft.', tag: 'fr-art' },
      { t: 'cloze', s: 'Je voudrais ___ bière.', a: ['une'], o: ['une', 'un', 'des'], nl: 'Ik wil graag een biertje.', tag: 'fr-art' },
      { t: 'cloze', s: 'Vous avez ___ croissants ?', a: ['des'], o: ['des', 'un', 'le'], nl: 'Hebt u croissants?', x: 'Het meervoud van un/une is des. In het Nederlands zeg je daar niets.', tag: 'fr-art' },
      { t: 'cloze', s: 'J\'aime ___ fromage.', a: ['le'], o: ['le', 'du', 'un'], nl: 'Ik hou van kaas.', x: 'Na aimer staat le/la/les: het gaat om kaas in het algemeen.', tag: 'fr-art' },
      { t: 'cloze', s: 'Je mange ___ pain.', a: ['du'], o: ['du', 'de la', 'le'], nl: 'Ik eet brood.', tag: 'fr-partitif' },
      { t: 'cloze', s: 'Elle boit ___ eau.', a: ['de l\''], o: ['de l\'', 'du', 'de la'], nl: 'Ze drinkt water.', tag: 'fr-partitif' },
      { t: 'cloze', s: 'Il ne mange pas ___ viande.', a: ['de'], o: ['de', 'de la', 'la'], nl: 'Hij eet geen vlees.', x: 'Uitzondering: na een ontkenning wordt du / de la / des altijd de. De hoeveelheid is nul.', tag: 'fr-partitif' },
      { t: 'cloze', s: 'Nous ___ à midi.', a: ['mangeons'], o: ['mangeons', 'mangons', 'mangez'], nl: 'Wij eten om twaalf uur.', x: 'Uitzondering in de spelling: mangeons met een e, zodat de g zacht blijft.', tag: 'fr-er' },
      { t: 'cloze', s: 'Tu ___ le poisson ?', a: ['aimes'], h: 'aimer', nl: 'Hou je van vis?', tag: 'fr-er' },
      { t: 'mc', q: 'Wat is de beleefde manier om te bestellen?', o: ['Je voudrais un thé.', 'Je veux un thé.', 'Un thé !'], tag: 'fr-voc' },
      { t: 'mc', q: 'Je bestelt «un café» in Parijs. Wat krijg je?', o: ['Een espresso', 'Een grote koffie met melk', 'Een cappuccino'], tag: 'fr-voc' },
      { t: 'mc', q: 'Hoe zeg je «Ik heb dorst»?', o: ['J\'ai soif.', 'Je suis soif.', 'J\'ai faim.'], x: 'Honger en dorst «heb» je in het Frans: avoir.', tag: 'fr-avoir' },
      { t: 'tr', nl: 'De rekening, alstublieft.', a: ['L\'addition, s\'il vous plaît.'], tag: 'fr-voc' },
      { t: 'tr', nl: 'Ik eet geen vis.', a: ['Je ne mange pas de poisson.'], tag: 'fr-partitif' },
      { t: 'tr', nl: 'Wij houden van wijn.', a: ['Nous aimons le vin.', 'On aime le vin.'], tag: 'fr-art' },
      { t: 'tr', nl: 'Ik wil graag brood en kaas.', a: ['Je voudrais du pain et du fromage.'], tag: 'fr-partitif' },
      { t: 'order', s: 'Je voudrais un café et de l\'eau.', nl: 'Ik wil graag een koffie en water.', tag: 'fr-ordre' },
      { t: 'match', p: [['le pain', 'het brood'], ['le fromage', 'de kaas'], ['le lait', 'de melk'], ['la viande', 'het vlees'], ['le poisson', 'de vis']], tag: 'fr-voc' }
    ],
    reading: {
      t: 'Qu\'est-ce qu\'on mange ?', type: 'Blog over eetgewoonten',
      p: [
        ['En France, le petit déjeuner est simple. Je mange du pain avec du beurre et de la confiture, et je bois un grand café.', 'In Frankrijk is het ontbijt eenvoudig. Ik eet brood met boter en jam, en ik drink een grote koffie.'],
        ['À midi, je mange à la cantine avec mes collègues : de la viande ou du poisson, des légumes et un fruit. Je ne bois pas de vin à midi !', 'Tussen de middag eet ik in de kantine met mijn collega\'s: vlees of vis, groenten en een stuk fruit. Ik drink \'s middags geen wijn!'],
        ['Le soir, nous mangeons en famille à huit heures. Mon mari adore le fromage. Moi, je préfère les gâteaux.', '\'s Avonds eten we met het gezin om acht uur. Mijn man is dol op kaas. Ik heb liever taart.']
      ],
      gl: [['à midi', 'tussen de middag / om twaalf uur'], ['la cantine', 'de kantine'], ['le soir', '\'s avonds'], ['adorer', 'dol zijn op'], ['je préfère', 'ik heb liever']],
      q: [
        { t: 'mc', q: 'Qu\'est-ce qu\'elle boit le matin ?', o: ['Un grand café', 'Du thé', 'Du jus d\'orange'] },
        { t: 'mc', q: 'Où est-ce qu\'elle mange à midi ?', o: ['À la cantine', 'À la maison', 'Au café'] },
        { t: 'mc', q: 'Qui adore le fromage ?', o: ['Son mari', 'Ses collègues', 'Ses enfants'] }
      ]
    },
    say: [['Je voudrais un café, s\'il vous plaît.', 'Ik wil graag een koffie, alstublieft.'], ['Vous avez des croissants ?', 'Hebt u croissants?'], ['Je ne mange pas de viande.', 'Ik eet geen vlees.'], ['L\'addition, s\'il vous plaît.', 'De rekening, alstublieft.']],
    task: { nl: 'Schrijf wat je eet en drinkt bij het ontbijt en wat je niet lekker vindt (3 of 4 zinnen).', model: 'Le matin, je mange du pain avec du fromage et je bois du thé. J\'aime les fruits. Je n\'aime pas le café et je ne mange pas de viande.' },
    scenario: { nl: 'Je zit op een terras in Parijs en bestelt iets te eten en te drinken.', role: 'You are a polite but busy waiter at a Paris café terrace. Take the learner\'s order, say that one item is not available today and suggest something else. Use vous and simple French.', goal: 'Bestel beleefd iets te drinken en te eten, en vraag om de rekening.' }
  });

  /* ───────────────────────── A1 · 4 ───────────────────────── */
  U({
    id: 'fr-a1-04', level: 'A1', icon: '⏰', title: 'Ma journée', nl: 'Je dagelijkse routine',
    goals: ['Vertellen hoe je dag eruitziet', 'Zeggen hoe laat het is', 'Wederkerende werkwoorden gebruiken (je me lève)', 'De dagen van de week noemen'],
    vocab: [
      ['se réveiller', 'wakker worden'], ['se lever', 'opstaan'], ['se doucher', 'douchen'], ['s\'habiller', 'zich aankleden'], ['se coucher', 'naar bed gaan'],
      ['travailler', 'werken'], ['commencer', 'beginnen'], ['finir', 'eindigen / afmaken'], ['rentrer', 'naar huis gaan / thuiskomen'], ['regarder la télé', 'tv kijken'], ['dormir', 'slapen'],
      ['le matin', 'de ochtend / \'s ochtends'], ['l\'après-midi', 'de middag / \'s middags'], ['le soir', 'de avond / \'s avonds'], ['la nuit', 'de nacht'],
      ['Quelle heure est-il ?', 'Hoe laat is het?'], ['Il est huit heures.', 'Het is acht uur.'], ['et demie', 'half (… en een half)'], ['et quart', 'kwart over'], ['moins le quart', 'kwart voor'],
      ['midi', 'twaalf uur \'s middags'], ['minuit', 'middernacht'], ['tôt', 'vroeg'], ['tard', 'laat'], ['d\'abord', 'eerst'], ['ensuite', 'daarna'],
      ['lundi', 'maandag'], ['mardi', 'dinsdag'], ['mercredi', 'woensdag'], ['jeudi', 'donderdag'], ['vendredi', 'vrijdag'], ['samedi', 'zaterdag'], ['dimanche', 'zondag'],
      ['aujourd\'hui', 'vandaag'], ['demain', 'morgen'], ['tous les jours', 'elke dag']
    ],
    grammar: [
      { t: 'Wederkerende werkwoorden: je me lève', es: 'Les verbes pronominaux',
        html: `<p>Veel dagelijkse handelingen zijn in het Frans <b>wederkerend</b>: je doet ze «bij jezelf». <i>Se lever</i> is letterlijk <i>zich optillen</i> = opstaan. Voor het werkwoord komt een klein woordje dat bij het onderwerp hoort: <b>me, te, se, nous, vous, se</b>.</p>
<p>In het Nederlands zijn deze werkwoorden vaak <b>niet</b> wederkerend (opstaan, douchen, wakker worden). Je moet <i>me / te / se</i> dus bewust leren bij het werkwoord.</p>
<p>Voor een klinker of stomme h worden <i>me, te, se</i> → <b>m', t', s'</b>: <i>je <b>m'</b>habille</i>, <i>il <b>s'</b>appelle</i>. Ja: <i>je m'appelle</i> is ook een wederkerend werkwoord, letterlijk «ik noem mij».</p>
<p>⚠️ <b>Uitzondering in de spelling:</b> <i>se lever</i> krijgt een <b>è</b> in de vormen waar de uitgang stom is: <i>je me l<b>è</b>ve, tu te l<b>è</b>ves, il se l<b>è</b>ve, ils se l<b>è</b>vent</i>, maar <i>nous nous levons, vous vous levez</i>. Waarom? In het Frans kunnen er geen twee «stomme e's» achter elkaar klinken; de eerste wordt daarom een open è.</p>
<p>Ontkenning: <i>ne</i> komt vóór het kleine woordje: <i>Je <b>ne</b> me lève <b>pas</b> tôt.</i></p>`,
        table: [['', 'se lever', 'se coucher'], ['je', 'me lève', 'me couche'], ['tu', 'te lèves', 'te couches'], ['il / elle / on', 'se lève', 'se couche'], ['nous', 'nous levons', 'nous couchons'], ['vous', 'vous levez', 'vous couchez'], ['ils / elles', 'se lèvent', 'se couchent']],
        sum: 'Je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.',
        ex: [['Je me lève à sept heures.', 'Ik sta om zeven uur op.'], ['Tu te couches tard ?', 'Ga je laat naar bed?'], ['Elle ne se douche pas le soir.', 'Ze doucht niet \'s avonds.']] },
      { t: 'De tijd: Quelle heure est-il ?', es: 'L\'heure',
        html: `<p>Je zegt de tijd met <b>Il est … heure(s)</b>. Het woord <b>heures</b> mag je <b>niet</b> weglaten: <i>Il est huit <b>heures</b></i>, niet <s>il est huit</s>.</p>
<p>De minuten zet je erachter: <i>huit heures dix</i> (8.10). Kwart over = <b>et quart</b>, half = <b>et demie</b>, kwart voor = <b>moins le quart</b>.</p>
<p>⚠️ <b>Let op, anders dan in het Nederlands:</b> «half negen» is in het Frans <i>huit heures <b>et demie</b></i> (acht uur en een half). Het Frans telt <b>op</b> vanaf het hele uur; het Nederlands kijkt vooruit naar het volgende uur. Denk dus: 8.30 = acht + een half.</p>
<p>12.00 uur is <b>midi</b>, 0.00 uur is <b>minuit</b> (zonder <i>heures</i>). Voor <i>om</i> een tijdstip gebruik je <b>à</b>: <i>à neuf heures</i>.</p>
<p>Op borden, in dienstregelingen en afspraken gebruiken Fransen de 24-uursklok: <i>Le train part à 18 h 30</i> («dix-huit heures trente»).</p>`,
        table: [['klok', 'Frans', 'letterlijk'], ['8.00', 'huit heures', 'acht uren'], ['8.15', 'huit heures et quart', 'acht uur en kwart'], ['8.30', 'huit heures et demie', 'acht uur en half'], ['8.45', 'neuf heures moins le quart', 'negen uur min het kwart'], ['12.00', 'midi', 'middag']],
        ex: [['Il est une heure.', 'Het is één uur.'], ['Je commence à neuf heures et demie.', 'Ik begin om half tien.'], ['Le film finit à minuit.', 'De film eindigt om middernacht.']] },
      { t: 'Dagen en dagdelen: le lundi, le matin', es: 'Les jours et les moments de la journée',
        html: `<p>De dagen van de week schrijf je met een <b>kleine letter</b> en ze zijn allemaal mannelijk.</p>
<p><b>Zonder</b> lidwoord gaat het om één keer: <i>Lundi, je travaille</i> = (Aanstaande) maandag werk ik. <b>Met le</b> gaat het om een gewoonte: <i><b>Le</b> lundi, je travaille</i> = Op maandag (elke maandag) werk ik. Er komt géén voorzetsel bij: <s>sur lundi</s> en <s>à lundi</s> zijn fout (<i>À lundi !</i> bestaat wel, maar betekent «Tot maandag!»).</p>
<p>Hetzelfde bij dagdelen: <b>le matin</b> = 's ochtends, <b>le soir</b> = 's avonds. Ook hier geen voorzetsel.</p>`,
        table: [['Frans', 'Nederlands'], ['lundi', '(aanstaande) maandag'], ['le lundi', 'op maandag, elke maandag'], ['le matin', '\'s ochtends'], ['ce matin', 'vanochtend'], ['À lundi !', 'Tot maandag!']],
        ex: [['Le samedi, je me lève tard.', 'Op zaterdag sta ik laat op.'], ['Demain, je travaille à Lille.', 'Morgen werk ik in Lille.'], ['Le soir, nous regardons la télé.', '\'s Avonds kijken we tv.']] }
    ],
    dialogue: {
      t: 'Une semaine chargée', place: 'Genève 🇨🇭',
      lines: [
        ['Inès', 'Tu te lèves à quelle heure le matin ?', 'Hoe laat sta je \'s ochtends op?'],
        ['Daan', 'Je me lève à six heures et demie.', 'Ik sta om half zeven op.'],
        ['Inès', 'Six heures et demie ! C\'est tôt.', 'Half zeven! Dat is vroeg.'],
        ['Daan', 'Oui, je commence à huit heures. D\'abord je me douche, ensuite je mange.', 'Ja, ik begin om acht uur. Eerst douche ik, daarna eet ik.'],
        ['Inès', 'Et tu finis à quelle heure ?', 'En hoe laat ben je klaar?'],
        ['Daan', 'Je finis à cinq heures. Je rentre à six heures moins le quart.', 'Ik ben om vijf uur klaar. Ik kom om kwart voor zes thuis.'],
        ['Inès', 'Et le soir, tu regardes la télé ?', 'En \'s avonds, kijk je dan tv?'],
        ['Daan', 'Non, je ne regarde pas la télé. Je me couche tôt, à dix heures.', 'Nee, ik kijk geen tv. Ik ga vroeg naar bed, om tien uur.'],
        ['Inès', 'Et le samedi ?', 'En op zaterdag?'],
        ['Daan', 'Le samedi, je dors ! Je me lève à midi.', 'Op zaterdag slaap ik! Ik sta om twaalf uur op.']
      ],
      q: [
        { t: 'mc', q: 'Daan se lève à quelle heure ?', o: ['À six heures et demie', 'À huit heures', 'À midi'] },
        { t: 'mc', q: 'Qu\'est-ce que Daan fait le soir ?', o: ['Il se couche tôt', 'Il regarde la télé', 'Il travaille'] },
        { t: 'mc', q: 'Le samedi, Daan…', o: ['dort', 'travaille', 'se lève tôt'] }
      ]
    },
    culture: { t: 'Métro, boulot, dodo', html: `<p>Fransen vatten de dagelijkse sleur samen als <b>métro, boulot, dodo</b>: metro, werk, slapen. <i>Le boulot</i> is spreektaal voor <i>le travail</i>, <i>faire dodo</i> is kindertaal voor slapen.</p>
<p>De werkdag begint vaak rond 9.00 uur en loopt door tot 18.00 of 19.00 uur, met een echte <b>lunchpauze</b> van een uur of langer. Een boterham achter je scherm eten is in Frankrijk ongebruikelijk.</p>
<p>🕗 De wettelijke werkweek is <b>35 uur</b>. Extra gewerkte uren krijgen veel werknemers terug als vrije dagen, de zogeheten <b>RTT</b>.</p>
<p>Op <b>woensdagmiddag</b> zijn veel basisschoolkinderen vrij; dan is het druk bij sportclubs en muziekscholen.</p>` },
    ex: [
      { t: 'cloze', s: 'Je ___ lève à sept heures.', a: ['me'], o: ['me', 'te', 'se'], nl: 'Ik sta om zeven uur op.', tag: 'fr-refl' },
      { t: 'cloze', s: 'Tu ___ couches tard ?', a: ['te'], o: ['te', 'me', 'se'], nl: 'Ga je laat naar bed?', tag: 'fr-refl' },
      { t: 'cloze', s: 'Elle ___ douche le matin.', a: ['se'], o: ['se', 'te', 'me'], nl: 'Ze doucht \'s ochtends.', tag: 'fr-refl' },
      { t: 'cloze', s: 'Nous ___ levons tôt.', a: ['nous'], o: ['nous', 'vous', 'se'], nl: 'Wij staan vroeg op.', tag: 'fr-refl' },
      { t: 'cloze', s: 'Je ___ habille.', a: ['m\''], o: ['m\'', 'me', 's\''], nl: 'Ik kleed me aan.', x: 'Voor een stomme h wordt me → m\'.', tag: 'fr-refl' },
      { t: 'cloze', s: 'Il se ___ à six heures.', a: ['lève'], o: ['lève', 'leve', 'levons'], nl: 'Hij staat om zes uur op.', x: 'Uitzondering in de spelling: lève met è, omdat de uitgang -e stom is.', tag: 'fr-refl' },
      { t: 'cloze', s: 'Il est huit ___.', a: ['heures'], o: ['heures', 'heure', 'temps'], nl: 'Het is acht uur.', tag: 'fr-heure' },
      { t: 'cloze', s: 'Je commence ___ neuf heures.', a: ['à'], o: ['à', 'en', 'sur'], nl: 'Ik begin om negen uur.', tag: 'fr-heure' },
      { t: 'mc', q: 'Hoe zeg je «half negen»?', o: ['huit heures et demie', 'neuf heures et demie', 'demi neuf heures'], x: 'Het Frans telt op vanaf het hele uur: acht uur + een half.', tag: 'fr-heure' },
      { t: 'mc', q: 'Hoe zeg je «kwart voor zes»?', o: ['six heures moins le quart', 'six heures et quart', 'cinq heures moins le quart'], tag: 'fr-heure' },
      { t: 'mc', q: 'Wat betekent «Le lundi, je travaille»?', o: ['Op maandag (elke maandag) werk ik.', 'Aanstaande maandag werk ik.', 'Tot maandag, ik werk.'], x: 'Met le = een gewoonte. Zonder le = één keer.', tag: 'fr-heure' },
      { t: 'mc', q: 'Hoe zeg je «\'s ochtends»?', o: ['le matin', 'à le matin', 'dans le matin'], x: 'Geen voorzetsel bij dagdelen.', tag: 'fr-heure' },
      { t: 'tr', nl: 'Hoe laat is het?', a: ['Quelle heure est-il ?', 'Il est quelle heure ?', 'Quelle heure il est ?'], tag: 'fr-heure' },
      { t: 'tr', nl: 'Ik ga om elf uur naar bed.', a: ['Je me couche à onze heures.'], tag: 'fr-refl' },
      { t: 'tr', nl: 'Op zondag werk ik niet.', a: ['Le dimanche, je ne travaille pas.', 'Je ne travaille pas le dimanche.'], tag: 'fr-heure' },
      { t: 'tr', nl: 'Het is half vier.', a: ['Il est trois heures et demie.'], tag: 'fr-heure' },
      { t: 'order', s: 'Le matin je me lève à sept heures.', nl: '\'s Ochtends sta ik om zeven uur op.', tag: 'fr-ordre' },
      { t: 'match', p: [['lundi', 'maandag'], ['mercredi', 'woensdag'], ['vendredi', 'vrijdag'], ['samedi', 'zaterdag'], ['dimanche', 'zondag']], tag: 'fr-voc' }
    ],
    reading: {
      t: 'La journée d\'une boulangère', type: 'Interview in een buurtkrant',
      p: [
        ['Je m\'appelle Nadia et je suis boulangère à Marseille. Je me lève à trois heures du matin. Oui, c\'est très tôt !', 'Ik heet Nadia en ik ben bakker in Marseille. Ik sta om drie uur \'s nachts op. Ja, dat is heel vroeg!'],
        ['Je commence à quatre heures. La boulangerie ouvre à six heures et demie. Le matin, les clients achètent des baguettes et des croissants.', 'Ik begin om vier uur. De bakkerij gaat om half zeven open. \'s Ochtends kopen de klanten stokbroden en croissants.'],
        ['Je finis à midi et je rentre à la maison. L\'après-midi, je dors un peu. Le soir, je me couche à huit heures. Le lundi, la boulangerie est fermée.', 'Ik ben om twaalf uur klaar en ga naar huis. \'s Middags slaap ik een beetje. \'s Avonds ga ik om acht uur naar bed. Op maandag is de bakkerij dicht.']
      ],
      gl: [['la boulangère', 'de bakker (vrouw)'], ['ouvrir', 'opengaan / openen'], ['le client', 'de klant'], ['acheter', 'kopen'], ['fermé / fermée', 'gesloten']],
      q: [
        { t: 'mc', q: 'Nadia se lève à quelle heure ?', o: ['À trois heures', 'À quatre heures', 'À six heures et demie'] },
        { t: 'mc', q: 'Qu\'est-ce que Nadia fait l\'après-midi ?', o: ['Elle dort un peu', 'Elle travaille', 'Elle regarde la télé'] },
        { t: 'mc', q: 'Quel jour la boulangerie est-elle fermée ?', o: ['Le lundi', 'Le dimanche', 'Le samedi'] }
      ]
    },
    say: [['Je me lève à sept heures.', 'Ik sta om zeven uur op.'], ['Quelle heure est-il ?', 'Hoe laat is het?'], ['Il est neuf heures et demie.', 'Het is half tien.'], ['Le soir, je me couche tôt.', '\'s Avonds ga ik vroeg naar bed.']],
    task: { nl: 'Beschrijf een gewone werkdag in 4 zinnen: hoe laat sta je op, wanneer begin je, wanneer ben je klaar en wat doe je \'s avonds?', model: 'Je me lève à sept heures. Je commence à huit heures et demie et je finis à cinq heures. Le soir, je mange avec ma famille et je regarde la télé. Je me couche à onze heures.' },
    scenario: { nl: 'Een Zwitserse collega wil weten hoe jouw dag eruitziet.', role: 'You are Inès, a friendly coworker from Geneva. Ask the learner about their daily routine: what time they get up, start work, finish and go to bed, and what they do on weekends. Use tu and simple French.', goal: 'Vertel hoe laat je opstaat, begint en naar bed gaat. Stel haar ook een vraag.' }
  });

  /* ───────────────────────── A1 · 5 ───────────────────────── */
  U({
    id: 'fr-a1-05', level: 'A1', icon: '🏙️', title: 'En ville', nl: 'In de stad',
    goals: ['De weg vragen en uitleggen', 'Zeggen wat er in een stad is (il y a)', 'Aller gebruiken met au, à la, à l\' en aux', 'Voorzetsels van plaats gebruiken'],
    vocab: [
      ['la ville', 'de stad'], ['la rue', 'de straat'], ['la place', 'het plein'], ['la gare', 'het station'], ['un arrêt de bus', 'een bushalte'], ['le métro', 'de metro'],
      ['la banque', 'de bank'], ['la pharmacie', 'de apotheek'], ['le supermarché', 'de supermarkt'], ['la boulangerie', 'de bakkerij'], ['un hôpital', 'een ziekenhuis'], ['un hôtel', 'een hotel'],
      ['le musée', 'het museum'], ['une église', 'een kerk'], ['le parc', 'het park'], ['le pont', 'de brug'], ['les toilettes', 'het toilet / de wc'],
      ['à gauche', 'links / linksaf'], ['à droite', 'rechts / rechtsaf'], ['tout droit', 'rechtdoor'], ['près de', 'dicht bij'], ['loin de', 'ver van'], ['à côté de', 'naast'],
      ['en face de', 'tegenover'], ['devant', 'voor (plaats)'], ['derrière', 'achter'], ['entre', 'tussen'], ['ici', 'hier'], ['là-bas', 'daar / daarginds'],
      ['Où est… ?', 'Waar is…?'], ['Je cherche…', 'Ik zoek…'], ['aller', 'gaan'], ['tourner', 'afslaan / draaien'], ['traverser', 'oversteken'], ['à pied', 'te voet / lopend']
    ],
    grammar: [
      { t: 'Aller: gaan', es: 'Le verbe aller',
        html: `<p><b>Aller</b> betekent <i>gaan</i>.</p>
<p>⚠️ <b>Uitzondering:</b> <i>aller</i> eindigt op -er, maar is het <b>enige -er-werkwoord dat helemaal onregelmatig</b> is: <i>je <b>vais</b></i>, niet <s>j'alle</s>. Waarom? <i>Aller</i> is ontstaan uit drie verschillende Latijnse werkwoorden; daarom lijken <i>vais</i>, <i>allons</i> en (later) <i>irai</i> totaal niet op elkaar. Alleen de wij- en jullie-vorm zijn regelmatig: <i>nous allons, vous allez</i>.</p>
<p>Je kent het al van <i>Comment ça <b>va</b> ?</i> (letterlijk: hoe gaat dat?) en <i>Comment <b>allez</b>-vous ?</i></p>`,
        table: [['', 'aller'], ['je', 'vais'], ['tu', 'vas'], ['il / elle / on', 'va'], ['nous', 'allons'], ['vous', 'allez'], ['ils / elles', 'vont']],
        sum: 'Je vais, tu vas, il va, nous allons, vous allez, ils vont.',
        ex: [['Je vais à la gare.', 'Ik ga naar het station.'], ['Vous allez où ?', 'Waar gaat u heen?'], ['Ils vont à Paris en train.', 'Ze gaan met de trein naar Parijs.']] },
      { t: 'À + le = au, de + le = du', es: 'Les articles contractés',
        html: `<p><b>À</b> betekent <i>naar</i> of <i>in / op / bij</i> (een plaats). Voor <i>la</i> en <i>l'</i> verandert er niets: <i>à la gare</i>, <i>à l'hôtel</i>.</p>
<p>⚠️ <b>Verplichte samentrekking:</b> <i>à + le</i> wordt altijd <b>au</b>, en <i>à + les</i> wordt altijd <b>aux</b>. <s>À le musée</s> bestaat niet: het is <i><b>au</b> musée</i>. Waarom? De twee korte woordjes zijn in de loop van de eeuwen aan elkaar gegroeid, en dat is de enige juiste vorm geworden.</p>
<p>Precies hetzelfde gebeurt met <b>de</b> (van / vanaf): <i>de + le</i> = <b>du</b>, <i>de + les</i> = <b>des</b>. Dat heb je nodig bij <i>près de, à côté de, en face de, loin de</i>: <i>à côté <b>du</b> parc</i>, <i>en face <b>de la</b> gare</i>, <i>près <b>des</b> toilettes</i>.</p>
<p>Steden krijgen alleen <b>à</b>: <i>à Paris</i>. Landen: <b>en</b> voor vrouwelijke landen (<i>en France, en Belgique</i>), <b>au</b> voor mannelijke (<i>au Canada, au Maroc</i>), <b>aux</b> voor meervoud (<i>aux Pays-Bas</i>).</p>`,
        table: [['', 'à (naar / in)', 'de (van)'], ['+ le', 'au musée', 'du musée'], ['+ la', 'à la gare', 'de la gare'], ['+ l\'', 'à l\'hôtel', 'de l\'hôtel'], ['+ les', 'aux toilettes', 'des toilettes']],
        ex: [['Je vais au supermarché.', 'Ik ga naar de supermarkt.'], ['La banque est à côté de la pharmacie.', 'De bank is naast de apotheek.'], ['L\'hôtel est en face du parc.', 'Het hotel is tegenover het park.']] },
      { t: 'Il y a en de gebiedende wijs', es: 'Il y a et l\'impératif',
        html: `<p><b>Il y a</b> betekent <i>er is</i> én <i>er zijn</i>. De vorm verandert nooit: <i>Il y a un parc. Il y a deux musées.</i> Vraag: <i>Il y a une pharmacie près d'ici ?</i> Ontkenning: <i>Il <b>n'</b>y a <b>pas de</b> métro.</i></p>
<p>Om de weg uit te leggen gebruik je de <b>gebiedende wijs</b>. Tegen een onbekende neem je de <b>vous-vorm zonder vous</b>: <i>vous tournez → <b>Tournez</b> à gauche.</i> <i>Vous allez → <b>Allez</b> tout droit.</i></p>
<p>Tegen een vriend neem je de tu-vorm zonder tu. ⚠️ <b>Uitzondering in de spelling:</b> bij -er-werkwoorden (en <i>aller</i>) valt dan de <b>-s</b> weg: <i>tu tournes → <b>Tourne</b> !</i>, <i>tu vas → <b>Va</b> !</i> Waarom? De -s van de tu-vorm is bij -er-werkwoorden nooit te horen, en in de gebiedende wijs schrijft het Frans hem daarom niet.</p>
<p>Of gebruik gewoon de tegenwoordige tijd, dat doen Fransen zelf ook vaak: <i>Vous prenez la première rue à droite.</i></p>`,
        table: [['', 'tegen u (vous)', 'tegen jou (tu)'], ['ga rechtdoor', 'Allez tout droit.', 'Va tout droit.'], ['sla linksaf', 'Tournez à gauche.', 'Tourne à gauche.'], ['steek het plein over', 'Traversez la place.', 'Traverse la place.']],
        ex: [['Il y a une banque près d\'ici ?', 'Is er een bank hier in de buurt?'], ['Allez tout droit, puis tournez à droite.', 'Ga rechtdoor en sla dan rechtsaf.'], ['Il n\'y a pas de métro ici.', 'Er is hier geen metro.']] }
    ],
    dialogue: {
      t: 'Pardon, je cherche la gare', place: 'Bordeaux 🇫🇷',
      lines: [
        ['Sanne', 'Excusez-moi, madame. Je cherche la gare.', 'Neemt u mij niet kwalijk, mevrouw. Ik zoek het station.'],
        ['Passante', 'La gare ? C\'est un peu loin à pied.', 'Het station? Dat is een beetje ver lopen.'],
        ['Sanne', 'Il y a un bus ?', 'Is er een bus?'],
        ['Passante', 'Oui, il y a un arrêt de bus en face de la pharmacie, là-bas.', 'Ja, er is een bushalte tegenover de apotheek, daarginds.'],
        ['Sanne', 'Et à pied, c\'est comment ?', 'En lopend, hoe gaat dat?'],
        ['Passante', 'Allez tout droit et traversez le pont. Ensuite, tournez à gauche.', 'Ga rechtdoor en steek de brug over. Sla daarna linksaf.'],
        ['Sanne', 'Tout droit, le pont, et à gauche. D\'accord.', 'Rechtdoor, de brug, en linksaf. Oké.'],
        ['Passante', 'La gare est à côté du grand hôtel. Vous allez à Paris ?', 'Het station is naast het grote hotel. Gaat u naar Parijs?'],
        ['Sanne', 'Non, je vais à Toulouse. Merci beaucoup, madame !', 'Nee, ik ga naar Toulouse. Heel erg bedankt, mevrouw!'],
        ['Passante', 'De rien. Bonne journée !', 'Graag gedaan. Fijne dag!']
      ],
      q: [
        { t: 'mc', q: 'Qu\'est-ce que Sanne cherche ?', o: ['La gare', 'La pharmacie', 'Un hôtel'] },
        { t: 'mc', q: 'Où est l\'arrêt de bus ?', o: ['En face de la pharmacie', 'À côté de l\'hôtel', 'Derrière la gare'] },
        { t: 'mc', q: 'Sanne va où ?', o: ['À Toulouse', 'À Paris', 'À Bordeaux'] }
      ]
    },
    culture: { t: 'De weg vragen in Frankrijk', html: `<p>Begin altijd met <b>Excusez-moi</b> of <b>Pardon, madame / monsieur</b>, en sluit af met <b>Merci, bonne journée !</b> Zo krijg je bijna altijd vriendelijk hulp.</p>
<p>Elke Franse stad en elk dorp heeft een <b>mairie</b> (gemeentehuis), vaak aan het centrale plein, en een <b>centre-ville</b> (binnenstad). Borden met <i>Centre-ville</i> en <i>Toutes directions</i> (alle richtingen) zie je overal.</p>
<p>🚇 In Parijs neem je <b>le métro</b>; de lijnen hebben nummers en je kijkt naar het eindstation om de richting te weten: <i>ligne 1, direction La Défense</i>.</p>
<p>Verdiepingen tel je anders: <b>le rez-de-chaussée</b> is de begane grond, <b>le premier étage</b> is de eerste verdieping.</p>` },
    ex: [
      { t: 'cloze', s: 'Je ___ à la gare.', a: ['vais'], o: ['vais', 'vas', 'va'], nl: 'Ik ga naar het station.', x: 'Uitzondering: aller is het enige -er-werkwoord dat helemaal onregelmatig is.', tag: 'fr-aller' },
      { t: 'cloze', s: 'Nous ___ au musée.', a: ['allons'], o: ['allons', 'allez', 'vont'], nl: 'Wij gaan naar het museum.', tag: 'fr-aller' },
      { t: 'cloze', s: 'Ils ___ à Paris.', a: ['vont'], o: ['vont', 'va', 'allons'], nl: 'Zij gaan naar Parijs.', tag: 'fr-aller' },
      { t: 'cloze', s: 'Je vais ___ supermarché.', a: ['au'], o: ['au', 'à le', 'à la'], nl: 'Ik ga naar de supermarkt.', x: 'À + le wordt altijd au.', tag: 'fr-aller' },
      { t: 'cloze', s: 'Elle va ___ pharmacie.', a: ['à la'], o: ['à la', 'au', 'aux'], nl: 'Ze gaat naar de apotheek.', tag: 'fr-aller' },
      { t: 'cloze', s: 'Il habite ___ Pays-Bas.', a: ['aux'], o: ['aux', 'en', 'au'], nl: 'Hij woont in Nederland.', x: 'Les Pays-Bas is meervoud: à + les = aux.', tag: 'fr-aller' },
      { t: 'cloze', s: 'La banque est à côté ___ parc.', a: ['du'], o: ['du', 'de le', 'de la'], nl: 'De bank is naast het park.', x: 'De + le wordt altijd du.', tag: 'fr-prep' },
      { t: 'cloze', s: 'Il y ___ une pharmacie près d\'ici ?', a: ['a'], o: ['a', 'est', 'ont'], nl: 'Is er een apotheek hier in de buurt?', tag: 'fr-ilya' },
      { t: 'mc', q: 'Hoe zeg je «Er zijn twee musea»?', o: ['Il y a deux musées.', 'Ils y ont deux musées.', 'Il y sont deux musées.'], x: 'Il y a verandert nooit, ook niet in het meervoud.', tag: 'fr-ilya' },
      { t: 'mc', q: 'Je legt een onbekende de weg uit: «Sla rechtsaf.»', o: ['Tournez à droite.', 'Tourne à droite.', 'Tournes à droite.'], tag: 'fr-imp' },
      { t: 'mc', q: 'Wat betekent «en face de»?', o: ['tegenover', 'naast', 'achter'], tag: 'fr-prep' },
      { t: 'mc', q: 'Wat betekent «tout droit»?', o: ['rechtdoor', 'rechtsaf', 'helemaal rechts'], x: 'À droite = rechts, tout droit = rechtdoor.', tag: 'fr-prep' },
      { t: 'tr', nl: 'Waar is het station?', a: ['Où est la gare ?', 'La gare est où ?', 'Où se trouve la gare ?'], tag: 'fr-q' },
      { t: 'tr', nl: 'Ik zoek een hotel.', a: ['Je cherche un hôtel.'], tag: 'fr-voc' },
      { t: 'tr', nl: 'Het museum is tegenover de kerk.', a: ['Le musée est en face de l\'église.'], tag: 'fr-prep' },
      { t: 'tr', nl: 'Er is geen metro.', a: ['Il n\'y a pas de métro.'], tag: 'fr-ilya' },
      { t: 'order', s: 'Allez tout droit et tournez à gauche.', nl: 'Ga rechtdoor en sla linksaf.', tag: 'fr-ordre' },
      { t: 'match', p: [['à gauche', 'links'], ['à droite', 'rechts'], ['tout droit', 'rechtdoor'], ['près de', 'dicht bij'], ['loin de', 'ver van']], tag: 'fr-prep' }
    ],
    reading: {
      t: 'Mon quartier', type: 'Beschrijving voor een huizenruil',
      p: [
        ['J\'habite à Lille, dans le nord de la France. Mon appartement est dans une petite rue, près du centre-ville.', 'Ik woon in Lille, in het noorden van Frankrijk. Mijn appartement ligt in een kleine straat, dicht bij de binnenstad.'],
        ['Dans mon quartier, il y a une boulangerie, une pharmacie et un petit supermarché. En face de l\'appartement, il y a un parc. Il n\'y a pas de banque.', 'In mijn wijk zijn een bakkerij, een apotheek en een kleine supermarkt. Tegenover het appartement is een park. Er is geen bank.'],
        ['La gare est à dix minutes à pied. Pour aller au musée, prenez le métro : l\'arrêt est à côté de l\'église.', 'Het station is tien minuten lopen. Om naar het museum te gaan, neem de metro: de halte is naast de kerk.']
      ],
      gl: [['le quartier', 'de wijk / de buurt'], ['un appartement', 'een appartement'], ['dans', 'in'], ['le centre-ville', 'de binnenstad'], ['prenez', 'neem (u)']],
      q: [
        { t: 'mc', q: 'Qu\'est-ce qu\'il y a en face de l\'appartement ?', o: ['Un parc', 'Une banque', 'La gare'] },
        { t: 'mc', q: 'Qu\'est-ce qu\'il n\'y a pas dans le quartier ?', o: ['Une banque', 'Une pharmacie', 'Une boulangerie'] },
        { t: 'mc', q: 'Où est l\'arrêt de métro ?', o: ['À côté de l\'église', 'Devant le musée', 'Derrière la gare'] }
      ]
    },
    say: [['Excusez-moi, je cherche la gare.', 'Neemt u mij niet kwalijk, ik zoek het station.'], ['Il y a une pharmacie près d\'ici ?', 'Is er een apotheek hier in de buurt?'], ['Allez tout droit, puis tournez à gauche.', 'Ga rechtdoor en sla dan linksaf.'], ['C\'est à côté du parc.', 'Het is naast het park.']],
    task: { nl: 'Beschrijf je buurt in 3 of 4 zinnen: wat is er wel en niet, en waar ligt het?', model: 'J\'habite à Utrecht, près de la gare. Dans mon quartier, il y a un supermarché et un parc. La boulangerie est en face de mon appartement. Il n\'y a pas de métro.' },
    scenario: { nl: 'Je bent verdwaald in Bordeaux en vraagt iemand op straat de weg naar het museum.', role: 'You are a helpful local in Bordeaux. The learner asks you for directions. Give simple directions (tout droit, à gauche, à droite, en face de, à côté de), then ask where they are from. Use vous and simple French.', goal: 'Vraag beleefd de weg, herhaal de route en bedank.' }
  });
})(window.SPT);
