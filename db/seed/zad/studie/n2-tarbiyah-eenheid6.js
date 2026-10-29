// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 6: الصبر (les 11, boek p. 43–48).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '43–48',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'عبد الله بن عباس', text: 'واعلم أن النصر مع الصبر', takhrij: 'أحمد وصححه الألباني', note: 'ضمان النصر.', pages: [44, 47], nl: 'En weet dat de overwinning met het geduld komt', nlNote: 'De garantie van hulp.' },
  { narrator: '', text: 'عجبا لأمر المؤمن، إن أمره كله له خير…', takhrij: 'رواه مسلم', note: 'منزلة الصبر.', pages: [45], nl: 'Hoe wonderlijk is de zaak van de gelovige: al zijn zaken zijn goed voor hem…', nlNote: 'De plaats van geduld.' },
  { narrator: '', text: 'إن شئت صبرت ولك الجنة، وإن شئت دعوت الله أن يعافيك', takhrij: 'البخاري ومسلم', note: 'للمرأة السوداء التي كانت تصرع، فاختارت الصبر وسألت ألا تتكشف.', pages: [45], nl: 'Als je wilt, ben je geduldig en krijg je het Paradijs; en als je wilt, vraag ik Allah je te genezen', nlNote: 'Tegen de zwarte vrouw die aanvallen kreeg; zij koos geduld en vroeg dat ze niet ontbloot zou worden.' },
  { narrator: '', text: 'ورجل دعته امرأة ذات منصب وجمال فقال: إني أخاف الله', takhrij: 'في الصحيحين', note: 'من السبعة؛ الصبر عن المعصية.', pages: [46], nl: 'En een man die door een vrouw van aanzien en schoonheid werd uitgenodigd en zei: ik vrees Allah', nlNote: 'Een van de zeven; geduld tegenover zonde.' },
  { narrator: 'أم سلمة', text: 'ما من مسلم تصيبه مصيبة فيقول ما أمره الله: إنا لله وإنا إليه راجعون، اللهم أجرني في مصيبتي وأخلف لي خيرا منها، إلا أخلف الله له خيرا منها', takhrij: 'رواه مسلم', note: 'قالت: فلما مات أبو سلمة قلت: أي المسلمين خير من أبي سلمة؟ ثم قلتها فأخلف الله لي رسول الله ﷺ.', pages: [46], nl: 'Geen moslim die door een ramp getroffen wordt en zegt wat Allah hem heeft opgedragen: "Wij behoren Allah toe en tot Hem keren wij terug; o Allah, beloon mij in mijn ramp en geef mij er iets beters voor in de plaats", of Allah geeft hem er iets beters voor', nlNote: 'Zij zei: toen Abū Salama stierf, zei ik: welke moslim is beter dan Abū Salama? Toen zei ik het, en Allah gaf mij de Boodschapper van Allah ﷺ in zijn plaats.' },
  { narrator: '', text: 'إنما الصبر عند الصدمة الأولى', takhrij: 'متفق عليه', note: '', pages: [46], nl: 'Echt geduld is bij de eerste klap', nlNote: '' },
  { narrator: '', text: 'وما أعطي أحد عطاء خيرا وأوسع من الصبر', takhrij: 'متفق عليه', note: '', pages: [47], nl: 'En niemand heeft een gave gekregen die beter en ruimer is dan geduld', nlNote: '' },
  { narrator: 'أبو مالك الأشعري', text: 'الصلاة نور، والصدقة برهان، والصبر ضياء، والقرآن حجة لك أو عليك', takhrij: 'رواه مسلم', note: 'الصبر ضياء.', pages: [47], nl: 'Het gebed is licht, liefdadigheid is bewijs, geduld is stralend licht, en de Koran is een argument voor of tegen je', nlNote: 'Geduld is stralend licht.' },
  { narrator: '', text: 'صبرا يا آل ياسر، فإن موعدكم الجنة', takhrij: 'الحاكم وصححه الألباني', note: 'لما مر بياسر وسمية وهم يعذبون.', pages: [48], nl: 'Geduld, familie van Yāsir, want jullie bestemming is het Paradijs', nlNote: 'Toen hij langs Yāsir en Sumayya kwam terwijl zij gemarteld werden.' },
  { narrator: '', text: 'يقول الله تعالى: ما لعبدي المؤمن عندي جزاء إذا قبضت صفيه من أهل الدنيا ثم احتسبه إلا الجنة', takhrij: 'رواه البخاري', note: 'حديث قدسي.', pages: [48], nl: 'Allah zegt: Mijn gelovige dienaar heeft bij Mij geen andere beloning dan het Paradijs als Ik zijn geliefde onder de mensen van de wereld wegneem en hij dat geduldig voor Mij draagt', nlNote: 'Een ḥadīth qudsī.' },
  { narrator: 'أبو موسى الأشعري', text: 'ابنوا لعبدي بيتا في الجنة، وسموه بيت الحمد', takhrij: 'الترمذي وحسنه', note: 'فيمن مات ولده فحمد واسترجع.', pages: [48], nl: 'Bouw voor Mijn dienaar een huis in het Paradijs en noem het het Huis van de Lof', nlNote: 'Over wie zijn kind verloor en Allah prees en "wij behoren Allah toe" zei.' }
]

const TAKHRIJ_NL = {
  'أحمد وصححه الألباني': 'Aḥmad; al-Albānī noemde hem ṣaḥīḥ',
  'رواه مسلم': 'Muslim',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s (al-Bukhārī en Muslim)',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'الحاكم وصححه الألباني': 'al-Ḥākim; al-Albānī noemde hem ṣaḥīḥ',
  'رواه البخاري': 'al-Bukhārī',
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde'
}
const NARRATOR_NL = { 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'أم سلمة': 'Umm Salama', 'أبو مالك الأشعري': 'Abū Mālik al-Ashʿarī', 'أبو موسى الأشعري': 'Abū Mūsā al-Ashʿarī' }

const PERSONS = [
  ['ibn-taymiyya', 'text', [44], 'قال: بالصبر واليقين تنال الإمامة في الدين.', 'Zei: met geduld en zekerheid bereik je leiderschap in de religie.'],
  ['ibn-abbas', 'text', [44, 47], 'روى «واعلم أن النصر مع الصبر».', 'Overleveraar van "weet dat de overwinning met het geduld komt".'],
  ['umar-ibn-al-khattab', 'text', [45], 'قال: خير عيش أدركناه بالصبر.', 'Zei: het beste leven bereikten wij door geduld.'],
  ['umm-salama', 'text', [46], 'قالت دعاء المصيبة لما مات أبو سلمة، فأخلف الله لها رسول الله ﷺ.', 'Zei de smeekbede bij een ramp toen Abū Salama stierf, en Allah gaf haar de Boodschapper van Allah ﷺ in de plaats.'],
  ['abu-salama-ibn-abd-al-asad', 'text', [46], 'زوج أم سلمة الأول.', 'De eerste man van Umm Salama.'],
  ['abu-malik-al-ashari', 'text', [47], 'روى «الصلاة نور… والصبر ضياء».', 'Overleveraar van "het gebed is licht… geduld is stralend licht".'],
  ['abu-musa-al-ashari', 'text', [48], 'روى «ابنوا لعبدي بيتًا في الجنة وسموه بيت الحمد».', 'Overleveraar van "bouw voor Mijn dienaar een huis in het Paradijs".']
]

const ar = {
  scope: 'unit',
  unit: 6,
  title: 'الصبر',
  subtitle: 'درس واحد في صفحة',
  summary: 'تعريف الصبر وحكمه وصوره في القرآن، ومنزلته من الإيمان، وأنواعه الثلاثة، وثمراته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السادسة في خريطة واحدة',
    intro: 'الصبر وأنواعه وثمراته.',
    root: { label: 'الصبر', sub: 'الوحدة السادسة' },
    nodes: [
      { label: 'تعريفه وحكمه', sub: 'الدرس ١١', page: 43, children: ['الحبس', 'واجب بالإجماع'] },
      { label: 'في القرآن', sub: 'الدرس ١١', page: 43, children: ['الثناء', 'المحبة', 'المعية', 'الإمامة'] },
      { label: 'أنواعه', sub: 'الدرس ١١', page: 45, children: ['على الطاعة', 'عن المعصية', 'على الأقدار'] },
      { label: 'ثمراته', sub: 'الدرس ١١', page: 47, children: ['خير عطاء', 'الضياء', 'الجنة وبيت الحمد'] }
    ]
  },
  points: [
    { text: 'الصبر ثلاثة أنواع: على الأمر، وعن النهي، وعلى المقدور، ويلازم العبد حتى الموت.', page: 43 },
    { text: 'الصبر لغة الحبس، واصطلاحًا حبس النفس عن محابها وهواها، وكفها عن الجزع، وحبسها على معالي الأمور.', page: 43 },
    { text: 'الصبر واجب بالإجماع.', page: 43 },
    { text: 'جاء الصبر في القرآن بالثناء على أهله، ومحبة الله لهم، ومعيته الخاصة، وجزائهم بأحسن ما عملوا، وضمان النصر، والفلاح، والإمامة في الدين.', page: 43 },
    { text: 'الصبر من الإيمان بمنزلة الرأس من الجسد.', page: 45 },
    { text: 'إنما الصبر عند الصدمة الأولى.', page: 46 },
    { text: 'من ثمرات الصبر أنه خير عطاء وأوسعه، وضياء، وفلاح، ومحبة الله، والمغفرة والأجر بغير حساب، والجنة.', page: 47 }
  ],
  terms: [
    { term: 'الصبر', translit: 'aṣ-ṣabr', meaning: 'لغة: الحبس؛ اصطلاحًا: حبس النفس عن محابها وهواها، وكفها عن الجزع، وحبسها على معالي الأمور.', explanation: '', notes: [], page: 43 },
    { term: 'الجزع', translit: 'al-jazaʿ', meaning: 'ضد الصبر: عدم احتمال المصيبة والتسخط.', explanation: '', notes: [], page: 43 },
    { term: 'الاسترجاع', translit: 'al-istirjāʿ', meaning: 'قول: إنا لله وإنا إليه راجعون عند المصيبة.', explanation: '', notes: [], page: 46 },
    { term: 'بيت الحمد', translit: 'bayt al-ḥamd', meaning: 'بيت في الجنة لمن مات ولده فحمد واسترجع.', explanation: '', notes: [], page: 48 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'أنواع الصبر',
      intro: 'كما في الدرس الحادي عشر.',
      columns: ['أمثلته'],
      rows: [
        { label: 'الصبر على الطاعة', cells: ['الذكر والدعوة والثبات والجهاد وطلب العلم'] },
        { label: 'الصبر عن المعصية', cells: ['ولو تيسرت أسبابها، كيوسف عليه السلام والذي دعته امرأة فقال: إني أخاف الله'] },
        { label: 'الصبر على الأقدار', cells: ['المصائب، مع الاسترجاع ودعاء المصيبة'] }
      ],
      page: 45
    }
  ],
  sections: [
    { title: 'معنى الحبس', text: 'قال تعالى: ﴿واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه﴾ [الكهف: ٢٨]، أي احبس نفسك معهم.', page: 43 },
    { title: 'الإمامة في الدين', text: 'قال ابن تيمية: بالصبر واليقين تنال الإمامة في الدين، كما في سورة السجدة.', page: 44 },
    { title: 'صبر يوسف عليه السلام', text: 'غلقت امرأة العزيز الأبواب وقالت: هيت لك، فقال: إنه ربي، أي سيدي، فصبر عن المعصية مع تيسر أسبابها.', page: 46 },
    { title: 'آية الصابرين', text: 'تنتهي آيات في إبراهيم ولقمان وسبأ والشورى بقوله تعالى: ﴿إن في ذلك لآيات لكل صبار شكور﴾، فلا ينتفع بالآيات إلا الصابرون.', page: 47 },
    { title: 'الأجر بغير حساب', text: 'قال تعالى: ﴿إنما يوفى الصابرون أجرهم بغير حساب﴾ [الزمر: ١٠].', page: 48 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الصبر', items: ['حبس النفس عن محابها وهواها', 'وكفها عن الجزع', 'وحبسها على معالي الأمور'], page: 43, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع الصبر', items: ['على طاعة الله', 'عن معصية الله', 'على أقدار الله'], page: 45, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الصبر حبس النفس، وهو واجب بالإجماع.',
    'أنواعه: على الطاعة، وعن المعصية، وعلى الأقدار.',
    'الصبر من الإيمان كالرأس من الجسد.',
    'الصبر عند الصدمة الأولى، ومن قال دعاء المصيبة أخلف الله له خيرًا.',
    'جزاء الصابرين بغير حساب.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى الصبر في اللغة؟', options: ['الحبس', 'الشكر', 'الفرح', 'الرضا'], answer: 0, explain: 'كما في الدرس.', page: 43 },
    { type: 'mc', q: 'ما حكم الصبر؟', options: ['واجب بالإجماع', 'مستحب', 'مباح', 'خاص بالأنبياء'], answer: 0, explain: 'كما في الدرس.', page: 43 },
    { type: 'tf', q: 'الصبر الحقيقي يكون بعد زوال المصيبة.', options: ['صواب', 'خطأ'], answer: 1, explain: '«إنما الصبر عند الصدمة الأولى».', page: 46 },
    { type: 'mc', q: 'ما اسم البيت الذي يبنى في الجنة لمن مات ولده فحمد واسترجع؟', options: ['بيت الحمد', 'بيت الصبر', 'بيت الشكر', 'بيت الرضا'], answer: 0, explain: 'حديث أبي موسى.', page: 48 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٤٨.'
}

const nl = {
  scope: 'unit',
  unit: 6,
  title: 'Geduld',
  subtitle: 'Eén les op een pagina',
  summary: 'De betekenis van geduld, het oordeel erover en hoe het in de Koran voorkomt, de plaats van geduld in het geloof, de drie soorten, en de vruchten.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 6 in één kaart',
    intro: 'Geduld, de soorten en de vruchten.',
    root: { label: 'Geduld', sub: 'Eenheid 6' },
    nodes: [
      { label: 'Betekenis en oordeel', sub: 'les 11', page: 43, children: ['inhouden', 'verplicht volgens consensus'] },
      { label: 'In de Koran', sub: 'les 11', page: 43, children: ['lof', 'liefde', 'Allahs bijzondere nabijheid', 'leiderschap'] },
      { label: 'Soorten', sub: 'les 11', page: 45, children: ['bij gehoorzaamheid', 'tegenover zonde', 'bij de beschikking'] },
      { label: 'Vruchten', sub: 'les 11', page: 47, children: ['de beste gave', 'stralend licht', 'het Paradijs en het Huis van de Lof'] }
    ]
  },
  points: [
    { text: 'Er zijn drie soorten geduld: bij wat geboden is, tegenover wat verboden is, en bij wat beschikt is; het blijft de dienaar bij tot zijn dood.', page: 43 },
    { text: 'Ṣabr betekent letterlijk inhouden; in de leer: de ziel weerhouden van wat zij begeert, haar behoeden voor jammeren, en haar vasthouden aan verheven zaken.', page: 43 },
    { text: 'Geduld is volgens consensus verplicht.', page: 43 },
    { text: 'In de Koran komt geduld voor met lof voor wie geduldig is, Allahs liefde, Zijn bijzondere nabijheid, beloning naar het beste, gegarandeerde hulp, succes en leiderschap in de religie.', page: 43 },
    { text: 'Geduld staat tot het geloof als het hoofd tot het lichaam.', page: 45 },
    { text: 'Echt geduld is bij de eerste klap.', page: 46 },
    { text: 'Vruchten van geduld: het is de beste en ruimste gave, stralend licht, succes, Allahs liefde, vergeving en beloning zonder afrekening, en het Paradijs.', page: 47 }
  ],
  terms: [
    { term: 'الصبر', translit: 'aṣ-ṣabr', meaning: 'Letterlijk: inhouden; in de leer: de ziel weerhouden van wat zij begeert, haar behoeden voor jammeren, en haar vasthouden aan verheven zaken.', explanation: '', notes: [], page: 43 },
    { term: 'الجزع', translit: 'al-jazaʿ', meaning: 'Het tegendeel van geduld: een ramp niet kunnen dragen en er boos om zijn.', explanation: '', notes: [], page: 43 },
    { term: 'الاسترجاع', translit: 'al-istirjāʿ', meaning: 'Bij een ramp zeggen: wij behoren Allah toe en tot Hem keren wij terug.', explanation: '', notes: [], page: 46 },
    { term: 'بيت الحمد', translit: 'bayt al-ḥamd', meaning: 'Het Huis van de Lof: een huis in het Paradijs voor wie zijn kind verloor en Allah prees.', explanation: '', notes: [], page: 48 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Soorten geduld',
      intro: 'Zoals in les 11.',
      columns: ['Voorbeelden'],
      rows: [
        { label: 'Bij gehoorzaamheid', cells: ['gedenken, oproepen, standvastigheid, strijd en kennis zoeken'] },
        { label: 'Tegenover zonde', cells: ['ook als de gelegenheid er is, zoals Yūsuf, vrede zij met hem, en de man die zei: ik vrees Allah'] },
        { label: 'Bij de beschikking', cells: ['rampen, met "wij behoren Allah toe" en de smeekbede bij een ramp'] }
      ],
      page: 45
    }
  ],
  sections: [
    { title: 'Inhouden', text: 'Allah zegt: "Houd jezelf geduldig bij hen die hun Heer ʼs morgens en ʼs avonds aanroepen, Zijn aangezicht zoekend" (al-Kahf 18:28), dat wil zeggen: houd jezelf bij hen.', page: 43 },
    { title: 'Leiderschap in de religie', text: 'Ibn Taymiyya zei: met geduld en zekerheid bereik je leiderschap in de religie, zoals in soera as-Sajda.', page: 44 },
    { title: 'Het geduld van Yūsuf', text: 'De vrouw van al-ʿAzīz sloot de deuren en zei: kom hier. Hij zei: hij is mijn heer, dat wil zeggen mijn meester; zo was hij geduldig tegenover de zonde terwijl de gelegenheid er was.', page: 46 },
    { title: 'Tekenen voor de geduldigen', text: 'Verzen in Ibrāhīm, Luqmān, Sabaʾ en ash-Shūrā eindigen met "daarin zijn tekenen voor ieder die zeer geduldig en dankbaar is"; alleen de geduldigen hebben baat bij de tekenen.', page: 47 },
    { title: 'Beloning zonder afrekening', text: 'Allah zegt: "De geduldigen krijgen hun beloning ten volle, zonder afrekening" (az-Zumar 39:10).', page: 48 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Geduld', items: ['de ziel weerhouden van wat zij begeert', 'haar behoeden voor jammeren', 'haar vasthouden aan verheven zaken'], page: 43, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten geduld', items: ['bij gehoorzaamheid aan Allah', 'tegenover ongehoorzaamheid aan Allah', 'bij Allahs beschikking'], page: 45, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Geduld is jezelf inhouden; het is volgens consensus verplicht.',
    'De soorten: bij gehoorzaamheid, tegenover zonde, bij de beschikking.',
    'Geduld staat tot het geloof als het hoofd tot het lichaam.',
    'Geduld is bij de eerste klap; wie de smeekbede bij een ramp zegt, krijgt iets beters.',
    'De geduldigen worden beloond zonder afrekening.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent ṣabr letterlijk?', options: ['inhouden', 'danken', 'blijdschap', 'tevredenheid'], answer: 0, explain: 'Zoals in de les.', page: 43 },
    { type: 'mc', q: 'Wat is het oordeel over geduld?', options: ['verplicht volgens consensus', 'aanbevolen', 'toegestaan', 'alleen voor profeten'], answer: 0, explain: 'Zoals in de les.', page: 43 },
    { type: 'tf', q: 'Echt geduld is als de ramp voorbij is.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Echt geduld is bij de eerste klap."', page: 46 },
    { type: 'mc', q: 'Hoe heet het huis in het Paradijs voor wie zijn kind verloor en Allah prees?', options: ['het Huis van de Lof', 'het Huis van het Geduld', 'het Huis van de Dank', 'het Huis van de Tevredenheid'], answer: 0, explain: 'De hadith van Abū Mūsā.', page: 48 }
  ]),
  note: 'Oefening van het boek op p. 48. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '11', unit: 6, ar, nl }
