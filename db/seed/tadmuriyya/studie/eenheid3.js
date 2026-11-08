// Hoofdstukkaart van الرسالة التدمرية, eenheid 3: de twee voorbeelden (المثلان), het Paradijs en de ziel,
// blz. 16–20 van de scan.
import { kaart } from './kaart.js'

export default kaart({
  unit: 3,
  subtitle: ['المثل الأول: نعيم الجنة يوافق ما في الدنيا في الأسماء دون الحقائق؛ المثل الثاني: الروح موصوفة بصفات ولا تدرك كيفيتها', 'Voorbeeld 1: het Paradijs deelt alleen de namen met deze wereld; voorbeeld 2: de ziel heeft eigenschappen waarvan we het hoe niet kennen'],
  summary: [
    'ضرب المؤلف مثلين يقربان منهج السلف: الأول ما أخبر الله به من نعيم الجنة من لبن وعسل وخمر وحرير وذهب وقصور، وقد قال ابن عباس: ليس في الدنيا مما في الجنة إلا الأسماء؛ فإذا كانت المخلوقات المتفقة في الأسماء متباينة في الحقائق، فمباينة الخالق للمخلوق أعظم. وافترق الناس هنا ثلاث فرق: السلف آمنوا بالأمرين، والمعتزلة أثبتوا المعاد ونفوا كثيرا من الصفات، والباطنية والفلاسفة نفوا الأمرين، بل تأولوا الشرائع. ثم قرر أن الله لا يدخل مع خلقه في قياس تمثيل ولا شمول، بل له قياس الأولى. والمثل الثاني الروح: موصوفة بصفات ثبوتية وسلبية، تعرج وتقبض، والعقول عاجزة عن تكييفها، فالخالق أولى بذلك.',
    'Twee voorbeelden maken de weg van de salaf duidelijk. Eén: wat Allah over het Paradijs vertelt (melk, honing, wijn, zijde, goud, paleizen). Ibn ʿAbbās zei: van wat in het Paradijs is, bestaat in deze wereld alleen de naam. Als geschapen dingen met dezelfde naam in werkelijkheid zo verschillen, dan verschilt de Schepper nog veel meer van de schepping. Hier splitsen de mensen zich in drie: de salaf geloven beide; de Muʿtazila aanvaarden het hiernamaals maar ontkennen veel eigenschappen; de Bāṭiniyya en filosofen ontkennen beide en herinterpreteren zelfs de sharīʿa. Allah valt niet onder een vergelijking of een gelijk-makende regel met Zijn schepping; voor Hem geldt "het hoogste voorbeeld": wat bij schepselen volmaakt is, komt Hem eerder toe. Twee: de ziel. Ze heeft bevestigde en ontkende eigenschappen, stijgt op en wordt genomen, en het verstand kan haar hoe niet vatten. Dan geldt dat des te meer voor de Schepper.'
  ],
  map: {
    type: 'mindmap',
    title: ['المثلان في خريطة واحدة', 'De twee voorbeelden in één kaart'],
    intro: ['من الصفحة 17 إلى 20.', 'Van bladzijde 17 tot 20.'],
    root: [17, 'المثلان المضروبان', 'De twee voorbeelden', 'ولله المثل الأعلى', 'en aan Allah komt het hoogste voorbeeld toe'],
    nodes: [
      [17, 'المثل الأول: الجنة', 'Voorbeeld 1: het Paradijs', 'ص 17–18', 'p. 17–18', [['ليس في الدنيا مما في الجنة إلا الأسماء', 'alleen de namen zijn gelijk'], ['مباينة الخالق أعظم', 'het verschil met de Schepper is groter']]],
      [17, 'ثلاث فرق', 'Drie groepen', 'ص 17', 'p. 17', [['السلف: آمنوا بالأمرين', 'salaf: geloven beide'], ['المعتزلة: المعاد دون كثير من الصفات', 'Muʿtazila: het hiernamaals, niet veel eigenschappen'], ['الباطنية والفلاسفة: نفوا الأمرين', 'Bāṭiniyya en filosofen: ontkennen beide']]],
      [18, 'قياس الأولى', 'Het "hoogste voorbeeld"', 'ص 18', 'p. 18', [['لا قياس تمثيل', 'geen analogie'], ['ولا قياس شمول تستوي أفراده', 'geen regel die allen gelijk maakt'], ['كل كمال للمخلوق فالخالق أولى به', 'elke volmaaktheid komt Hem eerder toe']]],
      [18, 'المثل الثاني: الروح', 'Voorbeeld 2: de ziel', 'ص 18–20', 'p. 18–20', [['تعرج وتقبض وتسل', 'stijgt op, wordt genomen, wordt eruit getrokken'], ['اضطراب المتكلمين والفلاسفة فيها', 'verwarring van theologen en filosofen'], ['لفظ الجسم يحتاج إلى تفصيل', 'het woord "lichaam" vraagt onderscheid']]]
    ]
  },
  points: [
    [17, 'أخبرنا الله أن في الجنة لبنا وعسلا وخمرا وماء ولحما وفاكهة وحريرا وذهبا وفضة وحورا وقصورا.', 'Allah vertelt dat er in het Paradijs melk, honing, wijn, water, vlees, fruit, zijde, goud, zilver, ḥūr en paleizen zijn.'],
    [17, 'قال ابن عباس: ليس في الدنيا شيء مما في الجنة إلا الأسماء.', 'Ibn ʿAbbās: niets in deze wereld is als wat in het Paradijs is, behalve de namen.'],
    [17, 'إذا تباينت المخلوقات المتفقة في الأسماء، فالخالق أعظم مباينة للمخلوقات من مباينة المخلوق للمخلوق.', 'Als schepselen met dezelfde naam zo verschillen, verschilt de Schepper nog veel meer van de schepselen.'],
    [18, 'الباطنية تأولوا الشرائع: الصلاة معرفة أسرارهم، والصيام كتمانها، والحج السفر إلى شيوخهم؛ وأجمع المسلمون على أنهم أكفر من اليهود والنصارى.', 'De Bāṭiniyya herinterpreteerden de sharīʿa: gebed = hun geheimen kennen, vasten = ze verzwijgen, ḥajj = reizen naar hun shaykhs. De moslims zijn het erover eens dat zij ongeloviger zijn dan joden en christenen.'],
    [18, 'لا يدخل الله مع خلقه في قياس تمثيل ولا قياس شمول تستوي أفراده، وإنما يستعمل في حقه قياس الأولى.', 'Allah valt met Zijn schepselen niet onder een analogie of een regel die alle gevallen gelijkstelt; voor Hem geldt alleen "des te meer".'],
    [18, 'الروح وصفت بصفات ثبوتية وسلبية، وأخبرت النصوص أنها تعرج من سماء إلى سماء، وتقبض من البدن وتسل منه.', 'De ziel heeft bevestigde en ontkende eigenschappen; de teksten zeggen dat ze van hemel tot hemel opstijgt en uit het lichaam genomen en eruit getrokken wordt.'],
    [19, 'سبب الاضطراب في الروح أنها من جنس آخر غير البدن والعناصر، فعرفها قوم بالسلوب وجعلها آخرون من جنس الأجسام المشهودة، وكلاهما خطأ.', 'De verwarring over de ziel komt doordat ze van een andere soort is dan het lichaam en de elementen; sommigen kennen haar alleen via ontkenningen, anderen maken haar tot een gewoon lichaam; beide is fout.'],
    [20, 'الشيء إنما تدرك حقيقته بمشاهدته أو مشاهدة نظيره، فإذا عجزت العقول عن تكييف الروح فهي عن تكييف الخالق أعجز.', 'Iets ken je pas echt als je het of iets gelijks ziet. Kan het verstand het hoe van de ziel niet vatten, dan nog veel minder dat van de Schepper.']
  ],
  terms: [
    ['المثل الأعلى', 'al-mathal al-aʿlā', 18, 'أن كل كمال اتصف به المخلوق فالخالق أولى به، وكل نقص تنزه عنه المخلوق فالخالق أولى بالتنزه عنه.', 'Het hoogste voorbeeld: elke volmaaktheid van een schepsel komt de Schepper eerder toe, en van elk gebrek waar een schepsel vrij van is, is de Schepper des te meer vrij.'],
    ['قياس التمثيل', 'qiyās at-tamthīl', 18, 'إلحاق شيء بشيء لمماثلته له في الحكم.', 'Analogie: iets gelijkstellen aan iets anders omdat het erop lijkt.', 'ولا يجوز أن يشترك فيه الله وخلقه.', 'Allah en Zijn schepselen mogen daarin niet samen vallen.'],
    ['قياس الشمول', 'qiyās ash-shumūl', 18, 'قضية كلية تدخل تحتها أفراد تستوي فيها.', 'Een algemene regel waaronder gevallen vallen die er gelijk in zijn (syllogisme).', 'ولا يدخل الله مع خلقه في قياس تستوي أفراده.', 'Allah valt niet met schepselen onder één regel waarin ze gelijk zijn.'],
    ['قياس الأولى', 'qiyās al-awlā', 18, 'هو المثل الأعلى: ما ثبت للمخلوق من كمال فالخالق أحق به.', 'Het "des te meer": wat aan volmaaktheid voor een schepsel vaststaat, komt de Schepper meer toe.'],
    ['المباينة', 'al-mubāyana', 17, 'المفارقة والاختلاف في الحقيقة.', 'Verschil en gescheidenheid in werkelijkheid.'],
    ['النفس الناطقة', 'an-nafs an-nāṭiqa', 19, 'اسم الروح عند الفلاسفة.', 'De redelijke ziel: de naam van de ziel bij de filosofen.'],
    ['الجسم عند أهل اللغة', 'al-jism (taal)', 19, 'الجسد والبدن؛ وبهذا الاعتبار فالروح ليست جسما.', 'Lichaam in de taal: het lijf; in die zin is de ziel geen lichaam.', '﴿وإذا رأيتهم تعجبك أجسامهم﴾، ﴿وزاده بسطة في العلم والجسم﴾.', '"Als je hen ziet, bevallen hun lichamen je", "en Hij gaf hem meer kennis en lichaam".'],
    ['الجسم عند أهل الكلام', 'al-jism (kalām)', 19, 'أقوال: الموجود، أو القائم بنفسه، أو المركب من الجواهر المنفردة، أو من المادة والصورة، أو ما يشار إليه.', 'Lichaam bij theologen: wat bestaat; of wat op zichzelf staat; of wat uit atomen bestaat; of uit materie en vorm; of waar je naar kunt wijzen.'],
    ['الجوهر الفرد', 'al-jawhar al-fard', 19, 'الجزء الذي لا يتجزأ عند المتكلمين.', 'Het ondeelbare deeltje (atoom) bij de theologen.'],
    ['المادة والصورة', 'al-mādda wa-ṣ-ṣūra', 20, 'عند الفلاسفة: الجسم مركب من هيولى (مادة) وصورة.', 'Bij de filosofen: een lichaam bestaat uit materie en vorm.'],
    ['الإشارة الحسية', 'al-ishāra al-ḥissiyya', 19, 'الإشارة إلى الشيء بأنه هنا أو هناك.', 'Zintuiglijk aanwijzen: zeggen dat iets hier of daar is.'],
    ['الكليات', 'al-kulliyyāt', 19, 'المعاني العامة، ولا توجد كلية إلا في الأذهان.', 'Algemene begrippen; als algemeen bestaan ze alleen in het hoofd.'],
    ['المبدأ والمعاد', 'al-mabdaʾ wa-l-maʿād', 19, 'أصل الخلق والرجوع إلى الله في الآخرة.', 'Het begin van de schepping en de terugkeer in het hiernamaals.'],
    ['الباطنية', 'al-bāṭiniyya', 17, 'من يجعلون للنصوص والشرائع تأويلات باطنة تخالف ما يعرفه المسلمون.', 'Wie de teksten en de sharīʿa een verborgen betekenis geeft die ingaat tegen wat moslims kennen.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['ثلاث فرق فيما أخبر الله به عن نفسه وعن اليوم الآخر', 'Drie groepen: over Allah en over het hiernamaals'],
      intro: ['ص 17', 'p. 17'],
      columns: [['الصفات', 'Eigenschappen'], ['اليوم الآخر', 'Hiernamaals']],
      rows: [
        { label: ['السلف والأئمة وأتباعهم', 'Salaf, imams en volgelingen'], cells: [['آمنوا بها مع علمهم أن مباينة الله لخلقه أعظم', 'geloven erin, wetend dat Allah nog meer van Zijn schepping verschilt'], ['آمنوا به مع علمهم بالمباينة بين الدنيا والآخرة', 'geloven erin, wetend dat het van deze wereld verschilt']] },
        { label: ['المعتزلة ومن وافقهم', 'Muʿtazila en wie hen volgt'], cells: [['نفوا كثيرا منها', 'ontkennen veel ervan'], ['أثبتوا الثواب والعقاب', 'aanvaarden beloning en straf']] },
        { label: ['القرامطة الباطنية والفلاسفة المشاؤون', 'Qarāmiṭa-Bāṭiniyya en peripatetici'], cells: [['نفوها', 'ontkennen ze'], ['نفوا حقائقه', 'ontkennen de werkelijkheid ervan']] }
      ],
      page: 17
    },
    {
      type: 'flow',
      title: ['استدلال المثل الأول', 'De redenering van voorbeeld 1'],
      intro: ['ص 17', 'p. 17'],
      nodes: [
        [17, 'ما في الجنة يوافق ما في الدنيا في الأسماء', 'Wat in het Paradijs is, heeft dezelfde namen als hier', 'لبن، عسل، خمر، حرير...', 'melk, honing, wijn, zijde...'],
        [17, 'وبينهما من التباين ما لا يعلمه إلا الله', 'Maar het verschil kent alleen Allah', 'ليس في الدنيا مما في الجنة إلا الأسماء', 'alleen de namen zijn van hier'],
        [17, 'والمخلوق أقرب إلى المخلوق من الخالق إلى المخلوق', 'Een schepsel staat dichter bij een schepsel dan de Schepper bij een schepsel', ''],
        [17, 'إذن مباينة الخالق لخلقه أعظم', 'Dus verschilt de Schepper nog meer', 'وإن اتفقت الأسماء', 'ook al zijn de namen gelijk']
      ],
      page: 17
    },
    {
      type: 'cards',
      title: ['أقوال الناس في الروح', 'Meningen over de ziel'],
      intro: ['ص 18–20: وكلا القولين الأولين خطأ.', 'p. 18–20: beide eerste meningen zijn fout.'],
      nodes: [
        [18, 'طوائف من أهل الكلام', 'Groepen theologen', 'جزء من البدن أو صفة له: النفس (الريح المترددة)، أو الحياة، أو المزاج، أو نفس البدن', 'een deel of eigenschap van het lichaam: de adem die heen en weer gaat, het leven, het temperament, of het lichaam zelf'],
        [18, 'طوائف من الفلاسفة', 'Groepen filosofen', 'لا داخل البدن ولا خارجه، لا متحركة ولا ساكنة، لا جسم ولا عرض؛ تدرك الكليات لا المعينات', 'niet in het lichaam en niet erbuiten, niet bewegend en niet stil, geen lichaam en geen accident; ze kent alleen het algemene'],
        [19, 'الصواب', 'Het juiste', 'من جنس آخر غير البدن والعناصر، موصوفة بما وصفتها به النصوص، ولا تدرك كيفيتها', 'van een andere soort dan lichaam en elementen, met de eigenschappen uit de teksten, en zonder dat we haar hoe vatten']
      ],
      page: 18
    },
    {
      type: 'tree',
      title: ['هل الروح جسم؟', 'Is de ziel een lichaam?'],
      intro: ['يحتاج إلى تفصيل بحسب معنى «الجسم» (ص 19–20).', 'Dat hangt af van wat je met "lichaam" bedoelt (p. 19–20).'],
      root: [19, 'لفظ «الجسم»', 'Het woord "lichaam"', 'له معان اصطلاحية غير معناه اللغوي', 'het heeft vaktermen naast de taalbetekenis'],
      nodes: [
        [19, 'في اللغة: الجسد والبدن', 'Taal: het lijf', 'فالروح ليست جسما، ولهذا يقال: الروح والجسم', 'dan is de ziel geen lichaam; men zegt "ziel en lichaam"'],
        [20, 'في اصطلاح من يقول: ما يشار إليه', 'Vakterm: waar je naar kunt wijzen', 'فالروح جسم بهذا الاصطلاح، لأنها تقبض ويعرج بها ويتبعها البصر', 'dan is de ziel een lichaam, want ze wordt genomen, stijgt op en het oog volgt haar']
      ],
      page: 19
    }
  ],
  sections: [
    [17, 'المثل الأول: الجنة', 'Voorbeeld 1: het Paradijs', 'أخبرنا الله عما في الجنة من أصناف المطاعم والمشارب والملابس والمناكح والمساكن: لبن وعسل وخمر وماء ولحم وفاكهة وحرير وذهب وفضة وحور وقصور. وقال ابن عباس: ليس في الدنيا شيء مما في الجنة إلا الأسماء. فإذا كانت تلك الحقائق موافقة في الأسماء لما في الدنيا وليست مماثلة لها، بل بينهما من التباين ما لا يعلمه إلا الله، فالخالق أعظم مباينة للمخلوقات من مباينة المخلوق للمخلوق، ومباينته لمخلوقاته أعظم من مباينة موجود الآخرة لموجود الدنيا؛ إذ المخلوق أقرب إلى المخلوق الموافق له في الاسم من الخالق إلى المخلوق.', 'Allah vertelt over het eten, drinken, de kleding, de echtgenotes en woningen in het Paradijs: melk, honing, wijn, water, vlees, fruit, zijde, goud, zilver, ḥūr en paleizen. Ibn ʿAbbās zei: niets in deze wereld is als wat in het Paradijs is, behalve de namen. Als die werkelijkheden dezelfde namen hebben als wat hier is maar er niet aan gelijk zijn, en het verschil alleen Allah bekend is, dan verschilt de Schepper nog veel meer van de schepselen dan het ene schepsel van het andere, en meer dan het hiernamaals van deze wereld. Want een schepsel staat dichter bij een schepsel met dezelfde naam dan de Schepper bij een schepsel.'],
    [17, 'افتراق الناس ثلاث فرق', 'De mensen splitsen zich in drie', 'السلف والأئمة وأتباعهم آمنوا بما أخبر الله به عن نفسه وعن اليوم الآخر، مع علمهم بالمباينة بين ما في الدنيا وما في الآخرة، وأن مباينة الله لخلقه أعظم. والفريق الثاني أثبتوا ما في الآخرة من الثواب والعقاب ونفوا كثيرا من الصفات، كطوائف من أهل الكلام المعتزلة ومن وافقهم. والثالث نفوا هذا وهذا، كالقرامطة الباطنية والفلاسفة أتباع المشائين ونحوهم من الملاحدة.', 'De salaf, de imams en hun volgelingen geloven in wat Allah over Zichzelf en over het hiernamaals vertelt, wetend dat wat hier is verschilt van wat daar is, en dat Allah nog meer van Zijn schepping verschilt. De tweede groep aanvaardt beloning en straf in het hiernamaals maar ontkent veel eigenschappen: theologen van de Muʿtazila en wie hen volgt. De derde ontkent beide: de Qarāmiṭa-Bāṭiniyya, de peripatetische filosofen en andere ketters.'],
    [17, 'الباطنية وتأويل الشرائع', 'De Bāṭiniyya en de sharīʿa', 'كثير منهم يجعلون الأمر والنهي من هذا الباب، فيتأولون الصلوات الخمس بمعرفة أسرارهم، وصيام رمضان بكتمان أسرارهم، وحج البيت بالسفر إلى شيوخهم؛ وهي تأويلات يعلم بالاضطرار أنها كذب وافتراء على الرسل وتحريف لكلام الله وإلحاد في آياته. وقد يقولون: الشرائع تلزم العامة دون الخاصة، فإذا صار الرجل من عارفيهم رفعوا عنه الواجبات وأباحوا له المحظورات. وقد يوجد في المنتسبين إلى التصوف والسلوك من يدخل في بعض هذا.', 'Velen van hen doen hetzelfde met gebod en verbod: de vijf gebeden betekenen "hun geheimen kennen", het vasten "hun geheimen verzwijgen", de ḥajj "reizen naar hun shaykhs". Iedereen weet dat dit leugen is over de boodschappers, verdraaiing van Allahs woord en afwijking in Zijn tekenen. Soms zeggen ze: de sharīʿa geldt voor het gewone volk, niet voor de elite; wie bij hen "kenner" wordt, is vrij van plichten en mag het verbodene. Ook onder mensen die zich met soefisme en het pad verbinden, zijn er die hier deels in meegaan.', 'وأجمع المسلمون على أن هؤلاء الباطنية الملاحدة أكفر من اليهود والنصارى. وما يحتج به أهل الإثبات على هؤلاء يحتج به على من يشركهم في بعض إلحادهم؛ فإثبات الصفات مع نفي المماثلة هو الحق الموافق للمنقول والمعقول، ويهدم أساس الإلحاد.', 'De moslims zijn het erover eens dat deze Bāṭiniyya ongeloviger zijn dan joden en christenen. Wat tegen hen geldt, geldt ook tegen wie deels met hen meegaat. Eigenschappen bevestigen en gelijkenis ontkennen is de waarheid die overlevering en verstand samenbrengt en de basis van de ketterij wegslaat.'],
    [18, 'لا يضرب لله المثل المماثل، بل له المثل الأعلى', 'Geen gelijk voorbeeld voor Allah, wel het hoogste voorbeeld', 'الله لا تضرب له الأمثال التي فيها مماثلة لخلقه، فلا مثل له، بل له المثل الأعلى؛ فلا يجوز أن يشترك هو والمخلوق في قياس تمثيل ولا في قياس شمول تستوي أفراده. ولكن يستعمل في حقه المثل الأعلى: كل ما اتصف به المخلوق من كمال فالخالق أولى به، وكل ما تنزه عنه المخلوق من نقص فالخالق أولى بالتنزه عنه. فإذا كان المخلوق منزها عن مماثلة المخلوق مع الموافقة في الاسم، فالخالق أولى أن ينزه عن مماثلة المخلوق وإن حصلت موافقة في الاسم.', 'Voor Allah worden geen voorbeelden gegeven die Hem gelijk maken aan Zijn schepsels; Hij heeft geen gelijke, wel het hoogste voorbeeld. Hij valt met schepselen niet onder een analogie, en ook niet onder een algemene regel waarin alle gevallen gelijk zijn. Wat wel geldt: elke volmaaktheid van een schepsel komt de Schepper eerder toe, en van elk gebrek waar een schepsel vrij van is, is de Schepper des te meer vrij. Als een schepsel al niet gelijk is aan een ander schepsel met dezelfde naam, dan is de Schepper dat zeker niet.'],
    [18, 'المثل الثاني: الروح', 'Voorbeeld 2: de ziel', 'الروح التي فينا وصفت بصفات ثبوتية وسلبية، وأخبرت النصوص أنها تعرج وتصعد من سماء إلى سماء، وأنها تقبض من البدن وتسل منه كما تسل الشعرة من العجين. والناس مضطربون فيها: فطوائف من أهل الكلام يجعلونها جزءا من البدن أو صفة من صفاته: النفس أو الريح المترددة في البدن، أو الحياة، أو المزاج، أو نفس البدن. وطوائف من الفلاسفة يصفونها بما يصفون به واجب الوجود عندهم، وهي أمور لا يتصف بها إلا ممتنع الوجود: لا داخل البدن ولا خارجه، ولا مباينة ولا مداخلة، ولا متحركة ولا ساكنة، ولا تصعد ولا تهبط، ولا جسم ولا عرض، وأنها لا تدرك إلا الكليات.', 'De ziel in ons heeft bevestigde en ontkende eigenschappen. De teksten zeggen dat ze van hemel tot hemel opstijgt, uit het lichaam genomen wordt en eruit getrokken wordt zoals een haar uit deeg. Hierover is veel verwarring. Sommige theologen maken haar tot een deel of eigenschap van het lichaam: de adem die heen en weer gaat, het leven, het temperament, of het lichaam zelf. Sommige filosofen beschrijven haar zoals zij de Noodzakelijke beschrijven, met dingen die alleen bij het onmogelijke passen: niet in het lichaam en niet erbuiten, niet gescheiden en niet verbonden, niet bewegend en niet stil, stijgt niet en daalt niet, geen lichaam en geen accident, en ze kent alleen algemene begrippen.', 'فإذا قيل: هذا ممتنع في ضرورة العقل، قالوا: بل ممكن، بدليل أن الكليات ممكنة موجودة غير مشار إليها. وقد غفلوا عن أن الكليات لا توجد كلية إلا في الأذهان؛ فيعتمدون في المبدأ والمعاد على خيال لا يخفى فساده على غالب الجهال.', 'Zegt men dat dit onmogelijk is, dan antwoorden ze: het kan, want algemene begrippen bestaan en je kunt er niet naar wijzen. Ze vergeten dat het algemene alleen in het hoofd algemeen bestaat. Zo bouwen ze hun leer over begin en einde op een fantasie die zelfs de meeste onwetenden doorzien.'],
    [19, 'سبب الاضطراب، ولفظ الجسم', 'Waarom de verwarring, en het woord "lichaam"', 'سبب الاضطراب أن الروح (النفس الناطقة عند الفلاسفة) ليست من جنس البدن ولا العناصر والمولدات منها، بل من جنس آخر، فعرفها هؤلاء بالسلوب، وجعلها أولئك من جنس الأجسام المشهودة، وكلاهما خطأ. وإطلاق أنها جسم أو ليست بجسم يحتاج إلى تفصيل: فأهل اللغة يقولون: الجسم الجسد والبدن، فالروح ليست جسما؛ وأهل الكلام مختلفون: الموجود، أو القائم بنفسه، أو المركب من الجواهر المنفردة، أو من المادة والصورة، أو ما يشار إليه ويقال: هنا أو هناك.', 'De verwarring ontstaat doordat de ziel (bij de filosofen: de redelijke ziel) niet van de soort van het lichaam of de elementen is, maar van een andere soort. De een kent haar alleen via ontkenningen, de ander maakt haar tot een gewoon lichaam; beide fout. Of je haar een lichaam noemt, hangt af van de betekenis. In de taal is een lichaam een lijf, en dan is de ziel geen lichaam. Theologen verschillen: lichaam = wat bestaat, wat op zichzelf staat, wat uit atomen bestaat, wat uit materie en vorm bestaat, of waar je naar kunt wijzen ("hier" of "daar").', 'فعلى الأخير، إذا كانت الروح مما يشار إليه ويتبعه بصر الميت - كما قال النبي صلى الله عليه وسلم: «إن الروح إذا خرج تبعه البصر» - وتقبض ويعرج بها إلى السماء، كانت جسما بهذا الاصطلاح.', 'Volgens die laatste betekenis is de ziel een lichaam: je kunt ernaar wijzen, het oog van de stervende volgt haar (de Profeet ﷺ zei: "Als de ziel weggaat, volgt het oog haar"), ze wordt genomen en naar de hemel gebracht.'],
    [20, 'المقصود من مثل الروح', 'Wat het voorbeeld van de ziel wil zeggen', 'الروح موجودة حية عالمة قادرة سميعة بصيرة، تصعد وتنزل، وتذهب وتجيء، والعقول قاصرة عن تكييفها وتحديدها لأنهم لم يشاهدوا لها نظيرا، والشيء إنما تدرك حقيقته بمشاهدته أو مشاهدة نظيره. فإذا كانت الروح متصفة بهذه الصفات مع عدم مماثلتها للمخلوقات المشاهدة، فالخالق أولى بمباينته لمخلوقاته مع اتصافه بما يستحقه من أسمائه وصفاته، وأهل العقول أعجز عن أن يحدوه أو يكيفوه منهم عن الروح.', 'De ziel bestaat, leeft, weet, kan, hoort, ziet, stijgt, daalt, gaat en komt. Toch kan het verstand haar hoe en grenzen niet vatten, omdat niemand iets gelijks heeft gezien; iets ken je pas echt als je het of iets gelijks ziet. Als de ziel deze eigenschappen heeft zonder op zichtbare schepselen te lijken, dan heeft de Schepper des te meer Zijn namen en eigenschappen zonder op de schepping te lijken. En het verstand kan Hem nog minder begrenzen of het hoe van Hem vatten dan de ziel.', 'فمن نفى صفات الروح كان جاحدا معطلا، ومن مثلها بالمخلوقات المشاهدة كان جاهلا ممثلا لها بغير شكلها، وهي مع ذلك ثابتة بحقيقة الإثبات؛ فالخالق أولى أن يكون نافي صفاته جاحدا معطلا، ومن قاسه بخلقه جاهلا ممثلا.', 'Wie de eigenschappen van de ziel ontkent, loochent; wie haar vergelijkt met zichtbare schepselen, is onwetend en geeft haar een vorm die niet de hare is; en toch bestaat ze echt. Des te meer is wie Allahs eigenschappen ontkent een loochenaar, en wie Hem met de schepping vergelijkt een onwetende vergelijker.']
  ],
  keycards: [
    ['definitie', 18, 'قياس الأولى (المثل الأعلى)', 'Het "des te meer" (hoogste voorbeeld)', ['كل كمال للمخلوق لا نقص فيه فالخالق أولى به', 'كل نقص تنزه عنه المخلوق فالخالق أولى بالتنزه عنه', 'لا قياس تمثيل ولا قياس شمول تستوي أفراده'], ['elke volmaaktheid van een schepsel komt de Schepper eerder toe', 'van elk gebrek waar een schepsel vrij van is, is de Schepper des te meer vrij', 'geen analogie, geen regel die allen gelijkstelt']],
    ['opsomming', 17, 'ما في الجنة مما يوافق الدنيا في الاسم', 'Wat in het Paradijs dezelfde naam heeft als hier', ['لبن وعسل وخمر وماء', 'لحم وفاكهة', 'حرير وذهب وفضة', 'حور وقصور'], ['melk, honing, wijn, water', 'vlees en fruit', 'zijde, goud, zilver', 'ḥūr en paleizen']],
    ['opsomming', 17, 'تأويلات الباطنية للشرائع', 'Herinterpretaties van de Bāṭiniyya', ['الصلوات الخمس = معرفة أسرارهم', 'صيام رمضان = كتمان أسرارهم', 'حج البيت = السفر إلى شيوخهم', 'الشرائع للعامة دون الخاصة'], ['de vijf gebeden = hun geheimen kennen', 'vasten = hun geheimen verzwijgen', 'ḥajj = reizen naar hun shaykhs', 'de sharīʿa geldt voor het volk, niet voor de elite']],
    ['opsomming', 19, 'معاني «الجسم» عند المتكلمين', 'Betekenissen van "lichaam" bij theologen', ['الموجود', 'القائم بنفسه', 'المركب من الجواهر المنفردة', 'المركب من المادة والصورة', 'ما يشار إليه هنا أو هناك'], ['wat bestaat', 'wat op zichzelf staat', 'wat uit atomen bestaat', 'wat uit materie en vorm bestaat', 'waar je naar kunt wijzen']],
    ['bewijs', 18, 'صفات الروح في النصوص', 'Eigenschappen van de ziel in de teksten', ['تعرج وتصعد من سماء إلى سماء', 'تقبض من البدن', 'تسل منه', '«إن الروح إذا خرج تبعه البصر»'], ['stijgt van hemel tot hemel op', 'wordt uit het lichaam genomen', 'wordt eruit getrokken', '"Als de ziel weggaat, volgt het oog haar"']],
    ['onderscheid', 20, 'نافي صفات الروح ومشبهها', 'Wie de ziel ontkent of vergelijkt', ['نافي صفاتها: جاحد معطل', 'مشبهها بالمشاهد: جاهل ممثل', 'والخالق أولى بذلك كله'], ['wie haar eigenschappen ontkent: loochenaar', 'wie haar met het zichtbare vergelijkt: onwetende vergelijker', 'en dat geldt des te meer voor de Schepper']]
  ],
  hadith: [
    { narrator: ['أم سلمة', 'Umm Salama'], text: '«إن الروح إذا خرج تبعه البصر»', takhrij: ['رواه مسلم (لم يذكر المؤلف مخرجه)', 'Muslim (de auteur noemt de bron niet)'], nl: '"Als de ziel weggaat, volgt het oog haar."', note: ['استدل به على أن الروح مما يشار إليه.', 'Bewijs dat de ziel iets is waar je naar kunt wijzen.'], pages: [20] }
  ],
  persons: [
    ['ibn-abbas', 'text', [17], 'قال: ليس في الدنيا شيء مما في الجنة إلا الأسماء.', 'Zei: niets in deze wereld is als wat in het Paradijs is, behalve de namen.']
  ],
  subtleties: [
    [17, 'المخلوق أقرب إلى المخلوق', 'Een schepsel staat dichter bij een schepsel', 'حجة المثل الأول قياس أولى: إذا تباين مخلوقان متفقان في الاسم (لبن الدنيا ولبن الجنة)، فتباين الخالق والمخلوق أعظم، لأن المخلوق أقرب إلى المخلوق من الخالق إلى المخلوق.', 'Voorbeeld 1 is een "des te meer": als twee schepselen met dezelfde naam (melk hier en melk daar) zo verschillen, dan Schepper en schepsel veel meer, want schepselen staan dichter bij elkaar.'],
    [17, 'الإيمان بالجنة إلزام للمعتزلة', 'Geloof in het Paradijs als argument tegen de Muʿtazila', 'المعتزلة أثبتوا حقائق الجنة مع مباينتها لما في الدنيا، فيلزمهم إثبات الصفات مع مباينتها لصفات المخلوقين.', 'De Muʿtazila aanvaarden het Paradijs echt, ook al verschilt het van deze wereld; dus moeten ze ook de eigenschappen aanvaarden, ook al verschillen ze van die van schepselen.'],
    [18, 'لماذا لا يدخل الله في قياس الشمول؟', 'Waarom Allah niet onder een algemene regel valt', 'لأن قياس الشمول تستوي أفراده تحت حكم واحد، والله لا يساويه شيء؛ أما الأولى فيثبت له الكمال على وجه أكمل.', 'Bij een algemene regel zijn alle gevallen gelijk onder één oordeel, en niets is aan Allah gelijk. Bij "des te meer" krijgt Hij de volmaaktheid op de meest volmaakte wijze.'],
    [19, 'الروح عند الفلاسفة كواجب الوجود عندهم', 'De ziel bij de filosofen is als hun Noodzakelijke', 'وصفوا الروح بسلوب لا يتصف بها إلا ممتنع الوجود، كما فعلوا في وصف الله؛ فالخطأ واحد في البابين.', 'Ze beschrijven de ziel met ontkenningen die alleen bij het onmogelijke passen, net zoals ze Allah beschrijven; dezelfde fout in beide.'],
    [20, 'كيف تدرك الحقائق؟', 'Hoe ken je de werkelijkheid van iets?', 'الشيء إنما تدرك حقيقته بمشاهدته أو مشاهدة نظيره؛ والروح لا نظير لها مشاهد، والله لا نظير له، فلا سبيل إلى تكييفه.', 'Iets ken je pas echt als je het of iets gelijks ziet. De ziel heeft niets gelijks dat we zien, en Allah heeft geen gelijke; dus is er geen weg naar Zijn hoe.'],
    [18, 'صلة الباطنية ببعض المتصوفة', 'De band met sommige soefi\'s', 'نبه إلى أن بعض المنتسبين إلى التصوف والسلوك يدخل في بعض مذاهب الباطنية، كرفع الواجبات عن «الخاصة».', 'Hij waarschuwt dat sommigen die zich met soefisme verbinden, deels meegaan met de Bāṭiniyya, bijvoorbeeld door "de elite" van plichten vrij te stellen.']
  ],
  rules: [
    [18, 'كل كمال للمخلوق فالخالق أولى به، وكل نقص تنزه عنه المخلوق فالخالق أولى بالتنزه عنه', 'Elke volmaaktheid van een schepsel komt de Schepper eerder toe; van elk gebrek is Hij des te meer vrij', 'قياس الأولى.', 'Het "des te meer".'],
    [18, 'لا يشترك الله والمخلوق في قياس تمثيل ولا قياس شمول تستوي أفراده', 'Allah en een schepsel vallen niet onder één analogie of gelijkmakende regel', '', ''],
    [20, 'الشيء إنما تدرك حقيقته بمشاهدته أو بمشاهدة نظيره', 'Iets ken je pas echt door het of iets gelijks te zien', '', ''],
    [19, 'الكليات لا توجد كلية إلا في الأذهان', 'Het algemene bestaat alleen in het hoofd als algemeen', '', ''],
    [19, 'إطلاق لفظ مجمل كالجسم يحتاج إلى تفصيل', 'Een vaag woord als "lichaam" vraagt onderscheid', 'وسيأتي في القاعدة الثانية.', 'Zie regel 2.']
  ],
  disputes: [
    { page: 18, q: ['ما حقيقة الروح؟', 'Wat is de ziel?'], views: [['طوائف من المتكلمين: جزء من البدن أو صفة له', 'Sommige theologen: een deel of eigenschap van het lichaam'], ['طوائف من الفلاسفة: لا داخل البدن ولا خارجه، لا جسم ولا عرض', 'Sommige filosofen: niet in en niet buiten het lichaam, geen lichaam en geen accident'], ['المؤلف: من جنس آخر، موصوفة بما في النصوص', 'De auteur: een andere soort, met de eigenschappen uit de teksten']], preferred: ['قول المؤلف، والقولان الأولان خطأ.', 'Die van de auteur; de eerste twee zijn fout.'] },
    { page: 19, q: ['هل الروح جسم؟', 'Is de ziel een lichaam?'], views: [['بمعنى البدن في اللغة: لا', 'Als "lijf" (taal): nee'], ['بمعنى ما يشار إليه: نعم', 'Als "waar je naar kunt wijzen": ja']], preferred: ['التفصيل بحسب المعنى.', 'Het hangt af van de betekenis.'] }
  ],
  pitfalls: [
    [17, 'الظن أن نعيم الجنة مثل نعيم الدنيا', 'Denken dat het Paradijs is als deze wereld', 'ليس في الدنيا مما في الجنة إلا الأسماء.', 'Alleen de namen zijn gelijk.'],
    [18, 'الظن أن نفي المثل يمنع كل قياس في حق الله', 'Denken dat er voor Allah helemaal geen redenering mogelijk is', 'الممنوع قياس التمثيل والشمول، أما قياس الأولى فمستعمل في حقه.', 'Verboden zijn analogie en gelijkmakende regel; "des te meer" wordt wel gebruikt.'],
    [19, 'الحكم على الروح بأنها جسم أو ليست جسما بإطلاق', 'Zonder meer zeggen dat de ziel wel of geen lichaam is', 'يحتاج إلى تفصيل في معنى الجسم.', 'Dat vraagt onderscheid in wat je met lichaam bedoelt.'],
    [19, 'الاستدلال بالكليات على وجود ما لا يشار إليه في الخارج', 'Met algemene begrippen bewijzen dat iets bestaat waar je niet naar kunt wijzen', 'الكليات لا توجد كلية إلا في الأذهان لا في العيان.', 'Algemene begrippen bestaan alleen in het hoofd als algemeen, niet daarbuiten.']
  ],
  ayat: [
    [19, '﴿وإذا رأيتهم تعجبك أجسامهم وإن يقولوا تسمع لقولهم﴾', 'الجسم في اللغة البدن.', 'Lichaam is in de taal het lijf.'],
    [19, '﴿وزاده بسطة في العلم والجسم﴾', 'شاهد آخر لمعنى الجسم في اللغة.', 'Nog een bewijs voor de taalbetekenis van lichaam.']
  ],
  review: [
    ['المثل الأول: الجنة؛ الثاني: الروح.', 'Voorbeeld 1: het Paradijs; 2: de ziel.'],
    ['ابن عباس: ليس في الدنيا مما في الجنة إلا الأسماء.', 'Ibn ʿAbbās: alleen de namen zijn van hier.'],
    ['مباينة الخالق للمخلوق أعظم من مباينة المخلوق للمخلوق.', 'De Schepper verschilt meer van de schepping dan schepselen van elkaar.'],
    ['ثلاث فرق: السلف، والمعتزلة، والباطنية والفلاسفة.', 'Drie groepen: salaf, Muʿtazila, Bāṭiniyya en filosofen.'],
    ['الباطنية أكفر من اليهود والنصارى بإجماع المسلمين.', 'De Bāṭiniyya zijn volgens de consensus ongeloviger dan joden en christenen.'],
    ['لله المثل الأعلى، لا قياس تمثيل ولا شمول.', 'Allah heeft het hoogste voorbeeld; geen analogie, geen gelijkmakende regel.'],
    ['الروح من جنس آخر، والعقول عاجزة عن تكييفها.', 'De ziel is van een andere soort; het verstand kan haar hoe niet vatten.'],
    ['الجسم لفظ مجمل يحتاج إلى تفصيل.', '"Lichaam" is vaag en vraagt onderscheid.']
  ],
  quiz: [
    { type: 'mc', page: 17, q: ['ما المثلان المضروبان في الرسالة؟', 'Wat zijn de twee voorbeelden in de brief?'], options: [['الجنة والروح', 'الجنة والنار', 'العرش والكرسي', 'الروح والعقل'], ['Paradijs en ziel', 'Paradijs en Hel', 'Troon en voetenbank', 'ziel en verstand']], answer: 0 },
    { type: 'mc', page: 17, q: ['قال ابن عباس: «ليس في الدنيا مما في الجنة إلا...»', 'Ibn ʿAbbās: "niets in deze wereld is als in het Paradijs, behalve..."'], options: [['الأسماء', 'الصفات', 'الألوان', 'الطعوم'], ['de namen', 'de eigenschappen', 'de kleuren', 'de smaken']], answer: 0 },
    { type: 'mc', page: 17, q: ['من الذين أثبتوا الثواب والعقاب ونفوا كثيرا من الصفات؟', 'Wie aanvaarden beloning en straf maar ontkennen veel eigenschappen?'], options: [['المعتزلة ومن وافقهم', 'السلف', 'الباطنية', 'الفلاسفة المشاؤون'], ['de Muʿtazila en hun volgers', 'de salaf', 'de Bāṭiniyya', 'de peripatetici']], answer: 0 },
    { type: 'mc', page: 17, q: ['بماذا تأول الباطنية الحج؟', 'Hoe herinterpreteren de Bāṭiniyya de ḥajj?'], options: [['السفر إلى شيوخهم', 'معرفة أسرارهم', 'كتمان أسرارهم', 'طاعة إمامهم'], ['reizen naar hun shaykhs', 'hun geheimen kennen', 'hun geheimen verzwijgen', 'hun imam gehoorzamen']], answer: 0 },
    { type: 'tf', page: 18, q: ['يجوز أن يدخل الله مع خلقه في قياس شمول تستوي أفراده.', 'Allah mag met Zijn schepselen onder een regel vallen waarin allen gelijk zijn.'], answer: 1, explain: ['لا، وإنما يستعمل في حقه قياس الأولى.', 'Nee, alleen "des te meer" geldt voor Hem.'] },
    { type: 'mc', page: 18, q: ['معنى المثل الأعلى:', 'Het hoogste voorbeeld betekent:'], options: [['كل كمال للمخلوق فالخالق أولى به', 'الخالق مثل المخلوق في الكمال', 'لا يوصف الخالق بالكمال', 'الكمال للمخلوق وحده'], ['elke volmaaktheid van een schepsel komt de Schepper eerder toe', 'de Schepper is in volmaaktheid als het schepsel', 'de Schepper heeft geen volmaaktheid', 'alleen schepselen zijn volmaakt']], answer: 0 },
    { type: 'mc', page: 18, q: ['من قال: الروح الحياة أو المزاج؟', 'Wie zegt: de ziel is het leven of het temperament?'], options: [['طوائف من أهل الكلام', 'طوائف من الفلاسفة', 'أهل اللغة', 'السلف'], ['sommige theologen', 'sommige filosofen', 'taalkundigen', 'de salaf']], answer: 0 },
    { type: 'mc', page: 19, q: ['ما سبب اضطراب الناس في الروح؟', 'Waarom is er zoveel verwarring over de ziel?'], options: [['أنها من جنس آخر غير البدن والعناصر', 'أن النصوص سكتت عنها', 'أنها جسم كسائر الأجسام', 'أنها لا توجد'], ['ze is van een andere soort dan lichaam en elementen', 'de teksten zwijgen erover', 'ze is een lichaam als andere', 'ze bestaat niet']], answer: 0 },
    { type: 'tf', page: 19, q: ['الروح ليست جسما بمعنى البدن في اللغة.', 'In de taalbetekenis (lijf) is de ziel geen lichaam.'], answer: 0 },
    { type: 'mc', page: 20, q: ['الشيء إنما تدرك حقيقته:', 'Iets ken je pas echt:'], options: [['بمشاهدته أو مشاهدة نظيره', 'بالعقل وحده', 'بالخبر وحده', 'بالقياس الشمولي'], ['door het of iets gelijks te zien', 'alleen met het verstand', 'alleen via een bericht', 'met een algemene regel']], answer: 0 },
    { type: 'mc', page: 20, q: ['من مثّل الروح بالمخلوقات المشاهدة فهو:', 'Wie de ziel vergelijkt met zichtbare schepselen, is:'], options: [['جاهل ممثل لها بغير شكلها', 'جاحد معطل', 'مصيب', 'متوقف'], ['een onwetende die haar een vreemde vorm geeft', 'een loochenaar', 'in het gelijk', 'iemand die zich onthoudt']], answer: 0 }
  ],
  note: ['النص من طبعة السعوي، وأرقام الصفحات من النسخة المصورة.', 'Tekst: editie as-Saʿawī; paginanummers: de scan.']
})
