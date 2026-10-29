// Hoofdstukkaart bij السيرة النبوية (٣), eenheid 3: met beproefden, armen, rijken, niet-moslims en
// nieuwe moslims (lessen 10–17, boek p. 35–49). Opgesteld uit de leesnotities van het boek; hadith en
// takhrij zoals in het boek. Het verhaal van ar-Rabīʿ ibn Khuthaym (p. 38) staat zonder bron en alleen in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-seerah',
  chapter: '10',
  unit: 3,
  source: {
    label: ['كتاب السيرة النبوية (٣)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (3), Zad-reeks'],
    pages: '35–49',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Seerah/page/n{p}/mode/1up'
  },
  title: ['تعامله ﷺ مع أهل البلاء والفقراء والأغنياء وغير المسلمين والمسلمين الجدد', 'Met beproefden, armen, rijken, niet-moslims en nieuwe moslims'],
  subtitle: ['ثمانية دروس مجموعة في صفحة واحدة', 'Acht lessen samen op één pagina'],
  summary: [
    'كان ﷺ يواسي أهل البلاء ويحثهم على الصبر ويراعي مشاعرهم ويزورهم؛ ويتفقد الفقراء ويقضي حوائجهم ويجالسهم ويقدمهم على أهل بيته؛ ويشهد بفضل الأغنياء ويرشدهم إلى حسن التصرف والعدل في العطية وإظهار النعمة؛ ويعامل غير المسلمين بالعدل ويدعوهم ويحسن جوارهم ويبيع ويشتري منهم ويعودهم وينتفع بهم؛ ويفرح بإسلام من أسلم ويعلمه ويتألفه ويأمره بتبليغ قومه.',
    'Hij ﷺ troostte beproefden, spoorde hen aan tot geduld, hield rekening met hun gevoelens en bezocht hen. Hij zocht de armen op, hielp hen, zat bij hen en ging hun voor boven zijn eigen gezin. Hij erkende de verdienste van rijken en leidde hen in goed beheer, rechtvaardig schenken en het tonen van Allahs gunst. Niet-moslims behandelde hij rechtvaardig: hij nodigde hen uit, was een goede buur, handelde met hen, bezocht hun zieken en maakte gebruik van hun kennis. En hij verheugde zich over wie moslim werd, onderwees hem, won zijn hart en droeg hem op zijn volk te onderwijzen.'
  ],
  map: {
    title: ['الوحدة الثالثة في خريطة واحدة', 'Eenheid 3 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['فئات من المجتمع', 'Groepen in de samenleving'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['أهل البلاء', 'Beproefden'], sub: ['الدرس ١٠', 'les 10'], page: 35, children: [['الحث على الصبر', 'aansporen tot geduld'], ['مراعاة المشاعر', 'gevoelens sparen'], ['الزيارة', 'bezoek']] },
      { label: ['الفقراء', 'Armen'], sub: ['الدرس ١١', 'les 11'], page: 37, children: [['التفقد', 'opzoeken'], ['الاحترام', 'respect'], ['أهل الصفة', 'de mensen van de ṣuffa']] },
      { label: ['الأغنياء', 'Rijken'], sub: ['الدرسان ١٢–١٣', 'les 12–13'], page: 40, children: [['الشهادة بالفضل', 'verdienste erkennen'], ['الثلث كثير', 'een derde is veel'], ['العدل بين الأولاد', 'rechtvaardig tussen kinderen']] },
      { label: ['غير المسلمين', 'Niet-moslims'], sub: ['الدرسان ١٤–١٥', 'les 14–15'], page: 43, children: [['العدل', 'rechtvaardigheid'], ['الدعوة', 'uitnodiging'], ['البيع والشراء والانتفاع', 'handel en nut']] },
      { label: ['المسلمون الجدد', 'Nieuwe moslims'], sub: ['الدرسان ١٦–١٧', 'les 16–17'], page: 46, children: [['الفرح بإسلامهم', 'vreugde over hun islam'], ['تعليمهم', 'onderwijs'], ['تأليفهم وتبشيرهم', 'hun hart winnen en goed nieuws']] }
    ]
  },
  points: [
    [36, 'يقول من رأى صاحب بلاء: الحمد لله الذي عافاني مما ابتلاك به … ؛ قال العلماء: يقوله سرا بحيث يسمع نفسه ولا يسمعه المبتلى.', 'Wie een beproefde ziet, zegt: alle lof zij Allah die mij bewaard heeft voor waarmee Hij jou beproefde …; de geleerden: in stilte, zodat hij het zelf hoort en de beproefde niet.'],
    [37, 'لا يطعم الفقير ما لا يأكله المعطي، تطبيقا لقوله تعالى ﴿ولستم بآخذيه إلا أن تغمضوا فيه﴾.', 'Men geeft de arme niet wat men zelf niet zou eten, in navolging van het vers over het geven van het goede (al-Baqara 267).'],
    [38, 'أنزل المهاجرين الفقراء في المسجد وسماهم أهل الصفة، وكان يجالسهم ويأنس بهم.', 'Hij liet de arme muhājirūn in de moskee wonen, noemde hen de mensen van de ṣuffa, zat bij hen en was vertrouwd met hen.'],
    [40, 'المال قوام الحياة، وكان من أصحابه أغنياء كثيرون: أبو بكر وعبد الرحمن بن عوف وعثمان وغيرهم.', 'Geld is een pijler van het leven, en veel van zijn metgezellen waren rijk: Abū Bakr, ʿAbd ar-Raḥmān ibn ʿAwf, ʿUthmān en anderen.'],
    [41, 'الهبة غير النفقة: العدل في النفقة أن يعطى كل ولد ما يحتاجه، ولو اختلف المقدار.', 'Schenking is iets anders dan onderhoud: rechtvaardig onderhoud is ieder kind geven wat het nodig heeft, ook als het bedrag verschilt.'],
    [43, 'العلاقة مع غير المسلمين قائمة على العدل وعدم الظلم، كما في سورة الممتحنة.', 'De relatie met niet-moslims berust op rechtvaardigheid en geen onrecht, zoals in soera al-Mumtaḥana.'],
    [45, 'يجوز الانتفاع بغير المسلمين فيما ينفع كالطب والزراعة، وقد استأجر النبي ﷺ دليلا مشركا في الهجرة.', 'Men mag gebruikmaken van de kennis van niet-moslims, zoals geneeskunde en landbouw; de Profeet ﷺ huurde bij de hijra een polytheïstische gids.'],
    [47, 'يشرع لمن أسلم أن يغتسل، والجمهور على أنه مستحب، وأن يلقي شعر الكفر أي الشعر الذي هو شعار للكفار.', 'Wie moslim wordt, doet ghusl (volgens de meesten aanbevolen) en werpt het haar van kufr af, dat wil zeggen een haardracht die een kenteken van ongelovigen is.']
  ],
  terms: [
    ['بحبيبتيه', 'bi-ḥabībatayhi', 35, 'عينيه، لأنهما أحب أعضائه إليه.', 'Zijn twee ogen, omdat zij hem de liefste lichaamsdelen zijn.'],
    ['البصير', 'al-baṣīr', 35, 'كناية لطيفة عن الأعمى.', 'Een vriendelijke omschrijving voor een blinde.'],
    ['أهل الصفة', 'ahl aṣ-ṣuffa', 38, 'فقراء المهاجرين الذين أسكنهم المسجد.', 'Arme muhājirūn die hij in de moskee liet wonen.'],
    ['عالة يتكففون الناس', 'ʿāla yatakaffafūn an-nās', 40, 'فقراء يسألون الناس بأكفهم.', 'Arm en de mensen met open hand om iets vragend.'],
    ['الخريت', 'al-khirrīt', 45, 'الماهر بالطرق.', 'Iemand die ervaren is in de wegen.'],
    ['باخع نفسك', 'bākhiʿ nafsak', 46, 'مهلكها حرصا وحزنا عليهم.', 'Jezelf vernietigend uit verlangen en verdriet om hen.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['النفقة والهبة', 'Onderhoud en schenking'],
      intro: ['كما فرق الكتاب بينهما.', 'Zoals het boek ze onderscheidt.'],
      columns: [['النفقة', 'Onderhoud'], ['الهبة', 'Schenking']],
      rows: [
        { label: ['الأساس', 'Grondslag'], cells: [['الحاجة', 'behoefte'], ['التسوية بين الأولاد', 'gelijkheid tussen kinderen']] },
        { label: ['المقدار', 'Hoeveelheid'], cells: [['يختلف باختلاف الحاجة', 'verschilt per behoefte'], ['لا يخص بها ولد دون غيره', 'niet aan één kind zonder de anderen']] },
        { label: ['الدليل', 'Bewijs'], cells: [['تنبيه الكتاب ص ٤١', 'kader van het boek, p. 41'], ['لا أشهد على جور', '"ik getuig niet van onrecht"']] }
      ],
      page: 41
    },
    {
      type: 'cards',
      title: ['من هديه مع المسلم الجديد', 'Zijn leiding met de nieuwe moslim'],
      intro: ['مما ذكره الكتاب مع أدلته.', 'Uit het boek, met bewijs.'],
      nodes: [
        [46, 'الفرح بإسلامه', 'Vreugde over zijn islam', 'كفرحه بإسلام عكرمة وعدي', 'zoals bij ʿIkrima en ʿAdī'],
        [46, 'تعليمه الصلاة والدعاء', 'Hem gebed en smeekbede leren', '', ''],
        [47, 'الأمر بالغسل', 'Opdracht tot ghusl', '', ''],
        [48, 'تأليفه ولو بالمال', 'Zijn hart winnen, ook met geld', '', ''],
        [48, 'تبشيره بثواب ما قدم', 'Goed nieuws over zijn eerdere goede daden', 'أسلمت على ما أسلفت من خير', '"je werd moslim met het goede dat je al deed"'],
        [49, 'أمره بتعليم قومه', 'Opdracht zijn volk te onderwijzen', '', '']
      ]
    }
  ],
  sections: [
    [35, 'زيارة عتبان بن مالك', 'Het bezoek aan ʿItbān ibn Mālik', 'طلب عتبان، وكان قد أنكر بصره، أن يصلي النبي ﷺ في بيته ليتخذه مصلى، فجاءه مع أبي بكر واستأذن وقال: أين تحب أن أصلي من بيتك؟ فصلى ركعتين.', 'ʿItbān, die slecht zag, vroeg de Profeet ﷺ in zijn huis te bidden zodat hij die plek als gebedsplaats kon nemen. Hij kwam met Abū Bakr, vroeg toestemming en zei: waar wil je dat ik in je huis bid? En hij bad twee rakʿa’s.'],
    [37, 'المرأة التي كانت تقم المسجد', 'De vrouw die de moskee veegde', 'افتقدها فقيل: ماتت، فقال: أفلا كنتم آذنتموني؟ دلوني على قبرها، فصلى عليها.', 'Hij miste haar; men zei dat zij gestorven was. Hij zei: waarom hebben jullie het mij niet laten weten? Wijs mij haar graf, en hij bad over haar.'],
    [41, 'لا أشهد على جور', 'Ik getuig niet van onrecht', 'أراد بشير أن يشهد النبي ﷺ على عطية خص بها ابنه النعمان، فسأله: أكل ولدك أعطيت مثله؟ قال: لا، قال: فلا تشهدني إذا.', 'Bashīr wilde dat de Profeet ﷺ getuige was van een gift aan alleen zijn zoon an-Nuʿmān. Hij vroeg: heb je al je kinderen hetzelfde gegeven? Nee. Dan: laat mij dan geen getuige zijn.'],
    [44, 'غير المسلمين في المعاملة', 'Omgang met niet-moslims in de praktijk', 'قبل هدية المقوقس وكسرى، واشترى طعاما من يهودي إلى أجل ورهنه درعه، وعاد الغلام اليهودي، وأمر ابن عمرو بالإهداء لجاره اليهودي.', 'Hij aanvaardde geschenken van al-Muqawqis en Kisrā, kocht op termijn voedsel van een jood en gaf zijn harnas als pand, bezocht de zieke joodse jongen, en Ibn ʿAmr liet zijn joodse buur een geschenk sturen.']
  ],
  keycards: [
    ['opsomming', 37, 'من هديه مع الفقراء', 'Zijn leiding met de armen', ['تفقدهم والسؤال عنهم', 'قضاء حوائجهم', 'احترامهم فلا يطعمون ما لا نأكل', 'النهي عن تركهم في الولائم', 'مجالستهم وعدم التكبر عليهم', 'تقديم حاجتهم على حاجة أهل بيته'], ['hen opzoeken en naar hen vragen', 'hun behoeften vervullen', 'respect: hun niet geven wat wij niet eten', 'hen niet overslaan bij feestmalen', 'bij hen zitten zonder hoogmoed', 'hun behoefte vóór die van zijn gezin']],
    ['bewijs', 43, 'تحريم ظلم المعاهد', 'Verbod op onrecht tegen een verdragspartner', ['من ظلم معاهدا أو انتقصه حقه … فأنا حجيجه يوم القيامة', 'من قتل نفسا معاهدا لم يرح رائحة الجنة'], ['wie een verdragspartner onrecht doet of hem zijn recht onthoudt … tegen hem pleit ik op de Dag der Opstanding', 'wie een verdragspartner doodt, ruikt de geur van het Paradijs niet']]
  ],
  hadith: [
    { text: 'إن الله قال: إذا ابتليت عبدي بحبيبتيه فصبر، عوضته منهما الجنة', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أنس', narratorNl: 'Anas', nl: 'Allah zegt: als Ik Mijn dienaar beproef met het verlies van zijn twee geliefden (zijn ogen) en hij geduld heeft, geef Ik hem daarvoor het Paradijs', pages: [35] },
    { text: 'انطلقوا بنا إلى البصير الذي في بني واقف نعوده', takhrij: 'رواه البيهقي وصححه الألباني', takhrijNl: 'al-Bayhaqī; al-Albānī noemde hem authentiek', narrator: 'جابر', narratorNl: 'Jābir', note: 'وكان رجلا أعمى.', nlNote: 'Het was een blinde man.', nl: 'Laten we de ziende (de blinde) bij Banū Wāqif gaan bezoeken', pages: [35] },
    { text: 'من رأى صاحب بلاء فقال: الحمد لله الذي عافاني مما ابتلاك به، وفضلني على كثير ممن خلق تفضيلا، إلا عوفي من ذلك البلاء ما عاش', takhrij: 'رواه الترمذي وحسنه الألباني', takhrijNl: 'at-Tirmidhī; al-Albānī noemde hem ḥasan', narrator: 'عمر', narratorNl: 'ʿUmar', nl: 'Wie een beproefde ziet en zegt: alle lof zij Allah die mij bewaard heeft voor waarmee Hij jou beproefde en mij boven velen van Zijn schepselen heeft bevoorrecht, wordt zijn leven lang voor die beproeving bewaard', pages: [36] },
    { text: 'إن هذه القبور مملوءة ظلمة على أهلها، وإن الله عز وجل ينورها لهم بصلاتي عليهم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Deze graven zijn vol duisternis voor hun bewoners, en Allah verlicht ze voor hen door mijn gebed over hen', pages: [37] },
    { text: 'لا تطعموهم مما لا تأكلون', takhrij: 'رواه أحمد وحسنه الألباني', takhrijNl: 'Aḥmad; al-Albānī noemde hem ḥasan', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Geef hun niet te eten van wat jullie zelf niet eten', pages: [37] },
    { text: 'شر الطعام طعام الوليمة، يدعى لها الأغنياء ويترك الفقراء', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Het slechtste eten is het eten van een feestmaal waarvoor de rijken worden uitgenodigd en de armen worden overgeslagen', pages: [38] },
    { text: 'لا أعطيكم وأدع أهل الصفة تلوى بطونهم من الجوع', takhrij: 'رواه أحمد وصححه أحمد شاكر', takhrijNl: 'Aḥmad; Aḥmad Shākir noemde hem authentiek', note: 'لما سأله علي وفاطمة خادما.', nlNote: 'Toen ʿAlī en Fāṭima om een bediende vroegen.', nl: 'Ik geef jullie niets terwijl ik de mensen van de ṣuffa laat met buiken die kronkelen van de honger', pages: [38] },
    { text: 'ما نفعني مال قط ما نفعني مال أبي بكر', takhrij: 'رواه الترمذي وابن ماجه وصححه الألباني', takhrijNl: 'at-Tirmidhī en Ibn Māja; al-Albānī noemde hem authentiek', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Nooit heeft bezit mij zo geholpen als het bezit van Abū Bakr', pages: [40] },
    { text: 'الثلث يا سعد، والثلث كثير، إنك أن تذر ذريتك أغنياء خير من أن تذرهم عالة يتكففون الناس', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'سعد بن أبي وقاص', narratorNl: 'Saʿd ibn Abī Waqqāṣ', nl: 'Een derde, Saʿd, en een derde is veel. Dat je je nakomelingen rijk achterlaat is beter dan dat je hen arm achterlaat, de mensen om iets vragend', pages: [40] },
    { text: 'فلا تشهدني إذا، فإني لا أشهد على جور', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'النعمان بن بشير', narratorNl: 'an-Nuʿmān ibn Bashīr', nl: 'Laat mij dan geen getuige zijn, want ik getuig niet van onrecht', pages: [41] },
    { text: 'أمسك عليك بعض مالك فهو خير لك', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'كعب بن مالك', narratorNl: 'Kaʿb ibn Mālik', nl: 'Houd een deel van je bezit voor jezelf; dat is beter voor je', pages: [41] },
    { text: 'إذا آتاك الله مالا فلير عليك', takhrij: 'رواه أحمد وأبو داود والنسائي وصححه الألباني', takhrijNl: 'Aḥmad, Abū Dāwūd en an-Nasāʾī; al-Albānī noemde hem authentiek', narrator: 'مالك بن نضلة', narratorNl: 'Mālik ibn Naḍla', nl: 'Als Allah je bezit heeft gegeven, laat het dan aan je te zien zijn', pages: [42] },
    { text: 'من قتل نفسا معاهدا لم يرح رائحة الجنة، وإن ريحها ليوجد من مسيرة أربعين عاما', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عبد الله بن عمرو', narratorNl: 'ʿAbd Allāh ibn ʿAmr', nl: 'Wie een verdragspartner doodt, ruikt de geur van het Paradijs niet, terwijl die geur te ruiken is op een afstand van veertig jaar reizen', pages: [43] },
    { text: 'فوالله لأن يهدي الله بك رجلا خير لك من حمر النعم', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'قاله لعلي يوم خيبر.', nlNote: 'Tegen ʿAlī bij Khaybar.', nl: 'Bij Allah, dat Allah door jou één man leidt, is beter voor je dan rode kamelen', pages: [43] },
    { text: 'إني لم أبعث لعانا، وإنما بعثت رحمة', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Ik ben niet gezonden als iemand die vervloekt; ik ben gezonden als barmhartigheid', pages: [44] },
    { text: 'أسلم ثم قاتل … عمل قليلا وأجر كثيرا', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'البراء', narratorNl: 'al-Barāʾ', nl: 'Word moslim en strijd daarna … Hij deed weinig en kreeg veel beloning', pages: [47] },
    { text: 'أسلمت على ما أسلفت من خير', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'لحكيم بن حزام.', nlNote: 'Tegen Ḥakīm ibn Ḥizām.', nl: 'Je bent moslim geworden met het goede dat je eerder deed', pages: [48] },
    { text: 'لو رجعتم إلى بلادكم فعلمتموهم … وإذا حضرت الصلاة فليؤذن لكم أحدكم، وليؤمكم أكبركم', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'مالك بن الحويرث', narratorNl: 'Mālik ibn al-Ḥuwayrith', nl: 'Keer terug naar jullie land en onderwijs hen … Als het gebed komt, laat één van jullie de oproep doen en de oudste van jullie voorgaan', pages: [49] }
  ],
  persons: [
    ['anas-ibn-malik', 'text', [35, 44, 48], 'روى حديث الحبيبتين وكرمه في التأليف على الإسلام.', 'Overleverde de hadith over de twee ogen en zijn vrijgevigheid om harten voor de islam te winnen.'],
    ['jabir-ibn-abdallah', 'text', [35], 'روى عيادة البصير في بني واقف.', 'Overleverde het bezoek aan de blinde bij Banū Wāqif.'],
    ['itban-ibn-malik', 'text', [35], 'صلى النبي ﷺ في بيته لما أنكر بصره.', 'De Profeet ﷺ bad in zijn huis toen hij slecht ging zien.'],
    ['mahmud-ibn-ar-rabi', 'text', [35], 'روى قصة عتبان.', 'Overleverde het verhaal van ʿItbān.'],
    ['umar-ibn-al-khattab', 'text', [36], 'روى دعاء رؤية المبتلى.', 'Overleverde de smeekbede bij het zien van een beproefde.'],
    ['abu-hurayra', 'text', [37, 38, 40], 'روى قصة المرأة التي كانت تقم المسجد.', 'Overleverde het verhaal van de vrouw die de moskee veegde.'],
    ['asma-bint-abi-bakr', 'text', [37], 'أعطاها النبي ﷺ خادما كفاها سياسة الفرس.', 'De Profeet ﷺ gaf haar een dienares die haar de zorg voor het paard afnam.'],
    ['az-zubayr-ibn-al-awwam', 'text', [37], 'زوج أسماء، تزوجها وما له شيء.', 'Echtgenoot van Asmāʾ; hij trouwde haar zonder bezit.'],
    ['abu-bakr-as-siddiq', 'text', [35, 40], 'شهد له النبي ﷺ بأنه واساه بنفسه وماله.', 'De Profeet ﷺ getuigde dat hij hem steunde met zichzelf en zijn bezit.'],
    ['abd-ar-rahman-ibn-awf', 'text', [40], 'من أغنياء الصحابة.', 'Een van de rijke metgezellen.'],
    ['uthman-ibn-affan', 'text', [40], 'من أغنياء الصحابة.', 'Een van de rijke metgezellen.'],
    ['sad-ibn-abi-waqqas', 'text', [40], 'استشار في الوصية بماله فقال له: الثلث والثلث كثير.', 'Vroeg raad over zijn testament; hem werd gezegd: een derde, en een derde is veel.'],
    ['an-numan-ibn-bashir', 'text', [41], 'روى قصة عطية أبيه.', 'Overleverde het verhaal van de gift van zijn vader.'],
    ['kab-ibn-malik', 'text', [41], 'أراد أن ينخلع من ماله في توبته.', 'Wilde bij zijn berouw afstand doen van al zijn bezit.'],
    ['malik-ibn-nadla', 'text', [42], 'أمره بإظهار نعمة الله عليه.', 'Kreeg de opdracht Allahs gunst aan zich te laten zien.'],
    ['ali-ibn-abi-talib', 'text', [38, 43], 'قيل له: لأن يهدي الله بك رجلا خير لك من حمر النعم.', 'Tegen hem werd gezegd: dat Allah door jou één man leidt, is beter dan rode kamelen.'],
    ['abdallah-ibn-amr', 'text', [43, 44], 'روى حديث المعاهد، وأهدى لجاره اليهودي.', 'Overleverde de hadith over de verdragspartner en stuurde zijn joodse buur een geschenk.'],
    ['aisha', 'text', [37, 44, 45], 'روت شراءه من اليهودي واستئجاره الدليل.', 'Overleverde zijn koop van de jood en het huren van de gids.'],
    ['ash-shawkani', 'text', [45], 'قال: فيه جواز استئجار المسلم للكافر على هداية الطريق.', 'Zei: hieruit blijkt dat een moslim een niet-moslim als gids mag huren.'],
    ['ikrima-ibn-abi-jahl', 'text', [46], 'فرح النبي ﷺ بإسلامه.', 'De Profeet ﷺ verheugde zich over zijn bekering.'],
    ['adi-ibn-hatim', 'text', [46], 'فرح النبي ﷺ بإسلامه.', 'De Profeet ﷺ verheugde zich over zijn bekering.'],
    ['abu-malik-al-ashjai', 'text', [46], 'روى تعليم من أسلم الصلاة والدعاء.', 'Overleverde dat wie moslim werd gebed en smeekbede leerde.'],
    ['qays-ibn-asim', 'text', [46], 'أمره بالغسل لما أسلم.', 'Kreeg de opdracht tot ghusl toen hij moslim werd.'],
    ['thumama-ibn-uthal', 'text', [46], 'أسلم فأمر أن يغتسل.', 'Werd moslim en kreeg de opdracht tot ghusl.'],
    ['at-tirmidhi', 'text', [47], 'قال: والعمل عليه عند أهل العلم.', 'Zei: zo handelen de geleerden.'],
    ['al-bara-ibn-azib', 'text', [47], 'روى قصة الرجل المقنع بالحديد.', 'Overleverde het verhaal van de man in wapenrusting.'],
    ['hakim-ibn-hizam', 'text', [48], 'بشر بثواب ما عمله قبل إسلامه.', 'Kreeg goed nieuws over het goede dat hij vóór zijn islam deed.'],
    ['ibn-rajab', 'text', [48], 'قال: حسنات الكافر إذا أسلم يثاب عليها.', 'Zei: voor de goede daden van een ongelovige wordt hij beloond als hij moslim wordt.'],
    ['malik-ibn-al-huwayrith', 'text', [49], 'أمر بتعليم قومه.', 'Kreeg de opdracht zijn volk te onderwijzen.']
  ],
  review: [
    ['يواسى المبتلى ويحث على الصبر وتراعى مشاعره.', 'De beproefde wordt getroost, tot geduld aangespoord en in zijn gevoelens gespaard.'],
    ['يتفقد الفقير ويحترم ويجالس ولا يتكبر عليه.', 'De arme wordt opgezocht, gerespecteerd en gezelschap gehouden, zonder hoogmoed.'],
    ['يرشد الغني إلى حسن التصرف والعدل بين أولاده.', 'De rijke wordt geleid in goed beheer en rechtvaardigheid tussen zijn kinderen.'],
    ['يعامل غير المسلم بالعدل ويدعى بالحكمة.', 'De niet-moslim wordt rechtvaardig behandeld en met wijsheid uitgenodigd.'],
    ['يفرح بالمسلم الجديد ويعلم ويتألف.', 'Over de nieuwe moslim verheugt men zich; hij wordt onderwezen en zijn hart wordt gewonnen.']
  ],
  quiz: [
    { type: 'mc', page: 35, q: ['ما المراد بـ«حبيبتيه»؟', 'Wat wordt bedoeld met "zijn twee geliefden"?'], options: [['عيناه', 'ولداه', 'يداه', 'أبواه'], ['zijn ogen', 'zijn twee kinderen', 'zijn handen', 'zijn ouders']], answer: 0, explain: ['لأنهما أحب أعضائه إليه.', 'Omdat zij hem de liefste lichaamsdelen zijn.'] },
    { type: 'tf', page: 36, q: ['يقول دعاء رؤية المبتلى جهرا ليسمعه.', 'De smeekbede bij het zien van een beproefde zeg je hardop, zodat hij het hoort.'], answer: 1, explain: ['يقوله سرا لا يسمعه المبتلى.', 'In stilte, zodat de beproefde het niet hoort.'] },
    { type: 'mc', page: 40, q: ['بم أشار النبي ﷺ على سعد في وصيته؟', 'Wat raadde de Profeet ﷺ Saʿd aan voor zijn testament?'], options: [['الثلث', 'النصف', 'الثلثان', 'المال كله'], ['een derde', 'de helft', 'twee derde', 'alles']], answer: 0, explain: ['والثلث كثير.', 'En een derde is veel.'] },
    { type: 'mc', page: 41, q: ['لماذا رفض النبي ﷺ الشهادة على عطية بشير؟', 'Waarom weigerde de Profeet ﷺ getuige te zijn van de gift van Bashīr?'], options: [['لأنه خص بها ولدا دون إخوته', 'لأنها قليلة', 'لأن الولد صغير', 'لأنها من مال حرام'], ['omdat hij één kind bevoordeelde boven de anderen', 'omdat het weinig was', 'omdat het kind jong was', 'omdat het verboden geld was']], answer: 0, explain: ['فإني لا أشهد على جور.', 'Want ik getuig niet van onrecht.'] },
    { type: 'tf', page: 45, q: ['يجوز للمسلم أن يستأجر غير المسلم فيما ينفع.', 'Een moslim mag een niet-moslim inhuren voor iets nuttigs.'], answer: 0, explain: ['استأجر النبي ﷺ دليلا مشركا في الهجرة.', 'De Profeet ﷺ huurde bij de hijra een polytheïstische gids.'] },
    { type: 'mc', page: 47, q: ['ما حكم غسل من أسلم عند الجمهور؟', 'Wat is volgens de meesten het oordeel over ghusl voor wie moslim wordt?'], options: [['مستحب', 'واجب', 'مكروه', 'بدعة'], ['aanbevolen', 'verplicht', 'afgeraden', 'vernieuwing']], answer: 0, explain: ['وقال بعض العلماء بوجوبه.', 'Sommige geleerden noemen het verplicht.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٣٦ و٣٩ و٤٢ و٤٥ و٤٩.', 'Oefeningen van het boek op p. 36, 39, 42, 45 en 49. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
