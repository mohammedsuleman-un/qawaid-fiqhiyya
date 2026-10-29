// Hoofdstukkaart bij العقيدة (٣), eenheid 1: الإيمان بالملائكة والكتب (lessen 1–2, boek p. 9–18).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٣)، سلسلة زاد العلمية',
  pages: '9–18',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'أبو هريرة', text: 'قال له آدم: يا موسى، اصطفاك الله بكلامه، وخط لك التوراة بيده', takhrij: 'أخرجاه في الصحيحين', note: 'من حديث احتجاج آدم وموسى، ذكره الكتاب في التوراة.', pages: [14], nl: 'Ādam zei tegen hem: Mūsā, Allah heeft jou uitverkoren door met je te spreken, en Hij schreef de Tora voor je met Zijn hand', nlNote: 'Uit de hadith over het twistgesprek van Ādam en Mūsā; het boek noemt hem bij de Tora.' }
]

const TAKHRIJ_NL = { 'أخرجاه في الصحيحين': 'al-Bukhārī en Muslim (de twee Ṣaḥīḥ-werken)' }
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra' }

const PERSONS = [
  ['at-tabari', 'text', [11], 'نقل الكتاب قوله: «فسميت الملائكة ملائكة بالرسالة».', 'Het boek citeert hem: de engelen heten malāʾika vanwege de boodschap (risāla).'],
  ['abu-hurayra', 'text', [14], 'روى حديث احتجاج آدم وموسى.', 'Overleverde de hadith over het twistgesprek van Ādam en Mūsā.'],
  ['qatada-ibn-diama', 'text', [15], 'قال في الزبور: دعاء علمه الله داود، وتحميد وتمجيد، ليس فيه حلال ولا حرام ولا فرائض ولا حدود.', 'Over de Psalmen: smeekbeden die Allah aan Dāwūd leerde, en lofprijzing, zonder halal en haram, plichten of strafbepalingen. Het boek noemt alleen "Qatāda"; vermoedelijk de tābiʿī Qatāda ibn Diʿāma.'],
  ['al-bukhari', 'takhrij', [14], 'أخرج حديث احتجاج آدم وموسى.', 'Nam de hadith over Ādam en Mūsā op.'],
  ['muslim', 'takhrij', [14], 'أخرج حديث احتجاج آدم وموسى.', 'Nam de hadith over Ādam en Mūsā op.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'الإيمان بالملائكة والكتب',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'بعد الركن الأول (الإيمان بالله) في المستويين الأول والثاني: الركن الثاني الإيمان بالملائكة، والركن الثالث الإيمان بالكتب؛ تعريفهما ومنزلتهما وما يتضمنه الإيمان بهما وثمراته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ١٠ من الكتاب.',
    root: { label: 'الإيمان بالملائكة والكتب', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'الملائكة: التعريف', sub: 'الدرس ١', page: 11, children: ['من الألوكة: الرسالة', 'خلق من نور', 'عباد مكرمون'] },
      { label: 'ما يتضمنه الإيمان بهم', sub: 'الدرس ١', page: 12, children: ['وجودهم', 'أسماؤهم', 'صفاتهم', 'أعمالهم'] },
      { label: 'ثمرات الإيمان بالملائكة', sub: 'الدرس ١', page: 13, children: ['الشكر', 'الطمأنينة', 'الاستقامة'] },
      { label: 'الكتب المنزلة', sub: 'الدرس ٢', page: 14, children: ['التوراة', 'الزبور', 'الإنجيل', 'القرآن'] },
      { label: 'تحقيق الإيمان بالكتب وثمراته', sub: 'الدرس ٢', page: 16, children: ['أربعة أمور', 'أربع ثمرات'] }
    ]
  },
  points: [
    { text: 'الملائكة خلق من خلق الله، خلقهم من نور، عباد مكرمون لا يعصون الله ما أمرهم، ولا يعلم عددهم إلا الله.', page: 11 },
    { text: 'الإيمان بالملائكة الركن الثاني من أركان الإيمان، ولا يصح إيمان عبد حتى يقر به [البقرة: ٢٨٥].', page: 12 },
    { text: 'يتضمن أربعة أمور: الإيمان بوجودهم، وبمن علمنا اسمه منهم، وبما علمنا من صفاتهم، وبما علمنا من أعمالهم.', page: 12 },
    { text: 'تسمية ملك الموت «عزرائيل» لم ترد في القرآن ولا في السنة.', page: 13 },
    { text: 'الإيمان بالكتب ركن من أركان الإيمان، لا يصح إيمان أحد إلا به [النساء: ١٣٦].', page: 14 },
    { text: 'من الكتب: التوراة لموسى، والزبور لداود، والإنجيل لعيسى، والقرآن لمحمد ﷺ، وقد تكفل الله بحفظ القرآن.', page: 15 },
    { text: 'يجب الإيمان بوقوع التحريف في الكتب المتقدمة [البقرة: ٧٥].', page: 16 }
  ],
  terms: [
    { term: 'الملائكة', translit: 'al-malāʾika', meaning: 'لغة: جمع ملك، مشتق من الألوكة وهي الرسالة، أو من المَلْك وهو الأخذ بقوة.', explanation: 'شرعًا: خلق من خلق الله، خلقهم من نور، مربوبون مسخرون، عباد مكرمون.', notes: [], page: 11 },
    { term: 'الألوكة', translit: 'al-alūka', meaning: 'الرسالة؛ يقال: ألك أي تحمل الرسالة.', explanation: 'قال الطبري: سميت الملائكة ملائكة بالرسالة.', notes: [], page: 11 },
    { term: 'ملك الموت', translit: 'malak al-mawt', meaning: 'الموكل بقبض الأرواح.', explanation: 'ذكره الله بوظيفته، وتسميته «عزرائيل» لم ترد في القرآن أو السنة.', notes: ['[السجدة: ١١]'], page: 13 },
    { term: 'الكتاب', translit: 'al-kitāb', meaning: 'لغة: اسم لما كتب مجموعًا.', explanation: 'والمراد هنا: الكتب والصحف التي حوت كلام الله الذي أوحاه إلى رسله.', notes: [], page: 14 },
    { term: 'التوراة', translit: 'at-tawrāh', meaning: 'كتاب الله الذي آتاه موسى عليه السلام.', explanation: 'لفظ عبراني بمعنى التعليم والشريعة؛ وتطلق اليوم عند اليهود على الأسفار الخمسة.', notes: ['[القصص: ٤٣]'], page: 15 },
    { term: 'الزبور', translit: 'az-zabūr', meaning: 'الكتاب الذي أنزل على داود عليه السلام.', explanation: 'قال قتادة: دعاء وتحميد وتمجيد، ليس فيه حلال ولا حرام ولا فرائض ولا حدود.', notes: ['[النساء: ١٦٣]'], page: 15 },
    { term: 'الإنجيل', translit: 'al-injīl', meaning: 'كلمة يونانية معناها البشرى، أنزل على عيسى عليه السلام.', explanation: 'ويطلق بعد التحريف على الأناجيل الأربعة: متى ومرقس ولوقا ويوحنا.', notes: ['[المائدة: ٤٦]'], page: 15 },
    { term: 'القرآن', translit: 'al-qurʾān', meaning: 'كلام الله، منه بدأ قولًا، وأنزله على رسوله وحيًا.', explanation: 'سمعه جبريل من الله ونزل به على محمد ﷺ بلفظه، وتكفل الله بحفظ لفظه.', notes: ['[الحجر: ٩]', '[فصلت: ٤٢]'], page: 16 },
    { term: 'التحريف', translit: 'at-taḥrīf', meaning: 'تبديل الكتب المتقدمة.', explanation: 'شهد الله بتحريف اليهود لكلامه.', notes: ['[البقرة: ٧٥]'], page: 16 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'ما يتضمنه الإيمان بالملائكة',
      intro: 'أربعة أمور كما في الكتاب.',
      nodes: [
        { label: 'الإيمان بوجودهم حقيقة', page: 12 },
        { label: 'الإيمان بمن علمنا اسمه منهم', sub: 'كجبريل، ومن لم نعلم اسمه نؤمن بهم إجمالًا', page: 12 },
        { label: 'الإيمان بما علمنا من صفاتهم', sub: 'كصفة جبريل: ستمائة جناح قد سد الأفق', page: 12 },
        { label: 'الإيمان بما علمنا من أعمالهم', sub: 'كالتسبيح والتعبد ليلًا ونهارًا بلا ملل ولا فتور', page: 12 }
      ]
    },
    {
      type: 'cards',
      title: 'أعمال بعض الملائكة',
      intro: 'كما عددها الكتاب.',
      nodes: [
        { label: 'جبريل', sub: 'الأمين على الوحي', page: 13 },
        { label: 'ميكائيل', sub: 'الموكل بالقطر: المطر والنبات', page: 13 },
        { label: 'إسرافيل', sub: 'الموكل بالنفخ في الصور', page: 13 },
        { label: 'ملك الموت', sub: 'الموكل بقبض الأرواح', page: 13 },
        { label: 'مالك', sub: 'خازن النار', page: 13 },
        { label: 'الموكلون بالأجنة', sub: 'في الأرحام', page: 13 },
        { label: 'الحفظة الكتبة', sub: 'يحفظون أعمال بني آدم ويكتبونها', page: 13 },
        { label: 'الموكلون بسؤال الميت', sub: 'في قبره', page: 13 }
      ]
    },
    {
      type: 'compare',
      title: 'الكتب المذكورة في الوحدة',
      intro: 'من الكتب التي أنزلها الله تعالى.',
      columns: ['النبي', 'معنى الاسم', 'الدليل'],
      rows: [
        { label: 'التوراة', cells: ['موسى', 'عبراني: التعليم والشريعة', '[القصص: ٤٣]'] },
        { label: 'الزبور', cells: ['داود', 'دعاء وتحميد وتمجيد', '[النساء: ١٦٣]'] },
        { label: 'الإنجيل', cells: ['عيسى', 'يوناني: البشرى', '[المائدة: ٤٦]'] },
        { label: 'القرآن', cells: ['محمد ﷺ', 'محفوظ اللفظ', '[الحجر: ٩]'] }
      ],
      page: 15
    },
    {
      type: 'steps',
      title: 'تحقيق الإيمان بالكتب',
      intro: 'أربعة أمور.',
      nodes: [
        { label: 'التصديق الجازم بأنها منزلة من الله وأنها كلامه', sub: '[آل عمران: ٢–٤]', page: 16 },
        { label: 'تصديق ما صح من أخبارها', sub: 'كأخبار القرآن وما لم يبدل من الكتب السابقة', page: 16 },
        { label: 'الإيمان بأنها كلها دعت إلى عبادة الله وحده', sub: 'مع اختلاف الشرائع', page: 16 },
        { label: 'الإيمان بوقوع التحريف في الكتب المتقدمة', sub: '[البقرة: ٧٥]', page: 16 }
      ]
    },
    {
      type: 'compare',
      title: 'ثمرات الإيمان بالملائكة وبالكتب',
      intro: 'ثلاث ثمرات للأول وأربع للثاني.',
      columns: ['الملائكة', 'الكتب'],
      rows: [
        { label: '١', cells: ['شكر الله على عنايته ببني آدم', 'العلم بعناية الله بعباده إذ أنزل كتبًا يهديهم بها'] },
        { label: '٢', cells: ['اطمئنان المؤمن أنه محاط برعاية الله', 'العلم بحكمة الله في شرعه لكل أمة [المائدة: ٤٨]'] },
        { label: '٣', cells: ['الاستقامة حياءً من الله ومن جنوده', 'الوقاية من التخبط الفكري والعقدي'] },
        { label: '٤', cells: ['—', 'لا وصول إلى الله إلا بوحي منه عن طريق نبي'] }
      ],
      page: 17
    }
  ],
  sections: [
    { title: 'بقية أركان الإيمان', text: 'تقدم في المستويين الأول والثاني الكلام على الركن الأول: الإيمان بالله في ألوهيته وربوبيته وأسمائه وصفاته؛ وهذا المستوى في بقية الأركان.', more: '', page: 11 },
    { title: 'من هم الملائكة؟', text: 'خلق من نور، لا يعصون الله ما أمرهم ويفعلون ما يؤمرون، لا يوصفون بذكورة ولا أنوثة، لا يأكلون ولا يشربون، لا يملون ولا يتعبون، ولا يعلم عددهم إلا الله.', more: 'وقد يتحول الملك بأمر الله إلى هيئة رجل، كجبريل حين تمثل لمريم بشرًا سويًا.', page: 11 },
    { title: 'أعمالهم', text: 'جبريل للوحي، وميكائيل للقطر، وإسرافيل للنفخ في الصور، وملك الموت لقبض الأرواح، ومالك خازن النار، وموكلون بالأجنة وبحفظ الأعمال وكتابتها وبسؤال الميت.', more: 'اشتهر أن اسم ملك الموت «عزرائيل»، وهذه التسمية لم ترد في القرآن أو السنة؛ وإنما ذكره الله بوظيفته [السجدة: ١١].', page: 13 },
    { title: 'الإيمان بالكتب', text: 'الكتب والصحف التي حوت كلام الله الذي أوحاه إلى رسله؛ والإيمان بها أصل من أصول العقيدة وركن من أركان الإيمان [النساء: ١٣٦].', more: 'وسمي القرآن كتابًا لما جمع فيه من القصص والأمثال والعقائد والأمر والنهي والتشريع، أو لاشتماله على جميع الكتب السابقة.', page: 14 },
    { title: 'التوراة والزبور والإنجيل', text: 'التوراة كتاب موسى، والزبور كتاب داود، والإنجيل كتاب عيسى؛ وقد نصت التوراة والإنجيل على البشارة بمحمد ﷺ [الأعراف: ١٥٧].', more: 'الإنجيل بعد تحريف النصارى يطلق على الأناجيل الأربعة، وتحوي حياة عيسى وبعض أعماله وأقواله ممزوجة بالتحريف والتثليث، وتسمى العهد الجديد.', page: 15 },
    { title: 'القرآن', text: 'كلام الله، منه بدأ قولًا، وأنزله على رسوله وحيًا، وصدقه المؤمنون حقًا، سمعه جبريل من الله ونزل به على محمد ﷺ بلفظه.', more: 'تكفل الله بحفظ لفظه [الحجر: ٩]، [فصلت: ٤٢].', page: 16 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الملائكة', items: ['لغة: جمع ملك، من الألوكة (الرسالة) أو من الملك (الأخذ بقوة).', 'شرعًا: خلق من خلق الله، خلقهم من نور، عباد مكرمون لا يعصون الله ما أمرهم.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'ما يتضمنه الإيمان بالملائكة', items: ['وجودهم', 'من علمنا اسمه منهم', 'ما علمنا من صفاتهم', 'ما علمنا من أعمالهم'], page: 12, origin: 'boek' },
    { kind: 'uitzondering', title: 'اسم «عزرائيل»', items: ['لم يرد في القرآن ولا في السنة.', 'يذكر بوظيفته: ملك الموت [السجدة: ١١].'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'تحقيق الإيمان بالكتب', items: ['التصديق بأنها كلام الله', 'تصديق ما صح من أخبارها', 'أنها كلها دعت إلى التوحيد', 'وقوع التحريف في الكتب المتقدمة'], page: 16, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الملائكة: خلق من نور، عباد مكرمون، لا يعلم عددهم إلا الله.',
    'الإيمان بهم يتضمن: وجودهم، وأسماءهم، وصفاتهم، وأعمالهم.',
    'جبريل للوحي، ميكائيل للقطر، إسرافيل للصور، ملك الموت للأرواح، مالك للنار.',
    'لا يثبت اسم «عزرائيل».',
    'التوراة لموسى، الزبور لداود، الإنجيل لعيسى، القرآن لمحمد ﷺ.',
    'تحقيق الإيمان بالكتب: التصديق، وتصديق أخبارها، وأنها دعت إلى التوحيد، ووقوع التحريف فيما قبل القرآن.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من أين اشتقت كلمة «الملائكة» في أحد القولين؟', options: ['من الألوكة وهي الرسالة', 'من الملل', 'من الملأ', 'من الملح'], answer: 0, explain: 'قال الطبري: سميت الملائكة ملائكة بالرسالة.', page: 11 },
    { type: 'mc', q: 'كم أمرًا يتضمن الإيمان بالملائكة؟', options: ['أربعة', 'اثنين', 'ثلاثة', 'ستة'], answer: 0, explain: 'وجودهم، أسماؤهم، صفاتهم، أعمالهم.', page: 12 },
    { type: 'mc', q: 'من الموكل بالقطر؟', options: ['ميكائيل', 'جبريل', 'إسرافيل', 'مالك'], answer: 0, explain: 'كما في الكتاب: ميكائيل الموكل بالقطر.', page: 13 },
    { type: 'tf', q: 'ورد اسم «عزرائيل» لملك الموت في القرآن.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لم ترد هذه التسمية في القرآن أو السنة [السجدة: ١١].', page: 13 },
    { type: 'mc', q: 'ما معنى كلمة «الإنجيل»؟', options: ['البشرى', 'التعليم والشريعة', 'الدعاء', 'الكتاب'], answer: 0, explain: 'كلمة يونانية معناها البشرى.', page: 15 },
    { type: 'tf', q: 'قال قتادة: الزبور مليء بأحكام الحلال والحرام.', options: ['صواب', 'خطأ'], answer: 1, explain: 'دعاء وتحميد وتمجيد، ليس فيه حلال ولا حرام.', page: 15 },
    { type: 'mc', q: 'ما الدليل على تكفل الله بحفظ القرآن؟', options: ['[الحجر: ٩]', '[البقرة: ٧٥]', '[المائدة: ٤٦]', '[القصص: ٤٣]'], answer: 0, explain: '﴿إنا نحن نزلنا الذكر وإنا له لحافظون﴾.', page: 16 },
    { type: 'tf', q: 'من ثمرات الإيمان بالكتب أن يعلم البشر أنه لا وصول إلى الله إلا بوحي منه عن طريق نبي.', options: ['صواب', 'خطأ'], answer: 0, explain: 'فلا مجال للاجتهاد العقلي في ذلك.', page: 17 }
  ]),
  note: 'نشاط الكتاب في صفحة ١٨.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Geloof in de engelen en de boeken',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'Na de eerste pijler (geloof in Allah) op niveau 1 en 2: de tweede pijler, geloof in de engelen, en de derde, geloof in de geopenbaarde boeken. Definitie, plaats, wat het geloof inhoudt en wat het oplevert.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (3), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De onderwerpen zoals op p. 10 van het boek.',
    root: { label: 'Engelen en boeken', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Engelen: definitie', sub: 'les 1', page: 11, children: ['van alūka: boodschap', 'geschapen uit licht', 'geëerde dienaren'] },
      { label: 'Wat het geloof inhoudt', sub: 'les 1', page: 12, children: ['hun bestaan', 'hun namen', 'hun eigenschappen', 'hun taken'] },
      { label: 'Vruchten', sub: 'les 1', page: 13, children: ['dankbaarheid', 'gemoedsrust', 'standvastigheid'] },
      { label: 'De geopenbaarde boeken', sub: 'les 2', page: 14, children: ['Tora', 'Psalmen', 'Evangelie', 'Koran'] },
      { label: 'Het geloof in de boeken', sub: 'les 2', page: 16, children: ['vier zaken', 'vier vruchten'] }
    ]
  },
  points: [
    { text: 'De engelen zijn schepselen van Allah, geschapen uit licht, geëerde dienaren die Allah niet ongehoorzaam zijn. Alleen Allah kent hun aantal.', page: 11 },
    { text: 'Geloof in de engelen is de tweede pijler van het geloof; zonder dat is iemands geloof niet geldig (al-Baqara 2:285).', page: 12 },
    { text: 'Het houdt vier zaken in: geloof in hun bestaan, in wie we bij naam kennen, in wat we van hun eigenschappen weten en in wat we van hun taken weten.', page: 12 },
    { text: 'De naam ʿIzrāʾīl voor de engel des doods komt niet voor in de Koran of de Sunna.', page: 13 },
    { text: 'Geloof in de boeken is een pijler van het geloof; zonder dat is niemands geloof geldig (an-Nisāʾ 4:136).', page: 14 },
    { text: 'Tot de boeken behoren de Tora van Mūsā, de Psalmen van Dāwūd, het Evangelie van ʿĪsā en de Koran van Muḥammad ﷺ; Allah heeft de bewaring van de Koran op Zich genomen.', page: 15 },
    { text: 'Men moet geloven dat de eerdere boeken vervalst zijn (al-Baqara 2:75).', page: 16 }
  ],
  terms: [
    { term: 'الملائكة', translit: 'al-malāʾika', meaning: 'Engelen. Taal: meervoud van malak, afgeleid van alūka (boodschap) of van malk (krachtig grijpen).', explanation: 'Religieus: schepselen van Allah, geschapen uit licht, onderworpen en geëerde dienaren.', notes: [], page: 11 },
    { term: 'الألوكة', translit: 'al-alūka', meaning: 'Boodschap; alaka betekent: een boodschap overbrengen.', explanation: 'Aṭ-Ṭabarī: de engelen heten zo vanwege de boodschap.', notes: [], page: 11 },
    { term: 'ملك الموت', translit: 'malak al-mawt', meaning: 'De engel des doods, belast met het nemen van de zielen.', explanation: 'Allah noemt hem naar zijn taak; de naam ʿIzrāʾīl komt niet voor in de Koran of de Sunna.', notes: ['as-Sajda 32:11'], page: 13 },
    { term: 'الكتاب', translit: 'al-kitāb', meaning: 'Boek. Taal: wat bijeengeschreven is.', explanation: 'Hier: de boeken en bladen met Allahs woord dat Hij aan Zijn boodschappers openbaarde.', notes: [], page: 14 },
    { term: 'التوراة', translit: 'at-tawrāh', meaning: 'De Tora: het boek dat Allah aan Mūsā gaf.', explanation: 'Een Hebreeuws woord voor onderricht en wet; bij de joden nu de vijf boeken (Genesis tot Deuteronomium).', notes: ['al-Qaṣaṣ 28:43'], page: 15 },
    { term: 'الزبور', translit: 'az-zabūr', meaning: 'De Psalmen: het boek dat aan Dāwūd werd geopenbaard.', explanation: 'Qatāda: smeekbede en lofprijzing, zonder halal en haram, plichten of strafbepalingen.', notes: ['an-Nisāʾ 4:163'], page: 15 },
    { term: 'الإنجيل', translit: 'al-injīl', meaning: 'Het Evangelie: een Grieks woord voor goed nieuws; geopenbaard aan ʿĪsā.', explanation: 'Na de vervalsing door de christenen: de vier evangeliën van Mattheüs, Marcus, Lucas en Johannes.', notes: ['al-Māʾida 5:46'], page: 15 },
    { term: 'القرآن', translit: 'al-qurʾān', meaning: 'Allahs woord, dat van Hem uitging als spraak en dat Hij als openbaring aan Zijn Boodschapper neerzond.', explanation: 'Jibrīl hoorde het van Allah en bracht het woordelijk aan Muḥammad ﷺ; Allah bewaart de bewoording.', notes: ['al-Ḥijr 15:9', 'Fuṣṣilat 41:42'], page: 16 },
    { term: 'التحريف', translit: 'at-taḥrīf', meaning: 'Vervalsing: het veranderen van de eerdere boeken.', explanation: 'Allah getuigt dat de joden Zijn woord vervalsten.', notes: ['al-Baqara 2:75'], page: 16 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Wat geloof in de engelen inhoudt',
      intro: 'Vier zaken, zoals in het boek.',
      nodes: [
        { label: 'Geloven dat ze werkelijk bestaan', page: 12 },
        { label: 'Geloven in wie we bij naam kennen', sub: 'zoals Jibrīl; in de anderen geloven we in het algemeen', page: 12 },
        { label: 'Geloven in wat we van hun eigenschappen weten', sub: 'zoals Jibrīl: zeshonderd vleugels die de horizon vulden', page: 12 },
        { label: 'Geloven in wat we van hun taken weten', sub: 'zoals dag en nacht lofprijzen zonder vermoeid te raken', page: 12 }
      ]
    },
    {
      type: 'cards',
      title: 'Taken van enkele engelen',
      intro: 'Zoals het boek ze opsomt.',
      nodes: [
        { label: 'Jibrīl', sub: 'betrouwbaar over de openbaring', page: 13 },
        { label: 'Mīkāʾīl', sub: 'belast met de regen en de plantengroei', page: 13 },
        { label: 'Isrāfīl', sub: 'blaast op de hoorn', page: 13 },
        { label: 'De engel des doods', sub: 'neemt de zielen', page: 13 },
        { label: 'Mālik', sub: 'bewaarder van het Vuur', page: 13 },
        { label: 'Engelen bij de ongeborenen', sub: 'in de baarmoeder', page: 13 },
        { label: 'Bewakers en schrijvers', sub: 'bewaren en noteren de daden van de mensen', page: 13 },
        { label: 'Engelen van de ondervraging', sub: 'ondervragen de dode in het graf', page: 13 }
      ]
    },
    {
      type: 'compare',
      title: 'De boeken in deze eenheid',
      intro: 'Enkele van de boeken die Allah neerzond.',
      columns: ['Profeet', 'Betekenis van de naam', 'Bewijs'],
      rows: [
        { label: 'Tora', cells: ['Mūsā', 'Hebreeuws: onderricht en wet', 'al-Qaṣaṣ 28:43'] },
        { label: 'Psalmen', cells: ['Dāwūd', 'smeekbede en lofprijzing', 'an-Nisāʾ 4:163'] },
        { label: 'Evangelie', cells: ['ʿĪsā', 'Grieks: goed nieuws', 'al-Māʾida 5:46'] },
        { label: 'Koran', cells: ['Muḥammad ﷺ', 'bewaarde bewoording', 'al-Ḥijr 15:9'] }
      ],
      page: 15
    },
    {
      type: 'steps',
      title: 'Het geloof in de boeken waarmaken',
      intro: 'Vier zaken.',
      nodes: [
        { label: 'Vast geloven dat ze van Allah komen en Zijn woord zijn', sub: 'Āl ʿImrān 3:2–4', page: 16 },
        { label: 'Geloven wat er authentiek in wordt verteld', sub: 'zoals in de Koran en in wat niet veranderd is', page: 16 },
        { label: 'Geloven dat ze allemaal oproepen tot de aanbidding van Allah alleen', sub: 'ook al verschillen de wetten', page: 16 },
        { label: 'Geloven dat de eerdere boeken vervalst zijn', sub: 'al-Baqara 2:75', page: 16 }
      ]
    },
    {
      type: 'compare',
      title: 'Vruchten van het geloof in engelen en boeken',
      intro: 'Drie vruchten bij het eerste, vier bij het tweede.',
      columns: ['Engelen', 'Boeken'],
      rows: [
        { label: '1', cells: ['dankbaarheid voor Allahs zorg voor de mensen', 'weten hoe Allah voor Zijn dienaren zorgt door boeken als leiding'] },
        { label: '2', cells: ['gemoedsrust: omringd door Allahs zorg', 'Allahs wijsheid zien in een wet voor elk volk (al-Māʾida 5:48)'] },
        { label: '3', cells: ['standvastigheid uit schaamte voor Allah en Zijn soldaten', 'bescherming tegen verwarring in denken en geloof'] },
        { label: '4', cells: ['—', 'alleen via openbaring door een profeet komt men bij Allah'] }
      ],
      page: 17
    }
  ],
  sections: [
    { title: 'De overige pijlers van het geloof', text: 'Niveau 1 en 2 behandelden de eerste pijler: geloof in Allah, in Zijn goddelijkheid, heerschappij, namen en eigenschappen. Dit niveau behandelt de overige pijlers.', more: '', page: 11 },
    { title: 'Wie zijn de engelen?', text: 'Geschapen uit licht; ze zijn Allah niet ongehoorzaam en doen wat hun bevolen wordt. Ze zijn niet mannelijk of vrouwelijk, eten en drinken niet, worden niet moe, en alleen Allah kent hun aantal.', more: 'Op Allahs bevel kan een engel de gedaante van een man aannemen, zoals Jibrīl die aan Maryam verscheen als een volmaakte man.', page: 11 },
    { title: 'Hun taken', text: 'Jibrīl brengt de openbaring, Mīkāʾīl is belast met de regen, Isrāfīl blaast op de hoorn, de engel des doods neemt de zielen, Mālik bewaakt het Vuur; anderen zijn belast met de ongeborenen, met het bewaren en opschrijven van de daden en met de ondervraging in het graf.', more: 'De naam ʿIzrāʾīl voor de engel des doods is bekend geworden, maar komt niet voor in de Koran of de Sunna; Allah noemt hem naar zijn taak (as-Sajda 32:11).', page: 13 },
    { title: 'Geloof in de boeken', text: 'De boeken en bladen met Allahs woord dat Hij aan Zijn boodschappers openbaarde. Dit geloof is een grondslag van de geloofsleer en een pijler van het geloof (an-Nisāʾ 4:136).', more: 'De Koran heet kitāb omdat er verhalen, gelijkenissen, geloofszaken, geboden, verboden en wetgeving in zijn samengebracht, of omdat hij alle eerdere boeken omvat.', page: 14 },
    { title: 'Tora, Psalmen en Evangelie', text: 'De Tora is het boek van Mūsā, de Psalmen van Dāwūd, het Evangelie van ʿĪsā. Tora en Evangelie kondigden Muḥammad ﷺ aan (al-Aʿrāf 7:157).', more: 'Na de vervalsing door de christenen heet het Evangelie nu de vier evangeliën, met het leven van ʿĪsā en een deel van zijn daden en woorden, vermengd met vervalsing en de drie-eenheid: het Nieuwe Testament.', page: 15 },
    { title: 'De Koran', text: 'Allahs woord, dat van Hem uitging als spraak en dat Hij als openbaring aan Zijn Boodschapper neerzond; Jibrīl hoorde het van Allah en bracht het woordelijk aan Muḥammad ﷺ.', more: 'Allah heeft de bewaring van de bewoording op Zich genomen (al-Ḥijr 15:9; Fuṣṣilat 41:42).', page: 16 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Engelen', items: ['Taal: meervoud van malak, van alūka (boodschap) of malk (krachtig grijpen).', 'Religieus: schepselen van Allah, geschapen uit licht, geëerde dienaren die Hem niet ongehoorzaam zijn.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'Geloof in de engelen houdt in', items: ['hun bestaan', 'wie we bij naam kennen', 'wat we van hun eigenschappen weten', 'wat we van hun taken weten'], page: 12, origin: 'boek' },
    { kind: 'uitzondering', title: 'De naam ʿIzrāʾīl', items: ['Komt niet voor in de Koran of de Sunna.', 'Hij wordt genoemd naar zijn taak: de engel des doods (as-Sajda 32:11).'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'Geloof in de boeken waarmaken', items: ['geloven dat ze Allahs woord zijn', 'geloven wat er authentiek in staat', 'ze roepen allemaal op tot tawḥīd', 'de eerdere boeken zijn vervalst'], page: 16, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Engelen: geschapen uit licht, geëerde dienaren; alleen Allah kent hun aantal.',
    'Geloof in hen: hun bestaan, namen, eigenschappen en taken.',
    'Jibrīl: openbaring; Mīkāʾīl: regen; Isrāfīl: hoorn; engel des doods: zielen; Mālik: het Vuur.',
    'De naam ʿIzrāʾīl is niet overgeleverd.',
    'Tora: Mūsā; Psalmen: Dāwūd; Evangelie: ʿĪsā; Koran: Muḥammad ﷺ.',
    'Geloof in de boeken: ze zijn Allahs woord, hun authentieke berichten zijn waar, ze roepen allemaal op tot tawḥīd, en de eerdere zijn vervalst.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarvan is het woord malāʾika volgens één opvatting afgeleid?', options: ['van alūka: boodschap', 'van malal: verveling', 'van malaʾ: menigte', 'van milḥ: zout'], answer: 0, explain: 'Aṭ-Ṭabarī: de engelen heten zo vanwege de boodschap.', page: 11 },
    { type: 'mc', q: 'Hoeveel zaken houdt het geloof in de engelen in?', options: ['vier', 'twee', 'drie', 'zes'], answer: 0, explain: 'Hun bestaan, namen, eigenschappen en taken.', page: 12 },
    { type: 'mc', q: 'Welke engel is belast met de regen?', options: ['Mīkāʾīl', 'Jibrīl', 'Isrāfīl', 'Mālik'], answer: 0, explain: 'Zo staat het in het boek.', page: 13 },
    { type: 'tf', q: 'De naam ʿIzrāʾīl voor de engel des doods staat in de Koran.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Die naam komt niet voor in de Koran of de Sunna (as-Sajda 32:11).', page: 13 },
    { type: 'mc', q: 'Wat betekent het woord injīl?', options: ['goed nieuws', 'onderricht en wet', 'smeekbede', 'boek'], answer: 0, explain: 'Een Grieks woord voor goed nieuws.', page: 15 },
    { type: 'tf', q: 'Volgens Qatāda staan de Psalmen vol met regels over halal en haram.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Smeekbede en lofprijzing, zonder halal en haram.', page: 15 },
    { type: 'mc', q: 'Welk vers laat zien dat Allah de Koran bewaart?', options: ['al-Ḥijr 15:9', 'al-Baqara 2:75', 'al-Māʾida 5:46', 'al-Qaṣaṣ 28:43'], answer: 0, explain: '"Wij hebben de Vermaning neergezonden en Wij zullen haar bewaren."', page: 16 },
    { type: 'tf', q: 'Een vrucht van het geloof in de boeken is weten dat men Allah alleen via openbaring door een profeet bereikt.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Het verstand alleen volstaat daar niet.', page: 17 }
  ]),
  note: 'Oefening van het boek op p. 18. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n3-aqeedah', chapter: '1', unit: 1, ar, nl }
