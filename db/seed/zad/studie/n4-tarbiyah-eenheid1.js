// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 1: تمهيد: أهمية القلب وخطر أمراضه (lessen 1–2, boek p. 10–14).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '10–14',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['أهمية القلب وخطر أمراضه', 'Het belang van het hart en het gevaar van zijn ziekten'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'القلب سيد البدن وأمير أعضائه، وهو محل التفكير والنية ونظر الرب، وسلامته سبب السعادة في الدنيا والآخرة. ولأمراضه أضرار عامة: فساد الأعمال، وانقلاب الموازين، والإعراض عن الشرع، والنفاق؛ ولذا يحتاج القلب إلى تطهير وحماية دائمة.',
    'Het hart is de meester van het lichaam en vorst van de ledematen: de plaats van denken, intentie en van Allahs blik, en zijn gezondheid brengt geluk in deze wereld en het hiernamaals. Zijn ziekten hebben algemene schade: bedorven daden, omgekeerde maatstaven, afkeer van de sharīʿa en hypocrisie; daarom heeft het hart voortdurend reiniging en bescherming nodig.'
  ],
  map: {
    title: ['القلب في خريطة واحدة', 'Het hart in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['أهمية القلب', 'Het belang van het hart'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['مكانة القلب', 'De plaats van het hart'], sub: ['ص ١٠–١١', 'p. 10–11'], page: 10, children: [['سيد البدن', 'meester van het lichaam'], ['محل التفكير والنية', 'plaats van denken en intentie'], ['محل نظر الرب', 'plaats van Allahs blik']] },
      { label: ['أضرار أمراضه', 'Schade van zijn ziekten'], sub: ['ص ١١–١٢', 'p. 11–12'], page: 11, children: [['فساد الأعمال', 'bedorven daden'], ['انقلاب الموازين', 'omgekeerde maatstaven'], ['الإعراض عن الشرع', 'afkeer van de sharīʿa'], ['النفاق', 'hypocrisie']] },
      { label: ['التطهير والحماية', 'Reiniging en bescherming'], sub: ['ص ١٣', 'p. 13'], page: 13, children: [['الران', 'ar-rān'], ['أدعية النبي ﷺ لقلبه', 'de smeekbeden van de Profeet ﷺ voor zijn hart']] }
    ]
  },
  points: [
    [10, 'قال كعب الأحبار: القلب ملك، فإذا طاب الملك طابت جنوده، وإذا خبث الملك خبثت جنوده.', 'Kaʿb al-Aḥbār: het hart is een koning; is de koning goed, dan zijn zijn troepen goed, is hij slecht, dan ook zijn troepen.'],
    [10, 'قال ابن رجب: صلاح حركات العبد بجوارحه واجتنابه المحرمات واتقاؤه الشبهات بحسب صلاح حركة قلبه.', 'Ibn Rajab: het goede handelen van de ledematen, het mijden van verboden en twijfelachtige zaken hangt af van de goedheid van het hart.'],
    [11, 'قال سعيد بن جبير في قوله تعالى: ﴿وثيابك فطهر﴾: وقلبك ونيتك فطهر.', 'Saʿīd ibn Jubayr over "en reinig je kleding" (74:4): reinig je hart en je intentie.'],
    [11, 'قال ابن القيم: لا تتم سلامة القلب حتى يسلم من خمسة: شرك يناقض التوحيد، وبدعة تخالف السنة، وشهوة تخالف الأمر، وغفلة تناقض الذكر، وهوى يناقض التجريد والإخلاص.', 'Ibn al-Qayyim: het hart is pas gezond als het vrij is van vijf: shirk tegen de tawḥīd, bidʿa tegen de sunna, begeerte tegen het gebod, onachtzaamheid tegen het gedenken, en lust tegen oprechtheid.'],
    [12, 'صاحب القلب المريض يأبى أحكام الشرع، ولا يقبل منها إلا ما وافق هواه.', 'Wie een ziek hart heeft, weigert de regels van de sharīʿa en aanvaardt alleen wat bij zijn lust past.'],
    [12, 'كثر في القرآن الجمع بين مرض القلب والنفاق.', 'De Koran noemt hartziekte en hypocrisie vaak samen.'],
    [13, 'قال الحسن البصري في الران: هو الذنب على الذنب حتى يعمى القلب فيموت.', 'Al-Ḥasan al-Baṣrī over ar-rān: zonde op zonde, tot het hart blind wordt en sterft.'],
    [13, 'قال ابن عباس: إن للحسنة لنورا في القلب وضياء في الوجه، وإن للسيئة لظلمة في القلب وسوادا في الوجه.', 'Ibn ʿAbbās: een goede daad geeft licht in het hart en glans op het gezicht; een slechte daad geeft duisternis in het hart en zwartheid op het gezicht.']
  ],
  terms: [
    ['الربدة', 'ar-rubda', 12, 'لون بين السواد والغبرة.', 'Een kleur tussen zwart en grauw.'],
    ['مجخيا', 'mujakhkhiyan', 12, 'منكوسا.', 'Omgekeerd.'],
    ['الران', 'ar-rān', 13, 'تراكم الذنوب على القلب حتى يعمى.', 'Opeenhoping van zonden op het hart tot het blind wordt.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['من أدعيته ﷺ لقلبه', 'Zijn smeekbeden voor zijn hart'],
      intro: ['كما في الإطار ص ١٣.', 'Zoals in het kader op p. 13.'],
      nodes: [
        [13, 'نور القلب', 'Licht in het hart', 'اللهم اجعل في قلبي نورا', 'O Allah, plaats licht in mijn hart'],
        [13, 'سلامة القلب', 'Een gezond hart', 'وأسألك قلبا سليما', 'en ik vraag U een gezond hart'],
        [13, 'خشوع القلب', 'Een ootmoedig hart', 'أعوذ بك من قلب لا يخشع', 'ik zoek toevlucht bij U tegen een hart dat niet ootmoedig is'],
        [13, 'ثبات القلب', 'Standvastigheid', 'يا مقلب القلوب ثبت قلبي على دينك', 'o Omkeerder van de harten, maak mijn hart standvastig in Uw religie']
      ]
    }
  ],
  sections: [
    [10, 'القلب محل التفكير', 'Het hart als plaats van denken', 'القلب محرك العمل وموجهه، قال تعالى: ﴿لهم قلوب لا يفقهون بها﴾ [الأعراف: 179].', 'Het hart drijft en richt het handelen; Allah zegt: "zij hebben harten waarmee zij niet begrijpen" (7:179).'],
    [12, 'الإعراض عن الشرع', 'Afkeer van de sharīʿa', 'قال تعالى: ﴿وإذا دعوا إلى الله ورسوله ليحكم بينهم إذا فريق منهم معرضون﴾ إلى قوله: ﴿أفي قلوبهم مرض﴾ [النور: 48-50].', 'Allah beschrijft wie zich afwendt als hij tot het oordeel van Allah en Zijn Boodschapper geroepen wordt, en vraagt: "is er een ziekte in hun harten?" (24:48–50).']
  ],
  keycards: [
    ['opsomming', 11, 'أضرار أمراض القلوب', 'Schade van hartziekten', ['فساد الأعمال', 'انقلاب الموازين', 'الإعراض عن الشرع وأحكامه', 'النفاق'], ['bedorven daden', 'omgekeerde maatstaven', 'afkeer van de sharīʿa', 'hypocrisie']],
    ['voorwaarde', 11, 'ما يسلم منه القلب', 'Waarvan het hart vrij moet zijn', ['الشرك', 'البدعة', 'الشهوة المخالفة للأمر', 'الغفلة', 'الهوى'], ['shirk', 'bidʿa', 'begeerte tegen het gebod', 'onachtzaamheid', 'lust']]
  ],
  hadith: [
    { text: 'ألا وإن في الجسد مضغة إذا صلحت صلح الجسد كله، وإذا فسدت فسد الجسد كله، ألا وهي القلب', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'In het lichaam is een stukje vlees: als het goed is, is het hele lichaam goed, en als het bedorven is, is het hele lichaam bedorven; dat is het hart', pages: [10, 11] },
    { text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Daden worden alleen naar de intenties beoordeeld, en ieder krijgt alleen wat hij bedoelde', pages: [11] },
    { text: 'إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'وأشار بأصابعه إلى صدره.', nlNote: 'En hij wees met zijn vingers naar zijn borst.', nl: 'Allah kijkt niet naar jullie uiterlijk en bezit, maar naar jullie harten en daden', pages: [11] },
    { text: 'تعرض الفتن على القلوب كالحصير عودا عودا، فأي قلب أشربها نكت فيه نكتة سوداء، وأي قلب أنكرها نكت فيه نكتة بيضاء، حتى تصير على قلبين: على أبيض مثل الصفا، فلا تضره فتنة ما دامت السماوات والأرض، والآخر أسود مربادا كالكوز مجخيا، لا يعرف معروفا، ولا ينكر منكرا إلا ما أشرب من هواه', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Beproevingen worden aan de harten voorgelegd zoals een mat, draad na draad. Elk hart dat ze indrinkt, krijgt een zwarte stip, en elk hart dat ze afwijst, een witte stip, tot er twee harten zijn: een wit als een gladde rots, dat geen beproeving schaadt zolang hemelen en aarde bestaan, en een zwart-grauw als een omgekeerde kruik, dat het goede niet kent en het slechte niet afwijst, behalve wat het van zijn lust indronk', pages: [12] },
    { text: 'إن المؤمن إذا أذنب كانت نكتة سوداء في قلبه، فإن تاب ونزع واستغفر صقل قلبه، فإن زاد زادت فذلك الران الذي ذكره الله في كتابه', takhrij: 'رواه الترمذي وابن ماجه، وحسنه الألباني', takhrijNl: 'at-Tirmidhī en Ibn Māja; ḥasan volgens al-Albānī', nl: 'Als de gelovige zondigt, komt er een zwarte stip in zijn hart; toont hij berouw, houdt hij op en vraagt hij vergeving, dan wordt zijn hart gepolijst; zondigt hij meer, dan groeit zij; dat is de rān die Allah in Zijn Boek noemt', pages: [13] },
    { text: 'اللهم اجعل في قلبي نورا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'O Allah, plaats licht in mijn hart', pages: [13] },
    { text: 'وأسألك قلبا سليما', takhrij: 'رواه أحمد والنسائي، وهو حسن', takhrijNl: 'Aḥmad en an-Nasāʾī; ḥasan', nl: 'En ik vraag U een gezond hart', pages: [11, 13] },
    { text: 'اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'O Allah, ik zoek toevlucht bij U tegen kennis die niet baat en tegen een hart dat niet ootmoedig is', pages: [13] },
    { text: 'يا مقلب القلوب، ثبت قلبي على دينك', takhrij: 'رواه أحمد والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', nl: 'O Omkeerder van de harten, maak mijn hart standvastig in Uw religie', pages: [13] }
  ],
  persons: [
    ['kab-al-ahbar', 'text', [10], 'قال: القلب ملك.', 'Zei: het hart is een koning.'],
    ['ibn-rajab', 'text', [10], 'بين أن صلاح الجوارح بصلاح القلب.', 'Legde uit dat de ledematen goed zijn als het hart goed is.'],
    ['said-ibn-jubayr', 'text', [11], 'فسر ﴿وثيابك فطهر﴾ بطهارة القلب والنية.', 'Verklaarde "reinig je kleding" als reiniging van hart en intentie.'],
    ['ibn-al-qayyim', 'text', [11], 'ذكر خمسة أشياء يسلم منها القلب.', 'Noemde vijf dingen waarvan het hart vrij moet zijn.'],
    ['al-hasan-al-basri', 'text', [13], 'فسر الران.', 'Verklaarde ar-rān.'],
    ['ibn-abbas', 'text', [13], 'ذكر أثر الحسنة والسيئة في القلب.', 'Beschreef het effect van goede en slechte daden op het hart.'],
    ['al-albani', 'takhrij', [13], 'حسن حديث الران وصحح دعاء الثبات.', 'Noemde de hadith van ar-rān ḥasan en de smeekbede om standvastigheid ṣaḥīḥ.']
  ],
  review: [
    ['القلب سيد البدن، بصلاحه يصلح الجسد كله.', 'Het hart is meester van het lichaam; is het goed, dan is het hele lichaam goed.'],
    ['القلب محل التفكير والنية ونظر الرب.', 'Het hart is de plaats van denken, intentie en Allahs blik.'],
    ['من أضرار أمراضه فساد الأعمال وانقلاب الموازين والنفاق.', 'Zijn ziekten bederven daden, keren maatstaven om en brengen hypocrisie.'],
    ['الذنوب تتراكم على القلب فتكون رانا، والتوبة تصقله.', 'Zonden hopen zich op tot rān; berouw polijst het hart.']
  ],
  quiz: [
    { type: 'mc', page: 11, q: ['إلى أي شيء ينظر الله تعالى؟', 'Waarnaar kijkt Allah?'], options: [['القلوب والأعمال', 'الصور والأموال', 'الأنساب', 'الألوان'], ['harten en daden', 'uiterlijk en bezit', 'afkomst', 'huidskleur']], answer: 0, explain: ['كما في حديث مسلم.', 'Zoals in de hadith bij Muslim.'] },
    { type: 'tf', page: 13, q: ['الران هو الذنب على الذنب حتى يعمى القلب.', 'Ar-rān is zonde op zonde tot het hart blind wordt.'], answer: 0, explain: ['كما قال الحسن البصري.', 'Zoals al-Ḥasan al-Baṣrī zei.'] },
    { type: 'mc', page: 12, q: ['ما صفة القلب الأسود المرباد؟', 'Wat kenmerkt het zwart-grauwe hart?'], options: [['لا يعرف معروفا ولا ينكر منكرا', 'لا تضره فتنة', 'يحب الذكر', 'يكثر الاستغفار'], ['het kent het goede niet en wijst het slechte niet af', 'geen beproeving schaadt het', 'het houdt van gedenken', 'het vraagt veel vergeving']], answer: 0, explain: ['إلا ما أشرب من هواه.', 'Behalve wat het van zijn lust indronk.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ١٤.', 'Oefening van het boek op p. 14. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
