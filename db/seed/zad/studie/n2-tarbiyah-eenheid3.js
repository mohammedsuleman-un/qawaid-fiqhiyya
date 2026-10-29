// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 3: الخوف والرجاء (lessen 5–7, boek p. 26–34).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 27–28 en 33 zijn in het boek "alleen ter
// kennisname". De uitspraak «الرجاء حاد يحدو بالراجي…» (p. 33) staat zonder naam, zoals het boek
// haar daar geeft.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '26–34',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'إني لأتقاكم لله وأخشاكم له', takhrij: 'البخاري ومسلم', note: 'منزلة الخشية. ' + FYI_NOTE, pages: [27], nl: 'Ik ben van jullie degene die Allah het meest vreest en het meest ontzag voor Hem heeft', nlNote: 'De plaats van ontzag. ' + FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'وعزتي لا أجمع على عبدي خوفين وأمنين، إذا خافني في الدنيا أمنته يوم القيامة، وإذا أمنني في الدنيا أخفته يوم القيامة', takhrij: 'ابن حبان وصححه الألباني', note: 'حديث قدسي؛ الأمن يوم القيامة.', pages: [30], nl: 'Bij Mijn macht, Ik geef Mijn dienaar geen twee keer vrees en geen twee keer veiligheid: vreest hij Mij in de wereld, dan maak Ik hem veilig op de Dag van de Opstanding; voelt hij zich in de wereld veilig voor Mij, dan laat Ik hem vrezen op de Dag van de Opstanding', nlNote: 'Een ḥadīth qudsī; veiligheid op de Dag van de Opstanding.' },
  { narrator: 'أبو هريرة', text: 'لا يلج النار رجل بكى من خشية الله حتى يعود اللبن في الضرع', takhrij: 'الترمذي وصححه الألباني', note: 'النجاة من النار.', pages: [30], nl: 'Iemand die huilde uit ontzag voor Allah gaat het Vuur niet binnen, zoals de melk niet terugkeert in de uier', nlNote: 'Redding van het Vuur.' },
  { narrator: '', text: 'ورجل طلبته امرأة ذات منصب وجمال فقال: إني أخاف الله', takhrij: 'متفق عليه', note: 'من السبعة الذين يظلهم الله في ظله.', pages: [30], nl: 'En een man die door een vrouw van aanzien en schoonheid werd uitgenodigd en zei: ik vrees Allah', nlNote: 'Een van de zeven die Allah onder Zijn schaduw neemt.' },
  { narrator: 'عبد الله بن عمر', text: 'يمجد الرب نفسه: أنا الجبار، أنا المتكبر، أنا الملك، أنا العزيز، أنا الكريم', takhrij: 'أحمد وصححه الأرنؤوط', note: 'لما قرأ ﴿وما قدروا الله حق قدره﴾ على المنبر، فرجف به المنبر حتى قلنا: ليخرن به.', pages: [31], nl: 'De Heer verheerlijkt Zichzelf: Ik ben de Machtige, Ik ben de Verhevene, Ik ben de Koning, Ik ben de Geduchte, Ik ben de Edelmoedige', nlNote: 'Toen hij op de preekstoel "zij hebben Allah niet geschat zoals Hij geschat moet worden" reciteerde; de preekstoel beefde zo dat wij zeiden: hij valt met hem.' },
  { narrator: '', text: 'اللهم اقسم لنا من خشيتك ما يحول بيننا وبين معاصيك', takhrij: 'الترمذي وحسنه الألباني', note: 'الدعاء من أسباب الخوف.', pages: [31], nl: 'O Allah, geef ons zoveel ontzag voor U dat het ons scheidt van ongehoorzaamheid aan U', nlNote: 'Smeekbede is een middel om vrees te krijgen.' },
  { narrator: '', text: 'اللهم وأسألك خشيتك في الغيب والشهادة', takhrij: 'النسائي وصححه الألباني', note: '', pages: [31], nl: 'O Allah, ik vraag U om ontzag voor U in het verborgene en in het openbaar', nlNote: '' },
  { narrator: '', text: 'إنه من لم يسأل الله يغضب عليه', takhrij: 'الترمذي وحسنه الألباني', note: 'من ثمرات الرجاء: كثرة السؤال.', pages: [34], nl: 'Wie Allah niet vraagt, op hem wordt Hij boos', nlNote: 'Een vrucht van hoop: veel vragen.' }
]

const TAKHRIJ_NL = {
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'ابن حبان وصححه الألباني': 'Ibn Ḥibbān; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أحمد وصححه الأرنؤوط': 'Aḥmad; al-Arnaʾūṭ noemde hem ṣaḥīḥ',
  'الترمذي وحسنه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ḥasan',
  'النسائي وصححه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar' }

const PERSONS = [
  ['ibn-uthaymin', 'text', [26], 'عرف الخشية: خوف مبني على العلم بعظمة من يخشى وكمال سلطانه.', 'Definieerde ontzag (khashya): vrees gebaseerd op kennis van de grootheid en volmaakte macht van wie gevreesd wordt.'],
  ['al-hasan-al-basri', 'text', [27, 33], 'قال: إن المؤمن جمع إحسانًا وخشية، وإن المنافق جمع إساءة وأمنًا؛ وذم من ألهتهم الأماني.', 'Zei: de gelovige combineert goed doen met ontzag, de huichelaar slecht doen met zich veilig voelen; hij laakte wie door wensdromen werd afgeleid.'],
  ['ibn-al-qayyim', 'text', [27], 'قال: منزلة الخوف من أجل منازل الطريق وأنفعها للقلب، وهي فرض على كل أحد.', 'Zei: vrees is een van de edelste en voor het hart nuttigste stations van de weg, en zij is voor iedereen verplicht.'],
  ['ali-ibn-abi-talib', 'text', [28], 'قال: لا يخاف العبد إلا ذنبه، ولا يرجو إلا ربه.', 'Zei: de dienaar vreest alleen zijn zonde en hoopt alleen op zijn Heer.'],
  ['abu-hurayra', 'text', [30], 'روى الحديث القدسي «لا أجمع على عبدي خوفين وأمنين»، وحديث البكاء من خشية الله.', 'Overleverde de ḥadīth qudsī "Ik geef Mijn dienaar geen twee keer vrees en geen twee keer veiligheid", en de hadith over huilen uit ontzag voor Allah.'],
  ['ibn-umar', 'text', [31], 'روى قراءة النبي ﷺ ﴿وما قدروا الله حق قدره﴾ على المنبر.', 'Overleverde dat de Profeet ﷺ op de preekstoel "zij hebben Allah niet geschat zoals Hij geschat moet worden" reciteerde.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'الخوف والرجاء',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف الخوف والخشية وحكم الخوف من الله ومنزلته، وأقسام الناس فيه، وأنواعه وثمراته، والأسباب الجالبة له، ثم الرجاء: تعريفه والفرق بينه وبين التمني وثمراته وأسبابه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'الخوف ثم الرجاء.',
    root: { label: 'الخوف والرجاء', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'الخوف', sub: 'الدرس ٥', page: 26, children: ['تعريفه', 'الخشية', 'حكمه ومنزلته'] },
      { label: 'أنواعه وثمراته', sub: 'الدرس ٦', page: 28, children: ['من سخط الله', 'من العقوبة', 'من فوات الأجر'] },
      { label: 'أسبابه', sub: 'الدرس ٧', page: 31, children: ['ذكر عظمة الله', 'سماع القرآن', 'الدعاء والذكر'] },
      { label: 'الرجاء', sub: 'الدرس ٧', page: 33, children: ['تعريفه', 'الرجاء والتمني', 'ثمراته'] }
    ]
  },
  points: [
    { text: 'الخوف توقع حلول مكروه أو فوات محبوب لعلامة مظنونة أو معلومة.', page: 26 },
    { text: 'الخشية خوف مبني على العلم بعظمة المخشي وكمال سلطانه، ولذا كان العلماء أشد خشية.', page: 26 },
    { text: 'الخوف من الله واجب من أعظم الواجبات، وإفراده بالخوف شرط في الإيمان.', page: 26 },
    { text: 'من أنواع الخوف: الخوف من سخط الله، ومن عقوبته في الدنيا والآخرة، ومن فوات الأجر.', page: 28 },
    { text: 'الشرك أعظم ما يخاف منه لأنه يحبط جميع الأعمال.', page: 29 },
    { text: 'من أسباب الخوف ذكر عظمة الله، واستحضار الوقوف بين يديه، وسماع القرآن والمواعظ، والدعاء، وكثرة الذكر.', page: 31 },
    { text: 'الرجاء صلة مع الله تحدو بالقلب إلى الأمل بفضله ورضوانه، وضده اليأس.', page: 33 },
    { text: 'الرجاء يقترن بالعمل وحسن التوكل، والتمني يقترن بالكسل وترك الجهد.', page: 33 }
  ],
  terms: [
    { term: 'الخوف', translit: 'al-khawf', meaning: 'لغة: الذعر والفزع، ضد الأمن؛ اصطلاحًا: توقع حلول مكروه أو فوات محبوب لعلامة مظنونة أو معلومة.', explanation: '', notes: [], page: 26 },
    { term: 'الخشية', translit: 'al-khashya', meaning: 'خوف مبني على العلم بعظمة من يخشى وكمال سلطانه.', explanation: '', notes: [], page: 26 },
    { term: 'الرجاء', translit: 'ar-rajāʾ', meaning: 'لغة: الأمل؛ اصطلاحًا: صلة مع الله تحدو بالقلب إلى الأمل بفضله ورضوانه في الدنيا والآخرة.', explanation: '', notes: [], page: 33 },
    { term: 'التمني', translit: 'at-tamannī', meaning: 'رجاء بلا عمل، يقترن بالكسل.', explanation: '', notes: [], page: 33 },
    { term: 'اليأس', translit: 'al-yaʾs', meaning: 'ضد الرجاء: القنوط من رحمة الله.', explanation: '﴿إنه لا ييأس من روح الله إلا القوم الكافرون﴾ [يوسف: ٨٧].', notes: [], page: 33 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'أقسام الناس في الخوف',
      intro: 'كما في الكتاب (للاطلاع فقط).',
      columns: ['حالهم'],
      rows: [
        { label: 'السابقون المقربون', cells: ['يحملهم الخوف على المسارعة في الخيرات والنوافل والورع'] },
        { label: 'المقتصدون', cells: ['يحملهم على اجتناب المحرمات وأداء الواجبات'] },
        { label: 'المفرطون الظالمون لأنفسهم', cells: ['معهم أصل الخوف، ويقعون لقلته في بعض الكبائر؛ عصاة لا يخرجون من الإسلام'] },
        { label: 'الغلاة', cells: ['يشتد خوفهم حتى ييأسوا من رحمة الله، وهم مخطئون'] }
      ],
      page: 27
    },
    {
      type: 'compare',
      title: 'الرجاء والتمني',
      intro: 'كما في الدرس السابع (للاطلاع فقط).',
      columns: ['الرجاء', 'التمني'],
      rows: [
        { label: 'مع العمل', cells: ['يقترن بالجهد وحسن التوكل', 'يقترن بالكسل وترك الجهد'] },
        { label: 'صاحبه', cells: ['من أطاع فرجا الثواب، أو تاب فرجا المغفرة', 'من رجا بلا طاعة ولا توبة، ورجاؤه كذب'] }
      ],
      page: 33
    }
  ],
  sections: [
    { title: 'منزلة الخوف (للاطلاع فقط)', text: 'الخوف من الله أصل عظيم لا يصح الإيمان بدونه، وهو أساس التقوى ورأس الحكمة؛ قال الحسن: إن المؤمن جمع إحسانًا وخشية، وإن المنافق جمع إساءة وأمنًا.', more: FYI, page: 27 },
    { title: 'من ثمرات الخوف', text: 'العلم والبصيرة، والمسارعة في الخيرات، والتمكين في الأرض، والأمن يوم القيامة، والنجاة من النار، ورضا الله، والاستظلال في ظل العرش، والفرح والنعيم.', page: 29 },
    { title: 'موانع الخوف', text: 'المعاصي، وحب الدنيا، وصحبة السوء، والغفلة، وتبلد الإحساس، والتسويف؛ فالغفلة تقسي القلب حتى يطبع عليه.', page: 32 },
    { title: 'السائر بين نظرين (للاطلاع فقط)', text: 'نظر إلى عيوب نفسه يفتح عليه باب الخوف، ونظر إلى سعة رحمة الله يفتح عليه باب الرجاء.', more: FYI, page: 33 },
    { title: 'ثمرات الرجاء وأسبابه', text: 'من ثمراته كثرة الذكر والدعاء، والمداومة على الطاعة، والرضا بالقضاء، والنجاة من غضب الله؛ ومن أسبابه ذكر نعم الله، ووعده بالأجر الكبير، وسعة رحمته التي سبقت غضبه، ومعرفة أسمائه وصفاته.', page: 34 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'الخوف والخشية', items: ['الخوف: توقع مكروه أو فوات محبوب', 'الخشية: خوف مبني على العلم بعظمة المخشي'], page: 26, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع الخوف', items: ['الخوف من سخط الله', 'الخوف من العقوبة في الدنيا والآخرة', 'الخوف من فوات الأجر'], page: 28, origin: 'boek' },
    { kind: 'opsomming', title: 'الأسباب الجالبة للخوف', items: ['ذكر عظمة الله', 'استحضار الوقوف بين يديه', 'سماع القرآن والمواعظ', 'الدعاء', 'كثرة الذكر', 'البعد عن أسباب الأمن من مكر الله'], page: 31, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الخوف من الله واجب، والخشية خوف مع علم.',
    'أعظم ما يخاف منه الشرك لأنه يحبط العمل.',
    'من خاف الله في الدنيا أمنه يوم القيامة.',
    'الرجاء مع العمل، والتمني بلا عمل.',
    'السائر إلى الله بين نظر إلى عيوبه ونظر إلى رحمة ربه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الخشية؟', options: ['خوف مبني على العلم بعظمة المخشي', 'خوف بلا سبب', 'الحزن', 'الرجاء'], answer: 0, explain: 'كما عرفها ابن عثيمين.', page: 26 },
    { type: 'tf', q: 'الخوف من الله مستحب وليس واجبًا.', options: ['صواب', 'خطأ'], answer: 1, explain: 'واجب من أعظم الواجبات.', page: 26 },
    { type: 'mc', q: 'ما أعظم ما يخاف منه لأنه يحبط جميع الأعمال؟', options: ['الشرك', 'الصغائر', 'المكروهات', 'النسيان'], answer: 0, explain: 'كما في الدرس السادس.', page: 29 },
    { type: 'mc', q: 'من ثمرات الخوف في حديث «لا يلج النار»:', options: ['النجاة من النار', 'كثرة المال', 'طول العمر', 'الشهرة'], answer: 0, explain: '«رجل بكى من خشية الله».', page: 30 },
    { type: 'tf', q: 'من رجا رحمة الله بلا عمل ولا توبة فهو راج صادق.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هذا متمن، ورجاؤه كذب.', page: 33 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٣٢. أجزاء «للاطلاع فقط» في الكتاب: منزلة الخوف وأقسام الناس فيه (ص٢٧–٢٨)، الرجاء (ص٣٣).'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Vrees en hoop',
  subtitle: 'Drie lessen samen op één pagina',
  summary: 'De betekenis van vrees en ontzag, het oordeel over en de plaats van vrees voor Allah, hoe mensen daarin verschillen, de soorten en vruchten van vrees, wat vrees opwekt; en daarna hoop: de betekenis, het verschil met wensdromen, de vruchten en de oorzaken.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'Vrees, daarna hoop.',
    root: { label: 'Vrees en hoop', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Vrees', sub: 'les 5', page: 26, children: ['betekenis', 'ontzag', 'oordeel en plaats'] },
      { label: 'Soorten en vruchten', sub: 'les 6', page: 28, children: ['voor Allahs toorn', 'voor straf', 'voor verlies van beloning'] },
      { label: 'Wat vrees opwekt', sub: 'les 7', page: 31, children: ['Allahs grootheid', 'de Koran horen', 'smeekbede en gedenken'] },
      { label: 'Hoop', sub: 'les 7', page: 33, children: ['betekenis', 'hoop en wensdromen', 'vruchten'] }
    ]
  },
  points: [
    { text: 'Vrees is verwachten dat iets onaangenaams gebeurt of iets geliefds verloren gaat, op grond van een vermoed of bekend teken.', page: 26 },
    { text: 'Ontzag (khashya) is vrees die gebaseerd is op kennis van de grootheid en de volmaakte macht van wie gevreesd wordt; daarom hebben geleerden het meeste ontzag.', page: 26 },
    { text: 'Allah vrezen is een van de grootste plichten, en alleen Hem vrezen is een voorwaarde van het geloof.', page: 26 },
    { text: 'Soorten vrees zijn: vrees voor Allahs toorn, voor Zijn straf in deze wereld en het hiernamaals, en voor het verlies van beloning.', page: 28 },
    { text: 'Shirk is het meest te vrezen, omdat het alle daden tenietdoet.', page: 29 },
    { text: 'Vrees wordt opgewekt door Allahs grootheid te gedenken, je staan voor Hem voor ogen te houden, de Koran en vermaningen te horen, smeekbede en veel gedenken.', page: 31 },
    { text: 'Hoop is een band met Allah die het hart drijft naar verwachting van Zijn gunst en welbehagen; het tegendeel is wanhoop.', page: 33 },
    { text: 'Hoop gaat samen met inzet en goed vertrouwen; wensdromen gaan samen met luiheid zonder inspanning.', page: 33 }
  ],
  terms: [
    { term: 'الخوف', translit: 'al-khawf', meaning: 'Letterlijk: schrik, het tegendeel van veiligheid; in de leer: verwachten dat iets onaangenaams gebeurt of iets geliefds verloren gaat, op grond van een vermoed of bekend teken.', explanation: '', notes: [], page: 26 },
    { term: 'الخشية', translit: 'al-khashya', meaning: 'Vrees gebaseerd op kennis van de grootheid en volmaakte macht van wie gevreesd wordt.', explanation: '', notes: [], page: 26 },
    { term: 'الرجاء', translit: 'ar-rajāʾ', meaning: 'Letterlijk: verwachting; in de leer: een band met Allah die het hart drijft naar verwachting van Zijn gunst en welbehagen in deze wereld en het hiernamaals.', explanation: '', notes: [], page: 33 },
    { term: 'التمني', translit: 'at-tamannī', meaning: 'Hopen zonder te handelen, samen met luiheid.', explanation: '', notes: [], page: 33 },
    { term: 'اليأس', translit: 'al-yaʾs', meaning: 'Het tegendeel van hoop: wanhopen aan Allahs genade.', explanation: '"Alleen de ongelovigen wanhopen aan de genade van Allah" (Yūsuf 12:87).', notes: [], page: 33 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Hoe mensen verschillen in vrees',
      intro: 'Zoals in het boek (alleen ter kennisname).',
      columns: ['Toestand'],
      rows: [
        { label: 'De voorlopers, de nabijen', cells: ['vrees drijft hen tot wedijveren in het goede, vrijwillige daden en vroomheid'] },
        { label: 'De gematigden', cells: ['vrees drijft hen tot het mijden van het verbodene en het doen van plichten'] },
        { label: 'Wie tekortschieten', cells: ['zij hebben de basis van vrees, maar door weinig vrees vallen ze in grote zonden; zondaars die moslim blijven'] },
        { label: 'De overdrijvers', cells: ['hun vrees wordt zo hevig dat ze wanhopen aan Allahs genade; zij zitten fout'] }
      ],
      page: 27
    },
    {
      type: 'compare',
      title: 'Hoop en wensdromen',
      intro: 'Zoals in les 7 (alleen ter kennisname).',
      columns: ['Hoop', 'Wensdroom'],
      rows: [
        { label: 'Met daden', cells: ['gaat samen met inzet en goed vertrouwen', 'gaat samen met luiheid zonder inspanning'] },
        { label: 'Wie', cells: ['wie gehoorzaamt en op beloning hoopt, of berouw toont en op vergeving hoopt', 'wie hoopt zonder gehoorzaamheid of berouw; zijn hoop is een leugen'] }
      ],
      page: 33
    }
  ],
  sections: [
    { title: 'De plaats van vrees (alleen ter kennisname)', text: 'Vrees voor Allah is een groot fundament zonder welk het geloof niet geldig is; zij is de basis van godsvrees en het hoofd van wijsheid. Al-Ḥasan zei: de gelovige combineert goed doen met ontzag, de huichelaar slecht doen met zich veilig voelen.', more: FYI_NL, page: 27 },
    { title: 'Vruchten van vrees', text: 'Kennis en inzicht, wedijveren in het goede, macht op aarde, veiligheid op de Dag van de Opstanding, redding van het Vuur, Allahs welbehagen, de schaduw van de Troon, en vreugde en gelukzaligheid.', page: 29 },
    { title: 'Wat vrees tegenhoudt', text: 'Zonden, liefde voor de wereld, slecht gezelschap, onachtzaamheid, afgestompt gevoel en uitstellen; onachtzaamheid verhardt het hart tot het verzegeld wordt.', page: 32 },
    { title: 'Tussen twee blikken (alleen ter kennisname)', text: 'Een blik op je eigen gebreken opent de deur van de vrees, en een blik op de ruimte van Allahs genade opent de deur van de hoop.', more: FYI_NL, page: 33 },
    { title: 'Vruchten en oorzaken van hoop', text: 'Vruchten zijn veel gedenken en smeken, volharden in gehoorzaamheid, tevredenheid met de beschikking en redding van Allahs toorn. Oorzaken zijn Allahs gunsten gedenken, Zijn belofte van grote beloning, Zijn genade die Zijn toorn voorgaat, en Zijn namen en eigenschappen kennen.', page: 34 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'Vrees en ontzag', items: ['vrees: iets onaangenaams of verlies verwachten', 'ontzag: vrees op grond van kennis van de grootheid van wie gevreesd wordt'], page: 26, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten vrees', items: ['vrees voor Allahs toorn', 'vrees voor straf in deze wereld en het hiernamaals', 'vrees voor verlies van beloning'], page: 28, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat vrees opwekt', items: ['Allahs grootheid gedenken', 'je staan voor Hem voor ogen houden', 'de Koran en vermaningen horen', 'smeekbede', 'veel gedenken', 'wegblijven van wat je je veilig doet voelen voor Allahs plan'], page: 31, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Allah vrezen is verplicht; ontzag is vrees met kennis.',
    'Shirk is het meest te vrezen, omdat het daden tenietdoet.',
    'Wie Allah in de wereld vreest, is veilig op de Dag van de Opstanding.',
    'Hoop gaat met daden, een wensdroom zonder.',
    'Wie naar Allah gaat, kijkt naar zijn eigen gebreken en naar Allahs genade.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is ontzag (khashya)?', options: ['vrees op grond van kennis van de grootheid van wie gevreesd wordt', 'vrees zonder reden', 'verdriet', 'hoop'], answer: 0, explain: 'Zoals Ibn ʿUthaymīn het definieerde.', page: 26 },
    { type: 'tf', q: 'Allah vrezen is aanbevolen, niet verplicht.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is een van de grootste plichten.', page: 26 },
    { type: 'mc', q: 'Wat is het meest te vrezen, omdat het alle daden tenietdoet?', options: ['shirk', 'kleine zonden', 'afgeraden dingen', 'vergeetachtigheid'], answer: 0, explain: 'Zoals in les 6.', page: 29 },
    { type: 'mc', q: 'Welke vrucht van vrees noemt de hadith "gaat het Vuur niet binnen"?', options: ['redding van het Vuur', 'veel bezit', 'een lang leven', 'roem'], answer: 0, explain: '"Iemand die huilde uit ontzag voor Allah."', page: 30 },
    { type: 'tf', q: 'Wie op Allahs genade hoopt zonder daden of berouw, heeft echte hoop.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat is een wensdroom, en zijn hoop is een leugen.', page: 33 }
  ]),
  note: 'Oefening van het boek op p. 32. Delen die het boek alleen ter kennisname geeft: de plaats van vrees en hoe mensen erin verschillen (p. 27–28), hoop (p. 33). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '5', unit: 3, ar, nl }
