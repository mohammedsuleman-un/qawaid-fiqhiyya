// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 11: المحاسبة (lessen 22–23, boek p. 78–84).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 81 is in het boek "alleen ter kennisname".
// Weggelaten: de verhalen over de salaf op p. 84 (ʿUmar in de tuin, de vrijgelaten slaven enz.), omdat het
// boek er geen bron bij geeft.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '78–84',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'شداد بن أوس', text: 'الكيس من دان نفسه وعمل لما بعد الموت، والعاجز من أتبع نفسه هواها وتمنى على الله', takhrij: 'أحمد والترمذي وحسنه', note: 'دان نفسه: حاسبها في الدنيا.', pages: [79], nl: 'Verstandig is wie zichzelf afrekent en werkt voor wat na de dood komt; zwak is wie zijn ziel haar begeerten laat volgen en dan wensen koestert bij Allah', nlNote: '"Zichzelf afrekenen": in deze wereld rekenschap van zichzelf vragen.' }
]

const TAKHRIJ_NL = { 'أحمد والترمذي وحسنه': 'Aḥmad en at-Tirmidhī; at-Tirmidhī noemde hem ḥasan' }
const NARRATOR_NL = { 'شداد بن أوس': 'Shaddād ibn Aws' }

const PERSONS = [
  ['al-mawardi', 'text', [78], 'قال: يتصفح الإنسان في ليله ما صدر من أفعال نهاره، فيمضي الحسن ويستدرك القبيح.', 'Zei: de mens gaat ’s nachts zijn daden van de dag na; het goede zet hij voort en het slechte herstelt hij.'],
  ['as-sadi', 'text', [78], 'قال: آية الحشر ﴿ولتنظر نفس ما قدمت لغد﴾ أصل في محاسبة العبد نفسه.', 'Zei: het vers "laat elke ziel zien wat zij voor morgen vooruitzond" is de basis van zelfrekenschap.'],
  ['al-hasan-al-basri', 'text', [79, 81], 'قال: لا يلقى المؤمن إلا يعاتب نفسه، وإنما خف الحساب يوم القيامة على قوم حاسبوا أنفسهم في الدنيا.', 'Zei: je ziet de gelovige altijd zichzelf verwijten maken; de afrekening is licht voor wie zichzelf in deze wereld afrekende.'],
  ['shaddad-ibn-aws', 'text', [79], 'روى «الكيس من دان نفسه».', 'Overleveraar van "verstandig is wie zichzelf afrekent".'],
  ['al-izz-ibn-abd-as-salam', 'text', [79], 'قال: أجمع العلماء على وجوب محاسبة النفس فيما سلف من الأعمال وفيما يستقبل.', 'Zei: de geleerden zijn het eens dat zelfrekenschap verplicht is, over vroegere en komende daden.'],
  ['ibn-al-qayyim', 'text', [81, 83], 'رتّب مراتب المحاسبة، وقال: كلما اجتهد فيها اليوم استراح منها غدًا.', 'Zette de rangen van zelfrekenschap op een rij, en zei: hoe meer je je er vandaag voor inspant, hoe meer rust je morgen hebt.'],
  ['umar-ibn-al-khattab', 'text', [81], 'قال: حاسبوا أنفسكم قبل أن تحاسبوا، وزنوا أنفسكم قبل أن توزنوا.', 'Zei: reken jezelf af voordat je afgerekend wordt, en weeg jezelf voordat je gewogen wordt.'],
  ['al-fudayl-ibn-iyad', 'text', [82], 'قال: المؤمن يحاسب نفسه، والمنافق يغفل عن نفسه.', 'Zei: de gelovige rekent zichzelf af, de hypocriet is achteloos over zichzelf.'],
  ['abd-al-aziz-ibn-abi-rawwad', 'text', [82], 'قال: ما حاسبت نفسي بعد عمل بر إلا وجدت نصيب الشيطان فيه أوفر.', 'Zei: telkens als ik mezelf na een goede daad afrekende, vond ik het deel van de duivel erin groter.'],
  ['muhammad-ibn-wasi', 'text', [82], 'قال: لو كان للذنوب ريح ما قدر أحد أن يجلس إلي.', 'Zei: als zonden een geur hadden, kon niemand bij mij zitten.'],
  ['ibn-asakir', 'text', [82], 'ذكر أن نصرًا المقدسي كان يحاسب نفسه على كل نفس.', 'Vertelde dat Naṣr al-Maqdisī zichzelf afrekende op elke ademhaling.'],
  ['nasr-al-maqdisi', 'text', [82], 'كان يحاسب نفسه على كل نفس، ولا يمضي عليه وقت بلا فائدة.', 'Rekende zichzelf af op elke ademhaling; geen moment ging zonder nut voorbij.'],
  ['umar-ibn-abd-al-aziz', 'text', [83], 'كتب إلى عدي بن أرطاة: اتق الله يا عدي، وحاسب نفسك قبل يوم القيامة.', 'Schreef aan ʿAdī ibn Arṭāt: vrees Allah, ʿAdī, en reken jezelf af vóór de Dag der Opstanding.'],
  ['maruf-al-karkhi', 'text', [83], 'قال لمن اغتاب عنده: اذكر القطن إذا وضعوه على عينيك.', 'Zei tegen iemand die bij hem roddelde: denk aan het katoen dat ze op je ogen leggen.']
]

const ar = {
  scope: 'unit',
  unit: 11,
  title: 'المحاسبة',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'تعريف محاسبة النفس وأدلتها ووجوبها، ونوعاها قبل العمل وبعده، ومراتبها، وثمراتها، وما يعين عليها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الحادية عشرة في خريطة واحدة',
    intro: 'محاسبة النفس: أنواعها وثمراتها وما يعين عليها.',
    root: { label: 'المحاسبة', sub: 'الوحدة الحادية عشرة' },
    nodes: [
      { label: 'تعريفها ووجوبها', sub: 'الدرس ٢٢', page: 78, children: ['النظر في أعمال النفس', 'إجماع العلماء'] },
      { label: 'أنواعها', sub: 'الدرس ٢٢', page: 79, children: ['قبل العمل', 'بعد العمل: على الطاعات، وعلى المعاصي، وعلى المباحات'] },
      { label: 'ثمراتها', sub: 'الدرس ٢٣', page: 81, children: ['النجاة', 'خفة الحساب', 'حفظ الإيمان', 'التواضع', 'اغتنام الوقت'] },
      { label: 'ما يعين عليها', sub: 'الدرس ٢٣', page: 82, children: ['علم الله بما في النفس', 'السؤال يوم القيامة', 'ذكر الموت'] }
    ]
  },
  points: [
    { text: 'النفس أمارة بالسوء إلا ما رحم الله، فتحتاج إلى زمام من التقوى والخوف.', page: 78 },
    { text: 'المحاسبة لغة العد، واصطلاحًا النظر في أعمال النفس واستدراك الأخطاء والمضي في الصالحات.', page: 78 },
    { text: 'أصلها قوله تعالى: ﴿ولتنظر نفس ما قدمت لغد﴾ [الحشر: ١٨].', page: 78 },
    { text: 'أجمع العلماء على وجوب محاسبة النفس فيما سلف من الأعمال وفيما يستقبل.', page: 79 },
    { text: 'المحاسبة قبل العمل: هل أقدر عليه؟ هل فيه خير؟ هل هو لله؟', page: 79 },
    { text: 'المحاسبة بعد العمل ثلاثة أنواع: على الطاعات، وعلى المعاصي، وعلى ما كان تركه أولى أو المباحات.', page: 80 },
    { text: 'من ثمراتها: النجاة، وخفة الحساب، وحفظ الإيمان، ومعرفة العيوب، والتواضع، واغتنام الوقت.', page: 81 },
    { text: 'يعين عليها: العلم بأن الله يعلم ما في النفس، وأنها راحة غدًا، والتفكر في السؤال وأهوال القيامة، وذكر الموت.', page: 82 }
  ],
  terms: [
    { term: 'المحاسبة', translit: 'al-muḥāsaba', meaning: 'لغة: العد؛ اصطلاحًا: النظر في أعمال النفس واستدراك الأخطاء والمضي في الصالحات.', explanation: '', notes: [], page: 78 },
    { term: 'النفس اللوامة', translit: 'an-nafs al-lawwāma', meaning: 'النفس التي تعاتب صاحبها.', explanation: '﴿ولا أقسم بالنفس اللوامة﴾ [القيامة: ٢].', notes: [], page: 78 },
    { term: 'الكيّس', translit: 'al-kayyis', meaning: 'العاقل الحازم.', explanation: 'في حديث شداد بن أوس.', notes: [], page: 79 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'المحاسبة بعد العمل',
      intro: 'كما في الدرس الثاني والعشرين.',
      columns: ['يسأل نفسه', 'ثم'],
      rows: [
        { label: 'على الطاعات', cells: ['هل أداها كاملة، مخلصًا، على السنة؟', 'التكميل والاستدراك والتوبة والاستغفار'] },
        { label: 'على المعاصي', cells: ['لماذا فعلها؟', 'محوها بالتوبة والاستغفار والحسنات'] },
        { label: 'على المباحات وما تركه أولى', cells: ['لماذا فعله؟ وما نفعه؟', 'ترك ما لا ينفع'] }
      ],
      page: 80
    }
  ],
  sections: [
    { title: 'النفس اللوامة', text: 'قال الحسن في قوله تعالى: ﴿ولا أقسم بالنفس اللوامة﴾: لا يلقى المؤمن إلا يعاتب نفسه: ماذا أردت بكلمتي؟ ماذا أردت بأكلتي؟ ماذا أردت بشربتي؟ والفاجر يمضي قدمًا لا يعاتب نفسه.', page: 79 },
    { title: 'المحاسبة قبل العمل', text: 'قال الحسن: كان أحدهم إذا أراد أن يتصدق بصدقة تثبت، فإن كانت لله أمضاها، وإن كانت لغيره توقف.', page: 79 },
    { title: 'مراتب المحاسبة (للاطلاع فقط)', text: 'ذكر ابن القيم أن يبدأ بالفرائض، ثم المناهي، ثم الغفلة، ثم ما عملته الجوارح: لم فعلته؟ ولمن؟ وعلى أي وجه؟ فالأول سؤال عن الإخلاص، والثاني عن المتابعة.', more: FYI, page: 81 },
    { title: 'خفة الحساب', text: 'قال عمر: حاسبوا أنفسكم قبل أن تحاسبوا، فإنه أهون لحسابكم، وزنوا أنفسكم قبل أن توزنوا، وتجهزوا للعرض الأكبر.', page: 81 },
    { title: 'السؤال يوم القيامة', text: '﴿إن السمع والبصر والفؤاد كل أولئك كان عنه مسؤولًا﴾ [الإسراء: ٣٦]، بل يسأل الصادقين عن صدقهم [الأحزاب: ٨]، فكيف بغيرهم؟', page: 83 }
  ],
  keycards: [
    { kind: 'definitie', title: 'المحاسبة', items: ['النظر في أعمال النفس', 'استدراك الأخطاء', 'المضي في الصالحات'], page: 78, origin: 'boek' },
    { kind: 'opsomming', title: 'المحاسبة قبل العمل', items: ['هل أقدر عليه؟', 'هل فيه خير أو شر؟', 'هل هو لله أو للناس؟'], page: 79, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات المحاسبة', items: ['النجاة والفلاح', 'خفة الحساب', 'حفظ الإيمان', 'معرفة العيوب', 'التواضع', 'اغتنام الوقت'], page: 81, origin: 'boek' },
    { kind: 'opsomming', title: 'ما يعين على المحاسبة', items: ['العلم بأن الله يعلم ما في النفس', 'أنها راحة غدًا', 'التفكر في السؤال يوم القيامة', 'التفكر في أهوال القيامة', 'ذكر الموت'], page: 82, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'المحاسبة النظر في أعمال النفس واستدراك الأخطاء.',
    'الكيس من دان نفسه وعمل لما بعد الموت.',
    'نحاسب أنفسنا قبل العمل وبعده.',
    'حاسبوا أنفسكم قبل أن تحاسبوا.',
    'يعين على المحاسبة ذكر الموت والسؤال يوم القيامة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الآية التي هي أصل في محاسبة النفس؟', options: ['﴿ولتنظر نفس ما قدمت لغد﴾', '﴿إن مع العسر يسرًا﴾', '﴿وقل رب زدني علمًا﴾', '﴿واصبر وما صبرك إلا بالله﴾'], answer: 0, explain: 'كما قال السعدي.', page: 78 },
    { type: 'tf', q: 'المحاسبة تكون بعد العمل فقط.', options: ['صواب', 'خطأ'], answer: 1, explain: 'تكون قبل العمل وبعده.', page: 79 },
    { type: 'mc', q: 'من الكيس في الحديث؟', options: ['من دان نفسه وعمل لما بعد الموت', 'من جمع المال', 'من أتبع نفسه هواها', 'من كثر كلامه'], answer: 0, explain: 'حديث شداد بن أوس.', page: 79 },
    { type: 'mc', q: 'من قال: حاسبوا أنفسكم قبل أن تحاسبوا؟', options: ['عمر بن الخطاب', 'الفضيل بن عياض', 'محمد بن واسع', 'معروف الكرخي'], answer: 0, explain: 'كما في الدرس الثالث والعشرين.', page: 81 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٨٤. الصفحة ٨١ في الكتاب للاطلاع فقط. أخبار السلف في الصفحة ٨٤ لم تُذكر هنا لأن الكتاب لم يذكر مصدرها.'
}

const nl = {
  scope: 'unit',
  unit: 11,
  title: 'Zelfrekenschap (muḥāsaba)',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'De betekenis van zelfrekenschap, de bewijzen en de plicht, de twee soorten (vóór en na de daad), de rangen, de vruchten, en wat erbij helpt.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 11 in één kaart',
    intro: 'Zelfrekenschap: soorten, vruchten en hulp.',
    root: { label: 'Zelfrekenschap', sub: 'Eenheid 11' },
    nodes: [
      { label: 'Betekenis en plicht', sub: 'les 22', page: 78, children: ['je daden nagaan', 'consensus van de geleerden'] },
      { label: 'Soorten', sub: 'les 22', page: 79, children: ['vóór de daad', 'na de daad: gehoorzaamheid, zonden, het toegestane'] },
      { label: 'Vruchten', sub: 'les 23', page: 81, children: ['redding', 'lichte afrekening', 'geloof bewaren', 'nederigheid', 'tijd benutten'] },
      { label: 'Wat helpt', sub: 'les 23', page: 82, children: ['Allah weet wat in je ziel is', 'de vragen op de Opstanding', 'de dood gedenken'] }
    ]
  },
  points: [
    { text: 'De ziel zet aan tot het kwade, behalve bij wie Allah zich ontfermt; zij heeft een teugel van godsvrees en vrees nodig.', page: 78 },
    { text: 'Muḥāsaba is letterlijk tellen; in de leer: je daden nagaan, fouten herstellen en doorgaan met het goede.', page: 78 },
    { text: 'De basis is: "laat elke ziel zien wat zij voor morgen vooruitzond" (al-Ḥashr 59:18).', page: 78 },
    { text: 'De geleerden zijn het eens dat zelfrekenschap verplicht is, over vroegere en komende daden.', page: 79 },
    { text: 'Vóór de daad: kan ik het? Zit er goed in? Is het voor Allah?', page: 79 },
    { text: 'Na de daad zijn er drie soorten: over gehoorzaamheid, over zonden, en over wat beter nagelaten was of toegestaan is.', page: 80 },
    { text: 'Vruchten: redding, een lichtere afrekening, het geloof bewaren, je gebreken kennen, nederigheid en tijd benutten.', page: 81 },
    { text: 'Wat helpt: weten dat Allah kent wat in je ziel is, dat het morgen rust geeft, nadenken over de vragen en verschrikkingen van de Opstanding, en de dood gedenken.', page: 82 }
  ],
  terms: [
    { term: 'المحاسبة', translit: 'al-muḥāsaba', meaning: 'Letterlijk: tellen; in de leer: je daden nagaan, fouten herstellen en doorgaan met het goede.', explanation: '', notes: [], page: 78 },
    { term: 'النفس اللوامة', translit: 'an-nafs al-lawwāma', meaning: 'De ziel die haar eigenaar verwijten maakt.', explanation: '"Nee, Ik zweer bij de verwijtende ziel" (al-Qiyāma 75:2).', notes: [], page: 78 },
    { term: 'الكيّس', translit: 'al-kayyis', meaning: 'De verstandige, vastberaden mens.', explanation: 'In de hadith van Shaddād ibn Aws.', notes: [], page: 79 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Zelfrekenschap na de daad',
      intro: 'Zoals in les 22.',
      columns: ['Je vraagt jezelf', 'Daarna'],
      rows: [
        { label: 'Over gehoorzaamheid', cells: ['heb ik het volledig, oprecht en volgens de soenna gedaan?', 'aanvullen, herstellen, berouw en vergeving vragen'] },
        { label: 'Over zonden', cells: ['waarom deed ik het?', 'uitwissen met berouw, vergeving vragen en goede daden'] },
        { label: 'Over het toegestane en wat beter nagelaten was', cells: ['waarom deed ik dit, en wat had ik eraan?', 'laten wat niet baat'] }
      ],
      page: 80
    }
  ],
  sections: [
    { title: 'De verwijtende ziel', text: 'al-Ḥasan zei over "Ik zweer bij de verwijtende ziel": je ziet de gelovige altijd zichzelf verwijten maken: wat bedoelde ik met mijn woord, met wat ik at, met wat ik dronk? De zondaar gaat gewoon door zonder zichzelf iets te verwijten.', page: 79 },
    { title: 'Zelfrekenschap vóór de daad', text: 'al-Ḥasan zei: als een van hen iets wilde geven, wachtte hij even; was het voor Allah, dan deed hij het, en was het voor iets anders, dan hield hij op.', page: 79 },
    { title: 'Rangen van zelfrekenschap (alleen ter kennisname)', text: 'Ibn al-Qayyim noemt: eerst de plichten, dan de verboden, dan onachtzaamheid, dan wat de ledematen deden: waarom deed ik het, voor wie, en hoe? Het eerste is een vraag naar oprechtheid, het tweede naar navolging.', more: FYI_NL, page: 81 },
    { title: 'Een lichtere afrekening', text: 'ʿUmar zei: reken jezelf af voordat je afgerekend wordt, want dat maakt je afrekening lichter; weeg jezelf voordat je gewogen wordt, en maak je klaar voor de grote voorleiding.', page: 81 },
    { title: 'Ondervraagd op de Opstanding', text: '"Het gehoor, het zicht en het hart: over dat alles wordt gevraagd" (al-Isrāʾ 17:36); zelfs de oprechten worden naar hun oprechtheid gevraagd (al-Aḥzāb 33:8), hoeveel te meer anderen.', page: 83 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Zelfrekenschap', items: ['je daden nagaan', 'fouten herstellen', 'doorgaan met het goede'], page: 78, origin: 'boek' },
    { kind: 'opsomming', title: 'Vóór de daad', items: ['kan ik het?', 'zit er goed of kwaad in?', 'is het voor Allah of voor de mensen?'], page: 79, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van zelfrekenschap', items: ['redding en succes', 'lichtere afrekening', 'het geloof bewaren', 'je gebreken kennen', 'nederigheid', 'tijd benutten'], page: 81, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat helpt bij zelfrekenschap', items: ['weten dat Allah kent wat in je ziel is', 'weten dat het morgen rust geeft', 'nadenken over de vragen op de Opstanding', 'nadenken over de verschrikkingen van de Opstanding', 'de dood gedenken'], page: 82, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Zelfrekenschap is je daden nagaan en fouten herstellen.',
    'Verstandig is wie zichzelf afrekent en werkt voor na de dood.',
    'Reken jezelf af vóór en na de daad.',
    'Reken jezelf af voordat je afgerekend wordt.',
    'De dood en de vragen op de Opstanding gedenken helpt bij zelfrekenschap.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welk vers is de basis van zelfrekenschap?', options: ['"laat elke ziel zien wat zij voor morgen vooruitzond"', '"met moeite komt gemak"', '"Heer, vermeerder mijn kennis"', '"wees geduldig; je geduld is alleen door Allah"'], answer: 0, explain: 'Zoals as-Saʿdī zei.', page: 78 },
    { type: 'tf', q: 'Zelfrekenschap is alleen na de daad.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is vóór en na de daad.', page: 79 },
    { type: 'mc', q: 'Wie is volgens de hadith verstandig?', options: ['wie zichzelf afrekent en werkt voor na de dood', 'wie bezit verzamelt', 'wie zijn begeerten volgt', 'wie veel praat'], answer: 0, explain: 'De hadith van Shaddād ibn Aws.', page: 79 },
    { type: 'mc', q: 'Wie zei: reken jezelf af voordat je afgerekend wordt?', options: ['ʿUmar ibn al-Khaṭṭāb', 'al-Fuḍayl ibn ʿIyāḍ', 'Muḥammad ibn Wāsiʿ', 'Maʿrūf al-Karkhī'], answer: 0, explain: 'Zoals in les 23.', page: 81 }
  ]),
  note: 'Oefening van het boek op p. 84. Pagina 81 staat in het boek alleen ter kennisname. De verhalen over de salaf op p. 84 staan hier niet, omdat het boek er geen bron bij geeft. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '22', unit: 11, ar, nl }
