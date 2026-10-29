// Hoofdstukkaart bij التربية الإسلامية (١) الحقوق, eenheid 4: حقوق الزوجين (lessen 13–16, boek p. 46–55).
// Het boek heeft zelf geen eenheden; deze indeling in zes thema's is van de samenvatter.
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Les 14 (p. 48–49) is in het boek "alleen ter kennisname".
// Niet in het hadith-tabblad: de hadith over neerknielen voor de echtgenoot (p. 46), omdat de bron nog
// gecontroleerd moet worden; dat het recht van de man na dat van Allah een van de grootste is, staat wel op de kaart.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (١) الحقوق، سلسلة زاد العلمية',
  pages: '46–55',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'والذي نفسي بيده لا تؤدي المرأة حق ربها حتى تؤدي حق زوجها، حتى لو سألها نفسها وهي على قتب لم تمنعه', takhrij: 'رواه ابن ماجه وحسنه الألباني', note: '', pages: [47], nl: 'Bij Hem in Wiens hand mijn ziel is: een vrouw vervult het recht van haar Heer niet totdat zij het recht van haar man vervult; zelfs als hij om haar vraagt terwijl zij op een kameelzadel zit, weigert zij hem niet', nlNote: '' },
  { narrator: '', text: 'إذا صلت المرأة خمسها، وصامت شهرها، وحصنت فرجها، وأطاعت زوجها، قيل لها: ادخلي الجنة من أي الأبواب شئت', takhrij: 'رواه أحمد وصححه الألباني', note: '', pages: [47], nl: 'Als een vrouw haar vijf gebeden verricht, haar maand vast, haar kuisheid bewaart en haar man gehoorzaamt, wordt tegen haar gezegd: ga het Paradijs binnen door welke poort je wilt', nlNote: '' },
  { narrator: '', text: 'إذا دعا الرجل امرأته إلى فراشه فأبت، فبات غضبان عليها، لعنتها الملائكة حتى تصبح', takhrij: 'رواه البخاري ومسلم', note: 'ما لم يكن ضرر تعذر به.', pages: [47], nl: 'Als een man zijn vrouw naar bed roept en zij weigert, zodat hij de nacht boos op haar doorbrengt, vervloeken de engelen haar tot de ochtend', nlNote: 'Tenzij er schade is waardoor zij verontschuldigd is.' },
  { narrator: 'عائشة', text: 'فقلت: ائذن لي إلى أبوي، قالت: وأنا حينئذ أريد أن أستيقن الخبر من قبلهما، فأذن لي رسول الله ﷺ', takhrij: 'متفق عليه', note: 'في حادثة الإفك؛ دليل على ألا تخرج إلا بإذنه.', pages: [47], nl: 'Ik zei: geef mij toestemming om naar mijn ouders te gaan; ik wilde toen het nieuws van hen zeker weten. De Boodschapper van Allah ﷺ gaf mij toestemming', nlNote: 'Bij de laster over ʿĀʾisha; een bewijs dat zij alleen met zijn toestemming uitgaat.' },
  { narrator: '', text: 'لا يحل للمرأة أن تصوم وزوجها شاهد إلا بإذنه، ولا تأذن في بيته إلا بإذنه', takhrij: 'متفق عليه', note: 'في صوم التطوع.', pages: [48, 49], nl: 'Het is een vrouw niet toegestaan te vasten terwijl haar man aanwezig is, behalve met zijn toestemming, en zij laat niemand in zijn huis toe behalve met zijn toestemming', nlNote: 'Over vrijwillig vasten.' },
  { narrator: '', text: 'ثلاثة لا تسأل عنهم ... وامرأة غاب عنها زوجها وقد كفاها مؤنة الدنيا فتبرجت بعده', takhrij: 'رواه أحمد وصححه الألباني', note: FYI, pages: [48], nl: 'Naar drie mensen hoef je niet te vragen ... en een vrouw van wie de man afwezig is, terwijl hij in haar levensonderhoud voorzag, en die zich na zijn vertrek opzichtig vertoont', nlNote: FYI_NL },
  { narrator: '', text: 'لا تنفق امرأة شيئًا من بيت زوجها إلا بإذن زوجها، قيل: يا رسول الله ولا الطعام؟ قال: ذلك أفضل أموالنا', takhrij: 'رواه الترمذي وحسنه', note: 'في حفظ ماله. ' + FYI, pages: [48], nl: 'Een vrouw geeft niets uit het huis van haar man weg zonder zijn toestemming. Men vroeg: ook geen voedsel? Hij zei: dat is ons beste bezit', nlNote: 'Zijn bezit bewaren. ' + FYI_NL },
  { narrator: '', text: 'والمرأة راعية على أهل بيت زوجها وولده وهي مسؤولة عنهم', takhrij: 'رواه البخاري ومسلم', note: 'في حفظ أولادها. ' + FYI, pages: [48], nl: 'De vrouw is herderin over het gezin van haar man en over zijn kinderen, en wordt over hen ondervraagd', nlNote: 'Haar kinderen bewaren. ' + FYI_NL },
  { narrator: '', text: 'وأريت النار فلم أر منظرًا كاليوم قط أفظع، ورأيت أكثر أهلها النساء، قالوا: بم يا رسول الله؟ قال: بكفرهن، قيل: يكفرن بالله؟ قال: يكفرن العشير، ويكفرن الإحسان، لو أحسنت إلى إحداهن الدهر كله ثم رأت منك شيئًا قالت: ما رأيت منك خيرًا قط', takhrij: 'رواه البخاري ومسلم', note: FYI, pages: [49], nl: 'Mij werd het Vuur getoond, en nooit zag ik een gruwelijker aanblik; ik zag dat de meeste bewoners vrouwen waren. Men vroeg: waarom? Hij zei: om hun ondankbaarheid. Men vroeg: zijn zij ondankbaar tegenover Allah? Hij zei: zij zijn ondankbaar tegenover hun echtgenoot en tegenover goedheid; als je een van hen je hele leven goed behandelt en zij ziet dan iets van je, zegt zij: ik heb nooit iets goeds van je gezien', nlNote: FYI_NL },
  { narrator: '', text: 'ثلاثة لا تقبل منهم صلاة، ولا تصعد إلى السماء، ولا تجاوز رؤوسهم ... وامرأة دعاها زوجها من الليل فأبت عليه', takhrij: 'رواه ابن خزيمة وصححه الألباني', note: FYI, pages: [49], nl: 'Van drie mensen wordt het gebed niet aanvaard, het stijgt niet op naar de hemel en komt niet boven hun hoofd uit ... en een vrouw die door haar man in de nacht geroepen wordt en weigert', nlNote: FYI_NL },
  { narrator: '', text: 'والذي نفسي بيده ما من رجل يدعو امرأته إلى فراشها فتأبى عليه إلا كان الذي في السماء ساخطًا عليها حتى يرضى عنها', takhrij: 'أخرجه مسلم', note: '', pages: [50], nl: 'Bij Hem in Wiens hand mijn ziel is: geen man roept zijn vrouw naar haar bed terwijl zij weigert, of Hij die in de hemel is, is boos op haar totdat haar man tevreden met haar is', nlNote: '' },
  { narrator: '', text: 'إذا باتت المرأة مهاجرة فراش زوجها لعنتها الملائكة حتى ترجع', takhrij: 'رواه البخاري ومسلم', note: '', pages: [50], nl: 'Als een vrouw de nacht doorbrengt terwijl zij het bed van haar man mijdt, vervloeken de engelen haar totdat zij terugkeert', nlNote: '' },
  { narrator: '', text: 'ألا إن لكم على نسائكم حقًا، ولنسائكم عليكم حقًا', takhrij: 'رواه أحمد والترمذي وصححه', note: '', pages: [51], nl: 'Jullie hebben een recht op jullie vrouwen, en jullie vrouwen hebben een recht op jullie', nlNote: '' },
  { narrator: '', text: 'فاتقوا الله في النساء، فإنكم أخذتموهن بأمان الله، واستحللتم فروجهن بكلمة الله', takhrij: 'أخرجه مسلم', note: '', pages: [51], nl: 'Vrees Allah wat de vrouwen betreft, want jullie hebben hen genomen onder de bescherming van Allah en zijn met hen getrouwd door het woord van Allah', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'دينار أنفقته في سبيل الله، ودينار أنفقته في رقبة، ودينار تصدقت به على مسكين، ودينار أنفقته على أهلك، أعظمها أجرًا الذي أنفقته على أهلك', takhrij: 'أخرجه مسلم', note: 'في النفقة.', pages: [52], nl: 'Een dinar die je op de weg van Allah uitgeeft, een dinar voor het vrijkopen van een slaaf, een dinar die je aan een arme geeft, en een dinar die je aan je gezin uitgeeft: de grootste beloning heeft die je aan je gezin uitgeeft', nlNote: 'Over het onderhoud.' },
  { narrator: 'أبو هريرة', text: 'استوصوا بالنساء، فإن المرأة خلقت من ضلع، وإن أعوج شيء في الضلع أعلاه، فإن ذهبت تقيمه كسرته، وإن تركته لم يزل أعوج، فاستوصوا بالنساء', takhrij: 'في الصحيحين', note: 'في احتمال أذاها والحلم عند طيشها.', pages: [53], nl: 'Behandel de vrouwen goed, want de vrouw is geschapen uit een rib, en het meest gebogen deel van de rib is het bovenste; probeer je het recht te zetten, dan breek je het, en laat je het, dan blijft het gebogen. Behandel de vrouwen dus goed', nlNote: 'Geduld met haar hebben.' },
  { narrator: 'جابر بن عبد الله', text: 'فهلا جارية تلاعبها وتلاعبك، وتضاحكها وتضاحكك', takhrij: 'رواه البخاري ومسلم', note: 'في ملاطفة الزوجة.', pages: [53], nl: 'Waarom niet een jonge vrouw, met wie je speelt en die met jou speelt, met wie je lacht en die met jou lacht?', nlNote: 'Vriendelijk en speels zijn met je vrouw.' },
  { narrator: 'معاوية بن حيدة القشيري', text: 'ولا تضرب الوجه، ولا تقبح', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', note: 'لما سأل عن حق الزوجة.', pages: [53], nl: 'Sla niet in het gezicht, en zeg niet dat zij lelijk is', nlNote: 'Toen hij vroeg naar het recht van de echtgenote.' },
  { narrator: '', text: 'من الغيرة ما يحب الله، ومنها ما يكره الله، فأما ما يحب الله فالغيرة في الريبة، وأما ما يكره فالغيرة في غير ريبة', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', note: '', pages: [54], nl: 'Er is jaloezie die Allah liefheeft en jaloezie die Allah haat. Die Hij liefheeft is jaloezie bij reële verdenking; die Hij haat is jaloezie zonder verdenking', nlNote: '' },
  { narrator: '', text: 'من كانت له امرأتان فمال إلى إحداهما، جاء يوم القيامة وشقه مائل', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', note: 'في العدل بين الزوجات.', pages: [54], nl: 'Wie twee vrouwen heeft en de voorkeur geeft aan een van hen, komt op de Dag der Opstanding met één zijde scheef', nlNote: 'Rechtvaardigheid tussen de echtgenotes.' },
  { narrator: 'جابر بن عبد الله', text: 'نهى رسول الله ﷺ أن يطرق الرجل أهله ليلًا يتخونهم أو يلتمس عثراتهم', takhrij: 'في الصحيحين واللفظ لمسلم', note: 'في عدم إساءة الظن بها.', pages: [54], nl: 'De Boodschapper van Allah ﷺ verbood dat een man ’s nachts onverwacht bij zijn gezin thuiskomt om hen te betrappen of hun fouten te zoeken', nlNote: 'Geen slechte gedachten over haar hebben.' }
]

const TAKHRIJ_NL = {
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s (al-Bukhārī en Muslim)', 'في الصحيحين واللفظ لمسلم': 'in de twee Ṣaḥīḥ’s; de bewoording van Muslim',
  'أخرجه مسلم': 'Muslim',
  'رواه ابن ماجه وحسنه الألباني': 'Ibn Māja; goed (ḥasan) volgens al-Albānī',
  'رواه أحمد وصححه الألباني': 'Aḥmad; authentiek volgens al-Albānī',
  'رواه الترمذي وحسنه': 'at-Tirmidhī, die hem goed (ḥasan) noemde',
  'رواه ابن خزيمة وصححه الألباني': 'Ibn Khuzayma; authentiek volgens al-Albānī',
  'رواه أحمد والترمذي وصححه': 'Aḥmad en at-Tirmidhī, die hem authentiek noemde',
  'رواه أحمد وأبو داود وصححه الألباني': 'Aḥmad en Abū Dāwūd; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'عائشة': 'ʿĀʾisha', 'أبو هريرة': 'Abū Hurayra', 'جابر بن عبد الله': 'Jābir ibn ʿAbdallāh', 'معاوية بن حيدة القشيري': 'Muʿāwiya ibn Ḥayda al-Qushayrī'
}

const PERSONS = [
  ['ahmad-ibn-hanbal', 'text', [46, 47, 48, 51, 53, 54], 'قال في امرأة لها زوج وأم مريضة: طاعة زوجها أوجب عليها من أمها؛ وأخرج أحاديث في الوحدة.', 'Zei over een vrouw met een man en een zieke moeder: haar man gehoorzamen is voor haar meer verplicht dan haar moeder; nam ook hadith van deze eenheid op.'],
  ['aisha', 'text', [47], 'استأذنت النبي ﷺ في الخروج إلى أبويها في حادثة الإفك.', 'Vroeg de Profeet ﷺ toestemming om naar haar ouders te gaan bij de laster over haar.'],
  ['abu-hurayra', 'text', [52, 53], 'روى فضل النفقة على الأهل و«استوصوا بالنساء».', 'Overleverde de waarde van uitgeven aan je gezin en "Behandel de vrouwen goed".'],
  ['jabir-ibn-abdallah', 'text', [53, 54], 'روى «فهلا جارية تلاعبها» والنهي عن طرق الأهل ليلًا.', 'Overleverde "Waarom niet een jonge vrouw met wie je speelt" en het verbod om ’s nachts onverwacht thuis te komen.'],
  ['muawiya-ibn-hayda', 'text', [53], 'سأل عن حق الزوجة فقيل له: ولا تضرب الوجه ولا تقبح.', 'Vroeg naar het recht van de echtgenote en kreeg te horen: sla niet in het gezicht en zeg niet dat zij lelijk is.'],
  ['an-nawawi', 'text', [53], 'ذكر شروط خروج المرأة إلى المسجد.', 'Noemde de voorwaarden waaronder een vrouw naar de moskee gaat.'],
  ['al-bukhari', 'takhrij', [47, 48, 49, 50, 53, 54], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [47, 48, 49, 50, 51, 52, 53, 54], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['ibn-maja', 'takhrij', [47], 'أخرج «لا تؤدي المرأة حق ربها حتى تؤدي حق زوجها».', 'Nam "Een vrouw vervult het recht van haar Heer niet totdat zij het recht van haar man vervult" op.'],
  ['at-tirmidhi', 'takhrij', [48, 51], 'أخرج حديثين في الوحدة.', 'Nam twee hadith van deze eenheid op.'],
  ['ibn-khuzayma', 'takhrij', [49], 'أخرج «ثلاثة لا تقبل منهم صلاة». ' + FYI, 'Nam "Van drie mensen wordt het gebed niet aanvaard" op. ' + FYI_NL],
  ['abu-dawud', 'takhrij', [53, 54], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['al-albani', 'takhrij', [47, 48, 49, 53, 54], 'صحح أحاديث في الوحدة وحسنها.', 'Beoordeelde hadith in deze eenheid als authentiek of goed.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'حقوق الزوجين',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'شرع الإسلام لكل من الزوجين حقوقًا وواجبات؛ فللزوج القوامة والطاعة في المعروف وحفظ غيبته، وللزوجة المهر والنفقة والمعاشرة بالمعروف من حلم وملاطفة وتعليم وعدل وحسن ظن.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الدروس الأربعة كما في الكتاب.',
    root: { label: 'حقوق الزوجين', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'حقوق الزوج', sub: 'الدرس ١٣', page: 46, children: ['القوامة', 'الطاعة', 'لزوم البيت', 'حفظ الغيبة'] },
      { label: 'حفظ الغيبة وخطر العصيان', sub: 'الدرس ١٤', page: 48, children: ['حفظ نفسها وماله وأولاده', 'مراعاة الغيرة'] },
      { label: 'حقوق الزوجة المالية', sub: 'الدرس ١٥', page: 51, children: ['المهر', 'النفقة'] },
      { label: 'حقوقها غير المالية', sub: 'الدرس ١٦', page: 52, children: ['المعاشرة بالمعروف', 'العدل', 'حسن الظن'] }
    ]
  },
  points: [
    { text: 'سمى الله عقد النكاح ميثاقًا غليظًا، وجعل بين الزوجين مودة ورحمة، والطلاق آخر الحلول.', page: 46 },
    { text: 'حق الزوج على زوجته من أعظم الحقوق بعد حق الله، وجعل الله القوامة للرجل.', page: 46 },
    { text: 'من حقوق الزوج: طاعته في المعروف، ولزوم بيتها فلا تخرج إلا بإذنه، وألا تتطوع بالصوم وهو شاهد إلا بإذنه.', page: 47 },
    { text: 'تحفظ الزوجة غيبة زوجها في نفسها وماله وأولادها.', page: 48 },
    { text: 'للزوجة على زوجها حقوق مالية: المهر والنفقة، وغير مالية أعظمها المعاشرة بالمعروف.', page: 51 },
    { text: 'المهر ليس شرطًا ولا ركنًا عند الجمهور؛ فإن لم يذكر في العقد صح ولها مهر المثل.', page: 51 },
    { text: 'تجب النفقة للزوجة وإن كانت غنية، بشرط تمكينها نفسها لزوجها.', page: 52 },
    { text: 'من حسن المعاشرة الحلم والملاطفة واجتناب ضرب الوجه والسب، والاعتدال في الغيرة، والعدل بين الزوجات.', page: 53 }
  ],
  terms: [
    { term: 'الميثاق الغليظ', translit: 'al-mīthāq al-ghalīẓ', meaning: 'تسمية القرآن لعقد النكاح.', explanation: 'دلالة على قوة العلاقة بين الزوجين.', notes: [], page: 46 },
    { term: 'القوامة', translit: 'al-qiwāma', meaning: 'ما جعله الله للرجل على المرأة.', explanation: '﴿الرجال قوامون على النساء﴾ [النساء: ٣٤].', notes: [], page: 46 },
    { term: 'المهر', translit: 'al-mahr', meaning: 'المال الذي تستحقه الزوجة بالعقد أو بالدخول.', explanation: '', notes: [], page: 51 },
    { term: 'مهر المثل', translit: 'mahr al-mithl', meaning: 'ما يفرض للزوجة إذا تم العقد بلا ذكر مهر.', explanation: '', notes: [], page: 51 },
    { term: 'النفقة', translit: 'an-nafaqa', meaning: 'توفير ما تحتاج إليه من طعام ومسكن وملبس.', explanation: 'لا تستحقها إن امتنعت أو نشزت.', notes: [], page: 52 },
    { term: 'العشير', translit: 'al-ʿashīr', meaning: 'الزوج.', explanation: '«يكفرن العشير».', notes: [], page: 49 },
    { term: 'الغيرة في الريبة', translit: 'al-ghayra fī r-rība', meaning: 'الغيرة عند وجود ما يدعو إلى الشك.', explanation: 'يحبها الله، والغيرة في غير ريبة يكرهها.', notes: [], page: 54 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'حقوق الزوجين باختصار',
      intro: 'كما في الكتاب.',
      columns: ['الحقوق'],
      rows: [
        { label: 'حقوق الزوج', cells: ['القوامة، والطاعة في المعروف، وتلبية حقه في الفراش، ولزوم البيت إلا بإذنه، وعدم التطوع بالصوم إلا بإذنه، وحفظ غيبته'] },
        { label: 'حقوق الزوجة المالية', cells: ['المهر، والنفقة'] },
        { label: 'حقوق الزوجة غير المالية', cells: ['المعاشرة بالمعروف، والحلم، والملاطفة، وتجنب ضرب الوجه والسب، والتعليم، والاعتدال في الغيرة، والعدل، وحسن الظن'] }
      ],
      page: 46
    },
    {
      type: 'cards',
      title: 'خطر عصيان المرأة زوجها بغير حق (للاطلاع فقط)',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'من أسباب دخول النار', page: 49 },
        { label: 'سبب في عدم قبول صلاتها', page: 49 },
        { label: 'سبب في غضب الله', page: 50 },
        { label: 'سبب للعن الملائكة', page: 50 }
      ]
    },
    {
      type: 'cards',
      title: 'حسن المعاشرة',
      intro: 'كما عدده الكتاب في الدرس السادس عشر.',
      nodes: [
        { label: 'احتمال أذاها والحلم عند طيشها', page: 53 },
        { label: 'مداعبتها وملاطفتها', page: 53 },
        { label: 'تجنب ضرب الوجه', page: 53 },
        { label: 'تجنب السب والشتم', page: 53 },
        { label: 'تعليمها ما تحتاجه من دينها', page: 53 },
        { label: 'الاعتدال في الغيرة', page: 54 },
        { label: 'العدل بين الزوجات', page: 54 },
        { label: 'عدم إساءة الظن بها', page: 54 }
      ]
    }
  ],
  sections: [
    { title: 'طاعة الزوج وطاعة الوالدين', text: 'طاعة الزوج مقدمة على طاعة الوالدين؛ قال أحمد في امرأة لها زوج وأم مريضة: طاعة زوجها أوجب عليها من أمها.', more: '', page: 46 },
    { title: 'حفظ غيبة الزوج (للاطلاع فقط)', text: 'تحفظ نفسها، وتحفظ ماله فلا تنفق منه إلا بإذنه، وتحفظ أولادها؛ وتراعي غيرته فلا تخالط الأجانب، وتخرج محتشمة متحجبة، ولا تأذن لأحد في بيته إلا بإذنه.', more: FYI, page: 48 },
    { title: 'متى لا تستحق النفقة', text: 'أجمع العلماء على وجوب نفقات الزوجات بشرط تمكين المرأة نفسها لزوجها، فإن امتنعت أو نشزت لم تستحق النفقة.', more: '', page: 52 },
    { title: 'خروج المرأة إلى المسجد', text: 'قال النووي: لا تمنع المرأة المسجد لكن بشروط: ألا تكون متطيبة ولا متزينة ولا ذات خلاخل يسمع صوتها ولا ثياب فاخرة، ولا مختلطة بالرجال، ولا شابة ونحوها ممن يفتتن بها، وألا يكون في الطريق ما يخاف به مفسدة.', more: '', page: 53 },
    { title: 'الاعتدال في الغيرة', text: 'ألا يتغافل عن مبادئ الأمور التي تخشى عواقبها، ولا يبالغ في إساءة الظن.', more: '', page: 54 }
  ],
  keycards: [
    { kind: 'bewijs', title: 'الحقوق متبادلة', items: ['﴿ولهن مثل الذي عليهن بالمعروف﴾ [البقرة: ٢٢٨]', '«ألا إن لكم على نسائكم حقًا ولنسائكم عليكم حقًا».'], page: 51, origin: 'boek' },
    { kind: 'definitie', title: 'المهر', items: ['المال الذي تستحقه الزوجة بالعقد أو بالدخول.', 'ليس شرطًا ولا ركنًا عند الجمهور.'], page: 51, origin: 'boek' },
    { kind: 'voorwaarde', title: 'وجوب النفقة', items: ['تمكين المرأة نفسها لزوجها.', 'فإن امتنعت أو نشزت لم تستحقها.'], page: 52, origin: 'boek' },
    { kind: 'onderscheid', title: 'الغيرة', items: ['في الريبة: يحبها الله.', 'في غير ريبة: يكرهها الله.'], page: 54, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'لكل من الزوجين حقوق وواجبات، والطلاق آخر الحلول.',
    'حق الزوج من أعظم الحقوق بعد حق الله، وله القوامة.',
    'تطيع الزوجة زوجها في المعروف وتحفظ غيبته.',
    'للزوجة المهر والنفقة.',
    'وعلى الزوج المعاشرة بالمعروف والعدل وحسن الظن.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'بم سمى الله عقد النكاح؟', options: ['ميثاقًا غليظًا', 'عهدًا قديمًا', 'بيعًا', 'وعدًا'], answer: 0, explain: 'كما في الكتاب.', page: 46 },
    { type: 'tf', q: 'للمرأة أن تتطوع بالصوم وزوجها شاهد بغير إذنه.', options: ['صواب', 'خطأ'], answer: 1, explain: '«لا يحل للمرأة أن تصوم وزوجها شاهد إلا بإذنه».', page: 48 },
    { type: 'mc', q: 'ما حكم العقد إذا لم يذكر فيه المهر؟', options: ['يصح ولها مهر المثل', 'يبطل', 'يصح ولا مهر لها', 'يفسخ'], answer: 0, explain: 'باتفاق أهل العلم.', page: 51 },
    { type: 'tf', q: 'تجب النفقة للزوجة ولو كانت غنية.', options: ['صواب', 'خطأ'], answer: 0, explain: 'توفير ما تحتاج إليه وإن كانت غنية.', page: 52 },
    { type: 'mc', q: 'أي الغيرة يحبها الله؟', options: ['الغيرة في الريبة', 'الغيرة في كل حال', 'الغيرة في غير ريبة', 'لا يحب شيئًا منها'], answer: 0, explain: 'والغيرة في غير ريبة يكرهها.', page: 54 },
    { type: 'mc', q: 'أي الدنانير أعظم أجرًا في حديث أبي هريرة؟', options: ['الذي أنفقته على أهلك', 'الذي أنفقته في رقبة', 'الذي تصدقت به على مسكين', 'الذي أنفقته في سبيل الله'], answer: 0, explain: 'أخرجه مسلم.', page: 52 }
  ]),
  note: 'نشاط الكتاب في الصفحتين ٥٠ و٥٥. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'De rechten van man en vrouw',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De islam geeft man en vrouw elk rechten en plichten. De man heeft de verantwoordelijkheid (qiwāma), gehoorzaamheid in het goede en het bewaren van wat van hem is in zijn afwezigheid. De vrouw heeft recht op de bruidsgave, op onderhoud en op een goede omgang: geduld, vriendelijkheid, onderwijs, rechtvaardigheid en goede gedachten over haar.',
  source: { ...source, label: 'At-Tarbiya al-Islāmiyya (1): de rechten, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen van de vier lessen zoals in het boek.',
    root: { label: 'De rechten van man en vrouw', sub: 'Eenheid 4' },
    nodes: [
      { label: 'De rechten van de man', sub: 'les 13', page: 46, children: ['qiwāma', 'gehoorzaamheid', 'thuisblijven', 'bewaren in zijn afwezigheid'] },
      { label: 'Bewaren en ongehoorzaamheid', sub: 'les 14', page: 48, children: ['zichzelf, zijn bezit en de kinderen', 'rekening houden met zijn jaloezie'] },
      { label: 'Financiële rechten van de vrouw', sub: 'les 15', page: 51, children: ['bruidsgave', 'onderhoud'] },
      { label: 'Niet-financiële rechten', sub: 'les 16', page: 52, children: ['goede omgang', 'rechtvaardigheid', 'goede gedachten'] }
    ]
  },
  points: [
    { text: 'Allah noemt het huwelijk een "zware verbintenis" en legde liefde en barmhartigheid tussen man en vrouw; scheiding is de laatste oplossing.', page: 46 },
    { text: 'Het recht van de man op zijn vrouw is na het recht van Allah een van de grootste; Allah gaf de man de qiwāma.', page: 46 },
    { text: 'Tot de rechten van de man behoren: gehoorzaamheid in het goede, dat zij alleen met zijn toestemming het huis verlaat, en dat zij niet vrijwillig vast terwijl hij aanwezig is zonder zijn toestemming.', page: 47 },
    { text: 'De vrouw bewaart in de afwezigheid van haar man zichzelf, zijn bezit en de kinderen.', page: 48 },
    { text: 'De vrouw heeft financiële rechten, de bruidsgave en het onderhoud, en niet-financiële, waarvan de goede omgang de grootste is.', page: 51 },
    { text: 'De bruidsgave is volgens de meeste geleerden geen voorwaarde of zuil; is zij niet genoemd, dan is het huwelijk geldig en krijgt zij een gebruikelijke bruidsgave.', page: 51 },
    { text: 'De man moet zijn vrouw onderhouden, ook als zij rijk is, op voorwaarde dat zij zich niet aan hem onttrekt.', page: 52 },
    { text: 'Tot een goede omgang behoren geduld, vriendelijkheid, niet in het gezicht slaan en niet schelden, gematigde jaloezie en rechtvaardigheid tussen de echtgenotes.', page: 53 }
  ],
  terms: [
    { term: 'الميثاق الغليظ', translit: 'al-mīthāq al-ghalīẓ', meaning: 'De zware verbintenis: zo noemt de Koran het huwelijk.', explanation: 'Het wijst op de sterkte van de band tussen man en vrouw.', notes: [], page: 46 },
    { term: 'القوامة', translit: 'al-qiwāma', meaning: 'De verantwoordelijkheid die Allah de man gaf.', explanation: '"De mannen zijn verantwoordelijk voor de vrouwen" (an-Nisāʾ 4:34).', notes: [], page: 46 },
    { term: 'المهر', translit: 'al-mahr', meaning: 'De bruidsgave: het geld waarop de vrouw recht krijgt door het huwelijkscontract of de huwelijksvoltrekking.', explanation: '', notes: [], page: 51 },
    { term: 'مهر المثل', translit: 'mahr al-mithl', meaning: 'De gebruikelijke bruidsgave, vastgesteld als er bij het contract geen genoemd is.', explanation: '', notes: [], page: 51 },
    { term: 'النفقة', translit: 'an-nafaqa', meaning: 'Onderhoud: voorzien in voedsel, woonruimte en kleding.', explanation: 'Zij verliest het recht als zij zich onttrekt of ongehoorzaam is.', notes: [], page: 52 },
    { term: 'العشير', translit: 'al-ʿashīr', meaning: 'De echtgenoot.', explanation: '"Zij zijn ondankbaar tegenover hun echtgenoot."', notes: [], page: 49 },
    { term: 'الغيرة في الريبة', translit: 'al-ghayra fī r-rība', meaning: 'Jaloezie bij een reële reden tot verdenking.', explanation: 'Die heeft Allah lief; jaloezie zonder reden haat Hij.', notes: [], page: 54 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De rechten van man en vrouw in het kort',
      intro: 'Zoals in het boek.',
      columns: ['Rechten'],
      rows: [
        { label: 'Rechten van de man', cells: ['qiwāma, gehoorzaamheid in het goede, zijn recht op intimiteit, thuisblijven behalve met zijn toestemming, geen vrijwillig vasten zonder zijn toestemming, bewaren in zijn afwezigheid'] },
        { label: 'Financiële rechten van de vrouw', cells: ['de bruidsgave en het onderhoud'] },
        { label: 'Niet-financiële rechten van de vrouw', cells: ['een goede omgang, geduld, vriendelijkheid, niet in het gezicht slaan en niet schelden, onderwijs, gematigde jaloezie, rechtvaardigheid en goede gedachten'] }
      ],
      page: 46
    },
    {
      type: 'cards',
      title: 'Het gevaar van onterechte ongehoorzaamheid aan de man (alleen ter kennisname)',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Een reden voor het Vuur', page: 49 },
        { label: 'Een reden dat haar gebed niet aanvaard wordt', page: 49 },
        { label: 'Een reden voor de woede van Allah', page: 50 },
        { label: 'Een reden dat de engelen haar vervloeken', page: 50 }
      ]
    },
    {
      type: 'cards',
      title: 'Een goede omgang',
      intro: 'Zoals het boek die in les 16 opsomt.',
      nodes: [
        { label: 'Geduld met haar hebben', page: 53 },
        { label: 'Speels en vriendelijk met haar zijn', page: 53 },
        { label: 'Niet in het gezicht slaan', page: 53 },
        { label: 'Niet schelden of beledigen', page: 53 },
        { label: 'Haar leren wat zij van haar godsdienst nodig heeft', page: 53 },
        { label: 'Gematigde jaloezie', page: 54 },
        { label: 'Rechtvaardigheid tussen de echtgenotes', page: 54 },
        { label: 'Geen slechte gedachten over haar', page: 54 }
      ]
    }
  ],
  sections: [
    { title: 'De man en de ouders gehoorzamen', text: 'Gehoorzaamheid aan de man gaat voor gehoorzaamheid aan de ouders. Aḥmad zei over een vrouw met een man en een zieke moeder: haar man gehoorzamen is voor haar meer verplicht dan haar moeder.', more: '', page: 46 },
    { title: 'Bewaren in zijn afwezigheid (alleen ter kennisname)', text: 'Zij bewaart zichzelf, zijn bezit (zij geeft er niets van weg zonder zijn toestemming) en de kinderen. Zij houdt rekening met zijn jaloezie: zij mengt zich niet met vreemde mannen, gaat bedekt en ingetogen naar buiten en laat niemand in zijn huis toe zonder zijn toestemming.', more: FYI_NL, page: 48 },
    { title: 'Wanneer zij geen recht op onderhoud heeft', text: 'De geleerden zijn het erover eens dat de man zijn vrouwen moet onderhouden, op voorwaarde dat de vrouw zich niet aan hem onttrekt; weigert zij of is zij ongehoorzaam (nushūz), dan heeft zij geen recht op onderhoud.', more: '', page: 52 },
    { title: 'De vrouw en de moskee', text: 'An-Nawawī: de vrouw wordt de moskee niet ontzegd, maar onder voorwaarden: zij is niet geparfumeerd of opgemaakt, draagt geen rinkelende enkelbanden of prachtige kleding, mengt zich niet met mannen, is geen jonge vrouw of iemand door wie verleiding ontstaat, en op de weg is geen gevaar voor kwaad.', more: '', page: 53 },
    { title: 'Gematigde jaloezie', text: 'Hij ziet het begin van zaken waarvan hij de gevolgen vreest niet over het hoofd, maar overdrijft ook niet in wantrouwen.', more: '', page: 54 }
  ],
  keycards: [
    { kind: 'bewijs', title: 'Rechten over en weer', items: ['"En zij hebben rechten zoals zij plichten hebben, op redelijke wijze" (al-Baqara 2:228)', '"Jullie hebben een recht op jullie vrouwen, en jullie vrouwen hebben een recht op jullie."'], page: 51, origin: 'boek' },
    { kind: 'definitie', title: 'De bruidsgave', items: ['Het geld waarop de vrouw recht krijgt door het contract of de huwelijksvoltrekking.', 'Volgens de meeste geleerden geen voorwaarde of zuil.'], page: 51, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Recht op onderhoud', items: ['De vrouw onttrekt zich niet aan haar man.', 'Weigert zij of is zij ongehoorzaam, dan vervalt het.'], page: 52, origin: 'boek' },
    { kind: 'onderscheid', title: 'Jaloezie', items: ['Bij een reële verdenking: Allah heeft haar lief.', 'Zonder verdenking: Allah haat haar.'], page: 54, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Man en vrouw hebben elk rechten en plichten; scheiding is de laatste oplossing.',
    'Het recht van de man is na dat van Allah een van de grootste; hij heeft de qiwāma.',
    'De vrouw gehoorzaamt haar man in het goede en bewaart wat van hem is in zijn afwezigheid.',
    'De vrouw heeft recht op de bruidsgave en op onderhoud.',
    'De man is haar een goede omgang, rechtvaardigheid en goede gedachten verschuldigd.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe noemt Allah het huwelijkscontract?', options: ['een zware verbintenis', 'een oude belofte', 'een koop', 'een toezegging'], answer: 0, explain: 'Zoals in het boek.', page: 46 },
    { type: 'tf', q: 'Een vrouw mag vrijwillig vasten terwijl haar man aanwezig is, zonder zijn toestemming.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Het is een vrouw niet toegestaan te vasten terwijl haar man aanwezig is, behalve met zijn toestemming."', page: 48 },
    { type: 'mc', q: 'Wat geldt als er bij het huwelijkscontract geen bruidsgave genoemd is?', options: ['het is geldig en zij krijgt de gebruikelijke bruidsgave', 'het is ongeldig', 'het is geldig zonder bruidsgave', 'het wordt ontbonden'], answer: 0, explain: 'Volgens de overeenstemming van de geleerden.', page: 51 },
    { type: 'tf', q: 'De man moet zijn vrouw onderhouden, ook als zij rijk is.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Hij voorziet in wat zij nodig heeft, ook als zij rijk is.', page: 52 },
    { type: 'mc', q: 'Welke jaloezie heeft Allah lief?', options: ['jaloezie bij een reële verdenking', 'jaloezie in elke situatie', 'jaloezie zonder verdenking', 'geen enkele'], answer: 0, explain: 'Jaloezie zonder verdenking haat Hij.', page: 54 },
    { type: 'mc', q: 'Welke dinar heeft de grootste beloning in de hadith van Abū Hurayra?', options: ['die je aan je gezin uitgeeft', 'die voor het vrijkopen van een slaaf', 'die je aan een arme geeft', 'die je op de weg van Allah uitgeeft'], answer: 0, explain: 'Overgeleverd door Muslim.', page: 52 }
  ]),
  note: 'Oefeningen van het boek op p. 50 en 55. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tarbiyah', chapter: '13', unit: 4, ar, nl }
