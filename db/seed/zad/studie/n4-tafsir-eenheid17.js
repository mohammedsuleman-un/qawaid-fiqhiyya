// Hoofdstukkaart bij التفسير (٤), eenheid 17: سورة النصر (les 20, boek p. 76–80).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. Het woord van al-Ḥasan (niet nader genoemd) en "er is
// gezegd dat hij nog twee jaar leefde" staan er zonder bron en zijn alleen als uitleg opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '20',
  unit: 17,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '76–80',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة النصر', 'Soera an-Naṣr'],
  subtitle: ['سورة مدنية، وتسمى سورة التوديع', 'Medinensisch, ook "soera van het afscheid" genoemd'],
  summary: [
    'إذا جاء نصر الله وفتح مكة ودخل الناس في دين الله أفواجا، فقد أمر الله نبيه ﷺ أن يسبح بحمد ربه ويستغفره، وفهم منها أن أجله قد اقترب، إنه كان توابا.',
    'Als de hulp van Allah en de verovering van Mekka komen en de mensen in groepen de religie van Allah binnengaan, beveelt Allah Zijn Profeet ﷺ zijn Heer te verheerlijken met lof en Hem om vergeving te vragen. Daaruit begreep hij dat zijn levenseinde nabij was; Hij aanvaardt het berouw veelvuldig.'
  ],
  map: {
    title: ['سورة النصر في خريطة واحدة', 'Soera an-Naṣr in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة النصر', 'Soera an-Naṣr'], ['الوحدة السابعة عشرة', 'Eenheid 17']],
    nodes: [
      { label: ['النصر والفتح', 'Hulp en verovering'], sub: ['الآية ١', 'vers 1'], page: 77, children: [['فتح مكة في رمضان سنة ٨ هـ', 'Mekka veroverd in Ramaḍān 8 n.H.']] },
      { label: ['دخول الناس أفواجا', 'Mensen komen in groepen'], sub: ['الآية ٢', 'vers 2'], page: 77, children: [['أهل اليمن', 'de mensen van Jemen'], ['جماعات متفرقة', 'groepen na elkaar']] },
      { label: ['التسبيح والاستغفار', 'Verheerlijking en vergeving vragen'], sub: ['الآية ٣', 'vers 3'], page: 77, children: [['فسبح بحمد ربك', 'verheerlijk met lof je Heer'], ['واستغفره', 'en vraag Hem vergeving'], ['إنه كان توابا', 'Hij aanvaardt het berouw veelvuldig']] }
    ]
  },
  points: [
    [76, 'علم النبي ﷺ لما نزلت أنه قد نعيت إليه نفسه، ولذلك تسمى سورة التوديع.', 'Toen zij neerkwam, wist de Profeet ﷺ dat zijn dood hem was aangekondigd; daarom heet zij de soera van het afscheid.'],
    [76, 'قال الحسن: أعلم أنه قد اقترب أجله، فأمر بالتسبيح والتوبة ليختم له بالزيادة في العمل الصالح.', 'Al-Ḥasan: hem werd bekendgemaakt dat zijn einde nabij was; hij kreeg opdracht tot tasbīḥ en berouw, zodat zijn leven zou eindigen met meer goede daden.'],
    [77, 'الفتح فتح مكة في رمضان من السنة الثامنة للهجرة، وسماه الله فتحا مبينا.', 'De verovering is die van Mekka in Ramaḍān van het achtste jaar na de hijra; Allah noemde haar een duidelijke opening.'],
    [77, 'التسبيح تنزيه الله عما لا يليق بجلاله، والحمد وصفه بالكمال مع المحبة والتعظيم، والاستغفار طلب المغفرة.', 'Tasbīḥ is Allah vrijpleiten van wat Zijn majesteit niet past; ḥamd is Hem volmaaktheid toeschrijven met liefde en verheerlijking; istighfār is om vergeving vragen.'],
    [78, 'أمر بالاستغفار عند النصر لما قد يدخل القلب من زهو النصر، ولاستبطاء الوعد أحيانا، وللتقصير في الحمد والشكر.', 'Bij de overwinning wordt istighfār bevolen vanwege de trots die het hart kan binnenkomen, het soms traag vinden van de belofte, en tekort in lof en dank.']
  ],
  terms: [
    ['الفتح', 'al-fatḥ', 77, 'فتح مكة.', 'De verovering van Mekka.'],
    ['أفواجا', 'afwājan', 77, 'جماعات متتابعة متفرقة.', 'Groepen na elkaar.'],
    ['التسبيح', 'at-tasbīḥ', 77, 'تنزيه الله عما لا يليق بجلاله.', 'Allah vrijpleiten van wat Zijn majesteit niet past.'],
    ['الحمد', 'al-ḥamd', 77, 'وصف الله بالكمال مع المحبة والتعظيم.', 'Allah volmaaktheid toeschrijven met liefde en verheerlijking.'],
    ['توابا', 'tawwāban', 77, 'كثير القبول لتوبة عباده.', 'Die het berouw van Zijn dienaren veelvuldig aanvaardt.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['لماذا قدم التسبيح ثم الحمد ثم الاستغفار؟', 'Waarom eerst tasbīḥ, dan ḥamd, dan istighfār?'],
      intro: ['أدب قرآني ذكره الكتاب ص ٧٨.', 'Koranische etiquette die het boek op p. 78 noemt.'],
      nodes: [
        [78, 'التسبيح', 'Tasbīḥ', 'خالص لله: تنزيهه عن النقص', 'puur voor Allah: Hem vrijpleiten van gebrek'],
        [78, 'الحمد', 'Ḥamd', 'مشترك: ثناء على الله وقيام العبد بالشكر', 'gedeeld: lof op Allah en de dank van de dienaar'],
        [78, 'الاستغفار', 'Istighfār', 'حظ العبد وحده: طلب المغفرة', 'het aandeel van de dienaar alleen: om vergeving vragen']
      ]
    }
  ],
  sections: [
    [79, 'أدب الأنبياء عند النصر', 'De etiquette van profeten bij de overwinning', 'هذا أدب يوسف لما اجتمع له الملك والأهل: ﴿رب قد آتيتني من الملك﴾، وأدب سليمان لما رأى العرش: ﴿هذا من فضل ربي ليبلوني أأشكر أم أكفر﴾.', 'Dit is de etiquette van Yūsuf toen macht en familie hem toevielen: "Mijn Heer, U hebt mij macht gegeven", en van Sulaymān toen hij de troon zag: "Dit is van de gunst van mijn Heer, om mij te beproeven of ik dankbaar ben of ondankbaar".'],
    [79, 'دخول النبي ﷺ مكة', 'De Profeet ﷺ trekt Mekka binnen', 'في موقف النصر والفتح انحنى النبي ﷺ لله شاكرا على ظهر دابته، ودخل مكة متواضعا يقرأ كتاب الله.', 'Op het moment van overwinning boog de Profeet ﷺ zich dankbaar voor Allah op de rug van zijn rijdier en trok hij Mekka nederig binnen, het Boek van Allah reciterend.']
  ],
  keycards: [
    ['opsomming', 78, 'أسباب الاستغفار عند النصر', 'Waarom vergeving vragen bij de overwinning', ['ما قد يدخل القلب من زهو النصر', 'استبطاء وعد النصر أحيانا', 'التقصير في الحمد والشكر', 'شعور النفس بالتقصير والعجز'], ['de trots die het hart kan binnenkomen', 'de belofte soms traag vinden', 'tekort in lof en dank', 'besef van eigen tekort en onvermogen']]
  ],
  hadith: [
    { text: 'سبحانك ربنا وبحمدك اللهم اغفر لي', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'ما صلى النبي ﷺ صلاة بعد نزول السورة إلا قالها فيها.', nlNote: 'Na het neerkomen van de soera bad de Profeet ﷺ geen gebed zonder dit erin te zeggen.', nl: 'Verheven bent U, onze Heer, en met Uw lof; o Allah, vergeef mij', pages: [76] },
    { text: 'لما نزلت ﴿إذا جاء نصر الله والفتح﴾ علم النبي ﷺ أنه قد نعيت إليه نفسه', takhrij: 'أخرجه أحمد، وحسنه الأرناؤوط', takhrijNl: 'Aḥmad; ḥasan volgens al-Arnaʾūṭ', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Toen "Als de hulp van Allah en de overwinning komen" neerkwam, wist de Profeet ﷺ dat zijn dood hem was aangekondigd', pages: [76] },
    { text: 'سبحانك اللهم وبحمدك، أشهد أن لا إله إلا أنت، أستغفرك وأتوب إليك', takhrij: 'أخرجه ابن جرير عن أبي العالية', takhrijNl: 'Ibn Jarīr, van Abū l-ʿĀliya', note: 'كان لا يقوم من مجلس بعد نزول السورة إلا قالها.', nlNote: 'Na het neerkomen van de soera stond hij uit geen bijeenkomst op zonder dit te zeggen.', nl: 'Verheven bent U, o Allah, en met Uw lof; ik getuig dat er geen god is dan U; ik vraag U vergeving en keer berouwvol tot U terug', pages: [76] },
    { text: 'أليس معك ﴿إذا جاء نصر الله والفتح﴾؟ … ربع القرآن', takhrij: 'أخرجه الترمذي وحسنه', takhrijNl: 'at-Tirmidhī, die het ḥasan noemde', narrator: 'أنس', narratorNl: 'Anas', nl: 'Ken je niet "Als de hulp van Allah en de overwinning komen"? … Een kwart van de Koran', pages: [76] },
    { text: 'الله أكبر، الله أكبر، جاء نصر الله والفتح، جاء أهل اليمن … قوم رقيقة قلوبهم، لينة طباعهم، الإيمان يمان، والفقه يمان، والحكمة يمانية', takhrij: 'أخرجه ابن جرير الطبري، وأصله في الصحيحين', takhrijNl: 'Ibn Jarīr aṭ-Ṭabarī; de kern staat bij al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Allah is de Grootste, Allah is de Grootste; de hulp van Allah en de overwinning zijn gekomen, de mensen van Jemen zijn gekomen … een volk met zachte harten en milde aard; het geloof is Jemenitisch, het begrip is Jemenitisch en de wijsheid is Jemenitisch', pages: [77] },
    { text: 'ليخرجن منه أفواجا، كما دخلوا فيه أفواجا', takhrij: 'أخرجه الحاكم وصححه', takhrijNl: 'al-Ḥākim, die het ṣaḥīḥ noemde', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Zij zullen haar in groepen verlaten, zoals zij haar in groepen binnengingen', pages: [77] }
  ],
  persons: [
    ['aisha', 'text', [76], 'روت ذكر النبي ﷺ في صلاته بعد نزول السورة.', 'Overleverde wat de Profeet ﷺ na het neerkomen van de soera in zijn gebed zei.'],
    ['al-bukhari', 'takhrij', [76], 'روى حديث عائشة.', 'Overleverde de hadith van ʿĀʾisha.'],
    ['ibn-abbas', 'text', [76, 77], 'روى نعي النبي ﷺ وحديث أهل اليمن.', 'Overleverde de aankondiging van de dood van de Profeet ﷺ en de hadith over de mensen van Jemen.'],
    ['ahmad-ibn-hanbal', 'takhrij', [76], 'روى حديث ابن عباس.', 'Overleverde de hadith van Ibn ʿAbbās.'],
    ['al-arnaut', 'takhrij', [76], 'حسن حديث ابن عباس.', 'Verklaarde de hadith van Ibn ʿAbbās ḥasan.'],
    ['at-tabari', 'takhrij', [76, 77], 'روى أثر أبي العالية وحديث أهل اليمن.', 'Overleverde het bericht van Abū l-ʿĀliya en de hadith over Jemen.'],
    ['abu-al-aliya', 'text', [76], 'روى ذكر النبي ﷺ عند القيام من المجلس.', 'Overleverde wat de Profeet ﷺ zei bij het opstaan uit een bijeenkomst.'],
    ['anas-ibn-malik', 'text', [76], 'روى أنها ربع القرآن.', 'Overleverde dat zij een kwart van de Koran is.'],
    ['at-tirmidhi', 'takhrij', [76], 'روى حديث أنس وحسنه.', 'Overleverde de hadith van Anas en noemde hem ḥasan.'],
    ['abu-hurayra', 'text', [77], 'روى «ليخرجن منه أفواجا».', 'Overleverde "zij zullen haar in groepen verlaten".'],
    ['al-hakim', 'takhrij', [77], 'روى حديث أبي هريرة وصححه.', 'Overleverde de hadith van Abū Hurayra en noemde hem ṣaḥīḥ.']
  ],
  review: [
    ['سورة النصر نعي للنبي ﷺ، وتسمى سورة التوديع.', 'Soera an-Naṣr kondigde het einde van de Profeet ﷺ aan; zij heet de soera van het afscheid.'],
    ['الفتح فتح مكة سنة ثمان للهجرة.', 'De verovering is die van Mekka in het jaar 8 n.H.'],
    ['قدم التسبيح ثم الحمد ثم الاستغفار أدبا قرآنيا.', 'Eerst tasbīḥ, dan ḥamd, dan istighfār: Koranische etiquette.']
  ],
  quiz: [
    { type: 'mc', page: 76, q: ['ما الاسم الآخر لسورة النصر؟', 'Hoe heet soera an-Naṣr ook?'], options: [['سورة التوديع', 'سورة الفتح', 'سورة الأفواج', 'سورة التوبة'], ['de soera van het afscheid', 'soera al-Fatḥ', 'soera van de groepen', 'soera at-Tawba']], answer: 0, explain: ['لأن فيها نعي النبي ﷺ.', 'Omdat zij het einde van de Profeet ﷺ aankondigde.'] },
    { type: 'mc', page: 77, q: ['متى كان فتح مكة؟', 'Wanneer werd Mekka veroverd?'], options: [['رمضان سنة ٨ هـ', 'شوال سنة ٦ هـ', 'ذو الحجة سنة ١٠ هـ', 'رجب سنة ٢ هـ'], ['Ramaḍān 8 n.H.', 'Shawwāl 6 n.H.', 'Dhū l-Ḥijja 10 n.H.', 'Rajab 2 n.H.']], answer: 0, explain: ['في رمضان من السنة الثامنة للهجرة.', 'In Ramaḍān van het achtste jaar na de hijra.'] },
    { type: 'tf', page: 78, q: ['الاستغفار حظ مشترك بين الله والعبد.', 'Istighfār is gedeeld tussen Allah en de dienaar.'], answer: 1, explain: ['الحمد هو المشترك، والاستغفار حظ العبد وحده.', 'Ḥamd is gedeeld; istighfār is het aandeel van de dienaar alleen.'] },
    { type: 'mc', page: 76, q: ['ماذا كان النبي ﷺ يقول في صلاته بعد نزول السورة؟', 'Wat zei de Profeet ﷺ in zijn gebed na het neerkomen van de soera?'], options: [['سبحانك ربنا وبحمدك اللهم اغفر لي', 'لا إله إلا الله وحده', 'حسبي الله ونعم الوكيل', 'اللهم إني أسألك الجنة'], ['Verheven bent U, onze Heer, en met Uw lof; o Allah, vergeef mij', 'Er is geen god dan Allah alleen', 'Allah is mij genoeg', 'O Allah, ik vraag U het Paradijs']], answer: 0, explain: ['كما في حديث عائشة عند البخاري.', 'Zoals in de hadith van ʿĀʾisha bij al-Bukhārī.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٨٠.', 'Oefening van het boek op p. 80. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
