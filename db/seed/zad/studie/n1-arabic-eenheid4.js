// Hoofdstukkaart bij اللغة العربية (١), eenheid 4: المثنى والجموع (lessen 17–20, boek p. 75–86).
// Volgt de derde وحدة van het boek. Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand.
// Alle vier lessen zijn in het boek "alleen ter kennisname"; de kaart vermeldt dat bovenaan.
// Geen hadith-tabblad: de profetische teksten in de oefening van p. 86 staan in het boek zonder bronvermelding.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (١)، سلسلة زاد العلمية',
  pages: '75–86',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_ArabicLanguage/page/n{p}/mode/1up'
}

const FYI = 'دروس هذه الوحدة كلها في الكتاب للاطلاع فقط.'
const FYI_NL = 'Alle lessen van deze eenheid staan in het boek alleen ter kennisname.'

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'المثنى والجموع',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'المثنى وشروطه وملحقاته، وجمع المذكر السالم وشروط الجامد والمشتق وملحقاته، وجمع المؤنث السالم وملحقاته، وجمع التكسير وأقسامه: القلة والكثرة وصيغة منتهى الجموع. ' + FYI,
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'الوحدة الثالثة من الكتاب: موضوعات الدروس الأربعة.',
    root: { label: 'المثنى والجموع', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'المثنى', sub: 'الدرس ١٧', page: 77, children: ['تعريفه', 'شروطه', 'ملحقاته'] },
      { label: 'جمع المذكر السالم', sub: 'الدرس ١٨', page: 80, children: ['شروط الجامد', 'شروط المشتق', 'ملحقاته'] },
      { label: 'جمع المؤنث السالم', sub: 'الدرس ١٩', page: 83, children: ['تعريفه', 'أولات', 'ما سمي به'] },
      { label: 'جمع التكسير', sub: 'الدرس ٢٠', page: 85, children: ['القلة', 'الكثرة', 'منتهى الجموع'] }
    ]
  },
  points: [
    { text: 'المثنى ما دل على اثنين أو اثنتين بزيادة ألف ونون أو ياء ونون إلى مفرده.', page: 77 },
    { text: 'يشترط فيما يثنى أن يكون مفردًا معربًا منكرًا له مماثل.', page: 77 },
    { text: 'يلحق بالمثنى: اثنان واثنتان، وكلا وكلتا المضافتان إلى الضمير.', page: 78 },
    { text: 'جمع المذكر السالم ما دل على أكثر من اثنين بزيادة واو ونون أو ياء ونون.', page: 80 },
    { text: 'يلحق بجمع المذكر السالم: أولو، والعقود من عشرين إلى تسعين، وبنون وأهلون وسنون وعالمون وغيرها.', page: 82 },
    { text: 'جمع المؤنث السالم ما دل على أكثر من اثنين بزيادة ألف وتاء، ويلحق به أولات وما سمي به كعرفات.', page: 83 },
    { text: 'جمع التكسير ما تغيرت فيه صورة المفرد، وهو جمع قلة أو كثرة أو صيغة منتهى الجموع.', page: 85 }
  ],
  terms: [
    { term: 'المثنى', translit: 'al-muthannā', meaning: 'ما دل على اثنين أو اثنتين بزيادة ألف ونون أو ياء ونون.', explanation: 'رجلان، رجلين.', notes: [], page: 77 },
    { term: 'الملحق', translit: 'al-mulḥaq', meaning: 'اسم فقد شرطًا ويعامل معاملة المثنى أو الجمع.', explanation: '', notes: [], page: 78 },
    { term: 'جمع المذكر السالم', translit: 'jamʿ al-mudhakkar as-sālim', meaning: 'ما دل على أكثر من اثنين بزيادة واو ونون أو ياء ونون.', explanation: 'المسلمون، المسلمين.', notes: [], page: 80 },
    { term: 'جمع المؤنث السالم', translit: 'jamʿ al-muʾannath as-sālim', meaning: 'ما دل على أكثر من اثنين بزيادة ألف وتاء.', explanation: 'مؤمنات، صالحات.', notes: [], page: 83 },
    { term: 'جمع التكسير', translit: 'jamʿ at-taksīr', meaning: 'ما دل على أكثر من اثنين وتغيرت صورة مفرده.', explanation: 'كتاب كتب، قلم أقلام.', notes: [], page: 85 },
    { term: 'صيغة منتهى الجموع', translit: 'ṣīghat muntahā l-jumūʿ', meaning: 'كل جمع بعد ألف تكسيره حرفان أو ثلاثة أوسطها ساكن.', explanation: 'مدارس، فوارس، لطائف.', notes: [], page: 85 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'شروط ما يثنى',
      intro: 'كما في الدرس السابع عشر.',
      nodes: [
        { label: 'مفرد', sub: 'لا يقال: رجلانان', page: 77 },
        { label: 'معرب', sub: 'هذان واللذان على صورة المثنى', page: 77 },
        { label: 'منكر', sub: 'العلم إذا ثني صار نكرة', page: 77 },
        { label: 'له مماثل', sub: 'القمران من باب التغليب', page: 77 }
      ]
    },
    {
      type: 'compare',
      title: 'شروط جمع المذكر السالم',
      intro: 'كما في الدرس الثامن عشر.',
      columns: ['الشروط'],
      rows: [
        { label: 'الجامد', cells: ['علم لمذكر عاقل، خال من التاء ومن التركيب'] },
        { label: 'المشتق', cells: ['صفة لمذكر عاقل خالية من التاء، ليست على أفعل فعلاء ولا فعلان فعلى، ولا مما يستوي فيه المذكر والمؤنث'] }
      ],
      page: 80
    },
    {
      type: 'compare',
      title: 'أقسام جمع التكسير',
      intro: 'كما في الدرس العشرين.',
      columns: ['يدل على', 'من أوزانه'],
      rows: [
        { label: 'جمع القلة', cells: ['من ثلاثة إلى عشرة', 'أفعُل، أفعال، أفعِلة، فِعلة'] },
        { label: 'جمع الكثرة', cells: ['من أحد عشر فما فوق', 'فُعْل، فُعُل، فُعَل، فِعَل، فَعَلة'] },
        { label: 'منتهى الجموع', cells: ['بعد ألفه حرفان أو ثلاثة', 'مفاعل، فواعل، فعائل، فعالي'] }
      ],
      page: 85
    }
  ],
  sections: [
    { title: 'ليس من المثنى (للاطلاع فقط)', text: 'كلا وكلتا واثنان واثنتان وزوج وشفع، لأن دلالتها على الاثنين ليست بالزيادة.', more: FYI, page: 77 },
    { title: 'كلا وكلتا (للاطلاع فقط)', text: 'إذا أضيفتا إلى الضمير ألحقتا بالمثنى («أحدهما أو كلاهما»)، وإذا أضيفتا إلى اسم ظاهر أعربتا إعراب المقصور («كلتا الجنتين آتت أكلها»).', more: FYI, page: 78 },
    { title: 'أمثلة لما لا يجمع جمع مذكر سالمًا (للاطلاع فقط)', text: 'رجل (ليس علمًا)، زينب (ليست لمذكر)، لاحق علمًا لفرس (ليس لعاقل)، طلحة (فيه التاء)، سيبويه (مركب)؛ ومن المشتق: مرضع، علامة، أحمر، عطشان، صبور.', more: FYI, page: 80 },
    { title: 'ملحقات جمع المذكر السالم (للاطلاع فقط)', text: 'أولو والعقود لا مفرد لها من لفظها؛ وبنون وأهلون وأرضون وسنون ووابلون وعالمون وعزون أسماء جامدة ليست علمًا ولا صفة لمذكر، ومنها: «المال والبنون»، «عدد السنين»، «على العالمين».', more: FYI, page: 82 },
    { title: 'ملحقات جمع المؤنث السالم (للاطلاع فقط)', text: 'أولات، ومفردها من غير لفظها: صاحبة («وأولات الأحمال»)؛ وما سمي به من هذا الجمع كعرفات وأذرعات، فيعامل معاملة جمع المؤنث السالم على القول الصحيح.', more: FYI, page: 83 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شروط ما يثنى', items: ['مفرد', 'معرب', 'منكر', 'له مماثل'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'الملحق بالمثنى', items: ['اثنان واثنتان', 'كلا وكلتا المضافتان إلى الضمير'], page: 78, origin: 'boek' },
    { kind: 'onderscheid', title: 'جمع القلة وجمع الكثرة', items: ['القلة: من ثلاثة إلى عشرة.', 'الكثرة: من أحد عشر إلى ما لا نهاية.'], page: 85, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'المثنى بزيادة ألف ونون أو ياء ونون، ويشترط فيه الإفراد والإعراب والتنكير والمماثلة.',
    'جمع المذكر السالم له شروط في الجامد والمشتق، وله ملحقات.',
    'جمع المؤنث السالم بزيادة ألف وتاء، ويلحق به أولات وما سمي به.',
    'جمع التكسير قلة وكثرة ومنتهى الجموع.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'أي هذه ملحق بالمثنى؟', options: ['اثنان', 'رجلان', 'هذان', 'كتابان'], answer: 0, explain: 'وكذلك اثنتان، وكلا وكلتا المضافتان إلى الضمير.', page: 78 },
    { type: 'tf', q: 'يثنى الاسم العلم ويبقى معرفة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'إذا ثني العلم صار نكرة وجاز دخول أل.', page: 77 },
    { type: 'mc', q: 'لماذا لا يجمع «طلحة» جمع مذكر سالمًا؟', options: ['لوجود التاء', 'لأنه ليس علمًا', 'لأنه مركب', 'لأنه لغير عاقل'], answer: 0, explain: 'من شروط الجامد الخلو من التاء.', page: 80 },
    { type: 'mc', q: 'ما مفرد «أولات»؟', options: ['صاحبة', 'أولة', 'ولية', 'لا مفرد لها في المعنى'], answer: 0, explain: 'لا مفرد لها من لفظها، ومعنى مفردها صاحبة.', page: 83 },
    { type: 'mc', q: 'أي هذه من صيغ منتهى الجموع؟', options: ['مساجد', 'أقلام', 'كتب', 'فتية'], answer: 0, explain: 'على وزن مفاعل.', page: 85 }
  ]),
  note: 'دروس هذه الوحدة كلها في الكتاب للاطلاع فقط. نشاط الكتاب في الصفحات ٧٩ و٨١ و٨٤ و٨٦.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Dualis en meervouden',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De dualis, zijn voorwaarden en wat erbij aansluit; het gezonde mannelijke meervoud met de voorwaarden voor grondwoorden en afgeleide woorden en wat erbij aansluit; het gezonde vrouwelijke meervoud en wat erbij aansluit; en het gebroken meervoud: klein aantal, groot aantal en de uiterste meervoudsvorm. ' + FYI_NL,
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De derde eenheid van het boek: de onderwerpen van de vier lessen.',
    root: { label: 'Dualis en meervouden', sub: 'Eenheid 4' },
    nodes: [
      { label: 'De dualis', sub: 'les 17', page: 77, children: ['definitie', 'voorwaarden', 'wat erbij aansluit'] },
      { label: 'Gezond mannelijk meervoud', sub: 'les 18', page: 80, children: ['voorwaarden grondwoord', 'voorwaarden afgeleid woord', 'wat erbij aansluit'] },
      { label: 'Gezond vrouwelijk meervoud', sub: 'les 19', page: 83, children: ['definitie', 'ulāt', 'namen met deze vorm'] },
      { label: 'Gebroken meervoud', sub: 'les 20', page: 85, children: ['klein aantal', 'groot aantal', 'uiterste meervoudsvorm'] }
    ]
  },
  points: [
    { text: 'De dualis duidt twee aan door alif en nūn of yāʾ en nūn aan het enkelvoud toe te voegen.', page: 77 },
    { text: 'Wat in de dualis gezet wordt, moet enkelvoud, verbogen en onbepaald zijn en een gelijke hebben.', page: 77 },
    { text: 'Bij de dualis sluiten aan: ithnāni en ithnatāni, en kilā en kiltā met een voornaamwoordsuffix.', page: 78 },
    { text: 'Het gezonde mannelijke meervoud duidt meer dan twee aan door wāw en nūn of yāʾ en nūn toe te voegen.', page: 80 },
    { text: 'Bij het gezonde mannelijke meervoud sluiten aan: ulū, de tientallen van twintig tot negentig, banūn, ahlūn, sinūn, ʿālamūn en andere.', page: 82 },
    { text: 'Het gezonde vrouwelijke meervoud voegt alif en tāʾ toe; ulāt en namen als ʿArafāt sluiten erbij aan.', page: 83 },
    { text: 'Het gebroken meervoud verandert de vorm van het enkelvoud: klein aantal, groot aantal of de uiterste meervoudsvorm.', page: 85 }
  ],
  terms: [
    { term: 'المثنى', translit: 'al-muthannā', meaning: 'Dualis: duidt twee aan met alif en nūn of yāʾ en nūn.', explanation: 'rajulāni, rajulayni.', notes: [], page: 77 },
    { term: 'الملحق', translit: 'al-mulḥaq', meaning: 'Wat erbij aansluit: een naamwoord dat een voorwaarde mist maar als dualis of meervoud behandeld wordt.', explanation: '', notes: [], page: 78 },
    { term: 'جمع المذكر السالم', translit: 'jamʿ al-mudhakkar as-sālim', meaning: 'Gezond mannelijk meervoud: meer dan twee, met wāw en nūn of yāʾ en nūn.', explanation: 'al-muslimūna, al-muslimīna.', notes: [], page: 80 },
    { term: 'جمع المؤنث السالم', translit: 'jamʿ al-muʾannath as-sālim', meaning: 'Gezond vrouwelijk meervoud: meer dan twee, met alif en tāʾ.', explanation: 'muʾmināt, ṣāliḥāt.', notes: [], page: 83 },
    { term: 'جمع التكسير', translit: 'jamʿ at-taksīr', meaning: 'Gebroken meervoud: meer dan twee, met een veranderde vorm van het enkelvoud.', explanation: 'kitāb – kutub, qalam – aqlām.', notes: [], page: 85 },
    { term: 'صيغة منتهى الجموع', translit: 'ṣīghat muntahā l-jumūʿ', meaning: 'Uiterste meervoudsvorm: na de meervouds-alif twee of drie letters, waarvan de middelste klinkerloos is.', explanation: 'madāris, fawāris, laṭāʾif.', notes: [], page: 85 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'Voorwaarden voor de dualis',
      intro: 'Zoals in les 17.',
      nodes: [
        { label: 'Enkelvoud', sub: 'niet: rajulānāni', page: 77 },
        { label: 'Verbogen', sub: 'hādhāni en alladhāni hebben alleen de vorm', page: 77 },
        { label: 'Onbepaald', sub: 'een eigennaam wordt in de dualis onbepaald', page: 77 },
        { label: 'Met een gelijke', sub: 'al-qamarāni is taghlīb', page: 77 }
      ]
    },
    {
      type: 'compare',
      title: 'Voorwaarden voor het gezonde mannelijke meervoud',
      intro: 'Zoals in les 18.',
      columns: ['Voorwaarden'],
      rows: [
        { label: 'Grondwoord', cells: ['eigennaam van een redelijk mannelijk wezen, zonder tāʾ en niet samengesteld'] },
        { label: 'Afgeleid woord', cells: ['bijvoeglijk voor een redelijk mannelijk wezen, zonder tāʾ, niet afʿal/faʿlāʾ of faʿlān/faʿlā, en niet gelijk voor mannelijk en vrouwelijk'] }
      ],
      page: 80
    },
    {
      type: 'compare',
      title: 'Soorten gebroken meervoud',
      intro: 'Zoals in les 20.',
      columns: ['Duidt aan', 'Vormen'],
      rows: [
        { label: 'Klein aantal', cells: ['drie tot tien', 'afʿul, afʿāl, afʿila, fiʿla'] },
        { label: 'Groot aantal', cells: ['elf en meer', 'fuʿl, fuʿul, fuʿal, fiʿal, faʿala'] },
        { label: 'Uiterste meervoudsvorm', cells: ['twee of drie letters na de alif', 'mafāʿil, fawāʿil, faʿāʾil, faʿālī'] }
      ],
      page: 85
    }
  ],
  sections: [
    { title: 'Geen dualis (alleen ter kennisname)', text: 'Kilā, kiltā, ithnāni, ithnatāni, zawj en shafʿ duiden twee aan, maar niet door een toevoeging.', more: FYI_NL, page: 77 },
    { title: 'Kilā en kiltā (alleen ter kennisname)', text: 'Met een voornaamwoordsuffix sluiten zij aan bij de dualis ("een van beiden of beiden"); met een zichtbaar naamwoord worden zij verbogen als maqṣūr ("beide tuinen gaven hun vruchten").', more: FYI_NL, page: 78 },
    { title: 'Wat geen gezond mannelijk meervoud krijgt (alleen ter kennisname)', text: 'Rajul (geen eigennaam), Zaynab (niet mannelijk), Lāḥiq als naam van een paard (geen redelijk wezen), Ṭalḥa (met tāʾ), Sībawayh (samengesteld); bij afgeleide woorden: murḍiʿ, ʿallāma, aḥmar, ʿaṭshān, ṣabūr.', more: FYI_NL, page: 80 },
    { title: 'Aansluitend bij het gezonde mannelijke meervoud (alleen ter kennisname)', text: 'Ulū en de tientallen hebben geen enkelvoud van dezelfde wortel; banūn, ahlūn, araḍūn, sinūn, wābilūn, ʿālamūn en ʿizūn zijn grondwoorden zonder eigennaam of bijvoeglijke betekenis, zoals in "bezit en zonen", "het aantal jaren" en "boven de werelden".', more: FYI_NL, page: 82 },
    { title: 'Aansluitend bij het gezonde vrouwelijke meervoud (alleen ter kennisname)', text: 'Ulāt, met als enkelvoud in betekenis ṣāḥiba ("en zij die zwanger zijn"); en namen met deze vorm, zoals ʿArafāt en Adhriʿāt, die volgens de juiste opvatting als gezond vrouwelijk meervoud worden behandeld.', more: FYI_NL, page: 83 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Voorwaarden voor de dualis', items: ['enkelvoud', 'verbogen', 'onbepaald', 'met een gelijke'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'Aansluitend bij de dualis', items: ['ithnāni en ithnatāni', 'kilā en kiltā met een voornaamwoordsuffix'], page: 78, origin: 'boek' },
    { kind: 'onderscheid', title: 'Klein en groot aantal', items: ['Klein aantal: drie tot tien.', 'Groot aantal: elf en meer.'], page: 85, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'De dualis voegt alif en nūn of yāʾ en nūn toe; voorwaarden: enkelvoud, verbogen, onbepaald, met een gelijke.',
    'Het gezonde mannelijke meervoud heeft voorwaarden voor grondwoorden en afgeleide woorden, en woorden die erbij aansluiten.',
    'Het gezonde vrouwelijke meervoud voegt alif en tāʾ toe; ulāt en namen als ʿArafāt sluiten erbij aan.',
    'Het gebroken meervoud: klein aantal, groot aantal en de uiterste meervoudsvorm.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welk woord sluit aan bij de dualis?', options: ['ithnāni', 'rajulāni', 'hādhāni', 'kitābāni'], answer: 0, explain: 'Net als ithnatāni, en kilā en kiltā met een voornaamwoordsuffix.', page: 78 },
    { type: 'tf', q: 'Een eigennaam in de dualis blijft bepaald.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij wordt onbepaald en kan al- krijgen.', page: 77 },
    { type: 'mc', q: 'Waarom krijgt "Ṭalḥa" geen gezond mannelijk meervoud?', options: ['vanwege de tāʾ', 'omdat het geen eigennaam is', 'omdat het samengesteld is', 'omdat het geen redelijk wezen is'], answer: 0, explain: 'Een grondwoord moet zonder tāʾ zijn.', page: 80 },
    { type: 'mc', q: 'Wat is het enkelvoud in betekenis van "ulāt"?', options: ['ṣāḥiba', 'ūla', 'waliyya', 'er is geen'], answer: 0, explain: 'Het heeft geen enkelvoud van dezelfde wortel.', page: 83 },
    { type: 'mc', q: 'Welke is een uiterste meervoudsvorm?', options: ['masājid', 'aqlām', 'kutub', 'fitya'], answer: 0, explain: 'Volgens het patroon mafāʿil.', page: 85 }
  ]),
  note: 'Alle lessen van deze eenheid staan in het boek alleen ter kennisname. Oefeningen van het boek op p. 79, 81, 84 en 86. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-arabic', chapter: '17', unit: 4, ar, nl }
