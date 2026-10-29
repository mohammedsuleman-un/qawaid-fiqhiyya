// Hoofdstukkaart bij الحديث (٣), eenheid 1: hadith 1–6 (lessen 1–6, boek p. 9–36).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. De overlevering
// "ألا أخبركم بأحبكم إلي" (p. 35) staat niet in het hadith-tabblad: het boek noemt Ibn ʿUmar als
// overleveraar, terwijl de bekende overlevering van ʿAbd Allāh ibn ʿAmr is; graag controleren.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-hadith',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب الحديث (٣)، سلسلة زاد العلمية', 'Al-Ḥadīth (3), Zad-reeks'],
    pages: '9–36',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ١–٦', 'Hadith 1–6'],
  subtitle: ['ستة أحاديث مجموعة في صفحة واحدة', 'Zes hadith samen op één pagina'],
  summary: [
    'ستة أحاديث جامعة: الحلال بين والحرام بين وصلاح القلب، واجتناب المنهي وفعل المأمور بقدر الاستطاعة، ووصية ابن عباس بحفظ الله، والتقوى وإتباع السيئة الحسنة وحسن الخلق، والإيمان ثم الاستقامة، وأن خلق النبي ﷺ كان القرآن.',
    'Zes allesomvattende hadith: het halal is duidelijk en het haram is duidelijk, en het hart moet goed zijn; mijd het verbodene en doe het geboden naar vermogen; het advies aan Ibn ʿAbbās om Allah te bewaken; godsvrucht, een goede daad na een slechte en goed karakter; geloof en dan standvastigheid; en het karakter van de Profeet ﷺ was de Koran.'
  ],
  map: {
    title: ['الأحاديث الستة في خريطة واحدة', 'De zes hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٣)', 'Hadith (3)'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['الحلال بين والحرام بين', 'Halal en haram zijn duidelijk'], sub: ['الحديث ١', 'hadith 1'], page: 9, children: [['المشتبهات', 'twijfelachtige zaken'], ['حمى الله محارمه', 'Allahs verboden gebied'], ['القلب', 'het hart']] },
      { label: ['ما نهيتكم عنه فاجتنبوه', 'Mijd wat ik verbood'], sub: ['الحديث ٢', 'hadith 2'], page: 13, children: [['النهي والأمر', 'verbod en gebod'], ['ما استطعتم', 'naar vermogen'], ['كثرة المسائل', 'veel vragen']] },
      { label: ['احفظ الله يحفظك', 'Bewaak Allah, Hij bewaakt jou'], sub: ['الحديث ٣', 'hadith 3'], page: 18, children: [['السؤال والاستعانة بالله', 'vragen en hulp zoeken bij Allah'], ['رفعت الأقلام', 'de pennen zijn opgeheven']] },
      { label: ['اتق الله حيثما كنت', 'Vrees Allah waar je ook bent'], sub: ['الحديث ٤', 'hadith 4'], page: 23, children: [['أتبع السيئة الحسنة', 'laat een goede daad volgen'], ['خالق الناس بخلق حسن', 'goed karakter met mensen']] },
      { label: ['قل آمنت بالله ثم استقم', 'Zeg: ik geloof, en wees standvastig'], sub: ['الحديث ٥', 'hadith 5'], page: 28, children: [['التوحيد', 'tawḥīd'], ['الاستقامة', 'standvastigheid'], ['جوامع الكلم', 'allesomvattende woorden']] },
      { label: ['كان خلقه القرآن', 'Zijn karakter was de Koran'], sub: ['الحديث ٦', 'hadith 6'], page: 33, children: [['حسن الخلق مع الله', 'goed karakter tegenover Allah'], ['حسن الخلق مع الناس', 'goed karakter tegenover mensen']] }
    ]
  },
  points: [
    [11, 'الأمور ثلاثة: حلال بين، وحرام بين، ومشتبهات لا يعلمها كثير من الناس.', 'Er zijn drie soorten zaken: duidelijk halal, duidelijk haram, en twijfelachtige zaken die velen niet kennen.'],
    [11, 'وجود المشتبهات لا ينافي بيان الدين؛ الاشتباه من الناظر لا من النص.', 'Het bestaan van twijfelachtige zaken is niet in strijd met de duidelijkheid van de godsdienst; de twijfel komt van de lezer, niet van de tekst.'],
    [12, 'صلاح الجسد وفساده دائر على القلب، فالعناية بالقلب أولى من العناية بالجوارح.', 'Goed en bederf van het lichaam draaien om het hart; zorg voor het hart gaat vóór zorg voor de ledematen.'],
    [14, 'قال في النهي «فاجتنبوه» دون الاستطاعة لأن الترك مقدور لكل أحد، وفي الأمر «ما استطعتم».', 'Bij het verbod staat "mijd het" zonder "naar vermogen", omdat ieder kan nalaten; bij het gebod staat "naar vermogen".'],
    [15, 'الأصل في الأمر الوجوب وفي النهي التحريم إلا لقرينة.', 'Een gebod is in principe verplichtend en een verbod verbiedend, tenzij een aanwijzing anders aangeeft.'],
    [20, 'من حفظ الله حفظه الله، ومن ضيع دين الله ضيعه الله.', 'Wie Allah bewaakt, die bewaakt Allah; wie Allahs godsdienst verwaarloost, die laat Allah verloren gaan.'],
    [24, 'الحسنة تمحو السيئة ولو لم تكن توبة، كالصلاة والصيام والصدقة والذكر.', 'Een goede daad wist een slechte uit, ook als het geen berouw is: gebed, vasten, ṣadaqa, dhikr.'],
    [32, 'الاستقامة واجبة تشمل الأعمال كلها، وليست تطوعا كما يظن بعضهم.', 'Standvastigheid is verplicht en omvat alle daden; het is geen vrijwillige extra zoals sommigen denken.']
  ],
  terms: [
    ['المشتبهات', 'al-mushtabihāt', 11, 'أمور تشبه الحلال والحرام، تتجاذبها أطراف متعارضة، تخفى على كثير من الناس.', 'Zaken die op halal én haram lijken, door tegengestelde kanten getrokken en voor velen verborgen.'],
    ['استبرأ', 'istabraʾa', 9, 'طلب البراءة لدينه من النقص ولعرضه من الطعن.', 'Hield zijn godsdienst vrij van gebrek en zijn eer vrij van geroddel.'],
    ['الحمى', 'al-ḥimā', 10, 'أرض يمنع الناس من رعيها والصيد فيها.', 'Grond waarop begrazen en jagen verboden is.'],
    ['المضغة', 'al-muḍgha', 10, 'قطعة اللحم؛ وهي القلب.', 'Een stukje vlees: het hart.'],
    ['سد الذرائع', 'sadd adh-dharāʾiʿ', 10, 'إغلاق كل باب يوصل إلى الحرام.', 'Elke deur sluiten die naar het verbodene leidt.'],
    ['النهي', 'an-nahy', 13, 'طلب الترك على وجه الاستعلاء.', 'Een verzoek om na te laten, van hoger naar lager.'],
    ['الأمر', 'al-amr', 13, 'طلب الفعل على وجه الاستعلاء.', 'Een verzoek om te doen, van hoger naar lager.'],
    ['احفظ الله', 'iḥfaẓ Allāh', 18, 'احفظ حدوده وحقوقه وأوامره ونواهيه.', 'Bewaak zijn grenzen, rechten, geboden en verboden.'],
    ['التقوى', 'at-taqwā', 23, 'أن تجعل بينك وبين عذاب الله وقاية بفعل أوامره واجتناب نواهيه.', 'Een bescherming tegen Allahs straf, door zijn geboden te doen en zijn verboden te mijden.'],
    ['الاستقامة', 'al-istiqāma', 28, 'لزوم الصراط المستقيم من غير ميل يمنة ولا يسرة.', 'Het rechte pad blijven gaan, zonder af te wijken naar rechts of links.'],
    ['جوامع الكلم', 'jawāmiʿ al-kalim', 31, 'كلمات قليلة تجمع معاني كثيرة.', 'Weinig woorden die veel betekenissen bevatten.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أنواع النهي والأمر', 'Soorten verbod en gebod'],
      intro: ['كما في فوائد الحديث الثاني.', 'Zoals in de lessen van hadith 2.'],
      columns: [['الحكم', 'Oordeel'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['نهي تحريم', 'Verbod: haram'], cells: [['يعاقب فاعله ويثاب تاركه امتثالا', 'wie het doet wordt gestraft, wie nalaat uit gehoorzaamheid beloond'], ['الخمر والزنا والربا والغيبة', 'wijn, zinā, woeker, roddel']] },
        { label: ['نهي كراهة', 'Verbod: afkeurenswaardig'], cells: [['لا يعاقب فاعله ويثاب تاركه امتثالا', 'niet gestraft, wel beloond bij nalaten'], ['التخصر وتشبيك الأصابع في الصلاة', 'handen op de heupen en vingers vlechten in het gebed']] },
        { label: ['أمر إيجاب', 'Gebod: verplicht'], cells: [['يثاب فاعله ويعاقب تاركه', 'beloond bij doen, gestraft bij nalaten'], ['إقام الصلاة وإيتاء الزكاة', 'het gebed en de zakāt']] },
        { label: ['أمر استحباب', 'Gebod: aanbevolen'], cells: [['يثاب فاعله ولا يعاقب تاركه', 'beloond bij doen, niet gestraft bij nalaten'], ['الإشهاد على البيع وصلاة الاستخارة', 'getuigen bij verkoop, het istikhāra-gebed']] }
      ],
      page: 15
    },
    {
      type: 'cards',
      title: ['من مكفرات الخطايا', 'Wat zonden uitwist'],
      intro: ['أمثلة ذكرها الكتاب مع أحاديثها.', 'Voorbeelden uit het boek, met hun hadith.'],
      nodes: [
        [26, 'الوضوء', 'Wuḍūʾ', 'تخرج خطاياه من جسده', 'zijn zonden verlaten zijn lichaam'],
        [26, 'الصلوات الخمس', 'De vijf gebeden', 'كنهر يغتسل فيه خمس مرات', 'als een rivier waarin men zich vijfmaal wast'],
        [26, 'صوم رمضان', 'Vasten in Ramadan', 'إيمانا واحتسابا', 'met geloof en in hoop op beloning'],
        [26, 'العمرة والحج', 'ʿUmra en ḥajj', 'كفارة لما بينهما', 'uitwissing van wat ertussen ligt'],
        [26, 'الصدقة', 'Ṣadaqa', 'تطفئ الخطيئة كما يطفئ الماء النار', 'dooft de zonde zoals water vuur dooft']
      ]
    }
  ],
  sections: [
    [16, 'السؤال في الدين', 'Vragen over de godsdienst', 'محمود: السؤال عما يحتاج إليه؛ ومذموم: السؤال عما سكت الله عنه، أو تعنتا واستهزاء، أو عن الأغلوطات والنوادر التي لا فائدة فيها.', 'Prijzenswaardig: vragen naar wat je nodig hebt; afkeurenswaardig: vragen naar wat Allah verborgen hield, uit dwarsliggen of spot, of naar strikvragen en zeldzame kwesties zonder nut.'],
    [20, 'من أعظم ما يجب حفظه', 'Wat het meest bewaakt moet worden', 'الصلاة، والطهارة لأنها مفتاحها، واللسان والفرج.', 'Het gebed, de reiniging omdat die de sleutel ervan is, en de tong en het geslachtsdeel.'],
    [29, 'أعظم الاستقامة', 'De grootste standvastigheid', 'تحقيق التوحيد، وأعظم الذنب أن تجعل لله ندا وهو خلقك؛ ومن صوره دعاء غير الله والسحر والنذر للأولياء.', 'Tawḥīd verwezenlijken; de grootste zonde is Allah een gelijke maken terwijl Hij jou schiep. Vormen daarvan: anderen dan Allah aanroepen, tovenarij, geloften aan awliyāʾ.'],
    [36, 'حسن الخلق مع الله ومع الناس', 'Goed karakter tegenover Allah en mensen', 'مع الله: الرضا بحكمه وتلقيه بانشراح صدر وحمده؛ ومع الناس: كف الأذى، وبذل الندى، وطلاقة الوجه.', 'Tegenover Allah: tevreden zijn met zijn oordeel, het met ruime borst ontvangen en Hem loven; tegenover mensen: geen kwaad doen, vrijgevig zijn en een opgewekt gezicht tonen.']
  ],
  keycards: [
    ['opsomming', 11, 'أقسام الأمور في الحديث الأول', 'Drie soorten zaken in hadith 1', ['حلال بين', 'حرام بين', 'مشتبهات لا يعلمها كثير من الناس'], ['duidelijk halal', 'duidelijk haram', 'twijfelachtige zaken die velen niet kennen']],
    ['onderscheid', 21, 'حفظ الله لعبده نوعان', 'Twee soorten bescherming door Allah', ['حفظه في مصالح دنياه: بدنه وولده وأهله وماله', 'وأشرفهما حفظه في دينه وإيمانه في حياته وعند موته'], ['bescherming van zijn wereldse belangen: lichaam, kinderen, familie, bezit', 'de edelste: bescherming van zijn godsdienst en geloof, in het leven en bij de dood']],
    ['uitzondering', 27, 'هل تكفر الحسنات الكبائر؟', 'Wissen goede daden grote zonden uit?', ['قال بعضهم: تكفر الكبائر والصغائر', 'وقال أكثر العلماء: تكفر الصغائر، والكبائر لا بد لها من توبة خاصة'], ['sommigen: zowel grote als kleine', 'de meeste geleerden: alleen kleine; grote zonden vereisen speciaal berouw']]
  ],
  hadith: [
    { text: 'إن الحلال بين، وإن الحرام بين، وبينهما مشتبهات لا يعلمهن كثير من الناس … ألا وإن في الجسد مضغة إذا صلحت صلح الجسد كله، وإذا فسدت فسد الجسد كله، ألا وهي القلب', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'النعمان بن بشير', narratorNl: 'an-Nuʿmān ibn Bashīr', nl: 'Het halal is duidelijk en het haram is duidelijk, en daartussen liggen twijfelachtige zaken die veel mensen niet kennen … Weet dat er in het lichaam een stukje vlees is: is dat goed, dan is het hele lichaam goed, en is het bedorven, dan is het hele lichaam bedorven. Weet: dat is het hart', pages: [9] },
    { text: 'يا مقلب القلوب ثبت قلبي على دينك', takhrij: 'رواه أحمد والترمذي وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; al-Albānī noemde hem authentiek', note: 'كان النبي ﷺ يكثر من هذا الدعاء.', nlNote: 'De Profeet ﷺ sprak deze smeekbede vaak uit.', nl: 'O Omkeerder van de harten, maak mijn hart standvastig in Uw godsdienst', pages: [10] },
    { text: 'ما نهيتكم عنه فاجتنبوه، وما أمرتكم به فأتوا منه ما استطعتم، فإنما أهلك الذين من قبلكم كثرة مسائلهم، واختلافهم على أنبيائهم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wat ik jullie verboden heb, mijd het; en wat ik jullie bevolen heb, doe daarvan wat jullie kunnen. Want wie vóór jullie waren, gingen ten onder door hun vele vragen en hun onenigheid met hun profeten', pages: [13] },
    { text: 'يا غلام، إني أعلمك كلمات: احفظ الله يحفظك، احفظ الله تجده تجاهك، إذا سألت فاسأل الله، وإذا استعنت فاستعن بالله … رفعت الأقلام وجفت الصحف', takhrij: 'رواه الترمذي وقال: حديث حسن صحيح', takhrijNl: 'at-Tirmidhī, die hem ḥasan ṣaḥīḥ noemde', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Jongen, ik leer je enkele woorden: bewaak Allah, dan bewaakt Hij jou; bewaak Allah, dan vind je Hem voor je. Als je vraagt, vraag dan Allah; als je hulp zoekt, zoek dan hulp bij Allah … De pennen zijn opgeheven en de bladen zijn opgedroogd', pages: [18] },
    { text: 'كتب الله مقادير الخلائق قبل أن يخلق السماوات والأرض بخمسين ألف سنة', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Allah schreef de beschikkingen van de schepselen vijftigduizend jaar voordat Hij de hemelen en de aarde schiep', pages: [21] },
    { text: 'اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن', takhrij: 'رواه الترمذي وقال: حديث حسن صحيح', takhrijNl: 'at-Tirmidhī, die hem ḥasan ṣaḥīḥ noemde', narrator: 'أبو ذر', narratorNl: 'Abū Dharr', nl: 'Vrees Allah waar je ook bent, laat op een slechte daad een goede volgen, die wist haar uit, en ga met mensen om met goed karakter', pages: [23] },
    { text: 'إن الله رفيق يحب الرفق في الأمر كله', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Allah is zachtaardig en houdt van zachtheid in alle zaken', pages: [27] },
    { text: 'قل آمنت بالله، ثم استقم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'سفيان بن عبد الله الثقفي', narratorNl: 'Sufyān ibn ʿAbd Allāh ath-Thaqafī', note: 'لما سأل عن قول في الإسلام لا يسأل عنه أحدا بعده.', nlNote: 'Toen hij vroeg naar iets over de islam waarover hij niemand anders hoefde te vragen.', nl: 'Zeg: ik geloof in Allah, en wees dan standvastig', pages: [28] },
    { text: 'شيبتني هود وأخواتها', takhrij: 'رواه الترمذي وحسنه الألباني', takhrijNl: 'at-Tirmidhī; al-Albānī noemde hem ḥasan', note: 'ذكره الكتاب مع قول ابن عباس في شدة آية ﴿فاستقم كما أمرت﴾.', nlNote: 'Genoemd met de uitspraak van Ibn ʿAbbās over hoe zwaar "wees standvastig zoals je bevolen is" was.', nl: 'Hūd en de soera’s die erop lijken hebben mij grijs gemaakt', pages: [29] },
    { text: 'ألست تقرأ القرآن؟ … فإن خلق نبي الله ﷺ كان القرآن', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'جواب عائشة لسعد بن هشام لما سألها عن خلق النبي ﷺ.', nlNote: 'Het antwoord van ʿĀʾisha aan Saʿd ibn Hishām toen hij naar het karakter van de Profeet ﷺ vroeg.', nl: 'Lees jij de Koran niet? … Het karakter van de Profeet van Allah ﷺ was de Koran', pages: [33] }
  ],
  persons: [
    ['an-numan-ibn-bashir', 'text', [9], 'راوي الحديث الأول، أول مولود للأنصار بعد الهجرة.', 'Overleveraar van hadith 1; het eerste kind dat bij de Anṣār na de hidjra werd geboren.'],
    ['abdallah-ibn-rawaha', 'text', [9], 'خال النعمان بن بشير وروى عنه النعمان.', 'De oom van moederszijde van an-Nuʿmān, die van hem overleverde.'],
    ['safiyya-bint-huyayy', 'text', [12], 'زوج النبي ﷺ؛ قال للأنصاريين: على رسلكما، إنها صفية.', 'Vrouw van de Profeet ﷺ; hij zei tegen twee Anṣār: rustig, het is Ṣafiyya.'],
    ['abu-hurayra', 'text', [13], 'راوي الحديث الثاني، روى أكثر من خمسة آلاف حديث.', 'Overleveraar van hadith 2; overleverde meer dan vijfduizend hadith.'],
    ['ibn-abbas', 'text', [18, 29], 'راوي الحديث الثالث، حبر الأمة وترجمان القرآن.', 'Overleveraar van hadith 3, de geleerde van de umma en uitlegger van de Koran.'],
    ['abu-dharr', 'text', [23], 'راوي الحديث الرابع، من أوائل من أسلم.', 'Overleveraar van hadith 4, een van de eersten die moslim werden.'],
    ['ibn-masud', 'text', [23, 29], 'صلى على أبي ذر، وسأل عن أعظم الذنب.', 'Leidde het gebed over Abū Dharr en vroeg naar de grootste zonde.'],
    ['sufyan-ibn-abdallah-ath-thaqafi', 'text', [28], 'راوي الحديث الخامس.', 'Overleveraar van hadith 5.'],
    ['umar-ibn-al-khattab', 'text', [28], 'ولى سفيان صدقات الطائف.', 'Stelde Sufyān aan over de ṣadaqa van aṭ-Ṭāʾif.'],
    ['abu-bakr-as-siddiq', 'text', [29], 'فسر الاستقامة بأنهم لم يشركوا بالله شيئا.', 'Legde standvastigheid uit als: zij kenden Allah geen deelgenoten toe.'],
    ['al-qadi-iyad', 'text', [30], 'قال: هذا من جوامع كلمه ﷺ.', 'Zei: dit behoort tot zijn allesomvattende woorden ﷺ.'],
    ['aisha', 'text', [33], 'روت أن خلق النبي ﷺ كان القرآن.', 'Overleverde dat het karakter van de Profeet ﷺ de Koran was.'],
    ['sad-ibn-hisham', 'text', [33], 'تابعي سأل عائشة عن خلق النبي ﷺ.', 'Een tābiʿī die ʿĀʾisha vroeg naar het karakter van de Profeet ﷺ.'],
    ['masruq', 'text', [33], 'كان يقول إذا روى عنها: حدثتني الصديقة بنت الصديق.', 'Zei als hij van haar overleverde: aṣ-Ṣiddīqa, dochter van aṣ-Ṣiddīq, vertelde mij.'],
    ['ibn-kathir', 'text', [35], 'شرح معنى أن خلقه ﷺ كان القرآن.', 'Legde uit wat het betekent dat zijn karakter ﷺ de Koran was.']
  ],
  review: [
    ['الحلال بين والحرام بين، ومن اتقى الشبهات استبرأ لدينه وعرضه.', 'Halal en haram zijn duidelijk; wie twijfelachtige zaken mijdt, beschermt godsdienst en eer.'],
    ['اجتنب المنهي كله، وافعل المأمور بقدر استطاعتك.', 'Mijd het verbodene helemaal en doe het geboden naar vermogen.'],
    ['احفظ الله يحفظك، ولا ينفع ولا يضر إلا ما كتبه الله.', 'Bewaak Allah, dan bewaakt Hij jou; alleen wat Allah schreef baat of schaadt.'],
    ['اتق الله، وأتبع السيئة الحسنة، وخالق الناس بخلق حسن.', 'Vrees Allah, laat een goede daad volgen op een slechte, en ga goed met mensen om.'],
    ['الدين كله في «آمنت بالله ثم استقم»، وكان خلقه ﷺ القرآن.', 'De hele godsdienst zit in "ik geloof in Allah, en wees standvastig"; zijn karakter ﷺ was de Koran.']
  ],
  quiz: [
    { type: 'mc', page: 10, q: ['ما الحمى في الحديث الأول؟', 'Wat is al-ḥimā in hadith 1?'], options: [['أرض يمنع الناس من رعيها', 'بيت الملك', 'سوق المدينة', 'ماء يشرب منه'], ['grond waarop begrazen verboden is', 'het huis van de koning', 'de markt van de stad', 'een drinkplaats']], answer: 0, explain: ['وحمى الله محارمه.', 'Allahs verboden gebied zijn zijn verboden zaken.'] },
    { type: 'mc', page: 14, q: ['لماذا لم يقل في النهي «ما استطعتم»؟', 'Waarom staat bij het verbod niet "naar vermogen"?'], options: [['لأن الترك مقدور لكل أحد', 'لأن النهي قليل', 'لأن النهي مستحب', 'لأن الأمر أخف'], ['omdat iedereen kan nalaten', 'omdat er weinig verboden zijn', 'omdat een verbod aanbevolen is', 'omdat een gebod lichter is']], answer: 0, explain: ['الترك أيسر من الفعل.', 'Nalaten is makkelijker dan doen.'] },
    { type: 'tf', page: 15, q: ['الأصل في الأمر الاستحباب حتى يدل دليل على الوجوب.', 'Een gebod is in principe aanbevolen tot bewijs verplichting aantoont.'], answer: 1, explain: ['الأصل في الأمر الوجوب إلا لقرينة.', 'Een gebod is in principe verplichtend, tenzij een aanwijzing anders aangeeft.'] },
    { type: 'mc', page: 21, q: ['ما أشرف نوعي حفظ الله لعبده؟', 'Wat is de edelste soort bescherming door Allah?'], options: [['حفظه في دينه وإيمانه', 'حفظ ماله', 'حفظ ولده', 'حفظ بدنه'], ['bescherming van zijn godsdienst en geloof', 'bescherming van zijn bezit', 'bescherming van zijn kinderen', 'bescherming van zijn lichaam']], answer: 0, explain: ['في حياته وعند موته.', 'In het leven en bij de dood.'] },
    { type: 'tf', page: 24, q: ['الحسنة لا تمحو السيئة إلا إذا كانت توبة.', 'Een goede daad wist een slechte alleen uit als het berouw is.'], answer: 1, explain: ['الصحيح أنها تمحوها ولو لم تكن توبة.', 'Het juiste: zij wist haar uit, ook als het geen berouw is.'] },
    { type: 'mc', page: 36, q: ['أي هذه ليس من حسن الخلق مع الناس كما ذكر الكتاب؟', 'Wat hoort niet bij goed karakter tegenover mensen volgens het boek?'], options: [['كثرة الجدال', 'كف الأذى', 'بذل الندى', 'طلاقة الوجه'], ['veel twisten', 'geen kwaad doen', 'vrijgevig zijn', 'een opgewekt gezicht']], answer: 0, explain: ['حسن الخلق: كف الأذى وبذل الندى وطلاقة الوجه.', 'Goed karakter: geen kwaad doen, vrijgevig zijn en een opgewekt gezicht.'] }
  ],
  note: ['أنشطة الكتاب في نهاية كل حديث.', 'Oefeningen van het boek aan het eind van elke hadith. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
