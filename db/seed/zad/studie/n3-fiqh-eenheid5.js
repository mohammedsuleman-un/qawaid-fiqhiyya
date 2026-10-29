// Hoofdstukkaart bij الفقه (٣), eenheid 5: het offerdier en de ʿaqīqa (lessen 32–36, boek p. 93–102).
// Opgesteld uit de leesnotities van het boek; regels, hadith en takhrij zoals in het boek. De uitspraak
// van "al-Ḥasan" over ʿaqīqa voor jezelf (p. 101) staat zonder volledige naam en is weggelaten.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-fiqh',
  chapter: '32',
  unit: 5,
  source: {
    label: ['كتاب الفقه (٣)، سلسلة زاد العلمية', 'Al-Fiqh (3), Zad-reeks'],
    pages: '93–102',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Fiqh/page/n{p}/mode/1up'
  },
  title: ['الأضحية والعقيقة', 'Het offerdier en de ʿaqīqa'],
  subtitle: ['خمسة دروس مجموعة في صفحة واحدة', 'Vijf lessen samen op één pagina'],
  summary: [
    'الأضحية ما يذبح يوم العيد تقربا إلى الله من الإبل والبقر والغنم، وهي سنة مؤكدة عند الجمهور. وشروطها أن تكون من بهيمة الأنعام، وأن تبلغ السن المعتبرة، وأن تسلم من العيوب المانعة. وللتذكية أربعة شروط، ووقت الذبح من بعد صلاة العيد إلى غروب شمس آخر أيام التشريق. ويسن الأكل منها والإهداء والصدقة. والعقيقة ما يذبح شكرا لله عن المولود: شاتان عن الغلام وشاة عن الجارية، يوم السابع، ولا اشتراك فيها.',
    'Het offerdier (uḍḥiya) wordt op de feestdag geslacht om nader tot Allah te komen: een kameel, rund, schaap of geit. Volgens de meesten is het een sterk aanbevolen sunna. Het dier moet tot het vee behoren, de vereiste leeftijd hebben en vrij zijn van gebreken die het ongeldig maken. Het slachten kent vier voorwaarden; de tijd loopt van na het ʿīd-gebed tot zonsondergang op de laatste dag van tashrīq. Men eet ervan, geeft cadeau en geeft ṣadaqa. De ʿaqīqa wordt uit dank voor een kind geslacht: twee schapen voor een jongen en één voor een meisje, op de zevende dag, zonder delen.'
  ],
  map: {
    title: ['الأضحية والعقيقة في خريطة واحدة', 'Offerdier en ʿaqīqa in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الأضحية والعقيقة', 'Offerdier en ʿaqīqa'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['الأضحية', 'Het offerdier'], sub: ['الدرس ٣٢', 'les 32'], page: 95, children: [['الحكم', 'oordeel'], ['الاشتراك', 'delen'], ['الشروط والعيوب المانعة', 'voorwaarden en ongeldige gebreken']] },
      { label: ['العيوب المكروهة والتذكية', 'Afgeraden gebreken en slachten'], sub: ['الدرس ٣٣', 'les 33'], page: 97, children: [['ما يجزئ مع الكراهة', 'geldig maar afgeraden'], ['شروط التذكية', 'voorwaarden van slachten'], ['وقت الذبح', 'tijd van slachten']] },
      { label: ['ما يسن بالأضحية', 'Wat sunna is met het offer'], sub: ['الدرس ٣٤', 'les 34'], page: 99, children: [['الأكل والإهداء والصدقة', 'eten, schenken en ṣadaqa'], ['الادخار', 'bewaren']] },
      { label: ['العقيقة', 'De ʿaqīqa'], sub: ['الدرسان ٣٥–٣٦', 'les 35–36'], page: 100, children: [['الحكم والمقدار', 'oordeel en hoeveelheid'], ['الوقت', 'tijd'], ['مسائل', 'kwesties']] }
    ]
  },
  points: [
    [95, 'الأضحية سنة مؤكدة عند الجمهور، لأن بعض الصحابة كأبي بكر وعمر تركوها أحيانا خشية أن يظن وجوبها؛ وقال الإمام أحمد: الأضحية أفضل من الصدقة بقيمتها.', 'Volgens de meesten is het offer een sterk aanbevolen sunna, omdat sommige metgezellen zoals Abū Bakr en ʿUmar het soms lieten uit vrees dat men het verplicht zou achten. Imam Aḥmad zei: het offer is beter dan de waarde ervan als ṣadaqa geven.'],
    [95, 'من أراد أن يضحي أمسك عن شعره وأظفاره وبشرته إذا دخلت العشر حتى يضحي.', 'Wie wil offeren, neemt vanaf het begin van de tien dagen niets van zijn haar, nagels of huid af tot hij geofferd heeft.'],
    [95, 'تجزئ الشاة عن الرجل وأهل بيته، والبدنة والبقرة عن سبعة؛ والاشتراك في الثواب أوسع من الاشتراك في الملك.', 'Eén schaap volstaat voor een man en zijn huisgezin, een kameel of rund voor zeven; delen in de beloning is ruimer dan delen in het eigendom.'],
    [96, 'السن المعتبرة: خمس سنين في الإبل، وسنتان في البقر، وسنة في المعز، وستة أشهر في الضأن.', 'De vereiste leeftijd: vijf jaar voor kamelen, twee voor runderen, één voor geiten en zes maanden voor schapen.'],
    [97, 'يسن أن يذبح المضحي بنفسه، فإن لم يحسن حضر، ولا يعطى الجزار أجرته منها.', 'Het is sunna zelf te slachten; wie dat niet goed kan, is erbij. De slager krijgt zijn loon niet uit het offer.'],
    [99, 'الذبح لغير الله محرم وصاحبه ملعون.', 'Slachten voor een ander dan Allah is verboden en wie dat doet is vervloekt.'],
    [101, 'لا اشتراك في العقيقة، لأنها فداء نفس؛ وتقوم الأم مقام الأب، ويجوز للجد ولو من الأم.', 'Bij de ʿaqīqa wordt niet gedeeld, want zij is een losgeld voor een ziel; de moeder kan de plaats van de vader innemen, en ook de grootvader, zelfs van moederskant.'],
    [101, 'الشاة في العقيقة أفضل من البدنة والبقرة لأنها الوارد في السنة.', 'Bij de ʿaqīqa is een schaap beter dan een kameel of rund, want zo staat het in de sunna.']
  ],
  terms: [
    ['الأضحية', 'al-uḍḥiya', 95, 'ما يذبح يوم العيد تقربا إلى الله من بهيمة الأنعام؛ سميت بذلك لأنها تذبح ضحى.', 'Wat op de feestdag van het vee geslacht wordt om nader tot Allah te komen; zo genoemd omdat het in de voormiddag (ḍuḥā) gebeurt.'],
    ['المسنة', 'al-musinna', 96, 'ما بلغ السن المعتبرة من الإبل والبقر والمعز.', 'Een kameel, rund of geit die de vereiste leeftijd heeft.'],
    ['الجذعة', 'al-jadhaʿa', 96, 'ما له ستة أشهر من الضأن.', 'Een schaap van zes maanden.'],
    ['العجفاء', 'al-ʿajfāʾ', 96, 'الهزيلة التي لا مخ في عظامها.', 'Een dier zo mager dat er geen merg in de botten zit.'],
    ['العضباء', 'al-ʿaḍbāʾ', 97, 'ما ذهب نصف أذنها أو قرنها فأكثر.', 'Een dier dat de helft of meer van een oor of hoorn mist.'],
    ['التذكية', 'at-tadhkiya', 98, 'الذبح الشرعي.', 'Het slachten volgens de sharīʿa.'],
    ['العقيقة', 'al-ʿaqīqa', 100, 'لغة من العق وهو القطع؛ وشرعا: ما يذبح شكرا لله على المولود.', 'Taal: van afsnijden; sharīʿa: wat uit dank aan Allah voor een kind geslacht wordt.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['العيوب في الأضحية', 'Gebreken bij het offerdier'],
      intro: ['ما يمنع الإجزاء وما يجزئ مع الكراهة.', 'Wat ongeldig maakt en wat geldig maar afgeraden is.'],
      columns: [['لا تجزئ', 'Ongeldig'], ['تجزئ مع الكراهة', 'Geldig maar afgeraden']],
      rows: [
        { label: ['العين', 'Oog'], cells: [['العوراء البين عورها والعمياء', 'duidelijk eenoog of blind'], ['البخقاء: ذهب بصرها والعين باقية', 'zicht weg, oog intact']] },
        { label: ['الجسم', 'Lichaam'], cells: [['العجفاء والعرجاء البين ضلعها', 'zeer mager of duidelijk kreupel'], ['ذهاب بعض الأسنان', 'enkele tanden kwijt']] },
        { label: ['الأذن والقرن', 'Oor en hoorn'], cells: [['—', '—'], ['العضباء والمقابلة والمدابرة والشرقاء والخرقاء', 'afgesneden, gespleten of doorboord oor; half of meer van de hoorn weg']] },
        { label: ['الصحة', 'Gezondheid'], cells: [['المريضة البين مرضها', 'duidelijk ziek'], ['—', '—']] }
      ],
      page: 96
    },
    {
      type: 'compare',
      title: ['الأضحية والعقيقة', 'Offerdier en ʿaqīqa'],
      intro: ['أوجه الاتفاق والافتراق كما يظهر من الكتاب.', 'Overeenkomsten en verschillen volgens het boek.'],
      columns: [['الأضحية', 'Offerdier'], ['العقيقة', 'ʿAqīqa']],
      rows: [
        { label: ['السبب', 'Aanleiding'], cells: [['عيد الأضحى', 'het offerfeest'], ['المولود', 'een geboren kind']] },
        { label: ['الوقت', 'Tijd'], cells: [['بعد صلاة العيد إلى آخر أيام التشريق', 'na het ʿīd-gebed tot de laatste dag van tashrīq'], ['يوم السابع، ثم ١٤، ثم ٢١', 'de zevende dag, anders de 14e of 21e']] },
        { label: ['الاشتراك', 'Delen'], cells: [['في البدنة والبقرة عن سبعة', 'kameel of rund voor zeven'], ['لا اشتراك', 'niet']] },
        { label: ['الشروط', 'Voorwaarden'], cells: [['بهيمة الأنعام والسن والسلامة', 'vee, leeftijd, zonder gebreken'], ['مثل الأضحية', 'als bij het offerdier']] }
      ],
      page: 100
    }
  ],
  sections: [
    [95, 'أضحية النبي ﷺ', 'Het offer van de Profeet ﷺ', 'ضحى النبي ﷺ بكبشين أملحين أقرنين، ذبحهما بيده، وسمى وكبر، ووضع رجله على صفاحهما.', 'De Profeet ﷺ offerde twee wit-zwarte gehoornde rammen; hij slachtte ze met eigen hand, sprak de naam van Allah en de takbīr uit, en zette zijn voet op hun hals.'],
    [98, 'وقت الذبح', 'De tijd van slachten', 'من ذبح قبل صلاة العيد أو بعد غروب شمس الثالث عشر فليست أضحية، وإنما هو لحم قدمه لأهله، ويذبح مكانها أخرى.', 'Wie vóór het ʿīd-gebed slacht of na zonsondergang op de dertiende, heeft geen geldig offer; het is vlees voor zijn gezin, en hij slacht een ander dier.'],
    [99, 'ذبيحة المرأة والصبي', 'Slachten door een vrouw of kind', 'أجمع أهل العلم على إباحة ذبيحة المرأة والصبي؛ وذبحت جارية لكعب بن مالك شاة بحجر، فأمر النبي ﷺ بأكلها.', 'De geleerden zijn het erover eens dat wat een vrouw of kind slacht toegestaan is. Een slavin van Kaʿb ibn Mālik slachtte een stervend schaap met een steen, en de Profeet ﷺ liet het eten.'],
    [101, 'وقت العقيقة', 'De tijd van de ʿaqīqa', 'يسن ذبحها يوم السابع، فإن لم يتيسر فالرابع عشر، ثم الحادي والعشرين، ثم في أي يوم؛ ومن ولد يوم السبت ذبح عنه يوم الجمعة التي تليه.', 'Sunna is de zevende dag; anders de veertiende, dan de eenentwintigste, dan elke dag. Is het kind op zaterdag geboren, dan slacht men op de vrijdag daarna.']
  ],
  keycards: [
    ['voorwaarde', 96, 'شروط الأضحية', 'Voorwaarden van het offerdier', ['أن تكون من بهيمة الأنعام', 'أن تبلغ السن المعتبرة', 'أن تسلم من العيوب المانعة'], ['van het vee (kameel, rund, kleinvee)', 'de vereiste leeftijd', 'vrij van gebreken die ongeldig maken']],
    ['voorwaarde', 98, 'شروط التذكية', 'Voorwaarden van het slachten', ['أهلية الذابح: عاقل مسلم أو كتابي في غير الأضحية', 'الآلة: كل محدد إلا السن والظفر', 'قطع الودجين', 'التسمية'], ['bekwame slachter: verstandig en moslim (buiten het offer ook een kitābī)', 'werktuig: alles scherps behalve tand en nagel', 'de twee halsaders doorsnijden', 'Bismillāh zeggen']]
  ],
  hadith: [
    { text: 'أن النبي ﷺ ضحى بكبشين أملحين أقرنين، ذبحهما بيده، وسمى وكبر، ووضع رجله على صفاحهما', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'De Profeet ﷺ offerde twee wit-zwarte gehoornde rammen; hij slachtte ze met eigen hand, noemde Allahs naam, zei Allāhu akbar en zette zijn voet op hun hals', pages: [95] },
    { text: 'إذا رأيتم هلال ذي الحجة، وأراد أحدكم أن يضحي، فليمسك عن شعره وأظفاره', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Als jullie de nieuwe maan van Dhū l-Ḥijja zien en een van jullie wil offeren, laat hij dan zijn haar en nagels laten', pages: [95] },
    { text: 'كان الرجل في عهد رسول الله ﷺ يضحي بالشاة عنه وعن أهل بيته، فيأكلون ويطعمون', takhrij: 'رواه الترمذي وابن ماجه وصححه الألباني', takhrijNl: 'at-Tirmidhī en Ibn Māja; al-Albānī noemde hem authentiek', narrator: 'أبو أيوب', narratorNl: 'Abū Ayyūb', nl: 'In de tijd van de Boodschapper van Allah ﷺ offerde een man één schaap voor zichzelf en zijn huisgezin; zij aten ervan en gaven anderen te eten', pages: [95] },
    { text: 'نحرنا مع رسول الله ﷺ عام الحديبية البدنة عن سبعة، والبقرة عن سبعة', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'جابر', narratorNl: 'Jābir', nl: 'Wij slachtten met de Boodschapper van Allah ﷺ in het jaar van al-Ḥudaybiya een kameel voor zeven en een rund voor zeven', pages: [95] },
    { text: 'لا تذبحوا إلا مسنة، إلا أن يعسر عليكم، فتذبحوا جذعة من الضأن', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'جابر', narratorNl: 'Jābir', nl: 'Slacht alleen een dier van de vereiste leeftijd, tenzij dat moeilijk voor jullie is; slacht dan een schaap van zes maanden', pages: [96] },
    { text: 'أربع لا تجوز في الأضاحي: العوراء البين عورها، والمريضة البين مرضها، والعرجاء البين ضلعها، والعجفاء التي لا تنقي', takhrij: 'رواه أحمد والترمذي وصححه', takhrijNl: 'Aḥmad en at-Tirmidhī, die hem authentiek noemde', narrator: 'البراء بن عازب', narratorNl: 'al-Barāʾ ibn ʿĀzib', nl: 'Vier dieren zijn niet geldig als offer: het duidelijk eenogige, het duidelijk zieke, het duidelijk kreupele en het uitgemergelde', pages: [96] },
    { text: 'ما أنهر الدم وذكر اسم الله عليه فكلوا، ليس السن والظفر', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Wat het bloed laat stromen en waarover Allahs naam genoemd is, eet daarvan; maar niet met tand of nagel', pages: [98] },
    { text: 'من ذبح قبل الصلاة فإنما هو لحم قدمه لأهله، وليس من النسك في شيء', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'البراء بن عازب', narratorNl: 'al-Barāʾ ibn ʿĀzib', nl: 'Wie vóór het gebed slacht, heeft alleen vlees voor zijn gezin; het hoort niet bij de offerrite', pages: [98] },
    { text: 'كنت نهيتكم عن ادخار لحوم الأضاحي فوق ثلاث، فأمسكوا ما بدا لكم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'بريدة', narratorNl: 'Burayda', nl: 'Ik had jullie verboden offervlees langer dan drie dagen te bewaren; bewaar nu zoveel als jullie willen', pages: [99] },
    { text: 'لعن الله من ذبح لغير الله', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Allah vervloekt wie voor een ander dan Allah slacht', pages: [99] },
    { text: 'كل غلام رهينة بعقيقته، تذبح عنه يوم سابعه، ويسمى ويحلق رأسه', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem authentiek', narrator: 'سمرة', narratorNl: 'Samura', nl: 'Elk kind is verpand aan zijn ʿaqīqa: op de zevende dag wordt voor hem geslacht, krijgt het een naam en wordt zijn hoofd geschoren', pages: [100] },
    { text: 'عن الغلام شاتان مكافئتان، وعن الجارية شاة', takhrij: 'رواه أبو داود والنسائي وصححه الألباني', takhrijNl: 'Abū Dāwūd en an-Nasāʾī; al-Albānī noemde hem authentiek', nl: 'Voor een jongen twee gelijkwaardige schapen, voor een meisje één', pages: [100] },
    { text: 'عق رسول الله ﷺ عن الحسن والحسين كبشا كبشا', takhrij: 'رواه أبو داود، وعند النسائي: كبشين كبشين، وصححه الألباني', takhrijNl: 'Abū Dāwūd; bij an-Nasāʾī: twee rammen elk; al-Albānī noemde hem authentiek', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'De Boodschapper van Allah ﷺ slachtte als ʿaqīqa voor al-Ḥasan en al-Ḥusayn elk een ram', pages: [101] }
  ],
  persons: [
    ['anas-ibn-malik', 'text', [95], 'روى أضحية النبي ﷺ بكبشين.', 'Overleverde het offer van de Profeet ﷺ met twee rammen.'],
    ['abu-bakr-as-siddiq', 'text', [95], 'ترك الأضحية أحيانا خشية أن يظن وجوبها.', 'Liet het offer soms, uit vrees dat men het verplicht zou achten.'],
    ['umar-ibn-al-khattab', 'text', [95], 'ترك الأضحية أحيانا خشية أن يظن وجوبها.', 'Liet het offer soms, uit vrees dat men het verplicht zou achten.'],
    ['ahmad-ibn-hanbal', 'text', [95], 'قال: الأضحية أفضل من الصدقة بقيمتها.', 'Zei: het offer is beter dan de waarde ervan als ṣadaqa geven.'],
    ['abu-ayyub-al-ansari', 'text', [95], 'روى أن الشاة تجزئ عن الرجل وأهل بيته.', 'Overleverde dat één schaap volstaat voor een man en zijn gezin.'],
    ['jabir-ibn-abdallah', 'text', [95, 96], 'روى الاشتراك في البدنة والبقرة، وحديث المسنة.', 'Overleverde het delen van kameel en rund en de hadith over de leeftijd.'],
    ['ibn-qudama', 'text', [96], 'قال: لا تجزئ ما قطع منها عضو كالألية.', 'Zei: een dier waarvan een deel is afgesneden, zoals het staartvet, is niet geldig.'],
    ['al-bara-ibn-azib', 'text', [96, 98], 'روى العيوب الأربعة ووقت الذبح.', 'Overleverde de vier gebreken en de tijd van slachten.'],
    ['burayda-ibn-al-husayb', 'text', [99], 'روى نسخ النهي عن ادخار لحوم الأضاحي.', 'Overleverde dat het verbod op bewaren van offervlees werd opgeheven.'],
    ['ibn-al-mundhir', 'text', [99], 'نقل الإجماع على إباحة ذبيحة المرأة والصبي.', 'Vermeldde de consensus dat slachten door een vrouw of kind toegestaan is.'],
    ['kab-ibn-malik', 'text', [99], 'ذبحت جاريته شاة بحجر فأمر النبي ﷺ بأكلها.', 'Zijn slavin slachtte een schaap met een steen en de Profeet ﷺ liet het eten.'],
    ['samura-ibn-jundab', 'text', [100], 'روى: كل غلام رهينة بعقيقته.', 'Overleverde: elk kind is verpand aan zijn ʿaqīqa.'],
    ['ibn-taymiyya', 'text', [100], 'قال: من عدم ما يضحي به ويعق اقترض مع القدرة على الوفاء.', 'Zei: wie niets heeft om te offeren of ʿaqīqa te doen, leent als hij kan terugbetalen.'],
    ['ibn-abbas', 'text', [101], 'روى العقيقة عن الحسن والحسين.', 'Overleverde de ʿaqīqa voor al-Ḥasan en al-Ḥusayn.'],
    ['al-hasan-ibn-ali', 'text', [101], 'عق عنه جده ﷺ.', 'Zijn grootvader ﷺ deed de ʿaqīqa voor hem.'],
    ['al-husayn-ibn-ali', 'text', [101], 'عق عنه جده ﷺ.', 'Zijn grootvader ﷺ deed de ʿaqīqa voor hem.']
  ],
  review: [
    ['الأضحية سنة مؤكدة، وتجزئ الشاة عن أهل البيت.', 'Het offer is een sterk aanbevolen sunna; één schaap volstaat voor het gezin.'],
    ['شروطها: بهيمة الأنعام والسن المعتبرة والسلامة من العيوب.', 'Voorwaarden: vee, de vereiste leeftijd en vrij van gebreken.'],
    ['للتذكية أربعة شروط، والذبح من بعد صلاة العيد إلى آخر التشريق.', 'Het slachten kent vier voorwaarden; de tijd loopt van na het ʿīd-gebed tot het einde van tashrīq.'],
    ['يسن الأكل منها والإهداء والصدقة، ويجوز الادخار.', 'Men eet ervan, geeft cadeau en geeft ṣadaqa; bewaren mag.'],
    ['العقيقة شاتان عن الغلام وشاة عن الجارية يوم السابع، ولا اشتراك فيها.', 'De ʿaqīqa is twee schapen voor een jongen en één voor een meisje op de zevende dag, zonder delen.']
  ],
  quiz: [
    { type: 'mc', page: 95, q: ['ما حكم الأضحية عند الجمهور؟', 'Wat is het oordeel over het offer volgens de meesten?'], options: [['سنة مؤكدة', 'واجبة', 'مباحة', 'مكروهة'], ['sterk aanbevolen sunna', 'verplicht', 'toegestaan', 'afgeraden']], answer: 0, explain: ['تركها أبو بكر وعمر أحيانا خشية أن يظن وجوبها.', 'Abū Bakr en ʿUmar lieten het soms, uit vrees dat men het verplicht zou achten.'] },
    { type: 'mc', page: 96, q: ['ما السن المعتبرة في الضأن؟', 'Wat is de vereiste leeftijd voor een schaap?'], options: [['ستة أشهر', 'سنة', 'سنتان', 'خمس سنين'], ['zes maanden', 'één jaar', 'twee jaar', 'vijf jaar']], answer: 0, explain: ['والمعز سنة، والبقر سنتان، والإبل خمس.', 'Een geit één jaar, een rund twee, een kameel vijf.'] },
    { type: 'tf', page: 96, q: ['تجزئ العرجاء البين ضلعها في الأضحية.', 'Een duidelijk kreupel dier is geldig als offer.'], answer: 1, explain: ['من الأربع التي لا تجوز في الأضاحي.', 'Het hoort bij de vier die niet geldig zijn.'] },
    { type: 'mc', page: 98, q: ['متى يبدأ وقت ذبح الأضحية؟', 'Wanneer begint de tijd om het offer te slachten?'], options: [['بعد صلاة العيد', 'بعد فجر يوم عرفة', 'ليلة العيد', 'بعد الظهر يوم العيد'], ['na het ʿīd-gebed', 'na de dageraad op ʿArafa', 'in de nacht van het feest', 'na de middag op de feestdag']], answer: 0, explain: ['ومن ذبح قبل الصلاة فإنما هو لحم قدمه لأهله.', 'Wie vóór het gebed slacht, heeft alleen vlees voor zijn gezin.'] },
    { type: 'tf', page: 101, q: ['يجوز الاشتراك في العقيقة كما في الأضحية.', 'Bij de ʿaqīqa mag men delen, zoals bij het offer.'], answer: 1, explain: ['لا اشتراك فيها لأنها فداء نفس.', 'Er wordt niet gedeeld, want zij is een losgeld voor een ziel.'] },
    { type: 'mc', page: 100, q: ['كم يذبح عن الجارية في العقيقة؟', 'Hoeveel schapen worden voor een meisje geslacht bij de ʿaqīqa?'], options: [['شاة', 'شاتان', 'ثلاث', 'بقرة'], ['één', 'twee', 'drie', 'een rund']], answer: 0, explain: ['وعن الغلام شاتان مكافئتان.', 'Voor een jongen twee gelijkwaardige schapen.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ١٠٢.', 'Oefeningen van het boek op p. 102. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
