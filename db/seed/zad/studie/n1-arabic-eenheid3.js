// Hoofdstukkaart bij اللغة العربية (١), eenheid 3: الإعراب والبناء (lessen 13–16, boek p. 59–74).
// Volgt de tweede وحدة van het boek. Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand.
// Deze eenheid bevat geen hadith.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (١)، سلسلة زاد العلمية',
  pages: '59–74',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_ArabicLanguage/page/n{p}/mode/1up'
}

const PERSONS = [
  ['ibn-al-qayyim', 'text', [65], 'في تمرين الكتاب قوله: الطريق إلى الله خال من أهل الشك.', 'In een oefening van het boek staat zijn uitspraak: de weg naar Allah is leeg van twijfelaars.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'الإعراب والبناء',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'الإعراب تغير أواخر الكلمات لاختلاف العوامل، والبناء لزوم حالة واحدة؛ والأسماء كلها معربة إلا أنواعًا محصورة، والماضي والأمر مبنيان، والحروف كلها مبنية؛ ثم علامات الإعراب الأصلية والفرعية، والإعراب التقديري في الأسماء والأفعال.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'الوحدة الثانية من الكتاب: موضوعات الدروس الأربعة.',
    root: { label: 'الإعراب والبناء', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'الإعراب والبناء', sub: 'الدرس ١٣', page: 62, children: ['التعريف', 'المبنيات من الأسماء', 'الأفعال والحروف'] },
      { label: 'علامات الإعراب', sub: 'الدرس ١٤', page: 66, children: ['الأصلية', 'جمع المذكر السالم', 'جمع المؤنث السالم'] },
      { label: 'بقية العلامات الفرعية', sub: 'الدرس ١٥', page: 67, children: ['الممنوع من الصرف', 'الأسماء الخمسة', 'المثنى'] },
      { label: 'الإعراب التقديري', sub: 'الدرس ١٦', page: 71, children: ['المقصور', 'المنقوص', 'المضاف إلى ياء المتكلم', 'الأفعال'] }
    ]
  },
  points: [
    { text: 'الإعراب تغير أواخر الكلمات لاختلاف العوامل الداخلة عليها لفظًا أو تقديرًا.', page: 62 },
    { text: 'البناء لزوم آخر الكلمة حالة واحدة مهما تغير العامل.', page: 62 },
    { text: 'الأسماء كلها معربة إلا الضمائر وأسماء الإشارة والموصولة والاستفهام وبعض الظروف وأسماء الأفعال والشرط والأعداد المركبة.', page: 63 },
    { text: 'الماضي والأمر مبنيان دائمًا، والمضارع معرب ويبنى في حالين، والحروف كلها مبنية.', page: 64 },
    { text: 'العلامات الأصلية: الضمة للرفع، والفتحة للنصب، والكسرة للجر، والسكون للجزم.', page: 66 },
    { text: 'المثنى وجمع المذكر السالم والأسماء الخمسة تعرب بعلامات فرعية دائمًا.', page: 69 },
    { text: 'جمع المؤنث السالم ينصب بالكسرة، والممنوع من الصرف يجر بالفتحة.', page: 67 },
    { text: 'تقدر العلامات في المقصور للتعذر، وفي المنقوص للثقل، وفي المضاف إلى ياء المتكلم لحركة المناسبة.', page: 73 }
  ],
  terms: [
    { term: 'الإعراب', translit: 'al-iʿrāb', meaning: 'تغير أواخر الكلمات لاختلاف العوامل الداخلة عليها لفظًا أو تقديرًا.', explanation: '', notes: [], page: 62 },
    { term: 'البناء', translit: 'al-bināʾ', meaning: 'لزوم آخر الكلمة حالة واحدة مهما تغير العامل.', explanation: '', notes: [], page: 62 },
    { term: 'العامل', translit: 'al-ʿāmil', meaning: 'ما يعمل في الكلمة الرفع أو النصب أو الجر أو الجزم.', explanation: '', notes: [], page: 62 },
    { term: 'الممنوع من الصرف', translit: 'al-mamnūʿ min aṣ-ṣarf', meaning: 'اسم يجر بالفتحة نيابة عن الكسرة.', explanation: 'كيعقوب وإبراهيم.', notes: [], page: 67 },
    { term: 'الإعراب التقديري', translit: 'al-iʿrāb at-taqdīrī', meaning: 'إعراب بعلامات لا تظهر على آخر الكلمة.', explanation: 'في المقصور والمنقوص والمضاف إلى ياء المتكلم وبعض الأفعال.', notes: [], page: 71 },
    { term: 'حركة المناسبة', translit: 'ḥarakat al-munāsaba', meaning: 'الكسرة قبل ياء المتكلم.', explanation: 'سبب تقدير العلامات في المضاف إلى ياء المتكلم.', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'المبنيات من الأسماء',
      intro: 'كما في الدرس الثالث عشر.',
      nodes: [
        { label: 'الضمائر', sub: 'هو، أنت، أنا', page: 63 },
        { label: 'أسماء الإشارة', sub: 'هذا، هذه، أولئك', page: 63 },
        { label: 'الأسماء الموصولة', sub: 'الذي، التي، الذين', page: 63 },
        { label: 'أسماء الاستفهام', sub: 'من، أين، متى', page: 63 },
        { label: 'بعض الظروف', sub: 'إذا، الآن، حيث، أمس', page: 63 },
        { label: 'أسماء الأفعال', sub: 'آمين، أف، هيهات', page: 63 },
        { label: 'أسماء الشرط', sub: 'من، متى، كيفما', page: 63 },
        { label: 'الأعداد المركبة', sub: 'أحد عشر، تسعة عشر', page: 64 }
      ]
    },
    {
      type: 'compare',
      title: 'الأسماء المعربة وعلاماتها',
      intro: 'جدول الكتاب.',
      columns: ['الرفع', 'النصب', 'الجر'],
      rows: [
        { label: 'المفرد وجمع التكسير', cells: ['الضمة', 'الفتحة', 'الكسرة'] },
        { label: 'جمع المؤنث السالم', cells: ['الضمة', 'الكسرة', 'الكسرة'] },
        { label: 'الممنوع من الصرف', cells: ['الضمة', 'الفتحة', 'الفتحة'] },
        { label: 'المثنى', cells: ['الألف', 'الياء', 'الياء'] },
        { label: 'جمع المذكر السالم', cells: ['الواو', 'الياء', 'الياء'] },
        { label: 'الأسماء الخمسة', cells: ['الواو', 'الألف', 'الياء'] }
      ],
      page: 69
    },
    {
      type: 'compare',
      title: 'الإعراب التقديري',
      intro: 'كما في الدرس السادس عشر.',
      columns: ['ما يقدر', 'السبب', 'مثاله'],
      rows: [
        { label: 'المقصور', cells: ['الحركات الثلاث', 'التعذر', 'قتل الفتى الأفعى بالعصا'] },
        { label: 'المنقوص', cells: ['الضمة والكسرة', 'الثقل', 'سأل القاضي المحاميَ عن الجاني'] },
        { label: 'المضاف إلى ياء المتكلم', cells: ['الحركات الثلاث', 'حركة المناسبة', 'دعا جدي أستاذي'] },
        { label: 'المضارع المعتل', cells: ['الضمة، والفتحة في المعتل بالألف', 'التعذر في الألف والثقل في الواو والياء', 'يسعى، يدعو، يقضي'] }
      ],
      page: 71
    }
  ],
  sections: [
    { title: 'المعرب والمبني من الأسماء', text: 'المعرب يتغير آخره بتغير العوامل: جاء المدرسُ، سألت المدرسَ، سلمت على المدرسِ؛ والمبني لا يتغير: جاء هؤلاءِ، سألت هؤلاءِ، سلمت على هؤلاءِ.', more: '', page: 62 },
    { title: 'ما يستثنى من المبنيات', text: 'هذان وهاتان من أسماء الإشارة، واللذان واللتان من الموصولة: معربة؛ والجزء الأول من اثني عشر معرب: «إن عدة الشهور عند الله اثنا عشر شهرًا».', more: '', page: 63 },
    { title: 'من أمثلة العلامات الفرعية', text: '«لا يتخذ المؤمنون الكافرين»: المؤمنون فاعل مرفوع بالواو، والكافرين مفعول به منصوب بالياء؛ «إن المسلمين والمسلمات»: المسلمات منصوب بالكسرة؛ «ويرث من آل يعقوب»: يعقوب مجرور بالفتحة.', more: '', page: 66 },
    { title: 'الخلاصة في العلامات', text: 'يعرب بعلامة أصلية: المفرد وجمع التكسير دائمًا، وجمع المؤنث السالم رفعًا وجرًا، والممنوع من الصرف رفعًا ونصبًا؛ وبعلامة فرعية: المثنى وجمع المذكر السالم والأسماء الخمسة دائمًا، وجمع المؤنث السالم نصبًا، والممنوع من الصرف جرًا.', more: '', page: 69 },
    { title: 'المنقوص المنون', text: 'إذا كان المنقوص منونًا حذفت ياؤه مع بقاء التنوين: ذهب قاضٍ إلى محامٍ.', more: '', page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الإعراب والبناء', items: ['الإعراب: تغير أواخر الكلمات لاختلاف العوامل.', 'البناء: لزوم آخر الكلمة حالة واحدة.'], page: 62, origin: 'boek' },
    { kind: 'opsomming', title: 'علامات الإعراب الأصلية', items: ['الضمة للرفع', 'الفتحة للنصب', 'الكسرة للجر', 'السكون للجزم'], page: 66, origin: 'boek' },
    { kind: 'uitzondering', title: 'معربات بين المبنيات', items: ['هذان وهاتان', 'اللذان واللتان', 'الجزء الأول من اثني عشر'], page: 63, origin: 'boek' },
    { kind: 'onderscheid', title: 'التعذر والثقل', items: ['التعذر: يستحيل ظهور الحركة، كما في المقصور.', 'الثقل: يصعب النطق بها، كما في المنقوص.'], page: 73, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الإعراب تغير الأواخر بالعوامل، والبناء لزوم حالة واحدة.',
    'الأسماء معربة إلا أنواعًا محصورة، والحروف كلها مبنية.',
    'للإعراب علامات أصلية وفرعية.',
    'تقدر العلامات في المقصور والمنقوص والمضاف إلى ياء المتكلم وبعض الأفعال.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما البناء؟', options: ['لزوم آخر الكلمة حالة واحدة', 'تغير أواخر الكلمات', 'حذف آخر الكلمة', 'تنوين الكلمة'], answer: 0, explain: 'مهما تغير العامل.', page: 62 },
    { type: 'mc', q: 'أي هذه معرب؟', options: ['هذان', 'هذا', 'الذي', 'أين'], answer: 0, explain: 'هذان وهاتان معربان.', page: 63 },
    { type: 'mc', q: 'بم ينصب جمع المؤنث السالم؟', options: ['بالكسرة', 'بالفتحة', 'بالياء', 'بالألف'], answer: 0, explain: 'نيابة عن الفتحة.', page: 67 },
    { type: 'mc', q: 'بم يجر الممنوع من الصرف؟', options: ['بالفتحة', 'بالكسرة', 'بالياء', 'بالسكون'], answer: 0, explain: 'نيابة عن الكسرة.', page: 67 },
    { type: 'tf', q: 'تظهر الفتحة على الاسم المنقوص.', options: ['صواب', 'خطأ'], answer: 0, explain: 'تقدر الضمة والكسرة وتظهر الفتحة.', page: 72 },
    { type: 'tf', q: 'تقدر الحركات في المقصور للثقل.', options: ['صواب', 'خطأ'], answer: 1, explain: 'للتعذر؛ والثقل في المنقوص.', page: 73 }
  ]),
  note: 'نشاط الكتاب في الصفحات ٦٥ و٧٠ و٧٤.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Verbuiging en vastheid',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Verbuiging (iʿrāb) is de verandering van het woordeinde door de werkende factoren; vastheid (bināʾ) is één vaste toestand. Naamwoorden worden verbogen, op een beperkt aantal soorten na; de verleden tijd en de gebiedende wijs zijn vast, net als alle partikels. Daarna de oorspronkelijke en vervangende naamvalstekens, en de veronderstelde verbuiging bij naamwoorden en werkwoorden.',
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De tweede eenheid van het boek: de onderwerpen van de vier lessen.',
    root: { label: 'Verbuiging en vastheid', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Verbuiging en vastheid', sub: 'les 13', page: 62, children: ['definitie', 'vaste naamwoorden', 'werkwoorden en partikels'] },
      { label: 'Naamvalstekens', sub: 'les 14', page: 66, children: ['oorspronkelijke', 'gezond mannelijk meervoud', 'gezond vrouwelijk meervoud'] },
      { label: 'Overige vervangende tekens', sub: 'les 15', page: 67, children: ['diptoten', 'de vijf naamwoorden', 'de dualis'] },
      { label: 'Veronderstelde verbuiging', sub: 'les 16', page: 71, children: ['maqṣūr', 'manqūṣ', 'met de yāʾ van de spreker', 'werkwoorden'] }
    ]
  },
  points: [
    { text: 'Verbuiging is de verandering van het woordeinde door de werkende factoren, zichtbaar of verondersteld.', page: 62 },
    { text: 'Vastheid is dat het woordeinde in één toestand blijft, wat de werkende factor ook is.', page: 62 },
    { text: 'Alle naamwoorden worden verbogen, behalve voornaamwoorden, aanwijzende, betrekkelijke en vragende naamwoorden, sommige bijwoorden, werkwoordsnamen, voorwaardelijke naamwoorden en samengestelde getallen.', page: 63 },
    { text: 'De verleden tijd en de gebiedende wijs zijn altijd vast, de onvoltooide tijd wordt verbogen behalve in twee gevallen, en alle partikels zijn vast.', page: 64 },
    { text: 'De oorspronkelijke tekens: u voor de nominatief, a voor de accusatief, i voor de genitief en geen klinker voor de jussief.', page: 66 },
    { text: 'De dualis, het gezonde mannelijke meervoud en de vijf naamwoorden hebben altijd vervangende tekens.', page: 69 },
    { text: 'Het gezonde vrouwelijke meervoud krijgt in de accusatief een i, de diptoot in de genitief een a.', page: 67 },
    { text: 'Verondersteld zijn de tekens bij de maqṣūr (onmogelijk), de manqūṣ (zwaarte) en het naamwoord met de yāʾ van de spreker (aanpassingsklinker).', page: 73 }
  ],
  terms: [
    { term: 'الإعراب', translit: 'al-iʿrāb', meaning: 'Verbuiging: de verandering van het woordeinde door de werkende factoren, zichtbaar of verondersteld.', explanation: '', notes: [], page: 62 },
    { term: 'البناء', translit: 'al-bināʾ', meaning: 'Vastheid: het woordeinde blijft in één toestand, wat de werkende factor ook is.', explanation: '', notes: [], page: 62 },
    { term: 'العامل', translit: 'al-ʿāmil', meaning: 'Werkende factor: wat in een woord de nominatief, accusatief, genitief of jussief bewerkt.', explanation: '', notes: [], page: 62 },
    { term: 'الممنوع من الصرف', translit: 'al-mamnūʿ min aṣ-ṣarf', meaning: 'Diptoot: naamwoord dat in de genitief een a krijgt in plaats van een i.', explanation: 'Zoals Yaʿqūb en Ibrāhīm.', notes: [], page: 67 },
    { term: 'الإعراب التقديري', translit: 'al-iʿrāb at-taqdīrī', meaning: 'Veronderstelde verbuiging: met tekens die niet zichtbaar zijn op het woordeinde.', explanation: 'Bij maqṣūr, manqūṣ, het naamwoord met de yāʾ van de spreker en sommige werkwoorden.', notes: [], page: 71 },
    { term: 'حركة المناسبة', translit: 'ḥarakat al-munāsaba', meaning: 'Aanpassingsklinker: de i vóór de yāʾ van de spreker.', explanation: 'Daardoor zijn de tekens verondersteld bij het naamwoord met die yāʾ.', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'Vaste naamwoorden',
      intro: 'Zoals in les 13.',
      nodes: [
        { label: 'Voornaamwoorden', sub: 'huwa, anta, anā', page: 63 },
        { label: 'Aanwijzende naamwoorden', sub: 'hādhā, hādhihi, ulāʾika', page: 63 },
        { label: 'Betrekkelijke naamwoorden', sub: 'alladhī, allatī, alladhīna', page: 63 },
        { label: 'Vragende naamwoorden', sub: 'man, ayna, matā', page: 63 },
        { label: 'Sommige bijwoorden', sub: 'idhā, al-āna, ḥaythu, amsi', page: 63 },
        { label: 'Werkwoordsnamen', sub: 'āmīn, uff, hayhāta', page: 63 },
        { label: 'Voorwaardelijke naamwoorden', sub: 'man, matā, kayfamā', page: 63 },
        { label: 'Samengestelde getallen', sub: 'aḥada ʿashara, tisʿata ʿashara', page: 64 }
      ]
    },
    {
      type: 'compare',
      title: 'Verbogen naamwoorden en hun tekens',
      intro: 'De tabel van het boek.',
      columns: ['Nominatief', 'Accusatief', 'Genitief'],
      rows: [
        { label: 'Enkelvoud en gebroken meervoud', cells: ['u', 'a', 'i'] },
        { label: 'Gezond vrouwelijk meervoud', cells: ['u', 'i', 'i'] },
        { label: 'Diptoot', cells: ['u', 'a', 'a'] },
        { label: 'Dualis', cells: ['alif', 'yāʾ', 'yāʾ'] },
        { label: 'Gezond mannelijk meervoud', cells: ['wāw', 'yāʾ', 'yāʾ'] },
        { label: 'De vijf naamwoorden', cells: ['wāw', 'alif', 'yāʾ'] }
      ],
      page: 69
    },
    {
      type: 'compare',
      title: 'Veronderstelde verbuiging',
      intro: 'Zoals in les 16.',
      columns: ['Wat verondersteld is', 'Reden', 'Voorbeeld'],
      rows: [
        { label: 'Maqṣūr', cells: ['alle drie', 'onmogelijk', 'qatala l-fatā l-afʿā bi-l-ʿaṣā'] },
        { label: 'Manqūṣ', cells: ['u en i', 'zwaarte', 'saʾala l-qāḍī l-muḥāmiya'] },
        { label: 'Met de yāʾ van de spreker', cells: ['alle drie', 'aanpassingsklinker', 'daʿā jaddī ustādhī'] },
        { label: 'Zwakke onvoltooide tijd', cells: ['u, en a bij de alif', 'onmogelijk bij alif, zwaarte bij wāw en yāʾ', 'yasʿā, yadʿū, yaqḍī'] }
      ],
      page: 71
    }
  ],
  sections: [
    { title: 'Verbogen en vaste naamwoorden', text: 'Het verbogen naamwoord verandert met de werkende factor: jāʾa l-mudarrisu, saʾaltu l-mudarrisa, sallamtu ʿalā l-mudarrisi. Het vaste niet: jāʾa hāʾulāʾi, saʾaltu hāʾulāʾi, sallamtu ʿalā hāʾulāʾi.', more: '', page: 62 },
    { title: 'Uitzonderingen op de vaste naamwoorden', text: 'Hādhāni en hātāni, alladhāni en allatāni worden verbogen; het eerste deel van ithnā ʿashar ook: "het aantal maanden bij Allah is twaalf" (at-Tawba 9:36).', more: '', page: 63 },
    { title: 'Voorbeelden van vervangende tekens', text: '"Laat de gelovigen niet de ongelovigen nemen": al-muʾminūna is onderwerp met wāw, al-kāfirīna lijdend voorwerp met yāʾ. "De moslimmannen en moslimvrouwen": al-muslimāti in de accusatief met i. "En erft van de familie van Yaʿqūb": Yaʿqūba in de genitief met a.', more: '', page: 66 },
    { title: 'Samenvatting van de tekens', text: 'Oorspronkelijke tekens: enkelvoud en gebroken meervoud altijd, gezond vrouwelijk meervoud in nominatief en genitief, diptoot in nominatief en accusatief. Vervangende tekens: dualis, gezond mannelijk meervoud en de vijf naamwoorden altijd, gezond vrouwelijk meervoud in de accusatief, diptoot in de genitief.', more: '', page: 69 },
    { title: 'De manqūṣ met nunatie', text: 'Heeft de manqūṣ nunatie, dan valt de yāʾ weg en blijft de nunatie: dhahaba qāḍin ilā muḥāmin.', more: '', page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Verbuiging en vastheid', items: ['Verbuiging: het woordeinde verandert door de werkende factoren.', 'Vastheid: het woordeinde blijft in één toestand.'], page: 62, origin: 'boek' },
    { kind: 'opsomming', title: 'Oorspronkelijke naamvalstekens', items: ['u voor de nominatief', 'a voor de accusatief', 'i voor de genitief', 'geen klinker voor de jussief'], page: 66, origin: 'boek' },
    { kind: 'uitzondering', title: 'Verbogen tussen de vaste', items: ['hādhāni en hātāni', 'alladhāni en allatāni', 'het eerste deel van ithnā ʿashar'], page: 63, origin: 'boek' },
    { kind: 'onderscheid', title: 'Onmogelijkheid en zwaarte', items: ['Onmogelijk: de klinker kan niet zichtbaar worden, zoals bij de maqṣūr.', 'Zwaarte: de klinker is moeilijk uit te spreken, zoals bij de manqūṣ.'], page: 73, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Verbuiging is verandering van het woordeinde, vastheid is één toestand.',
    'Naamwoorden worden verbogen op een beperkt aantal soorten na; alle partikels zijn vast.',
    'Er zijn oorspronkelijke en vervangende naamvalstekens.',
    'Bij maqṣūr, manqūṣ, het naamwoord met de yāʾ van de spreker en sommige werkwoorden zijn de tekens verondersteld.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is vastheid (bināʾ)?', options: ['het woordeinde blijft in één toestand', 'het woordeinde verandert', 'het woordeinde valt weg', 'nunatie'], answer: 0, explain: 'Wat de werkende factor ook is.', page: 62 },
    { type: 'mc', q: 'Welke van deze wordt verbogen?', options: ['hādhāni', 'hādhā', 'alladhī', 'ayna'], answer: 0, explain: 'Hādhāni en hātāni worden verbogen.', page: 63 },
    { type: 'mc', q: 'Welk teken krijgt het gezonde vrouwelijke meervoud in de accusatief?', options: ['i', 'a', 'yāʾ', 'alif'], answer: 0, explain: 'In plaats van a.', page: 67 },
    { type: 'mc', q: 'Welk teken krijgt de diptoot in de genitief?', options: ['a', 'i', 'yāʾ', 'geen klinker'], answer: 0, explain: 'In plaats van i.', page: 67 },
    { type: 'tf', q: 'Bij de manqūṣ is de a zichtbaar.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'De u en de i zijn verondersteld, de a is zichtbaar.', page: 72 },
    { type: 'tf', q: 'Bij de maqṣūr zijn de klinkers verondersteld vanwege zwaarte.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Vanwege onmogelijkheid; zwaarte geldt voor de manqūṣ.', page: 73 }
  ]),
  note: 'Oefeningen van het boek op p. 65, 70 en 74. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-arabic', chapter: '13', unit: 3, ar, nl }
