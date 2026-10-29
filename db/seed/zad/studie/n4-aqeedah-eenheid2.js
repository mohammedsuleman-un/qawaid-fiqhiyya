// Hoofdstukkaart bij العقيدة (٤), eenheid 2: التكفير وضوابطه (lessen 6–9, boek p. 23–30).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Het kader over de arbitrage (p. 24) is in het boek
// "alleen ter kennisname".
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٤)، سلسلة زاد العلمية',
  pages: '23–30',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'أيما رجل قال لأخيه: يا كافر، فقد باء بها أحدهما', takhrij: 'متفق عليه', note: 'في خطر التكفير. وفي رواية ابن عمر في الصحيحين: «إن كان كما قال، وإلا رجعت عليه».', pages: [24, 27], nl: 'wie tegen zijn broeder zegt: "o ongelovige", dan keert het naar een van beiden terug', nlNote: 'Over het gevaar van iemand ongelovig verklaren. In de overlevering van Ibn ʿUmar: "als het klopt wat hij zei; zo niet, dan keert het op hemzelf terug".' },
  { narrator: '', text: 'لا يرمي رجل رجلا بالفسوق، ولا يرميه بالكفر، إلا ارتدت عليه، إن لم يكن صاحبه كذلك', takhrij: 'أخرجه البخاري', note: '', pages: [24], nl: 'niemand beschuldigt een ander van zondigheid of van ongeloof, of het keert op hemzelf terug als de ander niet zo is', nlNote: '' },
  { narrator: '', text: 'من لعن مؤمنا فهو كقتله، ومن قذف مؤمنا بكفر فهو كقتله', takhrij: 'متفق عليه', note: '', pages: [24], nl: 'wie een gelovige vervloekt, is als wie hem doodt; en wie een gelovige van ongeloof beschuldigt, is als wie hem doodt', nlNote: '' },
  { narrator: 'أسامة بن زيد', text: 'يا أسامة، أقتلته بعدما قال: لا إله إلا الله!', takhrij: 'متفق عليه', note: 'قاله لما قتل رجلا في الحرقة بعد أن نطق بالشهادة، فقال أسامة: كان متعوذا؛ وهو دليل أن لنا الظاهر والسرائر إلى الله.', pages: [25], nl: 'Usāma, heb je hem gedood nadat hij "er is geen god dan Allah" had gezegd?!', nlNote: 'Gezegd toen Usāma bij al-Ḥuraqa een man doodde nadat die de geloofsgetuigenis had uitgesproken; Usāma zei: hij zocht alleen bescherming. Bewijs dat wij oordelen naar het uiterlijke en het innerlijke aan Allah laten.' },
  { narrator: '', text: 'أمرت أن أقاتل الناس حتى يقولوا: لا إله إلا الله، فمن قال: لا إله إلا الله عصم مني دمه وماله إلا بحقه، وحسابه على الله', takhrij: 'متفق عليه', note: 'من مخاطر تكفير المعين: حل دمه بعد عصمته.', pages: [26], nl: 'Mij is opgedragen de mensen te bestrijden tot ze zeggen: er is geen god dan Allah. Wie dat zegt, heeft zijn bloed en bezit tegen mij beschermd, behalve met recht, en zijn afrekening is bij Allah', nlNote: 'Een van de gevolgen van een bepaald persoon ongelovig verklaren: zijn bloed wordt toegestaan na bescherming.' },
  { narrator: 'أبو هريرة', text: 'والذي نفس محمد بيده، لا يسمع بي أحد من هذه الأمة يهودي ولا نصراني، ثم يموت ولم يؤمن بالذي أرسلت به، إلا كان من أصحاب النار', takhrij: 'أخرجه مسلم', note: 'دليل شرط بلوغ الحجة.', pages: [27], nl: 'Bij Hem in Wiens hand de ziel van Muḥammad is: niemand van deze gemeenschap, jood of christen, hoort van mij en sterft zonder te geloven in waarmee ik gezonden ben, of hij hoort bij de bewoners van het Vuur', nlNote: 'Bewijs voor de voorwaarde dat het bewijs iemand bereikt moet hebben.' },
  { narrator: '', text: 'إن الله وضع عن أمتي الخطأ والنسيان وما استكرهوا عليه', takhrij: 'رواه ابن ماجه وصححه الألباني', note: 'من أدلة مانع الخطأ.', pages: [28], nl: 'Allah heeft mijn gemeenschap vrijgesteld van vergissing, vergeten en waartoe ze gedwongen worden', nlNote: 'Een bewijs voor de belemmering "vergissing".' },
  { narrator: '', text: 'اللهم أنت عبدي وأنا ربك! ... أخطأ من شدة الفرح', takhrij: 'في الصحيحين', note: 'قول الرجل الذي فقد ناقته وعليها طعامه وشرابه ثم وجدها؛ ساقه الكتاب دليلا على مانع الخطأ. (عزوه هنا كما في الكتاب.)', pages: [28], nl: '"O Allah, U bent mijn dienaar en ik ben Uw heer!" … Hij vergiste zich van grote vreugde', nlNote: 'De woorden van de man die zijn kameel met eten en drinken kwijt was en hem terugvond; het boek gebruikt dit als bewijs voor de belemmering "vergissing". (Bronvermelding zoals in het boek.)' },
  { narrator: 'عمار بن ياسر', text: 'كيف تجد قلبك؟ قال: مطمئنا بالإيمان. قال: إن عادوا فعد', takhrij: 'أخرجه الحاكم وصححه', note: 'في مانع الإكراه؛ قال الجصاص: هذا أصل في جواز إظهار كلمة الكفر في حال الإكراه.', pages: [29], nl: '"Hoe vind je je hart?" Hij zei: gerust in het geloof. Hij zei: "Als ze het opnieuw doen, doe het dan opnieuw"', nlNote: 'Over de belemmering "dwang"; al-Jaṣṣāṣ: dit is een grondslag dat ongeloof uiten onder dwang is toegestaan.' },
  { narrator: '', text: 'يقتلون أهل الإسلام، ويدعون أهل الأوثان', takhrij: 'متفق عليه', note: 'في صفة الخوارج: التكفير بغير حق ثم استباحة دماء المخالفين.', pages: [30], nl: 'zij doden de mensen van de islam en laten de afgodendienaars met rust', nlNote: 'Over de Khawārij: onterecht ongelovig verklaren en daarna het bloed van tegenstanders toegestaan achten.' }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه البخاري': 'al-Bukhārī',
  'أخرجه مسلم': 'Muslim',
  'رواه ابن ماجه وصححه الألباني': 'Ibn Māja; authentiek volgens al-Albānī',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s (zoals het boek vermeldt)',
  'أخرجه الحاكم وصححه': 'al-Ḥākim, die het authentiek noemde'
}
const NARRATOR_NL = { 'أسامة بن زيد': 'Usāma ibn Zayd', 'أبو هريرة': 'Abū Hurayra', 'عمار بن ياسر': 'ʿAmmār ibn Yāsir' }

const PERSONS = [
  ['ali-ibn-abi-talib', 'text', [24, 29], 'خرج عليه الخوارج بعد التحكيم، وقال: نقموا علي أن كاتبت معاوية، وقد جاءنا سهيل بن عمرو بالحديبية.', 'Tegen hem kwamen de Khawārij in opstand na de arbitrage; hij zei: zij verweten mij dat ik Muʿāwiya schreef, terwijl Suhayl ibn ʿAmr bij al-Ḥudaybiya bij ons kwam.'],
  ['abu-musa-al-ashari', 'text', [24], 'أرسله علي حكما بعد صفين.', 'Werd door ʿAlī als scheidsman gestuurd na Ṣiffīn.'],
  ['amr-ibn-al-as', 'text', [24], 'أرسله معاوية حكما بعد صفين.', 'Werd door Muʿāwiya als scheidsman gestuurd na Ṣiffīn.'],
  ['muawiya-ibn-abi-sufyan', 'text', [24, 29], 'كان يحكم الشام بعد التحكيم، وكان الخوارج يكفرونه.', 'Bestuurde Syrië na de arbitrage; de Khawārij verklaarden hem ongelovig.'],
  ['abu-bakr-ibn-al-arabi', 'text', [24], 'صنف «العواصم من القواصم» في رد الروايات المكذوبة عن الصحابة.', 'Schreef al-ʿAwāṣim min al-qawāṣim als weerlegging van de verzonnen verhalen over de metgezellen.'],
  ['ibn-abd-al-barr', 'text', [24], 'قال: القرآن والسنة ينهيان عن تفسيق المسلم وتكفيره.', 'Zei: Koran en Sunna verbieden een moslim zondig of ongelovig te verklaren.'],
  ['ash-shawkani', 'text', [25, 26], 'قال: لا يقدم على تكفير مسلم إلا ببرهان أوضح من شمس النهار.', 'Zei: verklaar een moslim alleen ongelovig met een bewijs dat helderder is dan de zon overdag.'],
  ['ibn-abi-al-izz', 'text', [25], 'قال: من أعظم البغي أن يشهد على معين أن الله لا يغفر له.', 'Zei: een van de grootste onrechten is over een bepaald persoon verklaren dat Allah hem niet vergeeft.'],
  ['ibn-taymiyya', 'text', [25, 27, 29], 'قال: الكفر والفسق أحكام شرعية، والمعين لا يحكم بكفره حتى تقوم عليه الحجة، والخوارج أول من كفر المسلمين.', 'Zei: ongeloof en zondigheid zijn religieuze oordelen; een bepaald persoon wordt pas ongelovig verklaard als het bewijs tegen hem vaststaat; de Khawārij waren de eersten die moslims ongelovig verklaarden.'],
  ['usama-ibn-zayd', 'text', [25], 'روى قصة الرجل الذي قتله بعد أن قال: لا إله إلا الله.', 'Vertelde over de man die hij doodde nadat die "er is geen god dan Allah" had gezegd.'],
  ['ibn-umar', 'text', [27], 'روى: «أيما امرئ قال لأخيه: يا كافر...».', 'Overleverde: "wie tegen zijn broeder zegt: o ongelovige …".'],
  ['abu-hurayra', 'text', [27], 'روى حديث «لا يسمع بي أحد من هذه الأمة».', 'Overleverde de hadith "niemand van deze gemeenschap hoort van mij".'],
  ['ammar-ibn-yasir', 'text', [29], 'أكرهه المشركون على سب النبي ﷺ وقلبه مطمئن بالإيمان.', 'Werd door de polytheïsten gedwongen de Profeet ﷺ te beschimpen, terwijl zijn hart gerust was in het geloof.'],
  ['al-jassas', 'text', [29], 'قال: قصة عمار أصل في جواز إظهار كلمة الكفر عند الإكراه.', 'Zei: het verhaal van ʿAmmār is een grondslag dat ongeloof uiten onder dwang is toegestaan.'],
  ['suhayl-ibn-amr', 'text', [29], 'جاء مفاوضا عن قريش في الحديبية وهو كافر.', 'Kwam bij al-Ḥudaybiya namens Quraysh onderhandelen toen hij nog ongelovig was.'],
  ['al-bukhari', 'takhrij', [24, 25, 26, 27, 30], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [24, 25, 26, 27, 30], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['ibn-maja', 'takhrij', [28], 'روى حديث «وضع عن أمتي الخطأ».', 'Overleverde de hadith "vrijgesteld van vergissing".'],
  ['al-albani', 'takhrij', [28], 'صححه.', 'Verklaarde die authentiek.'],
  ['al-hakim', 'takhrij', [29], 'أخرج قصة عمار وأثر علي وصححهما.', 'Nam het verhaal van ʿAmmār en de uitspraak van ʿAlī op en noemde ze authentiek.'],
  ['ahmad-ibn-hanbal', 'takhrij', [29], 'روى أثر علي في الحديبية.', 'Overleverde de uitspraak van ʿAlī over al-Ḥudaybiya.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'التكفير وضوابطه',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف التكفير وخطره، وضوابطه الستة، والفرق بين تكفير الفعل وتكفير المعين، وشروط التكفير وموانعه، وصفات الخوارج في التكفير.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'التكفير وضوابطه', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'التعريف والخطر', sub: 'الدرس ٦', page: 24, children: ['الحكم بالكفر على من ثبت إسلامه', 'يرجع على قائله'] },
      { label: 'الضوابط', sub: 'الدرس ٧', page: 25, children: ['حكم شرعي', 'الأصل الإسلام', 'لنا الظاهر', 'التثبت', 'العالم بالشروط'] },
      { label: 'الشروط والموانع', sub: 'الدرس ٨', page: 27, children: ['أربعة شروط', 'الجهل', 'الخطأ', 'التأويل', 'الإكراه'] },
      { label: 'الخوارج', sub: 'الدرس ٩', page: 29, children: ['التكفير بالكبائر', 'بما ليس بذنب', 'بلا شروط', 'تكفير من لم يكفر'] }
    ]
  },
  points: [
    { text: 'التكفير: الحكم بالكفر على من ثبت إسلامه بيقين، وأول من ابتدعه الخوارج بعد التحكيم.', page: 24 },
    { text: 'تكفير المسلم جريمة عظيمة، ويرجع على قائله إن لم يكن صاحبه كذلك.', page: 24 },
    { text: 'التكفير حكم شرعي وحق خالص لله، وليس مما يستقل به العقل.', page: 25 },
    { text: 'من ثبت إسلامه بيقين لم يرتفع عنه إلا بيقين، ولنا الظاهر والسرائر إلى الله.', page: 25 },
    { text: 'يفرق بين إطلاق الكفر على الفعل وإطلاقه على شخص معين.', page: 26 },
    { text: 'لا يكفر المعين حتى تتوافر الشروط وتنتفي الموانع.', page: 27 },
    { text: 'موانع التكفير: الجهل والخطأ والتأويل والإكراه.', page: 28 },
    { text: 'الصفة الفارقة للخوارج: التكفير بغير حق ثم استباحة دماء المخالفين.', page: 30 }
  ],
  terms: [
    { term: 'التكفير', translit: 'at-takfīr', meaning: 'الحكم بالكفر على من ثبت إسلامه بيقين.', explanation: 'بدعة ابتدعها الخوارج الذين خرجوا على علي بعد حادثة التحكيم.', notes: [], page: 24 },
    { term: 'التحكيم', translit: 'at-taḥkīm', meaning: 'إرسال حكمين بعد معركة صفين عام ٣٧هـ.', explanation: 'أبو موسى الأشعري عن علي، وعمرو بن العاص عن معاوية.', notes: ['للاطلاع فقط'], page: 24 },
    { term: 'تكفير المعين', translit: 'takfīr al-muʿayyan', meaning: 'الحكم بالكفر على شخص بعينه.', explanation: 'لا يكون إلا بعد توافر الشروط وانتفاء الموانع.', notes: [], page: 26 },
    { term: 'الجهل', translit: 'al-jahl', meaning: 'ألا يعلم الشخص أن هذا القول أو الفعل مكفر.', explanation: 'فلا يكفر إلا بعد تعليمه وإقامة الحجة عليه.', notes: ['[الإسراء: ١٥]'], page: 28 },
    { term: 'الخطأ', translit: 'al-khaṭaʾ', meaning: 'إرادة أو قصد شيء فيقع غير المقصود.', explanation: '«إن الله وضع عن أمتي الخطأ والنسيان».', notes: ['[البقرة: ٢٨٦]'], page: 28 },
    { term: 'التأويل', translit: 'at-taʾwīl', meaning: 'وضع الدليل الشرعي في غير موضعه لعدم فهمه أو فهمه فهمًا خاطئًا.', explanation: 'وهو نوع من الخطأ في الجملة.', notes: ['[الأحزاب: ٥]'], page: 28 },
    { term: 'الإكراه', translit: 'al-ikrāh', meaning: 'حمل الشخص على أن يفعل ما لا يرضاه ولا يختار مباشرته.', explanation: 'كقصة عمار بن ياسر.', notes: ['[النحل: ١٠٦]'], page: 29 },
    { term: 'الخوارج', translit: 'al-khawārij', meaning: 'الذين خرجوا على علي بعد التحكيم.', explanation: 'هم أكثر من يقدم على التكفير، ويستبيحون دماء من خالفهم.', notes: [], page: 29 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'ضوابط التكفير',
      intro: 'ستة ضوابط كما في الدرس السابع.',
      nodes: [
        { label: 'التكفير حكم شرعي وحق خالص لله', page: 25 },
        { label: 'الأصل فيمن يقول لا إله إلا الله الإسلام', page: 25 },
        { label: 'لنا الظاهر والسرائر موكولة إلى الله', page: 25 },
        { label: 'التثبت قبل الحكم [الحجرات: ٦]', page: 25 },
        { label: 'الشريعة تنهى عن تكفير المسلم', page: 26 },
        { label: 'لا يحكم بالكفر إلا عالم بالشروط والموانع', page: 26 }
      ]
    },
    {
      type: 'compare',
      title: 'الفعل والمعين',
      intro: 'قد يكون الفعل كفرًا ولا يكفر فاعله بعينه.',
      columns: ['إطلاق الكفر على الفعل', 'الحكم على المعين'],
      rows: [
        { label: 'المثال', cells: ['الشرك بالله كفر، وترك الصلاة بالكلية كفر', 'فلان كافر'] },
        { label: 'الحكم', cells: ['يقال على وجه الإطلاق', 'لا يحكم به حتى تتوافر الشروط وتنتفي الموانع'] }
      ],
      page: 26
    },
    {
      type: 'cards',
      title: 'مخاطر تكفير المعين',
      intro: 'ما يترتب عليه من أمور عظيمة.',
      nodes: [
        { label: 'حل دمه بعد عصمته', page: 26 },
        { label: 'انتفاء ولايته على أولاده وأهله', page: 26 },
        { label: 'تحريم زوجته عليه', page: 26 },
        { label: 'امتناع التوارث', page: 26 },
        { label: 'عدم حل ذبيحته', page: 26 },
        { label: 'لا يصلى عليه ولا يدفن في مقابر المسلمين', page: 26 }
      ]
    },
    {
      type: 'compare',
      title: 'شروط التكفير وموانعه',
      intro: 'فإن تحققت الشروط وانتفت الموانع جاز تكفير المعين.',
      columns: ['الشروط', 'الموانع'],
      rows: [
        { label: '١', cells: ['ثبوت أن القول أو الفعل كفر بالكتاب أو السنة', 'الجهل'] },
        { label: '٢', cells: ['ثبوت قيامه بالمكلف', 'الخطأ'] },
        { label: '٣', cells: ['بلوغ الحجة', 'التأويل'] },
        { label: '٤', cells: ['انتفاء الموانع', 'الإكراه'] }
      ],
      page: 27
    },
    {
      type: 'cards',
      title: 'صفات الخوارج في التكفير',
      intro: 'أهم ما عرفوا به.',
      nodes: [
        { label: 'التكفير بالكبائر', sub: 'والحكم على أصحابها بالخلود في النار', page: 29 },
        { label: 'التكفير بما ليس بذنب', sub: 'كمكاتبة علي معاوية', page: 29 },
        { label: 'التكفير بلا شروط ولا موانع', sub: 'لا يعذرون بجهل ولا خطأ ولا تأويل', page: 30 },
        { label: 'تكفير من لم يكفر من كفروه', sub: 'والقاعدة صحيحة فيمن اتفقت الأمة على كفرهم فقط', page: 30 }
      ]
    }
  ],
  sections: [
    { title: 'حادثة التحكيم (للاطلاع فقط)', text: 'بعد معركة صفين عام ٣٧هـ اتفق الجانبان على إرسال حكمين: أبي موسى الأشعري عن علي، وعمرو بن العاص عن معاوية، وانتهى الأمر إلى بقاء الحال على ما هو عليه.', more: 'وما يروى في كتب التاريخ من روايات تظهر الصحابة طلاب دنيا فكلها باطلة لا أصل لها، وقد رد عليها أبو بكر بن العربي في «العواصم من القواصم». هذا المقطع في الكتاب للاطلاع فقط.', page: 24 },
    { title: 'برهان أوضح من الشمس', text: 'قال الشوكاني: «اعلم أن الحكم على الرجل المسلم بخروجه من دين الإسلام ودخوله في الكفر لا ينبغي لمسلم يؤمن بالله واليوم الآخر أن يقدم عليه إلا ببرهان أوضح من شمس النهار».', more: '', page: 25 },
    { title: 'التكفير حكم شرعي', text: 'قال ابن تيمية: «فإن الكفر والفسق أحكام شرعية، ليس ذلك من الأحكام التي يستقل بها العقل، فالكافر من جعله الله ورسوله كافرًا».', more: '', page: 25 },
    { title: 'قصة أسامة', text: 'لحق أسامة رجلًا في الحرقة، فلما غشيه قال: لا إله إلا الله، فطعنه حتى قتله، فقال النبي ﷺ: «يا أسامة، أقتلته بعدما قال: لا إله إلا الله!»، فما زال يكررها حتى تمنى أسامة أنه لم يكن أسلم قبل ذلك اليوم.', more: '', page: 25 },
    { title: 'الجهل عند زوار الأضرحة', text: 'أكثر الذين يرتادون القبور والأضرحة ويعظمونها إنما هو بسبب الجهل، فتكفيرهم لا يكون إلا بعد تعليمهم وإقامة الحجة عليهم.', more: '', page: 28 },
    { title: '«من لم يكفر الكافر فهو كافر»', text: 'قاعدة صحيحة، لكنها فيمن اتفقت الأمة على كفرهم كاليهود والنصارى والمشركين والوثنيين؛ أما الخوارج فجعلوها في كل من كفروه.', more: '', page: 30 }
  ],
  keycards: [
    { kind: 'definitie', title: 'التكفير', items: ['الحكم بالكفر على من ثبت إسلامه بيقين.'], page: 24, origin: 'boek' },
    { kind: 'regel', title: 'اليقين لا يزول بالشك', items: ['من ثبت إسلامه بيقين فلا يرتفع إلا بيقين.'], page: 25, origin: 'boek' },
    { kind: 'opsomming', title: 'موانع التكفير', items: ['الجهل', 'الخطأ', 'التأويل', 'الإكراه'], page: 28, origin: 'boek' },
    { kind: 'onderscheid', title: 'الفعل والمعين', items: ['الفعل: يقال إنه كفر على الإطلاق.', 'المعين: لا يكفر حتى تتوافر الشروط وتنتفي الموانع.'], page: 26, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التكفير: الحكم بالكفر على من ثبت إسلامه بيقين.',
    'تكفير المسلم بغير حق يرجع على قائله.',
    'الضوابط: حكم شرعي، الأصل الإسلام، لنا الظاهر، التثبت، النهي عن التكفير، العالم بالشروط.',
    'الشروط: ثبوت أنه كفر، ثبوت قيامه بالمكلف، بلوغ الحجة، انتفاء الموانع.',
    'الموانع: الجهل والخطأ والتأويل والإكراه.',
    'الخوارج يكفرون بغير حق ثم يستبيحون الدماء.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من أول من ابتدع التكفير؟', options: ['الخوارج', 'المعتزلة', 'الجهمية', 'المرجئة'], answer: 0, explain: 'خرجوا على علي بعد حادثة التحكيم.', page: 24 },
    { type: 'tf', q: 'التكفير من الأحكام التي يستقل بها العقل.', options: ['صواب', 'خطأ'], answer: 1, explain: 'بل هو حكم شرعي، كما قال ابن تيمية.', page: 25 },
    { type: 'mc', q: 'ما الذي تدل عليه قصة أسامة بن زيد؟', options: ['أن لنا الظاهر والسرائر إلى الله', 'جواز قتل المتعوذ', 'أن الإكراه مانع', 'أن الجهل لا يعذر به'], answer: 0, explain: '«أقتلته بعدما قال: لا إله إلا الله!».', page: 25 },
    { type: 'mc', q: 'أي هذه ليس من موانع التكفير؟', options: ['كثرة الذنوب', 'الجهل', 'التأويل', 'الإكراه'], answer: 0, explain: 'الموانع: الجهل والخطأ والتأويل والإكراه.', page: 28 },
    { type: 'mc', q: 'ما دليل شرط بلوغ الحجة من القرآن؟', options: ['[الإسراء: ١٥]', '[النحل: ١٠٦]', '[البقرة: ٢٨٦]', '[الأحزاب: ٥]'], answer: 0, explain: '﴿وما كنا معذبين حتى نبعث رسولا﴾.', page: 27 },
    { type: 'mc', q: 'بأي مانع تتعلق قصة عمار بن ياسر؟', options: ['الإكراه', 'الجهل', 'الخطأ', 'التأويل'], answer: 0, explain: '«كيف تجد قلبك؟» قال: مطمئنًا بالإيمان.', page: 29 },
    { type: 'tf', q: 'يجوز الحكم على معين بالكفر بمجرد أن يفعل ما هو كفر.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا بد من توافر الشروط وانتفاء الموانع.', page: 27 },
    { type: 'mc', q: 'ما الصفة الفارقة للخوارج؟', options: ['التكفير بغير حق ثم استباحة دماء المخالفين', 'إنكار القدر', 'نفي الصفات', 'تأخير العمل عن الإيمان'], answer: 0, explain: '«يقتلون أهل الإسلام، ويدعون أهل الأوثان».', page: 30 }
  ]),
  note: 'نشاط الكتاب في صفحة ٣٠.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Takfīr en zijn maatstaven',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Wat takfīr (iemand ongelovig verklaren) is en waarom het gevaarlijk is, de zes maatstaven, het verschil tussen een daad en een bepaald persoon ongelovig noemen, de voorwaarden en belemmeringen, en de kenmerken van de Khawārij.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (4), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Takfīr en zijn maatstaven', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Definitie en gevaar', sub: 'les 6', page: 24, children: ['een moslim ongelovig verklaren', 'keert terug op wie het zegt'] },
      { label: 'Maatstaven', sub: 'les 7', page: 25, children: ['religieus oordeel', 'uitgangspunt: moslim', 'het uiterlijke', 'eerst nagaan', 'alleen een geleerde'] },
      { label: 'Voorwaarden en belemmeringen', sub: 'les 8', page: 27, children: ['vier voorwaarden', 'onwetendheid', 'vergissing', 'verkeerde uitleg', 'dwang'] },
      { label: 'De Khawārij', sub: 'les 9', page: 29, children: ['takfīr om grote zonden', 'om wat geen zonde is', 'zonder voorwaarden', 'wie niet meedoet'] }
    ]
  },
  points: [
    { text: 'Takfīr is iemand van wie de islam zeker vaststaat ongelovig verklaren; de Khawārij begonnen ermee na de arbitrage.', page: 24 },
    { text: 'Een moslim ongelovig verklaren is een zwaar misdrijf; het keert terug op wie het zegt als de ander niet zo is.', page: 24 },
    { text: 'Takfīr is een religieus oordeel en het recht van Allah alleen; het verstand beslist hier niet zelfstandig.', page: 25 },
    { text: 'Wiens islam zeker vaststaat, verliest die alleen door iets wat even zeker is; wij oordelen naar het uiterlijke en laten het innerlijke aan Allah.', page: 25 },
    { text: 'Er is verschil tussen een daad ongeloof noemen en een bepaald persoon ongelovig verklaren.', page: 26 },
    { text: 'Een bepaald persoon wordt pas ongelovig verklaard als de voorwaarden vervuld zijn en er geen belemmeringen zijn.', page: 27 },
    { text: 'De belemmeringen zijn onwetendheid, vergissing, verkeerde uitleg en dwang.', page: 28 },
    { text: 'Kenmerk van de Khawārij: onterecht ongelovig verklaren en daarna het bloed van tegenstanders toegestaan achten.', page: 30 }
  ],
  terms: [
    { term: 'التكفير', translit: 'at-takfīr', meaning: 'Iemand van wie de islam zeker vaststaat ongelovig verklaren.', explanation: 'Een vernieuwing van de Khawārij, die na de arbitrage tegen ʿAlī in opstand kwamen.', notes: [], page: 24 },
    { term: 'التحكيم', translit: 'at-taḥkīm', meaning: 'De arbitrage: twee scheidsmannen gestuurd na de slag bij Ṣiffīn (37 AH).', explanation: 'Abū Mūsā al-Ashʿarī namens ʿAlī, ʿAmr ibn al-ʿĀṣ namens Muʿāwiya.', notes: ['alleen ter kennisname'], page: 24 },
    { term: 'تكفير المعين', translit: 'takfīr al-muʿayyan', meaning: 'Een bepaald persoon ongelovig verklaren.', explanation: 'Alleen als de voorwaarden vervuld zijn en er geen belemmeringen zijn.', notes: [], page: 26 },
    { term: 'الجهل', translit: 'al-jahl', meaning: 'Onwetendheid: niet weten dat een uitspraak of daad ongeloof is.', explanation: 'Pas na onderwijzen en het bewijs voorleggen.', notes: ['al-Isrāʾ 17:15'], page: 28 },
    { term: 'الخطأ', translit: 'al-khaṭaʾ', meaning: 'Vergissing: iets bedoelen en iets anders laten gebeuren.', explanation: '"Allah heeft mijn gemeenschap vrijgesteld van vergissing en vergeten."', notes: ['al-Baqara 2:286'], page: 28 },
    { term: 'التأويل', translit: 'at-taʾwīl', meaning: 'Verkeerde uitleg: een religieus bewijs verkeerd toepassen omdat men het niet of verkeerd begrijpt.', explanation: 'In het algemeen een soort vergissing.', notes: ['al-Aḥzāb 33:5'], page: 28 },
    { term: 'الإكراه', translit: 'al-ikrāh', meaning: 'Dwang: iemand iets laten doen wat hij niet wil en niet kiest.', explanation: 'Zoals het verhaal van ʿAmmār ibn Yāsir.', notes: ['an-Naḥl 16:106'], page: 29 },
    { term: 'الخوارج', translit: 'al-khawārij', meaning: 'Zij die na de arbitrage tegen ʿAlī in opstand kwamen.', explanation: 'Zij verklaren het vaakst anderen ongelovig en achten het bloed van tegenstanders toegestaan.', notes: [], page: 29 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Maatstaven voor takfīr',
      intro: 'Zes maatstaven, zoals in les 7.',
      nodes: [
        { label: 'Takfīr is een religieus oordeel en het recht van Allah alleen', page: 25 },
        { label: 'Wie "er is geen god dan Allah" zegt, is in principe moslim', page: 25 },
        { label: 'Wij oordelen naar het uiterlijke, het innerlijke is aan Allah', page: 25 },
        { label: 'Eerst nagaan vóór een oordeel (al-Ḥujurāt 49:6)', page: 25 },
        { label: 'De sharīʿa verbiedt een moslim ongelovig te verklaren', page: 26 },
        { label: 'Alleen een geleerde die de voorwaarden en belemmeringen kent', page: 26 }
      ]
    },
    {
      type: 'compare',
      title: 'De daad en de persoon',
      intro: 'Een daad kan ongeloof zijn zonder dat de dader ongelovig verklaard wordt.',
      columns: ['De daad ongeloof noemen', 'Een bepaald persoon'],
      rows: [
        { label: 'Voorbeeld', cells: ['shirk is ongeloof; het gebed helemaal laten is ongeloof', '"die persoon is ongelovig"'] },
        { label: 'Oordeel', cells: ['mag algemeen gezegd worden', 'pas als de voorwaarden vervuld zijn en er geen belemmeringen zijn'] }
      ],
      page: 26
    },
    {
      type: 'cards',
      title: 'Gevolgen van een persoon ongelovig verklaren',
      intro: 'Zware gevolgen die eruit voortvloeien.',
      nodes: [
        { label: 'Zijn bloed wordt toegestaan', page: 26 },
        { label: 'Hij verliest het voogdijschap over kinderen en gezin', page: 26 },
        { label: 'Zijn vrouw wordt hem verboden', page: 26 },
        { label: 'Geen erfrecht meer', page: 26 },
        { label: 'Zijn slachtvlees is niet toegestaan', page: 26 },
        { label: 'Geen begrafenisgebed en geen moslimbegraafplaats', page: 26 }
      ]
    },
    {
      type: 'compare',
      title: 'Voorwaarden en belemmeringen',
      intro: 'Zijn de voorwaarden vervuld en de belemmeringen afwezig, dan mag de persoon ongelovig verklaard worden.',
      columns: ['Voorwaarden', 'Belemmeringen'],
      rows: [
        { label: '1', cells: ['vaststaan dat de uitspraak of daad volgens Koran of Sunna ongeloof is', 'onwetendheid'] },
        { label: '2', cells: ['vaststaan dat de verantwoordelijke persoon het deed', 'vergissing'] },
        { label: '3', cells: ['het bewijs heeft hem bereikt', 'verkeerde uitleg'] },
        { label: '4', cells: ['geen belemmeringen', 'dwang'] }
      ],
      page: 27
    },
    {
      type: 'cards',
      title: 'Kenmerken van de Khawārij',
      intro: 'Waar zij vooral om bekendstaan.',
      nodes: [
        { label: 'Takfīr om grote zonden', sub: 'en zeggen dat de zondaar eeuwig in het Vuur blijft', page: 29 },
        { label: 'Takfīr om wat geen zonde is', sub: 'zoals ʿAlī die Muʿāwiya schreef', page: 29 },
        { label: 'Takfīr zonder voorwaarden en belemmeringen', sub: 'geen verontschuldiging voor onwetendheid, vergissing of uitleg', page: 30 },
        { label: 'Wie niet meedoet ook ongelovig', sub: 'de regel klopt alleen voor wie volgens de hele umma ongelovig is', page: 30 }
      ]
    }
  ],
  sections: [
    { title: 'De arbitrage (alleen ter kennisname)', text: 'Na de slag bij Ṣiffīn (37 AH) stuurden beide kanten een scheidsman: Abū Mūsā al-Ashʿarī namens ʿAlī en ʿAmr ibn al-ʿĀṣ namens Muʿāwiya. De situatie bleef zoals ze was.', more: 'Wat in geschiedenisboeken wordt verteld over metgezellen die op wereldse macht uit waren, is vals en zonder basis; Abū Bakr ibn al-ʿArabī weerlegde het in al-ʿAwāṣim min al-qawāṣim. Dit kader staat in het boek alleen ter kennisname.', page: 24 },
    { title: 'Een bewijs helderder dan de zon', text: 'ash-Shawkānī: "Weet dat een moslim die in Allah en de Laatste Dag gelooft, een moslim niet buiten de islam mag verklaren, behalve met een bewijs dat helderder is dan de zon overdag."', more: '', page: 25 },
    { title: 'Takfīr is een religieus oordeel', text: 'Ibn Taymiyya: "Ongeloof en zondigheid zijn religieuze oordelen, niet iets waarover het verstand zelfstandig beslist. Ongelovig is wie Allah en Zijn Boodschapper ongelovig noemen."', more: '', page: 25 },
    { title: 'Het verhaal van Usāma', text: 'Usāma achtervolgde bij al-Ḥuraqa een man; toen hij hem inhaalde, zei de man: er is geen god dan Allah. Usāma doodde hem toch. De Profeet ﷺ zei: "Usāma, heb je hem gedood nadat hij dat had gezegd?!" en bleef het herhalen, tot Usāma wenste dat hij pas die dag moslim was geworden.', more: '', page: 25 },
    { title: 'Onwetendheid bij grafbezoekers', text: 'De meeste mensen die graven en heiligdommen bezoeken en vereren, doen dat uit onwetendheid; zij worden pas ongelovig verklaard nadat ze onderwezen zijn en het bewijs hun is voorgelegd.', more: '', page: 28 },
    { title: '"Wie de ongelovige niet ongelovig noemt, is ongelovig"', text: 'Een juiste regel, maar alleen voor wie volgens de hele umma ongelovig is, zoals joden, christenen en polytheïsten. De Khawārij pasten haar toe op iedereen die zij ongelovig verklaarden.', more: '', page: 30 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Takfīr', items: ['Iemand van wie de islam zeker vaststaat ongelovig verklaren.'], page: 24, origin: 'boek' },
    { kind: 'regel', title: 'Zekerheid verdwijnt niet door twijfel', items: ['Wiens islam zeker vaststaat, verliest die alleen door iets wat even zeker is.'], page: 25, origin: 'boek' },
    { kind: 'opsomming', title: 'Belemmeringen voor takfīr', items: ['onwetendheid', 'vergissing', 'verkeerde uitleg', 'dwang'], page: 28, origin: 'boek' },
    { kind: 'onderscheid', title: 'De daad en de persoon', items: ['De daad: mag algemeen ongeloof genoemd worden.', 'De persoon: pas na vervulde voorwaarden en zonder belemmeringen.'], page: 26, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Takfīr: iemand van wie de islam zeker vaststaat ongelovig verklaren.',
    'Onterecht ongelovig verklaren keert terug op wie het zegt.',
    'Maatstaven: religieus oordeel, uitgangspunt moslim, het uiterlijke, eerst nagaan, het verbod, alleen een geleerde.',
    'Voorwaarden: het is ongeloof, hij deed het, het bewijs bereikte hem, geen belemmeringen.',
    'Belemmeringen: onwetendheid, vergissing, verkeerde uitleg en dwang.',
    'De Khawārij verklaren onterecht ongelovig en achten daarna het bloed toegestaan.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie begonnen met de vernieuwing van takfīr?', options: ['de Khawārij', 'de Muʿtazila', 'de Jahmiyya', 'de Murjiʾa'], answer: 0, explain: 'Zij kwamen na de arbitrage tegen ʿAlī in opstand.', page: 24 },
    { type: 'tf', q: 'Over takfīr beslist het verstand zelfstandig.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is een religieus oordeel, zoals Ibn Taymiyya zei.', page: 25 },
    { type: 'mc', q: 'Wat laat het verhaal van Usāma ibn Zayd zien?', options: ['wij oordelen naar het uiterlijke, het innerlijke is aan Allah', 'wie bescherming zoekt mag gedood worden', 'dwang is een belemmering', 'onwetendheid is geen excuus'], answer: 0, explain: '"Heb je hem gedood nadat hij dat had gezegd?!"', page: 25 },
    { type: 'mc', q: 'Wat is géén belemmering voor takfīr?', options: ['veel zonden', 'onwetendheid', 'verkeerde uitleg', 'dwang'], answer: 0, explain: 'De belemmeringen zijn onwetendheid, vergissing, verkeerde uitleg en dwang.', page: 28 },
    { type: 'mc', q: 'Welk vers is het bewijs dat het bewijs iemand bereikt moet hebben?', options: ['al-Isrāʾ 17:15', 'an-Naḥl 16:106', 'al-Baqara 2:286', 'al-Aḥzāb 33:5'], answer: 0, explain: '"Wij straffen niet voordat Wij een boodschapper hebben gestuurd."', page: 27 },
    { type: 'mc', q: 'Bij welke belemmering hoort het verhaal van ʿAmmār ibn Yāsir?', options: ['dwang', 'onwetendheid', 'vergissing', 'verkeerde uitleg'], answer: 0, explain: '"Hoe vind je je hart?" Hij zei: gerust in het geloof.', page: 29 },
    { type: 'tf', q: 'Wie iets doet wat ongeloof is, mag meteen persoonlijk ongelovig verklaard worden.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Eerst moeten de voorwaarden vervuld zijn en de belemmeringen afwezig.', page: 27 },
    { type: 'mc', q: 'Wat is het kenmerk dat de Khawārij onderscheidt?', options: ['onterecht ongelovig verklaren en dan het bloed toegestaan achten', 'het lot ontkennen', 'Allahs eigenschappen ontkennen', 'daden buiten het geloof plaatsen'], answer: 0, explain: '"Zij doden de mensen van de islam en laten de afgodendienaars met rust."', page: 30 }
  ]),
  note: 'Oefening van het boek op p. 30. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n4-aqeedah', chapter: '6', unit: 2, ar, nl }
