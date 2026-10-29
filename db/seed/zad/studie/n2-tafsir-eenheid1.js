// Hoofdstukkaart bij التفسير (٢), eenheid 1: سورة النبأ (lessen 1–6, boek p. 11–30).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De uitspraak van Abū Hurayra op p. 28 staat in het boek
// zonder bron en is daarom niet in het hadith-tabblad opgenomen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (٢)، سلسلة زاد العلمية',
  pages: '11–30',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'إذا اشتد الحر فأبردوا بالصلاة فإن شدة الحر من فيح جهنم', takhrij: 'رواه البخاري ومسلم', note: 'ذكره الكتاب عند ﴿وجعلنا سراجا وهاجا﴾: الشمس شديدة الحرارة مع بعدها.', pages: [16], nl: 'Als de hitte hevig wordt, stel het gebed dan uit tot het koeler is, want de hevige hitte komt van de adem van de Hel', nlNote: 'Genoemd bij "en Wij maakten een stralende lamp": de zon is zeer heet, ondanks haar afstand.' },
  { narrator: '', text: 'اشتكت النار إلى ربها فقالت: يا رب أكل بعضي بعضا، فأذن لها بنفسين: نفس في الشتاء ونفس في الصيف، فهو أشد ما تجدون من الحر وأشد ما تجدون من الزمهرير', takhrij: 'في الصحيحين', note: 'ذكره الكتاب مع الحديث السابق.', pages: [16], nl: 'Het Vuur klaagde bij zijn Heer en zei: "O Heer, het ene deel van mij verteert het andere." Toen stond Hij het twee ademhalingen toe: één in de winter en één in de zomer. Dat is de hevigste hitte en de hevigste kou die jullie ervaren', nlNote: 'Genoemd samen met de vorige hadith.' },
  { narrator: '', text: 'أفضل الحج العج والثج', takhrij: 'رواه الترمذي وصححه الألباني', note: 'العج رفع الصوت بالتلبية، والثج صب دماء البدن بكثرة؛ ذكره الكتاب في معنى ﴿ماء ثجاجا﴾.', pages: [17], nl: 'De beste ḥajj is die met ʿajj en thajj', nlNote: 'ʿAjj is het luid uitspreken van de talbiya, thajj het overvloedig laten vloeien van het bloed van de offerdieren; genoemd bij de betekenis van "overvloedig stromend water".' },
  { narrator: '', text: 'ولا يتكلم يومئذ إلا الرسل', takhrij: 'في الصحيحين', note: 'ذكره الكتاب عند ﴿لا يتكلمون إلا من أذن له الرحمن﴾.', pages: [28], nl: 'en op die dag spreekt niemand behalve de boodschappers', nlNote: 'Genoemd bij "zij spreken niet, behalve wie de Erbarmer toestemming geeft".' }
]

const TAKHRIJ_NL = { 'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'في الصحيحين': 'in de twee Ṣaḥīḥ-verzamelingen (al-Bukhārī en Muslim)', 'رواه الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī verklaarde hem ṣaḥīḥ' }
const NARRATOR_NL = {}

const PERSONS = [
  ['ibn-az-zubayr', 'text', [12], 'روى أن سورة «عم يتساءلون» نزلت بمكة.', 'Overleverde dat de soera "Waarover vragen zij elkaar?" in Mekka werd geopenbaard.'],
  ['ar-raghib-al-isfahani', 'text', [13], 'عرّف النبأ بأنه الخبر ذو الفائدة العظيمة يحصل به علم أو غلبة ظن.', 'Definieerde nabaʾ als een bericht van groot belang dat kennis of sterk vermoeden geeft.'],
  ['az-zajjaj', 'text', [15], 'فسر السبات بانقطاع الحركة والروح في البدن.', 'Legde subāt uit als het ophouden van beweging terwijl de ziel in het lichaam blijft.'],
  ['qatada-ibn-diama', 'text', [16], 'فسر ﴿وجعلنا الليل لباسا﴾ بالسكن.', 'Legde "en Wij maakten de nacht tot een kleed" uit als rust.'],
  ['said-ibn-jubayr', 'text', [16], 'فسر ﴿وجعلنا الليل لباسا﴾ بالسكن.', 'Legde "en Wij maakten de nacht tot een kleed" uit als rust.'],
  ['ibn-uthaymin', 'text', [17], 'شبه المعصرات بالثوب المعصور يخرج منه الماء.', 'Vergeleek de "persende wolken" met een kledingstuk dat wordt uitgewrongen.'],
  ['at-tirmidhi', 'takhrij', [17], 'روى حديث «أفضل الحج العج والثج».', 'Overleverde de hadith over ʿajj en thajj.'],
  ['al-albani', 'takhrij', [17], 'صحح حديث «أفضل الحج العج والثج».', 'Verklaarde de hadith over ʿajj en thajj ṣaḥīḥ.'],
  ['al-azhari', 'text', [21], 'المرصاد عنده المكان الذي يرصد فيه الراصد العدو.', 'Volgens hem is mirṣād de plek waar iemand de vijand opwacht.'],
  ['muqatil-ibn-sulayman', 'text', [21], 'قال في ﴿جزاء وفاقا﴾: وافق العذاب الذنب.', 'Zei bij "een passende vergelding": de straf past bij de zonde.'],
  ['al-farra', 'text', [22], 'قال: «كذابا» لغة يمانية فصيحة.', 'Zei dat kidhdhāb een zuiver Jemenitisch taalgebruik is.'],
  ['as-sadi', 'text', [22], 'قال: ﴿فذوقوا فلن نزيدكم إلا عذابا﴾ أشد الآيات في عذاب أهل النار.', 'Zei dat "proef dan, Wij zullen jullie alleen nog meer straf geven" het zwaarste vers is over de straf van de mensen van het Vuur.'],
  ['abu-hurayra', 'text', [28], 'نقل عنه الكتاب قوله في ﴿يا ليتني كنت ترابا﴾.', 'Het boek citeert zijn uitspraak bij "had ik maar stof geweest".']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'سورة النبأ',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'سورة مكية تبدأ بإنكار تساؤل المشركين عن يوم القيامة، ثم تقيم أدلة البعث من خلق الأرض والجبال والنوم والليل والنهار والسماء والمطر، ثم تصف يوم الفصل وعذاب الطاغين ونعيم المتقين، وتختم بموقف الملائكة ويوم الحق.',
  source,
  visual: {
    type: 'mindmap',
    title: 'سورة النبأ في خريطة واحدة',
    intro: 'مقاطع السورة كما قسمها الكتاب.',
    root: { label: 'سورة النبأ', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'النبأ العظيم', sub: 'الآيات ١–٥', page: 12, children: ['التساؤل', 'يوم القيامة أو القرآن', 'الوعيد المكرر'] },
      { label: 'أدلة البعث', sub: 'الآيات ٦–١٦', page: 15, children: ['الأرض والجبال', 'النوم والليل والنهار', 'السماء والسراج', 'المطر والنبات'] },
      { label: 'يوم الفصل وجهنم', sub: 'الآيات ١٧–٣٠', page: 20, children: ['النفخ في الصور', 'جهنم مرصاد', 'جزاء وفاق'] },
      { label: 'نعيم المتقين', sub: 'الآيات ٣١–٣٦', page: 24, children: ['مفاز', 'لا لغو ولا كذاب', 'عطاء حسابا'] },
      { label: 'موقف القيامة', sub: 'الآيات ٣٧–٤٠', page: 27, children: ['الروح والملائكة', 'لا كلام إلا بإذن', 'يا ليتني كنت ترابا'] }
    ]
  },
  points: [
    { text: 'سورة النبأ مكية؛ نزلت «عم يتساءلون» بمكة كما روى ابن الزبير.', page: 12 },
    { text: 'النبأ العظيم هو يوم القيامة، وقيل: هو القرآن.', page: 13 },
    { text: 'كرر الله ﴿كلا سيعلمون﴾ للمبالغة في الوعيد: وعيد بعده وعيد.', page: 13 },
    { text: 'قدم الله مقدمة في قدرته وعلمه، فإذا ثبتا ثبت البعث.', page: 18 },
    { text: 'النوم والاستيقاظ من أوضح الأدلة على البعث.', page: 18 },
    { text: 'يوم الفصل ميقات محدد يفصل الله فيه بين العباد.', page: 20 },
    { text: '﴿كانت مرصادا﴾ يدل على أن النار مخلوقة الآن.', page: 22 },
    { text: 'لا يتكلم أحد يوم القيامة إلا بشرطين: أن يأذن الله له، وأن يقول صوابًا.', page: 28 }
  ],
  terms: [
    { term: 'النبأ', translit: 'an-nabaʾ', meaning: 'الخبر ذو الفائدة العظيمة يحصل به علم أو غلبة ظن، ويكون صادقًا.', explanation: 'قاله الراغب.', notes: [], page: 13 },
    { term: 'كلا', translit: 'kallā', meaning: 'حرف ردع وزجر وإبطال لشيء يسبقه غالبًا.', explanation: '', notes: [], page: 13 },
    { term: 'المهاد', translit: 'al-mihād', meaning: 'اسم لما يفرش؛ والمعنى: الأرض ممهدة مهيأة لكم.', explanation: '', notes: [], page: 15 },
    { term: 'السبات', translit: 'as-subāt', meaning: 'أن ينقطع عن الحركة والروح في بدنه؛ وأصل السبت القطع.', explanation: 'قاله الزجاج.', notes: [], page: 15 },
    { term: 'المعصرات', translit: 'al-muʿṣirāt', meaning: 'السحاب في أقرب الأقوال الثلاثة؛ وقيل الرياح، وقيل السماوات.', explanation: '', notes: [], page: 17 },
    { term: 'ثجاجا', translit: 'thajjājan', meaning: 'منصبًّا كثيرًا متتابعًا.', explanation: '', notes: [], page: 17 },
    { term: 'ألفافا', translit: 'alfāfan', meaning: 'ملتفًّا بعضها إلى بعض من كثرتها وحسنها.', explanation: '', notes: [], page: 17 },
    { term: 'يوم الفصل', translit: 'yawm al-faṣl', meaning: 'يوم القيامة، يفصل الله فيه بين العباد.', explanation: '', notes: [], page: 20 },
    { term: 'الصور', translit: 'aṣ-ṣūr', meaning: 'القرن الذي ينفخ فيه الملك.', explanation: 'فيه نفختان.', notes: [], page: 20 },
    { term: 'المرصاد', translit: 'al-mirṣād', meaning: 'المكان الذي يرصد فيه الراصد العدو.', explanation: 'قاله الأزهري.', notes: [], page: 21 },
    { term: 'أحقابا', translit: 'aḥqāban', meaning: 'جمع حقب، وهو المدة من الزمان.', explanation: '', notes: [], page: 21 },
    { term: 'الغساق', translit: 'al-ghassāq', meaning: 'قيل: الزمهرير، وقيل: صديد أهل النار.', explanation: '', notes: [], page: 21 },
    { term: 'كواعب أترابا', translit: 'kawāʿib atrāban', meaning: 'زوجات الجنة في شبابهن، على سن واحد متقارب.', explanation: '', notes: [], page: 24 },
    { term: 'دهاقا', translit: 'dihāqan', meaning: 'مملوءة متتابعة صافية.', explanation: '', notes: [], page: 25 },
    { term: 'حسابا', translit: 'ḥisāban', meaning: 'كافيًا وافرًا؛ تقول العرب: أعطاني فأحسبني أي كفاني.', explanation: '', notes: [], page: 25 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'أدلة البعث في السورة',
      intro: 'ابتدأ بالأرض لأن البعث إخراج من الأرض.',
      nodes: [
        { label: 'الأرض مهاد والجبال أوتاد', sub: 'الآيتان ٦–٧', page: 15 },
        { label: 'خلقكم أزواجا', sub: 'الآية ٨', page: 15 },
        { label: 'النوم سبات', sub: 'من أوضح أدلة البعث', page: 15 },
        { label: 'الليل لباس والنهار معاش', sub: 'الآيتان ١٠–١١', page: 16 },
        { label: 'سبع شداد وسراج وهاج', sub: 'الآيتان ١٢–١٣', page: 16 },
        { label: 'المطر يخرج الحب والنبات والجنات', sub: 'الآيات ١٤–١٦', page: 17 }
      ]
    },
    {
      type: 'compare',
      title: 'مصير الطاغين ومصير المتقين',
      intro: 'كما في الآيات ٢١–٣٦.',
      columns: ['المكان', 'الشراب', 'السبب'],
      rows: [
        { label: 'الطاغون', cells: ['جهنم مرصاد ومآب', 'حميم وغساق', 'لا يرجون حسابا وكذبوا بالآيات'] },
        { label: 'المتقون', cells: ['مفاز وحدائق وأعناب', 'كأس دهاق', 'اتقوا سخط ربهم بطاعته'] }
      ],
      page: 21
    },
    {
      type: 'cards',
      title: 'لماذا هذا الترتيب؟',
      intro: 'فوائد من الكتاب.',
      nodes: [
        { label: '«نخرج» لا «ننبت»', sub: 'السياق في إثبات البعث، والإخراج أنسب', page: 18 },
        { label: 'الحب ثم النبات ثم الجنات', sub: 'طعام الناس، ثم طعام الحيوان، ثم الفواكه', page: 19 },
        { label: 'تقديم الكفر بالبعث', sub: 'لأنه أصل الكفر والإجرام والمعاصي', page: 23 },
        { label: '«الرحمن» عند الإذن', sub: 'مقام الشفاعة مقام رحمة', page: 29 }
      ]
    }
  ],
  sections: [
    { title: 'نفختان في الصور', text: 'الأولى يفزع الناس ثم يصعقون فيموتون، والثانية يبعثون من قبورهم وتعود إليهم أرواحهم.', page: 20 },
    { title: 'سعة رحمة الله', text: 'أعدت جهنم للطاغين الذين تجاوزوا الحد، وجعل الله للخطائين مكفرات كثيرة كالصلاة وصوم رمضان والاستغفار والعمل الصالح.', page: 23 },
    { title: 'مجالس الجنة', text: 'لا لغو فيها ولا كذب، فعلينا أن تكون مجالسنا خالية من اللغو والكذب تشبيهًا بمجالس الجنة.', page: 25 },
    { title: '﴿جزاء من ربك﴾', text: 'أضاف الرب إلى ضمير النبي ﷺ تنبيهًا إلى أن نيل الجنة يكون بمتابعته والتصديق به والعمل بما جاء به.', page: 25 },
    { title: '﴿ذلك اليوم الحق﴾', text: 'اليوم الذي ينكشف فيه كل شيء ويظهر الصحيح من الخاطئ، بخلاف أيام الدنيا.', page: 29 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شرطا الكلام يوم القيامة', items: ['أن يأذن الله له في الكلام', 'أن يكون ما تكلم به صوابًا'], page: 28, origin: 'boek' },
    { kind: 'opsomming', title: 'أقوال في المعصرات', items: ['السحاب، وهو الأقرب', 'الرياح', 'السماوات'], page: 17, origin: 'boek' },
    { kind: 'opsomming', title: 'أقوال في الروح', items: ['جبريل', 'أرواح بني آدم', 'خلق من خلق الله'], page: 27, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'النبأ العظيم: يوم القيامة، وقيل القرآن.',
    'أدلة البعث: الأرض والجبال والنوم والليل والنهار والسماء والمطر.',
    'يوم الفصل ميقات، وجهنم مرصاد للطاغين.',
    'للمتقين مفاز وعطاء حساب.',
    'لا كلام يوم القيامة إلا بإذن الرحمن وقول الصواب.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أقرب الأقوال في «المعصرات»؟', options: ['السحاب', 'الرياح', 'السماوات', 'الجبال'], answer: 0, explain: 'ذكر الكتاب ثلاثة أقوال، والأول أقرب.', page: 17 },
    { type: 'mc', q: 'لماذا ابتدأت أدلة البعث بخلق الأرض؟', options: ['لأن البعث إخراج من الأرض', 'لأنها أكبر المخلوقات', 'لأنها خلقت أولا', 'لأنها أقرب إلى السماء'], answer: 0, explain: 'فكانت الأرض أسبق شيء إلى ذهن السامع.', page: 18 },
    { type: 'tf', q: 'قوله ﴿كانت مرصادا﴾ يدل على أن النار مخلوقة الآن.', options: ['صواب', 'خطأ'], answer: 0, explain: 'بالفعل «كانت».', page: 22 },
    { type: 'mc', q: 'ما معنى «عطاء حسابا»؟', options: ['كافيًا وافرًا', 'بقدر الأعمال فقط', 'معدودًا قليلًا', 'مؤجلًا'], answer: 0, explain: 'تقول العرب: أعطاني فأحسبني أي كفاني.', page: 25 },
    { type: 'mc', q: 'لماذا استعمل «لنخرج» دون «لننبت»؟', options: ['لأن السياق في إثبات البعث', 'لأنها أخف في النطق', 'لأن النبات لا يخرج', 'لا فرق بينهما'], answer: 0, explain: 'الإخراج أكثر ملاءمة لإثبات البعث.', page: 18 },
    { type: 'tf', q: 'يتكلم يوم القيامة كل من أراد الكلام.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا يتكلم إلا من أذن له الرحمن وقال صوابًا.', page: 28 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ١٤ و١٩ و٢٣ و٢٦ و٢٩.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Soera an-Nabaʾ',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Een Mekkaanse soera die begint met het afwijzen van de vraag van de veelgodenaanbidders over de Opstanding, daarna bewijzen voor de opwekking geeft uit de schepping van aarde, bergen, slaap, nacht en dag, hemel en regen, vervolgens de Dag van de Beslissing, de straf van de overtreders en de gelukzaligheid van de godvrezenden beschrijft, en eindigt met de engelen die in rijen staan en de Dag van de Waarheid.',
  source: { ...source, label: 'At-Tafsīr (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Soera an-Nabaʾ in één kaart',
    intro: 'De delen van de soera zoals het boek ze indeelt.',
    root: { label: 'Soera an-Nabaʾ', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Het grote bericht', sub: 'vers 1–5', page: 12, children: ['de vraag', 'Opstanding of Koran', 'herhaalde waarschuwing'] },
      { label: 'Bewijzen voor de opwekking', sub: 'vers 6–16', page: 15, children: ['aarde en bergen', 'slaap, nacht en dag', 'hemel en lamp', 'regen en gewassen'] },
      { label: 'Dag van de Beslissing en de Hel', sub: 'vers 17–30', page: 20, children: ['blazen op de hoorn', 'de Hel ligt op de loer', 'passende vergelding'] },
      { label: 'Gelukzaligheid van de godvrezenden', sub: 'vers 31–36', page: 24, children: ['redding', 'geen onzin of leugen', 'ruime gave'] },
      { label: 'De Opstanding', sub: 'vers 37–40', page: 27, children: ['de Geest en de engelen', 'spreken alleen met toestemming', '"had ik maar stof geweest"'] }
    ]
  },
  points: [
    { text: 'An-Nabaʾ is Mekkaans; volgens Ibn az-Zubayr werd "Waarover vragen zij elkaar?" in Mekka geopenbaard.', page: 12 },
    { text: 'Het grote bericht is de Dag van de Opstanding; anderen zeggen: de Koran.', page: 13 },
    { text: 'Allah herhaalt "nee, zij zullen het weten" om de waarschuwing te versterken: waarschuwing na waarschuwing.', page: 13 },
    { text: 'Allah wijst eerst op Zijn macht en kennis; staan die vast, dan staat ook de opwekking vast.', page: 18 },
    { text: 'Slapen en ontwaken behoren tot de duidelijkste bewijzen voor de opwekking.', page: 18 },
    { text: 'De Dag van de Beslissing is een vastgesteld tijdstip waarop Allah tussen de dienaren beslist.', page: 20 },
    { text: '"De Hel ligt (kānat) op de loer" wijst erop dat het Vuur nu al geschapen is.', page: 22 },
    { text: 'Op de Opstandingsdag spreekt niemand, behalve onder twee voorwaarden: Allah geeft toestemming en hij zegt wat juist is.', page: 28 }
  ],
  terms: [
    { term: 'النبأ', translit: 'an-nabaʾ', meaning: 'Een bericht van groot belang dat kennis of sterk vermoeden geeft en waar is.', explanation: 'Volgens ar-Rāghib.', notes: [], page: 13 },
    { term: 'كلا', translit: 'kallā', meaning: 'Een woordje van afwijzing en terechtwijzing; het verwerpt meestal wat eraan voorafgaat.', explanation: '', notes: [], page: 13 },
    { term: 'المهاد', translit: 'al-mihād', meaning: 'Wat uitgespreid wordt; de aarde is voor jullie geëffend en gereedgemaakt.', explanation: '', notes: [], page: 15 },
    { term: 'السبات', translit: 'as-subāt', meaning: 'Ophouden met bewegen terwijl de ziel in het lichaam blijft; de grondbetekenis is afsnijden.', explanation: 'Volgens az-Zajjāj.', notes: [], page: 15 },
    { term: 'المعصرات', translit: 'al-muʿṣirāt', meaning: 'De wolken, volgens de meest waarschijnlijke van drie meningen; anderen: de winden of de hemelen.', explanation: '', notes: [], page: 17 },
    { term: 'ثجاجا', translit: 'thajjājan', meaning: 'Overvloedig en aanhoudend stromend.', explanation: '', notes: [], page: 17 },
    { term: 'ألفافا', translit: 'alfāfan', meaning: 'Dicht in elkaar gegroeid door overvloed en schoonheid.', explanation: '', notes: [], page: 17 },
    { term: 'يوم الفصل', translit: 'yawm al-faṣl', meaning: 'De Dag van de Beslissing: de Opstandingsdag, waarop Allah tussen de dienaren beslist.', explanation: '', notes: [], page: 20 },
    { term: 'الصور', translit: 'aṣ-ṣūr', meaning: 'De hoorn waarop de engel blaast.', explanation: 'Er wordt twee keer op geblazen.', notes: [], page: 20 },
    { term: 'المرصاد', translit: 'al-mirṣād', meaning: 'De plek waar iemand de vijand opwacht.', explanation: 'Volgens al-Azharī.', notes: [], page: 21 },
    { term: 'أحقابا', translit: 'aḥqāban', meaning: 'Meervoud van ḥuqb: een lange tijdsperiode.', explanation: '', notes: [], page: 21 },
    { term: 'الغساق', translit: 'al-ghassāq', meaning: 'Volgens sommigen ijzige kou, volgens anderen de etter van de mensen van het Vuur.', explanation: '', notes: [], page: 21 },
    { term: 'كواعب أترابا', translit: 'kawāʿib atrāban', meaning: 'De echtgenotes in het Paradijs, jong en van ongeveer gelijke leeftijd.', explanation: '', notes: [], page: 24 },
    { term: 'دهاقا', translit: 'dihāqan', meaning: 'Vol, steeds opnieuw gevuld en zuiver.', explanation: '', notes: [], page: 25 },
    { term: 'حسابا', translit: 'ḥisāban', meaning: 'Toereikend en overvloedig; de Arabieren zeggen: "hij gaf mij en het was mij genoeg".', explanation: '', notes: [], page: 25 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Bewijzen voor de opwekking in de soera',
      intro: 'Het begint met de aarde, omdat de opwekking een uittreden uit de aarde is.',
      nodes: [
        { label: 'Aarde als rustplaats, bergen als pinnen', sub: 'vers 6–7', page: 15 },
        { label: 'Geschapen in paren', sub: 'vers 8', page: 15 },
        { label: 'Slaap als rust', sub: 'een van de duidelijkste bewijzen', page: 15 },
        { label: 'Nacht als kleed, dag voor het levensonderhoud', sub: 'vers 10–11', page: 16 },
        { label: 'Zeven sterke hemelen en een stralende lamp', sub: 'vers 12–13', page: 16 },
        { label: 'Regen brengt graan, planten en tuinen voort', sub: 'vers 14–16', page: 17 }
      ]
    },
    {
      type: 'compare',
      title: 'De bestemming van de overtreders en van de godvrezenden',
      intro: 'Zoals in vers 21–36.',
      columns: ['Plaats', 'Drank', 'Reden'],
      rows: [
        { label: 'Overtreders', cells: ['de Hel, op de loer en als terugkeerplaats', 'kokend water en ghassāq', 'verwachtten geen afrekening en loochenden de tekenen'] },
        { label: 'Godvrezenden', cells: ['redding, tuinen en druiven', 'een volle beker', 'vreesden de toorn van hun Heer door gehoorzaamheid'] }
      ],
      page: 21
    },
    {
      type: 'cards',
      title: 'Waarom deze volgorde?',
      intro: 'Lessen uit het boek.',
      nodes: [
        { label: '"Voortbrengen" en niet "laten groeien"', sub: 'het gaat om het bewijs voor de opwekking', page: 18 },
        { label: 'Graan, dan planten, dan tuinen', sub: 'voedsel voor mensen, dan voor dieren, dan vruchten', page: 19 },
        { label: 'Ongeloof in de opwekking eerst', sub: 'de basis van ongeloof en zonden', page: 23 },
        { label: '"De Erbarmer" bij de toestemming', sub: 'voorspraak is een daad van barmhartigheid', page: 29 }
      ]
    }
  ],
  sections: [
    { title: 'Twee keer blazen op de hoorn', text: 'Bij de eerste keer schrikken de mensen en sterven zij; bij de tweede keer staan zij op uit hun graven en keren hun zielen terug.', page: 20 },
    { title: 'Allahs ruime barmhartigheid', text: 'De Hel is bestemd voor de overtreders die alle grenzen overschreden; voor wie fouten maakt heeft Allah veel middelen tot vergeving gegeven, zoals het gebed, het vasten van Ramadan, vergeving vragen en goede daden.', page: 23 },
    { title: 'De bijeenkomsten van het Paradijs', text: 'Daar is geen onzin en geen leugen; laten onze bijeenkomsten daarop lijken.', page: 25 },
    { title: '"Een beloning van jouw Heer"', text: 'De Heer wordt verbonden met de Profeet ﷺ, als aanwijzing dat het Paradijs bereikt wordt door hem te volgen, hem te geloven en te doen wat hij bracht.', page: 25 },
    { title: '"Dat is de Dag van de Waarheid"', text: 'De dag waarop alles aan het licht komt en juist van fout gescheiden wordt, anders dan de dagen van deze wereld.', page: 29 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Twee voorwaarden om te spreken op de Opstandingsdag', items: ['Allah geeft toestemming om te spreken', 'wat gezegd wordt is juist'], page: 28, origin: 'boek' },
    { kind: 'opsomming', title: 'Meningen over al-muʿṣirāt', items: ['de wolken (het meest waarschijnlijk)', 'de winden', 'de hemelen'], page: 17, origin: 'boek' },
    { kind: 'opsomming', title: 'Meningen over "de Geest"', items: ['Jibrīl', 'de zielen van de mensen', 'een schepsel van Allah'], page: 27, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Het grote bericht: de Opstanding, of volgens anderen de Koran.',
    'Bewijzen voor de opwekking: aarde, bergen, slaap, nacht en dag, hemel en regen.',
    'De Dag van de Beslissing is vastgesteld; de Hel ligt op de loer voor de overtreders.',
    'De godvrezenden krijgen redding en een ruime gave.',
    'Op de Opstandingsdag spreekt alleen wie toestemming krijgt en juist spreekt.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is de meest waarschijnlijke betekenis van al-muʿṣirāt?', options: ['de wolken', 'de winden', 'de hemelen', 'de bergen'], answer: 0, explain: 'Het boek noemt drie meningen; de eerste is het meest waarschijnlijk.', page: 17 },
    { type: 'mc', q: 'Waarom beginnen de bewijzen voor de opwekking met de aarde?', options: ['omdat de opwekking een uittreden uit de aarde is', 'omdat zij het grootste schepsel is', 'omdat zij als eerste geschapen is', 'omdat zij het dichtst bij de hemel is'], answer: 0, explain: 'Daardoor komt de aarde de luisteraar het eerst voor de geest.', page: 18 },
    { type: 'tf', q: '"De Hel ligt (kānat) op de loer" wijst erop dat het Vuur nu al geschapen is.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Vanwege het werkwoord kānat.', page: 22 },
    { type: 'mc', q: 'Wat betekent "een gave, ḥisāban"?', options: ['toereikend en overvloedig', 'precies naar de daden', 'weinig en geteld', 'uitgesteld'], answer: 0, explain: 'De Arabieren zeggen: "hij gaf mij en het was mij genoeg".', page: 25 },
    { type: 'mc', q: 'Waarom staat er "voortbrengen" en niet "laten groeien"?', options: ['omdat het gaat om het bewijs voor de opwekking', 'omdat het makkelijker klinkt', 'omdat planten niet uittreden', 'er is geen verschil'], answer: 0, explain: 'Uittreden past beter bij de opwekking.', page: 18 },
    { type: 'tf', q: 'Op de Opstandingsdag spreekt iedereen die wil spreken.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Alleen wie de Erbarmer toestemming geeft en juist spreekt.', page: 28 }
  ]),
  note: 'Oefeningen van het boek op p. 14, 19, 23, 26 en 29. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tafsir', chapter: '1', unit: 1, ar, nl }
