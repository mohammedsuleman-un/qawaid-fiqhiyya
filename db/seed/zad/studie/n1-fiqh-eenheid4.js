// Hoofdstukkaart bij الفقه (١), eenheid 4: الصلاة والأذان والإقامة (lessen 20–24, boek p. 79–92).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 82, 84, 88 en 91 en een deel van p. 89 zijn in het boek
// "alleen ter kennisname". Niet in het hadith-tabblad: de adhān-hadith van Abū Maḥdhūra (p. 89), omdat
// de bewoording in het boek nog gecontroleerd moet worden; de woorden van de adhān staan wel in de
// hadith van ʿAbdallāh ibn Zayd.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (١)، سلسلة زاد العلمية',
  pages: '79–92',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'الصلوات الخمس والجمعة إلى الجمعة ورمضان إلى رمضان مكفرات ما بينهن إذا اجتنب الكبائر', takhrij: 'رواه مسلم', note: 'في فضل الصلاة.', pages: [81], nl: 'De vijf gebeden, van vrijdag tot vrijdag en van Ramadan tot Ramadan, wissen uit wat ertussen ligt, zolang de grote zonden gemeden worden', nlNote: 'Over de verdienste van het gebed.' },
  { narrator: 'أبو هريرة', text: 'أرأيتم لو أن نهرًا بباب أحدكم يغتسل منه كل يوم خمس مرات هل يبقى من درنه شيء؟ ... فذلك مثل الصلوات الخمس يمحو الله بهن الخطايا', takhrij: 'متفق عليه', note: '', pages: [81], nl: 'Wat denken jullie: als er een rivier bij de deur van een van jullie was waarin hij zich elke dag vijf keer wast, zou er dan nog vuil op hem blijven? ... Zo zijn de vijf gebeden: Allah wist daarmee de zonden uit', nlNote: '' },
  { narrator: '', text: 'أعلمهم أن الله افترض عليهم خمس صلوات في كل يوم وليلة', takhrij: 'متفق عليه', note: 'لما بعث معاذًا إلى اليمن.', pages: [83], nl: 'Laat hen weten dat Allah hun vijf gebeden per dag en nacht verplicht heeft', nlNote: 'Toen hij Muʿādh naar Jemen stuurde.' },
  { narrator: '', text: 'مروا أبناءكم بالصلاة لسبع سنين واضربوهم عليها لعشر سنين وفرقوا بينهم في المضاجع', takhrij: 'رواه أبو داود وصححه الألباني', note: 'والضرب في الكتاب ضرب غير مبرح.', pages: [83], nl: 'Draag jullie kinderen het gebed op als ze zeven zijn, tuchtig hen ervoor als ze tien zijn, en laat hen apart slapen', nlNote: 'Het boek zegt erbij: een tik die geen letsel geeft.' },
  { narrator: 'جابر بن عبد الله', text: 'إن بين الرجل وبين الشرك والكفر ترك الصلاة', takhrij: 'رواه مسلم', note: 'في حكم تارك الصلاة.', pages: [83], nl: 'Tussen een man en shirk en ongeloof ligt het nalaten van het gebed', nlNote: 'Over wie het gebed nalaat.' },
  { narrator: 'بريدة بن الحصيب', text: 'العهد الذي بيننا وبينهم الصلاة فمن تركها فقد كفر', takhrij: 'رواه النسائي وصححه الألباني', note: '', pages: [83], nl: 'Het verbond tussen ons en hen is het gebed; wie het nalaat, is ongelovig geworden', nlNote: '' },
  { narrator: '', text: 'من أدرك ركعة من الصلاة فقد أدرك الصلاة', takhrij: 'متفق عليه', note: FYI, pages: [84], nl: 'Wie één rakʿa van het gebed haalt, heeft het gebed gehaald', nlNote: FYI_NL },
  { narrator: 'عبد الله بن زيد بن عبد ربه', text: 'إنها لرؤيا حق إن شاء الله، فقم مع بلال فألق عليه ما رأيت فليؤذن به فإنه أندى صوتًا منك', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', note: 'في بدء الأذان، بعد أن رأى ألفاظ الأذان والإقامة في المنام.', pages: [85, 86], nl: 'Het is een ware droom, als Allah het wil. Ga met Bilāl staan en zeg hem wat je zag, laat hij het oproepen, want hij heeft een krachtiger stem dan jij', nlNote: 'Over het begin van de adhān, nadat hij de woorden van adhān en iqāma in een droom had gezien.' },
  { narrator: 'أبو هريرة', text: 'لو يعلم الناس ما في النداء والصف الأول ثم لم يجدوا إلا أن يستهموا عليه لاستهموا', takhrij: 'متفق عليه', note: 'في فضل الأذان.', pages: [86], nl: 'Als de mensen wisten wat er in de oproep en de eerste rij ligt, en ze konden het alleen door loting krijgen, dan zouden ze erom loten', nlNote: 'Over de verdienste van de adhān.' },
  { narrator: 'معاوية بن أبي سفيان', text: 'المؤذنون أطول الناس أعناقًا يوم القيامة', takhrij: 'رواه مسلم', note: '', pages: [86], nl: 'De muʾadhdhins hebben op de Dag der Opstanding de langste halzen', nlNote: '' },
  { narrator: 'أبو جحيفة', text: 'أذن بلال فجعلت أتتبع فاه ها هنا وها هنا يقول يمينًا وشمالًا: حي على الصلاة، حي على الفلاح', takhrij: 'رواه البخاري ومسلم', note: 'الالتفات في الحيعلتين. ' + FYI, pages: [88], nl: 'Bilāl riep de adhān en ik volgde zijn mond hierheen en daarheen, naar rechts en links: kom naar het gebed, kom naar het succes', nlNote: 'Het hoofd draaien bij de twee oproepen. ' + FYI_NL },
  { narrator: 'أنس بن مالك', text: 'أمر بلال أن يشفع الأذان وأن يوتر الإقامة إلا الإقامة', takhrij: 'متفق عليه', note: '', pages: [89], nl: 'Bilāl kreeg opdracht de woorden van de adhān dubbel te zeggen en die van de iqāma enkel, behalve "de iqāma is begonnen"', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'إذا سمعتم النداء فقولوا مثل ما يقول المؤذن', takhrij: 'متفق عليه', note: 'إلا في الحيعلتين فيقول: لا حول ولا قوة إلا بالله.', pages: [90], nl: 'Als jullie de oproep horen, zeg dan wat de muʾadhdhin zegt', nlNote: 'Behalve bij de twee oproepen; dan zeg je: er is geen macht of kracht dan bij Allah.' },
  { narrator: 'عبد الله بن عمرو', text: 'إذا سمعتم المؤذن فقولوا مثل ما يقول ثم صلوا علي فإنه من صلى علي صلاة صلى الله عليه بها عشرًا ثم سلوا الله لي الوسيلة', takhrij: 'أخرجه مسلم', note: '', pages: [90], nl: 'Als jullie de muʾadhdhin horen, zeg wat hij zegt, vraag dan zegen over mij, want wie één keer zegen over mij vraagt, over hem zendt Allah tien keer Zijn zegen; vraag Allah dan voor mij de wasīla', nlNote: '' },
  { narrator: 'جابر بن عبد الله', text: 'من قال حين يسمع النداء: اللهم رب هذه الدعوة التامة والصلاة القائمة آت محمدًا الوسيلة والفضيلة وابعثه مقامًا محمودًا الذي وعدته حلت له شفاعتي يوم القيامة', takhrij: 'رواه البخاري', note: '', pages: [90], nl: 'Wie bij het horen van de oproep zegt: O Allah, Heer van deze volmaakte oproep en het gebed dat gaat beginnen, geef Muḥammad de wasīla en de voortreffelijkheid en laat hem opstaan op de geprezen plaats die U hem beloofde, voor hem geldt mijn voorspraak op de Dag der Opstanding', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'لا يرد الدعاء بين الأذان والإقامة', takhrij: 'أخرجه أبو داود وصححه الألباني', note: '', pages: [90], nl: 'Een smeekbede tussen adhān en iqāma wordt niet afgewezen', nlNote: '' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim', 'أخرجه مسلم': 'Muslim', 'رواه البخاري': 'al-Bukhārī', 'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'أخرجه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه النسائي وصححه الألباني': 'an-Nasāʾī; authentiek volgens al-Albānī',
  'رواه أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'أبو هريرة': 'Abū Hurayra', 'جابر بن عبد الله': 'Jābir ibn ʿAbdallāh', 'بريدة بن الحصيب': 'Burayda ibn al-Ḥuṣayb', 'عبد الله بن زيد بن عبد ربه': 'ʿAbdallāh ibn Zayd ibn ʿAbd Rabbih',
  'معاوية بن أبي سفيان': 'Muʿāwiya ibn Abī Sufyān', 'أبو جحيفة': 'Abū Juḥayfa', 'أنس بن مالك': 'Anas ibn Mālik', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'عبد الله بن عمرو': 'ʿAbdallāh ibn ʿAmr'
}

const PERSONS = [
  ['abu-hurayra', 'text', [81, 86], 'روى فضل الصلوات الخمس وفضل النداء.', 'Overleverde de verdienste van de vijf gebeden en van de oproep.'],
  ['muadh-ibn-jabal', 'text', [83], 'بعثه النبي ﷺ إلى اليمن يعلمهم فرض الصلاة.', 'De Profeet ﷺ stuurde hem naar Jemen om de verplichting van het gebed te onderwijzen.'],
  ['jabir-ibn-abdallah', 'text', [83, 90, 91], 'روى أن ترك الصلاة بين الرجل والكفر، ودعاء النداء.', 'Overleverde dat het nalaten van het gebed tussen een man en ongeloof ligt, en het smeekgebed na de oproep.'],
  ['burayda-ibn-al-husayb', 'text', [83], 'روى «العهد الذي بيننا وبينهم الصلاة».', 'Overleverde "het verbond tussen ons en hen is het gebed".'],
  ['abdallah-ibn-zayd-ibn-abd-rabbih', 'text', [85, 86], 'رأى ألفاظ الأذان في المنام.', 'Zag de woorden van de adhān in een droom.'],
  ['bilal-ibn-rabah', 'text', [86, 88, 89], 'أذن بما رآه عبد الله بن زيد، وكان أندى صوتًا.', 'Riep de adhān op met wat ʿAbdallāh ibn Zayd zag; hij had een krachtiger stem.'],
  ['umar-ibn-al-khattab', 'text', [86], 'رأى مثل ما رأى عبد الله بن زيد.', 'Zag hetzelfde als ʿAbdallāh ibn Zayd.'],
  ['muawiya-ibn-abi-sufyan', 'text', [86], 'روى فضل المؤذنين.', 'Overleverde de verdienste van de muʾadhdhins.'],
  ['abu-juhayfa', 'text', [88], 'رأى بلالًا يلتفت في الحيعلتين.', 'Zag Bilāl zijn hoofd draaien bij de twee oproepen.'],
  ['abu-mahdhura', 'text', [89], 'علمه النبي ﷺ الأذان بنفسه، وروى التثويب في أذان الصبح.', 'De Profeet ﷺ leerde hem zelf de adhān; overleverde "het gebed is beter dan slaap" in de ochtend-adhān.'],
  ['anas-ibn-malik', 'text', [89, 90], 'روى شفع الأذان وإيتار الإقامة، وأن الدعاء بينهما لا يرد.', 'Overleverde de dubbele adhān en enkele iqāma, en dat de smeekbede ertussen niet afgewezen wordt.'],
  ['abu-said-al-khudri', 'text', [90], 'روى متابعة المؤذن.', 'Overleverde het nazeggen van de muʾadhdhin.'],
  ['abdallah-ibn-amr', 'text', [90], 'روى الصلاة على النبي ﷺ وسؤال الوسيلة بعد الأذان.', 'Overleverde de zegenbede over de Profeet ﷺ en het vragen van de wasīla na de adhān.'],
  ['malik-ibn-al-huwayrith', 'text', [91], 'أمرهم النبي ﷺ بالأذان وكانوا مسافرين.', 'De Profeet ﷺ droeg hem en zijn groep de adhān op terwijl ze reisden.'],
  ['muslim', 'takhrij', [81, 83, 86, 88, 90, 91], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['al-bukhari', 'takhrij', [81, 83, 84, 86, 88, 89, 90], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [83, 86, 90], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['at-tirmidhi', 'takhrij', [86], 'أخرج حديث بدء الأذان.', 'Nam de hadith over het begin van de adhān op.'],
  ['an-nasai', 'takhrij', [83, 89], 'أخرج حديث بريدة والتثويب.', 'Nam de hadith van Burayda en over de ochtend-adhān op.'],
  ['al-albani', 'takhrij', [83, 86, 89, 90], 'صحح أحاديث في الوحدة.', 'Verklaarde hadith in deze eenheid authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'الصلاة والأذان والإقامة',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف الصلاة ومنزلتها وفضلها، وحكمها على المكلف والصغير وحكم تاركها، ثم الأذان والإقامة: تعريفهما وبدء مشروعيتهما وفضلهما، وشروط صحة الأذان وما يشترط في المؤذن، وصفة الأذان والإقامة والتثويب ومتابعة المؤذن.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'الصلاة والأذان والإقامة', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'الصلاة', sub: 'الدرس ٢٠', page: 81, children: ['تعريفها', 'منزلتها', 'فضلها'] },
      { label: 'حكمها', sub: 'الدرس ٢١', page: 83, children: ['على المكلف', 'الصغير', 'تاركها'] },
      { label: 'الأذان والإقامة', sub: 'الدرس ٢٢', page: 85, children: ['تعريفهما', 'بدء المشروعية', 'فضل الأذان'] },
      { label: 'شروط الأذان', sub: 'الدرس ٢٣', page: 87, children: ['الوقت', 'الترتيب', 'المؤذن'] },
      { label: 'صفة الأذان', sub: 'الدرس ٢٤', page: 89, children: ['الأذان', 'الإقامة', 'التثويب', 'المتابعة'] }
    ]
  },
  points: [
    { text: 'الصلاة شرعًا التعبد لله بأقوال وأفعال مخصوصة مفتتحة بالتكبير مختتمة بالتسليم.', page: 81 },
    { text: 'الصلاة الركن الثاني من أركان الإسلام بعد الشهادتين.', page: 81 },
    { text: 'الصلوات الخمس واجبة على كل مسلم بالغ عاقل، ذكرًا كان أو أنثى.', page: 83 },
    { text: 'يؤمر الصغير بالصلاة لسبع، ويضرب عليها ضربًا غير مبرح لعشر.', page: 83 },
    { text: 'من ترك الصلاة جاحدًا وجوبها كفر بالإجماع، ومن تركها كسلًا ففيه خلاف رجح الكتاب فيه الكفر.', page: 83 },
    { text: 'شرع الأذان في السنة الأولى من الهجرة.', page: 85 },
    { text: 'شروط صحة الأذان: دخول الوقت، والترتيب والموالاة، والعربية بالألفاظ الواردة.', page: 87 },
    { text: 'يستحب أن يقول السامع مثل ما يقول المؤذن، إلا في الحيعلتين فيقول: لا حول ولا قوة إلا بالله.', page: 90 }
  ],
  terms: [
    { term: 'الصلاة', translit: 'aṣ-ṣalāh', meaning: 'لغة: الدعاء.', explanation: 'وشرعًا: التعبد لله بأقوال وأفعال مخصوصة مفتتحة بالتكبير مختتمة بالتسليم.', notes: ['[التوبة: ١٠٣]'], page: 81 },
    { term: 'الأذان', translit: 'al-adhān', meaning: 'الإعلام بدخول وقت الصلاة بذكر مخصوص.', explanation: 'لغة: الإعلام.', notes: ['[التوبة: ٣]'], page: 85 },
    { term: 'الإقامة', translit: 'al-iqāma', meaning: 'الإعلام بالقيام إلى الصلاة بذكر مخصوص.', explanation: '', notes: [], page: 85 },
    { term: 'الحيعلتان', translit: 'al-ḥayʿalatān', meaning: '«حي على الصلاة» و«حي على الفلاح».', explanation: 'يلتفت فيهما يمينًا وشمالًا.', notes: [], page: 88 },
    { term: 'التثويب', translit: 'at-tathwīb', meaning: 'قول «الصلاة خير من النوم» مرتين في أذان الصبح بعد الحيعلتين.', explanation: '', notes: [], page: 89 },
    { term: 'الوسيلة', translit: 'al-wasīla', meaning: 'منزلة في الجنة لا تنبغي إلا لعبد من عباد الله.', explanation: 'يسألها السامع للنبي ﷺ بعد الأذان.', notes: [], page: 90 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'منزلة الصلاة (للاطلاع فقط)',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'فرضت ليلة الإسراء والمعراج', sub: 'قبل الهجرة', page: 82 },
        { label: 'فرضت دون واسطة', page: 82 },
        { label: 'فرضت في السماء', page: 82 },
        { label: 'فرضت خمسين صلاة', sub: 'دليل محبة الله لها', page: 82 }
      ]
    },
    {
      type: 'compare',
      title: 'حكم تارك الصلاة',
      intro: 'كما في الكتاب.',
      columns: ['الحكم'],
      rows: [
        { label: 'تركها جاحدًا وجوبها', cells: ['كفر بالإجماع'] },
        { label: 'تركها كسلًا مع الإقرار', cells: ['خلاف، ورجح الكتاب أنه يكفر'] }
      ],
      page: 83
    },
    {
      type: 'compare',
      title: 'الأذان والإقامة',
      intro: 'كما في الكتاب.',
      columns: ['الأذان', 'الإقامة'],
      rows: [
        { label: 'المعنى', cells: ['الإعلام بدخول الوقت', 'الإعلام بالقيام إلى الصلاة'] },
        { label: 'الألفاظ', cells: ['شفع', 'وتر إلا «قد قامت الصلاة»'] },
        { label: 'الأداء', cells: ['يتمهل فيه', 'يسرع فيها'] }
      ],
      page: 89
    },
    {
      type: 'cards',
      title: 'الصفات المستحبة في المؤذن (للاطلاع فقط)',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'عدل أمين', page: 88 },
        { label: 'بالغ', sub: 'ويصح أذان المميز', page: 88 },
        { label: 'عالم بالأوقات', page: 88 },
        { label: 'حسن الصوت', page: 88 },
        { label: 'متطهر', page: 88 },
        { label: 'قائم مستقبل القبلة', page: 88 }
      ]
    },
    {
      type: 'steps',
      title: 'ما يقوله السامع عند الأذان',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'يقول مثل ما يقول المؤذن', sub: 'وفي الحيعلتين: لا حول ولا قوة إلا بالله', page: 90 },
        { label: 'يصلي على النبي ﷺ', page: 90 },
        { label: 'يسأل الله له الوسيلة', page: 90 },
        { label: 'يدعو بين الأذان والإقامة', page: 90 }
      ]
    }
  ],
  sections: [
    { title: 'فضل الصلاة', text: 'الصلوات الخمس مكفرات لما بينهن إذا اجتنبت الكبائر، ومثلها كمثل نهر يغتسل منه المرء خمس مرات كل يوم فلا يبقى من درنه شيء.', more: '', page: 81 },
    { title: 'الحكمة من الصلاة (للاطلاع فقط)', text: 'شكر للنعم، ومن أبرز معاني العبودية: التوجه إلى الله والتذلل له ومناجاته بالقراءة والذكر والدعاء، وفيها صلة العبد بربه وطمأنينة النفس.', more: FYI, page: 82 },
    { title: 'من لا تجب عليه الصلاة (للاطلاع فقط)', text: 'لا تجب على المجنون والصبي ولا على الحائض والنفساء؛ ومن بلغ أو أسلم أو طهرت قبل خروج الوقت بقدر ركعة وجبت عليه تلك الصلاة، ولا يقضي الكافر إذا أسلم ما فاته.', more: FYI, page: 84 },
    { title: 'ما يشترط في المؤذن', text: 'أن يكون مسلمًا عاقلًا ذكرًا، فلا يصح أذان الكافر والمجنون والسكران وغير المميز، ولا أذان المرأة للرجال. ولا يشترط للأذان طهارة ولا استقبال ولا قيام، ويستحب ذلك كله.', more: '', page: 87 },
    { title: 'من بدع الأذان', text: 'أن يقول عند التشهد: عزيز الله أعظم، أو عند الإقامة: نشهد أو صدقت، أو عند التثويب: صدق رسول الله؛ ولا يشرع «أقامها الله وأدامها» لأن حديثه ضعيف.', more: 'بعض هذه الصفحة في الكتاب للاطلاع فقط.', page: 89 },
    { title: 'مسائل في الأذان (للاطلاع فقط)', text: 'يشرع الأذان للمسافرين، وليس على النساء أذان ولا إقامة، ومن جمع بين صلاتين أذن للأولى وأقام لكل صلاة، ولا يكفي الأذان المسجل لأن الأذان عبادة لفظية.', more: FYI, page: 91 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الصلاة', items: ['لغة: الدعاء.', 'شرعًا: التعبد لله بأقوال وأفعال مخصوصة مفتتحة بالتكبير مختتمة بالتسليم.'], page: 81, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شروط صحة الأذان', items: ['دخول الوقت، إلا الأذان الأول للفجر والجمعة', 'الترتيب والموالاة', 'العربية والألفاظ الواردة'], page: 87, origin: 'boek' },
    { kind: 'voorwaarde', title: 'ما يشترط في المؤذن', items: ['الإسلام', 'العقل', 'الذكورة'], page: 87, origin: 'boek' },
    { kind: 'bewijs', title: 'فضل الأذان', items: ['«لو يعلم الناس ما في النداء والصف الأول ... لاستهموا».', '«المؤذنون أطول الناس أعناقًا يوم القيامة».'], page: 86, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الصلاة الركن الثاني، وهي مكفرة للذنوب.',
    'تجب على كل مسلم بالغ عاقل، ويؤمر بها الصغير لسبع.',
    'الأذان إعلام بدخول الوقت، والإقامة إعلام بالقيام إلى الصلاة.',
    'للأذان شروط، وللمؤذن شروط وصفات مستحبة.',
    'يتابع السامع المؤذن ثم يصلي على النبي ﷺ ويسأل له الوسيلة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الصلاة في اللغة؟', options: ['الدعاء', 'الطهارة', 'الإعلام', 'القصد'], answer: 0, explain: '﴿وصل عليهم﴾ أي ادع لهم.', page: 81 },
    { type: 'mc', q: 'متى يؤمر الصغير بالصلاة؟', options: ['لسبع سنين', 'لعشر سنين', 'عند البلوغ', 'لخمس سنين'], answer: 0, explain: 'ويضرب عليها لعشر.', page: 83 },
    { type: 'mc', q: 'متى شرع الأذان؟', options: ['في السنة الأولى من الهجرة', 'في مكة قبل الهجرة', 'في السنة العاشرة', 'ليلة الإسراء'], answer: 0, explain: 'كما في الكتاب.', page: 85 },
    { type: 'tf', q: 'يشترط للأذان الطهارة واستقبال القبلة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا يشترط ذلك، ويستحب.', page: 87 },
    { type: 'mc', q: 'في أي أذان يكون التثويب؟', options: ['أذان الصبح', 'أذان العصر', 'أذان المغرب', 'كل أذان'], answer: 0, explain: '«الصلاة خير من النوم» مرتين.', page: 89 },
    { type: 'mc', q: 'ماذا يقول السامع عند «حي على الصلاة»؟', options: ['لا حول ولا قوة إلا بالله', 'حي على الصلاة', 'صدقت وبررت', 'لا يقول شيئًا'], answer: 0, explain: 'وفي سائر الألفاظ يقول مثل ما يقول المؤذن.', page: 90 }
  ]),
  note: 'أنشطة الكتاب في صفحتي ٨٤ و٩٢. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Het gebed, adhān en iqāma',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Wat het gebed is, zijn plaats en verdienste; het oordeel voor wie verantwoordelijk is en voor kinderen, en over wie het nalaat; daarna adhān en iqāma: betekenis, hoe ze begonnen en hun verdienste; de voorwaarden van de adhān en de muʾadhdhin; en de woorden van adhān en iqāma, de ochtend-toevoeging en het nazeggen.',
  source: { ...source, label: 'Kitāb al-Fiqh (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Gebed, adhān en iqāma', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Het gebed', sub: 'les 20', page: 81, children: ['betekenis', 'plaats', 'verdienste'] },
      { label: 'Het oordeel', sub: 'les 21', page: 83, children: ['wie verantwoordelijk is', 'kinderen', 'wie het nalaat'] },
      { label: 'Adhān en iqāma', sub: 'les 22', page: 85, children: ['betekenis', 'het begin', 'verdienste'] },
      { label: 'Voorwaarden', sub: 'les 23', page: 87, children: ['de tijd', 'de volgorde', 'de muʾadhdhin'] },
      { label: 'De woorden', sub: 'les 24', page: 89, children: ['adhān', 'iqāma', 'ochtend-toevoeging', 'nazeggen'] }
    ]
  },
  points: [
    { text: 'Het gebed is aanbidding van Allah met vaste woorden en handelingen, beginnend met de takbīr en eindigend met de taslīm.', page: 81 },
    { text: 'Het gebed is de tweede zuil van de islam, na de twee getuigenissen.', page: 81 },
    { text: 'De vijf gebeden zijn verplicht voor elke volwassen moslim met verstand, man of vrouw.', page: 83 },
    { text: 'Kinderen krijgen het gebed opgedragen op hun zevende en worden er op hun tiende voor getuchtigd met een tik die geen letsel geeft.', page: 83 },
    { text: 'Wie het gebed nalaat en de verplichting ontkent, is volgens alle geleerden ongelovig; over wie het uit luiheid nalaat verschillen ze, en het boek kiest voor ongeloof.', page: 83 },
    { text: 'De adhān werd ingesteld in het eerste jaar na de hijra.', page: 85 },
    { text: 'Voorwaarden voor de adhān: de tijd is begonnen, de vaste volgorde zonder onderbreking, en in het Arabisch met de overgeleverde woorden.', page: 87 },
    { text: 'Wie de adhān hoort, zegt hem na, behalve bij de twee oproepen; dan zegt hij: er is geen macht of kracht dan bij Allah.', page: 90 }
  ],
  terms: [
    { term: 'الصلاة', translit: 'aṣ-ṣalāh', meaning: 'Taalkundig: smeekbede.', explanation: 'In de fiqh: aanbidding van Allah met vaste woorden en handelingen, van takbīr tot taslīm.', notes: ['at-Tawba 9:103'], page: 81 },
    { term: 'الأذان', translit: 'al-adhān', meaning: 'Bekendmaken dat de gebedstijd begonnen is, met vaste woorden.', explanation: 'Taalkundig: aankondiging.', notes: ['at-Tawba 9:3'], page: 85 },
    { term: 'الإقامة', translit: 'al-iqāma', meaning: 'Bekendmaken dat het gebed begint, met vaste woorden.', explanation: '', notes: [], page: 85 },
    { term: 'الحيعلتان', translit: 'al-ḥayʿalatān', meaning: '"Kom naar het gebed" en "kom naar het succes".', explanation: 'Daarbij draait de muʾadhdhin zijn hoofd naar rechts en links.', notes: [], page: 88 },
    { term: 'التثويب', translit: 'at-tathwīb', meaning: 'Twee keer "het gebed is beter dan slaap" in de ochtend-adhān, na de twee oproepen.', explanation: '', notes: [], page: 89 },
    { term: 'الوسيلة', translit: 'al-wasīla', meaning: 'Een rang in het Paradijs die alleen één dienaar van Allah toekomt.', explanation: 'Wie de adhān hoort, vraagt die voor de Profeet ﷺ.', notes: [], page: 90 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'De plaats van het gebed (alleen ter kennisname)',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Verplicht in de nacht van de Isrāʾ en Miʿrāj', sub: 'vóór de hijra', page: 82 },
        { label: 'Zonder tussenpersoon opgelegd', page: 82 },
        { label: 'In de hemel opgelegd', page: 82 },
        { label: 'Opgelegd als vijftig gebeden', sub: 'een teken dat Allah het gebed liefheeft', page: 82 }
      ]
    },
    {
      type: 'compare',
      title: 'Wie het gebed nalaat',
      intro: 'Zoals in het boek.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Ontkent de verplichting', cells: ['ongelovig volgens alle geleerden'] },
        { label: 'Uit luiheid, erkent de plicht', cells: ['meningsverschil; het boek kiest voor ongeloof'] }
      ],
      page: 83
    },
    {
      type: 'compare',
      title: 'Adhān en iqāma',
      intro: 'Zoals in het boek.',
      columns: ['Adhān', 'Iqāma'],
      rows: [
        { label: 'Betekenis', cells: ['de tijd is begonnen', 'het gebed begint'] },
        { label: 'Woorden', cells: ['dubbel', 'enkel, behalve "de iqāma is begonnen"'] },
        { label: 'Tempo', cells: ['rustig', 'vlot'] }
      ],
      page: 89
    },
    {
      type: 'cards',
      title: 'Aanbevolen eigenschappen van de muʾadhdhin (alleen ter kennisname)',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Betrouwbaar', page: 88 },
        { label: 'Volwassen', sub: 'een kind met onderscheid mag ook', page: 88 },
        { label: 'Kent de gebedstijden', page: 88 },
        { label: 'Mooie stem', page: 88 },
        { label: 'Rein', page: 88 },
        { label: 'Staand, naar de qibla', page: 88 }
      ]
    },
    {
      type: 'steps',
      title: 'Wat je zegt bij de adhān',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Zeg na wat de muʾadhdhin zegt', sub: 'bij de twee oproepen: geen macht of kracht dan bij Allah', page: 90 },
        { label: 'Vraag zegen over de Profeet ﷺ', page: 90 },
        { label: 'Vraag Allah de wasīla voor hem', page: 90 },
        { label: 'Smeek tussen adhān en iqāma', page: 90 }
      ]
    }
  ],
  sections: [
    { title: 'De verdienste van het gebed', text: 'De vijf gebeden wissen uit wat ertussen ligt, zolang de grote zonden gemeden worden. Ze zijn als een rivier bij je deur waarin je je elke dag vijf keer wast, zodat er geen vuil achterblijft.', more: '', page: 81 },
    { title: 'De wijsheid van het gebed (alleen ter kennisname)', text: 'Dankbaarheid voor de gunsten, en een van de duidelijkste vormen van dienaarschap: je tot Allah richten, je voor Hem vernederen en Hem aanspreken met recitatie, gedenken en smeekbede; het verbindt de dienaar met zijn Heer en geeft rust.', more: FYI_NL, page: 82 },
    { title: 'Voor wie het gebed niet verplicht is (alleen ter kennisname)', text: 'Niet voor wie zijn verstand kwijt is of nog een kind is, en niet tijdens menstruatie of kraamtijd. Wordt iemand volwassen, moslim of rein terwijl er nog tijd voor één rakʿa is, dan is dat gebed verplicht. Een nieuwe moslim haalt gemiste gebeden niet in.', more: FYI_NL, page: 84 },
    { title: 'Voorwaarden voor de muʾadhdhin', text: 'Moslim, bij zijn verstand en een man: de adhān van een ongelovige, een waanzinnige, een dronkene of een jong kind is ongeldig, en een vrouw roept niet op voor mannen. Reinheid, de qibla en staan zijn geen voorwaarde, maar wel aanbevolen.', more: '', page: 87 },
    { title: 'Vernieuwingen bij de adhān', text: 'Zoals "ʿazīzu llāh aʿẓam" bij de getuigenis, "wij getuigen" of "je spreekt waar" bij de iqāma, of "de Boodschapper sprak waar" bij de ochtend-toevoeging. "Aqāmahā llāhu wa adāmahā" bij de iqāma is niet voorgeschreven, omdat de hadith daarover zwak is.', more: 'Een deel van deze pagina staat in het boek alleen ter kennisname.', page: 89 },
    { title: 'Kwesties bij de adhān (alleen ter kennisname)', text: 'Ook reizigers roepen de adhān; voor vrouwen is er geen adhān of iqāma. Wie twee gebeden samenvoegt, roept één adhān en een iqāma voor elk gebed. Een opgenomen adhān is niet genoeg, want de adhān is aanbidding met woorden.', more: FYI_NL, page: 91 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Het gebed', items: ['Taalkundig: smeekbede.', 'In de fiqh: aanbidding met vaste woorden en handelingen, van takbīr tot taslīm.'], page: 81, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden voor de adhān', items: ['de tijd is begonnen, behalve de eerste adhān voor fajr en vrijdag', 'de vaste volgorde, zonder onderbreking', 'in het Arabisch met de overgeleverde woorden'], page: 87, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden voor de muʾadhdhin', items: ['moslim', 'bij zijn verstand', 'man'], page: 87, origin: 'boek' },
    { kind: 'bewijs', title: 'De verdienste van de adhān', items: ['"Als de mensen wisten wat er in de oproep en de eerste rij ligt ... dan zouden ze erom loten."', '"De muʾadhdhins hebben op de Dag der Opstanding de langste halzen."'], page: 86, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Het gebed is de tweede zuil en wist zonden uit.',
    'Het is verplicht voor elke volwassen moslim met verstand; kinderen krijgen het opgedragen vanaf zeven.',
    'De adhān kondigt de tijd aan, de iqāma het begin van het gebed.',
    'De adhān en de muʾadhdhin hebben elk hun voorwaarden.',
    'Wie de adhān hoort, zegt hem na, vraagt zegen over de Profeet ﷺ en de wasīla voor hem.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent ṣalāh taalkundig?', options: ['smeekbede', 'reinheid', 'aankondiging', 'zich richten op'], answer: 0, explain: '"Bid voor hen" betekent: smeek voor hen.', page: 81 },
    { type: 'mc', q: 'Op welke leeftijd krijgt een kind het gebed opgedragen?', options: ['zeven jaar', 'tien jaar', 'bij volwassenheid', 'vijf jaar'], answer: 0, explain: 'Op tien wordt het ervoor getuchtigd.', page: 83 },
    { type: 'mc', q: 'Wanneer werd de adhān ingesteld?', options: ['in het eerste jaar na de hijra', 'in Mekka vóór de hijra', 'in het jaar 10', 'in de nacht van de Isrāʾ'], answer: 0, explain: 'Zoals in het boek.', page: 85 },
    { type: 'tf', q: 'Reinheid en de qibla zijn voorwaarden voor de adhān.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Ze zijn aanbevolen, geen voorwaarde.', page: 87 },
    { type: 'mc', q: 'In welke adhān komt "het gebed is beter dan slaap"?', options: ['de ochtend-adhān', 'de ʿaṣr-adhān', 'de maghrib-adhān', 'elke adhān'], answer: 0, explain: 'Twee keer, na de twee oproepen.', page: 89 },
    { type: 'mc', q: 'Wat zeg je als de muʾadhdhin zegt "kom naar het gebed"?', options: ['er is geen macht of kracht dan bij Allah', 'kom naar het gebed', 'je spreekt waar', 'niets'], answer: 0, explain: 'Bij de andere woorden zeg je hem na.', page: 90 }
  ]),
  note: 'Oefeningen van het boek op p. 84 en 92. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-fiqh', chapter: '20', unit: 4, ar, nl }
