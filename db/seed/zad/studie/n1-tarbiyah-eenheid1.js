// Hoofdstukkaart bij التربية الإسلامية (١) الحقوق, eenheid 1: حق الله وحق النبي ﷺ (lessen 1–4, boek p. 9–21).
// Het boek heeft zelf geen eenheden; deze indeling in zes thema's is van de samenvatter.
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 13 is in het boek "alleen ter kennisname".
// Het oordeel over het vieren van de geboortedag (p. 18) staat erin zoals het boek het geeft.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (١) الحقوق، سلسلة زاد العلمية',
  pages: '9–21',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'معاذ بن جبل', text: 'يا معاذ أتدري ما حق الله على العباد وما حق العباد على الله؟ ... فإن حق الله على العباد أن يعبدوه ولا يشركوا به شيئًا، وحق العباد على الله ألا يعذب من لا يشرك به شيئًا', takhrij: 'في الصحيحين', note: 'قال: أفلا أبشر الناس؟ قال: «لا تبشرهم فيتكلوا».', pages: [9, 10], nl: 'Muʿādh, weet je wat het recht van Allah op de dienaren is en wat het recht van de dienaren op Allah is? ... Het recht van Allah op de dienaren is dat zij Hem aanbidden en niets met Hem gelijkstellen, en het recht van de dienaren op Allah is dat Hij wie niets met Hem gelijkstelt niet bestraft', nlNote: 'Hij vroeg: "Zal ik het de mensen niet als goed nieuws vertellen?" Hij zei: "Nee, anders gaan zij erop leunen."' },
  { narrator: 'أبو موسى الأشعري', text: 'إن من إجلال الله إكرام ذي الشيبة المسلم، وحامل القرآن غير الغالي فيه والجافي عنه، وإكرام ذي السلطان المقسط', takhrij: 'أخرجه أبو داود وحسنه الألباني', note: 'من صور تعظيم الله: إكرام أهل طاعته.', pages: [11], nl: 'Tot het eren van Allah behoort het eren van de grijze moslim, van de drager van de Koran die er niet in overdrijft en er zich niet van afkeert, en het eren van de rechtvaardige machthebber', nlNote: 'Een vorm van Allah eren: wie Hem gehoorzaamt eren.' },
  { narrator: '', text: 'ثلاث من كن فيه وجد حلاوة الإيمان: أن يكون الله ورسوله أحب إليه مما سواهما ...', takhrij: 'رواه البخاري ومسلم', note: 'في محبة الله.', pages: [12], nl: 'Wie drie dingen heeft, vindt de zoetheid van het geloof: dat Allah en Zijn Boodschapper hem dierbaarder zijn dan al het andere ...', nlNote: 'Over de liefde voor Allah.' },
  { narrator: '', text: 'والخير كله في يديك والشر ليس إليك', takhrij: 'أخرجه مسلم', note: 'في عدم نسبة الشر إلى الله.', pages: [12], nl: 'Al het goede is in Uw handen, en het kwade wordt niet aan U toegeschreven', nlNote: 'Het kwade niet aan Allah toeschrijven.' },
  { narrator: 'جابر بن عبد الله', text: 'لا يموتن أحدكم إلا وهو يحسن الظن بالله', takhrij: 'أخرجه مسلم', note: '', pages: [12], nl: 'Laat niemand van jullie sterven zonder een goede verwachting van Allah te hebben', nlNote: '' },
  { narrator: 'عروة بن مسعود الثقفي', text: 'أي قوم، والله لقد وفدت على الملوك، ووفدت على قيصر وكسرى والنجاشي، والله إن رأيت ملكًا قط يعظمه أصحابه ما يعظم أصحاب محمد محمدًا', takhrij: 'أخرجه البخاري', note: 'قاله وكان كافرًا وقتئذ.', pages: [14], nl: 'Mijn volk, bij Allah, ik ben bij koningen op bezoek geweest, bij Caesar, Khosrau en de Negus; bij Allah, nooit zag ik een koning die door zijn metgezellen zo geëerd werd als de metgezellen van Muḥammad Muḥammad eren', nlNote: 'Hij zei dit toen hij nog geen moslim was.' },
  { narrator: '', text: 'وإنه سيكون في أمتي كذابون ثلاثون، كلهم يزعم أنه نبي، وأنا خاتم النبيين لا نبي بعدي', takhrij: 'رواه أبو داود وابن ماجه وصححه الألباني', note: '', pages: [14], nl: 'In mijn gemeenschap zullen dertig leugenaars komen die allemaal beweren profeet te zijn, terwijl ik het zegel der profeten ben: na mij is er geen profeet', nlNote: '' },
  { narrator: '', text: 'وأنتم تسألون عني فما أنتم قائلون؟ قالوا: نشهد أنك قد بلغت وأديت ونصحت، فقال بإصبعه السبابة يرفعها إلى السماء وينكتها إلى الناس: اللهم اشهد، اللهم اشهد، ثلاث مرات', takhrij: 'أخرجه مسلم', note: 'في أنه ﷺ بلغ الرسالة تامة.', pages: [15], nl: 'Jullie zullen over mij ondervraagd worden; wat zullen jullie dan zeggen? Zij zeiden: wij getuigen dat je het hebt overgebracht, vervuld en oprecht geraden. Hij hief zijn wijsvinger naar de hemel, wees ermee naar de mensen en zei drie keer: O Allah, wees getuige', nlNote: 'Hij ﷺ heeft de boodschap volledig overgebracht.' },
  { narrator: 'جابر بن عبد الله', text: 'إنه ليس شيء بين السماء والأرض إلا يعلم أني رسول الله إلا عاصي الجن والإنس', takhrij: 'أخرجه أحمد في المسند بسند حسن', note: '', pages: [16], nl: 'Er is niets tussen hemel en aarde dat niet weet dat ik de Boodschapper van Allah ben, behalve de ongehoorzamen onder de djinn en de mensen', nlNote: '' },
  { narrator: 'جابر بن عبد الله', text: 'وكان النبي يبعث إلى قومه خاصة، وبعثت إلى الناس عامة', takhrij: 'في الصحيحين', note: 'في عموم رسالته.', pages: [16], nl: 'Een profeet werd alleen naar zijn eigen volk gezonden, en ik ben naar alle mensen gezonden', nlNote: 'Zijn boodschap is voor iedereen.' },
  { narrator: 'أنس بن مالك', text: 'يا أيها الناس، قولوا بقولكم ولا يستهوينكم الشيطان، أنا محمد بن عبد الله، عبد الله ورسوله، والله ما أحب أن ترفعوني فوق منزلتي التي أنزلني الله', takhrij: 'أخرجه أحمد والنسائي في الكبرى وصححه الألباني', note: 'لما قال له رجل: يا محمد يا سيدنا وابن سيدنا وخيرنا وابن خيرنا.', pages: [16], nl: 'Mensen, zeg wat jullie gewoonlijk zeggen en laat de duivel jullie niet meeslepen. Ik ben Muḥammad ibn ʿAbdallāh, de dienaar van Allah en Zijn Boodschapper; bij Allah, ik wil niet dat jullie mij verheffen boven de plaats die Allah mij gaf', nlNote: 'Toen iemand hem aansprak met "onze heer, zoon van onze heer, de beste van ons en zoon van de beste van ons".' },
  { narrator: '', text: 'لا تطروني كما أطرت النصارى ابن مريم، فإنما أنا عبده، فقولوا: عبد الله ورسوله', takhrij: 'أخرجه البخاري', note: 'الإطراء: الإفراط في المدح.', pages: [16], nl: 'Prijs mij niet overdreven zoals de christenen de zoon van Maryam prezen; ik ben slechts Zijn dienaar, zeg dus: de dienaar van Allah en Zijn Boodschapper', nlNote: 'Iṭrāʾ is overdreven lof.' },
  { narrator: '', text: 'خلقت الملائكة من نور', takhrij: 'أخرجه مسلم', note: 'في الرد على من زعم أن النبي ﷺ خلق من نور.', pages: [17], nl: 'De engelen zijn geschapen uit licht', nlNote: 'Als weerlegging van wie beweert dat de Profeet ﷺ uit licht geschapen is.' },
  { narrator: '', text: 'من كان حالفًا فليحلف بالله أو ليصمت', takhrij: 'رواه البخاري ومسلم', note: 'الحلف بالنبي ﷺ محرم.', pages: [18], nl: 'Wie zweert, laat hij bij Allah zweren of zwijgen', nlNote: 'Zweren bij de Profeet ﷺ is verboden.' },
  { narrator: '', text: 'لا يؤمن عبد حتى أكون أحب إليه من أهله وماله والناس أجمعين', takhrij: 'أخرجه مسلم', note: '', pages: [18], nl: 'Een dienaar gelooft niet echt totdat ik hem dierbaarder ben dan zijn familie, zijn bezit en alle mensen', nlNote: '' },
  { narrator: '', text: 'من كذب علي متعمدًا فليتبوأ مقعده من النار', takhrij: 'رواه البخاري ومسلم', note: '', pages: [19], nl: 'Wie opzettelijk over mij liegt, laat hij zijn plaats in het Vuur innemen', nlNote: '' },
  { narrator: '', text: 'أذكركم الله في أهل بيتي', takhrij: 'أخرجه مسلم', note: 'في محبة آل بيته دون غلو.', pages: [19], nl: 'Ik herinner jullie aan Allah wat mijn familie betreft', nlNote: 'Zijn familie liefhebben zonder overdrijving.' },
  { narrator: '', text: 'لا تسبوا أصحابي، لا تسبوا أصحابي، فوالذي نفسي بيده لو أن أحدكم أنفق مثل أحد ذهبًا ما أدرك مد أحدهم ولا نصيفه', takhrij: 'رواه البخاري ومسلم واللفظ له', note: '', pages: [19], nl: 'Beledig mijn metgezellen niet, beledig mijn metgezellen niet; bij Hem in Wiens hand mijn ziel is, als een van jullie goud zo groot als de berg Uḥud zou uitgeven, zou hij nog niet de handvol van een van hen bereiken, noch de helft daarvan', nlNote: '' }
]

const TAKHRIJ_NL = {
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s (al-Bukhārī en Muslim)', 'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'رواه البخاري ومسلم واللفظ له': 'al-Bukhārī en Muslim; de bewoording van Muslim',
  'أخرجه مسلم': 'Muslim', 'أخرجه البخاري': 'al-Bukhārī',
  'أخرجه أبو داود وحسنه الألباني': 'Abū Dāwūd; goed (ḥasan) volgens al-Albānī',
  'رواه أبو داود وابن ماجه وصححه الألباني': 'Abū Dāwūd en Ibn Māja; authentiek volgens al-Albānī',
  'أخرجه أحمد في المسند بسند حسن': 'Aḥmad in al-Musnad, met een goede keten',
  'أخرجه أحمد والنسائي في الكبرى وصححه الألباني': 'Aḥmad en an-Nasāʾī in as-Sunan al-Kubrā; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'معاذ بن جبل': 'Muʿādh ibn Jabal', 'أبو موسى الأشعري': 'Abū Mūsā al-Ashʿarī', 'جابر بن عبد الله': 'Jābir ibn ʿAbdallāh',
  'عروة بن مسعود الثقفي': 'ʿUrwa ibn Masʿūd ath-Thaqafī', 'أنس بن مالك': 'Anas ibn Mālik'
}

const PERSONS = [
  ['muadh-ibn-jabal', 'text', [9], 'كان رديف النبي ﷺ فسأله عن حق الله على العباد.', 'Zat achter de Profeet ﷺ op een ezel toen die hem vroeg naar het recht van Allah op de dienaren.'],
  ['ibn-kathir', 'text', [9], 'نقل الكتاب خلاصة كلامه في استحقاق الله العبادة وحده.', 'Het boek vat zijn uitleg samen dat alleen Allah aanbidding verdient.'],
  ['ibn-taymiyya', 'text', [9], 'عرف العبادة بأنها اسم جامع لكل ما يحبه الله ويرضاه.', 'Definieerde aanbidding als alles wat Allah liefheeft en waarmee Hij tevreden is.'],
  ['abu-musa-al-ashari', 'text', [11], 'روى حديث «إن من إجلال الله».', 'Overleverde de hadith "Tot het eren van Allah behoort".'],
  ['ibn-al-qayyim', 'text', [12], 'قال: محبة العبودية أشرف أنواع المحبة، ومن حق الله الرضا به ربًا.', 'Zei dat de liefde van aanbidding de edelste liefde is, en dat tevreden zijn met Allah als Heer tot Zijn recht behoort.'],
  ['an-nawawi', 'text', [12], 'قال: كل من ارتكب معصية لزمه المبادرة إلى التوبة.', 'Zei dat wie een zonde begaat zich meteen moet bekeren.'],
  ['jabir-ibn-abdallah', 'text', [12, 16], 'روى حديث حسن الظن بالله وعموم الرسالة.', 'Overleverde de hadith over een goede verwachting van Allah en over de boodschap voor iedereen.'],
  ['urwa-ibn-masud', 'text', [14], 'وصف تعظيم الصحابة للنبي ﷺ وكان كافرًا وقتئذ.', 'Beschreef hoe de metgezellen de Profeet ﷺ eerden, toen hij nog geen moslim was.'],
  ['anas-ibn-malik', 'text', [16], 'روى نهي النبي ﷺ أن يرفعوه فوق منزلته.', 'Overleverde dat de Profeet ﷺ verbood hem boven zijn plaats te verheffen.'],
  ['ibn-uthaymin', 'text', [17], 'قال: من قال إن الرسول ليس له ظل فكله كذب باطل.', 'Zei dat de bewering dat de Profeet geen schaduw had een leugen is.'],
  ['al-bukhari', 'takhrij', [12, 14, 16, 18, 19], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [12, 15, 17, 18, 19], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [11, 14], 'أخرج حديثي الإجلال وخاتم النبيين.', 'Nam de hadith over het eren en over het zegel der profeten op.'],
  ['ibn-maja', 'takhrij', [14], 'أخرج حديث خاتم النبيين.', 'Nam de hadith over het zegel der profeten op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [16], 'أخرج في المسند حديثين في الوحدة.', 'Nam in al-Musnad twee hadith van deze eenheid op.'],
  ['an-nasai', 'takhrij', [16], 'أخرج حديث «قولوا بقولكم» في الكبرى.', 'Nam de hadith "Zeg wat jullie gewoonlijk zeggen" op in as-Sunan al-Kubrā.'],
  ['al-albani', 'takhrij', [11, 14, 16], 'صحح أحاديث في الوحدة وحسنها.', 'Beoordeelde hadith in deze eenheid als authentiek of goed.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'حق الله وحق النبي ﷺ',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'حق الله على العباد أن يعبدوه وحده، ومن حقوقه الإيمان به وبأسمائه وصفاته وتعظيمه والحياء منه ومحبته؛ ثم حقوق النبي ﷺ من الإيمان به وبختمه للنبوة وعصمته، وعدم الغلو فيه، ومحبته واتباعه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعات الدروس الأربعة كما في الكتاب.',
    root: { label: 'حق الله وحق النبي ﷺ', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'حق الله على العباد', sub: 'الدرس ١', page: 9, children: ['العبادة', 'الإيمان بالأسماء والصفات', 'التعظيم'] },
      { label: 'من حقوق الله', sub: 'الدرس ٢', page: 11, children: ['الحياء منه', 'المحبة', 'التوبة', 'حسن الظن'] },
      { label: 'حق النبي ﷺ', sub: 'الدرس ٣', page: 14, children: ['الإيمان بنبوته', 'ختم النبوة', 'العصمة', 'عدم الغلو'] },
      { label: 'الغلو وبقية الحقوق', sub: 'الدرس ٤', page: 18, children: ['صور الغلو في وصفه', 'المحبة والاتباع', 'آل بيته وأصحابه'] }
    ]
  },
  points: [
    { text: 'معرفة حقوق الله أوجب الواجبات، وحقه مقدم على حق غيره.', page: 9 },
    { text: 'حق الله على عباده ينحصر في عبادته وحده لا شريك له.', page: 9 },
    { text: 'من حقوق الله الإيمان بأسمائه وصفاته كما وردت وكما فهمها السلف، مع الإيمان بأنه ليس كمثله شيء.', page: 10 },
    { text: 'من تعظيم الله تعظيم حرماته وشعائره وإكرام أهل طاعته.', page: 11 },
    { text: 'من حقوق الله محبته وذكره وشكره والرضا به ربًا والتوبة وإحسان الظن به.', page: 12 },
    { text: 'حقوق النبي ﷺ قائمة على الإيمان به وتعظيمه ونصرته واتباعه.', page: 14 },
    { text: 'هو خاتم الأنبياء، وشريعته ناسخة لكل الشرائع، ورسالته عامة للجن والإنس.', page: 15 },
    { text: 'من أعظم حقوقه ألا يغلى فيه، وأن يحب أكثر من الوالد والولد، وأن يتبع ولا يبتدع في دينه.', page: 18 }
  ],
  terms: [
    { term: 'العبادة', translit: 'al-ʿibāda', meaning: 'في الأصل: الخضوع والتذلل.', explanation: 'قال ابن تيمية: اسم جامع لكل ما يحبه الله ويرضاه من الأقوال والأعمال الباطنة والظاهرة.', notes: [], page: 9 },
    { term: 'الوقار', translit: 'al-waqār', meaning: 'العظمة.', explanation: '﴿ما لكم لا ترجون لله وقارًا﴾ أي لا تخافون لله عظمة.', notes: [], page: 10 },
    { term: 'الحرمات', translit: 'al-ḥurumāt', meaning: 'معاصي الله.', explanation: 'وتعظيمها باجتنابها.', notes: [], page: 11 },
    { term: 'الشعائر', translit: 'ash-shaʿāʾir', meaning: 'أوامر الله.', explanation: 'وتعظيمها من تقوى القلوب.', notes: [], page: 11 },
    { term: 'خاتم النبيين', translit: 'khātam an-nabiyyīn', meaning: 'آخر الأنبياء، لا نبي بعده.', explanation: 'من ادعى النبوة بعده فهو كافر كاذب.', notes: [], page: 14 },
    { term: 'العصمة', translit: 'al-ʿiṣma', meaning: 'حفظه ﷺ في دعوى الرسالة وتبليغها، ومن الكفر والشرك والفواحش.', explanation: '', notes: [], page: 15 },
    { term: 'الإطراء', translit: 'al-iṭrāʾ', meaning: 'الإفراط في المدح.', explanation: 'نهى عنه النبي ﷺ.', notes: [], page: 16 },
    { term: 'التعزير', translit: 'at-taʿzīr', meaning: 'التعظيم والتوقير.', explanation: '﴿وعزروه﴾: عظموه ووقروه.', notes: [], page: 18 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'حقوق الله كما في الكتاب',
      intro: 'من الدرسين الأول والثاني.',
      nodes: [
        { label: 'الإيمان به', page: 10 },
        { label: 'عبادته وحده', page: 10 },
        { label: 'الإيمان بأسمائه وصفاته', page: 10 },
        { label: 'تعظيمه وتوقيره', page: 10 },
        { label: 'الحياء منه وخشيته', page: 11 },
        { label: 'الخضوع لحكمه وحكم رسوله', page: 11 },
        { label: 'محبته', page: 12 },
        { label: 'ذكره وشكره', page: 12 },
        { label: 'الرضا به ربًا', page: 12 },
        { label: 'عدم نسبة الشر إليه', page: 12 },
        { label: 'الاستغفار والتوبة', page: 12 },
        { label: 'إحسان الظن به', page: 12 }
      ]
    },
    {
      type: 'compare',
      title: 'الغلو في النبي ﷺ',
      intro: 'صوره في ذاته وفي وصفه كما في الكتاب.',
      columns: ['أمثلته'],
      rows: [
        { label: 'في ذاته', cells: ['اعتقاد أنه ليس من البشر، أو أنه أول خلق الله، أو أنه خلق من نور، أو أنه لا ظل له'] },
        { label: 'في وصفه', cells: ['ادعاء علمه الغيب، أو نفعه وضره بعد موته، والحلف به، والاحتفال بمولده، وادعاء حياته في قبره كحياته قبل موته'] }
      ],
      page: 17
    },
    {
      type: 'cards',
      title: 'من حقوق النبي ﷺ',
      intro: 'كما عددها الكتاب في الدرسين الثالث والرابع.',
      nodes: [
        { label: 'الإيمان بنبوته', page: 14 },
        { label: 'أنه خاتم الأنبياء', page: 14 },
        { label: 'الإيمان بعصمته', page: 15 },
        { label: 'أن شريعته ناسخة', page: 15 },
        { label: 'أنه بلغ الرسالة كاملة', page: 15 },
        { label: 'عموم رسالته', page: 16 },
        { label: 'عدم الغلو فيه', page: 16 },
        { label: 'محبته', page: 18 },
        { label: 'تعظيمه وتوقيره', page: 18 },
        { label: 'اتباعه وعدم الابتداع', page: 19 },
        { label: 'الحذر من الكذب عليه', page: 19 },
        { label: 'محبة آل بيته', page: 19 },
        { label: 'إكرام أصحابه', page: 19 },
        { label: 'التحاكم لسنته', page: 20 }
      ]
    }
  ],
  sections: [
    { title: 'لماذا يستحق الله العبادة وحده', text: 'قال ابن كثير ما خلاصته: لأنه المنعم على عبيده بإخراجهم من العدم إلى الوجود وإسباغه عليهم النعم الظاهرة والباطنة، فبهذا يستحق أن يعبد وحده.', more: '', page: 9 },
    { title: 'محبة العبودية', text: 'قال ابن القيم: فمحبة العبودية هي أشرف أنواع المحبة، وهي خالص حق الله على عباده.', more: '', page: 12 },
    { title: 'من فوائد معرفة حقوق الله (للاطلاع فقط)', text: 'تخلص من العجب والكبر، وتورث الذل والخضوع والانكسار، وتعلق القلب بالله ورجاء رحمته، والحياء منه للتقصير؛ ومن قام بحقوق الله أغناه عن خلقه.', more: FYI, page: 13 },
    { title: 'تعظيم الصحابة للنبي ﷺ', text: 'شهد بذلك عروة بن مسعود الثقفي وكان كافرًا وقتئذ، فقال: ما رأيت ملكًا قط يعظمه أصحابه ما يعظم أصحاب محمد محمدًا.', more: '', page: 14 },
    { title: 'من ادعى النبوة أو دينًا سوى الإسلام', text: 'أجمع المسلمون أن من ادعى النبوة بعده ﷺ كافر كاذب؛ ومن زعم اليوم دينًا مقبولًا سوى الإسلام فهو مكذب للقرآن (آل عمران ٨٥).', more: '', page: 15 },
    { title: 'وصف القرآن له بالنور', text: 'المخلوق من نور هم الملائكة، ووصف القرآن له ﷺ بالنور باعتبار ما أوحي إليه من الهدى.', more: '', page: 17 },
    { title: 'فوائد القيام بحقوقه ﷺ', text: 'سبب للهداية، ولمحبة الله، وللفوز والفلاح، ولحلاوة الإيمان واطمئنان القلب، ولمرافقته في الجنة.', more: '', page: 20 }
  ],
  keycards: [
    { kind: 'definitie', title: 'العبادة', items: ['لغة: الخضوع والتذلل.', 'شرعًا: اسم جامع لكل ما يحبه الله ويرضاه من الأقوال والأعمال الباطنة والظاهرة.'], page: 9, origin: 'boek' },
    { kind: 'bewijs', title: 'حق الله على العباد', items: ['﴿واعبدوا الله ولا تشركوا به شيئًا﴾ [النساء: ٣٦]', '«فإن حق الله على العباد أن يعبدوه ولا يشركوا به شيئًا».'], page: 9, origin: 'boek' },
    { kind: 'opsomming', title: 'من صور تعظيم الله', items: ['تعظيم حرماته', 'تعظيم شعائره', 'إكرام أهل طاعته'], page: 11, origin: 'boek' },
    { kind: 'onderscheid', title: 'الغلو في ذاته وفي وصفه', items: ['في ذاته: كاعتقاد أنه ليس من البشر أو أنه خلق من نور.', 'في وصفه: كادعاء علمه الغيب أو الحلف به.'], page: 17, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'حق الله أعظم الحقوق، وهو عبادته وحده.',
    'من حقوق الله تعظيمه ومحبته والحياء منه والتوبة إليه.',
    'النبي ﷺ خاتم الأنبياء، ورسالته عامة، وشريعته ناسخة.',
    'لا يغلى فيه ﷺ في ذاته ولا في وصفه.',
    'يحب ﷺ فوق الأهل والمال، ويتبع ولا يبتدع في دينه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'في أي شيء ينحصر حق الله على عباده؟', options: ['عبادته وحده لا شريك له', 'كثرة الصدقة', 'طلب العلم', 'بر الوالدين'], answer: 0, explain: 'كما في حديث معاذ.', page: 9 },
    { type: 'mc', q: 'ما أصل العبادة في اللغة؟', options: ['الخضوع والتذلل', 'المحبة', 'الخوف', 'الطاعة'], answer: 0, explain: 'يقال: طريق معبد أي مذلل.', page: 9 },
    { type: 'tf', q: 'تعظيم حرمات الله يكون باجتناب معاصيه.', options: ['صواب', 'خطأ'], answer: 0, explain: '﴿ومن يعظم حرمات الله فهو خير له عند ربه﴾.', page: 11 },
    { type: 'mc', q: 'من المخلوق من نور كما في الحديث؟', options: ['الملائكة', 'الأنبياء', 'الجن', 'البشر'], answer: 0, explain: '«خلقت الملائكة من نور».', page: 17 },
    { type: 'tf', q: 'الحلف بالنبي ﷺ جائز.', options: ['صواب', 'خطأ'], answer: 1, explain: '«من كان حالفًا فليحلف بالله أو ليصمت».', page: 18 },
    { type: 'mc', q: 'ما معنى الإطراء؟', options: ['الإفراط في المدح', 'الذم', 'الصلاة عليه', 'اتباع سنته'], answer: 0, explain: '«لا تطروني كما أطرت النصارى ابن مريم».', page: 16 }
  ]),
  note: 'نشاط الكتاب في الصفحتين ١٣ و٢١. ما كان في الكتاب للاطلاع فقط مشار إليه في موضعه.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'De rechten van Allah en van de Profeet ﷺ',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Het recht van Allah op de dienaren is dat zij Hem alleen aanbidden. Tot Zijn rechten behoren ook geloof in Hem en in Zijn namen en eigenschappen, Hem eren, schaamte tegenover Hem en liefde voor Hem. Daarna de rechten van de Profeet ﷺ: geloof in hem als laatste profeet en in zijn bescherming tegen fouten, niet overdrijven over hem, hem liefhebben en volgen.',
  source: { ...source, label: 'At-Tarbiya al-Islāmiyya (1): de rechten, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De onderwerpen van de vier lessen zoals in het boek.',
    root: { label: 'De rechten van Allah en van de Profeet ﷺ', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Het recht van Allah', sub: 'les 1', page: 9, children: ['aanbidding', 'geloof in namen en eigenschappen', 'eerbied'] },
      { label: 'Meer rechten van Allah', sub: 'les 2', page: 11, children: ['schaamte tegenover Hem', 'liefde', 'berouw', 'goede verwachting'] },
      { label: 'Het recht van de Profeet ﷺ', sub: 'les 3', page: 14, children: ['geloof in zijn profeetschap', 'de laatste profeet', 'bescherming tegen fouten', 'niet overdrijven'] },
      { label: 'Overdrijving en verdere rechten', sub: 'les 4', page: 18, children: ['overdrijving in zijn beschrijving', 'liefde en navolging', 'zijn familie en metgezellen'] }
    ]
  },
  points: [
    { text: 'De rechten van Allah kennen is de belangrijkste plicht; Zijn recht gaat voor alle andere.', page: 9 },
    { text: 'Het recht van Allah op Zijn dienaren komt neer op Hem alleen aanbidden, zonder deelgenoot.', page: 9 },
    { text: 'Tot Zijn rechten behoort geloof in Zijn namen en eigenschappen zoals ze overgeleverd zijn en zoals de vroege generaties ze begrepen, met het geloof dat niets op Hem lijkt.', page: 10 },
    { text: 'Allah eren betekent ook Zijn verboden grenzen en Zijn tekenen eren, en wie Hem gehoorzaamt eren.', page: 11 },
    { text: 'Tot Zijn rechten behoren liefde voor Hem, Hem gedenken en danken, tevreden zijn met Hem als Heer, berouw en een goede verwachting van Hem.', page: 12 },
    { text: 'De rechten van de Profeet ﷺ rusten op geloof in hem, hem eren, hem steunen en hem volgen.', page: 14 },
    { text: 'Hij is de laatste profeet, zijn wet vervangt alle eerdere wetten en zijn boodschap is voor djinn en mensen.', page: 15 },
    { text: 'Tot zijn grootste rechten behoren: niet over hem overdrijven, hem meer liefhebben dan ouder en kind, en hem volgen zonder vernieuwing in zijn godsdienst.', page: 18 }
  ],
  terms: [
    { term: 'العبادة', translit: 'al-ʿibāda', meaning: 'Aanbidding; in de taal: onderwerping en nederigheid.', explanation: 'Ibn Taymiyya: een woord voor alles wat Allah liefheeft en waarmee Hij tevreden is, aan uiterlijke en innerlijke woorden en daden.', notes: [], page: 9 },
    { term: 'الوقار', translit: 'al-waqār', meaning: 'Grootheid, ontzag.', explanation: '"Waarom verwachten jullie van Allah geen grootheid?" (Nūḥ 71:13): jullie vrezen Zijn grootheid niet.', notes: [], page: 10 },
    { term: 'الحرمات', translit: 'al-ḥurumāt', meaning: 'De verboden grenzen van Allah: de zonden.', explanation: 'Je eert ze door ze te vermijden.', notes: [], page: 11 },
    { term: 'الشعائر', translit: 'ash-shaʿāʾir', meaning: 'De tekenen van Allah: Zijn geboden.', explanation: 'Ze eren komt voort uit godsvrees van het hart.', notes: [], page: 11 },
    { term: 'خاتم النبيين', translit: 'khātam an-nabiyyīn', meaning: 'Het zegel der profeten: de laatste profeet.', explanation: 'Wie na hem beweert profeet te zijn, is een ongelovige leugenaar.', notes: [], page: 14 },
    { term: 'العصمة', translit: 'al-ʿiṣma', meaning: 'Bescherming van de Profeet ﷺ in zijn boodschap en het overbrengen ervan, en tegen ongeloof, shirk en schandelijke daden.', explanation: '', notes: [], page: 15 },
    { term: 'الإطراء', translit: 'al-iṭrāʾ', meaning: 'Overdreven lof.', explanation: 'De Profeet ﷺ verbood het.', notes: [], page: 16 },
    { term: 'التعزير', translit: 'at-taʿzīr', meaning: 'Eren en respecteren.', explanation: '"En eren hem" (al-Aʿrāf 7:157): zij eren en respecteren hem.', notes: [], page: 18 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'De rechten van Allah volgens het boek',
      intro: 'Uit les 1 en 2.',
      nodes: [
        { label: 'Geloof in Hem', page: 10 },
        { label: 'Hem alleen aanbidden', page: 10 },
        { label: 'Geloof in Zijn namen en eigenschappen', page: 10 },
        { label: 'Hem eren en respecteren', page: 10 },
        { label: 'Schaamte tegenover Hem en vrees voor Hem', page: 11 },
        { label: 'Je onderwerpen aan het oordeel van Allah en Zijn Boodschapper', page: 11 },
        { label: 'Liefde voor Hem', page: 12 },
        { label: 'Hem gedenken en danken', page: 12 },
        { label: 'Tevreden zijn met Hem als Heer', page: 12 },
        { label: 'Het kwade niet aan Hem toeschrijven', page: 12 },
        { label: 'Om vergeving vragen en berouw tonen', page: 12 },
        { label: 'Een goede verwachting van Hem', page: 12 }
      ]
    },
    {
      type: 'compare',
      title: 'Overdrijving over de Profeet ﷺ',
      intro: 'Over zijn persoon en over zijn beschrijving, zoals in het boek.',
      columns: ['Voorbeelden'],
      rows: [
        { label: 'Over zijn persoon', cells: ['geloven dat hij geen mens was, dat hij het eerste schepsel was, dat hij uit licht geschapen is of dat hij geen schaduw had'] },
        { label: 'Over zijn beschrijving', cells: ['beweren dat hij het verborgene kent of na zijn dood baat en schaadt, bij hem zweren, zijn geboortedag vieren, en beweren dat hij in zijn graf leeft zoals vóór zijn dood'] }
      ],
      page: 17
    },
    {
      type: 'cards',
      title: 'Rechten van de Profeet ﷺ',
      intro: 'Zoals het boek ze in les 3 en 4 opsomt.',
      nodes: [
        { label: 'Geloof in zijn profeetschap', page: 14 },
        { label: 'Hij is de laatste profeet', page: 14 },
        { label: 'Geloof in zijn bescherming tegen fouten', page: 15 },
        { label: 'Zijn wet vervangt de eerdere', page: 15 },
        { label: 'Hij bracht de boodschap volledig over', page: 15 },
        { label: 'Zijn boodschap is voor iedereen', page: 16 },
        { label: 'Niet over hem overdrijven', page: 16 },
        { label: 'Hem liefhebben', page: 18 },
        { label: 'Hem eren en respecteren', page: 18 },
        { label: 'Hem volgen, zonder vernieuwing', page: 19 },
        { label: 'Niet over hem liegen', page: 19 },
        { label: 'Zijn familie liefhebben', page: 19 },
        { label: 'Zijn metgezellen eren', page: 19 },
        { label: 'Zijn soenna als maatstaf nemen', page: 20 }
      ]
    }
  ],
  sections: [
    { title: 'Waarom alleen Allah aanbidding verdient', text: 'Ibn Kathīr zegt in het kort: omdat Hij Zijn dienaren uit het niets tot bestaan bracht en hen overlaadde met zichtbare en verborgen gunsten; daardoor verdient Hij het alleen aanbeden te worden.', more: '', page: 9 },
    { title: 'De liefde van aanbidding', text: 'Ibn al-Qayyim: de liefde van aanbidding is de edelste soort liefde, en zij is het zuivere recht van Allah op Zijn dienaren.', more: '', page: 12 },
    { title: 'Wat het kennen van Allahs rechten oplevert (alleen ter kennisname)', text: 'Het bevrijdt van zelfingenomenheid en hoogmoed, maakt nederig, hecht het hart aan Allah en de hoop op Zijn genade, en geeft schaamte over eigen tekortkoming. Wie de rechten van Allah vervult, maakt Hij onafhankelijk van de schepselen.', more: FYI_NL, page: 13 },
    { title: 'Hoe de metgezellen de Profeet ﷺ eerden', text: 'ʿUrwa ibn Masʿūd ath-Thaqafī getuigde ervan toen hij nog geen moslim was: hij zag nooit een koning die door zijn metgezellen zo geëerd werd als Muḥammad door de zijne.', more: '', page: 14 },
    { title: 'Wie na hem profeetschap of een andere godsdienst claimt', text: 'Volgens de overeenstemming van de moslims is wie na hem ﷺ beweert profeet te zijn een ongelovige leugenaar. Wie beweert dat er vandaag een andere aanvaarde godsdienst is dan de islam, loochent de Koran (Āl ʿImrān 3:85).', more: '', page: 15 },
    { title: '"Licht" in de Koran', text: 'Uit licht geschapen zijn de engelen. Dat de Koran de Profeet ﷺ "licht" noemt, slaat op de leiding die hem geopenbaard werd.', more: '', page: 17 },
    { title: 'Wat het vervullen van zijn rechten oplevert', text: 'Leiding, de liefde van Allah, succes, de zoetheid van het geloof, rust in het hart en zijn gezelschap in het Paradijs.', more: '', page: 20 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Aanbidding', items: ['In de taal: onderwerping en nederigheid.', 'In de sharia: alles wat Allah liefheeft en waarmee Hij tevreden is, aan uiterlijke en innerlijke woorden en daden.'], page: 9, origin: 'boek' },
    { kind: 'bewijs', title: 'Het recht van Allah op de dienaren', items: ['"Aanbid Allah en stel niets met Hem gelijk" (an-Nisāʾ 4:36)', '"Het recht van Allah op de dienaren is dat zij Hem aanbidden en niets met Hem gelijkstellen."'], page: 9, origin: 'boek' },
    { kind: 'opsomming', title: 'Vormen van Allah eren', items: ['Zijn verboden grenzen eren', 'Zijn tekenen eren', 'wie Hem gehoorzaamt eren'], page: 11, origin: 'boek' },
    { kind: 'onderscheid', title: 'Overdrijving over zijn persoon en zijn beschrijving', items: ['Persoon: bijvoorbeeld geloven dat hij geen mens was of uit licht geschapen is.', 'Beschrijving: bijvoorbeeld beweren dat hij het verborgene kent, of bij hem zweren.'], page: 17, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Het recht van Allah is het grootste recht: Hem alleen aanbidden.',
    'Tot Zijn rechten behoren Hem eren, Hem liefhebben, schaamte tegenover Hem en berouw.',
    'De Profeet ﷺ is de laatste profeet; zijn boodschap is voor iedereen en zijn wet vervangt de eerdere.',
    'Overdrijf niet over zijn persoon of zijn beschrijving.',
    'Heb hem ﷺ lief boven familie en bezit, en volg hem zonder vernieuwing in zijn godsdienst.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waar komt het recht van Allah op Zijn dienaren op neer?', options: ['Hem alleen aanbidden, zonder deelgenoot', 'veel liefdadigheid geven', 'kennis zoeken', 'goed zijn voor de ouders'], answer: 0, explain: 'Zoals in de hadith van Muʿādh.', page: 9 },
    { type: 'mc', q: 'Wat betekent ʿibāda oorspronkelijk in de taal?', options: ['onderwerping en nederigheid', 'liefde', 'vrees', 'gehoorzaamheid'], answer: 0, explain: 'Een "geëffende weg" heet ṭarīq muʿabbad.', page: 9 },
    { type: 'tf', q: 'Je eert de verboden grenzen van Allah door de zonden te vermijden.', options: ['Juist', 'Onjuist'], answer: 0, explain: '"Wie de verboden grenzen van Allah eert, dat is beter voor hem bij zijn Heer" (al-Ḥajj 22:30).', page: 11 },
    { type: 'mc', q: 'Wie zijn volgens de hadith uit licht geschapen?', options: ['de engelen', 'de profeten', 'de djinn', 'de mensen'], answer: 0, explain: '"De engelen zijn geschapen uit licht."', page: 17 },
    { type: 'tf', q: 'Zweren bij de Profeet ﷺ is toegestaan.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Wie zweert, laat hij bij Allah zweren of zwijgen."', page: 18 },
    { type: 'mc', q: 'Wat is iṭrāʾ?', options: ['overdreven lof', 'kritiek', 'zegeningen over hem vragen', 'zijn soenna volgen'], answer: 0, explain: '"Prijs mij niet overdreven zoals de christenen de zoon van Maryam prezen."', page: 16 }
  ]),
  note: 'Oefeningen van het boek op p. 13 en 21. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tarbiyah', chapter: '1', unit: 1, ar, nl }
