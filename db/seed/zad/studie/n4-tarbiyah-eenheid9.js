// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 9: الحسد (lessen 21–22, boek p. 57–60).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
// Weggelaten (zonder naam of bron): de uitspraak van "een van de salaf" en de anonieme uitspraak op p. 57.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '21',
  unit: 9,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '57–60',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['الحسد', 'Afgunst'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'للحسد آثار مذمومة لا تحصى، وقد نهى عنه النبي ﷺ. وله حالتان: أن يكره النعمة ويحب زوالها، وهو محرم، وأن يشتهي لنفسه مثلها دون زوالها، وهي الغبطة، وتكون واجبة أو مستحبة أو مباحة. من أسبابه العداوة وخبث النفس والتعزز، وعلاجه بالعلم النافع والعمل النافع.',
    'Afgunst heeft ontelbaar veel laakbare gevolgen, en de Profeet ﷺ verbood haar. Er zijn twee toestanden: de gunst van een ander verafschuwen en haar verdwijnen wensen, wat verboden is; of iets dergelijks voor jezelf wensen zonder dat de ander het verliest, ghibṭa, wat verplicht, aanbevolen of toegestaan kan zijn. Oorzaken: vijandschap, een slechte ziel en eerzucht; behandeling: nuttige kennis en nuttig handelen.'
  ],
  map: {
    title: ['الحسد في خريطة واحدة', 'Afgunst in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['الحسد', 'Afgunst'], ['الوحدة التاسعة', 'Eenheid 9']],
    nodes: [
      { label: ['ذم الحسد', 'Afkeuring'], sub: ['ص ٥٧', 'p. 57'], page: 57, children: [['ولا تحاسدوا', 'benijd elkaar niet']] },
      { label: ['أحواله', 'Toestanden'], sub: ['ص ٥٧–٥٨', 'p. 57–58'], page: 57, children: [['تمني زوال النعمة', 'het verdwijnen van de gunst wensen'], ['الغبطة', 'ghibṭa']] },
      { label: ['أسبابه', 'Oorzaken'], sub: ['ص ٥٨', 'p. 58'], page: 58, children: [['العداوة والبغضاء', 'vijandschap en haat'], ['خبث النفس وشحها', 'een slechte, gierige ziel'], ['التعزز', 'eerzucht']] },
      { label: ['علاجه', 'Behandeling'], sub: ['ص ٥٩', 'p. 59'], page: 59, children: [['العلم النافع', 'nuttige kennis'], ['العمل النافع', 'nuttig handelen']] }
    ]
  },
  points: [
    [57, 'كراهة النعمة على الغير سخط لقضاء الله في تفضيل بعض عباده على بعض.', 'De gunst van een ander verafschuwen is ontevredenheid met Allahs beschikking.'],
    [57, 'يستثنى من التحريم كراهة نعمة أصابها فاجر أو كافر يستعين بها على الفتنة وإيذاء الخلق، فلا يكرهها لأنها نعمة بل لأنها آلة فساد.', 'Uitzondering: een gunst verafschuwen die een zondaar of ongelovige gebruikt voor onrust en kwetsen, omdat zij een werktuig van verderf is, niet omdat zij een gunst is.'],
    [57, 'الحسد والشماتة متلازمان: ﴿إن تمسسكم حسنة تسؤهم وإن تصبكم سيئة يفرحوا بها﴾ [آل عمران: 120].', 'Afgunst en leedvermaak gaan samen (3:120).'],
    [58, 'العداوة والبغضاء أشد أسباب الحسد.', 'Vijandschap en haat zijn de zwaarste oorzaak van afgunst.'],
    [58, 'إذا اجتمعت أسباب الحسد في شخص عظم حسده فلم يقدر على الإخفاء وظهرت العداوة.', 'Komen de oorzaken samen in één persoon, dan wordt de afgunst zo groot dat zij niet meer te verbergen is en de vijandschap openlijk blijkt.'],
    [59, 'الحسد ضرر عليك في الدنيا والدين، ولا ضرر على المحسود، فالنعمة لا تزول عنه بحسدك.', 'Afgunst schaadt jou in wereld en religie; de benijde lijdt geen schade, want de gunst verdwijnt niet door jouw afgunst.'],
    [59, 'الحسد يأكل حسنات القلب كما تأكل النار الحطب.', 'Afgunst eet de goede daden van het hart op zoals vuur brandhout.'],
    [59, 'العمل النافع أن يكلف نفسه نقيض ما يقتضيه الحسد، من التواضع للمحسود والثناء عليه وإظهار السرور بالنعمة.', 'Nuttig handelen is jezelf het tegendeel opleggen: nederigheid tegenover de benijde, lof en blijdschap tonen om zijn gunst.']
  ],
  terms: [
    ['الحسد', 'al-ḥasad', 57, 'أن يكره النعمة على غيره ويحب زوالها عنه.', 'De gunst van een ander verafschuwen en haar verdwijnen wensen.'],
    ['الغبطة', 'al-ghibṭa', 57, 'أن يشتهي لنفسه مثل النعمة دون أن يحب زوالها، وتسمى المنافسة.', 'Iets dergelijks voor jezelf wensen zonder dat de ander het verliest; ook munāfasa genoemd.'],
    ['الشماتة', 'ash-shamāta', 57, 'الفرح بمصيبة الغير.', 'Vreugde om het ongeluk van een ander.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أقسام النعمة في الغبطة', 'Soorten gunst bij ghibṭa'],
      intro: ['كما في الإطار ص ٥٨.', 'Zoals in het kader op p. 58.'],
      columns: [['مثال', 'Voorbeeld'], ['حكم المنافسة', 'Oordeel over wedijver']],
      rows: [
        { label: ['نعمة دينية واجبة', 'Verplichte religieuze gunst'], cells: [['الإيمان والصلاة المفروضة', 'geloof en het verplichte gebed'], ['واجبة', 'verplicht']] },
        { label: ['نعمة من الفضائل', 'Gunst uit de deugden'], cells: [['إنفاق المال في الخيرات', 'geld besteden aan goede werken'], ['مستحبة', 'aanbevolen']] },
        { label: ['نعمة مباحة', 'Toegestane gunst'], cells: [['ما يتنعم به على وجه مباح', 'wat op toegestane wijze genoten wordt'], ['مباحة', 'toegestaan']] }
      ],
      page: 58
    }
  ],
  sections: [
    [58, 'أدلة الغبطة', 'Bewijzen voor ghibṭa', 'قال تعالى: ﴿وفي ذلك فليتنافس المتنافسون﴾ [المطففين: 26]، و﴿سابقوا إلى مغفرة من ربكم﴾ [الحديد: 21].', 'Allah zegt: "laten de wedijveraars daarin wedijveren" (83:26) en "wedijver naar vergeving van jullie Heer" (57:21).'],
    [59, 'ضرر الحسد في الدين والدنيا', 'Schade van afgunst in religie en wereld', 'في الدين: سخط قضاء الله وكراهة نعمته، ومشاركة إبليس والكفار في محبة البلايا للمؤمنين. وفي الدنيا: التألم والتعذب والحزن والغم وضيق الصدر.', 'In de religie: ontevredenheid met Allahs beschikking en afkeer van Zijn gunst, en delen met Iblīs en de ongelovigen in liefde voor rampen voor gelovigen. In de wereld: pijn, kwelling, verdriet, zorg en beklemming.']
  ],
  keycards: [
    ['onderscheid', 57, 'حالتا الحسد', 'De twee toestanden van afgunst', ['أن يكره النعمة ويحب زوالها: محرم', 'أن يشتهي مثلها دون زوالها: غبطة غير محرمة'], ['de gunst verafschuwen en haar verdwijnen wensen: verboden', 'iets dergelijks wensen zonder verlies voor de ander: ghibṭa, niet verboden']],
    ['opsomming', 58, 'أسباب الحسد', 'Oorzaken van afgunst', ['العداوة والبغضاء', 'خبث النفس وشحها بالخير', 'التعزز'], ['vijandschap en haat', 'een slechte ziel die het goede misgunt', 'eerzucht']]
  ],
  hadith: [
    { text: 'لا تباغضوا، ولا تحاسدوا، ولا تدابروا، وكونوا عباد الله إخوانا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Haat elkaar niet, benijd elkaar niet, keer elkaar de rug niet toe, en wees, dienaren van Allah, broeders', pages: [57] },
    { text: 'لا حسد إلا في اثنتين: رجل آتاه الله مالا فسلطه على هلكته في الحق، ورجل آتاه الله علما فهو يعمل به ويعلمه الناس', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Afgunst is alleen geoorloofd in twee gevallen: een man aan wie Allah geld gaf en die het volledig voor de waarheid besteedt, en een man aan wie Allah kennis gaf, die ernaar handelt en het de mensen leert', pages: [58] }
  ],
  persons: [],
  review: [
    ['الحسد محرم، والغبطة ليست محرمة.', 'Afgunst is verboden, ghibṭa niet.'],
    ['الغبطة واجبة أو مستحبة أو مباحة بحسب النعمة.', 'Ghibṭa is verplicht, aanbevolen of toegestaan naar de gunst.'],
    ['أشد أسباب الحسد العداوة والبغضاء.', 'De zwaarste oorzaak van afgunst is vijandschap.'],
    ['علاجه بالعلم النافع والعمل النافع.', 'Behandeling: nuttige kennis en nuttig handelen.']
  ],
  quiz: [
    { type: 'mc', page: 57, q: ['ما الغبطة؟', 'Wat is ghibṭa?'], options: [['أن يشتهي مثل النعمة دون زوالها عن غيره', 'أن يحب زوال النعمة', 'الفرح بمصيبة الغير', 'كراهة قضاء الله'], ['iets dergelijks wensen zonder dat de ander het verliest', 'het verdwijnen van een gunst wensen', 'vreugde om andermans ongeluk', 'afkeer van Allahs beschikking']], answer: 0, explain: ['وتسمى المنافسة.', 'Ook munāfasa genoemd.'] },
    { type: 'tf', page: 59, q: ['يتضرر المحسود في دينه ودنياه بالحسد.', 'De benijde lijdt schade in religie en wereld door afgunst.'], answer: 1, explain: ['لا تزول النعمة عنه بحسدك.', 'De gunst verdwijnt niet door jouw afgunst.'] },
    { type: 'mc', page: 58, q: ['ما حكم المنافسة في الإيمان والصلاة المفروضة؟', 'Wat is het oordeel over wedijveren in geloof en het verplichte gebed?'], options: [['واجبة', 'مستحبة', 'مباحة', 'محرمة'], ['verplicht', 'aanbevolen', 'toegestaan', 'verboden']], answer: 0, explain: ['لأنها نعمة دينية واجبة.', 'Want het is een verplichte religieuze gunst.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٠.', 'Oefening van het boek op p. 60. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
