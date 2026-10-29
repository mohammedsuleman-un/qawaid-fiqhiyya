// Hoofdstukkaart bij الفقه (٤), eenheid 4: بعض النوازل المالية المعاصرة (lessen 19–23, boek p. 44–52).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
// Weggelaten (zonder bron in het boek): de statistiek van een Duitse deskundige op p. 48.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '19',
  unit: 4,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '44–52',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['بعض النوازل المالية المعاصرة', 'Moderne financiële vraagstukken'],
  subtitle: ['خمسة دروس', 'Vijf lessen'],
  summary: [
    'تتناول الوحدة أحكام نوازل مالية معاصرة: بيع الأسهم والسندات، وبطاقات الائتمان بأنواعها، والإجارة المنتهية بالتمليك، والتأمين التعاوني والتجاري، والمسابقات وصور القمار المعاصر.',
    'Deze eenheid behandelt de regels van moderne financiële vraagstukken: aandelen en obligaties, de soorten creditcards, huur eindigend in eigendom, coöperatieve en commerciële verzekering, en wedstrijden en moderne vormen van gokken.'
  ],
  map: {
    title: ['النوازل المالية في خريطة واحدة', 'Moderne vraagstukken in één kaart'],
    intro: ['كما في الدروس الخمسة.', 'Zoals in de vijf lessen.'],
    root: [['النوازل المالية المعاصرة', 'Moderne financiële vraagstukken'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['الأسهم والسندات', 'Aandelen en obligaties'], sub: ['الدرس ١٩', 'les 19'], page: 44, children: [['الأسهم: بحسب نشاط الشركة', 'aandelen: naar de activiteit'], ['السندات: محرمة', 'obligaties: verboden']] },
      { label: ['بطاقات الائتمان', 'Creditcards'], sub: ['الدرس ٢٠', 'les 20'], page: 45, children: [['المغطاة: جائزة', 'gedekt: toegestaan'], ['غير المغطاة: بحسب الفائدة', 'niet gedekt: afhankelijk van rente']] },
      { label: ['الإجارة المنتهية بالتمليك', 'Huur eindigend in eigendom'], sub: ['الدرس ٢١', 'les 21'], page: 46, children: [['عقدان منفصلان', 'twee gescheiden contracten']] },
      { label: ['التأمين', 'Verzekering'], sub: ['الدرس ٢٢', 'les 22'], page: 47, children: [['التعاوني: جائز', 'coöperatief: toegestaan'], ['التجاري: محرم', 'commercieel: verboden']] },
      { label: ['المسابقات والقمار', 'Wedstrijden en gokken'], sub: ['الدرس ٢٣', 'les 23'], page: 50, children: [['لا سبق إلا في ثلاث', 'inzet alleen in drie zaken'], ['اليانصيب والتسويق الهرمي', 'loterij en piramidemarketing']] }
    ]
  },
  points: [
    [44, 'يجوز بيع أسهم الشركات ذات النشاط المباح، ولا يجوز في الشركات ذات النشاط المحرم.', 'Aandelen van bedrijven met toegestane activiteit mogen verhandeld worden, van bedrijven met verboden activiteit niet.'],
    [44, 'لا يجوز التعامل بأسهم الشركات المختلطة، لأنه إذا اجتمع الحلال والحرام غلب جانب الحرام احتياطا.', 'Aandelen van gemengde bedrijven mogen niet verhandeld worden: als toegestaan en verboden samenkomen, krijgt het verbod de overhand uit voorzorg.'],
    [44, 'تداول السندات محرم شرعا، لأنها قرض ربوي.', 'Handel in obligaties is verboden, want het is een ribawi-lening.'],
    [46, 'يجوز لمصدر البطاقة أخذ رسوم إصدار أو تجديد أجرا فعليا على الخدمة، بشرط ألا ترتبط بمبلغ القرض أو مدته.', 'De uitgever mag kosten voor uitgifte of vernieuwing nemen als werkelijk loon, mits ze niet aan het leenbedrag of de duur gekoppeld zijn.'],
    [46, 'حقيقة الإجارة المنتهية بالتمليك: عقد بيع مستتر في عقد إجارة، فلا بد من عقدين منفصلين وأن تكون الإجارة فعلية.', 'Huur eindigend in eigendom is in werkelijkheid een koop verborgen in huur; er moeten twee gescheiden contracten zijn en de huur moet echt zijn.'],
    [47, 'جهالة المشتركين في التأمين التعاوني بما يعود عليهم لا تضر، لأنهم متبرعون.', 'Dat deelnemers aan coöperatieve verzekering niet weten wat zij terugkrijgen schaadt niet, want zij schenken.'],
    [48, 'قرر المجمع الفقهي الدولي تحريم التأمين التجاري بجميع أنواعه.', 'De internationale fiqh-academie besloot tot het verbod van commerciële verzekering in al haar soorten.'],
    [50, 'كل مسابقة يبذل فيها عوض محرمة إلا في الخف والنصل والحافر وما يقاس عليها، وتجوز المسابقات المباحة بلا عوض.', 'Elke wedstrijd met een vergoeding is verboden behalve met kamelen, pijlen en paarden en wat daarop lijkt; toegestane wedstrijden mogen zonder vergoeding.']
  ],
  terms: [
    ['السهم', 'as-sahm', 44, 'الصك الذي يشارك به المساهم في رأس مال شركة مساهمة.', 'Het bewijs waarmee de aandeelhouder deelneemt in het kapitaal van een naamloze vennootschap.'],
    ['السند', 'as-sanad', 44, 'تعهد مكتوب من البنك أو الشركة لحامله بسداد مبلغ بفائدة محددة.', 'Een schriftelijke verbintenis van een bank of bedrijf om de houder een bedrag met vaste rente te betalen.'],
    ['بطاقة الائتمان', 'biṭāqat al-iʾtimān', 45, 'بطاقة تخول حاملها شراء السلع والخدمات من رصيده، أو دينا على ذمة المصدر إن لم يكن لديه رصيد.', 'Een kaart waarmee de houder koopt van zijn saldo, of op schuld bij de uitgever als hij geen saldo heeft.'],
    ['التأمين التعاوني', 'at-taʾmīn at-taʿāwunī', 47, 'اشتراك أشخاص بمبالغ تخصص لتعويض من يصيبه الضرر، تبرعا وتضامنا.', 'Personen dragen bedragen bij om wie schade lijdt te compenseren, als schenking en uit solidariteit.'],
    ['التأمين التجاري', 'at-taʾmīn at-tijārī', 48, 'عقد بين شركة التأمين والمؤمن له، يدفع فيه مبلغا لتلتزم الشركة بدفع مبلغ عند وقوع حادث.', 'Een contract waarin de verzekerde een bedrag betaalt en de maatschappij zich verplicht bij een ongeluk te betalen.'],
    ['السبق', 'as-sabaq', 50, 'المال الذي يجعل رهنا في المسابقة.', 'Het geld dat als inzet in een wedstrijd wordt gezet.'],
    ['الخف والنصل والحافر', 'al-khuff, an-naṣl, al-ḥāfir', 50, 'الإبل، والسهام والرمي، والخيل.', 'Kamelen, pijlen en boogschieten, en paarden.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أنواع بطاقات الائتمان', 'Soorten creditcards'],
      intro: ['كما في المخطط ص ٤٥.', 'Zoals in het schema op p. 45.'],
      columns: [['الوصف', 'Beschrijving'], ['الحكم', 'Oordeel']],
      rows: [
        { label: ['مغطاة برصيد', 'Gedekt door saldo'], cells: [['يستعمل رصيده، والرسوم أجرة', 'eigen saldo; kosten zijn loon'], ['جائزة', 'toegestaan']] },
        { label: ['غير مغطاة بلا فوائد', 'Niet gedekt, zonder rente'], cells: [['قرض من المصدر بلا فائدة مطلقا', 'lening zonder enige rente'], ['جائزة', 'toegestaan']] },
        { label: ['غير مغطاة بفوائد', 'Niet gedekt, met rente'], cells: [['فائدة على الدين في كل حال', 'rente op de schuld in elk geval'], ['محرمة', 'verboden']] },
        { label: ['غير مغطاة بفوائد عند التأخر', 'Niet gedekt, rente bij te laat'], cells: [['شرط الفائدة إذا تأخر', 'rente als voorwaarde bij te laat'], ['محرمة لاشتمالها على شرط الربا', 'verboden wegens de ribā-voorwaarde']] }
      ],
      page: 45
    },
    {
      type: 'compare',
      title: ['السهم والسند، والتأمين التعاوني والتجاري', 'Aandeel en obligatie; coöperatieve en commerciële verzekering'],
      intro: ['كما في الإطارين ص ٤٤ و٤٨.', 'Zoals in de kaders op p. 44 en 48.'],
      columns: [['الأول', 'Het eerste'], ['الثاني', 'Het tweede']],
      rows: [
        { label: ['السهم / السند', 'Aandeel / obligatie'], cells: [['جزء من الشركة، يربح ويخسر', 'deel van het bedrijf, wint en verliest mee'], ['دين على الشركة، لا تجوز الزيادة', 'schuld aan het bedrijf, geen vermeerdering toegestaan']] },
        { label: ['التعاوني / التجاري', 'Coöperatief / commercieel'], cells: [['الأقساط تبقى تبرعا لا تملكها الإدارة', 'premies blijven schenking, het beheer bezit ze niet'], ['الإدارة تتملك الأقساط مقابل التزامها', 'het beheer neemt de premies in bezit tegenover zijn verplichting']] }
      ],
      page: 44
    }
  ],
  sections: [
    [47, 'صور جائزة للإجارة المنتهية بالتمليك', 'Toegestane vormen van huur eindigend in eigendom', 'من صورها الجائزة كما في قرار مجمع الفقه الإسلامي: عقد إجارة مع تخيير المستأجر بعد سداد الأقساط في شراء العين بسعر السوق، أو عقد إجارة مقترن بوعد بالبيع بثمن يتفق عليه.', 'Toegestaan volgens de islamitische fiqh-academie: een huurcontract waarbij de huurder na alle termijnen mag kiezen om te kopen tegen marktprijs, of een huurcontract met een belofte tot verkoop voor een afgesproken prijs.'],
    [48, 'أسباب تحريم التأمين التجاري', 'Redenen voor het verbod op commerciële verzekering', 'يشتمل على الغرر الفاحش، والميسر، والربا بنوعيه، والرهان المحرم لأنه قائم على الحظ.', 'Het bevat grove gharar, gokken, ribā van beide soorten, en verboden weddenschap omdat het op geluk berust.'],
    [51, 'صور القمار المعاصر', 'Moderne vormen van gokken', 'من أشهرها: القمار الهاتفي وعبر القنوات الفضائية، والتسويق الشبكي والهرمي، واليانصيب؛ وكلها من أكل أموال الناس بالباطل: ﴿ولا تأكلوا أموالكم بينكم بالباطل﴾ [البقرة: 188].', 'De bekendste: gokken per telefoon en via satellietzenders, netwerk- en piramidemarketing en de loterij; alle zijn het onrechtmatig opeten van andermans geld (2:188).']
  ],
  keycards: [
    ['opsomming', 47, 'أسباب جواز التأمين التعاوني', 'Waarom coöperatieve verzekering toegestaan is', ['موافق لأصول الشريعة', 'خال من المحاذير الشرعية', 'قائم على التعاون وتفتيت الأخطار', 'لا يقصد منه الربح'], ['in overeenstemming met de sharīʿa', 'vrij van verboden zaken', 'berust op samenwerking en risicospreiding', 'beoogt geen winst']],
    ['onderscheid', 50, 'المسابقات', 'Wedstrijden', ['بعوض: لا تجوز إلا في الخف والنصل والحافر وما أعان على الجهاد', 'بلا عوض: تجوز في المباح كالجغرافيا والرياضيات', 'المسابقات الشرعية كحفظ القرآن جائزة'], ['met vergoeding: alleen met kamelen, pijlen, paarden en wat helpt bij de jihad', 'zonder vergoeding: toegestaan bij iets toegestaans, zoals aardrijkskunde of wiskunde', 'wedstrijden in sharʿī kennis, zoals Koran memoriseren, zijn toegestaan']]
  ],
  hadith: [
    { text: 'لا سبق إلا في خف، أو نصل، أو حافر', takhrij: 'رواه أحمد وأبو داود والترمذي والنسائي، وصححه الألباني', takhrijNl: 'Aḥmad, Abū Dāwūd, at-Tirmidhī en an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', nl: 'Er is geen inzet behalve bij kamelen, pijlen of paarden', pages: [50] }
  ],
  persons: [
    ['al-albani', 'takhrij', [50], 'صحح حديث «لا سبق إلا في خف…».', 'Verklaarde "geen inzet behalve…" authentiek.'],
    ['ibn-al-qayyim', 'text', [52], 'ألف كتاب الفروسية في المسابقات.', 'Schreef al-Furūsiyya over wedstrijden.']
  ],
  review: [
    ['تجوز الأسهم المباحة، وتحرم السندات لأنها قرض ربوي.', 'Toegestane aandelen mogen, obligaties zijn verboden als ribawi-lening.'],
    ['بطاقة الائتمان تحرم إذا اشتملت على فائدة أو شرطها.', 'Een creditcard is verboden als ze rente of een rentevoorwaarde bevat.'],
    ['الإجارة المنتهية بالتمليك تجوز بعقدين منفصلين وإجارة فعلية.', 'Huur eindigend in eigendom mag met twee gescheiden contracten en echte huur.'],
    ['التأمين التعاوني جائز والتجاري محرم.', 'Coöperatieve verzekering is toegestaan, commerciële verboden.'],
    ['اليانصيب والتسويق الهرمي من الميسر المحرم.', 'Loterij en piramidemarketing zijn verboden gokken.']
  ],
  quiz: [
    { type: 'mc', page: 44, q: ['ما حكم تداول السندات؟', 'Wat is het oordeel over handel in obligaties?'], options: [['محرم لأنها قرض ربوي', 'جائز مطلقا', 'جائز في الشركات المباحة', 'مكروه'], ['verboden, want het is een ribawi-lening', 'altijd toegestaan', 'toegestaan bij toegestane bedrijven', 'afgeraden']], answer: 0, explain: ['كما في الصفحة ٤٤.', 'Zoals op p. 44.'] },
    { type: 'tf', page: 46, q: ['يجوز إصدار بطاقة ائتمان بشرط زيادة على القرض إذا تأخر السداد.', 'Een creditcard met als voorwaarde een verhoging bij te late betaling is toegestaan.'], answer: 1, explain: ['محرمة لاشتمالها على شرط الربا.', 'Verboden, omdat ze een ribā-voorwaarde bevat.'] },
    { type: 'mc', page: 48, q: ['أي هذه ليس من أسباب تحريم التأمين التجاري؟', 'Wat is géén reden voor het verbod op commerciële verzekering?'], options: [['أنه تبرع وتضامن', 'الغرر الفاحش', 'الميسر', 'الربا'], ['dat het schenking en solidariteit is', 'grove gharar', 'gokken', 'ribā']], answer: 0, explain: ['التبرع صفة التأمين التعاوني الجائز.', 'Schenking is kenmerk van de toegestane coöperatieve verzekering.'] },
    { type: 'tf', page: 50, q: ['تجوز مسابقة في الرياضيات بجائزة مالية من المتسابقين.', 'Een wiskundewedstrijd met een geldprijs van de deelnemers is toegestaan.'], answer: 1, explain: ['تجوز بلا عوض فقط.', 'Alleen zonder vergoeding.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٤٩ و٥٢.', 'Oefeningen van het boek op p. 49 en 52. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
