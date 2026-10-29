// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 11: تحفيزه ﷺ (lessen 21–22, boek p. 69–71).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '21',
  unit: 11,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '69–71',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['تحفيزه ﷺ', 'Zijn aansporing ﷺ'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'القرآن مليء بتحفيز الناس على الطاعة بمجازاتهم عليها في الدنيا والآخرة، وسار النبي ﷺ على هذا المنهج؛ فحفز بالأمور الأخروية كالجنة، وبالأمور الدنيوية كبسط الرزق والسلب، وبالأمور المعنوية كذكر فضيلة عظيمة لمن يعمل العمل.',
    'De Koran spoort mensen aan tot gehoorzaamheid door beloning in deze wereld en het hiernamaals, en de Profeet ﷺ volgde die methode: hij spoorde aan met het hiernamaals, zoals het paradijs, met wereldse zaken, zoals ruime voorziening en buit, en met morele zaken, zoals het noemen van een grote verdienste.'
  ],
  map: {
    title: ['تحفيزه ﷺ في خريطة واحدة', 'Zijn aansporing in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['تحفيزه ﷺ', 'Zijn aansporing ﷺ'], ['الوحدة الحادية عشرة', 'Eenheid 11']],
    nodes: [
      { label: ['بالأمور الأخروية', 'Met het hiernamaals'], sub: ['ص ٦٩–٧٠', 'p. 69–70'], page: 69, children: [['أركان الإسلام', 'de zuilen van de islam'], ['الجنة على الجهاد', 'het paradijs voor de strijd'], ['ترك سؤال الناس', 'niets van mensen vragen']] },
      { label: ['بالأمور الدنيوية', 'Met wereldse zaken'], sub: ['ص ٧٠', 'p. 70'], page: 70, children: [['بسط الرزق وطول العمر', 'ruime voorziening en lang leven'], ['السلب', 'de buit van de gedode']] },
      { label: ['بالأمور المعنوية', 'Met morele zaken'], sub: ['ص ٧١', 'p. 71'], page: 71, children: [['راية خيبر', 'de vlag van Khaybar']] }
    ]
  },
  points: [
    [69, 'في القرآن تحفيز على الطاعة بالمجازاة في الدنيا والآخرة: ﴿ولو أن أهل القرى آمنوا واتقوا لفتحنا عليهم بركات من السماء والأرض﴾ [الأعراف: 96].', 'De Koran spoort aan tot gehoorzaamheid met beloning in wereld en hiernamaals: als de bewoners van de steden hadden geloofd, had Allah zegeningen uit hemel en aarde geopend (7:96).'],
    [69, 'حفز ﷺ على التمسك بأركان الإسلام بذكر عاقبتها، وهي أن تجعل صاحبها من أهل الجنة.', 'Hij ﷺ spoorde aan tot de zuilen van de islam door hun afloop te noemen: zij maken de beoefenaar tot iemand van het paradijs.'],
    [69, 'الفلاح في «قولوا: لا إله إلا الله تفلحوا» نكرة فيعم الدنيا والآخرة.', 'Het succes in "zeg: er is geen god dan Allah, dan slagen jullie" is onbepaald en omvat dus wereld en hiernamaals.'],
    [70, 'استعجل عمير بن الحمام الموت شوقا إلى الجنة التي حفزهم بها النبي ﷺ.', 'ʿUmayr ibn al-Ḥumām haastte de dood uit verlangen naar het paradijs waarmee de Profeet ﷺ hen aanspoorde.'],
    [70, 'حفز أبا ذر بالجنة على التعفف عن سؤال الناس.', 'Met het paradijs spoorde hij Abū Dharr aan zich te onthouden van mensen iets te vragen.'],
    [70, 'حفز بالأمور الدنيوية كطول العمر وبسط الرزق لمن وصل رحمه.', 'Hij spoorde aan met wereldse zaken, zoals een lang leven en ruime voorziening voor wie familiebanden onderhoudt.'],
    [71, 'حفزهم معنويا يوم خيبر بذكر فضيلة حامل الراية، فبات الناس يدوكون أيهم يعطاها، ففاز بها علي بن أبي طالب.', 'Op de dag van Khaybar spoorde hij hen moreel aan met de verdienste van de vlagdrager; iedereen hoopte haar te krijgen, en ʿAlī ibn Abī Ṭālib won haar.']
  ],
  terms: [
    ['التحفيز', 'at-taḥfīz', 69, 'الحث على العمل بذكر ما يترتب عليه من جزاء.', 'Aansporen tot een daad door de beloning ervan te noemen.'],
    ['الجعبة', 'al-jaʿba', 70, 'وعاء السهام.', 'De pijlkoker.'],
    ['السلب', 'as-salab', 70, 'ما يكون مع القتيل من ثياب وسلاح ودابة ونحوها.', 'Wat de gedode bij zich heeft: kleding, wapens, rijdier en dergelijke.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أنواع تحفيزه ﷺ', 'Soorten aansporing'],
      intro: ['كما في الصفحات ٦٩–٧١.', 'Zoals op p. 69–71.'],
      columns: [['أخروي', 'Hiernamaals'], ['دنيوي', 'Werelds'], ['معنوي', 'Moreel']],
      rows: [
        { label: ['المثال', 'Voorbeeld'], cells: [['قوموا إلى جنة عرضها السماوات والأرض', 'sta op naar een paradijs zo breed als hemelen en aarde'], ['فليصل رحمه', 'laat hem familiebanden onderhouden'], ['لأعطين الراية غدا', 'morgen geef ik de vlag']] },
        { label: ['الموضع', 'Waar'], cells: [['بدر', 'Badr'], ['حنين: من قتل قتيلا فله سلبه', 'Ḥunayn: wie iemand doodt, krijgt diens buit'], ['خيبر', 'Khaybar']] }
      ],
      page: 69
    }
  ],
  sections: [
    [69, 'عمير بن الحمام يوم بدر', 'ʿUmayr ibn al-Ḥumām bij Badr', 'لما قال النبي ﷺ: «قوموا إلى جنة عرضها السماوات والأرض» قال عمير: بخ بخ، رجاء أن يكون من أهلها، فقال: «فإنك من أهلها»، فألقى تمرات كن معه وقاتل حتى قتل.', 'Toen de Profeet ﷺ zei: "Sta op naar een paradijs zo breed als de hemelen en de aarde", zei ʿUmayr "bakh bakh", in de hoop erbij te horen; hij zei: "Jij hoort erbij". ʿUmayr gooide zijn dadels weg en vocht tot hij sneuvelde.']
  ],
  keycards: [
    ['opsomming', 69, 'وسائل التحفيز في السنة', 'Middelen van aansporing in de sunna', ['الجنة', 'الفلاح في الدنيا والآخرة', 'بسط الرزق وطول العمر', 'السلب', 'ذكر الفضيلة'], ['het paradijs', 'succes in wereld en hiernamaals', 'ruime voorziening en lang leven', 'de buit van de gedode', 'het noemen van een verdienste']]
  ],
  hadith: [
    { text: 'تعبد الله لا تشرك به شيئا، وتقيم الصلاة المكتوبة، وتؤدي الزكاة المفروضة، وتصوم رمضان', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'جواب أعرابي قال: دلني على عمل إذا عملته دخلت الجنة.', nlNote: 'Antwoord aan een bedoeïen die vroeg naar een daad die hem het paradijs in brengt.', nl: 'Aanbid Allah zonder Hem iets toe te voegen, verricht het verplichte gebed, betaal de verplichte zakāt en vast in Ramaḍān', pages: [69] },
    { text: 'قولوا: لا إله إلا الله تفلحوا', takhrij: 'رواه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', nl: 'Zeg: er is geen god dan Allah, dan zullen jullie slagen', pages: [69] },
    { text: 'قوموا إلى جنة عرضها السماوات والأرض … ما يحملك على قولك بخ بخ؟ … فإنك من أهلها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'يوم بدر، مع عمير بن الحمام الأنصاري.', nlNote: 'Bij Badr, met ʿUmayr ibn al-Ḥumām al-Anṣārī.', nl: 'Sta op naar een paradijs waarvan de breedte de hemelen en de aarde is … Wat brengt je ertoe "bakh bakh" te zeggen? … Jij hoort bij haar mensen', pages: [69, 70] },
    { text: 'هل لك إلى بيعة ولك الجنة … ألا تسأل الناس شيئا … ولا سوطك إن سقط منك حتى تنزل إليه فتأخذه', takhrij: 'رواه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو ذر', narratorNl: 'Abū Dharr', nl: 'Wil jij een eed van trouw, en voor jou is het paradijs? … Dat je mensen niets vraagt … zelfs niet je zweep als die valt, maar dat je afstijgt en hem zelf pakt', pages: [70] },
    { text: 'من سره أن يبسط له في رزقه، أو ينسأ له في أثره فليصل رحمه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Wie graag ruime voorziening krijgt of een lang leven, laat hem zijn familiebanden onderhouden', pages: [70] },
    { text: 'من قتل قتيلا له عليه بينة فله سلبه', takhrij: 'في الصحيحين', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو قتادة', narratorNl: 'Abū Qatāda', note: 'يوم حنين.', nlNote: 'Op de dag van Ḥunayn.', nl: 'Wie iemand doodt en daar bewijs voor heeft, krijgt diens buit', pages: [70] },
    { text: 'لأعطين الراية غدا رجلا يفتح الله على يديه، يحب الله ورسوله، ويحبه الله ورسوله', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'يوم خيبر، ففاز بها علي بن أبي طالب.', nlNote: 'Op de dag van Khaybar; ʿAlī ibn Abī Ṭālib kreeg haar.', nl: 'Morgen geef ik de vlag aan een man door wiens handen Allah de overwinning geeft; hij houdt van Allah en Zijn Boodschapper, en Allah en Zijn Boodschapper houden van hem', pages: [71] }
  ],
  persons: [
    ['abu-hurayra', 'text', [69], 'روى حديث الأعرابي ودخول الجنة.', 'Overleverde de hadith van de bedoeïen en het paradijs.'],
    ['umayr-ibn-al-humam', 'text', [69, 70], 'قاتل يوم بدر شوقا إلى الجنة حتى قتل.', 'Vocht bij Badr uit verlangen naar het paradijs tot hij sneuvelde.'],
    ['abu-dharr', 'text', [70], 'بايع على ألا يسأل الناس شيئا.', 'Zwoer trouw dat hij mensen niets zou vragen.'],
    ['abu-qatada-al-ansari', 'text', [70], 'روى حديث السلب يوم حنين.', 'Overleverde de hadith over de buit bij Ḥunayn.'],
    ['ali-ibn-abi-talib', 'text', [71], 'فاز براية خيبر.', 'Kreeg de vlag van Khaybar.']
  ],
  review: [
    ['سار النبي ﷺ على منهج القرآن في التحفيز بالدنيا والآخرة.', 'De Profeet ﷺ volgde de Koran in aansporing met wereld en hiernamaals.'],
    ['حفز بالجنة على أركان الإسلام والجهاد والتعفف.', 'Met het paradijs spoorde hij aan tot de zuilen, de strijd en het niet-vragen.'],
    ['حفز بالأمور الدنيوية كبسط الرزق والسلب.', 'Met wereldse zaken zoals voorziening en buit.'],
    ['حفز معنويا بذكر الفضيلة كراية خيبر.', 'Moreel door een verdienste te noemen, zoals de vlag van Khaybar.']
  ],
  quiz: [
    { type: 'mc', page: 70, q: ['ماذا فعل عمير بن الحمام لما بشره النبي ﷺ بأنه من أهل الجنة؟', 'Wat deed ʿUmayr ibn al-Ḥumām toen de Profeet ﷺ zei dat hij bij het paradijs hoorde?'], options: [['ألقى تمراته وقاتل حتى قتل', 'رجع إلى المدينة', 'أكل تمراته ثم نام', 'طلب الغنيمة'], ['hij gooide zijn dadels weg en vocht tot hij sneuvelde', 'hij keerde terug naar Medina', 'hij at zijn dadels en sliep', 'hij vroeg om buit']], answer: 0, explain: ['كما في حديث مسلم.', 'Zoals in de hadith bij Muslim.'] },
    { type: 'tf', page: 69, q: ['الفلاح في «قولوا: لا إله إلا الله تفلحوا» خاص بالآخرة.', 'Het succes in "zeg: er is geen god dan Allah, dan slagen jullie" geldt alleen voor het hiernamaals.'], answer: 1, explain: ['نكرة فيعم الدنيا والآخرة.', 'Het is onbepaald en omvat wereld en hiernamaals.'] },
    { type: 'mc', page: 71, q: ['أي نوع من التحفيز في حديث راية خيبر؟', 'Welke soort aansporing zit in de hadith van de vlag van Khaybar?'], options: [['معنوي', 'دنيوي', 'مالي', 'لا تحفيز فيه'], ['moreel', 'werelds', 'financieel', 'geen aansporing']], answer: 0, explain: ['ذكر فضيلة عظيمة لمن يعمل العمل.', 'Het noemen van een grote verdienste voor wie het doet.'] },
    { type: 'mc', page: 70, q: ['بم حفز النبي ﷺ أبا ذر على ترك سؤال الناس؟', 'Waarmee spoorde de Profeet ﷺ Abū Dharr aan mensen niets te vragen?'], options: [['بالجنة', 'بالمال', 'بالإمارة', 'بالسلب'], ['met het paradijs', 'met geld', 'met een leidersfunctie', 'met buit']], answer: 0, explain: ['«هل لك إلى بيعة ولك الجنة».', '"Wil jij een eed van trouw, en voor jou is het paradijs?"'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٧١.', 'Oefening van het boek op p. 71. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
