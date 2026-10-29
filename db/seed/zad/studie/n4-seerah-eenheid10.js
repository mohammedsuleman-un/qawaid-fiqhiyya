// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 10: همومه ﷺ (lessen 20, boek p. 66–68).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '20',
  unit: 10,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '66–68',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['همومه ﷺ', 'Zijn zorgen ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'أعظم هم حمله النبي ﷺ هم إدخال الناس في دين الإسلام، وكان يحمل هم أمته ومصيرها في الآخرة، واهتم بالصلاة حتى في مرض موته، وبالتوحيد والتحذير مما يناقضه وهو في سكرات الموت.',
    'De grootste zorg van de Profeet ﷺ was de mensen in de islam te brengen. Hij droeg de zorg om zijn umma en haar lot in het hiernamaals, en bekommerde zich om het gebed tot in zijn laatste ziekte, en om de tawḥīd en de waarschuwing tegen wat die tenietdoet tot in zijn doodsstrijd.'
  ],
  map: {
    title: ['همومه ﷺ في خريطة واحدة', 'Zijn zorgen in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['همومه ﷺ', 'Zijn zorgen ﷺ'], ['الوحدة العاشرة', 'Eenheid 10']],
    nodes: [
      { label: ['هداية الناس', 'De leiding van de mensen'], sub: ['ص ٦٦', 'p. 66'], page: 66, children: [['﴿فلعلك باخع نفسك﴾', '"Misschien kwel je jezelf"']] },
      { label: ['مصير أمته', 'Het lot van zijn umma'], sub: ['ص ٦٧', 'p. 67'], page: 67, children: [['اللهم أمتي أمتي', 'O Allah, mijn umma']] },
      { label: ['الصلاة', 'Het gebed'], sub: ['ص ٦٧', 'p. 67'], page: 67, children: [['الصلاة الصلاة', 'het gebed, het gebed']] },
      { label: ['التوحيد', 'De tawḥīd'], sub: ['ص ٦٧', 'p. 67'], page: 67, children: [['لا تتخذ القبور مساجد', 'geen graven als moskeeën']] }
    ]
  },
  points: [
    [66, 'أعظم هم حمله النبي ﷺ هم إدخال الناس في دين الإسلام.', 'De grootste zorg van de Profeet ﷺ was de mensen in de islam te brengen.'],
    [66, 'قال تعالى: ﴿فلعلك باخع نفسك على آثارهم إن لم يؤمنوا بهذا الحديث أسفا﴾ [الكهف: 6]، و﴿لعلك باخع نفسك ألا يكونوا مؤمنين﴾ [الشعراء: 3].', 'Allah zegt dat hij zichzelf misschien zou kwellen uit verdriet als zij niet geloven (18:6, 26:3).'],
    [66, 'قال السعدي: كان ﷺ يفرح بهداية المهتدين ويحزن على المكذبين شفقة ورحمة، فأرشده الله ألا يشغل نفسه بالأسف عليهم.', 'As-Saʿdī: hij verheugde zich over wie leiding vond en treurde om wie loochende, uit mededogen; Allah leidde hem zich niet te laten opslokken door verdriet om hen.'],
    [67, 'كان ﷺ يحمل هم أمته ومصيرها في الآخرة، فبشره الله: «إنا سنرضيك في أمتك ولا نسوؤك».', 'Hij ﷺ droeg de zorg om zijn umma en haar lot; Allah beloofde: "Wij zullen je tevredenstellen in je umma en je niet bedroeven".'],
    [67, 'الصلاة آخر ما أوصى به ﷺ.', 'Het gebed is het laatste wat hij ﷺ aanbeval.'],
    [67, 'حذر وهو في سكرات الموت مما صنع اليهود والنصارى من اتخاذ قبور أنبيائهم مساجد.', 'In zijn doodsstrijd waarschuwde hij tegen wat joden en christenen deden: de graven van hun profeten tot gebedsplaatsen maken.'],
    [67, 'قالت عائشة: ولولا ذلك لأبرز قبره، غير أنه خشي أن يتخذ مسجدا.', 'ʿĀʾisha: anders was zijn graf in de open lucht gelegd, maar men vreesde dat het tot gebedsplaats zou worden.']
  ],
  terms: [
    ['باخع نفسك', 'bākhiʿun nafsak', 66, 'مهلكها من شدة الأسف.', 'Jezelf te gronde richten van verdriet.'],
    ['الخميصة', 'al-khamīṣa', 67, 'كساء مخطط.', 'Een gestreept kleed.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['همومه ﷺ في آخر حياته', 'Zijn zorgen aan het einde van zijn leven'],
      intro: ['كما في الصفحة ٦٧.', 'Zoals op p. 67.'],
      nodes: [
        [67, 'الصلاة', 'Het gebed', 'الصلاة الصلاة', 'het gebed, het gebed'],
        [67, 'ما ملكت الأيمان', 'Wie onder jullie hoede staan', 'اتقوا الله فيما ملكت أيمانكم', 'vrees Allah inzake wie jullie bezitten'],
        [67, 'التوحيد', 'De tawḥīd', 'لعنة الله على اليهود والنصارى', 'de vloek van Allah over de joden en christenen']
      ]
    }
  ],
  sections: [],
  keycards: [
    ['opsomming', 66, 'همومه ﷺ', 'Zijn zorgen', ['هداية الناس', 'مصير أمته في الآخرة', 'الصلاة', 'التوحيد'], ['de leiding van de mensen', 'het lot van zijn umma in het hiernamaals', 'het gebed', 'de tawḥīd']]
  ],
  hadith: [
    { text: 'اللهم أمتي أمتي', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن عمرو بن العاص', narratorNl: 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', note: 'وفيه: «إنا سنرضيك في أمتك ولا نسوؤك».', nlNote: 'Daarin: "Wij zullen je tevredenstellen in je umma en je niet bedroeven".', nl: 'O Allah, mijn umma, mijn umma', pages: [67] },
    { text: 'الصلاة الصلاة، اتقوا الله فيما ملكت أيمانكم', takhrij: 'رواه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', narrator: 'علي بن أبي طالب', narratorNl: 'ʿAlī ibn Abī Ṭālib', note: 'آخر كلام رسول الله ﷺ.', nlNote: 'De laatste woorden van de Boodschapper ﷺ.', nl: 'Het gebed, het gebed; vrees Allah inzake wie jullie bezitten', pages: [67] },
    { text: 'لعنة الله على اليهود والنصارى، اتخذوا قبور أنبيائهم مساجد', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة وعبد الله بن عباس', narratorNl: 'ʿĀʾisha en ʿAbd Allāh ibn ʿAbbās', note: 'قاله وهو في سكرات الموت يحذر ما صنعوا.', nlNote: 'Gezegd in zijn doodsstrijd, als waarschuwing tegen wat zij deden.', nl: 'De vloek van Allah over de joden en christenen: zij maakten de graven van hun profeten tot gebedsplaatsen', pages: [67] }
  ],
  persons: [
    ['abdallah-ibn-amr', 'text', [67], 'روى حديث «أمتي أمتي».', 'Overleverde de hadith "mijn umma, mijn umma".'],
    ['ali-ibn-abi-talib', 'text', [67], 'روى آخر كلامه ﷺ.', 'Overleverde zijn laatste woorden.'],
    ['aisha', 'text', [67], 'روت تحذيره من اتخاذ القبور مساجد.', 'Overleverde zijn waarschuwing tegen graven als gebedsplaatsen.'],
    ['ibn-abbas', 'text', [67], 'روى مع عائشة تحذيره في سكرات الموت.', 'Overleverde met ʿĀʾisha zijn waarschuwing in de doodsstrijd.']
  ],
  review: [
    ['أعظم همه ﷺ هداية الناس إلى الإسلام.', 'Zijn grootste zorg was de mensen tot de islam te leiden.'],
    ['حمل هم أمته ومصيرها في الآخرة.', 'Hij droeg de zorg om zijn umma in het hiernamaals.'],
    ['أوصى بالصلاة في آخر كلامه.', 'Met zijn laatste woorden beval hij het gebed aan.'],
    ['حذر من اتخاذ القبور مساجد وهو في سكرات الموت.', 'In zijn doodsstrijd waarschuwde hij tegen graven als gebedsplaatsen.']
  ],
  quiz: [
    { type: 'mc', page: 67, q: ['ما آخر كلام رسول الله ﷺ كما في حديث علي؟', 'Wat waren de laatste woorden van de Boodschapper ﷺ volgens ʿAlī?'], options: [['الصلاة الصلاة، اتقوا الله فيما ملكت أيمانكم', 'اللهم أمتي أمتي', 'لا إله إلا الله', 'بلغوا عني ولو آية'], ['het gebed, het gebed; vrees Allah inzake wie jullie bezitten', 'O Allah, mijn umma', 'er is geen god dan Allah', 'breng van mij over, al is het één vers']], answer: 0, explain: ['كما في حديث علي.', 'Zoals in de hadith van ʿAlī.'] },
    { type: 'tf', page: 67, q: ['حذر النبي ﷺ في سكرات الموت من اتخاذ القبور مساجد.', 'In zijn doodsstrijd waarschuwde de Profeet ﷺ tegen graven als gebedsplaatsen.'], answer: 0, explain: ['كما في حديث عائشة وابن عباس.', 'Zoals in de hadith van ʿĀʾisha en Ibn ʿAbbās.'] },
    { type: 'mc', page: 66, q: ['ما أعظم هم حمله النبي ﷺ؟', 'Wat was de grootste zorg van de Profeet ﷺ?'], options: [['إدخال الناس في الإسلام', 'جمع المال', 'بناء القصور', 'كثرة الأولاد'], ['de mensen in de islam brengen', 'geld verzamelen', 'paleizen bouwen', 'veel kinderen']], answer: 0, explain: ['كما في الصفحة ٦٦.', 'Zoals op p. 66.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٨.', 'Oefening van het boek op p. 68. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
