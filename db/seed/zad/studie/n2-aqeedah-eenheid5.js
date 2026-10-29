// Hoofdstukkaart bij العقيدة (٢), eenheid 5: ثمرات الإيمان بأسماء الله تعالى وصفاته
// (lessen 19–24, boek p. 75–87). Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het
// importbestand van het boek; hadith en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٢)، سلسلة زاد العلمية',
  pages: '75–87',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'ما منكم أحد إلا سيكلمه ربه ليس بينه وبينه ترجمان، فينظر أيمن منه فلا يرى إلا ما قدم من عمله، وينظر أشأم منه فلا يرى إلا ما قدم، وينظر بين يديه فلا يرى إلا النار تلقاء وجهه، فاتقوا النار ولو بشق تمرة', takhrij: 'أخرجه البخاري ومسلم', note: 'في الأثر الإيماني لصفتي المجيء والإتيان: الخوف من مشهد الفصل بين العباد.', pages: [82], nl: 'ieder van jullie zal door zijn Heer worden toegesproken, zonder tolk ertussen; hij kijkt rechts en ziet alleen wat hij vooruitstuurde, kijkt links en ziet alleen wat hij vooruitstuurde, kijkt voor zich en ziet alleen het Vuur; bescherm je dus tegen het Vuur, al is het met een halve dadel', nlNote: 'Bij het effect van de eigenschappen komen (majīʾ en ityān): vrees voor het moment waarop Allah tussen de dienaren oordeelt.' },
  { narrator: 'أبو هريرة', text: 'لله أشد فرحا بتوبة أحدكم من أحدكم بضالته إذا وجدها', takhrij: 'أخرجه البخاري ومسلم', note: 'في صفة الفرح.', pages: [86], nl: 'Allah is blijer met het berouw van een van jullie dan iemand die zijn verloren rijdier terugvindt', nlNote: 'Bij de eigenschap vreugde.' },
  { narrator: 'أبو هريرة', text: 'يضحك الله إلى رجلين يقتل أحدهما الآخر يدخلان الجنة، يقاتل هذا في سبيل الله فيقتل، ثم يتوب الله على القاتل فيستشهد', takhrij: 'أخرجه البخاري ومسلم', note: 'في صفة الضحك.', pages: [86], nl: 'Allah lacht om twee mannen van wie de een de ander doodt en die allebei het Paradijs binnengaan: de een strijdt op Allahs weg en wordt gedood; daarna aanvaardt Allah het berouw van de doder, en ook hij sterft als martelaar', nlNote: 'Bij de eigenschap lachen.' },
  { narrator: 'عبد الله بن مسعود', text: 'إن الله جميل يحب الجمال، الكبر بطر الحق وغمط الناس', takhrij: 'أخرجه مسلم', note: 'في اسم الجميل.', pages: [87], nl: 'Allah is mooi en houdt van schoonheid; hoogmoed is de waarheid afwijzen en mensen minachten', nlNote: 'Bij de naam al-Jamīl.' }
]

const TAKHRIJ_NL = { 'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim', 'أخرجه مسلم': 'Muslim' }
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd' }

const PERSONS = [
  ['abu-hurayra', 'text', [86], 'روى حديثي الفرح بالتوبة والضحك.', 'Overleverde de hadith over Allahs vreugde om berouw en over Zijn lachen.'],
  ['ibn-masud', 'text', [87], 'روى حديث «إن الله جميل يحب الجمال».', 'Overleverde "Allah is mooi en houdt van schoonheid".'],
  ['al-bukhari', 'takhrij', [82, 86], 'أخرج ثلاثة من أحاديث هذه الوحدة.', 'Nam drie hadith uit deze eenheid op.'],
  ['muslim', 'takhrij', [82, 86, 87], 'أخرج أحاديث هذه الوحدة.', 'Nam de hadith uit deze eenheid op.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'ثمرات الإيمان بأسماء الله تعالى وصفاته',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'ثمرات الإيمان بالأسماء والصفات، وجوانب تطبيقية لآثارها الإيمانية والسلوكية في أسماء وصفات بعينها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'موضوعا الوحدة كما في صفحة ٧٦ من الكتاب.',
    root: { label: 'ثمرات الإيمان بالأسماء والصفات', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'الثمرات', sub: 'الدرس ١٩', page: 77, children: ['المحبة والتعظيم', 'زيادة الإيمان والخشية', 'التوكل وتزكية النفس'] },
      { label: 'العلم والقدرة والرزق والسمع والمحبة', sub: 'الدرس ٢٠', page: 79, children: ['المراقبة', 'تعليق القلب بالله', 'الإحسان والتوبة'] },
      { label: 'الرحمة والمجيء والعزة', sub: 'الدرس ٢١', page: 81, children: ['أسباب الرحمة', 'الخوف من يوم الفصل', 'العزة في الدين'] },
      { label: 'العلو والعظيم والشاكر والرضا', sub: 'الدرس ٢٢', page: 83, children: ['الخوف والتعظيم', 'الشكر', 'المسارعة إلى ما يرضيه'] },
      { label: 'العفو والفرح والضحك والجميل', sub: 'الدرسان ٢٣–٢٤', page: 85, children: ['رجاء العفو', 'التوبة النصوح', 'تجميل الأقوال والأفعال'] }
    ]
  },
  points: [
    { text: 'العلم بالأسماء والصفات وتدبرها وفهمها على مراد الله من أهم العلوم وأشرفها.', page: 77 },
    { text: 'من ثمراته: محبة الله وتعظيمه، وزيادة الإيمان، والخوف منه، وصدق التوكل عليه.', page: 77 },
    { text: 'وهو الطريق إلى معرفة الله، ومن أجل ثمراته تزكية النفوس على منهج العبودية.', page: 78 },
    { text: 'لكل اسم وصفة أثر إيماني وسلوكي في حياة العبد.', page: 79 },
    { text: 'أمثلة: العلم يورث المراقبة، والرزاق يعلق القلب بالله، والعزيز يمنع محاربة الله، والشاكر يبعث على الشكر.', page: 79 }
  ],
  terms: [
    { term: 'ثمرات الإيمان بالأسماء والصفات', translit: 'thamarāt al-īmān', meaning: 'آثاره في القلب والسلوك: المحبة والتعظيم وزيادة الإيمان والخشية والتوكل وتزكية النفس.', explanation: '', notes: [], page: 77 },
    { term: 'تزكية النفوس', translit: 'tazkiyat an-nufūs', meaning: 'إقامتها على منهج العبودية للواحد الأحد.', explanation: 'من أجل ثمرات الإيمان بالأسماء والصفات.', notes: [], page: 78 },
    { term: 'الأثر الإيماني والسلوكي', translit: 'al-athar al-īmānī wa-s-sulūkī', meaning: 'ما يورثه الاسم أو الصفة في القلب من إيمان، وفي العمل من سلوك.', explanation: '', notes: [], page: 79 },
    { term: 'المتين', translit: 'al-matīn', meaning: 'من أسماء الله، ويدل على صفة القوة.', explanation: '', notes: ['[الذاريات: ٥٨]'], page: 80 },
    { term: 'العزة', translit: 'al-ʿizza', meaning: 'صفة لله؛ ومن أثرها ألا يحارب العبد الله بفعل كالربا، وأن يكون عزيزا في دينه.', explanation: '', notes: ['[المنافقون: ٨]'], page: 83 },
    { term: 'الشاكر', translit: 'ash-shākir', meaning: 'من أسماء الله؛ ومن أثره شكر الله بالقلب واللسان والجوارح، وشكر من أحسن إليك.', explanation: '', notes: ['[البقرة: ١٥٨]'], page: 84 },
    { term: 'العفو', translit: 'al-ʿafuww', meaning: 'من أسماء الله؛ ومن أثره رجاء عفوه، ودعاؤه أن يعفو.', explanation: '', notes: ['[النساء: ٤٣]'], page: 85 },
    { term: 'الجميل', translit: 'al-jamīl', meaning: 'من أسماء الله؛ ومن أثره محبته، وتجميل العبد أقواله وأفعاله وأخلاقه.', explanation: '', notes: [], page: 87 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'ثمرات الإيمان بالأسماء والصفات',
      intro: 'ثمان ثمرات ذكرها الكتاب.',
      nodes: [
        { label: 'محبة الله وتعظيمه', sub: '[النحل: ٩٧]', page: 77 },
        { label: 'زيادة الإيمان', sub: '[محمد: ١٧]', page: 77 },
        { label: 'الخوف منه وخشيته وتحقيق طاعته', page: 77 },
        { label: 'قوة اليقين وصدق التوكل', page: 77 },
        { label: 'الطريق إلى معرفة الله', page: 78 },
        { label: 'تزكية النفوس', page: 78 },
        { label: 'الانزجار عن المعاصي', page: 79 },
        { label: 'انفتاح باب التوحيد الخالص', page: 79 }
      ]
    },
    {
      type: 'compare',
      title: 'ما تورثه أسماء الله في القلب',
      intro: 'أمثلة من الكتاب لتزكية النفوس.',
      columns: ['الأسماء', 'ما تورثه'],
      rows: [
        { label: 'العظمة', cells: ['أسماء العظمة', 'التعظيم والإجلال'] },
        { label: 'الجمال', cells: ['أسماء الجمال والبر والإحسان والرحمة والجود', 'المحبة والشوق والحمد والشكر'] },
        { label: 'العزة', cells: ['أسماء العزة والحكمة والعلم والقدرة', 'الخضوع والخشوع والانكسار'] },
        { label: 'الإحاطة', cells: ['أسماء العلم والخبرة والإحاطة والمراقبة', 'المراقبة والخوف والخشية'] },
        { label: 'الغنى', cells: ['أسماء الغنى واللطف', 'الافتقار والاضطرار إليه'] }
      ],
      page: 78
    },
    {
      type: 'compare',
      title: 'جوانب تطبيقية للآثار الإيمانية',
      intro: 'كل اسم أو صفة ودليله وأثره في الكتاب.',
      columns: ['الدليل', 'الأثر'],
      rows: [
        { label: 'العلم والقدرة', cells: ['[الطلاق: ١٢]', 'قوة مراقبة الله والخوف منه'] },
        { label: 'الرزق والقوة', cells: ['[الذاريات: ٥٨]', 'تعليق القلب بالله في الرزق، وطلب القوة منه'] },
        { label: 'السمع والبصر', cells: ['[النساء: ٥٨، ١٣٤]', 'الحذر من مخالفته في الأقوال والأفعال'] },
        { label: 'المحبة', cells: ['[البقرة: ١٩٥، ٢٢٢]', 'الإحسان والعدل والتقوى والتوبة'] },
        { label: 'الرحمة', cells: ['[الأحقاف: ٨]', 'التعلق برحمته وفعل أسبابها'] },
        { label: 'المجيء والإتيان', cells: ['[الفجر: ٢٢]', 'الخوف من يوم الفصل'] },
        { label: 'العزة', cells: ['[المنافقون: ٨]', 'ترك محاربة الله، والعزة في الدين'] },
        { label: 'العلو', cells: ['[الملك: ١٦–١٧]', 'الخوف والتعظيم والتقوى'] },
        { label: 'العظيم', cells: ['[الواقعة: ٧٤]', 'تعظيم الرب وشعائره'] },
        { label: 'الشاكر', cells: ['[البقرة: ١٥٨]', 'الشكر لله ولمن أحسن'] },
        { label: 'الرضا', cells: ['[المائدة: ١١٩]', 'المسارعة إلى ما يرضيه'] },
        { label: 'العفو', cells: ['[النساء: ٤٣]', 'رجاء عفوه ودعاؤه'] },
        { label: 'الفرح', cells: ['حديث أبي هريرة', 'التوبة النصوح'] },
        { label: 'الضحك', cells: ['حديث أبي هريرة', 'رجاء عظيم الخير'] },
        { label: 'الجميل', cells: ['حديث ابن مسعود', 'محبته وتجميل الأقوال والأفعال'] }
      ],
      page: 79
    }
  ],
  sections: [
    { title: 'ثمرات الإيمان بالأسماء والصفات', text: 'العلم بالأسماء والصفات من أشرف العلوم، ومن ثمراته محبة الله وتعظيمه الموجبان للقيام بأمره واجتناب نهيه، وزيادة الإيمان، والخوف من الله، وصدق التوكل.', more: 'كلما كان العبد بربه أعرف كان إليه أقرب، ومنه أخشى، ولعبادته أطلب، وعن معصيته أبعد.', page: 77 },
    { title: 'الطريق إلى معرفة الله وتزكية النفس', text: 'خلق الله الخلق ليعرفوه ويعبدوه، والعلم بالأسماء والصفات هو الطريق إلى معرفته؛ ومن أجل ثمراته تزكية النفوس.', more: 'ويزجر عن المعاصي؛ لأن العبد يتذكر أن الله يبصره، ومن انفتح له هذا الباب انفتح له باب التوحيد الخالص.', page: 78 },
    { title: 'من الأسماء والصفات إلى السلوك', text: 'لكل اسم وصفة أثر: العلم يورث المراقبة، والرزق يعلق القلب بالله، والسمع والبصر يحذران من المخالفة، والمحبة تبعث على الإحسان والعدل والتوبة.', more: '', page: 79 },
    { title: 'الرحمة والمجيء والعزة', text: 'الرحمة تحمل على فعل أسبابها كالإحسان والتقوى والإيمان، والمجيء يورث الخوف من يوم الفصل، والعزة تمنع العبد أن يحارب الله بالربا وقطع الطريق.', more: 'وقال ﷺ: «ما منكم أحد إلا سيكلمه ربه ليس بينه وبينه ترجمان... فاتقوا النار ولو بشق تمرة».', page: 81 },
    { title: 'العلو والعظيم والشاكر والرضا', text: 'من علم أن الله فوق كل شيء عرف مقدار سلطانه فخافه وعظمه، ومن عرف أنه شاكر شكره وشكر من أحسن إليه، ومن عرف رضاه سارع إلى ما يرضيه.', more: 'ومما يرضي الله: خشيته في السر والعلن، وبر الوالدين، والصدق، والحمد بعد الأكل والشرب، واستعمال السواك (ص ٨٥).', page: 83 },
    { title: 'العفو والفرح والضحك والجميل', text: 'العفو يبعث على رجاء عفوه ودعائه، والفرح يبعث على التوبة النصوح، والضحك على رجاء عظيم الخير، والجميل على محبته وتجميل الأقوال والأفعال والأخلاق.', more: '', page: 85 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'ثمرات الإيمان بالأسماء والصفات', items: ['محبة الله وتعظيمه', 'زيادة الإيمان', 'الخوف والخشية', 'صدق التوكل', 'معرفة الله', 'تزكية النفوس', 'الانزجار عن المعاصي', 'التوحيد الخالص'], page: 77, origin: 'boek' },
    { kind: 'bewijs', title: 'قاعدة في المعرفة', items: ['كلما كان العبد بربه أعرف كان إليه أقرب ومنه أخشى ولعبادته أطلب وعن معصيته أبعد.'], page: 77, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'العلم بالأسماء والصفات من أشرف العلوم.',
    'ثمراته: المحبة، زيادة الإيمان، الخشية، التوكل، المعرفة، التزكية، ترك المعاصي، التوحيد الخالص.',
    'العلم والقدرة: المراقبة. الرزق والقوة: تعليق القلب بالله.',
    'المحبة: الإحسان والعدل والتقوى والتوبة. الرحمة: فعل أسبابها.',
    'العزة: ترك محاربة الله. العلو: الخوف والتعظيم.',
    'الفرح: التوبة النصوح. الجميل: تجميل الأقوال والأفعال.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'أي هذه ليس من ثمرات الإيمان بالأسماء والصفات في الكتاب؟', options: ['زيادة الإيمان', 'صدق التوكل', 'الانزجار عن المعاصي', 'ترك الأسباب'], answer: 3, explain: 'لم يذكره الكتاب، بل ذكر فعل الأسباب الموصلة إلى الرحمة.', page: 77 },
    { type: 'mc', q: 'ما الأثر الإيماني لصفتي العلم والقدرة؟', options: ['الفرح', 'قوة مراقبة الله والخوف منه', 'الشكر', 'العزة'], answer: 1, explain: '[الطلاق: ١٢].', page: 79 },
    { type: 'mc', q: 'ما الأثر السلوكي لصفة العزة؟', options: ['ألا نحارب الله بفعل كالربا، وأن نكون أعزة في ديننا', 'التوبة النصوح', 'تجميل الأخلاق', 'الحمد بعد الأكل'], answer: 0, explain: 'كما في الكتاب ص ٨٣.', page: 83 },
    { type: 'mc', q: 'ما أثر صفة الفرح بالتوبة؟', options: ['الخوف من يوم الفصل', 'الحرص على ما يرضي الله، ومنه التوبة النصوح', 'العزة في الدين', 'شكر المحسن'], answer: 1, explain: 'أخرجه البخاري ومسلم.', page: 86 },
    { type: 'tf', q: 'من أثر اسم الجميل أن يجمل العبد أقواله وأفعاله وأخلاقه.', options: ['صواب', 'خطأ'], answer: 0, explain: '«إن الله جميل يحب الجمال».', page: 87 }
  ]),
  note: 'نشاط الكتاب في صفحة ٨٧.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'Vruchten van het geloof in Allahs namen en eigenschappen',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Wat het geloof in Allahs namen en eigenschappen oplevert, en hoe afzonderlijke namen en eigenschappen doorwerken in geloof en gedrag.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'De onderwerpen van de eenheid, zoals op p. 76 van het boek.',
    root: { label: 'Vruchten van het geloof in de namen en eigenschappen', sub: 'Eenheid 5' },
    nodes: [
      { label: 'De vruchten', sub: 'les 19', page: 77, children: ['liefde en ontzag', 'meer geloof en vrees', 'vertrouwen en zuivering van de ziel'] },
      { label: 'Kennis, vermogen, voorziening, horen, liefde', sub: 'les 20', page: 79, children: ['Allahs toezicht beseffen', 'het hart aan Allah binden', 'goeddoen en berouw'] },
      { label: 'Barmhartigheid, komen, macht', sub: 'les 21', page: 81, children: ['de oorzaken van barmhartigheid', 'vrees voor de dag van het oordeel', 'trots op de godsdienst'] },
      { label: 'Hoogheid, de Geweldige, de Dankbare, tevredenheid', sub: 'les 22', page: 83, children: ['vrees en ontzag', 'dankbaarheid', 'haast maken met wat Hem behaagt'] },
      { label: 'Vergeving, vreugde, lachen, schoonheid', sub: 'les 23–24', page: 85, children: ['hoop op vergeving', 'oprecht berouw', 'mooie woorden en daden'] }
    ]
  },
  points: [
    { text: 'Kennis van de namen en eigenschappen, ze overdenken en begrijpen zoals Allah bedoelt, is een van de belangrijkste en edelste wetenschappen.', page: 77 },
    { text: 'Vruchten zijn onder meer liefde voor Allah en ontzag, meer geloof, vrees voor Hem en oprecht vertrouwen op Hem.', page: 77 },
    { text: 'Het is de weg om Allah te kennen, en een van de edelste vruchten is de zuivering van de ziel op de weg van dienaarschap.', page: 78 },
    { text: 'Elke naam en eigenschap werkt door in geloof en gedrag.', page: 79 },
    { text: 'Voorbeelden: kennis geeft besef van toezicht, de Voorziener bindt het hart aan Allah, de Machtige houdt je weg van strijd tegen Allah, de Dankbare spoort aan tot dankbaarheid.', page: 79 }
  ],
  terms: [
    { term: 'ثمرات الإيمان بالأسماء والصفات', translit: 'thamarāt al-īmān', meaning: 'De vruchten van het geloof in de namen en eigenschappen: liefde, ontzag, meer geloof, vrees, vertrouwen en zuivering van de ziel.', explanation: '', notes: [], page: 77 },
    { term: 'تزكية النفوس', translit: 'tazkiyat an-nufūs', meaning: 'Zuivering van de ziel: haar vestigen op de weg van dienaarschap aan de Ene.', explanation: 'Een van de edelste vruchten.', notes: [], page: 78 },
    { term: 'الأثر الإيماني والسلوكي', translit: 'al-athar al-īmānī wa-s-sulūkī', meaning: 'Het effect van een naam of eigenschap op het geloof in het hart en op het gedrag.', explanation: '', notes: [], page: 79 },
    { term: 'المتين', translit: 'al-matīn', meaning: 'De Krachtige: een naam van Allah die de eigenschap kracht inhoudt.', explanation: '', notes: ['adh-Dhāriyāt 51:58'], page: 80 },
    { term: 'العزة', translit: 'al-ʿizza', meaning: 'Macht: een eigenschap van Allah; het effect is dat de dienaar Allah niet bestrijdt (zoals met rente) en trots is op zijn godsdienst.', explanation: '', notes: ['al-Munāfiqūn 63:8'], page: 83 },
    { term: 'الشاكر', translit: 'ash-shākir', meaning: 'De Dankbare: een naam van Allah; het effect is Allah danken met hart, tong en ledematen, en wie je goed deed bedanken.', explanation: '', notes: ['al-Baqara 2:158'], page: 84 },
    { term: 'العفو', translit: 'al-ʿafuww', meaning: 'De Vergevende: een naam van Allah; het effect is hopen op Zijn vergeving en Hem erom vragen.', explanation: '', notes: ['an-Nisāʾ 4:43'], page: 85 },
    { term: 'الجميل', translit: 'al-jamīl', meaning: 'De Mooie: een naam van Allah; het effect is liefde voor Hem en je woorden, daden en karakter mooi maken.', explanation: '', notes: [], page: 87 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'De vruchten van het geloof in de namen en eigenschappen',
      intro: 'Acht vruchten uit het boek.',
      nodes: [
        { label: 'Liefde voor Allah en ontzag', sub: 'an-Naḥl 16:97', page: 77 },
        { label: 'Meer geloof', sub: 'Muḥammad 47:17', page: 77 },
        { label: 'Vrees voor Hem en gehoorzaamheid', page: 77 },
        { label: 'Sterke zekerheid en oprecht vertrouwen', page: 77 },
        { label: 'De weg om Allah te kennen', page: 78 },
        { label: 'Zuivering van de ziel', page: 78 },
        { label: 'Afgeschrikt worden van zonden', page: 79 },
        { label: 'De deur naar zuiver tawḥīd', page: 79 }
      ]
    },
    {
      type: 'compare',
      title: 'Wat Allahs namen in het hart teweegbrengen',
      intro: 'Voorbeelden van het boek bij de zuivering van de ziel.',
      columns: ['Namen', 'Brengen teweeg'],
      rows: [
        { label: 'Grootheid', cells: ['namen van grootheid', 'ontzag en eerbied'] },
        { label: 'Schoonheid', cells: ['namen van schoonheid, goedheid, barmhartigheid en vrijgevigheid', 'liefde, verlangen, lof en dankbaarheid'] },
        { label: 'Macht', cells: ['namen van macht, wijsheid, kennis en vermogen', 'onderworpenheid, nederigheid en gebrokenheid'] },
        { label: 'Omvatten', cells: ['namen van kennis, op de hoogte zijn, omvatten en toezien', 'besef van toezicht, vrees en ontzag'] },
        { label: 'Rijkdom', cells: ['namen van rijkdom en fijngevoeligheid', 'behoefte aan Hem en je tot Hem wenden'] }
      ],
      page: 78
    },
    {
      type: 'compare',
      title: 'Toepassingen: het effect van namen en eigenschappen',
      intro: 'Elke naam of eigenschap met bewijs en effect uit het boek.',
      columns: ['Bewijs', 'Effect'],
      rows: [
        { label: 'Kennis en vermogen', cells: ['aṭ-Ṭalāq 65:12', 'sterk besef van Allahs toezicht en vrees voor Hem'] },
        { label: 'Voorziening en kracht', cells: ['adh-Dhāriyāt 51:58', 'het hart aan Allah binden voor levensonderhoud; kracht alleen bij Hem zoeken'] },
        { label: 'Horen en zien', cells: ['an-Nisāʾ 4:58, 134', 'oppassen Hem niet tegen te spreken in woord en daad'] },
        { label: 'Liefde', cells: ['al-Baqara 2:195, 222', 'goeddoen, rechtvaardigheid, godsvrees en berouw'] },
        { label: 'Barmhartigheid', cells: ['al-Aḥqāf 46:8', 'je hechten aan Zijn barmhartigheid en de oorzaken ervan doen'] },
        { label: 'Komen', cells: ['al-Fajr 89:22', 'vrees voor de dag van het oordeel'] },
        { label: 'Macht', cells: ['al-Munāfiqūn 63:8', 'Allah niet bestrijden; trots op de godsdienst'] },
        { label: 'Hoogheid', cells: ['al-Mulk 67:16–17', 'vrees, ontzag en godsvrees'] },
        { label: 'De Geweldige', cells: ['al-Wāqiʿa 56:74', 'ontzag voor de Heer en Zijn tekenen'] },
        { label: 'De Dankbare', cells: ['al-Baqara 2:158', 'Allah danken en wie je goed deed'] },
        { label: 'Tevredenheid', cells: ['al-Māʾida 5:119', 'haast maken met wat Hem behaagt'] },
        { label: 'De Vergevende', cells: ['an-Nisāʾ 4:43', 'hopen op Zijn vergeving en erom vragen'] },
        { label: 'Vreugde', cells: ['hadith van Abū Hurayra', 'oprecht berouw'] },
        { label: 'Lachen', cells: ['hadith van Abū Hurayra', 'groot goed van Hem hopen'] },
        { label: 'De Mooie', cells: ['hadith van Ibn Masʿūd', 'liefde voor Hem; mooie woorden en daden'] }
      ],
      page: 79
    }
  ],
  sections: [
    { title: 'De vruchten', text: 'Kennis van de namen en eigenschappen is een van de edelste wetenschappen. Ze geeft liefde voor Allah en ontzag, die leiden tot gehoorzaamheid, en ook meer geloof, vrees voor Allah en oprecht vertrouwen.', more: 'Hoe beter de dienaar zijn Heer kent, hoe dichter hij bij Hem is, hoe meer hij Hem vreest, hoe meer hij Hem aanbidt en hoe verder hij van zonde blijft.', page: 77 },
    { title: 'Allah kennen en de ziel zuiveren', text: 'Allah schiep de schepping om Hem te kennen en te aanbidden; de namen en eigenschappen zijn de weg om Hem te kennen. Een van de edelste vruchten is de zuivering van de ziel.', more: 'Het houdt je ook weg van zonden, omdat je bedenkt dat Allah je ziet; voor wie deze deur opengaat, gaat de deur naar zuiver tawḥīd open.', page: 78 },
    { title: 'Van namen naar gedrag', text: 'Elke naam en eigenschap heeft een effect: kennis geeft besef van toezicht, voorziening bindt het hart aan Allah, horen en zien maken voorzichtig, en liefde spoort aan tot goeddoen, rechtvaardigheid en berouw.', more: '', page: 79 },
    { title: 'Barmhartigheid, komen en macht', text: 'Barmhartigheid spoort aan de oorzaken ervan te doen, zoals goeddoen, godsvrees en geloof; het komen van Allah geeft vrees voor de dag van het oordeel; Zijn macht houdt je weg van strijd tegen Allah, zoals met rente.', more: 'De Profeet ﷺ zei: "ieder van jullie zal door zijn Heer worden toegesproken zonder tolk ... bescherm je tegen het Vuur, al is het met een halve dadel."', page: 81 },
    { title: 'Hoogheid, de Geweldige, de Dankbare, tevredenheid', text: 'Wie weet dat Allah boven alles is, beseft Zijn heerschappij en vreest en eert Hem; wie weet dat Hij dankbaar is, dankt Hem en wie hem goed deed; wie Zijn tevredenheid kent, haast zich met wat Hem behaagt.', more: 'Wat Allah behaagt is onder meer: Hem vrezen in het geheim en openlijk, goed zijn voor de ouders, eerlijkheid, Allah prijzen na eten en drinken, en de siwāk gebruiken (p. 85).', page: 83 },
    { title: 'Vergeving, vreugde, lachen, schoonheid', text: 'De Vergevende doet hopen op vergeving, vreugde om berouw spoort aan tot oprecht berouw, lachen doet groot goed hopen, en de Mooie spoort aan tot liefde voor Hem en mooie woorden, daden en karakter.', more: '', page: 85 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'De vruchten', items: ['liefde voor Allah en ontzag', 'meer geloof', 'vrees en ontzag', 'oprecht vertrouwen', 'Allah kennen', 'zuivering van de ziel', 'afgeschrikt worden van zonden', 'zuiver tawḥīd'], page: 77, origin: 'boek' },
    { kind: 'bewijs', title: 'Een regel over kennis van Allah', items: ['Hoe beter de dienaar zijn Heer kent, hoe dichter hij bij Hem is, hoe meer hij Hem vreest en aanbidt, en hoe verder hij van zonde blijft.'], page: 77, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Kennis van de namen en eigenschappen is een van de edelste wetenschappen.',
    'Vruchten: liefde, meer geloof, vrees, vertrouwen, Allah kennen, zuivering, wegblijven van zonde, zuiver tawḥīd.',
    'Kennis en vermogen: besef van toezicht. Voorziening en kracht: het hart aan Allah binden.',
    'Liefde: goeddoen, rechtvaardigheid, godsvrees, berouw. Barmhartigheid: de oorzaken ervan doen.',
    'Macht: Allah niet bestrijden. Hoogheid: vrees en ontzag.',
    'Vreugde: oprecht berouw. De Mooie: mooie woorden en daden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat noemt het boek níet als vrucht van het geloof in de namen en eigenschappen?', options: ['meer geloof', 'oprecht vertrouwen', 'afgeschrikt worden van zonden', 'de middelen laten varen'], answer: 3, explain: 'Het boek noemt juist dat men de oorzaken van barmhartigheid doet.', page: 77 },
    { type: 'mc', q: 'Wat is het effect van de eigenschappen kennis en vermogen?', options: ['vreugde', 'sterk besef van Allahs toezicht en vrees voor Hem', 'dankbaarheid', 'trots'], answer: 1, explain: 'Aṭ-Ṭalāq 65:12.', page: 79 },
    { type: 'mc', q: 'Wat is het effect op gedrag van de eigenschap macht (ʿizza)?', options: ['Allah niet bestrijden (zoals met rente) en trots zijn op je godsdienst', 'oprecht berouw', 'een mooi karakter', 'Allah prijzen na het eten'], answer: 0, explain: 'Zo staat het op p. 83.', page: 83 },
    { type: 'mc', q: 'Waartoe spoort Allahs vreugde om berouw aan?', options: ['vrees voor de dag van het oordeel', 'streven naar wat Allah behaagt, zoals oprecht berouw', 'trots op de godsdienst', 'dankbaarheid tegenover weldoeners'], answer: 1, explain: 'Al-Bukhārī en Muslim.', page: 86 },
    { type: 'tf', q: 'Een effect van de naam al-Jamīl is dat de dienaar zijn woorden, daden en karakter mooi maakt.', options: ['Juist', 'Onjuist'], answer: 0, explain: '"Allah is mooi en houdt van schoonheid."', page: 87 }
  ]),
  note: 'Oefening van het boek op p. 87. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-aqeedah', chapter: '19', unit: 5, ar, nl }
