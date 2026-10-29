// Hoofdstukkaart bij اللغة العربية (١), eenheid 2: الكلام المفيد ومتعلقاته (lessen 4–12, boek p. 17–57).
// Volgt de eerste وحدة van het boek. Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand.
// Delen van p. 26 en 29 (dualis en meervoud van maqṣūr en mamdūd), les 10 (jāmid en mutaṣarrif), les 11
// (bekend en onbekend onderwerp) en de zinnen met en zonder plaats in de verbuiging (p. 52–54) zijn in het boek
// "alleen ter kennisname". In het boek staat "لنسفعا بالناصية" bij al-ʿAlaq 19; in de muṣḥaf is het vers 15.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (١)، سلسلة زاد العلمية',
  pages: '17–57',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_ArabicLanguage/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'كلمتان خفيفتان على اللسان ... سبحان الله وبحمده، سبحان الله العظيم', takhrij: 'متفق عليه', note: 'شاهد على إطلاق «الكلمة» ويراد بها الكلام الكثير.', pages: [19], nl: 'Twee woorden die licht zijn op de tong ... Glorie zij Allah en lof zij Hem, glorie zij Allah de Geweldige', nlNote: 'Voorbeeld van "woord" (kalima) in de betekenis van een hele uitspraak.' }
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'الكلام المفيد ومتعلقاته',
  subtitle: 'تسعة دروس مجموعة في صفحة واحدة',
  summary: 'الكلمة والكلام والكلم والقول واللفظ، ثم أقسام الكلمة: الاسم وعلاماته وأقسامه من حيث النوع والآخر، والفعل وعلاماته وأقسامه من حيث الصحة والزمان والتصرف والتعدي والفاعل، والحرف، وأخيرًا الجملة الاسمية والفعلية.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'الوحدة الأولى من الكتاب: موضوعات الدروس التسعة.',
    root: { label: 'الكلام المفيد ومتعلقاته', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'الكلام وما يتعلق به', sub: 'الدرس ٤', page: 19, children: ['الكلمة', 'الكلام', 'الكلم', 'القول', 'اللفظ'] },
      { label: 'الاسم', sub: 'الدروس ٥–٧', page: 23, children: ['علاماته', 'المذكر والمؤنث', 'المقصور والمنقوص والممدود والصحيح'] },
      { label: 'الفعل', sub: 'الدروس ٨–١١', page: 32, children: ['علاماته', 'الصحيح والمعتل', 'الماضي والمضارع والأمر', 'اللازم والمتعدي'] },
      { label: 'الحرف والجملة', sub: 'الدرس ١٢', page: 47, children: ['الحرف العامل وغير العامل', 'الجملة الاسمية والفعلية'] }
    ]
  },
  points: [
    { text: 'الكلام ما تركب من كلمتين فأكثر وأفاد فائدة يحسن السكوت عليها.', page: 19 },
    { text: 'أقسام الكلمة ثلاثة: اسم وفعل وحرف، ومنها تتكون الجملة.', page: 23 },
    { text: 'علامات الاسم: التنوين، وأل، والنداء، والجر، والإخبار عنه.', page: 23 },
    { text: 'الاسم المعرب باعتبار آخره: مقصور ومنقوص وممدود وصحيح.', page: 26 },
    { text: 'علامات الفعل: تاء الفاعل، وتاء التأنيث، وياء المخاطبة، ونون التوكيد.', page: 32 },
    { text: 'الماضي والأمر مبنيان دائمًا، والمضارع معرب إلا مع نون النسوة ونون التوكيد.', page: 39 },
    { text: 'الحروف كلها مبنية، ومنها العامل وغير العامل، والمختص بالأسماء أو بالأفعال والمشترك.', page: 47 },
    { text: 'الجملة اسمية إن بدأت باسم، وفعلية إن بدأت بفعل.', page: 50 }
  ],
  terms: [
    { term: 'الكلمة', translit: 'al-kalima', meaning: 'اللفظ الموضوع لمعنى مفرد.', explanation: 'وقد تطلق ويراد بها الكلام الكثير.', notes: [], page: 19 },
    { term: 'الكلام', translit: 'al-kalām', meaning: 'ما تركب من كلمتين فأكثر وأفاد.', explanation: 'يشترط فيه التركيب واللفظ والإفادة.', notes: [], page: 19 },
    { term: 'الكلم', translit: 'al-kalim', meaning: 'ما تكون من ثلاث كلمات فأكثر.', explanation: 'ولا تشترط فيه الإفادة.', notes: [], page: 20 },
    { term: 'القول', translit: 'al-qawl', meaning: 'اللفظ الدال على معنى ولو لم تحصل إفادة.', explanation: 'مفردًا كان أو مركبًا.', notes: [], page: 20 },
    { term: 'اللفظ', translit: 'al-lafẓ', meaning: 'صوت يخرج من الفم يشتمل على بعض الحروف.', explanation: 'ولا يلزم أن يفيد.', notes: [], page: 20 },
    { term: 'الاسم', translit: 'al-ism', meaning: 'ما دل على معنى في نفسه من غير دلالة على الزمان.', explanation: '', notes: [], page: 23 },
    { term: 'الاسم المقصور', translit: 'al-ism al-maqṣūr', meaning: 'اسم معرب منته بألف لازمة.', explanation: 'فتى، مستشفى، هدى.', notes: [], page: 26 },
    { term: 'الاسم المنقوص', translit: 'al-ism al-manqūṣ', meaning: 'اسم معرب آخره ياء لازمة مكسور ما قبلها.', explanation: 'القاضي، المحامي.', notes: [], page: 27 },
    { term: 'الاسم الممدود', translit: 'al-ism al-mamdūd', meaning: 'اسم معرب آخره همزة بعد ألف زائدة.', explanation: 'صحراء، بناء.', notes: [], page: 29 },
    { term: 'الفعل', translit: 'al-fiʿl', meaning: 'ما دل على معنى في نفسه ودل بهيئته على الزمان.', explanation: '', notes: [], page: 32 },
    { term: 'الفعل المعتل', translit: 'al-fiʿl al-muʿtall', meaning: 'ما كان في حروفه الأصلية حرف علة أو اثنان.', explanation: 'وحروف العلة: الألف والواو والياء.', notes: [], page: 34 },
    { term: 'الثقل والتعذر', translit: 'ath-thiql wa-t-taʿadhdhur', meaning: 'الثقل صعوبة النطق بالحركة، والتعذر استحالة ظهورها.', explanation: '', notes: [], page: 37 },
    { term: 'اللازم والمتعدي', translit: 'al-lāzim wa-l-mutaʿaddī', meaning: 'اللازم لا ينصب مفعولًا به، والمتعدي ينصبه.', explanation: '', notes: [], page: 43 },
    { term: 'الحرف', translit: 'al-ḥarf', meaning: 'ما ليس له معنى في نفسه وإنما يظهر معناه في غيره.', explanation: 'والحروف كلها مبنية.', notes: [], page: 47 },
    { term: 'الجملة', translit: 'al-jumla', meaning: 'ما تركب من كلمتين فأكثر وله معنى تام.', explanation: '', notes: [], page: 50 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الكلمة وما يتعلق بها',
      intro: 'كما في الدرس الرابع.',
      columns: ['شرطه', 'مثاله'],
      rows: [
        { label: 'الكلمة', cells: ['لفظ لمعنى مفرد', 'كتاب'] },
        { label: 'الكلام', cells: ['التركيب واللفظ والإفادة', 'الحج عرفة'] },
        { label: 'الكلم', cells: ['ثلاث كلمات فأكثر، ولو لم يفد', 'سوف إلى نذهب'] },
        { label: 'القول', cells: ['لفظ دال على معنى', 'زيد'] },
        { label: 'اللفظ', cells: ['صوت فيه بعض الحروف', 'ظعغ'] }
      ],
      page: 19
    },
    {
      type: 'compare',
      title: 'أقسام المذكر والمؤنث',
      intro: 'كما في الدرس الخامس.',
      columns: ['تعريفه', 'مثاله'],
      rows: [
        { label: 'مذكر حقيقي', cells: ['ذكر من الناس أو الحيوان', 'رجل، جمل'] },
        { label: 'مذكر مجازي', cells: ['يعامل معاملة المذكر وليس منه', 'ليل، باب'] },
        { label: 'مؤنث حقيقي', cells: ['أنثى من الناس أو الحيوان', 'امرأة، ناقة'] },
        { label: 'مؤنث مجازي', cells: ['لا يلد ولا يتناسل', 'شمس، دار'] },
        { label: 'مؤنث معنوي', cells: ['مؤنث بلا علامة تأنيث', 'زينب، بئر'] },
        { label: 'مؤنث لفظي', cells: ['فيه علامة تأنيث ولو كان مذكرًا', 'طلحة، زكرياء'] }
      ],
      page: 24
    },
    {
      type: 'compare',
      title: 'الاسم باعتبار آخره',
      intro: 'كما في الدرسين السادس والسابع.',
      columns: ['آخره', 'إعرابه'],
      rows: [
        { label: 'المقصور', cells: ['ألف لازمة', 'تقدر فيه الحركات الثلاث'] },
        { label: 'المنقوص', cells: ['ياء لازمة مكسور ما قبلها', 'تقدر الضمة والكسرة وتظهر الفتحة'] },
        { label: 'الممدود', cells: ['همزة بعد ألف زائدة', 'بالحركات الظاهرة'] },
        { label: 'الصحيح', cells: ['ليس مقصورًا ولا منقوصًا', 'بالحركات الظاهرة'] }
      ],
      page: 26
    },
    {
      type: 'tree',
      title: 'الفعل الصحيح والمعتل',
      intro: 'كما في الدرس الثامن.',
      root: { label: 'الفعل باعتبار حروفه الأصلية' },
      nodes: [
        { label: 'الصحيح', page: 33, children: ['السالم: جلس', 'المهموز: أخذ، سأل، قرأ', 'المضعف: مدّ، زلزل'] },
        { label: 'المعتل', page: 34, children: ['المثال: وعد', 'الأجوف: قال', 'الناقص: دعا', 'اللفيف المفروق: وعى', 'اللفيف المقرون: روى'] }
      ]
    },
    {
      type: 'compare',
      title: 'الفعل باعتبار الزمان',
      intro: 'كما في الدرس التاسع.',
      columns: ['حكمه', 'يخرج عن الأصل'],
      rows: [
        { label: 'الماضي', cells: ['مبني على الفتح', 'على الضم مع واو الجماعة، وعلى السكون مع ضمير الرفع المتحرك'] },
        { label: 'المضارع', cells: ['معرب: رفع ونصب وجزم', 'يبنى على السكون مع نون النسوة، وعلى الفتح مع نون التوكيد'] },
        { label: 'الأمر', cells: ['مبني على السكون', 'حذف حرف العلة، أو حذف النون، أو الفتح مع نون التوكيد'] }
      ],
      page: 36
    },
    {
      type: 'compare',
      title: 'علامات إعراب المضارع',
      intro: 'كما في الكتاب.',
      columns: ['الرفع', 'النصب', 'الجزم'],
      rows: [
        { label: 'الصحيح الآخر', cells: ['الضمة الظاهرة', 'الفتحة الظاهرة', 'السكون'] },
        { label: 'المعتل بالواو أو الياء', cells: ['ضمة مقدرة للثقل', 'الفتحة الظاهرة', 'حذف حرف العلة'] },
        { label: 'المعتل بالألف', cells: ['ضمة مقدرة للتعذر', 'فتحة مقدرة للتعذر', 'حذف حرف العلة'] },
        { label: 'الأفعال الخمسة', cells: ['ثبوت النون', 'حذف النون', 'حذف النون'] }
      ],
      page: 37
    },
    {
      type: 'compare',
      title: 'الجملة',
      intro: 'كما في الكتاب.',
      columns: ['تبدأ بـ', 'مثالها'],
      rows: [
        { label: 'الاسمية', cells: ['اسم مرفوع يعرب مبتدأ', 'محمد رسول الله'] },
        { label: 'الفعلية', cells: ['فعل', 'أدى الصائم زكاة الفطر'] }
      ],
      page: 50
    }
  ],
  sections: [
    { title: 'كلام بعضه غير ملفوظ', text: 'قد يكون جزء من الكلام غير ملفوظ، كقولك: اخرج، نم؛ والتقدير: اخرج أنت، نم أنت، فالفاعل مستتر.', more: '', page: 19 },
    { title: 'تثنية المقصور (للاطلاع فقط)', text: 'إن كان ثلاثيًا ردت ألفه إلى أصلها (فتيان، عصوان)، وإن زاد على ثلاثة قلبت ياء (مستشفيان).', more: FYI, page: 26 },
    { title: 'حذف ياء المنقوص', text: 'تحذف ياؤه إذا كان مرفوعًا أو مجرورًا غير محلى بأل وغير مضاف: ذهب قاضٍ إلى محامٍ.', more: '', page: 28 },
    { title: 'تثنية الممدود وجمعه (للاطلاع فقط)', text: 'همزته الأصلية تبقى (رفّاءان)، وهمزة التأنيث تقلب واوًا (صحراوان، صحراوات)، والمنقلبة عن واو أو ياء يجوز فيها الوجهان (رداءان ورداوان).', more: FYI, page: 29 },
    { title: 'الجامد والمتصرف (للاطلاع فقط)', text: 'الجامد يلزم صورة واحدة (عسى، ليس، هب)، والمتصرف ناقص التصرف (كاد يكاد) أو تامه (فهم يفهم افهم).', more: FYI, page: 41 },
    { title: 'أقسام المتعدي', text: 'ينصب مفعولًا واحدًا (شرح الدرس)، أو مفعولين أصلهما مبتدأ وخبر (ظن الأمر صحيحًا)، أو مفعولين ليس أصلهما ذلك (أعطى صديقه كتابًا)، أو ثلاثة مفاعيل (أعلمت محمدًا عمرًا مسافرًا)؛ ويعدى اللازم بالهمزة أو التضعيف (أجلس، جلّس).', more: '', page: 43 },
    { title: 'البناء للمجهول (للاطلاع فقط)', text: 'الماضي يضم أوله ويكسر ما قبل آخره (فُهِم)، والمضارع يضم أوله ويفتح ما قبل آخره (يُستعمَل)؛ وفعل الأمر لا يبنى للمجهول.', more: FYI, page: 45 },
    { title: 'الجملة الاسمية الصغرى والكبرى', text: 'إن كان الخبر مفردًا فهي الصغرى، وإن كان جملة اسمية أو فعلية فهي الكبرى: البيت غرفه واسعة؛ المسلم يصلي في المسجد.', more: '', page: 50 },
    { title: 'الجمل التي لها محل والتي لا محل لها (للاطلاع فقط)', text: 'لها محل: الخبرية والحالية والمفعولية والوصفية والإضافية وجواب الشرط الجازم المقترن بالفاء والمعطوفة على ما له محل؛ وليس لها محل: الابتدائية وصلة الموصول والاعتراضية والتفسيرية وجواب القسم وجواب الشرط غير الجازم والتابعة لما لا محل له.', more: FYI, page: 52 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شروط الكلام', items: ['التركيب', 'اللفظ', 'الإفادة'], page: 19, origin: 'boek' },
    { kind: 'opsomming', title: 'علامات الاسم', items: ['التنوين', 'أل', 'النداء', 'الجر', 'الإخبار عنه'], page: 23, origin: 'boek' },
    { kind: 'opsomming', title: 'علامات الفعل', items: ['تاء الفاعل', 'تاء التأنيث', 'ياء المخاطبة', 'نون التوكيد'], page: 32, origin: 'boek' },
    { kind: 'uitzondering', title: 'متى يبنى المضارع', items: ['على السكون إذا اتصلت به نون النسوة.', 'على الفتح إذا اتصلت به نون التوكيد.'], page: 38, origin: 'boek' },
    { kind: 'onderscheid', title: 'الحرف من حيث الاختصاص', items: ['مختص بالأسماء: حروف الجر.', 'مختص بالأفعال: حروف النصب والجزم.', 'مشترك: حروف العطف وهل.'], page: 47, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: [],
  review: [
    'الكلام ما تركب وأفاد؛ والكلم ثلاث كلمات فأكثر ولو لم يفد.',
    'الكلمة اسم وفعل وحرف، ولكل منها علامات.',
    'الاسم المعرب مقصور أو منقوص أو ممدود أو صحيح.',
    'الماضي والأمر مبنيان، والمضارع معرب إلا في حالتين.',
    'الحروف كلها مبنية، والجملة اسمية أو فعلية.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'أي هذه لا تشترط فيه الإفادة؟', options: ['الكلم', 'الكلام', 'الجملة', 'لا شيء منها'], answer: 0, explain: 'الكلم ما تكون من ثلاث كلمات فأكثر ولو لم يفد.', page: 20 },
    { type: 'mc', q: 'ما نوع «طلحة» من حيث التأنيث؟', options: ['مؤنث لفظي', 'مؤنث حقيقي', 'مؤنث معنوي', 'مؤنث مجازي'], answer: 0, explain: 'فيه علامة تأنيث وهو مذكر حقيقة.', page: 24 },
    { type: 'mc', q: 'ما نوع «القاضي» باعتبار آخره؟', options: ['منقوص', 'مقصور', 'ممدود', 'صحيح'], answer: 0, explain: 'آخره ياء لازمة مكسور ما قبلها.', page: 27 },
    { type: 'mc', q: 'ما نوع الفعل «قال»؟', options: ['أجوف', 'مثال', 'ناقص', 'لفيف'], answer: 0, explain: 'حرف العلة في وسطه.', page: 34 },
    { type: 'tf', q: 'الفعل الماضي يبنى على السكون إذا اتصلت به واو الجماعة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يبنى على الضم مع واو الجماعة، وعلى السكون مع ضمير الرفع المتحرك.', page: 36 },
    { type: 'tf', q: 'الحروف كلها مبنية.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما في الكتاب.', page: 47 }
  ]),
  note: 'نشاط الكتاب في نهاية كل درس. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه. في الكتاب نسبت «لنسفعا بالناصية» إلى العلق ١٩، وهي في المصحف الآية ١٥.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Zinvolle taal en wat erbij hoort',
  subtitle: 'Negen lessen samen op één pagina',
  summary: 'Woord, zin, woordgroep, uiting en klank; daarna de soorten woorden: het naamwoord met zijn kenmerken en indeling naar geslacht en uitgang; het werkwoord met zijn kenmerken en indeling naar stam, tijd, vervoegbaarheid, transitiviteit en onderwerp; het partikel; en tot slot de naamwoordelijke en werkwoordelijke zin.',
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De eerste eenheid van het boek: de onderwerpen van de negen lessen.',
    root: { label: 'Zinvolle taal en wat erbij hoort', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Taal en wat erbij hoort', sub: 'les 4', page: 19, children: ['kalima', 'kalām', 'kalim', 'qawl', 'lafẓ'] },
      { label: 'Het naamwoord', sub: 'les 5–7', page: 23, children: ['kenmerken', 'mannelijk en vrouwelijk', 'maqṣūr, manqūṣ, mamdūd, ṣaḥīḥ'] },
      { label: 'Het werkwoord', sub: 'les 8–11', page: 32, children: ['kenmerken', 'gezond en zwak', 'verleden, onvoltooid, gebiedend', 'intransitief en transitief'] },
      { label: 'Partikel en zin', sub: 'les 12', page: 47, children: ['werkend en niet-werkend partikel', 'naamwoordelijke en werkwoordelijke zin'] }
    ]
  },
  points: [
    { text: 'Kalām is wat uit twee of meer woorden bestaat en een volledige betekenis geeft waarna je kunt zwijgen.', page: 19 },
    { text: 'Er zijn drie soorten woorden: naamwoord, werkwoord en partikel; daaruit bestaat de zin.', page: 23 },
    { text: 'Kenmerken van het naamwoord: nunatie, het lidwoord al-, de aanroep, de genitief, en dat je er iets over kunt zeggen.', page: 23 },
    { text: 'Het verbogen naamwoord is naar zijn uitgang maqṣūr, manqūṣ, mamdūd of ṣaḥīḥ.', page: 26 },
    { text: 'Kenmerken van het werkwoord: de tāʾ van het onderwerp, de vrouwelijke tāʾ, de yāʾ van de aangesproken vrouw en de nadruk-nūn.', page: 32 },
    { text: 'De verleden tijd en de gebiedende wijs zijn altijd vast; de onvoltooide tijd wordt verbogen, behalve met de nūn van vrouwelijk meervoud en de nadruk-nūn.', page: 39 },
    { text: 'Alle partikels zijn vast; er zijn werkende en niet-werkende, en partikels alleen bij naamwoorden, alleen bij werkwoorden, of bij beide.', page: 47 },
    { text: 'Een zin is naamwoordelijk als hij met een naamwoord begint, en werkwoordelijk als hij met een werkwoord begint.', page: 50 }
  ],
  terms: [
    { term: 'الكلمة', translit: 'al-kalima', meaning: 'Woord: een klank die voor één betekenis staat.', explanation: 'Soms bedoelt men er een hele uitspraak mee.', notes: [], page: 19 },
    { term: 'الكلام', translit: 'al-kalām', meaning: 'Zinvolle taal: twee of meer woorden die een volledige betekenis geven.', explanation: 'Voorwaarden: samenstelling, klank en zinvolheid.', notes: [], page: 19 },
    { term: 'الكلم', translit: 'al-kalim', meaning: 'Woordgroep: drie of meer woorden.', explanation: 'Hoeft geen zinvolle betekenis te geven.', notes: [], page: 20 },
    { term: 'القول', translit: 'al-qawl', meaning: 'Uiting: een klank die iets betekent, ook als er geen volledige zin is.', explanation: 'Enkelvoudig of samengesteld.', notes: [], page: 20 },
    { term: 'اللفظ', translit: 'al-lafẓ', meaning: 'Klank: geluid uit de mond met enkele letters.', explanation: 'Hoeft niets te betekenen.', notes: [], page: 20 },
    { term: 'الاسم', translit: 'al-ism', meaning: 'Naamwoord: duidt een betekenis aan in zichzelf, zonder tijd.', explanation: '', notes: [], page: 23 },
    { term: 'الاسم المقصور', translit: 'al-ism al-maqṣūr', meaning: 'Verbogen naamwoord dat eindigt op een vaste alif.', explanation: 'fatā, mustashfā, hudā.', notes: [], page: 26 },
    { term: 'الاسم المنقوص', translit: 'al-ism al-manqūṣ', meaning: 'Verbogen naamwoord dat eindigt op een vaste yāʾ met een i-klank ervoor.', explanation: 'al-qāḍī, al-muḥāmī.', notes: [], page: 27 },
    { term: 'الاسم الممدود', translit: 'al-ism al-mamdūd', meaning: 'Verbogen naamwoord dat eindigt op een hamza na een toegevoegde alif.', explanation: 'ṣaḥrāʾ, bināʾ.', notes: [], page: 29 },
    { term: 'الفعل', translit: 'al-fiʿl', meaning: 'Werkwoord: duidt een betekenis aan en door zijn vorm een tijd.', explanation: '', notes: [], page: 32 },
    { term: 'الفعل المعتل', translit: 'al-fiʿl al-muʿtall', meaning: 'Zwak werkwoord: met één of twee zwakke letters in de stam.', explanation: 'De zwakke letters zijn alif, wāw en yāʾ.', notes: [], page: 34 },
    { term: 'الثقل والتعذر', translit: 'ath-thiql wa-t-taʿadhdhur', meaning: 'Zwaarte: de klinker is moeilijk uit te spreken; onmogelijkheid: de klinker kan niet zichtbaar worden.', explanation: '', notes: [], page: 37 },
    { term: 'اللازم والمتعدي', translit: 'al-lāzim wa-l-mutaʿaddī', meaning: 'Intransitief: zonder lijdend voorwerp; transitief: met lijdend voorwerp.', explanation: '', notes: [], page: 43 },
    { term: 'الحرف', translit: 'al-ḥarf', meaning: 'Partikel: heeft geen betekenis in zichzelf, maar alleen in verbinding met iets anders.', explanation: 'Alle partikels zijn vast.', notes: [], page: 47 },
    { term: 'الجملة', translit: 'al-jumla', meaning: 'Zin: twee of meer woorden met een volledige betekenis.', explanation: '', notes: [], page: 50 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Het woord en wat erbij hoort',
      intro: 'Zoals in les 4.',
      columns: ['Voorwaarde', 'Voorbeeld'],
      rows: [
        { label: 'Kalima (woord)', cells: ['klank voor één betekenis', 'kitāb'] },
        { label: 'Kalām (zinvolle taal)', cells: ['samenstelling, klank en zinvolheid', 'al-ḥajju ʿarafa'] },
        { label: 'Kalim (woordgroep)', cells: ['drie woorden of meer, ook zonder zin', 'sawfa ilā nadhhabu'] },
        { label: 'Qawl (uiting)', cells: ['klank die iets betekent', 'Zayd'] },
        { label: 'Lafẓ (klank)', cells: ['geluid met enkele letters', 'ẓaʿgh'] }
      ],
      page: 19
    },
    {
      type: 'compare',
      title: 'Mannelijk en vrouwelijk',
      intro: 'Zoals in les 5.',
      columns: ['Omschrijving', 'Voorbeeld'],
      rows: [
        { label: 'Echt mannelijk', cells: ['een mannelijk mens of dier', 'rajul, jamal'] },
        { label: 'Figuurlijk mannelijk', cells: ['wordt als mannelijk behandeld zonder het te zijn', 'layl, bāb'] },
        { label: 'Echt vrouwelijk', cells: ['een vrouwelijk mens of dier', 'imraʾa, nāqa'] },
        { label: 'Figuurlijk vrouwelijk', cells: ['baart niet en plant zich niet voort', 'shams, dār'] },
        { label: 'Vrouwelijk naar betekenis', cells: ['vrouwelijk zonder vrouwelijk kenmerk', 'Zaynab, biʾr'] },
        { label: 'Vrouwelijk naar vorm', cells: ['met een vrouwelijk kenmerk, ook als het mannelijk is', 'Ṭalḥa, Zakariyyāʾ'] }
      ],
      page: 24
    },
    {
      type: 'compare',
      title: 'Het naamwoord naar zijn uitgang',
      intro: 'Zoals in les 6 en 7.',
      columns: ['Uitgang', 'Verbuiging'],
      rows: [
        { label: 'Maqṣūr', cells: ['vaste alif', 'alle drie de naamvallen verondersteld'] },
        { label: 'Manqūṣ', cells: ['vaste yāʾ met i ervoor', 'u en i verondersteld, a zichtbaar'] },
        { label: 'Mamdūd', cells: ['hamza na toegevoegde alif', 'zichtbare klinkers'] },
        { label: 'Ṣaḥīḥ', cells: ['niet maqṣūr en niet manqūṣ', 'zichtbare klinkers'] }
      ],
      page: 26
    },
    {
      type: 'tree',
      title: 'Gezonde en zwakke werkwoorden',
      intro: 'Zoals in les 8.',
      root: { label: 'Het werkwoord naar zijn stamletters' },
      nodes: [
        { label: 'Gezond (ṣaḥīḥ)', page: 33, children: ['sālim: jalasa', 'mahmūz: akhadha, saʾala, qaraʾa', 'muḍaʿʿaf: madda, zalzala'] },
        { label: 'Zwak (muʿtall)', page: 34, children: ['mithāl: waʿada', 'ajwaf: qāla', 'nāqiṣ: daʿā', 'lafīf mafrūq: waʿā', 'lafīf maqrūn: rawā'] }
      ]
    },
    {
      type: 'compare',
      title: 'Het werkwoord naar de tijd',
      intro: 'Zoals in les 9.',
      columns: ['Regel', 'Uitzondering'],
      rows: [
        { label: 'Verleden tijd', cells: ['vast op a', 'op u met de wāw van het meervoud, zonder klinker met een bewegend subjectsuffix'] },
        { label: 'Onvoltooide tijd', cells: ['verbogen: nominatief, subjunctief, jussief', 'vast zonder klinker met de vrouwelijke meervouds-nūn, op a met de nadruk-nūn'] },
        { label: 'Gebiedende wijs', cells: ['vast zonder klinker', 'zwakke letter valt weg, nūn valt weg, of a met de nadruk-nūn'] }
      ],
      page: 36
    },
    {
      type: 'compare',
      title: 'Verbuiging van de onvoltooide tijd',
      intro: 'Zoals in het boek.',
      columns: ['Nominatief', 'Subjunctief', 'Jussief'],
      rows: [
        { label: 'Gezonde uitgang', cells: ['zichtbare u', 'zichtbare a', 'geen klinker'] },
        { label: 'Zwak op wāw of yāʾ', cells: ['veronderstelde u (zwaarte)', 'zichtbare a', 'zwakke letter valt weg'] },
        { label: 'Zwak op alif', cells: ['veronderstelde u (onmogelijk)', 'veronderstelde a (onmogelijk)', 'zwakke letter valt weg'] },
        { label: 'De vijf werkwoorden', cells: ['de nūn blijft', 'de nūn valt weg', 'de nūn valt weg'] }
      ],
      page: 37
    },
    {
      type: 'compare',
      title: 'De zin',
      intro: 'Zoals in het boek.',
      columns: ['Begint met', 'Voorbeeld'],
      rows: [
        { label: 'Naamwoordelijk', cells: ['een naamwoord in de nominatief (onderwerp)', 'Muḥammadun rasūlu llāh'] },
        { label: 'Werkwoordelijk', cells: ['een werkwoord', 'addā ṣ-ṣāʾimu zakāta l-fiṭr'] }
      ],
      page: 50
    }
  ],
  sections: [
    { title: 'Taal waarvan een deel niet uitgesproken wordt', text: 'Een deel van de zin kan onuitgesproken blijven, zoals bij "ukhruj" (ga naar buiten) en "nam" (slaap): eigenlijk "ga jij naar buiten", "slaap jij"; het onderwerp is verborgen.', more: '', page: 19 },
    { title: 'Dualis van de maqṣūr (alleen ter kennisname)', text: 'Bij drie letters keert de alif terug naar zijn oorsprong (fatayān, ʿaṣawān); bij meer dan drie wordt hij een yāʾ (mustashfayān).', more: FYI_NL, page: 26 },
    { title: 'Wanneer de yāʾ van de manqūṣ wegvalt', text: 'In de nominatief of genitief, zonder al- en zonder genitiefverbinding: dhahaba qāḍin ilā muḥāmin.', more: '', page: 28 },
    { title: 'Dualis en meervoud van de mamdūd (alleen ter kennisname)', text: 'Een oorspronkelijke hamza blijft (raffāʾān); een vrouwelijke hamza wordt wāw (ṣaḥrāwān, ṣaḥrāwāt); een hamza die uit wāw of yāʾ voortkomt mag beide (ridāʾān en ridāwān).', more: FYI_NL, page: 29 },
    { title: 'Onvervoegbaar en vervoegbaar (alleen ter kennisname)', text: 'Het onvervoegbare werkwoord heeft één vorm (ʿasā, laysa, hab); het vervoegbare is deels vervoegbaar (kāda yakādu) of volledig (fahima yafhamu ifham).', more: FYI_NL, page: 41 },
    { title: 'Soorten transitieve werkwoorden', text: 'Met één lijdend voorwerp (sharaḥa d-dars), twee die oorspronkelijk onderwerp en gezegde zijn (ẓanna l-amra ṣaḥīḥan), twee die dat niet zijn (aʿṭā ṣadīqahu kitāban), of drie (aʿlamtu Muḥammadan ʿAmran musāfiran). Een intransitief werkwoord wordt transitief met hamza of verdubbeling (ajlasa, jallasa).', more: '', page: 43 },
    { title: 'De lijdende vorm (alleen ter kennisname)', text: 'Verleden tijd: eerste letter u, voorlaatste i (fuhima); onvoltooide tijd: eerste letter u, voorlaatste a (yustaʿmalu). De gebiedende wijs heeft geen lijdende vorm.', more: FYI_NL, page: 45 },
    { title: 'Kleine en grote naamwoordelijke zin', text: 'Is het gezegde een enkel woord, dan is het de kleine; is het zelf een naamwoordelijke of werkwoordelijke zin, dan de grote: al-baytu ghurafuhu wāsiʿa; al-muslimu yuṣallī fī l-masjid.', more: '', page: 50 },
    { title: 'Zinnen met en zonder plaats in de verbuiging (alleen ter kennisname)', text: 'Met een plaats: als gezegde, als ḥāl, als lijdend voorwerp, als bijvoeglijke bepaling, na een tijdsbepaling, als antwoord op een jussieve voorwaarde met fa-, en nevengeschikt aan zo’n zin. Zonder plaats: de beginzin, de betrekkelijke bijzin, de tussenzin, de verklarende zin, het antwoord op een eed, het antwoord op een niet-jussieve voorwaarde, en wat daarop volgt.', more: FYI_NL, page: 52 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Voorwaarden voor kalām', items: ['samenstelling', 'klank', 'zinvolheid'], page: 19, origin: 'boek' },
    { kind: 'opsomming', title: 'Kenmerken van het naamwoord', items: ['nunatie', 'al-', 'aanroep', 'genitief', 'er iets over zeggen'], page: 23, origin: 'boek' },
    { kind: 'opsomming', title: 'Kenmerken van het werkwoord', items: ['tāʾ van het onderwerp', 'vrouwelijke tāʾ', 'yāʾ van de aangesproken vrouw', 'nadruk-nūn'], page: 32, origin: 'boek' },
    { kind: 'uitzondering', title: 'Wanneer de onvoltooide tijd vast is', items: ['Zonder klinker met de nūn van vrouwelijk meervoud.', 'Op a met de nadruk-nūn.'], page: 38, origin: 'boek' },
    { kind: 'onderscheid', title: 'Partikels naar gebruik', items: ['Alleen bij naamwoorden: de voorzetsels.', 'Alleen bij werkwoorden: subjunctief- en jussiefpartikels.', 'Bij beide: nevenschikkende partikels en hal.'], page: 47, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: '', text: h.text, meaning: h.nl, takhrij: 'al-Bukhārī en Muslim (muttafaq ʿalayh)', note: h.nlNote || '', pages: h.pages })),
  persons: [],
  review: [
    'Kalām is samengesteld en zinvol; kalim is drie woorden of meer, ook zonder zin.',
    'Woorden zijn naamwoord, werkwoord of partikel, elk met eigen kenmerken.',
    'Het verbogen naamwoord is maqṣūr, manqūṣ, mamdūd of ṣaḥīḥ.',
    'Verleden tijd en gebiedende wijs zijn vast; de onvoltooide tijd wordt verbogen, op twee gevallen na.',
    'Alle partikels zijn vast; een zin is naamwoordelijk of werkwoordelijk.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarvoor is zinvolheid geen voorwaarde?', options: ['kalim', 'kalām', 'jumla', 'geen van deze'], answer: 0, explain: 'Kalim is drie woorden of meer, ook zonder volledige betekenis.', page: 20 },
    { type: 'mc', q: 'Wat voor vrouwelijk is "Ṭalḥa"?', options: ['vrouwelijk naar vorm', 'echt vrouwelijk', 'vrouwelijk naar betekenis', 'figuurlijk vrouwelijk'], answer: 0, explain: 'Het heeft een vrouwelijk kenmerk, maar is een mannennaam.', page: 24 },
    { type: 'mc', q: 'Wat voor naamwoord is "al-qāḍī" naar zijn uitgang?', options: ['manqūṣ', 'maqṣūr', 'mamdūd', 'ṣaḥīḥ'], answer: 0, explain: 'Het eindigt op een vaste yāʾ met een i ervoor.', page: 27 },
    { type: 'mc', q: 'Wat voor werkwoord is "qāla"?', options: ['ajwaf', 'mithāl', 'nāqiṣ', 'lafīf'], answer: 0, explain: 'De zwakke letter staat in het midden.', page: 34 },
    { type: 'tf', q: 'De verleden tijd is vast zonder klinker als de wāw van het meervoud eraan vastzit.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dan is hij vast op u; zonder klinker is hij met een bewegend subjectsuffix.', page: 36 },
    { type: 'tf', q: 'Alle partikels zijn vast.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals in het boek.', page: 47 }
  ]),
  note: 'Oefeningen van het boek aan het einde van elke les. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. In het boek staat "lanasfaʿan bi-n-nāṣiya" bij al-ʿAlaq 19; in de muṣḥaf is het vers 15. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-arabic', chapter: '4', unit: 2, ar, nl }
