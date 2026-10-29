// Hoofdstukkaart bij التفسير (٢), eenheid 4: سورة التكوير (lessen 18–19, boek p. 65–76).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De hadith van Ibn ʿUmar staat hier met de beoordeling van p. 66
// (at-Tirmidhī: ḥasan); op p. 78 noemt het boek hem ṣaḥīḥ volgens al-Albānī.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (٢)، سلسلة زاد العلمية',
  pages: '65–76',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'ابن عمر', text: 'من سره أن ينظر إلى يوم القيامة كأنه رأي عين فليقرأ: ﴿إذا الشمس كورت﴾، و﴿إذا السماء انفطرت﴾، و﴿إذا السماء انشقت﴾', takhrij: 'أخرجه الترمذي وحسنه', note: 'في أول السورة.', pages: [66], nl: 'Wie de Opstandingsdag wil zien alsof hij hem met eigen ogen ziet, laat hem "Wanneer de zon wordt opgerold", "Wanneer de hemel splijt" en "Wanneer de hemel openscheurt" reciteren', nlNote: 'Aan het begin van de soera.' },
  { narrator: 'أبو هريرة', text: 'لتؤدن الحقوق إلى أهلها يوم القيامة، حتى يقاد للشاة الجلحاء من الشاة القرناء', takhrij: 'أخرجه مسلم', note: 'ذكره الكتاب عند ﴿وإذا الوحوش حشرت﴾.', pages: [67], nl: 'De rechten zullen op de Opstandingsdag zeker aan hun eigenaars worden teruggegeven, zelfs voor het hoornloze schaap wordt vergelding genomen op het gehoornde schaap', nlNote: 'Genoemd bij "en wanneer de wilde dieren worden verzameld".' },
  { narrator: 'عائشة', text: 'أنا أول هذه الأمة من سأل عن ذلك رسول الله ﷺ فقال: «إنما هو جبريل، لم أره على صورته التي خلق عليها غير هاتين المرتين، رأيته منهبطا من السماء، سادا عظم خلقه ما بين السماء والأرض»', takhrij: 'في صحيح مسلم', note: 'ذكره الكتاب عند ﴿ولقد رآه بالأفق المبين﴾.', pages: [72], nl: 'Ik was de eerste van deze umma die de Boodschapper van Allah ﷺ daarnaar vroeg. Hij zei: "Het was Jibrīl. Ik heb hem in de gedaante waarin hij geschapen is alleen deze twee keer gezien. Ik zag hem uit de hemel neerdalen; zijn geweldige gestalte vulde alles tussen hemel en aarde"', nlNote: 'Genoemd bij "en hij heeft hem zeker gezien aan de duidelijke horizon".' }
]

const TAKHRIJ_NL = { 'أخرجه الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde', 'أخرجه مسلم': 'Muslim', 'في صحيح مسلم': 'Ṣaḥīḥ Muslim' }
const NARRATOR_NL = { 'ابن عمر': 'Ibn ʿUmar', 'أبو هريرة': 'Abū Hurayra', 'عائشة': 'ʿĀʾisha' }

const PERSONS = [
  ['ibn-umar', 'text', [66], 'روى حديث «من سره أن ينظر إلى يوم القيامة».', 'Overleverde de hadith "wie de Opstandingsdag wil zien".'],
  ['abu-hurayra', 'text', [67], 'روى حديث القصاص بين الشاة الجلحاء والقرناء.', 'Overleverde de hadith over de vergelding tussen het hoornloze en het gehoornde schaap.'],
  ['aisha', 'text', [72], 'سألت النبي ﷺ عن رؤيته جبريل.', 'Vroeg de Profeet ﷺ naar het zien van Jibrīl.'],
  ['at-tirmidhi', 'takhrij', [66], 'أخرج حديث ابن عمر وحسنه.', 'Nam de hadith van Ibn ʿUmar op en noemde hem ḥasan.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'سورة التكوير',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'سورة مكية تعرض مشاهد يوم القيامة في اثنتي عشرة صورة: تكوير الشمس وانكدار النجوم وتسيير الجبال وتعطيل العشار وحشر الوحوش وتسجير البحار وتزويج النفوس وسؤال الموءودة ونشر الصحف وكشط السماء وتسعير الجحيم وإزلاف الجنة، ثم تقسم بالخنس والليل والصبح على أن القرآن قول رسول كريم.',
  source,
  visual: {
    type: 'mindmap',
    title: 'سورة التكوير في خريطة واحدة',
    intro: 'مقطعا السورة كما قسمها الكتاب.',
    root: { label: 'سورة التكوير', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'مشاهد القيامة', sub: 'الآيات ١–١٤', page: 67, children: ['في السماء', 'في الأرض', 'في الناس', 'الجنة والنار'] },
      { label: 'القسم', sub: 'الآيات ١٥–١٨', page: 71, children: ['الخنس الجوار الكنس', 'الليل إذا عسعس', 'الصبح إذا تنفس'] },
      { label: 'جواب القسم', sub: 'الآيات ١٩–٢٥', page: 72, children: ['جبريل رسول كريم', 'ما صاحبكم بمجنون', 'ليس بقول شيطان'] },
      { label: 'الختام', sub: 'الآيات ٢٦–٢٩', page: 73, children: ['ذكر للعالمين', 'لمن شاء أن يستقيم', 'إلا أن يشاء الله'] }
    ]
  },
  points: [
    { text: 'التكوير جمع بعض الشيء إلى بعض كتكوير العمامة؛ فتلف الشمس ويذهب ضوؤها.', page: 67 },
    { text: 'تعطل العشار، وهي أنفس أموال العرب، لانشغال الناس عن أموالهم بهول ذلك اليوم.', page: 67 },
    { text: 'تحشر الوحوش ليقتص الله من بعضها لبعض.', page: 67 },
    { text: 'وجه السؤال إلى الموءودة لا إلى قاتلها إظهارًا لكمال الغضب عليه.', page: 68 },
    { text: 'يوم القيامة يضم كل شكل من البشر إلى مثله.', page: 69 },
    { text: 'الرسول الكريم في جواب القسم هو جبريل، بلغ القرآن من رب العزة إلى محمد ﷺ.', page: 72 },
    { text: 'رأى النبي ﷺ جبريل على صورته الحقيقية مرتين.', page: 72 },
    { text: 'لا يقدر العباد على الاستقامة إلا بعد مشيئة الله.', page: 73 }
  ],
  terms: [
    { term: 'التكوير', translit: 'at-takwīr', meaning: 'جمع بعض الشيء إلى بعض، كلف العمامة على الرأس.', explanation: '', notes: [], page: 67 },
    { term: 'انكدرت', translit: 'inkadarat', meaning: 'تناثرت وتساقطت وتغيرت.', explanation: '', notes: [], page: 67 },
    { term: 'العشار', translit: 'al-ʿishār', meaning: 'النوق الحوامل التي بلغت الشهر العاشر من حملها.', explanation: '', notes: [], page: 67 },
    { term: 'سجرت', translit: 'sujjirat', meaning: 'أوقدت فصارت نارًا؛ وقيل ذهب ماؤها ويبست.', explanation: '', notes: [], page: 67 },
    { term: 'زوجت', translit: 'zuwwijat', meaning: 'قرن كل صاحب عمل بنظيره.', explanation: '', notes: [], page: 67 },
    { term: 'الموءودة', translit: 'al-mawʾūda', meaning: 'الأنثى التي دفنت حية.', explanation: 'من آده إذا أثقله.', notes: [], page: 68 },
    { term: 'كشطت', translit: 'kushiṭat', meaning: 'قلعت وأزيلت من مكانها.', explanation: 'كما يكشط الجلد عن الكبش.', notes: [], page: 68 },
    { term: 'أزلفت', translit: 'uzlifat', meaning: 'قربت من أهلها المتقين.', explanation: '', notes: [], page: 68 },
    { term: 'الخنس', translit: 'al-khunnas', meaning: 'النجوم المختفية أنوارها نهارًا.', explanation: '', notes: [], page: 71 },
    { term: 'الكنس', translit: 'al-kunnas', meaning: 'المستترة في أبراجها.', explanation: '', notes: [], page: 71 },
    { term: 'عسعس', translit: 'ʿasʿasa', meaning: 'أقبل بظلامه وأدبر.', explanation: '', notes: [], page: 71 },
    { term: 'ضنين', translit: 'ḍanīn', meaning: 'بخيل.', explanation: 'ليس النبي ﷺ بخيلًا في تبليغ الوحي.', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'اثنا عشر مشهدًا',
      intro: 'كما في الآيات ١–١٣.',
      nodes: [
        { label: 'الشمس كورت', sub: 'ذهب ضوؤها', page: 67 },
        { label: 'النجوم انكدرت', sub: 'تناثرت', page: 67 },
        { label: 'الجبال سيرت', sub: 'صارت سرابًا', page: 67 },
        { label: 'العشار عطلت', sub: 'أهملت', page: 67 },
        { label: 'الوحوش حشرت', sub: 'جمعت', page: 67 },
        { label: 'البحار سجرت', sub: 'أوقدت', page: 67 },
        { label: 'النفوس زوجت', sub: 'قرن كل بنظيره', page: 67 },
        { label: 'الموءودة سئلت', sub: 'بأي ذنب قتلت', page: 68 },
        { label: 'الصحف نشرت', sub: 'عرضت', page: 68 },
        { label: 'السماء كشطت', sub: 'قلعت', page: 68 },
        { label: 'الجحيم سعرت', sub: 'أحميت', page: 68 },
        { label: 'الجنة أزلفت', sub: 'قربت', page: 68 }
      ]
    },
    {
      type: 'compare',
      title: 'صفات الرسولين',
      intro: 'وصف الرسول الملكي والرسول البشري بأجمل الصفات، دلالة على شرف الرسالة.',
      columns: ['صفاته في السورة'],
      rows: [
        { label: 'جبريل', cells: ['كريم، ذو قوة، مكين عند ذي العرش، مطاع، أمين'] },
        { label: 'محمد ﷺ', cells: ['صاحبكم، ليس بمجنون، رأى جبريل، ليس على الغيب بضنين'] }
      ],
      page: 74
    }
  ],
  sections: [
    { title: 'حال الوحوش', text: 'تجتمع الوحوش النافرة ولا يعدو بعضها على بعض وتذهل عن طبعها من شدة الرعب، فما حال الإنسان؟!', page: 69 },
    { title: 'الصحف', text: 'كل قول وفعل يكتب في صحائف بأيدي كرام كاتبين، ويخرج للإنسان يوم القيامة كتابًا يلقاه منشورًا.', page: 69 },
    { title: '«ذي العرش»', text: 'عدل عن اسم الجلالة إلى «ذي العرش» تمثيلًا لمكانة جبريل عند الله بحال الأمير الماضي في أمر الملك.', page: 74 },
    { title: '«صاحبكم»', text: 'توبيخ لقريش: صاحبوه أكثر من أربعين سنة لم يلمسوا منه جنونًا ولا سحرًا.', page: 74 },
    { title: 'من قوة جبريل', text: 'أنه قلب ديار قوم لوط فأهلكهم.', page: 72 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'معنيان لـ«سجرت»', items: ['أوقدت فصارت نارًا', 'ذهب ماؤها ويبست'], page: 67, origin: 'boek' },
    { kind: 'onderscheid', title: 'من المسؤول في ﴿وإذا الموءودة سئلت﴾', items: ['تسأل الموءودة لا القاتل.', 'إظهارًا لكمال الغضب على القاتل كأنه لا يستحق أن يخاطب.'], page: 68, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'اثنا عشر مشهدًا من مشاهد القيامة في أول السورة.',
    'تسأل الموءودة لا قاتلها، إظهارًا للغضب عليه.',
    'القسم بالخنس والليل والصبح على أن القرآن قول رسول كريم.',
    'جبريل كريم قوي مكين مطاع أمين، ومحمد ﷺ ليس بمجنون ولا ضنين.',
    'لا استقامة إلا بمشيئة الله.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما «العشار»؟', options: ['النوق الحوامل في الشهر العاشر', 'عشر من الإبل', 'الأنعام كلها', 'القبائل'], answer: 0, explain: 'وكانت أنفس أموال العرب.', page: 67 },
    { type: 'mc', q: 'لماذا تسأل الموءودة لا قاتلها؟', options: ['إظهارًا لكمال الغضب على القاتل', 'لأنها أعلم', 'لأن القاتل غائب', 'لأنها صغيرة'], answer: 0, explain: 'كأنه لا يستحق أن يخاطب ويسأل.', page: 68 },
    { type: 'mc', q: 'من «الرسول الكريم» في ﴿إنه لقول رسول كريم﴾؟', options: ['جبريل', 'محمد ﷺ', 'موسى', 'ميكائيل'], answer: 0, explain: 'بلغه من رب العزة إلى محمد ﷺ.', page: 72 },
    { type: 'tf', q: '«لا» في ﴿فلا أقسم بالخنس﴾ نافية تنفي القسم.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هي زائدة للتأكيد: أقسم بالخنس.', page: 71 },
    { type: 'mc', q: 'ما معنى «ضنين»؟', options: ['بخيل', 'متهم', 'ضعيف', 'غائب'], answer: 0, explain: 'ليس بخيلًا في تبليغ الوحي.', page: 73 },
    { type: 'tf', q: 'رأى النبي ﷺ جبريل على صورته الحقيقية مرتين.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما في حديث عائشة في صحيح مسلم.', page: 72 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٧٠ و٧٥.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Soera at-Takwīr',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'Een Mekkaanse soera die de Opstandingsdag in twaalf beelden toont: de zon opgerold, de sterren verstrooid, de bergen verplaatst, de drachtige kamelen verwaarloosd, de wilde dieren verzameld, de zeeën ontstoken, de zielen gekoppeld, het levend begraven meisje ondervraagd, de bladen opengeslagen, de hemel weggetrokken, de Hel aangewakkerd en het Paradijs nabij gebracht; daarna zweert Allah bij de verdwijnende sterren, de nacht en de ochtend dat de Koran het woord is van een edele boodschapper.',
  source: { ...source, label: 'At-Tafsīr (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Soera at-Takwīr in één kaart',
    intro: 'De twee delen van de soera zoals het boek ze indeelt.',
    root: { label: 'Soera at-Takwīr', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Beelden van de Opstanding', sub: 'vers 1–14', page: 67, children: ['in de hemel', 'op aarde', 'bij de mensen', 'Paradijs en Hel'] },
      { label: 'De eed', sub: 'vers 15–18', page: 71, children: ['de verdwijnende sterren', 'de nacht die wijkt', 'de ochtend die ademt'] },
      { label: 'Antwoord op de eed', sub: 'vers 19–25', page: 72, children: ['Jibrīl, een edele boodschapper', 'jullie metgezel is niet bezeten', 'niet het woord van een duivel'] },
      { label: 'Slot', sub: 'vers 26–29', page: 73, children: ['een vermaning voor de werelden', 'voor wie recht wil gaan', 'tenzij Allah het wil'] }
    ]
  },
  points: [
    { text: 'Takwīr is iets samenrollen, zoals een tulband om het hoofd; de zon wordt opgerold en haar licht verdwijnt.', page: 67 },
    { text: 'De drachtige kamelen, het kostbaarste bezit van de Arabieren, worden verwaarloosd: de mensen vergeten hun bezit door de verschrikking van die dag.', page: 67 },
    { text: 'De wilde dieren worden verzameld zodat Allah vergelding neemt tussen hen.', page: 67 },
    { text: 'De vraag wordt gesteld aan het begraven meisje en niet aan de dader, om de volle toorn over hem te tonen.', page: 68 },
    { text: 'Op de Opstandingsdag wordt ieder soort mens bij zijn gelijke gevoegd.', page: 69 },
    { text: 'De edele boodschapper in het antwoord op de eed is Jibrīl, die de Koran van de Heer bracht tot Muḥammad ﷺ.', page: 72 },
    { text: 'De Profeet ﷺ zag Jibrīl twee keer in zijn werkelijke gedaante.', page: 72 },
    { text: 'De dienaren kunnen alleen recht gaan nadat Allah het wil.', page: 73 }
  ],
  terms: [
    { term: 'التكوير', translit: 'at-takwīr', meaning: 'Samenrollen, zoals een tulband om het hoofd wordt gewonden.', explanation: '', notes: [], page: 67 },
    { term: 'انكدرت', translit: 'inkadarat', meaning: 'Zij raakten verstrooid, vielen neer en veranderden.', explanation: '', notes: [], page: 67 },
    { term: 'العشار', translit: 'al-ʿishār', meaning: 'Drachtige kamelen in de tiende maand.', explanation: '', notes: [], page: 67 },
    { term: 'سجرت', translit: 'sujjirat', meaning: 'Ontstoken tot vuur; volgens anderen: drooggevallen.', explanation: '', notes: [], page: 67 },
    { term: 'زوجت', translit: 'zuwwijat', meaning: 'Ieder wordt gekoppeld aan wie dezelfde daden deed.', explanation: '', notes: [], page: 67 },
    { term: 'الموءودة', translit: 'al-mawʾūda', meaning: 'Het meisje dat levend begraven werd.', explanation: 'Van āda: zwaar belasten.', notes: [], page: 68 },
    { term: 'كشطت', translit: 'kushiṭat', meaning: 'Weggetrokken van haar plaats.', explanation: 'Zoals de huid van een ram wordt afgestroopt.', notes: [], page: 68 },
    { term: 'أزلفت', translit: 'uzlifat', meaning: 'Dichtbij gebracht voor de godvrezenden.', explanation: '', notes: [], page: 68 },
    { term: 'الخنس', translit: 'al-khunnas', meaning: 'De sterren waarvan het licht overdag verborgen is.', explanation: '', notes: [], page: 71 },
    { term: 'الكنس', translit: 'al-kunnas', meaning: 'Die zich verbergen in hun banen.', explanation: '', notes: [], page: 71 },
    { term: 'عسعس', translit: 'ʿasʿasa', meaning: 'De nacht kwam met zijn duisternis en ging weer.', explanation: '', notes: [], page: 71 },
    { term: 'ضنين', translit: 'ḍanīn', meaning: 'Gierig.', explanation: 'De Profeet ﷺ is niet gierig met het overbrengen van de openbaring.', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'Twaalf beelden',
      intro: 'Zoals in vers 1–13.',
      nodes: [
        { label: 'De zon opgerold', sub: 'haar licht verdwijnt', page: 67 },
        { label: 'De sterren verstrooid', sub: 'zij vallen neer', page: 67 },
        { label: 'De bergen verplaatst', sub: 'als een luchtspiegeling', page: 67 },
        { label: 'Drachtige kamelen verwaarloosd', sub: 'achtergelaten', page: 67 },
        { label: 'Wilde dieren verzameld', sub: 'bijeengebracht', page: 67 },
        { label: 'De zeeën ontstoken', sub: 'tot vuur', page: 67 },
        { label: 'De zielen gekoppeld', sub: 'ieder met zijn gelijke', page: 67 },
        { label: 'Het begraven meisje ondervraagd', sub: 'om welke zonde?', page: 68 },
        { label: 'De bladen opengeslagen', sub: 'getoond', page: 68 },
        { label: 'De hemel weggetrokken', sub: 'losgerukt', page: 68 },
        { label: 'De Hel aangewakkerd', sub: 'verhit', page: 68 },
        { label: 'Het Paradijs nabij gebracht', sub: 'voor de godvrezenden', page: 68 }
      ]
    },
    {
      type: 'compare',
      title: 'De eigenschappen van de twee boodschappers',
      intro: 'De engel en de mens die de boodschap brachten worden met de mooiste eigenschappen beschreven, als teken van de eer van de boodschap.',
      columns: ['Eigenschappen in de soera'],
      rows: [
        { label: 'Jibrīl', cells: ['edel, krachtig, met aanzien bij de Bezitter van de Troon, gehoorzaamd, betrouwbaar'] },
        { label: 'Muḥammad ﷺ', cells: ['jullie metgezel, niet bezeten, zag Jibrīl, niet gierig met het verborgene'] }
      ],
      page: 74
    }
  ],
  sections: [
    { title: 'De wilde dieren', text: 'Schuwe dieren komen samen zonder elkaar aan te vallen en vergeten hun aard van angst; hoe zal het dan de mens vergaan?', page: 69 },
    { title: 'De bladen', text: 'Elk woord en elke daad wordt opgeschreven door edele schrijvers; op de Opstandingsdag krijgt de mens zijn boek opengeslagen voor zich.', page: 69 },
    { title: '"De Bezitter van de Troon"', text: 'In plaats van de naam Allah staat hier "de Bezitter van de Troon", om de positie van Jibrīl bij Allah te tonen, als een gezagsdrager die het bevel van de koning uitvoert.', page: 74 },
    { title: '"Jullie metgezel"', text: 'Een verwijt aan Quraysh: zij kenden hem meer dan veertig jaar en merkten nooit waanzin of tovenarij bij hem.', page: 74 },
    { title: 'De kracht van Jibrīl', text: 'Een voorbeeld: hij keerde de woonplaatsen van het volk van Lūṭ om en vernietigde hen.', page: 72 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Twee betekenissen van sujjirat', items: ['ontstoken tot vuur', 'het water verdween en zij vielen droog'], page: 67, origin: 'boek' },
    { kind: 'onderscheid', title: 'Wie wordt ondervraagd bij het begraven meisje?', items: ['het meisje, niet de dader', 'om de volle toorn over de dader te tonen, alsof hij het niet waard is aangesproken te worden'], page: 68, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Twaalf beelden van de Opstanding aan het begin van de soera.',
    'Het begraven meisje wordt ondervraagd, niet de dader, om de toorn over hem te tonen.',
    'Een eed bij de sterren, de nacht en de ochtend dat de Koran het woord van een edele boodschapper is.',
    'Jibrīl is edel, krachtig, gezien, gehoorzaamd en betrouwbaar; Muḥammad ﷺ is niet bezeten en niet gierig.',
    'Recht gaan kan alleen met de wil van Allah.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat zijn al-ʿishār?', options: ['drachtige kamelen in de tiende maand', 'tien kamelen', 'al het vee', 'de stammen'], answer: 0, explain: 'Het kostbaarste bezit van de Arabieren.', page: 67 },
    { type: 'mc', q: 'Waarom wordt het meisje ondervraagd en niet de dader?', options: ['om de volle toorn over de dader te tonen', 'omdat zij meer weet', 'omdat de dader afwezig is', 'omdat zij jong is'], answer: 0, explain: 'Alsof hij het niet waard is aangesproken te worden.', page: 68 },
    { type: 'mc', q: 'Wie is "de edele boodschapper" in "het is het woord van een edele boodschapper"?', options: ['Jibrīl', 'Muḥammad ﷺ', 'Mūsā', 'Mīkāʾīl'], answer: 0, explain: 'Hij bracht de Koran van de Heer tot Muḥammad ﷺ.', page: 72 },
    { type: 'tf', q: 'Het woordje lā in "fa-lā uqsimu" ontkent de eed.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is extra en versterkt: Ik zweer bij de verdwijnende sterren.', page: 71 },
    { type: 'mc', q: 'Wat betekent ḍanīn?', options: ['gierig', 'verdacht', 'zwak', 'afwezig'], answer: 0, explain: 'Hij is niet gierig met het overbrengen van de openbaring.', page: 73 },
    { type: 'tf', q: 'De Profeet ﷺ zag Jibrīl twee keer in zijn werkelijke gedaante.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals in de hadith van ʿĀʾisha in Ṣaḥīḥ Muslim.', page: 72 }
  ]),
  note: 'Oefeningen van het boek op p. 70 en 75. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tafsir', chapter: '18', unit: 4, ar, nl }
