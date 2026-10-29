// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 1: كلامه ﷺ (lessen 1–2, boek p. 10–19).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '10–19',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['كلامه ﷺ', 'Zijn spreken ﷺ'],
  subtitle: ['درسان: كلامه وعفته في الكلام', 'Twee lessen: zijn spreken en zijn kuise taal'],
  summary: [
    'كان كلام النبي ﷺ أحسن الكلام، يدخل القلوب ويؤثر فيها، كما أسلم الطفيل بن عمرو لما سمعه. كان يتمهل في كلامه حتى لو عده العاد لأحصاه، وأوتي جوامع الكلم، ويختار المدخل المناسب وما يلفت الانتباه، ويعيد الكلمة ثلاثا عند الحاجة، ويكني عما يستقبح ذكره، ويقسم أحيانا، ويخفض صوته في موضعه.',
    'De woorden van de Profeet ﷺ waren de beste woorden; zij gingen het hart binnen, zoals bij aṭ-Ṭufayl ibn ʿAmr die moslim werd toen hij hem hoorde. Hij sprak rustig, zodat men zijn woorden kon tellen, kreeg allesomvattende woorden, koos een passende inleiding en wat de aandacht trok, herhaalde iets drie keer als dat nodig was, omschreef gênante zaken, zwoer soms, en sprak zacht waar dat paste.'
  ],
  map: {
    title: ['كلامه ﷺ في خريطة واحدة', 'Zijn spreken in één kaart'],
    intro: ['صفات كلامه كما في الدرسين.', 'Kenmerken van zijn spreken zoals in de twee lessen.'],
    root: [['كلامه ﷺ', 'Zijn spreken ﷺ'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['أثر كلامه', 'Het effect van zijn woorden'], sub: ['الطفيل بن عمرو', 'aṭ-Ṭufayl ibn ʿAmr'], page: 11, children: [['دخل القلوب', 'drong de harten binnen'], ['ومكروا ومكر الله', 'zij smeedden plannen, en Allah ook']] },
      { label: ['طريقته في الكلام', 'Zijn manier van spreken'], sub: ['ص ١٢–١٤', 'p. 12–14'], page: 12, children: [['التمهل', 'rustig spreken'], ['جوامع الكلم', 'allesomvattende woorden'], ['المدخل المناسب', 'een passende inleiding'], ['الإعادة ثلاثا', 'drie keer herhalen']] },
      { label: ['عفته في الكلام', 'Kuise taal'], sub: ['ص ١٥–١٦', 'p. 15–16'], page: 15, children: [['الكناية عما يستقبح', 'omschrijven wat gênant is'], ['لا يحب الفحش', 'geen obsceniteit']] },
      { label: ['آداب أخرى', 'Andere etiquette'], sub: ['ص ١٧–١٩', 'p. 17–19'], page: 17, children: [['القسم أحيانا', 'soms zweren'], ['ضمير الغائب', 'de derde persoon'], ['خفض الصوت', 'zacht spreken']] }
    ]
  },
  points: [
    [10, 'أمرنا الله بالتأسي بالنبي ﷺ، ولا يتم ذلك إلا بمعرفة أحواله: ما يحب وما يبغض، وفرحه وحزنه وغضبه.', 'Allah beval ons de Profeet ﷺ als voorbeeld te nemen; dat kan alleen als we zijn toestanden kennen: wat hij liefhad en haatte, zijn vreugde, verdriet en woede.'],
    [12, 'وضع الطفيل القطن في أذنيه لئلا يسمع النبي ﷺ، فأبى الله إلا أن يسمعه فأسلم، فوقع ما كان يخشاه المشركون.', 'Aṭ-Ṭufayl stopte katoen in zijn oren om de Profeet ﷺ niet te horen, maar Allah liet hem toch horen en hij werd moslim: wat de polytheïsten vreesden, gebeurde.'],
    [13, 'كان يفصل كلامه فلا يسرده سردا يشوش على السامع، وكان كلامه بينا واضح المعنى.', 'Hij scheidde zijn woorden en liet ze niet in een stroom volgen die de hoorder verwart; zijn spreken was duidelijk van betekenis.'],
    [14, 'كان يلفت الانتباه بالسؤال: «ما تعدون الرقوب فيكم؟» ثم يصحح المفهوم، وهذا أقوى من الدخول المباشر في الموضوع.', 'Hij trok de aandacht met een vraag, "wie noemen jullie kinderloos?", en corrigeerde daarna het begrip; dat werkt sterker dan meteen het onderwerp binnengaan.'],
    [14, 'قال ملا علي القاري: كان يكرر الكلام ثلاثا إذا اقتضى المقام ذلك لصعوبة المعنى أو غرابته أو كثرة السامعين، لا دائما.', 'Al-Mullā ʿAlī al-Qārī: hij herhaalde iets drie keer als de situatie dat vroeg, door een moeilijke of ongewone betekenis of veel toehoorders, niet altijd.'],
    [15, 'كنى النبي ﷺ عن الجماع بألفاظ كالعسيلة والمقارفة والإفضاء والفراش والإعراس.', 'De Profeet ﷺ omschreef gemeenschap met woorden als ʿusayla, muqārafa, ifḍāʾ, firāsh en iʿrās.'],
    [17, 'أكثر قسمه ﷺ «والذي نفسي بيده»، وكان يقسم أحيانا بـ«وايم الله».', 'Zijn meest gebruikte eed was "bij Hem in Wiens hand mijn ziel is"; soms zwoer hij met "wa-ym Allāh".'],
    [18, 'كان يسند ما يقبح نسبته إلى المتكلم إلى ضمير الغائب، كقوله في الجنازة غير الصالحة: «يا ويلها».', 'Wat lelijk is om aan de spreker toe te schrijven, legde hij bij de derde persoon, zoals over de slechte dode: "wee háár".']
  ],
  terms: [
    ['أعضل بنا', 'aʿḍala binā', 11, 'غلبنا وأعجزنا.', 'Heeft ons overmeesterd en machteloos gemaakt.'],
    ['جوامع الكلم', 'jawāmiʿ al-kalim', 13, 'أن يجمع الله الأمور الكثيرة في الأمر الواحد أو الأمرين، كما قال ابن شهاب.', 'Dat Allah veel zaken samenbrengt in één of twee uitspraken, zoals Ibn Shihāb zei.'],
    ['الرقوب', 'ar-raqūb', 14, 'عند النبي ﷺ: الذي لم يقدم من ولده شيئا.', 'Volgens de Profeet ﷺ: wie geen kind vooruitzond.'],
    ['الصرعة', 'aṣ-ṣuraʿa', 14, 'عند النبي ﷺ: الذي يملك نفسه عند الغضب.', 'Volgens de Profeet ﷺ: wie zichzelf beheerst bij woede.'],
    ['الفحش', 'al-fuḥsh', 16, 'القبيح من القول والفعل.', 'Het lelijke van woord en daad.'],
    ['الكناية', 'al-kināya', 16, 'التعبير عما يستحيا منه بلفظ يحصل به الإفهام.', 'Iets gênants uitdrukken met een woord dat het toch begrijpelijk maakt.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['من أساليبه ﷺ في الكلام', 'Hoe hij sprak'],
      intro: ['كما في الصفحات ١٢–١٤.', 'Zoals op p. 12–14.'],
      nodes: [
        [12, 'التمهل', 'Rustig spreken', 'لو عده العاد لأحصاه', 'wie wilde, kon zijn woorden tellen'],
        [13, 'الإيجاز', 'Beknoptheid', '«بعثت بجوامع الكلم»', '"Ik ben gezonden met allesomvattende woorden"'],
        [13, 'المدخل المناسب', 'Passende inleiding', '«أرأيتكم لو أخبرتكم…»', '"Als ik jullie vertelde…"'],
        [14, 'لفت الانتباه', 'De aandacht trekken', '«ما تعدون الرقوب فيكم؟»', '"Wie noemen jullie kinderloos?"'],
        [14, 'الإعادة ثلاثا', 'Drie keer herhalen', 'لتعقل عنه', 'zodat men het begreep']
      ]
    }
  ],
  sections: [
    [10, 'الرد على المستهزئين', 'Antwoord aan wie spotten', 'قال تعالى: ﴿إنا كفيناك المستهزئين﴾، قال السعدي: ما تظاهر أحد بالاستهزاء برسول الله ﷺ إلا أهلكه الله.', 'Allah zegt: "Wij zijn genoeg voor je tegen de spotters". As-Saʿdī: niemand spotte openlijk met de Boodschapper ﷺ of Allah vernietigde hem.'],
    [16, 'الكناية عند الحاجة', 'Omschrijven als het nodig is', 'قال العراقي في «لا يدري أين باتت يده»: فيه استحباب الكناية عما يستحيا منه إذا حصل الإفهام بها.', 'Al-ʿIrāqī over "hij weet niet waar zijn hand de nacht doorbracht": het is aanbevolen gênante zaken te omschrijven als het zo begrijpelijk blijft.'],
    [18, 'أدب خفض الصوت', 'Zacht spreken', 'كان يسلم تسليما يسمع اليقظان ولا يوقظ النائم، قال ابن الجوزي: هذا من أحسن الأدب.', 'Hij groette zo dat wie wakker was het hoorde, zonder de slapende te wekken. Ibn al-Jawzī: dat is de beste etiquette.'],
    [19, 'وصف أم معبد', 'De beschrijving van Umm Maʿbad', 'إن صمت فعليه الوقار، وإن تكلم سما وعلاه البهاء، حلو المنطق، فصل، لا نزر ولا هذر.', 'Zweeg hij, dan straalde hij waardigheid uit; sprak hij, dan verhief hij zich en werd hij omgeven door glans; zoet van spreken, helder, niet te weinig en niet te veel.']
  ],
  keycards: [
    ['opsomming', 15, 'ألفاظ كنى بها عن الجماع', 'Woorden waarmee hij gemeenschap omschreef', ['العسيلة', 'المقارفة', 'الإفضاء', 'الفراش', 'الإعراس'], ['ʿusayla (honinkje)', 'muqārafa', 'ifḍāʾ', 'firāsh (bed)', 'iʿrās']]
  ],
  hadith: [
    { text: 'أن النبي ﷺ كان يحدث حديثا، لو عده العاد لأحصاه، ولم يكن يسرد الحديث كسردكم', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Profeet ﷺ sprak zo dat wie wilde zijn woorden kon tellen; hij liet zijn spreken niet in een stroom volgen zoals jullie', pages: [12] },
    { text: 'كان يتكلم بكلام بين فصل، يحفظه من جلس إليه', takhrij: 'رواه الترمذي وحسنه', takhrijNl: 'at-Tirmidhī, die het ḥasan noemde', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Hij sprak duidelijk en gescheiden, zodat wie bij hem zat het onthield', pages: [12] },
    { text: 'بعثت بجوامع الكلم', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Ik ben gezonden met allesomvattende woorden', pages: [13] },
    { text: 'أرأيتكم لو أخبرتكم أن خيلا تخرج بسفح هذا الجبل تريد أن تغير عليكم، أكنتم مصدقي؟ … فإني نذير لكم بين يدي عذاب شديد', takhrij: 'في الصحيحين', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als ik jullie vertelde dat ruiters aan de voet van deze berg te voorschijn komen om jullie aan te vallen, zouden jullie mij geloven? … Dan ben ik een waarschuwer voor jullie vóór een zware straf', pages: [13] },
    { text: 'ما تعدون الرقوب فيكم؟ … ليس ذاك بالرقوب، ولكنه الرجل الذي لم يقدم من ولده شيئا … فما تعدون الصرعة فيكم؟ … ليس بذلك، ولكنه الذي يملك نفسه عند الغضب', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن مسعود', narratorNl: 'Ibn Masʿūd', nl: 'Wie noemen jullie kinderloos? … Dat is niet de kinderloze, maar de man die geen van zijn kinderen vooruitzond … Wie noemen jullie sterk? … Niet die, maar wie zichzelf beheerst bij woede', pages: [14] },
    { text: 'كان رسول الله ﷺ يعيد الكلمة ثلاثا لتعقل عنه', takhrij: 'رواه الترمذي وصححه', takhrijNl: 'at-Tirmidhī, die het ṣaḥīḥ noemde', narrator: 'أنس', narratorNl: 'Anas', nl: 'De Boodschapper van Allah ﷺ herhaalde een woord drie keer, zodat men het begreep', pages: [14] },
    { text: 'كان رسول الله ﷺ إذا سلم سلم ثلاثا، وإذا تكلم بكلمة أعادها ثلاثا', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أنس', narratorNl: 'Anas', nl: 'Als de Boodschapper van Allah ﷺ groette, groette hij drie keer, en als hij iets zei, herhaalde hij het drie keer', pages: [14] },
    { text: 'لعلك تريدين أن ترجعي إلى رفاعة؟ لا، حتى يذوق عسيلتك وتذوقي عسيلته', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Wil je misschien terug naar Rifāʿa? Nee, niet voordat hij jouw honinkje proeft en jij het zijne', pages: [15] },
    { text: 'هل فيكم من أحد لم يقارف الليلة؟ … فانزل في قبرها', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', note: 'عند دفن ابنة النبي ﷺ، فقال أبو طلحة: أنا.', nlNote: 'Bij de begrafenis van een dochter van de Profeet ﷺ; Abū Ṭalḥa zei: ik.', nl: 'Is er iemand onder jullie die vannacht geen omgang had? … Daal dan af in haar graf', pages: [15] },
    { text: 'إن من أشر الناس عند الله منزلة يوم القيامة، الرجل يفضي إلى امرأته، وتفضي إليه، ثم ينشر سرها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Tot de mensen met de slechtste plaats bij Allah op de Opstandingsdag behoort de man die met zijn vrouw samenkomt en zij met hem, en die daarna haar geheim verspreidt', pages: [15] },
    { text: 'إذا دعا الرجل امرأته إلى فراشه فأبت، فبات غضبان عليها، لعنتها الملائكة حتى تصبح', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als een man zijn vrouw naar zijn bed roept en zij weigert, en hij brengt de nacht boos op haar door, dan vervloeken de engelen haar tot de ochtend', pages: [16] },
    { text: 'إن الله لا يحب الفحش والتفحش', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'Allah houdt niet van obsceniteit en grofheid', pages: [16] },
    { text: 'إذا استيقظ أحدكم من نومه، فلا يغمس يده في الإناء حتى يغسلها ثلاثا، فإنه لا يدري أين باتت يده', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Als een van jullie wakker wordt, laat hij zijn hand niet in de pot steken voordat hij haar drie keer gewassen heeft, want hij weet niet waar zijn hand de nacht doorbracht', pages: [16] },
    { text: 'والذي نفسي بيده، لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده', takhrij: 'البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'من أمثلة قسمه ﷺ.', nlNote: 'Een voorbeeld van zijn eed.', nl: 'Bij Hem in Wiens hand mijn ziel is: niemand van jullie gelooft werkelijk tot ik hem liever ben dan zijn vader en zijn kind', pages: [17] },
    { text: 'وايم الله، لو أن فاطمة بنت محمد سرقت، لقطعت يدها', takhrij: 'البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Bij Allah, als Fāṭima, de dochter van Muḥammad, zou stelen, zou ik haar hand afhakken', pages: [17] },
    { text: 'إذا وضعت الجنازة واحتملها الرجال على أعناقهم، فإن كانت صالحة قالت: قدموني، وإن كانت غير صالحة قالت: يا ويلها! أين يذهبون بها؟', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'Als de baar neergezet wordt en mannen haar op hun schouders nemen: was de dode goed, dan zegt hij: breng mij vooruit; was hij niet goed, dan zegt hij: wee haar! Waar brengen zij haar heen?', pages: [18] },
    { text: 'فيسلم تسليما يسمع اليقظان، ولا يوقظ النائم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'المقداد', narratorNl: 'al-Miqdād', nl: 'Hij groette zo dat wie wakker was het hoorde, zonder de slapende te wekken', pages: [18] }
  ],
  persons: [
    ['as-sadi', 'text', [10], 'فسر ﴿إنا كفيناك المستهزئين﴾.', 'Verklaarde "Wij zijn genoeg voor je tegen de spotters".'],
    ['at-tufayl-ibn-amr', 'text', [11], 'وضع القطن في أذنيه ثم سمع النبي ﷺ فأسلم.', 'Stopte katoen in zijn oren, hoorde toch de Profeet ﷺ en werd moslim.'],
    ['ibn-ishaq', 'takhrij', [12], 'أخرج قصة الطفيل في السيرة.', 'Bracht het verhaal van aṭ-Ṭufayl in zijn Sīra.'],
    ['aisha', 'text', [12, 15], 'وصفت تمهله ﷺ في الكلام، وروت قصة امرأة رفاعة.', 'Beschreef hoe rustig hij sprak en overleverde het verhaal van de vrouw van Rifāʿa.'],
    ['az-zuhri', 'text', [13], 'ابن شهاب، فسر جوامع الكلم.', 'Ibn Shihāb; verklaarde jawāmiʿ al-kalim.'],
    ['abu-hurayra', 'text', [13, 16], 'روى «بعثت بجوامع الكلم» وحديث غسل اليد.', 'Overleverde "ik ben gezonden met allesomvattende woorden" en de hadith over het handen wassen.'],
    ['ibn-masud', 'text', [14], 'روى حديث الرقوب والصرعة.', 'Overleverde de hadith over de kinderloze en de sterke.'],
    ['anas-ibn-malik', 'text', [14, 15], 'روى إعادة الكلمة ثلاثا وقصة الدفن.', 'Overleverde het drie keer herhalen en het verhaal van de begrafenis.'],
    ['mulla-ali-al-qari', 'text', [14], 'بين أن التكرار ثلاثا عند الحاجة لا دائما.', 'Legde uit dat drie keer herhalen alleen gebeurde als het nodig was.'],
    ['abu-talha-al-ansari', 'text', [15], 'نزل في قبر ابنة النبي ﷺ.', 'Daalde af in het graf van de dochter van de Profeet ﷺ.'],
    ['al-iraqi', 'text', [16], 'استنبط استحباب الكناية عما يستحيا منه.', 'Leidde af dat omschrijven van gênante zaken aanbevolen is.'],
    ['ibn-hajar-al-asqalani', 'text', [17], 'فسر قسم «والذي نفسي بيده».', 'Verklaarde de eed "bij Hem in Wiens hand mijn ziel is".'],
    ['abu-said-al-khudri', 'text', [18], 'روى حديث الجنازة.', 'Overleverde de hadith over de baar.'],
    ['ibn-allan', 'text', [18], 'قال: ينبغي إسناد ما تستقبح إضافته للنفس إلى ضمير الغيبة.', 'Zei dat men wat lelijk is om aan zichzelf toe te schrijven, in de derde persoon moet zeggen.'],
    ['al-miqdad-ibn-al-aswad', 'text', [18], 'وصف سلام النبي ﷺ عليهم وهم نيام.', 'Beschreef hoe de Profeet ﷺ groette terwijl zij sliepen.'],
    ['ibn-al-jawzi', 'text', [18], 'قال: هذا من أحسن الأدب.', 'Zei: dat is de beste etiquette.'],
    ['umm-mabad', 'text', [19], 'وصفت كلامه ﷺ.', 'Beschreef zijn spreken.']
  ],
  review: [
    ['كان كلامه ﷺ يدخل القلوب، وأسلم به الطفيل بن عمرو.', 'Zijn woorden drongen de harten binnen; aṭ-Ṭufayl ibn ʿAmr werd erdoor moslim.'],
    ['كان يتمهل ويفصل كلامه، وأوتي جوامع الكلم.', 'Hij sprak rustig en duidelijk gescheiden, en kreeg allesomvattende woorden.'],
    ['كان يكني عما يستقبح ذكره، ولا يحب الفحش.', 'Hij omschreef gênante zaken en hield niet van obsceniteit.'],
    ['أكثر قسمه «والذي نفسي بيده».', 'Zijn meest gebruikte eed was "bij Hem in Wiens hand mijn ziel is".']
  ],
  quiz: [
    { type: 'mc', page: 11, q: ['ماذا فعل الطفيل بن عمرو لئلا يسمع النبي ﷺ؟', 'Wat deed aṭ-Ṭufayl ibn ʿAmr om de Profeet ﷺ niet te horen?'], options: [['وضع القطن في أذنيه', 'خرج من مكة', 'أغلق باب المسجد', 'رفع صوته'], ['hij stopte katoen in zijn oren', 'hij verliet Mekka', 'hij sloot de deur van de moskee', 'hij verhief zijn stem']], answer: 0, explain: ['ثم أبى الله إلا أن يسمعه فأسلم.', 'Toch liet Allah hem horen en werd hij moslim.'] },
    { type: 'mc', page: 14, q: ['من «الرقوب» عند النبي ﷺ؟', 'Wie is volgens de Profeet ﷺ "de kinderloze"?'], options: [['الذي لم يقدم من ولده شيئا', 'الذي لا يولد له', 'الذي مات أبوه', 'الذي لا مال له'], ['wie geen kind vooruitzond', 'wie geen kinderen krijgt', 'wiens vader stierf', 'wie geen bezit heeft']], answer: 0, explain: ['صحح المفهوم بعد أن سألهم.', 'Hij corrigeerde het begrip nadat hij het hun vroeg.'] },
    { type: 'tf', page: 14, q: ['كان النبي ﷺ يعيد كل كلامه ثلاثا دائما.', 'De Profeet ﷺ herhaalde altijd al zijn woorden drie keer.'], answer: 1, explain: ['كان يعيد عند الحاجة، كما قال ملا علي القاري.', 'Alleen als het nodig was, zoals al-Mullā ʿAlī al-Qārī zei.'] },
    { type: 'mc', page: 17, q: ['ما أكثر قسم النبي ﷺ؟', 'Wat was de meest gebruikte eed van de Profeet ﷺ?'], options: [['والذي نفسي بيده', 'والله العظيم', 'وحق الكعبة', 'لعمري'], ['bij Hem in Wiens hand mijn ziel is', 'bij Allah de Geweldige', 'bij de Kaʿba', 'bij mijn leven']], answer: 0, explain: ['أي أن أمر نفوس العباد بيد الله.', 'De zielen van de dienaren zijn in Allahs hand.'] },
    { type: 'mc', page: 18, q: ['كيف كان يسلم النبي ﷺ على النائمين؟', 'Hoe groette de Profeet ﷺ bij slapenden?'], options: [['يسمع اليقظان ولا يوقظ النائم', 'يرفع صوته ليوقظهم', 'لا يسلم أبدا', 'يسلم بالإشارة فقط'], ['zo dat wie wakker was het hoorde, zonder de slapende te wekken', 'luid om hen te wekken', 'hij groette niet', 'alleen met een gebaar']], answer: 0, explain: ['كما في حديث المقداد عند مسلم.', 'Zoals in de hadith van al-Miqdād bij Muslim.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ١٩.', 'Oefening van het boek op p. 19. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
