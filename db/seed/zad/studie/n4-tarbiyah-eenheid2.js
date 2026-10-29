// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 2: الغفلة (lessen 3–4, boek p. 15–19).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '3',
  unit: 2,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '15–19',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['الغفلة', 'Onachtzaamheid'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'الغفلة أن ينسى الإنسان الشيء ولا يلتفت إليه، وهي محمودة عن المعاصي ومذمومة عن الله وطاعته وذكره والآخرة. والمذمومة عارضة ومتكررة وتامة، ولها عقوبات وأسباب، وعلاجها بالذكر والدعاء وقيام الليل وزيارة القبور.',
    'Onachtzaamheid is iets vergeten en er geen aandacht aan geven; zij is lofwaardig ten aanzien van zonden, en afkeurenswaardig ten aanzien van Allah, Zijn gehoorzaamheid, Zijn gedenken en het hiernamaals. De afkeurenswaardige is voorbijgaand, herhaald of volledig; zij heeft straffen en oorzaken, en wordt behandeld met gedenken, smeekbede, nachtgebed en het bezoeken van graven.'
  ],
  map: {
    title: ['الغفلة في خريطة واحدة', 'Onachtzaamheid in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['الغفلة', 'Onachtzaamheid'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['أنواعها', 'Soorten'], sub: ['ص ١٥', 'p. 15'], page: 15, children: [['محمودة', 'lofwaardig'], ['مذمومة', 'afkeurenswaardig']] },
      { label: ['أقسام المذمومة', 'Delen van de afkeurenswaardige'], sub: ['ص ١٦', 'p. 16'], page: 16, children: [['عارضة', 'voorbijgaand'], ['متكررة', 'herhaald'], ['تامة', 'volledig']] },
      { label: ['عقوباتها وأسبابها', 'Straffen en oorzaken'], sub: ['ص ١٧', 'p. 17'], page: 17, children: [['سوء الخاتمة', 'een slecht einde'], ['الحرص على الدنيا', 'hebzucht naar de wereld']] },
      { label: ['علاجها', 'Behandeling'], sub: ['ص ١٧–١٨', 'p. 17–18'], page: 17, children: [['الذكر', 'gedenken'], ['الدعاء', 'smeekbede'], ['قيام الليل', 'nachtgebed'], ['زيارة القبور', 'graven bezoeken']] }
    ]
  },
  points: [
    [15, 'الغفلة المحمودة: الغفلة عن المعاصي والمنكرات، وبها وصف الله المحصنات الغافلات.', 'Lofwaardige onachtzaamheid: argeloosheid ten aanzien van zonden en gruwelen; zo beschreef Allah de kuise, argeloze vrouwen.'],
    [15, 'الغفلة المذمومة: الغفلة عن الله وطاعته وذكره، وعن الآخرة والحساب والجزاء، وهي من مفسدات القلب.', 'Afkeurenswaardige onachtzaamheid: ten aanzien van Allah, Zijn gehoorzaamheid en gedenken, en het hiernamaals; zij bederft het hart.'],
    [15, 'نهى الله نبيه ﷺ أن يكون من الغافلين، ونهى عن طاعة من أغفل قلبه عن ذكره.', 'Allah verbood Zijn Profeet ﷺ bij de onachtzamen te horen en verbood het volgen van wie Hij onachtzaam maakte voor Zijn gedenken.'],
    [16, 'الغفلة العارضة تصيب الصالحين، فيتنبهون سريعا ويتوبون.', 'Voorbijgaande onachtzaamheid treft vromen; zij worden snel attent en tonen berouw.'],
    [16, 'الغفلة المتكررة غفلة العصاة، يحتاجون إلى التذكير دائما.', 'Herhaalde onachtzaamheid is die van zondaars; zij moeten steeds herinnerd worden.'],
    [16, 'الغفلة التامة غفلة الكفار، وإخراجهم منها بدعوتهم إلى الإسلام.', 'Volledige onachtzaamheid is die van ongelovigen; men haalt hen eruit door hen tot de islam te roepen.'],
    [17, 'أشد عقوبات الغفلة دخول النار.', 'De zwaarste straf voor onachtzaamheid is het binnengaan van het Vuur.'],
    [18, 'زيارة القبور تزيل الغفلة وتكشف حجاب الغافلين.', 'Graven bezoeken neemt onachtzaamheid weg en verwijdert de sluier van de onachtzamen.']
  ],
  terms: [
    ['الغفلة', 'al-ghafla', 15, 'أن ينسى الإنسان الشيء ولا يلتفت إليه.', 'Dat de mens iets vergeet en er geen aandacht aan geeft.'],
    ['الغافلات', 'al-ghāfilāt', 15, 'اللاتي غفلن عن الفاحشة فلا تخطر ببالهن.', 'De vrouwen die argeloos zijn ten aanzien van zedeloosheid; het komt niet bij hen op.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أقسام الغفلة المذمومة', 'Delen van de afkeurenswaardige onachtzaamheid'],
      intro: ['كما في الصفحة ١٦.', 'Zoals op p. 16.'],
      columns: [['من تصيب', 'Wie'], ['حالها', 'Kenmerk']],
      rows: [
        { label: ['العارضة', 'Voorbijgaand'], cells: [['الصالحين في بعض الأوقات', 'vromen op sommige momenten'], ['قصيرة، يتنبهون ويتوبون سريعا', 'kort; zij worden snel attent en tonen berouw']] },
        { label: ['المتكررة', 'Herhaald'], cells: [['العصاة من المسلمين', 'zondaars onder de moslims'], ['يغفلون ويفيقون، يحتاجون إلى التذكير', 'soms onachtzaam, soms wakker; zij moeten herinnerd worden']] },
        { label: ['التامة', 'Volledig'], cells: [['الكفار', 'ongelovigen'], ['كالسكارى، يخرجون منها بالدعوة', 'als dronken; men roept hen tot de islam']] }
      ],
      page: 16
    }
  ],
  sections: [
    [17, 'عقوبات الغفلة', 'Straffen voor onachtzaamheid', 'منها: استحقاق العقوبة في الدنيا، والصرف عن تدبر الآيات، والحرمان من رحمة الله، ورد الدعاء، وتسلط الشياطين، وتتابع الغفلات، وسوء الخاتمة، والندم في الآخرة، وأشدها دخول النار.', 'Onder meer: straf in deze wereld, afgehouden worden van het overdenken van verzen, ontzegging van Allahs barmhartigheid, afgewezen smeekbede, overheersing door duivels, opeenvolgende onachtzaamheid, een slecht einde, spijt in het hiernamaals, en het zwaarst: het Vuur.'],
    [17, 'أسباب الغفلة', 'Oorzaken van onachtzaamheid', 'أهمها: الحرص على ملذات الدنيا، وموت الإحساس بالذنب، وطلب راحة البدن، واتباع الهوى، والانشغال الزائد بالعمل، والترف، والركون إلى الدنيا، ومصاحبة أهل الغفلة، وكثرة المباحات.', 'De belangrijkste: hebzucht naar wereldse genietingen, afgestorven zondebesef, lichamelijk comfort najagen, de lust volgen, overmatig opgaan in werk, weelde, zich neerleggen bij de wereld, omgang met onachtzamen, en veel toegestane dingen.']
  ],
  keycards: [
    ['onderscheid', 15, 'الغفلة المحمودة والمذمومة', 'Lofwaardige en afkeurenswaardige onachtzaamheid', ['المحمودة: عن المعاصي والمنكرات', 'المذمومة: عن الله وطاعته وذكره والآخرة'], ['lofwaardig: ten aanzien van zonden en gruwelen', 'afkeurenswaardig: ten aanzien van Allah, Zijn gehoorzaamheid, gedenken en het hiernamaals']],
    ['opsomming', 17, 'علاج الغفلة', 'Behandeling van onachtzaamheid', ['ذكر الله تعالى', 'الدعاء', 'قيام الليل', 'زيارة القبور'], ['Allah gedenken', 'smeekbede', 'nachtgebed', 'graven bezoeken']]
  ],
  hadith: [
    { text: 'اللهم إني أعوذ بك من العجز، والكسل، والبخل، والهرم، والقسوة، والغفلة، والذلة، والمسكنة، وأعوذ بك من الفقر، والكفر، والشرك، والنفاق، والسمعة، والرياء', takhrij: 'رواه ابن حبان والحاكم، وصححه الألباني', takhrijNl: 'Ibn Ḥibbān en al-Ḥākim; ṣaḥīḥ volgens al-Albānī', narrator: 'أنس', narratorNl: 'Anas', nl: 'O Allah, ik zoek toevlucht bij U tegen onmacht, luiheid, gierigheid, hoge ouderdom, hardheid, onachtzaamheid, vernedering en ellende; en ik zoek toevlucht bij U tegen armoede, ongeloof, shirk, hypocrisie, roem zoeken en vertoon', pages: [18] },
    { text: 'من قام بعشر آيات لم يكتب من الغافلين، ومن قام بمائة آية كتب من القانتين، ومن قام بألف آية كتب من المقنطرين', takhrij: 'رواه أبو داود، وصححه الألباني', takhrijNl: 'Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', narrator: 'عبد الله بن عمرو بن العاص', narratorNl: 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', nl: 'Wie \'s nachts met tien verzen bidt, wordt niet bij de onachtzamen geschreven; wie met honderd verzen bidt, bij de toegewijden; en wie met duizend verzen bidt, bij hen die een schat aan beloning krijgen', pages: [18] },
    { text: 'ألا إني قد كنت نهيتكم عن ثلاث، ثم بدا لي فيهن: نهيتكم عن زيارة القبور، ثم بدا لي أنها ترق القلب، وتدمع العين، وتذكر الآخرة، فزوروها ولا تقولوا هجرا', takhrij: 'رواه أحمد، وصححه الأرناؤوط', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Arnaʾūṭ', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', nl: 'Ik had jullie drie dingen verboden, daarna zag ik het anders: ik had jullie het bezoeken van graven verboden, daarna zag ik dat het het hart zacht maakt, het oog doet tranen en aan het hiernamaals herinnert; bezoek ze dus, maar zeg geen ongepaste dingen', pages: [18] }
  ],
  persons: [
    ['anas-ibn-malik', 'text', [18], 'روى دعاء الاستعاذة من الغفلة وحديث زيارة القبور.', 'Overleverde de smeekbede tegen onachtzaamheid en de hadith over het bezoeken van graven.'],
    ['abdallah-ibn-amr', 'text', [18], 'روى فضل قيام الليل بالآيات.', 'Overleverde de verdienste van het nachtgebed met verzen.'],
    ['al-albani', 'takhrij', [18], 'صحح حديثي الاستعاذة وقيام الليل.', 'Verklaarde de hadith over toevlucht en nachtgebed authentiek.'],
    ['al-arnaut', 'takhrij', [18], 'صحح حديث زيارة القبور.', 'Verklaarde de hadith over het bezoeken van graven authentiek.']
  ],
  review: [
    ['الغفلة محمودة عن المعاصي، ومذمومة عن الله والآخرة.', 'Onachtzaamheid is lofwaardig ten aanzien van zonden, afkeurenswaardig ten aanzien van Allah en het hiernamaals.'],
    ['المذمومة عارضة ومتكررة وتامة.', 'De afkeurenswaardige is voorbijgaand, herhaald of volledig.'],
    ['أشد عقوباتها دخول النار.', 'Haar zwaarste straf is het Vuur.'],
    ['علاجها الذكر والدعاء وقيام الليل وزيارة القبور.', 'Behandeling: gedenken, smeekbede, nachtgebed en graven bezoeken.']
  ],
  quiz: [
    { type: 'mc', page: 16, q: ['ما الغفلة التي يعيش فيها الكفار؟', 'Welke onachtzaamheid kennen de ongelovigen?'], options: [['التامة', 'العارضة', 'المتكررة', 'المحمودة'], ['volledig', 'voorbijgaand', 'herhaald', 'lofwaardig']], answer: 0, explain: ['كما في الصفحة ١٦.', 'Zoals op p. 16.'] },
    { type: 'tf', page: 15, q: ['كل غفلة مذمومة.', 'Elke onachtzaamheid is afkeurenswaardig.'], answer: 1, explain: ['الغفلة عن المعاصي محمودة.', 'Argeloosheid ten aanzien van zonden is lofwaardig.'] },
    { type: 'mc', page: 18, q: ['من قام بعشر آيات:', 'Wie \'s nachts met tien verzen bidt:'], options: [['لم يكتب من الغافلين', 'كتب من المقنطرين', 'كتب من القانتين', 'لا شيء له'], ['wordt niet bij de onachtzamen geschreven', 'wordt bij de schatrijken geschreven', 'wordt bij de toegewijden geschreven', 'krijgt niets']], answer: 0, explain: ['كما في حديث عبد الله بن عمرو.', 'Zoals in de hadith van ʿAbd Allāh ibn ʿAmr.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ١٩.', 'Oefening van het boek op p. 19. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
