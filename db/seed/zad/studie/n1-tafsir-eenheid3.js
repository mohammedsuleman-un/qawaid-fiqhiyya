// Hoofdstukkaart bij التفسير (١), eenheid 3: آية الكرسي (lessen 17–19, boek p. 51–62).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 57 is in het boek "alleen ter kennisname".
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (١)، سلسلة زاد العلمية',
  pages: '51–62',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTafsir/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبي بن كعب', text: 'ليهنك العلم أبا المنذر', takhrij: 'أخرجه مسلم', note: 'قاله النبي ﷺ لما سأله: أي آية في كتاب الله أعظم؟ فقال: آية الكرسي.', pages: [52, 53], nl: 'Gefeliciteerd met je kennis, Abū al-Mundhir', nlNote: 'Gezegd toen de Profeet ﷺ hem vroeg welk vers in het Boek van Allah het grootst is, en hij antwoordde: Āyat al-Kursī.' },
  { narrator: 'أبو هريرة', text: 'إذا أويت إلى فراشك فاقرأ آية الكرسي ﴿الله لا إله إلا هو الحي القيوم﴾ حتى تختم الآية، فإنك لن يزال عليك من الله حافظ، ولا يقربك شيطان حتى تصبح', takhrij: 'رواه البخاري', note: 'في قصة أبي هريرة مع حفظ الزكاة.', pages: [53], nl: 'Als je naar bed gaat, reciteer dan Āyat al-Kursī, "Allah, er is geen god dan Hij, de Levende, de Zelfbestaande", tot het eind van het vers; dan blijft er een beschermer van Allah bij je en komt geen duivel bij je tot de ochtend', nlNote: 'Uit het verhaal van Abū Hurayra die de zakāt bewaakte.' },
  { narrator: 'أبو أمامة', text: 'من قرأ دبر كل صلاة مكتوبة آية الكرسي لم يمنعه من دخول الجنة إلا أن يموت', takhrij: 'رواه النسائي في اليوم والليلة وصححه الألباني', note: '', pages: [52, 53], nl: 'wie na elk verplicht gebed Āyat al-Kursī reciteert, hem houdt niets van het Paradijs tegen behalve de dood', nlNote: '' },
  { narrator: 'أبو موسى', text: 'إن الله لا ينام ولا ينبغي له أن ينام...', takhrij: 'رواه مسلم', note: 'في تفسير ﴿لا تأخذه سنة ولا نوم﴾.', pages: [55], nl: 'Allah slaapt niet en het past Hem niet te slapen …', nlNote: 'Bij de uitleg van "sluimer noch slaap overmant Hem".' },
  { narrator: '', text: 'ارفع رأسك، وقل تسمع، واشفع تشفع', takhrij: 'أخرجه مسلم', note: 'لا يبتدئ الشافع قبل الإذن، حتى النبي ﷺ.', pages: [56], nl: 'Hef je hoofd op; spreek en je wordt gehoord, spreek voor en je voorspraak wordt aanvaard', nlNote: 'Niemand begint met voorspraak vóór de toestemming, ook de Profeet ﷺ niet.' },
  { narrator: 'ابن عباس', text: 'الكرسي موضع القدمين، والعرش لا يقدر أحد قدره', takhrij: 'أخرجه عبد الله بن الإمام أحمد في السنة وصححه الألباني', note: 'أثر له حكم الرفع لأنه ليس مما يقال بالاجتهاد. ' + FYI, pages: [57], nl: 'De Kursī is de plaats van de voeten, en de Troon – niemand kan zijn grootte bepalen', nlNote: 'Een uitspraak die als van de Profeet ﷺ geldt, omdat ze niet uit eigen redenering kan komen. ' + FYI_NL }
]

const TAKHRIJ_NL = {
  'أخرجه مسلم': 'Muslim',
  'رواه مسلم': 'Muslim',
  'رواه البخاري': 'al-Bukhārī',
  'رواه النسائي في اليوم والليلة وصححه الألباني': 'an-Nasāʾī in ʿAmal al-yawm wa-l-layla; authentiek volgens al-Albānī',
  'أخرجه عبد الله بن الإمام أحمد في السنة وصححه الألباني': 'ʿAbd Allāh, de zoon van imam Aḥmad, in as-Sunna; authentiek volgens al-Albānī'
}
const NARRATOR_NL = { 'أبي بن كعب': 'Ubayy ibn Kaʿb', 'أبو هريرة': 'Abū Hurayra', 'أبو أمامة': 'Abū Umāma', 'أبو موسى': 'Abū Mūsā al-Ashʿarī', 'ابن عباس': 'Ibn ʿAbbās' }

const PERSONS = [
  ['ubayy-ibn-kab', 'text', [52, 53], 'أجاب أن أعظم آية آية الكرسي، فقال له النبي ﷺ: «ليهنك العلم أبا المنذر».', 'Antwoordde dat Āyat al-Kursī het grootste vers is; de Profeet ﷺ zei: "gefeliciteerd met je kennis, Abū al-Mundhir".'],
  ['abu-hurayra', 'text', [53], 'علم قراءة آية الكرسي عند النوم في قصة حفظ الزكاة.', 'Leerde de recitatie van Āyat al-Kursī voor het slapen, in het verhaal van de zakāt.'],
  ['abu-umama', 'text', [52, 53], 'روى فضل قراءتها دبر كل صلاة.', 'Overleverde de deugd van haar recitatie na elk gebed.'],
  ['ibn-uthaymin', 'text', [54], 'قال: ﴿الله لا إله إلا هو﴾ تدل على نفي الألوهية الحق إلا لله وحده.', 'Zei: "Allah, er is geen god dan Hij" ontkent elke ware godheid behalve Allah alleen.'],
  ['as-sadi', 'text', [55, 58], 'قال: الحي القيوم يدلان على سائر الأسماء الحسنى، والآية بمفردها عقيدة في الأسماء والصفات.', 'Zei: al-Ḥayy al-Qayyūm wijzen op alle schone namen, en het vers alleen is al een geloofsleer over de namen en eigenschappen.'],
  ['al-qurtubi', 'text', [55], 'قال: النعاس ما كان من العين، فإذا صار في القلب صار نوما.', 'Zei: sluimer zit in het oog; als het het hart bereikt, is het slaap.'],
  ['abu-musa-al-ashari', 'text', [55], 'روى «إن الله لا ينام ولا ينبغي له أن ينام».', 'Overleverde: "Allah slaapt niet en het past Hem niet te slapen".'],
  ['ibn-abbas', 'text', [57], 'قال: الكرسي موضع القدمين، والعرش لا يقدر أحد قدره.', 'Zei: de Kursī is de plaats van de voeten, en niemand kan de grootte van de Troon bepalen.'],
  ['abdallah-ibn-ahmad', 'takhrij', [57], 'أخرج أثر ابن عباس في الكرسي في كتاب السنة.', 'Nam de uitspraak van Ibn ʿAbbās over de Kursī op in as-Sunna.'],
  ['ibn-taymiyya', 'text', [57], 'جزم بأن الكرسي موضع القدمين.', 'Stelde vast dat de Kursī de plaats van de voeten is.'],
  ['ibn-al-qayyim', 'text', [57], 'جزم بأن الكرسي موضع القدمين.', 'Stelde vast dat de Kursī de plaats van de voeten is.'],
  ['muslim', 'takhrij', [53, 55, 56], 'أخرج أحاديث أبي بن كعب وأبي موسى والشفاعة.', 'Nam de hadith van Ubayy, van Abū Mūsā en over de voorspraak op.'],
  ['al-bukhari', 'takhrij', [53], 'روى حديث أبي هريرة في قراءتها عند النوم.', 'Overleverde de hadith van Abū Hurayra over haar recitatie voor het slapen.'],
  ['an-nasai', 'takhrij', [52, 53], 'روى حديث أبي أمامة في «عمل اليوم والليلة».', 'Overleverde de hadith van Abū Umāma in ʿAmal al-yawm wa-l-layla.'],
  ['al-albani', 'takhrij', [53, 57], 'صحح حديث أبي أمامة وأثر ابن عباس.', 'Verklaarde de hadith van Abū Umāma en de uitspraak van Ibn ʿAbbās authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'آية الكرسي',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة',
  summary: 'فضل آية الكرسي وفضل قراءتها، ثم تفسير جملها العشر: الألوهية، والحي القيوم، ونفي السنة والنوم، والملك، والشفاعة بالإذن، وإحاطة العلم، والكرسي، والعلو والعظمة، ثم فوائدها وقسما علو الله.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'آية الكرسي', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'الفضل', sub: 'الدرس ١٧', page: 52, children: ['أعظم آية', 'عند النوم', 'دبر الصلاة'] },
      { label: 'الجمل الأولى', sub: 'الدرس ١٧', page: 54, children: ['لا إله إلا هو', 'الحي القيوم', 'لا تأخذه سنة', 'له ما في السماوات'] },
      { label: 'الشفاعة والعلم والكرسي', sub: 'الدرس ١٨', page: 56, children: ['بإذنه', 'إحاطة العلم', 'الكرسي', 'العلي العظيم'] },
      { label: 'الفوائد', sub: 'الدرس ١٩', page: 59, children: ['خمسة أسماء', 'الصفات المنفية', 'الرد على المخالفين', 'العلو'] }
    ]
  },
  points: [
    { text: 'آية الكرسي أعظم آية في كتاب الله.', page: 53 },
    { text: 'من قرأها عند النوم لم يزل عليه من الله حافظ، ومن قرأها دبر كل صلاة مكتوبة لم يمنعه من الجنة إلا الموت.', page: 53 },
    { text: 'اشتملت الآية على عشر جمل، لكل جملة معنى عظيم.', page: 54 },
    { text: 'الحي القيوم يدلان على سائر الأسماء الحسنى، وقيل: هما الاسم الأعظم.', page: 55 },
    { text: 'لا يشفع أحد عند الله إلا بإذنه، حتى النبي ﷺ.', page: 56 },
    { text: 'الكرسي موضع القدمين، والعرش أعظم منه.', page: 57 },
    { text: 'الصفات المنفية متضمنة لثبوت كمال ضدها.', page: 59 },
    { text: 'علو الله قسمان: علو الذات وعلو الصفة.', page: 60 }
  ],
  terms: [
    { term: 'الحي', translit: 'al-ḥayy', meaning: 'الحي في نفسه الذي لا يموت أبدًا.', explanation: 'له الحياة الكاملة المستلزمة لجميع صفات الذات.', notes: [], page: 54 },
    { term: 'القيوم', translit: 'al-qayyūm', meaning: 'القائم بنفسه، القائم بتدبير ما خلق.', explanation: 'جميع الموجودات مفتقرة إليه وهو غني عنها.', notes: ['[الروم: ٢٥]'], page: 54 },
    { term: 'السنة', translit: 'as-sina', meaning: 'النعاس.', explanation: 'قال القرطبي: النعاس ما كان من العين، فإذا صار في القلب صار نومًا.', notes: [], page: 55 },
    { term: 'الشفاعة', translit: 'ash-shafāʿa', meaning: 'لغة: جعل الوتر شفعًا.', explanation: 'اصطلاحًا: التوسط للغير لجلب منفعة أو دفع مضرة.', notes: ['[النجم: ٢٦]'], page: 56 },
    { term: 'الكرسي', translit: 'al-kursī', meaning: 'موضع القدمين.', explanation: 'وليس أكبر المخلوقات؛ فالعرش أعظم منه.', notes: ['للاطلاع فقط'], page: 57 },
    { term: 'يؤوده', translit: 'yaʾūduhu', meaning: 'من الأود وهو الثقل.', explanation: 'أي لا يثقله حفظ السماوات والأرض.', notes: [], page: 58 },
    { term: 'العلي', translit: 'al-ʿaliyy', meaning: 'العلي بذاته وبقهره وبقدره.', explanation: 'صفة تدل على الثبوت والاستمرار.', notes: [], page: 58 },
    { term: 'الصفات المنفية', translit: 'aṣ-ṣifāt al-manfiyya', meaning: 'ما نفاه الله عن نفسه.', explanation: 'وهي متضمنة لثبوت كمال ضدها؛ فعدم النوم لكمال الحياة والقيومية.', notes: [], page: 59 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'جمل آية الكرسي',
      intro: 'اشتملت الآية على عشر جمل.',
      nodes: [
        { label: '﴿الله لا إله إلا هو﴾', sub: 'لا معبود بحق سواه', page: 54 },
        { label: '﴿الحي القيوم﴾', sub: 'الحياة الكاملة والقيام بالتدبير', page: 54 },
        { label: '﴿لا تأخذه سنة ولا نوم﴾', sub: 'لكمال حياته وقيوميته', page: 55 },
        { label: '﴿له ما في السماوات وما في الأرض﴾', sub: 'الجميع عبيده وفي ملكه', page: 55 },
        { label: '﴿من ذا الذي يشفع عنده إلا بإذنه﴾', sub: 'لكمال عظمته', page: 56 },
        { label: '﴿يعلم ما بين أيديهم وما خلفهم﴾', sub: 'إحاطة علمه', page: 56 },
        { label: '﴿ولا يحيطون بشيء من علمه إلا بما شاء﴾', page: 57 },
        { label: '﴿وسع كرسيه السماوات والأرض﴾', page: 57 },
        { label: '﴿ولا يؤوده حفظهما﴾', sub: 'لا يثقله', page: 58 },
        { label: '﴿وهو العلي العظيم﴾', page: 58 }
      ]
    },
    {
      type: 'cards',
      title: 'فوائد آية الكرسي',
      intro: 'كما في الدرس التاسع عشر.',
      nodes: [
        { label: 'إثبات خمسة أسماء', sub: 'الله، الحي، القيوم، العلي، العظيم', page: 59 },
        { label: 'إثبات الحياة الكاملة', sub: '[الحديد: ٣]', page: 59 },
        { label: 'إثبات الصفات المنفية', sub: 'وتضمنها كمال ضدها', page: 59 },
        { label: 'تسلية المصاب ورضاه بالقضاء', page: 59 },
        { label: 'الرد على القدرية الغلاة', sub: 'بإثبات عموم العلم', page: 59 },
        { label: 'الرد على الخوارج والمعتزلة', sub: 'بإثبات الشفاعة', page: 59 },
        { label: 'إثبات علو الله', page: 60 },
        { label: 'التحذير من الطغيان على الغير', sub: '[النساء: ٣٤]', page: 61 }
      ]
    },
    {
      type: 'tree',
      title: 'علو الله عند أهل السنة',
      intro: 'قسمان، ومن خالف في علو الذات.',
      root: { label: 'علو الله', page: 60 },
      nodes: [
        { label: 'علو الذات', children: ['أنه بذاته فوق كل شيء', 'خالف الحلولية: في كل مكان', 'وخالف المعطلة: لا فوق ولا تحت'], page: 60 },
        { label: 'علو الصفة', children: ['كامل الصفات من كل وجه', 'متفق عليه بين فرق الأمة'], page: 60 }
      ]
    }
  ],
  sections: [
    { title: 'الحي القيوم', text: 'قال السعدي: هذان الاسمان يدلان على سائر الأسماء الحسنى؛ فالحي له الحياة الكاملة المستلزمة لصفات الذات، والقيوم قام بنفسه وقام به غيره، وذلك مستلزم لجميع أفعاله.', more: 'ولهذا قال بعض المحققين: إنهما الاسم الأعظم الذي إذا دعي الله به أجاب.', page: 55 },
    { title: 'لماذا لم يقل: والأرضين؟', text: 'قيل: لأنه قد سبق ذكر الجمع في «السماوات» فاستغنى بذلك عن إعادته، ومثله ﴿وجعل الظلمات والنور﴾ ولم يقل: الأنوار.', more: '[الأنعام: ١].', page: 56 },
    { title: 'الشفاعة بالإذن', text: 'لا يتجاسر أحد على الشفاعة عند الله إلا بإذنه، حتى النبي ﷺ وهو أعظم الناس جاهًا؛ والله إذا أراد أن يرحم عبدًا أذن لمن أراد إكرامه أن يشفع فيه.', more: '', page: 56 },
    { title: 'الكرسي والعرش (للاطلاع فقط)', text: 'أهل السنة عامتهم على أن الكرسي موضع القدمين، وبهذا جزم ابن تيمية وابن القيم؛ وإذا كان الكرسي يسع السماوات والأرض، فالعرش أعظم منه.', more: FYI, page: 57 },
    { title: 'الآية عقيدة كاملة', text: 'قال السعدي: اشتملت هذه الآية على توحيد الإلهية والربوبية والأسماء والصفات، وعلى إحاطة ملكه وعلمه وسعة سلطانه، فهي بمفردها عقيدة في أسماء الله وصفاته.', more: '', page: 58 },
    { title: 'اذكر علو الله', text: 'إذا كنت متعاليًا في نفسك فاذكر علو الله، وإذا كنت عظيمًا في نفسك فاذكر عظمة الله، وإذا كنت كبيرًا في نفسك فاذكر كبرياء الله.', more: '﴿فإن أطعنكم فلا تبغوا عليهن سبيلًا إن الله كان عليًا كبيرًا﴾.', page: 61 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'الأسماء الخمسة في الآية', items: ['الله', 'الحي', 'القيوم', 'العلي', 'العظيم'], page: 59, origin: 'boek' },
    { kind: 'regel', title: 'الصفات المنفية', items: ['كل صفة نفاها الله عن نفسه تتضمن كمال ضدها.'], page: 59, origin: 'boek' },
    { kind: 'onderscheid', title: 'قسما العلو', items: ['علو الذات: فوق كل شيء.', 'علو الصفة: كامل الصفات من كل وجه.'], page: 60, origin: 'boek' },
    { kind: 'opsomming', title: 'متى تقرأ؟', items: ['عند النوم', 'دبر كل صلاة مكتوبة'], page: 53, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'آية الكرسي أعظم آية في كتاب الله.',
    'تقرأ عند النوم ودبر كل صلاة مكتوبة.',
    'الحي القيوم يدلان على سائر الأسماء الحسنى.',
    'لا شفاعة إلا بإذن الله، وعلمه محيط بكل شيء.',
    'الكرسي موضع القدمين، والعرش أعظم منه.',
    'علو الله: علو ذات وعلو صفة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أعظم آية في كتاب الله؟', options: ['آية الكرسي', 'آخر آية في البقرة', 'أول آية في الفاتحة', 'آية النور'], answer: 0, explain: 'كما في حديث أبي بن كعب.', page: 53 },
    { type: 'mc', q: 'كم جملة اشتملت عليها آية الكرسي؟', options: ['عشر', 'خمس', 'سبع', 'ثلاث'], answer: 0, explain: 'لكل جملة معنى عظيم.', page: 54 },
    { type: 'mc', q: 'ما معنى «السنة» في ﴿لا تأخذه سنة﴾؟', options: ['النعاس', 'العام', 'الطريقة', 'النسيان'], answer: 0, explain: 'في قول كافة أهل العلم.', page: 55 },
    { type: 'tf', q: 'النبي ﷺ يشفع يوم القيامة قبل أن يؤذن له.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا يشفع أحد إلا بإذن الله، حتى النبي ﷺ.', page: 56 },
    { type: 'mc', q: 'ما الكرسي؟', options: ['موضع القدمين', 'العرش', 'العلم', 'الملك'], answer: 0, explain: 'كما قال ابن عباس.', page: 57 },
    { type: 'mc', q: 'ما معنى ﴿ولا يؤوده حفظهما﴾؟', options: ['لا يثقله', 'لا يغيب عنه', 'لا يملكه غيره', 'لا يعلمه غيره'], answer: 0, explain: 'الأود: الثقل.', page: 58 },
    { type: 'mc', q: 'على من يرد إثبات عموم علم الله في الآية؟', options: ['القدرية الغلاة', 'الجبرية', 'الخوارج', 'المرجئة'], answer: 0, explain: 'أنكروا علم الله بأفعال خلقه قبل وقوعها.', page: 59 },
    { type: 'mc', q: 'أي قسمي العلو متفق عليه بين فرق الأمة؟', options: ['علو الصفة', 'علو الذات', 'كلاهما مختلف فيه', 'لا شيء منهما'], answer: 0, explain: 'وخالف في علو الذات الحلولية والمعطلة.', page: 60 }
  ]),
  note: 'نشاط الكتاب في صفحة ٦١. ما كان في الكتاب للاطلاع فقط مشار إليه في موضعه.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Āyat al-Kursī',
  subtitle: 'Drie lessen samen op één pagina',
  summary: 'De deugd van Āyat al-Kursī en van het reciteren ervan, de uitleg van de tien zinnen: godheid, de Levende en Zelfbestaande, geen sluimer of slaap, heerschappij, voorspraak met toestemming, allesomvattende kennis, de Kursī, verhevenheid en grootheid, en tot slot de lessen en de twee soorten verhevenheid van Allah.',
  source: { ...source, label: 'Kitāb at-Tafsīr (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Āyat al-Kursī', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Deugd', sub: 'les 17', page: 52, children: ['het grootste vers', 'voor het slapen', 'na het gebed'] },
      { label: 'De eerste zinnen', sub: 'les 17', page: 54, children: ['geen god dan Hij', 'de Levende, de Zelfbestaande', 'geen sluimer', 'van Hem is alles'] },
      { label: 'Voorspraak, kennis, Kursī', sub: 'les 18', page: 56, children: ['met toestemming', 'allesomvattende kennis', 'de Kursī', 'de Verhevene, de Grootse'] },
      { label: 'Lessen', sub: 'les 19', page: 59, children: ['vijf namen', 'ontkende eigenschappen', 'weerleggingen', 'verhevenheid'] }
    ]
  },
  points: [
    { text: 'Āyat al-Kursī is het grootste vers in het Boek van Allah.', page: 53 },
    { text: 'Wie het voor het slapen reciteert, houdt een beschermer van Allah; wie het na elk verplicht gebed reciteert, houdt niets van het Paradijs tegen behalve de dood.', page: 53 },
    { text: 'Het vers bevat tien zinnen, elk met een geweldige betekenis.', page: 54 },
    { text: 'Al-Ḥayy al-Qayyūm wijzen op alle schone namen; sommigen zeiden dat zij de grootste naam zijn.', page: 55 },
    { text: 'Niemand doet voorspraak bij Allah zonder Zijn toestemming, ook de Profeet ﷺ niet.', page: 56 },
    { text: 'De Kursī is de plaats van de voeten; de Troon is groter.', page: 57 },
    { text: 'Ontkende eigenschappen houden de volmaaktheid van het tegendeel in.', page: 59 },
    { text: 'Allahs verhevenheid heeft twee soorten: van Zijn wezen en van Zijn eigenschappen.', page: 60 }
  ],
  terms: [
    { term: 'الحي', translit: 'al-ḥayy', meaning: 'De Levende: levend in Zichzelf, sterft nooit.', explanation: 'Met volmaakt leven, dat alle eigenschappen van Zijn wezen inhoudt.', notes: [], page: 54 },
    { term: 'القيوم', translit: 'al-qayyūm', meaning: 'De Zelfbestaande: bestaat door Zichzelf en bestuurt wat Hij schiep.', explanation: 'Alles heeft Hem nodig en Hij heeft niets nodig.', notes: ['ar-Rūm 30:25'], page: 54 },
    { term: 'السنة', translit: 'as-sina', meaning: 'Sluimer.', explanation: 'al-Qurṭubī: sluimer zit in het oog; als het het hart bereikt, is het slaap.', notes: [], page: 55 },
    { term: 'الشفاعة', translit: 'ash-shafāʿa', meaning: 'Voorspraak. Taal: van oneven even maken.', explanation: 'Vakterm: voor een ander bemiddelen om goed te verkrijgen of schade af te wenden.', notes: ['an-Najm 53:26'], page: 56 },
    { term: 'الكرسي', translit: 'al-kursī', meaning: 'De plaats van de voeten.', explanation: 'Niet het grootste schepsel: de Troon is groter.', notes: ['alleen ter kennisname'], page: 57 },
    { term: 'يؤوده', translit: 'yaʾūduhu', meaning: 'Van awd: zwaarte.', explanation: 'Het bewaren van hemelen en aarde is Hem niet zwaar.', notes: [], page: 58 },
    { term: 'العلي', translit: 'al-ʿaliyy', meaning: 'De Verhevene: in Zijn wezen, Zijn overmacht en Zijn rang.', explanation: 'Een eigenschap die vastheid en voortduren aangeeft.', notes: [], page: 58 },
    { term: 'الصفات المنفية', translit: 'aṣ-ṣifāt al-manfiyya', meaning: 'Ontkende eigenschappen: wat Allah over Zichzelf ontkent.', explanation: 'Ze houden de volmaaktheid van het tegendeel in: geen slaap door volmaakt leven en zelfbestaan.', notes: [], page: 59 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De zinnen van Āyat al-Kursī',
      intro: 'Het vers bevat tien zinnen.',
      nodes: [
        { label: '"Allah, er is geen god dan Hij"', sub: 'niets wordt terecht aanbeden behalve Hij', page: 54 },
        { label: '"de Levende, de Zelfbestaande"', sub: 'volmaakt leven en bestuur', page: 54 },
        { label: '"sluimer noch slaap overmant Hem"', sub: 'door Zijn volmaakte leven en zelfbestaan', page: 55 },
        { label: '"van Hem is wat in de hemelen en op aarde is"', sub: 'alles is Zijn dienaar en Zijn bezit', page: 55 },
        { label: '"wie doet voorspraak bij Hem, behalve met Zijn toestemming?"', sub: 'door Zijn volmaakte grootheid', page: 56 },
        { label: '"Hij weet wat vóór hen en wat achter hen is"', sub: 'allesomvattende kennis', page: 56 },
        { label: '"zij omvatten niets van Zijn kennis, behalve wat Hij wil"', page: 57 },
        { label: '"Zijn Kursī omvat de hemelen en de aarde"', page: 57 },
        { label: '"het bewaren ervan is Hem niet zwaar"', page: 58 },
        { label: '"en Hij is de Verhevene, de Grootse"', page: 58 }
      ]
    },
    {
      type: 'cards',
      title: 'Lessen uit Āyat al-Kursī',
      intro: 'Zoals in les 19.',
      nodes: [
        { label: 'Vijf namen bevestigd', sub: 'Allah, al-Ḥayy, al-Qayyūm, al-ʿAliyy, al-ʿAẓīm', page: 59 },
        { label: 'Volmaakt leven', sub: 'al-Ḥadīd 57:3', page: 59 },
        { label: 'Ontkende eigenschappen', sub: 'met de volmaaktheid van het tegendeel', page: 59 },
        { label: 'Troost en tevredenheid bij tegenspoed', page: 59 },
        { label: 'Weerlegging van de extreme Qadariyya', sub: 'door Allahs allesomvattende kennis', page: 59 },
        { label: 'Weerlegging van Khawārij en Muʿtazila', sub: 'door de voorspraak te bevestigen', page: 59 },
        { label: 'Allahs verhevenheid', page: 60 },
        { label: 'Waarschuwing tegen onderdrukking', sub: 'an-Nisāʾ 4:34', page: 61 }
      ]
    },
    {
      type: 'tree',
      title: 'Allahs verhevenheid volgens ahl as-sunna',
      intro: 'Twee soorten, en wie het oneens was over de eerste.',
      root: { label: 'Allahs verhevenheid', page: 60 },
      nodes: [
        { label: 'Van Zijn wezen', children: ['Hij is Zelf boven alles', 'anders: de Ḥulūliyya (overal)', 'anders: de ontkenners (boven noch onder)'], page: 60 },
        { label: 'Van Zijn eigenschappen', children: ['volmaakt in alle opzichten', 'alle groepen van de umma zijn het eens'], page: 60 }
      ]
    }
  ],
  sections: [
    { title: 'De Levende, de Zelfbestaande', text: 'as-Saʿdī: deze twee namen wijzen op alle schone namen: al-Ḥayy heeft volmaakt leven, met alle eigenschappen van Zijn wezen; al-Qayyūm bestaat door Zichzelf en al het andere bestaat door Hem, wat al Zijn daden omvat.', more: 'Daarom zeiden sommige onderzoekers: zij zijn de grootste naam; wie Allah ermee aanroept, wordt verhoord.', page: 55 },
    { title: 'Waarom niet "en de aardes"?', text: 'Gezegd wordt: omdat het meervoud al genoemd is bij "de hemelen", hoefde het niet herhaald te worden; zo ook "Hij maakte de duisternissen en het licht", zonder "de lichten".', more: 'al-Anʿām 6:1.', page: 56 },
    { title: 'Voorspraak met toestemming', text: 'Niemand durft bij Allah voorspraak te doen zonder Zijn toestemming, ook de Profeet ﷺ niet, die bij Allah het hoogste aanzien heeft. Wil Allah zich over iemand ontfermen, dan staat Hij wie Hij wil eren toe voor hem voorspraak te doen.', more: '', page: 56 },
    { title: 'De Kursī en de Troon (alleen ter kennisname)', text: 'De meeste ahl as-sunna zeggen dat de Kursī de plaats van de voeten is; Ibn Taymiyya en Ibn al-Qayyim stelden dat vast. Als de Kursī al de hemelen en de aarde omvat, dan is de Troon nog groter.', more: FYI_NL, page: 57 },
    { title: 'Het vers als volledige geloofsleer', text: 'as-Saʿdī: dit vers bevat tawḥīd van aanbidding, van heerschappij en van namen en eigenschappen, en Allahs allesomvattende heerschappij, kennis en macht; het is op zichzelf een geloofsleer over Allahs namen en eigenschappen.', more: '', page: 58 },
    { title: 'Denk aan Allahs verhevenheid', text: 'Voel je je verheven, denk dan aan Allahs verhevenheid; voel je je groot, denk dan aan Allahs grootheid; voel je je belangrijk, denk dan aan Allahs majesteit.', more: '"Als zij jullie gehoorzamen, zoek dan geen weg tegen hen; Allah is Verheven, Groot."', page: 61 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'De vijf namen in het vers', items: ['Allah', 'al-Ḥayy', 'al-Qayyūm', 'al-ʿAliyy', 'al-ʿAẓīm'], page: 59, origin: 'boek' },
    { kind: 'regel', title: 'Ontkende eigenschappen', items: ['Elke eigenschap die Allah over Zichzelf ontkent, houdt de volmaaktheid van het tegendeel in.'], page: 59, origin: 'boek' },
    { kind: 'onderscheid', title: 'Twee soorten verhevenheid', items: ['Van Zijn wezen: boven alles.', 'Van Zijn eigenschappen: volmaakt in alle opzichten.'], page: 60, origin: 'boek' },
    { kind: 'opsomming', title: 'Wanneer reciteren?', items: ['voor het slapen', 'na elk verplicht gebed'], page: 53, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Āyat al-Kursī is het grootste vers in het Boek van Allah.',
    'Reciteer het voor het slapen en na elk verplicht gebed.',
    'Al-Ḥayy al-Qayyūm wijzen op alle schone namen.',
    'Geen voorspraak zonder Allahs toestemming; Zijn kennis omvat alles.',
    'De Kursī is de plaats van de voeten; de Troon is groter.',
    'Allahs verhevenheid: van Zijn wezen en van Zijn eigenschappen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het grootste vers in het Boek van Allah?', options: ['Āyat al-Kursī', 'het laatste vers van al-Baqara', 'het eerste vers van al-Fātiḥa', 'het lichtvers'], answer: 0, explain: 'Zoals in de hadith van Ubayy ibn Kaʿb.', page: 53 },
    { type: 'mc', q: 'Hoeveel zinnen bevat Āyat al-Kursī?', options: ['tien', 'vijf', 'zeven', 'drie'], answer: 0, explain: 'Elke zin heeft een geweldige betekenis.', page: 54 },
    { type: 'mc', q: 'Wat betekent sina in "sluimer (sina) noch slaap overmant Hem"?', options: ['sluimer', 'jaar', 'gewoonte', 'vergeten'], answer: 0, explain: 'Volgens alle geleerden.', page: 55 },
    { type: 'tf', q: 'De Profeet ﷺ doet op de Dag der Opstanding voorspraak voordat hij toestemming krijgt.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Niemand doet voorspraak zonder Allahs toestemming, ook de Profeet ﷺ niet.', page: 56 },
    { type: 'mc', q: 'Wat is de Kursī?', options: ['de plaats van de voeten', 'de Troon', 'de kennis', 'de heerschappij'], answer: 0, explain: 'Zoals Ibn ʿAbbās zei.', page: 57 },
    { type: 'mc', q: 'Wat betekent "het bewaren ervan is Hem niet zwaar (lā yaʾūduhu)"?', options: ['het belast Hem niet', 'het ontgaat Hem niet', 'niemand anders bezit het', 'niemand anders weet het'], answer: 0, explain: 'Awd betekent zwaarte.', page: 58 },
    { type: 'mc', q: 'Wie wordt weerlegd door Allahs allesomvattende kennis in het vers?', options: ['de extreme Qadariyya', 'de Jabriyya', 'de Khawārij', 'de Murjiʾa'], answer: 0, explain: 'Zij ontkenden dat Allah de daden kent voordat ze gebeuren.', page: 59 },
    { type: 'mc', q: 'Over welke soort verhevenheid zijn alle groepen het eens?', options: ['van Zijn eigenschappen', 'van Zijn wezen', 'over geen van beide', 'over beide niet'], answer: 0, explain: 'Over de verhevenheid van Zijn wezen waren de Ḥulūliyya en de ontkenners het oneens.', page: 60 }
  ]),
  note: 'Oefening van het boek op p. 61. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tafsir', chapter: '17', unit: 3, ar, nl }
