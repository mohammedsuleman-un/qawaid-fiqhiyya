// Hoofdstukkaart bij التفسير (٢), eenheid 6: سورة المطففين (lessen 22–24, boek p. 85–102).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Vers 1–6 staan in het boek nog in les 21 (p. 85–88) en zijn hier
// meegenomen. De uitspraken van Ibn ʿAbbās (p. 86) en Ibn ʿUmar via Nāfiʿ (p. 88) staan in het boek
// zonder bron en zijn daarom niet in het hadith-tabblad opgenomen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (٢)، سلسلة زاد العلمية',
  pages: '85–102',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'ابن عباس', text: 'لما قدم نبي الله ﷺ المدينة كانوا من أخبث الناس كيلا، فأنزل الله ﴿ويل للمطففين﴾ فحسنوا الكيل بعد ذلك', takhrij: 'أخرجه ابن ماجه وحسنه الألباني', note: 'سبب نزول أول السورة.', pages: [87], nl: 'Toen de Profeet van Allah ﷺ in Medina aankwam, behoorden zij tot de mensen die het slechtst maten. Toen openbaarde Allah "Wee de oneerlijke meters", en daarna maten zij eerlijk', nlNote: 'De aanleiding van de openbaring van het begin van de soera.' },
  { narrator: 'ابن عمر', text: '﴿يوم يقوم الناس لرب العالمين﴾: حتى يغيب أحدهم في رشحه إلى أنصاف أذنيه', takhrij: 'أخرجه البخاري ومسلم', note: 'ذكره الكتاب عند الآية ٦.', pages: [88], nl: '"De dag waarop de mensen voor de Heer van de werelden staan": totdat ieder van hen tot halverwege zijn oren in zijn zweet verdwijnt', nlNote: 'Genoemd bij vers 6.' },
  { narrator: 'أبو هريرة', text: 'إن العبد إذا أخطأ خطيئة نكتت في قلبه نكتة سوداء، فإذا هو نزع واستغفر الله وتاب صقل قلبه، فإن عاد زيد فيها حتى تعلو على قلبه، وهو الران الذي ذكر الله في كتابه: ﴿كلا بل ران على قلوبهم ما كانوا يكسبون﴾', takhrij: 'أخرجه الترمذي وصححه', note: 'ذكره الكتاب في تفسير الران.', pages: [92], nl: 'Als de dienaar een zonde begaat, komt er een zwarte vlek op zijn hart. Als hij ermee ophoudt, Allah om vergeving vraagt en berouw toont, wordt zijn hart gepolijst. Als hij terugvalt, wordt de vlek groter totdat zij zijn hart bedekt. Dat is de rān die Allah in Zijn Boek noemt: "Nee, wat zij verdienden heeft hun harten bedekt"', nlNote: 'Genoemd bij de uitleg van rān.' }
]

const TAKHRIJ_NL = { 'أخرجه ابن ماجه وحسنه الألباني': 'Ibn Māja; al-Albānī noemde hem ḥasan', 'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim', 'أخرجه الترمذي وصححه': 'at-Tirmidhī, die hem ṣaḥīḥ noemde' }
const NARRATOR_NL = { 'ابن عباس': 'Ibn ʿAbbās', 'ابن عمر': 'Ibn ʿUmar', 'أبو هريرة': 'Abū Hurayra' }

const PERSONS = [
  ['ibn-abbas', 'text', [86, 87], 'روى سبب نزول ﴿ويل للمطففين﴾، ونقل عنه الكتاب أن السورة مدنية إلا ثماني آيات.', 'Overleverde de aanleiding van "Wee de oneerlijke meters"; het boek citeert hem ook over de vraag welke verzen Medinensisch zijn.'],
  ['ibn-umar', 'text', [88], 'روى حديث الرشح يوم القيامة، وكان يعظ البائعين بإيفاء الكيل والوزن.', 'Overleverde de hadith over het zweet op de Opstandingsdag en vermaande verkopers om eerlijk te meten en te wegen.'],
  ['nafi-mawla-ibn-umar', 'text', [88], 'نقل وعظ ابن عمر للبائعين.', 'Gaf de vermaning van Ibn ʿUmar aan de verkopers door.'],
  ['az-zamakhshari', 'text', [89], 'نقل عنه الكتاب من «الكشاف» بيان عظم ذنب التطفيف.', 'Het boek citeert uit zijn al-Kashshāf over de ernst van oneerlijk meten.'],
  ['abu-hurayra', 'text', [92], 'روى حديث النكتة السوداء والران.', 'Overleverde de hadith over de zwarte vlek en de rān.'],
  ['ibn-maja', 'takhrij', [87], 'أخرج حديث سبب النزول.', 'Nam de hadith over de aanleiding op.'],
  ['al-albani', 'takhrij', [87], 'حسن حديث سبب النزول.', 'Noemde de hadith over de aanleiding ḥasan.'],
  ['at-tirmidhi', 'takhrij', [92], 'أخرج حديث الران وصححه.', 'Nam de hadith over de rān op en noemde hem ṣaḥīḥ.']
]

const ar = {
  scope: 'unit',
  unit: 6,
  title: 'سورة المطففين',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة (ومعها الآيات ١–٦ من الدرس ٢١)',
  summary: 'تبدأ السورة بالوعيد للمطففين في الكيل والوزن، ثم تبين أن كتاب الفجار في سجين وأن الذنوب ران على قلوبهم فحجبوا عن ربهم، وأن كتاب الأبرار في عليين ولهم نعيم ورحيق مختوم ختامه مسك، وتختم بسخرية المجرمين من المؤمنين في الدنيا وضحك المؤمنين منهم يوم القيامة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'سورة المطففين في خريطة واحدة',
    intro: 'مقاطع السورة كما قسمها الكتاب.',
    root: { label: 'سورة المطففين', sub: 'الوحدة السادسة' },
    nodes: [
      { label: 'المطففون', sub: 'الآيات ١–٦', page: 87, children: ['سبب النزول', 'يستوفون ويخسرون', 'ليوم عظيم'] },
      { label: 'كتاب الفجار', sub: 'الآيات ٧–١٧', page: 91, children: ['سجين', 'الران', 'محجوبون'] },
      { label: 'كتاب الأبرار', sub: 'الآيات ١٨–٢٨', page: 95, children: ['عليون', 'على الأرائك', 'رحيق مختوم'] },
      { label: 'السخرية والجزاء', sub: 'الآيات ٢٩–٣٦', page: 99, children: ['يضحكون ويتغامزون', 'فاليوم يضحك المؤمنون'] }
    ]
  },
  points: [
    { text: 'التطفيف البخس في المكيال والميزان: بالزيادة إن أخذ وبالنقصان إن أعطى.', page: 87 },
    { text: 'لو أيقن المطففون بالبعث لأقلعوا وتابوا؛ فعدم اليقين جرأهم على التطفيف.', page: 88 },
    { text: 'من يأخذ أموال الناس قهرًا أو سرقة أولى بالوعيد من المطفف.', page: 89 },
    { text: 'جمع المطففون بين الشح في طلب حقهم والبخل بما عليهم، ويقاس عليه كل من طلب حقه كاملًا ومنع ما عليه.', page: 89 },
    { text: 'الذنوب ترين على القلب حتى ينطمس نوره فيرى الباطل حقًّا والحق باطلًا.', page: 93 },
    { text: 'استدل أهل السنة بحجب الفجار عن ربهم على رؤية الأبرار له.', page: 93 },
    { text: 'التنافس في الآخرة يرفع المتنافسين، والتنافس في الدنيا يحط بهم.', page: 97 },
    { text: 'حكم الله دائر بين الفضل للمؤمنين والعدل مع الكافرين.', page: 101 }
  ],
  terms: [
    { term: 'التطفيف', translit: 'at-taṭfīf', meaning: 'البخس في المكيال والميزان؛ من الطفيف وهو القليل.', explanation: '', notes: [], page: 87 },
    { term: 'ويل', translit: 'wayl', meaning: 'كلمة وعيد بالخسار والهلاك وشدة العذاب؛ وقيل واد في جهنم.', explanation: '', notes: [], page: 87 },
    { term: 'الظن', translit: 'aẓ-ẓann', meaning: 'الأصل فيه عدم التيقن، ويأتي بمعنى اليقين، كما في ﴿ألا يظن أولئك﴾.', explanation: '', notes: [], page: 89 },
    { term: 'سجين', translit: 'sijjīn', meaning: 'الأرض السابعة السفلى، مستقر الفجار؛ فعيل من السجن.', explanation: '', notes: [], page: 91 },
    { term: 'مرقوم', translit: 'marqūm', meaning: 'مكتوب مفروغ منه؛ وأصل الرقم الكتابة.', explanation: '', notes: [], page: 91 },
    { term: 'أساطير الأولين', translit: 'asāṭīr al-awwalīn', meaning: 'أحاديث الأولين وأباطيلهم التي كتبوها وزخرفوها.', explanation: '', notes: [], page: 92 },
    { term: 'ران', translit: 'rāna', meaning: 'غلب على القلب حتى حجبه عن الحق؛ وأصل الرين الغلبة.', explanation: '', notes: [], page: 92 },
    { term: 'صالو الجحيم', translit: 'ṣālū al-jaḥīm', meaning: 'داخلوها مشويون بحرها.', explanation: '', notes: [], page: 93 },
    { term: 'عليون', translit: 'ʿilliyyūn', meaning: 'في السماء السابعة، أعلى الجنة وأوسعها، وفيها أرواح المؤمنين.', explanation: '', notes: [], page: 95 },
    { term: 'الأرائك', translit: 'al-arāʾik', meaning: 'جمع أريكة: السرير المزخرف المزين، من أفخر الأسرة.', explanation: '', notes: [], page: 96 },
    { term: 'الرحيق', translit: 'ar-raḥīq', meaning: 'شراب خالص؛ من أسماء الخمر، أجودها وأصفاها.', explanation: '', notes: [], page: 96 },
    { term: 'ختامه مسك', translit: 'khitāmuhu misk', meaning: 'آخره مسك طيب الرائحة.', explanation: '', notes: [], page: 97 },
    { term: 'تسنيم', translit: 'tasnīm', meaning: 'أشرف شراب أهل الجنة وأعلاه.', explanation: '', notes: [], page: 97 },
    { term: 'يتغامزون', translit: 'yataghāmazūn', meaning: 'يشيرون بالجفن والحاجب استهزاء؛ وأصل الغمز العيب.', explanation: '', notes: [], page: 99 },
    { term: 'ثوب', translit: 'thuwwiba', meaning: 'جوزي؛ من ثاب أي رجع، ويستعمل الثواب في الخير والشر.', explanation: '', notes: [], page: 100 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'كتاب الفجار وكتاب الأبرار',
      intro: 'مقابلة بين المقطعين.',
      columns: ['مكان الكتاب', 'حالهم', 'مصيرهم'],
      rows: [
        { label: 'الفجار', cells: ['سجين: الأرض السابعة السفلى', 'ران على قلوبهم ما كسبوا', 'محجوبون عن ربهم، صالو الجحيم'] },
        { label: 'الأبرار', cells: ['عليون: في السماء السابعة', 'يشهد كتابهم المقربون', 'في نعيم، على الأرائك ينظرون'] }
      ],
      page: 95
    },
    {
      type: 'steps',
      title: 'كيف يتكون الران',
      intro: 'كما في حديث أبي هريرة.',
      nodes: [
        { label: 'خطيئة', sub: 'نكتة سوداء في القلب', page: 92 },
        { label: 'نزع واستغفر وتاب', sub: 'صقل قلبه', page: 92 },
        { label: 'عاد', sub: 'زيد فيها', page: 92 },
        { label: 'حتى تعلو على قلبه', sub: 'وهو الران', page: 92 }
      ]
    },
    {
      type: 'compare',
      title: 'الضحك في الدارين',
      intro: 'الجزاء من جنس العمل.',
      columns: ['في الدنيا', 'يوم القيامة'],
      rows: [
        { label: 'المجرمون', cells: ['يضحكون من المؤمنين ويتغامزون', 'أذلاء معذبون'] },
        { label: 'المؤمنون', cells: ['يقال عنهم: إن هؤلاء لضالون', 'يضحكون من الكفار على الأرائك'] }
      ],
      page: 100
    }
  ],
  sections: [
    { title: 'عظم ذنب التطفيف', text: 'نقل الكتاب عن الكشاف أن الإنكار والتعجيب وكلمة الظن ووصف اليوم بالعظيم وقيام الناس لرب العالمين بيان بليغ لعظم ذنب التطفيف.', page: 89 },
    { title: 'يوم عظيم', text: 'عسير على الكافرين، ويسير على المؤمنين بفضل الله كأنما يؤدي العبد صلاة فريضة من سهولته.', page: 88 },
    { title: 'النظر على الأرائك', text: 'قال بعض العلماء: يشمل النظر إلى وجه الله، وجعلوا الآية من أدلة ثبوت الرؤية في الجنة.', page: 96 },
    { title: 'التنافس لا يخرب الأرض', text: 'الإسلام يجعل الدنيا مزرعة الآخرة، وعمارة الأرض مع الصلاح والتقوى وظيفة المؤمن.', page: 97 },
    { title: 'خلف المستهزئين', text: 'من يصف أهل الخير بالرجعية والتخلف والمستقيم بالتشدد؛ وورثة الرسل ينالهم ما نال الرسل.', page: 101 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'الشح والبخل عند المطففين', items: ['الشح: طلب حقهم كاملًا بلا مسامحة.', 'البخل: منع ما يجب عليهم من إتمام الكيل والوزن.'], page: 89, origin: 'boek' },
    { kind: 'bewijs', title: 'دليل الرؤية من السورة', items: ['﴿كلا إنهم عن ربهم يومئذ لمحجوبون﴾: حجب الفجار في حال السخط يدل على رؤية الأبرار في حال الرضا.', '﴿على الأرائك ينظرون﴾ عند بعض العلماء.'], page: 93, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'ويل للمطففين الذين يستوفون ويخسرون.',
    'كتاب الفجار في سجين، والذنوب ران على قلوبهم.',
    'الفجار محجوبون عن ربهم، وفيه دليل على رؤية الأبرار.',
    'كتاب الأبرار في عليين، ولهم رحيق مختوم ختامه مسك.',
    'من ضحك من المؤمنين في الدنيا ضحكوا منه يوم القيامة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما التطفيف؟', options: ['البخس في المكيال والميزان', 'الغش في النقود', 'كثرة البيع', 'الربا'], answer: 0, explain: 'بالزيادة إن أخذ وبالنقصان إن أعطى.', page: 87 },
    { type: 'mc', q: 'ما معنى «يظن» في ﴿ألا يظن أولئك أنهم مبعوثون﴾؟', options: ['يوقن', 'يشك', 'يتوهم', 'يرجو'], answer: 0, explain: 'الظن يأتي بمعنى اليقين، وهو كثير في القرآن.', page: 89 },
    { type: 'mc', q: 'أين «سجين»؟', options: ['الأرض السابعة السفلى', 'السماء السابعة', 'بين السماء والأرض', 'في البحر'], answer: 0, explain: 'مأوى الفجار ومستقرهم.', page: 91 },
    { type: 'tf', q: '﴿كتاب مرقوم﴾ تفسير لكلمة «سجين».', options: ['صواب', 'خطأ'], answer: 1, explain: 'هو بيان للكتاب المذكور لا تفسير لسجين.', page: 91 },
    { type: 'mc', q: 'ما «تسنيم»؟', options: ['أشرف شراب أهل الجنة', 'نهر في الدنيا', 'اسم للعسل', 'شجرة في الجنة'], answer: 0, explain: 'يشرب بها المقربون صرفًا.', page: 97 },
    { type: 'tf', q: 'حكم الله للمؤمنين فضل، وللكافرين عدل.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما في فوائد الصفحة ١٠١.', page: 101 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٩٠ و٩٤ و٩٨ و١٠٢.'
}

const nl = {
  scope: 'unit',
  unit: 6,
  title: 'Soera al-Muṭaffifīn',
  subtitle: 'Drie lessen samen op één pagina (met vers 1–6 uit les 21)',
  summary: 'De soera begint met een dreiging voor wie oneerlijk meet en weegt; daarna dat het boek van de zondaars in sijjīn is, dat hun zonden hun harten bedekten en dat zij van hun Heer afgeschermd worden; dan dat het boek van de vromen in ʿilliyyūn is en dat zij gelukzaligheid krijgen en een verzegelde drank met een slot van muskus; en tot slot de spot van de misdadigers met de gelovigen in deze wereld en het lachen van de gelovigen om hen op de Opstandingsdag.',
  source: { ...source, label: 'At-Tafsīr (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Soera al-Muṭaffifīn in één kaart',
    intro: 'De delen van de soera zoals het boek ze indeelt.',
    root: { label: 'Soera al-Muṭaffifīn', sub: 'Eenheid 6' },
    nodes: [
      { label: 'De oneerlijke meters', sub: 'vers 1–6', page: 87, children: ['aanleiding', 'volle maat nemen, te weinig geven', 'voor een geweldige dag'] },
      { label: 'Het boek van de zondaars', sub: 'vers 7–17', page: 91, children: ['sijjīn', 'de bedekking van het hart', 'afgeschermd'] },
      { label: 'Het boek van de vromen', sub: 'vers 18–28', page: 95, children: ['ʿilliyyūn', 'op rustbanken', 'verzegelde drank'] },
      { label: 'Spot en vergelding', sub: 'vers 29–36', page: 99, children: ['lachen en knipogen', 'vandaag lachen de gelovigen'] }
    ]
  },
  points: [
    { text: 'Taṭfīf is oneerlijk meten en wegen: te veel nemen als je ontvangt en te weinig geven als je geeft.', page: 87 },
    { text: 'Waren de oneerlijke meters zeker van de opwekking, dan waren zij gestopt en hadden zij berouw getoond; dat gebrek aan zekerheid maakte hen brutaal.', page: 88 },
    { text: 'Wie het bezit van mensen met geweld of diefstal neemt, verdient de dreiging nog meer dan de oneerlijke meter.', page: 89 },
    { text: 'De oneerlijke meters combineerden hebzucht bij het eisen van hun recht met gierigheid bij wat zij verschuldigd waren; dat geldt voor iedereen die zijn recht volledig eist en het recht van anderen onthoudt.', page: 89 },
    { text: 'Zonden bedekken het hart tot zijn licht dooft en het de onwaarheid voor waarheid aanziet en omgekeerd.', page: 93 },
    { text: 'Ahl as-Sunna leiden uit het afschermen van de zondaars af dat de vromen hun Heer zullen zien.', page: 93 },
    { text: 'Wedijveren voor het hiernamaals verheft wie wedijveren; wedijveren om deze wereld haalt hen omlaag.', page: 97 },
    { text: 'Allahs oordeel is gunst voor de gelovigen en rechtvaardigheid voor de ongelovigen.', page: 101 }
  ],
  terms: [
    { term: 'التطفيف', translit: 'at-taṭfīf', meaning: 'Oneerlijk meten en wegen; van ṭafīf, gering.', explanation: '', notes: [], page: 87 },
    { term: 'ويل', translit: 'wayl', meaning: 'Een woord van dreiging met verlies, ondergang en zware straf; volgens anderen een dal in de Hel.', explanation: '', notes: [], page: 87 },
    { term: 'الظن', translit: 'aẓ-ẓann', meaning: 'Oorspronkelijk vermoeden, maar het kan ook zekerheid betekenen, zoals in "denken zij niet...".', explanation: '', notes: [], page: 89 },
    { term: 'سجين', translit: 'sijjīn', meaning: 'De zevende, laagste aarde, de verblijfplaats van de zondaars; van sijn, gevangenis.', explanation: '', notes: [], page: 91 },
    { term: 'مرقوم', translit: 'marqūm', meaning: 'Opgeschreven en afgesloten; raqm betekent schrijven.', explanation: '', notes: [], page: 91 },
    { term: 'أساطير الأولين', translit: 'asāṭīr al-awwalīn', meaning: 'De verhalen en verzinsels van de vroegere volken, opgeschreven en opgesmukt.', explanation: '', notes: [], page: 92 },
    { term: 'ران', translit: 'rāna', meaning: 'Het overmeesterde het hart tot het voor de waarheid afgeschermd was; rayn is overmeesteren.', explanation: '', notes: [], page: 92 },
    { term: 'صالو الجحيم', translit: 'ṣālū al-jaḥīm', meaning: 'Zij gaan de Hel in en worden door haar hitte geroosterd.', explanation: '', notes: [], page: 93 },
    { term: 'عليون', translit: 'ʿilliyyūn', meaning: 'In de zevende hemel, het hoogste en ruimste deel van het Paradijs, waar de zielen van de gelovigen zijn.', explanation: '', notes: [], page: 95 },
    { term: 'الأرائك', translit: 'al-arāʾik', meaning: 'Meervoud van arīka: een versierde rustbank, een van de prachtigste soorten.', explanation: '', notes: [], page: 96 },
    { term: 'الرحيق', translit: 'ar-raḥīq', meaning: 'Zuivere drank; een van de namen van wijn, de beste en zuiverste soort.', explanation: '', notes: [], page: 96 },
    { term: 'ختامه مسك', translit: 'khitāmuhu misk', meaning: 'Het laatste ervan is welriekende muskus.', explanation: '', notes: [], page: 97 },
    { term: 'تسنيم', translit: 'tasnīm', meaning: 'De edelste en hoogste drank van de mensen van het Paradijs.', explanation: '', notes: [], page: 97 },
    { term: 'يتغامزون', translit: 'yataghāmazūn', meaning: 'Zij wijzen spottend met ooglid en wenkbrauw; ghamz betekent oorspronkelijk een fout aanwrijven.', explanation: '', notes: [], page: 99 },
    { term: 'ثوب', translit: 'thuwwiba', meaning: 'Vergolden; van thāba, terugkeren. Thawāb wordt gebruikt voor goed en kwaad.', explanation: '', notes: [], page: 100 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Het boek van de zondaars en het boek van de vromen',
      intro: 'De twee delen naast elkaar.',
      columns: ['Plaats van het boek', 'Toestand', 'Bestemming'],
      rows: [
        { label: 'Zondaars', cells: ['sijjīn: de zevende, laagste aarde', 'wat zij verdienden bedekte hun harten', 'afgeschermd van hun Heer, de Hel in'] },
        { label: 'Vromen', cells: ['ʿilliyyūn: in de zevende hemel', 'de naasten zijn getuige van hun boek', 'gelukzaligheid, kijkend vanaf rustbanken'] }
      ],
      page: 95
    },
    {
      type: 'steps',
      title: 'Hoe de bedekking van het hart ontstaat',
      intro: 'Zoals in de hadith van Abū Hurayra.',
      nodes: [
        { label: 'Een zonde', sub: 'een zwarte vlek op het hart', page: 92 },
        { label: 'Ophouden, vergeving vragen, berouw', sub: 'het hart wordt gepolijst', page: 92 },
        { label: 'Terugvallen', sub: 'de vlek groeit', page: 92 },
        { label: 'Tot zij het hart bedekt', sub: 'dat is de rān', page: 92 }
      ]
    },
    {
      type: 'compare',
      title: 'Lachen in beide werelden',
      intro: 'De vergelding is van dezelfde soort als de daad.',
      columns: ['In deze wereld', 'Op de Opstandingsdag'],
      rows: [
        { label: 'Misdadigers', cells: ['lachen om de gelovigen en knipogen', 'vernederd en gestraft'] },
        { label: 'Gelovigen', cells: ['over hen wordt gezegd: "die zijn dwaalt"', 'lachen om de ongelovigen vanaf rustbanken'] }
      ],
      page: 100
    }
  ],
  sections: [
    { title: 'De ernst van oneerlijk meten', text: 'Het boek citeert al-Kashshāf: de afwijzing, de verwondering, het woord ẓann, de "geweldige dag" en het staan voor de Heer van de werelden tonen samen hoe zwaar deze zonde is.', page: 89 },
    { title: 'Een geweldige dag', text: 'Zwaar voor de ongelovigen, en door Allahs gunst licht voor de gelovigen, alsof de dienaar een verplicht gebed verricht.', page: 88 },
    { title: 'Kijken vanaf de rustbanken', text: 'Sommige geleerden zeggen dat dit ook het kijken naar het gelaat van Allah omvat, en noemen dit vers als bewijs voor het zien van Allah in het Paradijs.', page: 96 },
    { title: 'Wedijveren verwoest de aarde niet', text: 'De islam maakt deze wereld tot akker voor het hiernamaals; de aarde opbouwen met rechtschapenheid en godsvrees is de taak van de gelovige.', page: 97 },
    { title: 'Opvolgers van de spotters', text: 'Wie goede mensen achterlijk noemt en wie recht gaat extremist; de erfgenamen van de boodschappers krijgen te maken met wat de boodschappers overkwam.', page: 101 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'Hebzucht en gierigheid bij de oneerlijke meters', items: ['hebzucht (shuḥḥ): hun recht volledig eisen zonder toegeeflijkheid', 'gierigheid (bukhl): onthouden wat zij moeten geven bij meten en wegen'], page: 89, origin: 'boek' },
    { kind: 'bewijs', title: 'Bewijs voor het zien van Allah in deze soera', items: ['"Nee, op die dag zijn zij van hun Heer afgeschermd": het afschermen van de zondaars in toorn wijst op het zien door de vromen in welgevallen.', '"Op rustbanken kijken zij", volgens sommige geleerden.'], page: 93, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Wee de oneerlijke meters, die de volle maat nemen en te weinig geven.',
    'Het boek van de zondaars is in sijjīn; zonden bedekken hun harten.',
    'De zondaars zijn van hun Heer afgeschermd; dat wijst op het zien door de vromen.',
    'Het boek van de vromen is in ʿilliyyūn; zij krijgen een verzegelde drank met een slot van muskus.',
    'Wie in deze wereld om de gelovigen lachte, wordt op de Opstandingsdag uitgelachen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is taṭfīf?', options: ['oneerlijk meten en wegen', 'vals geld', 'veel verkopen', 'woeker'], answer: 0, explain: 'Te veel nemen bij ontvangen en te weinig geven bij geven.', page: 87 },
    { type: 'mc', q: 'Wat betekent "denken" in "denken zij niet dat zij opgewekt worden?"', options: ['zeker weten', 'twijfelen', 'zich verbeelden', 'hopen'], answer: 0, explain: 'Ẓann kan zekerheid betekenen; dat komt vaak voor in de Koran.', page: 89 },
    { type: 'mc', q: 'Waar is sijjīn?', options: ['de zevende, laagste aarde', 'de zevende hemel', 'tussen hemel en aarde', 'in de zee'], answer: 0, explain: 'De verblijfplaats van de zondaars.', page: 91 },
    { type: 'tf', q: '"Een opgeschreven boek" is de uitleg van het woord sijjīn.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het beschrijft het genoemde boek, niet sijjīn.', page: 91 },
    { type: 'mc', q: 'Wat is tasnīm?', options: ['de edelste drank van het Paradijs', 'een rivier op aarde', 'een naam voor honing', 'een boom in het Paradijs'], answer: 0, explain: 'De naasten drinken er puur van.', page: 97 },
    { type: 'tf', q: 'Allahs oordeel is gunst voor de gelovigen en rechtvaardigheid voor de ongelovigen.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals in de lessen op p. 101.', page: 101 }
  ]),
  note: 'Oefeningen van het boek op p. 90, 94, 98 en 102. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tafsir', chapter: '22', unit: 6, ar, nl }
