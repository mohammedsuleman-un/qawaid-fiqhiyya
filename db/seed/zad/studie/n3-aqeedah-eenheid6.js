// Hoofdstukkaart bij العقيدة (٣), eenheid 6: الإلحاد المعاصر (lessen 21–24, boek p. 75–88).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Het kader over Antony Flew (p. 83) is in het boek
// "alleen ter kennisname" (للاطلاع فقط) en staat hier zo vermeld.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٣)، سلسلة زاد العلمية',
  pages: '75–88',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'أنس', text: 'كان رسول الله ﷺ يكثر أن يقول: «يا مقلب القلوب ثبت قلبي على دينك»', takhrij: 'رواه الترمذي، وصححه الألباني', note: 'من سبل الوقاية: الدعاء بالثبات.', pages: [87], nl: 'De Boodschapper van Allah ﷺ zei vaak: "O Omkeerder van de harten, maak mijn hart standvastig in Uw godsdienst"', nlNote: 'Een manier om je te beschermen: bidden om standvastigheid.' },
  { narrator: '', text: 'من سمع بالدجال فلينأ عنه، فوالله إن الرجل ليأتيه وهو يحسب أنه مؤمن، فيتبعه مما يبعث به من الشبهات', takhrij: 'رواه الترمذي، وصححه الألباني', note: 'في مقاطعة المواقع والقنوات والبرامج الإلحادية. والتخريج كما في الكتاب.', pages: [88], nl: 'wie van de Dajjāl hoort, moet bij hem uit de buurt blijven; bij Allah, een man komt naar hem toe en denkt dat hij gelovig is, en volgt hem dan door de twijfels die hij opwerpt', nlNote: 'Bij het mijden van atheïstische websites, kanalen en programma’s. Takhrij zoals in het boek.' }
]

const TAKHRIJ_NL = { 'رواه الترمذي، وصححه الألباني': 'at-Tirmidhī; authentiek volgens al-Albānī' }
const NARRATOR_NL = { 'أنس': 'Anas' }

const PERSONS = [
  ['anas-ibn-malik', 'text', [87], 'روى أن النبي ﷺ كان يكثر أن يقول: «يا مقلب القلوب ثبت قلبي على دينك».', 'Overleverde dat de Profeet ﷺ vaak zei: "O Omkeerder van de harten, maak mijn hart standvastig in Uw godsdienst."'],
  ['ibn-abbas', 'text', [88], 'قال: «لا تجالس أهل الأهواء، فإن مجالستهم ممرضة للقلوب».', 'Zei: zit niet bij de mensen van de begeerten, want met hen zitten maakt de harten ziek.'],
  ['amr-ibn-qays-al-mulai', 'text', [88], 'قال: «كان يقال: لا تجالس صاحب زيغ، فيزيغ قلبك».', 'Zei: men zei vroeger: zit niet bij iemand die afdwaalt, anders dwaalt je hart af.'],
  ['at-tirmidhi', 'takhrij', [87, 88], 'أخرج حديثي الوحدة كما في الكتاب.', 'Nam volgens het boek de twee hadith van deze eenheid op.'],
  ['al-albani', 'takhrij', [87, 88], 'صحح حديثي الوحدة.', 'Verklaarde de twee hadith van deze eenheid authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 6,
  title: 'الإلحاد المعاصر',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'الإلحاد بمعنى إنكار الخالق: تعريفه ومعناه المعاصر وأسباب ظهوره، وأفكاره وأنواع الملحدين ومرتكزاتهم، وأهم شبههم والرد عليها، وسبل الوقاية منه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السادسة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ٧٦ من الكتاب.',
    root: { label: 'الإلحاد المعاصر', sub: 'الوحدة السادسة' },
    nodes: [
      { label: 'التعريف والأسباب', sub: 'الدرس ٢١', page: 77, children: ['الميل عن الحق', 'إنكار وجود الخالق', 'النصرانية المحرفة', 'طغيان الكنيسة', 'الكشوف العلمية'] },
      { label: 'الأفكار والأنواع', sub: 'الدرس ٢٢', page: 79, children: ['المادة أزلية', 'الوجود صدفة', 'العلمانية'] },
      { label: 'المرتكزات', sub: 'الدرس ٢٢', page: 80, children: ['نظريات صحيحة لا تدل على العدم', 'نظريات باطلة كالتطور'] },
      { label: 'الشبه والرد', sub: 'الدرس ٢٣', page: 83, children: ['من خلق الله؟', 'العقل عاجز عن تصوره'] },
      { label: 'الوقاية', sub: 'الدرس ٢٤', page: 87, children: ['القرآن', 'الدعاء والذكر', 'غرس العقيدة', 'مقاطعة مواقع الإلحاد'] }
    ]
  },
  points: [
    { text: 'الإلحاد بمعنى إنكار الخالق مرض في القلب وعمى في البصيرة وشذوذ في الفطرة، ولم تعتقده أمة من الأمم السابقة قط.', page: 77 },
    { text: 'كان كفر الأمم الغابرة في الشرك والجهل بصفات الله، مع الإقرار بوجود رب خالق رازق مدبر [يونس: ٣١].', page: 77 },
    { text: 'الإلحاد المعاصر مذهب فلسفي أساسه إنكار وجود الله، وادعاء أن المادة أزلية أبدية.', page: 78 },
    { text: 'من أسباب ظهوره في الغرب: النصرانية المحرفة، وطغيان رجال الكنيسة، وصراعهم مع الكشوف العلمية؛ والبديل الصحيح الإسلام لا الإلحاد.', page: 78 },
    { text: 'العلمانية التي تقر بإله لا علاقة له بحياة الناس من الإلحاد، وهي أخطره لشدة التباسها.', page: 80 },
    { text: 'سؤال «من خلق الله؟» خطأ ابتداء لأنه يفضي إلى التسلسل؛ ولا بد من خالق غير مخلوق وهو الله.', page: 83 },
    { text: 'عجز العقول عن تصور حقيقة الله لا يدل على عدمه، كما تعجز عن معرفة حقيقة أشياء كثيرة موجودة.', page: 85 },
    { text: 'من سبل الوقاية: تدبر القرآن، والدعاء والذكر، وغرس العقيدة الصحيحة، ومقاطعة المواقع والقنوات الإلحادية.', page: 87 }
  ],
  terms: [
    { term: 'الإلحاد', translit: 'al-ilḥād', meaning: 'لغة: الميل عن القصد؛ وسمي اللحد بذلك لأنه مائل في أحد جانبي القبر.', explanation: 'شرعًا: الميل عن طريق الحق إلى الباطل.', notes: [], page: 77 },
    { term: 'الإلحاد المعاصر', translit: 'al-ilḥād al-muʿāṣir', meaning: 'مذهب فلسفي يقوم على فكرة عدمية أساسها إنكار وجود الله الخالق.', explanation: 'يدعي أن الكون وجد بلا خالق، وأن المادة أزلية أبدية، وهي الخالق والمخلوق في نفس الوقت.', notes: [], page: 78 },
    { term: 'العلمانية', translit: 'al-ʿalmāniyya', meaning: 'القول بوجود الإله مع نفي علاقته بحياة الناس.', explanation: 'مرادفة للإلحاد عند الكتاب، وأخطر لشدة التباسها على الناس.', notes: [], page: 80 },
    { term: 'التفسير الميكانيكي للكون', translit: 'at-tafsīr al-mīkānīkī', meaning: 'تفسير ظواهر الطبيعة بربط بعضها ببعض دون حاجة إلى قوى خارجية.', explanation: 'ارتباط الكون بالنواميس صحيح، لكنه يدل على الخالق لا على عدمه [يس: ٣٧–٤٠].', notes: [], page: 81 },
    { term: 'نظرية التطور', translit: 'naẓariyyat at-taṭawwur', meaning: 'نظرية داروين القائمة على الانتقاء الطبيعي وبقاء الأنسب.', explanation: 'عدها الكتاب من النظريات الباطلة، ورد عليها.', notes: [], page: 81 },
    { term: 'التسلسل', translit: 'at-tasalsul', meaning: 'أن يسأل عن خالق كل خالق إلى ما لا نهاية.', explanation: 'ممتنع عقلًا؛ فلا بد من الانتهاء إلى خالق غير مخلوق وهو الله.', notes: [], page: 83 },
    { term: 'الإلحاد النفعي', translit: 'al-ilḥād an-nafʿī', meaning: 'أن يدخل الشخص الإلحاد ظنًا منه أنه سيتخلص من القيود الدينية إلى حياة بلا رقيب ولا حسيب.', explanation: '', notes: [], page: 86 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'أسباب ظهور الإلحاد في الغرب',
      intro: 'ثم انتقل إلى المجتمعات المسلمة بالغزو الفكري والتقليد.',
      nodes: [
        { label: 'أن أوربا لم تعتقد الدين الحق', sub: 'بل نصرانية محرفة مليئة بالخرافات، شعارها: آمن أولًا ثم فكر', page: 78 },
        { label: 'طغيان رجال الكنيسة', sub: 'جعلوا أنفسهم أربابًا يشرعون ويتوسطون بين الناس وبين الله', page: 79 },
        { label: 'الكشوف العلمية', sub: 'وحرب الكنيسة على العلماء، فهاجم بعضهم الدين كله', page: 79 }
      ]
    },
    {
      type: 'cards',
      title: 'أنواع الملحدين',
      intro: 'كما عددها الكتاب.',
      nodes: [
        { label: 'من ينفي وجود الخالق بالكلية', sub: 'كفرعون: ﴿وما رب العالمين﴾ [الشعراء: ٢٣]', page: 80 },
        { label: 'من يعتبر الإيمان بالإله خرافة', page: 80 },
        { label: 'من يقول: لا ندري', sub: 'أيوجد خالق أم لا؟', page: 80 },
        { label: 'من يقول: خلق ثم فني', page: 80 },
        { label: 'العلمانية', sub: 'إله لا علاقة له بحياة الناس، وهي الأخطر', page: 80 }
      ]
    },
    {
      type: 'compare',
      title: 'مرتكز الإلحاد: النظريات العلمية',
      intro: 'زعموا أنها تؤيد عدم وجود الخالق، وهي قسمان.',
      columns: ['نظريات صحيحة', 'نظريات باطلة'],
      rows: [
        { label: 'مثالها', cells: ['التفسير الميكانيكي للكون', 'التطور لداروين'] },
        { label: 'الجواب', cells: ['صحيحة في نفسها، لكنها تشهد بوجود الخالق المدبر', 'قاصرة لا تفسر جميع الظواهر، ولم يتطور شيء إلى غير جنسه'] },
        { label: 'شاهد', cells: ['«البعرة تدل على البعير، وآثار الخطا تدل على المسير»', 'لم تفسر نشأة الحشرات مع أنها ٨٠٪ من الحيوانات'] }
      ],
      page: 81
    },
    {
      type: 'compare',
      title: 'أهم شبه الملاحدة والرد عليها',
      intro: 'شبهتان كما في الكتاب.',
      columns: ['الشبهة', 'الجواب'],
      rows: [
        { label: 'الأولى', cells: ['إذا كان لكل مخلوق خالق، فمن خلق الله؟', 'السؤال خطأ ابتداء لأنه يفضي إلى التسلسل؛ ولا بد من خالق غير مخلوق، وهو الله'] },
        { label: 'الثانية', cells: ['العقول عاجزة عن تصور الإله، فهو غير موجود', 'المقدمة الأولى صحيحة والثانية باطلة؛ فالعقول تعجز عن حقيقة أشياء كثيرة موجودة'] }
      ],
      page: 83
    },
    {
      type: 'steps',
      title: 'سبل الوقاية من الإلحاد',
      intro: 'أربع وسائل.',
      nodes: [
        { label: 'تلاوة القرآن وتدبره', sub: '[العنكبوت: ٥١]، [الطور: ٣٥–٣٦]', page: 87 },
        { label: 'ما يرسخ الإيمان كالدعاء والذكر', sub: '«يا مقلب القلوب ثبت قلبي على دينك»', page: 87 },
        { label: 'غرس العقيدة الصحيحة', sub: 'في الشباب والأطفال والنساء وجميع أفراد المجتمع', page: 87 },
        { label: 'مقاطعة المواقع والقنوات والبرامج الإلحادية', sub: '«من سمع بالدجال فلينأ عنه»', page: 88 }
      ]
    }
  ],
  sections: [
    { title: 'الإلحاد عبر التاريخ', text: 'لم يكن الإلحاد ظاهرة عامة في أي عصر، وإنما كان الملحدون أفرادًا شاذين. وكان كفر الأمم في الشرك والجهل بصفات الله، مع الإقرار بالرب الخالق.', more: 'أما إنكار الإله مطلقًا فلم تعلنه أمة إلا بعض المجتمعات في العصر الحديث، وليس كل أفرادها كذلك.', page: 77 },
    { title: 'البديل الصحيح', text: 'الخروج من النصرانية المحرفة يوجبه التفكير السليم، لكن البديل ليس الإلحاد، وإنما الإيمان بالدين الصحيح: الإسلام.', more: 'فقد فرضت النصرانية خرافات كالتثليث وألوهية المسيح، وفرضت الرهبانية المنافية للفطرة.', page: 78 },
    { title: 'أهم أفكار الملاحدة', text: 'إنكار وجود الله، وأن الكون والإنسان والحيوان والنبات وجد صدفة ولا حياة بعد الموت، وأن المادة أزلية أبدية، وعدم الاعتراف بالأخلاق والحق والعدل والروح.', more: '', page: 79 },
    { title: 'دلائل وجود الخالق', text: 'الحياة والعقل والحكمة والسمع والبصر في المخلوقات دليل على من وهبها؛ والقرآن وتحديه للبشرية، ومعجزات الأنبياء، وإجابة الدعاء، ونداء الفطرة.', more: 'ذلكم هو الله الواحد الأحد الفرد الصمد.', page: 84 },
    { title: 'أنتوني فلو (للاطلاع فقط)', text: 'أستاذ فلسفة بريطاني من أكبر الملاحدة في القرن العشرين، أعلن عام ٢٠٠٤ بعد الثمانين أنه صار يؤمن بوجود إله، وألف كتاب «هناك إله».', more: 'هذا المقطع في الكتاب للاطلاع فقط.', page: 83 },
    { title: 'حذر السلف', text: 'تنبه السلف لخطورة مخالطة أهل الزيغ أو القراءة أو السماع لهم، خشية أن يعلق شيء منها بقلب ضعيف.', more: 'قال ابن عباس: «لا تجالس أهل الأهواء، فإن مجالستهم ممرضة للقلوب».', page: 88 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الإلحاد', items: ['لغة: الميل عن القصد.', 'شرعًا: الميل عن طريق الحق إلى الباطل.', 'في المفهوم المعاصر: مذهب فلسفي أساسه إنكار وجود الله الخالق.'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'أسباب ظهوره', items: ['النصرانية المحرفة', 'طغيان رجال الكنيسة', 'صراع الكنيسة مع الكشوف العلمية'], page: 78, origin: 'boek' },
    { kind: 'onderscheid', title: 'شبهة «من خلق الله؟»', items: ['السؤال يفضي إلى التسلسل الممتنع.', 'فلا بد من خالق غير مخلوق، وهو الله.'], page: 83, origin: 'boek' },
    { kind: 'opsomming', title: 'سبل الوقاية', items: ['تدبر القرآن', 'الدعاء والذكر', 'غرس العقيدة الصحيحة', 'مقاطعة المواقع والقنوات الإلحادية'], page: 87, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الإلحاد: الميل عن الحق؛ والمعاصر: إنكار وجود الخالق.',
    'لم تعتقده أمة سابقة، وكانت الأمم تقر بالخالق.',
    'أسبابه في الغرب: نصرانية محرفة، وطغيان الكنيسة، وصراعها مع العلم.',
    'العلمانية من الإلحاد، وهي أخطره.',
    'النظريات الصحيحة تدل على الخالق، والتطور نظرية باطلة.',
    '«من خلق الله؟» سؤال يفضي إلى التسلسل.',
    'الوقاية: القرآن، الدعاء، العقيدة، مقاطعة الإلحاد.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى الإلحاد لغة؟', options: ['الميل عن القصد', 'الإنكار', 'الشك', 'الكبر'], answer: 0, explain: 'ومنه اللحد لأنه مائل في جانب القبر.', page: 77 },
    { type: 'tf', q: 'كانت أمم كثيرة سابقة تنكر وجود الخالق.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لم تعتقده أمة قط؛ كان كفرها في الشرك والجهل بالصفات.', page: 77 },
    { type: 'mc', q: 'ما البديل الصحيح عند الخروج من النصرانية المحرفة؟', options: ['الإسلام', 'الإلحاد', 'العلمانية', 'اللاأدرية'], answer: 0, explain: 'فليس البديل الإلحاد، وإنما الدين الصحيح.', page: 78 },
    { type: 'mc', q: 'لماذا كانت العلمانية أخطر أنواع الإلحاد عند الكتاب؟', options: ['لشدة التباسها على الناس', 'لأنها تنكر الخالق صراحة', 'لأنها قديمة', 'لأنها خاصة بالعلماء'], answer: 0, explain: 'فيقع فيها كثير من الجهلاء.', page: 80 },
    { type: 'mc', q: 'على ماذا يدل ارتباط الكون بالنواميس والقوانين؟', options: ['على وجود الخالق العليم', 'على عدم الحاجة إلى خالق', 'على أن المادة أزلية', 'على الصدفة'], answer: 0, explain: '[يس: ٣٧–٤٠].', page: 81 },
    { type: 'mc', q: 'ما الخطأ في سؤال «من خلق الله؟»', options: ['أنه يفضي إلى التسلسل', 'أنه سؤال علمي', 'أنه لا جواب له', 'أنه يثبت التطور'], answer: 0, explain: 'فلا بد من خالق غير مخلوق.', page: 83 },
    { type: 'tf', q: 'كل ما عجز العقل عن معرفة حقيقته فهو غير موجود.', options: ['صواب', 'خطأ'], answer: 1, explain: 'العقول تعجز عن حقيقة أشياء كثيرة موجودة.', page: 85 },
    { type: 'mc', q: 'أي هذه من سبل الوقاية من الإلحاد؟', options: ['مقاطعة المواقع والقنوات الإلحادية', 'مجالسة أهل الأهواء للرد عليهم دائمًا', 'الاعتماد على العقل وحده', 'ترك الدعاء'], answer: 0, explain: '«من سمع بالدجال فلينأ عنه».', page: 88 }
  ]),
  note: 'نشاط الكتاب في صفحة ٨٨.'
}

const nl = {
  scope: 'unit',
  unit: 6,
  title: 'Hedendaags atheïsme',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Atheïsme in de zin van het ontkennen van de Schepper: definitie, de hedendaagse betekenis en de oorzaken, de ideeën, de soorten atheïsten en hun steunpunten, hun belangrijkste twijfels en het antwoord daarop, en hoe men zich ertegen beschermt.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (3), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 6 in één kaart',
    intro: 'De onderwerpen zoals op p. 76 van het boek.',
    root: { label: 'Hedendaags atheïsme', sub: 'Eenheid 6' },
    nodes: [
      { label: 'Definitie en oorzaken', sub: 'les 21', page: 77, children: ['afwijken van de waarheid', 'de Schepper ontkennen', 'het vervalste christendom', 'de macht van de kerk', 'wetenschappelijke ontdekkingen'] },
      { label: 'Ideeën en soorten', sub: 'les 22', page: 79, children: ['materie is eeuwig', 'alles is toeval', 'secularisme'] },
      { label: 'Steunpunten', sub: 'les 22', page: 80, children: ['juiste theorieën die niets ontkennen', 'onjuiste theorieën zoals evolutie'] },
      { label: 'Twijfels en antwoord', sub: 'les 23', page: 83, children: ['wie schiep God?', 'het verstand kan Hem niet bevatten'] },
      { label: 'Bescherming', sub: 'les 24', page: 87, children: ['de Koran', 'smeekbede en gedenken', 'goede geloofsleer', 'atheïstische media mijden'] }
    ]
  },
  points: [
    { text: 'Atheïsme in de zin van het ontkennen van de Schepper is een ziekte van het hart, blindheid van het inzicht en een afwijking van de aangeboren natuur (fiṭra); geen enkel eerder volk geloofde dat.', page: 77 },
    { text: 'Het ongeloof van eerdere volken bestond uit shirk en onwetendheid over Allahs eigenschappen, terwijl ze een Heer erkenden die schept, voorziet en bestuurt (Yūnus 10:31).', page: 77 },
    { text: 'Het hedendaagse atheïsme is een filosofische stroming die het bestaan van God ontkent en beweert dat materie eeuwig is.', page: 78 },
    { text: 'Oorzaken in het Westen: een vervalst christendom, de macht van de geestelijkheid en hun strijd tegen wetenschappelijke ontdekkingen. Het juiste alternatief is de islam, niet atheïsme.', page: 78 },
    { text: 'Secularisme, dat een God aanneemt die niets met het leven van de mensen te maken heeft, rekent het boek tot het atheïsme; het is het gevaarlijkst omdat het zo verwarrend is.', page: 80 },
    { text: 'De vraag "wie schiep God?" is van meet af aan fout, want ze leidt tot een oneindige reeks; er moet een ongeschapen Schepper zijn, en dat is Allah.', page: 83 },
    { text: 'Dat het verstand Allahs werkelijkheid niet kan bevatten, bewijst niet dat Hij niet bestaat; het kan ook de werkelijkheid van veel bestaande dingen niet bevatten.', page: 85 },
    { text: 'Bescherming: de Koran overdenken, smeekbede en gedenken, de juiste geloofsleer bijbrengen, en atheïstische websites en kanalen mijden.', page: 87 }
  ],
  terms: [
    { term: 'الإلحاد', translit: 'al-ilḥād', meaning: 'Taal: afwijken van de rechte koers; het graf heet laḥd omdat het aan één kant schuin is uitgegraven.', explanation: 'Religieus: afwijken van de weg van de waarheid naar het valse.', notes: [], page: 77 },
    { term: 'الإلحاد المعاصر', translit: 'al-ilḥād al-muʿāṣir', meaning: 'Hedendaags atheïsme: een filosofische stroming waarvan de kern het ontkennen van God de Schepper is.', explanation: 'Beweert dat het heelal zonder schepper bestaat en dat materie eeuwig is, schepper en geschapene tegelijk.', notes: [], page: 78 },
    { term: 'العلمانية', translit: 'al-ʿalmāniyya', meaning: 'Secularisme: een God aannemen die niets met het leven van de mensen te maken heeft.', explanation: 'Volgens het boek komt het neer op atheïsme en is het gevaarlijker omdat het zo verwarrend is.', notes: [], page: 80 },
    { term: 'التفسير الميكانيكي للكون', translit: 'at-tafsīr al-mīkānīkī', meaning: 'De mechanische verklaring van het heelal: natuurverschijnselen verklaren door hun onderlinge verbanden, zonder kracht van buitenaf.', explanation: 'Die samenhang klopt, maar wijst juist op de Schepper (Yā Sīn 36:37–40).', notes: [], page: 81 },
    { term: 'نظرية التطور', translit: 'naẓariyyat at-taṭawwur', meaning: 'De evolutietheorie van Darwin, gebaseerd op natuurlijke selectie en overleving van de best aangepaste.', explanation: 'Het boek rekent haar tot de onjuiste theorieën en weerlegt haar.', notes: [], page: 81 },
    { term: 'التسلسل', translit: 'at-tasalsul', meaning: 'Een oneindige reeks: steeds opnieuw vragen wie de schepper van de schepper schiep.', explanation: 'Verstandelijk onmogelijk; er moet een ongeschapen Schepper zijn, en dat is Allah.', notes: [], page: 83 },
    { term: 'الإلحاد النفعي', translit: 'al-ilḥād an-nafʿī', meaning: 'Atheïsme uit eigenbelang: atheïst worden om van religieuze grenzen af te zijn en zonder toezicht te leven.', explanation: '', notes: [], page: 86 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Oorzaken van atheïsme in het Westen',
      intro: 'Daarna kwam het via ideologische invloed en navolging naar moslimsamenlevingen.',
      nodes: [
        { label: 'Europa kende niet de ware godsdienst', sub: 'maar een vervalst christendom vol bijgeloof, met als motto: eerst geloven, dan denken', page: 78 },
        { label: 'De macht van de geestelijkheid', sub: 'zij maakten zich tot heren die wetten maakten en tussen mens en God stonden', page: 79 },
        { label: 'Wetenschappelijke ontdekkingen', sub: 'de kerk bestreed de geleerden, en sommigen vielen toen alle godsdienst aan', page: 79 }
      ]
    },
    {
      type: 'cards',
      title: 'Soorten atheïsten',
      intro: 'Zoals het boek ze opsomt.',
      nodes: [
        { label: 'Wie de Schepper volledig ontkent', sub: 'zoals Firʿawn: "Wat is de Heer der werelden?" (ash-Shuʿarāʾ 26:23)', page: 80 },
        { label: 'Wie geloof in God bijgeloof vindt', page: 80 },
        { label: 'Wie zegt: we weten het niet', sub: 'is er een schepper of niet?', page: 80 },
        { label: 'Wie zegt: Hij schiep en verging daarna', page: 80 },
        { label: 'Secularisme', sub: 'een God zonder band met het leven van de mensen; het gevaarlijkst', page: 80 }
      ]
    },
    {
      type: 'compare',
      title: 'Het steunpunt van atheïsme: wetenschappelijke theorieën',
      intro: 'Zij beweren dat die het niet-bestaan van de Schepper steunen; er zijn twee soorten.',
      columns: ['Juiste theorieën', 'Onjuiste theorieën'],
      rows: [
        { label: 'Voorbeeld', cells: ['de mechanische verklaring van het heelal', 'de evolutietheorie van Darwin'] },
        { label: 'Antwoord', cells: ['op zich juist, maar ze getuigen juist van een wijze Schepper', 'ontoereikend en verklaart niet alles; niets werd iets van een andere soort'] },
        { label: 'Getuige', cells: ['"De mest wijst op de kameel, de voetsporen op de wandelaar"', 'verklaart niet hoe insecten ontstonden, 80% van alle dieren'] }
      ],
      page: 81
    },
    {
      type: 'compare',
      title: 'Twijfels van atheïsten en het antwoord',
      intro: 'Twee twijfels, zoals in het boek.',
      columns: ['Twijfel', 'Antwoord'],
      rows: [
        { label: 'Eerste', cells: ['Als elk schepsel een schepper heeft, wie schiep God dan?', 'De vraag is van meet af aan fout: ze leidt tot een oneindige reeks. Er moet een ongeschapen Schepper zijn: Allah'] },
        { label: 'Tweede', cells: ['Het verstand kan God niet bevatten, dus bestaat Hij niet', 'De eerste premisse klopt, de tweede niet: het verstand kan veel bestaande dingen niet bevatten'] }
      ],
      page: 83
    },
    {
      type: 'steps',
      title: 'Bescherming tegen atheïsme',
      intro: 'Vier middelen.',
      nodes: [
        { label: 'De Koran reciteren en overdenken', sub: 'al-ʿAnkabūt 29:51; aṭ-Ṭūr 52:35–36', page: 87 },
        { label: 'Wat het geloof versterkt, zoals smeekbede en gedenken', sub: '"O Omkeerder van de harten, maak mijn hart standvastig"', page: 87 },
        { label: 'De juiste geloofsleer bijbrengen', sub: 'aan jongeren, kinderen, vrouwen en de hele samenleving', page: 87 },
        { label: 'Atheïstische websites, kanalen en programma’s mijden', sub: '"Wie van de Dajjāl hoort, moet bij hem uit de buurt blijven"', page: 88 }
      ]
    }
  ],
  sections: [
    { title: 'Atheïsme in de geschiedenis', text: 'Atheïsme was in geen enkel tijdperk een algemeen verschijnsel; atheïsten waren losse uitzonderingen. Het ongeloof van volken bestond uit shirk en onwetendheid over Allahs eigenschappen, terwijl ze de Heer en Schepper erkenden.', more: 'Dat er helemaal geen God is, heeft geen volk uitgeroepen, behalve sommige samenlevingen in de moderne tijd, en ook daar niet iedereen.', page: 77 },
    { title: 'Het juiste alternatief', text: 'Gezond denken vraagt om het verlaten van een vervalst christendom, maar het alternatief is niet atheïsme: het is geloof in de ware godsdienst, de islam.', more: 'Het christendom legde bijgeloof op zoals de drie-eenheid en de goddelijkheid van de Messias, en het monnikendom, dat tegen de menselijke natuur ingaat.', page: 78 },
    { title: 'Belangrijkste ideeën van atheïsten', text: 'Het bestaan van God ontkennen; het heelal, de mens, dieren en planten zouden door toeval bestaan en er zou geen leven na de dood zijn; materie zou eeuwig zijn; en geen erkenning van moraal, waarheid, rechtvaardigheid en de ziel.', more: '', page: 79 },
    { title: 'Bewijzen voor de Schepper', text: 'Leven, verstand, wijsheid, gehoor en zicht in de schepselen wijzen op Wie ze gaf; ook de Koran en zijn uitdaging aan de mensheid, de wonderen van de profeten, verhoorde smeekbeden en de roep van de fiṭra.', more: 'Dat is Allah, de Ene, de Enige, de Volkomene.', page: 84 },
    { title: 'Antony Flew (alleen ter kennisname)', text: 'Een Britse hoogleraar filosofie en een van de bekendste atheïsten van de twintigste eeuw. In 2004, na zijn tachtigste, maakte hij bekend dat hij in een God geloofde, en hij schreef het boek "There is a God".', more: 'Dit kader staat in het boek alleen ter kennisname.', page: 83 },
    { title: 'De voorzichtigheid van de vroege generaties', text: 'De vroege generaties waren zich bewust van het gevaar van omgang met afgedwaalden, of van lezen en luisteren naar hen, uit vrees dat iets ervan aan een zwak hart blijft hangen.', more: 'Ibn ʿAbbās: zit niet bij de mensen van de begeerten, want met hen zitten maakt de harten ziek.', page: 88 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Atheïsme (ilḥād)', items: ['Taal: afwijken van de rechte koers.', 'Religieus: afwijken van de weg van de waarheid naar het valse.', 'Hedendaags: een filosofische stroming die het bestaan van God de Schepper ontkent.'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'Oorzaken', items: ['een vervalst christendom', 'de macht van de geestelijkheid', 'de strijd van de kerk tegen de wetenschap'], page: 78, origin: 'boek' },
    { kind: 'onderscheid', title: 'De vraag "wie schiep God?"', items: ['De vraag leidt tot een onmogelijke oneindige reeks.', 'Er moet dus een ongeschapen Schepper zijn: Allah.'], page: 83, origin: 'boek' },
    { kind: 'opsomming', title: 'Bescherming', items: ['de Koran overdenken', 'smeekbede en gedenken', 'de juiste geloofsleer bijbrengen', 'atheïstische media mijden'], page: 87, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Ilḥād: afwijken van de waarheid; hedendaags: de Schepper ontkennen.',
    'Geen eerder volk geloofde dat; volken erkenden de Schepper.',
    'Oorzaken in het Westen: vervalst christendom, macht van de kerk, strijd met de wetenschap.',
    'Secularisme hoort erbij en is het gevaarlijkst.',
    'Juiste theorieën wijzen op de Schepper; de evolutietheorie noemt het boek onjuist.',
    '"Wie schiep God?" leidt tot een oneindige reeks.',
    'Bescherming: Koran, smeekbede, geloofsleer, atheïstische media mijden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent ilḥād taalkundig?', options: ['afwijken van de rechte koers', 'ontkennen', 'twijfelen', 'hoogmoed'], answer: 0, explain: 'Daarvan komt ook laḥd, het schuin uitgegraven graf.', page: 77 },
    { type: 'tf', q: 'Veel eerdere volken ontkenden het bestaan van een schepper.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Geen volk deed dat; hun ongeloof was shirk en onwetendheid over Allahs eigenschappen.', page: 77 },
    { type: 'mc', q: 'Wat is volgens het boek het juiste alternatief voor een vervalst christendom?', options: ['de islam', 'atheïsme', 'secularisme', 'agnosticisme'], answer: 0, explain: 'Het alternatief is niet atheïsme, maar de ware godsdienst.', page: 78 },
    { type: 'mc', q: 'Waarom noemt het boek secularisme de gevaarlijkste vorm?', options: ['omdat het zo verwarrend is voor mensen', 'omdat het de Schepper openlijk ontkent', 'omdat het oud is', 'omdat het alleen voor geleerden is'], answer: 0, explain: 'Veel onwetenden vallen erin.', page: 80 },
    { type: 'mc', q: 'Waar wijst de samenhang van het heelal volgens wetten op?', options: ['op een wetende Schepper', 'dat er geen schepper nodig is', 'dat materie eeuwig is', 'op toeval'], answer: 0, explain: 'Yā Sīn 36:37–40.', page: 81 },
    { type: 'mc', q: 'Wat is er mis met de vraag "wie schiep God?"', options: ['ze leidt tot een oneindige reeks', 'het is een wetenschappelijke vraag', 'er is geen antwoord', 'ze bewijst evolutie'], answer: 0, explain: 'Er moet een ongeschapen Schepper zijn.', page: 83 },
    { type: 'tf', q: 'Alles waarvan het verstand de werkelijkheid niet kan bevatten, bestaat niet.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het verstand kan de werkelijkheid van veel bestaande dingen niet bevatten.', page: 85 },
    { type: 'mc', q: 'Wat beschermt volgens het boek tegen atheïsme?', options: ['atheïstische websites en kanalen mijden', 'steeds bij afgedwaalden zitten om te debatteren', 'alleen op het verstand steunen', 'de smeekbede laten'], answer: 0, explain: '"Wie van de Dajjāl hoort, moet bij hem uit de buurt blijven."', page: 88 }
  ]),
  note: 'Oefening van het boek op p. 88. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n3-aqeedah', chapter: '21', unit: 6, ar, nl }
