// Hoofdstukkaart bij الفقه (٣), eenheid 4: het boek van ḥajj en ʿumra, deel 2 (lessen 25–31, boek p. 73–91).
// Opgesteld uit de leesnotities van het boek; regels, hadith en takhrij zoals in het boek. De uitspraak
// "كنا نصرخ بها صراخا" (p. 78) is weggelaten omdat het boek een andere overleveraar noemt dan Muslim; het citaat van Jābir over Zamzam (p. 79) heeft in het boek geen
// bronvermelding en staat alleen in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-fiqh',
  chapter: '25',
  unit: 4,
  source: {
    label: ['كتاب الفقه (٣)، سلسلة زاد العلمية', 'Al-Fiqh (3), Zad-reeks'],
    pages: '73–91',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Fiqh/page/n{p}/mode/1up'
  },
  title: ['كتاب الحج والعمرة (٢)', 'Ḥajj en ʿumra (2)'],
  subtitle: ['سبعة دروس مجموعة في صفحة واحدة', 'Zeven lessen samen op één pagina'],
  summary: [
    'للحج سبعة واجبات من تركها جبرها بدم: الإحرام من الميقات، والوقوف بعرفة إلى الغروب، والمبيت بمزدلفة، والمبيت بمنى ليالي التشريق، والرمي، والحلق أو التقصير، وطواف الوداع. ويبين الكتاب صفة الحج من الإحرام والتلبية والطواف والسعي، ثم أعمال اليوم الثامن والتاسع ويوم العيد وأيام التشريق. والهدي نوعان: هدي شكران وهدي جبران؛ ومن فاته الوقوف أو أحصر فله أحكام، ويشرع الاشتراط. والعمرة واجبة مرة في العمر، وأركانها الإحرام والطواف والسعي.',
    'De ḥajj heeft zeven plichten; wie er een nalaat, herstelt dat met een offer: iḥrām vanaf de mīqāt, op ʿArafa blijven tot zonsondergang, overnachten in Muzdalifa, overnachten in Minā in de nachten van tashrīq, het werpen, scheren of inkorten, en ṭawāf al-wadāʿ. Het boek beschrijft de ḥajj: iḥrām, talbiya, ṭawāf en saʿy, en daarna de achtste en negende dag, de feestdag en de dagen van tashrīq. De hady kent twee soorten: uit dank en als herstel. Wie ʿArafa mist of verhinderd wordt, kent eigen regels; een voorwaarde stellen (ishtirāṭ) is voorgeschreven. ʿUmra is eenmaal in het leven verplicht; haar pijlers zijn iḥrām, ṭawāf en saʿy.'
  ],
  map: {
    title: ['الحج والعمرة (٢) في خريطة واحدة', 'Ḥajj en ʿumra (2) in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الحج والعمرة', 'Ḥajj en ʿumra'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['واجبات الحج', 'Plichten van de ḥajj'], sub: ['الدرس ٢٥', 'les 25'], page: 75, children: [['المبيت', 'overnachten'], ['الرمي ومسائله', 'het werpen'], ['الحلق وطواف الوداع', 'scheren en afscheidsṭawāf']] },
      { label: ['صفة الحج', 'Beschrijving van de ḥajj'], sub: ['الدروس ٢٦–٢٨', 'les 26–28'], page: 77, children: [['الإحرام والتلبية', 'iḥrām en talbiya'], ['اليوم الثامن والتاسع', 'de achtste en negende dag'], ['يوم العيد والتشريق', 'feestdag en tashrīq']] },
      { label: ['الهدي', 'De hady'], sub: ['الدرس ٢٩', 'les 29'], page: 86, children: [['هدي الشكران', 'uit dank'], ['هدي الجبران', 'als herstel'], ['شروطه', 'voorwaarden']] },
      { label: ['الفوات والإحصار', 'Missen en verhinderd worden'], sub: ['الدرس ٣٠', 'les 30'], page: 87, children: [['فوات عرفة', 'ʿArafa missen'], ['الاشتراط', 'een voorwaarde stellen']] },
      { label: ['العمرة', 'De ʿumra'], sub: ['الدرس ٣١', 'les 31'], page: 89, children: [['فضلها وحكمها', 'verdienste en oordeel'], ['أركانها وواجباتها', 'pijlers en plichten']] }
    ]
  },
  points: [
    [75, 'من ترك واجبا عمدا أو نسيانا جبره بدم، لا يأكل منه ولا يهديه، بل يتصدق به كله.', 'Wie een plicht nalaat, opzettelijk of vergeten, herstelt dat met een offer; hij eet er niet van en geeft het niet cadeau, maar geeft alles als ṣadaqa.'],
    [76, 'الحصى أكبر من الحمص ودون البندق، ويلتقط من أي مكان، ويجب أن يقع في الحوض، ولا يشترط أن يصيب الشاخص.', 'De steentjes zijn groter dan een kikkererwt en kleiner dan een hazelnoot, mogen overal geraapt worden en moeten in het bekken vallen; de pilaar raken is geen voorwaarde.'],
    [77, 'لا يجزئ تقصير بعض جوانب الرأس، والواجب تعميمه.', 'Enkele kanten van het hoofd inkorten volstaat niet; het hele hoofd moet.'],
    [79, 'لا يصح الطواف داخل الحجر لأنه من الكعبة، ولا يستلم من البيت إلا الحجر الأسود والركن اليماني.', 'Ṭawāf binnen de Ḥijr is niet geldig, want die hoort bij de Kaʿba; van het Huis raakt men alleen de Zwarte Steen en de Jemenitische hoek aan.'],
    [79, 'لا تشترط الطهارة للسعي، والحائض تسعى؛ ولم يثبت دعاء مخصوص لكل شوط.', 'Reinheid is geen voorwaarde voor de saʿy; een menstruerende vrouw mag saʿy doen. Er is geen vaste smeekbede per ronde overgeleverd.'],
    [81, 'خالف النبي ﷺ المشركين: دفع من عرفة بعد الغروب، ومن مزدلفة قبل طلوع الشمس، ولم يقف بوادي محسر.', 'De Profeet ﷺ week af van de polytheïsten: hij vertrok van ʿArafa na zonsondergang, uit Muzdalifa vóór zonsopgang, en stopte niet in Wādī Muḥassir.'],
    [82, 'من قدم شيئا من أعمال يوم العيد أو أخره فلا حرج.', 'Wie de volgorde van de handelingen op de feestdag verwisselt: geen bezwaar.'],
    [90, 'من كان بمكة خرج إلى الحل ليحرم بالعمرة، كما أمر النبي ﷺ عائشة أن تحرم من التنعيم.', 'Wie in Mekka woont, gaat naar buiten de Ḥaram om iḥrām voor ʿumra te nemen, zoals de Profeet ﷺ ʿĀʾisha opdroeg iḥrām te nemen vanaf at-Tanʿīm.']
  ],
  terms: [
    ['التحلل الأول', 'at-taḥallul al-awwal', 82, 'يحل به كل شيء إلا النساء، ويكون بالرمي والحلق أو التقصير.', 'Hierdoor is alles toegestaan behalve de vrouw; het volgt op werpen en scheren of inkorten.'],
    ['التحلل الثاني', 'at-taḥallul ath-thānī', 82, 'يحل به كل شيء حتى النساء، بعد الرمي والحلق والطواف والسعي.', 'Hierdoor is alles toegestaan, ook de vrouw, na werpen, scheren, ṭawāf en saʿy.'],
    ['الهدي', 'al-hady', 86, 'ما يهدى إلى البيت الحرام من بهيمة الأنعام تقربا إلى الله.', 'Wat aan het Heilige Huis geschonken wordt van kamelen, runderen of kleinvee, om nader tot Allah te komen.'],
    ['الفوات', 'al-fawāt', 87, 'أن يحرم بالحج فيفوته الوقوف بعرفة.', 'Iḥrām nemen voor ḥajj en het staan op ʿArafa missen.'],
    ['الإحصار', 'al-iḥṣār', 87, 'المنع من إتمام النسك.', 'Verhinderd worden de rite te voltooien.'],
    ['الاشتراط', 'al-ishtirāṭ', 88, 'أن يقول عند الإحرام: إن حبسني حابس فمحلي حيث حبستني.', 'Bij iḥrām zeggen: als iets mij tegenhoudt, dan treed ik uit waar het mij tegenhoudt.'],
    ['العمرة', 'al-ʿumra', 89, 'لغة: الزيارة؛ وشرعا: التعبد لله بزيارة البيت الحرام على صفة مخصوصة.', 'Taal: bezoek; sharīʿa: Allah aanbidden door het Heilige Huis te bezoeken op een bepaalde wijze.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['أعمال الحاج يوم العيد', 'De handelingen op de feestdag'],
      intro: ['على الترتيب الأفضل، ولا حرج في التقديم والتأخير.', 'In de beste volgorde; verwisselen is geen bezwaar.'],
      nodes: [
        [82, 'رمي جمرة العقبة', 'Jamrat al-ʿAqaba werpen', 'سبع حصيات مع التكبير', 'zeven steentjes met takbīr'],
        [82, 'نحر الهدي', 'De hady slachten', '', ''],
        [82, 'الحلق أو التقصير', 'Scheren of inkorten', 'والحلق أفضل، والمرأة قدر أنملة', 'scheren is beter; de vrouw een vingertopje'],
        [82, 'طواف الإفاضة', 'Ṭawāf al-ifāḍa', '', ''],
        [82, 'السعي', 'De saʿy', 'للمتمتع، ولمن لم يسع من المفرد والقارن', 'voor de mutamattiʿ, en voor mufrid of qārin die nog geen saʿy deed']
      ]
    },
    {
      type: 'compare',
      title: ['نوعا الهدي', 'Twee soorten hady'],
      intro: ['كما فرق بينهما الكتاب.', 'Zoals het boek ze onderscheidt.'],
      columns: [['هدي الشكران', 'Uit dank'], ['هدي الجبران', 'Als herstel']],
      rows: [
        { label: ['سببه', 'Oorzaak'], cells: [['التمتع والقران', 'tamattuʿ en qirān'], ['ترك واجب أو فعل محظور أو الإحصار', 'een plicht nalaten, een verbod doen of verhinderd worden']] },
        { label: ['الأكل منه', 'Ervan eten'], cells: [['يستحب', 'aanbevolen'], ['لا يأكل منه', 'niet']] },
        { label: ['من لم يجد', 'Wie het niet heeft'], cells: [['صيام ثلاثة أيام في الحج وسبعة إذا رجع', 'drie dagen vasten in de ḥajj en zeven bij terugkeer'], ['—', '—']] }
      ],
      page: 86
    }
  ],
  sections: [
    [78, 'التلبية', 'De talbiya', 'لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك؛ يرفع بها الرجل صوته، ويقطعها المعتمر عند الشروع في الطواف، والحاج عند رمي جمرة العقبة.', 'Labbayka llāhumma labbayk … De man verheft zijn stem; wie ʿumra doet stopt bij het begin van de ṭawāf, wie ḥajj doet bij het werpen op Jamrat al-ʿAqaba.'],
    [80, 'اليوم الثامن والتاسع', 'De achtste en negende dag', 'يحرم المتمتع بالحج يوم الثامن ويصلي بمنى قصرا بلا جمع؛ ثم يسير إلى عرفة، فيصلي الظهر والعصر قصرا وجمع تقديم، ويكثر الدعاء إلى الغروب، ولا يصوم.', 'Op de achtste neemt de mutamattiʿ iḥrām voor ḥajj en bidt hij in Minā ingekort zonder samenvoegen. Dan naar ʿArafa: ẓuhr en ʿaṣr ingekort en samengevoegd, veel smeekbeden tot zonsondergang, zonder te vasten.'],
    [83, 'التعجل والتأخر', 'Haasten of blijven', 'من شاء تعجل بعد رمي اليوم الثاني عشر، والتأخر أفضل؛ ولا يلزمه البقاء إلا إذا غربت الشمس وهو بمنى باختياره.', 'Wie wil, vertrekt na het werpen op de twaalfde; blijven is beter. Blijven is pas verplicht als de zon ondergaat terwijl hij uit eigen keuze nog in Minā is.'],
    [84, 'التوكيل في الرمي', 'Iemand laten werpen', 'يجوز لمن لا يستطيع الرمي كالمريض والحامل والكبير أن يوكل حاجا يرمي عن نفسه أولا ثم عنه في موقف واحد.', 'Wie niet kan werpen, zoals een zieke, een zwangere of een hoogbejaarde, mag een pelgrim machtigen; die werpt eerst voor zichzelf en dan voor de ander, op dezelfde plek.']
  ],
  keycards: [
    ['opsomming', 75, 'واجبات الحج', 'De plichten van de ḥajj', ['الإحرام من الميقات', 'الوقوف بعرفة إلى الغروب', 'المبيت بمزدلفة', 'المبيت بمنى ليالي التشريق', 'رمي الجمار', 'الحلق أو التقصير', 'طواف الوداع'], ['iḥrām vanaf de mīqāt', 'op ʿArafa blijven tot zonsondergang', 'overnachten in Muzdalifa', 'overnachten in Minā in de nachten van tashrīq', 'het werpen', 'scheren of inkorten', 'ṭawāf al-wadāʿ']],
    ['opsomming', 90, 'أركان العمرة وواجباتها', 'Pijlers en plichten van de ʿumra', ['الأركان: الإحرام، الطواف، السعي', 'الواجبات: الإحرام من الميقات، الحلق أو التقصير'], ['pijlers: iḥrām, ṭawāf, saʿy', 'plichten: iḥrām vanaf de mīqāt, scheren of inkorten']]
  ],
  hadith: [
    { text: 'من شهد صلاتنا هذه، ووقف معنا حتى ندفع، وقد وقف قبل ذلك بعرفة ليلا أو نهارا، فقد تم حجه وقضى تفثه', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem authentiek', note: 'يعني صلاة الفجر بمزدلفة.', nlNote: 'Bedoeld is het ochtendgebed in Muzdalifa.', nl: 'Wie dit gebed met ons bijwoont en met ons blijft staan tot wij vertrekken, en daarvoor ’s nachts of overdag op ʿArafa stond, heeft zijn ḥajj voltooid', pages: [75] },
    { text: 'اللهم ارحم المحلقين … والمقصرين', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'Allah, wees barmhartig voor wie scheren … en voor wie inkorten', pages: [77] },
    { text: 'أمر الناس أن يكون آخر عهدهم بالبيت، إلا أنه خفف عن الحائض', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'De mensen kregen de opdracht dat het Huis hun laatste halte zou zijn, maar voor de menstruerende vrouw werd het verlicht', pages: [77, 83] },
    { text: 'افعل ولا حرج', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'لمن قدم شيئا أو أخره يوم النحر.', nlNote: 'Tegen wie op de offerdag iets eerder of later deed.', nl: 'Doe het maar, geen bezwaar', pages: [82] },
    { text: 'لا ينفر أحد حتى يكون آخر عهده بالبيت', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Niemand vertrekt voordat het Huis zijn laatste halte is', pages: [83] },
    { text: 'تابعوا بين الحج والعمرة، فإنهما ينفيان الفقر والذنوب كما ينفي الكير خبث الحديد', takhrij: 'رواه الترمذي والنسائي وصححه الألباني', takhrijNl: 'at-Tirmidhī en an-Nasāʾī; al-Albānī noemde hem authentiek', nl: 'Laat ḥajj en ʿumra elkaar opvolgen, want zij verdrijven armoede en zonden zoals de blaasbalg het vuil van ijzer verdrijft', pages: [89] },
    { text: 'العمرة إلى العمرة كفارة لما بينهما', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Van de ene ʿumra tot de andere is een uitwissing voor wat ertussen ligt', pages: [89] },
    { text: 'إذا جاء رمضان فاعتمري، فإن عمرة فيه تعدل حجة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'لأم سنان، وفي رواية: حجة معي.', nlNote: 'Tegen Umm Sinān; in een versie: een ḥajj met mij.', nl: 'Als Ramaḍān komt, doe dan ʿumra, want een ʿumra daarin staat gelijk aan een ḥajj', pages: [89] }
  ],
  persons: [
    ['ibn-umar', 'text', [77, 78], 'روى الدعاء للمحلقين، والاغتسال لدخول مكة.', 'Overleverde de smeekbede voor wie scheren en de ghusl voor het binnengaan van Mekka.'],
    ['ibn-abbas', 'text', [77, 83], 'روى الأمر بطواف الوداع والتخفيف عن الحائض.', 'Overleverde de opdracht tot ṭawāf al-wadāʿ en de verlichting voor de menstruerende vrouw.'],
    ['ibn-al-mundhir', 'text', [78], 'قال: الاغتسال عند دخول مكة مستحب عند جميع العلماء.', 'Zei: ghusl bij het binnengaan van Mekka is volgens alle geleerden aanbevolen.'],
    ['jabir-ibn-abdallah', 'text', [79], 'روى صفة حج النبي ﷺ وشربه من زمزم.', 'Overleverde de ḥajj van de Profeet ﷺ en zijn drinken van Zamzam.'],
    ['umm-al-fadl-bint-al-harith', 'text', [80], 'أرسلت إلى النبي ﷺ بقدح لبن يوم عرفة فشرب.', 'Stuurde de Profeet ﷺ op ʿArafa een beker melk en hij dronk.'],
    ['an-nawawi', 'text', [80], 'قال: المبيت بمنى يوم الثامن سنة، ولا دم في تركه بالإجماع.', 'Zei: overnachten in Minā op de achtste is sunna; wie het nalaat hoeft volgens consensus geen offer.'],
    ['abu-hurayra', 'text', [89], 'روى: العمرة إلى العمرة كفارة لما بينهما.', 'Overleverde: van de ene ʿumra tot de andere is een uitwissing.'],
    ['umm-sinan-al-ansariyya', 'text', [89], 'قال لها: عمرة في رمضان تعدل حجة.', 'Tegen haar werd gezegd: een ʿumra in Ramaḍān staat gelijk aan een ḥajj.'],
    ['aisha', 'text', [90], 'أمرها أن تحرم بالعمرة من التنعيم.', 'Kreeg de opdracht iḥrām voor ʿumra te nemen vanaf at-Tanʿīm.']
  ],
  review: [
    ['واجبات الحج سبعة، ومن ترك واحدا جبره بدم.', 'De ḥajj heeft zeven plichten; wie er een nalaat, herstelt dat met een offer.'],
    ['أعمال يوم العيد: الرمي والنحر والحلق والطواف والسعي، ولا حرج في الترتيب.', 'Op de feestdag: werpen, slachten, scheren, ṭawāf en saʿy; de volgorde is vrij.'],
    ['الهدي نوعان: شكران يؤكل منه، وجبران لا يؤكل منه.', 'Er zijn twee soorten hady: uit dank (daarvan eet men) en als herstel (daarvan niet).'],
    ['من فاته الوقوف تحلل بعمرة، ومن أحصر ذبح ثم حلق، إلا من اشترط.', 'Wie ʿArafa mist, treedt uit met een ʿumra; wie verhinderd wordt, slacht en scheert, behalve wie een voorwaarde stelde.'],
    ['العمرة واجبة مرة، وأركانها الإحرام والطواف والسعي.', 'ʿUmra is eenmaal verplicht; haar pijlers zijn iḥrām, ṭawāf en saʿy.']
  ],
  quiz: [
    { type: 'mc', page: 75, q: ['ما الذي يلزم من ترك واجبا من واجبات الحج؟', 'Wat moet wie een plicht van de ḥajj nalaat?'], options: [['دم', 'إعادة الحج', 'صيام عشرة أيام فقط', 'لا شيء'], ['een offer', 'de ḥajj overdoen', 'alleen tien dagen vasten', 'niets']], answer: 0, explain: ['يتصدق به كله ولا يأكل منه.', 'Hij geeft het helemaal als ṣadaqa en eet er niet van.'] },
    { type: 'tf', page: 76, q: ['يشترط أن تصيب الحصاة الشاخص.', 'Het steentje moet de pilaar raken.'], answer: 1, explain: ['الواجب أن تقع في الحوض.', 'Het moet in het bekken vallen.'] },
    { type: 'tf', page: 79, q: ['تشترط الطهارة لصحة السعي.', 'Reinheid is een voorwaarde voor de saʿy.'], answer: 1, explain: ['الطهارة أفضل، والحائض تسعى.', 'Reinheid is beter; een menstruerende vrouw mag saʿy doen.'] },
    { type: 'mc', page: 82, q: ['بم يحصل التحلل الأول؟', 'Waarmee volgt de eerste ontheffing?'], options: [['بالرمي والحلق أو التقصير', 'بطواف الإفاضة وحده', 'بالوقوف بعرفة', 'بطواف الوداع'], ['werpen en scheren of inkorten', 'alleen ṭawāf al-ifāḍa', 'het staan op ʿArafa', 'ṭawāf al-wadāʿ']], answer: 0, explain: ['فيحل له كل شيء إلا النساء.', 'Dan is alles toegestaan behalve de vrouw.'] },
    { type: 'mc', page: 86, q: ['ماذا يفعل المتمتع الذي لم يجد الهدي؟', 'Wat doet de mutamattiʿ die geen hady heeft?'], options: [['يصوم ثلاثة أيام في الحج وسبعة إذا رجع', 'يسقط عنه', 'يطعم ستين مسكينا', 'يصوم شهرين'], ['drie dagen vasten in de ḥajj en zeven bij terugkeer', 'het vervalt', 'zestig armen voeden', 'twee maanden vasten']], answer: 0, explain: ['ويجوز صيام الثلاثة في أيام التشريق.', 'De drie dagen mogen in de dagen van tashrīq.'] },
    { type: 'mc', page: 90, q: ['من أين يحرم بالعمرة من كان بمكة؟', 'Vanwaar neemt iemand in Mekka iḥrām voor ʿumra?'], options: [['من الحل كالتنعيم', 'من بيته بمكة', 'من المسجد الحرام', 'من ذي الحليفة'], ['van buiten de Ḥaram, zoals at-Tanʿīm', 'vanaf zijn huis in Mekka', 'vanuit de Masjid al-Ḥarām', 'vanaf Dhū l-Ḥulayfa']], answer: 0, explain: ['كما أمر النبي ﷺ عائشة.', 'Zoals de Profeet ﷺ ʿĀʾisha opdroeg.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٨٥ و٨٨ و٩١.', 'Oefeningen van het boek op p. 85, 88 en 91. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
