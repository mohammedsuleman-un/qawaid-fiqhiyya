// Hoofdstukkaart bij الفقه (١), eenheid 1: الطهارة والنجاسة والمياه وأقسامها (lessen 1–4, boek p. 11–21).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 17–18 en een deel van p. 20 zijn in het boek
// "alleen ter kennisname" en staan zo aangeduid.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (١)، سلسلة زاد العلمية',
  pages: '11–21',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'هو الطهور ماؤه، الحل ميتته', takhrij: 'رواه مالك في الموطأ وصححه الألباني', note: 'في ماء البحر.', pages: [15], nl: 'Het water ervan is reinigend, en wat erin sterft is toegestaan', nlNote: 'Over zeewater.' },
  { narrator: '', text: 'إن الماء طهور لا ينجسه شيء', takhrij: 'رواه الترمذي وصححه الألباني', note: 'دليل من قال: الماء القليل لا ينجس إلا بالتغير. ' + FYI, pages: [18], nl: 'Water is reinigend; niets maakt het onrein', nlNote: 'Bewijs dat weinig water alleen onrein wordt als het verandert. ' + FYI_NL },
  { narrator: 'حذيفة بن اليمان', text: 'لا تشربوا في آنية الذهب والفضة، ولا تأكلوا في صحافها، فإنها لهم في الدنيا ولنا في الآخرة', takhrij: 'رواه البخاري ومسلم', note: '', pages: [19], nl: 'Drink niet uit gouden en zilveren vaatwerk en eet niet van hun schalen, want die zijn voor hen in deze wereld en voor ons in het Hiernamaals', nlNote: '' },
  { narrator: 'أم سلمة', text: 'الذي يشرب في إناء الفضة إنما يجرجر في بطنه نار جهنم', takhrij: 'متفق عليه', note: '', pages: [19], nl: 'Wie uit een zilveren vat drinkt, laat het vuur van de Hel in zijn buik klokken', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'أن قدح النبي ﷺ انكسر فاتخذ مكان الشعب سلسلة من فضة', takhrij: 'رواه البخاري', note: 'دليل جواز اللحام اليسير بالفضة للحاجة.', pages: [20], nl: 'De drinkbeker van de Profeet ﷺ brak, en op de plek van de barst bracht hij een zilveren klemband aan', nlNote: 'Bewijs dat een kleine reparatie met zilver mag als het nodig is.' },
  { narrator: 'جابر بن عبد الله', text: 'كنا نغزو مع النبي ﷺ فنصيب من آنية المشركين وأسقيتهم فنستمتع بها فلا يعيب ذلك علينا', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', note: 'في آنية الكفار. ' + FYI, pages: [20], nl: 'Wij trokken met de Profeet ﷺ ten strijde en kregen vaatwerk en waterzakken van de polytheïsten; we gebruikten ze en hij keurde dat niet af', nlNote: 'Over vaatwerk van niet-moslims. ' + FYI_NL },
  { narrator: 'أبو ثعلبة الخشني', text: 'إن وجدتم غيرها فلا تأكلوا فيها، وإن لم تجدوا فاغسلوها وكلوا فيها', takhrij: 'متفق عليه', note: 'في آنية من يعرف عنهم مباشرة النجاسات. ' + FYI, pages: [20], nl: 'Als jullie ander vaatwerk vinden, eet er dan niet uit; vinden jullie niets anders, was het dan en eet eruit', nlNote: 'Over vaatwerk van wie er onreine dingen in eet. ' + FYI_NL }
]

const TAKHRIJ_NL = {
  'رواه مالك في الموطأ وصححه الألباني': 'Mālik in al-Muwaṭṭaʾ; authentiek volgens al-Albānī',
  'رواه الترمذي وصححه الألباني': 'at-Tirmidhī; authentiek volgens al-Albānī',
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه البخاري': 'al-Bukhārī',
  'رواه أحمد وأبو داود وصححه الألباني': 'Aḥmad en Abū Dāwūd; authentiek volgens al-Albānī'
}
const NARRATOR_NL = { 'حذيفة بن اليمان': 'Ḥudhayfa ibn al-Yamān', 'أم سلمة': 'Umm Salama', 'أنس بن مالك': 'Anas ibn Mālik', 'جابر بن عبد الله': 'Jābir ibn ʿAbdallāh', 'أبو ثعلبة الخشني': 'Abū Thaʿlaba al-Khushanī' }

const PERSONS = [
  ['hudhayfa-ibn-al-yaman', 'text', [19], 'روى النهي عن الأكل والشرب في آنية الذهب والفضة.', 'Overleverde het verbod op eten en drinken uit gouden en zilveren vaatwerk.'],
  ['umm-salama', 'text', [19], 'روت الوعيد في الشرب في إناء الفضة.', 'Overleverde de waarschuwing tegen drinken uit een zilveren vat.'],
  ['anas-ibn-malik', 'text', [20], 'روى إصلاح قدح النبي ﷺ بسلسلة من فضة.', 'Overleverde de reparatie van de beker van de Profeet ﷺ met zilver.'],
  ['jabir-ibn-abdallah', 'text', [20], 'روى استعمال آنية المشركين في الغزو.', 'Overleverde het gebruik van vaatwerk van polytheïsten tijdens veldtochten.'],
  ['abu-thalaba-al-khushani', 'text', [20], 'روى الأمر بغسل آنية من يباشر النجاسات قبل استعمالها.', 'Overleverde dat vaatwerk van wie onreine dingen gebruikt eerst gewassen wordt.'],
  ['malik-ibn-anas', 'takhrij', [15], 'أخرج حديث ماء البحر في الموطأ.', 'Nam de hadith over zeewater op in al-Muwaṭṭaʾ.'],
  ['at-tirmidhi', 'takhrij', [18], 'أخرج «إن الماء طهور».', 'Nam "water is reinigend" op.'],
  ['al-albani', 'takhrij', [15, 18, 20], 'صحح أحاديث في هذه الوحدة.', 'Verklaarde hadith in deze eenheid authentiek.'],
  ['al-bukhari', 'takhrij', [19, 20], 'أخرج أحاديث الآنية.', 'Nam de hadith over vaatwerk op.'],
  ['muslim', 'takhrij', [19, 20], 'أخرج أحاديث الآنية.', 'Nam de hadith over vaatwerk op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [20], 'أخرج حديث جابر في آنية المشركين.', 'Nam de hadith van Jābir over vaatwerk van polytheïsten op.'],
  ['abu-dawud', 'takhrij', [20], 'أخرج حديث جابر في آنية المشركين.', 'Nam de hadith van Jābir over vaatwerk van polytheïsten op.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'الطهارة والنجاسة والمياه وأقسامها',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف الطهارة وقسماها المعنوية والحسية، والحدث الأصغر والأكبر، ثم المياه: الطهور والنجس وأحوال الماء المتغير، ثم أحكام الآنية: آنية الذهب والفضة والإناء المضبب وآنية الكفار.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'الطهارة والمياه والآنية', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'الطهارة', sub: 'الدرس ١', page: 13, children: ['معنوية', 'حسية', 'الحدث الأصغر والأكبر'] },
      { label: 'الماء الطهور', sub: 'الدرس ٢', page: 15, children: ['الباقي على خلقته', 'المتغير بطاهر', 'المستعمل'] },
      { label: 'الماء النجس', sub: 'الدرس ٣', page: 17, children: ['تغير بالنجاسة', 'تطهيره', 'القليل والكثير'] },
      { label: 'الآنية', sub: 'الدرس ٤', page: 19, children: ['الذهب والفضة', 'المضبب', 'آنية الكفار'] }
    ]
  },
  points: [
    { text: 'الطهارة قسمان: معنوية بطهارة القلب من الشرك والمعاصي، وحسية برفع الحدث وزوال الخبث.', page: 13 },
    { text: 'الحدث الأصغر يرتفع بالوضوء، والأكبر يرتفع بالغسل.', page: 13 },
    { text: 'الماء في الجملة قسمان: طهور ونجس.', page: 15 },
    { text: 'الطهور ما بقي على أصل خلقته، ويرفع الحدث ويزيل النجاسة.', page: 15 },
    { text: 'ما تغير بطاهر حتى خرج عن اسم الماء كالشاي والعصير لا يصح التطهر به.', page: 16 },
    { text: 'الماء المستعمل في الوضوء والغسل طاهر في نفسه مطهر لغيره.', page: 16 },
    { text: 'الماء النجس ما غيرت النجاسة لونه أو طعمه أو ريحه، ولا يستعمل في طهارة ولا غيرها.', page: 17 },
    { text: 'يحرم استعمال آنية الذهب والفضة في الأكل والشرب والطهارة وسائر الاستعمال، للرجال والنساء.', page: 19 }
  ],
  terms: [
    { term: 'الطهارة', translit: 'aṭ-ṭahāra', meaning: 'لغة: النظافة والنزاهة عن الأقذار.', explanation: 'وشرعًا: رفع الحدث وزوال الخبث.', notes: [], page: 13 },
    { term: 'الحدث الأصغر', translit: 'al-ḥadath al-aṣghar', meaning: 'وصف معنوي يقوم بأعضاء الوضوء الأربعة فيمنع صحة الصلاة.', explanation: 'يرتفع بالوضوء.', notes: [], page: 13 },
    { term: 'الحدث الأكبر', translit: 'al-ḥadath al-akbar', meaning: 'وصف معنوي يقوم بالجسم كله فيمنع صحة الصلاة وما في حكمها.', explanation: 'يرتفع بالغسل.', notes: [], page: 13 },
    { term: 'الخبث', translit: 'al-khabath', meaning: 'النجاسة.', explanation: 'تجب إزالتها من بدن المصلي وثوبه ومكانه.', notes: [], page: 13 },
    { term: 'الماء الطهور', translit: 'al-māʾ aṭ-ṭahūr', meaning: 'الباقي على أصل خلقته ولم تغيره نجاسة.', explanation: 'كماء المطر والبحار والأنهار والعيون والآبار.', notes: ['[الفرقان: ٤٨]'], page: 15 },
    { term: 'الماء النجس', translit: 'al-māʾ an-najis', meaning: 'ما خالطته نجاسة فغيرت لونه أو طعمه أو ريحه.', explanation: '', notes: [], page: 17 },
    { term: 'الآنية', translit: 'al-āniya', meaning: 'الأوعية التي يحفظ فيها الماء وغيره.', explanation: '', notes: [], page: 19 },
    { term: 'الإناء المضبب', translit: 'al-ināʾ al-muḍabbab', meaning: 'إناء فيه لحام بذهب أو فضة.', explanation: 'يحرم إن كان اللحام ذهبًا، ويجوز اليسير من الفضة للحاجة.', notes: [], page: 20 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'أقسام الطهارة',
      intro: 'كما في مخطط الكتاب.',
      root: { label: 'الطهارة' },
      nodes: [
        { label: 'معنوية', sub: 'طهارة القلب من الشرك والمعاصي', page: 14 },
        { label: 'حسية من الحدث', sub: 'أصغر وأكبر', page: 14 },
        { label: 'حسية من النجاسة', sub: 'في البدن والثوب والمكان', page: 14 }
      ]
    },
    {
      type: 'compare',
      title: 'الماء المتغير بالطاهرات',
      intro: 'ثلاثة أحوال كما في الكتاب.',
      columns: ['الحال', 'الحكم'],
      rows: [
        { label: 'اختلط بطاهر ولم يتغير', cells: ['لم تتغير أوصافه', 'باق على طهوريته'] },
        { label: 'خرج عن اسم الماء', cells: ['كالشاي والعصير والمرق', 'لا يصح التطهر به'] },
        { label: 'تغير ولم يخرج عن اسمه', cells: ['كصابون غير لونه', 'خلاف، والأقرب أنه مطهر'] }
      ],
      page: 16
    },
    {
      type: 'compare',
      title: 'النجاسة الواقعة في الماء (للاطلاع فقط)',
      intro: 'ثلاثة أحوال كما في الكتاب.',
      columns: ['الحكم'],
      rows: [
        { label: 'غيرت أحد أوصافه', cells: ['نجس، قليلًا كان أو كثيرًا'] },
        { label: 'في الكثير ولم تغير', cells: ['طهور'] },
        { label: 'في القليل ولم تغير', cells: ['خلاف، والأقرب أنه طهور'] }
      ],
      page: 18
    },
    {
      type: 'cards',
      title: 'تطهير الماء النجس (للاطلاع فقط)',
      intro: 'بأي وسيلة زال التغير عاد طهورًا.',
      nodes: [
        { label: 'إضافة ماء آخر', sub: 'حتى تزول آثار التغير', page: 17 },
        { label: 'المكث ومرور الزمن', sub: 'حتى تزول أوصاف النجاسة الثلاثة', page: 17 },
        { label: 'وسائل التنقية الحديثة', sub: 'كمياه الصرف الصحي', page: 17 }
      ]
    }
  ],
  sections: [
    { title: 'قسما الطهارة', text: 'الطهارة المعنوية طهارة القلب من الشرك والمعاصي، والحسية رفع الحدث وزوال الخبث؛ والخبث النجاسة، وتجب إزالتها من بدن المصلي وثوبه ومكانه.', more: '[التوبة: ٢٨]، [الأحزاب: ٣٣]', page: 13 },
    { title: 'ما لا يضر الماء', text: 'لا يضر الماء ما أصابه من تغير بطول المكث أو المجاورة أو بما يشق صونه عنه كأوراق الشجر والطحلب.', more: '', page: 16 },
    { title: 'الماء النجس (للاطلاع فقط)', text: 'لا يجوز استعماله في الطهارة ولا في غيرها كالشرب وطبخ الطعام؛ فإن زال التغير بأي وسيلة عاد طهورًا، ومنه مياه الصرف الصحي إذا نقيت تمامًا.', more: FYI, page: 17 },
    { title: 'آنية الذهب والفضة', text: 'يحرم الأكل والشرب فيها كالملاعق والسكاكين والصحون والكاسات، والرجال والنساء سواء، ويلحق بها سائر وجوه الاستعمال من باب أولى؛ ويجوز ما سواها من الأواني الثمينة كالياقوت والألماس.', more: '', page: 19 },
    { title: 'الطهارة من إناء ذهب أو فضة', text: 'تصح الطهارة على الراجح لعدم العلاقة بين الطهارة وتحريم الإناء، لأن الإناء ليس شرطًا للوضوء.', more: '', page: 20 },
    { title: 'آنية الكفار (للاطلاع فقط)', text: 'من لا يعرف عنهم مباشرة النجاسات في أطعمتهم فآنيتهم مباحة؛ ومن يعرف عنهم ذلك فالأولى التنزه عنها، فإن لم يجد غيرها غسلها.', more: FYI, page: 20 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الطهارة', items: ['لغة: النظافة والنزاهة عن الأقذار.', 'شرعًا: رفع الحدث وزوال الخبث.'], page: 13, origin: 'boek' },
    { kind: 'onderscheid', title: 'الحدث الأصغر والأكبر', items: ['الأصغر: يقوم بأعضاء الوضوء ويرتفع بالوضوء.', 'الأكبر: يقوم بالجسم كله ويرتفع بالغسل.'], page: 13, origin: 'boek' },
    { kind: 'bewijs', title: 'طهورية ماء البحر', items: ['«هو الطهور ماؤه، الحل ميتته».'], page: 15, origin: 'boek' },
    { kind: 'uitzondering', title: 'الإناء المضبب', items: ['لحام الذهب: حرام مطلقًا.', 'لحام الفضة اليسير للحاجة: جائز.'], page: 20, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الطهارة معنوية وحسية، والحسية من الحدث ومن النجاسة.',
    'الحدث الأصغر بالوضوء، والأكبر بالغسل.',
    'الماء طهور ونجس، والمتغير بطاهر له ثلاثة أحوال.',
    'تحرم آنية الذهب والفضة في كل استعمال، ويجوز لحام الفضة اليسير للحاجة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'بماذا يرتفع الحدث الأكبر؟', options: ['بالغسل', 'بالوضوء', 'بالتيمم وحده', 'بغسل الثوب'], answer: 0, explain: 'لأنه وصف يقوم بالجسم كله.', page: 13 },
    { type: 'mc', q: 'ما حكم الماء الذي تغير بطاهر حتى خرج عن اسم الماء كالشاي؟', options: ['لا يصح التطهر به', 'طهور', 'نجس', 'يكره فقط'], answer: 0, explain: 'لأنه لم يعد ماء.', page: 16 },
    { type: 'tf', q: 'الماء المستعمل في الوضوء طاهر مطهر.', options: ['صواب', 'خطأ'], answer: 0, explain: 'طاهر في نفسه مطهر لغيره.', page: 16 },
    { type: 'mc', q: 'متى يكون الماء نجسًا؟', options: ['إذا غيرت النجاسة لونه أو طعمه أو ريحه', 'إذا طال مكثه', 'إذا وقعت فيه أوراق الشجر', 'إذا استعمل في الوضوء'], answer: 0, explain: 'كما في تعريف الماء النجس.', page: 17 },
    { type: 'tf', q: 'تحريم آنية الذهب والفضة خاص بالرجال.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الرجال والنساء سواء.', page: 19 },
    { type: 'mc', q: 'ما حكم الإناء الملحوم بفضة يسيرة للحاجة؟', options: ['جائز', 'حرام', 'مكروه كراهة تحريم', 'لا يجوز إلا للنساء'], answer: 0, explain: 'لحديث قدح النبي ﷺ.', page: 20 }
  ]),
  note: 'أنشطة الكتاب في صفحتي ١٤ و٢١، ونشاط في آخر صفحة ١٨. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Reinheid, onreinheid en soorten water',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Wat reinheid is en haar twee soorten, innerlijk en uiterlijk; kleine en grote ḥadath; daarna water: reinigend en onrein water en de gevallen van veranderd water; en tot slot vaatwerk: goud en zilver, gerepareerd vaatwerk en vaatwerk van niet-moslims.',
  source: { ...source, label: 'Kitāb al-Fiqh (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Reinheid, water en vaatwerk', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Reinheid', sub: 'les 1', page: 13, children: ['innerlijk', 'uiterlijk', 'kleine en grote ḥadath'] },
      { label: 'Reinigend water', sub: 'les 2', page: 15, children: ['in oorspronkelijke staat', 'veranderd door iets reins', 'gebruikt water'] },
      { label: 'Onrein water', sub: 'les 3', page: 17, children: ['veranderd door najāsa', 'zuiveren', 'weinig en veel water'] },
      { label: 'Vaatwerk', sub: 'les 4', page: 19, children: ['goud en zilver', 'gerepareerd vaatwerk', 'vaatwerk van niet-moslims'] }
    ]
  },
  points: [
    { text: 'Reinheid heeft twee soorten: innerlijk, het hart rein van shirk en zonden, en uiterlijk, het opheffen van ḥadath en verwijderen van najāsa.', page: 13 },
    { text: 'Kleine ḥadath wordt opgeheven met de woeḍoe, grote ḥadath met de ghusl.', page: 13 },
    { text: 'Water is in grote lijnen reinigend (ṭahūr) of onrein (najis).', page: 15 },
    { text: 'Reinigend water is water in zijn oorspronkelijke staat; het heft ḥadath op en verwijdert najāsa.', page: 15 },
    { text: 'Water dat door iets reins zo veranderd is dat het geen water meer heet, zoals thee of sap, kun je niet voor reiniging gebruiken.', page: 16 },
    { text: 'Water dat voor woeḍoe of ghusl gebruikt is, is zelf rein en reinigt ook.', page: 16 },
    { text: 'Onrein water is water waarvan najāsa kleur, smaak of geur veranderde; het mag niet voor reiniging of iets anders gebruikt worden.', page: 17 },
    { text: 'Gouden en zilveren vaatwerk is verboden om uit te eten, te drinken, je mee te reinigen en voor elk ander gebruik, voor mannen en vrouwen.', page: 19 }
  ],
  terms: [
    { term: 'الطهارة', translit: 'aṭ-ṭahāra', meaning: 'Taalkundig: schoonheid en vrij zijn van vuil.', explanation: 'In de fiqh: ḥadath opheffen en najāsa verwijderen.', notes: [], page: 13 },
    { term: 'الحدث الأصغر', translit: 'al-ḥadath al-aṣghar', meaning: 'Kleine ḥadath: een niet-zichtbare toestand van de vier woeḍoe-delen die het gebed ongeldig maakt.', explanation: 'Wordt opgeheven met de woeḍoe.', notes: [], page: 13 },
    { term: 'الحدث الأكبر', translit: 'al-ḥadath al-akbar', meaning: 'Grote ḥadath: een niet-zichtbare toestand van het hele lichaam die het gebed en wat daaronder valt ongeldig maakt.', explanation: 'Wordt opgeheven met de ghusl.', notes: [], page: 13 },
    { term: 'الخبث', translit: 'al-khabath', meaning: 'Najāsa, onreinheid.', explanation: 'Moet verwijderd worden van lichaam, kleding en plaats van wie bidt.', notes: [], page: 13 },
    { term: 'الماء الطهور', translit: 'al-māʾ aṭ-ṭahūr', meaning: 'Reinigend water: water in zijn oorspronkelijke staat dat niet door najāsa veranderd is.', explanation: 'Zoals regen, zeeën, rivieren, bronnen en putten.', notes: ['al-Furqān 25:48'], page: 15 },
    { term: 'الماء النجس', translit: 'al-māʾ an-najis', meaning: 'Onrein water: water waarvan najāsa kleur, smaak of geur veranderde.', explanation: '', notes: [], page: 17 },
    { term: 'الآنية', translit: 'al-āniya', meaning: 'Vaatwerk: houders waarin water en andere dingen bewaard worden.', explanation: '', notes: [], page: 19 },
    { term: 'الإناء المضبب', translit: 'al-ināʾ al-muḍabbab', meaning: 'Vaatwerk met een reparatie van goud of zilver.', explanation: 'Verboden bij goud; een kleine reparatie met zilver mag als het nodig is.', notes: [], page: 20 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'De soorten reinheid',
      intro: 'Zoals in het schema van het boek.',
      root: { label: 'Reinheid' },
      nodes: [
        { label: 'Innerlijk', sub: 'het hart rein van shirk en zonden', page: 14 },
        { label: 'Uiterlijk, van ḥadath', sub: 'klein en groot', page: 14 },
        { label: 'Uiterlijk, van najāsa', sub: 'op lichaam, kleding en plaats', page: 14 }
      ]
    },
    {
      type: 'compare',
      title: 'Water veranderd door iets reins',
      intro: 'Drie gevallen zoals in het boek.',
      columns: ['Geval', 'Oordeel'],
      rows: [
        { label: 'Vermengd, niet veranderd', cells: ['kleur, smaak en geur gelijk', 'blijft reinigend'] },
        { label: 'Heet geen water meer', cells: ['zoals thee, sap en bouillon', 'niet geschikt voor reiniging'] },
        { label: 'Veranderd, heet nog water', cells: ['zoals zeep die de kleur veranderde', 'meningsverschil; het dichtst bij is dat het reinigt'] }
      ],
      page: 16
    },
    {
      type: 'compare',
      title: 'Najāsa die in water valt (alleen ter kennisname)',
      intro: 'Drie gevallen zoals in het boek.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Een eigenschap veranderd', cells: ['onrein, of het weinig of veel water is'] },
        { label: 'In veel water, niet veranderd', cells: ['reinigend'] },
        { label: 'In weinig water, niet veranderd', cells: ['meningsverschil; het dichtst bij is dat het reinigend is'] }
      ],
      page: 18
    },
    {
      type: 'cards',
      title: 'Onrein water zuiveren (alleen ter kennisname)',
      intro: 'Op welke manier de verandering ook verdwijnt, het water wordt weer reinigend.',
      nodes: [
        { label: 'Ander water toevoegen', sub: 'tot de verandering weg is', page: 17 },
        { label: 'Laten staan', sub: 'tot de drie kenmerken van najāsa weg zijn', page: 17 },
        { label: 'Moderne zuivering', sub: 'zoals bij rioolwater', page: 17 }
      ]
    }
  ],
  sections: [
    { title: 'De twee soorten reinheid', text: 'Innerlijke reinheid is het hart rein houden van shirk en zonden; uiterlijke reinheid is ḥadath opheffen en khabath verwijderen. Khabath is najāsa; die moet weg van het lichaam, de kleding en de plaats van wie bidt.', more: 'at-Tawba 9:28, al-Aḥzāb 33:33', page: 13 },
    { title: 'Wat water niet schaadt', text: 'Water wordt niet onbruikbaar door verandering van lang staan, door iets wat ernaast ligt, of door wat er moeilijk uit te houden is, zoals bladeren en algen.', more: '', page: 16 },
    { title: 'Onrein water (alleen ter kennisname)', text: 'Het mag niet gebruikt worden voor reiniging of iets anders, zoals drinken of koken. Verdwijnt de verandering op welke manier ook, dan is het weer reinigend; ook rioolwater dat volledig gezuiverd is.', more: FYI_NL, page: 17 },
    { title: 'Gouden en zilveren vaatwerk', text: 'Eten en drinken ervan is verboden, ook met lepels, messen, borden en glazen, voor mannen en vrouwen gelijk; elk ander gebruik valt er nog meer onder. Ander kostbaar vaatwerk, zoals van robijn of diamant, is wel toegestaan.', more: '', page: 19 },
    { title: 'Reinigen uit een gouden of zilveren vat', text: 'Volgens de sterkste mening is de reiniging geldig, want de reiniging staat los van het verbod op het vat, omdat het vat geen voorwaarde voor de woeḍoe is.', more: '', page: 20 },
    { title: 'Vaatwerk van niet-moslims (alleen ter kennisname)', text: 'Van wie niet bekend is dat ze onreine dingen in hun eten gebruiken, is het vaatwerk toegestaan. Van wie dat wel bekend is, kun je het beter vermijden; is er niets anders, was het dan eerst.', more: FYI_NL, page: 20 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Reinheid', items: ['Taalkundig: schoonheid en vrij zijn van vuil.', 'In de fiqh: ḥadath opheffen en najāsa verwijderen.'], page: 13, origin: 'boek' },
    { kind: 'onderscheid', title: 'Kleine en grote ḥadath', items: ['Klein: rust op de woeḍoe-delen; opgeheven met de woeḍoe.', 'Groot: rust op het hele lichaam; opgeheven met de ghusl.'], page: 13, origin: 'boek' },
    { kind: 'bewijs', title: 'Zeewater is reinigend', items: ['"Het water ervan is reinigend, en wat erin sterft is toegestaan."'], page: 15, origin: 'boek' },
    { kind: 'uitzondering', title: 'Gerepareerd vaatwerk', items: ['Reparatie met goud: altijd verboden.', 'Kleine reparatie met zilver, als het nodig is: toegestaan.'], page: 20, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Reinheid is innerlijk en uiterlijk; uiterlijk betreft ḥadath en najāsa.',
    'Kleine ḥadath met de woeḍoe, grote ḥadath met de ghusl.',
    'Water is reinigend of onrein; water veranderd door iets reins kent drie gevallen.',
    'Gouden en zilveren vaatwerk is voor elk gebruik verboden; een kleine zilveren reparatie mag als het nodig is.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarmee wordt grote ḥadath opgeheven?', options: ['met de ghusl', 'met de woeḍoe', 'alleen met tayammum', 'door de kleding te wassen'], answer: 0, explain: 'Omdat het op het hele lichaam rust.', page: 13 },
    { type: 'mc', q: 'Wat is het oordeel over water dat door iets reins zo veranderd is dat het geen water meer heet, zoals thee?', options: ['niet geschikt voor reiniging', 'reinigend', 'onrein', 'alleen afgeraden'], answer: 0, explain: 'Het is geen water meer.', page: 16 },
    { type: 'tf', q: 'Water dat voor de woeḍoe gebruikt is, is rein en reinigt ook.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Het is zelf rein en reinigt ook.', page: 16 },
    { type: 'mc', q: 'Wanneer is water onrein?', options: ['als najāsa kleur, smaak of geur veranderde', 'als het lang gestaan heeft', 'als er bladeren in vielen', 'als het voor de woeḍoe gebruikt is'], answer: 0, explain: 'Zoals in de definitie van onrein water.', page: 17 },
    { type: 'tf', q: 'Het verbod op gouden en zilveren vaatwerk geldt alleen voor mannen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Mannen en vrouwen zijn hierin gelijk.', page: 19 },
    { type: 'mc', q: 'Wat is het oordeel over vaatwerk met een kleine zilveren reparatie die nodig was?', options: ['toegestaan', 'verboden', 'sterk afgeraden', 'alleen voor vrouwen'], answer: 0, explain: 'Vanwege de hadith over de beker van de Profeet ﷺ.', page: 20 }
  ]),
  note: 'Oefeningen van het boek op p. 14 en 21, en onderaan p. 18. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-fiqh', chapter: '1', unit: 1, ar, nl }
