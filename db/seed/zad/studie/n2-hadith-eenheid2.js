// Hoofdstukkaart bij الحديث (٢), eenheid 2: الأحاديث ٧–١٢ (lessen 7–12, boek p. 33–53).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De algemene uitleg (الشرح الإجمالي) staat in het boek
// "alleen ter kennisname". Uitspraken van metgezellen (Abū Bakr en Ibn Masʿūd op p. 35, Ibn Masʿūd op
// p. 52) staan niet in het hadith-tabblad. Niet overgenomen: de citaten zonder bron over vrijmetselaars
// en "zionistische plannen" in de uitleg op p. 38.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (٢)، سلسلة زاد العلمية',
  pages: '33–53',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'الشرح الإجمالي في الكتاب للاطلاع فقط.'
const FYI_NL = 'De algemene uitleg staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'ثلاثة حق على الله عونهم: المجاهد في سبيل الله، والمكاتب الذي يريد الأداء، والناكح الذي يريد العفاف', takhrij: 'رواه الترمذي وحسنه', note: 'الحديث السابع.', pages: [33], nl: 'Drie mensen zal Allah zeker helpen: wie strijdt op de weg van Allah, de slaaf met een vrijkoopcontract die wil betalen, en wie trouwt om kuis te blijven', nlNote: 'Hadith 7.' },
  { narrator: 'أبو سعيد الخدري', text: 'إن الدنيا حلوة خضرة، وإن الله مستخلفكم فيها فينظر كيف تعملون، فاتقوا الدنيا واتقوا النساء، فإن أول فتنة بني إسرائيل كانت في النساء', takhrij: 'رواه مسلم', note: 'الحديث الثامن.', pages: [37], nl: 'Deze wereld is zoet en groen, en Allah maakt jullie er opvolgers in en kijkt hoe jullie handelen. Wees dus op je hoede voor deze wereld en voor de vrouwen, want de eerste beproeving van de Banū Isrāʾīl lag bij de vrouwen', nlNote: 'Hadith 8.' },
  { narrator: '', text: 'إن مما أخاف عليكم من بعدي ما يفتح عليكم من زهرة الدنيا وزينتها', takhrij: 'متفق عليه', note: 'في التحذير من الاغترار بالدنيا.', pages: [39], nl: 'Wat ik voor jullie na mij vrees, is de bloei en de schoonheid van deze wereld die voor jullie geopend worden', nlNote: 'Een waarschuwing om je niet door deze wereld te laten verleiden.' },
  { narrator: '', text: 'ما تركت بعدي فتنة أضر على الرجال من النساء', takhrij: 'متفق عليه', note: 'في التحذير من فتنة النساء.', pages: [39], nl: 'Ik heb na mij geen beproeving achtergelaten die schadelijker is voor mannen dan vrouwen', nlNote: 'Een waarschuwing voor de beproeving van vrouwen.' },
  { narrator: 'عبد الله بن عمر', text: 'أخذ رسول الله ﷺ بمنكبي فقال: «كن في الدنيا كأنك غريب أو عابر سبيل»، وكان ابن عمر يقول: إذا أمسيت فلا تنتظر الصباح، وإذا أصبحت فلا تنتظر المساء، وخذ من صحتك لمرضك، ومن حياتك لموتك', takhrij: 'رواه البخاري', note: 'الحديث التاسع.', pages: [40], nl: 'De Boodschapper van Allah ﷺ pakte mij bij de schouder en zei: "Wees in deze wereld als een vreemdeling of een reiziger." En Ibn ʿUmar zei: "Als je de avond haalt, wacht dan niet op de ochtend, en als je de ochtend haalt, wacht dan niet op de avond. Neem van je gezondheid voor je ziekte, en van je leven voor je dood."', nlNote: 'Hadith 9.' },
  { narrator: 'أنس بن مالك', text: 'حفت الجنة بالمكاره، وحفت النار بالشهوات', takhrij: 'متفق عليه', note: 'الحديث العاشر.', pages: [44], nl: 'Het Paradijs is omgeven met wat onaangenaam is, en het Vuur is omgeven met begeerten', nlNote: 'Hadith 10.' },
  { narrator: 'أنس بن مالك', text: 'ثم انطلق بي جبريل حتى أتى سدرة المنتهى فغشيها ألوان لا أدري ما هي، ثم دخلت الجنة فإذا هي جنابذ اللؤلؤ وإذا ترابها المسك', takhrij: 'رواه البخاري ومسلم', note: 'من حديث الإسراء، دليلًا على أن الجنة مخلوقة الآن.', pages: [45], nl: 'Toen ging Jibrīl met mij verder tot hij bij de Lotusboom van de uiterste grens kwam; die werd bedekt door kleuren waarvan ik niet weet wat ze zijn. Toen ging ik het Paradijs binnen: er waren koepels van parels en de grond was muskus', nlNote: 'Uit de hadith van de nachtreis, als bewijs dat het Paradijs nu al geschapen is.' },
  { narrator: 'عبد الله بن عمر', text: 'إن أحدكم إذا مات عرض عليه مقعده بالغداة والعشي، إن كان من أهل الجنة فمن أهل الجنة، وإن كان من أهل النار فمن أهل النار، يقال: هذا مقعدك حتى يبعثك الله يوم القيامة', takhrij: 'في الصحيحين', note: 'دليل على أن الجنة والنار موجودتان الآن.', pages: [46], nl: 'Als iemand van jullie sterft, wordt hem ’s ochtends en ’s avonds zijn plaats getoond: hoort hij bij de mensen van het Paradijs, dan bij de mensen van het Paradijs; hoort hij bij de mensen van het Vuur, dan bij de mensen van het Vuur. Er wordt gezegd: "Dit is je plaats, totdat Allah je opwekt op de Opstandingsdag."', nlNote: 'Bewijs dat Paradijs en Vuur nu al bestaan.' },
  { narrator: '', text: 'إني رأيت الجنة وتناولت عنقودا، ولو أصبته لأكلتم منه ما بقيت الدنيا، ورأيت النار فلم أر منظرا كاليوم قط أفظع', takhrij: 'في الصحيحين', note: 'من حديث ابن عباس في الكسوف.', pages: [46], nl: 'Ik zag het Paradijs en reikte naar een tros druiven; had ik hem gepakt, dan hadden jullie ervan gegeten zolang de wereld bestaat. En ik zag het Vuur, en ik heb nooit een gruwelijker aanblik gezien dan vandaag', nlNote: 'Uit de hadith van Ibn ʿAbbās over de zonsverduistering.' },
  { narrator: 'عبد الله بن عمرو بن العاص', text: 'قد أفلح من أسلم، ورزق كفافا، وقنعه الله بما آتاه', takhrij: 'رواه مسلم', note: 'الحديث الحادي عشر.', pages: [47], nl: 'Geslaagd is wie de islam aanneemt, voldoende levensonderhoud krijgt en door Allah tevreden gemaakt wordt met wat Hij hem gaf', nlNote: 'Hadith 11.' },
  { narrator: 'معاوية بن أبي سفيان', text: 'من يرد الله به خيرا يفقهه في الدين، وإنما أنا قاسم والله يعطي، ولن تزال هذه الأمة قائمة على أمر الله لا يضرهم من خالفهم حتى يأتي أمر الله', takhrij: 'متفق عليه', note: 'الحديث الثاني عشر.', pages: [50], nl: 'Wie Allah goed wil doen, geeft Hij begrip van de godsdienst. Ik verdeel slechts, en Allah is Degene die geeft. Deze umma blijft staan bij Allahs bevel; wie tegen hen ingaat, schaadt hen niet, totdat Allahs bevel komt', nlNote: 'Hadith 12.' },
  { narrator: 'أبو هريرة', text: 'تسموا باسمي ولا تكتنوا بكنيتي', takhrij: 'متفق عليه', note: 'المقصود النهي عن التكني بكنيته في حياته، والصحيح جوازه بعد موته.', pages: [51], nl: 'Geef jezelf mijn naam, maar niet mijn kunya', nlNote: 'Bedoeld is het verbod om tijdens zijn leven zijn kunya te gebruiken; na zijn dood is het volgens de juiste mening toegestaan.' },
  { narrator: 'علي بن أبي طالب', text: 'قلت: يا رسول الله، إن ولد لي من بعدك ولد أسميه باسمك وأكنيه بكنيتك؟ قال: «نعم»', takhrij: 'أخرجه أحمد وأبو داود والحاكم وصححه', note: 'دليل جواز التكني بأبي القاسم بعد موته ﷺ.', pages: [51], nl: 'Ik zei: "O Boodschapper van Allah, als mij na u een kind geboren wordt, mag ik het dan uw naam en uw kunya geven?" Hij zei: "Ja."', nlNote: 'Bewijs dat de kunya Abū l-Qāsim na zijn dood ﷺ mag.' }
]

const TAKHRIJ_NL = { 'رواه الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde', 'رواه مسلم': 'Muslim', 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)', 'رواه البخاري': 'al-Bukhārī', 'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'في الصحيحين': 'in de twee Ṣaḥīḥ-verzamelingen (al-Bukhārī en Muslim)', 'أخرجه أحمد وأبو داود والحاكم وصححه': 'Aḥmad, Abū Dāwūd en al-Ḥākim, die hem ṣaḥīḥ noemde' }
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'أنس بن مالك': 'Anas ibn Mālik', 'عبد الله بن عمرو بن العاص': 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', 'معاوية بن أبي سفيان': 'Muʿāwiya ibn Abī Sufyān', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib' }

const PERSONS = [
  ['abu-hurayra', 'text', [33, 51], 'راوي الحديث السابع وحديث النهي عن التكني بكنية النبي ﷺ.', 'Overleveraar van hadith 7 en van het verbod om de kunya van de Profeet ﷺ te gebruiken.'],
  ['abu-said-al-khudri', 'text', [37], 'راوي الحديث الثامن؛ من صغار الصحابة وخيارهم، فقيه مفت، شهد الخندق.', 'Overleveraar van hadith 8; een van de jongere en beste metgezellen, rechtsgeleerde en muftī, aanwezig bij al-Khandaq.'],
  ['ibn-umar', 'text', [40, 46], 'راوي الحديث التاسع؛ أفتى ستين سنة، وآخر من توفي بمكة من الصحابة (ت ٧٣هـ).', 'Overleveraar van hadith 9; gaf zestig jaar fatwa’s en was de laatste metgezel die in Mekka stierf (overl. 73 AH).'],
  ['anas-ibn-malik', 'text', [44, 45], 'راوي الحديث العاشر وحديث الإسراء.', 'Overleveraar van hadith 10 en van de hadith over de nachtreis.'],
  ['abdallah-ibn-amr', 'text', [47], 'راوي الحديث الحادي عشر؛ أذن له النبي ﷺ في الكتابة وسمى صحيفته «الصادقة».', 'Overleveraar van hadith 11; de Profeet ﷺ stond hem toe te schrijven en hij noemde zijn verzameling "de Waarachtige".'],
  ['muawiya-ibn-abi-sufyan', 'text', [50], 'راوي الحديث الثاني عشر؛ أحد كتاب الوحي وأول خلفاء بني أمية.', 'Overleveraar van hadith 12; een van de schrijvers van de openbaring en de eerste Umayyadische kalief.'],
  ['ali-ibn-abi-talib', 'text', [51], 'سأل عن تسمية ولده باسم النبي ﷺ وكنيته بعده.', 'Vroeg of hij een kind na de Profeet ﷺ diens naam en kunya mocht geven.'],
  ['abu-bakr-as-siddiq', 'text', [35], 'قال: أطيعوا الله فيما أمركم به من النكاح ينجز لكم ما وعدكم من الغنى.', 'Zei: gehoorzaam Allah in Zijn bevel om te trouwen, dan vervult Hij Zijn belofte van rijkdom.'],
  ['ibn-masud', 'text', [35, 52], 'قال: التمسوا الرزق في النكاح؛ وقال: كيف بكم إذا كثر قراؤكم وقل فقهاؤكم.', 'Zei: zoek levensonderhoud in het huwelijk; en: hoe zal het met jullie gaan als er veel reciteerders zijn en weinig rechtsgeleerden?'],
  ['at-tabari', 'text', [34, 35], 'قال: النكاح سبب لنفي الفقر؛ ونقل عنه الكتاب أثر ابن مسعود.', 'Zei: het huwelijk is een middel tegen armoede; het boek citeert de uitspraak van Ibn Masʿūd via hem.'],
  ['as-sadi', 'text', [34], 'فسر ﴿إن يكونوا فقراء يغنهم الله من فضله﴾ بالحث على التزوج والوعد بالغنى.', 'Legde "als zij arm zijn, maakt Allah hen rijk uit Zijn gunst" uit als aansporing tot trouwen en een belofte van rijkdom.'],
  ['ibn-hajar-al-asqalani', 'text', [44], 'قال: حديث «حفت الجنة بالمكاره» من جوامع الكلم.', 'Zei dat "het Paradijs is omgeven met het onaangename" tot de beknopte, veelomvattende woorden behoort.'],
  ['an-nawawi', 'text', [48], 'قال: الكفاف الكفاية بلا زيادة ولا نقص.', 'Zei: kafāf is genoeg, zonder meer of minder.'],
  ['al-qurtubi', 'text', [48], 'قال: الكفاف ما تكف به الحاجات وتدفع الضرورات.', 'Zei: kafāf is wat de behoeften dekt en de noden afwendt.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'الأحاديث ٧–١٢',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'عون الله للمجاهد والمكاتب والناكح، والتحذير من فتنة الدنيا والنساء، والزهد بأن يكون المرء في الدنيا كالغريب أو عابر السبيل، وأن الجنة حفت بالمكاره والنار بالشهوات، وفلاح من أسلم ورزق كفافًا وقنع، وفضل الفقه في الدين.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'ستة أحاديث، لكل درس حديث.',
    root: { label: 'الأحاديث ٧–١٢', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'ثلاثة حق على الله عونهم', sub: 'الحديث ٧', page: 33, children: ['المجاهد', 'المكاتب', 'الناكح'] },
      { label: 'الدنيا حلوة خضرة', sub: 'الحديث ٨', page: 37, children: ['الاستخلاف', 'فتنة النساء'] },
      { label: 'كأنك غريب', sub: 'الحديث ٩', page: 40, children: ['الزهد', 'اغتنام الصحة والحياة'] },
      { label: 'حفت الجنة بالمكاره', sub: 'الحديث ١٠', page: 44, children: ['المكاره', 'الشهوات', 'الجنة والنار موجودتان'] },
      { label: 'قد أفلح من أسلم', sub: 'الحديث ١١', page: 47, children: ['الكفاف', 'القناعة'] },
      { label: 'يفقهه في الدين', sub: 'الحديث ١٢', page: 50, children: ['فضل العلم', 'الطائفة المنصورة'] }
    ]
  },
  points: [
    { text: 'عون الله لهؤلاء الثلاثة واجب أوجبه على نفسه محض فضل وإحسان، وأصعب الثلاثة العفاف.', page: 33 },
    { text: 'إذا تزوج فقير ولم يستغن فليس لإخلاف الوعد، بل لإخلاله هو بالقصد.', page: 35 },
    { text: 'الدنيا ممر ومزرعة للآخرة، ولا تغر حلاوتها.', page: 38 },
    { text: 'عابر السبيل أكمل زهدًا من الغريب لأنه لا يجلس.', page: 41 },
    { text: 'الجنة لا تنال إلا بالصبر على المكاره، والنار لا ينجي منها إلا فطام النفس عن الشهوات المحرمة.', page: 45 },
    { text: 'الجنة والنار مخلوقتان موجودتان الآن لا تفنيان، خلافًا للمعتزلة والقدرية.', page: 45 },
    { text: 'الكفاف أشرف من الفقر المنسي والغنى المطغي، ولا يعني ترك السعي في طلب الرزق.', page: 48 },
    { text: 'الفقه في الدين علم وعمل، والاشتغال بالعلم أفضل من نوافل العبادات.', page: 52 }
  ],
  terms: [
    { term: 'المكاتب', translit: 'al-mukātab', meaning: 'العبد الذي كاتب سيده على أقساط يدفعها فيصبح حرًّا عند آخر قسط.', explanation: '', notes: [], page: 33 },
    { term: 'حلوة خضرة', translit: 'ḥulwa khaḍira', meaning: 'حلوة في مذاقها، خضرة في مرآها.', explanation: '', notes: [], page: 37 },
    { term: 'مستخلفكم', translit: 'mustakhlifukum', meaning: 'جاعلكم خلفاء من القرون قبلكم.', explanation: '', notes: [], page: 37 },
    { term: 'المنكب', translit: 'al-mankib', meaning: 'مجتمع رأس العضد والكتف.', explanation: '', notes: [], page: 40 },
    { term: 'الغريب', translit: 'al-gharīb', meaning: 'البعيد عن موطنه، لا يتخذ الدار التي هو فيها موطنًا.', explanation: '', notes: [], page: 40 },
    { term: 'عابر سبيل', translit: 'ʿābir sabīl', meaning: 'المار بطريق، وتعلقاته أقل من الغريب.', explanation: '', notes: [], page: 41 },
    { term: 'حفت', translit: 'ḥuffat', meaning: 'من الحفاف: ما يحيط بالشيء حتى لا يتوصل إليه إلا بتخطيه.', explanation: '', notes: [], page: 44 },
    { term: 'المكاره', translit: 'al-makārih', meaning: 'ما يكرهه المرء ويشق عليه من القيام بحقوق العبادة.', explanation: 'كإسباغ الوضوء في الشتاء.', notes: [], page: 44 },
    { term: 'الشهوات', translit: 'ash-shahawāt', meaning: 'الملذات التي منع الشرع منها، أو التي تؤدي إلى ترك الواجبات أو فعل المحرمات.', explanation: '', notes: [], page: 44 },
    { term: 'أفلح', translit: 'aflaḥa', meaning: 'فاز وظفر بما يريد في الدارين.', explanation: '', notes: [], page: 47 },
    { term: 'الكفاف', translit: 'al-kafāf', meaning: 'الكفاية بلا زيادة ولا نقص.', explanation: 'قاله النووي.', notes: [], page: 48 },
    { term: 'الفقه', translit: 'al-fiqh', meaning: 'الفهم؛ أن يرزق فهمًا فيكون عالمًا بالأحكام الشرعية عاملًا بها.', explanation: '', notes: [], page: 50 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الثلاثة الذين حق على الله عونهم',
      intro: 'كما في شرح الحديث السابع.',
      columns: ['من هو', 'عون الله له'],
      rows: [
        { label: 'المجاهد', cells: ['يريد إعلاء كلمة الله، بالسلاح أو بالعلم والحجة', 'ييسر له من سبل الجهاد ما يكون سببًا في نصره'] },
        { label: 'المكاتب', cells: ['يريد أداء ما كاتب عليه', 'يعينه ويرزقه من حيث لا يحتسب'] },
        { label: 'الناكح', cells: ['يريد العفاف', 'يعينه على مؤن النكاح ويغنيه من فضله'] }
      ],
      page: 34
    },
    {
      type: 'compare',
      title: 'الغريب وعابر السبيل',
      intro: 'كما في شرح الحديث التاسع.',
      columns: ['حاله في الدنيا'],
      rows: [
        { label: 'الغريب', cells: ['لم يتخذها سكنًا، يجلس قليلًا ثم يرحل'] },
        { label: 'عابر السبيل', cells: ['لم يستقر فيها أبدًا، فهو أكمل زهدًا'] }
      ],
      page: 41
    },
    {
      type: 'compare',
      title: 'قسما العلم الشرعي',
      intro: 'كما في فوائد الحديث الثاني عشر.',
      columns: ['حكمه', 'أمثلته'],
      rows: [
        { label: 'فرض عين', cells: ['يجب على كل إنسان', 'التوحيد ونواقض الإسلام والبدع والطهارة والصلاة والصوم'] },
        { label: 'فرض كفاية', cells: ['إذا قام به من يكفي سقط عن الباقين', 'الأذان والأمر بالمعروف والنهي عن المنكر'] }
      ],
      page: 52
    }
  ],
  sections: [
    { title: 'صيغة «حق على الله»', text: 'إيذان بأن هذه الثلاث من الأمور الشاقة، ولولا عون الله لشقت، وأصعبها العفاف لأنه قمع شهوة جبلية.', page: 33 },
    { title: 'كلمة جامعة في «غريب»', text: 'الغريب لقلة معرفته بالناس قليل الحسد والعداوة والنزاع، ولقلة إقامته قليل العلائق التي تشغل عن الخالق.', page: 40 },
    { title: '«إذا أمسيت فلا تنتظر الصباح»', text: 'معنيان: لا تؤخر عمل اليوم إلى غد، أو لا تنتظر الصباح فقد تموت قبله.', page: 41 },
    { title: 'المكاره والشهوات (للاطلاع فقط)', text: 'يدخل في المكاره الاجتهاد في العبادة وكظم الغيظ والعفو والصدقة؛ والشهوات المحرمة كالخمر والزنا والغيبة؛ أما المباحة فلا تدخل، لكن يكره الإكثار منها.', more: FYI, page: 44 },
    { title: 'صاحب الكفاف', text: 'أقرب إلى الفقراء لأنه لا يترفه كالأغنياء، ولم يفته من حال الفقراء إلا السلامة من قهر الرجال وذل المسألة.', page: 49 },
    { title: 'التكني بأبي القاسم', text: 'النهي كان في حياته ﷺ خشية الالتباس، والصحيح جوازه بعد موته.', page: 51 },
    { title: 'العالم والمجاهد', text: 'كل منهما في سبيل الله؛ لكن الجهاد وسيلة لنشر الدين، والعلم غاية في ذاته فيبقى مطلوبًا بكل حال.', page: 53 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'من فوائد النكاح', items: ['تحصين الفرج', 'غض البصر', 'تحصيل النسل', 'النفقة على الزوجة والأولاد يحتسبها أجرًا'], page: 34, origin: 'boek' },
    { kind: 'opsomming', title: 'خصال الفلاح الثلاث', items: ['الإسلام', 'الرزق الكفاف', 'القناعة'], page: 48, origin: 'boek' },
    { kind: 'onderscheid', title: 'لماذا العلم أفضل من النوافل', items: ['نفع العلم يعم صاحبه والمسلمين، والنوافل نفعها قاصر.', 'العلم تبقى فائدته بعد صاحبه، والنوافل تنقطع بموته.'], page: 52, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'يعين الله المجاهد والمكاتب والناكح الذي يريد العفاف.',
    'الدنيا حلوة خضرة، فاتقوها واتقوا فتنة النساء.',
    'كن في الدنيا كأنك غريب أو عابر سبيل.',
    'الجنة محفوفة بالمكاره، والنار بالشهوات.',
    'الفلاح في الإسلام والكفاف والقناعة، والخير في الفقه في الدين.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من «المكاتب»؟', options: ['العبد الذي كاتب سيده على أقساط ليصبح حرًّا', 'كاتب الوحي', 'من يكتب الديون', 'طالب العلم'], answer: 0, explain: 'كما في المفردات.', page: 33 },
    { type: 'tf', q: 'إذا تزوج فقير ولم يستغن فقد أخلف الله وعده.', options: ['صواب', 'خطأ'], answer: 1, explain: 'بل لإخلاله هو بالقصد.', page: 35 },
    { type: 'mc', q: 'لماذا كان عابر السبيل أكمل زهدًا من الغريب؟', options: ['لأنه لا يجلس ولا يستقر', 'لأنه أفقر', 'لأنه أكثر علمًا', 'لأنه يعرف الناس'], answer: 0, explain: 'الغريب يجلس قليلًا ثم يرحل.', page: 41 },
    { type: 'mc', q: 'هل الشهوات المباحة داخلة في «حفت النار بالشهوات»؟', options: ['لا، لكن يكره الإكثار منها', 'نعم كلها', 'نعم إذا كانت طعامًا', 'لا يجوز تعاطيها أصلًا'], answer: 0, explain: 'مخافة أن تشغل عن الطاعات أو تجر إلى المحرمات.', page: 44 },
    { type: 'tf', q: 'معنى الحديث الحادي عشر أن يقعد المرء في بيته ولا يطلب الرزق.', options: ['صواب', 'خطأ'], answer: 1, explain: 'بل يسعى مع القناعة والرضا.', page: 49 },
    { type: 'mc', q: 'ما حكم التكني بأبي القاسم بعد موت النبي ﷺ؟', options: ['جائز على الصحيح', 'محرم مطلقًا', 'مكروه', 'واجب'], answer: 0, explain: 'كما في حديث علي.', page: 51 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٣٦ و٣٩ و٤٣ و٤٦ و٤٩ و٥٣. الشرح الإجمالي للأحاديث في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Hadith 7–12',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Allahs hulp voor wie strijdt, de slaaf die zich vrijkoopt en wie trouwt; de waarschuwing voor de beproeving van deze wereld en van vrouwen; onthechting: in deze wereld zijn als een vreemdeling of reiziger; het Paradijs omgeven met het onaangename en het Vuur met begeerten; het succes van wie de islam aanneemt, genoeg heeft en tevreden is; en de waarde van begrip van de godsdienst.',
  source: { ...source, label: 'Kitāb al-Ḥadīth (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'Zes hadith, één per les.',
    root: { label: 'Hadith 7–12', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Drie die Allah helpt', sub: 'hadith 7', page: 33, children: ['de strijder', 'de vrijkopende slaaf', 'wie trouwt'] },
      { label: 'Deze wereld is zoet en groen', sub: 'hadith 8', page: 37, children: ['opvolgerschap', 'de beproeving van vrouwen'] },
      { label: 'Als een vreemdeling', sub: 'hadith 9', page: 40, children: ['onthechting', 'gezondheid en leven benutten'] },
      { label: 'Het Paradijs omgeven met het onaangename', sub: 'hadith 10', page: 44, children: ['het onaangename', 'begeerten', 'Paradijs en Vuur bestaan al'] },
      { label: 'Geslaagd is wie...', sub: 'hadith 11', page: 47, children: ['genoeg hebben', 'tevredenheid'] },
      { label: 'Begrip van de godsdienst', sub: 'hadith 12', page: 50, children: ['de waarde van kennis', 'de gesteunde groep'] }
    ]
  },
  points: [
    { text: 'Allah heeft het Zichzelf uit pure gunst verplicht deze drie te helpen; het moeilijkste van de drie is kuisheid.', page: 33 },
    { text: 'Als een arme trouwt en niet rijk wordt, ligt dat niet aan Allahs belofte maar aan een gebrek in zijn eigen intentie.', page: 35 },
    { text: 'Deze wereld is een doorgang en een akker voor het hiernamaals; laat je niet misleiden door haar zoetheid.', page: 38 },
    { text: 'De reiziger is vollediger onthecht dan de vreemdeling, omdat hij niet blijft zitten.', page: 41 },
    { text: 'Het Paradijs bereik je alleen door het onaangename te verdragen; van het Vuur red je je alleen door de ziel af te houden van verboden begeerten.', page: 45 },
    { text: 'Paradijs en Vuur zijn geschapen, bestaan nu al en vergaan nooit, anders dan de Muʿtazila en Qadariyya zeggen.', page: 45 },
    { text: 'Genoeg hebben is edeler dan armoede die doet vergeten en rijkdom die doet overmoedig worden; het betekent niet dat je ophoudt met werken.', page: 48 },
    { text: 'Begrip van de godsdienst is kennis én handelen; je met kennis bezighouden is beter dan vrijwillige aanbidding.', page: 52 }
  ],
  terms: [
    { term: 'المكاتب', translit: 'al-mukātab', meaning: 'Een slaaf die met zijn meester afsprak zich in termijnen vrij te kopen; bij de laatste termijn is hij vrij.', explanation: '', notes: [], page: 33 },
    { term: 'حلوة خضرة', translit: 'ḥulwa khaḍira', meaning: 'Zoet van smaak en groen om te zien.', explanation: '', notes: [], page: 37 },
    { term: 'مستخلفكم', translit: 'mustakhlifukum', meaning: 'Hij maakt jullie opvolgers van de generaties vóór jullie.', explanation: '', notes: [], page: 37 },
    { term: 'المنكب', translit: 'al-mankib', meaning: 'De schouder: waar bovenarm en schouder samenkomen.', explanation: '', notes: [], page: 40 },
    { term: 'الغريب', translit: 'al-gharīb', meaning: 'Iemand ver van huis, die zijn verblijfplaats niet als thuis beschouwt.', explanation: '', notes: [], page: 40 },
    { term: 'عابر سبيل', translit: 'ʿābir sabīl', meaning: 'Een reiziger op doortocht, met nog minder bindingen dan de vreemdeling.', explanation: '', notes: [], page: 41 },
    { term: 'حفت', translit: 'ḥuffat', meaning: 'Omgeven, zodat je er alleen komt door eroverheen te stappen.', explanation: '', notes: [], page: 44 },
    { term: 'المكاره', translit: 'al-makārih', meaning: 'Wat iemand onaangenaam en zwaar vindt bij het goed vervullen van de aanbidding.', explanation: 'Zoals de wassing goed verrichten in de winter.', notes: [], page: 44 },
    { term: 'الشهوات', translit: 'ash-shahawāt', meaning: 'Genietingen die de sharīʿa verbiedt, of die leiden tot het nalaten van plichten of het doen van verboden.', explanation: '', notes: [], page: 44 },
    { term: 'أفلح', translit: 'aflaḥa', meaning: 'Hij slaagde en bereikte wat hij wilde in beide werelden.', explanation: '', notes: [], page: 47 },
    { term: 'الكفاف', translit: 'al-kafāf', meaning: 'Genoeg, zonder meer of minder.', explanation: 'Volgens an-Nawawī.', notes: [], page: 48 },
    { term: 'الفقه', translit: 'al-fiqh', meaning: 'Begrip: inzicht krijgen, zodat je de religieuze regels kent en ernaar handelt.', explanation: '', notes: [], page: 50 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De drie die Allah zeker helpt',
      intro: 'Zoals in de uitleg bij hadith 7.',
      columns: ['Wie', 'Allahs hulp'],
      rows: [
        { label: 'De strijder', cells: ['wil Allahs woord verheffen, met wapens of met kennis en argumenten', 'Hij maakt wegen van strijd makkelijk die tot overwinning leiden'] },
        { label: 'De vrijkopende slaaf', cells: ['wil zijn afspraak nakomen', 'Hij helpt hem en voorziet hem van waar hij het niet verwacht'] },
        { label: 'Wie trouwt', cells: ['wil kuis blijven', 'Hij helpt met de kosten en maakt hem rijk uit Zijn gunst'] }
      ],
      page: 34
    },
    {
      type: 'compare',
      title: 'De vreemdeling en de reiziger',
      intro: 'Zoals in de uitleg bij hadith 9.',
      columns: ['Zijn houding in deze wereld'],
      rows: [
        { label: 'Vreemdeling', cells: ['maakt er geen thuis van, blijft even en vertrekt'] },
        { label: 'Reiziger', cells: ['blijft er nooit; daarom vollediger onthecht'] }
      ],
      page: 41
    },
    {
      type: 'compare',
      title: 'Twee soorten religieuze kennis',
      intro: 'Zoals in de lessen uit hadith 12.',
      columns: ['Oordeel', 'Voorbeelden'],
      rows: [
        { label: 'Individuele plicht', cells: ['verplicht voor ieder mens', 'tawḥīd, wat de islam tenietdoet, vernieuwingen, reinheid, gebed, vasten'] },
        { label: 'Gemeenschapsplicht', cells: ['vervalt voor de rest als genoeg mensen het doen', 'de adhān, het goede gebieden en het slechte verbieden'] }
      ],
      page: 52
    }
  ],
  sections: [
    { title: 'De formulering "Allah zal zeker helpen"', text: 'Een aanwijzing dat deze drie zaken zwaar zijn en zonder Allahs hulp te moeilijk zouden zijn; het moeilijkste is kuisheid, omdat die een aangeboren begeerte bedwingt.', page: 33 },
    { title: 'Een veelomvattend woord: "vreemdeling"', text: 'Een vreemdeling kent weinig mensen en heeft dus weinig afgunst, vijandschap en twist; hij blijft kort en heeft dus weinig bindingen die van de Schepper afleiden.', page: 40 },
    { title: '"Als je de avond haalt, wacht dan niet op de ochtend"', text: 'Twee betekenissen: stel het werk van vandaag niet uit tot morgen, of wacht niet op de ochtend, want je kunt ervoor sterven.', page: 41 },
    { title: 'Het onaangename en de begeerten (alleen ter kennisname)', text: 'Bij het onaangename horen inzet in aanbidding, woede inhouden, vergeven en liefdadigheid; verboden begeerten zijn onder meer alcohol, zinā en kwaadspreken; toegestane begeerten vallen er niet onder, maar te veel ervan is afgeraden.', more: FYI_NL, page: 44 },
    { title: 'Wie genoeg heeft', text: 'Hij staat dichter bij de armen omdat hij niet in weelde leeft zoals de rijken, en mist van de armen alleen de vernedering door mensen en het moeten vragen.', page: 49 },
    { title: 'De kunya Abū l-Qāsim', text: 'Het verbod gold tijdens zijn leven ﷺ, om verwarring te voorkomen; na zijn dood is het volgens de juiste mening toegestaan.', page: 51 },
    { title: 'De geleerde en de strijder', text: 'Beiden zijn op de weg van Allah; maar strijd is een middel om de godsdienst te verspreiden, terwijl kennis een doel op zich is en altijd gevraagd blijft.', page: 53 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Voordelen van het huwelijk', items: ['bescherming van de kuisheid', 'de blik neerslaan', 'nakomelingen', 'uitgaven aan vrouw en kinderen met de hoop op beloning'], page: 34, origin: 'boek' },
    { kind: 'opsomming', title: 'De drie kenmerken van succes', items: ['de islam', 'genoeg levensonderhoud', 'tevredenheid'], page: 48, origin: 'boek' },
    { kind: 'onderscheid', title: 'Waarom kennis beter is dan vrijwillige aanbidding', items: ['kennis is nuttig voor de kenner en voor de moslims; vrijwillige aanbidding alleen voor de verrichter', 'kennis blijft na de dood nuttig; vrijwillige aanbidding houdt op'], page: 52, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Allah helpt de strijder, de vrijkopende slaaf en wie trouwt om kuis te blijven.',
    'Deze wereld is zoet en groen; wees op je hoede voor haar en voor de beproeving van vrouwen.',
    'Wees in deze wereld als een vreemdeling of een reiziger.',
    'Het Paradijs is omgeven met het onaangename, het Vuur met begeerten.',
    'Succes ligt in islam, genoeg hebben en tevredenheid; het goede in begrip van de godsdienst.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie is de mukātab?', options: ['een slaaf die zich in termijnen vrijkoopt', 'een schrijver van de openbaring', 'iemand die schulden opschrijft', 'een student'], answer: 0, explain: 'Zoals in de woordenlijst.', page: 33 },
    { type: 'tf', q: 'Als een arme trouwt en niet rijk wordt, heeft Allah Zijn belofte gebroken.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het ligt aan een gebrek in zijn eigen intentie.', page: 35 },
    { type: 'mc', q: 'Waarom is de reiziger vollediger onthecht dan de vreemdeling?', options: ['omdat hij niet blijft zitten', 'omdat hij armer is', 'omdat hij meer weet', 'omdat hij de mensen kent'], answer: 0, explain: 'De vreemdeling blijft even en vertrekt dan.', page: 41 },
    { type: 'mc', q: 'Vallen toegestane begeerten onder "het Vuur is omgeven met begeerten"?', options: ['nee, maar te veel ervan is afgeraden', 'ja, allemaal', 'ja, als het om eten gaat', 'ze zijn helemaal verboden'], answer: 0, explain: 'Uit vrees dat ze afleiden van gehoorzaamheid of naar verboden leiden.', page: 44 },
    { type: 'tf', q: 'Hadith 11 betekent dat je thuis blijft en geen levensonderhoud zoekt.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Je zoekt en werkt, met tevredenheid.', page: 49 },
    { type: 'mc', q: 'Mag men na de dood van de Profeet ﷺ de kunya Abū l-Qāsim gebruiken?', options: ['ja, volgens de juiste mening', 'nee, nooit', 'het is afgeraden', 'het is verplicht'], answer: 0, explain: 'Zoals in de hadith van ʿAlī.', page: 51 }
  ]),
  note: 'Oefeningen van het boek op p. 36, 39, 43, 46, 49 en 53. De algemene uitleg bij de hadith staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-hadith', chapter: '7', unit: 2, ar, nl }
