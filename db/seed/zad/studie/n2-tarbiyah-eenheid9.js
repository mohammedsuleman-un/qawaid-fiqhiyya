// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 9: الرضا (lessen 16–18, boek p. 63–69).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 66 is in het boek "alleen ter kennisname".
// Niet in het hadith-tabblad: «إن الله تبارك وتعالى يبتلي عبده بما أعطاه…» (p. 68), want het boek noemt het
// een woord van een van de salaf; de woorden van Isḥāq en Aktham ibn Ṣayfī staan alleen in de tekst,
// omdat zij niet in het personenregister staan.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '63–69',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'ذاق طعم الإيمان من رضي بالله ربا وبالإسلام دينا وبمحمد رسولا', takhrij: 'رواه مسلم', note: 'درجات الرضا بحسب قوة الإيمان.', pages: [63], nl: 'De smaak van het geloof proeft wie tevreden is met Allah als Heer, met de islam als godsdienst en met Muḥammad als boodschapper', nlNote: 'De graden van tevredenheid volgen de kracht van het geloof.' },
  { narrator: '', text: 'إن العين تدمع، وإن القلب يحزن، ولا نقول إلا ما يرضي ربنا، وإنا عليك يا إبراهيم لمحزونون', takhrij: 'متفق عليه', note: 'لما مات ابنه إبراهيم؛ الحزن لا ينافي الرضا. ' + FYI_NOTE, pages: [66], nl: 'Het oog traant en het hart is bedroefd, maar wij zeggen alleen wat onze Heer behaagt; en wij zijn om jou bedroefd, Ibrāhīm', nlNote: 'Bij de dood van zijn zoon Ibrāhīm; verdriet is niet strijdig met tevredenheid. ' + FYI_NOTE_NL },
  { narrator: 'زيد بن ثابت', text: 'أسألك اللهم الرضا بعد القضاء', takhrij: 'أحمد والحاكم وقال: صحيح الإسناد', note: 'من دعاء علّمه النبي ﷺ زيدًا يتعاهد به أهله كل يوم.', pages: [67], nl: 'Ik vraag U, o Allah, om tevredenheid na de beschikking', nlNote: 'Uit een smeekbede die de Profeet ﷺ Zayd leerde voor elke dag.' },
  { narrator: 'أبو سعيد الخدري', text: 'يا أبا سعيد، من رضي بالله ربا وبالإسلام دينا وبمحمد نبيا وجبت له الجنة', takhrij: 'رواه مسلم', note: 'فعجب لها أبو سعيد فقال: أعدها علي يا رسول الله.', pages: [68], nl: 'Abū Saʿīd, wie tevreden is met Allah als Heer, met de islam als godsdienst en met Muḥammad als profeet, voor hem is het Paradijs verplicht', nlNote: 'Abū Saʿīd was erover verwonderd en vroeg het te herhalen.' },
  { narrator: '', text: 'ما من عبد مسلم يقول حين يصبح وحين يمسي ثلاث مرات: رضيت بالله ربا وبالإسلام دينا وبمحمد ﷺ نبيا، إلا كان حقا على الله أن يرضيه يوم القيامة', takhrij: 'أحمد وقال الأرناؤوط: صحيح لغيره', note: '', pages: [68], nl: 'Geen moslim zegt ’s ochtends en ’s avonds drie keer: ik ben tevreden met Allah als Heer, met de islam als godsdienst en met Muḥammad ﷺ als profeet, of het is een recht op Allah dat Hij hem tevreden stelt op de Dag der Opstanding', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'إن الله إذا أحب قوما ابتلاهم، فمن رضي فله الرضا، ومن سخط فله السخط', takhrij: 'الترمذي وصححه الألباني', note: '', pages: [68], nl: 'Als Allah een volk liefheeft, beproeft Hij hen; wie tevreden is, krijgt Zijn welbehagen, en wie zich ergert, krijgt Zijn toorn', nlNote: '' },
  { narrator: 'سعد بن أبي وقاص', text: 'من قال حين يسمع المؤذن: أشهد أن لا إله إلا الله وحده لا شريك له، وأن محمدا عبده ورسوله، رضيت بالله ربا وبمحمد رسولا وبالإسلام دينا، غفر له ذنبه', takhrij: 'رواه مسلم', note: 'من ثمرات الرضا: المغفرة.', pages: [69], nl: 'Wie bij het horen van de oproeper zegt: ik getuig dat er geen god is dan Allah alleen, zonder deelgenoot, en dat Muḥammad Zijn dienaar en boodschapper is; ik ben tevreden met Allah als Heer, met Muḥammad als boodschapper en met de islam als godsdienst, diens zonde wordt vergeven', nlNote: 'Een vrucht van tevredenheid: vergeving.' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim',
  'أحمد والحاكم وقال: صحيح الإسناد': 'Aḥmad en al-Ḥākim; al-Ḥākim noemde de keten ṣaḥīḥ',
  'أحمد وقال الأرناؤوط: صحيح لغيره': 'Aḥmad; al-Arnaʾūṭ noemde hem ṣaḥīḥ li-ghayrihi',
  'الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'زيد بن ثابت': 'Zayd ibn Thābit', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'أنس بن مالك': 'Anas ibn Mālik', 'سعد بن أبي وقاص': 'Saʿd ibn Abī Waqqāṣ' }

const PERSONS = [
  ['ahmad-ibn-hanbal', 'text', [63], 'قال: أجمع تسعون رجلًا من التابعين وأئمة السلف على أن أول السنة الرضا بقضاء الله والتسليم لأمره.', 'Zei: negentig mannen uit de tābiʿūn en de imams van de salaf waren het erover eens dat de soenna begint met tevredenheid met Allahs beschikking en overgave aan Zijn bevel.'],
  ['ibn-hajar-al-asqalani', 'text', [66], 'قال: ظهور الحزن عند المصيبة لا يخرج صاحبه عن الصبر والرضا إذا كان قلبه مطمئنًا.', 'Zei: verdriet tonen bij een ramp maakt iemand niet ongeduldig of ontevreden, zolang zijn hart rustig is.'],
  ['al-qurtubi', 'text', [66], 'قال: يجوز الإخبار بما يجده الإنسان من الألم ما لم يصدر عن ضجر ولا سخط.', 'Zei: je mag vertellen welke pijn je voelt, zolang het niet uit ergernis of ontevredenheid komt.'],
  ['al-fudayl-ibn-iyad', 'text', [66], 'قال: أحق الناس بالرضا عن الله أهل المعرفة بالله.', 'Zei: wie Allah het best kennen, hebben het meeste recht om tevreden te zijn met Allah.'],
  ['al-junayd', 'text', [66], 'قال: الرضا على قدر قوة العلم والرسوخ في المعرفة.', 'Zei: tevredenheid is naar de mate van kennis en verankering in het kennen van Allah.'],
  ['zayd-ibn-thabit', 'text', [67], 'علّمه النبي ﷺ دعاء فيه «أسألك اللهم الرضا بعد القضاء».', 'De Profeet ﷺ leerde hem een smeekbede met "ik vraag U om tevredenheid na de beschikking".'],
  ['yahya-ibn-muadh', 'text', [67], 'قال: يبلغ العبد الرضا إذا قال: إن أعطيتني قبلت، وإن منعتني رضيت، وإن تركتني عبدت، وإن دعوتني أجبت.', 'Zei: de dienaar bereikt tevredenheid als hij zegt: geeft U mij, dan aanvaard ik; onthoudt U mij, dan ben ik tevreden; laat U mij, dan aanbid ik; roept U mij, dan antwoord ik.'],
  ['abdallah-ibn-awn', 'text', [67], 'قال: ارض بقضاء الله على ما كان من عسر ويسر، فإن ذلك أقل لهمك.', 'Zei: wees tevreden met Allahs beschikking, in moeite en gemak; dat vermindert je zorg.'],
  ['ar-ramahurmuzi', 'text', [68], 'قال: من أخذ بالقصد ورضي عاش عزيزًا، ومن أخذ كل ما يجد كان كالأنعام.', 'Zei: wie met mate neemt en tevreden is, leeft in eer; wie naar alles grijpt, is als het vee.'],
  ['abu-said-al-khudri', 'text', [68], 'روى «من رضي بالله ربا… وجبت له الجنة» واستعادها.', 'Overleverde "wie tevreden is met Allah als Heer … voor hem is het Paradijs verplicht" en vroeg het te herhalen.'],
  ['anas-ibn-malik', 'text', [68], 'روى «إن الله إذا أحب قومًا ابتلاهم».', 'Overleveraar van "als Allah een volk liefheeft, beproeft Hij hen".'],
  ['sad-ibn-abi-waqqas', 'text', [69], 'روى ذكر الرضا عند سماع المؤذن.', 'Overleverde de woorden van tevredenheid bij het horen van de oproeper.'],
  ['umar-ibn-al-khattab', 'text', [69], 'كتب إلى أبي موسى: إن الخير كله في الرضا، فإن استطعت أن ترضى وإلا فاصبر.', 'Schreef aan Abū Mūsā: al het goede ligt in tevredenheid; kun je tevreden zijn, wees het, en anders wees geduldig.'],
  ['abu-musa-al-ashari', 'text', [69], 'كتب إليه عمر في الرضا.', 'ʿUmar schreef hem over tevredenheid.'],
  ['ibn-al-qayyim', 'text', [69], 'قال: طريق الرضا والمحبة تسير العبد وهو مستلق على فراشه فيصبح أمام الركب بمراحل.', 'Zei: de weg van tevredenheid en liefde voert de dienaar voort terwijl hij op zijn bed ligt, en ’s ochtends is hij de karavaan ver vooruit.']
]

const ar = {
  scope: 'unit',
  unit: 9,
  title: 'الرضا',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف الرضا ودرجاته ووجوبه، والرضا بالله ربًّا وبالإسلام دينًا وبمحمد ﷺ نبيًّا، والرضا بالقضاء، وما لا ينافي الرضا، وطريق الوصول إليه، وثمراته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة التاسعة في خريطة واحدة',
    intro: 'الرضا: أنواعه وطريقه وثمراته.',
    root: { label: 'الرضا', sub: 'الوحدة التاسعة' },
    nodes: [
      { label: 'تعريفه ووجوبه', sub: 'الدرس ١٦', page: 63, children: ['عدم الجزع', 'أول السنة'] },
      { label: 'أنواعه', sub: 'الدرسان ١٦–١٧', page: 64, children: ['بالله ربًّا', 'بالإسلام دينًا', 'بمحمد ﷺ نبيًّا', 'بالقضاء'] },
      { label: 'طريقه', sub: 'الدرسان ١٧–١٨', page: 66, children: ['المعرفة بالله', 'الصبر', 'الدعاء'] },
      { label: 'ثمراته', sub: 'الدرس ١٨', page: 67, children: ['العبودية والشكر', 'غنى النفس', 'الجنة', 'المغفرة'] }
    ]
  },
  points: [
    { text: 'الرضا من أعلى أعمال القلوب، وقد يبلغ به العبد منزلة فوق من أتعب بدنه بلا رضا.', page: 63 },
    { text: 'الرضا لغة ضد السخط، واصطلاحًا عدم الجزع في أي حكم من الله تعالى.', page: 63 },
    { text: 'الرضا درجات بحسب قوة الإيمان، وأول السنة الرضا بقضاء الله والتسليم لأمره.', page: 63 },
    { text: 'الرضا بالله ربًّا يقتضي كراهية عبادة غيره، والحب فيه والبغض فيه.', page: 64 },
    { text: 'الرضا بالإسلام دينًا هو الرضا بشرع الله وأحكامه.', page: 64 },
    { text: 'الرضا بمحمد ﷺ نبيًّا: محبته فوق النفس والأهل، واتباعه، والرضا بحكمه، والوقوف عند سنته.', page: 65 },
    { text: 'لا ينافي الرضا الحزن والألم، ولا الإخبار بالمرض بلا سخط، ولا سؤال الله رفع البلاء.', page: 66 },
    { text: 'من ثمرات الرضا: العبودية والشكر، وغنى النفس، والبركة، والجنة، ورضا الله، والمغفرة.', page: 67 }
  ],
  terms: [
    { term: 'الرضا', translit: 'ar-riḍā', meaning: 'لغة: ضد السخط وسكون النفس؛ اصطلاحًا: عدم الجزع في أي حكم من الله تعالى.', explanation: '', notes: [], page: 63 },
    { term: 'الرضوان', translit: 'ar-riḍwān', meaning: 'الرضا الكثير.', explanation: '﴿يبشرهم ربهم برحمة منه ورضوان﴾ [التوبة: ٢١].', notes: [], page: 63 },
    { term: 'السخط', translit: 'as-sukhṭ', meaning: 'ضد الرضا: الكراهية وعدم القبول.', explanation: '', notes: [], page: 63 },
    { term: 'الرضا بالقضاء', translit: 'ar-riḍā bi-l-qaḍāʾ', meaning: 'تسليم القلب وسكونه وطمأنينته لقضاء الله، لأنه عدل كله وخير وحكمة.', explanation: '', notes: [], page: 65 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'أنواع الرضا',
      intro: 'كما في الدرسين السادس عشر والسابع عشر.',
      columns: ['النوع', 'من مقتضاه'],
      rows: [
        { label: 'بالله ربًّا', cells: ['التوحيد', 'كراهية عبادة غيره، والحب والبغض فيه'] },
        { label: 'بالإسلام دينًا', cells: ['الشرع', 'الرضا بأحكامه، والولاء للمسلمين'] },
        { label: 'بمحمد ﷺ نبيًّا', cells: ['الاتباع', 'محبته، والرضا بحكمه، والوقوف عند سنته'] },
        { label: 'بالقضاء', cells: ['التسليم', 'سكون القلب لحكم الله'] }
      ],
      page: 64
    }
  ],
  sections: [
    { title: 'وجوب الرضا', text: 'قال أحمد: أجمع تسعون رجلًا من التابعين وأئمة المسلمين وأئمة السلف وفقهاء الأمصار على أن السنة التي توفي عليها رسول الله ﷺ أولها الرضا بقضاء الله تعالى، والتسليم لأمره، والصبر تحت حكمه.', page: 63 },
    { title: 'الرضا بالإسلام دينًا', text: 'هو الرضا بشرع الله: ﴿أفغير الله أبتغي حكمًا﴾ [الأنعام: ١١٤]، ويكذب من يدعي الرضا بالإسلام ثم يتحاكم إلى غير شرع الله؛ ومن ذلك الولاء للمسلمين.', page: 64 },
    { title: 'الرضا بمحمد ﷺ نبيًّا', text: 'محبته فوق النفس والأهل والولد، ومعرفة سيرته، والتأسي به، والرضا بحكمه: ﴿فلا وربك لا يؤمنون حتى يحكموك فيما شجر بينهم﴾ [النساء: ٦٥]، والوقوف عند سنته دون إحداث في الدين.', page: 65 },
    { title: 'ما لا ينافي الرضا (للاطلاع فقط)', text: 'الحزن والألم كبكاء النبي ﷺ على ابنه إبراهيم، والإخبار بالمرض ما لم يكن عن سخط، وسؤال الله رفع البلاء كما دعا أيوب: ﴿أني مسني الضر وأنت أرحم الراحمين﴾ [الأنبياء: ٨٣].', more: FYI, page: 66 },
    { title: 'الخير كله في الرضا', text: 'كتب عمر إلى أبي موسى: أما بعد، فإن الخير كله في الرضا، فإن استطعت أن ترضى وإلا فاصبر.', page: 69 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الرضا', items: ['عدم الجزع في أي حكم من الله تعالى', 'ضد السخط'], page: 63, origin: 'boek' },
    { kind: 'opsomming', title: 'أمور لا تنافي الرضا', items: ['الحزن والألم', 'الإخبار بالمرض بلا سخط', 'سؤال الله رفع البلاء'], page: 66, origin: 'boek' },
    { kind: 'opsomming', title: 'طريق الوصول إلى الرضا', items: ['المعرفة بالله واليقين بحكمته', 'رياضة النفس على الصبر', 'الدعاء'], page: 66, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات الرضا', items: ['العبودية والشكر', 'عزة النفس وغناها', 'البركة وطيب العيش', 'الجنة', 'رضا الله والنجاة من سخطه', 'المغفرة', 'الخير كله'], page: 67, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الرضا عدم الجزع في أي حكم من الله.',
    'نرضى بالله ربًّا وبالإسلام دينًا وبمحمد ﷺ نبيًّا وبالقضاء.',
    'الحزن وسؤال رفع البلاء لا ينافيان الرضا.',
    'يوصل إلى الرضا المعرفة بالله والصبر والدعاء.',
    'الخير كله في الرضا، فإن لم تستطع فاصبر.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما تعريف الرضا اصطلاحًا في الكتاب؟', options: ['عدم الجزع في أي حكم من الله تعالى', 'ترك الدنيا', 'كثرة الذكر', 'الفرح بالمصيبة'], answer: 0, explain: 'كما في الدرس السادس عشر.', page: 63 },
    { type: 'tf', q: 'بكاء النبي ﷺ على ابنه إبراهيم ينافي الرضا.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الحزن لا ينافي الرضا.', page: 66 },
    { type: 'mc', q: 'ما الدعاء الذي علّمه النبي ﷺ زيد بن ثابت في الرضا؟', options: ['أسألك اللهم الرضا بعد القضاء', 'اللهم أعني على ذكرك', 'اللهم أجرني في مصيبتي', 'رب اغفر لي'], answer: 0, explain: 'رواه أحمد والحاكم.', page: 67 },
    { type: 'mc', q: 'من كتب: إن الخير كله في الرضا؟', options: ['عمر بن الخطاب', 'أبو بكر الصديق', 'علي بن أبي طالب', 'ابن مسعود'], answer: 0, explain: 'كتبه إلى أبي موسى الأشعري.', page: 69 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٦٩. الصفحة ٦٦ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 9,
  title: 'Tevredenheid (riḍā)',
  subtitle: 'Drie lessen samen op één pagina',
  summary: 'De betekenis van tevredenheid, de graden en de plicht ervan, tevreden zijn met Allah als Heer, de islam als godsdienst en Muḥammad ﷺ als profeet, tevredenheid met de beschikking, wat er niet mee strijdig is, de weg ernaartoe, en de vruchten.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 9 in één kaart',
    intro: 'Tevredenheid: soorten, weg en vruchten.',
    root: { label: 'Tevredenheid', sub: 'Eenheid 9' },
    nodes: [
      { label: 'Betekenis en plicht', sub: 'les 16', page: 63, children: ['niet wanhopen', 'begin van de soenna'] },
      { label: 'Soorten', sub: 'les 16–17', page: 64, children: ['Allah als Heer', 'de islam als godsdienst', 'Muḥammad ﷺ als profeet', 'de beschikking'] },
      { label: 'De weg', sub: 'les 17–18', page: 66, children: ['Allah kennen', 'geduld', 'smeekbede'] },
      { label: 'Vruchten', sub: 'les 18', page: 67, children: ['dienaarschap en dank', 'rijkdom van de ziel', 'het Paradijs', 'vergeving'] }
    ]
  },
  points: [
    { text: 'Tevredenheid is een van de hoogste daden van het hart; erdoor kan iemand hoger komen dan wie zijn lichaam uitput zonder tevredenheid.', page: 63 },
    { text: 'Riḍā is letterlijk het tegendeel van ergernis (sukhṭ); in de leer: niet wanhopen bij welk oordeel van Allah ook.', page: 63 },
    { text: 'Tevredenheid kent graden naar de kracht van het geloof; de soenna begint met tevredenheid met Allahs beschikking en overgave aan Zijn bevel.', page: 63 },
    { text: 'Tevreden zijn met Allah als Heer betekent afkeer van aanbidding van anderen, en liefhebben en haten om Allah.', page: 64 },
    { text: 'Tevreden zijn met de islam als godsdienst is tevreden zijn met Allahs wetgeving en oordelen.', page: 64 },
    { text: 'Tevreden zijn met Muḥammad ﷺ als profeet: hem meer liefhebben dan jezelf en je familie, hem volgen, tevreden zijn met zijn oordeel en stoppen bij zijn soenna.', page: 65 },
    { text: 'Niet strijdig met tevredenheid: verdriet en pijn, vertellen over ziekte zonder ergernis, en Allah vragen de beproeving op te heffen.', page: 66 },
    { text: 'Vruchten: dienaarschap en dank, rijkdom van de ziel, zegen, het Paradijs, Allahs welbehagen en vergeving.', page: 67 }
  ],
  terms: [
    { term: 'الرضا', translit: 'ar-riḍā', meaning: 'Letterlijk: het tegendeel van ergernis, rust van de ziel; in de leer: niet wanhopen bij welk oordeel van Allah ook.', explanation: '', notes: [], page: 63 },
    { term: 'الرضوان', translit: 'ar-riḍwān', meaning: 'Grote tevredenheid, welbehagen.', explanation: '"Hun Heer verkondigt hun barmhartigheid van Hem en welbehagen" (at-Tawba 9:21).', notes: [], page: 63 },
    { term: 'السخط', translit: 'as-sukhṭ', meaning: 'Het tegendeel van tevredenheid: ergernis en niet aanvaarden.', explanation: '', notes: [], page: 63 },
    { term: 'الرضا بالقضاء', translit: 'ar-riḍā bi-l-qaḍāʾ', meaning: 'Overgave, rust en kalmte van het hart bij Allahs beschikking, omdat die geheel rechtvaardig, goed en wijs is.', explanation: '', notes: [], page: 65 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Soorten tevredenheid',
      intro: 'Zoals in les 16 en 17.',
      columns: ['Soort', 'Wat het vraagt'],
      rows: [
        { label: 'met Allah als Heer', cells: ['tawḥīd', 'afkeer van aanbidding van anderen; liefhebben en haten om Allah'] },
        { label: 'met de islam als godsdienst', cells: ['de sharia', 'tevreden met de oordelen; verbondenheid met moslims'] },
        { label: 'met Muḥammad ﷺ als profeet', cells: ['navolging', 'liefde, tevreden met zijn oordeel, stoppen bij zijn soenna'] },
        { label: 'met de beschikking', cells: ['overgave', 'rust van het hart bij Allahs oordeel'] }
      ],
      page: 64
    }
  ],
  sections: [
    { title: 'Tevredenheid is verplicht', text: 'Aḥmad zei: negentig mannen uit de tābiʿūn, de imams van de moslims en van de salaf en de fiqh-geleerden van de steden waren het erover eens dat de soenna waarop de Boodschapper ﷺ stierf begint met tevredenheid met Allahs beschikking, overgave aan Zijn bevel en geduld onder Zijn oordeel.', page: 63 },
    { title: 'Tevreden met de islam als godsdienst', text: 'Dat is tevreden zijn met Allahs wetgeving: "Zou ik een andere rechter zoeken dan Allah?" (al-Anʿām 6:114). Het boek noemt het onwaar als iemand zegt tevreden te zijn met de islam en dan een andere wetgeving volgt; hierbij hoort ook verbondenheid met de moslims.', page: 64 },
    { title: 'Tevreden met Muḥammad ﷺ als profeet', text: 'Hem meer liefhebben dan jezelf, je familie en kinderen, zijn levensloop kennen, hem navolgen en tevreden zijn met zijn oordeel: "Nee, bij je Heer, zij geloven niet tot zij jou laten oordelen over wat tussen hen omstreden is" (an-Nisāʾ 4:65); en stoppen bij zijn soenna zonder nieuwigheden in de godsdienst.', page: 65 },
    { title: 'Wat niet strijdig is met tevredenheid (alleen ter kennisname)', text: 'Verdriet en pijn, zoals de Profeet ﷺ huilde om zijn zoon Ibrāhīm; vertellen over ziekte zolang het niet uit ergernis komt; en Allah vragen de beproeving op te heffen, zoals Ayyūb bad: "Mij heeft onheil getroffen, en U bent de Barmhartigste der barmhartigen" (al-Anbiyāʾ 21:83).', more: FYI_NL, page: 66 },
    { title: 'Al het goede ligt in tevredenheid', text: 'ʿUmar schreef aan Abū Mūsā: al het goede ligt in tevredenheid; kun je tevreden zijn, wees het, en anders wees geduldig.', page: 69 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Tevredenheid', items: ['niet wanhopen bij welk oordeel van Allah ook', 'het tegendeel van ergernis'], page: 63, origin: 'boek' },
    { kind: 'opsomming', title: 'Niet strijdig met tevredenheid', items: ['verdriet en pijn', 'vertellen over ziekte zonder ergernis', 'Allah vragen de beproeving op te heffen'], page: 66, origin: 'boek' },
    { kind: 'opsomming', title: 'De weg naar tevredenheid', items: ['Allah kennen en zeker zijn van Zijn wijsheid', 'jezelf trainen in geduld', 'smeekbede'], page: 66, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van tevredenheid', items: ['dienaarschap en dank', 'eer en rijkdom van de ziel', 'zegen en een goed leven', 'het Paradijs', 'Allahs welbehagen en redding van Zijn toorn', 'vergeving', 'al het goede'], page: 67, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Tevredenheid is niet wanhopen bij welk oordeel van Allah ook.',
    'Wij zijn tevreden met Allah als Heer, de islam als godsdienst, Muḥammad ﷺ als profeet en met de beschikking.',
    'Verdriet en vragen om opheffing van beproeving zijn niet strijdig met tevredenheid.',
    'De weg ernaartoe: Allah kennen, geduld en smeekbede.',
    'Al het goede ligt in tevredenheid; lukt dat niet, wees dan geduldig.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe omschrijft het boek tevredenheid?', options: ['niet wanhopen bij welk oordeel van Allah ook', 'de wereld laten', 'veel gedenken', 'blij zijn met een ramp'], answer: 0, explain: 'Zoals in les 16.', page: 63 },
    { type: 'tf', q: 'Dat de Profeet ﷺ huilde om zijn zoon Ibrāhīm, is strijdig met tevredenheid.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Verdriet is niet strijdig met tevredenheid.', page: 66 },
    { type: 'mc', q: 'Welke smeekbede over tevredenheid leerde de Profeet ﷺ aan Zayd ibn Thābit?', options: ['ik vraag U om tevredenheid na de beschikking', 'help mij U te gedenken', 'beloon mij in mijn ramp', 'Heer, vergeef mij'], answer: 0, explain: 'Overgeleverd door Aḥmad en al-Ḥākim.', page: 67 },
    { type: 'mc', q: 'Wie schreef: al het goede ligt in tevredenheid?', options: ['ʿUmar ibn al-Khaṭṭāb', 'Abū Bakr aṣ-Ṣiddīq', 'ʿAlī ibn Abī Ṭālib', 'Ibn Masʿūd'], answer: 0, explain: 'Hij schreef het aan Abū Mūsā al-Ashʿarī.', page: 69 }
  ]),
  note: 'Oefening van het boek op p. 69. Pagina 66 staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '16', unit: 9, ar, nl }
