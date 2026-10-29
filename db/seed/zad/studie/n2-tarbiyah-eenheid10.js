// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 10: التفكر (lessen 19–21, boek p. 70–77).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 76 is in het boek "alleen ter kennisname".
// Niet in het hadith-tabblad: het nachtgebed van de Profeet ﷺ met Āl ʿImrān 190–191 (Muslim), omdat het boek
// het alleen naverteld weergeeft. Umm Dharr, Umm ad-Dardāʾ en Khulayfa al-ʿAbdī staan alleen in de tekst,
// omdat zij niet in het personenregister staan.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '70–77',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'علي بن أبي طالب', text: 'إني كنت نهيتكم عن زيارة القبور فزوروها، فإنها تذكركم الآخرة', takhrij: 'أحمد وصححه الألباني', note: 'من التفكر في العواقب والآخرة.', pages: [72], nl: 'Ik had jullie verboden de graven te bezoeken; bezoek ze nu, want ze herinneren jullie aan het Hiernamaals', nlNote: 'Nadenken over de afloop en het Hiernamaals.' },
  { narrator: 'عبد الله بن عمر', text: 'تفكروا في آلاء الله، ولا تفكروا في الله عز وجل', takhrij: 'اللالكائي وحسنه الألباني', note: 'من حدود التفكر: لا يتفكر في ذات الله ولا في كيفية صفاته.', pages: [73], nl: 'Denk na over Allahs gunsten, en denk niet na over Allah Zelf', nlNote: 'Een grens van nadenken: niet over Allahs wezen en niet over het hoe van Zijn eigenschappen.' }
]

const TAKHRIJ_NL = {
  'أحمد وصححه الألباني': 'Aḥmad; al-Albānī noemde hem ṣaḥīḥ',
  'اللالكائي وحسنه الألباني': 'al-Lālakāʾī; al-Albānī noemde hem ḥasan'
}
const NARRATOR_NL = { 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar' }

const PERSONS = [
  ['ibn-al-qayyim', 'text', [70, 74], 'قال: أنفع الفكر ما كان في مصالح المعاد وطرق اجتلابها ودفع مفاسده؛ وبيّن أن التفكر في الآخرة يثمر الرغبة، وفي الدنيا يثمر الزهد.', 'Zei: het nuttigste denken gaat over het welzijn in het Hiernamaals, de wegen ernaartoe en het afweren van schade; denken over het Hiernamaals wekt verlangen, over de wereld onthechting.'],
  ['an-nawawi', 'text', [71], 'قال: يستحب عند الاستيقاظ قراءة آيات آل عمران مع النظر إلى السماء.', 'Zei: bij het wakker worden is het aanbevolen de verzen van Āl ʿImrān te lezen en naar de hemel te kijken.'],
  ['al-awzai', 'text', [71], 'سئل عن غاية التفكر فيهن فقال: يقرؤهن وهو يعقلهن.', 'Gevraagd naar het doel van nadenken erover, zei hij: hij leest ze en begrijpt ze.'],
  ['ibn-taymiyya', 'text', [71], 'قال: النظر في المخلوقات العلوية والسفلية على وجه التفكر مأمور به.', 'Zei: met nadenken kijken naar de hogere en lagere schepselen is geboden.'],
  ['shurayh-al-qadi', 'text', [71], 'قال: اخرجوا بنا إلى السوق فننظر إلى الإبل كيف خلقت.', 'Zei: kom mee naar de markt, dan kijken we hoe de kamelen geschapen zijn.'],
  ['ali-ibn-abi-talib', 'text', [72], 'روى «فزوروها فإنها تذكركم الآخرة».', 'Overleveraar van "bezoek de graven, want ze herinneren jullie aan het Hiernamaals".'],
  ['mutarrif-ibn-abdallah', 'text', [72], 'كان يعرض نفسه على آيات أهل الجنة وأهل النار، ويرجو أن يكون ممن خلطوا عملًا صالحًا وآخر سيئًا.', 'Hield zichzelf tegen de verzen over de bewoners van Paradijs en Vuur, en hoopte te horen bij wie goede en slechte daden vermengden.'],
  ['ibn-umar', 'text', [73], 'روى «تفكروا في آلاء الله ولا تفكروا في الله».', 'Overleveraar van "denk na over Allahs gunsten, en niet over Allah Zelf".'],
  ['abu-bakr-ibn-al-arabi', 'text', [74], 'أنكر طريقة من يقضي الأيام والشهور مفكرًا ويترك الواجبات.', 'Wees de manier af van wie dagen en maanden alleen nadenkt en de plichten laat.'],
  ['abu-dharr', 'text', [74], 'قالت امرأته: كان النهار أجمع خاليًا يتفكر.', 'Zijn vrouw zei: hij zat de hele dag alleen na te denken.'],
  ['abu-ad-darda', 'text', [74, 76], 'كان أفضل عبادته التفكر والاعتبار، وقال: تفكر ساعة خير من قيام ليلة.', 'Zijn beste aanbidding was nadenken en lering trekken; hij zei: een uur nadenken is beter dan een nacht staan in gebed.'],
  ['sufyan-ath-thawri', 'text', [74], 'انطفأ السراج في مجلسه فبكى وقال: تذكرت القبر.', 'De lamp ging uit in zijn bijeenkomst; hij huilde en zei: ik dacht aan het graf.'],
  ['ibrahim-an-nakhai', 'text', [74], 'قال: الفكرة مخ العقل.', 'Zei: nadenken is het merg van het verstand.'],
  ['ibn-abbas', 'text', [74, 76], 'قال: التفكر في الخير يدعو إلى العمل به، وركعتان مقتصدتان في تفكر خير من قيام ليلة والقلب ساه.', 'Zei: nadenken over het goede spoort aan het te doen; en twee rustige rakʿa’s met nadenken zijn beter dan een nacht staan met een afwezig hart.'],
  ['bishr-ibn-al-harith', 'text', [75], 'قال: لو تفكر الناس في عظمة الله لما عصوا الله.', 'Zei: als de mensen nadachten over Allahs grootheid, zouden zij Hem niet ongehoorzaam zijn.'],
  ['al-fudayl-ibn-iyad', 'text', [75], 'قال: التفكر مرآة تريك حسناتك وسيئاتك.', 'Zei: nadenken is een spiegel die je je goede en slechte daden toont.'],
  ['ash-shafii', 'text', [75], 'قال: استعينوا على الكلام بالصمت، وعلى الاستنباط بالفكرة.', 'Zei: zoek hulp voor het spreken in zwijgen, en voor het afleiden van regels in nadenken.'],
  ['sufyan-ibn-uyayna', 'text', [75], 'كان يتمثل: إذا المرء كانت له فكرة ففي كل شيء له عبرة.', 'Citeerde vaak: wie nadenkt, vindt in alles een les.'],
  ['muhammad-ibn-kab-al-qurazi', 'text', [76], 'قال: لأن أردد «إذا زلزلت» و«القارعة» ليلتي أتفكر فيهما أحب إلي من أن أهذّ القرآن.', 'Zei: liever herhaal ik de hele nacht az-Zalzala en al-Qāriʿa en denk erover na, dan dat ik de Koran afraffel.'],
  ['ibn-kathir', 'text', [76], 'قال: الاستعاذة عند ابتداء القراءة لئلا يلبس على القارئ ويمنعه من التدبر والتفكر.', 'Zei: men zoekt toevlucht bij het begin van het lezen, opdat de lezer niet in verwarring raakt en niet belet wordt na te denken.'],
  ['al-hasan-al-basri', 'text', [76], 'قال في ﴿سأصرف عن آياتي﴾: أمنع قلوبهم التفكر في أمري.', 'Zei over "Ik zal van Mijn tekenen afwenden": Ik belet hun harten na te denken over Mijn zaak.']
]

const ar = {
  scope: 'unit',
  unit: 10,
  title: 'التفكر',
  subtitle: 'ثلاثة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف التفكر وأنفعه، ومجالاته، وحدوده ومحاذيره، وأحوال السلف فيه، وثمراته، وفضله، وأسباب التفكر الصحيح.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة العاشرة في خريطة واحدة',
    intro: 'التفكر: مجالاته وحدوده وثمراته.',
    root: { label: 'التفكر', sub: 'الوحدة العاشرة' },
    nodes: [
      { label: 'مجالاته', sub: 'الدرسان ١٩–٢٠', page: 70, children: ['نصوص الوحي', 'الدنيا وسرعة زوالها', 'المخلوقات', 'نعم الله', 'العواقب والآخرة'] },
      { label: 'حدوده', sub: 'الدرس ٢٠', page: 73, children: ['ذات الله وكيفية صفاته', 'عالم الغيب'] },
      { label: 'محاذيره', sub: 'الدرس ٢١', page: 74, children: ['ترك الواجبات للتفكر'] },
      { label: 'ثمراته', sub: 'الدرس ٢١', page: 74, children: ['زيادة الإيمان', 'الزهد', 'الخشية', 'معرفة النفس', 'التوبة'] }
    ]
  },
  points: [
    { text: 'التفكر لغة التأمل والنظر، واصطلاحًا جولان العقل والقلب في الدلائل والآيات ومعاني الأشياء طلبًا للاستفادة.', page: 70 },
    { text: 'أنفع الفكر ما كان في مصالح المعاد وطرق اجتلابها ودفع مفاسده وطرق اجتنابها.', page: 70 },
    { text: 'من مجالات التفكر: نصوص الوحي، والدنيا وسرعة زوالها، والمخلوقات، ونعم الله، والعواقب والآخرة.', page: 70 },
    { text: 'ينتفع الإنسان أيضًا بالعلوم التجريبية والطبيعية في التفكر في خلق الله.', page: 71 },
    { text: 'لا يتفكر في ذات الله ولا في كيفية صفاته، ولا يحاول تصور عالم الغيب.', page: 73 },
    { text: 'من المحاذير ترك الواجبات والانقطاع للتفكر.', page: 74 },
    { text: 'من ثمرات التفكر: زيادة الإيمان، والعمل للآخرة، والخشية، ومعرفة النفس، ونهضة الأمة، والإنتاج العلمي، والتوبة.', page: 74 },
    { text: 'من أسباب التفكر الصحيح: الاستعاذة قبل القراءة، واجتناب المعاصي.', page: 76 }
  ],
  terms: [
    { term: 'التفكر', translit: 'at-tafakkur', meaning: 'لغة: التأمل والنظر وتردد القلب في الشيء؛ اصطلاحًا: جولان العقل والقلب في الدلائل والآيات ومعاني الأشياء طلبًا للاستفادة.', explanation: '', notes: [], page: 70 },
    { term: 'الآلاء', translit: 'al-ālāʾ', meaning: 'النعم.', explanation: 'في حديث «تفكروا في آلاء الله».', notes: [], page: 73 },
    { term: 'الاعتبار', translit: 'al-iʿtibār', meaning: 'أخذ العبرة والعظة مما يرى ويسمع.', explanation: '', notes: [], page: 74 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'ما يُتفكر فيه وما لا يُتفكر فيه',
      intro: 'كما في الدرسين التاسع عشر والعشرين.',
      columns: ['يُتفكر فيه', 'لا يُتفكر فيه'],
      rows: [
        { label: 'في الله', cells: ['آلاؤه، ومعاني أسمائه وصفاته والعمل بها', 'ذاته وكيفية صفاته'] },
        { label: 'في الغيب', cells: ['ما أخبر به الوحي', 'تصور الروح والجن والملائكة والجنة والنار'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'التفكر في المخلوقات', text: 'كان النبي ﷺ يقوم من آخر الليل فينظر إلى السماء ويقرأ: ﴿إن في خلق السماوات والأرض واختلاف الليل والنهار لآيات لأولي الألباب﴾ [آل عمران: ١٩٠]، رواه مسلم.', page: 71 },
    { title: 'التفكر في العواقب', text: 'كان مطرف بن عبد الله يعرض نفسه على صفات أهل الجنة فلا يرى نفسه منهم، وعلى صفات أهل النار فيرى المكذبين، ثم يرجو أن يكون ممن قال الله فيهم: ﴿خلطوا عملًا صالحًا وآخر سيئًا﴾ [التوبة: ١٠٢].', page: 72 },
    { title: 'حدود التفكر', text: 'لا يتفكر في ذات الله ولا في كيفية صفاته، ولا في تصور عالم الغيب: ﴿ويسألونك عن الروح قل الروح من أمر ربي وما أوتيتم من العلم إلا قليلًا﴾ [الإسراء: ٨٥].', page: 73 },
    { title: 'أحوال السلف', text: 'كان أبو ذر يقضي النهار خاليًا يتفكر، وكان أفضل عبادة أبي الدرداء التفكر والاعتبار، وانطفأ السراج في مجلس سفيان الثوري فبكى وقال: تذكرت القبر.', page: 74 },
    { title: 'فضل التفكر (للاطلاع فقط)', text: 'قال أبو الدرداء: تفكر ساعة خير من قيام ليلة. وقال ابن عباس: ركعتان مقتصدتان في تفكر خير من قيام ليلة والقلب ساه.', more: FYI, page: 76 }
  ],
  keycards: [
    { kind: 'definitie', title: 'التفكر', items: ['جولان العقل والقلب في الدلائل والآيات', 'طلبًا للاستفادة'], page: 70, origin: 'boek' },
    { kind: 'opsomming', title: 'مجالات التفكر', items: ['نصوص الوحي', 'الدنيا وسرعة زوالها', 'المخلوقات', 'نعم الله', 'العواقب والآخرة'], page: 70, origin: 'boek' },
    { kind: 'opsomming', title: 'حدود التفكر', items: ['لا يتفكر في ذات الله وكيفية صفاته', 'لا يحاول تصور عالم الغيب'], page: 73, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات التفكر', items: ['زيادة الإيمان', 'العمل للآخرة والزهد', 'الخشية', 'معرفة النفس وإصلاحها', 'نهضة الأمة', 'الإنتاج العلمي', 'التوبة والرحمة'], page: 74, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التفكر جولان العقل والقلب في الآيات طلبًا للاستفادة.',
    'نتفكر في الوحي والدنيا والمخلوقات والنعم والآخرة.',
    'تفكروا في آلاء الله ولا تفكروا في الله.',
    'لا يترك الواجبات من أجل التفكر.',
    'التفكر يزيد الإيمان ويورث الخشية ويدعو إلى التوبة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أنفع الفكر عند ابن القيم؟', options: ['ما كان في مصالح المعاد ودفع مفاسده', 'ما كان في التجارة', 'ما كان في ذات الله', 'ما كان في الغيب'], answer: 0, explain: 'كما في الدرس التاسع عشر.', page: 70 },
    { type: 'tf', q: 'يجوز التفكر في كيفية صفات الله.', options: ['صواب', 'خطأ'], answer: 1, explain: 'تفكروا في آلاء الله ولا تفكروا في الله.', page: 73 },
    { type: 'mc', q: 'من قال: الفكرة مخ العقل؟', options: ['إبراهيم النخعي', 'سفيان الثوري', 'أبو ذر', 'الشافعي'], answer: 0, explain: 'كما في الدرس الحادي والعشرين.', page: 74 },
    { type: 'mc', q: 'ما الذي يعين على التفكر الصحيح عند قراءة القرآن؟', options: ['الاستعاذة قبل القراءة', 'سرعة القراءة', 'رفع الصوت', 'القراءة بلا فهم'], answer: 0, explain: 'كما ذكر ابن كثير.', page: 76 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٧٧. الصفحة ٧٦ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 10,
  title: 'Nadenken (tafakkur)',
  subtitle: 'Drie lessen samen op één pagina',
  summary: 'De betekenis van nadenken en wat het nuttigst is, de terreinen, de grenzen en valkuilen, hoe de vroege generaties nadachten, de vruchten, de verdienste, en wat juist nadenken helpt.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 10 in één kaart',
    intro: 'Nadenken: terreinen, grenzen en vruchten.',
    root: { label: 'Nadenken', sub: 'Eenheid 10' },
    nodes: [
      { label: 'Terreinen', sub: 'les 19–20', page: 70, children: ['de openbaring', 'de vergankelijke wereld', 'de schepselen', 'Allahs gunsten', 'afloop en Hiernamaals'] },
      { label: 'Grenzen', sub: 'les 20', page: 73, children: ['Allahs wezen en het hoe van Zijn eigenschappen', 'de onzichtbare wereld'] },
      { label: 'Valkuil', sub: 'les 21', page: 74, children: ['plichten laten om na te denken'] },
      { label: 'Vruchten', sub: 'les 21', page: 74, children: ['meer geloof', 'onthechting', 'ontzag', 'zelfkennis', 'inkeer'] }
    ]
  },
  points: [
    { text: 'Tafakkur is letterlijk overwegen en beschouwen; in de leer: verstand en hart laten gaan over bewijzen, tekens en betekenissen om er baat bij te hebben.', page: 70 },
    { text: 'Het nuttigste denken gaat over het welzijn in het Hiernamaals, de wegen ernaartoe, en het afweren van schade en de wegen om die te mijden.', page: 70 },
    { text: 'Terreinen: de teksten van de openbaring, de wereld en haar snelle vergankelijkheid, de schepselen, Allahs gunsten, en de afloop en het Hiernamaals.', page: 70 },
    { text: 'Ook natuurwetenschappen en ervaringskennis kunnen helpen om over Allahs schepping na te denken.', page: 71 },
    { text: 'Men denkt niet na over Allahs wezen of het hoe van Zijn eigenschappen, en probeert de onzichtbare wereld niet voor te stellen.', page: 73 },
    { text: 'Een valkuil is plichten laten om zich alleen aan nadenken te wijden.', page: 74 },
    { text: 'Vruchten: meer geloof, inzet voor het Hiernamaals, ontzag, zelfkennis, opbloei van de gemeenschap, geleerd werk, en inkeer.', page: 74 },
    { text: 'Wat juist nadenken helpt: toevlucht zoeken voor het lezen, en zonden mijden.', page: 76 }
  ],
  terms: [
    { term: 'التفكر', translit: 'at-tafakkur', meaning: 'Letterlijk: overwegen, beschouwen, het hart over iets laten gaan; in de leer: verstand en hart laten gaan over bewijzen, tekens en betekenissen om er baat bij te hebben.', explanation: '', notes: [], page: 70 },
    { term: 'الآلاء', translit: 'al-ālāʾ', meaning: 'Gunsten, weldaden.', explanation: 'In de hadith "denk na over Allahs gunsten".', notes: [], page: 73 },
    { term: 'الاعتبار', translit: 'al-iʿtibār', meaning: 'Lering en vermaning trekken uit wat men ziet en hoort.', explanation: '', notes: [], page: 74 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Waarover wel en niet nadenken',
      intro: 'Zoals in les 19 en 20.',
      columns: ['Wel', 'Niet'],
      rows: [
        { label: 'Over Allah', cells: ['Zijn gunsten; de betekenis van Zijn namen en eigenschappen, en ernaar handelen', 'Zijn wezen en het hoe van Zijn eigenschappen'] },
        { label: 'Over het onzichtbare', cells: ['wat de openbaring erover zegt', 'je de geest, djinn, engelen, Paradijs en Vuur proberen voor te stellen'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'Nadenken over de schepselen', text: 'De Profeet ﷺ stond op in het laatste deel van de nacht, keek naar de hemel en las: "In de schepping van de hemelen en de aarde en de afwisseling van nacht en dag zijn tekenen voor wie verstand hebben" (Āl ʿImrān 3:190); Muslim.', page: 71 },
    { title: 'Nadenken over de afloop', text: 'Muṭarrif ibn ʿAbd Allāh hield zichzelf tegen de beschrijving van de paradijsbewoners en zag zichzelf niet onder hen, en tegen die van de bewoners van het Vuur en zag de loochenaars; dan hoopte hij te horen bij wie "goede en slechte daden vermengden" (at-Tawba 9:102).', page: 72 },
    { title: 'Grenzen van nadenken', text: 'Men denkt niet na over Allahs wezen of het hoe van Zijn eigenschappen, en probeert de onzichtbare wereld niet voor te stellen: "Zij vragen je over de geest. Zeg: de geest behoort tot de zaak van mijn Heer, en jullie is maar weinig kennis gegeven" (al-Isrāʾ 17:85).', page: 73 },
    { title: 'Hoe de vroege generaties nadachten', text: 'Abū Dharr zat de hele dag alleen na te denken; de beste aanbidding van Abū d-Dardāʾ was nadenken en lering trekken; toen de lamp uitging in de bijeenkomst van Sufyān ath-Thawrī, huilde hij en zei: ik dacht aan het graf.', page: 74 },
    { title: 'De verdienste van nadenken (alleen ter kennisname)', text: 'Abū d-Dardāʾ zei: een uur nadenken is beter dan een nacht staan in gebed. Ibn ʿAbbās zei: twee rustige rakʿa’s met nadenken zijn beter dan een nacht staan met een afwezig hart.', more: FYI_NL, page: 76 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Nadenken (tafakkur)', items: ['verstand en hart laten gaan over bewijzen en tekens', 'om er baat bij te hebben'], page: 70, origin: 'boek' },
    { kind: 'opsomming', title: 'Terreinen van nadenken', items: ['de openbaring', 'de wereld en haar vergankelijkheid', 'de schepselen', 'Allahs gunsten', 'de afloop en het Hiernamaals'], page: 70, origin: 'boek' },
    { kind: 'opsomming', title: 'Grenzen van nadenken', items: ['niet over Allahs wezen en het hoe van Zijn eigenschappen', 'de onzichtbare wereld niet proberen voor te stellen'], page: 73, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van nadenken', items: ['meer geloof', 'inzet voor het Hiernamaals en onthechting', 'ontzag', 'zelfkennis en verbetering', 'opbloei van de gemeenschap', 'geleerd werk', 'inkeer en genade'], page: 74, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Nadenken is verstand en hart laten gaan over Allahs tekenen om er baat bij te hebben.',
    'Denk na over de openbaring, de wereld, de schepselen, de gunsten en het Hiernamaals.',
    'Denk na over Allahs gunsten, niet over Allah Zelf.',
    'Laat geen plichten om na te denken.',
    'Nadenken vermeerdert het geloof, geeft ontzag en leidt tot inkeer.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is volgens Ibn al-Qayyim het nuttigste denken?', options: ['over het welzijn in het Hiernamaals en het afweren van schade', 'over handel', 'over Allahs wezen', 'over het onzichtbare'], answer: 0, explain: 'Zoals in les 19.', page: 70 },
    { type: 'tf', q: 'Men mag nadenken over het hoe van Allahs eigenschappen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Denk na over Allahs gunsten, niet over Allah Zelf.', page: 73 },
    { type: 'mc', q: 'Wie zei: nadenken is het merg van het verstand?', options: ['Ibrāhīm an-Nakhaʿī', 'Sufyān ath-Thawrī', 'Abū Dharr', 'ash-Shāfiʿī'], answer: 0, explain: 'Zoals in les 21.', page: 74 },
    { type: 'mc', q: 'Wat helpt om bij het Koranlezen juist na te denken?', options: ['toevlucht zoeken voor het lezen', 'snel lezen', 'luid lezen', 'lezen zonder begrip'], answer: 0, explain: 'Zoals Ibn Kathīr zei.', page: 76 }
  ]),
  note: 'Oefening van het boek op p. 77. Pagina 76 staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '19', unit: 10, ar, nl }
