// Hoofdstukkaart bij التربية الإسلامية (١) الحقوق, eenheid 2: حق الصحابة والعلماء (lessen 5–8, boek p. 22–32).
// Het boek heeft zelf geen eenheden; deze indeling in zes thema's is van de samenvatter.
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen van p. 27 en 28 en heel p. 31 zijn in het boek "alleen ter kennisname".
// Niet in het hadith-tabblad, omdat de toeschrijving nog gecontroleerd moet worden: de hadith over de tien
// aan wie het Paradijs beloofd is (p. 23) en de hadith over de rechter die zich inspant (p. 30);
// het recht en het principe zelf staan wel op de kaart.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (١) الحقوق، سلسلة زاد العلمية',
  pages: '22–32',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'خير الناس قرني، ثم الذين يلونهم، ثم الذين يلونهم', takhrij: 'رواه البخاري ومسلم', note: 'في فضل الصحابة.', pages: [22], nl: 'De beste mensen zijn mijn generatie, dan wie op hen volgen, dan wie op hen volgen', nlNote: 'Over de voortreffelijkheid van de metgezellen.' },
  { narrator: 'محمد ابن الحنفية', text: 'قلت لأبي: أي الناس خير بعد رسول الله ﷺ؟ قال: أبو بكر، قلت: ثم من؟ قال: ثم عمر، وخشيت أن يقول عثمان، قلت: ثم أنت؟ قال: ما أنا إلا رجل من المسلمين', takhrij: 'أخرجه البخاري', note: 'أبوه علي بن أبي طالب.', pages: [22], nl: 'Ik vroeg mijn vader: wie is de beste mens na de Boodschapper van Allah ﷺ? Hij zei: Abū Bakr. Ik vroeg: en dan? Hij zei: dan ʿUmar. Ik was bang dat hij ʿUthmān zou noemen en vroeg: en dan jij? Hij zei: ik ben slechts een van de moslims', nlNote: 'Zijn vader is ʿAlī ibn Abī Ṭālib.' },
  { narrator: 'عبد الله بن عمر', text: 'كنا نخير بين الناس في زمن النبي ﷺ، فنخير أبا بكر، ثم عمر، ثم عثمان', takhrij: 'أخرجه البخاري', note: '', pages: [22], nl: 'In de tijd van de Profeet ﷺ vergeleken wij de mensen: wij achtten Abū Bakr de beste, dan ʿUmar, dan ʿUthmān', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'لا تسبوا أصحابي ...', takhrij: 'رواه البخاري ومسلم', note: 'تقدم بتمامه في الوحدة الأولى.', pages: [24], nl: 'Beledig mijn metgezellen niet ...', nlNote: 'Volledig in eenheid 1.' },
  { narrator: 'أنس بن مالك', text: 'ما كل ما نحدثكم سمعناه من رسول الله ﷺ، ولكن لم يكن يكذب بعضنا على بعض', takhrij: 'أخرجه ابن منده في الإيمان بإسناد صحيح', note: 'رواه حميد الطويل، لما سأل رجل أنسًا: أنت سمعته من رسول الله؟ فتغير وجهه.', pages: [25], nl: 'Niet alles wat wij jullie vertellen hebben wij zelf van de Boodschapper van Allah ﷺ gehoord, maar wij logen niet tegen elkaar', nlNote: 'Overgeleverd door Ḥumayd aṭ-Ṭawīl, toen iemand Anas vroeg of hij het zelf gehoord had en Anas’ gezicht betrok.' },
  { narrator: '', text: 'أوصيكم بتقوى الله والسمع والطاعة وإن عبدًا حبشيًا، فإنه من يعش منكم بعدي فسيرى اختلافًا كثيرًا، فعليكم بسنتي وسنة الخلفاء المهديين الراشدين، تمسكوا بها وعضوا عليها بالنواجذ', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', note: '', pages: [25], nl: 'Ik raad jullie godsvrees aan, en luisteren en gehoorzamen, ook aan een Abessijnse slaaf. Wie van jullie na mij leeft, zal veel onenigheid zien; houd je dan aan mijn soenna en de soenna van de rechtgeleide kaliefen, grijp haar vast en houd haar met je kiezen vast', nlNote: '' },
  { narrator: 'عبادة بن الصامت', text: 'ليس من أمتي من لم يجل كبيرنا ويرحم صغيرنا ويعرف لعالمنا', takhrij: 'أخرجه أحمد وحسنه الألباني', note: 'كذا في الكتاب.', pages: [27], nl: 'Wie onze ouderen niet eert, onze jongeren niet barmhartig behandelt en onze geleerde niet erkent, hoort niet bij mijn gemeenschap', nlNote: 'Zo in het boek.' },
  { narrator: '', text: 'إن من إجلال الله إكرام ذي الشيبة المسلم ...', takhrij: 'أخرجه أبو داود وحسنه الألباني', note: 'تقدم في الوحدة الأولى، وفيه: «وحامل القرآن».', pages: [27], nl: 'Tot het eren van Allah behoort het eren van de grijze moslim ...', nlNote: 'Zie eenheid 1; daarin ook: "en de drager van de Koran".' },
  { narrator: 'عبد الله بن عباس', text: 'مكثت سنة أريد أن أسأل عمر بن الخطاب عن آية فما أستطيع أن أسأله هيبة له', takhrij: 'رواه البخاري ومسلم', note: 'في توقير العلماء.', pages: [27], nl: 'Een jaar lang wilde ik ʿUmar ibn al-Khaṭṭāb iets over een vers vragen, maar uit ontzag voor hem durfde ik het niet', nlNote: 'Over respect voor de geleerden.' },
  { narrator: '', text: 'إن الله وملائكته حتى النملة في جحرها وحتى الحوت في البحر ليصلون على معلم الناس الخير', takhrij: 'رواه الترمذي وصححه', note: '', pages: [28], nl: 'Allah en Zijn engelen, zelfs de mier in haar hol en de vis in de zee, zegenen wie de mensen het goede onderwijst', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'كان القراء أصحاب مجلس عمر ومشاورته، كهولًا كانوا أو شبانًا', takhrij: 'أخرجه البخاري', note: '', pages: [28], nl: 'De Koranlezers zaten in de raad van ʿUmar en werden door hem geraadpleegd, of ze nu oud of jong waren', nlNote: '' },
  { narrator: '', text: 'الدين النصيحة، قلنا: لمن؟ قال: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم', takhrij: 'أخرجه مسلم', note: '', pages: [29], nl: 'De godsdienst is oprechtheid. Wij vroegen: tegenover wie? Hij zei: tegenover Allah, Zijn Boek, Zijn Boodschapper, de leiders van de moslims en hun gewone mensen', nlNote: '' }
]

const TAKHRIJ_NL = {
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'أخرجه البخاري': 'al-Bukhārī', 'أخرجه مسلم': 'Muslim',
  'أخرجه ابن منده في الإيمان بإسناد صحيح': 'Ibn Manda in al-Īmān, met een authentieke keten',
  'رواه أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; authentiek volgens al-Albānī',
  'أخرجه أحمد وحسنه الألباني': 'Aḥmad; goed (ḥasan) volgens al-Albānī',
  'أخرجه أبو داود وحسنه الألباني': 'Abū Dāwūd; goed (ḥasan) volgens al-Albānī',
  'رواه الترمذي وصححه': 'at-Tirmidhī, die hem authentiek noemde'
}
const NARRATOR_NL = {
  'محمد ابن الحنفية': 'Muḥammad ibn al-Ḥanafiyya', 'عبد الله بن عمر': 'ʿAbdallāh ibn ʿUmar', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī',
  'أنس بن مالك': 'Anas ibn Mālik', 'عبادة بن الصامت': 'ʿUbāda ibn aṣ-Ṣāmit', 'عبد الله بن عباس': 'ʿAbdallāh ibn ʿAbbās'
}

const PERSONS = [
  ['ali-ibn-abi-talib', 'text', [22], 'سأله ابنه: أي الناس خير بعد رسول الله ﷺ؟ فقال: أبو بكر ثم عمر.', 'Zijn zoon vroeg hem wie na de Profeet ﷺ de beste was; hij zei: Abū Bakr, dan ʿUmar.'],
  ['muhammad-ibn-al-hanafiyya', 'text', [22], 'روى سؤاله لأبيه علي عن خير الناس.', 'Overleverde zijn vraag aan zijn vader ʿAlī wie de beste mens was.'],
  ['ibn-umar', 'text', [22], 'روى تخيير الصحابة أبا بكر ثم عمر ثم عثمان.', 'Overleverde dat de metgezellen Abū Bakr, dan ʿUmar, dan ʿUthmān de besten achtten.'],
  ['abu-bakr-as-siddiq', 'text', [22, 23], 'أفضل الصحابة وأحقهم بالخلافة.', 'De voortreffelijkste metgezel en de eerste die recht had op het kalifaat.'],
  ['umar-ibn-al-khattab', 'text', [22, 23, 27, 28], 'الثاني في الفضل والخلافة، وكان القراء أصحاب مجلسه.', 'De tweede in voortreffelijkheid en kalifaat; de Koranlezers zaten in zijn raad.'],
  ['uthman-ibn-affan', 'text', [22, 23], 'الثالث في الفضل والخلافة.', 'De derde in voortreffelijkheid en kalifaat.'],
  ['ibn-qudama', 'text', [23], 'بين ترتيب الخلفاء الراشدين في الأحقية بالخلافة.', 'Legde de volgorde uit waarin de rechtgeleide kaliefen recht hadden op het kalifaat.'],
  ['at-tahawi', 'text', [23, 24], 'قال: ونحب أصحاب رسول الله ﷺ ولا نذكرهم إلا بخير.', 'Zei: wij houden van de metgezellen van de Boodschapper ﷺ en noemen hen alleen in goede zin.'],
  ['abu-said-al-khudri', 'text', [24], 'روى «لا تسبوا أصحابي».', 'Overleverde "Beledig mijn metgezellen niet".'],
  ['abu-zura-ar-razi', 'text', [24], 'قال: إذا رأيت الرجل ينتقص أحدًا من الصحابة فاعلم أنه زنديق.', 'Zei: wie een metgezel kleineert, is een verborgen ongelovige.'],
  ['humayd-at-tawil', 'text', [25], 'روى غضب أنس لما سئل: أنت سمعته من رسول الله؟', 'Overleverde dat Anas boos werd toen hem gevraagd werd of hij het zelf gehoord had.'],
  ['anas-ibn-malik', 'text', [25], 'قال: لم يكن يكذب بعضنا على بعض.', 'Zei: wij logen niet tegen elkaar.'],
  ['ibn-hajar-al-asqalani', 'text', [25], 'قال: اتفق أهل السنة على أن الصحابة جميعهم عدول.', 'Zei dat de soennieten het erover eens zijn dat alle metgezellen betrouwbaar zijn.'],
  ['ubada-ibn-as-samit', 'text', [27], 'روى «ليس من أمتي من لم يجل كبيرنا».', 'Overleverde "Wie onze ouderen niet eert, hoort niet bij mijn gemeenschap".'],
  ['ibn-abbas', 'text', [27, 28], 'هاب أن يسأل عمر سنة، وروى أن القراء كانوا أصحاب مجلس عمر.', 'Durfde ʿUmar een jaar lang niets te vragen, en overleverde dat de Koranlezers in ʿUmars raad zaten.'],
  ['ibn-abi-hatim', 'text', [27], 'عقد في مقدمة الجرح والتعديل أبوابًا في تعظيم العلماء. ' + FYI, 'Wijdde in de inleiding van al-Jarḥ wa-t-taʿdīl hoofdstukken aan het eren van geleerden. ' + FYI_NL],
  ['sufyan-ath-thawri', 'text', [27], 'من الأئمة الذين ذكر ابن أبي حاتم تعظيم العلماء لهم. ' + FYI, 'Een van de imams die volgens Ibn Abī Ḥātim door de geleerden geëerd werden. ' + FYI_NL],
  ['ahmad-ibn-hanbal', 'text', [27, 28], 'قال: أمرنا أن نتواضع لمن نتعلم منه؛ وأخرج حديث عبادة.', 'Zei: ons is opgedragen nederig te zijn tegenover wie ons onderwijst; nam ook de hadith van ʿUbāda op.'],
  ['ibn-hazm', 'text', [27], 'نقل الاتفاق على إيجاب توقير العالم. ' + FYI, 'Gaf de overeenstemming weer dat de geleerde gerespecteerd moet worden. ' + FYI_NL],
  ['ibn-abi-al-izz', 'text', [28], 'قال: تجب موالاة المؤمنين خصوصًا ورثة الأنبياء.', 'Zei dat loyaliteit aan de gelovigen verplicht is, vooral aan de erfgenamen van de profeten.'],
  ['ibn-kathir', 'text', [28], 'فسر أولي الأمر بالأمراء والعلماء.', 'Legde "zij die gezag hebben" uit als de bestuurders en de geleerden.'],
  ['hammad-ibn-salama', 'text', [28], 'من اتهم أحمد ويحيى بن معين من يتكلم فيه. ' + FYI, 'Aḥmad en Yaḥyā ibn Maʿīn verdachten wie hem bekritiseerde. ' + FYI_NL],
  ['yahya-ibn-main', 'text', [28], 'قال: إذا رأيت الرجل يتكلم في حماد بن سلمة وعكرمة فاتهمه على الإسلام. ' + FYI, 'Zei: wantrouw wie Ḥammād ibn Salama en ʿIkrima bekritiseert. ' + FYI_NL],
  ['ikrima-mawla-ibn-abbas', 'text', [28], 'ذكره يحيى بن معين مع حماد بن سلمة. ' + FYI, 'Door Yaḥyā ibn Maʿīn samen met Ḥammād ibn Salama genoemd. ' + FYI_NL],
  ['ibn-asakir', 'text', [28], 'قال: لحوم العلماء مسمومة. ' + FYI, 'Zei: het vlees van de geleerden is vergiftigd. ' + FYI_NL],
  ['ibn-al-qayyim', 'text', [30], 'قال: قد تكون من العالم الجليل الزلة وهو فيها معذور، فلا يتبع فيها ولا تهدر مكانته.', 'Zei dat een grote geleerde een misstap kan begaan waarvoor hij verontschuldigd is; die volg je niet, maar zijn aanzien blijft.'],
  ['al-bukhari', 'takhrij', [22, 24, 27, 28], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [22, 24, 27, 29], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['ibn-manda', 'takhrij', [25], 'أخرج قول أنس في كتاب الإيمان.', 'Nam de uitspraak van Anas op in zijn boek al-Īmān.'],
  ['abu-dawud', 'takhrij', [25, 27], 'أخرج حديثي الوصية بالسنة والإجلال.', 'Nam de hadith over de soenna en over het eren op.'],
  ['at-tirmidhi', 'takhrij', [25, 28], 'أخرج حديثي الوصية بالسنة ومعلم الناس الخير.', 'Nam de hadith over de soenna en over wie het goede onderwijst op.'],
  ['al-albani', 'takhrij', [25, 27], 'صحح أحاديث في الوحدة وحسنها.', 'Beoordeelde hadith in deze eenheid als authentiek of goed.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'حق الصحابة والعلماء',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'الصحابة خير الناس بعد الأنبياء، ومن حقوقهم اعتقاد فضلهم وترتيبهم ومحبتهم والترضي عنهم وعدم سبهم والذب عنهم؛ والعلماء ورثة الأنبياء، ومن حقوقهم توقيرهم ومحبتهم والرجوع إليهم ونصحهم وصون أعراضهم.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'موضوعات الدروس الأربعة كما في الكتاب.',
    root: { label: 'حق الصحابة والعلماء', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'حق الصحابة', sub: 'الدرس ٥', page: 22, children: ['اعتقاد فضلهم', 'ترتيبهم', 'محبتهم', 'عدم سبهم'] },
      { label: 'الذب عنهم واتباعهم', sub: 'الدرس ٦', page: 24, children: ['البراءة ممن طعن فيهم', 'عدالتهم', 'الاقتداء بهم'] },
      { label: 'حق العلماء', sub: 'الدرس ٧', page: 27, children: ['التوقير', 'المحبة', 'الرجوع إليهم', 'الطاعة في المعروف'] },
      { label: 'صون أعراض العلماء', sub: 'الدرس ٨', page: 29, children: ['إحسان الظن', 'النصيحة', 'زلة العالم'] }
    ]
  },
  points: [
    { text: 'الصحابة خير الناس بعد الأنبياء وخير قرون هذه الأمة بنص القرآن وإجماع السلف.', page: 22 },
    { text: 'ترتيبهم في الفضل كترتيبهم في الخلافة: أبو بكر ثم عمر ثم عثمان ثم علي.', page: 23 },
    { text: 'من حقوقهم محبتهم والثناء عليهم والاستغفار لهم وعدم سبهم.', page: 24 },
    { text: 'الصحابة كلهم عدول، أي برآء من وصف الفسق.', page: 25 },
    { text: 'العلماء ورثة الأنبياء وأمناء الله على شريعته.', page: 27 },
    { text: 'من حقوق العلماء توقيرهم ومحبتهم والدعاء لهم والرجوع إليهم لا سيما في الفتن والنوازل.', page: 28 },
    { text: 'زلة العالم لا تبيح الوقوع في عرضه، والعصمة للأنبياء فقط.', page: 30 },
    { text: 'غيبة العلماء أعظم من غيبة غيرهم، لأنها تضر الإسلام كله.', page: 30 }
  ],
  terms: [
    { term: 'الخلفاء الراشدون', translit: 'al-khulafāʾ ar-rāshidūn', meaning: 'أبو بكر وعمر وعثمان وعلي.', explanation: 'وترتيبهم في الفضل كترتيبهم في الخلافة.', notes: [], page: 23 },
    { term: 'الترضي', translit: 'at-taraḍḍī', meaning: 'قول: رضي الله عنه.', explanation: 'من حقوق الصحابة.', notes: [], page: 24 },
    { term: 'الزنديق', translit: 'az-zindīq', meaning: 'وصف به أبو زرعة من ينتقص الصحابة.', explanation: 'لأنهم يريدون أن يجرحوا شهودنا ليبطلوا الكتاب والسنة.', notes: [], page: 24 },
    { term: 'عدالة الصحابة', translit: 'ʿadālat aṣ-ṣaḥāba', meaning: 'براءة جميعهم من وصف الفسق.', explanation: '', notes: [], page: 25 },
    { term: 'النواجذ', translit: 'an-nawājidh', meaning: 'الأضراس.', explanation: '«عضوا عليها بالنواجذ»: تمسكوا بها بقوة.', notes: [], page: 25 },
    { term: 'ورثة الأنبياء', translit: 'warathat al-anbiyāʾ', meaning: 'العلماء، حملة العلم.', explanation: '', notes: [], page: 27 },
    { term: 'أولو الأمر', translit: 'ulū l-amr', meaning: 'الأمراء والعلماء.', explanation: 'كما قال ابن كثير في تفسيره.', notes: [], page: 28 },
    { term: 'الزلة', translit: 'az-zalla', meaning: 'خطأ العالم.', explanation: 'ينتفع بعلمه ولا يتابع على خطئه.', notes: [], page: 30 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'حقوق الصحابة',
      intro: 'كما عددها الكتاب في الدرسين الخامس والسادس.',
      nodes: [
        { label: 'اعتقاد فضلهم', page: 22 },
        { label: 'الشهادة بالجنة لمن شهد له الله ورسوله', page: 23 },
        { label: 'اعتقاد ترتيبهم في الفضل', page: 23 },
        { label: 'محبتهم والثناء عليهم', page: 23 },
        { label: 'الاستغفار لهم والترضي عنهم', page: 24 },
        { label: 'عدم الطعن فيهم وعدم سبهم', page: 24 },
        { label: 'الإنكار على من طعن فيهم', page: 24 },
        { label: 'اعتقاد عدالتهم', page: 25 },
        { label: 'الاقتداء بهم', page: 25 }
      ]
    },
    {
      type: 'steps',
      title: 'ترتيب الخلفاء الراشدين',
      intro: 'كما نقله الكتاب عن ابن قدامة.',
      nodes: [
        { label: 'أبو بكر', sub: 'لفضله وسابقته وتقديم النبي ﷺ له في الصلاة', page: 23 },
        { label: 'عمر', sub: 'لفضله وعهد أبي بكر إليه', page: 23 },
        { label: 'عثمان', sub: 'لتقديم أهل الشورى له', page: 23 },
        { label: 'علي', sub: 'لفضله وإجماع أهل عصره عليه', page: 23 }
      ]
    },
    {
      type: 'cards',
      title: 'حقوق العلماء',
      intro: 'كما عددها الكتاب في الدرسين السابع والثامن.',
      nodes: [
        { label: 'تعظيمهم وتوقيرهم', page: 27 },
        { label: 'محبتهم وتوليهم', page: 28 },
        { label: 'الدعاء لهم والثناء عليهم', page: 28 },
        { label: 'الرجوع إليهم', page: 28 },
        { label: 'طاعتهم في المعروف', page: 28 },
        { label: 'استشارتهم وتقديمهم', page: 28 },
        { label: 'إحسان الظن بهم', page: 29 },
        { label: 'بذل النصيحة لهم', page: 29 },
        { label: 'صون أعراضهم', page: 29 }
      ]
    }
  ],
  sections: [
    { title: 'محبة الصحابة', text: 'قال الطحاوي: ونحب أصحاب رسول الله ﷺ ولا نفرط في حب أحد منهم ولا نتبرأ من أحد منهم، وحبهم دين وإيمان وإحسان، وبغضهم كفر ونفاق وطغيان.', more: '', page: 23 },
    { title: 'من ينتقص الصحابة', text: 'قال أبو زرعة: إذا رأيت الرجل ينتقص أحدًا من أصحاب رسول الله ﷺ فاعلم أنه زنديق؛ لأن الذي أدى إلينا القرآن والسنن أصحاب رسول الله، وإنما يريدون أن يجرحوا شهودنا ليبطلوا الكتاب والسنة.', more: '', page: 24 },
    { title: 'عدالة الصحابة', text: 'قال ابن حجر: اتفق أهل السنة على أن الجميع عدول، ولم يخالف في ذلك إلا شذوذ من المبتدعة.', more: '', page: 25 },
    { title: 'توقير العلماء عند السلف (للاطلاع فقط)', text: 'قال أحمد: أمرنا أن نتواضع لمن نتعلم منه؛ ونقل ابن حزم الاتفاق على إيجاب توقير أهل القرآن والعالم والفاضل.', more: FYI, page: 27 },
    { title: 'الذب عن أعراض العلماء (للاطلاع فقط)', text: 'قال ابن عساكر: لحوم العلماء مسمومة، وعادة الله في هتك أستار منتقصيهم معلومة.', more: FYI, page: 28 },
    { title: 'علام يقوم صون أعراض العلماء', text: 'الخطأ لا يبيح الوقوع في عرض العالم؛ والعصمة للأنبياء فقط؛ والعالم إذا قصد الحق في اجتهاده فهو مصيب له أجران أو مخطئ معذور له أجر؛ وينتفع بعلمه ولا يتابع على خطئه؛ والطعن في العلماء من سبيل أهل البدعة.', more: '', page: 30 },
    { title: 'أضرار ترك حقوق العلماء (للاطلاع فقط)', text: 'ضعف العلم وانتشار الجهل والبدعة، وانتشار المنكرات، وترؤس أهل الضلال، وتجرؤ الناس على الدين والفتوى بغير علم، واندثار السنة، ولبس الحق بالباطل.', more: FYI, page: 31 }
  ],
  keycards: [
    { kind: 'bewijs', title: 'فضل الصحابة', items: ['﴿للفقراء المهاجرين ...﴾ ﴿والذين تبوءوا الدار والإيمان ...﴾ [الحشر: ٨–٩]', '«خير الناس قرني ثم الذين يلونهم ثم الذين يلونهم».'], page: 22, origin: 'boek' },
    { kind: 'definitie', title: 'عدالة الصحابة', items: ['براءة جميعهم من وصف الفسق.'], page: 25, origin: 'boek' },
    { kind: 'opsomming', title: 'من حقوق العلماء', items: ['التوقير', 'المحبة', 'الدعاء لهم', 'الرجوع إليهم', 'إحسان الظن', 'النصيحة', 'صون الأعراض'], page: 27, origin: 'boek' },
    { kind: 'onderscheid', title: 'العالم المجتهد', items: ['إن أصاب الحق: له أجران.', 'إن أخطأ: معذور وله أجر، ولا يتابع على خطئه.'], page: 30, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الصحابة خير الناس بعد الأنبياء، وترتيبهم في الفضل كترتيبهم في الخلافة.',
    'نحبهم ونترضى عنهم ولا نسبهم، وننكر على من طعن فيهم.',
    'الصحابة كلهم عدول.',
    'العلماء ورثة الأنبياء، يوقرون ويرجع إليهم.',
    'زلة العالم لا تتبع ولا تبيح الطعن فيه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من خير الناس بعد رسول الله ﷺ كما أجاب علي رضي الله عنه؟', options: ['أبو بكر', 'عمر', 'عثمان', 'علي نفسه'], answer: 0, explain: 'ثم عمر، وقال عن نفسه: ما أنا إلا رجل من المسلمين.', page: 22 },
    { type: 'mc', q: 'ما معنى عدالة الصحابة؟', options: ['براءة جميعهم من وصف الفسق', 'أنهم معصومون', 'أنهم كلهم علماء', 'أنهم كلهم من المهاجرين'], answer: 0, explain: 'كما في الكتاب.', page: 25 },
    { type: 'tf', q: 'سب الصحابة من حقوقهم المنهي عنها.', options: ['صواب', 'خطأ'], answer: 0, explain: 'من حقوقهم عدم الطعن فيهم وعدم سبهم.', page: 24 },
    { type: 'mc', q: 'من أولو الأمر في قول ابن كثير؟', options: ['الأمراء والعلماء', 'الآباء', 'الأغنياء', 'كبار السن'], answer: 0, explain: 'في تفسير النساء ٥٩.', page: 28 },
    { type: 'tf', q: 'إذا أخطأ العالم المجتهد جاز الوقوع في عرضه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'صدور الخطأ منه لا يبيح الوقوع في عرضه.', page: 30 },
    { type: 'mc', q: 'لمن الدين النصيحة كما في الحديث؟', options: ['لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم', 'للعلماء فقط', 'للحكام فقط', 'للوالدين فقط'], answer: 0, explain: 'أخرجه مسلم.', page: 29 }
  ]),
  note: 'نشاط الكتاب في الصفحتين ٢٦ و٣٢. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'De rechten van de metgezellen en de geleerden',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De metgezellen zijn de beste mensen na de profeten. Tot hun rechten behoren: geloven in hun voortreffelijkheid en hun rangorde, hen liefhebben, "raḍiya llāhu ʿanhu" over hen zeggen, hen niet beledigen en hen verdedigen. De geleerden zijn de erfgenamen van de profeten; tot hun rechten behoren respect, liefde, je tot hen wenden, oprechte raad en het beschermen van hun eer.',
  source: { ...source, label: 'At-Tarbiya al-Islāmiyya (1): de rechten, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De onderwerpen van de vier lessen zoals in het boek.',
    root: { label: 'De rechten van de metgezellen en de geleerden', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Het recht van de metgezellen', sub: 'les 5', page: 22, children: ['hun voortreffelijkheid', 'hun rangorde', 'hen liefhebben', 'hen niet beledigen'] },
      { label: 'Hen verdedigen en volgen', sub: 'les 6', page: 24, children: ['afstand van wie hen aanvalt', 'hun betrouwbaarheid', 'hun voorbeeld volgen'] },
      { label: 'Het recht van de geleerden', sub: 'les 7', page: 27, children: ['respect', 'liefde', 'je tot hen wenden', 'gehoorzamen in het goede'] },
      { label: 'De eer van de geleerden', sub: 'les 8', page: 29, children: ['goed over hen denken', 'oprechte raad', 'de misstap van een geleerde'] }
    ]
  },
  points: [
    { text: 'De metgezellen zijn de beste mensen na de profeten en de beste generatie van deze gemeenschap, volgens de Koran en de overeenstemming van de vroege generaties.', page: 22 },
    { text: 'Hun rangorde in voortreffelijkheid volgt die van het kalifaat: Abū Bakr, ʿUmar, ʿUthmān, dan ʿAlī.', page: 23 },
    { text: 'Tot hun rechten behoren hen liefhebben, hen prijzen, voor hen om vergeving vragen en hen niet beledigen.', page: 24 },
    { text: 'Alle metgezellen zijn betrouwbaar (ʿudūl): vrij van de beschrijving zondig.', page: 25 },
    { text: 'De geleerden zijn de erfgenamen van de profeten en de vertrouwelingen van Allah over Zijn wet.', page: 27 },
    { text: 'Tot hun rechten behoren respect, liefde, voor hen bidden en je tot hen wenden, vooral bij beproevingen en nieuwe kwesties.', page: 28 },
    { text: 'Een misstap van een geleerde maakt het niet toegestaan zijn eer aan te tasten; alleen de profeten zijn tegen fouten beschermd.', page: 30 },
    { text: 'Over geleerden kwaadspreken is erger dan over anderen, omdat het de hele islam schaadt.', page: 30 }
  ],
  terms: [
    { term: 'الخلفاء الراشدون', translit: 'al-khulafāʾ ar-rāshidūn', meaning: 'De rechtgeleide kaliefen: Abū Bakr, ʿUmar, ʿUthmān en ʿAlī.', explanation: 'Hun rangorde in voortreffelijkheid volgt die van het kalifaat.', notes: [], page: 23 },
    { term: 'الترضي', translit: 'at-taraḍḍī', meaning: '"Raḍiya llāhu ʿanhu" zeggen: moge Allah tevreden met hem zijn.', explanation: 'Een recht van de metgezellen.', notes: [], page: 24 },
    { term: 'الزنديق', translit: 'az-zindīq', meaning: 'Verborgen ongelovige; zo noemt Abū Zurʿa wie de metgezellen kleineert.', explanation: 'Omdat zulke mensen onze getuigen willen afkraken om Koran en soenna ongeldig te maken.', notes: [], page: 24 },
    { term: 'عدالة الصحابة', translit: 'ʿadālat aṣ-ṣaḥāba', meaning: 'De betrouwbaarheid van de metgezellen: zij zijn allemaal vrij van de beschrijving zondig.', explanation: '', notes: [], page: 25 },
    { term: 'النواجذ', translit: 'an-nawājidh', meaning: 'De kiezen.', explanation: '"Houd haar met je kiezen vast": houd je er stevig aan vast.', notes: [], page: 25 },
    { term: 'ورثة الأنبياء', translit: 'warathat al-anbiyāʾ', meaning: 'De erfgenamen van de profeten: de geleerden, die de kennis dragen.', explanation: '', notes: [], page: 27 },
    { term: 'أولو الأمر', translit: 'ulū l-amr', meaning: 'Zij die gezag hebben: de bestuurders en de geleerden.', explanation: 'Zo zegt Ibn Kathīr in zijn tafsīr.', notes: [], page: 28 },
    { term: 'الزلة', translit: 'az-zalla', meaning: 'Een misstap van een geleerde.', explanation: 'Je hebt baat bij zijn kennis, maar volgt hem niet in zijn fout.', notes: [], page: 30 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'De rechten van de metgezellen',
      intro: 'Zoals het boek ze in les 5 en 6 opsomt.',
      nodes: [
        { label: 'Geloven in hun voortreffelijkheid', page: 22 },
        { label: 'Getuigen dat het Paradijs is voor wie Allah en Zijn Boodschapper dat beloofden', page: 23 },
        { label: 'Geloven in hun rangorde', page: 23 },
        { label: 'Hen liefhebben en prijzen', page: 23 },
        { label: 'Om vergeving voor hen vragen en "raḍiya llāhu ʿanhu" zeggen', page: 24 },
        { label: 'Hen niet aanvallen of beledigen', page: 24 },
        { label: 'Afkeuren wie hen aanvalt', page: 24 },
        { label: 'Geloven in hun betrouwbaarheid', page: 25 },
        { label: 'Hun voorbeeld volgen', page: 25 }
      ]
    },
    {
      type: 'steps',
      title: 'De volgorde van de rechtgeleide kaliefen',
      intro: 'Zoals het boek het van Ibn Qudāma overneemt.',
      nodes: [
        { label: 'Abū Bakr', sub: 'om zijn voortreffelijkheid, zijn voorsprong en omdat de Profeet ﷺ hem liet voorgaan in het gebed', page: 23 },
        { label: 'ʿUmar', sub: 'om zijn voortreffelijkheid en de aanwijzing door Abū Bakr', page: 23 },
        { label: 'ʿUthmān', sub: 'omdat de raad (shūrā) hem koos', page: 23 },
        { label: 'ʿAlī', sub: 'om zijn voortreffelijkheid en de overeenstemming van zijn tijdgenoten', page: 23 }
      ]
    },
    {
      type: 'cards',
      title: 'De rechten van de geleerden',
      intro: 'Zoals het boek ze in les 7 en 8 opsomt.',
      nodes: [
        { label: 'Hen eren en respecteren', page: 27 },
        { label: 'Hen liefhebben en loyaal zijn', page: 28 },
        { label: 'Voor hen bidden en hen prijzen', page: 28 },
        { label: 'Je tot hen wenden', page: 28 },
        { label: 'Hen gehoorzamen in het goede', page: 28 },
        { label: 'Hen raadplegen en voor laten gaan', page: 28 },
        { label: 'Goed over hen denken', page: 29 },
        { label: 'Hun oprechte raad geven', page: 29 },
        { label: 'Hun eer beschermen', page: 29 }
      ]
    }
  ],
  sections: [
    { title: 'De metgezellen liefhebben', text: 'Aṭ-Ṭaḥāwī: wij houden van de metgezellen van de Boodschapper van Allah ﷺ, overdrijven in de liefde voor geen van hen en keren ons van geen van hen af; hen liefhebben is godsdienst, geloof en goeddoen, en hen haten is ongeloof, hypocrisie en overtreding.', more: '', page: 23 },
    { title: 'Wie de metgezellen kleineert', text: 'Abū Zurʿa: wie een van de metgezellen kleineert, is een verborgen ongelovige; want de metgezellen hebben ons de Koran en de soenna overgebracht, en zulke mensen willen onze getuigen afkraken om Koran en soenna ongeldig te maken.', more: '', page: 24 },
    { title: 'De betrouwbaarheid van de metgezellen', text: 'Ibn Ḥajar: de soennieten zijn het erover eens dat zij allemaal betrouwbaar zijn; alleen een kleine groep vernieuwers week daarvan af.', more: '', page: 25 },
    { title: 'Respect voor geleerden bij de vroege generaties (alleen ter kennisname)', text: 'Aḥmad: ons is opgedragen nederig te zijn tegenover wie ons onderwijst. Ibn Ḥazm gaf de overeenstemming weer dat de mensen van de Koran, de geleerde en de voortreffelijke gerespecteerd moeten worden.', more: FYI_NL, page: 27 },
    { title: 'De eer van de geleerden verdedigen (alleen ter kennisname)', text: 'Ibn ʿAsākir: het vlees van de geleerden is vergiftigd, en hoe Allah de schande van wie hen kleineert blootlegt, is bekend.', more: FYI_NL, page: 28 },
    { title: 'Waarop het beschermen van hun eer rust', text: 'Een fout maakt het niet toegestaan de eer van een geleerde aan te tasten; alleen de profeten zijn tegen fouten beschermd. Een geleerde die in zijn inspanning de waarheid zoekt, heeft twee beloningen als hij gelijk heeft en één als hij zich vergist, en is dan verontschuldigd. Je hebt baat bij zijn kennis maar volgt hem niet in zijn fout. Geleerden aanvallen is de weg van vernieuwers en zondaars.', more: '', page: 30 },
    { title: 'Wat er misgaat als hun rechten verwaarloosd worden (alleen ter kennisname)', text: 'Kennis verzwakt en onwetendheid en vernieuwing verspreiden zich, verwerpelijke zaken nemen toe, dwalende mensen krijgen de leiding, mensen worden brutaal tegenover de godsdienst en geven fatwa’s zonder kennis, de soenna verdwijnt en waarheid en onwaarheid raken vermengd.', more: FYI_NL, page: 31 }
  ],
  keycards: [
    { kind: 'bewijs', title: 'De voortreffelijkheid van de metgezellen', items: ['De verzen over de uitgewekenen en de helpers (al-Ḥashr 59:8–9)', '"De beste mensen zijn mijn generatie, dan wie op hen volgen, dan wie op hen volgen."'], page: 22, origin: 'boek' },
    { kind: 'definitie', title: 'De betrouwbaarheid van de metgezellen', items: ['Zij zijn allemaal vrij van de beschrijving zondig.'], page: 25, origin: 'boek' },
    { kind: 'opsomming', title: 'Rechten van de geleerden', items: ['respect', 'liefde', 'voor hen bidden', 'je tot hen wenden', 'goed over hen denken', 'oprechte raad', 'hun eer beschermen'], page: 27, origin: 'boek' },
    { kind: 'onderscheid', title: 'De geleerde die zich inspant', items: ['Heeft hij gelijk: twee beloningen.', 'Vergist hij zich: verontschuldigd, met één beloning; je volgt hem niet in zijn fout.'], page: 30, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De metgezellen zijn de besten na de profeten; hun rangorde volgt die van het kalifaat.',
    'Wij houden van hen, zeggen "raḍiya llāhu ʿanhu" en beledigen hen niet; wie hen aanvalt keuren wij af.',
    'Alle metgezellen zijn betrouwbaar.',
    'De geleerden zijn de erfgenamen van de profeten: respecteer hen en wend je tot hen.',
    'De misstap van een geleerde volg je niet, en geeft geen reden om hem aan te vallen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie is volgens het antwoord van ʿAlī de beste mens na de Boodschapper van Allah ﷺ?', options: ['Abū Bakr', 'ʿUmar', 'ʿUthmān', 'ʿAlī zelf'], answer: 0, explain: 'Daarna ʿUmar; over zichzelf zei hij: ik ben slechts een van de moslims.', page: 22 },
    { type: 'mc', q: 'Wat betekent de betrouwbaarheid van de metgezellen?', options: ['dat zij allemaal vrij zijn van de beschrijving zondig', 'dat zij tegen fouten beschermd zijn', 'dat zij allemaal geleerden waren', 'dat zij allemaal uitgewekenen waren'], answer: 0, explain: 'Zoals in het boek.', page: 25 },
    { type: 'tf', q: 'De metgezellen niet beledigen is een van hun rechten.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Tot hun rechten behoort dat je hen niet aanvalt of beledigt.', page: 24 },
    { type: 'mc', q: 'Wie zijn "zij die gezag hebben" volgens Ibn Kathīr?', options: ['de bestuurders en de geleerden', 'de vaders', 'de rijken', 'de ouderen'], answer: 0, explain: 'In zijn uitleg van an-Nisāʾ 4:59.', page: 28 },
    { type: 'tf', q: 'Als een geleerde zich in zijn inspanning vergist, mag je zijn eer aantasten.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Een fout maakt dat niet toegestaan.', page: 30 },
    { type: 'mc', q: 'Tegenover wie is de godsdienst oprechtheid, volgens de hadith?', options: ['Allah, Zijn Boek, Zijn Boodschapper, de leiders van de moslims en hun gewone mensen', 'alleen de geleerden', 'alleen de bestuurders', 'alleen de ouders'], answer: 0, explain: 'Overgeleverd door Muslim.', page: 29 }
  ]),
  note: 'Oefeningen van het boek op p. 26 en 32. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tarbiyah', chapter: '5', unit: 2, ar, nl }
