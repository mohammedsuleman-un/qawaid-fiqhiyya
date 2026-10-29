// Hoofdstukkaart bij التفسير (٤), eenheid 21: سورة الناس (les 24, boek p. 93–96).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. Het boek noemt de soera Medinensisch.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '24',
  unit: 21,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '93–96',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الناس', 'Soera an-Nās'],
  subtitle: ['سورة مدنية في الكتاب، ست آيات', 'Volgens het boek Medinensisch, zes verzen'],
  summary: [
    'يستعيذ المسلم برب الناس ملك الناس إله الناس، فيجمع الربوبية والملك والألوهية، من شر الوسواس الخناس الذي يوسوس في صدور الناس، من الجن والناس.',
    'De moslim zoekt toevlucht bij de Heer van de mensen, de Koning van de mensen en de God van de mensen, en verenigt zo heerschappij, koningschap en godheid, tegen het kwaad van de influisteraar die terugdeinst, die influistert in de borsten van de mensen, van de djinn en de mensen.'
  ],
  map: {
    title: ['سورة الناس في خريطة واحدة', 'Soera an-Nās in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الناس', 'Soera an-Nās'], ['الوحدة الحادية والعشرون', 'Eenheid 21']],
    nodes: [
      { label: ['المستعاذ به', 'Bij Wie men toevlucht zoekt'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 93, children: [['رب الناس: الربوبية', 'Heer: heerschappij'], ['ملك الناس: الملك', 'Koning: koningschap'], ['إله الناس: الألوهية', 'God: godheid']] },
      { label: ['المستعاذ منه', 'Waartegen men toevlucht zoekt'], sub: ['الآيات ٤–٥', 'vers 4–5'], page: 94, children: [['الوسواس', 'de influisteraar'], ['الخناس', 'die terugdeinst bij het gedenken'], ['يوسوس في صدور الناس', 'fluistert in de borsten van de mensen']] },
      { label: ['مصدر الوسوسة', 'Bron van de influistering'], sub: ['الآية ٦', 'vers 6'], page: 94, children: [['من الجنة', 'van de djinn'], ['والناس', 'en van de mensen']] }
    ]
  },
  points: [
    [93, 'الله رب الناس ورب كل شيء، وخص الناس بالذكر لمناسبة السياق.', 'Allah is de Heer van de mensen en van alles; de mensen worden apart genoemd vanwege de samenhang.'],
    [94, 'الاستعاذة بالرب الملك الإله تستلزم استحضار صفاته التي يدفع بها الشر عامة وشر الوسواس خاصة.', 'Toevlucht zoeken bij de Heer, de Koning en de God vraagt dat men Zijn eigenschappen voor ogen heeft waarmee Hij het kwaad afweert, in het algemeen en dat van de influisteraar in het bijzonder.'],
    [94, 'الوسواس اسم للشيطان لكثرة ملازمته الإنسان، وهو أيضا ما تحدث به النفس من الشهوات.', 'Al-waswās is een naam van de duivel, omdat hij de mens zo veel vergezelt; het is ook wat de begeerten van de ziel ingeven.'],
    [94, 'يزين الشيطان الشر في صورة حسنة، ويقبح الخير ويثبط عنه.', 'De duivel toont het kwaad in een mooie vorm, maakt het goede lelijk en ontmoedigt ervan.'],
    [95, 'كان النبي ﷺ ينفث في كفيه بالإخلاص والمعوذتين عند النوم، ويقرؤها أحيانا دبر الصلوات، فعلى المسلم أن يحرص على السنة في ذلك.', 'De Profeet ﷺ blies voor het slapen in zijn handpalmen met al-Ikhlāṣ, al-Falaq en an-Nās en reciteerde ze soms na de gebeden; de moslim moet die sunna volgen.']
  ],
  terms: [
    ['ملك الناس', 'malik an-nās', 94, 'المالك المتصرف فيهم.', 'De Eigenaar die over hen beschikt.'],
    ['إله الناس', 'ilāh an-nās', 94, 'معبودهم الذي يستحق العبادة محبة وتعظيما.', 'Hun Aanbedene, aan wie aanbidding toekomt uit liefde en verheerlijking.'],
    ['الوسوسة', 'al-waswasa', 94, 'الصوت الخفي.', 'De verborgen stem.'],
    ['الخناس', 'al-khannās', 94, 'الذي يخنس ويتأخر عند ذكر الله.', 'Die terugdeinst en zich terugtrekt bij het gedenken van Allah.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['وسوسة الجن ووسوسة الإنس', 'Influistering van djinn en van mensen'],
      intro: ['كما في الصفحة ٩٥.', 'Zoals op p. 95.'],
      columns: [['كيف تكون', 'Hoe het gaat']],
      rows: [
        { label: ['الجن', 'De djinn'], cells: [['ظاهرة: يجري من الإنسان مجرى الدم', 'duidelijk: hij stroomt in de mens waar het bloed stroomt']] },
        { label: ['الإنس', 'De mensen'], cells: [['يأتي الإنسان فيوسوس له بالشر ويحسنه حتى يأخذ بعقله', 'iemand komt naar de mens, fluistert hem kwaad in en maakt het mooi tot het zijn verstand inneemt']] }
      ],
      page: 95
    }
  ],
  sections: [
    [94, 'لكل إنسان قرين', 'Iedere mens heeft een metgezel', 'ما من أحد من بني آدم إلا وله قرين يزين له الفواحش ولا يألو جهدا في إفساده، كما في حديث مسلم.', 'Er is niemand van de kinderen van Ādam die geen metgezel heeft die hem gruweldaden mooi voorstelt en geen moeite spaart om hem te bederven, zoals in de hadith bij Muslim.']
  ],
  keycards: [
    ['opsomming', 94, 'أنواع التوحيد في السورة', 'De soorten tawḥīd in de soera', ['الربوبية: ﴿رب الناس﴾', 'الملك: ﴿ملك الناس﴾', 'الألوهية: ﴿إله الناس﴾'], ['heerschappij: "Heer van de mensen"', 'koningschap: "Koning van de mensen"', 'godheid: "God van de mensen"']]
  ],
  hadith: [
    { text: 'ما منكم من أحد إلا وقد وكل به قرينه من الجن، قالوا: وإياك يا رسول الله؟ قال: وإياي، إلا أن الله أعانني عليه فأسلم، فلا يأمرني إلا بخير', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Er is niemand van jullie aan wie niet een metgezel uit de djinn is toegewezen. Zij zeiden: ook jij, Boodschapper van Allah? Hij zei: ook ik, maar Allah heeft mij tegen hem geholpen, zodat hij zich onderwierp en mij alleen het goede beveelt', pages: [94] }
  ],
  persons: [
    ['muslim', 'takhrij', [94], 'روى حديث القرين.', 'Overleverde de hadith over de metgezel.']
  ],
  review: [
    ['في السورة الربوبية والملك والألوهية.', 'De soera bevat heerschappij, koningschap en godheid.'],
    ['الخناس يخنس عند ذكر الله.', 'De influisteraar deinst terug bij het gedenken van Allah.'],
    ['الوسوسة تكون من الجن ومن الإنس.', 'Influistering komt van djinn en van mensen.']
  ],
  quiz: [
    { type: 'mc', page: 94, q: ['ما معنى ﴿الخناس﴾؟', 'Wat betekent al-khannās?'], options: [['الذي يتأخر ويخنس عند ذكر الله', 'الذي يكثر الكلام', 'الذي يسرق', 'الذي يختبئ في الليل'], ['die terugdeinst bij het gedenken van Allah', 'die veel praat', 'die steelt', 'die zich \'s nachts verbergt']], answer: 0, explain: ['يخنس وينهزم عند ذكر الله.', 'Hij deinst terug en wordt verslagen bij het gedenken van Allah.'] },
    { type: 'mc', page: 94, q: ['ما الصفات الثلاث لله في أول السورة؟', 'Welke drie eigenschappen van Allah staan aan het begin van de soera?'], options: [['الربوبية والملك والألوهية', 'العلم والقدرة والحياة', 'الرحمة والمغفرة والعفو', 'السمع والبصر والكلام'], ['heerschappij, koningschap en godheid', 'kennis, macht en leven', 'genade, vergeving en kwijtschelding', 'horen, zien en spreken']], answer: 0, explain: ['رب الناس، ملك الناس، إله الناس.', 'Heer, Koning en God van de mensen.'] },
    { type: 'tf', page: 94, q: ['الوسوسة لا تكون إلا من الجن.', 'Influistering komt alleen van de djinn.'], answer: 1, explain: ['﴿من الجنة والناس﴾: تكون من الجن ومن الإنس.', '"Van de djinn en de mensen": van beide.'] },
    { type: 'mc', page: 94, q: ['ماذا قال النبي ﷺ عن قرينه؟', 'Wat zei de Profeet ﷺ over zijn eigen metgezel?'], options: [['أعانني الله عليه فأسلم فلا يأمرني إلا بخير', 'ليس لي قرين', 'قريني من الملائكة فقط', 'غلبني مرة ثم تبت'], ['Allah hielp mij tegen hem, hij onderwierp zich en beveelt mij alleen het goede', 'ik heb geen metgezel', 'mijn metgezel is alleen een engel', 'hij overwon mij één keer']], answer: 0, explain: ['كما في حديث مسلم.', 'Zoals in de hadith bij Muslim.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٩٦.', 'Oefening van het boek op p. 96. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
