// Hoofdstukkaart eenheid 3 van تلخيص جمع الجوامع: الصلاة في المغصوب والتكليف (p. 20–25).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p020–p025.html).
import { kaart } from './kaart.js'

export default kaart({
  unit: 3,
  subtitle: ['ستة فصول: الصلاة في المغصوب، والتكليف بالمحال، وتكليف الكفار، والمكلف به، ووقت توجه الأمر، والأمر بشيئين', 'Zes onderdelen: bidden op geroofde grond, het onmogelijke opleggen, ongelovigen en de bijregels, wat opgelegd wordt, wanneer een gebod geldt, en geboden met twee zaken'],
  summary: [
    'تتناول الوحدة الواحد بالشخص له جهتان كالصلاة في المغصوب، وحكم الخارج من المغصوب تائباً والساقط على الجريح، ثم التكليف بالمحال جوازاً ووقوعاً، وهل الشرط الشرعي شرط في صحة التكليف وتكليف الكفار بالفروع، ثم أن لا تكليف إلا بفعل، ومتى يتوجه الأمر، والتكليف مع انتفاء شرط الوقوع، وتعلق الحكم بأمرين على الترتيب أو البدل.',
    'Dit hoofdstuk gaat over één handeling met twee kanten, zoals bidden op geroofde grond; over wie berouwvol van geroofde grond wegloopt en wie op een gewonde valt; over het opleggen van het onmogelijke, als mogelijkheid en in de praktijk; over de vraag of een sharʿī-voorwaarde nodig is voor taklīf en of ongelovigen aan de bijregels gebonden zijn; dat alleen een daad opgelegd wordt; wanneer een gebod geldt; taklīf terwijl een voorwaarde zal ontbreken; en een oordeel over twee zaken, na elkaar of als alternatief.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 20 إلى 25.', 'Bladzijde 20 tot 25.'],
    root: [0, 'الصلاة في المغصوب والتكليف', 'Geroofde grond en taklīf', 'الوحدة الثالثة', 'Eenheid 3'],
    nodes: [
      [20, 'الواحد بالشخص له جهتان', 'Eén handeling, twee kanten', 'ص 20–21', 'p. 20–21', [['الصلاة في المغصوب', 'bidden op geroofde grond'], ['الخارج من المغصوب', 'van geroofde grond weglopen'], ['الساقط على الجريح', 'op een gewonde vallen']]],
      [21, 'التكليف بالمحال', 'Het onmogelijke opleggen', 'ص 21–22', 'p. 21–22', [['الجواز العقلي', 'rationeel mogelijk?'], ['الوقوع الشرعي', 'komt het voor?']]],
      [22, 'تكليف الكفار بالفروع', 'Ongelovigen en de bijregels', 'ص 22–23', 'p. 22–23', [['الشرط الشرعي', 'de sharʿī-voorwaarde'], ['خطاب التكليف والوضع', 'taklīf en waḍʿ']]],
      [23, 'المكلف به', 'Wat opgelegd wordt', 'ص 23–24', 'p. 23–24', [['لا تكليف إلا بفعل', 'alleen een daad'], ['المكلف به في النهي', 'bij een verbod']]],
      [24, 'متى يتوجه الأمر', 'Wanneer een gebod geldt', 'ص 24–25', 'p. 24–25', [['قبل المباشرة أو عندها', 'vóór of bij het beginnen'], ['انتفاء شرط الوقوع', 'als een voorwaarde zal ontbreken']]],
      [25, 'الحكم المتعلق بأمرين', 'Oordeel over twee zaken', 'ص 25', 'p. 25', [['الترتيب والبدل', 'na elkaar of als alternatief']]]
    ]
  },
  points: [
    [20, 'الواحد بالشخص لا يختلف حكمه إلا بتعدد الجهة، بخلاف الواحد بالنوع الذي يتعدد حكمه بتعدد أنواعه.', 'Eén concrete handeling kan alleen twee oordelen hebben als er twee kanten zijn; een soort (zoals "gebed") heeft verschillende oordelen per ondersoort.'],
    [20, 'الصلاة في المغصوب: عند الجمهور تصح ولا يثاب، وقيل يثاب؛ وعند القاضي والرازي لا تصح ويسقط الطلب عندها؛ وعند أحمد لا صحة ولا سقوط.', 'Bidden op geroofde grond: volgens de meerderheid geldig zonder beloning (of met, volgens een mening); al-Bāqillānī en ar-Rāzī: ongeldig, maar de plicht vervalt erbij; Aḥmad: ongeldig en de plicht vervalt niet.'],
    [21, 'الخارج من المغصوب تائباً آتٍ بواجب، وقال الجويني: مرتبك في المعصية مع انقطاع تكليف النهي عنه.', 'Wie berouwvol van geroofde grond wegloopt, doet een plicht; al-Juwaynī: hij zit nog in de zonde, maar het verbod geldt niet meer voor hem.'],
    [22, 'رجح المصنف وقوع التكليف بالممتنع لغيره لا بالذات، والراجح في الحاشية أن التكليف بالمحال لم يقع في الشرع مطلقاً.', 'De auteur kiest: het onmogelijke-door-iets-anders is opgelegd, het onmogelijke-in-zichzelf niet; de notities kiezen dat het onmogelijke in de sharīʿa helemaal niet is opgelegd.'],
    [23, 'الصحيح أن الكافر مخاطب بفروع الشريعة، والإيمان شرط صحة لا شرط وجوب.', 'Volgens het juiste wordt de ongelovige aangesproken met de bijregels; geloof is voorwaarde voor geldigheid, niet voor de plicht.'],
    [23, 'لا تكليف إلا بفعل، والمكلف به في النهي الكف أي الانتهاء.', 'Alleen een daad wordt opgelegd; bij een verbod is dat het zich inhouden.'],
    [24, 'رجح المصنف أن الأمر لا يتوجه إلا عند المباشرة، والملام قبلها على التلبس بالكف المنهي عنه.', 'De auteur kiest: het gebod geldt pas bij het beginnen; vóór die tijd wordt men verweten dat men zich inhoudt van wat geboden is.'],
    [25, 'يصح التكليف مع علم الآمر بانتفاء شرط الوقوع، وكذا مع علم المأمور في الأظهر.', 'Taklīf is geldig als de gebieder weet dat een voorwaarde zal ontbreken, en volgens de sterkste mening ook als de opgedragene het weet.']
  ],
  terms: [
    ['الواحد بالشخص', 'al-wāḥid bi-sh-shakhṣ', 20, 'الفعل المعين الذي لا يتعدد حكمه إلا بتعدد الجهة.', 'Een concrete handeling die alleen twee oordelen heeft als er twee kanten zijn.', 'كصلاة معينة في أرض مغصوبة.', 'Zoals één bepaald gebed op geroofde grond.'],
    ['الواحد بالنوع', 'al-wāḥid bi-n-nawʿ', 20, 'جنس العبادة بكل أنواعها، فيتعدد الحكم بتعدد الأنواع.', 'De soort van een handeling met al haar ondersoorten; het oordeel verschilt per ondersoort.', 'جنس الصلاة: واجبة ومستحبة ومكروهة.', 'Het gebed als soort: verplicht, aanbevolen, afgekeurd.'],
    ['الجهة', 'al-jiha', 20, 'الحالة أو الاعتبار الذي يُنظر منه إلى الفعل.', 'Het opzicht waaronder een handeling wordt bekeken.', 'الصلاة في المغصوب واجبة من جهة أنها في الذمة، ومحرمة من جهة وقوعها في المغصوب.', 'Bidden op geroofde grond is verplicht omdat het een schuld is, en verboden omdat het op geroofde grond gebeurt.'],
    ['يسقط الطلب عندها لا بها', 'yasquṭ aṭ-ṭalab ʿindahā lā bihā', 20, 'يسقط التكليف عند المعصية لا بسببها، احترازاً من جعل الحرام مسقطاً للوجوب.', 'De plicht vervalt bij de zonde, niet door de zonde; zo wordt het verbodene geen reden om een plicht te laten vervallen.', 'كوجوب الصلاة لا يسقط بالخمر وإنما عند شربها.', 'Zoals de gebedsplicht niet door wijn vervalt, maar bij het drinken ervan.'],
    ['مرتبك في المعصية', 'murtabik fī l-maʿṣiya', 21, 'قول الجويني فيمن خرج من المغصوب تائباً: مستمر في المعصية مع ارتفاع النهي عنه.', 'Al-Juwaynī over wie berouwvol wegloopt: hij zit nog in de zonde, terwijl het verbod niet meer voor hem geldt.'],
    ['التكليف بالمحال', 'at-taklīf bi-l-muḥāl', 21, 'أن يُكلَّف العبد بما لا يطيقه.', 'Iemand iets opleggen wat hij niet kan.', 'الخلاف في الجواز العقلي ثم في الوقوع الشرعي.', 'Het verschil gaat eerst over rationele mogelijkheid, dan over het daadwerkelijk voorkomen.'],
    ['المحال عادة', 'al-muḥāl ʿādatan', 21, 'ما يمتنع في العادة، كطيران الإنسان في الهواء.', 'Wat volgens de gewone gang van zaken onmogelijk is, zoals een mens die vliegt.'],
    ['المحال عقلاً', 'al-muḥāl ʿaqlan', 21, 'ما يمتنع عقلاً، كإيمان من سبق في علم الله أنه لن يؤمن.', 'Wat rationeel onmogelijk is, zoals het geloof van iemand van wie Allah weet dat hij niet zal geloven.'],
    ['المحال لذاته', 'al-muḥāl li-dhātih', 22, 'عدم إمكانية حصول الشيء لذاته عادة أو عقلاً.', 'Wat in zichzelf niet kan gebeuren, naar gewoonte of rede.', 'كأن يمشي الحجر، والجمع بين النقيضين.', 'Zoals een steen die loopt, of twee tegenstrijdige dingen tegelijk.'],
    ['المحال لغيره', 'al-muḥāl li-ghayrih', 22, 'ما امتنع لسبب خارجي لا لذاته.', 'Wat onmogelijk is door iets buiten zichzelf.', 'كإيمان أبي لهب وأبي جهل، لتعلق علم الله وإرادته بعدمه.', 'Zoals het geloof van Abū Lahab en Abū Jahl: Allah weet en wil dat het niet gebeurt.'],
    ['الشرط الشرعي', 'ash-sharṭ ash-sharʿī', 23, 'ما جعله الشرع شرطاً، كالإيمان لصحة الصلاة.', 'Wat de sharīʿa tot voorwaarde maakt, zoals geloof voor een geldig gebed.', 'عند الجمهور شرط في الأداء لا في صحة التكليف.', 'Volgens de meerderheid een voorwaarde om te verrichten, niet om aangesproken te worden.'],
    ['فروع الشريعة', 'furūʿ ash-sharīʿa', 23, 'الأحكام العملية كالصلاة والزكاة، في مقابل أصل الإيمان.', 'De praktische regels zoals gebed en zakāt, tegenover het geloof zelf.'],
    ['خطاب الوضع', 'khiṭāb al-waḍʿ', 23, 'ما يرجع إلى خطاب التكليف من أسباب وموانع، كزوال الشمس للظهر.', 'Wat bij de taklīf hoort aan oorzaken en beletsels, zoals het hoogste punt van de zon voor ẓuhr.'],
    ['الكف', 'al-kaff', 23, 'فعل يكف به النفس عن المنهي عنه، أي الانتهاء.', 'De daad waarmee men zich inhoudt van het verbodene.', 'وفاقاً للشيخ الإمام والد المصنف.', 'In lijn met de vader van de auteur.'],
    ['الانتفاء', 'al-intifāʾ', 24, 'انتفاء المنهي عنه وعدم وجوده، وهو غير الانتهاء.', 'Dat het verbodene er niet is; iets anders dan zich actief inhouden.'],
    ['المباشرة', 'al-mubāshara', 24, 'البدء في الفعل المأمور به.', 'Het daadwerkelijk beginnen aan de opgedragen daad.'],
    ['إلزاماً وإعلاماً', 'ilzāman wa-iʿlāman', 24, 'الأمر بعد دخول الوقت يلزم، وقبله يُعلِم فقط.', 'Na het begin van de tijd bindt het gebod; daarvoor informeert het alleen.'],
    ['الواجب المرتب', 'al-wājib al-murattab', 25, 'الحكم المتعلق بأمرين على الترتيب.', 'Een plicht met twee zaken in een vaste volgorde.', 'ككفارة الظهار.', 'Zoals de boete voor ẓihār.'],
    ['الواجب على البدل', 'al-wājib ʿalā l-badal', 25, 'الحكم المتعلق بأمرين على التخيير.', 'Een plicht met twee zaken als alternatief.', 'ككفارة الحنث في اليمين.', 'Zoals de boete voor het breken van een eed.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['الصلاة في المغصوب: أربعة أقوال', 'Bidden op geroofde grond: vier meningen'],
      intro: ['كما في الصفحة 20.', 'Zoals op bladzijde 20.'],
      nodes: [
        [20, 'الجمهور: تصح ولا يثاب', 'Meerderheid: geldig, geen beloning', 'تبرأ الذمة لكن وقعت مخالفة للشرع', 'de schuld is voldaan, maar het ging tegen de sharīʿa in'],
        [20, 'قول ثانٍ: تصح ويثاب', 'Tweede mening: geldig, met beloning', 'ويعاقب على الغصب لا بحرمان الثواب', 'hij wordt gestraft voor het roven, niet door verlies van beloning'],
        [20, 'القاضي والرازي: لا تصح ويسقط الطلب عندها', 'Al-Bāqillānī en ar-Rāzī: ongeldig, plicht vervalt erbij', 'كما لا يطالب بالقضاء', 'hij hoeft ook niet in te halen'],
        [20, 'أحمد: لا صحة ولا سقوط', 'Aḥmad: ongeldig en de plicht blijft', 'يطالب بالقضاء إذا ترك الأرض المغصوبة', 'hij moet inhalen zodra hij de grond verlaat']
      ],
      page: 20
    },
    {
      type: 'compare',
      title: ['التكليف بالمحال: الأقوال', 'Het onmogelijke opleggen: de meningen'],
      intro: ['الجواز عقلي، والوقوع شرعي.', 'Mogelijkheid is rationeel, voorkomen is sharʿī.'],
      columns: [['القائل', 'Wie'], ['القول', 'Mening']],
      rows: [
        { label: ['١', '1'], cells: [['جمهور الأشاعرة', 'de meeste Ashʿarieten'], ['يجوز مطلقاً', 'altijd mogelijk']] },
        { label: ['٢', '2'], cells: [['أكثر المعتزلة والأشعري وأبو حامد والغزالي وابن دقيق العيد', 'de meeste Muʿtazila, al-Ashʿarī, Abū Ḥāmid, al-Ghazālī en Ibn Daqīq al-ʿĪd'], ['يمتنع مطلقاً، إلا ما امتنع لتعلق العلم بعدم وقوعه', 'nooit, behalve wat onmogelijk is omdat Allah weet dat het niet gebeurt']] },
        { label: ['٣', '3'], cells: [['معتزلة بغداد والآمدي', 'de Muʿtazila van Bagdad en al-Āmidī'], ['يمتنع المحال لذاته فقط', 'alleen het onmogelijke-in-zichzelf niet']] },
        { label: ['٤', '4'], cells: [['إمام الحرمين', 'Imām al-Ḥaramayn'], ['يمتنع كونه مطلوباً لا ورود صيغة الطلب', 'het kan niet echt gevraagd zijn, wel in gebiedende vorm staan']] },
        { label: ['الوقوع', 'Voorkomen'], cells: [['المصنف', 'de auteur'], ['وقع الممتنع بالغير لا بالذات', 'het onmogelijke-door-iets-anders, niet het onmogelijke-in-zichzelf']] }
      ],
      page: 21
    },
    {
      type: 'tree',
      title: ['هل الكافر مخاطب بالفروع؟', 'Wordt de ongelovige met de bijregels aangesproken?'],
      intro: ['الخلاف في خطاب التكليف وما يرجع إليه من الوضع.', 'Het verschil gaat over taklīf en de waḍʿ die erbij hoort.'],
      root: [23, 'تكليف الكافر بالفروع', 'Ongelovigen en de bijregels'],
      nodes: [
        [23, 'الصحيح: مخاطب', 'Juist: ja', 'المصنف', 'de auteur'],
        [23, 'غير مخاطب مطلقاً', 'Helemaal niet', 'أبو حامد وأكثر الحنفية', 'Abū Ḥāmid en de meeste Ḥanafieten'],
        [23, 'بالنواهي دون الأوامر', 'Alleen met verboden', 'قوم', 'sommigen'],
        [23, 'المرتد فقط', 'Alleen de afvallige', 'آخرون', 'anderen'],
        [23, 'لا خلاف في الإتلافات والجنايات وآثار العقود', 'Geen verschil over schade, misdrijven en gevolgen van contracten', 'تلزمهم كالصبيان والمجانين', 'die gelden voor hen, zoals voor kinderen en krankzinnigen']
      ],
      page: 23
    },
    {
      type: 'steps',
      title: ['متى يتوجه الأمر؟', 'Wanneer geldt een gebod?'],
      intro: ['قال القرافي: أغمض مسألة في الأصول مع قلة جدواها.', 'Al-Qarāfī: de duisterste kwestie van de uṣūl, met weinig nut.'],
      nodes: [
        [24, 'الجمهور: قبل المباشرة', 'Meerderheid: al vóór het beginnen', 'بعد دخول الوقت إلزاماً وقبله إعلاماً', 'na het begin van de tijd bindend, daarvoor informerend'],
        [24, 'الأكثر: يستمر حال المباشرة', 'De meesten: het blijft tijdens het doen'],
        [24, 'الجويني والغزالي: ينقطع حال المباشرة', 'Al-Juwaynī en al-Ghazālī: het stopt tijdens het doen'],
        [24, 'قوم (والمصنف): لا يتوجه إلا عند المباشرة', 'Sommigen (en de auteur): het geldt pas bij het beginnen', 'والملام قبلها على التلبس بالكف', 'het verwijt daarvoor gaat over het zich inhouden']
      ],
      page: 24
    }
  ],
  sections: [
    [20, 'الواحد بالشخص والواحد بالنوع', 'Eén handeling en één soort', 'الواحد بالشخص لا يختلف حكمه إلا بتعدد الجهة، فنقول: هذه الصلاة من جهة كذا واجبة ومن جهة كذا حرام. أما الواحد بالنوع فجنس العبادة، يتعدد حكمه بتعدد أنواعه.', 'Eén concrete handeling heeft alleen twee oordelen vanuit twee kanten: dit gebed is in dit opzicht verplicht en in dat opzicht verboden. Een soort, zoals het gebed in het algemeen, heeft verschillende oordelen per ondersoort.'],
    [20, 'الصلاة في المغصوب', 'Bidden op geroofde grond', 'واجبة باعتبار أنها في ذمة المكلف، ومحرمة باعتبار أن أقوالها وأفعالها وقعت في المغصوب. وفيها أربعة أقوال: تصح ولا يثاب، وتصح ويثاب، ولا تصح ويسقط الطلب عندها، ولا صحة ولا سقوط.', 'Verplicht omdat het gebed een schuld van de mens is, verboden omdat het op geroofde grond gebeurt. Vier meningen: geldig zonder beloning, geldig met beloning, ongeldig maar de plicht vervalt erbij, ongeldig en de plicht blijft.', 'قولهم "عندها لا بها" احتراز من جعل الحرام مسقطاً للوجوب.', '"Erbij, niet erdoor" voorkomt dat het verbodene een plicht laat vervallen.'],
    [20, 'الخارج من المغصوب تائباً', 'Berouwvol van geroofde grond weglopen', 'آتٍ بواجب؛ وقال أبو هاشم: بمحرم لأنه ما زال يخطو في ملك غيره؛ وقال الجويني: مرتبك في المعصية مع انقطاع تكليف النهي عنه.', 'Hij doet een plicht; Abū Hāshim: iets verbodens, want hij loopt nog op andermans grond; al-Juwaynī: hij zit nog in de zonde, maar het verbod geldt niet meer.', 'قال السبكي: وهو دقيق. ومثّل له الشاطبي بمن تاب عن القتل بعد رمي السهم وقبل وقوعه.', 'As-Subkī: dat is fijnzinnig. Ash-Shāṭibī geeft als voorbeeld wie berouw heeft over doden nadat de pijl al is afgeschoten.'],
    [21, 'الساقط على جريح', 'Wie op een gewonde valt', 'سقط على جريح يقتله إن استمر، ويقتل كفؤه إن انتقل: قيل يستمر لأنه مكث لا إنشاء فعل جديد، وقيل يتخير لتساوي المفسدتين، وقال الجويني: لا حكم فيه، وتوقف الغزالي.', 'Iemand valt op een gewonde die sterft als hij blijft liggen, en een even waardige gewonde doodt als hij zich verplaatst: blijven (geen nieuwe daad), kiezen (de schade is gelijk), al-Juwaynī: hierover is geen oordeel, al-Ghazālī: geen uitspraak.', 'لما ناقشه الغزالي قال الجويني: حكم الله الأحكم، فقال الغزالي: أنا لا أفهم هذا.', 'Toen al-Ghazālī hem bevroeg, zei al-Juwaynī: "Allahs oordeel is het wijste", en al-Ghazālī zei: "Dat begrijp ik niet."'],
    [21, 'جواز التكليف بالمحال', 'Kan het onmogelijke opgelegd worden?', 'أجازه جمهور الأشاعرة مطلقاً جوازاً عقلياً، واستدلوا بقوله تعالى ﴿ربنا لا تحملنا ما لا طاقة لنا به﴾: لو لم يكن جائزاً ما سألوه أن يرفعه. ومنعه أكثر المعتزلة والأشعري وغيره، ومنع معتزلة بغداد والآمدي المحال لذاته فقط.', 'De meeste Ashʿarieten noemen het rationeel mogelijk, met als bewijs "Onze Heer, leg ons niet op waartoe wij niet in staat zijn": anders hadden ze niet gevraagd het weg te nemen. De meeste Muʿtazila, al-Ashʿarī en anderen wijzen het af; de Muʿtazila van Bagdad en al-Āmidī alleen het onmogelijke-in-zichzelf.'],
    [22, 'وقوع التكليف بالمحال', 'Is het onmogelijke ooit opgelegd?', 'رجح المصنف وقوع الممتنع بالغير لا بالذات، كتكليف أبي لهب وأبي جهل بالإيمان. والصحيح والأسلم: التكليف وقع مراداً شرعاً لا كوناً.', 'De auteur: het onmogelijke-door-iets-anders wel, zoals Abū Lahab en Abū Jahl die tot geloof geroepen werden. Juister en veiliger: de taklīf is sharʿī gewild, niet in de schepping.', 'والراجح أن التكليف بالمحال ممنوع شرعاً مطلقاً؛ والآية دعاء أجابه الله، كما في صحيح مسلم.', 'Sterker: het onmogelijke is in de sharīʿa nooit opgelegd; de aya is een smeekbede die Allah verhoord heeft, zoals in Ṣaḥīḥ Muslim.'],
    [22, 'الشرط الشرعي وصحة التكليف', 'De sharʿī-voorwaarde en taklīf', 'الأكثر: حصول الشرط الشرعي ليس شرطاً في صحة التكليف بل في الأداء؛ فالكافر مكلف بالصلاة ولا تصح منه إلا بالإيمان. والمسألة مفروضة في تكليف الكافر بالفروع.', 'De meesten: de voorwaarde is nodig om te verrichten, niet om aangesproken te worden; de ongelovige moet bidden, maar het gebed is pas geldig met geloof. De kwestie wordt bekeken aan de hand van ongelovigen en de bijregels.', 'رداً على من قال إن المحدث مكلف بالصلاة إجماعاً: الخلاف في الكافر ولا يطرد في سائر الشروط.', 'Als antwoord op wie zei dat iemand zonder wuḍūʾ volgens consensus moet bidden: het verschil gaat over de ongelovige en geldt niet voor alle voorwaarden.'],
    [23, 'محل الخلاف في تكليف الكفار', 'Waar het verschil over gaat', 'قال الشيخ الإمام: الخلاف في خطاب التكليف وما يرجع إليه من الوضع، لا في الإتلافات والجنايات وترتيب آثار العقود، فهم داخلون فيها قطعاً.', 'De vader van de auteur: het gaat om taklīf en de waḍʿ die erbij hoort, niet om schade, misdrijven en de gevolgen van contracten; daaraan zijn ze zeker gebonden.'],
    [23, 'المكلف به في النهي', 'Wat bij een verbod opgelegd is', 'لا تكليف إلا بفعل. وفي النهي: الكف (الانتهاء)، وقيل فعل الضد كالصدق بدل الكذب، وقيل الانتفاء، وقيل يشترط قصد الترك.', 'Alleen een daad wordt opgelegd. Bij een verbod: zich inhouden; of het tegendeel doen (de waarheid spreken in plaats van liegen); of dat het verbodene er niet is; of de bedoeling om te laten is vereist.', 'والصحيح أن القصد يشترط لتحصيل الثواب.', 'Juist: de intentie is nodig voor de beloning.'],
    [24, 'متى يتوجه الأمر؟', 'Wanneer geldt een gebod?', 'الجمهور: قبل المباشرة، بعد الوقت إلزاماً وقبله إعلاماً، والأكثر أنه يستمر حال المباشرة، وقال الجويني والغزالي: ينقطع. وقال قوم: لا يتوجه إلا عند المباشرة، وهو التحقيق عند المصنف.', 'Meerderheid: al vóór het beginnen, na het begin van de tijd bindend en daarvoor informerend; de meesten: het blijft tijdens het doen, al-Juwaynī en al-Ghazālī: het stopt. Sommigen: pas bij het beginnen; dat kiest de auteur.', 'لزمه: لا أفعل حتى أُكلَّف، فأجاب: الملام قبلها على التلبس بالكف المنهي عنه؛ وقيل يلام على تأخره.', 'Tegenwerping: "dan doe ik niets tot het mij opgelegd is". Zijn antwoord: vóór het beginnen wordt men verweten dat men zich inhoudt; anderen: men wordt verweten dat men uitstelt.'],
    [24, 'التكليف مع انتفاء شرط الوقوع', 'Taklīf als een voorwaarde zal ontbreken', 'ثلاث حالات: علم الآمر دون المأمور: يصح، كأمر رجل بصوم يوم علم موته قبله؛ وعلم المأمور: يصح في الأظهر، كمن علمت أنها تحيض أثناء النهار تبدأ بالصيام؛ وجهل الآمر والمأمور: يصح بالاتفاق.', 'Drie gevallen: de gebieder weet het en de opgedragene niet: geldig (vasten opgedragen aan iemand van wie bekend is dat hij eerder sterft); de opgedragene weet het: geldig volgens de sterkste mening (een vrouw die weet dat haar menstruatie die dag begint, begint toch te vasten); beiden weten het niet: geldig volgens iedereen.', 'وخالف الجويني والمعتزلة في الحالتين الأوليين. والحالة الثالثة لا تصح في حق الشارع المنزه عن الجهل.', 'Al-Juwaynī en de Muʿtazila wijzen de eerste twee af. Het derde geval kan bij Allah niet, want Hij is vrij van onwetendheid.'],
    [25, 'الحكم المتعلق بأمرين', 'Een oordeel over twee zaken', 'قد يتعلق الحكم بأمرين على الترتيب (كفارة الظهار) أو على البدل (كفارة الحنث)، فيحرم الجمع أو يباح أو يسن.', 'Een oordeel kan gaan over twee zaken na elkaar (boete voor ẓihār) of als alternatief (boete voor een gebroken eed); beide doen is dan verboden, toegestaan of aanbevolen.', 'قال والد المصنف عن مثال ندب الجمع بين خصال الكفارة: لا دليل عليه.', 'De vader van de auteur over het voorbeeld van aanbevolen combineren van boete-opties: daar is geen bewijs voor.']
  ],
  keycards: [
    ['onderscheid', 21, 'أنواع امتناع المحال', 'Soorten onmogelijkheid', ['عادة: طيران الإنسان', 'عقلاً: إيمان من علم الله أنه لن يؤمن، ويجوز التكليف به وقد وقع', 'عادة وعقلاً: الجمع بين النقيضين'], ['Naar gewoonte: een mens die vliegt', 'Rationeel: het geloof van iemand van wie Allah weet dat hij niet gelooft; dat kan opgelegd worden en is opgelegd', 'Beide: twee tegenstrijdige dingen tegelijk']],
    ['opsomming', 21, 'الخارج من المغصوب تائباً', 'Berouwvol van geroofde grond weglopen', ['آتٍ بواجب', 'أبو هاشم: بمحرم', 'الجويني: مرتبك في المعصية مع انقطاع النهي'], ['Hij doet een plicht', 'Abū Hāshim: iets verbodens', 'Al-Juwaynī: nog in de zonde, maar het verbod geldt niet meer']],
    ['opsomming', 21, 'الساقط على الجريح', 'Wie op een gewonde valt', ['يستمر: لأنه مكث لا فعل جديد', 'يتخير: لتساوي المفسدتين', 'الجويني: لا حكم فيه', 'الغزالي: توقف'], ['Blijven: geen nieuwe daad', 'Kiezen: de schade is gelijk', 'Al-Juwaynī: geen oordeel', 'Al-Ghazālī: geen uitspraak']],
    ['opsomming', 23, 'المكلف به في النهي', 'Wat bij een verbod opgelegd is', ['الكف: الانتهاء', 'فعل الضد', 'الانتفاء', 'قصد الترك'], ['Zich inhouden', 'Het tegendeel doen', 'Dat het verbodene er niet is', 'De bedoeling om te laten']],
    ['opsomming', 25, 'حالات انتفاء شرط الوقوع', 'Als een voorwaarde zal ontbreken', ['علم الآمر وحده: يصح', 'علم المأمور: يصح في الأظهر', 'جهلهما: يصح بالاتفاق، ولا يكون في حق الله'], ['Alleen de gebieder weet het: geldig', 'De opgedragene weet het: geldig volgens de sterkste mening', 'Beiden niet: geldig volgens iedereen; kan niet bij Allah']],
    ['opsomming', 25, 'الجمع في المرتب والبدل', 'Combineren bij volgorde en alternatief', ['يحرم: المذكاة والميتة (مرتب)، والزواج من كفأين (بدل)', 'يباح: الوضوء والتيمم (مرتب)، وستر العورة بثوبين (بدل)', 'يسن: خصلتان من كفارة الظهار (مرتب) أو الحنث (بدل)'], ['Verboden: geslacht en kadaver (volgorde), trouwen met twee gelijkwaardige mannen (alternatief)', 'Toegestaan: wuḍūʾ en tayammum (volgorde), de ʿawra met twee kledingstukken bedekken (alternatief)', 'Aanbevolen: twee opties van de ẓihār-boete (volgorde) of van de eed-boete (alternatief)']]
  ],
  subtleties: [
    [20, 'عندها لا بها', '"Erbij, niet erdoor"', 'عند القاضي والرازي يسقط الطلب عند الصلاة في المغصوب لا بها، لئلا يصير الحرام مسقطاً للوجوب، كما أن وجوب الصلاة لا يسقط بالخمر وإنما عند شربها.', 'Volgens al-Bāqillānī en ar-Rāzī vervalt de plicht bij het gebed op geroofde grond, niet erdoor, zodat het verbodene geen plicht laat vervallen; zoals de gebedsplicht niet door wijn vervalt, maar bij het drinken ervan.'],
    [21, 'دقة قول الجويني', 'De fijnzinnigheid van al-Juwaynī', 'جمع بين الاستمرار في المعصية وارتفاع النهي، ومثّل له الشاطبي بمن رمى السهم ثم تاب قبل وقوعه: يبقى عليه حكم السبب.', 'Hij combineert: nog in de zonde, en toch geen verbod meer. Ash-Shāṭibī: wie een pijl afschiet en berouw heeft vóór die raakt, draagt nog het gevolg van wat hij in gang zette.'],
    [21, 'الجويني يرى أنه لا تخلو واقعة من حكم', 'Al-Juwaynī vindt dat elk geval een oordeel heeft', 'ومع ذلك قال في الساقط على الجريح: لا حكم فيه؛ فلما ناقشه الغزالي قال: حكم الله الأحكم.', 'Toch zei hij over wie op een gewonde valt: geen oordeel; toen al-Ghazālī doorvroeg: "Allahs oordeel is het wijste."'],
    [21, 'وافق بعض الأشاعرة المعتزلة', 'Sommige Ashʿarieten volgen de Muʿtazila', 'في منع التكليف بالمحال وافق الأشعري نفسه وأبو حامد والغزالي وابن دقيق العيد أكثر المعتزلة، وخالفوا جمهور الأشاعرة.', 'Bij het afwijzen van het onmogelijke opleggen stonden al-Ashʿarī zelf, Abū Ḥāmid, al-Ghazālī en Ibn Daqīq al-ʿĪd aan de kant van de meeste Muʿtazila, tegen de meeste Ashʿarieten.'],
    [22, 'صيغة الطلب بلا طلب', 'Gebiedende vorm zonder echt verzoek', 'منع الجويني أن يكون المحال مطلوباً، لا أن ترد صيغة الطلب به، كقوله تعالى ﴿كونوا قردة خاسئين﴾، فهذا أمر لا يطلب منه الامتثال.', 'Al-Juwaynī wijst af dat het onmogelijke echt gevraagd wordt, niet dat het in gebiedende vorm staat, zoals "wordt verachtelijke apen": dat is geen gebod om op te volgen.'],
    [22, 'مراداً شرعاً لا كوناً', 'Sharʿī gewild, niet in de schepping', 'تكليف أبي جهل بالإيمان مراد شرعاً، وعدم إيمانه مراد كوناً؛ فلا يقال إن الله كلفه محالاً.', 'Dat Abū Jahl moest geloven, is sharʿī gewild; dat hij niet geloofde, is in de schepping gewild. Men zegt dus niet dat Allah hem het onmogelijke oplegde.'],
    [24, 'مأزق سلب التكاليف', 'Het risico dat taklīf verdwijnt', 'إذا لم يتوجه الأمر إلا عند المباشرة قال الكسول: لا أفعل حتى أُكلَّف؛ فأجاب المصنف بأن الكف المنهي عنه فعل يُلام عليه قبل المباشرة.', 'Als het gebod pas bij het beginnen geldt, zegt de luie: ik doe niets tot het mij opgelegd is. De auteur antwoordt: dat zich inhouden is zelf een verboden daad waarvoor men verweten wordt.'],
    [25, 'جهل الآمر ليس من أصول الفقه', 'Onwetendheid van de gebieder hoort niet bij de uṣūl', 'الحالة الثالثة (جهل الآمر) لا تصح في حق الشارع المنزه عن الجهل، ومثالها أمر السيد عبده بشيء يفعله غداً.', 'Het derde geval kan bij Allah niet; een voorbeeld is een heer die zijn slaaf iets voor morgen opdraagt.']
  ],
  rules: [
    [20, 'الواحد بالشخص لا يتعدد حكمه إلا بتعدد الجهة', 'Eén handeling heeft alleen twee oordelen vanuit twee kanten', '', '', 'الصلاة في المغصوب.', 'Bidden op geroofde grond.'],
    [23, 'لا تكليف إلا بفعل', 'Alleen een daad wordt opgelegd', 'حتى في النهي، فالمكلف به الكف وهو فعل.', 'Ook bij een verbod: men moet zich inhouden, en dat is een daad.'],
    [23, 'الإيمان شرط صحة لا شرط وجوب', 'Geloof is voorwaarde voor geldigheid, niet voor de plicht', 'فالكافر مكلف بالصلاة، ولا تصح منه حتى يؤمن.', 'De ongelovige moet bidden, maar het gebed is pas geldig als hij gelooft.'],
    [22, 'الله لا يكلف أحداً فوق طاقته', 'Allah legt niemand meer op dan hij kan', 'وهو الراجح في الحاشية في مسألة وقوع التكليف بالمحال.', 'Dit kiezen de notities bij de vraag of het onmogelijke is opgelegd.']
  ],
  disputes: [
    { page: 20, q: ['هل تصح الصلاة في المغصوب؟', 'Is het gebed op geroofde grond geldig?'], views: [['الجمهور: تصح ولا يثاب', 'Meerderheid: geldig, geen beloning'], ['قول: تصح ويثاب', 'Een mening: geldig, met beloning'], ['القاضي والرازي: لا تصح ويسقط الطلب عندها', 'Al-Bāqillānī en ar-Rāzī: ongeldig, de plicht vervalt erbij'], ['أحمد: لا صحة ولا سقوط', 'Aḥmad: ongeldig, de plicht blijft']], fruit: ['وجوب القضاء إذا ترك الأرض المغصوبة', 'Of hij moet inhalen nadat hij de grond verlaat'] },
    { page: 20, q: ['ما حكم مشي الخارج من المغصوب تائباً؟', 'Wat is het oordeel over het weglopen van wie berouw heeft?'], views: [['آتٍ بواجب', 'Een plicht'], ['أبو هاشم: بمحرم', 'Abū Hāshim: verboden'], ['الجويني: مرتبك في المعصية مع انقطاع النهي', 'Al-Juwaynī: nog in de zonde, zonder verbod']] },
    { page: 21, q: ['ماذا يفعل الساقط على جريح؟', 'Wat doet wie op een gewonde valt?'], views: [['يستمر', 'Blijven liggen'], ['يتخير', 'Kiezen'], ['الجويني: لا حكم فيه', 'Al-Juwaynī: geen oordeel'], ['الغزالي: التوقف', 'Al-Ghazālī: geen uitspraak']] },
    { page: 22, q: ['هل وقع التكليف بالمحال في الشرع؟', 'Is het onmogelijke in de sharīʿa opgelegd?'], views: [['المصنف: وقع الممتنع بالغير لا بالذات', 'De auteur: het onmogelijke-door-iets-anders wel, het onmogelijke-in-zichzelf niet'], ['الحاشية: ممنوع مطلقاً', 'De notities: nooit']], preferred: ['الراجح في الحاشية: لم يكلف الله أحداً فوق طاقته', 'Volgens de notities: Allah legt niemand meer op dan hij kan'] },
    { page: 23, q: ['هل الكافر مخاطب بفروع الشريعة؟', 'Wordt de ongelovige met de bijregels aangesproken?'], views: [['الصحيح: نعم', 'Juist: ja'], ['أبو حامد وأكثر الحنفية: لا مطلقاً', 'Abū Ḥāmid en de meeste Ḥanafieten: nooit'], ['قوم: بالنواهي دون الأوامر', 'Sommigen: alleen met verboden'], ['آخرون: المرتد دون الأصلي', 'Anderen: de afvallige wel, de oorspronkelijke ongelovige niet']] },
    { page: 23, q: ['ما المكلف به في النهي؟', 'Wat is bij een verbod opgelegd?'], views: [['الكف وهو الانتهاء', 'Zich inhouden'], ['فعل الضد', 'Het tegendeel doen'], ['الانتفاء', 'Dat het verbodene er niet is'], ['يشترط قصد الترك', 'Met de bedoeling om te laten']], preferred: ['الكف، والقصد شرط لتحصيل الثواب', 'Zich inhouden; de intentie is nodig voor de beloning'] },
    { page: 24, q: ['متى يتوجه الأمر إلى المكلف؟', 'Wanneer geldt een gebod voor de mens?'], views: [['الجمهور: قبل المباشرة', 'Meerderheid: al vóór het beginnen'], ['قوم: عند المباشرة فقط', 'Sommigen: pas bij het beginnen']], preferred: ['المصنف: لا يتوجه إلا عند المباشرة', 'De auteur: pas bij het beginnen'], fruit: ['قال القرافي: لا ثمرة لها في الفروع', 'Al-Qarāfī: het heeft geen gevolg voor de bijregels'] }
  ],
  pitfalls: [
    [20, 'الخلط بين الواحد بالشخص والواحد بالنوع', 'Eén handeling en één soort verwarren', 'الواحد بالنوع يتعدد حكمه بتعدد أنواعه، والواحد بالشخص لا يتعدد إلا بتعدد الجهة.', 'Een soort heeft per ondersoort een oordeel; één handeling alleen per kant.'],
    [20, 'القول إن الصلاة في المغصوب تسقط الواجب بالحرام', 'Zeggen dat het verbodene de plicht laat vervallen', 'القائلون بعدم الصحة قالوا: يسقط الطلب عندها لا بها.', 'Wie het gebed ongeldig noemt, zegt: de plicht vervalt erbij, niet erdoor.'],
    [21, 'جعل الآية دليلاً على وقوع التكليف بالمحال', 'De aya als bewijs nemen dat het onmogelijke is opgelegd', 'استدل بها جمهور الأشاعرة على الجواز العقلي، وهي دعاء أجابه الله: «قد فعلت».', 'De Ashʿarieten gebruiken haar voor rationele mogelijkheid; het is een smeekbede die Allah verhoorde.'],
    [23, 'القول إن الكافر لا يلزمه ضمان ما أتلف', 'Zeggen dat een ongelovige niet aansprakelijk is voor schade', 'الخلاف في خطاب التكليف، أما الإتلافات والجنايات وآثار العقود فتلزمه قطعاً.', 'Het verschil gaat over taklīf; schade, misdrijven en contractgevolgen gelden zeker.'],
    [24, 'الخلط بين الكف والانتفاء', 'Zich inhouden en "er niet zijn" verwarren', 'الكف فعل وهو الانتهاء، والانتفاء عدم المنهي عنه، وهو غير الانتهاء.', 'Zich inhouden is een daad; "er niet zijn" is alleen het ontbreken van het verbodene.']
  ],
  ayat: [
    [21, 'ربنا لا تحملنا ما لا طاقة لنا به', 'استدل به جمهور الأشاعرة على جواز التكليف بالمحال عقلاً، وهو دعاء أجابه الله.', 'Bewijs van de Ashʿarieten dat het onmogelijke rationeel opgelegd kan worden; volgens de notities een verhoorde smeekbede.'],
    [22, 'إنه لن يؤمن من قومك إلا من قد آمن', 'مثال للمحال لغيره: أُمر نوح بالاستمرار في الدعوة مع ذلك.', 'Voorbeeld van het onmogelijke-door-iets-anders: Nūḥ moest toch blijven oproepen.'],
    [22, 'كونوا قردة خاسئين', 'مثال لصيغة الطلب التي لا يطلب منها الامتثال.', 'Voorbeeld van gebiedende vorm zonder gebod om op te volgen.']
  ],
  hadith: [
    { text: 'قد فعلت', takhrij: ['صحيح مسلم، كما في الحاشية', 'Ṣaḥīḥ Muslim, volgens de notities'], nl: '"Dat heb Ik gedaan."', note: ['جواب الله لدعاء المؤمنين ﴿ربنا لا تحملنا ما لا طاقة لنا به﴾.', 'Allahs antwoord op de smeekbede "Onze Heer, leg ons niet op waartoe wij niet in staat zijn".'], pages: [22] }
  ],
  persons: [
    ['al-baqillani', 'text', [20], 'مع الرازي: الصلاة في المغصوب لا تصح ويسقط الطلب عندها.', 'Met ar-Rāzī: het gebed op geroofde grond is ongeldig, maar de plicht vervalt erbij.'],
    ['fakhr-ad-din-ar-razi', 'text', [20], 'مع القاضي: لا تصح ويسقط الطلب عندها.', 'Met al-Bāqillānī: ongeldig, de plicht vervalt erbij.'],
    ['ahmad-ibn-hanbal', 'text', [20], 'الصلاة في المغصوب لا صحة ولا سقوط.', 'Gebed op geroofde grond: ongeldig en de plicht blijft.'],
    ['abu-hashim-al-jubbai', 'text', [20], 'الخارج من المغصوب تائباً آتٍ بمحرم.', 'Wie berouwvol wegloopt, doet iets verbodens.'],
    ['al-juwayni', 'text', [20, 21, 22, 24, 25], 'مرتبك في المعصية، ولا حكم في الساقط على الجريح، ومنع كون المحال مطلوباً، وقال ينقطع الأمر حال المباشرة.', 'Nog in de zonde; geen oordeel over wie op een gewonde valt; het onmogelijke kan niet echt gevraagd zijn; het gebod stopt tijdens het doen.'],
    ['taj-ad-din-as-subki', 'text', [21, 22, 23], 'وصف قول الجويني بالدقة، ورجح وقوع الممتنع بالغير وتكليف الكافر بالفروع.', 'Noemde al-Juwaynī fijnzinnig, koos dat het onmogelijke-door-iets-anders opgelegd is en dat ongelovigen aan de bijregels gebonden zijn.'],
    ['ash-shatibi', 'text', [21], 'مثّل في الموافقات لبقاء حكم السبب بعد التوبة برمي السهم.', 'Gaf in al-Muwāfaqāt het voorbeeld van de afgeschoten pijl.'],
    ['al-ghazali', 'text', [21, 24], 'توقف في الساقط على الجريح، ومنع التكليف بالمحال، وقال ينقطع الأمر حال المباشرة.', 'Gaf geen uitspraak over wie op een gewonde valt, wees het onmogelijke opleggen af en zei dat het gebod tijdens het doen stopt.'],
    ['al-ashari', 'text', [21, 24], 'منع التكليف بالمحال، وحُكي عنه أن الأمر لا يتوجه إلا عند المباشرة.', 'Wees het onmogelijke opleggen af; volgens de auteur zei hij dat het gebod pas bij het beginnen geldt.'],
    ['abu-hamid-al-isfarayini', 'text', [21, 23], 'منع التكليف بالمحال، وقال الكافر غير مخاطب بالفروع.', 'Wees het onmogelijke opleggen af en zei dat de ongelovige niet met de bijregels wordt aangesproken.'],
    ['ibn-daqiq-al-id', 'text', [21], 'منع التكليف بالمحال.', 'Wees het onmogelijke opleggen af.'],
    ['al-amidi', 'text', [22], 'مع معتزلة بغداد: منع المحال لذاته وأجاز المحال لغيره.', 'Met de Muʿtazila van Bagdad: wees alleen het onmogelijke-in-zichzelf af.'],
    ['taqi-ad-din-as-subki', 'text', [23, 25], 'قال: الخلاف في خطاب التكليف لا في الإتلافات، والمكلف به في النهي الانتهاء، ولا دليل على ندب الجمع بين خصال الكفارة.', 'Zei: het verschil gaat over taklīf, niet over schade; bij een verbod is zich inhouden opgelegd; er is geen bewijs voor aanbevolen combineren van boete-opties.'],
    ['al-qarafi', 'text', [24], 'قال: مسألة توجه الأمر أغمض مسألة في الأصول مع قلة جدواها.', 'Noemde de vraag wanneer een gebod geldt de duisterste kwestie van de uṣūl, met weinig nut.'],
    ['al-baydawi', 'text', [24], 'حكى عنه المصنف أن الأمر لا يتوجه إلا عند المباشرة.', 'Volgens de auteur zei hij dat het gebod pas bij het beginnen geldt.'],
    ['muslim', 'takhrij', [22], 'في صحيحه جواب الله «قد فعلت».', 'In zijn Ṣaḥīḥ staat Allahs antwoord "Dat heb Ik gedaan".']
  ],
  review: [
    ['الواحد بالشخص لا يتعدد حكمه إلا بتعدد الجهة.', 'Eén handeling heeft alleen twee oordelen vanuit twee kanten.'],
    ['الصلاة في المغصوب تصح ولا يثاب عند الجمهور.', 'Het gebed op geroofde grond is volgens de meerderheid geldig zonder beloning.'],
    ['الخارج من المغصوب تائباً آتٍ بواجب.', 'Wie berouwvol wegloopt, doet een plicht.'],
    ['المحال لذاته ممتنع في نفسه، والمحال لغيره ممتنع لسبب خارجي.', 'Het onmogelijke-in-zichzelf kan in zichzelf niet; het andere door iets daarbuiten.'],
    ['الله لم يكلف أحداً فوق طاقته.', 'Allah heeft niemand meer opgelegd dan hij kan.'],
    ['الكافر مخاطب بالفروع على الصحيح.', 'De ongelovige wordt volgens het juiste met de bijregels aangesproken.'],
    ['لا تكليف إلا بفعل، والمكلف به في النهي الكف.', 'Alleen een daad wordt opgelegd; bij een verbod zich inhouden.'],
    ['المصنف: الأمر لا يتوجه إلا عند المباشرة.', 'De auteur: het gebod geldt pas bij het beginnen.'],
    ['يصح التكليف مع علم الآمر بانتفاء شرط الوقوع.', 'Taklīf is geldig als de gebieder weet dat een voorwaarde zal ontbreken.'],
    ['الجمع في المرتب والبدل يحرم أو يباح أو يسن.', 'Combineren bij volgorde of alternatief is verboden, toegestaan of aanbevolen.']
  ],
  quiz: [
    { type: 'mc', page: 20, q: ['قول الإمام أحمد في الصلاة في المغصوب:', 'Imam Aḥmad over het gebed op geroofde grond:'], options: [['لا صحة ولا سقوط', 'تصح ولا يثاب', 'تصح ويثاب', 'لا تصح ويسقط الطلب عندها'], ['ongeldig en de plicht blijft', 'geldig zonder beloning', 'geldig met beloning', 'ongeldig, de plicht vervalt erbij']], answer: 0, explain: ['فيطالب بالقضاء إذا ترك الأرض المغصوبة.', 'Hij moet inhalen als hij de grond verlaat.'] },
    { type: 'tf', page: 20, q: ['قال أبو هاشم: الخارج من المغصوب تائباً آتٍ بواجب.', 'Abū Hāshim zei: wie berouwvol wegloopt, doet een plicht.'], answer: 1, explain: ['قال أبو هاشم: بمحرم.', 'Abū Hāshim zei: iets verbodens.'] },
    { type: 'mc', page: 21, q: ['من الذي قال في الساقط على الجريح: لا حكم فيه؟', 'Wie zei over wie op een gewonde valt: geen oordeel?'], options: [['الجويني', 'الغزالي', 'الرازي', 'أحمد'], ['al-Juwaynī', 'al-Ghazālī', 'ar-Rāzī', 'Aḥmad']], answer: 0, explain: ['وتوقف الغزالي.', 'Al-Ghazālī gaf geen uitspraak.'] },
    { type: 'mc', page: 22, q: ['إيمان أبي لهب مثال لـ:', 'Het geloof van Abū Lahab is een voorbeeld van:'], options: [['المحال لغيره', 'المحال لذاته', 'المحال عادة فقط', 'الجائز'], ['het onmogelijke-door-iets-anders', 'het onmogelijke-in-zichzelf', 'alleen gewoontelijk onmogelijk', 'het mogelijke']], answer: 0, explain: ['امتنع لتعلق علم الله وإرادته بعدمه.', 'Onmogelijk omdat Allah weet en wil dat het niet gebeurt.'] },
    { type: 'mc', page: 22, q: ['من منع المحال لذاته فقط؟', 'Wie wees alleen het onmogelijke-in-zichzelf af?'], options: [['معتزلة بغداد والآمدي', 'جمهور الأشاعرة', 'الغزالي', 'الجويني'], ['de Muʿtazila van Bagdad en al-Āmidī', 'de meeste Ashʿarieten', 'al-Ghazālī', 'al-Juwaynī']], answer: 0, explain: ['وأجازوا المحال لغيره.', 'Het onmogelijke-door-iets-anders vonden ze wel mogelijk.'] },
    { type: 'tf', page: 23, q: ['الإيمان شرط وجوب للصلاة.', 'Geloof is een voorwaarde voor de gebedsplicht.'], answer: 1, explain: ['هو شرط صحة لا شرط وجوب.', 'Het is een voorwaarde voor geldigheid, niet voor de plicht.'] },
    { type: 'mc', page: 23, q: ['من قال: الكافر مخاطب بالنواهي دون الأوامر؟', 'Wie zei: de ongelovige wordt alleen met verboden aangesproken?'], options: [['قوم', 'أكثر الحنفية', 'المصنف', 'والد المصنف'], ['sommigen', 'de meeste Ḥanafieten', 'de auteur', 'de vader van de auteur']], answer: 0, explain: ['وأكثر الحنفية نفوا مطلقاً، والمصنف أثبت.', 'De meeste Ḥanafieten zeiden: nooit; de auteur: wel.'] },
    { type: 'mc', page: 24, q: ['ما الراجح عند المصنف في وقت توجه الأمر؟', 'Wat kiest de auteur over wanneer een gebod geldt?'], options: [['عند المباشرة فقط', 'قبل المباشرة', 'بعد الفعل', 'قبل الوقت إلزاماً'], ['pas bij het beginnen', 'al vóór het beginnen', 'na de daad', 'vóór de tijd bindend']], answer: 0, explain: ['وهو التحقيق عنده، والملام قبلها على التلبس بالكف.', 'Dat noemt hij het grondige; het verwijt daarvoor gaat over het zich inhouden.'] },
    { type: 'tf', page: 25, q: ['من علمت أنها تحيض أثناء النهار يجب عليها أن تبدأ يومها بالصيام.', 'Een vrouw die weet dat haar menstruatie die dag begint, moet toch beginnen met vasten.'], answer: 0, explain: ['مثال لعلم المأمور بانتفاء شرط الوقوع، ويصح التكليف في الأظهر.', 'Voorbeeld van de opgedragene die het weet; taklīf is volgens de sterkste mening geldig.'] },
    { type: 'mc', page: 25, q: ['الوضوء والتيمم مثال لـ:', 'Wuḍūʾ en tayammum zijn een voorbeeld van:'], options: [['إباحة الجمع في المرتب', 'تحريم الجمع في المرتب', 'ندب الجمع في البدل', 'إباحة الجمع في البدل'], ['toegestaan combineren bij volgorde', 'verboden combineren bij volgorde', 'aanbevolen combineren bij alternatief', 'toegestaan combineren bij alternatief']], answer: 0, explain: ['ومثال الإباحة في البدل ستر العورة بثوبين.', 'Toegestaan bij alternatief: de ʿawra met twee kledingstukken bedekken.'] }
  ]
})
