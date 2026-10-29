// Studiekaart bij العقيدة (١), les 1: مقدمات في العقيدة الصحيحة (boek p. 11–12).
// Opgesteld uit de boekpagina's zelf (Zad Academy, archive.org). Alles onder "boek" volgt
// de formulering van het boek; de Nederlandse tekst is een weergave van de strekking.
// Verzen staan zoals in het boek, zonder tashkeel. Concept: wacht op menselijke controle.
const source = {
  label: 'كتاب العقيدة (١)، سلسلة زاد العلمية',
  pages: '11–12',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlAqeedah/page/n{p}/mode/1up'
}

const ar = {
  title: 'مقدمات في العقيدة الصحيحة',
  subtitle: 'معنى العقيدة الصحيحة وأهميتها',
  summary: 'ما معنى العقيدة في اللغة والاصطلاح، وما الذي تشمله العقيدة الصحيحة، ولماذا لا بد فيها من الجزم، وأول أوجه أهميتها: أنها الأساس في قبول العمل والنجاة.',
  source,
  points: [
    { text: 'العقيدة في اللغة من العَقْد: الربط والإحكام والشد بقوة، ونقيضه الحَلّ.', detail: 'يقال: عقده يعقده عقدًا، ومنه عقدة اليمين والنكاح؛ قال تعالى: ﴿لا يؤاخذكم الله باللغو في أيمانكم ولكن يؤاخذكم بما عقدتم الأيمان﴾ [المائدة: ٨٩].', page: 11 },
    { text: 'وفي الاصطلاح: الحكم الذي لا يقبل الشك فيه عند معتقده.', detail: 'وعرّفها بعضهم بقوله: الأمور الثابتة الجازمة التي ينعقد عليها قلب الإنسان ولا يشك فيها. و«الصحيحة» أي: السالمة من العيب والخطأ.', page: 11 },
    { text: 'العقيدة الصحيحة: الإيمان الجازم بالله وما يجب له، وبالملائكة والكتب والرسل واليوم الآخر والقدر، وبكل ما جاءت به النصوص الصحيحة.', detail: 'نص التعريف: الإيمان الجازم بالله، وما يجب له في ألوهيته وربوبيته وأسمائه وصفاته، كما تتضمن الإيمان بملائكته وكتبه ورسله واليوم الآخر، والقدر خيره وشره، وبكل ما جاءت به النصوص الصحيحة من أصول الدين وأمور الغيب وأخباره.', page: 11 },
    { text: 'لا بد من انعقاد القلب على ذلك انعقادًا جازمًا، لا شك فيه ولا ريب.', detail: 'قال تعالى: ﴿إنما المؤمنون الذين آمنوا بالله ورسوله ثم لم يرتابوا﴾ [الحجرات: ١٥]، أي: لم يشكوا في إيمانهم.', page: 11 },
    { text: 'أول أوجه أهميتها: أنها الأساس في قبول العمل الصالح عند الله، وبها تكون النجاة في الآخرة.', detail: 'الأدلة: [الكهف: ١١٠] و[التوبة: ٧٢]. وعلى العكس: لا يقبل العمل إذا كان صاحبه على عقيدة فاسدة [المائدة: ٥؛ الزمر: ٦٥].', page: 12 }
  ],
  terms: [
    { term: 'العقيدة (لغةً)', translit: 'al-ʿaqīda', meaning: 'من العَقْد: الربط والإحكام والشد بقوة.', explanation: 'يقال: عقده يعقده عقدًا.', notes: ['نقيضه: الحَلّ.', 'ومنه عقدة اليمين والنكاح [المائدة: ٨٩].'], page: 11 },
    { term: 'العقيدة (اصطلاحًا)', translit: 'al-ʿaqīda', meaning: 'الحكم الذي لا يقبل الشك فيه عند معتقده.', explanation: 'وعرّفها بعضهم: الأمور الثابتة الجازمة التي ينعقد عليها قلب الإنسان ولا يشك فيها.', notes: [], page: 11 },
    { term: 'الصحيحة', translit: 'aṣ-ṣaḥīḥa', meaning: 'السالمة من العيب والخطأ.', explanation: '', notes: [], page: 11 },
    { term: 'العقيدة الصحيحة', translit: 'al-ʿaqīda aṣ-ṣaḥīḥa', meaning: 'الإيمان الجازم بالله وما يجب له، وبأركان الإيمان، وبكل ما جاءت به النصوص الصحيحة.', explanation: 'الإيمان الجازم بالله، وما يجب له في ألوهيته وربوبيته وأسمائه وصفاته، والإيمان بملائكته وكتبه ورسله واليوم الآخر، والقدر خيره وشره، وبكل ما جاءت به النصوص الصحيحة من أصول الدين وأمور الغيب وأخباره.', notes: ['شرطها: انعقاد القلب انعقادًا جازمًا لا شك فيه [الحجرات: ١٥].'], page: 11 }
  ],
  diagrams: [
    {
      type: 'mindmap',
      title: 'خريطة المفاهيم: ما هي العقيدة؟',
      intro: 'اضغط على أي فرع لمزيد من التفصيل.',
      root: { label: 'العقيدة' },
      nodes: [
        { label: 'لغةً', sub: 'من العَقْد', detail: 'يقال: عقده يعقده عقدًا، ومنه عقدة اليمين والنكاح [المائدة: ٨٩].', page: 11, children: ['الربط', 'الإحكام', 'الشد بقوة', 'نقيضه: الحَلّ'] },
        { label: 'اصطلاحًا', sub: 'تعريفان في الكتاب', page: 11, children: ['الحكم الذي لا يقبل الشك فيه عند معتقده', 'الأمور الثابتة الجازمة التي ينعقد عليها قلب الإنسان ولا يشك فيها'] },
        { label: 'مرادفاتها', sub: 'أسماء أخرى عند السلف', page: 11, children: ['التوحيد', 'السنة', 'أصول الدين', 'الفقه الأكبر', 'الشريعة', 'الإيمان'] },
        { label: 'الصحيحة', sub: 'وصف للعقيدة', page: 11, children: ['السالمة من العيب والخطأ'] }
      ]
    },
    {
      type: 'tree',
      title: 'ما تشمله العقيدة الصحيحة',
      intro: 'تفكيك التعريف إلى أجزائه كما وردت في الكتاب.',
      root: { label: 'الإيمان الجازم', sub: 'انعقاد القلب انعقادًا جازمًا', detail: '﴿إنما المؤمنون الذين آمنوا بالله ورسوله ثم لم يرتابوا﴾ [الحجرات: ١٥] أي: لم يشكوا في إيمانهم.', page: 11 },
      nodes: [
        { label: 'بالله', sub: 'وما يجب له', children: ['في ألوهيته', 'في ربوبيته', 'في أسمائه وصفاته'] },
        { label: 'بملائكته' },
        { label: 'بكتبه' },
        { label: 'برسله' },
        { label: 'باليوم الآخر' },
        { label: 'بالقدر', sub: 'خيره وشره' },
        { label: 'بكل ما جاءت به النصوص الصحيحة', children: ['من أصول الدين', 'من أمور الغيب وأخباره'] }
      ],
      page: 11
    },
    {
      type: 'cards',
      title: 'أدلة ذلك',
      intro: 'ثلاثة أدلة يذكرها الكتاب على مضمون العقيدة الصحيحة.',
      nodes: [
        { label: 'سورة البقرة: ١٧٧', sub: '﴿ليس البر أن تولوا وجوهكم قبل المشرق والمغرب ولكن البر من آمن بالله واليوم الآخر والملائكة والكتاب والنبيين﴾', page: 12 },
        { label: 'سورة البقرة: ٢٨٥', sub: '﴿آمن الرسول بما أنزل إليه من ربه والمؤمنون كل آمن بالله وملائكته وكتبه ورسله﴾', page: 12 },
        { label: 'حديث عمر بن الخطاب', sub: 'أن جبريل سأل النبي ﷺ عن الإيمان فقال: «أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر وتؤمن بالقدر خيره وشره». أخرجه مسلم.', page: 12 }
      ]
    },
    {
      type: 'flow',
      title: 'أثر العقيدة في قبول العمل',
      intro: 'أول أوجه أهمية العقيدة الصحيحة كما في الكتاب.',
      nodes: [
        { label: 'عقيدة صحيحة', children: [{ label: 'قبول العمل الصالح عند الله' }, { label: 'النجاة في الآخرة والفوز بالجنة بعد رحمة الله', sub: '[الكهف: ١١٠؛ التوبة: ٧٢]', detail: '﴿فمن كان يرجو لقاء ربه فليعمل عملا صالحا ولا يشرك بعبادة ربه أحدا﴾ [الكهف: ١١٠].', page: 12 }] },
        { label: 'عقيدة فاسدة', children: [{ label: 'لا يُقبل العمل عند الله' }, { label: 'الخسارة في الآخرة', sub: '[المائدة: ٥؛ الزمر: ٦٥]', detail: '﴿ومن يكفر بالإيمان فقد حبط عمله وهو في الآخرة من الخاسرين﴾ [المائدة: ٥]، ﴿ولقد أوحي إليك وإلى الذين من قبلك لئن أشركت ليحبطن عملك ولتكونن من الخاسرين﴾ [الزمر: ٦٥].', page: 12 }] }
      ],
      note: 'بقية أوجه الأهمية (٢–٥) في الدرس الثاني.'
    }
  ],
  sections: [
    { title: 'أصل الكلمة', text: 'العقيدة من العَقْد، وهو الربط والإحكام والشد بقوة، ونقيضه الحَلّ.', more: 'يقال: عقده يعقده عقدًا، ومنه عقدة اليمين وعقدة النكاح. قال تعالى: ﴿لا يؤاخذكم الله باللغو في أيمانكم ولكن يؤاخذكم بما عقدتم الأيمان﴾ [المائدة: ٨٩].', page: 11 },
    { title: 'أسماء أخرى للعقيدة', text: 'للعقيدة الإسلامية أسماء أخرى عند السلف، منها: التوحيد، والسنة، وأصول الدين، والفقه الأكبر، والشريعة، والإيمان.', more: '', page: 11 },
    { title: 'التعريف الاصطلاحي', text: 'العقيدة اصطلاحًا: الحكم الذي لا يقبل الشك فيه عند معتقده.', more: 'وعرّفها بعضهم بقوله: الأمور الثابتة الجازمة التي ينعقد عليها قلب الإنسان ولا يشك فيها. والصحيحة: السالمة من العيب والخطأ.', page: 11 },
    { title: 'تعريف العقيدة الصحيحة', text: 'الإيمان الجازم بالله وما يجب له، والإيمان بأركان الإيمان، وبكل ما جاءت به النصوص الصحيحة.', more: 'الإيمان الجازم بالله، وما يجب له في ألوهيته وربوبيته وأسمائه وصفاته، كما تتضمن الإيمان بملائكته وكتبه ورسله واليوم الآخر، والقدر خيره وشره، وبكل ما جاءت به النصوص الصحيحة من أصول الدين وأمور الغيب وأخباره.', page: 11 },
    { title: 'شرط الجزم', text: 'لا بد من انعقاد القلب على ذلك انعقادًا جازمًا؛ لا شك فيه ولا ريب.', more: 'قال تعالى: ﴿إنما المؤمنون الذين آمنوا بالله ورسوله ثم لم يرتابوا﴾ [الحجرات: ١٥] أي: لم يشكوا في إيمانهم.', page: 11 },
    { title: 'الأدلة', text: 'من أدلة ذلك: آية البقرة ١٧٧، وآية البقرة ٢٨٥، وحديث جبريل عن الإيمان من رواية عمر بن الخطاب.', more: 'في الحديث: «أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر وتؤمن بالقدر خيره وشره». أخرجه مسلم.', page: 12 },
    { title: 'أهمية العقيدة (١): أساس قبول العمل والنجاة', text: 'العقيدة الصحيحة هي الأساس في قبول العمل الصالح عند الله، والذي به تكون النجاة في الآخرة والفوز بالجنة بعد رحمة الله.', more: 'قال تعالى: ﴿فمن كان يرجو لقاء ربه فليعمل عملا صالحا ولا يشرك بعبادة ربه أحدا﴾ [الكهف: ١١٠]، وانظر [التوبة: ٧٢]. وعلى العكس: فإن العمل لا يقبل عند الله إذا كان صاحبه على عقيدة فاسدة، وبالتالي تكون خسارته في الآخرة: ﴿ومن يكفر بالإيمان فقد حبط عمله وهو في الآخرة من الخاسرين﴾ [المائدة: ٥]، ﴿ولقد أوحي إليك وإلى الذين من قبلك لئن أشركت ليحبطن عملك ولتكونن من الخاسرين﴾ [الزمر: ٦٥].', page: 12 }
  ],
  keycards: [
    { kind: 'definitie', title: 'تعريف العقيدة', items: ['لغةً: من العَقْد، وهو الربط والإحكام والشد بقوة.', 'اصطلاحًا: الحكم الذي لا يقبل الشك فيه عند معتقده.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'مرادفات لفظ العقيدة عند السلف', items: ['التوحيد', 'السنة', 'أصول الدين', 'الفقه الأكبر', 'الشريعة', 'الإيمان'], page: 11, origin: 'boek' },
    { kind: 'voorwaarde', title: 'الجزم', items: ['لا بد من انعقاد القلب انعقادًا جازمًا، لا شك فيه ولا ريب.', '[الحجرات: ١٥]: ﴿ثم لم يرتابوا﴾ أي: لم يشكوا.'], page: 11, origin: 'boek' },
    { kind: 'bewijs', title: 'أدلة مضمون العقيدة الصحيحة', items: ['البقرة: ١٧٧', 'البقرة: ٢٨٥', 'حديث جبريل (عمر بن الخطاب)، أخرجه مسلم'], page: 12, origin: 'boek' },
    { kind: 'onderscheid', title: 'العقيدة الصحيحة والعقيدة الفاسدة', items: ['الصحيحة: أساس قبول العمل والنجاة [الكهف: ١١٠؛ التوبة: ٧٢].', 'الفاسدة: لا يقبل معها العمل، وعاقبتها الخسارة في الآخرة [المائدة: ٥؛ الزمر: ٦٥].'], page: 12, origin: 'boek' }
  ],
  review: [
    'العقيدة لغةً: من العَقْد (الربط والإحكام والشد بقوة)، ونقيضه الحَلّ.',
    'اصطلاحًا: الحكم الذي لا يقبل الشك فيه عند معتقده.',
    'مرادفاتها: التوحيد، السنة، أصول الدين، الفقه الأكبر، الشريعة، الإيمان.',
    'الصحيحة: السالمة من العيب والخطأ.',
    'العقيدة الصحيحة: الإيمان الجازم بالله وما يجب له، وبالملائكة والكتب والرسل واليوم الآخر والقدر، وبكل ما صح من أصول الدين وأمور الغيب.',
    'لا بد من الجزم؛ دليله: الحجرات ١٥.',
    'أدلة المضمون: البقرة ١٧٧، البقرة ٢٨٥، حديث جبريل (مسلم).',
    'أهميتها (١): أساس قبول العمل والنجاة؛ والعمل لا يقبل مع عقيدة فاسدة.'
  ],
  quiz: [
    { type: 'mc', q: 'من أي شيء اشتقت كلمة العقيدة في اللغة؟', options: ['العلم', 'العَقْد', 'العقل', 'العهد'], answer: 1, explain: 'من العَقْد: الربط والإحكام والشد بقوة.', page: 11 },
    { type: 'mc', q: 'ما نقيض العَقْد؟', options: ['الفسخ', 'الحَلّ', 'النقض', 'الترك'], answer: 1, explain: 'العقد نقيض الحل كما في الكتاب.', page: 11 },
    { type: 'mc', q: 'أيّ هذه ليس من أسماء العقيدة التي ذكرها الكتاب؟', options: ['التوحيد', 'الفقه الأكبر', 'أصول الفقه', 'السنة'], answer: 2, explain: 'الأسماء المذكورة: التوحيد، السنة، أصول الدين، الفقه الأكبر، الشريعة، الإيمان.', page: 11 },
    { type: 'tf', q: 'يكفي في العقيدة الصحيحة الظن الغالب.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا بد من الجزم بلا شك ولا ريب [الحجرات: ١٥].', page: 11 },
    { type: 'mc', q: 'ما الآية التي استدل بها الكتاب على اشتراط الجزم؟', options: ['البقرة: ٢٨٥', 'الحجرات: ١٥', 'المائدة: ٨٩', 'الكهف: ١١٠'], answer: 1, explain: '﴿ثم لم يرتابوا﴾ أي: لم يشكوا في إيمانهم.', page: 11 },
    { type: 'mc', q: 'ما معنى «الصحيحة» في قولنا: العقيدة الصحيحة؟', options: ['المشهورة', 'السالمة من العيب والخطأ', 'القديمة', 'المتفق عليها'], answer: 1, explain: 'الصحيحة: السالمة من العيب والخطأ.', page: 11 },
    { type: 'mc', q: 'من أخرج حديث جبريل المذكور في الدرس؟', options: ['البخاري', 'مسلم', 'أبو داود', 'الترمذي'], answer: 1, explain: 'الحديث من رواية عمر بن الخطاب، أخرجه مسلم.', page: 12 },
    { type: 'tf', q: 'يقبل العمل الصالح عند الله ولو كان صاحبه على عقيدة فاسدة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'العمل لا يقبل مع عقيدة فاسدة [المائدة: ٥؛ الزمر: ٦٥].', page: 12 }
  ],
  note: 'يغطي هذا الدرس الصفحتين ١١–١٢. بقية أوجه أهمية العقيدة (٢–٥) في الدرس الثاني.'
}

const nl = {
  title: 'Inleiding in de juiste geloofsleer',
  subtitle: 'Betekenis en belang van de juiste geloofsleer (al-ʿaqīda aṣ-ṣaḥīḥa)',
  summary: 'Wat ʿaqīda betekent in de taal en als vakterm, wat de juiste geloofsleer omvat, waarom zekerheid vereist is, en het eerste punt van haar belang: zij is de grondslag voor de aanvaarding van daden en voor redding.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (1), Zad-reeks' },
  points: [
    { text: 'In de taal komt ʿaqīda van ʿaqd: binden, vastmaken en stevig aantrekken. Het tegendeel is ḥall (losmaken).', detail: 'Hiervan komt ook het "sluiten" van een eed en van een huwelijk. Het boek verwijst naar al-Māʾida 5:89: Allah rekent jullie niet aan wat jullie onbedoeld zweren, maar wel de eden die jullie bewust sluiten (strekking).', page: 11 },
    { text: 'Als vakterm: een oordeel waaraan degene die het gelooft niet twijfelt.', detail: 'Een andere formulering in het boek: de vaststaande, zekere zaken waarop het hart van de mens zich vastlegt en waaraan hij niet twijfelt. "Ṣaḥīḥa" (juist) betekent: vrij van gebrek en fout.', page: 11 },
    { text: 'De juiste geloofsleer is het zekere geloof in Allah en wat Hem toekomt, in de engelen, boeken, boodschappers, de Laatste Dag en de voorbeschikking, en in alles wat de authentieke teksten brengen.', detail: 'Volledige definitie: het zekere geloof in Allah en in wat Hem toekomt in Zijn ulūhiyya (aanbidding), rubūbiyya (heerschappij) en Zijn namen en eigenschappen; het omvat ook het geloof in Zijn engelen, boeken, boodschappers, de Laatste Dag en de voorbeschikking, het goede en het slechte ervan, en in alles wat de authentieke teksten brengen over de grondslagen van de godsdienst en over het verborgene (ghayb) en de berichten daarover.', page: 11 },
    { text: 'Het hart moet zich er met zekerheid op vastleggen, zonder twijfel.', detail: 'Bewijs: al-Ḥujurāt 49:15, over de gelovigen die in Allah en Zijn Boodschapper geloven "en daarna niet twijfelden" (strekking).', page: 11 },
    { text: 'Eerste punt van het belang: de juiste geloofsleer is de grondslag voor de aanvaarding van goede daden bij Allah, en daardoor is er redding in het Hiernamaals.', detail: 'Bewijzen: al-Kahf 18:110 en at-Tawba 9:72. Omgekeerd wordt een daad niet aanvaard als degene die haar verricht een bedorven geloofsleer heeft (al-Māʾida 5:5; az-Zumar 39:65).', page: 12 }
  ],
  terms: [
    { term: 'العقيدة (لغةً)', translit: 'al-ʿaqīda (taalkundig)', meaning: 'Van ʿaqd: binden, vastmaken, stevig aantrekken.', explanation: 'Het werkwoord: ʿaqadahu yaʿqiduhu ʿaqdan.', notes: ['Tegendeel: ḥall (losmaken).', 'Zo ook het sluiten van een eed en van een huwelijk (al-Māʾida 5:89).'], page: 11 },
    { term: 'العقيدة (اصطلاحًا)', translit: 'al-ʿaqīda (als vakterm)', meaning: 'Een oordeel waaraan degene die het gelooft niet twijfelt.', explanation: 'Andere formulering: de vaststaande, zekere zaken waarop het hart zich vastlegt zonder twijfel.', notes: [], page: 11 },
    { term: 'الصحيحة', translit: 'aṣ-ṣaḥīḥa', meaning: 'Juist: vrij van gebrek en fout.', explanation: '', notes: [], page: 11 },
    { term: 'العقيدة الصحيحة', translit: 'al-ʿaqīda aṣ-ṣaḥīḥa', meaning: 'Het zekere geloof in Allah en wat Hem toekomt, in de zuilen van het geloof en in alles wat de authentieke teksten brengen.', explanation: 'Allah: Zijn ulūhiyya, rubūbiyya, namen en eigenschappen; daarnaast de engelen, boeken, boodschappers, de Laatste Dag, de voorbeschikking (het goede en het slechte ervan), en de grondslagen van de godsdienst en het verborgene (ghayb) uit de authentieke teksten.', notes: ['Voorwaarde: het hart legt zich er met zekerheid op vast, zonder twijfel (al-Ḥujurāt 49:15).'], page: 11 }
  ],
  diagrams: [
    {
      type: 'mindmap',
      title: 'Begrippenkaart: wat is ʿaqīda?',
      intro: 'Klik op een tak voor meer uitleg.',
      root: { label: 'العقيدة', sub: 'al-ʿaqīda' },
      nodes: [
        { label: 'In de taal', sub: 'van ʿaqd', detail: 'Zo ook het sluiten van een eed en van een huwelijk (al-Māʾida 5:89).', page: 11, children: ['binden', 'vastmaken', 'stevig aantrekken', 'tegendeel: ḥall (losmaken)'] },
        { label: 'Als vakterm', sub: 'twee formuleringen in het boek', page: 11, children: ['een oordeel waaraan de gelovige niet twijfelt', 'de zekere zaken waarop het hart zich vastlegt zonder twijfel'] },
        { label: 'Andere namen', sub: 'bij de salaf', page: 11, children: ['at-tawḥīd', 'as-sunna', 'uṣūl ad-dīn', 'al-fiqh al-akbar', 'ash-sharīʿa', 'al-īmān'] },
        { label: '"Juist" (ṣaḥīḥa)', sub: 'als bijvoeglijk naamwoord', page: 11, children: ['vrij van gebrek en fout'] }
      ]
    },
    {
      type: 'tree',
      title: 'Wat de juiste geloofsleer omvat',
      intro: 'De definitie uit het boek, opgesplitst in haar onderdelen.',
      root: { label: 'Zeker geloof', sub: 'het hart legt zich vast zonder twijfel', detail: 'al-Ḥujurāt 49:15: de gelovigen zijn zij die in Allah en Zijn Boodschapper geloven en daarna niet twijfelen (strekking).', page: 11 },
      nodes: [
        { label: 'in Allah', sub: 'en wat Hem toekomt', children: ['in Zijn ulūhiyya (aanbidding)', 'in Zijn rubūbiyya (heerschappij)', 'in Zijn namen en eigenschappen'] },
        { label: 'in Zijn engelen' },
        { label: 'in Zijn boeken' },
        { label: 'in Zijn boodschappers' },
        { label: 'in de Laatste Dag' },
        { label: 'in de voorbeschikking', sub: 'het goede en het slechte ervan' },
        { label: 'in alles wat de authentieke teksten brengen', children: ['over de grondslagen van de godsdienst', 'over het verborgene (ghayb) en de berichten daarover'] }
      ],
      page: 11
    },
    {
      type: 'cards',
      title: 'De bewijzen',
      intro: 'Drie bewijzen die het boek geeft voor de inhoud van de juiste geloofsleer.',
      nodes: [
        { label: 'al-Baqara 2:177', sub: 'Vroomheid is niet dat je je gezicht naar het oosten of westen keert, maar vroom is wie gelooft in Allah, de Laatste Dag, de engelen, het Boek en de profeten (strekking).', page: 12 },
        { label: 'al-Baqara 2:285', sub: 'De Boodschapper gelooft in wat hem van zijn Heer is neergezonden, en de gelovigen ook: allen geloven in Allah, Zijn engelen, Zijn boeken en Zijn boodschappers (strekking).', page: 12 },
        { label: 'Hadith van ʿUmar ibn al-Khaṭṭāb', sub: 'Jibrīl vroeg de Profeet ﷺ naar het geloof. Hij zei: «dat je gelooft in Allah, Zijn engelen, Zijn boeken, Zijn boodschappers en de Laatste Dag, en dat je gelooft in de voorbeschikking, het goede en het slechte ervan» (weergave van de betekenis). Overgeleverd door Muslim.', page: 12 }
      ]
    },
    {
      type: 'flow',
      title: 'Geloofsleer en de aanvaarding van daden',
      intro: 'Het eerste punt van het belang van de juiste geloofsleer, zoals het boek het uitlegt.',
      nodes: [
        { label: 'Juiste geloofsleer', children: [{ label: 'Goede daden worden door Allah aanvaard' }, { label: 'Redding in het Hiernamaals en het Paradijs, na Allahs barmhartigheid', sub: 'al-Kahf 18:110; at-Tawba 9:72', detail: 'al-Kahf 18:110: wie hoopt zijn Heer te ontmoeten, laat hem goede daden doen en niemand deelgenoot maken in de aanbidding van zijn Heer (strekking).', page: 12 }] },
        { label: 'Bedorven geloofsleer', children: [{ label: 'De daad wordt niet aanvaard' }, { label: 'Verlies in het Hiernamaals', sub: 'al-Māʾida 5:5; az-Zumar 39:65', detail: 'Volgens deze verzen gaan de daden verloren van wie ongelovig wordt of deelgenoten toekent, en behoort hij in het Hiernamaals tot de verliezers (strekking).', page: 12 }] }
      ],
      note: 'De overige punten van het belang (2–5) komen in les 2.'
    }
  ],
  sections: [
    { title: 'Herkomst van het woord', text: 'ʿAqīda komt van ʿaqd: binden, vastmaken en stevig aantrekken. Het tegendeel is ḥall, losmaken.', more: 'Van dezelfde wortel komt het "sluiten" (ʿuqda) van een eed en van een huwelijk. Het boek haalt hiervoor al-Māʾida 5:89 aan, waar sprake is van de eden die je bewust sluit.', page: 11 },
    { title: 'Andere namen voor de geloofsleer', text: 'De salaf gebruikten voor de islamitische geloofsleer ook andere namen: at-tawḥīd, as-sunna, uṣūl ad-dīn, al-fiqh al-akbar, ash-sharīʿa en al-īmān.', more: '', page: 11 },
    { title: 'Betekenis als vakterm', text: 'Als vakterm is ʿaqīda: een oordeel waaraan degene die het gelooft niet twijfelt.', more: 'Sommigen omschreven het als: de vaststaande, zekere zaken waarop het hart van de mens zich vastlegt en waaraan hij niet twijfelt. Het woord ṣaḥīḥa (juist) betekent: vrij van gebrek en fout.', page: 11 },
    { title: 'Definitie van de juiste geloofsleer', text: 'Het zekere geloof in Allah en wat Hem toekomt, in de zuilen van het geloof, en in alles wat de authentieke teksten brengen.', more: 'Volledig: het zekere geloof in Allah en in wat Hem toekomt in Zijn ulūhiyya, rubūbiyya en Zijn namen en eigenschappen. Het omvat ook het geloof in Zijn engelen, boeken, boodschappers, de Laatste Dag en de voorbeschikking, het goede en het slechte ervan, en in alles wat de authentieke teksten brengen over de grondslagen van de godsdienst en over het verborgene en de berichten daarover.', page: 11 },
    { title: 'Voorwaarde: zekerheid', text: 'Het hart moet zich hier met zekerheid op vastleggen; twijfel is niet genoeg.', more: 'Het boek haalt al-Ḥujurāt 49:15 aan: de gelovigen zijn zij die in Allah en Zijn Boodschapper geloven "en daarna niet twijfelden", dat wil zeggen: ze twijfelden niet aan hun geloof.', page: 11 },
    { title: 'De bewijzen', text: 'Bewijzen voor deze inhoud zijn al-Baqara 2:177, al-Baqara 2:285 en de hadith van Jibrīl, overgeleverd door ʿUmar ibn al-Khaṭṭāb.', more: 'In de hadith vraagt Jibrīl de Profeet ﷺ naar het geloof, en hij antwoordt: dat je gelooft in Allah, Zijn engelen, Zijn boeken, Zijn boodschappers en de Laatste Dag, en in de voorbeschikking, het goede en het slechte ervan. Overgeleverd door Muslim. (De Nederlandse tekst geeft de betekenis weer.)', page: 12 },
    { title: 'Belang (1): grondslag voor aanvaarding en redding', text: 'De juiste geloofsleer is de grondslag voor de aanvaarding van goede daden bij Allah. Daardoor is er redding in het Hiernamaals en het binnengaan van het Paradijs, na Allahs barmhartigheid.', more: 'Bewijzen: al-Kahf 18:110 en at-Tawba 9:72. Omgekeerd: een daad wordt bij Allah niet aanvaard als degene die haar verricht een bedorven geloofsleer heeft, en dan lijdt hij verlies in het Hiernamaals (al-Māʾida 5:5; az-Zumar 39:65).', page: 12 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Definitie van ʿaqīda', items: ['Taalkundig: van ʿaqd, binden, vastmaken, stevig aantrekken.', 'Als vakterm: een oordeel waaraan de gelovige niet twijfelt.'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'Andere namen bij de salaf', items: ['at-tawḥīd', 'as-sunna', 'uṣūl ad-dīn', 'al-fiqh al-akbar', 'ash-sharīʿa', 'al-īmān'], page: 11, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Zekerheid (jazm)', items: ['Het hart legt zich vast zonder twijfel.', 'Bewijs: al-Ḥujurāt 49:15 ("en daarna niet twijfelden").'], page: 11, origin: 'boek' },
    { kind: 'bewijs', title: 'Bewijzen voor de inhoud', items: ['al-Baqara 2:177', 'al-Baqara 2:285', 'Hadith van Jibrīl (via ʿUmar), Muslim'], page: 12, origin: 'boek' },
    { kind: 'onderscheid', title: 'Juiste tegenover bedorven geloofsleer', items: ['Juist: grondslag voor aanvaarding van daden en voor redding (18:110; 9:72).', 'Bedorven: daden worden niet aanvaard; verlies in het Hiernamaals (5:5; 39:65).'], page: 12, origin: 'boek' }
  ],
  review: [
    'ʿAqīda = van ʿaqd: binden, vastmaken, stevig aantrekken. Tegendeel: ḥall.',
    'Vakterm: een oordeel waaraan de gelovige niet twijfelt.',
    'Andere namen: tawḥīd, sunna, uṣūl ad-dīn, al-fiqh al-akbar, sharīʿa, īmān.',
    'Ṣaḥīḥa = vrij van gebrek en fout.',
    'Inhoud: Allah (ulūhiyya, rubūbiyya, namen en eigenschappen), engelen, boeken, boodschappers, Laatste Dag, voorbeschikking, en al wat authentieke teksten brengen.',
    'Voorwaarde: zekerheid (49:15).',
    'Bewijzen: 2:177, 2:285, hadith van Jibrīl (Muslim).',
    'Belang 1: grondslag voor aanvaarding van daden en redding; bij een bedorven geloofsleer geen aanvaarding.'
  ],
  quiz: [
    { type: 'mc', q: 'Waar komt het woord ʿaqīda taalkundig vandaan?', options: ['ʿilm (kennis)', 'ʿaqd (binden, vastmaken)', 'ʿaql (verstand)', 'ʿahd (verbond)'], answer: 1, explain: 'Van ʿaqd: binden, vastmaken en stevig aantrekken.', page: 11 },
    { type: 'mc', q: 'Wat is het tegendeel van ʿaqd?', options: ['faskh (ontbinden van een contract)', 'ḥall (losmaken)', 'naqḍ (verbreken)', 'tark (laten)'], answer: 1, explain: 'Het boek noemt ḥall als tegendeel.', page: 11 },
    { type: 'mc', q: 'Welke naam noemt het boek níet als andere naam voor de geloofsleer?', options: ['at-tawḥīd', 'al-fiqh al-akbar', 'uṣūl al-fiqh', 'as-sunna'], answer: 2, explain: 'Genoemd worden: tawḥīd, sunna, uṣūl ad-dīn, al-fiqh al-akbar, sharīʿa en īmān.', page: 11 },
    { type: 'tf', q: 'Voor de juiste geloofsleer is een sterk vermoeden voldoende.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het boek eist zekerheid zonder twijfel (al-Ḥujurāt 49:15).', page: 11 },
    { type: 'mc', q: 'Met welk vers onderbouwt het boek dat zekerheid vereist is?', options: ['al-Baqara 2:285', 'al-Ḥujurāt 49:15', 'al-Māʾida 5:89', 'al-Kahf 18:110'], answer: 1, explain: '"En daarna niet twijfelden": zij twijfelden niet aan hun geloof.', page: 11 },
    { type: 'mc', q: 'Wat betekent ṣaḥīḥa in "al-ʿaqīda aṣ-ṣaḥīḥa"?', options: ['bekend', 'vrij van gebrek en fout', 'oud', 'waarover iedereen het eens is'], answer: 1, explain: 'Ṣaḥīḥa: vrij van gebrek en fout.', page: 11 },
    { type: 'mc', q: 'Wie heeft de hadith van Jibrīl uit deze les overgeleverd (in zijn verzameling opgenomen)?', options: ['al-Bukhārī', 'Muslim', 'Abū Dāwūd', 'at-Tirmidhī'], answer: 1, explain: 'De hadith komt van ʿUmar ibn al-Khaṭṭāb en staat bij Muslim.', page: 12 },
    { type: 'tf', q: 'Een goede daad wordt door Allah aanvaard, ook als degene die haar doet een bedorven geloofsleer heeft.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Volgens het boek wordt de daad dan niet aanvaard (al-Māʾida 5:5; az-Zumar 39:65).', page: 12 }
  ],
  note: 'Deze les beslaat p. 11–12 van het boek. De overige punten over het belang (2–5) staan in les 2. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling van de Koran.'
}

export default { book: 'zad-n1-aqeedah', chapter: '1', ar, nl }
