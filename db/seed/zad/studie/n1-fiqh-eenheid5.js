// Hoofdstukkaart bij الفقه (١), eenheid 5: مواقيت الصلاة وشروطها وأركانها وواجباتها وسننها
// (lessen 25–32, boek p. 93–114). Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het
// importbestand van het boek; hadith en takhrij zoals in het boek. Pagina 101–102 zijn in het boek
// "alleen ter kennisname". Weggelaten omdat ze nog gecontroleerd moeten worden: het woord "باطلة" bij
// opzettelijk uitgesteld fajr (p. 97), de toevoeging «فإن لم تستطع فمستلقيا» bij an-Nasāʾī (p. 101), de
// toeschrijving van de hadith van Sahl ibn Saʿd aan beide Ṣaḥīḥ’s (p. 109), het bericht over ʿUmar ibn
// ʿAbd al-ʿAzīz (p. 112, mogelijk zwak) en de bewoording over de blik naar de hemel (p. 114).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (١)، سلسلة زاد العلمية',
  pages: '93–114',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Fiqh/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'عبد الله بن عمرو', text: 'وقت الظهر إذا زالت الشمس وكان ظل الرجل كطوله ما لم يحضر العصر، ووقت العصر ما لم تصفر الشمس، ووقت صلاة المغرب ما لم يغب الشفق، ووقت صلاة العشاء إلى نصف الليل الأوسط، ووقت صلاة الصبح من طلوع الفجر ما لم تطلع الشمس', takhrij: 'رواه مسلم', note: 'أصل المواقيت.', pages: [95, 96, 97], nl: 'De tijd van ẓuhr is als de zon over haar hoogste punt is en zolang de schaduw van een man niet langer is dan hijzelf en ʿaṣr niet is aangebroken; de tijd van ʿaṣr zolang de zon niet geel wordt; de tijd van maghrib zolang het avondrood niet verdwenen is; de tijd van ʿishāʾ tot de helft van de nacht; en de tijd van het ochtendgebed vanaf de dageraad zolang de zon niet opkomt', nlNote: 'De basis voor de gebedstijden.' },
  { narrator: '', text: 'إذا اشتد الحر فأبردوا بالصلاة فإن شدة الحر من فيح جهنم', takhrij: 'متفق عليه', note: 'في الإبراد بالظهر.', pages: [95], nl: 'Als de hitte hevig is, stel het gebed dan uit tot het koeler is, want hevige hitte komt van de adem van de Hel', nlNote: 'Over ẓuhr uitstellen bij hitte.' },
  { narrator: '', text: 'من فاتته صلاة العصر فكأنما وتر أهله وماله', takhrij: 'رواه البخاري ومسلم', note: 'أي فقد أهله وماله.', pages: [96], nl: 'Wie het ʿaṣr-gebed mist, is als iemand die zijn familie en bezit verloor', nlNote: '' },
  { narrator: '', text: 'لا تزال أمتي بخير ما لم يؤخروا المغرب حتى تشتبك النجوم', takhrij: 'رواه أبو داود وصححه الألباني', note: 'في تعجيل المغرب.', pages: [96], nl: 'Mijn gemeenschap blijft in het goede zolang ze maghrib niet uitstelt tot de sterren talrijk zijn', nlNote: 'Over maghrib vroeg bidden.' },
  { narrator: 'عائشة', text: 'لقد كان رسول الله ﷺ يصلي الفجر فيشهد معه نساء من المؤمنات متلفعات بمروطهن ثم يرجعن إلى بيوتهن ما يعرفهن أحد من الغلس', takhrij: 'متفق عليه', note: 'السنة تعجيل الفجر.', pages: [97], nl: 'De Boodschapper van Allah ﷺ bad het ochtendgebed en gelovige vrouwen, gehuld in hun mantels, baden mee; daarna gingen ze naar huis en niemand herkende hen door het duister', nlNote: 'De soenna is fajr vroeg te bidden.' },
  { narrator: 'عمر بن الخطاب', text: 'إنما الأعمال بالنيات', takhrij: 'متفق عليه', note: 'النية شرط، ومحلها القلب.', pages: [98], nl: 'Daden zijn alleen naar de intenties', nlNote: 'De intentie is een voorwaarde; haar plaats is het hart.' },
  { narrator: 'علي بن أبي طالب', text: 'رفع القلم عن ثلاثة: عن النائم حتى يستيقظ، وعن الصبي حتى يحتلم، وعن المجنون حتى يعقل', takhrij: 'رواه أبو داود وصححه الألباني', note: '', pages: [98], nl: 'De pen is opgeheven voor drie: de slaper tot hij wakker wordt, het kind tot het volwassen wordt, en de waanzinnige tot hij weer bij zinnen is', nlNote: '' },
  { narrator: '', text: 'لا يقبل الله صلاة حائض إلا بخمار', takhrij: 'رواه أبو داود وصححه الألباني', note: 'الحائض هنا: البالغة.', pages: [99], nl: 'Allah aanvaardt het gebed van een volwassen vrouw alleen met een hoofddoek', nlNote: '' },
  { narrator: '', text: 'تنزهوا من البول فإن عامة عذاب القبر منه', takhrij: 'رواه الدارقطني وصححه الألباني', note: 'في اجتناب النجاسة.', pages: [100], nl: 'Houd je rein van urine, want de meeste bestraffing in het graf komt daardoor', nlNote: 'Over najāsa mijden.' },
  { narrator: '', text: 'صل قائمًا فإن لم تستطع فقاعدًا فإن لم تستطع فعلى جنب', takhrij: 'رواه البخاري', note: '', pages: [101, 103], nl: 'Bid staand; kun je dat niet, dan zittend; kun je dat niet, dan op je zij', nlNote: '' },
  { narrator: '', text: 'تحريمها التكبير وتحليلها التسليم', takhrij: 'رواه أبو داود وصححه الألباني', note: '', pages: [103, 106], nl: 'Het gebed begint met de takbīr en eindigt met de taslīm', nlNote: '' },
  { narrator: '', text: 'لا صلاة لمن لم يقرأ بفاتحة الكتاب', takhrij: 'متفق عليه', note: '', pages: [104], nl: 'Er is geen gebed voor wie al-Fātiḥa niet reciteert', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'أمرت أن أسجد على سبعة أعظم: الجبهة -وأشار بيده إلى أنفه- واليدين والركبتين وأطراف القدمين', takhrij: 'متفق عليه', note: '', pages: [105], nl: 'Mij is opgedragen me neer te werpen op zeven botten: het voorhoofd (en hij wees naar zijn neus), de handen, de knieën en de tenen', nlNote: '' },
  { narrator: '', text: 'إذا قمت إلى الصلاة فكبر ثم اقرأ ما تيسر معك من القرآن ثم اركع حتى تطمئن راكعًا ثم ارفع حتى تعتدل قائمًا ثم اسجد حتى تطمئن ساجدًا ثم ارفع حتى تطمئن جالسًا وافعل ذلك في صلاتك كلها', takhrij: 'متفق عليه', note: 'حديث المسيء صلاته.', pages: [103, 104, 105, 106], nl: 'Als je opstaat voor het gebed, zeg de takbīr, reciteer wat je kunt van de Koran, buig tot je rustig gebogen staat, kom omhoog tot je recht staat, werp je neer tot je rustig neergeworpen bent, kom omhoog tot je rustig zit, en doe zo in je hele gebed', nlNote: 'De hadith van de man die slecht bad.' },
  { narrator: 'عبد الله بن مسعود', text: 'لا تقولوا السلام على الله ولكن قولوا: التحيات لله', takhrij: 'أخرجه النسائي وصححه الألباني', note: 'في فرض التشهد.', pages: [106], nl: 'Zeg niet "vrede zij met Allah", maar zeg: "at-taḥiyyātu lillāh" (alle eerbewijzen zijn voor Allah)', nlNote: 'Over de verplichting van de tashahhud.' },
  { narrator: '', text: 'صلوا كما رأيتموني أصلي', takhrij: 'رواه البخاري', note: 'دليل الترتيب.', pages: [106], nl: 'Bid zoals jullie mij zagen bidden', nlNote: 'Bewijs voor de volgorde.' },
  { narrator: 'عقبة بن عامر', text: 'لما نزلت ﴿فسبح باسم ربك العظيم﴾ قال: اجعلوها في ركوعكم، فلما نزلت ﴿سبح اسم ربك الأعلى﴾ قال: اجعلوها في سجودكم', takhrij: 'رواه أبو داود وحسنه النووي', note: 'في التسبيح.', pages: [107], nl: 'Toen "prijs de naam van je Heer, de Geweldige" werd geopenbaard, zei hij: doe het in jullie buiging; toen "prijs de naam van je Heer, de Allerhoogste" werd geopenbaard, zei hij: doe het in jullie neerwerping', nlNote: 'Over de lofprijzing.' },
  { narrator: 'أبو هريرة', text: 'إذا قال الإمام سمع الله لمن حمده فقولوا: اللهم ربنا لك الحمد', takhrij: 'متفق عليه', note: '', pages: [108], nl: 'Als de imam zegt "Allah hoort wie Hem prijst", zeg dan: "O Allah, onze Heer, aan U de lof"', nlNote: '' },
  { narrator: 'حذيفة بن اليمان', text: 'رب اغفر لي، رب اغفر لي', takhrij: 'رواه النسائي وصححه الألباني', note: 'ما يقال بين السجدتين.', pages: [108], nl: 'Mijn Heer, vergeef mij; mijn Heer, vergeef mij', nlNote: 'Wat je zegt tussen de twee neerwerpingen.' },
  { narrator: 'عبد الله بن عمر', text: 'رأيت رسول الله ﷺ إذا افتتح الصلاة رفع يديه حتى يحاذي منكبيه، وقبل أن يركع، وإذا رفع من الركوع، ولا يرفعهما بين السجدتين', takhrij: 'متفق عليه', note: 'رفع اليدين.', pages: [109], nl: 'Ik zag de Boodschapper van Allah ﷺ bij het begin van het gebed zijn handen tot zijn schouders heffen, en vóór de buiging, en bij het opkomen uit de buiging, maar niet tussen de twee neerwerpingen', nlNote: 'Het heffen van de handen.' },
  { narrator: 'وائل بن حجر', text: 'ثم وضع يده اليمنى على كفه اليسرى والرسغ والساعد', takhrij: 'رواه أبو داود وصححه الألباني', note: '', pages: [109], nl: 'Daarna legde hij zijn rechterhand op zijn linkerhand, de pols en de onderarm', nlNote: '' },
  { narrator: '', text: 'اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب، اللهم نقني من خطاياي كما ينقى الثوب الأبيض من الدنس، اللهم اغسلني من خطاياي بالثلج والماء والبرد', takhrij: 'متفق عليه', note: 'من أدعية الاستفتاح.', pages: [110], nl: 'O Allah, leg afstand tussen mij en mijn zonden zoals U afstand legde tussen oost en west; O Allah, reinig mij van mijn zonden zoals een wit kleed van vuil gereinigd wordt; O Allah, was mijn zonden af met sneeuw, water en hagel', nlNote: 'Een van de openingssmeekbeden.' },
  { narrator: '', text: 'إذا أمن الإمام فأمنوا فإن الملائكة تؤمن فمن وافق تأمينه تأمين الملائكة غفر له ما تقدم من ذنبه', takhrij: 'رواه البخاري', note: '', pages: [111], nl: 'Als de imam āmīn zegt, zeg dan āmīn, want de engelen zeggen āmīn; wiens āmīn samenvalt met dat van de engelen, wordt vergeven wat aan zonden voorafging', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'في كل صلاة قراءة فما أسمعنا النبي ﷺ أسمعناكم وما أخفى منا أخفيناه منكم', takhrij: 'متفق عليه', note: 'في الجهر والإسرار.', pages: [111], nl: 'In elk gebed wordt gereciteerd: wat de Profeet ﷺ ons liet horen, laten wij jullie horen, en wat hij voor ons verborg, verbergen wij voor jullie', nlNote: 'Over hardop en zacht reciteren.' },
  { narrator: 'عبد الله بن عمر', text: 'إنما سنة الصلاة أن تنصب رجلك اليمنى وتثني اليسرى', takhrij: 'رواه البخاري', note: 'جلسة الافتراش.', pages: [112], nl: 'De soenna van het gebed is dat je je rechtervoet rechtop zet en de linker plooit', nlNote: 'De zit op de linkervoet.' },
  { narrator: 'سعد بن أبي وقاص', text: 'كنت أرى رسول الله ﷺ يسلم عن يمينه وعن يساره حتى أرى بياض خده', takhrij: 'رواه مسلم', note: '', pages: [114], nl: 'Ik zag de Boodschapper van Allah ﷺ de taslīm naar rechts en links geven, zodat ik het wit van zijn wang zag', nlNote: '' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim', 'رواه البخاري': 'al-Bukhārī', 'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه الدارقطني وصححه الألباني': 'ad-Dāraquṭnī; authentiek volgens al-Albānī',
  'أخرجه النسائي وصححه الألباني': 'an-Nasāʾī; authentiek volgens al-Albānī',
  'رواه النسائي وصححه الألباني': 'an-Nasāʾī; authentiek volgens al-Albānī',
  'رواه أبو داود وحسنه النووي': 'Abū Dāwūd; goed (ḥasan) volgens an-Nawawī'
}
const NARRATOR_NL = {
  'عبد الله بن عمرو': 'ʿAbdallāh ibn ʿAmr', 'عائشة': 'ʿĀʾisha', 'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib',
  'عبد الله بن عباس': 'ʿAbdallāh ibn ʿAbbās', 'عبد الله بن مسعود': 'ʿAbdallāh ibn Masʿūd', 'عقبة بن عامر': 'ʿUqba ibn ʿĀmir', 'أبو هريرة': 'Abū Hurayra',
  'حذيفة بن اليمان': 'Ḥudhayfa ibn al-Yamān', 'عبد الله بن عمر': 'ʿAbdallāh ibn ʿUmar', 'وائل بن حجر': 'Wāʾil ibn Ḥujr', 'سعد بن أبي وقاص': 'Saʿd ibn Abī Waqqāṣ'
}

const PERSONS = [
  ['abdallah-ibn-amr', 'text', [95], 'روى أوقات الصلوات الخمس.', 'Overleverde de tijden van de vijf gebeden.'],
  ['aisha', 'text', [97, 104], 'روت تعجيل الفجر، والاعتدال بعد الركوع.', 'Overleverde dat fajr vroeg gebeden werd, en het rechtop staan na de buiging.'],
  ['umar-ibn-al-khattab', 'text', [98], 'روى «إنما الأعمال بالنيات».', 'Overleverde "daden zijn alleen naar de intenties".'],
  ['ali-ibn-abi-talib', 'text', [98], 'روى «رفع القلم عن ثلاثة».', 'Overleverde "de pen is opgeheven voor drie".'],
  ['asma-bint-abi-bakr', 'text', [100], 'روت غسل دم الحيض من الثوب.', 'Overleverde het wassen van menstruatiebloed uit kleding.'],
  ['ibn-abbas', 'text', [105, 112], 'روى السجود على سبعة أعظم، وأن الإقعاء بين السجدتين سنة.', 'Overleverde de neerwerping op zeven botten, en dat de iqʿāʾ tussen de neerwerpingen soenna is.'],
  ['ibn-masud', 'text', [106], 'روى فرض التشهد.', 'Overleverde de verplichting van de tashahhud.'],
  ['abu-hurayra', 'text', [107, 108, 109, 111], 'روى التكبير في كل خفض ورفع، والتحميد، والجهر والإسرار.', 'Overleverde de takbīr bij elke beweging, het lofprijzen en hardop of zacht reciteren.'],
  ['hudhayfa-ibn-al-yaman', 'text', [107, 108], 'روى التسبيح في الركوع والسجود والدعاء بين السجدتين.', 'Overleverde de lofprijzing in buiging en neerwerping en de smeekbede ertussen.'],
  ['uqba-ibn-amir', 'text', [107], 'روى جعل التسبيح في الركوع والسجود.', 'Overleverde dat de lofprijzing in buiging en neerwerping hoort.'],
  ['ibn-umar', 'text', [109, 111, 112, 113, 114], 'روى رفع اليدين وجلسة الافتراش والإشارة بالسبابة.', 'Overleverde het heffen van de handen, de zit op de linkervoet en het wijzen met de wijsvinger.'],
  ['abu-humayd-as-saidi', 'text', [109, 112], 'وصف رفع اليدين بعد التشهد الأول والمجافاة.', 'Beschreef het heffen van de handen na de eerste tashahhud en het spreiden van de armen.'],
  ['wail-ibn-hujr', 'text', [109], 'وصف وضع اليمنى على اليسرى.', 'Beschreef het leggen van de rechterhand op de linker.'],
  ['tawus-ibn-kaysan', 'text', [112], 'سأل ابن عباس عن الإقعاء.', 'Vroeg Ibn ʿAbbās naar de iqʿāʾ.'],
  ['sad-ibn-abi-waqqas', 'text', [114], 'روى التسليم عن اليمين واليسار.', 'Overleverde de taslīm naar rechts en links.'],
  ['at-tirmidhi', 'text', [110], 'قال: وعليه العمل عند أكثر أهل العلم في ترك الجهر بالبسملة.', 'Zei dat de meeste geleerden de basmala niet hardop zeggen.'],
  ['al-bukhari', 'takhrij', [95, 96, 97, 98, 99, 101, 104, 105, 106, 109, 111, 112], 'أخرج كثيرًا من أحاديث الوحدة.', 'Nam veel hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [95, 96, 97, 98, 104, 105, 106, 107, 109, 110, 111, 114], 'أخرج كثيرًا من أحاديث الوحدة.', 'Nam veel hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [96, 98, 99, 103, 107, 109], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['an-nasai', 'takhrij', [106, 108], 'أخرج حديث التشهد والدعاء بين السجدتين.', 'Nam de hadith over de tashahhud en de smeekbede tussen de neerwerpingen op.'],
  ['ad-daraqutni', 'takhrij', [100], 'أخرج «تنزهوا من البول».', 'Nam "houd je rein van urine" op.'],
  ['an-nawawi', 'takhrij', [107], 'حسن حديث عقبة بن عامر.', 'Beoordeelde de hadith van ʿUqba ibn ʿĀmir als goed.'],
  ['al-albani', 'takhrij', [96, 98, 99, 100, 103, 106, 108, 109], 'صحح أحاديث في الوحدة.', 'Verklaarde hadith in deze eenheid authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'مواقيت الصلاة وشروطها وأركانها وواجباتها وسننها',
  subtitle: 'ثمانية دروس مجموعة في صفحة واحدة',
  summary: 'أوقات الصلوات الخمس وما يسن فيها من تعجيل أو إبراد، ثم شروط الصلاة التسعة، ثم أركانها التي لا تسقط بحال، وواجباتها التي يجبرها سجود السهو، وسننها القولية والفعلية.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'المواقيت والشروط والأركان', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'المواقيت', sub: 'الدرسان ٢٥–٢٦', page: 95, children: ['الظهر والعصر', 'المغرب والعشاء', 'الفجر'] },
      { label: 'الشروط', sub: 'الدرس ٢٧', page: 98, children: ['تسعة شروط'] },
      { label: 'الأركان', sub: 'الدرسان ٢٨–٢٩', page: 103, children: ['لا تسقط بحال'] },
      { label: 'الواجبات', sub: 'الدرس ٣٠', page: 107, children: ['يجبرها سجود السهو'] },
      { label: 'السنن', sub: 'الدرسان ٣١–٣٢', page: 109, children: ['قولية', 'فعلية'] }
    ]
  },
  points: [
    { text: 'وقت الظهر من الزوال إلى أن يصير ظل كل شيء مثله، ويستحب تعجيلها إلا في شدة الحر.', page: 95 },
    { text: 'العصر هي الصلاة الوسطى، ويسن تعجيلها.', page: 95 },
    { text: 'وقت المغرب من غروب الشمس إلى مغيب الشفق الأحمر، ويسن تعجيلها.', page: 96 },
    { text: 'وقت العشاء ينتهي بنصف الليل الشرعي، وهو منتصف ما بين المغرب والفجر، لا الساعة الثانية عشرة.', page: 97 },
    { text: 'النية شرط محلها القلب، ولا يشرع التلفظ بها.', page: 98 },
    { text: 'المرأة كلها عورة في الصلاة إلا وجهها وكفيها، إلا أمام غير المحارم فتغطي كل شيء.', page: 99 },
    { text: 'الأركان لا تسقط عمدًا ولا سهوًا ولا جهلًا.', page: 106 },
    { text: 'الواجب إن ترك عمدًا بطلت الصلاة، وإن ترك سهوًا أو جهلًا جبره سجود السهو.', page: 107 }
  ],
  terms: [
    { term: 'الزوال', translit: 'az-zawāl', meaning: 'ميل الشمس عن كبد السماء إلى جهة المغرب.', explanation: 'به يدخل وقت الظهر.', notes: [], page: 95 },
    { term: 'الإبراد', translit: 'al-ibrād', meaning: 'تأخير الظهر إلى أن يخف الحر.', explanation: '', notes: [], page: 95 },
    { term: 'الصلاة الوسطى', translit: 'aṣ-ṣalāh al-wusṭā', meaning: 'صلاة العصر.', explanation: '', notes: ['[البقرة: ٢٣٨]'], page: 95 },
    { term: 'الشفق', translit: 'ash-shafaq', meaning: 'الحمرة بعد غروب الشمس.', explanation: 'بمغيبه يخرج وقت المغرب.', notes: [], page: 96 },
    { term: 'الفجر الصادق', translit: 'al-fajr aṣ-ṣādiq', meaning: 'البياض المعترض في الأفق الذي يدخل به وقت الفجر.', explanation: '', notes: [], page: 97 },
    { term: 'الركن', translit: 'ar-rukn', meaning: 'ما لا تصح الصلاة إلا به، ولا يسقط عمدًا ولا سهوًا ولا جهلًا.', explanation: '', notes: [], page: 106 },
    { term: 'الواجب', translit: 'al-wājib', meaning: 'ما تبطل الصلاة بتركه عمدًا، ويجبره سجود السهو إن ترك سهوًا.', explanation: '', notes: [], page: 107 },
    { term: 'الطمأنينة', translit: 'aṭ-ṭumaʾnīna', meaning: 'أن يمكث حتى تستقر أعضاؤه وتسكن مهما قل الزمن.', explanation: 'وقيل: بقدر الذكر الواجب.', notes: [], page: 106 },
    { term: 'الافتراش', translit: 'al-iftirāsh', meaning: 'أن يفترش قدمه اليسرى ويجلس عليها وينصب اليمنى.', explanation: 'في التشهد الأول وبين السجدتين.', notes: [], page: 112 },
    { term: 'التورك', translit: 'at-tawarruk', meaning: 'أن يجلس على مقعدته في التشهد الأخير من صلاة ذات تشهدين.', explanation: 'وله ثلاث صفات وردت بها السنة.', notes: [], page: 113 },
    { term: 'الإقعاء', translit: 'al-iqʿāʾ', meaning: 'نوعان: مكروه كإقعاء الكلب، ومسنون بأن يجعل أليتيه على عقبيه بين السجدتين.', explanation: '', notes: [], page: 113 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'مواقيت الصلوات الخمس',
      intro: 'كما في الكتاب.',
      columns: ['يبدأ', 'ينتهي', 'السنة'],
      rows: [
        { label: 'الظهر', cells: ['الزوال', 'مصير ظل كل شيء مثله', 'التعجيل إلا في شدة الحر'] },
        { label: 'العصر', cells: ['نهاية وقت الظهر', 'غروب الشمس', 'التعجيل'] },
        { label: 'المغرب', cells: ['غروب الشمس', 'مغيب الشفق الأحمر', 'التعجيل'] },
        { label: 'العشاء', cells: ['مغيب الشفق', 'نصف الليل', '—'] },
        { label: 'الفجر', cells: ['طلوع الفجر الصادق', 'طلوع الشمس', 'التعجيل'] }
      ],
      page: 95
    },
    {
      type: 'cards',
      title: 'شروط الصلاة',
      intro: 'تسعة كما في الدرس السابع والعشرين.',
      nodes: [
        { label: 'النية', page: 98 },
        { label: 'الإسلام', page: 98 },
        { label: 'العقل', page: 98 },
        { label: 'البلوغ', sub: 'شرط وجوب', page: 98 },
        { label: 'الطهارة من الحدثين', page: 99 },
        { label: 'دخول الوقت', page: 99 },
        { label: 'ستر العورة', page: 99 },
        { label: 'استقبال القبلة', page: 100 },
        { label: 'اجتناب النجاسة', page: 100 }
      ]
    },
    {
      type: 'steps',
      title: 'أركان الصلاة',
      intro: 'كما في الدرسين الثامن والعشرين والتاسع والعشرين.',
      nodes: [
        { label: 'القيام في الفريضة للقادر', page: 103 },
        { label: 'تكبيرة الإحرام', page: 103 },
        { label: 'قراءة الفاتحة في كل ركعة', page: 104 },
        { label: 'الركوع', page: 104 },
        { label: 'الرفع منه والاعتدال', page: 104 },
        { label: 'السجود على الأعضاء السبعة', page: 105 },
        { label: 'الجلوس بين السجدتين', page: 105 },
        { label: 'الطمأنينة', page: 106 },
        { label: 'التشهد الأخير والجلوس له', page: 106 },
        { label: 'الصلاة على النبي ﷺ فيه', page: 106 },
        { label: 'التسليم', page: 106 },
        { label: 'الترتيب', page: 106 }
      ]
    },
    {
      type: 'cards',
      title: 'واجبات الصلاة',
      intro: 'كما في الدرس الثلاثين.',
      nodes: [
        { label: 'تكبيرات الانتقال', page: 107 },
        { label: 'التسبيح في الركوع والسجود', sub: 'الواجب مرة، والكمال عشر', page: 107 },
        { label: 'التسميع والتحميد', page: 108 },
        { label: '«رب اغفر لي» بين السجدتين', page: 108 },
        { label: 'التشهد الأول والجلوس له', page: 108 }
      ]
    },
    {
      type: 'compare',
      title: 'الركن والواجب والسنة',
      intro: 'كما في الكتاب.',
      columns: ['تركه عمدًا', 'تركه سهوًا'],
      rows: [
        { label: 'الركن', cells: ['تبطل الصلاة', 'لا تصح إلا بالإتيان به'] },
        { label: 'الواجب', cells: ['تبطل الصلاة', 'يجبره سجود السهو'] },
        { label: 'السنة', cells: ['لا تبطل', 'لا تبطل'] }
      ],
      page: 107
    }
  ],
  sections: [
    { title: 'التحذير من ترك العصر', text: '«من فاتته صلاة العصر فكأنما وتر أهله وماله»، و«من ترك صلاة العصر فقد حبط عمله».', more: '', page: 96 },
    { title: 'ستر العورة', text: 'ينبغي للرجل أن يجعل على عاتقه شيئًا من الثياب، والمرأة كلها عورة في الصلاة إلا وجهها وكفيها، فإن صلت أمام غير المحارم غطت كل شيء.', more: '[الأعراف: ٣١]', page: 99 },
    { title: 'استقبال القبلة', text: 'من يرى الكعبة وجب عليه استقبال عينها، ومن لا يراها اكتفى بالجهة.', more: '[البقرة: ١٤٤]', page: 100 },
    { title: 'الصلاة في الطائرة والسيارة (للاطلاع فقط)', text: 'النافلة جائزة فيها بكل حال في السفر؛ والفريضة يؤخرها إن كان يدرك وقتها إذا وصل، فإن خشي خروج الوقت صلاها على حسب حاله، مستقبلًا قائمًا راكعًا ساجدًا عند القدرة.', more: 'المقطع في الكتاب للاطلاع فقط.', page: 101 },
    { title: 'القيام والعجز عنه', text: 'إن عجز عن القيام صلى قاعدًا أو على جنب، وإن قدر على القيام وعجز عن الركوع أو السجود سقط ما عجز عنه فقط؛ والنافلة يجوز فيها القعود مع القدرة، ولصاحبها نصف الأجر.', more: '', page: 103 },
    { title: 'الفاتحة للمأموم', text: 'تجب على المصلي بكل حال: في الجهرية والسرية، إمامًا أو مأمومًا أو منفردًا؛ ويستثنى المسبوق إذا أدرك الإمام راكعًا.', more: '', page: 104 },
    { title: 'الصلاة على النبي ﷺ في التشهد', text: '«قولوا: اللهم صل على محمد وعلى آل محمد»، ولا ينبغي زيادة «سيدنا» فيها.', more: '', page: 106 },
    { title: 'موضع اليدين في القيام', text: 'يضع اليمنى على اليسرى، وله أن يضعهما على صدره أو فوق السرة أو تحتها، فالأمر واسع لعدم ثبوت حديث في موضعهما.', more: '', page: 109 },
    { title: 'من السنن القولية', text: 'دعاء الاستفتاح والأفضل التنويع، والتعوذ، والبسملة سرًا، والتأمين بعد الفاتحة جهرًا في الجهرية، وقراءة ما زاد على الفاتحة، والدعاء بعد التشهد قبل السلام.', more: '', page: 110 },
    { title: 'من السنن الفعلية', text: 'رفع اليدين في أربعة مواضع، ووضع اليمين على الشمال، وقبض الركبتين مع مد الظهر في الركوع، ومجافاة اليدين، والافتراش والتورك، والإشارة بالسبابة والنظر إليها، والالتفات في التسليم.', more: '', page: 109 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شروط الصلاة', items: ['النية', 'الإسلام', 'العقل', 'البلوغ', 'الطهارة', 'دخول الوقت', 'ستر العورة', 'استقبال القبلة', 'اجتناب النجاسة'], page: 98, origin: 'boek' },
    { kind: 'onderscheid', title: 'الركن والواجب', items: ['الركن: لا يسقط عمدًا ولا سهوًا ولا جهلًا.', 'الواجب: يبطل الصلاة عمدًا، ويجبره سجود السهو سهوًا.'], page: 107, origin: 'boek' },
    { kind: 'bewijs', title: 'الطمأنينة', items: ['«ثم اركع حتى تطمئن راكعًا ... وافعل ذلك في صلاتك كلها».'], page: 106, origin: 'boek' },
    { kind: 'opsomming', title: 'مواضع رفع اليدين', items: ['تكبيرة الإحرام', 'الركوع', 'الرفع منه', 'القيام من التشهد الأول'], page: 109, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'لكل صلاة وقت محدد، والسنة التعجيل إلا الظهر في شدة الحر.',
    'للصلاة تسعة شروط، أولها النية.',
    'للصلاة اثنا عشر ركنًا لا تسقط بحال.',
    'للصلاة خمسة واجبات يجبرها سجود السهو.',
    'سنن الصلاة قولية وفعلية، ولا تبطل الصلاة بتركها.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الصلاة الوسطى؟', options: ['العصر', 'الظهر', 'المغرب', 'الفجر'], answer: 0, explain: '﴿حافظوا على الصلوات والصلاة الوسطى﴾.', page: 95 },
    { type: 'mc', q: 'متى ينتهي وقت العشاء؟', options: ['بنصف الليل الشرعي', 'الساعة الثانية عشرة', 'طلوع الفجر', 'مغيب الشفق'], answer: 0, explain: 'وهو منتصف ما بين المغرب والفجر.', page: 97 },
    { type: 'tf', q: 'يشرع التلفظ بالنية قبل الصلاة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لم يتلفظ بها النبي ﷺ ولا أصحابه.', page: 98 },
    { type: 'mc', q: 'على كم عضو يكون السجود؟', options: ['سبعة', 'خمسة', 'ستة', 'ثمانية'], answer: 0, explain: 'الجبهة مع الأنف، واليدان، والركبتان، وأطراف القدمين.', page: 105 },
    { type: 'mc', q: 'ما حكم من نسي ركنًا؟', options: ['لا تصح صلاته إلا بالإتيان به', 'يجبره سجود السهو', 'لا شيء عليه', 'يعيد الصلاة كلها دائمًا'], answer: 0, explain: 'بخلاف الواجب.', page: 107 },
    { type: 'mc', q: 'أي هذه من واجبات الصلاة؟', options: ['التشهد الأول', 'تكبيرة الإحرام', 'قراءة الفاتحة', 'دعاء الاستفتاح'], answer: 0, explain: 'تكبيرة الإحرام والفاتحة ركنان، والاستفتاح سنة.', page: 108 },
    { type: 'tf', q: 'يسن الجهر بالبسملة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'تقال سرًا.', page: 110 }
  ]),
  note: 'ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'Gebedstijden, voorwaarden, zuilen, verplichtingen en soenna’s',
  subtitle: 'Acht lessen samen op één pagina',
  summary: 'De tijden van de vijf gebeden en wanneer je vroeg bidt of uitstelt; de negen voorwaarden van het gebed; de zuilen die nooit vervallen; de verplichtingen die met de neerwerping voor vergeetachtigheid hersteld worden; en de soenna’s in woorden en handelingen.',
  source: { ...source, label: 'Kitāb al-Fiqh (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Tijden, voorwaarden en zuilen', sub: 'Eenheid 5' },
    nodes: [
      { label: 'De tijden', sub: 'les 25–26', page: 95, children: ['ẓuhr en ʿaṣr', 'maghrib en ʿishāʾ', 'fajr'] },
      { label: 'De voorwaarden', sub: 'les 27', page: 98, children: ['negen voorwaarden'] },
      { label: 'De zuilen', sub: 'les 28–29', page: 103, children: ['vervallen nooit'] },
      { label: 'De verplichtingen', sub: 'les 30', page: 107, children: ['herstel door sujūd as-sahw'] },
      { label: 'De soenna’s', sub: 'les 31–32', page: 109, children: ['in woorden', 'in handelingen'] }
    ]
  },
  points: [
    { text: 'De tijd van ẓuhr loopt van het moment dat de zon over haar hoogste punt is tot een schaduw zo lang is als het voorwerp; vroeg bidden is beter, behalve bij grote hitte.', page: 95 },
    { text: 'ʿAṣr is het middelste gebed; vroeg bidden is soenna.', page: 95 },
    { text: 'De tijd van maghrib loopt van zonsondergang tot het avondrood verdwenen is; vroeg bidden is soenna.', page: 96 },
    { text: 'De tijd van ʿishāʾ eindigt halverwege de nacht, het midden tussen maghrib en fajr, en niet om twaalf uur.', page: 97 },
    { text: 'De intentie is een voorwaarde en zit in het hart; die uitspreken is niet voorgeschreven.', page: 98 },
    { text: 'In het gebed bedekt een vrouw alles behalve gezicht en handen; bij vreemde mannen bedekt ze alles.', page: 99 },
    { text: 'De zuilen vervallen niet, ook niet uit vergeetachtigheid of onwetendheid.', page: 106 },
    { text: 'Een verplichting opzettelijk weglaten maakt het gebed ongeldig; vergeten of uit onwetendheid wordt hersteld met sujūd as-sahw.', page: 107 }
  ],
  terms: [
    { term: 'الزوال', translit: 'az-zawāl', meaning: 'Het moment dat de zon vanaf haar hoogste punt naar het westen zakt.', explanation: 'Dan begint de tijd van ẓuhr.', notes: [], page: 95 },
    { term: 'الإبراد', translit: 'al-ibrād', meaning: 'Ẓuhr uitstellen tot de hitte afneemt.', explanation: '', notes: [], page: 95 },
    { term: 'الصلاة الوسطى', translit: 'aṣ-ṣalāh al-wusṭā', meaning: 'Het middelste gebed: ʿaṣr.', explanation: '', notes: ['al-Baqara 2:238'], page: 95 },
    { term: 'الشفق', translit: 'ash-shafaq', meaning: 'Het avondrood na zonsondergang.', explanation: 'Als het verdwijnt, eindigt de tijd van maghrib.', notes: [], page: 96 },
    { term: 'الفجر الصادق', translit: 'al-fajr aṣ-ṣādiq', meaning: 'De echte dageraad: het licht dat zich langs de horizon uitspreidt en de tijd van fajr begint.', explanation: '', notes: [], page: 97 },
    { term: 'الركن', translit: 'ar-rukn', meaning: 'Zuil: zonder dit is het gebed ongeldig; vervalt niet door opzet, vergeten of onwetendheid.', explanation: '', notes: [], page: 106 },
    { term: 'الواجب', translit: 'al-wājib', meaning: 'Verplichting: opzettelijk weglaten maakt het gebed ongeldig; vergeten wordt hersteld met sujūd as-sahw.', explanation: '', notes: [], page: 107 },
    { term: 'الطمأنينة', translit: 'aṭ-ṭumaʾnīna', meaning: 'Rust: blijven tot de ledematen tot rust komen, hoe kort ook.', explanation: 'Volgens sommigen: zo lang als het verplichte gedenken duurt.', notes: [], page: 106 },
    { term: 'الافتراش', translit: 'al-iftirāsh', meaning: 'Zitten op de linkervoet, met de rechtervoet rechtop.', explanation: 'Bij de eerste tashahhud en tussen de neerwerpingen.', notes: [], page: 112 },
    { term: 'التورك', translit: 'at-tawarruk', meaning: 'Op de grond zitten bij de laatste tashahhud van een gebed met twee tashahhuds.', explanation: 'De soenna kent drie vormen.', notes: [], page: 113 },
    { term: 'الإقعاء', translit: 'al-iqʿāʾ', meaning: 'Twee soorten: afgeraden zoals een hond zit, en soenna door tussen de neerwerpingen op de hielen te zitten.', explanation: '', notes: [], page: 113 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De tijden van de vijf gebeden',
      intro: 'Zoals in het boek.',
      columns: ['Begint', 'Eindigt', 'Soenna'],
      rows: [
        { label: 'Ẓuhr', cells: ['als de zon over het hoogste punt is', 'als een schaduw zo lang is als het voorwerp', 'vroeg, behalve bij grote hitte'] },
        { label: 'ʿAṣr', cells: ['einde van ẓuhr', 'zonsondergang', 'vroeg'] },
        { label: 'Maghrib', cells: ['zonsondergang', 'als het avondrood verdwenen is', 'vroeg'] },
        { label: 'ʿIshāʾ', cells: ['als het avondrood verdwenen is', 'halverwege de nacht', '—'] },
        { label: 'Fajr', cells: ['echte dageraad', 'zonsopgang', 'vroeg'] }
      ],
      page: 95
    },
    {
      type: 'cards',
      title: 'De voorwaarden van het gebed',
      intro: 'Negen zoals in les 27.',
      nodes: [
        { label: 'Intentie', page: 98 },
        { label: 'Islam', page: 98 },
        { label: 'Verstand', page: 98 },
        { label: 'Volwassenheid', sub: 'voorwaarde voor de plicht', page: 98 },
        { label: 'Rein van ḥadath', page: 99 },
        { label: 'De tijd is begonnen', page: 99 },
        { label: 'ʿAwra bedekken', page: 99 },
        { label: 'Naar de qibla', page: 100 },
        { label: 'Vrij van najāsa', page: 100 }
      ]
    },
    {
      type: 'steps',
      title: 'De zuilen van het gebed',
      intro: 'Zoals in les 28 en 29.',
      nodes: [
        { label: 'Staan bij het verplichte gebed, als je kunt', page: 103 },
        { label: 'De openingstakbīr', page: 103 },
        { label: 'Al-Fātiḥa in elke rakʿa', page: 104 },
        { label: 'De buiging', page: 104 },
        { label: 'Opkomen en rechtop staan', page: 104 },
        { label: 'Neerwerpen op de zeven delen', page: 105 },
        { label: 'Zitten tussen de neerwerpingen', page: 105 },
        { label: 'Rust in elke zuil', page: 106 },
        { label: 'De laatste tashahhud en de zit daarvoor', page: 106 },
        { label: 'Zegen over de Profeet ﷺ daarin', page: 106 },
        { label: 'De taslīm', page: 106 },
        { label: 'De volgorde', page: 106 }
      ]
    },
    {
      type: 'cards',
      title: 'De verplichtingen van het gebed',
      intro: 'Zoals in les 30.',
      nodes: [
        { label: 'De takbīrs bij het wisselen van houding', page: 107 },
        { label: 'Lofprijzing in buiging en neerwerping', sub: 'verplicht één keer, volmaakt tien', page: 107 },
        { label: '"Allah hoort wie Hem prijst" en "onze Heer, aan U de lof"', page: 108 },
        { label: '"Mijn Heer, vergeef mij" tussen de neerwerpingen', page: 108 },
        { label: 'De eerste tashahhud en de zit daarvoor', page: 108 }
      ]
    },
    {
      type: 'compare',
      title: 'Zuil, verplichting en soenna',
      intro: 'Zoals in het boek.',
      columns: ['Opzettelijk weggelaten', 'Vergeten'],
      rows: [
        { label: 'Zuil', cells: ['gebed ongeldig', 'alleen geldig als je hem alsnog doet'] },
        { label: 'Verplichting', cells: ['gebed ongeldig', 'hersteld met sujūd as-sahw'] },
        { label: 'Soenna', cells: ['gebed geldig', 'gebed geldig'] }
      ],
      page: 107
    }
  ],
  sections: [
    { title: 'Waarschuwing tegen het missen van ʿaṣr', text: '"Wie het ʿaṣr-gebed mist, is als iemand die zijn familie en bezit verloor", en "wie het ʿaṣr-gebed nalaat, diens daden zijn tenietgedaan".', more: '', page: 96 },
    { title: 'De ʿawra bedekken', text: 'Een man legt iets van zijn kleding over zijn schouder. Een vrouw bedekt in het gebed alles behalve gezicht en handen; bidt ze waar vreemde mannen zijn, dan bedekt ze alles.', more: 'al-Aʿrāf 7:31', page: 99 },
    { title: 'Naar de qibla', text: 'Wie de Kaʿba ziet, richt zich op de Kaʿba zelf; wie haar niet ziet, op de richting.', more: 'al-Baqara 2:144', page: 100 },
    { title: 'Bidden in vliegtuig of auto (alleen ter kennisname)', text: 'Een vrijwillig gebed mag onderweg altijd. Een verplicht gebed stel je uit als je bij aankomst nog op tijd bent; vrees je dat de tijd voorbijgaat, dan bid je zo goed je kunt, naar de qibla, staand, buigend en neerwerpend waar mogelijk.', more: 'Dit deel staat in het boek alleen ter kennisname.', page: 101 },
    { title: 'Staan en het niet kunnen', text: 'Kun je niet staan, bid dan zittend of op je zij. Kun je staan maar niet buigen of neerwerpen, dan vervalt alleen wat je niet kunt. Een vrijwillig gebed mag zittend, ook als je kunt staan; je krijgt dan de helft van de beloning.', more: '', page: 103 },
    { title: 'Al-Fātiḥa achter de imam', text: 'Ze is altijd verplicht: bij hardop en zacht gereciteerde gebeden, als imam, als volger of alleen; behalve voor wie de imam in de buiging inhaalt.', more: '', page: 104 },
    { title: 'Zegen over de Profeet ﷺ in de tashahhud', text: '"Zeg: O Allah, zegen Muḥammad en de familie van Muḥammad." "Sayyidinā" toevoegen hoort er niet in.', more: '', page: 106 },
    { title: 'Waar de handen liggen bij het staan', text: 'De rechterhand op de linker; op de borst, boven of onder de navel mag allemaal, omdat er geen authentieke hadith over de plaats is.', more: '', page: 109 },
    { title: 'Soenna’s in woorden', text: 'De openingssmeekbede (afwisselen is het beste), de taʿawwudh, zacht de basmala, āmīn na al-Fātiḥa (hardop bij hardop gereciteerde gebeden), meer reciteren dan al-Fātiḥa, en een smeekbede na de tashahhud vóór de taslīm.', more: '', page: 110 },
    { title: 'Soenna’s in handelingen', text: 'De handen heffen op vier momenten, rechts over links, de knieën vastpakken met een rechte rug, de armen van het lichaam houden, de zit op de linkervoet en de tawarruk, wijzen met de wijsvinger en ernaar kijken, en het hoofd draaien bij de taslīm.', more: '', page: 109 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'De voorwaarden van het gebed', items: ['intentie', 'islam', 'verstand', 'volwassenheid', 'reinheid', 'de tijd is begonnen', 'ʿawra bedekken', 'naar de qibla', 'vrij van najāsa'], page: 98, origin: 'boek' },
    { kind: 'onderscheid', title: 'Zuil en verplichting', items: ['Zuil: vervalt niet door opzet, vergeten of onwetendheid.', 'Verplichting: opzettelijk weglaten maakt ongeldig; vergeten wordt hersteld met sujūd as-sahw.'], page: 107, origin: 'boek' },
    { kind: 'bewijs', title: 'Rust in het gebed', items: ['"Buig tot je rustig gebogen staat ... en doe zo in je hele gebed."'], page: 106, origin: 'boek' },
    { kind: 'opsomming', title: 'Wanneer je de handen heft', items: ['de openingstakbīr', 'de buiging', 'het opkomen uit de buiging', 'het opstaan na de eerste tashahhud'], page: 109, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Elk gebed heeft een vaste tijd; vroeg bidden is soenna, behalve ẓuhr bij grote hitte.',
    'Het gebed heeft negen voorwaarden, te beginnen met de intentie.',
    'Het gebed heeft twaalf zuilen die nooit vervallen.',
    'Het gebed heeft vijf verplichtingen die met sujūd as-sahw hersteld worden.',
    'De soenna’s zijn in woorden en handelingen; weglaten maakt het gebed niet ongeldig.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welk gebed is het middelste gebed?', options: ['ʿaṣr', 'ẓuhr', 'maghrib', 'fajr'], answer: 0, explain: '"Waak over de gebeden en het middelste gebed."', page: 95 },
    { type: 'mc', q: 'Wanneer eindigt de tijd van ʿishāʾ?', options: ['halverwege de nacht', 'om twaalf uur', 'bij de dageraad', 'als het avondrood verdwijnt'], answer: 0, explain: 'Het midden tussen maghrib en fajr.', page: 97 },
    { type: 'tf', q: 'Je spreekt de intentie uit vóór het gebed.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'De Profeet ﷺ en zijn metgezellen deden dat niet.', page: 98 },
    { type: 'mc', q: 'Op hoeveel lichaamsdelen werp je je neer?', options: ['zeven', 'vijf', 'zes', 'acht'], answer: 0, explain: 'Voorhoofd met neus, handen, knieën en tenen.', page: 105 },
    { type: 'mc', q: 'Wat als je een zuil vergeet?', options: ['het gebed is alleen geldig als je hem alsnog doet', 'sujūd as-sahw is genoeg', 'niets', 'altijd het hele gebed overdoen'], answer: 0, explain: 'Anders dan bij een verplichting.', page: 107 },
    { type: 'mc', q: 'Wat is een verplichting van het gebed?', options: ['de eerste tashahhud', 'de openingstakbīr', 'al-Fātiḥa', 'de openingssmeekbede'], answer: 0, explain: 'Takbīr en al-Fātiḥa zijn zuilen; de openingssmeekbede is soenna.', page: 108 },
    { type: 'tf', q: 'De basmala hardop zeggen is soenna.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Je zegt haar zacht.', page: 110 }
  ]),
  note: 'Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-fiqh', chapter: '25', unit: 5, ar, nl }
