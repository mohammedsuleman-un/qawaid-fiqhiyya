// Hoofdstukkaart bij التفسير (٤), eenheid 14: سورة الماعون (les 16–17, boek p. 65–68).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. Het woord van ʿĀʾisha «كان خلقه القرآن» staat er zonder
// bron en is alleen als uitleg opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '16',
  unit: 14,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '65–68',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الماعون', 'Soera al-Māʿūn'],
  subtitle: ['درسان: ﴿أرأيت الذي يكذب بالدين﴾ و﴿فويل للمصلين﴾', 'Twee lessen: "Heb je gezien wie de vergelding loochent" en "Wee de biddenden"'],
  summary: [
    'تصف السورة المكذب بالدين: يدع اليتيم ولا يحض على طعام المسكين، ثم تتوعد بالويل المصلين الذين هم عن صلاتهم ساهون، الذين يراؤون ويمنعون الماعون.',
    'De soera beschrijft wie de vergelding loochent: hij duwt de wees weg en spoort niet aan de arme te voeden. Daarna bedreigt zij met "wee" de biddenden die hun gebed verwaarlozen, die vertoon maken en het kleine hulpmiddel onthouden.'
  ],
  map: {
    title: ['سورة الماعون في خريطة واحدة', 'Soera al-Māʿūn in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب في درسين.', 'De delen van de soera zoals het boek ze in twee lessen uitlegt.'],
    root: [['سورة الماعون', 'Soera al-Māʿūn'], ['الوحدة الرابعة عشرة', 'Eenheid 14']],
    nodes: [
      { label: ['المكذب بالدين', 'Wie de vergelding loochent'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 65, children: [['يدع اليتيم', 'duwt de wees weg'], ['لا يحض على طعام المسكين', 'spoort niet aan de arme te voeden']] },
      { label: ['الساهون عن صلاتهم', 'Wie hun gebed verwaarlozen'], sub: ['الآيتان ٤–٥', 'vers 4–5'], page: 66, children: [['تركها أو تأخيرها عن وقتها', 'haar laten of buiten haar tijd verrichten']] },
      { label: ['الرياء ومنع الماعون', 'Vertoon en onthouden'], sub: ['الآيتان ٦–٧', 'vers 6–7'], page: 66, children: [['يراؤون الناس', 'maken vertoon voor de mensen'], ['يمنعون الماعون', 'onthouden het kleine hulpmiddel']] }
    ]
  },
  points: [
    [65, '﴿يدع اليتيم﴾: يدفعه عن حقه بعنف ويظلمه، والدع الدفع الشديد.', '"Duwt de wees weg": hij duwt hem hard weg van zijn recht en doet hem onrecht; daʿʿ is hard wegduwen.'],
    [66, 'جاءت «يكذب» و«يدع» و«يحض» بصيغة المضارع للدلالة على التكرار والاستمرار.', '"Loochent", "duwt weg" en "spoort aan" staan in de onvoltooide vorm om herhaling en volharding aan te geven.'],
    [66, 'السهو عن الصلاة: تركها بالكلية كما قال ابن عباس، أو تأخيرها عن وقتها الشرعي.', 'Het gebed verwaarlozen: het helemaal laten, zoals Ibn ʿAbbās zei, of het niet op de wettelijke tijd verrichten.'],
    [66, 'قال عطاء بن دينار: الحمد لله الذي قال ﴿عن صلاتهم ساهون﴾ ولم يقل: في صلاتهم ساهون.', 'ʿAṭāʾ ibn Dīnār: lof zij Allah die zei "hun gebed verwaarlozen" en niet "in hun gebed vergeetachtig".'],
    [67, 'القرآن لا يراد للتلاوة وحدها بل للعمل، ولذلك قالت عائشة: كان خلقه القرآن.', 'De Koran is niet alleen om te reciteren maar om ernaar te handelen; daarom zei ʿĀʾisha: zijn karakter was de Koran.']
  ],
  terms: [
    ['يدع', 'yaduʿʿ', 65, 'يدفع بعنف وشدة.', 'Hard wegduwen.'],
    ['يحض', 'yaḥuḍḍ', 65, 'يحث نفسه أو غيره.', 'Zichzelf of anderen aansporen.'],
    ['ساهون', 'sāhūn', 66, 'غافلون معرضون عنها تاركون لها.', 'Achteloos, afgewend, haar latend.'],
    ['يراءون', 'yurāʾūn', 66, 'يرون الناس صلاتهم وأعمالهم ليحمدوهم.', 'Zij laten mensen hun gebed en daden zien om geprezen te worden.'],
    ['الماعون', 'al-māʿūn', 66, 'ما يتعاوره الناس بينهم كالدلو والفأس والقدر، من المعن وهو القليل.', 'Wat mensen onderling uitlenen, zoals emmer, bijl en kookpot; van maʿn: het weinige.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['أربع صفات ذميمة في السورة', 'Vier slechte eigenschappen in de soera'],
      intro: ['كما في نشاط الكتاب ص ٦٨.', 'Zoals in de oefening op p. 68.'],
      nodes: [
        [65, 'دع اليتيم', 'De wees wegduwen', 'ظلمه ودفعه عن حقه', 'hem onrecht doen en van zijn recht wegduwen'],
        [65, 'ترك الحض على طعام المسكين', 'Niet aansporen de arme te voeden', 'بخلا وتكذيبا بالجزاء', 'uit gierigheid en loochening van de vergelding'],
        [66, 'السهو عن الصلاة', 'Het gebed verwaarlozen', 'تركها أو تأخيرها عن وقتها', 'haar laten of buiten haar tijd verrichten'],
        [66, 'الرياء ومنع الماعون', 'Vertoon en onthouden', 'لا يحسنون عبادة ربهم ولا إلى خلقه', 'zij aanbidden hun Heer niet goed en doen Zijn schepping geen goed']
      ]
    }
  ],
  sections: [
    [67, 'محاسبة النفس', 'Zichzelf onderzoeken', 'على قارئ السورة أن ينظر: هل فيه هذه الصفات؟ فإن كانت فيه فليتب، وإلا فليبشر.', 'Wie deze soera reciteert, moet zich afvragen of hij deze eigenschappen heeft. Zo ja, laat hij berouw tonen; zo nee, dan krijgt hij goed nieuws.'],
    [67, 'معنى السهو', 'De betekenis van sahw', 'السهو أصله نسيان ما كان معلوما، وهو في الآية مجاز عن الإعراض والترك عمدا استخفافا، كما في ﴿وتنسون ما تشركون﴾.', 'Sahw is eigenlijk het vergeten van iets wat men wist; in het vers is het overdrachtelijk voor afwenden en bewust laten uit minachting, zoals in "en jullie vergeten wat jullie als deelgenoot aannamen".']
  ],
  keycards: [
    ['onderscheid', 66, '«عن صلاتهم» و«في صلاتهم»', '"Hun gebed" en "in hun gebed"', ['﴿عن صلاتهم ساهون﴾: إعراض وترك، وعليه الوعيد', '«في صلاتهم»: سهو يقع في أثناء الصلاة، ولم تأت به الآية'], ['"hun gebed verwaarlozen": afwenden en laten; daarop rust de dreiging', '"in hun gebed": vergeten tijdens het gebed; dat staat niet in het vers']]
  ],
  hadith: [
    { text: 'تلك صلاة المنافق: يجلس يرقب الشمس حتى إذا كانت بين قرني الشيطان، قام فنقرها أربعا، لا يذكر الله فيها إلا قليلا', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'ذكره الكتاب في تفسير ﴿الذين هم عن صلاتهم ساهون﴾.', nlNote: 'Genoemd bij "die hun gebed verwaarlozen".', nl: 'Dat is het gebed van de hypocriet: hij zit en wacht op de zon tot zij tussen de twee horens van de duivel staat; dan staat hij op en pikt vier rakʿa\'s af, waarin hij Allah maar weinig gedenkt', pages: [66] },
    { text: 'قال الله تبارك وتعالى: أنا أغنى الشركاء عن الشرك، من عمل عملا أشرك فيه معي غيري، تركته وشركه', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'ذكره الكتاب في تفسير ﴿الذين هم يراءون﴾.', nlNote: 'Genoemd bij "die vertoon maken".', nl: 'Allah zegt: Ik heb van alle deelgenoten het minst behoefte aan deelgenootschap; wie een daad doet waarin hij naast Mij een ander betrekt, die laat Ik met zijn deelgenootschap', pages: [66] }
  ],
  persons: [
    ['ibn-abbas', 'text', [66], 'فسر السهو عن الصلاة بتركها.', 'Verklaarde het verwaarlozen van het gebed als het laten ervan.'],
    ['ata-ibn-dinar', 'text', [66], 'حمد الله على أنه قال «عن صلاتهم» لا «في صلاتهم».', 'Prees Allah dat Hij "hun gebed" zei en niet "in hun gebed".'],
    ['muslim', 'takhrij', [66], 'روى حديث صلاة المنافق والحديث القدسي في الشرك.', 'Overleverde de hadith over het gebed van de hypocriet en de goddelijke hadith over deelgenootschap.'],
    ['aisha', 'text', [67], 'قالت: كان خلقه القرآن.', 'Zei: zijn karakter was de Koran.']
  ],
  review: [
    ['من صفات المكذب بالدين دع اليتيم وترك الحض على طعام المسكين.', 'Wie de vergelding loochent, duwt de wees weg en spoort niet aan de arme te voeden.'],
    ['السهو عن الصلاة تركها أو تأخيرها عن وقتها.', 'Het gebed verwaarlozen is haar laten of buiten haar tijd verrichten.'],
    ['الماعون ما يتعاوره الناس من الأدوات.', 'Al-māʿūn zijn de hulpmiddelen die mensen elkaar lenen.']
  ],
  quiz: [
    { type: 'mc', page: 66, q: ['ما الماعون؟', 'Wat is al-māʿūn?'], options: [['ما يتعاوره الناس كالدلو والفأس والقدر', 'الزكاة المفروضة', 'الصلاة', 'المال الكثير'], ['wat mensen elkaar lenen, zoals emmer, bijl en kookpot', 'de verplichte zakāt', 'het gebed', 'veel geld']], answer: 0, explain: ['من المعن وهو القليل.', 'Van maʿn: het weinige.'] },
    { type: 'mc', page: 66, q: ['لماذا جاء «يدع» و«يحض» بصيغة المضارع؟', 'Waarom staan "yaduʿʿ" en "yaḥuḍḍ" in de onvoltooide vorm?'], options: [['للدلالة على التكرار والاستمرار', 'لأنها أفعال مستقبلة فقط', 'للتخفيف', 'لأنها أوامر'], ['om herhaling en volharding aan te geven', 'omdat ze alleen toekomst zijn', 'om te verlichten', 'omdat het bevelen zijn']], answer: 0, explain: ['تدل على تكرار ذلك منه واستمراره.', 'Ze tonen dat hij dit steeds weer doet.'] },
    { type: 'tf', page: 66, q: ['الوعيد في السورة على السهو الذي يقع في أثناء الصلاة.', 'De dreiging in de soera geldt voor vergeten tijdens het gebed.'], answer: 1, explain: ['الوعيد على السهو عن الصلاة، أي تركها أو تأخيرها.', 'Zij geldt voor het verwaarlozen van het gebed: laten of uitstellen.'] },
    { type: 'mc', page: 66, q: ['ماذا يفعل الله بمن عمل عملا أشرك فيه معه غيره؟', 'Wat doet Allah met wie een daad doet waarin hij een ander naast Hem betrekt?'], options: [['يتركه وشركه', 'يضاعف أجره', 'يقبل نصفه', 'يؤجله'], ['Hij laat hem met zijn deelgenootschap', 'Hij verdubbelt de beloning', 'Hij aanvaardt de helft', 'Hij stelt het uit']], answer: 0, explain: ['كما في الحديث القدسي عند مسلم.', 'Zoals in de goddelijke hadith bij Muslim.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٨.', 'Oefening van het boek op p. 68. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
