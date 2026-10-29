// Hoofdstukkaart bij الفقه (٢), eenheid 7: زكاة الزروع والثمار والمعادن وبهيمة الأنعام
// (lessen 29–32, boek p. 95–104). Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het
// importbestand van het boek; hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط"
// noemt, zijn zo gemarkeerd. Niet overgenomen: de tweede bewoording van de hadith over bevloeiing
// (p. 96), omdat het boek haar zonder eigen bron aan de eerdere (al-Bukhārī) koppelt; de lijst van
// vruchten zonder zakaat staat als oordeel van het boek. Over olie en gas (p. 97–98) geeft de kaart
// alleen wat het boek zegt, zonder de spanning tussen beide pagina's op te lossen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '95–104',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'فيما سقت السماء والعيون أو كان عثريا العشر، وفيما سقي بالنضح نصف العشر', takhrij: 'رواه البخاري', note: 'العشر فيما سقي بلا كلفة، ونصفه فيما سقي بمؤونة.', pages: [95, 96], nl: 'Over wat door regen en bronnen bevloeid wordt of uit zichzelf water opneemt: een tiende; over wat met trekdieren bevloeid wordt: een twintigste', nlNote: 'Een tiende bij bevloeiing zonder kosten, een twintigste bij bevloeiing met kosten.' },
  { narrator: '', text: 'ليس فيما دون خمسة أوسق صدقة', takhrij: 'البخاري ومسلم', note: 'نصاب الحبوب والثمار.', pages: [95], nl: 'Over minder dan vijf wasq is geen zakaat', nlNote: 'Het minimum voor graan en vruchten.' },
  { narrator: '', text: 'وفي الركاز الخمس', takhrij: 'البخاري ومسلم', note: 'في قليله وكثيره بلا حول ولا نصاب. ' + FYI_NOTE, pages: [97], nl: 'En over een gevonden schat: een vijfde', nlNote: 'Over weinig en veel, zonder jaar en zonder minimum. ' + FYI_NOTE_NL },
  { narrator: '', text: 'ليس فيما دون خمس ذود صدقة', takhrij: 'البخاري ومسلم', note: 'نصاب الإبل. ' + FYI_NOTE, pages: [100], nl: 'Over minder dan vijf kamelen is geen zakaat', nlNote: 'Het minimum voor kamelen. ' + FYI_NOTE_NL },
  { narrator: 'معاذ بن جبل', text: 'بعثني رسول الله ﷺ أصدق أهل اليمن، فأمرني أن آخذ من البقر من كل ثلاثين تبيعا، ومن كل أربعين مسنة', takhrij: 'أبو داود والترمذي وصححه الألباني', note: FYI_NOTE, pages: [100, 103], nl: 'De Boodschapper van Allah ﷺ stuurde mij om de zakaat van de mensen van Jemen te innen, en droeg mij op van de koeien voor elke dertig een eenjarig kalf te nemen, en voor elke veertig een tweejarige koe', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'فإذا كانت سائمة الرجل ناقصة من أربعين شاة واحدة فليس فيها صدقة…', takhrij: 'رواه البخاري', note: FYI_NOTE, pages: [100], nl: 'Is het grazende vee van iemand één schaap minder dan veertig, dan is daarover geen zakaat…', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'لا زكاة في مال حتى يحول عليه الحول', takhrij: 'الترمذي وابن ماجه وصححه الألباني', note: '', pages: [101], nl: 'Over bezit is geen zakaat verschuldigd tot er een jaar over verstreken is', nlNote: '' },
  { narrator: '', text: 'وفي كل إبل سائمة في كل أربعين ابنة لبون', takhrij: 'أحمد وأبو داود وحسنه الألباني', note: 'شرط السوم.', pages: [101], nl: 'En over alle grazende kamelen: voor elke veertig een tweejarige merrie', nlNote: 'De voorwaarde dat het vee vrij graast.' },
  { narrator: 'أنس بن مالك', text: 'وفي صدقة الغنم في سائمتها إذا كانت أربعين إلى عشرين ومائة شاة، فإذا زادت على عشرين ومائة إلى مائتين شاتان، فإذا زادت على مائتين إلى ثلاثمائة ففيها ثلاث، فإذا زادت على ثلاثمائة ففي كل مائة شاة', takhrij: 'رواه البخاري', note: 'من كتاب الصدقة.', pages: [101, 102], nl: 'En de zakaat over grazende schapen: van veertig tot honderdtwintig één schaap; boven honderdtwintig tot tweehonderd twee schapen; boven tweehonderd tot driehonderd drie; boven driehonderd voor elke honderd één schaap', nlNote: 'Uit de brief over de zakaat.' },
  { narrator: '', text: 'لا جلب ولا جنب، ولا تؤخذ صدقاتهم إلا في دورهم', takhrij: 'أبو داود وصححه الألباني', note: 'تؤخذ زكاة الأنعام في أماكنها. ' + FYI_NOTE, pages: [103], nl: 'Geen ophalen en geen wegdrijven; hun zakaat wordt alleen bij hun woonplaatsen genomen', nlNote: 'De zakaat over vee wordt ter plaatse genomen. ' + FYI_NOTE_NL }
]

const TAKHRIJ_NL = {
  'رواه البخاري': 'al-Bukhārī',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وابن ماجه وصححه الألباني': 'at-Tirmidhī en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد وأبو داود وحسنه الألباني': 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem ḥasan',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'معاذ بن جبل': 'Muʿādh ibn Jabal', 'أنس بن مالك': 'Anas ibn Mālik' }

const PERSONS = [
  ['muadh-ibn-jabal', 'text', [100, 103], 'بعثه النبي ﷺ لجمع صدقات اليمن، وروى نصاب البقر.', 'De Profeet ﷺ stuurde hem om de zakaat van Jemen te innen; overleverde het minimum voor koeien.'],
  ['anas-ibn-malik', 'text', [102], 'روى كتاب الصدقة في زكاة الغنم.', 'Overleverde de brief over de zakaat over schapen.']
]

const ar = {
  scope: 'unit',
  unit: 7,
  title: 'زكاة الزروع والمعادن وبهيمة الأنعام',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'زكاة الزروع والثمار: أدلتها وشروطها ونصابها وقدر الواجب ووقت الوجوب، ثم العسل والركاز والمعادن والنفط، ثم زكاة بهيمة الأنعام: أقسامها وشروطها وقدر الواجب في الإبل والبقر والغنم.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السابعة في خريطة واحدة',
    intro: 'ما يخرج من الأرض، ثم الأنعام.',
    root: { label: 'الأرض والأنعام', sub: 'الوحدة السابعة' },
    nodes: [
      { label: 'الزروع والثمار', sub: 'الدرس ٢٩', page: 95, children: ['خمسة أوسق', 'العشر ونصفه', 'لا حول'] },
      { label: 'العسل والركاز والمعادن', sub: 'الدرس ٣٠', page: 97, children: ['لا زكاة في العسل', 'الخمس في الركاز', 'ربع العشر في المعادن'] },
      { label: 'بهيمة الأنعام', sub: 'الدرس ٣١', page: 100, children: ['أقسامها', 'السوم', 'ألا تكون عاملة'] },
      { label: 'قدر الواجب', sub: 'الدرس ٣٢', page: 102, children: ['الإبل', 'الغنم', 'البقر'] }
    ]
  },
  points: [
    { text: 'تجب الزكاة في كل قوت مدخر من الحبوب والثمار كالحنطة والشعير والأرز والتمر والزبيب.', page: 96 },
    { text: 'نصاب الحبوب والثمار خمسة أوسق، أي ثلاثمائة صاع، وهو نحو ٦١٢ كيلو من البر الجيد.', page: 95 },
    { text: 'لا يشترط الحول في الزروع والثمار، والواجب العشر فيما سقي بلا كلفة ونصفه فيما سقي بمؤونة.', page: 96 },
    { text: 'تجب زكاة الزروع إذا اشتد الحب وبدا صلاح الثمر.', page: 96 },
    { text: 'الراجح عند الكتاب ألا زكاة في العسل إلا إن كان للتجارة.', page: 97 },
    { text: 'في الركاز الخمس في قليله وكثيره، بلا حول ولا نصاب.', page: 97 },
    { text: 'تجب الزكاة في بهيمة الأنعام السائمة التي بلغت النصاب وحال عليها الحول ولم تكن عاملة.', page: 100 },
    { text: 'لا زكاة في غير الإبل والبقر والغنم من الحيوان إلا إن أعدت للتجارة.', page: 103 }
  ],
  terms: [
    { term: 'الوسق', translit: 'al-wasq', meaning: 'ستون صاعًا.', explanation: 'النصاب خمسة أوسق.', notes: [], page: 95 },
    { term: 'العثري', translit: 'al-ʿatharī', meaning: 'ما يشرب بعروقه من غير سقي.', explanation: '', notes: [], page: 84 },
    { term: 'السواني والنواضح', translit: 'as-sawānī wa-n-nawāḍiḥ', meaning: 'النوق التي يستقى عليها.', explanation: '', notes: [], page: 96 },
    { term: 'الركاز', translit: 'ar-rikāz', meaning: 'ما وجد من دفائن الجاهلية مما عليه علامة الكفر.', explanation: 'يعرف بكتابة أسمائهم أو نقش صورهم.', notes: [], page: 97 },
    { term: 'المعادن', translit: 'al-maʿādin', meaning: 'ما يكون في الأرض خلقة كالحديد والنحاس والذهب.', explanation: '', notes: [], page: 97 },
    { term: 'بهيمة الأنعام', translit: 'bahīmat al-anʿām', meaning: 'الإبل والبقر والغنم.', explanation: 'سميت لأنها لا تتكلم، من الإبهام.', notes: [], page: 100 },
    { term: 'السائمة', translit: 'as-sāʾima', meaning: 'التي ترعى الكلأ المباح الحول أو أكثره.', explanation: '', notes: [], page: 101 },
    { term: 'التبيع', translit: 'at-tabīʿ', meaning: 'من البقر ما تم له سنة، سمي لأنه يتبع أمه.', explanation: '', notes: [], page: 103 },
    { term: 'المسنة', translit: 'al-musinna', meaning: 'من البقر ما تم لها سنتان.', explanation: '', notes: [], page: 103 },
    { term: 'بنت مخاض', translit: 'bint makhāḍ', meaning: 'من الإبل ما تم لها سنة ودخلت في الثانية.', explanation: '', notes: [], page: 103 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'قدر الواجب في الغنم',
      intro: 'كما في الدرس الثاني والثلاثين.',
      columns: ['الواجب'],
      rows: [
        { label: '٤٠–١٢٠', cells: ['شاة'] },
        { label: '١٢١–٢٠٠', cells: ['شاتان'] },
        { label: '٢٠١–٣٩٩', cells: ['ثلاث شياه'] },
        { label: 'بعد ذلك', cells: ['في كل مائة شاة'] }
      ],
      page: 102
    },
    {
      type: 'compare',
      title: 'قدر الواجب في الإبل',
      intro: 'كما في الدرس الثاني والثلاثين.',
      columns: ['الواجب'],
      rows: [
        { label: '٥–٢٤', cells: ['في كل خمس شاة'] },
        { label: '٢٥–٣٥', cells: ['بنت مخاض، فإن لم توجد فابن لبون'] },
        { label: '٣٦–٤٥', cells: ['بنت لبون'] },
        { label: '٤٦–٦٠', cells: ['حقة'] },
        { label: '٦١–٧٥', cells: ['جذعة'] },
        { label: '٧٦–٩٠', cells: ['بنتا لبون'] },
        { label: '٩١–١٢٠', cells: ['حقتان'] },
        { label: 'فوق ١٢٠', cells: ['في كل أربعين بنت لبون، وفي كل خمسين حقة'] }
      ],
      page: 102
    },
    {
      type: 'compare',
      title: 'أقسام بهيمة الأنعام',
      intro: 'كما في الدرس الحادي والثلاثين (للاطلاع فقط).',
      columns: ['حكم زكاتها'],
      rows: [
        { label: 'عروض تجارة', cells: ['زكاة العروض'] },
        { label: 'السائمة', cells: ['فيها الزكاة على التفصيل'] },
        { label: 'المعلوفة للدر والنسل', cells: ['لا زكاة فيها'] },
        { label: 'العوامل', cells: ['لا زكاة فيها، وإنما في أجرتها إذا حال الحول'] }
      ],
      page: 100
    }
  ],
  sections: [
    { title: 'ما لا زكاة فيه من الثمار', text: 'لا تجب في الفواكه والخضروات لأنها ليست قوتًا ولا مدخرة، ويذكر الكتاب منها الخوخ والرمان والتين والتفاح والمشمش، ويعد معها اللوز والجوز.', page: 96 },
    { title: 'مسائل في الزروع', text: 'الأصل الإخراج من المحصول، ويرى بعض العلماء جواز إخراج القيمة؛ ويضم الزرع الواحد بعضه إلى بعض ولو اختلفت الأرض ما دام المالك واحدًا، ولا يضم جنس إلى آخر.', page: 96 },
    { title: 'الركاز (للاطلاع فقط)', text: 'فيه الخمس في قليله وكثيره بلا حول ولا نصاب، ويصرف في مصالح المسلمين العامة.', more: FYI, page: 97 },
    { title: 'المعادن والنفط (للاطلاع فقط)', text: 'في الذهب والفضة من المعادن إذا بلغا النصاب ربع العشر، وفي غيرهما إذا بلغت قيمته نصاب الفضة ربع العشر؛ والنفط والغاز إن كانا ملكًا عامًّا فلا زكاة فيهما، وإن كانا ملكًا خاصًّا فالجمهور على أنه لا يجب عند إخراجه شيء إلا إن كان للتجارة، كما في الكتاب.', more: FYI, page: 98 },
    { title: 'شروط زكاة الأنعام', text: 'بلوغ النصاب: خمس من الإبل وثلاثون من البقر وأربعون من الغنم؛ وحولان الحول دون نقص؛ والسوم الحول أو أكثره؛ وألا تكون عاملة في الحرث أو النقل.', page: 100 },
    { title: 'البقر (للاطلاع فقط)', text: 'في كل ثلاثين تبيع، وفي كل أربعين مسنة، ثم ما زاد فعلى هذا الحساب.', more: FYI, page: 103 },
    { title: 'أين تؤخذ زكاة الأنعام (للاطلاع فقط)', text: 'تؤخذ في أماكنها، فيذهب المصدق إلى أهلها.', more: FYI, page: 103 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شروط زكاة الزروع والثمار', items: ['بلوغ النصاب خمسة أوسق', 'أن يكون مملوكًا له وقت الوجوب'], page: 95, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شروط زكاة بهيمة الأنعام', items: ['بلوغ النصاب', 'حولان الحول', 'أن تكون سائمة', 'ألا تكون عاملة'], page: 100, origin: 'boek' },
    { kind: 'onderscheid', title: 'العشر ونصف العشر', items: ['العشر: ما سقي بلا كلفة كالمطر والعيون والأنهار', 'نصف العشر: ما سقي بمؤونة كالمكائن والسواني'], page: 96, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'تجب الزكاة في القوت المدخر إذا بلغ خمسة أوسق، بلا حول.',
    'العشر فيما سقي بلا كلفة، ونصفه فيما سقي بمؤونة.',
    'في الركاز الخمس، ولا زكاة في العسل عند الكتاب إلا للتجارة.',
    'تجب زكاة الأنعام في السائمة غير العاملة إذا بلغت النصاب وحال الحول.',
    'في أربعين من الغنم شاة، وفي ثلاثين من البقر تبيع.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'كم نصاب الحبوب والثمار؟', options: ['خمسة أوسق', 'عشرون صاعًا', 'وسق واحد', 'مائة صاع'], answer: 0, explain: '«ليس فيما دون خمسة أوسق صدقة».', page: 95 },
    { type: 'tf', q: 'يشترط الحول في زكاة الزروع.', options: ['صواب', 'خطأ'], answer: 1, explain: '﴿وآتوا حقه يوم حصاده﴾.', page: 95 },
    { type: 'mc', q: 'كم الواجب فيما سقي بالمكائن؟', options: ['نصف العشر', 'العشر', 'ربع العشر', 'الخمس'], answer: 0, explain: 'لكثرة المؤونة.', page: 96 },
    { type: 'mc', q: 'كم الواجب في الركاز؟', options: ['الخمس', 'العشر', 'ربع العشر', 'لا شيء'], answer: 0, explain: '«وفي الركاز الخمس».', page: 97 },
    { type: 'tf', q: 'تجب الزكاة في الخيل والطيور مهما بلغ عددها ولو لم تكن للتجارة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا زكاة فيها إلا إن أعدت للتجارة.', page: 103 },
    { type: 'tf', q: 'التبيع من البقر ما تم له سنتان.', options: ['صواب', 'خطأ'], answer: 1, explain: 'ما تم له سنة.', page: 103 },
    { type: 'mc', q: 'كم الواجب في ١٥٠ شاة سائمة؟', options: ['شاتان', 'شاة', 'ثلاث شياه', 'أربع شياه'], answer: 0, explain: 'من ١٢١ إلى ٢٠٠ شاتان.', page: 102 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٩٩ و١٠٤. أجزاء «للاطلاع فقط» في الكتاب: العسل والركاز والمعادن (ص٩٧–٩٨)، أقسام الأنعام (ص١٠٠)، البقر والأسنان والمسائل (ص١٠٣).'
}

const nl = {
  scope: 'unit',
  unit: 7,
  title: 'Zakaat over gewassen, delfstoffen en vee',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Zakaat over gewassen en vruchten: de bewijzen, voorwaarden, het minimum, hoeveel en wanneer; daarna honing, schatten, delfstoffen en olie; en daarna zakaat over vee: de soorten, de voorwaarden en hoeveel bij kamelen, koeien en schapen.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 7 in één kaart',
    intro: 'Wat uit de aarde komt, daarna het vee.',
    root: { label: 'Aarde en vee', sub: 'Eenheid 7' },
    nodes: [
      { label: 'Gewassen en vruchten', sub: 'les 29', page: 95, children: ['vijf wasq', 'een tiende of twintigste', 'geen jaar'] },
      { label: 'Honing, schatten, delfstoffen', sub: 'les 30', page: 97, children: ['geen zakaat over honing', 'een vijfde over schatten', 'een veertigste over delfstoffen'] },
      { label: 'Vee', sub: 'les 31', page: 100, children: ['soorten', 'vrij grazen', 'geen werkdieren'] },
      { label: 'Hoeveel', sub: 'les 32', page: 102, children: ['kamelen', 'schapen', 'koeien'] }
    ]
  },
  points: [
    { text: 'Zakaat is verschuldigd over al het bewaarbare basisvoedsel uit graan en vruchten, zoals tarwe, gerst, rijst, dadels en rozijnen.', page: 96 },
    { text: 'Het minimum voor graan en vruchten is vijf wasq, dat is driehonderd ṣāʿ, ongeveer 612 kilo goede tarwe.', page: 95 },
    { text: 'Bij gewassen en vruchten is geen vol jaar nodig; verschuldigd is een tiende bij bevloeiing zonder kosten en een twintigste bij bevloeiing met kosten.', page: 96 },
    { text: 'Zakaat over gewassen is verschuldigd als het graan hard is en de vrucht rijp begint te worden.', page: 96 },
    { text: 'Volgens de sterkste mening in het boek is over honing geen zakaat, tenzij het handelswaar is.', page: 97 },
    { text: 'Over een gevonden schat is een vijfde verschuldigd, over weinig en veel, zonder jaar en zonder minimum.', page: 97 },
    { text: 'Zakaat is verschuldigd over vrij grazend vee dat het minimum haalt, een jaar in bezit is en geen werkdier is.', page: 100 },
    { text: 'Over andere dieren dan kamelen, koeien en schapen is geen zakaat, tenzij ze voor de handel zijn.', page: 103 }
  ],
  terms: [
    { term: 'الوسق', translit: 'al-wasq', meaning: 'Zestig ṣāʿ.', explanation: 'Het minimum is vijf wasq.', notes: [], page: 95 },
    { term: 'العثري', translit: 'al-ʿatharī', meaning: 'Wat met zijn wortels water opneemt zonder bevloeiing.', explanation: '', notes: [], page: 84 },
    { term: 'السواني والنواضح', translit: 'as-sawānī wa-n-nawāḍiḥ', meaning: 'Kamelen waarmee water wordt opgehaald.', explanation: '', notes: [], page: 96 },
    { term: 'الركاز', translit: 'ar-rikāz', meaning: 'Een begraven schat van vóór de islam met een teken van ongeloof.', explanation: 'Herkenbaar aan hun namen of afbeeldingen erop.', notes: [], page: 97 },
    { term: 'المعادن', translit: 'al-maʿādin', meaning: 'Wat van nature in de aarde zit, zoals ijzer, koper en goud.', explanation: '', notes: [], page: 97 },
    { term: 'بهيمة الأنعام', translit: 'bahīmat al-anʿām', meaning: 'Kamelen, koeien en schapen.', explanation: 'Zo genoemd omdat ze niet spreken.', notes: [], page: 100 },
    { term: 'السائمة', translit: 'as-sāʾima', meaning: 'Vee dat het hele jaar of het grootste deel ervan vrij graast.', explanation: '', notes: [], page: 101 },
    { term: 'التبيع', translit: 'at-tabīʿ', meaning: 'Een kalf van een jaar; zo genoemd omdat het zijn moeder volgt.', explanation: '', notes: [], page: 103 },
    { term: 'المسنة', translit: 'al-musinna', meaning: 'Een koe van twee jaar.', explanation: '', notes: [], page: 103 },
    { term: 'بنت مخاض', translit: 'bint makhāḍ', meaning: 'Een kamelenmerrie die een jaar is en in haar tweede jaar zit.', explanation: '', notes: [], page: 103 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Hoeveel bij schapen',
      intro: 'Zoals in les 32.',
      columns: ['Verschuldigd'],
      rows: [
        { label: '40–120', cells: ['één schaap'] },
        { label: '121–200', cells: ['twee schapen'] },
        { label: '201–399', cells: ['drie schapen'] },
        { label: 'daarboven', cells: ['voor elke honderd één schaap'] }
      ],
      page: 102
    },
    {
      type: 'compare',
      title: 'Hoeveel bij kamelen',
      intro: 'Zoals in les 32.',
      columns: ['Verschuldigd'],
      rows: [
        { label: '5–24', cells: ['voor elke vijf één schaap'] },
        { label: '25–35', cells: ['een eenjarige merrie, anders een tweejarige hengst'] },
        { label: '36–45', cells: ['een tweejarige merrie'] },
        { label: '46–60', cells: ['een driejarige merrie'] },
        { label: '61–75', cells: ['een vierjarige merrie'] },
        { label: '76–90', cells: ['twee tweejarige merries'] },
        { label: '91–120', cells: ['twee driejarige merries'] },
        { label: 'boven 120', cells: ['per veertig een tweejarige, per vijftig een driejarige merrie'] }
      ],
      page: 102
    },
    {
      type: 'compare',
      title: 'Soorten vee',
      intro: 'Zoals in les 31 (alleen ter kennisname).',
      columns: ['Zakaat'],
      rows: [
        { label: 'Handelswaar', cells: ['zakaat over handelswaar'] },
        { label: 'Vrij grazend', cells: ['zakaat volgens de tabellen'] },
        { label: 'Gevoerd voor melk en fok', cells: ['geen zakaat'] },
        { label: 'Werkdieren', cells: ['geen zakaat; wel over de huur als het jaar om is'] }
      ],
      page: 100
    }
  ],
  sections: [
    { title: 'Vruchten zonder zakaat', text: 'Over fruit en groente is geen zakaat, omdat het geen basisvoedsel is en niet bewaard wordt; het boek noemt perziken, granaatappels, vijgen, appels en abrikozen, en rekent er ook amandelen en walnoten toe.', page: 96 },
    { title: 'Vragen over gewassen', text: 'In principe geef je van de oogst zelf; sommige geleerden staan de waarde toe. Hetzelfde gewas tel je samen, ook van verschillende akkers, zolang de eigenaar dezelfde is; verschillende soorten tel je niet samen.', page: 96 },
    { title: 'Schatten (alleen ter kennisname)', text: 'Een vijfde over weinig en veel, zonder jaar en zonder minimum; het gaat naar het algemeen belang van de moslims.', more: FYI_NL, page: 97 },
    { title: 'Delfstoffen en olie (alleen ter kennisname)', text: 'Over goud en zilver uit de grond een veertigste als het minimum gehaald wordt, en over andere delfstoffen ook een veertigste als de waarde het zilverminimum haalt. Over olie en gas in gemeenschappelijk bezit is geen zakaat; in privébezit is volgens de meerderheid bij winning niets verschuldigd, tenzij het handelswaar is, zoals in het boek.', more: FYI_NL, page: 98 },
    { title: 'Voorwaarden bij vee', text: 'Het minimum halen: vijf kamelen, dertig koeien of veertig schapen; een vol jaar zonder dat het onder het minimum zakt; het hele jaar of het grootste deel vrij grazen; en geen werkdier zijn voor ploegen of vervoer.', page: 100 },
    { title: 'Koeien (alleen ter kennisname)', text: 'Per dertig een eenjarig kalf, per veertig een tweejarige koe, en daarboven op dezelfde manier.', more: FYI_NL, page: 103 },
    { title: 'Waar zakaat over vee wordt genomen (alleen ter kennisname)', text: 'Ter plaatse: de inner gaat naar de eigenaars toe.', more: FYI_NL, page: 103 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Voorwaarden bij gewassen en vruchten', items: ['het minimum van vijf wasq', 'in bezit op het moment dat zakaat verschuldigd wordt'], page: 95, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden bij vee', items: ['het minimum', 'een vol jaar', 'vrij grazend', 'geen werkdier'], page: 100, origin: 'boek' },
    { kind: 'onderscheid', title: 'Een tiende of een twintigste', items: ['een tiende: bevloeid zonder kosten, door regen, bronnen of rivieren', 'een twintigste: bevloeid met kosten, met pompen of trekdieren'], page: 96, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Over bewaarbaar basisvoedsel vanaf vijf wasq is zakaat verschuldigd, zonder jaar.',
    'Een tiende bij bevloeiing zonder kosten, een twintigste met kosten.',
    'Over een schat een vijfde; over honing volgens het boek niets, tenzij voor de handel.',
    'Over vrij grazend vee dat geen werkdier is, als het het minimum haalt en een jaar in bezit is.',
    'Over veertig schapen één schaap, over dertig koeien een eenjarig kalf.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het minimum voor graan en vruchten?', options: ['vijf wasq', 'twintig ṣāʿ', 'één wasq', 'honderd ṣāʿ'], answer: 0, explain: '"Over minder dan vijf wasq is geen zakaat."', page: 95 },
    { type: 'tf', q: 'Voor zakaat over gewassen moet er een jaar verstreken zijn.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Geef het recht ervan op de dag van de oogst."', page: 95 },
    { type: 'mc', q: 'Hoeveel is verschuldigd over wat met pompen bevloeid wordt?', options: ['een twintigste', 'een tiende', 'een veertigste', 'een vijfde'], answer: 0, explain: 'Vanwege de kosten.', page: 96 },
    { type: 'mc', q: 'Hoeveel is verschuldigd over een gevonden schat?', options: ['een vijfde', 'een tiende', 'een veertigste', 'niets'], answer: 0, explain: '"En over een gevonden schat: een vijfde."', page: 97 },
    { type: 'tf', q: 'Over paarden en vogels is altijd zakaat, ook als ze niet voor de handel zijn.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Alleen als ze voor de handel zijn.', page: 103 },
    { type: 'tf', q: 'Een tabīʿ is een kalf van twee jaar.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Een kalf van één jaar.', page: 103 },
    { type: 'mc', q: 'Hoeveel is verschuldigd over 150 vrij grazende schapen?', options: ['twee schapen', 'één schaap', 'drie schapen', 'vier schapen'], answer: 0, explain: 'Van 121 tot 200: twee.', page: 102 }
  ]),
  note: 'Oefeningen van het boek op p. 99 en 104. Delen die het boek alleen ter kennisname geeft: honing, schatten en delfstoffen (p. 97–98), soorten vee (p. 100), koeien, leeftijden en vragen (p. 103). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '29', unit: 7, ar, nl }
