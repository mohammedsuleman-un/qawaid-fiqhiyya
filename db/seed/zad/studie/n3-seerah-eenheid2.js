// Hoofdstukkaart bij السيرة النبوية (٣), eenheid 2: met verwanten, buren en bedienden
// (lessen 5–9, boek p. 23–34). Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals
// in het boek. De uitspraken van ʿAṭāʾ al-Khurāsānī en al-Ḥasan (p. 29–30) staan zonder bron en alleen in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-seerah',
  chapter: '5',
  unit: 2,
  source: {
    label: ['كتاب السيرة النبوية (٣)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (3), Zad-reeks'],
    pages: '23–34',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Seerah/page/n{p}/mode/1up'
  },
  title: ['تعامله ﷺ مع أقاربه وجيرانه وخدمه', 'Met verwanten, buren en bedienden'],
  subtitle: ['خمسة دروس مجموعة في صفحة واحدة', 'Vijf lessen samen op één pagina'],
  summary: [
    'كان ﷺ أبر الناس بأهله: يحب بناته ويرحب بفاطمة ويرشدها إلى الخير، ويعتني بأحفاده فيؤذن في آذانهم ويحنكهم ويعق عنهم ويسميهم ويحملهم ويؤدبهم؛ وكان خير جار يعظم حق الجار مسلما كان أو غير مسلم؛ وكان يعامل خدمه كالأب الرحيم، لا يغضب عليهم ولا يعنفهم.',
    'Hij ﷺ was de meest plichtsgetrouwe tegenover zijn familie: hij hield van zijn dochters, verwelkomde Fāṭima en leidde haar naar het goede, en zorgde voor zijn kleinkinderen: de adhān in het oor, taḥnīk, ʿaqīqa, een naam, hen dragen en opvoeden. Hij was de beste buur en achtte het recht van de buur groot, moslim of niet. En hij behandelde zijn bedienden als een barmhartige vader, zonder boosheid of hardheid.'
  ],
  map: {
    title: ['الوحدة الثانية في خريطة واحدة', 'Eenheid 2 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['أقاربه وجيرانه وخدمه', 'Verwanten, buren en bedienden'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['أولاده', 'Zijn kinderen'], sub: ['الدرس ٥', 'les 5'], page: 23, children: [['ثلاثة بنين وأربع بنات', 'drie zonen en vier dochters'], ['مرحبا بابنتي', '"welkom, mijn dochter"'], ['أنقذي نفسك من النار', 'red jezelf van het Vuur']] },
      { label: ['أحكام المولود', 'Regels rond de pasgeborene'], sub: ['الدرس ٦', 'les 6'], page: 26, children: [['الأذان', 'de adhān'], ['التحنيك', 'taḥnīk'], ['العقيقة والتسمية', 'ʿaqīqa en naam'], ['حلق الرأس', 'het hoofd scheren']] },
      { label: ['أحفاده', 'Zijn kleinkinderen'], sub: ['الدرس ٧', 'les 7'], page: 27, children: [['اصطحابهم إلى المسجد', 'meenemen naar de moskee'], ['حملهم في الصلاة', 'dragen in het gebed'], ['كخ كخ', '"kikh kikh"']] },
      { label: ['جيرانه', 'Zijn buren'], sub: ['الدرس ٨', 'les 8'], page: 29, children: [['تعظيم حق الجار', 'het recht van de buur'], ['تحريم الأذى', 'verbod op hinder'], ['الجار غير المسلم', 'de niet-moslimbuur']] },
      { label: ['خدمه', 'Zijn bedienden'], sub: ['الدرس ٩', 'les 9'], page: 32, children: [['إخوانكم خولكم', 'jullie bedienden zijn jullie broeders'], ['عيادتهم والدعاء لهم', 'ziekenbezoek en smeekbeden'], ['لم يقل أف قط', 'zei nooit "oef"']] }
    ]
  },
  points: [
    [23, 'أبناؤه ثلاثة: القاسم وعبد الله وإبراهيم، ماتوا صغارا؛ وبناته أربع من خديجة: زينب ورقية وأم كلثوم وفاطمة.', 'Zijn zonen waren drie: al-Qāsim, ʿAbd Allāh en Ibrāhīm, die jong stierven; zijn dochters vier, van Khadīja: Zaynab, Ruqayya, Umm Kulthūm en Fāṭima.'],
    [24, 'أرشد فاطمة وعليا إلى التسبيح والتحميد والتكبير عند النوم، وقال: هو خير لكما من خادم.', 'Hij wees Fāṭima en ʿAlī op tasbīḥ, taḥmīd en takbīr voor het slapen, en zei: dat is beter voor jullie dan een bediende.'],
    [24, 'قال لفاطمة: أنقذي نفسك من النار، فإني لا أملك لكم من الله شيئا؛ أي لا تتكلي على القرابة.', 'Hij zei tegen Fāṭima: red jezelf van het Vuur, want ik kan bij Allah niets voor jullie doen; vertrouw dus niet op verwantschap.'],
    [26, 'سر الأذان في أذن المولود أن يكون أول ما يسمع كلمات تكبير الرب والشهادة.', 'De wijsheid van de adhān in het oor van de pasgeborene: het eerste wat hij hoort zijn woorden over de grootheid van de Heer en de getuigenis.'],
    [27, 'غير اسم «حرب» إلى «حسن»؛ ومن حق المولود الاسم الحسن.', 'Hij veranderde de naam "Ḥarb" in "Ḥasan"; een goede naam is een recht van het kind.'],
    [28, 'يربى الصغير على ترك المحرمات وإن لم يكن مكلفا ليعتاد ذلك.', 'Een kind wordt opgevoed om het verbodene te laten, ook al is het nog niet verplicht, zodat het eraan went.'],
    [30, 'من أذى الجار رفع الصوت بما يزعجه ولو كان قرآنا، وإلقاء القمامة عند بابه.', 'Tot hinder voor de buur hoort hard geluid dat hem stoort, zelfs als het Koran is, en afval bij zijn deur gooien.'],
    [30, 'الوصية بالجار تشمل المسلم والكافر، وحد الجار يرجع إلى العرف.', 'Het advies over de buur geldt voor moslim en niet-moslim; wie buur is, bepaalt de gewoonte.']
  ],
  terms: [
    ['التحنيك', 'at-taḥnīk', 26, 'مضغ تمرة ونحوها ودلك حنك المولود بها.', 'Een dadel of iets dergelijks kauwen en daarmee het gehemelte van de pasgeborene wrijven.'],
    ['العقيقة', 'al-ʿaqīqa', 26, 'ذبيحة عن المولود: شاتان عن الغلام وشاة عن الجارية.', 'Een offerdier voor de pasgeborene: twee schapen voor een jongen, één voor een meisje.'],
    ['الورق', 'al-wariq', 27, 'الفضة.', 'Zilver.'],
    ['كخ كخ', 'kikh kikh', 28, 'كلمة يزجر بها الصبي عن تناول الشيء.', 'Een woord om een kind van iets af te houden.'],
    ['خولكم', 'khawalukum', 32, 'خدمكم؛ سموا بذلك لأنهم يتخولون الأمور.', 'Jullie bedienden; zo genoemd omdat zij zaken verzorgen.'],
    ['حد الجار', 'ḥadd al-jār', 30, 'ما عده العرف جارا.', 'Wat de gewoonte als buur beschouwt.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['أحكام المولود كما فعلها مع أحفاده', 'Regels rond de pasgeborene, zoals hij ze toepaste'],
      intro: ['بالترتيب الذي ذكره الكتاب.', 'In de volgorde van het boek.'],
      nodes: [
        [26, 'التأذين في أذنه', 'De adhān in zijn oor', 'أذن في أذن الحسن', 'hij riep de adhān in het oor van al-Ḥasan'],
        [26, 'التحنيك', 'Taḥnīk', 'والتمر أفضل', 'een dadel is het beste'],
        [26, 'العقيقة يوم السابع', 'ʿAqīqa op de zevende dag', 'كبشين عن الحسن وكبشين عن الحسين', 'twee rammen voor al-Ḥasan en twee voor al-Ḥusayn'],
        [27, 'التسمية', 'De naam', 'يوم الولادة أو يوم السابع', 'op de dag van geboorte of de zevende dag'],
        [27, 'حلق الرأس والتصدق بوزنه فضة', 'Het hoofd scheren en het gewicht in zilver geven', '', '']
      ]
    },
    {
      type: 'cards',
      title: ['من حقوق الجار', 'Rechten van de buur'],
      intro: ['كما ذكرها الكتاب.', 'Zoals het boek ze noemt.'],
      nodes: [
        [29, 'ابتداؤه بالسلام', 'Hem als eerste groeten', '', ''],
        [29, 'التغاضي عن زلاته', 'Zijn fouten door de vingers zien', '', ''],
        [29, 'غض البصر عن محارمه', 'De blik afwenden van zijn vrouwen', '', ''],
        [29, 'حفظ داره في غيبته', 'Zijn huis bewaken als hij weg is', '', ''],
        [29, 'التلطف بولده', 'Vriendelijk zijn voor zijn kind', '', ''],
        [31, 'إجابة دعوته', 'Zijn uitnodiging aannemen', '', '']
      ]
    }
  ],
  sections: [
    [24, 'الترحيب بالبنات', 'Dochters verwelkomen', 'كان يقول لفاطمة: مرحبا بابنتي، ويجلسها بجانبه؛ فأين هذا من الذين يظنون العبوس رجولة وهيبة؟', 'Hij zei tegen Fāṭima: welkom, mijn dochter, en liet haar naast zich zitten. Hoe anders dan wie denkt dat een nors gezicht mannelijkheid en gezag is.'],
    [29, 'جيرانه في مكة', 'Zijn buren in Mekka', 'كان بعض جيرانه في مكة يؤذونه ويطرحون عليه رحم الشاة وهو يصلي، فيقول: يا بني عبد مناف، أي جوار هذا!', 'Sommige buren in Mekka kwetsten hem en gooiden afval van een schaap op hem terwijl hij bad; hij zei: o Banū ʿAbd Manāf, wat voor buurschap is dit!'],
    [30, 'حسن الجوار', 'Goed buurschap', 'ليس حسن الجوار كف الأذى فقط، بل احتمال الأذى بالرفق والإحسان.', 'Goed buurschap is niet alleen geen kwaad doen, maar kwaad verdragen met zachtheid en goedheid.'],
    [33, 'عشر سنين بلا تعنيف', 'Tien jaar zonder verwijt', 'خدمه أنس عشر سنين فما قال له أف قط، ولا: لم صنعت هذا؟ ولا: ألا صنعت هذا؟', 'Anas diende hem tien jaar en hij zei nooit "oef", noch "waarom deed je dit?", noch "waarom deed je dat niet?"']
  ],
  keycards: [
    ['opsomming', 23, 'أولاده ﷺ', 'Zijn kinderen ﷺ', ['القاسم', 'عبد الله (والطيب والطاهر لقبان له)', 'إبراهيم', 'زينب', 'رقية', 'أم كلثوم', 'فاطمة'], ['al-Qāsim', 'ʿAbd Allāh (aṭ-Ṭayyib en aṭ-Ṭāhir zijn bijnamen van hem)', 'Ibrāhīm', 'Zaynab', 'Ruqayya', 'Umm Kulthūm', 'Fāṭima']],
    ['opsomming', 32, 'حقوق الخدم', 'Rechten van bedienden', ['يطعمون مما يأكل ويلبسون مما يلبس', 'لا يكلفون ما يغلبهم، فإن كلفوا أعينوا', 'عيادتهم ولو لم يكونوا مسلمين', 'الدعاء لهم وتفقد حاجاتهم'], ['zij eten wat hij eet en dragen wat hij draagt', 'geen werk dat te zwaar is, en anders helpen', 'ziekenbezoek, ook als zij geen moslim zijn', 'smeekbeden voor hen en vragen naar hun behoeften']]
  ],
  hadith: [
    { text: 'مرحبا بابنتي', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'لما أقبلت فاطمة تمشي.', nlNote: 'Toen Fāṭima aan kwam lopen.', nl: 'Welkom, mijn dochter', pages: [23] },
    { text: 'ألا أدلكما على ما هو خير لكما من خادم؟ إذا أويتما إلى فراشكما … فكبرا أربعا وثلاثين، وسبحا ثلاثا وثلاثين، واحمدا ثلاثا وثلاثين', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'علي', narratorNl: 'ʿAlī', nl: 'Zal ik jullie wijzen op iets wat beter voor jullie is dan een bediende? Als jullie naar bed gaan … zeg dan vierendertig keer Allāhu akbar, drieëndertig keer subḥān Allāh en drieëndertig keer al-ḥamdu lillāh', pages: [24] },
    { text: 'يا فاطمة أنقذي نفسك من النار، فإني لا أملك لكم من الله شيئا', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Fāṭima, red jezelf van het Vuur, want ik kan bij Allah niets voor jullie doen', pages: [24] },
    { text: 'رأيت رسول الله ﷺ أذن في أذن الحسن بن علي حين ولدته فاطمة بالصلاة', takhrij: 'رواه أبو داود والترمذي وصححه', takhrijNl: 'Abū Dāwūd en at-Tirmidhī, die hem authentiek noemde', narrator: 'أبو رافع', narratorNl: 'Abū Rāfiʿ', nl: 'Ik zag de Boodschapper van Allah ﷺ de gebedsoproep doen in het oor van al-Ḥasan ibn ʿAlī toen Fāṭima hem baarde', pages: [26] },
    { text: 'كان يؤتى بالصبيان فيبرك عليهم ويحنكهم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Kinderen werden bij hem gebracht; hij smeekte zegen over hen en deed taḥnīk', pages: [26] },
    { text: 'عق رسول الله ﷺ عن الحسن والحسين بكبشين كبشين', takhrij: 'رواه النسائي وصححه الألباني', takhrijNl: 'an-Nasāʾī; al-Albānī noemde hem authentiek', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'De Boodschapper van Allah ﷺ slachtte voor al-Ḥasan en al-Ḥusayn elk twee rammen als ʿaqīqa', pages: [26] },
    { text: 'إن ابني هذا سيد، ولعل الله أن يصلح به بين فئتين عظيمتين من المسلمين', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو بكرة', narratorNl: 'Abū Bakra', nl: 'Deze zoon van mij is een heer, en misschien brengt Allah door hem vrede tussen twee grote groepen moslims', pages: [27] },
    { text: 'كخ كخ … أما شعرت أنا لا نأكل الصدقة', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'لما أخذ الحسن تمرة من الصدقة.', nlNote: 'Toen al-Ḥasan een dadel van de ṣadaqa pakte.', nl: 'Kikh, kikh … Weet je niet dat wij geen ṣadaqa eten?', pages: [28] },
    { text: 'ما زال يوصيني جبريل بالجار حتى ظننت أنه سيورثه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Jibrīl bleef mij de buur aanbevelen tot ik dacht dat hij hem zou laten erven', pages: [29] },
    { text: 'إخوانكم خولكم، جعلهم الله تحت أيديكم، فمن كان أخوه تحت يده فليطعمه مما يأكل، وليلبسه مما يلبس، ولا تكلفوهم ما يغلبهم، فإن كلفتموهم فأعينوهم', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Jullie bedienden zijn jullie broeders; Allah heeft hen onder jullie gezag gesteld. Wie zijn broeder onder zich heeft, laat hem hem te eten geven van wat hij zelf eet en hem kleden met wat hij zelf draagt; belast hen niet met wat te zwaar is, en doen jullie dat toch, help hen dan', pages: [32] },
    { text: 'الحمد لله الذي أنقذه من النار', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أنس', narratorNl: 'Anas', note: 'بعد أن أسلم الغلام اليهودي الذي كان يخدمه وعاده في مرضه.', nlNote: 'Nadat de joodse jongen die hem diende moslim werd tijdens zijn ziekenbezoek.', nl: 'Alle lof zij Allah, die hem van het Vuur heeft gered', pages: [32] }
  ],
  persons: [
    ['fatima', 'text', [23, 24], 'أصغر بناته، رحب بها وأرشدها إلى الخير.', 'Zijn jongste dochter; hij verwelkomde haar en leidde haar naar het goede.'],
    ['zaynab-bint-rasul-allah', 'text', [23], 'من بناته ﷺ.', 'Een van zijn dochters ﷺ.'],
    ['ruqayya-bint-rasul-allah', 'text', [23], 'من بناته ﷺ.', 'Een van zijn dochters ﷺ.'],
    ['umm-kulthum-bint-rasul-allah', 'text', [23], 'من بناته ﷺ.', 'Een van zijn dochters ﷺ.'],
    ['ali-ibn-abi-talib', 'text', [24, 27], 'روى وصية التسبيح عند النوم، وسمى ابنه حربا فغيره النبي ﷺ.', 'Overleverde het advies over tasbīḥ voor het slapen; hij noemde zijn zoon Ḥarb en de Profeet ﷺ veranderde dat.'],
    ['an-nawawi', 'text', [24, 31], 'شرح: لا تتكلي على قرابتي.', 'Legde uit: vertrouw niet op mijn verwantschap.'],
    ['al-hasan-ibn-ali', 'text', [25, 27], 'أشبه الناس بالنبي ﷺ، قال فيه: إن ابني هذا سيد.', 'Leek het meest op de Profeet ﷺ, die over hem zei: deze zoon van mij is een heer.'],
    ['al-husayn-ibn-ali', 'text', [25, 26], 'من أحفاده ﷺ، عق عنه.', 'Een van zijn kleinkinderen ﷺ; hij slachtte de ʿaqīqa voor hem.'],
    ['umama-bint-abi-al-as', 'text', [27], 'حملها في الصلاة.', 'Hij droeg haar in het gebed.'],
    ['abu-rafi', 'text', [26, 27], 'روى الأذان في أذن الحسن وحلق رأسه.', 'Overleverde de adhān in het oor van al-Ḥasan en het scheren van zijn hoofd.'],
    ['ibn-al-qayyim', 'text', [26], 'بين سر التأذين في أذن المولود.', 'Legde de wijsheid van de adhān in het oor van de pasgeborene uit.'],
    ['ibn-abbas', 'text', [26], 'روى العقيقة عن الحسن والحسين.', 'Overleverde de ʿaqīqa voor al-Ḥasan en al-Ḥusayn.'],
    ['abu-bakra', 'text', [27], 'روى: إن ابني هذا سيد.', 'Overleverde: deze zoon van mij is een heer.'],
    ['abu-qatada-al-ansari', 'text', [27], 'روى حمله أمامة في الصلاة.', 'Overleverde dat hij Umāma in het gebed droeg.'],
    ['abu-hurayra', 'text', [28], 'روى قصة تمرة الصدقة.', 'Overleverde het verhaal van de dadel van de ṣadaqa.'],
    ['ibn-ishaq', 'text', [29], 'روى أذى جيرانه له في مكة.', 'Overleverde hoe zijn buren hem in Mekka kwetsten.'],
    ['ata-al-khurasani', 'text', [29], 'سئل عن حق الجار فعدد حقوقه.', 'Werd gevraagd naar het recht van de buur en somde de rechten op.'],
    ['abdallah-ibn-amr', 'text', [30], 'أمر بالإهداء لجاره اليهودي.', 'Gaf opdracht zijn joodse buur een geschenk te sturen.'],
    ['mujahid-ibn-jabr', 'text', [30], 'روى قصة عبد الله بن عمرو وجاره اليهودي.', 'Overleverde het verhaal van ʿAbd Allāh ibn ʿAmr en zijn joodse buur.'],
    ['ibn-hajar-al-asqalani', 'text', [30], 'قال: اسم الجار يشمل المسلم والكافر.', 'Zei: het woord buur omvat moslim en niet-moslim.'],
    ['ibn-qudama', 'text', [30], 'قال: الجار هو المقارب، ويرجع في ذلك إلى العرف.', 'Zei: de buur is wie dichtbij woont; daarvoor geldt de gewoonte.'],
    ['anas-ibn-malik', 'text', [31, 32, 33], 'خدم النبي ﷺ عشر سنين، ودعا له بكثرة المال والولد.', 'Diende de Profeet ﷺ tien jaar; hij smeekte voor hem om veel bezit en kinderen.'],
    ['umm-sulaym', 'text', [32], 'طلبت من النبي ﷺ أن يدعو لأنس.', 'Vroeg de Profeet ﷺ om een smeekbede voor Anas.'],
    ['abu-talha-al-ansari', 'text', [33], 'أتى بأنس ليخدم النبي ﷺ.', 'Bracht Anas om de Profeet ﷺ te dienen.']
  ],
  review: [
    ['كان يحب بناته ويرشدهن إلى الخير والآخرة.', 'Hij hield van zijn dochters en leidde hen naar het goede en het hiernamaals.'],
    ['من أحكام المولود: الأذان والتحنيك والعقيقة والتسمية وحلق الرأس.', 'Regels rond de pasgeborene: adhān, taḥnīk, ʿaqīqa, naamgeving en het hoofd scheren.'],
    ['يربى الصغار على ترك المحرمات من الصغر.', 'Kinderen worden van jongs af opgevoed om het verbodene te laten.'],
    ['حق الجار عظيم، ويشمل المسلم وغيره، ويحرم أذاه.', 'Het recht van de buur is groot, geldt voor moslim en niet-moslim, en hinder is verboden.'],
    ['الخدم إخوان يطعمون مما نأكل ولا يعنفون.', 'Bedienden zijn broeders: zij eten wat wij eten en worden niet hard behandeld.']
  ],
  quiz: [
    { type: 'mc', page: 23, q: ['من أم بناته ﷺ الأربع؟', 'Wie was de moeder van zijn vier dochters ﷺ?'], options: [['خديجة', 'عائشة', 'مارية', 'سودة'], ['Khadīja', 'ʿĀʾisha', 'Māriya', 'Sawda']], answer: 0, explain: ['كلهن من خديجة.', 'Allen van Khadīja.'] },
    { type: 'mc', page: 26, q: ['ما التحنيك؟', 'Wat is taḥnīk?'], options: [['دلك حنك المولود بتمرة ممضوغة', 'حلق رأس المولود', 'الأذان في أذنه', 'ذبح شاة عنه'], ['het gehemelte van de pasgeborene wrijven met een gekauwde dadel', 'het hoofd van de pasgeborene scheren', 'de adhān in zijn oor', 'een schaap voor hem slachten']], answer: 0, explain: ['والتمر أفضل.', 'Een dadel is het beste.'] },
    { type: 'mc', page: 26, q: ['كم يذبح عن الغلام في العقيقة؟', 'Hoeveel dieren worden voor een jongen geslacht bij de ʿaqīqa?'], options: [['شاتان', 'شاة', 'ثلاث', 'بقرة'], ['twee schapen', 'één schaap', 'drie', 'een koe']], answer: 0, explain: ['وعن الجارية شاة.', 'Voor een meisje één schaap.'] },
    { type: 'tf', page: 30, q: ['الوصية بالجار خاصة بالجار المسلم.', 'Het advies over de buur geldt alleen voor de moslimbuur.'], answer: 1, explain: ['تشمل المسلم والكافر، وأهدى ابن عمرو لجاره اليهودي.', 'Het geldt voor moslim en niet-moslim; Ibn ʿAmr stuurde zijn joodse buur een geschenk.'] },
    { type: 'mc', page: 30, q: ['إلى أي شيء يرجع حد الجار؟', 'Wat bepaalt wie buur is?'], options: [['العرف', 'أربعون دارا', 'الحي فقط', 'القرابة'], ['de gewoonte', 'veertig huizen', 'alleen de wijk', 'verwantschap']], answer: 0, explain: ['قاله ابن قدامة.', 'Volgens Ibn Qudāma.'] },
    { type: 'tf', page: 33, q: ['قال النبي ﷺ لأنس في خدمته: لم صنعت هذا؟', 'De Profeet ﷺ zei tegen Anas tijdens zijn dienst: waarom deed je dit?'], answer: 1, explain: ['ما قال له أف قط ولا: لم صنعت هذا؟', 'Hij zei nooit "oef" en nooit "waarom deed je dit?".'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٢٨ و٣١ و٣٤.', 'Oefeningen van het boek op p. 28, 31 en 34. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
