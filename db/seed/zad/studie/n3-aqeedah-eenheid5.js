// Hoofdstukkaart bij العقيدة (٣), eenheid 5: التوسل وأقسامه (lessen 18–20, boek p. 65–73).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De verzonnen hadith over de status (jāh) van de Profeet ﷺ
// staat bewust niet bij de hadith, maar als waarschuwing op een kernkaart, zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٣)، سلسلة زاد العلمية',
  pages: '65–73',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'حديث الثلاثة الذين انطبقت عليهم الصخرة فسدت عليهم باب الغار، فتوسلوا إلى الله بصالح أعمالهم ففرج الله عنهم', takhrij: 'أخرجه البخاري ومسلم', note: 'دليل التوسل بالأعمال الصالحة. ذكره الكتاب بمعناه.', pages: [68], nl: 'De hadith van de drie mannen bij wie een rotsblok de ingang van de grot afsloot; zij zochten toenadering tot Allah met hun goede daden, en Allah bevrijdde hen', nlNote: 'Bewijs voor tawassul met goede daden. Het boek geeft de hadith in eigen woorden weer.' },
  { narrator: 'أنس', text: 'أن عمر كان إذا قحطوا استسقى بالعباس بن عبد المطلب فقال: «اللهم إنا كنا نتوسل إليك بنبينا فتسقينا، وإنا نتوسل إليك بعم نبينا فاسقنا». قال: فيسقون', takhrij: 'أخرجه البخاري', note: 'لو كان التوسل بالأموات جائزًا لما عدل الصحابة عن التوسل بالنبي ﷺ إلى الاستشفاع بالعباس.', pages: [70], nl: 'Als er droogte was, vroeg ʿUmar om regen via al-ʿAbbās ibn ʿAbd al-Muṭṭalib en zei: "O Allah, wij zochten toenadering tot U via onze Profeet en U gaf ons regen; nu zoeken wij toenadering tot U via de oom van onze Profeet, geef ons dus regen." En zij kregen regen', nlNote: 'Was tawassul via doden toegestaan, dan waren de metgezellen niet van de Profeet ﷺ overgestapt op de smeekbede van al-ʿAbbās.' },
  { narrator: '', text: 'من عمل عملا ليس عليه أمرنا فهو رد', takhrij: 'أخرجه البخاري', note: 'من أدلة تحريم التوسل بذات المخلوقين: لم يرد دليل على مشروعيته. والتخريج كما في الكتاب.', pages: [72], nl: 'wie een daad verricht die niet volgens onze zaak is, die wordt afgewezen', nlNote: 'Bewijs dat tawassul via de persoon van schepselen verboden is: er is geen bewijs dat het is voorgeschreven. Takhrij zoals in het boek.' }
]

const TAKHRIJ_NL = { 'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim', 'أخرجه البخاري': 'al-Bukhārī' }
const NARRATOR_NL = { 'أنس': 'Anas' }

const PERSONS = [
  ['ibn-al-athir', 'text', [67], 'قال: «الواسل: الراغب، والوسيلة: القربة والواسطة، وما يتوصل به إلى الشيء ويتقرب به».', 'Zei: de wāsil is wie verlangt; de wasīla is de toenadering en het middel waarmee men iets bereikt en nadert.'],
  ['ibn-abbas', 'text', [67], 'فسر الوسيلة في [المائدة: ٣٥] بالقربة.', 'Legde wasīla in al-Māʾida 5:35 uit als toenadering.'],
  ['qatada-ibn-diama', 'text', [67], 'قال في الوسيلة: «أي تقربوا إليه بطاعته، والعمل بما يرضيه». والكتاب يسميه «قتادة» فقط.', 'Over wasīla: nader Hem door Hem te gehoorzamen en te doen wat Hem behaagt. Het boek noemt alleen "Qatāda".'],
  ['al-abbas-ibn-abd-al-muttalib', 'text', [69, 70], 'كان الصحابة يطلبون منه أن يدعو لهم بعد وفاة النبي ﷺ، واستسقى به عمر.', 'Na het overlijden van de Profeet ﷺ vroegen de metgezellen hem voor hen te bidden; ʿUmar vroeg om regen via zijn smeekbede.'],
  ['umar-ibn-al-khattab', 'text', [70], 'استسقى بالعباس، ولم يتوسل بالنبي ﷺ بعد موته.', 'Vroeg om regen via al-ʿAbbās en zocht na de dood van de Profeet ﷺ geen toenadering via hem.'],
  ['anas-ibn-malik', 'text', [70], 'روى استسقاء عمر بالعباس، ونقل عنه أنه كان يسلم على النبي ﷺ ثم يستقبل القبلة إذا أراد الدعاء.', 'Overleverde hoe ʿUmar via al-ʿAbbās om regen vroeg; van hem is overgeleverd dat hij de Profeet ﷺ groette en zich voor de smeekbede naar de qibla keerde.'],
  ['ibn-taymiyya', 'text', [70], 'نقل أن الصحابة كانوا إذا أرادوا الدعاء عند القبر استقبلوا القبلة، وأن هذا مذهب الأئمة الأربعة.', 'Noemde dat de metgezellen zich bij het graf voor de smeekbede naar de qibla keerden, en dat dit de opvatting van de vier imams is.'],
  ['abdallah-ibn-dinar', 'text', [70], 'روى أن ابن عمر كان يقف على قبر النبي ﷺ فيصلي عليه ويدعو لأبي بكر وعمر.', 'Overleverde dat Ibn ʿUmar bij het graf van de Profeet ﷺ stond, zegeningen over hem uitsprak en voor Abū Bakr en ʿUmar bad.'],
  ['ibn-umar', 'text', [70], 'كان يقف على قبر النبي ﷺ فيصلي عليه، ويدعو لأبي بكر وعمر.', 'Stond bij het graf van de Profeet ﷺ, sprak zegeningen over hem uit en bad voor Abū Bakr en ʿUmar.'],
  ['al-bukhari', 'takhrij', [68, 70, 72], 'أخرج أحاديث الوحدة الثلاثة كما في الكتاب.', 'Nam volgens het boek de drie hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [68], 'أخرج حديث أصحاب الغار.', 'Nam de hadith van de mannen in de grot op.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'التوسل وأقسامه',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة',
  summary: 'معنى التوسل لغة وشرعًا، وقسماه: المشروع بأنواعه الستة، وغير المشروع بأنواعه الثلاثة مع أدلة المنع.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'مخطط الكتاب في صفحة ٦٨.',
    root: { label: 'التوسل', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'معناه', sub: 'الدرس ١٨', page: 67, children: ['لغة: التقرب والتوصل برغبة', 'شرعًا: التقرب إلى الله بما يرضيه'] },
      { label: 'المشروع', sub: 'الدرس ١٩', page: 68, children: ['بأسماء الله وصفاته', 'بالإيمان والعمل الصالح', 'بالتوحيد', 'بإظهار الضعف', 'بدعاء الصالحين الأحياء', 'بالإقرار بالذنب'] },
      { label: 'غير المشروع', sub: 'الدرس ٢٠', page: 69, children: ['طلب الدعاء والشفاعة من الأموات', 'بجاه النبي ﷺ', 'بذات المخلوقين'] }
    ]
  },
  points: [
    { text: 'التوسل لغة: التقرب إلى المطلوب والتوصل إليه برغبة؛ وشرعًا: التقرب إلى الله بما يرضيه بالعمل والعبادة.', page: 67 },
    { text: 'التوسل قسمان: مشروع وممنوع.', page: 68 },
    { text: 'المشروع ستة أنواع: بأسماء الله وصفاته، وبالإيمان والعمل الصالح، وبالتوحيد، وبإظهار الضعف، وبدعاء الصالحين الأحياء، وبالإقرار بالذنب.', page: 68 },
    { text: 'الأصل في التوسل التوقيف، فلا يتوسل إلا بما يوافق الدليل من الكتاب والسنة.', page: 69 },
    { text: 'طلب الدعاء أو الشفاعة من الميت لا يجوز، وقد يصل إلى الشرك الأكبر.', page: 70 },
    { text: 'التوسل بجاه النبي ﷺ من بدع الدعاء؛ ويجوز التوسل بطاعته واتباعه.', page: 71 },
    { text: 'التوسل بذات المخلوقين أو بحقهم محرم، وذريعة إلى الشرك.', page: 72 }
  ],
  terms: [
    { term: 'التوسل', translit: 'at-tawassul', meaning: 'لغة: التقرب إلى المطلوب والتوصل إليه برغبة.', explanation: 'شرعًا: التقرب إلى الله بما يرضيه بالعمل والعبادة وتحري مكارم الشريعة.', notes: [], page: 67 },
    { term: 'الوسيلة', translit: 'al-wasīla', meaning: 'القربة والواسطة، وما يتوصل به إلى الشيء ويتقرب به.', explanation: 'قال ابن عباس في ﴿وابتغوا إليه الوسيلة﴾: القربة.', notes: ['[المائدة: ٣٥]', '[الإسراء: ٥٧]'], page: 67 },
    { term: 'التوسل المشروع', translit: 'at-tawassul al-mashrūʿ', meaning: 'ما دل عليه الكتاب والسنة: بأسماء الله وصفاته، وبالأعمال الصالحة، وبالتوحيد، وبإظهار الحاجة، وبدعاء الأحياء الصالحين، وبالإقرار بالذنب.', explanation: '', notes: [], page: 68 },
    { term: 'التوسل غير المشروع', translit: 'at-tawassul ghayr al-mashrūʿ', meaning: 'تقرب العبد إلى الله بما لم يثبت أنه وسيلة في الكتاب ولا السنة.', explanation: '', notes: [], page: 69 },
    { term: 'التوقيف', translit: 'at-tawqīf', meaning: 'الوقوف عند الدليل؛ فلا يتوسل إلا بما يوافق الكتاب والسنة.', explanation: '', notes: [], page: 69 },
    { term: 'الجاه', translit: 'al-jāh', meaning: 'المنزلة والقدر، يكتسبه الإنسان بعمله.', explanation: 'التوسل بجاه النبي ﷺ توسل بعمل الغير، وهو من بدع الدعاء.', notes: ['[النجم: ٣٩]'], page: 71 },
    { term: 'التوسل بالذات', translit: 'at-tawassul bi-dh-dhāt', meaning: 'أن يسأل الله حاجته مقسمًا عليه بنبيه أو وليه أو بحقهما.', explanation: 'حكمه التحريم.', notes: [], page: 72 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'أقسام التوسل',
      intro: 'مخطط الكتاب في صفحة ٦٨.',
      root: { label: 'التوسل', page: 68 },
      nodes: [
        { label: 'مشروع', children: ['بأسماء الله وصفاته', 'بالإيمان والعمل الصالح', 'بالتوحيد', 'بإظهار الضعف', 'بدعاء الصالحين الأحياء', 'بالإقرار بالذنب'], page: 68 },
        { label: 'غير مشروع', children: ['بطلب الشفاعة من الأموات', 'بجاه النبي ﷺ', 'بذات المخلوقين'], page: 69 }
      ]
    },
    {
      type: 'cards',
      title: 'التوسل المشروع وأدلته',
      intro: 'ستة أنواع.',
      nodes: [
        { label: 'بأسماء الله وصفاته', sub: '[الأعراف: ١٨٠]', page: 68 },
        { label: 'بالإيمان والعمل الصالح', sub: '[آل عمران: ١٩٣]، وحديث أصحاب الغار', page: 68 },
        { label: 'بالتوحيد', sub: 'كما توسل يونس [الأنبياء: ٨٧–٨٨]', page: 69 },
        { label: 'بإظهار الضعف والحاجة', sub: 'كما توسل أيوب [الأنبياء: ٨٣]', page: 69 },
        { label: 'بدعاء الصالحين الأحياء', sub: 'كطلب الصحابة الدعاء من النبي ﷺ ثم من العباس', page: 69 },
        { label: 'بالإقرار بالذنب', sub: 'كما توسل موسى [القصص: ١٦]', page: 69 }
      ]
    },
    {
      type: 'compare',
      title: 'التوسل غير المشروع',
      intro: 'ثلاثة أنواع وأدلة منعها.',
      columns: ['النوع', 'الدليل على المنع'],
      rows: [
        { label: 'الدعاء والشفاعة من الأموات', cells: ['أن يطلب من الميت أن يدعو له أو يشفع له، خاصة عند قبره', 'عدول الصحابة عن النبي ﷺ بعد موته إلى العباس [فاطر: ١٣–١٤]'] },
        { label: 'بجاه النبي ﷺ', cells: ['اللهم إني أسألك بجاه نبيك', 'لم يفعله الصحابة، والأصل في العبادات المنع، وهو توسل بعمل الغير'] },
        { label: 'بذات المخلوقين', cells: ['أسألك بنبيك أو بحق وليك فلان', 'لم يرد دليل، وذريعة إلى الشرك، وليس على الله حق إلا ما أحقه على نفسه'] }
      ],
      page: 70
    }
  ],
  sections: [
    { title: 'معنى التوسل', text: 'لغة: التقرب إلى المطلوب والتوصل إليه برغبة. وشرعًا: التقرب إلى الله بما يرضيه بالعمل والعبادة.', more: 'قال قتادة في الوسيلة: أي تقربوا إليه بطاعته والعمل بما يرضيه.', page: 67 },
    { title: 'التوسل بدعاء الصالحين الأحياء', text: 'كان الصحابة إذا أجدبوا طلبوا من النبي ﷺ أن يدعو الله لهم، ولما توفي صاروا يطلبون من عمه العباس فيدعو لهم.', more: '', page: 69 },
    { title: 'طلب الدعاء والشفاعة من الأموات', text: 'لا يجوز طلب الدعاء أو الشفاعة من الميت، وخاصة عند قبره؛ وهو من البدع المنكرة والوسائل المفضية إلى الشرك، وقد يصل إلى الشرك الأكبر.', more: 'ونقل شيخ الإسلام أن الصحابة كانوا يسلمون على النبي ﷺ، فإذا أرادوا الدعاء استقبلوا القبلة، وأن هذا مذهب الأئمة الأربعة.', page: 70 },
    { title: 'التوسل بجاه النبي ﷺ', text: 'من بدع الدعاء: لم يفعله الصحابة مع شدة تعظيمهم له، والأصل في العبادات المنع، وهو توسل بعمل الغير [النجم: ٣٩].', more: 'فالتوسل إنما يكون بدعاء أو عمل صالح أو ترك معصية، لا بقدر أو ذات أو أمر معنوي كالجاه. ويجوز التوسل بطاعته واتباعه ﷺ.', page: 71 },
    { title: 'التوسل بذات المخلوقين', text: 'كقوله: اللهم إني أسألك بنبيك، أو بحق وليك فلان، أو أقسمت عليك بفلان. حكمه التحريم.', more: 'لأنه لم يرد عليه دليل، ولأنه ذريعة إلى الشرك، ولأن السؤال بحق فلان يتضمن أن للمخلوق حقًا على الخالق.', page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'التوسل', items: ['لغة: التقرب إلى المطلوب والتوصل إليه برغبة.', 'شرعًا: التقرب إلى الله بما يرضيه بالعمل والعبادة.'], page: 67, origin: 'boek' },
    { kind: 'opsomming', title: 'التوسل المشروع', items: ['بأسماء الله وصفاته', 'بالإيمان والعمل الصالح', 'بالتوحيد', 'بإظهار الضعف والحاجة', 'بدعاء الصالحين الأحياء', 'بالإقرار بالذنب'], page: 68, origin: 'boek' },
    { kind: 'opsomming', title: 'التوسل غير المشروع', items: ['طلب الدعاء والشفاعة من الأموات', 'بجاه النبي ﷺ', 'بذات المخلوقين أو بحقهم'], page: 69, origin: 'boek' },
    { kind: 'uitzondering', title: 'حديث مكذوب', items: ['«إذا سألتم الله فاسألوه بجاهي، فإن جاهي عند الله عظيم» حديث مكذوب، ليس في شيء من كتب السنة التي يعتمد عليها.'], page: 71, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التوسل: التقرب إلى الله بما يرضيه.',
    'الأصل في التوسل التوقيف.',
    'المشروع ستة أنواع، منها التوسل بالأسماء والصفات وبالعمل الصالح.',
    'عدل الصحابة بعد موت النبي ﷺ إلى دعاء العباس.',
    'التوسل بالجاه بدعة، وحديث الجاه مكذوب.',
    'التوسل بالذات محرم وذريعة إلى الشرك.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى الوسيلة في قوله تعالى ﴿وابتغوا إليه الوسيلة﴾ عند ابن عباس؟', options: ['القربة', 'الواسطة من البشر', 'الجاه', 'الشفاعة'], answer: 0, explain: 'كما في الكتاب [المائدة: ٣٥].', page: 67 },
    { type: 'mc', q: 'بم توسل الثلاثة الذين انطبقت عليهم الصخرة؟', options: ['بصالح أعمالهم', 'بجاه نبيهم', 'بذوات الصالحين', 'بالأموات'], answer: 0, explain: 'فهو من التوسل المشروع بالأعمال الصالحة.', page: 68 },
    { type: 'mc', q: 'بم توسل يونس عليه السلام؟', options: ['بالتوحيد', 'بالإقرار بالذنب وحده', 'بدعاء غيره', 'بجاه أبيه'], answer: 0, explain: '﴿لا إله إلا أنت سبحانك﴾ [الأنبياء: ٨٧].', page: 69 },
    { type: 'tf', q: 'الأصل في التوسل التوقيف.', options: ['صواب', 'خطأ'], answer: 0, explain: 'فلا يتوسل إلا بما يوافق الدليل.', page: 69 },
    { type: 'mc', q: 'لماذا استسقى عمر بالعباس؟', options: ['لأن التوسل بدعاء الحي مشروع، وبالميت غير مشروع', 'لأن العباس أفضل من النبي ﷺ', 'لأن النبي ﷺ أمره بذلك', 'لأن العباس كان الخليفة'], answer: 0, explain: 'لو كان التوسل بالأموات جائزًا لما عدلوا عن النبي ﷺ.', page: 70 },
    { type: 'tf', q: 'حديث «إذا سألتم الله فاسألوه بجاهي» حديث صحيح.', options: ['صواب', 'خطأ'], answer: 1, explain: 'حديث مكذوب، ليس في شيء من كتب السنة المعتمدة.', page: 71 },
    { type: 'mc', q: 'ما حكم قول: اللهم إني أسألك بحق نبيك فلان؟', options: ['محرم', 'مشروع', 'مستحب', 'مباح'], answer: 0, explain: 'لم يرد دليل، وهو ذريعة إلى الشرك.', page: 72 }
  ]),
  note: 'نشاط الكتاب في صفحة ٧٣.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'Tawassul en de soorten ervan',
  subtitle: 'Drie lessen samen op één pagina',
  summary: 'De betekenis van tawassul (toenadering zoeken tot Allah via een middel), taalkundig en religieus, en de twee soorten: toegestaan, in zes vormen, en niet toegestaan, in drie vormen, met de bewijzen voor het verbod.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (3), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'Het schema van het boek op p. 68.',
    root: { label: 'Tawassul', sub: 'Eenheid 5' },
    nodes: [
      { label: 'Betekenis', sub: 'les 18', page: 67, children: ['taal: verlangend naderen', 'religieus: Allah naderen met wat Hem behaagt'] },
      { label: 'Toegestaan', sub: 'les 19', page: 68, children: ['via Allahs namen en eigenschappen', 'via geloof en goede daden', 'via tawḥīd', 'via zwakte tonen', 'via de smeekbede van levende vromen', 'via zonde erkennen'] },
      { label: 'Niet toegestaan', sub: 'les 20', page: 69, children: ['doden om smeekbede en voorspraak vragen', 'via de status (jāh) van de Profeet ﷺ', 'via de persoon van schepselen'] }
    ]
  },
  points: [
    { text: 'Tawassul is taalkundig verlangend naderen tot wat men zoekt; religieus: Allah naderen met wat Hem behaagt, door daden en aanbidding.', page: 67 },
    { text: 'Er zijn twee soorten tawassul: toegestaan en verboden.', page: 68 },
    { text: 'Toegestaan zijn zes vormen: via Allahs namen en eigenschappen, via geloof en goede daden, via tawḥīd, door zwakte te tonen, via de smeekbede van levende vromen, en door de zonde te erkennen.', page: 68 },
    { text: 'Uitgangspunt bij tawassul is dat men zich aan de bronnen houdt (tawqīf): alleen wat Koran en Sunna bevestigen.', page: 69 },
    { text: 'Een dode om smeekbede of voorspraak vragen mag niet en kan tot grote shirk leiden.', page: 70 },
    { text: 'Tawassul via de status (jāh) van de Profeet ﷺ is een vernieuwing in de smeekbede; tawassul via gehoorzaamheid aan hem en hem volgen mag wel.', page: 71 },
    { text: 'Tawassul via de persoon of het "recht" van schepselen is verboden en een weg naar shirk.', page: 72 }
  ],
  terms: [
    { term: 'التوسل', translit: 'at-tawassul', meaning: 'Taal: verlangend naderen tot wat men zoekt en het bereiken.', explanation: 'Religieus: Allah naderen met wat Hem behaagt, door daden en aanbidding en door het nobele van de sharīʿa na te streven.', notes: [], page: 67 },
    { term: 'الوسيلة', translit: 'al-wasīla', meaning: 'Toenadering en middel: waarmee men iets bereikt en nadert.', explanation: 'Ibn ʿAbbās over "zoek het middel tot Hem": toenadering.', notes: ['al-Māʾida 5:35', 'al-Isrāʾ 17:57'], page: 67 },
    { term: 'التوسل المشروع', translit: 'at-tawassul al-mashrūʿ', meaning: 'Toegestane tawassul: wat Koran en Sunna aanwijzen, via Allahs namen en eigenschappen, goede daden, tawḥīd, het tonen van behoefte, de smeekbede van levende vromen en het erkennen van de zonde.', explanation: '', notes: [], page: 68 },
    { term: 'التوسل غير المشروع', translit: 'at-tawassul ghayr al-mashrūʿ', meaning: 'Niet-toegestane tawassul: Allah naderen met iets waarvan Koran en Sunna niet bevestigen dat het een middel is.', explanation: '', notes: [], page: 69 },
    { term: 'التوقيف', translit: 'at-tawqīf', meaning: 'Zich houden aan het bewijs: alleen tawassul met wat Koran en Sunna bevestigen.', explanation: '', notes: [], page: 69 },
    { term: 'الجاه', translit: 'al-jāh', meaning: 'Status en aanzien, die iemand door zijn eigen daden verwerft.', explanation: 'Tawassul via de status van de Profeet ﷺ is tawassul via de daad van een ander en een vernieuwing in de smeekbede.', notes: ['an-Najm 53:39'], page: 71 },
    { term: 'التوسل بالذات', translit: 'at-tawassul bi-dh-dhāt', meaning: 'Allah om iets vragen en daarbij zweren bij Zijn profeet of een vrome, of bij hun "recht".', explanation: 'Verboden.', notes: [], page: 72 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'De soorten tawassul',
      intro: 'Het schema van het boek op p. 68.',
      root: { label: 'Tawassul', page: 68 },
      nodes: [
        { label: 'Toegestaan', children: ['via Allahs namen en eigenschappen', 'via geloof en goede daden', 'via tawḥīd', 'via zwakte tonen', 'via de smeekbede van levende vromen', 'via zonde erkennen'], page: 68 },
        { label: 'Niet toegestaan', children: ['voorspraak vragen aan doden', 'via de status van de Profeet ﷺ', 'via de persoon van schepselen'], page: 69 }
      ]
    },
    {
      type: 'cards',
      title: 'Toegestane tawassul en de bewijzen',
      intro: 'Zes vormen.',
      nodes: [
        { label: 'Via Allahs namen en eigenschappen', sub: 'al-Aʿrāf 7:180', page: 68 },
        { label: 'Via geloof en goede daden', sub: 'Āl ʿImrān 3:193 en de hadith van de mannen in de grot', page: 68 },
        { label: 'Via tawḥīd', sub: 'zoals Yūnus (al-Anbiyāʾ 21:87–88)', page: 69 },
        { label: 'Door zwakte en behoefte te tonen', sub: 'zoals Ayyūb (al-Anbiyāʾ 21:83)', page: 69 },
        { label: 'Via de smeekbede van levende vromen', sub: 'zoals de metgezellen bij de Profeet ﷺ en later bij al-ʿAbbās', page: 69 },
        { label: 'Door de zonde te erkennen', sub: 'zoals Mūsā (al-Qaṣaṣ 28:16)', page: 69 }
      ]
    },
    {
      type: 'compare',
      title: 'Niet-toegestane tawassul',
      intro: 'Drie vormen en de bewijzen voor het verbod.',
      columns: ['Vorm', 'Waarom verboden'],
      rows: [
        { label: 'Doden om smeekbede en voorspraak vragen', cells: ['een dode vragen voor je te bidden of voorspraak te doen, vooral bij zijn graf', 'de metgezellen stapten na zijn dood over op al-ʿAbbās (Fāṭir 35:13–14)'] },
        { label: 'Via de status van de Profeet ﷺ', cells: ['"O Allah, ik vraag U via de status van Uw profeet"', 'de metgezellen deden het niet, aanbidding is verboden tot er bewijs is, en het is tawassul via de daad van een ander'] },
        { label: 'Via de persoon van schepselen', cells: ['"ik vraag U via Uw profeet" of "via het recht van Uw heilige"', 'geen bewijs, een weg naar shirk, en Allah heeft geen plicht dan wat Hij Zichzelf oplegde'] }
      ],
      page: 70
    }
  ],
  sections: [
    { title: 'Betekenis van tawassul', text: 'Taal: verlangend naderen tot wat men zoekt. Religieus: Allah naderen met wat Hem behaagt, door daden en aanbidding.', more: 'Qatāda over wasīla: nader Hem door Hem te gehoorzamen en te doen wat Hem behaagt.', page: 67 },
    { title: 'Via de smeekbede van levende vromen', text: 'Bij droogte vroegen de metgezellen de Profeet ﷺ om voor hen te bidden; na zijn overlijden vroegen ze dat aan zijn oom al-ʿAbbās.', more: '', page: 69 },
    { title: 'Doden om smeekbede of voorspraak vragen', text: 'Een dode vragen voor je te bidden of voorspraak te doen, vooral bij zijn graf, mag niet: het is een verwerpelijke vernieuwing en een weg naar shirk, en kan grote shirk worden.', more: 'Ibn Taymiyya: de metgezellen groetten de Profeet ﷺ en keerden zich voor de smeekbede naar de qibla; dat is ook de opvatting van de vier imams.', page: 70 },
    { title: 'Via de status van de Profeet ﷺ', text: 'Een vernieuwing in de smeekbede: de metgezellen deden het niet terwijl ze hem het meest eerden; aanbidding is verboden tot er bewijs is; en het is tawassul via de daad van een ander (an-Najm 53:39).', more: 'Tawassul gaat via smeekbede, goede daden of het laten van zonde, niet via iemands rang, persoon of status. Tawassul via gehoorzaamheid aan de Profeet ﷺ en hem volgen mag wel.', page: 71 },
    { title: 'Via de persoon van schepselen', text: 'Zoals: "O Allah, ik vraag U via Uw profeet", "via het recht van Uw heilige" of "ik bezweer U bij die-en-die". Dat is verboden.', more: 'Er is geen bewijs voor; het is een weg naar shirk; en vragen via iemands "recht" houdt in dat een schepsel recht heeft op de Schepper, terwijl Allah alleen verplicht is tot wat Hij Zichzelf oplegde.', page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Tawassul', items: ['Taal: verlangend naderen tot wat men zoekt.', 'Religieus: Allah naderen met wat Hem behaagt, door daden en aanbidding.'], page: 67, origin: 'boek' },
    { kind: 'opsomming', title: 'Toegestane tawassul', items: ['via Allahs namen en eigenschappen', 'via geloof en goede daden', 'via tawḥīd', 'door zwakte en behoefte te tonen', 'via de smeekbede van levende vromen', 'door de zonde te erkennen'], page: 68, origin: 'boek' },
    { kind: 'opsomming', title: 'Niet-toegestane tawassul', items: ['doden om smeekbede en voorspraak vragen', 'via de status van de Profeet ﷺ', 'via de persoon of het "recht" van schepselen'], page: 69, origin: 'boek' },
    { kind: 'uitzondering', title: 'Een verzonnen hadith', items: ['"Als jullie Allah iets vragen, vraag het dan via mijn status, want mijn status bij Allah is groot" is verzonnen; het staat in geen enkel betrouwbaar hadithwerk.'], page: 71, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Tawassul: Allah naderen met wat Hem behaagt.',
    'Uitgangspunt: alleen wat de bronnen bevestigen.',
    'Zes toegestane vormen, waaronder via Allahs namen en via goede daden.',
    'Na de dood van de Profeet ﷺ vroegen de metgezellen al-ʿAbbās om te bidden.',
    'Tawassul via de status van de Profeet ﷺ is een vernieuwing; de hadith daarover is verzonnen.',
    'Tawassul via de persoon van schepselen is verboden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent wasīla in al-Māʾida 5:35 volgens Ibn ʿAbbās?', options: ['toenadering', 'een menselijke tussenpersoon', 'status', 'voorspraak'], answer: 0, explain: 'Zo staat het in het boek.', page: 67 },
    { type: 'mc', q: 'Waarmee zochten de drie mannen in de grot toenadering tot Allah?', options: ['met hun goede daden', 'met de status van hun profeet', 'met de persoon van vromen', 'met doden'], answer: 0, explain: 'Toegestane tawassul via goede daden.', page: 68 },
    { type: 'mc', q: 'Waarmee zocht Yūnus toenadering tot Allah?', options: ['met tawḥīd', 'alleen met het erkennen van zijn zonde', 'met de smeekbede van een ander', 'met de status van zijn vader'], answer: 0, explain: '"Er is geen god dan U, glorie aan U" (al-Anbiyāʾ 21:87).', page: 69 },
    { type: 'tf', q: 'Bij tawassul houdt men zich aan wat de bronnen bevestigen.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Alleen wat Koran en Sunna aanwijzen.', page: 69 },
    { type: 'mc', q: 'Waarom vroeg ʿUmar om regen via al-ʿAbbās?', options: ['omdat tawassul via de smeekbede van een levende mag en via een dode niet', 'omdat al-ʿAbbās beter was dan de Profeet ﷺ', 'omdat de Profeet ﷺ het had opgedragen', 'omdat al-ʿAbbās kalief was'], answer: 0, explain: 'Was tawassul via doden toegestaan, dan waren ze niet overgestapt.', page: 70 },
    { type: 'tf', q: '"Vraag Allah via mijn status" is een authentieke hadith.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is verzonnen en staat in geen betrouwbaar hadithwerk.', page: 71 },
    { type: 'mc', q: 'Wat is het oordeel over "O Allah, ik vraag U via het recht van Uw profeet"?', options: ['verboden', 'voorgeschreven', 'aanbevolen', 'toegestaan'], answer: 0, explain: 'Er is geen bewijs voor, en het is een weg naar shirk.', page: 72 }
  ]),
  note: 'Oefening van het boek op p. 73. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n3-aqeedah', chapter: '18', unit: 5, ar, nl }
