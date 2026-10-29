// Hoofdstukkaart bij التربية الإسلامية (٣), eenheid 1: inleiding en adab tegenover Allah en Zijn
// Boodschapper ﷺ (lessen 1–4, boek p. 9–17). Opgesteld uit de leesnotities van het boek; hadith en
// takhrij zoals in het boek. De uitspraak van ʿUmar "تأدبوا ثم تعلموا" staat in het boek zonder bron
// en alleen in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tarbiyah',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب التربية الإسلامية (٣): الآداب الشرعية، سلسلة زاد العلمية', 'Islamitische opvoeding (3): de islamitische omgangsvormen, Zad-reeks'],
    pages: '9–17',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['الأدب مع الله ورسوله ﷺ', 'Adab tegenover Allah en Zijn Boodschapper ﷺ'],
  subtitle: ['أربعة دروس مجموعة في صفحة واحدة', 'Vier lessen samen op één pagina'],
  summary: [
    'العلم أصل العمل والأدب زينته، والأدب استعمال الخلق الجميل. وأعظم الأدب الأدب مع الله بالقلب واللسان والجوارح: بالإخلاص وإفراده بالعبادة ومحبته وشكره وتعظيم شعائره والتسليم لشرعه والتوبة والرغبة والرهبة والرضا بقدره والإيمان بأسمائه وصفاته. ثم الأدب مع رسول الله ﷺ: محبته فوق كل محبة، وتعظيم سنته واتباعها، واعتقاد تفضيله، وعدم التقدم بين يديه، والصلاة عليه، والذب عنه.',
    'Kennis is de basis van het handelen en adab is de sier ervan; adab is mooi karakter in de praktijk. De grootste adab is die tegenover Allah, met hart, tong en ledematen: oprechtheid, Hem alleen aanbidden, liefde en dank, Zijn riten eren, overgave aan Zijn wet, berouw, verlangen en vrees, tevredenheid met Zijn beschikking en geloof in Zijn namen en eigenschappen. Daarna adab tegenover de Boodschapper ﷺ: hem liefhebben boven alles, zijn sunna eren en volgen, geloven dat hij boven iedereen staat, niets vóór hem stellen, ṣalāt op hem en hem verdedigen.'
  ],
  map: {
    title: ['الوحدة الأولى في خريطة واحدة', 'Eenheid 1 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الآداب الشرعية', 'Islamitische omgangsvormen'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['مدخل', 'Inleiding'], sub: ['الدرس ١', 'les 1'], page: 9, children: [['العلم والأدب', 'kennis en adab'], ['تعريف الأدب', 'definitie van adab']] },
      { label: ['الأدب مع الله', 'Adab tegenover Allah'], sub: ['الدرس ٢', 'les 2'], page: 10, children: [['القلب واللسان والجوارح', 'hart, tong en ledematen'], ['تسعة مظاهر', 'negen uitingen']] },
      { label: ['الأدب مع الرسول ﷺ', 'Adab tegenover de Boodschapper ﷺ'], sub: ['الدرسان ٣–٤', 'les 3–4'], page: 14, children: [['المحبة', 'liefde'], ['الاتباع', 'navolging'], ['التفضيل والذب عنه', 'zijn voorrang en verdediging']] }
    ]
  },
  points: [
    [9, 'قال عبد الله بن المبارك: لا ينبل الرجل بنوع من العلم ما لم يزين عمله بالأدب.', 'ʿAbd Allāh ibn al-Mubārak zei: een man wordt niet edel door kennis zolang hij zijn handelen niet siert met adab.'],
    [9, 'قال ابن القيم: حقيقة الأدب استعمال الخلق الجميل.', 'Ibn al-Qayyim zei: de kern van adab is mooi karakter in praktijk brengen.'],
    [10, 'الأدب مع الله يدور على أمرين: صيانة القلب عن الالتفات إلى غيره، وصيانة المعاملة أن يشوبها نقص.', 'Adab tegenover Allah draait om twee dingen: het hart behoeden om zich tot een ander te wenden, en de omgang behoeden voor elk gebrek.'],
    [12, 'شكر الله يكون بالقلب واللسان والجوارح.', 'Dank aan Allah gaat met het hart, de tong en de ledematen.'],
    [12, 'من تعظيم شعائر الله تعظيم ما عظمه من الأزمنة والأماكن والأشخاص، كالأشهر الحرم ورمضان والجمعة والحرمين والأقصى.', 'Allahs riten eren omvat het eren van de tijden, plaatsen en personen die Hij eerde, zoals de heilige maanden, Ramaḍān, de vrijdag, de twee Ḥarams en al-Aqṣā.'],
    [14, 'قال شيخ الإسلام: قيام المدحة والثناء عليه والتوقير له ﷺ قيام الدين كله.', 'Shaykh al-Islām zei: het prijzen, loven en eren van de Profeet ﷺ is het bestaan van de hele religie.'],
    [15, 'من سنة الله أنه ما تظاهر أحد بالاستهزاء برسوله ﷺ إلا أهلكه، كما قال السعدي.', 'Het is Allahs wet dat wie openlijk de spot drijft met Zijn Boodschapper ﷺ vernietigd wordt, zoals as-Saʿdī zei.'],
    [16, 'قال ابن القيم: رأس الأدب معه ﷺ كمال التسليم له والانقياد لأمره وتلقي خبره بالقبول.', 'Ibn al-Qayyim zei: de kern van adab met hem ﷺ is volledige overgave, gehoorzaamheid aan zijn gebod en zijn bericht aanvaarden.']
  ],
  terms: [
    ['الأدب', 'al-adab', 9, 'ما تكتسبه النفس من الأخلاق الحسنة والصفات الحميدة.', 'Wat de ziel verwerft aan goede karaktertrekken en lofwaardige eigenschappen.'],
    ['الإخلاص', 'al-ikhlāṣ', 11, 'إرادة وجه الله وحده بالعمل.', 'Met een daad alleen Allahs aangezicht zoeken.'],
    ['شعائر الله', 'shaʿāʾir Allāh', 12, 'ما أمر الله بتعظيمه من الأزمنة والأماكن والأشخاص.', 'De tijden, plaatsen en personen die Allah opdroeg te eren.'],
    ['التوقير', 'at-tawqīr', 14, 'التعظيم والإجلال.', 'Eerbied en verering.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['مظاهر الأدب مع الله', 'Uitingen van adab tegenover Allah'],
      intro: ['تسعة مظاهر كما عدها الكتاب.', 'Negen uitingen, zoals het boek ze opsomt.'],
      nodes: [
        [11, 'الإخلاص', 'Oprechtheid', 'أنا أغنى الشركاء عن الشرك', '"Ik heb het minst behoefte aan een deelgenoot"'],
        [11, 'إفراده بالعبادة', 'Hem alleen aanbidden', '', ''],
        [11, 'محبته', 'Hem liefhebben', '', ''],
        [12, 'تعظيم شعائره', 'Zijn riten eren', '', ''],
        [12, 'التسليم للكتاب والسنة', 'Overgave aan Koran en sunna', '', ''],
        [12, 'التوبة والإنابة', 'Berouw en terugkeer', '', ''],
        [13, 'الرغبة والرهبة والخشوع', 'Verlangen, vrees en ootmoed', '', ''],
        [13, 'الرضا بالقضاء والقدر', 'Tevredenheid met de beschikking', '', ''],
        [13, 'الإيمان بالأسماء والصفات', 'Geloof in de namen en eigenschappen', 'بلا تكييف ولا تمثيل ولا تحريف ولا تعطيل', 'zonder hoe-vraag, vergelijking, verdraaiing of ontkenning']
      ]
    },
    {
      type: 'cards',
      title: ['مظاهر الأدب مع الرسول ﷺ', 'Uitingen van adab tegenover de Boodschapper ﷺ'],
      intro: ['ثمانية مظاهر كما عدها الكتاب.', 'Acht uitingen, zoals het boek ze opsomt.'],
      nodes: [
        [14, 'محبته فوق كل محبة', 'Liefde boven alles', 'الآن يا عمر', '"Nu, ʿUmar"'],
        [14, 'تعظيم سنته', 'Zijn sunna eren', '', ''],
        [14, 'اتباع سنته', 'Zijn sunna volgen', '', ''],
        [15, 'اعتقاد تفضيله', 'Geloven dat hij boven iedereen staat', '', ''],
        [15, 'عدم التقدم بين يديه', 'Niets vóór hem stellen', '', ''],
        [15, 'الصلاة عليه', 'Ṣalāt op hem', '', ''],
        [15, 'استشعار هيبته', 'Zijn ontzag beseffen', '', ''],
        [15, 'الذب عنه وعن سنته', 'Hem en zijn sunna verdedigen', '', '']
      ]
    }
  ],
  sections: [
    [10, 'القلب واللسان والجوارح', 'Hart, tong en ledematen', 'أدب القلب أن يتوجه إلى الله وحده محبة وخوفا ورجاء وتوكلا؛ وأدب اللسان ألا يقول إلا ما يحبه الله من ذكر وقرآن ودعوة إلى الحق؛ وأدب الجوارح صيانتها عن القبيح وتقديم أمر الله على كل شيء.', 'De adab van het hart is zich alleen tot Allah richten in liefde, vrees, hoop en vertrouwen; de adab van de tong is alleen zeggen wat Allah liefheeft, zoals dhikr, Koran en oproepen tot de waarheid; de adab van de ledematen is hen behoeden voor het lelijke en Allahs gebod boven alles stellen.'],
    [14, 'أحب إليك من نفسك', 'Je liever dan jezelf', 'قال عمر: لأنت أحب إلي من كل شيء إلا من نفسي، فقال: لا والذي نفسي بيده حتى أكون أحب إليك من نفسك، فقال: فإنه الآن والله لأنت أحب إلي من نفسي، فقال: الآن يا عمر.', 'ʿUmar zei: u bent mij liever dan alles behalve mijzelf. Hij zei: nee, bij Hem in Wiens hand mijn ziel is, pas als ik je liever ben dan jezelf. ʿUmar zei: nu, bij Allah, bent u mij liever dan mijzelf. Hij zei: nu, ʿUmar.'],
    [16, 'سنة الله فيمن افترى على رسوله', 'Allahs wet voor wie over Zijn Boodschapper loog', 'رجل كان يكتب للنبي ﷺ ثم ارتد وافترى عليه، فقصمه الله، ودفن فلفظته الأرض مرارا؛ قال ابن تيمية: وهذا أمر خارج عن العادة يدل على أنه عقوبة لما قاله.', 'Een man die voor de Profeet ﷺ schreef, viel af en loog over hem. Allah brak hem; hij werd begraven en de aarde wierp hem herhaaldelijk uit. Ibn Taymiyya zei: dit is buitengewoon en laat zien dat het een straf was voor wat hij zei.']
  ],
  keycards: [
    ['definitie', 9, 'تعريف الأدب', 'Definitie van adab', ['ما تكتسبه النفس من الأخلاق الحسنة والصفات الحميدة', 'قال الجرجاني: معرفة ما يحترز به عن جميع أنواع الخطأ'], ['wat de ziel verwerft aan goede karaktertrekken', 'al-Jurjānī: kennis waarmee men zich hoedt voor elke soort fout']],
    ['opsomming', 12, 'شكر الله', 'Dank aan Allah', ['بالقلب: اعتقاد أن النعم من الله', 'باللسان: الحمد والثناء', 'بالجوارح: العمل بطاعته'], ['met het hart: geloven dat de gunsten van Allah komen', 'met de tong: lof en dank', 'met de ledematen: Hem gehoorzamen']]
  ],
  hadith: [
    { text: 'قال الله: أنا أغنى الشركاء عن الشرك، من عمل عملا أشرك فيه معي غيري تركته وشركه', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'حديث قدسي.', nlNote: 'Een ḥadīth qudsī.', nl: 'Allah zegt: Ik heb van alle deelgenoten het minst behoefte aan een deelgenoot. Wie een daad doet waarin hij naast Mij een ander betrekt, laat Ik met zijn deelgenoot achter', pages: [11] },
    { text: 'ثلاث من كن فيه وجد بهن حلاوة الإيمان: أن يكون الله ورسوله أحب إليه مما سواهما …', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Wie drie dingen heeft, proeft daardoor de zoetheid van het geloof: dat Allah en Zijn Boodschapper hem liever zijn dan al het andere …', pages: [11] },
    { text: 'أفلا أكون عبدا شكورا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Zou ik dan geen dankbare dienaar zijn?', pages: [12] },
    { text: 'كتب الله مقادير الخلائق قبل أن يخلق السماوات والأرض بخمسين ألف سنة', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن عمرو', narratorNl: 'ʿAbd Allāh ibn ʿAmr', nl: 'Allah schreef de beschikkingen van de schepselen vijftigduizend jaar voordat Hij de hemelen en de aarde schiep', pages: [13] },
    { text: 'لا والذي نفسي بيده حتى أكون أحب إليك من نفسك … الآن يا عمر', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Nee, bij Hem in Wiens hand mijn ziel is, pas als ik je liever ben dan jezelf … Nu, ʿUmar', pages: [14] },
    { text: 'أنا سيد ولد آدم يوم القيامة، وأول من تنشق عنه الأرض، وأول شافع وأول مشفع', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Ik ben de heer van de kinderen van Adam op de Dag der Opstanding, de eerste voor wie de aarde opensplijt, de eerste die voorspraak doet en de eerste wiens voorspraak aanvaard wordt', pages: [15] }
  ],
  persons: [
    ['umar-ibn-al-khattab', 'text', [9, 14], 'روي عنه: تأدبوا ثم تعلموا، وصار النبي ﷺ أحب إليه من نفسه.', 'Van hem wordt overgeleverd: leer eerst adab, dan kennis; de Profeet ﷺ werd hem liever dan zichzelf.'],
    ['abdallah-ibn-al-mubarak', 'text', [9], 'قال: لا ينبل الرجل بنوع من العلم ما لم يزين عمله بالأدب.', 'Zei: een man wordt niet edel door kennis zonder adab.'],
    ['ibn-al-qayyim', 'text', [9, 16], 'عرف الأدب بأنه استعمال الخلق الجميل.', 'Definieerde adab als mooi karakter in praktijk brengen.'],
    ['al-jurjani', 'text', [9], 'عرف الأدب بأنه معرفة ما يحترز به عن الخطأ.', 'Definieerde adab als kennis waarmee men fouten vermijdt.'],
    ['abdallah-ibn-amr', 'text', [13], 'روى كتابة المقادير قبل الخلق.', 'Overleverde het opschrijven van de beschikkingen vóór de schepping.'],
    ['ibn-taymiyya', 'text', [14, 16], 'قال: قيام التوقير له ﷺ قيام الدين كله.', 'Zei: het eren van de Profeet ﷺ is het bestaan van de hele religie.'],
    ['as-sadi', 'text', [15], 'قال: ما تظاهر أحد بالاستهزاء برسول الله ﷺ إلا أهلكه الله.', 'Zei: wie openlijk de spot drijft met de Boodschapper ﷺ, vernietigt Allah.'],
    ['hassan-ibn-thabit', 'text', [15], 'قال: فإن أبي ووالده وعرضي لعرض محمد منكم وقاء.', 'Dichtte: mijn vader, zijn vader en mijn eer zijn een schild voor de eer van Muḥammad.'],
    ['anas-ibn-malik', 'text', [16], 'روى قصة الكاتب الذي افترى على النبي ﷺ.', 'Overleverde het verhaal van de schrijver die over de Profeet ﷺ loog.']
  ],
  review: [
    ['العلم أصل العمل والأدب زينته.', 'Kennis is de basis van het handelen en adab de sier ervan.'],
    ['أعظم الأدب الأدب مع الله بالقلب واللسان والجوارح.', 'De grootste adab is die tegenover Allah, met hart, tong en ledematen.'],
    ['من الأدب مع الله الإخلاص والتسليم والشكر والرضا بالقدر.', 'Tot adab tegenover Allah horen oprechtheid, overgave, dank en tevredenheid met de beschikking.'],
    ['رأس الأدب مع الرسول ﷺ كمال التسليم له والانقياد لأمره.', 'De kern van adab met de Boodschapper ﷺ is volledige overgave en gehoorzaamheid.'],
    ['ومنه محبته فوق كل أحد والصلاة عليه والذب عن سنته.', 'Daartoe horen hem liefhebben boven iedereen, ṣalāt op hem en zijn sunna verdedigen.']
  ],
  quiz: [
    { type: 'mc', page: 9, q: ['ما حقيقة الأدب عند ابن القيم؟', 'Wat is volgens Ibn al-Qayyim de kern van adab?'], options: [['استعمال الخلق الجميل', 'كثرة العلم', 'حسن الكلام فقط', 'كثرة العبادة'], ['mooi karakter in praktijk brengen', 'veel kennis', 'alleen mooi spreken', 'veel aanbidding']], answer: 0, explain: ['هكذا عرفه ابن القيم.', 'Zo definieerde Ibn al-Qayyim het.'] },
    { type: 'mc', page: 10, q: ['على أي شيء يدور الأدب مع الله؟', 'Waar draait adab tegenover Allah om?'], options: [['صيانة القلب عن الالتفات إلى غيره وصيانة المعاملة عن النقص', 'كثرة الكلام في الدين', 'الابتعاد عن الناس', 'حفظ المتون'], ['het hart behoeden voor een ander en de omgang voor gebreken', 'veel over religie praten', 'mensen mijden', 'teksten uit het hoofd leren']], answer: 0, explain: ['هذان الأمران العظيمان كما في الكتاب.', 'Deze twee grote zaken noemt het boek.'] },
    { type: 'tf', page: 12, q: ['الشكر يكون باللسان فقط.', 'Dank betuig je alleen met de tong.'], answer: 1, explain: ['يكون بالقلب واللسان والجوارح.', 'Met hart, tong en ledematen.'] },
    { type: 'mc', page: 14, q: ['متى قال النبي ﷺ لعمر: الآن يا عمر؟', 'Wanneer zei de Profeet ﷺ tegen ʿUmar: "nu, ʿUmar"?'], options: [['لما صار أحب إليه من نفسه', 'لما أسلم', 'لما هاجر', 'لما تولى الخلافة'], ['toen hij hem liever werd dan zichzelf', 'toen hij moslim werd', 'toen hij emigreerde', 'toen hij kalief werd']], answer: 0, explain: ['رواه البخاري.', 'Overgeleverd door al-Bukhārī.'] },
    { type: 'mc', page: 15, q: ['ما الآية التي تنهى عن التقدم بين يدي الله ورسوله؟', 'Welk vers verbiedt iets vóór Allah en Zijn Boodschapper te stellen?'], options: [['أول سورة الحجرات', 'آية الكرسي', 'آخر سورة البقرة', 'أول سورة الفاتحة'], ['het begin van al-Ḥujurāt', 'het Troonvers', 'het einde van al-Baqara', 'het begin van al-Fātiḥa']], answer: 0, explain: ['﴿يا أيها الذين آمنوا لا تقدموا بين يدي الله ورسوله﴾.', '"O gelovigen, stel niets vóór Allah en Zijn Boodschapper."'] },
    { type: 'tf', page: 15, q: ['تكفل الله بالدفاع عن نبيه ﷺ بقوله: ﴿إنا كفيناك المستهزئين﴾.', 'Allah nam de verdediging van Zijn Profeet ﷺ op Zich met: "Wij zijn genoeg voor jou tegen de spotters."'], answer: 0, explain: ['سورة الحجر ٩٥.', 'Al-Ḥijr 95.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ١٣ و١٧.', 'Oefeningen van het boek op p. 13 en 17. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
