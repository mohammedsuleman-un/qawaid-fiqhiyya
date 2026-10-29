// Hoofdstukkaart bij العقيدة (٤), eenheid 6: الشفاعة (les 24, boek p. 71–76).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 75 is in het boek "alleen ter kennisname".
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٤)، سلسلة زاد العلمية',
  pages: '71–76',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlAqeedah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'جابر', text: 'من قال حين يسمع النداء: اللهم رب هذه الدعوة التامة، والصلاة القائمة، آت محمدا الوسيلة والفضيلة، وابعثه مقاما محمودا الذي وعدته، حلت له شفاعتي يوم القيامة', takhrij: 'رواه البخاري', note: 'والمقام المحمود: مقام الشفاعة العظمى.', pages: [72], nl: 'Wie bij het horen van de oproep zegt: "O Allah, Heer van deze volmaakte oproep en het gebed dat begint, geef Muḥammad de wasīla en de voortreffelijkheid, en laat hem opstaan op de geprezen plaats die U hem beloofde", voor hem wordt mijn voorspraak op de Dag der Opstanding toegestaan', nlNote: 'De geprezen plaats is die van de grootste voorspraak.' },
  { narrator: 'أنس', text: 'أنا أول شفيع في الجنة', takhrij: 'رواه مسلم', note: '', pages: [73], nl: 'ik ben de eerste voorspreker voor het Paradijs', nlNote: '' },
  { narrator: 'أنس', text: 'آتي باب الجنة يوم القيامة فأستفتح، فيقول الخازن: من أنت؟ فأقول: محمد، فيقول: بك أمرت لا أفتح لأحد قبلك', takhrij: 'رواه مسلم', note: '', pages: [73], nl: 'Op de Dag der Opstanding kom ik bij de poort van het Paradijs en vraag om opening. De bewaker zegt: wie ben jij? Ik zeg: Muḥammad. Hij zegt: voor jou kreeg ik bevel; ik open voor niemand vóór jou', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'لعله تنفعه شفاعتي يوم القيامة، فيجعل في ضحضاح من النار يبلغ كعبيه، يغلي منه دماغه', takhrij: 'متفق عليه', note: 'في عمه أبي طالب؛ قال القرطبي: لا تنفعه في الخروج من النار.', pages: [73], nl: 'Misschien baat mijn voorspraak hem op de Dag der Opstanding, zodat hij in een ondiepe plek van het Vuur komt die tot zijn enkels reikt, waardoor zijn hersenen koken', nlNote: 'Over zijn oom Abū Ṭālib; al-Qurṭubī: het helpt hem niet om uit het Vuur te komen.' },
  { narrator: '', text: 'فيقول الله عز وجل: شفعت الملائكة، وشفع النبيون، وشفع المؤمنون، ولم يبق إلا أرحم الراحمين، فيقبض قبضة من النار، فيخرج منها قوما لم يعملوا خيرا قط قد عادوا حمما...', takhrij: 'في الصحيحين', note: 'شفاعة الأنبياء والملائكة والمؤمنين. (عزوه هنا كما في الكتاب.)', pages: [74, 75], nl: 'Dan zegt Allah: de engelen hebben voorspraak gedaan, de profeten en de gelovigen ook, en alleen de Meest Barmhartige van de barmhartigen blijft over. Dan neemt Hij een handvol uit het Vuur en haalt er mensen uit die nooit iets goeds deden en tot houtskool waren geworden …', nlNote: 'Voorspraak van profeten, engelen en gelovigen. (Bronvermelding zoals in het boek.)' },
  { narrator: 'أبو بكرة', text: 'يحمل الناس على الصراط يوم القيامة، فتقادع بهم جنبتا الصراط تقادع الفراش في النار، فينجي الله برحمته من يشاء، ثم يؤذن للملائكة والنبيين والشهداء أن يشفعوا، فيشفعون ويخرجون من كان في قلبه ما يزن ذرة من إيمان', takhrij: 'رواه أحمد وحسن إسناده الأرناؤوط', note: 'تقادع: تتساقط.', pages: [74], nl: 'Op de Dag der Opstanding worden de mensen over de brug (ṣirāṭ) gedragen; aan beide kanten vallen ze eraf zoals motten in het vuur. Allah redt in Zijn barmhartigheid wie Hij wil. Daarna krijgen de engelen, profeten en martelaren toestemming voorspraak te doen; zij doen voorspraak en halen eruit wie een stofje geloof in zijn hart had', nlNote: '' },
  { narrator: 'أبو الدرداء', text: 'يشفع الشهيد في سبعين من أهل بيته', takhrij: 'رواه أبو داود وصححه الألباني', note: FYI, pages: [75], nl: 'de martelaar doet voorspraak voor zeventig van zijn huisgenoten', nlNote: FYI_NL },
  { narrator: 'المقدام بن معدي كرب', text: 'للشهيد عند الله ست خصال... ويشفع في سبعين من أقاربه', takhrij: 'رواه أحمد والترمذي وابن ماجه وصححه الألباني', note: FYI, pages: [75], nl: 'de martelaar heeft bij Allah zes eigenschappen … en hij doet voorspraak voor zeventig van zijn verwanten', nlNote: FYI_NL },
  { narrator: 'ابن عباس', text: 'ما من رجل مسلم يموت، فيقوم على جنازته أربعون رجلا، لا يشركون بالله شيئا، إلا شفعهم الله فيه', takhrij: 'رواه مسلم', note: 'شفاعة المؤمنين بعضهم لبعض. ' + FYI, pages: [75], nl: 'als een moslim sterft en veertig mannen die Allah niets toevoegen het begrafenisgebed voor hem verrichten, aanvaardt Allah hun voorspraak voor hem', nlNote: 'Voorspraak van gelovigen voor elkaar. ' + FYI_NL }
]

const TAKHRIJ_NL = {
  'رواه البخاري': 'al-Bukhārī',
  'رواه مسلم': 'Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s (zoals het boek vermeldt)',
  'رواه أحمد وحسن إسناده الأرناؤوط': 'Aḥmad; al-Arnaʾūṭ noemde de keten goed (ḥasan)',
  'رواه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه أحمد والترمذي وابن ماجه وصححه الألباني': 'Aḥmad, at-Tirmidhī en Ibn Māja; authentiek volgens al-Albānī'
}
const NARRATOR_NL = { 'جابر': 'Jābir ibn ʿAbd Allāh', 'أنس': 'Anas ibn Mālik', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'أبو بكرة': 'Abū Bakra', 'أبو الدرداء': 'Abū ad-Dardāʾ', 'المقدام بن معدي كرب': 'al-Miqdām ibn Maʿdīkarib', 'ابن عباس': 'Ibn ʿAbbās' }

const PERSONS = [
  ['jabir-ibn-abdallah', 'text', [72], 'روى دعاء الأذان: «حلت له شفاعتي».', 'Overleverde het smeekgebed na de oproep: "voor hem wordt mijn voorspraak toegestaan".'],
  ['anas-ibn-malik', 'text', [73], 'روى «أنا أول شفيع في الجنة» وحديث استفتاح باب الجنة.', 'Overleverde "ik ben de eerste voorspreker voor het Paradijs" en de hadith over het openen van de poort.'],
  ['abu-said-al-khudri', 'text', [73], 'روى حديث الشفاعة لأبي طالب.', 'Overleverde de hadith over de voorspraak voor Abū Ṭālib.'],
  ['al-qurtubi', 'text', [73], 'قال: لا تنفع أبا طالب الشفاعة في الخروج من النار كما تنفع عصاة الموحدين.', 'Zei: de voorspraak helpt Abū Ṭālib niet om uit het Vuur te komen, zoals ze zondige monotheïsten wel helpt.'],
  ['abu-bakra', 'text', [74], 'روى حديث الصراط وشفاعة الملائكة والنبيين والشهداء.', 'Overleverde de hadith over de brug en de voorspraak van engelen, profeten en martelaren.'],
  ['abu-ad-darda', 'text', [75], 'روى «يشفع الشهيد في سبعين من أهل بيته».', 'Overleverde: "de martelaar doet voorspraak voor zeventig van zijn huisgenoten".'],
  ['al-miqdam-ibn-madikarib', 'text', [75], 'روى حديث خصال الشهيد الست.', 'Overleverde de hadith over de zes eigenschappen van de martelaar.'],
  ['ibn-abbas', 'text', [75], 'روى حديث الأربعين الذين يصلون على الجنازة.', 'Overleverde de hadith over de veertig die het begrafenisgebed verrichten.'],
  ['al-bukhari', 'takhrij', [72, 73, 74], 'أخرج أحاديث من الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [73, 74, 75], 'أخرج أحاديث من الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [74, 75], 'روى حديث أبي بكرة وحديث المقدام.', 'Overleverde de hadith van Abū Bakra en die van al-Miqdām.'],
  ['al-arnaut', 'takhrij', [74], 'حسن إسناد حديث أبي بكرة.', 'Noemde de keten van de hadith van Abū Bakra goed.'],
  ['abu-dawud', 'takhrij', [75], 'روى حديث أبي الدرداء.', 'Overleverde de hadith van Abū ad-Dardāʾ.'],
  ['at-tirmidhi', 'takhrij', [75], 'روى حديث المقدام.', 'Overleverde de hadith van al-Miqdām.'],
  ['ibn-maja', 'takhrij', [75], 'روى حديث المقدام.', 'Overleverde de hadith van al-Miqdām.'],
  ['al-albani', 'takhrij', [75], 'صحح أحاديث الشهيد.', 'Verklaarde de hadith over de martelaar authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 6,
  title: 'الشفاعة',
  subtitle: 'درس واحد في صفحة واحدة',
  summary: 'تعريف الشفاعة لغة واصطلاحًا، وقسماها: الخاصة بالنبي ﷺ بأنواعها الثلاثة، والعامة للأنبياء والملائكة والشهداء والمؤمنين، وشرطا قبولها، والشفاعة الباطلة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السادسة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'الشفاعة', sub: 'الوحدة السادسة' },
    nodes: [
      { label: 'التعريف', sub: 'الدرس ٢٤', page: 72, children: ['ضد الوتر', 'التوسط للغير'] },
      { label: 'الخاصة', sub: 'الدرس ٢٤', page: 72, children: ['العظمى', 'دخول الجنة', 'أبو طالب'] },
      { label: 'العامة', sub: 'الدرس ٢٤', page: 73, children: ['الأنبياء', 'الملائكة', 'الشهداء', 'المؤمنون'] },
      { label: 'الشروط', sub: 'الدرس ٢٤', page: 74, children: ['إذن الله', 'رضاه عن الشافع والمشفوع له'] }
    ]
  },
  points: [
    { text: 'الشفاعة اصطلاحًا: التوسط للغير بجلب منفعة أو دفع مضرة.', page: 72 },
    { text: 'الشفاعة الأخروية لا تكون إلا لأهل التوحيد الخالص.', page: 72 },
    { text: 'الشفاعة العظمى لأهل الموقف أن يحاسبوا، وهي المقام المحمود.', page: 72 },
    { text: 'من الشفاعة الخاصة: شفاعته ﷺ لأهل الجنة أن يدخلوها، ولعمه أبي طالب أن يخفف عنه العذاب.', page: 73 },
    { text: 'الشفاعة العامة لعصاة المؤمنين أن يخرجوا من النار، وتكون للأنبياء والملائكة والشهداء والمؤمنين.', page: 73 },
    { text: 'لا تقبل الشفاعة إلا بإذن الله ورضاه عن الشافع والمشفوع له.', page: 74 },
    { text: 'الشفاعة الباطلة: ما يدعيه المشركون من شفاعة آلهتهم.', page: 75 }
  ],
  terms: [
    { term: 'الشفاعة', translit: 'ash-shafāʿa', meaning: 'لغة: من الشفع، وهو ضد الوتر.', explanation: 'اصطلاحًا: التوسط للغير بجلب منفعة أو دفع مضرة.', notes: [], page: 72 },
    { term: 'الشفاعة الأخروية', translit: 'ash-shafāʿa al-ukhrawiyya', meaning: 'التوسط عند الله في التجاوز عن ذنوب العباد في الآخرة.', explanation: 'ولا تكون إلا لأهل التوحيد الخالص.', notes: [], page: 72 },
    { term: 'الشفاعة العظمى', translit: 'ash-shafāʿa al-ʿuẓmā', meaning: 'شفاعته ﷺ لأهل الموقف أن يحاسبوا.', explanation: 'يأتي الناس الأنبياء فيعتذرون حتى يأتوا محمدًا ﷺ فيقول: أنا لها.', notes: ['[الإسراء: ٧٩]'], page: 72 },
    { term: 'المقام المحمود', translit: 'al-maqām al-maḥmūd', meaning: 'المقام الذي تحمده عليه جميع الخلائق.', explanation: 'وهو مقام الشفاعة العظمى.', notes: [], page: 72 },
    { term: 'الشفاعة العامة', translit: 'ash-shafāʿa al-ʿāmma', meaning: 'أن يأذن الله لمن شاء من عباده الصالحين أن يشفعوا فيمن أذن لهم فيه.', explanation: 'وهي لعصاة المؤمنين أن يخرجوا من النار.', notes: [], page: 73 },
    { term: 'الضحضاح', translit: 'aḍ-ḍaḥḍāḥ', meaning: 'الموضع القريب القعر من النار، يبلغ الكعبين.', explanation: 'في حديث الشفاعة لأبي طالب.', notes: [], page: 73 },
    { term: 'الشفاعة الباطلة', translit: 'ash-shafāʿa al-bāṭila', meaning: 'الشفاعة التي لا تنفع أصحابها.', explanation: 'وهي ما يدعيه المشركون من شفاعة آلهتهم لهم عند الله.', notes: ['[المدثر: ٤٨]'], page: 75 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'أقسام الشفاعة',
      intro: 'قسمان كما في الكتاب.',
      root: { label: 'الشفاعة', page: 72 },
      nodes: [
        { label: 'الخاصة بالنبي ﷺ', children: ['الشفاعة العظمى لأهل الموقف', 'لأهل الجنة أن يدخلوها', 'لعمه أبي طالب أن يخفف عنه'], page: 72 },
        { label: 'العامة', children: ['الأنبياء', 'الملائكة', 'الشهداء', 'المؤمنون بعضهم لبعض'], page: 73 }
      ]
    },
    {
      type: 'compare',
      title: 'الخاصة والعامة',
      intro: 'الفرق بين القسمين.',
      columns: ['الخاصة', 'العامة'],
      rows: [
        { label: 'الشافع', cells: ['النبي ﷺ وحده', 'الأنبياء والملائكة والشهداء والمؤمنون'] },
        { label: 'المشفوع لهم', cells: ['أهل الموقف، أهل الجنة، أبو طالب', 'عصاة المؤمنين'] },
        { label: 'الغاية', cells: ['الحساب، دخول الجنة، تخفيف العذاب', 'الخروج من النار'] }
      ],
      page: 73
    },
    {
      type: 'steps',
      title: 'شرطا قبول الشفاعة',
      intro: 'ليس كل شافع يشفع، وليست كل شفاعة تقبل.',
      nodes: [
        { label: 'إذن الله عز وجل', sub: '[يونس: ٣]، [سبأ: ٢٣]', page: 74 },
        { label: 'رضا الله عن الشافع وعن المشفوع له', sub: '[طه: ١٠٩]، [الأنبياء: ٢٨]، [النجم: ٢٦]', page: 74 }
      ]
    }
  ],
  sections: [
    { title: 'الشفاعة العظمى', text: 'يمكث الناس يوم القيامة زمانًا طويلًا في يوم كان مقداره خمسين ألف سنة، فيأتون إلى الأنبياء فيعتذرون حتى يأتوا محمدًا ﷺ فيقول: أنا لها، أنا لها.', more: '[الإسراء: ٧٩].', page: 72 },
    { title: 'أبو طالب وآية المدثر', text: 'قال القرطبي: فإن قيل: قال تعالى: ﴿فما تنفعهم شفاعة الشافعين﴾، قيل: لا تنفعه في الخروج من النار كما تنفع عصاة الموحدين الذين يخرجون منها ويدخلون الجنة.', more: '', page: 73 },
    { title: 'شفاعة الملائكة', text: 'ثابتة بالقرآن والسنة، كقوله تعالى: ﴿وكم من ملك في السماوات لا تغني شفاعتهم شيئًا إلا من بعد أن يأذن الله لمن يشاء ويرضى﴾.', more: '[النجم: ٢٦]، [الأنبياء: ٢٨].', page: 74 },
    { title: 'شفاعة الشهداء والمؤمنين (للاطلاع فقط)', text: 'يشفع الشهيد في سبعين من أهل بيته، ويشفع المسلمون في الميت إذا قام على جنازته أربعون لا يشركون بالله شيئًا.', more: FYI, page: 75 },
    { title: 'لماذا لا تنفع شفاعة آلهة المشركين؟', text: 'لأن الله تعالى لا يرضى لهؤلاء المشركين شركهم، ولا يمكن أن يأذن بالشفاعة لهم.', more: '[المدثر: ٤٨].', page: 75 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الشفاعة', items: ['التوسط للغير بجلب منفعة أو دفع مضرة.'], page: 72, origin: 'boek' },
    { kind: 'opsomming', title: 'الشفاعة الخاصة', items: ['العظمى لأهل الموقف', 'لأهل الجنة', 'لأبي طالب'], page: 72, origin: 'boek' },
    { kind: 'opsomming', title: 'شرطا القبول', items: ['إذن الله', 'رضاه عن الشافع والمشفوع له'], page: 74, origin: 'boek' },
    { kind: 'regel', title: 'لمن الشفاعة؟', items: ['لا تكون الشفاعة الأخروية إلا لأهل التوحيد الخالص.'], page: 72, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الشفاعة: التوسط للغير بجلب منفعة أو دفع مضرة.',
    'لا تكون الشفاعة الأخروية إلا لأهل التوحيد.',
    'الخاصة: العظمى، ودخول الجنة، وتخفيف العذاب عن أبي طالب.',
    'العامة: لعصاة المؤمنين، من الأنبياء والملائكة والشهداء والمؤمنين.',
    'الشرطان: إذن الله، ورضاه عن الشافع والمشفوع له.',
    'شفاعة آلهة المشركين باطلة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى الشفع لغة؟', options: ['ضد الوتر', 'الدعاء', 'الشفاء', 'الطلب'], answer: 0, explain: 'فتجعل الواحد اثنين.', page: 72 },
    { type: 'mc', q: 'ما الشفاعة العظمى؟', options: ['شفاعته ﷺ لأهل الموقف أن يحاسبوا', 'شفاعته لأبي طالب', 'شفاعة الشهداء', 'شفاعة الملائكة'], answer: 0, explain: 'وهي المقام المحمود.', page: 72 },
    { type: 'tf', q: 'الشفاعة الأخروية تكون لكل الناس.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا تكون إلا لأهل التوحيد الخالص.', page: 72 },
    { type: 'mc', q: 'من أول من يستفتح باب الجنة؟', options: ['محمد ﷺ', 'إبراهيم', 'موسى', 'الملائكة'], answer: 0, explain: '«بك أمرت لا أفتح لأحد قبلك».', page: 73 },
    { type: 'mc', q: 'ما الذي تنفع فيه الشفاعة أبا طالب؟', options: ['تخفيف العذاب', 'الخروج من النار', 'دخول الجنة', 'لا تنفعه شيئًا'], answer: 0, explain: 'فيجعل في ضحضاح من النار.', page: 73 },
    { type: 'mc', q: 'لمن الشفاعة العامة؟', options: ['لعصاة المؤمنين أن يخرجوا من النار', 'للمشركين', 'لأهل الموقف', 'لأبي طالب'], answer: 0, explain: 'وهي ثابتة للأنبياء والملائكة والشهداء والمؤمنين.', page: 73 },
    { type: 'mc', q: 'ما شرطا قبول الشفاعة؟', options: ['إذن الله ورضاه عن الشافع والمشفوع له', 'كثرة الشافعين وصلاحهم', 'قرابة الشافع وحده', 'طلب المشفوع له'], answer: 0, explain: '[طه: ١٠٩].', page: 74 },
    { type: 'tf', q: 'شفاعة آلهة المشركين لا تنفعهم.', options: ['صواب', 'خطأ'], answer: 0, explain: '[المدثر: ٤٨].', page: 75 }
  ]),
  note: 'نشاط الكتاب في صفحة ٧٦. ما كان في الكتاب للاطلاع فقط مشار إليه في موضعه.'
}

const nl = {
  scope: 'unit',
  unit: 6,
  title: 'De voorspraak',
  subtitle: 'Eén les op één pagina',
  summary: 'Wat voorspraak (shafāʿa) is in taal en vakterm, de twee soorten: de bijzondere voorspraak van de Profeet ﷺ in drie vormen en de algemene voorspraak van profeten, engelen, martelaren en gelovigen, de twee voorwaarden, en de valse voorspraak.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (4), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 6 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De voorspraak', sub: 'Eenheid 6' },
    nodes: [
      { label: 'Definitie', sub: 'les 24', page: 72, children: ['het tegendeel van oneven', 'bemiddelen voor een ander'] },
      { label: 'Bijzonder', sub: 'les 24', page: 72, children: ['de grootste', 'het Paradijs binnengaan', 'Abū Ṭālib'] },
      { label: 'Algemeen', sub: 'les 24', page: 73, children: ['profeten', 'engelen', 'martelaren', 'gelovigen'] },
      { label: 'Voorwaarden', sub: 'les 24', page: 74, children: ['Allahs toestemming', 'Zijn tevredenheid'] }
    ]
  },
  points: [
    { text: 'Voorspraak als vakterm: voor een ander bemiddelen om iets goeds te verkrijgen of iets schadelijks af te wenden.', page: 72 },
    { text: 'Voorspraak in het Hiernamaals is alleen voor wie Allah zuiver als Enige aanbidt.', page: 72 },
    { text: 'De grootste voorspraak is voor alle mensen op de Verzamelplaats, opdat de afrekening begint; dat is de geprezen plaats.', page: 72 },
    { text: 'Ook bijzonder: zijn voorspraak ﷺ voor de bewoners van het Paradijs om binnen te gaan, en voor zijn oom Abū Ṭālib om de straf te verlichten.', page: 73 },
    { text: 'De algemene voorspraak is voor zondige gelovigen om uit het Vuur te komen; profeten, engelen, martelaren en gelovigen doen haar.', page: 73 },
    { text: 'Voorspraak wordt alleen aanvaard met Allahs toestemming en als Hij tevreden is met wie voorspreekt en voor wie.', page: 74 },
    { text: 'Valse voorspraak: wat polytheïsten van hun goden verwachten.', page: 75 }
  ],
  terms: [
    { term: 'الشفاعة', translit: 'ash-shafāʿa', meaning: 'Voorspraak. Taal: van shafʿ, het tegendeel van oneven.', explanation: 'Vakterm: voor een ander bemiddelen om iets goeds te verkrijgen of iets schadelijks af te wenden.', notes: [], page: 72 },
    { term: 'الشفاعة الأخروية', translit: 'ash-shafāʿa al-ukhrawiyya', meaning: 'Voorspraak in het Hiernamaals: bij Allah bemiddelen om de zonden van dienaren te vergeven.', explanation: 'Alleen voor wie Allah zuiver als Enige aanbidt.', notes: [], page: 72 },
    { term: 'الشفاعة العظمى', translit: 'ash-shafāʿa al-ʿuẓmā', meaning: 'De grootste voorspraak: van de Profeet ﷺ voor de mensen op de Verzamelplaats, opdat de afrekening begint.', explanation: 'De mensen gaan naar de profeten, die zich verontschuldigen, tot ze bij Muḥammad ﷺ komen en hij zegt: dat is aan mij.', notes: ['al-Isrāʾ 17:79'], page: 72 },
    { term: 'المقام المحمود', translit: 'al-maqām al-maḥmūd', meaning: 'De geprezen plaats: waarvoor alle schepselen hem prijzen.', explanation: 'Dat is de plaats van de grootste voorspraak.', notes: [], page: 72 },
    { term: 'الشفاعة العامة', translit: 'ash-shafāʿa al-ʿāmma', meaning: 'Algemene voorspraak: Allah staat vrome dienaren toe voorspraak te doen voor wie Hij wil.', explanation: 'Voor zondige gelovigen, om uit het Vuur te komen.', notes: [], page: 73 },
    { term: 'الضحضاح', translit: 'aḍ-ḍaḥḍāḥ', meaning: 'Een ondiepe plek in het Vuur die tot de enkels reikt.', explanation: 'In de hadith over de voorspraak voor Abū Ṭālib.', notes: [], page: 73 },
    { term: 'الشفاعة الباطلة', translit: 'ash-shafāʿa al-bāṭila', meaning: 'Valse voorspraak: die haar aanhangers niet baat.', explanation: 'Wat polytheïsten beweren over de voorspraak van hun goden bij Allah.', notes: ['al-Muddaththir 74:48'], page: 75 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'Soorten voorspraak',
      intro: 'Twee soorten, zoals in het boek.',
      root: { label: 'De voorspraak', page: 72 },
      nodes: [
        { label: 'Bijzonder voor de Profeet ﷺ', children: ['de grootste, voor de Verzamelplaats', 'voor de bewoners van het Paradijs om binnen te gaan', 'voor Abū Ṭālib om de straf te verlichten'], page: 72 },
        { label: 'Algemeen', children: ['profeten', 'engelen', 'martelaren', 'gelovigen voor elkaar'], page: 73 }
      ]
    },
    {
      type: 'compare',
      title: 'Bijzonder en algemeen',
      intro: 'Het verschil tussen de twee soorten.',
      columns: ['Bijzonder', 'Algemeen'],
      rows: [
        { label: 'Wie spreekt voor', cells: ['alleen de Profeet ﷺ', 'profeten, engelen, martelaren en gelovigen'] },
        { label: 'Voor wie', cells: ['de Verzamelplaats, de bewoners van het Paradijs, Abū Ṭālib', 'zondige gelovigen'] },
        { label: 'Doel', cells: ['afrekening, het Paradijs binnengaan, verlichting', 'uit het Vuur komen'] }
      ],
      page: 73
    },
    {
      type: 'steps',
      title: 'Twee voorwaarden voor aanvaarding',
      intro: 'Niet iedereen mag voorspreken en niet elke voorspraak wordt aanvaard.',
      nodes: [
        { label: 'Allahs toestemming', sub: 'Yūnus 10:3, Sabaʾ 34:23', page: 74 },
        { label: 'Allahs tevredenheid met wie voorspreekt en voor wie', sub: 'Ṭā Hā 20:109, al-Anbiyāʾ 21:28, an-Najm 53:26', page: 74 }
      ]
    }
  ],
  sections: [
    { title: 'De grootste voorspraak', text: 'Op de Dag der Opstanding wachten de mensen heel lang, op een dag die vijftigduizend jaar duurt. Ze gaan naar de profeten, die zich verontschuldigen, tot ze bij Muḥammad ﷺ komen en hij zegt: dat is aan mij, dat is aan mij.', more: 'al-Isrāʾ 17:79.', page: 72 },
    { title: 'Abū Ṭālib en het vers uit al-Muddaththir', text: 'al-Qurṭubī: als iemand zegt dat Allah zegt "de voorspraak van voorsprekers baat hen niet", dan is het antwoord: het helpt hem niet om uit het Vuur te komen, zoals het zondige monotheïsten wel helpt, die eruit komen en het Paradijs binnengaan.', more: '', page: 73 },
    { title: 'De voorspraak van de engelen', text: 'Bevestigd in Koran en Sunna, zoals: "Hoeveel engelen zijn er in de hemelen wier voorspraak niets baat, behalve nadat Allah toestemming geeft aan wie Hij wil en met wie Hij tevreden is."', more: 'an-Najm 53:26, al-Anbiyāʾ 21:28.', page: 74 },
    { title: 'Martelaren en gelovigen (alleen ter kennisname)', text: 'De martelaar doet voorspraak voor zeventig van zijn huisgenoten, en voor een overleden moslim wordt voorspraak aanvaard als veertig mensen die Allah niets toevoegen het begrafenisgebed voor hem verrichten.', more: FYI_NL, page: 75 },
    { title: 'Waarom de goden van polytheïsten niet baten', text: 'Omdat Allah niet tevreden is met hun shirk en hun nooit toestemming voor voorspraak zal geven.', more: 'al-Muddaththir 74:48.', page: 75 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Voorspraak', items: ['Voor een ander bemiddelen om iets goeds te verkrijgen of iets schadelijks af te wenden.'], page: 72, origin: 'boek' },
    { kind: 'opsomming', title: 'Bijzondere voorspraak', items: ['de grootste, voor de Verzamelplaats', 'voor de bewoners van het Paradijs', 'voor Abū Ṭālib'], page: 72, origin: 'boek' },
    { kind: 'opsomming', title: 'Voorwaarden', items: ['Allahs toestemming', 'Zijn tevredenheid met voorspreker en wie voorgesproken wordt'], page: 74, origin: 'boek' },
    { kind: 'regel', title: 'Voor wie?', items: ['Voorspraak in het Hiernamaals is alleen voor wie Allah zuiver als Enige aanbidt.'], page: 72, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Voorspraak: voor een ander bemiddelen om goed te verkrijgen of schade af te wenden.',
    'Voorspraak in het Hiernamaals is alleen voor monotheïsten.',
    'Bijzonder: de grootste, het Paradijs binnengaan en verlichting voor Abū Ṭālib.',
    'Algemeen: voor zondige gelovigen, door profeten, engelen, martelaren en gelovigen.',
    'Voorwaarden: Allahs toestemming en Zijn tevredenheid.',
    'De voorspraak van de goden van polytheïsten is vals.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent shafʿ in de taal?', options: ['het tegendeel van oneven', 'smeekgebed', 'genezing', 'verzoek'], answer: 0, explain: 'Je maakt van één twee.', page: 72 },
    { type: 'mc', q: 'Wat is de grootste voorspraak?', options: ['zijn voorspraak ﷺ voor de Verzamelplaats, opdat de afrekening begint', 'zijn voorspraak voor Abū Ṭālib', 'de voorspraak van martelaren', 'de voorspraak van engelen'], answer: 0, explain: 'Dat is de geprezen plaats.', page: 72 },
    { type: 'tf', q: 'Voorspraak in het Hiernamaals is voor alle mensen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Alleen voor wie Allah zuiver als Enige aanbidt.', page: 72 },
    { type: 'mc', q: 'Wie vraagt als eerste om opening van de poort van het Paradijs?', options: ['Muḥammad ﷺ', 'Ibrāhīm', 'Mūsā', 'de engelen'], answer: 0, explain: '"Voor jou kreeg ik bevel; ik open voor niemand vóór jou."', page: 73 },
    { type: 'mc', q: 'Waarin helpt de voorspraak Abū Ṭālib?', options: ['verlichting van de straf', 'uit het Vuur komen', 'het Paradijs binnengaan', 'nergens in'], answer: 0, explain: 'Hij komt op een ondiepe plek in het Vuur.', page: 73 },
    { type: 'mc', q: 'Voor wie is de algemene voorspraak?', options: ['zondige gelovigen, om uit het Vuur te komen', 'polytheïsten', 'de Verzamelplaats', 'Abū Ṭālib'], answer: 0, explain: 'Profeten, engelen, martelaren en gelovigen doen haar.', page: 73 },
    { type: 'mc', q: 'Wat zijn de twee voorwaarden voor aanvaarding?', options: ['Allahs toestemming en Zijn tevredenheid met voorspreker en voorgesprokene', 'veel en vrome voorsprekers', 'alleen verwantschap met de voorspreker', 'het verzoek van wie voorgesproken wordt'], answer: 0, explain: 'Ṭā Hā 20:109.', page: 74 },
    { type: 'tf', q: 'De voorspraak van hun goden baat de polytheïsten niet.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'al-Muddaththir 74:48.', page: 75 }
  ]),
  note: 'Oefening van het boek op p. 76. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n4-aqeedah', chapter: '24', unit: 6, ar, nl }
