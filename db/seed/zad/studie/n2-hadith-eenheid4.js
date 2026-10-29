// Hoofdstukkaart bij الحديث (٢), eenheid 4: الأحاديث ١٨–٢١ (lessen 19–24, boek p. 74–90; les 24 is herhaling).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De algemene uitleg (الشرح الإجمالي) staat in het boek
// "alleen ter kennisname". Bewust niet in het hadith-tabblad:
// - p. 75 «ما من ذنب أجدر...»: het boek noemt als overleveraar "Abū Bakr"; dat moet eerst worden nagekeken.
// - p. 86 «إن الله جميل يحب الجمال»: de bewoording in het boek wijkt af van wat het als bron noemt (Muslim).
// - uitspraken zonder bron (ʿAlī ibn al-Ḥusayn p. 75, al-Ḥasan p. 85, imam Aḥmad p. 89).
// Het versnummer op p. 81 bij «وأحسنوا إن الله يحب المحسنين» is niet overgenomen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (٢)، سلسلة زاد العلمية',
  pages: '74–90',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'الشرح الإجمالي في الكتاب للاطلاع فقط.'
const FYI_NL = 'De algemene uitleg staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أنس بن مالك', text: 'من أحب أن يبسط له في رزقه، وينسأ له في أثره، فليصل رحمه', takhrij: 'متفق عليه', note: 'الحديث الثامن عشر.', pages: [74], nl: 'Wie graag wil dat zijn levensonderhoud ruim wordt gemaakt en zijn levensduur wordt verlengd, laat hij de familiebanden onderhouden', nlNote: 'Hadith 18.' },
  { narrator: 'عبد الله بن عمرو', text: 'ليس الواصل بالمكافئ، ولكن الواصل الذي إذا قطعت رحمه وصلها', takhrij: 'رواه البخاري', note: 'في الصلة الحقيقية.', pages: [77], nl: 'Wie de banden onderhoudt is niet wie alleen terugdoet; wie de banden onderhoudt is degene die ze herstelt als ze verbroken worden', nlNote: 'Over het echte onderhouden van de banden.' },
  { narrator: 'أبو هريرة', text: 'أن رجلا قال: يا رسول الله، إن لي قرابة أصلهم ويقطعونني، وأحسن إليهم ويسيئون إلي، وأحلم عليهم ويجهلون علي، فقال: «لئن كنت كما قلت فكأنما تسفهم المل، ولا يزال معك من الله ظهير عليهم ما دمت على ذلك»', takhrij: 'رواه مسلم', note: 'المل: الرماد الحار.', pages: [77], nl: 'Een man zei: "O Boodschapper van Allah, ik heb familie: ik onderhoud de band en zij verbreken hem, ik doe hun goed en zij doen mij kwaad, ik ben geduldig met hen en zij gedragen zich onbezonnen tegen mij." Hij zei: "Als het is zoals je zegt, dan is het alsof je hun hete as te eten geeft, en zolang je zo blijft, blijft er van Allah een helper bij je tegen hen."', nlNote: 'al-mall is hete as.' },
  { narrator: 'أبو هريرة', text: 'من نفس عن مؤمن كربة من كرب الدنيا نفس الله عنه كربة من كرب يوم القيامة، ومن يسر على معسر يسر الله عليه في الدنيا والآخرة، ومن ستر مسلما ستره الله في الدنيا والآخرة، والله في عون العبد ما كان العبد في عون أخيه، ومن سلك طريقا يلتمس فيه علما سهل الله له به طريقا إلى الجنة، وما اجتمع قوم في بيت من بيوت الله يتلون كتاب الله ويتدارسونه بينهم إلا نزلت عليهم السكينة وغشيتهم الرحمة وحفتهم الملائكة وذكرهم الله فيمن عنده، ومن بطأ به عمله لم يسرع به نسبه', takhrij: 'رواه مسلم', note: 'الحديث التاسع عشر.', pages: [78], nl: 'Wie een gelovige verlost van een nood uit de noden van deze wereld, die verlost Allah van een nood uit de noden van de Opstandingsdag. Wie het makkelijk maakt voor iemand in moeilijkheden, die maakt Allah het makkelijk in deze wereld en het hiernamaals. Wie een moslim bedekt, die bedekt Allah in deze wereld en het hiernamaals. Allah helpt de dienaar zolang de dienaar zijn broeder helpt. Wie een weg gaat om kennis te zoeken, voor hem maakt Allah daarmee een weg naar het Paradijs makkelijk. Er komen geen mensen samen in een van de huizen van Allah, die het Boek van Allah reciteren en samen bestuderen, of rust daalt op hen neer, barmhartigheid bedekt hen, engelen omringen hen en Allah noemt hen bij wie bij Hem zijn. En wie door zijn daden wordt opgehouden, wordt door zijn afkomst niet vooruitgeholpen', nlNote: 'Hadith 19.' },
  { narrator: '', text: 'من ذكرني في ملإ ذكرته في ملإ خير منهم', takhrij: 'متفق عليه', note: 'حديث قدسي، في شرح «وذكرهم الله فيمن عنده».', pages: [79], nl: 'Wie Mij gedenkt in een gezelschap, die gedenk Ik in een gezelschap dat beter is dan zij', nlNote: 'Een ḥadīth qudsī, ter uitleg van "Allah noemt hen bij wie bij Hem zijn".' },
  { narrator: '', text: 'يا أيها الناس، ألا إن ربكم واحد، وإن أباكم واحد، ألا لا فضل لعربي على أعجمي، ولا لعجمي على عربي، ولا لأحمر على أسود، ولا أسود على أحمر، إلا بالتقوى', takhrij: 'أخرجه أحمد وصححه الأرناؤوط', note: 'في أن الشرف بالعمل لا بالنسب.', pages: [82], nl: 'O mensen, jullie Heer is één en jullie vader is één. Een Arabier heeft geen voorrang op een niet-Arabier, noch een niet-Arabier op een Arabier, noch een rode op een zwarte, noch een zwarte op een rode, behalve door godsvrucht', nlNote: 'Over eer door daden, niet door afkomst.' },
  { narrator: 'سهل بن سعد الساعدي', text: 'أتى النبي ﷺ رجل فقال: يا رسول الله، دلني على عمل إذا أنا عملته أحبني الله وأحبني الناس، فقال: «ازهد في الدنيا يحبك الله، وازهد فيما في أيدي الناس يحبك الناس»', takhrij: 'أخرجه أحمد وابن ماجه وصححه الألباني', note: 'الحديث العشرون.', pages: [83], nl: 'Een man kwam bij de Profeet ﷺ en zei: "O Boodschapper van Allah, wijs mij een daad waardoor Allah en de mensen van mij houden als ik haar doe." Hij zei: "Wees onthecht van deze wereld, dan houdt Allah van je; en wees onthecht van wat de mensen bezitten, dan houden de mensen van je."', nlNote: 'Hadith 20.' },
  { narrator: 'أبو هريرة', text: 'إذا مات الإنسان انقطع عنه عمله إلا من ثلاثة: إلا من صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له', takhrij: 'رواه مسلم', note: 'الحديث الحادي والعشرون.', pages: [87], nl: 'Als de mens sterft, houden zijn daden op, behalve drie: doorlopende liefdadigheid, kennis waar men profijt van heeft, of een vroom kind dat voor hem bidt', nlNote: 'Hadith 21.' }
]

const TAKHRIJ_NL = { 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)', 'رواه البخاري': 'al-Bukhārī', 'رواه مسلم': 'Muslim', 'أخرجه أحمد وصححه الأرناؤوط': 'Aḥmad; al-Arnaʾūṭ noemde hem ṣaḥīḥ', 'أخرجه أحمد وابن ماجه وصححه الألباني': 'Aḥmad en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ' }
const NARRATOR_NL = { 'أنس بن مالك': 'Anas ibn Mālik', 'عبد الله بن عمرو': 'ʿAbd Allāh ibn ʿAmr', 'أبو هريرة': 'Abū Hurayra', 'سهل بن سعد الساعدي': 'Sahl ibn Saʿd as-Sāʿidī' }

const PERSONS = [
  ['anas-ibn-malik', 'text', [74], 'راوي الحديث الثامن عشر.', 'Overleveraar van hadith 18.'],
  ['abdallah-ibn-amr', 'text', [77], 'راوي حديث «ليس الواصل بالمكافئ».', 'Overleveraar van "wie de banden onderhoudt is niet wie alleen terugdoet".'],
  ['abu-hurayra', 'text', [77, 78, 87, 89], 'راوي الحديثين التاسع عشر والحادي والعشرين؛ كان فقيرًا يسقط من الجوع ومع ذلك من أكثر الصحابة نفعًا للأمة.', 'Overleveraar van hadith 19 en 21; hij was zo arm dat hij van honger neerviel, en toch een van de metgezellen van wie de umma het meeste profijt had.'],
  ['sahl-ibn-sad', 'text', [83], 'راوي الحديث العشرين؛ طال عمره حتى أدرك الحجاج، شهد المتلاعنين وهو ابن خمس عشرة سنة (ت ٨٨هـ).', 'Overleveraar van hadith 20; leefde zo lang dat hij al-Ḥajjāj meemaakte; was op zijn vijftiende aanwezig bij het liʿān-geval (overl. 88 AH).'],
  ['bilal-ibn-rabah', 'text', [82], 'نال المنازل العلى ولا نسب له.', 'Bereikte de hoogste rang zonder voorname afkomst.'],
  ['suhayb-ar-rumi', 'text', [82], 'نال المنازل العلى ولا نسب له.', 'Bereikte de hoogste rang zonder voorname afkomst.'],
  ['an-nawawi', 'text', [77], 'شرح «تسفهم المل» بأنه تشبيه لما يلحقهم من الإثم بألم آكل الرماد الحار.', 'Legde "je geeft hun hete as te eten" uit als vergelijking van hun zonde met de pijn van wie hete as eet.'],
  ['al-arnaut', 'takhrij', [82], 'صحح حديث «لا فضل لعربي على أعجمي».', 'Noemde de hadith "een Arabier heeft geen voorrang op een niet-Arabier" ṣaḥīḥ.'],
  ['al-albani', 'takhrij', [83], 'صحح الحديث العشرين.', 'Noemde hadith 20 ṣaḥīḥ.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'الأحاديث ١٨–٢١',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'صلة الرحم سبب لبسط الرزق وطول العمر، والجزاء من جنس العمل في تنفيس الكرب والتيسير والستر وطلب العلم، والزهد في الدنيا وفيما في أيدي الناس سبب محبة الله والناس، وما ينفع الإنسان بعد موته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'أربعة أحاديث؛ شرح الحديث التاسع عشر في درسين، والدرس الأخير مراجعة.',
    root: { label: 'الأحاديث ١٨–٢١', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'فليصل رحمه', sub: 'الحديث ١٨', page: 74, children: ['بسط الرزق', 'طول العمر', 'الصلة الحقيقية'] },
      { label: 'من نفس عن مؤمن كربة', sub: 'الحديث ١٩', page: 78, children: ['الجزاء من جنس العمل', 'طلب العلم', 'لا يسرع به نسبه'] },
      { label: 'ازهد في الدنيا', sub: 'الحديث ٢٠', page: 83, children: ['محبة الله', 'محبة الناس', 'علامات الزهد'] },
      { label: 'انقطع عنه عمله إلا من ثلاثة', sub: 'الحديث ٢١', page: 87, children: ['صدقة جارية', 'علم ينتفع به', 'ولد صالح'] }
    ]
  },
  points: [
    { text: 'صلة الرحم توجب رضا الله وثوابه، وثوابها العاجل بسط الرزق وطول العمر، والجزاء من جنس العمل.', page: 75 },
    { text: 'طول العمر ليس خيرًا بذاته إلا إذا حسن العمل.', page: 76 },
    { text: 'الواصل حقًّا من يصل من قطعه ويحسن إلى من أساء إليه من أقاربه.', page: 77 },
    { text: 'الثواب أعظم من العمل لسعة فضل الله: الحسنة بعشر أمثالها إلى سبعمائة ضعف.', page: 80 },
    { text: 'الستر على المسلم مقيد بما إذا كان الستر خيرًا، والعون مقيد بأن يكون على البر والتقوى.', page: 81 },
    { text: 'الشرف بالأعمال الصالحة لا بالأنساب.', page: 82 },
    { text: 'ليس من الزهد ترك العناية باللباس، ولا حرج في طلب محبة الناس مع الإخلاص.', page: 86 },
    { text: 'أفضل ما يقدم للميت الدعاء، وأفضل الثلاث العلم الذي ينتفع به لأنه باق.', page: 89 }
  ],
  terms: [
    { term: 'يبسط له في رزقه', translit: 'yubsaṭ lahu fī rizqih', meaning: 'يوسع ويكثر له في رزقه، في دنياه أو آخرته.', explanation: '', notes: [], page: 74 },
    { term: 'ينسأ له في أثره', translit: 'yunsaʾ lahu fī atharih', meaning: 'يؤخر له في أجله.', explanation: '', notes: [], page: 74 },
    { term: 'الرحم', translit: 'ar-raḥim', meaning: 'الأقرباء من طرفي الرجل والمرأة من ناحية الأب والأم.', explanation: 'استعير من رحم المرأة لكونهم خارجين من رحم واحدة.', notes: [], page: 74 },
    { term: 'صلة الرحم', translit: 'ṣilat ar-raḥim', meaning: 'الإحسان إلى الأقارب في القول والفعل.', explanation: 'بزيارتهم وتفقد أحوالهم ومساعدة المحتاج منهم.', notes: [], page: 74 },
    { term: 'المل', translit: 'al-mall', meaning: 'الرماد الحار.', explanation: '', notes: [], page: 77 },
    { term: 'كربة', translit: 'kurba', meaning: 'الشدة العظيمة التي توقع صاحبها في الحزن والغم.', explanation: 'وتنفيسها التخفيف عنه، من تنفيس الخناق.', notes: [], page: 78 },
    { term: 'معسر', translit: 'muʿsir', meaning: 'ذو إعسار: الضيق والشدة والصعوبة.', explanation: '', notes: [], page: 79 },
    { term: 'السكينة', translit: 'as-sakīna', meaning: 'طمأنينة القلب وانشراح الصدر.', explanation: '', notes: [], page: 79 },
    { term: 'الزهد', translit: 'az-zuhd', meaning: 'لغة: ضد الرغبة؛ وشرعًا أفضل تعاريفه: ترك ما لا ينفع في الآخرة.', explanation: 'وقيل: أن يخلو قلبك مما خلت منه يدك.', notes: [], page: 84 },
    { term: 'صدقة جارية', translit: 'ṣadaqa jāriya', meaning: 'المستمر نفعها، ولها صور كثيرة.', explanation: 'كوقف العقارات والكتب والمصاحف والمساجد والمدارس.', notes: [], page: 87 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'كيف يزاد في العمر والآجال مقدرة؟',
      intro: 'جوابان من أجوبة العلماء كما في الكتاب.',
      columns: ['الجواب'],
      rows: [
        { label: 'الأول (وهو أقرب)', cells: ['الزيادة بالنسبة لما يظهر للملائكة وفي اللوح المحفوظ، والله قد علم ما سيقع؛ وهو معنى «يمحو الله ما يشاء ويثبت»'] },
        { label: 'الثاني', cells: ['الزيادة بالبركة في العمر والتوفيق للطاعات وصيانة الأوقات عن الضياع'] }
      ],
      page: 76
    },
    {
      type: 'compare',
      title: 'حكم إعانة الأخ',
      intro: 'كما في فوائد الحديث التاسع عشر.',
      columns: ['الحكم'],
      rows: [
        { label: 'على بر وتقوى', cells: ['مطلوبة'] },
        { label: 'على إثم', cells: ['حرام'] },
        { label: 'على مباح فيه مصلحة', cells: ['إحسان'] },
        { label: 'على مباح لا مصلحة فيه', cells: ['معونته أن ينصحه'] }
      ],
      page: 81
    },
    {
      type: 'compare',
      title: 'ما ينفع الميت بعد موته',
      intro: 'كما في شرح الحديث الحادي والعشرين.',
      columns: ['أمثلته'],
      rows: [
        { label: 'صدقة جارية', cells: ['الوقف: العقارات والكتب والمصاحف والمساجد والمدارس'] },
        { label: 'علم ينتفع به', cells: ['ما علمه الطلبة ونشره والكتب التي صنفها'] },
        { label: 'ولد صالح يدعو له', cells: ['ولد صلب أو ولد ابن أو بنت، ذكر أو أنثى'] }
      ],
      page: 88
    }
  ],
  sections: [
    { title: 'عقوبة قاطع الرحم', text: 'قاطع الرحم ملعون في كتاب الله وتعجل له العقوبة في الدنيا، كما في سورة محمد (٢٢–٢٣).', page: 75 },
    { title: 'ثواب الدنيا لا يضر النية', text: 'ما يترتب على العمل من ثواب الدنيا لا يضر العامل إذا كان قصده وجه الله والدار الآخرة.', page: 76 },
    { title: 'طريق العلم حسي ومعنوي (للاطلاع فقط)', text: 'الحسي المشي إلى مجالس الذكر والعلماء الثقات، والمعنوي المذاكرة والمطالعة والتفكر والتفهم.', more: FYI, page: 80 },
    { title: 'لا ينفع النسب مع الكفر', text: 'أبو لهب عم رسول الله ﷺ لم ينفعه نسبه مع كفره، وبلال وصهيب نالا المنازل العلى ولا نسب لهما.', page: 82 },
    { title: 'دوافع الزهد', text: 'قوة الإيمان والمراقبة، ومعرفة دناءة الدنيا، ومعرفة ما في الإقبال عليها من التعب، ومعرفة أن نعيمها غرور ولعب ولهو.', page: 84 },
    { title: 'زهد النفس', text: 'ألا يعجب المرء بنفسه، بل يتواضع ويخفض جناحه للمؤمنين.', page: 86 },
    { title: '«ونكتب ما قدموا وآثارهم»', text: 'ما قدموا: ما باشروه من الأعمال؛ وآثارهم: ما عمله غيرهم بسبب دعوتهم أو نصحهم أو علمهم؛ والثلاث داخلة في الآية.', page: 89 },
    { title: 'الحث على الزواج', text: 'يستدل بالحديث على الترغيب في التزوج الذي من ثمراته الولد الصالح، مع صلاح الزوجة وتعليمها.', page: 90 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'من صور صلة الرحم', items: ['زيارتهم', 'تفقد أحوالهم والسؤال عنهم', 'مساعدة المحتاج منهم', 'السعي في مصالحهم'], page: 74, origin: 'boek' },
    { kind: 'opsomming', title: 'علامات الزهد الحقيقي', items: ['أن يكون بما في يد الله أوثق منه بما في يده', 'أن يكون عند المصيبة أرغب في ثوابها مما ذهب', 'أن يستوي عنده حامده وذامه في الحق'], page: 85, origin: 'boek' },
    { kind: 'onderscheid', title: 'لماذا العلم أفضل الثلاث', items: ['الصدقة الجارية قد تتعثر، والولد قد يموت.', 'العلم النافع باق ينتفع به بعد مئات السنين.'], page: 89, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'صلة الرحم سبب لبسط الرزق وطول العمر، والواصل من يصل من قطعه.',
    'من نفس كربة أو يسر على معسر أو ستر مسلمًا جوزي من جنس عمله.',
    'من سلك طريقًا يلتمس فيه علمًا سهل الله له به طريقًا إلى الجنة، ولا يسرع بالمرء نسبه.',
    'الزهد في الدنيا سبب محبة الله، والزهد فيما في أيدي الناس سبب محبتهم.',
    'ينقطع عمل الميت إلا من صدقة جارية أو علم ينتفع به أو ولد صالح يدعو له.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى «ينسأ له في أثره»؟', options: ['يؤخر له في أجله', 'يكثر ماله', 'يذكر بعد موته', 'يغفر ذنبه'], answer: 0, explain: 'الأثر: الأجل.', page: 74 },
    { type: 'tf', q: 'الواصل حقًّا هو الذي يكافئ من وصله.', options: ['صواب', 'خطأ'], answer: 1, explain: '«ليس الواصل بالمكافئ».', page: 77 },
    { type: 'mc', q: 'ما حكم إعانة الأخ على إثم؟', options: ['حرام', 'مستحب', 'مباح', 'إحسان'], answer: 0, explain: 'كما في الفائدة الرابعة.', page: 81 },
    { type: 'mc', q: 'ما أفضل تعاريف الزهد في الكتاب؟', options: ['ترك ما لا ينفع في الآخرة', 'ترك المال كله', 'ترك حسن الثياب', 'ترك الزواج'], answer: 0, explain: 'كما في شرح المفردات.', page: 84 },
    { type: 'tf', q: 'من الزهد أن يكون المرء أشعث أغبر لا يهتم بما يلبس.', options: ['صواب', 'خطأ'], answer: 1, explain: 'كما في الفائدة الثالثة.', page: 86 },
    { type: 'mc', q: 'ما أفضل ما يقدم للميت بحسب الكتاب؟', options: ['الدعاء له', 'الصلاة عنه', 'الصوم عنه', 'إهداء ثواب القراءة'], answer: 0, explain: 'لأن الحديث بين أن أفضل ما ينتفع به الدعاء.', page: 89 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٧٧ و٨٢ و٨٦ و٩٠، والدرس الرابع والعشرون مراجعة. الشرح الإجمالي للأحاديث في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Hadith 18–21',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Familiebanden onderhouden geeft ruimer levensonderhoud en een langer leven; de vergelding is van dezelfde soort als de daad bij het verlichten van nood, het makkelijk maken, het bedekken en het zoeken van kennis; onthechting van deze wereld en van wat mensen bezitten brengt de liefde van Allah en van de mensen; en wat de mens na zijn dood nog baat.',
  source: { ...source, label: 'Kitāb al-Ḥadīth (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'Vier hadith; de uitleg van hadith 19 beslaat twee lessen en de laatste les is herhaling.',
    root: { label: 'Hadith 18–21', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Laat hij de familiebanden onderhouden', sub: 'hadith 18', page: 74, children: ['ruimer levensonderhoud', 'langer leven', 'het echte onderhouden'] },
      { label: 'Wie een gelovige van nood verlost', sub: 'hadith 19', page: 78, children: ['vergelding naar de daad', 'kennis zoeken', 'afkomst helpt niet vooruit'] },
      { label: 'Wees onthecht van deze wereld', sub: 'hadith 20', page: 83, children: ['Allahs liefde', 'de liefde van de mensen', 'tekenen van onthechting'] },
      { label: 'Zijn daden houden op, behalve drie', sub: 'hadith 21', page: 87, children: ['doorlopende liefdadigheid', 'nuttige kennis', 'een vroom kind'] }
    ]
  },
  points: [
    { text: 'Familiebanden onderhouden brengt Allahs tevredenheid en beloning; de beloning hier en nu is ruimer levensonderhoud en een langer leven: de vergelding is van dezelfde soort als de daad.', page: 75 },
    { text: 'Een lang leven is op zich niet goed, alleen als de daden goed zijn.', page: 76 },
    { text: 'Wie de banden echt onderhoudt, herstelt ze met wie ze verbreekt en doet goed aan familie die hem kwaad doet.', page: 77 },
    { text: 'De beloning is groter dan de daad, door Allahs ruime gunst: een goede daad telt tien keer, tot zevenhonderd keer.', page: 80 },
    { text: 'Een moslim bedekken geldt als het bedekken goed is; helpen geldt bij goedheid en godsvrucht.', page: 81 },
    { text: 'Eer komt door goede daden, niet door afkomst.', page: 82 },
    { text: 'Onthechting betekent niet dat je niet op je kleding let, en het is geen probleem de liefde van mensen te zoeken, met oprechtheid.', page: 86 },
    { text: 'Het beste wat je de overledene geeft is smeekbede; de beste van de drie is nuttige kennis, omdat die blijft.', page: 89 }
  ],
  terms: [
    { term: 'يبسط له في رزقه', translit: 'yubsaṭ lahu fī rizqih', meaning: 'Zijn levensonderhoud wordt ruim en overvloedig gemaakt, in deze wereld of het hiernamaals.', explanation: '', notes: [], page: 74 },
    { term: 'ينسأ له في أثره', translit: 'yunsaʾ lahu fī atharih', meaning: 'Zijn levenstermijn wordt uitgesteld.', explanation: '', notes: [], page: 74 },
    { term: 'الرحم', translit: 'ar-raḥim', meaning: 'De verwanten van man en vrouw, langs vaders- en moederskant.', explanation: 'Ontleend aan de baarmoeder, omdat zij uit één baarmoeder voortkomen.', notes: [], page: 74 },
    { term: 'صلة الرحم', translit: 'ṣilat ar-raḥim', meaning: 'Goed doen aan verwanten in woord en daad.', explanation: 'Door bezoek, naar hen omkijken en wie het nodig heeft helpen.', notes: [], page: 74 },
    { term: 'المل', translit: 'al-mall', meaning: 'Hete as.', explanation: '', notes: [], page: 77 },
    { term: 'كربة', translit: 'kurba', meaning: 'Grote nood die iemand in verdriet en zorg brengt.', explanation: 'Verlichten ervan is als het losmaken van een wurggreep.', notes: [], page: 78 },
    { term: 'معسر', translit: 'muʿsir', meaning: 'Iemand in moeilijkheden: krapte, nood en zwaarte.', explanation: '', notes: [], page: 79 },
    { term: 'السكينة', translit: 'as-sakīna', meaning: 'Rust in het hart en een ruime borst.', explanation: '', notes: [], page: 79 },
    { term: 'الزهد', translit: 'az-zuhd', meaning: 'Taalkundig: het tegendeel van verlangen; religieus volgens de beste definitie: laten wat in het hiernamaals niet baat.', explanation: 'Ook gezegd: dat je hart leeg is van wat je hand mist.', notes: [], page: 84 },
    { term: 'صدقة جارية', translit: 'ṣadaqa jāriya', meaning: 'Liefdadigheid waarvan het nut doorloopt, in veel vormen.', explanation: 'Zoals een waqf van gebouwen, boeken, mushafs, moskeeën en scholen.', notes: [], page: 87 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Hoe wordt het leven verlengd als de termijnen vastliggen?',
      intro: 'Twee antwoorden van geleerden, zoals in het boek.',
      columns: ['Antwoord'],
      rows: [
        { label: 'Eerste (het meest aannemelijk)', cells: ['de verlenging betreft wat de engelen en de Bewaarde Tafel tonen, terwijl Allah al weet wat gebeurt; dat is de betekenis van "Allah wist uit wat Hij wil en bevestigt"'] },
        { label: 'Tweede', cells: ['de verlenging is zegen in het leven, succes in gehoorzaamheid en tijd die niet verloren gaat'] }
      ],
      page: 76
    },
    {
      type: 'compare',
      title: 'Het oordeel over je broeder helpen',
      intro: 'Zoals in de lessen uit hadith 19.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Bij goedheid en godsvrucht', cells: ['gevraagd'] },
        { label: 'Bij zonde', cells: ['verboden'] },
        { label: 'Bij iets toegestaans met nut', cells: ['een weldaad'] },
        { label: 'Bij iets toegestaans zonder nut', cells: ['de hulp is hem raad geven'] }
      ],
      page: 81
    },
    {
      type: 'compare',
      title: 'Wat de overledene nog baat',
      intro: 'Zoals in de uitleg bij hadith 21.',
      columns: ['Voorbeelden'],
      rows: [
        { label: 'Doorlopende liefdadigheid', cells: ['waqf: gebouwen, boeken, mushafs, moskeeën en scholen'] },
        { label: 'Nuttige kennis', cells: ['wat hij studenten leerde en verspreidde, en de boeken die hij schreef'] },
        { label: 'Een vroom kind dat voor hem bidt', cells: ['een eigen kind of kleinkind, zoon of dochter'] }
      ],
      page: 88
    }
  ],
  sections: [
    { title: 'De straf voor wie de banden verbreekt', text: 'Wie de familiebanden verbreekt is vervloekt in het Boek van Allah en krijgt zijn straf al in deze wereld, zoals in soera Muḥammad (22–23).', page: 75 },
    { title: 'Wereldse beloning schaadt de intentie niet', text: 'Wereldse beloning die op een daad volgt schaadt niet, als de bedoeling Allahs aangezicht en het hiernamaals is.', page: 76 },
    { title: 'De weg naar kennis: tastbaar en innerlijk (alleen ter kennisname)', text: 'Tastbaar: lopen naar kringen van gedenken en betrouwbare geleerden; innerlijk: herhalen, lezen, nadenken en begrijpen.', more: FYI_NL, page: 80 },
    { title: 'Afkomst baat niet bij ongeloof', text: 'Abū Lahab, de oom van de Boodschapper ﷺ, had niets aan zijn afkomst bij zijn ongeloof; Bilāl en Ṣuhayb bereikten de hoogste rang zonder voorname afkomst.', page: 82 },
    { title: 'Drijfveren voor onthechting', text: 'Sterk geloof en besef dat Allah toekijkt; weten hoe gering deze wereld is; weten hoeveel moeite het najagen ervan kost; en weten dat haar genot bedrieglijk spel en vermaak is.', page: 84 },
    { title: 'Onthechting van het ego', text: 'Niet ingenomen zijn met jezelf, maar nederig zijn en zacht voor de gelovigen.', page: 86 },
    { title: '"Wij schrijven op wat zij vooruitzonden en hun sporen"', text: 'Wat zij vooruitzonden zijn hun eigen daden; hun sporen zijn wat anderen deden door hun oproep, raad of kennis; de drie vallen onder dit vers.', page: 89 },
    { title: 'Aansporing tot het huwelijk', text: 'De hadith wordt gebruikt om tot trouwen aan te sporen, met als vrucht een vroom kind, samen met een vrome vrouw en haar onderwijs.', page: 90 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Vormen van familiebanden onderhouden', items: ['hen bezoeken', 'naar hen omkijken en naar hen vragen', 'wie het nodig heeft helpen', 'je inzetten voor hun belangen'], page: 74, origin: 'boek' },
    { kind: 'opsomming', title: 'Tekenen van echte onthechting', items: ['meer vertrouwen in wat bij Allah is dan in wat je zelf hebt', 'bij tegenslag meer verlangen naar de beloning dan naar wat verloren ging', 'lof en kritiek wegen voor jou gelijk als het om de waarheid gaat'], page: 85, origin: 'boek' },
    { kind: 'onderscheid', title: 'Waarom kennis de beste van de drie is', items: ['doorlopende liefdadigheid kan stoppen, en een kind kan sterven', 'nuttige kennis blijft, zelfs honderden jaren later'], page: 89, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Familiebanden onderhouden geeft ruimer levensonderhoud en een langer leven; echt onderhouden is herstellen met wie verbreekt.',
    'Wie nood verlicht, het makkelijk maakt of een moslim bedekt, krijgt hetzelfde terug.',
    'Wie kennis zoekt, krijgt een makkelijke weg naar het Paradijs; afkomst helpt niet vooruit.',
    'Onthechting van deze wereld brengt Allahs liefde, en van wat mensen bezitten hun liefde.',
    'Na de dood houden de daden op, behalve doorlopende liefdadigheid, nuttige kennis en een vroom kind dat bidt.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent "yunsaʾ lahu fī atharih"?', options: ['zijn levenstermijn wordt uitgesteld', 'zijn bezit groeit', 'hij wordt na zijn dood herdacht', 'zijn zonde wordt vergeven'], answer: 0, explain: 'athar is hier de levenstermijn.', page: 74 },
    { type: 'tf', q: 'Wie de banden echt onderhoudt, is wie terugdoet wat hij krijgt.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Wie de banden onderhoudt is niet wie alleen terugdoet."', page: 77 },
    { type: 'mc', q: 'Wat is het oordeel over je broeder helpen bij een zonde?', options: ['verboden', 'aanbevolen', 'toegestaan', 'een weldaad'], answer: 0, explain: 'Zoals in les 4 uit de hadith.', page: 81 },
    { type: 'mc', q: 'Wat is volgens het boek de beste definitie van onthechting?', options: ['laten wat in het hiernamaals niet baat', 'al je bezit weggeven', 'geen goede kleding dragen', 'niet trouwen'], answer: 0, explain: 'Zoals in de woordverklaring.', page: 84 },
    { type: 'tf', q: 'Onthechting betekent onverzorgd rondlopen zonder op je kleding te letten.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Zoals in les 3 uit de hadith.', page: 86 },
    { type: 'mc', q: 'Wat is volgens het boek het beste wat je de overledene geeft?', options: ['smeekbede voor hem', 'voor hem bidden (ṣalāt)', 'voor hem vasten', 'de beloning van recitatie schenken'], answer: 0, explain: 'Omdat de hadith smeekbede noemt als wat de overledene baat.', page: 89 }
  ]),
  note: 'Oefeningen van het boek op p. 77, 82, 86 en 90; les 24 is herhaling. De algemene uitleg bij de hadith staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-hadith', chapter: '19', unit: 4, ar, nl }
