// Hoofdstukkaart bij التربية الإسلامية (٣), eenheid 3: adab van spreken, advies, ziekenbezoek en
// condoleren (lessen 11–15, boek p. 40–59). Opgesteld uit de leesnotities van het boek; hadith en takhrij
// zoals in het boek. Het verhaal van ʿUmar ibn ʿAbd al-ʿAzīz bij de zieke (p. 55) staat zonder bron en
// alleen in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tarbiyah',
  chapter: '11',
  unit: 3,
  source: {
    label: ['كتاب التربية الإسلامية (٣): الآداب الشرعية، سلسلة زاد العلمية', 'Islamitische opvoeding (3): de islamitische omgangsvormen, Zad-reeks'],
    pages: '40–59',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['آداب الكلام والنصيحة والعيادة والتعزية', 'Spreken, advies, ziekenbezoek en condoleren'],
  subtitle: ['خمسة دروس مجموعة في صفحة واحدة', 'Vijf lessen samen op één pagina'],
  summary: [
    'اللسان من أخطر الجوارح، فمن آداب الكلام: خفض الصوت، وترك التكلف، وحفظ اللسان من الزور والغيبة، والتأني، والكلام بما ينفع أو الصمت، واختيار الكلمة الطيبة، ومراعاة حال المخاطب، وعدم المقاطعة، وحفظ السر. والدين النصيحة، وللناصح آداب كالتثبت والإخلاص والعلم والسر والرفق والستر، وللمنصوح آداب كالقبول وشكر الناصح. وعيادة المريض حق للمسلم، يختار لها الوقت ويخففها ويدعو للمريض ويذكره بالصبر. والتعزية مستحبة، يختار لها اللفظ المشروع ويجتنب البدع.',
    'De tong is een van de gevaarlijkste organen. Adab van het spreken: zacht spreken, geen gekunsteldheid, de tong behoeden voor valse woorden en roddel, bedachtzaamheid, spreken wat nut heeft of zwijgen, goede woorden kiezen, rekening houden met de aangesprokene, niet onderbreken en geheimen bewaren. Religie is oprecht advies: de adviseur controleert eerst, is oprecht, heeft kennis, adviseert in het geheim, zacht en zonder te ontmaskeren; wie advies krijgt, neemt het aan en dankt de adviseur. Ziekenbezoek is een recht van de moslim: op een goed moment, kort, met smeekbeden en herinnering aan geduld. Condoleren is aanbevolen, met woorden uit de sunna en zonder vernieuwingen.'
  ],
  map: {
    title: ['الوحدة الثالثة في خريطة واحدة', 'Eenheid 3 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['آداب التعامل', 'Adab in de omgang'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['الكلام', 'Spreken'], sub: ['الدرسان ١١–١٢', 'les 11–12'], page: 40, children: [['حفظ اللسان', 'de tong behoeden'], ['الكلمة الطيبة', 'het goede woord'], ['حفظ السر', 'geheimen bewaren']] },
      { label: ['النصيحة', 'Advies'], sub: ['الدرس ١٣', 'les 13'], page: 46, children: [['آداب الناصح', 'de adviseur'], ['آداب المنصوح', 'wie advies krijgt']] },
      { label: ['عيادة المريض', 'Ziekenbezoek'], sub: ['الدرس ١٤', 'les 14'], page: 51, children: [['فضلها وحكمها', 'verdienste en oordeel'], ['آدابها', 'adab'], ['الرقية', 'ruqya']] },
      { label: ['التعزية', 'Condoleren'], sub: ['الدرس ١٥', 'les 15'], page: 56, children: [['آداب المصاب', 'de getroffene'], ['آداب المعزي', 'wie condoleert'], ['منكرات التعزية', 'afkeurenswaardige gebruiken']] }
    ]
  },
  points: [
    [40, 'قال ابن كثير في ﴿واغضض من صوتك﴾: لا تبالغ في الكلام، ولا ترفع صوتك فيما لا فائدة فيه.', 'Ibn Kathīr zei over "verlaag je stem": overdrijf niet in spreken en verhef je stem niet over iets zonder nut.'],
    [43, 'من أشد صور القول على الله بغير علم الفتوى بغير علم.', 'Een van de ergste vormen van zonder kennis over Allah spreken is een fatwa geven zonder kennis.'],
    [44, 'يدخل في النهي عن تناجي اثنين دون الثالث الكلام بلغة لا يحسنها الثالث بحضرته.', 'Onder het verbod om met z’n tweeën te fluisteren zonder de derde valt ook spreken in een taal die de derde niet verstaat.'],
    [46, 'ليس معنى ألا يخالف الناصح نصيحته أن الناصح لا يقع في الذنب.', 'Dat de adviseur niet tegen zijn eigen advies ingaat, betekent niet dat hij nooit zondigt.'],
    [47, 'قال الشافعي: من وعظ أخاه سرا فقد نصحه وزانه، ومن وعظه علانية فقد فضحه وشانه.', 'Ash-Shāfiʿī zei: wie zijn broeder in het geheim vermaant, adviseert en siert hem; wie het openlijk doet, stelt hem bloot en maakt hem lelijk.'],
    [51, 'عيادة المريض سنة عند الجمهور وقد تجب، وقال شيخ الإسلام: هي فرض كفاية.', 'Ziekenbezoek is volgens de meesten sunna en kan verplicht worden; Shaykh al-Islām noemde het een gemeenschappelijke plicht.'],
    [53, 'يعاد المريض ولو لم يعلم بعواده كالمغمى عليه.', 'De zieke wordt bezocht, ook als hij het niet merkt, zoals bij bewusteloosheid.'],
    [57, 'لم يكن من هديه ﷺ الاجتماع للعزاء وقراءة القرآن للميت، وهذا بدعة كما قال ابن القيم.', 'Samenkomen voor de rouw en Koran lezen voor de overledene hoorde niet bij zijn leiding ﷺ; volgens Ibn al-Qayyim is dat een vernieuwing.']
  ],
  terms: [
    ['الثرثارون', 'ath-tharthārūn', 40, 'الذين يكثرون الكلام تكلفا.', 'Wie veel en gekunsteld praten.'],
    ['المتفيهقون', 'al-mutafayhiqūn', 40, 'الذين يتوسعون في الكلام ويفتحون به أفواههم تفاصحا.', 'Wie de mond vol nemen om welbespraakt te lijken.'],
    ['المتشدقون', 'al-mutashaddiqūn', 40, 'الذين يتكلمون بأشداقهم تفاصحا وتعاظما.', 'Wie met hun kaken spreken uit hoogmoed.'],
    ['خرفة الجنة', 'khurfat al-janna', 51, 'جناها وثمارها.', 'De geplukte vruchten van het Paradijs.'],
    ['التعزية', 'at-taʿziya', 56, 'تسلية المصاب وتقويته وحثه على الصبر.', 'De getroffene troosten, versterken en tot geduld aansporen.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الناصح والمنصوح', 'De adviseur en wie advies krijgt'],
      intro: ['آداب كل منهما كما ذكرها الكتاب.', 'De adab van beiden, zoals het boek ze noemt.'],
      columns: [['الناصح', 'De adviseur'], ['المنصوح', 'Wie advies krijgt']],
      rows: [
        { label: ['قبل النصيحة', 'Vooraf'], cells: [['التثبت من وقوع الخطأ', 'nagaan of de fout echt gebeurde'], ['استشارة العاقل الأمين المجرب', 'raad vragen aan iemand die verstandig, betrouwbaar en ervaren is']] },
        { label: ['النية', 'Intentie'], cells: [['الإخلاص وإرادة الإصلاح', 'oprechtheid en herstel willen'], ['قبول النصيحة والمبادرة بها', 'het advies aannemen en snel uitvoeren']] },
        { label: ['الطريقة', 'Wijze'], cells: [['السر والرفق والإيجاز', 'in het geheim, zacht en beknopt'], ['محبة الناصح واحترامه', 'liefde en respect voor de adviseur']] },
        { label: ['بعدها', 'Daarna'], cells: [['الصبر على الأذى والستر', 'kwetsing verdragen en bedekken'], ['شكره والدعاء له', 'hem danken en voor hem bidden']] }
      ],
      page: 46
    },
    {
      type: 'cards',
      title: ['من آداب عيادة المريض', 'Adab van het ziekenbezoek'],
      intro: ['كما رتبها الكتاب.', 'Zoals het boek ze ordent.'],
      nodes: [
        [52, 'الإخلاص', 'Oprechtheid', '', ''],
        [52, 'اختيار الوقت والاستئذان', 'Een goed moment en toestemming vragen', '', ''],
        [53, 'تخفيف الزيارة', 'Een kort bezoek', 'دون أن يفوت المقصود', 'zonder het doel te missen'],
        [53, 'التنفيس عنه وقول الخير', 'Opbeuren en goed spreken', '', ''],
        [54, 'الدعاء والرقية', 'Smeekbede en ruqya', 'لا بأس طهور إن شاء الله', '"geen bezwaar, een reiniging, als Allah het wil"'],
        [54, 'التذكير بثواب الصبر', 'Herinneren aan de beloning van geduld', '', ''],
        [55, 'عدم ذكر مساوئ المرض', 'Geen nare verhalen over de ziekte', '', '']
      ]
    }
  ],
  sections: [
    [43, 'السب واللعن', 'Schelden en vervloeken', 'سباب المسلم فسوق وقتاله كفر، ولعن المؤمن كقتله، ولا يكون اللعانون شفعاء ولا شهداء يوم القيامة.', 'Een moslim uitschelden is zondig en hem bestrijden is ongeloof; een gelovige vervloeken is als hem doden; wie veel vervloekt, is op de Dag der Opstanding geen voorspreker of getuige.'],
    [48, 'نصيحة بالإيجاز والكلمة الطيبة', 'Advies met weinig, goede woorden', 'قال النبي ﷺ: نعم الرجل عبد الله لو كان يصلي من الليل، فكان عبد الله بعد ذلك يصلي من الليل.', 'De Profeet ﷺ zei: wat een goede man is ʿAbd Allāh, als hij maar ’s nachts bad. Daarna bad ʿAbd Allāh ’s nachts.'],
    [52, 'عيادة غير المسلم', 'Een zieke niet-moslim bezoeken', 'لا بأس بها، ولا سيما إن رجي إسلامه؛ عاد النبي ﷺ غلاما يهوديا فدعاه إلى الإسلام فأسلم.', 'Dat is geen bezwaar, zeker als men hoopt dat hij moslim wordt; de Profeet ﷺ bezocht een joodse jongen, nodigde hem uit tot de islam en hij werd moslim.'],
    [58, 'ألفاظ غير مشروعة في التعزية', 'Niet-voorgeschreven condoleancewoorden', 'مثل: البقية في حياتك، وحياتك الباقية، وما نقص من عمره زاد في عمرك.', 'Zoals: "de rest is in jouw leven", "jouw leven blijft" en "wat aan zijn leven ontbrak, is bij het jouwe gekomen".']
  ],
  keycards: [
    ['opsomming', 57, 'من منكرات التعزية', 'Afkeurenswaardige rouwgebruiken', ['قراءة الإخلاص ألف مرة أو يس أو الفاتحة لروح الميت', 'توزيع الختمة عند العزاء', 'الاجتماع ثلاثة أيام وكل خميس والأربعين والذكرى السنوية', 'عشاء الميت أو الوالدين كل عام', 'الاجتماع وقراءة القرآن في السرادقات'], ['al-Ikhlāṣ duizend keer, Yā-Sīn of al-Fātiḥa lezen voor de ziel van de overledene', 'de Koran in delen verdelen bij de condoleance', 'samenkomen drie dagen, elke donderdag, de veertigste en een jaarlijkse herdenking', 'een jaarlijkse "maaltijd van de overledene"', 'samenkomen en Koran lezen in tenten']],
    ['opsomming', 58, 'ما يقوله المعزي', 'Wat je zegt bij het condoleren', ['إن لله ما أخذ وله ما أعطى، وكل عنده بأجل مسمى، فلتصبر ولتحتسب', 'الدعاء للميت كما دعا لأبي سلمة', 'الأمر بالصبر'], ['aan Allah behoort wat Hij nam en wat Hij gaf; alles heeft bij Hem een vastgestelde termijn; heb geduld en hoop op beloning', 'een smeekbede voor de overledene, zoals voor Abū Salama', 'aansporen tot geduld']]
  ],
  hadith: [
    { text: 'وإن أبغضكم إلي وأبعدكم مني في الآخرة أسوأكم أخلاقا، الثرثارون المتفيهقون المتشدقون', takhrij: 'رواه أحمد والترمذي وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; al-Albānī noemde hem authentiek', nl: 'De mensen die mij het meest tegenstaan en in het hiernamaals het verst van mij zijn, zijn die met het slechtste karakter: de kletsers, de grootsprekers en de pronkers met woorden', pages: [40] },
    { text: 'إن العبد ليتكلم بالكلمة ما يتبين فيها يزل بها في النار أبعد ما بين المشرق والمغرب', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Een dienaar zegt een woord zonder erbij na te denken, en daardoor glijdt hij in het Vuur, verder dan de afstand tussen oost en west', pages: [40] },
    { text: 'ثكلتك أمك يا معاذ، وهل يكب الناس في النار على وجوههم أو على مناخرهم إلا حصائد ألسنتهم', takhrij: 'رواه أحمد والترمذي وصححه', takhrijNl: 'Aḥmad en at-Tirmidhī, die hem authentiek noemde', narrator: 'معاذ', narratorNl: 'Muʿādh', nl: 'Moge je moeder je verliezen, Muʿādh! Worden de mensen anders op hun gezicht of neus in het Vuur geworpen dan door de oogst van hun tong?', pages: [41] },
    { text: 'من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie in Allah en de Laatste Dag gelooft, laat hem het goede spreken of zwijgen', pages: [41] },
    { text: 'لا يستقيم إيمان عبد حتى يستقيم قلبه، ولا يستقيم قلبه حتى يستقيم لسانه', takhrij: 'رواه أحمد وحسنه الألباني', takhrijNl: 'Aḥmad; al-Albānī noemde hem ḥasan', nl: 'Het geloof van een dienaar is pas recht als zijn hart recht is, en zijn hart is pas recht als zijn tong recht is', pages: [42] },
    { text: 'ما أنت بمحدث قوما حديثا لا تبلغه عقولهم، إلا كان لبعضهم فتنة', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن مسعود', narratorNl: 'Ibn Masʿūd', nl: 'Vertel je mensen iets wat hun verstand niet bevat, dan wordt het voor sommigen een beproeving', pages: [42] },
    { text: 'سباب المسلم فسوق وقتاله كفر', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن مسعود', narratorNl: 'Ibn Masʿūd', nl: 'Een moslim uitschelden is zondig en hem bestrijden is ongeloof', pages: [43] },
    { text: 'إذا كنتم ثلاثة فلا يتناجى رجلان دون الآخر حتى تختلطوا بالناس، من أجل أن يحزنه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als jullie met z’n drieën zijn, laten twee dan niet fluisteren zonder de derde tot jullie tussen mensen zijn, omdat het hem verdriet doet', pages: [44] },
    { text: 'إذا حدث الرجل بحديث ثم التفت فهي أمانة', takhrij: 'رواه أبو داود وحسنه الألباني', takhrijNl: 'Abū Dāwūd; al-Albānī noemde hem ḥasan', nl: 'Als iemand iets vertelt en dan om zich heen kijkt, is het een toevertrouwd geheim', pages: [44] },
    { text: 'الدين النصيحة … لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'De religie is oprecht advies … voor Allah, Zijn Boek, Zijn Boodschapper, de leiders van de moslims en de gewone moslims', pages: [46] },
    { text: 'المستشار مؤتمن', takhrij: 'رواه أحمد والترمذي وحسنه', takhrijNl: 'Aḥmad en at-Tirmidhī, die hem ḥasan noemde', nl: 'Wie om raad gevraagd wordt, is een vertrouwenspersoon', pages: [47] },
    { text: 'ومن صنع إليكم معروفا فكافئوه، فإن لم تجدوا ما تكافئونه فادعوا له حتى تروا أنكم قد كافأتموه', takhrij: 'رواه أبو داود وصححه الألباني', takhrijNl: 'Abū Dāwūd; al-Albānī noemde hem authentiek', nl: 'Wie jullie iets goeds doet, beloon hem; vinden jullie niets om hem mee te belonen, bid dan voor hem tot jullie zien dat jullie hem beloond hebben', pages: [49] },
    { text: 'إن المسلم إذا عاد أخاه المسلم لم يزل في خرفة الجنة حتى يرجع', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Als een moslim zijn zieke broeder bezoekt, blijft hij de vruchten van het Paradijs plukken tot hij terugkeert', pages: [51] },
    { text: 'لا تسبي الحمى، فإنها تذهب خطايا بني آدم كما يذهب الكير خبث الحديد', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'جابر', narratorNl: 'Jābir', note: 'لأم السائب.', nlNote: 'Tegen Umm as-Sāʾib.', nl: 'Scheld de koorts niet uit, want die neemt de zonden van de mens weg zoals de blaasbalg het vuil van ijzer wegneemt', pages: [53] },
    { text: 'أذهب الباس رب الناس، واشف أنت الشافي، لا شفاء إلا شفاؤك، شفاء لا يغادر سقما', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Neem de kwaal weg, Heer van de mensen, en genees, U bent de Genezer; er is geen genezing dan Uw genezing, een genezing die geen ziekte achterlaat', pages: [54] },
    { text: 'لا بأس بالرقى ما لم يكن فيه شرك', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Ruqya is geen bezwaar zolang er geen shirk in zit', pages: [54] },
    { text: 'إن العين تدمع والقلب يحزن، ولا نقول إلا ما يرضي ربنا، وإنا بفراقك يا إبراهيم لمحزونون', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Het oog traant en het hart is bedroefd, maar wij zeggen alleen wat onze Heer behaagt; en om jouw afscheid, Ibrāhīm, zijn wij bedroefd', pages: [56] },
    { text: 'ما من عبد تصيبه مصيبة فيقول: إنا لله وإنا إليه راجعون، اللهم أجرني في مصيبتي واخلف لي خيرا منها، إلا أجره الله في مصيبته وأخلف له خيرا منها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أم سلمة', narratorNl: 'Umm Salama', nl: 'Geen dienaar die door een ramp getroffen wordt en zegt: wij behoren Allah toe en tot Hem keren wij terug; Allah, beloon mij in mijn ramp en geef mij er iets beters voor in de plaats, of Allah beloont hem en geeft hem iets beters', pages: [57] },
    { text: 'اصنعوا لآل جعفر طعاما، فقد أتاهم ما يشغلهم', takhrij: 'رواه أحمد وابن ماجه وحسنه الألباني', takhrijNl: 'Aḥmad en Ibn Māja; al-Albānī noemde hem ḥasan', narrator: 'عبد الله بن جعفر', narratorNl: 'ʿAbd Allāh ibn Jaʿfar', nl: 'Maak eten voor de familie van Jaʿfar, want hun is iets overkomen wat hen bezighoudt', pages: [58] },
    { text: 'ما من مؤمن يعزي أخاه بمصيبة إلا كساه الله سبحانه من حلل الكرامة يوم القيامة', takhrij: 'رواه ابن ماجه وحسنه الألباني', takhrijNl: 'Ibn Māja; al-Albānī noemde hem ḥasan', nl: 'Geen gelovige die zijn broeder condoleert bij een ramp, of Allah kleedt hem op de Dag der Opstanding in gewaden van eer', pages: [59] }
  ],
  persons: [
    ['ibn-kathir', 'text', [40], 'فسر خفض الصوت.', 'Legde het verlagen van de stem uit.'],
    ['aisha', 'text', [41, 54], 'روت تأنيه ﷺ في الكلام ورقيته للمريض.', 'Overleverde zijn bedachtzaam spreken ﷺ en zijn ruqya bij zieken.'],
    ['anas-ibn-malik', 'text', [41, 52, 58], 'روى تكراره الكلمة ثلاثا وعيادة الغلام اليهودي.', 'Overleverde dat hij een woord driemaal herhaalde en de joodse jongen bezocht.'],
    ['muadh-ibn-jabal', 'text', [41], 'قيل له: كف عليك هذا.', 'Tegen hem werd gezegd: houd dit (je tong) in bedwang.'],
    ['abu-hurayra', 'text', [41, 51, 54], 'روى: فليقل خيرا أو ليصمت.', 'Overleverde: laat hem het goede spreken of zwijgen.'],
    ['ibn-masud', 'text', [42, 43], 'روى: ما أنت بمحدث قوما حديثا لا تبلغه عقولهم.', 'Overleverde: vertel mensen niets wat hun verstand niet bevat.'],
    ['thabit-ibn-ad-dahhak', 'text', [43], 'روى: لعن المؤمن كقتله.', 'Overleverde: een gelovige vervloeken is als hem doden.'],
    ['abu-ad-darda', 'text', [43], 'روى: لا يكون اللعانون شفعاء ولا شهداء.', 'Overleverde: wie veel vervloekt, is geen voorspreker of getuige.'],
    ['sahl-ibn-abi-hathma', 'text', [43], 'روى: كبر كبر.', 'Overleverde: de oudste eerst.'],
    ['ibn-ishaq', 'text', [44], 'روى قوله لعتبة: أفرغت يا أبا الوليد؟', 'Overleverde zijn vraag aan ʿUtba: ben je klaar, Abū l-Walīd?'],
    ['zayd-ibn-khalid-al-juhani', 'text', [44], 'روى الاستئذان في الكلام.', 'Overleverde het vragen om toestemming om te spreken.'],
    ['ibn-raslan', 'text', [44], 'قال: الالتفات قائم مقام: اكتم هذا عني.', 'Zei: om je heen kijken betekent: houd dit voor je.'],
    ['abdallah-ibn-amr', 'text', [46], 'تثبت النبي ﷺ من قوله قبل نصحه.', 'De Profeet ﷺ ging na wat hij gezegd had voordat hij hem adviseerde.'],
    ['umar-ibn-abd-al-aziz', 'text', [46, 55], 'قال: من وصل أخاه بنصيحة في دينه فقد أحسن صلته.', 'Zei: wie zijn broeder raad geeft in zijn religie, onderhoudt de band op de beste manier.'],
    ['ash-shafii', 'text', [47], 'قال: من وعظ أخاه سرا فقد نصحه وزانه.', 'Zei: wie zijn broeder in het geheim vermaant, adviseert en siert hem.'],
    ['al-fudayl-ibn-iyad', 'text', [47], 'قال: المؤمن يستر وينصح، والفاجر يهتك ويعير.', 'Zei: de gelovige bedekt en adviseert, de zondaar stelt bloot en kleineert.'],
    ['ibn-umar', 'text', [48], 'قيل فيه: نعم الرجل عبد الله لو كان يصلي من الليل.', 'Over hem werd gezegd: wat een goede man, als hij maar ’s nachts bad.'],
    ['umar-ibn-al-khattab', 'text', [49], 'كان القراء أصحاب مجلسه ومشاورته.', 'De Koranlezers waren zijn raadgevers.'],
    ['abu-musa-al-ashari', 'text', [51], 'روى: أطعموا الجائع وعودوا المريض.', 'Overleverde: voed de hongerige en bezoek de zieke.'],
    ['ibn-taymiyya', 'text', [51], 'قال: عيادة المريض فرض كفاية.', 'Zei: ziekenbezoek is een gemeenschappelijke plicht.'],
    ['jabir-ibn-abdallah', 'text', [53, 54], 'روى النهي عن سب الحمى والإذن في الرقية.', 'Overleverde het verbod de koorts uit te schelden en de toestemming voor ruqya.'],
    ['umm-as-saib', 'text', [53], 'نهاها عن سب الحمى.', 'Hij verbood haar de koorts uit te schelden.'],
    ['ibn-abbas', 'text', [54], 'روى: لا بأس طهور إن شاء الله.', 'Overleverde: geen bezwaar, een reiniging, als Allah het wil.'],
    ['asma-bint-umays', 'text', [55], 'أمرها أن ترقي بني جعفر.', 'Kreeg de opdracht ruqya te doen voor de zonen van Jaʿfar.'],
    ['umm-salama', 'text', [57, 58], 'روت دعاء المصيبة ووفاة أبي سلمة.', 'Overleverde de smeekbede bij een ramp en het overlijden van Abū Salama.'],
    ['ibn-qudama', 'text', [57], 'قال: يستحب تعزية جميع أهل المصيبة كبارهم وصغارهم.', 'Zei: het is aanbevolen alle getroffenen te condoleren, groot en klein.'],
    ['ibn-al-qayyim', 'text', [57], 'قال: لم يكن من هديه الاجتماع للعزاء.', 'Zei: samenkomen voor de rouw hoorde niet bij zijn leiding.'],
    ['abu-salama-ibn-abd-al-asad', 'text', [58], 'دعا له النبي ﷺ عند وفاته.', 'De Profeet ﷺ smeekte voor hem bij zijn dood.'],
    ['abdallah-ibn-jafar', 'text', [58], 'روى الأمر بصنع الطعام لآل جعفر.', 'Overleverde de opdracht eten te maken voor de familie van Jaʿfar.'],
    ['jafar-ibn-abi-talib', 'text', [58], 'لما جاء نعيه أمر بصنع الطعام لأهله.', 'Toen zijn overlijdensbericht kwam, werd eten voor zijn familie gemaakt.']
  ],
  review: [
    ['يحفظ المسلم لسانه، ويقول خيرا أو يصمت.', 'De moslim behoedt zijn tong en spreekt het goede of zwijgt.'],
    ['يختار الكلمة الطيبة ويراعي حال المخاطب ويحفظ السر.', 'Hij kiest goede woorden, houdt rekening met de aangesprokene en bewaart geheimen.'],
    ['النصيحة في السر وبرفق وعلم وإخلاص.', 'Advies geef je in het geheim, zacht, met kennis en oprechtheid.'],
    ['عيادة المريض حق، تكون خفيفة مع الدعاء والتذكير بالصبر.', 'Ziekenbezoek is een recht: kort, met smeekbeden en herinnering aan geduld.'],
    ['التعزية مستحبة باللفظ المشروع، مع اجتناب البدع.', 'Condoleren is aanbevolen, met woorden uit de sunna en zonder vernieuwingen.']
  ],
  quiz: [
    { type: 'mc', page: 41, q: ['ما الذي يكب الناس في النار على وجوههم كما في حديث معاذ؟', 'Wat werpt de mensen volgens de hadith van Muʿādh op hun gezicht in het Vuur?'], options: [['حصائد ألسنتهم', 'كثرة الأكل', 'قلة المال', 'كثرة النوم'], ['de oogst van hun tong', 'veel eten', 'weinig geld', 'veel slapen']], answer: 0, explain: ['ولذلك أمسك النبي ﷺ بلسانه وقال: كف عليك هذا.', 'Daarom greep hij ﷺ zijn tong en zei: houd dit in bedwang.'] },
    { type: 'tf', page: 44, q: ['يجوز لاثنين أن يتناجيا دون الثالث إذا كانوا ثلاثة فقط.', 'Twee mogen fluisteren zonder de derde als zij met z’n drieën zijn.'], answer: 1, explain: ['نهي عنه من أجل أن يحزنه.', 'Dat is verboden omdat het hem verdriet doet.'] },
    { type: 'mc', page: 47, q: ['كيف تكون النصيحة عند الشافعي؟', 'Hoe geef je advies volgens ash-Shāfiʿī?'], options: [['سرا', 'علانية أمام الناس', 'بالكتابة فقط', 'بواسطة غيرك دائما'], ['in het geheim', 'openlijk voor de mensen', 'alleen schriftelijk', 'altijd via een ander']], answer: 0, explain: ['من وعظه علانية فقد فضحه وشانه.', 'Wie openlijk vermaant, stelt hem bloot.'] },
    { type: 'mc', page: 51, q: ['ما حكم عيادة المريض عند شيخ الإسلام؟', 'Wat is volgens Shaykh al-Islām het oordeel over ziekenbezoek?'], options: [['فرض كفاية', 'فرض عين', 'مكروه', 'مباح فقط'], ['gemeenschappelijke plicht', 'persoonlijke plicht', 'afgeraden', 'alleen toegestaan']], answer: 0, explain: ['وهو القول الوسط كما في الكتاب.', 'Volgens het boek is dat de middenpositie.'] },
    { type: 'tf', page: 52, q: ['يجوز عيادة المريض غير المسلم.', 'Een zieke niet-moslim bezoeken mag.'], answer: 0, explain: ['عاد النبي ﷺ غلاما يهوديا فأسلم.', 'De Profeet ﷺ bezocht een joodse jongen, die moslim werd.'] },
    { type: 'mc', page: 58, q: ['ماذا أمر النبي ﷺ لما جاء نعي جعفر؟', 'Wat droeg de Profeet ﷺ op toen het bericht van Jaʿfars dood kwam?'], options: [['أن يصنع لآل جعفر طعام', 'أن يجتمع الناس في بيتهم', 'أن يقرأ القرآن على قبره', 'أن يقام العزاء ثلاثة أيام'], ['eten maken voor de familie van Jaʿfar', 'samenkomen in hun huis', 'Koran lezen bij zijn graf', 'drie dagen rouw houden']], answer: 0, explain: ['فقد أتاهم ما يشغلهم.', 'Want hun is iets overkomen wat hen bezighoudt.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٤٥ و٥٠ و٥٥ و٥٩.', 'Oefeningen van het boek op p. 45, 50, 55 en 59. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
