// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 3: اتباع الهوى (lessen 5–7, boek p. 20–27).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '5',
  unit: 3,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '20–27',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['اتباع الهوى', 'Het volgen van de lust'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'الهوى ميل النفس إلى الشهوات التي تستلذها من غير داعية الشرع، واتباعه يصد عن الخير ويخالف العقل. نهى الشرع عنه من وجوه، وله أسباب وأضرار، ولمخالفته فوائد عظيمة، وعلاجه بالرجوع إلى الله، وملء القلب بمحبته، ومخالطة أهل العلم والتقى.',
    'Lust (hawā) is de neiging van de ziel naar genietingen waartoe de sharīʿa niet oproept; haar volgen houdt af van het goede en gaat tegen het verstand in. De sharīʿa verbiedt het op meerdere manieren; het heeft oorzaken en schade, en tegen de lust ingaan heeft grote voordelen. Behandeling: terugkeer naar Allah, het hart vullen met liefde voor Hem en omgang met geleerden en godvrezenden.'
  ],
  map: {
    title: ['اتباع الهوى في خريطة واحدة', 'Het volgen van de lust in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['اتباع الهوى', 'Het volgen van de lust'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['التعريف والنهي', 'Definitie en verbod'], sub: ['الدرس ٥', 'les 5'], page: 20, children: [['نهي مطلق', 'absoluut verbod'], ['عن أهواء الكفار والضالين', 'tegen de lusten van ongelovigen en dwalenden'], ['ذم هوى النفس', 'afkeuring van de lust van de ziel']] },
      { label: ['الأسباب', 'Oorzaken'], sub: ['الدرس ٦', 'les 6'], page: 21, children: [['عدم ضبط الهوى من الصغر', 'geen beheersing vanaf jonge leeftijd'], ['مجالسة أهل الأهواء', 'omgang met mensen van lust'], ['حب الدنيا', 'liefde voor de wereld']] },
      { label: ['الأضرار', 'Schade'], sub: ['الدرسان ٦–٧', 'les 6–7'], page: 22, children: [['خسران الآخرة', 'verlies van het hiernamaals'], ['الضلال', 'dwaling'], ['الذل والهوان', 'vernedering']] },
      { label: ['فوائد المخالفة والعلاج', 'Voordelen en behandeling'], sub: ['الدرس ٧', 'les 7'], page: 24, children: [['نيل الجنة', 'het Paradijs'], ['ظل العرش', 'de schaduw van de Troon'], ['مخالطة أهل العلم', 'omgang met geleerden']] }
    ]
  },
  points: [
    [20, 'اتباع الهوى يولد الأخلاق القبيحة، ويظهر الأفعال الفاضحة، ويهتك ستر المروءة.', 'Het volgen van de lust brengt lelijke karaktertrekken voort, toont schandelijke daden en scheurt de sluier van fatsoen.'],
    [21, 'كان الصحابة يعودون أولادهم ضبط النفس من الصغر بالصيام والصلاة والحج.', 'De metgezellen gewenden hun kinderen van jongs af aan zelfbeheersing door vasten, gebed en hadj.'],
    [21, 'قال البغوي: وعلماء السنة متفقون على معاداة أهل البدعة ومهاجرتهم.', 'Al-Baghawī: de geleerden van de sunna zijn het eens over vijandschap met en mijding van de mensen van bidʿa.'],
    [22, 'تقصير الناس في الأمر بالمعروف والنهي عن المنكر يجعل صاحب الهوى يستمر في هواه.', 'Als mensen tekortschieten in het goede gebieden en het slechte verbieden, gaat de lustvolger door.'],
    [23, 'أصل كل ضلال اتباع الظن والهوى: ﴿إن يتبعون إلا الظن وما تهوى الأنفس﴾ [النجم: 23].', 'De oorsprong van elke dwaling is vermoeden en lust volgen (53:23).'],
    [23, 'قال الفضيل بن عياض: من استحوذ عليه الهوى واتباع الشهوات انقطعت عنه موارد التوفيق.', 'Al-Fuḍayl ibn ʿIyāḍ: wie door lust en begeerten overheerst wordt, verliest de bronnen van welslagen.'],
    [25, 'قال ابن القيم: السبعة الذين يظلهم الله في ظل عرشه إنما نالوا ذلك الظل بمخالفة الهوى.', 'Ibn al-Qayyim: de zeven die in de schaduw van de Troon staan, kregen dat door tegen hun lust in te gaan.'],
    [26, 'قال إبراهيم بن أدهم: أشد الجهاد جهاد الهوى، من منع نفسه هواها فقد استراح من الدنيا وبلائها.', 'Ibrāhīm ibn Adham: de zwaarste strijd is tegen de lust; wie zijn ziel haar lust ontzegt, vindt rust van de wereld en haar beproevingen.']
  ],
  terms: [
    ['الهوى', 'al-hawā', 20, 'لغة: مصدر هويه إذا أحبه واشتهاه. واصطلاحا: ميل النفس إلى الشهوات التي تستلذها من غير داعية الشرع.', 'Taal: van hawiyahu, iets liefhebben en begeren. Vakterm: de neiging van de ziel naar genietingen zonder oproep van de sharīʿa.'],
    ['المروءة', 'al-murūʾa', 25, 'قال معاوية: ترك الشهوات وعصيان الهوى.', 'Muʿāwiya: begeerten laten en de lust niet gehoorzamen.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['فوائد مخالفة الهوى', 'Voordelen van tegen de lust ingaan'],
      intro: ['كما في الصفحات ٢٤–٢٦.', 'Zoals op p. 24–26.'],
      nodes: [
        [24, 'نيل الجنة', 'Het Paradijs', '﴿ونهى النفس عن الهوى فإن الجنة هي المأوى﴾', '"en de ziel de lust ontzegde: het Paradijs is de verblijfplaats"'],
        [25, 'النجاة من أهوال المحشر', 'Redding op de Dag van verzameling', 'السبعة الذين يظلهم الله', 'de zeven in Allahs schaduw'],
        [25, 'الشرف والعلو', 'Eer en verhevenheid', 'بطاعة الحزم وعصيان الهوى', 'door vastberadenheid te gehoorzamen en de lust niet'],
        [25, 'تقوية العزائم', 'Sterkere vastberadenheid', 'أحزم الناس الغالب لهواه', 'de vastberadenste overwint zijn lust'],
        [26, 'حفظ الصحة', 'Behoud van gezondheid', 'جوارح حفظناها في الصغر فحفظها الله في الكبر', 'ledematen behoed in de jeugd, door Allah behoed in de ouderdom'],
        [26, 'الحفظ من بلاء الدنيا', 'Bescherming tegen wereldse beproeving', 'من منع نفسه هواها استراح', 'wie zijn ziel haar lust ontzegt, vindt rust']
      ]
    }
  ],
  sections: [
    [20, 'وجوه النهي عن اتباع الهوى', 'Manieren waarop de lust verboden wordt', 'يأتي النهي مطلقا: ﴿فلا تتبعوا الهوى أن تعدلوا﴾ [النساء: 135]، ويأتي النهي عن اتباع أهواء الكفار والضالين: ﴿قل لا أتبع أهواءكم﴾ [الأنعام: 56]، ويأتي ذم الهوى المنسوب إلى النفس: «العاجز من أتبع نفسه هواها».', 'Het verbod komt absoluut (4:135), als verbod de lusten van ongelovigen en dwalenden te volgen (6:56), en als afkeuring van de lust van de ziel: "de onmachtige is wie zijn ziel haar lust laat volgen".'],
    [22, 'أسباب أخرى لاتباع الهوى', 'Andere oorzaken', 'ضعف المعرفة بالله والدار الآخرة: ﴿وما قدروا الله حق قدره﴾ [الزمر: 67]، وحب الدنيا والركون إليها، والجهل بعواقب اتباع الهوى.', 'Zwakke kennis van Allah en het hiernamaals (39:67), liefde voor de wereld en erop steunen, en onwetendheid over de gevolgen van de lust.'],
    [24, 'الاستهانة بالذنوب', 'Zonden kleineren', 'قال ابن مسعود: إن المؤمن يرى ذنوبه كأنه قاعد تحت جبل يخاف أن يقع عليه، وإن الفاجر يرى ذنوبه كذباب مر على أنفه فقال به هكذا.', 'Ibn Masʿūd: de gelovige ziet zijn zonden alsof hij onder een berg zit die op hem kan vallen; de zondaar ziet ze als een vlieg die langs zijn neus gaat en die hij wegwuift.'],
    [26, 'علاج اتباع الهوى', 'Behandeling van het volgen van de lust', 'الرجوع إلى الله ودعاؤه أن يقيه شر الهوى، وملء القلب بمحبة الله والقرب منه، ومخالطة العلماء وأهل التقى، كما قال ابن عبد القوي: وخالط إذا خالطت كل موفق من العلما أهل التقى والتسدد.', 'Terugkeer naar Allah en Hem vragen om bescherming, het hart vullen met liefde voor Allah, en omgang met geleerden en godvrezenden, zoals Ibn ʿAbd al-Qawī dichtte.']
  ],
  keycards: [
    ['opsomming', 21, 'أسباب اتباع الهوى', 'Oorzaken van het volgen van de lust', ['عدم ضبط الهوى من الصغر', 'مجالسة أهل الأهواء', 'ضعف المعرفة بالله والآخرة', 'ترك الأمر بالمعروف', 'حب الدنيا', 'الجهل بالعواقب'], ['geen beheersing vanaf jonge leeftijd', 'omgang met mensen van lust', 'zwakke kennis van Allah en het hiernamaals', 'nalaten van het goede gebieden', 'liefde voor de wereld', 'onwetendheid over de gevolgen']],
    ['opsomming', 22, 'أضرار اتباع الهوى', 'Schade van het volgen van de lust', ['خسران الآخرة', 'الضلال', 'عدم الانتفاع بالقرآن', 'فساد القلب', 'ذهاب العقل والعلم', 'إغلاق أبواب التوفيق', 'الاستهانة بالذنوب', 'الذل والهوان'], ['verlies van het hiernamaals', 'dwaling', 'geen nut van de Koran', 'een bedorven hart', 'verlies van verstand en kennis', 'gesloten deuren van welslagen', 'zonden kleineren', 'vernedering']]
  ],
  hadith: [
    { text: 'العاجز من أتبع نفسه هواها', takhrij: 'رواه الترمذي وابن ماجه والحاكم وصححه', takhrijNl: 'at-Tirmidhī, Ibn Māja en al-Ḥākim, die het ṣaḥīḥ noemde', narrator: 'شداد بن أوس', narratorNl: 'Shaddād ibn Aws', nl: 'De onmachtige is wie zijn ziel haar lust laat volgen', pages: [21] },
    { text: 'إن المؤمن يرى ذنوبه كأنه قاعد تحت جبل يخاف أن يقع عليه، وإن الفاجر يرى ذنوبه كذباب مر على أنفه، فقال به هكذا', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عبد الله بن مسعود', narratorNl: 'ʿAbd Allāh ibn Masʿūd', note: 'من قول ابن مسعود.', nlNote: 'Een uitspraak van Ibn Masʿūd.', nl: 'De gelovige ziet zijn zonden alsof hij onder een berg zit en vreest dat die op hem valt; de zondaar ziet zijn zonden als een vlieg die langs zijn neus vloog en die hij zo wegwuifde', pages: [24] },
    { text: 'سبعة يظلهم الله تعالى في ظله، يوم لا ظل إلا ظله: إمام عدل، وشاب نشأ في عبادة الله، ورجل قلبه معلق في المساجد، ورجلان تحابا في الله، اجتمعا عليه، وتفرقا عليه، ورجل دعته امرأة ذات منصب وجمال فقال: إني أخاف الله، ورجل تصدق بصدقة فأخفاها؛ حتى لا تعلم شماله ما تنفق يمينه، ورجل ذكر الله خاليا، ففاضت عيناه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Zeven geeft Allah schaduw in Zijn schaduw op de dag dat er geen schaduw is dan de Zijne: een rechtvaardige leider, een jongere die opgroeide in aanbidding van Allah, een man wiens hart aan de moskeeën hangt, twee mannen die elkaar liefhebben om Allah, een man die door een vrouw van aanzien en schoonheid verleid wordt en zegt: ik vrees Allah, een man die in het geheim geeft, en een man die Allah in afzondering gedenkt en wiens ogen overstromen', pages: [25] }
  ],
  persons: [
    ['shaddad-ibn-aws', 'text', [21], 'روى حديث «العاجز من أتبع نفسه هواها».', 'Overleverde "de onmachtige is wie zijn ziel haar lust laat volgen".'],
    ['abu-qilaba', 'text', [21], 'نهى عن مجالسة أصحاب الأهواء.', 'Verbood omgang met mensen van lust.'],
    ['al-baghawi', 'text', [21], 'نقل اتفاق علماء السنة على هجر أهل البدع.', 'Gaf de overeenstemming over mijding van de mensen van bidʿa.'],
    ['al-fudayl-ibn-iyad', 'text', [23], 'قال: من استحوذ عليه الهوى انقطعت عنه موارد التوفيق.', 'Zei: wie door lust overheerst wordt, verliest welslagen.'],
    ['ibn-masud', 'text', [24], 'وصف نظرة المؤمن والفاجر إلى ذنوبه.', 'Beschreef hoe gelovige en zondaar naar hun zonden kijken.'],
    ['abdallah-ibn-al-mubarak', 'text', [24], 'قال شعرا: العبد عبد النفس في شهواتها.', 'Dichtte: de slaaf is slaaf van zijn ziel in haar begeerten.'],
    ['abu-hurayra', 'text', [25], 'روى حديث السبعة.', 'Overleverde de hadith van de zeven.'],
    ['ibn-al-qayyim', 'text', [25], 'بين أن السبعة نالوا الظل بمخالفة الهوى.', 'Legde uit dat de zeven de schaduw verkregen door tegen hun lust in te gaan.'],
    ['muawiya-ibn-abi-sufyan', 'text', [25], 'عرف المروءة بترك الشهوات وعصيان الهوى.', 'Definieerde fatsoen als begeerten laten en de lust niet gehoorzamen.'],
    ['al-muhallab-ibn-abi-sufra', 'text', [25], 'نال الشرف بطاعة الحزم وعصيان الهوى.', 'Verkreeg eer door vastberadenheid en het weerstaan van lust.'],
    ['yahya-ibn-muadh', 'text', [25], 'قال: أحزم الناس الغالب لهواه.', 'Zei: de vastberadenste is wie zijn lust overwint.'],
    ['ibn-rajab', 'text', [26], 'روى قصة من حفظ جوارحه في الصغر.', 'Vertelde over wie zijn ledematen in de jeugd behoedde.'],
    ['ibrahim-ibn-adham', 'text', [26], 'قال: أشد الجهاد جهاد الهوى.', 'Zei: de zwaarste strijd is tegen de lust.'],
    ['ibn-abd-al-qawi', 'text', [26], 'أوصى شعرا بمخالطة العلماء.', 'Raadde in een gedicht omgang met geleerden aan.']
  ],
  review: [
    ['الهوى ميل النفس إلى الشهوات بغير داعية الشرع.', 'Lust is neiging naar genietingen zonder oproep van de sharīʿa.'],
    ['من أسبابه عدم ضبطه من الصغر ومجالسة أهله.', 'Oorzaken: geen beheersing vanaf jonge leeftijd en omgang met lustvolgers.'],
    ['من أضراره خسران الآخرة والضلال والذل.', 'Schade: verlies van het hiernamaals, dwaling en vernedering.'],
    ['مخالفته سبب لنيل الجنة وظل العرش.', 'Tegen de lust ingaan leidt tot het Paradijs en de schaduw van de Troon.']
  ],
  quiz: [
    { type: 'mc', page: 20, q: ['ما الهوى اصطلاحا؟', 'Wat is hawā als vakterm?'], options: [['ميل النفس إلى الشهوات من غير داعية الشرع', 'محبة الله ورسوله', 'العلم النافع', 'الحزن على الذنب'], ['neiging van de ziel naar genietingen zonder oproep van de sharīʿa', 'liefde voor Allah en Zijn Boodschapper', 'nuttige kennis', 'verdriet over een zonde']], answer: 0, explain: ['كما في الصفحة ٢٠.', 'Zoals op p. 20.'] },
    { type: 'tf', page: 21, q: ['مجالسة أهل الأهواء من أسباب اتباع الهوى.', 'Omgang met mensen van lust is een oorzaak van het volgen van de lust.'], answer: 0, explain: ['ولهذا نهى السلف عن مجالستهم.', 'Daarom verboden de salaf het zitten met hen.'] },
    { type: 'mc', page: 25, q: ['بم نال السبعة ظل العرش كما قال ابن القيم؟', 'Waardoor kregen de zeven de schaduw van de Troon, volgens Ibn al-Qayyim?'], options: [['بمخالفة الهوى', 'بكثرة المال', 'بالنسب', 'بطول العمر'], ['door tegen hun lust in te gaan', 'door veel bezit', 'door afkomst', 'door een lang leven']], answer: 0, explain: ['كما في الإطار ص ٢٥.', 'Zoals in het kader op p. 25.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٢٧.', 'Oefening van het boek op p. 27. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
