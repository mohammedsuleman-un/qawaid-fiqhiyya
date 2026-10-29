// Hoofdstukkaart bij الفقه (٤), eenheid 5: فقه الأسرة (النكاح) (lessen 24–28, boek p. 54–64).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
// Weggelaten (zonder bron in het boek): de uitspraken van Mālik, ash-Shāfiʿī, Aḥmad en Ibn Taymiyya
// over zang op p. 58 en de bewering over een stad in Azië op p. 63.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '24',
  unit: 5,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '54–64',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['فقه الأسرة: النكاح', 'Gezinsrecht: het huwelijk'],
  subtitle: ['خمسة دروس', 'Vijf lessen'],
  summary: [
    'النكاح عقد يبيح استمتاع كل من الزوجين بالآخر على الوجه المشروع، وهو مشروع بالكتاب والسنة والإجماع، وتختلف أحكامه بحسب الحال. يختار الزوجان على الدين والخلق، وللعقد ركنان وأربعة شروط: تعيين الزوجين، ورضا المرأة، والولي، والإشهاد. والمحرمات قسمان: مؤبد ومؤقت، ونهي عن الشغار ونكاح المحلل والمتعة.',
    'Het huwelijk is een contract dat beide echtgenoten op legitieme wijze van elkaar laat genieten; het is voorgeschreven door Koran, sunna en consensus, en het oordeel verschilt per situatie. Men kiest op religie en karakter. Het contract heeft twee zuilen en vier voorwaarden: aanwijzing van beide echtgenoten, instemming van de vrouw, de walī en getuigen. Verboden vrouwen zijn blijvend of tijdelijk verboden, en shighār, het taḥlīl-huwelijk en mutʿa zijn verboden.'
  ],
  map: {
    title: ['النكاح في خريطة واحدة', 'Het huwelijk in één kaart'],
    intro: ['كما في الدروس الخمسة.', 'Zoals in de vijf lessen.'],
    root: [['النكاح', 'Het huwelijk'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['التعريف والحكم والاختيار', 'Definitie, oordeel en keuze'], sub: ['الدرس ٢٤', 'les 24'], page: 54, children: [['ذات الدين', 'de godsdienstige vrouw'], ['من ترضون دينه وخلقه', 'wie je tevreden stelt in religie en karakter']] },
      { label: ['عقد النكاح', 'Het huwelijkscontract'], sub: ['الدروس ٢٥–٢٦', 'les 25–26'], page: 56, children: [['الإيجاب والقبول', 'aanbod en aanvaarding'], ['الولي والشاهدان', 'de walī en twee getuigen'], ['المهر', 'de bruidsgave']] },
      { label: ['المحرمات', 'Verboden vrouwen'], sub: ['الدرس ٢٧', 'les 27'], page: 59, children: [['النسب والرضاع والمصاهرة', 'afstamming, zogen en aanverwantschap'], ['المحرمات إلى أمد', 'tijdelijk verboden']] },
      { label: ['النكاح المنهي عنه', 'Verboden huwelijken'], sub: ['الدرس ٢٨', 'les 28'], page: 62, children: [['الشغار', 'shighār'], ['المحلل', 'taḥlīl'], ['المتعة', 'mutʿa']] }
    ]
  },
  points: [
    [54, 'قال ابن قدامة: أجمع المسلمون على أن النكاح مشروع.', 'Ibn Qudāma: de moslims zijn het eens dat het huwelijk voorgeschreven is.'],
    [54, 'الأصل في النكاح الإباحة، ويجب على من له شهوة ويخاف الوقوع في المحرم، ويستحب لمن له شهوة ولا يخاف.', 'In beginsel is het huwelijk toegestaan; verplicht voor wie begeerte heeft en vreest in het verbodene te vallen, aanbevolen voor wie begeerte heeft zonder die vrees.'],
    [55, 'من حكمه: بقاء النسل، وتكثير المسلمين، وغض البصر وحفظ الفرج، وصيانة المجتمع، والسكن بين الزوجين.', 'Wijsheden: voortbestaan van het nageslacht, meer moslims, de blik neerslaan en kuisheid, bescherming van de samenleving en rust tussen de echtgenoten.'],
    [56, 'ينعقد النكاح بكل ما دل عليه على الراجح، ولا يقتصر على لفظ الإنكاح والتزويج.', 'Het huwelijk komt volgens het sterkere oordeel tot stand met elke uitdrukking die erop wijst, niet alleen met inkāḥ of tazwīj.'],
    [57, 'المهر ليس شرطا ولا ركنا في العقد عند الجمهور، فإن عقد بلا ذكره صح ولها مهر المثل.', 'De bruidsgave is volgens de meerderheid geen voorwaarde of zuil; zonder vermelding is het contract geldig en heeft zij recht op mahr al-mithl.'],
    [58, 'إذا عدم الولي والقاضي المسلم، كما في البلاد غير الإسلامية، تولى العقد رجل عدل من جماعة المسلمين كإمام المسجد.', 'Ontbreken walī en moslimrechter, zoals in niet-islamitische landen, dan sluit een rechtschapen man uit de moslimgemeenschap het contract, zoals de imam van de moskee.'],
    [60, 'يشترط للرضاع المحرم أن يكون في الحولين، وأن يكون خمس رضعات مشبعات.', 'Zogen maakt alleen verboden binnen de eerste twee jaar en bij vijf verzadigende voedingen.'],
    [63, 'قال القرطبي: أجمع السلف والخلف على تحريم المتعة إلا من لا يلتفت إليه من الروافض.', 'Al-Qurṭubī: vroegeren en latere geleerden zijn het eens over het verbod op mutʿa, behalve de Rawāfiḍ, op wie niet gelet wordt.']
  ],
  terms: [
    ['النكاح', 'an-nikāḥ', 54, 'لغة: الضم والتداخل. واصطلاحا: عقد يبيح استمتاع كل من الزوجين بالآخر على الوجه المشروع.', 'Taal: samenvoegen en ineengrijpen. Vakterm: contract dat beide echtgenoten op legitieme wijze van elkaar laat genieten.'],
    ['الباءة', 'al-bāʾa', 54, 'الجماع، ومؤن النكاح.', 'Geslachtsgemeenschap, en de kosten van het huwelijk.'],
    ['المهر', 'al-mahr', 57, 'المال الذي تستحقه الزوجة على زوجها بالعقد أو الدخول أو الخلوة الصحيحة.', 'Het geld waarop de vrouw recht heeft door het contract, de gemeenschap of de geldige afzondering.'],
    ['الربيبة', 'ar-rabība', 60, 'بنت زوجة الرجل من غيره، سميت بذلك لأنه يربيها.', 'De dochter van de vrouw uit een ander huwelijk; zo genoemd omdat hij haar opvoedt.'],
    ['الشغار', 'ash-shighār', 62, 'أن يزوج الرجل ابنته على أن يزوجه الآخر ابنته، ليس بينهما صداق.', 'Een man huwt zijn dochter uit op voorwaarde dat de ander hem zijn dochter geeft, zonder bruidsgave.'],
    ['نكاح المحلل', 'nikāḥ al-muḥallil', 62, 'أن يتزوج المطلقة ثلاثا ليحلها للأول ثم يطلقها.', 'De driemaal gescheiden vrouw huwen om haar weer toegestaan te maken voor de eerste man, en haar dan scheiden.'],
    ['نكاح المتعة', 'nikāḥ al-mutʿa', 63, 'أن يتزوج امرأة بشيء من المال مدة معينة، ينتهي النكاح بانقضائها من غير طلاق.', 'Een vrouw huwen tegen geld voor een vaste duur, waarna het huwelijk zonder scheiding eindigt.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['المحرمات على التأبيد', 'Blijvend verboden vrouwen'],
      intro: ['كما في الصفحات ٥٩–٦١.', 'Zoals op p. 59–61.'],
      columns: [['من هن', 'Wie'], ['الدليل', 'Bewijs']],
      rows: [
        { label: ['بالنسب', 'Door afstamming'], cells: [['الأم، والبنت، والأخت، والعمة، والخالة، وبنت الأخ، وبنت الأخت', 'moeder, dochter, zuster, tantes, en de dochters van broer en zuster'], ['﴿حرمت عليكم أمهاتكم…﴾ [النساء: 23]', 'an-Nisāʾ 23']] },
        { label: ['بالرضاع', 'Door zogen'], cells: [['مثل ما يحرم بالنسب', 'dezelfde als door afstamming'], ['يحرم من الرضاع ما يحرم من النسب', '"door zogen is verboden wat door afstamming verboden is"']] },
        { label: ['بالمصاهرة', 'Door aanverwantschap'], cells: [['أم الزوجة، وبنتها بعد الدخول، وزوجة الأب، وزوجة الابن', 'moeder van de echtgenote, haar dochter na gemeenschap, vrouw van de vader, vrouw van de zoon'], ['[النساء: 22–23]', 'an-Nisāʾ 22–23']] }
      ],
      page: 59
    },
    {
      type: 'cards',
      title: ['شروط صحة عقد النكاح', 'Voorwaarden van het huwelijkscontract'],
      intro: ['كما في المخطط ص ٥٦.', 'Zoals in het schema op p. 56.'],
      nodes: [
        [56, 'تعيين الزوجين', 'Aanwijzing van beide echtgenoten', 'ليصح الإشهاد عليه', 'zodat het getuigen geldig is'],
        [56, 'رضا المرأة', 'Instemming van de vrouw', 'لا تنكح الأيم حتى تستأمر', 'de ayyim wordt niet uitgehuwelijkt zonder haar te raadplegen'],
        [56, 'الولي', 'De walī', 'لا نكاح إلا بولي', 'geen huwelijk zonder walī'],
        [58, 'الإشهاد', 'Getuigen', 'وشاهدي عدل', 'en twee rechtschapen getuigen']
      ]
    }
  ],
  sections: [
    [57, 'شروط الولي وترتيب الأولياء', 'Voorwaarden en volgorde van de walī', 'يشترط في الولي العقل والبلوغ والذكورة والعدالة والرشد. وأحق الأولياء الأب، ثم الجد وإن علا، ثم الابن وإن نزل، ثم الأخ الشقيق، ثم الأخ لأب، ثم بنوهما، ثم العم، ثم الأقرب فالأقرب من العصبة، ثم السلطان.', 'De walī moet verstandig, volwassen, man, rechtschapen en verstandig in beslissingen zijn. Volgorde: vader, grootvader en hoger, zoon en lager, volle broer, halfbroer van vaderszijde, hun zonen, oom van vaderszijde, de naaste ʿaṣaba, en dan de sultan.'],
    [58, 'إعلان النكاح', 'Bekendmaking van het huwelijk', 'يسن إعلان النكاح وضرب الدف والغناء المباح الخالي من وصف الجمال والغرام، ولا يجوز أن يشتمل العرس على اختلاط أو تبرج أو معازف أو غناء محرم.', 'Het is sunna het huwelijk bekend te maken, met de daf en toegestaan gezang zonder beschrijving van schoonheid en liefde; een bruiloft mag geen vermenging, uitdagend vertoon, muziekinstrumenten of verboden zang bevatten.'],
    [61, 'المحرمات إلى أمد', 'Tijdelijk verboden vrouwen', 'من يحرم لأجل الجمع: الأختان، والمرأة مع عمتها أو خالتها، وما زاد على أربع. ومن يحرم لعارض: المعتدة من غيره، والزانية حتى تتوب، والمطلقة ثلاثا حتى تنكح زوجا غيره، والمحرمة حتى تحل.', 'Door combinatie: twee zusters, een vrouw met haar tante, meer dan vier. Door een tijdelijke belemmering: de vrouw in ʿidda van een ander, de ontuchtige tot zij berouw toont, de driemaal gescheiden vrouw tot zij een ander huwt, en de vrouw in iḥrām.'],
    [62, 'نكاح الكافر والكتابية', 'Huwelijk met een ongelovige en een vrouw van het Boek', 'يحرم بالإجماع أن يتزوج الكافر مسلمة: ﴿ولا تنكحوا المشركين حتى يؤمنوا﴾ [البقرة: 221]، ولا يتزوج المسلم كافرة إلا المحصنة من أهل الكتاب [المائدة: 5].', 'Een ongelovige mag volgens consensus geen moslima huwen (2:221); een moslim huwt geen ongelovige vrouw, behalve een kuise vrouw van de mensen van het Boek (5:5).']
  ],
  keycards: [
    ['opsomming', 56, 'ركنا عقد النكاح', 'Zuilen van het huwelijkscontract', ['الزوجان الخاليان من الموانع', 'الإيجاب والقبول'], ['twee echtgenoten zonder belemmeringen', 'aanbod en aanvaarding']],
    ['voorwaarde', 60, 'شرطا الرضاع المحرم', 'Voorwaarden voor zogen dat verboden maakt', ['أن يكون في الحولين', 'أن يكون خمس رضعات مشبعات'], ['binnen de eerste twee jaar', 'vijf verzadigende voedingen']],
    ['onderscheid', 60, 'الربيبة وأم الزوجة', 'De stiefdochter en de schoonmoeder', ['أم الزوجة تحرم بمجرد العقد', 'الربيبة لا تحرم إلا بالدخول بأمها'], ['de schoonmoeder is verboden door het contract alleen', 'de stiefdochter pas na gemeenschap met haar moeder']]
  ],
  hadith: [
    { text: 'يا معشر الشباب، من استطاع منكم الباءة فليتزوج، ومن لم يستطع فعليه بالصوم؛ فإنه له وجاء', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Jongeren, wie van jullie het kan, laat hem trouwen; en wie het niet kan, laat hem vasten, want dat is voor hem een bescherming', pages: [54] },
    { text: 'وأتزوج النساء، فمن رغب عن سنتي فليس مني', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'En ik trouw met vrouwen; wie zich van mijn sunna afkeert, hoort niet bij mij', pages: [54] },
    { text: 'تنكح المرأة لأربع: لمالها، ولحسبها، ولجمالها، ولدينها، فاظفر بذات الدين تربت يداك', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Een vrouw wordt om vier dingen gehuwd: haar bezit, haar afkomst, haar schoonheid en haar religie; kies de godsdienstige, dan zul je slagen', pages: [55] },
    { text: 'هلا تزوجت بكرا؛ تلاعبها وتلاعبك', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'قاله لجابر.', nlNote: 'Gezegd tegen Jābir.', nl: 'Waarom ben je niet met een maagd getrouwd, met wie je speelt en die met jou speelt?', pages: [55] },
    { text: 'تزوجوا الودود الولود؛ فإني مكاثر بكم الأمم', takhrij: 'أخرجه أبو داود، وصححه الألباني', takhrijNl: 'Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Trouw met de liefdevolle, vruchtbare vrouw, want ik zal met jullie talrijkheid de andere volken overtreffen', pages: [55] },
    { text: 'إذا خطب إليكم من ترضون دينه وخلقه فزوجوه، إلا تفعلوا تكن فتنة في الأرض، وفساد عريض', takhrij: 'أخرجه الترمذي، وحسنه', takhrijNl: 'at-Tirmidhī; door hem ḥasan genoemd', narrator: 'أبو حاتم المزني', narratorNl: 'Abū Ḥātim al-Muzanī', nl: 'Als iemand om jullie hand vraagt wiens religie en karakter jullie tevreden stellen, huwelijk hem dan uit; doen jullie dat niet, dan komt er beproeving op aarde en wijdverbreid verderf', pages: [55] },
    { text: 'لا تنكح الأيم حتى تستأمر، ولا تنكح البكر حتى تستأذن', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De eerder gehuwde wordt niet uitgehuwelijkt voordat zij geraadpleegd is, en de maagd niet voordat haar toestemming gevraagd is', pages: [56] },
    { text: 'لا نكاح إلا بولي', takhrij: 'أخرجه أحمد وأبو داود والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad, Abū Dāwūd en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', nl: 'Er is geen huwelijk zonder walī', pages: [56] },
    { text: 'لا تزوج المرأة المرأة، ولا تزوج المرأة نفسها', takhrij: 'رواه ابن ماجه، وصححه الألباني', takhrijNl: 'Ibn Māja; ṣaḥīḥ volgens al-Albānī', nl: 'Een vrouw huwt geen andere vrouw uit, en een vrouw huwt zichzelf niet uit', pages: [57] },
    { text: 'أيما امرأة نكحت بغير إذن وليها، فنكاحها باطل فنكاحها باطل', takhrij: 'أخرجه أحمد والترمذي، وحسنه', takhrijNl: 'Aḥmad en at-Tirmidhī; door at-Tirmidhī ḥasan genoemd', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Elke vrouw die trouwt zonder toestemming van haar walī: haar huwelijk is nietig, haar huwelijk is nietig', pages: [57] },
    { text: 'لا نكاح إلا بولي وشاهدي عدل', takhrij: 'أخرجه ابن حبان والبيهقي، وصححه الألباني', takhrijNl: 'Ibn Ḥibbān en al-Bayhaqī; ṣaḥīḥ volgens al-Albānī', nl: 'Er is geen huwelijk zonder walī en twee rechtschapen getuigen', pages: [58] },
    { text: 'أعلنوا النكاح', takhrij: 'رواه أحمد، قال الأرناؤوط: حسن لغيره', takhrijNl: 'Aḥmad; al-Arnaʾūṭ: ḥasan li-ghayrihi', nl: 'Maak het huwelijk bekend', pages: [58] },
    { text: 'يا عائشة، ما كان معكم لهو؟ فإن الأنصار يعجبهم اللهو', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'لما زفت امرأة إلى رجل من الأنصار؛ والمراد باللهو ضرب الدف ونحوه.', nlNote: 'Toen zij een bruid naar een man van de Anṣār leidde; met vermaak is de daf en dergelijke bedoeld.', nl: 'ʿĀʾisha, hadden jullie geen vermaak bij je? De Anṣār houden van vermaak', pages: [58] },
    { text: 'يحرم من الرضاع ما يحرم من النسب', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Door zogen is verboden wat door afstamming verboden is', pages: [59] },
    { text: 'أرسلني رسول الله ﷺ إلى رجل تزوج امرأة أبيه من بعده أن أضرب عنقه، أو أقتله', takhrij: 'رواه الترمذي، وحسنه', takhrijNl: 'at-Tirmidhī; door hem ḥasan genoemd', narrator: 'البراء بن عازب عن خاله', narratorNl: 'al-Barāʾ ibn ʿĀzib, van zijn oom van moederszijde', nl: 'De Boodschapper van Allah ﷺ stuurde mij naar een man die na zijn vader met diens vrouw trouwde, om hem te onthoofden of te doden', pages: [61] },
    { text: 'لا يجمع بين المرأة وعمتها، ولا بين المرأة وخالتها', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Men combineert een vrouw niet met haar tante van vaderszijde, noch met haar tante van moederszijde', pages: [61] },
    { text: 'لا ينكح المحرم، ولا ينكح، ولا يخطب', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'Wie in iḥrām is, trouwt niet, huwt niemand uit en vraagt niet ten huwelijk', pages: [62] },
    { text: 'والشغار أن يزوج الرجل ابنته على أن يزوجه الآخر ابنته، ليس بينهما صداق', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'Shighār is dat een man zijn dochter uithuwelijkt op voorwaarde dat de ander hem zijn dochter geeft, zonder bruidsgave tussen hen', pages: [62] },
    { text: 'ألا أخبركم بالتيس المستعار؟ … هو المحلل، لعن الله المحلل، والمحلل له', takhrij: 'أخرجه ابن ماجه، وحسنه الألباني', takhrijNl: 'Ibn Māja; ḥasan volgens al-Albānī', nl: 'Zal ik jullie vertellen over de geleende bok? … Dat is de muḥallil; Allah vervloekt de muḥallil en degene voor wie hij het doet', pages: [62] },
    { text: 'يا أيها الناس، إني قد كنت أذنت لكم في الاستمتاع من النساء، وإن الله قد حرم ذلك إلى يوم القيامة', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'Mensen, ik had jullie toestemming gegeven voor mutʿa met vrouwen, maar Allah heeft dat verboden tot de Dag der Opstanding', pages: [63] },
    { text: 'نهى رسول الله ﷺ عن متعة النساء يوم خيبر، وعن أكل لحوم الحمر الإنسية', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'علي بن أبي طالب', narratorNl: 'ʿAlī ibn Abī Ṭālib', note: 'من رواية الحسن وعبد الله ابني محمد بن الحنفية عن أبيهما، قاله لابن عباس.', nlNote: 'Via al-Ḥasan en ʿAbd Allāh, zonen van Muḥammad ibn al-Ḥanafiyya, van hun vader; ʿAlī zei het tegen Ibn ʿAbbās.', nl: 'De Boodschapper van Allah ﷺ verbood mutʿa met vrouwen op de dag van Khaybar, en het eten van het vlees van tamme ezels', pages: [63] }
  ],
  persons: [
    ['ibn-qudama', 'text', [54, 58], 'نقل الإجماع على مشروعية النكاح، وذكر تزويج العدل عند عدم الولي.', 'Gaf de consensus over het huwelijk en de regel bij ontbreken van een walī.'],
    ['ahmad-ibn-hanbal', 'text', [58], 'نقل عنه ابن قدامة أن العدل يزوجها بإذنها إذا عدم الولي.', 'Ibn Qudāma gaf van hem door dat een rechtschapen man haar met haar toestemming uithuwelijkt als er geen walī is.'],
    ['jabir-ibn-abdallah', 'text', [55], 'قال له النبي ﷺ: «هلا تزوجت بكرا».', 'Tegen hem zei de Profeet ﷺ: "waarom niet een maagd".'],
    ['abu-hatim-al-muzani', 'text', [55], 'روى حديث «إذا خطب إليكم من ترضون دينه».', 'Overleverde de hadith "als iemand om jullie hand vraagt".'],
    ['aisha', 'text', [57, 58], 'روت بطلان النكاح بغير ولي، وحديث اللهو في العرس.', 'Overleverde de nietigheid van een huwelijk zonder walī en de hadith over vermaak op een bruiloft.'],
    ['al-albani', 'takhrij', [55, 56, 57, 58, 62], 'صحح أحاديث النكاح.', 'Verklaarde hadith over het huwelijk authentiek.'],
    ['al-arnaut', 'takhrij', [58], 'حسن حديث «أعلنوا النكاح» لغيره.', 'Noemde "maak het huwelijk bekend" ḥasan li-ghayrihi.'],
    ['al-bara-ibn-azib', 'text', [61], 'روى قصة من تزوج امرأة أبيه.', 'Overleverde het verhaal van de man die met de vrouw van zijn vader trouwde.'],
    ['ibn-umar', 'text', [62], 'فسر الشغار.', 'Verklaarde shighār.'],
    ['ali-ibn-abi-talib', 'text', [63], 'روى النهي عن المتعة يوم خيبر.', 'Overleverde het verbod op mutʿa op de dag van Khaybar.'],
    ['muhammad-ibn-al-hanafiyya', 'text', [63], 'روى عن أبيه علي النهي عن المتعة.', 'Overleverde van zijn vader ʿAlī het verbod op mutʿa.'],
    ['ibn-abbas', 'text', [63], 'خاطبه علي بالنهي عن المتعة.', 'ʿAlī sprak hem aan over het verbod op mutʿa.'],
    ['al-qurtubi', 'text', [63], 'نقل الإجماع على تحريم المتعة.', 'Gaf de consensus over het verbod op mutʿa.']
  ],
  review: [
    ['النكاح مشروع، وحكمه يختلف بحسب حال الشخص.', 'Het huwelijk is voorgeschreven; het oordeel hangt af van de persoon.'],
    ['يختار الزوجان على الدين والخلق.', 'Men kiest op religie en karakter.'],
    ['شروط العقد: التعيين والرضا والولي والإشهاد.', 'Voorwaarden: aanwijzing, instemming, walī en getuigen.'],
    ['المحرمات مؤبدا بالنسب والرضاع والمصاهرة، ومؤقتا بالجمع أو بعارض.', 'Blijvend verboden door afstamming, zogen en aanverwantschap; tijdelijk door combinatie of een belemmering.'],
    ['الشغار والمحلل والمتعة أنكحة منهي عنها.', 'Shighār, taḥlīl en mutʿa zijn verboden huwelijken.']
  ],
  quiz: [
    { type: 'mc', page: 56, q: ['أي هذه ليس من شروط صحة عقد النكاح؟', 'Wat is géén voorwaarde van het huwelijkscontract?'], options: [['المهر', 'الولي', 'رضا المرأة', 'الإشهاد'], ['de bruidsgave', 'de walī', 'instemming van de vrouw', 'getuigen']], answer: 0, explain: ['المهر ليس شرطا ولا ركنا عند الجمهور.', 'De bruidsgave is volgens de meerderheid geen voorwaarde of zuil.'] },
    { type: 'tf', page: 57, q: ['يجوز للثيب أن تزوج نفسها بغير ولي.', 'Een eerder gehuwde vrouw mag zichzelf zonder walī uithuwelijken.'], answer: 1, explain: ['لا تزوج المرأة نفسها ولو كانت ثيبا على الراجح.', 'Volgens het sterkere oordeel niet, ook al is zij eerder gehuwd.'] },
    { type: 'mc', page: 60, q: ['متى تحرم الربيبة؟', 'Wanneer is de stiefdochter verboden?'], options: [['بالدخول بأمها', 'بمجرد العقد على أمها', 'لا تحرم أبدا', 'بعد طلاق أمها'], ['na gemeenschap met haar moeder', 'door het contract met haar moeder alleen', 'nooit', 'na de scheiding van haar moeder']], answer: 0, explain: ['﴿من نسائكم اللاتي دخلتم بهن﴾.', '"Van jullie vrouwen met wie jullie gemeenschap hadden" (4:23).'] },
    { type: 'tf', page: 61, q: ['يجوز الجمع بين المرأة وخالتها.', 'Een vrouw mag gecombineerd worden met haar tante van moederszijde.'], answer: 1, explain: ['«لا يجمع بين المرأة وعمتها، ولا بين المرأة وخالتها».', '"Men combineert een vrouw niet met haar tante".'] },
    { type: 'mc', page: 63, q: ['ما نكاح المتعة؟', 'Wat is het mutʿa-huwelijk?'], options: [['نكاح إلى مدة ينتهي بانقضائها', 'نكاح بلا مهر', 'نكاح بشرط تزويج البنت', 'نكاح المطلقة ثلاثا لتحليلها'], ['een huwelijk voor een vaste duur', 'een huwelijk zonder bruidsgave', 'een huwelijk met ruil van dochters', 'een huwelijk om de driemaal gescheiden vrouw toegestaan te maken']], answer: 0, explain: ['كما في الصفحة ٦٣.', 'Zoals op p. 63.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٤.', 'Oefening van het boek op p. 64. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
