// Hoofdstukkaart bij الفقه (٤), eenheid 6: تابع فقه الأسرة (الطلاق) (lessen 29–31, boek p. 66–71).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '29',
  unit: 6,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '66–71',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['فقه الأسرة: الطلاق', 'Gezinsrecht: de scheiding'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'الطلاق حل عقد النكاح، وهو مشروع بالكتاب والسنة والإجماع، وتجري عليه الأحكام الخمسة بحسب الحال. لا يقع إلا باللفظ، وألفاظه صريحة وكناية، وهو باعتبار موافقته للشرع سني وبدعي، وباعتبار الرجعة رجعي وبائن، والبينونة صغرى وكبرى.',
    'Scheiding is het ontbinden van het huwelijkscontract; zij is legitiem volgens Koran, sunna en consensus, en de vijf oordelen gelden ervoor naargelang de situatie. Zij vindt alleen plaats door uitspraak, met expliciete of indirecte woorden. Naar de sharīʿa is zij sunnī of bidʿī, naar terugname herroepbaar of onherroepelijk, en onherroepelijkheid is klein of groot.'
  ],
  map: {
    title: ['الطلاق في خريطة واحدة', 'De scheiding in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['الطلاق', 'De scheiding'], ['الوحدة السادسة', 'Eenheid 6']],
    nodes: [
      { label: ['التعريف والمشروعية والحكم', 'Definitie, legitimiteit en oordeel'], sub: ['الدرس ٢٩', 'les 29'], page: 66, children: [['حل عقد النكاح', 'ontbinding van het contract'], ['الأحكام الخمسة', 'de vijf oordelen']] },
      { label: ['صيغة الطلاق', 'De formule'], sub: ['الدرس ٣٠', 'les 30'], page: 67, children: [['صريح', 'expliciet'], ['كناية', 'indirect'], ['الحلف بالطلاق', 'zweren bij scheiding']] },
      { label: ['السني والبدعي', 'Sunnī en bidʿī'], sub: ['الدرس ٣١', 'les 31'], page: 68, children: [['طلقة في طهر لم يجامع فيه', 'één keer in een reine periode zonder gemeenschap'], ['مخالفة في العدد أو الوقت', 'afwijking in aantal of tijd']] },
      { label: ['الرجعي والبائن', 'Herroepbaar en onherroepelijk'], sub: ['الدرس ٣١', 'les 31'], page: 70, children: [['بينونة صغرى', 'kleine bainūna'], ['بينونة كبرى', 'grote bainūna'], ['طلاق الغضبان', 'scheiding in woede']] }
    ]
  },
  points: [
    [66, 'الطلاق حل للعقد كله إن كان بائنا، وحل لبعضه إن كان رجعيا.', 'Scheiding ontbindt het hele contract als zij onherroepelijk is, en een deel ervan als zij herroepbaar is.'],
    [66, 'قال ابن قدامة: أجمع الناس على جواز الطلاق.', 'Ibn Qudāma: de mensen zijn het eens over de toelaatbaarheid van scheiding.'],
    [66, 'شرع الطلاق حلا للمشكلات الزوجية عند الحاجة، والمرجع فيه ينبغي أن يكون القضاء.', 'Scheiding is ingesteld als oplossing voor huwelijksproblemen bij behoefte; de rechtspraak hoort daarbij de instantie te zijn.'],
    [67, 'لا يقع الطلاق بالنية وحدها، بل يشترط التلفظ به.', 'Scheiding vindt niet plaats door de intentie alleen; uitspreken is voorwaarde.'],
    [67, 'الحلف بالطلاق من الأخطاء الشائعة؛ والجمهور على وقوعه إذا خالفت أو وقع الشرط، واختار شيخ الإسلام أنه يمين إذا قصد المنع أو الحث.', 'Zweren bij scheiding is een veelvoorkomende fout; volgens de meerderheid vindt de scheiding plaats als de vrouw ertegenin gaat; Shaykh al-Islām koos dat het een eed is als hij haar wilde weerhouden of aansporen.'],
    [68, 'الطلاق الصريح يقع ولو لم ينوه، جادا كان أو هازلا، والكناية لا يقع بها إلا بنية الطلاق.', 'Expliciete scheiding vindt plaats ook zonder intentie, serieus of als grap; indirecte woorden alleen met de intentie van scheiding.'],
    [69, 'ليس المراد بطلاق السنة أنه مسنون، بل أنه الواقع في الوقت المشروع على الوجه المشروع.', 'Met sunnī scheiding is niet bedoeld dat zij aanbevolen is, maar dat zij op de legitieme tijd en wijze gebeurt.'],
    [70, 'المطلقة الرجعية زوجة، لها النفقة ويتوارثان، وتكفي الرجعة بقوله: راجعتك، ويسن الإشهاد.', 'De herroepbaar gescheiden vrouw is nog echtgenote: zij heeft recht op onderhoud en zij erven van elkaar; terugname met "ik neem je terug" volstaat, getuigen is sunna.']
  ],
  terms: [
    ['الطلاق', 'aṭ-ṭalāq', 66, 'لغة: الحل والإرسال. واصطلاحا: حل عقد النكاح.', 'Taal: losmaken en vrijlaten. Vakterm: ontbinding van het huwelijkscontract.'],
    ['المولي', 'al-mūlī', 67, 'من حلف ألا يطأ زوجته أكثر من أربعة أشهر.', 'Wie zweert meer dan vier maanden geen gemeenschap met zijn vrouw te hebben.'],
    ['الصريح والكناية', 'aṣ-ṣarīḥ wa-l-kināya', 68, 'الصريح: ما لا يحتمل غير الطلاق كأنت طالق، والكناية: ما يحتمله وغيره كالحقي بأهلك.', 'Expliciet: alleen scheiding, zoals "je bent gescheiden"; indirect: kan ook iets anders betekenen, zoals "ga naar je familie".'],
    ['طلاق السنة', 'ṭalāq as-sunna', 68, 'طلقة واحدة في طهر لم يجامع فيه، أو والمرأة حامل.', 'Eén scheiding in een reine periode zonder gemeenschap, of terwijl de vrouw zwanger is.'],
    ['الطلاق البدعي', 'aṭ-ṭalāq al-bidʿī', 69, 'ما خالف السنة في عدده أو وقته.', 'Scheiding die in aantal of tijdstip van de sunna afwijkt.'],
    ['الرجعي والبائن', 'ar-rajʿī wa-l-bāʾin', 70, 'الرجعي: يملك فيه الرجعة في العدة بلا عقد جديد، والبائن: لا يملكها إلا بعقد جديد.', 'Herroepbaar: terugname in de wachttijd zonder nieuw contract; onherroepelijk: alleen met een nieuw contract.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['أحكام الطلاق الخمسة', 'De vijf oordelen over scheiding'],
      intro: ['كما في الصفحتين ٦٦–٦٧.', 'Zoals op p. 66–67.'],
      nodes: [
        [66, 'الإباحة', 'Toegestaan', 'عند الحاجة كسوء الخلق ودوام الشقاق', 'bij behoefte, zoals slecht karakter en voortdurende onenigheid'],
        [66, 'الكراهة', 'Afgeraden', 'إذا لم تكن حاجة', 'als er geen behoefte is'],
        [67, 'التحريم', 'Verboden', 'في الحيض أو النفاس أو طهر جامع فيه', 'tijdens menstruatie, kraambed of een reine periode met gemeenschap'],
        [67, 'الوجوب', 'Verplicht', 'طلاق المولي إذا مضت المدة ولم يفئ', 'de mūlī na afloop van de termijn zonder terugkeer'],
        [67, 'الاستحباب', 'Aanbevolen', 'إذا تضررت المرأة من بقاء النكاح', 'als de vrouw schade lijdt door het voortduren van het huwelijk']
      ]
    },
    {
      type: 'compare',
      title: ['البينونة الصغرى والكبرى', 'Kleine en grote bainūna'],
      intro: ['كما في الإطار ص ٧١.', 'Zoals in het kader op p. 71.'],
      columns: [['الصغرى', 'Klein'], ['الكبرى', 'Groot']],
      rows: [
        { label: ['متى', 'Wanneer'], cells: [['أقل من ثلاث وانقضت العدة، أو طلقت قبل الدخول', 'minder dan drie en de wachttijd voorbij, of gescheiden vóór gemeenschap'], ['تمام الثلاث', 'na de derde scheiding']] },
        { label: ['كيف تحل له', 'Hoe zij weer toegestaan wordt'], cells: [['بعقد جديد', 'met een nieuw contract'], ['بعد أن تنكح زوجا غيره نكاحا صحيحا ويطأها ثم يفارقها', 'pas nadat zij een ander geldig huwt, gemeenschap plaatsvindt en hij haar verlaat']] }
      ],
      page: 71
    }
  ],
  sections: [
    [69, 'صور الطلاق البدعي', 'Vormen van bidʿī scheiding', 'في العدد: أن يطلقها أكثر من طلقة بلفظ واحد أو متفرقة قبل انقضاء العدة، كأنت طالق ثلاثا. وفي الوقت: أن يطلقها حائضا أو في طهر جامعها فيه ولم يتبين حملها. والجمهور على وقوع الطلاق في الحيض.', 'In aantal: meer dan één scheiding in één uitspraak of verspreid vóór het einde van de wachttijd, zoals "je bent driemaal gescheiden". In tijd: tijdens de menstruatie of in een reine periode met gemeenschap zonder duidelijke zwangerschap. Volgens de meerderheid vindt scheiding tijdens de menstruatie toch plaats.'],
    [70, 'طلاق الغضبان', 'Scheiding in woede', 'الغضب ثلاثة أقسام: ما يكون في مبادئه ولا يغير العقل فيقع الطلاق، وما يبلغ نهايته فينغلق باب العلم والإرادة فلا يقع، وما بينهما ففيه خلاف، وأصول الشريعة تدل على عدم نفوذه.', 'Woede kent drie soorten: in het begin, zonder dat het verstand verandert: de scheiding vindt plaats; in het uiterste, zodat kennis en wil wegvallen: zij vindt niet plaats; daartussen: er is verschil, en de grondslagen van de sharīʿa wijzen op niet-van-kracht zijn.']
  ],
  keycards: [
    ['onderscheid', 68, 'ألفاظ الطلاق', 'Woorden van scheiding', ['الصريح: أنت طالق، مطلقة، طلقتك؛ يقع ولو لم ينوه', 'الكناية: خلية، برية، حرة، الحقي بأهلك، اخرجي؛ لا يقع إلا بالنية'], ['expliciet: je bent gescheiden; vindt plaats ook zonder intentie', 'indirect: je bent vrij, ga naar je familie, ga eruit; alleen met intentie']],
    ['bewijs', 69, 'دليل طلاق السنة', 'Bewijs voor sunnī scheiding', ['﴿فطلقوهن لعدتهن﴾ [الطلاق: 1]', '«مره فليراجعها، ثم ليطلقها طاهرا، أو حاملا»', 'إجماع العلماء'], ['"scheid hen met het oog op hun wachttijd" (65:1)', '"laat hem haar terugnemen en haar scheiden als zij rein of zwanger is"', 'consensus van de geleerden']]
  ],
  hadith: [
    { text: 'ليراجعها، فإذا طهرت فإن شاء فليطلقها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', note: 'لما طلق امرأته وهي حائض.', nlNote: 'Toen hij zijn vrouw scheidde terwijl zij menstrueerde.', nl: 'Laat hem haar terugnemen; als zij rein is, laat hem haar dan scheiden als hij wil', pages: [66] },
    { text: 'إن الله تجاوز لأمتي عما وسوست، أو حدثت به أنفسها، ما لم تعمل به أو تكلم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Allah heeft mijn umma vergeven wat in hun gedachten opkomt of wat zij bij zichzelf zeggen, zolang zij er niet naar handelen of het uitspreken', pages: [67] },
    { text: 'ثلاث جدهن جد، وهزلهن جد: النكاح، والطلاق، والرجعة', takhrij: 'أخرجه أبو داود والترمذي وابن ماجه، وحسنه الألباني', takhrijNl: 'Abū Dāwūd, at-Tirmidhī en Ibn Māja; ḥasan volgens al-Albānī', nl: 'Drie dingen zijn serieus als ze serieus gemeend zijn, en serieus als ze als grap gezegd worden: het huwelijk, de scheiding en de terugname', pages: [68] },
    { text: 'مره فليراجعها، ثم ليطلقها طاهرا، أو حاملا', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'Draag hem op haar terug te nemen en haar dan te scheiden als zij rein of zwanger is', pages: [69] }
  ],
  persons: [
    ['ibn-umar', 'text', [66, 69], 'طلق امرأته وهي حائض فأمره النبي ﷺ بمراجعتها.', 'Scheidde zijn vrouw tijdens haar menstruatie; de Profeet ﷺ droeg hem op haar terug te nemen.'],
    ['umar-ibn-al-khattab', 'text', [66, 69], 'أخبر النبي ﷺ بطلاق ابنه.', 'Vertelde de Profeet ﷺ over de scheiding van zijn zoon.'],
    ['ibn-qudama', 'text', [66], 'نقل الإجماع على جواز الطلاق.', 'Gaf de consensus over de toelaatbaarheid van scheiding.'],
    ['ibn-taymiyya', 'text', [67], 'اختار أن الحلف بالطلاق للمنع أو الحث له حكم اليمين.', 'Koos dat zweren bij scheiding om te weerhouden of aan te sporen de status van een eed heeft.'],
    ['al-albani', 'takhrij', [68], 'حسن حديث «ثلاث جدهن جد».', 'Noemde "drie dingen zijn serieus" ḥasan.']
  ],
  review: [
    ['الطلاق حل عقد النكاح، وتجري عليه الأحكام الخمسة.', 'Scheiding ontbindt het huwelijk; de vijf oordelen gelden ervoor.'],
    ['لا يقع بالنية وحدها، والصريح يقع ولو هازلا.', 'Niet door intentie alleen; expliciet vindt zij ook als grap plaats.'],
    ['طلاق السنة طلقة في طهر لم يجامع فيه أو في حمل.', 'Sunnī scheiding: één keer in een reine periode zonder gemeenschap of tijdens zwangerschap.'],
    ['الرجعية زوجة في العدة، والبائن لا تحل إلا بعقد جديد.', 'De herroepbaar gescheiden vrouw is echtgenote in de wachttijd; de onherroepelijk gescheiden alleen met een nieuw contract.'],
    ['المطلقة ثلاثا لا تحل حتى تنكح زوجا غيره.', 'De driemaal gescheiden vrouw is pas toegestaan nadat zij een ander huwt.']
  ],
  quiz: [
    { type: 'tf', page: 67, q: ['يقع الطلاق إذا نواه الرجل في نفسه ولم يتلفظ به.', 'Scheiding vindt plaats als de man haar alleen in zichzelf bedoelt.'], answer: 1, explain: ['يشترط التلفظ، لحديث «ما لم تعمل به أو تكلم».', 'Uitspreken is voorwaarde, wegens "zolang zij het niet uitspreken".'] },
    { type: 'mc', page: 68, q: ['أي هذه الألفاظ من الكناية؟', 'Welke uitdrukking is indirect?'], options: [['الحقي بأهلك', 'أنت طالق', 'طلقتك', 'مطلقة'], ['ga naar je familie', 'je bent gescheiden', 'ik heb je gescheiden', 'gescheiden']], answer: 0, explain: ['لا يقع بها إلا بنية الطلاق.', 'Daarmee vindt scheiding alleen plaats met de intentie.'] },
    { type: 'mc', page: 69, q: ['ما طلاق السنة؟', 'Wat is sunnī scheiding?'], options: [['طلقة في طهر لم يجامع فيه أو في حمل', 'ثلاث طلقات بلفظ واحد', 'الطلاق في الحيض', 'الطلاق في طهر جامع فيه'], ['één keer in een reine periode zonder gemeenschap of tijdens zwangerschap', 'drie in één uitspraak', 'tijdens de menstruatie', 'in een reine periode met gemeenschap']], answer: 0, explain: ['كما في الصفحتين ٦٨–٦٩.', 'Zoals op p. 68–69.'] },
    { type: 'tf', page: 70, q: ['تجب النفقة للمطلقة الرجعية في العدة.', 'De herroepbaar gescheiden vrouw heeft in de wachttijd recht op onderhoud.'], answer: 0, explain: ['لأنها زوجة في تلك الحال.', 'Want zij is dan nog echtgenote.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٧١.', 'Oefening van het boek op p. 71. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
