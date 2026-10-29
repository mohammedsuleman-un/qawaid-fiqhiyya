// Hoofdstukkaart bij السيرة النبوية (١), eenheid 1: أهمية السيرة ومكانتها (les 1, boek p. 9–13).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (١)، سلسلة زاد العلمية',
  pages: '9–13',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Seerah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده والناس أجمعين', takhrij: 'متفق عليه', note: 'دراسة السيرة تزيد محبة النبي ﷺ.', pages: [11], nl: 'Niemand van jullie gelooft werkelijk totdat ik hem dierbaarder ben dan zijn vader, zijn kind en alle mensen', nlNote: 'Het bestuderen van de sīra vergroot de liefde voor de Profeet ﷺ.' }
]

const TAKHRIJ_NL = { 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)' }

const PERSONS = [
  ['abu-l-faraj-al-isfahani', 'text', [12], 'حذر الكتاب من الاعتماد على كتابه «الأغاني» في السيرة.', 'Het boek waarschuwt ervoor zijn al-Aghānī als bron voor de sīra te gebruiken.'],
  ['ibn-abd-rabbih', 'text', [13], 'حذر الكتاب من الاعتماد على كتابه «العقد الفريد» في السيرة.', 'Het boek waarschuwt ervoor zijn al-ʿIqd al-farīd als bron voor de sīra te gebruiken.'],
  ['al-bukhari', 'takhrij', [11], 'أخرج «لا يؤمن أحدكم حتى أكون أحب إليه».', 'Nam "niemand van jullie gelooft werkelijk totdat ik hem dierbaarder ben" op.'],
  ['muslim', 'takhrij', [11], 'أخرج «لا يؤمن أحدكم حتى أكون أحب إليه».', 'Nam "niemand van jullie gelooft werkelijk totdat ik hem dierbaarder ben" op.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'أهمية السيرة ومكانتها',
  subtitle: 'درس واحد في صفحة واحدة',
  summary: 'لماذا ندرس سيرة النبي ﷺ: هي ميزان الأعمال والقدوة الحسنة، وعون على فهم القرآن والدين كله، وتزيد محبته ﷺ وتعرف بجيل الصحابة؛ مع التحذير من تلقي السيرة من كتب الأدب والشعر.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'موضوعا الوحدة كما في الكتاب.',
    root: { label: 'أهمية السيرة ومكانتها', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'أهمية دراسة السيرة', sub: 'الدرس ١', page: 11, children: ['الميزان', 'القدوة', 'فهم القرآن', 'المحبة', 'جيل الصحابة', 'فهم الدين كله'] },
      { label: 'التحذير من بعض الكتب', sub: 'الدرس ١', page: 12, children: ['الأغاني', 'العقد الفريد'] }
    ]
  },
  points: [
    { text: 'سيرته ﷺ الميزان الذي توزن به الأعمال: ما وافق هديه قبل، وما خالفه رد.', page: 11 },
    { text: 'السيرة تضع بين يدي المسلم صورة حية للقدوة الحسنة.', page: 11 },
    { text: 'هي عون على فهم كتاب الله والعمل به، لأن خلقه ﷺ كان القرآن.', page: 11 },
    { text: 'دراسة السيرة تزيد محبة النبي ﷺ.', page: 11 },
    { text: 'تعرف بجيل الصحابة ومواقفهم وافتدائهم إياه بالنفس والولد والمال.', page: 12 },
    { text: 'حياته ﷺ تطبيق للدين كله، فسيرته عون على فهمه عقيدة وعبادة وفقهًا.', page: 12 },
    { text: 'لا تؤخذ السيرة من كتب الأدب ودواوين الشعر، ففيها أخبار مكذوبة وتشويه للتاريخ.', page: 13 }
  ],
  terms: [
    { term: 'السيرة', translit: 'as-sīra', meaning: 'أخبار حياة النبي ﷺ وهديه وشمائله.', explanation: 'وحياته تطبيق للدين كله.', notes: [], page: 11 },
    { term: 'القدوة الحسنة', translit: 'al-qudwa al-ḥasana', meaning: 'المثال الذي يقتدى به في الخير.', explanation: '', notes: ['[الأحزاب: ٢١]'], page: 11 },
    { term: 'الشمائل', translit: 'ash-shamāʾil', meaning: 'صفاته وأخلاقه ﷺ.', explanation: 'وهي المنهج العظيم للمسلم الذي يريد الخير والحياة الكريمة.', notes: [], page: 12 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'سبع فوائد لدراسة السيرة',
      intro: 'كما عدها الكتاب.',
      nodes: [
        { label: 'ميزان الأعمال', page: 11 },
        { label: 'القدوة الحسنة', sub: '[الأحزاب: ٢١]', page: 11 },
        { label: 'فهم كتاب الله', sub: 'كان خلقه القرآن', page: 11 },
        { label: 'زيادة محبته ﷺ', page: 11 },
        { label: 'منهج للحياة الكريمة', page: 12 },
        { label: 'معرفة جيل الصحابة', page: 12 },
        { label: 'فهم الدين كله', sub: 'عقيدة وعبادة وفقهًا', page: 12 }
      ]
    },
    {
      type: 'compare',
      title: 'من أين تؤخذ السيرة؟',
      intro: 'ما يحذر منه الكتاب وما اعتمد عليه.',
      columns: ['يحذر منه', 'من مصادر الكتاب'],
      rows: [
        { label: 'أمثلة', cells: ['«الأغاني» لأبي الفرج الأصبهاني، و«العقد الفريد» لابن عبد ربه', 'سيرة ابن هشام، زاد المعاد، البداية والنهاية، الرحيق المختوم'] },
        { label: 'السبب', cells: ['أخبار مكذوبة مع الدس والتشويه', 'كتب السيرة المعتمدة'] }
      ],
      page: 13
    }
  ],
  sections: [
    { title: 'السيرة ميزان', text: 'سيرة النبي ﷺ هي الميزان الذي توزن به الأعمال؛ فما وافق هديه وسلوكه كان مقبولًا، وما لم يوافقه كان مردودًا.', more: '', page: 11 },
    { title: 'السيرة والقرآن', text: 'كان خلقه ﷺ القرآن، فمعرفة سيرته عون على فهم كتاب الله والعمل به.', more: '', page: 11 },
    { title: 'جيل الصحابة', text: 'بالسيرة نتعرف على الصحابة ومواقفهم، وكيف افتدوه بالنفس والولد والمال، وحرصهم على الاقتداء به.', more: '', page: 12 },
    { title: 'التحذير من بعض الكتب', text: 'يستقي بعض الناس السيرة من كتب الأدب ودواوين الشعر، ككتاب «الأغاني» لأبي الفرج الأصبهاني و«العقد الفريد» لابن عبد ربه الأندلسي؛ وفيها أخبار عن النبي ﷺ وأصحابه مكذوبة باطلة، فلا ينبغي أن تكون مصدرًا لتلقي السيرة وتاريخ الإسلام وأخبار الصحابة.', more: '', page: 13 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أهمية دراسة السيرة', items: ['ميزان الأعمال', 'القدوة الحسنة', 'فهم كتاب الله', 'زيادة محبته ﷺ', 'منهج الحياة الكريمة', 'معرفة الصحابة', 'فهم الدين كله'], page: 11, origin: 'boek' },
    { kind: 'bewijs', title: 'القدوة الحسنة', items: ['﴿لقد كان لكم في رسول الله أسوة حسنة﴾ [الأحزاب: ٢١]'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'كتب لا تؤخذ منها السيرة', items: ['الأغاني لأبي الفرج الأصبهاني', 'العقد الفريد لابن عبد ربه الأندلسي'], page: 13, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'السيرة ميزان الأعمال والقدوة الحسنة.',
    'تعين على فهم القرآن والدين كله.',
    'تزيد محبة النبي ﷺ وتعرف بالصحابة.',
    'لا تؤخذ السيرة من كتب الأدب والشعر كالأغاني والعقد الفريد.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'بم توزن الأعمال؟', options: ['بسيرة النبي ﷺ وهديه', 'بعادات الناس', 'بأقوال الشعراء', 'بالعقل وحده'], answer: 0, explain: 'فما وافق هديه قبل وما خالفه رد.', page: 11 },
    { type: 'tf', q: 'دراسة السيرة تعين على فهم القرآن.', options: ['صواب', 'خطأ'], answer: 0, explain: 'لأنه ﷺ كان خلقه القرآن.', page: 11 },
    { type: 'mc', q: 'أي الكتب حذر الكتاب من تلقي السيرة منها؟', options: ['الأغاني', 'زاد المعاد', 'سيرة ابن هشام', 'الرحيق المختوم'], answer: 0, explain: 'وكذلك العقد الفريد.', page: 12 },
    { type: 'mc', q: 'لماذا لا تؤخذ السيرة من كتب الأدب ودواوين الشعر؟', options: ['لما فيها من أخبار مكذوبة وتشويه', 'لأنها قديمة', 'لأنها بلغة صعبة', 'لأنها قصيرة'], answer: 0, explain: 'اشتملت على أخبار باطلة مع الدس والتزوير.', page: 13 },
    { type: 'tf', q: 'من فوائد السيرة التعرف على جيل الصحابة ومواقفهم.', options: ['صواب', 'خطأ'], answer: 0, explain: 'وافتدائهم إياه بالنفس والولد والمال.', page: 12 }
  ]),
  note: 'نشاط الكتاب في صفحة ١٣.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Het belang van de sīra',
  subtitle: 'Eén les op één pagina',
  summary: 'Waarom we de levensgeschiedenis van de Profeet ﷺ bestuderen: zij is de maatstaf voor daden en het mooie voorbeeld, helpt de Koran en de hele godsdienst te begrijpen, vergroot de liefde voor hem ﷺ en laat de generatie van de metgezellen kennen; met een waarschuwing om de sīra niet uit literatuur en poëzie te halen.',
  source: { ...source, label: 'Kitāb as-Sīra an-nabawiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De twee onderwerpen zoals in het boek.',
    root: { label: 'Het belang van de sīra', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Waarom de sīra bestuderen', sub: 'les 1', page: 11, children: ['maatstaf', 'voorbeeld', 'de Koran begrijpen', 'liefde', 'de metgezellen', 'de hele godsdienst'] },
      { label: 'Waarschuwing voor sommige boeken', sub: 'les 1', page: 12, children: ['al-Aghānī', 'al-ʿIqd al-farīd'] }
    ]
  },
  points: [
    { text: 'Zijn levensloop ﷺ is de maatstaf voor daden: wat met zijn leiding overeenkomt, wordt aanvaard; wat ervan afwijkt, wordt afgewezen.', page: 11 },
    { text: 'De sīra geeft de moslim een levend beeld van het mooie voorbeeld.', page: 11 },
    { text: 'Zij helpt het Boek van Allah te begrijpen en ernaar te handelen, want zijn karakter ﷺ was de Koran.', page: 11 },
    { text: 'De sīra bestuderen vergroot de liefde voor de Profeet ﷺ.', page: 11 },
    { text: 'Zij laat de metgezellen kennen, hun houding, en hoe zij hem met hun leven, kinderen en bezit beschermden.', page: 12 },
    { text: 'Zijn leven ﷺ is de toepassing van de hele godsdienst; zijn sīra helpt geloofsleer, aanbidding en fiqh te begrijpen.', page: 12 },
    { text: 'De sīra wordt niet uit literatuur en dichtbundels gehaald; daarin staan verzonnen berichten en verdraaiingen.', page: 13 }
  ],
  terms: [
    { term: 'السيرة', translit: 'as-sīra', meaning: 'De berichten over het leven, de leiding en de eigenschappen van de Profeet ﷺ.', explanation: 'Zijn leven is de toepassing van de hele godsdienst.', notes: [], page: 11 },
    { term: 'القدوة الحسنة', translit: 'al-qudwa al-ḥasana', meaning: 'Het mooie voorbeeld dat men in het goede volgt.', explanation: '', notes: ['al-Aḥzāb 33:21'], page: 11 },
    { term: 'الشمائل', translit: 'ash-shamāʾil', meaning: 'Zijn eigenschappen en karakter ﷺ.', explanation: 'De grote leidraad voor de moslim die het goede en een waardig leven wil.', notes: [], page: 12 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'Zeven redenen om de sīra te bestuderen',
      intro: 'Zoals het boek ze opsomt.',
      nodes: [
        { label: 'Maatstaf voor daden', page: 11 },
        { label: 'Het mooie voorbeeld', sub: 'al-Aḥzāb 33:21', page: 11 },
        { label: 'Het Boek van Allah begrijpen', sub: 'zijn karakter was de Koran', page: 11 },
        { label: 'Meer liefde voor hem ﷺ', page: 11 },
        { label: 'Leidraad voor een waardig leven', page: 12 },
        { label: 'De metgezellen leren kennen', page: 12 },
        { label: 'De hele godsdienst begrijpen', sub: 'geloofsleer, aanbidding en fiqh', page: 12 }
      ]
    },
    {
      type: 'compare',
      title: 'Waar haal je de sīra vandaan?',
      intro: 'Waarvoor het boek waarschuwt en waarop het steunt.',
      columns: ['Waarschuwing', 'Bronnen van het boek'],
      rows: [
        { label: 'Voorbeelden', cells: ['al-Aghānī van Abū l-Faraj al-Iṣfahānī en al-ʿIqd al-farīd van Ibn ʿAbd Rabbih', 'de sīra van Ibn Hishām, Zād al-maʿād, al-Bidāya wa-n-nihāya, ar-Raḥīq al-makhtūm'] },
        { label: 'Reden', cells: ['verzonnen berichten, vervalsing en verdraaiing', 'betrouwbare sīra-werken'] }
      ],
      page: 13
    }
  ],
  sections: [
    { title: 'De sīra als maatstaf', text: 'De levensloop van de Profeet ﷺ is de maatstaf waarmee daden gewogen worden: wat met zijn leiding en gedrag overeenkomt, wordt aanvaard; wat niet, wordt afgewezen.', more: '', page: 11 },
    { title: 'De sīra en de Koran', text: 'Zijn karakter ﷺ was de Koran; wie zijn leven kent, begrijpt het Boek van Allah beter en handelt er beter naar.', more: '', page: 11 },
    { title: 'De generatie van de metgezellen', text: 'Via de sīra leren we de metgezellen kennen: hun houding, hoe zij hem met hun leven, kinderen en bezit beschermden en hoe graag zij hem volgden.', more: '', page: 12 },
    { title: 'Waarschuwing voor sommige boeken', text: 'Sommigen halen de sīra uit literatuur en dichtbundels, zoals al-Aghānī van Abū l-Faraj al-Iṣfahānī en al-ʿIqd al-farīd van Ibn ʿAbd Rabbih al-Andalusī. Daarin staan verzonnen berichten over de Profeet ﷺ en zijn metgezellen; ze horen geen bron te zijn voor de sīra, de geschiedenis van de islam of berichten over de metgezellen.', more: '', page: 13 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Het belang van de sīra', items: ['maatstaf voor daden', 'het mooie voorbeeld', 'het Boek van Allah begrijpen', 'meer liefde voor hem ﷺ', 'leidraad voor een waardig leven', 'de metgezellen kennen', 'de hele godsdienst begrijpen'], page: 11, origin: 'boek' },
    { kind: 'bewijs', title: 'Het mooie voorbeeld', items: ['"In de Boodschapper van Allah hebben jullie een mooi voorbeeld" (al-Aḥzāb 33:21)'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'Boeken die geen bron voor de sīra zijn', items: ['al-Aghānī van Abū l-Faraj al-Iṣfahānī', 'al-ʿIqd al-farīd van Ibn ʿAbd Rabbih al-Andalusī'], page: 13, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De sīra is de maatstaf voor daden en het mooie voorbeeld.',
    'Zij helpt de Koran en de hele godsdienst te begrijpen.',
    'Zij vergroot de liefde voor de Profeet ﷺ en laat de metgezellen kennen.',
    'Haal de sīra niet uit literatuur en poëzie zoals al-Aghānī en al-ʿIqd al-farīd.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarmee worden daden gewogen?', options: ['met de levensloop en leiding van de Profeet ﷺ', 'met de gewoonten van de mensen', 'met de woorden van dichters', 'alleen met het verstand'], answer: 0, explain: 'Wat ermee overeenkomt wordt aanvaard, wat afwijkt afgewezen.', page: 11 },
    { type: 'tf', q: 'De sīra bestuderen helpt de Koran te begrijpen.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Want zijn karakter ﷺ was de Koran.', page: 11 },
    { type: 'mc', q: 'Voor welk boek als bron van de sīra waarschuwt het boek?', options: ['al-Aghānī', 'Zād al-maʿād', 'de sīra van Ibn Hishām', 'ar-Raḥīq al-makhtūm'], answer: 0, explain: 'En ook al-ʿIqd al-farīd.', page: 12 },
    { type: 'mc', q: 'Waarom haal je de sīra niet uit literatuur en dichtbundels?', options: ['er staan verzonnen berichten en verdraaiingen in', 'ze zijn oud', 'de taal is moeilijk', 'ze zijn kort'], answer: 0, explain: 'Ze bevatten valse berichten, vervalsing en verdraaiing.', page: 13 },
    { type: 'tf', q: 'Een van de voordelen van de sīra is de metgezellen en hun houding leren kennen.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'En hoe zij hem met hun leven, kinderen en bezit beschermden.', page: 12 }
  ]),
  note: 'Oefening van het boek op p. 13. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-seerah', chapter: '1', unit: 1, ar, nl }
