// Hoofdstukkaart bij الفقه (٣), eenheid 1: het boek van het vasten (lessen 1–13, boek p. 10–39).
// Opgesteld uit de leesnotities van het boek; regels, hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-fiqh',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب الفقه (٣)، سلسلة زاد العلمية', 'Al-Fiqh (3), Zad-reeks'],
    pages: '10–39',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Fiqh/page/n{p}/mode/1up'
  },
  title: ['كتاب الصيام', 'Het boek van het vasten'],
  subtitle: ['ثلاثة عشر درسا مجموعة في صفحة واحدة', 'Dertien lessen samen op één pagina'],
  summary: [
    'الصيام التعبد لله بالإمساك عن المفطرات من طلوع الفجر إلى غروب الشمس. صيام رمضان واجب على كل مكلف بشروطه، ويثبت دخوله برؤية الهلال أو إكمال شعبان. يباح الفطر للمسافر والمريض والحامل والمرضع، ويجب على الحائض والنفساء مع القضاء. ويفسد الصوم بالأكل والشرب والقيء والجماع وإنزال المني والحيض والحجامة والردة بشروط العلم والذكر والعمد. ويستحب السحور وتعجيل الفطر والدعاء والإكثار من البر، ويشرع صوم التطوع، ويحرم صوم العيدين وأيام التشريق ويوم الشك.',
    'Vasten is Allah aanbidden door zich te onthouden van wat het vasten verbreekt, van de dageraad tot zonsondergang. Ramaḍān is verplicht voor elke verantwoordelijke die aan de voorwaarden voldoet; het begin staat vast door het zien van de maansikkel of het voltooien van Shaʿbān. De reiziger, de zieke, de zwangere en de zogende mogen niet vasten; de menstruerende en de kraamvrouw moeten breken en later inhalen. Het vasten wordt verbroken door eten en drinken, braken, gemeenschap, zaadlozing, menstruatie, cupping en afvalligheid, onder de voorwaarden kennis, herinnering en opzet. Aanbevolen zijn suḥūr, snel breken, smeekbeden en veel goede daden; vrijwillig vasten is voorgeschreven; verboden is vasten op de twee feestdagen, de dagen van tashrīq en de twijfeldag.'
  ],
  map: {
    title: ['كتاب الصيام في خريطة واحدة', 'Het vasten in één kaart'],
    intro: ['أبواب الوحدة كما رتبها الكتاب.', 'De hoofdstukken van de eenheid in de volgorde van het boek.'],
    root: [['كتاب الصيام', 'Het vasten'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['التعريف والحكم', 'Definitie en oordeel'], sub: ['الدروس ١–٣', 'les 1–3'], page: 11, children: [['النية', 'de intentie'], ['رؤية الهلال', 'de maansikkel'], ['شروط الوجوب', 'voorwaarden'], ['أقسام الصيام', 'soorten vasten']] },
      { label: ['الأعذار', 'Redenen om niet te vasten'], sub: ['الدروس ٤–٦', 'les 4–6'], page: 19, children: [['السفر', 'reis'], ['المرض', 'ziekte'], ['الحمل والرضاع', 'zwangerschap en borstvoeding'], ['الحيض والنفاس', 'menstruatie en kraambed']] },
      { label: ['المفطرات', 'Wat het vasten verbreekt'], sub: ['الدروس ٧–٩', 'les 7–9'], page: 25, children: [['الأكل والشرب', 'eten en drinken'], ['الجماع وكفارته', 'gemeenschap en de boete'], ['شروط التفطير', 'voorwaarden']] },
      { label: ['المستحبات والمكروهات', 'Aanbevolen en afgeraden'], sub: ['الدرس ١٠', 'les 10'], page: 31, children: [['السحور', 'suḥūr'], ['تعجيل الفطر', 'snel breken'], ['الوصال', 'wiṣāl']] },
      { label: ['القضاء والتطوع', 'Inhalen en vrijwillig vasten'], sub: ['الدروس ١١–١٣', 'les 11–13'], page: 35, children: [['القضاء', 'inhalen'], ['صوم التطوع', 'vrijwillig vasten'], ['المكروه والمحرم', 'afgeraden en verboden']] }
    ]
  },
  points: [
    [11, 'في الصيام تجتمع أنواع الصبر الثلاثة: على الطاعة، وعن المعصية، وعلى أقدار الله.', 'In het vasten komen de drie soorten geduld samen: in gehoorzaamheid, weg van de zonde en met Allahs beschikking.'],
    [12, 'النية شرط لصحة الصوم ولا يشرع التلفظ بها؛ ووقتها في الفرض من غروب الشمس إلى قبيل الفجر، والنفل يجوز بنية من النهار.', 'De intentie is voorwaarde voor geldigheid en wordt niet uitgesproken; bij verplicht vasten van zonsondergang tot vlak vóór de dageraad, bij vrijwillig vasten mag zij overdag.'],
    [13, 'يثبت دخول رمضان برؤية مسلم عدل للهلال، أو بإكمال شعبان ثلاثين يوما؛ ولكل بلد رؤيته.', 'Ramaḍān begint als één betrouwbare moslim de sikkel ziet, of na dertig dagen Shaʿbān; elk land heeft zijn eigen waarneming.'],
    [17, 'لا أصل في الشرع لوقت الإمساك الذي في التقاويم، والعبرة بطلوع الفجر الصادق؛ ويجوز استعمال المراصد دون الحساب الفلكي.', 'De "imsāk-tijd" in kalenders heeft geen basis; het gaat om de ware dageraad. Telescopen mogen gebruikt worden, astronomische berekening niet.'],
    [19, 'للمسافر الصائم ثلاث حالات: يستوي الأمران فالصوم أفضل، أو الفطر أيسر فهو أفضل، أو مشقة شديدة فيحرم الصوم.', 'De reizende vastende kent drie toestanden: is het gelijk, dan is vasten beter; is breken makkelijker, dan is breken beter; bij zware moeite is vasten verboden.'],
    [20, 'المريض الذي لا يرجى برؤه يفطر ويطعم عن كل يوم مسكينا، نصف صاع من قوت البلد.', 'De zieke zonder hoop op genezing breekt en voedt per dag een arme: een halve ṣāʿ van het basisvoedsel van het land.'],
    [27, 'التحاميل والحقن الشرجية والمنظار لا تفطر، وكذلك الإبر غير المغذية والكحل والقطرة.', 'Zetpillen, klysma’s, de endoscoop, niet-voedende injecties, kohl en druppels verbreken het vasten niet.'],
    [35, 'لا يشترط التتابع في القضاء، ومن أخره إلى رمضان آخر بلا عذر أثم، والراجح أنه لا كفارة عليه.', 'Aaneensluiting is bij inhalen niet vereist; wie zonder reden uitstelt tot de volgende Ramaḍān zondigt, maar volgens het sterkste geldt er geen boete.']
  ],
  terms: [
    ['الصيام', 'aṣ-ṣiyām', 11, 'لغة: الإمساك؛ وشرعا: التعبد لله بالإمساك عن المفطرات من طلوع الفجر إلى غروب الشمس.', 'Taal: zich onthouden; sharīʿa: Allah aanbidden door zich te onthouden van de verbrekers, van dageraad tot zonsondergang.'],
    ['الريان', 'ar-rayyān', 11, 'باب في الجنة لا يدخل منه إلا الصائمون.', 'Een poort van het Paradijs waardoor alleen vastenden binnengaan.'],
    ['الخلوف', 'al-khulūf', 11, 'تغير رائحة فم الصائم.', 'De veranderde mondgeur van de vastende.'],
    ['يوم الشك', 'yawm ash-shakk', 38, 'يوم الثلاثين من شعبان إذا حال دون رؤية الهلال غيم.', 'De dertigste Shaʿbān als bewolking het zien van de sikkel belet.'],
    ['الوصال', 'al-wiṣāl', 33, 'صوم يومين فأكثر دون فطر بينهما.', 'Twee of meer dagen vasten zonder tussendoor te breken.'],
    ['العرق', 'al-ʿaraq', 26, 'زنبيل أو مكتل يوضع فيه التمر.', 'Een mand voor dadels.'],
    ['المستحاضة', 'al-mustaḥāḍa', 23, 'من يستمر معها الدم في غير وقت الحيض؛ تصوم وتصلي.', 'Een vrouw met bloedverlies buiten de menstruatie; zij vast en bidt.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['المريض الصائم', 'De zieke en het vasten'],
      intro: ['تقسيم ابن عثيمين كما ذكره الكتاب.', 'De indeling van Ibn ʿUthaymīn, zoals het boek die geeft.'],
      columns: [['الحال', 'Toestand'], ['الحكم', 'Oordeel']],
      rows: [
        { label: ['لا يتأثر بالصوم', 'Vasten raakt hem niet'], cells: [['كالزكام والصداع اليسير', 'zoals verkoudheid of lichte hoofdpijn'], ['لا يفطر', 'hij breekt niet']] },
        { label: ['يشق عليه ولا يضره', 'Zwaar maar niet schadelijk'], cells: [['مشقة بلا ضرر', 'moeite zonder schade'], ['يكره الصوم ويسن الفطر', 'vasten afgeraden, breken aanbevolen']] },
        { label: ['يشق عليه ويضره', 'Zwaar en schadelijk'], cells: [['كمرض الكلى والسكري', 'zoals nier- of suikerziekte'], ['يحرم الصوم', 'vasten is verboden']] }
      ],
      page: 20
    },
    {
      type: 'steps',
      title: ['كفارة الجماع في نهار رمضان', 'De boete voor gemeenschap overdag in Ramaḍān'],
      intro: ['على الترتيب، فلا ينتقل إلى ما بعده إلا عند العجز.', 'In volgorde: pas als iets niet lukt, het volgende.'],
      nodes: [
        [26, 'عتق رقبة', 'Een slaaf vrijlaten', '', ''],
        [26, 'صيام شهرين متتابعين', 'Twee maanden aaneen vasten', 'بالأشهر الهجرية', 'in hijri-maanden'],
        [26, 'إطعام ستين مسكينا', 'Zestig armen voeden', '', '']
      ]
    }
  ],
  sections: [
    [16, 'السلف والقرآن في رمضان', 'De salaf en de Koran in Ramaḍān', 'كان جبريل يعارض النبي ﷺ القرآن كل عام مرة، وعام وفاته مرتين؛ فجعل السلف رمضان شهر القرآن: كان مالك يترك الحديث ويقرأ في المصحف، وكان الشافعي يختم في رمضان ستين ختمة.', 'Jibrīl nam elk jaar eenmaal de Koran met de Profeet ﷺ door, en in het jaar van zijn dood tweemaal. Daarom maakten de salaf Ramaḍān de maand van de Koran: Mālik liet zijn hadithlessen en las uit de muṣḥaf, en ash-Shāfiʿī las de Koran zestig keer uit.'],
    [18, 'الصائم في الطائرة', 'De vastende in het vliegtuig', 'إن غربت الشمس فأفطر ثم أقلعت الطائرة فرآها، فصومه صحيح؛ وإن أقلع قبل الغروب واتجه غربا فتأخر الغروب، فلا يفطر حتى تغرب الشمس.', 'Breekt hij na zonsondergang en ziet hij de zon weer na het opstijgen, dan is zijn vasten geldig. Stijgt hij op vóór zonsondergang en vliegt hij westwaarts zodat de zon later ondergaat, dan breekt hij pas als de zon ondergaat.'],
    [22, 'الحائض والنفساء', 'De menstruerende en de kraamvrouw', 'إن حاضت في نهار رمضان أفطرت وقضت ولو قبل الغروب بلحظة؛ وإن طهرت قبل الفجر ونوت صح صومها ولو اغتسلت بعد الفجر.', 'Menstrueert zij overdag in Ramaḍān, dan breekt zij en haalt in, ook al was het een moment vóór zonsondergang. Wordt zij rein vóór de dageraad en neemt zij de intentie, dan is haar vasten geldig, ook als zij pas na de dageraad ghusl doet.'],
    [29, 'البلاد التي يطول نهارها', 'Landen met zeer lange dagen', 'يجب الصوم في النهار طال أو قصر ما دام يتميز الليل من النهار؛ فإن استمر أحدهما قدر بأقرب البلاد إليه.', 'Overdag vasten is verplicht, hoe lang of kort de dag ook is, zolang dag en nacht te onderscheiden zijn. Blijft het dag of nacht, dan volgt men het dichtstbijzijnde land waar dat wel kan.']
  ],
  keycards: [
    ['voorwaarde', 13, 'شروط وجوب صيام رمضان', 'Voorwaarden voor de plicht van Ramaḍān', ['الإسلام', 'البلوغ', 'العقل', 'الإقامة', 'القدرة', 'الخلو من الحيض والنفاس'], ['islam', 'puberteit', 'verstand', 'verblijf (niet op reis)', 'vermogen', 'vrij zijn van menstruatie en kraambed']],
    ['voorwaarde', 28, 'شروط التفطير بالمفطرات', 'Voorwaarden waaronder iets het vasten verbreekt', ['العلم بالحكم والوقت', 'الذكر', 'العمد والاختيار'], ['kennis van het oordeel en de tijd', 'eraan denken', 'opzet en vrije keuze']]
  ],
  hadith: [
    { text: 'كل عمل ابن آدم له إلا الصيام، فإنه لي وأنا أجزي به، والصيام جنة …', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'حديث قدسي.', nlNote: 'Een ḥadīth qudsī.', nl: 'Elke daad van de mens is voor hemzelf, behalve het vasten: dat is voor Mij en Ik beloon ervoor. Het vasten is een schild …', pages: [11] },
    { text: 'إن في الجنة بابا يقال له الريان، يدخل منه الصائمون يوم القيامة، لا يدخل منه أحد غيرهم', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'سهل بن سعد', narratorNl: 'Sahl ibn Saʿd', nl: 'In het Paradijs is een poort die ar-Rayyān heet; daardoor gaan op de Dag der Opstanding de vastenden binnen, en niemand anders', pages: [11] },
    { text: 'صوموا لرؤيته وأفطروا لرؤيته، فإن غبي عليكم فأكملوا عدة شعبان ثلاثين', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Vast als jullie hem zien en breek als jullie hem zien; is hij verborgen, voltooi dan Shaʿbān tot dertig dagen', pages: [13] },
    { text: 'رفع القلم عن ثلاثة: عن النائم حتى يستيقظ، وعن الصبي حتى يحتلم، وعن المجنون حتى يعقل', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem authentiek', nl: 'De pen is opgeheven voor drie: de slaper tot hij wakker wordt, het kind tot het volwassen wordt en de krankzinnige tot hij bij zijn verstand komt', pages: [14] },
    { text: 'ليس من البر الصوم في السفر', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'جابر', narratorNl: 'Jābir', note: 'في رجل ظلل عليه من شدة المشقة.', nlNote: 'Over een man die door zware moeite schaduw moest krijgen.', nl: 'Vasten op reis is geen vroomheid', pages: [19] },
    { text: 'إن الله وضع عن المسافر شطر الصلاة والصوم، وعن الحبلى والمرضع الصوم', takhrij: 'رواه النسائي والترمذي وحسنه', takhrijNl: 'an-Nasāʾī en at-Tirmidhī, die hem ḥasan noemde', narrator: 'أنس', narratorNl: 'Anas', nl: 'Allah heeft de reiziger de helft van het gebed en het vasten kwijtgescholden, en de zwangere en de zogende het vasten', pages: [21] },
    { text: 'من نسي وهو صائم فأكل أو شرب فليتم صومه، فإنما أطعمه الله وسقاه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie vastend vergeet en eet of drinkt, laat hem zijn vasten voltooien, want Allah heeft hem te eten en te drinken gegeven', pages: [25] },
    { text: 'من ذرعه القيء فليس عليه قضاء، ومن استقاء عمدا فليقض', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem authentiek', nl: 'Wie onwillekeurig braakt, hoeft niet in te halen; wie opzettelijk braakt, moet inhalen', pages: [26] },
    { text: 'أفطر الحاجم والمحجوم', takhrij: 'رواه أبو داود وابن ماجه، وعلقه البخاري، وصححه الألباني', takhrijNl: 'Abū Dāwūd en Ibn Māja, al-Bukhārī zonder keten; al-Albānī noemde hem authentiek', nl: 'Wie cupt en wie gecupt wordt, hebben hun vasten verbroken', pages: [28] },
    { text: 'تسحروا فإن في السحور بركة', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Eet suḥūr, want in de suḥūr is zegen', pages: [31] },
    { text: 'لا يزال الناس بخير ما عجلوا الفطر', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De mensen blijven in het goede zolang zij zich haasten met het breken van het vasten', pages: [31] },
    { text: 'كان رسول الله ﷺ يفطر على رطبات قبل أن يصلي، فإن لم تكن رطبات فعلى تمرات، فإن لم تكن حسا حسوات من ماء', takhrij: 'رواه أبو داود والترمذي وحسنه', takhrijNl: 'Abū Dāwūd en at-Tirmidhī, die hem ḥasan noemde', narrator: 'أنس', narratorNl: 'Anas', nl: 'De Boodschapper van Allah ﷺ brak het vasten vóór het gebed met verse dadels; waren die er niet, dan met gedroogde dadels; en anders nam hij enkele slokjes water', pages: [32] },
    { text: 'إني لست كهيئتكم، إني يطعمني ربي ويسقين', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'لما نهاهم عن الوصال.', nlNote: 'Toen hij hun wiṣāl verbood.', nl: 'Ik ben niet zoals jullie; mijn Heer geeft mij te eten en te drinken', pages: [33] },
    { text: 'من مات وعليه صيام صام عنه وليه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Wie sterft terwijl hij nog vasten moet inhalen, voor hem vast zijn walī', pages: [36] },
    { text: 'من صام رمضان ثم أتبعه ستا من شوال كان كصيام الدهر', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو أيوب الأنصاري', narratorNl: 'Abū Ayyūb al-Anṣārī', nl: 'Wie Ramaḍān vast en daarna zes dagen van Shawwāl, is als iemand die het hele jaar vast', pages: [36] },
    { text: 'صيام يوم عرفة، أحتسب على الله أن يكفر السنة التي قبله والسنة التي بعده', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو قتادة', narratorNl: 'Abū Qatāda', nl: 'Over het vasten op de dag van ʿArafa hoop ik van Allah dat het het jaar ervoor en het jaar erna uitwist', pages: [36] },
    { text: 'أفضل الصيام صيام داود عليه السلام، كان يصوم يوما ويفطر يوما', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Het beste vasten is het vasten van Dāwūd: hij vastte de ene dag en de andere niet', pages: [37] },
    { text: 'لا تصوموا يوم الجمعة إلا أن تصوموا يوما قبله أو يوما بعده', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Vast niet op vrijdag, tenzij jullie een dag ervoor of erna vasten', pages: [38] },
    { text: 'من صام اليوم الذي يشك فيه فقد عصى أبا القاسم', takhrij: 'رواه الترمذي وصححه الألباني', takhrijNl: 'at-Tirmidhī; al-Albānī noemde hem authentiek', narrator: 'عمار', narratorNl: 'ʿAmmār', nl: 'Wie op de twijfeldag vast, is ongehoorzaam aan Abū l-Qāsim (de Profeet)', pages: [38] },
    { text: 'أيام التشريق أيام أكل وشرب وذكر لله عز وجل', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'De dagen van tashrīq zijn dagen van eten, drinken en het gedenken van Allah', pages: [38] }
  ],
  persons: [
    ['abu-hurayra', 'text', [11, 25], 'روى فضل الصيام وحديث من أكل ناسيا.', 'Overleverde de verdienste van het vasten en de hadith over wie vergeten eet.'],
    ['sahl-ibn-sad', 'text', [11, 36], 'روى حديث باب الريان.', 'Overleverde de hadith over de poort ar-Rayyān.'],
    ['aisha', 'text', [12, 33, 35, 37], 'روت نية التطوع من النهار وقضاءها في شعبان.', 'Overleverde de intentie voor vrijwillig vasten overdag en haar inhalen in Shaʿbān.'],
    ['abu-ad-darda', 'text', [12, 19], 'كان ينوي التطوع من النهار، وروى صومه ﷺ في السفر.', 'Nam overdag de intentie voor vrijwillig vasten en overleverde het vasten van de Profeet ﷺ op reis.'],
    ['talha-ibn-ubaydallah', 'text', [13], 'روى حديث الأعرابي ثائر الرأس.', 'Overleverde de hadith van de bedoeïen met verward haar.'],
    ['kurayb-mawla-ibn-abbas', 'text', [13], 'روى اختلاف رؤية الشام والمدينة.', 'Overleverde het verschil in waarneming tussen Syrië en Medina.'],
    ['ibn-abbas', 'text', [13, 20, 32], 'قال: لكل بلد رؤيتهم، وفسر الفدية بالشيخ الكبير.', 'Zei dat elk land zijn eigen waarneming heeft en legde de fidya uit voor de bejaarde.'],
    ['ibn-abd-al-barr', 'text', [15], 'نقل الإجماع على أنه لا فرض في الصوم غير رمضان.', 'Vermeldde de consensus dat alleen Ramaḍān als vasten van oorsprong verplicht is.'],
    ['malik-ibn-anas', 'text', [16], 'كان يترك الحديث في رمضان ويقرأ القرآن.', 'Liet in Ramaḍān zijn hadithlessen en las Koran.'],
    ['ash-shafii', 'text', [16], 'كان يختم في رمضان ستين ختمة.', 'Las de Koran in Ramaḍān zestig keer uit.'],
    ['ibn-rajab', 'text', [16], 'بين استحباب الإكثار من التلاوة في الأوقات الفاضلة.', 'Legde uit dat veel reciteren in de verheven tijden aanbevolen is.'],
    ['anas-ibn-malik', 'text', [19, 21, 32], 'روى حال الصائم والمفطر في السفر.', 'Overleverde hoe vastenden en niet-vastenden op reis elkaar niets verweten.'],
    ['abdallah-ibn-rawaha', 'text', [19], 'كان صائما مع النبي ﷺ في يوم شديد الحر.', 'Vastte samen met de Profeet ﷺ op een zeer hete dag.'],
    ['jabir-ibn-abdallah', 'text', [19], 'روى: ليس من البر الصوم في السفر.', 'Overleverde: vasten op reis is geen vroomheid.'],
    ['ibn-uthaymin', 'text', [20], 'قسم المريض ثلاثة أقسام.', 'Deelde de zieke in drie groepen in.'],
    ['abu-said-al-khudri', 'text', [22, 31, 38], 'روى حديث نقصان الدين وفضل السحور.', 'Overleverde de hadith over het tekort in religie en de verdienste van suḥūr.'],
    ['umm-salama', 'text', [27], 'روت أن النبي ﷺ كان يصبح جنبا ثم يصوم.', 'Overleverde dat de Profeet ﷺ de dageraad in staat van janāba begon en toch vastte.'],
    ['zayd-ibn-thabit', 'text', [31], 'روى تأخير السحور قدر خمسين آية.', 'Overleverde dat de suḥūr zo laat was dat er vijftig verzen tot het gebed overbleven.'],
    ['ibn-hajar-al-asqalani', 'text', [35], 'استنبط من حرص عائشة أنه لا يجوز تأخير القضاء إلى رمضان آخر.', 'Leidde uit de zorg van ʿĀʾisha af dat inhalen niet tot de volgende Ramaḍān uitgesteld mag worden.'],
    ['abu-ayyub-al-ansari', 'text', [36], 'روى فضل ست من شوال.', 'Overleverde de verdienste van zes dagen Shawwāl.'],
    ['abu-qatada-al-ansari', 'text', [36], 'روى فضل صيام عرفة وعاشوراء.', 'Overleverde de verdienste van vasten op ʿArafa en ʿĀshūrāʾ.'],
    ['abdallah-ibn-amr', 'text', [37], 'أرشده إلى صيام ثلاثة أيام من كل شهر.', 'Kreeg het advies drie dagen per maand te vasten.'],
    ['juwayriya-bint-al-harith', 'text', [38], 'أمرها أن تفطر لما صامت الجمعة وحدها.', 'Kreeg de opdracht te breken toen zij alleen de vrijdag vastte.'],
    ['umar-ibn-al-khattab', 'text', [38], 'نهى عن تخصيص رجب بالصيام.', 'Verbood het uitkiezen van Rajab voor vasten.'],
    ['kharasha-ibn-al-hurr', 'text', [38], 'روى فعل عمر في رجب.', 'Overleverde wat ʿUmar in Rajab deed.'],
    ['ammar-ibn-yasir', 'text', [38], 'روى النهي عن صوم يوم الشك.', 'Overleverde het verbod op vasten op de twijfeldag.']
  ],
  review: [
    ['الصيام إمساك بنية عن المفطرات من الفجر إلى الغروب.', 'Vasten is zich met intentie onthouden van de verbrekers, van dageraad tot zonsondergang.'],
    ['يجب رمضان بشروط ستة، ويثبت بالرؤية أو بإكمال شعبان.', 'Ramaḍān is verplicht onder zes voorwaarden en begint bij waarneming of na dertig dagen Shaʿbān.'],
    ['يباح الفطر لأهل الأعذار ويجب القضاء، والعاجز دائما يطعم.', 'Wie een reden heeft mag breken en haalt in; wie blijvend niet kan, voedt een arme.'],
    ['لا تفطر المفطرات إلا مع العلم والذكر والعمد.', 'De verbrekers verbreken alleen met kennis, herinnering en opzet.'],
    ['يسن السحور وتعجيل الفطر، ويحرم صوم العيدين والتشريق ويوم الشك.', 'Suḥūr en snel breken zijn sunna; vasten op de feestdagen, tashrīq en de twijfeldag is verboden.']
  ],
  quiz: [
    { type: 'mc', page: 12, q: ['متى تجب نية صوم الفرض؟', 'Wanneer moet de intentie voor verplicht vasten genomen worden?'], options: [['من الليل قبل الفجر', 'بعد الفجر', 'عند الظهر', 'لا تجب'], ['in de nacht, vóór de dageraad', 'na de dageraad', 'rond de middag', 'die is niet nodig']], answer: 0, explain: ['أما النفل فيجوز بنية من النهار.', 'Bij vrijwillig vasten mag het overdag.'] },
    { type: 'tf', page: 17, q: ['يجوز الاعتماد على الحساب الفلكي في إثبات دخول الشهر.', 'Men mag op astronomische berekening steunen voor het begin van de maand.'], answer: 1, explain: ['يجوز استعمال المراصد للرؤية، لا الحساب.', 'Een telescoop voor waarneming mag, berekening niet.'] },
    { type: 'mc', page: 20, q: ['ماذا يلزم المريض الذي لا يرجى برؤه؟', 'Wat moet de zieke zonder hoop op genezing doen?'], options: [['الإطعام عن كل يوم مسكينا', 'القضاء', 'الكفارة المغلظة', 'لا شيء'], ['per dag een arme voeden', 'inhalen', 'de zware boete', 'niets']], answer: 0, explain: ['نصف صاع من قوت البلد.', 'Een halve ṣāʿ van het basisvoedsel.'] },
    { type: 'mc', page: 26, q: ['ما الذي تختص به الكفارة من المفطرات؟', 'Bij welke verbreker hoort de boete (kaffāra)?'], options: [['الجماع في نهار رمضان', 'الأكل عمدا', 'القيء عمدا', 'الحجامة'], ['gemeenschap overdag in Ramaḍān', 'opzettelijk eten', 'opzettelijk braken', 'cupping']], answer: 0, explain: ['وإنزال المني فيه القضاء دون الكفارة.', 'Bij zaadlozing alleen inhalen, zonder boete.'] },
    { type: 'tf', page: 27, q: ['قطرة العين والأذن تفطر الصائم.', 'Oog- en oordruppels verbreken het vasten.'], answer: 1, explain: ['لا تفطر، وكذلك الكحل.', 'Die verbreken niet, net als kohl.'] },
    { type: 'mc', page: 38, q: ['أي هذه الأيام يحرم صومه؟', 'Op welke van deze dagen is vasten verboden?'], options: [['يوم العيد', 'يوم الاثنين', 'يوم عرفة لغير الحاج', 'يوم عاشوراء'], ['de feestdag', 'maandag', 'ʿArafa voor wie geen ḥajj doet', 'ʿĀshūrāʾ']], answer: 0, explain: ['وكذلك أيام التشريق ويوم الشك.', 'Evenals de dagen van tashrīq en de twijfeldag.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ١٨ و٢٤ و٣٠ و٣٤ و٣٩.', 'Oefeningen van het boek op p. 18, 24, 30, 34 en 39. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling. Voor een persoonlijke vraag over het vasten raadpleeg je een geleerde.']
})
