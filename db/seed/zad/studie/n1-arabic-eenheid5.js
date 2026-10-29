// Hoofdstukkaart bij اللغة العربية (١), eenheid 5: الأسماء الخمسة والأفعال الخمسة (lessen 21–24, boek p. 87–98).
// Volgt de vierde وحدة van het boek. Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand.
// Les 21 staat in het boek "alleen ter kennisname", les 22 voor het deel over de verbuiging; de kaart vermeldt dat.
// Geen hadith en geen personen in deze lessen. Het boek noemt «فيهما عينان تجريان» op p. 95 als ar-Raḥmān 66; in de muṣḥaf is dat vers 50.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (١)، سلسلة زاد العلمية',
  pages: '87–98',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_ArabicLanguage/page/n{p}/mode/1up'
}

const FYI = 'الدرس الحادي والعشرون في الكتاب للاطلاع فقط، والثاني والعشرون للاطلاع فقط في الإعراب.'
const FYI_NL = 'Les 21 staat in het boek alleen ter kennisname, en les 22 voor het deel over de verbuiging.'

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'الأسماء الخمسة والأفعال الخمسة',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'الأسماء الخمسة وإعرابها بالحروف وشروط ذلك، والأفعال الخمسة وإعرابها بثبوت النون وحذفها، والتأنيث وعلاماته، والتاء المربوطة وأقسام المؤنث. ' + FYI,
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'الوحدة الرابعة من الكتاب: موضوعات الدروس الأربعة.',
    root: { label: 'الأسماء الخمسة والأفعال الخمسة', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'الأسماء الخمسة', sub: 'الدرس ٢١', page: 89, children: ['أب، أخ، حم، فو، ذو', 'إعرابها بالحروف', 'شروطها'] },
      { label: 'الأفعال الخمسة', sub: 'الدرس ٢٢', page: 93, children: ['أوزانها', 'ثبوت النون', 'حذف النون'] },
      { label: 'التأنيث', sub: 'الدرس ٢٣', page: 96, children: ['الإشارة بهذه', 'علاماته', 'ما يذكر ويؤنث'] },
      { label: 'التاء المربوطة', sub: 'الدرس ٢٤', page: 97, children: ['في المشتق', 'في الجامد', 'أقسام المؤنث'] }
    ]
  },
  points: [
    { text: 'الأسماء الخمسة: أبوك، أخوك، حموك، فوك، ذو؛ ترفع بالواو وتنصب بالألف وتجر بالياء.', page: 89 },
    { text: 'شرط إعرابها بالحروف أن تكون مفردة مكبرة مضافة إلى غير ياء المتكلم.', page: 92 },
    { text: 'ويشترط في «فو» أن تخلو من الميم، وفي «ذو» أن تكون بمعنى صاحب.', page: 91 },
    { text: 'الأفعال الخمسة كل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة.', page: 93 },
    { text: 'ترفع الأفعال الخمسة بثبوت النون، وتنصب وتجزم بحذفها.', page: 94 },
    { text: 'المؤنث ما يصح أن يشار إليه بـ«هذه»، وعلاماته التاء المربوطة وألف التأنيث المقصورة والممدودة.', page: 96 },
    { text: 'تدخل التاء المربوطة على أكثر الأسماء المشتقة، ويقل دخولها على الجامدة.', page: 97 }
  ],
  terms: [
    { term: 'الأسماء الخمسة', translit: 'al-asmāʾ al-khamsa', meaning: 'أب، أخ، حم، فو، ذو؛ ترفع بالواو وتنصب بالألف وتجر بالياء.', explanation: '«وكان أبوهما صالحًا».', notes: [], page: 89 },
    { term: 'الأفعال الخمسة', translit: 'al-afʿāl al-khamsa', meaning: 'كل فعل مضارع أسند إلى ألف الاثنين أو واو الجماعة أو ياء المخاطبة.', explanation: 'يفعلان، تفعلان، يفعلون، تفعلون، تفعلين.', notes: [], page: 93 },
    { term: 'ثبوت النون', translit: 'thubūt an-nūn', meaning: 'علامة رفع الأفعال الخمسة.', explanation: '«مما تحبون».', notes: [], page: 94 },
    { term: 'حذف النون', translit: 'ḥadhf an-nūn', meaning: 'علامة نصب الأفعال الخمسة وجزمها.', explanation: '«أن تذهبوا به»، «ولا تسبوا».', notes: [], page: 94 },
    { term: 'المؤنث', translit: 'al-muʾannath', meaning: 'ما يصح أن يشار إليه بـ«هذه».', explanation: 'امرأة، ناقة، شمس، دار.', notes: [], page: 96 },
    { term: 'ألف التأنيث المقصورة', translit: 'alif at-taʾnīth al-maqṣūra', meaning: 'من علامات التأنيث اللفظية.', explanation: 'ليلى.', notes: [], page: 96 },
    { term: 'ألف التأنيث الممدودة', translit: 'alif at-taʾnīth al-mamdūda', meaning: 'من علامات التأنيث اللفظية.', explanation: 'سمراء.', notes: [], page: 96 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'علامات الإعراب الفرعية في الوحدة',
      intro: 'كما في الدرسين الحادي والعشرين والثاني والعشرين.',
      columns: ['الرفع', 'النصب', 'الجر أو الجزم'],
      rows: [
        { label: 'الأسماء الخمسة', cells: ['بالواو', 'بالألف', 'الجر بالياء'] },
        { label: 'الأفعال الخمسة', cells: ['بثبوت النون', 'بحذف النون', 'الجزم بحذف النون'] }
      ],
      page: 94
    },
    {
      type: 'cards',
      title: 'شروط إعراب الأسماء الخمسة بالحروف',
      intro: 'وما يحدث إذا اختل الشرط، كما في الكتاب.',
      nodes: [
        { label: 'مضافة إلى غير ياء المتكلم', sub: 'مع الياء: علامات مقدرة («إن أبي يدعوك»)؛ بلا إضافة: العلامات الأصلية («إن له أبًا»)', page: 90 },
        { label: 'مفردة', sub: 'إذا ثنيت أو جمعت أعربت إعراب المثنى أو الجمع («آوى إليه أبويه»)', page: 90 },
        { label: 'مكبرة', sub: 'إذا صغرت أعربت بالحركات الظاهرة (أُخيّك)', page: 91 },
        { label: '«فو» بلا ميم، و«ذو» بمعنى صاحب', sub: 'فم يعرب بالحركات الظاهرة', page: 91 }
      ]
    },
    {
      type: 'compare',
      title: 'أقسام المؤنث',
      intro: 'كما في خلاصة الدرس الرابع والعشرين.',
      columns: ['يقابله'],
      rows: [
        { label: 'حقيقي (فاطمة)', cells: ['المجازي (الشمس)'] },
        { label: 'معنوي (سعاد)', cells: ['اللفظي (طلحة)'] }
      ],
      page: 97
    }
  ],
  sections: [
    { title: 'نماذج معربة للأسماء الخمسة (للاطلاع فقط)', text: '«أمرهم أبوهم» فاعل، «ما كان أبوك امرأ سوء» اسم كان، «ما كان محمد أبا أحد» خبر كان، «سنراود عنه أباه» مفعول به، «من أخيه» مجرور، «تبت يدا أبي لهب» مضاف إليه.', more: FYI, page: 89 },
    { title: 'أمثلة الأفعال الخمسة (للاطلاع فقط في الإعراب)', text: '«كانا يأكلان الطعام» بألف الاثنين، «بما يعملون» بواو الجماعة، «أتعجبين من أمر الله» بياء المخاطبة؛ «ليحزنني أن تذهبوا به» منصوب بحذف النون، «ولا تسبوا» مجزوم بحذف النون.', more: FYI, page: 93 },
    { title: 'أسماء تذكر وتؤنث', text: 'سمع عن العرب تذكيرها وتأنيثها، منها: الزوج، السبيل، الطريق، السوق، اللسان، السكين، الذراع، الصاع؛ ويرجع فيها إلى المعاجم وكتب اللغة.', page: 96 },
    { title: 'علامة التأنيث على الجنسين', text: 'بعض الأسماء يحمل علامة التأنيث ويطلق على الجنسين كحية وسخلة، وكذلك بعض الصفات: رجل ربعة وامرأة ربعة.', page: 96 },
    { title: 'تنبيه على رقم آية', text: 'ذكر الكتاب في نشاط الصفحة ٩٥ «فيهما عينان تجريان» بعزو [الرحمن: ٦٦]، وهي في المصحف الآية ٥٠.', page: 95 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شروط إعراب الأسماء الخمسة بالحروف', items: ['مفردة', 'مكبرة', 'مضافة إلى غير ياء المتكلم'], page: 92, origin: 'boek' },
    { kind: 'opsomming', title: 'أوزان الأفعال الخمسة', items: ['يفعلان', 'تفعلان', 'يفعلون', 'تفعلون', 'تفعلين'], page: 93, origin: 'boek' },
    { kind: 'opsomming', title: 'علامات التأنيث', items: ['معنوية: قبول الإشارة بـ«هذه»', 'لفظية: التاء المربوطة، ألف التأنيث المقصورة، ألف التأنيث الممدودة'], page: 97, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'الأسماء الخمسة ترفع بالواو وتنصب بالألف وتجر بالياء بشروطها.',
    'الأفعال الخمسة ترفع بثبوت النون وتنصب وتجزم بحذفها.',
    'المؤنث ما يشار إليه بـ«هذه»، وعلاماته اللفظية ثلاث.',
    'المؤنث حقيقي ومجازي، ومعنوي ولفظي.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'بم يجر الاسم في «فمن عفي له من أخيه شيء»؟', options: ['بالياء', 'بالكسرة', 'بالفتحة', 'بالألف'], answer: 0, explain: 'من الأسماء الخمسة.', page: 89 },
    { type: 'tf', q: '«إن أبي يدعوك»: أبي معرب بالألف.', options: ['صواب', 'خطأ'], answer: 1, explain: 'أضيف إلى ياء المتكلم فأعرب بعلامات مقدرة.', page: 90 },
    { type: 'mc', q: 'ما علامة نصب «تذهبوا» في «أن تذهبوا به»؟', options: ['حذف النون', 'الفتحة', 'ثبوت النون', 'الياء'], answer: 0, explain: 'من الأفعال الخمسة.', page: 94 },
    { type: 'mc', q: 'أي هذه فيه ألف التأنيث الممدودة؟', options: ['سمراء', 'ليلى', 'فاطمة', 'سعاد'], answer: 0, explain: 'ليلى بالمقصورة، وفاطمة بالتاء، وسعاد مؤنث معنوي.', page: 96 },
    { type: 'tf', q: 'تدخل التاء المربوطة على أكثر الأسماء المشتقة.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كعالم وعالمة، ويقل دخولها على الجامدة.', page: 97 }
  ]),
  note: 'الدرس الحادي والعشرون في الكتاب للاطلاع فقط، والثاني والعشرون للاطلاع فقط في الإعراب. نشاط الكتاب في الصفحات ٩٢ و٩٥ و٩٨.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'De vijf naamwoorden en de vijf werkwoorden',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De vijf naamwoorden met verbuiging door letters en de voorwaarden daarvoor; de vijf werkwoorden met het behoud en wegvallen van de nūn; het vrouwelijk geslacht en zijn kenmerken; en de tāʾ marbūṭa en de soorten vrouwelijke woorden. ' + FYI_NL,
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'De vierde eenheid van het boek: de onderwerpen van de vier lessen.',
    root: { label: 'De vijf naamwoorden en werkwoorden', sub: 'Eenheid 5' },
    nodes: [
      { label: 'De vijf naamwoorden', sub: 'les 21', page: 89, children: ['ab, akh, ḥam, fū, dhū', 'verbuiging door letters', 'voorwaarden'] },
      { label: 'De vijf werkwoorden', sub: 'les 22', page: 93, children: ['vormen', 'behoud van de nūn', 'wegvallen van de nūn'] },
      { label: 'Vrouwelijk geslacht', sub: 'les 23', page: 96, children: ['verwijzen met hādhihi', 'kenmerken', 'beide geslachten'] },
      { label: 'De tāʾ marbūṭa', sub: 'les 24', page: 97, children: ['bij afgeleide woorden', 'bij grondwoorden', 'soorten vrouwelijk'] }
    ]
  },
  points: [
    { text: 'De vijf naamwoorden: abūka, akhūka, ḥamūka, fūka, dhū; nominatief met wāw, accusatief met alif, genitief met yāʾ.', page: 89 },
    { text: 'Zij worden zo verbogen als zij enkelvoud zijn, niet verkleind, en verbonden met iets anders dan het suffix van de eerste persoon.', page: 92 },
    { text: 'Voor fū geldt: zonder mīm; voor dhū: in de betekenis van "bezitter van".', page: 91 },
    { text: 'De vijf werkwoorden zijn imperfecta met de alif van de dualis, de wāw van het meervoud of de yāʾ van de vrouwelijke aangesprokene.', page: 93 },
    { text: 'Zij staan in de nominatief door het behoud van de nūn, en in de subjunctief en jussief door het wegvallen ervan.', page: 94 },
    { text: 'Vrouwelijk is wat met hādhihi aangeduid kan worden; kenmerken zijn de tāʾ marbūṭa en de korte en lange vrouwelijke alif.', page: 96 },
    { text: 'De tāʾ marbūṭa komt bij de meeste afgeleide woorden, en weinig bij grondwoorden.', page: 97 }
  ],
  terms: [
    { term: 'الأسماء الخمسة', translit: 'al-asmāʾ al-khamsa', meaning: 'De vijf naamwoorden: ab, akh, ḥam, fū, dhū; nominatief met wāw, accusatief met alif, genitief met yāʾ.', explanation: '"En hun vader was rechtschapen."', notes: [], page: 89 },
    { term: 'الأفعال الخمسة', translit: 'al-afʿāl al-khamsa', meaning: 'Elk imperfectum met de alif van de dualis, de wāw van het meervoud of de yāʾ van de vrouwelijke aangesprokene.', explanation: 'yafʿalāni, tafʿalāni, yafʿalūna, tafʿalūna, tafʿalīna.', notes: [], page: 93 },
    { term: 'ثبوت النون', translit: 'thubūt an-nūn', meaning: 'Behoud van de nūn: het teken van de nominatief bij de vijf werkwoorden.', explanation: 'tuḥibbūna.', notes: [], page: 94 },
    { term: 'حذف النون', translit: 'ḥadhf an-nūn', meaning: 'Wegvallen van de nūn: het teken van subjunctief en jussief bij de vijf werkwoorden.', explanation: 'an tadhhabū, lā tasubbū.', notes: [], page: 94 },
    { term: 'المؤنث', translit: 'al-muʾannath', meaning: 'Vrouwelijk: wat met hādhihi aangeduid kan worden.', explanation: 'imraʾa, nāqa, shams, dār.', notes: [], page: 96 },
    { term: 'ألف التأنيث المقصورة', translit: 'alif at-taʾnīth al-maqṣūra', meaning: 'Korte vrouwelijke alif: een vormkenmerk van het vrouwelijk geslacht.', explanation: 'Laylā.', notes: [], page: 96 },
    { term: 'ألف التأنيث الممدودة', translit: 'alif at-taʾnīth al-mamdūda', meaning: 'Lange vrouwelijke alif: een vormkenmerk van het vrouwelijk geslacht.', explanation: 'samrāʾ.', notes: [], page: 96 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Afgeleide verbuigingstekens in deze eenheid',
      intro: 'Zoals in les 21 en 22.',
      columns: ['Nominatief', 'Accusatief/subjunctief', 'Genitief of jussief'],
      rows: [
        { label: 'Vijf naamwoorden', cells: ['met wāw', 'met alif', 'genitief met yāʾ'] },
        { label: 'Vijf werkwoorden', cells: ['behoud van de nūn', 'wegvallen van de nūn', 'jussief: wegvallen van de nūn'] }
      ],
      page: 94
    },
    {
      type: 'cards',
      title: 'Voorwaarden voor verbuiging door letters',
      intro: 'En wat er gebeurt als een voorwaarde ontbreekt, zoals in het boek.',
      nodes: [
        { label: 'Verbonden, niet met de eerste persoon', sub: 'met -ī: geschatte tekens ("mijn vader roept je"); zonder verbinding: de gewone tekens ("hij heeft een vader")', page: 90 },
        { label: 'Enkelvoud', sub: 'in dualis of meervoud verbogen als dualis of meervoud ("hij nam zijn ouders bij zich")', page: 90 },
        { label: 'Niet verkleind', sub: 'verkleind: zichtbare klinkers (ukhayyuka)', page: 91 },
        { label: 'Fū zonder mīm, dhū als "bezitter van"', sub: 'fam wordt met zichtbare klinkers verbogen', page: 91 }
      ]
    },
    {
      type: 'compare',
      title: 'Soorten vrouwelijke woorden',
      intro: 'Zoals in de samenvatting van les 24.',
      columns: ['Tegenhanger'],
      rows: [
        { label: 'Werkelijk (Fāṭima)', cells: ['figuurlijk (de zon)'] },
        { label: 'Naar betekenis (Suʿād)', cells: ['naar vorm (Ṭalḥa)'] }
      ],
      page: 97
    }
  ],
  sections: [
    { title: 'Ontlede voorbeelden van de vijf naamwoorden (alleen ter kennisname)', text: '"Hun vader had hun bevolen": onderwerp; "jouw vader was geen slecht man": naamwoord van kāna; "Muḥammad is niet de vader van een van jullie mannen": gezegde van kāna; "wij zullen hem van zijn vader vragen": lijdend voorwerp; "van zijn broer": genitief; "vergaan zijn de handen van Abū Lahab": genitiefverbinding.', more: FYI_NL, page: 89 },
    { title: 'Voorbeelden van de vijf werkwoorden (alleen ter kennisname bij de verbuiging)', text: '"Zij beiden aten voedsel": alif van de dualis; "wat zij doen": wāw van het meervoud; "verbaas jij je over Allahs bevel?": yāʾ van de vrouwelijke aangesprokene; "dat jullie hem meenemen": subjunctief door wegvallen van de nūn; "en beledig niet": jussief door wegvallen van de nūn.', more: FYI_NL, page: 93 },
    { title: 'Woorden die mannelijk en vrouwelijk kunnen zijn', text: 'Van de Arabieren is overgeleverd dat zij deze woorden in beide geslachten gebruikten, onder meer: zawj, sabīl, ṭarīq, sūq, lisān, sikkīn, dhirāʿ, ṣāʿ; raadpleeg hiervoor woordenboeken en taalwerken.', page: 96 },
    { title: 'Vrouwelijk kenmerk voor beide geslachten', text: 'Sommige naamwoorden dragen een vrouwelijk kenmerk en worden voor beide geslachten gebruikt, zoals ḥayya en sakhla, en zo ook enkele bijvoeglijke woorden: rajul rabʿa en imraʾa rabʿa.', page: 96 },
    { title: 'Opmerking over een versnummer', text: 'Het boek noemt in de oefening op p. 95 "daarin zijn twee stromende bronnen" als ar-Raḥmān 66; in de muṣḥaf is dat vers 50.', page: 95 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Voorwaarden voor verbuiging door letters', items: ['enkelvoud', 'niet verkleind', 'verbonden met iets anders dan het suffix van de eerste persoon'], page: 92, origin: 'boek' },
    { kind: 'opsomming', title: 'Vormen van de vijf werkwoorden', items: ['yafʿalāni', 'tafʿalāni', 'yafʿalūna', 'tafʿalūna', 'tafʿalīna'], page: 93, origin: 'boek' },
    { kind: 'opsomming', title: 'Kenmerken van het vrouwelijk geslacht', items: ['naar betekenis: verwijzen met hādhihi', 'naar vorm: tāʾ marbūṭa, korte vrouwelijke alif, lange vrouwelijke alif'], page: 97, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'De vijf naamwoorden: nominatief met wāw, accusatief met alif, genitief met yāʾ, onder voorwaarden.',
    'De vijf werkwoorden: nominatief door behoud van de nūn, subjunctief en jussief door het wegvallen ervan.',
    'Vrouwelijk is wat met hādhihi aangeduid kan worden; er zijn drie vormkenmerken.',
    'Vrouwelijk is werkelijk of figuurlijk, en naar betekenis of naar vorm.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarmee staat akh in de genitief in "wie door zijn broer iets vergeven wordt"?', options: ['met yāʾ', 'met kasra', 'met fatḥa', 'met alif'], answer: 0, explain: 'Het is een van de vijf naamwoorden.', page: 89 },
    { type: 'tf', q: 'In "mijn vader roept je" (abī) wordt ab met alif verbogen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Verbonden met het suffix -ī krijgt het geschatte tekens.', page: 90 },
    { type: 'mc', q: 'Wat is het teken van de subjunctief in "dat jullie hem meenemen" (an tadhhabū)?', options: ['wegvallen van de nūn', 'fatḥa', 'behoud van de nūn', 'yāʾ'], answer: 0, explain: 'Het is een van de vijf werkwoorden.', page: 94 },
    { type: 'mc', q: 'Welk woord heeft de lange vrouwelijke alif?', options: ['samrāʾ', 'Laylā', 'Fāṭima', 'Suʿād'], answer: 0, explain: 'Laylā heeft de korte alif, Fāṭima de tāʾ, en Suʿād is vrouwelijk naar betekenis.', page: 96 },
    { type: 'tf', q: 'De tāʾ marbūṭa komt bij de meeste afgeleide woorden.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals ʿālim en ʿālima; bij grondwoorden komt zij weinig voor.', page: 97 }
  ]),
  note: 'Les 21 staat in het boek alleen ter kennisname, en les 22 voor het deel over de verbuiging. Oefeningen van het boek op p. 92, 95 en 98. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-arabic', chapter: '21', unit: 5, ar, nl }
