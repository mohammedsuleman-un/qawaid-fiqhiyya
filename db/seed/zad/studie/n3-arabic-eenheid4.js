// Hoofdstukkaart bij اللغة العربية (٣), eenheid 4: de voorzetsels en de iḍāfa (lessen 21–24, boek p. 89–103).
// Opgesteld uit de leesnotities van het boek; voorbeelden zoals in het boek. Profetische woorden die het
// boek zonder bron als voorbeeld geeft (p. 92 en 100) zijn weggelaten.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-arabic',
  chapter: '21',
  unit: 4,
  source: {
    label: ['كتاب اللغة العربية (٣)، سلسلة زاد العلمية', 'Arabische taal (3), Zad-reeks'],
    pages: '89–103',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['حروف الجر والإضافة', 'Voorzetsels en iḍāfa'],
  subtitle: ['أربعة دروس مجموعة في صفحة واحدة', 'Vier lessen samen op één pagina'],
  summary: [
    'سميت حروف الجر بذلك لأنها تجر معاني الأفعال إلى الأسماء وتجر الأسماء بعدها، وهي: من، إلى، عن، على، في، حتى، الباء، الكاف، اللام، واو القسم، تاء القسم، مذ، منذ، رب؛ ولكل حرف معنى، كالابتداء والتبعيض لمن والانتهاء لإلى والاستعلاء لعلى والظرفية لفي. وتجر الاسم لفظا ومحلا أو محلا فقط، ويحسن أو يجب تقديم الجار والمجرور أحيانا. والإضافة نسبة اسم إلى اسم: الأول مضاف يعرب حسب موقعه ويحذف منه التنوين والنون، والثاني مضاف إليه مجرور دائما؛ وهي معنوية تفيد التعريف أو التخصيص، أو لفظية تفيد التخفيف.',
    'Voorzetsels (ḥurūf al-jarr) heten zo omdat ze de betekenis van het werkwoord naar het naamwoord "trekken" en het naamwoord erna in de genitief zetten: min, ilā, ʿan, ʿalā, fī, ḥattā, bi-, ka-, li-, de wāw en tāʾ van de eed, mudh, mundhu en rubba. Elk heeft een betekenis, zoals begin en gedeeltelijkheid (min), einde (ilā), verhevenheid (ʿalā) en plaats of tijd (fī). Ze geven een genitief in vorm en plaats, of alleen in plaats; soms is het goed of verplicht de voorzetselgroep voorop te zetten. De iḍāfa verbindt twee naamwoorden: het eerste (muḍāf) krijgt de naamval van zijn functie en verliest tanwīn en nūn, het tweede (muḍāf ilayh) staat altijd in de genitief. Ze is betekenisvol (bepaaldheid of specificering) of vormelijk (alleen verlichting).'
  ],
  map: {
    title: ['الوحدة الرابعة في خريطة واحدة', 'Eenheid 4 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['حروف الجر والإضافة', 'Voorzetsels en iḍāfa'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['حروف الجر ومعانيها', 'Voorzetsels en betekenissen'], sub: ['الدرس ٢١', 'les 21'], page: 91, children: [['من وإلى وعلى وفي', 'min, ilā, ʿalā, fī'], ['الباء واللام والكاف', 'bi-, li-, ka-'], ['حروف القسم ومذ ومنذ ورب', 'eedpartikels, mudh, mundhu, rubba']] },
      { label: ['أحكام حروف الجر', 'Regels van de voorzetsels'], sub: ['الدرس ٢٢', 'les 22'], page: 93, children: [['الجر لفظا ومحلا', 'genitief in vorm en plaats'], ['التقديم', 'vooropplaatsing'], ['ما بعد الحروف', 'mā na voorzetsels']] },
      { label: ['الإضافة', 'De iḍāfa'], sub: ['الدرسان ٢٣–٢٤', 'les 23–24'], page: 98, children: [['أحكامها', 'regels'], ['المعنوية', 'betekenisvol'], ['اللفظية', 'vormelijk']] }
    ]
  },
  points: [
    [91, 'تسمى حروف الجر حروف الإضافة أيضا، لأنها تضيف معاني الأفعال إلى الأسماء.', 'Voorzetsels heten ook ḥurūf al-iḍāfa, omdat ze de betekenis van werkwoorden aan naamwoorden toevoegen.'],
    [92, 'تاء القسم لا تدخل إلا على لفظ الجلالة، والواو تدخل على كل مقسم به.', 'De tāʾ van de eed staat alleen voor het woord Allāh; de wāw voor alles waarbij gezworen wordt.'],
    [93, 'يتغير معنى الفعل بتغير الحرف: دعوت له ودعوت عليه، ورغبت في الطعام ورغبت عنه.', 'De betekenis van het werkwoord verandert met het voorzetsel: daʿawtu lahu (bidden voor) en daʿawtu ʿalayhi (bidden tegen), raghibtu fī (willen) en raghibtu ʿan (niet willen).'],
    [94, 'تزاد ما بعد من وعن والباء فلا تكفها عن العمل: ﴿مما خطيئاتهم أغرقوا﴾، وتكف رب عن العمل: ﴿ربما يود الذين كفروا﴾.', 'Na min, ʿan en bi- wordt mā toegevoegd zonder de werking op te heffen ("door hun zonden werden zij verdronken"); na rubba heft mā de werking wel op ("misschien wensen zij die ongelovig zijn").'],
    [94, 'تحذف ألف ما الاستفهامية إذا دخل عليها حرف جر: بم، لم، مم، عم، فيم، علام، حتام، إلام.', 'De alif van vragend mā valt weg na een voorzetsel: bima, lima, mimma, ʿamma, fīma, ʿalāma, ḥattāma, ilāma.'],
    [98, 'يحذف التنوين من المضاف المفرد، والنون من المثنى وجمع المذكر السالم: رجلا الأمن، مساعدو المساكين.', 'Een enkelvoudige muḍāf verliest zijn tanwīn, een dualis of mannelijk meervoud zijn nūn: rajulā l-amn, musāʿidū l-masākīn.'],
    [101, 'لا تدخل أل على المضاف في الإضافة المعنوية، وتدخل عليه في اللفظية في ثلاثة مواضع.', 'Bij de betekenisvolle iḍāfa krijgt de muḍāf nooit al-; bij de vormelijke iḍāfa op drie plaatsen wel.'],
    [102, 'من الأخطاء الشائعة قولهم: الغير صحيح، والصواب: غير الصحيح.', 'Een veelgemaakte fout is "al-ghayr ṣaḥīḥ"; juist is "ghayr aṣ-ṣaḥīḥ".']
  ],
  terms: [
    ['حروف الجر', 'ḥurūf al-jarr', 91, 'حروف تجر معاني الأفعال إلى الأسماء وتجر الأسماء بعدها.', 'Partikels die de betekenis van werkwoorden naar naamwoorden trekken en die naamwoorden in de genitief zetten.'],
    ['التبعيض', 'at-tabʿīḍ', 91, 'الدلالة على البعض، من معاني من.', 'Gedeeltelijkheid; een betekenis van min.', 'اقطع لي من القماش', 'snijd voor mij een stuk van de stof'],
    ['الاستعلاء', 'al-istiʿlāʾ', 91, 'الدلالة على العلو، من معاني على، حسيا أو معنويا.', 'Verhevenheid, letterlijk of figuurlijk; een betekenis van ʿalā.'],
    ['الإضافة', 'al-iḍāfa', 98, 'نسبة اسم إلى آخر، الأول مضاف والثاني مضاف إليه.', 'Een naamwoord met een ander verbinden: het eerste is muḍāf, het tweede muḍāf ilayh.'],
    ['الإضافة المعنوية', 'al-iḍāfa al-maʿnawiyya', 99, 'ما أفاد فيها المضاف تعريفا أو تخصيصا، وتكون على معنى اللام أو من أو في.', 'Iḍāfa waarbij de muḍāf bepaaldheid of specificering krijgt, met de betekenis van li-, min of fī.'],
    ['الإضافة اللفظية', 'al-iḍāfa al-lafẓiyya', 100, 'إضافة الوصف المشتق إلى معموله، وفائدتها التخفيف اللفظي.', 'Een afgeleid adjectief verbonden met zijn object of subject; ze verlicht alleen de vorm.', 'كريم الخلق، فالق الحب', 'karīm al-khuluq, fāliq al-ḥabb']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['من معاني حروف الجر', 'Betekenissen van de voorzetsels'],
      intro: ['مع أمثلة الكتاب.', 'Met voorbeelden uit het boek.'],
      columns: [['المعنى', 'Betekenis'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['من', 'min'], cells: [['الابتداء والتبعيض', 'begin en gedeeltelijkheid'], ['﴿فمنكم كافر ومنكم مؤمن﴾', '"onder jullie zijn ongelovigen en gelovigen"']] },
        { label: ['إلى', 'ilā'], cells: [['الانتهاء', 'einde'], ['﴿إلى الله مرجعكم جميعا﴾', '"tot Allah keren jullie allen terug"']] },
        { label: ['على', 'ʿalā'], cells: [['الاستعلاء', 'verhevenheid'], ['﴿فضلنا بعضهم على بعض﴾', '"Wij verkozen sommigen boven anderen"']] },
        { label: ['في', 'fī'], cells: [['الظرفية والتعليل', 'plaats of tijd, en reden'], ['﴿سيغلبون في بضع سنين﴾', '"zij zullen winnen binnen enkele jaren"']] },
        { label: ['الباء', 'bi-'], cells: [['الاستعانة والسببية والإلصاق والظرفية', 'middel, oorzaak, aanhechting en plaats'], ['قطعت اللحم بالسكين', 'ik sneed het vlees met het mes']] },
        { label: ['اللام', 'li-'], cells: [['الاختصاص والملك', 'specificiteit en bezit'], ['﴿لله ما في السماوات﴾', '"aan Allah behoort wat in de hemelen is"']] },
        { label: ['الكاف', 'ka-'], cells: [['التشبيه', 'vergelijking'], ['﴿يوم تكون السماء كالمهل﴾', '"de dag dat de hemel als gesmolten metaal is"']] },
        { label: ['رب', 'rubba'], cells: [['التقليل والتكثير', 'weinig of veel'], ['رب أخ لك لم تلده أمك', 'menig broeder van je is niet door je moeder gebaard']] }
      ],
      page: 91
    },
    {
      type: 'compare',
      title: ['الإضافة المعنوية واللفظية', 'Betekenisvolle en vormelijke iḍāfa'],
      intro: ['أهم الفروق كما في الكتاب.', 'De belangrijkste verschillen volgens het boek.'],
      columns: [['المعنوية', 'Betekenisvol'], ['اللفظية', 'Vormelijk']],
      rows: [
        { label: ['المضاف', 'De muḍāf'], cells: [['اسم غير وصف عامل', 'een naamwoord, geen werkend adjectief'], ['وصف مشتق مضاف إلى معموله', 'een afgeleid adjectief met zijn object of subject']] },
        { label: ['الفائدة', 'Nut'], cells: [['التعريف أو التخصيص', 'bepaaldheid of specificering'], ['التخفيف اللفظي فقط', 'alleen vormelijke verlichting']] },
        { label: ['أل على المضاف', 'al- op de muḍāf'], cells: [['لا تدخل', 'nooit'], ['تدخل في ثلاثة مواضع: المكرما خالد، الزائرو أبيك، الحسن الخلق', 'op drie plaatsen: al-mukramā Khālid, az-zāʾirū abīka, al-ḥasan al-khuluq']] },
        { label: ['مثال', 'Voorbeeld'], cells: [['بيت محمد، ثوب حرير، صلاة الليل', 'het huis van Muḥammad, een kleed van zijde, het nachtgebed'], ['﴿إن الله فالق الحب والنوى﴾', '"Allah splijt het zaad en de pit"']] }
      ],
      page: 100
    }
  ],
  sections: [
    [93, 'عمل حروف الجر', 'De werking van de voorzetsels', 'تجر الاسم بعدها لفظا ومحلا: مررت بأبيك، أو محلا فقط إذا كان مبنيا: مررت بأولئك، رحبت بهم.', 'Ze zetten het naamwoord in de genitief in vorm en plaats ("ik kwam langs je vader"), of alleen in plaats als het onverbuigbaar is ("ik kwam langs hen").'],
    [93, 'تقديم الجار والمجرور', 'De voorzetselgroep vooraan', 'يحسن تقديمه للاهتمام: لله أصلي، ولدفع الثقل؛ ويجب إذا كان خبرا لمبتدأ نكرة: في المزرعة عمال، أو في المبتدأ ضمير يعود عليه: في السيارة صاحبها، أو كان المجرور استفهاما: لمن هذا الكتاب؟', 'Vooropplaatsen is goed voor nadruk ("voor Allah bid ik") of om zwaarte te vermijden; het is verplicht als het de khabar is van een onbepaalde mubtadaʾ ("op de boerderij zijn arbeiders"), als de mubtadaʾ een voornaamwoord bevat dat ernaar verwijst ("in de auto zit zijn eigenaar"), of bij een vraagwoord ("van wie is dit boek?").'],
    [99, 'الإضافة المعنوية على ثلاثة معان', 'Drie betekenissen van de betekenisvolle iḍāfa', 'تكون على معنى اللام وهي الأكثر: بيت محمد، أو من: ثوب حرير، أو في: صلاة الليل؛ وإذا أضيف إلى معرفة اكتسب التعريف، وإلى نكرة اكتسب التخصيص: حذاء رجل.', 'Met de betekenis van li-, de meest voorkomende ("het huis van Muḥammad"), van min ("een kleed van zijde") of van fī ("het nachtgebed"). Verbonden met iets bepaalds wordt de muḍāf bepaald; met iets onbepaalds alleen gespecificeerd ("een mannenschoen").']
  ],
  keycards: [
    ['opsomming', 91, 'حروف الجر', 'De voorzetsels', ['من، إلى، عن، على، في، حتى', 'الباء، الكاف، اللام', 'واو القسم، تاء القسم', 'مذ، منذ، رب'], ['min, ilā, ʿan, ʿalā, fī, ḥattā', 'bi-, ka-, li-', 'de wāw en tāʾ van de eed', 'mudh, mundhu, rubba']],
    ['opsomming', 98, 'أحكام الإضافة', 'Regels van de iḍāfa', ['تتكون من مضاف ومضاف إليه', 'يحذف تنوين المضاف ونون المثنى والجمع', 'يعرب المضاف حسب موقعه', 'المضاف إليه مجرور دائما'], ['bestaat uit muḍāf en muḍāf ilayh', 'tanwīn en de nūn van dualis en meervoud vallen weg', 'de muḍāf krijgt de naamval van zijn functie', 'de muḍāf ilayh staat altijd in de genitief']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['حروف الجر تجر الاسم بعدها، ولكل حرف معنى خاص.', 'Voorzetsels zetten het naamwoord in de genitief, en elk heeft een eigen betekenis.'],
    ['الأصل تأخير الجار والمجرور، ويحسن أو يجب تقديمه أحيانا.', 'In de grond staat de voorzetselgroep achteraan; soms is vooropplaatsen goed of verplicht.'],
    ['ما بعد من وعن والباء لا تكف، وبعد رب تكف.', 'Mā na min, ʿan en bi- heft niet op; na rubba wel.'],
    ['المضاف يعرب حسب موقعه، والمضاف إليه مجرور دائما.', 'De muḍāf krijgt de naamval van zijn functie, de muḍāf ilayh altijd de genitief.'],
    ['الإضافة معنوية تفيد التعريف أو التخصيص، ولفظية تفيد التخفيف.', 'De iḍāfa is betekenisvol (bepaaldheid of specificering) of vormelijk (verlichting).']
  ],
  quiz: [
    { type: 'mc', page: 91, q: ['ما معنى «من» في ﴿فمنكم كافر ومنكم مؤمن﴾؟', 'Wat betekent "min" in "fa-minkum kāfirun wa minkum muʾmin"?'], options: [['التبعيض', 'الابتداء', 'الانتهاء', 'التشبيه'], ['gedeeltelijkheid', 'begin', 'einde', 'vergelijking']], answer: 0, explain: ['أي بعضكم كافر وبعضكم مؤمن.', 'Een deel van jullie is ongelovig en een deel gelovig.'] },
    { type: 'tf', page: 92, q: ['تدخل تاء القسم على كل مقسم به.', 'De tāʾ van de eed staat voor alles waarbij gezworen wordt.'], answer: 1, explain: ['لا تدخل إلا على لفظ الجلالة: تالله.', 'Alleen voor het woord Allāh: tallāhi.'] },
    { type: 'mc', page: 93, q: ['لماذا وجب تقديم الجار والمجرور في: لمن هذا الكتاب؟', 'Waarom staat de voorzetselgroep verplicht vooraan in "liman hādhā l-kitāb?"'], options: [['لأن المجرور اسم استفهام', 'للاهتمام', 'لدفع الثقل', 'لأنه مبتدأ'], ['omdat het een vraagwoord is', 'voor nadruk', 'tegen zwaarte', 'omdat het mubtadaʾ is']], answer: 0, explain: ['الاستفهام له الصدارة.', 'Een vraagwoord staat vooraan.'] },
    { type: 'mc', page: 94, q: ['ما الصواب عند دخول «عن» على «ما» الاستفهامية؟', 'Wat is juist als ʿan voor vragend mā komt?'], options: [['عم', 'عن ما', 'عما', 'عنما'], ['ʿamma', 'ʿan mā', 'ʿammā', 'ʿanmā']], answer: 0, explain: ['تحذف ألف ما الاستفهامية.', 'De alif van vragend mā valt weg.'] },
    { type: 'tf', page: 98, q: ['يقال: رأيت رجلين الأمن.', 'Men zegt "raʾaytu rajulayni l-amn".'], answer: 1, explain: ['تحذف نون المثنى عند الإضافة: رجلي الأمن.', 'Bij iḍāfa valt de nūn van de dualis weg: rajulay l-amn.'] },
    { type: 'mc', page: 102, q: ['أي هذه هو الصواب؟', 'Wat is juist?'], options: [['غير الصحيح', 'الغير صحيح', 'الغير الصحيح', 'اللاصحيح'], ['ghayr aṣ-ṣaḥīḥ', 'al-ghayr ṣaḥīḥ', 'al-ghayr aṣ-ṣaḥīḥ', 'al-lā-ṣaḥīḥ']], answer: 0, explain: ['غير ليست اسم فاعل ولا مفعول ولا صفة مشبهة، فلا تدخل عليها أل.', 'Ghayr is geen deelwoord of ṣifa mushabbaha, dus krijgt het geen al-.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٩٦ و١٠٣.', 'Oefeningen van het boek op p. 96 en 103. De Nederlandse uitleg is een hulp bij het Arabisch, geen vervanging.']
})
