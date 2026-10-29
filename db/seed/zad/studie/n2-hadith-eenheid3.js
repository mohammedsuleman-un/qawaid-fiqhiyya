// Hoofdstukkaart bij الحديث (٢), eenheid 3: الأحاديث ١٣–١٧ (lessen 13–18, boek p. 54–73).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De algemene uitleg (الشرح الإجمالي) staat in het boek
// "alleen ter kennisname". Het bericht van ʿĀʾisha over de slaaf van Abū Bakr (p. 71) staat niet in het
// hadith-tabblad; het is geen uitspraak van de Profeet ﷺ en het boek geeft het ingekort. Niet overgenomen:
// de bewering op p. 67 dat de moderne geneeskunde 360 gewrichten heeft vastgesteld, met getallen per
// lichaamsdeel; het boek noemt daar geen bron.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (٢)، سلسلة زاد العلمية',
  pages: '54–73',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'الشرح الإجمالي في الكتاب للاطلاع فقط.'
const FYI_NL = 'De algemene uitleg staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'عدي بن حاتم', text: 'ما منكم من أحد إلا سيكلمه الله ليس بينه وبينه ترجمان، فينظر أيمن منه فلا يرى إلا ما قدم، وينظر أشأم منه فلا يرى إلا ما قدم، وينظر بين يديه فلا يرى إلا النار تلقاء وجهه، فاتقوا النار ولو بشق تمرة', takhrij: 'متفق عليه', note: 'الحديث الثالث عشر، وفي زيادة: «ولو بكلمة طيبة».', pages: [54], nl: 'Er is niemand van jullie tot wie Allah niet zal spreken, zonder tolk tussen hen. Hij kijkt naar rechts en ziet alleen wat hij vooruitzond, kijkt naar links en ziet alleen wat hij vooruitzond, en kijkt voor zich en ziet alleen het Vuur recht voor zijn gezicht. Bescherm jullie dus tegen het Vuur, al is het met een halve dadel', nlNote: 'Hadith 13; in een toevoeging: "al is het met een goed woord".' },
  { narrator: '', text: 'سترتها عليك في الدنيا وأنا أغفرها لك اليوم', takhrij: 'متفق عليه', note: 'من قول الله لعبده يوم القيامة بعد أن يقرره بذنوبه، كما في الشرح الإجمالي.', pages: [55], nl: 'Ik heb ze in de wereld voor jou bedekt, en vandaag vergeef Ik ze jou', nlNote: 'Wat Allah op de Opstandingsdag tegen Zijn dienaar zegt nadat Hij hem zijn zonden heeft laten erkennen, zoals in de algemene uitleg.' },
  { narrator: 'أبو ذر', text: 'أوليس قد جعل الله لكم ما تصدقون؟ إن بكل تسبيحة صدقة، وكل تكبيرة صدقة، وكل تحميدة صدقة، وكل تهليلة صدقة، وأمر بالمعروف صدقة، ونهي عن منكر صدقة، وفي بضع أحدكم صدقة. قالوا: يا رسول الله، أيأتي أحدنا شهوته ويكون له فيها أجر؟ قال: أرأيتم لو وضعها في حرام أكان عليه فيها وزر؟ فكذلك إذا وضعها في الحلال كان له أجر', takhrij: 'رواه مسلم', note: 'الحديث الرابع عشر، جوابًا لمن قالوا: ذهب أهل الدثور بالأجور.', pages: [58], nl: 'Heeft Allah jullie niet iets gegeven waarmee jullie liefdadigheid kunnen geven? Elke tasbīḥ is liefdadigheid, elke takbīr, elke taḥmīd en elke tahlīl is liefdadigheid; het goede gebieden is liefdadigheid, het slechte verbieden is liefdadigheid, en in de omgang van een van jullie met zijn vrouw is liefdadigheid. Zij zeiden: "O Boodschapper van Allah, als een van ons zijn begeerte vervult, krijgt hij daar dan beloning voor?" Hij zei: "Als hij haar op een verboden manier vervulde, zou hij dan geen zonde hebben? Zo krijgt hij beloning als hij haar op een toegestane manier vervult."', nlNote: 'Hadith 14, als antwoord op wie zeiden: de rijken gaan met de beloningen strijken.' },
  { narrator: '', text: 'أخشى عليكم أن تبسط عليكم الدنيا كما بسطت على من كان قبلكم، فتنافسوها كما تنافسوها، وتهلككم كما أهلكتهم', takhrij: 'رواه البخاري ومسلم', note: 'في ذم التنافس على الدنيا.', pages: [60], nl: 'Ik vrees voor jullie dat deze wereld voor jullie wordt uitgespreid zoals ze werd uitgespreid voor wie vóór jullie waren, dat jullie erom wedijveren zoals zij erom wedijverden, en dat ze jullie te gronde richt zoals ze hen te gronde richtte', nlNote: 'Over het afkeurenswaardige wedijveren om deze wereld.' },
  { narrator: 'أبو الدرداء', text: 'ألا أنبئكم بخير أعمالكم وأزكاها عند مليككم وأرفعها في درجاتكم، وخير لكم من إنفاق الذهب والورق، وخير لكم من أن تلقوا عدوكم فتضربوا أعناقهم ويضربوا أعناقكم؟ قالوا: بلى، قال: ذكر الله تعالى', takhrij: 'رواه أحمد والترمذي وابن ماجه وصححه الألباني', note: 'في فضل الذكر.', pages: [60], nl: 'Zal ik jullie niet vertellen wat de beste van jullie daden is, de zuiverste bij jullie Koning, die jullie rang het hoogst verheft, beter voor jullie dan goud en zilver uitgeven, en beter dan dat jullie de vijand ontmoeten en elkaar de nek slaan? Zij zeiden: "Zeker." Hij zei: "Het gedenken van Allah de Verhevene."', nlNote: 'Over de waarde van het gedenken van Allah.' },
  { narrator: 'أبو مالك الأشعري', text: 'الطهور شطر الإيمان، والحمد لله تملأ الميزان، وسبحان الله والحمد لله تملآن -أو تملأ- ما بين السماوات والأرض، والصلاة نور، والصدقة برهان، والصبر ضياء، والقرآن حجة لك أو عليك، كل الناس يغدو فبائع نفسه فمعتقها أو موبقها', takhrij: 'رواه مسلم', note: 'الحديث الخامس عشر.', pages: [62], nl: 'Reinheid is de helft van het geloof. Al-ḥamdu li-llāh vult de weegschaal. Subḥān Allāh en al-ḥamdu li-llāh vullen wat tussen de hemelen en de aarde is. Het gebed is licht, liefdadigheid is een bewijs, geduld is een fel licht, en de Koran is een argument voor of tegen jou. Ieder mens gaat ’s ochtends op pad en verkoopt zichzelf: hij bevrijdt zichzelf of richt zichzelf te gronde', nlNote: 'Hadith 15.' },
  { narrator: 'أبو هريرة', text: 'كل سلامى من الناس عليه صدقة، كل يوم تطلع فيه الشمس، تعدل بين الاثنين صدقة، وتعين الرجل في دابته فتحمله عليها أو ترفع له عليها متاعه صدقة، والكلمة الطيبة صدقة، وكل خطوة تمشيها إلى الصلاة صدقة، وتميط الأذى عن الطريق صدقة', takhrij: 'متفق عليه', note: 'الحديث السادس عشر، ولمسلم: «ويجزئ من ذلك ركعتان يركعهما من الضحى».', pages: [66], nl: 'Op elk gewricht van de mens rust liefdadigheid, elke dag waarop de zon opkomt. Rechtvaardig bemiddelen tussen twee mensen is liefdadigheid; iemand helpen met zijn rijdier, door hem erop te helpen of zijn bagage erop te tillen, is liefdadigheid; een goed woord is liefdadigheid; elke stap die je naar het gebed zet is liefdadigheid; en iets schadelijks van de weg halen is liefdadigheid', nlNote: 'Hadith 16; bij Muslim: "en twee rakʿa’s in de voormiddag (ḍuḥā) volstaan daarvoor".' },
  { narrator: '', text: 'خلق الإنسان على ستين وثلاثمائة مفصل، على كل مفصل صدقة', takhrij: 'عند مسلم', note: 'في بيان معنى «سلامى».', pages: [66], nl: 'De mens is geschapen met driehonderdzestig gewrichten; op elk gewricht rust liefdadigheid', nlNote: 'Ter uitleg van het woord sulāmā.' },
  { narrator: 'الحسن بن علي', text: 'دع ما يريبك إلى ما لا يريبك', takhrij: 'رواه الترمذي وقال: حديث حسن صحيح', note: 'الحديث السابع عشر، من رواية أبي الحوراء السعدي عن الحسن.', pages: [70], nl: 'Laat wat je doet twijfelen voor wat je niet doet twijfelen', nlNote: 'Hadith 17, via Abū l-Ḥawrāʾ as-Saʿdī van al-Ḥasan.' }
]

const TAKHRIJ_NL = { 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)', 'رواه مسلم': 'Muslim', 'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'رواه أحمد والترمذي وابن ماجه وصححه الألباني': 'Aḥmad, at-Tirmidhī en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ', 'عند مسلم': 'Muslim', 'رواه الترمذي وقال: حديث حسن صحيح': 'at-Tirmidhī, die zei: ḥasan ṣaḥīḥ' }
const NARRATOR_NL = { 'عدي بن حاتم': 'ʿAdī ibn Ḥātim', 'أبو ذر': 'Abū Dharr', 'أبو الدرداء': 'Abū d-Dardāʾ', 'أبو مالك الأشعري': 'Abū Mālik al-Ashʿarī', 'أبو هريرة': 'Abū Hurayra', 'الحسن بن علي': 'al-Ḥasan ibn ʿAlī' }

const PERSONS = [
  ['adi-ibn-hatim', 'text', [54], 'راوي الحديث الثالث عشر؛ ابن حاتم الطائي المضروب به المثل في الجود، كان نصرانيًّا ثم أسلم، ذهبت عيناه في الجمل وصفين (ت ٦٦هـ).', 'Overleveraar van hadith 13; zoon van Ḥātim aṭ-Ṭāʾī, spreekwoordelijk om zijn vrijgevigheid; was christen en werd moslim, verloor zijn ogen bij al-Jamal en Ṣiffīn (overl. 66 AH).'],
  ['abu-dharr', 'text', [58], 'راوي الحديث الرابع عشر؛ جندب بن جنادة، رابع من أسلم وقيل خامس، توفي بالربذة (ت ٣٢هـ).', 'Overleveraar van hadith 14; Jundub ibn Junāda, de vierde (of vijfde) die moslim werd, overleden in ar-Rabadha (32 AH).'],
  ['abu-ad-darda', 'text', [60], 'راوي حديث فضل الذكر.', 'Overleveraar van de hadith over de waarde van het gedenken.'],
  ['abu-malik-al-ashari', 'text', [62], 'راوي الحديث الخامس عشر؛ كعب بن عاصم، قدم في السفينة مع الأشعريين (ت ١٨هـ).', 'Overleveraar van hadith 15; Kaʿb ibn ʿĀṣim, kwam met de Ashʿarieten per schip (overl. 18 AH).'],
  ['abu-hurayra', 'text', [66], 'راوي الحديث السادس عشر.', 'Overleveraar van hadith 16.'],
  ['al-hasan-ibn-ali', 'text', [70], 'راوي الحديث السابع عشر؛ سبط رسول الله ﷺ وريحانته، ولي الخلافة أشهرًا ثم تنازل لمعاوية (ت ٥٠هـ).', 'Overleveraar van hadith 17; kleinzoon van de Boodschapper ﷺ, was enkele maanden kalief en trad af ten gunste van Muʿāwiya (overl. 50 AH).'],
  ['ibn-masud', 'text', [58], 'صلى على أبي ذر في النفر الذين شهدوا موته.', 'Verrichtte het gebed over Abū Dharr met de groep die bij zijn dood aanwezig was.'],
  ['ibn-hajar-al-asqalani', 'text', [56], 'قال: في الحديث الحث على الصدقة بما قل وبما جل، وألا يحتقر ما يتصدق به.', 'Zei: de hadith spoort aan tot liefdadigheid, klein of groot, en om niets te min te vinden om te geven.'],
  ['al-albani', 'takhrij', [60], 'صحح حديث أبي الدرداء في فضل الذكر.', 'Noemde de hadith van Abū d-Dardāʾ over het gedenken ṣaḥīḥ.'],
  ['ibn-rajab', 'text', [71], 'قال: معنى الحديث يرجع إلى الوقوف عند الشبهات واتقائها.', 'Zei: de hadith komt neer op stilstaan bij twijfelachtige zaken en ze vermijden.'],
  ['al-khattabi', 'text', [71], 'قال: كل ما شككت فيه فالورع اجتنابه.', 'Zei: bij alles waaraan je twijfelt, is vermijden de vroomheid.'],
  ['aisha', 'text', [71], 'روت خبر غلام أبي بكر الذي أطعمه من كسب الكهانة.', 'Vertelde over de slaaf van Abū Bakr die hem te eten gaf van verdienste uit waarzeggerij.'],
  ['abu-bakr-as-siddiq', 'text', [71], 'قاء ما في بطنه لما علم أن طعامه من كسب الكهانة.', 'Braakte zijn eten uit toen hij hoorde dat het van verdienste uit waarzeggerij kwam.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'الأحاديث ١٣–١٧',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'كلام الله لعباده يوم القيامة بلا ترجمان والحث على الصدقة ولو بشق تمرة، وأبواب الصدقة الميسورة للفقراء، وفضل الطهور والذكر والصلاة والصدقة والصبر والقرآن، وصدقة المفاصل كل يوم، وترك ما يريب إلى ما لا يريب.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'خمسة أحاديث في ستة دروس؛ شرح الحديث الخامس عشر يمتد إلى الدرس السادس عشر.',
    root: { label: 'الأحاديث ١٣–١٧', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'سيكلمه الله', sub: 'الحديث ١٣', page: 54, children: ['صفة الكلام', 'ولو بشق تمرة', 'الكلمة الطيبة'] },
      { label: 'أوليس قد جعل الله لكم ما تصدقون', sub: 'الحديث ١٤', page: 58, children: ['الذكر صدقة', 'التنافس المحمود', 'القياس'] },
      { label: 'الطهور شطر الإيمان', sub: 'الحديث ١٥', page: 62, children: ['الميزان', 'الصلاة نور', 'الصبر ضياء'] },
      { label: 'كل سلامى عليه صدقة', sub: 'الحديث ١٦', page: 66, children: ['أبواب الصدقة', 'ركعتا الضحى'] },
      { label: 'دع ما يريبك', sub: 'الحديث ١٧', page: 70, children: ['الورع', 'اليقين لا يزول بالشك'] }
    ]
  },
  points: [
    { text: 'الحديث صريح في إثبات صفة الكلام لله، يكلم عباده يوم القيامة بكلام مسموع على وجه يليق به، ردًّا على الجهمية والمعتزلة.', page: 55 },
    { text: 'لا يحتقر المرء ما يتصدق به، فاليسير من الصدقة يستر من النار، والكلمة الطيبة سبب للنجاة منها.', page: 56 },
    { text: 'شكوى الفقراء كانت غبطة لا حسدًا، فدلهم النبي ﷺ على أبواب خير لا تكلف شيئًا.', page: 59 },
    { text: 'التنافس في أمور الآخرة محمود، والتنافس على الدنيا سبب الهلاك.', page: 60 },
    { text: 'المباح يصير قربة بالنية الصالحة، والاكتفاء بالحلال عن الحرام يجعله صدقة.', page: 60 },
    { text: 'الميزان حسي له كفتان على مذهب أهل السنة، خلافًا للمعتزلة الذين جعلوه كناية عن العدل.', page: 64 },
    { text: 'إذا كانت إماطة الأذى الحسي صدقة فإماطة الأذى المعنوي ببيان البدع والمنكرات أبلغ.', page: 68 },
    { text: '«دع ما يريبك» أصل في الورع، ودليل على قاعدة «اليقين لا يزول بالشك».', page: 72 }
  ],
  terms: [
    { term: 'ترجمان', translit: 'tarjumān', meaning: 'المعبر عن لسان بلسان آخر.', explanation: 'بفتح التاء وضمها.', notes: [], page: 54 },
    { term: 'أيمن منه / أشأم منه', translit: 'aymana minhu / ashʾama minhu', meaning: 'عن يمينه / عن شماله.', explanation: '', notes: [], page: 54 },
    { term: 'شق تمرة', translit: 'shiqq tamra', meaning: 'نصفها، مبالغة في القلة.', explanation: '', notes: [], page: 55 },
    { term: 'الدثور', translit: 'ad-duthūr', meaning: 'جمع دثر: المال الكثير.', explanation: 'وقيل الكثير من كل شيء.', notes: [], page: 58 },
    { term: 'البضع', translit: 'al-buḍʿ', meaning: 'يطلق على الجماع وعلى الفرج نفسه.', explanation: '', notes: [], page: 58 },
    { term: 'الطهور', translit: 'aṭ-ṭuhūr / aṭ-ṭahūr', meaning: 'بالضم: فعل التطهر، وبالفتح: الماء الذي يتطهر به.', explanation: 'ومثله السحور والفطور.', notes: [], page: 62 },
    { term: 'شطر', translit: 'shaṭr', meaning: 'نصف.', explanation: '', notes: [], page: 63 },
    { term: 'برهان', translit: 'burhān', meaning: 'الشعاع الذي يلي وجه الشمس، ومنه سميت الحجة القاطعة برهانًا.', explanation: 'فالصدقة برهان على صحة الإيمان.', notes: [], page: 63 },
    { term: 'سلامى', translit: 'sulāmā', meaning: 'المفاصل، وهي ستون وثلاثمائة.', explanation: '', notes: [], page: 66 },
    { term: 'تميط الأذى', translit: 'tumīṭ al-adhā', meaning: 'تزيل ما يتأذى به الناس من حجر أو قمامة.', explanation: '', notes: [], page: 67 },
    { term: 'ما يريبك', translit: 'mā yarībuk', meaning: 'ما يلحقك به ريب وشك وقلق.', explanation: '', notes: [], page: 70 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'قسما الصدقات التي أرشد إليها الفقراء',
      intro: 'كما في فوائد الحديث الرابع عشر.',
      columns: ['أمثلته'],
      rows: [
        { label: 'من باب العبادات', cells: ['التسبيح والتكبير والتحميد والتهليل'] },
        { label: 'من المباحات بالنية الصالحة', cells: ['قضاء الشهوة بقصد إعفاف النفس والأهل وتحصيل الأولاد'] }
      ],
      page: 60
    },
    {
      type: 'compare',
      title: 'جمل الحديث الخامس عشر',
      intro: 'كما في شرح المفردات.',
      columns: ['معناها'],
      rows: [
        { label: 'الصلاة نور', cells: ['تنهى عن الفحشاء والمنكر، ونور في الحياة والقبر وعلى الصراط'] },
        { label: 'الصدقة برهان', cells: ['دليل على صحة الإيمان'] },
        { label: 'الصبر ضياء', cells: ['على الطاعة وعن المعصية وعلى المكاره؛ وفي الضياء حرارة لما في الصبر من تعب'] },
        { label: 'القرآن حجة لك أو عليك', cells: ['لك إن تلوته وعملت به، وإلا فعليك'] },
        { label: 'فمعتقها أو موبقها', cells: ['يبيع نفسه لله فيعتقها، أو للشيطان والهوى فيهلكها'] }
      ],
      page: 63
    },
    {
      type: 'compare',
      title: 'قاعدة اليقين لا يزول بالشك',
      intro: 'أمثلة الكتاب في فوائد الحديث السابع عشر.',
      columns: ['المتيقن', 'المشكوك فيه', 'الحكم'],
      rows: [
        { label: '١', cells: ['الطهارة', 'الحدث', 'الطهارة'] },
        { label: '٢', cells: ['الحدث', 'الطهارة', 'الحدث'] },
        { label: '٣', cells: ['طهارة العين', 'نجاستها', 'الطهارة'] },
        { label: '٤', cells: ['نجاسة العين', 'طهارتها', 'النجاسة'] }
      ],
      page: 72
    }
  ],
  sections: [
    { title: 'مذهب أهل السنة في صفة الكلام', text: 'يتكلم الله إذا شاء متى شاء بما شاء، كلم موسى ويكلم عباده يوم القيامة، والقرآن كلامه غير مخلوق، حروفه ومعانيه.', page: 55 },
    { title: 'من الكلمة الطيبة', text: 'قراءة القرآن والتسبيح والتهليل والأمر بالمعروف والنهي عن المنكر وتعلم العلم وتعليمه؛ وعكسها الكلمة السيئة تنفر القلوب.', page: 56 },
    { title: 'القياس في الحديث الرابع عشر', text: '«أرأيتم لو وضعها في حرام...» قياس عكس: ترتب الأجر على وضع الشهوة في الحلال كما يترتب الإثم في الحرام، وفيه أن القياس حجة.', page: 60 },
    { title: 'الطهارة قسمان', text: 'بدنية من الحدثين والنجاسات، ومعنوية بطهارة القلب بالإخلاص والتخلص من الحقد والحسد.', page: 62 },
    { title: 'الإيمان يتبعض', text: 'بعضه فعل وبعضه قول وبعضه ترك، كما يدل عليه «الطهور شطر الإيمان».', page: 64 },
    { title: 'وقت صلاة الضحى', text: 'من ارتفاع الشمس قيد رمح (نحو ربع ساعة بعد الشروق) إلى قبيل الزوال بنحو ربع ساعة، وأفضلها حين ترمض الفصال، وأقلها ركعتان ولا حد لأكثرها.', page: 68 },
    { title: 'الرجوع إلى القلب عند الاشتباه', text: 'نفس المؤمن تطمئن إلى الصدق وتنفر من الكذب؛ وهذا لأصحاب القلوب الصافية، لا لمن أظلمت قلوبهم بالمعاصي.', page: 72 },
    { title: 'من ورع السلف (للاطلاع)', text: 'ذكر الكتاب خبر عائشة أن أبا بكر قاء ما أكله لما علم أنه من كسب كهانة في الجاهلية، أخرجه البخاري.', page: 71 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أبواب الصدقة في الحديث السادس عشر', items: ['العدل بين الاثنين', 'إعانة الرجل في دابته', 'الكلمة الطيبة', 'كل خطوة إلى الصلاة', 'إماطة الأذى عن الطريق', 'ويجزئ ركعتان من الضحى'], page: 66, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع الصبر المحبوب', items: ['على طاعة الله', 'عن معصيته', 'على النائبات وأنواع المكاره'], page: 63, origin: 'boek' },
    { kind: 'onderscheid', title: 'الميزان: حسي أم معنوي', items: ['المعتزلة: معنوي، كناية عن إقامة العدل.', 'أهل السنة: حسي له كفتان ولسان، وهو الصحيح لدلالة النصوص.'], page: 64, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'يكلم الله كل عبد يوم القيامة بلا ترجمان، فاتقوا النار ولو بشق تمرة.',
    'للفقير أبواب صدقة ميسورة: الذكر والأمر بالمعروف والنهي عن المنكر.',
    'الطهور شطر الإيمان، والصلاة نور، والصدقة برهان، والصبر ضياء.',
    'على كل مفصل صدقة كل يوم، ويجزئ عنها ركعتا الضحى.',
    'دع ما يريبك إلى ما لا يريبك، واليقين لا يزول بالشك.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'على من يرد الحديث الثالث عشر في إثبات صفة الكلام؟', options: ['الجهمية والمعتزلة', 'الخوارج', 'المرجئة', 'الرافضة'], answer: 0, explain: 'كما في الفوائد.', page: 55 },
    { type: 'tf', q: 'كانت شكوى الفقراء في الحديث الرابع عشر حسدًا للأغنياء.', options: ['صواب', 'خطأ'], answer: 1, explain: 'بل غبطة لا حسد ولا اعتراض.', page: 59 },
    { type: 'mc', q: 'ما نوع القياس في «أرأيتم لو وضعها في حرام»؟', options: ['قياس عكس', 'قياس شبه', 'قياس أولى', 'لا قياس فيه'], answer: 0, explain: 'كما في الفائدة الرابعة.', page: 60 },
    { type: 'mc', q: 'ما الصحيح في الميزان عند أهل السنة؟', options: ['حسي له كفتان ولسان', 'كناية عن العدل', 'لا يوزن فيه شيء', 'لا يعلم أحسي هو أم معنوي'], answer: 0, explain: 'لدلالة النصوص.', page: 64 },
    { type: 'tf', q: 'الصدقة على المفاصل في الحديث السادس عشر واجبة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'صدقة ندب وترغيب لا إيجاب.', page: 66 },
    { type: 'mc', q: 'تيقن الطهارة وشك في الحدث، فما حكمه؟', options: ['هو على طهارة', 'محدث', 'يجب الوضوء احتياطًا', 'يعيد الصلاة'], answer: 0, explain: 'اليقين لا يزول بالشك.', page: 72 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٥٧ و٦١ و٦٥ و٦٩ و٧٣. الشرح الإجمالي للأحاديث في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Hadith 13–17',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Allah spreekt Zijn dienaren op de Opstandingsdag zonder tolk, en de aansporing tot liefdadigheid al is het met een halve dadel; makkelijke vormen van liefdadigheid voor de armen; de waarde van reinheid, gedenken, gebed, liefdadigheid, geduld en de Koran; de dagelijkse liefdadigheid voor elk gewricht; en laten wat je doet twijfelen.',
  source: { ...source, label: 'Kitāb al-Ḥadīth (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'Vijf hadith in zes lessen; de uitleg van hadith 15 loopt door in les 16.',
    root: { label: 'Hadith 13–17', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Allah zal tot hem spreken', sub: 'hadith 13', page: 54, children: ['de eigenschap spreken', 'al is het met een halve dadel', 'het goede woord'] },
      { label: 'Heeft Allah jullie niet iets gegeven?', sub: 'hadith 14', page: 58, children: ['gedenken is liefdadigheid', 'lofwaardig wedijveren', 'analogie'] },
      { label: 'Reinheid is de helft van het geloof', sub: 'hadith 15', page: 62, children: ['de weegschaal', 'het gebed is licht', 'geduld is fel licht'] },
      { label: 'Op elk gewricht liefdadigheid', sub: 'hadith 16', page: 66, children: ['vormen van liefdadigheid', 'twee rakʿa’s ḍuḥā'] },
      { label: 'Laat wat je doet twijfelen', sub: 'hadith 17', page: 70, children: ['vroomheid', 'zekerheid wijkt niet voor twijfel'] }
    ]
  },
  points: [
    { text: 'De hadith bevestigt duidelijk de eigenschap spreken van Allah: Hij spreekt Zijn dienaren op de Opstandingsdag met hoorbare spraak, op een wijze die Hem past; een weerlegging van de Jahmiyya en de Muʿtazila.', page: 55 },
    { text: 'Vind niets te min om te geven: een beetje liefdadigheid beschermt tegen het Vuur, en een goed woord is een middel tot redding.', page: 56 },
    { text: 'De klacht van de armen was benijden in goede zin, geen afgunst; de Profeet ﷺ wees hun deuren van het goede die niets kosten.', page: 59 },
    { text: 'Wedijveren om het hiernamaals is lofwaardig; wedijveren om deze wereld leidt tot ondergang.', page: 60 },
    { text: 'Iets toegestaans wordt met een goede intentie een daad van nabijheid; genoeg hebben aan het toegestane in plaats van het verbodene maakt het tot liefdadigheid.', page: 60 },
    { text: 'Volgens Ahl as-Sunna is de weegschaal tastbaar, met twee schalen; anders dan de Muʿtazila, die er een beeld voor rechtvaardigheid in zien.', page: 64 },
    { text: 'Als het weghalen van tastbare schade liefdadigheid is, dan is het weghalen van geestelijke schade, door vernieuwingen en kwaad uit te leggen, nog sterker.', page: 68 },
    { text: '"Laat wat je doet twijfelen" is een grondslag van vroomheid en een bewijs voor de regel "zekerheid wijkt niet voor twijfel".', page: 72 }
  ],
  terms: [
    { term: 'ترجمان', translit: 'tarjumān', meaning: 'Tolk: wie de ene taal in de andere weergeeft.', explanation: 'Met a of u op de t.', notes: [], page: 54 },
    { term: 'أيمن منه / أشأم منه', translit: 'aymana minhu / ashʾama minhu', meaning: 'Aan zijn rechterkant / aan zijn linkerkant.', explanation: '', notes: [], page: 54 },
    { term: 'شق تمرة', translit: 'shiqq tamra', meaning: 'Een halve dadel: om aan te geven hoe weinig het mag zijn.', explanation: '', notes: [], page: 55 },
    { term: 'الدثور', translit: 'ad-duthūr', meaning: 'Meervoud van dathr: veel bezit.', explanation: 'Ook gezegd: veel van iets.', notes: [], page: 58 },
    { term: 'البضع', translit: 'al-buḍʿ', meaning: 'Gebruikt voor de geslachtsgemeenschap en voor het geslachtsdeel zelf.', explanation: '', notes: [], page: 58 },
    { term: 'الطهور', translit: 'aṭ-ṭuhūr / aṭ-ṭahūr', meaning: 'Met u: de handeling van het reinigen; met a: het water waarmee je je reinigt.', explanation: 'Net zo bij saḥūr/suḥūr en faṭūr/fuṭūr.', notes: [], page: 62 },
    { term: 'شطر', translit: 'shaṭr', meaning: 'De helft.', explanation: '', notes: [], page: 63 },
    { term: 'برهان', translit: 'burhān', meaning: 'De straal vlak bij de zon; daarom heet een sluitend bewijs burhān.', explanation: 'Liefdadigheid is dus een bewijs van oprecht geloof.', notes: [], page: 63 },
    { term: 'سلامى', translit: 'sulāmā', meaning: 'De gewrichten; het zijn er driehonderdzestig.', explanation: '', notes: [], page: 66 },
    { term: 'تميط الأذى', translit: 'tumīṭ al-adhā', meaning: 'Weghalen waar mensen last van hebben, zoals een steen of afval.', explanation: '', notes: [], page: 67 },
    { term: 'ما يريبك', translit: 'mā yarībuk', meaning: 'Wat je twijfel, onzekerheid en onrust bezorgt.', explanation: '', notes: [], page: 70 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Twee soorten liefdadigheid voor de armen',
      intro: 'Zoals in de lessen uit hadith 14.',
      columns: ['Voorbeelden'],
      rows: [
        { label: 'Aanbidding', cells: ['tasbīḥ, takbīr, taḥmīd en tahlīl'] },
        { label: 'Toegestane zaken met goede intentie', cells: ['de begeerte vervullen om zichzelf en zijn vrouw kuis te houden en kinderen te krijgen'] }
      ],
      page: 60
    },
    {
      type: 'compare',
      title: 'De zinnen van hadith 15',
      intro: 'Zoals in de woordverklaring.',
      columns: ['Betekenis'],
      rows: [
        { label: 'Het gebed is licht', cells: ['houdt af van zedeloosheid en kwaad; licht in het leven, in het graf en op de brug'] },
        { label: 'Liefdadigheid is een bewijs', cells: ['een bewijs van oprecht geloof'] },
        { label: 'Geduld is fel licht', cells: ['bij gehoorzaamheid, tegen zonde en bij tegenslag; fel licht heeft warmte, omdat geduld vermoeit'] },
        { label: 'De Koran is een argument voor of tegen jou', cells: ['voor jou als je hem reciteert en ernaar handelt, anders tegen jou'] },
        { label: 'Bevrijdt zichzelf of richt zichzelf te gronde', cells: ['verkoopt zichzelf aan Allah en bevrijdt zich, of aan de duivel en de begeerte en gaat ten onder'] }
      ],
      page: 63
    },
    {
      type: 'compare',
      title: 'De regel: zekerheid wijkt niet voor twijfel',
      intro: 'De voorbeelden van het boek bij hadith 17.',
      columns: ['Zeker', 'Twijfel', 'Oordeel'],
      rows: [
        { label: '1', cells: ['rein', 'onrein geworden', 'rein'] },
        { label: '2', cells: ['onrein geworden', 'gereinigd', 'onrein'] },
        { label: '3', cells: ['ding is rein', 'onzuiver?', 'rein'] },
        { label: '4', cells: ['ding is onzuiver', 'rein?', 'onzuiver'] }
      ],
      page: 72
    }
  ],
  sections: [
    { title: 'Ahl as-Sunna over de eigenschap spreken', text: 'Allah spreekt wanneer Hij wil, waarover Hij wil; Hij sprak tot Mūsā en spreekt Zijn dienaren op de Opstandingsdag, en de Koran is Zijn spraak, niet geschapen, letters en betekenissen.', page: 55 },
    { title: 'Wat een goed woord is', text: 'Koran reciteren, tasbīḥ, tahlīl, het goede gebieden en het slechte verbieden, kennis leren en onderwijzen; het tegendeel, een slecht woord, stoot harten af.', page: 56 },
    { title: 'De analogie in hadith 14', text: '"Als hij haar op een verboden manier vervulde..." is een omgekeerde analogie: beloning voor het toegestane zoals zonde voor het verbodene; het laat zien dat analogie een geldig bewijs is.', page: 60 },
    { title: 'Twee soorten reinheid', text: 'Lichamelijk, van de kleine en grote onreinheid en van vuil; en innerlijk, het hart zuiveren met oprechtheid en het loslaten van wrok en afgunst.', page: 62 },
    { title: 'Geloof bestaat uit delen', text: 'Deels daden, deels woorden en deels nalaten, zoals "reinheid is de helft van het geloof" aangeeft.', page: 64 },
    { title: 'De tijd van het ḍuḥā-gebed', text: 'Van wanneer de zon een speerlengte is gerezen (ongeveer een kwartier na zonsopgang) tot ongeveer een kwartier vóór het middaguur; het best als de hitte toeneemt; minimaal twee rakʿa’s, zonder maximum.', page: 68 },
    { title: 'Bij twijfel naar het hart', text: 'De ziel van de gelovige is gerust bij waarheid en schrikt terug voor leugen; dit geldt voor zuivere harten, niet voor wie zijn hart door zonden heeft verduisterd.', page: 72 },
    { title: 'Vroomheid van de voorgangers (ter kennisname)', text: 'Het boek noemt het bericht van ʿĀʾisha dat Abū Bakr zijn eten uitbraakte toen hij hoorde dat het van waarzeggerij uit de jāhiliyya kwam; overgeleverd door al-Bukhārī.', page: 71 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Vormen van liefdadigheid in hadith 16', items: ['rechtvaardig bemiddelen tussen twee mensen', 'iemand helpen met zijn rijdier', 'een goed woord', 'elke stap naar het gebed', 'iets schadelijks van de weg halen', 'twee rakʿa’s ḍuḥā volstaan'], page: 66, origin: 'boek' },
    { kind: 'opsomming', title: 'Lofwaardig geduld', items: ['bij gehoorzaamheid aan Allah', 'tegen ongehoorzaamheid', 'bij rampen en wat onaangenaam is'], page: 63, origin: 'boek' },
    { kind: 'onderscheid', title: 'De weegschaal: tastbaar of beeldspraak', items: ['Muʿtazila: beeldspraak voor het vestigen van rechtvaardigheid.', 'Ahl as-Sunna: tastbaar met twee schalen en een tong; dat is juist volgens de teksten.'], page: 64, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Allah spreekt elke dienaar op de Opstandingsdag zonder tolk; bescherm je tegen het Vuur, al is het met een halve dadel.',
    'Ook de arme heeft makkelijke vormen van liefdadigheid: gedenken, het goede gebieden en het slechte verbieden.',
    'Reinheid is de helft van het geloof; het gebed is licht, liefdadigheid een bewijs, geduld fel licht.',
    'Op elk gewricht rust elke dag liefdadigheid; twee rakʿa’s ḍuḥā volstaan.',
    'Laat wat je doet twijfelen; zekerheid wijkt niet voor twijfel.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie weerlegt hadith 13 met het bevestigen van de eigenschap spreken?', options: ['de Jahmiyya en de Muʿtazila', 'de Khawārij', 'de Murjiʾa', 'de Rāfiḍa'], answer: 0, explain: 'Zoals in de lessen uit de hadith.', page: 55 },
    { type: 'tf', q: 'De klacht van de armen in hadith 14 was afgunst op de rijken.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het was benijden in goede zin, geen afgunst of bezwaar.', page: 59 },
    { type: 'mc', q: 'Welke analogie zit in "als hij haar op een verboden manier vervulde"?', options: ['een omgekeerde analogie', 'een gelijkenis-analogie', 'een a-fortiori-analogie', 'geen analogie'], answer: 0, explain: 'Zoals in les 4 van de hadith.', page: 60 },
    { type: 'mc', q: 'Wat is volgens Ahl as-Sunna juist over de weegschaal?', options: ['tastbaar met twee schalen en een tong', 'beeldspraak voor rechtvaardigheid', 'er wordt niets gewogen', 'onbekend of hij tastbaar is'], answer: 0, explain: 'Volgens de teksten.', page: 64 },
    { type: 'tf', q: 'De liefdadigheid voor de gewrichten in hadith 16 is verplicht.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is aanbevolen en aangemoedigd, niet verplicht.', page: 66 },
    { type: 'mc', q: 'Iemand is zeker dat hij rein was en twijfelt of hij onrein werd. Wat is het oordeel?', options: ['hij is rein', 'hij is onrein', 'hij moet uit voorzorg de wassing doen', 'hij herhaalt zijn gebed'], answer: 0, explain: 'Zekerheid wijkt niet voor twijfel.', page: 72 }
  ]),
  note: 'Oefeningen van het boek op p. 57, 61, 65, 69 en 73. De algemene uitleg bij de hadith staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-hadith', chapter: '13', unit: 3, ar, nl }
