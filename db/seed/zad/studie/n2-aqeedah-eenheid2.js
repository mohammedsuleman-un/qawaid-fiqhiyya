// Hoofdstukkaart bij العقيدة (٢), eenheid 2: العبادة (lessen 5–6, boek p. 27–35).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek.
// Deze eenheid noemt geen hadith; wel uitspraken van geleerden.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٢)، سلسلة زاد العلمية',
  pages: '27–35',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlAqeedah/page/n{p}/mode/1up'
}

const PERSONS = [
  ['ibn-taymiyya', 'text', [29, 32], 'نقل الكتاب تعريفه للعبادة: «اسم جامع لكل ما يحبه الله ويرضاه...»، وقوله: العبادة تجمع كمال المحبة وكمال الذل.', 'Het boek citeert zijn definitie van aanbidding ("een verzamelnaam voor alles wat Allah liefheeft en waarmee Hij tevreden is ...") en: aanbidding verenigt volmaakte liefde en volmaakte nederigheid.'],
  ['ash-shinqiti', 'text', [29], 'رد على تفسير بعض الزنادقة لآية الحجر ٩٩ بأن العبادات تسقط عمن وصل.', 'Weerlegde de uitleg van sommige ketters van al-Ḥijr 15:99 dat de aanbidding vervalt voor wie "aangekomen" is.'],
  ['ibn-al-qayyim', 'text', [32], 'ذكر مراتب الذل الأربع، وأن التعبد آخر مراتب الحب.', 'Noemde de vier rangen van nederigheid, en dat aanbidding de hoogste rang van liefde is.'],
  ['al-fudayl-ibn-iyad', 'text', [35], 'فسر ﴿أحسن عملا﴾ بقوله: أخلصه وأصوبه.', 'Legde "het beste in daden" (Hūd 11:7) uit als: het oprechtste en het juiste.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'العبادة',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'تعريف العبادة ومنزلتها، وقسماها (الكونية والشرعية)، وركناها (كمال الذل وكمال المحبة)، وشروط صحتها وقبولها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'كما في المخطط في صفحة ٣٤ من الكتاب.',
    root: { label: 'العبادة', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'تعريفها ومنزلتها', sub: 'الدرس ٥', page: 29, children: ['لغة: الطاعة مع الخضوع والتذلل', 'الغاية من الخلق', 'وصف صفوة الخلق'] },
      { label: 'أقسامها', sub: 'الدرس ٦', page: 31, children: ['كونية', 'شرعية'] },
      { label: 'أركانها', sub: 'الدرس ٦', page: 31, children: ['كمال الذل والخضوع', 'كمال المحبة'] },
      { label: 'شروطها', sub: 'الدرس ٦', page: 34, children: ['معرفة المعبود', 'معرفة دينه', 'للقبول: الإخلاص والمتابعة'] }
    ]
  },
  points: [
    { text: 'العبادة لغة: الطاعة مع الخضوع والتذلل؛ واصطلاحًا: الانقياد والخضوع لله على وجه التقرب إليه بما شرع مع المحبة والتعظيم.', page: 29 },
    { text: 'وعرفها ابن تيمية بأنها: اسم جامع لكل ما يحبه الله ويرضاه من الأقوال والأعمال الباطنة والظاهرة.', page: 29 },
    { text: 'العبادة قسمان: كونية تشمل جميع الخلق، وشرعية خاصة بمن أطاع الرسل.', page: 31 },
    { text: 'للعبادة ركنان: كمال الذل والخضوع، وكمال المحبة.', page: 31 },
    { text: 'لا تصح العبادة إلا بمعرفة المعبود ومعرفة دينه.', page: 34 },
    { text: 'ولقبولها شرطان: الإخلاص لله، واتباع النبي ﷺ.', page: 35 }
  ],
  terms: [
    { term: 'العبادة', translit: 'al-ʿibāda', meaning: 'لغة: الطاعة مع الخضوع والتذلل.', explanation: 'اصطلاحًا: الانقياد والخضوع لله تعالى على وجه التقرب إليه بما شرع مع المحبة والتعظيم.', notes: [], page: 29 },
    { term: 'الزندقة', translit: 'az-zandaqa', meaning: 'وصف به الشنقيطي تفسير آية الحجر ٩٩ بأن العبادات تسقط عمن وصل إلى المعرفة.', explanation: 'وقال: هذا لا يسمى تأويلا بل يسمى لعبًا.', notes: ['[الحجر: ٩٩]'], page: 29 },
    { term: 'العبادة الكونية', translit: 'al-ʿibāda al-kawniyya', meaning: 'الخضوع لأمر الله الكوني، وهي شاملة لجميع الخلق مؤمنهم وكافرهم.', explanation: 'لا يحمد عليها العبد لأنها بغير فعله واختياره.', notes: ['[مريم: ٩٣]'], page: 31 },
    { term: 'العبادة الشرعية', translit: 'al-ʿibāda ash-sharʿiyya', meaning: 'الخضوع لأمر الله الشرعي، وهي خاصة بمن أطاع الله واتبع الرسل.', explanation: 'يحمد عليها العبد لأنها باختياره.', notes: ['[الفرقان: ٦٣]'], page: 31 },
    { term: 'الذل', translit: 'adh-dhull', meaning: 'الركن الأول: أن يستكين العبد لله ويخضع ويذل له.', explanation: 'وله أربع مراتب عند ابن القيم.', notes: [], page: 31 },
    { term: 'المحبة', translit: 'al-maḥabba', meaning: 'الركن الثاني: كمال المحبة لله، وهي مستلزمة لمتابعة الرسول ﷺ.', explanation: '', notes: ['[آل عمران: ٣١]'], page: 32 },
    { term: 'الإخلاص', translit: 'al-ikhlāṣ', meaning: 'أن يكون العمل لوجه الله.', explanation: 'الشرط الأول لقبول العبادة.', notes: ['[الكهف: ١١٠]'], page: 35 },
    { term: 'المتابعة', translit: 'al-mutābaʿa', meaning: 'أن يكون العمل على هدي النبي ﷺ.', explanation: 'الشرط الثاني لقبول العبادة.', notes: [], page: 35 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'العبادة: أقسامها وأركانها وشروطها',
      intro: 'مخطط الكتاب في صفحة ٣٤.',
      root: { label: 'العبادة', page: 34 },
      nodes: [
        { label: 'أقسامها', children: ['كونية', 'شرعية'], page: 31 },
        { label: 'أركانها', children: ['كمال المحبة', 'كمال الخضوع'], page: 31 },
        { label: 'شروطها', children: ['معرفة المعبود', 'معرفة الدين'], page: 34 }
      ]
    },
    {
      type: 'compare',
      title: 'العبادة الكونية والشرعية',
      intro: 'قسما العبادة.',
      columns: ['الكونية', 'الشرعية'],
      rows: [
        { label: 'الخضوع لـ', cells: ['أمر الله الكوني', 'أمر الله الشرعي'] },
        { label: 'تشمل', cells: ['جميع الخلق: المؤمن والكافر', 'من أطاع الله واتبع الرسل'] },
        { label: 'الحمد عليها', cells: ['لا يحمد عليها؛ لأنها بغير اختياره', 'يحمد عليها؛ لأنها باختياره'] },
        { label: 'الدليل', cells: ['[مريم: ٩٣]', '[الفرقان: ٦٣]'] }
      ],
      page: 31
    },
    {
      type: 'steps',
      title: 'مراتب الذل عند ابن القيم',
      intro: 'إذا اجتمعت كان الذل أكمل.',
      nodes: [
        { label: 'ذل الحاجة والفقر إلى الله', sub: 'مشترك بين جميع الخلق', page: 32 },
        { label: 'ذل الطاعة والعبودية', sub: 'ذل الاختيار، خاص بأهل طاعته، وهو سر العبودية', page: 32 },
        { label: 'ذل المحبة', sub: 'على قدر محبته يكون ذله', page: 32 },
        { label: 'ذل المعصية والجناية', page: 32 }
      ]
    },
    {
      type: 'compare',
      title: 'منشأ ركني العبادة',
      intro: 'مدار العبودية على الحب الكامل والذل التام.',
      columns: ['المحبة', 'الذل'],
      rows: [
        { label: 'منشؤه', cells: ['مشاهدة المنة وفضل الله على العبد', 'مطالعة عيب النفس وكثرة الذنوب والتقصير'] },
        { label: 'يورث', cells: ['الرغبة', 'الخضوع والتذلل والخوف'] }
      ],
      note: '﴿إنهم كانوا يسارعون في الخيرات ويدعوننا رغبا ورهبا﴾ [الأنبياء: ٩٠].',
      page: 33
    }
  ],
  sections: [
    { title: 'تعريف العبادة ومنزلتها', text: 'العبادة الانقياد والخضوع لله على وجه التقرب إليه بما شرع مع المحبة والتعظيم، وهي الغاية العظيمة من الخلق، والمرتبة الشريفة التي يوصف بها صفوة الخلق.', more: 'أمر الله بها نبيه حتى الموت [الحجر: ٩٩]، وحذر من التكبر عنها [غافر: ٦٠]، ووصف بها ملائكته [الأعراف: ٢٠٦] ورسوله في أشرف المقامات [الإسراء: ١].', page: 29 },
    { title: 'رد على من زعم سقوط العبادة', text: 'فسر بعض الزنادقة المدعين للتصوف اليقين في آية الحجر ٩٩ بالمعرفة، وزعموا أن من وصل سقطت عنه التكاليف.', more: 'قال الشنقيطي: «إن تفسير الآية بهذا كفر بالله وزندقة، وخروج عن ملة الإسلام بإجماع المسلمين». وكان النبي ﷺ عابدًا لآخر لحظة في حياته.', page: 29 },
    { title: 'قسما العبادة', text: 'كونية: الخضوع لأمر الله الكوني، يشمل جميع الخلق ولا يحمد عليه العبد. وشرعية: الخضوع لأمر الله الشرعي، خاصة بأهل الطاعة ويحمد عليها.', more: '', page: 31 },
    { title: 'ركنا العبادة', text: 'كمال الذل والخضوع لله، وكمال المحبة له. قال ابن تيمية: «والعبادة تجمع كمال المحبة وكمال الذل، فالعابد محب خاضع».', more: 'وجعل الله اتباع رسوله علامة على صدق المحبة [آل عمران: ٣١]؛ فمن ادعى المحبة بلا متابعة كان كاذبًا.', page: 31 },
    { title: 'شروط العبادة', text: 'لا تصح إلا بمعرفة المعبود ومعرفة دينه، ولا تقبل إلا بالإخلاص لله واتباع النبي ﷺ [الكهف: ١١٠].', more: 'قال الفضيل بن عياض في ﴿أحسن عملا﴾: «أخلصه وأصوبه... والخالص أن يكون لله، والصواب أن يكون على سنة رسول الله ﷺ».', page: 34 }
  ],
  keycards: [
    { kind: 'definitie', title: 'العبادة', items: ['لغة: الطاعة مع الخضوع والتذلل.', 'اصطلاحًا: الانقياد والخضوع لله على وجه التقرب إليه بما شرع مع المحبة والتعظيم.'], page: 29, origin: 'boek' },
    { kind: 'opsomming', title: 'ركنا العبادة', items: ['كمال الذل والخضوع', 'كمال المحبة'], page: 31, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شرطا صحة العبادة', items: ['معرفة المعبود', 'معرفة دينه'], page: 34, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شرطا قبول العبادة', items: ['الإخلاص لله', 'اتباع النبي ﷺ'], page: 35, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'العبادة: الانقياد والخضوع لله على وجه التقرب إليه بما شرع مع المحبة والتعظيم.',
    'قسماها: كونية (لجميع الخلق) وشرعية (لأهل الطاعة).',
    'ركناها: كمال الذل وكمال المحبة.',
    'للذل أربع مراتب: الحاجة، الطاعة، المحبة، المعصية.',
    'شرطا صحتها: معرفة المعبود ومعرفة دينه.',
    'شرطا قبولها: الإخلاص والمتابعة.'
  ],
  quiz: spreadAnswers([
    { type: 'tf', q: 'معنى اليقين في آية الحجر ٩٩: المعرفة التي تسقط بها التكاليف.', options: ['صواب', 'خطأ'], answer: 1, explain: 'رده الشنقيطي، وكان النبي ﷺ عابدًا لآخر لحظة.', page: 29 },
    { type: 'mc', q: 'من أي القسمين عبودية أبي جهل؟', options: ['الشرعية', 'الكونية', 'كلاهما', 'لا شيء منهما'], answer: 1, explain: 'الكونية تشمل المؤمن والكافر [مريم: ٩٣].', page: 31 },
    { type: 'mc', q: 'ما ركنا العبادة؟', options: ['الخوف والرجاء', 'كمال الذل وكمال المحبة', 'العلم والعمل', 'الصلاة والزكاة'], answer: 1, explain: 'كما في الكتاب.', page: 31 },
    { type: 'mc', q: 'ما الذل الذي هو سر العبودية؟', options: ['ذل الحاجة والفقر', 'ذل الطاعة والعبودية', 'ذل المعصية', 'ذل الخوف'], answer: 1, explain: 'ذل الاختيار، خاص بأهل طاعته.', page: 32 },
    { type: 'mc', q: 'ما الدليل على أن المحبة تستلزم المتابعة؟', options: ['[الكهف: ١١٠]', '[آل عمران: ٣١]', '[مريم: ٩٣]', '[الحجر: ٩٩]'], answer: 1, explain: '﴿قل إن كنتم تحبون الله فاتبعوني﴾.', page: 33 },
    { type: 'mc', q: 'ما شرطا قبول العبادة؟', options: ['معرفة المعبود ومعرفة الدين', 'الإخلاص والمتابعة', 'الذل والمحبة', 'الخوف والرجاء'], answer: 1, explain: '[الكهف: ١١٠].', page: 35 },
    { type: 'tf', q: 'العمل الخالص غير الصواب يقبل عند الفضيل بن عياض.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا يقبل حتى يكون خالصًا صوابًا.', page: 35 }
  ]),
  note: 'نشاط الكتاب في صفحة ٣٥.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Aanbidding (ʿibāda)',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'De definitie en de plaats van aanbidding, de twee soorten (kosmisch en wettelijk), de twee pijlers (volmaakte nederigheid en volmaakte liefde) en de voorwaarden voor geldigheid en aanvaarding.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'Zoals het schema op p. 34 van het boek.',
    root: { label: 'Aanbidding', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Definitie en plaats', sub: 'les 5', page: 29, children: ['taal: gehoorzaamheid met onderworpenheid', 'doel van de schepping', 'kenmerk van de besten der schepping'] },
      { label: 'Soorten', sub: 'les 6', page: 31, children: ['kosmisch', 'wettelijk'] },
      { label: 'Pijlers', sub: 'les 6', page: 31, children: ['volmaakte nederigheid', 'volmaakte liefde'] },
      { label: 'Voorwaarden', sub: 'les 6', page: 34, children: ['de Aanbedene kennen', 'Zijn godsdienst kennen', 'voor aanvaarding: oprechtheid en navolging'] }
    ]
  },
  points: [
    { text: 'Aanbidding is taalkundig gehoorzaamheid met onderworpenheid en nederigheid; als vakterm: overgave en onderworpenheid aan Allah om Hem te naderen met wat Hij voorschreef, met liefde en eerbied.', page: 29 },
    { text: 'Ibn Taymiyya: een verzamelnaam voor alles wat Allah liefheeft en waarmee Hij tevreden is, van woorden en daden, innerlijk en uiterlijk.', page: 29 },
    { text: 'Er zijn twee soorten: kosmische aanbidding, die voor alle schepsels geldt, en wettelijke aanbidding, alleen van wie de boodschappers volgt.', page: 31 },
    { text: 'Aanbidding heeft twee pijlers: volmaakte nederigheid en volmaakte liefde.', page: 31 },
    { text: 'Aanbidding is alleen geldig met kennis van de Aanbedene en van Zijn godsdienst.', page: 34 },
    { text: 'Voor aanvaarding zijn er twee voorwaarden: oprechtheid tegenover Allah en het volgen van de Profeet ﷺ.', page: 35 }
  ],
  terms: [
    { term: 'العبادة', translit: 'al-ʿibāda', meaning: 'Aanbidding: taalkundig gehoorzaamheid met onderworpenheid en nederigheid.', explanation: 'Vakterm: overgave en onderworpenheid aan Allah om Hem te naderen met wat Hij voorschreef, met liefde en eerbied.', notes: [], page: 29 },
    { term: 'الزندقة', translit: 'az-zandaqa', meaning: 'Ketterij: zo noemde ash-Shinqīṭī de uitleg dat de aanbidding vervalt voor wie de "kennis" bereikt (al-Ḥijr 15:99).', explanation: 'Hij zei: dat heet geen uitleg (taʾwīl) maar spel.', notes: ['al-Ḥijr 15:99'], page: 29 },
    { term: 'العبادة الكونية', translit: 'al-ʿibāda al-kawniyya', meaning: 'Kosmische aanbidding: onderworpenheid aan Allahs scheppende bevel; geldt voor alle schepsels, gelovig en ongelovig.', explanation: 'Men wordt er niet om geprezen, want het is niet uit eigen keuze.', notes: ['Maryam 19:93'], page: 31 },
    { term: 'العبادة الشرعية', translit: 'al-ʿibāda ash-sharʿiyya', meaning: 'Wettelijke aanbidding: onderworpenheid aan Allahs wet; alleen van wie gehoorzaamt en de boodschappers volgt.', explanation: 'Men wordt er wel om geprezen, want het is uit eigen keuze.', notes: ['al-Furqān 25:63'], page: 31 },
    { term: 'الذل', translit: 'adh-dhull', meaning: 'Nederigheid: de eerste pijler; de dienaar onderwerpt zich aan Allah en vernedert zich voor Hem.', explanation: 'Ibn al-Qayyim noemt vier rangen.', notes: [], page: 31 },
    { term: 'المحبة', translit: 'al-maḥabba', meaning: 'Liefde: de tweede pijler; volmaakte liefde voor Allah, die het volgen van de Boodschapper ﷺ vereist.', explanation: '', notes: ['Āl ʿImrān 3:31'], page: 32 },
    { term: 'الإخلاص', translit: 'al-ikhlāṣ', meaning: 'Oprechtheid: de daad is voor Allahs aangezicht.', explanation: 'Eerste voorwaarde voor aanvaarding.', notes: ['al-Kahf 18:110'], page: 35 },
    { term: 'المتابعة', translit: 'al-mutābaʿa', meaning: 'Navolging: de daad volgt de leiding van de Profeet ﷺ.', explanation: 'Tweede voorwaarde voor aanvaarding.', notes: [], page: 35 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'Aanbidding: soorten, pijlers en voorwaarden',
      intro: 'Het schema van het boek op p. 34.',
      root: { label: 'Aanbidding', page: 34 },
      nodes: [
        { label: 'Soorten', children: ['kosmisch', 'wettelijk'], page: 31 },
        { label: 'Pijlers', children: ['volmaakte liefde', 'volmaakte onderworpenheid'], page: 31 },
        { label: 'Voorwaarden', children: ['de Aanbedene kennen', 'de godsdienst kennen'], page: 34 }
      ]
    },
    {
      type: 'compare',
      title: 'Kosmische en wettelijke aanbidding',
      intro: 'De twee soorten aanbidding.',
      columns: ['Kosmisch', 'Wettelijk'],
      rows: [
        { label: 'Onderworpen aan', cells: ['Allahs scheppende bevel', 'Allahs wet'] },
        { label: 'Geldt voor', cells: ['alle schepsels, gelovig en ongelovig', 'wie gehoorzaamt en de boodschappers volgt'] },
        { label: 'Lof', cells: ['nee: niet uit eigen keuze', 'ja: uit eigen keuze'] },
        { label: 'Bewijs', cells: ['Maryam 19:93', 'al-Furqān 25:63'] }
      ],
      page: 31
    },
    {
      type: 'steps',
      title: 'De rangen van nederigheid volgens Ibn al-Qayyim',
      intro: 'Als ze samenkomen, is de nederigheid het volmaaktst.',
      nodes: [
        { label: 'Nederigheid van behoefte en armoede tegenover Allah', sub: 'gedeeld door alle schepsels', page: 32 },
        { label: 'Nederigheid van gehoorzaamheid en dienaarschap', sub: 'uit eigen keuze, alleen van wie gehoorzaamt: de kern van dienaarschap', page: 32 },
        { label: 'Nederigheid van liefde', sub: 'naar de mate van de liefde', page: 32 },
        { label: 'Nederigheid van zonde en misstap', page: 32 }
      ]
    },
    {
      type: 'compare',
      title: 'Waar de twee pijlers uit voortkomen',
      intro: 'Dienaarschap draait om volmaakte liefde en volledige nederigheid.',
      columns: ['Liefde', 'Nederigheid'],
      rows: [
        { label: 'Komt voort uit', cells: ['het zien van Allahs gunst en goedheid', 'het zien van eigen gebreken, zonden en tekortkomingen'] },
        { label: 'Leidt tot', cells: ['verlangen', 'onderworpenheid en vrees'] }
      ],
      note: '"Zij haastten zich in het goede en riepen Ons aan met verlangen en vrees" (al-Anbiyāʾ 21:90).',
      page: 33
    }
  ],
  sections: [
    { title: 'Definitie en plaats', text: 'Aanbidding is overgave en onderworpenheid aan Allah om Hem te naderen met wat Hij voorschreef, met liefde en eerbied. Het is het grote doel van de schepping en het kenmerk van de besten der schepping.', more: 'Allah droeg Zijn Profeet op Hem te aanbidden tot de dood (al-Ḥijr 15:99), waarschuwde tegen hoogmoed ertegenover (Ghāfir 40:60) en beschreef er Zijn engelen (al-Aʿrāf 7:206) en Zijn Boodschapper mee (al-Isrāʾ 17:1).', page: 29 },
    { title: 'Weerlegging: vervalt aanbidding ooit?', text: 'Sommige ketters die zich soefi noemen, legden "al-yaqīn" in al-Ḥijr 15:99 uit als kennis, en beweerden dat de plichten vervallen voor wie die bereikt.', more: 'Ash-Shinqīṭī: deze uitleg is ongeloof en ketterij en volgens consensus van de moslims buiten de islam. De Profeet ﷺ aanbad Allah tot zijn laatste moment.', page: 29 },
    { title: 'De twee soorten', text: 'Kosmisch: onderworpenheid aan Allahs scheppende bevel, voor alle schepsels en zonder lof. Wettelijk: onderworpenheid aan Allahs wet, van wie gehoorzaamt, en daarvoor wordt men geprezen.', more: '', page: 31 },
    { title: 'De twee pijlers', text: 'Volmaakte nederigheid en onderworpenheid, en volmaakte liefde. Ibn Taymiyya: aanbidding verenigt volmaakte liefde en volmaakte nederigheid; de aanbidder heeft lief en onderwerpt zich.', more: 'Allah maakte het volgen van Zijn Boodschapper het teken van oprechte liefde (Āl ʿImrān 3:31); wie liefde claimt zonder te volgen, liegt.', page: 31 },
    { title: 'De voorwaarden', text: 'Aanbidding is alleen geldig met kennis van de Aanbedene en van Zijn godsdienst, en wordt alleen aanvaard met oprechtheid en het volgen van de Profeet ﷺ (al-Kahf 18:110).', more: 'Al-Fuḍayl ibn ʿIyāḍ over "het beste in daden": het oprechtste en het juiste; oprecht is voor Allah, juist is volgens de Sunna van de Boodschapper ﷺ.', page: 34 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Aanbidding', items: ['Taal: gehoorzaamheid met onderworpenheid en nederigheid.', 'Vakterm: overgave en onderworpenheid aan Allah om Hem te naderen met wat Hij voorschreef, met liefde en eerbied.'], page: 29, origin: 'boek' },
    { kind: 'opsomming', title: 'De twee pijlers', items: ['volmaakte nederigheid en onderworpenheid', 'volmaakte liefde'], page: 31, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden voor geldigheid', items: ['de Aanbedene kennen', 'Zijn godsdienst kennen'], page: 34, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden voor aanvaarding', items: ['oprechtheid tegenover Allah', 'het volgen van de Profeet ﷺ'], page: 35, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Aanbidding: overgave en onderworpenheid aan Allah om Hem te naderen met wat Hij voorschreef, met liefde en eerbied.',
    'Soorten: kosmisch (alle schepsels) en wettelijk (wie gehoorzaamt).',
    'Pijlers: volmaakte nederigheid en volmaakte liefde.',
    'Vier rangen van nederigheid: behoefte, gehoorzaamheid, liefde, zonde.',
    'Geldig met: kennis van de Aanbedene en van Zijn godsdienst.',
    'Aanvaard met: oprechtheid en navolging.'
  ],
  quiz: spreadAnswers([
    { type: 'tf', q: 'Volgens het boek betekent "al-yaqīn" in al-Ḥijr 15:99 de kennis waarna de plichten vervallen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Ash-Shinqīṭī weerlegt dit, en de Profeet ﷺ aanbad tot zijn laatste moment.', page: 29 },
    { type: 'mc', q: 'Tot welke soort aanbidding behoort de onderworpenheid van Abū Jahl?', options: ['wettelijk', 'kosmisch', 'beide', 'geen van beide'], answer: 1, explain: 'Kosmische aanbidding geldt voor gelovige en ongelovige (Maryam 19:93).', page: 31 },
    { type: 'mc', q: 'Wat zijn de twee pijlers van aanbidding?', options: ['vrees en hoop', 'volmaakte nederigheid en volmaakte liefde', 'kennis en daad', 'gebed en zakāt'], answer: 1, explain: 'Zo staat het in het boek.', page: 31 },
    { type: 'mc', q: 'Welke nederigheid is de kern van dienaarschap?', options: ['die van behoefte en armoede', 'die van gehoorzaamheid en dienaarschap', 'die van zonde', 'die van vrees'], answer: 1, explain: 'Nederigheid uit eigen keuze, alleen van wie gehoorzaamt.', page: 32 },
    { type: 'mc', q: 'Welk vers laat zien dat liefde het volgen van de Boodschapper vereist?', options: ['al-Kahf 18:110', 'Āl ʿImrān 3:31', 'Maryam 19:93', 'al-Ḥijr 15:99'], answer: 1, explain: '"Zeg: als jullie Allah liefhebben, volg mij dan."', page: 33 },
    { type: 'mc', q: 'Wat zijn de voorwaarden voor aanvaarding van aanbidding?', options: ['de Aanbedene en de godsdienst kennen', 'oprechtheid en navolging', 'nederigheid en liefde', 'vrees en hoop'], answer: 1, explain: 'Al-Kahf 18:110.', page: 35 },
    { type: 'tf', q: 'Volgens al-Fuḍayl wordt een oprechte maar onjuiste daad aanvaard.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Pas als de daad oprecht én juist is.', page: 35 }
  ]),
  note: 'Oefening van het boek op p. 35. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-aqeedah', chapter: '5', unit: 2, ar, nl }
