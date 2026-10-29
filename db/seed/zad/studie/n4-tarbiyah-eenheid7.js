// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 7: الجدال والمراء (lessen 16–17, boek p. 46–49).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '16',
  unit: 7,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '46–49',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['الجدال والمراء', 'Twisten en ruziën'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'الجدال المخاصمة ومراجعة الكلام، ويسمى المراء، وهو من الآفات التي تقسي القلب، وكان السلف يكرهونه. منه محمود لإظهار الحق بالتي هي أحسن، ومذموم لنصرة الباطل أو بغير علم، وللمذموم أضرار: حرمان العمل والعلم، والتسبب في الهلاك، وإيراث الضغائن، وشغل القلب عن الله.',
    'Twisten (jidāl, ook mirāʾ) is redetwisten en heen en weer praten; het verhardt het hart en de salaf verafschuwden het. Er is lofwaardig twisten om de waarheid te tonen op de beste wijze, en laakbaar twisten om het valse te steunen of zonder kennis. Het laakbare ontneemt goede daden en kennis, leidt tot ondergang, brengt wrok en houdt het hart af van Allah.'
  ],
  map: {
    title: ['الجدال في خريطة واحدة', 'Twisten in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['الجدال والمراء', 'Twisten en ruziën'], ['الوحدة السابعة', 'Eenheid 7']],
    nodes: [
      { label: ['التعريف', 'Definitie'], sub: ['ص ٤٦', 'p. 46'], page: 46, children: [['المخاصمة ومراجعة الكلام', 'redetwisten en heen en weer praten']] },
      { label: ['المحمود', 'Lofwaardig'], sub: ['ص ٤٦', 'p. 46'], page: 46, children: [['﴿وجادلهم بالتي هي أحسن﴾', '"twist met hen op de beste wijze"']] },
      { label: ['المذموم', 'Laakbaar'], sub: ['ص ٤٦–٤٧', 'p. 46–47'], page: 46, children: [['بغير علم', 'zonder kennis'], ['لنصرة الباطل', 'om het valse te steunen'], ['الجدال في الحج', 'twisten in de hadj']] },
      { label: ['أضرار المذموم', 'Schade van het laakbare'], sub: ['ص ٤٨–٤٩', 'p. 48–49'], page: 48, children: [['حرمان العمل والعلم', 'verlies van daden en kennis'], ['الهلاك', 'ondergang'], ['قسوة القلب', 'een hard hart']] }
    ]
  },
  points: [
    [46, 'قال إبراهيم النخعي: كانوا يكرهون الجدال.', 'Ibrāhīm an-Nakhaʿī: zij verafschuwden het twisten.'],
    [46, 'الجدال المحمود: الحوار والمناظرة لبيان الحق بالرفق واللين وحسن الخطاب.', 'Lofwaardig twisten: dialoog en debat om de waarheid te tonen, met zachtheid en goede aanspreking.'],
    [46, 'الجدال المذموم من طبيعة الكفار: ﴿ويجادل الذين كفروا بالباطل ليدحضوا به الحق﴾ [الكهف: 56].', 'Laakbaar twisten hoort bij de ongelovigen: zij twisten met het valse om de waarheid te weerleggen (18:56).'],
    [47, 'الجدال بالباطل مذموم في كل حال، لأنه إبطال حق أو نصرة باطل.', 'Twisten met het valse is altijd laakbaar, want het doet de waarheid teniet of steunt het valse.'],
    [47, 'الجدال المنهي عنه في الحج ما سبب خصومة وشحناء أو كان بغير علم، أما مدارسة المسائل لمعرفة السنة فلا بأس به.', 'Het verboden twisten in de hadj is wat ruzie en haat veroorzaakt of zonder kennis is; vraagstukken bespreken om de sunna te kennen mag wel.'],
    [48, 'قال الأوزاعي: إذا أراد الله بقوم شرا ألزمهم الجدل ومنعهم العمل.', 'Al-Awzāʿī: als Allah kwaad wil voor een volk, bindt Hij hen aan twisten en ontzegt Hij hun het handelen.'],
    [48, 'رفع تعيين ليلة القدر بسبب تلاحي رجلين.', 'De kennis van de precieze Nacht van de Beschikking werd weggenomen door de ruzie van twee mannen.'],
    [49, 'قال الشافعي: المراء في العلم يقسي القلب ويورث الضغائن.', 'Ash-Shāfiʿī: ruziën over kennis verhardt het hart en brengt wrok.']
  ],
  terms: [
    ['الجدال', 'al-jidāl', 46, 'المخاصمة ومراجعة الكلام، ومدافعة المرء خصمه لتصحيح كلامه، ويسمى المراء.', 'Redetwisten en heen en weer praten, de tegenstander afweren om het eigen gelijk te halen; ook mirāʾ genoemd.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الجدال المحمود والمذموم', 'Lofwaardig en laakbaar twisten'],
      intro: ['كما في الصفحتين ٤٦–٤٧.', 'Zoals op p. 46–47.'],
      columns: [['المحمود', 'Lofwaardig'], ['المذموم', 'Laakbaar']],
      rows: [
        { label: ['الغاية', 'Doel'], cells: [['بيان الحق وإظهاره', 'de waarheid tonen'], ['نصرة الباطل أو دفع الحق', 'het valse steunen of de waarheid afweren']] },
        { label: ['الطريقة', 'Wijze'], cells: [['بالتي هي أحسن، برفق ولين', 'op de beste wijze, met zachtheid'], ['بغير علم، أو تعنت وتنطع', 'zonder kennis, of met dwarsliggen en haarkloverij']] },
        { label: ['الدليل', 'Bewijs'], cells: [['﴿وجادلهم بالتي هي أحسن﴾ [النحل: 125]', 'an-Naḥl 125'], ['﴿ومن الناس من يجادل في الله بغير علم﴾ [الحج: 3]', 'al-Ḥajj 3']] }
      ],
      page: 46
    }
  ],
  sections: [
    [46, 'صورتا الجدال المذموم', 'Twee vormen van laakbaar twisten', 'الجدال بغير علم: ﴿فلم تحاجون فيما ليس لكم به علم﴾ [آل عمران: 66]، والجدال لنصرة الباطل بعد ظهور الحق: ﴿وجادلوا بالباطل ليدحضوا به الحق﴾ [غافر: 5].', 'Twisten zonder kennis (3:66), en twisten om het valse te steunen nadat de waarheid duidelijk is (40:5).'],
    [48, 'من أضرار الجدال', 'Schade van twisten', 'قال معاوية بن قرة: إياكم وهذه الخصومات فإنها تحبط الأعمال؛ والجدال في المسائل سبب لهلاك من كان قبلنا.', 'Muʿāwiya ibn Qurra: pas op voor deze twisten, want ze maken daden waardeloos; en twisten over vragen bracht de vroegere volken ten onder.']
  ],
  keycards: [
    ['opsomming', 48, 'أضرار الجدال المذموم', 'Schade van laakbaar twisten', ['حرمان عمل الخير', 'حرمان العلم', 'التسبب في الهلاك', 'إيراث الضغائن وقسوة القلوب', 'انشغال القلب عن الله'], ['verlies van goede daden', 'verlies van kennis', 'ondergang', 'wrok en harde harten', 'het hart afgeleid van Allah']]
  ],
  hadith: [
    { text: 'إني خرجت لأخبركم بليلة القدر، وإنه تلاحى فلان وفلان، فرفعت، وعسى أن يكون خيرا لكم، التمسوها في السبع، والتسع، والخمس', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عبادة بن الصامت', narratorNl: 'ʿUbāda ibn aṣ-Ṣāmit', nl: 'Ik kwam naar buiten om jullie te vertellen welke nacht de Nacht van de Beschikking is, maar die-en-die kregen ruzie, en zij werd weggenomen; misschien is dat beter voor jullie: zoek haar in de zevende, negende en vijfde', pages: [48] },
    { text: 'دعوني ما تركتكم، إنما هلك من كان قبلكم بسؤالهم واختلافهم على أنبيائهم، فإذا نهيتكم عن شيء فاجتنبوه، وإذا أمرتكم بأمر فأتوا منه ما استطعتم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Laat mij met rust zolang ik jullie met rust laat; wie vóór jullie waren, gingen ten onder door hun vragen en hun onenigheid met hun profeten. Verbied ik jullie iets, mijd het dan; gebied ik jullie iets, doe er dan van wat jullie kunnen', pages: [48] }
  ],
  persons: [
    ['ibrahim-an-nakhai', 'text', [46], 'قال: كانوا يكرهون الجدال.', 'Zei: zij verafschuwden het twisten.'],
    ['al-awzai', 'text', [48], 'قال: إذا أراد الله بقوم شرا ألزمهم الجدل.', 'Zei: als Allah kwaad wil voor een volk, bindt Hij hen aan twisten.'],
    ['muawiya-ibn-qurra', 'text', [48], 'حذر من الخصومات لأنها تحبط الأعمال.', 'Waarschuwde voor twisten, want ze maken daden waardeloos.'],
    ['ubada-ibn-as-samit', 'text', [48], 'روى رفع تعيين ليلة القدر بسبب التلاحي.', 'Overleverde dat de Nacht van de Beschikking door ruzie werd weggenomen.'],
    ['abu-hurayra', 'text', [48], 'روى «دعوني ما تركتكم».', 'Overleverde "laat mij met rust zolang ik jullie met rust laat".'],
    ['ash-shafii', 'text', [49], 'قال: المراء في العلم يقسي القلب.', 'Zei: ruziën over kennis verhardt het hart.']
  ],
  review: [
    ['الجدال المخاصمة ومراجعة الكلام، وكان السلف يكرهونه.', 'Twisten is redetwisten; de salaf verafschuwden het.'],
    ['منه محمود لبيان الحق، ومذموم بغير علم أو لنصرة الباطل.', 'Lofwaardig om de waarheid te tonen, laakbaar zonder kennis of voor het valse.'],
    ['الجدال المذموم يحرم العمل والعلم ويقسي القلب.', 'Laakbaar twisten ontneemt daden en kennis en verhardt het hart.']
  ],
  quiz: [
    { type: 'mc', page: 46, q: ['ما الجدال المحمود؟', 'Wat is lofwaardig twisten?'], options: [['الحوار لبيان الحق بالتي هي أحسن', 'الجدال لنصرة الرأي', 'الجدال بغير علم', 'الجدال لإسكات الخصم'], ['dialoog om de waarheid te tonen op de beste wijze', 'twisten om je mening te laten winnen', 'twisten zonder kennis', 'twisten om de ander het zwijgen op te leggen']], answer: 0, explain: ['﴿وجادلهم بالتي هي أحسن﴾.', '"Twist met hen op de beste wijze".'] },
    { type: 'tf', page: 47, q: ['كل مدارسة لمسائل الحج جدال منهي عنه.', 'Elke bespreking van hadj-vraagstukken is verboden twisten.'], answer: 1, explain: ['المدارسة لمعرفة السنة لا بأس بها.', 'Bespreken om de sunna te kennen mag.'] },
    { type: 'mc', page: 48, q: ['لماذا رفع تعيين ليلة القدر؟', 'Waarom werd de kennis van de precieze Nacht van de Beschikking weggenomen?'], options: [['بسبب تلاحي رجلين', 'بسبب كثرة السؤال', 'بسبب ترك القيام', 'بسبب السفر'], ['door de ruzie van twee mannen', 'door veel vragen', 'door het nalaten van het nachtgebed', 'door een reis']], answer: 0, explain: ['كما في حديث عبادة.', 'Zoals in de hadith van ʿUbāda.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٤٩.', 'Oefening van het boek op p. 49. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
