// Hoofdstukkaart bij الحديث (٤), eenheid 1: hadith 1–5 (lessen 1–6, boek p. 9–33).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-hadith/leesnotities.md);
// hadith en takhrij zoals in het boek. De dichtregels (p. 15 en 22) staan er zonder naam en zijn
// niet opgenomen; het woord van imam Aḥmad over het slachten (p. 31) staat er zonder bron.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-hadith',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب الحديث (٤)، سلسلة زاد العلمية', 'Al-Ḥadīth (4), Zad-reeks'],
    pages: '9–33',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ١–٥', 'Hadith 1–5'],
  subtitle: ['خمسة أحاديث في ستة دروس', 'Vijf hadith in zes lessen'],
  summary: [
    'خمسة أحاديث جامعة: الدين النصيحة لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم، وإن الدين يسر فسددوا وقاربوا، والبر حسن الخلق والإثم ما حاك في النفس، وتقسيم أحكام الله إلى فرائض ومحارم وحدود ومسكوت عنه، وإن الله كتب الإحسان على كل شيء.',
    'Vijf allesomvattende hadith: de religie is oprechte raad voor Allah, Zijn Boek, Zijn Boodschapper, de leiders van de moslims en hun gewone mensen; de religie is gemakkelijk, dus wees juist en benader het; vroomheid is goed karakter en zonde is wat in je knaagt; Allahs bepalingen zijn verplichtingen, verboden, grenzen en wat Hij verzweeg; en Allah heeft voorgeschreven alles goed te doen.'
  ],
  map: {
    title: ['الأحاديث الخمسة في خريطة واحدة', 'De vijf hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٤)', 'Hadith (4)'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['الدين النصيحة', 'De religie is oprechte raad'], sub: ['الحديث ١', 'hadith 1'], page: 9, children: [['لله ولكتابه ولرسوله', 'voor Allah, Zijn Boek, Zijn Boodschapper'], ['لأئمة المسلمين وعامتهم', 'voor de leiders en de gewone moslims']] },
      { label: ['إن الدين يسر', 'De religie is gemakkelijk'], sub: ['الحديث ٢', 'hadith 2'], page: 14, children: [['سددوا وقاربوا وأبشروا', 'wees juist, benader en verheug je'], ['الغدوة والروحة والدلجة', 'ochtend, middag en laatste deel van de nacht'], ['القصد القصد', 'de middenweg']] },
      { label: ['البر حسن الخلق', 'Vroomheid is goed karakter'], sub: ['الحديث ٣', 'hadith 3'], page: 20, children: [['الإثم ما حاك في النفس', 'zonde knaagt in je'], ['وكرهت أن يطلع عليه الناس', 'en je wilt niet dat mensen het zien']] },
      { label: ['إن الله فرض فرائض', 'Allah verplichtte verplichtingen'], sub: ['الحديث ٤', 'hadith 4'], page: 24, children: [['فرائض ومحارم وحدود', 'verplichtingen, verboden, grenzen'], ['ومسكوت عنه رحمة', 'en het verzwegene, uit barmhartigheid']] },
      { label: ['إن الله كتب الإحسان', 'Allah schreef iḥsān voor'], sub: ['الحديث ٥', 'hadith 5'], page: 29, children: [['إحسان القتلة والذبح', 'goed doden en slachten'], ['صور الإحسان', 'vormen van iḥsān']] }
    ]
  },
  points: [
    [10, 'قال بعض العلماء: حديث «الدين النصيحة» ربع الإسلام، وهو من جوامع الكلم.', 'Sommige geleerden: de hadith "de religie is oprechte raad" is een kwart van de islam en behoort tot de allesomvattende woorden.'],
    [12, 'من النصيحة لأئمة المسلمين: السمع والطاعة، وإعانتهم على الحق، وعدم الخروج عليهم، والدعاء لهم بظهر الغيب.', 'Oprechte raad voor de leiders van de moslims: horen en gehoorzamen, hen helpen bij de waarheid, niet tegen hen in opstand komen en voor hen bidden in hun afwezigheid.'],
    [15, '«فسددوا»: الزموا السداد وهو الصواب بلا إفراط ولا تفريط، «وقاربوا»: إن لم تستطيعوا الأكمل فاقتربوا منه.', '"Wees juist": houd vast aan het juiste zonder overdrijving of nalatigheid; "benader": als je het volmaakte niet kunt, kom er zo dicht mogelijk bij.'],
    [16, 'ليس المراد منع طلب الأكمل في العبادة، بل منع الإفراط المؤدي إلى الملل أو ترك الأفضل أو تأخير الفرض.', 'De hadith verbiedt niet het volmaakte na te streven, maar de overdrijving die tot verveling leidt, of tot het laten van het betere of het uitstellen van het verplichte.'],
    [21, 'للإثم علامتان: ما حاك في الصدر ولم يطمئن إليه القلب، وما كره صاحبه أن يطلع عليه الناس.', 'Zonde heeft twee kenmerken: wat in de borst knaagt zonder dat het hart rust vindt, en wat men niet wil dat de mensen zien.'],
    [23, 'المعيار في الشريعة الأدلة لا ما تعارف عليه الناس.', 'De maatstaf in de sharīʿa zijn de bewijzen, niet wat onder de mensen gebruikelijk is.'],
    [26, 'ما سكت الله عنه مما ليس عبادة فهو مباح، أما العبادات فالأصل فيها المنع حتى يقوم الدليل.', 'Waarover Allah zweeg en wat geen aanbidding is, is toegestaan; bij aanbiddingen is de grondregel verbod, tot er een bewijs is.'],
    [30, 'الإحسان شرعا أمران: إيصال النفع إلى الغير، وإتقان العبادة وإكمالها.', 'Iḥsān is religieus twee dingen: anderen nut bezorgen, en aanbidding volledig en zorgvuldig verrichten.']
  ],
  terms: [
    ['النصيحة', 'an-naṣīḥa', 9, 'كلمة جامعة: حيازة الحظ للمنصوح له إرادة وفعلا، وأصلها من نصح العسل إذا خلص.', 'Een omvattend woord: het goede nastreven voor wie men raad geeft, in wil en daad; van naṣaḥa: zuiver zijn, zoals zuivere honing.'],
    ['يشاد', 'yushādd', 14, 'يتعمق ويغالي.', 'Overdrijven en te ver gaan.'],
    ['الدلجة', 'ad-dulja', 15, 'السير آخر الليل.', 'Reizen aan het einde van de nacht.'],
    ['البر', 'al-birr', 20, 'اسم جامع لأنواع الطاعات والقربات.', 'Een omvattende naam voor alle soorten gehoorzaamheid en nabijheid zoeken.'],
    ['حاك', 'ḥāka', 20, 'تردد واضطرب في النفس.', 'Twijfelde en knaagde in de ziel.'],
    ['الحدود', 'al-ḥudūd', 25, 'الواجبات والمحرمات؛ والحد لغة المنع.', 'De verplichtingen en de verboden; ḥadd is taalkundig verhinderen.'],
    ['المسكوت عنه', 'al-maskūt ʿanhu', 25, 'ما لم يذكر حكمه بتحليل ولا إيجاب ولا تحريم.', 'Waarvan de bepaling niet genoemd is: niet als toegestaan, verplicht of verboden.'],
    ['القتلة', 'al-qitla', 30, 'بالكسر: الهيئة والحالة، وبالفتح: المرة.', 'Met kasra: de wijze van doden; met fatḥa: één keer doden.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['النصيحة لخمسة', 'Oprechte raad voor vijf'],
      intro: ['كما في الصفحات ١٠–١٢.', 'Zoals op p. 10–12.'],
      nodes: [
        [10, 'لله', 'Voor Allah', 'تعظيمه ومحبته وإخلاص العبادة له وتوحيده', 'Hem verheerlijken en liefhebben, oprecht aanbidden en als Enige erkennen'],
        [11, 'لكتابه', 'Voor Zijn Boek', 'الإيمان بأنه كلامه، وتلاوته، والعمل بمحكمه', 'geloven dat het Zijn woord is, het reciteren en naar het duidelijke handelen'],
        [11, 'لرسوله ﷺ', 'Voor Zijn Boodschapper ﷺ', 'تصديقه وطاعته ومحبته والذب عن سنته بلا غلو', 'hem geloven, gehoorzamen, liefhebben en zijn sunna verdedigen, zonder overdrijving'],
        [12, 'لأئمة المسلمين', 'Voor de leiders', 'السمع والطاعة والدعاء لهم وعدم الخروج عليهم', 'horen en gehoorzamen, voor hen bidden en niet in opstand komen'],
        [12, 'لعامتهم', 'Voor de gewone moslims', 'أن تحب لهم ما تحب لنفسك', 'voor hen wensen wat je voor jezelf wenst']
      ]
    },
    {
      type: 'compare',
      title: ['أنواع المشقة', 'Soorten moeite'],
      intro: ['كما في الصفحة ١٨.', 'Zoals op p. 18.'],
      columns: [['وصفها', 'Kenmerk'], ['أثرها في الحكم', 'Invloed op de bepaling']],
      rows: [
        { label: ['مشقة معتادة', 'Gewone moeite'], cells: [['ملازمة لكل تكليف', 'hoort bij elke verplichting'], ['لا أثر لها', 'geen invloed']] },
        { label: ['مشقة غير معتادة', 'Ongewone moeite'], cells: [['تؤدي إلى ضرر في النفس أو الولد أو المال', 'leidt tot schade aan zichzelf, kind of bezit'], ['منفية تجلب التيسير', 'uitgesloten; zij brengt verlichting']] }
      ],
      page: 18
    },
    {
      type: 'cards',
      title: ['أحكام الله أربعة أقسام', 'Allahs bepalingen in vier delen'],
      intro: ['قال ابن رجب: وذلك يجمع أحكام الدين كلها، ص ٢٥.', 'Ibn Rajab: dat omvat alle bepalingen van de religie, p. 25.'],
      nodes: [
        [24, 'فرائض', 'Verplichtingen', 'فلا تضيعوها', 'verwaarloos ze niet'],
        [24, 'محارم', 'Verboden', 'فلا تنتهكوها', 'schend ze niet'],
        [24, 'حدود', 'Grenzen', 'فلا تعتدوها', 'overschrijd ze niet'],
        [25, 'مسكوت عنه', 'Het verzwegene', 'فلا تبحثوا عنها', 'onderzoek het niet']
      ]
    }
  ],
  sections: [
    [16, 'أربعة أمور في حديث اليسر', 'Vier zaken in de hadith over gemak', 'دل الحديث على: التيسير الشامل للشريعة، وأن المشقة تجلب التيسير، وتنشيط العاملين وتبشيرهم، والوصية الجامعة في كيفية السير إلى الله.', 'De hadith toont: het gemak dat de hele sharīʿa omvat, dat moeite verlichting brengt, het aanmoedigen van wie handelen met goed nieuws, en het omvattende advies over hoe men naar Allah reist.'],
    [22, 'جماع حسن الخلق', 'De kern van goed karakter', 'قال ابن تيمية: جماع الخلق الحسن مع الناس أن تصل من قطعك بالسلام والإكرام والدعاء، وتعطي من حرمك، وتعفو عمن ظلمك، وبعض هذا واجب وبعضه مستحب.', 'Ibn Taymiyya: de kern van goed karakter met mensen is dat je wie de band verbrak opzoekt met groet, eer en smeekbede, geeft aan wie jou onthield en vergeeft wie jou onrecht deed; een deel hiervan is verplicht, een deel aanbevolen.'],
    [22, 'الذوق ليس دليلا', 'Gevoel is geen bewijs', 'استدل بعض المتصوفة بالحديث على أن الذوق دليل شرعي، ولا يصح ذلك، لأن الخطاب لصحابي حريص على الشرع، فلا يطمئن قلبه إلا لما يحبه الله.', 'Sommige soefi\'s gebruikten de hadith om "smaak" als religieus bewijs te nemen; dat klopt niet, want de toespraak is aan een metgezel die de sharīʿa wilde volgen, wiens hart alleen rust vond bij wat Allah liefheeft.'],
    [28, '﴿نسوا الله فنسيهم﴾', '"Zij vergaten Allah, dus vergat Hij hen"', 'النسيان هنا نسيان ترك وإعراض: تركوا الله فأعرض عنهم، أما النسيان الذي هو ذهول فلا يوصف الله به.', 'Vergeten betekent hier laten en afwenden: zij lieten Allah, dus wendde Hij Zich van hen af. Het vergeten dat afdwalen van iets bekends is, wordt Allah niet toegeschreven.'],
    [31, 'الكتابة نوعان', 'Voorschrijven kent twee soorten', 'كتابة كونية لا بد من وقوعها: ﴿كتب الله لأغلبن أنا ورسلي﴾، وكتابة شرعية بما أمر به عباده: ﴿كتب عليكم الصيام﴾.', 'Voorschrijven in de schepping, dat onvermijdelijk gebeurt: "Allah heeft geschreven: Ik en Mijn boodschappers zullen zegevieren"; en voorschrijven in de wet, wat Hij Zijn dienaren beval: "Het vasten is jullie voorgeschreven".']
  ],
  keycards: [
    ['definitie', 30, 'الإحسان', 'Iḥsān', ['إيصال النفع إلى الغير', 'إتقان العبادة وإكمالها', 'وأعلاه أن تعبد الله كأنك تراه'], ['anderen nut bezorgen', 'aanbidding zorgvuldig en volledig verrichten', 'het hoogste: Allah aanbidden alsof je Hem ziet']],
    ['opsomming', 31, 'من صور الإحسان', 'Vormen van iḥsān', ['للوالدين بالبر والدعاء', 'للأقارب بالصلة', 'لليتامى بحفظ أموالهم', 'للأجير بإعطائه أجره قبل أن يجف عرقه', 'للحيوان بإطعامه وعدم تحميله ما لا يطيق'], ['voor de ouders: goedheid en smeekbede', 'voor verwanten: banden onderhouden', 'voor wezen: hun bezit bewaren', 'voor de arbeider: zijn loon geven voor zijn zweet opdroogt', 'voor dieren: voeren en niet overbelasten']],
    ['onderscheid', 26, 'المسكوت عنه في العادات والعبادات', 'Het verzwegene in gewone zaken en in aanbidding', ['في العادات: الأصل الإباحة', 'في العبادات: الأصل المنع حتى يقوم الدليل'], ['in gewone zaken: in principe toegestaan', 'in aanbiddingen: in principe verboden tot er een bewijs is']]
  ],
  hadith: [
    { text: 'الدين النصيحة، قلنا: لمن؟ قال: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'تميم الداري', narratorNl: 'Tamīm ad-Dārī', nl: 'De religie is oprechte raad. Wij zeiden: voor wie? Hij zei: voor Allah, voor Zijn Boek, voor Zijn Boodschapper, voor de leiders van de moslims en voor hun gewone mensen', pages: [9] },
    { text: 'بايعت رسول الله ﷺ على إقام الصلاة، وإيتاء الزكاة، والنصح لكل مسلم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'جرير بن عبد الله', narratorNl: 'Jarīr ibn ʿAbd Allāh', nl: 'Ik heb de Boodschapper van Allah ﷺ trouw gezworen op het verrichten van het gebed, het geven van de zakāt en oprechte raad voor elke moslim', pages: [10] },
    { text: 'ثلاث لا يغل عليهن صدر مسلم: إخلاص العمل لله، ومناصحة أولي الأمر، ولزوم جماعة المسلمين', takhrij: 'رواه أحمد والترمذي، وحسنه الأرناؤوط', takhrijNl: 'Aḥmad en at-Tirmidhī; ḥasan volgens al-Arnaʾūṭ', nl: 'Drie dingen waarover het hart van een moslim geen wrok koestert: daden oprecht voor Allah doen, oprechte raad aan wie gezag hebben, en bij de gemeenschap van de moslims blijven', pages: [12] },
    { text: 'عليك السمع والطاعة في عسرك ويسرك، ومنشطك ومكرهك، وأثرة عليك', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'Je moet horen en gehoorzamen, in moeite en gemak, in wat je graag doet en wat je tegenstaat, en ook als anderen boven jou worden voorgetrokken', pages: [12] },
    { text: 'إن الدين يسر، ولن يشاد الدين أحد إلا غلبه، فسددوا وقاربوا وأبشروا، واستعينوا بالغدوة والروحة وشيء من الدلجة', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'وفي رواية له: «والقصد القصد تبلغوا».', nlNote: 'In een andere lezing bij hem: "de middenweg, de middenweg, dan bereiken jullie het doel".', nl: 'De religie is gemakkelijk; niemand overdrijft in de religie of zij overwint hem. Wees dus juist, benader het en verheug je, en zoek hulp in de ochtend, de middag en een deel van de nacht', pages: [14] },
    { text: 'إن هذا الدين متين فأوغلوا فيه برفق', takhrij: 'رواه أحمد، وقال الأرناؤوط: حسن بشواهده', takhrijNl: 'Aḥmad; volgens al-Arnaʾūṭ ḥasan door ondersteunende overleveringen', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', nl: 'Deze religie is stevig; ga er dus met zachtheid diep in', pages: [16] },
    { text: 'يسروا ولا تعسروا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Maak het gemakkelijk en maak het niet moeilijk', pages: [17] },
    { text: 'يا أيها الناس عليكم من الأعمال ما تطيقون؛ فإن الله لا يمل حتى تملوا، وإن أحب الأعمال إلى الله ما دووم عليه، وإن قل', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'O mensen, doe de daden die jullie aankunnen; Allah wordt niet moe tot jullie moe worden, en de daad die Allah het liefst is, is die welke volgehouden wordt, ook al is zij weinig', pages: [18] },
    { text: 'البر حسن الخلق، والإثم ما حاك في نفسك، وكرهت أن يطلع عليه الناس', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'النواس بن سمعان', narratorNl: 'an-Nawwās ibn Samʿān', nl: 'Vroomheid is goed karakter, en zonde is wat in je knaagt en waarvan je niet wilt dat de mensen het te weten komen', pages: [20] },
    { text: 'إن الله عز وجل فرض فرائض فلا تضيعوها، وحرم حرمات فلا تنتهكوها، وحد حدودا فلا تعتدوها، وسكت عن أشياء رحمة لكم من غير نسيان، فلا تبحثوا عنها', takhrij: 'رواه الدارقطني، وحسنه النووي', takhrijNl: 'ad-Dāraquṭnī; ḥasan volgens an-Nawawī', narrator: 'أبو ثعلبة الخشني', narratorNl: 'Abū Thaʿlaba al-Khushanī', nl: 'Allah heeft verplichtingen opgelegd, verwaarloos ze dus niet; Hij heeft dingen verboden, schend ze dus niet; Hij heeft grenzen gesteld, overschrijd ze dus niet; en Hij heeft over dingen gezwegen uit barmhartigheid voor jullie, niet uit vergeetachtigheid, onderzoek ze dus niet', pages: [24] },
    { text: 'إن أعظم المسلمين في المسلمين جرما من سأل عن شيء لم يحرم، فحرم على الناس من أجل مسألته', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De moslim die de moslims het grootste kwaad doet, is wie vraagt naar iets dat niet verboden was, waarna het de mensen verboden werd vanwege zijn vraag', pages: [25] },
    { text: 'ذروني ما تركتكم، فإنما هلك من كان قبلكم بكثرة سؤالهم واختلافهم على أنبيائهم، فإذا أمرتكم بشيء فأتوا منه ما استطعتم، وإذا نهيتكم عن شيء فدعوه', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', note: 'قاله لمن سأل عن الحج: أفي كل عام؟', nlNote: 'Gezegd tegen wie vroeg of de ḥajj elk jaar is.', nl: 'Laat mij met rust zolang ik jullie laat; wie vóór jullie waren, gingen ten onder door hun vele vragen en hun onenigheid met hun profeten. Als ik jullie iets beveel, doe ervan wat jullie kunnen, en als ik jullie iets verbied, laat het', pages: [27] },
    { text: 'إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبح، وليحد أحدكم شفرته، وليرح ذبيحته', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'شداد بن أوس', narratorNl: 'Shaddād ibn Aws', nl: 'Allah heeft voorgeschreven alles goed te doen. Als jullie doden, dood dan op een goede manier; als jullie slachten, slacht dan op een goede manier: laat ieder zijn mes slijpen en zijn slachtdier rust geven', pages: [29] }
  ],
  persons: [
    ['tamim-ad-dari', 'text', [9], 'راوي حديث النصيحة؛ كان نصرانيا فأسلم سنة ٩ هـ، وتوفي بالشام سنة ٤٠ هـ.', 'Overleveraar van de hadith over oprechte raad; was christen, werd moslim in 9 n.H. en stierf in de Shām in 40 n.H.'],
    ['muslim', 'takhrij', [9, 12, 20, 27, 29], 'روى أحاديث النصيحة والبر والإحسان وغيرها.', 'Overleverde de hadith over raad, vroomheid, iḥsān en andere.'],
    ['jarir-ibn-abdallah-al-bajali', 'text', [10], 'بايع النبي ﷺ على النصح لكل مسلم.', 'Zwoer de Profeet ﷺ trouw op oprechte raad voor elke moslim.'],
    ['ahmad-ibn-hanbal', 'takhrij', [12, 16], 'روى «ثلاث لا يغل عليهن» و«إن هذا الدين متين».', 'Overleverde "drie dingen waarover het hart geen wrok koestert" en "deze religie is stevig".'],
    ['at-tirmidhi', 'takhrij', [12], 'روى «ثلاث لا يغل عليهن».', 'Overleverde "drie dingen waarover het hart geen wrok koestert".'],
    ['al-arnaut', 'takhrij', [12, 16], 'حسن الحديثين.', 'Verklaarde beide hadith ḥasan.'],
    ['abu-hurayra', 'text', [14], 'راوي حديث «إن الدين يسر»؛ أكثر الصحابة رواية، توفي سنة ٥٩ هـ.', 'Overleveraar van "de religie is gemakkelijk"; de metgezel met de meeste overleveringen, stierf in 59 n.H.'],
    ['al-bukhari', 'takhrij', [14], 'روى حديث «إن الدين يسر».', 'Overleverde "de religie is gemakkelijk".'],
    ['umar-ibn-al-khattab', 'text', [14, 29], 'ولى أبا هريرة البحرين وشداد بن أوس حمص.', 'Benoemde Abū Hurayra over al-Baḥrayn en Shaddād ibn Aws over Ḥimṣ.'],
    ['ali-ibn-abi-talib', 'text', [15], 'أنشدوا له بيتا في السير والإدلاج.', 'Men droeg een dichtregel van hem voor over reizen in de nacht.'],
    ['anas-ibn-malik', 'text', [16], 'روى «إن هذا الدين متين».', 'Overleverde "deze religie is stevig".'],
    ['aisha', 'text', [18], 'روت «أحب الأعمال إلى الله ما دووم عليه».', 'Overleverde "de daad die Allah het liefst is, is die welke volgehouden wordt".'],
    ['an-nawwas-ibn-saman', 'text', [20], 'راوي حديث البر؛ أقام سنة بالمدينة يسأل، وتوفي بالشام سنة ٥٠ هـ.', 'Overleveraar van de hadith over vroomheid; bleef een jaar in Medina om te vragen en stierf in de Shām in 50 n.H.'],
    ['ibn-taymiyya', 'text', [22], 'بين جماع حسن الخلق مع الناس.', 'Beschreef de kern van goed karakter met mensen.'],
    ['abu-thalaba-al-khushani', 'text', [24], 'راوي حديث الفرائض؛ من أهل بيعة الرضوان، توفي بالشام سنة ٧٥ هـ.', 'Overleveraar van de hadith over de verplichtingen; zwoer trouw onder de boom en stierf in de Shām in 75 n.H.'],
    ['ad-daraqutni', 'takhrij', [24], 'روى حديث أبي ثعلبة.', 'Overleverde de hadith van Abū Thaʿlaba.'],
    ['an-nawawi', 'takhrij', [24], 'حسن حديث أبي ثعلبة.', 'Verklaarde de hadith van Abū Thaʿlaba ḥasan.'],
    ['ibn-rajab', 'text', [25], 'قال: قسم الحديث أحكام الله أربعة أقسام تجمع أحكام الدين كلها.', 'Zei dat de hadith Allahs bepalingen in vier delen verdeelt die de hele religie omvatten.'],
    ['shaddad-ibn-aws', 'text', [29], 'راوي حديث الإحسان؛ ولي حمص، وتوفي ببيت المقدس سنة ٥٨ هـ.', 'Overleveraar van de hadith over iḥsān; bestuurde Ḥimṣ en stierf in Jeruzalem in 58 n.H.'],
    ['abu-ad-darda', 'text', [29], 'قال: فقيه هذه الأمة شداد بن أوس.', 'Zei: de geleerde van deze umma is Shaddād ibn Aws.'],
    ['uthman-ibn-affan', 'text', [29], 'لما قتل اعتزل شداد الإمارة.', 'Na zijn dood trok Shaddād zich terug uit het bestuur.']
  ],
  review: [
    ['الدين النصيحة لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم.', 'De religie is oprechte raad voor Allah, Zijn Boek, Zijn Boodschapper, de leiders en de gewone moslims.'],
    ['الدين يسر، والمشقة غير المعتادة تجلب التيسير.', 'De religie is gemakkelijk; ongewone moeite brengt verlichting.'],
    ['البر حسن الخلق، والإثم ما حاك في النفس.', 'Vroomheid is goed karakter; zonde knaagt in de ziel.'],
    ['أحكام الله: فرائض ومحارم وحدود ومسكوت عنه.', 'Allahs bepalingen: verplichtingen, verboden, grenzen en het verzwegene.'],
    ['الإحسان مكتوب على كل شيء، حتى في الذبح.', 'Iḥsān is voorgeschreven in alles, zelfs bij het slachten.']
  ],
  quiz: [
    { type: 'mc', page: 9, q: ['من راوي حديث «الدين النصيحة»؟', 'Wie overleverde "de religie is oprechte raad"?'], options: [['تميم الداري', 'أبو هريرة', 'جرير بن عبد الله', 'شداد بن أوس'], ['Tamīm ad-Dārī', 'Abū Hurayra', 'Jarīr ibn ʿAbd Allāh', 'Shaddād ibn Aws']], answer: 0, explain: ['رواه مسلم عن تميم الداري.', 'Muslim overleverde het van Tamīm ad-Dārī.'] },
    { type: 'mc', page: 15, q: ['ما الدلجة؟', 'Wat is ad-dulja?'], options: [['السير آخر الليل', 'السير أول النهار', 'السير بعد الزوال', 'النوم بعد الفجر'], ['reizen aan het einde van de nacht', 'reizen aan het begin van de dag', 'reizen na de middag', 'slapen na fajr']], answer: 0, explain: ['والغدوة أول النهار والروحة آخره.', 'Ghadwa is het begin van de dag, rawḥa de tweede helft.'] },
    { type: 'tf', page: 18, q: ['المشقة المعتادة تسقط التكليف.', 'Gewone moeite heft de verplichting op.'], answer: 1, explain: ['المعتادة لا أثر لها، وغير المعتادة تجلب التيسير.', 'Gewone moeite heeft geen invloed; ongewone moeite brengt verlichting.'] },
    { type: 'mc', page: 21, q: ['ما علامتا الإثم في حديث النواس؟', 'Wat zijn de twee kenmerken van zonde in de hadith van an-Nawwās?'], options: [['ما حاك في النفس وكره أن يطلع عليه الناس', 'ما نهى عنه الوالدان وما كرهه الناس', 'ما فيه حد وما فيه كفارة', 'ما فعله الإنسان ليلا وما أخفاه'], ['wat in je knaagt en wat je niet wilt dat mensen zien', 'wat ouders verbieden en mensen afkeuren', 'wat een straf of boete heeft', 'wat \'s nachts en in het geheim gebeurt']], answer: 0, explain: ['كما في نص الحديث.', 'Zoals in de tekst van de hadith.'] },
    { type: 'mc', page: 25, q: ['إلى كم قسم قسم حديث أبي ثعلبة أحكام الله؟', 'In hoeveel delen verdeelt de hadith van Abū Thaʿlaba Allahs bepalingen?'], options: [['أربعة', 'ثلاثة', 'خمسة', 'قسمين'], ['vier', 'drie', 'vijf', 'twee']], answer: 0, explain: ['فرائض ومحارم وحدود ومسكوت عنه، كما قال ابن رجب.', 'Verplichtingen, verboden, grenzen en het verzwegene, zoals Ibn Rajab zei.'] },
    { type: 'tf', page: 26, q: ['الأصل في العبادات الإباحة حتى يقوم الدليل على المنع.', 'Bij aanbiddingen is de grondregel dat ze toegestaan zijn, tot er een bewijs is voor verbod.'], answer: 1, explain: ['الأصل في العبادات المنع حتى يقوم الدليل.', 'Bij aanbiddingen is de grondregel verbod, tot er een bewijs is.'] },
    { type: 'mc', page: 30, q: ['ما معنى «القتلة» بكسر القاف؟', 'Wat betekent al-qitla met kasra?'], options: [['الهيئة والحالة', 'المرة الواحدة', 'آلة القتل', 'القاتل'], ['de wijze en toestand', 'één keer', 'het wapen', 'de doder']], answer: 0, explain: ['وبالفتح المرة.', 'Met fatḥa: één keer.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ١٣ و١٩ و٢٣ و٢٨ و٣٢.', 'Oefeningen van het boek op p. 13, 19, 23, 28 en 32. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
