// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 9: حزنه ﷺ (lessen 19, boek p. 65–66).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '19',
  unit: 9,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '65–66',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['حزنه ﷺ', 'Zijn verdriet ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'الحزن مما جبل عليه الإنسان كالفرح والألم والغضب والرضا. كان النبي ﷺ يحزن كما يحزن البشر؛ فحزن لفتور الوحي، وحزن لمقتل زيد بن حارثة وجعفر وابن رواحة في مؤتة، وظهور الحزن لا يخرج الإنسان عن الصبر والرضا.',
    'Verdriet hoort bij de menselijke natuur, net als vreugde, pijn, woede en tevredenheid. De Profeet ﷺ was verdrietig zoals ieder mens: toen de openbaring stokte, en bij de dood van Zayd ibn Ḥāritha, Jaʿfar en Ibn Rawāḥa bij Muʾta. Zichtbaar verdriet doet niets af aan geduld en tevredenheid.'
  ],
  map: {
    title: ['حزنه ﷺ في خريطة واحدة', 'Zijn verdriet in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['حزنه ﷺ', 'Zijn verdriet ﷺ'], ['الوحدة التاسعة', 'Eenheid 9']],
    nodes: [
      { label: ['الحزن من الجبلة', 'Verdriet is aangeboren'], sub: ['ص ٦٥', 'p. 65'], page: 65, children: [['﴿قد نعلم إنه ليحزنك﴾', '"Wij weten dat wat zij zeggen jou bedroeft"']] },
      { label: ['لفتور الوحي', 'Toen de openbaring stokte'], sub: ['ص ٦٥', 'p. 65'], page: 65, children: [['غار حراء', 'de grot Ḥirāʾ'], ['تدرج في احتمال النبوة', 'geleidelijke gewenning aan de profetie']] },
      { label: ['لمقتل أصحابه في مؤتة', 'Om zijn gesneuvelde metgezellen bij Muʾta'], sub: ['ص ٦٦', 'p. 66'], page: 66, children: [['زيد وجعفر وابن رواحة', 'Zayd, Jaʿfar en Ibn Rawāḥa']] }
    ]
  },
  points: [
    [65, 'الإنسان السوي يصيبه الحزن إذا وجدت أسبابه، فهو من الأعراض الطبيعية للبشر في الدنيا.', 'Een gezond mens wordt verdrietig als er reden toe is; het hoort bij de natuurlijke verschijnselen van mensen in deze wereld.'],
    [65, 'كان ﷺ يحزن كما يحزن البشر، قال تعالى: ﴿قد نعلم إنه ليحزنك الذي يقولون﴾ [الأنعام: 33].', 'Hij ﷺ was verdrietig zoals mensen; Allah zegt: "Wij weten dat wat zij zeggen jou bedroeft" (6:33).'],
    [65, 'أول ما بدئ به الوحي الرؤيا الصادقة، ثم حبب إليه الخلاء في غار حراء، حتى جاءه الملك فقال: اقرأ.', 'De openbaring begon met ware dromen; daarna werd de afzondering in de grot Ḥirāʾ hem geliefd, tot de engel kwam en zei: lees.'],
    [65, 'قال ابن حجر: كان فتور الوحي من مقدمات تأسيس النبوة ليتدرج فيه، فحزن حتى تدرج على احتمال أعبائها.', 'Ibn Ḥajar: het stokken van de openbaring hoorde bij de voorbereiding op de profetie, zodat hij er geleidelijk aan wende; hij was bedroefd tot hij haar last kon dragen.'],
    [66, 'لما جاءه قتل زيد وجعفر وابن رواحة جلس يعرف فيه الحزن.', 'Toen het nieuws kwam van de dood van Zayd, Jaʿfar en Ibn Rawāḥa, zat hij neer en was het verdriet aan hem te zien.'],
    [66, 'قال الطيبي: كأنه كظم الحزن كظما، فظهر منه ما لا بد للجبلة البشرية منه.', 'Aṭ-Ṭībī: hij hield zijn verdriet als het ware in, en alleen wat de menselijke natuur niet kan tegenhouden werd zichtbaar.'],
    [66, 'ظهور الحزن على المصاب لا يخرجه عن كونه صابرا راضيا إذا كان قلبه مطمئنا.', 'Zichtbaar verdriet bij een ramp doet niets af aan geduld en tevredenheid, zolang het hart rustig is.']
  ],
  terms: [
    ['فتور الوحي', 'futūr al-waḥy', 65, 'انقطاعه مدة بعد أول نزوله.', 'Het een tijd stokken van de openbaring na de eerste neerzending.'],
    ['صائر الباب', 'ṣāʾir al-bāb', 66, 'شق الباب.', 'De kier van de deur.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['بدء الوحي كما في حديث عائشة', 'Het begin van de openbaring volgens ʿĀʾisha'],
      intro: ['كما في الصفحة ٦٥.', 'Zoals op p. 65.'],
      nodes: [
        [65, 'الرؤيا الصادقة', 'De ware droom', 'فكان لا يرى رؤيا إلا جاءت مثل فلق الصبح', 'elke droom kwam uit als het aanbreken van de ochtend'],
        [65, 'حب الخلاء', 'Liefde voor afzondering', 'يتعبد في غار حراء', 'hij aanbad in de grot Ḥirāʾ'],
        [65, 'مجيء الملك', 'De komst van de engel', 'فقال: اقرأ', 'die zei: lees'],
        [65, 'فتور الوحي', 'Het stokken van de openbaring', 'حتى حزن رسول الله ﷺ', 'tot de Boodschapper ﷺ bedroefd werd']
      ]
    }
  ],
  sections: [],
  keycards: [
    ['onderscheid', 66, 'الحزن والصبر', 'Verdriet en geduld', ['ظهور الحزن من الجبلة البشرية', 'لا ينافي الصبر والرضا إذا اطمأن القلب'], ['zichtbaar verdriet hoort bij de menselijke natuur', 'het strijdt niet met geduld en tevredenheid als het hart rustig is']]
  ],
  hadith: [
    { text: 'لما جاء النبي ﷺ قتل ابن حارثة وجعفر وابن رواحة جلس يعرف فيه الحزن، وأنا أنظر من صائر الباب', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Toen het nieuws van de dood van Ibn Ḥāritha, Jaʿfar en Ibn Rawāḥa de Profeet ﷺ bereikte, zat hij neer en was het verdriet aan hem te zien; ik keek door de kier van de deur', pages: [66] }
  ],
  persons: [
    ['aisha', 'text', [65, 66], 'روت بدء الوحي وحزنه على شهداء مؤتة.', 'Overleverde het begin van de openbaring en zijn verdriet om de gesneuvelden van Muʾta.'],
    ['ibn-hajar-al-asqalani', 'text', [65], 'بين حكمة فتور الوحي.', 'Legde de wijsheid uit van het stokken van de openbaring.'],
    ['zayd-ibn-haritha', 'text', [66], 'قتل في مؤتة فحزن عليه النبي ﷺ.', 'Sneuvelde bij Muʾta; de Profeet ﷺ was om hem bedroefd.'],
    ['abdallah-ibn-rawaha', 'text', [66], 'قتل في مؤتة.', 'Sneuvelde bij Muʾta.'],
    ['at-tibi', 'text', [66], 'شرح قولها: يعرف فيه الحزن.', 'Verklaarde haar woorden "het verdriet was aan hem te zien".']
  ],
  review: [
    ['الحزن من الجبلة البشرية، وكان ﷺ يحزن كما يحزن البشر.', 'Verdriet is menselijk; hij ﷺ was verdrietig zoals mensen.'],
    ['حزن لفتور الوحي حتى تدرج على احتمال النبوة.', 'Hij was bedroefd toen de openbaring stokte, tot hij aan de profetie gewend was.'],
    ['حزن لمقتل أصحابه في مؤتة.', 'Hij was bedroefd om zijn gesneuvelde metgezellen bij Muʾta.'],
    ['ظهور الحزن لا ينافي الصبر والرضا.', 'Zichtbaar verdriet strijdt niet met geduld en tevredenheid.']
  ],
  quiz: [
    { type: 'mc', page: 65, q: ['بم بدئ رسول الله ﷺ من الوحي؟', 'Waarmee begon de openbaring aan de Boodschapper ﷺ?'], options: [['الرؤيا الصادقة في النوم', 'نزول سورة الفاتحة', 'الإسراء', 'رؤية الملك في المسجد'], ['de ware droom in de slaap', 'de neerzending van al-Fātiḥa', 'de nachtreis', 'het zien van de engel in de moskee']], answer: 0, explain: ['كما في حديث عائشة.', 'Zoals in de hadith van ʿĀʾisha.'] },
    { type: 'tf', page: 66, q: ['ظهور الحزن على المصاب يخرجه عن الصبر.', 'Zichtbaar verdriet bij een ramp betekent dat men niet geduldig is.'], answer: 1, explain: ['لا يخرجه عن كونه صابرا راضيا إذا اطمأن قلبه.', 'Het doet niets af aan geduld en tevredenheid als het hart rustig is.'] },
    { type: 'mc', page: 66, q: ['في أي معركة قتل زيد وجعفر وابن رواحة؟', 'In welke slag sneuvelden Zayd, Jaʿfar en Ibn Rawāḥa?'], options: [['مؤتة', 'بدر', 'أحد', 'حنين'], ['Muʾta', 'Badr', 'Uḥud', 'Ḥunayn']], answer: 0, explain: ['كما في الصفحة ٦٦.', 'Zoals op p. 66.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٨.', 'Oefening van het boek op p. 68. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
