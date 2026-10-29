// Hoofdstukkaart bij التفسير (٣), eenheid 1: سورة الانشقاق (lessen 1–3, boek p. 9–18).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n3-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. De hadith over de harten tussen twee vingers (p. 17) staat
// in het boek zonder bron en is daarom niet in het hadith-tabblad opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '9–18',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الانشقاق', 'Soera al-Inshiqāq'],
  subtitle: ['ثلاثة دروس مجموعة في صفحة واحدة', 'Drie lessen samen op één pagina'],
  summary: [
    'سورة مكية تصف انشقاق السماء ومد الأرض يوم القيامة، وأن الإنسان كادح إلى ربه فملاقيه، ثم تقسم الناس إلى من يؤتى كتابه بيمينه ومن يؤتاه وراء ظهره، ثم تقسم بالشفق والليل والقمر على تقلب الإنسان من حال إلى حال، وتختم بذم من لا يخضع للقرآن.',
    'Een Mekkaanse soera over het splijten van de hemel en het uitstrekken van de aarde op de Opstandingsdag, en over de mens die zwoegend op weg is naar zijn Heer en Hem ontmoet. Daarna verdeelt zij de mensen in wie zijn boek in de rechterhand krijgt en wie het achter zijn rug krijgt, zweert bij de avondgloed, de nacht en de maan dat de mens van toestand naar toestand gaat, en eindigt met kritiek op wie zich niet aan de Koran onderwerpt.'
  ],
  map: {
    title: ['سورة الانشقاق في خريطة واحدة', 'Soera al-Inshiqāq in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الانشقاق', 'Soera al-Inshiqāq'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['أحوال السماء والأرض', 'Hemel en aarde op de Dag'], sub: ['الآيات ١–٥', 'vers 1–5'], page: 10, children: [['انشقاق السماء', 'de hemel splijt'], ['أذنت وحقت', 'zij luisterde en gehoorzaamde'], ['مد الأرض وإلقاء ما فيها', 'de aarde wordt uitgestrekt en werpt uit']] },
      { label: ['الإنسان كادح إلى ربه', 'De mens zwoegt naar zijn Heer'], sub: ['الآية ٦', 'vers 6'], page: 11, children: [['الكدح في خير أو شر', 'inspanning in goed of kwaad'], ['فملاقيه', 'en hij ontmoet Hem']] },
      { label: ['أصحاب اليمين', 'Wie het boek rechts krijgt'], sub: ['الآيات ٧–٩', 'vers 7–9'], page: 11, children: [['حساب يسير هو العرض', 'lichte afrekening: het tonen'], ['ينقلب إلى أهله مسرورا', 'keert blij terug naar zijn familie']] },
      { label: ['من أوتي كتابه وراء ظهره', 'Wie het boek achter zijn rug krijgt'], sub: ['الآيات ١٠–١٥', 'vers 10–15'], page: 12, children: [['يدعو ثبورا', 'roept om ondergang'], ['ظن أن لن يحور', 'dacht niet terug te keren']] },
      { label: ['القسم وتقلب الأحوال', 'De eed en de wisselende toestanden'], sub: ['الآيات ١٦–١٩', 'vers 16–19'], page: 15, children: [['الشفق والليل والقمر', 'avondgloed, nacht en maan'], ['طبقا عن طبق', 'toestand na toestand']] },
      { label: ['حال المكذبين والمؤمنين', 'Loochenaars en gelovigen'], sub: ['الآيات ٢٠–٢٥', 'vers 20–25'], page: 16, children: [['لا يسجدون للقرآن', 'buigen niet voor de Koran'], ['أجر غير ممنون', 'een onafgebroken beloning']] }
    ]
  },
  points: [
    [10, 'سجد أبو هريرة في العشاء عند قراءة ﴿إذا السماء انشقت﴾ وقال: سجدت بها خلف أبي القاسم ﷺ.', 'Abū Hurayra boog zich in het ʿishāʾ-gebed neer bij "Wanneer de hemel splijt" en zei dat hij dat achter Abū l-Qāsim ﷺ deed.'],
    [10, '﴿وأذنت لربها وحقت﴾: سمعت وأطاعت أمر ربها بالانشقاق، وحق لها ذلك لأن خالقها أمرها.', '"En zij luisterde naar haar Heer, zoals het hoort": zij gehoorzaamde het bevel om te splijten, en dat is haar plicht omdat haar Schepper het beveelt.'],
    [11, 'الكدح سعي الإنسان في خير أو شر حتى يؤثر فيه، وهو ملاق ربه أو ملاق جزاء عمله.', 'Kadḥ is de inspanning van de mens in goed of kwaad, tot het hem tekent; hij ontmoet zijn Heer, of de vergelding van zijn daden.'],
    [11, 'الحساب اليسير هو العرض: تعرض على المؤمن ذنوبه ثم يغفر له، ومن نوقش الحساب هلك.', 'De lichte afrekening is het tonen: de gelovige krijgt zijn zonden te zien en ze worden vergeven; wie grondig ondervraagd wordt, gaat ten onder.'],
    [12, 'الكافر يؤتى كتابه وراء ظهره جزاء من جنس عمله، لأنه نبذ كتاب الله وراء ظهره.', 'De ongelovige krijgt zijn boek achter zijn rug, een vergelding van dezelfde soort: hij wierp Allahs Boek achter zijn rug.'],
    [15, '«لا» في ﴿فلا أقسم بالشفق﴾ للتأكيد والتنبيه لا للنفي، والشفق الحمرة بعد غروب الشمس.', '"Lā" in "Nee, Ik zweer bij de avondgloed" versterkt de eed en is geen ontkenning; ash-shafaq is de rode gloed na zonsondergang.'],
    [16, '﴿لتركبن طبقا عن طبق﴾: تنتقلون من حال إلى حال، من النطفة إلى الآخرة.', '"Jullie zullen toestand na toestand doorlopen": van druppel tot het hiernamaals.'],
    [18, 'سجود التلاوة سنة مؤكدة وليس واجبا؛ سجد عمر يوم جمعة وترك في الجمعة التالية بحضرة الصحابة.', 'De knieval bij recitatie is een sterk aanbevolen sunna en geen plicht; ʿUmar boog op een vrijdag en liet het de vrijdag erna, in het bijzijn van de metgezellen.']
  ],
  terms: [
    ['انشقت', 'inshaqqat', 10, 'تصدعت وصارت أبوابا يوم القيامة.', 'Zij scheurde en werd poorten op de Opstandingsdag.'],
    ['أذنت', 'adhinat', 10, 'سمعت وأطاعت؛ والأذن الاستماع.', 'Zij luisterde en gehoorzaamde; adhan is luisteren.'],
    ['حقت', 'ḥuqqat', 10, 'حق عليها أن تسمع وتطيع لأن خالقها أمرها.', 'Het is haar plicht te gehoorzamen, omdat haar Schepper het beveelt.'],
    ['الكدح', 'al-kadḥ', 11, 'سعي الإنسان في خير أو شر حتى يؤثر فيه.', 'De inspanning van de mens in goed of kwaad, tot het hem tekent.'],
    ['الحساب اليسير', 'al-ḥisāb al-yasīr', 11, 'العرض: تعرض الذنوب على المؤمن ثم يتجاوز عنها.', 'Het tonen: de zonden worden de gelovige getoond en daarna vergeven.'],
    ['الثبور', 'ath-thubūr', 12, 'الهلاك؛ يدعو: يا ويلاه يا ثبوراه.', 'Ondergang; hij roept: wee mij, o ondergang.'],
    ['يحور', 'yaḥūr', 12, 'يرجع؛ والحور الرجوع، ومنه الاستعاذة من الحور بعد الكور.', 'Terugkeren; ḥawr is terugkeer, zoals in de toevlucht tegen terugval na vervolmaking.'],
    ['الشفق', 'ash-shafaq', 15, 'الحمرة التي تكون بعد غروب الشمس.', 'De rode gloed na zonsondergang.', 'قال الواحدي: هذا قول المفسرين وأهل اللغة جميعا.', 'Volgens al-Wāḥidī de mening van alle uitleggers en taalkundigen.'],
    ['وسق', 'wasaq', 15, 'جمع وضم؛ ما يجمعه الليل حين تأوي الدواب إلى مأواها.', 'Bijeenbrengen; wat de nacht verzamelt als de dieren naar hun schuilplaats terugkeren.'],
    ['اتسق', 'ittasaq', 15, 'تم واكتمل فصار بدرا.', 'Werd volledig: de volle maan.'],
    ['ممنون', 'mamnūn', 16, 'مقطوع؛ وأجر غير ممنون: دائم لا ينقطع.', 'Afgebroken; een beloning die niet mamnūn is, blijft altijd.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أصحاب اليمين ومن أوتي كتابه وراء ظهره', 'Het boek rechts of achter de rug'],
      intro: ['كما في الآيات ٧–١٥.', 'Zoals in vers 7–15.'],
      columns: [['الكتاب', 'Het boek'], ['الحساب والمصير', 'Afrekening en bestemming'], ['حاله في الدنيا', 'In deze wereld']],
      rows: [
        { label: ['المؤمن', 'De gelovige'], cells: [['بيمينه، علامة السعادة', 'in de rechterhand, teken van geluk'], ['حساب يسير وينقلب إلى أهله مسرورا', 'lichte afrekening, keert blij terug naar zijn familie'], ['خائف من ربه', 'vreesde zijn Heer']] },
        { label: ['الكافر', 'De ongelovige'], cells: [['وراء ظهره', 'achter zijn rug'], ['يدعو ثبورا ويصلى سعيرا', 'roept om ondergang en brandt in het Vuur'], ['كان في أهله مسرورا وظن أن لن يحور', 'was blij bij zijn familie en dacht niet terug te keren']] }
      ],
      page: 11
    },
    {
      type: 'cards',
      title: ['﴿لتركبن طبقا عن طبق﴾: تقلب الأحوال', '"Toestand na toestand": wat verandert'],
      intro: ['أربعة أنواع ذكرها الكتاب.', 'Vier soorten die het boek noemt.'],
      nodes: [
        [17, 'الزمان', 'Tijd', '﴿وتلك الأيام نداولها بين الناس﴾', '"Zulke dagen laten Wij afwisselen onder de mensen"'],
        [17, 'المكان', 'Plaats', 'اليوم هنا وغدا هناك، حتى منازل الآخرة', 'vandaag hier, morgen daar, tot de woonplaatsen van het hiernamaals'],
        [17, 'الأبدان', 'Lichaam', 'من ضعف ثم قوة ثم ضعف وشيبة', 'van zwakte naar kracht en weer naar zwakte en grijsheid'],
        [17, 'القلوب', 'Harten', 'يقلبها الله كيف يشاء', 'Allah keert ze zoals Hij wil']
      ]
    }
  ],
  sections: [
    [13, 'الكتاب باليمين', 'Het boek in de rechterhand', 'الكتاب صحيفة الأعمال، وأخذه باليمين علامة السعادة، لأن اليمين تأخذ الأشياء الطيبة، وهذا مركوز في فطرة الإنسان.', 'Het boek is het register van de daden; het rechts ontvangen is een teken van geluk, omdat de rechterhand de goede dingen neemt, iets wat in de aangeboren aard van de mens ligt.'],
    [13, 'حكمة البعث والجزاء', 'De wijsheid van opwekking en vergelding', '﴿إن ربه كان به بصيرا﴾: لا يليق بحكمة الله أن يترك المفسد بلا جزاء.', '"Zijn Heer zag hem": het past niet bij Allahs wijsheid dat wie verderf zaait zonder vergelding blijft.'],
    [16, 'سجود القلب', 'De knieval van het hart', 'السجود في ﴿لا يسجدون﴾ هو الخضوع لله، سجد على الأرض أو لم يسجد، فيلين القلب ويخشع.', 'Sujūd in "zij buigen zich niet neer" is onderwerping aan Allah, of men nu op de grond buigt of niet: het hart wordt zacht en nederig.'],
    [17, 'استثناء منقطع', 'Een onderbroken uitzondering', '﴿إلا الذين آمنوا﴾ استثناء منقطع، لأن المؤمنين لم يدخلوا في المبشرين بالعذاب، وهذا الأسلوب أقوى في لفت الانتباه.', '"Behalve wie geloven" is een onderbroken uitzondering: de gelovigen hoorden niet bij wie straf aangekondigd kreeg; deze vorm trekt de aandacht sterker.']
  ],
  keycards: [
    ['bewijs', 18, 'سجود التلاوة سنة لا واجب', 'De knieval bij recitatie is sunna, geen plicht', ['قرأ عمر النحل على المنبر فسجد', 'وفي الجمعة التالية لم يسجد وقال: إن الله لم يفرض علينا السجود إلا أن نشاء', 'كان ذلك بحضرة الصحابة ولم ينكر عليه أحد'], ['ʿUmar las an-Naḥl op de minbar en boog zich neer', 'de vrijdag erna boog hij niet en zei: Allah heeft de knieval niet verplicht, tenzij wij het willen', 'dit gebeurde in het bijzijn van de metgezellen en niemand keurde het af']],
    ['onderscheid', 11, 'العرض والمناقشة', 'Tonen en ondervragen', ['العرض: تعرض الذنوب ثم تغفر، وهو الحساب اليسير', 'المناقشة: التدقيق في كل عمل، ومن نوقش الحساب هلك'], ['tonen: de zonden worden getoond en vergeven; dat is de lichte afrekening', 'ondervragen: elke daad wordt nagegaan; wie zo ondervraagd wordt, gaat ten onder']]
  ],
  hadith: [
    { text: 'سجدت بها خلف أبي القاسم ﷺ', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'قاله أبو هريرة لأبي رافع لما سجد في العشاء عند ﴿إذا السماء انشقت﴾.', nlNote: 'Abū Hurayra zei dit tegen Abū Rāfiʿ toen hij zich in het ʿishāʾ neerboog bij "Wanneer de hemel splijt".', nl: 'Ik heb me hierbij neergebogen achter Abū l-Qāsim ﷺ', pages: [10] },
    { text: 'سجدنا مع رسول الله ﷺ في ﴿إذا السماء انشقت﴾ و﴿اقرأ باسم ربك﴾', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wij bogen ons met de Boodschapper van Allah ﷺ neer bij "Wanneer de hemel splijt" en "Lees in de naam van je Heer"', pages: [10] },
    { text: 'ما أذن الله لشيء كأذنه لنبي يتغنى بالقرآن', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'ذكره الكتاب في معنى «أذنت»: استمعت.', nlNote: 'Genoemd bij de betekenis van adhinat: luisteren.', nl: 'Allah luistert naar niets zoals Hij luistert naar een profeet die de Koran met een mooie stem reciteert', pages: [10] },
    { text: 'ليس أحد يحاسب إلا هلك … ليس ذلك بالحساب، ولكن ذلك العرض، ومن نوقش الحساب هلك', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'سألت عائشة عن ﴿فسوف يحاسب حسابا يسيرا﴾.', nlNote: 'ʿĀʾisha vroeg naar "hij zal een lichte afrekening krijgen".', nl: 'Niemand wordt ter verantwoording geroepen zonder ten onder te gaan … Dat is geen afrekening, maar het tonen; en wie grondig ondervraagd wordt, gaat ten onder', pages: [11] },
    { text: 'اللهم إني أعوذ بك من الحور بعد الكور', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'ذكره الكتاب في معنى ﴿لن يحور﴾: الرجوع.', nlNote: 'Genoemd bij de betekenis van "niet terugkeren": ḥawr is terugkeer.', nl: 'O Allah, ik zoek mijn toevlucht bij U tegen terugval na vervolmaking', pages: [12] }
  ],
  persons: [
    ['abu-rafi', 'text', [10], 'صلى مع أبي هريرة العشاء فرآه يسجد في الانشقاق.', 'Bad met Abū Hurayra het ʿishāʾ en zag hem neerbuigen bij al-Inshiqāq.'],
    ['abu-hurayra', 'text', [10], 'سجد في الانشقاق وروى السجود فيها خلف النبي ﷺ.', 'Boog zich neer bij al-Inshiqāq en overleverde dat hij dat achter de Profeet ﷺ deed.'],
    ['muslim', 'takhrij', [10], 'روى حديث السجود في الانشقاق والعلق.', 'Overleverde de hadith over de knieval bij al-Inshiqāq en al-ʿAlaq.'],
    ['aisha', 'text', [11], 'سألت عن الحساب اليسير فأخبرها النبي ﷺ أنه العرض.', 'Vroeg naar de lichte afrekening; de Profeet ﷺ zei dat het het tonen is.'],
    ['labid-ibn-rabia', 'text', [12], 'استشهد الكتاب ببيته في معنى «يحور».', 'Het boek citeert zijn dichtregel bij de betekenis van "terugkeren".'],
    ['al-wahidi', 'text', [15], 'نقل أن تفسير الشفق بالحمرة قول المفسرين وأهل اللغة جميعا.', 'Meldde dat de uitleg van ash-shafaq als rode gloed de mening is van alle uitleggers en taalkundigen.'],
    ['umar-ibn-al-khattab', 'text', [18], 'سجد للتلاوة يوم جمعة وتركه في الجمعة التالية.', 'Boog zich op een vrijdag neer bij recitatie en liet het de vrijdag erna.']
  ],
  review: [
    ['تنشق السماء وتمد الأرض يوم القيامة طاعة لأمر الله.', 'Op de Opstandingsdag splijt de hemel en wordt de aarde uitgestrekt, in gehoorzaamheid aan Allah.'],
    ['الإنسان كادح إلى ربه فملاقيه.', 'De mens zwoegt naar zijn Heer en ontmoet Hem.'],
    ['الحساب اليسير هو العرض، ومن نوقش الحساب هلك.', 'De lichte afrekening is het tonen; wie ondervraagd wordt, gaat ten onder.'],
    ['يتقلب الإنسان في الزمان والمكان والبدن والقلب.', 'De mens gaat van toestand naar toestand in tijd, plaats, lichaam en hart.'],
    ['سجود التلاوة سنة مؤكدة لا واجب.', 'De knieval bij recitatie is sterk aanbevolen, geen plicht.']
  ],
  quiz: [
    { type: 'mc', page: 10, q: ['ما معنى ﴿وأذنت لربها﴾؟', 'Wat betekent "en zij luisterde (adhinat) naar haar Heer"?'], options: [['سمعت وأطاعت', 'استأذنت', 'تهدمت', 'أضاءت'], ['zij luisterde en gehoorzaamde', 'zij vroeg toestemming', 'zij stortte in', 'zij lichtte op']], answer: 0, explain: ['الأذن الاستماع، ومنه حديث «ما أذن الله لشيء…».', 'Adhan is luisteren, zoals in de hadith "Allah luistert naar niets zoals…".'] },
    { type: 'tf', page: 11, q: ['الحساب اليسير مناقشة العبد في كل عمل.', 'De lichte afrekening is het grondig ondervragen over elke daad.'], answer: 1, explain: ['هو العرض، ومن نوقش الحساب هلك.', 'Het is het tonen; wie grondig ondervraagd wordt, gaat ten onder.'] },
    { type: 'mc', page: 12, q: ['لماذا يؤتى الكافر كتابه وراء ظهره؟', 'Waarom krijgt de ongelovige zijn boek achter zijn rug?'], options: [['جزاء من جنس عمله لأنه نبذ كتاب الله وراء ظهره', 'لأنه لا يستطيع القراءة', 'لأن يمينه مقطوعة في الدنيا', 'لأن الملائكة لا تراه'], ['vergelding van dezelfde soort: hij wierp Allahs Boek achter zijn rug', 'omdat hij niet kan lezen', 'omdat zijn rechterhand in deze wereld was afgehakt', 'omdat de engelen hem niet zien']], answer: 0, explain: ['ذكر الكتاب أن الجزاء من جنس العمل.', 'Het boek noemt het een vergelding van dezelfde soort.'] },
    { type: 'mc', page: 15, q: ['ما الشفق؟', 'Wat is ash-shafaq?'], options: [['الحمرة بعد غروب الشمس', 'ضوء الفجر', 'ظلمة الليل', 'نور القمر'], ['de rode gloed na zonsondergang', 'het licht van de dageraad', 'de duisternis van de nacht', 'het maanlicht']], answer: 0, explain: ['قال الواحدي: هذا قول المفسرين وأهل اللغة جميعا.', 'Volgens al-Wāḥidī de mening van alle uitleggers en taalkundigen.'] },
    { type: 'mc', page: 17, q: ['أي هذه ليس من الأحوال التي ذكرها الكتاب في ﴿طبقا عن طبق﴾؟', 'Welke hoort niet bij de toestanden die het boek noemt bij "toestand na toestand"?'], options: [['اللون', 'الزمان', 'المكان', 'القلوب'], ['huidskleur', 'tijd', 'plaats', 'harten']], answer: 0, explain: ['ذكر الكتاب الزمان والمكان والأبدان والقلوب.', 'Het boek noemt tijd, plaats, lichaam en harten.'] },
    { type: 'tf', page: 18, q: ['الراجح عند الكتاب أن سجود التلاوة واجب.', 'Volgens het boek is de knieval bij recitatie verplicht.'], answer: 1, explain: ['الصحيح أنه سنة مؤكدة بدليل فعل عمر.', 'Het juiste is dat hij sterk aanbevolen is, op grond van wat ʿUmar deed.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ١٤ و١٨.', 'Oefeningen van het boek op p. 14 en 18. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
