// Hoofdstukkaart bij التفسير (٣), eenheid 2: سورة البروج (lessen 4–6, boek p. 19–30).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. De uitspraak
// van al-Ḥasan al-Baṣrī (p. 24) staat in het boek zonder bron en staat alleen als citaat in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '4',
  unit: 2,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '19–30',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة البروج', 'Soera al-Burūj'],
  subtitle: ['ثلاثة دروس مجموعة في صفحة واحدة', 'Drie lessen samen op één pagina'],
  summary: [
    'سورة مكية تبدأ بقسم بالسماء ذات البروج واليوم الموعود والشاهد والمشهود، ثم تقص خبر أصحاب الأخدود الذين أحرقوا المؤمنين، وتتوعد الفاتنين وتبشر المؤمنين، وتذكر من أسماء الله وصفاته، ثم تذكر بهلاك فرعون وثمود، وتختم بأن القرآن مجيد في لوح محفوظ.',
    'Een Mekkaanse soera die opent met een eed bij de hemel met de sterrenbeelden, de beloofde Dag, de getuige en het getuigde. Daarna vertelt zij over de mensen van de greppel die gelovigen verbrandden, dreigt zij de vervolgers en verheugt zij de gelovigen, noemt zij namen en eigenschappen van Allah, herinnert zij aan de ondergang van Firʿawn en Thamūd, en eindigt zij met de edele Koran op een bewaarde tafel.'
  ],
  map: {
    title: ['سورة البروج في خريطة واحدة', 'Soera al-Burūj in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة البروج', 'Soera al-Burūj'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['القسم', 'De eed'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 20, children: [['السماء ذات البروج', 'de hemel met de sterrenbeelden'], ['اليوم الموعود', 'de beloofde Dag'], ['شاهد ومشهود', 'getuige en getuigde']] },
      { label: ['أصحاب الأخدود', 'De mensen van de greppel'], sub: ['الآيات ٤–٩', 'vers 4–9'], page: 21, children: [['النار ذات الوقود', 'het vuur met brandstof'], ['قعود وشهود', 'zij zaten erbij en keken toe'], ['ما نقموا منهم إلا الإيمان', 'hun enige "schuld" was geloof']] },
      { label: ['وعيد ووعد', 'Dreiging en belofte'], sub: ['الآيتان ١٠–١١', 'vers 10–11'], page: 24, children: [['عذاب جهنم وعذاب الحريق', 'straf van de Hel en van het brandende vuur'], ['الفوز الكبير', 'de grote overwinning']] },
      { label: ['أسماء الله وصفاته', 'Namen en eigenschappen van Allah'], sub: ['الآيات ١٢–١٦', 'vers 12–16'], page: 25, children: [['البطش الشديد', 'een harde greep'], ['الغفور الودود', 'de Vergevende, de Liefdevolle'], ['فعال لما يريد', 'doet wat Hij wil']] },
      { label: ['حديث الجنود', 'Het verhaal van de legers'], sub: ['الآيات ١٧–٢٢', 'vers 17–22'], page: 28, children: [['فرعون وثمود', 'Firʿawn en Thamūd'], ['قرآن مجيد', 'een edele Koran'], ['لوح محفوظ', 'een bewaarde tafel']] }
    ]
  },
  points: [
    [19, 'كان النبي ﷺ يقرأ في العشاء الآخرة بالسماء ذات البروج والسماء والطارق.', 'De Profeet ﷺ las bij het laatste ʿishāʾ "Bij de hemel met de sterrenbeelden" en "Bij de hemel en de nachtelijke bezoeker".'],
    [20, 'اليوم الموعود يوم القيامة بإجماع المفسرين.', 'De beloofde Dag is de Opstandingsdag, met consensus van de uitleggers.'],
    [20, 'أقوال المفسرين في الشاهد والمشهود تجتمع في أن الله أقسم بكل شاهد وكل مشهود.', 'De meningen over de getuige en het getuigde komen samen in: Allah zweert bij elke getuige en elk getuigde.'],
    [21, 'أصحاب الأخدود كفار حفروا أخدودا وأحرقوا فيه المؤمنين ليردوهم عن دينهم، وهم قعود يشهدون.', 'De mensen van de greppel waren ongelovigen die een greppel groeven en daarin gelovigen verbrandden om hen van hun godsdienst af te brengen, terwijl zij erbij zaten en toekeken.'],
    [24, 'فتح الله باب التوبة للفاتنين: ﴿ثم لم يتوبوا﴾؛ والإصرار على الكفر أشد من فتنة المؤمنين.', 'Allah liet de deur van berouw open voor de vervolgers: "en daarna geen berouw tonen"; volharden in ongeloof is erger dan het vervolgen van gelovigen.'],
    [25, 'لهم عذاب جهنم لكفرهم، وعذاب الحريق زيادة لأنهم أحرقوا المؤمنين.', 'Zij krijgen de straf van de Hel om hun ongeloof, en de straf van het brandende vuur erbij omdat zij gelovigen verbrandden.'],
    [26, 'قد يسلط الله أعداءه على أوليائه لحكمة، فيعظم أجر المصابين ويستدرج المعتدين.', 'Allah kan zijn vijanden met wijsheid laten heersen over zijn vrienden: de getroffenen krijgen grote beloning en de agressors worden geleidelijk gegrepen.'],
    [30, 'اللوح المحفوظ لم يثبت في مكانه ولا صفته شيء، والغيب لا يؤخذ إلا من القرآن والسنة الصحيحة.', 'Over de plaats of vorm van de bewaarde tafel is niets vastgesteld; het ongeziene komt alleen uit de Koran en de authentieke sunna.']
  ],
  terms: [
    ['البروج', 'al-burūj', 20, 'منازل الشمس والقمر، أو النجوم العظام؛ سميت بذلك لارتفاعها وظهورها.', 'De posities van zon en maan, of de grote sterren; zo genoemd om hun hoogte en zichtbaarheid.'],
    ['اليوم الموعود', 'al-yawm al-mawʿūd', 20, 'يوم القيامة.', 'De Opstandingsdag.'],
    ['الشاهد', 'ash-shāhid', 20, 'كل شاهد صادق، كالنبي ﷺ والأمة والجوارح والملائكة.', 'Elke ware getuige, zoals de Profeet ﷺ, deze gemeenschap, de ledematen en de engelen.'],
    ['قتل', 'qutila', 21, 'لعن وطرد؛ دعاء عليهم.', 'Vervloekt en verdreven; een verwensing tegen hen.'],
    ['الأخدود', 'al-ukhdūd', 21, 'الشق العظيم المستطيل في الأرض كالخندق.', 'Een lange, grote kloof in de grond, zoals een gracht.'],
    ['فتنوا', 'fatanū', 24, 'أحرقوا بالنار؛ وقيل: صدوهم عن دينهم.', 'Verbrandden met vuur; volgens anderen: brachten hen van hun godsdienst af.'],
    ['البطش', 'al-baṭsh', 25, 'الأخذ بعنف.', 'Met geweld grijpen.'],
    ['الغفور', 'al-ghafūr', 25, 'من المغفرة: ستر الذنب والتجاوز عنه.', 'Van maghfira: de zonde bedekken en er niet over afrekenen.'],
    ['الودود', 'al-wadūd', 26, 'من الود وهو خالص المحبة؛ يحب ويحب.', 'Van wudd, zuivere liefde: Hij wordt bemind en Hij bemint.'],
    ['المجيد', 'al-majīd', 26, 'الواسع الصفات العظيم.', 'Ruim in eigenschappen en groots.'],
    ['محيط', 'muḥīṭ', 29, 'الإحاطة بالشيء: حصره من جميع جوانبه؛ فلا يفوتون علمه ولا قدرته.', 'Iets omvatten aan alle kanten; zij ontsnappen niet aan zijn kennis of macht.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['من الشهود', 'Wie getuigen'],
      intro: ['أمثلة الكتاب لقوله ﴿وشاهد﴾ مع أدلتها.', 'De voorbeelden van het boek bij "en een getuige", met bewijs.'],
      nodes: [
        [20, 'النبي ﷺ', 'De Profeet ﷺ', 'النساء ٤١', 'an-Nisāʾ 4:41'],
        [20, 'هذه الأمة', 'Deze gemeenschap', 'البقرة ١٤٣', 'al-Baqara 2:143'],
        [20, 'الجوارح', 'De ledematen', 'النور ٢٤', 'an-Nūr 24:24'],
        [20, 'الملائكة', 'De engelen', 'النساء ١٦٦', 'an-Nisāʾ 4:166']
      ]
    },
    {
      type: 'compare',
      title: ['فرعون وثمود', 'Firʿawn en Thamūd'],
      intro: ['خبر الجنود في الآيتين ١٧–١٨.', 'Het verhaal van de legers in vers 17–18.'],
      columns: [['الهلاك', 'Ondergang'], ['من نجا', 'Wie gered werd']],
      rows: [
        { label: ['فرعون', 'Firʿawn'], cells: [['أهلك هو وجنوده', 'vernietigd met zijn leger'], ['بنو إسرائيل', 'de Banū Isrāʾīl']] },
        { label: ['ثمود', 'Thamūd'], cells: [['أهلكوا جميعا', 'allen vernietigd'], ['صالح ومن آمن معه', 'Ṣāliḥ en wie met hem geloofde']] }
      ],
      page: 28
    }
  ],
  sections: [
    [22, 'لماذا ذكرت الصفات الثلاث؟', 'Waarom drie eigenschappen?', 'العزيز الحميد الذي له ملك السماوات والأرض: تبين أن ما نقموه منهم هو عين ما يستحق الحمد.', 'De Machtige, de Geprezene, die het koningschap bezit: het laat zien dat wat zij hun kwalijk namen juist lof verdient.'],
    [24, 'كرم الله', 'De vrijgevigheid van Allah', 'قال الحسن البصري: انظروا إلى هذا الكرم والجود، قتلوا أولياءه وهو يدعوهم إلى التوبة والمغفرة.', 'Al-Ḥasan al-Baṣrī zei: kijk naar deze vrijgevigheid; zij doodden zijn vrienden en Hij roept hen op tot berouw en vergeving.'],
    [26, 'لفظ الحريق', 'Het woord "brandend vuur"', 'ذكر الحريق مع دخوله في جهنم ليقابل نار الأخدود بلفظ مثله، وبينهما فرق عظيم.', 'Het brandende vuur wordt apart genoemd, hoewel het in de Hel begrepen is, als tegenhanger van het vuur van de greppel, met hetzelfde woord maar een groot verschil.'],
    [29, 'مجد القرآن', 'De eer van de Koran', 'القرآن مجيد رفيع القدر، ومن حمله وعمل به نال المجد والرفعة في الدنيا والآخرة.', 'De Koran is edel en van hoge rang; wie hem draagt en ernaar handelt krijgt eer en verheffing in deze wereld en de volgende.']
  ],
  keycards: [
    ['opsomming', 29, 'معاني الاستفهام في القرآن', 'Betekenissen van de vraagvorm in de Koran', ['التقرير', 'التوبيخ', 'العتاب', 'التعجب', 'التهويل', 'الحث', 'التحقير', 'الإخبار', 'الاستبعاد'], ['bevestigen', 'berispen', 'verwijten', 'verbazing', 'het geweldige benadrukken', 'aansporen', 'kleineren', 'meedelen', 'onwaarschijnlijk noemen']],
    ['opsomming', 26, 'حكم تسليط الأعداء على الأولياء', 'De wijsheid als vijanden over Allahs vrienden heersen', ['يعظم أجر المصابين', 'يمهل المعتدين ثم يستدرجهم من حيث لا يعلمون'], ['de getroffenen krijgen grote beloning', 'de agressors krijgen uitstel en worden geleidelijk gegrepen zonder het te merken']]
  ],
  hadith: [
    { text: 'أن رسول الله ﷺ كان يقرأ في العشاء الآخرة بالسماء ذات البروج والسماء والطارق', takhrij: 'رواه أحمد والترمذي والنسائي وصححه الألباني', takhrijNl: 'Aḥmad, at-Tirmidhī en an-Nasāʾī; al-Albānī noemde hem authentiek', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De Boodschapper van Allah ﷺ las bij het laatste ʿishāʾ "Bij de hemel met de sterrenbeelden" en "Bij de hemel en de nachtelijke bezoeker"', pages: [19] }
  ],
  persons: [
    ['abu-hurayra', 'text', [19], 'روى قراءة النبي ﷺ بالبروج والطارق في العشاء.', 'Overleverde dat de Profeet ﷺ al-Burūj en aṭ-Ṭāriq in het ʿishāʾ las.'],
    ['ahmad-ibn-hanbal', 'takhrij', [19], 'روى الحديث في مسنده.', 'Overleverde de hadith in zijn Musnad.'],
    ['at-tirmidhi', 'takhrij', [19], 'روى الحديث.', 'Overleverde de hadith.'],
    ['an-nasai', 'takhrij', [19], 'روى الحديث.', 'Overleverde de hadith.'],
    ['al-albani', 'takhrij', [19], 'صحح الحديث.', 'Noemde de hadith authentiek.'],
    ['al-hasan-al-basri', 'text', [24], 'تعجب من كرم الله الذي يدعو قتلة أوليائه إلى التوبة.', 'Verwonderde zich over Allahs vrijgevigheid, die de moordenaars van zijn vrienden tot berouw oproept.']
  ],
  review: [
    ['أقسم الله بالسماء ذات البروج واليوم الموعود وبكل شاهد ومشهود.', 'Allah zweert bij de hemel met de sterrenbeelden, de beloofde Dag en elke getuige en elk getuigde.'],
    ['أصحاب الأخدود أحرقوا المؤمنين لإيمانهم بالله العزيز الحميد.', 'De mensen van de greppel verbrandden gelovigen om hun geloof in de Machtige, de Geprezene.'],
    ['باب التوبة مفتوح حتى لمن فتن المؤمنين.', 'De deur van berouw staat open, zelfs voor wie gelovigen vervolgde.'],
    ['بطش الله شديد، وهو الغفور الودود الفعال لما يريد.', 'Allahs greep is hard, en Hij is de Vergevende, de Liefdevolle, die doet wat Hij wil.'],
    ['القرآن مجيد في لوح محفوظ، ولا يثبت في صفة اللوح إلا ما جاء في الوحي.', 'De Koran is edel op een bewaarde tafel; over die tafel geldt alleen wat de openbaring zegt.']
  ],
  quiz: [
    { type: 'mc', page: 20, q: ['ما المراد باليوم الموعود؟', 'Wat is de beloofde Dag?'], options: [['يوم القيامة', 'يوم عرفة', 'يوم الجمعة', 'يوم بدر'], ['de Opstandingsdag', 'de dag van ʿArafa', 'de vrijdag', 'de dag van Badr']], answer: 0, explain: ['بإجماع المفسرين.', 'Met consensus van de uitleggers.'] },
    { type: 'mc', page: 21, q: ['ماذا نقم أصحاب الأخدود من المؤمنين؟', 'Wat namen de mensen van de greppel de gelovigen kwalijk?'], options: [['إيمانهم بالله', 'أخذ أموالهم', 'قتال ملكهم', 'سرقة طعامهم'], ['hun geloof in Allah', 'het afnemen van hun bezit', 'strijd tegen hun koning', 'diefstal van voedsel']], answer: 0, explain: ['﴿وما نقموا منهم إلا أن يؤمنوا بالله العزيز الحميد﴾.', '"Zij namen hun niets kwalijk behalve dat zij in Allah geloofden."'] },
    { type: 'tf', page: 24, q: ['قوله ﴿ثم لم يتوبوا﴾ يدل على أن التوبة كانت ممكنة للفاتنين.', '"En daarna geen berouw tonen" wijst erop dat berouw voor de vervolgers mogelijk was.'], answer: 0, explain: ['فتح الله لهم باب التوبة.', 'Allah liet voor hen de deur van berouw open.'] },
    { type: 'mc', page: 26, q: ['ما معنى الودود؟', 'Wat betekent al-Wadūd?'], options: [['المحب المحبوب', 'الشديد البطش', 'الواسع الصفات', 'الساتر للذنب'], ['die bemint en bemind wordt', 'met een harde greep', 'ruim in eigenschappen', 'die de zonde bedekt']], answer: 0, explain: ['من الود وهو خالص المحبة.', 'Van wudd: zuivere liefde.'] },
    { type: 'mc', page: 28, q: ['من نجا مع صالح؟', 'Wie werden met Ṣāliḥ gered?'], options: [['من آمن معه', 'بنو إسرائيل', 'قوم فرعون', 'أصحاب الأخدود'], ['wie met hem geloofde', 'de Banū Isrāʾīl', 'het volk van Firʿawn', 'de mensen van de greppel']], answer: 0, explain: ['أهلكت ثمود ونجا صالح ومن آمن معه.', 'Thamūd werd vernietigd; Ṣāliḥ en wie met hem geloofde werden gered.'] },
    { type: 'tf', page: 30, q: ['ثبت أن اللوح المحفوظ في جبهة إسرافيل.', 'Het staat vast dat de bewaarde tafel op het voorhoofd van Isrāfīl is.'], answer: 1, explain: ['لم يثبت من ذلك شيء.', 'Daarvan is niets vastgesteld.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٢٣ و٢٧ و٣٠.', 'Oefeningen van het boek op p. 23, 27 en 30. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
