// Hoofdstukkaart bij العقيدة (٢), eenheid 1: توحيد الألوهية (lessen 1–4, boek p. 9–25).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٢)، سلسلة زاد العلمية',
  pages: '9–25',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'أمرت أن أقاتل الناس حتى يقولوا لا إله إلا الله، فمن قال لا إله إلا الله فقد عصم مني نفسه وماله إلا بحقه، وحسابه على الله', takhrij: 'أخرجه البخاري ومسلم', note: 'دليل أنه لا دخول في الإسلام إلا بتوحيد الألوهية، وأن القتال كان فيه لا في الربوبية.', pages: [15, 24], nl: 'mij is bevolen de mensen te bestrijden totdat zij zeggen: er is geen god dan Allah; wie dat zegt, heeft zijn leven en bezit voor mij beschermd, behalve wat het recht ervan vraagt, en zijn afrekening is bij Allah', nlNote: 'Bewijs dat men de islam alleen via tawḥīd al-ulūhiyya binnengaat, en dat de strijd daarover ging en niet over rubūbiyya.' },
  { narrator: 'أنس بن مالك', text: 'من شهد أن لا إله إلا الله، واستقبل قبلتنا، وصلى صلاتنا، وأكل ذبيحتنا، فهو المسلم، له ما للمسلم، وعليه ما على المسلم', takhrij: 'أخرجه البخاري', note: 'جواب أنس لميمون بن سياه لما سأله: ما يحرم دم العبد وماله؟', pages: [15], nl: 'wie getuigt dat er geen god is dan Allah, zich naar onze qibla richt, ons gebed bidt en ons geslachte eet, is de moslim: hij heeft de rechten en de plichten van een moslim', nlNote: 'Het antwoord van Anas aan Maymūn ibn Siyāh, die vroeg wat het bloed en bezit van een dienaar onschendbaar maakt.' },
  { narrator: 'معاذ بن جبل', text: 'إنك تقدم على قوم من أهل الكتاب، فليكن أول ما تدعوهم إلى أن يوحدوا الله تعالى', takhrij: 'متفق عليه', note: 'دليل أن التوحيد هو المقدم في الدعوة.', pages: [15], nl: 'je gaat naar mensen van het Boek; laat het eerste waartoe je hen oproept zijn dat zij Allah als Enige aanbidden', nlNote: 'Bewijs dat tawḥīd eerst komt in de daʿwa.' },
  { narrator: '', text: 'من شهد أن لا إله إلا الله وحده لا شريك له، وأن محمدا عبده ورسوله، وأن عيسى عبد الله ورسوله، وكلمته ألقاها إلى مريم وروح منه، والجنة حق، والنار حق، أدخله الله الجنة على ما كان من العمل', takhrij: 'أخرجه البخاري ومسلم', note: 'دليل أن نجاة العبد في الآخرة لا تكون إلا بالتوحيد.', pages: [16], nl: 'wie getuigt dat er geen god is dan Allah alleen, zonder deelgenoot, dat Muḥammad Zijn dienaar en boodschapper is, dat ʿĪsā Allahs dienaar en boodschapper is, Zijn woord dat Hij aan Maryam gaf en een geest van Hem, en dat het Paradijs en het Vuur waar zijn, die laat Allah het Paradijs binnengaan, wat zijn daden ook waren', nlNote: 'Bewijs dat redding in het Hiernamaals alleen via tawḥīd komt.' },
  { narrator: '', text: 'فإن الله قد حرم على النار من قال: لا إله إلا الله يبتغي بذلك وجه الله', takhrij: 'أخرجه البخاري ومسلم', pages: [16], nl: 'Allah heeft het Vuur verboden voor wie zegt "er is geen god dan Allah" en daarmee Allahs aangezicht zoekt', nlNote: '' },
  { narrator: '', text: 'أسعد الناس بشفاعتي يوم القيامة من قال: لا إله إلا الله خالصا من قلبه أو نفسه', takhrij: 'أخرجه البخاري', note: 'دليل أن شفاعة النبي ﷺ لا تحصل إلا بالتوحيد.', pages: [16], nl: 'de gelukkigste mensen met mijn voorspraak op de Dag der Opstanding zijn wie oprecht vanuit het hart zei: er is geen god dan Allah', nlNote: 'Bewijs dat de voorspraak van de Profeet ﷺ alleen via tawḥīd komt.' },
  { narrator: 'عبد الله بن عمر', text: 'بني الإسلام على خمس: شهادة أن لا إله إلا الله، وأن محمدا رسول الله، وإقام الصلاة، وإيتاء الزكاة، والحج، وصوم رمضان', takhrij: 'رواه البخاري ومسلم', pages: [18], nl: 'de islam is gebouwd op vijf: de getuigenis dat er geen god is dan Allah en dat Muḥammad de Boodschapper van Allah is, het gebed verrichten, de zakāt geven, de ḥajj en het vasten van Ramadan', nlNote: 'Over de verdienste van "lā ilāha illā llāh".' },
  { narrator: '', text: 'خير ما قلت أنا والنبيون من قبلي: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير', takhrij: 'رواه الترمذي، وحسنه الألباني', pages: [18], nl: 'het beste wat ik en de profeten vóór mij zeiden is: er is geen god dan Allah alleen, zonder deelgenoot; aan Hem behoort de heerschappij en de lof, en Hij is tot alles in staat', nlNote: '' },
  { narrator: '', text: 'أشهد أن لا إله إلا الله وأني رسول الله، لا يلقى الله بهما عبد غير شاك فيهما إلا دخل الجنة', takhrij: 'رواه مسلم', note: 'دليل شرط اليقين.', pages: [20], nl: 'ik getuig dat er geen god is dan Allah en dat ik de boodschapper van Allah ben; geen dienaar ontmoet Allah hiermee zonder eraan te twijfelen, of hij gaat het Paradijs binnen', nlNote: 'Bewijs voor de voorwaarde zekerheid (yaqīn).' }
]

const TAKHRIJ_NL = {
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه البخاري': 'al-Bukhārī',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه الترمذي، وحسنه الألباني': 'at-Tirmidhī; ḥasan volgens al-Albānī',
  'رواه مسلم': 'Muslim'
}
const NARRATOR_NL = { 'أنس بن مالك': 'Anas ibn Mālik', 'معاذ بن جبل': 'Muʿādh ibn Jabal', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar' }

const PERSONS = [
  ['ibn-abbas', 'text', [11], 'ذكر الكتاب قراءته ﴿ويذرك وإلاهتك﴾ أي: وعبادتك.', 'Het boek noemt zijn lezing "wa-ilāhataka" (al-Aʿrāf 7:127): "en jouw aanbidding".'],
  ['maymun-ibn-siyah', 'text', [15], 'سأل أنس بن مالك: ما يحرم دم العبد وماله؟', 'Vroeg Anas ibn Mālik wat het bloed en bezit van een dienaar onschendbaar maakt.'],
  ['anas-ibn-malik', 'text', [15], 'أجاب ميمون بن سياه: «من شهد أن لا إله إلا الله...».', 'Antwoordde Maymūn ibn Siyāh: "wie getuigt dat er geen god is dan Allah ...".'],
  ['muadh-ibn-jabal', 'text', [15], 'أرسله النبي ﷺ إلى أهل الكتاب وأمره أن يبدأ بالتوحيد.', 'De Profeet ﷺ stuurde hem naar mensen van het Boek en droeg hem op met tawḥīd te beginnen.'],
  ['ibn-umar', 'text', [18], 'روى حديث «بني الإسلام على خمس».', 'Overleverde "de islam is gebouwd op vijf".'],
  ['al-hasan-al-basri', 'text', [21], 'قال: من قال لا إله إلا الله فأدى حقها وفرضها دخل الجنة.', 'Zei: wie "lā ilāha illā llāh" zegt en het recht en de plicht ervan vervult, gaat het Paradijs binnen.'],
  ['ibn-al-qayyim', 'text', [23, 24], 'نقل الكتاب قوله: توحيد الربوبية وحده لا يكفي، والغاية الفناء في توحيد الإلهية.', 'Het boek citeert hem: rubūbiyya alleen is niet genoeg; het hoogste doel is opgaan in tawḥīd al-ulūhiyya.'],
  ['al-bukhari', 'takhrij', [15, 16, 18, 24], 'أخرج أكثر أحاديث هذه الوحدة.', 'Nam de meeste hadith uit deze eenheid op.'],
  ['muslim', 'takhrij', [15, 16, 18, 20, 24], 'أخرج عدة أحاديث في هذه الوحدة.', 'Nam meerdere hadith uit deze eenheid op.'],
  ['at-tirmidhi', 'takhrij', [18], 'روى حديث «خير ما قلت أنا والنبيون من قبلي».', 'Nam "het beste wat ik en de profeten vóór mij zeiden" op.'],
  ['al-albani', 'takhrij', [18], 'حسن حديث «خير ما قلت أنا والنبيون من قبلي».', 'Noemde "het beste wat ik en de profeten vóór mij zeiden" ḥasan.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'توحيد الألوهية',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'معنى توحيد الألوهية وأدلته وأهميته، ومعنى كلمة التوحيد وركناها وشروطها، وخطأ من جعل توحيد الربوبية غاية دعوة الرسل.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ١٠ من الكتاب.',
    root: { label: 'توحيد الألوهية', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'معناه وأدلته', sub: 'الدرس ١', page: 11, children: ['لغة: العبادة', 'اصطلاحًا: إفراد الله بالعبادة', 'يقوم على ثلاثة أمور'] },
      { label: 'أهميته', sub: 'الدرس ٢', page: 14, children: ['الغاية من الخلق والرسل والكتب', 'لا دخول في الإسلام إلا به', 'النجاة والشفاعة'] },
      { label: 'كلمة التوحيد', sub: 'الدرس ٣', page: 18, children: ['معناها: لا معبود بحق إلا الله', 'ركناها: النفي والإثبات', 'شروطها السبعة'] },
      { label: 'خطأ شائع', sub: 'الدرس ٤', page: 23, children: ['الربوبية أقر بها المشركون', 'الخصومة في الألوهية', 'مظاهر الشرك المنتشرة'] }
    ]
  },
  points: [
    { text: 'توحيد الألوهية: إفراد الله بأفعال العباد التعبدية، أي: إفراد الله بالعبادة.', page: 11 },
    { text: 'ويسمى توحيد العمل، وتوحيد القصد، وتوحيد الإرادة والطلب.', page: 11 },
    { text: 'يقوم على إفراد الله بالقصد (الإخلاص)، وبالدعاء والطلب، وبالمحبة والولاية.', page: 12 },
    { text: 'هو الغاية من الخلق ومن إرسال الرسل وإنزال الكتب، ولا دخول في الإسلام إلا به.', page: 14 },
    { text: 'معنى «لا إله إلا الله»: لا معبود بحق إلا الله، وركناها النفي والإثبات.', page: 18 },
    { text: 'لكلمة التوحيد سبعة شروط، ولا يكفي مجرد النطق بها.', page: 20 },
    { text: 'توحيد الربوبية أقر به المشركون، وإنما كانت الخصومة في توحيد الألوهية.', page: 23 }
  ],
  terms: [
    { term: 'الألوهية', translit: 'al-ulūhiyya', meaning: 'لغة: من أله يأله إلاهة أي عبد؛ فالألوهية العبودية.', explanation: 'اصطلاحًا: إفراد الله بأفعال العباد التعبدية.', notes: [], page: 11 },
    { term: 'الإله', translit: 'al-ilāh', meaning: 'المألوه، أي: المعبود.', explanation: 'ولفظ الجلالة «الله» أصله «إله».', notes: [], page: 11 },
    { term: 'توحيد القصد والطلب', translit: 'tawḥīd al-qaṣd wa-ṭ-ṭalab', meaning: 'من أسماء توحيد الألوهية، مع توحيد العمل وتوحيد الإرادة.', explanation: 'لأنه قائم على إخلاص القصد.', notes: [], page: 11 },
    { term: 'الولاية', translit: 'al-walāya', meaning: 'إفراد الله بالمحبة والولاية من أسس توحيد الألوهية.', explanation: '', notes: [], page: 12 },
    { term: 'عصمة الدم والمال', translit: 'ʿiṣmat ad-dam wa-l-māl', meaning: 'حرمة الدم والمال لمن شهد أن لا إله إلا الله.', explanation: '', notes: [], page: 15 },
    { term: 'المكلف', translit: 'al-mukallaf', meaning: 'من لزمته التكاليف الشرعية؛ وأول فرض عليه أن يتعلم التوحيد.', explanation: '', notes: ['[محمد: ١٩]'], page: 16 },
    { term: 'الشفاعة', translit: 'ash-shafāʿa', meaning: 'أسعد الناس بها من قال لا إله إلا الله خالصًا من قلبه.', explanation: '', notes: [], page: 16 },
    { term: 'كلمة التوحيد', translit: 'kalimat at-tawḥīd', meaning: 'لا إله إلا الله، ومعناها: لا معبود بحق إلا الله.', explanation: 'وهي من الدين بمنزلة الرأس من الجسد.', notes: [], page: 18 },
    { term: 'النفي', translit: 'an-nafy', meaning: 'ترك جميع أنواع المعبودات إلا الله.', explanation: '', notes: [], page: 18 },
    { term: 'الإثبات', translit: 'al-ithbāt', meaning: 'إفراد الله وحده بجميع أنواع العبادات على الوجه المشروع.', explanation: '', notes: [], page: 18 },
    { term: 'اليقين', translit: 'al-yaqīn', meaning: 'ألا يقع في قلب قائلها شك فيها أو فيما تضمنته.', explanation: 'الشرط الثالث.', notes: ['[الحجرات: ١٥]'], page: 20 },
    { term: 'الانقياد', translit: 'al-inqiyād', meaning: 'أن يعمل بما أمره الله به وينتهي عما نهاه عنه.', explanation: 'الشرط الخامس.', notes: ['[لقمان: ٢٢]'], page: 21 },
    { term: 'توحيد الربوبية', translit: 'tawḥīd ar-rubūbiyya', meaning: 'أقر به المشركون، ولا يكفي وحده في النجاة وإن كان لا بد منه.', explanation: '', notes: [], page: 23 },
    { term: 'شد الرحال', translit: 'shadd ar-riḥāl', meaning: 'السفر إلى مكان بقصد التعبد.', explanation: 'ذكر الكتاب شد الرحال إلى مساجد الأولياء من مظاهر الشرك المنتشرة.', notes: [], page: 24 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'ما يقوم عليه توحيد الألوهية',
      intro: 'ثلاثة أمور ذكرها الكتاب.',
      root: { label: 'توحيد الألوهية', sub: 'إفراد الله بالعبادة', page: 12 },
      nodes: [
        { label: 'إفراد الله بالنية والإرادة والقصد', sub: 'الإخلاص' },
        { label: 'إفراد الله بالدعاء والطلب' },
        { label: 'إفراد الله بالمحبة والولاية' }
      ],
      page: 12
    },
    {
      type: 'cards',
      title: 'أهمية توحيد الألوهية',
      intro: 'تسعة أوجه ذكرها الكتاب.',
      nodes: [
        { label: 'الغاية من خلق الجن والإنس', sub: '[الذاريات: ٥٦]', page: 14 },
        { label: 'الغاية من إرسال الرسل', sub: '[الأنبياء: ٢٥؛ النحل: ٣٦]', page: 15 },
        { label: 'الغاية من إنزال الكتب', sub: '[هود: ١–٢]', page: 15 },
        { label: 'لا دخول في الإسلام إلا به', sub: '«أمرت أن أقاتل الناس...»', page: 15 },
        { label: 'المقدم في الدعوة', sub: '[يوسف: ٣٩–٤٠]، وحديث معاذ', page: 15 },
        { label: 'أول فرض على المكلف', sub: '[محمد: ١٩]', page: 16 },
        { label: 'وصية الله لرسله', sub: '[الشورى: ١٣]', page: 16 },
        { label: 'نجاة العبد في الآخرة', sub: 'دخول الجنة والنجاة من النار', page: 16 },
        { label: 'حصول شفاعة النبي ﷺ', sub: '«أسعد الناس بشفاعتي...»', page: 16 }
      ]
    },
    {
      type: 'compare',
      title: 'ركنا كلمة التوحيد',
      intro: 'لا إله إلا الله: نفي وإثبات.',
      columns: ['النفي', 'الإثبات'],
      rows: [
        { label: 'في الكلمة', cells: ['لا إله', 'إلا الله'] },
        { label: 'معناه', cells: ['ترك جميع المعبودات إلا الله', 'إفراد الله بجميع العبادات'] },
        { label: 'في آية النحل ٣٦', cells: ['﴿واجتنبوا الطاغوت﴾', '﴿اعبدوا الله﴾'] }
      ],
      note: 'من اكتفى بالإثبات لم يحقق الكلمة، ومن نفى مطلقًا وسكت فهو تعطيل محض.',
      page: 18
    },
    {
      type: 'steps',
      title: 'شروط لا إله إلا الله',
      intro: 'لا يكفي النطق بها، بل لا بد من شروط.',
      nodes: [
        { label: 'الإخلاص', sub: '[البينة: ٥]', page: 20 },
        { label: 'العلم', sub: '[محمد: ١٩]', page: 20 },
        { label: 'اليقين', sub: '[الحجرات: ١٥]', page: 20 },
        { label: 'القبول', sub: '[الصافات: ٣٥]', page: 20 },
        { label: 'الانقياد', sub: '[لقمان: ٢٢]', page: 21 },
        { label: 'الصدق', sub: '[البقرة: ٨–٩]', page: 21 },
        { label: 'المحبة', sub: '[البقرة: ١٦٥]', page: 21 }
      ]
    },
    {
      type: 'compare',
      title: 'الربوبية والألوهية في دعوة الرسل',
      intro: 'خطأ من يرى أن توحيد الربوبية هو غاية دعوة الرسل.',
      columns: ['توحيد الربوبية', 'توحيد الألوهية'],
      rows: [
        { label: 'موقف المشركين', cells: ['أقروا به [يونس: ٣١؛ لقمان: ٢٥]', 'أنكروه [ص: ٥]'] },
        { label: 'في الخطاب القرآني', cells: ['كأنه مسلمة لا نزاع فيها', 'عليه تدور أكثر النصوص'] },
        { label: 'في النجاة', cells: ['لا يكفي وحده', 'به النجاة'] }
      ],
      page: 23
    }
  ],
  sections: [
    { title: 'معنى توحيد الألوهية', text: 'الألوهية لغة العبادة، واصطلاحًا: إفراد الله بأفعال العباد التعبدية، كالدعاء والنذر والذبح والرجاء والحب والخوف والتوكل والاستعاذة والاستغاثة والاستعانة.', more: 'ويشمل العبادات الباطنة كالخوف والمحبة، والأعمال الظاهرة كالصلاة والزكاة والصوم والحج. ومن أدلته: الأنبياء ٢٥، النحل ٣٦، آل عمران ١٨، الأنعام ١٦٢–١٦٣.', page: 11 },
    { title: 'أهمية توحيد الألوهية', text: 'أكثر نصوص القرآن في إثباته، وهو الذي أشرك فيه الكفار وأبوا أن يقروا به [ص: ٥].', more: 'وهو أول دعوة الرسل وآخرها، ومن أجله قامت الخصومة بين الأنبياء وأممهم (ص ١٧).', page: 14 },
    { title: 'معنى كلمة التوحيد', text: 'لا إله إلا الله أعظم فريضة، وهي من الدين بمنزلة الرأس من الجسد، ومعناها: لا معبود بحق إلا الله.', more: 'وتتكون من ركنين: النفي والإثبات، والأسلوب العربي فيها يحقق الأمرين جميعًا.', page: 18 },
    { title: 'شروط كلمة التوحيد', text: 'لا يكفي مجرد النطق بها، بل لا بد من سبعة شروط: الإخلاص، والعلم، واليقين، والقبول، والانقياد، والصدق، والمحبة.', more: 'قيل للحسن: إن أناسًا يقولون: من قال لا إله إلا الله دخل الجنة. فقال: من قال لا إله إلا الله فأدى حقها وفرضها دخل الجنة.', page: 20 },
    { title: 'خطأ من يرى أن الربوبية غاية دعوة الرسل', text: 'المشركون أقروا بالربوبية، وإنما وقع الاعتراض على إفراد الله بالعبادة؛ فالمقصد الرئيسي توحيد العبادة.', more: 'وكثير من المسلمين يقعون في مسائل من الشرك كالذبح والنذر لغير الله، والحلف بغير الله، وشد الرحال إلى مساجد الأولياء، وبناء المساجد على القبور (ص ٢٤).', page: 23 }
  ],
  keycards: [
    { kind: 'definitie', title: 'توحيد الألوهية', items: ['إفراد الله بأفعال العباد التعبدية.', 'أو: إفراد الله بالعبادة.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'أسماؤه', items: ['توحيد العمل', 'توحيد القصد', 'توحيد الإرادة والطلب'], page: 11, origin: 'boek' },
    { kind: 'definitie', title: 'معنى لا إله إلا الله', items: ['لا معبود بحق إلا الله.'], page: 18, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شروط كلمة التوحيد', items: ['الإخلاص', 'العلم', 'اليقين', 'القبول', 'الانقياد', 'الصدق', 'المحبة'], page: 20, origin: 'boek' },
    { kind: 'onderscheid', title: 'محل الخصومة', items: ['لم تكن في توحيد الربوبية؛ فقد أقر به المشركون.', 'كانت في توحيد الألوهية.'], page: 24, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'توحيد الألوهية: إفراد الله بالعبادة.',
    'يسمى توحيد العمل والقصد والإرادة والطلب.',
    'يقوم على الإخلاص، وإفراد الله بالدعاء، وبالمحبة والولاية.',
    'هو الغاية من الخلق والرسل والكتب، ولا دخول في الإسلام إلا به.',
    'لا إله إلا الله: لا معبود بحق إلا الله؛ ركناها النفي والإثبات.',
    'شروطها: الإخلاص، العلم، اليقين، القبول، الانقياد، الصدق، المحبة.',
    'المشركون أقروا بالربوبية؛ والخصومة في الألوهية.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'أي هذه الأسماء ليس من أسماء توحيد الألوهية؟', options: ['توحيد العمل', 'توحيد القصد', 'توحيد الإرادة والطلب', 'توحيد المعرفة والإثبات'], answer: 3, explain: 'توحيد المعرفة والإثبات ليس من الأسماء التي ذكرها الكتاب هنا.', page: 11 },
    { type: 'mc', q: 'ما معنى «الإله» في اللغة؟', options: ['الخالق', 'المألوه أي المعبود', 'المالك', 'الرازق'], answer: 1, explain: 'إله بمعنى مألوه ومعبود.', page: 11 },
    { type: 'tf', q: 'أول فرض ينبغي للمكلف أن يتعلمه هو توحيد الألوهية.', options: ['صواب', 'خطأ'], answer: 0, explain: '[محمد: ١٩]، وهو من نشاط ص ٢٥.', page: 16 },
    { type: 'mc', q: 'ما دليل أن التوحيد هو المقدم في الدعوة من السنة؟', options: ['حديث «بني الإسلام على خمس»', 'حديث معاذ «فليكن أول ما تدعوهم...»', 'حديث «أسعد الناس بشفاعتي»', 'حديث البطاقة'], answer: 1, explain: 'متفق عليه.', page: 15 },
    { type: 'mc', q: 'ما معنى لا إله إلا الله؟', options: ['لا خالق إلا الله', 'لا معبود بحق إلا الله', 'لا رازق إلا الله', 'لا موجود إلا الله'], answer: 1, explain: 'كما في الكتاب.', page: 18 },
    { type: 'mc', q: 'ما دليل شرط اليقين من القرآن؟', options: ['[البينة: ٥]', '[الحجرات: ١٥]', '[لقمان: ٢٢]', '[البقرة: ١٦٥]'], answer: 1, explain: '﴿إنما المؤمنون الذين آمنوا بالله ورسوله ثم لم يرتابوا﴾.', page: 20 },
    { type: 'tf', q: 'الخلاف بين الرسول ﷺ والمشركين كان قائمًا في توحيد الربوبية.', options: ['صواب', 'خطأ'], answer: 1, explain: 'أقروا بالربوبية، وإنما كان الخلاف في الألوهية (نشاط ص ٢٥).', page: 23 }
  ]),
  note: 'نشاط الكتاب في صفحة ٢٥.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Tawḥīd al-ulūhiyya (eenheid in aanbidding)',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De betekenis, bewijzen en het belang van tawḥīd al-ulūhiyya, de betekenis van "lā ilāha illā llāh" met haar pijlers en voorwaarden, en de fout om rubūbiyya als doel van de boodschappers te zien.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De onderwerpen van de eenheid, zoals op p. 10 van het boek.',
    root: { label: 'Tawḥīd al-ulūhiyya', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Betekenis en bewijzen', sub: 'les 1', page: 11, children: ['taal: aanbidding', 'vakterm: Allah alleen aanbidden', 'rust op drie dingen'] },
      { label: 'Belang', sub: 'les 2', page: 14, children: ['doel van schepping, boodschappers en boeken', 'de enige toegang tot de islam', 'redding en voorspraak'] },
      { label: 'Het woord van tawḥīd', sub: 'les 3', page: 18, children: ['betekenis: geen god die met recht aanbeden wordt dan Allah', 'twee pijlers: ontkennen en bevestigen', 'zeven voorwaarden'] },
      { label: 'Een veelgemaakte fout', sub: 'les 4', page: 23, children: ['de polytheïsten erkenden rubūbiyya', 'het geschil ging over ulūhiyya', 'verspreide vormen van shirk'] }
    ]
  },
  points: [
    { text: 'Tawḥīd al-ulūhiyya: Allah alleen nemen in de daden van aanbidding van de dienaren, kort: Allah alleen aanbidden.', page: 11 },
    { text: 'Het heet ook tawḥīd al-ʿamal, tawḥīd al-qaṣd en tawḥīd al-irāda wa-ṭ-ṭalab.', page: 11 },
    { text: 'Het rust op Allah alleen in intentie (ikhlāṣ), in smeekbede en verzoek, en in liefde en bondgenootschap.', page: 12 },
    { text: 'Het is het doel van de schepping, van de boodschappers en van de boeken; alleen daardoor komt men de islam binnen.', page: 14 },
    { text: '"Lā ilāha illā llāh" betekent: er is geen god die met recht aanbeden wordt dan Allah; de pijlers zijn ontkennen en bevestigen.', page: 18 },
    { text: 'Het woord heeft zeven voorwaarden; uitspreken alleen is niet genoeg.', page: 20 },
    { text: 'De polytheïsten erkenden rubūbiyya; het geschil ging over ulūhiyya.', page: 23 }
  ],
  terms: [
    { term: 'الألوهية', translit: 'al-ulūhiyya', meaning: 'Taalkundig: aanbidding (van aliha – yaʾlahu); ulūhiyya is ʿubūdiyya.', explanation: 'Als vakterm: Allah alleen nemen in de daden van aanbidding.', notes: [], page: 11 },
    { term: 'الإله', translit: 'al-ilāh', meaning: 'God: de aanbedene (maʾlūh).', explanation: 'De naam "Allāh" gaat terug op "ilāh".', notes: [], page: 11 },
    { term: 'توحيد القصد والطلب', translit: 'tawḥīd al-qaṣd wa-ṭ-ṭalab', meaning: 'Eenheid in doel en verzoek: andere naam voor tawḥīd al-ulūhiyya, naast tawḥīd al-ʿamal en tawḥīd al-irāda.', explanation: 'Omdat het rust op zuiverheid van bedoeling.', notes: [], page: 11 },
    { term: 'الولاية', translit: 'al-walāya', meaning: 'Bondgenootschap: Allah alleen nemen in liefde en loyaliteit is een fundament van ulūhiyya.', explanation: '', notes: [], page: 12 },
    { term: 'عصمة الدم والمال', translit: 'ʿiṣmat ad-dam wa-l-māl', meaning: 'Onschendbaarheid van bloed en bezit voor wie getuigt dat er geen god is dan Allah.', explanation: '', notes: [], page: 15 },
    { term: 'المكلف', translit: 'al-mukallaf', meaning: 'De verantwoordelijke: wie aan de geboden gebonden is; zijn eerste plicht is tawḥīd leren.', explanation: '', notes: ['Muḥammad 47:19'], page: 16 },
    { term: 'الشفاعة', translit: 'ash-shafāʿa', meaning: 'Voorspraak: de gelukkigste ermee is wie oprecht "lā ilāha illā llāh" zei.', explanation: '', notes: [], page: 16 },
    { term: 'كلمة التوحيد', translit: 'kalimat at-tawḥīd', meaning: 'Het woord van tawḥīd: lā ilāha illā llāh; er is geen god die met recht aanbeden wordt dan Allah.', explanation: 'Het staat in de godsdienst zoals het hoofd tot het lichaam.', notes: [], page: 18 },
    { term: 'النفي', translit: 'an-nafy', meaning: 'Ontkennen: alle aanbedenen behalve Allah afwijzen.', explanation: '', notes: [], page: 18 },
    { term: 'الإثبات', translit: 'al-ithbāt', meaning: 'Bevestigen: Allah alleen alle aanbidding geven, op de voorgeschreven wijze.', explanation: '', notes: [], page: 18 },
    { term: 'اليقين', translit: 'al-yaqīn', meaning: 'Zekerheid: geen twijfel in het hart over het woord of wat het inhoudt.', explanation: 'Voorwaarde 3.', notes: ['al-Ḥujurāt 49:15'], page: 20 },
    { term: 'الانقياد', translit: 'al-inqiyād', meaning: 'Overgave: doen wat Allah beveelt en laten wat Hij verbiedt.', explanation: 'Voorwaarde 5.', notes: ['Luqmān 31:22'], page: 21 },
    { term: 'توحيد الربوبية', translit: 'tawḥīd ar-rubūbiyya', meaning: 'Eenheid in heerschappij: de polytheïsten erkenden het; het is nodig maar alleen niet genoeg voor redding.', explanation: '', notes: [], page: 23 },
    { term: 'شد الرحال', translit: 'shadd ar-riḥāl', meaning: 'Op reis gaan naar een plaats om daar te aanbidden.', explanation: 'Het boek noemt reizen naar moskeeën van awliyāʾ bij de verspreide vormen van shirk.', notes: [], page: 24 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'Waar tawḥīd al-ulūhiyya op rust',
      intro: 'Drie dingen die het boek noemt.',
      root: { label: 'Tawḥīd al-ulūhiyya', sub: 'Allah alleen aanbidden', page: 12 },
      nodes: [
        { label: 'Allah alleen in intentie, wil en doel', sub: 'ikhlāṣ' },
        { label: 'Allah alleen in smeekbede en verzoek' },
        { label: 'Allah alleen in liefde en bondgenootschap' }
      ],
      page: 12
    },
    {
      type: 'cards',
      title: 'Het belang van tawḥīd al-ulūhiyya',
      intro: 'Negen punten uit het boek.',
      nodes: [
        { label: 'Doel van de schepping van djinn en mensen', sub: 'adh-Dhāriyāt 51:56', page: 14 },
        { label: 'Doel van het zenden van de boodschappers', sub: 'al-Anbiyāʾ 21:25; an-Naḥl 16:36', page: 15 },
        { label: 'Doel van het neerzenden van de boeken', sub: 'Hūd 11:1–2', page: 15 },
        { label: 'De enige toegang tot de islam', sub: '"mij is bevolen de mensen te bestrijden ..."', page: 15 },
        { label: 'Komt eerst in de daʿwa', sub: 'Yūsuf 12:39–40; hadith van Muʿādh', page: 15 },
        { label: 'Eerste plicht van de verantwoordelijke', sub: 'Muḥammad 47:19', page: 16 },
        { label: 'Allahs opdracht aan Zijn boodschappers', sub: 'ash-Shūrā 42:13', page: 16 },
        { label: 'Redding in het Hiernamaals', sub: 'het Paradijs in, het Vuur ontlopen', page: 16 },
        { label: 'Voorspraak van de Profeet ﷺ', sub: '"de gelukkigste met mijn voorspraak ..."', page: 16 }
      ]
    },
    {
      type: 'compare',
      title: 'De twee pijlers van het woord van tawḥīd',
      intro: 'Lā ilāha illā llāh: ontkennen en bevestigen.',
      columns: ['Ontkennen', 'Bevestigen'],
      rows: [
        { label: 'In de woorden', cells: ['lā ilāha (geen god)', 'illā llāh (behalve Allah)'] },
        { label: 'Betekenis', cells: ['alle aanbedenen behalve Allah afwijzen', 'Allah alleen alle aanbidding geven'] },
        { label: 'In an-Naḥl 16:36', cells: ['"vermijd de ṭāghūt"', '"aanbid Allah"'] }
      ],
      note: 'Wie alleen bevestigt, verwezenlijkt het woord niet; wie alles ontkent en zwijgt, ontkent God volledig.',
      page: 18
    },
    {
      type: 'steps',
      title: 'De voorwaarden van lā ilāha illā llāh',
      intro: 'Uitspreken alleen is niet genoeg.',
      nodes: [
        { label: 'Oprechtheid (ikhlāṣ)', sub: 'al-Bayyina 98:5', page: 20 },
        { label: 'Kennis van de betekenis', sub: 'Muḥammad 47:19', page: 20 },
        { label: 'Zekerheid (yaqīn)', sub: 'al-Ḥujurāt 49:15', page: 20 },
        { label: 'Aanvaarding', sub: 'aṣ-Ṣāffāt 37:35', page: 20 },
        { label: 'Overgave (inqiyād)', sub: 'Luqmān 31:22', page: 21 },
        { label: 'Waarachtigheid', sub: 'al-Baqara 2:8–9', page: 21 },
        { label: 'Liefde', sub: 'al-Baqara 2:165', page: 21 }
      ]
    },
    {
      type: 'compare',
      title: 'Rubūbiyya en ulūhiyya in de oproep van de boodschappers',
      intro: 'De fout dat rubūbiyya het doel van de boodschappers is.',
      columns: ['Tawḥīd ar-rubūbiyya', 'Tawḥīd al-ulūhiyya'],
      rows: [
        { label: 'De polytheïsten', cells: ['erkenden het (Yūnus 10:31; Luqmān 31:25)', 'wezen het af (Ṣād 38:5)'] },
        { label: 'In de Koran', cells: ['als vanzelfsprekend, zonder geschil', 'de meeste teksten gaan erover'] },
        { label: 'Voor redding', cells: ['alleen niet genoeg', 'daardoor komt redding'] }
      ],
      page: 23
    }
  ],
  sections: [
    { title: 'Betekenis van tawḥīd al-ulūhiyya', text: 'Ulūhiyya is taalkundig aanbidding; als vakterm: Allah alleen nemen in de daden van aanbidding, zoals smeekbede, gelofte, offer, hoop, liefde, vrees, vertrouwen en hulp zoeken.', more: 'Het geldt voor innerlijke aanbidding (vrees, liefde) en voor uiterlijke daden (gebed, zakāt, vasten, ḥajj). Bewijzen onder meer: al-Anbiyāʾ 21:25, an-Naḥl 16:36, Āl ʿImrān 3:18, al-Anʿām 6:162–163.', page: 11 },
    { title: 'Het belang', text: 'Het meeste van de Koran gaat over dit fundament; het is ook de soort tawḥīd waarin de ongelovigen shirk pleegden en die zij weigerden (Ṣād 38:5).', more: 'Het is de eerste en de laatste oproep van de boodschappers; erom ontstond het geschil tussen de profeten en hun volken (p. 17).', page: 14 },
    { title: 'Het woord van tawḥīd', text: '"Lā ilāha illā llāh" is de grootste plicht en staat in de godsdienst zoals het hoofd tot het lichaam. Betekenis: er is geen god die met recht aanbeden wordt dan Allah.', more: 'Het heeft twee pijlers, ontkennen en bevestigen, en de Arabische zinsbouw bevat beide.', page: 18 },
    { title: 'De voorwaarden', text: 'Uitspreken alleen is niet genoeg; er zijn zeven voorwaarden: oprechtheid, kennis, zekerheid, aanvaarding, overgave, waarachtigheid en liefde.', more: 'Tegen al-Ḥasan werd gezegd dat sommigen zeggen: wie lā ilāha illā llāh zegt, gaat het Paradijs binnen. Hij zei: wie het zegt en het recht en de plicht ervan vervult, gaat het Paradijs binnen.', page: 20 },
    { title: 'De fout over rubūbiyya', text: 'De polytheïsten erkenden rubūbiyya; het bezwaar ging over Allah alleen aanbidden. Het hoofddoel is dus tawḥīd in aanbidding.', more: 'Veel moslims vallen volgens het boek in vormen van shirk, zoals offeren en geloften aan anderen dan Allah, zweren bij anderen dan Allah, reizen naar moskeeën van awliyāʾ en moskeeën bouwen op graven (p. 24).', page: 23 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Tawḥīd al-ulūhiyya', items: ['Allah alleen nemen in de daden van aanbidding van de dienaren.', 'Kort: Allah alleen aanbidden.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'Andere namen', items: ['tawḥīd al-ʿamal', 'tawḥīd al-qaṣd', 'tawḥīd al-irāda wa-ṭ-ṭalab'], page: 11, origin: 'boek' },
    { kind: 'definitie', title: 'Betekenis van lā ilāha illā llāh', items: ['Er is geen god die met recht aanbeden wordt dan Allah.'], page: 18, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden van het woord van tawḥīd', items: ['oprechtheid', 'kennis', 'zekerheid', 'aanvaarding', 'overgave', 'waarachtigheid', 'liefde'], page: 20, origin: 'boek' },
    { kind: 'onderscheid', title: 'Waar het geschil over ging', items: ['Niet over rubūbiyya: die erkenden de polytheïsten.', 'Wel over ulūhiyya.'], page: 24, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Tawḥīd al-ulūhiyya: Allah alleen aanbidden.',
    'Andere namen: tawḥīd al-ʿamal, al-qaṣd, al-irāda wa-ṭ-ṭalab.',
    'Het rust op ikhlāṣ, op Allah alleen in smeekbede, en op Allah alleen in liefde en bondgenootschap.',
    'Het is het doel van schepping, boodschappers en boeken, en de enige toegang tot de islam.',
    'Lā ilāha illā llāh: geen god die met recht aanbeden wordt dan Allah; pijlers: ontkennen en bevestigen.',
    'Voorwaarden: oprechtheid, kennis, zekerheid, aanvaarding, overgave, waarachtigheid, liefde.',
    'De polytheïsten erkenden rubūbiyya; het geschil ging over ulūhiyya.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welke naam gebruikt het boek níet voor tawḥīd al-ulūhiyya?', options: ['tawḥīd al-ʿamal', 'tawḥīd al-qaṣd', 'tawḥīd al-irāda wa-ṭ-ṭalab', 'tawḥīd al-maʿrifa wa-l-ithbāt'], answer: 3, explain: 'Tawḥīd al-maʿrifa wa-l-ithbāt noemt het boek hier niet.', page: 11 },
    { type: 'mc', q: 'Wat betekent "ilāh" taalkundig?', options: ['de Schepper', 'de aanbedene (maʾlūh)', 'de Eigenaar', 'de Voorziener'], answer: 1, explain: 'Ilāh betekent maʾlūh: de aanbedene.', page: 11 },
    { type: 'tf', q: 'Volgens het boek is tawḥīd al-ulūhiyya de eerste plicht die de verantwoordelijke moet leren.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Muḥammad 47:19; zo staat het ook in de oefening op p. 25.', page: 16 },
    { type: 'mc', q: 'Welke hadith laat zien dat tawḥīd eerst komt in de daʿwa?', options: ['"de islam is gebouwd op vijf"', 'de hadith van Muʿādh: "laat het eerste waartoe je hen oproept ..."', '"de gelukkigste met mijn voorspraak"', 'de hadith van het kaartje'], answer: 1, explain: 'Muttafaq ʿalayh.', page: 15 },
    { type: 'mc', q: 'Wat betekent lā ilāha illā llāh?', options: ['er is geen schepper dan Allah', 'er is geen god die met recht aanbeden wordt dan Allah', 'er is geen voorziener dan Allah', 'er bestaat niets dan Allah'], answer: 1, explain: 'Zo staat het in het boek.', page: 18 },
    { type: 'mc', q: 'Welk bewijs noemt het boek voor de voorwaarde zekerheid?', options: ['al-Bayyina 98:5', 'al-Ḥujurāt 49:15', 'Luqmān 31:22', 'al-Baqara 2:165'], answer: 1, explain: '"De gelovigen zijn alleen zij die in Allah en Zijn Boodschapper geloven en daarna niet twijfelen."', page: 20 },
    { type: 'tf', q: 'Volgens het boek ging het geschil tussen de Profeet ﷺ en de polytheïsten over tawḥīd ar-rubūbiyya.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Zij erkenden rubūbiyya; het geschil ging over ulūhiyya (oefening p. 25).', page: 23 }
  ]),
  note: 'Oefening van het boek op p. 25. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-aqeedah', chapter: '1', unit: 1, ar, nl }
