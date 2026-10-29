// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 4: حب الدنيا (lessen 8–10, boek p. 28–33).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '8',
  unit: 4,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '28–33',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['حب الدنيا', 'Liefde voor de wereld'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'الدنيا لعب ولهو وزينة ومتاع الغرور، وهي سجن المؤمن وجنة الكافر. لحبها مظاهر كالانشغال بها وطلبها بعمل الآخرة والترف وحب المال والجاه، وأسباب كزينتها وميل النفس إليها وإيثار العاجل، ومفاسد منها أنه مفتاح كل شر، وعلاجه بالعلم بحقيقتها واحتقارها والتفكر في زوالها والقناعة والتفكر في نعيم الجنة.',
    'De wereld is spel, vermaak, versiering en bedrieglijk genot; zij is de gevangenis van de gelovige en het paradijs van de ongelovige. Liefde voor haar toont zich in opgaan in haar, haar zoeken met daden voor het hiernamaals, weelde en liefde voor geld en aanzien; oorzaken zijn haar versiering, de neiging van de ziel en het verkiezen van het nu. Zij is de sleutel tot elk kwaad; behandeling: haar werkelijkheid kennen, haar geringschatten, aan haar vergankelijkheid denken, tevredenheid en denken aan het Paradijs.'
  ],
  map: {
    title: ['حب الدنيا في خريطة واحدة', 'Liefde voor de wereld in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['حب الدنيا', 'Liefde voor de wereld'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['حقيقة الدنيا', 'De werkelijkheid van de wereld'], sub: ['ص ٢٨', 'p. 28'], page: 28, children: [['متاع الغرور', 'bedrieglijk genot'], ['سجن المؤمن', 'gevangenis van de gelovige']] },
      { label: ['مظاهر حبها وأسبابه', 'Uitingen en oorzaken'], sub: ['ص ٢٨–٢٩', 'p. 28–29'], page: 28, children: [['طلبها بعمل الآخرة', 'haar zoeken met daden voor het hiernamaals'], ['حب المال والشرف', 'liefde voor geld en aanzien'], ['إيثار العاجل', 'het nu verkiezen']] },
      { label: ['مفاسد حبها', 'Kwaden'], sub: ['ص ٣٠–٣١', 'p. 30–31'], page: 30, children: [['مفتاح كل شر', 'sleutel tot elk kwaad'], ['سوء الخاتمة', 'een slecht einde']] },
      { label: ['علاجه', 'Behandeling'], sub: ['ص ٣٢', 'p. 32'], page: 32, children: [['العلم بحقيقتها', 'haar werkelijkheid kennen'], ['القناعة', 'tevredenheid'], ['التفكر في الجنة', 'denken aan het Paradijs']] }
    ]
  },
  points: [
    [28, 'قال أبي بن كعب: لا يزال الناس مختلفة أعناقهم في طلب الدنيا.', 'Ubayy ibn Kaʿb: de mensen blijven met verschillende halzen naar de wereld reiken.'],
    [28, 'قال مطرف: إن أقبح الرغبة في الدنيا أن تطلب بعمل الآخرة.', 'Muṭarrif: het lelijkste verlangen naar de wereld is haar zoeken met daden voor het hiernamaals.'],
    [29, 'يرجع حب الدنيا وإيثارها على الآخرة إلى فساد في الإيمان والدين أو فساد في العقل.', 'Liefde voor de wereld en haar verkiezen boven het hiernamaals komt voort uit bederf in geloof en religie of in verstand.'],
    [30, 'قال ابن القيم: مفتاح كل خير الرغبة في الله والدار الآخرة، ومفتاح كل شر حب الدنيا وطول الأمل.', 'Ibn al-Qayyim: de sleutel tot elk goed is verlangen naar Allah en het hiernamaals, en de sleutel tot elk kwaad liefde voor de wereld en lange hoop.'],
    [31, 'قال ابن تيمية: الذكر للقلب بمنزلة الغذاء للجسد، فلا يجد القلب حلاوة الذكر مع حب الدنيا.', 'Ibn Taymiyya: gedenken is voor het hart wat voedsel is voor het lichaam; met liefde voor de wereld proeft het hart de zoetheid van gedenken niet.'],
    [31, 'قال ابن القيم: أقل ما في حبها أنه يلهي عن حب الله وذكره.', 'Ibn al-Qayyim: het minste wat liefde voor de wereld doet, is afleiden van liefde voor Allah en Zijn gedenken.'],
    [32, 'قال الحسن البصري: أهينوا الدنيا؛ فوالله لأهنأ ما تكون حين تهان.', 'Al-Ḥasan al-Baṣrī: kleineer de wereld; bij Allah, zij is het aangenaamst als zij gekleineerd wordt.'],
    [32, 'قال يونس بن عبد الأعلى: ما شبهت الدنيا إلا كرجل نام فرأى في منامه ما يكره وما يحب، فبينما هو كذلك انتبه.', 'Yūnus ibn ʿAbd al-Aʿlā: de wereld is als een man die slaapt en droomt wat hij haat en liefheeft, en dan wakker wordt.']
  ],
  terms: [
    ['متاع الغرور', 'matāʿ al-ghurūr', 28, 'ما يتمتع به ثم يزول فيغر صاحبه.', 'Genot dat voorbijgaat en zijn eigenaar bedriegt.'],
    ['القناعة', 'al-qanāʿa', 32, 'الرضا باليسير من الدنيا.', 'Tevreden zijn met weinig van de wereld.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['علاج حب الدنيا', 'Behandeling van liefde voor de wereld'],
      intro: ['كما في الصفحة ٣٢.', 'Zoals op p. 32.'],
      nodes: [
        [32, 'العلم الراسخ بحقيقتها', 'Vaste kennis van haar werkelijkheid', 'من عرفها زهد فيها', 'wie haar kent, wordt onthecht'],
        [32, 'احتقارها وإهانتها', 'Haar geringschatten', 'أهينوا الدنيا', 'kleineer de wereld'],
        [32, 'التفكر في سرعة زوالها', 'Denken aan haar snelle vergankelijkheid', 'كرجل نام ثم انتبه', 'als een slaper die ontwaakt'],
        [32, 'القناعة باليسير', 'Tevredenheid met weinig', 'حسبك منها ما يبلغك المحل', 'genoeg is wat je je bestemming laat bereiken'],
        [32, 'التفكر في نعيم الجنة', 'Denken aan het Paradijs', 'اللهم لا عيش إلا عيش الآخرة', 'O Allah, er is geen leven dan het leven van het hiernamaals']
      ]
    }
  ],
  sections: [
    [28, 'حقيقة الدنيا في القرآن', 'De wereld in de Koran', 'قال تعالى: ﴿اعلموا أنما الحياة الدنيا لعب ولهو وزينة وتفاخر بينكم وتكاثر في الأموال والأولاد﴾ إلى قوله: ﴿وما الحياة الدنيا إلا متاع الغرور﴾ [الحديد: 20].', 'Allah beschrijft het wereldse leven als spel, vermaak, versiering, opschepperij en wedijver in bezit en kinderen, en zegt dat het slechts bedrieglijk genot is (57:20).'],
    [32, 'نعيم الآخرة', 'Het geluk van het hiernamaals', 'قال ابن بطال: نبه ﷺ أمته بقوله «اللهم لا عيش إلا عيش الآخرة» على تصغير شأن الدنيا وكدر لذاتها وسرعة فنائها.', 'Ibn Baṭṭāl: met "er is geen leven dan het leven van het hiernamaals" wees hij ﷺ zijn umma op de geringheid van de wereld, haar troebele genietingen en haar snelle vergankelijkheid.']
  ],
  keycards: [
    ['opsomming', 28, 'مظاهر حب الدنيا', 'Uitingen van liefde voor de wereld', ['إصرار الناس على الانشغال بها', 'طلبها بعمل الآخرة', 'الترف والتنعم', 'حب المال والجاه والشرف'], ['volharden in opgaan in haar', 'haar zoeken met daden voor het hiernamaals', 'luxe en weelde', 'liefde voor geld, aanzien en eer']],
    ['opsomming', 30, 'مفاسد حب الدنيا', 'Kwaden van liefde voor de wereld', ['مفتاح كل شر', 'سبب للكفر والمعصية', 'غفلة القلب عن الآخرة', 'مزاحمة محبة الله', 'ضعف حلاوة الذكر', 'الهم الدائم والفقر', 'الإلهاء عن ذكر الله', 'سوء الخاتمة'], ['sleutel tot elk kwaad', 'oorzaak van ongeloof en zonde', 'onachtzaamheid voor het hiernamaals', 'verdringen van de liefde voor Allah', 'minder zoetheid van gedenken', 'voortdurende zorg en armoede', 'afleiding van gedenken', 'een slecht einde']]
  ],
  hadith: [
    { text: 'إن الدنيا حلوة خضرة، وإن الله مستخلفكم فيها، فينظر كيف تعملون، فاتقوا الدنيا، واتقوا النساء؛ فإن أول فتنة بني إسرائيل كانت في النساء', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'De wereld is zoet en groen, en Allah maakt jullie daarin opvolgers om te zien hoe jullie handelen; wees dus op je hoede voor de wereld en voor de vrouwen, want de eerste beproeving van de Banū Isrāʾīl was in de vrouwen', pages: [28, 29] },
    { text: 'لو كانت الدنيا تعدل عند الله جناح بعوضة، ما سقى كافرا منها شربة ماء', takhrij: 'رواه الترمذي، وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'سهل بن سعد الساعدي', narratorNl: 'Sahl ibn Saʿd as-Sāʿidī', nl: 'Als de wereld bij Allah de vleugel van een mug waard was, gaf Hij een ongelovige er geen slok water van', pages: [28] },
    { text: 'الدنيا سجن المؤمن، وجنة الكافر', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De wereld is de gevangenis van de gelovige en het paradijs van de ongelovige', pages: [28] },
    { text: 'والله ما الدنيا في الآخرة إلا مثل ما يجعل أحدكم إصبعه في اليم، فلينظر بم ترجع', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'المستورد بن شداد', narratorNl: 'al-Mustawrid ibn Shaddād', nl: 'Bij Allah, de wereld is vergeleken met het hiernamaals niets anders dan wanneer een van jullie zijn vinger in de zee steekt: laat hem zien waarmee die terugkomt', pages: [28] },
    { text: 'ما ذئبان جائعان أرسلا في غنم بأفسد لها من حرص المرء على المال والشرف لدينه', takhrij: 'رواه أحمد والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'كعب بن مالك', narratorNl: 'Kaʿb ibn Mālik', nl: 'Twee hongerige wolven losgelaten tussen schapen richten niet meer schade aan dan iemands hebzucht naar geld en aanzien aan zijn religie', pages: [29] },
    { text: 'قلب الشيخ شاب على حب اثنتين: حب العيش والمال', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Het hart van een oude man blijft jong in liefde voor twee dingen: het leven en het geld', pages: [29] },
    { text: 'لو أن لابن آدم واديا من ذهب أحب أن يكون له واديان، ولن يملأ فاه إلا التراب، ويتوب الله على من تاب', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Als de mens een dal vol goud had, zou hij er graag twee hebben; alleen aarde vult zijn mond, en Allah aanvaardt het berouw van wie berouw toont', pages: [29] },
    { text: 'بادروا بالأعمال فتنا كقطع الليل المظلم، يصبح الرجل مؤمنا ويمسي كافرا، أو يمسي مؤمنا ويصبح كافرا، يبيع دينه بعرض من الدنيا', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Haast je met goede daden vóór beproevingen als stukken van een donkere nacht, waarin iemand \'s ochtends gelovig is en \'s avonds ongelovig, of \'s avonds gelovig en \'s ochtends ongelovig, en zijn religie verkoopt voor iets van de wereld', pages: [30] },
    { text: 'من أحب دنياه أضر بآخرته، ومن أحب آخرته أضر بدنياه، فآثروا ما يبقى على ما يفنى', takhrij: 'رواه أحمد، وصححه الألباني لغيره', takhrijNl: 'Aḥmad; ṣaḥīḥ li-ghayrihi volgens al-Albānī', narrator: 'أبو موسى الأشعري', narratorNl: 'Abū Mūsā al-Ashʿarī', nl: 'Wie zijn wereld liefheeft, schaadt zijn hiernamaals, en wie zijn hiernamaals liefheeft, schaadt zijn wereld; verkies dus wat blijft boven wat vergaat', pages: [30] },
    { text: 'من كانت الآخرة همه، جعل الله غناه في قلبه، وجمع له شمله، وأتته الدنيا وهي راغمة، ومن كانت الدنيا همه، جعل الله فقره بين عينيه، وفرق عليه شمله، ولم يأته من الدنيا إلا ما قدر له', takhrij: 'رواه الترمذي، وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'أنس', narratorNl: 'Anas', nl: 'Wie het hiernamaals als zorg heeft, Allah legt zijn rijkdom in zijn hart, brengt zijn zaken bijeen, en de wereld komt onderdanig naar hem toe; wie de wereld als zorg heeft, Allah zet zijn armoede tussen zijn ogen, verstrooit zijn zaken, en van de wereld komt alleen wat voor hem bestemd is', pages: [31, 32] },
    { text: 'اللهم لا عيش إلا عيش الآخرة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'O Allah, er is geen leven dan het leven van het hiernamaals', pages: [32] }
  ],
  persons: [
    ['abu-said-al-khudri', 'text', [28], 'روى «إن الدنيا حلوة خضرة».', 'Overleverde "de wereld is zoet en groen".'],
    ['sahl-ibn-sad', 'text', [28], 'روى حديث جناح البعوضة.', 'Overleverde de hadith van de muggenvleugel.'],
    ['abu-hurayra', 'text', [28, 29, 30], 'روى «الدنيا سجن المؤمن» وغيره.', 'Overleverde "de wereld is de gevangenis van de gelovige" en meer.'],
    ['al-mustawrid-ibn-shaddad', 'text', [28], 'روى مثل الإصبع في اليم.', 'Overleverde het beeld van de vinger in de zee.'],
    ['abdallah-ibn-al-harith-ibn-nawfal', 'text', [28], 'روى قول أبي بن كعب.', 'Gaf de woorden van Ubayy ibn Kaʿb door.'],
    ['ubayy-ibn-kab', 'text', [28], 'قال: لا يزال الناس مختلفة أعناقهم في طلب الدنيا.', 'Zei: de mensen blijven naar de wereld reiken.'],
    ['mutarrif-ibn-abdallah', 'text', [28], 'ذم طلب الدنيا بعمل الآخرة.', 'Laakte het zoeken van de wereld met daden voor het hiernamaals.'],
    ['al-fudayl-ibn-iyad', 'text', [28], 'قال: لأن آكل الدنيا بالطبل والمزمار أحب إلي من أن آكلها بديني.', 'Zei: liever verdien ik de wereld met trom en fluit dan met mijn religie.'],
    ['kab-ibn-malik', 'text', [29], 'روى حديث الذئبين الجائعين.', 'Overleverde de hadith van de twee hongerige wolven.'],
    ['anas-ibn-malik', 'text', [29, 31], 'روى حديث وادي الذهب وحديث من كانت الآخرة همه.', 'Overleverde de hadith van het dal van goud en van wie het hiernamaals als zorg heeft.'],
    ['ibn-al-qayyim', 'text', [30, 31], 'جعل حب الدنيا مفتاح كل شر.', 'Noemde liefde voor de wereld de sleutel tot elk kwaad.'],
    ['abu-musa-al-ashari', 'text', [30], 'روى «من أحب دنياه أضر بآخرته».', 'Overleverde "wie zijn wereld liefheeft, schaadt zijn hiernamaals".'],
    ['ibn-taymiyya', 'text', [30, 31], 'بين مزاحمة المحبوبات لمحبة الله.', 'Legde uit hoe geliefde dingen de liefde voor Allah verdringen.'],
    ['sulayman-al-khawwas', 'text', [31], 'نسب إليه ابن تيمية: الذكر للقلب بمنزلة الغذاء للجسد.', 'Ibn Taymiyya schreef hem toe: gedenken is voor het hart wat voedsel is voor het lichaam.'],
    ['al-hasan-al-basri', 'text', [32], 'قال: أهينوا الدنيا.', 'Zei: kleineer de wereld.'],
    ['yunus-ibn-abd-al-ala', 'text', [32], 'شبه الدنيا برجل نام ثم انتبه.', 'Vergeleek de wereld met een slaper die ontwaakt.'],
    ['ibn-battal', 'text', [32], 'شرح «لا عيش إلا عيش الآخرة».', 'Verklaarde "er is geen leven dan het leven van het hiernamaals".']
  ],
  review: [
    ['الدنيا متاع الغرور، وهي سجن المؤمن وجنة الكافر.', 'De wereld is bedrieglijk genot, gevangenis van de gelovige.'],
    ['من مظاهر حبها طلبها بعمل الآخرة وحب المال والجاه.', 'Uitingen: haar zoeken met daden voor het hiernamaals, liefde voor geld en aanzien.'],
    ['حب الدنيا مفتاح كل شر.', 'Liefde voor de wereld is de sleutel tot elk kwaad.'],
    ['علاجه العلم بحقيقتها والقناعة والتفكر في الجنة.', 'Behandeling: haar werkelijkheid kennen, tevredenheid en denken aan het Paradijs.']
  ],
  quiz: [
    { type: 'mc', page: 30, q: ['ما مفتاح كل شر كما قال ابن القيم؟', 'Wat is de sleutel tot elk kwaad volgens Ibn al-Qayyim?'], options: [['حب الدنيا وطول الأمل', 'الفقر', 'الجهل بالحساب', 'قلة الأصحاب'], ['liefde voor de wereld en lange hoop', 'armoede', 'onwetendheid over rekenen', 'weinig vrienden']], answer: 0, explain: ['كما في الصفحة ٣٠.', 'Zoals op p. 30.'] },
    { type: 'tf', page: 31, q: ['من كانت الآخرة همه جعل الله غناه في قلبه.', 'Wie het hiernamaals als zorg heeft, Allah legt zijn rijkdom in zijn hart.'], answer: 0, explain: ['كما في حديث أنس.', 'Zoals in de hadith van Anas.'] },
    { type: 'mc', page: 29, q: ['بم شبه النبي ﷺ حرص المرء على المال والشرف؟', 'Waarmee vergeleek de Profeet ﷺ hebzucht naar geld en aanzien?'], options: [['ذئبين جائعين في غنم', 'نار في حطب', 'سيل جارف', 'ريح عاصف'], ['twee hongerige wolven tussen schapen', 'vuur in brandhout', 'een wilde stroom', 'een stormwind']], answer: 0, explain: ['كما في حديث كعب بن مالك.', 'Zoals in de hadith van Kaʿb ibn Mālik.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٣٣.', 'Oefening van het boek op p. 33. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
