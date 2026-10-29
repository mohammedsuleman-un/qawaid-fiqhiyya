// Hoofdstukkaart bij التفسير (١), eenheid 1: مدخل (lessen 1–10, boek p. 9–32).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Bij de smeekbede voor Ibn ʿAbbās noemt het boek al-Bukhārī
// en Muslim voor de hele bewoording; hier staat het eerste deel met al-Bukhārī, en de toevoeging
// met een neutrale opmerking (zoals in de les).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (١)، سلسلة زاد العلمية',
  pages: '9–32',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'اللهم فقهه في الدين', takhrij: 'أخرجه البخاري', note: 'دعا به النبي ﷺ لابن عباس، فكان حبر الأمة وترجمان القرآن. وفي الكتاب زيادة: «وعلمه التأويل» أي التفسير.', pages: [11], nl: 'O Allah, geef hem begrip van de godsdienst', nlNote: 'De smeekbede van de Profeet ﷺ voor Ibn ʿAbbās, die daardoor "de geleerde van de umma en de tolk van de Koran" werd. Het boek voegt toe: "en leer hem de uitleg (taʾwīl)", dat wil zeggen de tafsīr.' },
  { narrator: '', text: 'صلوا كما رأيتموني أصلي', takhrij: 'أخرجه البخاري', note: 'من تفسير النبي ﷺ لما أجمل في القرآن: ﴿وأقيموا الصلاة﴾.', pages: [15], nl: 'bid zoals jullie mij zien bidden', nlNote: 'Een voorbeeld van hoe de Profeet ﷺ uitlegde wat de Koran in het algemeen noemt: "verricht het gebed".' },
  { narrator: 'ابن مسعود', text: 'إذا حدث أمر عند ذي العرش سمع من دونه من الملائكة صوتا كجر السلسلة على الصفا فيغشى عليهم، فإذا ذهب الفزع عن قلوبهم تنادوا: ﴿ماذا قال ربكم﴾؟ فيقول من شاء: ﴿قال الحق وهو العلي الكبير﴾', takhrij: '', note: 'أثر في تفسير [سبأ: ٢٣]، ذكره الكتاب بلا عزو.', pages: [16], nl: 'Als er bij de Bezitter van de Troon iets gebeurt, horen de engelen onder Hem een geluid als een ketting die over een rots wordt gesleept, en ze vallen flauw. Als de schrik uit hun harten verdwenen is, roepen ze elkaar toe: "Wat zei jullie Heer?" Dan zegt wie Hij wil: "De waarheid, en Hij is de Verhevene, de Grote"', nlNote: 'Een uitspraak van Ibn Masʿūd bij Sabaʾ 34:23; het boek noemt geen bron.' },
  { narrator: 'ابن عباس', text: 'إن الله ليرفع ذرية المؤمن في درجته، وإن كانوا دونه في العمل، لتقر بهم عينه', takhrij: '', note: 'أثر في تفسير [الطور: ٢١]، ذكره الكتاب بلا عزو، ومنه أخذ سعيد بن جبير تفسيره.', pages: [17], nl: 'Allah verheft de nakomelingen van de gelovige tot zijn rang, ook al deden ze minder dan hij, zodat hij er vreugde aan heeft', nlNote: 'Een uitspraak van Ibn ʿAbbās bij aṭ-Ṭūr 52:21; het boek noemt geen bron. Saʿīd ibn Jubayr nam zijn uitleg hiervan over.' }
]

const TAKHRIJ_NL = { 'أخرجه البخاري': 'al-Bukhārī' }
const NARRATOR_NL = { 'ابن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'ابن عباس': 'Ibn ʿAbbās' }

const PERSONS = [
  ['ibn-abbas', 'text', [11, 16, 17], 'دعا له النبي ﷺ فكان ترجمان القرآن؛ فسر ﴿أو لامستم النساء﴾ بالجماع، و﴿يعلم السر وأخفى﴾.', 'De Profeet ﷺ bad voor hem en hij werd "de tolk van de Koran"; hij legde "of als jullie de vrouwen aanraakten" uit als geslachtsgemeenschap, en ook "Hij kent het geheim en wat nog verborgener is".'],
  ['ibn-masud', 'text', [16], 'فسر [سبأ: ٢٣].', 'Legde Sabaʾ 34:23 uit.'],
  ['said-ibn-jubayr', 'text', [17], 'فسر [الطور: ٢١] مستفيدا من ابن عباس.', 'Legde aṭ-Ṭūr 52:21 uit, op basis van Ibn ʿAbbās.'],
  ['at-tabari', 'text', [18, 20, 29], 'شيخ المفسرين، صاحب «جامع البيان» (ت ٣١٠هـ)، ويؤخذ عليه كثرة الإسرائيليات.', 'De shaykh van de uitleggers, auteur van Jāmiʿ al-bayān (overl. 310 AH); kritiekpunt: veel Israëlitische verhalen.'],
  ['al-baghawi', 'text', [18, 22, 29], 'صاحب «معالم التنزيل» (ت ٥١٦هـ)، اختصره من الثعلبي وجنبه الموضوعات.', 'Auteur van Maʿālim at-tanzīl (overl. 516 AH), een samenvatting van ath-Thaʿlabī zonder verzonnen hadith.'],
  ['al-qurtubi', 'text', [18, 23], 'صاحب «الجامع لأحكام القرآن» (ت ٦٧١هـ)، لا يتعصب لمذهب.', 'Auteur van al-Jāmiʿ li-aḥkām al-Qurʾān (overl. 671 AH), niet partijdig voor een rechtsschool.'],
  ['ibn-abi-hatim', 'text', [18], 'من مشاهير المفسرين.', 'Een van de bekende uitleggers.'],
  ['ibn-kathir', 'text', [16, 18, 21, 29], 'صاحب «تفسير القرآن العظيم» (ت ٧٧٤هـ)، ينبه على منكرات الإسرائيليات.', 'Auteur van Tafsīr al-Qurʾān al-ʿaẓīm (overl. 774 AH); waarschuwt voor afkeurenswaardige Israëlitische verhalen.'],
  ['as-suyuti', 'text', [18, 24, 29], 'صاحب «الدر المنثور» (ت ٩١١هـ)، يسرد الروايات بلا تعقيب غالبا.', 'Auteur van ad-Durr al-manthūr (overl. 911 AH); somt overleveringen meestal zonder commentaar op.'],
  ['ash-shawkani', 'text', [18, 25], 'صاحب «فتح القدير» (ت ١٢٥٠هـ)، جمع بين الرواية والدراية.', 'Auteur van Fatḥ al-qadīr (overl. 1250 AH); combineerde overlevering en eigen afweging.'],
  ['ibn-taymiyya', 'text', [20, 22, 26], 'قال: أصح التفاسير تفسير ابن جرير؛ والبغوي أسلم الثلاثة من البدعة؛ والثعلبي حاطب ليل.', 'Zei: de meest betrouwbare tafsīr is die van Ibn Jarīr; al-Baghawī is van de drie het vrijst van vernieuwing; ath-Thaʿlabī verzamelde alles door elkaar.'],
  ['kab-al-ahbar', 'text', [20], 'نقل عنه الطبري أخبارا إسرائيلية.', 'Aṭ-Ṭabarī nam Israëlitische verhalen van hem over.'],
  ['wahb-ibn-munabbih', 'text', [20], 'نقل عنه الطبري أخبارا إسرائيلية.', 'Aṭ-Ṭabarī nam Israëlitische verhalen van hem over.'],
  ['ibn-jurayj', 'text', [20], 'نقل عنه الطبري أخبارا إسرائيلية.', 'Aṭ-Ṭabarī nam Israëlitische verhalen van hem over.'],
  ['as-suddi', 'text', [20], 'نقل عنه الطبري أخبارا إسرائيلية.', 'Aṭ-Ṭabarī nam Israëlitische verhalen van hem over.'],
  ['ath-thalabi', 'text', [22, 26], 'صاحب «الكشف والبيان» (ت ٤٢٧هـ)، أكثر من الإسرائيليات والموضوعات.', 'Auteur van al-Kashf wa-l-bayān (overl. 427 AH), met veel Israëlitische verhalen en verzonnen hadith.'],
  ['az-zamakhshari', 'text', [22, 27], 'سئل ابن تيمية عن تفسيره؛ ونقل عنه الألوسي.', 'Aan Ibn Taymiyya werd naar zijn tafsīr gevraagd; al-Ālūsī citeert hem.'],
  ['ubayy-ibn-kab', 'text', [26], 'نسب إليه الثعلبي أحاديث موضوعة في فضائل السور.', 'Ath-Thaʿlabī schreef hem verzonnen hadith over de deugden van de soera’s toe.'],
  ['al-alusi', 'text', [27, 31], 'صاحب «روح المعاني» (ت ١٢٧٠هـ)، ويعيبه اهتمامه بالتفسير الإشاري.', 'Auteur van Rūḥ al-maʿānī (overl. 1270 AH); kritiekpunt: aandacht voor de mystieke "toespelingsuitleg".'],
  ['abu-as-suud', 'text', [27, 31], 'صاحب «إرشاد العقل السليم».', 'Auteur van Irshād al-ʿaql as-salīm.'],
  ['fakhr-ad-din-ar-razi', 'text', [27, 31], 'صاحب «مفاتيح الغيب».', 'Auteur van Mafātīḥ al-ghayb.'],
  ['al-bukhari', 'takhrij', [11, 15], 'أخرج حديثي الوحدة.', 'Nam de hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [15], 'أخرج تفسير «الزيادة» بالنظر إلى وجه الله.', 'Overleverde de uitleg van "en meer" als het zien van Allahs gezicht.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'مدخل إلى علم التفسير',
  subtitle: 'عشرة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف التفسير والتأويل، ومصادر علم التفسير، ونشأته في خمس مراحل، وأشهر كتبه، وتفاسير يجب التنبه لها، ومنهجا التفسير: بالمأثور وبالرأي.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'مدخل إلى علم التفسير', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'التعريف والاستمداد', sub: 'الدرس ١', page: 11, children: ['الإيضاح والتبيين', 'التأويل', 'تسعة مصادر'] },
      { label: 'النشأة', sub: 'الدرسان ٢–٣', page: 13, children: ['القرآن بالقرآن', 'النبي ﷺ', 'الصحابة', 'التابعون', 'العلماء'] },
      { label: 'كتب التفسير', sub: 'الدروس ٤–٦', page: 19, children: ['الطبري', 'ابن كثير', 'البغوي', 'القرطبي', 'السيوطي', 'الشوكاني'] },
      { label: 'تفاسير يجب التنبه لها', sub: 'الدرسان ٧–٨', page: 26, children: ['الثعلبي', 'الألوسي'] },
      { label: 'المناهج', sub: 'الدرسان ٩–١٠', page: 28, children: ['بالمأثور', 'بالرأي'] }
    ]
  },
  points: [
    { text: 'التفسير لغة: الإيضاح والتبيين؛ واصطلاحًا: بيان كلام الله.', page: 11 },
    { text: 'من أسماء التفسير التأويل، من الأول وهو الرجوع.', page: 11 },
    { text: 'يستمد علم التفسير من القرآن والسنة وآثار الصحابة واللغة وأصول الفقه والقراءات وأسباب النزول والناسخ والمنسوخ.', page: 12 },
    { text: 'مر التفسير بخمس مراحل: القرآن بالقرآن، ثم النبي ﷺ، ثم الصحابة، ثم التابعون، ثم العلماء.', page: 13 },
    { text: 'بيان القرآن بعضه بعضًا هو أول طرق التفسير.', page: 14 },
    { text: 'أصح التفاسير بالمأثور تفسير ابن جرير الطبري، ثم تفسير ابن كثير.', page: 20 },
    { text: 'بعض التفاسير يجب التنبه لها، كالثعلبي والألوسي، خاصة للمبتدئين.', page: 26 },
    { text: 'منهجا التفسير: بالمأثور، وبالرأي؛ والرأي محمود ومذموم.', page: 29 }
  ],
  terms: [
    { term: 'التفسير', translit: 'at-tafsīr', meaning: 'لغة: الإيضاح والتبيين، من الفسر أي الإبانة والكشف.', explanation: 'اصطلاحًا: بيان كلام الله؛ أو علم يعرف به فهم كتاب الله وبيان معانيه واستخراج أحكامه وحكمه.', notes: ['[الفرقان: ٣٣]'], page: 11 },
    { term: 'التأويل', translit: 'at-taʾwīl', meaning: 'من الأول وهو الرجوع.', explanation: 'أول الآية: فسرها وبين معناها.', notes: [], page: 11 },
    { term: 'استمداد علم التفسير', translit: 'istimdād ʿilm at-tafsīr', meaning: 'العلوم التي يستمد منها التفسير.', explanation: 'القرآن، السنة، آثار الصحابة، اللغة والنحو والصرف، البيان، أصول الفقه، القراءات، أسباب النزول، الناسخ والمنسوخ.', notes: [], page: 12 },
    { term: 'الإسرائيليات', translit: 'al-isrāʾīliyyāt', meaning: 'أخبار منقولة عن أهل الكتاب.', explanation: 'يؤخذ على الطبري والثعلبي الإكثار منها، ونبه ابن كثير على منكراتها.', notes: [], page: 20 },
    { term: 'التفسير الإشاري', translit: 'at-tafsīr al-ishārī', meaning: 'تفسير باطن يذكره الصوفية بعد الظاهر.', explanation: 'عيب على الألوسي اهتمامه به، وهي تفاسير شاذة بعيدة عن الحق.', notes: [], page: 27 },
    { term: 'التفسير بالمأثور', translit: 'at-tafsīr bi-l-maʾthūr', meaning: 'الاقتصار على ما ورد عن النبي ﷺ والصحابة والتابعين.', explanation: 'أشهر كتبه: الطبري، البغوي، ابن كثير، الدر المنثور.', notes: [], page: 29 },
    { term: 'التفسير بالرأي', translit: 'at-tafsīr bi-r-raʾy', meaning: 'ما اعتمد فيه المفسر على الاجتهاد والاستنباط المستند على الأصول الشرعية واللغوية.', explanation: 'ويسمى بالدراية؛ وهو محمود ومذموم.', notes: [], page: 30 },
    { term: 'الرأي المذموم', translit: 'ar-raʾy al-madhmūm', meaning: 'ما كان باعثه الهوى المحض، أو قاله صاحبه بلا علم.', explanation: 'لا يجوز الإقدام عليه.', notes: ['[الإسراء: ٣٦]', '[الأعراف: ٣٣]'], page: 30 },
    { term: 'الرأي المحمود', translit: 'ar-raʾy al-maḥmūd', meaning: 'ما كان مستنده الأصول العلمية من اللغة والشرع وفق ضوابط دقيقة.', explanation: 'أشهر كتبه: مفاتيح الغيب، إرشاد العقل السليم، روح المعاني.', notes: [], page: 31 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'مراحل نشأة التفسير',
      intro: 'خمس مراحل كما في مخطط الكتاب.',
      nodes: [
        { label: 'تفسير القرآن بالقرآن', sub: 'كتفسير «هلوعًا» بما بعدها [المعارج: ١٩–٢١]', page: 14 },
        { label: 'تفسير النبي ﷺ', sub: '«صلوا كما رأيتموني أصلي»', page: 15 },
        { label: 'تفسير الصحابة', sub: 'بالقرآن ثم بالسنة ثم بالاجتهاد واللغة', page: 16 },
        { label: 'تفسير التابعين', sub: 'تلقوه عن الصحابة', page: 17 },
        { label: 'تفسير العلماء', sub: 'جمعوا المأثور وما اجتهدوا فيه', page: 18 }
      ]
    },
    {
      type: 'compare',
      title: 'أشهر كتب التفسير',
      intro: 'كما في الدروس الرابع إلى السادس.',
      columns: ['المؤلف', 'ما يميزه'],
      rows: [
        { label: 'جامع البيان', cells: ['الطبري (ت ٣١٠هـ)', 'أعظم التفاسير بالمأثور؛ ويؤخذ عليه كثرة الإسرائيليات'] },
        { label: 'تفسير القرآن العظيم', cells: ['ابن كثير (ت ٧٧٤هـ)', 'ينبه على منكرات الإسرائيليات وينقد أسانيدها'] },
        { label: 'معالم التنزيل', cells: ['البغوي (ت ٥١٦هـ)', 'اختصار الثعلبي بلا موضوعات؛ أسلم من البدعة'] },
        { label: 'الجامع لأحكام القرآن', cells: ['القرطبي (ت ٦٧١هـ)', 'مسائل وأحكام، بلا تعصب لمذهب'] },
        { label: 'الدر المنثور', cells: ['السيوطي (ت ٩١١هـ)', 'سرد الروايات غالبًا بلا تعقيب'] },
        { label: 'فتح القدير', cells: ['الشوكاني (ت ١٢٥٠هـ)', 'جمع بين الرواية والدراية'] }
      ],
      page: 19
    },
    {
      type: 'cards',
      title: 'تفاسير يجب التنبه لها',
      intro: 'لا يقرؤها كل أحد، سيما المبتدئون.',
      nodes: [
        { label: 'الكشف والبيان للثعلبي', sub: 'إسرائيليات بلا تعقيب، وأحاديث موضوعة في فضائل السور وعلى ألسنة الشيعة', page: 26 },
        { label: 'روح المعاني للألوسي', sub: 'موسوعة تفسيرية، لكن فيها التفسير الإشاري الصوفي', page: 27 }
      ]
    },
    {
      type: 'tree',
      title: 'مناهج التفسير',
      intro: 'كما في مخطط الكتاب.',
      root: { label: 'مناهج التفسير', page: 28 },
      nodes: [
        { label: 'بالمأثور', children: ['بالقرآن', 'بالسنة', 'بأقوال الصحابة', 'بأقوال التابعين'], page: 29 },
        { label: 'بالرأي', children: ['المذموم', 'المحمود'], page: 30 }
      ]
    },
    {
      type: 'compare',
      title: 'الرأي المذموم والمحمود',
      intro: 'التفسير بالرأي نوعان.',
      columns: ['المذموم', 'المحمود'],
      rows: [
        { label: 'مستنده', cells: ['الهوى المحض أو القول بلا علم', 'الأصول العلمية من اللغة والشرع'] },
        { label: 'حكمه', cells: ['لا يجوز', 'جائز لمن توفرت فيه الشروط'] },
        { label: 'أمثلة', cells: ['—', 'مفاتيح الغيب، إرشاد العقل السليم، روح المعاني'] }
      ],
      page: 30
    }
  ],
  sections: [
    { title: 'من تفسير القرآن بالقرآن', text: 'من القرآن ما هو مجمل تفسره كلمات بعده، كقوله: ﴿إن الإنسان خلق هلوعًا﴾ فسرها بقوله: ﴿إذا مسه الشر جزوعًا وإذا مسه الخير منوعًا﴾.', more: '[القارعة: ١–٤]، [المعارج: ١٩–٢١].', page: 14 },
    { title: 'من تفسير النبي ﷺ', text: 'فسر ﴿وأقيموا الصلاة﴾ فبين الصلوات الخمس وهيئتها وعدد ركعاتها، وفسر «الزيادة» في ﴿للذين أحسنوا الحسنى وزيادة﴾ بالنظر إلى وجه الله الكريم، كما أخرجه مسلم.', more: '[يونس: ٢٦].', page: 15 },
    { title: 'من تفسير الصحابة', text: 'فسر ابن عباس ﴿أو لامستم النساء﴾ بالجماع، وقال في ﴿يعلم السر وأخفى﴾: السر ما عملته أنت، وأخفى ما قذف الله في قلبك مما لم تعمله.', more: '[النساء: ٤٣]، [طه: ٧].', page: 16 },
    { title: 'أصح التفاسير', text: 'قال ابن تيمية: «وأما التفاسير التي في أيدي الناس فأصحها تفسير ابن جرير الطبري، فإنه يذكر مقالات السلف بالأسانيد الثابتة وليس فيه بدعة ولا ينقل عن المتهمين».', more: '', page: 20 },
    { title: 'الثعلبي حاطب ليل', text: 'قال ابن تيمية: «والثعلبي هو في نفسه كان فيه خير ودين، وكان حاطب ليل، ينقل ما وجد في كتب التفسير من صحيح وضعيف وموضوع».', more: '', page: 26 },
    { title: 'من يجوز له التفسير بالرأي؟', text: 'يجوز لمن كان عالمًا باللغة العربية والنحو والصرف والبلاغة والناسخ والمنسوخ وأسباب النزول والسنة صحيحها وضعيفها وأصول الفقه، ويحرم على من لا تتوفر فيه هذه الشروط.', more: '', page: 30 }
  ],
  keycards: [
    { kind: 'definitie', title: 'التفسير', items: ['لغة: الإيضاح والتبيين.', 'اصطلاحًا: بيان كلام الله.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'مراحل النشأة', items: ['القرآن بالقرآن', 'النبي ﷺ', 'الصحابة', 'التابعون', 'العلماء'], page: 13, origin: 'boek' },
    { kind: 'onderscheid', title: 'المأثور والرأي', items: ['المأثور: ما ورد عن النبي ﷺ والصحابة والتابعين.', 'الرأي: الاجتهاد المستند إلى الأصول الشرعية واللغوية.'], page: 29, origin: 'boek' },
    { kind: 'regel', title: 'أول طرق التفسير', items: ['بيان القرآن بعضه بعضًا.'], page: 14, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التفسير: بيان كلام الله؛ ومن أسمائه التأويل.',
    'مصادره: القرآن والسنة والآثار واللغة والأصول والقراءات وأسباب النزول والنسخ.',
    'المراحل: القرآن، النبي ﷺ، الصحابة، التابعون، العلماء.',
    'أشهر الكتب: الطبري، ابن كثير، البغوي، القرطبي، السيوطي، الشوكاني.',
    'يتنبه لتفسيري الثعلبي والألوسي.',
    'المنهجان: بالمأثور وبالرأي، والرأي محمود ومذموم.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى التفسير لغة؟', options: ['الإيضاح والتبيين', 'الرجوع', 'الاختصار', 'الرواية'], answer: 0, explain: 'من الفسر أي الإبانة والكشف.', page: 11 },
    { type: 'mc', q: 'من أي شيء أخذ التأويل؟', options: ['الأول وهو الرجوع', 'الفسر', 'الإبانة', 'الأثر'], answer: 0, explain: 'كما في الكتاب.', page: 11 },
    { type: 'mc', q: 'ما أول طرق التفسير؟', options: ['تفسير القرآن بالقرآن', 'تفسير الصحابة', 'التفسير باللغة', 'تفسير التابعين'], answer: 0, explain: 'بيان القرآن بعضه بعضًا.', page: 14 },
    { type: 'mc', q: 'بم فسر النبي ﷺ «الزيادة» في [يونس: ٢٦]؟', options: ['النظر إلى وجه الله', 'مضاعفة الحسنات', 'دخول الجنة', 'المغفرة'], answer: 0, explain: 'كما أخرجه مسلم.', page: 15 },
    { type: 'mc', q: 'ما الذي يؤخذ على تفسير الطبري؟', options: ['كثرة الإسرائيليات', 'التعصب لمذهب', 'التفسير الإشاري', 'حذف الأسانيد'], answer: 0, explain: 'عن كعب الأحبار ووهب بن منبه وغيرهما.', page: 20 },
    { type: 'tf', q: 'تفسير البغوي اختصار لتفسير الثعلبي.', options: ['صواب', 'خطأ'], answer: 0, explain: 'وجنبه الأحاديث الموضوعة والبدع.', page: 22 },
    { type: 'mc', q: 'ما الذي يعيب تفسير الألوسي؟', options: ['التفسير الإشاري الصوفي', 'قلة النقول', 'كثرة الإعراب', 'الاختصار الشديد'], answer: 0, explain: 'ينقل كلام الصوفية في التفسير الباطن.', page: 27 },
    { type: 'tf', q: 'التفسير بالرأي كله مذموم.', options: ['صواب', 'خطأ'], answer: 1, explain: 'منه محمود يستند إلى أصول اللغة والشرع.', page: 31 }
  ]),
  note: 'أنشطة الكتاب في صفحات الوحدة، وآخرها في صفحة ٣٢.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Inleiding in de koranuitleg',
  subtitle: 'Tien lessen samen op één pagina',
  summary: 'Wat tafsīr en taʾwīl zijn, de bronnen van de tafsīr-wetenschap, het ontstaan in vijf fasen, de bekendste tafsīr-boeken, tafsīrs waarbij voorzichtigheid nodig is, en de twee methoden: op basis van overlevering en op basis van eigen inzicht.',
  source: { ...source, label: 'Kitāb at-Tafsīr (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Inleiding in de koranuitleg', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Definitie en bronnen', sub: 'les 1', page: 11, children: ['verduidelijken', 'taʾwīl', 'negen bronnen'] },
      { label: 'Ontstaan', sub: 'les 2–3', page: 13, children: ['Koran door Koran', 'de Profeet ﷺ', 'de metgezellen', 'de tābiʿūn', 'de geleerden'] },
      { label: 'Tafsīr-boeken', sub: 'les 4–6', page: 19, children: ['aṭ-Ṭabarī', 'Ibn Kathīr', 'al-Baghawī', 'al-Qurṭubī', 'as-Suyūṭī', 'ash-Shawkānī'] },
      { label: 'Voorzichtigheid', sub: 'les 7–8', page: 26, children: ['ath-Thaʿlabī', 'al-Ālūsī'] },
      { label: 'Methoden', sub: 'les 9–10', page: 28, children: ['overlevering', 'eigen inzicht'] }
    ]
  },
  points: [
    { text: 'Tafsīr betekent in de taal verduidelijken en uitleggen; als vakterm: het uitleggen van Allahs woorden.', page: 11 },
    { text: 'Een andere naam voor tafsīr is taʾwīl, van awl: terugkeren.', page: 11 },
    { text: 'Bronnen: Koran, Sunna, uitspraken van metgezellen, taal, uṣūl al-fiqh, leeswijzen, aanleidingen van openbaring en abrogatie.', page: 12 },
    { text: 'De tafsīr ging door vijf fasen: Koran door Koran, de Profeet ﷺ, de metgezellen, de tābiʿūn en de geleerden.', page: 13 },
    { text: 'Dat de Koran zichzelf uitlegt, is de eerste weg van tafsīr.', page: 14 },
    { text: 'De meest betrouwbare tafsīr op basis van overlevering is die van aṭ-Ṭabarī, daarna die van Ibn Kathīr.', page: 20 },
    { text: 'Bij sommige tafsīrs, zoals die van ath-Thaʿlabī en al-Ālūsī, is voorzichtigheid nodig, vooral voor beginners.', page: 26 },
    { text: 'Twee methoden: op basis van overlevering en op basis van eigen inzicht; eigen inzicht is prijzenswaardig of afkeurenswaardig.', page: 29 }
  ],
  terms: [
    { term: 'التفسير', translit: 'at-tafsīr', meaning: 'Taal: verduidelijken en uitleggen, van fasr: blootleggen.', explanation: 'Vakterm: het uitleggen van Allahs woorden; de wetenschap waarmee men het Boek van Allah begrijpt, de betekenissen uitlegt en de regels en wijsheden afleidt.', notes: ['al-Furqān 25:33'], page: 11 },
    { term: 'التأويل', translit: 'at-taʾwīl', meaning: 'Van awl: terugkeren.', explanation: '"Awwala de vers" betekent: hij legde het uit en verduidelijkte de betekenis.', notes: [], page: 11 },
    { term: 'استمداد علم التفسير', translit: 'istimdād ʿilm at-tafsīr', meaning: 'De bronnen waaruit de tafsīr-wetenschap put.', explanation: 'Koran, Sunna, uitspraken van metgezellen, taal en grammatica, retorica, uṣūl al-fiqh, leeswijzen, aanleidingen van openbaring, abrogatie.', notes: [], page: 12 },
    { term: 'الإسرائيليات', translit: 'al-isrāʾīliyyāt', meaning: 'Israëlitische verhalen: berichten overgenomen van de mensen van het Boek.', explanation: 'Kritiek op aṭ-Ṭabarī en ath-Thaʿlabī; Ibn Kathīr wees op de afkeurenswaardige.', notes: [], page: 20 },
    { term: 'التفسير الإشاري', translit: 'at-tafsīr al-ishārī', meaning: 'Toespelingsuitleg: een "innerlijke" uitleg van soefi’s naast de gewone.', explanation: 'Kritiekpunt bij al-Ālūsī; volgens het boek afwijkend en ver van de waarheid.', notes: [], page: 27 },
    { term: 'التفسير بالمأثور', translit: 'at-tafsīr bi-l-maʾthūr', meaning: 'Uitleg op basis van overlevering: alleen wat van de Profeet ﷺ, de metgezellen en de tābiʿūn is overgeleverd.', explanation: 'Bekende werken: aṭ-Ṭabarī, al-Baghawī, Ibn Kathīr, ad-Durr al-manthūr.', notes: [], page: 29 },
    { term: 'التفسير بالرأي', translit: 'at-tafsīr bi-r-raʾy', meaning: 'Uitleg op basis van eigen inzicht: ijtihād en afleiding gebaseerd op religieuze en taalkundige grondslagen.', explanation: 'Ook "bi-d-dirāya" genoemd; er is een prijzenswaardige en een afkeurenswaardige soort.', notes: [], page: 30 },
    { term: 'الرأي المذموم', translit: 'ar-raʾy al-madhmūm', meaning: 'Afkeurenswaardig eigen inzicht: uit pure begeerte of zonder kennis.', explanation: 'Niet toegestaan.', notes: ['al-Isrāʾ 17:36', 'al-Aʿrāf 7:33'], page: 30 },
    { term: 'الرأي المحمود', translit: 'ar-raʾy al-maḥmūd', meaning: 'Prijzenswaardig eigen inzicht: gebaseerd op taalkundige en religieuze grondslagen, met duidelijke regels.', explanation: 'Bekende werken: Mafātīḥ al-ghayb, Irshād al-ʿaql as-salīm, Rūḥ al-maʿānī.', notes: [], page: 31 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Fasen in het ontstaan van de tafsīr',
      intro: 'Vijf fasen, zoals in het schema van het boek.',
      nodes: [
        { label: 'De Koran door de Koran', sub: 'zoals "hulūʿ" dat de volgende verzen uitleggen (al-Maʿārij 70:19–21)', page: 14 },
        { label: 'De uitleg van de Profeet ﷺ', sub: '"bid zoals jullie mij zien bidden"', page: 15 },
        { label: 'De uitleg van de metgezellen', sub: 'met de Koran, dan de Sunna, dan ijtihād en taal', page: 16 },
        { label: 'De uitleg van de tābiʿūn', sub: 'van de metgezellen geleerd', page: 17 },
        { label: 'De uitleg van de geleerden', sub: 'overlevering verzameld, plus eigen ijtihād', page: 18 }
      ]
    },
    {
      type: 'compare',
      title: 'Bekende tafsīr-boeken',
      intro: 'Zoals in les 4 tot 6.',
      columns: ['Auteur', 'Kenmerk'],
      rows: [
        { label: 'Jāmiʿ al-bayān', cells: ['aṭ-Ṭabarī (overl. 310 AH)', 'de grootste op basis van overlevering; kritiek: veel Israëlitische verhalen'] },
        { label: 'Tafsīr al-Qurʾān al-ʿaẓīm', cells: ['Ibn Kathīr (overl. 774 AH)', 'waarschuwt voor Israëlitische verhalen en toetst de ketens'] },
        { label: 'Maʿālim at-tanzīl', cells: ['al-Baghawī (overl. 516 AH)', 'samenvatting van ath-Thaʿlabī zonder verzonnen hadith; het vrijst van vernieuwing'] },
        { label: 'al-Jāmiʿ li-aḥkām al-Qurʾān', cells: ['al-Qurṭubī (overl. 671 AH)', 'vraagstukken en regels, niet partijdig voor een rechtsschool'] },
        { label: 'ad-Durr al-manthūr', cells: ['as-Suyūṭī (overl. 911 AH)', 'somt overleveringen meestal zonder commentaar op'] },
        { label: 'Fatḥ al-qadīr', cells: ['ash-Shawkānī (overl. 1250 AH)', 'combineert overlevering en eigen afweging'] }
      ],
      page: 19
    },
    {
      type: 'cards',
      title: 'Tafsīrs waarbij voorzichtigheid nodig is',
      intro: 'Niet voor iedereen, zeker niet voor beginners.',
      nodes: [
        { label: 'al-Kashf wa-l-bayān van ath-Thaʿlabī', sub: 'Israëlitische verhalen zonder commentaar, verzonnen hadith over de soera’s en uit sjiitische bronnen', page: 26 },
        { label: 'Rūḥ al-maʿānī van al-Ālūsī', sub: 'een encyclopedische tafsīr, maar met mystieke toespelingsuitleg', page: 27 }
      ]
    },
    {
      type: 'tree',
      title: 'Methoden van tafsīr',
      intro: 'Zoals in het schema van het boek.',
      root: { label: 'Methoden van tafsīr', page: 28 },
      nodes: [
        { label: 'Op basis van overlevering', children: ['door de Koran', 'door de Sunna', 'door de metgezellen', 'door de tābiʿūn'], page: 29 },
        { label: 'Op basis van eigen inzicht', children: ['afkeurenswaardig', 'prijzenswaardig'], page: 30 }
      ]
    },
    {
      type: 'compare',
      title: 'Afkeurenswaardig en prijzenswaardig inzicht',
      intro: 'Uitleg op basis van eigen inzicht heeft twee soorten.',
      columns: ['Afkeurenswaardig', 'Prijzenswaardig'],
      rows: [
        { label: 'Basis', cells: ['pure begeerte of spreken zonder kennis', 'taalkundige en religieuze grondslagen'] },
        { label: 'Oordeel', cells: ['niet toegestaan', 'toegestaan voor wie aan de voorwaarden voldoet'] },
        { label: 'Voorbeelden', cells: ['—', 'Mafātīḥ al-ghayb, Irshād al-ʿaql as-salīm, Rūḥ al-maʿānī'] }
      ],
      page: 30
    }
  ],
  sections: [
    { title: 'De Koran legt zichzelf uit', text: 'Sommige verzen zijn algemeen en worden door de woorden erna uitgelegd, zoals: "De mens is ongeduldig geschapen" (hulūʿ), uitgelegd door: "als het kwade hem treft, is hij radeloos, en als het goede hem treft, houdt hij het voor zich".', more: 'al-Qāriʿa 101:1–4, al-Maʿārij 70:19–21.', page: 14 },
    { title: 'De uitleg van de Profeet ﷺ', text: 'Hij legde "verricht het gebed" uit door de vijf gebeden, hun vorm en het aantal rakʿa’s te laten zien; en hij legde "en meer" in "voor wie goed doen is het beste en meer" uit als het zien van Allahs edele gezicht, zoals Muslim overleverde.', more: 'Yūnus 10:26.', page: 15 },
    { title: 'De uitleg van de metgezellen', text: 'Ibn ʿAbbās legde "of als jullie de vrouwen aanraakten" uit als geslachtsgemeenschap, en zei over "Hij kent het geheim en wat nog verborgener is": het geheim is wat jij deed, en verborgener is wat Allah in je hart legde en je nog niet deed.', more: 'an-Nisāʾ 4:43, Ṭā Hā 20:7.', page: 16 },
    { title: 'De meest betrouwbare tafsīr', text: 'Ibn Taymiyya: "Van de tafsīrs die de mensen hebben, is die van Ibn Jarīr aṭ-Ṭabarī de meest betrouwbare: hij noemt de uitspraken van de vroegen met vaststaande ketens, er staat geen vernieuwing in en hij citeert geen verdachte overleveraars."', more: '', page: 20 },
    { title: 'Ath-Thaʿlabī verzamelde in het donker', text: 'Ibn Taymiyya: "Ath-Thaʿlabī was zelf een goed en godsdienstig mens, maar hij was als iemand die ’s nachts hout sprokkelt: hij nam alles over wat hij in tafsīr-boeken vond, authentiek, zwak en verzonnen."', more: '', page: 26 },
    { title: 'Wie mag uitleggen op basis van eigen inzicht?', text: 'Wie kennis heeft van Arabisch, grammatica, retorica, abrogatie, aanleidingen van openbaring, de Sunna (authentiek en zwak) en uṣūl al-fiqh. Voor wie niet aan deze voorwaarden voldoet, is het verboden.', more: '', page: 30 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Tafsīr', items: ['Taal: verduidelijken en uitleggen.', 'Vakterm: het uitleggen van Allahs woorden.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'Fasen van het ontstaan', items: ['Koran door Koran', 'de Profeet ﷺ', 'de metgezellen', 'de tābiʿūn', 'de geleerden'], page: 13, origin: 'boek' },
    { kind: 'onderscheid', title: 'Overlevering en eigen inzicht', items: ['Overlevering: wat van de Profeet ﷺ, de metgezellen en de tābiʿūn komt.', 'Eigen inzicht: ijtihād op religieuze en taalkundige grondslagen.'], page: 29, origin: 'boek' },
    { kind: 'regel', title: 'De eerste weg van tafsīr', items: ['De Koran legt zichzelf uit.'], page: 14, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Tafsīr: het uitleggen van Allahs woorden; een andere naam is taʾwīl.',
    'Bronnen: Koran, Sunna, metgezellen, taal, uṣūl, leeswijzen, aanleidingen, abrogatie.',
    'Fasen: Koran, de Profeet ﷺ, metgezellen, tābiʿūn, geleerden.',
    'Bekende boeken: aṭ-Ṭabarī, Ibn Kathīr, al-Baghawī, al-Qurṭubī, as-Suyūṭī, ash-Shawkānī.',
    'Voorzichtigheid bij ath-Thaʿlabī en al-Ālūsī.',
    'Twee methoden: overlevering en eigen inzicht (prijzenswaardig of afkeurenswaardig).'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent tafsīr in de taal?', options: ['verduidelijken en uitleggen', 'terugkeren', 'samenvatten', 'overleveren'], answer: 0, explain: 'Van fasr: blootleggen.', page: 11 },
    { type: 'mc', q: 'Waarvan is taʾwīl afgeleid?', options: ['awl: terugkeren', 'fasr: blootleggen', 'ibāna: duidelijk maken', 'athar: overlevering'], answer: 0, explain: 'Zo staat het in het boek.', page: 11 },
    { type: 'mc', q: 'Wat is de eerste weg van tafsīr?', options: ['de Koran door de Koran', 'de uitleg van de metgezellen', 'uitleg via de taal', 'de uitleg van de tābiʿūn'], answer: 0, explain: 'De Koran legt zichzelf uit.', page: 14 },
    { type: 'mc', q: 'Hoe legde de Profeet ﷺ "en meer" in Yūnus 10:26 uit?', options: ['het zien van Allahs gezicht', 'vermenigvuldigde beloning', 'het Paradijs binnengaan', 'vergeving'], answer: 0, explain: 'Zoals Muslim overleverde.', page: 15 },
    { type: 'mc', q: 'Wat is een kritiekpunt op de tafsīr van aṭ-Ṭabarī?', options: ['veel Israëlitische verhalen', 'partijdigheid voor een rechtsschool', 'mystieke toespelingsuitleg', 'geen ketens'], answer: 0, explain: 'Onder meer van Kaʿb al-Aḥbār en Wahb ibn Munabbih.', page: 20 },
    { type: 'tf', q: 'De tafsīr van al-Baghawī is een samenvatting van die van ath-Thaʿlabī.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zonder de verzonnen hadith en vernieuwingen.', page: 22 },
    { type: 'mc', q: 'Wat is het kritiekpunt op de tafsīr van al-Ālūsī?', options: ['mystieke toespelingsuitleg', 'te weinig citaten', 'te veel grammatica', 'te kort'], answer: 0, explain: 'Hij citeert soefi’s over de "innerlijke" uitleg.', page: 27 },
    { type: 'tf', q: 'Uitleg op basis van eigen inzicht is altijd afkeurenswaardig.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Er is ook een prijzenswaardige soort, gebaseerd op taal en sharīʿa.', page: 31 }
  ]),
  note: 'Oefeningen van het boek staan op de pagina’s van de eenheid, de laatste op p. 32. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tafsir', chapter: '1', unit: 1, ar, nl }
