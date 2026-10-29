// Hoofdstukkaart bij العقيدة (١), eenheid 4: أركان التوحيد (lessen 17–24, boek p. 64–83).
// Opgesteld uit de boekpagina's zelf (Zad Academy, archive.org); hadith en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (١)، سلسلة زاد العلمية',
  pages: '64–83',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'اللهم لا مانع لما أعطيت، ولا معطي لما منعت', takhrij: 'رواه البخاري ومسلم', note: 'في معنى أن الله هو المعطي المانع، من معاني الربوبية.', pages: [71], nl: 'O Allah, niemand kan tegenhouden wat U geeft, en niemand kan geven wat U tegenhoudt', nlNote: 'Bij "Allah is Degene die geeft en tegenhoudt", een betekenis van rubūbiyya.' },
  { narrator: '', text: 'كل مولود يولد على الفطرة، فأبواه يهودانه، أو ينصرانه، أو يمجسانه', takhrij: 'أخرجه البخاري ومسلم', note: 'ولم يقل: أو يسلمانه؛ لأنه مسلم بفطرته، مقر بالتوحيد بفطرته.', pages: [77], nl: 'ieder kind wordt geboren met de fiṭra (de aangeboren aanleg); zijn ouders maken er een jood, christen of magiër van', nlNote: 'Hij zei niet "of een moslim", want het kind is volgens het boek van nature moslim en erkent van nature het tawḥīd.' },
  { narrator: 'جبير بن مطعم', text: 'كاد قلبي أن يطير', takhrij: 'أخرجه البخاري', note: 'قاله لما سمع قوله تعالى: ﴿أم خلقوا من غير شيء أم هم الخالقون﴾ [الطور: ٣٥–٣٦].', pages: [79], nl: 'mijn hart vloog bijna weg', nlNote: 'Dit zei hij toen hij aṭ-Ṭūr 52:35–36 hoorde.' }
]

const TAKHRIJ_NL = {
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه البخاري': 'al-Bukhārī'
}
const NARRATOR_NL = { 'جبير بن مطعم': 'Jubayr ibn Muṭʿim' }

const PERSONS = [
  ['ash-shinqiti', 'text', [65], 'نقل الكتاب قوله في معنى النفي والإثبات في «لا إله إلا الله».', 'Het boek citeert hem over de ontkenning en bevestiging in "lā ilāha illā llāh".'],
  ['ibn-taymiyya', 'text', [68], 'نقل الكتاب قوله: «والرب هو الذي يربي عبده فيدبره».', 'Het boek citeert hem: "de Heer is Degene die Zijn dienaar opvoedt en zijn zaken regelt".'],
  ['ibn-al-qayyim', 'text', [73], 'نقل الكتاب قوله: ليس التوحيد مجرد إقرار العبد بأنه لا خالق إلا الله.', 'Het boek citeert hem: tawḥīd is meer dan erkennen dat er geen schepper is dan Allah.'],
  ['jubayr-ibn-mutim', 'text', [79], 'قال لما سمع آية الطور: «كاد قلبي أن يطير».', 'Zei bij het horen van het vers uit aṭ-Ṭūr: "mijn hart vloog bijna weg".'],
  ['ash-shafii', 'text', [80], 'سئل عن وجود الصانع فاستدل بورق التوت.', 'Werd gevraagd naar het bestaan van de Maker en wees op het blad van de moerbeiboom.'],
  ['al-bukhari', 'takhrij', [71, 77, 79], 'أخرج أحاديث هذه الوحدة.', 'Nam de hadith uit deze eenheid op.'],
  ['muslim', 'takhrij', [71, 77], 'أخرج حديثي «اللهم لا مانع» و«كل مولود».', 'Nam "O Allah, niemand kan tegenhouden" en "ieder kind" op.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'أركان التوحيد',
  subtitle: 'ثمانية دروس مجموعة في صفحة واحدة',
  summary: 'ركنا التوحيد (النفي والإثبات)، وأقسام التوحيد مع تفصيل توحيد الربوبية، وإقرار الكفار به، وآثاره الإيمانية، وأدلة وجود الله من غير الشرع.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ٦٤ من الكتاب.',
    root: { label: 'أركان التوحيد', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'ركنا التوحيد', sub: 'الدرس ١٧', page: 65, children: ['النفي: الكفر بالطاغوت', 'الإثبات: الإيمان بالله'] },
      { label: 'أقسام التوحيد', sub: 'الدرسان ١٨–١٩', page: 68, children: ['الربوبية', 'الألوهية', 'الأسماء والصفات'] },
      { label: 'إقرار الكفار بالربوبية', sub: 'الدرس ٢٠', page: 72, children: ['الربوبية تستلزم الألوهية', 'الربوبية وحدها لا تكفي'] },
      { label: 'الآثار الإيمانية للربوبية', sub: 'الدرس ٢١', page: 74, children: ['الحب والتعظيم', 'التوكل والاستغاثة', 'الخوف والرضا'] },
      { label: 'أدلة وجود الله من غير الشرع', sub: 'الدروس ٢٢–٢٤', page: 77, children: ['الفطرة', 'العقل', 'الحس'] }
    ]
  },
  points: [
    { text: 'للتوحيد ركنان لا يقوم إلا بهما: النفي والإثبات، وهما معنى «لا إله إلا الله».', page: 65 },
    { text: 'النفي هو الكفر بالطاغوت، والإثبات هو الإيمان بالله؛ والإيمان بالله متوقف على الكفر بالطاغوت.', page: 66 },
    { text: 'أقسام التوحيد ثلاثة: الربوبية، والألوهية، والأسماء والصفات.', page: 68 },
    { text: 'توحيد الربوبية: إفراد الله بأفعاله، وهي الخلق والملك والتدبير، ويتبعها الرزق والإحياء والإماتة وغيرها.', page: 68 },
    { text: 'الكفار كانوا مقرين بالربوبية، ولم يدخلهم ذلك في الإسلام؛ فالربوبية تستلزم الألوهية ولا تكفي وحدها.', page: 72 },
    { text: 'لتوحيد الربوبية آثار إيمانية، منها حب الله وتعظيمه والتوكل عليه والرضا بقضائه.', page: 74 },
    { text: 'أدلة وجود الله من غير الشرع، لمخاطبة غير المؤمنين: الفطرة، والعقل، والحس.', page: 77 }
  ],
  terms: [
    { term: 'النفي', translit: 'an-nafy', meaning: 'خلع جميع أنواع المعبودات غير الله، في جميع أنواع العبادات.', explanation: 'من كلام الشنقيطي؛ وهو الكفر بالطاغوت.', notes: [], page: 65 },
    { term: 'الإثبات', translit: 'al-ithbāt', meaning: 'إفراد الله وحده بجميع أنواع العبادات بإخلاص، على الوجه الذي شرعه على ألسنة رسله.', explanation: 'وهو الإيمان بالله.', notes: [], page: 65 },
    { term: 'العروة الوثقى', translit: 'al-ʿurwa al-wuthqā', meaning: 'لا إله إلا الله.', explanation: '', notes: ['[البقرة: ٢٥٦]'], page: 66 },
    { term: 'حرية الاعتقاد', translit: 'ḥurriyyat al-iʿtiqād', meaning: 'فكرة مصادمة لعقيدة التوحيد عند الكتاب، لأنها لا تعرف الكفر بالطاغوت.', explanation: '', notes: [], page: 67 },
    { term: 'الرب (لغةً)', translit: 'ar-rabb', meaning: 'مصدر ربّ؛ ولا يقال «الرب» لغير الله إلا بالإضافة، كرب الدار ورب الدابة.', explanation: '', notes: ['[يوسف: ٤٢]'], page: 68 },
    { term: 'توحيد الربوبية', translit: 'tawḥīd ar-rubūbiyya', meaning: 'إفراد الله بأفعاله التي يختص بها: الخلق والملك والتدبير.', explanation: 'ويتبعها: الرزق، والإحياء والإماتة، والبعث، والنفع وكشف الضر.', notes: [], page: 68 },
    { term: 'الخلق', translit: 'al-khalq', meaning: 'إيجاد الشيء من العدم، وهو لله وحده.', explanation: 'أما خلق المخلوق فتحويل الشيء من صورة إلى أخرى، مقيد بالأسباب.', notes: ['[المؤمنون: ١٤]'], page: 69 },
    { term: 'الفطرة', translit: 'al-fiṭra', meaning: 'ما فطر عليه كل مخلوق من الإيمان بالخالق من غير تفكير أو تعلم.', explanation: '', notes: ['[الروم: ٣٠]'], page: 77 },
    { term: 'دليل العقل', translit: 'dalīl al-ʿaql', meaning: 'لا بد لكل مخلوق من خالق، ولكل مصنوع من صانع.', explanation: '', notes: ['[الطور: ٣٥–٣٦]'], page: 78 },
    { term: 'دليل الحس', translit: 'dalīl al-ḥiss', meaning: 'إجابة الداعين والمستغيثين، ومعجزات الأنبياء.', explanation: '', notes: [], page: 81 },
    { term: 'المعجزة', translit: 'al-muʿjiza', meaning: 'أمر خارج عن نطاق قدرة البشر يؤيد الله به أنبياءه.', explanation: '', notes: [], page: 82 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'ركنا التوحيد',
      intro: 'كلمة «لا إله إلا الله» مركبة من نفي وإثبات.',
      columns: ['النفي', 'الإثبات'],
      rows: [
        { label: 'في الكلمة', cells: ['لا إله', 'إلا الله'] },
        { label: 'معناه', cells: ['خلع جميع المعبودات غير الله', 'إفراد الله بجميع العبادات'] },
        { label: 'في آية النحل ٣٦', cells: ['﴿واجتنبوا الطاغوت﴾', '﴿اعبدوا الله﴾'] },
        { label: 'في آية البقرة ٢٥٦', cells: ['الكفر بالطاغوت', 'الإيمان بالله'] }
      ],
      note: 'من اكتفى بالإثبات دون اعتقاد بطلان ما سواه لم يحقق التوحيد، ومن نفى مطلقًا فهو تعطيل محض.',
      page: 65
    },
    {
      type: 'tree',
      title: 'توحيد الربوبية',
      intro: 'إفراد الله بأفعاله.',
      root: { label: 'الربوبية', sub: 'أفعال الله', page: 68 },
      nodes: [
        { label: 'الخلق', sub: '[الأعراف: ٥٤]', page: 69 },
        { label: 'الملك', sub: '[آل عمران: ٢٦]', page: 70 },
        { label: 'التدبير', sub: '[السجدة: ٥]', page: 70 },
        { label: 'ويتبعها', sub: 'الرزق، الإحياء والإماتة، النفع والضر، العطاء والمنع، النصر، الهداية', page: 71 }
      ]
    },
    {
      type: 'cards',
      title: 'الآثار الإيمانية لتوحيد الربوبية',
      intro: 'عشرة آثار ذكرها الكتاب.',
      nodes: [
        { label: 'حب الله', sub: '[البقرة: ١٦٥]', page: 74 },
        { label: 'تعظيم الله', sub: '[الإسراء: ١١١]', page: 74 },
        { label: 'التوكل', sub: '[هود: ٥٦]', page: 74 },
        { label: 'الفزع إلى الله والاستغاثة', sub: '[الأنفال: ٩]', page: 74 },
        { label: 'الإنابة والانكسار', sub: '[الأعراف: ٢٣]', page: 74 },
        { label: 'الاستسلام والانقياد', sub: '[البقرة: ١٣١]', page: 75 },
        { label: 'الخوف من الله', sub: '[المائدة: ٢٨]', page: 75 },
        { label: 'تحريك العقول للتفكر', sub: '[البقرة: ١٦٤]', page: 75 },
        { label: 'تحقيق الإخلاص', sub: '[الأنعام: ٧٩]', page: 75 },
        { label: 'الرضا بالقضاء والقدر', sub: '[البقرة: ١٥٥–١٥٦]', page: 75 }
      ]
    },
    {
      type: 'tree',
      title: 'أدلة وجود الله من غير الشرع',
      intro: 'لمخاطبة من لا يقبل أدلة الشرع.',
      root: { label: 'وجود الله', sub: 'أدلة غير الشرع', page: 77 },
      nodes: [
        { label: 'الفطرة', sub: '«كل مولود يولد على الفطرة»، والاضطرار', page: 77 },
        { label: 'العقل', sub: 'لا بد لكل مخلوق من خالق؛ التفكر والتأمل', page: 78 },
        { label: 'الحس', sub: 'إجابة الداعين، ومعجزات الأنبياء', page: 81 }
      ]
    },
    {
      type: 'steps',
      title: 'دليل العقل في آية الطور',
      intro: '﴿أم خلقوا من غير شيء أم هم الخالقون﴾ [الطور: ٣٥]',
      nodes: [
        { label: 'خلقوا من غير خالق؟', sub: 'مستحيل: العدم لا يخلق', page: 79 },
        { label: 'خلقوا أنفسهم؟', sub: 'مستحيل: لم يدع أحد ذلك', page: 79 },
        { label: 'فتعين الخالق', sub: 'وهو الله رب العالمين', page: 79 }
      ]
    }
  ],
  sections: [
    { title: 'ركنا التوحيد', text: 'لا يقوم التوحيد إلا بالنفي والإثبات: نفي العبادة عن كل ما سوى الله، وإثباتها لله وحده.', more: 'قال الشنقيطي: «تحقيق معنى (لا إله إلا الله)، وهي مركبة من نفي وإثبات». وبين الكتاب أن «حرية الاعتقاد» تصادم التوحيد لأنها لا تعرف الكفر بالطاغوت (ص ٦٧).', page: 65 },
    { title: 'أقسام التوحيد وتوحيد الربوبية', text: 'التوحيد ثلاثة أقسام: الربوبية والألوهية والأسماء والصفات. والربوبية: إفراد الله بالخلق والملك والتدبير.', more: 'والخلق بمعنى الإيجاد من العدم لله وحده؛ وما يوصف به المخلوق من الخلق تحويل للشيء من صورة إلى صورة (ص ٦٩). وهذه المعاني مقدمات بين يدي عبوديته واستحقاقه لها (ص ٧١).', page: 68 },
    { title: 'إقرار الكفار بالربوبية', text: 'الخلق كلهم مقرون بالربوبية، حتى الكفار والمشركون وإبليس؛ لكن ذلك لم يدخلهم في الإسلام.', more: 'قال ابن القيم: «ليس التوحيد مجرد إقرار العبد بأنه لا خالق إلا الله، وأن الله رب كل شيء ومليكه، كما كان عباد الأصنام مقرين بذلك وهم مشركون».', page: 72 },
    { title: 'الآثار الإيمانية لتوحيد الربوبية', text: 'من عرف أن الله هو الخالق المالك المدبر أحبه وعظمه وتوكل عليه وفزع إليه ورضي بقضائه.', more: '', page: 74 },
    { title: 'دليل الفطرة', text: 'كل مخلوق مفطور على الإيمان بالخالق. ومن دلائل الفطرة أن الإنسان يلجأ إلى الله عند الاضطرار.', more: 'قال النبي ﷺ: «كل مولود يولد على الفطرة...»، ولم يقل: أو يسلمانه؛ لأنه مسلم بفطرته.', page: 77 },
    { title: 'دليل العقل', text: 'لا بد لكل مخلوق من خالق؛ فإما أن يكون خلق من غير خالق، أو خلق نفسه، وكلاهما مستحيل، فتعين الخالق.', more: 'ومن دليل العقل التفكر في السماوات والأرض والبحار والنبات. وسئل الشافعي عن وجود الصانع فقال: «هذا ورق التوت طعمه واحد...» (ص ٨٠).', page: 78 },
    { title: 'دليل الحس', text: 'من وجهين: إجابة الداعين والمستغيثين لمن صدق اللجوء، ومعجزات الأنبياء التي هي خارجة عن قدرة البشر.', more: 'كانفلاق البحر لموسى، وإحياء الموتى بإذن الله لعيسى، وانشقاق القمر لمحمد ﷺ.', page: 81 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'ركنا التوحيد', items: ['النفي', 'الإثبات'], page: 65, origin: 'boek' },
    { kind: 'opsomming', title: 'أقسام التوحيد', items: ['توحيد الربوبية', 'توحيد الألوهية', 'توحيد الأسماء والصفات'], page: 68, origin: 'boek' },
    { kind: 'definitie', title: 'توحيد الربوبية', items: ['إفراد الله بأفعاله التي يختص بها: الخلق والملك والتدبير.'], page: 68, origin: 'boek' },
    { kind: 'onderscheid', title: 'خلق الله وخلق المخلوق', items: ['خلق الله: إيجاد من العدم.', 'خلق المخلوق: تحويل من صورة إلى صورة، مقيد بالأسباب.'], page: 69, origin: 'boek' },
    { kind: 'voorwaarde', title: 'الربوبية وحدها لا تكفي', items: ['الكفار أقروا بالربوبية ولم يدخلوا الإسلام.', 'الربوبية تستلزم الألوهية.'], page: 73, origin: 'boek' },
    { kind: 'opsomming', title: 'أدلة وجود الله من غير الشرع', items: ['الفطرة', 'العقل', 'الحس'], page: 77, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'ركنا التوحيد: النفي (الكفر بالطاغوت) والإثبات (الإيمان بالله).',
    'أقسام التوحيد: الربوبية، والألوهية، والأسماء والصفات.',
    'الربوبية: إفراد الله بالخلق والملك والتدبير.',
    'الكفار أقروا بالربوبية، ولم يكفهم ذلك.',
    'آثار الربوبية: الحب، التعظيم، التوكل، الاستغاثة، الإنابة، الاستسلام، الخوف، التفكر، الإخلاص، الرضا.',
    'أدلة وجود الله من غير الشرع: الفطرة، العقل، الحس.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما ركنا التوحيد؟', options: ['الخوف والرجاء', 'النفي والإثبات', 'القول والعمل', 'الصلاة والزكاة'], answer: 1, explain: 'وهما معنى «لا إله إلا الله».', page: 65 },
    { type: 'tf', q: 'من أثبت العبادة لله ولم يعتقد بطلان عبادة غيره فقد حقق التوحيد.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا بد من النفي والإثبات.', page: 65 },
    { type: 'mc', q: 'ما الذي يقابل النفي في آية النحل ٣٦؟', options: ['﴿اعبدوا الله﴾', '﴿واجتنبوا الطاغوت﴾', '﴿ولقد بعثنا﴾', '﴿في كل أمة﴾'], answer: 1, explain: 'واجتنبوا الطاغوت = النفي.', page: 66 },
    { type: 'mc', q: 'ما أصول أفعال الربوبية؟', options: ['الصلاة والصيام والحج', 'الخلق والملك والتدبير', 'الحب والخوف والرجاء', 'السمع والبصر والعلم'], answer: 1, explain: 'ويتبعها الرزق والإحياء والإماتة وغيرها.', page: 68 },
    { type: 'mc', q: 'كيف أجاب الكتاب عن ﴿فتبارك الله أحسن الخالقين﴾؟', options: ['أن المخلوق يوجد من العدم', 'أن خلق المخلوق تحويل من صورة إلى أخرى ومقيد بالأسباب', 'أن الآية منسوخة', 'أن المراد الملائكة'], answer: 1, explain: 'كالطين يصير إبريقًا.', page: 69 },
    { type: 'tf', q: 'إقرار الكفار بتوحيد الربوبية أدخلهم في الإسلام.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الربوبية وحدها لا تكفي [البينة: ٦].', page: 73 },
    { type: 'mc', q: 'ما أدلة وجود الله من غير الشرع؟', options: ['الكتاب والسنة والإجماع', 'الفطرة والعقل والحس', 'الرؤيا والكشف والإلهام', 'التاريخ واللغة والعلم'], answer: 1, explain: 'كما في الكتاب.', page: 77 },
    { type: 'mc', q: 'لماذا لم يقل في حديث الفطرة «أو يسلمانه»؟', options: ['لأنه نسي', 'لأنه مسلم بفطرته', 'لأن الإسلام لا يورث', 'لأن الحديث مختصر'], answer: 1, explain: 'مقر بالتوحيد بفطرته.', page: 77 },
    { type: 'mc', q: 'من قال: «كاد قلبي أن يطير» لما سمع آية الطور؟', options: ['أبو هريرة', 'جبير بن مطعم', 'معاذ بن جبل', 'الشافعي'], answer: 1, explain: 'أخرجه البخاري.', page: 79 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٦٧ و٧٦ و٨٣.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Pijlers van het tawḥīd',
  subtitle: 'Acht lessen samen op één pagina',
  summary: 'De twee pijlers van tawḥīd (ontkennen en bevestigen), de soorten tawḥīd met uitleg van tawḥīd ar-rubūbiyya, de erkenning daarvan door de ongelovigen, het effect op het geloof, en bewijzen voor het bestaan van Allah buiten de openbaring.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen van de eenheid, zoals op p. 64 van het boek.',
    root: { label: 'Pijlers van het tawḥīd', sub: 'Eenheid 4' },
    nodes: [
      { label: 'De twee pijlers', sub: 'les 17', page: 65, children: ['ontkennen: de ṭāghūt verwerpen', 'bevestigen: geloven in Allah'] },
      { label: 'Soorten tawḥīd', sub: 'les 18–19', page: 68, children: ['rubūbiyya (heerschappij)', 'ulūhiyya (aanbidding)', 'namen en eigenschappen'] },
      { label: 'Erkenning door ongelovigen', sub: 'les 20', page: 72, children: ['rubūbiyya vraagt om ulūhiyya', 'rubūbiyya alleen is niet genoeg'] },
      { label: 'Effect op het geloof', sub: 'les 21', page: 74, children: ['liefde en ontzag', 'vertrouwen en hulp zoeken', 'vrees en tevredenheid'] },
      { label: 'Bewijzen buiten de openbaring', sub: 'les 22–24', page: 77, children: ['fiṭra (aangeboren aanleg)', 'verstand', 'waarneming'] }
    ]
  },
  points: [
    { text: 'Tawḥīd heeft twee pijlers: ontkennen en bevestigen; dat is de betekenis van "lā ilāha illā llāh".', page: 65 },
    { text: 'Ontkennen is de ṭāghūt (valse goden) verwerpen, bevestigen is geloven in Allah; het geloof in Allah hangt af van het verwerpen van de ṭāghūt.', page: 66 },
    { text: 'Er zijn drie soorten tawḥīd: rubūbiyya, ulūhiyya, en de namen en eigenschappen.', page: 68 },
    { text: 'Tawḥīd ar-rubūbiyya: Allah alleen de daden toekennen die Hem eigen zijn: scheppen, bezitten en regelen; daarbij horen ook voorzien, leven geven en doen sterven, enzovoort.', page: 68 },
    { text: 'De ongelovigen erkenden rubūbiyya, maar dat maakte hen geen moslim; rubūbiyya vraagt om ulūhiyya en is alleen niet genoeg.', page: 72 },
    { text: 'Rubūbiyya heeft effect op het geloof, zoals liefde voor Allah, ontzag, vertrouwen op Hem en tevredenheid met Zijn beschikking.', page: 74 },
    { text: 'Bewijzen voor het bestaan van Allah buiten de openbaring, voor wie niet gelooft: fiṭra, verstand en waarneming.', page: 77 }
  ],
  terms: [
    { term: 'النفي', translit: 'an-nafy', meaning: 'Ontkennen: alle aanbeden dingen naast Allah afwijzen, in alle soorten aanbidding.', explanation: 'Uit de woorden van ash-Shinqīṭī; het is het verwerpen van de ṭāghūt.', notes: [], page: 65 },
    { term: 'الإثبات', translit: 'al-ithbāt', meaning: 'Bevestigen: Allah alleen aanbidden in alle soorten aanbidding, oprecht, op de wijze die Hij via Zijn boodschappers voorschreef.', explanation: 'Het is het geloof in Allah.', notes: [], page: 65 },
    { term: 'العروة الوثقى', translit: 'al-ʿurwa al-wuthqā', meaning: 'Het stevigste houvast: lā ilāha illā llāh.', explanation: '', notes: ['al-Baqara 2:256'], page: 66 },
    { term: 'حرية الاعتقاد', translit: 'ḥurriyyat al-iʿtiqād', meaning: 'Vrijheid van geloof: volgens het boek in strijd met tawḥīd, omdat zij het verwerpen van de ṭāghūt niet kent.', explanation: '', notes: [], page: 67 },
    { term: 'الرب (لغةً)', translit: 'ar-rabb', meaning: 'Taalkundig van rabba; "de Heer" zonder toevoeging wordt alleen voor Allah gebruikt, met toevoeging wel voor anderen (heer des huizes).', explanation: '', notes: ['Yūsuf 12:42'], page: 68 },
    { term: 'توحيد الربوبية', translit: 'tawḥīd ar-rubūbiyya', meaning: 'Allah alleen de daden toekennen die Hem eigen zijn: scheppen, bezitten en regelen.', explanation: 'Daarbij horen: voorzien, leven geven en doen sterven, opwekken, baten en schade wegnemen.', notes: [], page: 68 },
    { term: 'الخلق', translit: 'al-khalq', meaning: 'Scheppen: iets uit het niets laten ontstaan; alleen Allah doet dat.', explanation: 'Wat een mens "maakt" is iets van de ene vorm in de andere omzetten, gebonden aan middelen.', notes: ['al-Muʾminūn 23:14'], page: 69 },
    { term: 'الفطرة', translit: 'al-fiṭra', meaning: 'De aangeboren aanleg: ieder schepsel gelooft van nature in de Schepper, zonder nadenken of leren.', explanation: '', notes: ['ar-Rūm 30:30'], page: 77 },
    { term: 'دليل العقل', translit: 'dalīl al-ʿaql', meaning: 'Bewijs van het verstand: elk schepsel heeft een Schepper, elk maaksel een maker.', explanation: '', notes: ['aṭ-Ṭūr 52:35–36'], page: 78 },
    { term: 'دليل الحس', translit: 'dalīl al-ḥiss', meaning: 'Bewijs van de waarneming: verhoorde smeekbeden en de wonderen van de profeten.', explanation: '', notes: [], page: 81 },
    { term: 'المعجزة', translit: 'al-muʿjiza', meaning: 'Wonder: iets buiten het vermogen van mensen, waarmee Allah Zijn profeten steunt.', explanation: '', notes: [], page: 82 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De twee pijlers van tawḥīd',
      intro: '"Lā ilāha illā llāh" bestaat uit ontkennen en bevestigen.',
      columns: ['Ontkennen', 'Bevestigen'],
      rows: [
        { label: 'In de woorden', cells: ['lā ilāha (geen god)', 'illā llāh (behalve Allah)'] },
        { label: 'Betekenis', cells: ['alles naast Allah als aanbedene afwijzen', 'Allah alleen aanbidden'] },
        { label: 'In an-Naḥl 16:36', cells: ['"vermijd de ṭāghūt"', '"aanbid Allah"'] },
        { label: 'In al-Baqara 2:256', cells: ['de ṭāghūt verwerpen', 'geloven in Allah'] }
      ],
      note: 'Wie alleen bevestigt zonder te geloven dat al het andere vals is, heeft geen tawḥīd; wie alles ontkent, ontkent God volledig.',
      page: 65
    },
    {
      type: 'tree',
      title: 'Tawḥīd ar-rubūbiyya',
      intro: 'Allah alleen de daden toekennen die Hem eigen zijn.',
      root: { label: 'Rubūbiyya', sub: 'de daden van Allah', page: 68 },
      nodes: [
        { label: 'Scheppen', sub: 'al-Aʿrāf 7:54', page: 69 },
        { label: 'Bezitten', sub: 'Āl ʿImrān 3:26', page: 70 },
        { label: 'Regelen', sub: 'as-Sajda 32:5', page: 70 },
        { label: 'Daarbij horen', sub: 'voorzien, leven en dood, baat en schade, geven en tegenhouden, hulp, leiding', page: 71 }
      ]
    },
    {
      type: 'cards',
      title: 'Effect van rubūbiyya op het geloof',
      intro: 'Tien effecten uit het boek.',
      nodes: [
        { label: 'Liefde voor Allah', sub: 'al-Baqara 2:165', page: 74 },
        { label: 'Ontzag voor Allah', sub: 'al-Isrāʾ 17:111', page: 74 },
        { label: 'Vertrouwen op Allah', sub: 'Hūd 11:56', page: 74 },
        { label: 'Toevlucht en hulp zoeken bij Allah', sub: 'al-Anfāl 8:9', page: 74 },
        { label: 'Berouwvol terugkeren en nederigheid', sub: 'al-Aʿrāf 7:23', page: 74 },
        { label: 'Overgave en gehoorzaamheid', sub: 'al-Baqara 2:131', page: 75 },
        { label: 'Vrees voor Allah', sub: 'al-Māʾida 5:28', page: 75 },
        { label: 'Het verstand aan het denken zetten', sub: 'al-Baqara 2:164', page: 75 },
        { label: 'Oprechtheid', sub: 'al-Anʿām 6:79', page: 75 },
        { label: 'Tevredenheid met de beschikking', sub: 'al-Baqara 2:155–156', page: 75 }
      ]
    },
    {
      type: 'tree',
      title: 'Bewijzen voor het bestaan van Allah buiten de openbaring',
      intro: 'Voor wie bewijzen uit Koran en Sunna niet aanvaardt.',
      root: { label: 'Het bestaan van Allah', sub: 'bewijzen buiten de openbaring', page: 77 },
      nodes: [
        { label: 'Fiṭra', sub: '"ieder kind wordt geboren met de fiṭra"; toevlucht in nood', page: 77 },
        { label: 'Verstand', sub: 'elk schepsel heeft een Schepper; nadenken over de schepping', page: 78 },
        { label: 'Waarneming', sub: 'verhoorde smeekbeden; wonderen van de profeten', page: 81 }
      ]
    },
    {
      type: 'steps',
      title: 'Het verstandsbewijs in aṭ-Ṭūr',
      intro: '"Of zijn zij uit het niets geschapen, of zijn zij zelf de scheppers?" (aṭ-Ṭūr 52:35)',
      nodes: [
        { label: 'Geschapen zonder schepper?', sub: 'onmogelijk: het niets schept niet', page: 79 },
        { label: 'Zichzelf geschapen?', sub: 'onmogelijk: niemand heeft dat ooit beweerd', page: 79 },
        { label: 'Dus is er een Schepper', sub: 'Allah, de Heer der werelden', page: 79 }
      ]
    }
  ],
  sections: [
    { title: 'De twee pijlers', text: 'Tawḥīd bestaat alleen met ontkennen en bevestigen: aanbidding ontkennen voor alles naast Allah, en die bevestigen voor Allah alleen.', more: 'Ash-Shinqīṭī: "lā ilāha illā llāh" bestaat uit ontkennen en bevestigen. Het boek legt uit dat "vrijheid van geloof" botst met tawḥīd, omdat zij het verwerpen van de ṭāghūt niet kent (p. 67).', page: 65 },
    { title: 'Soorten tawḥīd en rubūbiyya', text: 'Er zijn drie soorten: rubūbiyya, ulūhiyya, en de namen en eigenschappen. Rubūbiyya is Allah alleen erkennen in scheppen, bezitten en regelen.', more: 'Scheppen uit het niets is alleen aan Allah; wat een mens "maakt" is een omzetting van vorm (p. 69). Al deze betekenissen leiden naar het aanbidden van Allah (p. 71).', page: 68 },
    { title: 'Erkenning door de ongelovigen', text: 'Alle schepselen erkennen rubūbiyya, zelfs de ongelovigen, de polytheïsten en Iblīs; maar dat maakte hen geen moslim.', more: 'Ibn al-Qayyim: tawḥīd is niet alleen erkennen dat er geen schepper is dan Allah en dat Hij de Heer van alles is; de afgodendienaars erkenden dat ook, en toch waren zij polytheïsten.', page: 72 },
    { title: 'Effect op het geloof', text: 'Wie weet dat Allah schept, bezit en regelt, gaat Hem liefhebben, eren, op Hem vertrouwen, bij Hem toevlucht zoeken en tevreden zijn met Zijn beschikking.', more: '', page: 74 },
    { title: 'Het bewijs van de fiṭra', text: 'Ieder schepsel gelooft van nature in de Schepper. Een teken daarvan is dat de mens in nood naar Allah vlucht.', more: 'De Profeet ﷺ zei: "ieder kind wordt geboren met de fiṭra ..." en hij zei niet "of zijn ouders maken er een moslim van", want het kind is van nature moslim.', page: 77 },
    { title: 'Het bewijs van het verstand', text: 'Elk schepsel heeft een Schepper: het is niet uit het niets ontstaan en heeft zichzelf niet gemaakt, dus is er een Schepper.', more: 'Ook nadenken over hemel, aarde, zeeën en planten hoort hierbij. Ash-Shāfiʿī wees op het blad van de moerbeiboom: één smaak, maar de zijderups maakt er zijde van, de bij honing, de geit mest en de gazelle muskus (p. 80).', page: 78 },
    { title: 'Het bewijs van de waarneming', text: 'Op twee manieren: Allah verhoort wie oprecht bij Hem toevlucht zoekt, en de wonderen van de profeten gaan het menselijk vermogen te boven.', more: 'Zoals het splijten van de zee voor Mūsā, het tot leven wekken van doden met Allahs toestemming door ʿĪsā, en het splijten van de maan voor Muḥammad ﷺ.', page: 81 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'De twee pijlers van tawḥīd', items: ['ontkennen (an-nafy)', 'bevestigen (al-ithbāt)'], page: 65, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten tawḥīd', items: ['tawḥīd ar-rubūbiyya', 'tawḥīd al-ulūhiyya', 'tawḥīd van de namen en eigenschappen'], page: 68, origin: 'boek' },
    { kind: 'definitie', title: 'Tawḥīd ar-rubūbiyya', items: ['Allah alleen de daden toekennen die Hem eigen zijn: scheppen, bezitten en regelen.'], page: 68, origin: 'boek' },
    { kind: 'onderscheid', title: 'Scheppen door Allah en "maken" door een mens', items: ['Allah: uit het niets laten ontstaan.', 'Mens: van vorm veranderen, gebonden aan middelen.'], page: 69, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Rubūbiyya alleen is niet genoeg', items: ['De ongelovigen erkenden rubūbiyya en werden geen moslim.', 'Rubūbiyya vraagt om ulūhiyya.'], page: 73, origin: 'boek' },
    { kind: 'opsomming', title: 'Bewijzen buiten de openbaring', items: ['fiṭra', 'verstand', 'waarneming'], page: 77, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De twee pijlers: ontkennen (de ṭāghūt verwerpen) en bevestigen (geloven in Allah).',
    'Soorten tawḥīd: rubūbiyya, ulūhiyya, namen en eigenschappen.',
    'Rubūbiyya: Allah alleen erkennen in scheppen, bezitten en regelen.',
    'De ongelovigen erkenden rubūbiyya, maar dat was niet genoeg.',
    'Effect: liefde, ontzag, vertrouwen, hulp zoeken, berouw, overgave, vrees, nadenken, oprechtheid, tevredenheid.',
    'Bewijzen buiten de openbaring: fiṭra, verstand, waarneming.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat zijn de twee pijlers van tawḥīd?', options: ['vrees en hoop', 'ontkennen en bevestigen', 'woord en daad', 'gebed en zakāt'], answer: 1, explain: 'Dat is de betekenis van "lā ilāha illā llāh".', page: 65 },
    { type: 'tf', q: 'Wie aanbidding voor Allah bevestigt zonder te geloven dat aanbidding van anderen vals is, heeft tawḥīd.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Ontkennen en bevestigen zijn allebei nodig.', page: 65 },
    { type: 'mc', q: 'Welk deel van an-Naḥl 16:36 is het ontkennen?', options: ['"aanbid Allah"', '"vermijd de ṭāghūt"', '"Wij hebben gezonden"', '"in iedere gemeenschap"'], answer: 1, explain: 'Vermijd de ṭāghūt = ontkennen.', page: 66 },
    { type: 'mc', q: 'Wat zijn de kerndaden van rubūbiyya?', options: ['bidden, vasten, bedevaart', 'scheppen, bezitten, regelen', 'liefde, vrees, hoop', 'horen, zien, weten'], answer: 1, explain: 'Daarbij horen ook voorzien, leven geven en doen sterven.', page: 68 },
    { type: 'mc', q: 'Hoe beantwoordt het boek "de beste der scheppers" (al-Muʾminūn 23:14)?', options: ['de mens schept ook uit het niets', 'wat een mens "maakt" is een omzetting van vorm, gebonden aan middelen', 'het vers is opgeheven', 'het gaat over engelen'], answer: 1, explain: 'Zoals klei die een kan wordt.', page: 69 },
    { type: 'tf', q: 'Doordat de ongelovigen rubūbiyya erkenden, werden zij moslim.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Rubūbiyya alleen is niet genoeg (al-Bayyina 98:6).', page: 73 },
    { type: 'mc', q: 'Welke bewijzen noemt het boek buiten de openbaring?', options: ['Koran, Sunna, consensus', 'fiṭra, verstand, waarneming', 'dromen, inspiratie, intuïtie', 'geschiedenis, taal, wetenschap'], answer: 1, explain: 'Zo staat het in het boek.', page: 77 },
    { type: 'mc', q: 'Waarom staat in de hadith over de fiṭra niet "of maken er een moslim van"?', options: ['het is vergeten', 'het kind is van nature moslim', 'islam wordt niet geërfd', 'de hadith is ingekort'], answer: 1, explain: 'Het erkent van nature het tawḥīd.', page: 77 },
    { type: 'mc', q: 'Wie zei "mijn hart vloog bijna weg" bij het horen van aṭ-Ṭūr?', options: ['Abū Hurayra', 'Jubayr ibn Muṭʿim', 'Muʿādh ibn Jabal', 'ash-Shāfiʿī'], answer: 1, explain: 'Al-Bukhārī.', page: 79 }
  ]),
  note: 'Oefeningen van het boek op p. 67, 76 en 83. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-aqeedah', chapter: '17', unit: 4, ar, nl }
