// Hoofdstukkaart bij الحديث (١), eenheid 1: الأحاديث ١–٥ (lessen 1–7, boek p. 9–32).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 10, 12, 18, 21, 23, 25, 29, 31 en 32 zijn in het
// boek (deels) "alleen ter kennisname". Hadith die het boek zonder bron noemt (p. 25, 29) staan
// niet in het hadith-tabblad. Bij «من عمل عملًا ليس عليه أمرنا» noemt het boek hier al-Bukhārī;
// die bewoording staat bij Muslim (zie de opmerking). Weggelaten: het kader op p. 32 (alleen ter
// kennisname); de lespagina geeft het zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (١)، سلسلة زاد العلمية',
  pages: '9–32',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'ابن عمر', text: 'بني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمدًا رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت', takhrij: 'متفق عليه', note: 'الحديث الأول.', pages: [9], nl: 'De islam is gebouwd op vijf: getuigen dat er geen god is dan Allah en dat Muḥammad de Boodschapper van Allah is, het gebed verrichten, de zakāt geven, Ramadan vasten en de bedevaart naar het Huis', nlNote: 'Hadith 1.' },
  { narrator: '', text: 'أمرت أن أقاتل الناس حتى يشهدوا أن لا إله إلا الله وأن محمدًا رسول الله', takhrij: 'متفق عليه', note: 'دليل على أن من اقتصر على «لا إله إلا الله» لا يكون مسلمًا على المشهور. ' + FYI, pages: [12], nl: 'mij is opgedragen de mensen te bestrijden totdat zij getuigen dat er geen god is dan Allah en dat Muḥammad de Boodschapper van Allah is', nlNote: 'Bewijs dat wie alleen "er is geen god dan Allah" zegt, volgens de bekende opvatting nog geen moslim is. ' + FYI_NL },
  { narrator: 'عمر بن الخطاب', text: 'الإسلام أن تشهد أن لا إله إلا الله وأن محمدًا رسول الله، وتقيم الصلاة، وتؤتي الزكاة، وتصوم رمضان، وتحج البيت إن استطعت إليه سبيلًا... الإيمان أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر وتؤمن بالقدر خيره وشره... الإحسان أن تعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك... فإنه جبريل أتاكم يعلمكم دينكم', takhrij: 'رواه مسلم', note: 'الحديث الثاني، حديث جبريل، مختصرًا.', pages: [13], nl: 'De islam is dat je getuigt dat er geen god is dan Allah en dat Muḥammad de Boodschapper van Allah is, het gebed verricht, de zakāt geeft, Ramadan vast en de bedevaart doet als je daartoe in staat bent … het geloof is dat je gelooft in Allah, Zijn engelen, Zijn Boeken, Zijn boodschappers, de Laatste Dag, en in de voorbeschikking, het goede en het kwade ervan … iḥsān is dat je Allah aanbidt alsof je Hem ziet, en zie je Hem niet, dan ziet Hij jou … dat was Jibrīl, hij kwam jullie je godsdienst leren', nlNote: 'Hadith 2, de hadith van Jibrīl, ingekort.' },
  { narrator: '', text: 'والشر ليس إليك', takhrij: 'أخرجه مسلم', note: 'القدر ليس فيه شر، وإنما الشر في المقدور.', pages: [17], nl: 'en het kwaad wordt niet aan U toegeschreven', nlNote: 'In de voorbeschikking zelf is geen kwaad; het kwaad zit in wat beschikt is.' },
  { narrator: 'عمر بن الخطاب', text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى دنيا يصيبها أو إلى امرأة ينكحها فهجرته إلى ما هاجر إليه', takhrij: 'متفق عليه', note: 'الحديث الثالث. لم يذكر الكتاب في متن الحديث قوله: «فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله»، وذكره في الشرح.', pages: [20, 21], nl: 'Daden gaan alleen naar de intenties, en ieder krijgt alleen wat hij beoogde; wie emigreerde voor iets van de wereld dat hij wilde krijgen, of voor een vrouw met wie hij wilde trouwen, diens emigratie is voor datgene waarvoor hij emigreerde', nlNote: 'Hadith 3. Het boek laat in de tekst het deel "wie emigreerde voor Allah en Zijn Boodschapper, diens emigratie is voor Allah en Zijn Boodschapper" weg en noemt het in de uitleg.' },
  { narrator: 'عائشة', text: 'من عمل عملًا ليس عليه أمرنا فهو رد', takhrij: 'رواه مسلم', note: 'مدار الإسلام على هذا الحديث وحديث النية. عزاه الكتاب هنا إلى البخاري؛ وهذا اللفظ عند مسلم، وانظر الحديث الثامن عشر.', pages: [22], nl: 'wie een daad verricht die niet volgens onze zaak is, die wordt afgewezen', nlNote: 'De islam draait om deze hadith en die over de intentie. Het boek schrijft deze bewoording hier toe aan al-Bukhārī; ze staat bij Muslim (zie hadith 18).' },
  { narrator: '', text: 'إنك لن تنفق نفقة تبتغي بها وجه الله إلا أجرت عليها، حتى ما تجعل في في امرأتك', takhrij: 'أخرجه البخاري ومسلم', note: 'بالنية تنقلب العادات عبادات. ' + FYI, pages: [23], nl: 'je geeft niets uit waarmee je het aangezicht van Allah zoekt of je wordt ervoor beloond, zelfs wat je in de mond van je vrouw legt', nlNote: 'Door de intentie worden gewoonten aanbidding. ' + FYI_NL },
  { narrator: 'أبو هريرة', text: 'الإيمان بضع وستون، أو بضع وسبعون شعبة، أعلاها شهادة أن لا إله إلا الله، وأدناها إماطة الأذى عن الطريق، والحياء شعبة من الإيمان', takhrij: 'متفق عليه', note: 'الحديث الرابع. «بضع وستون أو بضع وسبعون» شك من الراوي.', pages: [24, 25], nl: 'Het geloof heeft ruim zestig of ruim zeventig takken; de hoogste is getuigen dat er geen god is dan Allah, de laagste is iets schadelijks van de weg halen, en schaamte is een tak van het geloof', nlNote: 'Hadith 4. "Ruim zestig of ruim zeventig": de overleveraar twijfelde.' },
  { narrator: 'ابن مسعود', text: 'لا يحل دم امرئ مسلم يشهد أن لا إله إلا الله وأني رسول الله إلا بإحدى ثلاث: النفس بالنفس، والثيب الزاني، والتارك لدينه المفارق للجماعة', takhrij: 'متفق عليه', note: 'الحديث الخامس.', pages: [28], nl: 'Het bloed van een moslim die getuigt dat er geen god is dan Allah en dat ik de Boodschapper van Allah ben, is niet toegestaan behalve in een van drie gevallen: een leven voor een leven, de getrouwde overspelige, en wie zijn godsdienst verlaat en zich van de gemeenschap afscheidt', nlNote: 'Hadith 5.' },
  { narrator: '', text: 'واغد يا أنيس إلى امرأة هذا فإن اعترفت فارجمها', takhrij: 'متفق عليه', note: 'دليل على أن إقامة الحدود للإمام أو نائبه.', pages: [30], nl: 'ga morgen, Unays, naar de vrouw van deze man; bekent zij, stenig haar dan', nlNote: 'Bewijs dat alleen de leider of zijn vertegenwoordiger lijfstraffen uitvoert.' },
  { narrator: 'عمر بن الخطاب', text: 'والرجم في كتاب الله حق على من زنى إذا أحصن من الرجال والنساء إذا قامت البينة أو كان الحبل أو الاعتراف', takhrij: 'متفق عليه', note: 'أثر. في طرق ثبوت الزنا. ' + FYI, pages: [31], nl: 'Steniging staat in het Boek van Allah als recht voor wie overspel pleegt terwijl hij of zij getrouwd is, als er bewijs is, of zwangerschap, of een bekentenis', nlNote: 'Een uitspraak van ʿUmar, over de manieren waarop overspel vaststaat. ' + FYI_NL },
  { narrator: '', text: 'من بدل دينه فاقتلوه', takhrij: 'أخرجه البخاري', note: FYI, pages: [31], nl: 'wie zijn godsdienst verwisselt, dood hem', nlNote: FYI_NL }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه مسلم': 'Muslim',
  'أخرجه مسلم': 'Muslim',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه البخاري': 'al-Bukhārī'
}
const NARRATOR_NL = { 'ابن عمر': 'Ibn ʿUmar', 'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'عائشة': 'ʿĀʾisha', 'أبو هريرة': 'Abū Hurayra', 'ابن مسعود': 'Ibn Masʿūd' }

const PERSONS = [
  ['ibn-umar', 'text', [9], 'راوي الحديث الأول «بني الإسلام على خمس».', 'Overleveraar van hadith 1: "de islam is gebouwd op vijf".'],
  ['umar-ibn-al-khattab', 'text', [13, 20, 31], 'راوي حديث جبريل وحديث النية، وقال: «والرجم في كتاب الله حق».', 'Overleveraar van de hadith van Jibrīl en van de hadith over de intentie; zei: "steniging staat in het Boek van Allah als recht".'],
  ['aisha', 'text', [22], 'روت «من عمل عملًا ليس عليه أمرنا فهو رد».', 'Overleverde: "wie een daad verricht die niet volgens onze zaak is, die wordt afgewezen".'],
  ['abu-hurayra', 'text', [24], 'راوي الحديث الرابع في شعب الإيمان.', 'Overleveraar van hadith 4 over de takken van het geloof.'],
  ['ibn-masud', 'text', [28], 'راوي الحديث الخامس «لا يحل دم امرئ مسلم».', 'Overleveraar van hadith 5: "het bloed van een moslim is niet toegestaan …".'],
  ['unays-al-aslami', 'text', [30], 'بعثه النبي ﷺ ليقيم الحد، دليلًا على أن الحدود للإمام أو نائبه.', 'Door de Profeet ﷺ gestuurd om de straf uit te voeren: bewijs dat lijfstraffen bij de leider of zijn vertegenwoordiger liggen.'],
  ['maiz-ibn-malik', 'text', [31], 'مثال ثبوت الحد بالإقرار.', 'Voorbeeld van een straf die door bekentenis vaststond.'],
  ['ibn-taymiyya', 'text', [31], 'قال: «إنه لم يثبت الزنا بالشهادة قط» أي حتى وقته.', 'Zei: "overspel is nooit door getuigen vastgesteld", dat wil zeggen tot zijn tijd.'],
  ['al-bukhari', 'takhrij', [9, 20, 23, 24, 28, 31], 'أخرج أكثر أحاديث الوحدة.', 'Nam de meeste hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [9, 13, 17, 20, 22, 24, 28], 'أخرج حديث جبريل و«والشر ليس إليك» وغيرهما.', 'Nam de hadith van Jibrīl, "het kwaad wordt niet aan U toegeschreven" en andere op.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'الأحاديث ١–٥: أصول الدين',
  subtitle: 'سبعة دروس مجموعة في صفحة واحدة',
  summary: 'أركان الإسلام الخمسة، وحديث جبريل في مراتب الدين الثلاث، وحديث النية وأن مدار الأعمال عليها، وشعب الإيمان وأعلاها كلمة التوحيد، ثم حرمة دم المسلم وما يستثنى منها، وأقسام الكافر، وأن الحدود للإمام.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'الأحاديث الخمسة كما في الكتاب.',
    root: { label: 'الأحاديث ١–٥', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'بني الإسلام على خمس', sub: 'الدرس ١', page: 9, children: ['الأركان الخمسة', 'وجه الحصر', 'ترتيب الأركان'] },
      { label: 'حديث جبريل', sub: 'الدرس ٢', page: 13, children: ['الإسلام', 'الإيمان', 'الإحسان', 'أمارات الساعة'] },
      { label: 'إنما الأعمال بالنيات', sub: 'الدرس ٣', page: 20, children: ['نية العمل', 'نية المعمول له', 'العادات عبادات'] },
      { label: 'شعب الإيمان', sub: 'الدرسان ٤–٥', page: 24, children: ['لا إله إلا الله', 'إماطة الأذى', 'الحياء', 'الإيمان يزيد وينقص'] },
      { label: 'لا يحل دم امرئ مسلم', sub: 'الدرسان ٦–٧', page: 28, children: ['ثلاث خصال', 'أقسام الكافر', 'الحدود للإمام'] }
    ]
  },
  points: [
    { text: 'أركان الإسلام خمسة كالدعائم للبنيان، وبقية خصال الإسلام كتتمة البنيان.', page: 10 },
    { text: 'مراتب الدين ثلاث: الإسلام ثم الإيمان ثم الإحسان، وهي أعلاها.', page: 15 },
    { text: 'القدر ليس فيه شر أبدًا؛ وإنما الشر في المقدور.', page: 17 },
    { text: 'الأعمال لا تكون إلا بالنية، فهي مدار صحتها وفسادها وكمالها ونقصها.', page: 21 },
    { text: 'مدار الإسلام على حديثين: حديث النية لأعمال القلوب، وحديث عائشة لأعمال الجوارح.', page: 22 },
    { text: 'الإيمان شعب يتفاضل فيها المؤمنون، وهو يزيد وينقص.', page: 25 },
    { text: 'لا إله إلا الله هي الحد الفاصل بين الإيمان والكفر، ولذلك كانت أعلى شعب الإيمان.', page: 26 },
    { text: 'دم المسلم معصوم إلا بإحدى ثلاث، ولا يقيم الحدود إلا الإمام أو نائبه.', page: 30 }
  ],
  terms: [
    { term: 'إقام الصلاة', translit: 'iqām aṣ-ṣalāh', meaning: 'المداومة على الإتيان بالصلاة المفروضة بشروطها وأركانها.', explanation: '', notes: [], page: 9 },
    { term: 'إيتاء الزكاة', translit: 'ītāʾ az-zakāh', meaning: 'إعطاؤها وتمليكها لمصارفها الشرعية.', explanation: '', notes: [], page: 9 },
    { term: 'الإحسان', translit: 'al-iḥsān', meaning: 'أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك.', explanation: 'مقام المراقبة، أعلى مراتب الدين.', notes: [], page: 18 },
    { term: 'أن تلد الأمة ربتها', translit: 'an talida l-ama rabbatahā', meaning: 'أي سيدتها.', explanation: 'فسر باتساع الإسلام وكثرة الإماء، فيكون ولد الأمة من سيدها بمنزلة سيدها.', notes: [], page: 14 },
    { term: 'العالة', translit: 'al-ʿāla', meaning: 'الفقراء.', explanation: 'والحفاة جمع حاف غير المنتعل، والعراة جمع عار.', notes: [], page: 14 },
    { term: 'مليًا', translit: 'maliyyan', meaning: 'زمنًا طويلًا.', explanation: '', notes: ['[مريم: ٤٦]'], page: 14 },
    { term: 'النية', translit: 'an-niyya', meaning: 'القصد وعزم القلب.', explanation: 'شرعًا: القصد للعمل تقربًا إلى الله وطلبًا لمرضاته وثوابه.', notes: [], page: 22 },
    { term: 'الهجرة', translit: 'al-hijra', meaning: 'لغة: الخروج من أرض إلى أرض، من الهجر ضد الوصل.', explanation: 'شرعًا: مفارقة دار الكفر إلى دار الإسلام خوف الفتنة وقصدًا لإقامة شعائر الدين.', notes: [], page: 20 },
    { term: 'بضع', translit: 'biḍʿ', meaning: 'من ثلاثة إلى تسعة.', explanation: '', notes: [], page: 24 },
    { term: 'شعبة', translit: 'shuʿba', meaning: 'خصلة.', explanation: 'مفرد الشعب وهي أغصان الشجرة؛ تشبيه للإيمان بشجرة لا تتكامل ثمرتها إلا بتوفر أغصانها.', notes: [], page: 24 },
    { term: 'إماطة الأذى', translit: 'imāṭat al-adhā', meaning: 'تنحية كل ما يؤذي من حجر أو مدر أو شوك.', explanation: '', notes: [], page: 24 },
    { term: 'الحياء', translit: 'al-ḥayāʾ', meaning: 'صفة في النفس تحمل على فعل ما يحمد وترك ما يذم ويعاب.', explanation: '', notes: [], page: 24 },
    { term: 'الثيب', translit: 'ath-thayyib', meaning: 'من سبق له الزواج، ذكرًا كان أو أنثى.', explanation: '', notes: [], page: 28 },
    { term: 'التارك لدينه المفارق للجماعة', translit: 'at-tārik li-dīnihi', meaning: 'عام في كل مرتد بأي ردة كانت.', explanation: '', notes: [], page: 28 },
    { term: 'المعاهد', translit: 'al-muʿāhad', meaning: 'من كان بيننا وبينه عهد ولو كان في بلده.', explanation: 'كما جرى بين النبي ﷺ وقريش في الحديبية.', notes: [], page: 30 },
    { term: 'المستأمن', translit: 'al-mustaʾman', meaning: 'من دخل إلينا بأمان لتجارة أو عمل.', explanation: 'محترم معصوم وإن كان من قوم محاربين، لأنه أعطي أمانًا خاصًا.', notes: [], page: 30 },
    { term: 'الذمي', translit: 'adh-dhimmī', meaning: 'غير المسلم الذي يسكن معنا ونحميه مقابل الجزية.', explanation: '', notes: [], page: 30 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'مراتب الدين',
      intro: 'كما في حديث جبريل.',
      nodes: [
        { label: 'الإسلام', sub: 'الأعمال الظاهرة: الأركان الخمسة', page: 13 },
        { label: 'الإيمان', sub: 'الأركان الستة', page: 16 },
        { label: 'الإحسان', sub: 'أن تعبد الله كأنك تراه', page: 18 }
      ]
    },
    {
      type: 'cards',
      title: 'وجه ترتيب أركان الإسلام',
      intro: 'العبادة قولية أو فعلية.',
      nodes: [
        { label: 'الشهادتان', sub: 'الأصل الذي يبنى عليه كامل الأعمال', page: 11 },
        { label: 'الصلاة', sub: 'العماد الأعظم', page: 11 },
        { label: 'الزكاة', sub: 'قرينة الصلاة في كتاب الله غالبًا', page: 11 },
        { label: 'الصوم', sub: 'عبادة بدنية', page: 11 },
        { label: 'الحج', sub: 'جامع للعبادتين المالية والبدنية', page: 11 }
      ]
    },
    {
      type: 'cards',
      title: 'الإيمان بالله يتضمن أربعة أمور',
      intro: 'من فوائد حديث جبريل.',
      nodes: [
        { label: 'الإيمان بوجوده', page: 16 },
        { label: 'الإيمان بانفراده بالربوبية', page: 16 },
        { label: 'الإيمان بانفراده بالألوهية', page: 16 },
        { label: 'الإيمان بأسمائه وصفاته', sub: 'من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل', page: 16 }
      ]
    },
    {
      type: 'compare',
      title: 'النية نوعان',
      intro: 'النية تدخل فيها نية العمل ونية المعمول له.',
      columns: ['نية العمل', 'نية المعمول له'],
      rows: [
        { label: 'المعنى', cells: ['قصد العبادة وتمييزها', 'الإخلاص لله'] },
        { label: 'مثال', cells: ['الاغتسال: نظافة أو تبرد أو عن الحدث أو للجمعة', 'تفاضل الأعمال بحسب ما في القلب من الإيمان والإخلاص'] },
        { label: 'الدليل', cells: ['«إنما الأعمال بالنيات»', '[البينة: ٥]، [الزمر: ٣]'] }
      ],
      page: 22
    },
    {
      type: 'cards',
      title: 'أقسام الكافر',
      intro: 'كما في الدرس السابع.',
      nodes: [
        { label: 'المعاهد', sub: 'بيننا وبينه عهد', page: 30 },
        { label: 'المستأمن', sub: 'دخل إلينا بأمان', page: 30 },
        { label: 'الذمي', sub: 'يسكن معنا ويعطي الجزية', page: 30 },
        { label: 'الحربي', sub: 'ليس بينه وبين المسلمين عهد ولا ذمة ولا أمان', page: 30 }
      ]
    }
  ],
  sections: [
    { title: 'وجه الحصر في الخمس', text: 'العبادة إما قولية وهي الشهادتان، أو فعلية وهي الصلاة والزكاة والصوم والحج؛ فبني الإسلام على هذه الدعائم لامتحان العباد في بذل المحبوب وإجهاد البدن.', more: '', page: 10 },
    { title: 'ترك الأركان (للاطلاع فقط)', text: 'يزول الإسلام بفقد الشهادتين؛ أما الأربعة الباقية فالصواب عند الكتاب أنه لا يكفر تاركها إلا الصلاة إذا تركها بالكلية، ومن أنكر وجوبها كفر وإن صلى.', more: FYI, page: 10 },
    { title: 'لماذا لم يذكر الإيمان بالأنبياء والجهاد؟', text: 'لأن الشهادة تتضمن تصديق الرسول فيما جاء به؛ ولم يذكر الجهاد إما لأنه لم يكن فرض إذ ذاك، أو لأنه من فروض الكفايات وما ذكر فرائض أعيان.', more: '', page: 11 },
    { title: 'الأدب مع المعلم', text: 'جلس جبريل إلى النبي ﷺ فأسند ركبتيه إلى ركبتيه ووضع كفيه على فخذي نفسه، على هيئة المتعلم من شدة التأدب.', more: '', page: 14 },
    { title: 'مقتضى شهادة أن محمدًا رسول الله', text: 'الإيمان بأنه مرسل إلى الخلق كافة وخاتم النبيين، وتصديقه فيما أخبر، وامتثال أمره، واجتناب نهيه، وألا يبتدع في دين الله، وأنه ليس له شيء من الربوبية.', more: '', page: 16 },
    { title: 'تكذيب رسول تكذيب للجميع', text: 'قال تعالى: ﴿كذبت قوم نوح المرسلين﴾ مع أنهم كذبوا نوحًا ولم يأت قبله رسول؛ فتكذيب واحد تكذيب لجنس الرسالة.', more: '[الشعراء: ١٠٥]', page: 17 },
    { title: 'العالم يقول: لا أعلم (للاطلاع فقط)', text: '«ما المسؤول عنها بأعلم من السائل»: العالم إذا سئل عما لا يعلم صرح بأنه لا يعلمه، ولا ينقصه ذلك بل هو دليل ورعه.', more: FYI, page: 18 },
    { title: 'العادات تنقلب عبادات (للاطلاع فقط)', text: 'من قصد بكسبه وأعماله الدنيوية الاستعانة على القيام بحق الله انقلبت عاداته عبادات.', more: FYI, page: 23 },
    { title: 'لم يبين كل شعب الإيمان', text: 'من حكمة ذلك أن يجتهد المسلم ويتتبع نصوص الكتاب والسنة، ويتبين الحريص من غيره.', more: '', page: 26 },
    { title: 'حرمة دماء المسلمين', text: 'احترام دماء المسلمين أمر مجمع عليه، وقتل المسلم المعصوم من أعظم الذنوب؛ وغير المسلم إن كان معاهدًا أو مستأمنًا أو ذميًا فدمه معصوم.', more: '[النساء: ٩٣]', page: 29 },
    { title: 'الحدود للإمام', text: 'لا تجوز إقامة الحدود ولا التعزيرات إلا للإمام أو نائبه، لقوله ﷺ: «واغد يا أنيس...»، وإلا لحصل من الفوضى والشر ما لا يعلمه إلا الله.', more: '', page: 30 },
    { title: 'طرق ثبوت الزنا (للاطلاع فقط)', text: 'شهادة أربعة رجال على حقيقته، وهي صعبة جدًا؛ أو الإقرار كما في قصة ماعز؛ أو الحبل، كما قال عمر.', more: FYI, page: 31 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أركان الإسلام', items: ['الشهادتان', 'إقام الصلاة', 'إيتاء الزكاة', 'صوم رمضان', 'حج البيت'], page: 9, origin: 'boek' },
    { kind: 'opsomming', title: 'أركان الإيمان', items: ['الإيمان بالله', 'وملائكته', 'وكتبه', 'ورسله', 'واليوم الآخر', 'والقدر خيره وشره'], page: 16, origin: 'boek' },
    { kind: 'definitie', title: 'الإيمان عند أهل السنة', items: ['قول اللسان، وعمل الجوارح، واعتقاد وعمل القلب.'], page: 26, origin: 'boek' },
    { kind: 'voorwaarde', title: 'تبنى صحة الأعمال على الشهادتين', items: ['الإخلاص', 'المتابعة'], page: 18, origin: 'boek' },
    { kind: 'definitie', title: 'معنى لا إله إلا الله', items: ['لا معبود بحق إلا الله.'], page: 27, origin: 'boek' },
    { kind: 'uitzondering', title: 'لا يحل دم المسلم إلا بإحدى ثلاث', items: ['النفس بالنفس', 'الثيب الزاني', 'التارك لدينه المفارق للجماعة'], page: 28, origin: 'boek' },
    { kind: 'onderscheid', title: 'الحياء', items: ['من الله: يوجب طاعته والانتهاء عما نهى.', 'من الناس: يوجب استعمال المروءة.'], page: 26, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'بني الإسلام على خمس، والشهادتان أصلها.',
    'مراتب الدين: الإسلام ثم الإيمان ثم الإحسان.',
    'إنما الأعمال بالنيات، وصحة العمل بالإخلاص والمتابعة.',
    'الإيمان بضع وسبعون شعبة، أعلاها لا إله إلا الله، وهو يزيد وينقص.',
    'لا يحل دم المسلم إلا بإحدى ثلاث، والحدود للإمام أو نائبه.',
    'الكفار أقسام: معاهد ومستأمن وذمي وحربي.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما وجه حصر أركان الإسلام في خمس؟', options: ['العبادة قولية أو فعلية', 'لأنها أسهل العبادات', 'لأنها فرضت في سنة واحدة', 'لأنها كلها بدنية'], answer: 0, explain: 'الشهادتان قولية، والأربعة الباقية فعلية.', page: 10 },
    { type: 'mc', q: 'ما أعلى مراتب الدين؟', options: ['الإحسان', 'الإسلام', 'الإيمان', 'كلها سواء'], answer: 0, explain: 'الإسلام ثم الإيمان ثم الإحسان.', page: 15 },
    { type: 'tf', q: 'في القدر نفسه شر.', options: ['صواب', 'خطأ'], answer: 1, explain: 'القدر صادر عن رحمة وحكمة، وإنما الشر في المقدور.', page: 17 },
    { type: 'mc', q: 'على أي حديثين مدار الإسلام عند العلماء؟', options: ['حديث النية وحديث «من عمل عملًا ليس عليه أمرنا فهو رد»', 'حديث جبريل وحديث معاذ', 'حديث الشعب وحديث الحياء', 'حديث الدماء وحديث الحدود'], answer: 0, explain: 'الأول لأعمال القلوب والثاني لأعمال الجوارح.', page: 22 },
    { type: 'mc', q: 'ما معنى «بضع»؟', options: ['من ثلاثة إلى تسعة', 'عشرة', 'أكثر من مائة', 'واحد'], answer: 0, explain: 'كما في مفردات الحديث الرابع.', page: 24 },
    { type: 'tf', q: 'حديث شعب الإيمان من أعظم الأدلة على أن الإيمان يزيد وينقص.', options: ['صواب', 'خطأ'], answer: 0, explain: 'فيه إثبات التفاضل في الإيمان.', page: 25 },
    { type: 'mc', q: 'من يقيم الحدود؟', options: ['الإمام أو نائبه', 'كل مسلم', 'أهل المقتول', 'العلماء'], answer: 0, explain: '«واغد يا أنيس...»، وإلا لحصلت الفوضى.', page: 30 },
    { type: 'mc', q: 'من المستأمن؟', options: ['من دخل إلينا بأمان لتجارة أو عمل', 'من يسكن معنا ويعطي الجزية', 'من بيننا وبينه عهد في بلده', 'من لا عهد له ولا أمان'], answer: 0, explain: 'وهو معصوم لأنه أعطي أمانًا خاصًا.', page: 30 }
  ]),
  note: 'أنشطة الكتاب في صفحات ١٢ و١٩ و٢٣ و٢٧ و٣٢. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Hadith 1–5: de grondslagen van de godsdienst',
  subtitle: 'Zeven lessen samen op één pagina',
  summary: 'De vijf zuilen van de islam, de hadith van Jibrīl over de drie niveaus van de godsdienst, de hadith over de intentie waar alle daden om draaien, de takken van het geloof met de getuigenis als hoogste, en tot slot de onschendbaarheid van het bloed van een moslim met de uitzonderingen, de soorten niet-moslims, en dat straffen bij de leider liggen.',
  source: { ...source, label: 'Kitāb al-Ḥadīth (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De vijf hadith zoals in het boek.',
    root: { label: 'Hadith 1–5', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Gebouwd op vijf', sub: 'les 1', page: 9, children: ['de vijf zuilen', 'waarom vijf', 'de volgorde'] },
      { label: 'De hadith van Jibrīl', sub: 'les 2', page: 13, children: ['islam', 'imān', 'iḥsān', 'tekenen van het Uur'] },
      { label: 'Daden gaan naar de intenties', sub: 'les 3', page: 20, children: ['intentie van de daad', 'voor wie de daad is', 'gewoonten worden aanbidding'] },
      { label: 'Takken van het geloof', sub: 'les 4–5', page: 24, children: ['lā ilāha illā llāh', 'schade van de weg halen', 'schaamte', 'geloof neemt toe en af'] },
      { label: 'Het bloed van een moslim', sub: 'les 6–7', page: 28, children: ['drie gevallen', 'soorten niet-moslims', 'straffen bij de leider'] }
    ]
  },
  points: [
    { text: 'De vijf zuilen zijn als de pijlers van een gebouw; de overige kenmerken van de islam maken het gebouw af.', page: 10 },
    { text: 'De godsdienst heeft drie niveaus: islam, dan imān, dan iḥsān, het hoogste.', page: 15 },
    { text: 'In de voorbeschikking zelf is nooit kwaad; het kwaad zit in wat beschikt is.', page: 17 },
    { text: 'Daden bestaan alleen door de intentie; zij bepaalt of een daad geldig, ongeldig, volledig of gebrekkig is.', page: 21 },
    { text: 'De islam draait om twee hadith: die over de intentie voor de daden van het hart, en die van ʿĀʾisha voor de daden van het lichaam.', page: 22 },
    { text: 'Het geloof heeft takken waarin gelovigen verschillen; het neemt toe en af.', page: 25 },
    { text: 'Lā ilāha illā llāh is de grens tussen geloof en ongeloof; daarom is zij de hoogste tak van het geloof.', page: 26 },
    { text: 'Het bloed van een moslim is onschendbaar behalve in drie gevallen, en alleen de leider of zijn vertegenwoordiger voert straffen uit.', page: 30 }
  ],
  terms: [
    { term: 'إقام الصلاة', translit: 'iqām aṣ-ṣalāh', meaning: 'Het verplichte gebed steeds verrichten, met zijn voorwaarden en zuilen.', explanation: '', notes: [], page: 9 },
    { term: 'إيتاء الزكاة', translit: 'ītāʾ az-zakāh', meaning: 'De zakāt geven en in bezit stellen van wie er recht op heeft.', explanation: '', notes: [], page: 9 },
    { term: 'الإحسان', translit: 'al-iḥsān', meaning: 'Allah aanbidden alsof je Hem ziet; en zie je Hem niet, dan ziet Hij jou.', explanation: 'Het niveau van waakzaamheid, het hoogste van de godsdienst.', notes: [], page: 18 },
    { term: 'أن تلد الأمة ربتها', translit: 'an talida l-ama rabbatahā', meaning: 'Dat de slavin haar meesteres baart.', explanation: 'Uitgelegd als de uitbreiding van de islam: het kind van een slavin bij haar meester heeft de positie van haar meester.', notes: [], page: 14 },
    { term: 'العالة', translit: 'al-ʿāla', meaning: 'De armen.', explanation: 'Ḥufāt: zonder schoenen; ʿurāt: zonder kleding.', notes: [], page: 14 },
    { term: 'مليًا', translit: 'maliyyan', meaning: 'Een lange tijd.', explanation: '', notes: ['Maryam 19:46'], page: 14 },
    { term: 'النية', translit: 'an-niyya', meaning: 'Bedoeling en vastbeslotenheid van het hart.', explanation: 'Religieus: de daad bedoelen om dichter bij Allah te komen en Zijn welbehagen en beloning te zoeken.', notes: [], page: 22 },
    { term: 'الهجرة', translit: 'al-hijra', meaning: 'Taalkundig: van het ene land naar het andere gaan; van hajr, het tegendeel van verbinding.', explanation: 'Religieus: het land van ongeloof verlaten voor het land van de islam, uit vrees voor beproeving en om de godsdienst te kunnen beleven.', notes: [], page: 20 },
    { term: 'بضع', translit: 'biḍʿ', meaning: 'Van drie tot negen.', explanation: '', notes: [], page: 24 },
    { term: 'شعبة', translit: 'shuʿba', meaning: 'Eigenschap, tak.', explanation: 'Enkelvoud van shuʿab, de takken van een boom: het geloof is als een boom waarvan de vrucht pas volledig is als alle takken er zijn.', notes: [], page: 24 },
    { term: 'إماطة الأذى', translit: 'imāṭat al-adhā', meaning: 'Alles wat hindert, zoals een steen, kluit of doorn, opzij halen.', explanation: '', notes: [], page: 24 },
    { term: 'الحياء', translit: 'al-ḥayāʾ', meaning: 'Schaamte: een eigenschap die aanzet tot het lofwaardige en doet laten wat afkeurenswaardig is.', explanation: '', notes: [], page: 24 },
    { term: 'الثيب', translit: 'ath-thayyib', meaning: 'Wie al getrouwd is geweest, man of vrouw.', explanation: '', notes: [], page: 28 },
    { term: 'التارك لدينه المفارق للجماعة', translit: 'at-tārik li-dīnihi', meaning: 'Algemeen voor iedere afvallige, met welke vorm van afvalligheid ook.', explanation: '', notes: [], page: 28 },
    { term: 'المعاهد', translit: 'al-muʿāhad', meaning: 'Iemand met wie een verdrag bestaat, ook in zijn eigen land.', explanation: 'Zoals tussen de Profeet ﷺ en Quraysh bij al-Ḥudaybiya.', notes: [], page: 30 },
    { term: 'المستأمن', translit: 'al-mustaʾman', meaning: 'Iemand die met een veiligheidsgarantie binnenkomt, voor handel of werk.', explanation: 'Hij is onschendbaar, ook als hij uit een vijandig volk komt, omdat hij een eigen garantie kreeg.', notes: [], page: 30 },
    { term: 'الذمي', translit: 'adh-dhimmī', meaning: 'Een niet-moslim die onder moslims woont en beschermd wordt tegen betaling van de jizya.', explanation: '', notes: [], page: 30 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De niveaus van de godsdienst',
      intro: 'Zoals in de hadith van Jibrīl.',
      nodes: [
        { label: 'Islam', sub: 'de uiterlijke daden: de vijf zuilen', page: 13 },
        { label: 'Imān', sub: 'de zes zuilen van het geloof', page: 16 },
        { label: 'Iḥsān', sub: 'Allah aanbidden alsof je Hem ziet', page: 18 }
      ]
    },
    {
      type: 'cards',
      title: 'Waarom de zuilen in deze volgorde staan',
      intro: 'Aanbidding is met woorden of met daden.',
      nodes: [
        { label: 'De twee getuigenissen', sub: 'de basis waarop alle daden rusten', page: 11 },
        { label: 'Het gebed', sub: 'de grootste pijler', page: 11 },
        { label: 'De zakāt', sub: 'in de Koran meestal naast het gebed genoemd', page: 11 },
        { label: 'Het vasten', sub: 'aanbidding met het lichaam', page: 11 },
        { label: 'De bedevaart', sub: 'verenigt aanbidding met lichaam en bezit', page: 11 }
      ]
    },
    {
      type: 'cards',
      title: 'Geloof in Allah omvat vier dingen',
      intro: 'Uit de lessen van de hadith van Jibrīl.',
      nodes: [
        { label: 'Geloof in Zijn bestaan', page: 16 },
        { label: 'Dat Hij alleen Heer is', page: 16 },
        { label: 'Dat Hij alleen aanbeden mag worden', page: 16 },
        { label: 'Geloof in Zijn namen en eigenschappen', sub: 'zonder verdraaiing, ontkenning, vragen naar het hoe of vergelijking', page: 16 }
      ]
    },
    {
      type: 'compare',
      title: 'Twee soorten intentie',
      intro: 'De intentie omvat de intentie van de daad en voor wie de daad is.',
      columns: ['Intentie van de daad', 'Voor wie de daad is'],
      rows: [
        { label: 'Betekenis', cells: ['de aanbidding bedoelen en onderscheiden', 'oprechtheid tegenover Allah'] },
        { label: 'Voorbeeld', cells: ['de wassing: voor reinheid, verkoeling, na grote onreinheid of voor de vrijdag', 'daden verschillen in waarde naar het geloof en de oprechtheid in het hart'] },
        { label: 'Bewijs', cells: ['"daden gaan alleen naar de intenties"', 'al-Bayyina 98:5, az-Zumar 39:3'] }
      ],
      page: 22
    },
    {
      type: 'cards',
      title: 'Soorten niet-moslims',
      intro: 'Zoals in les 7.',
      nodes: [
        { label: 'Muʿāhad', sub: 'er is een verdrag met hem', page: 30 },
        { label: 'Mustaʾman', sub: 'kwam binnen met een veiligheidsgarantie', page: 30 },
        { label: 'Dhimmī', sub: 'woont onder moslims en betaalt de jizya', page: 30 },
        { label: 'Ḥarbī', sub: 'zonder verdrag, bescherming of garantie', page: 30 }
      ]
    }
  ],
  sections: [
    { title: 'Waarom precies vijf', text: 'Aanbidding is met woorden, de twee getuigenissen, of met daden: gebed, zakāt, vasten en bedevaart. Zo rust de islam op deze pijlers, die de dienaren beproeven in het geven van wat hun lief is en in lichamelijke inspanning.', more: '', page: 10 },
    { title: 'Het nalaten van de zuilen (alleen ter kennisname)', text: 'De islam verdwijnt door het wegvallen van de twee getuigenissen. Voor de andere vier is volgens het boek het juiste dat wie ze nalaat geen ongelovige wordt, behalve wie het gebed helemaal nalaat; en wie de verplichting ervan ontkent, wordt ongelovige, ook als hij bidt.', more: FYI_NL, page: 10 },
    { title: 'Waarom het geloof in de profeten en de jihad niet genoemd worden', text: 'De getuigenis houdt in dat men de Boodschapper gelooft in alles wat hij bracht. De jihad wordt niet genoemd, óf omdat hij toen nog niet verplicht was, óf omdat hij een collectieve plicht is, terwijl de genoemde zuilen persoonlijke plichten zijn.', more: '', page: 11 },
    { title: 'Respect voor de leraar', text: 'Jibrīl ging bij de Profeet ﷺ zitten met zijn knieën tegen de zijne en legde zijn handen op zijn eigen dijen, in de houding van een leerling, uit groot respect.', more: '', page: 14 },
    { title: 'Wat de getuigenis over Muḥammad ﷺ inhoudt', text: 'Geloven dat hij naar alle schepsels gestuurd is en de laatste profeet is, hem geloven in wat hij vertelde, zijn bevelen opvolgen, zijn verboden mijden, niets nieuws in de godsdienst invoeren, en weten dat hij niets van de heerschappij van Allah bezit.', more: '', page: 16 },
    { title: 'Eén boodschapper verloochenen is allen verloochenen', text: 'Allah zegt: "Het volk van Nūḥ loochende de boodschappers", terwijl zij alleen Nūḥ loochenden en er vóór hem geen boodschapper was. Eén verloochenen is het boodschapperschap zelf verloochenen.', more: 'ash-Shuʿarāʾ 26:105', page: 17 },
    { title: 'De geleerde zegt: ik weet het niet (alleen ter kennisname)', text: '"Wie ondervraagd wordt weet er niet meer van dan wie vraagt": wie iets gevraagd wordt wat hij niet weet, zegt dat eerlijk. Dat doet hem geen afbreuk; het toont zijn godvrezendheid.', more: FYI_NL, page: 18 },
    { title: 'Gewoonten worden aanbidding (alleen ter kennisname)', text: 'Wie met zijn verdiensten en wereldse bezigheden beoogt kracht te krijgen om Allahs recht te vervullen, diens gewoonten worden aanbidding.', more: FYI_NL, page: 23 },
    { title: 'Niet alle takken zijn genoemd', text: 'De wijsheid daarvan is dat de moslim zich inspant en de teksten van Koran en Sunna naspeurt, en dat zichtbaar wordt wie er werk van maakt.', more: '', page: 26 },
    { title: 'Het bloed van moslims is heilig', text: 'Respect voor het bloed van moslims is unaniem; een onschendbare moslim doden is een van de grootste zonden. Een niet-moslim met een verdrag, een veiligheidsgarantie of als dhimmī is eveneens onschendbaar.', more: 'an-Nisāʾ 4:93', page: 29 },
    { title: 'Straffen liggen bij de leider', text: 'Lijfstraffen en tuchtstraffen mogen alleen door de leider of zijn vertegenwoordiger worden uitgevoerd, vanwege "ga morgen, Unays …"; anders ontstaan wanorde en kwaad waarvan alleen Allah de omvang kent.', more: '', page: 30 },
    { title: 'Hoe overspel vaststaat (alleen ter kennisname)', text: 'Door vier mannen die het werkelijk getuigen, wat zeer moeilijk is; door een bekentenis, zoals bij Māʿiz; of door zwangerschap, zoals ʿUmar zei.', more: FYI_NL, page: 31 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'De zuilen van de islam', items: ['de twee getuigenissen', 'het gebed', 'de zakāt', 'het vasten van Ramadan', 'de bedevaart'], page: 9, origin: 'boek' },
    { kind: 'opsomming', title: 'De zuilen van het geloof', items: ['geloof in Allah', 'Zijn engelen', 'Zijn Boeken', 'Zijn boodschappers', 'de Laatste Dag', 'de voorbeschikking, het goede en het kwade ervan'], page: 16, origin: 'boek' },
    { kind: 'definitie', title: 'Geloof volgens Ahl as-Sunna', items: ['Uitspraak van de tong, daden van de ledematen, en overtuiging en daad van het hart.'], page: 26, origin: 'boek' },
    { kind: 'voorwaarde', title: 'De geldigheid van daden rust op de getuigenissen', items: ['oprechtheid (ikhlāṣ)', 'navolging van de Profeet ﷺ'], page: 18, origin: 'boek' },
    { kind: 'definitie', title: 'Betekenis van lā ilāha illā llāh', items: ['Er is niets dat terecht aanbeden wordt behalve Allah.'], page: 27, origin: 'boek' },
    { kind: 'uitzondering', title: 'Het bloed van een moslim, behalve in drie gevallen', items: ['een leven voor een leven', 'de getrouwde overspelige', 'wie zijn godsdienst verlaat en zich van de gemeenschap afscheidt'], page: 28, origin: 'boek' },
    { kind: 'onderscheid', title: 'Schaamte', items: ['Tegenover Allah: brengt gehoorzaamheid en het laten van Zijn verboden.', 'Tegenover mensen: brengt fatsoen.'], page: 26, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De islam is gebouwd op vijf; de twee getuigenissen zijn de basis.',
    'De niveaus van de godsdienst: islam, imān, iḥsān.',
    'Daden gaan naar de intenties; een daad is geldig door oprechtheid en navolging.',
    'Het geloof heeft ruim zeventig takken, de hoogste is lā ilāha illā llāh; het neemt toe en af.',
    'Het bloed van een moslim is alleen in drie gevallen toegestaan; straffen liggen bij de leider.',
    'Niet-moslims: met verdrag, met veiligheidsgarantie, dhimmī en ḥarbī.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarom zijn er precies vijf zuilen van de islam?', options: ['aanbidding is met woorden of met daden', 'het zijn de makkelijkste daden', 'ze werden in één jaar verplicht', 'het zijn allemaal lichamelijke daden'], answer: 0, explain: 'De getuigenissen zijn woorden, de andere vier zijn daden.', page: 10 },
    { type: 'mc', q: 'Wat is het hoogste niveau van de godsdienst?', options: ['iḥsān', 'islam', 'imān', 'ze zijn gelijk'], answer: 0, explain: 'Islam, dan imān, dan iḥsān.', page: 15 },
    { type: 'tf', q: 'In de voorbeschikking zelf zit kwaad.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'De voorbeschikking komt voort uit barmhartigheid en wijsheid; het kwaad zit in wat beschikt is.', page: 17 },
    { type: 'mc', q: 'Om welke twee hadith draait de islam volgens de geleerden?', options: ['de hadith over de intentie en "wie een daad verricht die niet volgens onze zaak is, die wordt afgewezen"', 'de hadith van Jibrīl en die van Muʿādh', 'de hadith over de takken en die over schaamte', 'de hadith over het bloed en die over de straffen'], answer: 0, explain: 'De eerste voor de daden van het hart, de tweede voor de daden van het lichaam.', page: 22 },
    { type: 'mc', q: 'Wat betekent biḍʿ?', options: ['van drie tot negen', 'tien', 'meer dan honderd', 'één'], answer: 0, explain: 'Zoals in de woordenlijst bij hadith 4.', page: 24 },
    { type: 'tf', q: 'De hadith over de takken van het geloof is een van de sterkste bewijzen dat het geloof toeneemt en afneemt.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Hij laat zien dat gelovigen verschillen in geloof.', page: 25 },
    { type: 'mc', q: 'Wie voert lijfstraffen uit?', options: ['de leider of zijn vertegenwoordiger', 'iedere moslim', 'de familie van het slachtoffer', 'de geleerden'], answer: 0, explain: '"Ga morgen, Unays …"; anders ontstaat wanorde.', page: 30 },
    { type: 'mc', q: 'Wie is een mustaʾman?', options: ['iemand die met een veiligheidsgarantie binnenkomt voor handel of werk', 'iemand die onder moslims woont en de jizya betaalt', 'iemand met wie een verdrag bestaat in zijn eigen land', 'iemand zonder verdrag of garantie'], answer: 0, explain: 'Hij is onschendbaar omdat hij een eigen garantie kreeg.', page: 30 }
  ]),
  note: 'Oefeningen van het boek op p. 12, 19, 23, 27 en 32. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-hadith', chapter: '1', unit: 1, ar, nl }
