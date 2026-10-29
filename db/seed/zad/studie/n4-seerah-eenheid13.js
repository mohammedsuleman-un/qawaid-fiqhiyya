// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 13: عتابه ﷺ (lessen 24, boek p. 75–77).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
// Weggelaten (zonder bron in het boek): de hadith van Umm Zarʿ op p. 76.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '24',
  unit: 13,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '75–77',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['عتابه ﷺ', 'Zijn verwijt ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'كان خلق النبي ﷺ القرآن، ولم يكن يكثر العتاب؛ خدمه أنس عشر سنين فما قال له: أف قط. وكان يعاتب حين يحتاج الأمر إلى عتاب، كعتابه بعض زوجاته، وعتابه عائشة في الرد على اليهود، وعتابه أسامة على قتل رجل بعد أن قال: لا إله إلا الله.',
    'Het karakter van de Profeet ﷺ was de Koran, en hij verweet zelden: Anas diende hem tien jaar en hoorde nooit "foei". Wel verweet hij wanneer dat nodig was, zoals bij sommige van zijn vrouwen, bij ʿĀʾisha om haar antwoord aan de joden, en bij Usāma, die een man doodde nadat die lā ilāha illā Allāh had gezegd.'
  ],
  map: {
    title: ['عتابه ﷺ في خريطة واحدة', 'Zijn verwijt in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['عتابه ﷺ', 'Zijn verwijt ﷺ'], ['الوحدة الثالثة عشرة', 'Eenheid 13']],
    nodes: [
      { label: ['خلقه القرآن', 'Zijn karakter was de Koran'], sub: ['ص ٧٥', 'p. 75'], page: 75, children: [['ما قال لأنس: أف قط', 'nooit "foei" tegen Anas']] },
      { label: ['لم يكن يكثر العتاب', 'Hij verweet zelden'], sub: ['ص ٧٥–٧٦', 'p. 75–76'], page: 75, children: [['﴿عرف بعضه وأعرض عن بعض﴾', '"Hij maakte een deel bekend en liet een deel rusten"']] },
      { label: ['معاتبته زوجاته', 'Verwijt aan zijn vrouwen'], sub: ['ص ٧٦–٧٧', 'p. 76–77'], page: 76, children: [['آية التحريم', 'het vers van at-Taḥrīm'], ['عليك بالرفق', 'wees zachtaardig']] },
      { label: ['معاتبته أسامة', 'Verwijt aan Usāma'], sub: ['ص ٧٧', 'p. 77'], page: 77, children: [['أقتلته بعدما قال لا إله إلا الله؟!', 'heb je hem gedood nadat hij lā ilāha illā Allāh zei?']] }
    ]
  },
  points: [
    [75, 'كان خلق نبي الله ﷺ القرآن، كما قالت عائشة.', 'Het karakter van de Profeet van Allah ﷺ was de Koran, zoals ʿĀʾisha zei.'],
    [75, 'خدمه أنس عشر سنين كاملة فما عنفه ولا عاتبه، وفيه ترك العتاب على ما فات.', 'Anas diende hem tien volle jaren zonder dat hij hem afsnauwde of verweet; hierin: geen verwijt over wat voorbij is.'],
    [75, 'لم تصدر منه ﷺ كلمة نابية ولا فاحشة ولا بذيئة.', 'Nooit kwam er een kwetsend, onfatsoenlijk of obsceen woord van hem ﷺ.'],
    [75, 'كان يعاقب أحيانا ويعاتب أحيانا ويحمر وجهه أحيانا، كراهية لما يخالف شرع الله، وتأديبا لأصحابه والأمة.', 'Soms strafte of verweet hij, soms werd zijn gezicht rood, uit afkeer van wat ingaat tegen Allahs wet en als opvoeding voor zijn metgezellen en de umma.'],
    [76, 'قال سفيان بن عيينة: ما استقصى كريم قط، ألم تسمع إلى قول الله: ﴿عرف بعضه وأعرض عن بعض﴾.', 'Sufyān ibn ʿUyayna: een edel mens gaat nooit tot op de bodem; heb je Allahs woord niet gehoord: "hij maakte een deel bekend en liet een deel rusten"?'],
    [77, 'قال لعائشة: «عليك بالرفق، وإياك والعنف أو الفحش»، فرده على اليهود يستجاب ودعاؤهم عليه لا يستجاب.', 'Tegen ʿĀʾisha: "Wees zachtaardig en mijd hardheid en grofheid"; zijn antwoord aan de joden wordt verhoord, hun smeekbede tegen hem niet.'],
    [77, 'عتابه أسامة تعليم وغاية في الزجر حتى لا يجترئ أحد على قتل من نطق بالتوحيد، فانتفع أسامة وحلف ألا يقاتل مسلما.', 'Zijn verwijt aan Usāma was onderwijs en uiterste vermaning, zodat niemand het waagt iemand te doden die de tawḥīd uitspreekt; Usāma had er baat bij en zwoer nooit een moslim te bestrijden.']
  ],
  terms: [
    ['العتاب', 'al-ʿitāb', 75, 'اللوم على الخطأ تأديبا.', 'Verwijt over een fout, als opvoeding.'],
    ['السام', 'as-sām', 77, 'الموت.', 'De dood.'],
    ['ما استقصى كريم قط', 'mā staqṣā karīmun qaṭṭ', 76, 'الكريم لا يتتبع كل التفاصيل في العتاب.', 'Een edel mens gaat in een verwijt niet alle details na.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['مواقف من عتابه ﷺ', 'Situaties van zijn verwijt'],
      intro: ['كما في الصفحات ٧٥–٧٧.', 'Zoals op p. 75–77.'],
      nodes: [
        [75, 'التي أفشت الحديث', 'De vrouw die het gesprek verspreidde', 'عرف بعضه وأعرض عن بعض', 'een deel bekend gemaakt, een deel gelaten'],
        [76, 'بعض زوجاته', 'Sommige van zijn vrouwen', 'نزلت آية التحريم', 'het vers van at-Taḥrīm werd geopenbaard'],
        [77, 'عائشة', 'ʿĀʾisha', 'مهلا يا عائشة، عليك بالرفق', 'rustig, ʿĀʾisha, wees zachtaardig'],
        [77, 'أسامة', 'Usāma', 'أقتلته بعدما قال لا إله إلا الله؟!', 'heb je hem gedood nadat hij lā ilāha illā Allāh zei?']
      ]
    }
  ],
  sections: [
    [75, 'آية التحريم ٣', 'At-Taḥrīm 3', 'قال تعالى: ﴿وإذ أسر النبي إلى بعض أزواجه حديثا فلما نبأت به وأظهره الله عليه عرف بعضه وأعرض عن بعض﴾ [التحريم: 3]؛ فإعراضه عن إخبار زوجته ببعض ما أفشته من كريم خلقه.', 'Toen de Profeet een gesprek aan een van zijn vrouwen toevertrouwde en zij het doorvertelde, maakte hij een deel bekend en liet een deel rusten (66:3); dat hij niet alles liet weten, hoort bij zijn edele karakter.'],
    [76, 'موافقات عمر', 'De instemmingen van ʿUmar', 'قال عمر: وافقت ربي في ثلاث: مقام إبراهيم مصلى، والحجاب، وقوله لأزواج النبي ﷺ: عسى ربه إن طلقكن أن يبدله أزواجا خيرا منكن، فنزلت الآية [التحريم: 5].', 'ʿUmar zei dat zijn Heer met hem instemde in drie dingen: de plaats van Ibrāhīm als gebedsplaats, de afscherming, en zijn woorden tegen de vrouwen van de Profeet, waarna at-Taḥrīm 5 werd geopenbaard.']
  ],
  keycards: [
    ['onderscheid', 75, 'العتاب في هديه ﷺ', 'Verwijt in zijn leiding ﷺ', ['لم يكن يكثر العتاب', 'يعاتب حين يحتاج الأمر إلى عتاب', 'غرضه التأديب والتعليم'], ['hij verweet zelden', 'hij verweet wanneer het nodig was', 'met opvoeding en onderwijs als doel']]
  ],
  hadith: [
    { text: 'ألست تقرأ القرآن؟ … فإن خلق نبي الله ﷺ كان القرآن', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'جواب هشام بن عامر لما سألها عن خلقه ﷺ.', nlNote: 'Antwoord aan Hishām ibn ʿĀmir, die haar naar zijn karakter vroeg.', nl: 'Lees jij de Koran niet? … Het karakter van de Profeet van Allah ﷺ was de Koran', pages: [75] },
    { text: 'خدمت رسول الله ﷺ عشر سنين، والله ما قال لي: أفا قط، ولا قال لي لشيء: لم فعلت كذا؟ وهلا فعلت كذا؟', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', nl: 'Ik diende de Boodschapper van Allah ﷺ tien jaar; bij Allah, hij zei nooit "foei" tegen mij, en nooit over iets: waarom deed je dat? of: had je dat maar gedaan', pages: [75] },
    { text: 'وافقت الله في ثلاث، أو وافقني ربي في ثلاث', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أنس بن مالك عن عمر', narratorNl: 'Anas ibn Mālik, van ʿUmar', note: 'وفيه أنه بلغه معاتبة النبي ﷺ بعض نسائه، فنزلت آية التحريم.', nlNote: 'Daarin: hem bereikte het verwijt van de Profeet ﷺ aan sommige vrouwen, en het vers van at-Taḥrīm werd geopenbaard.', nl: 'Ik stemde in drie dingen overeen met Allah, of: mijn Heer stemde in drie dingen met mij in', pages: [76] },
    { text: 'مهلا يا عائشة! عليك بالرفق، وإياك والعنف أو الفحش … أولم تسمعي ما قلت؟ رددت عليهم، فيستجاب لي فيهم، ولا يستجاب لهم في', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'لما قال اليهود: السام عليك، فقال: «وعليكم»، فشتمتهم عائشة.', nlNote: 'Toen de joden zeiden: de dood over u; hij antwoordde "en over jullie", en ʿĀʾisha schold hen uit.', nl: 'Rustig, ʿĀʾisha! Wees zachtaardig en mijd hardheid en grofheid … Heb je niet gehoord wat ik zei? Ik heb hun antwoord gegeven; mijn smeekbede over hen wordt verhoord, en die van hen over mij niet', pages: [77] },
    { text: 'يا أسامة، أقتلته بعدما قال لا إله إلا الله؟!', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أسامة بن زيد', narratorNl: 'Usāma ibn Zayd', note: 'في سرية الحرقة من جهينة؛ فما زال يكررها حتى تمنى أسامة أنه لم يكن أسلم قبل ذلك اليوم.', nlNote: 'Bij de expeditie naar al-Ḥuraqa van Juhayna; hij bleef het herhalen tot Usāma wenste dat hij vóór die dag nog geen moslim was.', nl: 'Usāma, heb je hem gedood nadat hij zei: er is geen god dan Allah?!', pages: [77] }
  ],
  persons: [
    ['hisham-ibn-amir', 'text', [75], 'سأل عائشة عن خلقه ﷺ.', 'Vroeg ʿĀʾisha naar zijn karakter.'],
    ['aisha', 'text', [75, 77], 'وصفت خلقه بالقرآن، وعاتبها في الرد على اليهود.', 'Beschreef zijn karakter als de Koran; hij verweet haar om haar antwoord aan de joden.'],
    ['anas-ibn-malik', 'text', [75, 76], 'خدمه عشر سنين فما قال له أف.', 'Diende hem tien jaar en hoorde nooit "foei".'],
    ['sufyan-ibn-uyayna', 'text', [76], 'قال: ما استقصى كريم قط.', 'Zei: een edel mens gaat nooit tot op de bodem.'],
    ['umar-ibn-al-khattab', 'text', [76], 'وافق ربه في ثلاث.', 'Zijn Heer stemde met hem in in drie dingen.'],
    ['usama-ibn-zayd', 'text', [77], 'عاتبه النبي ﷺ على قتل من قال لا إله إلا الله.', 'De Profeet ﷺ verweet hem het doden van iemand die lā ilāha illā Allāh zei.']
  ],
  review: [
    ['كان خلقه ﷺ القرآن.', 'Zijn karakter was de Koran.'],
    ['لم يكن يكثر العتاب، ولم تصدر منه كلمة فاحشة.', 'Hij verweet zelden en sprak nooit een grof woord.'],
    ['عاتب زوجاته حين احتاج الأمر، وأمر عائشة بالرفق.', 'Hij verweet zijn vrouwen wanneer nodig en droeg ʿĀʾisha zachtaardigheid op.'],
    ['عاتب أسامة غاية العتاب صيانة لدم من نطق بالتوحيد.', 'Hij verweet Usāma zeer sterk, ter bescherming van het bloed van wie de tawḥīd uitspreekt.']
  ],
  quiz: [
    { type: 'mc', page: 75, q: ['كم سنة خدم أنس رسول الله ﷺ؟', 'Hoeveel jaar diende Anas de Boodschapper ﷺ?'], options: [['عشر سنين', 'خمس سنين', 'ثلاث سنين', 'عشرين سنة'], ['tien jaar', 'vijf jaar', 'drie jaar', 'twintig jaar']], answer: 0, explain: ['كما في حديث أنس.', 'Zoals in de hadith van Anas.'] },
    { type: 'tf', page: 77, q: ['أمر النبي ﷺ عائشة بالرفق لما شتمت اليهود.', 'De Profeet ﷺ droeg ʿĀʾisha zachtaardigheid op toen zij de joden uitschold.'], answer: 0, explain: ['«مهلا يا عائشة! عليك بالرفق».', '"Rustig, ʿĀʾisha! Wees zachtaardig".'] },
    { type: 'mc', page: 77, q: ['بم انتفع أسامة من عتاب النبي ﷺ؟', 'Wat hield Usāma over aan het verwijt van de Profeet ﷺ?'], options: [['حلف ألا يقاتل مسلما', 'ترك الجهاد كله', 'ترك المدينة', 'لم ينتفع بشيء'], ['hij zwoer nooit een moslim te bestrijden', 'hij stopte met elke strijd', 'hij verliet Medina', 'niets']], answer: 0, explain: ['كما في الإطار ص ٧٧.', 'Zoals in het kader op p. 77.'] }
  ],
  note: ['نشاط الكتاب في نهاية الدرس.', 'Oefening van het boek aan het einde van de les. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
