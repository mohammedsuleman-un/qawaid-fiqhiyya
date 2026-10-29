// Hoofdstukkaart bij الحديث (٤), eenheid 3: hadith 11–15 (lessen 12–17, boek p. 57–82).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-hadith/leesnotities.md);
// hadith en takhrij zoals in het boek. De dichtregels zonder naam (p. 58 en 63) en het bericht
// over Luqmān (p. 63) zijn niet opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-hadith',
  chapter: '12',
  unit: 3,
  source: {
    label: ['كتاب الحديث (٤)، سلسلة زاد العلمية', 'Al-Ḥadīth (4), Zad-reeks'],
    pages: '57–82',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ١١–١٥', 'Hadith 11–15'],
  subtitle: ['خمسة أحاديث في ستة دروس', 'Vijf hadith in zes lessen'],
  summary: [
    'خمسة أحاديث في الأخلاق: «لا تغضب» وعلاج الغضب، و«من حسن إسلام المرء تركه ما لا يعنيه»، وما يرضاه الله لنا وما يكرهه، وخصال المنافق الأربع، وحقوق المسلم على أخيه: لا تحاسدوا ولا تناجشوا ولا تباغضوا ولا تدابروا.',
    'Vijf hadith over karakter: "word niet boos" en hoe woede te behandelen; "tot goede islam behoort laten wat je niet aangaat"; wat Allah voor ons goedkeurt en afkeurt; de vier kenmerken van de hypocriet; en de rechten van de moslim op zijn broeder: geen afgunst, geen opdrijven, geen haat en elkaar niet de rug toekeren.'
  ],
  map: {
    title: ['الأحاديث الخمسة في خريطة واحدة', 'De vijf hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٤)', 'Hadith (4)'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['لا تغضب', 'Word niet boos'], sub: ['الحديث ١١', 'hadith 11'], page: 57, children: [['الغضب المحمود والمذموم', 'lofwaardige en laakbare woede'], ['علاج الغضب', 'behandeling van woede']] },
      { label: ['ترك ما لا يعنيه', 'Laten wat je niet aangaat'], sub: ['الحديث ١٢', 'hadith 12'], page: 62, children: [['من أصول الآداب', 'een grondslag van de etiquette'], ['الأمر بالمعروف مما يعنيه', 'goed gebieden gaat je wel aan']] },
      { label: ['يرضى لكم ثلاثا ويكره ثلاثا', 'Drie dingen goedgekeurd, drie afgekeurd'], sub: ['الحديث ١٣', 'hadith 13'], page: 67, children: [['العبادة والاعتصام', 'aanbidding en vasthouden'], ['قيل وقال وكثرة السؤال وإضاعة المال', 'geroddel, veel vragen, bezit verkwisten']] },
      { label: ['أربع من كن فيه', 'Wie vier dingen heeft'], sub: ['الحديث ١٤', 'hadith 14'], page: 72, children: [['الخيانة والكذب والغدر والفجور', 'verraad, liegen, woordbreuk, uitspatting'], ['النفاق الأكبر والأصغر', 'grote en kleine hypocrisie']] },
      { label: ['لا تحاسدوا', 'Benijd elkaar niet'], sub: ['الحديث ١٥', 'hadith 15'], page: 76, children: [['المسلم أخو المسلم', 'de moslim is de broeder van de moslim'], ['التقوى هاهنا', 'de godsvrees is hier'], ['دمه وماله وعرضه', 'zijn bloed, bezit en eer']] }
    ]
  },
  points: [
    [57, 'الغضب حالة نفسية تثير الإنسان في قول أو فعل، وهو مفتاح الشرور ورأس الخطايا.', 'Woede is een psychische toestand die de mens in woord of daad opwindt; zij is de sleutel van het kwaad en het hoofd van de zonden.'],
    [57, '«لا تغضب» يشمل أمرين: التخلق بالحلم والصبر قبل الغضب، وعدم إنفاذ الغضب إذا وقع.', '"Word niet boos" omvat twee dingen: zich vooraf mildheid en geduld eigen maken, en de woede niet uitvoeren als zij komt.'],
    [62, 'جماع آداب الخير في أربعة أحاديث: «فليقل خيرا أو ليصمت»، و«ترك ما لا يعنيه»، و«لا تغضب»، و«حتى يحب لأخيه ما يحب لنفسه».', 'Alle etiquette van het goede komt voort uit vier hadith: "laat hij goed spreken of zwijgen", "laten wat hem niet aangaat", "word niet boos" en "tot hij voor zijn broeder wenst wat hij voor zichzelf wenst".'],
    [65, 'الأمر بالمعروف وتوجيه الأهل مما يعني المسلم، فلا يتركه بحجة أنه لا يعنيه.', 'Het goede gebieden en de eigen familie leiden gaat de moslim wel aan; hij laat het niet met het excuus dat het hem niet aangaat.'],
    [70, 'تسمية الله بعض الأعمال مكروهة لا تعني أنها ليست محرمة، فقد قال بعد كبائر: ﴿كل ذلك كان سيئه عند ربك مكروها﴾.', 'Dat Allah daden "afgekeurd" noemt, betekent niet dat ze niet verboden zijn; na grote zonden zei Hij: "dat alles is slecht en afgekeurd bij je Heer".'],
    [73, 'النفاق الأكبر الاعتقادي إظهار الإسلام وإبطان الكفر ويخرج من الملة، والأصغر العملي التشبه بالمنافقين في الأعمال وهو المراد في الحديث.', 'Grote hypocrisie in geloof is islam tonen en ongeloof verbergen en brengt buiten de religie; kleine hypocrisie in daden is lijken op de hypocrieten in gedrag; die is in de hadith bedoeld.'],
    [75, 'قد يجتمع في الرجل خصال إيمان وخصال نفاق، وهو مذهب أهل السنة والجماعة.', 'Iemand kan zowel eigenschappen van geloof als van hypocrisie hebben; dat is de leer van Ahl as-Sunna wa-l-Jamāʿa.'],
    [81, 'من قال عند المعصية «التقوى هاهنا» يرد عليه بأن القلب إذا صلح صلحت الجوارح.', 'Wie bij een zonde zegt "de godsvrees is hier" krijgt als antwoord: als het hart goed is, zijn de ledematen het ook.']
  ],
  terms: [
    ['الوصية', 'al-waṣiyya', 57, 'العهد إلى الغير بأمر مهم.', 'Iemand een belangrijke zaak opdragen.'],
    ['ما لا يعنيه', 'mā lā yaʿnīh', 62, 'ما لا تتعلق به عنايته ولا يهمه.', 'Wat hem niet aangaat en waar hij zich niet om hoeft te bekommeren.'],
    ['قيل وقال', 'qīl wa-qāl', 67, 'الاشتغال بما لا يعني من أحاديث الناس.', 'Zich bezighouden met nutteloos gepraat over mensen.'],
    ['إضاعة المال', 'iḍāʿat al-māl', 67, 'إنفاقه في المعاصي أو الإسراف في المباح.', 'Het uitgeven aan zonden of verkwisten in het toegestane.'],
    ['النفاق', 'an-nifāq', 72, 'لغة من نافقاء اليربوع، واصطلاحا إبطان الكفر وإظهار الإسلام.', 'Taalkundig van het verborgen hol van de springmuis; technisch: ongeloof verbergen en islam tonen.'],
    ['غدر', 'ghadar', 73, 'نقض العهد وترك الوفاء.', 'Een verbond verbreken en niet nakomen.'],
    ['فجر', 'fajar', 73, 'مال عن الحق واحتال في رده.', 'Afwijken van de waarheid en listen zoeken om haar af te wijzen.'],
    ['الحسد', 'al-ḥasad', 76, 'تمني زوال النعمة عن المحسود.', 'Wensen dat de gunst van de ander verdwijnt.'],
    ['النجش', 'an-najsh', 76, 'أن يزيد في السلعة وهو لا يريد شراءها ليغر غيره.', 'Op een waar bieden zonder haar te willen kopen, om een ander te misleiden.'],
    ['التدابر', 'at-tadābur', 76, 'أن يولي كل منهما الآخر دبره، أو الاختلاف في الرأي.', 'Elkaar de rug toekeren, of onenig zijn in mening.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أنواع الغضب', 'Soorten woede'],
      intro: ['كما في الصفحة ٥٨.', 'Zoals op p. 58.'],
      columns: [['متى يكون', 'Wanneer'], ['حكمه', 'Oordeel']],
      rows: [
        { label: ['محمود', 'Lofwaardig'], cells: [['لله إذا انتهكت محارمه', 'voor Allah, als Zijn verboden worden geschonden'], ['من ثمرات الإيمان', 'een vrucht van het geloof']] },
        { label: ['مذموم', 'Laakbaar'], cells: [['للباطل والانتصار للنفس ولعرض الدنيا', 'voor het valse, uit eigenbelang of om iets werelds'], ['هو المنهي عنه في النصوص', 'dit verbieden de teksten']] }
      ],
      page: 58
    },
    {
      type: 'cards',
      title: ['علاج الغضب', 'Woede behandelen'],
      intro: ['كما في الصفحتين ٥٩ و٦٠.', 'Zoals op p. 59 en 60.'],
      nodes: [
        [59, 'الاستعاذة بالله', 'Toevlucht zoeken bij Allah', 'من الشيطان', 'tegen de duivel'],
        [59, 'السكوت', 'Zwijgen', '«إذا غضب أحدكم فليسكت»', '"Als een van jullie boos wordt, laat hij zwijgen"'],
        [59, 'تغيير الهيئة', 'Van houding veranderen', 'يجلس ثم يضطجع', 'gaan zitten, dan liggen'],
        [60, 'تذكر أجر الكاظمين', 'Denken aan de beloning', '﴿والكاظمين الغيظ والعافين عن الناس﴾', '"die hun woede inslikken en de mensen vergeven"'],
        [60, 'معرفة القوة الحقيقية', 'Ware kracht kennen', 'ملك النفس عند الغضب', 'zichzelf beheersen bij woede']
      ]
    },
    {
      type: 'compare',
      title: ['ما يرضاه الله وما يكرهه', 'Wat Allah goedkeurt en afkeurt'],
      intro: ['كما في حديث أبي هريرة ص ٦٧.', 'Zoals in de hadith van Abū Hurayra, p. 67.'],
      columns: [['الأول', 'Eerste'], ['الثاني', 'Tweede'], ['الثالث', 'Derde']],
      rows: [
        { label: ['يرضى', 'Keurt goed'], cells: [['أن تعبدوه', 'dat jullie Hem aanbidden'], ['ولا تشركوا به شيئا', 'en niets met Hem verbinden'], ['وأن تعتصموا بحبل الله جميعا', 'en samen vasthouden aan het touw van Allah']] },
        { label: ['يكره', 'Keurt af'], cells: [['قيل وقال', 'geroddel'], ['كثرة السؤال', 'veel vragen'], ['إضاعة المال', 'bezit verkwisten']] }
      ],
      page: 67
    }
  ],
  sections: [
    [63, 'من أقوال السلف', 'Uitspraken van de vroegen', 'قال الحسن البصري: من علامة إعراض الله عن العبد أن يجعل شغله فيما لا يعنيه. وقال مورق العجلي: أمر أنا في طلبه منذ سنين لم أقدر عليه: الكف عما لا يعنيني.', 'Al-Ḥasan al-Baṣrī: een teken dat Allah Zich van de dienaar afwendt, is dat Hij hem bezighoudt met wat hem niet aangaat. Muwarriq al-ʿIjlī: al jaren zoek ik iets wat ik niet kan bereiken: me onthouden van wat mij niet aangaat.'],
    [65, 'الكلام من العمل', 'Spreken is ook handelen', 'قال عمر بن عبد العزيز: من عد كلامه من عمله قل كلامه إلا فيما يعنيه.', 'ʿUmar ibn ʿAbd al-ʿAzīz: wie zijn woorden tot zijn daden rekent, spreekt weinig, behalve over wat hem aangaat.'],
    [68, 'معاني كثرة السؤال', 'Wat "veel vragen" betekent', 'سؤال الناس أموالهم بلا حاجة، والسؤال عن المعضلات التي لا تنفع، وعما لا يقع، وتتبع أخبار الناس، وسؤال المسؤول عما لا يعني؛ أما السؤال عن العلم النافع للاسترشاد فمحمود.', 'Mensen om hun bezit vragen zonder nood, vragen naar lastige kwesties zonder nut of naar wat niet gebeurt, het nieuws van mensen nagaan, en iemand vragen naar wat je niet aangaat. Vragen naar nuttige kennis om leiding te zoeken is wel lofwaardig.'],
    [80, 'أقسام الهجر', 'Soorten mijden', 'هجر لأجل الدين جائز إذا كان فيه مصلحة، كهجر النبي ﷺ الثلاثة الذين خلفوا، وهجر لأمر دنيوي لا يجوز فوق ثلاثة أيام.', 'Mijden omwille van de religie is toegestaan als het nut heeft, zoals de Profeet ﷺ de drie achterblijvers bij Tabūk meed; mijden om iets werelds mag niet langer dan drie dagen.']
  ],
  keycards: [
    ['opsomming', 72, 'خصال المنافق الأربع', 'De vier kenmerken van de hypocriet', ['إذا اؤتمن خان', 'إذا حدث كذب', 'إذا عاهد غدر', 'إذا خاصم فجر'], ['als hem iets wordt toevertrouwd, verraadt hij', 'als hij spreekt, liegt hij', 'als hij een verbond sluit, breekt hij het', 'als hij twist, spat hij uit']],
    ['bewijs', 75, 'صاحب الخصال لا يكفر', 'Wie deze eigenschappen heeft, is geen ongelovige', ['قال النووي: أجمع العلماء على أن من كان مصدقا بقلبه ولسانه وفعل هذه الخصال لا يحكم عليه بكفر، ولا هو منافق يخلد في النار'], ['An-Nawawī: de geleerden zijn het erover eens dat wie met hart en tong gelooft en deze dingen doet, niet ongelovig wordt verklaard en geen hypocriet is die eeuwig in het Vuur blijft']],
    ['uitzondering', 80, 'ما ليس من البيع على البيع', 'Wat geen verkopen over andermans koop is', ['إذا عرض رجل سلعته بعشرة وباع جاره بأحد عشر فلا يدخل في النهي', 'النهي بعد تمام العقد'], ['als iemand zijn waar aanbiedt voor tien en zijn buurman verkoopt voor elf, valt dat niet onder het verbod', 'het verbod geldt na afronding van de koop']]
  ],
  hadith: [
    { text: 'أوصني، قال: لا تغضب، فردد مرارا، قال: لا تغضب', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Geef mij een advies. Hij zei: word niet boos. Hij herhaalde zijn vraag meerdere keren; hij zei: word niet boos', pages: [57] },
    { text: 'ما ضرب رسول الله ﷺ شيئا قط بيده، ولا امرأة، ولا خادما، إلا أن يجاهد في سبيل الله، وما نيل منه شيء قط، فينتقم من صاحبه، إلا أن ينتهك شيء من محارم الله، فينتقم لله عز وجل', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Boodschapper van Allah ﷺ sloeg nooit iets met zijn hand, geen vrouw en geen bediende, behalve in de strijd op Allahs weg; en nooit nam hij wraak voor wat hem werd aangedaan, behalve als een van Allahs verboden werd geschonden: dan nam hij wraak voor Allah', pages: [58] },
    { text: 'إذا غضب أحدكم فليسكت', takhrij: 'رواه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', nl: 'Als een van jullie boos wordt, laat hij zwijgen', pages: [59] },
    { text: 'إذا غضب أحدكم وهو قائم فليجلس، فإن ذهب عنه الغضب وإلا فليضطجع', takhrij: 'أخرجه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Als een van jullie boos wordt terwijl hij staat, laat hij gaan zitten; gaat de woede dan weg, goed; zo niet, laat hij gaan liggen', pages: [59] },
    { text: 'ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De sterke is niet wie anderen tegen de grond werkt; de sterke is wie zichzelf beheerst bij woede', pages: [60] },
    { text: 'أسألك كلمة الحق في الغضب والرضا', takhrij: 'أخرجه أحمد', takhrijNl: 'Aḥmad', note: 'من دعاء النبي ﷺ.', nlNote: 'Uit de smeekbeden van de Profeet ﷺ.', nl: 'Ik vraag U het woord van de waarheid, in woede en in tevredenheid', pages: [60] },
    { text: 'من حسن إسلام المرء تركه ما لا يعنيه', takhrij: 'رواه الترمذي وابن ماجه، وحسنه الألباني', takhrijNl: 'at-Tirmidhī en Ibn Māja; ḥasan volgens al-Albānī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Tot de goede islam van iemand behoort dat hij laat wat hem niet aangaat', pages: [62] },
    { text: 'ثكلتك أمك يا معاذ، وهل يكب الناس على مناخرهم في النار إلا حصائد ألسنتهم؟', takhrij: 'أخرجه أحمد والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'معاذ بن جبل', narratorNl: 'Muʿādh ibn Jabal', note: 'جواب سؤال معاذ: أنؤاخذ بما نتكلم به؟', nlNote: 'Antwoord op de vraag van Muʿādh of wij worden aangesproken op wat wij zeggen.', nl: 'Moge je moeder je verliezen, Muʿādh! Worden de mensen anders op hun neus in het Vuur geworpen dan door de oogst van hun tongen?', pages: [65] },
    { text: 'إن الله يرضى لكم ثلاثا، ويكره لكم ثلاثا، فيرضى لكم: أن تعبدوه، ولا تشركوا به شيئا، وأن تعتصموا بحبل الله جميعا ولا تفرقوا، ويكره لكم: قيل وقال، وكثرة السؤال، وإضاعة المال', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Allah keurt drie dingen voor jullie goed en drie dingen af. Hij keurt goed dat jullie Hem aanbidden en niets met Hem verbinden, en dat jullie samen vasthouden aan het touw van Allah en niet verdeeld raken. Hij keurt af: geroddel, veel vragen en het verkwisten van bezit', pages: [67] },
    { text: 'أربع من كن فيه كان منافقا خالصا، ومن كانت فيه خصلة منهن كانت فيه خصلة من النفاق حتى يدعها: إذا اؤتمن خان، وإذا حدث كذب، وإذا عاهد غدر، وإذا خاصم فجر', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله بن عمرو', narratorNl: 'ʿAbd Allāh ibn ʿAmr', nl: 'Wie vier dingen in zich heeft, is een volkomen hypocriet; en wie één ervan heeft, heeft een kenmerk van hypocrisie tot hij het laat: als hem iets wordt toevertrouwd, verraadt hij; als hij spreekt, liegt hij; als hij een verbond sluit, breekt hij het; en als hij twist, spat hij uit', pages: [72] },
    { text: 'أد الأمانة إلى من ائتمنك، ولا تخن من خانك', takhrij: 'أخرجه أحمد وأبو داود والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad, Abū Dāwūd en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Geef het toevertrouwde terug aan wie het je toevertrouwde, en verraad niet wie jou verraadde', pages: [74] },
    { text: 'إن الصدق يهدي إلى البر، وإن البر يهدي إلى الجنة، وإن الرجل ليصدق حتى يكون صديقا. وإن الكذب يهدي إلى الفجور، وإن الفجور يهدي إلى النار، وإن الرجل ليكذب حتى يكتب عند الله كذابا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله بن مسعود', narratorNl: 'ʿAbd Allāh ibn Masʿūd', nl: 'Waarheid leidt tot vroomheid en vroomheid leidt tot het Paradijs; een man spreekt de waarheid tot hij waarachtig wordt. Leugen leidt tot zondigheid en zondigheid leidt tot het Vuur; een man liegt tot hij bij Allah als leugenaar wordt opgeschreven', pages: [74] },
    { text: 'لكل غادر لواء يوم القيامة، يقال: هذه غدرة فلان', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله بن مسعود', narratorNl: 'ʿAbd Allāh ibn Masʿūd', nl: 'Elke verrader krijgt op de Opstandingsdag een vaandel; er wordt gezegd: dit is het verraad van die en die', pages: [74] },
    { text: 'لا تحاسدوا، ولا تناجشوا، ولا تباغضوا، ولا تدابروا، ولا يبع بعضكم على بيع بعض، وكونوا عباد الله إخوانا، المسلم أخو المسلم، لا يظلمه ولا يخذله، ولا يحقره، التقوى هاهنا … بحسب امرئ من الشر أن يحقر أخاه المسلم، كل المسلم على المسلم حرام؛ دمه وماله وعرضه', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'وأشار إلى صدره ثلاث مرات.', nlNote: 'Hij wees drie keer naar zijn borst.', nl: 'Benijd elkaar niet, drijf elkaars prijzen niet op, haat elkaar niet, keer elkaar niet de rug toe, en verkoop niet over elkaars koop; wees, dienaren van Allah, broeders. De moslim is de broeder van de moslim: hij doet hem geen onrecht, laat hem niet in de steek en kleineert hem niet. De godsvrees is hier … Het is genoeg kwaad voor iemand dat hij zijn moslimbroeder kleineert. Heel de moslim is voor de moslim heilig: zijn bloed, zijn bezit en zijn eer', pages: [76] },
    { text: 'كان النبي ﷺ إذا سلم لم يقعد إلا مقدار ما يقول: اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'ذكره الكتاب في أن الإمام لا يستدبر المأمومين بعد الصلاة.', nlNote: 'Genoemd bij het punt dat de imam na het gebed niet met de rug naar de volgers blijft zitten.', nl: 'Als de Profeet ﷺ de salām had gegeven, bleef hij alleen zo lang zitten als nodig om te zeggen: o Allah, U bent de Vrede en van U komt de vrede; gezegend bent U, Bezitter van majesteit en eer', pages: [79] },
    { text: 'ألا وإن في الجسد مضغة، إذا صلحت، صلح الجسد كله، وإذا فسدت، فسد الجسد كله، ألا وهي القلب', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'In het lichaam is een stukje vlees: als het goed is, is het hele lichaam goed, en als het bedorven is, is het hele lichaam bedorven; dat is het hart', pages: [81] }
  ],
  persons: [
    ['abu-hurayra', 'text', [57, 62, 67, 74, 76], 'راوي أحاديث «لا تغضب» و«ترك ما لا يعنيه» و«يرضى لكم ثلاثا» و«لا تحاسدوا».', 'Overleveraar van "word niet boos", "laten wat je niet aangaat", "drie dingen" en "benijd elkaar niet".'],
    ['al-bukhari', 'takhrij', [57], 'روى حديث «لا تغضب».', 'Overleverde "word niet boos".'],
    ['aisha', 'text', [58, 79], 'روت أن النبي ﷺ لم ينتقم لنفسه قط، وذكره بعد السلام.', 'Overleverde dat de Profeet ﷺ nooit wraak nam voor zichzelf, en wat hij na de salām zei.'],
    ['muslim', 'takhrij', [58, 67, 76, 79], 'روى عدة أحاديث في هذه الوحدة.', 'Overleverde meerdere hadith in deze eenheid.'],
    ['ahmad-shawqi', 'text', [58], 'مدح النبي ﷺ بأن غضبه للحق.', 'Prees de Profeet ﷺ omdat zijn woede voor de waarheid was.'],
    ['alqama-ibn-wail', 'text', [58], 'روى عن أبيه قصة القاتل الذي غضب فقتل.', 'Overleverde van zijn vader het verhaal van de man die uit woede doodde.'],
    ['wail-ibn-hujr', 'text', [58], 'حضر مجيء القاتل إلى النبي ﷺ.', 'Was erbij toen de doder bij de Profeet ﷺ werd gebracht.'],
    ['ahmad-ibn-hanbal', 'takhrij', [59, 60, 65, 74], 'روى أحاديث علاج الغضب وغيرها.', 'Overleverde de hadith over het behandelen van woede en andere.'],
    ['abu-dawud', 'takhrij', [59, 74], 'روى حديث الجلوس عند الغضب وحديث الأمانة.', 'Overleverde de hadith over gaan zitten bij woede en die over het toevertrouwde.'],
    ['al-albani', 'takhrij', [59, 62, 65, 74], 'صحح وحسن عددا من الأحاديث.', 'Verklaarde meerdere hadith ṣaḥīḥ of ḥasan.'],
    ['anas-ibn-malik', 'text', [60], 'روى قصة الأعرابي الذي جبذ رداء النبي ﷺ فضحك وأعطاه.', 'Overleverde hoe een bedoeïen aan de mantel van de Profeet ﷺ trok, waarop die lachte en hem iets gaf.'],
    ['at-tirmidhi', 'takhrij', [62, 65, 74], 'روى حديث «ترك ما لا يعنيه» وغيره.', 'Overleverde "laten wat je niet aangaat" en andere.'],
    ['ibn-maja', 'takhrij', [62], 'روى حديث «ترك ما لا يعنيه».', 'Overleverde "laten wat je niet aangaat".'],
    ['amr-ibn-qays-al-mulai', 'text', [63], 'روى خبرا في ترك ما لا يعني.', 'Overleverde een bericht over laten wat je niet aangaat.'],
    ['al-hasan-al-basri', 'text', [63], 'جعل الاشتغال بما لا يعني علامة إعراض الله عن العبد.', 'Noemde bezig zijn met wat je niet aangaat een teken dat Allah Zich afwendt.'],
    ['muwarriq-al-ijli', 'text', [63], 'قال: أطلب الكف عما لا يعنيني منذ سنين.', 'Zei dat hij al jaren probeert zich te onthouden van wat hem niet aangaat.'],
    ['umar-ibn-abd-al-aziz', 'text', [65], 'قال: من عد كلامه من عمله قل كلامه.', 'Zei: wie zijn woorden tot zijn daden rekent, spreekt weinig.'],
    ['muadh-ibn-jabal', 'text', [65], 'سأل: أنؤاخذ بما نتكلم به؟', 'Vroeg of wij worden aangesproken op wat wij zeggen.'],
    ['abdallah-ibn-amr', 'text', [72], 'راوي حديث خصال المنافق؛ كان يكتب حديث النبي ﷺ في «الصادقة».', 'Overleveraar van de hadith over de hypocriet; schreef de hadith van de Profeet ﷺ op in "aṣ-Ṣādiqa".'],
    ['ibn-manzur', 'text', [73], 'قال: النفاق اسم إسلامي لم تعرفه العرب بمعناه المخصوص.', 'Zei: nifāq is een islamitische term die de Arabieren in die betekenis niet kenden.'],
    ['al-qurtubi', 'text', [74], 'قال: الأمانة تعم جميع وظائف الدين.', 'Zei: het toevertrouwde omvat alle taken van de religie.'],
    ['ibn-masud', 'text', [74], 'روى حديث الصدق والكذب وحديث لواء الغادر.', 'Overleverde de hadith over waarheid en leugen en die over het vaandel van de verrader.'],
    ['ibn-battal', 'text', [74], 'قال: الغدر حرام لجميع الناس برهم وفاجرهم.', 'Zei: verraad is verboden tegenover alle mensen, vroom of zondig.'],
    ['an-nawawi', 'text', [75], 'نقل الإجماع على أن صاحب هذه الخصال لا يكفر.', 'Meldde consensus dat wie deze eigenschappen heeft niet ongelovig is.'],
    ['ibn-al-munayyir', 'text', [79], 'قال: استدبار الإمام المأمومين لحق الإمامة فإذا انقضت الصلاة زال السبب.', 'Zei: de imam keert de volgers de rug toe vanwege het voorgaan; na het gebed vervalt die reden.']
  ],
  review: [
    ['«لا تغضب» وصية جامعة، والغضب لله محمود.', '"Word niet boos" is een omvattend advies; woede voor Allah is lofwaardig.'],
    ['من حسن إسلام المرء تركه ما لا يعنيه، والأمر بالمعروف مما يعنيه.', 'Laten wat je niet aangaat hoort bij goede islam; het goede gebieden gaat je wel aan.'],
    ['يرضى الله لنا العبادة والاعتصام، ويكره قيل وقال وكثرة السؤال وإضاعة المال.', 'Allah keurt aanbidding en vasthouden goed, en geroddel, veel vragen en verkwisting af.'],
    ['النفاق أكبر اعتقادي وأصغر عملي.', 'Hypocrisie is groot (in geloof) of klein (in daden).'],
    ['المسلم أخو المسلم، كل المسلم على المسلم حرام.', 'De moslim is de broeder van de moslim; heel de moslim is voor de moslim heilig.']
  ],
  quiz: [
    { type: 'mc', page: 58, q: ['متى يكون الغضب محمودا؟', 'Wanneer is woede lofwaardig?'], options: [['إذا كان لله عند انتهاك محارمه', 'إذا كان للانتصار للنفس', 'إذا كان لأمر الدنيا', 'لا يكون محمودا أبدا'], ['als zij voor Allah is, bij schending van Zijn verboden', 'als zij voor jezelf is', 'als zij om iets werelds is', 'nooit']], answer: 0, explain: ['وهو من ثمرات الإيمان.', 'Dat is een vrucht van het geloof.'] },
    { type: 'mc', page: 59, q: ['ماذا يفعل من غضب وهو قائم؟', 'Wat doet wie boos wordt terwijl hij staat?'], options: [['يجلس فإن لم يذهب اضطجع', 'يخرج من المكان', 'يتوضأ فقط', 'يرفع صوته'], ['gaan zitten, en anders liggen', 'de plaats verlaten', 'alleen de wassing doen', 'zijn stem verheffen']], answer: 0, explain: ['كما في حديث أحمد وأبي داود.', 'Zoals in de hadith bij Aḥmad en Abū Dāwūd.'] },
    { type: 'tf', page: 65, q: ['يترك المسلم الأمر بالمعروف لأنه مما لا يعنيه.', 'De moslim laat het goede gebieden na omdat het hem niet aangaat.'], answer: 1, explain: ['الأمر بالمعروف مما يعني المسلم.', 'Het goede gebieden gaat de moslim wel aan.'] },
    { type: 'mc', page: 67, q: ['أي هذه مما يكرهه الله لنا؟', 'Welke van deze keurt Allah voor ons af?'], options: [['إضاعة المال', 'الاعتصام بحبل الله', 'عبادة الله', 'ترك الشرك'], ['bezit verkwisten', 'vasthouden aan het touw van Allah', 'Allah aanbidden', 'shirk laten']], answer: 0, explain: ['يكره: قيل وقال، وكثرة السؤال، وإضاعة المال.', 'Hij keurt af: geroddel, veel vragen en verkwisting.'] },
    { type: 'mc', page: 73, q: ['ما النفاق المراد في حديث الخصال الأربع؟', 'Welke hypocrisie is bedoeld in de hadith over de vier kenmerken?'], options: [['الأصغر العملي', 'الأكبر الاعتقادي', 'الرياء فقط', 'الكفر الصريح'], ['de kleine, in daden', 'de grote, in geloof', 'alleen vertoon', 'openlijk ongeloof']], answer: 0, explain: ['الأصغر العملي من كبائر الذنوب ولا يخرج من الملة.', 'De kleine is een grote zonde, maar brengt niet buiten de religie.'] },
    { type: 'mc', page: 76, q: ['ما النجش؟', 'Wat is najsh?'], options: [['أن يزيد في السلعة ولا يريد شراءها ليغر غيره', 'أن يبيع على بيع أخيه', 'أن يكتم عيب السلعة', 'أن يحتكر الطعام'], ['bieden op een waar zonder haar te willen kopen, om een ander te misleiden', 'verkopen over de koop van je broeder', 'een gebrek verbergen', 'voedsel oppotten']], answer: 0, explain: ['كما فسره أهل اللغة.', 'Zoals de taalgeleerden het uitleggen.'] },
    { type: 'tf', page: 80, q: ['يجوز هجر المسلم لأمر دنيوي فوق ثلاثة أيام.', 'Een moslim mag om iets werelds langer dan drie dagen gemeden worden.'], answer: 1, explain: ['لا يجوز فوق ثلاثة أيام إلا لأجل الدين.', 'Niet langer dan drie dagen, behalve omwille van de religie.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٦١ و٦٦ و٧١ و٧٥ و٨٢.', 'Oefeningen van het boek op p. 61, 66, 71, 75 en 82. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
