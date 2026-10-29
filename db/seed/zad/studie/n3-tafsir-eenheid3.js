// Hoofdstukkaart bij التفسير (٣), eenheid 3: سورة الطارق (lessen 7–8, boek p. 31–37).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '7',
  unit: 3,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '31–37',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الطارق', 'Soera aṭ-Ṭāriq'],
  subtitle: ['درسان مجموعان في صفحة واحدة', 'Twee lessen samen op één pagina'],
  summary: [
    'سورة مكية يقسم الله فيها بالسماء والطارق على أن على كل نفس حافظا، ثم يأمر الإنسان أن ينظر مم خلق ليستدل على قدرة الله على بعثه، ثم يقسم بالسماء ذات الرجع والأرض ذات الصدع على أن القرآن قول فصل، ويتوعد الكافرين الذين يكيدون.',
    'Een Mekkaanse soera waarin Allah zweert bij de hemel en de nachtelijke bezoeker dat elke ziel een bewaker heeft. Daarna beveelt Hij de mens te kijken waaruit hij geschapen is, als bewijs dat Allah hem kan opwekken. Dan zweert Hij bij de hemel die terugkeert en de aarde die openbarst dat de Koran een beslissend woord is, en dreigt Hij de ongelovigen die listen smeden.'
  ],
  map: {
    title: ['سورة الطارق في خريطة واحدة', 'Soera aṭ-Ṭāriq in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الطارق', 'Soera aṭ-Ṭāriq'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['القسم الأول', 'De eerste eed'], sub: ['الآيات ١–٤', 'vers 1–4'], page: 32, children: [['السماء والطارق', 'de hemel en de nachtelijke bezoeker'], ['النجم الثاقب', 'de doordringende ster'], ['على كل نفس حافظ', 'elke ziel heeft een bewaker']] },
      { label: ['دليل البعث', 'Bewijs voor de opwekking'], sub: ['الآيات ٥–٨', 'vers 5–8'], page: 32, children: [['ماء دافق', 'stuwend water'], ['بين الصلب والترائب', 'tussen ruggengraat en borst'], ['على رجعه لقادر', 'Hij kan hem terugbrengen']] },
      { label: ['يوم تبلى السرائر', 'De Dag dat geheimen getoetst worden'], sub: ['الآيتان ٩–١٠', 'vers 9–10'], page: 33, children: [['تنكشف الأسرار', 'het verborgene komt aan het licht'], ['لا قوة ولا ناصر', 'geen kracht en geen helper']] },
      { label: ['القسم الثاني', 'De tweede eed'], sub: ['الآيات ١١–١٤', 'vers 11–14'], page: 35, children: [['ذات الرجع', 'die terugkeert met regen'], ['ذات الصدع', 'die openbarst'], ['قول فصل', 'een beslissend woord']] },
      { label: ['الكيد والإمهال', 'List en uitstel'], sub: ['الآيات ١٥–١٧', 'vers 15–17'], page: 36, children: [['يكيدون كيدا', 'zij smeden een list'], ['وأكيد كيدا', 'en Ik smeed een list'], ['أمهلهم رويدا', 'geef hen een beetje uitstel']] }
    ]
  },
  points: [
    [31, 'أنكر النبي ﷺ على معاذ تطويله وأرشده إلى القراءة بالسماء والطارق والشمس وضحاها ونحوهما.', 'De Profeet ﷺ keurde het lange reciteren van Muʿādh af en wees hem op aṭ-Ṭāriq, ash-Shams en soortgelijke soera’s.'],
    [32, 'سمي النجم طارقا لأنه يظهر ليلا ويختفي نهارا، كمن يطرق الناس ليلا.', 'De ster heet ṭāriq omdat hij alleen ’s nachts verschijnt en overdag verdwijnt, als iemand die mensen ’s nachts bezoekt.'],
    [32, 'لكل نفس حافظ من الله يحفظها من الآفات ويحفظ أعمالها.', 'Elke ziel heeft van Allah een bewaker die haar tegen rampen beschermt en haar daden bijhoudt.'],
    [32, 'النظر في ضعف أصل الإنسان يدل على قدرة الله على إعادته، فمن قدر على البدء فالإعادة أهون.', 'Nadenken over de zwakke oorsprong van de mens toont dat Allah hem kan terugbrengen: wie kan beginnen, kan het herhalen nog makkelijker.'],
    [33, 'الصحيح أن الخارج من بين الصلب والترائب هو ماء الرجل، لأن السياق في الماء الدافق.', 'Het juiste is dat wat tussen ruggengraat en borst uitkomt het water van de man is, omdat het gaat om het stuwende water.'],
    [34, 'على المسلم أن يعتني بعمل القلب أكثر من عمل الجوارح، فيطهره من الشرك والبدعة والحقد.', 'De moslim moet meer aandacht geven aan het werk van het hart dan aan dat van de ledematen, en het zuiveren van shirk, bidʿa en wrok.'],
    [35, 'المقسم عليه في القسم الثاني: أن القرآن قول فصل يفصل بين الحق والباطل، وما هو بالهزل.', 'Waarop gezworen wordt in de tweede eed: de Koran is een beslissend woord dat waarheid en valsheid scheidt, en geen scherts.'],
    [36, 'كلما بعد المسلمون عن كتاب الله بعدوا عن العزة والنصر.', 'Hoe verder de moslims van Allahs Boek zijn, hoe verder zij van eer en overwinning zijn.']
  ],
  terms: [
    ['السماء', 'as-samāʾ', 32, 'كل ما علاك، حتى السحاب.', 'Alles wat boven je is, zelfs de wolken.'],
    ['الطارق', 'aṭ-ṭāriq', 32, 'النجم الذي يظهر ليلا ويختفي نهارا.', 'De ster die ’s nachts verschijnt en overdag verdwijnt.'],
    ['الثاقب', 'ath-thāqib', 32, 'المضيء الذي يثقب الظلام بنوره.', 'De lichtende ster die het donker met zijn licht doorboort.'],
    ['ماء دافق', 'māʾ dāfiq', 32, 'المني يخرج من الرجل بدفق.', 'Het zaad, dat stuwend uit de man komt.'],
    ['الترائب', 'at-tarāʾib', 32, 'أعلى الصدر؛ عظام الصدر.', 'De bovenkant van de borst; de borstbeenderen.'],
    ['السرائر', 'as-sarāʾir', 33, 'أسرار القلوب، تختبر وتظهر يوم القيامة.', 'De geheimen van de harten, die op de Opstandingsdag getoetst en blootgelegd worden.'],
    ['ذات الرجع', 'dhāt ar-rajʿ', 35, 'السماء ترجع بالمطر مرة بعد مرة.', 'De hemel die steeds terugkeert met regen.'],
    ['ذات الصدع', 'dhāt aṣ-ṣadʿ', 35, 'الأرض تنشق عن النبات والشجر والأنهار.', 'De aarde die openbarst voor planten, bomen en rivieren.'],
    ['قول فصل', 'qawl faṣl', 35, 'حق يفصل بين الحق والباطل.', 'Een waarheid die waarheid en valsheid scheidt.'],
    ['رويدا', 'ruwaydan', 36, 'قليلا؛ والرويد القليل.', 'Een beetje; ar-ruwayd is weinig.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['من النظر في الخلق إلى الإيمان بالبعث', 'Van nadenken over de schepping naar geloof in de opwekking'],
      intro: ['قياس عقلي من المشاهد إلى الغائب.', 'Een redenering van het waarneembare naar het verwachte.'],
      nodes: [
        [32, 'فلينظر الإنسان مم خلق', 'Laat de mens kijken waaruit hij geschapen is', 'من ماء دافق', 'uit stuwend water'],
        [32, 'يرى ضعف أصله', 'Hij ziet zijn zwakke oorsprong', 'يخرج من بين الصلب والترائب', 'het komt van tussen ruggengraat en borst'],
        [33, 'يعلم قدرة الخالق', 'Hij kent de macht van de Schepper', 'من بدأ الخلق قادر على إعادته', 'wie het begin schiep, kan het herhalen'],
        [33, 'يؤمن بالرجوع', 'Hij gelooft in de terugkeer', '﴿إنه على رجعه لقادر﴾', '"Hij is zeker in staat hem terug te brengen"']
      ]
    },
    {
      type: 'cards',
      title: ['حكم كيد الله', 'De wijsheid van Allahs list'],
      intro: ['كما ذكرها الكتاب عند ﴿وأكيد كيدا﴾.', 'Zoals het boek ze noemt bij "en Ik smeed een list".'],
      nodes: [
        [36, 'إظهار الحق', 'De waarheid tonen', '', ''],
        [36, 'دفع باطلهم', 'Hun valsheid afweren', '', ''],
        [36, 'ليعلم من الغالب', 'Laten zien wie overwint', 'الإنسان أضعف من القوي العليم', 'de mens is zwakker dan de Sterke, de Wetende']
      ]
    }
  ],
  sections: [
    [32, 'الحفظة', 'De bewakers', 'لكل نفس معقبات من أمر الله يحفظونها، وكرام كاتبون يعلمون ما تفعلون.', 'Elke ziel heeft engelen die haar in opdracht van Allah beschermen, en edele schrijvers die weten wat jullie doen.'],
    [33, 'مراقبة النفس', 'Toezicht op jezelf', 'أكد الله أن على كل نفس رقيبا يحصي أعمالها، فيجب على العبد أن يراقب نفسه.', 'Allah benadrukt dat elke ziel een toezichthouder heeft die haar daden telt; daarom moet de dienaar toezicht houden op zichzelf.'],
    [36, 'الإمهال', 'Het uitstel', '﴿فمهل الكافرين أمهلهم رويدا﴾: لا تستعجل عذابهم، فسترى ما يحل بهم.', '"Geef de ongelovigen uitstel, een beetje": haast hun straf niet, je zult zien wat hen treft.'],
    [37, 'معاني السورة', 'De betekenissen van de soera', 'رقابة على كل نفس، ونفي القوة والناصر يوم القيامة، وأن القرآن حق وجد، والوعيد للكائدين.', 'Toezicht op elke ziel, geen kracht en geen helper op de Dag, de Koran is waarheid en ernst, en een dreiging voor wie listen smeden.']
  ],
  keycards: [
    ['onderscheid', 33, 'الصلب والترائب', 'Ruggengraat en borst', ['قول: الصلب من الرجل والترائب من المرأة', 'الصحيح: كلاهما من الرجل، لأن السياق في الماء الدافق الخارج منه'], ['een mening: de ruggengraat is van de man en de borst van de vrouw', 'het juiste: beide van de man, omdat het gaat om het stuwende water dat uit hem komt']],
    ['opsomming', 34, 'مما يطهر منه القلب', 'Waarvan het hart gezuiverd moet worden', ['الشرك', 'البدعة', 'الحقد والغل', 'كراهية ما أنزل الله', 'بغض الصحابة'], ['shirk', 'bidʿa', 'wrok en haat', 'afkeer van wat Allah openbaarde', 'afkeer van de metgezellen']]
  ],
  hadith: [
    { text: 'أفتان أنت يا معاذ، أما يكفيك أن تقرأ بالسماء والطارق والشمس وضحاها ونحو هذا؟', takhrij: 'رواه ابن حبان وصححه الألباني', takhrijNl: 'Ibn Ḥibbān; al-Albānī noemde hem authentiek', narrator: 'جابر', narratorNl: 'Jābir', note: 'لما أطال معاذ في صلاة المغرب بالبقرة والنساء، كما في الكتاب.', nlNote: 'Toen Muʿādh in het maghrib-gebed al-Baqara en an-Nisāʾ las, zoals het boek vermeldt.', nl: 'Ben jij een onruststoker, Muʿādh? Is het niet genoeg voor je om "Bij de hemel en de nachtelijke bezoeker", "Bij de zon en haar ochtendlicht" en dergelijke te reciteren?', pages: [31] }
  ],
  persons: [
    ['al-bayhaqi', 'text', [31], 'روى عن ابن عباس أن الطارق نزلت بمكة.', 'Overleverde van Ibn ʿAbbās dat aṭ-Ṭāriq in Mekka werd geopenbaard.'],
    ['ibn-abbas', 'text', [31], 'أخبر أن سورة الطارق مكية.', 'Meldde dat aṭ-Ṭāriq Mekkaans is.'],
    ['jabir-ibn-abdallah', 'text', [31], 'روى قصة معاذ وإنكار النبي ﷺ عليه.', 'Overleverde het verhaal van Muʿādh en de afkeuring van de Profeet ﷺ.'],
    ['muadh-ibn-jabal', 'text', [31], 'أطال القراءة في الصلاة فأرشده النبي ﷺ إلى التخفيف.', 'Reciteerde lang in het gebed; de Profeet ﷺ wees hem op een kortere recitatie.'],
    ['ibn-hibban', 'takhrij', [31], 'روى الحديث في صحيحه.', 'Overleverde de hadith in zijn Ṣaḥīḥ.'],
    ['al-albani', 'takhrij', [31], 'صحح الحديث.', 'Noemde de hadith authentiek.']
  ],
  review: [
    ['على كل نفس حافظ، فراقب نفسك.', 'Elke ziel heeft een bewaker; houd toezicht op jezelf.'],
    ['من نظر مم خلق علم أن الله قادر على بعثه.', 'Wie kijkt waaruit hij geschapen is, weet dat Allah hem kan opwekken.'],
    ['يوم القيامة تبلى السرائر ولا قوة للإنسان ولا ناصر.', 'Op de Opstandingsdag worden de geheimen getoetst; de mens heeft geen kracht en geen helper.'],
    ['القرآن قول فصل وما هو بالهزل.', 'De Koran is een beslissend woord en geen scherts.'],
    ['يمهل الله الكافرين قليلا ثم يأخذهم.', 'Allah geeft de ongelovigen even uitstel en grijpt hen dan.']
  ],
  quiz: [
    { type: 'mc', page: 32, q: ['لماذا سمي النجم طارقا؟', 'Waarom heet de ster ṭāriq?'], options: [['لأنه يظهر ليلا ويختفي نهارا', 'لأنه أكبر النجوم', 'لأنه يسقط على الأرض', 'لأنه يضيء نهارا'], ['omdat hij ’s nachts verschijnt en overdag verdwijnt', 'omdat hij de grootste ster is', 'omdat hij op aarde valt', 'omdat hij overdag schijnt']], answer: 0, explain: ['كمن يطرق الناس ليلا.', 'Als iemand die mensen ’s nachts bezoekt.'] },
    { type: 'mc', page: 32, q: ['ما الترائب؟', 'Wat zijn at-tarāʾib?'], options: [['أعلى الصدر', 'أسفل الظهر', 'عظام الرأس', 'الأضلاع السفلى'], ['de bovenkant van de borst', 'de onderrug', 'de schedelbeenderen', 'de onderste ribben']], answer: 0, explain: ['الترائب عظام الصدر.', 'At-tarāʾib zijn de borstbeenderen.'] },
    { type: 'tf', page: 33, q: ['رجح الكتاب أن الصلب من الرجل والترائب من المرأة.', 'Het boek kiest ervoor dat de ruggengraat van de man is en de borst van de vrouw.'], answer: 1, explain: ['الصحيح أن الخارج ماء الرجل، لأن السياق في الماء الدافق.', 'Het juiste is dat het om het water van de man gaat.'] },
    { type: 'mc', page: 35, q: ['على أي شيء أقسم الله بالسماء ذات الرجع؟', 'Waarop zweert Allah bij de hemel die terugkeert?'], options: [['أن القرآن قول فصل', 'أن السماء سبع', 'أن المطر رحمة', 'أن الأرض كروية'], ['dat de Koran een beslissend woord is', 'dat er zeven hemelen zijn', 'dat regen barmhartigheid is', 'dat de aarde rond is']], answer: 0, explain: ['﴿إنه لقول فصل وما هو بالهزل﴾.', '"Het is een beslissend woord en geen scherts."'] },
    { type: 'mc', page: 36, q: ['ما معنى ﴿رويدا﴾؟', 'Wat betekent ruwaydan?'], options: [['قليلا', 'سريعا', 'دائما', 'كثيرا'], ['een beetje', 'snel', 'altijd', 'veel']], answer: 0, explain: ['الرويد القليل.', 'Ar-ruwayd is weinig.'] },
    { type: 'tf', page: 34, q: ['على المسلم أن يعتني بعمل القلب أكثر من عمل الجوارح.', 'De moslim moet meer aandacht geven aan het werk van het hart dan aan dat van de ledematen.'], answer: 0, explain: ['لأن عليه المدار.', 'Omdat het daarom draait.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٣٤ و٣٧.', 'Oefeningen van het boek op p. 34 en 37. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
