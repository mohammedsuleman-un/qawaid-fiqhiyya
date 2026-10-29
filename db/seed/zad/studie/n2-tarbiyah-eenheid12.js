// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 12: التوكل (les 24, boek p. 85–92).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 87 is in het boek "alleen ter kennisname".
// Niet in het hadith-tabblad: «حسبنا الله ونعم الوكيل» (een woord van Ibn ʿAbbās bij al-Bukhārī) en het
// verhaal van de vrouw met de geiten (p. 91), dat het boek alleen naverteld weergeeft.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '85–92',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: 'عبد الله بن مسعود', text: 'من أصابته فاقة فأنزلها بالناس لم تسد فاقته، ومن أنزلها بالله أوشك الله له بالغنى', takhrij: 'أحمد وأبو داود والترمذي وصححه', note: 'من اعتمد على غير الله خذل.', pages: [86], nl: 'Wie door armoede getroffen wordt en ermee naar de mensen gaat, diens nood wordt niet gelenigd; wie ermee naar Allah gaat, Allah schenkt hem spoedig genoeg', nlNote: 'Wie op iemand anders dan Allah steunt, wordt in de steek gelaten.' },
  { narrator: 'أنس بن مالك', text: 'اعقلها وتوكل', takhrij: 'الترمذي وحسنه الألباني', note: 'لما سأله رجل: أعقلها وأتوكل أو أطلقها وأتوكل؟ ' + FYI_NOTE, pages: [87], nl: 'Bind haar vast en vertrouw op Allah', nlNote: 'Toen iemand vroeg: bind ik mijn kameel vast en vertrouw ik, of laat ik haar los en vertrouw ik? ' + FYI_NOTE_NL },
  { narrator: 'عمر بن الخطاب', text: 'لو أنكم كنتم توكلون على الله حق توكله لرزقتم كما يرزق الطير، تغدو خماصا وتروح بطانا', takhrij: 'الترمذي وصححه الألباني', note: 'قال ابن رجب: هذا الحديث أصل في التوكل.', pages: [88, 89], nl: 'Als jullie werkelijk op Allah vertrouwden zoals het hoort, zouden jullie voorzien worden zoals de vogels: ze vertrekken ’s ochtends met een lege maag en keren ’s avonds verzadigd terug', nlNote: 'Ibn Rajab zei: deze hadith is een basis voor tawakkul.' },
  { narrator: 'عبد الله بن عباس', text: 'ويدخل الجنة من هؤلاء سبعون ألفا بغير حساب، هم الذين لا يسترقون، ولا يتطيرون، ولا يكتوون، وعلى ربهم يتوكلون', takhrij: 'متفق عليه', note: 'من ثمرات التوكل: دخول الجنة بغير حساب.', pages: [89], nl: 'Van hen gaan zeventigduizend het Paradijs binnen zonder afrekening: zij vragen niet om ruqya, zien geen onheil in voortekenen, laten zich niet brandmerken, en vertrouwen op hun Heer', nlNote: 'Een vrucht van tawakkul: het Paradijs zonder afrekening.' },
  { narrator: 'أنس بن مالك', text: 'بسم الله، توكلت على الله، لا حول ولا قوة إلا بالله، يقال له: كفيت ووقيت، وتنحى عنه الشيطان', takhrij: 'الترمذي وصححه الألباني', note: 'إذا خرج الرجل من بيته.', pages: [89], nl: 'In de naam van Allah, ik vertrouw op Allah, er is geen macht en geen kracht behalve bij Allah; tegen hem wordt gezegd: je bent genoeg gedaan en beschermd, en de duivel wijkt van hem', nlNote: 'Als iemand zijn huis verlaat.' },
  { narrator: '', text: 'الطيرة شرك', takhrij: 'أحمد وأبو داود بإسناد صحيح', note: 'مما ينافي التوكل.', pages: [90], nl: 'Onheil zien in voortekenen is shirk', nlNote: 'Iets wat strijdig is met tawakkul.' },
  { narrator: '', text: 'من تعلق شيئا وكل إليه', takhrij: 'الترمذي وأحمد وحسنه الألباني لغيره', note: 'في تعليق التمائم.', pages: [90], nl: 'Wie zich aan iets hangt, wordt eraan overgelaten', nlNote: 'Over het dragen van amuletten.' },
  { narrator: '', text: 'لأن يحتطب أحدكم حزمة على ظهره خير له من أن يسأل أحدا فيعطيه أو يمنعه', takhrij: 'متفق عليه', note: 'الأخذ بأسباب الرزق.', pages: [91], nl: 'Dat een van jullie een bundel brandhout op zijn rug draagt, is beter voor hem dan iemand iets te vragen die het hem geeft of weigert', nlNote: 'Middelen nemen om in je levensonderhoud te voorzien.' },
  { narrator: '', text: 'ما أكل أحد طعاما قط خيرا من أن يأكل من عمل يده، وإن نبي الله داود عليه السلام كان يأكل من عمل يده', takhrij: 'رواه البخاري', note: '', pages: [91], nl: 'Niemand heeft ooit beter voedsel gegeten dan wat hij met eigen handen verdiende; de profeet van Allah Dāwūd at van het werk van zijn handen', nlNote: '' },
  { narrator: '', text: 'تداووا عباد الله', takhrij: 'الترمذي وصححه الألباني', note: 'ترك التداوي مما ينافي الأخذ بالأسباب.', pages: [91], nl: 'Dienaren van Allah, laat je behandelen', nlNote: 'Geen behandeling zoeken past niet bij het nemen van middelen.' },
  { narrator: '', text: 'ما أنزل الله عز وجل داء إلا أنزل له شفاء', takhrij: 'رواه البخاري', note: '', pages: [91], nl: 'Allah heeft geen ziekte neergezonden zonder er een genezing voor neer te zenden', nlNote: '' },
  { narrator: '', text: 'ما ظنك يا أبا بكر باثنين الله ثالثهما', takhrij: 'متفق عليه', note: 'في الغار، لما قال أبو بكر: لو أن أحدهم نظر تحت قدميه لأبصرنا.', pages: [91], nl: 'Wat denk je, Abū Bakr, van twee van wie Allah de derde is?', nlNote: 'In de grot, toen Abū Bakr zei: als een van hen onder zijn voeten keek, zou hij ons zien.' }
]

const TAKHRIJ_NL = {
  'أحمد وأبو داود والترمذي وصححه': 'Aḥmad, Abū Dāwūd en at-Tirmidhī; at-Tirmidhī noemde hem ṣaḥīḥ',
  'الترمذي وحسنه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ḥasan',
  'الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'متفق عليه': 'al-Bukhārī en Muslim',
  'أحمد وأبو داود بإسناد صحيح': 'Aḥmad en Abū Dāwūd, met een ṣaḥīḥ keten',
  'الترمذي وأحمد وحسنه الألباني لغيره': 'at-Tirmidhī en Aḥmad; al-Albānī noemde hem ḥasan li-ghayrihi',
  'رواه البخاري': 'al-Bukhārī'
}
const NARRATOR_NL = { 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'أنس بن مالك': 'Anas ibn Mālik', 'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās' }

const PERSONS = [
  ['murtada-az-zabidi', 'text', [85], 'عرّف التوكل: الثقة بما عند الله واليأس مما في أيدي الناس.', 'Omschreef tawakkul: vertrouwen op wat bij Allah is en niets verwachten van wat de mensen hebben.'],
  ['ibn-uthaymin', 'text', [85], 'عرّف التوكل: صدق الاعتماد على الله في جلب المنافع ودفع المضار مع فعل الأسباب.', 'Omschreef tawakkul: oprecht op Allah steunen voor nut en tegen schade, en daarbij de middelen nemen.'],
  ['ibn-al-qayyim', 'text', [86, 89], 'قال: التوكل نصف الدين والنصف الثاني الإنابة؛ ولو توكل العبد على الله حق توكله في إزالة جبل وكان مأمورًا بإزالته لأزاله.', 'Zei: tawakkul is de helft van de godsdienst, de andere helft is je tot Allah wenden; als een dienaar werkelijk op Allah vertrouwde om een berg te verplaatsen die hij moest verplaatsen, zou hij hem verplaatsen.'],
  ['ibn-masud', 'text', [86], 'روى «من أصابته فاقة فأنزلها بالناس لم تسد فاقته».', 'Overleveraar van "wie door armoede getroffen wordt en ermee naar de mensen gaat".'],
  ['ibn-abbas', 'text', [86, 89], 'قال: «حسبنا الله ونعم الوكيل» قالها إبراهيم حين ألقي في النار وقالها محمد ﷺ؛ وروى حديث السبعين ألفًا.', 'Zei dat Ibrāhīm "Allah is ons genoeg, en Hij is de beste Beschermer" zei toen hij in het vuur werd geworpen, en Muḥammad ﷺ ook; overleverde de hadith van de zeventigduizend.'],
  ['anas-ibn-malik', 'text', [87, 89], 'روى «اعقلها وتوكل» وذكر الخروج من البيت.', 'Overleverde "bind haar vast en vertrouw op Allah" en de woorden bij het verlaten van het huis.'],
  ['ahmad-ibn-hanbal', 'text', [87], 'سئل عمن يقول: نجلس ورزقنا على الله، فقال: هذا قول رديء.', 'Gevraagd naar wie zeggen "wij blijven zitten en onze voorziening is bij Allah", zei hij: dat is een slechte uitspraak.'],
  ['umar-ibn-al-khattab', 'text', [88], 'روى «لو أنكم كنتم توكلون على الله حق توكله لرزقتم كما يرزق الطير».', 'Overleveraar van "als jullie werkelijk op Allah vertrouwden, zouden jullie voorzien worden zoals de vogels".'],
  ['ibn-rajab', 'text', [89], 'قال: حديث الطير أصل في التوكل، وهو من أعظم الأسباب التي يستجلب بها الرزق.', 'Zei: de hadith van de vogels is een basis voor tawakkul en een van de grootste middelen om voorziening te krijgen.'],
  ['ibn-taymiyya', 'text', [90], 'ذكر خبر المنجم الذي نهى عليًّا عن السفر.', 'Vertelde over de astroloog die ʿAlī afraadde te reizen.'],
  ['ali-ibn-abi-talib', 'text', [90], 'قال للمنجم: بل نسافر ثقة بالله وتوكلًا عليه وتكذيبًا لك.', 'Zei tegen de astroloog: wij reizen juist, in vertrouwen op Allah en om jou te logenstraffen.'],
  ['abu-bakr-as-siddiq', 'text', [91], 'كان مع النبي ﷺ في الغار فقال له: «ما ظنك باثنين الله ثالثهما».', 'Was met de Profeet ﷺ in de grot, die tegen hem zei: "Wat denk je van twee van wie Allah de derde is?"']
]

const ar = {
  scope: 'unit',
  unit: 12,
  title: 'التوكل',
  subtitle: 'الدرس الرابع والعشرون في صفحة واحدة',
  summary: 'تعريف التوكل ومنزلته، والأخذ بالأسباب، والتوكل على غير الله وأقسامه، وثمرات التوكل، والأمور المنافية له، ومن قصص المتوكلين.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية عشرة في خريطة واحدة',
    intro: 'التوكل مع الأخذ بالأسباب.',
    root: { label: 'التوكل', sub: 'الوحدة الثانية عشرة' },
    nodes: [
      { label: 'تعريفه ومنزلته', sub: 'الدرس ٢٤', page: 85, children: ['صدق الاعتماد على الله', 'نصف الدين'] },
      { label: 'الأخذ بالأسباب', sub: 'الدرس ٢٤', page: 87, children: ['اعقلها وتوكل', 'التواكل مذموم'] },
      { label: 'التوكل على غير الله', sub: 'الدرس ٢٤', page: 88, children: ['شرك أكبر', 'شرك أصغر', 'توكيل جائز'] },
      { label: 'ثمراته', sub: 'الدرس ٢٤', page: 88, children: ['الكفاية', 'محبة الله', 'الجنة بغير حساب', 'الحماية من الشيطان'] },
      { label: 'ما ينافيه', sub: 'الدرس ٢٤', page: 90, children: ['الطيرة', 'إتيان الكهان', 'التمائم', 'ترك الأسباب'] }
    ]
  },
  points: [
    { text: 'التوكل من أعظم أسباب النجاح، وهو من أعلى مقامات التوحيد.', page: 85 },
    { text: 'التوكل صدق الاعتماد على الله في جلب المنافع ودفع المضار مع فعل الأسباب التي أمر الله بها.', page: 85 },
    { text: 'التوكل نصف الدين، والنصف الثاني الإنابة؛ فالتوكل هو الاستعانة والإنابة هي العبادة.', page: 86 },
    { text: 'الأخذ بالأسباب لا ينافي التوكل، وترك الأسباب تواكل مذموم.', page: 87 },
    { text: 'التوكل على غير الله فيما لا يقدر عليه إلا الله شرك أكبر، والاعتماد بالقلب على الأسباب الظاهرة نوع شرك أصغر، وتوكيل من يقدر جائز.', page: 88 },
    { text: 'من ثمرات التوكل: الكفاية والحفظ، ومحبة الله، ودخول الجنة بغير حساب، والحماية من الشيطان، وطمأنينة القلب.', page: 88 },
    { text: 'ينافي التوكل: الطيرة، وإتيان الكهان والمنجمين، وتعليق التمائم، وترك الأسباب.', page: 90 }
  ],
  terms: [
    { term: 'التوكل', translit: 'at-tawakkul', meaning: 'لغة: الاعتماد، يقال: وكلت أمري إلى فلان؛ اصطلاحًا: صدق الاعتماد على الله في جلب المنافع ودفع المضار مع فعل الأسباب.', explanation: '', notes: [], page: 85 },
    { term: 'التواكل', translit: 'at-tawākul', meaning: 'ترك الأسباب بدعوى التوكل.', explanation: 'فهم سيئ ونقص في العقل.', notes: [], page: 87 },
    { term: 'الطيرة', translit: 'aṭ-ṭiyara', meaning: 'التشاؤم بالمرئيات والمسموعات.', explanation: '«الطيرة شرك».', notes: [], page: 90 },
    { term: 'التمائم', translit: 'at-tamāʾim', meaning: 'ما يعلق من خرز وعيون زرق وأحجبة وغيرها لدفع الضر.', explanation: '', notes: [], page: 90 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'التوكل على غير الله',
      intro: 'كما في الدرس الرابع والعشرين.',
      columns: ['الصورة', 'الحكم'],
      rows: [
        { label: 'فيما لا يقدر عليه إلا الله', cells: ['كالأموات والطواغيت في النصر والرزق والشفاعة', 'شرك أكبر'] },
        { label: 'على الأسباب الظاهرة', cells: ['كأمير أو سلطان، مع اعتماد القلب عليه', 'نوع شرك أصغر'] },
        { label: 'توكيل من يقدر', cells: ['إنابة إنسان فيما يقدر عليه', 'جائز، ويعتمد على الله لا عليه'] }
      ],
      page: 88
    }
  ],
  sections: [
    { title: 'حسبنا الله ونعم الوكيل', text: 'قال ابن عباس: قالها إبراهيم عليه السلام حين ألقي في النار، وقالها محمد ﷺ حين قالوا: ﴿إن الناس قد جمعوا لكم﴾، رواه البخاري.', page: 86 },
    { title: 'الأخذ بالأسباب (للاطلاع فقط)', text: '﴿هو الذي جعل لكم الأرض ذلولًا فامشوا في مناكبها وكلوا من رزقه﴾ [الملك: ١٥]. وسئل أحمد عمن يقول: نجلس ورزقنا على الله، فقال: هذا قول رديء. وإذا لم يجد المرء سببًا فلا ينسى أعظم الأسباب: الدعاء.', more: FYI, page: 87 },
    { title: 'المنجم وعلي', text: 'ذكر ابن تيمية وابن القيم أن منجمًا قال لعلي وهو خارج إلى الخوارج: لا تسافر والقمر في العقرب، فقال: بل نسافر ثقة بالله وتوكلًا عليه وتكذيبًا لك، فكانت سفرة مباركة.', page: 90 },
    { title: 'في الغار', text: 'قال أبو بكر: لو أن أحدهم نظر تحت قدميه لأبصرنا، فقال النبي ﷺ: «ما ظنك يا أبا بكر باثنين الله ثالثهما».', page: 91 }
  ],
  keycards: [
    { kind: 'definitie', title: 'التوكل', items: ['صدق الاعتماد على الله في جلب المنافع ودفع المضار', 'مع فعل الأسباب'], page: 85, origin: 'boek' },
    { kind: 'onderscheid', title: 'التوكل والتواكل', items: ['التوكل: اعتماد على الله مع الأخذ بالأسباب', 'التواكل: ترك الأسباب، وهو مذموم'], page: 87, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات التوكل', items: ['الكفاية والنصر والحفظ', 'محبة الله', 'دخول الجنة بغير حساب', 'الحماية من الشيطان', 'طمأنينة القلب والعزة'], page: 88, origin: 'boek' },
    { kind: 'opsomming', title: 'ما ينافي التوكل', items: ['الطيرة', 'إتيان الكهان والمنجمين', 'تعليق التمائم', 'ترك الأسباب في الرزق والتداوي'], page: 90, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التوكل صدق الاعتماد على الله مع الأخذ بالأسباب.',
    'اعقلها وتوكل.',
    'التوكل على غير الله فيما لا يقدر عليه إلا الله شرك أكبر.',
    'لو توكلتم على الله حق توكله لرزقتم كما يرزق الطير.',
    'الطيرة والتمائم وإتيان الكهان تنافي التوكل.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما تعريف ابن عثيمين للتوكل؟', options: ['صدق الاعتماد على الله مع فعل الأسباب', 'ترك الأسباب', 'الاعتماد على الناس', 'كثرة الدعاء بلا عمل'], answer: 0, explain: 'كما في الدرس الرابع والعشرين.', page: 85 },
    { type: 'tf', q: 'الأخذ بالأسباب ينافي التوكل.', options: ['صواب', 'خطأ'], answer: 1, explain: '«اعقلها وتوكل».', page: 87 },
    { type: 'mc', q: 'ما حكم التوكل على الأموات في الرزق والنصر؟', options: ['شرك أكبر', 'جائز', 'مكروه', 'شرك أصغر فقط'], answer: 0, explain: 'لأنه فيما لا يقدر عليه إلا الله.', page: 88 },
    { type: 'mc', q: 'ما الذي ينافي التوكل مما يلي؟', options: ['تعليق التمائم', 'التداوي', 'العمل باليد', 'الدعاء'], answer: 0, explain: '«من تعلق شيئًا وكل إليه».', page: 90 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٩٢. الصفحة ٨٧ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 12,
  title: 'Godsvertrouwen (tawakkul)',
  subtitle: 'Les 24 op één pagina',
  summary: 'De betekenis en rang van tawakkul, middelen nemen, vertrouwen op iets anders dan Allah en de soorten daarvan, de vruchten, wat ermee strijdig is, en verhalen van wie op Allah vertrouwden.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 12 in één kaart',
    intro: 'Vertrouwen op Allah en middelen nemen.',
    root: { label: 'Tawakkul', sub: 'Eenheid 12' },
    nodes: [
      { label: 'Betekenis en rang', sub: 'les 24', page: 85, children: ['oprecht op Allah steunen', 'helft van de godsdienst'] },
      { label: 'Middelen nemen', sub: 'les 24', page: 87, children: ['bind haar vast en vertrouw', 'nietsdoen is gelaakt'] },
      { label: 'Vertrouwen op anderen', sub: 'les 24', page: 88, children: ['grote shirk', 'kleine shirk', 'toegestane volmacht'] },
      { label: 'Vruchten', sub: 'les 24', page: 88, children: ['Allah is genoeg', 'Allahs liefde', 'Paradijs zonder afrekening', 'bescherming tegen de duivel'] },
      { label: 'Strijdig ermee', sub: 'les 24', page: 90, children: ['onheil in voortekenen', 'waarzeggers', 'amuletten', 'geen middelen nemen'] }
    ]
  },
  points: [
    { text: 'Tawakkul is een van de grootste oorzaken van succes en een van de hoogste rangen van tawḥīd.', page: 85 },
    { text: 'Tawakkul is oprecht op Allah steunen om nut te krijgen en schade af te weren, en daarbij de middelen nemen die Allah heeft opgedragen.', page: 85 },
    { text: 'Tawakkul is de helft van de godsdienst; de andere helft is je tot Allah wenden: tawakkul is hulp vragen, je tot Hem wenden is aanbidding.', page: 86 },
    { text: 'Middelen nemen is niet strijdig met tawakkul; middelen laten is gelaakt nietsdoen (tawākul).', page: 87 },
    { text: 'Vertrouwen op iets anders dan Allah in wat alleen Allah kan, is grote shirk; met het hart steunen op zichtbare middelen is een soort kleine shirk; iemand volmacht geven voor wat hij kan, is toegestaan.', page: 88 },
    { text: 'Vruchten: Allah is genoeg en beschermt, Allahs liefde, het Paradijs zonder afrekening, bescherming tegen de duivel, en rust in het hart.', page: 88 },
    { text: 'Strijdig met tawakkul: onheil zien in voortekenen, naar waarzeggers en astrologen gaan, amuletten dragen, en geen middelen nemen.', page: 90 }
  ],
  terms: [
    { term: 'التوكل', translit: 'at-tawakkul', meaning: 'Letterlijk: steunen op, je zaak aan iemand toevertrouwen; in de leer: oprecht op Allah steunen voor nut en tegen schade, en daarbij de middelen nemen.', explanation: '', notes: [], page: 85 },
    { term: 'التواكل', translit: 'at-tawākul', meaning: 'De middelen laten onder het mom van godsvertrouwen.', explanation: 'Een slechte opvatting en een gebrek aan verstand.', notes: [], page: 87 },
    { term: 'الطيرة', translit: 'aṭ-ṭiyara', meaning: 'Onheil zien in wat men ziet of hoort.', explanation: '"Onheil zien in voortekenen is shirk."', notes: [], page: 90 },
    { term: 'التمائم', translit: 'at-tamāʾim', meaning: 'Amuletten: kralen, blauwe ogen, beschermbriefjes en dergelijke die men ophangt om schade af te weren.', explanation: '', notes: [], page: 90 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Vertrouwen op iets anders dan Allah',
      intro: 'Zoals in les 24.',
      columns: ['Vorm', 'Oordeel'],
      rows: [
        { label: 'In wat alleen Allah kan', cells: ['bij doden of afgoden hulp, voorziening of voorspraak zoeken', 'grote shirk'] },
        { label: 'Op zichtbare middelen', cells: ['op een leider of machthebber, met het hart ervan afhankelijk', 'een soort kleine shirk'] },
        { label: 'Volmacht aan wie het kan', cells: ['iemand iets laten doen wat hij kan', 'toegestaan; je steunt op Allah, niet op hem'] }
      ],
      page: 88
    }
  ],
  sections: [
    { title: 'Allah is ons genoeg', text: 'Ibn ʿAbbās zei: Ibrāhīm zei "Allah is ons genoeg, en Hij is de beste Beschermer" toen hij in het vuur werd geworpen, en Muḥammad ﷺ zei het toen men zei: "De mensen hebben zich tegen jullie verzameld"; al-Bukhārī.', page: 86 },
    { title: 'Middelen nemen (alleen ter kennisname)', text: '"Hij is het die de aarde voor jullie handzaam maakte; loop dus over haar flanken en eet van Zijn voorziening" (al-Mulk 67:15). Aḥmad werd gevraagd naar wie zeggen: wij blijven zitten en onze voorziening is bij Allah; hij zei: dat is een slechte uitspraak. Wie geen enkel middel vindt, vergeet het grootste middel niet: smeekbede.', more: FYI_NL, page: 87 },
    { title: 'De astroloog en ʿAlī', text: 'Ibn Taymiyya en Ibn al-Qayyim vertellen dat een astroloog ʿAlī, op weg naar de Khawārij, afraadde te reizen terwijl de maan in de Schorpioen stond. ʿAlī zei: wij reizen juist, in vertrouwen op Allah en om jou te logenstraffen; het werd een gezegende tocht.', page: 90 },
    { title: 'In de grot', text: 'Abū Bakr zei: als een van hen onder zijn voeten keek, zou hij ons zien. De Profeet ﷺ zei: "Wat denk je, Abū Bakr, van twee van wie Allah de derde is?"', page: 91 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Tawakkul', items: ['oprecht op Allah steunen voor nut en tegen schade', 'en daarbij de middelen nemen'], page: 85, origin: 'boek' },
    { kind: 'onderscheid', title: 'Tawakkul en tawākul', items: ['tawakkul: op Allah steunen en middelen nemen', 'tawākul: middelen laten; dat is gelaakt'], page: 87, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van tawakkul', items: ['Allah is genoeg, helpt en beschermt', 'Allahs liefde', 'het Paradijs zonder afrekening', 'bescherming tegen de duivel', 'rust in het hart en eer'], page: 88, origin: 'boek' },
    { kind: 'opsomming', title: 'Strijdig met tawakkul', items: ['onheil zien in voortekenen', 'naar waarzeggers en astrologen gaan', 'amuletten dragen', 'geen middelen nemen voor levensonderhoud en behandeling'], page: 90, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Tawakkul is oprecht op Allah steunen en daarbij de middelen nemen.',
    'Bind haar vast en vertrouw op Allah.',
    'Op iets anders vertrouwen in wat alleen Allah kan, is grote shirk.',
    'Wie werkelijk op Allah vertrouwt, wordt voorzien zoals de vogels.',
    'Voortekenen, amuletten en waarzeggers zijn strijdig met tawakkul.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe omschreef Ibn ʿUthaymīn tawakkul?', options: ['oprecht op Allah steunen en de middelen nemen', 'de middelen laten', 'op de mensen steunen', 'veel smeken zonder te werken'], answer: 0, explain: 'Zoals in les 24.', page: 85 },
    { type: 'tf', q: 'Middelen nemen is strijdig met tawakkul.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Bind haar vast en vertrouw op Allah."', page: 87 },
    { type: 'mc', q: 'Wat is het oordeel over bij doden voorziening en hulp zoeken?', options: ['grote shirk', 'toegestaan', 'afkeurenswaardig', 'alleen kleine shirk'], answer: 0, explain: 'Omdat alleen Allah dat kan.', page: 88 },
    { type: 'mc', q: 'Wat hiervan is strijdig met tawakkul?', options: ['amuletten dragen', 'je laten behandelen', 'met eigen handen werken', 'smeekbede'], answer: 0, explain: '"Wie zich aan iets hangt, wordt eraan overgelaten."', page: 90 }
  ]),
  note: 'Oefening van het boek op p. 92. Pagina 87 staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '24', unit: 12, ar, nl }
