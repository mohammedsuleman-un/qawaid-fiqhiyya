// Hoofdstukkaart bij العقيدة (١), eenheid 3: التوحيد (lessen 12–16, boek p. 50–62).
// Opgesteld uit de boekpagina's zelf (Zad Academy, archive.org); hadith en takhrij zoals in het boek.
// p. 52 en het kader op p. 58 staan in het boek als "للاطلاع فقط" (alleen ter kennisname).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (١)، سلسلة زاد العلمية',
  pages: '50–62',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'جابر بن عبد الله', text: 'حتى إذا كان بالبيداء أهل بالتوحيد', takhrij: 'أخرجه مسلم', note: 'من حديث حجة الوداع؛ في الرد على من زعم أن كلمة التوحيد لا أصل لها (للاطلاع فقط).', pages: [52], nl: 'toen hij bij al-Baydāʾ was, begon hij de talbiya met het tawḥīd', nlNote: 'Uit de hadith over de afscheidsbedevaart; als bewijs dat het woord tawḥīd in de Sunna voorkomt (ter kennisname).' },
  { narrator: 'معاذ بن جبل', text: 'فليكن أول ما تدعوهم إلى أن يوحدوا الله تعالى', takhrij: 'في الصحيحين، وهذا لفظ البخاري', note: 'قاله النبي ﷺ لمعاذ لما أرسله إلى اليمن.', pages: [52], nl: 'laat het eerste waartoe je hen oproept zijn dat zij Allah als Enige aanbidden', nlNote: 'Tegen Muʿādh toen hij hem naar Jemen stuurde.' },
  { narrator: '', text: 'من وحد الله وكفر بما يعبد من دونه، حرم ماله ودمه، وحسابه على الله', takhrij: 'رواه مسلم', pages: [52], nl: 'wie Allah als Enige aanbidt en niet gelooft in wat naast Hem aanbeden wordt, diens bezit en bloed zijn onschendbaar, en zijn afrekening is bij Allah', nlNote: '' },
  { narrator: '', text: 'بني الإسلام على خمسة: على أن يوحد الله، وإقامة الصلاة...', takhrij: 'رواه الشيخان، واللفظ لمسلم', pages: [52], nl: 'de islam is gebouwd op vijf: dat Allah als Enige aanbeden wordt, het gebed verrichten ...', nlNote: '' },
  { narrator: 'معاذ بن جبل', text: 'من كان آخر كلامه لا إله إلا الله دخل الجنة', takhrij: 'أخرجه أبو داود، وصححه الألباني', pages: [53, 54], nl: 'wie als laatste woorden "lā ilāha illā llāh" heeft, gaat het Paradijs binnen', nlNote: 'Ook aangehaald door Ibn Abī al-ʿIzz (p. 53).' },
  { narrator: 'معاذ بن جبل', text: 'يا معاذ، هل تدري ما حق الله على عباده؟ قلت: الله ورسوله أعلم. قال: حق الله على عباده أن يعبدوه ولا يشركوا به شيئا', takhrij: 'متفق عليه', note: 'وكان معاذ رديف النبي ﷺ.', pages: [54], nl: 'Muʿādh, weet je wat het recht van Allah op Zijn dienaren is? ... Het recht van Allah op Zijn dienaren is dat zij Hem aanbidden en niets met Hem gelijkstellen', nlNote: 'Muʿādh zat achter de Profeet ﷺ op hetzelfde rijdier.' },
  { narrator: 'عبد الله بن عمرو بن العاص', text: 'إن الله سيخلص رجلا من أمتي على رءوس الخلائق يوم القيامة، فينشر عليه تسعة وتسعين سجلا، كل سجل مثل مد البصر، ثم يقول: أتنكر من هذا شيئا؟ أظلمك كتبتي الحافظون؟ فيقول: لا يا رب، فيقول: أفلك عذر؟ فيقول: لا يا رب، فيقول: بلى، إن لك عندنا حسنة، فإنه لا ظلم عليك اليوم، فتخرج بطاقة فيها: أشهد أن لا إله إلا الله، وأشهد أن محمدا عبده ورسوله، فيقول: احضر وزنك، فيقول: يا رب ما هذه البطاقة مع هذه السجلات؟ فقال: إنك لا تظلم، قال: فتوضع السجلات في كفة والبطاقة في كفة، فطاشت السجلات وثقلت البطاقة، فلا يثقل مع اسم الله شيء', takhrij: 'رواه الترمذي وحسنه', note: 'حديث البطاقة. قال شيخ الإسلام: «فهذا لما اقترن بهذه الكلمة من الصدق والإخلاص والصفاء وحسن النية...».', pages: [55], nl: 'op de Dag der Opstanding worden voor een man van mijn umma negenennegentig registers opengelegd, elk zo ver als het oog reikt; dan komt er een kaartje met "ik getuig dat er geen god is dan Allah en dat Muḥammad Zijn dienaar en boodschapper is". De registers gaan in de ene schaal en het kaartje in de andere: de registers wegen licht en het kaartje zwaar, want niets weegt zwaarder dan de naam van Allah', nlNote: 'De hadith van het kaartje (al-biṭāqa). Ibn Taymiyya legt uit: dit kwam door de oprechtheid en zuiverheid waarmee hij deze woorden sprak.' },
  { narrator: 'أبو هريرة', text: 'سئل النبي ﷺ: أي الأعمال أفضل؟ قال: إيمان بالله ورسوله', takhrij: 'أخرجه البخاري ومسلم', pages: [56], nl: 'de Profeet ﷺ werd gevraagd welke daad de beste is; hij zei: geloof in Allah en Zijn Boodschapper', nlNote: 'Bewijs dat tawḥīd de edelste daad is.' },
  { narrator: 'البراء بن عازب', text: 'المسلم إذا سئل في القبر يشهد أن لا إله إلا الله وأن محمدا رسول الله، فذلك قوله: ﴿يثبت الله الذين آمنوا بالقول الثابت في الحياة الدنيا وفي الآخرة﴾', takhrij: 'أخرجه البخاري ومسلم', pages: [57], nl: 'als de moslim in het graf ondervraagd wordt, getuigt hij dat er geen god is dan Allah en dat Muḥammad de boodschapper van Allah is; dat is wat Allah bedoelt met Ibrāhīm 14:27', nlNote: 'Bewijs voor standvastigheid in het graf.' },
  { narrator: '', text: 'الأنبياء إخوة لعلات، أمهاتهم شتى ودينهم واحد', takhrij: 'متفق عليه', note: 'العلات: الضرائر. والمعنى: أن أصل دينهم واحد وهو التوحيد، وإن اختلفت فروع الشرائع.', pages: [60], nl: 'de profeten zijn halfbroers: hun moeders verschillen, maar hun godsdienst is één', nlNote: 'Volgens het boek: de kern van hun godsdienst is één (tawḥīd), ook al verschillen de details van hun wetten.' }
]

const TAKHRIJ_NL = {
  'أخرجه مسلم': 'Muslim',
  'رواه مسلم': 'Muslim',
  'في الصحيحين، وهذا لفظ البخاري': 'al-Bukhārī en Muslim; dit is de bewoording van al-Bukhārī',
  'رواه الشيخان، واللفظ لمسلم': 'al-Bukhārī en Muslim; de bewoording van Muslim',
  'أخرجه أبو داود، وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim'
}
const NARRATOR_NL = {
  'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'معاذ بن جبل': 'Muʿādh ibn Jabal', 'عبد الله بن عمرو بن العاص': 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ',
  'أبو هريرة': 'Abū Hurayra', 'البراء بن عازب': 'al-Barāʾ ibn ʿĀzib'
}

const PERSONS = [
  ['muhammad-ibn-abd-al-wahhab', 'text', [51], 'نقل الكتاب قوله في «كشف الشبهات»: لا بد أن يكون التوحيد بالقلب واللسان والعمل.', 'Het boek citeert hem (Kashf ash-shubuhāt): tawḥīd moet met hart, tong en daad zijn.'],
  ['jabir-ibn-abdallah', 'text', [52], 'روى حديث حجة الوداع وفيه: «أهل بالتوحيد».', 'Overleverde de hadith over de afscheidsbedevaart, met "hij begon met het tawḥīd".'],
  ['muadh-ibn-jabal', 'text', [52, 54], 'أرسله النبي ﷺ إلى اليمن، وروى حديث «حق الله على العباد» وحديث «من كان آخر كلامه».', 'De Profeet ﷺ stuurde hem naar Jemen; hij overleverde "het recht van Allah op de dienaren" en "wie als laatste woorden ...".'],
  ['ibn-abi-al-izz', 'text', [53], 'نقل الكتاب قوله: التوحيد أول دعوة الرسل وأول منازل الطريق.', 'Het boek citeert hem: tawḥīd is de eerste oproep van de boodschappers en de eerste halte op de weg.'],
  ['abdallah-ibn-amr', 'text', [55], 'روى حديث البطاقة.', 'Overleverde de hadith van het kaartje (al-biṭāqa).'],
  ['ibn-taymiyya', 'text', [55, 58], 'نقل الكتاب قوله في حديث البطاقة، وفي تواتر أحاديث خروج الموحدين من النار.', 'Het boek citeert hem over de hadith van het kaartje en over de vele hadith dat gelovigen in tawḥīd uit het Vuur komen.'],
  ['abu-hurayra', 'text', [56], 'روى حديث «أي الأعمال أفضل؟».', 'Overleverde "welke daad is de beste?".'],
  ['ibn-al-qayyim', 'text', [57], 'نقل الكتاب قوله: الإخلاص والتوحيد شجرة في القلب، والتوحيد مفزع أعدائه وأوليائه.', 'Het boek citeert hem: oprechtheid en tawḥīd zijn een boom in het hart, en tawḥīd is het toevluchtsoord van vriend en vijand.'],
  ['al-bara-ibn-azib', 'text', [57], 'روى حديث سؤال القبر.', 'Overleverde de hadith over de ondervraging in het graf.'],
  ['muslim', 'takhrij', [52, 54, 56, 57, 60], 'أخرج أكثر أحاديث هذه الوحدة.', 'Nam de meeste hadith uit deze eenheid op.'],
  ['al-bukhari', 'takhrij', [52, 54, 56, 57, 60], 'أخرج عدة أحاديث في هذه الوحدة.', 'Nam meerdere hadith uit deze eenheid op.'],
  ['abu-dawud', 'takhrij', [54], 'أخرج حديث «من كان آخر كلامه».', 'Nam "wie als laatste woorden ..." op.'],
  ['at-tirmidhi', 'takhrij', [55], 'أخرج حديث البطاقة وحسنه.', 'Nam de hadith van het kaartje op en noemde hem ḥasan.'],
  ['al-albani', 'takhrij', [54], 'صحح حديث «من كان آخر كلامه».', 'Noemde "wie als laatste woorden ..." authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'التوحيد',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف التوحيد ومنزلته، وأثره على الفرد، وبيان أن التوحيد هو الإسلام ودين الرسل جميعًا.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'الموضوعات الثلاثة للوحدة كما في صفحة ٥٠ من الكتاب.',
    root: { label: 'التوحيد', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'تعريفه', sub: 'الدرس ١٢', page: 51, children: ['لغة: جعل الشيء واحدًا', 'اصطلاحًا: إفراد الله بما يختص به', 'بالقلب واللسان والجوارح'] },
      { label: 'منزلته', sub: 'الدرسان ١٣–١٤', page: 53, children: ['الغاية من الخلق', 'دعوة الرسل', 'شرط قبول العمل', 'حق الله على العباد', 'شرط دخول الجنة'] },
      { label: 'أثره على الفرد', sub: 'الدرس ١٥', page: 57, children: ['السعادة وطيب الحياة', 'تفريج الكروب', 'الثبات في القبر', 'النجاة من الخلود في النار', 'الأمن من الخوف'] },
      { label: 'التوحيد هو الإسلام', sub: 'الدرس ١٦', page: 59, children: ['دين الرسل جميعًا', 'الشرائع تختلف والدين واحد', 'لا «أديان سماوية ثلاثة»'] }
    ]
  },
  points: [
    { text: 'التوحيد: إفراد الله بما يختص به من الألوهية والربوبية والأسماء والصفات.', page: 51 },
    { text: 'لا يقوم إلا باجتماع ثلاثة: الإقرار بالقلب، والنطق باللسان، والعمل بالجوارح.', page: 51 },
    { text: 'للتوحيد منزلة كبرى تظهر في أحد عشر وجهًا، منها أنه الغاية من الخلق وحق الله على العباد.', page: 53 },
    { text: 'من آثاره على الفرد: السعادة، وتفريج الكروب، والثبات في القبر، والنجاة من الخلود في النار، والأمن.', page: 57 },
    { text: 'التوحيد هو الإسلام بمعناه العام، دين الأنبياء جميعًا؛ والشرائع تختلف.', page: 59 }
  ],
  terms: [
    { term: 'التوحيد (لغةً)', translit: 'at-tawḥīd', meaning: 'مصدر وحّد يوحّد، أي: جعل الشيء واحدًا.', explanation: '', notes: [], page: 51 },
    { term: 'التوحيد (اصطلاحًا)', translit: 'at-tawḥīd', meaning: 'إفراد الله سبحانه بما يختص به من الألوهية والربوبية والأسماء والصفات.', explanation: 'فلا يشاركه في ذلك أحد ولو كان ملكًا مقربًا أو نبيًّا مرسلًا أو رجلًا صالحًا.', notes: [], page: 51 },
    { term: 'ليعبدون', translit: 'liyaʿbudūn', meaning: 'أي: ليوحدون.', explanation: '', notes: ['[الذاريات: ٥٦]'], page: 53 },
    { term: 'حديث البطاقة', translit: 'ḥadīth al-biṭāqa', meaning: 'حديث الرجل الذي ثقلت بطاقة الشهادتين عنده على تسعة وتسعين سجلا.', explanation: '', notes: ['الترمذي وحسنه'], page: 55 },
    { term: 'ملة إبراهيم', translit: 'millat Ibrāhīm', meaning: 'التوحيد الذي أمر الله نبيه محمدًا ﷺ باتباعه.', explanation: '', notes: ['[النحل: ١٢٣]'], page: 56 },
    { term: 'الإسلام (بمعناه العام)', translit: 'al-islām', meaning: 'توحيد الله في عبادته والاستسلام التام له؛ وهو دين الرسل جميعًا.', explanation: '', notes: ['[آل عمران: ١٩، ٨٥]'], page: 59 },
    { term: 'العلات', translit: 'al-ʿallāt', meaning: 'الضرائر.', explanation: 'في حديث «الأنبياء إخوة لعلات».', notes: [], page: 60 },
    { term: 'الشريعة', translit: 'ash-sharīʿa', meaning: 'الأحكام في الحلال والحرام، وتختلف من نبي إلى نبي، والدين واحد.', explanation: '', notes: ['[المائدة: ٤٨]'], page: 60 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'أركان قيام التوحيد',
      intro: 'لا يقوم التوحيد إلا باجتماع ثلاثة أمور.',
      root: { label: 'التوحيد', sub: 'إفراد الله بما يختص به', page: 51 },
      nodes: [
        { label: 'الإقرار بالقلب' },
        { label: 'النطق باللسان' },
        { label: 'العمل بالجوارح' }
      ],
      note: 'قال محمد بن عبد الوهاب: «فإن اختل شيء من هذا لم يكن الرجل مسلمًا».',
      page: 51
    },
    {
      type: 'cards',
      title: 'منزلة التوحيد',
      intro: 'أحد عشر وجهًا ذكرها الكتاب.',
      nodes: [
        { label: 'الغاية من الخلق', sub: '[الذاريات: ٥٦]', page: 53 },
        { label: 'دعوة الرسل جميعًا وأولها', sub: '[الأنبياء: ٢٥]', page: 53 },
        { label: 'لا تقبل الأعمال إلا به', sub: '[الزمر: ٦٥–٦٦]', page: 53 },
        { label: 'أول واجب وآخر كلمة', sub: '[محمد: ١٩]', page: 54 },
        { label: 'حق الله على العباد', sub: 'حديث معاذ', page: 54 },
        { label: 'سبب التمكين والاستخلاف', sub: '[النور: ٥٥]', page: 54 },
        { label: 'سبب الأمن', sub: '[الأنعام: ٨٢]', page: 55 },
        { label: 'سبب مغفرة الذنوب', sub: '[النساء: ١١٦]', page: 55 },
        { label: 'ملة إبراهيم', sub: '[النحل: ١٢٣]', page: 56 },
        { label: 'أشرف الأعمال', sub: '«إيمان بالله ورسوله»', page: 56 },
        { label: 'شرط لدخول الجنة', sub: '[غافر: ٤٠؛ المائدة: ٧٢]', page: 56 }
      ]
    },
    {
      type: 'steps',
      title: 'أثر التوحيد على الفرد',
      intro: 'خمسة آثار في الكتاب.',
      nodes: [
        { label: 'السعادة وطيب الحياة', sub: '[النحل: ٩٧]', page: 57 },
        { label: 'تفريج الكروب', sub: '[العنكبوت: ٦٥]، ودعوة ذي النون', page: 57 },
        { label: 'الثبات في القبر', sub: '[إبراهيم: ٢٧]، حديث البراء', page: 57 },
        { label: 'النجاة من الخلود في النار', sub: 'تواتر الأحاديث', page: 58 },
        { label: 'السلامة من الخوف والرعب', sub: '[آل عمران: ١٥١؛ الأنبياء: ١٠١–١٠٣]', page: 58 }
      ]
    },
    {
      type: 'timeline',
      title: 'الإسلام دين الأنبياء جميعًا',
      intro: 'الآيات التي ذكرها الكتاب على أن الأنبياء وأتباعهم كانوا مسلمين.',
      nodes: [
        { label: 'نوح', sub: '[يونس: ٧٢]', page: 59 },
        { label: 'إبراهيم ويعقوب', sub: '[البقرة: ١٣٠–١٣٢؛ آل عمران: ٦٧]', page: 59 },
        { label: 'يوسف', sub: '[يوسف: ١٠١]', page: 59 },
        { label: 'سليمان وبلقيس', sub: '[النمل: ٣٨، ٤٤]', page: 59 },
        { label: 'موسى وسحرة فرعون', sub: '[يونس: ٨٤؛ الأعراف: ١٢٦]', page: 60 },
        { label: 'الحواريون أتباع عيسى', sub: '[آل عمران: ٥٢]', page: 60 }
      ]
    }
  ],
  sections: [
    { title: 'تعريف التوحيد', text: 'لغةً: جعل الشيء واحدًا. واصطلاحًا: إفراد الله بما يختص به من الألوهية والربوبية والأسماء والصفات، ولا يقوم إلا بالقلب واللسان والجوارح.', more: 'وكلمة التوحيد واردة في الكتاب والسنة، خلافًا لمن زعم أنها لا أصل لها: [الإسراء: ٤٦؛ غافر: ١٢؛ الممتحنة: ٤؛ البقرة: ١٦٣] (للاطلاع فقط).', page: 51 },
    { title: 'منزلة التوحيد', text: 'قال ابن أبي العز: التوحيد أول دعوة الرسل وأول منازل الطريق؛ فهو أول ما يدخل به في الإسلام وآخر ما يخرج به من الدنيا.', more: 'وهو الغاية من الخلق، وحق الله على العباد، وسبب التمكين والأمن ومغفرة الذنوب، وشرط لدخول الجنة.', page: 53 },
    { title: 'حديث البطاقة', text: 'رجل له تسعة وتسعون سجلًا، فتوضع بطاقة الشهادتين في كفة فتثقل على السجلات.', more: 'قال شيخ الإسلام: هذا لما اقترن بهذه الكلمة من الصدق والإخلاص وحسن النية؛ فالكلمات وإن اشتركت في الصورة تتفاوت بحسب أحوال القلوب.', page: 55 },
    { title: 'أثر التوحيد على الفرد', text: 'السعادة وطيب الحياة، وتفريج الكروب، والثبات في القبر، والنجاة من الخلود في النار، والسلامة من الخوف.', more: 'قال ابن القيم: «والإخلاص والتوحيد شجرة في القلب، فروعها الأعمال وثمرها طيب الحياة في الدنيا والنعيم المقيم في الآخرة».', page: 57 },
    { title: 'التوحيد هو الإسلام', text: 'الإسلام بمعناه العام توحيد الله والاستسلام له، وهو دين الأنبياء جميعًا؛ أما الشرائع فتختلف في الحلال والحرام.', more: 'ومن هنا كانت عبارة «الأديان السماوية الثلاثة» من العبارات الخطأ عند الكتاب: ليس هناك ديانة غير الإسلام، وإنما شرائع.', page: 59 }
  ],
  keycards: [
    { kind: 'definitie', title: 'التوحيد', items: ['لغة: جعل الشيء واحدًا.', 'اصطلاحًا: إفراد الله بما يختص به من الألوهية والربوبية والأسماء والصفات.'], page: 51, origin: 'boek' },
    { kind: 'voorwaarde', title: 'ما يقوم به التوحيد', items: ['الإقرار بالقلب', 'النطق باللسان', 'العمل بالجوارح'], page: 51, origin: 'boek' },
    { kind: 'opsomming', title: 'آثار التوحيد على الفرد', items: ['السعادة وطيب الحياة', 'تفريج الكروب', 'الثبات في القبر', 'النجاة من الخلود في النار', 'السلامة من الخوف والرعب'], page: 57, origin: 'boek' },
    { kind: 'onderscheid', title: 'الدين والشريعة', items: ['الدين واحد: التوحيد والاستسلام لله.', 'الشرائع تختلف في الحلال والحرام [المائدة: ٤٨].'], page: 60, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التوحيد: إفراد الله بما يختص به من الألوهية والربوبية والأسماء والصفات.',
    'يقوم بالقلب واللسان والجوارح.',
    'منزلته: الغاية من الخلق، دعوة الرسل، شرط قبول العمل، حق الله على العباد، شرط دخول الجنة.',
    'آثاره: السعادة، تفريج الكروب، الثبات في القبر، النجاة من الخلود في النار، الأمن.',
    'الإسلام دين الأنبياء جميعًا؛ الشرائع تختلف والدين واحد.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما تعريف التوحيد اصطلاحًا؟', options: ['الإقرار بوجود الله فقط', 'إفراد الله بما يختص به من الألوهية والربوبية والأسماء والصفات', 'معرفة أسماء الله', 'كثرة العبادة'], answer: 1, explain: 'كما في الكتاب.', page: 51 },
    { type: 'tf', q: 'يكفي في التوحيد الإقرار بالقلب دون النطق والعمل.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا يقوم إلا بالقلب واللسان والجوارح.', page: 51 },
    { type: 'mc', q: 'ما معنى ﴿ليعبدون﴾ في آية الذاريات؟', options: ['ليعملوا', 'ليوحدون', 'ليتعلموا', 'ليشكروا'], answer: 1, explain: 'كما فسرها الكتاب.', page: 53 },
    { type: 'mc', q: 'ما حق الله على العباد في حديث معاذ؟', options: ['أن يصلوا', 'أن يعبدوه ولا يشركوا به شيئا', 'أن يتصدقوا', 'أن يحجوا'], answer: 1, explain: 'متفق عليه.', page: 54 },
    { type: 'mc', q: 'من روى حديث البطاقة؟', options: ['معاذ بن جبل', 'عبد الله بن عمرو بن العاص', 'أبو هريرة', 'البراء بن عازب'], answer: 1, explain: 'رواه الترمذي وحسنه.', page: 55 },
    { type: 'mc', q: 'ما معنى «العلات» في حديث «الأنبياء إخوة لعلات»؟', options: ['الأمراض', 'الضرائر', 'الأسباب', 'القبائل'], answer: 1, explain: 'أمهاتهم شتى ودينهم واحد.', page: 60 },
    { type: 'tf', q: 'عبارة «الأديان السماوية الثلاثة» صحيحة عند الكتاب.', options: ['صواب', 'خطأ'], answer: 1, explain: 'ليس هناك ديانة غير الإسلام، وإنما شرائع.', page: 61 }
  ]),
  note: 'نشاط الكتاب في صفحة ٦٢.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Tawḥīd',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'De definitie en de hoge positie van tawḥīd, het effect ervan op de mens, en dat tawḥīd de islam is: de godsdienst van alle boodschappers.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen van de eenheid, zoals op p. 50 van het boek.',
    root: { label: 'Tawḥīd', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Definitie', sub: 'les 12', page: 51, children: ['taal: iets tot één maken', 'vakterm: Allah alleen het Zijne geven', 'met hart, tong en daad'] },
      { label: 'Positie', sub: 'les 13–14', page: 53, children: ['doel van de schepping', 'oproep van de boodschappers', 'voorwaarde voor aanvaarding van daden', 'recht van Allah op de dienaren', 'voorwaarde voor het Paradijs'] },
      { label: 'Effect op de mens', sub: 'les 15', page: 57, children: ['geluk en een goed leven', 'verlichting in nood', 'standvastigheid in het graf', 'niet eeuwig in het Vuur', 'veiligheid zonder angst'] },
      { label: 'Tawḥīd is de islam', sub: 'les 16', page: 59, children: ['godsdienst van alle boodschappers', 'wetten verschillen, godsdienst is één', 'geen "drie hemelse godsdiensten"'] }
    ]
  },
  points: [
    { text: 'Tawḥīd: Allah alleen geven wat Hem eigen is in aanbidding (ulūhiyya), heerschappij (rubūbiyya) en Zijn namen en eigenschappen.', page: 51 },
    { text: 'Het bestaat alleen als drie dingen samenkomen: erkenning met het hart, uitspraak met de tong en daden met de ledematen.', page: 51 },
    { text: 'Tawḥīd heeft een hoge positie, op elf punten; onder meer het doel van de schepping en het recht van Allah op de dienaren.', page: 53 },
    { text: 'Effect op de mens: geluk, verlichting in nood, standvastigheid in het graf, niet eeuwig in het Vuur, en veiligheid.', page: 57 },
    { text: 'Tawḥīd is de islam in de algemene betekenis, de godsdienst van alle profeten; de wetten verschillen.', page: 59 }
  ],
  terms: [
    { term: 'التوحيد (لغةً)', translit: 'at-tawḥīd (taalkundig)', meaning: 'Van waḥḥada: iets tot één maken.', explanation: '', notes: [], page: 51 },
    { term: 'التوحيد (اصطلاحًا)', translit: 'at-tawḥīd (vakterm)', meaning: 'Allah alleen geven wat Hem eigen is in ulūhiyya, rubūbiyya en Zijn namen en eigenschappen.', explanation: 'Niemand deelt daarin, ook geen nabije engel, gezonden profeet of vrome man.', notes: [], page: 51 },
    { term: 'ليعبدون', translit: 'liyaʿbudūn', meaning: '"Om Mij te aanbidden": volgens het boek: om Mij als Enige te aanbidden.', explanation: '', notes: ['adh-Dhāriyāt 51:56'], page: 53 },
    { term: 'حديث البطاقة', translit: 'ḥadīth al-biṭāqa', meaning: 'De hadith van het kaartje: de getuigenis weegt zwaarder dan negenennegentig registers.', explanation: '', notes: ['at-Tirmidhī, ḥasan'], page: 55 },
    { term: 'ملة إبراهيم', translit: 'millat Ibrāhīm', meaning: 'De weg van Ibrāhīm: het tawḥīd dat Allah de Profeet ﷺ opdroeg te volgen.', explanation: '', notes: ['an-Naḥl 16:123'], page: 56 },
    { term: 'الإسلام (بمعناه العام)', translit: 'al-islām', meaning: 'Allah als Enige aanbidden en je volledig aan Hem overgeven; de godsdienst van alle boodschappers.', explanation: '', notes: ['Āl ʿImrān 3:19, 85'], page: 59 },
    { term: 'العلات', translit: 'al-ʿallāt', meaning: 'Medevrouwen (van één man): halfbroers van verschillende moeders.', explanation: 'In de hadith "de profeten zijn halfbroers".', notes: [], page: 60 },
    { term: 'الشريعة', translit: 'ash-sharīʿa', meaning: 'De wetgeving (toegestaan en verboden); die verschilt per profeet, de godsdienst is één.', explanation: '', notes: ['al-Māʾida 5:48'], page: 60 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'Waar tawḥīd op rust',
      intro: 'Tawḥīd bestaat alleen als drie dingen samenkomen.',
      root: { label: 'Tawḥīd', sub: 'Allah alleen het Zijne geven', page: 51 },
      nodes: [
        { label: 'erkenning met het hart' },
        { label: 'uitspraak met de tong' },
        { label: 'daden met de ledematen' }
      ],
      note: 'Muḥammad ibn ʿAbd al-Wahhāb: als hier iets aan ontbreekt, is de man geen moslim.',
      page: 51
    },
    {
      type: 'cards',
      title: 'De positie van tawḥīd',
      intro: 'Elf punten uit het boek.',
      nodes: [
        { label: 'Doel van de schepping', sub: 'adh-Dhāriyāt 51:56', page: 53 },
        { label: 'Oproep van alle boodschappers, als eerste', sub: 'al-Anbiyāʾ 21:25', page: 53 },
        { label: 'Daden worden alleen daarmee aanvaard', sub: 'az-Zumar 39:65–66', page: 53 },
        { label: 'Eerste plicht en laatste woord', sub: 'Muḥammad 47:19', page: 54 },
        { label: 'Recht van Allah op de dienaren', sub: 'hadith van Muʿādh', page: 54 },
        { label: 'Oorzaak van gezag en vestiging op aarde', sub: 'an-Nūr 24:55', page: 54 },
        { label: 'Oorzaak van veiligheid', sub: 'al-Anʿām 6:82', page: 55 },
        { label: 'Oorzaak van vergeving', sub: 'an-Nisāʾ 4:116', page: 55 },
        { label: 'De weg van Ibrāhīm', sub: 'an-Naḥl 16:123', page: 56 },
        { label: 'De edelste daad', sub: '"geloof in Allah en Zijn Boodschapper"', page: 56 },
        { label: 'Voorwaarde voor het Paradijs', sub: 'Ghāfir 40:40; al-Māʾida 5:72', page: 56 }
      ]
    },
    {
      type: 'steps',
      title: 'Effect van tawḥīd op de mens',
      intro: 'Vijf effecten in het boek.',
      nodes: [
        { label: 'Geluk en een goed leven', sub: 'an-Naḥl 16:97', page: 57 },
        { label: 'Verlichting in nood', sub: 'al-ʿAnkabūt 29:65; het smeekgebed van Dhū an-Nūn', page: 57 },
        { label: 'Standvastigheid in het graf', sub: 'Ibrāhīm 14:27; hadith van al-Barāʾ', page: 57 },
        { label: 'Niet eeuwig in het Vuur', sub: 'veel overgeleverde hadith', page: 58 },
        { label: 'Veilig voor angst en schrik', sub: 'Āl ʿImrān 3:151; al-Anbiyāʾ 21:101–103', page: 58 }
      ]
    },
    {
      type: 'timeline',
      title: 'De islam: godsdienst van alle profeten',
      intro: 'De verzen die het boek noemt om te laten zien dat de profeten en hun volgelingen moslim waren.',
      nodes: [
        { label: 'Nūḥ', sub: 'Yūnus 10:72', page: 59 },
        { label: 'Ibrāhīm en Yaʿqūb', sub: 'al-Baqara 2:130–132; Āl ʿImrān 3:67', page: 59 },
        { label: 'Yūsuf', sub: 'Yūsuf 12:101', page: 59 },
        { label: 'Sulaymān en Bilqīs', sub: 'an-Naml 27:38, 44', page: 59 },
        { label: 'Mūsā en de tovenaars van Farao', sub: 'Yūnus 10:84; al-Aʿrāf 7:126', page: 60 },
        { label: 'De apostelen van ʿĪsā', sub: 'Āl ʿImrān 3:52', page: 60 }
      ]
    }
  ],
  sections: [
    { title: 'Definitie', text: 'Taalkundig: iets tot één maken. Als vakterm: Allah alleen geven wat Hem eigen is in ulūhiyya, rubūbiyya en Zijn namen en eigenschappen; het rust op hart, tong en daad.', more: 'Het woord tawḥīd komt in Koran en Sunna voor, tegen wie beweert dat het geen basis heeft (al-Isrāʾ 17:46; Ghāfir 40:12; al-Mumtaḥana 60:4; al-Baqara 2:163). Ter kennisname.', page: 51 },
    { title: 'Positie', text: 'Ibn Abī al-ʿIzz: tawḥīd is de eerste oproep van de boodschappers en de eerste halte op de weg; het is het eerste waarmee men de islam binnengaat en het laatste waarmee men de wereld verlaat.', more: 'Het is het doel van de schepping en het recht van Allah op de dienaren, een oorzaak van gezag, veiligheid en vergeving, en een voorwaarde voor het Paradijs.', page: 53 },
    { title: 'De hadith van het kaartje', text: 'Een man met negenennegentig registers; het kaartje met de getuigenis weegt zwaarder.', more: 'Ibn Taymiyya: dit kwam door de oprechtheid, zuiverheid en goede intentie waarmee hij het zei; woorden die er gelijk uitzien, verschillen sterk naar de toestand van het hart.', page: 55 },
    { title: 'Effect op de mens', text: 'Geluk en een goed leven, verlichting in nood, standvastigheid in het graf, niet eeuwig in het Vuur, en veiligheid voor angst.', more: 'Ibn al-Qayyim: oprechtheid en tawḥīd zijn een boom in het hart; de takken zijn de daden en de vrucht is een goed leven hier en blijvende gelukzaligheid in het Hiernamaals.', page: 57 },
    { title: 'Tawḥīd is de islam', text: 'De islam in de algemene betekenis is Allah als Enige aanbidden en je aan Hem overgeven: de godsdienst van alle profeten. De wetten verschillen in wat toegestaan en verboden is.', more: 'Daarom noemt het boek de uitdrukking "de drie hemelse godsdiensten" onjuist: er is volgens het boek geen andere godsdienst dan de islam, wel verschillende wetten.', page: 59 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Tawḥīd', items: ['Taalkundig: iets tot één maken.', 'Vakterm: Allah alleen geven wat Hem eigen is in ulūhiyya, rubūbiyya en Zijn namen en eigenschappen.'], page: 51, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Waar tawḥīd op rust', items: ['erkenning met het hart', 'uitspraak met de tong', 'daden met de ledematen'], page: 51, origin: 'boek' },
    { kind: 'opsomming', title: 'Effect van tawḥīd op de mens', items: ['geluk en een goed leven', 'verlichting in nood', 'standvastigheid in het graf', 'niet eeuwig in het Vuur', 'veiligheid voor angst en schrik'], page: 57, origin: 'boek' },
    { kind: 'onderscheid', title: 'Godsdienst en wet', items: ['De godsdienst is één: tawḥīd en overgave aan Allah.', 'De wetten verschillen in toegestaan en verboden (al-Māʾida 5:48).'], page: 60, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Tawḥīd: Allah alleen geven wat Hem eigen is in ulūhiyya, rubūbiyya en Zijn namen en eigenschappen.',
    'Het rust op hart, tong en daad.',
    'Positie: doel van de schepping, oproep van de boodschappers, voorwaarde voor aanvaarding, recht van Allah, voorwaarde voor het Paradijs.',
    'Effect: geluk, verlichting in nood, standvastigheid in het graf, niet eeuwig in het Vuur, veiligheid.',
    'De islam is de godsdienst van alle profeten; de wetten verschillen, de godsdienst is één.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is tawḥīd als vakterm?', options: ['alleen erkennen dat Allah bestaat', 'Allah alleen geven wat Hem eigen is in ulūhiyya, rubūbiyya en Zijn namen en eigenschappen', 'de namen van Allah kennen', 'veel aanbidden'], answer: 1, explain: 'Zo staat het in het boek.', page: 51 },
    { type: 'tf', q: 'Voor tawḥīd is erkenning met het hart genoeg, zonder uitspraak en daad.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het rust op hart, tong en ledematen.', page: 51 },
    { type: 'mc', q: 'Hoe legt het boek "liyaʿbudūn" in adh-Dhāriyāt 51:56 uit?', options: ['om te werken', 'om Mij als Enige te aanbidden', 'om te leren', 'om te danken'], answer: 1, explain: 'Liyuwaḥḥidūn.', page: 53 },
    { type: 'mc', q: 'Wat is het recht van Allah op de dienaren in de hadith van Muʿādh?', options: ['dat zij bidden', 'dat zij Hem aanbidden en niets met Hem gelijkstellen', 'dat zij aalmoezen geven', 'dat zij de bedevaart doen'], answer: 1, explain: 'Muttafaq ʿalayh.', page: 54 },
    { type: 'mc', q: 'Wie overleverde de hadith van het kaartje?', options: ['Muʿādh ibn Jabal', 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', 'Abū Hurayra', 'al-Barāʾ ibn ʿĀzib'], answer: 1, explain: 'At-Tirmidhī, ḥasan.', page: 55 },
    { type: 'mc', q: 'Wat betekent "al-ʿallāt" in "de profeten zijn ikhwa li-ʿallāt"?', options: ['ziektes', 'medevrouwen: halfbroers van verschillende moeders', 'oorzaken', 'stammen'], answer: 1, explain: 'Hun moeders verschillen, hun godsdienst is één.', page: 60 },
    { type: 'tf', q: 'Volgens het boek is "de drie hemelse godsdiensten" een juiste uitdrukking.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Er is één godsdienst, met verschillende wetten.', page: 61 }
  ]),
  note: 'Oefening van het boek op p. 62. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-aqeedah', chapter: '12', unit: 3, ar, nl }
