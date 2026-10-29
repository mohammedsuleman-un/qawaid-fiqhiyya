// Hoofdstukkaart bij اللغة العربية (٢), eenheid 1: النكرة والمعرفة والمبتدأ والخبر (lessen 1–10, boek p. 11–46).
// Volgt de eerste وحدة van het boek. Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand.
// Veel onderdelen staan in het boek in kaders "alleen ter kennisname"; de kaart vermeldt dat bij die onderdelen.
// Hadith alleen als het boek een bron noemt; «يا فاطمة بنت محمد…» (p. 27) staat er zonder bron en is weggelaten.
// Geen personen in deze lessen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (٢)، سلسلة زاد العلمية',
  pages: '11–46',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_ArabicLanguage/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { text: 'يا معشر النساء تصدقن، فإني رأيتكن أكثر أهل النار', takhrij: 'رواه البخاري ومسلم', note: 'في نشاط الكتاب: استخراج الضمائر ومحلها من الإعراب.', pages: [27], nl: 'Vrouwen, geef liefdadigheid, want ik heb gezien dat jullie het grootste deel van de bewoners van het Vuur zijn', nlNote: 'In de oefening van het boek: de voornaamwoorden en hun plaats in de verbuiging zoeken.' },
  { text: 'التقوى هاهنا', takhrij: 'رواه مسلم', note: 'وأشار إلى صدره؛ في نشاط اسم الإشارة.', pages: [31], nl: 'De godsvrees is hier', nlNote: 'Hij wees naar zijn borst; in de oefening over het aanwijzend voornaamwoord.' },
  { text: 'أقرب ما يكون العبد من ربه وهو ساجد', takhrij: 'رواه مسلم', note: 'مثال على أن المبتدأ والخبر لا يلزم تواليهما. ' + 'من قسم «للاطلاع فقط».', pages: [42], nl: 'Het dichtst bij zijn Heer is de dienaar als hij in sujūd is', nlNote: 'Voorbeeld dat mubtadaʾ en khabar niet direct na elkaar hoeven te staan. Uit een deel dat alleen ter kennisname is.' }
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'النكرة والمعرفة، والمبتدأ والخبر',
  subtitle: 'عشرة دروس مجموعة في صفحة واحدة',
  summary: 'النكرة والمعرفة وعلامة كل منهما، وأنواع المعارف الستة: العلم، والضمير، واسم الإشارة، والاسم الموصول، والمعرف بأل، والمعرف بالإضافة؛ ثم المبتدأ والخبر وأقسام الخبر.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'الوحدة الأولى من الكتاب: موضوعات الدروس العشرة.',
    root: { label: 'النكرة والمعرفة', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'النكرة والمعرفة', sub: 'الدرس ١', page: 11, children: ['قبول أل', 'دخول رُبّ'] },
      { label: 'أنواع المعارف', sub: 'الدروس ٢–٨', page: 14, children: ['العلم', 'الضمير', 'اسم الإشارة', 'الاسم الموصول', 'المعرف بأل', 'المعرف بالإضافة'] },
      { label: 'المبتدأ والخبر', sub: 'الدرس ٩', page: 42, children: ['مرفوعان', 'يتم بالخبر الكلام'] },
      { label: 'أقسام الخبر', sub: 'الدرس ١٠', page: 44, children: ['مفرد', 'جملة اسمية', 'جملة فعلية', 'شبه جملة'] }
    ]
  },
  points: [
    { text: 'النكرة لا تدل على معين كرجل وكتاب، وأعم النكرات «شيء»؛ والمعرفة تدل على معين من جنسه.', page: 11 },
    { text: 'علامة النكرة أن تقبل «أل» أو تقع بعد «رُبّ»: رُبّ رجلٍ كريمٍ في الدار.', page: 12 },
    { text: 'المعارف ستة: العلم، والضمير، واسم الإشارة، والاسم الموصول، والمعرف بأل، والمعرف بالإضافة.', page: 12 },
    { text: 'الضمير اسم جامد يدل على متكلم أو مخاطب أو غائب، وهو بارز (متصل ومنفصل) أو مستتر (وجوبًا وجوازًا).', page: 20 },
    { text: 'أسماء الإشارة والموصولات كلها مبنية إلا المثنى منها: هذان وهاتان واللذان واللتان.', page: 30 },
    { text: 'أل ثلاثة أنواع: عهدية، وجنسية، وزائدة؛ والمضاف لا ينون ولا تلحقه نون المثنى والجمع.', page: 36 },
    { text: 'المبتدأ اسم مرفوع يبتدأ به الكلام، والخبر ما تتم به الفائدة، وهما مرفوعان.', page: 42 },
    { text: 'الخبر مفرد أو جملة اسمية أو فعلية أو شبه جملة، والجملة الواقعة خبرًا لا بد لها من رابط يعود على المبتدأ.', page: 44 }
  ],
  terms: [
    { term: 'النكرة', translit: 'an-nakira', meaning: 'اسم شائع في جنسه لا يدل على معين.', explanation: 'تقبل أل أو تقع بعد رُبّ.', notes: [], page: 11 },
    { term: 'المعرفة', translit: 'al-maʿrifa', meaning: 'اسم يدل على معين من جنسه.', explanation: '', notes: [], page: 12 },
    { term: 'العلم', translit: 'al-ʿalam', meaning: 'اسم يعين مسماه ويميزه عن غيره من جنسه.', explanation: 'اسم أو كنية أو لقب.', notes: [], page: 14 },
    { term: 'الضمير', translit: 'aḍ-ḍamīr', meaning: 'اسم جامد وضع للكناية عن متكلم أو مخاطب أو غائب نيابة عن الاسم الظاهر للاختصار.', explanation: '', notes: [], page: 20 },
    { term: 'اسم الإشارة', translit: 'ism al-ishāra', meaning: 'اسم يعين مدلوله تعيينًا مقترنًا بالإشارة إليه.', explanation: '', notes: [], page: 28 },
    { term: 'الاسم الموصول', translit: 'al-ism al-mawṣūl', meaning: 'اسم يدل على معين بواسطة جملة تذكر بعده تسمى الصلة.', explanation: 'وفيها عائد يرجع إليه.', notes: [], page: 32 },
    { term: 'الإضافة', translit: 'al-iḍāfa', meaning: 'نسبة اسم إلى اسم آخر ليكتسب منه التعريف.', explanation: 'المضاف إليه مجرور دائمًا.', notes: [], page: 39 },
    { term: 'المبتدأ والخبر', translit: 'al-mubtadaʾ wa-l-khabar', meaning: 'المبتدأ اسم مرفوع يبتدأ به الكلام، والخبر ما يتم به الكلام.', explanation: '', notes: [], page: 42 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'أنواع المعارف الستة',
      intro: 'كما في الدروس من الثاني إلى الثامن.',
      nodes: [
        { label: 'العلم', sub: 'عيسى، مكة، الكعبة', page: 14 },
        { label: 'الضمير', sub: 'أنا، أنت، هو', page: 20 },
        { label: 'اسم الإشارة', sub: 'هذا، هذه، أولئك', page: 28 },
        { label: 'الاسم الموصول', sub: 'الذي، التي، الذين', page: 32 },
        { label: 'المعرف بأل', sub: 'الكتاب', page: 36 },
        { label: 'المعرف بالإضافة', sub: 'كتاب النحو', page: 39 }
      ]
    },
    {
      type: 'compare',
      title: 'أقسام الضمير',
      intro: 'باعتبار الظهور والاستتار.',
      columns: ['النوع', 'مثاله'],
      rows: [
        { label: 'بارز متصل', cells: ['لا يبدأ به ولا يقع بعد إلا', 'أكلتُ، كتبوا، كتابك'] },
        { label: 'بارز منفصل', cells: ['يبدأ به ويقع بعد إلا', 'أنا، هو، إياك'] },
        { label: 'مستتر وجوبًا', cells: ['لا يحل محله اسم ظاهر', 'ذاكر دروسك (أنت)'] },
        { label: 'مستتر جوازًا', cells: ['يحل محله اسم ظاهر', 'يلعب الكرة (هو)'] }
      ],
      page: 23
    },
    {
      type: 'cards',
      title: 'أقسام الخبر',
      intro: 'كما في الدرس العاشر.',
      nodes: [
        { label: 'مفرد', sub: 'الصلح خير', page: 44 },
        { label: 'جملة اسمية', sub: 'الإسلام فضله كبير', page: 44 },
        { label: 'جملة فعلية', sub: 'الله يدعو إلى دار السلام', page: 45 },
        { label: 'شبه جملة', sub: 'الجنة تحت ظلال السيوف', page: 45 }
      ]
    }
  ],
  sections: [
    { title: 'أغراض التنكير (للاطلاع فقط)', text: 'الوحدة: ﴿وجاء من أقصا المدينة رجل يسعى﴾، والجنس: ﴿والله خلق كل دابة من ماء﴾، والتهويل، والتقليل: ﴿لم يلبثوا إلا ساعة من نهار﴾، والتحقير، والتعظيم: ﴿وذلك يوم مشهود﴾.', more: FYI, page: 11 },
    { title: 'إعراب العلم المركب (للاطلاع فقط)', text: 'المركب الإضافي: الأول بحسب العوامل والثاني مجرور: جاء عبدُ الله؛ والمزجي ممنوع من الصرف: سافرت إلى بعلبكَّ، وما ختم بـ«ويه» مبني على الكسر: هذا سيبويهِ؛ والإسنادي محكي: جاء تأبط شرًّا.', more: FYI, page: 16 },
    { title: 'القريب والبعيد في الإشارة (للاطلاع فقط)', text: 'للقريب: هذا، هذه، هذان، هاتان، هؤلاء، وللمكان هنا؛ وللبعيد: ذلك، تلك، ذانك، تانك، أولئك، وللمكان هناك وهنالك وثَمّ: ﴿هنالك ابتلي المؤمنون﴾.', more: FYI, page: 29 },
    { title: 'أنواع أل', text: 'العهدية: ذكرية ﴿فيها مصباح المصباح في زجاجة﴾، وذهنية ﴿تحت الشجرة﴾، وحضورية ﴿اليوم أكملت لكم دينكم﴾؛ والجنسية: ﴿خلق الإنسان من عجل﴾؛ والزائدة لازمة كالذي والتي، وغير لازمة كالحسن والعباس.', page: 36 },
    { title: 'تقديم الخبر', text: 'الأصل تقديم المبتدأ، وقد يتقدم الخبر: ﴿لله ما في السماوات وما في الأرض﴾، فـ«لله» خبر مقدم و«ما» مبتدأ مؤخر.', more: FYI, page: 43 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'النكرة والمعرفة', items: ['النكرة: لا تدل على معين، وتقبل أل', 'المعرفة: تدل على معين من جنسه'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع المعارف', items: ['العلم', 'الضمير', 'اسم الإشارة', 'الاسم الموصول', 'المعرف بأل', 'المعرف بالإضافة'], page: 12, origin: 'boek' },
    { kind: 'uitzondering', title: 'معربات بين أسماء الإشارة والموصولات', items: ['هذان وهاتان', 'ذانك وتانك', 'اللذان واللتان'], page: 30, origin: 'boek' },
    { kind: 'voorwaarde', title: 'الجملة الواقعة خبرًا', items: ['لا بد لها من رابط يعود على المبتدأ', 'ويطابقه: الأعداء حيلهم كثيرة'], page: 45, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: '', text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: [],
  review: [
    'المعارف ستة، وما سواها نكرة.',
    'الضمير بارز أو مستتر، والبارز متصل أو منفصل.',
    'أسماء الإشارة والموصولات مبنية إلا المثنى.',
    'أل عهدية وجنسية وزائدة.',
    'المبتدأ والخبر مرفوعان، والخبر مفرد أو جملة أو شبه جملة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أعم النكرات؟', options: ['شيء', 'رجل', 'كتاب', 'دار'], answer: 0, explain: 'كما في الدرس الأول.', page: 11 },
    { type: 'mc', q: 'أي هذه ضمير مستتر وجوبًا؟', options: ['الفاعل في «ذاكر دروسك»', 'الفاعل في «يلعب الكرة»', 'التاء في «أكلتُ»', '«هو» في «هو يساعد»'], answer: 0, explain: 'تقديره أنت، ولا يحل محله اسم ظاهر.', page: 25 },
    { type: 'tf', q: '«هذان» اسم إشارة مبني.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يعرب إعراب المثنى.', page: 30 },
    { type: 'mc', q: 'ما نوع أل في ﴿اليوم أكملت لكم دينكم﴾؟', options: ['عهدية حضورية', 'جنسية', 'زائدة', 'عهدية ذكرية'], answer: 0, explain: 'المذكور حاضر.', page: 36 },
    { type: 'mc', q: 'ما نوع الخبر في «الجنة تحت ظلال السيوف»؟', options: ['شبه جملة', 'مفرد', 'جملة اسمية', 'جملة فعلية'], answer: 0, explain: 'ظرف ومضاف إليه.', page: 45 },
    { type: 'tf', q: 'المضاف لا ينون.', options: ['صواب', 'خطأ'], answer: 0, explain: 'ولا تلحقه نون المثنى والجمع.', page: 40 }
  ]),
  note: 'نشاط الكتاب في الصفحات ١٣ و١٨ و٢٧ و٣١ و٣٤ و٣٨ و٤١ و٤٦. أجزاء كثيرة من هذه الدروس في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Onbepaald en bepaald; onderwerp en gezegde',
  subtitle: 'Tien lessen samen op één pagina',
  summary: 'Onbepaalde en bepaalde naamwoorden en hoe je ze herkent, de zes soorten bepaalde naamwoorden (eigennaam, voornaamwoord, aanwijzend en betrekkelijk voornaamwoord, woord met al-, en bepaald door iḍāfa), en daarna mubtadaʾ en khabar en de soorten khabar.',
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De eerste eenheid van het boek: de onderwerpen van de tien lessen.',
    root: { label: 'Onbepaald en bepaald', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Onbepaald en bepaald', sub: 'les 1', page: 11, children: ['neemt al- aan', 'na rubba'] },
      { label: 'Soorten bepaalde woorden', sub: 'les 2–8', page: 14, children: ['eigennaam', 'voornaamwoord', 'aanwijzend vnw.', 'betrekkelijk vnw.', 'met al-', 'door iḍāfa'] },
      { label: 'Mubtadaʾ en khabar', sub: 'les 9', page: 42, children: ['beide nominatief', 'khabar maakt de mededeling af'] },
      { label: 'Soorten khabar', sub: 'les 10', page: 44, children: ['enkel woord', 'nominale zin', 'werkwoordszin', 'shibh jumla'] }
    ]
  },
  points: [
    { text: 'Een onbepaald woord (nakira) wijst niets bepaalds aan, zoals rajul en kitāb; het algemeenste is shayʾ. Een bepaald woord (maʿrifa) wijst één bepaalde uit zijn soort aan.', page: 11 },
    { text: 'Je herkent een nakira doordat het al- kan krijgen of na rubba kan staan: rubba rajulin karīmin fī d-dār.', page: 12 },
    { text: 'Er zijn zes bepaalde woorden: eigennaam, voornaamwoord, aanwijzend voornaamwoord, betrekkelijk voornaamwoord, woord met al-, en woord bepaald door iḍāfa.', page: 12 },
    { text: 'Een voornaamwoord verwijst naar spreker, aangesprokene of afwezige; het is zichtbaar (vast of los) of verborgen (verplicht of mogelijk).', page: 20 },
    { text: 'Aanwijzende en betrekkelijke voornaamwoorden zijn onverbuigbaar, behalve de dualisvormen: hādhāni, hātāni, alladhāni, allatāni.', page: 30 },
    { text: 'Al- is er in drie soorten: ʿahdiyya, jinsiyya en zāʾida. Het muḍāf krijgt geen tanwīn en geen nūn van dualis of meervoud.', page: 36 },
    { text: 'De mubtadaʾ is het naamwoord in de nominatief waarmee de zin begint; de khabar maakt de mededeling af; beide staan in de nominatief.', page: 42 },
    { text: 'De khabar is een enkel woord, een nominale zin, een werkwoordszin of een shibh jumla; een zin als khabar moet een verwijzing naar de mubtadaʾ bevatten.', page: 44 }
  ],
  terms: [
    { term: 'النكرة', translit: 'an-nakira', meaning: 'Onbepaald naamwoord: wijst niets bepaalds uit zijn soort aan.', explanation: 'Neemt al- aan of staat na rubba.', notes: [], page: 11 },
    { term: 'المعرفة', translit: 'al-maʿrifa', meaning: 'Bepaald naamwoord: wijst één bepaalde uit zijn soort aan.', explanation: '', notes: [], page: 12 },
    { term: 'العلم', translit: 'al-ʿalam', meaning: 'Eigennaam: een naam die het benoemde aanduidt en van de rest van zijn soort onderscheidt.', explanation: 'Naam, kunya of bijnaam.', notes: [], page: 14 },
    { term: 'الضمير', translit: 'aḍ-ḍamīr', meaning: 'Voornaamwoord: verwijst kort naar spreker, aangesprokene of afwezige in plaats van het zichtbare naamwoord.', explanation: '', notes: [], page: 20 },
    { term: 'اسم الإشارة', translit: 'ism al-ishāra', meaning: 'Aanwijzend voornaamwoord: wijst iets aan, samen met een aanwijzing.', explanation: '', notes: [], page: 28 },
    { term: 'الاسم الموصول', translit: 'al-ism al-mawṣūl', meaning: 'Betrekkelijk voornaamwoord: wijst iets bepaalds aan via een bijzin (ṣila) erna.', explanation: 'Met een ʿāʾid die ernaar terugverwijst.', notes: [], page: 32 },
    { term: 'الإضافة', translit: 'al-iḍāfa', meaning: 'Een naamwoord verbinden met een ander, zodat het daardoor bepaald wordt.', explanation: 'Het muḍāf ilayh staat altijd in de genitief.', notes: [], page: 39 },
    { term: 'المبتدأ والخبر', translit: 'al-mubtadaʾ wa-l-khabar', meaning: 'Mubtadaʾ: het naamwoord in de nominatief waarmee de zin begint; khabar: wat de mededeling afmaakt.', explanation: '', notes: [], page: 42 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'De zes bepaalde woorden',
      intro: 'Zoals in les 2 tot en met 8.',
      nodes: [
        { label: 'Eigennaam', sub: 'ʿĪsā, Makka, al-Kaʿba', page: 14 },
        { label: 'Voornaamwoord', sub: 'anā, anta, huwa', page: 20 },
        { label: 'Aanwijzend vnw.', sub: 'hādhā, hādhihi, ulāʾika', page: 28 },
        { label: 'Betrekkelijk vnw.', sub: 'alladhī, allatī, alladhīna', page: 32 },
        { label: 'Met al-', sub: 'al-kitāb', page: 36 },
        { label: 'Door iḍāfa', sub: 'kitāb an-naḥw', page: 39 }
      ]
    },
    {
      type: 'compare',
      title: 'Soorten voornaamwoord',
      intro: 'Naar zichtbaar en verborgen.',
      columns: ['Kenmerk', 'Voorbeeld'],
      rows: [
        { label: 'Zichtbaar, vast', cells: ['niet aan het begin en niet na illā', 'akaltu, katabū, kitābuka'] },
        { label: 'Zichtbaar, los', cells: ['aan het begin en na illā', 'anā, huwa, iyyāka'] },
        { label: 'Verplicht verborgen', cells: ['geen zichtbaar naamwoord op zijn plaats', 'dhākir durūsaka (anta)'] },
        { label: 'Mogelijk verborgen', cells: ['een zichtbaar naamwoord kan op zijn plaats', 'yalʿabu l-kura (huwa)'] }
      ],
      page: 23
    },
    {
      type: 'cards',
      title: 'Soorten khabar',
      intro: 'Zoals in les 10.',
      nodes: [
        { label: 'Enkel woord', sub: 'aṣ-ṣulḥu khayr', page: 44 },
        { label: 'Nominale zin', sub: 'al-islāmu faḍluhu kabīr', page: 44 },
        { label: 'Werkwoordszin', sub: 'Allāhu yadʿū ilā dār as-salām', page: 45 },
        { label: 'Shibh jumla', sub: 'al-jannatu taḥta ẓilāl as-suyūf', page: 45 }
      ]
    }
  ],
  sections: [
    { title: 'Waarom onbepaald? (alleen ter kennisname)', text: 'Het boek noemt als doelen: eenheid ("en er kwam een man van het verste eind van de stad", Yā Sīn 36:20), soort ("Allah schiep elk dier uit water", an-Nūr 24:45), het ontzagwekkende, het geringe ("zij bleven maar een uur van de dag", al-Aḥqāf 46:35), het kleinerende en het verheffende ("dat is een dag waarop men aanwezig is", Hūd 11:103).', more: FYI_NL, page: 11 },
    { title: 'Verbuiging van samengestelde eigennamen (alleen ter kennisname)', text: 'Bij iḍāfa: het eerste deel naar de zin, het tweede in de genitief: jāʾa ʿAbdu llāh. Versmolten namen zijn diptoot: sāfartu ilā Baʿlabakka; namen op -wayh zijn vast op i: hādhā Sībawayhi. Een zin als naam blijft ongewijzigd: jāʾa Taʾabbaṭa sharran.', more: FYI_NL, page: 16 },
    { title: 'Nabij en ver (alleen ter kennisname)', text: 'Nabij: hādhā, hādhihi, hādhāni, hātāni, hāʾulāʾi, en voor plaats hunā; ver: dhālika, tilka, dhānika, tānika, ulāʾika, en voor plaats hunāka, hunālika en thamma: "daar werden de gelovigen beproefd" (al-Aḥzāb 33:11).', more: FYI_NL, page: 29 },
    { title: 'De soorten al-', text: 'ʿAhdiyya: eerder genoemd ("een lamp; de lamp is in een glas", an-Nūr 24:35), bekend ("onder de boom", al-Fatḥ 48:18) of aanwezig ("vandaag heb Ik jullie godsdienst vervolmaakt", al-Māʾida 5:3); jinsiyya: "de mens is uit haast geschapen" (al-Anbiyāʾ 21:37); zāʾida: vast zoals in alladhī en allatī, of los zoals al-Ḥasan en al-ʿAbbās.', page: 36 },
    { title: 'De khabar vooraan (alleen ter kennisname)', text: 'Normaal staat de mubtadaʾ voorop, maar de khabar kan vooraan staan: "aan Allah behoort wat in de hemelen en op de aarde is" (al-Baqara 2:284): lillāhi is khabar muqaddam en mā is mubtadaʾ muʾakhkhar.', more: FYI_NL, page: 43 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'Onbepaald en bepaald', items: ['nakira: wijst niets bepaalds aan en neemt al- aan', 'maʿrifa: wijst één bepaalde uit zijn soort aan'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'De zes bepaalde woorden', items: ['eigennaam', 'voornaamwoord', 'aanwijzend voornaamwoord', 'betrekkelijk voornaamwoord', 'woord met al-', 'bepaald door iḍāfa'], page: 12, origin: 'boek' },
    { kind: 'uitzondering', title: 'Verbuigbaar tussen de aanwijzende en betrekkelijke vnw.', items: ['hādhāni en hātāni', 'dhānika en tānika', 'alladhāni en allatāni'], page: 30, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Een zin als khabar', items: ['moet een verwijzing naar de mubtadaʾ hebben', 'die ermee overeenkomt: al-aʿdāʾu ḥiyaluhum kathīra'], page: 45, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: '', text: h.text, meaning: h.nl, takhrij: h.takhrij === 'رواه مسلم' ? 'Muslim' : 'al-Bukhārī en Muslim', note: h.nlNote || '', pages: h.pages })),
  persons: [],
  review: [
    'Er zijn zes bepaalde woorden; al het andere is onbepaald.',
    'Een voornaamwoord is zichtbaar of verborgen; zichtbaar is vast of los.',
    'Aanwijzende en betrekkelijke voornaamwoorden zijn vast, behalve de dualis.',
    'Al- is ʿahdiyya, jinsiyya of zāʾida.',
    'Mubtadaʾ en khabar staan in de nominatief; de khabar is een woord, een zin of een shibh jumla.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het algemeenste onbepaalde woord?', options: ['shayʾ', 'rajul', 'kitāb', 'dār'], answer: 0, explain: 'Zoals in les 1.', page: 11 },
    { type: 'mc', q: 'Welk voornaamwoord is verplicht verborgen?', options: ['het onderwerp in "dhākir durūsaka"', 'het onderwerp in "yalʿabu l-kura"', 'de tāʾ in "akaltu"', 'huwa in "huwa yusāʿidu"'], answer: 0, explain: 'Te veronderstellen als anta; er kan geen zichtbaar naamwoord op zijn plaats.', page: 25 },
    { type: 'tf', q: '"Hādhāni" is een onverbuigbaar aanwijzend voornaamwoord.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het wordt verbogen als dualis.', page: 30 },
    { type: 'mc', q: 'Welke al- staat in "vandaag heb Ik jullie godsdienst vervolmaakt" (al-yawm)?', options: ['ʿahdiyya ḥuḍūriyya (aanwezig)', 'jinsiyya', 'zāʾida', 'ʿahdiyya dhikriyya (eerder genoemd)'], answer: 0, explain: 'Het genoemde is aanwezig.', page: 36 },
    { type: 'mc', q: 'Wat voor khabar staat in "al-jannatu taḥta ẓilāl as-suyūf"?', options: ['shibh jumla', 'enkel woord', 'nominale zin', 'werkwoordszin'], answer: 0, explain: 'Een bijwoord met muḍāf ilayh.', page: 45 },
    { type: 'tf', q: 'Het muḍāf krijgt geen tanwīn.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'En ook geen nūn van dualis of meervoud.', page: 40 }
  ]),
  note: 'Oefeningen van het boek op p. 13, 18, 27, 31, 34, 38, 41 en 46. Veel delen van deze lessen staan in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-arabic', chapter: '1', unit: 1, ar, nl }
