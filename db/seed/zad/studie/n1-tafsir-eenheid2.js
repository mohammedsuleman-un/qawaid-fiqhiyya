// Hoofdstukkaart bij التفسير (١), eenheid 2: سورة الفاتحة (lessen 11–16, boek p. 33–50).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (١)، سلسلة زاد العلمية',
  pages: '33–50',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'أبو سعيد بن المعلى', text: 'لأعلمنك سورة هي أعظم السور في القرآن. قال: ﴿الحمد لله رب العالمين﴾ هي السبع المثاني والقرآن العظيم الذي أوتيته', takhrij: 'أخرجه البخاري', note: 'في فضل الفاتحة.', pages: [34, 36], nl: 'Ik zal je een soera leren die de grootste soera in de Koran is. Hij zei: "Alle lof is voor Allah, de Heer der werelden" – dat zijn de zeven herhaalde (verzen) en de grootse Koran die mij gegeven is', nlNote: 'Over de deugd van al-Fātiḥa.' },
  { narrator: 'ابن عباس', text: 'أبشر بنورين أوتيتهما لم يؤتهما نبي قبلك: فاتحة الكتاب، وخواتيم سورة البقرة، لن تقرأ بحرف منهما إلا أعطيته', takhrij: 'أخرجه مسلم', note: 'قاله ملك نزل من باب في السماء فتح ذلك اليوم.', pages: [36], nl: 'Verheug je over twee lichten die jou gegeven zijn en die geen profeet vóór jou kreeg: de Opening van het Boek en het slot van Sūrat al-Baqara; je leest er geen letter van of het wordt je gegeven', nlNote: 'Gezegd door een engel die afdaalde door een poort in de hemel die die dag geopend werd.' },
  { narrator: 'أبو هريرة', text: 'والذي نفسي بيده ما أنزل في التوراة ولا في الإنجيل ولا في الزبور ولا في الفرقان مثلها، إنها السبع المثاني والقرآن العظيم الذي أعطيت', takhrij: 'أخرجه أحمد وصححه شعيب الأرناؤوط', note: 'لما قرأ عليه أبي بن كعب أم القرآن.', pages: [36], nl: 'Bij Hem in Wiens hand mijn ziel is: in de Thora, het Evangelie, de Psalmen en de Koran is niets zoals zij geopenbaard; zij is de zeven herhaalde (verzen) en de grootse Koran die mij gegeven is', nlNote: 'Toen Ubayy ibn Kaʿb hem de Moeder van de Koran voorlas.' },
  { narrator: 'أبو هريرة', text: 'قال الله تعالى: قسمت الصلاة بيني وبين عبدي نصفين ولعبدي ما سأل؛ فإذا قال العبد: ﴿الحمد لله رب العالمين﴾ قال الله: حمدني عبدي، وإذا قال: ﴿الرحمن الرحيم﴾ قال: أثنى علي عبدي، وإذا قال: ﴿مالك يوم الدين﴾ قال: مجدني عبدي، فإذا قال: ﴿إياك نعبد وإياك نستعين﴾ قال: هذا بيني وبين عبدي ولعبدي ما سأل، فإذا قال: ﴿اهدنا الصراط المستقيم...﴾ قال: هذا لعبدي ولعبدي ما سأل', takhrij: 'أخرجه مسلم', note: 'ولذلك عقب الثناء بالدعاء.', pages: [36, 45], nl: 'Allah zegt: Ik heb het gebed in twee helften verdeeld tussen Mij en Mijn dienaar, en Mijn dienaar krijgt wat hij vraagt. Als hij zegt "Alle lof is voor Allah, de Heer der werelden", zegt Allah: Mijn dienaar heeft Mij geloofd. Bij "de Erbarmer, de Barmhartige": Mijn dienaar heeft Mij geprezen. Bij "Koning van de Dag des Oordeels": Mijn dienaar heeft Mij verheerlijkt. Bij "U alleen aanbidden wij en U alleen vragen wij om hulp": dit is tussen Mij en Mijn dienaar, en hij krijgt wat hij vraagt. Bij "Leid ons op het rechte pad …": dit is voor Mijn dienaar, en hij krijgt wat hij vraagt', nlNote: 'Daarom volgt het smeken op de lofprijzing.' },
  { narrator: 'أبو هريرة', text: 'من صلى صلاة لم يقرأ فيها بأم الكتاب فهي خداج، هي خداج، غير تمام', takhrij: 'أخرجه مسلم', note: '', pages: [36], nl: 'wie een gebed verricht zonder daarin de Moeder van het Boek te reciteren, dat gebed is gebrekkig, gebrekkig, onvolledig', nlNote: '' }
]

const TAKHRIJ_NL = {
  'أخرجه البخاري': 'al-Bukhārī',
  'أخرجه مسلم': 'Muslim',
  'أخرجه أحمد وصححه شعيب الأرناؤوط': 'Aḥmad; authentiek volgens Shuʿayb al-Arnaʾūṭ'
}
const NARRATOR_NL = { 'أبو سعيد بن المعلى': 'Abū Saʿīd ibn al-Muʿallā', 'ابن عباس': 'Ibn ʿAbbās', 'أبو هريرة': 'Abū Hurayra' }

const PERSONS = [
  ['abu-said-ibn-al-mualla', 'text', [34, 36], 'قال له النبي ﷺ: «لأعلمنك سورة هي أعظم السور في القرآن».', 'Tegen hem zei de Profeet ﷺ: "ik zal je de grootste soera in de Koran leren".'],
  ['ibn-abbas', 'text', [36], 'روى حديث النورين: الفاتحة وخواتيم البقرة.', 'Overleverde de hadith over de twee lichten: al-Fātiḥa en het slot van al-Baqara.'],
  ['abu-hurayra', 'text', [36], 'روى «قسمت الصلاة بيني وبين عبدي» و«فهي خداج».', 'Overleverde "Ik heb het gebed verdeeld" en "dan is het gebrekkig".'],
  ['ubayy-ibn-kab', 'text', [36], 'قرأ أم القرآن على النبي ﷺ.', 'Las de Profeet ﷺ de Moeder van de Koran voor.'],
  ['as-sadi', 'text', [37, 48], 'قسم تربية الله لخلقه إلى عامة وخاصة، وبين اشتمال الفاتحة على أنواع التوحيد والنبوة والجزاء والقدر.', 'Deelde Allahs zorg voor de schepping in algemeen en bijzonder in, en liet zien dat al-Fātiḥa de soorten tawḥīd, het profeetschap, de vergelding en het lot bevat.'],
  ['at-tabari', 'text', [45, 46], 'قال: أجمعت الأمة من أهل التأويل على أن الصراط المستقيم هو الطريق الواضح الذي لا اعوجاج فيه.', 'Zei: de uitleggers zijn het eens dat het rechte pad de duidelijke weg zonder kromming is.'],
  ['al-bukhari', 'takhrij', [34, 36], 'روى حديث أبي سعيد بن المعلى.', 'Overleverde de hadith van Abū Saʿīd ibn al-Muʿallā.'],
  ['muslim', 'takhrij', [36, 45], 'أخرج أحاديث النورين وقسمة الصلاة والخداج.', 'Nam de hadith op over de twee lichten, het verdeelde gebed en het gebrekkige gebed.'],
  ['ahmad-ibn-hanbal', 'takhrij', [36], 'روى حديث أبي بن كعب في الفاتحة.', 'Overleverde de hadith van Ubayy ibn Kaʿb over al-Fātiḥa.'],
  ['al-arnaut', 'takhrij', [36], 'صححه.', 'Verklaarde die authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'سورة الفاتحة',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'أسماء الفاتحة وفضلها، ثم تفسيرها آية آية: الحمد والربوبية والرحمة، والملك يوم الدين، والعبادة والاستعانة، والهداية إلى الصراط المستقيم، ثم فوائدها واشتمالها على أنواع التوحيد.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'سورة الفاتحة', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'الأسماء والفضل', sub: 'الدرس ١١', page: 34, children: ['أم الكتاب', 'السبع المثاني', 'أعظم سورة'] },
      { label: 'الحمد والربوبية', sub: 'الدرس ١٢', page: 37, children: ['الحمد', 'الرب', 'الرحمن الرحيم'] },
      { label: 'مالك يوم الدين', sub: 'الدرس ١٣', page: 40, children: ['الملك التام', 'الدين: الجزاء'] },
      { label: 'العبادة والاستعانة', sub: 'الدرس ١٤', page: 42, children: ['الحصر', 'الرد على الجبرية والقدرية'] },
      { label: 'الهداية والفوائد', sub: 'الدرسان ١٥–١٦', page: 45, children: ['الصراط المستقيم', 'المغضوب عليهم والضالون', 'أنواع التوحيد'] }
    ]
  },
  points: [
    { text: 'الفاتحة مكية، وهي أعظم سورة في القرآن، وهي السبع المثاني.', page: 34 },
    { text: 'من أسمائها: الحمد، والسبع المثاني، وأم الكتاب، وأم القرآن؛ وأشهرها الفاتحة.', page: 35 },
    { text: 'الحمد: الثناء على الله بصفات الكمال مع المحبة والتعظيم.', page: 37 },
    { text: 'الرب: من اجتمع فيه الخلق والملك والتدبير؛ وتربيته لخلقه عامة وخاصة.', page: 37 },
    { text: 'الرحمن ذو الرحمة الواسعة، والرحيم ذو الرحمة الواصلة إلى خلقه.', page: 38 },
    { text: 'الدين في ﴿مالك يوم الدين﴾ بمعنى الجزاء والحساب.', page: 40 },
    { text: 'في ﴿إياك نعبد وإياك نستعين﴾ حصر العبادة والاستعانة الكاملة بالله.', page: 42 },
    { text: 'المغضوب عليهم: من علم الحق ولم يعمل به، والضالون: من عمل بغير علم.', page: 46 }
  ],
  terms: [
    { term: 'الحمد', translit: 'al-ḥamd', meaning: 'الثناء على الله بصفات الكمال وبأفعاله الدائرة بين الفضل والعدل.', explanation: 'وصف المحمود بالكمال مع المحبة والتعظيم؛ وبدونهما يسمى مدحًا.', notes: [], page: 37 },
    { term: 'الله', translit: 'Allāh', meaning: 'المألوه، أي المعبود حبًا وتعظيمًا.', explanation: 'لفظ الجلالة لا يطلق على غير الله.', notes: [], page: 37 },
    { term: 'الرب', translit: 'ar-rabb', meaning: 'من اجتمع فيه: الخلق والملك والتدبير.', explanation: 'ويطلق في اللغة على السيد والمتصرف للإصلاح.', notes: [], page: 37 },
    { term: 'العالمين', translit: 'al-ʿālamīn', meaning: 'جمع عالم، وهو كل موجود سوى الله.', explanation: 'والعالم جمع لا واحد له من لفظه.', notes: [], page: 38 },
    { term: 'الرحمن', translit: 'ar-raḥmān', meaning: 'ذو الرحمة الواسعة التي بلغت غايتها.', explanation: 'وهو وصف الله في ذاته.', notes: [], page: 38 },
    { term: 'الرحيم', translit: 'ar-raḥīm', meaning: 'ذو الرحمة الواصلة؛ فعله بالمخلوقين.', explanation: 'وإذا انفرد أحد الاسمين شمل الآخر.', notes: [], page: 38 },
    { term: 'الدين', translit: 'ad-dīn', meaning: 'هنا: الجزاء والحساب.', explanation: 'ويطلق على الشريعة والملة، وهو الأكثر: ﴿إن الدين عند الله الإسلام﴾.', notes: ['[الواقعة: ٨٦]', '[آل عمران: ١٩]'], page: 40 },
    { term: 'العبادة', translit: 'al-ʿibāda', meaning: 'اسم جامع لكل ما يحبه الله ويرضاه من الأعمال والأقوال الظاهرة والباطنة.', explanation: 'ولا تقبل إلا مخلصة لله وعلى هدي رسوله ﷺ.', notes: [], page: 42 },
    { term: 'الاستعانة', translit: 'al-istiʿāna', meaning: 'طلب العون والاعتماد على الله في جلب المنافع ودفع المضار مع الثقة به.', explanation: 'والدين يرجع كله إلى العبادة والتوكل.', notes: [], page: 42 },
    { term: 'الصراط المستقيم', translit: 'aṣ-ṣirāṭ al-mustaqīm', meaning: 'الطريق الواضح الذي لا اعوجاج فيه.', explanation: 'وكل أقوال المفسرين فيه ترجع إلى متابعة الله والرسول.', notes: [], page: 45 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'تربية الله لخلقه',
      intro: 'نوعان كما قال السعدي.',
      columns: ['العامة', 'الخاصة'],
      rows: [
        { label: 'لمن', cells: ['لجميع المخلوقين', 'لأوليائه'] },
        { label: 'ما هي', cells: ['الخلق والرزق والهداية لمصالحهم في الدنيا', 'التربية بالإيمان والتوفيق لكل خير والعصمة عن كل شر'] }
      ],
      page: 37
    },
    {
      type: 'compare',
      title: 'الرحمن والرحيم',
      intro: 'عند اقترانهما كما في الآية.',
      columns: ['الرحمن', 'الرحيم'],
      rows: [
        { label: 'المعنى', cells: ['ذو الرحمة الواسعة', 'ذو الرحمة الواصلة'] },
        { label: 'المراد', cells: ['وصفه في ذاته', 'فعله بالمخلوقين'] }
      ],
      page: 38
    },
    {
      type: 'cards',
      title: 'فوائد ﴿إياك نعبد وإياك نستعين﴾',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'لا عبادة إلا بعون الله', sub: 'وفيه منع للعجب والغرور', page: 43 },
        { label: 'لا يتوكل إلا على من يستحق العبادة', sub: '[هود: ١٢٣]', page: 43 },
        { label: 'للعبد اختيار وإرادة', sub: 'رد على الجبرية', page: 43 },
        { label: 'لا يفعل العبد إلا بمشيئة الله', sub: 'رد على القدرية', page: 43 },
        { label: 'الاستعانة الكاملة بالله وحده', sub: 'وتجوز بالمخلوق فيما يقدر عليه', page: 43 }
      ]
    },
    {
      type: 'compare',
      title: 'الطرق الثلاث في آخر الفاتحة',
      intro: 'العلم والعمل.',
      columns: ['المنعم عليهم', 'المغضوب عليهم', 'الضالون'],
      rows: [
        { label: 'حالهم', cells: ['جمعوا العلم بالحق والعمل به', 'علموا الحق ولم يعملوا به', 'عملوا بغير الحق جاهلين به'] },
        { label: 'المثال', cells: ['المذكورون في [النساء: ٦٩]', 'اليهود', 'النصارى'] }
      ],
      page: 46
    },
    {
      type: 'cards',
      title: 'ما اشتملت عليه الفاتحة',
      intro: 'كما قال السعدي.',
      nodes: [
        { label: 'توحيد الربوبية', sub: '﴿رب العالمين﴾', page: 48 },
        { label: 'توحيد الإلهية', sub: 'لفظ «الله» و﴿إياك نعبد﴾', page: 48 },
        { label: 'توحيد الأسماء والصفات', sub: 'إثبات صفات الكمال', page: 48 },
        { label: 'إثبات النبوة', sub: '﴿اهدنا الصراط المستقيم﴾', page: 48 },
        { label: 'إثبات الجزاء', sub: '﴿مالك يوم الدين﴾', page: 48 },
        { label: 'إثبات القدر', sub: 'العبد فاعل حقيقة', page: 48 },
        { label: 'الرد على أهل البدع', sub: '﴿اهدنا الصراط المستقيم﴾', page: 48 }
      ]
    }
  ],
  sections: [
    { title: 'لماذا سميت الفاتحة؟', text: 'قيل: لأن القرآن افتتح بها، أو لأنها أول ما نزل؛ والصحيح أن أول ما نزل ﴿اقرأ باسم ربك الذي خلق﴾.', more: '', page: 35 },
    { title: 'الحمد والمدح', text: 'لا بد في الحمد من قيد المحبة والتعظيم؛ فمجرد وصفه بالكمال إن لم يكن بمحبة وتعظيم لا يسمى حمدًا وإنما يسمى مدحًا. والألف واللام في «الحمد» للاستغراق فتشمل جميع المحامد.', more: '', page: 37 },
    { title: 'سر أدعية الأنبياء بلفظ «الرب»', text: 'قال السعدي: ولعل هذا المعنى هو السر في كون أكثر أدعية الأنبياء بلفظ الرب، فإن مطالبهم كلها داخلة تحت ربوبيته الخاصة.', more: '', page: 37 },
    { title: 'لا أديان سماوية ثلاثة', text: 'الدين الذي أرسل الله به الرسل جميعًا هو الإسلام، من آدم إلى محمد ﷺ؛ فلا صحة لقولهم: «الديانات السماوية الثلاثة»، فالدين واحد والذي يختلف الشرائع.', more: '[المائدة: ٤٨].', page: 40 },
    { title: 'سر الفاتحة', text: 'قال بعض السلف: الفاتحة سر القرآن، وسرها ﴿إياك نعبد وإياك نستعين﴾؛ فالأول تبرؤ من الشرك، والثاني تبرؤ من الحول والقوة.', more: 'وتحول الكلام من الغيبة إلى الخطاب لأن العبد لما أثنى على الله كأنه حضر بين يديه.', page: 42 },
    { title: 'نوعا الهداية', text: 'لم يقل: «اهدنا إلى الصراط»، بل عدى الفعل بنفسه ليشمل نوعي الهداية: هداية التوفيق وهداية العمل.', more: 'قال ابن جرير: أي وفقنا للثبات على ما ارتضيته.', page: 45 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الرب', items: ['من اجتمع فيه: الخلق والملك والتدبير.'], page: 37, origin: 'boek' },
    { kind: 'onderscheid', title: 'الحمد والمدح', items: ['الحمد: وصف بالكمال مع المحبة والتعظيم.', 'المدح: وصف بالكمال بلا محبة ولا تعظيم.'], page: 37, origin: 'boek' },
    { kind: 'opsomming', title: 'أسماء الفاتحة', items: ['الحمد', 'السبع المثاني', 'أم الكتاب', 'أم القرآن', 'الفاتحة'], page: 35, origin: 'boek' },
    { kind: 'onderscheid', title: 'المغضوب عليهم والضالون', items: ['المغضوب عليهم: علموا ولم يعملوا.', 'الضالون: عملوا بلا علم.'], page: 46, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الفاتحة أعظم سورة في القرآن، وهي السبع المثاني وأم الكتاب.',
    'الحمد: الثناء بالكمال مع المحبة والتعظيم.',
    'الرب: الخالق المالك المدبر؛ وتربيته عامة وخاصة.',
    'الرحمن: الرحمة الواسعة؛ الرحيم: الرحمة الواصلة.',
    'الدين: الجزاء والحساب؛ والملك يومئذ لله وحده.',
    'العبادة والاستعانة لله وحده؛ والصراط المستقيم: العلم بالحق والعمل به.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أعظم سورة في القرآن؟', options: ['الفاتحة', 'البقرة', 'الإخلاص', 'يس'], answer: 0, explain: 'كما في حديث أبي سعيد بن المعلى.', page: 34 },
    { type: 'mc', q: 'ما أول ما نزل من القرآن على الصحيح؟', options: ['﴿اقرأ باسم ربك الذي خلق﴾', 'الفاتحة', '﴿يا أيها المدثر﴾', 'آية الكرسي'], answer: 0, explain: 'كما في الكتاب.', page: 35 },
    { type: 'mc', q: 'ما الفرق بين الحمد والمدح؟', options: ['الحمد يكون مع المحبة والتعظيم', 'المدح أعم من الحمد', 'لا فرق بينهما', 'الحمد للمخلوق فقط'], answer: 0, explain: 'بدون المحبة والتعظيم يسمى مدحًا.', page: 37 },
    { type: 'mc', q: 'ما الأوصاف الثلاثة التي تجتمع في الرب؟', options: ['الخلق والملك والتدبير', 'الرحمة والعلم والقدرة', 'السمع والبصر والكلام', 'العزة والحكمة والغنى'], answer: 0, explain: 'فهو الخالق المالك المدبر.', page: 37 },
    { type: 'tf', q: 'إذا انفرد لفظ «الرحمن» لم يشمل معنى «الرحيم».', options: ['صواب', 'خطأ'], answer: 1, explain: 'إذا انفرد أحدهما شمل الآخر.', page: 38 },
    { type: 'mc', q: 'ما معنى «الدين» في ﴿مالك يوم الدين﴾؟', options: ['الجزاء والحساب', 'الشريعة', 'الملة', 'الطاعة'], answer: 0, explain: 'كقوله ﴿فلولا إن كنتم غير مدينين﴾.', page: 40 },
    { type: 'mc', q: 'على من ترد كلمة ﴿نعبد﴾ بإثبات اختيار العبد؟', options: ['الجبرية', 'القدرية', 'المعتزلة', 'الخوارج'], answer: 0, explain: 'الذين يقولون: العبد مجبور على أفعاله.', page: 43 },
    { type: 'mc', q: 'من المغضوب عليهم؟', options: ['من علم الحق ولم يعمل به', 'من عمل بغير علم', 'من جمع العلم والعمل', 'من لم تبلغه الدعوة'], answer: 0, explain: 'وهم اليهود.', page: 46 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٣٩ و٤١ و٤٤ و٤٩.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Sūrat al-Fātiḥa',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'De namen en deugden van al-Fātiḥa, en daarna de uitleg vers voor vers: lofprijzing, heerschappij en barmhartigheid, de Koning van de Dag des Oordeels, aanbidding en hulp vragen, de leiding naar het rechte pad, en tot slot de lessen en de soorten tawḥīd die de soera bevat.',
  source: { ...source, label: 'Kitāb at-Tafsīr (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Sūrat al-Fātiḥa', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Namen en deugd', sub: 'les 11', page: 34, children: ['Moeder van het Boek', 'de zeven herhaalde', 'de grootste soera'] },
      { label: 'Lof en heerschappij', sub: 'les 12', page: 37, children: ['al-ḥamd', 'ar-Rabb', 'ar-Raḥmān ar-Raḥīm'] },
      { label: 'Koning van de Dag des Oordeels', sub: 'les 13', page: 40, children: ['volledige heerschappij', 'dīn: vergelding'] },
      { label: 'Aanbidding en hulp', sub: 'les 14', page: 42, children: ['alleen U', 'tegen Jabriyya en Qadariyya'] },
      { label: 'Leiding en lessen', sub: 'les 15–16', page: 45, children: ['het rechte pad', 'toorn en dwaling', 'soorten tawḥīd'] }
    ]
  },
  points: [
    { text: 'Al-Fātiḥa is Mekkaans, de grootste soera in de Koran, en heet "de zeven herhaalde (verzen)".', page: 34 },
    { text: 'Namen: al-Ḥamd, de zeven herhaalde, de Moeder van het Boek, de Moeder van de Koran; de bekendste is al-Fātiḥa.', page: 35 },
    { text: 'Al-ḥamd is Allah prijzen om Zijn volmaakte eigenschappen, met liefde en eerbied.', page: 37 },
    { text: 'Ar-Rabb is Hij die schept, bezit en bestuurt; Zijn zorg voor de schepping is algemeen en bijzonder.', page: 37 },
    { text: 'Ar-Raḥmān heeft een allesomvattende barmhartigheid; ar-Raḥīm laat Zijn barmhartigheid de schepselen bereiken.', page: 38 },
    { text: 'Dīn in "Koning van de Dag des Oordeels" betekent vergelding en afrekening.', page: 40 },
    { text: '"U alleen aanbidden wij en U alleen vragen wij om hulp" beperkt aanbidding en volledige hulp tot Allah.', page: 42 },
    { text: 'Zij op wie toorn rust, kenden de waarheid en handelden er niet naar; de dwalenden handelden zonder kennis.', page: 46 }
  ],
  terms: [
    { term: 'الحمد', translit: 'al-ḥamd', meaning: 'Lofprijzing: Allah prijzen om Zijn volmaakte eigenschappen en Zijn daden, die gunst of rechtvaardigheid zijn.', explanation: 'Volmaaktheid toeschrijven met liefde en eerbied; zonder die twee heet het madḥ (lof).', notes: [], page: 37 },
    { term: 'الله', translit: 'Allāh', meaning: 'De Aanbedene, Die uit liefde en eerbied aanbeden wordt.', explanation: 'Deze naam wordt voor niemand anders dan Allah gebruikt.', notes: [], page: 37 },
    { term: 'الرب', translit: 'ar-rabb', meaning: 'De Heer: in Hem komen scheppen, bezitten en besturen samen.', explanation: 'In de taal ook: meester, en wie iets verzorgt om het te verbeteren.', notes: [], page: 37 },
    { term: 'العالمين', translit: 'al-ʿālamīn', meaning: 'De werelden: alles wat bestaat behalve Allah.', explanation: 'ʿĀlam is een meervoud zonder enkelvoud van dezelfde stam.', notes: [], page: 38 },
    { term: 'الرحمن', translit: 'ar-raḥmān', meaning: 'De Erbarmer: met een allesomvattende barmhartigheid die haar uiterste bereikt.', explanation: 'Een eigenschap van Allah Zelf.', notes: [], page: 38 },
    { term: 'الرحيم', translit: 'ar-raḥīm', meaning: 'De Barmhartige: wiens barmhartigheid de schepselen bereikt.', explanation: 'Staat één van beide namen alleen, dan omvat ze ook de andere.', notes: [], page: 38 },
    { term: 'الدين', translit: 'ad-dīn', meaning: 'Hier: vergelding en afrekening.', explanation: 'Meestal betekent het de godsdienst: "de godsdienst bij Allah is de islam".', notes: ['al-Wāqiʿa 56:86', 'Āl ʿImrān 3:19'], page: 40 },
    { term: 'العبادة', translit: 'al-ʿibāda', meaning: 'Aanbidding: alles wat Allah liefheeft en waarmee Hij tevreden is, aan daden en woorden, uiterlijk en innerlijk.', explanation: 'Alleen aanvaard als ze oprecht voor Allah is en volgens de leiding van de Profeet ﷺ.', notes: [], page: 42 },
    { term: 'الاستعانة', translit: 'al-istiʿāna', meaning: 'Hulp vragen en op Allah steunen om goed te verkrijgen en schade af te wenden, met vertrouwen in Hem.', explanation: 'De hele godsdienst komt neer op aanbidding en godsvertrouwen.', notes: [], page: 42 },
    { term: 'الصراط المستقيم', translit: 'aṣ-ṣirāṭ al-mustaqīm', meaning: 'Het rechte pad: de duidelijke weg zonder kromming.', explanation: 'Alle uitleg komt neer op het volgen van Allah en de Boodschapper.', notes: [], page: 45 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Allahs zorg voor de schepping',
      intro: 'Twee soorten, zoals as-Saʿdī zei.',
      columns: ['Algemeen', 'Bijzonder'],
      rows: [
        { label: 'Voor wie', cells: ['alle schepselen', 'Zijn vrienden (awliyāʾ)'] },
        { label: 'Wat', cells: ['schepping, levensonderhoud en leiding naar wat hun in deze wereld baat', 'opvoeding in geloof, succes in al het goede en bescherming tegen al het kwade'] }
      ],
      page: 37
    },
    {
      type: 'compare',
      title: 'Ar-Raḥmān en ar-Raḥīm',
      intro: 'Als ze samen staan, zoals in het vers.',
      columns: ['Ar-Raḥmān', 'Ar-Raḥīm'],
      rows: [
        { label: 'Betekenis', cells: ['allesomvattende barmhartigheid', 'barmhartigheid die de schepselen bereikt'] },
        { label: 'Bedoeld', cells: ['Zijn eigenschap', 'Zijn handelen met de schepselen'] }
      ],
      page: 38
    },
    {
      type: 'cards',
      title: 'Lessen uit "U alleen aanbidden wij …"',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Geen aanbidding zonder Allahs hulp', sub: 'dat voorkomt zelfingenomenheid', page: 43 },
        { label: 'Vertrouw alleen op wie aanbidding verdient', sub: 'Hūd 11:123', page: 43 },
        { label: 'De dienaar heeft keuze en wil', sub: 'weerlegging van de Jabriyya', page: 43 },
        { label: 'De dienaar handelt alleen door Allahs wil', sub: 'weerlegging van de Qadariyya', page: 43 },
        { label: 'Volledige hulp alleen van Allah', sub: 'hulp van mensen mag waar zij toe in staat zijn', page: 43 }
      ]
    },
    {
      type: 'compare',
      title: 'De drie wegen aan het eind van al-Fātiḥa',
      intro: 'Kennis en daad.',
      columns: ['Begunstigden', 'Toorn rust op hen', 'Dwalenden'],
      rows: [
        { label: 'Kenmerk', cells: ['kennis van de waarheid en ernaar handelen', 'kennen de waarheid en handelen er niet naar', 'handelen zonder de waarheid te kennen'] },
        { label: 'Voorbeeld', cells: ['wie genoemd zijn in an-Nisāʾ 4:69', 'de joden', 'de christenen'] }
      ],
      page: 46
    },
    {
      type: 'cards',
      title: 'Wat al-Fātiḥa bevat',
      intro: 'Zoals as-Saʿdī zei.',
      nodes: [
        { label: 'Tawḥīd van heerschappij', sub: '"Heer der werelden"', page: 48 },
        { label: 'Tawḥīd van aanbidding', sub: 'de naam "Allah" en "U alleen aanbidden wij"', page: 48 },
        { label: 'Tawḥīd van namen en eigenschappen', sub: 'volmaakte eigenschappen bevestigen', page: 48 },
        { label: 'Het profeetschap', sub: '"Leid ons op het rechte pad"', page: 48 },
        { label: 'De vergelding', sub: '"Koning van de Dag des Oordeels"', page: 48 },
        { label: 'Het lot', sub: 'de dienaar handelt werkelijk', page: 48 },
        { label: 'Weerlegging van vernieuwers', sub: '"Leid ons op het rechte pad"', page: 48 }
      ]
    }
  ],
  sections: [
    { title: 'Waarom "al-Fātiḥa"?', text: 'Gezegd wordt: omdat de Koran ermee opent, of omdat ze als eerste werd geopenbaard. Juist is dat als eerste "Lees in de naam van je Heer Die schiep" werd geopenbaard.', more: '', page: 35 },
    { title: 'Ḥamd en madḥ', text: 'Bij ḥamd horen liefde en eerbied; wie alleen volmaaktheid toeschrijft zonder liefde en eerbied, geeft madḥ (lof), geen ḥamd. Het lidwoord in al-ḥamd omvat alle soorten lof.', more: '', page: 37 },
    { title: 'Waarom profeten "Heer" zeggen', text: 'as-Saʿdī: misschien is dit de reden dat de meeste smeekbeden van de profeten met "Heer" (Rabb) beginnen, want alles wat zij vragen, valt onder Zijn bijzondere zorg.', more: '', page: 37 },
    { title: 'Geen drie "hemelse religies"', text: 'De godsdienst waarmee Allah alle boodschappers zond, is de islam, van Adam tot Muḥammad ﷺ. Daarom klopt de uitdrukking "de drie hemelse religies" niet: de godsdienst is één, de wetgevingen verschillen.', more: 'al-Māʾida 5:48.', page: 40 },
    { title: 'Het geheim van al-Fātiḥa', text: 'Een van de vroegen zei: al-Fātiḥa is het geheim van de Koran, en haar geheim is "U alleen aanbidden wij en U alleen vragen wij om hulp": het eerste is afstand nemen van shirk, het tweede van eigen kracht en macht.', more: 'De overgang naar "U" laat zien dat de dienaar na de lofprijzing als het ware vóór Allah staat.', page: 42 },
    { title: 'Twee soorten leiding', text: 'Er staat niet "leid ons náár het pad": het werkwoord staat zonder voorzetsel, zodat het beide soorten leiding omvat, volgens het boek: leiding tot succes en leiding in het handelen.', more: 'Ibn Jarīr: maak ons standvastig in wat U goedkeurt.', page: 45 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Ar-Rabb', items: ['In Hem komen scheppen, bezitten en besturen samen.'], page: 37, origin: 'boek' },
    { kind: 'onderscheid', title: 'Ḥamd en madḥ', items: ['Ḥamd: volmaaktheid toeschrijven met liefde en eerbied.', 'Madḥ: volmaaktheid toeschrijven zonder liefde en eerbied.'], page: 37, origin: 'boek' },
    { kind: 'opsomming', title: 'Namen van al-Fātiḥa', items: ['al-Ḥamd', 'de zeven herhaalde', 'Moeder van het Boek', 'Moeder van de Koran', 'al-Fātiḥa'], page: 35, origin: 'boek' },
    { kind: 'onderscheid', title: 'Toorn en dwaling', items: ['Toorn: kennen zonder te handelen.', 'Dwaling: handelen zonder kennis.'], page: 46, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Al-Fātiḥa is de grootste soera: de zeven herhaalde en de Moeder van het Boek.',
    'Ḥamd: volmaaktheid toeschrijven met liefde en eerbied.',
    'Ar-Rabb schept, bezit en bestuurt; Zijn zorg is algemeen en bijzonder.',
    'Ar-Raḥmān: allesomvattende barmhartigheid; ar-Raḥīm: barmhartigheid die bereikt.',
    'Dīn: vergelding en afrekening; die Dag is de heerschappij alleen van Allah.',
    'Aanbidding en hulp alleen bij Allah; het rechte pad is de waarheid kennen en ernaar handelen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is de grootste soera in de Koran?', options: ['al-Fātiḥa', 'al-Baqara', 'al-Ikhlāṣ', 'Yā Sīn'], answer: 0, explain: 'Zoals in de hadith van Abū Saʿīd ibn al-Muʿallā.', page: 34 },
    { type: 'mc', q: 'Wat werd volgens de juiste mening als eerste geopenbaard?', options: ['"Lees in de naam van je Heer Die schiep"', 'al-Fātiḥa', '"O jij die je hebt ingewikkeld"', 'Āyat al-Kursī'], answer: 0, explain: 'Zo staat het in het boek.', page: 35 },
    { type: 'mc', q: 'Wat is het verschil tussen ḥamd en madḥ?', options: ['bij ḥamd horen liefde en eerbied', 'madḥ is ruimer dan ḥamd', 'er is geen verschil', 'ḥamd is alleen voor mensen'], answer: 0, explain: 'Zonder liefde en eerbied heet het madḥ.', page: 37 },
    { type: 'mc', q: 'Welke drie eigenschappen komen in ar-Rabb samen?', options: ['scheppen, bezitten en besturen', 'barmhartigheid, kennis en macht', 'horen, zien en spreken', 'macht, wijsheid en rijkdom'], answer: 0, explain: 'Hij is de Schepper, Bezitter en Bestuurder.', page: 37 },
    { type: 'tf', q: 'Als ar-Raḥmān alleen staat, omvat het niet de betekenis van ar-Raḥīm.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Staat één alleen, dan omvat ze de andere.', page: 38 },
    { type: 'mc', q: 'Wat betekent dīn in "Koning van de Dag des Oordeels"?', options: ['vergelding en afrekening', 'de wetgeving', 'de godsdienst', 'gehoorzaamheid'], answer: 0, explain: 'Zoals in "als jullie niet afgerekend worden" (al-Wāqiʿa 56:86).', page: 40 },
    { type: 'mc', q: 'Wie weerlegt "wij aanbidden" door te laten zien dat de dienaar keuze heeft?', options: ['de Jabriyya', 'de Qadariyya', 'de Muʿtazila', 'de Khawārij'], answer: 0, explain: 'Zij zeggen dat de dienaar tot zijn daden gedwongen wordt.', page: 43 },
    { type: 'mc', q: 'Wie zijn "zij op wie toorn rust"?', options: ['wie de waarheid kent en er niet naar handelt', 'wie zonder kennis handelt', 'wie kennis en daad samenbrengt', 'wie de oproep niet bereikte'], answer: 0, explain: 'Dat zijn de joden.', page: 46 }
  ]),
  note: 'Oefeningen van het boek op p. 39, 41, 44 en 49. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tafsir', chapter: '11', unit: 2, ar, nl }
