// Hoofdstukkaart bij الفقه (١), eenheid 3: إزالة النجاسة والحيض والنفاس (lessen 15–19, boek p. 59–76).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 62, 74 en 75 zijn in het boek "alleen ter kennisname".
// Weggelaten omdat ze nog gecontroleerd moeten worden: de medische uitleg over aarde bij de hond
// (p. 62) en «صلوا في مرابض الغنم» met de toeschrijving aan de twee Ṣaḥīḥ’s (p. 65).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (١)، سلسلة زاد العلمية',
  pages: '59–76',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'طهور إناء أحدكم إذا ولغ فيه الكلب أن يغسله سبع مرات أولاهن بالتراب', takhrij: 'رواه مسلم', note: '', pages: [61], nl: 'De reiniging van het vat van een van jullie, als een hond eruit gedronken heeft, is dat hij het zeven keer wast, de eerste keer met aarde', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'جاء أعرابي فبال في طائفة المسجد فزجره الناس فنهاهم رسول الله ﷺ، فلما قضى بوله أمر النبي ﷺ بذنوب من ماء فأهريق عليه', takhrij: 'متفق عليه', note: 'تكفي غسلة تذهب بعين النجاسة.', pages: [62], nl: 'Een bedoeïen kwam en urineerde in een hoek van de moskee. De mensen berispten hem, maar de Boodschapper van Allah ﷺ hield hen tegen. Toen hij klaar was, liet de Profeet ﷺ er een emmer water over gieten', nlNote: 'Eén keer wassen die de najāsa wegneemt is genoeg.' },
  { narrator: 'أبو السمح', text: 'يغسل من بول الجارية ويرش من بول الغلام', takhrij: 'رواه أبو داود والنسائي وصححه الحاكم', note: 'في الغلام الذي لم يأكل الطعام.', pages: [63], nl: 'De urine van een meisje wordt gewassen, die van een jongen besprenkeld', nlNote: 'Bij een jongetje dat nog geen voedsel eet.' },
  { narrator: 'أم قيس بنت محصن', text: 'أتت بابن لها صغير لم يأكل الطعام فبال على ثوبه فدعا بماء فنضحه ولم يغسله', takhrij: 'متفق عليه', note: '', pages: [63], nl: 'Zij kwam met een zoontje dat nog geen voedsel at; het urineerde op zijn kleding, en hij vroeg om water, besprenkelde het en waste het niet', nlNote: '' },
  { narrator: '', text: 'إن المؤمن لا ينجس', takhrij: 'متفق عليه', note: 'لا ينجس المؤمن بالموت.', pages: [65], nl: 'De gelovige wordt niet onrein', nlNote: 'Ook niet door de dood.' },
  { narrator: 'أبو هريرة', text: 'إذا وقع الذباب في شراب أحدكم فليغمسه ثم ليطرحه', takhrij: 'رواه البخاري', note: 'ما ليس له دم سائل لا ينجس الماء.', pages: [65], nl: 'Als er een vlieg in de drank van een van jullie valt, laat hij hem onderdompelen en dan weggooien', nlNote: 'Wat geen stromend bloed heeft, maakt water niet onrein.' },
  { narrator: 'عائشة', text: 'كنت أفرك المني من ثوب رسول الله ﷺ ثم يذهب فيصلي فيه', takhrij: 'رواه مسلم', note: '', pages: [65], nl: 'Ik wreef het sperma van de kleding van de Boodschapper van Allah ﷺ, en dan ging hij erin bidden', nlNote: '' },
  { narrator: 'أبو قتادة الأنصاري', text: 'إنها ليست بنجس، إنها من الطوافين عليكم والطوافات', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', note: 'في سؤر الهرة.', pages: [66], nl: 'Zij is niet onrein; zij hoort bij wie bij jullie rondlopen', nlNote: 'Over wat een kat overlaat.' },
  { narrator: 'أسماء بنت أبي بكر', text: 'تحته ثم تقرصه بالماء ثم تنضحه ثم تصلي فيه', takhrij: 'متفق عليه', note: 'في دم الحيض يصيب الثوب.', pages: [66], nl: 'Ze krabt het eraf, wrijft het met water, spoelt het en bidt erin', nlNote: 'Over menstruatiebloed op kleding.' },
  { narrator: '', text: 'أحلت لنا ميتتان ودمان، فأما الميتتان فالحوت والجراد، وأما الدمان فالكبد والطحال', takhrij: 'أخرجه أحمد وابن ماجه وصححه الألباني', note: '', pages: [67], nl: 'Twee dode dieren en twee soorten bloed zijn ons toegestaan: vis en sprinkhanen, en lever en milt', nlNote: '' },
  { narrator: 'عائشة', text: 'لا تعجلن حتى ترين القصة البيضاء', takhrij: 'رواه مالك وصححه الألباني', note: 'تريد بذلك الطهر من الحيضة.', pages: [70], nl: 'Haast je niet totdat je de witte afscheiding ziet', nlNote: 'Daarmee bedoelde ze het einde van de menstruatie.' },
  { narrator: 'أم عطية', text: 'كنا لا نعد الكدرة والصفرة بعد الطهر شيئًا', takhrij: 'رواه البخاري', note: '', pages: [71], nl: 'Wij rekenden troebele en gele afscheiding na de reiniging nergens toe', nlNote: '' },
  { narrator: '', text: 'أليس إحداكن إذا حاضت لم تصم ولم تصل؟', takhrij: 'متفق عليه', note: 'قلن: بلى.', pages: [72], nl: 'Is het niet zo dat een van jullie tijdens haar menstruatie niet vast en niet bidt?', nlNote: 'Zij zeiden: ja.' },
  { narrator: 'عائشة', text: 'افعلي ما يفعل الحاج غير ألا تطوفي بالبيت حتى تطهري', takhrij: 'متفق عليه', note: '', pages: [72], nl: 'Doe wat de pelgrim doet, behalve de ṭawāf om het Huis, totdat je rein bent', nlNote: '' },
  { narrator: '', text: 'لا يمس القرآن إلا طاهر', takhrij: 'رواه مالك وصححه الألباني', note: 'ويجوز أن تمسه بحائل إن احتاجت.', pages: [72], nl: 'Alleen wie rein is raakt de Koran aan', nlNote: 'Met iets ertussen mag het als het nodig is.' },
  { narrator: '', text: 'اصنعوا كل شيء إلا النكاح', takhrij: 'رواه مسلم', note: '', pages: [72], nl: 'Doe alles behalve gemeenschap', nlNote: '' },
  { narrator: '', text: 'مره فليراجعها ثم ليطلقها طاهرًا أو حاملًا', takhrij: 'رواه مسلم', note: 'لعمر لما طلق ابنه عبد الله امرأته في الحيض.', pages: [72], nl: 'Draag hem op haar terug te nemen en haar daarna te scheiden als ze rein of zwanger is', nlNote: 'Tegen ʿUmar, toen zijn zoon ʿAbdallāh zijn vrouw tijdens haar menstruatie scheidde.' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه البخاري': 'al-Bukhārī',
  'رواه أبو داود والنسائي وصححه الحاكم': 'Abū Dāwūd en an-Nasāʾī; authentiek volgens al-Ḥākim',
  'رواه أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; authentiek volgens al-Albānī',
  'أخرجه أحمد وابن ماجه وصححه الألباني': 'Aḥmad en Ibn Māja; authentiek volgens al-Albānī',
  'رواه مالك وصححه الألباني': 'Mālik; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'أنس بن مالك': 'Anas ibn Mālik', 'أبو السمح': 'Abū s-Samḥ', 'أم قيس بنت محصن': 'Umm Qays bint Miḥṣan', 'أبو هريرة': 'Abū Hurayra', 'عائشة': 'ʿĀʾisha',
  'أبو قتادة الأنصاري': 'Abū Qatāda al-Anṣārī', 'أسماء بنت أبي بكر': 'Asmāʾ bint Abī Bakr', 'أم عطية': 'Umm ʿAṭiyya'
}

const PERSONS = [
  ['anas-ibn-malik', 'text', [62, 65], 'روى قصة الأعرابي الذي بال في المسجد.', 'Overleverde het verhaal van de bedoeïen die in de moskee urineerde.'],
  ['abu-s-samh', 'text', [63], 'روى الفرق بين بول الجارية والغلام.', 'Overleverde het verschil tussen de urine van een meisje en een jongen.'],
  ['umm-qays-bint-mihsan', 'text', [63], 'بال ابنها الصغير على ثوب النبي ﷺ فنضحه.', 'Haar zoontje urineerde op de kleding van de Profeet ﷺ, die het besprenkelde.'],
  ['abu-hurayra', 'text', [65], 'روى حديث الذباب.', 'Overleverde de hadith over de vlieg.'],
  ['aisha', 'text', [65, 66, 70, 72], 'روت فرك المني، وقالت: لا تعجلن حتى ترين القصة البيضاء.', 'Overleverde het afwrijven van sperma, en zei: haast je niet tot je de witte afscheiding ziet.'],
  ['abu-qatada-al-ansari', 'text', [66], 'روى طهارة سؤر الهرة.', 'Overleverde dat wat een kat overlaat rein is.'],
  ['ibn-uthaymin', 'text', [66], 'قال: كل ما يكثر طوافه ويشق التحرز منه فحكمه كالهرة إلا الكلب.', 'Zei: wat veel rondloopt en moeilijk te vermijden is, valt onder de kat, behalve de hond.'],
  ['asma-bint-abi-bakr', 'text', [66], 'روت كيف يغسل دم الحيض من الثوب.', 'Overleverde hoe menstruatiebloed uit kleding gewassen wordt.'],
  ['umm-atiyya', 'text', [71], 'قالت: كنا لا نعد الكدرة والصفرة بعد الطهر شيئًا.', 'Zei: we rekenden troebele en gele afscheiding na de reiniging nergens toe.'],
  ['umar-ibn-al-khattab', 'text', [72], 'أمره النبي ﷺ أن يأمر ابنه بمراجعة امرأته.', 'De Profeet ﷺ droeg hem op zijn zoon te zeggen zijn vrouw terug te nemen.'],
  ['ibn-umar', 'text', [72], 'طلق امرأته في الحيض فأمر بمراجعتها.', 'Scheidde zijn vrouw tijdens haar menstruatie en moest haar terugnemen.'],
  ['muslim', 'takhrij', [61, 65, 72], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['al-bukhari', 'takhrij', [62, 63, 65, 66, 71, 72], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [63, 66], 'أخرج حديث أبي السمح وحديث الهرة.', 'Nam de hadith van Abū s-Samḥ en over de kat op.'],
  ['an-nasai', 'takhrij', [63], 'أخرج حديث أبي السمح.', 'Nam de hadith van Abū s-Samḥ op.'],
  ['al-hakim', 'takhrij', [63], 'صحح حديث أبي السمح.', 'Verklaarde de hadith van Abū s-Samḥ authentiek.'],
  ['at-tirmidhi', 'takhrij', [66], 'أخرج حديث الهرة.', 'Nam de hadith over de kat op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [67], 'أخرج «أحلت لنا ميتتان».', 'Nam "twee dode dieren zijn ons toegestaan" op.'],
  ['ibn-maja', 'takhrij', [67], 'أخرج «أحلت لنا ميتتان».', 'Nam "twee dode dieren zijn ons toegestaan" op.'],
  ['malik-ibn-anas', 'takhrij', [70, 72], 'أخرج أثر عائشة وحديث «لا يمس القرآن إلا طاهر».', 'Nam het bericht van ʿĀʾisha en "alleen wie rein is raakt de Koran aan" op.'],
  ['al-albani', 'takhrij', [66, 67, 70, 72], 'صحح أحاديث في الوحدة.', 'Verklaarde hadith in deze eenheid authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'إزالة النجاسة والحيض والنفاس',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف النجاسة وأقسامها وكيفية تطهيرها ودرجاتها، ثم أشياء طاهرة وقع فيها خلاف، وأقسام الدماء، ثم الحيض: تعريفه وسنه وأقله وأكثره وعلامات الطهر وما يحرم به، والاستحاضة، وأخيرًا أحكام النفساء.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'النجاسة والحيض والنفاس', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'إزالة النجاسة', sub: 'الدرس ١٥', page: 61, children: ['عارضة وعينية', 'الكلب وغيره', 'درجاتها'] },
      { label: 'طاهرات مختلف فيها', sub: 'الدرس ١٦', page: 65, children: ['المؤمن', 'ما لا دم له', 'أقسام الدماء'] },
      { label: 'الحيض', sub: 'الدرس ١٧', page: 69, children: ['سنه ومدته', 'علامات الطهر', 'الكدرة والصفرة'] },
      { label: 'ما يحرم بالحيض', sub: 'الدرس ١٨', page: 72, children: ['سبعة أمور', 'المستحاضة'] },
      { label: 'النفاس', sub: 'الدرس ١٩', page: 74, children: ['أكثره أربعون', 'كالحيض في أحكامه'] }
    ]
  },
  points: [
    { text: 'النجاسة كل عين مستقذرة أمر الشارع باجتنابها.', page: 61 },
    { text: 'النجاسة العارضة تطهر بأي طريقة تزيلها، والعينية كالكلب لا تطهر.', page: 61 },
    { text: 'نجاسة الكلب تغسل سبع مرات أولاهن بالتراب، وما عداها يكفي فيه ما يذهب بعينها.', page: 61 },
    { text: 'تحصل الطهارة بكل ما يزيل عين النجاسة، ماءً كان أو غيره.', page: 63 },
    { text: 'بول الغلام الذي لم يأكل الطعام ينضح، وبول الجارية يغسل.', page: 63 },
    { text: 'دم الحيض والنفاس نجس باتفاق، وغيره من دم الإنسان طاهر على الراجح.', page: 67 },
    { text: 'أقل الحيض يوم وليلة، وأكثره خمسة عشر يومًا عند أكثر الفقهاء، وغالبه ست أو سبع.', page: 69 },
    { text: 'أكثر النفاس أربعون يومًا، وهو كالحيض فيما يحل ويحرم.', page: 74 }
  ],
  terms: [
    { term: 'النجاسة', translit: 'an-najāsa', meaning: 'كل عين مستقذرة أمر الشارع باجتنابها.', explanation: '', notes: [], page: 61 },
    { term: 'النجاسة العارضة', translit: 'an-najāsa al-ʿāriḍa', meaning: 'أن يكون المحل طاهرًا فترد عليه نجاسة طارئة.', explanation: 'وتسمى الحكمية، وتطهر بأي طريقة تزيلها.', notes: [], page: 61 },
    { term: 'النجاسة العينية', translit: 'an-najāsa al-ʿayniyya', meaning: 'أن تكون العين نفسها نجسة.', explanation: 'كالكلب والخنزير، ولا تطهر.', notes: [], page: 61 },
    { term: 'المذي', translit: 'al-madhy', meaning: 'ماء رقيق لزج يخرج عند الشهوة.', explanation: 'نجس، ويغسل الذكر والخصية وينضح الثوب.', notes: [], page: 63 },
    { term: 'الودي', translit: 'al-wady', meaning: 'ماء أبيض ثخين يخرج عقب البول.', explanation: 'نجس، ويجب منه الوضوء.', notes: [], page: 63 },
    { term: 'النضح', translit: 'an-naḍḥ', meaning: 'أن يتبع الموضع بالماء حتى يشمله دون فرك أو عصر.', explanation: '', notes: [], page: 63 },
    { term: 'السؤر', translit: 'as-suʾr', meaning: 'بقية الطعام والشراب.', explanation: '', notes: [], page: 66 },
    { term: 'الحيض', translit: 'al-ḥayḍ', meaning: 'دم طبيعة وجبلة يخرج من قعر الرحم في أوقات معلومة من غير ولادة.', explanation: 'لغة: السيلان.', notes: [], page: 69 },
    { term: 'القصة البيضاء', translit: 'al-qaṣṣa al-bayḍāʾ', meaning: 'ماء أبيض شفاف يدفعه الرحم عند انقطاع الحيض.', explanation: 'علامة على الطهر.', notes: [], page: 70 },
    { term: 'الاستحاضة', translit: 'al-istiḥāḍa', meaning: 'دم على أثر الحيض على صفة لا يكون حيضًا.', explanation: 'تتوضأ المستحاضة لكل صلاة بعد دخول وقتها.', notes: [], page: 73 },
    { term: 'دم الفساد', translit: 'dam al-fasād', meaning: 'دم في غير وقت الحيض أو غير متصل به.', explanation: 'لا يمنع صلاة ولا صومًا، وهو نجس ناقض للوضوء.', notes: [], page: 75 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'درجات النجاسة',
      intro: 'ثلاث كما في الكتاب.',
      columns: ['أمثلة', 'التطهير'],
      rows: [
        { label: 'الخفيفة', cells: ['بول الصبي الذي لم يأكل الطعام', 'النضح'] },
        { label: 'المتوسطة', cells: ['بول الآدمي وغائطه ودم الحيض', 'ما يذهب بعين النجاسة'] },
        { label: 'الغليظة', cells: ['نجاسة الكلب وما ولغ فيه', 'سبع مرات أولاهن بالتراب'] }
      ],
      page: 64
    },
    {
      type: 'cards',
      title: 'طاهرات وقع فيها خلاف',
      intro: 'كما في الدرس السادس عشر.',
      nodes: [
        { label: 'المؤمن بعد موته', page: 65 },
        { label: 'ما ليس له دم سائل', sub: 'إذا تولد من طاهر', page: 65 },
        { label: 'بول وروث ما يؤكل لحمه', page: 65 },
        { label: 'مني الآدمي', page: 65 },
        { label: 'رطوبة فرج المرأة', page: 65 },
        { label: 'سؤر الهرة', sub: 'وما يكثر طوافه إلا الكلب', page: 66 }
      ]
    },
    {
      type: 'tree',
      title: 'أقسام الدماء',
      intro: 'كما في الكتاب.',
      root: { label: 'الدماء' },
      nodes: [
        { label: 'دم الإنسان', children: ['الحيض والنفاس: نجس', 'غيرهما: طاهر على الراجح'], page: 66 },
        { label: 'دم الحيوان', children: ['مأكول اللحم: طاهر إلا المسفوح', 'غير مأكول اللحم: نجس', 'الميتة: نجس إلا السمك والجراد'], page: 67 }
      ]
    },
    {
      type: 'cards',
      title: 'ما يحرم بالحيض والنفاس',
      intro: 'سبعة أمور كما في الدرس الثامن عشر.',
      nodes: [
        { label: 'الصلاة', page: 72 },
        { label: 'الصوم', page: 72 },
        { label: 'الطواف', page: 72 },
        { label: 'مس المصحف', sub: 'ويجوز بحائل للحاجة', page: 72 },
        { label: 'اللبث في المسجد', page: 72 },
        { label: 'الوطء في الفرج', page: 72 },
        { label: 'الطلاق', page: 72 }
      ]
    },
    {
      type: 'compare',
      title: 'أحوال المستحاضة',
      intro: 'ثلاثة كما في الكتاب.',
      columns: ['ما تفعل'],
      rows: [
        { label: 'لها عادة معلومة', cells: ['تجلس عادتها فقط'] },
        { label: 'لا عادة ولها تمييز', cells: ['حيضها ما تميز بسواد أو غلظة أو رائحة'] },
        { label: 'لا عادة ولا تمييز', cells: ['ستة أو سبعة أيام من كل شهر'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'نجاسة غير الكلب', text: 'يجزئ فيها غسلة واحدة تذهب بعين النجاسة، فإن لم تذهب غسلت ثانية وثالثة؛ وإن كانت ذات جرم أزيل الجرم أولًا ثم أتبع محله بالماء.', more: '', page: 62 },
    { title: 'إذا خفي موضع النجاسة', text: 'إن جزمت بإصابة الموضعين غسلتهما، وإن جزمت أو غلب على ظنك أنها أصابت أحدهما غسلته وحده، وإن تساوى الاحتمالان غسلتهما جميعًا.', more: '', page: 64 },
    { title: 'غير دم الحيض من الإنسان', text: 'الدماء التي تخرج من البدن والأسنان ونحوها طاهرة على الراجح؛ لأن الأصل الطهارة، ولم يأمر بغسل الدم إلا دم الحيض مع كثرة الجروح والرعاف.', more: '', page: 67 },
    { title: 'المبتدأة في الحيض', text: 'الدم النازل عليها إن كان بصفات الحيض فهو حيض ما لم يتجاوز خمسة عشر يومًا، فإن تجاوزها فهو استحاضة.', more: '[البقرة: ٢٢٢]', page: 70 },
    { title: 'علامات الطهر', text: 'انقطاع الدم بأن تخرج القطنة نقية لا كدرة عليها ولا صفرة، أو القصة البيضاء.', more: '', page: 70 },
    { title: 'قراءة الحائض للقرآن', text: 'الأرجح أنه يجوز لها قراءته من غير أن تمس المصحف، خاصة لحاجة كالطالبة والمعلمة، لعدم الدليل على المنع.', more: '', page: 71 },
    { title: 'مسائل في الحيض', text: 'إن حاضت بعد دخول وقت صلاة لم تصلها قضتها بعد الطهر؛ وإن حاضت في نهار صومها بطل وقضته؛ وإن طهرت في النهار قضت ذلك اليوم ولا يجب عليها الإمساك.', more: '', page: 73 },
    { title: 'كيف تصلي المستحاضة', text: 'تغسل فرجها وتعصبه وتتوضأ لوقت كل صلاة بعد دخول وقتها وتصلي الفروض والنوافل، ولها حكم الطاهرات في سائر الأحكام.', more: 'الجملة الأخيرة في الكتاب للاطلاع فقط.', page: 73 },
    { title: 'أحكام النفساء', text: 'لا حد لأقل النفاس، وأكثره أربعون يومًا؛ فإن انقطع قبلها اغتسلت وصلت. وهي كالحائض فيما يحل ويحرم، وتقضي الصيام دون الصلاة.', more: '', page: 74 },
    { title: 'السقط (للاطلاع فقط)', text: 'إن ألقت الحامل ما تبين فيه خلق إنسان فلها أحكام النفساء، وأقل ذلك واحد وثمانون يومًا وغالبه ثلاثة أشهر؛ وإن لم يتبين فليس بنفاس.', more: FYI, page: 75 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'النجاسة العارضة والعينية', items: ['العارضة: تطهر بأي طريقة تزيلها.', 'العينية: لا تطهر، كالكلب والخنزير.'], page: 61, origin: 'boek' },
    { kind: 'bewijs', title: 'تطهير ما ولغ فيه الكلب', items: ['«طهور إناء أحدكم إذا ولغ فيه الكلب أن يغسله سبع مرات أولاهن بالتراب».'], page: 61, origin: 'boek' },
    { kind: 'uitzondering', title: 'بول الصغير', items: ['الغلام الذي لم يأكل الطعام: ينضح.', 'الجارية: يغسل بولها بكل حال.', 'الغائط منهما: يغسل.'], page: 63, origin: 'boek' },
    { kind: 'opsomming', title: 'ما يحرم بالحيض والنفاس', items: ['الصلاة', 'الصوم', 'الطواف', 'مس المصحف', 'اللبث في المسجد', 'الوطء', 'الطلاق'], page: 72, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'النجاسة عارضة وعينية، ودرجاتها خفيفة ومتوسطة وغليظة.',
    'كل ما أزال عين النجاسة طهر المحل.',
    'من الطاهرات المختلف فيها المني وسؤر الهرة وما لا دم له.',
    'أقل الحيض يوم وليلة وأكثره خمسة عشر يومًا، وعلامة الطهر الجفوف أو القصة البيضاء.',
    'يحرم بالحيض سبعة أمور، والمستحاضة تتوضأ لكل صلاة.',
    'أكثر النفاس أربعون يومًا، وهو كالحيض في أحكامه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'كم مرة يغسل ما ولغ فيه الكلب؟', options: ['سبع مرات أولاهن بالتراب', 'ثلاث مرات', 'مرة واحدة', 'خمس مرات'], answer: 0, explain: 'كما في حديث مسلم.', page: 61 },
    { type: 'tf', q: 'لا تحصل الطهارة من النجاسة إلا بالماء.', options: ['صواب', 'خطأ'], answer: 1, explain: 'تحصل بكل ما يزيل عينها.', page: 63 },
    { type: 'mc', q: 'كيف يطهر بول الغلام الذي لم يأكل الطعام؟', options: ['بالنضح', 'بالغسل سبعًا', 'بالتراب', 'لا يطهر'], answer: 0, explain: 'أما الجارية فيغسل بولها.', page: 63 },
    { type: 'mc', q: 'ما حكم سؤر الهرة؟', options: ['طاهر', 'نجس', 'مكروه', 'نجس إن كانت سوداء'], answer: 0, explain: '«إنها من الطوافين عليكم».', page: 66 },
    { type: 'mc', q: 'ما أكثر الحيض عند أكثر الفقهاء؟', options: ['خمسة عشر يومًا', 'سبعة أيام', 'عشرة أيام', 'أربعون يومًا'], answer: 0, explain: 'وما زاد فهو استحاضة.', page: 69 },
    { type: 'tf', q: 'الكدرة والصفرة بعد الطهر ليست حيضًا.', options: ['صواب', 'خطأ'], answer: 0, explain: 'لحديث أم عطية.', page: 71 },
    { type: 'mc', q: 'ما أكثر النفاس؟', options: ['أربعون يومًا', 'خمسة عشر يومًا', 'ستون يومًا', 'لا حد له'], answer: 0, explain: 'وما زاد فهو استحاضة.', page: 74 }
  ]),
  note: 'أنشطة الكتاب في صفحتي ٦٨ و٧٦. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Najāsa verwijderen, menstruatie en kraambloed',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Wat najāsa is, haar soorten, hoe je haar verwijdert en haar gradaties; daarna dingen die rein zijn al is er discussie over, en de soorten bloed; dan de menstruatie: betekenis, leeftijd, kortste en langste duur, tekenen van reinheid en wat verboden is; bloedverlies buiten de menstruatie; en tot slot de regels voor kraambloed.',
  source: { ...source, label: 'Kitāb al-Fiqh (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Najāsa, menstruatie en kraambloed', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Najāsa verwijderen', sub: 'les 15', page: 61, children: ['bijkomend en wezenlijk', 'de hond en de rest', 'gradaties'] },
      { label: 'Rein, met discussie', sub: 'les 16', page: 65, children: ['de gelovige', 'zonder stromend bloed', 'soorten bloed'] },
      { label: 'Menstruatie', sub: 'les 17', page: 69, children: ['leeftijd en duur', 'tekenen van reinheid', 'troebel en geel'] },
      { label: 'Wat verboden is', sub: 'les 18', page: 72, children: ['zeven dingen', 'istiḥāḍa'] },
      { label: 'Kraambloed', sub: 'les 19', page: 74, children: ['hoogstens veertig dagen', 'als menstruatie'] }
    ]
  },
  points: [
    { text: 'Najāsa is elke vieze stof die de Wetgever ons opdroeg te mijden.', page: 61 },
    { text: 'Bijkomende najāsa wordt rein op elke manier die haar verwijdert; wezenlijke najāsa, zoals de hond, wordt nooit rein.', page: 61 },
    { text: 'Waar een hond uit dronk, was je zeven keer, de eerste keer met aarde; bij andere najāsa is genoeg wat haar wegneemt.', page: 61 },
    { text: 'Reinheid ontstaat door alles wat de najāsa wegneemt, met water of anders.', page: 63 },
    { text: 'De urine van een jongetje dat nog geen voedsel eet, besprenkel je; die van een meisje was je.', page: 63 },
    { text: 'Menstruatie- en kraambloed is onrein volgens alle geleerden; ander menselijk bloed is volgens de sterkste mening rein.', page: 67 },
    { text: 'Menstruatie duurt minstens een dag en een nacht en volgens de meeste geleerden hoogstens vijftien dagen; meestal zes of zeven.', page: 69 },
    { text: 'Kraambloed duurt hoogstens veertig dagen en volgt de regels van menstruatie.', page: 74 }
  ],
  terms: [
    { term: 'النجاسة', translit: 'an-najāsa', meaning: 'Elke vieze stof die de Wetgever ons opdroeg te mijden.', explanation: '', notes: [], page: 61 },
    { term: 'النجاسة العارضة', translit: 'an-najāsa al-ʿāriḍa', meaning: 'Bijkomende najāsa: iets reins waar najāsa op komt.', explanation: 'Wordt rein op elke manier die haar verwijdert.', notes: [], page: 61 },
    { term: 'النجاسة العينية', translit: 'an-najāsa al-ʿayniyya', meaning: 'Wezenlijke najāsa: de stof zelf is onrein.', explanation: 'Zoals hond en varken; wordt nooit rein.', notes: [], page: 61 },
    { term: 'المذي', translit: 'al-madhy', meaning: 'Dun, kleverig vocht dat bij opwinding vrijkomt.', explanation: 'Onrein; je wast het geslachtsdeel en besprenkelt de kleding.', notes: [], page: 63 },
    { term: 'الودي', translit: 'al-wady', meaning: 'Wit, dik vocht dat na het urineren komt.', explanation: 'Onrein; het verbreekt de woeḍoe.', notes: [], page: 63 },
    { term: 'النضح', translit: 'an-naḍḥ', meaning: 'Besprenkelen: water over de plek laten gaan zonder wrijven of uitwringen.', explanation: '', notes: [], page: 63 },
    { term: 'السؤر', translit: 'as-suʾr', meaning: 'Wat van eten of drinken overblijft.', explanation: '', notes: [], page: 66 },
    { term: 'الحيض', translit: 'al-ḥayḍ', meaning: 'Menstruatie: natuurlijk bloed uit de baarmoeder op vaste tijden, niet door een bevalling.', explanation: 'Taalkundig: stromen.', notes: [], page: 69 },
    { term: 'القصة البيضاء', translit: 'al-qaṣṣa al-bayḍāʾ', meaning: 'Heldere witte afscheiding aan het einde van de menstruatie.', explanation: 'Een teken van reinheid.', notes: [], page: 70 },
    { term: 'الاستحاضة', translit: 'al-istiḥāḍa', meaning: 'Bloedverlies na de menstruatie dat geen menstruatie is.', explanation: 'De vrouw doet voor elk gebed de woeḍoe nadat de tijd begonnen is.', notes: [], page: 73 },
    { term: 'دم الفساد', translit: 'dam al-fasād', meaning: 'Bloed buiten de menstruatietijd en er niet op aansluitend.', explanation: 'Het verhindert gebed en vasten niet; het is onrein en verbreekt de woeḍoe.', notes: [], page: 75 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De gradaties van najāsa',
      intro: 'Drie zoals in het boek.',
      columns: ['Voorbeelden', 'Reiniging'],
      rows: [
        { label: 'Licht', cells: ['urine van een jongetje dat nog geen voedsel eet', 'besprenkelen'] },
        { label: 'Gemiddeld', cells: ['menselijke urine en ontlasting, menstruatiebloed', 'wat de najāsa wegneemt'] },
        { label: 'Zwaar', cells: ['de hond en waar hij uit dronk', 'zeven keer, de eerste met aarde'] }
      ],
      page: 64
    },
    {
      type: 'cards',
      title: 'Rein, al is er discussie over',
      intro: 'Zoals in les 16.',
      nodes: [
        { label: 'De gelovige na zijn dood', page: 65 },
        { label: 'Wat geen stromend bloed heeft', sub: 'als het uit iets reins voortkomt', page: 65 },
        { label: 'Urine en mest van dieren die je mag eten', page: 65 },
        { label: 'Menselijk sperma', page: 65 },
        { label: 'Vaginaal vocht', page: 65 },
        { label: 'Wat een kat overlaat', sub: 'en wat veel rondloopt, behalve de hond', page: 66 }
      ]
    },
    {
      type: 'tree',
      title: 'De soorten bloed',
      intro: 'Zoals in het boek.',
      root: { label: 'Bloed' },
      nodes: [
        { label: 'Van de mens', children: ['menstruatie en kraambloed: onrein', 'ander bloed: rein volgens de sterkste mening'], page: 66 },
        { label: 'Van dieren', children: ['eetbaar dier: rein, behalve vergoten bloed', 'niet-eetbaar dier: onrein', 'kadaver: onrein, behalve vis en sprinkhaan'], page: 67 }
      ]
    },
    {
      type: 'cards',
      title: 'Verboden tijdens menstruatie en kraamtijd',
      intro: 'Zeven dingen zoals in les 18.',
      nodes: [
        { label: 'Het gebed', page: 72 },
        { label: 'Vasten', page: 72 },
        { label: 'De ṭawāf', page: 72 },
        { label: 'De muṣḥaf aanraken', sub: 'met iets ertussen mag het als het nodig is', page: 72 },
        { label: 'In de moskee verblijven', page: 72 },
        { label: 'Gemeenschap', page: 72 },
        { label: 'Echtscheiding uitspreken', page: 72 }
      ]
    },
    {
      type: 'compare',
      title: 'De gevallen van istiḥāḍa',
      intro: 'Drie zoals in het boek.',
      columns: ['Wat ze doet'],
      rows: [
        { label: 'Vaste gewoonte', cells: ['houdt alleen haar gewoonte aan'] },
        { label: 'Geen gewoonte, wel onderscheid', cells: ['menstruatie is wat zich onderscheidt in kleur, dikte of geur'] },
        { label: 'Geen gewoonte, geen onderscheid', cells: ['zes of zeven dagen per maand'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'Andere najāsa dan van de hond', text: 'Eén keer wassen die de najāsa wegneemt is genoeg; lukt dat niet, dan een tweede en derde keer. Heeft ze substantie, dan haal je die eerst weg en spoel je daarna met water.', more: '', page: 62 },
    { title: 'Als je niet weet waar de najāsa zit', text: 'Weet je zeker dat beide plekken geraakt zijn, was ze allebei. Weet je zeker of denk je overwegend dat één plek geraakt is, was die. Zijn beide even waarschijnlijk, was ze allebei.', more: '', page: 64 },
    { title: 'Ander menselijk bloed', text: 'Bloed uit het lichaam of het tandvlees is volgens de sterkste mening rein: het uitgangspunt is reinheid, en alleen bij menstruatiebloed werd wassen opgedragen, terwijl wonden en neusbloedingen vaak voorkwamen.', more: '', page: 67 },
    { title: 'Een meisje bij haar eerste menstruatie', text: 'Bloed met de kenmerken van menstruatie is menstruatie, zolang het niet langer duurt dan vijftien dagen; daarna is het istiḥāḍa.', more: 'al-Baqara 2:222', page: 70 },
    { title: 'Tekenen van reinheid', text: 'Het bloed stopt, zodat een watje schoon terugkomt zonder troebele of gele afscheiding, of de witte afscheiding verschijnt.', more: '', page: 70 },
    { title: 'Koran reciteren tijdens de menstruatie', text: 'Volgens de sterkste mening mag dat zonder de muṣḥaf aan te raken, vooral als het nodig is, zoals voor een leerling of lerares, omdat er geen bewijs voor een verbod is.', more: '', page: 71 },
    { title: 'Kwesties bij de menstruatie', text: 'Begint de menstruatie nadat een gebedstijd begon en had ze nog niet gebeden, dan haalt ze dat gebed later in. Begint ze tijdens een vastendag, dan is het vasten ongeldig en haalt ze die dag in. Wordt ze overdag rein, dan haalt ze die dag in en hoeft ze zich de rest van de dag niet te onthouden.', more: '', page: 73 },
    { title: 'Hoe een vrouw met istiḥāḍa bidt', text: 'Ze wast zich, legt verband aan en doet voor elk gebed de woeḍoe nadat de tijd begonnen is; ze bidt verplichte en vrijwillige gebeden en is voor de rest als een reine vrouw.', more: 'De laatste zin staat in het boek alleen ter kennisname.', page: 73 },
    { title: 'Regels voor kraambloed', text: 'Er is geen minimum; het maximum is veertig dagen. Stopt het eerder, dan doet ze de ghusl en bidt. Wat toegestaan en verboden is, is als bij menstruatie; vastendagen haalt ze in, gebeden niet.', more: '', page: 74 },
    { title: 'Een miskraam (alleen ter kennisname)', text: 'Komt er een vrucht waarin menselijke vorm te zien is, dan gelden de regels van kraambloed; dat is op zijn vroegst na eenentachtig dagen en meestal na drie maanden. Is er geen vorm te zien, dan is het geen kraambloed.', more: FYI_NL, page: 75 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'Bijkomende en wezenlijke najāsa', items: ['Bijkomend: rein op elke manier die het verwijdert.', 'Wezenlijk: nooit rein, zoals hond en varken.'], page: 61, origin: 'boek' },
    { kind: 'bewijs', title: 'Reinigen waar een hond uit dronk', items: ['"Hij wast het zeven keer, de eerste keer met aarde."'], page: 61, origin: 'boek' },
    { kind: 'uitzondering', title: 'Urine van kleine kinderen', items: ['Jongetje dat nog geen voedsel eet: besprenkelen.', 'Meisje: altijd wassen.', 'Ontlasting van beiden: wassen.'], page: 63, origin: 'boek' },
    { kind: 'opsomming', title: 'Verboden tijdens menstruatie en kraamtijd', items: ['gebed', 'vasten', 'ṭawāf', 'de muṣḥaf aanraken', 'in de moskee verblijven', 'gemeenschap', 'echtscheiding'], page: 72, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Najāsa is bijkomend of wezenlijk, en licht, gemiddeld of zwaar.',
    'Alles wat de najāsa wegneemt, maakt de plek rein.',
    'Rein, al is er discussie over: onder meer sperma, wat een kat overlaat en wat geen bloed heeft.',
    'Menstruatie duurt minstens een dag en een nacht en hoogstens vijftien dagen; reinheid blijkt uit droogte of de witte afscheiding.',
    'Zeven dingen zijn verboden tijdens de menstruatie; bij istiḥāḍa doe je voor elk gebed de woeḍoe.',
    'Kraambloed duurt hoogstens veertig dagen en volgt de regels van menstruatie.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe vaak was je iets waar een hond uit dronk?', options: ['zeven keer, de eerste met aarde', 'drie keer', 'één keer', 'vijf keer'], answer: 0, explain: 'Zoals in de hadith bij Muslim.', page: 61 },
    { type: 'tf', q: 'Najāsa kan alleen met water verwijderd worden.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Alles wat haar wegneemt, reinigt.', page: 63 },
    { type: 'mc', q: 'Hoe reinig je de urine van een jongetje dat nog geen voedsel eet?', options: ['besprenkelen', 'zeven keer wassen', 'met aarde', 'het wordt niet rein'], answer: 0, explain: 'De urine van een meisje was je.', page: 63 },
    { type: 'mc', q: 'Wat is het oordeel over wat een kat overlaat?', options: ['rein', 'onrein', 'afgeraden', 'onrein bij een zwarte kat'], answer: 0, explain: '"Zij hoort bij wie bij jullie rondlopen."', page: 66 },
    { type: 'mc', q: 'Hoe lang duurt menstruatie hoogstens, volgens de meeste geleerden?', options: ['vijftien dagen', 'zeven dagen', 'tien dagen', 'veertig dagen'], answer: 0, explain: 'Wat langer duurt is istiḥāḍa.', page: 69 },
    { type: 'tf', q: 'Troebele en gele afscheiding na de reiniging is geen menstruatie.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Vanwege de hadith van Umm ʿAṭiyya.', page: 71 },
    { type: 'mc', q: 'Hoe lang duurt kraambloed hoogstens?', options: ['veertig dagen', 'vijftien dagen', 'zestig dagen', 'er is geen grens'], answer: 0, explain: 'Wat langer duurt is istiḥāḍa.', page: 74 }
  ]),
  note: 'Oefeningen van het boek op p. 68 en 76. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-fiqh', chapter: '15', unit: 3, ar, nl }
