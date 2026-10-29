// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 3: ما يبغضه ﷺ (lessen 10–11, boek p. 44–47).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '10',
  unit: 3,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '44–47',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['ما يبغضه ﷺ', 'Wat hij ﷺ verafschuwde'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'كان بغض النبي ﷺ لله وفي الله، فأبغض الكذب وسيئ الأخلاق، وكره الطيرة، والثوم لريحه، والمشروبات الحارة، وأن يقام له، وأن يمشي أحد خلفه، وأن يؤخذ من رأس الطعام.',
    'De Profeet ﷺ verafschuwde alleen voor Allah en omwille van Allah. Hij haatte liegen en slecht karakter, en had een afkeer van bijgelovige voortekenen, van knoflook om de geur, van hete dranken, van mensen die voor hem opstonden of achter hem liepen, en van eten dat van bovenaf genomen wordt.'
  ],
  map: {
    title: ['ما يبغضه ﷺ في خريطة واحدة', 'Wat hij verafschuwde in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['ما يبغضه ﷺ', 'Wat hij ﷺ verafschuwde'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['من الأخلاق', 'Karakter'], sub: ['ص ٤٤', 'p. 44'], page: 44, children: [['الكذب', 'liegen'], ['سيئ الأخلاق', 'slecht karakter']] },
      { label: ['من العقائد', 'Overtuigingen'], sub: ['ص ٤٥', 'p. 45'], page: 45, children: [['الطيرة', 'bijgelovige voortekenen']] },
      { label: ['من المأكل والمشرب', 'Eten en drinken'], sub: ['ص ٤٥–٤٧', 'p. 45–47'], page: 45, children: [['الثوم لريحه', 'knoflook om de geur'], ['الشراب الحار', 'hete drank'], ['الأخذ من رأس الطعام', 'van bovenop het eten nemen']] },
      { label: ['من العادات', 'Gewoonten'], sub: ['ص ٤٦–٤٧', 'p. 46–47'], page: 46, children: [['أن يقام له', 'dat men voor hem opstaat'], ['أن يمشى خلفه', 'dat men achter hem loopt']] }
    ]
  },
  points: [
    [44, 'كان بغضه ﷺ لله وفي الله، لا كعامة الناس الذين يبغضون انتصارا للنفس أو لهوى.', 'Zijn afkeer was voor Allah en omwille van Allah, niet zoals bij gewone mensen die haten uit eigenbelang of begeerte.'],
    [44, 'كان الرجل يكذب عند النبي ﷺ الكذبة فلا يزال في نفسه عليه حتى يعلم أنه أحدث منها توبة.', 'Als iemand bij de Profeet ﷺ loog, bleef het hem dwarszitten tot hij wist dat die man er berouw over had getoond.'],
    [45, 'الطيرة التشاؤم بمرئي أو مسموع أو زمن أو عدد، وكرهها لأنها سوء ظن بالله.', 'Ṭiyara is pessimisme over iets wat men ziet of hoort, een tijd of een getal; hij verafschuwde het omdat het een slechte gedachte over Allah is.'],
    [46, 'قال النووي: أكل الثوم مباح بالإجماع، لكن يكره لمن أراد حضور المسجد أو جمع أو مخاطبة الكبار، ويلحق به كل ذي رائحة كريهة.', 'An-Nawawī: knoflook eten is volgens consensus toegestaan, maar afgeraden voor wie naar de moskee, een bijeenkomst of hooggeplaatsten gaat; alles met een vieze geur valt eronder.'],
    [46, 'كره ﷺ أن يقام له تواضعا لربه ومخالفة لعادة المتكبرين والجبابرة.', 'Hij had er een afkeer van dat men voor hem opstond, uit nederigheid voor zijn Heer en tegen de gewoonte van hoogmoedigen en tirannen in.'],
    [47, 'كان يمشي وسط أصحابه أو خلفهم تواضعا لله، وليتفقد أحوالهم ويعلمهم آداب الشرع.', 'Hij liep midden tussen of achter zijn metgezellen, uit nederigheid voor Allah, om hen in het oog te houden en hun de etiquette van de sharīʿa te leren.'],
    [47, 'قال الشوكاني: فيه مشروعية الأكل من جوانب الطعام قبل وسطه.', 'Ash-Shawkānī: hieruit blijkt dat men eerst aan de randen van het eten eet en dan pas het midden.']
  ],
  terms: [
    ['الطيرة', 'aṭ-ṭiyara', 45, 'التشاؤم بمرئي أو مسموع أو زمان أو عدد.', 'Pessimisme over iets gezien of gehoord, een tijd of een getal.'],
    ['الحميم', 'al-ḥamīm', 46, 'الماء الحار، كما قال السندي.', 'Heet water, zoals as-Sindī zei.'],
    ['يطأ عقبه', 'yaṭaʾ ʿaqibah', 46, 'يمشي خلفه.', 'Achter hem lopen.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['القيام للناس ثلاث مراتب', 'Opstaan voor mensen in drie rangen'],
      intro: ['كما في الإطار ص ٤٦.', 'Zoals in het kader op p. 46.'],
      nodes: [
        [46, 'القيام على رأسه وهو جالس', 'Bij iemands hoofd staan terwijl hij zit', 'فعل الجبابرة، منهي عنه إلا لإغاظة الكفار', 'wat tirannen doen; verboden, behalve om de ongelovigen te ergeren'],
        [46, 'القيام إليه عند قدومه', 'Naar hem toe gaan bij zijn aankomst', 'كالقادم من سفر، لا بأس به', 'zoals bij terugkeer van een reis; geen bezwaar'],
        [46, 'القيام له عند رؤيته', 'Opstaan als men hem ziet', 'الأقوى أن النهي لمن يسره ذلك', 'het sterkste: het verbod geldt voor wie daarvan geniet']
      ]
    }
  ],
  sections: [
    [45, 'صور من الطيرة', 'Vormen van ṭiyara', 'من صورها: التشاؤم بشخص معين، أو لباس معين، أو طريق معين، أو يوم معين.', 'Vormen ervan: pessimisme over een bepaald persoon, bepaalde kleding, een bepaalde straat of een bepaalde dag.'],
    [46, 'ما يلحق بالثوم', 'Wat onder knoflook valt', 'يدخل في ذلك حضور المسجد برائحة الدخان، أو رائحة بعض المهن، أو بعض الأطعمة ذات الرائحة الكريهة.', 'Hieronder valt naar de moskee gaan met de geur van rook, van sommige beroepen of van voedsel met een vieze geur.']
  ],
  keycards: [
    ['opsomming', 44, 'مما كان يبغضه ويكرهه', 'Wat hij haatte en verafschuwde', ['الكذب', 'سيئ الأخلاق', 'الطيرة', 'الثوم لريحه', 'الشراب الحار', 'القيام له', 'المشي خلفه', 'الأخذ من رأس الطعام'], ['liegen', 'slecht karakter', 'bijgelovige voortekenen', 'knoflook om de geur', 'hete drank', 'opstaan voor hem', 'achter hem lopen', 'van bovenop het eten nemen']]
  ],
  hadith: [
    { text: 'ما كان خلق أبغض إلى رسول الله ﷺ من الكذب، ولقد كان الرجل يحدث عند النبي ﷺ بالكذبة، فما يزال في نفسه عليه حتى يعلم أنه قد أحدث منها توبة', takhrij: 'أخرجه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Geen karaktertrek was de Boodschapper van Allah ﷺ zo gehaat als liegen. Als iemand bij de Profeet ﷺ een leugen vertelde, bleef het hem dwarszitten tot hij wist dat die man er berouw over had getoond', pages: [44] },
    { text: 'إن أحبكم إلي وأقربكم مني في الآخرة محاسنكم أخلاقا، وإن أبغضكم إلي وأبعدكم مني في الآخرة مساويكم أخلاقا', takhrij: 'رواه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو ثعلبة الخشني', narratorNl: 'Abū Thaʿlaba al-Khushanī', nl: 'Mij het liefst en het dichtst bij mij in het hiernamaals zijn wie van jullie het beste karakter hebben, en mij het meest gehaat en het verst van mij in het hiernamaals zijn wie van jullie het slechtste karakter hebben', pages: [44] },
    { text: 'ذاك شيء يجدونه في صدورهم، فلا يصدنهم', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'معاوية بن الحكم السلمي', narratorNl: 'Muʿāwiya ibn al-Ḥakam as-Sulamī', note: 'جواب سؤاله عن رجال يتطيرون.', nlNote: 'Antwoord op zijn vraag over mannen die bijgelovige voortekenen zagen.', nl: 'Dat is iets wat zij in hun borst voelen; laat het hen niet tegenhouden', pages: [45] },
    { text: 'أن النبي ﷺ كان يكره الطيرة', takhrij: 'أخرجه أحمد وابن ماجه، وصححه الألباني', takhrijNl: 'Aḥmad en Ibn Māja; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De Profeet ﷺ had een afkeer van bijgelovige voortekenen', pages: [45] },
    { text: 'لا، ولكني أكرهه من أجل ريحه', takhrij: 'أخرجه الترمذي، وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'جابر بن سمرة', narratorNl: 'Jābir ibn Samura', note: 'جواب أبي أيوب لما سأل: أحرام هو؟ عن طعام فيه ثوم.', nlNote: 'Antwoord aan Abū Ayyūb, die vroeg of eten met knoflook verboden is.', nl: 'Nee, maar ik heb er een afkeer van om de geur', pages: [45] },
    { text: 'كان رسول الله ﷺ يكره شرب الحميم', takhrij: 'رواه أحمد، وصححه الأرناؤوط', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Arnaʾūṭ', narrator: 'عقبة بن عامر', narratorNl: 'ʿUqba ibn ʿĀmir', nl: 'De Boodschapper van Allah ﷺ had een afkeer van het drinken van heet water', pages: [46] },
    { text: 'وكانوا إذا رأوه لم يقوموا؛ لما يعلمون من كراهيته لذلك', takhrij: 'أخرجه أحمد والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'أنس', narratorNl: 'Anas', nl: 'Als zij hem zagen, stonden zij niet op, omdat zij wisten dat hij daar een afkeer van had', pages: [46] },
    { text: 'كان رسول الله ﷺ يكره أن يطأ أحد عقبه، ولكن يمين وشمال', takhrij: 'أخرجه الحاكم، وصححه الألباني', takhrijNl: 'al-Ḥākim; ṣaḥīḥ volgens al-Albānī', narrator: 'عبد الله بن عمرو', narratorNl: 'ʿAbd Allāh ibn ʿAmr', nl: 'De Boodschapper van Allah ﷺ had er een afkeer van dat iemand achter hem liep; men liep rechts en links van hem', pages: [46] },
    { text: 'كان النبي ﷺ إذا مشى مشى أصحابه أمامه، وتركوا ظهره للملائكة', takhrij: 'أخرجه ابن ماجه، وصححه الألباني', takhrijNl: 'Ibn Māja; ṣaḥīḥ volgens al-Albānī', narrator: 'جابر بن عبد الله', narratorNl: 'Jābir ibn ʿAbd Allāh', nl: 'Als de Profeet ﷺ liep, liepen zijn metgezellen vóór hem en lieten zij zijn rug voor de engelen', pages: [47] },
    { text: 'كان رسول الله ﷺ يكره أن يؤخذ من رأس الطعام', takhrij: 'أخرجه الطبراني في «الكبير»، وحسنه الألباني', takhrijNl: 'aṭ-Ṭabarānī in al-Kabīr; ḥasan volgens al-Albānī', nl: 'De Boodschapper van Allah ﷺ had er een afkeer van dat men van bovenop het eten nam', pages: [47] },
    { text: 'البركة تنزل وسط الطعام، فكلوا من حافتيه، ولا تأكلوا من وسطه', takhrij: 'أخرجه الترمذي، وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', nl: 'De zegen daalt neer in het midden van het eten; eet dus van de randen en niet uit het midden', pages: [47] }
  ],
  persons: [
    ['aisha', 'text', [44], 'روت بغضه ﷺ للكذب.', 'Overleverde zijn afkeer van liegen.'],
    ['abu-thalaba-al-khushani', 'text', [44], 'روى حديث محاسن الأخلاق ومساويها.', 'Overleverde de hadith over goed en slecht karakter.'],
    ['muawiya-ibn-al-hakam', 'text', [45], 'سأل عن التطير.', 'Vroeg naar bijgelovige voortekenen.'],
    ['abu-hurayra', 'text', [45], 'روى كراهته ﷺ للطيرة.', 'Overleverde zijn afkeer van bijgeloof.'],
    ['jabir-ibn-samura', 'text', [45], 'روى قصة طعام الثوم مع أبي أيوب.', 'Overleverde het verhaal van het eten met knoflook en Abū Ayyūb.'],
    ['abu-ayyub-al-ansari', 'text', [45], 'نزل عنده النبي ﷺ وكان يرسل إليه فضل طعامه.', 'De Profeet ﷺ verbleef bij hem en stuurde hem de rest van zijn eten.'],
    ['an-nawawi', 'text', [46], 'قال: الثوم مباح بالإجماع ويكره لمن أراد المسجد.', 'Zei: knoflook is toegestaan, maar afgeraden voor wie naar de moskee gaat.'],
    ['uqba-ibn-amir', 'text', [46], 'روى كراهته شرب الحميم.', 'Overleverde zijn afkeer van heet water drinken.'],
    ['as-sindi', 'text', [46], 'فسر الحميم بالماء الحار.', 'Verklaarde ḥamīm als heet water.'],
    ['anas-ibn-malik', 'text', [46], 'روى أنهم كانوا لا يقومون له.', 'Overleverde dat zij niet voor hem opstonden.'],
    ['abdallah-ibn-amr', 'text', [46], 'روى كراهته أن يمشى خلفه.', 'Overleverde zijn afkeer dat men achter hem liep.'],
    ['jabir-ibn-abdallah', 'text', [47], 'روى أن أصحابه كانوا يمشون أمامه.', 'Overleverde dat zijn metgezellen vóór hem liepen.'],
    ['at-tabarani', 'takhrij', [47], 'روى حديث الأخذ من رأس الطعام.', 'Overleverde de hadith over eten van bovenaf nemen.'],
    ['ash-shawkani', 'text', [47], 'استنبط مشروعية الأكل من جوانب الطعام.', 'Leidde af dat men aan de randen van het eten begint.']
  ],
  review: [
    ['كان بغضه ﷺ لله وفي الله.', 'Zijn afkeer was voor Allah en omwille van Allah.'],
    ['أبغض الكذب وسيئ الأخلاق، وكره الطيرة.', 'Hij haatte liegen en slecht karakter, en verafschuwde bijgeloof.'],
    ['كره الثوم لريحه، وليس بحرام.', 'Hij had een afkeer van knoflook om de geur, maar het is niet verboden.'],
    ['كره أن يقام له وأن يمشى خلفه تواضعا.', 'Uit nederigheid had hij er een afkeer van dat men voor hem opstond of achter hem liep.']
  ],
  quiz: [
    { type: 'mc', page: 44, q: ['أي خلق كان أبغض إلى رسول الله ﷺ؟', 'Welke karaktertrek haatte de Boodschapper ﷺ het meest?'], options: [['الكذب', 'البخل', 'الجبن', 'الغضب'], ['liegen', 'gierigheid', 'lafheid', 'woede']], answer: 0, explain: ['كما في حديث عائشة.', 'Zoals in de hadith van ʿĀʾisha.'] },
    { type: 'tf', page: 45, q: ['أكل الثوم حرام لأن النبي ﷺ كرهه.', 'Knoflook eten is verboden, omdat de Profeet ﷺ er een afkeer van had.'], answer: 1, explain: ['قال: «لا، ولكني أكرهه من أجل ريحه».', 'Hij zei: "Nee, maar ik heb er een afkeer van om de geur".'] },
    { type: 'mc', page: 45, q: ['لماذا كره النبي ﷺ الطيرة؟', 'Waarom verafschuwde de Profeet ﷺ bijgelovige voortekenen?'], options: [['لأنها سوء ظن بالله', 'لأنها من عادات العرب فقط', 'لأنها تضر البدن', 'لأنها تكلف مالا'], ['omdat het een slechte gedachte over Allah is', 'alleen omdat het een Arabische gewoonte was', 'omdat het het lichaam schaadt', 'omdat het geld kost']], answer: 0, explain: ['كما في الإطار ص ٤٥.', 'Zoals in het kader op p. 45.'] },
    { type: 'mc', page: 47, q: ['من أين يبدأ الآكل من الطعام؟', 'Waar begint men met eten?'], options: [['من جوانبه', 'من وسطه', 'من أعلاه', 'لا فرق'], ['aan de randen', 'in het midden', 'bovenaan', 'het maakt niet uit']], answer: 0, explain: ['البركة تنزل وسط الطعام.', 'De zegen daalt neer in het midden.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٤٧.', 'Oefening van het boek op p. 47. De Nederlandse weergave van hadith geeft de betekenis weer; het is geen vertaling.']
})
