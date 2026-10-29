// Hoofdstukkaart bij التربية الإسلامية (٣), eenheid 4: adab van de markt, de moskee en de vrijdag
// (lessen 16–21, boek p. 60–79). Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in
// het boek. De uitspraak van Salmān over de markt (p. 67) staat bij Muslim als woord van Salmān.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tarbiyah',
  chapter: '16',
  unit: 4,
  source: {
    label: ['كتاب التربية الإسلامية (٣): الآداب الشرعية، سلسلة زاد العلمية', 'Islamitische opvoeding (3): de islamitische omgangsvormen, Zad-reeks'],
    pages: '60–79',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['آداب السوق والمسجد ويوم الجمعة', 'De markt, de moskee en de vrijdag'],
  subtitle: ['ستة دروس مجموعة في صفحة واحدة', 'Zes lessen samen op één pagina'],
  summary: [
    'للسوق آداب مشتركة بين البائع والمشتري كترك الصخب وغض البصر وعدم الإلهاء عن الصلاة والتفقه في البيع والصدق والسماحة والإقالة والتوثيق والصدقة؛ ويختص البائع بترك الحلف والغش والاحتكار وبيع المحرم والبيع على بيع أخيه، والمشتري بترك الإسراف والنجش وأداء الثمن. وللمساجد آداب: تطهيرها من الشرك والقذر، وصيانتها عن نشد الضالة والبيع، والتطهر والسكينة في المشي إليها، وتحية المسجد، وعدم إيذاء أهلها. وليوم الجمعة آداب: الغسل والتبكير والمشي والإنصات وقراءة الكهف والإكثار من الصلاة على النبي ﷺ والدعاء.',
    'De markt kent adab voor verkoper én koper: geen geschreeuw, de blik neerslaan, niet afgehouden worden van het gebed, de regels van handel kennen, eerlijkheid, ruimhartigheid, een koop terugdraaien als dat gevraagd wordt, schulden vastleggen en ṣadaqa geven. De verkoper zweert geen eden, bedriegt niet, kopt niet op, verkoopt geen verboden waar en verkoopt niet over de verkoop van zijn broeder heen; de koper verspilt niet, drijft de prijs niet op en betaalt. De moskee wordt bewaard voor shirk en vuil, voor het omroepen van verloren zaken en voor handel; men gaat er rein en rustig heen, bidt taḥiyyat al-masjid en hindert niemand. De vrijdag kent ghusl, vroeg gaan, te voet, zwijgen tijdens de preek, al-Kahf, veel ṣalāt op de Profeet ﷺ en smeekbeden.'
  ],
  map: {
    title: ['الوحدة الرابعة في خريطة واحدة', 'Eenheid 4 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['السوق والمسجد والجمعة', 'Markt, moskee en vrijdag'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['السوق', 'De markt'], sub: ['الدروس ١٦–١٨', 'les 16–18'], page: 60, children: [['آداب مشتركة', 'voor beiden'], ['آداب البائع', 'voor de verkoper'], ['آداب المشتري', 'voor de koper']] },
      { label: ['المساجد', 'De moskeeën'], sub: ['الدرسان ١٩–٢٠', 'les 19–20'], page: 69, children: [['صيانتها', 'haar bewaren'], ['آداب القاصد إليها', 'wie erheen gaat'], ['احترام أهلها', 'respect voor de aanwezigen']] },
      { label: ['يوم الجمعة', 'De vrijdag'], sub: ['الدرس ٢١', 'les 21'], page: 76, children: [['الغسل والتبكير', 'ghusl en vroeg gaan'], ['الإنصات', 'zwijgen tijdens de preek'], ['ساعة الإجابة', 'het uur van verhoring']] }
    ]
  },
  points: [
    [62, 'من الكذب في البيع الإعلان عن تخفيضات وهمية لخداع الناس.', 'Reclame voor nepkortingen om mensen te misleiden hoort bij liegen in de handel.'],
    [64, 'من اشترى سلعة فوجدها معيبة وقد غشه البائع، فله فسخ العقد واسترداد الثمن.', 'Wie een gebrekkige waar koopt en door de verkoper bedrogen is, mag de koop ontbinden en zijn geld terugnemen.'],
    [65, 'التسعير محرم إذا كان التجار يبيعون بالمعروف، وجائز عند الحاجة ولا سيما في السلع الأساسية.', 'Prijzen vastleggen is verboden als handelaars normaal verkopen, en toegestaan bij behoefte, vooral bij basisgoederen.'],
    [65, 'لا تجوز المتاجرة في المحرمات كالخمر والخنزير ولو مع غير المسلمين.', 'Handel in verboden zaken zoals wijn en varkensvlees mag niet, ook niet met niet-moslims.'],
    [66, 'البيع على بيع أخيه يكون بعد تمام العقد؛ أما المزايدة قبل العقد واختلاف الأسعار بين المحلات فلا بأس.', 'Verkopen over de verkoop van je broeder heen gaat over een al gesloten koop; een veiling vóór de koop en prijsverschillen tussen winkels zijn geen bezwaar.'],
    [69, 'قال ابن القيم: لم يكن من هديه ﷺ تعلية القبور ولا بناؤها ولا بناء القباب عليها.', 'Ibn al-Qayyim zei: graven verhogen, erop bouwen of koepels erop zetten hoorde niet bij zijn leiding ﷺ.'],
    [71, 'ما كان داخل سور المسجد من غرف ورحبة فله حكم المسجد في النهي عن البيع.', 'Wat binnen de muur van de moskee ligt, zoals kamers en de binnenplaats, valt ook onder het verbod op handel.'],
    [77, 'لا يجوز السلام ولا رده ولا تشميت العاطس والإمام يخطب على الراجح.', 'Tijdens de vrijdagpreek groet men niet, beantwoordt men geen groet en antwoordt men geen niezer, volgens de sterkere mening.']
  ],
  terms: [
    ['هيشات الأسواق', 'hayshāt al-aswāq', 60, 'الاختلاط والمنازعة والخصومات وارتفاع الأصوات فيها.', 'Gedrang, twist, ruzie en geschreeuw op de markt.'],
    ['الإقالة', 'al-iqāla', 63, 'رد السلعة وإرجاع الثمن لفسخ العقد بطلب أحد الطرفين.', 'De waar terugnemen en het geld teruggeven om de koop te ontbinden, op verzoek van een van beiden.'],
    ['الاحتكار', 'al-iḥtikār', 65, 'شراء الطعام وقت الغلاء وحبسه ليرتفع سعره.', 'Voedsel kopen in dure tijden en achterhouden zodat de prijs stijgt.'],
    ['التسعير', 'at-tasʿīr', 65, 'أن يضع ولي الأمر سعرا محددا ويجبر الناس عليه.', 'De overheid stelt een vaste prijs vast en verplicht de mensen daartoe.'],
    ['النجش', 'an-najsh', 67, 'الزيادة في ثمن السلعة ممن لا يريد شراءها.', 'De prijs opdrijven door iemand die niet wil kopen.'],
    ['تحية المسجد', 'taḥiyyat al-masjid', 73, 'ركعتان قبل الجلوس في المسجد.', 'Twee rakʿa’s voordat men in de moskee gaat zitten.'],
    ['آذيت وآنيت', 'ādhayta wa ānayta', 77, 'آذيت الناس بتخطيك، وتأخرت في المجيء.', 'Je hinderde de mensen door over hen te stappen, en je kwam laat.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['آداب البائع وآداب المشتري', 'Adab van verkoper en koper'],
      intro: ['ما يختص به كل منهما كما في الكتاب.', 'Wat voor elk van beiden geldt, volgens het boek.'],
      columns: [['البائع', 'Verkoper'], ['المشتري', 'Koper']],
      rows: [
        { label: ['الصدق', 'Eerlijkheid'], cells: [['ترك الحلف والغش وكتمان العيب', 'geen eden, geen bedrog, geen gebreken verzwijgen'], ['عدم بخس الناس أشياءهم', 'de dingen van mensen niet tekortdoen']] },
        { label: ['الثمن', 'Prijs'], cells: [['الاعتدال في الربح وترك الاحتكار', 'gematigde winst en niet opkopen'], ['أداء الثمن وترك النجش', 'betalen en de prijs niet opdrijven']] },
        { label: ['حق الأخ', 'Recht van de broeder'], cells: [['لا يبيع على بيع أخيه', 'niet verkopen over de verkoop van zijn broeder heen'], ['لا يشتري على شراء أخيه', 'niet kopen over de koop van zijn broeder heen']] },
        { label: ['أخرى', 'Overig'], cells: [['لا يبيع ما حرم الله', 'geen verboden waar verkopen'], ['ترك الإسراف وعدم اتخاذ الأسواق نزهة', 'niet verspillen en de markt geen uitje maken']] }
      ],
      page: 64
    },
    {
      type: 'steps',
      title: ['آداب الذهاب إلى المسجد', 'Naar de moskee gaan'],
      intro: ['بالترتيب كما ذكرها الكتاب.', 'In de volgorde van het boek.'],
      nodes: [
        [71, 'التزين والتطهر والتطيب', 'Zich verzorgen, reinigen en parfumeren', '', ''],
        [71, 'المشي بسكينة ووقار', 'Rustig en waardig lopen', 'فما أدركتم فصلوا وما فاتكم فأتموا', '"bid wat je haalt en voltooi wat je mist"'],
        [72, 'ترك تشبيك الأصابع', 'De vingers niet in elkaar vlechten', 'فإنه في صلاة', '"want hij is in gebed"'],
        [72, 'النظر في النعلين', 'De sandalen controleren', '', ''],
        [72, 'الدخول باليمنى مع الذكر', 'Met rechts binnengaan, met dhikr', '', ''],
        [73, 'تحية المسجد', 'Taḥiyyat al-masjid', 'ركعتان قبل الجلوس', 'twee rakʿa’s voor het zitten'],
        [73, 'الخروج باليسرى مع الذكر', 'Met links naar buiten, met dhikr', 'اللهم إني أسألك من فضلك', '"Allah, ik vraag U om Uw gunst"']
      ]
    }
  ],
  sections: [
    [64, 'من غش فليس مني', 'Wie bedriegt hoort niet bij mij', 'مر النبي ﷺ على صبرة طعام فأدخل يده فيها فنالت أصابعه بللا، فقال: ما هذا يا صاحب الطعام؟ قال: أصابته السماء، قال: أفلا جعلته فوق الطعام كي يراه الناس؟ من غش فليس مني.', 'De Profeet ﷺ kwam langs een hoop voedsel, stak zijn hand erin en zijn vingers werden nat. Hij zei: wat is dit, verkoper? Die zei: de regen heeft het getroffen. Hij zei: waarom heb je het niet bovenop gelegd zodat de mensen het zien? Wie bedriegt, hoort niet bij mij.'],
    [69, 'تطهير المساجد من الشرك', 'De moskee vrij van shirk', 'نهى النبي ﷺ قبل موته بخمس عن اتخاذ القبور مساجد، ولعن اليهود والنصارى لاتخاذهم قبور أنبيائهم مساجد، وأمر بتسوية القبور.', 'Vijf dagen voor zijn dood verbood de Profeet ﷺ graven tot gebedsplaatsen te maken; hij vervloekte de joden en christenen die de graven van hun profeten tot gebedsplaatsen maakten, en beval graven gelijk te maken.'],
    [74, 'إيذاء المصلين', 'De biddenden hinderen', 'لا يمر بين يدي المصلي، ولا يرفع صوته بالقرآن على غيره، ولا يؤذي بريح الثوم والبصل، ويدخل فيه الدخان، ولا يبصق في المسجد، ولا يضع نعليه حيث يؤذي.', 'Loop niet voor een biddende langs, verhef je stem niet bij het reciteren boven anderen, hinder niet met de geur van knoflook of ui (en zeker niet met rook), spuug niet in de moskee en zet je schoenen niet waar ze hinderen.'],
    [78, 'هل للجمعة راتبة؟', 'Heeft de vrijdag een vaste sunna?', 'ليس قبلها راتبة، بل يشتغل بالنفل والذكر حتى يخرج الإمام؛ وبعدها جمع ابن تيمية بين الأحاديث: يصلي في المسجد أربعا، وفي بيته ركعتين.', 'Ervoor is er geen vaste sunna; men bidt vrijwillig en gedenkt Allah tot de imam komt. Erna combineerde Ibn Taymiyya de hadith: vier rakʿa’s in de moskee, twee thuis.']
  ],
  keycards: [
    ['opsomming', 60, 'آداب مشتركة في السوق', 'Adab op de markt voor beiden', ['ترك الصخب والخصومة', 'غض البصر', 'عدم الإيذاء', 'ألا تلهي التجارة عن الصلاة', 'ترك البيع بعد النداء الثاني للجمعة', 'التفقه في أحكام البيع', 'الصدق والبيان', 'السماحة', 'الإقالة', 'توثيق الديون', 'الإكثار من الصدقة'], ['geen geschreeuw of ruzie', 'de blik neerslaan', 'niemand hinderen', 'handel houdt niet af van het gebed', 'niet handelen na de tweede oproep op vrijdag', 'de regels van handel kennen', 'eerlijk zijn en gebreken melden', 'ruimhartigheid', 'een koop terugdraaien op verzoek', 'schulden vastleggen', 'veel ṣadaqa geven']],
    ['opsomming', 76, 'آداب يوم الجمعة', 'Adab van de vrijdag', ['الغسل والطيب والسواك وأحسن الثياب', 'التبكير', 'المشي', 'ترك تخطي الرقاب', 'استقبال الإمام', 'الإنصات للخطبة', 'قراءة الكهف', 'الإكثار من الصلاة على النبي ﷺ', 'الإكثار من الدعاء'], ['ghusl, parfum, siwāk en de beste kleding', 'vroeg gaan', 'te voet gaan', 'niet over nekken stappen', 'je naar de imam richten', 'zwijgen tijdens de preek', 'al-Kahf lezen', 'veel ṣalāt op de Profeet ﷺ', 'veel smeekbeden']]
  ],
  hadith: [
    { text: 'وإياكم وهيشات الأسواق', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Pas op voor het gedrang en geschreeuw van de markten', pages: [60] },
    { text: 'لا يبع في سوقنا إلا من تفقه في الدين', takhrij: 'رواه الترمذي وحسنه الألباني', takhrijNl: 'at-Tirmidhī; al-Albānī noemde hem ḥasan', narrator: 'عمر بن الخطاب', narratorNl: 'ʿUmar ibn al-Khaṭṭāb', note: 'من قول عمر.', nlNote: 'Een uitspraak van ʿUmar.', nl: 'Op onze markt verkoopt alleen wie de religie begrijpt', pages: [62] },
    { text: 'البيعان بالخيار ما لم يتفرقا، فإن صدقا وبينا بورك لهما في بيعهما، وإن كذبا وكتما محقت بركة بيعهما', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Koper en verkoper mogen kiezen zolang zij niet uit elkaar zijn; zijn zij eerlijk en open, dan wordt hun koop gezegend; liegen en verzwijgen zij, dan verdwijnt de zegen', pages: [62] },
    { text: 'رحم الله رجلا سمحا إذا باع وإذا اشترى وإذا اقتضى', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Allah zij barmhartig voor een man die ruimhartig is als hij verkoopt, koopt en zijn recht opeist', pages: [62] },
    { text: 'من أقال مسلما أقاله الله عثرته يوم القيامة', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem authentiek', nl: 'Wie voor een moslim een koop terugdraait, hem helpt Allah op de Dag der Opstanding over zijn misstap heen', pages: [63] },
    { text: 'إن هذه السوق يخالطها اللغو والكذب، فشوبوها بالصدقة', takhrij: 'رواه الترمذي وصححه الألباني', takhrijNl: 'at-Tirmidhī; al-Albānī noemde hem authentiek', narrator: 'قيس بن أبي غرزة', narratorNl: 'Qays ibn Abī Gharaza', nl: 'Op deze markt mengen zich loze praat en leugens; meng er dus ṣadaqa doorheen', pages: [63] },
    { text: 'الحلف منفقة للسلعة ممحقة للبركة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Een eed helpt de waar te verkopen maar neemt de zegen weg', pages: [64] },
    { text: 'أفلا جعلته فوق الطعام كي يراه الناس؟ من غش فليس مني', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Waarom heb je het niet bovenop gelegd zodat de mensen het zien? Wie bedriegt, hoort niet bij mij', pages: [64] },
    { text: 'من احتكر فهو خاطئ', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Wie opkoopt om de prijs op te drijven, is een zondaar', pages: [65] },
    { text: 'أحب البلاد إلى الله مساجدها، وأبغض البلاد إلى الله أسواقها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'De plekken die Allah het liefst zijn, zijn de moskeeën, en die Hem het meest tegenstaan zijn de markten', pages: [67] },
    { text: 'ألا فلا تتخذوا القبور مساجد، إني أنهاكم عن ذلك', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'جندب', narratorNl: 'Jundab', nl: 'Maak dus geen graven tot gebedsplaatsen; ik verbied jullie dat', pages: [69] },
    { text: 'من بنى مسجدا لله تعالى يبتغي به وجه الله بنى الله له بيتا في الجنة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Wie voor Allah een moskee bouwt en daarmee Zijn aangezicht zoekt, voor hem bouwt Allah een huis in het Paradijs', pages: [70] },
    { text: 'من سمع رجلا ينشد ضالة في المسجد فليقل: لا ردها الله عليك، فإن المساجد لم تبن لهذا', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Wie iemand in de moskee om iets verlorens hoort roepen, laat hem zeggen: moge Allah het je niet teruggeven, want moskeeën zijn daar niet voor gebouwd', pages: [70] },
    { text: 'إذا أقيمت الصلاة فلا تأتوها تسعون، وأتوها تمشون عليكم السكينة، فما أدركتم فصلوا وما فاتكم فأتموا', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als het gebed begint, ren er dan niet heen maar loop rustig; bid wat je haalt en voltooi wat je mist', pages: [71] },
    { text: 'إذا دخل أحدكم المسجد فليركع ركعتين قبل أن يجلس', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als een van jullie de moskee binnengaat, laat hij twee rakʿa’s bidden voordat hij gaat zitten', pages: [73] },
    { text: 'لو يعلم المار بين يدي المصلي ماذا عليه، لكان أن يقف أربعين خيرا له من أن يمر بين يديه', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Als wie voor een biddende langsloopt wist wat hem treft, dan was veertig blijven staan beter voor hem dan voor hem langs te lopen', pages: [73] },
    { text: 'البزاق في المسجد خطيئة، وكفارتها دفنها', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Spugen in de moskee is een zonde, en de boete ervoor is het bedekken', pages: [74] },
    { text: 'غسل الجمعة واجب على كل محتلم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De ghusl op vrijdag is een plicht voor iedere volwassene', pages: [76] },
    { text: 'إذا قلت لصاحبك يوم الجمعة: أنصت، والإمام يخطب، فقد لغوت', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als je op vrijdag tegen je buurman zegt "stil" terwijl de imam preekt, heb je loos gesproken', pages: [77] },
    { text: 'من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين', takhrij: 'رواه الحاكم والبيهقي وصححه الألباني', takhrijNl: 'al-Ḥākim en al-Bayhaqī; al-Albānī noemde hem authentiek', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'Wie op vrijdag soera al-Kahf leest, voor hem schijnt licht tot de volgende vrijdag', pages: [78] },
    { text: 'إن في الجمعة لساعة لا يوافقها عبد مسلم قائم يصلي يسأل الله خيرا إلا أعطاه إياه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Op vrijdag is er een uur waarin geen moslim die staat te bidden Allah om iets goeds vraagt, of Hij geeft het hem', pages: [78] }
  ],
  persons: [
    ['umar-ibn-al-khattab', 'text', [62], 'قال: لا يبع في سوقنا إلا من تفقه في الدين.', 'Zei: op onze markt verkoopt alleen wie de religie begrijpt.'],
    ['qays-ibn-abi-gharaza', 'text', [63], 'روى الأمر بشوب السوق بالصدقة.', 'Overleverde de opdracht ṣadaqa door de handel te mengen.'],
    ['abu-hurayra', 'text', [64, 71], 'روى قصة صاحب الطعام المبلول.', 'Overleverde het verhaal van de verkoper met het natte voedsel.'],
    ['salman-al-farisi', 'text', [67, 76], 'قال: لا تكونن أول من يدخل السوق ولا آخر من يخرج منها.', 'Zei: wees niet de eerste die de markt binnengaat of de laatste die vertrekt.'],
    ['ibn-umar', 'text', [67, 78], 'روى النهي عن النجش.', 'Overleverde het verbod op najsh.'],
    ['jundub-ibn-abdallah', 'text', [69], 'روى النهي عن اتخاذ القبور مساجد قبل موته ﷺ بخمس.', 'Overleverde het verbod om graven tot gebedsplaatsen te maken, vijf dagen voor zijn dood ﷺ.'],
    ['aisha', 'text', [69, 70, 74], 'روت لعن من اتخذ القبور مساجد والأمر ببناء المساجد في الدور.', 'Overleverde de vervloeking van wie graven tot gebedsplaatsen maakt en de opdracht moskeeën in de wijken te bouwen.'],
    ['umm-salama', 'text', [69], 'ذكرت كنيسة بأرض الحبشة فيها تصاوير.', 'Noemde een kerk in Abessinië met afbeeldingen.'],
    ['ibn-al-qayyim', 'text', [69], 'قال: لم يكن من هديه تعلية القبور ولا البناء عليها.', 'Zei: graven verhogen of erop bouwen hoorde niet bij zijn leiding.'],
    ['burayda-ibn-al-husayb', 'text', [70], 'روى قوله لمن نشد الجمل الأحمر: لا وجدت.', 'Overleverde zijn woorden tegen wie om een rode kameel riep: moge je hem niet vinden.'],
    ['an-nawawi', 'text', [70, 77], 'بين أن قول: لا وجدت عقوبة له، واختار تحريم تخطي الرقاب.', 'Legde uit dat "moge je het niet vinden" een straf is, en noemde over nekken stappen verboden.'],
    ['abdallah-ibn-amr', 'text', [71], 'روى النهي عن البيع والشراء في المسجد.', 'Overleverde het verbod op kopen en verkopen in de moskee.'],
    ['ash-shawkani', 'text', [72], 'بين متى ينهى عن تشبيك الأصابع.', 'Legde uit wanneer het vlechten van de vingers verboden is.'],
    ['jabir-ibn-abdallah', 'text', [73, 77], 'روى قصة سليك وقوله: اجلس فقد آذيت وآنيت.', 'Overleverde het verhaal van Sulayk en de woorden: ga zitten, je hinderde en kwam laat.'],
    ['sulayk-al-ghatafani', 'text', [73], 'أمر أن يصلي ركعتين والإمام يخطب.', 'Kreeg de opdracht twee rakʿa’s te bidden terwijl de imam preekte.'],
    ['abu-dharr', 'text', [74], 'روى ما يقطع الصلاة.', 'Overleverde wat het gebed verbreekt.'],
    ['anas-ibn-malik', 'text', [74], 'روى: البزاق في المسجد خطيئة.', 'Overleverde: spugen in de moskee is een zonde.'],
    ['aws-ibn-aws', 'text', [76], 'روى فضل المشي إلى الجمعة.', 'Overleverde de verdienste van te voet naar het vrijdaggebed gaan.'],
    ['ibn-masud', 'text', [77], 'روى استقبال الإمام في الخطبة.', 'Overleverde dat men zich tijdens de preek naar de imam richtte.'],
    ['ibn-uthaymin', 'text', [77], 'قال: السلام حال خطبة الجمعة حرام ورده حرام.', 'Zei: groeten tijdens de vrijdagpreek is verboden, en teruggroeten ook.'],
    ['abu-said-al-khudri', 'text', [78], 'روى فضل قراءة الكهف يوم الجمعة.', 'Overleverde de verdienste van al-Kahf op vrijdag.'],
    ['ibn-taymiyya', 'text', [78], 'جمع بين الأحاديث في راتبة الجمعة.', 'Combineerde de hadith over de sunna na het vrijdaggebed.'],
    ['umara-ibn-ruwayba', 'text', [79], 'أنكر رفع اليدين على المنبر في الخطبة.', 'Keurde het heffen van de handen op de minbar tijdens de preek af.']
  ],
  review: [
    ['في السوق صدق وسماحة وتفقه، بلا صخب ولا إلهاء عن الصلاة.', 'Op de markt: eerlijkheid, ruimhartigheid en kennis, zonder geschreeuw en zonder het gebed te vergeten.'],
    ['يحرم على البائع الغش والحلف الكاذب والاحتكار وبيع المحرم.', 'De verkoper mag niet bedriegen, vals zweren, opkopen of verboden waar verkopen.'],
    ['تصان المساجد عن الشرك والقذر ونشد الضالة والبيع.', 'Moskeeën worden bewaard voor shirk, vuil, het omroepen van verloren zaken en handel.'],
    ['يذهب إلى المسجد متطهرا بسكينة، ويصلي تحية المسجد، ولا يؤذي أحدا.', 'Je gaat rein en rustig naar de moskee, bidt taḥiyyat al-masjid en hindert niemand.'],
    ['يوم الجمعة: الغسل والتبكير والإنصات والكهف والصلاة على النبي ﷺ والدعاء.', 'Op vrijdag: ghusl, vroeg gaan, zwijgen, al-Kahf, ṣalāt op de Profeet ﷺ en smeekbeden.']
  ],
  quiz: [
    { type: 'mc', page: 64, q: ['ما أثر الحلف في البيع كما في الحديث؟', 'Wat doet een eed bij verkoop volgens de hadith?'], options: [['ينفق السلعة ويمحق البركة', 'يزيد البركة', 'لا أثر له', 'يفسد العقد'], ['hij helpt verkopen maar neemt de zegen weg', 'hij vergroot de zegen', 'geen effect', 'hij maakt de koop ongeldig']], answer: 0, explain: ['الحلف منفقة للسلعة ممحقة للبركة.', 'Overgeleverd door al-Bukhārī en Muslim.'] },
    { type: 'mc', page: 67, q: ['ما النجش؟', 'Wat is najsh?'], options: [['الزيادة في الثمن ممن لا يريد الشراء', 'البيع بالدين', 'الإقالة', 'الاحتكار'], ['de prijs opdrijven zonder te willen kopen', 'verkopen op krediet', 'een koop terugdraaien', 'opkopen']], answer: 0, explain: ['نهى النبي ﷺ عن النجش.', 'De Profeet ﷺ verbood het.'] },
    { type: 'tf', page: 65, q: ['يجوز بيع الخمر لغير المسلمين.', 'Wijn verkopen aan niet-moslims mag.'], answer: 1, explain: ['لا تجوز المتاجرة فيما حرم الله ولو مع الكفرة.', 'Handel in wat Allah verbood mag niet, ook niet met niet-moslims.'] },
    { type: 'mc', page: 70, q: ['ماذا يقال لمن ينشد ضالة في المسجد؟', 'Wat zeg je tegen wie in de moskee om iets verlorens roept?'], options: [['لا ردها الله عليك', 'وجدها الله لك', 'السلام عليكم', 'لا شيء'], ['moge Allah het je niet teruggeven', 'moge Allah het voor je vinden', 'as-salāmu ʿalaykum', 'niets']], answer: 0, explain: ['فإن المساجد لم تبن لهذا.', 'Want moskeeën zijn daar niet voor gebouwd.'] },
    { type: 'tf', page: 73, q: ['من دخل والإمام يخطب يوم الجمعة جلس ولم يصل.', 'Wie binnenkomt terwijl de imam op vrijdag preekt, gaat zitten zonder te bidden.'], answer: 1, explain: ['فليركع ركعتين وليتجوز فيهما.', 'Hij bidt twee korte rakʿa’s.'] },
    { type: 'mc', page: 78, q: ['متى أرجى ساعة الإجابة يوم الجمعة؟', 'Wanneer is het uur van verhoring op vrijdag het meest waarschijnlijk?'], options: [['آخر ساعة بعد العصر', 'بعد الفجر', 'عند الزوال', 'بعد العشاء'], ['het laatste uur na ʿaṣr', 'na fajr', 'rond het middaguur', 'na ʿishāʾ']], answer: 0, explain: ['فالتمسوها آخر ساعة بعد العصر.', '"Zoek het in het laatste uur na ʿaṣr."'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٦٨ و٧٥ و٧٩.', 'Oefeningen van het boek op p. 68, 75 en 79. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
