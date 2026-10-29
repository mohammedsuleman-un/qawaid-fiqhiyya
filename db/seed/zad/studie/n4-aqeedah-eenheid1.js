// Hoofdstukkaart bij العقيدة (٤), eenheid 1: البدعة وضوابطها (lessen 1–5, boek p. 9–21).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Het kader met uitspraken van de vroegen (p. 14) is in het
// boek "alleen ter kennisname".
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٤)، سلسلة زاد العلمية',
  pages: '9–21',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'إنه من يعش منكم بعدي فسيرى اختلافا كثيرا، فعليكم بسنتي وسنة الخلفاء المهديين الراشدين، تمسكوا بها وعضوا عليها بالنواجذ، وإياكم ومحدثات الأمور، فإن كل محدثة بدعة، وكل بدعة ضلالة', takhrij: 'رواه أحمد وأبو داود والترمذي وابن ماجه، وصححه الألباني', note: 'من أدلة تحريم البدع.', pages: [11], nl: 'Wie van jullie na mij leeft, zal veel onenigheid zien. Houd je dan aan mijn Sunna en aan de Sunna van de rechtgeleide, rechtschapen kaliefen; houd je eraan vast en bijt erop met je kiezen. Pas op voor nieuw bedachte zaken, want elke nieuw bedachte zaak is een vernieuwing (bidʿa), en elke bidʿa is dwaling', nlNote: 'Een van de bewijzen dat vernieuwingen verboden zijn.' },
  { narrator: '', text: 'من أحدث في أمرنا هذا ما ليس منه فهو رد', takhrij: 'متفق عليه', note: 'قال ابن حجر: هذا الحديث معدود من أصول الإسلام. وفي رواية: «من عمل عملا ليس عليه أمرنا فهو رد».', pages: [11], nl: 'wie in deze zaak van ons iets nieuws invoert wat er niet bij hoort, dat wordt afgewezen', nlNote: 'Ibn Ḥajar: deze hadith geldt als een van de grondslagen van de islam. In een andere overlevering: "wie een daad verricht die niet volgens onze zaak is, die wordt afgewezen".' },
  { narrator: 'ابن مسعود', text: 'اتبعوا ولا تبتدعوا فقد كفيتم، وكل بدعة ضلالة', takhrij: '', note: 'أثر.', pages: [11], nl: 'Volg en vernieuw niet, want jullie hebben genoeg gekregen; en elke vernieuwing is dwaling', nlNote: 'Een uitspraak van Ibn Masʿūd.' },
  { narrator: 'ابن عباس', text: 'عليك بتقوى الله والاستقامة، اتبع ولا تبتدع', takhrij: '', note: 'أثر، قاله لعثمان بن حاضر الأزدي لما طلب منه الوصية.', pages: [11], nl: 'Houd vast aan godsvrees en standvastigheid; volg en vernieuw niet', nlNote: 'Een uitspraak van Ibn ʿAbbās tegen ʿUthmān ibn Ḥāḍir al-Azdī, die om raad vroeg.' },
  { narrator: 'ابن عباس', text: 'لا يأتي على الناس عام إلا أحدثوا فيه بدعة، وأماتوا فيه سنة، حتى تحيا البدع وتموت السنن', takhrij: '', note: 'أثر: البدعة تخفي السنة.', pages: [12], nl: 'Er komt geen jaar over de mensen of ze voeren een vernieuwing in en laten een Sunna sterven, tot de vernieuwingen leven en de Sunna’s sterven', nlNote: 'Een uitspraak van Ibn ʿAbbās: vernieuwing verdringt de Sunna.' },
  { narrator: 'سهل بن سعد', text: 'إني فرطكم على الحوض، من مر علي شرب، ومن شرب لم يظمأ أبدا، ليردن علي أقوام أعرفهم ويعرفوني، ثم يحال بيني وبينهم، فأقول: إنهم مني، فيقال: إنك لا تدري ما أحدثوا بعدك، فأقول: سحقا سحقا لمن غير بعدي', takhrij: 'متفق عليه', note: 'البدعة توجب الحرمان من حوض النبي ﷺ.', pages: [13], nl: 'Ik ga jullie voor naar het Bassin. Wie langs mij komt, drinkt, en wie drinkt, krijgt nooit meer dorst. Er zullen mensen naar mij toe komen die ik ken en die mij kennen; dan wordt er een scheiding tussen ons gemaakt. Ik zeg: zij horen bij mij. Dan wordt gezegd: jij weet niet wat zij na jou hebben ingevoerd. Dan zeg ik: weg, weg met wie na mij veranderde', nlNote: 'Vernieuwing ontneemt iemand het Bassin van de Profeet ﷺ.' },
  { narrator: '', text: 'من سن في الإسلام سنة حسنة فله أجرها وأجر من عمل بها بعده من غير أن ينقص من أجورهم شيء', takhrij: 'أخرجه مسلم', note: 'يحتج به من قسم البدعة إلى حسنة وسيئة؛ والمقصود من أحيا سنة ثابتة بأصل الشرع، بدليل سبب الحديث.', pages: [15], nl: 'wie in de islam een goede gewoonte begint, krijgt de beloning ervan en de beloning van wie het na hem doet, zonder dat iets van hun beloning afgaat', nlNote: 'Wordt aangehaald door wie bidʿa in goed en slecht verdeelt; bedoeld is wie een Sunna doet herleven die in de sharīʿa vastligt, zoals de aanleiding van de hadith laat zien.' },
  { narrator: 'عمر', text: 'نعم البدعة هذه', takhrij: 'أخرجه البخاري', note: 'قاله في صلاة التراويح جماعة؛ وأراد المعنى اللغوي، فقيام رمضان سنة تركها النبي ﷺ خشية أن تفرض.', pages: [15], nl: 'Wat een goede nieuwigheid is dit', nlNote: 'ʿUmar zei dit over het gezamenlijke tarāwīḥ-gebed; hij bedoelde de taalkundige betekenis, want het nachtgebed in Ramadan is Sunna die de Profeet ﷺ alleen liet uit vrees dat het verplicht zou worden.' },
  { narrator: 'ابن عباس', text: 'أن معاوية كان يستلم الأركان كلها، فقال له ابن عباس: «لم تستلم هذين الركنين، ولم يكن ﷺ يستلمهما؟!» فقال معاوية: ليس شيء من البيت مهجورا، فقال ابن عباس: ﴿لقد كان لكم في رسول الله أسوة حسنة﴾، فقال معاوية: صدقت', takhrij: 'أخرجه أحمد والترمذي بإسناد صحيح، وأصله في الصحيحين', note: 'في إنكار تخصيص العبادة بمكان بغير دليل.', pages: [17], nl: 'Muʿāwiya raakte alle hoeken (van de Kaʿba) aan. Ibn ʿAbbās zei: "Waarom raak je deze twee hoeken aan, terwijl de Profeet ﷺ ze niet aanraakte?" Muʿāwiya zei: niets van het Huis wordt verwaarloosd. Ibn ʿAbbās zei: "In de Boodschapper van Allah hebben jullie een goed voorbeeld." Muʿāwiya zei: je hebt gelijk', nlNote: 'Bij het afwijzen van aanbidding die zonder bewijs aan een plaats wordt gebonden.' },
  { narrator: '', text: 'الصلاة خير موضوع، فمن استطاع أن يستكثر فليستكثر', takhrij: 'أخرجه الطبراني وحسنه الألباني', note: 'أصل النوافل ثابت؛ ولذلك سميت بدع كصلاة الرغائب إضافية.', pages: [19], nl: 'het gebed is het beste wat is voorgeschreven; wie veel kan bidden, laat hem veel bidden', nlNote: 'Vrijwillige gebeden zijn in principe voorgeschreven; daarom heten vernieuwingen als ṣalāt ar-raghāʾib "toegevoegde" vernieuwingen.' },
  { narrator: '', text: 'من قرأ ﴿قل هو الله أحد﴾ حتى يختمها عشر مرات، بنى الله له قصرا في الجنة', takhrij: 'أخرجه أحمد وصححه الألباني', note: 'قراءة الإخلاص مشروعة، لكن تسميتها «العتاقة الكبرى» والتزام مائة ألف مرة بدعة.', pages: [20], nl: 'wie "Zeg: Hij is Allah, Eén" tien keer helemaal reciteert, voor hem bouwt Allah een paleis in het Paradijs', nlNote: 'Het reciteren van al-Ikhlāṣ is voorgeschreven, maar het "de grote bevrijding" noemen en honderdduizend keer verplichten is een vernieuwing.' }
]

const TAKHRIJ_NL = {
  'رواه أحمد وأبو داود والترمذي وابن ماجه، وصححه الألباني': 'Aḥmad, Abū Dāwūd, at-Tirmidhī en Ibn Māja; authentiek volgens al-Albānī',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه مسلم': 'Muslim',
  'أخرجه البخاري': 'al-Bukhārī',
  'أخرجه أحمد والترمذي بإسناد صحيح، وأصله في الصحيحين': 'Aḥmad en at-Tirmidhī met een authentieke keten; de kern staat bij al-Bukhārī en Muslim',
  'أخرجه الطبراني وحسنه الألباني': 'aṭ-Ṭabarānī; goed (ḥasan) volgens al-Albānī',
  'أخرجه أحمد وصححه الألباني': 'Aḥmad; authentiek volgens al-Albānī'
}
const NARRATOR_NL = { 'ابن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'ابن عباس': 'Ibn ʿAbbās', 'سهل بن سعد': 'Sahl ibn Saʿd', 'عمر': 'ʿUmar ibn al-Khaṭṭāb' }

const PERSONS = [
  ['ibn-masud', 'text', [11, 14], 'قال: «اتبعوا ولا تبتدعوا فقد كفيتم»، و«الاقتصاد في السنة خير من الاجتهاد في البدعة».', 'Zei: "volg en vernieuw niet", en "gematigdheid in de Sunna is beter dan inspanning in een vernieuwing".'],
  ['ibn-abbas', 'text', [11, 12, 17], 'أوصى: «اتبع ولا تبتدع»، وقال: لا يأتي عام إلا أحدثوا فيه بدعة وأماتوا سنة، وأنكر على معاوية استلام الأركان كلها.', 'Gaf als raad: "volg en vernieuw niet"; zei dat elk jaar een vernieuwing een Sunna verdringt; en wees Muʿāwiya terecht om het aanraken van alle hoeken.'],
  ['uthman-ibn-hadir', 'text', [11], 'طلب الوصية من ابن عباس.', 'Vroeg Ibn ʿAbbās om raad.'],
  ['ibn-hajar-al-asqalani', 'text', [11], 'قال: حديث «من أحدث في أمرنا» معدود من أصول الإسلام.', 'Zei: de hadith "wie iets nieuws invoert" geldt als een grondslag van de islam.'],
  ['malik-ibn-anas', 'text', [11, 13], 'قال: من ابتدع بدعة يراها حسنة فقد زعم أن محمدا ﷺ خان الرسالة؛ ونهى من أراد الإحرام قبل الميقات.', 'Zei: wie een vernieuwing invoert die hij goed vindt, beweert dat Muḥammad ﷺ de boodschap verraden heeft; en hield iemand tegen die vóór de mīqāt in iḥrām wilde gaan.'],
  ['said-ibn-al-musayyab', 'text', [12], 'قال لمن صلى في وقت النهي: «يعذبك على خلاف السنة».', 'Zei tegen iemand die op een verboden tijd bad: "Hij straft je voor het afwijken van de Sunna."'],
  ['ahmad-ibn-hanbal', 'text', [13], 'قال: الكلام في أهل البدع للمسلمين، فهو أفضل من الصلاة والاعتكاف لنفسه.', 'Zei: spreken over de mensen van vernieuwing is voor de moslims, en daarom beter dan bidden en zich terugtrekken voor jezelf.'],
  ['sahl-ibn-sad', 'text', [13], 'روى حديث الحوض.', 'Overleverde de hadith over het Bassin.'],
  ['ibn-taymiyya', 'text', [14, 16], 'قال: الأصل في العبادات ألا يشرع منها إلا ما شرعه الله، والأصل في العادات ألا يحظر منها إلا ما حظره الله؛ وأنكر سلب عموم «كل بدعة ضلالة».', 'Zei: bij aanbidding geldt alleen wat Allah voorschreef, bij gewoonten is alleen verboden wat Allah verbood; en verwierp het beperken van "elke bidʿa is dwaling".'],
  ['ibn-al-qayyim', 'text', [14], 'بين الفرق بين العبادات والمعاملات.', 'Legde het verschil uit tussen aanbidding en omgang (transacties).'],
  ['al-awzai', 'text', [14], 'قال: «اصبر نفسك على السنة، وقف حيث وقف القوم».', 'Zei: "Houd je geduldig aan de Sunna en stop waar zij stopten."'],
  ['ayyub-as-sakhtiyani', 'text', [14], 'قال: ما ازداد صاحب بدعة اجتهادا إلا ازداد من الله بعدا.', 'Zei: hoe meer de vernieuwer zich inspant, hoe verder hij van Allah raakt.'],
  ['sufyan-ibn-uyayna', 'text', [14], 'استدل بآية الأعراف ١٥٢ على ذلة كل مبتدع.', 'Gebruikte al-Aʿrāf 7:152 als bewijs voor de vernedering van elke vernieuwer.'],
  ['sufyan-ath-thawri', 'text', [14], 'قال: البدعة أحب إلى إبليس من المعصية.', 'Zei: vernieuwing is Iblīs liever dan zonde.'],
  ['umar-ibn-al-khattab', 'text', [15], 'قال في التراويح: «نعم البدعة هذه»، وأراد المعنى اللغوي.', 'Zei over de tarāwīḥ: "wat een goede nieuwigheid", in de taalkundige betekenis.'],
  ['muawiya-ibn-abi-sufyan', 'text', [17], 'رجع إلى قول ابن عباس في استلام الأركان.', 'Gaf Ibn ʿAbbās gelijk over het aanraken van de hoeken.'],
  ['ash-shatibi', 'text', [16], 'ذكر من البدع التزام الكيفيات والهيئات المعينة، وتخصيص عبادات بأوقات لم يرد فيها تعيين.', 'Noemde als vernieuwingen het vastleggen van bepaalde vormen en het binden van aanbidding aan tijden zonder bewijs.'],
  ['al-bukhari', 'takhrij', [11, 13, 15], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [11, 13, 15], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['al-albani', 'takhrij', [11, 19, 20], 'صحح أو حسن أحاديث من الوحدة.', 'Verklaarde hadith van deze eenheid authentiek of goed.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'البدعة وضوابطها',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف البدعة وحكمها وأدلة تحريمها، وخطرها، والفرق بين العادات والعبادات، والرد على من قسمها إلى حسنة وسيئة، وأمثلة البدع بالتخصيص، وأقسامها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'البدعة وضوابطها', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'التعريف والحكم', sub: 'الدرس ١', page: 10, children: ['طريقة مخترعة في التعبد', 'كلها محرمة'] },
      { label: 'خطرها', sub: 'الدرس ٢', page: 11, children: ['طعن في الدين', 'تشويه الدين', 'إخفاء السنة', 'العذاب', 'الحرمان من الحوض'] },
      { label: 'العادات والعبادات', sub: 'الدرس ٣', page: 13, children: ['العادات: الإباحة', 'العبادات: المنع', 'لا بدعة حسنة'] },
      { label: 'أمثلة بالتخصيص', sub: 'الدرس ٤', page: 16, children: ['بالزمان', 'بالمكان', 'بالعدد', 'بالهيئة'] },
      { label: 'أقسامها', sub: 'الدرس ٥', page: 18, children: ['مكفرة وغير مكفرة', 'حقيقية وإضافية', 'كلية'] }
    ]
  },
  points: [
    { text: 'البدعة شرعًا: طريقة مخترعة في التعبد بغير دليل من كتاب الله أو سنة رسوله ﷺ.', page: 10 },
    { text: 'البدع في الدين كلها محرمة، و«كل بدعة ضلالة».', page: 10 },
    { text: 'البدعة طعن في كمال الدين، وتشوهه، وتخفي السنة، وسبب للعذاب والحرمان من الحوض.', page: 11 },
    { text: 'الأصل في العادات الإباحة، والأصل في العبادات المنع حتى يقوم الدليل.', page: 13 },
    { text: 'تقسيم البدعة المحدثة إلى حسنة وسيئة غير صحيح.', page: 15 },
    { text: 'من البدع تخصيص العبادة بزمان أو مكان أو عدد أو هيئة بغير دليل، كالاحتفال بالمولد.', page: 16 },
    { text: 'البدعة مكفرة وغير مكفرة، وحقيقية وإضافية، وقد تكون كلية.', page: 18 },
    { text: 'أعظم التحصين من البدع التعلم والتفقه في دين الله، وعرض العمل على الكتاب والسنة.', page: 20 }
  ],
  terms: [
    { term: 'البدعة', translit: 'al-bidʿa', meaning: 'لغة: الشيء المخترع على غير مثال سابق.', explanation: 'شرعًا: طريقة مخترعة في التعبد بغير دليل من كتاب الله أو سنة رسوله ﷺ.', notes: ['[البقرة: ١١٧]'], page: 10 },
    { term: 'محدثات الأمور', translit: 'muḥdathāt al-umūr', meaning: 'ما أحدث في الدين مما ليس منه.', explanation: '«فإن كل محدثة بدعة، وكل بدعة ضلالة».', notes: [], page: 11 },
    { term: 'العادات', translit: 'al-ʿādāt', meaning: 'الأمور الدنيوية كالسيارة والحاسوب؛ الأصل فيها الإباحة.', explanation: 'لا يحظر منها إلا ما حظره الله.', notes: ['[البقرة: ٢٩]'], page: 13 },
    { term: 'العبادات', translit: 'al-ʿibādāt', meaning: 'الأصل فيها الحظر والمنع حتى يقوم الدليل على المشروعية.', explanation: 'لا يشرع منها إلا ما شرعه الله.', notes: ['[الشورى: ٢١]'], page: 13 },
    { term: 'البدعة المكفرة', translit: 'al-bidʿa al-mukaffira', meaning: 'التي تدخل في دائرة الشرك الأكبر.', explanation: 'كالطواف بقبور الصالحين مع دعائهم، أو الذبح لهم.', notes: [], page: 18 },
    { term: 'البدعة غير المكفرة', translit: 'al-bidʿa ghayr al-mukaffira', meaning: 'ما كانت دون الشرك الأكبر.', explanation: 'كالاحتفال بالمولد، والذكر والدعاء الجماعي.', notes: [], page: 18 },
    { term: 'البدعة الحقيقية', translit: 'al-bidʿa al-ḥaqīqiyya', meaning: 'ما كان الابتداع فيها من جميع وجوهها، بلا أصل من كتاب أو سنة أو إجماع.', explanation: 'كالرهبانية، وتعذيب النفس تعبدًا، والوقوف في الحج على غير عرفة.', notes: ['[الحديد: ٢٧]'], page: 18 },
    { term: 'البدعة الإضافية', translit: 'al-bidʿa al-iḍāfiyya', meaning: 'ما لها تعلق بالدليل الشرعي من وجه، لكن صفتها لم تثبت.', explanation: 'كصلاة الرغائب، وصلاة ليلة النصف من شعبان، والقراءة الصمدية.', notes: [], page: 19 },
    { term: 'البدعة الكلية', translit: 'al-bidʿa al-kulliyya', meaning: 'التي يكون الخلل الناشئ عنها كليًا في الشريعة.', explanation: 'كإنكار الأخبار النبوية والاكتفاء بالقرآن، وعدم الأخذ بأخبار الآحاد.', notes: [], page: 21 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'خطر البدعة',
      intro: 'كما في الدرس الثاني.',
      nodes: [
        { label: 'طعن في الدين', sub: 'كأن الشريعة ناقصة [المائدة: ٣]', page: 11 },
        { label: 'تشويه الدين', sub: 'حتى تصد الناس عنه', page: 12 },
        { label: 'إخفاء السنة', sub: 'حتى تحيا البدع وتموت السنن', page: 12 },
        { label: 'سبب للعذاب', sub: '[النور: ٦٣]', page: 12 },
        { label: 'الحرمان من الحوض', sub: '«سحقا سحقا لمن غير بعدي»', page: 13 }
      ]
    },
    {
      type: 'compare',
      title: 'العادات والعبادات',
      intro: 'هل السيارة والحاسوب بدعة؟ لا.',
      columns: ['العادات', 'العبادات'],
      rows: [
        { label: 'الأصل', cells: ['الإباحة', 'الحظر والمنع'] },
        { label: 'القاعدة', cells: ['لا يحظر إلا ما حظره الله', 'لا يشرع إلا ما شرعه الله'] },
        { label: 'الدليل', cells: ['[البقرة: ٢٩]', '[الشورى: ٢١]'] }
      ],
      page: 13
    },
    {
      type: 'compare',
      title: 'هل هناك بدعة حسنة؟',
      intro: 'أبرز أدلة من قسم البدعة، والجواب عنها.',
      columns: ['الدليل', 'الجواب'],
      rows: [
        { label: '«من سن في الإسلام سنة حسنة»', cells: ['أخرجه مسلم', 'المقصود من أحيا سنة ثابتة بأصل الشرع، كما يدل عليه سبب الحديث'] },
        { label: '«نعم البدعة هذه»', cells: ['قول عمر في التراويح', 'أراد المعنى اللغوي؛ فقيام رمضان سنة تركها النبي ﷺ خشية أن تفرض'] }
      ],
      page: 15
    },
    {
      type: 'cards',
      title: 'البدع بالتخصيص',
      intro: 'تخصيص عبادة بغير دليل.',
      nodes: [
        { label: 'بالزمان', sub: 'كالمولد، وصيام النصف من شعبان وقيام ليلته', page: 16 },
        { label: 'بالمكان', sub: 'كالصلاة في غار حراء وثور، والصلاة عند قبور الأولياء', page: 17 },
        { label: 'بالعدد', sub: 'كقراءة يس أربعين مرة لتفريج كرب', page: 17 },
        { label: 'بالهيئة', sub: 'كالاجتماع على شيخ بطريقة معينة وأوراد ما أنزل الله بها من سلطان', page: 17 }
      ]
    },
    {
      type: 'tree',
      title: 'أقسام البدعة',
      intro: 'باعتبارين، كما في مخطط الكتاب.',
      root: { label: 'البدعة', page: 18 },
      nodes: [
        { label: 'باعتبار الكفر', children: ['مكفرة: كالطواف بالقبور ودعاء أهلها', 'غير مكفرة: كالمولد والذكر الجماعي'], page: 18 },
        { label: 'باعتبار الأصل', children: ['حقيقية: لا أصل لها أبدًا', 'إضافية: لها تعلق بدليل من وجه'], page: 18 }
      ]
    },
    {
      type: 'steps',
      title: 'أصول تقيك الوقوع في البدعة',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'اعرض العمل على الكتاب والسنة', page: 20 },
        { label: 'السنة فعل ما فعله ﷺ وترك ما تركه', page: 20 },
        { label: 'خير الهدي هدي محمد ﷺ وأصحابه', page: 20 },
        { label: 'الأصل في العبادات المنع', page: 20 },
        { label: 'استشعر خطر البدعة وما فيها من استدراك على الشرع', page: 20 },
        { label: 'تعلم وتفقه في دين الله', page: 20 }
      ]
    }
  ],
  sections: [
    { title: 'أهمية الموضوع', text: 'الحديث عن البدعة من أخطر المواضيع، وفيه حماية للكتاب والسنة؛ فقد تروج البدع كأنها سنة، وغالبًا ما يكون قصد مروجيها حسنًا ولا يعلمون أنهم يضرون أنفسهم وغيرهم.', more: '[الكهف: ١٠٣–١٠٤].', page: 10 },
    { title: 'البدعة طعن في الدين', text: 'قال مالك: «من ابتدع في الإسلام بدعة يراها حسنة فقد زعم أن محمدًا ﷺ خان الرسالة؛ لأن الله يقول: ﴿اليوم أكملت لكم دينكم﴾».', more: 'فكل من ابتدع شيئًا إنما هو لظنه نقص الشريعة.', page: 11 },
    { title: 'سبب للعذاب', text: 'رأى سعيد بن المسيب رجلًا يصلي في وقت نهي فنهاه، فقال: أيعذبني الله على الصلاة؟ قال: «لا، ولكن يعذبك على خلاف السنة».', more: 'وسئل مالك عن الإحرام قبل الميقات فقال: «وأي فتنة أعظم من أن ترى أنك خصصت بفضل لم يخص به رسول الله ﷺ؟!».', page: 12 },
    { title: 'من تحذير السلف (للاطلاع فقط)', text: 'قال ابن مسعود: «الاقتصاد في السنة خير من الاجتهاد في البدعة»، وقال سفيان الثوري: «البدعة أحب إلى إبليس من المعصية؛ لأن المعصية يتاب منها، وإن البدعة لا يتاب منها».', more: 'هذا المقطع في الكتاب للاطلاع فقط.', page: 14 },
    { title: 'بدعة الاحتفال بالمولد', text: 'لا يجوز الاحتفال بمولد الرسول ﷺ؛ لأنه لم يفعله هو ولا خلفاؤه الراشدون ولا الصحابة ولا التابعون في القرون المفضلة، وهم أعلم الناس بالسنة وأكمل حبًا له.', more: '', page: 16 },
    { title: 'لماذا سميت إضافية؟', text: 'لأن أصل العمل مشروع كالصلاة النافلة وقراءة الإخلاص، لكن تخصيصه بوقت أو عدد أو فضل لم يثبت.', more: 'وأكثر البدع عند أصحاب الطرق من هذا النوع.', page: 19 }
  ],
  keycards: [
    { kind: 'definitie', title: 'البدعة', items: ['لغة: المخترع على غير مثال سابق.', 'شرعًا: طريقة مخترعة في التعبد بغير دليل من الكتاب أو السنة.'], page: 10, origin: 'boek' },
    { kind: 'onderscheid', title: 'العادات والعبادات', items: ['العادات: الأصل الإباحة.', 'العبادات: الأصل المنع حتى يقوم الدليل.'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'التخصيص بلا دليل', items: ['بالزمان', 'بالمكان', 'بالعدد', 'بالهيئة'], page: 16, origin: 'boek' },
    { kind: 'onderscheid', title: 'الحقيقية والإضافية', items: ['الحقيقية: لا أصل لها من وجه.', 'الإضافية: لها أصل في الجملة، لكن صفتها لم تثبت.'], page: 18, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'البدعة: طريقة مخترعة في التعبد بلا دليل.',
    'كل بدعة ضلالة، ولا بدعة حسنة في الدين.',
    'خطرها: طعن في الدين، تشويهه، إخفاء السنة، العذاب، الحرمان من الحوض.',
    'العادات الأصل فيها الإباحة، والعبادات الأصل فيها المنع.',
    'التخصيص بلا دليل: بالزمان أو المكان أو العدد أو الهيئة.',
    'أقسامها: مكفرة وغير مكفرة، حقيقية وإضافية، وكلية.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما تعريف البدعة شرعًا؟', options: ['طريقة مخترعة في التعبد بغير دليل', 'كل شيء جديد', 'كل ما لم يكن في عهد النبي ﷺ من أمور الدنيا', 'المعصية'], answer: 0, explain: 'كما في الكتاب.', page: 10 },
    { type: 'tf', q: 'السيارة والحاسوب من البدع.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هذه عادات، والأصل في العادات الإباحة.', page: 13 },
    { type: 'mc', q: 'ما الأصل في العبادات؟', options: ['المنع حتى يقوم الدليل', 'الإباحة', 'الكراهة', 'الاستحباب'], answer: 0, explain: '[الشورى: ٢١].', page: 13 },
    { type: 'mc', q: 'ماذا أراد عمر بقوله «نعم البدعة هذه»؟', options: ['المعنى اللغوي', 'البدعة الشرعية الحسنة', 'إنكار التراويح', 'بدعة إضافية'], answer: 0, explain: 'قيام رمضان سنة تركها النبي ﷺ لمانع زال بوفاته.', page: 15 },
    { type: 'mc', q: 'من أي أنواع التخصيص قراءة سورة يس أربعين مرة لتفريج كرب؟', options: ['بالعدد', 'بالزمان', 'بالمكان', 'بالهيئة'], answer: 0, explain: 'التزام عدد بلا دليل.', page: 17 },
    { type: 'mc', q: 'ما نوع بدعة صلاة الرغائب؟', options: ['إضافية', 'حقيقية', 'مكفرة', 'كلية'], answer: 0, explain: 'لأن أصل النوافل ثابت، لكن هذه الصفة لم تثبت.', page: 19 },
    { type: 'mc', q: 'أي هذه بدعة مكفرة؟', options: ['الطواف بقبور الصالحين ودعاؤهم', 'الاحتفال بالمولد', 'الذكر الجماعي', 'صلاة الرغائب'], answer: 0, explain: 'لأنها تدخل في الشرك الأكبر.', page: 18 },
    { type: 'tf', q: 'إنكار السنة والاكتفاء بالقرآن بدعة كلية.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كبدعة القرآنيين.', page: 21 }
  ]),
  note: 'نشاط الكتاب في صفحة ٢١.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'De bidʿa en haar maatstaven',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Wat een religieuze vernieuwing (bidʿa) is, het oordeel en de bewijzen voor het verbod, het gevaar ervan, het verschil tussen gewoonten en aanbidding, het weerwoord op de indeling in goede en slechte bidʿa, voorbeelden van vernieuwing door aanbidding ergens aan te binden, en de soorten.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (4), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De bidʿa en haar maatstaven', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Definitie en oordeel', sub: 'les 1', page: 10, children: ['een bedachte vorm van aanbidding', 'allemaal verboden'] },
      { label: 'Het gevaar', sub: 'les 2', page: 11, children: ['aanval op de godsdienst', 'misvorming', 'verdringt de Sunna', 'straf', 'geen toegang tot het Bassin'] },
      { label: 'Gewoonten en aanbidding', sub: 'les 3', page: 13, children: ['gewoonten: toegestaan', 'aanbidding: verboden tot er bewijs is', 'geen goede bidʿa'] },
      { label: 'Voorbeelden', sub: 'les 4', page: 16, children: ['tijd', 'plaats', 'aantal', 'vorm'] },
      { label: 'Soorten', sub: 'les 5', page: 18, children: ['wel of geen ongeloof', 'volledig of toegevoegd', 'allesomvattend'] }
    ]
  },
  points: [
    { text: 'Religieus is bidʿa een bedachte manier van aanbidding zonder bewijs uit het Boek van Allah of de Sunna van Zijn Boodschapper ﷺ.', page: 10 },
    { text: 'Alle vernieuwingen in de godsdienst zijn verboden: "elke bidʿa is dwaling".', page: 10 },
    { text: 'Bidʿa tast de volmaaktheid van de godsdienst aan, misvormt hem, verdringt de Sunna, leidt tot straf en ontneemt iemand het Bassin.', page: 11 },
    { text: 'Bij gewoonten is het uitgangspunt dat ze toegestaan zijn; bij aanbidding dat ze verboden is tot er bewijs is.', page: 13 },
    { text: 'De indeling van nieuw bedachte bidʿa in goed en slecht is onjuist.', page: 15 },
    { text: 'Vernieuwing is ook: aanbidding zonder bewijs aan een tijd, plaats, aantal of vorm binden, zoals het vieren van de mawlid.', page: 16 },
    { text: 'Bidʿa is soms ongeloof en soms niet, volledig of toegevoegd, en kan allesomvattend zijn.', page: 18 },
    { text: 'De beste bescherming is leren en de godsdienst begrijpen, en elke daad aan Koran en Sunna toetsen.', page: 20 }
  ],
  terms: [
    { term: 'البدعة', translit: 'al-bidʿa', meaning: 'Vernieuwing. Taal: iets wat bedacht is zonder eerder voorbeeld.', explanation: 'Religieus: een bedachte manier van aanbidding zonder bewijs uit de Koran of de Sunna.', notes: ['al-Baqara 2:117'], page: 10 },
    { term: 'محدثات الأمور', translit: 'muḥdathāt al-umūr', meaning: 'Nieuw bedachte zaken: wat in de godsdienst is ingevoerd zonder erbij te horen.', explanation: '"Elke nieuw bedachte zaak is een bidʿa, en elke bidʿa is dwaling."', notes: [], page: 11 },
    { term: 'العادات', translit: 'al-ʿādāt', meaning: 'Gewoonten: wereldse zaken zoals de auto en de computer; in principe toegestaan.', explanation: 'Alleen wat Allah verbood, is verboden.', notes: ['al-Baqara 2:29'], page: 13 },
    { term: 'العبادات', translit: 'al-ʿibādāt', meaning: 'Aanbidding: in principe verboden tot er bewijs is dat ze is voorgeschreven.', explanation: 'Alleen wat Allah voorschreef, is voorgeschreven.', notes: ['ash-Shūrā 42:21'], page: 13 },
    { term: 'البدعة المكفرة', translit: 'al-bidʿa al-mukaffira', meaning: 'Vernieuwing die ongeloof is: valt onder grote shirk.', explanation: 'Zoals rondgaan om graven van vromen en hen aanroepen, of voor hen slachten.', notes: [], page: 18 },
    { term: 'البدعة غير المكفرة', translit: 'al-bidʿa ghayr al-mukaffira', meaning: 'Vernieuwing onder het niveau van grote shirk.', explanation: 'Zoals de mawlid vieren en gezamenlijk gedenken of bidden.', notes: [], page: 18 },
    { term: 'البدعة الحقيقية', translit: 'al-bidʿa al-ḥaqīqiyya', meaning: 'Volledige vernieuwing: in alle opzichten bedacht, zonder enige basis in Koran, Sunna of consensus.', explanation: 'Zoals monnikendom, zichzelf pijnigen als aanbidding, of tijdens de hadj ergens anders dan op ʿArafa staan.', notes: ['al-Ḥadīd 57:27'], page: 18 },
    { term: 'البدعة الإضافية', translit: 'al-bidʿa al-iḍāfiyya', meaning: 'Toegevoegde vernieuwing: heeft in één opzicht een basis in het bewijs, maar de vorm is niet bevestigd.', explanation: 'Zoals ṣalāt ar-raghāʾib, het gebed in de nacht van half Shaʿbān en de "ṣamadiyya"-recitatie.', notes: [], page: 19 },
    { term: 'البدعة الكلية', translit: 'al-bidʿa al-kulliyya', meaning: 'Allesomvattende vernieuwing: de schade raakt de sharīʿa als geheel.', explanation: 'Zoals alle hadith verwerpen en alleen de Koran aanvaarden, of hadith van enkele overleveraars (āḥād) niet aanvaarden.', notes: [], page: 21 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'Het gevaar van bidʿa',
      intro: 'Zoals in les 2.',
      nodes: [
        { label: 'Een aanval op de godsdienst', sub: 'alsof de sharīʿa onvolledig is (al-Māʾida 5:3)', page: 11 },
        { label: 'De godsdienst misvormen', sub: 'tot mensen erdoor afgeschrikt worden', page: 12 },
        { label: 'De Sunna verdringen', sub: 'tot vernieuwingen leven en Sunna’s sterven', page: 12 },
        { label: 'Een oorzaak van straf', sub: 'an-Nūr 24:63', page: 12 },
        { label: 'Geen toegang tot het Bassin', sub: '"weg met wie na mij veranderde"', page: 13 }
      ]
    },
    {
      type: 'compare',
      title: 'Gewoonten en aanbidding',
      intro: 'Zijn de auto en de computer bidʿa? Nee.',
      columns: ['Gewoonten', 'Aanbidding'],
      rows: [
        { label: 'Uitgangspunt', cells: ['toegestaan', 'verboden'] },
        { label: 'Regel', cells: ['alleen verboden wat Allah verbood', 'alleen voorgeschreven wat Allah voorschreef'] },
        { label: 'Bewijs', cells: ['al-Baqara 2:29', 'ash-Shūrā 42:21'] }
      ],
      page: 13
    },
    {
      type: 'compare',
      title: 'Bestaat er een goede bidʿa?',
      intro: 'De belangrijkste argumenten van wie bidʿa indeelt, en het antwoord.',
      columns: ['Bron', 'Antwoord'],
      rows: [
        { label: '"Wie in de islam een goede gewoonte begint"', cells: ['Muslim', 'bedoeld is wie een vastgelegde Sunna doet herleven, zoals de aanleiding laat zien'] },
        { label: '"Wat een goede nieuwigheid is dit"', cells: ['ʿUmar over de tarāwīḥ', 'taalkundig bedoeld: het nachtgebed is Sunna, alleen gelaten uit vrees dat het verplicht werd'] }
      ],
      page: 15
    },
    {
      type: 'cards',
      title: 'Vernieuwing door aanbidding te binden',
      intro: 'Aanbidding zonder bewijs ergens aan binden.',
      nodes: [
        { label: 'Aan een tijd', sub: 'zoals de mawlid, of vasten en nachtgebed op half Shaʿbān', page: 16 },
        { label: 'Aan een plaats', sub: 'zoals bidden in de grotten Ḥirāʾ en Thawr, of bij graven van heiligen', page: 17 },
        { label: 'Aan een aantal', sub: 'zoals Yā Sīn veertig keer lezen om een zorg weg te nemen', page: 17 },
        { label: 'Aan een vorm', sub: 'zoals samenkomen rond een shaykh met verzonnen litanieën', page: 17 }
      ]
    },
    {
      type: 'tree',
      title: 'Soorten bidʿa',
      intro: 'Op twee manieren ingedeeld, zoals in het schema van het boek.',
      root: { label: 'Bidʿa', page: 18 },
      nodes: [
        { label: 'Naar ongeloof', children: ['ongeloof: zoals rondgaan om graven en de begravenen aanroepen', 'geen ongeloof: zoals de mawlid en gezamenlijk gedenken'], page: 18 },
        { label: 'Naar basis', children: ['volledig: helemaal geen basis', 'toegevoegd: in één opzicht een basis'], page: 18 }
      ]
    },
    {
      type: 'steps',
      title: 'Grondregels die je tegen bidʿa beschermen',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Toets elke daad aan Koran en Sunna', page: 20 },
        { label: 'Sunna is doen wat hij ﷺ deed en laten wat hij liet', page: 20 },
        { label: 'De beste leiding is die van Muḥammad ﷺ en zijn metgezellen', page: 20 },
        { label: 'Bij aanbidding geldt: verboden tot er bewijs is', page: 20 },
        { label: 'Besef het gevaar: bidʿa is de sharīʿa willen aanvullen', page: 20 },
        { label: 'Leer en begrijp de godsdienst', page: 20 }
      ]
    }
  ],
  sections: [
    { title: 'Waarom dit onderwerp belangrijk is', text: 'Bidʿa is een van de gevaarlijkste onderwerpen; dit beschermt Koran en Sunna. Vernieuwingen worden soms verspreid alsof ze Sunna zijn, en vaak bedoelen de verspreiders het goed zonder te weten dat ze zichzelf en anderen schaden.', more: 'al-Kahf 18:103–104.', page: 10 },
    { title: 'Bidʿa tast de godsdienst aan', text: 'Mālik: "Wie in de islam een vernieuwing invoert die hij goed vindt, beweert dat Muḥammad ﷺ de boodschap verraden heeft, want Allah zegt: Vandaag heb Ik jullie godsdienst voor jullie vervolmaakt."', more: 'Wie iets vernieuwt, doet dat omdat hij denkt dat de sharīʿa onvolledig is.', page: 11 },
    { title: 'Een oorzaak van straf', text: 'Saʿīd ibn al-Musayyab zag iemand op een verboden tijd bidden en hield hem tegen. De man zei: straft Allah mij voor het gebed? Hij zei: "Nee, maar Hij straft je voor het afwijken van de Sunna."', more: 'Mālik over in iḥrām gaan vóór de mīqāt: "Welke beproeving is groter dan denken dat jij een deugd hebt gekregen die de Boodschapper van Allah ﷺ niet kreeg?"', page: 12 },
    { title: 'Waarschuwingen van de vroegen (alleen ter kennisname)', text: 'Ibn Masʿūd: "Gematigdheid in de Sunna is beter dan inspanning in een vernieuwing." Sufyān ath-Thawrī: "Vernieuwing is Iblīs liever dan zonde, want van zonde toont men berouw, maar van vernieuwing niet."', more: 'Dit kader staat in het boek alleen ter kennisname.', page: 14 },
    { title: 'De mawlid vieren', text: 'Het vieren van de geboortedag van de Boodschapper ﷺ is niet toegestaan: hij deed het niet, en ook zijn kaliefen, de metgezellen en de generaties daarna niet, terwijl zij de Sunna het best kenden en hem het meest liefhadden.', more: '', page: 16 },
    { title: 'Waarom "toegevoegd"?', text: 'Omdat de daad zelf voorgeschreven is, zoals vrijwillig gebed of al-Ikhlāṣ reciteren, maar het binden aan een tijd, aantal of bijzondere beloning niet bevestigd is.', more: 'De meeste vernieuwingen bij de soefi-ordes zijn van deze soort.', page: 19 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Bidʿa', items: ['Taal: iets bedacht zonder eerder voorbeeld.', 'Religieus: een bedachte manier van aanbidding zonder bewijs uit Koran of Sunna.'], page: 10, origin: 'boek' },
    { kind: 'onderscheid', title: 'Gewoonten en aanbidding', items: ['Gewoonten: in principe toegestaan.', 'Aanbidding: in principe verboden tot er bewijs is.'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'Binden zonder bewijs', items: ['aan een tijd', 'aan een plaats', 'aan een aantal', 'aan een vorm'], page: 16, origin: 'boek' },
    { kind: 'onderscheid', title: 'Volledig en toegevoegd', items: ['Volledig: in geen enkel opzicht een basis.', 'Toegevoegd: in het algemeen een basis, maar de vorm is niet bevestigd.'], page: 18, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Bidʿa: een bedachte manier van aanbidding zonder bewijs.',
    'Elke bidʿa is dwaling; er is geen goede bidʿa in de godsdienst.',
    'Gevaar: aanval op de godsdienst, misvorming, verdringing van de Sunna, straf, geen Bassin.',
    'Gewoonten: toegestaan; aanbidding: verboden tot er bewijs is.',
    'Binden zonder bewijs: aan tijd, plaats, aantal of vorm.',
    'Soorten: wel of geen ongeloof, volledig of toegevoegd, en allesomvattend.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is bidʿa religieus gezien?', options: ['een bedachte manier van aanbidding zonder bewijs', 'alles wat nieuw is', 'elke wereldse zaak die er in de tijd van de Profeet ﷺ niet was', 'een zonde'], answer: 0, explain: 'Zo staat het in het boek.', page: 10 },
    { type: 'tf', q: 'De auto en de computer zijn bidʿa.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat zijn gewoonten, en die zijn in principe toegestaan.', page: 13 },
    { type: 'mc', q: 'Wat is het uitgangspunt bij aanbidding?', options: ['verboden tot er bewijs is', 'toegestaan', 'afkeurenswaardig', 'aanbevolen'], answer: 0, explain: 'ash-Shūrā 42:21.', page: 13 },
    { type: 'mc', q: 'Wat bedoelde ʿUmar met "wat een goede nieuwigheid is dit"?', options: ['de taalkundige betekenis', 'een goede religieuze bidʿa', 'een afwijzing van de tarāwīḥ', 'een toegevoegde bidʿa'], answer: 0, explain: 'Het nachtgebed in Ramadan is Sunna; de reden om het te laten verviel met het overlijden van de Profeet ﷺ.', page: 15 },
    { type: 'mc', q: 'Wat voor binding is Yā Sīn veertig keer lezen om een zorg weg te nemen?', options: ['aan een aantal', 'aan een tijd', 'aan een plaats', 'aan een vorm'], answer: 0, explain: 'Een aantal vastleggen zonder bewijs.', page: 17 },
    { type: 'mc', q: 'Wat voor bidʿa is ṣalāt ar-raghāʾib?', options: ['toegevoegd', 'volledig', 'ongeloof', 'allesomvattend'], answer: 0, explain: 'Vrijwillig gebed is voorgeschreven, maar deze vorm is niet bevestigd.', page: 19 },
    { type: 'mc', q: 'Welke vernieuwing is ongeloof?', options: ['rondgaan om graven van vromen en hen aanroepen', 'de mawlid vieren', 'gezamenlijk gedenken', 'ṣalāt ar-raghāʾib'], answer: 0, explain: 'Omdat het onder grote shirk valt.', page: 18 },
    { type: 'tf', q: 'Alle hadith verwerpen en alleen de Koran aanvaarden is een allesomvattende bidʿa.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals de zogenoemde Koranisten.', page: 21 }
  ]),
  note: 'Oefening van het boek op p. 21. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n4-aqeedah', chapter: '1', unit: 1, ar, nl }
