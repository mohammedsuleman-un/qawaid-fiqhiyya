// Hoofdstukkaart bij الفقه (٢), eenheid 6: الزكاة وزكاة النقدين والحلي وعروض التجارة
// (lessen 23–28, boek p. 82–94). Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het
// importbestand van het boek; hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط"
// noemt, zijn zo gemarkeerd. Niet overgenomen: het bericht zonder bron over de zakaat-inners die niet
// naar de jongen vroegen (p. 86). Twee hadith die het boek afgebroken citeert, staan hier ook
// afgebroken (…).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '82–94',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'عبد الله بن عباس', text: 'إنك تأتي قوما أهل كتاب، فادعهم إلى شهادة أن لا إله إلا الله وأني رسول الله، فإن هم أطاعوا لذلك فأعلمهم أن الله افترض عليهم خمس صلوات في كل يوم وليلة، فإن هم أطاعوا لذلك فأعلمهم أن الله افترض عليهم صدقة في أموالهم تؤخذ من أغنيائهم وترد إلى فقرائهم…', takhrij: 'متفق عليه', note: 'لما بعث معاذًا إلى اليمن؛ دليل وجوب الزكاة، وفي الأوراق النقدية وعروض التجارة.', pages: [82, 90, 92], nl: 'Je komt bij mensen van de Schrift. Roep hen op tot de getuigenis dat er geen god is dan Allah en dat ik de Boodschapper van Allah ben. Gehoorzamen zij daarin, leer hun dan dat Allah hun vijf gebeden per dag en nacht heeft opgelegd. Gehoorzamen zij daarin, leer hun dan dat Allah hun een gave uit hun bezit heeft opgelegd, die van hun rijken wordt genomen en aan hun armen wordt teruggegeven…', nlNote: 'Toen hij Muʿādh naar Jemen stuurde; bewijs voor de plicht van zakaat, ook over papiergeld en handelswaar.' },
  { narrator: '', text: 'أمرت أن أقاتل الناس حتى يشهدوا أن لا إله إلا الله وأن محمدا رسول الله، ويقيموا الصلاة، ويؤتوا الزكاة، فإذا فعلوا عصموا مني دماءهم وأموالهم إلا بحقها، وحسابهم على الله', takhrij: 'متفق عليه', note: 'دليل أخذها ممن امتنع قهرًا.', pages: [82, 83], nl: 'Mij is opgedragen de mensen te bestrijden tot zij getuigen dat er geen god is dan Allah en dat Muḥammad de Boodschapper van Allah is, het gebed verrichten en de zakaat geven. Doen zij dat, dan hebben zij hun bloed en bezit voor mij beschermd, behalve wat er rechtens op rust, en hun afrekening is bij Allah', nlNote: 'Bewijs dat zakaat met dwang wordt genomen van wie weigert.' },
  { narrator: 'أبو بكر الصديق', text: 'والله لو منعوني عناقا كانوا يؤدونها إلى رسول الله ﷺ لقاتلتهم عليها', takhrij: 'متفق عليه واللفظ للبخاري', note: 'العناق: الأنثى من المعز لم تستكمل سنة.', pages: [83], nl: 'Bij Allah, als zij mij een geitje zouden weigeren dat zij aan de Boodschapper van Allah ﷺ gaven, zou ik hen erom bestrijden', nlNote: 'ʿAnāq: een vrouwelijk geitje van nog geen jaar.' },
  { narrator: '', text: 'ثم يرى سبيله إما إلى الجنة وإما إلى النار', takhrij: 'رواه مسلم', note: 'في مانع الزكاة؛ دليل أنه لا يكفر إذا منعها بخلًا مع اعتقاد وجوبها.', pages: [83], nl: 'Daarna ziet hij zijn weg, naar het Paradijs of naar het Vuur', nlNote: 'Over wie geen zakaat geeft; bewijs dat hij geen ongelovige wordt als hij uit gierigheid weigert maar de plicht erkent.' },
  { narrator: '', text: 'ما من صاحب إبل ولا بقر ولا غنم لا يؤدي زكاتها إلا جاءت يوم القيامة أعظم ما كانت وأسمنه، تنطحه بقرونها وتطؤه بأظلافها، كلما نفدت أخراها عادت عليه أولاها حتى يقضى بين الناس', takhrij: 'البخاري ومسلم', note: '', pages: [83], nl: 'Geen bezitter van kamelen, koeien of schapen die er geen zakaat over geeft, of zij komen op de Dag van de Opstanding groter en vetter dan zij ooit waren, stoten hem met hun horens en vertrappen hem met hun hoeven; telkens als de laatste voorbij is, keert de eerste terug, tot er tussen de mensen geoordeeld is', nlNote: '' },
  { narrator: '', text: 'ما من صاحب ذهب ولا فضة لا يؤدي منها حقها إلا إذا كان يوم القيامة صفحت له صفائح من نار، فأحمي عليها في نار جهنم، فيكوى بها جنبه وجبينه وظهره، كلما بردت ردت له، في يوم كان مقداره خمسين ألف سنة', takhrij: 'رواه مسلم', note: '', pages: [84, 89], nl: 'Geen bezitter van goud of zilver die er niet het recht van geeft, of op de Dag van de Opstanding worden er platen van vuur voor hem gemaakt, verhit in het Vuur van de Hel, waarmee zijn zij, voorhoofd en rug worden gebrandmerkt; telkens als ze afkoelen, worden ze teruggebracht, op een dag die vijftigduizend jaar duurt', nlNote: '' },
  { narrator: '', text: 'فيما سقت السماء والعيون أو كان عثريا العشر، وفيما سقي بالنضح نصف العشر', takhrij: 'رواه البخاري', note: 'العثري: يشرب بعروقه من غير سقي؛ النضح: الإبل يحمل عليها الماء.', pages: [84], nl: 'Over wat door regen en bronnen bevloeid wordt of uit zichzelf water opneemt: een tiende; over wat met trekdieren bevloeid wordt: een twintigste', nlNote: 'ʿAtharī: wat met zijn wortels drinkt zonder bevloeiing; naḍḥ: kamelen die water dragen.' },
  { narrator: '', text: 'وفي الركاز الخمس', takhrij: 'متفق عليه', note: 'الركاز: دفائن الجاهلية.', pages: [85], nl: 'En over een gevonden schat: een vijfde', nlNote: 'Rikāz: begraven schatten uit de tijd vóór de islam.' },
  { narrator: '', text: 'لا زكاة في مال حتى يحول عليه الحول', takhrij: 'ابن ماجه وصححه الألباني', note: 'شرط حولان الحول.', pages: [85], nl: 'Over bezit is geen zakaat verschuldigd tot er een jaar over verstreken is', nlNote: 'De voorwaarde van een vol jaar.' },
  { narrator: '', text: 'وفي الرقة ربع العشر', takhrij: 'رواه البخاري', note: 'في كتاب الصدقة؛ الرقة: الفضة والدراهم المضروبة.', pages: [89], nl: 'En over zilver: een veertigste', nlNote: 'Uit de brief over de zakaat; riqa: zilver en geslagen dirhams.' },
  { narrator: '', text: '…وليس عليك شيء -يعني في الذهب- حتى يكون لك عشرون دينارا، فإذا كان لك عشرون دينارا وحال عليه الحول ففيها نصف دينار', takhrij: 'أبو داود وصححه الألباني', note: '', pages: [89], nl: '…en je bent niets verschuldigd, dat wil zeggen over goud, tot je twintig dinar hebt; heb je twintig dinar en is er een jaar over verstreken, dan is er een halve dinar over verschuldigd', nlNote: '' },
  { narrator: 'عائشة', text: 'دخل علي رسول الله ﷺ فرأى في يدي فتخات من ورق، فقال: «ما هذا يا عائشة؟» فقلت: صنعتهن أتزين لك يا رسول الله. قال: «أتؤدين زكاتهن؟» قلت: لا. قال: «هو حسبك من النار»', takhrij: 'أبو داود وصححه الألباني', note: 'فتخات: خواتيم كبار؛ ورق: فضة. دليل زكاة الحلي المعد للاستعمال.', pages: [91], nl: 'De Boodschapper van Allah ﷺ kwam bij mij binnen en zag grote zilveren ringen aan mijn hand. Hij zei: "Wat is dit, ʿĀʾisha?" Ik zei: "Ik heb ze laten maken om me voor jou mooi te maken, Boodschapper van Allah." Hij zei: "Geef je er zakaat over?" Ik zei: "Nee." Hij zei: "Dan is dat genoeg om je naar het Vuur te brengen"', nlNote: 'Fatakhāt: grote ringen; wariq: zilver. Bewijs voor zakaat over sieraden die gedragen worden.' },
  { narrator: 'عبد الله بن عمرو', text: 'أن امرأة أتت ومعها ابنة لها، وفي يد ابنتها مسكتان غليظتان من ذهب، فقال: «أتؤدين زكاة هذا؟» قالت: لا. قال: «أيسرك أن يسورك الله بهما سوارين من نار؟» فخلعتهما فألقتهما إلى النبي ﷺ', takhrij: 'أبو داود وحسنه الألباني', note: 'من رواية عمرو بن شعيب عن أبيه عن جده.', pages: [91], nl: 'Een vrouw kwam met haar dochter, die twee zware gouden armbanden droeg. Hij zei: "Geef je hierover zakaat?" Zij zei: "Nee." Hij zei: "Zou je het fijn vinden als Allah je daarvoor twee armbanden van vuur omdoet?" Zij deed ze af en wierp ze naar de Profeet ﷺ', nlNote: 'Via ʿAmr ibn Shuʿayb, van zijn vader, van zijn grootvader.' },
  { narrator: '', text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى', takhrij: 'البخاري ومسلم', note: 'تصير العروض للتجارة باستحداث النية.', pages: [92], nl: 'Daden worden beoordeeld naar de intenties, en ieder krijgt wat hij beoogde', nlNote: 'Goederen worden handelswaar zodra je de intentie tot handel krijgt.' }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'متفق عليه واللفظ للبخاري': 'al-Bukhārī en Muslim, in de bewoording van al-Bukhārī',
  'رواه مسلم': 'Muslim',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'رواه البخاري': 'al-Bukhārī',
  'ابن ماجه وصححه الألباني': 'Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan'
}
const NARRATOR_NL = { 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'أبو بكر الصديق': 'Abū Bakr aṣ-Ṣiddīq', 'عائشة': 'ʿĀʾisha', 'عبد الله بن عمرو': 'ʿAbd Allāh ibn ʿAmr' }

const PERSONS = [
  ['ibn-abbas', 'text', [82], 'روى بعث معاذ إلى اليمن.', 'Overleverde dat Muʿādh naar Jemen werd gestuurd.'],
  ['muadh-ibn-jabal', 'text', [82, 92], 'بعثه النبي ﷺ إلى اليمن وأمره أن يعلمهم فرض الصدقة.', 'De Profeet ﷺ stuurde hem naar Jemen om hun de plicht van zakaat te leren.'],
  ['ibn-qudama', 'text', [82, 93], 'نقل إجماع المسلمين على وجوب الزكاة، وضم العروض إلى النقدين.', 'Gaf de consensus over de plicht van zakaat, en over het samentellen van handelswaar met goud en zilver.'],
  ['abu-bakr-as-siddiq', 'text', [83], 'قال: «والله لو منعوني عناقًا… لقاتلتهم عليها».', 'Zei: "Bij Allah, als zij mij een geitje weigeren… zou ik hen erom bestrijden."'],
  ['ibn-umar', 'text', [89], 'فسر الكنز بعدم إخراج الزكاة.', 'Legde het oppotten uit als geen zakaat geven.'],
  ['aisha', 'text', [91], 'سألها النبي ﷺ عن زكاة فتخاتها.', 'De Profeet ﷺ vroeg haar naar de zakaat over haar ringen.'],
  ['abdallah-ibn-amr', 'text', [91], 'روى حديث المسكتين من ذهب.', 'Overleverde de hadith over de twee gouden armbanden.'],
  ['ibn-baz', 'text', [91], 'قال: الزكاة على مالكة الحلي، ويجزئ إخراجها من قيمته.', 'Zei: de zakaat rust op de eigenares van de sieraden, en betalen in waarde volstaat.'],
  ['al-khattabi', 'text', [93], 'نقل الإجماع على ضم قيمة العروض إلى النقدين.', 'Gaf de consensus over het samentellen van handelswaar met goud en zilver.']
]

const ar = {
  scope: 'unit',
  unit: 6,
  title: 'الزكاة: أحكامها وزكاة النقدين والحلي والتجارة',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف الزكاة وفضلها وحكمها وحكم مانعها، والأموال الخمسة التي تجب فيها، وشروطها، ثم زكاة الذهب والفضة والأوراق النقدية، وزكاة الحلي، وزكاة عروض التجارة ومسائلها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السادسة في خريطة واحدة',
    intro: 'أصول الزكاة ثم النقدان والحلي والتجارة.',
    root: { label: 'الزكاة', sub: 'الوحدة السادسة' },
    nodes: [
      { label: 'تعريفها وحكمها', sub: 'الدرس ٢٣', page: 82, children: ['الركن الثالث', 'مانعها بخلًا', 'تؤخذ قهرًا'] },
      { label: 'الأموال الزكوية', sub: 'الدرس ٢٤', page: 83, children: ['بهيمة الأنعام', 'النقدان', 'العروض والحبوب'] },
      { label: 'شروطها', sub: 'الدرس ٢٥', page: 85, children: ['الإسلام والحرية', 'ملك النصاب', 'حولان الحول'] },
      { label: 'الذهب والفضة', sub: 'الدرس ٢٦', page: 89, children: ['ربع العشر', 'النصاب', 'الأوراق النقدية'] },
      { label: 'الحلي', sub: 'الدرس ٢٧', page: 91, children: ['المدخر والمحرم', 'المعد للاستعمال', 'على المالكة'] },
      { label: 'عروض التجارة', sub: 'الدرس ٢٨', page: 92, children: ['نية التجارة', 'التقويم', 'الأراضي'] }
    ]
  },
  points: [
    { text: 'الزكاة لغة النماء والزيادة، وشرعًا حق مخصوص في مال مخصوص لطائفة مخصوصة.', page: 82 },
    { text: 'الزكاة الركن الثالث من أركان الإسلام، وفرضت بعد الهجرة على الراجح.', page: 82 },
    { text: 'من منعها بخلًا مع اعتقاد وجوبها فهو آثم ولا يخرج من الإسلام، وتؤخذ منه قهرًا.', page: 83 },
    { text: 'الأموال الزكوية خمسة: بهيمة الأنعام، والنقدان، وعروض التجارة، والحبوب والثمار، والمعادن والركاز.', page: 83 },
    { text: 'شروط الزكاة: الإسلام، والحرية، وملك النصاب ملكًا تامًّا مستقرًّا، وحولان الحول.', page: 85 },
    { text: 'في الذهب والفضة ربع العشر، ونصاب الذهب عشرون مثقالًا والفضة مائتا درهم.', page: 89 },
    { text: 'الراجح عند الكتاب وجوب الزكاة في الحلي المعد للاستعمال، وهو أحوط.', page: 91 },
    { text: 'تقوم عروض التجارة عند تمام الحول بقيمتها وقتئذ، لا بسعر الشراء، ويخرج ربع العشر.', page: 92 }
  ],
  terms: [
    { term: 'الزكاة', translit: 'az-zakāt', meaning: 'لغة النماء والزيادة؛ شرعًا حق مخصوص في مال مخصوص لطائفة مخصوصة.', explanation: '', notes: [], page: 82 },
    { term: 'العناق', translit: 'al-ʿanāq', meaning: 'الأنثى من المعز لم تستكمل سنة.', explanation: '', notes: [], page: 83 },
    { term: 'عروض التجارة', translit: 'ʿurūḍ at-tijāra', meaning: 'كل ما أعد للبيع والشراء لأجل الربح.', explanation: 'سميت لأنها تعرض ثم تزول.', notes: [], page: 84 },
    { term: 'المقتات', translit: 'al-muqtāt', meaning: 'ما كان قوتًا للناس كالقمح والأرز.', explanation: '', notes: [], page: 84 },
    { term: 'الركاز', translit: 'ar-rikāz', meaning: 'ما يوجد من دفائن الجاهلية.', explanation: '', notes: [], page: 85 },
    { term: 'الحول', translit: 'al-ḥawl', meaning: 'اثنا عشر شهرًا قمريًّا.', explanation: '', notes: [], page: 85 },
    { term: 'السائمة', translit: 'as-sāʾima', meaning: 'التي ترعى.', explanation: '', notes: [], page: 86 },
    { term: 'الرقة', translit: 'ar-riqa', meaning: 'الفضة والدراهم المضروبة.', explanation: '', notes: [], page: 89 },
    { term: 'الفتخات', translit: 'al-fatakhāt', meaning: 'خواتيم كبار.', explanation: '', notes: [], page: 91 },
    { term: 'القنية', translit: 'al-qinya', meaning: 'ما يقتنى للاستعمال لا للتجارة.', explanation: 'لا زكاة فيه كبيت السكن والسيارة الخاصة.', notes: [], page: 93 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'نصاب الذهب والفضة',
      intro: 'كما في الدرس السادس والعشرين؛ الوزن بالجرام من قسم «للاطلاع فقط».',
      columns: ['النصاب', 'بالجرام', 'الواجب'],
      rows: [
        { label: 'الذهب', cells: ['عشرون مثقالًا', '٨٥ جرامًا', 'ربع العشر'] },
        { label: 'الفضة', cells: ['مائتا درهم', '٥٩٥ جرامًا', 'ربع العشر'] },
        { label: 'الأوراق النقدية', cells: ['أدنى النصابين', 'مراعاة للفقراء', 'ربع العشر'] }
      ],
      page: 90
    },
    {
      type: 'compare',
      title: 'زكاة الحلي',
      intro: 'كما في الدرس السابع والعشرين.',
      columns: ['الحكم'],
      rows: [
        { label: 'المعد للادخار', cells: ['تجب باتفاق أهل العلم'] },
        { label: 'الحلي المحرم', cells: ['تجب باتفاق أهل العلم'] },
        { label: 'المعد للاستعمال المباح', cells: ['خلاف، والراجح عند الكتاب الوجوب'] }
      ],
      page: 91
    }
  ],
  sections: [
    { title: 'فضل إخراج الزكاة', text: 'طهرة وتزكية للمال وصاحبه، كما في قوله تعالى: ﴿خذ من أموالهم صدقة تطهرهم وتزكيهم بها﴾ [التوبة: ١٠٣]، وسبب للألفة والمحبة والتكافل.', page: 82 },
    { title: 'ما يستثنى من شرط الحول (للاطلاع فقط)', text: 'الزروع والثمار، والمعادن والركاز، وربح التجارة يتبع حول رأس المال، ونتاج السائمة يتبع حول أصولها.', more: FYI, page: 86 },
    { title: 'الحكمة من الزكاة (للاطلاع فقط)', text: 'تطهير المال وتنميته، وتطهير المزكي من الشح، والتدريب على البذل، ومواساة الفقراء، وشكر نعمة المال.', more: FYI, page: 86 },
    { title: 'مسائل في الشروط (للاطلاع فقط)', text: 'المدين يزكي ما عنده على الراجح، ومن ادخر مالًا لسكن أو حج أو زواج زكاه إذا حال الحول، وإن نقص النصاب قبل الحول فلا زكاة، ولا زكاة في الجواهر إلا للتجارة.', more: FYI, page: 87 },
    { title: 'زكاة الديون (للاطلاع فقط)', text: 'الدين على مقر باذل يزكى كل عام ولو لم يقبض، ويجوز التأجيل حتى القبض؛ والدين على معسر أو مماطل أو جاحد لا زكاة فيه، فإذا قبضه فالأحوط أن يزكيه عن عام واحد.', more: FYI, page: 87 },
    { title: 'ضم الذهب إلى الفضة (للاطلاع فقط)', text: 'لا يضم أحدهما إلى الآخر على الراجح لأنهما جنسان، إلا إذا كانا عروض تجارة فالعبرة بالقيمة.', more: FYI, page: 90 },
    { title: 'زكاة الأوراق النقدية', text: 'تجب لعموم الأدلة، ولأنها قائمة مقام الذهب والفضة، وهو قول عامة أهل العلم وقرار المجمع الفقهي، ويقدر نصابها بأدنى النصابين، وتضم إلى الذهب والفضة والعروض في النصاب.', page: 90 },
    { title: 'شروط زكاة العروض', text: 'أن يملكها بنية التجارة، والصحيح أنها تصير للتجارة باستحداث النية ولو ملكها بغير فعله، وأن تبلغ قيمتها نصابًا مع بقية الشروط؛ وتقوم بالأحظ للفقير.', page: 92 },
    { title: 'مسائل في العروض (للاطلاع فقط)', text: 'لا حول جديد للأرباح، والأرض المشتراة للتجارة تزكى بقيمتها، ولا زكاة في بيت السكن والسيارة الخاصة، وما نوى به التجارة بعد القنية صار للتجارة من وقت نيته، والمال المستفاد من مصدر آخر يستقبل به حولًا.', more: FYI, page: 93 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شروط وجوب الزكاة', items: ['الإسلام', 'الحرية', 'ملك النصاب ملكًا تامًّا مستقرًّا', 'حولان الحول'], page: 85, origin: 'boek' },
    { kind: 'opsomming', title: 'الأموال التي تجب فيها الزكاة', items: ['بهيمة الأنعام', 'الذهب والفضة وما يقوم مقامهما', 'عروض التجارة', 'الحبوب والثمار', 'المعادن والركاز'], page: 83, origin: 'boek' },
    { kind: 'uitzondering', title: 'ما يستثنى من شرط الحول', items: ['الزروع والثمار', 'المعادن والركاز', 'ربح التجارة', 'نتاج السائمة'], page: 86, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الزكاة ركن واجب بالكتاب والسنة والإجماع، ومانعها بخلًا آثم لا يكفر.',
    'الأموال الزكوية خمسة، وشروطها الإسلام والحرية والنصاب والحول.',
    'في الذهب والفضة والأوراق النقدية ربع العشر.',
    'الراجح عند الكتاب وجوب الزكاة في الحلي المعد للاستعمال.',
    'تقوم عروض التجارة بقيمتها عند تمام الحول.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى الزكاة في اللغة؟', options: ['النماء والزيادة', 'النقص', 'الصلاة', 'الصدقة المستحبة'], answer: 0, explain: 'كما في التعريف.', page: 82 },
    { type: 'tf', q: 'من منع الزكاة بخلًا مع اعتقاد وجوبها خرج من الإسلام.', options: ['صواب', 'خطأ'], answer: 1, explain: 'آثم ولا يخرج من الإسلام.', page: 83 },
    { type: 'mc', q: 'كم الحول في الزكاة؟', options: ['اثنا عشر شهرًا قمريًّا', 'ستة أشهر', 'اثنا عشر شهرًا شمسيًّا فقط', 'عشرة أشهر'], answer: 0, explain: 'كما في الشروط.', page: 85 },
    { type: 'mc', q: 'كم الواجب في الذهب والفضة؟', options: ['ربع العشر', 'العشر', 'نصف العشر', 'الخمس'], answer: 0, explain: '«وفي الرقة ربع العشر».', page: 89 },
    { type: 'tf', q: 'نصاب الفضة ثلاثمائة درهم.', options: ['صواب', 'خطأ'], answer: 1, explain: 'مائتا درهم.', page: 89 },
    { type: 'tf', q: 'لا زكاة في السيارة الخاصة التي للاستعمال.', options: ['صواب', 'خطأ'], answer: 0, explain: 'هي من القنية.', page: 93 },
    { type: 'mc', q: 'بم تقوم عروض التجارة عند تمام الحول؟', options: ['بقيمتها وقت تمام الحول', 'بسعر شرائها', 'بأعلى سعر في السنة', 'لا تقوم'], answer: 0, explain: 'لا اعتبار لسعر الشراء.', page: 92 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٨٨ و٩٤. أجزاء «للاطلاع فقط» في الكتاب: ما يستثنى من الحول والحكمة (ص٨٦)، المسائل وزكاة الديون (ص٨٧)، النصاب بالجرام وضم النقدين (ص٩٠)، مسائل العروض (ص٩٣–٩٤).'
}

const nl = {
  scope: 'unit',
  unit: 6,
  title: 'Zakaat: de regels, en zakaat over geld, sieraden en handel',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Wat zakaat is, de waarde en het oordeel ervan en wie haar weigert; de vijf soorten bezit waarover zij verschuldigd is; de voorwaarden; en daarna zakaat over goud, zilver en papiergeld, over sieraden, en over handelswaar.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 6 in één kaart',
    intro: 'De basis van zakaat, daarna geld, sieraden en handel.',
    root: { label: 'Zakaat', sub: 'Eenheid 6' },
    nodes: [
      { label: 'Betekenis en oordeel', sub: 'les 23', page: 82, children: ['de derde zuil', 'weigeren uit gierigheid', 'met dwang genomen'] },
      { label: 'Bezit met zakaat', sub: 'les 24', page: 83, children: ['vee', 'goud en zilver', 'handelswaar en gewassen'] },
      { label: 'Voorwaarden', sub: 'les 25', page: 85, children: ['islam en vrijheid', 'het minimum bezitten', 'een vol jaar'] },
      { label: 'Goud en zilver', sub: 'les 26', page: 89, children: ['een veertigste', 'het minimum', 'papiergeld'] },
      { label: 'Sieraden', sub: 'les 27', page: 91, children: ['bewaard en verboden', 'gedragen', 'op de eigenares'] },
      { label: 'Handelswaar', sub: 'les 28', page: 92, children: ['intentie tot handel', 'waarde bepalen', 'grond'] }
    ]
  },
  points: [
    { text: 'Zakaat betekent letterlijk groei en toename; in de sharia is het een bepaald recht op bepaald bezit voor een bepaalde groep.', page: 82 },
    { text: 'Zakaat is de derde zuil van de islam; volgens de sterkste mening werd zij na de hijra verplicht.', page: 82 },
    { text: 'Wie haar uit gierigheid weigert maar de plicht erkent, zondigt maar verlaat de islam niet; zij wordt dan met dwang genomen.', page: 83 },
    { text: 'Er zijn vijf soorten bezit met zakaat: vee, goud en zilver, handelswaar, graan en vruchten, en delfstoffen en schatten.', page: 83 },
    { text: 'De voorwaarden: islam, vrijheid, het minimum (niṣāb) volledig en vast bezitten, en een vol jaar.', page: 85 },
    { text: 'Over goud en zilver is een veertigste verschuldigd; het minimum is twintig mithqāl goud en tweehonderd dirham zilver.', page: 89 },
    { text: 'Volgens de sterkste mening in het boek is ook over gedragen sieraden zakaat verschuldigd; dat is het voorzichtigst.', page: 91 },
    { text: 'Handelswaar wordt aan het eind van het jaar gewaardeerd naar de waarde op dat moment, niet naar de inkoopprijs; daarover gaat een veertigste.', page: 92 }
  ],
  terms: [
    { term: 'الزكاة', translit: 'az-zakāt', meaning: 'Letterlijk groei en toename; in de sharia een bepaald recht op bepaald bezit voor een bepaalde groep.', explanation: '', notes: [], page: 82 },
    { term: 'العناق', translit: 'al-ʿanāq', meaning: 'Een vrouwelijk geitje van nog geen jaar.', explanation: '', notes: [], page: 83 },
    { term: 'عروض التجارة', translit: 'ʿurūḍ at-tijāra', meaning: 'Alles wat voor kopen en verkopen met winst bestemd is.', explanation: 'Zo genoemd omdat het aangeboden wordt en weer verdwijnt.', notes: [], page: 84 },
    { term: 'المقتات', translit: 'al-muqtāt', meaning: 'Wat als basisvoedsel dient, zoals tarwe en rijst.', explanation: '', notes: [], page: 84 },
    { term: 'الركاز', translit: 'ar-rikāz', meaning: 'Begraven schatten uit de tijd vóór de islam.', explanation: '', notes: [], page: 85 },
    { term: 'الحول', translit: 'al-ḥawl', meaning: 'Twaalf maanmaanden.', explanation: '', notes: [], page: 85 },
    { term: 'السائمة', translit: 'as-sāʾima', meaning: 'Vee dat vrij graast.', explanation: '', notes: [], page: 86 },
    { term: 'الرقة', translit: 'ar-riqa', meaning: 'Zilver en geslagen dirhams.', explanation: '', notes: [], page: 89 },
    { term: 'الفتخات', translit: 'al-fatakhāt', meaning: 'Grote ringen.', explanation: '', notes: [], page: 91 },
    { term: 'القنية', translit: 'al-qinya', meaning: 'Wat je voor eigen gebruik bezit, niet voor de handel.', explanation: 'Daarover is geen zakaat, zoals je woonhuis en je eigen auto.', notes: [], page: 93 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Het minimum voor goud en zilver',
      intro: 'Zoals in les 26; het gewicht in gram komt uit een deel ter kennisname.',
      columns: ['Minimum', 'In gram', 'Verschuldigd'],
      rows: [
        { label: 'Goud', cells: ['twintig mithqāl', '85 gram', 'een veertigste'] },
        { label: 'Zilver', cells: ['tweehonderd dirham', '595 gram', 'een veertigste'] },
        { label: 'Papiergeld', cells: ['het laagste van de twee', 'in het belang van de armen', 'een veertigste'] }
      ],
      page: 90
    },
    {
      type: 'compare',
      title: 'Zakaat over sieraden',
      intro: 'Zoals in les 27.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Om te bewaren', cells: ['verschuldigd, volgens alle geleerden'] },
        { label: 'Verboden sieraden', cells: ['verschuldigd, volgens alle geleerden'] },
        { label: 'Om toegestaan te dragen', cells: ['verschil van mening; volgens het boek verschuldigd'] }
      ],
      page: 91
    }
  ],
  sections: [
    { title: 'De waarde van zakaat geven', text: 'Zij reinigt het bezit en de gever, zoals Allah zegt: "Neem van hun bezit een gave waarmee je hen reinigt en zuivert" (at-Tawba 9:103), en zij brengt verbondenheid, liefde en onderlinge zorg.', page: 82 },
    { title: 'Uitzonderingen op het volle jaar (alleen ter kennisname)', text: 'Gewassen en vruchten, delfstoffen en schatten; winst uit handel volgt het jaar van het kapitaal, en de jongen van grazend vee volgen het jaar van de moederdieren.', more: FYI_NL, page: 86 },
    { title: 'De wijsheid van zakaat (alleen ter kennisname)', text: 'Het bezit reinigen en laten groeien, de gever reinigen van gierigheid, oefenen in geven, de armen steunen en Allah danken voor het bezit.', more: FYI_NL, page: 86 },
    { title: 'Vragen over de voorwaarden (alleen ter kennisname)', text: 'Wie schulden heeft, geeft volgens de sterkste mening zakaat over wat hij heeft; wie spaart voor een huis, ḥajj of huwelijk, geeft zakaat als het jaar om is; zakt het bezit vóór het eind van het jaar onder het minimum, dan is niets verschuldigd; over edelstenen is geen zakaat tenzij voor de handel.', more: FYI_NL, page: 87 },
    { title: 'Zakaat over uitstaande schulden (alleen ter kennisname)', text: 'Een schuld bij iemand die erkent en betaalt, telt elk jaar mee, ook als je het nog niet ontvangen hebt; uitstellen tot ontvangst mag. Een schuld bij iemand die niet kan betalen, rekt of ontkent: niets verschuldigd; ontvang je het toch, dan is één jaar zakaat het voorzichtigst.', more: FYI_NL, page: 87 },
    { title: 'Goud en zilver samentellen (alleen ter kennisname)', text: 'Volgens de sterkste mening tel je ze niet samen, omdat het twee soorten zijn; behalve als het handelswaar is, want dan telt de waarde.', more: FYI_NL, page: 90 },
    { title: 'Zakaat over papiergeld', text: 'Verschuldigd op grond van de algemene bewijzen en omdat het de plaats van goud en zilver inneemt; dat is de mening van de meeste geleerden en het besluit van de fiqh-academie. Het minimum is het laagste van de twee, en het telt mee met goud, zilver en handelswaar.', page: 90 },
    { title: 'Voorwaarden bij handelswaar', text: 'Je bezit het met de intentie tot handel; volgens de juiste mening wordt het handelswaar zodra die intentie ontstaat, ook als je het zonder eigen handeling kreeg. De waarde moet het minimum halen, met de overige voorwaarden; je waardeert op de manier die het gunstigst is voor de arme.', page: 92 },
    { title: 'Vragen over handelswaar (alleen ter kennisname)', text: 'Winst krijgt geen nieuw jaar; grond gekocht voor de handel telt naar zijn waarde; over je woonhuis en eigen auto is geen zakaat; wat je eerst voor jezelf had en daarna wilt verhandelen, wordt handelswaar vanaf die intentie; geld uit een andere bron krijgt een eigen jaar.', more: FYI_NL, page: 93 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Voorwaarden van zakaat', items: ['islam', 'vrijheid', 'het minimum volledig en vast bezitten', 'een vol jaar'], page: 85, origin: 'boek' },
    { kind: 'opsomming', title: 'Bezit waarover zakaat verschuldigd is', items: ['vee', 'goud, zilver en wat ervoor in de plaats komt', 'handelswaar', 'graan en vruchten', 'delfstoffen en schatten'], page: 83, origin: 'boek' },
    { kind: 'uitzondering', title: 'Geen vol jaar nodig', items: ['gewassen en vruchten', 'delfstoffen en schatten', 'winst uit handel', 'jongen van grazend vee'], page: 86, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Zakaat is een verplichte zuil volgens Koran, sunna en consensus; wie haar uit gierigheid weigert, zondigt maar wordt geen ongelovige.',
    'Er zijn vijf soorten bezit met zakaat; de voorwaarden zijn islam, vrijheid, het minimum en een vol jaar.',
    'Over goud, zilver en papiergeld gaat een veertigste.',
    'Volgens het boek is ook over gedragen sieraden zakaat verschuldigd.',
    'Handelswaar wordt aan het eind van het jaar naar de waarde van dat moment geteld.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent zakaat letterlijk?', options: ['groei en toename', 'afname', 'gebed', 'vrijwillige gift'], answer: 0, explain: 'Zoals in de definitie.', page: 82 },
    { type: 'tf', q: 'Wie zakaat uit gierigheid weigert maar de plicht erkent, verlaat de islam.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij zondigt maar verlaat de islam niet.', page: 83 },
    { type: 'mc', q: 'Hoe lang is het jaar (ḥawl) bij zakaat?', options: ['twaalf maanmaanden', 'zes maanden', 'alleen twaalf zonnemaanden', 'tien maanden'], answer: 0, explain: 'Zoals bij de voorwaarden.', page: 85 },
    { type: 'mc', q: 'Hoeveel is verschuldigd over goud en zilver?', options: ['een veertigste', 'een tiende', 'een twintigste', 'een vijfde'], answer: 0, explain: '"En over zilver: een veertigste."', page: 89 },
    { type: 'tf', q: 'Het minimum voor zilver is driehonderd dirham.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Tweehonderd dirham.', page: 89 },
    { type: 'tf', q: 'Over je eigen auto voor gebruik is geen zakaat.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Die is voor eigen gebruik.', page: 93 },
    { type: 'mc', q: 'Naar welke waarde tel je handelswaar aan het eind van het jaar?', options: ['de waarde op dat moment', 'de inkoopprijs', 'de hoogste prijs van het jaar', 'je telt het niet'], answer: 0, explain: 'De inkoopprijs telt niet.', page: 92 }
  ]),
  note: 'Oefeningen van het boek op p. 88 en 94. Delen die het boek alleen ter kennisname geeft: uitzonderingen op het jaar en de wijsheid (p. 86), vragen en schulden (p. 87), het gewicht in gram en goud met zilver samentellen (p. 90), vragen over handelswaar (p. 93–94). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '23', unit: 6, ar, nl }
