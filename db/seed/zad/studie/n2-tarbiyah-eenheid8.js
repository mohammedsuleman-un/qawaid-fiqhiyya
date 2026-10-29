// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 8: الورع (lessen 14–15, boek p. 56–62).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 59 is in het boek "alleen ter kennisname".
// Niet in het hadith-tabblad: de man die "يا رب يا رب" roept (Muslim), omdat het boek die hadith
// alleen naverteld weergeeft; Mūsā ibn Ḥammād (droom over Sufyān) staat niet in het personenregister.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '56–62',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: 'عطية بن عروة السعدي', text: 'لا يبلغ العبد أن يكون من المتقين حتى يدع ما لا بأس به حذرا لما به بأس', takhrij: 'رواه الترمذي وحسنه', note: 'أصل في الورع.', pages: [56], nl: 'De dienaar bereikt niet de rang van de godvrezenden tot hij laat wat geen kwaad doet, op zijn hoede voor wat kwaad doet', nlNote: 'Een basis voor waraʿ.' },
  { narrator: 'الحسن بن علي', text: 'دع ما يريبك إلى ما لا يريبك', takhrij: 'أحمد والنسائي وصححه الألباني', note: '', pages: [56], nl: 'Laat wat je doet twijfelen voor wat je niet doet twijfelen', nlNote: '' },
  { narrator: 'النعمان بن بشير', text: 'إن الحلال بين والحرام بين وبينهما مشتبهات لا يعلمها كثير من الناس، فمن اتقى المشتبهات استبرأ لدينه وعرضه، ومن وقع في الشبهات كراع يرعى حول الحمى يوشك أن يواقعه', takhrij: 'متفق عليه', note: '', pages: [57], nl: 'Het toegestane is duidelijk en het verbodene is duidelijk, en daartussen zijn twijfelachtige zaken die veel mensen niet kennen. Wie de twijfelachtige zaken mijdt, vrijwaart zijn godsdienst en eer; en wie in twijfelachtige zaken valt, is als een herder die rond een verboden weide hoedt en er bijna in terechtkomt', nlNote: '' },
  { narrator: '', text: 'من حسن إسلام المرء تركه ما لا يعنيه', takhrij: 'الترمذي وابن ماجه وصححه الألباني', note: 'جمع الورع كله في كلمة واحدة: في الكلام والنظر والاستماع والبطش والمشي والفكر.', pages: [57, 61], nl: 'Het hoort bij de goede islam van een mens dat hij laat wat hem niet aangaat', nlNote: 'Heel waraʿ in één zin: in spreken, kijken, luisteren, grijpen, lopen en denken.' },
  { narrator: 'أبو هريرة', text: 'يا أبا هريرة، كن ورعا تكن أعبد الناس', takhrij: 'ابن ماجه وصححه الألباني', note: FYI_NOTE, pages: [59], nl: 'Abū Hurayra, wees behoedzaam, dan ben je de meest aanbiddende van de mensen', nlNote: FYI_NOTE_NL },
  { narrator: 'ثوبان', text: 'لأعلمن أقواما من أمتي يأتون يوم القيامة بحسنات أمثال جبال تهامة بيضا، فيجعلها الله عز وجل هباء منثورا … أما إنهم إخوانكم ومن جلدتكم ويأخذون من الليل كما تأخذون، ولكنهم أقوام إذا خلوا بمحارم الله انتهكوها', takhrij: 'ابن ماجه وصححه الألباني', note: 'خطورة عدم الورع. ' + FYI_NOTE, pages: [59], nl: 'Ik ken mensen uit mijn gemeenschap die op de Dag des Oordeels komen met goede daden als de bergen van Tihāma, wit; en Allah maakt ze tot verstoven stof … Het zijn jullie broeders, van jullie soort, en zij nemen van de nacht zoals jullie nemen; maar het zijn mensen die, wanneer zij alleen zijn met wat Allah verboden heeft, het schenden', nlNote: 'Het gevaar van geen waraʿ. ' + FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'إني لأنقلب إلى أهلي فأجد التمرة ساقطة على فراشي، فأرفعها لآكلها، ثم أخشى أن تكون صدقة فألقيها', takhrij: 'متفق عليه', note: 'من ورع النبي ﷺ.', pages: [60], nl: 'Ik kom thuis en vind een dadel op mijn bed; ik raap haar op om te eten, dan vrees ik dat het liefdadigheid is en gooi haar weg', nlNote: 'Uit de waraʿ van de Profeet ﷺ.' },
  { narrator: '', text: 'كخ كخ … أما شعرت أنا لا نأكل الصدقة', takhrij: 'متفق عليه', note: 'لما أخذ الحسن بن علي تمرة من تمر الصدقة فجعلها في فيه.', pages: [60], nl: 'Bah, bah … weet je niet dat wij geen liefdadigheid eten?', nlNote: 'Toen al-Ḥasan ibn ʿAlī een dadel van de liefdadigheid in zijn mond stak.' }
]

const TAKHRIJ_NL = {
  'رواه الترمذي وحسنه': 'at-Tirmidhī; hij noemde hem ḥasan',
  'أحمد والنسائي وصححه الألباني': 'Aḥmad en an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'متفق عليه': 'al-Bukhārī en Muslim',
  'الترمذي وابن ماجه وصححه الألباني': 'at-Tirmidhī en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'ابن ماجه وصححه الألباني': 'Ibn Māja; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'عطية بن عروة السعدي': 'ʿAṭiyya ibn ʿUrwa as-Saʿdī', 'الحسن بن علي': 'al-Ḥasan ibn ʿAlī', 'النعمان بن بشير': 'an-Nuʿmān ibn Bashīr', 'أبو هريرة': 'Abū Hurayra', 'ثوبان': 'Thawbān' }

const PERSONS = [
  ['ibn-al-qayyim', 'text', [56], 'عرّف الورع: ترك ما يخشى ضرره في الآخرة.', 'Omschreef waraʿ: laten wat men vreest dat schade doet in het Hiernamaals.'],
  ['al-jurjani', 'text', [56], 'عرّف الورع: اجتناب الشبهات خوفًا من الوقوع في المحرمات.', 'Omschreef waraʿ: twijfelachtige zaken mijden uit vrees in het verbodene te vallen.'],
  ['al-qarafi', 'text', [56], 'عرّف الورع: ترك ما لا بأس به حذرًا مما به البأس.', 'Omschreef waraʿ: laten wat geen kwaad doet, op zijn hoede voor wat kwaad doet.'],
  ['atiyya-ibn-urwa-as-sadi', 'text', [56], 'روى «لا يبلغ العبد أن يكون من المتقين حتى يدع ما لا بأس به».', 'Overleveraar van "de dienaar bereikt niet de rang van de godvrezenden tot hij laat wat geen kwaad doet".'],
  ['al-hasan-ibn-ali', 'text', [56, 60], 'روى «دع ما يريبك إلى ما لا يريبك»، وأخذ تمرة من الصدقة وهو صغير.', 'Overleverde "laat wat je doet twijfelen"; nam als kind een dadel van de liefdadigheid.'],
  ['an-numan-ibn-bashir', 'text', [57], 'روى «إن الحلال بين والحرام بين».', 'Overleveraar van "het toegestane is duidelijk en het verbodene is duidelijk".'],
  ['tawus-ibn-kaysan', 'text', [57], 'قال: مثل الإيمان كشجرة أصلها الشهادة وثمرها الورع.', 'Zei: het geloof is als een boom; de wortel is de getuigenis en de vrucht is waraʿ.'],
  ['ibn-umar', 'text', [57], 'قال: انظروا إلى صدق حديثه وأمانته وورعه، لا إلى صلاته وصيامه.', 'Zei: kijk naar iemands eerlijkheid, betrouwbaarheid en waraʿ, niet naar zijn gebed en vasten.'],
  ['umar-ibn-al-khattab', 'text', [57], 'قال: إن الدين ليس بالطنطنة من آخر الليل، ولكن الدين الورع.', 'Zei: godsdienst is niet het gemompel aan het eind van de nacht, maar godsdienst is waraʿ.'],
  ['mutarrif-ibn-abdallah', 'text', [57], 'قال: أفضل الرجلين أشدهما ورعًا لله عن محارمه.', 'Zei: de betere van twee mannen is wie het behoedzaamst is voor wat Allah verbood.'],
  ['abu-abd-ar-rahman-al-umari', 'text', [58], 'قال لمن استوعظه: مثل هذا ورع يدخل في قلبك خير لك من صلاة أهل الأرض.', 'Zei tegen wie om raad vroeg: zoveel waraʿ in je hart is beter dan het gebed van alle mensen op aarde.'],
  ['sufyan-ath-thawri', 'text', [58, 61], 'قال: عليك بالورع يخفف الله من حسابك، وقال: ما رأيت ورعًا قط إلا محتاجًا.', 'Zei: houd je aan waraʿ, dan maakt Allah je afrekening licht; en: ik heb nooit iemand met waraʿ gezien die niet behoeftig was.'],
  ['qutayba-ibn-said', 'text', [58], 'قال: لولا سفيان الثوري لضاع الورع.', 'Zei: zonder Sufyān ath-Thawrī was waraʿ verloren gegaan.'],
  ['abu-bakr-as-siddiq', 'text', [58], 'تقيأ طعامًا علم أنه من كسب الكهانة.', 'Braakte voedsel uit toen hij hoorde dat het met waarzeggerij verdiend was.'],
  ['aisha', 'text', [58, 60], 'روت خبر ورع أبي بكر، وشهدت لزينب بنت جحش بالورع.', 'Vertelde over de waraʿ van Abū Bakr en getuigde van de waraʿ van Zaynab bint Jaḥsh.'],
  ['said-ibn-al-musayyab', 'text', [59], 'قال: العبادة الورع عما حرم الله والتفكر في أمر الله.', 'Zei: aanbidding is behoedzaamheid voor wat Allah verbood en nadenken over Allahs zaak.'],
  ['ibn-uthaymin', 'text', [59], 'فرّق بين الزهد والورع، وجعل الزهد أعلى.', 'Maakte onderscheid tussen zuhd en waraʿ, en noemde zuhd hoger.'],
  ['thawban', 'text', [59], 'سأل النبي ﷺ أن يصف الذين تصير حسناتهم هباء.', 'Vroeg de Profeet ﷺ de mensen te beschrijven van wie de goede daden tot stof worden.'],
  ['abu-as-suud', 'text', [60], 'قال: التورع عن المحارم موقوف على معرفة الحلال والحرام.', 'Zei: behoedzaamheid voor het verbodene hangt af van kennis van ḥalāl en ḥarām.'],
  ['ibn-taymiyya', 'text', [60], 'قال في الجاهل: قد يدع واجبات ويفعل محرمات ويرى ذلك من الورع.', 'Zei over de onwetende: hij laat soms plichten na en doet verboden dingen, en houdt dat voor waraʿ.'],
  ['zaynab-bint-jahsh', 'text', [60], 'قالت في حديث الإفك: أحمي سمعي وبصري، والله ما علمت عليها إلا خيرًا.', 'Zei in de lasteraffaire: ik bewaar mijn gehoor en zicht; bij Allah, ik weet alleen goeds over haar.'],
  ['abu-hurayra', 'text', [59, 60], 'روى «كن ورعًا تكن أعبد الناس» وحديث التمرة.', 'Overleverde "wees behoedzaam, dan ben je de meest aanbiddende" en de hadith van de dadel.'],
  ['al-awzai', 'text', [61], 'قال: ما ابتدع رجل بدعة إلا سلب ورعه.', 'Zei: niemand voert een vernieuwing in of zijn waraʿ wordt hem ontnomen.'],
  ['sahl-ibn-abdallah-at-tustari', 'text', [61], 'قال: إذا عمل المؤمن بالعلم دله على الورع.', 'Zei: als de gelovige naar zijn kennis handelt, leidt die hem naar waraʿ.'],
  ['ibn-masud', 'text', [61], 'قال: اجتنب ما حرم عليك تكن من أورع الناس.', 'Zei: vermijd wat je verboden is, dan ben je de behoedzaamste van de mensen.']
]

const ar = {
  scope: 'unit',
  unit: 8,
  title: 'الورع',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'تعريف الورع وأصله في السنة، وأهميته، وأقوال السلف فيه، وورع الصديق، والفرق بين الزهد والورع، وخطورة عدم الورع، واقتران العلم بالورع، وأخبار في الورع، وأسباب الوصول إليه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثامنة في خريطة واحدة',
    intro: 'الورع: معناه وأهميته وطريقه.',
    root: { label: 'الورع', sub: 'الوحدة الثامنة' },
    nodes: [
      { label: 'تعريفه وأصله', sub: 'الدرس ١٤', page: 56, children: ['ترك ما يخشى ضرره', 'دع ما يريبك'] },
      { label: 'أهميته', sub: 'الدرس ١٤', page: 57, children: ['ثمرة الإيمان', 'الدين الورع'] },
      { label: 'الزهد والورع', sub: 'الدرس ١٥', page: 59, children: ['الورع ترك ما يضر', 'الزهد ترك ما لا ينفع'] },
      { label: 'أسباب الوصول', sub: 'الدرس ١٥', page: 61, children: ['السنة', 'العمل بالعلم', 'اجتناب المحرم', 'الزهد'] }
    ]
  },
  points: [
    { text: 'الورع أساس الدين والطاعة، وعلامة على الصلاح.', page: 56 },
    { text: 'الورع لغة التحرج، وأصله الكف عن المحارم، ثم استعير للكف عن المباح.', page: 56 },
    { text: 'قال ابن القيم: الورع ترك ما يخشى ضرره في الآخرة.', page: 56 },
    { text: '«من حسن إسلام المرء تركه ما لا يعنيه» يجمع الورع كله.', page: 57 },
    { text: 'الورع شرط في الإيمان وثمرة له، ومن أجل ذلك جعله العلماء شرطًا في القاضي.', page: 57 },
    { text: 'الزهد أعلى من الورع: الورع ترك ما يضر، والزهد ترك ما لا ينفع في الآخرة.', page: 59 },
    { text: 'الورع يحتاج إلى علم بالحلال والحرام، وإلا ترك الجاهل واجبات ورآه ورعًا.', page: 60 },
    { text: 'يوصل إلى الورع: لزوم السنة، والعمل بالعلم، واجتناب المحرم، والزهد، والبعد عما يمنع الورع.', page: 61 }
  ],
  terms: [
    { term: 'الورع', translit: 'al-waraʿ', meaning: 'لغة: التحرج؛ اصطلاحًا: ترك ما يخشى ضرره في الآخرة.', explanation: 'وقيل: ترك ما لا بأس به خشية الوقوع فيما فيه بأس.', notes: [], page: 56 },
    { term: 'المشتبهات', translit: 'al-mushtabihāt', meaning: 'أمور بين الحلال البين والحرام البين لا يعلمها كثير من الناس.', explanation: '', notes: [], page: 57 },
    { term: 'الحمى', translit: 'al-ḥimā', meaning: 'المرعى المحمي الذي يمنع منه.', explanation: 'في حديث النعمان بن بشير.', notes: [], page: 57 },
    { term: 'الزهد', translit: 'az-zuhd', meaning: 'ترك ما لا ينفع في الآخرة.', explanation: 'وهو أعلى من الورع عند ابن عثيمين.', notes: [], page: 59 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الورع والزهد',
      intro: 'كما في الدرس الخامس عشر، عن ابن عثيمين.',
      columns: ['الورع', 'الزهد'],
      rows: [
        { label: 'ما يُترك', cells: ['ما يضر في الآخرة', 'ما يضر وما لا ينفع في الآخرة'] },
        { label: 'المنزلة', cells: ['دون الزهد', 'أعلى من الورع'] }
      ],
      page: 59
    }
  ],
  sections: [
    { title: 'أهمية الورع', text: 'قال طاوس: مثل الإيمان كشجرة أصلها الشهادة وثمرها الورع، ولا خير في شجرة لا ثمر لها، ولا خير في إنسان لا ورع له. وقال عمر: إن الدين ليس بالطنطنة من آخر الليل، ولكن الدين الورع.', page: 57 },
    { title: 'ورع الصديق', text: 'روى البخاري عن عائشة أن غلامًا لأبي بكر جاءه بشيء فأكل منه، ثم أخبره أنه تكهن لإنسان في الجاهلية فخدعه، فأدخل أبو بكر يده فقاء كل شيء في بطنه.', page: 58 },
    { title: 'خطورة عدم الورع (للاطلاع فقط)', text: 'أخبر النبي ﷺ عن أقوام يأتون بحسنات أمثال جبال تهامة فيجعلها الله هباء منثورًا، لأنهم إذا خلوا بمحارم الله انتهكوها.', more: FYI, page: 59 },
    { title: 'اقتران العلم بالورع', text: 'قال أبو السعود: التورع عن محارمه سبحانه موقوف على معرفة الحلال والحرام المنوط بالكتاب والسنة. وقال ابن تيمية في الجاهل: قد يدع واجبات ويفعل محرمات ويرى ذلك من الورع.', page: 60 },
    { title: 'من أخبار الورع', text: 'خشي النبي ﷺ أن تكون التمرة على فراشه من الصدقة فألقاها، وأخرج التمرة من فم الحسن بن علي، وقالت زينب بنت جحش في عائشة: أحمي سمعي وبصري، فعصمها الله بالورع.', page: 60 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الورع', items: ['ترك ما يخشى ضرره في الآخرة', 'اجتناب الشبهات خوفًا من الوقوع في المحرمات'], page: 56, origin: 'boek' },
    { kind: 'onderscheid', title: 'الورع والزهد', items: ['الورع: ترك ما يضر', 'الزهد: ترك ما لا ينفع في الآخرة أيضًا', 'الزهد أعلى'], page: 59, origin: 'boek' },
    { kind: 'opsomming', title: 'أسباب الوصول إلى الورع', items: ['لزوم السنة وترك البدعة', 'العمل بالعلم', 'اجتناب المحرمات', 'الزهد في الدنيا', 'البعد عما يمنع الورع'], page: 61, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الورع ترك ما يخشى ضرره في الآخرة.',
    'من اتقى الشبهات استبرأ لدينه وعرضه.',
    'من حسن إسلام المرء تركه ما لا يعنيه.',
    'الورع يحتاج إلى علم، والزهد أعلى منه.',
    'يوصل إلى الورع لزوم السنة والعمل بالعلم واجتناب المحرم.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما تعريف ابن القيم للورع؟', options: ['ترك ما يخشى ضرره في الآخرة', 'ترك الدنيا كلها', 'كثرة الصلاة والصيام', 'ترك الكلام'], answer: 0, explain: 'كما في الدرس الرابع عشر.', page: 56 },
    { type: 'tf', q: 'الورع أعلى من الزهد عند ابن عثيمين.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الزهد أعلى من الورع.', page: 59 },
    { type: 'mc', q: 'ماذا فعل أبو بكر لما علم أن الطعام من كسب الكهانة؟', options: ['تقيأ كل ما في بطنه', 'تصدق بمثله', 'ضرب الغلام', 'لم يفعل شيئًا'], answer: 0, explain: 'رواه البخاري عن عائشة.', page: 58 },
    { type: 'mc', q: 'من قال: لولا سفيان الثوري لضاع الورع؟', options: ['قتيبة بن سعيد', 'طاوس', 'الأوزاعي', 'ابن مسعود'], answer: 0, explain: 'كما في الدرس الرابع عشر.', page: 58 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٦٢. الصفحة ٥٩ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 8,
  title: 'Behoedzaamheid (waraʿ)',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'De betekenis van waraʿ en de basis in de soenna, het belang, uitspraken van de vroege generaties, de waraʿ van Abū Bakr, het verschil tussen zuhd en waraʿ, het gevaar van geen waraʿ, kennis en waraʿ, verhalen, en hoe men waraʿ bereikt.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 8 in één kaart',
    intro: 'Waraʿ: betekenis, belang en de weg ernaartoe.',
    root: { label: 'Waraʿ', sub: 'Eenheid 8' },
    nodes: [
      { label: 'Betekenis en basis', sub: 'les 14', page: 56, children: ['laten wat schaadt', 'laat wat je doet twijfelen'] },
      { label: 'Belang', sub: 'les 14', page: 57, children: ['vrucht van het geloof', 'godsdienst is waraʿ'] },
      { label: 'Zuhd en waraʿ', sub: 'les 15', page: 59, children: ['waraʿ laat wat schaadt', 'zuhd laat wat niet baat'] },
      { label: 'De weg ernaartoe', sub: 'les 15', page: 61, children: ['soenna', 'kennis toepassen', 'verboden mijden', 'onthechting'] }
    ]
  },
  points: [
    { text: 'Waraʿ is de basis van de godsdienst en van gehoorzaamheid, en een teken dat iemand deugt.', page: 56 },
    { text: 'In de taal is waraʿ terughoudendheid; oorspronkelijk zich weerhouden van het verbodene, later ook van het toegestane.', page: 56 },
    { text: 'Ibn al-Qayyim: waraʿ is laten wat men vreest dat schade doet in het Hiernamaals.', page: 56 },
    { text: '"Het hoort bij de goede islam van een mens dat hij laat wat hem niet aangaat" vat heel waraʿ samen.', page: 57 },
    { text: 'Waraʿ is een voorwaarde en een vrucht van het geloof; daarom stelden de geleerden het als voorwaarde voor een rechter.', page: 57 },
    { text: 'Zuhd is hoger dan waraʿ: waraʿ laat wat schaadt, zuhd laat ook wat in het Hiernamaals niet baat.', page: 59 },
    { text: 'Waraʿ vraagt kennis van ḥalāl en ḥarām; zonder kennis laat men soms plichten na en houdt dat voor waraʿ.', page: 60 },
    { text: 'Men bereikt waraʿ met de soenna, kennis toepassen, het verbodene mijden, onthechting, en wegblijven van wat waraʿ belet.', page: 61 }
  ],
  terms: [
    { term: 'الورع', translit: 'al-waraʿ', meaning: 'Letterlijk: terughoudendheid; in de leer: laten wat men vreest dat schade doet in het Hiernamaals.', explanation: 'Ook: laten wat geen kwaad doet uit vrees te vallen in wat kwaad doet.', notes: [], page: 56 },
    { term: 'المشتبهات', translit: 'al-mushtabihāt', meaning: 'Twijfelachtige zaken tussen het duidelijk toegestane en het duidelijk verbodene, die veel mensen niet kennen.', explanation: '', notes: [], page: 57 },
    { term: 'الحمى', translit: 'al-ḥimā', meaning: 'Afgeschermde weide waar men niet mag weiden.', explanation: 'In de hadith van an-Nuʿmān ibn Bashīr.', notes: [], page: 57 },
    { term: 'الزهد', translit: 'az-zuhd', meaning: 'Onthechting: laten wat in het Hiernamaals niet baat.', explanation: 'Volgens Ibn ʿUthaymīn hoger dan waraʿ.', notes: [], page: 59 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Waraʿ en zuhd',
      intro: 'Zoals in les 15, naar Ibn ʿUthaymīn.',
      columns: ['Waraʿ', 'Zuhd'],
      rows: [
        { label: 'Wat men laat', cells: ['wat schaadt in het Hiernamaals', 'wat schaadt én wat niet baat in het Hiernamaals'] },
        { label: 'Rang', cells: ['lager dan zuhd', 'hoger dan waraʿ'] }
      ],
      page: 59
    }
  ],
  sections: [
    { title: 'Het belang van waraʿ', text: 'Ṭāwūs zei: het geloof is als een boom; de wortel is de getuigenis en de vrucht is waraʿ; er is geen goed in een boom zonder vrucht, en geen goed in een mens zonder waraʿ. ʿUmar zei: godsdienst is niet het gemompel aan het eind van de nacht, maar godsdienst is waraʿ.', page: 57 },
    { title: 'De waraʿ van Abū Bakr', text: 'al-Bukhārī overlevert van ʿĀʾisha dat een knecht van Abū Bakr hem iets bracht waarvan hij at. Daarna zei de knecht dat hij het verdiend had met waarzeggerij uit de Jāhiliyya, waarbij hij iemand bedroog. Abū Bakr stak zijn hand in zijn mond en braakte alles uit.', page: 58 },
    { title: 'Het gevaar van geen waraʿ (alleen ter kennisname)', text: 'De Profeet ﷺ vertelde over mensen die komen met goede daden als de bergen van Tihāma, die Allah tot verstoven stof maakt, omdat zij Allahs verboden schonden als zij alleen waren.', more: FYI_NL, page: 59 },
    { title: 'Kennis hoort bij waraʿ', text: 'Abū s-Suʿūd zei dat behoedzaamheid voor Allahs verboden afhangt van kennis van ḥalāl en ḥarām uit Koran en soenna. Ibn Taymiyya zei over de onwetende: hij laat soms plichten na en doet verboden dingen, en houdt dat voor waraʿ.', page: 60 },
    { title: 'Verhalen over waraʿ', text: 'De Profeet ﷺ gooide een dadel van zijn bed weg uit vrees dat het liefdadigheid was, en haalde een dadel van de liefdadigheid uit de mond van al-Ḥasan ibn ʿAlī. Zaynab bint Jaḥsh zei over ʿĀʾisha: ik bewaar mijn gehoor en zicht; Allah beschermde haar door waraʿ.', page: 60 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Waraʿ', items: ['laten wat men vreest dat schade doet in het Hiernamaals', 'twijfelachtige zaken mijden uit vrees in het verbodene te vallen'], page: 56, origin: 'boek' },
    { kind: 'onderscheid', title: 'Waraʿ en zuhd', items: ['waraʿ: laten wat schaadt', 'zuhd: ook laten wat in het Hiernamaals niet baat', 'zuhd is hoger'], page: 59, origin: 'boek' },
    { kind: 'opsomming', title: 'Hoe men waraʿ bereikt', items: ['de soenna volgen en vernieuwing laten', 'naar kennis handelen', 'het verbodene mijden', 'onthechting van de wereld', 'wegblijven van wat waraʿ belet'], page: 61, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Waraʿ is laten wat men vreest dat schade doet in het Hiernamaals.',
    'Wie twijfelachtige zaken mijdt, vrijwaart zijn godsdienst en eer.',
    'Het hoort bij de goede islam dat je laat wat je niet aangaat.',
    'Waraʿ vraagt kennis; zuhd is hoger dan waraʿ.',
    'Men bereikt waraʿ met de soenna, kennis toepassen en het verbodene mijden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe omschreef Ibn al-Qayyim waraʿ?', options: ['laten wat men vreest dat schade doet in het Hiernamaals', 'de hele wereld laten', 'veel bidden en vasten', 'niet meer spreken'], answer: 0, explain: 'Zoals in les 14.', page: 56 },
    { type: 'tf', q: 'Volgens Ibn ʿUthaymīn is waraʿ hoger dan zuhd.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Zuhd is hoger dan waraʿ.', page: 59 },
    { type: 'mc', q: 'Wat deed Abū Bakr toen hij hoorde dat het voedsel met waarzeggerij verdiend was?', options: ['hij braakte alles uit', 'hij gaf hetzelfde weg', 'hij sloeg de knecht', 'niets'], answer: 0, explain: 'Overgeleverd door al-Bukhārī van ʿĀʾisha.', page: 58 },
    { type: 'mc', q: 'Wie zei: zonder Sufyān ath-Thawrī was waraʿ verloren gegaan?', options: ['Qutayba ibn Saʿīd', 'Ṭāwūs', 'al-Awzāʿī', 'Ibn Masʿūd'], answer: 0, explain: 'Zoals in les 14.', page: 58 }
  ]),
  note: 'Oefening van het boek op p. 62. Pagina 59 staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '14', unit: 8, ar, nl }
