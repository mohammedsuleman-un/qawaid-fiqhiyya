// Hoofdstukkaart bij العقيدة (٤), eenheid 4: الصحابة وآل البيت (lessen 16–18, boek p. 43–52).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De pagina's 45 en 51 zijn in het boek "alleen ter kennisname".
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٤)، سلسلة زاد العلمية',
  pages: '43–52',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlAqeedah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبو بردة عن أبيه', text: 'النجوم أمنة للسماء، فإذا ذهبت النجوم أتى السماء ما توعد، وأنا أمنة لأصحابي، فإذا ذهبت أتى أصحابي ما يوعدون، وأصحابي أمنة لأمتي، فإذا ذهب أصحابي أتى أمتي ما يوعدون', takhrij: 'رواه مسلم', note: FYI, pages: [45], nl: 'De sterren zijn een veiligheid voor de hemel; als de sterren verdwijnen, komt over de hemel wat haar beloofd is. Ik ben een veiligheid voor mijn metgezellen; als ik ga, komt over hen wat hun beloofd is. En mijn metgezellen zijn een veiligheid voor mijn gemeenschap; als zij gaan, komt over mijn gemeenschap wat haar beloofd is', nlNote: FYI_NL },
  { narrator: 'أبو هريرة', text: 'خير أمتي القرن الذين بعثت فيهم، ثم الذين يلونهم', takhrij: 'رواه مسلم', note: FYI, pages: [45], nl: 'de besten van mijn gemeenschap zijn de generatie waarin ik gezonden ben, daarna die na hen', nlNote: FYI_NL },
  { narrator: 'أبو سعيد الخدري', text: 'لا تسبوا أصحابي، فلو أن أحدكم أنفق مثل أحد ذهبا ما بلغ مد أحدهم، ولا نصيفه', takhrij: 'رواه البخاري، ومثله لمسلم عن أبي هريرة', note: 'وذكره الكتاب في حرمة سب الصحابة بلفظ: متفق عليه.', pages: [45, 50], nl: 'Beschimp mijn metgezellen niet; al gaf een van jullie goud zo groot als de berg Uḥud, dan zou hij nog niet de handvol van een van hen bereiken, en zelfs niet de helft daarvan', nlNote: 'Bij het verbod op het beschimpen van de metgezellen noemt het boek: al-Bukhārī en Muslim.' },
  { narrator: 'جابر', text: 'لا يدخل النار أحد ممن بايع تحت الشجرة', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', note: FYI, pages: [45], nl: 'niemand van wie onder de boom trouw zwoer, komt in het Vuur', nlNote: FYI_NL },
  { narrator: 'ابن مسعود', text: 'إن الله نظر في قلوب العباد، فوجد قلب محمد ﷺ خير قلوب العباد، فاصطفاه لنفسه، فابتعثه برسالته، ثم نظر في قلوب العباد بعد قلب محمد، فوجد قلوب أصحابه خير قلوب العباد، فجعلهم وزراء نبيه، يقاتلون على دينه', takhrij: '', note: 'أثر.', pages: [46], nl: 'Allah keek naar de harten van de dienaren en vond het hart van Muḥammad ﷺ het beste; Hij koos hem uit en zond hem met Zijn boodschap. Daarna keek Hij naar de harten na dat van Muḥammad en vond de harten van zijn metgezellen de beste; Hij maakte hen tot helpers van Zijn Profeet, die voor Zijn godsdienst streden', nlNote: 'Een uitspraak van Ibn Masʿūd.' },
  { narrator: '', text: 'إذا ذكر أصحابي فأمسكوا، وإذا ذكرت النجوم فأمسكوا، وإذا ذكر القدر فأمسكوا', takhrij: 'أخرجه الطبراني وصححه الألباني', note: 'في السكوت عما شجر بين الصحابة.', pages: [46], nl: 'als mijn metgezellen ter sprake komen, houd je in; als de sterren ter sprake komen, houd je in; en als het lot ter sprake komt, houd je in', nlNote: 'Over zwijgen over de geschillen tussen de metgezellen.' },
  { narrator: 'البراء', text: 'الأنصار لا يحبهم إلا مؤمن، ولا يبغضهم إلا منافق، فمن أحبهم أحبه الله، ومن أبغضهم أبغضه الله', takhrij: 'متفق عليه', note: '', pages: [50], nl: 'alleen een gelovige houdt van de Anṣār en alleen een hypocriet haat hen; wie van hen houdt, van hem houdt Allah, en wie hen haat, hem haat Allah', nlNote: '' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim',
  'رواه البخاري، ومثله لمسلم عن أبي هريرة': 'al-Bukhārī; vergelijkbaar bij Muslim van Abū Hurayra',
  'رواه أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; authentiek volgens al-Albānī',
  'أخرجه الطبراني وصححه الألباني': 'aṭ-Ṭabarānī; authentiek volgens al-Albānī',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)'
}
const NARRATOR_NL = { 'أبو بردة عن أبيه': 'Abū Burda, van zijn vader', 'أبو هريرة': 'Abū Hurayra', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'جابر': 'Jābir ibn ʿAbd Allāh', 'ابن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'البراء': 'al-Barāʾ ibn ʿĀzib' }

const PERSONS = [
  ['ibn-hajar-al-asqalani', 'text', [44], 'قال: أصح ما وقفت عليه أن الصحابي من لقي النبي ﷺ مؤمنا به ومات على الإسلام.', 'Zei: de juiste definitie is dat een metgezel iemand is die de Profeet ﷺ gelovig ontmoette en als moslim stierf.'],
  ['abu-bakr-as-siddiq', 'text', [45, 51], 'أفضل الصحابة على الإطلاق.', 'De beste van de metgezellen.'],
  ['umar-ibn-al-khattab', 'text', [45, 51], 'يليه في الفضل، واختار أهل الشورى.', 'Volgt hem in rang; koos de mensen van de shūrā.'],
  ['uthman-ibn-affan', 'text', [45, 46, 51], 'ثالث الخلفاء، واشتد الأمر بعد مقتله.', 'De derde kalief; na zijn dood werden de geschillen heviger.'],
  ['ali-ibn-abi-talib', 'text', [45, 51, 52], 'رابع الخلفاء؛ كفره الخوارج، وغلت فيه الرافضة.', 'De vierde kalief; de Khawārij verklaarden hem ongelovig en de Rāfiḍa overdreven over hem.'],
  ['abu-hurayra', 'text', [45], 'روى «خير أمتي القرن الذين بعثت فيهم».', 'Overleverde: "de besten van mijn gemeenschap zijn mijn generatie".'],
  ['abu-said-al-khudri', 'text', [45], 'روى «لا تسبوا أصحابي».', 'Overleverde: "beschimp mijn metgezellen niet".'],
  ['jabir-ibn-abdallah', 'text', [45], 'روى «لا يدخل النار أحد ممن بايع تحت الشجرة».', 'Overleverde: "niemand die onder de boom trouw zwoer, komt in het Vuur".'],
  ['ahmad-ibn-hanbal', 'text', [45, 47, 49], 'رتب فضل الصحابة، وقال في علي ومعاوية: ما أقول فيهم إلا الحسنى.', 'Zette de rangorde van de metgezellen uiteen en zei over ʿAlī en Muʿāwiya: ik zeg over hen alleen het beste.'],
  ['ibn-masud', 'text', [46], 'قال: نظر الله في قلوب العباد فوجد قلوب أصحاب محمد خير القلوب.', 'Zei: Allah vond de harten van de metgezellen van Muḥammad de beste.'],
  ['an-nawawi', 'text', [46, 48], 'قال: فضيلة الصحبة ولو لحظة لا يوازيها عمل؛ وبين مذهب أهل السنة في تأويل قتالهم.', 'Zei: de deugd van het gezelschap, al is het een ogenblik, wordt door geen daad geëvenaard; en legde de houding van ahl as-sunna over hun strijd uit.'],
  ['ibn-as-salah', 'text', [46], 'قال: الأمة مجمعة على تعديل جميع الصحابة.', 'Zei: de umma is het eens dat alle metgezellen betrouwbaar zijn.'],
  ['ibn-taymiyya', 'text', [46, 48], 'قال: الصحابة أجمعون عدول بتعديل الله، والمروي في مساويهم منه كذب ومنه ما غير.', 'Zei: alle metgezellen zijn betrouwbaar doordat Allah hen zo noemde; wat over hun gebreken wordt verteld, is deels gelogen en deels veranderd.'],
  ['umar-ibn-abd-al-aziz', 'text', [46], 'قال: تلك دماء طهر الله يدي منها؛ أفلا أطهر منها لساني؟', 'Zei: Allah heeft mijn hand van dat bloed rein gehouden; zou ik mijn tong er dan niet rein van houden?'],
  ['muawiya-ibn-abi-sufyan', 'text', [47], 'سئل أحمد عما كان بينه وبين علي.', 'Aan Aḥmad werd gevraagd naar wat er tussen hem en ʿAlī gebeurde.'],
  ['al-qurtubi', 'text', [47], 'قال: لا يجوز أن ينسب إلى أحد من الصحابة خطأ مقطوع به؛ إذ كانوا كلهم اجتهدوا.', 'Zei: men mag geen enkele metgezel een zekere fout toeschrijven, want zij deden allen hun uiterste best (ijtihād).'],
  ['yahya-al-amiri', 'text', [47], 'قال: طريقة العارفين الاعتذار عن المعائب، وطريقة المنافقين تتبع المثالب.', 'Zei: wie kennis heeft, verontschuldigt gebreken; de hypocriet zoekt fouten.'],
  ['ibn-batta', 'text', [47], 'قال: نكف عما شجر بينهم، فقد غفر الله لهم وأمرنا بالاستغفار لهم.', 'Zei: wij zwijgen over hun geschillen; Allah heeft hun vergeven en ons opgedragen om vergeving voor hen te vragen.'],
  ['as-sabuni', 'text', [49], 'قال: يرون الكف عما شجر بينهم، والترحم على جميعهم.', 'Zei: zij zwijgen over hun geschillen en vragen voor hen allen om genade.'],
  ['ibn-kathir', 'text', [49, 52], 'قال: فيا ويل من أبغضهم أو سبهم؛ وينبغي أن يسوى بين الصحابة في «عليه السلام» و«كرم الله وجهه».', 'Zei: wee wie hen haat of beschimpt; en men moet de metgezellen gelijk behandelen bij "vrede zij met hem" en "moge Allah zijn gezicht eren".'],
  ['abu-zura-ar-razi', 'text', [49], 'قال: إذا رأيت الرجل ينتقص أحدا من الصحابة فاعلم أنه زنديق.', 'Zei: als je iemand een metgezel ziet kleineren, weet dan dat hij een zindīq is.'],
  ['malik-ibn-anas', 'text', [49, 50], 'قال: الذي يشتم الصحابة ليس له نصيب في الإسلام، ومن في قلبه غيظ عليهم أصابته آية الفتح.', 'Zei: wie de metgezellen uitscheldt, heeft geen deel aan de islam; wie wrok tegen hen heeft, op hem slaat het vers van al-Fatḥ.'],
  ['al-bara-ibn-azib', 'text', [50], 'روى حديث «الأنصار لا يحبهم إلا مؤمن».', 'Overleverde: "alleen een gelovige houdt van de Anṣār".'],
  ['ibn-uthaymin', 'text', [50], 'قال: سب الصحابة قدح في الصحابة وفي النبي ﷺ وفي شريعة الله وفي ذات الله.', 'Zei: de metgezellen beschimpen is een aanval op hen, op de Profeet ﷺ, op de sharīʿa en op Allah Zelf.'],
  ['aisha', 'text', [51], 'من أمهات المؤمنين اللاتي انتقصتهن الرافضة.', 'Een van de moeders van de gelovigen die de Rāfiḍa kleineren.'],
  ['muslim', 'takhrij', [45], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['al-bukhari', 'takhrij', [45, 50], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [45], 'روى حديث أهل الشجرة.', 'Overleverde de hadith over wie onder de boom trouw zwoer.'],
  ['at-tirmidhi', 'takhrij', [45], 'روى حديث أهل الشجرة.', 'Overleverde de hadith over wie onder de boom trouw zwoer.'],
  ['at-tabarani', 'takhrij', [46], 'روى حديث «إذا ذكر أصحابي فأمسكوا».', 'Overleverde: "als mijn metgezellen ter sprake komen, houd je in".'],
  ['al-albani', 'takhrij', [45, 46], 'صحح أحاديث من الوحدة.', 'Verklaarde hadith van deze eenheid authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'الصحابة وآل البيت',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف الصحابي وآل البيت، وفضل الصحابة وعدالتهم، وضوابط موقف المسلم مما شجر بينهم، وحرمة سبهم ولوازمه، والواجب تجاههم، ووسطية أهل السنة في آل البيت.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'الصحابة وآل البيت', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'التعريف والفضل', sub: 'الدرس ١٦', page: 44, children: ['الصحابي', 'آل البيت', 'عدالتهم'] },
      { label: 'ما شجر بينهم', sub: 'الدرس ١٧', page: 46, children: ['السكوت', 'إحسان الظن', 'الاجتهاد', 'الاستغفار'] },
      { label: 'حرمة السب', sub: 'الدرس ١٨', page: 49, children: ['أدلتها', 'لوازم السب'] },
      { label: 'الواجب والوسطية', sub: 'الدرس ١٨', page: 51, children: ['الواجب تجاههم', 'بين الخوارج والرافضة'] }
    ]
  },
  points: [
    { text: 'الصحابي: من لقي النبي ﷺ مؤمنًا به ومات على الإسلام، طالت صحبته أو قصرت.', page: 44 },
    { text: 'آل البيت: الذين حرمت عليهم الصدقة، كآل علي وآل عقيل وآل جعفر وآل عباس.', page: 44 },
    { text: 'الصحابة أفضل البشر بعد الأنبياء، وكلهم عدول بتعديل الله لهم بإجماع الأمة.', page: 44 },
    { text: 'أفضلهم أبو بكر ثم عمر ثم عثمان ثم علي، ثم بقية العشرة، ثم أهل بدر، ثم أحد، ثم بيعة الرضوان.', page: 45 },
    { text: 'الموقف مما شجر بينهم: السكوت، وإحسان الظن، والاعتذار، والاستغفار، واعتقاد أنه عن اجتهاد.', page: 46 },
    { text: 'اتفق العلماء على حرمة سب الصحابة أو الطعن فيهم.', page: 49 },
    { text: 'سب الصحابة قدح فيهم وفي النبي ﷺ وفي الشريعة وفي الله عز وجل.', page: 50 },
    { text: 'أهل السنة وسط في آل البيت بين جفاء الخوارج وغلو الرافضة.', page: 51 }
  ],
  terms: [
    { term: 'الصحابي', translit: 'aṣ-ṣaḥābī', meaning: 'لغة من الصحبة، والصاحب: المعاشر.', explanation: 'اصطلاحًا: من لقي النبي ﷺ مؤمنًا به ومات على الإسلام.', notes: [], page: 44 },
    { term: 'آل البيت', translit: 'āl al-bayt', meaning: 'آل الرجل: أهل بيته وقرابته.', explanation: 'اصطلاحًا: الذين حرمت عليهم الصدقة من آل بيت النبي ﷺ.', notes: [], page: 44 },
    { term: 'عدالة الصحابة', translit: 'ʿadālat aṣ-ṣaḥāba', meaning: 'أنهم كلهم عدول بتعديل الله ورسوله لهم.', explanation: 'قال ابن الصلاح: الأمة مجمعة على تعديل جميع الصحابة.', notes: [], page: 46 },
    { term: 'ما شجر بين الصحابة', translit: 'mā shajara bayna aṣ-ṣaḥāba', meaning: 'ما وقع بينهم من نزاع وقتال، كصفين والجمل.', explanation: 'الواجب السكوت عنه وإحسان الظن بهم.', notes: [], page: 46 },
    { term: 'بيعة الرضوان', translit: 'bayʿat ar-riḍwān', meaning: 'البيعة تحت الشجرة بالحديبية.', explanation: '«لا يدخل النار أحد ممن بايع تحت الشجرة».', notes: [], page: 45 },
    { term: 'الرافضة', translit: 'ar-rāfiḍa', meaning: 'طائفة غلت في علي وأهل البيت وادعت لهم العصمة وعلم الغيب.', explanation: 'وانتقصوا الخلفاء الثلاثة وأمهات المؤمنين وسائر الصحابة.', notes: [], page: 51 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'مراتب الصحابة في الفضل',
      intro: 'الصحابة متفاضلون، كما في الكتاب.',
      nodes: [
        { label: 'أبو بكر', page: 45 },
        { label: 'عمر', page: 45 },
        { label: 'عثمان', page: 45 },
        { label: 'علي', page: 45 },
        { label: 'بقية العشرة المبشرين بالجنة', page: 45 },
        { label: 'أهل بدر', page: 45 },
        { label: 'أهل أحد', page: 45 },
        { label: 'أهل بيعة الرضوان', page: 45 }
      ]
    },
    {
      type: 'cards',
      title: 'ضوابط الموقف مما شجر بينهم',
      intro: 'ثمانية ضوابط كما في الدرس السابع عشر.',
      nodes: [
        { label: 'السكوت عما شجر بينهم', sub: '«إذا ذكر أصحابي فأمسكوا»', page: 46 },
        { label: 'إحسان الظن بهم', sub: '«ما أقول فيهم إلا الحسنى»', page: 47 },
        { label: 'الاعتذار عنهم والتماس المخارج', page: 47 },
        { label: 'الدعاء والاستغفار لهم', sub: '[الحشر: ١٠]', page: 47 },
        { label: 'أن ما وقع كان عن اجتهاد', sub: 'لا لطلب دنيا ولا رئاسة', page: 48 },
        { label: 'تحري الأخبار الصحيحة', sub: 'واجتناب الكذب عليهم', page: 48 },
        { label: 'الإقرار بعظيم مناقبهم', sub: 'وما وقع مغفور في جانبها', page: 48 },
        { label: 'موالاتهم جميعًا والترضي عنهم', page: 49 }
      ]
    },
    {
      type: 'cards',
      title: 'لوازم سب الصحابة',
      intro: 'قال ابن عثيمين: ليس جرحًا في الصحابة فقط.',
      nodes: [
        { label: 'قدح في الصحابة', page: 50 },
        { label: 'قدح في الرسول ﷺ', sub: 'إذ يكون أصحابه وخلفاؤه من شرار الخلق', page: 50 },
        { label: 'قدح في الشريعة', sub: 'لأنهم نقلتها إلينا', page: 50 },
        { label: 'قدح في الله', sub: 'إذ بعث نبيه في شرار الخلق واختارهم لصحبته', page: 50 }
      ]
    },
    {
      type: 'compare',
      title: 'وسطية أهل السنة في آل البيت',
      intro: 'بين الغلو والجفاء.',
      columns: ['الخوارج', 'الرافضة', 'أهل السنة'],
      rows: [
        { label: 'في علي', cells: ['كفروه وكفروا من شارك في التحكيم', 'غلوا فيه وادعوا له العصمة وعلم الغيب', 'يحبونه وينزلونه منزلته'] },
        { label: 'في سائر الصحابة', cells: ['تبرؤوا ممن شارك في التحكيم', 'انتقصوا الخلفاء الثلاثة وعائشة وحفصة', 'يحبونهم جميعًا ولا يدعون لهم عصمة'] }
      ],
      page: 51
    }
  ],
  sections: [
    { title: 'من يدخل في الصحابة؟', text: 'يدخل فيمن لقي النبي ﷺ من طالت مجالسته له أو قصرت، ومن روى عنه أو لم يرو، ومن غزا معه أو لم يغز.', more: '', page: 44 },
    { title: 'فضيلة الصحبة', text: 'قال النووي: «وفضيلة الصحبة -ولو لحظة- لا يوازيها عمل، ولا تنال درجتها بشيء، والفضائل لا تؤخذ بالقياس».', more: '', page: 46 },
    { title: 'دواء العيون ترك مسها', text: 'سئل عمر بن عبد العزيز عن القتال بين الصحابة فقال: «تلك دماء طهر الله يدي منها؛ أفلا أطهر منها لساني؟ مثل أصحاب رسول الله ﷺ مثل العيون، ودواء العيون ترك مسها».', more: '', page: 46 },
    { title: 'مجتهدون معذورون', text: 'قال النووي: «ومذهب أهل السنة والحق إحسان الظن بهم، والإمساك عما شجر بينهم، وتأويل قتالهم، وأنهم مجتهدون متأولون لم يقصدوا معصية ولا محض الدنيا».', more: 'وكان بعضهم مصيبًا، وبعضهم مخطئًا معذورًا؛ والمجتهد إذا أخطأ لا إثم عليه.', page: 48 },
    { title: 'الواجب تجاه الصحابة (للاطلاع فقط)', text: 'أن يعتقد أنهم خير البشر بعد النبي ﷺ، ويقر بفضائلهم، ويسكت عما شجر بينهم، ويشهد لمن شهد له الرسول ﷺ بالجنة، ولا يرفع أحدًا فوق منزلته، ولا يدعي عصمتهم، ويتولاهم كلهم ويتبرأ ممن سبهم.', more: FYI, page: 51 },
    { title: '«عليه السلام» و«كرم الله وجهه»', text: 'قال ابن كثير: غلب في عبارة كثير من النساخ أن يفرد علي بذلك دون سائر الصحابة، ومعناه صحيح، لكن ينبغي أن يسوى بين الصحابة فيه؛ فالشيخان وعثمان أولى بذلك منه.', more: '', page: 52 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الصحابي', items: ['من لقي النبي ﷺ مؤمنًا به، ومات على الإسلام.'], page: 44, origin: 'boek' },
    { kind: 'definitie', title: 'آل البيت', items: ['الذين حرمت عليهم الصدقة من آل بيت النبي ﷺ.'], page: 44, origin: 'boek' },
    { kind: 'regel', title: 'عدالة الصحابة', items: ['الصحابة كلهم عدول بتعديل الله لهم، بإجماع الأمة.'], page: 46, origin: 'boek' },
    { kind: 'opsomming', title: 'الخلفاء الأربعة بالترتيب', items: ['أبو بكر', 'عمر', 'عثمان', 'علي'], page: 45, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الصحابي: من لقي النبي ﷺ مؤمنًا به ومات على الإسلام.',
    'آل البيت: من حرمت عليهم الصدقة.',
    'الصحابة كلهم عدول، وأفضلهم أبو بكر ثم عمر ثم عثمان ثم علي.',
    'نسكت عما شجر بينهم ونحسن الظن بهم ونستغفر لهم.',
    'سب الصحابة حرام، وهو قدح في النبي ﷺ والشريعة والله.',
    'أهل السنة وسط بين الخوارج والرافضة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أصح تعريف للصحابي عند ابن حجر؟', options: ['من لقي النبي ﷺ مؤمنًا به ومات على الإسلام', 'من روى عن النبي ﷺ', 'من غزا مع النبي ﷺ', 'من طالت صحبته للنبي ﷺ'], answer: 0, explain: 'طالت مجالسته أو قصرت.', page: 44 },
    { type: 'mc', q: 'من آل البيت اصطلاحًا؟', options: ['الذين حرمت عليهم الصدقة', 'كل من أسلم من قريش', 'أزواج النبي ﷺ فقط', 'أهل المدينة'], answer: 0, explain: 'كآل علي وآل عقيل وآل جعفر وآل عباس.', page: 44 },
    { type: 'tf', q: 'الصحابة معصومون من الخطأ.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هم بشر غير معصومين، مع علو منزلتهم.', page: 46 },
    { type: 'mc', q: 'من أفضل الصحابة بعد أبي بكر وعمر؟', options: ['عثمان', 'علي', 'أهل بدر', 'أهل بيعة الرضوان'], answer: 0, explain: 'أبو بكر ثم عمر ثم عثمان ثم علي.', page: 45 },
    { type: 'mc', q: 'ماذا قال عمر بن عبد العزيز عن القتال بين الصحابة؟', options: ['تلك دماء طهر الله يدي منها، أفلا أطهر منها لساني؟', 'يجب تتبعه ونشره', 'كلهم مخطئون', 'لا أدري'], answer: 0, explain: 'ودواء العيون ترك مسها.', page: 46 },
    { type: 'mc', q: 'على أي أساس وقع ما شجر بين الصحابة؟', options: ['الاجتهاد الشرعي', 'طلب الدنيا', 'طلب الرئاسة', 'العداوة'], answer: 0, explain: 'كما في الضابط الخامس.', page: 48 },
    { type: 'tf', q: 'سب الصحابة قدح في الشريعة نفسها.', options: ['صواب', 'خطأ'], answer: 0, explain: 'لأنهم الواسطة في نقلها.', page: 50 },
    { type: 'mc', q: 'من الذين غلوا في علي وادعوا له العصمة؟', options: ['الرافضة', 'الخوارج', 'أهل السنة', 'المعتزلة'], answer: 0, explain: 'وأهل السنة وسط بين الغلو والجفاء.', page: 51 }
  ]),
  note: 'نشاط الكتاب في صفحة ٥٢. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'De metgezellen en het huisgezin van de Profeet',
  subtitle: 'Drie lessen samen op één pagina',
  summary: 'Wie een metgezel (ṣaḥābī) is en wie tot het huisgezin (āl al-bayt) behoort, de deugd en betrouwbaarheid van de metgezellen, de houding tegenover hun geschillen, het verbod om hen te beschimpen en wat dat meebrengt, wat een moslim tegenover hen verplicht is, en het midden dat ahl as-sunna houden ten opzichte van het huisgezin.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (4), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De metgezellen en het huisgezin', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Definitie en deugd', sub: 'les 16', page: 44, children: ['de metgezel', 'het huisgezin', 'betrouwbaarheid'] },
      { label: 'Hun geschillen', sub: 'les 17', page: 46, children: ['zwijgen', 'goed denken', 'ijtihād', 'vergeving vragen'] },
      { label: 'Verbod op beschimpen', sub: 'les 18', page: 49, children: ['bewijzen', 'wat het meebrengt'] },
      { label: 'Plicht en midden', sub: 'les 18', page: 51, children: ['plicht tegenover hen', 'tussen Khawārij en Rāfiḍa'] }
    ]
  },
  points: [
    { text: 'Een metgezel is wie de Profeet ﷺ gelovig ontmoette en als moslim stierf, of het gezelschap nu lang of kort was.', page: 44 },
    { text: 'Het huisgezin zijn zij aan wie de zakāt verboden is, zoals de families van ʿAlī, ʿAqīl, Jaʿfar en al-ʿAbbās.', page: 44 },
    { text: 'De metgezellen zijn de beste mensen na de profeten; volgens de consensus zijn zij allen betrouwbaar, omdat Allah hen zo noemde.', page: 44 },
    { text: 'De beste is Abū Bakr, dan ʿUmar, ʿUthmān en ʿAlī, dan de rest van de tien, dan Badr, Uḥud en de trouw onder de boom.', page: 45 },
    { text: 'Over hun geschillen: zwijgen, goed over hen denken, hen verontschuldigen, vergeving voor hen vragen en weten dat het ijtihād was.', page: 46 },
    { text: 'De geleerden zijn het eens dat het verboden is de metgezellen te beschimpen of aan te vallen.', page: 49 },
    { text: 'Hen beschimpen is een aanval op hen, op de Profeet ﷺ, op de sharīʿa en op Allah.', page: 50 },
    { text: 'Ahl as-sunna houden het midden tussen de vijandigheid van de Khawārij en de overdrijving van de Rāfiḍa.', page: 51 }
  ],
  terms: [
    { term: 'الصحابي', translit: 'aṣ-ṣaḥābī', meaning: 'Metgezel. Taal: van ṣuḥba, gezelschap.', explanation: 'Vakterm: wie de Profeet ﷺ gelovig ontmoette en als moslim stierf.', notes: [], page: 44 },
    { term: 'آل البيت', translit: 'āl al-bayt', meaning: 'Het huisgezin; āl van iemand is zijn familie en verwanten.', explanation: 'Vakterm: de verwanten van de Profeet ﷺ aan wie de zakāt verboden is.', notes: [], page: 44 },
    { term: 'عدالة الصحابة', translit: 'ʿadālat aṣ-ṣaḥāba', meaning: 'De betrouwbaarheid van de metgezellen: zij zijn allen betrouwbaar doordat Allah en Zijn Boodschapper hen zo noemden.', explanation: 'Ibn aṣ-Ṣalāḥ: de umma is het eens over de betrouwbaarheid van alle metgezellen.', notes: [], page: 46 },
    { term: 'ما شجر بين الصحابة', translit: 'mā shajara bayna aṣ-ṣaḥāba', meaning: 'De geschillen en gevechten tussen de metgezellen, zoals bij Ṣiffīn en de Kameelslag.', explanation: 'Plicht: erover zwijgen en goed over hen denken.', notes: [], page: 46 },
    { term: 'بيعة الرضوان', translit: 'bayʿat ar-riḍwān', meaning: 'De trouweed onder de boom bij al-Ḥudaybiya.', explanation: '"Niemand van wie onder de boom trouw zwoer, komt in het Vuur."', notes: [], page: 45 },
    { term: 'الرافضة', translit: 'ar-rāfiḍa', meaning: 'Een groep die overdreef over ʿAlī en het huisgezin en hun onfeilbaarheid en kennis van het verborgene toeschreef.', explanation: 'Zij kleineren de eerste drie kaliefen, de moeders van de gelovigen en de andere metgezellen.', notes: [], page: 51 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Rangorde van de metgezellen',
      intro: 'De metgezellen verschillen in rang, zoals in het boek.',
      nodes: [
        { label: 'Abū Bakr', page: 45 },
        { label: 'ʿUmar', page: 45 },
        { label: 'ʿUthmān', page: 45 },
        { label: 'ʿAlī', page: 45 },
        { label: 'De rest van de tien met het Paradijs verblijd', page: 45 },
        { label: 'De strijders van Badr', page: 45 },
        { label: 'De strijders van Uḥud', page: 45 },
        { label: 'De trouw onder de boom', page: 45 }
      ]
    },
    {
      type: 'cards',
      title: 'Maatstaven bij hun geschillen',
      intro: 'Acht maatstaven, zoals in les 17.',
      nodes: [
        { label: 'Zwijgen over hun geschillen', sub: '"Als mijn metgezellen ter sprake komen, houd je in"', page: 46 },
        { label: 'Goed over hen denken', sub: '"Ik zeg over hen alleen het beste"', page: 47 },
        { label: 'Hen verontschuldigen', page: 47 },
        { label: 'Smeken en vergeving vragen voor hen', sub: 'al-Ḥashr 59:10', page: 47 },
        { label: 'Het was ijtihād', sub: 'niet uit wereldse begeerte of machtszucht', page: 48 },
        { label: 'Alleen betrouwbare berichten', sub: 'leugens over hen vermijden', page: 48 },
        { label: 'Hun grote verdiensten erkennen', sub: 'wat gebeurde, is daarnaast vergeven', page: 48 },
        { label: 'Hen allen liefhebben en "moge Allah tevreden zijn" zeggen', page: 49 }
      ]
    },
    {
      type: 'cards',
      title: 'Wat het beschimpen meebrengt',
      intro: 'Ibn ʿUthaymīn: het is niet alleen een aanval op de metgezellen.',
      nodes: [
        { label: 'Een aanval op de metgezellen', page: 50 },
        { label: 'Een aanval op de Profeet ﷺ', sub: 'alsof zijn metgezellen en opvolgers de slechtste mensen waren', page: 50 },
        { label: 'Een aanval op de sharīʿa', sub: 'want zij hebben haar aan ons doorgegeven', page: 50 },
        { label: 'Een aanval op Allah', sub: 'alsof Hij Zijn Profeet onder de slechtsten zond', page: 50 }
      ]
    },
    {
      type: 'compare',
      title: 'Het midden van ahl as-sunna',
      intro: 'Tussen overdrijving en vijandigheid.',
      columns: ['Khawārij', 'Rāfiḍa', 'Ahl as-sunna'],
      rows: [
        { label: 'Over ʿAlī', cells: ['verklaarden hem en de deelnemers aan de arbitrage ongelovig', 'overdreven en schreven hem onfeilbaarheid en kennis van het verborgene toe', 'hebben hem lief en geven hem zijn plaats'] },
        { label: 'Over de andere metgezellen', cells: ['wezen wie aan de arbitrage deelnam af', 'kleineren de drie kaliefen, ʿĀʾisha en Ḥafṣa', 'hebben hen allen lief, zonder onfeilbaarheid toe te schrijven'] }
      ],
      page: 51
    }
  ],
  sections: [
    { title: 'Wie is een metgezel?', text: 'Iedereen die de Profeet ﷺ gelovig ontmoette: of hij nu lang of kort bij hem zat, van hem overleverde of niet, en met hem streed of niet.', more: '', page: 44 },
    { title: 'De deugd van het gezelschap', text: 'an-Nawawī: "De deugd van het gezelschap – al is het maar een ogenblik – wordt door geen daad geëvenaard; haar rang wordt door niets bereikt, en deugden worden niet door redenering afgeleid."', more: '', page: 46 },
    { title: 'Het medicijn voor de ogen', text: 'Aan ʿUmar ibn ʿAbd al-ʿAzīz werd gevraagd naar de strijd tussen de metgezellen. Hij zei: "Allah heeft mijn hand van dat bloed rein gehouden; zou ik mijn tong er dan niet rein van houden? De metgezellen zijn als de ogen, en het medicijn voor de ogen is ze niet aanraken."', more: '', page: 46 },
    { title: 'IJtihād, en daarom verontschuldigd', text: 'an-Nawawī: "De weg van ahl as-sunna is goed over hen denken, zwijgen over hun geschillen en hun strijd uitleggen: zij deden hun uiterste best, bedoelden geen zonde en niet de wereld."', more: 'Sommigen hadden gelijk, anderen vergisten zich en zijn verontschuldigd; wie ijtihād doet en zich vergist, heeft geen zonde.', page: 48 },
    { title: 'Plicht tegenover de metgezellen (alleen ter kennisname)', text: 'Geloven dat zij de beste mensen zijn na de Profeet ﷺ, hun deugden erkennen, zwijgen over hun geschillen, getuigen voor wie de Profeet ﷺ het Paradijs beloofde, niemand boven zijn rang verheffen, geen onfeilbaarheid toeschrijven, hen allen liefhebben en afstand nemen van wie hen beschimpt.', more: FYI_NL, page: 51 },
    { title: '"Vrede zij met hem" en "moge Allah zijn gezicht eren"', text: 'Ibn Kathīr: veel kopiisten gebruikten dit alleen voor ʿAlī. De betekenis is juist, maar men moet de metgezellen hierin gelijk behandelen; Abū Bakr, ʿUmar en ʿUthmān hebben er meer recht op.', more: '', page: 52 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Metgezel', items: ['Wie de Profeet ﷺ gelovig ontmoette en als moslim stierf.'], page: 44, origin: 'boek' },
    { kind: 'definitie', title: 'Het huisgezin', items: ['De verwanten van de Profeet ﷺ aan wie de zakāt verboden is.'], page: 44, origin: 'boek' },
    { kind: 'regel', title: 'Betrouwbaarheid van de metgezellen', items: ['Alle metgezellen zijn betrouwbaar doordat Allah hen zo noemde; daarover is consensus.'], page: 46, origin: 'boek' },
    { kind: 'opsomming', title: 'De vier kaliefen op volgorde', items: ['Abū Bakr', 'ʿUmar', 'ʿUthmān', 'ʿAlī'], page: 45, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Metgezel: wie de Profeet ﷺ gelovig ontmoette en als moslim stierf.',
    'Huisgezin: wie de zakāt niet mag ontvangen.',
    'Alle metgezellen zijn betrouwbaar; de beste zijn Abū Bakr, ʿUmar, ʿUthmān en ʿAlī.',
    'Over hun geschillen zwijgen we, we denken goed over hen en vragen vergeving voor hen.',
    'Hen beschimpen is verboden en een aanval op de Profeet ﷺ, de sharīʿa en Allah.',
    'Ahl as-sunna houden het midden tussen de Khawārij en de Rāfiḍa.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is volgens Ibn Ḥajar de juiste definitie van een metgezel?', options: ['wie de Profeet ﷺ gelovig ontmoette en als moslim stierf', 'wie van de Profeet ﷺ overleverde', 'wie met de Profeet ﷺ streed', 'wie lang bij de Profeet ﷺ was'], answer: 0, explain: 'Of het gezelschap nu lang of kort was.', page: 44 },
    { type: 'mc', q: 'Wie behoren als vakterm tot het huisgezin?', options: ['zij aan wie de zakāt verboden is', 'iedereen uit Quraysh die moslim werd', 'alleen de vrouwen van de Profeet ﷺ', 'de bewoners van Medina'], answer: 0, explain: 'Zoals de families van ʿAlī, ʿAqīl, Jaʿfar en al-ʿAbbās.', page: 44 },
    { type: 'tf', q: 'De metgezellen zijn onfeilbaar.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Zij zijn mensen en niet onfeilbaar, ondanks hun hoge rang.', page: 46 },
    { type: 'mc', q: 'Wie is de beste metgezel na Abū Bakr en ʿUmar?', options: ['ʿUthmān', 'ʿAlī', 'de strijders van Badr', 'de trouw onder de boom'], answer: 0, explain: 'Abū Bakr, dan ʿUmar, dan ʿUthmān, dan ʿAlī.', page: 45 },
    { type: 'mc', q: 'Wat zei ʿUmar ibn ʿAbd al-ʿAzīz over de strijd tussen de metgezellen?', options: ['Allah hield mijn hand rein van dat bloed; zou ik mijn tong er niet rein van houden?', 'men moet het uitzoeken en verspreiden', 'zij hadden allemaal ongelijk', 'ik weet het niet'], answer: 0, explain: 'Het medicijn voor de ogen is ze niet aanraken.', page: 46 },
    { type: 'mc', q: 'Waaruit kwamen de geschillen tussen de metgezellen voort?', options: ['religieuze ijtihād', 'wereldse begeerte', 'machtszucht', 'vijandschap'], answer: 0, explain: 'Zoals de vijfde maatstaf zegt.', page: 48 },
    { type: 'tf', q: 'De metgezellen beschimpen is een aanval op de sharīʿa zelf.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Want zij hebben haar aan ons doorgegeven.', page: 50 },
    { type: 'mc', q: 'Wie overdreven over ʿAlī en schreven hem onfeilbaarheid toe?', options: ['de Rāfiḍa', 'de Khawārij', 'ahl as-sunna', 'de Muʿtazila'], answer: 0, explain: 'Ahl as-sunna houden het midden tussen overdrijving en vijandigheid.', page: 51 }
  ]),
  note: 'Oefening van het boek op p. 52. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n4-aqeedah', chapter: '16', unit: 4, ar, nl }
