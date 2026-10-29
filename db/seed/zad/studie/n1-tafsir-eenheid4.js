// Hoofdstukkaart bij التفسير (١), eenheid 4: خواتيم سورة البقرة (lessen 20–24, boek p. 63–78).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 70 (deels), 76 en 77 zijn in het boek "alleen ter
// kennisname". Bij de hadith over de twee lichten noemt het boek hier Jibrīl als spreker; in de
// bewoording die het boek zelf op p. 36 geeft, is het een engel die neerdaalt (zie de opmerking).
// Weggelaten: het bericht van Asmāʾ (p. 77), omdat over de inhaalplicht verschillend is overgeleverd.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (١)، سلسلة زاد العلمية',
  pages: '63–78',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTafsir/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'ابن عباس', text: 'أبشر بنورين أوتيتهما لم يؤتهما نبي قبلك: فاتحة الكتاب، وخواتيم سورة البقرة، لن تقرأ بحرف منهما إلا أعطيته', takhrij: 'أخرجه مسلم', note: 'في فضل خواتيم البقرة. نسبه الكتاب هنا إلى جبريل؛ وفي لفظ الحديث كما ذكره الكتاب في سورة الفاتحة أن ملكًا نزل فقاله.', pages: [64, 67], nl: 'Verheug je over twee lichten die jou gegeven zijn en die geen profeet vóór jou kreeg: de Opening van het Boek en het slot van Sūrat al-Baqara; je leest er geen letter van of het wordt je gegeven', nlNote: 'Over de deugd van het slot van al-Baqara. Het boek noemt hier Jibrīl als spreker; in de bewoording die het boek bij al-Fātiḥa geeft, is het een engel die neerdaalt.' },
  { narrator: 'أبو ذر', text: 'أعطيت خواتيم سورة البقرة من كنز تحت العرش، لم يعطهن نبي قبلي', takhrij: 'أخرجه أحمد وصححه الألباني', note: '', pages: [67], nl: 'mij is het slot van Sūrat al-Baqara gegeven uit een schat onder de Troon; geen profeet vóór mij kreeg het', nlNote: '' },
  { narrator: 'أبو مسعود', text: 'من قرأ بالآيتين من آخر سورة البقرة في ليلة كفتاه', takhrij: 'أخرجه البخاري ومسلم', note: 'فضل العمل بها.', pages: [64, 67], nl: 'wie ’s nachts de laatste twee verzen van Sūrat al-Baqara reciteert, voor hem zijn ze genoeg', nlNote: 'De deugd van ernaar handelen.' },
  { narrator: 'أبو هريرة', text: 'أتريدون أن تقولوا كما قال أهل الكتابين من قبلكم: سمعنا وعصينا؟ بل قولوا: سمعنا وأطعنا، غفرانك ربنا وإليك المصير', takhrij: 'أخرجه مسلم', note: 'سبب النزول: لما اشتد على الصحابة ﴿وإن تبدوا ما في أنفسكم أو تخفوه يحاسبكم به الله﴾، ثم نسخها الله بـ﴿لا يكلف الله نفسا إلا وسعها﴾.', pages: [66], nl: 'Willen jullie zeggen wat de mensen van de twee Boeken vóór jullie zeiden: "wij horen en wij zijn ongehoorzaam"? Zeg liever: "wij horen en wij gehoorzamen; Uw vergeving, onze Heer, en naar U is de terugkeer"', nlNote: 'Aanleiding van de openbaring: "of jullie tonen wat in jullie is of het verbergen, Allah rekent jullie ermee af" viel de metgezellen zwaar; daarna hief Allah het op met "Allah belast een ziel slechts naar haar vermogen".' },
  { narrator: 'ابن عباس', text: 'فكانت هذه الوسوسة مما لا طاقة للمسلمين بها، وصار الأمر إلى أن قضى الله عز وجل أن للنفس ما كسبت وعليها ما اكتسبت في القول والفعل', takhrij: '', note: 'أثر، ذكره الكتاب بلا عزو.', pages: [68], nl: 'Deze influisteringen konden de moslims niet dragen, en het werd zo dat Allah besliste dat een ziel krijgt wat zij verdiende en draagt wat zij op zich laadde, in woord en daad', nlNote: 'Een uitspraak van Ibn ʿAbbās; het boek noemt geen bron.' },
  { narrator: 'أبو هريرة', text: 'إن الله تجاوز لي عن أمتي ما وسوست به صدورها ما لم تعمل أو تكلم', takhrij: 'رواه البخاري ومسلم', note: 'وفي الصحيحين عنه: «قال الله: إذا هم عبدي بسيئة فلا تكتبوها عليه...».', pages: [68], nl: 'Allah heeft mijn gemeenschap vergeven wat in hun borst opkomt, zolang ze er niet naar handelen of erover spreken', nlNote: 'In de twee Ṣaḥīḥ’s ook van hem: "Allah zegt: als Mijn dienaar een slechte daad van plan is, schrijf die dan niet op …".' },
  { narrator: '', text: 'من اقتطع شبرا من الأرض ظلما طوقه الله إياه يوم القيامة من سبع أرضين', takhrij: 'أخرجه البخاري ومسلم', note: 'دليل من السنة على أن الأرضين سبع.', pages: [69], nl: 'wie onrechtmatig een span grond inpikt, die zal Allah op de Dag der Opstanding als een halsband omdoen uit zeven aardes', nlNote: 'Bewijs uit de Sunna dat er zeven aardes zijn.' },
  { narrator: 'ابن عباس', text: 'إن الله وضع عن أمتي الخطأ والنسيان وما استكرهوا عليه', takhrij: 'أخرجه ابن ماجه وصححه الألباني', note: 'في تفسير ﴿ربنا لا تؤاخذنا إن نسينا أو أخطأنا﴾.', pages: [74], nl: 'Allah heeft mijn gemeenschap vrijgesteld van vergissing, vergeten en waartoe ze gedwongen worden', nlNote: 'Bij de uitleg van "Onze Heer, rek ons niet af als wij vergeten of ons vergissen".' },
  { narrator: 'ابن عباس', text: 'قال الله: قد فعلت', takhrij: 'أخرجه مسلم', note: 'بعد كل دعاء من خواتيم البقرة. وفي رواية أبي هريرة عند مسلم: «قال: نعم».', pages: [66, 74, 76], nl: 'Allah zei: Ik heb het gedaan', nlNote: 'Na elk smeekgebed in het slot van al-Baqara. In de overlevering van Abū Hurayra bij Muslim: "Hij zei: ja".' },
  { narrator: '', text: 'من نسي صلاة فليصلها إذا ذكرها', takhrij: 'متفق عليه', note: 'من ترك الواجب نسيانا لم تسقط المطالبة به. ' + FYI, pages: [77], nl: 'wie een gebed vergeet, laat hem het verrichten zodra hij eraan denkt', nlNote: 'Wie een plicht vergeet, blijft verplicht die te doen. ' + FYI_NL },
  { narrator: '', text: 'ارجع فصل فإنك لم تصل', takhrij: 'متفق عليه', note: 'قاله للمسيء صلاته، ولم يعذره بالجهل. ' + FYI, pages: [77], nl: 'ga terug en bid, want je hebt niet gebeden', nlNote: 'Gezegd tegen de man die zijn gebed slecht verrichtte; onwetendheid ontsloeg hem niet. ' + FYI_NL },
  { narrator: '', text: 'من نسي وهو صائم فأكل أو شرب فليتم صومه', takhrij: 'متفق عليه', note: 'من فعل المنهي ناسيا فلا إثم ولا كفارة. ' + FYI, pages: [77], nl: 'wie vastend vergeet en eet of drinkt, laat hem zijn vasten voltooien', nlNote: 'Wie iets verbodens vergeetachtig doet, heeft geen zonde en geen boete. ' + FYI_NL },
  { narrator: 'أبو هريرة', text: 'يا رسول الله هلكت... وقعت على امرأتي وأنا صائم', takhrij: 'في الصحيحين', note: 'ألزمه الكفارة لأنه كان عالما بالحكم، بدليل قوله: «هلكت». ' + FYI, pages: [77], nl: 'Boodschapper van Allah, ik ben verloren … ik heb gemeenschap gehad met mijn vrouw terwijl ik vastte', nlNote: 'De Profeet ﷺ legde hem de boete op, want hij kende het verbod, zoals "ik ben verloren" laat zien. ' + FYI_NL }
]

const TAKHRIJ_NL = {
  'أخرجه مسلم': 'Muslim',
  'أخرجه أحمد وصححه الألباني': 'Aḥmad; authentiek volgens al-Albānī',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه ابن ماجه وصححه الألباني': 'Ibn Māja; authentiek volgens al-Albānī',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s'
}
const NARRATOR_NL = { 'ابن عباس': 'Ibn ʿAbbās', 'أبو ذر': 'Abū Dharr', 'أبو مسعود': 'Abū Masʿūd al-Anṣārī', 'أبو هريرة': 'Abū Hurayra' }

const PERSONS = [
  ['ibn-abbas', 'text', [64, 67, 68, 74], 'روى حديث النورين وحديث رفع الخطأ والنسيان، وقال: صار الأمر إلى أن للنفس ما كسبت وعليها ما اكتسبت.', 'Overleverde de hadith over de twee lichten en over vrijstelling van vergissing en vergeten; zei: het werd zo dat een ziel krijgt wat zij verdiende.'],
  ['abu-masud-al-ansari', 'text', [64, 67], 'روى «من قرأ بالآيتين من آخر سورة البقرة في ليلة كفتاه».', 'Overleverde: "wie ’s nachts de laatste twee verzen van al-Baqara reciteert, voor hem zijn ze genoeg".'],
  ['abu-dharr', 'text', [67], 'روى «أعطيت خواتيم سورة البقرة من كنز تحت العرش».', 'Overleverde: "mij is het slot van al-Baqara gegeven uit een schat onder de Troon".'],
  ['abu-hurayra', 'text', [66, 68, 74, 77], 'روى سبب نزول الخواتيم، وحديث التجاوز عن حديث النفس، وقصة المجامع في رمضان.', 'Overleverde de aanleiding van het slot van al-Baqara, de hadith over vergeven gedachten, en het verhaal van de man die in Ramadan gemeenschap had.'],
  ['muslim', 'takhrij', [64, 66, 67, 74], 'أخرج حديث النورين وسبب النزول و«قد فعلت».', 'Nam de hadith over de twee lichten, de aanleiding en "Ik heb het gedaan" op.'],
  ['al-bukhari', 'takhrij', [67, 68, 69, 77], 'أخرج أحاديث من الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [67], 'روى حديث أبي ذر.', 'Overleverde de hadith van Abū Dharr.'],
  ['ibn-maja', 'takhrij', [74], 'روى حديث «وضع عن أمتي الخطأ والنسيان».', 'Overleverde: "vrijgesteld van vergissing en vergeten".'],
  ['al-albani', 'takhrij', [67, 74], 'صحح حديثي أبي ذر وابن عباس.', 'Verklaarde de hadith van Abū Dharr en van Ibn ʿAbbās authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'خواتيم سورة البقرة',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'فضل خواتيم البقرة وسبب نزولها، وتفسير الآيات الثلاث: ملك الله ومحاسبته، وإيمان الرسول والمؤمنين بأركان الإيمان والسمع والطاعة، ورفع ما لا يطاق والدعاء بالعفو والمغفرة والرحمة، ثم فوائدها ومسائل النسيان والجهل.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'خواتيم سورة البقرة', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'الفضل وسبب النزول', sub: 'الدرسان ٢٠–٢١', page: 64, children: ['نوران', 'كفتاه', 'سمعنا وأطعنا'] },
      { label: 'الآية ٢٨٤', sub: 'الدرس ٢١', page: 67, children: ['ملك الله', 'المحاسبة', 'المغفرة'] },
      { label: 'الآية ٢٨٥', sub: 'الدرس ٢٢', page: 70, children: ['آمن الرسول', 'أركان الإيمان', 'السمع والطاعة'] },
      { label: 'الآية ٢٨٦', sub: 'الدرس ٢٣', page: 73, children: ['الوسع', 'النسيان والخطأ', 'الإصر', 'العفو والمغفرة والرحمة'] },
      { label: 'الفوائد', sub: 'الدرس ٢٤', page: 76, children: ['لا واجب مع العجز', 'المأمورات والمنهيات'] }
    ]
  },
  points: [
    { text: 'خواتيم البقرة نور أوتيه النبي ﷺ، ومن قرأ الآيتين في ليلة كفتاه.', page: 64 },
    { text: 'لما نزلت ﴿وإن تبدوا ما في أنفسكم أو تخفوه﴾ اشتدت على الصحابة، فقالوا: سمعنا وأطعنا، فنسخها الله بما بعدها.', page: 66 },
    { text: 'تجاوز الله عن هذه الأمة ما حدثت به أنفسها ما لم تعمل أو تتكلم.', page: 68 },
    { text: 'الإقرار بالربوبية يستلزم الإقرار بالألوهية.', page: 69 },
    { text: 'الإيمان شرعًا: الإقرار المستلزم للقبول والإذعان، لا مجرد التصديق.', page: 70 },
    { text: 'الكفر بنبي واحد كفر بجميع الرسل.', page: 71 },
    { text: 'لا يكلف الله نفسًا إلا وسعها، أي طاقتها.', page: 73 },
    { text: 'القاعدة: لا واجب مع العجز ولا محرم مع الضرورة.', page: 76 }
  ],
  terms: [
    { term: 'المغفرة', translit: 'al-maghfira', meaning: 'ستر الذنب مع التجاوز عنه.', explanation: 'من المغفر الذي يلبسه المقاتل على رأسه، جامع بين الستر والوقاية.', notes: [], page: 68 },
    { term: 'الإيمان', translit: 'al-īmān', meaning: 'شرعًا: الإقرار المستلزم للقبول والإذعان.', explanation: 'فأبو طالب كان مصدقًا ولم ينقد فلم ينفعه.', notes: [], page: 70 },
    { term: 'الوسع', translit: 'al-wusʿ', meaning: 'الطاقة.', explanation: 'لا يكلف النفس ما لا قدرة لها عليه.', notes: [], page: 73 },
    { term: 'كسب واكتسب', translit: 'kasaba wa-ktasaba', meaning: '«كسب» في الخير و«اكتسب» في الشر.', explanation: 'الخير يحصل بأدنى سعي بل بالنية، والشر لا يكتب حتى يعمل.', notes: [], page: 74 },
    { term: 'النسيان', translit: 'an-nisyān', meaning: 'ذهول القلب عما أمر به فيتركه.', explanation: '', notes: [], page: 74 },
    { term: 'الخطأ', translit: 'al-khaṭaʾ', meaning: 'أن يقصد شيئًا مباحًا ثم يقع على ما لا يباح له فعله.', explanation: '', notes: [], page: 74 },
    { term: 'الإصر', translit: 'al-iṣr', meaning: 'العبء الثقيل الذي يحبس صاحبه مكانه.', explanation: 'والمراد: التكليف الشاق والأمر الغليظ الصعب.', notes: [], page: 74 },
    { term: 'المولى', translit: 'al-mawlā', meaning: 'الولي والناصر.', explanation: 'وولاية الله خاصة للمؤمنين، وعامة لكل أحد.', notes: ['[البقرة: ٢٥٧]', '[يونس: ٣٠]'], page: 75 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الربوبية والعبودية',
      intro: 'ثلاث مراتب في كل منهما.',
      columns: ['الربوبية', 'العبودية'],
      rows: [
        { label: 'عامة', cells: ['﴿رب العالمين﴾', '﴿إلا آتي الرحمن عبدًا﴾ [مريم: ٩٣]'] },
        { label: 'خاصة', cells: ['﴿ربنا آتنا في الدنيا حسنة﴾', '﴿وعباد الرحمن﴾ [الفرقان: ٦٣]'] },
        { label: 'أخص الخاصة', cells: ['﴿رب موسى وهارون﴾', '﴿على عبده﴾ [الفرقان: ١]'] }
      ],
      page: 70
    },
    {
      type: 'cards',
      title: 'ما يتضمنه ﴿كل آمن بالله وملائكته وكتبه ورسله﴾',
      intro: 'كما في الدرس الثاني والعشرين.',
      nodes: [
        { label: 'الإيمان بالله', sub: 'بوجوده وربوبيته وألوهيته وأسمائه وصفاته', page: 71 },
        { label: 'الإيمان بالملائكة', sub: 'جملة وتفصيلًا', page: 71 },
        { label: 'الإيمان بالكتب', sub: 'القرآن والتوراة والإنجيل والزبور وصحف إبراهيم وموسى', page: 71 },
        { label: 'الإيمان بالرسل', sub: 'لا نفرق بين أحد منهم', page: 71 }
      ]
    },
    {
      type: 'steps',
      title: 'ثلاثة يحتاجها المذنب',
      intro: '﴿واعف عنا واغفر لنا وارحمنا﴾.',
      nodes: [
        { label: 'العفو', sub: 'فيما بينه وبين الله', page: 74 },
        { label: 'المغفرة', sub: 'أن يستره عن عباده', page: 74 },
        { label: 'الرحمة', sub: 'أن يعصمه فلا يوقعه في نظيره', page: 75 }
      ]
    },
    {
      type: 'compare',
      title: 'النسيان والجهل في المأمورات والمنهيات (للاطلاع فقط)',
      intro: 'رفع الإثم لا يسقط المطالبة بالواجب.',
      columns: ['المأمورات', 'المنهيات'],
      rows: [
        { label: 'الحكم', cells: ['يجب القضاء ولا تسقط المطالبة', 'لا إثم ولا كفارة'] },
        { label: 'الدليل', cells: ['«من نسي صلاة فليصلها إذا ذكرها»', '«من نسي وهو صائم فأكل أو شرب فليتم صومه»'] }
      ],
      page: 77
    }
  ],
  sections: [
    { title: 'سبب النزول', text: 'لما نزلت ﴿وإن تبدوا ما في أنفسكم أو تخفوه يحاسبكم به الله﴾ اشتد ذلك على الصحابة فبركوا على الركب، فقال ﷺ: «بل قولوا: سمعنا وأطعنا»، فلما ذلت بها ألسنتهم أنزل الله ﴿آمن الرسول...﴾ ثم نسخها بـ﴿لا يكلف الله نفسًا إلا وسعها﴾.', more: '', page: 66 },
    { title: 'السماوات سبع والأرضون سبع', text: 'السماوات سبع بنص القرآن والسنة والإجماع؛ والأرض جاءت مفردة في القرآن ومجموعة في السنة، وعددها سبع لقوله ﴿ومن الأرض مثلهن﴾؛ لأن المماثلة في الوصف متعذرة فلم يبق إلا المماثلة في العدد.', more: '[المؤمنون: ٨٦]، [الطلاق: ١٢].', page: 69 },
    { title: 'الإيمان قبول وانقياد', text: 'ليس الإيمان مجرد التصديق والإقرار؛ فأبو طالب كان مقرًا مصدقًا بالبعثة، لكن لما لم يكن منه قبول وانقياد لم ينفعه.', more: '', page: 70 },
    { title: 'الكفر بنبي كفر بالجميع', text: 'من آمن بمحمد ﷺ واتبعه ثم كفر بموسى أو عيسى أو غيرهما كان كافرًا بمحمد ﷺ؛ فالكفر بنبي واحد كفر بجنس الرسالة.', more: '', page: 71 },
    { title: '«غفرانك ربنا»', text: 'لما كان العبد لا بد أن يقصر في حقوق الله سألوا المغفرة؛ أما حقوق العباد فلا بد من ردها في الدنيا قبل الآخرة.', more: '', page: 72 },
    { title: 'لا واجب مع العجز (للاطلاع فقط)', text: 'إن كان للواجب المعجوز عنه بدل وجب الانتقال إليه كالتيمم عند العجز عن الماء، فإن عجز عنه سقط؛ والمضطر إلى الميتة يحل له أكلها.', more: FYI, page: 76 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الإيمان شرعًا', items: ['الإقرار المستلزم للقبول والإذعان.'], page: 70, origin: 'boek' },
    { kind: 'regel', title: 'قاعدة التكليف', items: ['لا واجب مع العجز، ولا محرم مع الضرورة.'], page: 76, origin: 'boek' },
    { kind: 'onderscheid', title: 'النسيان والخطأ', items: ['النسيان: ذهول القلب عما أمر به.', 'الخطأ: يقصد مباحًا فيقع في غيره.'], page: 74, origin: 'boek' },
    { kind: 'opsomming', title: 'دعاء الخواتيم', items: ['اعف عنا', 'اغفر لنا', 'ارحمنا', 'انصرنا على القوم الكافرين'], page: 74, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'من قرأ الآيتين من آخر البقرة في ليلة كفتاه.',
    'اشتدت الآية ٢٨٤ على الصحابة فقالوا: سمعنا وأطعنا، فخفف الله عنهم.',
    'الإيمان: إقرار مع قبول وانقياد.',
    'الإيمان بالله والملائكة والكتب والرسل، ولا نفرق بين أحد منهم.',
    'لا يكلف الله نفسًا إلا وسعها؛ ورفع عن الأمة الخطأ والنسيان.',
    'لا واجب مع العجز ولا محرم مع الضرورة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما فضل قراءة الآيتين من آخر البقرة في ليلة؟', options: ['كفتاه', 'غفر له ما تقدم من ذنبه', 'كتب له قيام ليلة القدر', 'بني له بيت في الجنة'], answer: 0, explain: 'كما في حديث أبي مسعود.', page: 67 },
    { type: 'mc', q: 'ماذا قال النبي ﷺ للصحابة لما اشتدت عليهم الآية ٢٨٤؟', options: ['قولوا: سمعنا وأطعنا', 'قولوا: سمعنا وعصينا', 'اصبروا', 'استغفروا'], answer: 0, explain: 'فأنزل الله بعدها ما خفف عنهم.', page: 66 },
    { type: 'tf', q: 'يؤاخذ المسلم بما حدثت به نفسه وإن لم يعمل أو يتكلم.', options: ['صواب', 'خطأ'], answer: 1, explain: '«إن الله تجاوز لي عن أمتي ما وسوست به صدورها».', page: 68 },
    { type: 'mc', q: 'ما الإيمان شرعًا؟', options: ['الإقرار المستلزم للقبول والإذعان', 'مجرد التصديق', 'النطق بالشهادتين فقط', 'العمل بلا اعتقاد'], answer: 0, explain: 'فأبو طالب صدق ولم ينقد.', page: 70 },
    { type: 'mc', q: 'ما حكم من آمن بمحمد ﷺ وكفر بعيسى؟', options: ['كافر بمحمد ﷺ أيضًا', 'مؤمن ناقص الإيمان', 'فاسق', 'لا شيء عليه'], answer: 0, explain: 'الكفر بنبي واحد كفر بجنس الرسالة.', page: 71 },
    { type: 'mc', q: 'ما معنى «الوسع»؟', options: ['الطاقة', 'السعة في الرزق', 'العلم', 'الصبر'], answer: 0, explain: 'لا يكلف النفس ما لا قدرة لها عليه.', page: 73 },
    { type: 'mc', q: 'ما «الإصر»؟', options: ['التكليف الشاق', 'النسيان', 'الخطأ', 'الذنب'], answer: 0, explain: 'العبء الثقيل الذي يحبس صاحبه.', page: 74 },
    { type: 'tf', q: 'عدم المؤاخذة بالنسيان يسقط المطالبة بالواجب المنسي.', options: ['صواب', 'خطأ'], answer: 1, explain: '«من نسي صلاة فليصلها إذا ذكرها».', page: 77 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٦٩ و٧٣ و٧٨. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Het slot van Sūrat al-Baqara',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'De deugd en de aanleiding van het slot van al-Baqara, de uitleg van de drie verzen: Allahs heerschappij en afrekening, het geloof van de Boodschapper en de gelovigen in de zuilen van het geloof en hun horen en gehoorzamen, het opheffen van wat niet te dragen is en de smeekbede om kwijtschelding, vergeving en barmhartigheid, en tot slot de lessen en vraagstukken over vergeten en onwetendheid.',
  source: { ...source, label: 'Kitāb at-Tafsīr (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Het slot van al-Baqara', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Deugd en aanleiding', sub: 'les 20–21', page: 64, children: ['twee lichten', 'genoeg voor de nacht', 'wij horen en gehoorzamen'] },
      { label: 'Vers 284', sub: 'les 21', page: 67, children: ['Allahs heerschappij', 'de afrekening', 'vergeving'] },
      { label: 'Vers 285', sub: 'les 22', page: 70, children: ['de Boodschapper gelooft', 'zuilen van het geloof', 'horen en gehoorzamen'] },
      { label: 'Vers 286', sub: 'les 23', page: 73, children: ['vermogen', 'vergeten en vergissing', 'last', 'kwijtschelding, vergeving, barmhartigheid'] },
      { label: 'Lessen', sub: 'les 24', page: 76, children: ['geen plicht bij onvermogen', 'geboden en verboden'] }
    ]
  },
  points: [
    { text: 'Het slot van al-Baqara is een licht dat de Profeet ﷺ kreeg; wie de twee verzen ’s nachts reciteert, voor hem zijn ze genoeg.', page: 64 },
    { text: 'Toen "of jullie tonen wat in jullie is of het verbergen" werd geopenbaard, viel het de metgezellen zwaar; zij zeiden "wij horen en gehoorzamen", en Allah hief het op met de verzen erna.', page: 66 },
    { text: 'Allah vergeeft deze gemeenschap wat in hen opkomt, zolang ze er niet naar handelen of erover spreken.', page: 68 },
    { text: 'Wie erkent dat Allah de Heer is, moet ook erkennen dat alleen Hij aanbeden mag worden.', page: 69 },
    { text: 'Geloof is religieus gezien erkenning met aanvaarding en overgave, niet alleen voor waar houden.', page: 70 },
    { text: 'Eén profeet verwerpen is alle boodschappers verwerpen.', page: 71 },
    { text: 'Allah belast een ziel slechts naar haar vermogen.', page: 73 },
    { text: 'De regel: geen plicht bij onvermogen en geen verbod bij noodzaak.', page: 76 }
  ],
  terms: [
    { term: 'المغفرة', translit: 'al-maghfira', meaning: 'Vergeving: de zonde bedekken en er niet op afrekenen.', explanation: 'Van mighfar, de helm van de strijder: bedekking en bescherming tegelijk.', notes: [], page: 68 },
    { term: 'الإيمان', translit: 'al-īmān', meaning: 'Geloof: erkenning die aanvaarding en overgave meebrengt.', explanation: 'Abū Ṭālib hield het voor waar maar gaf zich niet over, en dat baatte hem niet.', notes: [], page: 70 },
    { term: 'الوسع', translit: 'al-wusʿ', meaning: 'Vermogen, draagkracht.', explanation: 'Allah legt een ziel niets op wat zij niet kan.', notes: [], page: 73 },
    { term: 'كسب واكتسب', translit: 'kasaba wa-ktasaba', meaning: 'Kasaba voor het goede, iktasaba voor het kwade.', explanation: 'Het goede wordt al bij de minste moeite, zelfs bij de intentie, verdiend; het kwade wordt pas opgeschreven als het gedaan is.', notes: [], page: 74 },
    { term: 'النسيان', translit: 'an-nisyān', meaning: 'Vergeten: het hart verliest uit het oog wat bevolen was, zodat men het laat.', explanation: '', notes: [], page: 74 },
    { term: 'الخطأ', translit: 'al-khaṭaʾ', meaning: 'Vergissing: iets toegestaans bedoelen en iets ontoelaatbaars doen.', explanation: '', notes: [], page: 74 },
    { term: 'الإصر', translit: 'al-iṣr', meaning: 'Een zware last die de drager op zijn plaats houdt.', explanation: 'Bedoeld is een zware, strenge opdracht.', notes: [], page: 74 },
    { term: 'المولى', translit: 'al-mawlā', meaning: 'Beschermheer en helper.', explanation: 'Allahs walāya is bijzonder voor de gelovigen en algemeen voor iedereen.', notes: ['al-Baqara 2:257', 'Yūnus 10:30'], page: 75 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Heerschappij en dienaarschap',
      intro: 'Drie niveaus bij elk.',
      columns: ['Heerschappij', 'Dienaarschap'],
      rows: [
        { label: 'Algemeen', cells: ['"Heer der werelden"', '"ieder komt tot de Erbarmer als dienaar" (Maryam 19:93)'] },
        { label: 'Bijzonder', cells: ['"Onze Heer, geef ons in deze wereld goeds"', '"de dienaren van de Erbarmer" (al-Furqān 25:63)'] },
        { label: 'Meest bijzonder', cells: ['"de Heer van Mūsā en Hārūn"', '"aan Zijn dienaar" (al-Furqān 25:1)'] }
      ],
      page: 70
    },
    {
      type: 'cards',
      title: 'Wat "ieder gelooft in Allah, Zijn engelen, Zijn Boeken en Zijn boodschappers" inhoudt',
      intro: 'Zoals in les 22.',
      nodes: [
        { label: 'Geloof in Allah', sub: 'Zijn bestaan, heerschappij, godheid, namen en eigenschappen', page: 71 },
        { label: 'Geloof in de engelen', sub: 'in het algemeen en in detail', page: 71 },
        { label: 'Geloof in de Boeken', sub: 'Koran, Thora, Evangelie, Psalmen, de bladen van Ibrāhīm en Mūsā', page: 71 },
        { label: 'Geloof in de boodschappers', sub: 'wij maken geen onderscheid tussen hen', page: 71 }
      ]
    },
    {
      type: 'steps',
      title: 'Drie dingen die de zondaar nodig heeft',
      intro: '"Scheld ons kwijt, vergeef ons en wees ons genadig."',
      nodes: [
        { label: 'Kwijtschelding', sub: 'tussen hem en Allah', page: 74 },
        { label: 'Vergeving', sub: 'dat Allah het voor de mensen bedekt', page: 74 },
        { label: 'Barmhartigheid', sub: 'dat Allah hem behoedt voor hetzelfde opnieuw', page: 75 }
      ]
    },
    {
      type: 'compare',
      title: 'Vergeten en onwetendheid bij geboden en verboden (alleen ter kennisname)',
      intro: 'Geen zonde betekent niet dat de plicht vervalt.',
      columns: ['Geboden', 'Verboden'],
      rows: [
        { label: 'Oordeel', cells: ['inhalen is verplicht, de plicht blijft', 'geen zonde en geen boete'] },
        { label: 'Bewijs', cells: ['"wie een gebed vergeet, laat hem het verrichten zodra hij eraan denkt"', '"wie vastend vergeet en eet of drinkt, laat hem zijn vasten voltooien"'] }
      ],
      page: 77
    }
  ],
  sections: [
    { title: 'De aanleiding', text: 'Toen "of jullie tonen wat in jullie is of het verbergen, Allah rekent jullie ermee af" werd geopenbaard, viel het de metgezellen zwaar en ze vielen op hun knieën. De Profeet ﷺ zei: "Zeg liever: wij horen en wij gehoorzamen." Toen hun tongen het zeiden, openbaarde Allah "De Boodschapper gelooft …" en hief het daarna op met "Allah belast een ziel slechts naar haar vermogen".', more: '', page: 66 },
    { title: 'Zeven hemelen en zeven aardes', text: 'Er zijn zeven hemelen volgens Koran, Sunna en consensus. De aarde staat in de Koran in het enkelvoud en in de Sunna in het meervoud, en het zijn er zeven, vanwege "en van de aarde evenveel": gelijkheid in eigenschappen is onmogelijk, dus blijft gelijkheid in aantal over.', more: 'al-Muʾminūn 23:86, aṭ-Ṭalāq 65:12.', page: 69 },
    { title: 'Geloof is aanvaarding en overgave', text: 'Geloof is niet alleen voor waar houden en erkennen. Abū Ṭālib erkende de zending en hield haar voor waar, maar omdat hij niet aanvaardde en zich niet overgaf, baatte het hem niet.', more: '', page: 70 },
    { title: 'Eén profeet verwerpen is allen verwerpen', text: 'Wie in Muḥammad ﷺ gelooft en hem volgt, maar Mūsā, ʿĪsā of een andere profeet verwerpt, verwerpt ook Muḥammad ﷺ; één profeet verwerpen is het boodschapperschap zelf verwerpen.', more: '', page: 71 },
    { title: '"Uw vergeving, onze Heer"', text: 'Omdat de dienaar altijd tekortschiet in de rechten van Allah, vragen ze om vergeving. Rechten van mensen moeten in deze wereld worden teruggegeven, vóór het Hiernamaals.', more: '', page: 72 },
    { title: 'Geen plicht bij onvermogen (alleen ter kennisname)', text: 'Heeft een plicht die men niet kan nakomen een vervanging, dan gaat men daarop over, zoals tayammum als er geen water is; kan dat ook niet, dan vervalt ze. Wie in nood is, mag van een dood dier eten.', more: FYI_NL, page: 76 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Geloof (religieus)', items: ['Erkenning die aanvaarding en overgave meebrengt.'], page: 70, origin: 'boek' },
    { kind: 'regel', title: 'Regel van de opdracht', items: ['Geen plicht bij onvermogen, geen verbod bij noodzaak.'], page: 76, origin: 'boek' },
    { kind: 'onderscheid', title: 'Vergeten en vergissing', items: ['Vergeten: het hart verliest het bevel uit het oog.', 'Vergissing: iets toegestaans bedoelen en iets anders doen.'], page: 74, origin: 'boek' },
    { kind: 'opsomming', title: 'De smeekbede aan het slot', items: ['scheld ons kwijt', 'vergeef ons', 'wees ons genadig', 'help ons tegen de ongelovigen'], page: 74, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Wie de laatste twee verzen van al-Baqara ’s nachts reciteert, voor hem zijn ze genoeg.',
    'Vers 284 viel de metgezellen zwaar; zij zeiden "wij horen en gehoorzamen" en Allah verlichtte het.',
    'Geloof: erkenning met aanvaarding en overgave.',
    'Geloof in Allah, de engelen, de Boeken en de boodschappers, zonder onderscheid tussen hen.',
    'Allah belast een ziel naar haar vermogen; vergissing en vergeten zijn vergeven.',
    'Geen plicht bij onvermogen, geen verbod bij noodzaak.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is de deugd van ’s nachts de laatste twee verzen van al-Baqara reciteren?', options: ['ze zijn genoeg voor hem', 'al zijn eerdere zonden worden vergeven', 'het telt als de Nacht van de Beschikking', 'er wordt een huis in het Paradijs gebouwd'], answer: 0, explain: 'Zoals in de hadith van Abū Masʿūd.', page: 67 },
    { type: 'mc', q: 'Wat zei de Profeet ﷺ toen vers 284 de metgezellen zwaar viel?', options: ['zeg: wij horen en wij gehoorzamen', 'zeg: wij horen en zijn ongehoorzaam', 'wees geduldig', 'vraag om vergeving'], answer: 0, explain: 'Daarna openbaarde Allah wat het verlichtte.', page: 66 },
    { type: 'tf', q: 'Een moslim wordt afgerekend op wat in hem opkomt, ook als hij er niet naar handelt of over spreekt.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Allah heeft mijn gemeenschap vergeven wat in hun borst opkomt."', page: 68 },
    { type: 'mc', q: 'Wat is geloof religieus gezien?', options: ['erkenning met aanvaarding en overgave', 'alleen voor waar houden', 'alleen de geloofsgetuigenis uitspreken', 'daden zonder overtuiging'], answer: 0, explain: 'Abū Ṭālib hield het voor waar maar gaf zich niet over.', page: 70 },
    { type: 'mc', q: 'Wat is het oordeel over wie in Muḥammad ﷺ gelooft maar ʿĪsā verwerpt?', options: ['hij verwerpt ook Muḥammad ﷺ', 'een gelovige met minder geloof', 'een zondaar', 'niets'], answer: 0, explain: 'Eén profeet verwerpen is het boodschapperschap verwerpen.', page: 71 },
    { type: 'mc', q: 'Wat betekent wusʿ?', options: ['vermogen', 'ruim levensonderhoud', 'kennis', 'geduld'], answer: 0, explain: 'Allah legt een ziel niets op wat zij niet kan.', page: 73 },
    { type: 'mc', q: 'Wat is iṣr?', options: ['een zware opdracht', 'vergeten', 'vergissing', 'zonde'], answer: 0, explain: 'Een last die de drager op zijn plaats houdt.', page: 74 },
    { type: 'tf', q: 'Omdat vergeten vergeven is, vervalt ook de plicht om het vergeten gebed te verrichten.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Wie een gebed vergeet, laat hem het verrichten zodra hij eraan denkt."', page: 77 }
  ]),
  note: 'Oefeningen van het boek op p. 69, 73 en 78. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tafsir', chapter: '20', unit: 4, ar, nl }
