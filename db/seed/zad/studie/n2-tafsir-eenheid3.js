// Hoofdstukkaart bij التفسير (٢), eenheid 3: سورة عبس (lessen 14–17, boek p. 51–64).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De uitspraak van Qatāda op p. 62 is geen hadith en staat
// alleen bij de personen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (٢)، سلسلة زاد العلمية',
  pages: '51–64',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'عائشة', text: 'أنزلت ﴿عبس وتولى﴾ في ابن أم مكتوم الأعمى، أتى رسول الله ﷺ فجعل يقول: يا رسول الله أرشدني، وعند رسول الله ﷺ رجل من عظماء المشركين، فجعل رسول الله ﷺ يعرض عنه ويقبل على الآخر ويقول: «أترى بما أقول بأسا؟» فيقول: لا. ففي هذا أنزلت', takhrij: 'أخرجه الترمذي وصححه الألباني', note: 'سبب نزول أول السورة.', pages: [52], nl: '"Hij fronste en wendde zich af" werd geopenbaard over Ibn Umm Maktūm, de blinde. Hij kwam bij de Boodschapper van Allah ﷺ en zei: "O Boodschapper van Allah, wijs mij de weg." Bij de Boodschapper ﷺ was een van de vooraanstaanden onder de veelgodenaanbidders. De Boodschapper ﷺ wendde zich van hem af en richtte zich tot de ander en zei: "Zie jij iets verkeerds in wat ik zeg?" Hij zei: "Nee." Hierover werd het geopenbaard', nlNote: 'De aanleiding van de openbaring van het begin van de soera.' },
  { narrator: 'عائشة', text: 'الذي يقرأ القرآن وهو ماهر به مع السفرة الكرام البررة، والذي يقرؤه وهو عليه شاق له أجران', takhrij: 'أخرجه البخاري ومسلم', note: 'ذكره الكتاب عند ﴿بأيدي سفرة كرام بررة﴾.', pages: [58], nl: 'Wie de Koran reciteert en er bedreven in is, is bij de edele, vrome schrijvers; en wie hem reciteert terwijl het hem zwaar valt, krijgt twee beloningen', nlNote: 'Genoemd bij "in handen van schrijvers, edel en vroom".' },
  { narrator: 'ابن مسعود', text: 'حدثنا رسول الله ﷺ وهو الصادق المصدوق: «إن أحدكم يجمع خلقه في بطن أمه أربعين يوما نطفة، ثم يكون علقة مثل ذلك، ثم يكون مضغة مثل ذلك...»', takhrij: 'أخرجه الشيخان', note: 'ذكره الكتاب عند ﴿من نطفة خلقه فقدره﴾، واقتصر على أوله.', pages: [58], nl: 'De Boodschapper van Allah ﷺ, de waarachtige wiens woord bevestigd is, vertelde ons: "De schepping van ieder van jullie wordt in de buik van zijn moeder samengebracht, veertig dagen als druppel, dan evenlang als bloedklonter, dan evenlang als stukje vlees..."', nlNote: 'Genoemd bij "uit een druppel schiep Hij hem en Hij bepaalde hem"; het boek citeert alleen het begin.' },
  { narrator: 'عائشة', text: '«تحشرون حفاة عراة غرلا» فقلت: يا رسول الله، الرجال والنساء ينظر بعضهم إلى بعض! فقال: «الأمر أشد من أن يهمهم ذاك»', takhrij: 'أخرجه البخاري ومسلم', note: 'ذكره الكتاب عند ﴿لكل امرئ منهم يومئذ شأن يغنيه﴾.', pages: [63], nl: '"Jullie worden verzameld blootsvoets, naakt en onbesneden." Ik zei: "O Boodschapper van Allah, mannen en vrouwen kijken dan naar elkaar!" Hij zei: "De zaak is te ernstig om hen daarmee bezig te laten zijn"', nlNote: 'Genoemd bij "ieder van hen heeft op die dag een zaak die hem volledig in beslag neemt".' }
]

const TAKHRIJ_NL = { 'أخرجه الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī verklaarde hem ṣaḥīḥ', 'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim', 'أخرجه الشيخان': 'al-Bukhārī en Muslim' }
const NARRATOR_NL = { 'عائشة': 'ʿĀʾisha', 'ابن مسعود': 'ʿAbd Allāh ibn Masʿūd' }

const PERSONS = [
  ['aisha', 'text', [52, 58, 63], 'روت سبب نزول السورة، وحديثي الماهر بالقرآن والحشر حفاة عراة.', 'Overleverde de aanleiding van de soera, de hadith over wie bedreven is in de Koran en die over de verzameling blootsvoets en naakt.'],
  ['ibn-umm-maktum', 'text', [52, 53], 'الصحابي الأعمى الذي نزلت فيه ﴿عبس وتولى﴾.', 'De blinde metgezel over wie "Hij fronste en wendde zich af" werd geopenbaard.'],
  ['ibn-masud', 'text', [58], 'روى حديث أطوار خلق الإنسان في بطن أمه.', 'Overleverde de hadith over de fasen van de schepping in de moederschoot.'],
  ['qatada-ibn-diama', 'text', [62], 'قال: ليس شيء أشد على الإنسان يوم القيامة من أن يرى من يعرفه مخافة أن يطلبه بمظلمة.', 'Zei: niets is op de Opstandingsdag zwaarder voor de mens dan iemand te zien die hij kent, uit angst dat die hem om een onrecht aanspreekt.'],
  ['at-tirmidhi', 'takhrij', [52], 'أخرج حديث سبب النزول.', 'Nam de hadith over de aanleiding op.'],
  ['al-albani', 'takhrij', [52], 'صحح حديث سبب النزول.', 'Verklaarde de hadith over de aanleiding ṣaḥīḥ.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'سورة عبس',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'سورة مكية تبدأ بعتاب لطيف للنبي ﷺ في شأن ابن أم مكتوم، ثم تبين أن القرآن تذكرة في صحف مكرمة، وتذكر الإنسان بمبدأ خلقه ونهايته، وتأمره بالنظر في طعامه، وتختم بالصاخة وفرار المرء من أقاربه ووجوه أهل النعيم ووجوه الكفرة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'سورة عبس في خريطة واحدة',
    intro: 'مقاطع السورة كما قسمها الكتاب.',
    root: { label: 'سورة عبس', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'العتاب', sub: 'الآيات ١–١٠', page: 52, children: ['ابن أم مكتوم', 'من استغنى', 'من جاء يسعى'] },
      { label: 'القرآن تذكرة', sub: 'الآيات ١١–١٦', page: 57, children: ['صحف مكرمة', 'سفرة كرام بررة'] },
      { label: 'خلق الإنسان', sub: 'الآيات ١٧–٢٣', page: 58, children: ['من نطفة', 'السبيل يسره', 'أماته فأقبره'] },
      { label: 'النظر في الطعام', sub: 'الآيات ٢٤–٣٢', page: 60, children: ['صب الماء', 'شق الأرض', 'متاعا لكم'] },
      { label: 'الصاخة', sub: 'الآيات ٣٣–٤٢', page: 62, children: ['الفرار من الأقارب', 'وجوه مسفرة', 'وجوه عليها غبرة'] }
    ]
  },
  points: [
    { text: 'لم يخاطب الله نبيه في أول السورة مباشرة، بل بصيغة الغائب، تلطفًا لأنها عتاب.', page: 53 },
    { text: 'عبر بالأعمى ترقيقًا لقلب النبي ﷺ عليه وإشعارًا بعذره.', page: 53 },
    { text: 'قاعدة: لا يترك أمر معلوم لأمر موهوم، ولا مصلحة متحققة لمصلحة متوهمة.', page: 54 },
    { text: 'بقاء العتاب في القرآن من أعظم الأدلة على نبوة محمد ﷺ.', page: 55 },
    { text: 'يجب على المسلمين أن يقبروا أمواتهم، فلا يجوز حرقهم ولا تركهم إلا إن تعذر الدفن.', page: 59 },
    { text: 'أمر الله الإنسان أن ينظر في طعامه ليصل بالتفكر إلى معرفة الله وعبادته.', page: 60 },
    { text: 'سميت لذائذ الدنيا متاعًا لأنها تفنى، ولذائذ الجنة نعيمًا لأنها لا تنقطع.', page: 61 },
    { text: 'يفر المرء من أقاربه خوفًا أن يطالبوه بالحقوق والمظالم.', page: 62 }
  ],
  terms: [
    { term: 'عبس', translit: 'ʿabasa', meaning: 'ظهر العبوس على الوجه.', explanation: '', notes: [], page: 53 },
    { term: 'تصدى', translit: 'taṣaddā', meaning: 'تشتغل بالتصدي والتعرض لمن استغنى.', explanation: '', notes: [], page: 54 },
    { term: 'تلهى', translit: 'talahhā', meaning: 'تتشاغل عنه وتتركه.', explanation: 'من لهيت عن الشيء إذا تركته.', notes: [], page: 54 },
    { term: 'السفرة', translit: 'as-safara', meaning: 'الملائكة الكتبة السفراء بين الله وخلقه بالوحي.', explanation: 'من السفر وهو الكتاب، أو جمع سفير وهو الواسطة.', notes: [], page: 58 },
    { term: 'البررة', translit: 'al-barara', meaning: 'جمع بار: أخلاقهم وأفعالهم بارة طاهرة.', explanation: '', notes: [], page: 58 },
    { term: 'أقبره', translit: 'aqbarahu', meaning: 'صيره ذا قبر.', explanation: '', notes: [], page: 59 },
    { term: 'القضب', translit: 'al-qaḍb', meaning: 'علف الدواب يقطع رطبًا مرة بعد أخرى.', explanation: '', notes: [], page: 60 },
    { term: 'حدائق غلبا', translit: 'ḥadāʾiq ghulban', meaning: 'بساتين محوطة غليظة الأشجار أو طويلتها.', explanation: '', notes: [], page: 61 },
    { term: 'الأب', translit: 'al-abb', meaning: 'ما تأكله البهائم من العشب والنبات.', explanation: '', notes: [], page: 61 },
    { term: 'الفاكهة', translit: 'al-fākiha', meaning: 'الثمار التي تؤكل للتفكه لا للاقتيات.', explanation: '', notes: [], page: 61 },
    { term: 'الصاخة', translit: 'aṣ-ṣākhkha', meaning: 'صيحة البعث يوم القيامة؛ وقيل اسم من أسماء يوم القيامة.', explanation: '', notes: [], page: 62 },
    { term: 'صاحبته', translit: 'ṣāḥibatuhu', meaning: 'زوجته.', explanation: '', notes: [], page: 62 },
    { term: 'مسفرة', translit: 'musfira', meaning: 'مشرقة مضيئة.', explanation: '', notes: [], page: 63 },
    { term: 'قترة', translit: 'qatara', meaning: 'ذلة تغشى الوجوه.', explanation: '', notes: [], page: 63 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'من استغنى ومن جاء يسعى',
      intro: 'كما في الآيات ٥–١٠.',
      columns: ['حاله', 'ما فعله النبي ﷺ'],
      rows: [
        { label: 'من استغنى', cells: ['مستغن عن الدعوة معرض عنها', 'تصدى له'] },
        { label: 'من جاء يسعى', cells: ['حريص على السماع ويخشى الله', 'تلهى عنه'] }
      ],
      page: 54
    },
    {
      type: 'steps',
      title: 'رحلة الإنسان في الآيات',
      intro: 'كما في الآيات ١٧–٢٢.',
      nodes: [
        { label: 'من نطفة خلقه فقدره', sub: 'نطفة ثم علقة ثم مضغة', page: 58 },
        { label: 'ثم السبيل يسره', sub: 'بين له طريق الخير والشر', page: 59 },
        { label: 'ثم أماته فأقبره', sub: 'جعل له قبرًا', page: 59 },
        { label: 'ثم إذا شاء أنشره', sub: 'تأخير النشور بمشيئته', page: 59 }
      ]
    },
    {
      type: 'compare',
      title: 'وجوه يوم الصاخة',
      intro: 'قدم أهل النعيم هنا، وفي آخر النازعات قدم أهل النار.',
      columns: ['وصفها', 'أصحابها'],
      rows: [
        { label: 'وجوه مسفرة', cells: ['ضاحكة مستبشرة', 'أهل النعيم'] },
        { label: 'وجوه عليها غبرة', cells: ['ترهقها قترة', 'الكفرة الفجرة'] }
      ],
      page: 63
    }
  ],
  sections: [
    { title: 'لماذا انتقل إلى الخطاب؟', text: 'بعد أن تحدث عن النبي ﷺ بصيغة الغائب انتقل إلى خطابه ليشعره بالإقبال عليه بعد الإعراض.', page: 53 },
    { title: 'المقصود من العتاب', text: 'ليس النهي عن دعوة المعرضين، وإنما عدم الإعراض عن المقبلين.', page: 54 },
    { title: 'تأديب للدعاة', text: 'لا يفضلون في الدعوة شريفًا لشرفه ولا عظيمًا لعظمته ولا قريبًا لقربه، بل الناس عندهم سواء.', page: 55 },
    { title: 'النخلة', text: 'نص عليها لكثرة منافعها: تمرها غذاء، ونواها علف، وخشبها وسعفها وأليافها في البيوت والأواني والحبال.', page: 60 },
    { title: 'لماذا «صاحبته»؟', text: 'ليست كل زوجة صاحبة؛ فإذا فر المرء من صاحبته التي تعيش معه مصاعبه، فكيف بغيرها؟', page: 64 },
    { title: 'ترتيب الأحباب', text: 'رتبهم على الحنو والشفقة، فبدأ بالأقل وهو الأخ وختم بالأكثر وهو الابن.', page: 64 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'سببان للتعبير بالأعمى', items: ['ترقيق قلب النبي ﷺ عليه', 'الإشعار بعذره في قطع الكلام'], page: 53, origin: 'boek' },
    { kind: 'opsomming', title: 'معنيان للسفرة', items: ['الكتبة، من السفر وهو الكتاب', 'جمع سفير وهو الواسطة'], page: 58, origin: 'boek' },
    { kind: 'onderscheid', title: 'المتاع والنعيم', items: ['المتاع: لذائذ الدنيا تفنى.', 'النعيم: لذائذ الجنة لا تنقطع.'], page: 61, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'عتاب لطيف في شأن ابن أم مكتوم، وبقاؤه دليل على النبوة.',
    'القرآن تذكرة في صحف مكرمة بأيدي سفرة كرام بررة.',
    'الإنسان: نطفة، ثم سبيل، ثم موت وقبر، ثم نشور.',
    'النظر في الطعام طريق إلى معرفة الله.',
    'يوم الصاخة يفر المرء من أقرب الناس إليه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من الأعمى المذكور في أول السورة؟', options: ['عبد الله ابن أم مكتوم', 'بلال بن رباح', 'عمار بن ياسر', 'ابن مسعود'], answer: 0, explain: 'كما في حديث عائشة.', page: 53 },
    { type: 'tf', q: 'المقصود من العتاب النهي عن دعوة المعرضين.', options: ['صواب', 'خطأ'], answer: 1, explain: 'المقصود عدم الإعراض عن المقبلين.', page: 54 },
    { type: 'mc', q: 'ما الحكم الذي استفاده العلماء من ﴿ثم أماته فأقبره﴾؟', options: ['وجوب قبر الأموات', 'جواز حرق الأموات', 'استحباب الدفن في البحر', 'لا حكم فيها'], answer: 0, explain: 'إلا إن تعذر الدفن.', page: 59 },
    { type: 'mc', q: 'ما «الأب»؟', options: ['ما تأكله البهائم من العشب', 'الفاكهة', 'الحب', 'الزيتون'], answer: 0, explain: 'كما في الصفحة ٦١.', page: 61 },
    { type: 'mc', q: 'لماذا بدأ بالأخ وختم بالابن؟', options: ['ترتيبًا على الحنو والشفقة من الأقل إلى الأكثر', 'ترتيبًا على السن', 'للسجع فقط', 'لأن الأخ أقرب'], answer: 0, explain: 'أكثر شفقة الإنسان على أبنائه.', page: 64 },
    { type: 'tf', q: 'سميت لذائذ الجنة متاعًا لأنها تفنى.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لذائذ الدنيا متاع، ولذائذ الجنة نعيم لا ينقطع.', page: 61 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٥٦ و٥٩ و٦١ و٦٤.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Soera ʿAbasa',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Een Mekkaanse soera die begint met een zachte terechtwijzing van de Profeet ﷺ over Ibn Umm Maktūm; daarna dat de Koran een vermaning is in geëerde bladen; dan een herinnering aan het begin en einde van de mens en de opdracht om naar zijn voedsel te kijken; en tot slot de oorverdovende schreeuw, de vlucht van de mens voor zijn naasten en de gezichten van de gelukzaligen en van de ongelovigen.',
  source: { ...source, label: 'At-Tafsīr (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Soera ʿAbasa in één kaart',
    intro: 'De delen van de soera zoals het boek ze indeelt.',
    root: { label: 'Soera ʿAbasa', sub: 'Eenheid 3' },
    nodes: [
      { label: 'De terechtwijzing', sub: 'vers 1–10', page: 52, children: ['Ibn Umm Maktūm', 'wie zich onafhankelijk achtte', 'wie haastig kwam'] },
      { label: 'De Koran als vermaning', sub: 'vers 11–16', page: 57, children: ['geëerde bladen', 'edele, vrome schrijvers'] },
      { label: 'De schepping van de mens', sub: 'vers 17–23', page: 58, children: ['uit een druppel', 'de weg vergemakkelijkt', 'dood en graf'] },
      { label: 'Kijken naar het voedsel', sub: 'vers 24–32', page: 60, children: ['water uitgestort', 'de aarde gespleten', 'een voorziening voor jullie'] },
      { label: 'De oorverdovende schreeuw', sub: 'vers 33–42', page: 62, children: ['vluchten voor familie', 'stralende gezichten', 'stoffige gezichten'] }
    ]
  },
  points: [
    { text: 'Aan het begin spreekt Allah de Profeet niet rechtstreeks aan maar in de derde persoon, uit zachtheid, omdat het een terechtwijzing is.', page: 53 },
    { text: 'Hij wordt "de blinde" genoemd om het hart van de Profeet ﷺ voor hem te verzachten en om aan te geven dat hij verontschuldigd was.', page: 53 },
    { text: 'Regel: iets zekers wordt niet opgegeven voor iets vermoeds, en een vaststaand belang niet voor een vermoed belang.', page: 54 },
    { text: 'Dat deze terechtwijzing in de Koran bleef, is een van de grootste bewijzen voor het profeetschap van Muḥammad ﷺ.', page: 55 },
    { text: 'Moslims moeten hun doden begraven; verbranden of achterlaten mag niet, tenzij begraven onmogelijk is.', page: 59 },
    { text: 'Allah draagt de mens op naar zijn voedsel te kijken, zodat hij door nadenken Allah leert kennen en aanbidden.', page: 60 },
    { text: 'De genietingen van deze wereld heten matāʿ omdat ze vergaan; die van het Paradijs naʿīm omdat ze nooit ophouden.', page: 61 },
    { text: 'De mens vlucht voor zijn familie uit angst dat zij hun rechten en het onrecht dat hij hen deed opeisen.', page: 62 }
  ],
  terms: [
    { term: 'عبس', translit: 'ʿabasa', meaning: 'Hij fronste.', explanation: '', notes: [], page: 53 },
    { term: 'تصدى', translit: 'taṣaddā', meaning: 'Je richt je volop op wie zich onafhankelijk acht.', explanation: '', notes: [], page: 54 },
    { term: 'تلهى', translit: 'talahhā', meaning: 'Je laat je van hem afleiden en laat hem links liggen.', explanation: '', notes: [], page: 54 },
    { term: 'السفرة', translit: 'as-safara', meaning: 'De schrijvende engelen, gezanten tussen Allah en Zijn schepping met de openbaring.', explanation: 'Van sifr (geschrift), of meervoud van safīr (bemiddelaar).', notes: [], page: 58 },
    { term: 'البررة', translit: 'al-barara', meaning: 'Meervoud van bārr: vroom en zuiver in karakter en daden.', explanation: '', notes: [], page: 58 },
    { term: 'أقبره', translit: 'aqbarahu', meaning: 'Hij gaf hem een graf.', explanation: '', notes: [], page: 59 },
    { term: 'القضب', translit: 'al-qaḍb', meaning: 'Groenvoer voor dieren dat telkens opnieuw wordt afgesneden.', explanation: '', notes: [], page: 60 },
    { term: 'حدائق غلبا', translit: 'ḥadāʾiq ghulban', meaning: 'Ommuurde tuinen met dikke of hoge bomen.', explanation: '', notes: [], page: 61 },
    { term: 'الأب', translit: 'al-abb', meaning: 'Het gras en de planten die het vee eet.', explanation: '', notes: [], page: 61 },
    { term: 'الفاكهة', translit: 'al-fākiha', meaning: 'Vruchten die als lekkernij gegeten worden, niet als basisvoedsel.', explanation: '', notes: [], page: 61 },
    { term: 'الصاخة', translit: 'aṣ-ṣākhkha', meaning: 'De schreeuw van de opwekking; volgens anderen een naam van de Opstandingsdag.', explanation: '', notes: [], page: 62 },
    { term: 'صاحبته', translit: 'ṣāḥibatuhu', meaning: 'Zijn echtgenote.', explanation: '', notes: [], page: 62 },
    { term: 'مسفرة', translit: 'musfira', meaning: 'Stralend en verlicht.', explanation: '', notes: [], page: 63 },
    { term: 'قترة', translit: 'qatara', meaning: 'Vernedering die de gezichten bedekt.', explanation: '', notes: [], page: 63 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Wie zich onafhankelijk achtte en wie haastig kwam',
      intro: 'Zoals in vers 5–10.',
      columns: ['Toestand', 'Wat de Profeet ﷺ deed'],
      rows: [
        { label: 'Wie zich onafhankelijk achtte', cells: ['had de uitnodiging niet nodig en keerde zich af', 'richtte zich op hem'] },
        { label: 'Wie haastig kwam', cells: ['wilde graag luisteren en vreesde Allah', 'liet zich van hem afleiden'] }
      ],
      page: 54
    },
    {
      type: 'steps',
      title: 'De levensreis van de mens in de verzen',
      intro: 'Zoals in vers 17–22.',
      nodes: [
        { label: 'Uit een druppel geschapen en bepaald', sub: 'druppel, bloedklonter, stukje vlees', page: 58 },
        { label: 'De weg vergemakkelijkt', sub: 'de weg van goed en kwaad getoond', page: 59 },
        { label: 'Laten sterven en begraven', sub: 'een graf gegeven', page: 59 },
        { label: 'Opgewekt wanneer Hij wil', sub: 'het uitstel gebeurt door Zijn wil', page: 59 }
      ]
    },
    {
      type: 'compare',
      title: 'Gezichten op de dag van de schreeuw',
      intro: 'Hier worden de gelukzaligen eerst genoemd; aan het eind van an-Nāziʿāt de mensen van het Vuur.',
      columns: ['Beschrijving', 'Wie'],
      rows: [
        { label: 'Stralende gezichten', cells: ['lachend en verheugd', 'de mensen van de gelukzaligheid'] },
        { label: 'Gezichten met stof', cells: ['bedekt met vernedering', 'de ongelovige zondaars'] }
      ],
      page: 63
    }
  ],
  sections: [
    { title: 'Waarom de overgang naar de tweede persoon?', text: 'Na de derde persoon spreekt Allah de Profeet ﷺ rechtstreeks aan, om te laten voelen dat Hij Zich na de afwending weer tot hem wendt.', page: 53 },
    { title: 'Het doel van de terechtwijzing', text: 'Niet het verbod om wie zich afkeert uit te nodigen, maar het verbod om je af te keren van wie komt.', page: 54 },
    { title: 'Een les voor wie uitnodigt', text: 'Bevoorrecht niemand om zijn aanzien, macht of verwantschap; alle mensen zijn gelijk: arm en rijk, groot en klein, dichtbij en ver weg.', page: 55 },
    { title: 'De dadelpalm', text: 'Apart genoemd om de vele voordelen: de dadels als voedsel, de pitten als veevoer, het hout, de bladeren en de vezels voor huizen, gerei en touw.', page: 60 },
    { title: 'Waarom "zijn metgezellin"?', text: 'Niet elke echtgenote is een metgezellin; als de mens zelfs vlucht voor de vrouw die zijn moeilijkheden met hem deelde, hoe dan voor anderen?', page: 64 },
    { title: 'De volgorde van de geliefden', text: 'Gerangschikt naar tederheid: eerst de broer, het minst, en als laatste de zoon, het meest.', page: 64 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Twee redenen voor "de blinde"', items: ['het hart van de Profeet ﷺ voor hem verzachten', 'aangeven dat hij verontschuldigd was'], page: 53, origin: 'boek' },
    { kind: 'opsomming', title: 'Twee betekenissen van safara', items: ['schrijvers, van sifr (geschrift)', 'meervoud van safīr (bemiddelaar)'], page: 58, origin: 'boek' },
    { kind: 'onderscheid', title: 'Matāʿ en naʿīm', items: ['matāʿ: wereldse genietingen die vergaan', 'naʿīm: genietingen van het Paradijs die nooit ophouden'], page: 61, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Een zachte terechtwijzing over Ibn Umm Maktūm; dat zij bleef bewijst het profeetschap.',
    'De Koran is een vermaning in geëerde bladen, in handen van edele, vrome schrijvers.',
    'De mens: druppel, weg, dood en graf, opwekking.',
    'Kijken naar het voedsel leidt tot kennis van Allah.',
    'Op de dag van de schreeuw vlucht de mens voor zijn naasten.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie is de blinde aan het begin van de soera?', options: ['ʿAbd Allāh ibn Umm Maktūm', 'Bilāl ibn Rabāḥ', 'ʿAmmār ibn Yāsir', 'Ibn Masʿūd'], answer: 0, explain: 'Zoals in de hadith van ʿĀʾisha.', page: 53 },
    { type: 'tf', q: 'De terechtwijzing verbiedt het uitnodigen van wie zich afkeert.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Bedoeld is: keer je niet af van wie komt.', page: 54 },
    { type: 'mc', q: 'Welk oordeel leidden de geleerden af uit "toen liet Hij hem sterven en gaf hem een graf"?', options: ['doden moeten begraven worden', 'verbranden mag', 'begraven in zee is aanbevolen', 'er volgt geen oordeel uit'], answer: 0, explain: 'Tenzij begraven onmogelijk is.', page: 59 },
    { type: 'mc', q: 'Wat is al-abb?', options: ['gras en planten voor het vee', 'fruit', 'graan', 'olijven'], answer: 0, explain: 'Zoals op p. 61.', page: 61 },
    { type: 'mc', q: 'Waarom begint de opsomming met de broer en eindigt zij met de zoon?', options: ['gerangschikt naar tederheid, van minst naar meest', 'naar leeftijd', 'alleen voor het rijm', 'omdat de broer het dichtst bij staat'], answer: 0, explain: 'De mens is het meest teder voor zijn kinderen.', page: 64 },
    { type: 'tf', q: 'De genietingen van het Paradijs heten matāʿ omdat ze vergaan.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Wereldse genietingen zijn matāʿ; die van het Paradijs naʿīm.', page: 61 }
  ]),
  note: 'Oefeningen van het boek op p. 56, 59, 61 en 64. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tafsir', chapter: '14', unit: 3, ar, nl }
