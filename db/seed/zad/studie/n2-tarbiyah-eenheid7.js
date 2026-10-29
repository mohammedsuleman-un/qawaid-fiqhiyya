// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 7: الشكر (lessen 12–13, boek p. 49–55).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 51–52 zijn in het boek "alleen ter kennisname".
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '49–55',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'قد أفلح من أسلم، ورزق كفافا، وقنعه الله بما آتاه', takhrij: 'رواه مسلم', note: 'القناعة مما يتضمنه الشكر.', pages: [50], nl: 'Wie moslim werd, voorzien werd van wat genoeg is, en door Allah tevreden werd gemaakt met wat Hij hem gaf, heeft succes', nlNote: 'Tevredenheid hoort bij dankbaarheid.' },
  { narrator: '', text: 'إذا آتاك الله مالا فلير عليك', takhrij: 'أحمد والنسائي والترمذي وصححه الألباني', note: 'قاله لأبي الأحوص عن أبيه، وقد جاء في ثياب رثة وله من كل المال.', pages: [50], nl: 'Als Allah je bezit heeft gegeven, laat het dan aan je te zien zijn', nlNote: 'Gezegd tegen de vader van Abū al-Aḥwaṣ, die in armoedige kleding kwam terwijl hij allerlei bezit had.' },
  { narrator: '', text: 'أريت النار فإذا أكثر أهلها النساء، يكفرن. قيل: أيكفرن بالله؟ قال: يكفرن العشير، ويكفرن الإحسان، لو أحسنت إلى إحداهن الدهر ثم رأت منك شيئا قالت: ما رأيت منك خيرا قط', takhrij: 'البخاري ومسلم', note: 'كفران النعمة. ' + FYI_NOTE, pages: [51], nl: 'Mij werd het Vuur getoond, en de meeste bewoners waren vrouwen, omdat zij ondankbaar zijn. Gevraagd werd: zijn zij Allah ondankbaar? Hij zei: zij zijn de echtgenoot ondankbaar en de weldaad ondankbaar; als je een van hen een leven lang goed behandelt en zij ziet dan iets van je, zegt ze: ik heb nooit iets goeds van je gezien', nlNote: 'Ondankbaarheid voor gunsten. ' + FYI_NOTE_NL },
  { narrator: 'جابر بن عبد الله', text: 'من أعطي عطاء فوجد فليجز به، فإن لم يجد فليثن به، فمن أثنى به فقد شكره، ومن كتمه فقد كفره', takhrij: 'أبو داود وحسنه الألباني', note: 'شكر الناس. ' + FYI_NOTE, pages: [52], nl: 'Wie iets krijgt en de middelen heeft, laat hij het vergelden; heeft hij die niet, laat hij er lof over uitspreken; wie lof uitspreekt, heeft gedankt, en wie het verzwijgt, is ondankbaar geweest', nlNote: 'Mensen danken. ' + FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'لا يشكر الله من لا يشكر الناس', takhrij: 'أبو داود وصححه الألباني', note: 'من كان من عادته كفران نعم الناس كان من عادته كفران نعمة الخالق. ' + FYI_NOTE, pages: [52], nl: 'Wie de mensen niet dankt, dankt Allah niet', nlNote: 'Wie gewoonlijk ondankbaar is tegenover mensen, is dat ook tegenover de Schepper. ' + FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'انظروا إلى من هو أسفل منكم، ولا تنظروا إلى من هو فوقكم، فإنه أجدر أن لا تزدروا نعمة الله عليكم', takhrij: 'رواه مسلم', note: '', pages: [53], nl: 'Kijk naar wie onder jullie staat en niet naar wie boven jullie staat; dat is beter om Allahs gunst aan jullie niet te kleineren', nlNote: '' },
  { narrator: 'معاذ بن جبل', text: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك', takhrij: 'أبو داود وصححه الألباني', note: 'دبر كل صلاة.', pages: [53], nl: 'O Allah, help mij U te gedenken, U te danken en U goed te aanbidden', nlNote: 'Na elk gebed.' },
  { narrator: 'أنس بن مالك', text: 'إن الله ليرضى عن العبد أن يأكل الأكلة فيحمده عليها، أو يشرب الشربة فيحمده عليها', takhrij: 'رواه مسلم', note: 'رضا الله.', pages: [54], nl: 'Allah is tevreden met de dienaar die een maaltijd eet en Hem ervoor prijst, of een slok drinkt en Hem ervoor prijst', nlNote: 'Allahs welbehagen.' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim',
  'أحمد والنسائي والترمذي وصححه الألباني': 'Aḥmad, an-Nasāʾī en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'أبو هريرة': 'Abū Hurayra', 'معاذ بن جبل': 'Muʿādh ibn Jabal', 'أنس بن مالك': 'Anas ibn Mālik' }

const PERSONS = [
  ['ibn-al-qayyim', 'text', [49, 50, 55], 'وصف الشاكر، وقال: يجب أن يشكر سبحانه عقلًا وشرعًا وفطرة، والإيمان نصفان: شكر وصبر.', 'Beschreef wie dankbaar is, en zei: Allah moet gedankt worden volgens verstand, sharia en natuurlijke aanleg; het geloof bestaat uit twee helften, dank en geduld.'],
  ['jabir-ibn-abdallah', 'text', [52], 'روى «من أعطي عطاء فوجد فليجز به».', 'Overleveraar van "wie iets krijgt en de middelen heeft, laat hij het vergelden".'],
  ['abu-hurayra', 'text', [52, 53], 'روى «لا يشكر الله من لا يشكر الناس» و«انظروا إلى من هو أسفل منكم».', 'Overleverde "wie de mensen niet dankt, dankt Allah niet" en "kijk naar wie onder jullie staat".'],
  ['ash-shawkani', 'text', [52], 'قال: ذكر النعمة سبب باعث على شكرها.', 'Zei: een gunst gedenken spoort aan om ervoor te danken.'],
  ['al-ghazali', 'text', [52], 'قال: من لا يؤمن بأن ثواب المصيبة أكبر من المصيبة لم يتصور منه الشكر عليها.', 'Zei: wie niet gelooft dat de beloning voor een ramp groter is dan de ramp, van hem is dank ervoor ondenkbaar.'],
  ['qatada-ibn-diama', 'text', [53], 'قال: إن ربكم منعم يحب الشكر.', 'Zei: jullie Heer is een Weldoener die dank liefheeft.'],
  ['muadh-ibn-jabal', 'text', [53], 'أوصاه النبي ﷺ أن يقول دبر كل صلاة: «اللهم أعني على ذكرك وشكرك».', 'De Profeet ﷺ raadde hem aan na elk gebed te zeggen: "O Allah, help mij U te gedenken en te danken."'],
  ['anas-ibn-malik', 'text', [54], 'روى «إن الله ليرضى عن العبد أن يأكل الأكلة فيحمده عليها».', 'Overleveraar van "Allah is tevreden met de dienaar die eet en Hem ervoor prijst".'],
  ['umar-ibn-abd-al-aziz', 'text', [54], 'قال: قيدوا نعم الله بشكر الله.', 'Zei: bind Allahs gunsten vast door Allah te danken.'],
  ['al-hasan-al-basri', 'text', [54], 'قال: يكابد الشكر على السراء، ويكابد الصبر على الضراء.', 'Zei: hij worstelt met dank in voorspoed en met geduld in tegenspoed.'],
  ['mutarrif-ibn-abdallah', 'text', [55], 'قال: لأن أعافى فأشكر أحب إلي من أن أبتلى فأصبر.', 'Zei: dat ik gezond blijf en dank, is mij liever dan dat ik beproefd word en geduldig ben.']
]

const ar = {
  scope: 'unit',
  unit: 7,
  title: 'الشكر',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'تعريف الشكر وأركانه والفرق بينه وبين الحمد، وما يتضمنه، وحكمه، وكفران النعمة، وشكر الناس، والأسباب المعينة على الشكر، وثمراته، والصبر والشكر.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السابعة في خريطة واحدة',
    intro: 'الشكر وأسبابه وثمراته.',
    root: { label: 'الشكر', sub: 'الوحدة السابعة' },
    nodes: [
      { label: 'تعريفه', sub: 'الدرس ١٢', page: 49, children: ['القلب واللسان والجوارح', 'الحمد والشكر'] },
      { label: 'حكمه وضده', sub: 'الدرس ١٢', page: 50, children: ['واجب', 'كفران النعمة'] },
      { label: 'الأسباب المعينة', sub: 'الدرس ١٣', page: 52, children: ['ذكر النعم', 'النظر إلى من دونك', 'الدعاء'] },
      { label: 'ثمراته', sub: 'الدرس ١٣', page: 54, children: ['رضا الله', 'النجاة من العذاب', 'الزيادة'] }
    ]
  },
  points: [
    { text: 'الإيمان نصفان: شكر وصبر.', page: 49 },
    { text: 'الشكر لغة ضد الكفران، واصطلاحًا معرفة الإحسان والتحدث به.', page: 49 },
    { text: 'الشكر يكون بالقلب محبة للمنعم، وبالجوارح طاعة، وباللسان ذكرًا وثناء، والصلاة تجمع ذلك كله.', page: 49 },
    { text: 'الحمد باللسان ويكون مع النعمة وبدونها، والشكر بالقلب واللسان والجوارح ولا يكون إلا على نعمة.', page: 49 },
    { text: 'الشكر واجب عقلًا وشرعًا وفطرة، وكفران النعمة مذموم وسبب للعقوبة.', page: 50 },
    { text: 'لا يشكر الله من لا يشكر الناس.', page: 52 },
    { text: 'من الأسباب المعينة على الشكر ذكر النعم، والنظر إلى من هو أسفل، والعلم بالسؤال عن النعيم، والدعاء.', page: 52 },
    { text: 'الشكر قيد النعم، وبه تحفظ وتزيد.', page: 54 }
  ],
  terms: [
    { term: 'الشكر', translit: 'ash-shukr', meaning: 'لغة: ضد الكفران، وهو الاعتراف بالإحسان ونشره؛ اصطلاحًا: معرفة الإحسان والتحدث به.', explanation: '', notes: [], page: 49 },
    { term: 'الكفاف', translit: 'al-kafāf', meaning: 'ما يكفي من الرزق.', explanation: '', notes: [], page: 50 },
    { term: 'الكنود', translit: 'al-kanūd', meaning: 'الذي يعد المصائب وينسى النعم.', explanation: '﴿إن الإنسان لربه لكنود﴾ [العاديات: ٦].', notes: [], page: 51 },
    { term: 'العشير', translit: 'al-ʿashīr', meaning: 'الزوج.', explanation: '', notes: [], page: 51 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الحمد والشكر',
      intro: 'كما في الدرس الثاني عشر.',
      columns: ['الحمد', 'الشكر'],
      rows: [
        { label: 'بماذا', cells: ['باللسان', 'بالقلب واللسان والجوارح'] },
        { label: 'على ماذا', cells: ['على النعمة وغيرها', 'على النعمة فقط'] }
      ],
      page: 49
    }
  ],
  sections: [
    { title: 'من هو الشاكر', text: 'قال ابن القيم: من عرف النعمة، وعرف المنعم بها، وأقر بها، وخضع للمنعم بها، وأحبه، ورضي به وعنه، واستعملها في محابه وطاعته، فهذا هو الشاكر لها.', page: 49 },
    { title: 'ما يتضمنه الشكر', text: 'العلم بأن النعمة من الله، والقناعة، والثناء على الله بها، كما في قوله تعالى: ﴿وأما بنعمة ربك فحدث﴾ [الضحى: ١١].', page: 50 },
    { title: 'كفران النعمة (للاطلاع فقط)', text: 'ذم الله كفران النعمة وجعله سببًا للعقوبة، كما في قوله: ﴿إنه ليؤوس كفور﴾ [هود: ٩]، وقوله: ﴿إن الإنسان لربه لكنود﴾ [العاديات: ٦].', more: FYI, page: 51 },
    { title: 'سؤال النعيم', text: 'من الخطأ أن يحرم المرء نفسه النعم خشية السؤال عنها، فالله يريد أن نتمتع ونشكر: ﴿كلوا من طيبات ما رزقناكم واشكروا لله﴾ [البقرة: ١٧٢].', page: 53 },
    { title: 'الصبر والشكر', text: 'قال مطرف: لأن أعافى فأشكر أحب إلي من أن أبتلى فأصبر؛ وكان النبي ﷺ يرشد إلى سؤال العفو والعافية لا البلاء، فإن جاء البلاء فقد يكون أجر الصابر أعظم.', page: 55 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الشكر', items: ['معرفة الإحسان والتحدث به', 'بالقلب محبة، وباللسان ثناء، وبالجوارح طاعة'], page: 49, origin: 'boek' },
    { kind: 'opsomming', title: 'الأسباب المعينة على الشكر', items: ['ذكر النعم', 'النظر إلى من هو أسفل منك', 'العلم بالسؤال عن النعيم', 'العلم بأن الله يحب الشاكرين', 'الدعاء'], page: 52, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات الشكر', items: ['رضا الله', 'النجاة من العذاب', 'حفظ النعم وزيادتها'], page: 54, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الشكر بالقلب واللسان والجوارح، ولا يكون إلا على نعمة.',
    'الشكر واجب، وكفران النعمة سبب للعقوبة.',
    'لا يشكر الله من لا يشكر الناس.',
    'انظر إلى من هو أسفل منك لئلا تزدري نعمة الله.',
    'بالشكر تقيد النعم وتزيد.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الفرق بين الحمد والشكر في الآلة؟', options: ['الحمد باللسان، والشكر بالقلب واللسان والجوارح', 'لا فرق', 'الشكر باللسان فقط', 'الحمد بالجوارح فقط'], answer: 0, explain: 'كما في الدرس الثاني عشر.', page: 49 },
    { type: 'tf', q: 'الحمد لا يكون إلا على نعمة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الحمد على النعمة وغيرها، والشكر على النعمة.', page: 49 },
    { type: 'mc', q: 'إلى من ينظر المرء ليشكر نعمة الله؟', options: ['إلى من هو أسفل منه', 'إلى من هو فوقه', 'إلى الأغنياء', 'لا ينظر إلى أحد'], answer: 0, explain: 'حديث أبي هريرة.', page: 53 },
    { type: 'mc', q: 'من قال: قيدوا نعم الله بشكر الله؟', options: ['عمر بن عبد العزيز', 'أبو هريرة', 'ابن تيمية', 'الغزالي'], answer: 0, explain: 'كما في ثمرات الشكر.', page: 54 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٥٥. الصفحتان ٥١ و٥٢ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 7,
  title: 'Dankbaarheid',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'De betekenis en de onderdelen van dankbaarheid, het verschil met lof, wat dankbaarheid inhoudt, het oordeel, ondankbaarheid, mensen danken, wat helpt om dankbaar te zijn, de vruchten, en geduld en dank.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 7 in één kaart',
    intro: 'Dankbaarheid, wat helpt, en de vruchten.',
    root: { label: 'Dankbaarheid', sub: 'Eenheid 7' },
    nodes: [
      { label: 'Betekenis', sub: 'les 12', page: 49, children: ['hart, tong en ledematen', 'lof en dank'] },
      { label: 'Oordeel en tegendeel', sub: 'les 12', page: 50, children: ['verplicht', 'ondankbaarheid'] },
      { label: 'Wat helpt', sub: 'les 13', page: 52, children: ['gunsten gedenken', 'kijken naar wie minder heeft', 'smeekbede'] },
      { label: 'Vruchten', sub: 'les 13', page: 54, children: ['Allahs welbehagen', 'redding van straf', 'toename'] }
    ]
  },
  points: [
    { text: 'Het geloof bestaat uit twee helften: dank en geduld.', page: 49 },
    { text: 'Shukr is letterlijk het tegendeel van ondankbaarheid; in de leer: de weldaad erkennen en erover spreken.', page: 49 },
    { text: 'Dank is met het hart liefde voor de Gever, met de ledematen gehoorzaamheid en met de tong gedenken en lof; het gebed verenigt dat allemaal.', page: 49 },
    { text: 'Lof (ḥamd) is met de tong en kan ook zonder gunst; dank (shukr) is met hart, tong en ledematen en alleen voor een gunst.', page: 49 },
    { text: 'Dank is verplicht volgens verstand, sharia en natuurlijke aanleg; ondankbaarheid voor gunsten wordt gelaakt en brengt straf.', page: 50 },
    { text: 'Wie de mensen niet dankt, dankt Allah niet.', page: 52 },
    { text: 'Wat helpt om dankbaar te zijn: gunsten gedenken, kijken naar wie minder heeft, weten dat je ondervraagd wordt over de gunsten, en smeekbede.', page: 52 },
    { text: 'Dank houdt gunsten vast; erdoor blijven ze bewaard en nemen ze toe.', page: 54 }
  ],
  terms: [
    { term: 'الشكر', translit: 'ash-shukr', meaning: 'Letterlijk: het tegendeel van ondankbaarheid, de weldaad erkennen en bekendmaken; in de leer: de weldaad kennen en erover spreken.', explanation: '', notes: [], page: 49 },
    { term: 'الكفاف', translit: 'al-kafāf', meaning: 'Voorziening die genoeg is.', explanation: '', notes: [], page: 50 },
    { term: 'الكنود', translit: 'al-kanūd', meaning: 'Wie de rampen telt en de gunsten vergeet.', explanation: '"De mens is zijn Heer zeker ondankbaar" (al-ʿĀdiyāt 100:6).', notes: [], page: 51 },
    { term: 'العشير', translit: 'al-ʿashīr', meaning: 'De echtgenoot.', explanation: '', notes: [], page: 51 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Lof en dank',
      intro: 'Zoals in les 12.',
      columns: ['Lof (ḥamd)', 'Dank (shukr)'],
      rows: [
        { label: 'Waarmee', cells: ['met de tong', 'met hart, tong en ledematen'] },
        { label: 'Waarvoor', cells: ['voor een gunst en ook zonder', 'alleen voor een gunst'] }
      ],
      page: 49
    }
  ],
  sections: [
    { title: 'Wie dankbaar is', text: 'Ibn al-Qayyim zei: wie de gunst kent, de Gever ervan kent, haar erkent, zich aan de Gever onderwerpt, Hem liefheeft, tevreden is met Hem en over Hem, en de gunst gebruikt voor wat Hij liefheeft en voor gehoorzaamheid aan Hem, die is ervoor dankbaar.', page: 49 },
    { title: 'Wat dankbaarheid inhoudt', text: 'Weten dat de gunst van Allah komt, tevredenheid, en Allah ervoor loven, zoals Hij zegt: "En vertel over de gunst van je Heer" (aḍ-Ḍuḥā 93:11).', page: 50 },
    { title: 'Ondankbaarheid (alleen ter kennisname)', text: 'Allah laakt ondankbaarheid voor gunsten en maakt haar een oorzaak van straf, zoals in "hij is wanhopig en ondankbaar" (Hūd 11:9) en "de mens is zijn Heer zeker ondankbaar" (al-ʿĀdiyāt 100:6).', more: FYI_NL, page: 51 },
    { title: 'Ondervraagd over de gunsten', text: 'Het is een vergissing jezelf gunsten te ontzeggen om er niet over ondervraagd te worden; Allah wil dat we genieten en danken: "Eet van de goede dingen waarmee Wij jullie voorzien, en dank Allah" (al-Baqara 2:172).', page: 53 },
    { title: 'Geduld en dank', text: 'Muṭarrif zei: dat ik gezond blijf en dank, is mij liever dan dat ik beproefd word en geduldig ben. De Profeet ﷺ leerde om vergeving en welzijn te vragen, niet om beproeving; komt de beproeving toch, dan kan de beloning van de geduldige groter zijn.', page: 55 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Dankbaarheid', items: ['de weldaad kennen en erover spreken', 'met het hart liefde, met de tong lof, met de ledematen gehoorzaamheid'], page: 49, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat helpt om dankbaar te zijn', items: ['gunsten gedenken', 'kijken naar wie minder heeft', 'weten dat je over de gunsten ondervraagd wordt', 'weten dat Allah de dankbaren liefheeft', 'smeekbede'], page: 52, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van dankbaarheid', items: ['Allahs welbehagen', 'redding van straf', 'gunsten bewaard en vermeerderd'], page: 54, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Dank is met hart, tong en ledematen, en alleen voor een gunst.',
    'Dank is verplicht; ondankbaarheid voor gunsten brengt straf.',
    'Wie de mensen niet dankt, dankt Allah niet.',
    'Kijk naar wie minder heeft, zodat je Allahs gunst niet kleineert.',
    'Dank houdt gunsten vast en laat ze toenemen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het verschil tussen lof en dank in de manier waarop?', options: ['lof met de tong; dank met hart, tong en ledematen', 'geen verschil', 'dank alleen met de tong', 'lof alleen met de ledematen'], answer: 0, explain: 'Zoals in les 12.', page: 49 },
    { type: 'tf', q: 'Lof is alleen voor een gunst.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Lof kan voor een gunst en ook zonder; dank alleen voor een gunst.', page: 49 },
    { type: 'mc', q: 'Naar wie kijk je om Allahs gunst te waarderen?', options: ['naar wie minder heeft', 'naar wie meer heeft', 'naar de rijken', 'naar niemand'], answer: 0, explain: 'De hadith van Abū Hurayra.', page: 53 },
    { type: 'mc', q: 'Wie zei: bind Allahs gunsten vast door Allah te danken?', options: ['ʿUmar ibn ʿAbd al-ʿAzīz', 'Abū Hurayra', 'Ibn Taymiyya', 'al-Ghazālī'], answer: 0, explain: 'Zoals bij de vruchten van dankbaarheid.', page: 54 }
  ]),
  note: 'Oefening van het boek op p. 55. Pagina 51 en 52 staan in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '12', unit: 7, ar, nl }
