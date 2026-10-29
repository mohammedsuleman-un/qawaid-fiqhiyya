// Hoofdstukkaart bij العقيدة (٣), eenheid 3: الإيمان باليوم الآخر وبالقضاء والقدر
// (tweede deel van les 3, les 4 en het eerste deel van les 5; boek p. 25–33).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Het tweede deel van les 5 (nawāqiḍ) staat bij eenheid 4.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٣)، سلسلة زاد العلمية',
  pages: '25–33',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'وتؤمن بالقدر خيره وشره', takhrij: 'في حديث جبريل في صحيح مسلم', note: 'دليل على أن الإيمان بالقدر ركن من أركان الإيمان.', pages: [30], nl: 'en dat je gelooft in de voorbeschikking, het goede en het slechte ervan', nlNote: 'Bewijs dat geloof in de voorbeschikking een pijler van het geloof is.' },
  { narrator: '', text: 'واعلم أن ما أصابك لم يكن ليخطئك، وما أخطأك لم يكن ليصيبك', takhrij: 'أخرجه أحمد وأبو داود، وصححه الألباني', note: 'في حكم الإيمان بالقضاء والقدر.', pages: [30], nl: 'en weet dat wat jou trof, jou niet kon missen, en wat jou miste, jou niet kon treffen', nlNote: 'Bij het oordeel over geloof in de beschikking en de voorbeschikking.' },
  { narrator: '', text: 'كتب الله مقادير الخلائق قبل أن تخلق السماوات والأرض بخمسين ألف سنة', takhrij: 'رواه مسلم', note: 'دليل مرتبة الكتابة.', pages: [31], nl: 'Allah schreef de bepalingen van de schepselen op, vijftigduizend jaar voordat de hemelen en de aarde geschapen werden', nlNote: 'Bewijs voor de rang van het opschrijven.' }
]

const TAKHRIJ_NL = {
  'في حديث جبريل في صحيح مسلم': 'Muslim, in de hadith van Jibrīl',
  'أخرجه أحمد وأبو داود، وصححه الألباني': 'Aḥmad en Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه مسلم': 'Muslim'
}
const NARRATOR_NL = {}

const PERSONS = [
  ['muslim', 'takhrij', [30, 31], 'أخرج حديث جبريل وحديث كتابة المقادير.', 'Nam de hadith van Jibrīl en de hadith over het opschrijven van de bepalingen op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [30], 'أخرج حديث «واعلم أن ما أصابك لم يكن ليخطئك».', 'Nam "weet dat wat jou trof, jou niet kon missen" op.'],
  ['abu-dawud', 'takhrij', [30], 'أخرج حديث «واعلم أن ما أصابك لم يكن ليخطئك».', 'Nam "weet dat wat jou trof, jou niet kon missen" op.'],
  ['al-albani', 'takhrij', [30], 'صحح حديث «واعلم أن ما أصابك لم يكن ليخطئك».', 'Verklaarde "weet dat wat jou trof, jou niet kon missen" authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'الإيمان باليوم الآخر وبالقضاء والقدر',
  subtitle: 'من بقية الدرس الثالث إلى أول الدرس الخامس',
  summary: 'الركن الخامس: الإيمان باليوم الآخر وما يتضمنه وثمراته؛ والركن السادس: الإيمان بالقضاء والقدر، تعريفه وحكمه ومراتبه الأربع، وما لا يجوز في قضاياه، وثمراته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ٢٦ من الكتاب.',
    root: { label: 'اليوم الآخر والقدر', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'اليوم الآخر', sub: 'الدرس ٣', page: 27, children: ['عذاب القبر ونعيمه', 'البعث والحشر', 'الحساب والميزان', 'الجنة والنار'] },
      { label: 'ثمراته', sub: 'الدرس ٣', page: 29, children: ['الحرص على الطاعة', 'التسلية', 'كمال العدل', 'الخوف والرجاء'] },
      { label: 'القضاء والقدر', sub: 'الدرس ٤', page: 29, children: ['التعريف', 'الفرق بينهما', 'الحكم'] },
      { label: 'مراتب القدر', sub: 'الدرس ٥', page: 31, children: ['العلم', 'الكتابة', 'المشيئة', 'الخلق'] },
      { label: 'مسائل وثمرات', sub: 'الدرس ٥', page: 32, children: ['للعبد مشيئة', 'ما لا يجوز', 'التوكل والطمأنينة'] }
    ]
  },
  points: [
    { text: 'اليوم الآخر يوم القيامة الذي يبعث الناس فيه للحساب والجزاء، وسمي بذلك لأنه لا يوم بعده.', page: 27 },
    { text: 'يتضمن الإيمان به الإيمان بكل ما يكون بعد الموت: فتنة القبر وعذابه ونعيمه، والبعث والحشر، والحساب والميزان، والجنة والنار.', page: 27 },
    { text: 'الراجح أن القدر هو الحكم الكلي الإجمالي في الأزل، والقضاء جزئيات ذلك الحكم وتفاصيله ووقوعه.', page: 30 },
    { text: 'الإيمان بالقدر ركن من أركان الإيمان الستة، ومن أنكره كفر وخرج من الملة.', page: 30 },
    { text: 'مراتب القدر أربع: العلم، والكتابة، والإرادة والمشيئة، والخلق.', page: 31 },
    { text: 'للعبد مشيئة واختيار، لكنها غير خارجة عن مشيئة الله [التكوير: ٢٨–٢٩].', page: 32 },
    { text: 'من ثمرات الإيمان بالقدر: الاعتماد على الله عند فعل الأسباب، وترك العجب، والطمأنينة.', page: 33 }
  ],
  terms: [
    { term: 'اليوم الآخر', translit: 'al-yawm al-ākhir', meaning: 'يوم القيامة الذي يبعث الناس فيه للحساب والجزاء.', explanation: 'سمي بذلك لأنه لا يوم بعده؛ يستقر أهل الجنة في منازلهم وأهل النار في منازلهم.', notes: [], page: 27 },
    { term: 'فتنة القبر', translit: 'fitnat al-qabr', meaning: 'سؤال الميت بعد دفنه عن ربه ودينه ونبيه.', explanation: 'وعذاب القبر ونعيمه للروح والبدن جميعًا.', notes: [], page: 27 },
    { term: 'البعث والحشر', translit: 'al-baʿth wa-l-ḥashr', meaning: 'إحياء الموتى من قبورهم وإعادة الأرواح إلى أجسادهم، ثم جمعهم في مكان واحد.', explanation: '', notes: ['[المؤمنون: ١٥–١٦]'], page: 27 },
    { term: 'الميزان', translit: 'al-mīzān', meaning: 'ميزان عظيم حقيقي توزن فيه الأعمال: الحسنات في كفة والسيئات في الأخرى.', explanation: 'من رجحت حسناته فمن أهل الجنة، ومن رجحت سيئاته فمن أهل النار.', notes: ['[الأنبياء: ٤٧]'], page: 28 },
    { term: 'القضاء', translit: 'al-qaḍāʾ', meaning: 'لغة: إحكام الشيء وإتمام الأمر.', explanation: 'شرعًا على الراجح: جزئيات الحكم الكلي وتفاصيله ووقوعه.', notes: [], page: 29 },
    { term: 'القدر', translit: 'al-qadar', meaning: 'لغة: التقدير، أي الإحاطة بمقادير الأمور.', explanation: 'شرعًا على الراجح: الحكم الكلي الإجمالي في الأزل.', notes: [], page: 29 },
    { term: 'اللوح المحفوظ', translit: 'al-lawḥ al-maḥfūẓ', meaning: 'الذي كتب الله فيه مقادير جميع الخلائق.', explanation: 'مرتبة الكتابة.', notes: ['[الحج: ٧٠]'], page: 31 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'ما يتضمنه الإيمان باليوم الآخر',
      intro: 'الإيمان بكل ما يكون بعد الموت، ومنه:',
      nodes: [
        { label: 'عذاب القبر ونعيمه وفتنته', sub: 'للروح والبدن جميعًا', page: 27 },
        { label: 'البعث والحشر', sub: '[المؤمنون: ١٥–١٦]', page: 27 },
        { label: 'الحساب والميزان', sub: '[الأنبياء: ٤٧]', page: 28 },
        { label: 'الجنة والنار', sub: 'مخلوقتان لا تفنيان', page: 28 }
      ]
    },
    {
      type: 'compare',
      title: 'القضاء والقدر',
      intro: 'على القول الذي رجحه الكتاب.',
      columns: ['القدر', 'القضاء'],
      rows: [
        { label: 'لغة', cells: ['التقدير والإحاطة بالمقادير', 'إحكام الشيء وإتمام الأمر'] },
        { label: 'شرعًا', cells: ['الحكم الكلي الإجمالي في الأزل', 'جزئيات ذلك الحكم وتفاصيله ووقوعه'] },
        { label: 'مثال', cells: ['يقدر الله أن يكون الشيء في وقته', 'فإذا جاء الوقت ووقع فهذا قضاء'] }
      ],
      note: 'ومن أهل العلم من قال: هما بمعنى واحد.',
      page: 30
    },
    {
      type: 'steps',
      title: 'مراتب الإيمان بالقدر',
      intro: '«علم كتابة مولانا مشيئته ... وخلقه وهو إيجاد وتكوين».',
      nodes: [
        { label: 'العلم', sub: 'علم جميع خلقه قبل أن يخلقهم [الحشر: ٢٢]', page: 31 },
        { label: 'الكتابة', sub: 'كتب المقادير في اللوح المحفوظ [الحج: ٧٠]', page: 31 },
        { label: 'الإرادة والمشيئة', sub: 'ما شاء الله كان وما لم يشأ لم يكن [التكوير: ٢٩]', page: 31 },
        { label: 'الخلق', sub: 'الله خالق كل شيء [الرعد: ١٦]', page: 31 }
      ]
    },
    {
      type: 'cards',
      title: 'أمور لا تجوز في قضايا القدر',
      intro: 'أسلم الناس في القدر أمسكهم عنه.',
      nodes: [
        { label: 'الخوض فيه بالباطل', sub: 'بلا علم ولا دليل', page: 32 },
        { label: 'الاعتماد على العقل وحده', sub: 'بعيدًا عن هدي الكتاب والسنة', page: 32 },
        { label: 'البحث عن سر القدر', sub: 'لم يطلع عليه ملك مقرب ولا نبي مرسل', page: 32 },
        { label: 'الأسئلة الاعتراضية', sub: 'لماذا أغنى الله فلانًا وأفقر فلانًا؟', page: 32 }
      ]
    },
    {
      type: 'compare',
      title: 'ثمرات الإيمان باليوم الآخر وبالقدر',
      intro: 'كما في الكتاب.',
      columns: ['اليوم الآخر', 'القدر'],
      rows: [
        { label: '١', cells: ['الحرص على الطاعة والبعد عن المعصية', 'الاعتماد على الله عند فعل الأسباب'] },
        { label: '٢', cells: ['تسلية المؤمن عما يفوته في الدنيا', 'ألا يعجب المرء بنفسه عند حصول مراده'] },
        { label: '٣', cells: ['استشعار كمال عدل الله', 'الطمأنينة بما يجري من أقدار الله'] },
        { label: '٤', cells: ['ازدياد الخوف والخشية والرجاء', '—'] }
      ],
      page: 29
    }
  ],
  sections: [
    { title: 'الإيمان باليوم الآخر', text: 'التصديق الجازم بوقوعه، فيؤمن بأن الله يبعث الناس من القبور ثم يحاسبهم ويجازيهم.', more: 'ومن أسمائه: الواقعة، الحاقة، القارعة، الراجفة، الصاخة، الفزع الأكبر، يوم الحساب، يوم الدين.', page: 27 },
    { title: 'الحساب والجنة والنار', text: 'أهل التوحيد والطاعة حسابهم يسير، وأهل الشرك والعصيان حسابهم عسير. والجنة والنار مخلوقتان لا تفنيان؛ فمن شاء الله إلى الجنة بفضله ومن شاء إلى النار بعدله.', more: '[آل عمران: ١٣٣]، [البقرة: ٢٤].', page: 28 },
    { title: 'اليوم الآخر والملاحدة', text: 'في إثبات اليوم الآخر أعظم التوجيه للملاحدة: لو لم يوجد إله ولا حساب ولا عقاب لخربت الدنيا، ولجنى الناس بعضهم على بعض.', more: '[المؤمنون: ١١٥].', page: 29 },
    { title: 'حكم الإيمان بالقدر', text: 'ركن من أركان الإيمان الستة بدلالة القرآن والسنة والإجماع، ومن أنكره كفر بالله وخرج من الملة.', more: '[الأحزاب: ٣٨]، [الأنفال: ٤٢]، [القمر: ٤٩]. وكانت العرب في الجاهلية تعرف القدر ولا تنكره.', page: 30 },
    { title: 'مشيئة العبد', text: 'للعبد مشيئة واختيار [التكوير: ٢٨]، لكن مشيئته وقدرته غير خارجة عن قدرة الله ومشيئته [التكوير: ٢٩].', more: 'قال بعض السلف: تفكرت في القدر فعلمت أن أسلم الناس أمسكهم عنه، وأضل الناس فيه أكثرهم خوضًا فيه.', page: 32 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'ما يتضمنه الإيمان باليوم الآخر', items: ['فتنة القبر وعذابه ونعيمه', 'البعث والحشر', 'الحساب والميزان', 'الجنة والنار'], page: 27, origin: 'boek' },
    { kind: 'onderscheid', title: 'القدر والقضاء (الراجح)', items: ['القدر: الحكم الكلي الإجمالي في الأزل.', 'القضاء: جزئيات ذلك الحكم وتفاصيله ووقوعه.'], page: 30, origin: 'boek' },
    { kind: 'opsomming', title: 'مراتب القدر', items: ['العلم', 'الكتابة', 'الإرادة والمشيئة', 'الخلق'], page: 31, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات الإيمان بالقدر', items: ['الاعتماد على الله مع فعل الأسباب', 'ترك العجب بالنفس', 'الطمأنينة والراحة النفسية'], page: 33, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'اليوم الآخر: لا يوم بعده.',
    'يتضمن: القبر، البعث والحشر، الحساب والميزان، الجنة والنار.',
    'القدر: الحكم الكلي في الأزل؛ القضاء: وقوعه وتفاصيله.',
    'من أنكر القدر كفر.',
    'المراتب: العلم، الكتابة، المشيئة، الخلق.',
    'للعبد مشيئة تحت مشيئة الله.',
    'لا يجوز الخوض في القدر بالباطل ولا الاعتراض.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'لماذا سمي اليوم الآخر بهذا الاسم؟', options: ['لأنه لا يوم بعده', 'لأنه آخر أيام الأسبوع', 'لأنه يأتي بعد الموت مباشرة', 'لأنه آخر ما يتعلمه المسلم'], answer: 0, explain: 'يستقر فيه أهل الجنة وأهل النار في منازلهم.', page: 27 },
    { type: 'tf', q: 'عذاب القبر ونعيمه للروح فقط.', options: ['صواب', 'خطأ'], answer: 1, explain: 'للروح والبدن جميعًا.', page: 27 },
    { type: 'mc', q: 'ما القول الراجح في الفرق بين القضاء والقدر؟', options: ['القدر الحكم الكلي في الأزل، والقضاء تفاصيله ووقوعه', 'لا فرق بينهما', 'القضاء الحكم الكلي، والقدر وقوعه', 'القدر للشر خاصة'], answer: 0, explain: 'وهذا القول هو الراجح في الكتاب.', page: 30 },
    { type: 'mc', q: 'ما حكم من أنكر الإيمان بالقدر؟', options: ['كفر وخرج من الملة', 'فاسق فقط', 'مبتدع غير كافر', 'لا شيء عليه'], answer: 0, explain: 'لأنه ركن من أركان الإيمان الستة.', page: 30 },
    { type: 'mc', q: 'ما المرتبة الثانية من مراتب القدر؟', options: ['الكتابة', 'العلم', 'المشيئة', 'الخلق'], answer: 0, explain: 'كتب الله مقادير الخلائق في اللوح المحفوظ.', page: 31 },
    { type: 'tf', q: 'ليس للعبد مشيئة ولا اختيار.', options: ['صواب', 'خطأ'], answer: 1, explain: 'له مشيئة [التكوير: ٢٨] لكنها تحت مشيئة الله [التكوير: ٢٩].', page: 32 },
    { type: 'mc', q: 'أي هذه لا يجوز في قضايا القدر؟', options: ['الأسئلة الاعتراضية تعنتًا', 'الإيمان بالمراتب الأربع', 'الأخذ بالأسباب', 'الرضا بما قدر الله'], answer: 0, explain: 'كقول: لماذا أغنى الله فلانًا وأفقر فلانًا؟', page: 32 },
    { type: 'mc', q: 'ما ثمرة الإيمان بالقدر عند حصول المراد؟', options: ['ألا يعجب المرء بنفسه', 'أن يترك الأسباب', 'أن يعتمد على السبب', 'أن يقلق'], answer: 0, explain: 'لأن حصوله نعمة من الله.', page: 33 }
  ]),
  note: 'نشاط الكتاب في صفحة ٣٣ (مع الوحدة الثانية). وبقية الدرس الخامس (نواقض التوحيد) في الوحدة الرابعة.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Geloof in de Laatste Dag en de voorbeschikking',
  subtitle: 'Van het tweede deel van les 3 tot het begin van les 5',
  summary: 'De vijfde pijler: geloof in de Laatste Dag, wat het inhoudt en wat het oplevert. De zesde pijler: geloof in de beschikking en de voorbeschikking (al-qaḍāʾ wa-l-qadar), met de definitie, het oordeel, de vier rangen, wat niet mag en de vruchten.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (3), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen zoals op p. 26 van het boek.',
    root: { label: 'Laatste Dag en voorbeschikking', sub: 'Eenheid 3' },
    nodes: [
      { label: 'De Laatste Dag', sub: 'les 3', page: 27, children: ['straf en zegen in het graf', 'opwekking en verzameling', 'afrekening en weegschaal', 'Paradijs en Vuur'] },
      { label: 'Vruchten', sub: 'les 3', page: 29, children: ['ijver in gehoorzaamheid', 'troost', 'Allahs volmaakte rechtvaardigheid', 'vrees en hoop'] },
      { label: 'Qaḍāʾ en qadar', sub: 'les 4', page: 29, children: ['definitie', 'het verschil', 'het oordeel'] },
      { label: 'De rangen', sub: 'les 5', page: 31, children: ['kennis', 'opschrijven', 'wil', 'schepping'] },
      { label: 'Kwesties en vruchten', sub: 'les 5', page: 32, children: ['de mens heeft een wil', 'wat niet mag', 'godsvertrouwen en rust'] }
    ]
  },
  points: [
    { text: 'De Laatste Dag is de Dag van de Opstanding, waarop de mensen worden opgewekt voor afrekening en vergelding; zo genoemd omdat er geen dag na komt.', page: 27 },
    { text: 'Geloof erin omvat alles wat na de dood komt: de beproeving, straf en zegen in het graf, de opwekking en verzameling, de afrekening en de weegschaal, het Paradijs en het Vuur.', page: 27 },
    { text: 'Volgens de sterkste opvatting is qadar het algemene besluit in de eeuwigheid (azal), en qaḍāʾ de details en het plaatsvinden ervan.', page: 30 },
    { text: 'Geloof in de voorbeschikking is een van de zes pijlers van het geloof; wie het ontkent, is ongelovig en buiten de islam.', page: 30 },
    { text: 'De voorbeschikking heeft vier rangen: kennis, opschrijven, wil, en schepping.', page: 31 },
    { text: 'De mens heeft een wil en een keuze, maar die valt niet buiten Allahs wil (at-Takwīr 81:28–29).', page: 32 },
    { text: 'Vruchten: vertrouwen op Allah bij het gebruiken van middelen, geen zelfingenomenheid, en innerlijke rust.', page: 33 }
  ],
  terms: [
    { term: 'اليوم الآخر', translit: 'al-yawm al-ākhir', meaning: 'De Laatste Dag: de Dag van de Opstanding, waarop de mensen worden opgewekt voor afrekening en vergelding.', explanation: 'Zo genoemd omdat er geen dag na komt: de bewoners van het Paradijs en van het Vuur nemen dan hun plaats in.', notes: [], page: 27 },
    { term: 'فتنة القبر', translit: 'fitnat al-qabr', meaning: 'De beproeving van het graf: de dode wordt na de begrafenis ondervraagd over zijn Heer, godsdienst en profeet.', explanation: 'Straf en zegen in het graf treffen ziel en lichaam samen.', notes: [], page: 27 },
    { term: 'البعث والحشر', translit: 'al-baʿth wa-l-ḥashr', meaning: 'Opwekking en verzameling: de doden worden uit hun graven tot leven gewekt, de zielen keren terug in de lichamen, en allen worden op één plaats verzameld.', explanation: '', notes: ['al-Muʾminūn 23:15–16'], page: 27 },
    { term: 'الميزان', translit: 'al-mīzān', meaning: 'De weegschaal: een werkelijke, enorme weegschaal waarop de daden worden gewogen, de goede in de ene schaal en de slechte in de andere.', explanation: 'Wiens goede daden zwaarder wegen, hoort bij het Paradijs; wiens slechte daden zwaarder wegen, bij het Vuur.', notes: ['al-Anbiyāʾ 21:47'], page: 28 },
    { term: 'القضاء', translit: 'al-qaḍāʾ', meaning: 'Beschikking. Taal: iets vastleggen en een zaak voltooien.', explanation: 'Religieus, volgens de sterkste opvatting: de details van het besluit en het plaatsvinden ervan.', notes: [], page: 29 },
    { term: 'القدر', translit: 'al-qadar', meaning: 'Voorbeschikking. Taal: bepalen, de maat van de dingen omvatten.', explanation: 'Religieus, volgens de sterkste opvatting: het algemene besluit in de eeuwigheid.', notes: [], page: 29 },
    { term: 'اللوح المحفوظ', translit: 'al-lawḥ al-maḥfūẓ', meaning: 'De Bewaarde Tafel, waarin Allah de bepalingen van alle schepselen opschreef.', explanation: 'De rang van het opschrijven.', notes: ['al-Ḥajj 22:70'], page: 31 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Wat geloof in de Laatste Dag inhoudt',
      intro: 'Geloof in alles wat na de dood komt, waaronder:',
      nodes: [
        { label: 'Straf, zegen en beproeving in het graf', sub: 'voor ziel en lichaam samen', page: 27 },
        { label: 'Opwekking en verzameling', sub: 'al-Muʾminūn 23:15–16', page: 27 },
        { label: 'Afrekening en weegschaal', sub: 'al-Anbiyāʾ 21:47', page: 28 },
        { label: 'Paradijs en Vuur', sub: 'geschapen en vergaan niet', page: 28 }
      ]
    },
    {
      type: 'compare',
      title: 'Qadar en qaḍāʾ',
      intro: 'Volgens de opvatting die het boek de sterkste noemt.',
      columns: ['Qadar', 'Qaḍāʾ'],
      rows: [
        { label: 'Taal', cells: ['bepalen, de maat omvatten', 'vastleggen en voltooien'] },
        { label: 'Religieus', cells: ['het algemene besluit in de eeuwigheid', 'de details en het plaatsvinden ervan'] },
        { label: 'Voorbeeld', cells: ['Allah bepaalt dat iets op zijn tijd gebeurt', 'als die tijd komt en het gebeurt, is dat qaḍāʾ'] }
      ],
      note: 'Sommige geleerden zeggen dat beide hetzelfde betekenen.',
      page: 30
    },
    {
      type: 'steps',
      title: 'De rangen van de voorbeschikking',
      intro: 'Een geleerde vatte ze samen in één dichtregel.',
      nodes: [
        { label: 'Kennis', sub: 'Allah kende alle schepselen voordat Hij ze schiep (al-Ḥashr 59:22)', page: 31 },
        { label: 'Opschrijven', sub: 'in de Bewaarde Tafel (al-Ḥajj 22:70)', page: 31 },
        { label: 'Wil', sub: 'wat Allah wil, gebeurt; wat Hij niet wil, gebeurt niet (at-Takwīr 81:29)', page: 31 },
        { label: 'Schepping', sub: 'Allah is de Schepper van alles (ar-Raʿd 13:16)', page: 31 }
      ]
    },
    {
      type: 'cards',
      title: 'Wat niet mag bij de voorbeschikking',
      intro: 'Wie zich er het meest van onthoudt, blijft het veiligst.',
      nodes: [
        { label: 'Er zonder kennis over twisten', sub: 'zonder kennis of bewijs', page: 32 },
        { label: 'Alleen op het verstand steunen', sub: 'los van Koran en Sunna', page: 32 },
        { label: 'Het geheim ervan zoeken', sub: 'geen engel en geen profeet kreeg er inzage in', page: 32 },
        { label: 'Tegenwerpingen maken', sub: 'waarom maakte Allah de een rijk en de ander arm?', page: 32 }
      ]
    },
    {
      type: 'compare',
      title: 'Vruchten van het geloof in de Laatste Dag en de voorbeschikking',
      intro: 'Zoals in het boek.',
      columns: ['Laatste Dag', 'Voorbeschikking'],
      rows: [
        { label: '1', cells: ['ijver in gehoorzaamheid en afstand van zonde', 'op Allah vertrouwen bij het gebruiken van middelen'] },
        { label: '2', cells: ['troost voor wat men in deze wereld mist', 'niet zelfingenomen worden als iets lukt'] },
        { label: '3', cells: ['Allahs volmaakte rechtvaardigheid beseffen', 'rust bij wat Allah beschikt'] },
        { label: '4', cells: ['meer vrees, ontzag en hoop', '—'] }
      ],
      page: 29
    }
  ],
  sections: [
    { title: 'Geloof in de Laatste Dag', text: 'Vast geloven dat die dag komt: dat Allah de mensen uit hun graven opwekt, met hen afrekent en hen vergeldt.', more: 'Enkele namen ervan: al-Wāqiʿa, al-Ḥāqqa, al-Qāriʿa, ar-Rājifa, aṣ-Ṣākhkha, de grootste schrik, de Dag van de Afrekening, de Dag van het Oordeel.', page: 27 },
    { title: 'Afrekening, Paradijs en Vuur', text: 'Wie tawḥīd en gehoorzaamheid had, krijgt een lichte afrekening; wie shirk en ongehoorzaamheid had, een zware. Paradijs en Vuur zijn geschapen en vergaan niet; Allah brengt wie Hij wil uit gunst naar het Paradijs en wie Hij wil uit rechtvaardigheid naar het Vuur.', more: 'Āl ʿImrān 3:133; al-Baqara 2:24.', page: 28 },
    { title: 'De Laatste Dag en het atheïsme', text: 'Het bestaan van de Laatste Dag is een sterk argument tegenover atheïsten: zonder God, afrekening en straf zou de wereld verwoest raken en zouden mensen elkaar onrecht aandoen.', more: 'al-Muʾminūn 23:115.', page: 29 },
    { title: 'Het oordeel over geloof in de voorbeschikking', text: 'Een van de zes pijlers van het geloof, volgens Koran, Sunna en consensus; wie het ontkent, is ongelovig en buiten de islam.', more: 'al-Aḥzāb 33:38; al-Anfāl 8:42; al-Qamar 54:49. Ook de Arabieren van vóór de islam kenden de voorbeschikking en ontkenden haar niet.', page: 30 },
    { title: 'De wil van de mens', text: 'De mens heeft een wil en een keuze (at-Takwīr 81:28), maar zijn wil en vermogen vallen niet buiten Allahs vermogen en wil (81:29).', more: 'Een van de vromen van vroeger: ik dacht na over de voorbeschikking en zag dat wie zich er het meest van onthoudt het veiligst is, en wie er het meest in duikt het meest dwaalt.', page: 32 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Geloof in de Laatste Dag omvat', items: ['beproeving, straf en zegen in het graf', 'opwekking en verzameling', 'afrekening en weegschaal', 'Paradijs en Vuur'], page: 27, origin: 'boek' },
    { kind: 'onderscheid', title: 'Qadar en qaḍāʾ (sterkste opvatting)', items: ['Qadar: het algemene besluit in de eeuwigheid.', 'Qaḍāʾ: de details en het plaatsvinden van dat besluit.'], page: 30, origin: 'boek' },
    { kind: 'opsomming', title: 'De rangen van de voorbeschikking', items: ['kennis', 'opschrijven', 'wil', 'schepping'], page: 31, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van het geloof in de voorbeschikking', items: ['op Allah vertrouwen bij het gebruiken van middelen', 'geen zelfingenomenheid', 'innerlijke rust'], page: 33, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De Laatste Dag: er komt geen dag na.',
    'Omvat: het graf, opwekking en verzameling, afrekening en weegschaal, Paradijs en Vuur.',
    'Qadar: het besluit in de eeuwigheid; qaḍāʾ: het plaatsvinden en de details.',
    'Wie de voorbeschikking ontkent, is ongelovig.',
    'Rangen: kennis, opschrijven, wil, schepping.',
    'De mens heeft een wil, onder Allahs wil.',
    'Niet zonder kennis over de voorbeschikking twisten en geen tegenwerpingen maken.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarom heet de Laatste Dag zo?', options: ['omdat er geen dag na komt', 'omdat het de laatste dag van de week is', 'omdat hij direct na de dood komt', 'omdat het het laatste is wat een moslim leert'], answer: 0, explain: 'Dan nemen de bewoners van Paradijs en Vuur hun plaats in.', page: 27 },
    { type: 'tf', q: 'Straf en zegen in het graf gelden alleen voor de ziel.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Voor ziel en lichaam samen.', page: 27 },
    { type: 'mc', q: 'Wat is volgens de sterkste opvatting het verschil tussen qadar en qaḍāʾ?', options: ['qadar is het besluit in de eeuwigheid, qaḍāʾ het plaatsvinden ervan', 'er is geen verschil', 'qaḍāʾ is het besluit, qadar het plaatsvinden', 'qadar gaat alleen over het slechte'], answer: 0, explain: 'Die opvatting noemt het boek de sterkste.', page: 30 },
    { type: 'mc', q: 'Wat is het oordeel over wie de voorbeschikking ontkent?', options: ['ongelovig en buiten de islam', 'alleen zondig', 'een vernieuwer, maar geen ongelovige', 'geen oordeel'], answer: 0, explain: 'Het is een van de zes pijlers van het geloof.', page: 30 },
    { type: 'mc', q: 'Wat is de tweede rang van de voorbeschikking?', options: ['opschrijven', 'kennis', 'wil', 'schepping'], answer: 0, explain: 'Allah schreef de bepalingen in de Bewaarde Tafel.', page: 31 },
    { type: 'tf', q: 'De mens heeft volgens het boek geen eigen wil.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij heeft een wil (81:28), die onder Allahs wil valt (81:29).', page: 32 },
    { type: 'mc', q: 'Wat mag niet bij de voorbeschikking?', options: ['koppige tegenwerpingen maken', 'in de vier rangen geloven', 'middelen gebruiken', 'tevreden zijn met Allahs beschikking'], answer: 0, explain: 'Zoals: waarom maakte Allah de een rijk en de ander arm?', page: 32 },
    { type: 'mc', q: 'Welke vrucht van dit geloof hoort bij het bereiken van een doel?', options: ['niet zelfingenomen worden', 'de middelen laten varen', 'op het middel zelf vertrouwen', 'onrustig worden'], answer: 0, explain: 'Want het bereiken is een gunst van Allah.', page: 33 }
  ]),
  note: 'Oefening van het boek op p. 33 (samen met eenheid 2). Het tweede deel van les 5 (wat het tawḥīd tenietdoet) staat bij eenheid 4. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n3-aqeedah', chapter: '4', unit: 3, ar, nl }
