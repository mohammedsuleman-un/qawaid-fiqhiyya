// Hoofdstukkaart bij السيرة النبوية (١), eenheid 4: رسالة النبي ﷺ (lessen 5–12, boek p. 31–55).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 41, 49, 50, 53 en 54 zijn in het boek "alleen ter
// kennisname". Berichten die het boek zonder bron noemt (onder meer p. 44, 51 en 52) staan niet in het
// hadith-tabblad. Het bericht over de onderbreking van de openbaring (p. 36) noemt het boek zelf niet
// authentiek; de kaart neemt die correctie over. Weggelaten: de leeftijd bij het huwelijk met ʿĀʾisha
// (p. 49, alleen ter kennisname); de lespagina geeft die zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (١)، سلسلة زاد العلمية',
  pages: '31–55',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Seerah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'اقرأ، قال: ما أنا بقارئ... فغطني حتى بلغ مني الجهد...', takhrij: 'أخرجه البخاري ومسلم', note: 'بدء الوحي في غار حراء، ثم نزلت ﴿اقرأ باسم ربك الذي خلق﴾ [العلق: ١–٥].', pages: [35], nl: 'Lees! Hij zei: ik kan niet lezen … toen drukte hij mij tegen zich aan tot ik uitgeput was …', nlNote: 'Het begin van de openbaring in de grot Ḥirāʾ; daarna kwam "Lees in de naam van je Heer Die schiep" (al-ʿAlaq 96:1–5).' },
  { narrator: '', text: 'جاورت بحراء شهرًا، فلما قضيت جواري هبطت... فرفعت رأسي فإذا الملك الذي جاءني بحراء جالس على كرسي بين السماء والأرض، فجئثت منه رعبًا، فأتيت خديجة فقلت: زملوني، دثروني، وصبوا علي ماء باردًا', takhrij: 'أخرجه البخاري ومسلم', note: 'فنزلت ﴿يا أيها المدثر﴾ [المدثر: ١–٥]، ثم حمي الوحي وتتابع.', pages: [36], nl: 'Ik verbleef een maand in Ḥirāʾ; toen mijn verblijf voorbij was, daalde ik af … ik hief mijn hoofd op en daar zat de engel die bij mij in Ḥirāʾ was gekomen, op een zetel tussen hemel en aarde. Ik schrok hevig van hem, ging naar Khadīja en zei: wikkel mij in, bedek mij, en giet koud water over mij', nlNote: 'Toen kwam "O jij die bedekt bent" (al-Muddaththir 74:1–5), en daarna volgde de openbaring elkaar op.' },
  { narrator: '', text: 'إن روح القدس نفث في روعي أنه لن تموت نفس حتى تستكمل رزقها، فاتقوا الله وأجملوا في الطلب، ولا يحملنكم استبطاء الرزق على أن تطلبوه بمعصية الله، فإن ما عند الله لا ينال إلا بطاعته', takhrij: 'أخرجه البيهقي وصححه الألباني', note: 'مثال المرتبة الثانية من الوحي: ما يلقيه الملك في روعه من غير أن يراه.', pages: [38], nl: 'De Heilige Geest heeft mij ingegeven dat geen ziel sterft voordat zij haar levensonderhoud volledig heeft ontvangen; vrees dus Allah en zoek op een goede manier, en laat een trage voorziening jullie er niet toe brengen haar met ongehoorzaamheid aan Allah te zoeken, want wat bij Allah is, wordt alleen door gehoorzaamheid verkregen', nlNote: 'Voorbeeld van de tweede vorm van openbaring: wat de engel in zijn hart werpt zonder dat hij hem ziet.' },
  { narrator: '', text: 'أرأيتكم لو أخبرتكم أن خيلًا بالوادي بسفح هذا الجبل تريد أن تغير عليكم أكنتم مصدقي؟... إني نذير لكم بين يدي عذاب شديد... يا معشر قريش اشتروا أنفسكم من الله، أنقذوا أنفسكم من النار، فإني لا أملك لكم من الله ضرًا ولا نفعًا... يا فاطمة بنت محمد رسول الله، سليني ما شئت من مالي، أنقذي نفسك من النار', takhrij: 'أخرجه أحمد والترمذي والنسائي، وأصله في مسلم', note: 'على جبل الصفا بعد نزول ﴿وأنذر عشيرتك الأقربين﴾. ' + FYI, pages: [41, 42], nl: 'Als ik jullie vertelde dat er ruiters in het dal aan de voet van deze berg zijn die jullie willen overvallen, zouden jullie mij geloven? … Ik ben een waarschuwer voor jullie, vóór een zware straf … Mensen van Quraysh, koop jezelf vrij bij Allah, red jezelf van het Vuur, want ik kan jullie tegenover Allah schade noch baat geven … Fāṭima, dochter van Muḥammad, de Boodschapper van Allah, vraag mij van mijn bezit wat je wilt, maar red jezelf van het Vuur', nlNote: 'Op de berg aṣ-Ṣafā, na "en waarschuw je naaste verwanten". ' + FYI_NL },
  { narrator: 'ابن مسعود', text: 'بينما النبي ﷺ يصلي عند البيت وأبو جهل وأصحاب له جلوس إذ قال بعضهم: أيكم يجيء بسلى جزور بني فلان فيضعه على ظهر محمد إذا سجد؟... حتى جاءته فاطمة فطرحت عن ظهره، فرفع رأسه ثم قال: «اللهم عليك بقريش» ثلاث مرات', takhrij: 'أخرجه البخاري ومسلم', note: 'من صور إيذاء المشركين بعد الجهر بالدعوة.', pages: [43], nl: 'Terwijl de Profeet ﷺ bij het Huis bad en Abū Jahl met zijn vrienden zat, zei een van hen: wie haalt de ingewanden van de kameel van die familie en legt ze op de rug van Muḥammad als hij neerknielt? … tot Fāṭima kwam en ze van zijn rug haalde; toen hief hij zijn hoofd en zei drie keer: "O Allah, neem Quraysh voor Uw rekening"', nlNote: 'Een voorbeeld van hoe de polytheïsten hem kwelden na de openlijke oproep.' },
  { narrator: '', text: 'أرجو أن يخرج الله من أصلابهم من يعبد الله وحده لا يشرك به شيئًا', takhrij: 'متفق عليه', note: 'جوابه لملك الجبال بعد رحلة الطائف.', pages: [48], nl: 'Ik hoop dat Allah uit hun nageslacht mensen voortbrengt die Allah alleen aanbidden en niets aan Hem toevoegen', nlNote: 'Zijn antwoord aan de engel van de bergen na de reis naar aṭ-Ṭāʾif.' },
  { narrator: 'عبادة بن الصامت', text: 'تعالوا بايعوني على ألا تشركوا بالله شيئًا، ولا تسرقوا، ولا تزنوا، ولا تقتلوا أولادكم، ولا تأتوا ببهتان تفترونه بين أيديكم وأرجلكم، ولا تعصوني في معروف، فمن وفى منكم فأجره على الله...', takhrij: 'أخرجه البخاري ومسلم', note: 'بيعة العقبة الأولى. ' + FYI, pages: [50], nl: 'Kom en geef mij de eed dat jullie niets aan Allah toevoegen, niet stelen, geen ontucht plegen, jullie kinderen niet doden, geen verzonnen laster brengen, en mij niet ongehoorzaam zijn in het goede; wie het nakomt, diens beloning is bij Allah …', nlNote: 'De eerste eed van al-ʿAqaba. ' + FYI_NL },
  { narrator: '', text: 'أي بيوت أهلنا أقرب؟ فقال أبو أيوب: أنا يا رسول الله', takhrij: 'أخرجه البخاري', note: 'فنزل على أبي أيوب الأنصاري عند قدومه المدينة. ' + FYI, pages: [54], nl: 'Welk huis van onze familie is het dichtstbij? Abū Ayyūb zei: het mijne, Boodschapper van Allah', nlNote: 'Zo verbleef hij bij aankomst in Medina bij Abū Ayyūb al-Anṣārī. ' + FYI_NL }
]

const TAKHRIJ_NL = {
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه البيهقي وصححه الألباني': 'al-Bayhaqī; authentiek volgens al-Albānī',
  'أخرجه أحمد والترمذي والنسائي، وأصله في مسلم': 'Aḥmad, at-Tirmidhī en an-Nasāʾī; de kern staat bij Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه البخاري': 'al-Bukhārī'
}
const NARRATOR_NL = { 'ابن مسعود': 'Ibn Masʿūd', 'عبادة بن الصامت': 'ʿUbāda ibn aṣ-Ṣāmit' }

const PERSONS = [
  ['khadija', 'text', [36, 40], 'أتاها بعد رؤية الملك فقال: زملوني؛ وهي أول من أسلم من السابقين.', 'Bij haar kwam hij na het zien van de engel en zei: wikkel mij in; zij was de eerste van de vroegste moslims.'],
  ['abu-bakr-as-siddiq', 'text', [40, 52, 53], 'من السابقين الأولين، وصاحبه في الهجرة والغار.', 'Een van de vroegste moslims, en zijn metgezel bij de hijra en in de grot.'],
  ['zayd-ibn-haritha', 'text', [40, 48], 'مولاه، من السابقين الأولين، وصحبه إلى الطائف.', 'Zijn vrijgelaten slaaf, een van de vroegste moslims; vergezelde hem naar aṭ-Ṭāʾif.'],
  ['ali-ibn-abi-talib', 'text', [40, 52, 53], 'ابن عمه، من السابقين الأولين، ونام على فراشه ليلة الهجرة.', 'Zijn neef, een van de vroegste moslims; sliep in de nacht van de hijra in zijn bed.'],
  ['az-zuhri', 'text', [36], 'خبر التردي من رؤوس الجبال من بلاغاته، وليس موصولًا.', 'Het bericht over het naar de bergtoppen gaan is een van zijn ongestaafde overleveringen (balāghāt), zonder doorlopende keten.'],
  ['ibn-hajar-al-asqalani', 'text', [36], 'بين حكمة فترة الوحي: ليذهب الروع ويحصل التشوف إلى العود.', 'Legde de wijsheid van de onderbreking uit: de schrik zou verdwijnen en het verlangen naar terugkeer ontstaan.'],
  ['fatima', 'text', [42, 43], 'ناداها على الصفا: أنقذي نفسك من النار؛ وطرحت السلى عن ظهره.', 'Hij riep haar op aṣ-Ṣafā: red jezelf van het Vuur; zij haalde de ingewanden van zijn rug.'],
  ['al-abbas-ibn-abd-al-muttalib', 'text', [42], 'ناداه على الصفا: لا أغني عنك من الله شيئًا.', 'Hij riep hem op aṣ-Ṣafā: ik kan je tegenover Allah niets baten.'],
  ['ibn-masud', 'text', [43], 'روى قصة السلى على ظهره ﷺ.', 'Overleverde het verhaal van de ingewanden op zijn rug ﷺ.'],
  ['uthman-ibn-affan', 'text', [44], 'أول من هاجر إلى الحبشة مع زوجته رقية.', 'De eerste die naar Abessinië emigreerde, met zijn vrouw Ruqayya.'],
  ['ruqayya-bint-rasul-allah', 'text', [44], 'هاجرت مع زوجها عثمان إلى الحبشة.', 'Emigreerde met haar man ʿUthmān naar Abessinië.'],
  ['amr-ibn-al-as', 'text', [44], 'أرسلته قريش إلى النجاشي ليرد المسلمين.', 'Door Quraysh naar de Negus gestuurd om de moslims terug te halen.'],
  ['hamza-ibn-abd-al-muttalib', 'text', [44], 'أسلم في مكة، فقويت به الدعوة.', 'Werd in Mekka moslim, wat de oproep versterkte.'],
  ['umar-ibn-al-khattab', 'text', [44], 'أسلم في مكة، فقويت به الدعوة.', 'Werd in Mekka moslim, wat de oproep versterkte.'],
  ['ibn-al-qayyim', 'text', [49, 54], 'وصف الإسراء والمعراج، واستقبال أهل المدينة له.', 'Beschreef de Nachtreis en Hemelvaart, en de ontvangst door de mensen van Medina.'],
  ['ubada-ibn-as-samit', 'text', [50], 'روى بيعة العقبة الأولى.', 'Overleverde de eerste eed van al-ʿAqaba.'],
  ['musab-ibn-umayr', 'text', [50], 'أول سفير في الإسلام، بعثه إلى يثرب يعلمهم.', 'De eerste gezant in de islam, naar Yathrib gestuurd om te onderwijzen.'],
  ['asad-ibn-zurara', 'text', [50], 'نزل عنده مصعب بن عمير في يثرب.', 'Muṣʿab ibn ʿUmayr verbleef bij hem in Yathrib.'],
  ['aisha', 'text', [52], 'روت مجيء النبي ﷺ إلى بيت أبي بكر لإبرام الهجرة.', 'Overleverde hoe de Profeet ﷺ naar het huis van Abū Bakr kwam om de hijra af te spreken.'],
  ['abdallah-ibn-abi-bakr', 'text', [53], 'كان يبيت عندهما في الغار.', 'Overnachtte bij hen in de grot.'],
  ['amir-ibn-fuhayra', 'text', [54], 'رافقهما في الطريق إلى المدينة.', 'Reisde met hen mee naar Medina.'],
  ['urwa-ibn-az-zubayr', 'text', [54], 'روى خبر انتظار المسلمين له بالحرة.', 'Overleverde hoe de moslims op de lavavlakte op hem wachtten.'],
  ['abu-ayyub-al-ansari', 'text', [54], 'نزل عنده النبي ﷺ أول قدومه المدينة.', 'Bij hem verbleef de Profeet ﷺ bij aankomst in Medina.'],
  ['al-bukhari', 'takhrij', [35, 36, 43, 48, 50, 54], 'أخرج أكثر أحاديث الوحدة.', 'Nam de meeste hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [35, 36, 42, 43, 48, 50], 'أخرج أحاديث بدء الوحي وغيرها.', 'Nam de hadith over het begin van de openbaring en andere op.'],
  ['al-bayhaqi', 'takhrij', [38], 'روى «إن روح القدس نفث في روعي».', 'Overleverde "de Heilige Geest heeft mij ingegeven".'],
  ['al-albani', 'takhrij', [38], 'صحح «إن روح القدس نفث في روعي».', 'Verklaarde "de Heilige Geest heeft mij ingegeven" authentiek.'],
  ['ahmad-ibn-hanbal', 'takhrij', [42], 'روى خبر الصفا.', 'Overleverde het bericht over aṣ-Ṣafā.'],
  ['at-tirmidhi', 'takhrij', [42], 'روى خبر الصفا.', 'Overleverde het bericht over aṣ-Ṣafā.'],
  ['an-nasai', 'takhrij', [42], 'روى خبر الصفا.', 'Overleverde het bericht over aṣ-Ṣafā.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'رسالة النبي ﷺ: العهد المكي والهجرة',
  subtitle: 'ثمانية دروس مجموعة في صفحة واحدة',
  summary: 'حفظ الله لرسوله قبل البعثة، وبدء الوحي في غار حراء وأقسام الوحي، ومراحل الدعوة الثلاث: السرية ثم الجهر ثم الدعوة خارج مكة، وإيذاء المشركين والهجرتين إلى الحبشة والحصار في الشعب، ثم الطائف وبيعتي العقبة، ومؤامرة دار الندوة، والهجرة إلى المدينة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'رسالة النبي ﷺ', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'البعثة والوحي', sub: 'الدرسان ٥–٦', page: 34, children: ['حفظه قبل البعثة', 'غار حراء', 'أقسام الوحي'] },
      { label: 'الدعوة سرًا', sub: 'الدرس ٦', page: 39, children: ['السابقون الأولون', 'تشريع الصلاة'] },
      { label: 'الجهر بالدعوة', sub: 'الدرسان ٧–٨', page: 41, children: ['الصفا', 'الإيذاء', 'دار الأرقم', 'الحبشة'] },
      { label: 'الحصار وعام الحزن', sub: 'الدرس ٩', page: 45, children: ['الصحيفة', 'شعب أبي طالب', 'وفاة أبي طالب وخديجة'] },
      { label: 'الدعوة خارج مكة', sub: 'الدرسان ١٠–١١', page: 48, children: ['الطائف', 'الإسراء والمعراج', 'بيعتا العقبة'] },
      { label: 'الهجرة', sub: 'الدرس ١٢', page: 52, children: ['دار الندوة', 'غار ثور', 'دخول المدينة'] }
    ]
  },
  points: [
    { text: 'تنقسم حياته ﷺ بعد النبوة إلى عهدين: مكي ثلاث عشرة سنة، ومدني عشر سنوات.', page: 34 },
    { text: 'حفظه الله قبل البعثة: من أوسط النسب، ومن الفحش، فلم يسجد لصنم ولم يحلف بغير الله.', page: 34 },
    { text: 'لما بلغ أربعين سنة أتاه جبريل بغار حراء فقال: اقرأ.', page: 35 },
    { text: 'آيات المدثر مبدأ رسالته: تكليف بالبلاغ، وتكليف بتطبيق أوامر الله على نفسه.', page: 37 },
    { text: 'كانت الدعوة في أولها سرية لئلا يفاجأ أهل مكة بما يهيجهم.', page: 39 },
    { text: 'لما نزل ﴿فاصدع بما تؤمر﴾ جهر بالدعوة في مجامع المشركين وصلى بفناء الكعبة.', page: 43 },
    { text: 'في الطائف آذوه حتى سالت قدماه دمًا، فعفا عنهم ورجا أن يخرج من أصلابهم من يعبد الله.', page: 48 },
    { text: 'هاجر ﷺ مع أبي بكر بعد أن أجمع المشركون في دار الندوة على قتله.', page: 52 }
  ],
  terms: [
    { term: 'العهد المكي', translit: 'al-ʿahd al-makkī', meaning: 'حياته ﷺ بمكة بعد النبوة: ثلاث عشرة سنة.', explanation: '', notes: [], page: 34 },
    { term: 'غار حراء', translit: 'ghār ḥirāʾ', meaning: 'غار على نحو ميلين من مكة كان يتعبد فيه شهر رمضان.', explanation: 'وفيه نزل عليه الوحي.', notes: [], page: 35 },
    { term: 'فترة الوحي', translit: 'fatrat al-waḥy', meaning: 'انقطاع الوحي مدة بعد أول نزوله.', explanation: 'قال ابن حجر: ليذهب ما وجده من الروع، وليحصل له التشوف إلى العود.', notes: [], page: 36 },
    { term: 'صلصلة الجرس', translit: 'ṣalṣalat al-jaras', meaning: 'صوت الجرس؛ وهي أشد صور الوحي عليه.', explanation: 'حتى إن جبينه ليتفصد عرقًا في اليوم الشديد البرد.', notes: [], page: 38 },
    { term: 'السابقون الأولون', translit: 'as-sābiqūn al-awwalūn', meaning: 'أول من أجاب دعوته سرًا.', explanation: 'وفي مقدمتهم خديجة وأبو بكر وزيد بن حارثة وعلي.', notes: [], page: 39 },
    { term: 'دار الأرقم', translit: 'dār al-arqam', meaning: 'دار الأرقم بن أبي الأرقم المخزومي.', explanation: 'اتخذها مركزًا للدعوة يجتمع فيها بالمسلمين سرًا.', notes: [], page: 43 },
    { term: 'ميثاق الظلم', translit: 'mīthāq aẓ-ẓulm', meaning: 'صحيفة تحالف فيها المشركون على مقاطعة بني هاشم وبني المطلب.', explanation: 'علقت في جوف الكعبة، ونقضت بعد ثلاثة أعوام.', notes: [], page: 45 },
    { term: 'عام الحزن', translit: 'ʿām al-ḥuzn', meaning: 'اسم اشتهر للعام الذي توفي فيه أبو طالب وخديجة.', explanation: 'قال الكتاب: لم يثبت أن النبي ﷺ أو أصحابه أو التابعين سموه بذلك.', notes: [], page: 46 },
    { term: 'الإسراء والمعراج', translit: 'al-isrāʾ wa-l-miʿrāj', meaning: 'الإسراء من المسجد الحرام إلى بيت المقدس، ثم العروج إلى السماوات.', explanation: 'وفيه فرضت الصلوات الخمس.', notes: [], page: 49 },
    { term: 'بيعة العقبة', translit: 'bayʿat al-ʿaqaba', meaning: 'بيعة أهل يثرب له عند العقبة بمنى.', explanation: 'الأولى في السنة الثانية عشرة من النبوة، والثانية في الثالثة عشرة.', notes: [], page: 50 },
    { term: 'دار الندوة', translit: 'dār an-nadwa', meaning: 'مجلس قريش الذي اتفقوا فيه على قتله ﷺ.', explanation: 'على اقتراح أبي جهل.', notes: [], page: 51 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'العهد المكي',
      intro: 'كما في مخطط الكتاب.',
      nodes: [
        { label: 'البعثة', sub: 'في الأربعين', page: 35 },
        { label: 'جبريل والوحي', page: 35 },
        { label: 'تشريع الصلاة', page: 40 },
        { label: 'الهجرتان إلى الحبشة', sub: 'الأولى سنة خمس من المبعث', page: 44 },
        { label: 'ميثاق الظلم وشعب أبي طالب', sub: 'ثلاثة أعوام', page: 45 },
        { label: 'وفاة أبي طالب وخديجة', sub: 'السنة العاشرة', page: 46 },
        { label: 'الإسراء والمعراج', page: 49 },
        { label: 'بيعتا العقبة', sub: 'السنتان ١٢ و١٣', page: 50 },
        { label: 'دار الندوة', page: 51 },
        { label: 'الهجرة', page: 52 }
      ]
    },
    {
      type: 'cards',
      title: 'أقسام الوحي',
      intro: 'ست مراتب كما في الكتاب.',
      nodes: [
        { label: 'الرؤيا الصادقة', sub: 'مبدأ وحيه', page: 38 },
        { label: 'النفث في الروع', sub: 'يلقيه الملك في قلبه دون أن يراه', page: 38 },
        { label: 'تمثل الملك رجلًا', sub: 'وربما رآه الصحابة', page: 38 },
        { label: 'مثل صلصلة الجرس', sub: 'وهو أشده', page: 38 },
        { label: 'رؤية الملك في صورته', sub: 'مرتين', page: 38 },
        { label: 'ما أوحاه الله إليه فوق السماوات', sub: 'ليلة المعراج', page: 38 }
      ]
    },
    {
      type: 'steps',
      title: 'مراحل الدعوة',
      intro: 'ثلاث مراحل.',
      nodes: [
        { label: 'الدعوة سرًا', sub: 'لأهل بيته وأصدقائه', page: 39 },
        { label: 'الجهر بالدعوة', sub: '﴿وأنذر عشيرتك الأقربين﴾', page: 41 },
        { label: 'الدعوة خارج مكة', sub: 'الطائف والقبائل وأهل يثرب', page: 48 }
      ]
    },
    {
      type: 'compare',
      title: 'الهجرتان إلى الحبشة',
      intro: 'كما في الدرس الثامن.',
      columns: ['الأولى', 'الثانية'],
      rows: [
        { label: 'العدد', cells: ['أحد عشر رجلًا وأربع نسوة', 'اثنان وثمانون رجلًا وثماني عشرة امرأة وأبناؤهم'] },
        { label: 'ملاحظات', cells: ['سنة خمس من المبعث، وأولهم عثمان ورقية', 'بعد أن عاد بعضهم فوجدوا المسلمين في بلاء'] }
      ],
      page: 44
    },
    {
      type: 'compare',
      title: 'بيعتا العقبة',
      intro: 'كما في الدرس الحادي عشر.',
      columns: ['الأولى', 'الثانية'],
      rows: [
        { label: 'السنة', cells: ['الثانية عشرة من النبوة', 'الثالثة عشرة من النبوة'] },
        { label: 'العدد', cells: ['اثنا عشر رجلًا', 'بضع وسبعون نفسًا'] },
        { label: 'ما بعدها', cells: ['بعث مصعب بن عمير إلى يثرب', 'هاجر المسلمون إلى المدينة'] }
      ],
      page: 50
    },
    {
      type: 'steps',
      title: 'الهجرة إلى المدينة',
      intro: 'كما في الدرس الثاني عشر.',
      nodes: [
        { label: 'في بيت أبي بكر', sub: 'إبرام خطة الهجرة في نحر الظهيرة', page: 52 },
        { label: 'علي على الفراش', sub: 'وخرج النبي ﷺ من بين المحاصرين', page: 53 },
        { label: 'غار ثور', sub: 'ثلاث ليال، جنوب مكة نحو اليمن', page: 53 },
        { label: 'طريق السواحل', sub: 'مع عامر بن فهيرة والدليل عبد الله بن أريقط', page: 54 },
        { label: 'دخول المدينة', sub: 'نزل على أبي أيوب الأنصاري', page: 54 }
      ]
    }
  ],
  sections: [
    { title: 'حفظ الله له قبل البعثة', text: 'اصطفاه من أوسط النسب وأشرفه، من نكاح لا سفاح؛ وكفله جده ثم عمه سيدا قريش؛ وحفظه شابًا من الفحش فاشتهر بالصدق والأمانة؛ وحفظ قلبه فلم يعبد غير الله ولم يسجد لصنم ولم يحلف بغير الله؛ وأعده معصومًا من نزغ الشيطان، كما في شق صدره.', more: '', page: 34 },
    { title: 'في غار حراء', text: 'حبب إليه الخلاء قبل الأربعين بثلاث سنوات، فكان يقيم في غار حراء شهر رمضان يتعبد ويتفكر، وكان ذلك من تدبير الله ليستعد لحمل الأمانة الكبرى.', more: '', page: 35 },
    { title: 'خبر لا يصح', text: 'يذكر أنه ﷺ لما فتر الوحي حزن حتى غدا مرارًا إلى رؤوس الجبال؛ قال الكتاب: والصحيح أن هذا ليس مما رواه البخاري، بل هو من بلاغات الزهري وليس موصولًا، فلا تصح نسبته إلى النبي ﷺ.', more: '', page: 36 },
    { title: 'مبدأ الرسالة', text: 'آيات المدثر مبدأ رسالته، وفيها نوعان من التكليف: البلاغ والتحذير ﴿قم فأنذر﴾، وتطبيق أوامر الله على نفسه ﴿وربك فكبر. وثيابك فطهر﴾.', more: '[المدثر: ١–٥]', page: 37 },
    { title: 'لماذا كانت الدعوة سرية؟', text: 'كان قومه جفاة لا دين لهم إلا عبادة الأصنام، ولا حجة إلا تقليد الآباء، ولا سبيل لحل المشاكل إلا السيف، وهم أهل الزعامة الدينية في الجزيرة؛ فكان من الحكمة أن تبدأ الدعوة سرًا.', more: '', page: 39 },
    { title: 'على جبل الصفا (للاطلاع فقط)', text: 'لما نزل ﴿وأنذر عشيرتك الأقربين﴾ صعد الصفا ونادى بطون قريش، فشهدوا أنهم ما جربوا عليه كذبًا، فأنذرهم؛ فقال أبو لهب: تبًا لك، فنزلت سورة المسد.', more: '[الشعراء: ٢١٤]، [المسد: ١]. ' + FYI, page: 41 },
    { title: 'خطوتان حكيمتان', text: 'لما اشتد الإيذاء اتخذ دار الأرقم بن أبي الأرقم مركزًا للدعوة سرًا، وأذن للمسلمين بالهجرة إلى الحبشة حيث ملك لا يظلم عنده أحد؛ فأكرمهم النجاشي وأبى أن يردهم إلى قريش.', more: '', page: 43 },
    { title: 'شعب أبي طالب', text: 'تحالف المشركون على مقاطعة بني هاشم وبني المطلب حتى يسلموا النبي ﷺ للقتل، فحوصروا في الشعب حتى أكلوا الأوراق والجلود؛ ونقضت الصحيفة بعد ثلاثة أعوام في المحرم سنة عشر من النبوة.', more: '', page: 45 },
    { title: 'رحلة الطائف', text: 'سار إلى الطائف ماشيًا ومعه زيد بن حارثة، فردوا عليه ردًا قاسيًا وأغروا به سفهاءهم حتى سالت قدماه دمًا؛ فلما عرض عليه ملك الجبال أن يطبق عليهم الأخشبين عفا عنهم.', more: '', page: 48 },
    { title: 'الإسراء والمعراج (للاطلاع فقط)', text: 'قال ابن القيم: أسري به بجسده من المسجد الحرام إلى بيت المقدس على البراق، فصلى بالأنبياء إمامًا، ثم عرج به إلى السماوات، وفرض عليه خمسون صلاة فسأل التخفيف حتى جعلها خمسًا.', more: FYI, page: 49 },
    { title: 'أول سفير في الإسلام (للاطلاع فقط)', text: 'بعث مصعب بن عمير مع أهل البيعة الأولى إلى يثرب يعلمهم ويفقههم، فنزل على أسعد بن زرارة، حتى لم تبق دار من دور الأنصار إلا وفيها مسلمون.', more: FYI, page: 50 },
    { title: 'مؤامرة دار الندوة', text: 'أجمعوا على اقتراح أبي جهل: أن يأخذوا من كل قبيلة فتى جلدًا فيضربوه ضربة رجل واحد، فيتفرق دمه في القبائل.', more: '', page: 52 },
    { title: 'في الغار (للاطلاع فقط)', text: 'خرج ﷺ من بين المحاصرين وقد أخذ الله أبصارهم، ثم خرج مع أبي بكر إلى غار ثور جنوب مكة على عكس طريق المدينة، فكمنا فيه ثلاث ليال؛ وجعلت قريش مائة ناقة لمن يأتي بكل واحد منهما.', more: '[يس: ٩]. ' + FYI, page: 53 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أقسام الوحي', items: ['الرؤيا الصادقة', 'النفث في الروع', 'تمثل الملك رجلًا', 'مثل صلصلة الجرس', 'رؤية الملك في صورته', 'الوحي فوق السماوات'], page: 38, origin: 'boek' },
    { kind: 'opsomming', title: 'مراحل الدعوة', items: ['سرًا', 'جهرًا', 'خارج مكة'], page: 39, origin: 'boek' },
    { kind: 'opsomming', title: 'السابقون الأولون', items: ['خديجة بنت خويلد', 'أبو بكر الصديق', 'زيد بن حارثة', 'علي بن أبي طالب'], page: 40, origin: 'boek' },
    { kind: 'onderscheid', title: 'تكليفا آيات المدثر', items: ['البلاغ والتحذير: ﴿قم فأنذر﴾.', 'تطبيق أوامر الله على نفسه: ﴿وربك فكبر. وثيابك فطهر﴾.'], page: 37, origin: 'boek' },
    { kind: 'opsomming', title: 'بنود بيعة العقبة الأولى', items: ['ألا تشركوا بالله شيئًا', 'ولا تسرقوا', 'ولا تزنوا', 'ولا تقتلوا أولادكم', 'ولا تأتوا ببهتان', 'ولا تعصوني في معروف'], page: 50, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'العهد المكي ثلاث عشرة سنة، والمدني عشر.',
    'بدأ الوحي في غار حراء في الأربعين، وأقسامه ست.',
    'الدعوة سرًا ثم جهرًا ثم خارج مكة.',
    'هاجر المسلمون إلى الحبشة مرتين، وحوصروا في الشعب ثلاث سنين.',
    'عفا عن أهل الطائف، وبايعه أهل يثرب في العقبة مرتين.',
    'أجمعت قريش على قتله فهاجر مع أبي بكر عبر غار ثور إلى المدينة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'كم سنة كان العهد المكي؟', options: ['ثلاث عشرة سنة', 'عشر سنوات', 'خمس سنوات', 'عشرين سنة'], answer: 0, explain: 'والعهد المدني عشر سنوات.', page: 34 },
    { type: 'mc', q: 'ما أشد صور الوحي عليه ﷺ؟', options: ['مثل صلصلة الجرس', 'الرؤيا الصادقة', 'النفث في الروع', 'تمثل الملك رجلًا'], answer: 0, explain: 'حتى إن جبينه ليتفصد عرقًا في اليوم البارد.', page: 38 },
    { type: 'tf', q: 'خبر تردي النبي ﷺ من رؤوس الجبال صحيح موصول في البخاري.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هو من بلاغات الزهري وليس موصولًا.', page: 36 },
    { type: 'mc', q: 'لماذا كانت الدعوة في أولها سرية؟', options: ['لئلا يفاجأ أهل مكة بما يهيجهم', 'لأن المسلمين كانوا كثيرين', 'لأنه لم يؤمر بالدعوة', 'لأنه كان مسافرًا'], answer: 0, explain: 'كان ذلك من الحكمة.', page: 39 },
    { type: 'mc', q: 'من أول من هاجر إلى الحبشة؟', options: ['عثمان وزوجته رقية', 'أبو بكر', 'عمر', 'حمزة'], answer: 0, explain: 'وكانت سنة خمس من المبعث.', page: 44 },
    { type: 'mc', q: 'من صحب النبي ﷺ إلى الطائف؟', options: ['زيد بن حارثة', 'أبو بكر', 'علي', 'مصعب بن عمير'], answer: 0, explain: 'سار إليها ماشيًا.', page: 48 },
    { type: 'mc', q: 'من أول سفير في الإسلام؟', options: ['مصعب بن عمير', 'جعفر بن أبي طالب', 'عثمان بن عفان', 'أسعد بن زرارة'], answer: 0, explain: 'بعثه إلى يثرب يعلمهم.', page: 50 },
    { type: 'mc', q: 'في أي غار اختبأ النبي ﷺ وأبو بكر في الهجرة؟', options: ['غار ثور', 'غار حراء', 'غار أحد', 'غار الطائف'], answer: 0, explain: 'جنوب مكة، ثلاث ليال.', page: 53 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٣٧ و٤٧ و٥٥. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'De zending van de Profeet ﷺ: de Mekkaanse periode en de hijra',
  subtitle: 'Acht lessen samen op één pagina',
  summary: 'Hoe Allah Zijn Boodschapper vóór de zending beschermde, het begin van de openbaring in de grot Ḥirāʾ en de vormen van openbaring, de drie fasen van de oproep: in het geheim, openlijk en buiten Mekka, de kwellingen door de polytheïsten, de twee emigraties naar Abessinië en de belegering in de vallei, daarna aṭ-Ṭāʾif en de twee eden van al-ʿAqaba, het complot in Dār an-Nadwa en de hijra naar Medina.',
  source: { ...source, label: 'Kitāb as-Sīra an-nabawiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De zending van de Profeet ﷺ', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Zending en openbaring', sub: 'les 5–6', page: 34, children: ['bescherming vóór de zending', 'de grot Ḥirāʾ', 'vormen van openbaring'] },
      { label: 'Oproep in het geheim', sub: 'les 6', page: 39, children: ['de vroegste moslims', 'het gebed voorgeschreven'] },
      { label: 'Openlijke oproep', sub: 'les 7–8', page: 41, children: ['aṣ-Ṣafā', 'kwellingen', 'Dār al-Arqam', 'Abessinië'] },
      { label: 'Boycot en rouw', sub: 'les 9', page: 45, children: ['het document', 'de vallei van Abū Ṭālib', 'dood van Abū Ṭālib en Khadīja'] },
      { label: 'Oproep buiten Mekka', sub: 'les 10–11', page: 48, children: ['aṭ-Ṭāʾif', 'Nachtreis en Hemelvaart', 'de eden van al-ʿAqaba'] },
      { label: 'De hijra', sub: 'les 12', page: 52, children: ['Dār an-Nadwa', 'de grot Thawr', 'aankomst in Medina'] }
    ]
  },
  points: [
    { text: 'Zijn leven ﷺ na het profeetschap valt in twee perioden: de Mekkaanse van dertien jaar en de Medinensische van tien jaar.', page: 34 },
    { text: 'Allah beschermde hem vóór de zending: edele afkomst, geen schandelijke daden, nooit neergeknield voor een afgod of bij iets anders dan Allah gezworen.', page: 34 },
    { text: 'Op zijn veertigste kwam Jibrīl in de grot Ḥirāʾ naar hem toe en zei: lees!', page: 35 },
    { text: 'De verzen van al-Muddaththir zijn het begin van zijn zending: de opdracht te verkondigen, en de opdracht Allahs bevelen op zichzelf toe te passen.', page: 37 },
    { text: 'De oproep was eerst geheim, zodat de Mekkanen niet werden opgehitst.', page: 39 },
    { text: 'Toen "verkondig dus wat je bevolen wordt" kwam, riep hij openlijk op in de bijeenkomsten van de polytheïsten en bad hij bij de Kaʿba.', page: 43 },
    { text: 'In aṭ-Ṭāʾif werd hij gekwetst tot zijn voeten bloedden; hij vergaf hen en hoopte dat uit hun nageslacht mensen zouden komen die Allah alleen aanbidden.', page: 48 },
    { text: 'Hij emigreerde met Abū Bakr nadat de polytheïsten in Dār an-Nadwa besloten hadden hem te doden.', page: 52 }
  ],
  terms: [
    { term: 'العهد المكي', translit: 'al-ʿahd al-makkī', meaning: 'De Mekkaanse periode: zijn leven ﷺ in Mekka na het profeetschap, dertien jaar.', explanation: '', notes: [], page: 34 },
    { term: 'غار حراء', translit: 'ghār ḥirāʾ', meaning: 'Een grot op ongeveer twee mijl van Mekka waar hij in Ramadan in afzondering aanbad.', explanation: 'Daar kwam de openbaring tot hem.', notes: [], page: 35 },
    { term: 'فترة الوحي', translit: 'fatrat al-waḥy', meaning: 'De onderbreking van de openbaring na de eerste keer.', explanation: 'Ibn Ḥajar: zodat de schrik zou verdwijnen en het verlangen naar terugkeer zou ontstaan.', notes: [], page: 36 },
    { term: 'صلصلة الجرس', translit: 'ṣalṣalat al-jaras', meaning: 'Het geluid van een bel: de zwaarste vorm van openbaring voor hem.', explanation: 'Zelfs op een zeer koude dag parelde het zweet op zijn voorhoofd.', notes: [], page: 38 },
    { term: 'السابقون الأولون', translit: 'as-sābiqūn al-awwalūn', meaning: 'De vroegste moslims, die zijn geheime oproep als eersten beantwoordden.', explanation: 'Voorop Khadīja, Abū Bakr, Zayd ibn Ḥāritha en ʿAlī.', notes: [], page: 39 },
    { term: 'دار الأرقم', translit: 'dār al-arqam', meaning: 'Het huis van al-Arqam ibn Abī l-Arqam al-Makhzūmī.', explanation: 'Het centrum van de oproep, waar hij de moslims in het geheim ontmoette.', notes: [], page: 43 },
    { term: 'ميثاق الظلم', translit: 'mīthāq aẓ-ẓulm', meaning: 'Het document van onrecht: een verbond van de polytheïsten om de Banū Hāshim en Banū l-Muṭṭalib te boycotten.', explanation: 'Het hing in de Kaʿba en werd na drie jaar verbroken.', notes: [], page: 45 },
    { term: 'عام الحزن', translit: 'ʿām al-ḥuzn', meaning: 'Het jaar van rouw: bekende naam voor het jaar waarin Abū Ṭālib en Khadīja stierven.', explanation: 'Het boek zegt: niet vastgesteld is dat de Profeet ﷺ, zijn metgezellen of hun opvolgers het zo noemden.', notes: [], page: 46 },
    { term: 'الإسراء والمعراج', translit: 'al-isrāʾ wa-l-miʿrāj', meaning: 'De Nachtreis van de Heilige Moskee naar Jeruzalem, en daarna de opstijging door de hemelen.', explanation: 'Toen werden de vijf gebeden voorgeschreven.', notes: [], page: 49 },
    { term: 'بيعة العقبة', translit: 'bayʿat al-ʿaqaba', meaning: 'De eed die mensen uit Yathrib hem bij al-ʿAqaba in Minā gaven.', explanation: 'De eerste in het twaalfde jaar van het profeetschap, de tweede in het dertiende.', notes: [], page: 50 },
    { term: 'دار الندوة', translit: 'dār an-nadwa', meaning: 'De raadsvergadering van Quraysh waar zij besloten hem ﷺ te doden.', explanation: 'Op voorstel van Abū Jahl.', notes: [], page: 51 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'De Mekkaanse periode',
      intro: 'Zoals in het schema van het boek.',
      nodes: [
        { label: 'De zending', sub: 'op zijn veertigste', page: 35 },
        { label: 'Jibrīl en de openbaring', page: 35 },
        { label: 'Het gebed voorgeschreven', page: 40 },
        { label: 'Twee emigraties naar Abessinië', sub: 'de eerste in het vijfde jaar', page: 44 },
        { label: 'Het document en de vallei van Abū Ṭālib', sub: 'drie jaar', page: 45 },
        { label: 'Dood van Abū Ṭālib en Khadīja', sub: 'het tiende jaar', page: 46 },
        { label: 'Nachtreis en Hemelvaart', page: 49 },
        { label: 'De eden van al-ʿAqaba', sub: 'jaar 12 en 13', page: 50 },
        { label: 'Dār an-Nadwa', page: 51 },
        { label: 'De hijra', page: 52 }
      ]
    },
    {
      type: 'cards',
      title: 'Vormen van openbaring',
      intro: 'Zes niveaus zoals in het boek.',
      nodes: [
        { label: 'De ware droom', sub: 'het begin van zijn openbaring', page: 38 },
        { label: 'Ingeving in het hart', sub: 'de engel werpt het in zijn hart zonder dat hij hem ziet', page: 38 },
        { label: 'De engel als man', sub: 'soms zagen de metgezellen hem', page: 38 },
        { label: 'Als het geluid van een bel', sub: 'de zwaarste vorm', page: 38 },
        { label: 'De engel in zijn ware gedaante', sub: 'twee keer', page: 38 },
        { label: 'Wat Allah hem boven de hemelen openbaarde', sub: 'in de nacht van de Hemelvaart', page: 38 }
      ]
    },
    {
      type: 'steps',
      title: 'De fasen van de oproep',
      intro: 'Drie fasen.',
      nodes: [
        { label: 'In het geheim', sub: 'aan zijn familie en vrienden', page: 39 },
        { label: 'Openlijk', sub: '"en waarschuw je naaste verwanten"', page: 41 },
        { label: 'Buiten Mekka', sub: 'aṭ-Ṭāʾif, de stammen en de mensen van Yathrib', page: 48 }
      ]
    },
    {
      type: 'compare',
      title: 'De twee emigraties naar Abessinië',
      intro: 'Zoals in les 8.',
      columns: ['De eerste', 'De tweede'],
      rows: [
        { label: 'Aantal', cells: ['elf mannen en vier vrouwen', 'tweeëntachtig mannen en achttien vrouwen met hun kinderen'] },
        { label: 'Opmerking', cells: ['in het vijfde jaar; de eersten waren ʿUthmān en Ruqayya', 'nadat sommigen terugkeerden en de moslims in grote nood vonden'] }
      ],
      page: 44
    },
    {
      type: 'compare',
      title: 'De twee eden van al-ʿAqaba',
      intro: 'Zoals in les 11.',
      columns: ['De eerste', 'De tweede'],
      rows: [
        { label: 'Jaar', cells: ['het twaalfde jaar van het profeetschap', 'het dertiende jaar van het profeetschap'] },
        { label: 'Aantal', cells: ['twaalf mannen', 'ruim zeventig mensen'] },
        { label: 'Daarna', cells: ['Muṣʿab ibn ʿUmayr naar Yathrib gestuurd', 'de moslims emigreerden naar Medina'] }
      ],
      page: 50
    },
    {
      type: 'steps',
      title: 'De hijra naar Medina',
      intro: 'Zoals in les 12.',
      nodes: [
        { label: 'In het huis van Abū Bakr', sub: 'het plan midden op de dag afgesproken', page: 52 },
        { label: 'ʿAlī in zijn bed', sub: 'de Profeet ﷺ ging tussen de belegeraars door naar buiten', page: 53 },
        { label: 'De grot Thawr', sub: 'drie nachten, ten zuiden van Mekka richting Jemen', page: 53 },
        { label: 'De kustweg', sub: 'met ʿĀmir ibn Fuhayra en de gids ʿAbdallāh ibn Urayqiṭ', page: 54 },
        { label: 'Aankomst in Medina', sub: 'hij verbleef bij Abū Ayyūb al-Anṣārī', page: 54 }
      ]
    }
  ],
  sections: [
    { title: 'Allahs bescherming vóór de zending', text: 'Allah koos hem uit de edelste afkomst, uit een geldig huwelijk; zijn grootvader en oom, beiden leiders van Quraysh, zorgden voor hem; als jongeman bleef hij vrij van schandelijke daden en stond hij bekend om eerlijkheid en betrouwbaarheid; hij aanbad niets naast Allah, knielde nooit voor een afgod en zwoer niet bij iets anders dan Allah; en Allah maakte hem vrij van de invloed van de duivel, zoals bij het openen van zijn borst.', more: '', page: 34 },
    { title: 'In de grot Ḥirāʾ', text: 'Drie jaar vóór zijn veertigste kreeg hij liefde voor afzondering; hij verbleef in Ramadan in de grot Ḥirāʾ, in aanbidding en overpeinzing. Dat was Allahs voorbereiding op de grote opdracht.', more: '', page: 35 },
    { title: 'Een bericht dat niet klopt', text: 'Er wordt verteld dat hij ﷺ na de onderbreking van de openbaring zo bedroefd was dat hij meermaals naar bergtoppen ging. Het boek zegt: het juiste is dat dit niet door al-Bukhārī is overgeleverd als hadith, maar een ongestaafd bericht van az-Zuhrī is zonder doorlopende keten; het mag niet aan de Profeet ﷺ worden toegeschreven.', more: '', page: 36 },
    { title: 'Het begin van de zending', text: 'De verzen van al-Muddaththir zijn het begin van zijn zending en bevatten twee opdrachten: verkondigen en waarschuwen ("sta op en waarschuw"), en Allahs bevelen op zichzelf toepassen ("en verheerlijk je Heer, en reinig je kleding").', more: 'al-Muddaththir 74:1–5', page: 37 },
    { title: 'Waarom de oproep eerst geheim was', text: 'Zijn volk was ruw: hun godsdienst was afgodendienst, hun enige argument het volgen van de vaderen, hun enige oplossing het zwaard, en zij hadden het religieuze leiderschap van Arabië. Daarom was het wijs om in het geheim te beginnen.', more: '', page: 39 },
    { title: 'Op de berg aṣ-Ṣafā (alleen ter kennisname)', text: 'Toen "en waarschuw je naaste verwanten" kwam, beklom hij aṣ-Ṣafā en riep de families van Quraysh. Zij getuigden dat zij nooit een leugen van hem hadden gehoord, en hij waarschuwde hen. Abū Lahab zei: verdoemd ben je; toen kwam Sūrat al-Masad.', more: 'ash-Shuʿarāʾ 26:214, al-Masad 111:1. ' + FYI_NL, page: 41 },
    { title: 'Twee wijze stappen', text: 'Toen de kwellingen toenamen, maakte hij het huis van al-Arqam ibn Abī l-Arqam tot geheim centrum van de oproep, en liet hij de moslims naar Abessinië emigreren, naar een koning bij wie niemand onrecht werd aangedaan. De Negus ontving hen eervol en weigerde hen aan Quraysh terug te geven.', more: '', page: 43 },
    { title: 'De vallei van Abū Ṭālib', text: 'De polytheïsten spraken af de Banū Hāshim en de Banū l-Muṭṭalib te boycotten tot zij de Profeet ﷺ uitleverden om hem te doden. Zij werden in de vallei ingesloten tot zij bladeren en huiden aten. Na drie jaar, in Muḥarram van het tiende jaar, werd het document verbroken.', more: '', page: 45 },
    { title: 'De reis naar aṭ-Ṭāʾif', text: 'Hij ging te voet naar aṭ-Ṭāʾif met Zayd ibn Ḥāritha. Ze wezen hem hard af en hitsten hun dwazen op, tot zijn voeten bloedden. Toen de engel van de bergen aanbood de twee bergen over hen te sluiten, vergaf hij hen.', more: '', page: 48 },
    { title: 'De Nachtreis en Hemelvaart (alleen ter kennisname)', text: 'Ibn al-Qayyim: hij werd met zijn lichaam van de Heilige Moskee naar Jeruzalem gebracht op al-Burāq, leidde daar de profeten in het gebed, werd door de hemelen opgenomen, en kreeg vijftig gebeden opgelegd; hij vroeg om verlichting tot het er vijf werden.', more: FYI_NL, page: 49 },
    { title: 'De eerste gezant in de islam (alleen ter kennisname)', text: 'Hij stuurde Muṣʿab ibn ʿUmayr met de mensen van de eerste eed naar Yathrib om hen te onderwijzen. Muṣʿab verbleef bij Asʿad ibn Zurāra, tot er in elk huis van de Anṣār moslims waren.', more: FYI_NL, page: 50 },
    { title: 'Het complot in Dār an-Nadwa', text: 'Zij stemden in met het voorstel van Abū Jahl: uit elke stam een sterke jongeman nemen die hem tegelijk zouden treffen, zodat zijn bloed over alle stammen verdeeld zou zijn.', more: '', page: 52 },
    { title: 'In de grot (alleen ter kennisname)', text: 'Hij ﷺ ging tussen de belegeraars door naar buiten terwijl Allah hun zicht wegnam, en ging met Abū Bakr naar de grot Thawr, ten zuiden van Mekka, tegengesteld aan de weg naar Medina. Ze bleven er drie nachten; Quraysh loofde honderd kamelen uit voor elk van beiden.', more: 'Yā Sīn 36:9. ' + FYI_NL, page: 53 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Vormen van openbaring', items: ['de ware droom', 'ingeving in het hart', 'de engel als man', 'als het geluid van een bel', 'de engel in zijn ware gedaante', 'openbaring boven de hemelen'], page: 38, origin: 'boek' },
    { kind: 'opsomming', title: 'Fasen van de oproep', items: ['in het geheim', 'openlijk', 'buiten Mekka'], page: 39, origin: 'boek' },
    { kind: 'opsomming', title: 'De vroegste moslims', items: ['Khadīja bint Khuwaylid', 'Abū Bakr aṣ-Ṣiddīq', 'Zayd ibn Ḥāritha', 'ʿAlī ibn Abī Ṭālib'], page: 40, origin: 'boek' },
    { kind: 'onderscheid', title: 'De twee opdrachten in al-Muddaththir', items: ['Verkondigen en waarschuwen: "sta op en waarschuw".', 'Op zichzelf toepassen: "verheerlijk je Heer, en reinig je kleding".'], page: 37, origin: 'boek' },
    { kind: 'opsomming', title: 'De punten van de eerste eed van al-ʿAqaba', items: ['niets aan Allah toevoegen', 'niet stelen', 'geen ontucht', 'je kinderen niet doden', 'geen verzonnen laster', 'hem niet ongehoorzaam zijn in het goede'], page: 50, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De Mekkaanse periode duurde dertien jaar, de Medinensische tien.',
    'De openbaring begon op zijn veertigste in Ḥirāʾ; er zijn zes vormen van openbaring.',
    'De oproep was eerst geheim, toen openlijk, toen buiten Mekka.',
    'De moslims emigreerden twee keer naar Abessinië en werden drie jaar in de vallei ingesloten.',
    'Hij vergaf de mensen van aṭ-Ṭāʾif; de mensen van Yathrib gaven hem twee keer de eed bij al-ʿAqaba.',
    'Quraysh besloot hem te doden; hij emigreerde met Abū Bakr via de grot Thawr naar Medina.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe lang duurde de Mekkaanse periode?', options: ['dertien jaar', 'tien jaar', 'vijf jaar', 'twintig jaar'], answer: 0, explain: 'De Medinensische periode duurde tien jaar.', page: 34 },
    { type: 'mc', q: 'Wat was de zwaarste vorm van openbaring voor hem ﷺ?', options: ['als het geluid van een bel', 'de ware droom', 'ingeving in het hart', 'de engel als man'], answer: 0, explain: 'Zelfs op een koude dag parelde het zweet op zijn voorhoofd.', page: 38 },
    { type: 'tf', q: 'Het bericht dat de Profeet ﷺ naar bergtoppen ging, staat met een doorlopende keten bij al-Bukhārī.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is een ongestaafd bericht van az-Zuhrī zonder doorlopende keten.', page: 36 },
    { type: 'mc', q: 'Waarom was de oproep eerst geheim?', options: ['zodat de Mekkanen niet werden opgehitst', 'omdat er al veel moslims waren', 'omdat hij nog niet mocht oproepen', 'omdat hij op reis was'], answer: 0, explain: 'Dat was wijs.', page: 39 },
    { type: 'mc', q: 'Wie emigreerde als eerste naar Abessinië?', options: ['ʿUthmān en zijn vrouw Ruqayya', 'Abū Bakr', 'ʿUmar', 'Ḥamza'], answer: 0, explain: 'In het vijfde jaar van de zending.', page: 44 },
    { type: 'mc', q: 'Wie ging met de Profeet ﷺ naar aṭ-Ṭāʾif?', options: ['Zayd ibn Ḥāritha', 'Abū Bakr', 'ʿAlī', 'Muṣʿab ibn ʿUmayr'], answer: 0, explain: 'Hij ging te voet.', page: 48 },
    { type: 'mc', q: 'Wie was de eerste gezant in de islam?', options: ['Muṣʿab ibn ʿUmayr', 'Jaʿfar ibn Abī Ṭālib', 'ʿUthmān ibn ʿAffān', 'Asʿad ibn Zurāra'], answer: 0, explain: 'Hij werd naar Yathrib gestuurd om te onderwijzen.', page: 50 },
    { type: 'mc', q: 'In welke grot verborgen de Profeet ﷺ en Abū Bakr zich tijdens de hijra?', options: ['de grot Thawr', 'de grot Ḥirāʾ', 'een grot bij Uḥud', 'een grot bij aṭ-Ṭāʾif'], answer: 0, explain: 'Ten zuiden van Mekka, drie nachten.', page: 53 }
  ]),
  note: 'Oefeningen van het boek op p. 37, 47 en 55. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-seerah', chapter: '5', unit: 4, ar, nl }
