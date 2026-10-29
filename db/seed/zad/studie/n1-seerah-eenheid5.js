// Hoofdstukkaart bij السيرة النبوية (١), eenheid 5: النبي ﷺ في المدينة (lessen 13–24, boek p. 56–96).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 61, 67, 68, 71, 74, 78, 83, 87 en 88 zijn in het boek
// "alleen ter kennisname". Berichten die het boek zonder bron noemt staan niet in het hadith-tabblad.
// Weggelaten omdat ze nog gecontroleerd moeten worden: de aantallen op de kaart van Muʾta (p. 79),
// de formulering over de vergiftigde schaap (p. 93) en de toeschrijving van de ṣalāt ibrāhīmiyya aan
// Abū Hurayra (p. 96); ook het verhaal bij het afbreken van Manāt (p. 83, alleen ter kennisname,
// zonder bron). De lespagina's geven deze delen zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (١)، سلسلة زاد العلمية',
  pages: '56–96',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Seerah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'العباس بن عبد المطلب', text: 'ثم أخذ رسول الله ﷺ حصيات فرمى بها وجوه القوم ثم قال: «انهزموا ورب محمد». قال: فما هو إلا أن رماهم فما زلت أرى حدهم كليلًا وأمرهم مدبرًا', takhrij: 'في صحيح مسلم', note: 'في غزوة حنين.', pages: [85], nl: 'Toen nam de Boodschapper van Allah ﷺ steentjes, wierp ze in de gezichten van de vijand en zei: "Verslagen, bij de Heer van Muḥammad!" Hij zei: zodra hij ze gooide, zag ik hun kracht verslappen en hen terugwijken', nlNote: 'Bij de slag bij Ḥunayn.' },
  { narrator: 'أنس بن مالك', text: 'اعتمر رسول الله ﷺ أربع عمر كلهن في ذي القعدة إلا التي كانت مع حجته: عمرة من الحديبية، وعمرة من العام المقبل في ذي القعدة، وعمرة من الجعرانة حيث قسم غنائم حنين في ذي القعدة، وعمرة مع حجته', takhrij: 'في الصحيحين', note: 'عمراته ﷺ.', pages: [92], nl: 'De Boodschapper van Allah ﷺ deed vier ʿumra’s, alle in Dhū l-Qaʿda behalve die met zijn bedevaart: een ʿumra vanuit al-Ḥudaybiya, een ʿumra het jaar daarna in Dhū l-Qaʿda, een ʿumra vanuit al-Jiʿrāna waar hij de buit van Ḥunayn verdeelde, in Dhū l-Qaʿda, en een ʿumra met zijn bedevaart', nlNote: 'Zijn ʿumra’s ﷺ.' },
  { narrator: 'عبد الله بن عمرو', text: 'من صلى علي صلاة صلى الله عليه بها عشرًا', takhrij: 'أخرجه مسلم', note: 'في فضل الصلاة على النبي ﷺ، مع قوله تعالى ﴿إن الله وملائكته يصلون على النبي﴾ [الأحزاب: ٥٦].', pages: [96], nl: 'Wie één keer zegen over mij vraagt, over hem zendt Allah daarvoor tien keer Zijn zegen', nlNote: 'Over de deugd van zegen vragen over de Profeet ﷺ, met "Allah en Zijn engelen zegenen de Profeet" (al-Aḥzāb 33:56).' }
]

const TAKHRIJ_NL = { 'في صحيح مسلم': 'in Ṣaḥīḥ Muslim', 'في الصحيحين': 'in de twee Ṣaḥīḥ’s', 'أخرجه مسلم': 'Muslim' }
const NARRATOR_NL = { 'العباس بن عبد المطلب': 'al-ʿAbbās ibn ʿAbd al-Muṭṭalib', 'أنس بن مالك': 'Anas ibn Mālik', 'عبد الله بن عمرو': 'ʿAbdallāh ibn ʿAmr' }

const PERSONS = [
  ['hamza-ibn-abd-al-muttalib', 'text', [61, 69, 71], 'قاد أول سرية، وبارز يوم بدر، واستشهد في أحد.', 'Leidde de eerste expeditie, duelleerde bij Badr en sneuvelde bij Uḥud.'],
  ['ubayda-ibn-al-harith', 'text', [61, 69], 'قاد سرية رابغ، وبارز عتبة يوم بدر.', 'Leidde de expeditie naar Rābigh en duelleerde bij Badr met ʿUtba.'],
  ['sad-ibn-abi-waqqas', 'text', [61], 'قاد سرية الخرار.', 'Leidde de expeditie naar al-Kharrār.'],
  ['abdallah-ibn-jahsh', 'text', [62, 63], 'قاد سرية نخلة، وبعدها فرض القتال.', 'Leidde de expeditie naar Nakhla, waarna de strijd verplicht werd.'],
  ['abu-sufyan-ibn-harb', 'text', [67, 73, 82], 'قاد قافلة قريش قبل بدر وجيش الأحزاب، ثم أسلم قبل فتح مكة.', 'Leidde de karavaan van Quraysh vóór Badr en het leger van de bondgenoten; werd vóór de verovering van Mekka moslim.'],
  ['ibn-umm-maktum', 'text', [68], 'استخلفه على المدينة يوم بدر.', 'Bleef bij Badr als plaatsvervanger in Medina.'],
  ['al-miqdad-ibn-al-aswad', 'text', [68], 'قال يوم بدر: امض يا رسول الله لما أمرك ربك، ونحن معك.', 'Zei bij Badr: ga voort, Boodschapper van Allah, met wat je Heer je opdroeg; wij zijn met je.'],
  ['abu-bakr-as-siddiq', 'text', [69, 74, 87, 90, 93, 94], 'أشار في فداء أسرى بدر، وحج بالناس سنة تسع، وصلى بالناس في مرض النبي ﷺ، وثبت الناس عند وفاته.', 'Adviseerde over het losgeld voor de gevangenen van Badr, leidde de bedevaart in het jaar 9, leidde het gebed tijdens de ziekte van de Profeet ﷺ en gaf de mensen houvast bij zijn overlijden.'],
  ['ali-ibn-abi-talib', 'text', [69, 73, 90], 'بارز يوم بدر، وتصدى للمتسللين يوم الخندق، وبلغ الناس في حج سنة تسع.', 'Duelleerde bij Badr, hield bij de Gracht de indringers tegen en bracht in het jaar 9 de boodschap aan de pelgrims.'],
  ['khalid-ibn-al-walid', 'text', [70, 79], 'التف على المسلمين يوم أحد قبل إسلامه، وأنقذ جيش مؤتة بعده.', 'Viel vóór zijn bekering bij Uḥud de moslims in de rug aan; redde als moslim het leger bij Muʾta.'],
  ['wahshi', 'text', [71], 'قتل حمزة يوم أحد.', 'Doodde Ḥamza bij Uḥud.'],
  ['jubayr-ibn-mutim', 'text', [71], 'وعد غلامه وحشيًا أن يعتقه إن قتل حمزة.', 'Beloofde zijn slaaf Waḥshī de vrijheid als hij Ḥamza doodde.'],
  ['ikrima-ibn-abi-jahl', 'text', [71, 73], 'من المحرضين على أحد، وتسلل يوم الخندق ثم هرب.', 'Een van de aanstichters van Uḥud; drong bij de Gracht binnen en vluchtte.'],
  ['salman-al-farisi', 'text', [73], 'أشار بحفر الخندق.', 'Stelde voor de gracht te graven.'],
  ['umm-salama', 'text', [74], 'خرجت معه ﷺ إلى الحديبية.', 'Ging met hem ﷺ mee naar al-Ḥudaybiya.'],
  ['busr-ibn-sufyan', 'text', [74], 'بعثه ليأتيه بأخبار قريش قبل الحديبية.', 'Werd vóór al-Ḥudaybiya gestuurd om nieuws over Quraysh te halen.'],
  ['uthman-ibn-affan', 'text', [74, 75, 87], 'رسوله إلى قريش في الحديبية، وتبرع بسخاء في تجهيز جيش تبوك.', 'Zijn gezant naar Quraysh bij al-Ḥudaybiya; gaf royaal voor het leger van Tabūk.'],
  ['urwa-ibn-masud', 'text', [75], 'أرسلته قريش للتفاوض في الحديبية.', 'Door Quraysh gestuurd om te onderhandelen bij al-Ḥudaybiya.'],
  ['suhayl-ibn-amr', 'text', [74, 75], 'عقد الصلح مع النبي ﷺ عن قريش.', 'Sloot namens Quraysh het verdrag met de Profeet ﷺ.'],
  ['umar-ibn-al-khattab', 'text', [76, 94], 'استشكل شروط الحديبية، وجلس على الأرض لا تحمله قدماه عند الوفاة.', 'Had moeite met de voorwaarden van al-Ḥudaybiya; bij het overlijden zeeg hij neer.'],
  ['zayd-ibn-haritha', 'text', [78, 79], 'أمير جيش مؤتة، استشهد فيها.', 'Aanvoerder van het leger bij Muʾta, waar hij sneuvelde.'],
  ['jafar-ibn-abi-talib', 'text', [78, 79], 'الأمير الثاني في مؤتة، سمي ذا الجناحين.', 'De tweede aanvoerder bij Muʾta, "die met de twee vleugels" genoemd.'],
  ['abdallah-ibn-rawaha', 'text', [78, 79], 'الأمير الثالث في مؤتة، استشهد فيها.', 'De derde aanvoerder bij Muʾta, waar hij sneuvelde.'],
  ['al-harith-ibn-umayr', 'text', [78], 'رسوله إلى أمير بصرى، وقتله سبب غزوة مؤتة.', 'Zijn gezant naar de vorst van Buṣrā; zijn dood was de aanleiding voor Muʾta.'],
  ['amr-ibn-salim-al-khuzai', 'text', [82], 'جاء يخبره بعدوان بني بكر على خزاعة.', 'Kwam hem melden dat de Banū Bakr Khuzāʿa hadden aangevallen.'],
  ['al-abbas-ibn-abd-al-muttalib', 'text', [82, 85, 94], 'شفع لأبي سفيان يوم الفتح، ونادى الناس يوم حنين.', 'Sprak bij de verovering voor Abū Sufyān en riep bij Ḥunayn de mensen terug.'],
  ['bilal-ibn-rabah', 'text', [82], 'أذن فوق الكعبة يوم الفتح.', 'Riep bij de verovering de oproep tot het gebed boven op de Kaʿba.'],
  ['amr-ibn-al-as', 'text', [83], 'هدم صنم سواع.', 'Brak het afgodsbeeld Suwāʿ af.'],
  ['abd-ar-rahman-ibn-awf', 'text', [87], 'تبرع بسخاء في تجهيز جيش تبوك.', 'Gaf royaal voor het leger van Tabūk.'],
  ['aisha', 'text', [91, 93, 94], 'أعمرها من التنعيم، ومرض النبي ﷺ في بيتها وتوفي بين سحرها ونحرها.', 'Deed vanuit at-Tanʿīm een ʿumra; de Profeet ﷺ was ziek in haar huis en stierf tegen haar borst.'],
  ['anas-ibn-malik', 'text', [92], 'روى عمراته ﷺ الأربع.', 'Overleverde zijn vier ʿumra’s ﷺ.'],
  ['usama-ibn-zayd', 'text', [92], 'أمير الجيش الذي جهزه النبي ﷺ إلى الشام قبل وفاته.', 'Aanvoerder van het leger dat de Profeet ﷺ vóór zijn dood naar Syrië uitrustte.'],
  ['maymuna-bint-al-harith', 'text', [93], 'بدأ مرض النبي ﷺ في بيتها.', 'In haar huis begon de ziekte van de Profeet ﷺ.'],
  ['fatima', 'text', [94, 95], 'أخبرها أنها أول أهله لحوقًا به، وبكته بعد وفاته.', 'Hij vertelde haar dat zij als eerste van zijn familie hem zou volgen; zij beweende hem.'],
  ['abdallah-ibn-amr', 'text', [96], 'روى فضل الصلاة على النبي ﷺ.', 'Overleverde de deugd van zegen vragen over de Profeet ﷺ.'],
  ['muslim', 'takhrij', [85, 92, 96], 'أخرج حديث حنين و«من صلى علي صلاة».', 'Nam de hadith over Ḥunayn en "wie één keer zegen over mij vraagt" op.'],
  ['al-bukhari', 'takhrij', [92], 'أخرج حديث العمرات.', 'Nam de hadith over de ʿumra’s op.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'النبي ﷺ في المدينة',
  subtitle: 'اثنا عشر درسًا مجموعة في صفحة واحدة',
  summary: 'أعمال العهد المدني الأولى: المسجد والمؤاخاة والإذن بالقتال، ثم السرايا قبل بدر، والغزوات الكبرى من بدر إلى تبوك وصلح الحديبية وفتح مكة، ثم عام الوفود وحجة الوداع وعمراته ﷺ، وأخيرًا مرضه ووفاته وفضل الصلاة عليه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'النبي ﷺ في المدينة', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'العهد المدني', sub: 'الدرس ١٣', page: 59, children: ['المسجد', 'المؤاخاة', 'الإذن بالقتال'] },
      { label: 'قبل بدر', sub: 'الدرس ١٤', page: 61, children: ['السرايا', 'أهدافها', 'فرض القتال'] },
      { label: 'بدر وأحد والخندق', sub: 'الدروس ١٥–١٧', page: 67, children: ['النصر', 'مخالفة الرماة', 'الخندق والريح'] },
      { label: 'الحديبية وما بعدها', sub: 'الدرسان ١٨–١٩', page: 74, children: ['بيعة الرضوان', 'الصلح', 'خيبر', 'مؤتة'] },
      { label: 'الفتح وحنين وتبوك', sub: 'الدروس ٢٠–٢٢', page: 81, children: ['فتح مكة', 'الاغترار بالكثرة', 'العسرة'] },
      { label: 'الوفود والوداع والوفاة', sub: 'الدرسان ٢٣–٢٤', page: 90, children: ['عام الوفود', 'حجة الوداع', 'وفاته ﷺ'] }
    ]
  },
  points: [
    { text: 'أول خطوة خطاها في المدينة بناء المسجد في المكان الذي بركت فيه ناقته.', page: 59 },
    { text: 'آخى بين المهاجرين والأنصار، ثم رد الله التوارث إلى ذوي الأرحام.', page: 59 },
    { text: 'انتصر المسلمون في بدر وهم ثلاثمائة وثلاثة عشر على نحو ألف.', page: 69 },
    { text: 'سبب ما أصاب المسلمين في أحد نزول الرماة من الجبل مخالفة لأمره ﷺ.', page: 71 },
    { text: 'صلح الحديبية بدا للبعض إجحافًا، فلما علموا أنه أمر الله سلموا.', page: 76 },
    { text: 'دخل مكة فاتحًا في رمضان السنة الثامنة، وحطم الأصنام وأذن بلال فوق الكعبة.', page: 82 },
    { text: 'حنين درس: النصر ليس بكثرة العدد والعدة.', page: 85 },
    { text: 'توفي ﷺ يوم الاثنين من ربيع الأول السنة الحادية عشرة، وانتهت حياته ولم تنته رسالته.', page: 94 }
  ],
  terms: [
    { term: 'المؤاخاة', translit: 'al-muʾākhāh', meaning: 'عقد أخوة بين المهاجرين والأنصار على المواساة والتوارث.', explanation: 'ثم نسخ التوارث بقوله ﴿وأولو الأرحام بعضهم أولى ببعض﴾.', notes: ['[الأنفال: ٧٥]'], page: 59 },
    { term: 'السرية', translit: 'as-sariyya', meaning: 'بعث لم يخرج فيه النبي ﷺ بنفسه.', explanation: 'أما الغزوة فما قادها بنفسه.', notes: [], page: 61 },
    { term: 'العريش', translit: 'al-ʿarīsh', meaning: 'مظلة بناها المسلمون للنبي ﷺ على ربوة يوم بدر.', explanation: 'أخذ يلهج فيها بالدعاء.', notes: [], page: 69 },
    { term: 'القليب', translit: 'al-qalīb', meaning: 'البئر التي رميت فيها جثث المشركين يوم بدر.', explanation: '', notes: [], page: 69 },
    { term: 'الأحزاب', translit: 'al-aḥzāb', meaning: 'القبائل التي تحزبت على المسلمين في غزوة الخندق.', explanation: 'قريش وغطفان وغيرهما بتحريض يهود بني النضير.', notes: [], page: 72 },
    { term: 'بيعة الرضوان', translit: 'bayʿat ar-riḍwān', meaning: 'بيعة الصحابة تحت الشجرة في الحديبية على ألا يفروا.', explanation: 'لما شاع أن عثمان قد قتل.', notes: ['[الفتح: ١٨]'], page: 75 },
    { term: 'عمرة القضاء', translit: 'ʿumrat al-qaḍāʾ', meaning: 'عمرته في ذي القعدة سنة سبع حسب اتفاق الحديبية.', explanation: 'وتسمى عمرة القصاص، لأنهم صدوه في ذي القعدة سنة ست.', notes: [], page: 78 },
    { term: 'ذو الجناحين', translit: 'dhū l-janāḥayn', meaning: 'لقب جعفر بن أبي طالب.', explanation: 'قطعت يداه يوم مؤتة فأبدله الله بهما جناحين يطير بهما في الجنة.', notes: [], page: 79 },
    { term: 'غزوة العسرة', translit: 'ghazwat al-ʿusra', meaning: 'غزوة تبوك.', explanation: 'سميت بذلك لما عانوا من عسرة الماء والزاد.', notes: [], page: 88 },
    { term: 'عام الوفود', translit: 'ʿām al-wufūd', meaning: 'العام التاسع، حين توافدت القبائل لإعلان إسلامها.', explanation: 'ذكر كتاب السيرة أنها بلغت ستين وفدًا.', notes: [], page: 90 },
    { term: 'حجة الوداع', translit: 'ḥajjat al-wadāʿ', meaning: 'حجه ﷺ في العام العاشر.', explanation: 'سميت بذلك لأنه لم يحج بعدها.', notes: [], page: 91 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'غزوات النبي ﷺ الكبرى',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'بدر الكبرى', sub: '٢هـ', page: 67 },
        { label: 'أحد', sub: '٣هـ', page: 70 },
        { label: 'الخندق (الأحزاب)', sub: '٥هـ', page: 72 },
        { label: 'صلح الحديبية وبيعة الرضوان', sub: '٦هـ', page: 74 },
        { label: 'خيبر', sub: '٧هـ', page: 76 },
        { label: 'مؤتة', sub: '٨هـ', page: 78 },
        { label: 'فتح مكة', sub: 'رمضان ٨هـ', page: 81 },
        { label: 'حنين', sub: 'شوال ٨هـ', page: 84 },
        { label: 'تبوك (العسرة)', sub: 'رجب ٩هـ', page: 87 }
      ]
    },
    {
      type: 'steps',
      title: 'أول أعمال العهد المدني',
      intro: 'كما في مخطط الكتاب.',
      nodes: [
        { label: 'بناء المسجد النبوي', sub: 'وأسهم في بنائه بنفسه', page: 59 },
        { label: 'المؤاخاة بين المسلمين', sub: 'بين المهاجرين والأنصار', page: 59 },
        { label: 'الإذن بالقتال', sub: '[الحج: ٣٩]', page: 60 }
      ]
    },
    {
      type: 'cards',
      title: 'أهداف السرايا والغزوات قبل بدر',
      intro: 'كما عدها الكتاب.',
      nodes: [
        { label: 'الاستكشاف', sub: 'معرفة الطرق حول المدينة وإلى مكة', page: 63 },
        { label: 'المعاهدات', sub: 'مع القبائل حول هذه الطرق', page: 63 },
        { label: 'إظهار القوة', sub: 'لمشركي يثرب ويهودها والأعراب', page: 63 },
        { label: 'إشعار قريش بالخطر', sub: 'على تجارتها ومصالحها', page: 63 }
      ]
    },
    {
      type: 'compare',
      title: 'بدر وأحد والخندق',
      intro: 'كما في الكتاب.',
      columns: ['بدر', 'أحد', 'الخندق'],
      rows: [
        { label: 'السنة', cells: ['رمضان ٢هـ', '٣هـ', 'شوال ٥هـ'] },
        { label: 'المسلمون', cells: ['٣١٣', '١٠٠٠ ثم ٧٠٠', '٣٠٠٠'] },
        { label: 'المشركون', cells: ['نحو ٩٥٠', '٣٠٠٠', '١٠٠٠٠'] },
        { label: 'العبرة', cells: ['نصر الله وإمداد الملائكة', 'عاقبة مخالفة أمر الرسول ﷺ', 'معركة أعصاب وامتحان قلوب'] }
      ],
      page: 69
    },
    {
      type: 'cards',
      title: 'قواعد صلح الحديبية',
      intro: 'كما في الدرس الثامن عشر.',
      nodes: [
        { label: 'هدنة عشر سنوات', page: 75 },
        { label: 'يرجع المسلمون هذا العام ويعتمرون العام القادم', page: 75 },
        { label: 'يرد من جاءه من قريش مسلمًا، ولا ترد قريش من جاءها', page: 75 },
        { label: 'من شاء دخل في عهد محمد ومن شاء في عهد قريش', page: 75 }
      ]
    },
    {
      type: 'cards',
      title: 'عمراته ﷺ',
      intro: 'أربع عمرات، كلهن في ذي القعدة إلا التي مع حجته.',
      nodes: [
        { label: 'الحديبية', sub: 'سنة ست، صده المشركون', page: 92 },
        { label: 'القضية', sub: 'العام المقبل، أقام بمكة ثلاثًا', page: 92 },
        { label: 'الجعرانة', sub: 'بعد حنين', page: 92 },
        { label: 'مع حجته', sub: 'قارنًا', page: 92 }
      ]
    }
  ],
  sections: [
    { title: 'بناء المسجد', text: 'اختار له المكان الذي بركت فيه ناقته، فاشتراه من غلامين يتيمين، وأسهم في بنائه بنفسه ينقل اللبن والحجارة.', more: '', page: 59 },
    { title: 'الإذن بالقتال', text: 'لم تنقطع قريش عن تهديد المسلمين بعد الهجرة، فنزل الإذن بالقتال؛ ثم بعد سرية عبد الله بن جحش فرض القتال بقوله: ﴿وقاتلوا في سبيل الله الذين يقاتلونكم ولا تعتدوا﴾.', more: '[الحج: ٣٩–٤١]، [البقرة: ١٩٠]', page: 63 },
    { title: 'غزوة بدر (للاطلاع فقط)', text: 'خرج لقافلة قريش، فنجت القافلة وأصر أبو جهل على القتال؛ فاستشار أصحابه فقال المقداد: امض لما أمرك ربك ونحن معك. ودعا ﷺ في العريش، وأمد الله المسلمين بالملائكة.', more: '[الأنفال: ٧]، [آل عمران: ١٢٥]. ' + FYI, page: 68 },
    { title: 'نتائج بدر', text: 'قتل من المشركين سبعون وأسر سبعون، واستشهد من المسلمين أربعة عشر؛ وفادى الأسرى بأربعة آلاف درهم على مشورة أبي بكر، ومن لم يملك الفداء علم عشرة من غلمان المسلمين القراءة والكتابة.', more: '', page: 69 },
    { title: 'غزوة أحد', text: 'أرادت قريش الثأر لبدر؛ فخرج بألف وانسحب ابن سلول بثلث الجيش، ووضع الرماة على الجبل وأمرهم ألا يتحركوا؛ فلما رأوا الهزيمة نزلوا للغنائم، فالتف خالد بن الوليد من خلفهم؛ واستشهد حمزة.', more: FYI, page: 71 },
    { title: 'غزوة الخندق', text: 'حزب يهود بني النضير قريشًا وغطفان، فجاء عشرة آلاف؛ فأشار سلمان بحفر الخندق، ونقضت بنو قريظة عهدها، ثم فرق الله الأحزاب بريح شديدة.', more: '[الأحزاب: ٢٣–٢٦]', page: 73 },
    { title: 'الحديبية وبيعة الرضوان', text: 'خرج معتمرًا في ألف وأربعمائة، فصدته قريش؛ وأرسل عثمان فاحتبس، فشاع أنه قتل فبايعوه تحت الشجرة؛ ثم جاء سهيل بن عمرو فعقد الصلح.', more: '', page: 75 },
    { title: 'خيبر', text: 'خرج إليها في ألف وستمائة لعداوة يهودها وجمعهم الأحزاب، ففتحها بعد قتال شديد؛ ورد إليهم صحف التوراة التي غنمها المسلمون.', more: '', page: 77 },
    { title: 'مؤتة', text: 'أمر زيد بن حارثة ثم جعفر ثم عبد الله بن رواحة فاستشهدوا، فأخذ الراية خالد بن الوليد وانحاز بالجيش؛ وأوصاهم ألا يقتلوا امرأة ولا صغيرًا ولا شيخًا فانيًا.', more: '', page: 79 },
    { title: 'فتح مكة', text: 'نقضت قريش العهد بإعانة بني بكر على خزاعة، فسار بعشرة آلاف، وأسلم أبو سفيان، وقال: «من دخل دار أبي سفيان فهو آمن»؛ ودخل مكة وهو يقرأ سورة الفتح، وحطم الأصنام وهو يقرأ ﴿جاء الحق وزهق الباطل﴾.', more: '[الإسراء: ٨١]', page: 82 },
    { title: 'حنين', text: 'اغتر المسلمون بكثرتهم فوقعوا في كمين، ففر عدد منهم، وثبت ﷺ يقول: «أنا النبي لا كذب، أنا ابن عبد المطلب»، ونادى العباس الأنصار والمهاجرين وأصحاب الشجرة فأجابوا، فانهزم المشركون.', more: '', page: 85 },
    { title: 'تبوك (للاطلاع فقط)', text: 'خرج بنحو ثلاثين ألفًا في عسرة من الماء والزاد بعد أن تبرع الأغنياء بأموالهم، فأقاموا بتبوك نحو عشرين يومًا فلم يلقوا الروم، ثم دخل الناس في دين الله أفواجًا.', more: FYI, page: 88 },
    { title: 'حج أبي بكر سنة تسع', text: 'أمر أبا بكر على الحج، ثم أرسل عليًا يبلغ الناس: لا يطوف بالبيت عريان، ولا يحج بعد العام مشرك، ومن كان له عهد فعهده إلى مدته.', more: '', page: 90 },
    { title: 'حجة الوداع', text: 'أحرم قارنًا من ذي الحليفة، وطاف للقدوم وسعى، ثم خرج إلى منى يوم التروية، ووقف بعرفة، وبات بمزدلفة، ورمى جمرة العقبة، ونحر، وأفاض، وطاف للوداع؛ وسميت حجة الوداع لأنه لم يحج بعدها.', more: '', page: 91 },
    { title: 'إشارة إلى خلافة أبي بكر', text: 'لما أثقله المرض أمر أبا بكر أن يصلي بالناس، وأصر على ذلك؛ وكان هذا أبرز إشارة لخلافته: ارتضاه للأمة في دينهم أفلا يرتضيه لهم في دنياهم؟', more: '', page: 94 },
    { title: 'موقف أبي بكر عند الوفاة', text: 'خرج أبو بكر إلى الناس فقال: من كان يعبد محمدًا فإن محمدًا قد مات، ومن كان يعبد الله فإن الله حي لا يموت، وتلا الآية؛ فسكن الناس.', more: '[آل عمران: ١٤٤]', page: 94 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أول أعمال العهد المدني', items: ['بناء المسجد', 'المؤاخاة', 'ميثاق التحالف', 'الإذن بالقتال'], page: 59, origin: 'boek' },
    { kind: 'onderscheid', title: 'السرية والغزوة', items: ['الغزوة: قادها النبي ﷺ بنفسه.', 'السرية: بعث عليه غيره.'], page: 61, origin: 'boek' },
    { kind: 'opsomming', title: 'أمراء مؤتة', items: ['زيد بن حارثة', 'جعفر بن أبي طالب', 'عبد الله بن رواحة', 'ثم خالد بن الوليد'], page: 78, origin: 'boek' },
    { kind: 'bewijs', title: 'فضل الصلاة على النبي ﷺ', items: ['﴿إن الله وملائكته يصلون على النبي﴾ [الأحزاب: ٥٦]', '«من صلى علي صلاة صلى الله عليه بها عشرًا».'], page: 96, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'بدأ العهد المدني ببناء المسجد والمؤاخاة، ثم أذن بالقتال.',
    'نصر الله المسلمين في بدر، وأصابهم ما أصابهم في أحد بمخالفة الرماة.',
    'فرق الله الأحزاب بالريح، وكان صلح الحديبية فتحًا.',
    'فتحت مكة سنة ثمان، وفي حنين درس في ترك الاغترار بالكثرة.',
    'حج حجة الوداع سنة عشر، واعتمر أربع عمر.',
    'توفي ﷺ في ربيع الأول سنة إحدى عشرة، ورسالته باقية.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أول عمل قام به ﷺ في المدينة؟', options: ['بناء المسجد', 'غزوة بدر', 'المؤاخاة', 'الإذن بالقتال'], answer: 0, explain: 'في المكان الذي بركت فيه ناقته.', page: 59 },
    { type: 'mc', q: 'كم كان عدد المسلمين يوم بدر؟', options: ['ثلاثمائة وثلاثة عشر', 'ألف', 'ثلاثة آلاف', 'سبعمائة'], answer: 0, explain: 'ومعهم فرسان وسبعون بعيرًا.', page: 68 },
    { type: 'mc', q: 'ما السبب الرئيسي فيما أصاب المسلمين يوم أحد؟', options: ['نزول الرماة من الجبل مخالفة لأمره ﷺ', 'قلة السلاح', 'خيانة بني قريظة', 'الريح'], answer: 0, explain: 'فالتف خالد بن الوليد من خلفهم.', page: 71 },
    { type: 'mc', q: 'من أشار بحفر الخندق؟', options: ['سلمان الفارسي', 'أبو بكر', 'عمر', 'علي'], answer: 0, explain: 'فاستحسن الرسول والصحابة رأيه.', page: 73 },
    { type: 'mc', q: 'على أي شيء بايع الصحابة بيعة الرضوان؟', options: ['ألا يفروا', 'على الهجرة', 'على الزكاة', 'على الحج'], answer: 0, explain: 'لما شاع أن عثمان قد قتل.', page: 75 },
    { type: 'mc', q: 'لماذا سمي جعفر بن أبي طالب ذا الجناحين؟', options: ['أبدله الله بيديه جناحين في الجنة', 'لسرعته في القتال', 'لأنه هاجر هجرتين', 'لكرمه'], answer: 0, explain: 'قطعت يداه يوم مؤتة.', page: 79 },
    { type: 'tf', q: 'كان سبب الشدة في أول حنين الاغترار بالكثرة.', options: ['صواب', 'خطأ'], answer: 0, explain: 'قالوا: لن نغلب اليوم من قلة.', page: 85 },
    { type: 'mc', q: 'كم عمرة اعتمر النبي ﷺ؟', options: ['أربعًا', 'ثلاثًا', 'اثنتين', 'خمسًا'], answer: 0, explain: 'كلهن في ذي القعدة إلا التي مع حجته.', page: 92 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٦٠ و٦٤ و٨٠ و٨٣ و٨٦ و٨٩ و٩٣ و٩٥. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'De Profeet ﷺ in Medina',
  subtitle: 'Twaalf lessen samen op één pagina',
  summary: 'De eerste stappen in Medina: de moskee, de verbroedering en de toestemming tot strijd; daarna de expedities vóór Badr, de grote veldtochten van Badr tot Tabūk, het verdrag van al-Ḥudaybiya en de verovering van Mekka; vervolgens het jaar van de delegaties, de afscheidsbedevaart en zijn ʿumra’s ﷺ; en tot slot zijn ziekte, zijn overlijden en de deugd van zegen over hem vragen.',
  source: { ...source, label: 'Kitāb as-Sīra an-nabawiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De Profeet ﷺ in Medina', sub: 'Eenheid 5' },
    nodes: [
      { label: 'De Medinensische periode', sub: 'les 13', page: 59, children: ['de moskee', 'de verbroedering', 'toestemming tot strijd'] },
      { label: 'Vóór Badr', sub: 'les 14', page: 61, children: ['expedities', 'hun doelen', 'strijd verplicht'] },
      { label: 'Badr, Uḥud en de Gracht', sub: 'les 15–17', page: 67, children: ['overwinning', 'de boogschutters', 'de gracht en de wind'] },
      { label: 'al-Ḥudaybiya en daarna', sub: 'les 18–19', page: 74, children: ['de eed van ar-Riḍwān', 'het verdrag', 'Khaybar', 'Muʾta'] },
      { label: 'Mekka, Ḥunayn en Tabūk', sub: 'les 20–22', page: 81, children: ['de verovering van Mekka', 'misleid door aantallen', 'de moeilijke tocht'] },
      { label: 'Delegaties, afscheid en overlijden', sub: 'les 23–24', page: 90, children: ['jaar van de delegaties', 'de afscheidsbedevaart', 'zijn overlijden ﷺ'] }
    ]
  },
  points: [
    { text: 'Zijn eerste stap in Medina was de bouw van de moskee op de plek waar zijn kameelmerrie neerknielde.', page: 59 },
    { text: 'Hij verbroederde de Muhājirūn en de Anṣār; daarna bracht Allah het erven terug naar de bloedverwanten.', page: 59 },
    { text: 'Bij Badr wonnen de moslims met driehonderddertien man tegen ongeveer duizend.', page: 69 },
    { text: 'Wat de moslims bij Uḥud overkwam, kwam doordat de boogschutters tegen zijn bevel ﷺ de berg verlieten.', page: 71 },
    { text: 'Het verdrag van al-Ḥudaybiya leek sommigen onrechtvaardig; toen zij wisten dat het Allahs bevel was, gaven zij zich over.', page: 76 },
    { text: 'In Ramadan van het jaar 8 trok hij Mekka als overwinnaar binnen, brak de afgodsbeelden en Bilāl riep de adhān boven op de Kaʿba.', page: 82 },
    { text: 'Ḥunayn is een les: overwinning komt niet door aantallen en uitrusting.', page: 85 },
    { text: 'Hij ﷺ stierf op een maandag in Rabīʿ al-Awwal van het jaar 11; zijn leven eindigde, zijn boodschap niet.', page: 94 }
  ],
  terms: [
    { term: 'المؤاخاة', translit: 'al-muʾākhāh', meaning: 'Verbroedering: een broederschapsverbond tussen Muhājirūn en Anṣār, met onderlinge steun en erfrecht.', explanation: 'Het erven werd daarna opgeheven met "en bloedverwanten hebben meer recht op elkaar".', notes: ['al-Anfāl 8:75'], page: 59 },
    { term: 'السرية', translit: 'as-sariyya', meaning: 'Een expeditie waaraan de Profeet ﷺ zelf niet deelnam.', explanation: 'Een ghazwa is een veldtocht die hij zelf leidde.', notes: [], page: 61 },
    { term: 'العريش', translit: 'al-ʿarīsh', meaning: 'Een schuilplaats die de moslims bij Badr voor de Profeet ﷺ op een heuvel bouwden.', explanation: 'Daar bleef hij smeken.', notes: [], page: 69 },
    { term: 'القليب', translit: 'al-qalīb', meaning: 'De put waarin bij Badr de gesneuvelde polytheïsten werden geworpen.', explanation: '', notes: [], page: 69 },
    { term: 'الأحزاب', translit: 'al-aḥzāb', meaning: 'De bondgenoten: de stammen die zich bij de Grachtslag tegen de moslims verenigden.', explanation: 'Quraysh, Ghaṭafān en anderen, opgehitst door de joden van Banū n-Naḍīr.', notes: [], page: 72 },
    { term: 'بيعة الرضوان', translit: 'bayʿat ar-riḍwān', meaning: 'De eed onder de boom bij al-Ḥudaybiya, dat zij niet zouden vluchten.', explanation: 'Toen het gerucht ging dat ʿUthmān gedood was.', notes: ['al-Fatḥ 48:18'], page: 75 },
    { term: 'عمرة القضاء', translit: 'ʿumrat al-qaḍāʾ', meaning: 'De inhaal-ʿumra in Dhū l-Qaʿda van het jaar 7, volgens de afspraak van al-Ḥudaybiya.', explanation: 'Ook ʿumrat al-qiṣāṣ genoemd, omdat zij hem in Dhū l-Qaʿda van het jaar 6 hadden tegengehouden.', notes: [], page: 78 },
    { term: 'ذو الجناحين', translit: 'dhū l-janāḥayn', meaning: '"Die met de twee vleugels": bijnaam van Jaʿfar ibn Abī Ṭālib.', explanation: 'Zijn handen werden bij Muʾta afgehakt; Allah gaf hem daarvoor twee vleugels om in het Paradijs mee te vliegen.', notes: [], page: 79 },
    { term: 'غزوة العسرة', translit: 'ghazwat al-ʿusra', meaning: 'De moeilijke veldtocht: de tocht naar Tabūk.', explanation: 'Zo genoemd vanwege het gebrek aan water en proviand.', notes: [], page: 88 },
    { term: 'عام الوفود', translit: 'ʿām al-wufūd', meaning: 'Het jaar van de delegaties: het jaar 9, toen stammen kwamen om hun islam te verklaren.', explanation: 'Volgens de sīra-schrijvers ongeveer zestig delegaties.', notes: [], page: 90 },
    { term: 'حجة الوداع', translit: 'ḥajjat al-wadāʿ', meaning: 'De afscheidsbedevaart: zijn bedevaart ﷺ in het jaar 10.', explanation: 'Zo genoemd omdat hij daarna geen bedevaart meer deed.', notes: [], page: 91 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'De grote veldtochten van de Profeet ﷺ',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Badr', sub: 'jaar 2', page: 67 },
        { label: 'Uḥud', sub: 'jaar 3', page: 70 },
        { label: 'De Gracht (al-Aḥzāb)', sub: 'jaar 5', page: 72 },
        { label: 'al-Ḥudaybiya en de eed van ar-Riḍwān', sub: 'jaar 6', page: 74 },
        { label: 'Khaybar', sub: 'jaar 7', page: 76 },
        { label: 'Muʾta', sub: 'jaar 8', page: 78 },
        { label: 'De verovering van Mekka', sub: 'Ramadan, jaar 8', page: 81 },
        { label: 'Ḥunayn', sub: 'Shawwāl, jaar 8', page: 84 },
        { label: 'Tabūk (al-ʿUsra)', sub: 'Rajab, jaar 9', page: 87 }
      ]
    },
    {
      type: 'steps',
      title: 'De eerste stappen in Medina',
      intro: 'Zoals in het schema van het boek.',
      nodes: [
        { label: 'De moskee van de Profeet bouwen', sub: 'hij hielp zelf mee', page: 59 },
        { label: 'De verbroedering', sub: 'tussen Muhājirūn en Anṣār', page: 59 },
        { label: 'Toestemming tot strijd', sub: 'al-Ḥajj 22:39', page: 60 }
      ]
    },
    {
      type: 'cards',
      title: 'Doelen van de expedities vóór Badr',
      intro: 'Zoals het boek ze opsomt.',
      nodes: [
        { label: 'Verkenning', sub: 'de wegen rond Medina en naar Mekka leren kennen', page: 63 },
        { label: 'Verdragen', sub: 'met de stammen langs die wegen', page: 63 },
        { label: 'Kracht tonen', sub: 'aan de polytheïsten en joden van Yathrib en de bedoeïenen', page: 63 },
        { label: 'Quraysh waarschuwen', sub: 'voor het gevaar voor hun handel en belangen', page: 63 }
      ]
    },
    {
      type: 'compare',
      title: 'Badr, Uḥud en de Gracht',
      intro: 'Zoals in het boek.',
      columns: ['Badr', 'Uḥud', 'De Gracht'],
      rows: [
        { label: 'Jaar', cells: ['Ramadan, jaar 2', 'jaar 3', 'Shawwāl, jaar 5'] },
        { label: 'Moslims', cells: ['313', '1000, daarna 700', '3000'] },
        { label: 'Polytheïsten', cells: ['ongeveer 950', '3000', '10.000'] },
        { label: 'Les', cells: ['Allahs hulp en de steun van engelen', 'de gevolgen van ongehoorzaamheid aan de Boodschapper ﷺ', 'een strijd van zenuwen en een beproeving van harten'] }
      ],
      page: 69
    },
    {
      type: 'cards',
      title: 'De voorwaarden van al-Ḥudaybiya',
      intro: 'Zoals in les 18.',
      nodes: [
        { label: 'Tien jaar wapenstilstand', page: 75 },
        { label: 'De moslims keren dit jaar terug en doen volgend jaar de ʿumra', page: 75 },
        { label: 'Wie uit Quraysh als moslim komt, wordt teruggestuurd; wie naar Quraysh gaat niet', page: 75 },
        { label: 'Wie wil, sluit zich aan bij het verbond van Muḥammad of dat van Quraysh', page: 75 }
      ]
    },
    {
      type: 'cards',
      title: 'Zijn ʿumra’s ﷺ',
      intro: 'Vier ʿumra’s, alle in Dhū l-Qaʿda behalve die met zijn bedevaart.',
      nodes: [
        { label: 'al-Ḥudaybiya', sub: 'jaar 6, toen de polytheïsten hem tegenhielden', page: 92 },
        { label: 'De inhaal-ʿumra', sub: 'het jaar daarna; drie dagen in Mekka', page: 92 },
        { label: 'al-Jiʿrāna', sub: 'na Ḥunayn', page: 92 },
        { label: 'Met zijn bedevaart', sub: 'qirān', page: 92 }
      ]
    }
  ],
  sections: [
    { title: 'De bouw van de moskee', text: 'Hij koos de plek waar zijn kameelmerrie neerknielde, kocht die van twee weesjongens, en hielp zelf mee met het dragen van leemstenen en stenen.', more: '', page: 59 },
    { title: 'Toestemming tot strijd', text: 'Quraysh bleef de moslims na de hijra bedreigen; toen kwam de toestemming tot strijd. Na de expeditie van ʿAbdallāh ibn Jaḥsh werd de strijd verplicht met "en strijd op de weg van Allah tegen wie jullie bestrijden, en overschrijd de grenzen niet".', more: 'al-Ḥajj 22:39–41, al-Baqara 2:190', page: 63 },
    { title: 'De slag bij Badr (alleen ter kennisname)', text: 'Hij trok uit naar de karavaan van Quraysh; de karavaan ontkwam, maar Abū Jahl wilde vechten. Hij overlegde met zijn metgezellen, en al-Miqdād zei: ga voort met wat je Heer je opdroeg, wij zijn met je. De Profeet ﷺ smeekte in zijn schuilplaats en Allah steunde de moslims met engelen.', more: 'al-Anfāl 8:7, Āl ʿImrān 3:125. ' + FYI_NL, page: 68 },
    { title: 'De uitkomst van Badr', text: 'Zeventig polytheïsten sneuvelden en zeventig werden gevangen; veertien moslims sneuvelden. Op advies van Abū Bakr nam hij losgeld van vierduizend dirham per gevangene; wie geen losgeld had, leerde tien moslimjongens lezen en schrijven.', more: '', page: 69 },
    { title: 'De slag bij Uḥud', text: 'Quraysh wilde wraak voor Badr. Hij trok uit met duizend man, maar Ibn Salūl trok zich terug met een derde van het leger. Hij plaatste boogschutters op de berg en beval hen te blijven; toen zij de vijand zagen vluchten, gingen ze naar de buit, en Khālid ibn al-Walīd viel de moslims in de rug aan. Ḥamza sneuvelde.', more: FYI_NL, page: 71 },
    { title: 'De Grachtslag', text: 'De joden van Banū n-Naḍīr verenigden Quraysh en Ghaṭafān, en tienduizend man kwamen. Salmān stelde voor een gracht te graven; de Banū Qurayẓa verbraken hun verdrag; daarna verdreef Allah de bondgenoten met een harde wind.', more: 'al-Aḥzāb 33:23–26', page: 73 },
    { title: 'al-Ḥudaybiya en de eed van ar-Riḍwān', text: 'Hij ging met veertienhonderd man op weg voor de ʿumra, maar Quraysh hield hem tegen. Hij stuurde ʿUthmān, die werd vastgehouden; toen het gerucht ging dat hij gedood was, gaven zij hem de eed onder de boom. Daarna kwam Suhayl ibn ʿAmr en werd het verdrag gesloten.', more: '', page: 75 },
    { title: 'Khaybar', text: 'Hij trok met zestienhonderd man naar Khaybar, vanwege de vijandschap van de joden daar en hun rol bij de bondgenoten, en veroverde het na zware strijd. De Thorarollen die de moslims buitmaakten, gaf hij hun terug.', more: '', page: 77 },
    { title: 'Muʾta', text: 'Hij stelde Zayd ibn Ḥāritha aan, dan Jaʿfar, dan ʿAbdallāh ibn Rawāḥa; alle drie sneuvelden. Khālid ibn al-Walīd nam de vaandel en trok het leger terug. Hij had hun opgedragen geen vrouw, kind of oude man te doden.', more: '', page: 79 },
    { title: 'De verovering van Mekka', text: 'Quraysh verbrak het verdrag door de Banū Bakr tegen Khuzāʿa te helpen. Hij trok op met tienduizend man; Abū Sufyān werd moslim, en hij zei: "wie het huis van Abū Sufyān binnengaat, is veilig". Hij trok Mekka binnen terwijl hij Sūrat al-Fatḥ reciteerde, en brak de afgodsbeelden met "de waarheid is gekomen en de valsheid verdwenen".', more: 'al-Isrāʾ 17:81', page: 82 },
    { title: 'Ḥunayn', text: 'De moslims werden misleid door hun aantal en liepen in een hinderlaag; velen vluchtten. Hij bleef standhouden en zei: "Ik ben de Profeet, dat is geen leugen; ik ben de zoon van ʿAbd al-Muṭṭalib." al-ʿAbbās riep de Anṣār, de Muhājirūn en de mensen van de boom terug, en de polytheïsten werden verslagen.', more: '', page: 85 },
    { title: 'Tabūk (alleen ter kennisname)', text: 'Hij trok uit met ongeveer dertigduizend man, met weinig water en proviand, nadat de rijken royaal hadden gegeven. Zij bleven ongeveer twintig dagen in Tabūk zonder de Byzantijnen te treffen; daarna kwamen de mensen in groten getale tot de islam.', more: FYI_NL, page: 88 },
    { title: 'De bedevaart van Abū Bakr in het jaar 9', text: 'Hij stelde Abū Bakr aan als leider van de bedevaart en stuurde daarna ʿAlī om de mensen te laten weten: niemand loopt naakt om het Huis, na dit jaar doet geen polytheïst de bedevaart, en wie een verdrag heeft, diens verdrag geldt tot het afloopt.', more: '', page: 90 },
    { title: 'De afscheidsbedevaart', text: 'Hij trad in iḥrām voor qirān bij Dhū l-Ḥulayfa, deed de ṭawāf van aankomst en de saʿy, ging op de dag van tarwiya naar Minā, stond op ʿArafa, overnachtte in Muzdalifa, wierp op Jamrat al-ʿAqaba, slachtte, deed de ṭawāf al-ifāḍa en de afscheidsṭawāf. Zij heet afscheidsbedevaart omdat hij daarna geen bedevaart meer deed.', more: '', page: 91 },
    { title: 'Een aanwijzing voor het kalifaat van Abū Bakr', text: 'Toen de ziekte zwaar werd, droeg hij Abū Bakr op het gebed te leiden en hield daaraan vast. Dat was de duidelijkste aanwijzing voor zijn opvolging: als hij hem goed vond voor de godsdienst van de gemeenschap, waarom dan niet voor haar wereldse zaken?', more: '', page: 94 },
    { title: 'Abū Bakr bij het overlijden', text: 'Abū Bakr ging naar de mensen en zei: wie Muḥammad aanbad, Muḥammad is gestorven; en wie Allah aanbad, Allah leeft en sterft niet. Hij reciteerde het vers, en de mensen werden rustig.', more: 'Āl ʿImrān 3:144', page: 94 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'De eerste stappen in Medina', items: ['de moskee bouwen', 'de verbroedering', 'het bondgenootschap', 'toestemming tot strijd'], page: 59, origin: 'boek' },
    { kind: 'onderscheid', title: 'Sariyya en ghazwa', items: ['Ghazwa: door de Profeet ﷺ zelf geleid.', 'Sariyya: een ander werd aan het hoofd gestuurd.'], page: 61, origin: 'boek' },
    { kind: 'opsomming', title: 'De aanvoerders bij Muʾta', items: ['Zayd ibn Ḥāritha', 'Jaʿfar ibn Abī Ṭālib', 'ʿAbdallāh ibn Rawāḥa', 'daarna Khālid ibn al-Walīd'], page: 78, origin: 'boek' },
    { kind: 'bewijs', title: 'De deugd van zegen over de Profeet ﷺ', items: ['"Allah en Zijn engelen zegenen de Profeet" (al-Aḥzāb 33:56)', '"Wie één keer zegen over mij vraagt, over hem zendt Allah daarvoor tien keer Zijn zegen."'], page: 96, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De Medinensische periode begon met de moskee en de verbroedering, daarna kwam de toestemming tot strijd.',
    'Allah gaf de overwinning bij Badr; bij Uḥud ging het mis door de ongehoorzaamheid van de boogschutters.',
    'Allah verdreef de bondgenoten met de wind; het verdrag van al-Ḥudaybiya was een opening.',
    'Mekka werd in het jaar 8 veroverd; Ḥunayn leert dat aantallen niet de overwinning brengen.',
    'Hij deed de afscheidsbedevaart in het jaar 10 en vier ʿumra’s.',
    'Hij ﷺ stierf in Rabīʿ al-Awwal van het jaar 11; zijn boodschap blijft.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat deed hij ﷺ als eerste in Medina?', options: ['de moskee bouwen', 'de slag bij Badr', 'de verbroedering', 'toestemming tot strijd'], answer: 0, explain: 'Op de plek waar zijn kameelmerrie neerknielde.', page: 59 },
    { type: 'mc', q: 'Hoeveel moslims waren er bij Badr?', options: ['driehonderddertien', 'duizend', 'drieduizend', 'zevenhonderd'], answer: 0, explain: 'Met twee paarden en zeventig kamelen.', page: 68 },
    { type: 'mc', q: 'Wat was de hoofdoorzaak van wat de moslims bij Uḥud overkwam?', options: ['de boogschutters verlieten tegen zijn bevel ﷺ de berg', 'te weinig wapens', 'het verraad van de Banū Qurayẓa', 'de wind'], answer: 0, explain: 'Toen viel Khālid ibn al-Walīd hen in de rug aan.', page: 71 },
    { type: 'mc', q: 'Wie stelde voor de gracht te graven?', options: ['Salmān al-Fārisī', 'Abū Bakr', 'ʿUmar', 'ʿAlī'], answer: 0, explain: 'De Boodschapper en de metgezellen vonden het een goed idee.', page: 73 },
    { type: 'mc', q: 'Wat beloofden de metgezellen bij de eed van ar-Riḍwān?', options: ['dat zij niet zouden vluchten', 'te emigreren', 'zakāt te geven', 'de bedevaart te doen'], answer: 0, explain: 'Toen het gerucht ging dat ʿUthmān gedood was.', page: 75 },
    { type: 'mc', q: 'Waarom heet Jaʿfar ibn Abī Ṭālib "die met de twee vleugels"?', options: ['Allah gaf hem voor zijn handen twee vleugels in het Paradijs', 'hij was snel in de strijd', 'hij emigreerde twee keer', 'hij was vrijgevig'], answer: 0, explain: 'Zijn handen werden bij Muʾta afgehakt.', page: 79 },
    { type: 'tf', q: 'Bij Ḥunayn kwam de moeilijkheid aan het begin doordat de moslims zich lieten misleiden door hun aantal.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Ze zeiden: vandaag worden we niet verslagen door een tekort.', page: 85 },
    { type: 'mc', q: 'Hoeveel ʿumra’s deed de Profeet ﷺ?', options: ['vier', 'drie', 'twee', 'vijf'], answer: 0, explain: 'Alle in Dhū l-Qaʿda behalve die met zijn bedevaart.', page: 92 }
  ]),
  note: 'Oefeningen van het boek op p. 60, 64, 80, 83, 86, 89, 93 en 95. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-seerah', chapter: '13', unit: 5, ar, nl }
