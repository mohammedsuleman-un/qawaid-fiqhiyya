// Hoofdstukkaart bij السيرة النبوية (٣), eenheid 4: met zondaars, vrouwen, ouderen en kinderen
// (lessen 18–24, boek p. 50–72). Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals
// in het boek. De toevoeging "لو قسمت بين سبعين" (p. 52) en de naam "Abū Rāfiʿ ibn ʿAmr" (p. 71) staan
// in het boek anders dan in de gangbare overlevering en zijn daarom weggelaten; het kader over ouderen
// in het Westen (p. 66) noemt geen bron en is ook weggelaten.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-seerah',
  chapter: '18',
  unit: 4,
  source: {
    label: ['كتاب السيرة النبوية (٣)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (3), Zad-reeks'],
    pages: '50–72',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Seerah/page/n{p}/mode/1up'
  },
  title: ['تعامله ﷺ مع العصاة والنساء وكبار السن والصغار', 'Met zondaars, vrouwen, ouderen en kinderen'],
  subtitle: ['سبعة دروس مجموعة في صفحة واحدة', 'Zeven lessen samen op één pagina'],
  summary: [
    'كان ﷺ رفيقا بالعصاة يرحمهم ولا يعنفهم ولا يلعنهم، ويبين شناعة المعصية ويهجر للمصلحة ويزيل المنكر بيده ويعرض دون تصريح؛ ويوصي بالنساء خيرا ويرفق بهن ويثني على الصالحات ويبايعهن بالكلام؛ ويوقر الكبير ويقدمه في الكلام والعطاء والسقيا ولا يقنطه من رحمة الله؛ ويحب الصغار ويمازحهم ويسلم عليهم ويمسح رؤوسهم ويقبلهم ويرشدهم برفق.',
    'Hij ﷺ was zacht voor zondaars: barmhartig, zonder hardheid of vervloeking. Hij liet zien hoe lelijk de zonde is, meed soms iemand als dat nut had, verwijderde kwaad met de hand en wees op fouten zonder namen te noemen. Hij raadde aan goed te zijn voor vrouwen, was zacht voor hen, prees de goeden en nam hun trouwbelofte af met woorden. Hij eerde ouderen, liet hen voorgaan in spreken, geven en drinken en ontnam hun de hoop op Allahs genade niet. En hij hield van kinderen: hij speelde met hen, groette hen, streek over hun hoofd, kuste hen en wees hen zacht terecht.'
  ],
  map: {
    title: ['الوحدة الرابعة في خريطة واحدة', 'Eenheid 4 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['العصاة والنساء والكبار والصغار', 'Zondaars, vrouwen, ouderen en kinderen'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['العصاة', 'Zondaars'], sub: ['الدرسان ١٨–١٩', 'les 18–19'], page: 50, children: [['الرفق والرحمة', 'zachtheid en barmhartigheid'], ['النهي عن اللعن', 'verbod op vervloeken'], ['التعريض دون التصريح', 'aanduiden zonder namen']] },
      { label: ['النساء', 'Vrouwen'], sub: ['الدرسان ٢٠–٢١', 'les 20–21'], page: 55, children: [['الوصية بهن', 'goed zijn voor hen'], ['البيعة بالكلام', 'trouwbelofte met woorden'], ['رفقا بالقوارير', 'zacht met het glas']] },
      { label: ['كبار السن', 'Ouderen'], sub: ['الدرس ٢٢', 'les 22'], page: 64, children: [['توقير الكبير', 'de oudere eren'], ['كبر كبر', '"laat de oudste voorgaan"'], ['عدم التقنيط', 'geen wanhoop']] },
      { label: ['الصغار', 'Kinderen'], sub: ['الدرسان ٢٣–٢٤', 'les 23–24'], page: 68, children: [['الممازحة', 'grapjes'], ['السلام والمسح', 'groeten en over het hoofd strijken'], ['التقبيل', 'kussen']] }
    ]
  },
  points: [
    [50, 'كان الصحابة أقل الناس وقوعا في الكبائر، ومن وقع منهم رجع سريعا بالتوبة.', 'De metgezellen vielen het minst in grote zonden, en wie erin viel keerde snel terug met berouw.'],
    [52, 'النهي عن لعن المعين الذي يحب الله ورسوله، مع جواز لعن شارب الخمر على العموم؛ قاله شيخ الإسلام.', 'Een bepaald persoon die van Allah en Zijn Boodschapper houdt mag men niet vervloeken, al mag de wijndrinker in het algemeen wel vervloekt worden; aldus Shaykh al-Islām.'],
    [53, 'كان يهجر بعض العصاة مدة إذا كان في ذلك مصلحة، كما في الثلاثة الذين خلفوا.', 'Hij meed soms zondaars een tijd als dat nut had, zoals de drie die achterbleven.'],
    [56, 'ما مست يده ﷺ يد امرأة قط، وإنما بايعهن بالكلام.', 'Zijn hand ﷺ raakte nooit de hand van een vrouw; hij nam hun trouwbelofte af met woorden.'],
    [57, 'فضل نساء قريش لأمرين: الحنو على الولد، ورعاية مال الزوج.', 'Qurayshvrouwen kregen voorrang om twee redenen: tederheid voor het kind en zorg voor het bezit van de man.'],
    [61, 'إنما الصبر عند الصدمة الأولى، أي الصبر المحمود عند أول المصيبة.', 'Echt geduld is bij de eerste schok: het prijzenswaardige geduld is aan het begin van de ramp.'],
    [68, 'أمر الغامدية أن تذهب حتى تلد وتفطم، لأن الطفل لا يتحمل جناية غيره.', 'Hij liet de Ghāmidiyya gaan tot zij gebaard en gespeend had, omdat het kind de schuld van een ander niet draagt.'],
    [72, 'كان ينادي الصغير بأحسن الأسماء: يا غلام، يا بني، يا أبا عمير.', 'Hij riep een kind met de mooiste naam: "jongen", "mijn zoon", "Abū ʿUmayr".']
  ],
  terms: [
    ['صاحب مكس', 'ṣāḥib maks', 52, 'الذي يأخذ المكس من الناس ظلما.', 'Wie onrechtmatig belasting van de mensen neemt.'],
    ['شقائق الرجال', 'shaqāʾiq ar-rijāl', 55, 'نظائرهم في الأخلاق والطباع.', 'Hun gelijken in karakter en natuur.'],
    ['القوارير', 'al-qawārīr', 56, 'الزجاج؛ شبه بها النساء لرقتهن وضعف بنيتهن.', 'Glas; vrouwen worden ermee vergeleken om hun fijnheid en tere bouw.'],
    ['الحداء', 'al-ḥudāʾ', 56, 'غناء تساق به الإبل.', 'Een lied waarmee kamelen worden voortgedreven.'],
    ['النغير', 'an-nughayr', 69, 'طائر صغير كان يلعب به أبو عمير.', 'Een vogeltje waarmee Abū ʿUmayr speelde.'],
    ['سنا', 'sanā', 68, 'حسن، بلغة الحبشة.', 'Mooi, in de taal van Ḥabasha.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['منهجه مع العصاة', 'Zijn methode met zondaars'],
      intro: ['كما رتبه الكتاب.', 'Zoals het boek het ordent.'],
      nodes: [
        [50, 'الرفق والرحمة', 'Zachtheid en barmhartigheid', 'قصة الشاب الذي استأذن في الزنا', 'de jongeman die toestemming voor zinā vroeg'],
        [51, 'عدم التعنيف عند الحد', 'Geen hardheid bij de straf', 'مهلا يا خالد', '"rustig, Khālid"'],
        [52, 'النهي عن السب واللعن', 'Verbod op uitschelden en vervloeken', 'لا تكونوا عون الشيطان على أخيكم', '"wees geen helpers van de shayṭān tegen je broeder"'],
        [53, 'تبيين شناعة المعصية', 'Laten zien hoe lelijk de zonde is', 'لو مزجت بماء البحر لمزجته', '"als het met zeewater vermengd werd, zou het dat bederven"'],
        [53, 'الهجر للمصلحة', 'Mijden als dat nut heeft', '', ''],
        [53, 'الإزالة باليد', 'Met de hand verwijderen', 'خاتم الذهب', 'de gouden ring'],
        [54, 'التعريض دون التصريح', 'Aanduiden zonder namen', 'ما بال العامل نستعمله …', '"wat is er met de ambtenaar die wij aanstellen …"']
      ]
    },
    {
      type: 'compare',
      title: ['تقديم الكبير', 'De oudere laten voorgaan'],
      intro: ['ثلاثة مواضع ذكرها الكتاب.', 'Drie situaties uit het boek.'],
      columns: [['الموضع', 'Situatie'], ['الدليل', 'Bewijs']],
      rows: [
        { label: ['الكلام', 'Spreken'], cells: [['ابتدأ الأصغر بالكلام', 'de jongste begon te spreken'], ['كبر كبر', '"laat de oudste voorgaan"']] },
        { label: ['العطاء', 'Geven'], cells: [['ناول السواك في المنام', 'de siwāk in de droom'], ['فقيل لي: كبر', '"mij werd gezegd: de oudste"']] },
        { label: ['السقيا', 'Te drinken geven'], cells: [['إذا سقى', 'als hij te drinken gaf'], ['ابدءوا بالكبير', '"begin bij de oudste"']] }
      ],
      page: 65
    }
  ],
  sections: [
    [50, 'الشاب الذي استأذن في الزنا', 'De jongeman die toestemming voor zinā vroeg', 'زجره الناس فقال: ادنه، ثم سأله: أتحبه لأمك؟ لابنتك؟ لأختك؟ … ثم وضع يده عليه ودعا له: اللهم اغفر ذنبه، وطهر قلبه، وحصن فرجه، فلم يلتفت بعد ذلك إلى شيء.', 'De mensen wezen hem terecht, maar hij zei: kom dichterbij, en vroeg: zou je dat voor je moeder willen? Voor je dochter? Je zus? … Toen legde hij zijn hand op hem en smeekte: Allah, vergeef zijn zonde, reinig zijn hart en bescherm zijn kuisheid. Daarna keek de jongen nergens meer naar om.'],
    [60, 'حفظ العهد لصاحبة المزادتين', 'Trouw aan de vrouw met de waterzakken', 'سقى الله الجيش من مزادتي امرأة ولم ينقص من مائها شيء، فجمع لها طعاما، ثم حفظها المسلمون في قومها فلم يغيروا على صرمها، فأسلمت وأسلم قومها.', 'Allah gaf het leger te drinken uit de waterzakken van een vrouw zonder dat haar water minder werd. Hij liet voedsel voor haar verzamelen, en de moslims spaarden later haar woonplaats. Zij en haar volk werden moslim.'],
    [64, 'خير الناس من طال عمره وحسن عمله', 'De besten leven lang en doen goed', 'ليس أحد أفضل عند الله من مؤمن يعمر في الإسلام لتسبيحه وتكبيره وتهليله؛ ولذلك عرف الصحابة قدر الكبار، فكان عمر يتعاهد عجوزا عمياء مقعدة.', 'Niemand is bij Allah beter dan een gelovige die lang leeft in de islam, om zijn tasbīḥ, takbīr en tahlīl. Daarom kenden de metgezellen de waarde van ouderen; ʿUmar verzorgde een blinde, verlamde oude vrouw.'],
    [69, 'ملاطفة الصغار', 'Lief zijn voor kinderen', 'كان يقول لأخي أنس: يا أبا عمير ما فعل النغير، ويداعب زينب بنت أم سلمة: يا زوينب، ويسابق بين أبناء العباس، ويسلم على الصبيان، ويمسح رؤوسهم وخدودهم.', 'Hij zei tegen het broertje van Anas: Abū ʿUmayr, wat deed het vogeltje? Hij plaagde Zaynab bint Umm Salama: "Zuwaynab", liet de zonen van al-ʿAbbās hardlopen naar hem, groette kinderen en streek over hun hoofd en wangen.']
  ],
  keycards: [
    ['opsomming', 55, 'من هديه مع النساء', 'Zijn leiding met vrouwen', ['الوصية بهن خيرا', 'اعتبارهن شقائق الرجال', 'مبايعتهن بالكلام دون المصافحة', 'الرفق بهن', 'الثناء على الصالحات منهن', 'حثهن على الذكر', 'تفقد الغائبة ومراعاة الحزن', 'الإنكار برفق وقبول الهدية وعيادة المريضة'], ['goed voor hen zijn', 'hen zien als gelijken van mannen', 'trouwbelofte met woorden, zonder handdruk', 'zachtheid', 'lof voor de goeden onder hen', 'aansporing tot dhikr', 'naar de afwezige vragen en verdriet ontzien', 'zacht terechtwijzen, geschenken aannemen en zieken bezoeken']],
    ['onderscheid', 52, 'لعن المطلق ولعن المعين', 'Algemeen en persoonlijk vervloeken', ['يجوز لعن شارب الخمر على العموم', 'ولا يجوز لعن المعين الذي يحب الله ورسوله'], ['de wijndrinker in het algemeen mag vervloekt worden', 'een bepaald persoon die van Allah en Zijn Boodschapper houdt niet']]
  ],
  hadith: [
    { text: 'اللهم اغفر ذنبه، وطهر قلبه، وحصن فرجه', takhrij: 'رواه أحمد وصححه الألباني', takhrijNl: 'Aḥmad; al-Albānī noemde hem authentiek', narrator: 'أبو أمامة', narratorNl: 'Abū Umāma', note: 'دعا به للشاب الذي استأذن في الزنا.', nlNote: 'Voor de jongeman die toestemming voor zinā vroeg.', nl: 'Allah, vergeef zijn zonde, reinig zijn hart en bescherm zijn kuisheid', pages: [50] },
    { text: 'مهلا يا خالد، فوالذي نفسي بيده لقد تابت توبة لو تابها صاحب مكس لغفر له', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'بريدة', narratorNl: 'Burayda', nl: 'Rustig, Khālid! Bij Hem in Wiens hand mijn ziel is, zij heeft zo berouwd dat, als een onrechtmatige belastingheffer zo berouwde, hem vergeven zou worden', pages: [52] },
    { text: 'لا تكونوا عون الشيطان على أخيكم', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wees geen helpers van de shayṭān tegen je broeder', pages: [52] },
    { text: 'لا تلعنوه، فوالله ما علمت إلا أنه يحب الله ورسوله', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Vervloek hem niet, want bij Allah, ik weet alleen dat hij van Allah en Zijn Boodschapper houdt', pages: [52] },
    { text: 'لقد قلت كلمة لو مزجت بماء البحر لمزجته', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem authentiek', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Je hebt een woord gezegd dat, als het met het water van de zee vermengd werd, het zou bederven', pages: [53] },
    { text: 'يعمد أحدكم إلى جمرة من نار فيجعلها في يده', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'لما رأى خاتم ذهب في يد رجل.', nlNote: 'Toen hij een gouden ring aan de hand van een man zag.', nl: 'Neemt een van jullie een gloeiende kool van het Vuur en doet die aan zijn hand?', pages: [53] },
    { text: 'فهلا جلس في بيت أبيه وأمه فينظر يهدى له أم لا', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو حميد الساعدي', narratorNl: 'Abū Ḥumayd as-Sāʿidī', nl: 'Waarom bleef hij niet in het huis van zijn vader en moeder zitten, om te zien of hem iets geschonken zou worden of niet?', pages: [54] },
    { text: 'ألا واستوصوا بالنساء خيرا', takhrij: 'رواه الترمذي وصححه', takhrijNl: 'at-Tirmidhī, die hem authentiek noemde', narrator: 'عمرو بن الأحوص', narratorNl: 'ʿAmr ibn al-Aḥwaṣ', nl: 'Wees goed voor de vrouwen', pages: [55] },
    { text: 'إنما النساء شقائق الرجال', takhrij: 'رواه الترمذي وأبو داود وصححه الألباني', takhrijNl: 'at-Tirmidhī en Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Vrouwen zijn de gelijken van mannen', pages: [55] },
    { text: 'لا والله ما مست يد رسول الله ﷺ يد امرأة قط، غير أنه بايعهن بالكلام', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Nee, bij Allah, de hand van de Boodschapper van Allah ﷺ heeft nooit de hand van een vrouw aangeraakt; hij nam hun trouwbelofte alleen met woorden af', pages: [56] },
    { text: 'يا أنجشة رويدك سوقا بالقوارير', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Anjasha, rustig aan met het drijven, je vervoert glas', pages: [56] },
    { text: 'خير نساء ركبن الإبل صالح نساء قريش، أحناه على ولد في صغره، وأرعاه على زوج في ذات يده', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De beste vrouwen die op kamelen reden zijn de goede vrouwen van Quraysh: het tederst voor een kind in zijn jeugd en het zorgvuldigst met wat de man bezit', pages: [56] },
    { text: 'عليكن بالتسبيح والتهليل والتقديس، واعقدن بالأنامل فإنهن مسؤولات مستنطقات', takhrij: 'رواه أحمد وأبو داود وحسنه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem ḥasan', narrator: 'يسيرة', narratorNl: 'Yusayra', nl: 'Houd vast aan tasbīḥ, tahlīl en taqdīs en tel op je vingers, want die worden ondervraagd en zullen spreken', pages: [57] },
    { text: 'فعمرة في رمضان تعدل حجة معي', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'لأم سنان الأنصارية.', nlNote: 'Tegen Umm Sinān al-Anṣāriyya.', nl: 'Een ʿumra in Ramadan staat gelijk aan een ḥajj met mij', pages: [58] },
    { text: 'إني لأدخل في الصلاة وأنا أريد إطالتها، فأسمع بكاء الصبي، فأتجوز في صلاتي مما أعلم من شدة وجد أمه من بكائه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Ik begin het gebed en wil het lang maken, dan hoor ik een kind huilen en maak ik mijn gebed korter, omdat ik weet hoe zwaar zijn moeder het heeft met zijn huilen', pages: [58] },
    { text: 'إنما الصبر عند الصدمة الأولى', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Echt geduld is bij de eerste schok', pages: [61] },
    { text: 'لا تسبي الحمى، فإنها تذهب خطايا بني آدم كما يذهب الكير خبث الحديد', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'جابر', narratorNl: 'Jābir', note: 'لأم السائب.', nlNote: 'Tegen Umm as-Sāʾib.', nl: 'Scheld de koorts niet uit, want die neemt de zonden van de mens weg zoals de blaasbalg het vuil van ijzer wegneemt', pages: [63] },
    { text: 'ليس منا من لم يرحم صغيرنا ويوقر كبيرنا', takhrij: 'رواه الترمذي وصححه الألباني', takhrijNl: 'at-Tirmidhī; al-Albānī noemde hem authentiek', narrator: 'أنس', narratorNl: 'Anas', nl: 'Wie geen barmhartigheid heeft voor onze kleinen en geen eerbied voor onze ouderen, hoort niet bij ons', pages: [64] },
    { text: 'هلا تركت الشيخ في بيته حتى أكون أنا آتيه فيه', takhrij: 'رواه أحمد وحسنه الألباني', takhrijNl: 'Aḥmad; al-Albānī noemde hem ḥasan', note: 'لأبي بكر لما جاء بأبيه أبي قحافة.', nlNote: 'Tegen Abū Bakr, toen hij zijn vader Abū Quḥāfa bracht.', nl: 'Had je de oude man maar thuis gelaten, dan was ik zelf naar hem toe gekomen', pages: [64] },
    { text: 'كبر كبر', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'De oudste eerst, de oudste eerst', pages: [65] },
    { text: 'قد غفر لك غدراتك وفجراتك', takhrij: 'رواه أحمد، وهو صحيح بشواهده', takhrijNl: 'Aḥmad; authentiek door ondersteunende overleveringen', narrator: 'عمرو بن عبسة', narratorNl: 'ʿAmr ibn ʿAbasa', note: 'لشيخ كبير يتوكأ على عصا.', nlNote: 'Tegen een zeer oude man op een stok.', nl: 'Je verraad en je zonden zijn je vergeven', pages: [66] },
    { text: 'اللهم أنتم من أحب الناس إلي', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', note: 'للنساء والصبيان المقبلين من عرس.', nlNote: 'Tegen vrouwen en kinderen die van een bruiloft kwamen.', nl: 'Bij Allah, jullie behoren tot de mensen die mij het liefst zijn', pages: [68] },
    { text: 'يا أبا عمير ما فعل النغير', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'Abū ʿUmayr, wat deed het vogeltje?', pages: [69] },
    { text: 'وأملك إن كان الله نزع منكم الرحمة', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'للأعراب الذين لا يقبلون صبيانهم.', nlNote: 'Tegen bedoeïenen die hun kinderen niet kusten.', nl: 'Wat kan ik doen als Allah de barmhartigheid uit jullie heeft weggenomen?', pages: [71] }
  ],
  persons: [
    ['abu-umama', 'text', [50], 'روى قصة الشاب الذي استأذن في الزنا.', 'Overleverde het verhaal van de jongeman die toestemming voor zinā vroeg.'],
    ['burayda-ibn-al-husayb', 'text', [51], 'روى قصة الغامدية.', 'Overleverde het verhaal van de Ghāmidiyya.'],
    ['maiz-ibn-malik', 'text', [51], 'اعترف فأقيم عليه الحد.', 'Bekende en kreeg de straf.'],
    ['al-ghamidiyya', 'text', [51, 68], 'تابت توبة عظيمة، وصلى عليها النبي ﷺ.', 'Toonde groot berouw; de Profeet ﷺ bad over haar.'],
    ['khalid-ibn-al-walid', 'text', [52], 'سب الغامدية فنهاه النبي ﷺ.', 'Schold de Ghāmidiyya uit en de Profeet ﷺ verbood het hem.'],
    ['abu-hurayra', 'text', [52, 56, 71], 'روى النهي عن لعن شارب الخمر المعين.', 'Overleverde het verbod om een bepaalde wijndrinker te vervloeken.'],
    ['ibn-taymiyya', 'text', [52], 'فرق بين لعن المطلق ولعن المعين.', 'Maakte onderscheid tussen algemeen en persoonlijk vervloeken.'],
    ['aisha', 'text', [53, 55, 56, 71], 'روت البيعة بالكلام وحديث شقائق الرجال.', 'Overleverde de trouwbelofte met woorden en de hadith over de gelijken van mannen.'],
    ['safiyya-bint-huyayy', 'text', [53], 'قالت فيها عائشة كلمة فبين النبي ﷺ شناعتها.', 'ʿĀʾisha zei iets over haar en de Profeet ﷺ liet zien hoe ernstig dat was.'],
    ['ibn-abbas', 'text', [53, 58, 65], 'روى قصة خاتم الذهب.', 'Overleverde het verhaal van de gouden ring.'],
    ['abu-humayd-as-saidi', 'text', [54], 'روى قصة ابن اللتبية.', 'Overleverde het verhaal van Ibn al-Lutbiyya.'],
    ['ibn-al-lutbiyya', 'text', [54], 'عامل الصدقات الذي قال: هذا أهدي لي.', 'De zakatambtenaar die zei: dit is mij geschonken.'],
    ['amr-ibn-al-ahwas', 'text', [55], 'روى الوصية بالنساء في حجة الوداع.', 'Overleverde het advies over vrouwen bij de afscheidsbedevaart.'],
    ['anjasha', 'text', [56], 'كان يحدو بالإبل فقال له: رفقا بالقوارير.', 'Dreef de kamelen met zang; hem werd gezegd: zacht met het glas.'],
    ['yusayra', 'text', [57], 'روت الحث على التسبيح والعقد بالأنامل.', 'Overleverde de aansporing tot tasbīḥ en tellen op de vingers.'],
    ['umm-sinan-al-ansariyya', 'text', [58], 'قال لها: عمرة في رمضان تعدل حجة معي.', 'Tegen haar zei hij: een ʿumra in Ramadan staat gelijk aan een ḥajj met mij.'],
    ['imran-ibn-husayn', 'text', [59], 'روى قصة صاحبة المزادتين.', 'Overleverde het verhaal van de vrouw met de waterzakken.'],
    ['al-ayni', 'text', [61], 'قال: حفظ النبي ﷺ هذه المرأة في قومها وبلادها.', 'Zei: de Profeet ﷺ beschermde deze vrouw in haar volk en land.'],
    ['umm-sulaym', 'text', [62], 'أهدت حيسا فبارك الله فيه.', 'Schonk ḥays en Allah zegende het.'],
    ['umm-as-saib', 'text', [63], 'نهاها عن سب الحمى.', 'Hij verbood haar de koorts uit te schelden.'],
    ['umm-al-ala', 'text', [63], 'عادها في مرضها وبشرها.', 'Hij bezocht haar toen ze ziek was en gaf haar goed nieuws.'],
    ['ibn-kathir', 'text', [64], 'نقل قصة عمر مع العجوز.', 'Vermeldde het verhaal van ʿUmar en de oude vrouw.'],
    ['talha-ibn-ubaydallah', 'text', [64], 'رأى عمر يدخل بيت العجوز.', 'Zag ʿUmar het huis van de oude vrouw binnengaan.'],
    ['umar-ibn-al-khattab', 'text', [64], 'كان يتعاهد عجوزا عمياء مقعدة.', 'Verzorgde een blinde, verlamde oude vrouw.'],
    ['abu-quhafa', 'text', [64], 'والد أبي بكر، أسلم يوم الفتح.', 'Vader van Abū Bakr; hij werd moslim bij de verovering van Mekka.'],
    ['abu-bakr-as-siddiq', 'text', [64], 'جاء بأبيه إلى النبي ﷺ.', 'Bracht zijn vader bij de Profeet ﷺ.'],
    ['ibn-al-jawzi', 'text', [65], 'روى أدب طلحة بن مصرف مع من هو أكبر منه.', 'Overleverde de manieren van Ṭalḥa ibn Muṣarrif tegenover wie ouder was.'],
    ['talha-ibn-musarrif', 'text', [65], 'لم يكن يتقدم على من هو أكبر منه.', 'Ging nooit voor iemand die ouder was.'],
    ['amr-ibn-abasa', 'text', [66], 'روى قصة الشيخ الكبير الذي غفر له.', 'Overleverde het verhaal van de oude man wiens zonden vergeven werden.'],
    ['anas-ibn-malik', 'text', [58, 61, 64, 68, 69], 'روى كثيرا من هديه مع النساء والصغار.', 'Overleverde veel over zijn omgang met vrouwen en kinderen.'],
    ['umm-khalid-bint-khalid', 'text', [68], 'كساها الخميصة وقال: هذا سنا.', 'Hij kleedde haar met de khamīṣa en zei: dit is mooi.'],
    ['zaynab-bint-abi-salama', 'text', [69], 'كان يداعبها: يا زوينب.', 'Hij plaagde haar: "Zuwaynab".'],
    ['ibn-al-qayyim', 'text', [69], 'ذكر بقاء ماء الشباب في وجه زينب.', 'Vermeldde dat de jeugdige frisheid op het gezicht van Zaynab bleef.'],
    ['al-abbas-ibn-abd-al-muttalib', 'text', [69], 'سابق النبي ﷺ بين أبنائه.', 'De Profeet ﷺ liet zijn zonen hardlopen.'],
    ['abdallah-ibn-hisham', 'text', [70], 'مسح رأسه ودعا له وقال: هو صغير.', 'Hij streek over zijn hoofd, smeekte voor hem en zei: hij is nog klein.'],
    ['jabir-ibn-samura', 'text', [70], 'مسح خده فوجد ليده بردا وريحا.', 'Hij streek over zijn wang; hij voelde koelte en een geur van zijn hand.'],
    ['jafar-ibn-abi-talib', 'text', [72], 'قال في أبنائه: ادعوا لي بني أخي.', 'Over zijn zonen zei hij: roep de zonen van mijn broer.']
  ],
  review: [
    ['يعامل العاصي بالرفق والرحمة، ولا يلعن المعين.', 'De zondaar wordt met zachtheid behandeld; een bepaald persoon wordt niet vervloekt.'],
    ['تبين شناعة المعصية، ويهجر للمصلحة، ويعرض دون تصريح.', 'De zonde wordt lelijk genoemd, mijden mag als het nut heeft, en men duidt aan zonder namen.'],
    ['النساء شقائق الرجال، يوصى بهن خيرا ويرفق بهن.', 'Vrouwen zijn de gelijken van mannen; men is goed en zacht voor hen.'],
    ['يوقر الكبير ويقدم في الكلام والعطاء والسقيا.', 'De oudere wordt geëerd en gaat voor in spreken, geven en drinken.'],
    ['يرحم الصغير ويمازح ويسلم عليه ويرشد برفق.', 'Het kind krijgt barmhartigheid, grapjes, een groet en zachte terechtwijzing.']
  ],
  quiz: [
    { type: 'mc', page: 50, q: ['كيف عالج النبي ﷺ الشاب الذي استأذن في الزنا؟', 'Hoe ging de Profeet ﷺ om met de jongeman die toestemming voor zinā vroeg?'], options: [['قربه وحاوره ودعا له', 'زجره وطرده', 'أمر بضربه', 'أعرض عنه'], ['hij liet hem dichterbij komen, sprak met hem en smeekte voor hem', 'hij berispte hem en stuurde hem weg', 'hij liet hem slaan', 'hij keerde zich af']], answer: 0, explain: ['فلم يلتفت بعد ذلك إلى شيء.', 'Daarna keek de jongen nergens meer naar om.'] },
    { type: 'tf', page: 52, q: ['يجوز لعن شارب خمر معين يحب الله ورسوله.', 'Men mag een bepaalde wijndrinker vervloeken die van Allah en Zijn Boodschapper houdt.'], answer: 1, explain: ['لا تلعنوه، فإنه يحب الله ورسوله.', '"Vervloek hem niet, want hij houdt van Allah en Zijn Boodschapper."'] },
    { type: 'mc', page: 56, q: ['كيف بايع النبي ﷺ النساء؟', 'Hoe nam de Profeet ﷺ de trouwbelofte van vrouwen af?'], options: [['بالكلام', 'بالمصافحة', 'من وراء ثوب باليد', 'بالكتابة'], ['met woorden', 'met een handdruk', 'met de hand door een doek', 'schriftelijk']], answer: 0, explain: ['ما مست يده يد امرأة قط.', 'Zijn hand raakte nooit de hand van een vrouw.'] },
    { type: 'mc', page: 56, q: ['لماذا شبه النساء بالقوارير؟', 'Waarom werden vrouwen met glas vergeleken?'], options: [['لرقتهن وضعف بنيتهن', 'لصفائهن', 'لغلاء ثمنهن', 'لكثرتهن'], ['om hun fijnheid en tere bouw', 'om hun zuiverheid', 'om hun hoge prijs', 'om hun aantal']], answer: 0, explain: ['فأمر بالرفق في السوق.', 'Daarom gebood hij rustig te drijven.'] },
    { type: 'mc', page: 65, q: ['ماذا قال النبي ﷺ لما ابتدأ الأصغر بالكلام؟', 'Wat zei de Profeet ﷺ toen de jongste begon te spreken?'], options: [['كبر كبر', 'تكلم', 'اسكت', 'ابدأ بنفسك'], ['"de oudste eerst"', '"spreek"', '"zwijg"', '"begin bij jezelf"']], answer: 0, explain: ['أي قدم الأكبر.', 'Dat wil zeggen: laat de oudste voorgaan.'] },
    { type: 'tf', page: 69, q: ['كان النبي ﷺ يسلم على الصبيان إذا مر بهم.', 'De Profeet ﷺ groette kinderen als hij langs hen liep.'], answer: 0, explain: ['رواه البخاري ومسلم عن أنس.', 'Overgeleverd door al-Bukhārī en Muslim van Anas.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٥٤ و٦٣ و٦٧ و٧٢.', 'Oefeningen van het boek op p. 54, 63, 67 en 72. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
