// Hoofdstukkaart bij التفسير (٣), eenheid 10: سورة الضحى (les 24, boek p. 92–95).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '24',
  unit: 10,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '92–95',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الضحى', 'Soera aḍ-Ḍuḥā'],
  subtitle: ['درس واحد في صفحة واحدة', 'Eén les op één pagina'],
  summary: [
    'سورة مكية نزلت لما فتر الوحي فقال المشركون: ودع محمد، فأقسم الله بالضحى والليل أنه ما ودع نبيه وما قلاه، وبشره بأن الآخرة خير له وأنه سيعطيه حتى يرضى، ثم ذكره بنعمه عليه في يتمه وجهله وفقره، وأمره ألا يقهر اليتيم ولا ينهر السائل وأن يحدث بنعمة ربه.',
    'Een Mekkaanse soera die neerdaalde toen de openbaring een tijd uitbleef en de veelgodenaanbidders zeiden dat Muḥammad verlaten was. Allah zweert bij de voormiddag en de nacht dat Hij zijn Profeet niet verliet en niet haat, belooft hem dat het hiernamaals beter voor hem is en dat Hij hem zal geven tot hij tevreden is, herinnert hem aan zijn gunsten toen hij wees, zonder kennis en arm was, en beveelt hem de wees niet te onderdrukken, de vrager niet af te snauwen en over de gunst van zijn Heer te spreken.'
  ],
  map: {
    title: ['سورة الضحى في خريطة واحدة', 'Soera aḍ-Ḍuḥā in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الضحى', 'Soera aḍ-Ḍuḥā'], ['الوحدة العاشرة', 'Eenheid 10']],
    nodes: [
      { label: ['سبب النزول', 'Aanleiding'], sub: ['ص ٩٢', 'p. 92'], page: 92, children: [['فتور الوحي', 'de openbaring bleef uit'], ['ودع محمد', '"Muḥammad is verlaten"']] },
      { label: ['القسم والبشارة', 'Eed en goed nieuws'], sub: ['الآيات ١–٥', 'vers 1–5'], page: 93, children: [['ما ودعك ربك وما قلى', 'je Heer verliet je niet en haat je niet'], ['وللآخرة خير لك', 'het hiernamaals is beter voor je'], ['يعطيك ربك فترضى', 'je Heer zal je geven tot je tevreden bent']] },
      { label: ['النعم الثلاث', 'Drie gunsten'], sub: ['الآيات ٦–٨', 'vers 6–8'], page: 93, children: [['يتيما فآوى', 'wees, en Hij gaf onderdak'], ['ضالا فهدى', 'zonder kennis, en Hij leidde'], ['عائلا فأغنى', 'arm, en Hij maakte rijk']] },
      { label: ['الأوامر الثلاثة', 'Drie bevelen'], sub: ['الآيات ٩–١١', 'vers 9–11'], page: 94, children: [['فلا تقهر اليتيم', 'onderdruk de wees niet'], ['فلا تنهر السائل', 'snauw de vrager niet af'], ['فحدث بنعمة ربك', 'spreek over de gunst van je Heer']] }
    ]
  },
  points: [
    [92, 'نزلت السورة لما أبطأ جبريل على النبي ﷺ فقال المشركون: ودع محمد.', 'De soera daalde neer toen Jibrīl een tijd wegbleef en de veelgodenaanbidders zeiden: Muḥammad is verlaten.'],
    [93, 'الضحى أول النهار، وقيل: النهار كله.', 'Aḍ-ḍuḥā is het begin van de dag; volgens anderen de hele dag.'],
    [93, '﴿ما ودعك ربك وما قلى﴾: ما تركك ولا أهملك ولا أبغضك؛ والقالي المبغض.', '"Je Heer heeft je niet verlaten en haat je niet": Hij liet je niet in de steek en verwaarloosde je niet; al-qālī is wie haat.'],
    [93, 'الآخرة وما أعد الله لنبيه ﷺ خير من الدنيا، فلا يحزن على ما فاته.', 'Het hiernamaals en wat Allah zijn Profeet ﷺ bereidde is beter dan deze wereld; hij hoeft niet te treuren om wat hem ontging.'],
    [93, 'سيعطيه ربه في الآخرة حتى يرضى، ويرضيه في أمته.', 'Zijn Heer zal hem in het hiernamaals geven tot hij tevreden is, en hem tevreden stellen over zijn umma.'],
    [94, 'كما آواك الله في يتمك فلا تقهر اليتيم وأحسن إليه.', 'Zoals Allah jou onderdak gaf in je wezenschap, onderdruk dan de wees niet en wees goed voor hem.'],
    [94, 'أعظم النعم التي يحدث بها: النبوة والرسالة والهداية بالقرآن.', 'De grootste gunst om over te spreken: het profeetschap, de boodschap en de leiding door de Koran.'],
    [94, '﴿وأما السائل فلا تنهر﴾ يشمل سائل المال وسائل العلم، فعلى المعلم أن يحسن خلقه مع المتعلم.', '"Snauw de vrager niet af" geldt voor wie om geld en wie om kennis vraagt; de leraar moet goed karakter tonen tegenover de leerling.']
  ],
  terms: [
    ['الضحى', 'aḍ-ḍuḥā', 93, 'أول النهار، وقيل: النهار كله.', 'Het begin van de dag; of de hele dag.'],
    ['سجى', 'sajā', 93, 'سكن وغطى وأقبل بظلامه.', 'Werd stil, bedekte en kwam met zijn duisternis.'],
    ['ودعك', 'waddaʿaka', 93, 'تركك.', 'Verliet je.'],
    ['قلى', 'qalā', 93, 'أبغض؛ والقالي المبغض.', 'Haatte; al-qālī is wie haat.'],
    ['آوى', 'āwā', 93, 'جعل لك مأوى ومسكنا.', 'Gaf je een onderdak en woonplaats.'],
    ['ضالا', 'ḍāllan', 93, 'غير عالم، فهداه للتوحيد والنبوة.', 'Zonder kennis; Hij leidde hem tot tawḥīd en profeetschap.'],
    ['عائلا', 'ʿāʾilan', 93, 'فقيرا ذا عيال؛ والعيلة الفقر.', 'Arm met een gezin; ʿayla is armoede.'],
    ['تقهر', 'taqhar', 94, 'تحتقر وتذل وتظلم.', 'Kleineren, vernederen en onrecht doen.'],
    ['تنهر', 'tanhar', 94, 'تزجر وتغلظ له القول.', 'Afsnauwen en hard toespreken.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['النعم والأوامر المقابلة لها', 'De gunsten en de bevelen die erbij horen'],
      intro: ['كما في الآيات ٦–١١.', 'Zoals in vers 6–11.'],
      columns: [['النعمة', 'Gunst'], ['الأمر', 'Bevel']],
      rows: [
        { label: ['اليتم', 'Wees'], cells: [['ألم يجدك يتيما فآوى', 'vond Hij je niet als wees en gaf Hij je onderdak?'], ['فأما اليتيم فلا تقهر', 'onderdruk de wees dan niet']] },
        { label: ['الحاجة', 'Behoefte'], cells: [['ووجدك عائلا فأغنى', 'Hij vond je arm en maakte je rijk'], ['وأما السائل فلا تنهر', 'en snauw de vrager niet af']] },
        { label: ['الهداية', 'Leiding'], cells: [['ووجدك ضالا فهدى', 'Hij vond je zonder kennis en leidde je'], ['وأما بنعمة ربك فحدث', 'en spreek over de gunst van je Heer']] }
      ],
      page: 94
    }
  ],
  sections: [
    [94, 'لماذا ﴿فآوى﴾ لا «فآواك»؟', 'Waarom "en gaf onderdak" en niet "en gaf jou onderdak"?', 'لسبب لفظي هو مراعاة الفواصل، ولسبب معنوي: الإيواء أوسع من أن يقصر على النبي ﷺ، فقد آواه الله وآوى به المؤمنين ونصرهم.', 'Om een taalkundige reden, het rijm van de versuitgangen, en een inhoudelijke: het onderdak was ruimer dan alleen voor de Profeet ﷺ; Allah gaf hem onderdak en via hem ook de gelovigen, en hielp hen.'],
    [94, 'التحدث بالنعمة', 'Spreken over de gunst', 'يحدث بنعم الله في الدنيا والآخرة: الإيواء بعد اليتم، والهداية بعد الجهل، والغنى بعد الفقر، وأعظمها النبوة.', 'Hij spreekt over Allahs gunsten in deze wereld en het hiernamaals: onderdak na wezenschap, leiding na onwetendheid, rijkdom na armoede; de grootste is het profeetschap.']
  ],
  keycards: [
    ['opsomming', 93, 'نعم الله على نبيه ﷺ في السورة', 'Allahs gunsten aan zijn Profeet ﷺ in de soera', ['آواه بعد اليتم', 'هداه بعد أن لم يكن يدري ما الكتاب ولا الإيمان', 'أغناه بعد الفقر'], ['onderdak na wezenschap', 'leiding toen hij niet wist wat het Boek en het geloof waren', 'rijkdom na armoede']]
  ],
  hadith: [
    { text: 'أبطأ جبريل على النبي ﷺ فقال المشركون: ودع محمد، فأنزل الله ﴿والضحى والليل إذا سجى ما ودعك ربك وما قلى﴾', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'جندب بن عبد الله البجلي', narratorNl: 'Jundub ibn ʿAbd Allāh al-Bajalī', note: 'سبب نزول السورة، بمعنى ما في الكتاب.', nlNote: 'De aanleiding van de soera, naar de strekking in het boek.', nl: 'Jibrīl bleef een tijd weg bij de Profeet ﷺ; de veelgodenaanbidders zeiden dat Muḥammad verlaten was. Toen openbaarde Allah: "Bij de voormiddag, en bij de nacht wanneer hij stil wordt: je Heer heeft je niet verlaten en haat je niet"', pages: [92] }
  ],
  persons: [
    ['jundub-ibn-abdallah', 'text', [92], 'روى سبب نزول سورة الضحى.', 'Overleverde de aanleiding van soera aḍ-Ḍuḥā.'],
    ['al-bukhari', 'takhrij', [92], 'روى حديث جندب.', 'Overleverde de hadith van Jundub.'],
    ['muslim', 'takhrij', [92], 'روى حديث جندب.', 'Overleverde de hadith van Jundub.']
  ],
  review: [
    ['ما ودع الله نبيه ﷺ وما قلاه.', 'Allah heeft zijn Profeet ﷺ niet verlaten en haat hem niet.'],
    ['الآخرة خير له، وسيعطيه ربه حتى يرضى.', 'Het hiernamaals is beter voor hem, en zijn Heer zal hem geven tot hij tevreden is.'],
    ['آواه بعد اليتم، وهداه، وأغناه.', 'Hij gaf hem onderdak na wezenschap, leidde hem en maakte hem rijk.'],
    ['لا تقهر اليتيم ولا تنهر السائل، وحدث بنعمة ربك.', 'Onderdruk de wees niet, snauw de vrager niet af, en spreek over de gunst van je Heer.']
  ],
  quiz: [
    { type: 'mc', page: 92, q: ['ما سبب نزول سورة الضحى؟', 'Wat was de aanleiding van soera aḍ-Ḍuḥā?'], options: [['قول المشركين: ودع محمد لما أبطأ الوحي', 'غزوة بدر', 'موت أبي طالب', 'الهجرة'], ['de veelgodenaanbidders zeiden dat Muḥammad verlaten was toen de openbaring uitbleef', 'de slag bij Badr', 'de dood van Abū Ṭālib', 'de hidjra']], answer: 0, explain: ['رواه البخاري ومسلم عن جندب.', 'Overgeleverd door al-Bukhārī en Muslim van Jundub.'] },
    { type: 'mc', page: 93, q: ['ما معنى ﴿قلى﴾؟', 'Wat betekent qalā?'], options: [['أبغض', 'نسي', 'غضب', 'ابتعد'], ['haatte', 'vergat', 'werd boos', 'ging weg']], answer: 0, explain: ['القالي المبغض.', 'Al-qālī is wie haat.'] },
    { type: 'mc', page: 93, q: ['ما معنى ﴿عائلا﴾؟', 'Wat betekent ʿāʾilan?'], options: [['فقيرا', 'يتيما', 'مريضا', 'مسافرا'], ['arm', 'wees', 'ziek', 'reiziger']], answer: 0, explain: ['العيلة الفقر.', 'ʿAyla is armoede.'] },
    { type: 'tf', page: 94, q: ['﴿وأما السائل فلا تنهر﴾ خاص بسائل المال.', '"Snauw de vrager niet af" geldt alleen voor wie om geld vraagt.'], answer: 1, explain: ['يشمل سائل المال وسائل العلم.', 'Het geldt ook voor wie om kennis vraagt.'] },
    { type: 'mc', page: 94, q: ['ما الذي يقابل ﴿ألم يجدك يتيما فآوى﴾ من الأوامر؟', 'Welk bevel hoort bij "vond Hij je niet als wees en gaf Hij onderdak"?'], options: [['فأما اليتيم فلا تقهر', 'وأما السائل فلا تنهر', 'وأما بنعمة ربك فحدث', 'فسبح بحمد ربك'], ['onderdruk de wees niet', 'snauw de vrager niet af', 'spreek over de gunst van je Heer', 'verheerlijk je Heer met lof']], answer: 0, explain: ['كما آواك الله فأحسن إلى اليتيم.', 'Zoals Allah jou onderdak gaf, wees goed voor de wees.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٩٥.', 'Oefening van het boek op p. 95. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
