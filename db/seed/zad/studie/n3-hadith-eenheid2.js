// Hoofdstukkaart bij الحديث (٣), eenheid 2: hadith 7–11 (lessen 7–12, boek p. 37–58).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. Uitspraken
// zonder bron (Ibn Masʿūd en aḍ-Ḍaḥḥāk op p. 39, Abū Bakr en Ibn Masʿūd op p. 52, Ibn al-Qayyim
// op p. 44) staan niet in het hadith-tabblad.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-hadith',
  chapter: '7',
  unit: 2,
  source: {
    label: ['كتاب الحديث (٣)، سلسلة زاد العلمية', 'Al-Ḥadīth (3), Zad-reeks'],
    pages: '37–58',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ٧–١١', 'Hadith 7–11'],
  subtitle: ['خمسة أحاديث مجموعة في صفحة واحدة', 'Vijf hadith samen op één pagina'],
  summary: [
    'خمسة أحاديث: كتابة الحسنات والسيئات ومضاعفة الحسنات، والاستعفاف والاستغناء والصبر، والحياء من كلام النبوة الأولى، وقول الخير أو الصمت مع إكرام الجار والضيف، والتحذير من الكبر مع أن الله جميل يحب الجمال.',
    'Vijf hadith: het schrijven van goede en slechte daden en de verveelvoudiging van goede daden; ingetogenheid, onafhankelijkheid en geduld; schaamte als woord van de vroegere profetie; goed spreken of zwijgen, de buur en de gast eren; en de waarschuwing tegen hoogmoed, terwijl Allah mooi is en van schoonheid houdt.'
  ],
  map: {
    title: ['الأحاديث الخمسة في خريطة واحدة', 'De vijf hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٣)', 'Hadith (3)'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['كتب الحسنات والسيئات', 'Goede en slechte daden geschreven'], sub: ['الحديث ٧', 'hadith 7'], page: 37, children: [['الهم بالحسنة', 'een goede daad voornemen'], ['الهم بالسيئة', 'een slechte daad voornemen'], ['المضاعفة', 'verveelvoudiging']] },
      { label: ['من يستعفف يعفه الله', 'Wie ingetogenheid zoekt'], sub: ['الحديث ٨', 'hadith 8'], page: 41, children: [['الاستعفاف', 'ingetogenheid'], ['الاستغناء', 'onafhankelijkheid'], ['الصبر خير عطاء', 'geduld, de beste gave']] },
      { label: ['إذا لم تستح', 'Als je je niet schaamt'], sub: ['الحديث ٩', 'hadith 9'], page: 45, children: [['كلام النبوة الأولى', 'woord van de vroegere profetie'], ['الحياء من الإيمان', 'schaamte hoort bij geloof'], ['شرع من قبلنا', 'de wet van wie vóór ons waren']] },
      { label: ['فليقل خيرا أو ليصمت', 'Spreek goed of zwijg'], sub: ['الحديث ١٠', 'hadith 10'], page: 50, children: [['حفظ اللسان', 'de tong bewaken'], ['إكرام الجار', 'de buur eren'], ['إكرام الضيف', 'de gast eren']] },
      { label: ['مثقال ذرة من كبر', 'Een stofje hoogmoed'], sub: ['الحديث ١١', 'hadith 11'], page: 55, children: [['الله جميل يحب الجمال', 'Allah is mooi en houdt van schoonheid'], ['بطر الحق وغمط الناس', 'de waarheid afwijzen en mensen minachten'], ['التواضع', 'nederigheid']] }
    ]
  },
  points: [
    [37, 'من هم بحسنة فلم يعملها كتبت له حسنة كاملة، فإن عملها كتبت عشرا إلى سبعمائة ضعف إلى أضعاف كثيرة.', 'Wie een goede daad voorneemt en niet doet, krijgt één volle goede daad; doet hij haar, dan tien tot zevenhonderd tot vele malen.'],
    [38, 'من هم بسيئة فتركها خوفا من الله كتبت له حسنة كاملة، فإن عملها كتبت سيئة واحدة.', 'Wie een slechte daad voorneemt en uit vrees voor Allah nalaat, krijgt een volle goede daad; doet hij haar, dan één slechte.'],
    [39, 'تتفاضل الأعمال بالزمان والمكان ونوع العمل والعامل، وبالإخلاص والمتابعة.', 'Daden verschillen in waarde naar tijd, plaats, soort daad en dader, en naar oprechtheid en navolging.'],
    [43, 'سؤال الناس أموالهم مذموم، ولا يجوز إلا لضرورة وعجز عن الكسب.', 'Mensen om hun bezit vragen is afkeurenswaardig en mag alleen in nood en bij onvermogen om te verdienen.'],
    [43, 'الأخلاق الفاضلة تكتسب بالتعود والمجاهدة.', 'Edele eigenschappen worden verworven door gewenning en inspanning.'],
    [48, 'الحياء كله محمود، وما منع من واجب أو أوقع في محرم فهو خجل وضعف لا حياء.', 'Schaamte is geheel prijzenswaardig; wat je van een plicht weerhoudt of in het verbodene brengt, is verlegenheid en zwakte, geen schaamte.'],
    [52, 'الكلام ثلاثة: خير مطلوب، وشر ممنوع، ولغو الأولى السكوت عنه؛ وعند التردد فالصمت أسلم.', 'Spreken is van drie soorten: goed (gevraagd), kwaad (verboden), en loos (beter zwijgen); bij twijfel is zwijgen veiliger.'],
    [55, 'تفسير الذرة بالذرة الكيميائية خطأ؛ فهو معنى حادث لا تعرفه لغة القرآن والسنة.', 'Dharra uitleggen als het scheikundige atoom is een fout; dat is een moderne betekenis die de taal van Koran en sunna niet kent.']
  ],
  terms: [
    ['هم', 'hamma', 37, 'عزم على الفعل عزما مصمما، لا مجرد خاطر.', 'Vastberaden besluiten iets te doen, niet louter een gedachte.'],
    ['ضعف', 'ḍiʿf', 37, 'مثل.', 'Een gelijke (een veelvoud).'],
    ['يستعفف', 'yastaʿfif', 41, 'يكف عن السؤال وعن الحرام.', 'Zich onthouden van vragen en van het verbodene.'],
    ['يستغن', 'yastaghni', 41, 'يظهر الغنى بالاستغناء عما في أيدي الناس.', 'Rijkdom tonen door zich onafhankelijk te maken van wat mensen hebben.'],
    ['الصبر', 'aṣ-ṣabr', 42, 'حبس النفس عن كل ما يكرهه الله.', 'De ziel weerhouden van alles wat Allah afkeurt.'],
    ['الحياء', 'al-ḥayāʾ', 45, 'خلق يبعث على فعل الجميل وترك القبيح.', 'Een eigenschap die aanzet tot het goede en het laten van het lelijke.'],
    ['كلام النبوة الأولى', 'kalām an-nubuwwa al-ūlā', 45, 'من شرائع الأنبياء التي لم تنسخ لأن العقول توافقها.', 'Uit de wetten van de profeten die niet zijn opgeheven, omdat het verstand ermee instemt.'],
    ['مثقال ذرة', 'mithqāl dharra', 55, 'وزن نملة صغيرة.', 'Het gewicht van een kleine mier.'],
    ['الكبر', 'al-kibr', 55, 'بطر الحق وغمط الناس.', 'De waarheid afwijzen en mensen minachten.'],
    ['بطر الحق', 'baṭar al-ḥaqq', 55, 'رده وعدم قبوله.', 'De waarheid afwijzen en niet aanvaarden.'],
    ['غمط الناس', 'ghamṭ an-nās', 55, 'احتقارهم.', 'Mensen minachten.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الهم بالحسنة والسيئة', 'Een goede of slechte daad voornemen'],
      intro: ['كما في الحديث السابع.', 'Zoals in hadith 7.'],
      columns: [['هم ولم يعمل', 'Voorgenomen, niet gedaan'], ['هم وعمل', 'Voorgenomen en gedaan']],
      rows: [
        { label: ['الحسنة', 'Goede daad'], cells: [['حسنة كاملة', 'één volle goede daad'], ['عشر إلى سبعمائة ضعف إلى أضعاف كثيرة', 'tien tot zevenhonderd tot vele malen']] },
        { label: ['السيئة', 'Slechte daad'], cells: [['حسنة كاملة إن تركها لله', 'een volle goede daad als hij het voor Allah liet'], ['سيئة واحدة', 'één slechte daad']] }
      ],
      page: 38
    },
    {
      type: 'cards',
      title: ['أنواع الجيران', 'Soorten buren'],
      intro: ['وحقوق كل نوع.', 'En de rechten van elk.'],
      nodes: [
        [52, 'مسلم قريب', 'Moslim en verwant', 'ثلاثة حقوق: الجوار والقرابة والإسلام', 'drie rechten: buurschap, verwantschap, islam'],
        [52, 'مسلم غير قريب', 'Moslim, niet verwant', 'حقان: الإسلام والجوار', 'twee rechten: islam en buurschap'],
        [52, 'غير مسلم غير قريب', 'Niet-moslim, niet verwant', 'حق الجوار', 'het recht van buurschap']
      ]
    }
  ],
  sections: [
    [40, 'من هم بالشر وعمل له وعجز', 'Wie kwaad wilde en het niet kon', 'من هم بالسيئة وعمل لها ولم يقدر عليها كتب عليه وزر فاعلها، كالمقتول الحريص على قتل صاحبه.', 'Wie kwaad voornam, ernaar handelde maar het niet kon, krijgt de zonde van de dader, zoals de gedode die erop uit was zijn tegenstander te doden.'],
    [44, 'الصبر عند الصدمة الأولى', 'Geduld bij de eerste schok', 'مر النبي ﷺ بامرأة تبكي عند قبر فقال: اتقي الله واصبري؛ والصبر الحقيقي عند أول المصيبة.', 'De Profeet ﷺ kwam langs een vrouw die huilde bij een graf en zei: vrees Allah en heb geduld; echt geduld is bij het begin van de ramp.'],
    [48, 'شرع من قبلنا', 'De wet van wie vóór ons waren', 'ما صدقه شرعنا فحق مقبول، وما كذبه فباطل مردود، وما لم يصدق ولم يكذب فيتوقف فيه.', 'Wat onze sharīʿa bevestigt, is waar; wat zij ontkent, is vals; waarover zij zwijgt, daarover onthouden we ons van oordeel.'],
    [53, 'حق الضيف', 'Het recht van de gast', 'حق واجب يوم وليلة، وتمام مستحب إلى ثلاثة أيام، وما وراء ذلك صدقة؛ والضيف صاحب الحق هو المسافر المجتاز.', 'Een plicht van een dag en een nacht, een aanbevolen aanvulling tot drie dagen, en wat daarna komt is ṣadaqa; de gast met dit recht is de reiziger op doortocht.'],
    [56, 'الجمال', 'Schoonheid', 'الله جميل في ذاته وأفعاله وصفاته، ويحب التجمل في الظاهر والباطن، بحسب قدرة العبد.', 'Allah is mooi in wezen, daden en eigenschappen, en houdt ervan dat de mens zich mooi maakt, uiterlijk en innerlijk, naar zijn vermogen.']
  ],
  keycards: [
    ['onderscheid', 46, 'نوعا الحياء', 'Twee soorten schaamte', ['غريزي: لا يأتي إلا بخير', 'مكتسب: من معرفة الله وعظمته وقربه، وهو من أعلى خصال الإيمان'], ['aangeboren: brengt alleen goed', 'verworven: uit kennis van Allah, zijn grootheid en nabijheid; een van de hoogste eigenschappen van het geloof']],
    ['opsomming', 57, 'أنواع الكبر', 'Soorten hoogmoed', ['على الله، وهو أقبحها', 'على الرسول بترك اتباعه', 'على الخلق باحتقارهم والتعاظم عليهم'], ['tegen Allah, de lelijkste', 'tegen de Boodschapper, door hem niet te volgen', 'tegen de schepselen, door hen te minachten']],
    ['opsomming', 42, 'أنواع الصبر', 'Soorten geduld', ['على طاعة الله', 'عن معصية الله', 'على أقدار الله المؤلمة', 'عند النعم بالشكر وترك البطر'], ['in gehoorzaamheid aan Allah', 'tegenover zonden', 'bij pijnlijke beschikkingen', 'bij gunsten: dankbaar en niet overmoedig']]
  ],
  hadith: [
    { text: 'إن الله كتب الحسنات والسيئات، ثم بين ذلك، فمن هم بحسنة فلم يعملها كتبها الله له عنده حسنة كاملة … ومن هم بسيئة فلم يعملها كتبها الله له عنده حسنة كاملة، فإن هو هم بها فعملها كتبها الله له سيئة واحدة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'حديث قدسي.', nlNote: 'Een ḥadīth qudsī.', nl: 'Allah heeft de goede en slechte daden geschreven en daarna uitgelegd: wie een goede daad voorneemt en niet doet, die schrijft Allah bij Zich als een volle goede daad … en wie een slechte daad voorneemt en niet doet, die schrijft Allah bij Zich als een volle goede daad; neemt hij haar voor en doet hij haar, dan schrijft Allah één slechte daad', pages: [37] },
    { text: 'إذا التقى المسلمان بسيفيهما، فالقاتل والمقتول في النار … إنه كان حريصا على قتل صاحبه', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Als twee moslims elkaar met hun zwaarden treffen, zijn de doder en de gedode in het Vuur … want hij was erop uit zijn tegenstander te doden', pages: [40] },
    { text: 'ومن يستعفف يعفه الله، ومن يستغن يغنه الله، ومن يتصبر يصبره الله', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'حكيم بن حزام', narratorNl: 'Ḥakīm ibn Ḥizām', nl: 'Wie ingetogenheid zoekt, die maakt Allah ingetogen; wie zich onafhankelijk houdt, die maakt Allah rijk; en wie zich geduld oplegt, die geeft Allah geduld', pages: [41] },
    { text: 'وما أعطي أحد من عطاء خير وأوسع من الصبر', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'Niemand heeft een gave gekregen die beter en ruimer is dan geduld', pages: [41] },
    { text: 'ما يزال الرجل يسأل الناس حتى يأتي يوم القيامة ليس في وجهه مزعة لحم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Iemand blijft mensen om iets vragen tot hij op de Opstandingsdag komt zonder een stukje vlees in zijn gezicht', pages: [43] },
    { text: 'عجبا لأمر المؤمن إن أمره كله خير … إن أصابته سراء شكر فكان خيرا له، وإن أصابته ضراء صبر فكان خيرا له', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'صهيب', narratorNl: 'Ṣuhayb', nl: 'Wonderlijk is de zaak van de gelovige: alles is goed voor hem … treft hem iets goeds, dan is hij dankbaar en is het goed voor hem; treft hem iets kwaads, dan is hij geduldig en is het goed voor hem', pages: [44] },
    { text: 'إنما الصبر عند الصدمة الأولى', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أنس', narratorNl: 'Anas', nl: 'Geduld is er alleen bij de eerste schok', pages: [44] },
    { text: 'إن مما أدرك الناس من كلام النبوة الأولى: إذا لم تستح فاصنع ما شئت', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو مسعود الأنصاري', narratorNl: 'Abū Masʿūd al-Anṣārī', nl: 'Een van de woorden van de vroegere profetie die de mensen bereikten: als je je niet schaamt, doe dan wat je wilt', pages: [45] },
    { text: 'الحياء لا يأتي إلا بخير', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Schaamte brengt alleen goed', pages: [46] },
    { text: 'دعه فإن الحياء من الإيمان', takhrij: 'في الصحيحين', takhrijNl: 'in de twee Ṣaḥīḥ-verzamelingen', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', note: 'قاله لرجل يعاتب أخاه في الحياء.', nlNote: 'Gezegd tegen een man die zijn broer verweet dat hij zich zo schaamde.', nl: 'Laat hem, want schaamte hoort bij het geloof', pages: [47] },
    { text: 'إن الله حيي ستير، يحب الحياء والستر', takhrij: 'رواه أبو داود والنسائي وصححه الألباني', takhrijNl: 'Abū Dāwūd en an-Nasāʾī; al-Albānī noemde hem authentiek', nl: 'Allah is schaamtevol en bedekkend; Hij houdt van schaamte en bedekking', pages: [48] },
    { text: 'من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت، ومن كان يؤمن بالله واليوم الآخر فليكرم جاره، ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie in Allah en de Laatste Dag gelooft, laat hij goed spreken of zwijgen; wie in Allah en de Laatste Dag gelooft, laat hij zijn buur eren; en wie in Allah en de Laatste Dag gelooft, laat hij zijn gast eren', pages: [50] },
    { text: 'من كان يؤمن بالله واليوم الآخر فليكرم ضيفه جائزته … يوم وليلة، والضيافة ثلاثة أيام، فما كان وراء ذلك فهو صدقة عليه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو شريح الخزاعي', narratorNl: 'Abū Shurayḥ al-Khuzāʿī', nl: 'Wie in Allah en de Laatste Dag gelooft, laat hij zijn gast eren met zijn gave … een dag en een nacht; gastvrijheid is drie dagen, en wat daarna komt is ṣadaqa voor hem', pages: [53] },
    { text: 'لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر … إن الله جميل يحب الجمال، الكبر بطر الحق، وغمط الناس', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن مسعود', narratorNl: 'Ibn Masʿūd', nl: 'Wie een stofje hoogmoed in zijn hart heeft, gaat het Paradijs niet binnen … Allah is mooi en houdt van schoonheid; hoogmoed is de waarheid afwijzen en mensen minachten', pages: [55] },
    { text: 'ما نقصت صدقة من مال، وما زاد الله عبدا بعفو إلا عزا، وما تواضع أحد لله إلا رفعه الله', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Ṣadaqa vermindert het bezit niet; Allah geeft een dienaar die vergeeft alleen meer eer; en niemand is nederig om Allah of Allah verheft hem', pages: [57] }
  ],
  persons: [
    ['ibn-abbas', 'text', [37], 'راوي الحديث السابع.', 'Overleveraar van hadith 7.'],
    ['abdallah-ibn-amr', 'text', [38], 'روى حديث التسبيح والتحميد والتكبير دبر الصلوات.', 'Overleverde de hadith over tasbīḥ, taḥmīd en takbīr na de gebeden.'],
    ['ibn-masud', 'text', [39, 55], 'راوي الحديث الحادي عشر، ونقل عنه الكتاب قوله في الهم بالسيئة عند البيت.', 'Overleveraar van hadith 11; het boek citeert ook zijn woorden over het voornemen van kwaad bij het Huis.'],
    ['hakim-ibn-hizam', 'text', [41], 'راوي الحديث الثامن، ولد في الكعبة وعاش مائة وعشرين سنة.', 'Overleveraar van hadith 8; geboren in de Kaʿba en honderdtwintig jaar oud geworden.'],
    ['abu-said-al-khudri', 'text', [41], 'روى أن الصبر خير عطاء وأوسعه.', 'Overleverde dat geduld de beste en ruimste gave is.'],
    ['suhayb-ar-rumi', 'text', [44], 'روى حديث «عجبا لأمر المؤمن».', 'Overleverde de hadith "wonderlijk is de zaak van de gelovige".'],
    ['anas-ibn-malik', 'text', [44], 'روى قصة المرأة التي تبكي عند القبر.', 'Overleverde het verhaal van de vrouw die bij een graf huilde.'],
    ['ibn-al-qayyim', 'text', [44, 53], 'تكلم في الصبر عند الصدمة الأولى وفي مراتب حق الضيف.', 'Sprak over geduld bij de eerste schok en over de graden van het recht van de gast.'],
    ['abu-masud-al-ansari', 'text', [45], 'راوي الحديث التاسع، شهد العقبة الثانية.', 'Overleveraar van hadith 9; was bij de tweede ʿAqaba.'],
    ['ibn-umar', 'text', [47], 'روى «دعه فإن الحياء من الإيمان».', 'Overleverde "laat hem, want schaamte hoort bij het geloof".'],
    ['aisha', 'text', [48], 'أثنت على نساء الأنصار أن الحياء لم يمنعهن التفقه.', 'Prees de vrouwen van de Anṣār, die hun schaamte niet weerhield van het leren van de godsdienst.'],
    ['abu-hurayra', 'text', [50, 57], 'راوي الحديث العاشر.', 'Overleveraar van hadith 10.'],
    ['abu-shurayh-al-khuzai', 'text', [53], 'روى حديث جائزة الضيف.', 'Overleverde de hadith over de gave aan de gast.'],
    ['ibn-uthaymin', 'text', [53], 'قال: تجب ضيافة المسلم المجتاز به يوما وليلة.', 'Zei: gastvrijheid voor een moslim op doortocht is een dag en een nacht verplicht.'],
    ['abu-bakr-as-siddiq', 'text', [52], 'أخذ بلسانه وقال: هذا أوردني الموارد.', 'Greep zijn tong en zei: dit heeft mij in moeilijkheden gebracht.']
  ],
  review: [
    ['الهم بالحسنة حسنة، والهم بالسيئة المتروكة لله حسنة.', 'Een goede daad voornemen is een goede daad; een slechte daad die je voor Allah laat ook.'],
    ['من يستعفف يعفه الله، والصبر خير عطاء.', 'Wie ingetogenheid zoekt, maakt Allah ingetogen; geduld is de beste gave.'],
    ['الحياء من الإيمان، وما منع الواجب فليس حياء.', 'Schaamte hoort bij geloof; wat je van een plicht weerhoudt, is geen schaamte.'],
    ['قل خيرا أو اصمت، وأكرم جارك وضيفك.', 'Spreek goed of zwijg, en eer je buur en je gast.'],
    ['الكبر بطر الحق وغمط الناس، والله يحب الجمال والتواضع.', 'Hoogmoed is de waarheid afwijzen en mensen minachten; Allah houdt van schoonheid en nederigheid.']
  ],
  quiz: [
    { type: 'mc', page: 38, q: ['ماذا يكتب لمن هم بسيئة فتركها خوفا من الله؟', 'Wat wordt geschreven voor wie een slechte daad voornam en het uit vrees voor Allah liet?'], options: [['حسنة كاملة', 'سيئة واحدة', 'لا شيء', 'عشر حسنات'], ['een volle goede daad', 'één slechte daad', 'niets', 'tien goede daden']], answer: 0, explain: ['لأنه ترك المعصية لله.', 'Omdat hij de zonde voor Allah naliet.'] },
    { type: 'mc', page: 41, q: ['ما خير عطاء وأوسعه كما في الحديث؟', 'Wat is volgens de hadith de beste en ruimste gave?'], options: [['الصبر', 'المال', 'الولد', 'الجاه'], ['geduld', 'geld', 'kinderen', 'aanzien']], answer: 0, explain: ['رواه مسلم عن أبي سعيد.', 'Overgeleverd door Muslim van Abū Saʿīd.'] },
    { type: 'tf', page: 48, q: ['ترك الأمر بالمعروف حياء من الناس من الحياء المحمود.', 'Het goede niet gebieden uit schaamte voor mensen is prijzenswaardige schaamte.'], answer: 1, explain: ['هذا خجل وضعف لا حياء.', 'Dat is verlegenheid en zwakte, geen schaamte.'] },
    { type: 'mc', page: 52, q: ['كم حقا للجار المسلم القريب؟', 'Hoeveel rechten heeft een buur die moslim en verwant is?'], options: [['ثلاثة', 'واحد', 'اثنان', 'أربعة'], ['drie', 'één', 'twee', 'vier']], answer: 0, explain: ['الجوار والقرابة والإسلام.', 'Buurschap, verwantschap en islam.'] },
    { type: 'mc', page: 55, q: ['ما الكبر كما عرفه النبي ﷺ؟', 'Wat is hoogmoed volgens de definitie van de Profeet ﷺ?'], options: [['بطر الحق وغمط الناس', 'لبس الثوب الحسن', 'كثرة المال', 'حب الجمال'], ['de waarheid afwijzen en mensen minachten', 'mooie kleding dragen', 'veel geld hebben', 'van schoonheid houden']], answer: 0, explain: ['أما حب الجمال فإن الله جميل يحب الجمال.', 'Van schoonheid houden is goed: Allah is mooi en houdt van schoonheid.'] },
    { type: 'tf', page: 55, q: ['الذرة في الحديث هي الذرة بالمعنى الكيميائي الحديث.', 'De dharra in de hadith is het atoom in de moderne scheikundige betekenis.'], answer: 1, explain: ['هذا خطأ؛ الذرة النملة الصغيرة.', 'Dat is een fout; dharra is een kleine mier.'] }
  ],
  note: ['أنشطة الكتاب في نهاية كل حديث.', 'Oefeningen van het boek aan het eind van elke hadith. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
