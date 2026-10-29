// Hoofdstukkaart bij التفسير (٤), eenheid 3: سورة العلق (les 3–4, boek p. 16–22).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '3',
  unit: 3,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '16–22',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة العلق', 'Soera al-ʿAlaq'],
  subtitle: ['درسان: ﴿اقرأ باسم ربك﴾ و﴿أرأيت الذي ينهى﴾', 'Twee lessen: "Lees in de naam van je Heer" en "Heb je gezien wie verbiedt"'],
  summary: [
    'أول ما نزل من القرآن خمس آيات من أولها: أمر بالقراءة باسم الرب الخالق المعلم بالقلم، ثم بيان طغيان الإنسان إذا رأى نفسه مستغنيا، ثم قصة أبي جهل الذي نهى النبي ﷺ عن الصلاة وتهديده بالأخذ بالناصية، وتختم بالأمر بالسجود والاقتراب.',
    'De eerste vijf verzen zijn het eerste wat van de Koran neerkwam: het bevel te lezen in de naam van de Heer die schiep en met de pen onderwees. Daarna gaat het over de mens die overmoedig wordt als hij zich onafhankelijk waant, en over Abū Jahl, die de Profeet ﷺ het gebed verbood en bedreigd wordt bij de voorlok gegrepen te worden. De soera eindigt met het bevel neer te buigen en nader te komen.'
  ],
  map: {
    title: ['سورة العلق في خريطة واحدة', 'Soera al-ʿAlaq in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب في درسين.', 'De delen van de soera zoals het boek ze in twee lessen uitlegt.'],
    root: [['سورة العلق', 'Soera al-ʿAlaq'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['أول ما نزل', 'Het eerste wat neerkwam'], sub: ['الآيات ١–٥', 'vers 1–5'], page: 17, children: [['اقرأ باسم ربك الذي خلق', 'lees in de naam van je Heer die schiep'], ['خلق الإنسان من علق', 'schiep de mens uit een bloedklonter'], ['علم بالقلم', 'onderwees met de pen']] },
      { label: ['طغيان الإنسان', 'De overmoed van de mens'], sub: ['الآيات ٦–٨', 'vers 6–8'], page: 17, children: [['أن رآه استغنى', 'als hij zich onafhankelijk waant'], ['إن إلى ربك الرجعى', 'tot je Heer is de terugkeer']] },
      { label: ['الذي ينهى عبدا إذا صلى', 'Wie een dienaar het gebed verbiedt'], sub: ['الآيات ٩–١٤', 'vers 9–14'], page: 19, children: [['أبو جهل', 'Abū Jahl'], ['ألم يعلم بأن الله يرى', 'weet hij niet dat Allah ziet?']] },
      { label: ['التهديد والأمر بالسجود', 'Dreiging en het bevel neer te buigen'], sub: ['الآيات ١٥–١٩', 'vers 15–19'], page: 20, children: [['لنسفعا بالناصية', 'Wij grijpen hem bij de voorlok'], ['سندع الزبانية', 'Wij roepen de strafengelen'], ['واسجد واقترب', 'buig neer en kom nader']] }
    ]
  },
  points: [
    [16, 'أكثر المفسرين على أن هذه السورة أول ما نزل من القرآن، وأول ما نزل خمس آيات إلى ﴿ما لم يعلم﴾.', 'Volgens de meeste uitleggers is dit de eerste soera die neerkwam, en wel de eerste vijf verzen tot "wat hij niet wist".'],
    [17, '﴿أن رآه استغنى﴾: إذا رأى نفسه غنيا بالمال والولد طغى، والمؤمن مستثنى لأنه لا يرى نفسه مستغنيا عن الله طرفة عين.', '"Als hij zichzelf onafhankelijk ziet": wie zich rijk waant door geld en kinderen, wordt overmoedig. De gelovige is uitgezonderd: hij acht zich geen oogwenk onafhankelijk van Allah.'],
    [18, 'كان النبي ﷺ أميا لا يقرأ ولا يكتب، وهذا حجة على أن القرآن ليس من وضعه.', 'De Profeet ﷺ was ongeletterd: hij kon niet lezen of schrijven. Dat bewijst dat de Koran niet door hem verzonnen is.'],
    [19, 'الذي ينهى عبدا إذا صلى هو أبو جهل، نهى النبي ﷺ عن الصلاة وتوعده.', 'Wie een dienaar het gebed verbiedt is Abū Jahl: hij verbood de Profeet ﷺ te bidden en bedreigde hem.'],
    [20, '﴿ناصية كاذبة خاطئة﴾: صاحبها كاذب في قوله خاطئ في فعله.', '"Een leugenachtige, zondige voorlok": de eigenaar liegt in zijn woorden en zondigt in zijn daden.'],
    [21, 'تحدى القرآن أبا جهل وأعوانه وهم يسمعونه، فلم يجرؤ أحد منهم على الاعتداء على النبي ﷺ.', 'De Koran daagde Abū Jahl en zijn helpers uit terwijl zij meeluisterden, en niemand van hen durfde de Profeet ﷺ aan te vallen.']
  ],
  terms: [
    ['العلق', 'al-ʿalaq', 17, 'الدم الجامد.', 'Gestold bloed.'],
    ['كلا', 'kallā', 17, 'كلمة ردع وزجر.', 'Een woord van terechtwijzing.'],
    ['يطغى', 'yaṭghā', 17, 'يتجاوز الحد بطرا واستكبارا.', 'Uit overmoed en hoogmoed de grens overschrijden.'],
    ['الأمي', 'al-ummī', 18, 'الذي لا يقرأ ولا يكتب.', 'Wie niet kan lezen of schrijven.', 'وبه يبطل قول من قال إنه نسبة إلى أم القرى.', 'Zo vervalt de bewering dat het "uit Umm al-Qurā (Mekka)" betekent.'],
    ['لنسفعا', 'la-nasfaʿan', 20, 'لنأخذن بشدة ونجذبن.', 'Wij zullen hem stevig grijpen en meesleuren.'],
    ['الناصية', 'an-nāṣiya', 20, 'شعر مقدم الرأس.', 'Het haar aan de voorkant van het hoofd.'],
    ['ناديه', 'nādiyah', 20, 'قومه وعشيرته؛ والنادي مكان اجتماع القوم.', 'Zijn volk en clan; de nādī is de plaats waar het volk samenkomt.'],
    ['الزبانية', 'az-zabāniya', 20, 'ملائكة العذاب، من الزبن وهو الدفع.', 'De strafengelen, van zabn: duwen.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['ما فعله أبو جهل وما رد به القرآن', 'Wat Abū Jahl deed en wat de Koran antwoordde'],
      intro: ['كما في الصفحات ١٩–٢١.', 'Zoals op p. 19–21.'],
      nodes: [
        [19, 'نهى عن الصلاة', 'Verbood het gebed', 'وأقسم ليطأن عنق النبي ﷺ', 'en zwoer op de nek van de Profeet ﷺ te trappen'],
        [19, 'نكص على عقبيه', 'Deinsde terug', 'رأى خندقا من نار وهولا وأجنحة', 'hij zag een greppel van vuur, angst en vleugels'],
        [20, 'التهديد', 'De dreiging', 'لنسفعا بالناصية، سندع الزبانية', 'Wij grijpen hem bij de voorlok, Wij roepen de strafengelen'],
        [21, 'الأمر للنبي ﷺ', 'Het bevel aan de Profeet ﷺ', 'لا تطعه واسجد واقترب', 'gehoorzaam hem niet, buig neer en kom nader']
      ]
    }
  ],
  sections: [
    [18, 'تكريم الإنسان', 'De eer van de mens', 'خص الله خلق الإنسان بالذكر تكريما له، كما قال: ﴿ولقد كرمنا بني آدم﴾.', 'Allah noemt de schepping van de mens apart, om hem te eren, zoals in "Wij hebben de kinderen van Ādam geëerd".'],
    [21, 'شدة الوعيد', 'De zwaarte van de dreiging', 'شدة خطاب الله لأبي جهل تبين ما يلحق العبد من عقوبة إذا طغى وتمرد وتجاوز الحد.', 'De strengheid waarmee Allah Abū Jahl toespreekt, toont welke straf de dienaar treft die overmoedig wordt, opstandig is en de grens overschrijdt.']
  ],
  keycards: [
    ['bewijs', 18, 'أمية النبي ﷺ دليل على صدقه', 'Het ongeletterd-zijn van de Profeet ﷺ bewijst zijn waarheid', ['﴿وما كنت تتلو من قبله من كتاب ولا تخطه بيمينك﴾', 'جاء بكتاب لا يأتي بمثله عالم', 'فانقطع الشك في أن القرآن والسنة من وضعه'], ['"Jij las vóór hem geen boek en schreef het niet met je rechterhand"', 'hij bracht een Boek waarvan geen geleerde iets gelijks kan brengen', 'zo valt elke twijfel weg dat Koran en Sunna door hem verzonnen zijn']]
  ],
  hadith: [
    { text: 'لو دنا مني لاختطفته الملائكة عضوا عضوا', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'قاله النبي ﷺ لما أراد أبو جهل أن يطأ عنقه وهو يصلي فنكص على عقبيه.', nlNote: 'De Profeet ﷺ zei dit toen Abū Jahl op zijn nek wilde trappen terwijl hij bad, en terugdeinsde.', nl: 'Als hij dichter bij mij was gekomen, hadden de engelen hem lid voor lid weggerukt', pages: [19] },
    { text: 'أقرب ما يكون العبد من ربه وهو ساجد، فأكثروا الدعاء', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'ذكره الكتاب في تفسير ﴿واسجد واقترب﴾.', nlNote: 'Genoemd bij "buig neer en kom nader".', nl: 'De dienaar is het dichtst bij zijn Heer als hij neerbuigt; doe dan veel smeekbeden', pages: [21] }
  ],
  persons: [
    ['abu-hurayra', 'text', [19], 'روى قصة أبي جهل مع النبي ﷺ وهو يصلي.', 'Overleverde het verhaal van Abū Jahl en de biddende Profeet ﷺ.'],
    ['muslim', 'takhrij', [19, 21], 'روى حديث أبي جهل وحديث القرب في السجود.', 'Overleverde de hadith over Abū Jahl en die over nabijheid in de neerbuiging.']
  ],
  review: [
    ['أول ما نزل من القرآن أول خمس آيات من سورة العلق.', 'Het eerste wat van de Koran neerkwam zijn de eerste vijf verzen van al-ʿAlaq.'],
    ['يطغى الإنسان إذا رأى نفسه مستغنيا، والمؤمن لا يستغني عن ربه.', 'De mens wordt overmoedig als hij zich onafhankelijk waant; de gelovige acht zich nooit onafhankelijk van zijn Heer.'],
    ['أمية النبي ﷺ تقطع الشك في أن القرآن من عند الله.', 'Het ongeletterd-zijn van de Profeet ﷺ neemt de twijfel weg dat de Koran van Allah is.'],
    ['أقرب ما يكون العبد من ربه وهو ساجد.', 'De dienaar is het dichtst bij zijn Heer in de neerbuiging.']
  ],
  quiz: [
    { type: 'mc', page: 17, q: ['ما العلق؟', 'Wat is al-ʿalaq?'], options: [['الدم الجامد', 'التراب', 'الماء', 'العظم'], ['gestold bloed', 'aarde', 'water', 'bot']], answer: 0, explain: ['خلق الإنسان من علق أي من دم جامد.', 'De mens is geschapen uit gestold bloed.'] },
    { type: 'tf', page: 18, q: ['معنى «الأمي» عند الكتاب: المنسوب إلى أم القرى.', 'Volgens het boek betekent ummī "afkomstig uit Umm al-Qurā".'], answer: 1, explain: ['الأمي الذي لا يقرأ ولا يكتب، وبه يبطل ذلك القول.', 'Ummī is wie niet leest of schrijft; die andere bewering vervalt.'] },
    { type: 'mc', page: 19, q: ['من الذي ﴿ينهى عبدا إذا صلى﴾؟', 'Wie "verbiedt een dienaar als hij bidt"?'], options: [['أبو جهل', 'أبو لهب', 'الوليد بن المغيرة', 'أمية بن خلف'], ['Abū Jahl', 'Abū Lahab', 'al-Walīd ibn al-Mughīra', 'Umayya ibn Khalaf']], answer: 0, explain: ['هو أبو جهل كما في حديث مسلم.', 'Abū Jahl, zoals in de hadith bij Muslim.'] },
    { type: 'mc', page: 20, q: ['من أين اشتق لفظ «الزبانية»؟', 'Waarvan is az-zabāniya afgeleid?'], options: [['من الزبن وهو الدفع', 'من الزبد', 'من الزبر وهو الكتابة', 'من الزمن'], ['van zabn: duwen', 'van zabad: schuim', 'van zabr: schrijven', 'van zaman: tijd']], answer: 0, explain: ['لأنهم يدفعون أهل النار.', 'Omdat zij de bewoners van het Vuur duwen.'] },
    { type: 'mc', page: 21, q: ['متى يكون العبد أقرب ما يكون من ربه؟', 'Wanneer is de dienaar het dichtst bij zijn Heer?'], options: [['وهو ساجد', 'وهو قائم', 'وهو صائم', 'وهو نائم'], ['als hij neerbuigt', 'als hij staat', 'als hij vast', 'als hij slaapt']], answer: 0, explain: ['كما في حديث مسلم: «أقرب ما يكون العبد من ربه وهو ساجد».', 'Zoals in de hadith bij Muslim.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ١٨ و٢٢.', 'Oefeningen van het boek op p. 18 en 22. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
