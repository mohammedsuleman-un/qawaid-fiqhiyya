// Hoofdstukkaart bij الفقه (١), eenheid 6: صفة الصلاة ومكروهاتها ومبطلاتها (lessen 33–36, boek p. 115–126).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 120 en 123 en een deel van p. 121 zijn in het boek "alleen
// ter kennisname". Niet in het hadith-tabblad: het verbod om de mond te bedekken (p. 122), omdat de
// toeschrijving aan at-Tirmidhī nog gecontroleerd moet worden; het oordeel zelf staat wel bij de afgeraden handelingen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (١)، سلسلة زاد العلمية',
  pages: '115–126',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'وأما السجود فأكثروا فيه من الدعاء فقمن أن يستجاب لكم', takhrij: 'رواه مسلم', note: '', pages: [118], nl: 'In de neerwerping, smeek daarin veel, want het is waarschijnlijk dat jullie verhoord worden', nlNote: '' },
  { narrator: '', text: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم إنك حميد مجيد', takhrij: 'رواه البخاري ومسلم', note: 'في التشهد الأخير.', pages: [119], nl: 'O Allah, zegen Muḥammad en de familie van Muḥammad zoals U Ibrāhīm en de familie van Ibrāhīm zegende; U bent Geprezen, Glorierijk. O Allah, schenk Muḥammad en de familie van Muḥammad Uw zegeningen zoals U Ibrāhīm zegeningen schonk; U bent Geprezen, Glorierijk', nlNote: 'In de laatste tashahhud.' },
  { narrator: '', text: 'أعوذ بالله من عذاب جهنم ومن عذاب القبر ومن فتنة المحيا والممات ومن فتنة المسيح الدجال', takhrij: 'رواه مسلم', note: 'قبل السلام.', pages: [119], nl: 'Ik zoek bescherming bij Allah tegen de bestraffing van de Hel, de bestraffing van het graf, de beproeving van leven en dood en de beproeving van de valse messias', nlNote: 'Vóór de taslīm.' },
  { narrator: 'أبو سعيد الخدري', text: 'إذا صلى أحدكم فليصل إلى سترة وليدن منها', takhrij: 'رواه أبو داود وابن ماجه وصححه الألباني', note: FYI, pages: [120], nl: 'Als een van jullie bidt, laat hij naar een afscherming toe bidden en er dichtbij gaan staan', nlNote: FYI_NL },
  { narrator: 'المغيرة بن شعبة', text: 'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، اللهم لا مانع لما أعطيت ولا معطي لما منعت ولا ينفع ذا الجد منك الجد', takhrij: 'رواه البخاري ومسلم', note: 'الذكر بعد الصلاة. ' + FYI, pages: [120], nl: 'Er is geen god dan Allah, de Enige zonder deelgenoot; aan Hem de heerschappij en de lof, en Hij is tot alles in staat. O Allah, niemand houdt tegen wat U geeft en niemand geeft wat U tegenhoudt, en geen rijkdom baat de rijke tegenover U', nlNote: 'Het gedenken na het gebed. ' + FYI_NL },
  { narrator: 'ثوبان', text: 'اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام', takhrij: 'رواه مسلم', note: 'بعد الاستغفار ثلاثًا. ' + FYI, pages: [120], nl: 'O Allah, U bent de Vrede en van U komt de vrede; gezegend bent U, Bezitter van majesteit en eer', nlNote: 'Na drie keer om vergeving vragen. ' + FYI_NL },
  { narrator: 'كعب بن عجرة', text: 'معقبات لا يخيب قائلهن أو فاعلهن دبر كل صلاة مكتوبة: ثلاث وثلاثون تسبيحة، وثلاث وثلاثون تحميدة، وأربع وثلاثون تكبيرة', takhrij: 'رواه مسلم', note: FYI, pages: [120], nl: 'Er zijn woorden na elk verplicht gebed waarvan wie ze zegt niet teleurgesteld wordt: drieëndertig keer subḥāna llāh, drieëndertig keer al-ḥamdu lillāh en vierendertig keer Allāhu akbar', nlNote: FYI_NL },
  { narrator: 'عقبة بن عامر', text: 'أمرني رسول الله ﷺ أن أقرأ بالمعوذات في دبر كل صلاة', takhrij: 'رواه الترمذي وصححه الألباني', note: FYI, pages: [120], nl: 'De Boodschapper van Allah ﷺ droeg mij op na elk gebed de soera’s van beschutting te reciteren', nlNote: FYI_NL },
  { narrator: '', text: 'هو اختلاس يختلسه الشيطان من صلاة العبد', takhrij: 'رواه البخاري', note: 'في الالتفات.', pages: [121], nl: 'Het is een diefstal die de duivel uit het gebed van de dienaar wegrooft', nlNote: 'Over rondkijken.' },
  { narrator: '', text: 'اعتدلوا في السجود ولا يبسط أحدكم ذراعيه انبساط الكلب', takhrij: 'أخرجه البخاري', note: '', pages: [121], nl: 'Wees evenwichtig in de neerwerping en laat niemand zijn onderarmen plat leggen zoals een hond', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'أمرت أن أسجد على سبعة ولا أكف شعرًا ولا ثوبًا', takhrij: 'متفق عليه', note: 'أي لا يجمعهما ويضمهما.', pages: [121], nl: 'Mij is opgedragen me neer te werpen op zeven delen en haar noch kleding samen te binden', nlNote: 'Dat wil zeggen: niet bijeenhouden.' },
  { narrator: 'أبو هريرة', text: 'نهى النبي ﷺ أن يصلي الرجل مختصرًا', takhrij: 'رواه البخاري', note: 'التخصر: وضع اليد على الخاصرة.', pages: [121], nl: 'De Profeet ﷺ verbood dat iemand bidt met zijn hand op zijn heup', nlNote: '' },
  { narrator: '', text: 'إذا توضأ أحدكم فأحسن وضوءه ثم خرج عامدًا إلى المسجد فلا يشبكن يديه فإنه في صلاة', takhrij: 'رواه أبو داود وصححه الألباني', note: 'في تشبيك الأصابع.', pages: [122], nl: 'Als een van jullie de woeḍoe goed doet en dan op weg gaat naar de moskee, laat hij zijn vingers niet in elkaar strengelen, want hij is in gebed', nlNote: 'Over de vingers in elkaar strengelen.' },
  { narrator: '', text: 'لا صلاة بحضرة الطعام ولا وهو يدافعه الأخبثان', takhrij: 'أخرجه مسلم', note: '', pages: [122], nl: 'Er is geen gebed als het eten klaarstaat, en niet als iemand urine of ontlasting moet ophouden', nlNote: '' },
  { narrator: 'زيد بن أرقم', text: 'كنا نتكلم في الصلاة يكلم الرجل منا صاحبه وهو إلى جنبه حتى نزلت ﴿وقوموا لله قانتين﴾ فأمرنا بالسكوت ونهينا عن الكلام', takhrij: 'في الصحيحين', note: '', pages: [124], nl: 'Wij praatten in het gebed: iemand sprak met wie naast hem stond, totdat "en sta voor Allah in nederige gehoorzaamheid" werd geopenbaard; toen werd ons stilte opgedragen en praten verboden', nlNote: '' },
  { narrator: '', text: 'إذا قام أحدكم يصلي فإنه يستره إذا كان بين يديه مثل آخرة الرحل، فإذا لم يكن بين يديه مثل آخرة الرحل فإنه يقطع صلاته الحمار والمرأة والكلب الأسود', takhrij: 'رواه مسلم', note: 'والمراد في الكتاب: المرأة البالغة، والمرور دون موضع السجود.', pages: [124], nl: 'Als een van jullie staat te bidden, schermt iets als de achterkant van een zadel vóór hem hem af; is er zoiets niet, dan wordt zijn gebed onderbroken door een ezel, een vrouw en een zwarte hond', nlNote: 'Het boek bedoelt: een volwassen vrouw, die passeert binnen de plaats van neerwerping.' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim', 'أخرجه مسلم': 'Muslim', 'رواه البخاري': 'al-Bukhārī', 'أخرجه البخاري': 'al-Bukhārī',
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'في الصحيحين': 'in de twee Ṣaḥīḥ’s',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه أبو داود وابن ماجه وصححه الألباني': 'Abū Dāwūd en Ibn Māja; authentiek volgens al-Albānī',
  'رواه الترمذي وصححه الألباني': 'at-Tirmidhī; authentiek volgens al-Albānī',
  'رواه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'المغيرة بن شعبة': 'al-Mughīra ibn Shuʿba', 'ثوبان': 'Thawbān', 'كعب بن عجرة': 'Kaʿb ibn ʿUjra',
  'عقبة بن عامر': 'ʿUqba ibn ʿĀmir', 'عبد الله بن عباس': 'ʿAbdallāh ibn ʿAbbās', 'أبو هريرة': 'Abū Hurayra', 'زيد بن أرقم': 'Zayd ibn Arqam'
}

const PERSONS = [
  ['abu-said-al-khudri', 'text', [120], 'روى الأمر بالسترة.', 'Overleverde de opdracht om naar een afscherming te bidden.'],
  ['al-mughira-ibn-shuba', 'text', [120], 'روى الذكر بعد الصلاة.', 'Overleverde het gedenken na het gebed.'],
  ['thawban', 'text', [120], 'روى الاستغفار و«اللهم أنت السلام» بعد الصلاة.', 'Overleverde de vergeving vragen en "O Allah, U bent de Vrede" na het gebed.'],
  ['kab-ibn-ujra', 'text', [120], 'روى التسبيح والتحميد والتكبير دبر الصلاة.', 'Overleverde de lofprijzingen na het gebed.'],
  ['uqba-ibn-amir', 'text', [120], 'أمره النبي ﷺ بقراءة المعوذات دبر كل صلاة.', 'Kreeg van de Profeet ﷺ de opdracht na elk gebed de soera’s van beschutting te reciteren.'],
  ['ibn-abbas', 'text', [121], 'روى النهي عن كف الشعر والثوب.', 'Overleverde het verbod om haar en kleding samen te binden.'],
  ['abu-hurayra', 'text', [121, 122], 'روى النهي عن التخصر.', 'Overleverde het verbod om met de hand op de heup te bidden.'],
  ['zayd-ibn-arqam', 'text', [124], 'روى نسخ الكلام في الصلاة.', 'Overleverde dat praten in het gebed verboden werd.'],
  ['ibn-al-mundhir', 'text', [125], 'نقل الإجماع على إعادة من أكل أو شرب في الفرض عامدًا.', 'Gaf de overeenstemming weer dat wie in een verplicht gebed opzettelijk eet of drinkt, het overdoet.'],
  ['muslim', 'takhrij', [118, 119, 120, 122, 124], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['al-bukhari', 'takhrij', [119, 120, 121, 124], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [120, 122], 'أخرج حديث السترة وتشبيك الأصابع.', 'Nam de hadith over de afscherming en de vingers strengelen op.'],
  ['ibn-maja', 'takhrij', [120], 'أخرج حديث السترة.', 'Nam de hadith over de afscherming op.'],
  ['at-tirmidhi', 'takhrij', [120], 'أخرج حديث المعوذات.', 'Nam de hadith over de soera’s van beschutting op.'],
  ['al-albani', 'takhrij', [120, 122], 'صحح أحاديث في الوحدة.', 'Verklaarde hadith in deze eenheid authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 6,
  title: 'صفة الصلاة ومكروهاتها ومبطلاتها',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'صفة الصلاة من التكبير إلى التسليم، والسترة والذكر بعد الصلاة، ثم ما يكره في الصلاة من التفات وعبث وغيرهما، وأقسام الحركة فيها، وأخيرًا ما يبطل الصلاة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السادسة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'صفة الصلاة ومكروهاتها ومبطلاتها', sub: 'الوحدة السادسة' },
    nodes: [
      { label: 'صفة الصلاة', sub: 'الدرس ٣٣', page: 117, children: ['من التكبير إلى التسليم', 'المفصل', 'الذكر بعد الصلاة'] },
      { label: 'المكروهات', sub: 'الدرسان ٣٤–٣٥', page: 121, children: ['الالتفات', 'العبث', 'حضرة الطعام'] },
      { label: 'الحركة في الصلاة', sub: 'الدرس ٣٥', page: 123, children: ['خمسة أحكام'] },
      { label: 'المبطلات', sub: 'الدرس ٣٦', page: 124, children: ['الكلام', 'الضحك', 'الأكل والشرب'] }
    ]
  },
  points: [
    { text: 'يقبل المصلي على الله بقلب مملوء بتعظيمه ومحبته.', page: 117 },
    { text: 'يقرأ في الفجر من طوال المفصل، وفي المغرب من قصاره، وفي الباقي من أوساطه، وأحيانًا غير ذلك.', page: 117 },
    { text: 'يكثر الدعاء في السجود، فهو موضع إجابة.', page: 118 },
    { text: 'في الثلاثية والرباعية يصلي ما بعد التشهد الأول بالفاتحة، ولا بأس أن يزيد أحيانًا.', page: 119 },
    { text: 'الالتفات اليسير بلا حاجة مكروه، والالتفات بالجسم كله عن القبلة يبطل الصلاة.', page: 121 },
    { text: 'تكره الصلاة بحضرة طعام تتوق إليه النفس ويقدر على تناوله، ومع مدافعة الأخبثين.', page: 122 },
    { text: 'الكلام عمدًا والضحك بصوت والأكل والشرب عمدًا من مبطلات الصلاة.', page: 124 },
    { text: 'التبسم لا يبطل الصلاة، والقهقهة تبطلها بالإجماع.', page: 125 }
  ],
  terms: [
    { term: 'المفصل', translit: 'al-mufaṣṣal', meaning: 'من سورة ق إلى آخر القرآن، سمي بذلك لكثرة فواصله.', explanation: 'طواله من ق إلى عم، وأوساطه من عم إلى الضحى، وقصاره من الضحى إلى الناس.', notes: [], page: 118 },
    { term: 'السترة', translit: 'as-sutra', meaning: 'ما يجعله المصلي بين يديه كجدار أو سارية.', explanation: 'ويسن أن يدنو منها.', notes: [], page: 120 },
    { term: 'الاختلاس', translit: 'al-ikhtilās', meaning: 'السرقة والنهب.', explanation: 'وصف به الالتفات في الصلاة.', notes: [], page: 121 },
    { term: 'التخصر', translit: 'at-takhaṣṣur', meaning: 'أن يضع المصلي يده على خاصرته.', explanation: 'وهو مكروه.', notes: [], page: 121 },
    { term: 'كف الشعر والثوب', translit: 'kaff ash-shaʿr wa th-thawb', meaning: 'جمعهما وضمهما في الصلاة.', explanation: 'وهو مكروه.', notes: [], page: 121 },
    { term: 'الأخبثان', translit: 'al-akhbathān', meaning: 'البول والغائط.', explanation: '', notes: [], page: 122 },
    { term: 'القهقهة', translit: 'al-qahqaha', meaning: 'الضحك بصوت عال.', explanation: 'تبطل الصلاة بالإجماع.', notes: [], page: 125 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'صفة الصلاة باختصار',
      intro: 'كما في الدرس الثالث والثلاثين.',
      nodes: [
        { label: 'التكبير ورفع اليدين', sub: 'ووضع اليمنى على اليسرى', page: 117 },
        { label: 'الاستفتاح والتعوذ والبسملة', page: 117 },
        { label: 'الفاتحة ثم سورة', page: 117 },
        { label: 'الركوع', sub: 'سبحان ربي العظيم', page: 117 },
        { label: 'الرفع', sub: 'سمع الله لمن حمده، ربنا ولك الحمد', page: 117 },
        { label: 'السجود على سبعة أعضاء', sub: 'سبحان ربي الأعلى', page: 118 },
        { label: 'الجلوس بين السجدتين', sub: 'رب اغفر لي', page: 118 },
        { label: 'التشهد الأول مفترشًا', page: 119 },
        { label: 'التشهد الأخير متوركًا', sub: 'والصلاة الإبراهيمية والاستعاذة', page: 119 },
        { label: 'التسليم يمينًا ويسارًا', page: 119 }
      ]
    },
    {
      type: 'compare',
      title: 'أقسام المفصل',
      intro: 'كما في الكتاب.',
      columns: ['من', 'إلى', 'يقرأ في'],
      rows: [
        { label: 'طواله', cells: ['ق', 'عم', 'الفجر غالبًا'] },
        { label: 'أوساطه', cells: ['عم', 'الضحى', 'الظهر والعصر والعشاء'] },
        { label: 'قصاره', cells: ['الضحى', 'الناس', 'المغرب غالبًا'] }
      ],
      page: 118
    },
    {
      type: 'cards',
      title: 'مكروهات الصلاة',
      intro: 'كما في الدرسين الرابع والثلاثين والخامس والثلاثين.',
      nodes: [
        { label: 'الالتفات اليسير بلا حاجة', page: 121 },
        { label: 'افتراش الذراعين في السجود', page: 121 },
        { label: 'كف الشعر والثوب', page: 121 },
        { label: 'التخصر', page: 121 },
        { label: 'تغطية الفم', page: 122 },
        { label: 'تشبيك الأصابع', page: 122 },
        { label: 'كثرة الحركة والعبث', page: 122 },
        { label: 'حضرة الطعام ومدافعة الأخبثين', page: 122 }
      ]
    },
    {
      type: 'compare',
      title: 'أقسام الحركة في الصلاة (للاطلاع فقط)',
      intro: 'على الأحكام الخمسة كما في الكتاب.',
      columns: ['مثاله'],
      rows: [
        { label: 'واجبة', cells: ['تتوقف عليها صحة الصلاة، كمن أخبر أنه إلى غير القبلة'] },
        { label: 'محرمة', cells: ['الكثيرة المتوالية لغير ضرورة'] },
        { label: 'مستحبة', cells: ['لفعل مستحب، كسد فرجة في الصف'] },
        { label: 'مباحة', cells: ['اليسيرة لحاجة، أو الكثيرة لضرورة'] },
        { label: 'مكروهة', cells: ['اليسيرة لغير حاجة'] }
      ],
      page: 123
    },
    {
      type: 'cards',
      title: 'مبطلات الصلاة',
      intro: 'كما في الدرس السادس والثلاثين.',
      nodes: [
        { label: 'بطلان الطهارة', page: 124 },
        { label: 'النجاسة مع العلم وعدم إزالتها', page: 124 },
        { label: 'كشف العورة عمدًا', page: 124 },
        { label: 'استدبار القبلة عمدًا', page: 124 },
        { label: 'الكلام عمدًا', page: 124 },
        { label: 'الضحك بصوت', page: 124 },
        { label: 'مرور ما يقطع الصلاة', page: 124 },
        { label: 'ترك ركن أو شرط أو واجب عمدًا', page: 124 },
        { label: 'الأكل والشرب عمدًا', page: 125 },
        { label: 'زيادة ركن أو تقديمه عمدًا', page: 125 },
        { label: 'فسخ النية', page: 125 }
      ]
    }
  ],
  sections: [
    { title: 'ما يقال بعد الرفع من الركوع', text: 'ربنا لك الحمد، أو ربنا ولك الحمد، أو اللهم ربنا لك الحمد، أو اللهم ربنا ولك الحمد؛ ويستحب: ملء السماوات وملء الأرض وملء ما بينهما وملء ما شئت من شيء بعد.', more: '', page: 117 },
    { title: 'هيئة السجود', text: 'يكبر بلا رفع لليدين، ويسجد على سبعة أعضاء، ويرفع ذراعيه عن الأرض، ويجافي عضديه عن جنبيه وبطنه عن فخذيه، ولا يمد ظهره كالمنبطح.', more: '', page: 118 },
    { title: 'التشهد', text: 'يقبض الخنصر والبنصر ويحلق بالإبهام والوسطى ويشير بالسبابة ويرمي ببصره إليها؛ وفي الأخير يصلي على النبي ﷺ ويستعيذ من أربع، ثم يدعو بما أحب ويسلم.', more: '', page: 119 },
    { title: 'الذكر بعد الصلاة (للاطلاع فقط)', text: 'يستغفر ثلاثًا ويقول: اللهم أنت السلام، ويهلل، ويسبح ويحمد ويكبر، ويقرأ المعوذات؛ ولا يشرع رفع اليدين في الدعاء بعد الصلاة لعدم وروده.', more: FYI, page: 120 },
    { title: 'أقسام الالتفات (للاطلاع فقط)', text: 'بجملته متحولًا عن القبلة يبطل الصلاة، وبصدره مع ثبوت القدمين مكروه ومن العلماء من يبطلها به، وبالرأس أو العين مكروه إلا لحاجة.', more: FYI, page: 121 },
    { title: 'تشبيك الأصابع', text: 'نهي عنه في الطريق إلى الصلاة، ففي الصلاة أولى؛ أما في غير وقت الصلاة فلا كراهة ولو في المسجد.', more: '', page: 122 },
    { title: 'متى تكره الصلاة بحضرة الطعام', text: 'إذا تاقت إليه نفسه وكان حاضرًا يقدر على تناوله؛ فإن كان صائمًا أو شبعان أو لا يقدر عليه لحرارته فلا كراهة.', more: '', page: 122 },
    { title: 'النجاسة أثناء الصلاة', text: 'إن علم بها وقدر على إزالتها في الحال أزالها، وإن لم يقدر كنجاسة على ثيابه الداخلية وجب الخروج من الصلاة.', more: '', page: 124 },
    { title: 'مراتب الضحك', text: 'التبسم لا يبطل، والقهقهة تبطل بالإجماع، وما بينهما يبطل عند الجمهور إن ظهر به حرفان.', more: '', page: 125 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'من مكروهات الصلاة', items: ['الالتفات بلا حاجة', 'افتراش الذراعين', 'كف الشعر والثوب', 'التخصر', 'تشبيك الأصابع', 'العبث'], page: 121, origin: 'boek' },
    { kind: 'opsomming', title: 'من مبطلات الصلاة', items: ['الكلام عمدًا', 'الضحك بصوت', 'الأكل والشرب عمدًا', 'كشف العورة عمدًا', 'فسخ النية'], page: 124, origin: 'boek' },
    { kind: 'bewijs', title: 'نسخ الكلام في الصلاة', items: ['﴿وقوموا لله قانتين﴾ [البقرة: ٢٣٨]', '«فأمرنا بالسكوت ونهينا عن الكلام».'], page: 124, origin: 'boek' },
    { kind: 'onderscheid', title: 'مراتب الضحك', items: ['التبسم: لا يبطل.', 'القهقهة: تبطل بالإجماع.', 'ما بينهما: يبطل عند الجمهور إن ظهر حرفان.'], page: 125, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'تبدأ الصلاة بالتكبير وتنتهي بالتسليم، ولكل حال فيها ذكر.',
    'يقرأ من المفصل بحسب الصلاة.',
    'يكره في الصلاة ما يشغل عنها أو ينافي الخشوع.',
    'الحركة في الصلاة تجري عليها الأحكام الخمسة.',
    'تبطل الصلاة بالكلام والضحك والأكل عمدًا وغير ذلك.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من أين يبدأ المفصل؟', options: ['من سورة ق', 'من سورة عم', 'من سورة الضحى', 'من سورة البقرة'], answer: 0, explain: 'وآخره سورة الناس.', page: 118 },
    { type: 'tf', q: 'يرفع المصلي يديه عند التكبير للسجود.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يكبر للسجود بدون رفع اليدين.', page: 118 },
    { type: 'mc', q: 'ما حكم الالتفات اليسير بلا حاجة في الصلاة؟', options: ['مكروه', 'مبطل', 'مستحب', 'مباح'], answer: 0, explain: '«هو اختلاس يختلسه الشيطان».', page: 121 },
    { type: 'mc', q: 'ما التخصر؟', options: ['وضع اليد على الخاصرة', 'تشبيك الأصابع', 'تغطية الفم', 'كف الثوب'], answer: 0, explain: 'وهو مكروه.', page: 121 },
    { type: 'tf', q: 'تشبيك الأصابع في المسجد في غير وقت الصلاة مكروه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا كراهة فيه، لفعله ﷺ في قصة ذي اليدين.', page: 122 },
    { type: 'mc', q: 'أي هذه يبطل الصلاة؟', options: ['القهقهة', 'التبسم', 'الالتفات بالعين لحاجة', 'تشبيك الأصابع'], answer: 0, explain: 'بالإجماع.', page: 125 }
  ]),
  note: 'نشاط الكتاب في صفحة ١٢٦. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 6,
  title: 'Hoe je bidt, wat afgeraden is en wat het gebed ongeldig maakt',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Hoe je bidt, van de takbīr tot de taslīm; de afscherming en het gedenken na het gebed; wat afgeraden is in het gebed, zoals rondkijken en friemelen; de soorten beweging in het gebed; en tot slot wat het gebed ongeldig maakt.',
  source: { ...source, label: 'Kitāb al-Fiqh (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 6 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Hoe je bidt, afgeraden en ongeldig', sub: 'Eenheid 6' },
    nodes: [
      { label: 'Hoe je bidt', sub: 'les 33', page: 117, children: ['van takbīr tot taslīm', 'de mufaṣṣal', 'gedenken na het gebed'] },
      { label: 'Afgeraden', sub: 'les 34–35', page: 121, children: ['rondkijken', 'friemelen', 'als het eten klaarstaat'] },
      { label: 'Beweging', sub: 'les 35', page: 123, children: ['vijf oordelen'] },
      { label: 'Ongeldig', sub: 'les 36', page: 124, children: ['praten', 'lachen', 'eten en drinken'] }
    ]
  },
  points: [
    { text: 'Je richt je tot Allah met een hart vol eerbied en liefde voor Hem.', page: 117 },
    { text: 'Bij fajr reciteer je uit de lange mufaṣṣal-soera’s, bij maghrib uit de korte en bij de andere uit de middelste, soms anders.', page: 117 },
    { text: 'Smeek veel in de neerwerping, want daar word je verhoord.', page: 118 },
    { text: 'In een gebed van drie of vier rakʿa’s reciteer je na de eerste tashahhud alleen al-Fātiḥa; soms meer mag ook.', page: 119 },
    { text: 'Zonder reden even rondkijken is afgeraden; je hele lichaam van de qibla wegdraaien maakt het gebed ongeldig.', page: 121 },
    { text: 'Bidden als het eten klaarstaat waar je naar verlangt, of terwijl je urine of ontlasting ophoudt, is afgeraden.', page: 122 },
    { text: 'Opzettelijk praten, hardop lachen en opzettelijk eten of drinken maken het gebed ongeldig.', page: 124 },
    { text: 'Glimlachen maakt het gebed niet ongeldig; luid lachen wel, volgens alle geleerden.', page: 125 }
  ],
  terms: [
    { term: 'المفصل', translit: 'al-mufaṣṣal', meaning: 'Van Sūrat Qāf tot het einde van de Koran; zo genoemd omdat de soera’s vaak onderbroken worden.', explanation: 'Lang: Qāf tot ʿAmma; middel: ʿAmma tot aḍ-Ḍuḥā; kort: aḍ-Ḍuḥā tot an-Nās.', notes: [], page: 118 },
    { term: 'السترة', translit: 'as-sutra', meaning: 'Afscherming: iets vóór je tijdens het gebed, zoals een muur of pilaar.', explanation: 'Het is soenna er dichtbij te staan.', notes: [], page: 120 },
    { term: 'الاختلاس', translit: 'al-ikhtilās', meaning: 'Wegroven, stelen.', explanation: 'Zo wordt rondkijken in het gebed genoemd.', notes: [], page: 121 },
    { term: 'التخصر', translit: 'at-takhaṣṣur', meaning: 'Met je hand op je heup bidden.', explanation: 'Afgeraden.', notes: [], page: 121 },
    { term: 'كف الشعر والثوب', translit: 'kaff ash-shaʿr wa th-thawb', meaning: 'Haar en kleding bijeenhouden in het gebed.', explanation: 'Afgeraden.', notes: [], page: 121 },
    { term: 'الأخبثان', translit: 'al-akhbathān', meaning: 'Urine en ontlasting.', explanation: '', notes: [], page: 122 },
    { term: 'القهقهة', translit: 'al-qahqaha', meaning: 'Luid lachen.', explanation: 'Maakt het gebed ongeldig volgens alle geleerden.', notes: [], page: 125 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Hoe je bidt, in het kort',
      intro: 'Zoals in les 33.',
      nodes: [
        { label: 'Takbīr en de handen heffen', sub: 'rechts over links', page: 117 },
        { label: 'Openingssmeekbede, taʿawwudh en basmala', page: 117 },
        { label: 'Al-Fātiḥa en een soera', page: 117 },
        { label: 'De buiging', sub: 'subḥāna rabbiya l-ʿaẓīm', page: 117 },
        { label: 'Opkomen', sub: 'samiʿa llāhu liman ḥamidah, rabbanā wa laka l-ḥamd', page: 117 },
        { label: 'Neerwerpen op zeven delen', sub: 'subḥāna rabbiya l-aʿlā', page: 118 },
        { label: 'Zitten tussen de neerwerpingen', sub: 'rabbi ghfir lī', page: 118 },
        { label: 'Eerste tashahhud op de linkervoet', page: 119 },
        { label: 'Laatste tashahhud met tawarruk', sub: 'met de ṣalāt ibrāhīmiyya en de bescherming', page: 119 },
        { label: 'Taslīm naar rechts en links', page: 119 }
      ]
    },
    {
      type: 'compare',
      title: 'De delen van de mufaṣṣal',
      intro: 'Zoals in het boek.',
      columns: ['Van', 'Tot', 'Meestal bij'],
      rows: [
        { label: 'Lang', cells: ['Qāf', 'ʿAmma', 'fajr'] },
        { label: 'Middel', cells: ['ʿAmma', 'aḍ-Ḍuḥā', 'ẓuhr, ʿaṣr en ʿishāʾ'] },
        { label: 'Kort', cells: ['aḍ-Ḍuḥā', 'an-Nās', 'maghrib'] }
      ],
      page: 118
    },
    {
      type: 'cards',
      title: 'Afgeraden in het gebed',
      intro: 'Zoals in les 34 en 35.',
      nodes: [
        { label: 'Zonder reden rondkijken', page: 121 },
        { label: 'De onderarmen plat leggen bij de neerwerping', page: 121 },
        { label: 'Haar en kleding bijeenhouden', page: 121 },
        { label: 'De hand op de heup', page: 121 },
        { label: 'De mond bedekken', page: 122 },
        { label: 'De vingers in elkaar strengelen', page: 122 },
        { label: 'Veel bewegen en friemelen', page: 122 },
        { label: 'Als het eten klaarstaat of je je moet ophouden', page: 122 }
      ]
    },
    {
      type: 'compare',
      title: 'Soorten beweging in het gebed (alleen ter kennisname)',
      intro: 'Volgens de vijf oordelen, zoals in het boek.',
      columns: ['Voorbeeld'],
      rows: [
        { label: 'Verplicht', cells: ['nodig voor een geldig gebed, zoals wie hoort dat hij niet naar de qibla staat'] },
        { label: 'Verboden', cells: ['veel achter elkaar zonder noodzaak'] },
        { label: 'Aanbevolen', cells: ['voor iets aanbevolens, zoals een gat in de rij dichten'] },
        { label: 'Toegestaan', cells: ['weinig als het nodig is, of veel bij noodzaak'] },
        { label: 'Afgeraden', cells: ['weinig zonder reden'] }
      ],
      page: 123
    },
    {
      type: 'cards',
      title: 'Wat het gebed ongeldig maakt',
      intro: 'Zoals in les 36.',
      nodes: [
        { label: 'De reinheid vervalt', page: 124 },
        { label: 'Bekende najāsa die je niet weghaalt', page: 124 },
        { label: 'Opzettelijk je ʿawra ontbloten', page: 124 },
        { label: 'Opzettelijk je rug naar de qibla', page: 124 },
        { label: 'Opzettelijk praten', page: 124 },
        { label: 'Hardop lachen', page: 124 },
        { label: 'Wat het gebed onderbreekt als het vóór je langsgaat', page: 124 },
        { label: 'Opzettelijk een zuil, voorwaarde of verplichting weglaten', page: 124 },
        { label: 'Opzettelijk eten of drinken', page: 125 },
        { label: 'Opzettelijk een zuil toevoegen of verplaatsen', page: 125 },
        { label: 'De intentie opgeven', page: 125 }
      ]
    }
  ],
  sections: [
    { title: 'Wat je zegt na het opkomen uit de buiging', text: '"Rabbanā laka l-ḥamd", "rabbanā wa laka l-ḥamd", "allāhumma rabbanā laka l-ḥamd" of "allāhumma rabbanā wa laka l-ḥamd"; aanbevolen is ook: "zoveel lof dat het de hemelen, de aarde en wat ertussen is vult, en wat U daarna nog wilt".', more: '', page: 117 },
    { title: 'De houding bij de neerwerping', text: 'Je zegt de takbīr zonder de handen te heffen, werpt je neer op zeven delen, houdt je onderarmen van de grond, je bovenarmen van je zij en je buik van je dijen, en ligt niet plat.', more: '', page: 118 },
    { title: 'De tashahhud', text: 'Je vouwt pink en ringvinger, maakt een ring met duim en middelvinger, wijst met de wijsvinger en kijkt ernaar. In de laatste vraag je zegen over de Profeet ﷺ en bescherming tegen vier dingen, smeekt wat je wilt en geeft de taslīm.', more: '', page: 119 },
    { title: 'Gedenken na het gebed (alleen ter kennisname)', text: 'Drie keer om vergeving vragen en "O Allah, U bent de Vrede" zeggen, de tahlīl, lofprijzingen en de soera’s van beschutting. De handen heffen bij de smeekbede na het gebed is niet voorgeschreven, omdat het niet overgeleverd is.', more: FYI_NL, page: 120 },
    { title: 'Soorten rondkijken (alleen ter kennisname)', text: 'Met je hele lichaam van de qibla wegdraaien maakt ongeldig; met je borst terwijl je voeten blijven staan is afgeraden, en volgens sommige geleerden ongeldig; met hoofd of ogen is afgeraden, tenzij nodig.', more: FYI_NL, page: 121 },
    { title: 'Vingers in elkaar strengelen', text: 'Op weg naar het gebed is het verboden, dus in het gebed zelf zeker. Buiten de gebedstijd is het niet afgeraden, ook niet in de moskee.', more: '', page: 122 },
    { title: 'Wanneer bidden bij klaarstaand eten afgeraden is', text: 'Als je ernaar verlangt en het klaarstaat zodat je het kunt eten. Vast je, heb je geen trek, of is het te heet om te eten, dan is het niet afgeraden.', more: '', page: 122 },
    { title: 'Najāsa tijdens het gebed', text: 'Weet je ervan en kun je haar meteen weghalen, doe dat dan. Kan dat niet, zoals bij najāsa op je onderkleding, dan moet je het gebed verlaten.', more: '', page: 124 },
    { title: 'Soorten lachen', text: 'Glimlachen maakt niet ongeldig; luid lachen wel, volgens alle geleerden; wat ertussenin ligt maakt volgens de meesten ongeldig als er twee letters hoorbaar zijn.', more: '', page: 125 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Afgeraden in het gebed', items: ['zonder reden rondkijken', 'onderarmen plat leggen', 'haar en kleding bijeenhouden', 'hand op de heup', 'vingers strengelen', 'friemelen'], page: 121, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat het gebed ongeldig maakt', items: ['opzettelijk praten', 'hardop lachen', 'opzettelijk eten of drinken', 'opzettelijk de ʿawra ontbloten', 'de intentie opgeven'], page: 124, origin: 'boek' },
    { kind: 'bewijs', title: 'Praten in het gebed verboden', items: ['"En sta voor Allah in nederige gehoorzaamheid" (al-Baqara 2:238)', '"Toen werd ons stilte opgedragen en praten verboden."'], page: 124, origin: 'boek' },
    { kind: 'onderscheid', title: 'Soorten lachen', items: ['Glimlachen: niet ongeldig.', 'Luid lachen: ongeldig volgens alle geleerden.', 'Ertussenin: volgens de meesten ongeldig als twee letters hoorbaar zijn.'], page: 125, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Het gebed begint met de takbīr en eindigt met de taslīm; elke houding heeft haar gedenken.',
    'Je reciteert uit de mufaṣṣal naargelang het gebed.',
    'Afgeraden is wat afleidt of de nederigheid schaadt.',
    'Beweging in het gebed valt onder de vijf oordelen.',
    'Opzettelijk praten, lachen en eten maken het gebed onder meer ongeldig.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waar begint de mufaṣṣal?', options: ['bij Sūrat Qāf', 'bij Sūrat ʿAmma', 'bij Sūrat aḍ-Ḍuḥā', 'bij Sūrat al-Baqara'], answer: 0, explain: 'Hij eindigt bij an-Nās.', page: 118 },
    { type: 'tf', q: 'Je heft je handen bij de takbīr voor de neerwerping.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'De takbīr voor de neerwerping is zonder de handen te heffen.', page: 118 },
    { type: 'mc', q: 'Wat is het oordeel over zonder reden even rondkijken in het gebed?', options: ['afgeraden', 'maakt ongeldig', 'aanbevolen', 'toegestaan'], answer: 0, explain: '"Het is een diefstal die de duivel wegrooft."', page: 121 },
    { type: 'mc', q: 'Wat is takhaṣṣur?', options: ['de hand op de heup', 'de vingers strengelen', 'de mond bedekken', 'kleding bijeenhouden'], answer: 0, explain: 'Het is afgeraden.', page: 121 },
    { type: 'tf', q: 'Vingers strengelen in de moskee buiten de gebedstijd is afgeraden.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat is niet afgeraden; de Profeet ﷺ deed het in het verhaal van Dhū l-Yadayn.', page: 122 },
    { type: 'mc', q: 'Wat maakt het gebed ongeldig?', options: ['luid lachen', 'glimlachen', 'met de ogen kijken als het nodig is', 'de vingers strengelen'], answer: 0, explain: 'Volgens alle geleerden.', page: 125 }
  ]),
  note: 'Oefening van het boek op p. 126. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-fiqh', chapter: '33', unit: 6, ar, nl }
