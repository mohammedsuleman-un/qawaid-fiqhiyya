// Hoofdstukkaart bij التفسير (٤), eenheid 2: سورة التين (les 2, boek p. 13–15).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md).
// Het boek noemt bij deze soera geen hadith.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '2',
  unit: 2,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '13–15',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة التين', 'Soera at-Tīn'],
  subtitle: ['سورة مكية، ثماني آيات', 'Mekkaans, acht verzen'],
  summary: [
    'يقسم الله بمواضع بعث أعظم الرسل: أرض التين والزيتون، وطور سينين، والبلد الأمين، على أنه خلق الإنسان في أحسن تقويم، ثم رده أسفل سافلين إلا المؤمنين العاملين، ثم ينكر على من يكذب بالدين، وهو أحكم الحاكمين.',
    'Allah zweert bij de plaatsen waar de grootste boodschappers gezonden werden: het land van de vijg en de olijf, de berg Sinai en de veilige stad, dat Hij de mens in de mooiste gestalte schiep en hem daarna terugbracht tot het laagste der lagen, behalve wie geloven en goed doen. Daarna keurt Hij af dat iemand de vergelding loochent, terwijl Hij de wijste rechter is.'
  ],
  map: {
    title: ['سورة التين في خريطة واحدة', 'Soera at-Tīn in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة التين', 'Soera at-Tīn'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['القسم', 'De eed'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 13, children: [['التين والزيتون: الشام، مبعث عيسى', 'vijg en olijf: de Shām, waar ʿĪsā gezonden werd'], ['طور سينين: مبعث موسى', 'de berg Sinai: waar Mūsā gezonden werd'], ['البلد الأمين: مكة، مبعث محمد ﷺ', 'de veilige stad: Mekka, waar Muḥammad ﷺ gezonden werd']] },
      { label: ['المقسم عليه', 'Waarop gezworen wordt'], sub: ['الآيات ٤–٦', 'vers 4–6'], page: 14, children: [['أحسن تقويم', 'de mooiste gestalte'], ['أسفل سافلين', 'het laagste der lagen'], ['إلا المؤمنين: أجر غير ممنون', 'behalve de gelovigen: onafgebroken beloning']] },
      { label: ['الإنكار على المكذب', 'Afkeuring van de loochenaar'], sub: ['الآيتان ٧–٨', 'vers 7–8'], page: 14, children: [['فما يكذبك بعد بالدين', 'wat brengt je ertoe de vergelding te loochenen?'], ['أليس الله بأحكم الحاكمين', 'is Allah niet de wijste rechter?']] }
    ]
  },
  points: [
    [13, 'أقسم الله بالتين والزيتون لكثرة منافعهما، ولأن منبتهما الشام مبعث عيسى ابن مريم.', 'Allah zweert bij de vijg en de olijf om hun vele nut, en omdat ze groeien in de Shām, waar ʿĪsā ibn Maryam gezonden werd.'],
    [13, 'ذكر الزيتون كثيرا في القرآن، أما التين فلم يذكر إلا في هذا الموضع.', 'De olijf wordt vaak in de Koran genoemd, de vijg alleen op deze plaats.'],
    [14, '﴿في أحسن تقويم﴾: في أحسن صورة وخلقة، معتدل الأعضاء، سليم الفطرة.', '"In de mooiste gestalte": in de beste vorm en schepping, met harmonieuze ledematen en een gezonde aangeboren aard.'],
    [14, '﴿أسفل سافلين﴾: أسفل النار، لمن انشغل باللهو واللعب ورضي لنفسه بأدنى الأخلاق.', '"Het laagste der lagen": het diepste van het Vuur, voor wie zich bezighield met vermaak en voor zichzelf de laagste zeden aanvaardde.'],
    [14, '﴿أليس الله بأحكم الحاكمين﴾ استفهام تقريري: أفيترك خلقه عبثا بلا أمر ولا نهي ولا ثواب ولا عقاب؟', '"Is Allah niet de wijste rechter?" is een bevestigende vraag: zou Hij Zijn schepping dan nutteloos laten, zonder gebod, verbod, beloning en straf?']
  ],
  terms: [
    ['طور سينين', 'ṭūr sīnīn', 13, 'جبل سيناء، موضع نبوة موسى.', 'De berg Sinai, waar Mūsā profeet werd.'],
    ['البلد الأمين', 'al-balad al-amīn', 13, 'مكة، موضع نبوة محمد ﷺ.', 'Mekka, waar Muḥammad ﷺ profeet werd.'],
    ['تقويم', 'taqwīm', 14, 'الصورة والخلقة والهيئة.', 'Gestalte, schepping en vorm.'],
    ['غير ممنون', 'ghayr mamnūn', 14, 'غير مقطوع.', 'Onafgebroken.'],
    ['الدين', 'ad-dīn', 14, 'هنا: يوم الجزاء والحساب على الأعمال.', 'Hier: de Dag van de vergelding en afrekening van de daden.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الأماكن الثلاثة المقسم بها', 'De drie plaatsen van de eed'],
      intro: ['كما في الصفحتين ١٣ و١٤.', 'Zoals op p. 13 en 14.'],
      columns: [['المقصود', 'Wat bedoeld is'], ['النبي المبعوث فيه', 'De profeet die er gezonden werd']],
      rows: [
        { label: ['التين والزيتون', 'Vijg en olijf'], cells: [['أرض الشام', 'het land van de Shām'], ['عيسى ابن مريم', 'ʿĪsā ibn Maryam']] },
        { label: ['طور سينين', 'De berg Sinai'], cells: [['جبل سيناء', 'de Sinai'], ['موسى', 'Mūsā']] },
        { label: ['البلد الأمين', 'De veilige stad'], cells: [['مكة', 'Mekka'], ['محمد ﷺ', 'Muḥammad ﷺ']] }
      ],
      page: 13
    }
  ],
  sections: [
    [14, 'عناية الله بخلق الإنسان', 'Allahs zorg voor de schepping van de mens', 'عناية الله بهذا المخلوق مع ضعفه تدل على مكانته عنده، والمراد هنا الصفات الروحية لا البدن، فإذا انحرف عن الفطرة والإيمان رد إلى أسفل سافلين.', 'Allahs zorg voor dit schepsel ondanks zijn zwakheid toont zijn positie bij Hem. Het gaat hier om de geestelijke eigenschappen, niet om het lichaam: wie afwijkt van de aangeboren aard en het geloof, wordt teruggebracht tot het laagste.'],
    [15, 'تنبيه مهم', 'Een belangrijke waarschuwing', 'على المسلم أن يرتقي في أخلاقه ودينه، فإن انحرف عن الفطرة انحط حتى تكون البهائم أرفع منه، لأنها تسير على فطرتها وتسبح ربها.', 'De moslim moet zich verheffen in zeden en religie. Wijkt hij af van de aangeboren aard, dan zakt hij af tot de dieren hoger staan dan hij, want zij volgen hun aard en verheerlijken hun Heer.']
  ],
  keycards: [
    ['uitzondering', 14, 'من يستثنى من أسفل سافلين', 'Wie uitgezonderd is van het laagste der lagen', ['الذين آمنوا', 'وعملوا الصالحات', 'فلهم أجر غير ممنون'], ['wie geloven', 'en goede daden doen', 'zij krijgen een onafgebroken beloning']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['أقسم الله بمواضع بعث عيسى وموسى ومحمد عليهم الصلاة والسلام.', 'Allah zweert bij de plaatsen waar ʿĪsā, Mūsā en Muḥammad gezonden werden.'],
    ['خلق الله الإنسان في أحسن تقويم بدنا وفطرة.', 'Allah schiep de mens in de mooiste gestalte, naar lichaam en aard.'],
    ['من انحرف عن الفطرة والإيمان رد أسفل سافلين.', 'Wie afwijkt van de aangeboren aard en het geloof, wordt teruggebracht tot het laagste.']
  ],
  quiz: [
    { type: 'mc', page: 13, q: ['ما المقصود بـ﴿البلد الأمين﴾؟', 'Wat is "de veilige stad"?'], options: [['مكة', 'المدينة', 'بيت المقدس', 'الطائف'], ['Mekka', 'Medina', 'Jeruzalem', 'aṭ-Ṭāʾif']], answer: 0, explain: ['هي مكة موضع نبوة محمد ﷺ.', 'Mekka, waar Muḥammad ﷺ profeet werd.'] },
    { type: 'tf', page: 13, q: ['ذكر التين في القرآن كثيرا.', 'De vijg wordt vaak in de Koran genoemd.'], answer: 1, explain: ['لم يذكر التين إلا في هذا الموضع، أما الزيتون فكثير.', 'De vijg alleen hier; de olijf vaak.'] },
    { type: 'mc', page: 14, q: ['ما نوع الاستفهام في ﴿أليس الله بأحكم الحاكمين﴾؟', 'Wat voor vraag is "Is Allah niet de wijste rechter?"'], options: [['تقريري', 'إنكاري للنفي', 'حقيقي يطلب جوابا', 'تعجبي'], ['een bevestigende vraag', 'een ontkennende vraag', 'een echte vraag om informatie', 'een vraag van verbazing']], answer: 0, explain: ['استفهام تقريري يثبت حكمته في الجزاء.', 'Een bevestigende vraag die Zijn wijsheid in de vergelding vaststelt.'] },
    { type: 'mc', page: 14, q: ['ما معنى ﴿أجر غير ممنون﴾؟', 'Wat betekent "een beloning die niet mamnūn is"?'], options: [['غير مقطوع', 'قليل', 'مؤجل', 'مشروط'], ['onafgebroken', 'gering', 'uitgesteld', 'voorwaardelijk']], answer: 0, explain: ['أي دائم لا ينقطع.', 'Blijvend, zonder einde.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ١٥.', 'Oefening van het boek op p. 15. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
