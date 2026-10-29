// Hoofdstukkaart bij اللغة العربية (٤), eenheid 6: إعراب الفعل المضارع (lessen 17–22, boek p. 59–69).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-arabic/leesnotities.md);
// voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-arabic',
  chapter: '17',
  unit: 6,
  source: {
    label: ['كتاب اللغة العربية (٤)، سلسلة زاد العلمية', 'Arabische taal (4), Zad-reeks'],
    pages: '59–69',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['إعراب الفعل المضارع', 'De verbuiging van het imperfectum'],
  subtitle: ['ستة دروس', 'Zes lessen'],
  summary: [
    'الأصل في الأفعال البناء، فالماضي والأمر مبنيان دائما، والمضارع يبنى على السكون مع نون النسوة وعلى الفتح مع نون التوكيد المباشرة، ويعرب فيما سوى ذلك. فيرفع إذا لم يسبقه ناصب ولا جازم، وينصب بأن ولن وكي وحتى ولام التعليل ولام الجحود وفاء السببية وأو، ويجزم بلم ولما ولام الأمر ولا الناهية وبأدوات الشرط وفي جواب الطلب.',
    'Werkwoorden zijn in beginsel gebouwd: perfectum en gebiedende wijs altijd; het imperfectum is gebouwd op sukūn met nūn an-niswa en op fatḥa met een directe nūn at-tawkīd, en verder verbogen. Het staat in de nominatief zonder accusatief- of jussiefpartikel; in de accusatief na an, lan, kay, ḥattā, lām at-taʿlīl, lām al-juḥūd, fāʾ as-sababiyya en aw; in de jussief na lam, lammā, lām al-amr, lā an-nāhiya, conditionele partikels en als antwoord op een verzoek.'
  ],
  map: {
    title: ['إعراب المضارع في خريطة واحدة', 'Het imperfectum in één kaart'],
    intro: ['كما في الدروس الستة.', 'Zoals in de zes lessen.'],
    root: [['إعراب الفعل المضارع', 'Verbuiging van het imperfectum'], ['الوحدة السادسة', 'Eenheid 6']],
    nodes: [
      { label: ['بناؤه', 'Gebouwd'], sub: ['ص ٦٠', 'p. 60'], page: 60, children: [['على السكون مع نون النسوة', 'op sukūn met nūn an-niswa'], ['على الفتح مع نون التوكيد', 'op fatḥa met nūn at-tawkīd']] },
      { label: ['رفعه', 'Nominatief'], sub: ['ص ٦١', 'p. 61'], page: 61, children: [['الضمة الظاهرة', 'zichtbare ḍamma'], ['الضمة المقدرة', 'veronderstelde ḍamma'], ['ثبوت النون', 'behoud van de nūn']] },
      { label: ['نصبه', 'Accusatief'], sub: ['ص ٦٢–٦٤', 'p. 62–64'], page: 62, children: [['أن، لن، كي، حتى', 'an, lan, kay, ḥattā'], ['لام التعليل والجحود', 'lām van reden en ontkenning'], ['فاء السببية وأو', 'fāʾ van oorzaak en aw']] },
      { label: ['جزمه', 'Jussief'], sub: ['ص ٦٦–٦٨', 'p. 66–68'], page: 66, children: [['لم، لما', 'lam, lammā'], ['لام الأمر، لا الناهية', 'lām al-amr, lā an-nāhiya'], ['السكون وحذف النون والعلة', 'sukūn, wegvallen van nūn of zwakke letter']] }
    ]
  },
  points: [
    [60, 'المضارع ما دل على حدث يقع في زمن التكلم أو بعده.', 'Het imperfectum duidt een gebeuren aan dat tijdens of na het spreken plaatsvindt.'],
    [60, '﴿يأكلن ما قدمتم﴾ [يوسف: 48]: يأكلن مضارع مبني على السكون لاتصاله بنون النسوة، والنون في محل رفع فاعل.', '"Zij eten wat jullie hebben voorbereid" (12:48): yaʾkulna is gebouwd op sukūn door de nūn an-niswa, die fāʿil is.'],
    [60, '﴿ليسجنن﴾ [يوسف: 32]: مضارع مبني على الفتح لاتصاله بنون التوكيد الثقيلة، والنون حرف لا محل له.', '"Hij zal zeker gevangengezet worden" (12:32): gebouwd op fatḥa door de zware nūn at-tawkīd, een partikel zonder plaats in de iʿrāb.'],
    [61, 'يرفع المضارع إذا لم يسبقه ناصب ولا جازم، بالضمة الظاهرة أو المقدرة أو بثبوت النون في الأفعال الخمسة.', 'Het imperfectum staat in de nominatief zonder voorafgaand partikel: met zichtbare of veronderstelde ḍamma, of met behoud van de nūn bij de vijf werkwoorden.'],
    [63, 'لام الجحود حرف نصب يؤكد النفي، ولا تأتي إلا بعد كان المنفية: ﴿وما كان الله ليعذبهم وأنت فيهم﴾ [الأنفال: 33].', 'Lām al-juḥūd versterkt de ontkenning en komt alleen na een ontkend kāna: "Allah zou hen niet bestraffen terwijl jij onder hen bent" (8:33).'],
    [63, 'فاء السببية ما قبلها سبب لما بعدها: ﴿ولا تنازعوا فتفشلوا وتذهب ريحكم﴾ [الأنفال: 46]، وأو تنصب إذا كانت بمعنى إلى أن.', 'Fāʾ as-sababiyya: wat ervoor staat is oorzaak van wat erna komt (8:46); aw maakt accusatief als het "totdat" betekent.'],
    [64, 'ينصب المضارع بالفتحة الظاهرة أو المقدرة على الألف، أو بحذف النون: ﴿ولن تستطيعوا أن تعدلوا بين النساء﴾ [النساء: 129].', 'Accusatief met zichtbare fatḥa of veronderstelde fatḥa op een alif, of door wegvallen van de nūn: "jullie zullen niet rechtvaardig kunnen zijn tussen de vrouwen" (4:129).'],
    [67, 'يجزم المضارع بالسكون، أو بحذف النون في الأفعال الخمسة، أو بحذف حرف العلة: لا تسع بين الناس بالنميمة.', 'Jussief met sukūn, door wegvallen van de nūn bij de vijf werkwoorden, of van de zwakke letter: "lā tasʿa bayna n-nāsi bi-n-namīma".']
  ],
  terms: [
    ['الأفعال الخمسة', 'al-afʿāl al-khamsa', 61, 'كل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة.', 'Elk imperfectum met de alif van de dualis, de wāw van het meervoud of de yāʾ van de vrouwelijke aangesprokene.'],
    ['لام الجحود', 'lām al-juḥūd', 63, 'لام تنصب المضارع وتؤكد النفي بعد كان المنفية.', 'Lām die het imperfectum accusatief maakt en de ontkenning versterkt na een ontkend kāna.'],
    ['فاء السببية', 'fāʾ as-sababiyya', 63, 'فاء يكون ما قبلها سببا لما بعدها.', 'Fāʾ waarbij wat ervoor staat de oorzaak is van wat erna komt.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['علامات إعراب المضارع', 'Tekens van het imperfectum'],
      intro: ['كما في الصفحات ٦١ و٦٤ و٦٧.', 'Zoals op p. 61, 64 en 67.'],
      columns: [['الرفع', 'Nominatief'], ['النصب', 'Accusatief'], ['الجزم', 'Jussief']],
      rows: [
        { label: ['صحيح الآخر', 'Gezonde laatste letter'], cells: [['الضمة الظاهرة: يذاكر', 'zichtbare ḍamma: yudhākiru'], ['الفتحة الظاهرة: لن أقول', 'zichtbare fatḥa: lan aqūla'], ['السكون: لا تأخذ', 'sukūn: lā taʾkhudh']] },
        { label: ['معتل الآخر', 'Zwakke laatste letter'], cells: [['الضمة المقدرة: يسعى، يدعو', 'veronderstelde ḍamma: yasʿā, yadʿū'], ['الفتحة الظاهرة على الواو والياء والمقدرة على الألف', 'zichtbare fatḥa op wāw/yāʾ, veronderstelde op alif'], ['حذف حرف العلة: لا تسع، لم يأت', 'wegvallen van de zwakke letter: lā tasʿa, lam yaʾti']] },
        { label: ['الأفعال الخمسة', 'De vijf werkwoorden'], cells: [['ثبوت النون: يحافظون', 'behoud van nūn: yuḥāfiẓūna'], ['حذف النون: أن تعفوا', 'wegvallen van nūn: an taʿfū'], ['حذف النون: لم يصروا', 'wegvallen van nūn: lam yuṣirrū']] }
      ],
      page: 61
    },
    {
      type: 'cards',
      title: ['نواصب المضارع', 'Accusatiefpartikels'],
      intro: ['كما في الصفحتين ٦٢–٦٣.', 'Zoals op p. 62–63.'],
      nodes: [
        [62, 'أن المصدرية', 'An (maṣdar)', 'أحب أن تصلي في المسجد', 'ik wil graag dat je in de moskee bidt'],
        [62, 'لن', 'Lan', 'لن أبتدع في دين الله', 'ik zal nooit iets nieuws in Allahs religie invoeren'],
        [62, 'كي', 'Kay', 'اجتهد كي تنجح', 'doe je best om te slagen'],
        [62, 'حتى', 'Ḥattā', 'اجتهد حتى تبلغ الدرجات العلى', 'doe je best tot je de hoogste rangen bereikt'],
        [63, 'لام التعليل', 'Lām van reden', 'أعمل لأعيش بالحلال', 'ik werk om van het toegestane te leven'],
        [63, 'لام الجحود', 'Lām van ontkenning', '﴿لم يكن الله ليغفر لهم﴾', '"Allah zou hun niet vergeven" (4:137)'],
        [63, 'فاء السببية', 'Fāʾ van oorzaak', 'اجتهدوا في الدراسة فتنجحوا', 'doe je best met studeren, dan slaag je'],
        [63, 'أو بمعنى إلى أن', 'Aw (totdat)', 'لأظل أطالب أو أنال حقي', 'ik blijf eisen totdat ik mijn recht krijg']
      ]
    }
  ],
  sections: [
    [66, 'جوازم المضارع لفعل واحد', 'Jussiefpartikels voor één werkwoord', 'لم: ﴿ومن لم يطعمه فإنه مني﴾ [البقرة: 249]، لما: ﴿ولما يعلم الله الذين جاهدوا منكم﴾ [التوبة: 16]، لام الأمر: ﴿ثم ليقضوا تفثهم وليوفوا نذورهم﴾ [الحج: 29]، لا الناهية: ﴿ولا تخافي ولا تحزني﴾ [القصص: 7].', 'Lam (2:249), lammā (9:16), lām al-amr (22:29) en lā an-nāhiya (28:7).'],
    [67, 'نماذج إعرابية في الجزم', 'Analysevoorbeelden bij de jussief', 'لا تكثر من الضحك: لا حرف نهي وجزم، تكثر مضارع مجزوم بالسكون. غامت السماء ولما تمطر: لما حرف نفي وجزم. ليسع المسلم في الإصلاح: اللام لام الأمر، يسع مجزوم بحذف حرف العلة.', '"Lā tukthir mina ḍ-ḍaḥik": lā is een partikel van verbod en jussief; tukthir jussief met sukūn. "Ghāmat as-samāʾu wa-lammā tumṭir": lammā is ontkenning en jussief. "Li-yasʿa l-muslimu": lām al-amr; yasʿa jussief door wegvallen van de zwakke letter.']
  ],
  keycards: [
    ['opsomming', 62, 'نواصب المضارع', 'Accusatiefpartikels', ['أن المصدرية', 'لن', 'كي', 'حتى', 'لام التعليل', 'لام الجحود', 'فاء السببية', 'أو بمعنى إلى أن'], ['an', 'lan', 'kay', 'ḥattā', 'lām van reden', 'lām van ontkenning', 'fāʾ van oorzaak', 'aw (totdat)']],
    ['opsomming', 66, 'مواضع جزم المضارع', 'Wanneer het imperfectum jussief is', ['بعد لم ولما ولام الأمر ولا الناهية', 'بعد أدوات الشرط الجازمة لفعلين', 'في جواب الطلب'], ['na lam, lammā, lām al-amr en lā an-nāhiya', 'na conditionele partikels voor twee werkwoorden', 'als antwoord op een verzoek']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['المضارع يبنى مع نون النسوة ونون التوكيد المباشرة.', 'Het imperfectum is gebouwd met nūn an-niswa en een directe nūn at-tawkīd.'],
    ['يرفع إذا لم يسبقه ناصب ولا جازم.', 'Het staat in de nominatief zonder voorafgaand partikel.'],
    ['نواصبه ثمانية.', 'Er zijn acht accusatiefpartikels.'],
    ['يجزم بالسكون أو حذف النون أو حذف حرف العلة.', 'Jussief met sukūn, wegvallen van de nūn of van de zwakke letter.']
  ],
  quiz: [
    { type: 'mc', page: 63, q: ['ما نوع اللام في ﴿ما كان الله ليذر المؤمنين﴾؟', 'Welke lām staat in "Allah zou de gelovigen niet laten" (3:179)?'], options: [['لام الجحود', 'لام التعليل', 'لام الأمر', 'لام الابتداء'], ['lām al-juḥūd', 'lām at-taʿlīl', 'lām al-amr', 'lām al-ibtidāʾ']], answer: 0, explain: ['لأنها جاءت بعد كان المنفية.', 'Want zij komt na een ontkend kāna.'] },
    { type: 'tf', page: 60, q: ['الفعل المضارع المتصل بنون النسوة معرب.', 'Een imperfectum met nūn an-niswa is verbogen.'], answer: 1, explain: ['هو مبني على السكون.', 'Het is gebouwd op sukūn.'] },
    { type: 'mc', page: 67, q: ['ما علامة جزم «تسع» في: لا تسع بين الناس بالنميمة؟', 'Wat is het jussiefteken van tasʿa in "lā tasʿa bayna n-nās bi-n-namīma"?'], options: [['حذف حرف العلة', 'السكون', 'حذف النون', 'الفتحة'], ['wegvallen van de zwakke letter', 'sukūn', 'wegvallen van de nūn', 'fatḥa']], answer: 0, explain: ['لأنه معتل الآخر.', 'Want de laatste letter is zwak.'] },
    { type: 'mc', page: 64, q: ['ما علامة نصب «تعفوا» في ﴿وأن تعفوا أقرب للتقوى﴾؟', 'Wat is het accusatiefteken van taʿfū in "en dat jullie kwijtschelden is dichter bij godsvrucht" (2:237)?'], options: [['حذف النون', 'الفتحة الظاهرة', 'الفتحة المقدرة', 'السكون'], ['wegvallen van de nūn', 'zichtbare fatḥa', 'veronderstelde fatḥa', 'sukūn']], answer: 0, explain: ['لأنه من الأفعال الخمسة.', 'Want het hoort bij de vijf werkwoorden.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٦٥ و٦٩.', 'Oefeningen van het boek op p. 65 en 69. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
