// Hoofdstukkaart eenheid 5 van تلخيص جمع الجوامع: اللغات (p. 35–46).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p035–p046.html).
import { kaart } from './kaart.js'

export default kaart({
  unit: 5,
  subtitle: ['تسعة فصول: الوضع والمحكم والمتشابه، أصل اللغة والقياس فيها، أقسام اللفظ، الاشتقاق، والترادف والمشترك', 'Negen onderdelen: taal als aanduiding, het eenduidige en het dubbelzinnige, de oorsprong van taal en analogie erin, soorten woorden, afleiding, synoniemen en meerduidige woorden'],
  summary: [
    'تتناول الوحدة حدوث الموضوعات اللغوية وتعريفها وطرق معرفتها ومدلول اللفظ والوضع، ثم المحكم والمتشابه، وأصل اللغة أتوقيفية أم اصطلاحية، وثبوتها بالقياس، ثم أقسام اللفظ والمعنى (الجزئي والكلي، المتواطئ والمشكك، المتباين والمترادف والمشترك، والعلم)، ثم الاشتقاق وشروطه وأحكامه، ووقوع الترادف والمشترك، وإطلاق المشترك على معنييه.',
    'Dit hoofdstuk gaat over het ontstaan van taal, haar definitie, hoe men taal kent, wat een woord aanduidt en wat "waḍʿ" is; dan het eenduidige (muḥkam) en dubbelzinnige (mutashābih); of taal door Allah geleerd of door mensen afgesproken is; of taal door analogie ontstaat; de soorten woorden en betekenissen; afleiding (ishtiqāq) met haar voorwaarden en regels; of synoniemen en meerduidige woorden bestaan; en of een meerduidig woord beide betekenissen tegelijk kan hebben.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 35 إلى 46.', 'Bladzijde 35 tot 46.'],
    root: [0, 'اللغات', 'Taal', 'الوحدة الخامسة', 'Eenheid 5'],
    nodes: [
      [35, 'الموضوعات اللغوية', 'Taal als aanduiding', 'ص 35–37', 'p. 35–37', [['تعريفها', 'definitie'], ['طرق معرفتها', 'hoe men haar kent'], ['الوضع', 'waḍʿ']]],
      [37, 'المحكم والمتشابه', 'Eenduidig en dubbelzinnig', 'ص 37–38', 'p. 37–38', [['الوقف في آية آل عمران', 'de pauze in de aya']]],
      [38, 'أصل اللغة والقياس فيها', 'Oorsprong en analogie', 'ص 38–39', 'p. 38–39', [['توقيفية أم اصطلاحية', 'door Allah of afgesproken'], ['هل تثبت قياساً', 'via analogie?']]],
      [39, 'أقسام اللفظ والمعنى', 'Soorten woorden', 'ص 39–40', 'p. 39–40', [['جزئي وكلي', 'bijzonder en algemeen'], ['متباين ومترادف ومشترك', 'verschillend, synoniem, meerduidig'], ['العلم', 'eigennaam']]],
      [40, 'الاشتقاق', 'Afleiding', 'ص 40–43', 'p. 40–43', [['شروطه', 'voorwaarden'], ['بقاء المشتق منه', 'blijven van de grondbetekenis']]],
      [43, 'الترادف والمشترك', 'Synoniemen en meerduidigheid', 'ص 43–46', 'p. 43–46', [['وقوعهما', 'bestaan ze?'], ['إطلاق المشترك على معنييه', 'beide betekenissen tegelijk']]]
    ]
  },
  points: [
    [35, 'من ألطاف الله حدوث الموضوعات اللغوية ليُعبَّر بها عما في الضمير، وهي أفيد من الإشارة والمثال وأيسر.', 'Het is Allahs vriendelijkheid dat Hij taal liet ontstaan om uit te drukken wat in iemand omgaat; nuttiger en makkelijker dan gebaren en voorbeelden.'],
    [36, 'اللغة تُعرف بالنقل متواتراً وآحاداً، أو باستنباط العقل من النقل، لا بمجرد العقل.', 'Taal kent men door overlevering (breed of door enkelen), of doordat het verstand uit de overlevering afleidt, niet door het verstand alleen.'],
    [37, 'المحكم المتضح المعنى، والمتشابه ما استأثر الله بعلمه، وقد يُطلع عليه بعض أصفيائه.', 'Muḥkam is wat een duidelijke betekenis heeft; mutashābih is wat Allah voor Zichzelf houdt, al kan Hij sommige uitverkorenen inzicht geven.'],
    [38, 'اختار المصنف التوقف في أصل اللغة، وأن التوقيف مظنون.', 'De auteur kiest geen definitieve uitspraak over de oorsprong van taal; dat ze van Allah komt, is waarschijnlijk.'],
    [39, 'اللفظ والمعنى إن اتحدا فجزئي أو كلي (متواطئ أو مشكك)، وإن تعددا فمتباين، وإن اتحد المعنى فمترادف، وإن اتحد اللفظ فمشترك أو حقيقة ومجاز.', 'Eén woord met één betekenis: bijzonder of algemeen (gelijkmatig of in graden); verschillende woorden en betekenissen: verschillend; één betekenis, meerdere woorden: synoniem; één woord, meerdere betekenissen: meerduidig, of letterlijk en figuurlijk.'],
    [41, 'من لم يقم به وصف لم يجز أن يُشتق له منه اسم، خلافاً للمعتزلة.', 'Wie een eigenschap niet heeft, krijgt daaruit geen afgeleide naam, anders dan de Muʿtazila zeggen.'],
    [43, 'الترادف واقع عند الجمهور، خلافاً لثعلب وابن فارس مطلقاً والرازي في الأسماء الشرعية.', 'Synoniemen bestaan volgens de meerderheid, anders dan Thaʿlab en Ibn Fāris (nooit) en ar-Rāzī (niet bij sharʿī-namen).'],
    [45, 'المشترك يصح إطلاقه على معنييه معاً مجازاً، وعن الشافعي حقيقة، وهو ظاهر فيهما عند التجرد عن القرائن.', 'Een meerduidig woord kan figuurlijk beide betekenissen tegelijk dragen; volgens ash-Shāfiʿī letterlijk, en zonder aanwijzingen slaat het op beide.']
  ],
  terms: [
    ['الموضوعات اللغوية', 'al-mawḍūʿāt al-lughawiyya', 36, 'الألفاظ الدالة على المعاني.', 'Woorden die betekenissen aanduiden.', '"الألفاظ" تخرج الإشارة والكتابة، و"الدالة على المعاني" تخرج ما لا معنى له.', '"Woorden" sluit gebaren en schrift uit, "die betekenissen aanduiden" wat geen betekenis heeft.'],
    ['الوضع', 'al-waḍʿ', 36, 'جعل اللفظ دليلاً على المعنى.', 'Een woord tot aanduiding van een betekenis maken.', 'ولا يشترط مناسبة اللفظ للمعنى، كالقرء للحيض والطهر، خلافاً لعباد بن سليمان.', 'Woord en betekenis hoeven niet bij elkaar te passen, zoals qurʾ voor menstruatie en reinheid; anders dan ʿAbbād ibn Sulaymān.'],
    ['المحكم', 'al-muḥkam', 37, 'المتضح المعنى بحيث لا تختلف فيه الأفهام.', 'Wat zo duidelijk is dat niemand het anders begrijpt.'],
    ['المتشابه', 'al-mutashābih', 37, 'ما استأثر الله بعلمه.', 'Wat Allah voor Zichzelf houdt.', 'كالحروف المقطعة.', 'Zoals de losse letters aan het begin van soera’s.'],
    ['اللغة التوقيفية', 'at-tawqīf', 38, 'أن الله علم اللغات بالوحي أو بخلق أصوات أو علم ضروري.', 'Dat Allah de talen leerde, via openbaring, geschapen klanken of noodzakelijke kennis.', 'قول ابن فورك والجمهور، ودليلهم ﴿وعلم آدم الأسماء كلها﴾.', 'Mening van Ibn Fūrak en de meerderheid; bewijs: "en Hij leerde Ādam alle namen".'],
    ['اللغة الاصطلاحية', 'al-iṣṭilāḥ', 38, 'أن البشر وضعوها واصطلحوا عليها، وعُرفت بالقرينة والإشارة كالطفل.', 'Dat mensen taal afspraken en anderen haar leerden via aanwijzingen en gebaren, zoals een kind.', 'قول أكثر المعتزلة.', 'Mening van de meeste Muʿtazila.'],
    ['الجزئي', 'al-juzʾī', 39, 'ما منع تصور معناه الشركة فيه، كزيد.', 'Waarvan de betekenis geen deling toelaat, zoals een eigennaam.'],
    ['الكلي', 'al-kullī', 39, 'ما لا يمنع تصوره وقوع الشركة، كالرجل.', 'Wat door meerderen gedeeld kan worden, zoals "man".'],
    ['المتواطئ', 'al-mutawāṭiʾ', 39, 'الكلي الذي استوى معناه في أفراده، كالإنسان.', 'Een algemeen woord dat voor alle gevallen gelijk geldt, zoals "mens".'],
    ['المشكك', 'al-mushakkik', 39, 'الكلي الذي تفاوت معناه في أفراده، كالنور للشمس والسراج.', 'Een algemeen woord dat in graden geldt, zoals "licht" voor zon en lamp.', 'سمي بذلك للشك هل يلحق بالمتواطئ أو بالمشترك.', 'Zo genoemd omdat men twijfelt of het gelijkmatig of meerduidig is.'],
    ['المتباين', 'al-mutabāyin', 40, 'ما تعدد لفظه ومعناه، كالرجل والفرس.', 'Verschillende woorden met verschillende betekenissen, zoals "man" en "paard".'],
    ['المترادف', 'al-mutarādif', 40, 'ما اتحد معناه وتعدد لفظه، كالقمح والحنطة.', 'Eén betekenis met meerdere woorden, zoals twee woorden voor tarwe.'],
    ['المشترك', 'al-mushtarak', 40, 'لفظ واحد حقيقة في معنيين فأكثر، كالعين للجارحة والجارية.', 'Eén woord dat letterlijk twee of meer betekenissen heeft, zoals ʿayn voor oog en bron.'],
    ['العلم', 'al-ʿalam', 40, 'ما وُضع لمعين لا يتناول غيره.', 'Een naam voor iets bepaalds dat niets anders omvat.', '"لمعين" يخرج النكرات، و"لا يتناول غيره" يخرج الضمائر وأسماء الإشارة.', '"Voor iets bepaalds" sluit onbepaalde woorden uit, "niets anders" voornaamwoorden en aanwijzende woorden.'],
    ['علم الشخص وعلم الجنس', 'ʿalam ash-shakhṣ wa-ʿalam al-jins', 40, 'علم الشخص لمعين في الخارج، وعلم الجنس لمعين في الذهن.', 'Een persoonsnaam is voor iets bepaalds in de werkelijkheid, een soortnaam voor iets bepaalds in gedachten.'],
    ['اسم الجنس', 'ism al-jins', 40, 'ما وُضع للماهية من حيث هي، كإنسان وماء.', 'Een woord voor het wezen van iets als zodanig, zoals "mens" en "water".'],
    ['الاشتقاق', 'al-ishtiqāq', 40, 'رد لفظ إلى آخر لمناسبة بينهما في المعنى والحروف الأصلية.', 'Een woord herleiden tot een ander, omdat ze in betekenis en stamletters overeenkomen.', 'ولا بد من تغيير بزيادة أو نقص أو حركة.', 'Er moet altijd iets veranderen: een letter erbij, eraf of een klinker.'],
    ['المشتق المطرد والمختص', 'al-muṭṭarid wa-l-mukhtaṣṣ', 41, 'المطرد يأتي بنفس الصيغة كاسم الفاعل، والمختص لا يطرد كالقارورة.', 'Regelmatig: steeds dezelfde vorm, zoals het actief deelwoord; beperkt: niet overdraagbaar, zoals qārūra (fles).'],
    ['التابع', 'at-tābiʿ', 44, 'لفظ يتبع غيره لا معنى له في اللغة، كـ"بسن" بعد "حسن".', 'Een woord zonder eigen betekenis dat een ander volgt, zoals basan na ḥasan.', 'والحق أنه يفيد التقوية لا الترادف.', 'Het versterkt, het is geen synoniem.']
  ],
  diagrams: [
    {
      type: 'tree',
      title: ['أقسام اللفظ والمعنى', 'Soorten woorden en betekenissen'],
      intro: ['باعتبار الاتحاد والتعدد، كما في الصفحتين 39–40.', 'Naar eenheid en veelheid, bladzijde 39–40.'],
      root: [39, 'اللفظ والمعنى', 'Woord en betekenis'],
      nodes: [
        [39, 'اتحدا', 'Eén woord, één betekenis', '', '', [
          [39, 'جزئي', 'Bijzonder', 'زيد', 'Zayd'],
          [39, 'كلي', 'Algemeen', '', '', [[39, 'متواطئ: الإنسان', 'Gelijkmatig: mens'], [39, 'مشكك: النور', 'In graden: licht']]]
        ]],
        [40, 'تعددا: متباين', 'Beide meervoudig: verschillend', 'الرجل والفرس', 'man en paard'],
        [40, 'اتحد المعنى: مترادف', 'Eén betekenis: synoniem', 'القمح والحنطة', 'twee woorden voor tarwe'],
        [40, 'اتحد اللفظ', 'Eén woord', '', '', [
          [40, 'مشترك', 'Meerduidig', 'العين', 'ʿayn'],
          [40, 'حقيقة ومجاز', 'Letterlijk en figuurlijk', 'الأسد', 'leeuw']
        ]]
      ],
      page: 39
    },
    {
      type: 'cards',
      title: ['أصل اللغة: الأقوال', 'De oorsprong van taal: meningen'],
      intro: ['والمختار الوقف.', 'De auteur kiest geen definitieve uitspraak.'],
      nodes: [
        [38, 'توقيفية', 'Door Allah geleerd', 'ابن فورك والجمهور، وعُزي إلى الأشعري', 'Ibn Fūrak en de meerderheid; toegeschreven aan al-Ashʿarī'],
        [38, 'اصطلاحية', 'Door mensen afgesproken', 'أكثر المعتزلة', 'de meeste Muʿtazila'],
        [38, 'الضروري توقيفي وغيره محتمل', 'Het nodige door Allah, de rest open', 'الأستاذ أبو إسحاق', 'al-Ustādh Abū Isḥāq'],
        [38, 'عكسه', 'Het omgekeerde'],
        [38, 'التوقف', 'Geen uitspraak', 'كثير، والمصنف، والتوقيف مظنون', 'velen en de auteur; tawqīf is waarschijnlijk']
      ],
      page: 38
    },
    {
      type: 'steps',
      title: ['وقوع المشترك: سبعة أقوال', 'Bestaat meerduidigheid? Zeven meningen'],
      intro: ['كما في الصفحتين 44–45.', 'Bladzijde 44–45.'],
      nodes: [
        [44, 'واقع', 'Het bestaat'],
        [44, 'لا يقع مطلقاً', 'Nooit', 'ثعلب والأبهري والبلخي', 'Thaʿlab, al-Abharī, al-Balkhī'],
        [45, 'لا يقع في القرآن', 'Niet in de Koran', 'صيانة لكتاب الله', 'om het Boek te beschermen'],
        [45, 'لا يقع في الحديث', 'Niet in de hadith'],
        [45, 'واجب الوقوع', 'Het moet bestaan', 'لكثرة المعاني وحصر الألفاظ', 'er zijn meer betekenissen dan woorden'],
        [45, 'ممتنع', 'Onmogelijk'],
        [45, 'الرازي: ممتنع بين النقيضين فقط', 'Ar-Rāzī: alleen niet tussen tegenpolen', 'والصحيح عكسه: القرء، عسعس', 'juist is het omgekeerde: qurʾ, ʿasʿasa']
      ],
      page: 44
    },
    {
      type: 'compare',
      title: ['إطلاق المشترك على معنييه', 'Een meerduidig woord met beide betekenissen'],
      intro: ['خلاصة: الشافعي يعمم، والجمهور يصيرون إلى الحقيقة والمجاز.', 'Kort: ash-Shāfiʿī past het op alles toe; de meerderheid kiest letterlijk en figuurlijk.'],
      columns: [['القائل', 'Wie'], ['القول', 'Mening']],
      rows: [
        { label: ['١', '1'], cells: [['المصنف', 'de auteur'], ['يصح معاً مجازاً', 'tegelijk, figuurlijk']] },
        { label: ['٢', '2'], cells: [['الشافعي والقاضي والمعتزلة', 'ash-Shāfiʿī, al-Qāḍī, de Muʿtazila'], ['يصح حقيقة', 'tegelijk, letterlijk']] },
        { label: ['٣', '3'], cells: [['الشافعي', 'ash-Shāfiʿī'], ['ظاهر فيهما عند التجرد فيحمل عليهما', 'zonder aanwijzing op beide']] },
        { label: ['٤', '4'], cells: [['القاضي', 'al-Qāḍī'], ['مجمل، ويحمل عليهما احتياطاً', 'onduidelijk; uit voorzorg op beide']] },
        { label: ['٥', '5'], cells: [['أبو الحسين البصري والغزالي', 'Abū l-Ḥusayn al-Baṣrī, al-Ghazālī'], ['يصح أن يراد لا أنه لغة', 'kan bedoeld zijn, maar niet als taalgebruik']] },
        { label: ['٦', '6'], cells: [['قيل', 'een mening'], ['في النفي لا الإثبات', 'bij ontkenning, niet bij bevestiging']] }
      ],
      page: 45
    }
  ],
  sections: [
    [36, 'كيف تعرف اللغة', 'Hoe men taal kent', 'تُعرف بالنقل متواتراً كالماء، وآحاداً مما يعرفه البعض كالمتعلم دون الجاهل، أو باستنباط العقل من النقل، لا بمجرد العقل؛ فالعقل وسيلة لا يُحدث الموضوعات بنفسه.', 'Door brede overlevering (zoals het woord "water"), door overlevering van enkelen (wat een geleerde kent en een ongeletterde niet), of doordat het verstand uit de overlevering afleidt; niet door het verstand alleen, want dat is een middel en maakt zelf geen taal.'],
    [36, 'مدلول اللفظ', 'Wat een woord aanduidt', 'مدلول اللفظ إما معنى جزئي أو كلي، أو لفظ: مفرد مستعمل كالكلمة، أو مهمل كأسماء حروف الهجاء، أو مركب كقام زيد.', 'Een woord duidt een betekenis aan (bijzonder of algemeen), of een ander woord: enkelvoudig en gebruikt ("woord"), zonder eigen betekenis (de namen van de letters), of samengesteld ("Zayd stond op").'],
    [37, 'المناسبة بين اللفظ والمعنى', 'Passen woord en betekenis bij elkaar?', 'لا يشترط عند الجمهور. وأثبتها عباد بن سليمان، فقيل: هي حاملة على الوضع، وقيل: كافية في الدلالة دون وضع.', 'Volgens de meerderheid niet nodig. ʿAbbād ibn Sulaymān vond van wel: volgens sommigen bracht die overeenkomst de taalmakers ertoe, volgens anderen volstaat ze zelfs zonder afspraak.'],
    [37, 'المعنى الخارجي أم الذهني؟', 'Betekenis in de werkelijkheid of in gedachten?', 'الراجح عند المصنف أن اللفظ موضوع للمعنى الخارجي، كالبحر الملموس. وقال الرازي: للذهني. وقال والده: للمعنى من حيث هو، فهو حقيقة فيهما.', 'De auteur: het woord staat voor wat in de werkelijkheid is, zoals de echte zee. Ar-Rāzī: voor de voorstelling in gedachten. Zijn vader: voor de betekenis als zodanig, letterlijk voor beide.', 'وليس لكل معنى لفظ، لأن المعاني أكثر من الألفاظ.', 'Niet elke betekenis heeft een woord, want er zijn meer betekenissen dan woorden.'],
    [37, 'الوقف في ﴿وما يعلم تأويله إلا الله﴾', 'De pauze in "en niemand kent de uitleg ervan behalve Allah"', 'من أوجب الوقف جعل المتشابه ما استأثر الله بعلمه والواو بعده للاستئناف، وهو قول جمهور المفسرين والفقهاء والأصوليين. ومن جعل الواو للعطف قال: قد يطلع عليه بعض أصفيائه.', 'Wie hier een verplichte pauze ziet, noemt het dubbelzinnige iets wat alleen Allah weet, en het volgende "en" begint een nieuwe zin (de meeste uitleggers, juristen en uṣūlī’s). Wie "en" als verbinding leest, zegt: sommige uitverkorenen kunnen het weten.', 'وعند المعتزلة صفات الله غير السبع من المتشابه، لتأويلهم لمعناها.', 'Voor de Muʿtazila horen Allahs eigenschappen buiten de zeven bij het dubbelzinnige, omdat ze die herinterpreteren.'],
    [37, 'اللفظ الشائع لا يوضع لمعنى خفي', 'Een gangbaar woord staat niet voor iets verborgens', 'قال الرازي: اللفظ الشائع بين العامة والخاصة لا يجوز أن يكون موضوعاً لمعنى خفي إلا على الخواص، كما يقول مثبتو الحال: الحركة معنى يوجب تحرك الذات.', 'Ar-Rāzī: een woord dat iedereen gebruikt, kan niet een betekenis hebben die alleen specialisten kennen; zoals wie de "ḥāl" (tussen bestaan en niet-bestaan) aanneemt en zegt: beweging is iets wat het bewegen van het ding veroorzaakt.'],
    [39, 'هل تثبت اللغة بالقياس؟', 'Ontstaat taal door analogie?', 'نفاه القاضي والجويني والغزالي والآمدي، وأثبته ابن سريج وابن أبي هريرة وأبو إسحاق الشيرازي والرازي، وقيل تثبت الحقيقة لا المجاز.', 'Nee: al-Bāqillānī, al-Juwaynī, al-Ghazālī, al-Āmidī. Ja: Ibn Surayj, Ibn Abī Hurayra, Abū Isḥāq ash-Shīrāzī, ar-Rāzī. Een derde mening: alleen bij letterlijke, niet bij figuurlijke betekenissen.', 'ومحل الخلاف ما لم يثبت تعميمه باستقراء.', 'Het verschil gaat over wat niet al door onderzoek van het taalgebruik algemeen is gebleken.'],
    [41, 'من قام به وصف', 'Wie een eigenschap heeft', 'من لم يقم به وصف لم يجز أن يشتق له منه اسم، ومن اتصف به جاز. خلافاً للمعتزلة في قولهم: قادر بلا قدرة وعالم بلا علم، وكذلك الأشاعرة في غير الصفات الثمانية المثبتة عندهم.', 'Wie een eigenschap niet heeft, krijgt geen afgeleide naam; wie haar wel heeft, mag die krijgen. Anders dan de Muʿtazila: "machtig zonder macht, wetend zonder kennis"; en de Ashʿarieten bij de eigenschappen buiten hun acht.', 'تنبيه: إلا أسماء الله تعالى فهي توقيفية.', 'Let op: Allahs namen zijn een uitzondering; die zijn alleen uit de openbaring bekend.'],
    [41, 'إبراهيم ذابح وإسماعيل مذبوح؟', 'Ibrāhīm is "slachter", Ismāʿīl "geslacht"?', 'من فروع هذه القاعدة اتفاقهم على أن إبراهيم عليه السلام ذابح، لأنه قام به وصف الذبح، واختلافهم في تسمية إسماعيل مذبوحاً لأنه لم يقم به الوصف.', 'Hieruit volgt: men is het eens dat Ibrāhīm "slachter" heet, want hij deed de handeling; maar men verschilt of Ismāʿīl "geslacht" heet, want de eigenschap kwam niet tot stand.', 'وقالوا: أمر الله السكين ألا تقطع، وقيل حول رقبته إلى صحيفة من نحاس.', 'Ze zeiden: Allah beval het mes niet te snijden; of: Hij maakte zijn hals tot een koperen plaat.'],
    [42, 'بقاء المشتق منه', 'Moet de grondbetekenis er nog zijn?', 'الجمهور يشترطون بقاء المشتق منه في كون المشتق حقيقة إن أمكن، كالقاعد حال القعود، وإلا فآخر جزء كالمتكلم. ومن ثم كان اسم الفاعل حقيقة باعتبار حال التلبس لا النطق، خلافاً للقرافي.', 'Volgens de meerderheid is een afgeleid woord pas letterlijk als de eigenschap er nog is, zoals "zittend" tijdens het zitten; anders tot het laatste deel, zoals bij "spreker". Daarom gaat het actief deelwoord over het moment van de handeling, niet van de uitspraak; anders dan al-Qarāfī.', 'وقسم القرافي المشتق إلى محكوم عليه (كالسارق في الآية: حقيقة مطلقاً) ومحكوم به (كأسكت المتكلم: يعتبر فيه حال التلبس).', 'Al-Qarāfī onderscheidt: waarover geoordeeld wordt (de dief in de aya: altijd letterlijk) en wat als oordeel gezegd wordt ("laat de spreker zwijgen": op het moment zelf).'],
    [43, 'طروء وصف مناقض', 'Als er een tegengestelde eigenschap komt', 'قيل: إن طرأ على المحل وصف وجودي يناقض الأول لم يسم بالأول إجماعاً، كالنائم إذا استيقظ.', 'Een mening: komt er een bestaande tegengestelde eigenschap, dan krijgt men volgens consensus de oude naam niet meer, zoals een slaper die wakker is.', 'ومنه قول الآمدي فيمن رمى زوجته: إن كانت تزوجت غيره لم يلاعن، وإلا لاعن.', 'Zo zei al-Āmidī over wie zijn (ex-)vrouw beschuldigt: is zij met een ander getrouwd, dan geen liʿān, anders wel.'],
    [44, 'حلول المترادف مكان الآخر', 'Een synoniem in de plaats van een ander', 'يجوز إن لم يكن تُعبد بلفظه، فلا يُبدل "الله أكبر" في الإحرام بمرادف. ومنعه الرازي مطلقاً، ومنعه البيضاوي والهندي إذا كانا من لغتين.', 'Dat mag, tenzij het woord zelf aanbidding is: "Allāhu akbar" bij het begin van het gebed vervangt men niet. Ar-Rāzī verbiedt het altijd; al-Bayḍāwī en al-Hindī als de woorden uit twee talen komen.'],
    [46, 'جمع المشترك', 'Het meervoud van een meerduidig woord', 'الأكثر على أن جمعه باعتبار معنييه إن ساغ مبني على الخلاف في المفرد، كعيون عمر تريد الباصرة والذهب.', 'Of het meervoud beide betekenissen kan dragen ("de ʿuyūn van ʿUmar": ogen en goud), hangt volgens de meesten af van het verschil over het enkelvoud.']
  ],
  keycards: [
    ['opsomming', 36, 'مدلول اللفظ', 'Wat een woord aanduidt', ['معنى جزئي أو كلي', 'لفظ مفرد مستعمل: الكلمة', 'لفظ مفرد مهمل: أسماء حروف الهجاء', 'لفظ مركب: قام زيد'], ['Een betekenis, bijzonder of algemeen', 'Een enkel gebruikt woord: "woord"', 'Een enkel woord zonder betekenis: de lettersnamen', 'Een samenstelling: "Zayd stond op"']],
    ['opsomming', 39, 'هل تثبت اللغة بالقياس؟', 'Ontstaat taal door analogie?', ['لا: القاضي والجويني والغزالي والآمدي', 'نعم: ابن سريج وابن أبي هريرة والشيرازي والرازي', 'الحقيقة لا المجاز'], ['Nee: al-Bāqillānī, al-Juwaynī, al-Ghazālī, al-Āmidī', 'Ja: Ibn Surayj, Ibn Abī Hurayra, ash-Shīrāzī, ar-Rāzī', 'Alleen letterlijk, niet figuurlijk']],
    ['onderscheid', 40, 'أنواع العلم', 'Soorten namen', ['علم الشخص: لمعين في الخارج', 'علم الجنس: لمعين في الذهن، كالأسد مفترس', 'اسم الجنس: للماهية من حيث هي'], ['Persoonsnaam: iets bepaalds in de werkelijkheid', 'Soortnaam: iets bepaalds in gedachten ("de leeuw is een roofdier")', 'Soortwoord: voor het wezen als zodanig']],
    ['opsomming', 41, 'شروط الاشتقاق', 'Voorwaarden voor afleiding', ['المناسبة في المعنى', 'الاشتراك في الحروف الأصلية دون الزوائد (سألتمونيها)', 'لا بد من تغيير'], ['Overeenkomst in betekenis', 'Dezelfde stamletters, niet de toegevoegde (verzameld in "saʾaltumūnīhā")', 'Er moet iets veranderen']],
    ['onderscheid', 42, 'ما يجب فيه الاشتقاق', 'Wanneer afleiding verplicht is', ['إن قام بالمحل وصف له اسم وجب الاشتقاق', 'وإن لم يكن له اسم كأنواع الروائح والآلام لم يجب'], ['Heeft de eigenschap een naam, dan wordt er afgeleid', 'Heeft ze geen naam (soorten geuren of pijn), dan niet']],
    ['opsomming', 43, 'وقوع الترادف', 'Bestaan synoniemen?', ['الجمهور والمصنف: واقع، كالسيف والحسام والمهند', 'ثعلب وابن فارس: لا يقع مطلقاً', 'الرازي: لا يقع في الأسماء الشرعية'], ['Meerderheid en auteur: ja, zoals drie woorden voor zwaard', 'Thaʿlab en Ibn Fāris: nooit', 'Ar-Rāzī: niet bij sharʿī-namen']]
  ],
  subtleties: [
    [36, 'العقل وسيلة لا مصدر', 'Het verstand is middel, geen bron', 'قوله "لا بمجرد العقل" تنبيه على أن العقل لا يحدث الموضوعات اللغوية بنفسه، بل يستنبطها من النقل.', '"Niet door het verstand alleen" waarschuwt dat het verstand zelf geen taal maakt, maar haar uit de overlevering afleidt.'],
    [37, 'القرء دليل على عدم اشتراط المناسبة', 'Qurʾ bewijst dat woord en betekenis niet hoeven te passen', 'لفظ القرء يستعمل للحيض والطهر، ولا يمكن أن يناسب معنيين متضادين.', 'Qurʾ wordt gebruikt voor menstruatie én reinheid; een woord kan niet bij twee tegengestelde betekenissen passen.'],
    [40, 'المشكك بين المتواطئ والمشترك', 'Mushakkik zit tussen gelijkmatig en meerduidig', 'سمي مشككاً لأن الناظر يشك: هل يلحق بالمتواطئ لاشتراك الأفراد، أو بالمشترك لتفاوتها.', 'Zo genoemd omdat men twijfelt: gelijkmatig (alle gevallen delen het) of meerduidig (ze verschillen).'],
    [40, 'المجاز في الاشتقاق', 'Figuurlijke afleiding', 'يكون الاشتقاق ولو مجازاً، كقولك: الحال ناطق بما نعيشه؛ خلافاً للقاضي أبي بكر والغزالي.', 'Afleiding kan ook figuurlijk: "de situatie spreekt voor zich"; anders dan al-Qāḍī Abū Bakr en al-Ghazālī.'],
    [41, 'القارورة', 'De fles (qārūra)', 'مشتقة من القرار لأن الماء يقر فيها، ولا يطرد في الحوض والبئر مع أن الماء يقر فيهما.', 'Afgeleid van "blijven", want het water blijft erin; toch noemt men een bak of put zo niet.'],
    [42, 'حال التلبس لا حال النطق', 'Het moment van de daad, niet van de uitspraak', 'لو اعتبرت حال النطق في ﴿والسارق والسارقة﴾ لم يقع الحكم على السارق اليوم، لأنه لم يكن سارقاً ولا موجوداً حين نزول النص.', 'Als het moment van de uitspraak telde, gold "de dief en de dievegge" niet voor een dief van nu, want die bestond niet toen de aya kwam.'],
    [43, 'المشتق لا يشعر بخصوصية الذات', 'Een afgeleid woord zegt niets over wat voor wezen het is', 'الضارب والقائم معنى فقط، لا يختص بإنسان ولا حيوان.', '"Slaand" en "staand" zeggen alleen iets over de handeling, niet of het een mens of dier is.'],
    [43, 'لماذا نفى ثعلب وابن فارس الترادف', 'Waarom Thaʿlab en Ibn Fāris synoniemen ontkennen', 'لعدم التطابق الكامل في المعنى بين المترادفات: فالحسام وصف للحدة والمهند للصنع في الهند.', 'Omdat synoniemen niet helemaal samenvallen: ḥusām wijst op scherpte, muhannad op maaksel uit India.'],
    [44, 'الفرض والواجب', 'Farḍ en wājib', 'إن قيل: هما مترادفان في الشرع؟ قيل: هذه مصطلحات اصطلحنا عليها، وفيها خلاف.', 'Zijn ze dan synoniem in de sharīʿa? Antwoord: dat zijn termen die wij zelf afspraken, en daarover is verschil.']
  ],
  rules: [
    [36, 'لا يشترط مناسبة اللفظ للمعنى', 'Woord en betekenis hoeven niet bij elkaar te passen', 'قول الجمهور.', 'Mening van de meerderheid.', 'القرء للحيض والطهر.', 'Qurʾ voor menstruatie en reinheid.'],
    [41, 'من لم يقم به وصف لم يشتق له منه اسم', 'Wie een eigenschap niet heeft, krijgt er geen naam uit', 'إلا أسماء الله فهي توقيفية.', 'Allahs namen zijn alleen uit de openbaring bekend.', 'من لم يتصف بالسكوت لا يسمى ساكتاً.', 'Wie niet zwijgt, heet niet "zwijgend".'],
    [42, 'اسم الفاعل حقيقة باعتبار حال التلبس', 'Het actief deelwoord is letterlijk op het moment van de daad', '', '', '﴿والسارق والسارقة فاقطعوا﴾', '"De dief en de dievegge: snijdt…"'],
    [44, 'يقع كل من الرديفين مكان الآخر إن لم يتعبد بلفظه', 'Synoniemen zijn uitwisselbaar, tenzij het woord zelf aanbidding is', '', '', 'تكبيرة الإحرام لا تبدل.', 'De openings-takbīr vervangt men niet.']
  ],
  disputes: [
    { page: 37, q: ['هل اللفظ موضوع للمعنى الخارجي أم الذهني؟', 'Staat een woord voor iets in de werkelijkheid of in gedachten?'], views: [['المصنف: الخارجي', 'De auteur: werkelijkheid'], ['الرازي: الذهني', 'Ar-Rāzī: gedachten'], ['والده: للمعنى من حيث هو', 'Zijn vader: de betekenis als zodanig']] },
    { page: 38, q: ['ما أصل اللغة؟', 'Waar komt taal vandaan?'], views: [['توقيفية: ابن فورك والجمهور', 'Van Allah: Ibn Fūrak en de meerderheid'], ['اصطلاحية: أكثر المعتزلة', 'Afgesproken: de meeste Muʿtazila'], ['الأستاذ: القدر المحتاج توقيفي وغيره محتمل', 'Al-Ustādh: het nodige van Allah, de rest open'], ['عكسه', 'Het omgekeerde'], ['التوقف', 'Geen uitspraak']], preferred: ['الوقف عن القطع، والتوقيف مظنون', 'Geen definitieve uitspraak; tawqīf is waarschijnlijk'] },
    { page: 39, q: ['هل تثبت اللغة بالقياس؟', 'Ontstaat taal door analogie?'], views: [['لا: القاضي والجويني والغزالي والآمدي', 'Nee: al-Bāqillānī, al-Juwaynī, al-Ghazālī, al-Āmidī'], ['نعم: ابن سريج وابن أبي هريرة والشيرازي والرازي', 'Ja: Ibn Surayj, Ibn Abī Hurayra, ash-Shīrāzī, ar-Rāzī'], ['في الحقيقة لا المجاز', 'Alleen bij letterlijke betekenis']] },
    { page: 42, q: ['هل يعتبر في اسم الفاعل حال التلبس أم حال النطق؟', 'Telt bij het actief deelwoord het moment van de daad of van de uitspraak?'], views: [['الجمهور: حال التلبس', 'Meerderheid: de daad'], ['القرافي: حال النطق، وفصّل بين المحكوم عليه والمحكوم به', 'Al-Qarāfī: de uitspraak, met onderscheid tussen onderwerp en oordeel']], preferred: ['حال التلبس، وقول القرافي فيه نظر', 'Het moment van de daad; de mening van al-Qarāfī is twijfelachtig'] },
    { page: 43, q: ['هل الترادف واقع؟', 'Bestaan synoniemen?'], views: [['الجمهور: واقع', 'Meerderheid: ja'], ['ثعلب وابن فارس: لا مطلقاً', 'Thaʿlab en Ibn Fāris: nooit'], ['الرازي: لا في الأسماء الشرعية', 'Ar-Rāzī: niet bij sharʿī-namen']] },
    { page: 44, q: ['هل يقع كل من المترادفين مكان الآخر؟', 'Zijn synoniemen uitwisselbaar?'], views: [['نعم إن لم يتعبد بلفظه', 'Ja, tenzij het woord aanbidding is'], ['الرازي: لا مطلقاً', 'Ar-Rāzī: nooit'], ['البيضاوي والهندي: لا إذا كانا من لغتين', 'Al-Bayḍāwī en al-Hindī: niet uit twee talen']] },
    { page: 44, q: ['هل المشترك واقع؟', 'Bestaat meerduidigheid?'], views: [['واقع', 'Ja'], ['ثعلب والأبهري والبلخي: لا مطلقاً', 'Thaʿlab, al-Abharī, al-Balkhī: nooit'], ['قوم: لا في القرآن', 'Sommigen: niet in de Koran'], ['قيل: لا في الحديث', 'Een mening: niet in de hadith'], ['واجب الوقوع', 'Het moet bestaan'], ['ممتنع', 'Onmogelijk'], ['الرازي: ممتنع بين النقيضين', 'Ar-Rāzī: niet tussen tegenpolen']], preferred: ['واقع، والصحيح وقوعه حتى بين النقيضين كالقرء وعسعس', 'Het bestaat, ook tussen tegenpolen (qurʾ, ʿasʿasa)'] }
  ],
  pitfalls: [
    [37, 'الظن أن لكل معنى لفظاً', 'Denken dat elke betekenis een woord heeft', 'المعاني أكثر من الألفاظ، فليس لكل معنى لفظ.', 'Er zijn meer betekenissen dan woorden.'],
    [40, 'الخلط بين المشترك والحقيقة والمجاز', 'Meerduidig en letterlijk/figuurlijk verwarren', 'المشترك حقيقة في المعنيين كالعين، أما الأسد فحقيقة في الحيوان مجاز في الشجاع.', 'Meerduidig is letterlijk in beide betekenissen (ʿayn); "leeuw" is letterlijk het dier en figuurlijk de dappere man.'],
    [40, 'الخلط بين علم الجنس واسم الجنس', 'Soortnaam en soortwoord verwarren', 'علم الجنس لمعين في الذهن، واسم الجنس للماهية من حيث هي.', 'Een soortnaam is iets bepaalds in gedachten; een soortwoord het wezen als zodanig.'],
    [41, 'اشتقاق اسم لله من كل صفة', 'Voor Allah een naam afleiden uit elke eigenschap', 'أسماء الله توقيفية، فلا يشتق له اسم بالقياس.', 'Allahs namen zijn alleen uit de openbaring bekend; men leidt ze niet af.'],
    [44, 'إبدال تكبيرة الإحرام بمرادف', 'De openings-takbīr vervangen door een synoniem', 'لا يجوز لأنه متعبد بلفظه.', 'Mag niet, want het woord zelf is aanbidding.']
  ],
  ayat: [
    [37, 'وما يعلم تأويله إلا الله', 'من أوجب الوقف عندها جعل المتشابه ما استأثر الله بعلمه.', 'Wie hier pauzeert, noemt het dubbelzinnige iets wat alleen Allah weet.'],
    [38, 'وعلم آدم الأسماء كلها', 'دليل القائلين بأن اللغات توقيفية.', 'Bewijs voor wie zegt dat taal door Allah geleerd is.'],
    [42, 'والسارق والسارقة فاقطعوا', 'مثال لاعتبار حال التلبس في المشتق، وللمحكوم عليه عند القرافي.', 'Voorbeeld van het moment van de daad, en van al-Qarāfī’s "onderwerp van oordeel".'],
    [42, 'الزانية والزاني فاجلدوا', 'مثال آخر لاعتبار حال التلبس.', 'Nog een voorbeeld van het moment van de daad.']
  ],
  hadith: [],
  persons: [
    ['abbad-ibn-sulayman', 'text', [36, 37], 'معتزلي أثبت اشتراط المناسبة بين اللفظ والمعنى.', 'Muʿtaziliet die vond dat woord en betekenis bij elkaar moeten passen.'],
    ['fakhr-ad-din-ar-razi', 'text', [37, 39, 43, 44, 45], 'قال: اللفظ للمعنى الذهني، واللغة تثبت قياساً، والترادف لا يقع في الأسماء الشرعية، والمشترك ممتنع بين النقيضين.', 'Zei: een woord staat voor de voorstelling; taal kan door analogie ontstaan; geen synoniemen bij sharʿī-namen; geen meerduidigheid tussen tegenpolen.'],
    ['taqi-ad-din-as-subki', 'text', [37], 'قال: اللفظ للمعنى من حيث هو.', 'Zei: het woord staat voor de betekenis als zodanig.'],
    ['ibn-furak', 'text', [38], 'من كبار أصحاب الأشعري؛ قال: اللغات توقيفية.', 'Een van de grote leerlingen van al-Ashʿarī; taal komt van Allah.'],
    ['al-ashari', 'text', [38], 'عُزي إليه القول بالتوقيف.', 'Aan hem wordt de tawqīf-mening toegeschreven.'],
    ['abu-ishaq-al-isfarayini', 'text', [38], 'قال: القدر المحتاج إليه في التعريف توقيفي وغيره محتمل.', 'Zei: het nodige deel van taal komt van Allah, de rest is open.'],
    ['al-amidi', 'text', [38, 39, 43], 'نفى ثبوت اللغة بالقياس، وقال فيمن رمى زوجته بعد زواجها بغيره لا يلاعن.', 'Wees analogie in taal af; zei over de beschuldigde ex-vrouw die hertrouwd is: geen liʿān.'],
    ['al-baqillani', 'text', [39, 40, 45], 'نفى ثبوت اللغة بالقياس والمجاز في الاشتقاق، وقال المشترك مجمل يحمل على معنييه احتياطاً.', 'Wees analogie in taal en figuurlijke afleiding af; een meerduidig woord is onduidelijk en geldt uit voorzorg voor beide.'],
    ['al-juwayni', 'text', [39], 'نفى ثبوت اللغة بالقياس.', 'Wees analogie in taal af.'],
    ['al-ghazali', 'text', [39, 40, 46], 'نفى القياس في اللغة والمجاز في الاشتقاق، وقال المشترك يصح أن يراد به المعنيان لا أنه لغة.', 'Wees analogie in taal en figuurlijke afleiding af; een meerduidig woord kan beide betekenissen bedoelen, maar niet als taalgebruik.'],
    ['ibn-surayj', 'text', [39], 'قال: اللغة تثبت قياساً.', 'Zei: taal kan door analogie ontstaan.'],
    ['ibn-abi-hurayra', 'text', [39], 'قال: اللغة تثبت قياساً.', 'Zei: taal kan door analogie ontstaan.'],
    ['abu-ishaq-ash-shirazi', 'text', [39], 'قال: اللغة تثبت قياساً.', 'Zei: taal kan door analogie ontstaan.'],
    ['al-qarafi', 'text', [42], 'اعتبر في المشتق حال النطق، وقسمه إلى محكوم عليه ومحكوم به.', 'Liet bij afgeleide woorden het moment van de uitspraak tellen en onderscheidde onderwerp en oordeel.'],
    ['thalab', 'text', [43, 44], 'إمام الكوفيين؛ نفى الترادف والمشترك مطلقاً.', 'Leider van de Kufische grammatici; ontkende synoniemen en meerduidigheid.'],
    ['ibn-faris', 'text', [43], 'اللغوي؛ نفى الترادف مطلقاً.', 'De taalkundige; ontkende synoniemen.'],
    ['al-baydawi', 'text', [44], 'صاحب المنهاج؛ منع حلول المترادف مكان الآخر إذا كانا من لغتين.', 'Schrijver van al-Minhāj; geen uitwisseling van synoniemen uit twee talen.'],
    ['safi-ad-din-al-hindi', 'text', [44], 'صاحب نهاية الوصول؛ منع ذلك إذا كانا من لغتين.', 'Schrijver van Nihāyat al-Wuṣūl; idem bij twee talen.'],
    ['al-abhari', 'text', [44], 'المالكي؛ نفى وقوع المشترك.', 'De Mālikiet; ontkende meerduidigheid.'],
    ['al-balkhi', 'text', [44], 'نفى وقوع المشترك.', 'Ontkende meerduidigheid.'],
    ['ash-shafii', 'text', [45], 'يصح إطلاق المشترك على معنييه حقيقة، وهو ظاهر فيهما عند التجرد.', 'Een meerduidig woord geldt letterlijk voor beide betekenissen, en zonder aanwijzing voor beide.'],
    ['abu-al-husayn-al-basri', 'text', [46], 'المعتزلي؛ قال: يصح أن يراد بالمشترك معنياه لا أنه لغة.', 'De Muʿtaziliet; beide betekenissen kunnen bedoeld zijn, maar niet als taalgebruik.']
  ],
  review: [
    ['الموضوعات اللغوية: الألفاظ الدالة على المعاني.', 'Taal: woorden die betekenissen aanduiden.'],
    ['تعرف اللغة بالنقل أو باستنباط العقل من النقل.', 'Taal kent men door overlevering, of door afleiding uit de overlevering.'],
    ['الوضع: جعل اللفظ دليلاً على المعنى، ولا تشترط المناسبة.', 'Waḍʿ: een woord tot aanduiding maken; passen is niet nodig.'],
    ['المحكم واضح، والمتشابه ما استأثر الله بعلمه.', 'Muḥkam is duidelijk; mutashābih kent alleen Allah.'],
    ['المختار في أصل اللغة الوقف، والتوقيف مظنون.', 'Over de oorsprong van taal: geen uitspraak; tawqīf is waarschijnlijk.'],
    ['الكلي متواطئ إن استوى، ومشكك إن تفاوت.', 'Algemeen: gelijkmatig of in graden.'],
    ['شروط الاشتقاق: المناسبة والحروف الأصلية والتغيير.', 'Afleiding: betekenis, stamletters en verandering.'],
    ['من لم يقم به وصف لا يشتق له منه اسم.', 'Zonder eigenschap geen afgeleide naam.'],
    ['اسم الفاعل حقيقة باعتبار حال التلبس.', 'Het actief deelwoord geldt op het moment van de daad.'],
    ['الترادف والمشترك واقعان.', 'Synoniemen en meerduidigheid bestaan.'],
    ['المشترك يصح إطلاقه على معنييه مجازاً.', 'Een meerduidig woord kan figuurlijk beide betekenissen dragen.']
  ],
  quiz: [
    { type: 'tf', page: 36, q: ['تُعرف اللغة بمجرد العقل.', 'Taal kent men door het verstand alleen.'], answer: 1, explain: ['بل بالنقل أو باستنباط العقل من النقل.', 'Door overlevering, of afleiding daaruit.'] },
    { type: 'mc', page: 37, q: ['من قال: اللفظ موضوع للمعنى الذهني؟', 'Wie zei: een woord staat voor de voorstelling in gedachten?'], options: [['الرازي', 'المصنف', 'والد المصنف', 'عباد بن سليمان'], ['ar-Rāzī', 'de auteur', 'de vader van de auteur', 'ʿAbbād ibn Sulaymān']], answer: 0, explain: ['والمصنف: الخارجي، ووالده: من حيث هو.', 'De auteur: werkelijkheid; zijn vader: als zodanig.'] },
    { type: 'mc', page: 38, q: ['ما الذي اختاره المصنف في أصل اللغة؟', 'Wat kiest de auteur over de oorsprong van taal?'], options: [['الوقف', 'التوقيف قطعاً', 'الاصطلاح', 'قول الأستاذ'], ['geen uitspraak', 'zeker van Allah', 'afgesproken', 'de mening van al-Ustādh']], answer: 0, explain: ['والتوقيف مظنون.', 'Tawqīf is waarschijnlijk.'] },
    { type: 'mc', page: 39, q: ['لفظ "النور" للشمس والسراج مثال لـ:', '"Licht" voor zon en lamp is een voorbeeld van:'], options: [['المشكك', 'المتواطئ', 'المشترك', 'المتباين'], ['in graden (mushakkik)', 'gelijkmatig', 'meerduidig', 'verschillend']], answer: 0, explain: ['لتفاوت المعنى في أفراده.', 'De betekenis verschilt in sterkte.'] },
    { type: 'mc', page: 40, q: ['القمح والحنطة مثال لـ:', 'Twee woorden voor tarwe zijn een voorbeeld van:'], options: [['المترادف', 'المشترك', 'المتباين', 'المتواطئ'], ['synoniem', 'meerduidig', 'verschillend', 'gelijkmatig']], answer: 0, explain: ['المعنى واحد واللفظ مختلف.', 'Eén betekenis, verschillende woorden.'] },
    { type: 'tf', page: 41, q: ['أسماء الله تعالى يجوز اشتقاقها من كل صفة قامت به.', 'Men mag voor Allah namen afleiden uit elke eigenschap.'], answer: 1, explain: ['أسماء الله توقيفية.', 'Allahs namen zijn alleen uit de openbaring bekend.'] },
    { type: 'mc', page: 41, q: ['اتفقوا على أن إبراهيم عليه السلام ذابح لأنه:', 'Men is het eens dat Ibrāhīm "slachter" heet, omdat:'], options: [['قام به وصف الذبح', 'ذُبح إسماعيل فعلاً', 'سماه الله بذلك', 'اسمه علم شخص'], ['hij de handeling deed', 'Ismāʿīl echt geslacht werd', 'Allah hem zo noemde', 'het een eigennaam is']], answer: 0, explain: ['واختلفوا في إسماعيل لأنه لم يقم به الوصف.', 'Over Ismāʿīl verschilt men, want bij hem kwam het niet tot stand.'] },
    { type: 'mc', page: 42, q: ['من اعتبر في اسم الفاعل حال النطق؟', 'Wie liet bij het actief deelwoord het moment van de uitspraak tellen?'], options: [['القرافي', 'الجمهور', 'الآمدي', 'المصنف'], ['al-Qarāfī', 'de meerderheid', 'al-Āmidī', 'de auteur']], answer: 0, explain: ['والجمهور: حال التلبس.', 'De meerderheid: het moment van de daad.'] },
    { type: 'mc', page: 43, q: ['من نفى الترادف في الأسماء الشرعية فقط؟', 'Wie ontkende synoniemen alleen bij sharʿī-namen?'], options: [['الرازي', 'ثعلب', 'ابن فارس', 'البيضاوي'], ['ar-Rāzī', 'Thaʿlab', 'Ibn Fāris', 'al-Bayḍāwī']], answer: 0, explain: ['ونفاه ثعلب وابن فارس مطلقاً.', 'Thaʿlab en Ibn Fāris ontkenden het helemaal.'] },
    { type: 'tf', page: 45, q: ['الصحيح أن المشترك لا يقع بين النقيضين.', 'Juist: meerduidigheid komt niet voor tussen tegenpolen.'], answer: 1, explain: ['هذا قول الرازي، والصحيح عكسه كالقرء وعسعس.', 'Dat is ar-Rāzī’s mening; juist is het omgekeerde (qurʾ, ʿasʿasa).'] }
  ]
})
