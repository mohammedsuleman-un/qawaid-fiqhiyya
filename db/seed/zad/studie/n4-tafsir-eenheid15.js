// Hoofdstukkaart bij التفسير (٤), eenheid 15: سورة الكوثر (les 18, boek p. 69–71).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '18',
  unit: 15,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '69–71',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الكوثر', 'Soera al-Kawthar'],
  subtitle: ['سورة مكية، ثلاث آيات', 'Mekkaans, drie verzen'],
  summary: [
    'يبشر الله نبيه ﷺ بأنه أعطاه الكوثر، وهو الخير الكثير ومنه نهر في الجنة، ويأمره أن يشكر ذلك بالصلاة والنحر لربه، ويخبره أن مبغضه هو الأبتر المقطوع من كل خير.',
    'Allah geeft Zijn Profeet ﷺ het goede nieuws dat Hij hem al-Kawthar gaf: veel goeds, waaronder een rivier in het Paradijs. Hij beveelt hem daarvoor te danken met gebed en offer voor zijn Heer, en zegt dat wie hem haat de afgesnedene is, verstoken van alle goed.'
  ],
  map: {
    title: ['سورة الكوثر في خريطة واحدة', 'Soera al-Kawthar in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الكوثر', 'Soera al-Kawthar'], ['الوحدة الخامسة عشرة', 'Eenheid 15']],
    nodes: [
      { label: ['العطاء', 'De gave'], sub: ['الآية ١', 'vers 1'], page: 69, children: [['الخير الكثير', 'veel goeds'], ['نهر في الجنة', 'een rivier in het Paradijs']] },
      { label: ['الشكر', 'De dank'], sub: ['الآية ٢', 'vers 2'], page: 70, children: [['فصل لربك', 'bid tot je Heer'], ['وانحر', 'en offer']] },
      { label: ['الأبتر', 'De afgesnedene'], sub: ['الآية ٣', 'vers 3'], page: 70, children: [['شانئك: مبغضك', 'wie jou haat'], ['مقطوع من كل خير', 'afgesneden van alle goed']] }
    ]
  },
  points: [
    [69, 'نزلت السورة والنبي ﷺ بين أصحابه، أغفى إغفاءة ثم رفع رأسه متبسما فقرأها.', 'De soera kwam neer terwijl de Profeet ﷺ bij zijn metgezellen was: hij dommelde even in, hief glimlachend zijn hoofd en reciteerde haar.'],
    [69, 'الكوثر اسم يدل على الخير الكثير، أعطاه الله نبيه ﷺ في الدنيا والآخرة، ومنه النهر العظيم في الجنة.', 'Al-Kawthar duidt op veel goeds, dat Allah Zijn Profeet ﷺ gaf in deze wereld en het hiernamaals, waaronder de grote rivier in het Paradijs.'],
    [70, 'ضمير العظمة ﴿إنا﴾ يدل على عطاء عظيم.', 'Het voornaamwoord van grootheid "Wij" wijst op een geweldige gave.'],
    [70, 'الصلاة والنحر شكر لله على نعمته، وكلاهما تعظيم لله.', 'Gebed en offer zijn dank aan Allah voor Zijn gunst; beide verheerlijken Hem.'],
    [70, 'الآية رد على سفهاء قريش الذين قالوا لما لم يبق للنبي ﷺ ولد: هو أبتر.', 'Het vers weerlegt de dwazen van Quraysh die, toen de Profeet ﷺ geen zoon overhield, zeiden: hij is afgesneden (abtar).']
  ],
  terms: [
    ['الكوثر', 'al-kawthar', 69, 'الخير الكثير، ومنه نهر في الجنة.', 'Veel goeds, waaronder een rivier in het Paradijs.'],
    ['الفرط', 'al-faraṭ', 70, 'المتقدم السابق.', 'Wie vooruitgaat.'],
    ['انحر', 'inḥar', 70, 'اذبح لله تعظيما وشكرا.', 'Offer voor Allah, ter verheerlijking en uit dank.'],
    ['شانئك', 'shāniʾak', 70, 'مبغضك؛ والشنآن البغض.', 'Wie jou haat; shanaʾān is haat.'],
    ['الأبتر', 'al-abtar', 70, 'المقطوع من كل خير ومن الذكر.', 'Afgesneden van alle goed en van gedachtenis.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['من البشارة إلى الشكر', 'Van goed nieuws naar dank'],
      intro: ['ترتيب السورة كما شرحه الكتاب.', 'De volgorde van de soera zoals het boek haar uitlegt.'],
      nodes: [
        [70, 'البشارة بالكوثر', 'Goed nieuws over al-Kawthar', 'عطاء عظيم', 'een geweldige gave'],
        [70, 'الشكر بالصلاة والنحر', 'Dank met gebed en offer', 'لله وحده', 'voor Allah alleen'],
        [70, 'الرد على المبغض', 'Antwoord aan de hater', 'هو الأبتر وإن كان له بنون', 'hij is de afgesnedene, ook al heeft hij zonen']
      ]
    }
  ],
  sections: [
    [71, 'حكم من أبغض شعائر الإسلام', 'Wie de riten van de islam haat', 'كما يكون مبغض النبي ﷺ أبتر، فمن أبغض شريعته أو شعيرة من شعائر الإسلام فهو كافر، لقوله تعالى: ﴿ذلك بأنهم كرهوا ما أنزل الله فأحبط أعمالهم﴾، فمن كره وجوب الصلاة كفر وإن صلى.', 'Zoals wie de Profeet ﷺ haat afgesneden is, zo is wie zijn wetgeving of een van de riten van de islam haat een ongelovige, vanwege "dat is omdat zij haatten wat Allah neerzond, dus maakte Hij hun daden nietig". Wie de verplichting van het gebed haat, is ongelovig, ook al bidt hij.']
  ],
  keycards: [
    ['onderscheid', 71, 'الكراهة الطبعية وكراهة الشرع', 'Natuurlijke afkeer en haat tegen de wet', ['الكراهة الطبعية المجردة لا يلام عليها صاحبها', 'كراهة شرع الله خطر عظيم، والواجب الرضا والتسليم'], ['louter natuurlijke afkeer wordt niet verweten', 'haat tegen Allahs wet is groot gevaar; men moet tevreden zijn en zich overgeven']]
  ],
  hadith: [
    { text: 'أنزلت علي سورة آنفا، فقرأ: بسم الله الرحمن الرحيم ﴿إنا أعطيناك الكوثر﴾ حتى ختمها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أنس', narratorNl: 'Anas', note: 'قاله لما رفع رأسه متبسما فسئل: ما أضحكك؟', nlNote: 'Gezegd toen hij glimlachend zijn hoofd hief en gevraagd werd waarom hij lachte.', nl: 'Zojuist is mij een soera geopenbaard; toen reciteerde hij: In de naam van Allah, de Erbarmer, de Barmhartige, "Wij hebben jou al-Kawthar gegeven", tot het einde', pages: [69] },
    { text: 'الكوثر نهر في الجنة حافتاه من ذهب، والماء يجري على اللؤلؤ، وماؤه أشد بياضا من اللبن وأحلى من العسل', takhrij: 'رواه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'Al-Kawthar is een rivier in het Paradijs; haar oevers zijn van goud, het water stroomt over parels, en haar water is witter dan melk en zoeter dan honing', pages: [70] },
    { text: 'أنا فرطكم على الحوض', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله', narratorNl: 'ʿAbd Allāh', nl: 'Ik ga jullie voor naar het Bekken', pages: [70] }
  ],
  persons: [
    ['anas-ibn-malik', 'text', [69], 'روى قصة نزول السورة.', 'Overleverde hoe de soera neerkwam.'],
    ['muslim', 'takhrij', [69, 70], 'روى حديث نزول السورة وحديث الحوض.', 'Overleverde de hadith over het neerkomen van de soera en die over het Bekken.'],
    ['ibn-umar', 'text', [70], 'روى وصف نهر الكوثر.', 'Overleverde de beschrijving van de rivier al-Kawthar.'],
    ['ahmad-ibn-hanbal', 'takhrij', [70], 'روى حديث نهر الكوثر.', 'Overleverde de hadith over de rivier al-Kawthar.'],
    ['al-albani', 'takhrij', [70], 'صحح حديث نهر الكوثر.', 'Verklaarde de hadith over al-Kawthar ṣaḥīḥ.'],
    ['al-bukhari', 'takhrij', [70], 'روى حديث «أنا فرطكم على الحوض».', 'Overleverde "Ik ga jullie voor naar het Bekken".']
  ],
  review: [
    ['الكوثر الخير الكثير، ومنه نهر في الجنة.', 'Al-Kawthar is veel goeds, waaronder een rivier in het Paradijs.'],
    ['شكر النعمة بالصلاة والنحر لله.', 'De gunst wordt gedankt met gebed en offer voor Allah.'],
    ['مبغض النبي ﷺ ومبغض شريعته هو الأبتر.', 'Wie de Profeet ﷺ of zijn wetgeving haat, is de afgesnedene.']
  ],
  quiz: [
    { type: 'mc', page: 70, q: ['ما معنى ﴿شانئك﴾؟', 'Wat betekent shāniʾak?'], options: [['مبغضك', 'صاحبك', 'عمك', 'تابعك'], ['wie jou haat', 'je metgezel', 'je oom', 'je volgeling']], answer: 0, explain: ['الشنآن البغض.', 'Shanaʾān is haat.'] },
    { type: 'mc', page: 70, q: ['بم أمر الله نبيه ﷺ شكرا على الكوثر؟', 'Waarmee moest de Profeet ﷺ danken voor al-Kawthar?'], options: [['بالصلاة والنحر', 'بالصيام والصدقة', 'بالحج والعمرة', 'بالجهاد'], ['met gebed en offer', 'met vasten en liefdadigheid', 'met ḥajj en ʿumra', 'met strijd']], answer: 0, explain: ['﴿فصل لربك وانحر﴾.', '"Bid dus tot je Heer en offer".'] },
    { type: 'tf', page: 70, q: ['ماء الكوثر أشد بياضا من اللبن وأحلى من العسل.', 'Het water van al-Kawthar is witter dan melk en zoeter dan honing.'], answer: 0, explain: ['كما في حديث ابن عمر عند أحمد.', 'Zoals in de hadith van Ibn ʿUmar bij Aḥmad.'] },
    { type: 'mc', page: 70, q: ['ما الفرط في «أنا فرطكم على الحوض»؟', 'Wat betekent faraṭ in "Ik ben jullie faraṭ bij het Bekken"?'], options: [['المتقدم السابق', 'الشاهد', 'الساقي فقط', 'المتأخر'], ['wie vooruitgaat', 'de getuige', 'alleen de schenker', 'wie achterblijft']], answer: 0, explain: ['الفرط الذي يتقدم.', 'De faraṭ is wie voorgaat.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٧١.', 'Oefening van het boek op p. 71. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
