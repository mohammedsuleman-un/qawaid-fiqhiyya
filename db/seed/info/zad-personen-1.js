// Biografie-concepten voor personen uit ZAD niveau 1 (Geloofsleer en Arabisch), samengevat uit al-Aʿlām.
import { loc, bio, big } from './bio.js'

export default [
  bio('hudhayfa-ibn-al-yaman', loc(2, 171, 1437),
    'حذيفة بن حِسل بن جابر العبسي، أبو عبد الله، واليمان لقب أبيه حسل (ت ٣٦ هـ): صحابي، من الولاة الشجعان الفاتحين. كان صاحب سرّ النبي ﷺ في المنافقين، لم يعلمهم أحد غيره. ولّاه عمر على المدائن فأصلح بلادها، وهاجم نهاوند سنة ٢٢ هـ، وفتح الدينور وماه سندان وهمذان والري.',
    'Ḥudhayfa ibn Ḥisl ibn Jābir al-ʿAbsī, Abū ʿAbd Allāh; al-Yamān was de bijnaam van zijn vader Ḥisl (overleden 36 AH): metgezel, moedig gouverneur en veroveraar. Hij was de vertrouweling van de Profeet ﷺ over de huichelaars: niemand anders kende hun namen. ʿUmar maakte hem gouverneur van al-Madāʾin, dat hij goed bestuurde; in 22 AH trok hij op tegen Nihāwand en hij veroverde ad-Dīnawar, Māh Sandān, Hamadhān en Rayy.'),
  bio('thawban', loc(2, 102, 1229),
    'ثوبان بن يجدد، أبو عبد الله (ت ٥٤ هـ): مولى رسول الله ﷺ، أصله من أهل السراة بين مكة واليمن. اشتراه النبي ﷺ ثم أعتقه، فلم يزل يخدمه إلى أن مات، ثم خرج إلى الشام فنزل الرملة، ثم انتقل إلى حمص فابتنى فيها دارًا وتوفي بها. له ١٢٨ حديثًا.',
    'Thawbān ibn Yujdud, Abū ʿAbd Allāh (overleden 54 AH): vrijgelatene van de Boodschapper van Allah ﷺ, afkomstig uit as-Sarāt tussen Mekka en Jemen. De Profeet ﷺ kocht hem en liet hem vrij, en hij bleef hem dienen tot diens overlijden. Daarna ging hij naar de Levant, woonde in ar-Ramla en later in Ḥimṣ, waar hij een huis bouwde en overleed. Van hem zijn 128 hadith overgeleverd.'),
  bio('abdallah-ibn-amr', loc(4, 111, 3299),
    'عبد الله بن عمرو بن العاص القرشي (٧ ق هـ – ٦٥ هـ): صحابي من النسّاك، من أهل مكة. كان يكتب في الجاهلية ويحسن السريانية، وأسلم قبل أبيه، واستأذن رسول الله ﷺ في أن يكتب ما يسمع منه فأذن له. وكان كثير العبادة حتى قال له النبي ﷺ: «إن لجسدك عليك حقًا». حمل راية أبيه يوم اليرموك، وعمي في آخر حياته. له ٧٠٠ حديث.',
    'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ al-Qurashī (7 jaar vóór de hijra – 65 AH): vrome metgezel uit Mekka. Hij kon al vóór de islam schrijven en kende Syrisch, werd moslim vóór zijn vader en vroeg de Profeet ﷺ toestemming om op te schrijven wat hij van hem hoorde, wat hem werd toegestaan. Hij aanbad zo veel dat de Profeet ﷺ hem zei: "Je lichaam heeft recht op jou." Bij Yarmūk droeg hij het vaandel van zijn vader; op het eind van zijn leven werd hij blind. Van hem zijn 700 hadith overgeleverd.'),
  big('aisha', loc(3, 240, 2638), {
    sum: 'عائشة بنت أبي بكر الصديق، من قريش (٩ ق هـ – ٥٨ هـ): أم المؤمنين، أفقه نساء المسلمين وأعلمهن بالدين والأدب. كانت تُكنى بأم عبد الله.',
    tl: [['9 ق هـ', 'وُلدت.'], ['2', 'تزوجها النبي ﷺ في السنة الثانية بعد الهجرة، فكانت أحب نسائه إليه وأكثرهن رواية للحديث عنه.'], ['—', 'كان أكابر الصحابة يسألونها عن الفرائض فتجيبهم.'], ['58', 'توفيت في المدينة.']],
    works: ['رُوي عنها ٢٢١٠ أحاديث', 'ولها خطب ومواقف، وكانت تُنشد الشعر في كل أمر يحدث لها'],
    role: 'هي من أكثر الصحابة رواية للحديث، ومرجع لكبار الصحابة في الفرائض والفقه. وكان مسروق إذا روى عنها يقول: حدثتني الصديقة بنت الصديق.'
  }, {
    sum: 'ʿĀʾisha bint Abī Bakr aṣ-Ṣiddīq, van Quraysh (9 jaar vóór de hijra – 58 AH): moeder van de gelovigen, de meest onderlegde vrouw onder de moslims in fiqh, religie en letterkunde. Haar kunya was Umm ʿAbd Allāh.',
    tl: [['9 v.H.', 'Geboren.'], ['2', 'Trouwde in het tweede jaar na de hijra met de Profeet ﷺ; zij was hem het liefst van zijn vrouwen en overleverde van hen de meeste hadith van hem.'], ['—', 'De grote metgezellen stelden haar vragen over het erfrecht, die zij beantwoordde.'], ['58', 'Overleden in Medina.']],
    works: ['Van haar zijn 2210 hadith overgeleverd', 'Zij hield toespraken en citeerde bij elke gebeurtenis poëzie'],
    role: 'Zij is een van de metgezellen die de meeste hadith overleverden en een autoriteit voor de grote metgezellen in erfrecht en fiqh. Masrūq zei als hij van haar overleverde: "De waarachtige, dochter van de waarachtige, vertelde mij."'
  }),
  bio('imran-ibn-husayn', loc(5, 70, 4168),
    'عمران بن حصين بن عبيد، أبو نجيد الخزاعي (ت ٥٢ هـ): من علماء الصحابة. أسلم عام خيبر سنة ٧ هـ، وكانت معه راية خزاعة يوم فتح مكة. بعثه عمر إلى أهل البصرة ليفقههم، وولّاه زياد قضاءها، وتوفي بها. وهو ممن اعتزل حرب صفين. له في كتب الحديث ١٣٠ حديثًا.',
    'ʿImrān ibn Ḥuṣayn ibn ʿUbayd, Abū Nujayd al-Khuzāʿī (overleden 52 AH): een van de geleerde metgezellen. Hij werd moslim in het jaar van Khaybar (7 AH) en droeg het vaandel van Khuzāʿa bij de verovering van Mekka. ʿUmar stuurde hem naar Baṣra om de mensen daar de religie te leren; hij werd er rechter en overleed er. Hij hield zich afzijdig van de strijd bij Ṣiffīn. In de hadithboeken staan 130 hadith van hem.'),
  big('muawiya-ibn-abi-sufyan', loc(7, 261, 6715), {
    sum: 'معاوية بن أبي سفيان صخر بن حرب بن أمية القرشي الأموي (٢٠ ق هـ – ٦٠ هـ): الصحابي، مؤسس الدولة الأموية في الشام، وكان فصيحًا حليمًا وقورًا.',
    tl: [['20 ق هـ', 'وُلد بمكة.'], ['8', 'أسلم يوم فتح مكة، وتعلم الكتابة والحساب فجعله رسول الله ﷺ في كتّابه.'], ['—', 'في خلافة أبي بكر كان على مقدمة جيش أخيه يزيد في فتح صيداء وعرقة وجبيل وبيروت.'], ['—', 'ولّاه عمر الأردن ثم دمشق، وجمع له عثمان الديار الشامية كلها.'], ['41', 'سلّم إليه الحسن بن علي الخلافة.'], ['48', 'حاصر القسطنطينية برًا وبحرًا.'], ['60', 'مات في دمشق.']],
    works: ['له ١٣٠ حديثًا، اتفق البخاري ومسلم على أربعة منها'],
    role: 'هو من كتّاب رسول الله ﷺ، ومن عظماء الفاتحين، وأول مسلم ركب البحر للغزو، وأول من جعل دمشق مقر خلافة.'
  }, {
    sum: 'Muʿāwiya ibn Abī Sufyān Ṣakhr ibn Ḥarb ibn Umayya al-Qurashī al-Umawī (20 jaar vóór de hijra – 60 AH): metgezel en grondlegger van de Umayyadische staat in de Levant; welbespraakt, mild en waardig.',
    tl: [['20 v.H.', 'Geboren in Mekka.'], ['8', 'Werd moslim op de dag van de verovering van Mekka; hij leerde schrijven en rekenen en de Profeet ﷺ maakte hem een van zijn schrijvers.'], ['—', 'Onder Abū Bakr leidde hij de voorhoede van het leger van zijn broer Yazīd bij de verovering van Sidon, ʿIrqa, Byblos en Beiroet.'], ['—', 'ʿUmar maakte hem gouverneur van Jordanië en daarna Damascus; ʿUthmān gaf hem de hele Levant.'], ['41', 'Al-Ḥasan ibn ʿAlī droeg het kalifaat aan hem over.'], ['48', 'Belegerde Constantinopel over land en over zee.'], ['60', 'Overleden in Damascus.']],
    works: ['Van hem zijn 130 hadith overgeleverd, waarvan al-Bukhārī en Muslim er vier gemeenschappelijk hebben'],
    role: 'Hij was een van de schrijvers van de Profeet ﷺ en een groot veroveraar, de eerste moslim die ter zee ten strijde trok, en de eerste die Damascus tot zetel van het kalifaat maakte.'
  }),
  big('ibn-masud', loc(4, 137, 3377), {
    sum: 'عبد الله بن مسعود بن غافل بن حبيب الهذلي، أبو عبد الرحمن (ت ٣٢ هـ): صحابي، من أكابرهم فضلًا وعقلًا وقربًا من رسول الله ﷺ، من أهل مكة.',
    tl: [['—', 'من السابقين إلى الإسلام، وأول من جهر بقراءة القرآن بمكة.'], ['—', 'كان خادم رسول الله ﷺ الأمين، وصاحب سرّه، ورفيقه في حله وترحاله وغزواته.'], ['—', 'ولي بعد وفاة النبي ﷺ بيت مال الكوفة.'], ['32', 'قدم المدينة في خلافة عثمان، فتوفي فيها عن نحو ستين عامًا.']],
    works: ['له ٨٤٨ حديثًا', 'وأورد الجاحظ في «البيان والتبيين» خطبة له ومختارات من كلامه'],
    role: 'نظر إليه عمر يومًا فقال: وعاء مُلئ علمًا. وهو من أقرب الصحابة إلى رسول الله ﷺ، وأول من جهر بالقرآن في مكة.'
  }, {
    sum: 'ʿAbd Allāh ibn Masʿūd ibn Ghāfil ibn Ḥabīb al-Hudhalī, Abū ʿAbd ar-Raḥmān (overleden 32 AH): een van de grootste metgezellen in deugd, verstand en nabijheid tot de Boodschapper van Allah ﷺ, uit Mekka.',
    tl: [['—', 'Een van de eersten die de islam aannamen en de eerste die in Mekka hardop de Koran reciteerde.'], ['—', 'Was de betrouwbare dienaar van de Boodschapper van Allah ﷺ, zijn vertrouweling en zijn metgezel thuis, op reis en op veldtocht.'], ['—', 'Beheerde na het overlijden van de Profeet ﷺ de staatskas van Kūfa.'], ['32', 'Kwam tijdens het kalifaat van ʿUthmān naar Medina en overleed daar, ongeveer zestig jaar oud.']],
    works: ['Van hem zijn 848 hadith overgeleverd', 'Al-Jāḥiẓ nam in al-Bayān wa-t-tabyīn een toespraak en uitspraken van hem op'],
    role: 'ʿUmar zei eens over hem: "Een vat gevuld met kennis." Hij was een van de metgezellen die het dichtst bij de Boodschapper van Allah ﷺ stonden, en de eerste die in Mekka hardop de Koran reciteerde.'
  }),
  big('muadh-ibn-jabal', loc(7, 258, 6704), {
    sum: 'معاذ بن جبل بن عمرو بن أوس الأنصاري الخزرجي، أبو عبد الرحمن (٢٠ ق هـ – ١٨ هـ): صحابي جليل، كان أعلم الأمة بالحلال والحرام، وأحد الستة الذين جمعوا القرآن على عهد النبي ﷺ.',
    tl: [['—', 'أسلم وهو فتى، وآخى النبي ﷺ بينه وبين جعفر بن أبي طالب، وشهد العقبة مع الأنصار السبعين.'], ['—', 'شهد بدرًا وأحدًا والخندق والمشاهد كلها مع رسول الله ﷺ.'], ['—', 'بعثه رسول الله ﷺ بعد غزوة تبوك قاضيًا ومرشدًا لأهل اليمن، فبقي فيها إلى أن توفي النبي ﷺ.'], ['—', 'كان مع أبي عبيدة في غزو الشام، فلما أصيب أبو عبيدة في طاعون عمواس استخلفه.'], ['18', 'توفي بناحية الأردن في العام نفسه.']],
    works: ['له ١٥٧ حديثًا'],
    role: 'كان أعلم الصحابة بالحلال والحرام، ومن الذين جمعوا القرآن في عهد النبي ﷺ. ومن كلام عمر: «لولا معاذ لهلك عمر»، ينوّه بعلمه.'
  }, {
    sum: 'Muʿādh ibn Jabal ibn ʿAmr ibn Aws al-Anṣārī al-Khazrajī, Abū ʿAbd ar-Raḥmān (20 jaar vóór de hijra – 18 AH): vooraanstaande metgezel, de grootste kenner van halal en haram in de umma en een van de zes die de Koran in de tijd van de Profeet ﷺ verzamelden.',
    tl: [['—', 'Werd als jongeman moslim; de Profeet ﷺ verbond hem in broederschap met Jaʿfar ibn Abī Ṭālib. Hij was met de zeventig Anṣār bij al-ʿAqaba.'], ['—', 'Nam met de Boodschapper van Allah ﷺ deel aan Badr, Uḥud, de Gracht en alle andere veldslagen.'], ['—', 'Werd na de veldtocht naar Tabūk als rechter en leraar naar Jemen gestuurd en bleef daar tot het overlijden van de Profeet ﷺ.'], ['—', 'Trok met Abū ʿUbayda naar de Levant; toen Abū ʿUbayda door de pest van ʿAmwās werd getroffen, wees hij Muʿādh als opvolger aan.'], ['18', 'Overleden in de streek van Jordanië, in datzelfde jaar.']],
    works: ['Van hem zijn 157 hadith overgeleverd'],
    role: 'Hij was de grootste kenner van halal en haram onder de metgezellen en een van hen die de Koran in de tijd van de Profeet ﷺ verzamelden. ʿUmar zei over zijn kennis: "Zonder Muʿādh was ʿUmar ten onder gegaan."'
  }),
  bio('jabir-ibn-abdallah', loc(2, 104, 1236),
    'جابر بن عبد الله بن عمرو بن حرام الخزرجي الأنصاري السلمي (١٦ ق هـ – ٧٨ هـ): صحابي، من المكثرين في الرواية عن النبي ﷺ، وروى عنه جماعة من الصحابة. له ولأبيه صحبة. غزا تسع عشرة غزوة، وكانت له في أواخر أيامه حلقة في المسجد النبوي يُؤخذ عنه العلم. روى له البخاري ومسلم وغيرهما ١٥٤٠ حديثًا.',
    'Jābir ibn ʿAbd Allāh ibn ʿAmr ibn Ḥarām al-Khazrajī al-Anṣārī as-Salamī (16 jaar vóór de hijra – 78 AH): metgezel, een van degenen die het meest van de Profeet ﷺ overleverden; ook andere metgezellen overleverden van hem. Zowel hij als zijn vader waren metgezellen. Hij nam deel aan negentien veldtochten en had op het eind van zijn leven een leerkring in de Moskee van de Profeet. Al-Bukhārī, Muslim en anderen overleveren 1540 hadith van hem.'),
  bio('al-bara-ibn-azib', loc(2, 46, 1066),
    'البراء بن عازب بن الحارث الخزرجي، أبو عمارة (ت ٧١ هـ): قائد صحابي من أصحاب الفتوح. أسلم صغيرًا، وغزا مع رسول الله ﷺ خمس عشرة غزوة أولها الخندق. ولّاه عثمان الري سنة ٢٤ هـ ففتح أبهر وقزوين وزنجان، ثم سكن الكوفة واعتزل الأعمال. روى له البخاري ومسلم ٣٠٥ أحاديث.',
    'Al-Barāʾ ibn ʿĀzib ibn al-Ḥārith al-Khazrajī, Abū ʿUmāra (overleden 71 AH): metgezel en legeraanvoerder bij de veroveringen. Hij werd jong moslim en nam met de Boodschapper van Allah ﷺ deel aan vijftien veldtochten, de eerste was de Gracht. ʿUthmān maakte hem in 24 AH gouverneur van Rayy; hij veroverde Abhar, Qazwīn en Zanjān. Later woonde hij in Kūfa en trok hij zich terug uit openbare functies. Al-Bukhārī en Muslim overleveren 305 hadith van hem.'),
  bio('jubayr-ibn-mutim', loc(2, 112, 1260),
    'جبير بن مطعم بن عدي بن نوفل بن عبد مناف القرشي، أبو عدي (ت ٥٩ هـ): صحابي، كان من علماء قريش وسادتهم، توفي بالمدينة. عدّه الجاحظ من كبار النسّابين، وفي الإصابة: كان أنسب قرشي لقريش والعرب قاطبة. له ٦٠ حديثًا.',
    'Jubayr ibn Muṭʿim ibn ʿAdī ibn Nawfal ibn ʿAbd Manāf al-Qurashī, Abū ʿAdī (overleden 59 AH): metgezel, een van de geleerden en leiders van Quraysh; hij overleed in Medina. Al-Jāḥiẓ rekende hem tot de grote kenners van genealogie; in al-Iṣāba staat dat geen Qurashiet de stambomen van Quraysh en de Arabieren beter kende. Van hem zijn 60 hadith overgeleverd.'),
  bio('al-miqdam-ibn-madikarib', loc(7, 282, 6778),
    'المقدام بن معديكرب بن عمرو الكندي، أبو كريمة (ت ٨٧ هـ): صحابي. قدم في صباه من اليمن مع وفد كندة على النبي ﷺ، وكانوا ثمانين راكبًا. سكن الشام بعد ذلك، ومات بحمص وهو ابن ٩١ سنة. له أربعون حديثًا، وروى عنه الشعبي.',
    'Al-Miqdām ibn Maʿdīkarib ibn ʿAmr al-Kindī, Abū Karīma (overleden 87 AH): metgezel. Als jongen kwam hij uit Jemen met de delegatie van Kinda, tachtig ruiters, naar de Profeet ﷺ. Later woonde hij in de Levant; hij overleed in Ḥimṣ op 91-jarige leeftijd. Van hem zijn veertig hadith overgeleverd; ash-Shaʿbī overleverde van hem.'),
  bio('zayd-ibn-arqam', loc(3, 56, 2095),
    'زيد بن أرقم الخزرجي الأنصاري (ت ٦٨ هـ): صحابي، غزا مع النبي ﷺ سبع عشرة غزوة، وشهد صفين مع علي، ومات بالكوفة. له في كتب الحديث ٧٠ حديثًا.',
    'Zayd ibn Arqam al-Khazrajī al-Anṣārī (overleden 68 AH): metgezel die met de Profeet ﷺ aan zeventien veldtochten deelnam; hij was met ʿAlī bij Ṣiffīn en overleed in Kūfa. In de hadithboeken staan 70 hadith van hem.'),
  bio('ibn-abi-al-izz', loc(4, 313, 3904),
    'علي بن علي بن محمد بن أبي العز الحنفي الدمشقي (٧٣١–٧٩٢ هـ): فقيه، كان قاضي القضاة بدمشق، ثم بالديار المصرية، ثم بدمشق. امتُحن بسبب اعتراضه على قصيدة لابن أيبك الدمشقي. من كتبه: التنبيه على مشكلات الهداية في الفقه، والنور اللامع فيما يُعمل به في الجامع.',
    'ʿAlī ibn ʿAlī ibn Muḥammad ibn Abī l-ʿIzz al-Ḥanafī ad-Dimashqī (731–792 AH): faqīh, opperrechter in Damascus, daarna in Egypte en opnieuw in Damascus. Hij werd beproefd vanwege zijn kritiek op een gedicht van Ibn Aybak ad-Dimashqī. Werken onder meer: at-Tanbīh ʿalā mushkilāt al-Hidāya (fiqh) en an-Nūr al-lāmiʿ.'),
  big('muhammad-ibn-abd-al-wahhab', loc(6, 257, 5721), {
    sum: 'محمد بن عبد الوهاب بن سليمان التميمي النجدي (١١١٥–١٢٠٦ هـ): قال الزركلي: زعيم النهضة الدينية الإصلاحية الحديثة في جزيرة العرب.',
    tl: [['1115', 'وُلد ونشأ في العيينة بنجد.'], ['—', 'رحل مرتين إلى الحجاز فقرأ في المدينة على بعض أعلامها، وزار الشام، ودخل البصرة فأوذي فيها.'], ['—', 'عاد إلى نجد فسكن حريملاء، ثم العيينة، داعيًا إلى التوحيد الخالص ونبذ البدع، ناهجًا منهج السلف الصالح.'], ['1143', 'جهر بدعوته.'], ['1157', 'قصد الدرعية، فتلقاه أميرها محمد بن سعود بالإكرام وقبل دعوته وآزره.'], ['1206', 'توفي.']],
    works: [],
    role: 'قال الزركلي: كانت دعوته الشعلة الأولى لليقظة الحديثة في العالم الإسلامي كله، تأثر بها رجال الإصلاح في الهند ومصر والعراق والشام وغيرها.'
  }, {
    sum: 'Muḥammad ibn ʿAbd al-Wahhāb ibn Sulaymān at-Tamīmī an-Najdī (1115–1206 AH): volgens az-Ziriklī de leider van de moderne religieuze hervormingsbeweging op het Arabisch Schiereiland.',
    tl: [['1115', 'Geboren en opgegroeid in al-ʿUyayna (Najd).'], ['—', 'Reisde twee keer naar de Ḥijāz en studeerde in Medina bij enkele geleerden; hij bezocht de Levant en kwam in Baṣra, waar hij werd lastiggevallen.'], ['—', 'Keerde terug naar Najd, woonde in Ḥuraymilāʾ en daarna in al-ʿUyayna, en riep op tot zuiver tawḥīd en het verlaten van innovaties, volgens de weg van de vrome voorgangers.'], ['1143', 'Maakte zijn oproep openlijk bekend.'], ['1157', 'Ging naar ad-Dirʿiyya; emir Muḥammad ibn Saʿūd ontving hem met eer, aanvaardde zijn oproep en steunde hem.'], ['1206', 'Overleden.']],
    works: [],
    role: 'Volgens az-Ziriklī was zijn oproep de eerste vonk van het moderne ontwaken in de hele islamitische wereld; hervormers in India, Egypte, Irak, de Levant en elders werden erdoor beïnvloed.'
  }),
  bio('ash-shinqiti', loc(6, 45, 5091),
    'محمد الأمين بن محمد المختار بن عبد القادر الجكني الشنقيطي (١٣٢٥–١٣٩٣ هـ): مفسر مدرّس من علماء شنقيط (موريتانيا)، وُلد وتعلّم بها، ثم حج واستقر مدرّسًا في المدينة المنورة ثم الرياض، وأخيرًا في الجامعة الإسلامية بالمدينة، وتوفي بمكة. من كتبه: أضواء البيان في تفسير القرآن، ودفع إيهام الاضطراب عن آي الكتاب، ومنع جواز المجاز، وآداب البحث والمناظرة.',
    'Muḥammad al-Amīn ibn Muḥammad al-Mukhtār ibn ʿAbd al-Qādir al-Jakanī ash-Shinqīṭī (1325–1393 AH): korancommentator en leraar uit Shinqīṭ (Mauritanië), waar hij werd geboren en opgeleid. Na de hadj vestigde hij zich als docent in Medina, daarna in Riyad en ten slotte aan de Islamitische Universiteit van Medina; hij overleed in Mekka. Werken onder meer: Aḍwāʾ al-bayān fī tafsīr al-Qurʾān, Dafʿ īhām al-iḍṭirāb ʿan āy al-kitāb, Manʿ jawāz al-majāz en Ādāb al-baḥth wa-l-munāẓara.'),
  big('ash-shawkani', loc(6, 298, 5844), {
    sum: 'محمد بن علي بن محمد بن عبد الله الشوكاني (ت ١٢٥٠ هـ): فقيه مجتهد من كبار علماء اليمن، من أهل صنعاء. وكان يرى تحريم التقليد.',
    tl: [['—', 'وُلد بهجرة شوكان من بلاد خولان باليمن، ونشأ بصنعاء.'], ['1229', 'ولي قضاء صنعاء.'], ['1250', 'مات وهو حاكم بها.']],
    works: ['نيل الأوطار من أسرار منتقى الأخبار (ثماني مجلدات)', 'فتح القدير في التفسير (خمس مجلدات)', 'إرشاد الفحول في أصول الفقه', 'البدر الطالع بمحاسن من بعد القرن السابع', 'السيل الجرار، والفوائد المجموعة في الأحاديث الموضوعة'],
    role: 'له ١١٤ مؤلفًا في الحديث والتفسير والفقه والأصول والتراجم، وكان من أهل الاجتهاد.'
  }, {
    sum: 'Muḥammad ibn ʿAlī ibn Muḥammad ibn ʿAbd Allāh ash-Shawkānī (overleden 1250 AH): faqīh en mujtahid, een van de grote geleerden van Jemen, uit Ṣanʿāʾ. Hij was van mening dat taqlīd (blind navolgen) verboden is.',
    tl: [['—', 'Geboren in Hijrat Shawkān (Khawlān, Jemen); opgegroeid in Ṣanʿāʾ.'], ['1229', 'Werd rechter van Ṣanʿāʾ.'], ['1250', 'Overleden, nog in functie als rechter.']],
    works: ['Nayl al-awṭār min asrār Muntaqā al-akhbār (acht delen)', 'Fatḥ al-Qadīr, korancommentaar (vijf delen)', 'Irshād al-fuḥūl over uṣūl al-fiqh', 'al-Badr aṭ-ṭāliʿ, biografieën vanaf de zevende eeuw AH', 'as-Sayl al-jarrār en al-Fawāʾid al-majmūʿa fī l-aḥādīth al-mawḍūʿa'],
    role: 'Hij schreef 114 werken over hadith, tafsir, fiqh, uṣūl en biografieën en was een mujtahid.'
  }),
  bio('ibn-hibban', loc(6, 78, 5189),
    'محمد بن حبان بن أحمد التميمي، أبو حاتم البستي، ابن حبان (ت ٣٥٤ هـ): مؤرخ علّامة جغرافي محدّث. وُلد في بُست من بلاد سجستان، ورحل إلى خراسان والشام ومصر والعراق والجزيرة، وتولى قضاء سمرقند مدة، ثم عاد إلى بلده فتوفي بها. قال ياقوت: أخرج من علوم الحديث ما عجز عنه غيره. من كتبه: المسند الصحيح (الأنواع والتقاسيم)، والثقات، ومعرفة المجروحين، وروضة العقلاء.',
    'Muḥammad ibn Ḥibbān ibn Aḥmad at-Tamīmī, Abū Ḥātim al-Bustī, Ibn Ḥibbān (overleden 354 AH): geschiedschrijver, geleerde, geograaf en hadithgeleerde. Geboren in Bust (Sijistān); hij reisde naar Khurāsān, de Levant, Egypte, Irak en al-Jazīra, was een tijd rechter van Samarkand en overleed in zijn geboortestad. Yāqūt: hij bracht in de hadithwetenschappen voort wat anderen niet konden. Werken onder meer: al-Musnad aṣ-ṣaḥīḥ (al-Anwāʿ wa-t-taqāsīm), ath-Thiqāt, Maʿrifat al-majrūḥīn en Rawḍat al-ʿuqalāʾ.'),
  big('at-tirmidhi', loc(6, 322, 5912), {
    sum: 'محمد بن عيسى بن سورة بن موسى السلمي البوغي الترمذي، أبو عيسى (٢٠٩–٢٧٩ هـ): من أئمة علماء الحديث وحفاظه، من أهل ترمذ على نهر جيحون. وكان يُضرب به المثل في الحفظ.',
    tl: [['209', 'وُلد.'], ['—', 'تتلمذ للبخاري وشاركه في بعض شيوخه، وقام برحلة إلى خراسان والعراق والحجاز.'], ['—', 'عمي في آخر عمره.'], ['279', 'مات بترمذ.']],
    works: ['الجامع (سنن الترمذي)', 'الشمائل النبوية', 'العلل', 'التاريخ'],
    role: 'جامعه أحد الكتب الستة في الحديث، وله «الشمائل النبوية» في صفات النبي ﷺ.'
  }, {
    sum: 'Muḥammad ibn ʿĪsā ibn Sawra ibn Mūsā as-Sulamī al-Būghī at-Tirmidhī, Abū ʿĪsā (209–279 AH): een van de grote imams en ḥuffāẓ van de hadith, uit Tirmidh aan de Amu Darja. Zijn geheugen was spreekwoordelijk.',
    tl: [['209', 'Geboren.'], ['—', 'Was leerling van al-Bukhārī en deelde enkele leraren met hem; reisde naar Khurāsān, Irak en de Ḥijāz.'], ['—', 'Werd op het eind van zijn leven blind.'], ['279', 'Overleden in Tirmidh.']],
    works: ['al-Jāmiʿ (Sunan at-Tirmidhī)', 'ash-Shamāʾil an-nabawiyya', 'al-ʿIlal', 'at-Tārīkh'],
    role: 'Zijn Jāmiʿ is een van de zes hadithverzamelingen; in ash-Shamāʾil beschreef hij de eigenschappen van de Profeet ﷺ.'
  }),
  big('abu-dawud', loc(3, 122, 2288), {
    sum: 'سليمان بن الأشعث بن إسحاق بن بشير الأزدي السجستاني، أبو داود (٢٠٢–٢٧٥ هـ): إمام أهل الحديث في زمانه، أصله من سجستان.',
    tl: [['202', 'وُلد.'], ['—', 'رحل رحلة كبيرة في طلب الحديث.'], ['275', 'توفي بالبصرة.']],
    works: ['السنن (جمع فيه ٤٨٠٠ حديث انتخبها من خمسمئة ألف حديث)', 'المراسيل', 'كتاب الزهد', 'البعث'],
    role: 'كتابه «السنن» أحد الكتب الستة في الحديث.'
  }, {
    sum: 'Sulaymān ibn al-Ashʿath ibn Isḥāq ibn Bashīr al-Azdī as-Sijistānī, Abū Dāwūd (202–275 AH): de imam van de hadithgeleerden in zijn tijd, afkomstig uit Sijistān.',
    tl: [['202', 'Geboren.'], ['—', 'Maakte een grote studiereis om hadith te verzamelen.'], ['275', 'Overleden in Baṣra.']],
    works: ['as-Sunan (4800 hadith, gekozen uit vijfhonderdduizend)', 'al-Marāsīl', 'Kitāb az-Zuhd', 'al-Baʿth'],
    role: 'Zijn Sunan is een van de zes hadithverzamelingen.'
  }),
  big('an-nasai', loc(1, 171, 448), {
    sum: 'أحمد بن علي بن شعيب بن علي بن سنان، أبو عبد الرحمن النسائي (٢١٥–٣٠٣ هـ): صاحب السنن، القاضي الحافظ، شيخ الإسلام. أصله من نسا بخراسان.',
    tl: [['215', 'وُلد.'], ['—', 'جال في البلاد واستوطن مصر.'], ['—', 'خرج إلى الرملة بفلسطين، فسُئل عن فضائل معاوية فأمسك، فضربوه في الجامع وأُخرج عليلًا.'], ['303', 'مات، ودُفن ببيت المقدس، وقيل: خرج حاجًا فمات بمكة.']],
    works: ['السنن الكبرى', 'المجتبى (السنن الصغرى)', 'الضعفاء والمتروكون', 'خصائص علي، ومسند علي، ومسند مالك'],
    role: 'كتابه «المجتبى» أحد الكتب الستة في الحديث، وله كتاب في الضعفاء والمتروكين من الرواة.'
  }, {
    sum: 'Aḥmad ibn ʿAlī ibn Shuʿayb ibn ʿAlī ibn Sinān, Abū ʿAbd ar-Raḥmān an-Nasāʾī (215–303 AH): samensteller van as-Sunan, rechter, ḥāfiẓ en Shaykh al-Islām; afkomstig uit Nasā in Khurāsān.',
    tl: [['215', 'Geboren.'], ['—', 'Reisde door vele landen en vestigde zich in Egypte.'], ['—', 'Ging naar ar-Ramla in Palestina; toen men hem vroeg naar de verdiensten van Muʿāwiya en hij zweeg, sloegen zij hem in de moskee en werd hij ziek weggevoerd.'], ['303', 'Overleden en begraven in Jeruzalem; volgens anderen overleed hij in Mekka tijdens de hadj.']],
    works: ['as-Sunan al-kubrā', 'al-Mujtabā (as-Sunan aṣ-ṣughrā)', 'aḍ-Ḍuʿafāʾ wa-l-matrūkūn', 'Khaṣāʾiṣ ʿAlī, Musnad ʿAlī en Musnad Mālik'],
    role: 'Zijn al-Mujtabā is een van de zes hadithverzamelingen; hij schreef ook een werk over zwakke en verworpen overleveraars.'
  }),
  bio('abu-al-aswad-ad-duali', loc(3, 236, 2627),
    'ظالم بن عمرو بن سفيان بن جندل الدؤلي الكناني، أبو الأسود (١ ق هـ – ٦٩ هـ): واضع علم النحو، من التابعين، معدود من الفقهاء والأعيان والأمراء والشعراء. رسم له علي بن أبي طالب شيئًا من أصول النحو فكتب فيه. سكن البصرة وولي إمارتها في أيام علي، وشهد معه صفين. وهو في أكثر الأقوال أول من نقط المصحف. مات بالبصرة.',
    'Ẓālim ibn ʿAmr ibn Sufyān ibn Jandal ad-Duʾalī al-Kinānī, Abū l-Aswad (1 jaar vóór de hijra – 69 AH): grondlegger van de Arabische grammatica, een tābiʿī, gerekend tot de juristen, notabelen, bestuurders en dichters. ʿAlī ibn Abī Ṭālib schetste hem enkele grondbeginselen van de grammatica, die hij uitwerkte. Hij woonde in Baṣra, was er gouverneur onder ʿAlī en was met hem bij Ṣiffīn. Volgens de meeste verslagen was hij de eerste die de Koran van punten (klinkertekens) voorzag. Hij overleed in Baṣra.'),
  big('ali-ibn-abi-talib', loc(4, 295, 3850), {
    sum: 'علي بن أبي طالب بن عبد المطلب الهاشمي القرشي، أبو الحسن (٢٣ ق هـ – ٤٠ هـ): أمير المؤمنين، رابع الخلفاء الراشدين، وأحد العشرة المبشرين بالجنة، وابن عم النبي ﷺ وصهره، وأحد الشجعان الأبطال، ومن أكابر الخطباء والعلماء بالقضاء.',
    tl: [['23 ق هـ', 'وُلد بمكة، ورُبّي في حجر النبي ﷺ ولم يفارقه.'], ['—', 'أول الناس إسلامًا بعد خديجة. ولما آخى النبي ﷺ بين أصحابه قال له: أنت أخي.'], ['—', 'كان اللواء بيده في أكثر المشاهد.'], ['35', 'ولي الخلافة بعد مقتل عثمان بن عفان.'], ['36', 'وقعة الجمل.'], ['37', 'وقعة صفين.'], ['40', 'توفي.']],
    works: [],
    role: 'هو من السابقين الأولين، ومن أعلم الصحابة بالقضاء، وكان من أكابر الخطباء.'
  }, {
    sum: 'ʿAlī ibn Abī Ṭālib ibn ʿAbd al-Muṭṭalib al-Hāshimī al-Qurashī, Abū l-Ḥasan (23 jaar vóór de hijra – 40 AH): Amīr al-Muʾminīn, de vierde rechtgeleide kalief, een van de tien aan wie het Paradijs is beloofd, neef en schoonzoon van de Profeet ﷺ, een held in moed, en een van de grootste redenaars en kenners van de rechtspraak.',
    tl: [['23 v.H.', 'Geboren in Mekka; groeide op bij de Profeet ﷺ en week niet van zijn zijde.'], ['—', 'De eerste die na Khadīja moslim werd. Toen de Profeet ﷺ broederschap sloot tussen zijn metgezellen, zei hij tegen hem: "Jij bent mijn broeder."'], ['—', 'Droeg in de meeste veldslagen het vaandel.'], ['35', 'Werd kalief na de moord op ʿUthmān ibn ʿAffān.'], ['36', 'Slag van de Kameel.'], ['37', 'Slag bij Ṣiffīn.'], ['40', 'Overleden.']],
    works: [],
    role: 'Hij was een van de eerste moslims, een van de grootste kenners van de rechtspraak onder de metgezellen en een van de grote redenaars.'
  }),
  big('al-khalil-ibn-ahmad', loc(2, 314, 1857), {
    sum: 'الخليل بن أحمد بن عمرو بن تميم الفراهيدي الأزدي اليحمدي، أبو عبد الرحمن (١٠٠–١٧٠ هـ): من أئمة اللغة والأدب، وواضع علم العروض، وأستاذ سيبويه.',
    tl: [['100', 'وُلد في البصرة.'], ['—', 'عاش فقيرًا صابرًا مغمورًا في الناس.'], ['170', 'مات في البصرة؛ صدمته سارية في المسجد وهو غافل يعمل فكره في طريقة للحساب، فكانت سبب موته.']],
    works: ['كتاب العين في اللغة', 'كتاب العروض', 'النقط والشكل', 'معاني الحروف'],
    role: 'واضع علم العروض، ورتّب كلام العرب على الحروف في «كتاب العين». قال النضر بن شميل: ما رأى الراؤون مثل الخليل، ولا رأى الخليل مثل نفسه.'
  }, {
    sum: 'Al-Khalīl ibn Aḥmad ibn ʿAmr ibn Tamīm al-Farāhīdī al-Azdī al-Yaḥmadī, Abū ʿAbd ar-Raḥmān (100–170 AH): een van de grote taalkundigen en letterkundigen, grondlegger van de Arabische metriek (ʿarūḍ) en leraar van Sībawayh.',
    tl: [['100', 'Geboren in Baṣra.'], ['—', 'Leefde arm, geduldig en onopgemerkt onder de mensen.'], ['170', 'Overleden in Baṣra: in gedachten verzonken over een eenvoudige rekenmethode liep hij in de moskee tegen een zuil, wat zijn dood werd.']],
    works: ['Kitāb al-ʿAyn (woordenboek)', 'Kitāb al-ʿArūḍ (metriek)', 'an-Naqṭ wa-sh-shakl (leestekens)', 'Maʿānī al-ḥurūf'],
    role: 'Hij legde de grondslag van de metriek en ordende in Kitāb al-ʿAyn de woorden van het Arabisch naar hun letters. An-Naḍr ibn Shumayl: niemand heeft iemand gezien zoals al-Khalīl, en al-Khalīl zelf zag niemand zoals hij.'
  }),
  big('ibn-khaldun', loc(3, 330, 2903), {
    sum: 'عبد الرحمن بن محمد بن محمد، ابن خلدون، أبو زيد، ولي الدين الحضرمي الإشبيلي (٧٣٢–٨٠٨ هـ): المؤرخ الفيلسوف، العالم الاجتماعي البحّاثة.',
    tl: [['732', 'وُلد ونشأ بتونس، وأصله من إشبيلية.'], ['—', 'رحل إلى فاس وغرناطة وتلمسان والأندلس، وتولى أعمالًا، ثم عاد إلى تونس.'], ['—', 'توجه إلى مصر فأكرمه سلطانها الظاهر برقوق، وولي فيها قضاء المالكية، وعُزل وأُعيد.'], ['808', 'توفي فجأة في القاهرة.']],
    works: ['العبر وديوان المبتدأ والخبر في تاريخ العرب والعجم والبربر، وأوله «المقدمة»', 'التعريف بابن خلدون ورحلته غربًا وشرقًا', 'شرح البردة'],
    role: 'اشتهر بكتابه «العبر»، و«المقدمة» تُعدّ من أصول علم الاجتماع، وتُرجمت إلى الفرنسية وغيرها.'
  }, {
    sum: 'ʿAbd ar-Raḥmān ibn Muḥammad ibn Muḥammad Ibn Khaldūn, Abū Zayd Walī ad-Dīn al-Ḥaḍramī al-Ishbīlī (732–808 AH): geschiedschrijver, denker en onderzoeker van de samenleving.',
    tl: [['732', 'Geboren en opgegroeid in Tunis; zijn familie kwam uit Sevilla.'], ['—', 'Reisde naar Fez, Granada, Tlemcen en al-Andalus, bekleedde ambten en keerde terug naar Tunis.'], ['—', 'Ging naar Egypte, waar sultan aẓ-Ẓāhir Barqūq hem eerde; hij werd Mālikitisch rechter, werd ontslagen en weer benoemd.'], ['808', 'Plotseling overleden in Caïro.']],
    works: ['Kitāb al-ʿIbar, een wereldgeschiedenis, met als eerste deel de Muqaddima', 'at-Taʿrīf bi-Ibn Khaldūn, zijn autobiografie', 'Een commentaar op al-Burda'],
    role: 'Hij werd bekend door Kitāb al-ʿIbar; de Muqaddima geldt als een van de grondslagen van de sociologie en is in het Frans en andere talen vertaald.'
  }),
  big('umar-ibn-abd-al-aziz', loc(5, 50, 4109), {
    sum: 'عمر بن عبد العزيز بن مروان بن الحكم الأموي القرشي، أبو حفص (٦١–١٠١ هـ): الخليفة الصالح والملك العادل، وربما قيل له خامس الخلفاء الراشدين تشبيهًا له بهم.',
    tl: [['61', 'وُلد ونشأ بالمدينة.'], ['—', 'ولي إمارة المدينة للوليد، ثم استوزره سليمان بن عبد الملك بالشام.'], ['99', 'ولي الخلافة بعهد من سليمان، فبويع في مسجد دمشق، ومنع سبّ علي بن أبي طالب على المنابر.'], ['101', 'توفي بدير سمعان من أرض المعرة، ومدة خلافته سنتان ونصف.']],
    works: [],
    role: 'أخباره في عدله وحسن سياسته كثيرة، وسكن الناس في أيامه. ولابن الجوزي «سيرة عمر بن عبد العزيز».'
  }, {
    sum: 'ʿUmar ibn ʿAbd al-ʿAzīz ibn Marwān ibn al-Ḥakam al-Umawī al-Qurashī, Abū Ḥafṣ (61–101 AH): de vrome kalief en rechtvaardige vorst, soms "de vijfde rechtgeleide kalief" genoemd.',
    tl: [['61', 'Geboren en opgegroeid in Medina.'], ['—', 'Was gouverneur van Medina onder al-Walīd en daarna vizier van Sulaymān ibn ʿAbd al-Malik in de Levant.'], ['99', 'Werd op aanwijzing van Sulaymān kalief en in de moskee van Damascus gehuldigd; hij verbood het vervloeken van ʿAlī ibn Abī Ṭālib vanaf de kansels.'], ['101', 'Overleden in Dayr Simʿān bij al-Maʿarra; zijn kalifaat duurde tweeënhalf jaar.']],
    works: [],
    role: 'Er zijn veel verhalen over zijn rechtvaardigheid en goed bestuur, en de mensen kwamen onder hem tot rust. Ibn al-Jawzī schreef een biografie over hem.'
  }),
  bio('ayyub-as-sakhtiyani', loc(2, 38, 1042),
    'أيوب بن أبي تميمة كيسان السختياني البصري، أبو بكر (٦٦–١٣١ هـ): سيد فقهاء عصره، تابعي من النسّاك الزهاد، من حفاظ الحديث. كان ثبتًا ثقة، رُوي عنه نحو ٨٠٠ حديث.',
    'Ayyūb ibn Abī Tamīma Kaysān as-Sakhtiyānī al-Baṣrī, Abū Bakr (66–131 AH): de leidende jurist van zijn tijd, een tābiʿī, vroom en sober, en een ḥāfiẓ van de hadith. Hij was standvastig en betrouwbaar; van hem zijn ongeveer 800 hadith overgeleverd.'),
  bio('ibn-aqil', loc(4, 96, 3255),
    'عبد الله بن عبد الرحمن بن عبد الله القرشي الهاشمي، بهاء الدين ابن عقيل (٦٩٤–٧٦٩ هـ): من أئمة النحاة، من نسل عقيل بن أبي طالب، مولده ووفاته في القاهرة. قال أبو حيان: ما تحت أديم السماء أنحى من ابن عقيل. ولي قضاء الديار المصرية مدة قصيرة. له «شرح ألفية ابن مالك» المتداول، و«المساعد» في شرح التسهيل.',
    'ʿAbd Allāh ibn ʿAbd ar-Raḥmān ibn ʿAbd Allāh al-Qurashī al-Hāshimī, Bahāʾ ad-Dīn Ibn ʿAqīl (694–769 AH): een van de grote grammatici, afstammeling van ʿAqīl ibn Abī Ṭālib, geboren en overleden in Caïro. Abū Ḥayyān zei: onder de hemel is er geen grotere grammaticus dan Ibn ʿAqīl. Hij was korte tijd opperrechter van Egypte. Werken: zijn veelgebruikte commentaar op de Alfiyya van Ibn Mālik en al-Musāʿid, een commentaar op at-Tashīl.')
]
