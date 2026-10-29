// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 7: فرحه ﷺ (lessen 17, boek p. 58–61).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '17',
  unit: 7,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '58–61',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['فرحه ﷺ', 'Zijn vreugde ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'الفرح من الصفات الفطرية التي يعرف بها الإنسان قدر نعمة الله، وكان فرحه ﷺ بالشرع أعظم فرح. فرح ببراءة عائشة، وباختيارها الله ورسوله، وبإسلام عدي بن حاتم، وبظهور الحق في نسب أسامة، وكان إذا جاءه أمر سرور خر ساجدا لله.',
    'Vreugde is een aangeboren eigenschap waarmee de mens de waarde van Allahs gunst kent; zijn grootste vreugde ﷺ was de sharīʿa. Hij verheugde zich over de onschuld van ʿĀʾisha, over haar keuze voor Allah en Zijn Boodschapper, over de islam van ʿAdī ibn Ḥātim en over het bewijs van Usāma\'s afstamming; bij verheugend nieuws knielde hij neer uit dankbaarheid.'
  ],
  map: {
    title: ['فرحه ﷺ في خريطة واحدة', 'Zijn vreugde in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['فرحه ﷺ', 'Zijn vreugde ﷺ'], ['الوحدة السابعة', 'Eenheid 7']],
    nodes: [
      { label: ['ببراءة عائشة', 'Om de onschuld van ʿĀʾisha'], sub: ['ص ٥٩', 'p. 59'], page: 59, children: [['أما الله فقد برأك', 'Allah heeft jou vrijgesproken']] },
      { label: ['باختيار عائشة', 'Om de keuze van ʿĀʾisha'], sub: ['ص ٥٩', 'p. 59'], page: 59, children: [['آية التخيير', 'het vers van de keuze']] },
      { label: ['بإسلام الوجهاء', 'Om de islam van aanzienlijken'], sub: ['ص ٥٩', 'p. 59'], page: 59, children: [['عدي بن حاتم', 'ʿAdī ibn Ḥātim']] },
      { label: ['بظهور الحق', 'Om het blijken van de waarheid'], sub: ['ص ٦٠', 'p. 60'], page: 60, children: [['قول مجزز المدلجي', 'de woorden van Mujazziz al-Mudlijī']] },
      { label: ['سجود الشكر', 'De knieval van dankbaarheid'], sub: ['ص ٦٠', 'p. 60'], page: 60, children: [['عند أمر سرور', 'bij verheugend nieuws']] }
    ]
  },
  points: [
    [58, 'خلق الله في الإنسان صفات فطرية يعرف بها قدر نعمة الله عليه، ومنها الفرح.', 'Allah schiep in de mens aangeboren eigenschappen waarmee hij de waarde van Allahs gunst kent; vreugde is er een van.'],
    [58, 'كان ﷺ يعتريه الفرح والسرور كالبشر، وكان فرحه بالشرع أعظم فرح.', 'Hij ﷺ kende vreugde en blijdschap zoals ieder mens, en zijn vreugde over de sharīʿa was de grootste.'],
    [59, 'أول كلمة تكلم بها بعد نزول البراءة: «يا عائشة، أما الله فقد برأك».', 'Zijn eerste woorden na de openbaring van haar onschuld: "ʿĀʾisha, Allah heeft jou vrijgesproken".'],
    [59, 'اختارت عائشة الله ورسوله والدار الآخرة دون أن تستأمر أبويها، ففرح بذلك.', 'ʿĀʾisha koos Allah, Zijn Boodschapper en het hiernamaals zonder haar ouders te raadplegen, en daarover verheugde hij zich.'],
    [60, 'كانوا في الجاهلية يطعنون في نسب أسامة لسواده وبياض أبيه، فلما قال القائف ما قال فرح النبي ﷺ لأنه كفهم عن الطعن.', 'In de jāhiliyya trok men Usāma\'s afstamming in twijfel om zijn donkere huid en de witte huid van zijn vader; de uitspraak van de fysionomist maakte daar een eind aan, en de Profeet ﷺ verheugde zich.'],
    [60, 'من سنته ﷺ أنه إذا جاءه أمر سرور خر ساجدا شكرا لله.', 'Tot zijn sunna ﷺ behoort dat hij bij verheugend nieuws uit dankbaarheid voor Allah neerknielde.'],
    [60, 'المراد بأمر السرور الأمر العظيم الذي يندر وقوعه، لا ما يتكرر دائما.', 'Bedoeld is een groot, zelden voorkomend verheugend nieuws, niet wat steeds terugkeert.']
  ],
  terms: [
    ['القائف', 'al-qāʾif', 60, 'الذي يعرف الأنساب بالشبه.', 'Iemand die afstamming herkent aan gelijkenis.'],
    ['تبرق أسارير وجهه', 'tabruqu asārīru wajhih', 60, 'تلمع خطوط وجهه من السرور.', 'Zijn gelaatstrekken glansden van blijdschap.'],
    ['سجود الشكر', 'sujūd ash-shukr', 60, 'سجدة يسجدها المسلم شكرا لله عند تجدد نعمة.', 'Een knieval uit dankbaarheid voor Allah bij een nieuwe gunst.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['مواطن فرحه ﷺ', 'Momenten van zijn vreugde'],
      intro: ['كما في الصفحات ٥٩–٦٠.', 'Zoals op p. 59–60.'],
      nodes: [
        [59, 'براءة عائشة', 'De onschuld van ʿĀʾisha', 'سري عنه وهو يضحك', 'de openbaring werd van hem weggenomen terwijl hij lachte'],
        [59, 'اختيار عائشة', 'De keuze van ʿĀʾisha', 'أختار الله ورسوله', 'ik kies Allah en Zijn Boodschapper'],
        [59, 'إسلام عدي', 'De islam van ʿAdī', 'تبسط وجهه فرحا', 'zijn gezicht ging open van vreugde'],
        [60, 'نسب أسامة', 'Usāma\'s afstamming', 'هذه الأقدام بعضها من بعض', 'deze voeten komen van elkaar']
      ]
    }
  ],
  sections: [
    [58, 'الفرح بفضل الله', 'Vreugde om Allahs gunst', 'قال تعالى: ﴿قل بفضل الله وبرحمته فبذلك فليفرحوا هو خير مما يجمعون﴾ [يونس: 58]؛ أي: بما جاءهم من الله من الهدى ودين الحق فليفرحوا.', 'Allah zegt dat men zich moet verheugen om Zijn gunst en barmhartigheid, wat beter is dan wat zij vergaren (10:58): om de leiding en de ware religie die van Allah kwam.'],
    [59, 'آية التخيير', 'Het vers van de keuze', 'أمر ﷺ بتخيير أزواجه بقوله تعالى: ﴿يا أيها النبي قل لأزواجك إن كنتن تردن الحياة الدنيا وزينتها﴾ [الأحزاب: 28-29]، فبدأ بعائشة.', 'Hij ﷺ kreeg het bevel zijn vrouwen te laten kiezen tussen het wereldse leven en Allah, Zijn Boodschapper en het hiernamaals (33:28–29), en hij begon bij ʿĀʾisha.']
  ],
  keycards: [
    ['opsomming', 59, 'مما فرح به ﷺ', 'Waarover hij zich verheugde', ['براءة عائشة', 'اختيار عائشة الله ورسوله', 'إسلام عدي بن حاتم', 'ظهور الحق في نسب أسامة'], ['de onschuld van ʿĀʾisha', 'ʿĀʾisha\'s keuze voor Allah en Zijn Boodschapper', 'de islam van ʿAdī ibn Ḥātim', 'het bewijs van Usāma\'s afstamming']]
  ],
  hadith: [
    { text: 'يا عائشة، أما الله فقد برأك', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'في قصة الإفك؛ سري عنه وهو يضحك، فكانت أول كلمة تكلم بها.', nlNote: 'In het verhaal van de laster; de openbaring werd van hem weggenomen terwijl hij lachte, en dit waren zijn eerste woorden.', nl: 'ʿĀʾisha, Allah heeft jou vrijgesproken', pages: [59] },
    { text: 'يا عائشة، إني أريد أن أذكر لك أمرا، فلا تقضين فيه شيئا دون أبويك', takhrij: 'أخرجه مسلم، ولفظ الفرح عند أحمد في المسند', takhrijNl: 'Muslim; het woord "vreugde" bij Aḥmad in al-Musnad', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'فقالت: بل أختار الله ورسوله والدار الآخرة، ففرح بذلك.', nlNote: 'Zij zei: ik kies Allah, Zijn Boodschapper en het hiernamaals; daarover verheugde hij zich.', nl: 'ʿĀʾisha, ik wil je iets vertellen; beslis er niets over zonder je ouders', pages: [59] },
    { text: 'يا عائشة، ألم تري أن مجززا المدلجي دخل علي فرأى أسامة بن زيد وزيدا وعليهما قطيفة قد غطيا رءوسهما، وبدت أقدامهما، فقال: إن هذه الأقدام بعضها من بعض', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'دخل عليها مسرورا تبرق أسارير وجهه.', nlNote: 'Hij kwam blij bij haar binnen, met glanzende gelaatstrekken.', nl: 'ʿĀʾisha, heb je niet gezien dat Mujazziz al-Mudlijī bij mij binnenkwam en Usāma ibn Zayd en Zayd zag, onder een deken die hun hoofden bedekte en hun voeten vrijliet, en zei: deze voeten komen van elkaar', pages: [60] },
    { text: 'أن النبي ﷺ كان إذا جاءه أمر سرور، أو بشر به، خر ساجدا شاكرا لله', takhrij: 'رواه أبو داود والترمذي وابن ماجه، وصححه الألباني', takhrijNl: 'Abū Dāwūd, at-Tirmidhī en Ibn Māja; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو بكرة', narratorNl: 'Abū Bakra', nl: 'Als de Profeet ﷺ iets verheugends overkwam of hem goed nieuws gebracht werd, knielde hij neer uit dankbaarheid voor Allah', pages: [60] }
  ],
  persons: [
    ['aisha', 'text', [59, 60], 'برأها الله، واختارت الله ورسوله.', 'Allah sprak haar vrij; zij koos Allah en Zijn Boodschapper.'],
    ['adi-ibn-hatim', 'text', [59], 'فرح النبي ﷺ بإسلامه.', 'De Profeet ﷺ verheugde zich over zijn islam.'],
    ['usama-ibn-zayd', 'text', [60], 'ظهر الحق في نسبه بقول القائف.', 'Zijn afstamming werd bevestigd door de fysionomist.'],
    ['zayd-ibn-haritha', 'text', [60], 'والد أسامة.', 'De vader van Usāma.'],
    ['abu-bakra', 'text', [60], 'روى سجود الشكر.', 'Overleverde de knieval van dankbaarheid.']
  ],
  review: [
    ['الفرح صفة فطرية، وأعظم فرحه ﷺ بالشرع.', 'Vreugde is aangeboren; zijn grootste vreugde was de sharīʿa.'],
    ['فرح ببراءة عائشة وباختيارها.', 'Hij verheugde zich over de onschuld en de keuze van ʿĀʾisha.'],
    ['فرح بإسلام عدي وبظهور الحق في نسب أسامة.', 'Hij verheugde zich over de islam van ʿAdī en de bevestiging van Usāma\'s afstamming.'],
    ['من سنته سجود الشكر عند أمر سرور.', 'De knieval van dankbaarheid bij verheugend nieuws is sunna.']
  ],
  quiz: [
    { type: 'mc', page: 59, q: ['ما أول كلمة تكلم بها ﷺ بعد نزول براءة عائشة؟', 'Wat waren zijn eerste woorden na de openbaring van ʿĀʾisha\'s onschuld?'], options: [['يا عائشة، أما الله فقد برأك', 'الحمد لله', 'اللهم لك الحمد', 'أبشري يا عائشة'], ['ʿĀʾisha, Allah heeft jou vrijgesproken', 'alle lof is voor Allah', 'O Allah, aan U is de lof', 'verheug je, ʿĀʾisha']], answer: 0, explain: ['كما في حديث الإفك.', 'Zoals in de hadith van de laster.'] },
    { type: 'mc', page: 60, q: ['لماذا فرح ﷺ بقول مجزز المدلجي؟', 'Waarom verheugde hij ﷺ zich over de woorden van Mujazziz al-Mudlijī?'], options: [['لأنه كف الطعن في نسب أسامة', 'لأن مجززا أسلم', 'لأنه بشره بالنصر', 'لأنه أهدى إليه'], ['omdat het de aanvallen op Usāma\'s afstamming stopte', 'omdat Mujazziz moslim werd', 'omdat hij hem overwinning beloofde', 'omdat hij hem een geschenk gaf']], answer: 0, explain: ['كما في الإطار ص ٦٠.', 'Zoals in het kader op p. 60.'] },
    { type: 'tf', page: 60, q: ['يشرع سجود الشكر عند كل نعمة مستمرة كل يوم.', 'De knieval van dankbaarheid geldt voor elke dagelijks terugkerende gunst.'], answer: 1, explain: ['المراد الأمر العظيم الذي يندر وقوعه.', 'Bedoeld is iets groots dat zelden voorkomt.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦١.', 'Oefening van het boek op p. 61. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
