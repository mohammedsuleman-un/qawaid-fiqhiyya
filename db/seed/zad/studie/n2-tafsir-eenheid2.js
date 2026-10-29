// Hoofdstukkaart bij التفسير (٢), eenheid 2: سورة النازعات (lessen 7–13, boek p. 31–50).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De woorden van de engelen tot de ziel op p. 33 schrijft het
// boek niet aan een hadith toe; ze staan daarom niet in het hadith-tabblad. Geen personen in deze lessen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (٢)، سلسلة زاد العلمية',
  pages: '31–50',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'ما المسؤول عنها بأعلم من السائل', takhrij: 'في الصحيحين', note: 'من حديث جبريل لما سأل النبي ﷺ عن الساعة؛ ذكره الكتاب عند ﴿فيم أنت من ذكراها﴾.', pages: [48], nl: 'Degene die erover gevraagd wordt, weet er niet meer van dan degene die vraagt', nlNote: 'Uit de hadith van Jibrīl, toen hij de Profeet ﷺ naar het Uur vroeg; genoemd bij "wat heb jij met het noemen ervan te maken?".' },
  { narrator: '', text: 'قال رجل: يا رسول الله، متى الساعة؟ قال: «ماذا أعددت لها؟» قال: حب الله ورسوله. قال: «أنت مع من أحببت»', takhrij: 'أخرجه البخاري ومسلم', note: 'ذكره الكتاب عند ﴿إنما أنت منذر من يخشاها﴾.', pages: [48], nl: 'Een man vroeg: "O Boodschapper van Allah, wanneer is het Uur?" Hij zei: "Wat heb je ervoor voorbereid?" Hij zei: "Liefde voor Allah en Zijn Boodschapper." Hij zei: "Jij bent bij wie je liefhebt"', nlNote: 'Genoemd bij "jij bent slechts een waarschuwer voor wie het vreest".' }
]

const TAKHRIJ_NL = { 'في الصحيحين': 'in de twee Ṣaḥīḥ-verzamelingen (al-Bukhārī en Muslim)', 'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim' }

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'سورة النازعات',
  subtitle: 'سبعة دروس مجموعة في صفحة واحدة',
  summary: 'سورة مكية تبدأ بالقسم بالملائكة ردًّا على منكري البعث، ثم تصف الراجفة والرادفة وحال المكذبين، ثم قصة موسى وفرعون تسلية للنبي ﷺ، ثم دليل خلق السماء والأرض، ثم الطامة الكبرى ومصير من طغى ومن خاف مقام ربه، وتختم بالسؤال عن الساعة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'سورة النازعات في خريطة واحدة',
    intro: 'مقاطع السورة كما قسمها الكتاب.',
    root: { label: 'سورة النازعات', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'القسم بالملائكة', sub: 'الآيات ١–٥', page: 33, children: ['النازعات والناشطات', 'السابحات والسابقات', 'المدبرات أمرا'] },
      { label: 'الراجفة والرادفة', sub: 'الآيات ٦–١٤', page: 35, children: ['قلوب واجفة', 'الحافرة', 'الساهرة'] },
      { label: 'موسى وفرعون', sub: 'الآيات ١٥–٢٦', page: 37, children: ['الواد المقدس', 'هل لك إلى أن تزكى', 'نكال الآخرة والأولى'] },
      { label: 'خلق السماء والأرض', sub: 'الآيات ٢٧–٣٣', page: 41, children: ['رفع سمكها', 'دحو الأرض', 'متاعا لكم'] },
      { label: 'الطامة الكبرى', sub: 'الآيات ٣٤–٤١', page: 44, children: ['من طغى', 'من خاف مقام ربه'] },
      { label: 'السؤال عن الساعة', sub: 'الآيات ٤٢–٤٦', page: 47, children: ['أيان مرساها', 'عشية أو ضحاها'] }
    ]
  },
  points: [
    { text: 'أقسم الله بالملائكة في مطلع السورة مناسبة لموضوعها: الرد على منكري البعث وتذكيرهم بإقبال الموت.', page: 33 },
    { text: 'لا يجوز لأحد أن يقسم بالمخلوق إلا الله، والحلف بغير الله شرك.', page: 34 },
    { text: 'جواب القسم محذوف تقديره: لتبعثن ولتحاسبن.', page: 34 },
    { text: 'ذكرت قصة فرعون تهديدًا للمشركين وتسلية للمسلمين لأوجه الشبه بين الحالين.', page: 39 },
    { text: 'الدعوة إلى الله لا بد فيها من اللين والرفق حتى مع الطغاة.', page: 39 },
    { text: 'لا تعارض بين فصلت والنازعات: خلقت الأرض، ثم السماء، ثم دحيت الأرض.', page: 42 },
    { text: 'الخوف من مقام الله هو الحاجز الصلب أمام دفعات الهوى.', page: 45 },
    { text: 'أخفى الله وقت الساعة ليجتهد الناس في العمل وهم وجلون من حلولها.', page: 49 }
  ],
  terms: [
    { term: 'النازعات', translit: 'an-nāziʿāt', meaning: 'الملائكة التي تنزع نفوس الكافرين نزعًا شديدًا.', explanation: '', notes: [], page: 33 },
    { term: 'الناشطات', translit: 'an-nāshiṭāt', meaning: 'الملائكة التي تقبض أرواح المؤمنين بنشاط ورفق.', explanation: 'كالأنشوطة تنحل بسهولة.', notes: [], page: 33 },
    { term: 'المدبرات أمرا', translit: 'al-mudabbirāt amran', meaning: 'الملائكة المدبرة ما أمرت به من تدبير شؤون الكون.', explanation: '', notes: [], page: 34 },
    { term: 'الراجفة والرادفة', translit: 'ar-rājifa wa-r-rādifa', meaning: 'الأرض ثم السماء تردفها؛ وقيل النفخة الأولى والثانية.', explanation: '', notes: [], page: 35 },
    { term: 'الحافرة', translit: 'al-ḥāfira', meaning: 'الرجوع إلى الحالة الأولى؛ يقال رجع على حافرته أي من حيث جاء.', explanation: '', notes: [], page: 35 },
    { term: 'الساهرة', translit: 'as-sāhira', meaning: 'الأرض المستوية البيضاء التي يجمع الله عليها الناس للحشر.', explanation: 'لأن النوم يطير من أعينهم من شدة الخوف.', notes: [], page: 36 },
    { term: 'الطغيان', translit: 'aṭ-ṭughyān', meaning: 'الإفراط في العصيان وتجاوز الحد، ومنه الطاغوت.', explanation: '', notes: [], page: 38 },
    { term: 'الخشية', translit: 'al-khashya', meaning: 'الخوف المقرون بالعلم؛ فإن لم يكن على علم فهو خوف مجرد.', explanation: '', notes: [], page: 38 },
    { term: 'السمك', translit: 'as-samk', meaning: 'الرفع في الفضاء، اتصل المرفوع بالأرض أم لا.', explanation: '', notes: [], page: 41 },
    { term: 'أغطش', translit: 'aghṭasha', meaning: 'أظلم.', explanation: '', notes: [], page: 42 },
    { term: 'الدحو', translit: 'ad-daḥw', meaning: 'البسط والمد بتسوية.', explanation: '', notes: [], page: 42 },
    { term: 'الطامة', translit: 'aṭ-ṭāmma', meaning: 'اسم من أسماء يوم القيامة: الواقعة التي تعلو وتغلب.', explanation: 'من طم الماء إذا غمر الأشياء.', notes: [], page: 44 },
    { term: 'الهوى', translit: 'al-hawā', meaning: 'أصله مطلق الميل، ثم شاع في الميل إلى الشهوة.', explanation: 'يهوي بصاحبه في الدنيا إلى كل داهية وفي الآخرة إلى الهاوية.', notes: [], page: 45 },
    { term: 'مرساها', translit: 'mursāhā', meaning: 'وقت حلولها؛ والإرساء وقوف السفينة على الشاطئ.', explanation: '', notes: [], page: 47 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'من الملائكة الموكلين',
      intro: 'كما في تفسير ﴿فالمدبرات أمرا﴾.',
      nodes: [
        { label: 'جبريل', sub: 'الوحي', page: 34 },
        { label: 'إسرافيل', sub: 'النفخ في الصور', page: 34 },
        { label: 'ميكال', sub: 'القطر والمطر والنبات', page: 34 },
        { label: 'ملك الموت', sub: 'الأرواح؛ ولا دليل على تسميته عزرائيل', page: 34 },
        { label: 'مالك', sub: 'النار', page: 34 },
        { label: 'الرقيب والعتيد', sub: 'الأعمال', page: 34 }
      ]
    },
    {
      type: 'steps',
      title: 'ترتيب الخلق عند الجمع بين فصلت والنازعات',
      intro: 'لا تعارض بين الآيتين.',
      nodes: [
        { label: 'خلق الأرض', sub: 'فصلت ٩–١١', page: 42 },
        { label: 'خلق السماء', sub: 'بناها ورفع سمكها', page: 42 },
        { label: 'دحو الأرض', sub: 'أخرج ماءها ومرعاها وأرسى الجبال', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'فريقان يوم الطامة',
      intro: 'كما في الآيات ٣٧–٤١.',
      columns: ['صفته', 'مأواه'],
      rows: [
        { label: 'من طغى', cells: ['جاوز الحد وآثر الحياة الدنيا', 'الجحيم'] },
        { label: 'من خاف مقام ربه', cells: ['نهى النفس عن الهوى', 'الجنة'] }
      ],
      page: 45
    }
  ],
  sections: [
    { title: 'شدة نزع الكافر ورفق قبض المؤمن', text: 'تخاطب الملائكة روح الكافر بأقبح الأوصاف فتنفر وتتفرق في الجسد، وتخاطب روح المؤمن بأحسنها فيهون عليها الخروج. والكتاب لا يعزو هذا الكلام لحديث.', page: 33 },
    { title: 'اللين في الدعوة', text: '﴿فقل هل لك إلى أن تزكى﴾: الكلام اللين يجذب القلوب وأدعى للاستجابة.', page: 39 },
    { title: '﴿ثم أدبر يسعى﴾', text: 'بذل فرعون جهده في إقناع رعيته، فهلا بذل المسلم أقصى ما عنده في نشر الإسلام والدفاع عن دينه.', page: 39 },
    { title: 'تقديم نكال الآخرة', text: 'قدم نكال الآخرة لأنه أشد وأبقى، فهو النكال الحقيقي.', page: 39 },
    { title: 'رؤية الجحيم', text: 'يراها المؤمن ليعرف قدر النعمة، والكافر تخويفًا له قبل إدخاله.', page: 45 },
    { title: 'حقارة الدنيا', text: 'كأنها عشية أو ضحاها، فلا ينبغي للعاقل أن يضيع الآخرة من أجلها.', page: 49 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'الخشية والخوف', items: ['الخشية: خوف مقرون بالعلم.', 'الخوف المجرد: بلا علم.'], page: 38, origin: 'boek' },
    { kind: 'opsomming', title: 'من حشرهم فرعون', items: ['أصحابه للمشاورة', 'جنوده للقتال', 'الناس لحضور يوم الزينة'], page: 38, origin: 'boek' },
    { kind: 'onderscheid', title: 'العشية والضحى', items: ['العشية: من الظهر إلى غروب الشمس.', 'الضحى: من طلوع الشمس إلى نصف النهار.'], page: 48, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: [],
  review: [
    'القسم بالملائكة يناسب الرد على منكري البعث.',
    'قصة موسى وفرعون تهديد للمشركين وتسلية للمؤمنين.',
    'خلق الأرض ثم السماء ثم دحو الأرض.',
    'من طغى فالجحيم مأواه، ومن خاف مقام ربه فالجنة مأواه.',
    'علم الساعة عند الله، والنبي ﷺ منذر.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما «الناشطات»؟', options: ['الملائكة التي تقبض أرواح المؤمنين برفق', 'الملائكة التي تنزع أرواح الكفار', 'النجوم', 'الرياح'], answer: 0, explain: 'تسلها برفق كالأنشوطة.', page: 33 },
    { type: 'tf', q: 'تسمية ملك الموت «عزرائيل» ثابتة في القرآن والسنة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'قال الكتاب: من الخطأ تسميته عزرائيل، فلا دليل على ذلك.', page: 34 },
    { type: 'mc', q: 'لماذا سميت الساهرة بهذا الاسم؟', options: ['لأن النوم يطير من أعين الناس من شدة الخوف', 'لأنها بيضاء', 'لأنها لا نبات فيها', 'لأنها في السماء'], answer: 0, explain: 'وهي الأرض التي يجمع الله عليها الناس للحشر.', page: 36 },
    { type: 'mc', q: 'لماذا قدم «نكال الآخرة» على «الأولى»؟', options: ['لأنه أشد وأبقى', 'لأنه وقع أولا', 'للسجع فقط', 'لأنه أخف'], answer: 0, explain: 'فهو النكال الحقيقي.', page: 39 },
    { type: 'mc', q: 'كيف يجمع بين فصلت و﴿والأرض بعد ذلك دحاها﴾؟', options: ['خلقت الأرض ثم السماء ثم دحيت الأرض', 'السماء خلقت أولا مطلقا', 'الأرض والسماء خلقتا معا', 'الآيتان متعارضتان'], answer: 0, explain: 'الدحو بعد خلق السماء، وخلق الأرض قبلها.', page: 42 },
    { type: 'tf', q: 'تخصيص النذارة بمن يخشى يعني أن النبي ﷺ لا ينذر غيرهم.', options: ['صواب', 'خطأ'], answer: 1, explain: 'المراد أن المنتفع بالإنذار هو من يخشى الله.', page: 49 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٣٦ و٤٠ و٤٣ و٤٦ و٥٠.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Soera an-Nāziʿāt',
  subtitle: 'Zeven lessen samen op één pagina',
  summary: 'Een Mekkaanse soera die begint met een eed bij de engelen, als antwoord aan wie de opwekking ontkent; daarna de beving en wat erop volgt en de toestand van de loochenaars; dan het verhaal van Mūsā en Firʿawn als troost voor de Profeet ﷺ; dan het bewijs uit de schepping van hemel en aarde; dan de grote ramp en het lot van wie overtrad en van wie de positie van zijn Heer vreesde; en tot slot de vraag naar het Uur.',
  source: { ...source, label: 'At-Tafsīr (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Soera an-Nāziʿāt in één kaart',
    intro: 'De delen van de soera zoals het boek ze indeelt.',
    root: { label: 'Soera an-Nāziʿāt', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Eed bij de engelen', sub: 'vers 1–5', page: 33, children: ['die hard wegtrekken en zacht losmaken', 'die zweven en voorgaan', 'die de zaken regelen'] },
      { label: 'De beving en wat volgt', sub: 'vers 6–14', page: 35, children: ['bevende harten', 'terug naar de oude staat', 'de vlakte van de verzameling'] },
      { label: 'Mūsā en Firʿawn', sub: 'vers 15–26', page: 37, children: ['het heilige dal', '"wil je je reinigen?"', 'straf in beide werelden'] },
      { label: 'Schepping van hemel en aarde', sub: 'vers 27–33', page: 41, children: ['het verheven dak', 'het uitspreiden van de aarde', 'een voorziening voor jullie'] },
      { label: 'De grote ramp', sub: 'vers 34–41', page: 44, children: ['wie overtrad', 'wie de positie van zijn Heer vreesde'] },
      { label: 'De vraag naar het Uur', sub: 'vers 42–46', page: 47, children: ['wanneer komt het aan?', 'een avond of een ochtend'] }
    ]
  },
  points: [
    { text: 'Allah zweert aan het begin bij de engelen, passend bij het onderwerp: weerlegging van wie de opwekking ontkent, en herinnering aan de naderende dood.', page: 33 },
    { text: 'Niemand mag bij een schepsel zweren; alleen Allah doet dat. Zweren bij iets anders dan Allah is shirk.', page: 34 },
    { text: 'Het antwoord op de eed is weggelaten; de betekenis is: jullie zullen zeker opgewekt worden en ter verantwoording geroepen worden.', page: 34 },
    { text: 'Het verhaal van Firʿawn waarschuwt de veelgodenaanbidders en troost de moslims, omdat beide situaties op elkaar lijken.', page: 39 },
    { text: 'Uitnodigen tot Allah vraagt zachtheid en vriendelijkheid, ook tegenover tirannen.', page: 39 },
    { text: 'Fuṣṣilat en an-Nāziʿāt spreken elkaar niet tegen: eerst de aarde, dan de hemel, dan het uitspreiden van de aarde.', page: 42 },
    { text: 'Vrees voor de positie van Allah is de stevige dam tegen de golven van begeerte.', page: 45 },
    { text: 'Allah hield het tijdstip van het Uur verborgen, zodat mensen hun best doen terwijl zij vrezen dat het elk moment kan komen.', page: 49 }
  ],
  terms: [
    { term: 'النازعات', translit: 'an-nāziʿāt', meaning: 'De engelen die de zielen van de ongelovigen hard wegtrekken.', explanation: '', notes: [], page: 33 },
    { term: 'الناشطات', translit: 'an-nāshiṭāt', meaning: 'De engelen die de zielen van de gelovigen vlot en zacht losmaken.', explanation: 'Als een strik die makkelijk losgaat.', notes: [], page: 33 },
    { term: 'المدبرات أمرا', translit: 'al-mudabbirāt amran', meaning: 'De engelen die uitvoeren wat hun is opgedragen bij het regelen van de schepping.', explanation: '', notes: [], page: 34 },
    { term: 'الراجفة والرادفة', translit: 'ar-rājifa wa-r-rādifa', meaning: 'De aarde, gevolgd door de hemel; anderen: het eerste en tweede blazen op de hoorn.', explanation: '', notes: [], page: 35 },
    { term: 'الحافرة', translit: 'al-ḥāfira', meaning: 'Terugkeer naar de vorige staat; men zegt: hij keerde terug op zijn spoor.', explanation: '', notes: [], page: 35 },
    { term: 'الساهرة', translit: 'as-sāhira', meaning: 'De vlakke, witte aarde waarop Allah de mensen verzamelt.', explanation: 'Zo genoemd omdat de slaap van angst uit hun ogen verdwijnt.', notes: [], page: 36 },
    { term: 'الطغيان', translit: 'aṭ-ṭughyān', meaning: 'Overmatige ongehoorzaamheid en het overschrijden van grenzen; daarvan komt ṭāghūt.', explanation: '', notes: [], page: 38 },
    { term: 'الخشية', translit: 'al-khashya', meaning: 'Vrees die samengaat met kennis; zonder kennis is het alleen angst.', explanation: '', notes: [], page: 38 },
    { term: 'السمك', translit: 'as-samk', meaning: 'Hoogte in de ruimte, of het verhevene nu met de aarde verbonden is of niet.', explanation: '', notes: [], page: 41 },
    { term: 'أغطش', translit: 'aghṭasha', meaning: 'Hij maakte donker.', explanation: '', notes: [], page: 42 },
    { term: 'الدحو', translit: 'ad-daḥw', meaning: 'Effen uitspreiden en uitstrekken.', explanation: '', notes: [], page: 42 },
    { term: 'الطامة', translit: 'aṭ-ṭāmma', meaning: 'Een naam van de Opstandingsdag: de gebeurtenis die alles overweldigt.', explanation: 'Van ṭamma al-māʾ: het water overspoelde alles.', notes: [], page: 44 },
    { term: 'الهوى', translit: 'al-hawā', meaning: 'Oorspronkelijk elke neiging; later vooral de neiging tot begeerte.', explanation: 'Het stort zijn bezitter in deze wereld in elk onheil en in het hiernamaals in de afgrond.', notes: [], page: 45 },
    { term: 'مرساها', translit: 'mursāhā', meaning: 'Het tijdstip van aankomst; irsāʾ is het aanmeren van een schip aan de kust.', explanation: '', notes: [], page: 47 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'Engelen met een taak',
      intro: 'Zoals bij "die de zaken regelen".',
      nodes: [
        { label: 'Jibrīl', sub: 'de openbaring', page: 34 },
        { label: 'Isrāfīl', sub: 'het blazen op de hoorn', page: 34 },
        { label: 'Mīkāl', sub: 'regen en plantengroei', page: 34 },
        { label: 'De engel van de dood', sub: 'de zielen; de naam ʿAzrāʾīl heeft geen bewijs', page: 34 },
        { label: 'Mālik', sub: 'het Vuur', page: 34 },
        { label: 'De twee optekenaars', sub: 'de daden', page: 34 }
      ]
    },
    {
      type: 'steps',
      title: 'Volgorde van de schepping (Fuṣṣilat en an-Nāziʿāt samen)',
      intro: 'De twee verzen spreken elkaar niet tegen.',
      nodes: [
        { label: 'Schepping van de aarde', sub: 'Fuṣṣilat 41:9–11', page: 42 },
        { label: 'Schepping van de hemel', sub: 'gebouwd en hoog verheven', page: 42 },
        { label: 'Uitspreiden van de aarde', sub: 'water, weidegrond en bergen', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'Twee groepen op de dag van de grote ramp',
      intro: 'Zoals in vers 37–41.',
      columns: ['Kenmerk', 'Verblijf'],
      rows: [
        { label: 'Wie overtrad', cells: ['ging over de grens en verkoos het wereldse leven', 'de Hel'] },
        { label: 'Wie de positie van zijn Heer vreesde', cells: ['weerhield zichzelf van begeerte', 'het Paradijs'] }
      ],
      page: 45
    }
  ],
  sections: [
    { title: 'Hard wegtrekken en zacht losmaken', text: 'De engelen spreken de ziel van de ongelovige aan met de lelijkste beschrijvingen, zodat zij wegvlucht en zich door het lichaam verspreidt; de ziel van de gelovige spreken zij aan met de mooiste, zodat het vertrek haar licht valt. Het boek schrijft deze woorden niet aan een hadith toe.', page: 33 },
    { title: 'Zachtheid bij het uitnodigen', text: '"Zeg: wil jij je reinigen?" Zachte woorden trekken harten aan en maken een positief antwoord waarschijnlijker.', page: 39 },
    { title: '"Toen keerde hij zich af en spande zich in"', text: 'Firʿawn deed zijn uiterste best om zijn volk te overtuigen; laat de moslim dan ook zijn uiterste best doen om de islam te verspreiden en zijn godsdienst te verdedigen.', page: 39 },
    { title: 'De straf van het hiernamaals eerst', text: 'Die wordt eerst genoemd omdat zij zwaarder en blijvender is: dat is de werkelijke straf.', page: 39 },
    { title: 'Het zien van de Hel', text: 'De gelovige ziet haar om de waarde van de genade te beseffen; de ongelovige om hem bang te maken voordat hij erin gaat.', page: 45 },
    { title: 'De geringheid van deze wereld', text: 'Zij is als één avond of één ochtend; een verstandig mens laat daarvoor het hiernamaals niet schieten.', page: 49 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'Khashya en angst', items: ['khashya: vrees met kennis', 'angst zonder kennis'], page: 38, origin: 'boek' },
    { kind: 'opsomming', title: 'Wie Firʿawn bijeenriep', items: ['zijn vertrouwelingen voor overleg', 'zijn soldaten voor de strijd', 'het volk voor de feestdag'], page: 38, origin: 'boek' },
    { kind: 'onderscheid', title: 'ʿAshiyya en ḍuḥā', items: ['ʿashiyya: van de middag tot zonsondergang', 'ḍuḥā: van zonsopgang tot het midden van de dag'], page: 48, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: [],
  review: [
    'De eed bij de engelen past bij de weerlegging van wie de opwekking ontkent.',
    'Mūsā en Firʿawn: een waarschuwing voor de veelgodenaanbidders en een troost voor de gelovigen.',
    'Eerst de aarde, dan de hemel, dan het uitspreiden van de aarde.',
    'Wie overtrad gaat naar de Hel; wie de positie van zijn Heer vreesde naar het Paradijs.',
    'De kennis van het Uur is bij Allah; de Profeet ﷺ is een waarschuwer.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie zijn an-nāshiṭāt?', options: ['de engelen die de zielen van de gelovigen zacht losmaken', 'de engelen die de zielen van de ongelovigen wegtrekken', 'de sterren', 'de winden'], answer: 0, explain: 'Als een strik die makkelijk losgaat.', page: 33 },
    { type: 'tf', q: 'De naam ʿAzrāʾīl voor de engel van de dood staat vast in Koran en Sunna.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het boek zegt dat deze naam fout is: er is geen bewijs voor.', page: 34 },
    { type: 'mc', q: 'Waarom heet de vlakte as-sāhira?', options: ['omdat de slaap van angst uit de ogen verdwijnt', 'omdat zij wit is', 'omdat er niets groeit', 'omdat zij in de hemel ligt'], answer: 0, explain: 'Het is de aarde waarop Allah de mensen verzamelt.', page: 36 },
    { type: 'mc', q: 'Waarom staat de straf van het hiernamaals vóór die van deze wereld?', options: ['omdat zij zwaarder en blijvender is', 'omdat zij eerst kwam', 'alleen voor het rijm', 'omdat zij lichter is'], answer: 0, explain: 'Dat is de werkelijke straf.', page: 39 },
    { type: 'mc', q: 'Hoe passen Fuṣṣilat en "daarna spreidde Hij de aarde uit" bij elkaar?', options: ['eerst de aarde, dan de hemel, dan het uitspreiden van de aarde', 'de hemel kwam in alles eerst', 'hemel en aarde tegelijk', 'zij spreken elkaar tegen'], answer: 0, explain: 'Het uitspreiden kwam na de hemel; de schepping van de aarde zelf ervoor.', page: 42 },
    { type: 'tf', q: '"Jij bent slechts een waarschuwer voor wie het vreest" betekent dat de Profeet ﷺ anderen niet waarschuwt.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Bedoeld is dat wie Allah vreest baat heeft bij de waarschuwing.', page: 49 }
  ]),
  note: 'Oefeningen van het boek op p. 36, 40, 43, 46 en 50. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tafsir', chapter: '7', unit: 2, ar, nl }
