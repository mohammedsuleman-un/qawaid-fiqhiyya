// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 5: الشهوة المحرمة (lessen 11–13, boek p. 34–39).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '11',
  unit: 5,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '34–39',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['الشهوة المحرمة', 'Verboden begeerte'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'الشهوة في الأصل غريزة فطرية خلقها الله لتحقيق غايات نبيلة، والمذموم إثارتها وتوجيهها إلى الحرام. للوقوع فيها أسباب كضعف الإيمان والرفقة السيئة وإطلاق النظر والفراغ، وللتعامل معها ثلاث قواعد: قل معاذ الله، واحذر خائنة الأعين، ودافع الخاطرة، وعلاجها بالزواج والصوم وشغل الطاقة فيما ينفع والدعاء.',
    'Begeerte is in beginsel een aangeboren instinct dat Allah schiep voor edele doelen; afkeurenswaardig is haar opwekken en richten op het verbodene. Oorzaken: zwak geloof, slechte vrienden, de blik vrijlaten en leegte. Drie regels om ermee om te gaan: zeg "Allah behoede", pas op voor de verraderlijke blik, en weer de gedachte af. Behandeling: huwelijk, vasten, energie in nuttig werk en smeekbede.'
  ],
  map: {
    title: ['الشهوة المحرمة في خريطة واحدة', 'Verboden begeerte in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['الشهوة المحرمة', 'Verboden begeerte'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['أسباب الوقوع فيها', 'Oorzaken'], sub: ['الدرس ١١', 'les 11'], page: 34, children: [['ضعف الإيمان', 'zwak geloof'], ['الرفقة السيئة', 'slechte vrienden'], ['إطلاق النظر', 'de blik vrijlaten'], ['الفراغ', 'leegte']] },
      { label: ['قواعد التعامل', 'Regels om ermee om te gaan'], sub: ['الدرس ١٢', 'les 12'], page: 35, children: [['قل معاذ الله', 'zeg: Allah behoede'], ['احذر خائنة الأعين', 'pas op voor de verraderlijke blik'], ['دافع الخاطرة', 'weer de gedachte af']] },
      { label: ['العلاج', 'Behandeling'], sub: ['الدرس ١٣', 'les 13'], page: 38, children: [['الزواج', 'huwelijk'], ['الصوم', 'vasten'], ['شغل الطاقة', 'energie benutten'], ['الدعاء', 'smeekbede']] }
    ]
  },
  points: [
    [34, 'الإيمان سلاح المؤمن والحصن المنيع من الوقوع في الرذيلة، فإذا ابتعد عن الطاعة ضعف إيمانه.', 'Geloof is het wapen van de gelovige en zijn vesting tegen verdorvenheid; wie zich van gehoorzaamheid verwijdert, verzwakt zijn geloof.'],
    [34, 'النظر سهم مسموم من سهام إبليس، ولذا أمر الله بغض البصر.', 'De blik is een vergiftigde pijl van Iblīs; daarom beval Allah de blik neer te slaan.'],
    [34, 'النفس إن لم تشغلها بالطاعة شغلتك بالمعصية.', 'Als je de ziel niet bezighoudt met gehoorzaamheid, houdt zij jou bezig met ongehoorzaamheid.'],
    [35, 'قال ابن تيمية: خلق الله فينا الشهوات واللذات لنستعين بها على كمال مصالحنا، فإن استعملناها فيما حظره كنا ظالمين.', 'Ibn Taymiyya: Allah schiep begeerten om onze belangen te vervullen; gebruiken wij ze voor wat Hij verbood, dan zijn wij onrechtvaardig.'],
    [36, 'قال ابن عباس في خائنة الأعين: الرجل يدخل على أهل البيت وفيهم المرأة الحسناء، فإذا غفلوا لحظ إليها، فإذا فطنوا غض.', 'Ibn ʿAbbās over de verraderlijke blik: een man komt bij een gezin binnen met een mooie vrouw; zijn ze onoplettend, dan kijkt hij, merken ze het, dan slaat hij zijn blik neer.'],
    [36, 'الخواطر إذا استرسل معها العبد تطورت فصارت فكرة ثم هما ثم إرادة ثم عزيمة ثم فعلا.', 'Gedachten groeien als men ermee meegaat: idee, zorg, wil, vastberadenheid en dan de daad.'],
    [37, 'من الخواطر الطيبة التي تطرد الشيطانية: التفكر في عظمة الله، والعلم الشرعي، والتفكر في الآخرة، والكسب المباح.', 'Goede gedachten die duivelse verdrijven: nadenken over Allahs grootheid, sharʿī kennis, het hiernamaals en toegestaan verdienen.'],
    [39, 'استعاذته ﷺ من شر المني معناها الاستعاذة من شر الشهوة.', 'Zijn toevlucht ﷺ tegen het kwaad van het sperma betekent toevlucht tegen het kwaad van de begeerte.']
  ],
  terms: [
    ['الشهوة', 'ash-shahwa', 34, 'غريزة فطرية خلقها الله لتحقيق غايات نبيلة.', 'Een aangeboren instinct dat Allah schiep voor edele doelen.'],
    ['خائنة الأعين', 'khāʾinat al-aʿyun', 36, 'النظر إلى ما لا يحل خلسة إذا غفل الناس.', 'Stiekem kijken naar wat niet mag als mensen niet opletten.'],
    ['الخاطرة', 'al-khāṭira', 36, 'ما يرد على القلب من الأفكار، وهي بداية الخير والشر.', 'Een gedachte die in het hart opkomt; het begin van goed en kwaad.'],
    ['الباءة', 'al-bāʾa', 38, 'القدرة على الجماع ومؤن النكاح.', 'Het vermogen tot gemeenschap en de kosten van het huwelijk.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['تطور الخاطرة', 'Hoe een gedachte groeit'],
      intro: ['كما في الصفحة ٣٦.', 'Zoals op p. 36.'],
      nodes: [
        [36, 'خاطرة', 'Gedachte', 'إن لم تدفع', 'als zij niet wordt afgeweerd'],
        [36, 'فكرة ثم هم', 'Idee en zorg', 'تشغل القلب', 'die het hart bezighouden'],
        [36, 'إرادة ثم عزيمة', 'Wil en vastberadenheid', 'تقوى في النفس', 'die in de ziel sterker worden'],
        [36, 'خطوة ثم فعل', 'Stap en daad', 'ارتكاب الحرام', 'het begaan van het verbodene']
      ]
    }
  ],
  sections: [
    [35, 'أسباب أخرى', 'Andere oorzaken', 'التساهل في الحرام كالنظر إلى النساء ومخالطتهن، والقرب من مثيرات الشهوة كالجلوس في الطرقات، فكيف بالقنوات وما يعرض فيها؟', 'Laksheid in het verbodene, zoals naar vrouwen kijken en met hen omgaan, en nabijheid van wat begeerte opwekt, zoals op de wegen zitten; hoeveel te meer zenders en wat daarop verschijnt.'],
    [37, 'علاج الخواطر', 'Gedachten behandelen', 'يستعيذ بالله من الشيطان الرجيم، ويستبدل بالخواطر الشيطانية خواطر إيمانية، فالنفس كالرحى تطحن ما يوضع فيها.', 'Toevlucht zoeken bij Allah tegen de duivel, en duivelse gedachten vervangen door gelovige; de ziel is als een molensteen die maalt wat erin gaat.'],
    [38, 'شغل طاقة الجسم', 'Lichaamsenergie benutten', 'على الشباب أن يستغلوا طاقة أجسادهم في الأعمال الخيرية، خاصة الاجتماعية والدعوية كالدعوة إلى الله وإعانة المحتاجين.', 'Jongeren horen hun energie te steken in goede werken, vooral sociaal en daʿwa-werk, zoals oproepen tot Allah en behoeftigen helpen.']
  ],
  keycards: [
    ['opsomming', 34, 'أسباب الوقوع في الشهوة المحرمة', 'Oorzaken van verboden begeerte', ['ضعف الإيمان', 'الرفقة السيئة', 'إطلاق النظر', 'الفراغ القاتل', 'التساهل في الحرام', 'القرب من مثيرات الشهوة'], ['zwak geloof', 'slechte vrienden', 'de blik vrijlaten', 'dodelijke leegte', 'laksheid in het verbodene', 'nabijheid van wat begeerte opwekt']],
    ['opsomming', 38, 'علاج الشهوة', 'Behandeling van begeerte', ['الزواج', 'الصوم', 'استهلاك طاقة الجسم فيما ينفع', 'الدعاء'], ['huwelijk', 'vasten', 'energie in nuttig werk', 'smeekbede']]
  ],
  hadith: [
    { text: 'الرجل على دين خليله، فلينظر أحدكم من يخالل', takhrij: 'رواه أحمد وأبو داود والترمذي، وحسنه الألباني', takhrijNl: 'Aḥmad, Abū Dāwūd en at-Tirmidhī; ḥasan volgens al-Albānī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Een man volgt de religie van zijn vriend; laat ieder van jullie dus kijken met wie hij bevriend is', pages: [34] },
    { text: 'نعمتان مغبون فيهما كثير من الناس: الصحة، والفراغ', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Twee gunsten waarin veel mensen tekortgedaan worden: gezondheid en vrije tijd', pages: [34] },
    { text: 'سبعة يظلهم الله في ظله … ورجل طلبته امرأة ذات منصب وجمال فقال: إني أخاف الله', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Zeven geeft Allah schaduw in Zijn schaduw … onder wie een man die door een vrouw van aanzien en schoonheid verleid wordt en zegt: ik vrees Allah', pages: [36] },
    { text: 'يا معشر الشباب، من استطاع منكم الباءة فليتزوج؛ فإنه أغض للبصر، وأحصن للفرج، ومن لم يستطع فعليه بالصوم؛ فإنه له وجاء', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله بن مسعود', narratorNl: 'ʿAbd Allāh ibn Masʿūd', nl: 'Jongeren, wie van jullie het kan, laat hem trouwen, want dat slaat de blik beter neer en beschermt de kuisheid beter; en wie het niet kan, laat hem vasten, want dat is voor hem een bescherming', pages: [38] },
    { text: 'قل: اللهم إني أعوذ بك من شر سمعي، ومن شر بصري، ومن شر لساني، ومن شر قلبي، ومن شر منيي', takhrij: 'رواه أبو داود والترمذي والنسائي، وصححه الألباني', takhrijNl: 'Abū Dāwūd, at-Tirmidhī en an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', narrator: 'شكل بن حميد', narratorNl: 'Shakal ibn Ḥumayd', nl: 'Zeg: O Allah, ik zoek toevlucht bij U tegen het kwaad van mijn gehoor, mijn zicht, mijn tong, mijn hart en mijn zaad', pages: [39] },
    { text: 'اللهم إني أسألك الهدى، والتقى، والعفاف، والغنى', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'O Allah, ik vraag U leiding, godvrezendheid, kuisheid en onafhankelijkheid', pages: [39] }
  ],
  persons: [
    ['abu-hurayra', 'text', [34, 36], 'روى «الرجل على دين خليله» وحديث السبعة.', 'Overleverde "een man volgt de religie van zijn vriend" en de hadith van de zeven.'],
    ['ibn-abbas', 'text', [34, 36], 'روى حديث النعمتين، وفسر خائنة الأعين.', 'Overleverde de hadith van de twee gunsten en verklaarde de verraderlijke blik.'],
    ['ibn-taymiyya', 'text', [35], 'بين لماذا خلقت الشهوة.', 'Legde uit waarom begeerte geschapen werd.'],
    ['ibn-masud', 'text', [38], 'روى حديث «يا معشر الشباب».', 'Overleverde "jongeren, wie het kan".'],
    ['shakal-ibn-humayd', 'text', [39], 'علمه النبي ﷺ الاستعاذة من شر المني.', 'De Profeet ﷺ leerde hem toevlucht tegen het kwaad van het zaad.'],
    ['al-albani', 'takhrij', [34, 39], 'حسن وصحح أحاديث في الباب.', 'Noemde hadith in dit hoofdstuk ḥasan of ṣaḥīḥ.']
  ],
  review: [
    ['الشهوة غريزة، والمذموم توجيهها إلى الحرام.', 'Begeerte is een instinct; afkeurenswaardig is haar richten op het verbodene.'],
    ['من أسبابها ضعف الإيمان والرفقة السيئة والنظر والفراغ.', 'Oorzaken: zwak geloof, slechte vrienden, de blik en leegte.'],
    ['قواعد التعامل: معاذ الله، والحذر من خائنة الأعين، ودفع الخاطرة.', 'Regels: Allah behoede, pas op voor de verraderlijke blik, weer de gedachte af.'],
    ['علاجها الزواج والصوم وشغل الطاقة والدعاء.', 'Behandeling: huwelijk, vasten, energie benutten en smeekbede.']
  ],
  quiz: [
    { type: 'mc', page: 35, q: ['أي هذه من قواعد التعامل مع الشهوة؟', 'Welke hoort bij de regels om met begeerte om te gaan?'], options: [['دافع الخاطرة', 'أطلق النظر', 'جالس الغافلين', 'أكثر من الفراغ'], ['weer de gedachte af', 'laat de blik vrij', 'zit met onachtzamen', 'heb veel vrije tijd']], answer: 0, explain: ['القواعد: معاذ الله، والحذر من خائنة الأعين، ودفع الخاطرة.', 'De regels: Allah behoede, de verraderlijke blik, de gedachte afweren.'] },
    { type: 'tf', page: 34, q: ['الشهوة مذمومة في أصلها.', 'Begeerte is in beginsel afkeurenswaardig.'], answer: 1, explain: ['هي غريزة فطرية، والمذموم توجيهها إلى الحرام.', 'Zij is een aangeboren instinct; afkeurenswaardig is haar richten op het verbodene.'] },
    { type: 'mc', page: 38, q: ['ماذا أرشد النبي ﷺ من لم يستطع الزواج؟', 'Wat raadde de Profeet ﷺ aan wie niet kan trouwen?'], options: [['الصوم', 'السفر', 'العزلة', 'كثرة النوم'], ['vasten', 'reizen', 'afzondering', 'veel slapen']], answer: 0, explain: ['«فإنه له وجاء».', '"Want dat is voor hem een bescherming".'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٣٩.', 'Oefening van het boek op p. 39. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
