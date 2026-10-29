// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 2: ما يحبه ﷺ (lessen 3–9, boek p. 20–43).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek. Niet opgenomen: het bericht van ʿAbbād ibn ʿAbbād over
// Yūnus ibn Khabbāb (p. 23) en de reden waarom het gif in de schouder zat (p. 31), die zonder bron
// staan. De hadith «فأسكني أحب البلاد إليك» noemt het boek verzonnen; hij staat alleen als waarschuwing.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '3',
  unit: 2,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '20–43',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['ما يحبه ﷺ', 'Wat hij ﷺ liefhad'],
  subtitle: ['سبعة دروس: الناس، والطعام، والأمكنة، والأزمان، واللباس، والأعمال', 'Zeven lessen: mensen, eten, plaatsen, tijden, kleding en daden'],
  summary: [
    'أحب النبي ﷺ من الناس أبا بكر ثم عمر ثم عثمان وعليا، والحسن والحسين، وخديجة وعائشة، والأنصار والمساكين وصاحب الخلق الحسن. وأحب من الطعام الذراع والدباء والزبد والتمر والحلو البارد، ومن الأمكنة مكة والمدينة وأحدا، ومن الأزمان الخروج يوم الخميس وصيام شعبان، وأحب القميص والبياض والطيب والفأل الحسن والتيامن والمداومة على العمل والصلاة.',
    'Van de mensen hield de Profeet ﷺ het meest van Abū Bakr, dan ʿUmar, dan ʿUthmān en ʿAlī, van al-Ḥasan en al-Ḥusayn, van Khadīja en ʿĀʾisha, van de Anṣār, de armen en wie goed karakter heeft. Van eten hield hij van de schapenschouder, pompoen, boter met dadels en koude zoete drank; van plaatsen van Mekka, Medina en Uḥud; van tijden van vertrekken op donderdag en vasten in Shaʿbān. Hij hield van het hemd, witte kleding, parfum, een goed voorteken, rechts beginnen, volharding in daden en het gebed.'
  ],
  map: {
    title: ['ما يحبه ﷺ في خريطة واحدة', 'Wat hij liefhad in één kaart'],
    intro: ['أقسام المحبوبات كما في الدروس.', 'De soorten zoals in de lessen.'],
    root: [['ما يحبه ﷺ', 'Wat hij ﷺ liefhad'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['من الناس', 'Mensen'], sub: ['ص ٢٠–٣٠', 'p. 20–30'], page: 20, children: [['أبو بكر ثم عمر', 'Abū Bakr, dan ʿUmar'], ['عثمان وعلي', 'ʿUthmān en ʿAlī'], ['الحسن والحسين', 'al-Ḥasan en al-Ḥusayn'], ['خديجة وعائشة', 'Khadīja en ʿĀʾisha'], ['الأنصار والمساكين', 'de Anṣār en de armen']] },
      { label: ['من المأكل والمشرب', 'Eten en drinken'], sub: ['ص ٣١–٣٤', 'p. 31–34'], page: 31, children: [['الذراع والدباء', 'schouder en pompoen'], ['الزبد والتمر', 'boter en dadels'], ['الحلو البارد', 'koud en zoet']] },
      { label: ['من الأمكنة والأزمان', 'Plaatsen en tijden'], sub: ['ص ٣٦–٣٨', 'p. 36–38'], page: 36, children: [['مكة والمدينة وأحد', 'Mekka, Medina en Uḥud'], ['يوم الخميس وشعبان', 'donderdag en Shaʿbān']] },
      { label: ['من اللباس والعادات', 'Kleding en gewoonten'], sub: ['ص ٤٠–٤٢', 'p. 40–42'], page: 40, children: [['القميص والبياض', 'het hemd en wit'], ['الطيب والفأل', 'parfum en goed voorteken'], ['التيامن', 'rechts beginnen']] },
      { label: ['من الأعمال', 'Daden'], sub: ['ص ٤٢–٤٣', 'p. 42–43'], page: 42, children: [['المداومة على العمل', 'volharding'], ['الصلاة قرة عينه', 'het gebed, de vreugde van zijn oog']] }
    ]
  },
  points: [
    [20, 'بدأ بعائشة لأن حبها طبعي وديني، ثم أبيها، وفيه دليل لأهل السنة على تقديم أبي بكر ثم عمر على سائر الصحابة.', 'Hij noemde eerst ʿĀʾisha, omdat die liefde natuurlijk én religieus was, dan haar vader; dit bewijst voor Ahl as-Sunna dat Abū Bakr, dan ʿUmar, boven alle metgezellen gaan.'],
    [22, 'قال محمد بن سيرين: ما أظن رجلا ينتقص أبا بكر وعمر يحب النبي ﷺ.', 'Muḥammad ibn Sīrīn: ik denk niet dat iemand die Abū Bakr en ʿUmar kleineert, de Profeet ﷺ liefheeft.'],
    [22, 'زوج النبي ﷺ عثمان ابنتيه رقية وأم كلثوم.', 'De Profeet ﷺ huwelijkte ʿUthmān zijn twee dochters Ruqayya en Umm Kulthūm uit.'],
    [26, 'كان حبه لخديجة لسبقها إلى الإسلام ونصرتها له في أول الدعوة، وكان يرسل إلى صدائقها إذا ذبح شاة.', 'Zijn liefde voor Khadīja kwam door haar voorsprong in de islam en haar steun aan het begin van de oproep; als hij een schaap slachtte, stuurde hij ervan naar haar vriendinnen.'],
    [31, 'ما عاب النبي ﷺ طعاما قط، إن اشتهاه أكله وإن كرهه تركه، قال ابن بطال: هذا من حسن الأدب.', 'De Profeet ﷺ bekritiseerde nooit eten: lustte hij het, dan at hij het, zo niet, dan liet hij het. Ibn Baṭṭāl: dat is goede etiquette.'],
    [36, 'استدل الجمهور بحديث الحزورة على أن مكة أفضل من المدينة، خلافا للإمام مالك.', 'De meerderheid bewees met de hadith van al-Ḥazwara dat Mekka beter is dan Medina, anders dan imam Mālik.'],
    [41, 'قال ابن حجر: كان يعجبه الفأل لأن التشاؤم سوء ظن بالله والتفاؤل حسن ظن به.', 'Ibn Ḥajar: hij hield van een goed voorteken, omdat pessimisme een slechte gedachte over Allah is en optimisme een goede.'],
    [42, 'ما كان من باب التكريم كدخول المسجد ولبس الثياب يستحب فيه التيامن، وما كان بضده كدخول الخلاء والخروج من المسجد يستحب فيه التياسر.', 'Bij eervolle zaken, zoals de moskee binnengaan en kleding aantrekken, begint men rechts; bij het tegendeel, zoals het toilet binnengaan en de moskee verlaten, links.']
  ],
  terms: [
    ['الخلة', 'al-khulla', 21, 'غاية المحبة وكمالها وصفاؤها، وهي أعظم من مجرد المحبة.', 'De uiterste, volmaakte en zuiverste liefde, groter dan louter liefde.'],
    ['يدوكون', 'yadūkūn', 23, 'يخوضون ويتحدثون.', 'Zij praatten er druk over.'],
    ['لكع', 'lukaʿ', 25, 'يطلق على الصغير وعلى اللئيم، والمراد هنا الأول.', 'Gebruikt voor de kleine en voor de gemene; hier het eerste.'],
    ['الدباء', 'ad-dubbāʾ', 32, 'القرع.', 'Pompoen, kalebas.'],
    ['النبيذ', 'an-nabīdh', 34, 'ماء ينقع فيه التمر أو الزبيب ليحلو، ولا يشرب بعد ثلاث.', 'Water waarin dadels of rozijnen geweekt worden om het zoet te maken; niet gedronken na drie dagen.'],
    ['السكة', 'as-sukka', 40, 'وعاء يجعل فيه الطيب.', 'Een vat waarin parfum zit.'],
    ['الفأل', 'al-faʾl', 41, 'الكلمة الطيبة يسمعها فيتفاءل بها، كيا راشد ويا نجيح.', 'Een goed woord dat men hoort en als goed voorteken ziet, zoals "yā rāshid" en "yā najīḥ".'],
    ['التيامن', 'at-tayāmun', 41, 'البدء باليمين في الأمور الشريفة.', 'Rechts beginnen bij eervolle zaken.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['ترتيب أحب الناس إليه من الرجال', 'Wie hij van de mannen het meest liefhad'],
      intro: ['كما في الصفحات ٢٠–٢٢.', 'Zoals op p. 20–22.'],
      nodes: [
        [20, 'أبو بكر', 'Abū Bakr', '«ولو كنت متخذا خليلا لاتخذت أبا بكر»', '"Als ik een boezemvriend nam, nam ik Abū Bakr"'],
        [21, 'عمر', 'ʿUmar', '«هذان: السمع والبصر»', '"Deze twee zijn het gehoor en het gezicht"'],
        [21, 'أبو عبيدة', 'Abū ʿUbayda', 'كما قالت عائشة', 'zoals ʿĀʾisha zei'],
        [22, 'عثمان', 'ʿUthmān', 'زوجه ابنتيه', 'trouwde twee van zijn dochters'],
        [23, 'علي', 'ʿAlī', '«رجلا يحبه الله ورسوله»', '"een man die Allah en Zijn Boodschapper liefheeft"']
      ]
    },
    {
      type: 'compare',
      title: ['معاني الحلو البارد', 'Wat "koud en zoet" kan zijn'],
      intro: ['ثلاثة احتمالات ذكرها الكتاب ص ٣٣–٣٤.', 'Drie mogelijkheden in het boek, p. 33–34.'],
      columns: [['وصفه', 'Beschrijving']],
      rows: [
        { label: ['الماء العذب', 'Zoet water'], cells: [['كماء العيون والآبار الحلوة', 'zoals water van bronnen en zoete putten']] },
        { label: ['الماء الممزوج بالعسل', 'Water met honing'], cells: [['قال ابن القيم: فيه من حفظ الصحة ما لا يهتدي إليه إلا أفاضل الأطباء', 'Ibn al-Qayyim: het beschermt de gezondheid op een manier die alleen de beste artsen kennen']] },
        { label: ['النبيذ', 'Nabīdh'], cells: [['ماء نقع فيه التمر، لا يشرب بعد ثلاث', 'water met geweekte dadels, niet na drie dagen']] }
      ],
      page: 33
    }
  ],
  sections: [
    [26, 'منزلة عائشة', 'De plaats van ʿĀʾisha', 'قال ابن القيم: من خصائص عائشة أنها كانت أحب أزواج رسول الله ﷺ إليه، وقال الزهري: أول حب كان في الإسلام حب النبي ﷺ لعائشة، وكان مسروق يسميها حبيبة رسول رب العالمين.', 'Ibn al-Qayyim: het bijzondere aan ʿĀʾisha is dat zij de geliefdste vrouw van de Boodschapper ﷺ was. Az-Zuhrī: de eerste liefde in de islam was die van de Profeet ﷺ voor ʿĀʾisha; Masrūq noemde haar de geliefde van de boodschapper van de Heer der werelden.'],
    [29, 'الصحابة والمساكين', 'De metgezellen en de armen', 'كان جعفر بن أبي طالب يكنى أبا المساكين، وزينب بنت خزيمة تدعى أم المساكين، وكان ابن عمر لا يكاد يأكل إلا مع المساكين، وكتب سفيان الثوري: عليك بالفقراء والمساكين والدنو منهم.', 'Jaʿfar ibn Abī Ṭālib werd Abū l-Masākīn genoemd, Zaynab bint Khuzayma de moeder van de armen; Ibn ʿUmar at bijna alleen met armen; Sufyān ath-Thawrī schreef: zoek de armen op en kom dicht bij hen.'],
    [36, 'تنبيه: حديث موضوع', 'Waarschuwing: een verzonnen hadith', 'يروى أنه ﷺ قال عند خروجه: «اللهم إنك تعلم أنهم أخرجوني من أحب البلاد إلي، فأسكني أحب البلاد إليك»، وهو حديث موضوع منكر مكذوب باتفاق العلماء.', 'Men vertelt dat hij bij zijn vertrek zei: "O Allah, U weet dat zij mij verdreven uit het land dat mij het liefst is; laat mij dan wonen in het land dat U het liefst is". Dat is volgens alle geleerden een verzonnen, gelogen hadith.'],
    [37, 'أحد يحبنا حقيقة', 'Uḥud houdt echt van ons', 'قال النووي: الصحيح أن أحدا يحبنا حقيقة، جعل الله فيه تمييزا يحب به، كما حن الجذع وسبح الحصى، و﴿وإن من شيء إلا يسبح بحمده﴾.', 'An-Nawawī: het juiste is dat Uḥud ons werkelijk liefheeft; Allah gaf hem een onderscheidingsvermogen waarmee hij liefheeft, zoals de palmstam verlangde en de kiezels Allah verheerlijkten: "er is niets dat Hem niet verheerlijkt".'],
    [38, 'لماذا يوم الخميس؟', 'Waarom donderdag?', 'لأنه يوم ترفع فيه الأعمال، ولأنه أكمل أيام الأسبوع عددا، ولأنه تفاءل باسمه، فالخميس الجيش لأنه خمسة أقسام.', 'Omdat dan de daden worden opgeheven, omdat het de volledigste dag van de week in getal is, en omdat hij een goed voorteken zag in de naam: al-khamīs is het leger met vijf delen.'],
    [42, 'لماذا أحب المداومة؟', 'Waarom hij van volharding hield', 'قال ابن الجوزي: لأن التارك بعد الدخول كالمعرض بعد الوصل، ولأن مداوم الخير ملازم للخدمة.', 'Ibn al-Jawzī: wie ophoudt na begonnen te zijn, is als wie zich afwendt na contact; en wie het goede volhoudt, blijft in dienst.']
  ],
  keycards: [
    ['bewijs', 28, 'حب الأنصار من الإيمان', 'Liefde voor de Anṣār is geloof', ['«آية الإيمان حب الأنصار، وآية النفاق بغض الأنصار»', 'وقال لهم: «اللهم أنتم من أحب الناس إلي»'], ['"Het teken van geloof is liefde voor de Anṣār, en het teken van hypocrisie is haat tegen de Anṣār"', 'en hij zei tegen hen: "O Allah, jullie zijn mij het liefst van de mensen"']],
    ['opsomming', 32, 'أوصاف الغذاء الأفضل عند ابن القيم', 'Het beste voedsel volgens Ibn al-Qayyim', ['كثرة نفعه وتأثيره في القوى', 'خفته على المعدة', 'سرعة هضمه'], ['veel nut en kracht', 'licht voor de maag', 'snel verteerd']]
  ],
  hadith: [
    { text: 'عائشة … أبوها … ثم عمر بن الخطاب', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عمرو بن العاص', narratorNl: 'ʿAmr ibn al-ʿĀṣ', note: 'جواب سؤاله: أي الناس أحب إليك؟', nlNote: 'Antwoord op zijn vraag wie de Profeet ﷺ het liefst was.', nl: 'ʿĀʾisha … haar vader … daarna ʿUmar ibn al-Khaṭṭāb', pages: [20] },
    { text: 'إن أمن الناس علي في صحبته وماله أبو بكر، ولو كنت متخذا من الناس خليلا لاتخذت أبا بكر خليلا، ولكن أخوة الإسلام ومودته، لا يبقين في المسجد باب إلا سد، إلا باب أبي بكر', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'De mens die mij het meest gaf met zijn gezelschap en bezit is Abū Bakr. Als ik onder de mensen een boezemvriend nam, nam ik Abū Bakr, maar het is de broederschap en genegenheid van de islam. Laat geen deur naar de moskee open behalve die van Abū Bakr', pages: [21] },
    { text: 'هذان: السمع والبصر', takhrij: 'رواه الترمذي، وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', note: 'قاله لما رأى أبا بكر وعمر.', nlNote: 'Gezegd toen hij Abū Bakr en ʿUmar zag.', nl: 'Deze twee zijn het gehoor en het gezicht', pages: [21] },
    { text: 'كنت وأبو بكر وعمر، وفعلت وأبو بكر وعمر، وانطلقت وأبو بكر وعمر', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'علي بن أبي طالب', narratorNl: 'ʿAlī ibn Abī Ṭālib', note: 'قاله علي عند جنازة عمر.', nlNote: 'ʿAlī zei dit bij de baar van ʿUmar.', nl: 'Ik was er met Abū Bakr en ʿUmar, ik deed het met Abū Bakr en ʿUmar, ik ging met Abū Bakr en ʿUmar', pages: [22] },
    { text: 'لأعطين الراية غدا رجلا يحبه الله ورسوله', takhrij: 'والقصة في البخاري ومسلم', takhrijNl: 'het verhaal staat bij al-Bukhārī en Muslim', narrator: 'سلمة بن الأكوع', narratorNl: 'Salama ibn al-Akwaʿ', note: 'يوم خيبر، فأعطاها عليا بعد أن بصق في عينيه فبرأ.', nlNote: 'Bij Khaybar; hij gaf de vlag aan ʿAlī nadat hij in zijn ogen had gespuwd en die genazen.', nl: 'Morgen geef ik de vlag aan een man die Allah en Zijn Boodschapper liefheeft', pages: [23] },
    { text: 'هذان ابناي وابنا ابنتي، اللهم إني أحبهما فأحبهما، وأحب من يحبهما', takhrij: 'أخرجه الترمذي وحسنه', takhrijNl: 'at-Tirmidhī, die het ḥasan noemde', narrator: 'أسامة بن زيد', narratorNl: 'Usāma ibn Zayd', nl: 'Dit zijn mijn zonen en de zonen van mijn dochter. O Allah, ik houd van hen, houd dan van hen, en houd van wie van hen houdt', pages: [25] },
    { text: 'اللهم إني أحبه فأحبه، وأحبب من يحبه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'قاله في الحسن بن علي.', nlNote: 'Over al-Ḥasan ibn ʿAlī.', nl: 'O Allah, ik houd van hem, houd dan van hem, en houd van wie van hem houdt', pages: [25] },
    { text: 'إني قد رزقت حبها', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'قاله في خديجة.', nlNote: 'Over Khadīja.', nl: 'Mij is liefde voor haar geschonken', pages: [26] },
    { text: 'أين أنا غدا؟ أين أنا غدا؟', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عروة بن الزبير', narratorNl: 'ʿUrwa ibn az-Zubayr', note: 'كان يقوله في مرضه يريد يوم عائشة.', nlNote: 'Hij vroeg dit in zijn ziekte, verlangend naar de dag van ʿĀʾisha.', nl: 'Waar ben ik morgen? Waar ben ik morgen?', pages: [27] },
    { text: 'اللهم أنتم من أحب الناس إلي، اللهم أنتم من أحب الناس إلي', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', note: 'يعني الأنصار.', nlNote: 'Over de Anṣār.', nl: 'O Allah, jullie zijn mij het liefst van de mensen, o Allah, jullie zijn mij het liefst van de mensen', pages: [28] },
    { text: 'آية الإيمان حب الأنصار، وآية النفاق بغض الأنصار', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Het teken van geloof is liefde voor de Anṣār, en het teken van hypocrisie is haat tegen de Anṣār', pages: [28] },
    { text: 'اللهم إني أسألك فعل الخيرات، وترك المنكرات، وحب المساكين', takhrij: 'رواه الترمذي وصححه', takhrijNl: 'at-Tirmidhī, die het ṣaḥīḥ noemde', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'O Allah, ik vraag U het goede te doen, het kwade te laten en de armen lief te hebben', pages: [28] },
    { text: 'إن من أحبكم إلي أحسنكم أخلاقا', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عبد الله بن عمرو', narratorNl: 'ʿAbd Allāh ibn ʿAmr', nl: 'Mij het liefst van jullie is wie het beste karakter heeft', pages: [29] },
    { text: 'ما عاب النبي ﷺ طعاما قط، إن اشتهاه أكله، وإن كرهه تركه', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De Profeet ﷺ bekritiseerde nooit eten: lustte hij het, dan at hij het, en lustte hij het niet, dan liet hij het', pages: [31] },
    { text: 'فتناول الذراع، وكانت أحب الشاة إليه', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Hij nam de schouder; die was hem het liefst van het schaap', pages: [31] },
    { text: 'فلم أزل أحب الدباء من يومئذ', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', note: 'رأى النبي ﷺ يتتبع الدباء من حوالي القصعة.', nlNote: 'Hij zag de Profeet ﷺ de pompoen langs de randen van de schaal zoeken.', nl: 'Sindsdien ben ik altijd van pompoen blijven houden', pages: [32] },
    { text: 'كان النبي ﷺ يحب الزبد والتمر', takhrij: 'رواه أبو داود وابن ماجه، وصححه الألباني', takhrijNl: 'Abū Dāwūd en Ibn Māja; ṣaḥīḥ volgens al-Albānī', nl: 'De Profeet ﷺ hield van boter met dadels', pages: [33] },
    { text: 'يا عائشة، بيت لا تمر فيه جياع أهله', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'ʿĀʾisha, een huis zonder dadels: zijn bewoners hebben honger', pages: [33] },
    { text: 'كان أحب الشراب إلى رسول الله ﷺ الحلو البارد', takhrij: 'أخرجه أحمد والنسائي، وصححه الألباني', takhrijNl: 'Aḥmad en an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De drank die de Boodschapper van Allah ﷺ het liefst had, was koud en zoet', pages: [33] },
    { text: 'ما أطيبك من بلد، وأحبك إلي، ولولا أن قومي أخرجوني منك ما سكنت غيرك', takhrij: 'أخرجه الترمذي وحسنه', takhrijNl: 'at-Tirmidhī, die het ḥasan noemde', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'قاله لمكة.', nlNote: 'Tegen Mekka gezegd.', nl: 'Wat ben je een goed land en hoe lief ben je mij! Als mijn volk mij niet uit jou had verdreven, had ik nergens anders gewoond', pages: [36] },
    { text: 'والله إنك لخير أرض الله، وأحب أرض الله إلى الله، ولولا أني أخرجت منك ما خرجت', takhrij: 'أخرجه أحمد والترمذي وابن ماجه، وصححه الألباني', takhrijNl: 'Aḥmad, at-Tirmidhī en Ibn Māja; ṣaḥīḥ volgens al-Albānī', narrator: 'عبد الله بن عدي بن الحمراء', narratorNl: 'ʿAbd Allāh ibn ʿAdī ibn al-Ḥamrāʾ', nl: 'Bij Allah, jij bent de beste grond van Allah en Allah de liefste grond; als ik niet uit jou verdreven was, was ik niet weggegaan', pages: [36] },
    { text: 'اللهم حبب إلينا المدينة كما حببت مكة أو أشد، وصححها، وبارك لنا في صاعها ومدها، وحول حماها إلى الجحفة', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'O Allah, maak ons Medina lief zoals U ons Mekka lief maakte of nog meer, maak haar gezond, zegen ons haar maten, en verplaats haar koorts naar al-Juḥfa', pages: [36] },
    { text: 'هذه طابة … هذا جبيل يحبنا ونحبه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو حميد', narratorNl: 'Abū Ḥumayd', nl: 'Dit is Ṭāba … dit is een bergje dat van ons houdt en wij van hem', pages: [37] },
    { text: 'كان أحب الشهور إلى رسول الله ﷺ أن يصومه شعبان، بل كان يصله برمضان', takhrij: 'رواه النسائي، وصححه الألباني', takhrijNl: 'an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De maand die de Boodschapper van Allah ﷺ het liefst vastte was Shaʿbān; hij verbond haar zelfs met Ramaḍān', pages: [38] },
    { text: 'كان أحب الثياب إلى النبي ﷺ القميص', takhrij: 'رواه أبو داود والترمذي، وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'أم سلمة', narratorNl: 'Umm Salama', nl: 'Het kledingstuk dat de Profeet ﷺ het liefst had, was het hemd', pages: [40] },
    { text: 'البسوا البياض؛ فإنها أطهر وأطيب، وكفنوا فيها موتاكم', takhrij: 'أخرجه أحمد والترمذي والنسائي، وصححه الألباني', takhrijNl: 'Aḥmad, at-Tirmidhī en an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', narrator: 'سمرة بن جندب', narratorNl: 'Samura ibn Jundub', nl: 'Draag wit, want dat is reiner en beter, en hul jullie doden erin', pages: [40] },
    { text: 'حبب إلي من الدنيا: النساء والطيب، وجعل قرة عيني في الصلاة', takhrij: 'أخرجه أحمد والنسائي، وصححه الألباني', takhrijNl: 'Aḥmad en an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', narrator: 'أنس', narratorNl: 'Anas', nl: 'Van de wereld is mij lief gemaakt: vrouwen en parfum, en de vreugde van mijn oog ligt in het gebed', pages: [40, 43] },
    { text: 'كان النبي ﷺ يعجبه الفأل الحسن، ويكره الطيرة', takhrij: 'أخرجه ابن ماجه، وصححه الألباني', takhrijNl: 'Ibn Māja; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De Profeet ﷺ hield van een goed voorteken en had een afkeer van bijgeloof over slechte voortekenen', pages: [41] },
    { text: 'كان رسول الله ﷺ يحب التيمن في طهوره إذا تطهر، وفي ترجله إذا ترجل، وفي انتعاله إذا انتعل', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Boodschapper van Allah ﷺ begon graag rechts bij zijn reiniging, bij het kammen en bij het aantrekken van zijn schoenen', pages: [41] },
    { text: 'الدائم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'جوابها لمسروق: أي العمل كان أحب إلى النبي ﷺ؟', nlNote: 'Haar antwoord aan Masrūq op de vraag welke daad de Profeet ﷺ het liefst was.', nl: 'Wat volgehouden wordt', pages: [42] },
    { text: 'يا بلال، أقم الصلاة، أرحنا بها', takhrij: 'أخرجه أبو داود، وصححه الألباني', takhrijNl: 'Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Bilāl, roep op tot het gebed; geef ons er rust mee', pages: [43] },
    { text: 'وكان ﷺ إذا حزبه أمر صلى', takhrij: 'أخرجه أحمد وأبو داود، وحسنه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ḥasan volgens al-Albānī', nl: 'Als iets hem zorgen baarde, bad hij', pages: [43] }
  ],
  persons: [
    ['amr-ibn-al-as', 'text', [20], 'سأل النبي ﷺ: أي الناس أحب إليك؟', 'Vroeg de Profeet ﷺ wie hem het liefst was.'],
    ['aisha', 'text', [20, 26, 27, 41, 42], 'أحب الناس إليه، وروت كثيرا من أحواله.', 'Hem het liefst van de mensen; overleverde veel over zijn toestanden.'],
    ['abu-bakr-as-siddiq', 'text', [20, 21], 'أحب الرجال إليه وأمن الناس عليه.', 'Hem het liefst van de mannen en die hem het meest gaf.'],
    ['umar-ibn-al-khattab', 'text', [20, 21], 'يتلو أبا بكر في المحبة.', 'Kwam na Abū Bakr in zijn liefde.'],
    ['abu-said-al-khudri', 'text', [21], 'روى خطبة النبي ﷺ في مرضه وبكاء أبي بكر.', 'Overleverde de toespraak van de Profeet ﷺ in zijn ziekte en het huilen van Abū Bakr.'],
    ['abu-ubayda-ibn-al-jarrah', 'text', [21], 'ذكرته عائشة بعد أبي بكر وعمر.', 'ʿĀʾisha noemde hem na Abū Bakr en ʿUmar.'],
    ['ali-ibn-abi-talib', 'text', [22, 23], 'أعطاه الراية يوم خيبر، وقال عند جنازة عمر ما قال.', 'Kreeg de vlag bij Khaybar, en sprak bij de baar van ʿUmar.'],
    ['muhammad-ibn-sirin', 'text', [22], 'قال: ما أظن رجلا ينتقص أبا بكر وعمر يحب النبي ﷺ.', 'Zei dat wie Abū Bakr en ʿUmar kleineert, de Profeet ﷺ niet liefheeft.'],
    ['uthman-ibn-affan', 'text', [22], 'زوجه النبي ﷺ ابنتيه.', 'De Profeet ﷺ huwelijkte hem twee dochters uit.'],
    ['ruqayya-bint-rasul-allah', 'text', [22], 'زوجة عثمان.', 'Vrouw van ʿUthmān.'],
    ['umm-kulthum-bint-rasul-allah', 'text', [22], 'زوجة عثمان بعد أختها.', 'Vrouw van ʿUthmān na haar zus.'],
    ['salama-ibn-al-akwa', 'text', [23], 'روى قصة الراية يوم خيبر.', 'Overleverde het verhaal van de vlag bij Khaybar.'],
    ['usama-ibn-zayd', 'text', [25], 'رأى النبي ﷺ يحمل الحسن والحسين.', 'Zag de Profeet ﷺ al-Ḥasan en al-Ḥusayn dragen.'],
    ['al-hasan-ibn-ali', 'text', [25], 'دعا له النبي ﷺ بالمحبة.', 'De Profeet ﷺ bad dat Allah van hem zou houden.'],
    ['al-husayn-ibn-ali', 'text', [25], 'من أحباب النبي ﷺ.', 'Een van de geliefden van de Profeet ﷺ.'],
    ['abu-hurayra', 'text', [25, 31, 41], 'روى حديث الحسن وأحاديث الطعام والفأل.', 'Overleverde de hadith over al-Ḥasan, over eten en over het goede voorteken.'],
    ['fatima', 'text', [25], 'جاء النبي ﷺ إلى خبائها يطلب الحسن.', 'De Profeet ﷺ kwam bij haar tent om al-Ḥasan te zoeken.'],
    ['khadija', 'text', [26], 'رزق النبي ﷺ حبها لسبقها ونصرتها.', 'De Profeet ﷺ kreeg liefde voor haar door haar voorsprong en steun.'],
    ['ibn-al-qayyim', 'text', [26, 32, 34, 43], 'تكلم في منزلة عائشة وفي الأطعمة والصلاة.', 'Sprak over de plaats van ʿĀʾisha, over voedsel en over het gebed.'],
    ['az-zuhri', 'text', [26], 'قال: أول حب كان في الإسلام حب النبي ﷺ لعائشة.', 'Zei dat de eerste liefde in de islam die voor ʿĀʾisha was.'],
    ['masruq', 'text', [26, 42], 'كان يسمي عائشة حبيبة رسول رب العالمين.', 'Noemde ʿĀʾisha de geliefde van de boodschapper van de Heer der werelden.'],
    ['urwa-ibn-az-zubayr', 'text', [27], 'روى سؤاله ﷺ في مرضه: أين أنا غدا؟', 'Overleverde zijn vraag in zijn ziekte: waar ben ik morgen?'],
    ['abd-ar-rahman-ibn-abi-bakr', 'text', [27], 'دخل بجريدة رطبة استاك بها النبي ﷺ.', 'Kwam binnen met een verse tak waarmee de Profeet ﷺ zijn tanden poetste.'],
    ['anas-ibn-malik', 'text', [28, 32, 40], 'روى أحاديث الأنصار والدباء والطيب.', 'Overleverde de hadith over de Anṣār, de pompoen en parfum.'],
    ['ibn-abbas', 'text', [28, 34, 36], 'روى دعاء حب المساكين وحديث مكة.', 'Overleverde de smeekbede om liefde voor de armen en de hadith over Mekka.'],
    ['ibn-rajab', 'text', [28], 'قال: هذا دعاء عظيم من أجمع الأدعية وأكملها.', 'Noemde het een van de meest omvattende smeekbeden.'],
    ['jafar-ibn-abi-talib', 'text', [29], 'كان يكنى أبا المساكين.', 'Werd Abū l-Masākīn genoemd.'],
    ['zaynab-bint-khuzayma', 'text', [29], 'كانت تدعى أم المساكين.', 'Werd moeder van de armen genoemd.'],
    ['ibn-umar', 'text', [29], 'كان لا يكاد يأكل إلا مع المساكين.', 'At bijna alleen met armen.'],
    ['sufyan-ath-thawri', 'text', [29], 'أوصى بالدنو من الفقراء والمساكين.', 'Raadde aan dicht bij de armen te komen.'],
    ['abdallah-ibn-amr', 'text', [29], 'روى «إن من أحبكم إلي أحسنكم أخلاقا».', 'Overleverde "mij het liefst is wie het beste karakter heeft".'],
    ['ibn-battal', 'text', [31, 34], 'قال: ترك عيب الطعام من حسن الأدب.', 'Zei: eten niet bekritiseren is goede etiquette.'],
    ['abdallah-ibn-adi-ibn-al-hamra', 'text', [36], 'سمع النبي ﷺ يقول لمكة: إنك لخير أرض الله.', 'Hoorde de Profeet ﷺ tegen Mekka zeggen: jij bent de beste grond van Allah.'],
    ['bilal-ibn-rabah', 'text', [36, 43], 'مرض في المدينة، وأمره النبي ﷺ: أرحنا بها.', 'Werd ziek in Medina; de Profeet ﷺ zei tegen hem: geef ons rust met het gebed.'],
    ['amir-ibn-fuhayra', 'text', [36], 'مرض في المدينة أول الهجرة.', 'Werd ziek in Medina na de hijra.'],
    ['ibn-hajar-al-asqalani', 'text', [37, 40, 41], 'قال: في الحديث مشروعية حب الوطن، وتكلم في الفأل.', 'Zei dat de hadith liefde voor het vaderland toestaat, en sprak over het goede voorteken.'],
    ['abu-humayd-as-saidi', 'text', [37], 'روى «هذا جبيل يحبنا ونحبه».', 'Overleverde "dit is een bergje dat van ons houdt".'],
    ['an-nawawi', 'text', [37], 'رجح أن أحدا يحبنا حقيقة.', 'Achtte het juist dat Uḥud ons werkelijk liefheeft.'],
    ['kab-ibn-malik', 'text', [38], 'روى أنه ﷺ كان يحب الخروج يوم الخميس.', 'Overleverde dat hij graag op donderdag vertrok.'],
    ['umm-salama', 'text', [40], 'روت أن أحب الثياب إليه القميص.', 'Overleverde dat het hemd zijn liefste kledingstuk was.'],
    ['samura-ibn-jundab', 'text', [40], 'روى «البسوا البياض».', 'Overleverde "draag wit".'],
    ['abu-yala-al-mawsili', 'takhrij', [40], 'روى أن رائحة المسك كانت توجد منه في طرق المدينة.', 'Overleverde dat men muskusgeur van hem rook in de straten van Medina.'],
    ['al-bazzar', 'takhrij', [40], 'روى حديث رائحة المسك.', 'Overleverde de hadith over de muskusgeur.'],
    ['ibn-al-jawzi', 'text', [42], 'بين لماذا أحب الدائم من العمل.', 'Legde uit waarom hij van volgehouden daden hield.']
  ],
  review: [
    ['أحب الرجال إليه أبو بكر ثم عمر، ومن أحبابه عثمان وعلي والحسن والحسين.', 'Van de mannen had hij Abū Bakr en dan ʿUmar het liefst; ook ʿUthmān, ʿAlī, al-Ḥasan en al-Ḥusayn waren geliefden.'],
    ['حب الأنصار آية الإيمان، وكان يسأل الله حب المساكين.', 'Liefde voor de Anṣār is een teken van geloof; hij vroeg Allah om liefde voor de armen.'],
    ['ما عاب طعاما قط، وأحب الذراع والدباء والزبد والتمر.', 'Hij bekritiseerde nooit eten en hield van schouder, pompoen, boter en dadels.'],
    ['أحب مكة والمدينة وأحدا، والخروج يوم الخميس، وصيام شعبان.', 'Hij hield van Mekka, Medina en Uḥud, van vertrekken op donderdag en vasten in Shaʿbān.'],
    ['أحب القميص والبياض والطيب والفأل والتيامن، والمداومة على العمل، والصلاة.', 'Hij hield van het hemd, wit, parfum, een goed voorteken, rechts beginnen, volharding en het gebed.']
  ],
  quiz: [
    { type: 'mc', page: 20, q: ['من أحب الناس إلى النبي ﷺ من الرجال؟', 'Wie had de Profeet ﷺ van de mannen het liefst?'], options: [['أبو بكر', 'عمر', 'علي', 'عثمان'], ['Abū Bakr', 'ʿUmar', 'ʿAlī', 'ʿUthmān']], answer: 0, explain: ['قال لعمرو بن العاص: أبوها، يعني أبا بكر.', 'Hij zei tegen ʿAmr ibn al-ʿĀṣ: haar vader, dus Abū Bakr.'] },
    { type: 'tf', page: 21, q: ['الخلة أعظم من مجرد المحبة.', 'Khulla is groter dan louter liefde.'], answer: 0, explain: ['هي غاية المحبة وكمالها وصفاؤها.', 'Het is de uiterste, volmaakte en zuiverste liefde.'] },
    { type: 'mc', page: 28, q: ['ما آية الإيمان في حديث أنس؟', 'Wat is volgens de hadith van Anas het teken van geloof?'], options: [['حب الأنصار', 'حب المساكين', 'حب المدينة', 'حب الصلاة'], ['liefde voor de Anṣār', 'liefde voor de armen', 'liefde voor Medina', 'liefde voor het gebed']], answer: 0, explain: ['وآية النفاق بغض الأنصار.', 'En het teken van hypocrisie is haat tegen de Anṣār.'] },
    { type: 'mc', page: 32, q: ['ما الدباء؟', 'Wat is ad-dubbāʾ?'], options: [['القرع', 'التمر', 'الزبد', 'الذراع'], ['pompoen', 'dadels', 'boter', 'schouder']], answer: 0, explain: ['كان النبي ﷺ يتتبعه من حوالي القصعة.', 'De Profeet ﷺ zocht hem langs de randen van de schaal.'] },
    { type: 'tf', page: 36, q: ['حديث «فأسكني أحب البلاد إليك» صحيح.', 'De hadith "laat mij wonen in het land dat U het liefst is" is authentiek.'], answer: 1, explain: ['هو موضوع منكر مكذوب باتفاق العلماء.', 'Volgens alle geleerden is hij verzonnen.'] },
    { type: 'mc', page: 38, q: ['في أي يوم كان يحب الخروج للغزو؟', 'Op welke dag vertrok hij graag voor een veldtocht?'], options: [['يوم الخميس', 'يوم الجمعة', 'يوم الاثنين', 'يوم السبت'], ['donderdag', 'vrijdag', 'maandag', 'zaterdag']], answer: 0, explain: ['كما في حديث كعب بن مالك.', 'Zoals in de hadith van Kaʿb ibn Mālik.'] },
    { type: 'mc', page: 42, q: ['بماذا أجابت عائشة عن أحب العمل إليه؟', 'Wat antwoordde ʿĀʾisha op de vraag welke daad hem het liefst was?'], options: [['الدائم', 'الكثير', 'الصعب', 'السري'], ['wat volgehouden wordt', 'veel', 'het moeilijkste', 'het verborgene']], answer: 0, explain: ['وكان عمله ديمة.', 'Zijn werk was blijvend.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٢٤ و٢٧ و٣٠ و٣٥ و٣٩ و٤٣.', 'Oefeningen van het boek op p. 24, 27, 30, 35, 39 en 43. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
