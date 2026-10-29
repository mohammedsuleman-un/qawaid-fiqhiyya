// Hoofdstukkaart bij الحديث (٤), eenheid 2: hadith 6–10 (lessen 7–11, boek p. 34–56).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-hadith/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-hadith',
  chapter: '7',
  unit: 2,
  source: {
    label: ['كتاب الحديث (٤)، سلسلة زاد العلمية', 'Al-Ḥadīth (4), Zad-reeks'],
    pages: '34–56',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ٦–١٠', 'Hadith 6–10'],
  subtitle: ['خمسة أحاديث في خمسة دروس', 'Vijf hadith in vijf lessen'],
  summary: [
    'خمسة أحاديث: تغيير المنكر باليد ثم اللسان ثم القلب، وتجاوز الله عن الأمة الخطأ والنسيان والإكراه، وقاعدة «لا ضرر ولا ضرار»، والبينة على المدعي واليمين على من أنكر، وحق الطريق لمن جلس فيه.',
    'Vijf hadith: het kwade veranderen met de hand, dan de tong, dan het hart; Allah vergeeft de umma fout, vergeten en dwang; de regel "geen schade en geen wederzijdse schade"; het bewijs ligt bij de eiser en de eed bij wie ontkent; en het recht van de weg voor wie erlangs zit.'
  ],
  map: {
    title: ['الأحاديث الخمسة في خريطة واحدة', 'De vijf hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٤)', 'Hadith (4)'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['من رأى منكم منكرا', 'Wie van jullie iets kwaads ziet'], sub: ['الحديث ٦', 'hadith 6'], page: 34, children: [['اليد ثم اللسان ثم القلب', 'hand, tong, hart'], ['شروط تغيير المنكر', 'voorwaarden']] },
      { label: ['تجاوز الله عن أمتي', 'Allah vergeeft mijn umma'], sub: ['الحديث ٧', 'hadith 7'], page: 39, children: [['الخطأ والنسيان والإكراه', 'fout, vergeten, dwang'], ['فعل المحظور وترك الواجب', 'verboden daad en nagelaten plicht']] },
      { label: ['لا ضرر ولا ضرار', 'Geen schade en geen wederzijdse schade'], sub: ['الحديث ٨', 'hadith 8'], page: 44, children: [['الضرر يزال', 'schade wordt weggenomen'], ['صور الضرر المحرم', 'verboden vormen van schade']] },
      { label: ['البينة على المدعي', 'Het bewijs bij de eiser'], sub: ['الحديث ٩', 'hadith 9'], page: 48, children: [['اليمين على من أنكر', 'de eed bij wie ontkent'], ['القضاء بالنكول', 'beslissen bij weigering']] },
      { label: ['حق الطريق', 'Het recht van de weg'], sub: ['الحديث ١٠', 'hadith 10'], page: 52, children: [['غض البصر وكف الأذى', 'blik neerslaan, kwelling weren'], ['رد السلام والأمر والنهي', 'groet beantwoorden, goed gebieden, kwaad verbieden']] }
    ]
  },
  points: [
    [34, 'المنكر المراد ما كان منكرا ظاهرا مجمعا عليه، أما مسائل الاجتهاد فلا ينكر فيها.', 'Bedoeld is een duidelijk kwaad waarover men het eens is; in kwesties van ijtihād wordt niet afgekeurd.'],
    [35, 'مراتب الإنكار ثلاث بحسب المنكر وحال المنكر: اليد، ثم اللسان، ثم القلب.', 'Afkeuren kent drie rangen, naargelang het kwaad en de persoon: met de hand, dan met de tong, dan met het hart.'],
    [37, 'لا يكفي الإنكار بالقلب لمن جلس مع أهل المنكر، لأنه لو كرهه حقا لفارقهم.', 'Afkeuren met het hart volstaat niet voor wie bij de mensen van het kwaad blijft zitten: als hij het echt verafschuwde, had hij hen verlaten.'],
    [39, 'الأمة أمتان: أمة الدعوة وهم كل الإنس والجن من بعثته إلى قيام الساعة، وأمة الإجابة وهم المسلمون، وهي المرادة في الحديث.', 'De umma is tweeërlei: ummat ad-daʿwa, alle mensen en djinn vanaf zijn zending tot het Uur, en ummat al-ijāba, de moslims; de laatste is in de hadith bedoeld.'],
    [42, 'الجهل بالحكم عذر، والجهل بالعقوبة ليس بعذر.', 'Onwetendheid over de bepaling is een excuus; onwetendheid over de straf niet.'],
    [45, 'حديث «لا ضرر ولا ضرار» من القواعد الخمس الكلية في الفقه، ويعبر عنه بـ«الضرر يزال».', '"Geen schade en geen wederzijdse schade" is een van de vijf algemene regels van het recht, ook uitgedrukt als "schade wordt weggenomen".'],
    [49, 'البينة على المدعي لأنه يدعي خلاف الظاهر، واليمين على المدعى عليه لأنه موافق للأصل وهو براءة الذمة.', 'Het bewijs ligt bij de eiser omdat hij iets tegen het uiterlijke beweert; de eed bij de gedaagde omdat hij overeenstemt met het uitgangspunt: vrijheid van aansprakelijkheid.'],
    [53, 'النهي في حديث الطرقات ليس عن الجلوس نفسه بل عما يضيع فيه من حقوق الطريق.', 'Het verbod in de hadith over de wegen betreft niet het zitten zelf, maar de rechten van de weg die daarbij verloren gaan.']
  ],
  terms: [
    ['المنكر', 'al-munkar', 34, 'كل ما نهى الله عنه.', 'Alles wat Allah verboden heeft.'],
    ['تجاوز', 'tajāwaza', 39, 'عفا ورفع.', 'Vergaf en hief op.'],
    ['الخطأ', 'al-khaṭaʾ', 40, 'أن يفعل الإنسان الفعل من غير قصد.', 'Een daad zonder opzet begaan.'],
    ['النسيان', 'an-nisyān', 40, 'ذهول القلب عن شيء معلوم من قبل.', 'Het hart dat afdwaalt van iets dat eerder bekend was.'],
    ['الإكراه', 'al-ikrāh', 40, 'أن يحمل على قول أو فعل ويلجأ إليه.', 'Tot een woord of daad gedwongen worden.'],
    ['الضرار', 'aḍ-ḍirār', 44, 'قيل: ما كان عن قصد، والضرر ما كان بغير قصد.', 'Volgens één uitleg: wat met opzet gebeurt; ḍarar is wat zonder opzet gebeurt.'],
    ['البينة', 'al-bayyina', 48, 'كل ما يبين الحق ويظهره من شهود وقرائن.', 'Alles wat de waarheid duidelijk maakt: getuigen, aanwijzingen.'],
    ['النكول', 'an-nukūl', 50, 'لغة: الامتناع، واصطلاحا: الامتناع عن اليمين المطلوبة شرعا.', 'Taalkundig: weigeren; technisch: weigeren de religieus gevraagde eed af te leggen.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['شروط تغيير المنكر', 'Voorwaarden om het kwade te veranderen'],
      intro: ['كما في الصفحة ٣٦.', 'Zoals op p. 36.'],
      nodes: [
        [36, 'العلم', 'Kennis', 'بالمعروف والمنكر', 'van het goede en het kwade'],
        [36, 'التحقق', 'Zekerheid', 'لا بالتهمة والظن', 'niet op verdenking of vermoeden'],
        [36, 'ألا يزول بأنكر منه', 'Geen groter kwaad', 'لا يزال المنكر بما هو أشد', 'het kwaad niet wegnemen met iets ergers'],
        [36, 'الإخلاص', 'Oprechte bedoeling', 'إصلاح الخلق لا الانتقام', 'verbetering, geen wraak'],
        [36, 'الظهور', 'Zichtbaarheid', 'بلا تجسس على من استتر', 'zonder te spioneren bij wie het verbergt']
      ]
    },
    {
      type: 'compare',
      title: ['العذر في فعل المحظور وترك الواجب', 'Excuus bij een verboden daad en een nagelaten plicht'],
      intro: ['في حقوق الله، ص ٤٢.', 'Bij de rechten van Allah, p. 42.'],
      columns: [['الحكم', 'Gevolg'], ['أمثلة', 'Voorbeelden']],
      rows: [
        { label: ['فعل المحظور', 'Verboden daad'], cells: [['لا إثم ولا شيء عليه', 'geen zonde en niets verplicht'], ['الكلام في الصلاة خطأ، الأكل في الصوم ناسيا، الطيب في الإحرام جهلا', 'per vergissing spreken in het gebed, vergeten eten tijdens het vasten, parfum in iḥrām uit onwetendheid']] },
        { label: ['ترك الواجب', 'Nagelaten plicht'], cells: [['لا إثم، لكن يجب تداركه', 'geen zonde, maar hij moet het alsnog doen'], ['نسيان ركعة أو صلاة، ترك طواف الإفاضة إكراها', 'een rakʿa of gebed vergeten, ṭawāf al-ifāḍa nalaten onder dwang']] }
      ],
      page: 42
    },
    {
      type: 'cards',
      title: ['حقوق الطريق', 'De rechten van de weg'],
      intro: ['كما في حديث أبي سعيد ص ٥٢.', 'Zoals in de hadith van Abū Saʿīd, p. 52.'],
      nodes: [
        [53, 'غض البصر', 'De blik neerslaan', '﴿قل للمؤمنين يغضوا من أبصارهم﴾', '"Zeg tot de gelovige mannen dat zij hun blik neerslaan"'],
        [54, 'كف الأذى', 'Kwelling weren', 'بالقول والفعل، ومنه إماطة الأذى عن الطريق', 'met woord en daad, ook hinder van de weg halen'],
        [55, 'رد السلام', 'De groet beantwoorden', 'الرد واجب والابتداء سنة', 'beantwoorden is verplicht, beginnen sunna'],
        [55, 'الأمر بالمعروف والنهي عن المنكر', 'Goed gebieden en kwaad verbieden', '', '']
      ]
    }
  ],
  sections: [
    [37, 'خطر ترك الأمر بالمعروف', 'Het gevaar van nalaten', 'إذا ترك الأمر بالمعروف والنهي عن المنكر ألف الناس المنكر وزالت كراهيته من قلوبهم فانتشر، وكان بنو إسرائيل ﴿لا يتناهون عن منكر فعلوه﴾ فلعنوا.', 'Als het goede gebieden en kwade verbieden wordt nagelaten, raken de mensen aan het kwaad gewend, verdwijnt de afschuw uit hun harten en verspreidt het zich. De kinderen van Israël "verboden elkaar niet het kwaad dat zij deden" en werden vervloekt.'],
    [41, 'حالتا أفعال العباد', 'Twee toestanden van menselijke daden', 'أفعال العباد إما عن قصد واختيار فيؤاخذ بها، وإما بغير قصد واختيار كالإكراه والنسيان والخطأ فلا يؤاخذ بها. قال النووي: لو جمعت فوائد هذا الحديث لبلغت مصنفا.', 'Menselijke daden gebeuren met opzet en vrije keuze, en worden dan aangerekend, of zonder opzet en keuze, zoals bij dwang, vergeten en fout, en worden dan niet aangerekend. An-Nawawī: verzamelde men de lessen van deze hadith, dan werd het een boek.'],
    [42, 'حقوق العباد', 'Rechten van de dienaren', 'في حقوق العباد لا يعتبر الخطأ والنسيان والجهل والإكراه عذرا في إسقاط الضمان، ولذلك أوجب الله الدية في قتل الخطأ.', 'Bij de rechten van de dienaren gelden fout, vergeten, onwetendheid en dwang niet als excuus om de aansprakelijkheid te laten vervallen; daarom verplichtte Allah bloedgeld bij doodslag per vergissing.'],
    [46, 'تحريم ما يضر', 'Wat schaadt is verboden', 'في الحديث دليل على تحريم الخمر والمخدرات والدخان ونحوها مما يضر البدن أو يضر من يعيش معه.', 'De hadith bewijst het verbod op wijn, drugs, roken en dergelijke, die het lichaam schaden of wie met de gebruiker samenleeft.'],
    [50, 'العمل بالقرائن', 'Werken met aanwijzingen', 'من البينة القرائن، ومن ذلك قصة سليمان مع المرأتين اللتين ادعت كل منهما الولد.', 'Ook aanwijzingen zijn bewijs, zoals in het verhaal van Sulaymān en de twee vrouwen die elk het kind claimden.']
  ],
  keycards: [
    ['opsomming', 45, 'من صور الضرر المحرم', 'Verboden vormen van schade', ['التدليس والغش وكتمان العيوب', 'النجش', 'البيع على بيع أخيه والخطبة على خطبته', 'إضرار الزوج والجار والمعلم والمدير', 'ترويع المسلم ولو مازحا'], ['misleiding, bedrog en gebreken verbergen', 'prijsopdrijving (najsh)', 'verkopen over de koop van je broeder, aanzoek over zijn aanzoek', 'schade door partner, buur, leraar of leidinggevende', 'een moslim laten schrikken, ook als grap']],
    ['opsomming', 54, 'مما يعين على غض البصر', 'Wat helpt de blik neer te slaan', ['تذكر أن الله يراك', 'الاستعانة بالله ودعاؤه', 'مجاهدة النفس', 'اجتناب مواطن الفتنة', 'كثرة النوافل', 'تذكر الحسرة بعد النظر'], ['bedenken dat Allah je ziet', 'hulp zoeken bij Allah en Hem aanroepen', 'strijd tegen de ziel', 'plaatsen van verleiding mijden', 'veel vrijwillige aanbidding', 'denken aan de spijt na het kijken']],
    ['bewijs', 49, 'الإجماع على قاعدة الدعوى', 'Consensus over de regel van de claim', ['قال ابن المنذر: أجمع أهل العلم على أن البينة على المدعي، واليمين على المدعى عليه'], ['Ibn al-Mundhir: de geleerden zijn het erover eens dat het bewijs bij de eiser ligt en de eed bij de gedaagde']]
  ],
  hadith: [
    { text: 'من رأى منكم منكرا فليغيره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'Wie van jullie iets kwaads ziet, laat hij het met zijn hand veranderen; kan hij dat niet, dan met zijn tong; kan hij dat niet, dan met zijn hart, en dat is het zwakste geloof', pages: [34] },
    { text: 'إن الناس إذا رأوا المنكر لا يغيرونه، أوشك أن يعمهم الله بعقابه', takhrij: 'أخرجه أبو داود وابن ماجه واللفظ له، وصححه الألباني', takhrijNl: 'Abū Dāwūd en Ibn Māja (zijn bewoording); ṣaḥīḥ volgens al-Albānī', narrator: 'أبو بكر الصديق', narratorNl: 'Abū Bakr aṣ-Ṣiddīq', note: 'قاله أبو بكر لما بين معنى ﴿عليكم أنفسكم﴾.', nlNote: 'Abū Bakr noemde dit toen hij "Zorg voor jezelf" uitlegde.', nl: 'Als de mensen het kwade zien en het niet veranderen, dan zal Allah hen weldra allen met Zijn straf treffen', pages: [35] },
    { text: 'والذي نفسي بيده لتأمرن بالمعروف ولتنهون عن المنكر أو ليوشكن الله أن يبعث عليكم عقابا منه، ثم تدعونه فلا يستجاب لكم', takhrij: 'أخرجه الترمذي وحسنه', takhrijNl: 'at-Tirmidhī, die het ḥasan noemde', narrator: 'حذيفة بن اليمان', narratorNl: 'Ḥudhayfa ibn al-Yamān', nl: 'Bij Hem in Wiens hand mijn ziel is: jullie zullen het goede gebieden en het kwade verbieden, of Allah zal weldra een straf over jullie zenden; dan roepen jullie Hem aan en wordt jullie niet geantwoord', pages: [35] },
    { text: 'إن الله قد تجاوز عن أمتي الخطأ، والنسيان، وما استكرهوا عليه', takhrij: 'رواه أحمد وابن ماجه، وصححه الألباني', takhrijNl: 'Aḥmad en Ibn Māja; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو ذر الغفاري', narratorNl: 'Abū Dharr al-Ghifārī', nl: 'Allah heeft mijn umma fout, vergeten en waartoe zij gedwongen werden vergeven', pages: [39] },
    { text: 'قد فعلت', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', note: 'جواب الله لدعاء ﴿ربنا لا تؤاخذنا إن نسينا أو أخطأنا﴾.', nlNote: 'Allahs antwoord op de smeekbede "Onze Heer, reken ons niet aan als wij vergeten of fouten maken".', nl: 'Dat heb Ik gedaan', pages: [40] },
    { text: 'قضى أن لا ضرر ولا ضرار', takhrij: 'أخرجه أحمد ومالك في الموطأ، وصححه الألباني', takhrijNl: 'Aḥmad en Mālik in al-Muwaṭṭaʾ; ṣaḥīḥ volgens al-Albānī', narrator: 'عبادة بن الصامت', narratorNl: 'ʿUbāda ibn aṣ-Ṣāmit', nl: 'Hij besliste dat er geen schade en geen wederzijdse schade is', pages: [44] },
    { text: 'لو يعطى الناس بدعواهم لادعى رجال أموال قوم ودماءهم، ولكن البينة على المدعي، واليمين على من أنكر', takhrij: 'رواه البيهقي بسند حسن، وبعضه في الصحيحين', takhrijNl: 'al-Bayhaqī met een goede keten; een deel staat bij al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Als mensen kregen wat zij beweren, zouden mannen het bezit en bloed van anderen opeisen; maar het bewijs ligt bij de eiser en de eed bij wie ontkent', pages: [48] },
    { text: 'إياكم والجلوس بالطرقات … فأعطوا الطريق حقه … غض البصر، وكف الأذى، ورد السلام، والأمر بالمعروف، والنهي عن المنكر', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'Pas op voor het zitten langs de wegen … geef de weg dan zijn recht … de blik neerslaan, kwelling weren, de groet beantwoorden, het goede gebieden en het kwade verbieden', pages: [52] },
    { text: 'هي في النار', takhrij: 'أخرجه أحمد والحاكم، وصحح إسناده', takhrijNl: 'Aḥmad en al-Ḥākim, die de keten ṣaḥīḥ noemde', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'عن امرأة تذكر بكثرة صلاتها وصيامها وصدقتها غير أنها تؤذي جيرانها بلسانها.', nlNote: 'Over een vrouw die bekendstond om veel gebed, vasten en liefdadigheid, maar haar buren kwetste met haar tong.', nl: 'Zij is in het Vuur', pages: [54] },
    { text: 'بينما رجل يمشي بطريق وجد غصن شوك على الطريق، فأخره فشكر الله له فغفر له', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Een man liep op een weg en vond een doornige tak op de weg; hij haalde hem weg, Allah waardeerde het en vergaf hem', pages: [54] },
    { text: 'تطعم الطعام وتقرأ السلام على من عرفت ومن لم تعرف', takhrij: 'في الصحيحين', takhrijNl: 'al-Bukhārī en Muslim', note: 'جواب من سأل: أي الإسلام خير؟', nlNote: 'Antwoord aan wie vroeg welke daden het beste zijn.', nl: 'Dat je voedsel geeft en groet wie je kent en wie je niet kent', pages: [55] },
    { text: 'لا تدخلون الجنة حتى تؤمنوا، ولا تؤمنوا حتى تحابوا، أولا أدلكم على شيء إذا فعلتموه تحاببتم، أفشوا السلام بينكم', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'Jullie gaan het Paradijs niet binnen tot jullie geloven, en jullie geloven niet tot jullie elkaar liefhebben. Zal ik jullie iets wijzen waardoor jullie elkaar liefhebben als jullie het doen? Verspreid de groet onder elkaar', pages: [55] }
  ],
  persons: [
    ['abu-said-al-khudri', 'text', [34, 52], 'راوي حديثي تغيير المنكر وحق الطريق؛ من فقهاء الصحابة، شهد الخندق وما بعدها.', 'Overleveraar van de hadith over het kwaad veranderen en het recht van de weg; een rechtsgeleerde metgezel, aanwezig bij al-Khandaq en daarna.'],
    ['muslim', 'takhrij', [34, 40, 55], 'روى حديث تغيير المنكر وغيره.', 'Overleverde de hadith over het kwaad veranderen en andere.'],
    ['abu-bakr-as-siddiq', 'text', [35], 'بين أن ترك تغيير المنكر سبب لعموم العقاب.', 'Legde uit dat het kwaad niet veranderen algemene straf brengt.'],
    ['abu-dawud', 'takhrij', [35], 'روى حديث أبي بكر.', 'Overleverde de hadith van Abū Bakr.'],
    ['ibn-maja', 'takhrij', [35, 39], 'روى حديث أبي بكر وحديث أبي ذر.', 'Overleverde de hadith van Abū Bakr en die van Abū Dharr.'],
    ['al-albani', 'takhrij', [35, 39, 44], 'صحح الأحاديث.', 'Verklaarde de hadith ṣaḥīḥ.'],
    ['hudhayfa-ibn-al-yaman', 'text', [35], 'روى «لتأمرن بالمعروف».', 'Overleverde "jullie zullen het goede gebieden".'],
    ['at-tirmidhi', 'takhrij', [35], 'روى حديث حذيفة وحسنه.', 'Overleverde de hadith van Ḥudhayfa en noemde hem ḥasan.'],
    ['abu-dharr', 'text', [39], 'راوي حديث التجاوز؛ رابع من أسلم، توفي بالربذة سنة ٣٢ هـ.', 'Overleveraar van de hadith over vergeving; de vierde die moslim werd, stierf in ar-Rabadha in 32 n.H.'],
    ['ahmad-ibn-hanbal', 'takhrij', [39, 44, 54], 'روى حديث أبي ذر وعبادة وحديث المرأة المؤذية.', 'Overleverde de hadith van Abū Dharr, van ʿUbāda en die over de kwetsende vrouw.'],
    ['an-nawawi', 'text', [41], 'قال: لو جمعت فوائد حديث التجاوز لبلغت مصنفا.', 'Zei dat de lessen van deze hadith samen een boek zouden vormen.'],
    ['ubada-ibn-as-samit', 'text', [44], 'راوي «لا ضرر ولا ضرار»؛ شهد العقبتين وبدرا، توفي سنة ٣٤ هـ.', 'Overleveraar van "geen schade"; aanwezig bij beide ʿAqaba-eden en Badr, stierf in 34 n.H.'],
    ['abu-marthad-al-ghanawi', 'text', [44], 'آخى النبي ﷺ بينه وبين عبادة.', 'De Profeet ﷺ verbroederde hem met ʿUbāda.'],
    ['malik-ibn-anas', 'takhrij', [44], 'روى «لا ضرر ولا ضرار» في الموطأ.', 'Overleverde "geen schade" in al-Muwaṭṭaʾ.'],
    ['ibn-abbas', 'text', [48], 'راوي حديث البينة؛ حبر الأمة، توفي بالطائف سنة ٦٨ هـ.', 'Overleveraar van de hadith over het bewijs; de geleerde van de umma, stierf in aṭ-Ṭāʾif in 68 n.H.'],
    ['al-bayhaqi', 'takhrij', [48], 'روى حديث البينة بسند حسن.', 'Overleverde de hadith over het bewijs met een goede keten.'],
    ['ibn-al-mundhir', 'text', [49], 'نقل الإجماع على أن البينة على المدعي.', 'Meldde consensus dat het bewijs bij de eiser ligt.'],
    ['abu-hurayra', 'text', [54], 'روى حديث المرأة المؤذية وغصن الشوك.', 'Overleverde de hadith over de kwetsende vrouw en de doornige tak.'],
    ['al-hakim', 'takhrij', [54], 'روى حديث المرأة المؤذية وصحح إسناده.', 'Overleverde de hadith over de kwetsende vrouw en noemde de keten ṣaḥīḥ.'],
    ['al-bukhari', 'takhrij', [52, 54, 55], 'روى حديث الطرقات وغصن الشوك والسلام.', 'Overleverde de hadith over de wegen, de doornige tak en de groet.']
  ],
  review: [
    ['يغير المنكر باليد ثم اللسان ثم القلب بشروطه.', 'Het kwaad wordt veranderd met hand, dan tong, dan hart, onder voorwaarden.'],
    ['تجاوز الله عن الأمة الخطأ والنسيان والإكراه.', 'Allah vergaf de umma fout, vergeten en dwang.'],
    ['لا ضرر ولا ضرار، والضرر يزال.', 'Geen schade en geen wederzijdse schade; schade wordt weggenomen.'],
    ['البينة على المدعي واليمين على من أنكر.', 'Het bewijs ligt bij de eiser, de eed bij wie ontkent.'],
    ['للطريق حقوق: غض البصر وكف الأذى ورد السلام والأمر والنهي.', 'De weg heeft rechten: blik neerslaan, kwelling weren, groet beantwoorden, goed gebieden en kwaad verbieden.']
  ],
  quiz: [
    { type: 'mc', page: 34, q: ['ما أضعف الإيمان في حديث أبي سعيد؟', 'Wat is het zwakste geloof in de hadith van Abū Saʿīd?'], options: [['الإنكار بالقلب', 'الإنكار باللسان', 'الإنكار باليد', 'ترك الإنكار'], ['afkeuren met het hart', 'met de tong', 'met de hand', 'niet afkeuren']], answer: 0, explain: ['«فإن لم يستطع فبقلبه، وذلك أضعف الإيمان».', '"Kan hij dat niet, dan met zijn hart, en dat is het zwakste geloof".'] },
    { type: 'tf', page: 34, q: ['ينكر على المخالف في مسائل الاجتهاد كما ينكر المنكر المجمع عليه.', 'In kwesties van ijtihād wordt net zo afgekeurd als bij een kwaad waarover consensus is.'], answer: 1, explain: ['مسائل الاجتهاد لا ينكر فيها إلا إذا كان الخلاف ضعيفا.', 'In ijtihād-kwesties wordt niet afgekeurd, tenzij het verschil zwak is.'] },
    { type: 'mc', page: 39, q: ['ما المراد بـ«أمتي» في حديث التجاوز؟', 'Wat is "mijn umma" in de hadith over vergeving?'], options: [['أمة الإجابة', 'أمة الدعوة', 'العرب خاصة', 'الصحابة فقط'], ['ummat al-ijāba (de moslims)', 'ummat ad-daʿwa (alle mensen)', 'alleen de Arabieren', 'alleen de metgezellen']], answer: 0, explain: ['أمة الإجابة الذين أسلموا.', 'De umma die gehoor gaf en moslim werd.'] },
    { type: 'mc', page: 42, q: ['من نسي صلاة ماذا عليه؟', 'Wat moet wie een gebed vergat?'], options: [['أن يصليها', 'لا شيء عليه', 'كفارة', 'سجود السهو فقط'], ['het alsnog verrichten', 'niets', 'een boete', 'alleen sujūd as-sahw']], answer: 0, explain: ['ترك الواجب نسيانا لا إثم فيه لكن يجب تداركه.', 'Een plicht vergeten is geen zonde, maar moet worden ingehaald.'] },
    { type: 'tf', page: 42, q: ['الجهل بالعقوبة عذر يسقطها.', 'Onwetendheid over de straf is een excuus dat haar laat vervallen.'], answer: 1, explain: ['الجهل بالحكم عذر، أما الجهل بالعقوبة فلا.', 'Onwetendheid over de bepaling is een excuus, over de straf niet.'] },
    { type: 'mc', page: 49, q: ['لماذا كانت اليمين على المدعى عليه؟', 'Waarom ligt de eed bij de gedaagde?'], options: [['لأنه موافق للأصل وهو براءة الذمة', 'لأنه أصدق', 'لأنه أقوى', 'لأن المدعي لا يحلف أبدا'], ['omdat hij overeenstemt met het uitgangspunt: vrijheid van aansprakelijkheid', 'omdat hij eerlijker is', 'omdat hij sterker is', 'omdat de eiser nooit zweert']], answer: 0, explain: ['والمدعي يدعي خلاف الظاهر فعليه البينة.', 'De eiser beweert iets tegen het uiterlijke, dus moet hij bewijzen.'] },
    { type: 'mc', page: 55, q: ['ما حكم رد السلام؟', 'Wat is de status van het beantwoorden van de groet?'], options: [['واجب', 'سنة', 'مباح', 'مكروه'], ['verplicht', 'sunna', 'toegestaan', 'afgeraden']], answer: 0, explain: ['الرد واجب والابتداء سنة.', 'Beantwoorden is verplicht, beginnen is sunna.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٣٨ و٤٣ و٤٧ و٥١ و٥٦.', 'Oefeningen van het boek op p. 38, 43, 47, 51 en 56. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
