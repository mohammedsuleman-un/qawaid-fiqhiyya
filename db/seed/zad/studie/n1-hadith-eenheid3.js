// Hoofdstukkaart bij الحديث (١), eenheid 3: الأحاديث ١١–١٥ (lessen 14–18, boek p. 55–75).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 55 (uitleg), 56, 58, 61, 64 (uitleg), 67 (uitleg),
// 70 en 73 zijn in het boek "alleen ter kennisname". Bij «ائتوا محمدًا» noemt het boek Ibn Ḥibbān;
// de opmerking vermeldt dat de hadith ook in de twee Ṣaḥīḥ’s staat. De naam van de vraagsteller
// in hadith 15 (Dhū l-Khuwayṣira al-Yamānī) staat zo in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (١)، سلسلة زاد العلمية',
  pages: '55–75',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'ابن عباس', text: 'لا تطروني كما أطرت النصارى ابن مريم، فإنما أنا عبده، فقولوا: عبد الله ورسوله', takhrij: 'رواه البخاري', note: 'الحديث الحادي عشر، سمعه ابن عباس من عمر على المنبر.', pages: [55], nl: 'Overdrijf niet over mij zoals de christenen overdreven over de zoon van Maryam; ik ben alleen Zijn dienaar, zeg dus: de dienaar van Allah en Zijn Boodschapper', nlNote: 'Hadith 11; Ibn ʿAbbās hoorde het van ʿUmar op de preekstoel.' },
  { narrator: '', text: 'أنا سيد ولد آدم يوم القيامة، وأول من ينشق عنه القبر، وأول شافع وأول مشفع', takhrij: 'رواه مسلم', note: 'وصفه بما فضله الله به حق واجب. ' + FYI, pages: [56], nl: 'Ik ben de meester van de kinderen van Ādam op de Dag der Opstanding, de eerste voor wie het graf opengaat, de eerste die voorspraak doet en de eerste wiens voorspraak aanvaard wordt', nlNote: 'Hem beschrijven met wat Allah hem aan voortreffelijkheid gaf, is een plicht. ' + FYI_NL },
  { narrator: '', text: 'ائتوا محمدًا ﷺ عبدًا غفر الله له ما تقدم من ذنبه وما تأخر', takhrij: 'رواه ابن حبان وصححه الأرناؤوط', note: 'من قول عيسى يوم القيامة، في شرف مقام العبودية. وهو في الصحيحين من حديث أنس. ' + FYI, pages: [58], nl: 'Ga naar Muḥammad ﷺ, een dienaar wiens vroegere en latere zonden Allah heeft vergeven', nlNote: 'Woorden van ʿĪsā op de Dag der Opstanding, over de eer van het dienaarschap. Ook in de twee Ṣaḥīḥ’s, van Anas. ' + FYI_NL },
  { narrator: 'جندب بن عبد الله', text: 'إني أبرأ إلى الله أن يكون لي منكم خليل، فإن الله تعالى قد اتخذني خليلًا كما اتخذ إبراهيم خليلًا، ولو كنت متخذًا من أمتي خليلًا لاتخذت أبا بكر خليلًا، ألا وإن من كان قبلكم كانوا يتخذون قبور أنبيائهم وصالحيهم مساجد، ألا فلا تتخذوا القبور مساجد، إني أنهاكم عن ذلك', takhrij: 'رواه مسلم', note: 'الحديث الثاني عشر، قاله قبل أن يموت بخمس.', pages: [60], nl: 'Ik verklaar tegenover Allah dat ik onder jullie geen boezemvriend heb, want Allah heeft mij als boezemvriend genomen zoals Hij Ibrāhīm als boezemvriend nam. Zou ik uit mijn gemeenschap een boezemvriend nemen, dan nam ik Abū Bakr. Let op: wie vóór jullie waren, maakten van de graven van hun profeten en vromen gebedsplaatsen. Maak dus geen gebedsplaatsen van graven; dat verbied ik jullie', nlNote: 'Hadith 12, vijf dagen vóór zijn overlijden gezegd.' },
  { narrator: 'عمر بن الخطاب', text: 'إني أعلم أنك حجر لا تضر ولا تنفع، ولولا أني رأيت النبي ﷺ يقبلك ما قبلتك', takhrij: 'رواه البخاري', note: 'الحديث الثالث عشر، قاله عند تقبيل الحجر الأسود.', pages: [64], nl: 'Ik weet dat je een steen bent die niet schaadt en niet baat; had ik de Profeet ﷺ jou niet zien kussen, dan had ik je niet gekust', nlNote: 'Hadith 13, gezegd bij het kussen van de Zwarte Steen.' },
  { narrator: 'ابن عمر', text: 'ألا إن الله ينهاكم أن تحلفوا بآبائكم، من كان حالفًا فليحلف بالله أو ليصمت', takhrij: 'رواه البخاري', note: 'الحديث الرابع عشر، قاله لما أدرك عمر يحلف بأبيه.', pages: [67], nl: 'Let op: Allah verbiedt jullie bij je vaders te zweren; wie wil zweren, laat hem bij Allah zweren of zwijgen', nlNote: 'Hadith 14, gezegd toen hij ʿUmar bij zijn vader hoorde zweren.' },
  { narrator: '', text: 'من حلف بغير الله فقد كفر أو أشرك', takhrij: 'رواه الترمذي وحسنه', note: '', pages: [67, 69], nl: 'wie bij iets anders dan Allah zweert, heeft ongeloof of afgoderij begaan', nlNote: '' },
  { narrator: '', text: 'من حلف على يمين فقال: إن شاء الله لم يحنث', takhrij: 'رواه أحمد والترمذي وصححه الألباني', note: 'في تقييد اليمين بالمشيئة.', pages: [68], nl: 'wie een eed zweert en "als Allah wil" zegt, breekt zijn eed niet', nlNote: 'Over het toevoegen van "als Allah wil" aan een eed.' },
  { narrator: 'ابن مسعود', text: 'لأن أحلف بالله كاذبًا أحب إلي من أن أحلف بغيره صادقًا', takhrij: 'أخرجه عبد الرزاق في المصنف وصححه الألباني', note: 'أثر. لأن الحلف بغير الله شرك، والحلف بالله كاذبًا حرام، والشرك أعظم.', pages: [68], nl: 'Liever zweer ik leugenachtig bij Allah dan waarheidsgetrouw bij iets anders', nlNote: 'Een uitspraak van Ibn Masʿūd: zweren bij iets anders dan Allah is afgoderij, leugenachtig zweren bij Allah is verboden, en afgoderij is erger.' },
  { narrator: '', text: 'من حلف على يمين فرأى غيرها خيرًا منها فليكفر عن يمينه وليفعل', takhrij: 'رواه مسلم', note: FYI, pages: [70], nl: 'wie een eed zweert en iets anders beter vindt, laat hem boete doen voor zijn eed en het betere doen', nlNote: FYI_NL },
  { narrator: '', text: 'من حلف على يمين بملة غير الإسلام كاذبًا فهو كما قال', takhrij: 'متفق عليه', note: FYI, pages: [70], nl: 'wie leugenachtig zweert bij een andere godsdienst dan de islam, is zoals hij zei', nlNote: FYI_NL },
  { narrator: '', text: 'والله ما بين لابتيها أهل بيت أفقر منا', takhrij: 'متفق عليه', note: 'قول رجل حلف على غالب ظنه، ولم يلزمه النبي ﷺ بشيء. ' + FYI, pages: [70], nl: 'Bij Allah, tussen haar twee lavavelden is geen huisgezin armer dan wij', nlNote: 'Woorden van een man die zwoer op wat hij dacht; de Profeet ﷺ legde hem niets op. ' + FYI_NL },
  { narrator: '', text: 'أفلح وأبيه إن صدق', takhrij: 'في صحيح مسلم', note: 'ليس حلفًا، بل كلمة جرت بها عادة العرب، وقيل: قبل النهي.', pages: [71], nl: 'hij heeft succes, bij zijn vader, als hij de waarheid spreekt', nlNote: 'Geen eed, maar een uitdrukking die de Arabieren gewoon gebruikten; ook gezegd: van vóór het verbod.' },
  { narrator: 'أنس بن مالك', text: 'متى الساعة؟ قال: «وماذا أعددت لها؟» قال: لا شيء، إلا أني أحب الله ورسوله، فقال: «أنت مع من أحببت»', takhrij: 'متفق عليه', note: 'الحديث الخامس عشر. قال أنس: فأنا أحب النبي ﷺ وأبا بكر وعمر، وأرجو أن أكون معهم بحبي إياهم وإن لم أعمل بمثل أعمالهم.', pages: [72], nl: 'Wanneer is het Uur? Hij zei: "Wat heb je ervoor voorbereid?" Hij zei: niets, behalve dat ik Allah en Zijn Boodschapper liefheb. Hij zei: "Jij bent bij wie je liefhebt"', nlNote: 'Hadith 15. Anas zei: ik heb de Profeet ﷺ, Abū Bakr en ʿUmar lief, en hoop door die liefde bij hen te zijn, ook al deed ik niet wat zij deden.' }
]

const TAKHRIJ_NL = {
  'رواه البخاري': 'al-Bukhārī',
  'رواه مسلم': 'Muslim',
  'رواه ابن حبان وصححه الأرناؤوط': 'Ibn Ḥibbān; authentiek volgens al-Arnaʾūṭ',
  'رواه الترمذي وحسنه': 'at-Tirmidhī, die hem goed (ḥasan) noemde',
  'رواه أحمد والترمذي وصححه الألباني': 'Aḥmad en at-Tirmidhī; authentiek volgens al-Albānī',
  'أخرجه عبد الرزاق في المصنف وصححه الألباني': 'ʿAbd ar-Razzāq in al-Muṣannaf; authentiek volgens al-Albānī',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'في صحيح مسلم': 'in Ṣaḥīḥ Muslim'
}
const NARRATOR_NL = { 'ابن عباس': 'Ibn ʿAbbās', 'جندب بن عبد الله': 'Jundub ibn ʿAbdallāh', 'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'ابن عمر': 'Ibn ʿUmar', 'ابن مسعود': 'Ibn Masʿūd', 'أنس بن مالك': 'Anas ibn Mālik' }

const PERSONS = [
  ['ibn-abbas', 'text', [55], 'روى عن عمر «لا تطروني».', 'Overleverde van ʿUmar: "overdrijf niet over mij".'],
  ['umar-ibn-al-khattab', 'text', [55, 64, 67], 'حدث بـ«لا تطروني» على المنبر، وقال للحجر الأسود: «إني أعلم أنك حجر»، ونهاه النبي ﷺ عن الحلف بأبيه.', 'Vertelde "overdrijf niet over mij" op de preekstoel, zei tegen de Zwarte Steen "ik weet dat je een steen bent", en de Profeet ﷺ verbood hem bij zijn vader te zweren.'],
  ['jundub-ibn-abdallah', 'text', [60], 'راوي الحديث الثاني عشر في الخلة والنهي عن اتخاذ القبور مساجد.', 'Overleveraar van hadith 12 over de boezemvriendschap en het verbod graven tot gebedsplaatsen te maken.'],
  ['abu-bakr-as-siddiq', 'text', [60, 62, 75], '«لو كنت متخذًا من أمتي خليلًا لاتخذت أبا بكر»؛ أفضل هذه الأمة بعد نبيها.', '"Zou ik uit mijn gemeenschap een boezemvriend nemen, dan nam ik Abū Bakr"; de beste van deze gemeenschap na haar Profeet.'],
  ['ibn-umar', 'text', [67], 'راوي الحديث الرابع عشر في النهي عن الحلف بالآباء.', 'Overleveraar van hadith 14 over het verbod bij je vaders te zweren.'],
  ['ibn-masud', 'text', [68], 'قال: «لأن أحلف بالله كاذبًا أحب إلي من أن أحلف بغيره صادقًا».', 'Zei: "liever zweer ik leugenachtig bij Allah dan waarheidsgetrouw bij iets anders".'],
  ['anas-ibn-malik', 'text', [72, 75], 'راوي «أنت مع من أحببت»، وقال: فأنا أحب النبي ﷺ وأبا بكر وعمر.', 'Overleveraar van "jij bent bij wie je liefhebt"; zei: ik heb de Profeet ﷺ, Abū Bakr en ʿUmar lief.'],
  ['dhu-l-khuwaysira-al-yamani', 'text', [73], 'الأعرابي الذي سأل عن الساعة، كما سماه الكتاب.', 'De bedoeïen die naar het Uur vroeg, zoals het boek hem noemt.'],
  ['muhammad-ibn-abd-al-wahhab', 'text', [58, 59], 'قال في النبي ﷺ: «عبد لا يعبد، ورسول لا يكذب، بل يطاع ويتبع».', 'Zei over de Profeet ﷺ: "een dienaar die niet aanbeden wordt, een boodschapper die niet geloochend wordt, maar gehoorzaamd en gevolgd".'],
  ['al-busiri', 'text', [58], 'ذكر الكتاب بيتًا من بردته مثالًا للمدح المذموم.', 'Het boek noemt een vers uit zijn Burda als voorbeeld van afgekeurde lof.'],
  ['ibn-al-qayyim', 'text', [61, 63], 'بين أن الخلة أخص من المحبة، وقال بهدم القباب المبنية على القبور.', 'Legde uit dat boezemvriendschap specifieker is dan liefde, en zei dat koepels op graven afgebroken moeten worden.'],
  ['ibn-taymiyya', 'text', [63], 'قال: صرح عامة الطوائف بالنهي عن بناء المساجد على القبور.', 'Zei: vrijwel alle richtingen verbieden uitdrukkelijk moskeeën op graven te bouwen.'],
  ['at-tabari', 'text', [65], 'قال: إنما قال عمر ذلك لأن الناس كانوا حديثي عهد بعبادة الأصنام.', 'Zei: ʿUmar zei dit omdat de mensen pas kort geleden afgoden aanbaden.'],
  ['al-bukhari', 'takhrij', [55, 64, 67, 72], 'أخرج «لا تطروني» وحديث الحجر والحلف بالآباء.', 'Nam "overdrijf niet over mij", de hadith over de Steen en die over zweren bij vaders op.'],
  ['muslim', 'takhrij', [56, 60, 70, 71, 72], 'أخرج حديث جندب و«أنا سيد ولد آدم» وغيرهما.', 'Nam de hadith van Jundub, "ik ben de meester van de kinderen van Ādam" en andere op.'],
  ['ibn-hibban', 'takhrij', [58], 'روى «ائتوا محمدًا ﷺ».', 'Overleverde "ga naar Muḥammad ﷺ".'],
  ['al-arnaut', 'takhrij', [58], 'صحح رواية ابن حبان.', 'Verklaarde de overlevering van Ibn Ḥibbān authentiek.'],
  ['at-tirmidhi', 'takhrij', [67, 68], 'روى «من حلف بغير الله فقد كفر أو أشرك» وحسنه.', 'Overleverde "wie bij iets anders dan Allah zweert …" en noemde hem goed.'],
  ['ahmad-ibn-hanbal', 'takhrij', [68], 'روى حديث الاستثناء في اليمين.', 'Overleverde de hadith over "als Allah wil" bij een eed.'],
  ['abd-ar-razzaq', 'takhrij', [68], 'روى أثر ابن مسعود في المصنف.', 'Overleverde de uitspraak van Ibn Masʿūd in al-Muṣannaf.'],
  ['al-albani', 'takhrij', [68], 'صحح حديث الاستثناء وأثر ابن مسعود.', 'Verklaarde de hadith over "als Allah wil" en de uitspraak van Ibn Masʿūd authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'الأحاديث ١١–١٥: حماية التوحيد',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'النهي عن الغلو في النبي ﷺ ووصفه بأنه عبد الله ورسوله، ومقام الخلة والنهي عن اتخاذ القبور مساجد، وقول عمر للحجر الأسود في الاتباع، والنهي عن الحلف بغير الله وأحكام اليمين، ثم «أنت مع من أحببت» وفضل محبة الصالحين.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'الأحاديث الخمسة كما في الكتاب.',
    root: { label: 'الأحاديث ١١–١٥', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'لا تطروني', sub: 'الدرس ١٤', page: 55, children: ['الإطراء', 'عبد الله ورسوله', 'المدح المذموم'] },
      { label: 'لو كنت متخذًا خليلًا', sub: 'الدرس ١٥', page: 60, children: ['الخلة والمحبة', 'فضل أبي بكر', 'لا تتخذوا القبور مساجد'] },
      { label: 'تقبيل الحجر الأسود', sub: 'الدرس ١٦', page: 64, children: ['لا تضر ولا تنفع', 'الاتباع', 'أركان الكعبة'] },
      { label: 'لا تحلفوا بآبائكم', sub: 'الدرس ١٧', page: 67, children: ['الحلف بالله', 'الحلف بغير الله شرك', 'الكفارة'] },
      { label: 'أنت مع من أحببت', sub: 'الدرس ١٨', page: 72, children: ['ماذا أعددت لها', 'محبة الصالحين', 'الاستعداد للآخرة'] }
    ]
  },
  points: [
    { text: 'حق الأنبياء العبودية والرسالة، أما الألوهية فحق الله وحده.', page: 56 },
    { text: 'من رفع شخصًا فوق حقه فهو معتد آثم، والواجب أن يقصر كل أحد على ما أعطاه الله من منزلة.', page: 57 },
    { text: 'أشرف المقامات مقام العبودية، والجمع بين «عبد الله ورسوله» دفع للإفراط والتفريط.', page: 58 },
    { text: 'لم يترك النبي ﷺ بابًا من أبواب الشرك إلا سده حتى قبيل موته بأيام.', page: 62 },
    { text: 'الصلاة عند القبور وإليها من اتخاذها مساجد وإن لم يبن عليها مسجد.', page: 62 },
    { text: 'الضر والنفع بيد الله، وتقبيل الحجر لمجرد اتباع النبي ﷺ.', page: 64 },
    { text: 'الحلف بغير الله كائنًا من كان محرم، ووصف بأنه شرك وكفر.', page: 68 },
    { text: 'من أحب قومًا كان معهم، فالاستعداد للدار الآخرة هو الشيء المهم.', page: 74 }
  ],
  terms: [
    { term: 'الإطراء', translit: 'al-iṭrāʾ', meaning: 'الإفراط في المديح ومجاوزة الحد فيه.', explanation: 'وقيل: المديح بالباطل والكذب فيه.', notes: [], page: 55 },
    { term: 'عبد الله ورسوله', translit: 'ʿabdu llāhi wa-rasūluh', meaning: 'صفوني بذلك كما وصفني ربي.', explanation: 'عبد لا يعبد، ورسول لا يكذب بل يطاع ويتبع.', notes: [], page: 58 },
    { term: 'أبرأ إلى الله', translit: 'abraʾu ilā llāh', meaning: 'أمتنع من هذا وأنكره.', explanation: '', notes: [], page: 60 },
    { term: 'الخليل', translit: 'al-khalīl', meaning: 'البالغ الغاية في المحبة الخالصة.', explanation: 'من الخلة، وهي تخلل المودة في القلب.', notes: [], page: 60 },
    { term: 'اتخاذ القبور مساجد', translit: 'ittikhādh al-qubūr masājid', meaning: 'الصلاة عندها والتوجه إليها في الدعاء والطلب.', explanation: '', notes: [], page: 61 },
    { term: 'لا تضر ولا تنفع', translit: 'lā taḍurru wa-lā tanfaʿ', meaning: 'أي بذاتك؛ وإنما النفع بالثواب على امتثال أمر الله في تقبيله.', explanation: '', notes: [], page: 64 },
    { term: 'ليصمت', translit: 'li-yaṣmut', meaning: 'ليسكت ولا يحلف أصلًا.', explanation: '', notes: [], page: 67 },
    { term: 'لابتا المدينة', translit: 'lābatā l-madīna', meaning: 'حرتاها؛ والحرة أرض ذات حجارة سود.', explanation: '', notes: [], page: 70 },
    { term: 'ماذا أعددت لها', translit: 'mādhā aʿdadta lahā', meaning: 'ما هيأت من الأعمال الصالحة التي هي أحق بالسؤال عنها.', explanation: '', notes: [], page: 72 },
    { term: 'أنت مع من أحببت', translit: 'anta maʿa man aḥbabt', meaning: 'مع من غلبت محبته على محبة غيره من النفس والأهل والمال، ومدخل في زمرته.', explanation: '', notes: [], page: 72 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'المحبة والخلة',
      intro: 'كما بينه ابن القيم.',
      columns: ['المحبة', 'الخلة'],
      rows: [
        { label: 'العموم', cells: ['عامة', 'خاصة، وهي نهاية المحبة'] },
        { label: 'في حق النبي ﷺ', cells: ['أحب عائشة وأباها وعمر وغيرهم', 'نفى أن يكون له خليل غير ربه'] }
      ],
      page: 61
    },
    {
      type: 'steps',
      title: 'المشروع في الحجر الأسود',
      intro: 'على الترتيب بحسب الإمكان.',
      nodes: [
        { label: 'يمسحه بيده اليمنى ويقبله', page: 66 },
        { label: 'فإن لم يمكن استلمه وقبل يده', page: 66 },
        { label: 'فإن لم يمكن أشار إليه ولا يقبل', page: 66 }
      ]
    },
    {
      type: 'compare',
      title: 'أنواع اليمين',
      intro: 'كما في فوائد الحديث الرابع عشر.',
      columns: ['الحكم'],
      rows: [
        { label: 'بالله على شيء مستقبل', cells: ['إن خالفها فعليه الكفارة'] },
        { label: 'بالله على شيء ماض', cells: ['لا كفارة، ويأثم إن كان كاذبًا'] },
        { label: 'بالله على غالب ظنه ثم تبين خلافه', cells: ['لا إثم ولا كفارة (للاطلاع فقط)'] },
        { label: 'بغير الله', cells: ['يمين غير منعقدة مع لحوق الإثم'] }
      ],
      page: 68
    },
    {
      type: 'compare',
      title: 'الحلف بغير الله',
      intro: 'متى يكون شركًا أصغر ومتى يكون أكبر.',
      columns: ['شرك أصغر', 'شرك أكبر'],
      rows: [
        { label: 'الصورة', cells: ['كلمة تجري على اللسان بلا تعظيم في القلب', 'تعظيم المخلوق كتعظيم الله'] }
      ],
      page: 69
    }
  ],
  sections: [
    { title: 'سد الذرائع إلى الشرك (للاطلاع فقط)', text: 'خوفًا على أمته من الشرك الذي وقعت فيه الأمم السابقة حذرها من الغلو فيه ومجاوزة الحد في مدحه بنسبة أوصاف الله وأفعاله إليه، كما غلت النصارى في المسيح.', more: '[المائدة: ٧٢]. ' + FYI, page: 55 },
    { title: 'نسبة عيسى إلى مريم', text: 'في قوله «ابن مريم» تبعيد له عن الإلهية وتأكيد لبشريته.', more: '', page: 57 },
    { title: 'المدح المذموم (للاطلاع فقط)', text: 'هو ما يتجاوز فيه الحد ويقع في المحظور؛ ومثل له الكتاب بقول البوصيري في البردة: «يا أكرم الخلق ما لي من ألوذ به سواك عند حدوث الحادث العمم»، وقال: هذا المعنى لا يصرف لغير الله، فهو الذي يعاذ به ويلاذ به.', more: FYI, page: 58 },
    { title: 'فضل أبي بكر', text: 'الصديق أفضل الصحابة وأفضل هذه الأمة بعد نبيها، وفي الحديث رد على الطاعنين فيه وبيان علو منزلته.', more: '', page: 62 },
    { title: 'علة النهي عن الصلاة عند القبور', text: 'العلة الخوف على الأمة أن تقع فيما وقع فيه من قبلها من الشرك، لا النجاسة؛ فقد لعن النبي ﷺ اليهود والنصارى على اتخاذ قبور أنبيائهم مساجد.', more: '', page: 62 },
    { title: 'البناء على القبور', text: 'قال ابن تيمية: صرح عامة الطوائف بالنهي عن بناء المساجد على القبور؛ وقال ابن القيم: يجب هدم القباب التي بنيت على القبور لأنها أسست على معصية الرسول ﷺ.', more: '', page: 63 },
    { title: 'لماذا قال عمر ذلك؟', text: 'قال الطبري: لأن الناس كانوا حديثي عهد بعبادة الأصنام، فخشي أن يظن الجهال أن استلام الحجر مثل ما كانت العرب تفعله في الجاهلية.', more: '', page: 65 },
    { title: 'ما يقبل من الكعبة', text: 'لا يشرع تقبيل شيء من الكعبة إلا الحجر الأسود؛ والركن اليماني يستلم فقط، ولا يستلم غيرهما.', more: '', page: 65 },
    { title: 'التسليم للشرع', text: 'التحسين والتقبيح من قبل الشرع لا العقل؛ والعبادات ضربان: ما فهم معناه وعلته، وما وضع لمجرد التعبد.', more: '', page: 66 },
    { title: 'من حلف فرأى غيرها خيرًا (للاطلاع فقط)', text: 'من حلف ألا يكلم ذا رحمه فالأتقى أن يكلمه ويكفر عن يمينه، لأن هجر المسلم حرام وصلة الرحم واجبة.', more: FYI, page: 70 },
    { title: '«أفلح وأبيه»', text: 'ليس حلفًا، إنما هي كلمة جرت عادة العرب أن تدخلها في كلامها غير قاصدة حقيقة الحلف؛ والنهي فيمن قصد حقيقته. وقيل: يحتمل أنه قبل النهي.', more: '', page: 71 },
    { title: 'محبة الصالحين', text: 'لا يشترط في الانتفاع بمحبة الصالحين أن يعمل عملهم، ولا يلزم من كونه معهم أن تكون منزلته مثلهم من كل وجه؛ ومن محبة الله ورسوله امتثال أمرهما واجتناب نهيهما.', more: '', page: 74 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الإطراء', items: ['الإفراط في المديح ومجاوزة الحد فيه، وقيل: المديح بالباطل.'], page: 55, origin: 'boek' },
    { kind: 'opsomming', title: 'مقتضى شهادة أن محمدًا رسول الله', items: ['طاعته فيما أمر', 'تصديقه فيما أخبر', 'اجتناب ما عنه نهى وزجر', 'ألا يعبد الله إلا بما شرع'], page: 58, origin: 'boek' },
    { kind: 'onderscheid', title: 'المحبة والخلة', items: ['المحبة عامة.', 'الخلة خاصة، وهي نهاية المحبة.'], page: 61, origin: 'boek' },
    { kind: 'bewijs', title: 'النهي عن اتخاذ القبور مساجد', items: ['«ألا فلا تتخذوا القبور مساجد، إني أنهاكم عن ذلك».'], page: 60, origin: 'boek' },
    { kind: 'uitzondering', title: '«أفلح وأبيه إن صدق»', items: ['ليس حلفًا مقصودًا، أو كان قبل النهي.'], page: 71, origin: 'boek' },
    { kind: 'opsomming', title: 'فائدتا الاستثناء في اليمين', items: ['أن يتيسر له ما حلف عليه', 'أنه لو حنث فلا كفارة عليه'], page: 68, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'لا تطروا النبي ﷺ، وقولوا: عبد الله ورسوله.',
    'الخلة أخص من المحبة، وأبو بكر أفضل الأمة بعد نبيها.',
    'لا تتخذوا القبور مساجد، والعلة الخوف من الشرك.',
    'الحجر الأسود لا يضر ولا ينفع، وتقبيله اتباع.',
    'من كان حالفًا فليحلف بالله أو ليصمت.',
    'المرء مع من أحب، فاستعد للآخرة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الإطراء؟', options: ['الإفراط في المديح ومجاوزة الحد', 'الثناء بالحق', 'الدعاء للنبي ﷺ', 'الصلاة على النبي ﷺ'], answer: 0, explain: 'كما أطرت النصارى ابن مريم.', page: 55 },
    { type: 'tf', q: 'وصف النبي ﷺ بما فضله الله به من الإطراء المنهي عنه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'بل هو حق واجب، كقوله: «أنا سيد ولد آدم».', page: 56 },
    { type: 'mc', q: 'أيهما أعلى: المحبة أم الخلة؟', options: ['الخلة', 'المحبة', 'هما سواء', 'لا فرق بينهما'], answer: 0, explain: 'الخلة نهاية المحبة.', page: 61 },
    { type: 'mc', q: 'ما علة النهي عن الصلاة عند القبور؟', options: ['الخوف من الوقوع في الشرك', 'نجاسة المقبرة', 'ضيق المكان', 'إيذاء الموتى'], answer: 0, explain: 'وليست النجاسة، فقبور الأنبياء من أنظف البقاع.', page: 62 },
    { type: 'mc', q: 'ما الذي يستلم من الكعبة ولا يقبل؟', options: ['الركن اليماني', 'الحجر الأسود', 'الملتزم', 'الركنان الشاميان'], answer: 0, explain: 'ولا يقبل إلا الحجر الأسود.', page: 65 },
    { type: 'tf', q: 'تجب الكفارة على من حلف بغير الله ثم حنث.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هي يمين غير منعقدة مع لحوق الإثم.', page: 68 },
    { type: 'mc', q: 'متى يكون الحلف بغير الله شركًا أكبر؟', options: ['إذا قصد تعظيم المخلوق كتعظيم الله', 'إذا جرى على اللسان بلا قصد', 'إذا كان صادقًا', 'إذا حلف بأبيه'], answer: 0, explain: 'وإن جرى على لسانه بلا تعظيم فهو أصغر.', page: 69 },
    { type: 'mc', q: 'بماذا أجاب النبي ﷺ من سأله: متى الساعة؟', options: ['وماذا أعددت لها؟', 'بعد ألف سنة', 'لا أدري', 'قريبًا'], answer: 0, explain: 'أرشده إلى ما هو أهم.', page: 72 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٥٩ و٦٣ و٦٦ و٧١ و٧٥. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Hadith 11–15: de bescherming van de eenheid van Allah',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Het verbod te overdrijven over de Profeet ﷺ en hem "de dienaar van Allah en Zijn Boodschapper" te noemen, de boezemvriendschap en het verbod graven tot gebedsplaatsen te maken, de woorden van ʿUmar tegen de Zwarte Steen over navolging, het verbod te zweren bij iets anders dan Allah en de regels van de eed, en tot slot "jij bent bij wie je liefhebt" en de waarde van liefde voor de vromen.',
  source: { ...source, label: 'Kitāb al-Ḥadīth (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De vijf hadith zoals in het boek.',
    root: { label: 'Hadith 11–15', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Overdrijf niet over mij', sub: 'les 14', page: 55, children: ['overdreven lof', 'dienaar en Boodschapper', 'afgekeurde lof'] },
      { label: 'Als ik een boezemvriend nam', sub: 'les 15', page: 60, children: ['boezemvriendschap en liefde', 'de deugd van Abū Bakr', 'geen gebedsplaatsen van graven'] },
      { label: 'Het kussen van de Zwarte Steen', sub: 'les 16', page: 64, children: ['schaadt en baat niet', 'navolging', 'de hoeken van de Kaʿba'] },
      { label: 'Zweer niet bij je vaders', sub: 'les 17', page: 67, children: ['zweren bij Allah', 'zweren bij anderen is afgoderij', 'de boete'] },
      { label: 'Jij bent bij wie je liefhebt', sub: 'les 18', page: 72, children: ['wat heb je voorbereid', 'liefde voor de vromen', 'voorbereiding op het Hiernamaals'] }
    ]
  },
  points: [
    { text: 'Het recht van de profeten is dienaarschap en boodschapperschap; godheid is alleen het recht van Allah.', page: 56 },
    { text: 'Wie iemand boven zijn recht verheft, overtreedt en zondigt; ieder blijft bij de positie die Allah hem gaf.', page: 57 },
    { text: 'Het edelste niveau is dienaarschap; "dienaar van Allah en Zijn Boodschapper" houdt overdrijving en tekortschieten samen weg.', page: 58 },
    { text: 'De Profeet ﷺ sloot elke deur naar afgoderij, tot enkele dagen vóór zijn dood.', page: 62 },
    { text: 'Bidden bij of in de richting van graven is ze tot gebedsplaats maken, ook als er geen moskee op gebouwd is.', page: 62 },
    { text: 'Schade en baat liggen bij Allah; de Steen wordt alleen gekust om de Profeet ﷺ te volgen.', page: 64 },
    { text: 'Zweren bij iets anders dan Allah, wat het ook is, is verboden en wordt afgoderij en ongeloof genoemd.', page: 68 },
    { text: 'Wie mensen liefheeft, is bij hen; het belangrijkste is je voorbereiden op het Hiernamaals.', page: 74 }
  ],
  terms: [
    { term: 'الإطراء', translit: 'al-iṭrāʾ', meaning: 'Overdreven lof, voorbij de grens.', explanation: 'Ook gezegd: lof met onwaarheid.', notes: [], page: 55 },
    { term: 'عبد الله ورسوله', translit: 'ʿabdu llāhi wa-rasūluh', meaning: 'Beschrijf mij zoals mijn Heer mij beschreef.', explanation: 'Een dienaar die niet aanbeden wordt, een boodschapper die niet geloochend maar gehoorzaamd en gevolgd wordt.', notes: [], page: 58 },
    { term: 'أبرأ إلى الله', translit: 'abraʾu ilā llāh', meaning: 'Ik onthoud mij hiervan en wijs het af.', explanation: '', notes: [], page: 60 },
    { term: 'الخليل', translit: 'al-khalīl', meaning: 'Boezemvriend: wie het uiterste van zuivere liefde bereikt.', explanation: 'Van khulla: liefde die het hart doordringt.', notes: [], page: 60 },
    { term: 'اتخاذ القبور مساجد', translit: 'ittikhādh al-qubūr masājid', meaning: 'Bij graven bidden en je er in smeekbede en verzoek op richten.', explanation: '', notes: [], page: 61 },
    { term: 'لا تضر ولا تنفع', translit: 'lā taḍurru wa-lā tanfaʿ', meaning: 'Niet uit zichzelf; het nut ligt in de beloning voor het gehoorzamen van Allah door hem te kussen.', explanation: '', notes: [], page: 64 },
    { term: 'ليصمت', translit: 'li-yaṣmut', meaning: 'Laat hem zwijgen en helemaal niet zweren.', explanation: '', notes: [], page: 67 },
    { term: 'لابتا المدينة', translit: 'lābatā l-madīna', meaning: 'De twee lavavelden van Medina: grond met zwarte stenen.', explanation: '', notes: [], page: 70 },
    { term: 'ماذا أعددت لها', translit: 'mādhā aʿdadta lahā', meaning: 'Welke goede daden heb je voorbereid? Dat is de vraag die er werkelijk toe doet.', explanation: '', notes: [], page: 72 },
    { term: 'أنت مع من أحببت', translit: 'anta maʿa man aḥbabt', meaning: 'Je bent bij wie je meer liefhebt dan jezelf, je familie en je bezit, en hoort bij zijn groep.', explanation: '', notes: [], page: 72 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Liefde en boezemvriendschap',
      intro: 'Zoals Ibn al-Qayyim uitlegt.',
      columns: ['Liefde (maḥabba)', 'Boezemvriendschap (khulla)'],
      rows: [
        { label: 'Bereik', cells: ['algemeen', 'specifiek: het uiterste van liefde'] },
        { label: 'Bij de Profeet ﷺ', cells: ['hij had ʿĀʾisha, haar vader, ʿUmar en anderen lief', 'hij had geen boezemvriend behalve zijn Heer'] }
      ],
      page: 61
    },
    {
      type: 'steps',
      title: 'Wat bij de Zwarte Steen voorgeschreven is',
      intro: 'In volgorde, naar wat mogelijk is.',
      nodes: [
        { label: 'Met de rechterhand aanraken en kussen', page: 66 },
        { label: 'Kan dat niet: aanraken en de hand kussen', page: 66 },
        { label: 'Kan dat niet: ernaar wijzen, zonder te kussen', page: 66 }
      ]
    },
    {
      type: 'compare',
      title: 'Soorten eden',
      intro: 'Zoals in de lessen van hadith 14.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Bij Allah, over iets in de toekomst', cells: ['wie ertegenin gaat, doet boete'] },
        { label: 'Bij Allah, over iets in het verleden', cells: ['geen boete; zonde als hij liegt'] },
        { label: 'Bij Allah, op wat hij dacht, en het bleek anders', cells: ['geen zonde en geen boete (alleen ter kennisname)'] },
        { label: 'Bij iets anders dan Allah', cells: ['geen geldige eed, wel zonde'] }
      ],
      page: 68
    },
    {
      type: 'compare',
      title: 'Zweren bij iets anders dan Allah',
      intro: 'Wanneer het kleine en wanneer het grote afgoderij is.',
      columns: ['Kleine afgoderij', 'Grote afgoderij'],
      rows: [
        { label: 'Vorm', cells: ['een uitdrukking op de tong, zonder verering in het hart', 'het schepsel vereren zoals Allah'] }
      ],
      page: 69
    }
  ],
  sections: [
    { title: 'De wegen naar afgoderij afsluiten (alleen ter kennisname)', text: 'Uit vrees dat zijn gemeenschap in de afgoderij van eerdere volken zou vallen, waarschuwde hij tegen overdrijving over hem en tegen lof die hem eigenschappen en daden van Allah toeschrijft, zoals de christenen overdreven over de Messias.', more: 'al-Māʾida 5:72. ' + FYI_NL, page: 55 },
    { title: '"De zoon van Maryam"', text: 'ʿĪsā aan Maryam verbinden houdt hem ver van godheid en bevestigt dat hij mens is.', more: '', page: 57 },
    { title: 'Afgekeurde lof (alleen ter kennisname)', text: 'Lof die de grens overschrijdt en in het verbodene valt. Het boek noemt als voorbeeld het vers uit de Burda van al-Būṣīrī: "O edelste der schepselen, bij wie anders dan u kan ik schuilen wanneer de algemene ramp komt?" en zegt dat dit alleen aan Allah toekomt: bij Hem zoekt men toevlucht en beschutting.', more: FYI_NL, page: 58 },
    { title: 'De deugd van Abū Bakr', text: 'aṣ-Ṣiddīq is de beste van de metgezellen en van deze gemeenschap na haar Profeet; de hadith weerlegt wie hem aanvalt en toont zijn hoge positie.', more: '', page: 62 },
    { title: 'Waarom bidden bij graven verboden is', text: 'De reden is de vrees dat de gemeenschap in de afgoderij van eerdere volken valt, niet onreinheid: de Profeet ﷺ vervloekte de joden en christenen omdat zij de graven van hun profeten tot gebedsplaatsen maakten.', more: '', page: 62 },
    { title: 'Bouwen op graven', text: 'Ibn Taymiyya: vrijwel alle richtingen verbieden uitdrukkelijk moskeeën op graven te bouwen. Ibn al-Qayyim: koepels op graven moeten worden afgebroken, omdat ze in ongehoorzaamheid aan de Boodschapper ﷺ gebouwd zijn.', more: '', page: 63 },
    { title: 'Waarom ʿUmar dit zei', text: 'aṭ-Ṭabarī: omdat de mensen pas kort geleden afgoden aanbaden, en hij vreesde dat onwetenden zouden denken dat het aanraken van de Steen was zoals de Arabieren in de tijd van onwetendheid deden.', more: '', page: 65 },
    { title: 'Wat van de Kaʿba gekust wordt', text: 'Van de Kaʿba wordt alleen de Zwarte Steen gekust; de Jemenitische hoek wordt alleen aangeraakt, en andere delen niet.', more: '', page: 65 },
    { title: 'Overgave aan de wet', text: 'Wat goed en slecht is, bepaalt de wet en niet het verstand. Er zijn twee soorten aanbidding: waarvan de betekenis en reden begrepen wordt, en wat alleen als aanbidding is ingesteld.', more: '', page: 66 },
    { title: 'Een eed waarvan het tegendeel beter is (alleen ter kennisname)', text: 'Wie zweert niet met een familielid te spreken, doet er godvrezender aan met hem te spreken en boete te doen, want een moslim mijden is verboden en familiebanden onderhouden is verplicht.', more: FYI_NL, page: 70 },
    { title: '"Hij heeft succes, bij zijn vader"', text: 'Dat is geen eed, maar een uitdrukking die de Arabieren gebruikten zonder werkelijk te zweren; het verbod geldt wie werkelijk zweert. Ook gezegd: het was mogelijk van vóór het verbod.', more: '', page: 71 },
    { title: 'Liefde voor de vromen', text: 'Om baat te hebben bij liefde voor de vromen hoeft men niet hun daden te doen, en bij hen zijn betekent niet dezelfde rang in alles. Allah en Zijn Boodschapper liefhebben betekent hun bevelen opvolgen en hun verboden mijden.', more: '', page: 74 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Iṭrāʾ', items: ['Overdreven lof, voorbij de grens; ook gezegd: lof met onwaarheid.'], page: 55, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat de getuigenis over Muḥammad ﷺ vraagt', items: ['hem gehoorzamen in wat hij beval', 'hem geloven in wat hij vertelde', 'mijden wat hij verbood', 'Allah alleen aanbidden zoals Hij voorschreef'], page: 58, origin: 'boek' },
    { kind: 'onderscheid', title: 'Liefde en boezemvriendschap', items: ['Liefde is algemeen.', 'Boezemvriendschap is specifiek: het uiterste van liefde.'], page: 61, origin: 'boek' },
    { kind: 'bewijs', title: 'Verbod graven tot gebedsplaatsen te maken', items: ['"Maak dus geen gebedsplaatsen van graven; dat verbied ik jullie."'], page: 60, origin: 'boek' },
    { kind: 'uitzondering', title: '"Hij heeft succes, bij zijn vader, als hij de waarheid spreekt"', items: ['Geen bedoelde eed, of van vóór het verbod.'], page: 71, origin: 'boek' },
    { kind: 'opsomming', title: 'Twee voordelen van "als Allah wil" bij een eed', items: ['wat je zwoer wordt je makkelijk gemaakt', 'breek je de eed, dan is er geen boete'], page: 68, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Overdrijf niet over de Profeet ﷺ; zeg: de dienaar van Allah en Zijn Boodschapper.',
    'Boezemvriendschap is specifieker dan liefde; Abū Bakr is de beste van de gemeenschap na de Profeet.',
    'Maak geen gebedsplaatsen van graven; de reden is de vrees voor afgoderij.',
    'De Zwarte Steen schaadt en baat niet; hem kussen is navolging.',
    'Wie wil zweren, zweert bij Allah of zwijgt.',
    'Ieder is bij wie hij liefheeft; bereid je dus voor op het Hiernamaals.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is iṭrāʾ?', options: ['overdreven lof, voorbij de grens', 'terechte lof', 'smeekbede voor de Profeet ﷺ', 'zegeningen over de Profeet ﷺ'], answer: 0, explain: 'Zoals de christenen overdreven over de zoon van Maryam.', page: 55 },
    { type: 'tf', q: 'De Profeet ﷺ beschrijven met wat Allah hem aan voortreffelijkheid gaf, is verboden overdrijving.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is een plicht, zoals "ik ben de meester van de kinderen van Ādam".', page: 56 },
    { type: 'mc', q: 'Wat is hoger: liefde of boezemvriendschap?', options: ['boezemvriendschap', 'liefde', 'ze zijn gelijk', 'er is geen verschil'], answer: 0, explain: 'Boezemvriendschap is het uiterste van liefde.', page: 61 },
    { type: 'mc', q: 'Waarom is bidden bij graven verboden?', options: ['uit vrees voor afgoderij', 'omdat begraafplaatsen onrein zijn', 'omdat er weinig ruimte is', 'om de doden niet te storen'], answer: 0, explain: 'Niet om onreinheid; de graven van profeten zijn juist rein.', page: 62 },
    { type: 'mc', q: 'Wat van de Kaʿba wordt aangeraakt maar niet gekust?', options: ['de Jemenitische hoek', 'de Zwarte Steen', 'de multazam', 'de twee Syrische hoeken'], answer: 0, explain: 'Alleen de Zwarte Steen wordt gekust.', page: 65 },
    { type: 'tf', q: 'Wie bij iets anders dan Allah zweert en de eed breekt, moet boete doen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is geen geldige eed, wel een zonde.', page: 68 },
    { type: 'mc', q: 'Wanneer is zweren bij iets anders dan Allah grote afgoderij?', options: ['als men het schepsel vereert zoals Allah', 'als het zonder bedoeling over de tong gaat', 'als men de waarheid spreekt', 'als men bij zijn vader zweert'], answer: 0, explain: 'Gaat het zonder verering over de tong, dan is het kleine afgoderij.', page: 69 },
    { type: 'mc', q: 'Wat antwoordde de Profeet ﷺ op de vraag: wanneer is het Uur?', options: ['Wat heb je ervoor voorbereid?', 'over duizend jaar', 'ik weet het niet', 'binnenkort'], answer: 0, explain: 'Hij wees op wat belangrijker is.', page: 72 }
  ]),
  note: 'Oefeningen van het boek op p. 59, 63, 66, 71 en 75. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-hadith', chapter: '14', unit: 3, ar, nl }
