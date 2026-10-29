// Hoofdstukkaart bij اللغة العربية (٤), eenheid 1: التعجب (lessen 1, boek p. 9–14).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-arabic/leesnotities.md);
// voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-arabic',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب اللغة العربية (٤)، سلسلة زاد العلمية', 'Arabische taal (4), Zad-reeks'],
    pages: '9–14',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['التعجب', 'De uitroep van verwondering'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'التعجب أسلوب يدل على الدهشة والاستغراب، وصيغه سماعية وقياسية. القياسية صيغتان: ما أفعله، وأفعل به، ولفعل التعجب سبعة شروط، فإن فقد شرط جيء بمصدر صريح أو مؤول مع فعل مساعد.',
    'Taʿajjub is een stijl die verbazing en verwondering uitdrukt; er zijn overgeleverde (samāʿī) en regelmatige (qiyāsī) vormen. De regelmatige vormen zijn twee: mā afʿalahu en afʿil bihi. Het werkwoord moet aan zeven voorwaarden voldoen; ontbreekt er een, dan gebruikt men een maṣdar met een hulpwerkwoord.'
  ],
  map: {
    title: ['التعجب في خريطة واحدة', 'Taʿajjub in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['التعجب', 'Taʿajjub'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['الصيغ السماعية', 'Overgeleverde vormen'], sub: ['ص ١٠', 'p. 10'], page: 10, children: [['سبحان الله', 'subḥān Allāh'], ['الاستفهام', 'de vraag'], ['يا لجمال الزهر', 'yā la-jamāli z-zahr'], ['لله دره', 'lillāhi darruhu']] },
      { label: ['ما أفعله', 'Mā afʿalahu'], sub: ['ص ١٠–١١', 'p. 10–11'], page: 10, children: [['ما التعجبية', 'mā van verwondering'], ['فعل التعجب', 'het werkwoord'], ['المتعجب منه', 'het object van verwondering']] },
      { label: ['أفعل به', 'Afʿil bihi'], sub: ['ص ١١–١٢', 'p. 11–12'], page: 11, children: [['الباء الزائدة', 'de overbodige bāʾ'], ['فاعل مجرور لفظا', 'fāʿil, in vorm genitief']] },
      { label: ['الشروط', 'Voorwaarden'], sub: ['ص ١٢–١٣', 'p. 12–13'], page: 12, children: [['سبعة شروط', 'zeven voorwaarden'], ['المصدر مع فعل مساعد', 'maṣdar met hulpwerkwoord']] }
    ]
  },
  points: [
    [10, 'من الصيغ السماعية: سبحان الله، والاستفهام: ﴿كيف تكفرون بالله وكنتم أمواتا فأحياكم﴾ [البقرة: 28]، ويا لجمال الزهر، ولله دره فارسا.', 'Overgeleverde vormen: subḥān Allāh, de vraag (2:28), "yā la-jamāli z-zahr" en "lillāhi darruhu fārisan".'],
    [10, 'من أمثلة ما أفعله: ما أجمل السماء! ما أشد البرد! ﴿فما أصبرهم على النار﴾ [البقرة: 175].', 'Voorbeelden van mā afʿalahu: "hoe mooi is de hemel!", "hoe streng is de kou!", "hoe geduldig zijn zij tegenover het Vuur!" (2:175).'],
    [11, 'ما التعجبية نكرة بمعنى شيء، في محل رفع مبتدأ، والجملة بعدها خبر.', 'Mā van verwondering is onbepaald ("iets"), staat op de plaats van een nominatief als mubtadaʾ; de zin erna is de khabar.'],
    [11, 'فعل التعجب فعل ماض جامد لا يتصرف، والمتعجب منه بعده منصوب دائما.', 'Het werkwoord van verwondering is een star perfectum; het object erna staat altijd in de accusatief.'],
    [11, 'في أفعل به: الفعل ماض جاء على صيغة الأمر، والباء حرف جر زائد، والمتعجب منه فاعل مجرور لفظا مرفوع محلا.', 'In afʿil bihi: een perfectum in de vorm van een gebiedende wijs; de bāʾ is overbodig; het object is fāʿil, in vorm genitief en qua plaats nominatief.'],
    [12, 'إذا فقد شرط من الشروط جيء بمصدر صريح أو مؤول مع فعل مساعد كأكثر وأشد وأجمل وأقبح وأعظم.', 'Ontbreekt een voorwaarde, dan gebruikt men een expliciete of geïnterpreteerde maṣdar met een hulpwerkwoord zoals akthar, ashadd, ajmal, aqbaḥ of aʿẓam.'],
    [13, 'من أمثلة ذلك: ما أحسن انتفاع الطالب بوقته! وما أعظم أن يقال الحق! وما أجمل ألا ينسى الرجل وطنه!', 'Voorbeelden: "hoe goed benut de student zijn tijd!", "hoe groots is het dat de waarheid gezegd wordt!", "hoe mooi dat een man zijn land niet vergeet!"'],
    [13, 'لا يتعجب مطلقا من فعل لا يقبل التفاوت ولا من فعل جامد.', 'Van een werkwoord zonder gradatie of een star werkwoord vormt men nooit een uitroep van verwondering.']
  ],
  terms: [
    ['التعجب', 'at-taʿajjub', 10, 'أسلوب يدل على الدهشة والاستغراب.', 'Een stijl die verbazing en verwondering uitdrukt.'],
    ['المتعجب منه', 'al-mutaʿajjab minhu', 11, 'الاسم الذي يتعجب منه بعد فعل التعجب.', 'Het nomen waarover men zich verwondert, na het werkwoord.'],
    ['الفعل الجامد', 'al-fiʿl al-jāmid', 12, 'الفعل الذي لا يتصرف، كنعم وبئس وليس وعسى.', 'Een onvervoegbaar werkwoord, zoals niʿma, biʾsa, laysa en ʿasā.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['إعراب صيغتي التعجب', 'Analyse van de twee vormen'],
      intro: ['كما في الصفحتين ١١–١٢.', 'Zoals op p. 11–12.'],
      columns: [['ما أشد البرد!', 'Mā ashadda l-bard!'], ['أجمل بالسماء!', 'Ajmil bi-s-samāʾ!']],
      rows: [
        { label: ['الأول', 'Eerste woord'], cells: [['ما: تعجبية في محل رفع مبتدأ', 'mā: van verwondering, plaats nominatief, mubtadaʾ'], ['أجمل: فعل ماض مبني على السكون جاء على صيغة الأمر', 'ajmil: perfectum op sukūn, in de vorm van een gebiedende wijs']] },
        { label: ['الثاني', 'Tweede woord'], cells: [['أشد: فعل ماض مبني على الفتح، والفاعل مستتر، والجملة خبر', 'ashadda: perfectum op fatḥa, verborgen fāʿil, de zin is khabar'], ['الباء: حرف جر زائد', 'bi: overbodig voorzetsel']] },
        { label: ['المتعجب منه', 'Object'], cells: [['البرد: مفعول به منصوب', 'al-bard: lijdend voorwerp, accusatief'], ['السماء: فاعل مجرور لفظا مرفوع محلا', 'as-samāʾ: fāʿil, in vorm genitief, qua plaats nominatief']] }
      ],
      page: 11
    },
    {
      type: 'cards',
      title: ['شروط فعل التعجب', 'Voorwaarden voor het werkwoord'],
      intro: ['كما في الصفحة ١٢.', 'Zoals op p. 12.'],
      nodes: [
        [12, 'ثلاثي', 'Drieletterig', 'حسن، طاب، كفر', 'ḥasuna, ṭāba, kafara'],
        [12, 'مثبت غير منفي', 'Bevestigd', 'لا من: لا ينسى، لم يفعل', 'niet van: lā yansā, lam yafʿal'],
        [12, 'تام غير ناقص', 'Volledig', 'لا من: كان وكاد', 'niet van: kāna en kāda'],
        [12, 'مبني للمعلوم', 'Actief', 'لا من: يقال، يؤكل', 'niet van: yuqālu, yuʾkalu'],
        [12, 'متصرف غير جامد', 'Vervoegbaar', 'لا من: نعم، بئس، ليس، عسى', 'niet van: niʿma, biʾsa, laysa, ʿasā'],
        [12, 'قابل للتفاوت', 'Gradatie toelatend', 'لا من: مات، عاش، فني، غرق', 'niet van: māta, ʿāsha, faniya, ghariqa'],
        [12, 'ليس الوصف منه على أفعل فعلاء', 'Geen bijvoeglijk naamwoord op afʿal/faʿlāʾ', 'لا من: عرج، عور، حمر', 'niet van: ʿarija, ʿawira, ḥamira']
      ]
    }
  ],
  sections: [],
  keycards: [
    ['opsomming', 10, 'صيغ التعجب', 'Vormen van taʿajjub', ['سماعية: سبحان الله، الاستفهام، النداء التعجبي، لله دره', 'قياسية: ما أفعله، أفعل به'], ['overgeleverd: subḥān Allāh, de vraag, de verwonderende vocatief, lillāhi darruhu', 'regelmatig: mā afʿalahu, afʿil bihi']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['التعجب أسلوب يدل على الدهشة.', 'Taʿajjub drukt verbazing uit.'],
    ['صيغتاه القياسيتان: ما أفعله وأفعل به.', 'De twee regelmatige vormen: mā afʿalahu en afʿil bihi.'],
    ['لفعل التعجب سبعة شروط.', 'Het werkwoord moet aan zeven voorwaarden voldoen.'],
    ['إذا فقد شرط جيء بالمصدر مع فعل مساعد.', 'Ontbreekt een voorwaarde, dan een maṣdar met een hulpwerkwoord.']
  ],
  quiz: [
    { type: 'mc', page: 11, q: ['ما إعراب «البرد» في: ما أشد البرد!؟', 'Wat is de analyse van al-bard in "mā ashadda l-bard!"?'], options: [['مفعول به منصوب', 'فاعل مرفوع', 'مبتدأ مرفوع', 'خبر مرفوع'], ['lijdend voorwerp, accusatief', 'fāʿil, nominatief', 'mubtadaʾ, nominatief', 'khabar, nominatief']], answer: 0, explain: ['المتعجب منه بعد ما أفعله منصوب دائما.', 'Het object na mā afʿalahu staat altijd in de accusatief.'] },
    { type: 'tf', page: 12, q: ['يجوز أن يقال: ما أعرجه!', 'Men mag zeggen: mā aʿrajahu!'], answer: 1, explain: ['لأن الوصف منه على أفعل الذي مؤنثه فعلاء.', 'Want het bijvoeglijk naamwoord is op afʿal met vrouwelijk faʿlāʾ.'] },
    { type: 'mc', page: 12, q: ['ما إعراب «السماء» في: أجمل بالسماء!؟', 'Wat is de analyse van as-samāʾ in "ajmil bi-s-samāʾ!"?'], options: [['فاعل مجرور لفظا مرفوع محلا', 'مفعول به منصوب', 'اسم مجرور فقط', 'مبتدأ'], ['fāʿil, in vorm genitief, qua plaats nominatief', 'lijdend voorwerp', 'alleen een genitief', 'mubtadaʾ']], answer: 0, explain: ['لأن الباء حرف جر زائد.', 'Want de bāʾ is een overbodig voorzetsel.'] },
    { type: 'mc', page: 13, q: ['كيف تتعجب من «يقال الحق»؟', 'Hoe vorm je een uitroep van "de waarheid wordt gezegd"?'], options: [['ما أعظم أن يقال الحق!', 'ما أقول الحق!', 'أقول بالحق!', 'لا يتعجب منه'], ['mā aʿẓama an yuqāla l-ḥaqq!', 'mā aqwala l-ḥaqq!', 'aqwil bi-l-ḥaqq!', 'dat kan niet']], answer: 0, explain: ['المبني للمجهول يتعجب منه بالمصدر المؤول مع فعل مساعد.', 'Bij een passief werkwoord gebruikt men een geïnterpreteerde maṣdar met een hulpwerkwoord.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ١٤.', 'Oefening van het boek op p. 14. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
