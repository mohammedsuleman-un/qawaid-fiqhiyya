// Biografie-concepten voor personen uit تلخيص جمع الجوامع (deel C), samengevat uit al-Aʿlām.
// Bevat ook de uitgebreide versie van de vijf eerdere voorbeeldbiografieën.
import { loc, bio, big } from './bio.js'

export default [
  bio('ibn-faris', loc(1, 193, 510),
    'أحمد بن فارس بن زكرياء القزويني الرازي، أبو الحسين (٣٢٩–٣٩٥ هـ): من أئمة اللغة والأدب، قرأ عليه بديع الزمان الهمذاني والصاحب بن عباد وغيرهما. أصله من قزوين، وأقام مدة في همذان، ثم انتقل إلى الري فتوفي فيها. من تصانيفه: مقاييس اللغة (ستة أجزاء)، والمجمل، والصاحبي في علم العربية، وجامع التأويل في التفسير، ومتخيّر الألفاظ، وله شعر حسن.',
    'Aḥmad ibn Fāris ibn Zakariyyāʾ al-Qazwīnī ar-Rāzī, Abū l-Ḥusayn (329–395 AH): een van de grote taalkundigen en letterkundigen; Badīʿ az-Zamān al-Hamadhānī en aṣ-Ṣāḥib ibn ʿAbbād studeerden bij hem. Zijn familie kwam uit Qazwīn; hij woonde een tijd in Hamadhān en daarna in Rayy, waar hij overleed. Werken onder meer: Maqāyīs al-lugha (zes delen), al-Mujmal, aṣ-Ṣāḥibī over de Arabische taalwetenschap, Jāmiʿ at-taʾwīl (tafsir) en Mutakhayyar al-alfāẓ; hij schreef ook goede poëzie.'),
  big('az-zamakhshari', loc(7, 178, 6467), {
    sum: 'محمود بن عمر بن محمد بن أحمد الخوارزمي الزمخشري، جار الله، أبو القاسم (٤٦٧–٥٣٨ هـ): من أئمة العلم بالدين والتفسير واللغة والآداب. وكان معتزلي المذهب مجاهرًا بذلك.',
    tl: [['467', 'وُلد في زمخشر من قرى خوارزم.'], ['—', 'سافر إلى مكة فجاور بها زمنًا فلُقّب بجار الله، وتنقل في البلدان.'], ['538', 'عاد إلى الجرجانية من قرى خوارزم، فتوفي فيها.']],
    works: ['الكشاف في تفسير القرآن', 'أساس البلاغة', 'المفصل في النحو، ومختصره الأنموذج', 'الفائق في غريب الحديث', 'المستقصى في الأمثال، وربيع الأبرار'],
    role: 'تفسيره «الكشاف» مشهور بعنايته بالبلاغة والإعراب، و«المفصل» و«أساس البلاغة» من الكتب المعتمدة في النحو واللغة. وقد نبّه الزركلي إلى أنه كان معتزلي المذهب.'
  }, {
    sum: 'Maḥmūd ibn ʿUmar ibn Muḥammad ibn Aḥmad al-Khwārazmī az-Zamakhsharī, Jār Allāh Abū l-Qāsim (467–538 AH): een van de grote geleerden in religie, tafsir, taal en letterkunde. Hij was openlijk aanhanger van de Muʿtazila.',
    tl: [['467', 'Geboren in Zamakhshar, een dorp in Khwārazm.'], ['—', 'Verbleef een tijd in Mekka, waardoor hij de bijnaam Jār Allāh ("buur van Allah") kreeg, en reisde door vele landen.'], ['538', 'Keerde terug naar al-Jurjāniyya in Khwārazm en overleed daar.']],
    works: ['al-Kashshāf, korancommentaar', 'Asās al-balāgha', 'al-Mufaṣṣal over grammatica, met de samenvatting al-Unmūdhaj', 'al-Fāʾiq fī gharīb al-ḥadīth', 'al-Mustaqṣā (spreekwoorden) en Rabīʿ al-abrār'],
    role: 'Zijn al-Kashshāf staat bekend om de aandacht voor welsprekendheid en grammaticale analyse, en al-Mufaṣṣal en Asās al-balāgha zijn gezaghebbende werken over grammatica en taal. Az-Ziriklī wijst erop dat hij de Muʿtazilitische leer aanhing.'
  }),
  bio('al-hariri', loc(5, 177, 4491),
    'القاسم بن علي بن محمد بن عثمان، أبو محمد الحريري البصري (٤٤٦–٥١٦ هـ): الأديب الكبير، صاحب «المقامات الحريرية». ومن كتبه: درة الغواص في أوهام الخواص، وملحة الإعراب، وله ديوان شعر وديوان رسائل. مولده بالمشان قرب البصرة ووفاته بالبصرة، ونسبته إلى عمل الحرير أو بيعه. وقد تُرجمت مقاماته إلى كثير من اللغات الأوروبية.',
    'Al-Qāsim ibn ʿAlī ibn Muḥammad ibn ʿUthmān, Abū Muḥammad al-Ḥarīrī al-Baṣrī (446–516 AH): groot letterkundige, auteur van de Maqāmāt al-Ḥarīrī. Andere werken: Durrat al-ghawwāṣ fī awhām al-khawāṣṣ, Mulḥat al-iʿrāb (grammatica), een dichtbundel en een bundel brieven. Geboren in al-Mashān bij Baṣra en overleden in Baṣra; zijn naam verwijst naar het maken of verkopen van zijde. Zijn Maqāmāt zijn in veel Europese talen vertaald.'),
  bio('ash-shalawbin', loc(5, 62, 4146),
    'عمر بن محمد بن عمر بن عبد الله الأزدي، أبو علي، الشلوبيني أو الشلوبين (٥٦٢–٦٤٥ هـ): من كبار العلماء بالنحو واللغة، مولده ووفاته بإشبيلية. من كتبه: القوانين في علم العربية ومختصره التوطئة، وشرح المقدمة الجزولية، وحواش على المفصل للزمخشري، وتعليق على كتاب سيبويه. والشلوبيني نسبة إلى حصن شلوبينية بجنوب الأندلس.',
    'ʿUmar ibn Muḥammad ibn ʿUmar ibn ʿAbd Allāh al-Azdī, Abū ʿAlī ash-Shalawbīnī of ash-Shalawbīn (562–645 AH): een van de grote kenners van grammatica en taal, geboren en overleden in Sevilla. Werken onder meer: al-Qawānīn over de Arabische taalwetenschap en de samenvatting at-Tawṭiʾa, een commentaar op de Muqaddima van al-Jazūlī, aantekeningen bij al-Mufaṣṣal van az-Zamakhsharī en bij het Boek van Sībawayh. Zijn naam verwijst naar de burcht Shalawbīniyya (Salobreña) in het zuiden van al-Andalus.'),
  bio('ibn-usfur', loc(5, 27, 4039),
    'علي بن مؤمن بن محمد الحضرمي الإشبيلي، أبو الحسن، المعروف بابن عصفور (٥٩٧–٦٦٩ هـ): حامل لواء العربية بالأندلس في عصره. وُلد بإشبيلية وتوفي بتونس. من كتبه: المقرّب في النحو، والممتع في التصريف، وشرح الجمل، وشرح الحماسة.',
    'ʿAlī ibn Muʾmin ibn Muḥammad al-Ḥaḍramī al-Ishbīlī, Abū l-Ḥasan, bekend als Ibn ʿUṣfūr (597–669 AH): de vaandeldrager van de Arabische taalwetenschap in al-Andalus in zijn tijd. Geboren in Sevilla, overleden in Tunis. Werken onder meer: al-Muqarrib (grammatica), al-Mumtiʿ (morfologie), een commentaar op al-Jumal en een commentaar op al-Ḥamāsa.'),
  big('ibn-malik', loc(6, 233, 5652), {
    sum: 'محمد بن عبد الله بن مالك الطائي الجياني، أبو عبد الله، جمال الدين (٦٠٠–٦٧٢ هـ): أحد الأئمة في علوم العربية.',
    tl: [['600', 'وُلد في جيّان بالأندلس.'], ['—', 'انتقل إلى دمشق.'], ['672', 'توفي في دمشق.']],
    works: ['الألفية في النحو', 'تسهيل الفوائد في النحو، وشرحه', 'الكافية الشافية (أرجوزة في نحو ثلاثة آلاف بيت) وشرحها', 'لامية الأفعال في الصرف', 'شواهد التوضيح، وإكمال الإعلام بمثلث الكلام'],
    role: 'صارت «ألفيته» أشهر متن في النحو العربي يحفظه الطلاب، وكتبت عليها شروح كثيرة، وكذلك «التسهيل» و«لامية الأفعال».'
  }, {
    sum: 'Muḥammad ibn ʿAbd Allāh ibn Mālik aṭ-Ṭāʾī al-Jayyānī, Abū ʿAbd Allāh Jamāl ad-Dīn (600–672 AH): een van de grote imams van de Arabische taalwetenschappen.',
    tl: [['600', 'Geboren in Jaén (Jayyān) in al-Andalus.'], ['—', 'Verhuisde naar Damascus.'], ['672', 'Overleden in Damascus.']],
    works: ['al-Alfiyya over grammatica (een leergedicht)', 'Tashīl al-fawāʾid over grammatica, met eigen commentaar', 'al-Kāfiya ash-shāfiya (leergedicht van ongeveer drieduizend verzen) met commentaar', 'Lāmiyyat al-afʿāl over morfologie', 'Shawāhid at-tawḍīḥ en Ikmāl al-iʿlām bi-muthallath al-kalām'],
    role: 'Zijn Alfiyya werd de bekendste grammaticatekst die studenten uit het hoofd leren, met talloze commentaren; hetzelfde geldt voor at-Tashīl en Lāmiyyat al-afʿāl.'
  }),
  big('abu-hayyan', loc(7, 152, 6389), {
    sum: 'محمد بن يوسف بن علي بن يوسف بن حيان الغرناطي الأندلسي الجياني النفزي، أثير الدين، أبو حيان (٦٥٤–٧٤٥ هـ): من كبار العلماء بالعربية والتفسير والحديث والتراجم واللغات.',
    tl: [['654', 'وُلد في إحدى جهات غرناطة، ثم رحل إلى مالقة.'], ['—', 'تنقل إلى أن أقام بالقاهرة، واشتهرت تصانيفه في حياته وقُرئت عليه.'], ['745', 'توفي في القاهرة بعد أن كُفّ بصره.']],
    works: ['البحر المحيط في تفسير القرآن (ثماني مجلدات)، ومختصره النهر', 'ارتشاف الضرب من لسان العرب', 'التذييل والتكميل في شرح التسهيل لابن مالك', 'منهج السالك في الكلام على ألفية ابن مالك', 'تحفة الأريب في غريب القرآن'],
    role: 'تفسيره «البحر المحيط» من أوسع التفاسير عناية بالإعراب واللغة، وكان إمامًا في النحو، وألّف أيضًا في لغات الترك والفرس والحبش.'
  }, {
    sum: 'Muḥammad ibn Yūsuf ibn ʿAlī ibn Yūsuf ibn Ḥayyān al-Gharnāṭī al-Andalusī an-Nafzī, Athīr ad-Dīn Abū Ḥayyān (654–745 AH): een van de grote kenners van het Arabisch, tafsir, hadith, biografieën en talen.',
    tl: [['654', 'Geboren in de omgeving van Granada; reisde daarna naar Málaga.'], ['—', 'Trok verder tot hij zich in Caïro vestigde; al tijdens zijn leven werden zijn werken bekend en bij hem gelezen.'], ['745', 'Overleden in Caïro, nadat hij blind was geworden.']],
    works: ['al-Baḥr al-muḥīṭ, korancommentaar (acht delen), met de samenvatting an-Nahr', 'Irtishāf aḍ-ḍarab min lisān al-ʿArab', 'at-Tadhyīl wa-t-takmīl, commentaar op at-Tashīl van Ibn Mālik', 'Manhaj as-sālik, over de Alfiyya van Ibn Mālik', 'Tuḥfat al-arīb fī gharīb al-Qurʾān'],
    role: 'Zijn al-Baḥr al-muḥīṭ is een van de korancommentaren met de meeste aandacht voor grammatica en taal. Hij was een imam in de grammatica en schreef ook over het Turks, Perzisch en Ethiopisch.'
  }),
  bio('nafi', loc(8, 5, 6993),
    'نافع بن عبد الرحمن بن أبي نعيم الليثي بالولاء المدني (ت ١٦٩ هـ): أحد القراء السبعة المشهورين. أصله من أصبهان، اشتهر في المدينة وانتهت إليه رياسة القراءة فيها، وأقرأ الناس نيفًا وسبعين سنة، وتوفي بها. وكان صبيح الوجه حسن الخلق فيه دعابة.',
    'Nāfiʿ ibn ʿAbd ar-Raḥmān ibn Abī Nuʿaym al-Laythī (cliënt) al-Madanī (overleden 169 AH): een van de zeven bekende koranlezers. Zijn familie kwam uit Iṣfahān; hij werd bekend in Medina, werd daar de leidende autoriteit in de koranrecitatie, onderwees de mensen meer dan zeventig jaar en overleed er. Hij had een stralend gezicht, een goed karakter en gevoel voor humor.'),
  bio('ibn-kathir-al-makki', loc(4, 115, 3311),
    'عبد الله بن كثير الداري المكي، أبو معبد (٤٥–١٢٠ هـ): أحد القراء السبعة. كان قاضي الجماعة بمكة، وكانت حرفته العطارة، ويسمّون العطار «داريًا» فعُرف بالداري. فارسي الأصل، مولده ووفاته بمكة.',
    'ʿAbd Allāh ibn Kathīr ad-Dārī al-Makkī, Abū Maʿbad (45–120 AH): een van de zeven koranlezers. Hij was rechter van de gemeenschap in Mekka en van beroep parfumhandelaar; zo’n handelaar heette "dārī", vandaar zijn naam. Van Perzische afkomst; geboren en overleden in Mekka.'),
  bio('abu-amr-al-basri', loc(3, 41, 2050),
    'زبّان بن عمار التميمي المازني البصري، أبو عمرو، ويلقب أبوه بالعلاء (٧٠–١٥٤ هـ): من أئمة اللغة والأدب، وأحد القراء السبعة. وُلد بمكة، ونشأ بالبصرة، ومات بالكوفة. قال أبو عبيدة: كان أعلم الناس بالأدب والعربية والقرآن والشعر.',
    'Zabbān ibn ʿAmmār at-Tamīmī al-Māzinī al-Baṣrī, Abū ʿAmr; zijn vader droeg de bijnaam al-ʿAlāʾ (70–154 AH): een van de grote taalkundigen en letterkundigen en een van de zeven koranlezers. Geboren in Mekka, opgegroeid in Baṣra, overleden in Kūfa. Abū ʿUbayda: hij was de grootste kenner van letterkunde, Arabisch, de Koran en poëzie.'),
  bio('ibn-amir', loc(4, 95, 3251),
    'عبد الله بن عامر بن زيد، أبو عمران اليحصبي الشامي (٨–١١٨ هـ): أحد القراء السبعة. وُلد في البلقاء في قرية رحاب، وانتقل إلى دمشق بعد فتحها، وولي قضاءها في خلافة الوليد بن عبد الملك، وتوفي فيها. قال الذهبي: مقرئ الشاميين، صدوق في رواية الحديث.',
    'ʿAbd Allāh ibn ʿĀmir ibn Zayd, Abū ʿImrān al-Yaḥṣubī ash-Shāmī (8–118 AH): een van de zeven koranlezers. Geboren in het dorp Riḥāb in al-Balqāʾ; na de verovering van Damascus verhuisde hij daarheen, werd er rechter tijdens het kalifaat van al-Walīd ibn ʿAbd al-Malik en overleed er. Adh-Dhahabī: de koranleraar van de Levant, betrouwbaar in het overleveren van hadith.'),
  bio('asim', loc(3, 248, 2661),
    'عاصم بن أبي النجود بهدلة الكوفي الأسدي بالولاء، أبو بكر (ت ١٢٧ هـ): أحد القراء السبعة، تابعي من أهل الكوفة ووفاته فيها. كان ثقة في القراءات، صدوقًا في الحديث. قيل: اسم أبيه عبيد، وبهدلة اسم أمه.',
    'ʿĀṣim ibn Abī n-Nujūd Bahdala al-Kūfī al-Asadī (cliënt), Abū Bakr (overleden 127 AH): een van de zeven koranlezers, een tābiʿī uit Kūfa, waar hij ook overleed. Hij was betrouwbaar in de koranlezingen en eerlijk in de hadith. Volgens sommigen heette zijn vader ʿUbayd en was Bahdala de naam van zijn moeder.'),
  bio('hamza', loc(2, 277, 1747),
    'حمزة بن حبيب بن عمارة بن إسماعيل التيمي، الزيات (٨٠–١٥٦ هـ): أحد القراء السبعة، من موالي التيم. كان يجلب الزيت من الكوفة إلى حلوان، ويجلب الجبن والجوز إلى الكوفة، ومات بحلوان. كان عالمًا بالقراءات، انعقد الإجماع على تلقي قراءته بالقبول. قال الثوري: ما قرأ حمزة حرفًا من كتاب الله إلا بأثر.',
    'Ḥamza ibn Ḥabīb ibn ʿUmāra ibn Ismāʿīl at-Taymī az-Zayyāt (80–156 AH): een van de zeven koranlezers, cliënt van de stam Taym. Hij bracht olie van Kūfa naar Ḥulwān en kaas en walnoten naar Kūfa, en overleed in Ḥulwān. Hij was een kenner van de koranlezingen; men is het erover eens dat zijn lezing aanvaard is. Sufyān ath-Thawrī: Ḥamza las geen letter van het Boek van Allah zonder overlevering.'),
  bio('al-kisai', loc(4, 283, 3813),
    'علي بن حمزة بن عبد الله الأسدي بالولاء، الكوفي، أبو الحسن الكسائي (ت ١٨٩ هـ): إمام في اللغة والنحو والقراءة، وأحد القراء السبعة. وُلد في إحدى قرى الكوفة وتعلّم بها، وقرأ النحو بعد الكبر، وتنقّل في البادية، وسكن بغداد، وتوفي بالري عن سبعين عامًا. وهو مؤدب الرشيد وابنه الأمين. من كتبه: معاني القرآن، والقراءات، وما يلحن فيه العوام.',
    'ʿAlī ibn Ḥamza ibn ʿAbd Allāh al-Asadī (cliënt) al-Kūfī, Abū l-Ḥasan al-Kisāʾī (overleden 189 AH): imam in taal, grammatica en koranrecitatie, een van de zeven koranlezers. Geboren en opgeleid in een dorp bij Kūfa; hij begon pas op latere leeftijd met grammatica, trok rond in de woestijn, woonde in Bagdad en overleed in Rayy op zeventigjarige leeftijd. Hij was de leraar van kalief Hārūn ar-Rashīd en diens zoon al-Amīn. Werken onder meer: Maʿānī al-Qurʾān, al-Qirāʾāt en Mā yalḥanu fīhi l-ʿawāmm.'),
  bio('abu-jafar-al-madani', loc(8, 186, 7535),
    'يزيد بن القعقاع المخزومي بالولاء، المدني، أبو جعفر (ت ١٣٢ هـ): أحد القراء العشرة من التابعين. كان إمام أهل المدينة في القراءة، وعُرف بالقارئ، وكان من المفتين المجتهدين. توفي في المدينة.',
    'Yazīd ibn al-Qaʿqāʿ al-Makhzūmī (cliënt) al-Madanī, Abū Jaʿfar (overleden 132 AH): een van de tien koranlezers, een tābiʿī. Hij was de imam van Medina in de koranrecitatie, bekend als "de lezer", en een muftī en mujtahid. Overleden in Medina.'),
  bio('yaqub-al-hadrami', loc(8, 195, 7561),
    'يعقوب بن إسحاق بن زيد الحضرمي البصري، أبو محمد (١١٧–٢٠٥ هـ): أحد القراء العشرة، مولده ووفاته بالبصرة، وكان إمامها ومقرئها، من بيت علم بالعربية والأدب. له في القراءات رواية مشهورة. ومن كتبه «الجامع» قال الزبيدي: جمع فيه عامة اختلاف وجوه القرآن ونسب كل حرف إلى من قرأه، و«وجوه القراءات» و«وقف التمام».',
    'Yaʿqūb ibn Isḥāq ibn Zayd al-Ḥaḍramī al-Baṣrī, Abū Muḥammad (117–205 AH): een van de tien koranlezers, geboren en overleden in Baṣra, waar hij imam en koranleraar was; hij kwam uit een familie van kenners van het Arabisch. Zijn overlevering in de koranlezingen is bekend. Werken: al-Jāmiʿ, waarin hij volgens az-Zubaydī de meeste leesvarianten verzamelde en elke variant aan zijn lezer toeschreef, Wujūh al-qirāʾāt en Waqf at-tamām.'),
  bio('khalaf', loc(2, 311, 1850),
    'خلف بن هشام البزار الأسدي، أبو محمد (١٥٠–٢٢٩ هـ): أحد القراء العشرة. كان عالمًا عابدًا ثقة. أصله من فم الصلح قرب واسط، واشتهر ببغداد وتوفي فيها مختفيًا زمن الجهمية.',
    'Khalaf ibn Hishām al-Bazzār al-Asadī, Abū Muḥammad (150–229 AH): een van de tien koranlezers, geleerd, vroom en betrouwbaar. Zijn familie kwam uit Fam aṣ-Ṣilḥ bij Wāsiṭ; hij werd bekend in Bagdad en overleed daar ondergedoken, in de tijd van de Jahmiyya.'),
  big('al-bukhari', loc(6, 34, 5058), {
    sum: 'محمد بن إسماعيل بن إبراهيم بن المغيرة البخاري، أبو عبد الله (١٩٤–٢٥٦ هـ): حبر الإسلام، والحافظ لحديث رسول الله ﷺ، صاحب «الجامع الصحيح» المعروف بصحيح البخاري.',
    tl: [['194', 'وُلد في بخارى، ونشأ يتيمًا.'], ['210', 'قام برحلة طويلة في طلب الحديث، فزار خراسان والعراق ومصر والشام، وسمع من نحو ألف شيخ.'], ['—', 'جمع نحو ستمئة ألف حديث، اختار منها في صحيحه ما وثق برواته.'], ['—', 'أقام في بخارى، فتعصّب عليه جماعة ورموه بالتهم، فأُخرج إلى خَرْتَنْك من قرى سمرقند.'], ['256', 'مات في خرتنك.']],
    works: ['الجامع الصحيح (صحيح البخاري)', 'التاريخ (الكبير)', 'الضعفاء في رجال الحديث', 'خلق أفعال العباد', 'الأدب المفرد'],
    role: 'هو أول من وضع في الإسلام كتابًا على نحو «الجامع الصحيح»، وكتابه أوثق الكتب الستة المعوّل عليها في الحديث.'
  }, {
    sum: 'Muḥammad ibn Ismāʿīl ibn Ibrāhīm ibn al-Mughīra al-Bukhārī, Abū ʿAbd Allāh (194–256 AH): de grote geleerde van de islam en ḥāfiẓ van de hadith van de Boodschapper van Allah ﷺ, samensteller van al-Jāmiʿ aṣ-Ṣaḥīḥ, bekend als Ṣaḥīḥ al-Bukhārī.',
    tl: [['194', 'Geboren in Bukhārā; groeide op als wees.'], ['210', 'Begon een lange reis om hadith te verzamelen, naar Khurāsān, Irak, Egypte en de Levant; hij hoorde hadith van ongeveer duizend leraren.'], ['—', 'Verzamelde ongeveer zeshonderdduizend overleveringen, en nam daaruit in zijn Ṣaḥīḥ op wat hij met betrouwbare overleveraars kon staven.'], ['—', 'Vestigde zich in Bukhārā; een groep keerde zich tegen hem en beschuldigde hem, waarna hij werd verdreven naar Khartank, een dorp bij Samarkand.'], ['256', 'Overleden in Khartank.']],
    works: ['al-Jāmiʿ aṣ-Ṣaḥīḥ (Ṣaḥīḥ al-Bukhārī)', 'at-Tārīkh (al-Kabīr)', 'aḍ-Ḍuʿafāʾ, over zwakke overleveraars', 'Khalq afʿāl al-ʿibād', 'al-Adab al-mufrad'],
    role: 'Hij was de eerste in de islam die een werk samenstelde zoals al-Jāmiʿ aṣ-Ṣaḥīḥ, en dat boek is het betrouwbaarste van de zes hadithverzamelingen waarop men steunt.'
  }),
  big('muslim', loc(7, 221, 6597), {
    sum: 'مسلم بن الحجاج بن مسلم القشيري النيسابوري، أبو الحسين (٢٠٤–٢٦١ هـ): حافظ، من أئمة المحدثين، صاحب «صحيح مسلم».',
    tl: [['204', 'وُلد بنيسابور.'], ['—', 'رحل إلى الحجاز ومصر والشام والعراق في طلب الحديث.'], ['—', 'جمع في «صحيحه» اثني عشر ألف حديث، كتبها في خمس عشرة سنة.'], ['261', 'توفي بظاهر نيسابور.']],
    works: ['صحيح مسلم', 'المسند الكبير مرتبًا على الرجال', 'الكنى والأسماء', 'الطبقات، والتمييز، والعلل', 'الأفراد والوحدان'],
    role: 'كتابه «الصحيح» أحد الصحيحين المعوّل عليهما عند أهل السنة في الحديث، وقد شرحه كثيرون.'
  }, {
    sum: 'Muslim ibn al-Ḥajjāj ibn Muslim al-Qushayrī an-Naysābūrī, Abū l-Ḥusayn (204–261 AH): ḥāfiẓ en een van de imams van de hadithwetenschap, samensteller van Ṣaḥīḥ Muslim.',
    tl: [['204', 'Geboren in Nīshāpūr.'], ['—', 'Reisde naar de Ḥijāz, Egypte, de Levant en Irak om hadith te verzamelen.'], ['—', 'Bracht in zijn Ṣaḥīḥ twaalfduizend hadith bijeen, waaraan hij vijftien jaar schreef.'], ['261', 'Overleden aan de rand van Nīshāpūr.']],
    works: ['Ṣaḥīḥ Muslim', 'al-Musnad al-kabīr, geordend naar overleveraar', 'al-Kunā wa-l-asmāʾ', 'aṭ-Ṭabaqāt, at-Tamyīz en al-ʿIlal', 'al-Afrād wa-l-wuḥdān'],
    role: 'Zijn Ṣaḥīḥ is een van de twee Ṣaḥīḥ-verzamelingen waarop ahl as-sunna in de hadith steunen, en veel geleerden hebben er commentaren op geschreven.'
  }),
  big('ibn-abbas', loc(4, 95, 3251), {
    sum: 'عبد الله بن عباس بن عبد المطلب القرشي الهاشمي، أبو العباس (٣ ق هـ – ٦٨ هـ): حبر الأمة، الصحابي الجليل، ابن عم رسول الله ﷺ.',
    tl: [['3 ق هـ', 'وُلد بمكة، ونشأ في بدء عصر النبوة، فلازم رسول الله ﷺ وروى عنه الأحاديث الصحيحة.'], ['—', 'كان عمر إذا أعضلت عليه قضية دعاه وقال: أنت لها ولأمثالها، ثم يأخذ بقوله.'], ['—', 'شهد مع علي الجمل وصفين.'], ['—', 'كُفّ بصره في آخر عمره فسكن الطائف.'], ['68', 'توفي بالطائف.']],
    works: ['له في الصحيحين وغيرهما ١٦٦٠ حديثًا', 'ويُنسب إليه «تفسير القرآن»، جمعه بعض أهل العلم من مرويات المفسرين عنه في كل آية'],
    role: 'هو ترجمان القرآن وحبر الأمة. قال عمرو بن دينار: ما رأيت مجلسًا كان أجمع لكل خير من مجلس ابن عباس: الحلال والحرام والعربية والأنساب والشعر. وكان يجعل أيامه يومًا للفقه، ويومًا للتأويل، ويومًا للمغازي، ويومًا للشعر، ويومًا لوقائع العرب.'
  }, {
    sum: 'ʿAbd Allāh ibn ʿAbbās ibn ʿAbd al-Muṭṭalib al-Qurashī al-Hāshimī, Abū l-ʿAbbās (3 jaar vóór de hijra – 68 AH): "de geleerde van de umma", een vooraanstaande metgezel en neef van de Boodschapper van Allah ﷺ.',
    tl: [['3 v.H.', 'Geboren in Mekka; groeide op in het begin van de profetische tijd, bleef dicht bij de Boodschapper van Allah ﷺ en overleverde authentieke hadith van hem.'], ['—', 'Wanneer ʿUmar voor een moeilijke kwestie stond, riep hij hem en zei: "Jij bent er voor dit soort zaken", en volgde zijn mening.'], ['—', 'Was met ʿAlī aanwezig bij de slag van de Kameel en bij Ṣiffīn.'], ['—', 'Werd op het eind van zijn leven blind en vestigde zich in aṭ-Ṭāʾif.'], ['68', 'Overleden in aṭ-Ṭāʾif.']],
    works: ['In de twee Ṣaḥīḥs en andere verzamelingen staan 1660 hadith van hem', 'Een korancommentaar wordt aan hem toegeschreven; geleerden stelden het samen uit wat de commentatoren per vers van hem overleveren'],
    role: 'Hij is de "vertaler van de Koran" en de geleerde van de umma. ʿAmr ibn Dīnār: ik heb geen bijeenkomst gezien die meer goeds samenbracht dan die van Ibn ʿAbbās: halal en haram, Arabisch, genealogie en poëzie. Hij wijdde zijn dagen afwisselend aan fiqh, koranuitleg, de veldtochten, poëzie en de geschiedenis van de Arabieren.'
  }),
  big('umar-ibn-al-khattab', loc(5, 45, 4094), {
    sum: 'عمر بن الخطاب بن نفيل القرشي العدوي، أبو حفص (٤٠ ق هـ – ٢٣ هـ): ثاني الخلفاء الراشدين، وأول من لُقّب بأمير المؤمنين، الصحابي الجليل، الشجاع الحازم، صاحب الفتوحات، يُضرب بعدله المثل. لقّبه النبي ﷺ بالفاروق.',
    tl: [['40 ق هـ', 'وُلد. وكان في الجاهلية من أبطال قريش وأشرافهم، وله السفارة فيهم.'], ['5 ق هـ', 'أسلم قبل الهجرة بخمس سنين، وهو أحد العمرين اللذين كان النبي ﷺ يدعو ربه أن يعز الإسلام بأحدهما. قال ابن مسعود: ما كنا نقدر أن نصلي عند الكعبة حتى أسلم عمر.'], ['—', 'شهد الوقائع مع رسول الله ﷺ.'], ['13', 'بويع بالخلافة يوم وفاة أبي بكر بعهد منه.'], ['—', 'في أيامه تم فتح الشام والعراق، وافتُتحت القدس والمدائن ومصر والجزيرة.'], ['23', 'توفي.']],
    works: ['له في كتب الحديث ٥٣٧ حديثًا', 'وله كلمات وخطب ورسائل غاية في البلاغة'],
    role: 'هو أول من وضع للعرب التاريخ الهجري، واتخذ بيت مال المسلمين، وأمر ببناء البصرة والكوفة، وأول من دوّن الدواوين في الإسلام لإحصاء أصحاب الأعطيات. وكان يطوف في الأسواق منفردًا، ويقضي بين الناس حيث أدركه الخصوم.'
  }, {
    sum: 'ʿUmar ibn al-Khaṭṭāb ibn Nufayl al-Qurashī al-ʿAdawī, Abū Ḥafṣ (40 jaar vóór de hijra – 23 AH): de tweede rechtgeleide kalief en de eerste die "Amīr al-Muʾminīn" werd genoemd; een vooraanstaande metgezel, moedig en vastberaden, onder wie grote veroveringen plaatsvonden en wiens rechtvaardigheid spreekwoordelijk is. De Profeet ﷺ gaf hem de bijnaam al-Fārūq.',
    tl: [['40 v.H.', 'Geboren. In de jāhiliyya was hij een van de helden en edelen van Quraysh en hun onderhandelaar.'], ['5 v.H.', 'Werd moslim, vijf jaar vóór de hijra; hij is een van de twee ʿUmars over wie de Profeet ﷺ bad dat Allah de islam door een van hen zou versterken. Ibn Masʿūd: wij konden niet bij de Kaʿba bidden tot ʿUmar moslim werd.'], ['—', 'Nam deel aan de veldslagen met de Boodschapper van Allah ﷺ.'], ['13', 'Werd op de sterfdag van Abū Bakr, op diens aanwijzing, als kalief gehuldigd.'], ['—', 'Onder zijn bestuur werden de Levant en Irak veroverd, en ook Jeruzalem, al-Madāʾin, Egypte en al-Jazīra.'], ['23', 'Overleden.']],
    works: ['In de hadithboeken staan 537 hadith van hem', 'Hij liet zeer welsprekende uitspraken, toespraken en brieven na'],
    role: 'Hij voerde als eerste de islamitische jaartelling (vanaf de hijra) in, richtte de staatskas op, liet Baṣra en Kūfa bouwen en stelde als eerste registers (dīwāns) in voor de uitkeringen. Hij liep alleen over de markten en sprak recht waar de partijen hem tegenkwamen.'
  }),
  big('abd-allah-ibn-umar', loc(4, 108, 3292), {
    sum: 'عبد الله بن عمر بن الخطاب العدوي، أبو عبد الرحمن (١٠ ق هـ – ٧٣ هـ): صحابي، من أعزّ بيوتات قريش، كان جريئًا جهيرًا.',
    tl: [['10 ق هـ', 'وُلد بمكة، ونشأ في الإسلام.'], ['—', 'هاجر إلى المدينة مع أبيه، وشهد فتح مكة.'], ['—', 'لما قُتل عثمان عرض عليه نفر أن يبايعوه بالخلافة فأبى.'], ['34', 'غزا إفريقية مرتين: الأولى مع ابن أبي سرح، والثانية مع معاوية بن حديج.'], ['73', 'توفي بمكة بعد أن كُفّ بصره، وهو آخر من توفي بمكة من الصحابة.']],
    works: ['له في كتب الحديث ٢٦٣٠ حديثًا'],
    role: 'أفتى الناس في الإسلام ستين سنة. وفي الإصابة: قال أبو سلمة بن عبد الرحمن: مات ابن عمر وهو مثل عمر في الفضل، وكان عمر في زمان له فيه نظراء، وعاش ابن عمر في زمان ليس له فيه نظير.'
  }, {
    sum: 'ʿAbd Allāh ibn ʿUmar ibn al-Khaṭṭāb al-ʿAdawī, Abū ʿAbd ar-Raḥmān (10 jaar vóór de hijra – 73 AH): metgezel uit een van de edelste families van Quraysh, moedig en openhartig.',
    tl: [['10 v.H.', 'Geboren in Mekka; groeide op in de islam.'], ['—', 'Emigreerde met zijn vader naar Medina en was aanwezig bij de verovering van Mekka.'], ['—', 'Toen ʿUthmān was gedood, wilden enkelen hem als kalief huldigen; hij weigerde.'], ['34', 'Nam twee keer deel aan veldtochten naar Ifrīqiya: met Ibn Abī Sarḥ en met Muʿāwiya ibn Ḥudayj.'], ['73', 'Overleden in Mekka, nadat hij blind was geworden; hij was de laatste metgezel die in Mekka overleed.']],
    works: ['In de hadithboeken staan 2630 hadith van hem'],
    role: 'Hij gaf zestig jaar lang fatwa’s. In al-Iṣāba staat dat Abū Salama ibn ʿAbd ar-Raḥmān zei: Ibn ʿUmar stierf even voortreffelijk als ʿUmar; maar ʿUmar leefde in een tijd met gelijken, terwijl Ibn ʿUmar leefde in een tijd zonder gelijke.'
  }),
  bio('suhayb', loc(3, 210, 2550),
    'صهيب بن سنان بن مالك، من بني النمر بن قاسط، المعروف بصهيب الرومي (٣٢ ق هـ – ٣٨ هـ): صحابي، من أرمى العرب سهمًا، وأحد السابقين إلى الإسلام. سبته الروم صغيرًا فنشأ بينهم، ثم قدم مكة فابتاعه عبد الله بن جدعان وأعتقه، فأقام بمكة يحترف التجارة إلى أن أسلم. ولما أراد الهجرة منعه مشركو قريش، فترك لهم ماله أجمع، فقال النبي ﷺ: «ربح صهيب». شهد بدرًا وأحدًا والمشاهد كلها، وله ٣٠٧ أحاديث، وتوفي في المدينة.',
    'Ṣuhayb ibn Sinān ibn Mālik, van de Banū n-Namir ibn Qāsiṭ, bekend als Ṣuhayb ar-Rūmī (32 jaar vóór de hijra – 38 AH): metgezel, een van de beste boogschutters onder de Arabieren en een van de eersten die de islam aannamen. Als kind werd hij door de Byzantijnen gevangengenomen en groeide hij bij hen op; later kwam hij naar Mekka, waar ʿAbd Allāh ibn Judʿān hem kocht en vrijliet, en hij handel dreef tot hij moslim werd. Toen hij wilde emigreren, hielden de afgodendienaars van Quraysh hem tegen; hij liet hun al zijn bezit, waarop de Profeet ﷺ zei: "Ṣuhayb heeft winst gemaakt." Hij nam deel aan Badr, Uḥud en alle andere veldslagen, overleverde 307 hadith en overleed in Medina.'),
  big('ibn-taymiyya', loc(1, 144, 368), {
    sum: 'أحمد بن عبد الحليم بن عبد السلام بن عبد الله النميري الحراني الدمشقي الحنبلي، أبو العباس، تقي الدين ابن تيمية (٦٦١–٧٢٨ هـ): الإمام، شيخ الإسلام. كان آية في التفسير والأصول، فصيح اللسان، قلمه ولسانه متقاربان.',
    tl: [['661', 'وُلد في حرّان، وتحوّل به أبوه إلى دمشق فنبغ واشتهر.'], ['—', 'ناظر العلماء وبرع في العلم والتفسير، وأفتى ودرّس وهو دون العشرين (كما في الدرر الكامنة).'], ['—', 'طُلب إلى مصر من أجل فتوى أفتى بها، فتعصّب عليه جماعة فسُجن مدة، ونُقل إلى الإسكندرية، ثم أُطلق.'], ['712', 'عاد إلى دمشق.'], ['720', 'اعتُقل بدمشق ثم أُطلق، ثم أُعيد.'], ['728', 'مات معتقلًا بقلعة دمشق، فخرجت دمشق كلها في جنازته.']],
    works: ['الفتاوى', 'منهاج السنة', 'السياسة الشرعية في إصلاح الراعي والرعية', 'رفع الملام عن الأئمة الأعلام', 'الصارم المسلول على شاتم الرسول', 'الفرقان بين أولياء الله وأولياء الشيطان، والإيمان، والقواعد النورانية الفقهية'],
    role: 'كان داعية إصلاح في الدين، وتصانيفه في الدرر الكامنة ربما تزيد على أربعة آلاف كراسة، وفي فوات الوفيات أنها تبلغ ثلاثمئة مجلد، في التفسير والعقيدة والفقه والأصول والرد على المخالفين.'
  }, {
    sum: 'Aḥmad ibn ʿAbd al-Ḥalīm ibn ʿAbd as-Salām ibn ʿAbd Allāh an-Numayrī al-Ḥarrānī ad-Dimashqī al-Ḥanbalī, Abū l-ʿAbbās Taqī ad-Dīn Ibn Taymiyya (661–728 AH): imam, bekend als Shaykh al-Islām. Hij was uitzonderlijk in tafsir en uṣūl, welbespraakt, even sterk met de pen als met het woord.',
    tl: [['661', 'Geboren in Ḥarrān; zijn vader verhuisde met hem naar Damascus, waar hij uitblonk en bekend werd.'], ['—', 'Debatteerde met geleerden en gaf al vóór zijn twintigste les en fatwa’s (volgens ad-Durar al-kāmina).'], ['—', 'Werd naar Egypte geroepen vanwege een fatwa; een groep keerde zich tegen hem, hij werd een tijd gevangengezet, naar Alexandrië overgebracht en daarna vrijgelaten.'], ['712', 'Keerde terug naar Damascus.'], ['720', 'Werd in Damascus vastgezet, vrijgelaten en later opnieuw vastgezet.'], ['728', 'Overleden in gevangenschap in de citadel van Damascus; heel Damascus liep mee in zijn begrafenisstoet.']],
    works: ['al-Fatāwā', 'Minhāj as-sunna', 'as-Siyāsa ash-sharʿiyya fī iṣlāḥ ar-rāʿī wa-r-raʿiyya', 'Rafʿ al-malām ʿan al-aʾimma al-aʿlām', 'aṣ-Ṣārim al-maslūl ʿalā shātim ar-rasūl', 'al-Furqān bayna awliyāʾ Allāh wa-awliyāʾ ash-shayṭān, al-Īmān en al-Qawāʿid an-nūrāniyya al-fiqhiyya'],
    role: 'Hij was een hervormer in de religie. Volgens ad-Durar al-kāmina besloegen zijn werken mogelijk meer dan vierduizend katernen, volgens Fawāt al-wafayāt driehonderd banden, over tafsir, geloofsleer, fiqh, uṣūl en de weerlegging van tegenstanders.'
  }),
  big('ibn-hajar', loc(1, 178, 470), {
    sum: 'أحمد بن علي بن محمد الكناني العسقلاني، أبو الفضل، شهاب الدين ابن حجر (٧٧٣–٨٥٢ هـ): من أئمة العلم والتاريخ، حافظ الإسلام في عصره. أصله من عسقلان بفلسطين.',
    tl: [['773', 'وُلد بالقاهرة.'], ['—', 'وَلِع بالأدب والشعر، ثم أقبل على الحديث، ورحل إلى اليمن والحجاز وغيرهما لسماع الشيوخ.'], ['—', 'علت شهرته فقصده الناس للأخذ عنه، وانتشرت مصنفاته في حياته وتهادتها الملوك.'], ['—', 'ولي قضاء مصر مرات، ثم اعتزل.'], ['852', 'توفي بالقاهرة.']],
    works: ['الإصابة في تمييز الصحابة', 'تهذيب التهذيب، وتقريب التهذيب، ولسان الميزان', 'الدرر الكامنة في أعيان المئة الثامنة', 'بلوغ المرام من أدلة الأحكام', 'نزهة النظر في توضيح نخبة الفكر', 'إنباء الغمر بأنباء العمر، ورفع الإصر عن قضاة مصر'],
    role: 'أصبح حافظ الإسلام في عصره، وكتبه في رجال الحديث ومصطلحه وأحاديث الأحكام من أهم المراجع في هذه العلوم. قال السخاوي: انتشرت مصنفاته في حياته وتهادتها الملوك وكتبها الأكابر.'
  }, {
    sum: 'Aḥmad ibn ʿAlī ibn Muḥammad al-Kinānī al-ʿAsqalānī, Abū l-Faḍl Shihāb ad-Dīn Ibn Ḥajar (773–852 AH): een van de grote geleerden in kennis en geschiedenis, de ḥāfiẓ van de islam in zijn tijd. Zijn familie kwam uit ʿAsqalān in Palestina.',
    tl: [['773', 'Geboren in Caïro.'], ['—', 'Was eerst gegrepen door letterkunde en poëzie, legde zich daarna toe op de hadith en reisde naar Jemen, de Ḥijāz en elders om bij leraren te horen.'], ['—', 'Werd zo bekend dat men van heinde en verre bij hem kwam studeren; zijn werken verspreidden zich al tijdens zijn leven en vorsten gaven ze elkaar ten geschenke.'], ['—', 'Was meermaals rechter van Egypte en trok zich daarna terug.'], ['852', 'Overleden in Caïro.']],
    works: ['al-Iṣāba fī tamyīz aṣ-ṣaḥāba', 'Tahdhīb at-tahdhīb, Taqrīb at-tahdhīb en Lisān al-mīzān', 'ad-Durar al-kāmina fī aʿyān al-miʾa ath-thāmina', 'Bulūgh al-marām min adillat al-aḥkām', 'Nuzhat an-naẓar fī tawḍīḥ Nukhbat al-fikar', 'Inbāʾ al-ghumr bi-anbāʾ al-ʿumr en Rafʿ al-iṣr ʿan quḍāt Miṣr'],
    role: 'Hij werd de ḥāfiẓ van zijn tijd; zijn werken over de overleveraars, de hadithterminologie en de juridische hadith zijn belangrijke naslagwerken. As-Sakhāwī: zijn werken verspreidden zich tijdens zijn leven, vorsten gaven ze elkaar ten geschenke en de groten schreven ze over.'
  }),
  big('ahmad-ibn-hanbal', loc(1, 203, 542), {
    sum: 'أحمد بن محمد بن حنبل، أبو عبد الله، الشيباني الوائلي (١٦٤–٢٤١ هـ): إمام المذهب الحنبلي، وأحد الأئمة الأربعة. أصله من مرو، وكان أبوه والي سرخس.',
    tl: [['164', 'وُلد ببغداد، فنشأ منكبًّا على طلب العلم.'], ['—', 'سافر في طلب العلم أسفارًا كبيرة إلى الكوفة والبصرة ومكة والمدينة واليمن والشام والثغور وفارس وخراسان وغيرها.'], ['—', 'دعا المأمون إلى القول بخلق القرآن، ومات قبل أن يناظره. ثم سجنه المعتصم ثمانية وعشرين شهرًا لامتناعه عن القول بخلق القرآن.'], ['220', 'أُطلق من السجن، ولم يصبه شر في زمن الواثق.'], ['—', 'لما ولي المتوكل أكرمه وقدّمه، ومكث مدة لا يولّي أحدًا إلا بمشورته.'], ['241', 'توفي وهو على تقدّمه عند المتوكل.']],
    works: ['المسند (يحتوي على ثلاثين ألف حديث)', 'فضائل الصحابة', 'الزهد', 'الرد على الزنادقة فيما ادعت به من متشابه القرآن', 'العلل ومعرفة الرجال، والمسائل، والناسخ والمنسوخ'],
    role: 'إليه ينتسب المذهب الحنبلي، و«المسند» من أوسع دواوين السنة. وثباته في محنة القول بخلق القرآن من أشهر مواقفه.'
  }, {
    sum: 'Aḥmad ibn Muḥammad ibn Ḥanbal, Abū ʿAbd Allāh ash-Shaybānī al-Wāʾilī (164–241 AH): imam van de Ḥanbalitische school en een van de vier imams. Zijn familie kwam uit Marw; zijn vader was gouverneur van Sarakhs.',
    tl: [['164', 'Geboren in Bagdad; groeide op met een volle toewijding aan het zoeken van kennis.'], ['—', 'Maakte grote studiereizen naar Kūfa, Baṣra, Mekka, Medina, Jemen, de Levant, de grensgebieden, Fārs, Khurāsān en elders.'], ['—', 'Kalief al-Maʾmūn riep op tot de leer dat de Koran geschapen is, maar stierf voordat hij met Aḥmad kon debatteren. Kalief al-Muʿtaṣim zette hem 28 maanden gevangen omdat hij weigerde dat te zeggen.'], ['220', 'Vrijgelaten; onder kalief al-Wāthiq overkwam hem niets.'], ['—', 'Kalief al-Mutawakkil eerde hem en benoemde een tijd niemand zonder zijn advies.'], ['241', 'Overleden, terwijl hij nog in aanzien stond bij al-Mutawakkil.']],
    works: ['al-Musnad (dertigduizend hadith)', 'Faḍāʾil aṣ-ṣaḥāba', 'az-Zuhd', 'ar-Radd ʿalā z-zanādiqa, over de dubbelzinnige verzen van de Koran', 'al-ʿIlal wa-maʿrifat ar-rijāl, al-Masāʾil en an-Nāsikh wa-l-mansūkh'],
    role: 'De Ḥanbalitische school draagt zijn naam, en zijn Musnad is een van de omvangrijkste hadithverzamelingen. Zijn standvastigheid in de beproeving rond de geschapenheid van de Koran is een van de bekendste episodes uit zijn leven.'
  }),
  big('sad-ibn-abi-waqqas', loc(3, 87, 2184), {
    sum: 'سعد بن أبي وقاص مالك بن أهيب بن عبد مناف القرشي الزهري، أبو إسحاق (٢٣ ق هـ – ٥٥ هـ): الصحابي الأمير، فاتح العراق ومدائن كسرى، وأحد العشرة المبشرين بالجنة، وأحد الستة الذين عيّنهم عمر للخلافة، وأول من رمى بسهم في سبيل الله، ويقال له فارس الإسلام.',
    tl: [['23 ق هـ', 'وُلد.'], ['—', 'أسلم وهو ابن سبع عشرة سنة.'], ['—', 'شهد بدرًا.'], ['—', 'افتتح القادسية، ونزل أرض الكوفة فجعلها خططًا لقبائل العرب، وظل واليًا عليها مدة عمر بن الخطاب، وأقرّه عثمان زمنًا ثم عزله.'], ['—', 'عاد إلى المدينة فأقام قليلًا وفقد بصره.'], ['55', 'مات في قصره بالعقيق على عشرة أميال من المدينة، وحُمل إليها.']],
    works: ['له في كتب الحديث ٢٧١ حديثًا'],
    role: 'قاد فتح العراق وأسّس الكوفة، وهو أحد العشرة المبشرين بالجنة.'
  }, {
    sum: 'Saʿd ibn Abī Waqqāṣ Mālik ibn Uhayb ibn ʿAbd Manāf al-Qurashī az-Zuhrī, Abū Isḥāq (23 jaar vóór de hijra – 55 AH): metgezel en legeraanvoerder, veroveraar van Irak en van de Perzische hoofdstad al-Madāʾin, een van de tien aan wie het Paradijs is beloofd, een van de zes die ʿUmar aanwees voor de keuze van de kalief, en de eerste die een pijl afschoot op de weg van Allah; hij werd "de ruiter van de islam" genoemd.',
    tl: [['23 v.H.', 'Geboren.'], ['—', 'Werd moslim op zeventienjarige leeftijd.'], ['—', 'Nam deel aan de slag bij Badr.'], ['—', 'Veroverde al-Qādisiyya, vestigde zich in Kūfa en verdeelde de stad in wijken voor de Arabische stammen; hij was er gouverneur zolang ʿUmar kalief was, en ʿUthmān liet hem een tijd aan, waarna hij werd ontslagen.'], ['—', 'Keerde terug naar Medina en werd blind.'], ['55', 'Overleden in zijn huis in al-ʿAqīq, tien mijl van Medina, en daarheen overgebracht.']],
    works: ['In de hadithboeken staan 271 hadith van hem'],
    role: 'Hij leidde de verovering van Irak en stichtte Kūfa; hij is een van de tien aan wie het Paradijs is beloofd.'
  }),
  big('al-qarafi', loc(1, 94, 223), {
    sum: 'أحمد بن إدريس بن عبد الرحمن، أبو العباس، شهاب الدين الصنهاجي القرافي (ت ٦٨٤ هـ): من علماء المالكية، نسبته إلى قبيلة صنهاجة وإلى القرافة، المحلة المجاورة لقبر الإمام الشافعي بالقاهرة. مصري المولد والمنشأ والوفاة.',
    tl: [['—', 'وُلد ونشأ في مصر.'], ['684', 'توفي في مصر.']],
    works: ['أنوار البروق في أنواء الفروق (الفروق، أربعة أجزاء)', 'الذخيرة في فقه المالكية', 'الإحكام في تمييز الفتاوى عن الأحكام وتصرفات القاضي والإمام', 'شرح تنقيح الفصول في الأصول، ومختصر تنقيح الفصول', 'الأجوبة الفاخرة عن الأسئلة الفاجرة'],
    role: 'له مصنفات جليلة في الفقه والأصول، و«الفروق» من أهم ما صُنّف في القواعد الفقهية. وكان مع تبحره في عدة فنون بارعًا في صنع الآلات المتحركة، كما ذكر عن نفسه في شرح المحصول.'
  }, {
    sum: 'Aḥmad ibn Idrīs ibn ʿAbd ar-Raḥmān, Abū l-ʿAbbās Shihāb ad-Dīn aṣ-Ṣanhājī al-Qarāfī (overleden 684 AH): Mālikitische geleerde; zijn naam verwijst naar de stam Ṣanhāja en naar al-Qarāfa, de wijk bij het graf van imam ash-Shāfiʿī in Caïro. Geboren, opgegroeid en overleden in Egypte.',
    tl: [['—', 'Geboren en opgegroeid in Egypte.'], ['684', 'Overleden in Egypte.']],
    works: ['Anwār al-burūq fī anwāʾ al-furūq (al-Furūq, vier delen)', 'adh-Dhakhīra over Mālikitische fiqh', 'al-Iḥkām fī tamyīz al-fatāwā ʿan al-aḥkām wa-taṣarrufāt al-qāḍī wa-l-imām', 'Sharḥ Tanqīḥ al-fuṣūl (uṣūl) en een samenvatting daarvan', 'al-Ajwiba al-fākhira ʿan al-asʾila al-fājira'],
    role: 'Hij schreef belangrijke werken over fiqh en uṣūl; al-Furūq is een van de belangrijkste boeken over de juridische grondregels (qawāʿid). Naast zijn kennis van vele vakken was hij bedreven in het bouwen van bewegende mechanismen, zoals hij zelf in zijn commentaar op al-Maḥṣūl beschrijft.'
  })
]
