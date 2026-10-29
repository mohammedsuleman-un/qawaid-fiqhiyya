// Hoofdstukkaart bij الحديث (٣), eenheid 4: hadith 16–20 (lessen 20–24, boek p. 74–89).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. Het verhaal van
// Abū ʿAzza als aanleiding van hadith 20 (p. 87) geeft het boek zonder bron; het staat alleen in de
// tekst. Hadith 20 zelf staat er wel in, met de takhrij van het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-hadith',
  chapter: '20',
  unit: 4,
  source: {
    label: ['كتاب الحديث (٣)، سلسلة زاد العلمية', 'Al-Ḥadīth (3), Zad-reeks'],
    pages: '74–89',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ١٦–٢٠', 'Hadith 16–20'],
  subtitle: ['خمسة أحاديث مجموعة في صفحة واحدة', 'Vijf hadith samen op één pagina'],
  summary: [
    'خمسة أحاديث: المؤمن للمؤمن كالبنيان، ولا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه، والثناء على العامل بالخير عاجل بشرى المؤمن، وسددوا وقاربوا فلن يدخل أحدا الجنة عمله، ولا يلدغ المؤمن من جحر واحد مرتين.',
    'Vijf hadith: de gelovige is voor de gelovige als een gebouw; niemand gelooft werkelijk tot hij voor zijn broer wil wat hij voor zichzelf wil; lof voor wie goed doet is een vervroegde goede tijding; streef het juiste na en kom dichtbij, want niemand komt het Paradijs binnen door zijn daden alleen; en de gelovige wordt niet twee keer uit hetzelfde hol gebeten.'
  ],
  map: {
    title: ['الأحاديث الخمسة في خريطة واحدة', 'De vijf hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٣)', 'Hadith (3)'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['المؤمن للمؤمن كالبنيان', 'De gelovige als een gebouw'], sub: ['الحديث ١٦', 'hadith 16'], page: 74, children: [['التعاون والتراحم', 'samenwerking en barmhartigheid'], ['الأخوة على الإيمان', 'broederschap op grond van geloof']] },
      { label: ['يحب لأخيه ما يحب لنفسه', 'Wil voor je broer wat je voor jezelf wilt'], sub: ['الحديث ١٧', 'hadith 17'], page: 77, children: [['كمال الإيمان', 'volmaakt geloof'], ['سلامة الصدر', 'een zuiver hart']] },
      { label: ['عاجل بشرى المؤمن', 'Vervroegde goede tijding'], sub: ['الحديث ١٨', 'hadith 18'], page: 81, children: [['ثناء الناس', 'lof van mensen'], ['الفرق بين المؤمن والمرائي', 'gelovige en schijnheilige']] },
      { label: ['سددوا وقاربوا وأبشروا', 'Streef het juiste na en kom dichtbij'], sub: ['الحديث ١٩', 'hadith 19'], page: 84, children: [['الوسط', 'het midden'], ['رحمة الله', 'Allahs barmhartigheid']] },
      { label: ['لا يلدغ المؤمن مرتين', 'Niet twee keer gebeten'], sub: ['الحديث ٢٠', 'hadith 20'], page: 87, children: [['الحزم واليقظة', 'vastberadenheid en waakzaamheid'], ['عدم العود إلى الذنب', 'niet terugkeren tot de zonde']] }
    ]
  },
  points: [
    [75, 'المؤمنون في تناصرهم كالبنيان، لا يقوم إلا بتماسك لبناته، فإذا تفرقت تهاوى.', 'De gelovigen zijn in hun onderlinge steun als een gebouw: het staat alleen als de stenen samenhangen, en valt het uiteen, dan stort het in.'],
    [75, 'الأخوة في الإسلام قائمة على الإيمان، لا على القومية والعصبية.', 'Broederschap in de islam berust op geloof, niet op nationalisme en partijdigheid.'],
    [77, 'المنفي في «لا يؤمن أحدكم» هو كمال الإيمان الواجب، لا أصله.', 'Wat in "niemand van jullie gelooft" ontkend wordt, is het volmaakte, verplichte geloof, niet de basis ervan.'],
    [80, 'لو طبق المسلم هذا الحديث في معاملاته لعمل لغيره كما يعمل لنفسه، فزال الغش والإتقان الرديء.', 'Als de moslim deze hadith in zijn omgang toepaste, zou hij voor anderen werken zoals voor zichzelf, en verdwijnen bedrog en slecht werk.'],
    [82, 'إذا قبل الله العمل وضع في القلوب الثناء على صاحبه، ولا يضر ذلك إخلاصه.', 'Als Allah een daad aanvaardt, legt Hij lof voor de doener in de harten; dat schaadt zijn oprechtheid niet.'],
    [83, 'المرائي يعمل ليراه الناس، والمؤمن يعمل لله فيثني الناس عليه دون قصده.', 'De schijnheilige werkt om gezien te worden; de gelovige werkt voor Allah en mensen prijzen hem zonder dat hij het bedoelt.'],
    [85, 'لا ينجو أحد بعمله وحده، بل برحمة الله وفضله؛ والباء في الآية للسببية وفي الحديث للعوض.', 'Niemand wordt alleen door zijn daden gered, maar door Allahs barmhartigheid en gunst; in het vers betekent "door" oorzaak, in de hadith ruil.'],
    [88, 'من ذاق شر الذنب من التائبين كان أشد نفرة منه وتحذيرا.', 'Wie van de berouwvollen het kwaad van een zonde proefde, heeft er meer afkeer van en waarschuwt er sterker voor.']
  ],
  terms: [
    ['البنيان', 'al-bunyān', 74, 'البناء المتماسك؛ يشد بعضه بعضا.', 'Een samenhangend gebouw waarvan de delen elkaar steunen.'],
    ['لا يؤمن أحدكم', 'lā yuʾminu aḥadukum', 77, 'لا يكمل إيمانه الواجب.', 'Zijn verplichte geloof is niet volledig.'],
    ['عاجل بشرى المؤمن', 'ʿājil bushrā l-muʾmin', 81, 'ما يبشر به في الدنيا من ثناء الناس على عمله الخالص.', 'Het goede nieuws in deze wereld: lof van mensen voor zijn oprechte daad.'],
    ['سددوا', 'saddidū', 84, 'اقصدوا السداد وهو الصواب.', 'Streef het juiste na.'],
    ['قاربوا', 'qāribū', 84, 'لا تفرطوا ولا تجهدوا أنفسكم فتملوا.', 'Overdrijf niet en put jezelf niet uit, zodat je het niet beu wordt.'],
    ['يتغمدني', 'yataghammadunī', 84, 'يلبسني ويسترني؛ من غمدت السيف.', 'Mij omhullen en bedekken; van het zwaard in de schede steken.'],
    ['يلدغ', 'yuldagh', 87, 'يلسع؛ والجحر الثقب الذي تسكنه الحية.', 'Gebeten worden; een hol is de opening waarin een slang woont.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['صور البشرى العاجلة للمؤمن', 'Vormen van de vervroegde goede tijding'],
      intro: ['كما ذكرها الكتاب.', 'Zoals het boek ze noemt.'],
      nodes: [
        [82, 'انشراح الصدر للطاعة', 'Een ruime borst voor gehoorzaamheid', 'يجد الراحة والسعادة فيها', 'hij vindt er rust en geluk in'],
        [82, 'ثناء الصالحين عليه', 'Lof van de rechtschapenen', 'أنتم شهداء الله في الأرض', '"jullie zijn Allahs getuigen op aarde"'],
        [82, 'الرؤيا الصالحة', 'Goede dromen', 'يراها أو ترى له', 'die hij ziet of die voor hem gezien worden']
      ]
    },
    {
      type: 'compare',
      title: ['العمل والجنة', 'Daden en het Paradijs'],
      intro: ['الجمع بين الحديث وقوله ﴿ادخلوا الجنة بما كنتم تعملون﴾.', 'Hoe de hadith en "treed het Paradijs binnen om wat jullie deden" samengaan.'],
      columns: [['المعنى', 'Betekenis'], ['الباء', 'Het voorzetsel "door"']],
      rows: [
        { label: ['الحديث', 'Hadith'], cells: [['لن يدخل أحدا الجنة عمله عوضا عنها', 'niemand komt binnen alsof zijn daad de prijs ervan is'], ['باء العوض', '"door" als ruil']] },
        { label: ['الآية', 'Vers'], cells: [['الأعمال سبب لدخول الجنة', 'daden zijn een oorzaak om binnen te komen'], ['باء السببية', '"door" als oorzaak']] }
      ],
      page: 86
    }
  ],
  sections: [
    [75, 'القومية العربية', 'Arabisch nationalisme', 'لم تدع النصوص إلى الاجتماع على القومية العربية، وهي فكرة جاهلية؛ إنما هو مؤمن تقي وفاجر شقي، والناس كلهم بنو آدم.', 'De teksten roepen niet op tot eenheid rond Arabisch nationalisme; dat is een jāhiliyya-idee. Er is alleen een godvrezende gelovige en een ellendige zondaar; alle mensen zijn kinderen van Ādam.'],
    [76, 'التشبيك بين الأصابع', 'De vingers ineenvlechten', 'شبك النبي ﷺ بين أصابعه زيادة في البيان وتقريبا للمعنوي بالمحسوس.', 'De Profeet ﷺ vlocht zijn vingers ineen om het extra duidelijk te maken: het abstracte via het zichtbare.'],
    [85, 'كل ابن آدم خطاء', 'Elke mens maakt fouten', 'مهما بلغ العبد من التقوى فلا بد أن يخطئ، وخير الخطائين التوابون.', 'Hoe godvrezend de dienaar ook is, hij maakt fouten; de beste van wie fouten maken zijn wie berouw tonen.'],
    [87, 'الحزم في الدين والدنيا', 'Vastberadenheid in godsdienst en wereld', 'المؤمن كيس فطن، يعرف الأسباب النافعة فيأخذ بها والضارة فيتجنبها، والدين أولى بالحذر.', 'De gelovige is schrander en slim: hij kent de nuttige oorzaken en gebruikt ze, en de schadelijke en mijdt ze; de godsdienst verdient de meeste behoedzaamheid.']
  ],
  keycards: [
    ['definitie', 77, 'معنى «حتى يحب لأخيه ما يحب لنفسه»', 'Betekenis van "tot hij voor zijn broer wil…"', ['من الخير في القول والعمل والاعتقاد', 'ولا يقدر عليه إلا سليم الصدر من الغل والغش والحسد'], ['van het goede, in woord, daad en geloof', 'alleen wie een zuiver hart heeft, vrij van wrok, bedrog en afgunst, kan dit']],
    ['bewijs', 78, 'نفي الإيمان يدل على الوجوب', 'Ontkenning van geloof wijst op plicht', ['لا ينفى الإيمان إلا لترك واجب أو فعل ما ينافيه', 'فمحبة الخير للأخ واجبة'], ['geloof wordt alleen ontkend bij het nalaten van een plicht of iets wat het tenietdoet', 'dus het goede willen voor je broer is verplicht']]
  ],
  hadith: [
    { text: 'المؤمن للمؤمن كالبنيان، يشد بعضه بعضا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو موسى الأشعري', narratorNl: 'Abū Mūsā al-Ashʿarī', note: 'وشبك بين أصابعه.', nlNote: 'En hij vlocht zijn vingers ineen.', nl: 'De gelovige is voor de gelovige als een gebouw waarvan de delen elkaar steunen', pages: [74] },
    { text: 'إن الله قد أذهب عنكم عبية الجاهلية وفخرها بالآباء، إنما هو مؤمن تقي وفاجر شقي، الناس كلهم بنو آدم، وآدم خلق من تراب', takhrij: 'رواه أحمد بإسناد حسن', takhrijNl: 'Aḥmad, met een goede (ḥasan) keten', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Allah heeft de hoogmoed van de jāhiliyya en het pochen op voorvaders van jullie weggenomen; er is alleen een godvrezende gelovige en een ellendige zondaar. Alle mensen zijn kinderen van Ādam, en Ādam is uit stof geschapen', pages: [75] },
    { text: 'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', nl: 'Niemand van jullie gelooft werkelijk, totdat hij voor zijn broer wil wat hij voor zichzelf wil', pages: [77] },
    { text: 'أتحب الجنة؟ … فأحب لأخيك ما تحب لنفسك', takhrij: 'رواه أحمد بإسناد حسن', takhrijNl: 'Aḥmad, met een goede (ḥasan) keten', narrator: 'يزيد بن أسد القسري', narratorNl: 'Yazīd ibn Asad al-Qasrī', nl: 'Wil jij het Paradijs? … Wil dan voor je broer wat je voor jezelf wilt', pages: [78] },
    { text: 'يا أبا ذر، إني أراك ضعيفا، وإني أحب لك ما أحب لنفسي؛ لا تأمرن على اثنين، ولا تولين مال يتيم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو ذر', narratorNl: 'Abū Dharr', nl: 'Abū Dharr, ik zie dat je zwak bent, en ik wil voor jou wat ik voor mezelf wil: word geen leider over twee mensen en neem het beheer over het geld van een wees niet op je', pages: [78] },
    { text: 'تلك عاجل بشرى المؤمن', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو ذر', narratorNl: 'Abū Dharr', note: 'لما سئل عن الرجل يعمل العمل من الخير ويحمده الناس عليه.', nlNote: 'Toen hem gevraagd werd naar een man die goed doet en daarvoor door de mensen geprezen wordt.', nl: 'Dat is de vervroegde goede tijding van de gelovige', pages: [81] },
    { text: 'أنتم شهداء الله في الأرض', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'لما أثني على جنازة خيرا فقال: وجبت.', nlNote: 'Toen een overledene geprezen werd en hij zei: het is zeker geworden.', nl: 'Jullie zijn Allahs getuigen op aarde', pages: [82] },
    { text: 'سددوا وقاربوا وأبشروا، فإنه لن يدخل الجنة أحدا عمله … ولا أنا، إلا أن يتغمدني الله منه برحمة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Streef het juiste na, kom dichtbij en verheug je, want niemand komt het Paradijs binnen door zijn daden … Ook ik niet, tenzij Allah mij hult in barmhartigheid van Hem', pages: [84] },
    { text: 'كل ابن آدم خطاء، وخير الخطائين التوابون', takhrij: 'رواه أحمد والترمذي وحسنه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; al-Albānī noemde hem ḥasan', nl: 'Elke mens maakt fouten, en de beste van wie fouten maken zijn wie berouw tonen', pages: [85] },
    { text: 'والذي نفسي بيده لو لم تذنبوا لذهب الله بكم، ولجاء بقوم يذنبون، فيستغفرون الله فيغفر لهم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Bij Hem in wiens hand mijn ziel is: als jullie niet zondigden, zou Allah jullie wegnemen en mensen brengen die zondigen, vergeving vragen, en Hij zou hun vergeven', pages: [85] },
    { text: 'لا يلدغ المؤمن من جحر واحد مرتين', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De gelovige wordt niet twee keer uit hetzelfde hol gebeten', pages: [87] }
  ],
  persons: [
    ['abu-musa-al-ashari', 'text', [74], 'راوي الحديث السادس عشر، هاجر إلى الحبشة وولي البصرة والكوفة.', 'Overleveraar van hadith 16; emigreerde naar Abessinië en was gouverneur van Basra en Kufa.'],
    ['umar-ibn-al-khattab', 'text', [74], 'ولى أبا موسى البصرة.', 'Stelde Abū Mūsā aan over Basra.'],
    ['uthman-ibn-affan', 'text', [74], 'ولى أبا موسى الكوفة.', 'Stelde Abū Mūsā aan over Kufa.'],
    ['anas-ibn-malik', 'text', [77], 'راوي الحديث السابع عشر، خادم النبي ﷺ.', 'Overleveraar van hadith 17, de dienaar van de Profeet ﷺ.'],
    ['al-qurtubi', 'text', [77], 'فسر نفي الإيمان بنفي كماله.', 'Legde de ontkenning van geloof uit als ontkenning van de volmaaktheid ervan.'],
    ['yazid-ibn-asad-al-qasri', 'text', [78], 'سأله النبي ﷺ: أتحب الجنة؟', 'De Profeet ﷺ vroeg hem: wil jij het Paradijs?'],
    ['abdallah-ibn-amr', 'text', [78], 'روى: فمن أحب أن يزحزح عن النار ويدخل الجنة…', 'Overleverde: "wie van het Vuur verwijderd en het Paradijs binnengelaten wil worden…"'],
    ['abu-dharr', 'text', [78, 81], 'راوي الحديث الثامن عشر، وأوصاه النبي ﷺ ألا يتأمر على اثنين.', 'Overleveraar van hadith 18; de Profeet ﷺ raadde hem aan geen leider over twee te worden.'],
    ['ibn-taymiyya', 'text', [78], 'قال: إذا نفي الإيمان بفعل دل على وجوبه.', 'Zei: als geloof ontkend wordt bij een daad, wijst dat op de plicht ervan.'],
    ['ibn-abbas', 'text', [79], 'كان يود أن يعلم الناس كلهم من الآية ما يعلم.', 'Wilde dat alle mensen van een vers wisten wat hij wist.'],
    ['aisha', 'text', [84], 'راوية الحديث التاسع عشر.', 'Overleveraarster van hadith 19.'],
    ['abu-hurayra', 'text', [75, 87], 'راوي الحديث العشرين.', 'Overleveraar van hadith 20.']
  ],
  review: [
    ['المؤمنون كالبنيان، وقوة الأمة في اجتماعها على الإيمان.', 'De gelovigen zijn als een gebouw; de kracht van de umma ligt in eenheid op grond van geloof.'],
    ['من كمال الإيمان أن تحب لأخيك ما تحب لنفسك.', 'Bij volmaakt geloof hoort dat je voor je broer wilt wat je voor jezelf wilt.'],
    ['ثناء الناس على العمل الخالص عاجل بشرى المؤمن.', 'Lof van mensen voor een oprechte daad is een vervroegde goede tijding.'],
    ['سددوا وقاربوا، والجنة برحمة الله لا بالعمل وحده.', 'Streef het juiste na en kom dichtbij; het Paradijs komt door Allahs barmhartigheid, niet door daden alleen.'],
    ['المؤمن حازم يقظ لا يلدغ من جحر مرتين.', 'De gelovige is vastberaden en waakzaam; hij wordt niet twee keer gebeten.']
  ],
  quiz: [
    { type: 'mc', page: 75, q: ['على أي شيء تقوم الأخوة في الإسلام؟', 'Waarop berust broederschap in de islam?'], options: [['الإيمان', 'القومية', 'النسب', 'اللغة'], ['geloof', 'nationalisme', 'afstamming', 'taal']], answer: 0, explain: ['إنما هو مؤمن تقي وفاجر شقي.', 'Er is alleen een godvrezende gelovige en een ellendige zondaar.'] },
    { type: 'mc', page: 77, q: ['ما المنفي في «لا يؤمن أحدكم»؟', 'Wat wordt ontkend in "niemand van jullie gelooft"?'], options: [['كمال الإيمان الواجب', 'أصل الإيمان', 'الإسلام كله', 'الصلاة'], ['het volmaakte, verplichte geloof', 'de basis van het geloof', 'de hele islam', 'het gebed']], answer: 0, explain: ['أما أصل الإيمان فموجود.', 'De basis van het geloof is er wel.'] },
    { type: 'tf', page: 82, q: ['ثناء الناس على العامل المخلص يضر إخلاصه.', 'Lof van mensen voor een oprechte werker schaadt zijn oprechtheid.'], answer: 1, explain: ['لا يضره ذلك، وهو عاجل بشرى المؤمن.', 'Het schaadt niet; het is een vervroegde goede tijding.'] },
    { type: 'mc', page: 84, q: ['ما معنى «قاربوا»؟', 'Wat betekent qāribū?'], options: [['لا تفرطوا ولا تجهدوا أنفسكم', 'اقتربوا من الناس', 'أكثروا من العمل حتى التعب', 'اتركوا العمل'], ['overdrijf niet en put jezelf niet uit', 'kom dicht bij de mensen', 'werk tot je uitgeput bent', 'stop met werken']], answer: 0, explain: ['حتى لا يفضي إلى الملل والترك.', 'Zodat het niet leidt tot verveling en ophouden.'] },
    { type: 'mc', page: 86, q: ['ما معنى الباء في الحديث «لن يدخل الجنة أحدا عمله»؟', 'Wat betekent "door" in "niemand komt binnen door zijn daden"?'], options: [['العوض', 'السببية', 'الظرفية', 'القسم'], ['ruil', 'oorzaak', 'plaats', 'eed']], answer: 0, explain: ['وفي الآية للسببية.', 'In het vers betekent het oorzaak.'] },
    { type: 'tf', page: 88, q: ['من ذاق شر الذنب من التائبين أشد نفرة منه.', 'Wie als berouwvolle het kwaad van een zonde proefde, heeft er meer afkeer van.'], answer: 0, explain: ['لأنه عرف عواقبه بالتجربة.', 'Omdat hij de gevolgen uit ervaring kent.'] }
  ],
  note: ['أنشطة الكتاب في نهاية كل حديث.', 'Oefeningen van het boek aan het eind van elke hadith. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
