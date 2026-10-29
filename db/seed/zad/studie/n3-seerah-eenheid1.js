// Hoofdstukkaart bij السيرة النبوية (٣), eenheid 1: met zijn vrouwen (lessen 1–4, boek p. 10–22).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-seerah',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب السيرة النبوية (٣)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (3), Zad-reeks'],
    pages: '10–22',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Seerah/page/n{p}/mode/1up'
  },
  title: ['تعامله ﷺ مع أزواجه', 'Zijn omgang ﷺ met zijn vrouwen'],
  subtitle: ['أربعة دروس مجموعة في صفحة واحدة', 'Vier lessen samen op één pagina'],
  summary: [
    'الرسول ﷺ القدوة الحسنة، وكان خير الناس لأهله: يخدم في بيته، ويؤانس أزواجه، ويفي لخديجة بعد موتها، ويصرح بحبه، ويلاطف ويراعي المشاعر، ولا يضرب، ويحث على الطاعة وينهى عن المنكر والغيبة، ويحسن الظن، ويعالج المشكلات بالتروي والاستشارة كما في قصة الإفك والتخيير.',
    'De Boodschapper ﷺ is het beste voorbeeld en was de beste voor zijn gezin: hij hielp thuis, zocht de nabijheid van zijn vrouwen, bleef Khadīja trouw na haar dood, sprak zijn liefde uit, was zacht en hield rekening met gevoelens, sloeg nooit, spoorde aan tot gehoorzaamheid, verbood kwaad en roddel, dacht goed over hen, en loste problemen op met kalmte en overleg, zoals bij de laster en bij de keuze die hij zijn vrouwen gaf.'
  ],
  map: {
    title: ['تعامله مع أزواجه في خريطة واحدة', 'Zijn omgang met zijn vrouwen in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['مع أزواجه ﷺ', 'Met zijn vrouwen ﷺ'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['القدوة الحسنة', 'Het beste voorbeeld'], sub: ['الدرس ١', 'les 1'], page: 10, children: [['أحد عشر زوجة', 'elf vrouwen'], ['خدمة الأهل', 'helpen in huis'], ['المؤانسة', 'nabijheid']] },
      { label: ['الوفاء والحب', 'Trouw en liefde'], sub: ['الدرس ٢', 'les 2'], page: 12, children: [['الوفاء لخديجة', 'trouw aan Khadīja'], ['التصريح بالحب', 'liefde uitspreken'], ['ملاطفة الحائض', 'zachtheid tijdens menstruatie']] },
      { label: ['مراعاة المشاعر', 'Rekening houden met gevoelens'], sub: ['الدرس ٣', 'les 3'], page: 15, children: [['معرفة رضاها وغضبها', 'haar tevredenheid en boosheid kennen'], ['الشفقة في المرض', 'medeleven bij ziekte'], ['الحث على الطاعة', 'aansporen tot gehoorzaamheid']] },
      { label: ['الغيبة والمشكلات', 'Roddel en problemen'], sub: ['الدرس ٤', 'les 4'], page: 18, children: [['النهي عن الغيبة', 'verbod op roddel'], ['إحسان الظن', 'goed denken'], ['قصة الإفك والتخيير', 'de laster en de keuze']] }
    ]
  },
  points: [
    [10, 'الآية ﴿لقد كان لكم في رسول الله أسوة حسنة﴾ أصل كبير في التأسي به ﷺ في أقواله وأفعاله وأحواله.', 'Het vers "in de Boodschapper van Allah hebben jullie een mooi voorbeeld" is een grote basis om hem ﷺ te volgen in woorden, daden en toestanden.'],
    [10, 'تزوج ﷺ إحدى عشرة امرأة، ومات عن تسع؛ ماتت خديجة وزينب بنت خزيمة قبله.', 'Hij ﷺ trouwde elf vrouwen en liet er negen na; Khadīja en Zaynab bint Khuzayma stierven vóór hem.'],
    [11, 'كان ﷺ في مهنة أهله: يخيط ثوبه ويخصف نعله ويخدم نفسه، فإذا حضرت الصلاة خرج إليها.', 'Hij ﷺ hielp in huis: hij naaide zijn kleding, repareerde zijn sandalen en diende zichzelf; als het gebed kwam, ging hij erheen.'],
    [12, 'لم يتزوج على خديجة حتى ماتت، وظل يذكرها ويصل صدائقها بعد موتها.', 'Hij trouwde niemand anders zolang Khadīja leefde, en bleef haar noemen en haar vriendinnen eren na haar dood.'],
    [15, 'لم يضرب ﷺ امرأة ولا خادما قط، وأوصى بالنساء خيرا.', 'Hij ﷺ sloeg nooit een vrouw of een bediende, en raadde aan goed te zijn voor vrouwen.'],
    [18, 'من الغيبة المحرمة المحاكاة، كأن يمشي متعارجا تقليدا لغيره.', 'Nadoen hoort bij verboden roddel, bijvoorbeeld mank lopen om iemand na te bootsen.'],
    [20, 'في قصة الإفك: تروى شهرا، وغير معاملته، واستشار قبل أن يحكم.', 'Bij de laster wachtte hij een maand, veranderde hij zijn omgang en vroeg hij raad voordat hij oordeelde.'],
    [21, 'براءة عائشة قطعية بنص القرآن، ومن شك فيها كفر بالإجماع.', 'De onschuld van ʿĀʾisha staat vast door de Koran; wie eraan twijfelt is volgens consensus ongelovig.']
  ],
  terms: [
    ['القدوة', 'al-qudwa', 10, 'من يقتدى به ويتأسى به.', 'Iemand die men volgt als voorbeeld.'],
    ['مهنة أهله', 'mihnat ahlihi', 11, 'خدمة أهله.', 'Helpen in huis.'],
    ['يفلي ثوبه', 'yaflī thawbahu', 11, 'ينظر هل فيه قمل أو أذى.', 'Kijken of er luis of vuil in zijn kleding zit.'],
    ['إربه', 'irbahu', 13, 'حاجته.', 'Zijn behoefte.'],
    ['يفرك', 'yafrak', 15, 'يبغض.', 'Haten.'],
    ['يتخونهم', 'yatakhawwanuhum', 18, 'يظن بهم الخيانة ويكشف أستارهم.', 'Ontrouw bij hen vermoeden en hun geheimen blootleggen.'],
    ['الإفك', 'al-ifk', 20, 'الكذب والافتراء؛ وهو ما رميت به عائشة.', 'Leugen en laster; waarvan ʿĀʾisha beschuldigd werd.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['كيف عالج قصة الإفك', 'Hoe hij de laster aanpakte'],
      intro: ['دروس للتعامل مع الزوجة.', 'Lessen voor de omgang met de echtgenote.'],
      nodes: [
        [20, 'التروي', 'Kalmte', 'لم يكلم عائشة في الأمر شهرا', 'een maand sprak hij ʿĀʾisha er niet over aan'],
        [20, 'تغيير المعاملة', 'Andere omgang', 'لم تر منه اللطف الذي كانت تعرفه', 'zij zag niet de vriendelijkheid van voorheen'],
        [20, 'الاستشارة', 'Overleg', 'سأل أسامة وعليا وبريرة وزينب', 'vroeg Usāma, ʿAlī, Barīra en Zaynab'],
        [21, 'التحمل بعد البراءة', 'Geduld na de vrijspraak', 'تحمل قولها: لا أحمد إلا الله', 'verdroeg haar woorden: ik prijs alleen Allah']
      ]
    },
    {
      type: 'cards',
      title: ['صور من حسن عشرته', 'Voorbeelden van zijn goede omgang'],
      intro: ['مما ذكره الكتاب مع أدلته.', 'Uit het boek, met bewijs.'],
      nodes: [
        [11, 'خدمة الأهل', 'Helpen in huis', 'كان في مهنة أهله', 'hij hielp in huis'],
        [13, 'التصريح بالحب', 'Liefde uitspreken', 'أحب الناس إليه عائشة', 'ʿĀʾisha was hem het liefst'],
        [14, 'الاغتسال من إناء واحد', 'Uit één vat wassen', '', ''],
        [16, 'الشفقة في المرض', 'Medeleven bij ziekte', 'يمسح بيمينه ويرقي', 'wreef met zijn rechterhand en las over haar'],
        [17, 'الحث على الطاعة', 'Aansporen tot gehoorzaamheid', 'قومي فأوتري يا عائشة', '"sta op en bid de witr, ʿĀʾisha"']
      ]
    }
  ],
  sections: [
    [13, 'التصريح للزوجة بالحب', 'Liefde uitspreken tegen je vrouw', 'سئل ﷺ: أي الناس أحب إليك؟ قال: عائشة؛ وكم من امرأة وقعت في الشر لأنها وجدت من يسمعها الكلام الجميل الذي لم تجده عند زوجها.', 'Hem ﷺ werd gevraagd wie hem het liefst was; hij zei: ʿĀʾisha. Hoeveel vrouwen raakten in het kwaad omdat zij bij een ander de mooie woorden vonden die ze bij hun man niet hoorden.'],
    [16, 'الرضا بقدر الله', 'Tevreden met Allahs beschikking', 'مع حبه للأولاد لم يعاتب أحدا من أزواجه أنها لم تلد له، ولم ينقص من حبها أو حقها.', 'Hoewel hij veel van kinderen hield, verweet hij geen van zijn vrouwen dat zij hem geen kind baarde, en verminderde hij haar liefde of rechten niet.'],
    [21, 'التخيير', 'De keuze', 'لما طالبته أزواجه بالنفقة نزلت آيات التخيير، فبدأ بعائشة فاختارت الله ورسوله والدار الآخرة، وقال: إن الله لم يبعثني معنتا ولا متعنتا، ولكن بعثني معلما ميسرا.', 'Toen zijn vrouwen meer onderhoud vroegen, kwamen de verzen van de keuze; hij begon bij ʿĀʾisha, die Allah, zijn Boodschapper en het hiernamaals koos. Hij zei: Allah zond mij niet om het zwaar te maken, maar als leraar die het makkelijk maakt.'],
    [22, 'مراعاة حال الزوج', 'Rekening houden met de man', 'على المرأة أن تراعي حال زوجها، فلا تكلفه من المطالب ما قد يلجئه إلى الكسب المحرم.', 'De vrouw moet rekening houden met de toestand van haar man en hem niet belasten met eisen die hem tot verboden verdienste kunnen dwingen.']
  ],
  keycards: [
    ['opsomming', 10, 'أزواجه ﷺ', 'Zijn vrouwen ﷺ', ['خديجة بنت خويلد', 'عائشة بنت أبي بكر', 'حفصة بنت عمر', 'سودة بنت زمعة', 'زينب بنت جحش', 'زينب بنت خزيمة', 'أم سلمة', 'أم حبيبة', 'ميمونة بنت الحارث', 'جويرية بنت الحارث', 'صفية بنت حيي'], ['Khadīja bint Khuwaylid', 'ʿĀʾisha bint Abī Bakr', 'Ḥafṣa bint ʿUmar', 'Sawda bint Zamʿa', 'Zaynab bint Jaḥsh', 'Zaynab bint Khuzayma', 'Umm Salama', 'Umm Ḥabība', 'Maymūna bint al-Ḥārith', 'Juwayriya bint al-Ḥārith', 'Ṣafiyya bint Ḥuyayy']],
    ['definitie', 14, 'معنى ﴿فاعتزلوا النساء في المحيض﴾', 'Betekenis van "houd je verre van vrouwen tijdens de menstruatie"', ['المراد: اجتنبوا وطأهن', 'وكان ﷺ يضطجع مع الحائض ويتكئ في حجرها ويشرب من موضع فيها'], ['bedoeld is: mijd geslachtsgemeenschap', 'hij ﷺ lag naast haar, leunde in haar schoot en dronk waar zij gedronken had']]
  ],
  hadith: [
    { text: 'خيركم خيركم لأهله، وأنا خيركم لأهلي', takhrij: 'رواه الترمذي وصححه', takhrijNl: 'at-Tirmidhī, die hem authentiek noemde', nl: 'De besten van jullie zijn de besten voor hun gezin, en ik ben de beste van jullie voor mijn gezin', pages: [11] },
    { text: 'كان يكون في مهنة أهله، فإذا حضرت الصلاة خرج إليها', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Hij hielp in huis, en als het gebed kwam, ging hij erheen', pages: [11] },
    { text: 'ما غرت على أحد من نساء النبي ﷺ ما غرت على خديجة … إنها كانت، وكانت، وكان لي منها ولد', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Ik was op geen van de vrouwen van de Profeet ﷺ zo jaloers als op Khadīja … Zij was zo en zo, en ik had kinderen van haar', pages: [12] },
    { text: 'استوصوا بالنساء خيرا، فإنهن خلقن من ضلع، وإن أعوج شيء في الضلع أعلاه …', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Wees goed voor de vrouwen, want zij zijn geschapen uit een rib, en het meest gebogen deel van de rib is het bovenste …', pages: [15] },
    { text: 'ما ضرب رسول الله ﷺ شيئا قط بيده، ولا امرأة، ولا خادما، إلا أن يجاهد في سبيل الله', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Boodschapper van Allah ﷺ sloeg nooit iets met zijn hand, geen vrouw en geen bediende, behalve in de strijd op Allahs weg', pages: [15] },
    { text: 'لا يفرك مؤمن مؤمنة، إن كره منها خلقا رضي منها آخر', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Een gelovige man haat een gelovige vrouw niet: heeft hij een hekel aan één eigenschap van haar, dan is hij tevreden met een andere', pages: [15] },
    { text: 'إني لأعلم إذا كنت عني راضية، وإذا كنت علي غضبى …', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Ik weet wanneer je tevreden over me bent en wanneer je boos op me bent …', pages: [15] },
    { text: 'يا عائشة استتري من النار ولو بشق تمرة، فإنها تسد من الجائع مسدها من الشبعان', takhrij: 'رواه أحمد وحسنه الألباني', takhrijNl: 'Aḥmad; al-Albānī noemde hem ḥasan', nl: 'ʿĀʾisha, bescherm jezelf tegen het Vuur, al is het met een halve dadel, want die vult bij een hongerige wat zij bij een verzadigde vult', pages: [17] },
    { text: 'نهى رسول الله ﷺ أن يطرق الرجل أهله ليلا، يتخونهم أو يلتمس عثراتهم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'جابر', narratorNl: 'Jābir', nl: 'De Boodschapper van Allah ﷺ verbood dat een man ’s nachts onverwacht bij zijn gezin binnenkomt, ontrouw vermoedend of op zoek naar hun fouten', pages: [18] },
    { text: 'إن الله لم يبعثني معنتا ولا متعنتا، ولكن بعثني معلما ميسرا', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'في قصة تخيير أزواجه.', nlNote: 'Bij de keuze die hij zijn vrouwen gaf.', nl: 'Allah zond mij niet om het zwaar te maken of fouten te zoeken, maar als leraar die het makkelijk maakt', pages: [21] }
  ],
  persons: [
    ['ibn-kathir', 'text', [10], 'قال: هذه الآية أصل كبير في التأسي برسول الله ﷺ.', 'Zei: dit vers is een grote basis om de Boodschapper ﷺ te volgen.'],
    ['khadija', 'text', [10, 12], 'أول أزواجه، وفى لها بعد موتها.', 'Zijn eerste vrouw; hij bleef haar trouw na haar dood.'],
    ['aisha', 'text', [11, 13, 20], 'أحب أزواجه إليه، وبرأها الله من الإفك.', 'Zijn meest geliefde vrouw; Allah sprak haar vrij van de laster.'],
    ['hafsa-bint-umar', 'text', [10], 'من أزواجه ﷺ.', 'Een van zijn vrouwen ﷺ.'],
    ['sawda-bint-zama', 'text', [10], 'من أزواجه ﷺ.', 'Een van zijn vrouwen ﷺ.'],
    ['zaynab-bint-jahsh', 'text', [10, 20], 'من أزواجه، واستشارها في الإفك.', 'Een van zijn vrouwen; hij vroeg haar om raad bij de laster.'],
    ['zaynab-bint-khuzayma', 'text', [10], 'من أزواجه، ماتت قبله.', 'Een van zijn vrouwen; zij stierf vóór hem.'],
    ['umm-salama', 'text', [10, 14], 'من أزواجه، وروت الاغتسال معه من إناء واحد.', 'Een van zijn vrouwen; zij overleverde dat zij zich samen uit één vat wasten.'],
    ['umm-habiba', 'text', [10], 'من أزواجه ﷺ.', 'Een van zijn vrouwen ﷺ.'],
    ['maymuna-bint-al-harith', 'text', [10], 'من أزواجه ﷺ.', 'Een van zijn vrouwen ﷺ.'],
    ['juwayriya-bint-al-harith', 'text', [10], 'من أزواجه ﷺ.', 'Een van zijn vrouwen ﷺ.'],
    ['safiyya-bint-huyayy', 'text', [10, 16], 'من أزواجه، ومسح دموعها لما بكت.', 'Een van zijn vrouwen; hij veegde haar tranen af toen zij huilde.'],
    ['amr-ibn-al-as', 'text', [13], 'سأله: أي الناس أحب إليك؟', 'Vroeg hem: wie is u het liefst?'],
    ['jabir-ibn-abdallah', 'text', [16, 18], 'روى لينه مع عائشة ونهيه عن طروق الأهل ليلا.', 'Overleverde zijn zachtheid met ʿĀʾisha en zijn verbod om ’s nachts onverwacht thuis te komen.'],
    ['an-nawawi', 'text', [18, 21], 'عد المحاكاة من الغيبة، ونقل الإجماع على براءة عائشة.', 'Rekende nadoen tot roddel en vermeldde de consensus over de onschuld van ʿĀʾisha.'],
    ['usama-ibn-zayd', 'text', [20], 'استشاره النبي ﷺ في الإفك.', 'De Profeet ﷺ vroeg hem om raad bij de laster.'],
    ['ali-ibn-abi-talib', 'text', [20], 'استشاره النبي ﷺ في الإفك.', 'De Profeet ﷺ vroeg hem om raad bij de laster.'],
    ['barira', 'text', [20], 'خادمة عائشة، سئلت عنها في الإفك.', 'De dienares van ʿĀʾisha, die over haar werd ondervraagd bij de laster.']
  ],
  review: [
    ['النبي ﷺ القدوة الحسنة وخير الناس لأهله.', 'De Profeet ﷺ is het beste voorbeeld en de beste voor zijn gezin.'],
    ['كان يخدم أهله ويؤانسهن ويصرح بحبه.', 'Hij hielp zijn gezin, zocht hun nabijheid en sprak zijn liefde uit.'],
    ['وفى لخديجة بعد موتها.', 'Hij bleef Khadīja trouw na haar dood.'],
    ['لم يضرب امرأة قط، وكان يراعي مشاعر أزواجه.', 'Hij sloeg nooit een vrouw en hield rekening met de gevoelens van zijn vrouwen.'],
    ['عالج مشكلات بيته بالتروي والاستشارة واليسر.', 'Hij loste problemen thuis op met kalmte, overleg en gemak.']
  ],
  quiz: [
    { type: 'mc', page: 10, q: ['كم كان عدد أزواجه ﷺ؟', 'Hoeveel vrouwen had hij ﷺ?'], options: [['إحدى عشرة', 'تسع', 'سبع', 'أربع'], ['elf', 'negen', 'zeven', 'vier']], answer: 0, explain: ['ومات عن تسع.', 'Hij liet er negen na.'] },
    { type: 'tf', page: 12, q: ['تزوج النبي ﷺ على خديجة في حياتها.', 'De Profeet ﷺ trouwde een andere vrouw terwijl Khadīja nog leefde.'], answer: 1, explain: ['لم يتزوج عليها حتى ماتت.', 'Hij trouwde niemand anders tot zij stierf.'] },
    { type: 'mc', page: 15, q: ['كيف عرف النبي ﷺ أن عائشة غضبى؟', 'Hoe wist de Profeet ﷺ dat ʿĀʾisha boos was?'], options: [['تقول: لا ورب إبراهيم', 'لا تكلمه', 'تخرج من البيت', 'تبكي'], ['zij zei: nee, bij de Heer van Ibrāhīm', 'zij sprak niet met hem', 'zij ging het huis uit', 'zij huilde']], answer: 0, explain: ['وإذا رضيت قالت: لا ورب محمد.', 'Als zij tevreden was, zei zij: nee, bij de Heer van Muḥammad.'] },
    { type: 'mc', page: 18, q: ['ما معنى «يتخونهم»؟', 'Wat betekent yatakhawwanuhum?'], options: [['يظن بهم الخيانة', 'يعطيهم الأمان', 'يخدمهم', 'يزورهم'], ['ontrouw bij hen vermoeden', 'hun veiligheid geven', 'hen dienen', 'hen bezoeken']], answer: 0, explain: ['ويكشف أستارهم.', 'En hun geheimen blootleggen.'] },
    { type: 'mc', page: 20, q: ['من استشار النبي ﷺ في قصة الإفك؟', 'Wie vroeg de Profeet ﷺ om raad bij de laster?'], options: [['أسامة وعليا وبريرة وزينب', 'أبا بكر وعمر', 'عثمان وطلحة', 'لم يستشر أحدا'], ['Usāma, ʿAlī, Barīra en Zaynab', 'Abū Bakr en ʿUmar', 'ʿUthmān en Ṭalḥa', 'niemand']], answer: 0, explain: ['في سرية تامة.', 'In volle geheimhouding.'] },
    { type: 'tf', page: 21, q: ['من شك في براءة عائشة بعد نزول القرآن كفر بالإجماع.', 'Wie na de openbaring twijfelt aan de onschuld van ʿĀʾisha, is volgens consensus ongelovig.'], answer: 0, explain: ['لأنها براءة قطعية بنص القرآن.', 'Omdat haar onschuld vaststaat door de Koran.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ١٩ و٢٢.', 'Oefeningen van het boek op p. 19 en 22. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
