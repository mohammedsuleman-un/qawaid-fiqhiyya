// Hoofdstukkaart bij التفسير (٣), eenheid 4: سورة الأعلى (lessen 9–11, boek p. 38–46).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. De uitspraak
// van ʿUmar over afgeschafte recitatie (p. 40), de uitspraak van Ibn ʿAbbās over de bladen (p. 39)
// en die van Ibn Masʿūd (p. 44) staan in het boek zonder bron en zijn niet in het hadith-tabblad opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '9',
  unit: 4,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '38–46',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الأعلى', 'Soera al-Aʿlā'],
  subtitle: ['ثلاثة دروس مجموعة في صفحة واحدة', 'Drie lessen samen op één pagina'],
  summary: [
    'سورة مكية تأمر بتسبيح اسم الرب الأعلى الذي خلق فسوى وقدر فهدى، وتبشر النبي ﷺ بحفظ القرآن وتيسيره لليسرى، ثم تأمر بالتذكير وتقسم الناس فيه إلى من يخشى والأشقى، وتبين أن الفلاح في التزكية وذكر الله والصلاة، وأن الآخرة خير وأبقى.',
    'Een Mekkaanse soera die beveelt de naam van de Allerhoogste Heer te verheerlijken, die schiep en vormde, bepaalde en leidde. Zij verheugt de Profeet ﷺ met het bewaren van de Koran en met gemak, beveelt dan te vermanen en verdeelt de mensen in wie vreest en de ellendigste. Succes ligt in zelfreiniging, het gedenken van Allah en het gebed, en het hiernamaals is beter en blijvender.'
  ],
  map: {
    title: ['سورة الأعلى في خريطة واحدة', 'Soera al-Aʿlā in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الأعلى', 'Soera al-Aʿlā'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['التسبيح', 'De verheerlijking'], sub: ['الآيات ١–٥', 'vers 1–5'], page: 39, children: [['سبح اسم ربك الأعلى', 'verheerlijk de naam van je Heer'], ['خلق فسوى', 'schiep en vormde'], ['قدر فهدى', 'bepaalde en leidde']] },
      { label: ['بشرى للنبي ﷺ', 'Goed nieuws voor de Profeet ﷺ'], sub: ['الآيات ٦–٨', 'vers 6–8'], page: 40, children: [['سنقرئك فلا تنسى', 'Wij laten je lezen, je vergeet niet'], ['ونيسرك لليسرى', 'Wij maken het makkelijke makkelijk']] },
      { label: ['التذكير', 'De vermaning'], sub: ['الآيات ٩–١٣', 'vers 9–13'], page: 43, children: [['من يخشى', 'wie vreest'], ['الأشقى', 'de ellendigste'], ['لا يموت فيها ولا يحيى', 'sterft er niet en leeft er niet']] },
      { label: ['الفلاح', 'Het succes'], sub: ['الآيات ١٤–١٥', 'vers 14–15'], page: 44, children: [['تزكى', 'reinigde zich'], ['ذكر اسم ربه', 'gedacht de naam van zijn Heer'], ['فصلى', 'en bad']] },
      { label: ['الآخرة خير وأبقى', 'Het hiernamaals is beter'], sub: ['الآيات ١٦–١٩', 'vers 16–19'], page: 44, children: [['تؤثرون الحياة الدنيا', 'jullie verkiezen dit leven'], ['صحف إبراهيم وموسى', 'de bladen van Ibrāhīm en Mūsā']] }
    ]
  },
  points: [
    [38, 'لما نزلت ﴿سبح اسم ربك الأعلى﴾ قال النبي ﷺ: اجعلوها في سجودكم.', 'Toen "Verheerlijk de naam van je Heer, de Allerhoogste" neerdaalde, zei de Profeet ﷺ: maak het in jullie knieval.'],
    [38, 'كان النبي ﷺ يقرأ بالأعلى والغاشية في العيدين والجمعة، ويقرأ بالأعلى في الوتر.', 'De Profeet ﷺ las al-Aʿlā en al-Ghāshiya op de twee feesten en op vrijdag, en al-Aʿlā in de witr.'],
    [39, 'التسبيح تنزيه الله عن كل نقص لا يليق بجلاله.', 'Tasbīḥ is Allah vrijspreken van elk gebrek dat niet bij zijn majesteit past.'],
    [39, 'العلو نوعان: علو الصفة وعلو الذات.', 'Hoogheid is van twee soorten: hoogheid van eigenschap en hoogheid van wezen.'],
    [40, '﴿سنقرئك فلا تنسى﴾ ضمان من الله لحفظ القرآن ووعد لنبيه ﷺ.', '"Wij zullen je laten lezen en je zult niet vergeten" is Allahs garantie voor het bewaren van de Koran en een belofte aan zijn Profeet ﷺ.'],
    [43, 'التذكير مأمور به ما دام نافعا، فإن زاد الشر أو نقص الخير لم يؤمر به بل نهي عنه.', 'Vermanen is geboden zolang het baat; vergroot het kwaad of vermindert het goed, dan is het niet geboden maar verboden.'],
    [45, 'أعظم التزكية بعد التوحيد متابعة الرسول ﷺ دون ابتداع في الاعتقاد أو القول أو العمل.', 'De grootste zelfreiniging na zuiver tawḥīd is de Boodschapper ﷺ volgen, zonder vernieuwing in geloof, woord of daad.'],
    [45, 'كتب الله يصدق بعضها بعضا: الآخرة خير وأبقى.', 'Allahs boeken bevestigen elkaar: het hiernamaals is beter en blijvender.']
  ],
  terms: [
    ['التسبيح', 'at-tasbīḥ', 39, 'التنزيه: تبرئة الله من كل نقص.', 'Vrijspreken: Allah vrijpleiten van elk gebrek.'],
    ['الأعلى', 'al-aʿlā', 39, 'من العلو: علو الصفة وعلو الذات.', 'Van ʿulūw: hoogheid van eigenschap en van wezen.'],
    ['سوى', 'sawwā', 39, 'جعل كل مخلوق في أحسن صورة.', 'Gaf elk schepsel de beste vorm.'],
    ['قدر فهدى', 'qaddara fa-hadā', 40, 'جعل لكل شيء مقدارا وهدى كل مخلوق لما يناسبه.', 'Gaf alles een maat en leidde elk schepsel naar wat bij hem past.'],
    ['الغثاء', 'al-ghuthāʾ', 40, 'ما يبس من النبات.', 'Verdord plantmateriaal.'],
    ['أحوى', 'aḥwā', 40, 'من الحوة: لون أسود قريب من السواد.', 'Van ḥuwwa: een donkere kleur, bijna zwart.'],
    ['اليسرى', 'al-yusrā', 41, 'تيسير أعمال الخير وأقواله، وشريعة سمحة.', 'Het gemakkelijk maken van goede daden en woorden, en een ruime wetgeving.'],
    ['الأشقى', 'al-ashqā', 43, 'الكافر المصر على الكفر والمعاصي الذي لا ينتفع بالذكرى.', 'De ongelovige die volhardt in ongeloof en zonden en geen baat heeft bij vermaning.'],
    ['تزكى', 'tazakkā', 44, 'تطهر من الشرك ومن سفاسف الأخلاق.', 'Zich reinigen van shirk en van lage karaktertrekken.'],
    ['تؤثرون', 'tuʾthirūn', 44, 'تقدمون وتفضلون.', 'Jullie geven voorrang en verkiezen.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['أقسام الخطاب للنبي ﷺ في القرآن', 'Soorten aanspraak aan de Profeet ﷺ in de Koran'],
      intro: ['ثلاثة أقسام ذكرها الكتاب.', 'Drie soorten die het boek noemt.'],
      nodes: [
        [41, 'خاص به بدليل', 'Alleen voor hem, met bewijs', '﴿ألم نشرح لك صدرك﴾', '"Hebben Wij je borst niet geopend?"'],
        [41, 'عام له ولأمته بدليل', 'Voor hem en zijn umma, met bewijs', '﴿يا أيها الذين آمنوا إذا قمتم إلى الصلاة﴾', '"O jullie die geloven, wanneer jullie opstaan voor het gebed"'],
        [41, 'خاص لفظا عام حكما', 'In woorden voor hem, in oordeel voor allen', '﴿سبح اسم ربك الأعلى﴾', '"Verheerlijk de naam van je Heer"']
      ]
    },
    {
      type: 'steps',
      title: ['الاستقامة في ثلاثة أمور', 'Standvastigheid in drie zaken'],
      intro: ['رتبها الله في الآيتين ١٤–١٥.', 'Allah ordende ze in vers 14–15.'],
      nodes: [
        [46, '﴿تزكى﴾', '"Hij reinigde zich"', 'إزالة نجاسة العقائد الفاسدة', 'de onreinheid van valse overtuigingen verwijderen'],
        [46, '﴿وذكر اسم ربه﴾', '"en gedacht de naam van zijn Heer"', 'استحضار معرفة الله بصفاته ليخافه ويرجوه', 'Allah met zijn eigenschappen voor ogen houden, om Hem te vrezen en op Hem te hopen'],
        [46, '﴿فصلى﴾', '"en bad"', 'الاشتغال بالطاعة والعبادة', 'zich toeleggen op gehoorzaamheid en aanbidding']
      ]
    }
  ],
  sections: [
    [39, 'تسبيح الاسم', 'De naam verheerlijken', 'سبح ربك مسبحا اسمه، منزها له عما فعله المشركون من التسمية بما لا يليق؛ وقيل: تسبيح الاسم تسبيح المسمى، ولذلك جعلها النبي ﷺ في السجود: سبحان ربي الأعلى.', 'Verheerlijk je Heer door zijn naam te verheerlijken, vrij van de namen die de veelgodenaanbidders Hem gaven; volgens anderen is de naam verheerlijken Hemzelf verheerlijken, daarom maakte de Profeet ﷺ het in de knieval: subḥāna rabbiya l-aʿlā.'],
    [42, 'حرصه ﷺ على القرآن', 'Zijn zorg om de Koran', 'كان النبي ﷺ يعالج من التنزيل شدة ويحرك لسانه خشية أن يتفلت منه، فنزل ﴿لا تحرك به لسانك لتعجل به إن علينا جمعه وقرآنه﴾.', 'De Profeet ﷺ had het zwaar bij de openbaring en bewoog zijn tong uit vrees dat hij iets zou verliezen; toen kwam: "Beweeg je tong er niet mee om je te haasten; het is aan Ons het te verzamelen en te reciteren."'],
    [42, 'التيسير في حياته ﷺ', 'Gemak in zijn leven ﷺ', 'ما خير بين أمرين إلا اختار أيسرهما، وكانت الأمة تأخذ بيده فتنطلق به حيث شاءت.', 'Kreeg hij de keuze tussen twee zaken, dan koos hij de makkelijkste; een slavin kon hem bij de hand nemen en hem meenemen waarheen zij wilde.'],
    [44, 'الصلاة ميزان الأعمال', 'Het gebed als maatstaf', 'خص الصلاة بالذكر لأنها ميزان الأعمال وأشرفها، فيجب إقامتها بأركانها وفي أوقاتها.', 'Het gebed wordt apart genoemd omdat het de maatstaf en de edelste van de daden is; het moet worden onderhouden met zijn zuilen en op zijn tijden.']
  ],
  keycards: [
    ['onderscheid', 39, 'نوعا العلو', 'Twee soorten hoogheid', ['علو الصفة: لله الصفات الكاملة ﴿ولله المثل الأعلى﴾', 'علو الذات: الله فوق عباده مستو على عرشه'], ['hoogheid van eigenschap: Allah heeft de volmaakte eigenschappen ("aan Allah behoort het hoogste voorbeeld")', 'hoogheid van wezen: Allah is boven zijn dienaren, verheven op zijn Troon']],
    ['opsomming', 40, 'ما شاء الله أن ينسيه نبيه ﷺ', 'Wat Allah de Profeet ﷺ liet vergeten', ['ما نسخ الله تلاوته', 'نسيان مؤقت بشري كما كان ينسى أحيانا في صلاته'], ['wat Allah in recitatie afschafte', 'tijdelijk menselijk vergeten, zoals hij soms iets vergat in zijn gebed']],
    ['onderscheid', 45, 'الناس في التذكرة قسمان', 'Twee groepen bij de vermaning', ['من يخشى الله فيتذكر ويزداد خشية', 'الأشقى الذي يتجنبها'], ['wie Allah vreest, neemt de vermaning aan en groeit in vrees', 'de ellendigste, die haar mijdt']]
  ],
  hadith: [
    { text: 'اجعلوها في سجودكم', takhrij: 'رواه أبو داود والحاكم وصححه', takhrijNl: 'Abū Dāwūd en al-Ḥākim, die hem authentiek noemde', narrator: 'عقبة بن عامر الجهني', narratorNl: 'ʿUqba ibn ʿĀmir al-Juhanī', note: 'لما نزلت ﴿سبح اسم ربك الأعلى﴾.', nlNote: 'Toen "Verheerlijk de naam van je Heer, de Allerhoogste" neerdaalde.', nl: 'Maak het in jullie knieval', pages: [38] },
    { text: 'كان رسول الله ﷺ يقرأ في العيدين، وفي الجمعة بسبح اسم ربك الأعلى، وهل أتاك حديث الغاشية', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'النعمان بن بشير', narratorNl: 'an-Nuʿmān ibn Bashīr', nl: 'De Boodschapper van Allah ﷺ las op de twee feesten en op vrijdag "Verheerlijk de naam van je Heer, de Allerhoogste" en "Heeft het verhaal van de Overweldigende je bereikt?"', pages: [38] },
    { text: 'كان رسول الله ﷺ يقرأ في الوتر بسبح اسم ربك الأعلى، وقل يا أيها الكافرون، وقل هو الله أحد', takhrij: 'رواه النسائي وصححه الألباني', takhrijNl: 'an-Nasāʾī; al-Albānī noemde hem authentiek', narrator: 'أبي بن كعب', narratorNl: 'Ubayy ibn Kaʿb', nl: 'De Boodschapper van Allah ﷺ las in de witr "Verheerlijk de naam van je Heer", "Zeg: o ongelovigen" en "Zeg: Hij is Allah, de Ene"', pages: [39] },
    { text: 'كان رسول الله ﷺ يعالج من التنزيل شدة، وكان مما يحرك شفتيه', takhrij: 'في الصحيح', takhrijNl: 'in de Ṣaḥīḥ', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'فنزلت ﴿لا تحرك به لسانك لتعجل به﴾.', nlNote: 'Toen kwam "Beweeg je tong er niet mee om je te haasten".', nl: 'De Boodschapper van Allah ﷺ had het zwaar bij de openbaring en bewoog zijn lippen', pages: [42] },
    { text: 'ما خير رسول الله ﷺ بين أمرين إلا أخذ أيسرهما', takhrij: 'في الصحيحين', takhrijNl: 'in de twee Ṣaḥīḥ-verzamelingen', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Kreeg de Boodschapper van Allah ﷺ de keuze tussen twee zaken, dan nam hij de makkelijkste', pages: [42] },
    { text: 'كانت الأمة تأخذ بيد رسول الله ﷺ فتنطلق به حيث شاءت', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Een slavin kon de Boodschapper van Allah ﷺ bij de hand nemen en met hem gaan waarheen zij wilde', pages: [42] }
  ],
  persons: [
    ['uqba-ibn-amir', 'text', [38], 'روى قول النبي ﷺ: اجعلوها في سجودكم.', 'Overleverde dat de Profeet ﷺ zei: maak het in jullie knieval.'],
    ['abu-dawud', 'takhrij', [38], 'روى حديث عقبة.', 'Overleverde de hadith van ʿUqba.'],
    ['al-hakim', 'takhrij', [38], 'روى حديث عقبة وصححه.', 'Overleverde de hadith van ʿUqba en noemde hem authentiek.'],
    ['an-numan-ibn-bashir', 'text', [38], 'روى القراءة بالأعلى والغاشية في العيدين والجمعة.', 'Overleverde de recitatie van al-Aʿlā en al-Ghāshiya op de feesten en op vrijdag.'],
    ['muslim', 'takhrij', [38], 'روى حديث النعمان.', 'Overleverde de hadith van an-Nuʿmān.'],
    ['ubayy-ibn-kab', 'text', [39], 'روى ما كان النبي ﷺ يقرأ به في الوتر.', 'Overleverde wat de Profeet ﷺ in de witr las.'],
    ['an-nasai', 'takhrij', [39], 'روى حديث أبي بن كعب.', 'Overleverde de hadith van Ubayy ibn Kaʿb.'],
    ['al-albani', 'takhrij', [39], 'صحح حديث أبي بن كعب.', 'Noemde de hadith van Ubayy authentiek.'],
    ['ibn-abbas', 'text', [39, 42], 'روى شدة التنزيل على النبي ﷺ.', 'Overleverde hoe zwaar de openbaring voor de Profeet ﷺ was.'],
    ['umar-ibn-al-khattab', 'text', [40], 'ذكر الكتاب قوله في آية نسخت تلاوتها.', 'Het boek noemt zijn woorden over een vers waarvan de recitatie werd afgeschaft.'],
    ['aisha', 'text', [42], 'روت أن النبي ﷺ كان يختار أيسر الأمرين.', 'Overleverde dat de Profeet ﷺ de makkelijkste van twee zaken koos.'],
    ['ibn-masud', 'text', [44], 'بين لماذا آثر الناس الدنيا على الآخرة.', 'Legde uit waarom mensen dit leven boven het hiernamaals verkiezen.']
  ],
  review: [
    ['التسبيح تنزيه، والعلو علو صفة وعلو ذات.', 'Tasbīḥ is vrijspreken; hoogheid is van eigenschap en van wezen.'],
    ['ضمن الله لنبيه ﷺ حفظ القرآن ويسره لليسرى.', 'Allah garandeerde zijn Profeet ﷺ het bewaren van de Koran en maakte het makkelijke voor hem makkelijk.'],
    ['ذكر إن نفعت الذكرى، والناس فيها قسمان.', 'Vermaan als het baat; de mensen zijn daarin twee groepen.'],
    ['الفلاح في التزكية وذكر الله والصلاة.', 'Succes ligt in zelfreiniging, het gedenken van Allah en het gebed.'],
    ['الآخرة خير وأبقى، وهذا في صحف إبراهيم وموسى.', 'Het hiernamaals is beter en blijvender; dat staat ook in de bladen van Ibrāhīm en Mūsā.']
  ],
  quiz: [
    { type: 'mc', page: 38, q: ['ماذا قال النبي ﷺ لما نزلت ﴿سبح اسم ربك الأعلى﴾؟', 'Wat zei de Profeet ﷺ toen "Verheerlijk de naam van je Heer" neerdaalde?'], options: [['اجعلوها في سجودكم', 'اجعلوها في ركوعكم', 'اقرؤوها في الفجر', 'اكتبوها في مصاحفكم'], ['maak het in jullie knieval', 'maak het in jullie buiging', 'reciteer haar bij fajr', 'schrijf haar in jullie mushaf']], answer: 0, explain: ['رواه أبو داود والحاكم.', 'Overgeleverd door Abū Dāwūd en al-Ḥākim.'] },
    { type: 'mc', page: 40, q: ['ما الغثاء؟', 'Wat is ghuthāʾ?'], options: [['ما يبس من النبات', 'الماء الكثير', 'الزرع الأخضر', 'التراب'], ['verdord plantmateriaal', 'overvloedig water', 'groen gewas', 'aarde']], answer: 0, explain: ['يصير المرعى الأخضر يابسا أحوى.', 'Het groene weiland wordt droog en donker.'] },
    { type: 'tf', page: 43, q: ['التذكير مأمور به في كل حال، ولو زاد الشر.', 'Vermanen is altijd geboden, ook als het kwaad erdoor groeit.'], answer: 1, explain: ['إذا لم تنفع الذكرى لم يؤمر بها بل نهي عنها.', 'Baat de vermaning niet, dan is zij niet geboden maar verboden.'] },
    { type: 'mc', page: 41, q: ['﴿سبح اسم ربك الأعلى﴾ من أي أقسام الخطاب للنبي ﷺ؟', 'Bij welke soort aanspraak hoort "Verheerlijk de naam van je Heer"?'], options: [['خاص لفظا عام حكما', 'خاص به بدليل', 'عام له ولأمته بدليل', 'خاص بالصحابة'], ['in woorden voor hem, in oordeel voor allen', 'alleen voor hem, met bewijs', 'voor hem en de umma, met bewijs', 'alleen voor de metgezellen']], answer: 0, explain: ['ذكره الكتاب مثالا للقسم الثالث.', 'Het boek noemt het als voorbeeld van de derde soort.'] },
    { type: 'mc', page: 46, q: ['ما الذي يقابل ﴿تزكى﴾ في الأمور الثلاثة؟', 'Waarbij hoort "hij reinigde zich" in de drie zaken?'], options: [['إزالة العقائد الفاسدة', 'الاشتغال بالصلاة', 'استحضار صفات الله', 'الصدقة'], ['valse overtuigingen verwijderen', 'zich toeleggen op het gebed', 'Allahs eigenschappen voor ogen houden', 'liefdadigheid']], answer: 0, explain: ['ثم ﴿وذكر اسم ربه﴾ ثم ﴿فصلى﴾.', 'Daarna "en gedacht de naam van zijn Heer" en "en bad".'] },
    { type: 'tf', page: 44, q: ['أهل النار لا يموتون فيها ولا يحيون حياة طيبة.', 'De mensen van het Vuur sterven er niet en leiden er geen goed leven.'], answer: 0, explain: ['عذاب أليم بلا راحة الموت ولا حياة كريمة.', 'Een pijnlijke straf, zonder de rust van de dood en zonder waardig leven.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٤٢ و٤٦.', 'Oefeningen van het boek op p. 42 en 46. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
