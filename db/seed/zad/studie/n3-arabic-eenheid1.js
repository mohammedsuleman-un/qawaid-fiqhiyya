// Hoofdstukkaart bij اللغة العربية (٣), eenheid 1: de fāʿil en de nāʾib al-fāʿil (lessen 1–6,
// boek p. 9–33). Opgesteld uit de leesnotities van het boek; voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-arabic',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب اللغة العربية (٣)، سلسلة زاد العلمية', 'Arabische taal (3), Zad-reeks'],
    pages: '9–33',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['الفاعل ونائب الفاعل', 'De fāʿil en de nāʾib al-fāʿil'],
  subtitle: ['ستة دروس مجموعة في صفحة واحدة', 'Zes lessen samen op één pagina'],
  summary: [
    'الفاعل اسم مرفوع أسند إليه فعل مبني للمعلوم يدل على من قام بالفعل أو قام به الفعل، وهو اسم ظاهر أو ضمير أو مصدر مؤول، وقد يجر لفظا بحرف جر زائد. وله ستة أحكام: لا يتقدم على فعله، ولا يثنى الفعل ولا يجمع معه، ويطابقه في التذكير والتأنيث، ويجوز الفصل بينهما وحذف الفعل، ويتقدم على المفعول أو يتأخر. ونائب الفاعل اسم مرفوع بعد فعل مبني للمجهول أو شبهه، يحل محل الفاعل بعد حذفه، وأنواعه خمسة. ويبنى الماضي والمضارع للمجهول بقواعد مخصوصة.',
    'De fāʿil (handelende) is een naamwoord in de nominatief waaraan een actief werkwoord is toegekend; hij geeft aan wie de handeling deed of aan wie zij gebeurde. Hij is een zichtbaar naamwoord, een voornaamwoord of een maṣdar muʾawwal, en kan door een overbodig voorzetsel in vorm een genitief krijgen. Er gelden zes regels: hij komt niet vóór zijn werkwoord, het werkwoord staat dan niet in dualis of meervoud, het stemt overeen in geslacht, scheiding en weglating van het werkwoord zijn toegestaan, en hij kan vóór of na het object staan. De nāʾib al-fāʿil is een naamwoord in de nominatief na een passief werkwoord (of iets wat erop lijkt) dat de plaats van de weggelaten fāʿil inneemt; er zijn vijf soorten. Verleden en tegenwoordige tijd worden volgens vaste regels passief gemaakt.'
  ],
  map: {
    title: ['الفاعل ونائبه في خريطة واحدة', 'Fāʿil en nāʾib al-fāʿil in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الفاعل ونائبه', 'Fāʿil en nāʾib al-fāʿil'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['الفاعل', 'De fāʿil'], sub: ['الدرس ١', 'les 1'], page: 11, children: [['تعريفه وحكمه', 'definitie en naamval'], ['أنواعه الثلاثة', 'drie soorten']] },
      { label: ['أحكام الفاعل', 'Regels van de fāʿil'], sub: ['الدرسان ٢–٣', 'les 2–3'], page: 15, children: [['التذكير والتأنيث', 'mannelijk en vrouwelijk'], ['الفصل والحذف', 'scheiding en weglating'], ['التقديم والتأخير', 'volgorde']] },
      { label: ['نائب الفاعل', 'De nāʾib al-fāʿil'], sub: ['الدرسان ٤–٥', 'les 4–5'], page: 21, children: [['أنواعه الخمسة', 'vijf soorten'], ['مع المتعدي واللازم', 'bij transitief en intransitief']] },
      { label: ['البناء للمجهول', 'Passief maken'], sub: ['الدرس ٦', 'les 6'], page: 27, children: [['الماضي', 'verleden tijd'], ['المضارع', 'tegenwoordige tijd'], ['تحويل الجملة', 'een zin omzetten']] }
    ]
  },
  points: [
    [11, 'معنى «قام به الفعل» أنه اتصف به وإن لم يفعله، مثل: مات العصفور، وانكسرت الزجاجة.', '"Aan wie de handeling gebeurde" betekent dat hij ermee bekleed is, ook als hij het niet zelf deed, zoals in "de mus stierf" en "het glas brak".'],
    [12, 'لفظ الجلالة في ﴿وكفى بالله شهيدا﴾ فاعل مجرور لفظا بالباء الزائدة مرفوع محلا.', 'In "Allah is genoeg als getuige" is Allāh de fāʿil: in vorm genitief door een overbodige bāʾ, qua plaats nominatief.'],
    [15, 'في «محمد جاء» محمد مبتدأ، والفاعل ضمير مستتر تقديره هو؛ لأن الفاعل لا يتقدم على فعله.', 'In "Muḥammad kwam" is Muḥammad onderwerp van een naamwoordelijke zin (mubtadaʾ); de fāʿil is het verborgen "hij", want de fāʿil komt niet vóór zijn werkwoord.'],
    [15, 'يقال: جاء الطالبان، وانتصر المسلمون، لا: جاءا الطالبان ولا انتصروا المسلمون.', 'Men zegt "jāʾa ṭ-ṭālibān" en "intaṣara l-muslimūn", niet met een dualis- of meervoudsuitgang aan het werkwoord.'],
    [16, 'إذا فصل بين الفعل والفاعل المؤنث بإلا لم تلحق التاء: ما نجح إلا فاطمة.', 'Wordt de vrouwelijke fāʿil van het werkwoord gescheiden door illā, dan krijgt het werkwoord geen tāʾ: "mā najaḥa illā Fāṭima".'],
    [21, 'يقال في الفعل المبني للمجهول: مبني لما لم يسم فاعله، وفي القرآن يكون الفاعل معلوما وهو الله.', 'Een passief werkwoord heet ook "gebouwd voor wat zijn fāʿil niet noemt"; in de Koran is de fāʿil bekend: Allah.'],
    [28, 'لا يبنى للمجهول فعل الأمر ولا الفعل الجامد.', 'De gebiedende wijs en starre werkwoorden worden niet passief gemaakt.'],
    [29, 'أفعال وردت بصيغة المجهول ومعناها للمعلوم، ويعرب ما بعدها فاعلا: دهش، هزل، شغف، أولع، أغري، أغرم، عني.', 'Sommige werkwoorden staan in passieve vorm maar hebben een actieve betekenis; wat erna komt is fāʿil: duhisha, huzila, shughifa, ūliʿa, ughriya, ughrima, ʿuniya.']
  ],
  terms: [
    ['الفاعل', 'al-fāʿil', 11, 'اسم مرفوع أسند إليه فعل مبني للمعلوم يدل على من قام بالفعل أو قام به.', 'Naamwoord in de nominatief waaraan een actief werkwoord is toegekend.'],
    ['المصدر المؤول', 'al-maṣdar al-muʾawwal', 12, 'ما يتكون من حرف مصدري وما بعده ويؤول بمصدر صريح.', 'Een constructie van een maṣdar-partikel met wat volgt, op te vatten als een echt maṣdar.', 'يعجبني أن تنجح = يعجبني نجاحك', 'yuʿjibunī an tanjaḥ = yuʿjibunī najāḥuka'],
    ['حرف الجر الزائد', 'ḥarf al-jarr az-zāʾid', 11, 'حرف يجر لفظا ولا يغير الموقع الإعرابي.', 'Een voorzetsel dat in vorm de genitief geeft maar de functie niet verandert.'],
    ['نائب الفاعل', 'nāʾib al-fāʿil', 21, 'اسم مرفوع بعد فعل مبني للمجهول أو شبهه يحل محل الفاعل بعد حذفه.', 'Naamwoord in de nominatief na een passief werkwoord dat de plaats van de weggelaten fāʿil inneemt.'],
    ['المبني للمجهول', 'al-mabnī li-l-majhūl', 21, 'الفعل الذي حذف فاعله وأقيم غيره مقامه.', 'Het passieve werkwoord, waarvan de fāʿil is weggelaten.'],
    ['الفعل الأجوف', 'al-fiʿl al-ajwaf', 27, 'ما كان وسطه حرف علة، مثل: قال وباع.', 'Een werkwoord met een zwakke middelste letter, zoals qāla en bāʿa.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['البناء للمجهول', 'Passief maken'],
      intro: ['أهم القواعد مع أمثلة الكتاب.', 'De belangrijkste regels met voorbeelden uit het boek.'],
      columns: [['القاعدة', 'Regel'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['الماضي الصحيح', 'Verleden, gezond'], cells: [['يضم أوله ويكسر ما قبل آخره', 'eerste letter ḍamma, voorlaatste kasra'], ['عَلِمَ ← عُلِمَ', 'ʿalima → ʿulima']] },
        { label: ['الماضي المبدوء بتاء', 'Verleden, met tāʾ'], cells: [['يضم الأول والثاني', 'eerste en tweede letter ḍamma'], ['تَقَبَّلَ ← تُقُبِّلَ', 'taqabbala → tuqubbila']] },
        { label: ['الماضي المبدوء بهمزة وصل', 'Verleden, met hamzat waṣl'], cells: [['يضم الأول والثالث', 'eerste en derde letter ḍamma'], ['اسْتَعْمَلَ ← اسْتُعْمِلَ', 'istaʿmala → istuʿmila']] },
        { label: ['الماضي الأجوف', 'Verleden, ajwaf'], cells: [['تقلب العلة ياء ويكسر الأول', 'de zwakke letter wordt yāʾ, eerste letter kasra'], ['قال ← قِيلَ', 'qāla → qīla']] },
        { label: ['المضارع الصحيح', 'Tegenwoordig, gezond'], cells: [['يضم أوله ويفتح ما قبل آخره', 'eerste letter ḍamma, voorlaatste fatḥa'], ['يأكل ← يُؤكَل', 'yaʾkulu → yuʾkalu']] },
        { label: ['المضارع الأجوف', 'Tegenwoordig, ajwaf'], cells: [['يضم أوله وتقلب العلة ألفا', 'eerste letter ḍamma, zwakke letter wordt alif'], ['يبيع ← يُباع', 'yabīʿu → yubāʿu']] }
      ],
      page: 27
    },
    {
      type: 'cards',
      title: ['أنواع نائب الفاعل', 'Soorten nāʾib al-fāʿil'],
      intro: ['خمسة أنواع كما ذكرها الكتاب.', 'Vijf soorten, zoals het boek ze noemt.'],
      nodes: [
        [22, 'الاسم الظاهر', 'Zichtbaar naamwoord', '﴿وغيض الماء﴾', '"en het water zakte"'],
        [22, 'الضمير', 'Voornaamwoord', 'متصل ومنفصل ومستتر', 'verbonden, los of verborgen'],
        [22, 'المصدر المؤول', 'Maṣdar muʾawwal', '﴿قل أوحي إلي أنه استمع نفر﴾', '"zeg: mij is geopenbaard dat een groep luisterde"'],
        [23, 'الجملة', 'Een zin', 'قيل: لا تهملوا واجباتكم', 'qīla: lā tuhmilū wājibātikum'],
        [23, 'شبه الجملة', 'Halve zin', 'جلس في الغرفة، سوفر يوم الخميس', 'julisa fī l-ghurfa, sūfira yawma l-khamīs']
      ]
    }
  ],
  sections: [
    [12, 'أنواع الفاعل', 'Soorten fāʿil', 'الفاعل ثلاثة أنواع: اسم ظاهر مثل: غزا العالم الفضاء؛ وضمير متصل مثل: قمنا، أو مستتر مثل: محمد سافر؛ ومصدر مؤول مثل: يعجبني أن تنجح.', 'Er zijn drie soorten fāʿil: een zichtbaar naamwoord, zoals in "de geleerde veroverde de ruimte"; een voornaamwoord, verbonden zoals in "qumnā" of verborgen zoals in "Muḥammad reisde"; en een maṣdar muʾawwal, zoals in "het bevalt mij dat je slaagt".'],
    [16, 'التأنيث الجائز', 'Facultatief vrouwelijk', 'يجوز تذكير الفعل وتأنيثه إذا كان الفاعل مؤنثا مجازيا: ﴿قد جاءتكم موعظة﴾ و﴿فمن جاءه موعظة﴾، أو مفصولا بغير إلا، أو مع الفعل الجامد، أو جمع تكسير.', 'Het werkwoord mag mannelijk of vrouwelijk zijn als de fāʿil figuurlijk vrouwelijk is (vergelijk "jāʾatkum mawʿiẓa" en "jāʾahu mawʿiẓa"), gescheiden door iets anders dan illā, bij een star werkwoord, of bij een gebroken meervoud.'],
    [18, 'تقديم المفعول وجوبا', 'Het object verplicht vooraan', 'يجب تقديم المفعول على الفاعل إذا حصر الفاعل بإنما أو إلا: ﴿إنما يخشى الله من عباده العلماء﴾، أو كان المفعول ضميرا متصلا والفاعل اسما ظاهرا: أدبك أبوك، أو اتصل بالفاعل ضمير يعود على المفعول: ﴿وإذ ابتلى إبراهيم ربه﴾.', 'Het object moet vóór de fāʿil als de fāʿil beperkt is met innamā of illā ("alleen de geleerden onder Zijn dienaren vrezen Allah"), als het object een verbonden voornaamwoord is en de fāʿil een zichtbaar naamwoord, of als aan de fāʿil een voornaamwoord hangt dat naar het object verwijst ("toen zijn Heer Ibrāhīm beproefde").'],
    [25, 'نائب الفاعل مع المتعدي واللازم', 'Bij transitief en intransitief', 'مع المتعدي ينوب المفعول به، وإن تعدد ناب الأول وبقي الباقي منصوبا: ظن الرجل قائما؛ ومع اللازم ينوب الجار والمجرور أو الظرف أو المصدر المختص: صيم شهر كريم.', 'Bij een transitief werkwoord vervangt het object de fāʿil; bij meerdere objecten het eerste, en de rest blijft accusatief ("ẓunna r-rajulu qāʾiman"). Bij een intransitief werkwoord doet een voorzetselgroep, bijwoord of bepaald maṣdar dat ("ṣīma shahrun karīm").']
  ],
  keycards: [
    ['opsomming', 19, 'أحكام الفاعل', 'Regels van de fāʿil', ['لا يتقدم على فعله', 'لا يثنى الفعل ولا يجمع مع فاعله المثنى والجمع', 'المطابقة في التذكير والتأنيث', 'جواز الفصل بينه وبين عامله', 'جواز حذف الفعل لقرينة', 'تقديمه على المفعول أو تأخيره'], ['hij komt niet vóór zijn werkwoord', 'het werkwoord krijgt geen dualis- of meervoudsvorm', 'overeenstemming in geslacht', 'scheiding van zijn regens is toegestaan', 'het werkwoord mag weg bij een aanwijzing', 'hij kan vóór of na het object']],
    ['voorwaarde', 15, 'التأنيث الواجب', 'Verplicht vrouwelijk', ['الفاعل مؤنث حقيقي ظاهر متصل بالفعل: ﴿إذ قالت امرأت عمران﴾', 'الفاعل ضمير يعود على مؤنث حقيقي أو مجازي: الشمس أشرقت'], ['de fāʿil is echt vrouwelijk, zichtbaar en direct na het werkwoord', 'de fāʿil is een voornaamwoord dat naar iets vrouwelijks verwijst']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['الفاعل مرفوع دائما، وقد يجر لفظا بحرف جر زائد.', 'De fāʿil staat altijd in de nominatief, maar kan door een overbodig voorzetsel in vorm een genitief krijgen.'],
    ['أنواعه: الاسم الظاهر والضمير والمصدر المؤول.', 'Soorten: zichtbaar naamwoord, voornaamwoord en maṣdar muʾawwal.'],
    ['للفاعل ستة أحكام في التقديم والمطابقة والفصل والحذف.', 'De fāʿil kent zes regels over volgorde, overeenstemming, scheiding en weglating.'],
    ['نائب الفاعل يحل محل الفاعل المحذوف، وأنواعه خمسة.', 'De nāʾib al-fāʿil neemt de plaats in van de weggelaten fāʿil; er zijn vijf soorten.'],
    ['يبنى الماضي بضم أوله وكسر ما قبل آخره، والمضارع بضم أوله وفتح ما قبل آخره.', 'De verleden tijd wordt passief met ḍamma op de eerste en kasra op de voorlaatste letter, de tegenwoordige tijd met ḍamma op de eerste en fatḥa op de voorlaatste.']
  ],
  quiz: [
    { type: 'mc', page: 12, q: ['ما إعراب لفظ الجلالة في ﴿وكفى بالله شهيدا﴾؟', 'Wat is de functie van Allāh in "Allah is genoeg als getuige"?'], options: [['فاعل مجرور لفظا مرفوع محلا', 'مفعول به', 'مبتدأ', 'حال'], ['fāʿil, in vorm genitief, qua plaats nominatief', 'lijdend voorwerp', 'mubtadaʾ', 'ḥāl']], answer: 0, explain: ['الباء حرف جر زائد.', 'De bāʾ is een overbodig voorzetsel.'] },
    { type: 'mc', page: 15, q: ['ما إعراب «محمد» في: محمد جاء؟', 'Wat is "Muḥammad" in "Muḥammad jāʾa"?'], options: [['مبتدأ', 'فاعل', 'مفعول به', 'نائب فاعل'], ['mubtadaʾ', 'fāʿil', 'lijdend voorwerp', 'nāʾib al-fāʿil']], answer: 0, explain: ['الفاعل لا يتقدم على فعله، والفاعل ضمير مستتر.', 'De fāʿil komt niet vóór zijn werkwoord; de fāʿil is het verborgen voornaamwoord.'] },
    { type: 'tf', page: 16, q: ['يصح أن يقال: ما نجحت إلا فاطمة.', '"Mā najaḥat illā Fāṭima" is correct.'], answer: 1, explain: ['الصواب: ما نجح إلا فاطمة، لأن الفاصل إلا.', 'Juist is "mā najaḥa illā Fāṭima", omdat illā ertussen staat.'] },
    { type: 'mc', page: 18, q: ['لماذا قدم المفعول في ﴿إنما يخشى الله من عباده العلماء﴾؟', 'Waarom staat het object vooraan in "innamā yakhshā llāha min ʿibādihi l-ʿulamāʾ"?'], options: [['لأن الفاعل محصور بإنما', 'لأن المفعول ضمير', 'للضرورة الشعرية', 'لا سبب'], ['omdat de fāʿil beperkt is met innamā', 'omdat het object een voornaamwoord is', 'om het metrum', 'zonder reden']], answer: 0, explain: ['العلماء فاعل مؤخر.', 'Al-ʿulamāʾ is een achteropgeplaatste fāʿil.'] },
    { type: 'mc', page: 27, q: ['ما المبني للمجهول من «قال»؟', 'Wat is het passief van "qāla"?'], options: [['قِيلَ', 'قُولَ', 'يُقال', 'قُوِّلَ'], ['qīla', 'qūla', 'yuqālu', 'quwwila']], answer: 0, explain: ['الأجوف تقلب علته ياء ويكسر أوله.', 'Bij een ajwaf wordt de zwakke letter yāʾ en krijgt de eerste letter kasra.'] },
    { type: 'tf', page: 28, q: ['يبنى فعل الأمر للمجهول.', 'De gebiedende wijs kan passief gemaakt worden.'], answer: 1, explain: ['لا يبنى الأمر ولا الجامد للمجهول.', 'De gebiedende wijs en starre werkwoorden worden niet passief.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ١٤ و٢٠ و٢٤ و٣٠.', 'Oefeningen van het boek op p. 14, 20, 24 en 30. De Nederlandse uitleg is een hulp bij het Arabisch, geen vervanging.']
})
