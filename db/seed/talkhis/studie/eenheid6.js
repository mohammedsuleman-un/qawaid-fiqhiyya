// Hoofdstukkaart eenheid 6 van تلخيص جمع الجوامع: الحقيقة والمجاز (p. 46–58).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p046–p058.html).
import { kaart } from './kaart.js'

export default kaart({
  unit: 6,
  subtitle: ['ستة فصول: الجمع بين الحقيقة والمجاز، أقسام الحقيقة، المجاز وعلاقاته وعلاماته، المعرّب، حمل اللفظ، والكناية والتعريض', 'Zes onderdelen: letterlijk en figuurlijk samen, soorten letterlijke betekenis, het figuurlijke met zijn verbanden en kenmerken, leenwoorden, hoe men een woord opvat, en kināya en taʿrīḍ'],
  summary: [
    'تتناول الوحدة حمل اللفظ على حقيقته ومجازه معاً، ثم تعريف الحقيقة وأقسامها اللغوية والعرفية والشرعية والخلاف في الشرعية، ثم تعريف المجاز ووقوعه وأسباب العدول إليه، وترتيبه مع النقل والاشتراك والإضمار والتخصيص، وعلاقاته، ووقوعه في الإسناد والأفعال والحروف والأعلام، وعلاماته السبع، ثم المعرّب، وحمل اللفظ على عرف المخاطِب، وتعارض المجاز الراجح والحقيقة المرجوحة، ثم الكناية والتعريض.',
    'Dit hoofdstuk gaat over een woord tegelijk letterlijk en figuurlijk opvatten; de definitie van de letterlijke betekenis (ḥaqīqa) in taal, gebruik en sharīʿa, en het verschil over de sharʿī-betekenis; de definitie van het figuurlijke (majāz), of het bestaat en waarom men ervoor kiest; de rangorde met overdracht, meerduidigheid, weglating en specificatie; de verbanden; figuurlijk taalgebruik in zinsbouw, werkwoorden, partikels en namen; de zeven kenmerken; leenwoorden (muʿarrab); dat een woord wordt opgevat naar het gebruik van de spreker; het sterke figuurlijke tegenover het zwakke letterlijke; en kināya en taʿrīḍ.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 46 إلى 58.', 'Bladzijde 46 tot 58.'],
    root: [0, 'الحقيقة والمجاز', 'Letterlijk en figuurlijk', 'الوحدة السادسة', 'Eenheid 6'],
    nodes: [
      [47, 'الحقيقة', 'Letterlijke betekenis', 'ص 47–48', 'p. 47–48', [['لغوية وعرفية وشرعية', 'taal, gebruik, sharīʿa'], ['الفرعية لا الدينية', 'bijregels, niet geloofszaken']]],
      [49, 'المجاز', 'Figuurlijke betekenis', 'ص 49–51', 'p. 49–51', [['سبق الوضع', 'eerst een letterlijke betekenis'], ['وقوعه', 'bestaat het?'], ['أسباب العدول', 'waarom men het kiest']]],
      [51, 'علاقات المجاز', 'Verbanden', 'ص 51–52', 'p. 51–52', [['المشابهة والسببية', 'gelijkenis, oorzaak'], ['الكل والبعض', 'geheel en deel']]],
      [53, 'علامات المجاز', 'Kenmerken', 'ص 53–54', 'p. 53–54', [['سبع علامات', 'zeven kenmerken'], ['اشتراط السمع', 'gehoord in de taal']]],
      [55, 'المعرّب وحمل اللفظ', 'Leenwoorden en opvatting', 'ص 55–57', 'p. 55–57', [['عرف المخاطِب', 'gebruik van de spreker'], ['المجاز الراجح', 'sterk figuurlijk']]],
      [57, 'الكناية والتعريض', 'Kināya en taʿrīḍ', 'ص 57–58', 'p. 57–58', [['كثير الرماد', '"veel as"'], ['التعريض في النكاح', 'zinspeling bij een huwelijksaanzoek']]]
    ]
  },
  points: [
    [47, 'الحقيقة لفظ مستعمل فيما وُضع له ابتداءً، وهي لغوية وعرفية (عامة وخاصة) وشرعية.', 'Ḥaqīqa: een woord gebruikt voor waarvoor het oorspronkelijk is vastgesteld; ze is talig, gebruikelijk (algemeen of vakmatig) of sharʿī.'],
    [48, 'المختار وقوع الحقيقة الشرعية الفرعية (كالصلاة) لا الدينية (كالإيمان).', 'De auteur kiest: sharʿī-betekenissen bestaan bij de bijregels (zoals ṣalāt), niet bij geloofszaken (zoals īmān).'],
    [49, 'المجاز اللفظ المستعمل بوضع ثان لعلاقة، ويجب سبق الوضع لا الاستعمال.', 'Majāz: een woord gebruikt volgens een tweede vaststelling, op grond van een verband; er moet eerst een letterlijke betekenis zijn, niet per se eerder gebruik.'],
    [49, 'المجاز واقع في اللغة والشرع، خلافاً للأستاذ والفارسي مطلقاً والظاهرية في الكتاب والسنة.', 'Het figuurlijke bestaat in taal en sharīʿa; anders dan al-Ustādh en al-Fārisī (nooit) en de Ẓāhirieten (niet in Koran en sunna).'],
    [51, 'الترتيب عند التعارض: الحقيقة ثم التخصيص ثم المجاز ثم الإضمار ثم النقل ثم الاشتراك.', 'Rangorde bij tegenstrijdigheid: letterlijk, specificatie, figuurlijk, weglating, overdracht, meerduidigheid.'],
    [53, 'يعرف المجاز بسبع علامات، منها تبادر غيره لولا القرينة وصحة النفي.', 'Het figuurlijke herkent men aan zeven kenmerken, zoals dat zonder aanwijzing iets anders opkomt, en dat men het kan ontkennen.'],
    [56, 'اللفظ محمول على عرف المخاطِب: في الشرع الشرعي، ثم العرفي العام، ثم اللغوي.', 'Een woord wordt opgevat naar het gebruik van wie spreekt: bij de Wetgever sharʿī, dan het algemene gebruik, dan de taal.'],
    [57, 'الكناية حقيقة إن أريد المعنى ولازمه، ومجاز إن لم يرد المعنى؛ والتعريض حقيقة أبداً.', 'Kināya is letterlijk als ook de eigen betekenis bedoeld is, anders figuurlijk; taʿrīḍ is altijd letterlijk.']
  ],
  terms: [
    ['الحقيقة', 'al-ḥaqīqa', 47, 'لفظ مستعمل فيما وُضع له ابتداءً.', 'Een woord gebruikt voor waarvoor het oorspronkelijk is vastgesteld.', 'كالنجم والقمر والسماء.', 'Zoals ster, maan, hemel.'],
    ['الحقيقة اللغوية', 'al-ḥaqīqa al-lughawiyya', 47, 'ما جاء في لغة العرب، كحجر وشجر ومطر.', 'Wat in de Arabische taal zo bestaat, zoals steen, boom, regen.'],
    ['الحقيقة العرفية', 'al-ḥaqīqa al-ʿurfiyya', 47, 'لفظ تعارف الناس على استعماله في معنى معين.', 'Een woord dat mensen gewoonlijk voor een bepaalde betekenis gebruiken.', 'عامة كالغائط، وخاصة بأهل فن كالرفع في النحو.', 'Algemeen, zoals ghāʾiṭ (laagte → ontlasting), of vakmatig, zoals rafʿ in de grammatica.'],
    ['الحقيقة الشرعية', 'al-ḥaqīqa ash-sharʿiyya', 48, 'ما لم يستفد اسمه إلا من الشرع، كالزكاة والحج والخلع.', 'Wat zijn naam alleen uit de sharīʿa heeft, zoals zakāt, ḥajj en khulʿ.', 'وقد يطلق "الشرعي" على المندوب والمباح.', '"Sharʿī" (gelegitimeerd) kan ook het aanbevolene en toegestane betekenen.'],
    ['المجاز', 'al-majāz', 49, 'اللفظ المستعمل بوضع ثان لعلاقة.', 'Een woord gebruikt volgens een tweede vaststelling, op grond van een verband.', 'كالأسد للرجل الشجاع، والعلاقة القوة والشجاعة.', 'Zoals "leeuw" voor een dappere man; het verband is kracht en moed.'],
    ['النقل', 'an-naql', 51, 'نقل اللفظ من حقيقته اللغوية إلى الشرع.', 'Een woord overbrengen van zijn talige naar een sharʿī-betekenis.'],
    ['الإضمار', 'al-iḍmār', 51, 'يأتي في الترتيب بعد المجاز والنقل: المجاز والنقل أولى من الإضمار.', 'Komt in de rangorde na het figuurlijke en de overdracht: die gaan vóór weglating.'],
    ['علاقة المشابهة', 'ʿalāqat al-mushābaha', 51, 'شبه في الشكل أو في صفة ظاهرة.', 'Gelijkenis in vorm of in een zichtbare eigenschap.', 'كصورة الأسد المنقوشة، والرجل الشجاع.', 'Zoals een afbeelding van een leeuw, of een dappere man.'],
    ['علاقة الاستعداد', 'ʿalāqat al-istiʿdād', 51, 'وصف الشيء بما سيؤول إليه قطعاً أو ظناً لا احتمالاً.', 'Iets noemen naar wat het zeker of waarschijnlijk wordt, niet naar wat alleen mogelijk is.', '﴿إنك ميت﴾، ﴿إني أراني أعصر خمراً﴾', '"Jij zult sterven", "ik zag mezelf wijn persen".'],
    ['علاقة المضادة', 'ʿalāqat al-muḍādda', 51, 'تسمية الشيء بضده.', 'Iets noemen naar zijn tegendeel.', '﴿فمن اعتدى عليكم فاعتدوا عليه﴾', '"Wie jullie aanvalt, valt hem aan".'],
    ['علاقة المجاورة', 'ʿalāqat al-mujāwara', 51, 'تسمية الشيء بما جاوره، كتسمية القربة راوية.', 'Iets noemen naar wat ernaast is, zoals de waterzak "rāwiya" (het lastdier).'],
    ['علاقة الزيادة والنقصان', 'az-ziyāda wa-n-nuqṣān', 52, 'الزيادة كالكاف في ﴿ليس كمثله شيء﴾، والنقصان كـ﴿واسأل القرية﴾.', 'Toevoeging, zoals het voorzetsel ka- in "niets is als Hem"; weglating, zoals "vraag de stad".'],
    ['علاقة السببية', 'ʿalāqat as-sababiyya', 52, 'إطلاق السبب على المسبب والعكس.', 'De oorzaak noemen voor het gevolg, en omgekeerd.', '﴿قد أنزلنا عليكم لباساً﴾ أي المطر؛ ورعينا الغيث أي العشب.', '"Wij hebben kleding voor jullie neergezonden": de regen; "wij lieten de regen grazen": het gras.'],
    ['علاقة الكلية والجزئية', 'al-kulliyya wa-l-juzʾiyya', 52, 'إطلاق الكل على البعض والعكس.', 'Het geheel noemen voor een deel, en omgekeerd.', '﴿يجعلون أصابعهم في آذانهم﴾ أي أناملهم.', '"Ze steken hun vingers in hun oren": de vingertoppen.'],
    ['ما بالفعل وما بالقوة', 'mā bi-l-fiʿl wa-mā bi-l-quwwa', 52, 'إطلاق الممكن على الواقع والعكس.', 'Het mogelijke noemen voor het werkelijke, en omgekeerd.', 'تسمية الأعمى بصيراً، والخمر في الدن مسكراً.', 'Een blinde "ziende" noemen; wijn in het vat "bedwelmend".'],
    ['المجاز في الإسناد', 'al-majāz fī l-isnād', 52, 'أن يكون المجاز في التركيب لا في المفردات.', 'Figuurlijk in de zinsbouw, niet in losse woorden.', '﴿وأخرجت الأرض أثقالها﴾، والمخرج حقيقة هو الله.', '"En de aarde brengt haar lasten voort"; eigenlijk brengt Allah ze voort.'],
    ['متلمح الصفة', 'mutalammaḥ aṣ-ṣifa', 53, 'العلم الموضوع لمعنى الصفة، كالأسود والحارث.', 'Een naam die een eigenschap in zich draagt, zoals al-Aswad ("de zwarte") en al-Ḥārith ("de akkerman").'],
    ['المعرّب', 'al-muʿarrab', 55, 'لفظ غير علم استعملته العرب في معنى وُضع له في غير لغتهم.', 'Een woord (geen eigennaam) dat de Arabieren gebruikten in een betekenis uit een andere taal.'],
    ['الكناية', 'al-kināya', 57, 'لفظ استعمل في معناه مراداً منه لازم المعنى.', 'Een woord gebruikt in zijn eigen betekenis, waarbij bedoeld wordt wat daaruit volgt.', 'زيد كثير الرماد: أي كريم.', '"Zayd heeft veel as": hij is gastvrij.'],
    ['التعريض', 'at-taʿrīḍ', 58, 'لفظ استعمل في معناه ليلوّح بغيره.', 'Een woord gebruikt in zijn betekenis om op iets anders te zinspelen.', 'كقوله في النكاح: إني لمثلك لراغب.', 'Zoals bij een aanzoek: "naar iemand zoals jij verlang ik".']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['الحقيقة الشرعية: ستة أقوال', 'De sharʿī-betekenis: zes meningen'],
      intro: ['ووقعت اللغوية والعرفية اتفاقاً.', 'Over de talige en gebruikelijke zijn ze het eens.'],
      nodes: [
        [48, 'غير ممكنة عقلاً', 'Rationeel onmogelijk', 'قوم', 'sommigen'],
        [48, 'ممكنة غير واقعة', 'Mogelijk, maar komt niet voor', 'القاضي وابن القشيري', 'al-Qāḍī en Ibn al-Qushayrī'],
        [48, 'وقعت مطلقاً', 'Komt voor, overal', 'الأكثر', 'de meesten'],
        [48, 'وقعت إلا الإيمان', 'Overal behalve īmān', 'لبقائه على مدلوله اللغوي', 'dat behoudt zijn taalbetekenis'],
        [48, 'التوقف', 'Geen uitspraak', 'الآمدي', 'al-Āmidī'],
        [48, 'وقعت الفرعية لا الدينية', 'Bij bijregels, niet bij geloofszaken', 'المختار: الشيرازي والإمامان وابن الحاجب', 'gekozen: ash-Shīrāzī, al-Juwaynī, ar-Rāzī, Ibn al-Ḥājib']
      ],
      page: 48
    },
    {
      type: 'steps',
      title: ['الترتيب عند التعارض', 'Rangorde bij tegenstrijdigheid'],
      intro: ['المجاز والنقل خلاف الأصل.', 'Figuurlijk en overdracht wijken af van de grondregel.'],
      nodes: [
        [51, 'الحقيقة', 'Letterlijk', 'هي الأصل', 'de grondregel'],
        [51, 'التخصيص', 'Specificatie', 'أولى من المجاز والنقل', 'gaat vóór figuurlijk en overdracht'],
        [51, 'المجاز', 'Figuurlijk'],
        [51, 'الإضمار', 'Weglating', 'قيل: المجاز أولى منه', 'volgens een mening gaat het figuurlijke voor'],
        [51, 'النقل', 'Overdracht'],
        [51, 'الاشتراك', 'Meerduidigheid', 'وأضافوا النسخ', 'ze voegden opheffing (naskh) toe']
      ],
      page: 51
    },
    {
      type: 'steps',
      title: ['علامات المجاز السبع', 'De zeven kenmerken van het figuurlijke'],
      intro: ['كما في الصفحتين 53–54.', 'Bladzijde 53–54.'],
      nodes: [
        [53, 'تبادر غيره لولا القرينة', 'Zonder aanwijzing komt iets anders op', 'رأيت أسداً عليه فرس', '"ik zag een leeuw op een paard"'],
        [53, 'صحة النفي', 'Men kan het ontkennen', 'أنت حمار: لست حماراً', '"je bent een ezel": "ik ben geen ezel"'],
        [54, 'عدم الاطراد', 'Niet overdraagbaar', 'اسأل القرية لا البساط', '"vraag de stad", niet "vraag het tapijt"'],
        [54, 'جمعه على خلاف جمع الحقيقة', 'Een ander meervoud', 'الأمر: أوامر وأمور', 'amr: awāmir (geboden) en umūr (zaken)'],
        [54, 'التزام تقييده', 'Altijd met een bepaling', 'جناح الذل، نار الحرب', '"de vleugel van nederigheid", "het vuur van de oorlog"'],
        [54, 'توقفه على المسمى الآخر', 'Hangt af van het andere benoemde', '﴿ومكروا ومكر الله﴾', '"zij smeedden een list en Allah smeedde een list"'],
        [54, 'الإطلاق على المستحيل', 'Letterlijk zou het onmogelijk zijn', '﴿واسأل القرية﴾', '"vraag de stad"']
      ],
      page: 53
    },
    {
      type: 'compare',
      title: ['حمل اللفظ على عرف المخاطِب', 'Een woord opvatten naar het gebruik van de spreker'],
      intro: ['قول الجمهور، مع خلاف الغزالي والآمدي في النفي.', 'Mening van de meerderheid; al-Ghazālī en al-Āmidī wijken af bij ontkenning.'],
      columns: [['الحالة', 'Geval'], ['الحمل', 'Opvatting']],
      rows: [
        { label: ['١', '1'], cells: [['من الشارع', 'van de Wetgever'], ['الحقيقة الشرعية', 'sharʿī']] },
        { label: ['٢', '2'], cells: [['تعذر الشرعي أو من أهل العرف', 'sharʿī kan niet, of de spreker volgt het gebruik'], ['العرفية العامة', 'algemeen gebruik']] },
        { label: ['٣', '3'], cells: [['تعذر أو من أهل اللغة', 'dat kan niet, of de spreker volgt de taal'], ['اللغوية', 'taal']] },
        { label: ['الغزالي', 'al-Ghazālī'], cells: [['في النفي', 'bij ontkenning'], ['مجمل', 'onduidelijk']] },
        { label: ['الآمدي', 'al-Āmidī'], cells: [['في النفي', 'bij ontkenning'], ['اللغوي', 'taal']] }
      ],
      page: 56
    }
  ],
  sections: [
    [46, 'الجمع بين الحقيقة والمجاز', 'Letterlijk en figuurlijk samen', 'في حمل اللفظ على حقيقته ومجازه معاً خلاف كالمشترك، كإرادة السوم والشراء بلفظ الشراء، خلافاً للقاضي الذي منعه لأنه جمع بين النقيضين.', 'Of één woord tegelijk letterlijk en figuurlijk kan gelden, daarover is verschil zoals bij meerduidigheid (bijvoorbeeld "kopen" voor onderhandelen én kopen); al-Qāḍī wees het af, want dat zou twee tegengestelden combineren.', 'ومن ثم عمّ نحو ﴿وافعلوا الخير﴾ الواجب والمندوب، خلافاً لمن خصه بالواجب، ومن قال: للقدر المشترك.', 'Daarom omvat "en doet het goede" zowel het verplichte als het aanbevolene; anders dan wie het tot het verplichte beperkt, of wie zegt: het gemeenschappelijke (verzoek in het algemeen).'],
    [47, 'تعميم المجازات', 'Meerdere figuurlijke betekenissen', 'من عمّ المشترك والحقيقة والمجاز عمّ المجازات بشرطين: أن تنعدم الحقيقة، وأن تتساوى المجازات في القوة؛ فإن رجح أحدها حُمل عليه.', 'Wie meerduidigheid en letterlijk/figuurlijk algemeen toepast, doet dat ook met meerdere figuurlijke betekenissen, mits de letterlijke onmogelijk is en de figuurlijke even sterk zijn; is er één sterker, dan geldt die.'],
    [48, 'الحقيقة الفرعية والدينية', 'Bijregels en geloofszaken', 'المختار وفاقاً للشيرازي والإمامين وابن الحاجب وقوع الفرعية (الصلاة والحج والصوم) لأنها فارقت معناها اللغوي، لا الدينية (الإيمان والكفر والنفاق) لبقائها على معناها اللغوي.', 'De auteur kiest met ash-Shīrāzī, al-Juwaynī, ar-Rāzī en Ibn al-Ḥājib: sharʿī-betekenissen bij de bijregels (gebed, ḥajj, vasten), want die verlieten hun taalbetekenis; niet bij geloofszaken (geloof, ongeloof, huichelarij), want die behouden hun taalbetekenis.', 'قيل: نسبة هذا القول لغير ابن الحاجب فيه نظر.', 'Volgens een opmerking is het twijfelachtig dit aan anderen dan Ibn al-Ḥājib toe te schrijven.'],
    [49, 'سبق الوضع والاستعمال', 'Eerst vaststelling, eerst gebruik?', 'يجب للمجاز سبق الوضع اتفاقاً، كالبحر للكريم، لا سبق الاستعمال كالغائط، وقيل مطلقاً، والأصح فيما عدا المصدر كعطشان وشبعان، أما المصدر فيشترط فيه.', 'Een figuurlijke betekenis vereist volgens iedereen een eerdere letterlijke vaststelling (zee → vrijgevige), niet per se eerder gebruik (ghāʾiṭ); volgens het juiste geldt dat behalve bij een werkwoordelijk naamwoord (maṣdar).'],
    [49, 'نفاة المجاز', 'Wie het figuurlijke ontkent', 'عندهم كل الكلام حقيقة بحسب سياقه، فـ﴿واسأل القرية﴾ يدل سياقه على أهلها. وشيخ الإسلام وتلميذه ابن القيم من نفاته: يرون التقسيم محدثاً من المعتزلة في القرن الثالث، والعرب تعرف اللفظ من سياقه، والمجاز باب دخلت منه الفرق لتأويل الصفات.', 'Voor hen is alle taal letterlijk volgens de context: "vraag de stad" betekent door de context haar bewoners. Shaykh al-Islām (Ibn Taymiyya) en zijn leerling Ibn al-Qayyim ontkennen het: de indeling is volgens hen nieuw, van de Muʿtazila in de derde eeuw; Arabieren begrijpen woorden uit hun context; en het figuurlijke werd een deur om Allahs eigenschappen te herinterpreteren.', 'ويُنسب النفي أيضاً لابن حزم وابن خويز منداد والأمين الشنقيطي.', 'Het ontkennen wordt ook toegeschreven aan Ibn Ḥazm, Ibn Khuwayz Mindād en al-Amīn ash-Shinqīṭī.'],
    [50, 'أسباب العدول إلى المجاز', 'Waarom men voor het figuurlijke kiest', 'يعدل إليه لثقل الحقيقة كالخنفقيق، أو بشاعتها كالغائط، أو جهلها، أو بلاغته كفلان بحر، أو شهرته، أو غير ذلك؛ فإن لم يوجب فالحقيقة أولى.', 'Omdat het letterlijke zwaar is (khanfaqīq voor ramp), lelijk (ghāʾiṭ), onbekend, omdat het figuurlijke welsprekender is ("hij is een zee") of bekender, of iets anders; zonder reden gaat het letterlijke voor.', 'ومؤولو الصفات يعدلون بالاستحالة العقلية، وهي متجهة إلى الكيفية لا إلى حقيقة المعنى، فلا يجوز العدول في الصفات.', 'Wie Allahs eigenschappen herinterpreteert, beroept zich op rationele onmogelijkheid; maar die gaat over het hoe, niet over de betekenis, dus mag men bij de eigenschappen niet afwijken.'],
    [50, 'ليس المجاز غالباً ولا معتمداً حيث تستحيل الحقيقة', 'Het figuurlijke overheerst niet, en geldt niet als het letterlijke onmogelijk is', 'المجاز أقل من الحقيقة استعمالاً، خلافاً لابن جني. ولا يعتمد حيث تستحيل الحقيقة: فمن قال لعبد أكبر منه سناً "أنت ابني" يريد عتقه لم يعتق، خلافاً لأبي حنيفة.', 'Het figuurlijke wordt minder gebruikt dan het letterlijke, anders dan Ibn Jinnī zegt. Het geldt niet als het letterlijke onmogelijk is: wie tegen een oudere slaaf zegt "jij bent mijn zoon" om hem vrij te laten, laat hem niet vrij; anders dan Abū Ḥanīfa.', 'وقول أبي حنيفة صحيح في كلام الشرع غير لازم في كلام البشر.', 'De mening van Abū Ḥanīfa klopt bij de woorden van de Wetgever, maar is niet bindend bij mensen.'],
    [53, 'المجاز في الأفعال والحروف والأعلام', 'Figuurlijk bij werkwoorden, partikels en namen', 'يكون في الأفعال كالماضي للمستقبل ﴿ونادى أصحاب الجنة﴾، وفي الحروف كـ"في" في ﴿ولأصلبنكم في جذوع النخل﴾ وفاقاً لابن عبد السلام والنقشواني، ومنعه الرازي في الحرف مطلقاً وفي الفعل والمشتق إلا بالتبع. ولا يكون في الأعلام، خلافاً للغزالي في متلمح الصفة.', 'Bij werkwoorden (verleden tijd voor toekomst: "en de bewoners van het Paradijs riepen"), bij partikels ("in de stammen van de palmbomen", met ʿIzz ibn ʿAbd as-Salām en an-Naqshawānī). Ar-Rāzī wees het af bij partikels, en bij werkwoorden en afgeleide woorden behalve via hun grondwoord. Niet bij eigennamen, anders dan al-Ghazālī bij namen met een eigenschap.', 'وقال بعضهم بلى، كقولك جاءني قيس أو تميم تريد طائفة منهم.', 'Sommigen zeggen: wel bij namen, zoals "Qays kwam" voor een groep van die stam.'],
    [54, 'اشتراط السمع في نوع المجاز', 'Moet het figuurlijke in de taal gehoord zijn?', 'المختار اشتراط السمع في نوع العلاقة لا في آحاد المفردات، فـ"اسأل الوادي" لا يحتاج إلى سماع بل إلى نوع العلاقة. وتوقف الآمدي، وهو كثير التوقف.', 'Gekozen: de soort verband moet in de taal bekend zijn, niet elk afzonderlijk woord; "vraag het dal" hoeft niet zo gehoord te zijn, het verband volstaat. Al-Āmidī geeft geen uitspraak, zoals vaak.'],
    [55, 'المعرّب في القرآن', 'Leenwoorden in de Koran', 'ليس في القرآن معرّب عند المصنف، وفاقاً للشافعي وابن جرير والأكثر، لقوله تعالى ﴿إنا جعلناه قرآناً عربياً﴾، إلا الأعلام كإبراهيم. وقال المخالف: فيه نحو ثلاثين لفظاً كمشكاة وسندس وإستبرق؛ فرد الأولون: هي ألفاظ مشتركة لا معربة.', 'Volgens de auteur, ash-Shāfiʿī, Ibn Jarīr en de meesten staan er geen leenwoorden in de Koran ("Wij hebben haar tot een Arabische Koran gemaakt"), behalve eigennamen zoals Ibrāhīm. Tegenstanders noemen zo’n dertig woorden (mishkāt, sundus, istabraq); de eersten antwoorden: dat zijn gedeelde woorden, geen leenwoorden.'],
    [55, 'اللفظ قبل الاستعمال', 'Een woord vóór gebruik', 'اللفظ إما حقيقة أو مجاز أو حقيقة ومجاز باعتبارين كالدابة (لغة كل ما يدب، وعرفاً الحيوان المعروف)، والأمران منتفيان قبل الاستعمال.', 'Een woord is letterlijk, figuurlijk, of beide in verschillend opzicht, zoals dābba (in de taal alles wat kruipt, in het gebruik een bepaald dier); vóór het gebruik is het geen van beide.'],
    [56, 'أمثلة حمل اللفظ على الشرعي', 'Voorbeelden van de sharʿī-opvatting', 'من حلف لا يبيع الخمر: إن حُمل على الشرعي لم يحنث لأن بيعها لا يقع شرعاً، وإن حُمل على العرف حنث. وفي «وإن كان صائماً فليصل» يُقدم الشرعي لولا نصوص أخرى تصرفه إلى الدعاء.', 'Wie zweert geen wijn te verkopen: sharʿī opgevat breekt hij de eed niet (zo’n verkoop bestaat sharʿī niet), naar het gebruik wel. In "als hij vast, laat hij dan bidden" gaat het sharʿī-gebed voor, als andere teksten het niet naar "smeekbede" brachten.'],
    [57, 'المجاز الراجح والحقيقة المرجوحة', 'Sterk figuurlijk tegenover zwak letterlijk', 'ثلاثة أقوال: تقدم الحقيقة لأنها الأصل (أبو حنيفة)، ويقدم المجاز لأنه أرجح (أبو يوسف)، والمختار: مجمل لاحتمال رجحان الطرفين.', 'Drie meningen: het letterlijke gaat voor, want dat is de grondregel (Abū Ḥanīfa); het figuurlijke, want dat is sterker (Abū Yūsuf); gekozen: het is onduidelijk, want beide kunnen sterker zijn.'],
    [57, 'ثبوت حكم يمكن كونه مراداً مجازاً', 'Een vaststaand oordeel dat figuurlijk uit een tekst kan volgen', 'التيمم للجماع ثابت بالإجماع، ويمكن أخذه مجازاً من ﴿أو لامستم النساء﴾؛ فلا يدل ذلك على أنه المراد، بل يبقى الخطاب على حقيقته (اللمس)، خلافاً للكرخي والبصري.', 'Tayammum na geslachtsgemeenschap staat vast door consensus en zou figuurlijk uit "of als jullie vrouwen hebben aangeraakt" kunnen volgen; dat betekent niet dat dat bedoeld is: de tekst blijft letterlijk (aanraken), anders dan al-Karkhī en al-Baṣrī.', 'وعند من يجيز الجمع بين الحقيقة والمجاز تحمل الآية على المعنيين، فيستدل بها على الحدثين.', 'Wie letterlijk en figuurlijk samen toelaat, leest beide betekenissen, en dus beide soorten onreinheid.']
  ],
  keycards: [
    ['opsomming', 50, 'أسباب العدول إلى المجاز', 'Redenen om figuurlijk te spreken', ['ثقل الحقيقة: الخنفقيق', 'بشاعتها: الغائط', 'جهلها عند المتكلم أو المخاطب', 'بلاغته: فلان بحر', 'شهرته'], ['Het letterlijke is zwaar: khanfaqīq', 'Lelijk: ghāʾiṭ', 'Onbekend bij spreker of hoorder', 'Welsprekender: "hij is een zee"', 'Bekender']],
    ['opsomming', 52, 'علاقات المجاز', 'Verbanden van het figuurlijke', ['المشابهة في الشكل أو صفة ظاهرة', 'باعتبار ما يكون قطعاً أو ظناً', 'المضادة', 'المجاورة', 'الزيادة والنقصان', 'السبب للمسبب', 'الكل للبعض', 'المتعلق للمتعلق', 'والعكوس، وما بالفعل على ما بالقوة'], ['Gelijkenis in vorm of zichtbare eigenschap', 'Wat het zeker of waarschijnlijk wordt', 'Tegendeel', 'Nabijheid', 'Toevoeging en weglating', 'Oorzaak voor gevolg', 'Geheel voor deel', 'Wat erbij hoort voor wat erbij hoort', 'En omgekeerd; werkelijk voor mogelijk']],
    ['onderscheid', 57, 'الكناية حقيقة ومجاز', 'Kināya letterlijk en figuurlijk', ['حقيقة: إذا أريد المعنى ولازمه، ككثير الرماد حقاً لكثرة الطبخ', 'مجاز: إذا لم يرد المعنى، ككثير الرماد ولا رماد عنده لطبخه على الكهرباء'], ['Letterlijk: als ook de eigen betekenis klopt, zoals iemand die echt veel as heeft door veel koken', 'Figuurlijk: als die niet klopt, zoals iemand op elektriciteit kookt en toch "veel as" heet']],
    ['onderscheid', 58, 'الكناية والتعريض', 'Kināya en taʿrīḍ', ['الكناية: يراد لازم المعنى، وقد تكون حقيقة أو مجازاً', 'التعريض: يلوّح بغيره، وهو حقيقة أبداً'], ['Kināya: bedoeld is wat eruit volgt; letterlijk of figuurlijk', 'Taʿrīḍ: zinspeelt op iets anders; altijd letterlijk']],
    ['opsomming', 49, 'وقوع المجاز', 'Bestaat het figuurlijke?', ['واقع مطلقاً: المصنف', 'لا يقع مطلقاً: الأستاذ والفارسي', 'لا يقع في الكتاب والسنة: الظاهرية'], ['Overal: de auteur', 'Nooit: al-Ustādh en al-Fārisī', 'Niet in Koran en sunna: de Ẓāhirieten']]
  ],
  subtleties: [
    [47, 'الحقيقة والمجاز في "افعلوا الخير"', 'Letterlijk en figuurlijk in "doet het goede"', 'الأمر حقيقة في الواجب ومجاز في المندوب، فلما رجح المصنف التعميم عمّهما اللفظ الواحد.', 'Een gebod is letterlijk voor het verplichte en figuurlijk voor het aanbevolene; omdat de auteur algemene toepassing kiest, omvat één woord beide.'],
    [48, 'الإيمان بقي على معناه اللغوي', 'Īmān behield zijn taalbetekenis', 'قال قوم: وقعت الحقيقة الشرعية إلا الإيمان، لأن الشرع لم يغير فيه شيئاً.', 'Sommigen zeggen: sharʿī-betekenissen overal behalve bij īmān, want daar veranderde de sharīʿa niets.'],
    [49, 'المصدر يشترط فيه سبق الاستعمال', 'Bij de maṣdar is eerder gebruik vereist', 'يجوز المجاز بلا سبق استعمال في غير المصدر كعطشان وشبعان ورحمان، أما المصدر فلا.', 'Zonder eerder letterlijk gebruik kan een figuurlijke betekenis bij woorden als ʿaṭshān (dorstig) en raḥmān, maar niet bij een maṣdar.'],
    [50, 'الاستحالة العقلية متجهة إلى الكيفية', 'Rationele onmogelijkheid gaat over het hoe', 'من أثبت المجاز لا يجوز له العدول إليه في الصفات، لأن ما يدعونه من الاستحالة ليس في حقيقة المعنى بل في الكيفية.', 'Ook wie het figuurlijke aanvaardt, mag Allahs eigenschappen niet figuurlijk lezen, want de beweerde onmogelijkheid zit in het hoe, niet in de betekenis.'],
    [53, 'لماذا منع الرازي المجاز في الحرف', 'Waarom ar-Rāzī het bij partikels afwees', 'لأن الحرف لا معنى له مستقلاً، فهو بحسب ما تعلق به: إن كان حقيقة فحقيقة، وإن كان مجازاً فمجاز.', 'Een partikel heeft geen eigen betekenis; het volgt waar het bij hoort: letterlijk of figuurlijk.'],
    [54, 'صحة النفي حجة لنفاة المجاز', 'Ontkenbaarheid als argument tegen het figuurlijke', 'قالوا: إذا كان المجاز يصح نفيه، فإثباته في الوحي يجوّز نفي شيء ثابت في الكتاب أو السنة.', 'Ze zeggen: als het figuurlijke ontkend kan worden, dan zou je iets wat in Koran of sunna staat mogen ontkennen.'],
    [55, 'موضع استثناء الأعلام', 'Waar de uitzondering voor namen hoort', 'قالوا: كان الأولى أن يورد استثناء الأعلام بعد قوله "وليس في القرآن".', 'Opmerking: de uitzondering voor eigennamen had beter na "staat niet in de Koran" kunnen komen.'],
    [56, 'الإثبات والنفي عند الغزالي والآمدي', 'Bevestiging en ontkenning bij al-Ghazālī en al-Āmidī', 'اتفقا في الإثبات على الشرعي، كقوله ﷺ «فإني إذاً صائم»، واختلفا في النفي كـ"لا صلاة": الغزالي مجمل، والآمدي لغوي.', 'Bij bevestiging zijn ze het eens: sharʿī ("dan vast ik"). Bij ontkenning ("geen gebed") niet: al-Ghazālī onduidelijk, al-Āmidī de taalbetekenis.']
  ],
  rules: [
    [50, 'إذا لم يوجد ما يوجب العدول فالحقيقة أولى', 'Zonder reden om af te wijken gaat het letterlijke voor'],
    [51, 'المجاز والنقل خلاف الأصل', 'Figuurlijk en overdracht wijken af van de grondregel', 'والأصل الحقيقة.', 'De grondregel is het letterlijke.'],
    [51, 'التخصيص أولى من المجاز والنقل', 'Specificatie gaat vóór figuurlijk en overdracht'],
    [56, 'اللفظ محمول على عرف المخاطِب', 'Een woord wordt opgevat naar het gebruik van de spreker', 'في الشرع الشرعي، ثم العرفي العام، ثم اللغوي.', 'Bij de Wetgever sharʿī, dan het algemene gebruik, dan de taal.'],
    [57, 'ثبوت الحكم لا يدل على أنه المراد من الخطاب مجازاً', 'Een vaststaand oordeel bewijst niet dat de tekst het figuurlijk bedoelt', '', '', '﴿أو لامستم النساء﴾ والتيمم للجماع.', '"Of als jullie vrouwen hebben aangeraakt" en tayammum na gemeenschap.']
  ],
  disputes: [
    { page: 46, q: ['هل يحمل اللفظ على حقيقته ومجازه معاً؟', 'Kan een woord tegelijk letterlijk en figuurlijk gelden?'], views: [['نعم، كالمشترك', 'Ja, zoals bij meerduidigheid'], ['القاضي: لا، لأنه جمع بين النقيضين', 'Al-Qāḍī: nee, want dat combineert tegengestelden']] },
    { page: 48, q: ['هل وقعت الحقيقة الشرعية؟', 'Bestaan sharʿī-betekenissen?'], views: [['قوم: غير ممكنة عقلاً', 'Sommigen: rationeel onmogelijk'], ['القاضي وابن القشيري: غير واقعة', 'Al-Qāḍī en Ibn al-Qushayrī: komen niet voor'], ['الأكثر: وقعت مطلقاً', 'De meesten: overal'], ['قوم: إلا الإيمان', 'Sommigen: behalve īmān'], ['الآمدي: التوقف', 'Al-Āmidī: geen uitspraak'], ['المختار: الفرعية لا الدينية', 'Gekozen: bijregels, niet geloofszaken']], preferred: ['الفرعية لا الدينية', 'Bijregels, niet geloofszaken'] },
    { page: 49, q: ['هل المجاز واقع؟', 'Bestaat het figuurlijke?'], views: [['المصنف: واقع مطلقاً', 'De auteur: overal'], ['الأستاذ والفارسي: لا مطلقاً', 'Al-Ustādh en al-Fārisī: nooit'], ['الظاهرية: لا في الكتاب والسنة', 'De Ẓāhirieten: niet in Koran en sunna'], ['شيخ الإسلام وابن القيم: نفاة المجاز', 'Ibn Taymiyya en Ibn al-Qayyim: ontkennen het']] },
    { page: 50, q: ['هل المجاز غالب على اللغات؟', 'Overheerst het figuurlijke in de taal?'], views: [['الجمهور: لا', 'Meerderheid: nee'], ['ابن جني: نعم', 'Ibn Jinnī: ja']] },
    { page: 51, q: ['هل يعتمد المجاز حيث تستحيل الحقيقة؟', 'Geldt het figuurlijke als het letterlijke onmogelijk is?'], views: [['لا: فلا يعتق من قيل له أنت ابني وهو أكبر', 'Nee: de oudere slaaf tegen wie men zegt "jij bent mijn zoon" is niet vrij'], ['أبو حنيفة: يعتمد فيعتق', 'Abū Ḥanīfa: ja, hij is vrij']] },
    { page: 53, q: ['هل يكون المجاز في الحرف والفعل والمشتق؟', 'Kan het figuurlijke bij partikels, werkwoorden en afgeleide woorden?'], views: [['نعم، وفاقاً لابن عبد السلام والنقشواني', 'Ja, met Ibn ʿAbd as-Salām en an-Naqshawānī'], ['الرازي: لا في الحرف مطلقاً، ولا في الفعل والمشتق إلا بالتبع', 'Ar-Rāzī: nooit bij partikels; bij werkwoorden en afgeleiden alleen via het grondwoord']] },
    { page: 56, q: ['على ماذا يحمل اللفظ في النفي؟', 'Hoe vat men een woord op bij ontkenning?'], views: [['الجمهور: على عرف المخاطِب', 'Meerderheid: naar het gebruik van de spreker'], ['الغزالي: مجمل', 'Al-Ghazālī: onduidelijk'], ['الآمدي: اللغوي', 'Al-Āmidī: de taalbetekenis']] },
    { page: 57, q: ['ما المقدم: المجاز الراجح أم الحقيقة المرجوحة؟', 'Wat gaat voor: sterk figuurlijk of zwak letterlijk?'], views: [['أبو حنيفة: الحقيقة', 'Abū Ḥanīfa: letterlijk'], ['أبو يوسف: المجاز', 'Abū Yūsuf: figuurlijk'], ['المختار: مجمل', 'Gekozen: onduidelijk']], preferred: ['مجمل يحتاج إلى بيان', 'Onduidelijk, uitleg nodig'] }
  ],
  pitfalls: [
    [48, 'القول إن الإيمان حقيقة شرعية منقولة عند المصنف', 'Denken dat īmān voor de auteur een overgedragen sharʿī-betekenis is', 'المصنف يرى وقوع الفرعية لا الدينية، فالإيمان باق على معناه اللغوي.', 'De auteur aanvaardt dat alleen bij bijregels; īmān behoudt zijn taalbetekenis.'],
    [49, 'الظن أن المجاز يشترط فيه سبق استعمال الحقيقة', 'Denken dat het letterlijke eerst gebruikt moet zijn', 'يجب سبق الوضع لا الاستعمال، كالغائط وُضع للمكان المنخفض ولا يستعمل له.', 'Alleen eerdere vaststelling is vereist, niet gebruik; ghāʾiṭ werd vastgesteld voor een laagte maar zo niet meer gebruikt.'],
    [51, 'تقديم المجاز على التخصيص', 'Het figuurlijke vóór specificatie plaatsen', 'التخصيص أولى من المجاز والنقل.', 'Specificatie gaat voor.'],
    [51, 'اعتبار الاحتمال في علاقة ما يؤول إليه', 'Bij "wat het wordt" ook het mogelijke meetellen', 'يكون باعتبار ما يكون قطعاً أو ظناً لا احتمالاً، لأن الاحتمال أدنى من الظن.', 'Alleen wat zeker of waarschijnlijk is, niet wat alleen mogelijk is.'],
    [58, 'جعل التعريض مجازاً', 'Taʿrīḍ figuurlijk noemen', 'التعريض حقيقة أبداً عند المصنف.', 'Taʿrīḍ is voor de auteur altijd letterlijk.']
  ],
  ayat: [
    [47, 'وافعلوا الخير', 'مثال لعموم اللفظ للحقيقة (الواجب) والمجاز (المندوب).', 'Voorbeeld van één woord voor het letterlijke (verplicht) en figuurlijke (aanbevolen).'],
    [50, 'بل يداه مبسوطتان', 'من نصوص الصفات التي أوّلها من فتح باب المجاز.', 'Een tekst over Allahs eigenschappen die door het figuurlijke werd geherinterpreteerd.'],
    [50, 'لما خلقت بيدي', 'من نصوص الصفات كذلك.', 'Idem.'],
    [51, 'إنك ميت', 'علاقة ما يؤول إليه قطعاً.', 'Verband: wat zeker komt.'],
    [51, 'إني أراني أعصر خمراً', 'علاقة ما يؤول إليه ظناً.', 'Verband: wat waarschijnlijk komt.'],
    [51, 'فمن اعتدى عليكم فاعتدوا عليه', 'علاقة المضادة.', 'Verband: tegendeel.'],
    [52, 'ليس كمثله شيء', 'علاقة الزيادة: الكاف زائدة للتأكيد.', 'Verband: toevoeging; ka- versterkt.'],
    [52, 'واسأل القرية', 'علاقة النقصان، ومن علامات المجاز الإطلاق على المستحيل وعدم الاطراد.', 'Verband: weglating; ook voorbeeld van de kenmerken "onmogelijk" en "niet overdraagbaar".'],
    [52, 'قد أنزلنا عليكم لباساً', 'إطلاق المسبب (اللباس) وإرادة السبب (المطر).', 'Het gevolg (kleding) genoemd, de oorzaak (regen) bedoeld.'],
    [52, 'يجعلون أصابعهم في آذانهم', 'إطلاق الكل على البعض: الأنامل.', 'Het geheel voor het deel: vingertoppen.'],
    [52, 'وأخرجت الأرض أثقالها', 'المجاز في الإسناد.', 'Figuurlijk in de zinsbouw.'],
    [53, 'ونادى أصحاب الجنة', 'المجاز في الأفعال: الماضي للمستقبل.', 'Figuurlijk bij werkwoorden: verleden voor toekomst.'],
    [53, 'ولأصلبنكم في جذوع النخل', 'المجاز في الحروف: "في".', 'Figuurlijk bij partikels: "in".'],
    [54, 'ومكروا ومكر الله', 'توقف المجاز على المسمى الآخر.', 'Het figuurlijke hangt af van het andere benoemde.'],
    [54, 'قل الله أسرع مكراً', 'أي من مكرهم؛ المسمى الآخر مقدر.', 'Dat wil zeggen: dan hun list; het andere is erbij gedacht.'],
    [55, 'إنا جعلناه قرآناً عربياً', 'دليل من نفى المعرّب في القرآن.', 'Bewijs voor wie leenwoorden in de Koran ontkent.'],
    [57, 'أو لامستم النساء', 'حقيقة في اللمس مجاز في الجماع.', 'Letterlijk aanraken, figuurlijk gemeenschap.']
  ],
  hadith: [
    { text: 'الحج عرفة', nl: '"De ḥajj is ʿArafa."', note: ['مثال لإطلاق الكل على البعض أو عكسه.', 'Voorbeeld van geheel en deel.'], pages: [52] },
    { text: 'إذا دُعي أحدكم إلى طعام فليجب، فإن كان مفطراً فليطعم، وإن كان صائماً فليصلّ', nl: '"Als een van jullie voor een maaltijd wordt uitgenodigd, laat hij ingaan; vast hij niet, laat hij eten; vast hij wel, laat hij bidden."', note: ['"فليصل" يتردد بين الشرعي (الصلاة) واللغوي (الدعاء).', '"Laat hij bidden" kan het gebed of een smeekbede zijn.'], pages: [56] },
    { text: 'فإني إذاً صائم', nl: '"Dan vast ik."', note: ['قاله ﷺ لما لم يجد طعاماً عند أهله؛ يحمل على الصيام الشرعي لأنه في الإثبات.', 'Zei hij ﷺ toen er thuis geen eten was; sharʿī vasten, want het is een bevestiging.'], pages: [56] }
  ],
  persons: [
    ['al-baqillani', 'text', [46, 48], 'منع الجمع بين الحقيقة والمجاز، ونفى وقوع الحقيقة الشرعية.', 'Wees letterlijk en figuurlijk samen af, en ontkende dat sharʿī-betekenissen voorkomen.'],
    ['ibn-al-qushayri-al-maliki', 'text', [48], 'نفى مع القاضي وقوع الحقيقة الشرعية.', 'Ontkende met al-Qāḍī dat sharʿī-betekenissen voorkomen.'],
    ['al-amidi', 'text', [48, 54, 56], 'توقف في الحقيقة الشرعية وفي اشتراط السمع، وقال يحمل اللفظ في النفي على اللغوي.', 'Gaf geen uitspraak over sharʿī-betekenissen en over gehoord-zijn; bij ontkenning de taalbetekenis.'],
    ['abu-ishaq-ash-shirazi', 'text', [48], 'قال بوقوع الحقيقة الشرعية الفرعية لا الدينية.', 'Sharʿī-betekenissen bij bijregels, niet bij geloofszaken.'],
    ['al-juwayni', 'text', [48], 'أحد الإمامين: الفرعية لا الدينية.', 'Een van de twee imams: bijregels, niet geloofszaken.'],
    ['fakhr-ad-din-ar-razi', 'text', [48, 53], 'الفرعية لا الدينية، ومنع المجاز في الحرف وفي الفعل والمشتق إلا بالتبع.', 'Bijregels, niet geloofszaken; geen figuurlijk bij partikels, en bij werkwoorden alleen via het grondwoord.'],
    ['ibn-al-hajib', 'text', [48], 'الفرعية لا الدينية.', 'Bijregels, niet geloofszaken.'],
    ['abu-ishaq-al-isfarayini', 'text', [49], 'نفى وقوع المجاز مطلقاً.', 'Ontkende het figuurlijke helemaal.'],
    ['abu-ali-al-farisi', 'text', [49], 'النحوي صاحب الأمالي؛ نفى وقوع المجاز مطلقاً.', 'De grammaticus; ontkende het figuurlijke helemaal.'],
    ['ibn-taymiyya', 'text', [49], 'شيخ الإسلام؛ من نفاة المجاز.', 'Shaykh al-Islām; ontkende het figuurlijke.'],
    ['ibn-hazm', 'text', [50], 'يُنسب إليه نفي المجاز.', 'Hem wordt het ontkennen van het figuurlijke toegeschreven.'],
    ['ibn-khuwayz-mandad', 'text', [50], 'يُنسب إليه نفي المجاز.', 'Hem wordt het ontkennen van het figuurlijke toegeschreven.'],
    ['ibn-jinni', 'text', [50], 'تلميذ الفارسي صاحب الخصائص؛ قال المجاز غالب على اللغات.', 'Leerling van al-Fārisī, schrijver van al-Khaṣāʾiṣ; zei dat het figuurlijke overheerst.'],
    ['abu-hanifa', 'text', [51, 57], 'قال يعتمد المجاز حيث تستحيل الحقيقة، وتقدم الحقيقة المرجوحة على المجاز الراجح.', 'Het figuurlijke geldt als het letterlijke onmogelijk is; het zwakke letterlijke gaat vóór het sterke figuurlijke.'],
    ['abu-yusuf', 'text', [57], 'تلميذ أبي حنيفة؛ يقدم المجاز الراجح.', 'Leerling van Abū Ḥanīfa; het sterke figuurlijke gaat voor.'],
    ['al-izz-ibn-abd-as-salam', 'text', [53], 'سلطان العلماء؛ قال بالمجاز في الحروف.', '"Sultan van de geleerden"; aanvaardde figuurlijk bij partikels.'],
    ['an-naqshawani', 'text', [53], 'صاحب تلخيص المحصول؛ قال بالمجاز في الحروف.', 'Schrijver van Talkhīṣ al-Maḥṣūl; aanvaardde figuurlijk bij partikels.'],
    ['al-ghazali', 'text', [53, 56], 'قال بالمجاز في الأعلام المتلمح فيها الصفة، وفي النفي اللفظ مجمل.', 'Figuurlijk bij namen met een eigenschap; bij ontkenning is het woord onduidelijk.'],
    ['ash-shafii', 'text', [55], 'ليس في القرآن معرّب.', 'Geen leenwoorden in de Koran.'],
    ['at-tabari', 'text', [55], 'ابن جرير؛ ليس في القرآن معرّب.', 'Ibn Jarīr; geen leenwoorden in de Koran.'],
    ['al-karkhi', 'text', [57], 'قال: ثبوت الحكم يدل على أنه مراد من الخطاب مجازاً.', 'Een vaststaand oordeel wijst erop dat de tekst het figuurlijk bedoelt.']
  ],
  review: [
    ['الحقيقة: لفظ مستعمل فيما وُضع له ابتداءً.', 'Ḥaqīqa: gebruikt voor de oorspronkelijke vaststelling.'],
    ['الحقيقة لغوية وعرفية وشرعية.', 'Letterlijk: talig, gebruikelijk, sharʿī.'],
    ['المختار وقوع الشرعية الفرعية لا الدينية.', 'Gekozen: sharʿī bij bijregels, niet bij geloofszaken.'],
    ['المجاز: بوضع ثان لعلاقة.', 'Majāz: tweede vaststelling, met een verband.'],
    ['يجب للمجاز سبق الوضع لا الاستعمال.', 'Eerst vaststelling, niet per se gebruik.'],
    ['المجاز واقع في اللغة والشرع.', 'Het figuurlijke bestaat in taal en sharīʿa.'],
    ['الحقيقة ثم التخصيص ثم المجاز ثم الإضمار ثم النقل ثم الاشتراك.', 'Letterlijk, specificatie, figuurlijk, weglating, overdracht, meerduidigheid.'],
    ['علامات المجاز سبع، أولها تبادر غيره لولا القرينة.', 'Zeven kenmerken; het eerste: zonder aanwijzing komt iets anders op.'],
    ['ليس في القرآن معرّب إلا الأعلام.', 'Geen leenwoorden in de Koran, behalve namen.'],
    ['اللفظ محمول على عرف المخاطِب.', 'Een woord volgt het gebruik van de spreker.'],
    ['التعريض حقيقة أبداً.', 'Taʿrīḍ is altijd letterlijk.']
  ],
  quiz: [
    { type: 'mc', page: 47, q: ['لفظ "الغائط" للبراز مثال لـ:', 'Ghāʾiṭ voor ontlasting is een voorbeeld van:'], options: [['حقيقة عرفية عامة', 'حقيقة لغوية', 'حقيقة شرعية', 'حقيقة عرفية خاصة'], ['algemeen gebruikelijke betekenis', 'taalbetekenis', 'sharʿī-betekenis', 'vakmatige betekenis']], answer: 0, explain: ['وضع لغة للمكان المنخفض وتعارف الناس على استعماله للبراز.', 'In de taal een laagte; in het gebruik ontlasting.'] },
    { type: 'mc', page: 48, q: ['ما المختار عند المصنف في الحقيقة الشرعية؟', 'Wat kiest de auteur over sharʿī-betekenissen?'], options: [['وقوع الفرعية لا الدينية', 'وقعت مطلقاً', 'غير واقعة', 'التوقف'], ['bij bijregels, niet bij geloofszaken', 'overal', 'komen niet voor', 'geen uitspraak']], answer: 0, explain: ['وفاقاً للشيرازي والإمامين وابن الحاجب.', 'Met ash-Shīrāzī, al-Juwaynī, ar-Rāzī en Ibn al-Ḥājib.'] },
    { type: 'tf', page: 49, q: ['يشترط في المجاز سبق استعمال اللفظ في حقيقته.', 'Voor het figuurlijke moet het woord eerst letterlijk gebruikt zijn.'], answer: 1, explain: ['يجب سبق الوضع لا الاستعمال.', 'Vaststelling ja, gebruik niet.'] },
    { type: 'mc', page: 49, q: ['من نفى وقوع المجاز في الكتاب والسنة فقط؟', 'Wie ontkende het figuurlijke alleen in Koran en sunna?'], options: [['الظاهرية', 'الأستاذ', 'الفارسي', 'ابن جني'], ['de Ẓāhirieten', 'al-Ustādh', 'al-Fārisī', 'Ibn Jinnī']], answer: 0, explain: ['والأستاذ والفارسي نفياه مطلقاً.', 'Al-Ustādh en al-Fārisī ontkenden het helemaal.'] },
    { type: 'mc', page: 51, q: ['أي هذه أولى من المجاز عند التعارض؟', 'Wat gaat bij tegenstrijdigheid vóór het figuurlijke?'], options: [['التخصيص', 'الاشتراك', 'النقل', 'الإضمار'], ['specificatie', 'meerduidigheid', 'overdracht', 'weglating']], answer: 0, explain: ['الترتيب: الحقيقة، التخصيص، المجاز، الإضمار، النقل، الاشتراك.', 'Letterlijk, specificatie, figuurlijk, weglating, overdracht, meerduidigheid.'] },
    { type: 'mc', page: 52, q: ['﴿قد أنزلنا عليكم لباساً﴾ مثال لعلاقة:', '"Wij hebben kleding voor jullie neergezonden" is een voorbeeld van:'], options: [['السببية', 'المجاورة', 'المضادة', 'الزيادة'], ['oorzaak en gevolg', 'nabijheid', 'tegendeel', 'toevoeging']], answer: 0, explain: ['ذكر المسبب وأراد السبب وهو المطر.', 'Het gevolg genoemd, de regen bedoeld.'] },
    { type: 'tf', page: 53, q: ['منع الرازي المجاز في الحرف مطلقاً.', 'Ar-Rāzī wees figuurlijk bij partikels helemaal af.'], answer: 0, explain: ['لأن الحرف لا معنى له مستقلاً.', 'Een partikel heeft geen eigen betekenis.'] },
    { type: 'mc', page: 54, q: ['"جناح الذل" مثال لأي علامة من علامات المجاز؟', '"De vleugel van nederigheid" is een voorbeeld van welk kenmerk?'], options: [['التزام التقييد', 'صحة النفي', 'عدم الاطراد', 'الجمع المخالف'], ['altijd met bepaling', 'ontkenbaar', 'niet overdraagbaar', 'ander meervoud']], answer: 0, explain: ['الجناح حقيقة، ومجازاً يلزم تقييده.', '"Vleugel" is letterlijk; figuurlijk heeft het een bepaling nodig.'] },
    { type: 'mc', page: 57, q: ['من قدم المجاز الراجح على الحقيقة المرجوحة؟', 'Wie liet het sterke figuurlijke voorgaan?'], options: [['أبو يوسف', 'أبو حنيفة', 'المصنف', 'الغزالي'], ['Abū Yūsuf', 'Abū Ḥanīfa', 'de auteur', 'al-Ghazālī']], answer: 0, explain: ['وأبو حنيفة الحقيقة، والمصنف مجمل.', 'Abū Ḥanīfa: letterlijk; de auteur: onduidelijk.'] },
    { type: 'tf', page: 58, q: ['التعريض قد يكون مجازاً.', 'Taʿrīḍ kan figuurlijk zijn.'], answer: 1, explain: ['التعريض حقيقة أبداً عند المصنف.', 'Voor de auteur altijd letterlijk.'] }
  ]
})
