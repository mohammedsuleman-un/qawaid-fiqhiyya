// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 8: تفكره ﷺ (lessen 18, boek p. 62–64).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '18',
  unit: 8,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '62–64',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['تفكره ﷺ', 'Zijn nadenken ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'التفكر والتدبر من العبادات العظيمة التي أمر بها الشرع، وهو كالنار التي توقد الإيمان في القلب. كان ﷺ يقوم الليل ينظر في السماء ويتلو آيات آل عمران، وربما قام الليل بآية واحدة، وبكى عند تدبر بعض الآيات، وشابت لحيته من سور ذكر فيها أهوال القيامة.',
    'Nadenken en overdenken zijn grote aanbiddingen die de sharīʿa beval; ze zijn als vuur dat het geloof in het hart doet ontbranden. Hij ﷺ stond \'s nachts op, keek naar de hemel en reciteerde de verzen van Āl ʿImrān; soms bad hij een hele nacht met één vers, hij huilde bij het overdenken van verzen, en hij werd grijs van soera\'s over de verschrikkingen van de Opstanding.'
  ],
  map: {
    title: ['تفكره ﷺ في خريطة واحدة', 'Zijn nadenken in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['تفكره ﷺ', 'Zijn nadenken ﷺ'], ['الوحدة الثامنة', 'Eenheid 8']],
    nodes: [
      { label: ['الأمر بالتفكر', 'Het bevel tot nadenken'], sub: ['ص ٦٢', 'p. 62'], page: 62, children: [['آيات الحشر والبقرة والأعراف', 'verzen uit al-Ḥashr, al-Baqara en al-Aʿrāf']] },
      { label: ['النظر في السماء', 'Naar de hemel kijken'], sub: ['ص ٦٢', 'p. 62'], page: 62, children: [['خواتيم آل عمران', 'het slot van Āl ʿImrān']] },
      { label: ['ترديد آية حتى الصباح', 'Eén vers herhalen tot de ochtend'], sub: ['ص ٦٣', 'p. 63'], page: 63, children: [['آية المائدة ١١٨', 'al-Māʾida 118'], ['عادة السلف', 'de gewoonte van de salaf']] },
      { label: ['البكاء عند التدبر', 'Huilen bij het overdenken'], sub: ['ص ٦٣', 'p. 63'], page: 63, children: [['حسبك الآن', 'zo is het genoeg']] },
      { label: ['الشيب من التفكر', 'Grijs worden van het nadenken'], sub: ['ص ٦٣', 'p. 63'], page: 63, children: [['شيبتني هود وأخواتها', 'Hūd en haar zusters maakten mij grijs']] }
    ]
  },
  points: [
    [62, 'التفكر وإشغال القلب والعقل بما ينفع في الدين والدنيا من العبادات العظيمة.', 'Nadenken en hart en verstand bezighouden met wat nuttig is voor religie en wereld, behoort tot de grote aanbiddingen.'],
    [62, 'التفكر كالنار التي توقد الإيمان في القلب، وقد كثر ذكره ومدحه والأمر به في القرآن.', 'Nadenken is als vuur dat het geloof in het hart doet ontbranden; de Koran noemt, prijst en beveelt het vaak.'],
    [62, 'قال النووي: يستحب قراءة خواتيم آل عمران عند الاستيقاظ في الليل مع النظر إلى السماء، وتكريرها إذا تكرر الاستيقاظ.', 'An-Nawawī: het is aanbevolen het slot van Āl ʿImrān te reciteren bij het \'s nachts ontwaken terwijl men naar de hemel kijkt, en dat te herhalen bij elk ontwaken.'],
    [63, 'قام ﷺ ليلة بآية واحدة حتى أصبح يركع بها ويسجد.', 'Hij ﷺ bad een hele nacht met één vers, waarmee hij boog en neerknielde, tot de ochtend.'],
    [63, 'قال ابن القيم: هذه كانت عادة السلف، يردد أحدهم الآية إلى الصباح.', 'Ibn al-Qayyim: dit was de gewoonte van de salaf; men herhaalde een vers tot de ochtend.'],
    [63, 'قال الطيبي: شيبته هذه السور لما فيها من أهوال يوم القيامة.', 'Aṭ-Ṭībī: deze soera\'s maakten hem grijs om de verschrikkingen van de Dag der Opstanding die erin staan.']
  ],
  terms: [
    ['التفكر', 'at-tafakkur', 62, 'إشغال القلب والعقل بما ينفع في الدين والدنيا.', 'Hart en verstand bezighouden met wat nuttig is voor religie en wereld.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['قيامه ﷺ في ليلة ابن عباس', 'Zijn nacht zoals Ibn ʿAbbās die zag'],
      intro: ['كما في الصفحة ٦٢.', 'Zoals op p. 62.'],
      nodes: [
        [62, 'خرج ونظر في السماء', 'Ging naar buiten en keek naar de hemel', 'في آخر الليل', 'aan het einde van de nacht'],
        [62, 'تلا آيات آل عمران', 'Reciteerde de verzen van Āl ʿImrān', '﴿إن في خلق السماوات والأرض﴾ إلى ﴿فقنا عذاب النار﴾', 'van "in de schepping van de hemelen en de aarde" tot "behoed ons voor de bestraffing van het Vuur"'],
        [62, 'استن وتوضأ وصلى', 'Gebruikte de siwāk, deed wuḍūʾ en bad', 'ثم اضطجع', 'daarna ging hij liggen'],
        [62, 'ثم عاد ففعل مثل ذلك', 'Daarna deed hij hetzelfde opnieuw', 'نظر وتلا واستن وتوضأ وصلى', 'keek, reciteerde, siwāk, wuḍūʾ en gebed']
      ]
    }
  ],
  sections: [
    [62, 'التفكر في القرآن', 'Nadenken in de Koran', 'قال تعالى: ﴿لو أنزلنا هذا القرآن على جبل لرأيته خاشعا متصدعا من خشية الله وتلك الأمثال نضربها للناس لعلهم يتفكرون﴾ [الحشر: 21]، وقال: ﴿كذلك يبين الله لكم الآيات لعلكم تتفكرون﴾ [البقرة: 219]، وقال: ﴿فاقصص القصص لعلهم يتفكرون﴾ [الأعراف: 176].', 'Allah noemt nadenken in onder meer al-Ḥashr 21 (de berg die zich zou splijten uit vrees voor Allah), al-Baqara 219 (Allah maakt de tekenen duidelijk opdat jullie nadenken) en al-Aʿrāf 176 (vertel de verhalen opdat zij nadenken).']
  ],
  keycards: [
    ['opsomming', 62, 'من مواطن تفكره ﷺ', 'Momenten van zijn nadenken', ['النظر في السماء في الليل', 'ترديد آية حتى الصباح', 'البكاء عند تدبر الآيات', 'الشيب من سور القيامة'], ['\'s nachts naar de hemel kijken', 'één vers herhalen tot de ochtend', 'huilen bij het overdenken van verzen', 'grijs worden van soera\'s over de Opstanding']]
  ],
  hadith: [
    { text: 'صلى رسول الله ﷺ ليلة، فقرأ بآية حتى أصبح، يركع بها ويسجد بها: ﴿إن تعذبهم فإنهم عبادك وإن تغفر لهم فإنك أنت العزيز الحكيم﴾', takhrij: 'رواه أحمد والنسائي وابن ماجه، وصححه الألباني', takhrijNl: 'Aḥmad, an-Nasāʾī en Ibn Māja; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو ذر', narratorNl: 'Abū Dharr', nl: 'De Boodschapper van Allah ﷺ bad op een nacht en reciteerde één vers tot de ochtend, waarmee hij boog en neerknielde: "Als U hen bestraft, zij zijn Uw dienaren; en als U hun vergeeft, U bent de Machtige, de Wijze" (5:118)', pages: [63] },
    { text: 'اقرأ علي … حسبك الآن', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله بن مسعود', narratorNl: 'ʿAbd Allāh ibn Masʿūd', note: 'فإذا عيناه تذرفان.', nlNote: 'Daarop stroomden zijn ogen van tranen.', nl: 'Reciteer voor mij … Zo is het genoeg', pages: [63] },
    { text: 'شيبتني هود، والواقعة، والمرسلات، وعم يتساءلون، وإذا الشمس كورت', takhrij: 'أخرجه الترمذي، وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'جواب أبي بكر لما قال: يا رسول الله، قد شبت.', nlNote: 'Antwoord aan Abū Bakr, die zei: Boodschapper van Allah, u bent grijs geworden.', nl: 'Hūd, al-Wāqiʿa, al-Mursalāt, ʿAmma yatasāʾalūn en Idhā sh-shamsu kuwwirat hebben mij grijs gemaakt', pages: [63] }
  ],
  persons: [
    ['ibn-abbas', 'text', [62, 63], 'بات عند النبي ﷺ فرأى قيامه ونظره في السماء.', 'Overnachtte bij de Profeet ﷺ en zag hem bidden en naar de hemel kijken.'],
    ['an-nawawi', 'text', [62, 63], 'استحب قراءة خواتيم آل عمران عند الاستيقاظ.', 'Raadde aan het slot van Āl ʿImrān te reciteren bij het ontwaken.'],
    ['abu-dharr', 'text', [63], 'روى قيامه ﷺ ليلة بآية واحدة.', 'Overleverde dat hij een nacht met één vers bad.'],
    ['ibn-al-qayyim', 'text', [63], 'ذكر أن ترديد الآية عادة السلف.', 'Noemde het herhalen van een vers de gewoonte van de salaf.'],
    ['ibn-masud', 'text', [63], 'قرأ على النبي ﷺ فبكى.', 'Reciteerde voor de Profeet ﷺ, die huilde.'],
    ['at-tibi', 'text', [63], 'بين سبب شيبه من السور.', 'Legde uit waarom die soera\'s hem grijs maakten.']
  ],
  review: [
    ['التفكر من العبادات العظيمة، وهو يوقد الإيمان في القلب.', 'Nadenken is een grote aanbidding die het geloof doet ontbranden.'],
    ['كان ﷺ ينظر في السماء ويتلو خواتيم آل عمران.', 'Hij keek naar de hemel en reciteerde het slot van Āl ʿImrān.'],
    ['ردد آية واحدة حتى الصباح، وهي عادة السلف.', 'Hij herhaalde één vers tot de ochtend; dat was de gewoonte van de salaf.'],
    ['شيبته سور فيها أهوال القيامة.', 'Soera\'s over de verschrikkingen van de Opstanding maakten hem grijs.']
  ],
  quiz: [
    { type: 'mc', page: 63, q: ['بأي آية قام النبي ﷺ ليلة حتى أصبح؟', 'Met welk vers bad de Profeet ﷺ een nacht tot de ochtend?'], options: [['﴿إن تعذبهم فإنهم عبادك﴾', 'آية الكرسي', '﴿قل هو الله أحد﴾', '﴿إنا أعطيناك الكوثر﴾'], ['"Als U hen bestraft, zij zijn Uw dienaren" (5:118)', 'het Troonvers', 'al-Ikhlāṣ', 'al-Kawthar']], answer: 0, explain: ['كما في حديث أبي ذر.', 'Zoals in de hadith van Abū Dharr.'] },
    { type: 'tf', page: 62, q: ['يستحب قراءة خواتيم آل عمران عند الاستيقاظ في الليل.', 'Het is aanbevolen het slot van Āl ʿImrān te reciteren bij het \'s nachts ontwaken.'], answer: 0, explain: ['كما قال النووي.', 'Zoals an-Nawawī zei.'] },
    { type: 'mc', page: 63, q: ['لماذا شيبت سورة هود وأخواتها النبي ﷺ؟', 'Waarom maakten Hūd en haar zusters de Profeet ﷺ grijs?'], options: [['لما فيها من أهوال يوم القيامة', 'لطولها', 'لكثرة الأحكام فيها', 'لأنها نزلت في مرضه'], ['om de verschrikkingen van de Opstanding erin', 'om hun lengte', 'om de vele regels erin', 'omdat ze in zijn ziekte werden geopenbaard']], answer: 0, explain: ['كما قال الطيبي.', 'Zoals aṭ-Ṭībī zei.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٤.', 'Oefening van het boek op p. 64. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
