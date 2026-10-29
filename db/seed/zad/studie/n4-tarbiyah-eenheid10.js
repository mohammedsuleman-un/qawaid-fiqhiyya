// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 10: قواعد في اكتشاف أمراض القلوب والتوبة منها (lessen 23–24, boek p. 61–68).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '23',
  unit: 10,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '61–68',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['اكتشاف أمراض القلوب والتوبة منها', 'Hartziekten herkennen en berouw'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'أمراض القلوب خفية، لكن تعرف بآثارها: اتباع الشهوات، وتقبل الشبهات، وعدم التألم بالقبائح، والوحشة من الصالحين، والنفور من ذكر الله. ويتعامل معها بالانتباه في البداية، والتشخيص الدقيق، ومواجهة كل مرض بضده، ومصارحة المريض. والتوبة بابها مفتوح، وشروطها الإقلاع والندم والعزم، ولها فضائل كثيرة.',
    'Hartziekten zijn verborgen, maar herkenbaar aan hun gevolgen: begeerten volgen, twijfels aannemen, geen pijn bij het lelijke, vervreemding van vromen en afkeer van Allahs gedenken. Men pakt ze aan door ze vroeg op te merken, nauwkeurig te diagnosticeren, elke ziekte met haar tegendeel te bestrijden en de zieke eerlijk aan te spreken. De deur van berouw staat open; voorwaarden: ophouden, spijt en het voornemen; berouw heeft vele verdiensten.'
  ],
  map: {
    title: ['الاكتشاف والتوبة في خريطة واحدة', 'Herkennen en berouw in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['أمراض القلوب والتوبة', 'Hartziekten en berouw'], ['الوحدة العاشرة', 'Eenheid 10']],
    nodes: [
      { label: ['علامات المرض', 'Kenmerken'], sub: ['ص ٦١', 'p. 61'], page: 61, children: [['اتباع الشهوات', 'begeerten volgen'], ['تقبل الشبهات', 'twijfels aannemen'], ['النفور من ذكر الله', 'afkeer van gedenken']] },
      { label: ['التعامل معها', 'Aanpak'], sub: ['ص ٦٢–٦٣', 'p. 62–63'], page: 62, children: [['الانتباه في البداية', 'vroeg opmerken'], ['التشخيص الدقيق', 'nauwkeurige diagnose'], ['المواجهة بالضد', 'bestrijden met het tegendeel'], ['المصارحة', 'eerlijk aanspreken']] },
      { label: ['التوبة', 'Berouw'], sub: ['ص ٦٤–٦٥', 'p. 64–65'], page: 64, children: [['بابها مفتوح', 'de deur staat open'], ['شروطها', 'voorwaarden'], ['فضائلها', 'verdiensten']] },
      { label: ['شبهات والرد عليها', 'Twijfels en weerlegging'], sub: ['ص ٦٦–٦٧', 'p. 66–67'], page: 66, children: [['خوف العود', 'angst om terug te vallen'], ['خوف سخرية الناس', 'angst voor spot']] }
    ]
  },
  points: [
    [61, 'القلب إذا كانت فيه حياة تألم بورود القبيح عليه، وإذا فسد لم يتألم بل استحسن القبيح.', 'Een levend hart heeft pijn bij het lelijke; een bedorven hart voelt dat niet en vindt het lelijke goed.'],
    [62, 'الاعتناء بالمظهر وحسن الثياب ليس كبرا، بل حب للتجمل المباح، ولبس البالي تزهدا قد يكون حبا للظهور على وجه مقلوب.', 'Zorg voor het uiterlijk is geen hoogmoed maar toegestane verfraaiing; versleten kleren dragen als ascese kan juist omgekeerde pronkzucht zijn.'],
    [62, 'قال مطرف للمهلب لما رآه يسحب حلته: أولك نطفة مذرة، وآخرك جيفة قذرة، وأنت بين ذلك تحمل العذرة، فترك المهلب مشيته.', 'Muṭarrif tegen al-Muhallab, die zijn mantel sleepte: je begin is een vieze druppel, je einde een vies lijk, en daartussen draag je uitwerpselen; al-Muhallab liet die gang varen.'],
    [63, 'كثير من مرضى القلوب لا يعترفون بأمراضهم، بل لا يشعرون بها، فالمصارحة من أنفع العلاج.', 'Veel hartzieken erkennen hun ziekte niet of voelen haar niet; eerlijk aanspreken is een van de nuttigste behandelingen.'],
    [64, 'حقيقة التوبة الندم على ما سلف، والإقلاع عنه في الحال، والعزم على ألا يعاوده.', 'Berouw is spijt over het verleden, er nu mee ophouden en het voornemen het niet te herhalen.'],
    [64, 'إن كان الذنب متعلقا بحق آدمي وجب رد المظلمة إليه.', 'Betreft de zonde een recht van een mens, dan moet het onrecht hersteld worden.'],
    [65, 'قال ابن عباس: من آيس عباد الله من التوبة بعد هذا فقد جحد كتاب الله.', 'Ibn ʿAbbās: wie Allahs dienaren na dit vers laat wanhopen aan berouw, verloochent het Boek van Allah.'],
    [67, 'قسم الله خلقه إلى تائب وظالم، ولا ثالث: ﴿ومن لم يتب فأولئك هم الظالمون﴾ [الحجرات: 11].', 'Allah verdeelde Zijn schepping in berouwvollen en onrechtplegers, zonder derde (49:11).']
  ],
  terms: [
    ['التوبة النصوح', 'at-tawba an-naṣūḥ', 64, 'التوبة الصادقة التي تجمع الإقلاع والندم والعزم على عدم العود.', 'Oprecht berouw dat ophouden, spijt en het voornemen niet terug te keren verenigt.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['من فضائل التوبة', 'Verdiensten van berouw'],
      intro: ['كما في الصفحتين ٦٥–٦٦.', 'Zoals op p. 65–66.'],
      nodes: [
        [65, 'سبب للفلاح', 'Oorzaak van succes', '﴿وتوبوا إلى الله جميعا أيه المؤمنون لعلكم تفلحون﴾', '"keer allen berouwvol terug tot Allah, opdat jullie slagen" (24:31)'],
        [65, 'تبدل السيئات حسنات', 'Slechte daden worden goede', '﴿فأولئك يبدل الله سيئاتهم حسنات﴾', '"hun slechte daden vervangt Allah door goede" (25:70)'],
        [65, 'سبب للمتاع الحسن', 'Een goed leven', '﴿يمتعكم متاعا حسنا إلى أجل مسمى﴾', '"Hij laat jullie goed genieten tot een vastgestelde termijn" (11:3)'],
        [66, 'نزول المطر والإمداد بالأموال والبنين', 'Regen, bezit en kinderen', '﴿يرسل السماء عليكم مدرارا﴾', '"Hij zendt de hemel overvloedig over jullie" (71:11)']
      ]
    }
  ],
  sections: [
    [61, 'تقبل الشبهات', 'Twijfels aannemen', 'ما يلقي الشيطان فتنة لفريقين: الذين في قلوبهم مرض أي ضعف إيمان، تؤثر فيهم أدنى شبهة، والقاسية قلوبهم الذين يجعلون ما يلقيه حجة لباطلهم [الحج: 53].', 'Wat de duivel inwerpt is een beproeving voor twee groepen: wie zwak in geloof zijn, die door de geringste twijfel geraakt worden, en wie harde harten hebben, die het tot argument voor hun valsheid maken (22:53).'],
    [64, 'باب التوبة مفتوح', 'De deur van berouw staat open', 'يقبل الله التوبة النصوح من الكفار والمشركين والمنافقين والمرتدين والظلمة والعصاة: ﴿وهو الذي يقبل التوبة عن عباده ويعفو عن السيئات﴾ [الشورى: 25].', 'Allah aanvaardt oprecht berouw van ongelovigen, polytheïsten, hypocrieten, afvalligen, onrechtplegers en zondaars (42:25).'],
    [65, 'لا تقنطوا من رحمة الله', 'Wanhoop niet aan Allahs barmhartigheid', 'قال الحسن البصري في أصحاب الأخدود: انظروا إلى هذا الكرم والجود؛ قتلوا أولياءه وهو يدعوهم إلى التوبة والمغفرة؛ وقال تعالى: ﴿قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله﴾ [الزمر: 53].', 'Al-Ḥasan al-Baṣrī over de mensen van de greppel: zie deze vrijgevigheid; zij doodden Zijn vrienden en Hij roept hen tot berouw en vergeving. Allah zegt: wanhoop niet aan Mijn barmhartigheid (39:53).'],
    [66, 'شبهتان والرد عليهما', 'Twee twijfels en de weerlegging', 'من ترك التوبة خوفا من العود أخطأ، فإن عاد تاب مرة بعد مرة. ومن تركها خوفا من سخرية الناس قدم خشية الناس على خشية رب الناس، والله أحق أن يخشى. قال الحسن: ود الشيطان لو ظفر منكم بهذا، فلا تملوا من الاستغفار.', 'Wie berouw nalaat uit angst terug te vallen, vergist zich: valt hij terug, dan toont hij opnieuw berouw. Wie het nalaat uit angst voor spot, stelt de vrees voor mensen boven de vrees voor hun Heer. Al-Ḥasan: de duivel zou dit graag van jullie winnen; word dus niet moe van vergeving vragen.']
  ],
  keycards: [
    ['opsomming', 61, 'علامات مرض القلب', 'Kenmerken van een ziek hart', ['اتباع الشهوات', 'تقبل الشبهات وإثارتها', 'ألا تؤلمه القبائح ولا جهله بالحق', 'الوحشة من الصالحين والأنس بالعصاة', 'النفور من ذكر الله'], ['begeerten volgen', 'twijfels aannemen en verspreiden', 'geen pijn bij het lelijke of bij onwetendheid', 'vervreemding van vromen en vertrouwdheid met zondaars', 'afkeer van Allahs gedenken']],
    ['voorwaarde', 64, 'شروط التوبة النصوح', 'Voorwaarden van oprecht berouw', ['الإقلاع عن الذنب', 'الندم على ما مضى', 'العزم على ألا يعود', 'رد المظالم إن كان الحق لآدمي'], ['ophouden met de zonde', 'spijt over het verleden', 'het voornemen niet terug te keren', 'onrecht herstellen als het een recht van een mens betreft']],
    ['opsomming', 62, 'التعامل مع أمراض القلوب', 'Omgaan met hartziekten', ['الانتباه إليها في بدايتها', 'التشخيص الدقيق', 'مواجهة كل مرض بضده', 'مصارحة المريض'], ['vroeg opmerken', 'nauwkeurige diagnose', 'elke ziekte met haar tegendeel bestrijden', 'de zieke eerlijk aanspreken']]
  ],
  hadith: [
    { text: 'لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر … إن الله جميل يحب الجمال، الكبر بطر الحق، وغمط الناس', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'استشهد به الكتاب على التشخيص الدقيق.', nlNote: 'Het boek gebruikt dit als voorbeeld van nauwkeurige diagnose.', nl: 'Wie in zijn hart een stofje hoogmoed heeft, gaat het Paradijs niet binnen … Allah is mooi en houdt van schoonheid; hoogmoed is de waarheid afwijzen en de mensen minachten', pages: [62] },
    { text: 'لله أشد فرحا بتوبة عبده حين يتوب إليه من أحدكم كان على راحلته بأرض فلاة، فانفلتت منه وعليها طعامه وشرابه، فأيس منها، فأتى شجرة، فاضطجع في ظلها، قد أيس من راحلته، فبينا هو كذلك إذا هو بها قائمة عنده، فأخذ بخطامها، ثم قال من شدة الفرح: اللهم أنت عبدي وأنا ربك، أخطأ من شدة الفرح', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', nl: 'Allah is blijer met het berouw van Zijn dienaar dan iemand van jullie wiens rijdier met zijn eten en drinken in de woestijn wegliep; hij wanhoopte, ging onder een boom liggen, en plotseling stond het dier bij hem; hij greep de teugel en zei van blijdschap: O Allah, U bent mijn dienaar en ik ben Uw heer; hij vergiste zich van blijdschap', pages: [66] },
    { text: 'أذنب عبد ذنبا، فقال: اللهم اغفر لي ذنبي، فقال تبارك وتعالى: أذنب عبدي ذنبا، فعلم أن له ربا يغفر الذنب، ويأخذ بالذنب … اعمل ما شئت فقد غفرت لك', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'المعنى: ما دام كلما أذنب استغفر ولم يصر غفر الله له.', nlNote: 'Betekenis: zolang hij na elke zonde vergeving vraagt zonder te volharden, vergeeft Allah hem.', nl: 'Een dienaar zondigde en zei: O Allah, vergeef mij mijn zonde. Allah zei: Mijn dienaar zondigde en wist dat hij een Heer heeft die zonden vergeeft en ervoor straft … doe wat je wilt, Ik heb je vergeven', pages: [66] }
  ],
  persons: [
    ['mutarrif-ibn-abdallah', 'text', [62], 'وعظ المهلب لما رآه يسحب حلته.', 'Vermaande al-Muhallab toen hij hem zijn mantel zag slepen.'],
    ['al-muhallab-ibn-abi-sufra', 'text', [62], 'ترك مشيته بعد موعظة مطرف.', 'Liet zijn gang varen na de vermaning van Muṭarrif.'],
    ['al-hasan-al-basri', 'text', [65, 67], 'تعجب من كرم الله في دعوة أصحاب الأخدود إلى التوبة، وقال: لا تملوا من الاستغفار.', 'Verwonderde zich over Allahs vrijgevigheid en zei: word niet moe van vergeving vragen.'],
    ['ibn-abbas', 'text', [65], 'قال: من آيس عباد الله من التوبة فقد جحد كتاب الله.', 'Zei: wie mensen laat wanhopen aan berouw, verloochent Allahs Boek.'],
    ['anas-ibn-malik', 'text', [66], 'روى حديث فرح الله بتوبة عبده.', 'Overleverde de hadith over Allahs vreugde om berouw.'],
    ['abu-hurayra', 'text', [66], 'روى حديث «أذنب عبد ذنبا».', 'Overleverde "een dienaar zondigde".']
  ],
  review: [
    ['تعرف أمراض القلوب بآثارها في الأفعال والسلوك والأقوال.', 'Hartziekten herken je aan hun gevolgen in daden, gedrag en woorden.'],
    ['يواجه كل مرض بضده بعد تشخيص دقيق.', 'Elke ziekte wordt na nauwkeurige diagnose met haar tegendeel bestreden.'],
    ['شروط التوبة: الإقلاع والندم والعزم.', 'Voorwaarden van berouw: ophouden, spijt en voornemen.'],
    ['من عاد إلى الذنب تاب مرة بعد مرة ولا يقنط.', 'Wie terugvalt, toont steeds opnieuw berouw en wanhoopt niet.']
  ],
  quiz: [
    { type: 'mc', page: 64, q: ['أي هذه ليس من شروط التوبة النصوح؟', 'Wat is géén voorwaarde van oprecht berouw?'], options: [['أن يعلنها أمام الناس', 'الإقلاع عن الذنب', 'الندم على ما مضى', 'العزم على ألا يعود'], ['het openlijk aan mensen tonen', 'ophouden met de zonde', 'spijt over het verleden', 'het voornemen niet terug te keren']], answer: 0, explain: ['الشروط ثلاثة كما في الإطار ص ٦٤.', 'De drie voorwaarden staan in het kader op p. 64.'] },
    { type: 'tf', page: 66, q: ['من خاف أن يعود إلى الذنب فالأولى ألا يتوب.', 'Wie bang is terug te vallen, kan beter geen berouw tonen.'], answer: 1, explain: ['هذا خطأ، بل يتوب كلما أذنب.', 'Dat is een fout; hij toont berouw telkens als hij zondigt.'] },
    { type: 'mc', page: 62, q: ['ما الخطوة الأولى في التعامل مع أمراض القلوب؟', 'Wat is de eerste stap bij hartziekten?'], options: [['الانتباه إليها في بدايتها', 'تركها حتى تستفحل', 'إنكار وجودها', 'الانشغال عنها'], ['ze vroeg opmerken', 'ze laten tot ze verergeren', 'ontkennen dat ze bestaan', 'je ervan afleiden']], answer: 0, explain: ['كما في الصفحة ٦٢.', 'Zoals op p. 62.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٦٣ و٦٨.', 'Oefeningen van het boek op p. 63 en 68. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
