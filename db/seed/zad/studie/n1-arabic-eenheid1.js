// Hoofdstukkaart bij اللغة العربية (١), eenheid 1: مدخل إلى علم النحو (lessen 1–3, boek p. 9–15).
// Eenheid 1 (de inleidende lessen) is een indeling van de samenvatter; eenheid 2–5 volgen de وحدات van het boek.
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek.
// Deze eenheid bevat geen hadith; de uitspraken van ʿUmar, Mālik en Ayyūb staan bij de onderdelen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (١)، سلسلة زاد العلمية',
  pages: '9–15',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_ArabicLanguage/page/n{p}/mode/1up'
}

const PERSONS = [
  ['abu-al-aswad-ad-duali', 'text', [10, 11], 'التابعي المشهور بتأسيس علم النحو، ووضع نقط الحركات.', 'De tābiʿī die bekendstaat als grondlegger van de grammatica; hij voerde de klinkerpunten in.'],
  ['ali-ibn-abi-talib', 'text', [10, 11], 'قيل إن أبا الأسود وضع النحو بإشارة منه، وقال: انح هذا النحو.', 'Abū l-Aswad zou de grammatica op zijn aanwijzing hebben opgezet; hij zei: "volg deze richting".'],
  ['al-khalil-ibn-ahmad', 'text', [10], 'أكمل أبواب النحو ووضع أول معجم عربي (العين).', 'Vulde de hoofdstukken van de grammatica aan en schreef het eerste Arabische woordenboek (al-ʿAyn).'],
  ['sibawayh', 'text', [10], 'تلميذ الخليل، أكثر التفاريع ووضع الأدلة والشواهد؛ وكتابه أساس لما بعده.', 'Leerling van al-Khalīl; werkte de details uit met bewijzen en voorbeelden; zijn Kitāb werd de basis van wat volgde.'],
  ['ibn-khaldun', 'text', [12], 'جعل أركان علوم اللسان العربي أربعة، ومعرفتها ضرورية لأهل الشريعة.', 'Noemde vier pijlers van de Arabische taalwetenschappen, die onmisbaar zijn voor wie de sharia bestudeert.'],
  ['umar-ibn-abd-al-aziz', 'text', [12], 'كان يبغض استماع اللحن ويلتذ بالكلام المعرب.', 'Had een afkeer van taalfouten en genoot van correct Arabisch.'],
  ['ibn-taymiyya', 'text', [12], 'قال: تعلم العربية وتعليمها فرض على الكفاية.', 'Zei: Arabisch leren en onderwijzen is een collectieve plicht.'],
  ['umar-ibn-al-khattab', 'text', [14], 'روي عنه: تعلموا اللحن والفرائض فإنه من دينكم.', 'Van hem is overgeleverd: leer de taal en het erfrecht, want dat hoort bij jullie godsdienst.'],
  ['malik-ibn-anas', 'text', [14], 'قال: الإعراب حلي اللسان.', 'Zei: correcte verbuiging is het sieraad van de tong.'],
  ['ayyub-as-sakhtiyani', 'text', [14], 'قال: تعلموا النحو فإنه جمال للوضيع وتركه هجنة للشريف.', 'Zei: leer de grammatica, want zij siert de eenvoudige en wie haar nalaat, ontsiert de aanzienlijke.'],
  ['ibn-al-hajib', 'text', [14], 'صاحب الكافية في النحو والشافية في الصرف.', 'Schreef al-Kāfiya over grammatica en ash-Shāfiya over morfologie.'],
  ['ibn-malik', 'text', [14], 'صاحب الألفية ولامية الأفعال.', 'Schreef de Alfiyya en Lāmiyyat al-afʿāl.'],
  ['ibn-hisham-al-ansari', 'text', [14], 'صاحب أوضح المسالك ومغني اللبيب وشرح شذور الذهب وقطر الندى.', 'Schreef Awḍaḥ al-masālik, Mughnī l-labīb, Sharḥ Shudhūr adh-dhahab en Qaṭr an-nadā.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'مدخل إلى علم النحو',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف علم النحو لغة واصطلاحًا، ونشأته على يد أبي الأسود الدؤلي ثم الخليل وسيبويه، وأهميته لفهم الكتاب والسنة، وموضوعه والفرق بينه وبين الصرف، وفضله وأهم مؤلفاته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعات الدروس الثلاثة كما في الكتاب.',
    root: { label: 'مدخل إلى علم النحو', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'التعريف والتأسيس', sub: 'الدرس ١', page: 9, children: ['النحو لغة', 'النحو اصطلاحًا', 'أبو الأسود والخليل وسيبويه'] },
      { label: 'النشأة والأهمية', sub: 'الدرس ٢', page: 11, children: ['دخول اللحن', 'قصة أبي الأسود', 'أقوال العلماء'] },
      { label: 'الموضوع والفضل', sub: 'الدرس ٣', page: 13, children: ['موضوعه', 'النحو والصرف', 'أهم المؤلفات'] }
    ]
  },
  points: [
    { text: 'النحو ويسمى علم الإعراب: علم يعرف به أحوال أواخر الكلمة إعرابًا وبناءً.', page: 9 },
    { text: 'أظهر معاني النحو في اللغة القصد، لأن المتكلم ينحو به منهاج كلام العرب.', page: 9 },
    { text: 'المشهور أن مؤسس النحو أبو الأسود الدؤلي، وقيل بإشارة من علي بن أبي طالب.', page: 10 },
    { text: 'نشأ النحو لما دخل اللحن بعد انتشار الإسلام بين غير العرب، خاصة فيما يتعلق بالقرآن.', page: 11 },
    { text: 'معرفة علوم العربية ضرورية لمن أراد علم الشريعة، لأن الكتاب والسنة بلغة العرب.', page: 12 },
    { text: 'النحو يبحث في أحوال أواخر الكلمات، والصرف في بنية الكلمة.', page: 13 },
    { text: 'مصدر النحو كلام العرب بالاستقراء، ونصوص الكتاب والسنة هي الحجة.', page: 13 },
    { text: 'فائدته صيانة اللسان عن الخطأ والاستعانة به على فهم كلام الله ورسوله.', page: 13 }
  ],
  terms: [
    { term: 'النحو', translit: 'an-naḥw', meaning: 'لغة: القصد وغيره؛ اصطلاحًا: علم يعرف به أحوال أواخر الكلمة إعرابًا وبناءً.', explanation: 'ويسمى علم الإعراب.', notes: [], page: 9 },
    { term: 'اللحن', translit: 'al-laḥn', meaning: 'الخطأ في ضبط الكلام.', explanation: 'دخل بعد المد الإسلامي حتى عند العرب.', notes: [], page: 11 },
    { term: 'الصرف', translit: 'aṣ-ṣarf', meaning: 'علم يبحث في بنية الكلمة دون النظر إلى موقعها الإعرابي.', explanation: '', notes: [], page: 13 },
    { term: 'الاستقراء', translit: 'al-istiqrāʾ', meaning: 'تتبع كلام العرب شعرًا ونثرًا.', explanation: 'وهو مصدر قواعد النحو.', notes: [], page: 13 },
    { term: 'المعرب والمبني', translit: 'al-muʿrab wa-l-mabnī', meaning: 'المعرب يتغير آخره، والمبني يلزم حالة واحدة.', explanation: 'من موضوعات علم النحو.', notes: [], page: 13 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'أعلام نشأة النحو',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'أبو الأسود الدؤلي', sub: 'ت ٦٩هـ: التأسيس ونقط الحركات', page: 10 },
        { label: 'الخليل بن أحمد الفراهيدي', sub: 'ت ١٧٠هـ: أكمل الأبواب ووضع العين', page: 10 },
        { label: 'سيبويه', sub: 'ت ١٨٠هـ: التفاريع والأدلة والشواهد', page: 10 }
      ]
    },
    {
      type: 'cards',
      title: 'موضوع علم النحو',
      intro: 'كما في الدرس الثالث.',
      nodes: [
        { label: 'تمييز الاسم من الفعل من الحرف', page: 13 },
        { label: 'تمييز المعرب من المبني', page: 13 },
        { label: 'تمييز المرفوع والمنصوب والمجرور والمجزوم', page: 13 },
        { label: 'تحديد العوامل المؤثرة في ذلك', page: 13 }
      ]
    },
    {
      type: 'compare',
      title: 'النحو والصرف',
      intro: 'الفرق بينهما كما في الكتاب.',
      columns: ['يبحث في'],
      rows: [
        { label: 'النحو', cells: ['أحوال أواخر الكلمات وموقعها الإعرابي'] },
        { label: 'الصرف', cells: ['بنية الكلمة دون النظر إلى موقعها الإعرابي'] }
      ],
      page: 13
    },
    {
      type: 'compare',
      title: 'أهم المؤلفات',
      intro: 'كما ذكرها الكتاب.',
      columns: ['من كتبه'],
      rows: [
        { label: 'ابن الحاجب (ت ٦٤٦هـ)', cells: ['الكافية في النحو، الشافية في الصرف'] },
        { label: 'ابن مالك (ت ٦٧٢هـ)', cells: ['الألفية، لامية الأفعال'] },
        { label: 'ابن هشام الأنصاري (ت ٧٦١هـ)', cells: ['أوضح المسالك، مغني اللبيب، شرح شذور الذهب، قطر الندى'] }
      ],
      page: 14
    }
  ],
  sections: [
    { title: 'معاني النحو في اللغة', text: 'منها القصد (نحا الشيء: قصده)، والمثل (مررت برجل نحوك: مثلك)؛ وفي النظم: للنحو سبع معان: قصد ومثل ومقدار وناحية ونوع وبعض وحرف.', more: '', page: 9 },
    { title: 'نقط أبي الأسود', text: 'أمر كاتبًا أن ينقط فوق الحرف إذا فتح فمه، وبين يديه إذا ضمه، وتحته إذا كسره، ونقطتين للتنوين.', more: '', page: 10 },
    { title: 'قصة النشأة', text: 'مر أبو الأسود برجل يقرأ «أن الله بريء من المشركين ورسوله» بجر «رسوله» فتغير المعنى، فأخبر عليًا فأمره بوضع علم؛ فكتب: الكلام اسم وفعل وحرف؛ فقال علي: انح هذا النحو. وهذا أرجح ما قيل في النشأة عند الكتاب.', more: '', page: 11 },
    { title: 'أقوال في أهمية العربية', text: 'قال ابن تيمية: تعلم العربية وتعليم العربية فرض على الكفاية، وكان السلف يؤدبون أولادهم على اللحن؛ وكان عمر بن عبد العزيز يرد صاحب الحاجة إذا لحن.', more: '', page: 12 },
    { title: 'أقوال في فضل النحو', text: 'روي عن عمر: تعلموا اللحن والفرائض فإنه من دينكم؛ وقال مالك: الإعراب حلي اللسان فلا تمنعوا ألسنتكم حليها؛ وقال أيوب السختياني: تعلموا النحو فإنه جمال للوضيع وتركه هجنة للشريف.', more: '', page: 14 }
  ],
  keycards: [
    { kind: 'definitie', title: 'علم النحو', items: ['علم يعرف به أحوال أواخر الكلمة إعرابًا وبناءً.', 'ويسمى علم الإعراب.'], page: 9, origin: 'boek' },
    { kind: 'onderscheid', title: 'النحو والصرف', items: ['النحو: أواخر الكلمات وموقعها الإعرابي.', 'الصرف: بنية الكلمة.'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'فائدة النحو', items: ['صيانة اللسان عن الخطأ', 'فهم كلام الله ورسوله', 'ضبط أواخر الكلمات كما يتكلم العرب'], page: 13, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'النحو علم يعرف به أحوال أواخر الكلمة إعرابًا وبناءً.',
    'أسسه أبو الأسود الدؤلي، ثم أكمله الخليل وسيبويه.',
    'نشأ لما دخل اللحن، وهو ضروري لفهم الكتاب والسنة.',
    'النحو للأواخر، والصرف لبنية الكلمة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أظهر معاني النحو في اللغة؟', options: ['القصد', 'المقدار', 'الناحية', 'البعض'], answer: 0, explain: 'وهو الأقرب للمعنى الاصطلاحي.', page: 9 },
    { type: 'mc', q: 'من المشهور بتأسيس علم النحو؟', options: ['أبو الأسود الدؤلي', 'سيبويه', 'الخليل بن أحمد', 'ابن مالك'], answer: 0, explain: 'وقيل بإشارة من علي بن أبي طالب.', page: 10 },
    { type: 'mc', q: 'من وضع أول معجم عربي (العين)؟', options: ['الخليل بن أحمد الفراهيدي', 'أبو الأسود الدؤلي', 'سيبويه', 'ابن هشام'], answer: 0, explain: 'في زمن هارون الرشيد.', page: 10 },
    { type: 'tf', q: 'الصرف يبحث في أحوال أواخر الكلمات.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هذا النحو؛ والصرف يبحث في بنية الكلمة.', page: 13 },
    { type: 'mc', q: 'من صاحب الألفية؟', options: ['ابن مالك', 'ابن الحاجب', 'ابن هشام', 'ابن عقيل'], answer: 0, explain: 'وله لامية الأفعال في الصرف.', page: 14 }
  ]),
  note: 'نشاط الكتاب في نهاية الدروس. هذه الوحدة من تقسيم الملخص، لأن الكتاب يبدأ وحداته من الدرس الرابع.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Inleiding tot de grammatica',
  subtitle: 'Drie lessen samen op één pagina',
  summary: 'Wat grammatica (naḥw) is in de taal en als vakterm; hoe zij ontstond bij Abū l-Aswad ad-Duʾalī en daarna bij al-Khalīl en Sībawayh; waarom zij nodig is om Koran en soenna te begrijpen; haar onderwerp en het verschil met morfologie; en haar waarde en belangrijkste werken.',
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De onderwerpen van de drie lessen zoals in het boek.',
    root: { label: 'Inleiding tot de grammatica', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Definitie en grondleggers', sub: 'les 1', page: 9, children: ['naḥw in de taal', 'naḥw als vakterm', 'Abū l-Aswad, al-Khalīl en Sībawayh'] },
      { label: 'Ontstaan en belang', sub: 'les 2', page: 11, children: ['taalfouten sluipen erin', 'het verhaal van Abū l-Aswad', 'uitspraken van geleerden'] },
      { label: 'Onderwerp en waarde', sub: 'les 3', page: 13, children: ['het onderwerp', 'grammatica en morfologie', 'belangrijkste werken'] }
    ]
  },
  points: [
    { text: 'Grammatica, ook ʿilm al-iʿrāb genoemd, is de wetenschap die de toestand van het woordeinde leert kennen: verbogen of vast.', page: 9 },
    { text: 'De duidelijkste betekenis van naḥw in de taal is "richting, bedoeling": de spreker volgt ermee de weg van de Arabieren.', page: 9 },
    { text: 'De bekendste grondlegger is Abū l-Aswad ad-Duʾalī, volgens sommigen op aanwijzing van ʿAlī ibn Abī Ṭālib.', page: 10 },
    { text: 'De grammatica ontstond toen na de verspreiding van de islam onder niet-Arabieren taalfouten insloegen, vooral bij de Koran.', page: 11 },
    { text: 'Wie de sharia wil kennen, moet de Arabische taalwetenschappen kennen, want Koran en soenna zijn in het Arabisch.', page: 12 },
    { text: 'Grammatica gaat over het woordeinde; morfologie (ṣarf) over de vorm van het woord.', page: 13 },
    { text: 'De bron van de grammatica is de taal van de Arabieren, onderzocht in poëzie en proza; de teksten van Koran en soenna zijn het bewijs.', page: 13 },
    { text: 'Het nut: de tong behoeden voor fouten en de woorden van Allah en Zijn Boodschapper beter begrijpen.', page: 13 }
  ],
  terms: [
    { term: 'النحو', translit: 'an-naḥw', meaning: 'In de taal o.a. richting, bedoeling; als vakterm: de wetenschap van de toestand van het woordeinde, verbogen of vast.', explanation: 'Ook ʿilm al-iʿrāb genoemd.', notes: [], page: 9 },
    { term: 'اللحن', translit: 'al-laḥn', meaning: 'Taalfout in de uitspraak van de woordeinden.', explanation: 'Sloop er na de verspreiding van de islam zelfs bij Arabieren in.', notes: [], page: 11 },
    { term: 'الصرف', translit: 'aṣ-ṣarf', meaning: 'Morfologie: de leer van de vorm van het woord, los van zijn plaats in de zin.', explanation: '', notes: [], page: 13 },
    { term: 'الاستقراء', translit: 'al-istiqrāʾ', meaning: 'Inductie: het nagaan van de taal van de Arabieren in poëzie en proza.', explanation: 'Daaruit komen de regels.', notes: [], page: 13 },
    { term: 'المعرب والمبني', translit: 'al-muʿrab wa-l-mabnī', meaning: 'Verbogen en vast: het verbogen woord verandert van einde, het vaste niet.', explanation: 'Een van de onderwerpen van de grammatica.', notes: [], page: 13 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'De grondleggers van de grammatica',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Abū l-Aswad ad-Duʾalī', sub: 'gest. 69 AH: grondlegging en klinkerpunten', page: 10 },
        { label: 'Al-Khalīl ibn Aḥmad al-Farāhīdī', sub: 'gest. 170 AH: hoofdstukken aangevuld, al-ʿAyn geschreven', page: 10 },
        { label: 'Sībawayh', sub: 'gest. 180 AH: details, bewijzen en voorbeelden', page: 10 }
      ]
    },
    {
      type: 'cards',
      title: 'Het onderwerp van de grammatica',
      intro: 'Zoals in les 3.',
      nodes: [
        { label: 'Naamwoord, werkwoord en partikel onderscheiden', page: 13 },
        { label: 'Verbogen en vast onderscheiden', page: 13 },
        { label: 'Nominatief, accusatief, genitief en jussief onderscheiden', page: 13 },
        { label: 'De werkende factoren (ʿawāmil) bepalen', page: 13 }
      ]
    },
    {
      type: 'compare',
      title: 'Grammatica en morfologie',
      intro: 'Het verschil zoals in het boek.',
      columns: ['Gaat over'],
      rows: [
        { label: 'Grammatica (naḥw)', cells: ['de woordeinden en hun plaats in de zin'] },
        { label: 'Morfologie (ṣarf)', cells: ['de vorm van het woord, los van zijn plaats in de zin'] }
      ],
      page: 13
    },
    {
      type: 'compare',
      title: 'De belangrijkste werken',
      intro: 'Zoals het boek ze noemt.',
      columns: ['Werken'],
      rows: [
        { label: 'Ibn al-Ḥājib (gest. 646 AH)', cells: ['al-Kāfiya (grammatica), ash-Shāfiya (morfologie)'] },
        { label: 'Ibn Mālik (gest. 672 AH)', cells: ['de Alfiyya, Lāmiyyat al-afʿāl'] },
        { label: 'Ibn Hishām al-Anṣārī (gest. 761 AH)', cells: ['Awḍaḥ al-masālik, Mughnī l-labīb, Sharḥ Shudhūr adh-dhahab, Qaṭr an-nadā'] }
      ],
      page: 14
    }
  ],
  sections: [
    { title: 'Betekenissen van naḥw in de taal', text: 'Onder meer bedoeling (naḥā sh-shayʾ: hij beoogde iets) en gelijkenis (marartu bi-rajulin naḥwaka: een man zoals jij). Een leerdicht noemt zeven betekenissen: bedoeling, gelijkenis, hoeveelheid, kant, soort, deel en letter.', more: '', page: 9 },
    { title: 'De punten van Abū l-Aswad', text: 'Hij liet een schrijver een punt boven de letter zetten als hij zijn mond opende (a), vóór de letter als hij hem rondde (u), en eronder als hij hem spreidde (i); twee punten voor de nunatie.', more: '', page: 10 },
    { title: 'Het verhaal van het ontstaan', text: 'Abū l-Aswad hoorde iemand reciteren "dat Allah zich afkeert van de veelgodenaanbidders, en Zijn Boodschapper" met "Boodschapper" in de genitief, waardoor de betekenis veranderde. Hij vertelde het ʿAlī, die hem opdroeg een wetenschap op te zetten; hij schreef: taal bestaat uit naamwoord, werkwoord en partikel. ʿAlī zei: "volg deze richting (naḥw)". Volgens het boek is dit de sterkste lezing over het ontstaan.', more: '', page: 11 },
    { title: 'Uitspraken over het belang van Arabisch', text: 'Ibn Taymiyya: Arabisch leren en onderwijzen is een collectieve plicht; de vroege generaties corrigeerden hun kinderen op taalfouten. ʿUmar ibn ʿAbd al-ʿAzīz wees iemand met een verzoek af als hij taalfouten maakte.', more: '', page: 12 },
    { title: 'Uitspraken over de waarde van grammatica', text: 'Van ʿUmar is overgeleverd: leer de taal en het erfrecht, want dat hoort bij jullie godsdienst. Mālik: correcte verbuiging is het sieraad van de tong; ontzeg je tong haar sieraad niet. Ayyūb as-Sakhtiyānī: leer de grammatica, want zij siert de eenvoudige, en wie haar nalaat, ontsiert de aanzienlijke.', more: '', page: 14 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Grammatica (naḥw)', items: ['De wetenschap die de toestand van het woordeinde leert kennen: verbogen of vast.', 'Ook ʿilm al-iʿrāb genoemd.'], page: 9, origin: 'boek' },
    { kind: 'onderscheid', title: 'Grammatica en morfologie', items: ['Grammatica: de woordeinden en hun plaats in de zin.', 'Morfologie: de vorm van het woord.'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'Het nut van grammatica', items: ['de tong behoeden voor fouten', 'de woorden van Allah en Zijn Boodschapper begrijpen', 'woordeinden uitspreken zoals de Arabieren'], page: 13, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Grammatica is de wetenschap van de toestand van het woordeinde: verbogen of vast.',
    'Abū l-Aswad ad-Duʾalī legde de grondslag; al-Khalīl en Sībawayh bouwden verder.',
    'Zij ontstond door de taalfouten en is nodig om Koran en soenna te begrijpen.',
    'Grammatica gaat over het woordeinde, morfologie over de vorm van het woord.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is de duidelijkste betekenis van naḥw in de taal?', options: ['bedoeling, richting', 'hoeveelheid', 'kant', 'deel'], answer: 0, explain: 'Die ligt het dichtst bij de vakterm.', page: 9 },
    { type: 'mc', q: 'Wie is de bekendste grondlegger van de grammatica?', options: ['Abū l-Aswad ad-Duʾalī', 'Sībawayh', 'al-Khalīl ibn Aḥmad', 'Ibn Mālik'], answer: 0, explain: 'Volgens sommigen op aanwijzing van ʿAlī ibn Abī Ṭālib.', page: 10 },
    { type: 'mc', q: 'Wie schreef het eerste Arabische woordenboek, al-ʿAyn?', options: ['al-Khalīl ibn Aḥmad al-Farāhīdī', 'Abū l-Aswad ad-Duʾalī', 'Sībawayh', 'Ibn Hishām'], answer: 0, explain: 'In de tijd van Hārūn ar-Rashīd.', page: 10 },
    { type: 'tf', q: 'Morfologie gaat over de woordeinden.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat is grammatica; morfologie gaat over de vorm van het woord.', page: 13 },
    { type: 'mc', q: 'Wie schreef de Alfiyya?', options: ['Ibn Mālik', 'Ibn al-Ḥājib', 'Ibn Hishām', 'Ibn ʿAqīl'], answer: 0, explain: 'Hij schreef ook Lāmiyyat al-afʿāl over morfologie.', page: 14 }
  ]),
  note: 'Deze eenheid is een indeling van de samenvatter, omdat het boek zijn eenheden pas bij les 4 begint. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-arabic', chapter: '1', unit: 1, ar, nl }
