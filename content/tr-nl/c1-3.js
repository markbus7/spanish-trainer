/* Turks voor Nederlandstaligen — niveau C1, units 5–6 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C1 · 5 ───────────────────────── */
  U({
    id: 'tr-c1-05', level: 'C1', icon: '💼', title: 'Bir şey rica edecektim', nl: 'Vergaderen en onderhandelen: zakelijk en diplomatiek',
    goals: ['Een zakelijke bespreking of onderhandeling voeren', 'Lange werkwoordsvormen ontleden: yaptırılabilir, ertelenemeyecek', 'Een verzoek of bezwaar diplomatiek verpakken', 'Afspraken samenvatten in een e-mail'],
    vocab: [
      ['ön görüşme', 'voorbespreking'], ['toplantı notu', 'vergadernotitie'], ['fiyat teklifi', 'prijsopgave'], ['müzakere', 'onderhandeling'], ['pazarlık payı', 'onderhandelingsruimte'], ['iskonto', 'korting (zakelijk)'], ['sevkiyat', 'zending / verzending'],
      ['teslim süresi', 'levertijd'], ['vade', 'betalingstermijn'], ['peşin', 'contant / vooruit'], ['üretici', 'producent'], ['bayi', 'dealer'], ['ortak', 'partner / vennoot'], ['ortaklık', 'samenwerking / vennootschap'],
      ['hisse', 'aandeel'], ['kâr', 'winst'], ['ciro', 'omzet'], ['maliyet', 'kostprijs'], ['onaylatmak', 'laten goedkeuren'], ['gözden geçirmek', 'doornemen / herzien'], ['netleştirmek', 'verduidelijken'],
      ['üstlenmek', 'op zich nemen'], ['yetkilendirmek', 'machtigen'], ['taahhüt', 'toezegging'], ['cayma bedeli', 'annuleringsboete'], ['karşı teklif', 'tegenbod'], ['esnek', 'flexibel'], ['mutabakat', 'overeenstemming']
    ],
    grammar: [
      { t: 'Lange werkwoorden lezen: yaptırılabilir, ertelenemeyecek', es: 'Ekleri üst üste: -dir-il-ebil-',
        html: `<p>In zakelijk Turks staan vaak vier of vijf achtervoegsels achter één stam. Ze komen altijd in dezelfde volgorde, dus je kunt ze van links naar rechts aflezen:</p>
<p><b>stam</b> + <b>elkaar/zich</b> (-iş-, -in-) + <b>laten</b> (-dir-, -t-) + <b>lijdend</b> (-il-, -in-) + <b>niet</b> (-me-) + <b>kunnen</b> (-ebil-) + <b>tijd</b> + <b>persoon</b></p>
<p>• <i>yap-<b>tır</b>-<b>ıl</b>-<b>abil</b>-ir</i> = kan worden laten doen → «kan worden uitbesteed»<br>• <i>ertele-<b>n</b>-<b>eme</b>-<b>yecek</b></i> = zal niet kunnen worden uitgesteld<br>• <i>görüş-<b>ül</b>-<b>ecek</b></i> = zal worden besproken (<i>gör-üş-</i>, elkaar zien → bespreken)<br>• <i>anla-<b>ş</b>-<b>ıl</b>-<b>dığı</b> üzere</i> = zoals is overeengekomen / zoals blijkt<br>• <i>bil-<b>dir</b>-<b>il</b>-<b>me</b>-<b>miş</b>-tir</i> = is niet meegedeeld (<i>bil-dir-</i>, laten weten)</p>
<p>Let op het verschil in volgorde bij «niet» en «kunnen»:<br>• <i>yapıl<b>amaz</b></i> = kan niet worden gedaan (het is onmogelijk)<br>• <i>yapıl<b>mayabilir</b></i> = het kan zijn dat het niet wordt gedaan (misschien niet)<br>• <i>yapıl<b>amayabilir</b></i> = het kan zijn dat het niet gedaan kan worden</p>
<p>Zo bouw je in vergaderingen onpersoonlijke, voorzichtige zinnen: <i>Bu madde haftaya <b>görüşülebilir</b>.</i> (Dit punt kan volgende week worden besproken.) · <i>Teslimat süresi <b>kısaltılamayabilir</b>.</i> (De levertijd kan mogelijk niet worden verkort.)</p>
<p><b>⚠️ Uitzondering:</b> van <i>demek</i> en <i>yemek</i> hoor je naast <i>de<b>n</b>ir, ye<b>n</b>ir</i> ook <b>de<b>nil</b>ir, ye<b>nil</b>ir</b>, met twee lijdende achtervoegsels achter elkaar (-n- én -il-), terwijl één genoeg zou moeten zijn. <b>Waarom?</b> De stam is maar twee letters (<i>de-, ye-</i>) en eindigt op een klinker, dus de lijdende vorm is alleen een <b>n</b>. Dat is zo weinig dat het nauwelijks opvalt, en bij <i>yenmek</i> botst het bovendien met <i>yenmek</i> (verslaan). De tweede uitgang maakt het weer hoorbaar. Beide vormen zijn goed; in schrijftaal zie je vaker de lange.</p>`,
        table: [['vorm', 'opbouw', 'betekenis'], ['yaptırılabilir', 'yap-tır-ıl-abil-ir', 'kan worden uitbesteed'], ['ertelenemeyecek', 'ertele-n-eme-yecek', 'zal niet kunnen worden uitgesteld'], ['görüşülecek', 'gör-üş-ül-ecek', 'zal worden besproken'], ['yapılamaz', 'yap-ıl-ama-z', 'kan niet worden gedaan'], ['yapılmayabilir', 'yap-ıl-ma-yabil-ir', 'wordt misschien niet gedaan']],
        sum: 'Bu madde haftaya görüşülebilir.',
        ex: [['Sözleşme bu hâliyle imzalanamaz.', 'Het contract kan in deze vorm niet worden ondertekend.'], ['Fiyat konusunda anlaşılamadı.', 'Over de prijs is geen overeenstemming bereikt.'], ['Numuneler haftaya gönderilebilecek.', 'De monsters kunnen volgende week worden verstuurd.'], ['Bu iş dışarıya yaptırılmayabilir.', 'Dit werk wordt mogelijk niet uitbesteed.']] },
      { t: 'Diplomatiek blijven: acaba, -ecektim, -sek mi?', es: 'Kibar ve dolaylı konuşma',
        html: `<p>Hoe belangrijker het verzoek, hoe meer verpakking. Vier technieken:</p>
<p><b>1. De verleden tijd schept afstand.</b><br>• <i>Bir şey sor<b>acaktım</b>.</i> (Ik wilde iets vragen.) · <i>Sizden bir şey rica ed<b>ecektim</b>.</i><br>• <i>Bana yardım ed<b>ebilir miydiniz</b>?</i> (Zou u mij kunnen helpen?) is zachter dan <i>edebilir misiniz</i>.<br>• <i>Fiyatı biraz daha düşürebilir miyiz <b>diye düşünüyordum</b>.</i> (Ik vroeg me af of we de prijs nog iets kunnen verlagen.)</p>
<p><b>2. Acaba</b> (ik vraag me af, misschien) maakt van een vraag een hardop gedachte: <i>Toplantıyı perşembeye alabilir miyiz <b>acaba</b>?</i></p>
<p><b>3. De wensvorm met mi</b> stelt voor zonder te duwen: <i>Bu maddeyi haftaya bırak<b>sak mı</b>?</i> (Zullen we dit punt misschien tot volgende week laten rusten?) · <i>Önce maliyete bak<b>sak</b> daha iyi olmaz mı?</i></p>
<p><b>4. Voorwaardelijke inleidingen</b>: <b>mümkünse</b> (als het mogelijk is), <b>sakıncası yoksa</b> (als er geen bezwaar is), <b>zahmet olmazsa</b> (als het niet te veel moeite is), <b>müsaadenizle</b> (met uw goedvinden), <b>yanlış anlamayın ama</b> (begrijp me niet verkeerd, maar).</p>
<p>Bezwaar maak je zelden met <i>hayır</i>. Je zegt: <i><b>Maalesef</b> bu bizim için biraz zor <b>görünüyor</b>.</i> · <i>Bunu yönetimle <b>görüşmem gerekecek</b>.</i> · <i>Bu noktada <b>farklı düşünüyoruz sanırım</b>.</i> · <i><b>Bakarız</b>.</i> (We zien wel: meestal een beleefd nee.)</p>
<p><b>⚠️ Uitzondering:</b> in B2 leerde je dat <b>-ecekti</b> een plan is dat <b>niet doorging</b>: <i>Gelecektim ama hastalandım.</i> Maar met <i>Bir şey soracaktım</i> stel je de vraag juist wél, direct daarna. <b>Waarom?</b> De verleden tijd zet het verzoek een stap terug in de tijd: «ik was van plan iets te vragen» laat de ander de ruimte om te zeggen dat het niet uitkomt. De spreker doet alsof hij het plan nog kan laten vallen. Het Nederlands doet precies hetzelfde met «ik wilde even iets vragen».</p>`,
        table: [['direct', 'diplomatiek'], ['Bir şey soracağım.', 'Bir şey soracaktım.'], ['Yardım eder misiniz?', 'Yardım edebilir miydiniz acaba?'], ['Bunu erteleyelim.', 'Bunu ertelesek mi?'], ['Hayır, olmaz.', 'Maalesef bu biraz zor görünüyor.'], ['Fiyatı düşürün.', 'Fiyatta biraz esneyebilir miyiz diye düşünüyordum.']],
        sum: 'Sizden bir şey rica edecektim.',
        ex: [['Sakıncası yoksa bir noktayı netleştirmek isterim.', 'Als er geen bezwaar is, wil ik graag één punt verduidelijken.'], ['Vadeyi altmış güne çıkarabilir miyiz acaba?', 'Zouden we de betalingstermijn naar zestig dagen kunnen brengen?'], ['Önce numuneleri görsek mi?', 'Zullen we misschien eerst de monsters bekijken?'], ['Bunu yönetimle görüşmem gerekecek.', 'Dat zal ik met de directie moeten bespreken.']] }
    ],
    dialogue: {
      t: 'Onderhandelen met een leverancier', place: 'Bursa 🇹🇷',
      lines: [
        ['Kemal Bey', 'Teklifimizi incelediniz mi? Gündemdeki ilk madde fiyat sanırım.', 'Heeft u onze offerte bekeken? Het eerste agendapunt is de prijs, neem ik aan.'],
        ['Ilse', 'İnceledik, teşekkür ederiz. Yalnız birim fiyatta biraz esneyebilir miyiz diye düşünüyorduk.', 'Dat hebben we, dank u. Alleen vroegen we ons af of er in de stuksprijs wat rek zit.'],
        ['Kemal Bey', 'Maliyetlerimiz çok arttı; açıkçası pazarlık payımız pek kalmadı. Kaç adetten söz ediyoruz?', 'Onze kosten zijn sterk gestegen; eerlijk gezegd hebben we weinig onderhandelingsruimte over. Over hoeveel stuks hebben we het?'],
        ['Ilse', 'Yılda on bin adet taahhüt edebiliriz. Bu durumda yüzde beş iskonto yapılabilir mi acaba?', 'We kunnen tienduizend stuks per jaar toezeggen. Zou er in dat geval vijf procent korting gegeven kunnen worden?'],
        ['Kemal Bey', 'Yüzde beş zor görünüyor. Peşin ödemede yüzde üç olabilir; onu da yönetime onaylatmam gerekecek.', 'Vijf procent lijkt lastig. Bij vooruitbetaling kan het drie procent worden; ook dat moet ik door de directie laten goedkeuren.'],
        ['Ilse', 'Anlıyorum. Peki, vadeyi altmış güne çıkarsak ve teslim süresi dört haftayı geçmese?', 'Dat begrijp ik. En als we de betalingstermijn op zestig dagen zetten en de levertijd niet langer wordt dan vier weken?'],
        ['Kemal Bey', 'Teslimat dört haftada yapılabilir. Vade konusunu da haftaya netleştirelim.', 'De levering kan in vier weken plaatsvinden. Laten we de betalingstermijn volgende week helder krijgen.'],
        ['Ilse', 'Harika. Sakıncası yoksa bugün konuştuklarımızı bir e-postayla özetleyeceğim.', 'Uitstekend. Als u er geen bezwaar tegen heeft, vat ik wat we vandaag besproken hebben samen in een e-mail.']
      ],
      q: [
        { t: 'mc', q: 'Ilse yılda kaç adet taahhüt ediyor?', o: ['On bin', 'Beş bin', 'Yüz bin'] },
        { t: 'mc', q: 'Kemal Bey hangi şartla yüzde üç iskonto öneriyor?', o: ['Peşin ödemede', 'Altmış gün vadede', 'Teslimat gecikirse'] },
        { t: 'mc', q: 'Hangi konu haftaya netleştirilecek?', o: ['Vade', 'Teslim süresi', 'Adet'] }
      ]
    },
    culture: { t: 'Eerst thee, dan zaken', html: `<p>Een Turkse zakelijke afspraak begint zelden met de agenda. Eerst komt er <b>çay</b>, en een gesprek over de reis, de familie, het voetbal. Dat is geen tijdverlies: zaken doe je met mensen die je vertrouwt, en vertrouwen bouw je eerst. Wie meteen ter zake komt, lijkt gehaast of koud.</p>
<p>Titels blijven lang in gebruik: <b>Kemal Bey</b>, <b>Ayşe Hanım</b>, en bij ingenieurs en artsen soms nog <i>Mühendis Bey</i> of <i>Doktor Hanım</i>. Overstappen op <i>sen</i> gebeurt pas als de oudste of hoogste het voorstelt.</p>
<p>🤝 Een «nee» hoor je zelden letterlijk. <b>Bakarız</b> (we zien wel), <b>İnşallah</b> en <b>Bir düşünelim</b> (laten we erover nadenken) betekenen vaak dat je beter een ander voorstel kunt doen.</p>` },
    ex: [
      { t: 'mc', q: 'Wat betekent «yaptırılabilir»?', o: ['kan worden uitbesteed', 'kan niet worden gedaan', 'heeft laten doen'], x: 'yap-tır-ıl-abil-ir: doen + laten + lijdend + kunnen.', tag: 'tr-stapel' },
      { t: 'cloze', s: 'Sözleşme bu hâliyle imzalan___.', h: 'kan niet worden', a: ['amaz'], o: ['amaz', 'mayabilir', 'abilir'], nl: 'Het contract kan in deze vorm niet worden ondertekend.', tag: 'tr-stapel' },
      { t: 'cloze', s: 'Teslimat süresi kısaltıl___.', h: 'wordt misschien niet', a: ['mayabilir'], o: ['mayabilir', 'amaz', 'abilir'], nl: 'De levertijd wordt mogelijk niet verkort.', x: 'Eerst -me (niet), dan -ebil (het kan zijn): misschien niet.', tag: 'tr-stapel' },
      { t: 'mc', q: 'Wat is het verschil tussen «yapılamaz» en «yapılmayabilir»?', o: ['Het eerste is onmogelijk, het tweede is misschien niet.', 'Het eerste is verleden tijd, het tweede toekomst.', 'Er is geen verschil.'], tag: 'tr-stapel' },
      { t: 'cloze', s: 'Bu madde haftaya görüş___.', h: 'zal worden besproken', a: ['ülecek'], o: ['ülecek', 'ecek', 'türecek'], nl: 'Dit punt zal volgende week worden besproken.', tag: 'tr-stapel' },
      { t: 'mc', q: 'Waarom bestaat naast «denir» ook «denilir», met twee lijdende uitgangen?', o: ['De stam is zo kort dat één -n nauwelijks opvalt.', 'Denilir is de beleefde vorm.', 'Denir is verleden tijd.'], x: '⚠️ Uitzondering: bij de- en ye- is de lijdende vorm alleen een n. De tweede uitgang maakt hem weer hoorbaar. Beide vormen zijn goed.', tag: 'tr-stapel' },
      { t: 'cloze', s: 'Sizden bir şey rica ed___.', h: 'ik wilde …', a: ['ecektim'], o: ['ecektim', 'eceğim', 'iyorum'], nl: 'Ik wilde u iets vragen.', tag: 'tr-zacht' },
      { t: 'cloze', s: 'Toplantıyı perşembeye alabilir miyiz ___?', h: 'misschien', a: ['acaba'], o: ['acaba', 'nitekim', 'zaten'], nl: 'Zouden we de vergadering naar donderdag kunnen verzetten?', tag: 'tr-zacht' },
      { t: 'cloze', s: 'Bu maddeyi haftaya bırak___ mı?', h: 'zullen we misschien', a: ['sak'], o: ['sak', 'tık', 'acak'], nl: 'Zullen we dit punt misschien tot volgende week laten rusten?', tag: 'tr-zacht' },
      { t: 'mc', q: '«Bir şey soracaktım.» Wat gebeurt er daarna?', o: ['De spreker stelt de vraag.', 'De spreker ziet af van de vraag.', 'De spreker heeft de vraag gisteren gesteld.'], x: '⚠️ Uitzondering: -ecekti is elders een plan dat niet doorging. Hier zet de verleden tijd alleen afstand, zoals «ik wilde even iets vragen».', tag: 'tr-zacht' },
      { t: 'mc', q: 'Een leverancier zegt «Bakarız». Wat bedoelt hij meestal?', o: ['Waarschijnlijk niet.', 'Ja, afgesproken.', 'Ik kijk het nu na.'], tag: 'tr-zacht' },
      { t: 'mc', q: 'Wat is «vade»?', o: ['betalingstermijn', 'levertijd', 'korting'], tag: 'vocab' },
      { t: 'tr', nl: 'Zou u mij kunnen helpen?', a: ['Bana yardım edebilir miydiniz?', 'Bana yardım edebilir miydiniz acaba?', 'Yardım edebilir miydiniz?', 'Bana yardım edebilir misiniz?', 'Yardım edebilir misiniz?'], tag: 'tr-zacht' },
      { t: 'tr', nl: 'Dat zal ik met de directie moeten bespreken.', a: ['Bunu yönetimle görüşmem gerekecek.', 'Bunu yönetimle konuşmam gerekecek.', 'Bunu yönetim ile görüşmem gerekecek.'], tag: 'tr-zacht' },
      { t: 'order', s: 'Sakıncası yoksa bir noktayı netleştirmek isterim.', nl: 'Als er geen bezwaar is, wil ik graag één punt verduidelijken.', tag: 'tr-zacht' },
      { t: 'order', s: 'Numuneler haftaya gönderilebilecek.', nl: 'De monsters kunnen volgende week worden verstuurd.', tag: 'tr-stapel' },
      { t: 'match', p: [['teklif', 'offerte'], ['kâr', 'winst'], ['ciro', 'omzet'], ['maliyet', 'kostprijs'], ['tedarikçi', 'leverancier'], ['taahhüt', 'toezegging']], tag: 'vocab' }
    ],
    reading: {
      t: 'Toplantı özeti', type: 'Zakelijke e-mail',
      p: [
        ['Sayın Kemal Bey, bugünkü görüşmemiz için teşekkür ederim. Üzerinde anlaşılan noktaları aşağıda özetliyorum.', 'Geachte heer Kemal, dank voor ons gesprek van vandaag. Hieronder vat ik de punten samen waarover overeenstemming is bereikt.'],
        ['Yıllık on bin adetlik sipariş taahhüdümüz karşılığında, peşin ödemelerde yüzde üç iskonto uygulanabileceği belirtilmiştir. Bu oranın yönetiminizce onaylanması beklenmektedir.', 'Aangegeven is dat in ruil voor onze toezegging van tienduizend stuks per jaar bij vooruitbetaling drie procent korting kan worden toegepast. Dit percentage wacht op goedkeuring door uw directie.'],
        ['Teslimatın sipariş tarihinden itibaren dört hafta içinde yapılacağı kararlaştırılmıştır. Vade konusu ise henüz netleştirilememiş olup haftaya yeniden görüşülecektir.', 'Besloten is dat de levering binnen vier weken na de besteldatum plaatsvindt. De betalingstermijn kon nog niet worden verduidelijkt en wordt volgende week opnieuw besproken.'],
        ['Yanlış ya da eksik aktardığım bir nokta varsa düzeltirseniz sevinirim. Sözleşme taslağını cuma gününe kadar tarafınıza iletmeyi planlıyoruz. İyi çalışmalar dilerim. Ilse de Vries', 'Mocht ik een punt onjuist of onvolledig hebben weergegeven, dan hoor ik dat graag. We zijn van plan u het conceptcontract vóór vrijdag toe te sturen. Met vriendelijke groet, Ilse de Vries']
      ],
      gl: [['karşılığında', 'in ruil voor'], ['uygulamak', 'toepassen'], ['kararlaştırmak', 'besluiten / afspreken'], ['aktarmak', 'weergeven / doorgeven'], ['taslak', 'concept'], ['iletmek', 'doorsturen']],
      q: [
        { t: 'mc', q: 'İskonto hangi durumda uygulanacak?', o: ['Peşin ödemelerde', 'Bütün siparişlerde', 'Teslimat gecikirse'] },
        { t: 'mc', q: 'Hangi konu henüz netleştirilemedi?', o: ['Vade', 'Teslim süresi', 'Sipariş adedi'] },
        { t: 'mc', q: 'Ilse cuma gününe kadar ne gönderecek?', o: ['Sözleşme taslağını', 'Numuneleri', 'Ödemeyi'] }
      ]
    },
    say: [['Sizden bir şey rica edecektim.', 'Ik wilde u iets vragen.'], ['Fiyatta biraz esneyebilir miyiz acaba?', 'Zit er misschien wat rek in de prijs?'], ['Bunu yönetimle görüşmem gerekecek.', 'Dat zal ik met de directie moeten bespreken.'], ['Bu konuyu haftaya netleştirelim.', 'Laten we dit punt volgende week helder krijgen.']],
    task: { nl: 'Schrijf een zakelijke e-mail van vijf of zes zinnen waarin je een bespreking samenvat. Begin met Sayın …, noem twee afspraken in de lijdende vorm (kararlaştırılmıştır, belirtilmiştir), één punt dat nog open staat (netleştirilememiştir, görüşülecektir) en een diplomatiek verzoek (-ebilir miydiniz, sakıncası yoksa, mümkünse). Sluit af met een groet.', model: 'Sayın Ayşe Hanım,\n\nDünkü toplantımız için teşekkür ederim. Projenin 1 Mart’ta başlatılması kararlaştırılmıştır. İlk raporun nisan sonunda sunulacağı belirtilmiştir. Bütçe konusu henüz netleştirilememiş olup önümüzdeki hafta yeniden görüşülecektir. Mümkünse güncel maliyet tablosunu perşembeye kadar gönderebilir miydiniz?\n\nİyi çalışmalar dilerim.\nIlse de Vries' },
    scenario: { nl: 'Je onderhandelt in Bursa met Kemal Bey, de verkoopdirecteur van een textielleverancier, over prijs, betalingstermijn en levertijd.', role: 'You are Kemal Bey, sales director of a textile supplier in Bursa. Be courteous and warm but firm: your costs have risen and you have little room on price. Offer small concessions under conditions (peşin ödeme, daha yüksek adet), say you must get management approval, and postpone one point to next week. Use indirect refusals (zor görünüyor, bakarız, yönetimle görüşmem gerekecek) and stacked passive forms (yapılabilir, onaylatmam gerekecek). Formal C1 Turkish with siz.', goal: 'Vraag diplomatiek om korting, doe een tegenbod, leg vast wat is afgesproken en wat nog open staat.' }
  });

  /* ───────────────────────── C1 · 6 ───────────────────────── */
  U({
    id: 'tr-c1-06', level: 'C1', icon: '📚', title: 'Olduğum yerde kalakaldım', nl: 'Literatuur lezen: verteltijden en samengestelde werkwoorden',
    goals: ['Een literaire tekst lezen en de sfeer benoemen', 'De samengestelde werkwoorden -iver, -ekal, -edur, -eyaz herkennen', 'Verteltijden onderscheiden: -di, -miş, -mekteydi, -irdi en de vertellende tegenwoordige tijd', 'Zelf een korte scène schrijven'],
    vocab: [
      ['öykü', 'kort verhaal'], ['şair', 'dichter'], ['anlatıcı', 'verteller'], ['kahraman', 'held / hoofdpersoon'], ['olay örgüsü', 'plot'], ['betimleme', 'beschrijving'], ['benzetme', 'vergelijking (stijlfiguur)'],
      ['mecaz', 'beeldspraak'], ['üslup', 'stijl'], ['dize', 'versregel'], ['kafiye', 'rijm'], ['kurgu', 'fictie / opbouw'], ['iç sıkıntısı', 'beklemming / onrust'], ['hüzün', 'weemoed'],
      ['ıssız', 'verlaten (plek)'], ['sessizlik', 'stilte'], ['gölge', 'schaduw'], ['ansızın', 'plotseling'], ['usulca', 'zachtjes'], ['donakalmak', 'verstijven'], ['şaşakalmak', 'stomverbaasd staan'],
      ['bakakalmak', 'blijven staren'], ['dalmak', 'wegzinken / opgaan in'], ['fısıldamak', 'fluisteren'], ['iç çekmek', 'zuchten'], ['yayınevi', 'uitgeverij'], ['çeviri', 'vertaling'], ['çevirmen', 'vertaler'], ['iskele', 'aanlegsteiger'], ['martı', 'meeuw']
    ],
    grammar: [
      { t: 'Twee werkwoorden in één: -iver, -ekal, -edur, -eyaz', es: 'Tezlik, sürerlik, yaklaşma fiilleri',
        html: `<p>Je kent <b>-ebil-</b> (kunnen), dat is ontstaan uit het werkwoord <i>bilmek</i>. Het Turks heeft nog vier van zulke vastgeplakte werkwoorden. Ze zeggen niet wát er gebeurt, maar <b>hoe</b>: snel, aanhoudend, bijna.</p>
<p>• <b>-(y)iver-</b> (van <i>vermek</i>, geven) = snel, even, zomaar, plotseling: <i>Şunu tut<b>uver</b>.</i> (Houd dit even vast.) · <i>Kapı ansızın açıl<b>ıverdi</b>.</i> (De deur vloog plotseling open.) · <i>Söyle<b>yiver</b> işte!</i> (Zeg het nou gewoon!)<br>• <b>-(y)ekal-</b> (van <i>kalmak</i>, blijven) = blijven steken in een toestand, vaak van schrik of verbazing: <i>Bak<b>akaldım</b>.</i> (Ik bleef staren.) · <i>Olduğu yerde don<b>akaldı</b>.</i> (Hij verstijfde ter plekke.) · <i>Şaş<b>akaldık</b>.</i><br>• <b>-(y)edur-</b> (van <i>durmak</i>, staan) = blijven doen, intussen alvast doen: <i>Sen yürü<b>yedur</b>, ben yetişirim.</i> (Loop jij maar vast door, ik haal je wel in.) · <i>Onlar tartış<b>adursun</b>, biz işimize bakalım.</i> (Laat hen maar ruziën …)<br>• <b>-(y)eyaz-</b> (van <i>yazmak</i>, in de oude betekenis «missen») = bijna, op een haar na: <i>Düş<b>eyazdım</b>.</i> (Ik viel bijna.) · <i>Gülmekten öl<b>eyazdık</b>.</i> (We lachten ons bijna dood.)</p>
<p>Daarnaast in schrijftaal <b>-(y)egel-</b> (van <i>gelmek</i>) = van oudsher doen: <i>sür<b>egelen</b> bir gelenek</i> (een traditie die al heel lang voortduurt).</p>
<p>De ontkenning kan op twee plekken staan, met een ander effect: <i>Gel<b>me</b>yiver!</i> (Kom dan gewoon niet! Dat is ook goed.) naast <i>Söyle<b>yiverme</b>!</i> (Flap het er niet zomaar uit!)</p>
<p><b>⚠️ Uitzondering:</b> de bindklinker vóór het tweede werkwoord volgt de klinkerharmonie (<i>al<b>ı</b>ver, gör<b>ü</b>ver, oku<b>yu</b>ver</i>), maar het tweede werkwoord zelf niet: het blijft <b>-ver-</b>, ook na a, ı, o, u. Je zegt <i>alı<b>ver</b></i>, nooit <i>alıvar</i>. Net zo: <i>bak<b>akal</b>, gid<b>edur</b></i>. <b>Waarom?</b> Het zijn geen echte achtervoegsels maar hele werkwoorden (<i>vermek, kalmak, durmak, yazmak</i>) die aan de stam zijn vastgegroeid. Een zelfstandig woord houdt zijn eigen klinkers. Daarna gaat de harmonie verder vanaf dát werkwoord: <i>alıver-<b>di</b></i>, <i>bakakal-<b>dı</b></i>.</p>`,
        table: [['vorm', 'komt van', 'betekenis', 'voorbeeld'], ['-iver-', 'vermek', 'snel, even, plots', 'yapıver · geliverdi'], ['-ekal-', 'kalmak', 'blijven steken', 'bakakaldı · donakaldı'], ['-edur-', 'durmak', 'blijven doen, alvast', 'gidedur · bekleyedur'], ['-eyaz-', 'yazmak', 'bijna', 'düşeyazdı · öleyazdı'], ['-egel-', 'gelmek', 'van oudsher', 'süregelen']],
        sum: 'Olduğum yerde kalakaldım.',
        ex: [['Şu pencereyi açıverir misin?', 'Wil je even dit raam opendoen?'], ['Haberi duyunca donakaldım.', 'Toen ik het nieuws hoorde, verstijfde ik.'], ['Siz yiyedurun, ben hemen geliyorum.', 'Eten jullie maar vast, ik kom er zo aan.'], ['Merdivenden düşeyazdım.', 'Ik viel bijna van de trap.']] },
      { t: 'Verteltijden: -di, -miş, -mekteydi, -irdi, en de tegenwoordige tijd', es: 'Anlatım zamanları',
        html: `<p>Een schrijver kiest zijn tijd om afstand of nabijheid te scheppen. Vijf mogelijkheden:</p>
<p>• <b>-di</b>: de gewone verteltijd van romans en verhalen. De verteller staat ervoor in: <i>Kapıyı aç<b>tı</b>, içeri gir<b>di</b>.</i><br>• <b>-miş</b>: de tijd van sprookjes, legenden en roddels. De verteller heeft het ook maar gehoord: <i>Bir padişahın üç oğlu var<b>mış</b>.</i><br>• <b>-iyordu / -mekteydi</b>: de achtergrond, wat er gaande was. <i>-mekteydi</i> is de literaire vorm: <i>Yağmur usulca yağ<b>maktaydı</b>.</i> (De regen viel zachtjes.)<br>• <b>-irdi</b>: wat vroeger steeds gebeurde: <i>Her akşam iskeleye in<b>er</b>, denize bak<b>ardı</b>.</i> (Elke avond liep hij naar de steiger en keek naar de zee.) Let op: alleen het <b>laatste</b> werkwoord krijgt <i>-di</i>; de eerste staat kaal in de brede tijd.<br>• <b>-mişti</b>: wat daarvóór al gebeurd was: <i>Mektubu çoktan yak<b>mıştı</b>.</i></p>
<p>En dan de <b>vertellende tegenwoordige tijd</b>. Moppen, anekdotes, samenvattingen van films en toneelaanwijzingen staan in de <b>brede tijd</b> of in <b>-iyor</b>, ook al is het verhaal voorbij: <i>Nasreddin Hoca bir gün pazara <b>gider</b>. Bir adam ona <b>sorar</b> …</i> · <i>Filmde bir kadın İstanbul’a <b>geliyor</b>, kocasını <b>arıyor</b>.</i></p>
<p>Literair Turks gooit ook de woordvolgorde om (<b>devrik cümle</b>): <i>Gitti o da sonunda.</i> (Ook hij ging uiteindelijk.) Het werkwoord vooraan geeft nadruk en ritme; in gedichten is het heel gewoon.</p>
<p><b>⚠️ Uitzondering:</b> een mop of anekdote gaat over iets wat al gebeurd is, en toch vertel je hem <b>niet</b> in de verleden tijd: <i>Hoca eşeğe ters <b>biner</b></i>, niet <i>bindi</i>. <b>Waarom?</b> De brede tijd staat buiten de tijd: hij zegt «zo gaat het verhaal», telkens als het verteld wordt. Daardoor komt de scène dichterbij en klinkt hij als iets wat iedereen kent. Het Nederlands doet hetzelfde: «Komt een man bij de dokter …». Vertel je dezelfde mop met <i>-di</i>, dan klinkt het alsof je er zelf bij was, en met <i>-miş</i> wordt het een sprookje.</p>`,
        table: [['tijd', 'waar', 'effect'], ['-di', 'roman, verhaal', 'verteller staat ervoor in'], ['-miş', 'sprookje, legende', 'van horen zeggen'], ['-mekteydi', 'literaire achtergrond', 'er was iets gaande'], ['-irdi', 'herinnering', 'gebeurde steeds'], ['-ir / -iyor', 'mop, samenvatting', 'tijdloos, dichtbij']],
        sum: 'Her akşam iskeleye iner, denize bakardı.',
        ex: [['Yağmur usulca yağmaktaydı.', 'De regen viel zachtjes.'], ['Her sabah aynı saatte kalkar, çayını balkonda içerdi.', 'Elke ochtend stond hij op dezelfde tijd op en dronk zijn thee op het balkon.'], ['Bir gün Hoca’ya sorarlar: «Dünyanın merkezi neresi?»', 'Op een dag vragen ze de Hoca: «Waar is het midden van de wereld?»'], ['Gitti o da sonunda.', 'Ook hij ging uiteindelijk.']] }
    ],
    dialogue: {
      t: 'In de leesclub', place: 'İstanbul 🇹🇷',
      lines: [
        ['Nermin', 'Bu haftaki öyküyü nasıl buldunuz? Ben son sahnede resmen donakaldım.', 'Wat vonden jullie van het verhaal van deze week? Ik verstijfde gewoon bij de laatste scène.'],
        ['Ilse', 'Ben de! Kadın mektubu açıveriyor ve her şey bir anda değişiyor. Çok ustaca.', 'Ik ook! De vrouw scheurt zomaar de brief open en alles verandert in één klap. Heel knap gedaan.'],
        ['Nermin', 'Yazarın üslubu sade ama betimlemeler çok güçlü. O iskele sahnesi mesela …', 'De stijl van de schrijver is sober, maar de beschrijvingen zijn heel sterk. Die scène op de steiger bijvoorbeeld …'],
        ['Ilse', 'Evet: «Her akşam iskeleye iner, denize bakardı.» Tek cümleyle bütün yalnızlığı anlatıyor.', 'Ja: «Elke avond liep hij naar de steiger en keek naar de zee.» In één zin vertelt hij de hele eenzaamheid.'],
        ['Nermin', 'Anlatıcının neden hep geçmiş zamanda konuştuğunu fark ettin mi? Sadece son paragraf şimdiki zamanda.', 'Is het je opgevallen waarom de verteller steeds in de verleden tijd spreekt? Alleen de laatste alinea staat in de tegenwoordige tijd.'],
        ['Ilse', 'Fark ettim. Sanki geçmiş birden bugüne geliyor. Çeviride bu etki kaybolur mu acaba?', 'Dat viel me op. Alsof het verleden ineens in het heden aankomt. Zou dat effect in vertaling verloren gaan?'],
        ['Nermin', 'İyi bir çevirmen korur. Ama Türkçenin hüznünü başka dile taşımak kolay değil.', 'Een goede vertaler behoudt het. Maar de weemoed van het Turks naar een andere taal overbrengen is niet makkelijk.'],
        ['Ilse', 'Haklısın. Gelecek hafta için bir şiir seçsek mi?', 'Je hebt gelijk. Zullen we voor volgende week een gedicht kiezen?']
      ],
      q: [
        { t: 'mc', q: 'Nermin son sahnede ne hissetti?', o: ['Donakaldı', 'Sıkıldı', 'Güldü'] },
        { t: 'mc', q: 'Yazarın üslubu nasıl?', o: ['Sade ama betimlemeleri güçlü', 'Süslü ve uzun cümleli', 'Komik ve hızlı'] },
        { t: 'mc', q: 'Son paragraf hangi zamanda yazılmış?', o: ['Şimdiki zamanda', 'Geçmiş zamanda', 'Gelecek zamanda'] }
      ]
    },
    culture: { t: 'Van Yunus Emre tot Orhan Pamuk', html: `<p>De Turkse literatuur heeft twee oude stromen. De <b>volkspoëzie</b> (halk şiiri) van rondtrekkende zangers, in eenvoudig Turks en met de <i>saz</i>: <b>Yunus Emre</b> (13e eeuw) en <b>Karacaoğlan</b> worden nog elke dag geciteerd. En de <b>hofpoëzie</b> (divan şiiri), vol Perzische en Arabische woorden, die zonder woordenboek nauwelijks te lezen is.</p>
<p>De twintigste eeuw bracht vernieuwers: <b>Nâzım Hikmet</b> met vrije verzen, <b>Orhan Veli</b> met gedichten in spreektaal, <b>Sait Faik</b> met korte verhalen over vissers en eilanden, <b>Yaşar Kemal</b> met epische romans over de Çukurova. In 2006 kreeg <b>Orhan Pamuk</b> de Nobelprijs.</p>
<p>📖 Een goed begin op C1 zijn de korte verhalen van Sait Faik en de gedichten van Orhan Veli: gewone woorden, veel sfeer. Het woord <b>hüzün</b>, de gedeelde weemoed van een stad, kom je overal tegen.</p>` },
    ex: [
      { t: 'cloze', s: 'Şu pencereyi aç___ misin?', h: 'even', a: ['ıverir'], o: ['ıverir', 'akalır', 'ayazır'], nl: 'Wil je even dit raam opendoen?', tag: 'tr-aspect' },
      { t: 'cloze', s: 'Haberi duyunca don___.', h: 'ik verstijfde', a: ['akaldım'], o: ['akaldım', 'uverdim', 'ayazdım'], nl: 'Toen ik het nieuws hoorde, verstijfde ik.', tag: 'tr-aspect' },
      { t: 'cloze', s: 'Merdivenden düş___.', h: 'ik … bijna', a: ['eyazdım'], o: ['eyazdım', 'ekaldım', 'üverdim'], nl: 'Ik viel bijna van de trap.', tag: 'tr-aspect' },
      { t: 'cloze', s: 'Sen yürü___, ben yetişirim.', h: 'alvast', a: ['yedur'], o: ['yedur', 'yekal', 'yeyaz'], nl: 'Loop jij maar vast door, ik haal je wel in.', tag: 'tr-aspect' },
      { t: 'mc', q: 'Waarom is het «alıver» en niet «alıvar»?', o: ['-ver- is het werkwoord vermek en houdt zijn eigen klinker.', 'Na een ı komt altijd een e.', 'Alıvar bestaat ook, maar is ouderwets.'], x: '⚠️ Uitzondering: alleen de bindklinker volgt de harmonie. -ver-, -kal-, -dur- en -yaz- zijn vastgegroeide werkwoorden.', tag: 'tr-aspect' },
      { t: 'mc', q: 'Wat betekent «Söyleyiverme!»?', o: ['Flap het er niet zomaar uit!', 'Zeg het dan gewoon niet, ook goed.', 'Blijf het niet zeggen!'], x: 'Söyleyiverme = doe het niet «zomaar». Söylemeyiver = laat het dan gewoon.', tag: 'tr-aspect' },
      { t: 'cloze', s: 'Her akşam iskeleye iner, denize bak___.', h: 'placht te', a: ['ardı'], o: ['ardı', 'tı', 'mış'], nl: 'Elke avond liep hij naar de steiger en keek naar de zee.', tag: 'tr-vertel' },
      { t: 'cloze', s: 'Yağmur usulca yağ___.', h: 'literair: was aan het', a: ['maktaydı'], o: ['maktaydı', 'acaktı', 'ar'], nl: 'De regen viel zachtjes.', tag: 'tr-vertel' },
      { t: 'mc', q: 'In welke tijd vertel je een mop over Nasreddin Hoca?', o: ['In de brede tijd: Hoca pazara gider.', 'In de verleden tijd op -di: Hoca pazara gitti.', 'In de toekomende tijd: Hoca pazara gidecek.'], x: '⚠️ Uitzondering: de mop is al gebeurd, maar de brede tijd staat buiten de tijd en haalt de scène dichtbij. Vergelijk: «Komt een man bij de dokter …»', tag: 'tr-vertel' },
      { t: 'mc', q: 'Welke tijd past bij een sprookje?', o: ['-miş', '-di', '-ecek'], x: 'De verteller van een sprookje heeft het zelf ook maar gehoord.', tag: 'tr-vertel' },
      { t: 'mc', q: 'Wat betekent «süregelen bir gelenek»?', o: ['een traditie die al heel lang bestaat', 'een traditie die bijna verdwenen is', 'een traditie die net begonnen is'], tag: 'tr-aspect' },
      { t: 'mc', q: 'Wat is «hüzün»?', o: ['weemoed', 'stilte', 'schaduw'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik bleef staren.', a: ['Bakakaldım.', 'Öylece bakakaldım.'], tag: 'tr-aspect' },
      { t: 'tr', nl: 'We lachten ons bijna dood.', a: ['Gülmekten öleyazdık.', 'Neredeyse gülmekten ölecektik.', 'Gülmekten ölüyorduk.'], tag: 'tr-aspect' },
      { t: 'order', s: 'Her sabah aynı saatte kalkar, çayını balkonda içerdi.', nl: 'Elke ochtend stond hij op dezelfde tijd op en dronk zijn thee op het balkon.', tag: 'tr-vertel' },
      { t: 'match', p: [['öykü', 'kort verhaal'], ['şair', 'dichter'], ['üslup', 'stijl'], ['gölge', 'schaduw'], ['özlem', 'verlangen'], ['çeviri', 'vertaling']], tag: 'vocab' }
    ],
    reading: {
      t: 'İskeledeki adam', type: 'Kort verhaal (fragment)',
      p: [
        ['Adada herkes onu tanırdı ama kimse adını bilmezdi. Her akşam vapur saatinde iskeleye iner, son yolcu da çıkana kadar beklerdi. Sonra usulca evine dönerdi.', 'Op het eiland kende iedereen hem, maar niemand wist zijn naam. Elke avond liep hij tegen de tijd van de veerboot naar de steiger en wachtte tot ook de laatste passagier van boord was. Daarna ging hij stilletjes naar huis.'],
        ['O akşam hava ağırdı; martılar bile susmuştu. Vapur yanaşmaktaydı. Adam her zamanki yerinde duruyor, gözlerini kalabalıktan ayırmıyordu.', 'Die avond hing er een zware lucht; zelfs de meeuwen waren stil geworden. De veerboot legde aan. De man stond op zijn vaste plek en wendde zijn ogen niet van de menigte af.'],
        ['Birden yolcuların arasında gri paltolu bir kadın belirdi. Adam olduğu yerde kalakaldı. Elindeki şapka yere düşüverdi; eğilip almayı bile düşünemedi.', 'Plotseling dook tussen de passagiers een vrouw in een grijze jas op. De man bleef als aan de grond genageld staan. De hoed in zijn hand viel zomaar op de grond; hij kon er niet eens aan denken om te bukken en hem op te rapen.'],
        ['Kadın yaklaşıyor. Durup ona bakıyor. «Hâlâ mı bekliyorsun?» diyor. Adam gülümsüyor: «Otuz yıl oldu. Bir akşam daha beklesem ne çıkardı?»', 'De vrouw komt dichterbij. Ze blijft staan en kijkt hem aan. «Wacht je nog steeds?» zegt ze. De man glimlacht: «Het is dertig jaar geleden. Wat had één avond langer wachten uitgemaakt?»']
      ],
      gl: [['vapur', 'veerboot'], ['yanaşmak', 'aanleggen'], ['palto', 'overjas'], ['belirmek', 'opduiken / verschijnen'], ['eğilmek', 'bukken'], ['ne çıkardı', 'wat had het uitgemaakt']],
      q: [
        { t: 'mc', q: 'Adam her akşam ne yapardı?', o: ['İskelede vapuru beklerdi', 'Balığa çıkardı', 'Vapurla şehre giderdi'] },
        { t: 'mc', q: 'Kadını görünce adama ne oldu?', o: ['Olduğu yerde kalakaldı', 'Koşarak kaçtı', 'Hemen konuşmaya başladı'] },
        { t: 'mc', q: 'Son paragraf neden şimdiki zamanda?', o: ['Sahneyi okura yaklaştırmak için', 'Yazar hata yaptığı için', 'Olay gelecekte geçtiği için'] }
      ]
    },
    say: [['Şunu tutuverir misin?', 'Wil je dit even vasthouden?'], ['Olduğum yerde kalakaldım.', 'Ik bleef als aan de grond genageld staan.'], ['Düşeyazdım!', 'Ik viel bijna!'], ['Siz yiyedurun, ben geliyorum.', 'Eten jullie maar vast, ik kom eraan.']],
    task: { nl: 'Schrijf een korte scène van vijf of zes zinnen: iemand wacht ergens (een station, een keuken, een haven) en dan gebeurt er iets onverwachts. Schets eerst de gewoonte met -irdi, dan de achtergrond met -iyordu of -mekteydi, en laat de gebeurtenis zien met minstens twee samengestelde werkwoorden (-iver, -ekal, -eyaz).', model: 'Ninem her sabah mutfakta çay demler, radyoyu kısık sesle açardı. O sabah da çaydanlık fokurdamaktaydı; pencereden soğuk bir ışık giriyordu. Birden kapı çalındı. Ninem elindeki bardağı düşüreyazdı. Kapıyı açınca olduğu yerde kalakaldı: yıllardır görmediği kardeşi karşısında duruyordu. Tek kelime edemeden birbirlerine sarılıverdiler.' },
    scenario: { nl: 'Je zit in een leesclub in İstanbul. Nermin, een gepensioneerde lerares Turks, bespreekt met jou een kort verhaal over een man die elke avond op een steiger wacht.', role: 'You are Nermin, a retired Turkish literature teacher who runs a book club in Kadıköy, İstanbul. Discuss a short story about a man who waits on a pier every evening. Ask the learner about the mood (hüzün, yalnızlık), the narrator, the style and the switch of tense in the last paragraph. Quote short lines, use literary vocabulary (üslup, betimleme, anlatıcı) and compound verbs (donakaldım, açıverdi, düşeyazdı). Encourage the learner to give their own interpretation. Warm, cultured C1 Turkish.', goal: 'Vertel wat je van het verhaal vond, benoem de sfeer en de stijl, en leg uit wat de tijdwissel aan het eind doet.' }
  });
})(window.SPT);
