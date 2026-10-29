// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 1: الإخلاص (lessen 1–2, boek p. 11–17).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 15–16 (de riyāʾ) is in het boek "alleen ter
// kennisname". Het verhaal over ʿAlī Zayn al-ʿĀbidīn (p. 14) staat als paragraaf, zonder bron, zoals
// in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '11–17',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: 'عمر بن الخطاب', text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى', takhrij: 'متفق عليه', note: 'أهمية النية.', pages: [11], nl: 'Daden worden beoordeeld naar de intenties, en ieder krijgt wat hij beoogde', nlNote: 'Het belang van de intentie.' },
  { narrator: '', text: 'إن الله لا يقبل من العمل إلا ما كان له خالصا وابتغي به وجهه', takhrij: 'النسائي وصححه الألباني', note: 'من ثمرات الإخلاص: القبول.', pages: [12], nl: 'Allah aanvaardt van daden alleen wat zuiver voor Hem is en waarmee Zijn aangezicht gezocht wordt', nlNote: 'Een vrucht van oprechtheid: aanvaarding.' },
  { narrator: '', text: 'إنك لن تنفق نفقة تبتغي بها وجه الله إلا أجرت عليها', takhrij: 'متفق عليه', note: 'الأجر ومضاعفته.', pages: [12], nl: 'Je geeft niets uit waarmee je het aangezicht van Allah zoekt, of je wordt ervoor beloond', nlNote: 'Beloning en de vermenigvuldiging ervan.' },
  { narrator: 'أنس بن مالك', text: 'إن أقواما بالمدينة خلفنا ما سلكنا شعبا ولا واديا إلا وهم معنا فيه، حبسهم العذر', takhrij: 'متفق عليه', note: 'وعند مسلم: «إلا شركوكم في الأجر».', pages: [12], nl: 'Er zijn mensen in Medina achter ons gebleven; wij gingen door geen bergpas en geen dal of zij waren er met ons; een geldige reden hield hen tegen', nlNote: 'Bij Muslim: "of zij delen met jullie in de beloning".' },
  { narrator: 'أبو كبشة الأنماري', text: 'مثل هذه الأمة كمثل أربعة نفر…', takhrij: 'أحمد وابن ماجه وصححه الألباني', note: 'الغني العالم ينفق في الحق، والفقير العالم يقول: لو كان لي مثله لعملت مثله، «فهما في الأجر سواء».', pages: [12], nl: 'Deze gemeenschap is als vier mensen…', nlNote: 'De rijke met kennis die goed besteedt, en de arme met kennis die zegt: had ik wat hij heeft, dan deed ik hetzelfde; "zij zijn gelijk in beloning".' },
  { narrator: 'أبو هريرة', text: 'يا أبا هريرة، أولئك الثلاثة أول خلق الله تسعر بهم النار يوم القيامة', takhrij: 'الترمذي وحسنه', note: 'المجاهد والعالم والمنفق رياء وسمعة.', pages: [13], nl: 'Abū Hurayra, die drie zijn de eersten van Allahs schepping met wie het Vuur op de Dag van de Opstanding wordt aangestoken', nlNote: 'De strijder, de geleerde en de gever die het deden om gezien en gehoord te worden.' },
  { narrator: 'أبو هريرة', text: 'قال الله تبارك وتعالى: أنا أغنى الشركاء عن الشرك، من عمل عملا أشرك فيه معي غيري تركته وشركه', takhrij: 'رواه مسلم', note: 'حديث قدسي؛ عدم القبول.', pages: [13], nl: 'Allah zei: Ik ben van alle deelgenoten het minst afhankelijk van deelgenootschap; wie een daad doet waarin hij naast Mij een ander betrekt, die laat Ik met zijn deelgenootschap', nlNote: 'Een ḥadīth qudsī; de daad wordt niet aanvaard.' },
  { narrator: 'أبو سعيد الخدري', text: 'ألا أخبركم بما هو أخوف عليكم عندي من المسيح الدجال؟ … الشرك الخفي: أن يقوم الرجل يصلي فيزين صلاته لما يرى من نظر رجل', takhrij: 'ابن ماجه وحسنه الألباني', note: FYI_NOTE, pages: [15], nl: 'Zal ik jullie niet vertellen wat ik voor jullie meer vrees dan de valse messias? … De verborgen shirk: dat iemand opstaat om te bidden en zijn gebed mooier maakt omdat hij ziet dat iemand naar hem kijkt', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'إن أخوف ما أخاف عليكم الشرك الأصغر … الرياء، يقول الله عز وجل لهم يوم القيامة إذا جزي الناس بأعمالهم: اذهبوا إلى الذين كنتم تراؤون في الدنيا فانظروا هل تجدون عندهم جزاء', takhrij: 'أحمد وحسنه الأرنؤوط', note: FYI_NOTE, pages: [15], nl: 'Wat ik het meest voor jullie vrees is de kleine shirk … het vertoon. Allah zegt op de Dag van de Opstanding tegen hen, als de mensen voor hun daden beloond worden: ga naar wie jullie in de wereld wilden laten zien en kijk of jullie bij hen een beloning vinden', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'تلك عاجل بشرى المؤمن', takhrij: 'ابن حبان وأصله في صحيح مسلم', note: 'فيمن يعمل لله فيحمده الناس؛ ليس من الرياء. ' + FYI_NOTE, pages: [15], nl: 'Dat is het vervroegde goede nieuws voor de gelovige', nlNote: 'Over wie voor Allah werkt en door de mensen geprezen wordt; dat is geen vertoon. ' + FYI_NOTE_NL }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'النسائي وصححه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد وابن ماجه وصححه الألباني': 'Aḥmad en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'رواه مسلم': 'Muslim',
  'ابن ماجه وحسنه الألباني': 'Ibn Māja; al-Albānī noemde hem ḥasan',
  'أحمد وحسنه الأرنؤوط': 'Aḥmad; al-Arnaʾūṭ noemde hem ḥasan',
  'ابن حبان وأصله في صحيح مسلم': 'Ibn Ḥibbān; de kern staat in Ṣaḥīḥ Muslim'
}
const NARRATOR_NL = { 'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'أنس بن مالك': 'Anas ibn Mālik', 'أبو كبشة الأنماري': 'Abū Kabsha al-Anmārī', 'أبو هريرة': 'Abū Hurayra', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī' }

const PERSONS = [
  ['ibn-al-qayyim', 'text', [11], 'عرف الإخلاص بأنه إفراد الحق سبحانه بالقصد في الطاعة.', 'Definieerde oprechtheid als alleen Allah beogen in de gehoorzaamheid.'],
  ['umar-ibn-al-khattab', 'text', [11], 'روى «إنما الأعمال بالنيات».', 'Overleveraar van "daden worden beoordeeld naar de intenties".'],
  ['yahya-ibn-abi-kathir', 'text', [11], 'قال: تعلموا النية فإنها أبلغ من العمل.', 'Zei: leer de intentie, want die reikt verder dan de daad.'],
  ['abdallah-ibn-al-mubarak', 'text', [12], 'قال: رب عمل صغير تكثره النية، ورب عمل كبير تصغره النية.', 'Zei: menige kleine daad maakt de intentie groot, en menige grote daad maakt de intentie klein.'],
  ['zubayd-al-yami', 'text', [12], 'قال: إني أحب أن تكون لي نية في كل شيء حتى في الطعام والشراب.', 'Zei: ik wil in alles een intentie hebben, zelfs bij eten en drinken.'],
  ['anas-ibn-malik', 'text', [12], 'روى حديث الذين حبسهم العذر بالمدينة.', 'Overleverde de hadith over wie door een geldige reden in Medina bleef.'],
  ['abu-kabsha-al-anmari', 'text', [12], 'روى «مثل هذه الأمة كمثل أربعة نفر».', 'Overleveraar van "deze gemeenschap is als vier mensen".'],
  ['abu-hurayra', 'text', [13], 'روى حديث الثلاثة الذين تسعر بهم النار، والحديث القدسي «أنا أغنى الشركاء».', 'Overleverde de hadith over de drie met wie het Vuur wordt aangestoken, en de ḥadīth qudsī "Ik ben het minst afhankelijk van deelgenoten".'],
  ['al-fudayl-ibn-iyad', 'text', [14], 'قال: إنما يريد الله عز وجل منك نيتك وإرادتك.', 'Zei: Allah wil van jou alleen je intentie en je wil.'],
  ['ali-zayn-al-abidin', 'text', [14], 'كان يحمل الخبز بالليل إلى الفقراء ولا يعلم به أحد، وكان يعول مائة أهل بيت.', 'Droeg ʼs nachts brood naar de armen zonder dat iemand het wist, en onderhield honderd huishoudens.'],
  ['abu-said-al-khudri', 'text', [15], 'روى حديث الشرك الخفي.', 'Overleverde de hadith over de verborgen shirk.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'الإخلاص',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'منزلة الإخلاص وتعريفه وحكمه وأهمية النية، وثمرات الإخلاص، وعواقب تركه، وعلاماته، وحكم قصد الدنيا مع الآخرة، ثم الرياء وما ليس منه، ومتى يشرع إظهار العمل.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'الإخلاص وثمراته، ثم ضده.',
    root: { label: 'الإخلاص', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'تعريفه وحكمه', sub: 'الدرس ١', page: 11, children: ['إفراد الله بالقصد', 'شرط القبول', 'أهمية النية'] },
      { label: 'ثمراته', sub: 'الدرس ١', page: 12, children: ['القبول', 'مضاعفة الأجر', 'بلوغ العمل بالنية'] },
      { label: 'عواقب تركه وعلاماته', sub: 'الدرس ٢', page: 13, children: ['النار', 'رد العمل', 'إخفاء العمل'] },
      { label: 'الرياء', sub: 'الدرس ٢', page: 15, children: ['الشرك الخفي', 'ما ليس من الرياء', 'متى يظهر العمل'] }
    ]
  },
  points: [
    { text: 'الإخلاص لب العبادة وأساس قبول الأعمال وأهم أعمال القلوب ومفتاح دعوة الرسل.', page: 11 },
    { text: 'الإخلاص إفراد الحق سبحانه بالقصد في الطاعة، وهو واجب وشرط لقبول العمل.', page: 11 },
    { text: 'مدار الأعمال على النيات، والمرء يجزى ويبعث على نيته.', page: 11 },
    { text: 'من ثمرات الإخلاص قبول العمل ومضاعفة الأجر، وبلوغ أجر العمل لمن عجز عنه بنيته.', page: 12 },
    { text: 'من عواقب ترك الإخلاص النار يوم القيامة ورد العمل.', page: 13 },
    { text: 'قصد شيء من الدنيا مع العمل للآخرة لا يبطل العمل، لكنه قد ينقص الأجر بقدره.', page: 14 },
    { text: 'الرياء أن يعمل العمل ليراه الناس، وهو من صفات المنافقين.', page: 15 },
    { text: 'لا يترك العمل الصالح بحجة الخوف من الرياء، بل يجاهد نيته.', page: 15 }
  ],
  terms: [
    { term: 'الإخلاص', translit: 'al-ikhlāṣ', meaning: 'لغة: جعل الشيء محضًا لم يخلط معه غيره؛ اصطلاحًا: إفراد الحق سبحانه بالقصد في الطاعة.', explanation: '', notes: [], page: 11 },
    { term: 'النية', translit: 'an-niyya', meaning: 'قصد القلب الذي تدور عليه الأعمال.', explanation: '', notes: [], page: 11 },
    { term: 'الرياء', translit: 'ar-riyāʾ', meaning: 'مصدر راءى: أن يعمل العمل ليراه الناس.', explanation: '', notes: [], page: 15 },
    { term: 'الشرك الخفي', translit: 'ash-shirk al-khafī', meaning: 'أن يزين الرجل صلاته لما يرى من نظر رجل إليه.', explanation: '', notes: [], page: 15 },
    { term: 'السمعة', translit: 'as-sumʿa', meaning: 'العمل ليسمع به الناس.', explanation: '', notes: [], page: 13 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'متى يكون إظهار العمل مشروعًا',
      intro: 'ثلاث أحوال كما في الدرس الثاني.',
      columns: ['السنة', 'مثاله'],
      rows: [
        { label: 'الحال الأولى', cells: ['الإخفاء', 'قيام الليل والخشوع'] },
        { label: 'الحال الثانية', cells: ['الإظهار', 'الجمعة والجماعة والجهر بالحق'] },
        { label: 'الحال الثالثة', cells: ['بحسب الحال: يخفي من خشي الرياء، ويظهر من أراد الاقتداء به', 'صدقة التطوع'] }
      ],
      page: 16
    }
  ],
  sections: [
    { title: 'من علامات الإخلاص', text: 'عدم حب الشهرة والثناء، والغيرة على الدين، والمسارعة واحتساب الأجر، والصبر بلا شكوى، وإخفاء العمل، وأن يكون عمل السر أكثر من عمل العلانية.', page: 13 },
    { title: 'إخلاص في الإخلاص', text: 'قال الفضيل: إنما يريد الله منك نيتك وإرادتك؛ ومن شاهد في إخلاصه الإخلاص احتاج إخلاصه إلى إخلاص.', page: 14 },
    { title: 'صدقة السر', text: 'يذكر الكتاب أن علي بن الحسين زين العابدين كان يحمل الخبز بالليل إلى الفقراء، ولم يعلم أهل المدينة من أين معاشهم حتى مات فوجدوا على ظهره أثر ذلك، وأنه كان يعول مائة أهل بيت.', page: 14 },
    { title: 'قصد الدنيا مع الآخرة', text: 'كمن يصوم لله وللصحة، ويحج ويتجر، ويجاهد ويرجو الغنيمة؛ لا يبطل العمل، وقد ينقص الأجر بقدر ما قصد من الدنيا، والأفضل أن يقصد القربة وحدها وتأتي الدنيا تبعًا.', page: 14 },
    { title: 'ما يظن أنه رياء وليس منه (للاطلاع فقط)', text: 'أن يعمل لنفسه فيحمده الناس، وأن تأتيه الشهرة دون طلبها، وأن ينشط لرؤية العابد وهو يريد الله، ولبس الحسن من الثياب، وستر الذنوب؛ أما التحدث بالذنوب لإظهار الصدق فمن تلبيس إبليس وإشاعة للفاحشة.', more: FYI, page: 15 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الإخلاص', items: ['إفراد الحق سبحانه بالقصد في الطاعة', 'ألا تطلب على عملك شاهدًا إلا الله ولا مجازيًا سواه'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات الإخلاص', items: ['قبول العمل', 'الأجر ومضاعفته', 'بلوغ أجر العمل بالنية', 'النجاة من النار'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'عواقب ترك الإخلاص', items: ['النار يوم القيامة', 'عدم قبول العمل'], page: 13, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الإخلاص إفراد الله بالقصد، وهو شرط قبول العمل.',
    'يبلغ العبد بنيته أجر ما عجز عنه من العمل.',
    'من ترك الإخلاص رد عمله وكان من أول من تسعر بهم النار.',
    'الرياء شرك أصغر، ولا يترك العمل خوفًا منه.',
    'من الأعمال ما السنة إخفاؤه، ومنها ما السنة إظهاره.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما تعريف الإخلاص عند ابن القيم؟', options: ['إفراد الحق سبحانه بالقصد في الطاعة', 'كثرة العمل', 'إظهار العمل للناس', 'ترك الدنيا'], answer: 0, explain: 'كما في الدرس الأول.', page: 11 },
    { type: 'tf', q: 'من عجز عن عمل صالح لعذر وهو ينويه شارك العاملين في الأجر.', options: ['صواب', 'خطأ'], answer: 0, explain: '«إلا شركوكم في الأجر».', page: 12 },
    { type: 'mc', q: 'من أول من تسعر بهم النار يوم القيامة؟', options: ['ثلاثة عملوا رياء وسمعة', 'الكفار فقط', 'العصاة', 'المنافقون فقط'], answer: 0, explain: 'المجاهد والعالم والمنفق رياء.', page: 13 },
    { type: 'tf', q: 'من حج واتجر بطل حجه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا يبطل، وقد ينقص الأجر.', page: 14 },
    { type: 'mc', q: 'ما السنة في قيام الليل؟', options: ['الإخفاء', 'الإظهار', 'الإعلان في المسجد', 'لا فرق'], answer: 0, explain: 'كما في أحوال إظهار العمل.', page: 16 }
  ]),
  note: 'نشاط الكتاب في الصفحة ١٧. الصفحة ١٥ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Oprechtheid',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'De plaats van oprechtheid, de betekenis en het oordeel, het belang van de intentie, de vruchten van oprechtheid, de gevolgen als je haar nalaat en de kenmerken; wereldse doelen naast het hiernamaals; en daarna vertoon, wat geen vertoon is, en wanneer je een daad mag tonen.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'Oprechtheid en haar vruchten, en het tegendeel.',
    root: { label: 'Oprechtheid', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Betekenis en oordeel', sub: 'les 1', page: 11, children: ['alleen Allah beogen', 'voorwaarde voor aanvaarding', 'de intentie'] },
      { label: 'Vruchten', sub: 'les 1', page: 12, children: ['aanvaarding', 'meer beloning', 'beloning door de intentie'] },
      { label: 'Gevolgen en kenmerken', sub: 'les 2', page: 13, children: ['het Vuur', 'de daad afgewezen', 'daden verbergen'] },
      { label: 'Vertoon', sub: 'les 2', page: 15, children: ['de verborgen shirk', 'wat geen vertoon is', 'wanneer tonen'] }
    ]
  },
  points: [
    { text: 'Oprechtheid is de kern van aanbidding, de basis voor aanvaarding, de belangrijkste daad van het hart en de sleutel van de oproep van de profeten.', page: 11 },
    { text: 'Oprechtheid is in de gehoorzaamheid alleen Allah beogen; zij is verplicht en een voorwaarde voor de aanvaarding van een daad.', page: 11 },
    { text: 'Daden draaien om de intentie; je wordt beloond en opgewekt naar je intentie.', page: 11 },
    { text: 'Vruchten van oprechtheid zijn aanvaarding, meer beloning, en de beloning van een daad krijgen die je door een reden niet kon doen.', page: 12 },
    { text: 'Wie oprechtheid nalaat, wacht het Vuur op de Dag van de Opstanding, en zijn daad wordt niet aanvaard.', page: 13 },
    { text: 'Iets werelds beogen naast het hiernamaals maakt de daad niet ongeldig, maar kan de beloning naar verhouding verminderen.', page: 14 },
    { text: 'Vertoon (riyāʾ) is een daad doen om door mensen gezien te worden; het is een kenmerk van de huichelaars.', page: 15 },
    { text: 'Laat een goede daad niet na uit angst voor vertoon, maar bevecht je intentie.', page: 15 }
  ],
  terms: [
    { term: 'الإخلاص', translit: 'al-ikhlāṣ', meaning: 'Letterlijk: iets zuiver maken zonder bijmenging; in de leer: in de gehoorzaamheid alleen Allah beogen.', explanation: '', notes: [], page: 11 },
    { term: 'النية', translit: 'an-niyya', meaning: 'Het doel van het hart waar daden om draaien.', explanation: '', notes: [], page: 11 },
    { term: 'الرياء', translit: 'ar-riyāʾ', meaning: 'Vertoon: een daad doen opdat mensen hem zien.', explanation: '', notes: [], page: 15 },
    { term: 'الشرك الخفي', translit: 'ash-shirk al-khafī', meaning: 'De verborgen shirk: je gebed mooier maken omdat iemand naar je kijkt.', explanation: '', notes: [], page: 15 },
    { term: 'السمعة', translit: 'as-sumʿa', meaning: 'Een daad doen opdat mensen erover horen.', explanation: '', notes: [], page: 13 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Wanneer je een daad mag tonen',
      intro: 'Drie situaties, zoals in les 2.',
      columns: ['Sunna', 'Voorbeeld'],
      rows: [
        { label: 'Eerste situatie', cells: ['verbergen', 'het nachtgebed en ootmoed'] },
        { label: 'Tweede situatie', cells: ['tonen', 'het vrijdaggebed, het gebed in gemeenschap en de waarheid hardop zeggen'] },
        { label: 'Derde situatie', cells: ['afhankelijk: verbergen als je vertoon vreest, tonen als je wilt dat anderen je navolgen', 'vrijwillige liefdadigheid'] }
      ],
      page: 16
    }
  ],
  sections: [
    { title: 'Kenmerken van oprechtheid', text: 'Niet houden van roem en lof, ijver voor de religie, haast maken en op beloning hopen, geduld zonder klagen, daden verbergen, en meer in het verborgene doen dan in het openbaar.', page: 13 },
    { title: 'Oprechtheid in de oprechtheid', text: 'Al-Fuḍayl zei: Allah wil van jou alleen je intentie en je wil. Wie in zijn oprechtheid zijn eigen oprechtheid ziet, diens oprechtheid heeft zelf oprechtheid nodig.', page: 14 },
    { title: 'Geven in het geheim', text: 'Het boek vertelt dat ʿAlī ibn al-Ḥusayn Zayn al-ʿĀbidīn ʼs nachts brood naar de armen droeg; de mensen in Medina wisten niet waar hun levensonderhoud vandaan kwam tot hij stierf en men de sporen op zijn rug zag; hij onderhield honderd huishoudens.', page: 14 },
    { title: 'Iets werelds naast het hiernamaals', text: 'Zoals vasten voor Allah en voor je gezondheid, de ḥajj met handel, of strijden en op buit hopen: de daad wordt niet ongeldig, maar de beloning kan verminderen naar wat je werelds beoogde; het beste is alleen de nabijheid van Allah te zoeken, de wereld komt dan vanzelf.', page: 14 },
    { title: 'Wat vertoon lijkt maar het niet is (alleen ter kennisname)', text: 'Voor jezelf werken terwijl mensen je prijzen, bekend worden zonder het te zoeken, ijverig worden als je een aanbidder ziet terwijl je Allah beoogt, mooie kleding dragen, en je zonden verbergen; je zonden vertellen om oprecht te lijken is een list van Iblīs en verspreidt het kwade.', more: FYI_NL, page: 15 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Oprechtheid', items: ['in de gehoorzaamheid alleen Allah beogen', 'voor je daad geen getuige zoeken dan Allah, en geen beloner dan Hem'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van oprechtheid', items: ['aanvaarding van de daad', 'beloning en vermenigvuldiging', 'beloning door de intentie', 'redding van het Vuur'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'Gevolgen als je oprechtheid nalaat', items: ['het Vuur op de Dag van de Opstanding', 'de daad wordt niet aanvaard'], page: 13, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Oprechtheid is alleen Allah beogen; zij is een voorwaarde voor aanvaarding.',
    'Door je intentie krijg je de beloning van een daad die je niet kon doen.',
    'Wie oprechtheid nalaat, ziet zijn daad afgewezen en hoort bij de eersten voor het Vuur.',
    'Vertoon is kleine shirk; laat een daad er niet om na.',
    'Sommige daden verberg je volgens de sunna, andere toon je.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe definieerde Ibn al-Qayyim oprechtheid?', options: ['in de gehoorzaamheid alleen Allah beogen', 'veel daden doen', 'daden aan mensen tonen', 'de wereld opgeven'], answer: 0, explain: 'Zoals in les 1.', page: 11 },
    { type: 'tf', q: 'Wie door een reden een goede daad niet kan doen maar haar wel van plan is, deelt in de beloning.', options: ['Juist', 'Onjuist'], answer: 0, explain: '"Of zij delen met jullie in de beloning."', page: 12 },
    { type: 'mc', q: 'Met wie wordt het Vuur op de Dag van de Opstanding het eerst aangestoken?', options: ['drie die het deden voor vertoon en roem', 'alleen de ongelovigen', 'de zondaars', 'alleen de huichelaars'], answer: 0, explain: 'De strijder, de geleerde en de gever die het voor vertoon deden.', page: 13 },
    { type: 'tf', q: 'Wie de ḥajj doet en ook handel drijft, zijn ḥajj is ongeldig.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij is geldig; de beloning kan minder zijn.', page: 14 },
    { type: 'mc', q: 'Wat is de sunna bij het nachtgebed?', options: ['verbergen', 'tonen', 'aankondigen in de moskee', 'geen verschil'], answer: 0, explain: 'Zoals bij de situaties voor het tonen van daden.', page: 16 }
  ]),
  note: 'Oefening van het boek op p. 17. Pagina 15 staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '1', unit: 1, ar, nl }
