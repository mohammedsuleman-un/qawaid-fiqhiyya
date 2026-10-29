// Hoofdstukkaart bij التربية الإسلامية (٣), eenheid 2: adab van het dagelijks leven (lessen 5–10,
// boek p. 18–39): slapen en opstaan, eten en drinken, het huis, lopen, de behoefte, niezen en geeuwen.
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tarbiyah',
  chapter: '5',
  unit: 2,
  source: {
    label: ['كتاب التربية الإسلامية (٣): الآداب الشرعية، سلسلة زاد العلمية', 'Islamitische opvoeding (3): de islamitische omgangsvormen, Zad-reeks'],
    pages: '18–39',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['آداب الحياة اليومية', 'Adab van het dagelijks leven'],
  subtitle: ['ستة دروس مجموعة في صفحة واحدة', 'Zes lessen samen op één pagina'],
  summary: [
    'للمسلم في يومه آداب شرعية: في النوم كالمبادرة بعد العشاء وإغلاق الأبواب وإطفاء النار والوضوء والنوم على الشق الأيمن والأذكار، وفي الاستيقاظ كالذكر والسواك وغسل اليدين؛ وفي الطعام والشراب كالتسمية والأكل باليمين وعدم عيب الطعام والحمد بعده والشرب على ثلاث؛ وفي البيت كالسلام والذكر عند الدخول والخروج وإزالة المنكرات؛ وفي المشي كالسكينة وترك الخيلاء وإفشاء السلام وغض البصر؛ وفي قضاء الحاجة كالستر وعدم استقبال القبلة والاستنجاء؛ وفي العطاس والتثاؤب كالحمد والتشميت وكظم التثاؤب.',
    'De moslim kent voor zijn dag islamitische omgangsvormen: bij het slapen vroeg na ʿishāʾ, deuren dicht, vuur uit, wuḍūʾ, op de rechterzij en de dhikr; bij het opstaan dhikr, siwāk en handen wassen. Bij eten en drinken: bismillāh, met rechts eten, geen kritiek op eten, Allah prijzen erna, in drie teugen drinken. In huis: groeten en Allah gedenken bij binnengaan en uitgaan, verkeerde dingen verwijderen. Bij het lopen: rust, geen hoogmoed, de groet verspreiden en de blik neerslaan. Bij de behoefte: bedekken, de qibla niet toekeren en zich reinigen. Bij niezen en geeuwen: Allah prijzen, de niezer antwoorden en geeuwen onderdrukken.'
  ],
  map: {
    title: ['آداب الحياة اليومية في خريطة واحدة', 'Het dagelijks leven in één kaart'],
    intro: ['ستة أبواب كما رتبها الكتاب.', 'Zes onderwerpen in de volgorde van het boek.'],
    root: [['آداب الحياة اليومية', 'Adab van het dagelijks leven'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['النوم والاستيقاظ', 'Slapen en opstaan'], sub: ['الدرس ٥', 'les 5'], page: 18, children: [['قبل النوم', 'voor het slapen'], ['بعد الاستيقاظ', 'na het opstaan']] },
      { label: ['الطعام والشراب', 'Eten en drinken'], sub: ['الدرس ٦', 'les 6'], page: 22, children: [['التسمية واليمين', 'bismillāh en rechts'], ['الشرب ثلاثا', 'in drie teugen']] },
      { label: ['البيت', 'Het huis'], sub: ['الدرس ٧', 'les 7'], page: 26, children: [['السلام والذكر', 'groet en dhikr'], ['إزالة المنكرات', 'verkeerde dingen weghalen']] },
      { label: ['المشي', 'Lopen'], sub: ['الدرس ٨', 'les 8'], page: 30, children: [['السكينة والقصد', 'rust en gematigdheid'], ['آداب النساء', 'adab voor vrouwen']] },
      { label: ['قضاء الحاجة', 'De behoefte doen'], sub: ['الدرس ٩', 'les 9'], page: 33, children: [['الستر والقبلة', 'bedekken en de qibla'], ['الاستنجاء', 'reinigen']] },
      { label: ['العطاس والتثاؤب', 'Niezen en geeuwen'], sub: ['الدرس ١٠', 'les 10'], page: 37, children: [['الحمد والتشميت', 'lof en antwoord'], ['كظم التثاؤب', 'geeuwen onderdrukken']] }
    ]
  },
  points: [
    [18, 'قال ابن القيم: كان نومه ﷺ أعدل النوم وأنفعه.', 'Ibn al-Qayyim zei: zijn slaap ﷺ was de meest evenwichtige en nuttigste slaap.'],
    [22, 'الأمر بالتسمية عند الأكل للاستحباب عند الجمهور، وقال بعضهم بالوجوب.', 'Het gebod van bismillāh bij het eten is volgens de meesten een aanbeveling; sommigen noemen het verplicht.'],
    [24, 'الصحيح أن النهي عن الشرب من في السقاء لا يشمل الزجاجات ونحوها، إلا إذا شرب منها جماعة فاستقذروا.', 'Het verbod om uit de opening van een waterzak te drinken geldt het meest waarschijnlijk niet voor flessen, tenzij meerdere mensen eruit drinken zodat het hen walgt.'],
    [24, 'الشرب قاعدا أفضل، ولا ينكر على من شرب قائما، لأنه ﷺ شرب من زمزم وهو قائم.', 'Zittend drinken is beter, maar wie staand drinkt wordt niet afgekeurd, want hij ﷺ dronk staand van Zamzam.'],
    [27, 'لا يثبت دليل خاص بتقديم الرجل اليمنى عند دخول البيت، والأمر فيه واسع.', 'Voor de rechtervoet eerst bij het binnengaan van het huis is geen specifiek bewijs; daarin is ruimte.'],
    [28, 'ليس كل تقاطع خطوط صليبا، وإنما المراد ما كان على هيئة الصليب حقيقة.', 'Niet elk kruisend patroon is een kruis; bedoeld is wat echt de vorm van een kruis heeft.'],
    [34, 'يجوز البول قائما إذا أمن انكشاف العورة والرشاش، والجلوس أفضل.', 'Staand urineren mag als men veilig is voor ontbloting en spatten; zittend is beter.'],
    [39, 'لا يشمت العاطس إذا لم يحمد الله، ويقال للكافر إذا عطس: يهديكم الله ويصلح بالكم.', 'Wie niest en Allah niet prijst, krijgt geen antwoord; tegen een niet-moslim die niest zegt men: moge Allah jullie leiden en jullie zaken herstellen.']
  ],
  terms: [
    ['يشوص فاه', 'yashūṣu fāhu', 20, 'يدلك أسنانه وينظفها.', 'Zijn tanden wrijven en reinigen.'],
    ['السقاء', 'as-siqāʾ', 24, 'وعاء من جلد للماء.', 'Een leren waterzak.'],
    ['لا مؤوي', 'lā muʾwī', 26, 'لا مسكن له.', 'Zonder woonplaats.'],
    ['هونا', 'hawnan', 30, 'بسكينة ووقار.', 'Rustig en waardig.'],
    ['الاحتفاء', 'al-iḥtifāʾ', 31, 'المشي حافيا.', 'Blootsvoets lopen.'],
    ['السباطة', 'as-subāṭa', 34, 'موضع يلقى فيه التراب والكناسة.', 'Een plek waar aarde en vuil worden gegooid.'],
    ['التشميت', 'at-tashmīt', 37, 'قول: يرحمك الله للعاطس إذا حمد الله.', '"Yarḥamuka llāh" zeggen tegen wie niest en Allah prijst.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['قبل النوم وبعد الاستيقاظ', 'Voor het slapen en na het opstaan'],
      intro: ['مما ذكره الكتاب.', 'Uit het boek.'],
      columns: [['قبل النوم', 'Voor het slapen'], ['بعد الاستيقاظ', 'Na het opstaan']],
      rows: [
        { label: ['الوقت والمكان', 'Tijd en plek'], cells: [['المبادرة بعد العشاء، وإغلاق الأبواب وإطفاء النار', 'vroeg na ʿishāʾ, deuren dicht en vuur uit'], ['مسح النوم عن الوجه', 'de slaap van het gezicht wrijven']] },
        { label: ['الطهارة', 'Reinheid'], cells: [['الوضوء، ويتأكد للجنب', 'wuḍūʾ, vooral voor de junub'], ['غسل اليدين ثلاثا والاستنثار ثلاثا', 'handen driemaal wassen en driemaal de neus uitsnuiten']] },
        { label: ['الذكر', 'Dhikr'], cells: [['المعوذات وآية الكرسي: باسمك ربي وضعت جنبي', 'de beschermingssoera’s, het Troonvers en "in Uw naam, mijn Heer, leg ik mij neer"'], ['الحمد لله الذي أحيانا بعد ما أماتنا', '"alle lof zij Allah die ons leven gaf na ons te laten sterven"']] },
        { label: ['السنن الأخرى', 'Andere sunna’s'], cells: [['نفض الفراش والنوم على الشق الأيمن', 'het bed uitslaan en op de rechterzij liggen'], ['السواك', 'siwāk']] }
      ],
      page: 18
    },
    {
      type: 'cards',
      title: ['من آداب الطعام', 'Adab van het eten'],
      intro: ['كما رتبها الكتاب.', 'Zoals het boek ze ordent.'],
      nodes: [
        [22, 'غسل اليدين', 'Handen wassen', '', ''],
        [22, 'التسمية', 'Bismillāh', 'فإن نسي قال: باسم الله أوله وآخره', 'vergeten: "in Allahs naam, aan het begin en het einde"'],
        [22, 'الأكل باليمين', 'Met rechts eten', '', ''],
        [23, 'عدم عيب الطعام', 'Geen kritiek op eten', '', ''],
        [23, 'الأكل بثلاث أصابع ولعقها', 'Met drie vingers eten en ze aflikken', '', ''],
        [23, 'الأكل مما يليه', 'Eten van wat voor je ligt', '', ''],
        [23, 'ترك الحار جدا والنفخ فيه', 'Geen zeer heet eten en er niet in blazen', '', ''],
        [23, 'عدم الاتكاء', 'Niet leunend eten', '', ''],
        [23, 'حمد الله بعده', 'Allah prijzen na het eten', '', '']
      ]
    }
  ],
  sections: [
    [26, 'شكر نعمة السكن', 'Dank voor een woning', 'كان ﷺ إذا أوى إلى فراشه قال: الحمد لله الذي أطعمنا وسقانا وكفانا وآوانا، فكم ممن لا كافي له ولا مؤوي؛ والمسكن يقي الحر والبرد ويحفظ المتاع ويستر الأهل.', 'Als hij ﷺ naar bed ging, zei hij: alle lof zij Allah die ons te eten en te drinken gaf, ons genoeg gaf en ons onderdak gaf; hoeveel mensen hebben niemand die genoeg geeft en geen onderdak. Een woning beschermt tegen hitte en kou, bewaart je spullen en schermt je gezin af.'],
    [28, 'الصور في البيوت', 'Afbeeldingen in huis', 'لا بأس بصور ما لا روح فيه كالشجر، وأما صور ذوات الأرواح فلا تعلق، ولا بأس بها إذا كانت ممتهنة.', 'Afbeeldingen van dingen zonder ziel, zoals bomen, zijn geen bezwaar; afbeeldingen van bezielde wezens hang je niet op, maar als ze gebruikt worden op de grond e.d. is dat geen bezwaar.'],
    [32, 'آداب النساء في المشي', 'Adab voor vrouwen op straat', 'تلبس المرأة الحجاب الشرعي، وتمشي في حافات الطريق بعيدا عن مزاحمة الرجال، ولا تخرج متعطرة.', 'De vrouw draagt de islamitische ḥijāb, loopt aan de kant van de weg, weg van gedrang met mannen, en gaat niet geparfumeerd naar buiten.'],
    [38, 'حكمة الحمد بعد العطاس', 'De wijsheid van lof na het niezen', 'قال ابن القيم: لما كان العاطس قد حصلت له بالعطاس نعمة ومنفعة بخروج الأبخرة المحتقنة، شرع له حمد الله على هذه النعمة مع بقاء أعضائه على التئامها بعد هذه الزلزلة.', 'Ibn al-Qayyim zei: omdat de niezer door het niezen een gunst en nut krijgt doordat opgehoopte dampen naar buiten gaan, is het voorgeschreven Allah daarvoor te prijzen, en dat zijn lichaam na deze schok heel blijft.']
  ],
  keycards: [
    ['opsomming', 33, 'آداب قضاء الحاجة', 'Adab bij het doen van de behoefte', ['ستر العورة', 'عدم استقبال القبلة ولا استدبارها في الفضاء', 'التسمية والاستعاذة قبل الدخول', 'الدخول باليسرى والخروج باليمنى', 'عدم مس الذكر باليمين', 'عدم ذكر الله حال قضاء الحاجة', 'عدم الدخول بما فيه اسم الله إلا مستورا', 'الاستنجاء باليسرى', 'قول: غفرانك عند الخروج'], ['de ʿawra bedekken', 'de qibla buiten niet toekeren of de rug toekeren', 'bismillāh en toevlucht zoeken voor het binnengaan', 'met links binnengaan en met rechts uitgaan', 'de penis niet met rechts vasthouden', 'Allah niet gedenken tijdens de behoefte', 'niet binnengaan met iets met Allahs naam, behalve bedekt', 'met links reinigen', '"ghufrānaka" bij het uitgaan']],
    ['opsomming', 37, 'ألفاظ العطاس', 'Woorden bij niezen', ['العاطس: الحمد لله، أو الحمد لله على كل حال، أو الحمد لله رب العالمين', 'السامع: يرحمك الله', 'العاطس: يهديكم الله ويصلح بالكم، أو يغفر الله لنا ولكم'], ['de niezer: al-ḥamdu lillāh (op elk moment / Heer der werelden)', 'wie het hoort: yarḥamuka llāh', 'de niezer: yahdīkumu llāh wa yuṣliḥ bālakum, of yaghfiru llāhu lanā wa lakum']]
  ],
  hadith: [
    { text: 'وكان يكره النوم قبلها والحديث بعدها', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو برزة الأسلمي', narratorNl: 'Abū Barza al-Aslamī', note: 'يعني صلاة العشاء.', nlNote: 'Bedoeld is het ʿishāʾ-gebed.', nl: 'Hij had een hekel aan slapen ervoor en praten erna', pages: [18] },
    { text: 'وأغلقوا الأبواب، واذكروا اسم الله، فإن الشيطان لا يفتح بابا مغلقا', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Sluit de deuren en noem Allahs naam, want de shayṭān opent geen gesloten deur', pages: [18] },
    { text: 'إن هذه النار إنما هي عدو لكم، فإذا نمتم فأطفئوها عنكم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو موسى', narratorNl: 'Abū Mūsā', nl: 'Dit vuur is een vijand van jullie; doof het dus als jullie gaan slapen', pages: [18] },
    { text: 'إذا أتيت مضجعك فتوضأ وضوءك للصلاة، ثم اضطجع على شقك الأيمن', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als je naar bed gaat, doe dan wuḍūʾ zoals voor het gebed en ga op je rechterzij liggen', pages: [18] },
    { text: 'باسمك ربي وضعت جنبي وبك أرفعه، إن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'In Uw naam, mijn Heer, leg ik mij neer en met U sta ik op. Als U mijn ziel houdt, wees haar dan barmhartig; als U haar terugstuurt, bescherm haar dan zoals U Uw vrome dienaren beschermt', pages: [19] },
    { text: 'الحمد لله الذي أحيانا بعد ما أماتنا، وإليه النشور', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Alle lof zij Allah die ons leven gaf nadat Hij ons liet sterven, en tot Hem is de opstanding', pages: [20] },
    { text: 'إذا استيقظ أحدكم من نومه فليغسل يده قبل أن يدخلها في وضوئه ثلاثا، فإن أحدكم لا يدري أين باتت يده', takhrij: 'متفق عليه، واللفظ لمسلم', takhrijNl: 'al-Bukhārī en Muslim, bewoording van Muslim', nl: 'Als een van jullie wakker wordt, laat hij zijn hand driemaal wassen voor hij haar in het wuḍūʾ-water steekt, want hij weet niet waar zijn hand ’s nachts was', pages: [20] },
    { text: 'لا يأكلن أحد منكم بشماله، ولا يشربن بها، فإن الشيطان يأكل بشماله ويشرب بها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Niemand van jullie eet of drinkt met zijn linkerhand, want de shayṭān eet en drinkt met zijn linkerhand', pages: [22] },
    { text: 'ما رأيت رسول الله ﷺ عاب طعاما قط، كان إذا اشتهاه أكله، وإن لم يشتهه سكت', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Ik heb de Boodschapper van Allah ﷺ nooit kritiek op eten zien hebben; had hij er zin in, dan at hij het, en anders zweeg hij', pages: [23] },
    { text: 'وكل مما يليك', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', note: 'لعمر بن أبي سلمة.', nlNote: 'Tegen ʿUmar ibn Abī Salama.', nl: 'En eet van wat voor je ligt', pages: [23] },
    { text: 'لا آكل وأنا متكئ', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Ik eet niet leunend', pages: [23] },
    { text: 'كان رسول الله ﷺ يتنفس في الشراب ثلاثا، ويقول: إنه أروى وأبرأ وأمرأ', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'De Boodschapper van Allah ﷺ ademde bij het drinken driemaal en zei: zo les je beter je dorst, het is gezonder en aangenamer', pages: [24] },
    { text: 'يا بني إذا دخلت على أهلك فسلم، يكن بركة عليك وعلى أهل بيتك', takhrij: 'رواه الترمذي وقال: حسن غريب', takhrijNl: 'at-Tirmidhī, die hem ḥasan gharīb noemde', narrator: 'أنس', narratorNl: 'Anas', nl: 'Mijn zoon, als je bij je gezin binnenkomt, groet dan; dat is een zegen voor jou en je huisgenoten', pages: [26] },
    { text: 'لا تدخل الملائكة بيتا فيه كلب ولا صورة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De engelen gaan geen huis binnen waarin een hond of een afbeelding is', pages: [27] },
    { text: 'لا تدخلون الجنة حتى تؤمنوا، ولا تؤمنوا حتى تحابوا، أولا أدلكم على شيء إذا فعلتموه تحاببتم؟ أفشوا السلام بينكم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Jullie gaan het Paradijs niet binnen tot jullie geloven, en jullie geloven niet tot jullie elkaar liefhebben. Zal ik jullie iets wijzen waardoor jullie elkaar liefhebben? Verspreid de groet onder elkaar', pages: [30] },
    { text: 'المسلم من سلم المسلمون من لسانه ويده', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De moslim is degene voor wiens tong en hand de moslims veilig zijn', pages: [31] },
    { text: 'إذا أتيتم الغائط فلا تستقبلوا القبلة ولا تستدبروها ببول ولا غائط، ولكن شرقوا أو غربوا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو أيوب', narratorNl: 'Abū Ayyūb', nl: 'Als jullie je behoefte doen, keer de qibla dan niet je voor- of achterkant toe bij urine of ontlasting, maar wend je naar het oosten of westen', pages: [33] },
    { text: 'اللهم إني أعوذ بك من الخبث والخبائث', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Allah, ik zoek bij U bescherming tegen de mannelijke en vrouwelijke duivels', pages: [33] },
    { text: 'إني كرهت أن أذكر الله عز وجل إلا على طهر', takhrij: 'رواه أبو داود وصححه الألباني', takhrijNl: 'Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'المهاجر بن قنفذ', narratorNl: 'al-Muhājir ibn Qunfudh', nl: 'Ik wilde Allah alleen in reinheid gedenken', pages: [34] },
    { text: 'إذا عطس أحدكم فليقل: الحمد لله، وليقل له أخوه أو صاحبه: يرحمك الله، فإذا قال له: يرحمك الله، فليقل: يهديكم الله ويصلح بالكم', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Als een van jullie niest, laat hij zeggen: al-ḥamdu lillāh; laat zijn broeder of metgezel zeggen: yarḥamuka llāh; en daarop zegt hij: yahdīkumu llāh wa yuṣliḥ bālakum', pages: [37] },
    { text: 'التثاؤب من الشيطان، فإذا تثاءب أحدكم فليرده ما استطاع، فإن أحدكم إذا قال: ها، ضحك الشيطان', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Geeuwen komt van de shayṭān; als een van jullie geeuwt, laat hij het zoveel mogelijk onderdrukken, want als hij "haa" zegt, lacht de shayṭān', pages: [39] }
  ],
  persons: [
    ['abu-barza-al-aslami', 'text', [18], 'روى كراهة النوم قبل العشاء والحديث بعدها.', 'Overleverde de afkeer van slapen voor ʿishāʾ en praten erna.'],
    ['bilal-ibn-rabah', 'text', [18], 'تولى إيقاظهم لصلاة الصبح في السفر.', 'Nam op zich hen op reis te wekken voor het ochtendgebed.'],
    ['abu-musa-al-ashari', 'text', [18, 38], 'روى الأمر بإطفاء النار عند النوم.', 'Overleverde de opdracht vuur te doven voor het slapen.'],
    ['ibn-al-qayyim', 'text', [18, 38], 'وصف نومه ﷺ، وبين حكمة الحمد بعد العطاس.', 'Beschreef zijn slaap ﷺ en legde de wijsheid van lof na het niezen uit.'],
    ['umar-ibn-al-khattab', 'text', [18], 'سأل عن نوم الجنب.', 'Vroeg naar het slapen van de junub.'],
    ['aisha', 'text', [19, 22, 27, 28, 34], 'روت أذكار النوم وسنن البيت.', 'Overleverde de slaapdhikr en de sunna’s in huis.'],
    ['abu-hurayra', 'text', [19, 23, 29, 37], 'أرشد إلى آية الكرسي عند النوم.', 'Kreeg het advies het Troonvers te lezen voor het slapen.'],
    ['tikhfa-al-ghifari', 'text', [19], 'رآه نائما على بطنه فنهاه.', 'De Profeet ﷺ zag hem op zijn buik slapen en verbood het.'],
    ['ibn-abbas', 'text', [20, 23, 24, 30, 35], 'روى سنن الاستيقاظ والشرب.', 'Overleverde sunna’s van het opstaan en het drinken.'],
    ['hudhayfa-ibn-al-yaman', 'text', [20, 34], 'روى السواك عند القيام من الليل.', 'Overleverde de siwāk bij het opstaan ’s nachts.'],
    ['ibn-umar', 'text', [20, 22, 24, 34], 'روى الأكل والشرب باليمين.', 'Overleverde eten en drinken met rechts.'],
    ['kab-ibn-malik', 'text', [23], 'روى الأكل بثلاث أصابع.', 'Overleverde eten met drie vingers.'],
    ['umar-ibn-abi-salama', 'text', [23], 'قيل له: وكل مما يليك.', 'Tegen hem werd gezegd: eet van wat voor je ligt.'],
    ['asma-bint-abi-bakr', 'text', [23], 'كانت تغطي الطعام الحار حتى يذهب فوره.', 'Dekte heet eten af tot de damp verdwenen was.'],
    ['al-arnaut', 'text', [23, 38], 'حسن حديث أسماء في الطعام الحار.', 'Noemde de hadith van Asmāʾ over heet eten ḥasan.'],
    ['jabir-ibn-abdallah', 'text', [23], 'روى أخذ اللقمة الساقطة.', 'Overleverde het oprapen van een gevallen hap.'],
    ['anas-ibn-malik', 'text', [24, 26, 33, 38], 'روى الشرب ثلاثا والسلام على الأهل.', 'Overleverde drinken in drie teugen en het groeten van je gezin.'],
    ['abu-qatada-al-ansari', 'text', [24], 'روى النهي عن التنفس في الإناء.', 'Overleverde het verbod om in de beker te ademen.'],
    ['fadala-ibn-ubayd', 'text', [31], 'روى الأمر بالاحتفاء أحيانا.', 'Overleverde de opdracht soms blootsvoets te lopen.'],
    ['abdallah-ibn-burayda', 'text', [31], 'روى قصة فضالة.', 'Overleverde het verhaal van Faḍāla.'],
    ['abu-usayd-al-ansari', 'text', [32], 'روى أمر النساء بحافات الطريق.', 'Overleverde de opdracht aan vrouwen aan de kant van de weg te lopen.'],
    ['salman-al-farisi', 'text', [33, 35], 'قال: علمنا نبينا كل شيء حتى الخراءة.', 'Zei: onze Profeet leerde ons alles, zelfs hoe je je behoefte doet.'],
    ['abu-ayyub-al-ansari', 'text', [33], 'روى النهي عن استقبال القبلة.', 'Overleverde het verbod de qibla toe te keren.'],
    ['ali-ibn-abi-talib', 'text', [33], 'روى التسمية عند دخول الخلاء.', 'Overleverde bismillāh bij het binnengaan van het toilet.'],
    ['hafsa-bint-umar', 'text', [34], 'رأى ابن عمر النبي ﷺ من بيتها.', 'Vanaf haar huis zag Ibn ʿUmar de Profeet ﷺ.'],
    ['al-muhajir-ibn-qunfudh', 'text', [34], 'سلم على النبي ﷺ وهو يبول.', 'Groette de Profeet ﷺ terwijl die urineerde.'],
    ['ahmad-ibn-hanbal', 'text', [35], 'قال: الخاتم إذا كان فيه اسم الله يجعله في باطن كفه.', 'Zei: een ring met Allahs naam draait men naar de binnenkant van de hand.'],
    ['ibn-daqiq-al-id', 'text', [39], 'قال: ظاهر الأمر وجوب التشميت.', 'Zei: het gebod wijst op de plicht de niezer te antwoorden.'],
    ['an-nawawi', 'text', [39], 'بين حكمة كظم التثاؤب.', 'Legde de wijsheid van het onderdrukken van geeuwen uit.']
  ],
  review: [
    ['للنوم آداب: المبادرة والوضوء والشق الأيمن والأذكار.', 'Slapen kent adab: vroeg gaan, wuḍūʾ, de rechterzij en de dhikr.'],
    ['من آداب الطعام التسمية والأكل باليمين وعدم عيبه والحمد بعده.', 'Bij het eten: bismillāh, met rechts, geen kritiek en lof erna.'],
    ['يسلم عند دخول البيت ويذكر الله، ويزيل المنكرات منه.', 'Bij het binnengaan groet men en gedenkt men Allah, en verkeerde dingen haalt men weg.'],
    ['يمشي المسلم بسكينة، ويفشي السلام، ويغض بصره ولا يؤذي.', 'De moslim loopt rustig, verspreidt de groet, slaat zijn blik neer en hindert niet.'],
    ['يحمد العاطس ويشمت، ويكظم المتثائب ويضع يده على فيه.', 'De niezer prijst Allah en krijgt antwoord; wie geeuwt onderdrukt het en houdt zijn hand voor zijn mond.']
  ],
  quiz: [
    { type: 'mc', page: 18, q: ['على أي شق يسن النوم؟', 'Op welke zij is het sunna te slapen?'], options: [['الأيمن', 'الأيسر', 'على البطن', 'على الظهر فقط'], ['de rechter', 'de linker', 'op de buik', 'alleen op de rug']], answer: 0, explain: ['ثم اضطجع على شقك الأيمن.', '"Ga dan op je rechterzij liggen."'] },
    { type: 'mc', page: 22, q: ['ماذا يقول من نسي التسمية في أول الطعام؟', 'Wat zegt wie bismillāh aan het begin van het eten vergat?'], options: [['باسم الله أوله وآخره', 'الحمد لله', 'أستغفر الله', 'لا شيء'], ['"in Allahs naam, aan het begin en het einde"', 'al-ḥamdu lillāh', 'astaghfiru llāh', 'niets']], answer: 0, explain: ['رواه أحمد وأبو داود.', 'Overgeleverd door Aḥmad en Abū Dāwūd.'] },
    { type: 'tf', page: 23, q: ['كان النبي ﷺ يعيب الطعام إذا لم يشتهه.', 'De Profeet ﷺ bekritiseerde eten als hij er geen zin in had.'], answer: 1, explain: ['إن لم يشتهه سكت.', 'Als hij er geen zin in had, zweeg hij.'] },
    { type: 'mc', page: 30, q: ['ما معنى ﴿يمشون على الأرض هونا﴾؟', 'Wat betekent "zij lopen bescheiden op aarde"?'], options: [['بسكينة ووقار', 'بسرعة', 'حفاة', 'في جماعة'], ['rustig en waardig', 'snel', 'blootsvoets', 'in groep']], answer: 0, explain: ['سورة الفرقان ٦٣.', 'Al-Furqān 63.'] },
    { type: 'mc', page: 34, q: ['لماذا لم يرد النبي ﷺ السلام على المهاجر بن قنفذ وهو يبول؟', 'Waarom groette de Profeet ﷺ al-Muhājir ibn Qunfudh niet terug terwijl hij urineerde?'], options: [['كره أن يذكر الله إلا على طهر', 'لأنه لم يسمعه', 'لأنه كان غاضبا', 'لأن السلام لا يرد'], ['hij wilde Allah alleen in reinheid gedenken', 'hij hoorde hem niet', 'hij was boos', 'een groet wordt niet beantwoord']], answer: 0, explain: ['رد بعد أن توضأ.', 'Hij antwoordde nadat hij wuḍūʾ had gedaan.'] },
    { type: 'tf', page: 38, q: ['يشمت العاطس بعد الثالثة.', 'Wie meer dan driemaal niest, krijgt nog steeds antwoord.'], answer: 1, explain: ['فإن زاد على ثلاث فهو مزكوم.', 'Na drie keer is hij verkouden.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٢١ و٢٥ و٢٩ و٣٢ و٣٦ و٣٩.', 'Oefeningen van het boek op p. 21, 25, 29, 32, 36 en 39. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
