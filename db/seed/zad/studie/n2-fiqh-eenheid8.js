// Hoofdstukkaart bij الفقه (٢), eenheid 8: أهل الزكاة وزكاة الفطر (lessen 33–36, boek p. 105–112).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Niet overgenomen: «اقضوا الله فالله أحق بالوفاء» (p. 107), omdat het boek hem naar analogie
// gebruikt buiten zijn eigen onderwerp; het bericht zonder bron over ʿUthmān en de ongeboren vrucht
// (p. 109). Over "op de weg van Allah" spreekt het boek zich op p. 106 en p. 107 verschillend uit; de
// kaart geeft beide weer.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '105–112',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'تؤخذ من أغنيائهم وترد على فقرائهم', takhrij: 'متفق عليه', note: 'دليل أنه لا يشترط استيعاب الأصناف الثمانية.', pages: [106], nl: 'Zij wordt van hun rijken genomen en aan hun armen teruggegeven', nlNote: 'Bewijs dat niet alle acht groepen iets hoeven te krijgen.' },
  { narrator: '', text: 'تعجل من عمه العباس صدقة سنتين', takhrij: 'أبو داود وحسنه الألباني', note: 'جواز تعجيل الزكاة قبل الحول. ' + FYI_NOTE, pages: [107], nl: 'Hij nam van zijn oom al-ʿAbbās de zakaat van twee jaar vooruit', nlNote: 'Zakaat mag vóór het eind van het jaar gegeven worden. ' + FYI_NOTE_NL },
  { narrator: '', text: 'زوجك وولدك أحق من تصدقت عليهم', takhrij: 'رواه البخاري', note: 'قاله لامرأة ابن مسعود؛ يجوز للمرأة الغنية إعطاء زوجها. ' + FYI_NOTE, pages: [107], nl: 'Je man en je kind hebben het meeste recht op wat je geeft', nlNote: 'Gezegd tegen de vrouw van Ibn Masʿūd; een rijke vrouw mag zakaat aan haar man geven. ' + FYI_NOTE_NL },
  { narrator: 'عبد الله بن عمر', text: 'فرض رسول الله ﷺ صدقة الفطر من رمضان صاعا من تمر أو صاعا من شعير، على العبد والحر، والذكر والأنثى، والصغير والكبير من المسلمين', takhrij: 'متفق عليه', note: '', pages: [109], nl: 'De Boodschapper van Allah ﷺ legde de gave bij het einde van Ramaḍān op: een ṣāʿ dadels of een ṣāʿ gerst, voor slaaf en vrije, man en vrouw, jong en oud onder de moslims', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'فرض رسول الله ﷺ زكاة الفطر طهرة للصائم من اللغو والرفث، وطعمة للمساكين، من أداها قبل الصلاة فهي زكاة مقبولة، ومن أداها بعد الصلاة فهي صدقة من الصدقات', takhrij: 'أبو داود وابن ماجه وحسنه الألباني', note: 'حكمة زكاة الفطر، ووقت إخراجها.', pages: [110, 111], nl: 'De Boodschapper van Allah ﷺ legde zakāt al-fiṭr op als reiniging voor de vastende van ijdel en onbetamelijk gepraat, en als voedsel voor de armen. Wie haar vóór het gebed geeft, voor hem is het een aanvaarde zakaat; wie haar na het gebed geeft, voor hem is het een gewone gift', nlNote: 'De wijsheid van zakāt al-fiṭr, en wanneer je haar geeft.' },
  { narrator: 'أبو سعيد الخدري', text: 'كنا نخرج يوم الفطر في عهد رسول الله ﷺ صاعا من طعام، وكان طعامنا الشعير والزبيب والأقط والتمر', takhrij: 'رواه البخاري', note: 'الأقط: لبن مجفف يابس.', pages: [110], nl: 'In de tijd van de Boodschapper van Allah ﷺ gaven wij op de dag van het Suikerfeest een ṣāʿ voedsel, en ons voedsel was gerst, rozijnen, gedroogde melk en dadels', nlNote: 'Aqiṭ: gedroogde, harde melk.' },
  { narrator: '', text: 'من أحدث في أمرنا هذا ما ليس منه فهو رد', takhrij: 'متفق عليه', note: 'من أدلة عدم إجزاء القيمة في زكاة الفطر.', pages: [110], nl: 'Wie in deze zaak van ons iets nieuws invoert wat er niet bij hoort, het wordt afgewezen', nlNote: 'Een van de bewijzen dat geld in plaats van voedsel niet volstaat.' },
  { narrator: 'عبد الله بن عمر', text: 'أن النبي ﷺ أمر بزكاة الفطر قبل خروج الناس إلى الصلاة', takhrij: 'البخاري ومسلم', note: 'وقت الفضيلة.', pages: [111], nl: 'De Profeet ﷺ droeg op zakāt al-fiṭr te geven voordat de mensen naar het gebed gingen', nlNote: 'De beste tijd.' },
  { narrator: 'عبد الله بن عمر', text: '…وكانوا يعطون قبل الفطر بيوم أو يومين', takhrij: 'رواه البخاري', note: 'وقت الجواز.', pages: [111], nl: '…en zij gaven haar een of twee dagen vóór het Suikerfeest', nlNote: 'De tijd waarin het mag.' }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan',
  'رواه البخاري': 'al-Bukhārī',
  'أبو داود وابن ماجه وحسنه الألباني': 'Abū Dāwūd en Ibn Māja; al-Albānī noemde hem ḥasan',
  'البخاري ومسلم': 'al-Bukhārī en Muslim'
}
const NARRATOR_NL = { 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī' }

const PERSONS = [
  ['al-abbas-ibn-abd-al-muttalib', 'text', [107], 'عم النبي ﷺ، تعجل منه صدقة سنتين.', 'Oom van de Profeet ﷺ; hij nam van hem de zakaat van twee jaar vooruit.'],
  ['zaynab-imraat-ibn-masud', 'text', [107], 'قال لها النبي ﷺ: «زوجك وولدك أحق من تصدقت عليهم».', 'De Profeet ﷺ zei tegen haar: "Je man en je kind hebben het meeste recht op wat je geeft."'],
  ['ibn-masud', 'text', [107], 'كانت امرأته تتصدق عليه وعلى ولده.', 'Zijn vrouw gaf aan hem en zijn kind.'],
  ['ibn-umar', 'text', [109, 111], 'روى فرض صدقة الفطر ووقت إخراجها.', 'Overleverde de plicht van zakāt al-fiṭr en wanneer je haar geeft.'],
  ['ibn-abbas', 'text', [110], 'روى أن زكاة الفطر طهرة للصائم وطعمة للمساكين.', 'Overleverde dat zakāt al-fiṭr een reiniging voor de vastende en voedsel voor de armen is.'],
  ['abu-said-al-khudri', 'text', [110], 'روى أنهم كانوا يخرجون صاعًا من طعام.', 'Overleverde dat zij een ṣāʿ voedsel gaven.'],
  ['ibn-uthaymin', 'text', [111, 112], 'قال: كل ما كان قوتًا فهو مجزئ، والصحيح أن مصرفها للفقراء فقط.', 'Zei: al wat basisvoedsel is volstaat, en volgens de juiste mening gaat zij alleen naar de armen.']
]

const ar = {
  scope: 'unit',
  unit: 8,
  title: 'أهل الزكاة وزكاة الفطر',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'الأصناف الثمانية المستحقون للزكاة، وأنه لا يشترط استيعابها، ونقل الزكاة، ومسائل في إخراجها، ثم زكاة الفطر: حكمها وعلى من تجب وحكمتها ومقدارها وحكم القيمة ووقتها ومصرفها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثامنة في خريطة واحدة',
    intro: 'لمن تدفع الزكاة، ثم زكاة الفطر.',
    root: { label: 'أهل الزكاة وزكاة الفطر', sub: 'الوحدة الثامنة' },
    nodes: [
      { label: 'المستحقون للزكاة', sub: 'الدرس ٣٣', page: 105, children: ['الأصناف الثمانية', 'لا يشترط الاستيعاب', 'نقل الزكاة'] },
      { label: 'مسائل في إخراجها', sub: 'الدرس ٣٤', page: 107, children: ['التعجيل والتأخير', 'الزوج والزوجة', 'ما لا تصرف فيه'] },
      { label: 'زكاة الفطر', sub: 'الدرس ٣٥', page: 109, children: ['فريضة', 'صاع من قوت البلد', 'حكم القيمة'] },
      { label: 'وقت إخراجها', sub: 'الدرس ٣٦', page: 111, children: ['وقت الوجوب', 'الفضيلة والجواز', 'بعد الصلاة'] }
    ]
  },
  points: [
    { text: 'أهل الزكاة ثمانية أصناف ذكرهم الله في سورة التوبة، ولا يجوز صرفها لغيرهم.', page: 105 },
    { text: 'يعطى الفقير والمسكين ما يكفيهما سنة كاملة.', page: 105 },
    { text: 'العامل عليها والغارم لإصلاح ذات البين يعطيان ولو كانا غنيين.', page: 105 },
    { text: 'لا يشترط استيعاب الأصناف الثمانية على الصحيح، ويجوز نقل الزكاة لبلد آخر للحاجة.', page: 106 },
    { text: 'زكاة الفطر فريضة على كل مسلم يجد ما يفضل عن قوته وقوت عياله يوم العيد وليلته، عن نفسه ومن تلزمه نفقته.', page: 109 },
    { text: 'مقدارها صاع من غالب قوت أهل البلد.', page: 110 },
    { text: 'لا يجزئ إخراج القيمة في زكاة الفطر عند أكثر العلماء.', page: 110 },
    { text: 'تجب بغروب شمس ليلة العيد، وأفضل وقتها قبل صلاة العيد، ويجوز قبله بيوم أو يومين.', page: 111 }
  ],
  terms: [
    { term: 'الفقير', translit: 'al-faqīr', meaning: 'من لا يجد شيئًا أو يجد أقل من نصف كفايته.', explanation: '', notes: [], page: 105 },
    { term: 'المسكين', translit: 'al-miskīn', meaning: 'من يجد نصف كفايته أو أكثر ولا يجد تمامها.', explanation: '', notes: [], page: 105 },
    { term: 'العاملون عليها', translit: 'al-ʿāmilūn ʿalayhā', meaning: 'من يبعثهم الإمام لجباية الصدقات.', explanation: '', notes: [], page: 105 },
    { term: 'المؤلفة قلوبهم', translit: 'al-muʾallafa qulūbuhum', meaning: 'من يعطى تأليفًا على الإسلام أو تثبيتًا للإيمان أو كفًّا للأذى.', explanation: '', notes: [], page: 105 },
    { term: 'في الرقاب', translit: 'fī ar-riqāb', meaning: 'عتق العبد المسلم أو الأمة، ويدخل فكاك الأسير المسلم.', explanation: '', notes: [], page: 105 },
    { term: 'الغارمون', translit: 'al-ghārimūn', meaning: 'المدينون في غير معصية، لأنفسهم أو لإصلاح ذات البين.', explanation: '', notes: [], page: 105 },
    { term: 'ابن السبيل', translit: 'ibn as-sabīl', meaning: 'المسافر المنقطع عن بلده المحتاج إلى ما يوصله، ولو كان غنيًّا في بلده.', explanation: '', notes: [], page: 106 },
    { term: 'زكاة الفطر', translit: 'zakāt al-fiṭr', meaning: 'سميت لأنها تجب بالفطر من رمضان.', explanation: '', notes: [], page: 109 },
    { term: 'الأقط', translit: 'al-aqiṭ', meaning: 'لبن مجفف يابس.', explanation: '', notes: [], page: 110 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الأصناف الثمانية',
      intro: 'كما في الآية ٦٠ من سورة التوبة والدرس الثالث والثلاثين.',
      columns: ['من هم'],
      rows: [
        { label: 'الفقراء', cells: ['لا يجدون شيئًا أو أقل من نصف الكفاية'] },
        { label: 'المساكين', cells: ['يجدون نصف الكفاية أو أكثر'] },
        { label: 'العاملون عليها', cells: ['جباة الصدقات ولو كانوا أغنياء'] },
        { label: 'المؤلفة قلوبهم', cells: ['تأليفًا على الإسلام أو تثبيتًا للإيمان'] },
        { label: 'في الرقاب', cells: ['عتق الرقاب وفكاك الأسرى'] },
        { label: 'الغارمون', cells: ['المدينون في غير معصية'] },
        { label: 'في سبيل الله', cells: ['الغزاة'] },
        { label: 'ابن السبيل', cells: ['المسافر المنقطع'] }
      ],
      page: 105
    },
    {
      type: 'steps',
      title: 'أوقات زكاة الفطر',
      intro: 'كما في الدرس السادس والثلاثين.',
      nodes: [
        { label: 'وقت الجواز', sub: 'قبل العيد بيوم أو يومين' },
        { label: 'وقت الوجوب', sub: 'غروب الشمس ليلة العيد' },
        { label: 'وقت الفضيلة', sub: 'من فجر العيد إلى قبيل الصلاة' },
        { label: 'بعد الصلاة', sub: 'صدقة من الصدقات ويأثم إلا لعذر' }
      ],
      page: 111
    }
  ],
  sections: [
    { title: 'في سبيل الله', text: 'يعطى منه الغزاة أغنياء كانوا أو فقراء؛ ويقول الكتاب في الدرس الثالث والثلاثين إنه يدخل فيهم طلاب العلم والدعاة، ثم يقول في الدرس الرابع والثلاثين إن هذا المصرف خاص بالجهاد وما يعين عليه في قول عامة المفسرين والفقهاء، فلا تصرف الزكاة في بناء المساجد والمدارس والمستشفيات والطرق.', page: 106 },
    { title: 'نقل الزكاة', text: 'يجوز للحاجة، كأن يكون البلد الآخر أشد فقرًا، أو يكون للمزكي فيه أقارب فقراء فتجتمع الصدقة والصلة.', page: 106 },
    { title: 'مسائل في إخراج الزكاة (للاطلاع فقط)', text: 'لا يجوز تأخيرها إلا لحاجة، ويجوز تعجيلها، وتخرج من مال الميت قبل قسمة التركة، ولا تحسب منها الرسوم والضرائب، وتجب في مال الصغير والمجنون على الصحيح، ولا زكاة في أموال الصناديق التعاونية ولا المؤسسات الخيرية.', more: FYI, page: 107 },
    { title: 'على من تجب زكاة الفطر', text: 'يخرجها المسلم عن نفسه وعمن تلزمه نفقته من الزوجة والأبناء والأقارب، ويستحب إخراجها عن الجنين إذا نفخت فيه الروح.', page: 109 },
    { title: 'حكم إخراج القيمة', text: 'لا يجزئ عند أكثر العلماء: لأن العبادات توقيفية، ولأن الصحابة أخرجوها طعامًا مع وجود النقود، ولمناسبة الطعام لعبادة الصوم.', page: 110 },
    { title: 'ما يخرج في زكاة الفطر', text: 'من قوت أهل البلد، قمحًا أو أرزًا أو غيرهما؛ وقال ابن عثيمين: كل ما كان قوتًا من حب وثمر ولحم ونحوها فهو مجزئ، والمقصود سد حاجة المساكين يوم العيد.', page: 111 },
    { title: 'مسائل في زكاة الفطر (للاطلاع فقط)', text: 'يجوز التوكيل في إخراجها طعامًا، ومصرفها للفقراء والمساكين على الصحيح، وتجب على الفقير إذا فضل عنده شيء عن قوت يوم العيد وليلته، ولا تعطى للكافر بالإجماع.', more: FYI, page: 112 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أهل الزكاة', items: ['الفقراء', 'المساكين', 'العاملون عليها', 'المؤلفة قلوبهم', 'في الرقاب', 'الغارمون', 'في سبيل الله', 'ابن السبيل'], page: 105, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شروط وجوب زكاة الفطر', items: ['الإسلام', 'أن يجد ما يفضل عن قوته وقوت عياله وحوائجه الأصلية يوم العيد وليلته'], page: 109, origin: 'boek' },
    { kind: 'opsomming', title: 'حكمة زكاة الفطر', items: ['طهرة للصائم من اللغو والرفث', 'طعمة للمساكين'], page: 110, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'أهل الزكاة ثمانية أصناف، ولا يشترط استيعابهم.',
    'يعطى الفقير والمسكين كفاية سنة، والعامل والغارم للإصلاح ولو كانا غنيين.',
    'زكاة الفطر صاع من قوت البلد عن كل مسلم.',
    'لا تجزئ القيمة في زكاة الفطر عند أكثر العلماء.',
    'تخرج قبل صلاة العيد، ويجوز قبله بيوم أو يومين.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'كم عدد أصناف أهل الزكاة؟', options: ['ثمانية', 'خمسة', 'سبعة', 'عشرة'], answer: 0, explain: 'آية التوبة ٦٠.', page: 105 },
    { type: 'tf', q: 'يشترط استيعاب الأصناف الثمانية عند إخراج الزكاة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يجزئ دفعها لأي صنف على الصحيح.', page: 106 },
    { type: 'mc', q: 'من الذي يعطى من الزكاة وإن كان غنيًّا؟', options: ['العامل عليها', 'الفقير', 'المسكين', 'لا أحد'], answer: 0, explain: 'وكذلك الغارم لإصلاح ذات البين.', page: 105 },
    { type: 'tf', q: 'يجوز للمرأة الغنية أن تعطي زكاتها لزوجها الفقير.', options: ['صواب', 'خطأ'], answer: 0, explain: '«زوجك وولدك أحق من تصدقت عليهم».', page: 107 },
    { type: 'mc', q: 'كم مقدار زكاة الفطر عن الشخص؟', options: ['صاع من قوت البلد', 'نصف صاع', 'درهم', 'صاعان'], answer: 0, explain: 'حديث ابن عمر.', page: 110 },
    { type: 'mc', q: 'متى تجب زكاة الفطر؟', options: ['بغروب شمس ليلة العيد', 'بطلوع فجر رمضان', 'بعد صلاة العيد', 'في منتصف رمضان'], answer: 0, explain: 'وقت الفطر من رمضان.', page: 111 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ١٠٨ و١١٢. أجزاء «للاطلاع فقط» في الكتاب: مسائل إخراج الزكاة (ص١٠٧)، مسائل زكاة الفطر (ص١١٢).'
}

const nl = {
  scope: 'unit',
  unit: 8,
  title: 'Wie zakaat ontvangt, en zakāt al-fiṭr',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De acht groepen die recht hebben op zakaat, dat niet elke groep iets hoeft te krijgen, zakaat naar een ander land sturen en vragen over het geven; en daarna zakāt al-fiṭr: het oordeel, voor wie, de wijsheid, hoeveel, geld in plaats van voedsel, wanneer en aan wie.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 8 in één kaart',
    intro: 'Aan wie zakaat gaat, daarna zakāt al-fiṭr.',
    root: { label: 'Ontvangers en zakāt al-fiṭr', sub: 'Eenheid 8' },
    nodes: [
      { label: 'Wie recht heeft', sub: 'les 33', page: 105, children: ['de acht groepen', 'niet allen nodig', 'naar een ander land'] },
      { label: 'Vragen over het geven', sub: 'les 34', page: 107, children: ['vervroegen en uitstellen', 'man en vrouw', 'waaraan niet'] },
      { label: 'Zakāt al-fiṭr', sub: 'les 35', page: 109, children: ['verplicht', 'een ṣāʿ basisvoedsel', 'geld in plaats van voedsel'] },
      { label: 'Wanneer', sub: 'les 36', page: 111, children: ['verschuldigd', 'beste en toegestane tijd', 'na het gebed'] }
    ]
  },
  points: [
    { text: 'Er zijn acht groepen die recht hebben op zakaat, genoemd in soera at-Tawba; aan anderen mag zij niet gegeven worden.', page: 105 },
    { text: 'De arme en de behoeftige krijgen genoeg voor een heel jaar.', page: 105 },
    { text: 'De inner en wie schulden maakte om mensen te verzoenen, krijgen ook als zij rijk zijn.', page: 105 },
    { text: 'Volgens de juiste mening hoeven niet alle acht groepen iets te krijgen; zakaat naar een ander land sturen mag als er behoefte is.', page: 106 },
    { text: 'Zakāt al-fiṭr is verplicht voor elke moslim die op de ʿīd-dag en de nacht ervoor meer heeft dan voedsel voor zichzelf en zijn gezin, voor zichzelf en voor wie hij onderhoudt.', page: 109 },
    { text: 'Het is een ṣāʿ van het gangbare basisvoedsel van het land.', page: 110 },
    { text: 'Volgens de meeste geleerden volstaat geld in plaats van voedsel niet.', page: 110 },
    { text: 'Zij wordt verschuldigd bij zonsondergang op de avond vóór de ʿīd; de beste tijd is vóór het ʿīd-gebed, en een of twee dagen eerder mag.', page: 111 }
  ],
  terms: [
    { term: 'الفقير', translit: 'al-faqīr', meaning: 'De arme: wie niets heeft of minder dan de helft van wat hij nodig heeft.', explanation: '', notes: [], page: 105 },
    { term: 'المسكين', translit: 'al-miskīn', meaning: 'De behoeftige: wie de helft of meer heeft van wat hij nodig heeft, maar niet alles.', explanation: '', notes: [], page: 105 },
    { term: 'العاملون عليها', translit: 'al-ʿāmilūn ʿalayhā', meaning: 'Wie de leider stuurt om de zakaat te innen.', explanation: '', notes: [], page: 105 },
    { term: 'المؤلفة قلوبهم', translit: 'al-muʾallafa qulūbuhum', meaning: 'Wie iets krijgt om hem voor de islam te winnen, zijn geloof te versterken of schade af te wenden.', explanation: '', notes: [], page: 105 },
    { term: 'في الرقاب', translit: 'fī ar-riqāb', meaning: 'Het vrijkopen van een moslimslaaf of -slavin, en ook het vrijkopen van een moslimgevangene.', explanation: '', notes: [], page: 105 },
    { term: 'الغارمون', translit: 'al-ghārimūn', meaning: 'Wie schulden heeft, niet voor een zonde, voor zichzelf of om mensen te verzoenen.', explanation: '', notes: [], page: 105 },
    { term: 'ابن السبيل', translit: 'ibn as-sabīl', meaning: 'De gestrande reiziger die geld nodig heeft om thuis te komen, ook als hij thuis rijk is.', explanation: '', notes: [], page: 106 },
    { term: 'زكاة الفطر', translit: 'zakāt al-fiṭr', meaning: 'Zo genoemd omdat zij verschuldigd wordt bij het einde van het vasten van Ramaḍān.', explanation: '', notes: [], page: 109 },
    { term: 'الأقط', translit: 'al-aqiṭ', meaning: 'Gedroogde, harde melk.', explanation: '', notes: [], page: 110 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De acht groepen',
      intro: 'Zoals in at-Tawba 9:60 en les 33.',
      columns: ['Wie'],
      rows: [
        { label: 'De armen', cells: ['niets, of minder dan de helft van wat nodig is'] },
        { label: 'De behoeftigen', cells: ['de helft of meer, maar niet genoeg'] },
        { label: 'De inners', cells: ['wie de zakaat inzamelt, ook als hij rijk is'] },
        { label: 'Wier harten gewonnen worden', cells: ['om voor de islam te winnen of het geloof te versterken'] },
        { label: 'Vrijkopen', cells: ['slaven en gevangenen'] },
        { label: 'Schuldenaars', cells: ['schulden die niet voor een zonde zijn'] },
        { label: 'Op de weg van Allah', cells: ['strijders'] },
        { label: 'De reiziger', cells: ['gestrand en zonder middelen'] }
      ],
      page: 105
    },
    {
      type: 'steps',
      title: 'De tijden van zakāt al-fiṭr',
      intro: 'Zoals in les 36.',
      nodes: [
        { label: 'Mag al', sub: 'een of twee dagen vóór de ʿīd' },
        { label: 'Verschuldigd', sub: 'zonsondergang op de avond vóór de ʿīd' },
        { label: 'Beste tijd', sub: 'van fajr op de ʿīd tot vlak vóór het gebed' },
        { label: 'Na het gebed', sub: 'een gewone gift, en zonde tenzij er een reden is' }
      ],
      page: 111
    }
  ],
  sections: [
    { title: 'Op de weg van Allah', text: 'Strijders krijgen ervan, rijk of arm. In les 33 zegt het boek dat ook studenten van kennis en predikers eronder vallen; in les 34 zegt het dat deze groep volgens de meeste uitleggers en fiqh-geleerden alleen de strijd betreft en wat daarbij helpt, zodat zakaat niet gaat naar het bouwen van moskeeën, scholen, ziekenhuizen of wegen.', page: 106 },
    { title: 'Zakaat naar een ander land', text: 'Mag als er behoefte is, bijvoorbeeld als het andere land armer is, of als de gever daar arme familie heeft, zodat gift en familieband samengaan.', page: 106 },
    { title: 'Vragen over het geven (alleen ter kennisname)', text: 'Uitstellen mag alleen als er een reden is; vervroegen mag; zakaat van een overledene gaat vóór de verdeling van de erfenis; heffingen en belastingen tellen niet als zakaat; over het bezit van een kind of iemand zonder verstand is volgens de juiste mening zakaat; over geld in hulpfondsen en van liefdadigheidsinstellingen niet.', more: FYI_NL, page: 107 },
    { title: 'Voor wie zakāt al-fiṭr gegeven wordt', text: 'De moslim geeft haar voor zichzelf en voor wie hij onderhoudt: zijn vrouw, kinderen en verwanten; voor de ongeboren vrucht na de inblazing van de ziel is het aanbevolen.', page: 109 },
    { title: 'Geld in plaats van voedsel', text: 'Volstaat volgens de meeste geleerden niet: aanbidding volgt wat is overgeleverd, de metgezellen gaven voedsel terwijl er geld was, en voedsel past bij het vasten.', page: 110 },
    { title: 'Wat je geeft', text: 'Van het basisvoedsel van het land, zoals tarwe of rijst; Ibn ʿUthaymīn zei: al wat basisvoedsel is, van graan, vruchten, vlees en dergelijke, volstaat; het doel is de nood van de armen op de ʿīd-dag te lenigen.', page: 111 },
    { title: 'Vragen over zakāt al-fiṭr (alleen ter kennisname)', text: 'Je mag iemand machtigen om voor jou voedsel te kopen en te geven; volgens de juiste mening gaat zij alleen naar de armen en behoeftigen; een arme die meer heeft dan nodig voor de ʿīd-dag en -nacht, geeft haar ook; aan een ongelovige wordt zij volgens consensus niet gegeven.', more: FYI_NL, page: 112 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Wie zakaat ontvangt', items: ['de armen', 'de behoeftigen', 'de inners', 'wier harten gewonnen worden', 'vrijkopen', 'schuldenaars', 'op de weg van Allah', 'de reiziger'], page: 105, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden van zakāt al-fiṭr', items: ['islam', 'meer hebben dan voedsel en eerste levensbehoeften voor jezelf en je gezin op de ʿīd-dag en -nacht'], page: 109, origin: 'boek' },
    { kind: 'opsomming', title: 'De wijsheid van zakāt al-fiṭr', items: ['reiniging van de vastende van ijdel en onbetamelijk gepraat', 'voedsel voor de armen'], page: 110, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Er zijn acht groepen ontvangers; niet alle groepen hoeven iets te krijgen.',
    'De arme en de behoeftige krijgen genoeg voor een jaar; de inner en de schuldenaar voor verzoening ook als zij rijk zijn.',
    'Zakāt al-fiṭr is een ṣāʿ basisvoedsel voor elke moslim.',
    'Volgens de meeste geleerden volstaat geld niet.',
    'Je geeft haar vóór het ʿīd-gebed; een of twee dagen eerder mag.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoeveel groepen hebben recht op zakaat?', options: ['acht', 'vijf', 'zeven', 'tien'], answer: 0, explain: 'At-Tawba 9:60.', page: 105 },
    { type: 'tf', q: 'Bij het geven van zakaat moeten alle acht groepen iets krijgen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Volgens de juiste mening volstaat elke groep.', page: 106 },
    { type: 'mc', q: 'Wie krijgt van de zakaat, ook als hij rijk is?', options: ['de inner', 'de arme', 'de behoeftige', 'niemand'], answer: 0, explain: 'En ook wie schulden maakte om te verzoenen.', page: 105 },
    { type: 'tf', q: 'Een rijke vrouw mag haar zakaat aan haar arme man geven.', options: ['Juist', 'Onjuist'], answer: 0, explain: '"Je man en je kind hebben het meeste recht op wat je geeft."', page: 107 },
    { type: 'mc', q: 'Hoeveel is zakāt al-fiṭr per persoon?', options: ['een ṣāʿ basisvoedsel', 'een halve ṣāʿ', 'één dirham', 'twee ṣāʿ'], answer: 0, explain: 'De hadith van Ibn ʿUmar.', page: 110 },
    { type: 'mc', q: 'Wanneer wordt zakāt al-fiṭr verschuldigd?', options: ['bij zonsondergang op de avond vóór de ʿīd', 'bij fajr aan het begin van Ramaḍān', 'na het ʿīd-gebed', 'halverwege Ramaḍān'], answer: 0, explain: 'Het moment dat het vasten van Ramaḍān eindigt.', page: 111 }
  ]),
  note: 'Oefeningen van het boek op p. 108 en 112. Delen die het boek alleen ter kennisname geeft: vragen over het geven (p. 107), vragen over zakāt al-fiṭr (p. 112). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '33', unit: 8, ar, nl }
