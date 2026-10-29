// Hoofdstukkaart bij التفسير (٤), eenheid 18: سورة المسد (les 21, boek p. 81–84).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. Het bericht van Ibn Masʿūd (p. 83) noemt het boek alleen
// "van de exegeten" en het is daarom niet opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '21',
  unit: 18,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '81–84',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة المسد', 'Soera al-Masad'],
  subtitle: ['سورة مكية، خمس آيات', 'Mekkaans, vijf verzen'],
  summary: [
    'نزلت السورة لما قال أبو لهب للنبي ﷺ: تبا لك، ألهذا جمعتنا؟ فأخبر الله بخسرانه وهلاكه، وأن ماله وكسبه لن يغنيا عنه، وأنه سيصلى نارا ذات لهب، وامرأته حمالة الحطب في جيدها حبل من مسد.',
    'De soera kwam neer toen Abū Lahab tegen de Profeet ﷺ zei: verlies voor jou, heb je ons hiervoor bijeengeroepen? Allah maakte bekend dat hij verloren en ten onder is, dat zijn bezit en verdiensten hem niet zullen baten, dat hij in een vlammend vuur zal branden, en zijn vrouw, de draagster van het brandhout, met een touw van palmvezel om haar hals.'
  ],
  map: {
    title: ['سورة المسد في خريطة واحدة', 'Soera al-Masad in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة المسد', 'Soera al-Masad'], ['الوحدة الثامنة عشرة', 'Eenheid 18']],
    nodes: [
      { label: ['سبب النزول', 'Aanleiding'], sub: ['على الصفا', 'op aṣ-Ṣafā'], page: 81, children: [['﴿وأنذر عشيرتك الأقربين﴾', '"Waarschuw je naaste verwanten"'], ['تبا لك ألهذا جمعتنا', '"verlies voor jou, hiervoor?"']] },
      { label: ['أبو لهب', 'Abū Lahab'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 82, children: [['تبت يداه وتب', 'zijn handen verloren en hij verloor'], ['ما أغنى عنه ماله وما كسب', 'zijn bezit baatte hem niet'], ['نارا ذات لهب', 'een vlammend vuur']] },
      { label: ['امرأته', 'Zijn vrouw'], sub: ['الآيتان ٤–٥', 'vers 4–5'], page: 83, children: [['أم جميل أروى بنت حرب', 'Umm Jamīl Arwā bint Ḥarb'], ['حمالة الحطب', 'draagster van het brandhout'], ['حبل من مسد', 'een touw van palmvezel']] }
    ]
  },
  points: [
    [82, 'التب الخسران، كما قال: ﴿وما كيد فرعون إلا في تباب﴾.', 'Tabb is verlies, zoals in "de list van Farao liep alleen op verlies uit".'],
    [82, 'ذكر اليدين والمراد ذاته، على عادة العرب في ذكر البعض وإرادة الكل.', 'De handen worden genoemd maar hijzelf is bedoeld, volgens de Arabische gewoonte een deel te noemen voor het geheel.'],
    [82, 'أبو لهب عم النبي ﷺ، اسمه عبد العزى بن عبد المطلب، وكنيته أبو عتبة، ولقب بأبي لهب لإشراق وجهه.', 'Abū Lahab was een oom van de Profeet ﷺ; zijn naam was ʿAbd al-ʿUzzā ibn ʿAbd al-Muṭṭalib, zijn kunya Abū ʿUtba; hij heette Abū Lahab vanwege zijn stralende gezicht.'],
    [83, 'وصفت النار بـ﴿ذات لهب﴾ لتأكيد المناسبة بين اسم أبي لهب وكفره.', 'Het vuur wordt "vlammend" genoemd om het verband tussen de naam Abū Lahab en zijn ongeloof te versterken.'],
    [83, 'امرأته أم جميل أروى بنت حرب أخت أبي سفيان، كانت عونا لزوجه في كفره، فتكون عونا عليه في عذابه.', 'Zijn vrouw Umm Jamīl Arwā bint Ḥarb, de zus van Abū Sufyān, hielp haar man in zijn ongeloof; zo zal zij tegen hem helpen in zijn bestraffing.'],
    [83, 'قال سعيد بن المسيب: كانت لها قلادة فاخرة فقالت: لأنفقنها في عداوة محمد، فأعقبها الله حبلا في جيدها من مسد النار.', 'Saʿīd ibn al-Musayyib: zij had een prachtig halssnoer en zei: ik zal het uitgeven in vijandschap tegen Muḥammad; Allah gaf haar in plaats daarvan een touw van de palmvezel van het Vuur om haar hals.']
  ],
  terms: [
    ['تبت', 'tabbat', 82, 'خسرت وهلكت.', 'Verloren en ten onder gegaan.'],
    ['ما كسب', 'mā kasab', 82, 'ولده، وكل ما كسبه من ولد ومال وجاه.', 'Zijn kinderen, en alles wat hij verwierf aan kinderen, bezit en eer.'],
    ['حمالة الحطب', 'ḥammālat al-ḥaṭab', 83, 'كثيرة الحمل؛ كانت تضع الشوك في طريق النبي ﷺ.', 'Die veel draagt; zij legde doornen op het pad van de Profeet ﷺ.'],
    ['الجيد', 'al-jīd', 83, 'العنق.', 'De hals.'],
    ['المسد', 'al-masad', 83, 'الليف الخشن المفتول، وأصله الفتل.', 'Ruwe, gedraaide palmvezel; de oorsprong is draaien.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['التب الأول والتب الثاني', 'De eerste en de tweede tabb'],
      intro: ['من «للاطلاع» ص ٨٢.', 'Uit het kader "ter informatie" op p. 82.'],
      columns: [['نوعه', 'Soort'], ['معناه', 'Betekenis']],
      rows: [
        { label: ['﴿تبت يدا أبي لهب﴾', '"De handen van Abū Lahab verloren"'], cells: [['دعاء عليه', 'een smeekbede tegen hem'], ['خسر وخاب سعيه وعمله', 'moge hij verliezen en mislukken']] },
        { label: ['﴿وتب﴾', '"en hij verloor"'], cells: [['خبر', 'een mededeling'], ['قد تحقق خسرانه وهلاكه', 'zijn verlies en ondergang zijn werkelijkheid']] }
      ],
      page: 82
    }
  ],
  sections: [
    [84, 'إعجاز بالإخبار عن الغيب', 'Een wonder: bericht over het verborgene', 'أنزل الله السورة وأبو لهب وامرأته حيان، وأخبر أنهما يعذبان في النار، فدل على أنهما لا يسلمان، فكان كما أخبر عالم الغيب والشهادة.', 'Allah zond de soera neer terwijl Abū Lahab en zijn vrouw nog leefden en zei dat zij in het Vuur gestraft worden; dat betekende dat zij geen moslim zouden worden, en zo gebeurde het, zoals de Kenner van het verborgene had meegedeeld.'],
    [84, 'جزاء الصد عن سبيل الله', 'De vergelding voor afhouden van Allahs weg', 'سجل الله غضبه على أبي لهب وامرأته جزاء الكيد لدعوة الله ورسوله: الخسران في الدنيا والنار في الآخرة.', 'Allah legde Zijn toorn over Abū Lahab en zijn vrouw vast als vergelding voor het smeden van listen tegen de oproep van Allah en Zijn Boodschapper: verlies in deze wereld en het Vuur in het hiernamaals.']
  ],
  keycards: [
    ['bewijs', 84, 'السورة من دلائل النبوة', 'De soera als bewijs van het profeetschap', ['نزلت وأبو لهب وامرأته حيان', 'أخبرت أنهما من أهل النار', 'فماتا على الكفر كما أخبرت'], ['zij kwam neer terwijl Abū Lahab en zijn vrouw leefden', 'zij zei dat zij tot de bewoners van het Vuur horen', 'en zij stierven als ongelovigen, zoals zij zei']]
  ],
  hadith: [
    { text: 'أرأيتكم لو أخبرتكم أن خيلا بالوادي تريد أن تغير عليكم، أكنتم مصدقي؟ … فإني نذير لكم بين يدي عذاب شديد', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'قاله على الصفا لما نزلت ﴿وأنذر عشيرتك الأقربين﴾، فقال أبو لهب: تبا لك سائر اليوم، ألهذا جمعتنا؟ فنزلت السورة.', nlNote: 'Gezegd op aṣ-Ṣafā toen "Waarschuw je naaste verwanten" neerkwam; Abū Lahab zei: verlies voor jou de rest van de dag, heb je ons hiervoor bijeengeroepen? Toen kwam de soera neer.', nl: 'Als ik jullie vertelde dat er ruiters in het dal zijn die jullie willen aanvallen, zouden jullie mij geloven? … Ik ben een waarschuwer voor jullie vóór een zware straf', pages: [81] },
    { text: 'يا أيها الناس قولوا: لا إله إلا الله تفلحوا', takhrij: 'أخرجه أحمد، وصححه الأرناؤوط', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Arnaʾūṭ', narrator: 'ربيعة بن عباد', narratorNl: 'Rabīʿa ibn ʿAbbād', note: 'رآه ربيعة في سوق ذي المجاز وخلفه أبو لهب يقول: إنه صابئ كاذب.', nlNote: 'Rabīʿa zag hem op de markt van Dhū l-Majāz, met Abū Lahab achter hem die zei: hij is een afvallige en een leugenaar.', nl: 'O mensen, zeg: er is geen god dan Allah, dan zullen jullie slagen', pages: [82] }
  ],
  persons: [
    ['ibn-abbas', 'text', [81], 'روى سبب نزول السورة.', 'Overleverde de aanleiding van de soera.'],
    ['al-bukhari', 'takhrij', [81], 'روى حديث الصفا.', 'Overleverde de hadith over aṣ-Ṣafā.'],
    ['muslim', 'takhrij', [81], 'روى حديث الصفا.', 'Overleverde de hadith over aṣ-Ṣafā.'],
    ['rabia-ibn-abbad', 'text', [82], 'رأى النبي ﷺ يدعو في سوق ذي المجاز وأبو لهب خلفه.', 'Zag de Profeet ﷺ oproepen op de markt van Dhū l-Majāz, met Abū Lahab achter hem.'],
    ['ahmad-ibn-hanbal', 'takhrij', [82], 'روى حديث ربيعة.', 'Overleverde de hadith van Rabīʿa.'],
    ['al-arnaut', 'takhrij', [82], 'صحح حديث ربيعة.', 'Verklaarde de hadith van Rabīʿa ṣaḥīḥ.'],
    ['abu-sufyan-ibn-harb', 'text', [83], 'أخته أم جميل امرأة أبي لهب.', 'Zijn zus Umm Jamīl was de vrouw van Abū Lahab.'],
    ['said-ibn-al-musayyab', 'text', [83], 'ذكر قلادة أم جميل وما أعقبها الله.', 'Vertelde over het halssnoer van Umm Jamīl en wat Allah haar ervoor in de plaats gaf.']
  ],
  review: [
    ['نزلت السورة في أبي لهب لما رد دعوة النبي ﷺ على الصفا.', 'De soera kwam neer over Abū Lahab, toen hij de oproep van de Profeet ﷺ op aṣ-Ṣafā afwees.'],
    ['التب الأول دعاء، والثاني خبر.', 'De eerste tabb is een smeekbede, de tweede een mededeling.'],
    ['في السورة إخبار بالغيب: مات أبو لهب وامرأته على الكفر.', 'De soera bevat een bericht over het verborgene: Abū Lahab en zijn vrouw stierven als ongelovigen.']
  ],
  quiz: [
    { type: 'mc', page: 82, q: ['ما اسم أبي لهب؟', 'Wat was de naam van Abū Lahab?'], options: [['عبد العزى بن عبد المطلب', 'عمرو بن هشام', 'عبد مناف بن عبد المطلب', 'أمية بن خلف'], ['ʿAbd al-ʿUzzā ibn ʿAbd al-Muṭṭalib', 'ʿAmr ibn Hishām', 'ʿAbd Manāf ibn ʿAbd al-Muṭṭalib', 'Umayya ibn Khalaf']], answer: 0, explain: ['وكنيته أبو عتبة.', 'Zijn kunya was Abū ʿUtba.'] },
    { type: 'mc', page: 82, q: ['ما الفرق بين التب الأول والثاني؟', 'Wat is het verschil tussen de eerste en de tweede tabb?'], options: [['الأول دعاء والثاني خبر', 'الأول خبر والثاني دعاء', 'كلاهما دعاء', 'كلاهما خبر'], ['de eerste is een smeekbede, de tweede een mededeling', 'de eerste een mededeling, de tweede een smeekbede', 'beide smeekbeden', 'beide mededelingen']], answer: 0, explain: ['الثاني إخبار بتحقق خسرانه.', 'De tweede meldt dat zijn verlies werkelijkheid is.'] },
    { type: 'tf', page: 83, q: ['امرأة أبي لهب أخت أبي جهل.', 'De vrouw van Abū Lahab was de zus van Abū Jahl.'], answer: 1, explain: ['هي أم جميل أروى بنت حرب أخت أبي سفيان.', 'Zij was Umm Jamīl Arwā bint Ḥarb, de zus van Abū Sufyān.'] },
    { type: 'mc', page: 83, q: ['ما المسد؟', 'Wat is al-masad?'], options: [['الليف الخشن المفتول', 'الحديد', 'الحرير', 'الذهب'], ['ruwe, gedraaide palmvezel', 'ijzer', 'zijde', 'goud']], answer: 0, explain: ['وأصل المسد الفتل.', 'De oorsprong van masad is draaien.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٨٤.', 'Oefening van het boek op p. 84. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
