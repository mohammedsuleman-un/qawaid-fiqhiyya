// Hoofdstukkaart bij الفقه (٣), eenheid 3: het boek van ḥajj en ʿumra, deel 1 (lessen 17–24, boek p. 51–71).
// Opgesteld uit de leesnotities van het boek; regels, hadith en takhrij zoals in het boek. De lijst van
// schadelijke dieren (p. 63) is weggelaten omdat de notities er een controlevraag bij hebben.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-fiqh',
  chapter: '17',
  unit: 3,
  source: {
    label: ['كتاب الفقه (٣)، سلسلة زاد العلمية', 'Al-Fiqh (3), Zad-reeks'],
    pages: '51–71',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Fiqh/page/n{p}/mode/1up'
  },
  title: ['كتاب الحج والعمرة (١)', 'Ḥajj en ʿumra (1)'],
  subtitle: ['ثمانية دروس مجموعة في صفحة واحدة', 'Acht lessen samen op één pagina'],
  summary: [
    'الحج التعبد لله بقصد البيت الحرام والمشاعر العظام في وقت مخصوص على صفة مخصوصة، وهو ركن من أركان الإسلام يجب مرة في العمر على المسلم العاقل البالغ الحر المستطيع، وتزيد المرأة شرط المحرم. وله مواقيت زمانية ومكانية، وأنساكه ثلاثة: التمتع وهو أفضلها، والقران، والإفراد. وأركانه أربعة: الإحرام والوقوف بعرفة وطواف الإفاضة والسعي. وللإحرام محظورات، ولها فدى على أربعة أنواع.',
    'Ḥajj is Allah aanbidden door je te richten op het Heilige Huis en de grote riten, op een bepaalde tijd en wijze. Het is een zuil van de islam, eenmaal in het leven verplicht voor de moslim die verstandig, volwassen, vrij en in staat is; voor de vrouw komt daar een maḥram bij. Er zijn tijds- en plaatsgrenzen (mīqāts) en drie vormen: tamattuʿ (de beste), qirān en ifrād. De vier pijlers zijn iḥrām, het staan op ʿArafa, ṭawāf al-ifāḍa en de saʿy. In iḥrām gelden verboden, met vier soorten fidya.'
  ],
  map: {
    title: ['الحج والعمرة (١) في خريطة واحدة', 'Ḥajj en ʿumra (1) in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الحج والعمرة', 'Ḥajj en ʿumra'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['تعريف الحج', 'Definitie van ḥajj'], sub: ['الدرس ١٧', 'les 17'], page: 54, children: [['الحكم والفضل', 'oordeel en verdienste'], ['شروط الوجوب', 'voorwaarden'], ['حج الصبي', 'ḥajj van een kind']] },
      { label: ['المواقيت والأنساك', 'Mīqāts en vormen'], sub: ['الدرسان ١٨–١٩', 'les 18–19'], page: 57, children: [['الزمانية والمكانية', 'tijd en plaats'], ['التمتع والقران والإفراد', 'tamattuʿ, qirān en ifrād']] },
      { label: ['الإحرام ومحظوراته', 'Iḥrām en de verboden'], sub: ['الدرسان ٢٠–٢١', 'les 20–21'], page: 61, children: [['المحظورات', 'de verboden'], ['الفدية', 'de fidya'], ['ما يباح للمحرم', 'wat de muḥrim mag']] },
      { label: ['عرفة والطواف والسعي', 'ʿArafa, ṭawāf en saʿy'], sub: ['الدروس ٢٢–٢٤', 'les 22–24'], page: 67, children: [['الحج عرفة', 'ḥajj is ʿArafa'], ['شروط الطواف وسننه', 'voorwaarden en sunna’s van ṭawāf'], ['شروط السعي', 'voorwaarden van saʿy']] }
    ]
  },
  points: [
    [54, 'فرض الحج في آخر السنة التاسعة على قول أكثر العلماء، ويجب مرة واحدة في العمر.', 'Ḥajj werd volgens de meeste geleerden eind jaar 9 verplicht, eenmaal in het leven.'],
    [55, 'يصح حج الصبي ولا يجزئه عن حجة الإسلام، فإذا بلغ حج حجة أخرى.', 'De ḥajj van een kind is geldig maar telt niet als de verplichte ḥajj; na de puberteit doet het nogmaals ḥajj.'],
    [56, 'من استطاع بماله دون بدنه أناب من يحج عنه، ومن استطاع ببدنه دون ماله لم يجب عليه.', 'Wie financieel kan maar niet lichamelijk, laat een ander voor zich ḥajj doen; wie lichamelijk kan maar niet financieel, is niet verplicht.'],
    [58, 'من جاوز الميقات بلا إحرام وهو يريد النسك رجع إليه، فإن لم يمكنه فعليه فدية: شاة تذبح بمكة.', 'Wie de mīqāt zonder iḥrām passeert terwijl hij een rite wil doen, keert terug; kan dat niet, dan een schaap als fidya, geslacht in Mekka.'],
    [59, 'التمتع أفضل الأنساك، لأمره ﷺ أصحابه به، ولأنه أيسر.', 'Tamattuʿ is de beste vorm, omdat de Profeet ﷺ zijn metgezellen ertoe opdroeg en omdat het makkelijker is.'],
    [61, 'الإحرام هو نية الدخول في النسك، لا لبس ثياب الإحرام كما يظن كثير من الناس.', 'Iḥrām is de intentie om de rite te beginnen, niet het aantrekken van de iḥrām-kleding, zoals velen denken.'],
    [61, 'المخيط ما فصل على قدر العضو كالقميص والسراويل، لا كل ما فيه خياطة.', 'Makhīṭ is wat op maat van een lichaamsdeel gesneden is, zoals een hemd of broek, niet alles waar naaiwerk in zit.'],
    [67, 'العناية بالوقوف على جبل الرحمة خطأ مخالف للسنة، وعرفة كلها موقف إلا بطن عرنة.', 'Per se op Jabal ar-Raḥma willen staan is een fout tegen de sunna; heel ʿArafa is standplaats, behalve Baṭn ʿUrana.']
  ],
  terms: [
    ['الحج', 'al-ḥajj', 54, 'لغة: القصد؛ وشرعا: التعبد لله بقصد البيت الحرام والمشاعر العظام في وقت مخصوص على صفة مخصوصة.', 'Taal: zich richten op; sharīʿa: Allah aanbidden door zich te richten op het Heilige Huis en de grote riten, op een bepaalde tijd en wijze.'],
    ['الميقات', 'al-mīqāt', 57, 'الحد؛ وهو زماني ومكاني.', 'Grens; in tijd en in plaats.'],
    ['التمتع', 'at-tamattuʿ', 60, 'الإحرام بالعمرة في أشهر الحج ثم الحل منها ثم الإحرام بالحج في عامه.', 'Iḥrām voor ʿumra in de ḥajj-maanden, ontheven worden, dan iḥrām voor ḥajj in hetzelfde jaar.'],
    ['القران', 'al-qirān', 60, 'الإحرام بالعمرة والحج معا.', 'Iḥrām voor ʿumra en ḥajj samen.'],
    ['الإفراد', 'al-ifrād', 60, 'الإحرام بالحج وحده.', 'Iḥrām alleen voor ḥajj.'],
    ['الرمل', 'ar-ramal', 69, 'الإسراع في المشي مع مقاربة الخطى.', 'Snel lopen met kleine passen.'],
    ['الاضطباع', 'al-iḍṭibāʿ', 69, 'كشف الكتف الأيمن.', 'De rechterschouder ontbloten.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['المواقيت المكانية', 'De plaatselijke mīqāts'],
      intro: ['كما فصلها الكتاب مع أسمائها اليوم.', 'Zoals het boek ze beschrijft, met hun huidige namen.'],
      columns: [['لأهل', 'Voor'], ['اليوم وبعده عن مكة', 'Nu en afstand tot Mekka']],
      rows: [
        { label: ['ذو الحليفة', 'Dhū l-Ḥulayfa'], cells: [['المدينة', 'Medina'], ['نحو ٤٢٠ كم', 'ca. 420 km']] },
        { label: ['الجحفة', 'al-Juḥfa'], cells: [['الشام ومصر والمغرب', 'Syrië, Egypte en de Maghreb'], ['رابغ، نحو ١٨٦ كم', 'Rābigh, ca. 186 km']] },
        { label: ['يلملم', 'Yalamlam'], cells: [['اليمن', 'Jemen'], ['السعدية، نحو ١٢٠ كم', 'as-Saʿdiyya, ca. 120 km']] },
        { label: ['قرن المنازل', 'Qarn al-Manāzil'], cells: [['نجد والطائف', 'Najd en aṭ-Ṭāʾif'], ['السيل الكبير، نحو ٧٥ كم', 'as-Sayl al-Kabīr, ca. 75 km']] },
        { label: ['ذات عرق', 'Dhāt ʿIrq'], cells: [['العراق', 'Irak'], ['الضريبة، نحو ١٠٠ كم', 'aḍ-Ḍarība, ca. 100 km']] }
      ],
      page: 57
    },
    {
      type: 'cards',
      title: ['أنواع الفدية في المحظورات', 'Soorten fidya bij de verboden'],
      intro: ['أربعة أقسام كما ذكرها الكتاب.', 'Vier groepen, zoals het boek ze noemt.'],
      nodes: [
        [64, 'ما لا فدية فيه', 'Zonder fidya', 'عقد النكاح', 'het sluiten van een huwelijk'],
        [64, 'الفدية المغلظة', 'Zware fidya', 'الجماع قبل التحلل الأول: بدنة', 'gemeenschap vóór de eerste ontheffing: een kameel'],
        [64, 'فدية الجزاء', 'Vergoeding (jazāʾ)', 'قتل الصيد', 'het doden van wild'],
        [64, 'فدية الأذى', 'Fidyat al-adhā', 'إطعام ستة مساكين أو صيام ثلاثة أيام أو ذبح شاة', 'zes armen voeden, drie dagen vasten of een schaap slachten']
      ]
    }
  ],
  sections: [
    [56, 'المحرم للمرأة', 'De maḥram voor de vrouw', 'تزيد المرأة شرطا: وجود المحرم، فإن لم تجده فليست مستطيعة؛ وقال النبي ﷺ لرجل اكتتب في غزوة: انطلق فحج مع امرأتك.', 'Voor de vrouw komt er een voorwaarde bij: een maḥram; zonder maḥram is zij niet "in staat". De Profeet ﷺ zei tegen een man die zich voor een veldtocht had opgegeven: ga en doe ḥajj met je vrouw.'],
    [62, 'إحرام المرأة', 'De iḥrām van de vrouw', 'لا تنتقب المحرمة ولا تلبس القفازين، ولها أن تستر وجهها بالجلباب إذا مر بها الرجال.', 'De vrouw in iḥrām draagt geen niqāb of handschoenen, maar mag haar gezicht met haar kleed bedekken als er mannen langskomen.'],
    [65, 'من فعل محظورا', 'Wie een verbod overtreedt', 'من فعله ناسيا أو جاهلا أو مكرها فلا شيء عليه؛ ومن فعله عمدا لحاجة فعليه فدية الأذى بلا إثم؛ ومن فعله عمدا بلا حاجة أثم وعليه الفدية والتوبة.', 'Wie het uit vergetelheid, onwetendheid of onder dwang doet: niets. Wie het opzettelijk uit noodzaak doet: fidyat al-adhā zonder zonde. Wie het opzettelijk zonder noodzaak doet: zonde, fidya en berouw.'],
    [69, 'لا يقبل ولا يستلم إلا ما أذن فيه', 'Alleen kussen en aanraken wat toegestaan is', 'قال شيخ الإسلام: سائر جوانب البيت ومقام إبراهيم والمساجد ومقابر الأنبياء والصالحين لا تستلم ولا تقبل باتفاق الأئمة، لأن التعظيم خاص بالله إلا فيما أذن فيه.', 'Shaykh al-Islām zei: de overige zijden van het Huis, Maqām Ibrāhīm, moskeeën en graven van profeten en vromen worden volgens alle imams niet aangeraakt of gekust, want verering is alleen voor Allah, behalve waar Hij het toestond.']
  ],
  keycards: [
    ['opsomming', 61, 'أركان الحج', 'De pijlers van de ḥajj', ['الإحرام', 'الوقوف بعرفة', 'طواف الإفاضة', 'السعي بين الصفا والمروة'], ['iḥrām', 'het staan op ʿArafa', 'ṭawāf al-ifāḍa', 'de saʿy tussen aṣ-Ṣafā en al-Marwa']],
    ['voorwaarde', 68, 'شروط الطواف', 'Voorwaarden van de ṭawāf', ['الطهارة من الحدث والخبث', 'ستر العورة', 'أن يكون داخل المسجد', 'جعل البيت عن يساره', 'سبعة أشواط', 'الموالاة'], ['reinheid van onreinheid en vuil', 'de ʿawra bedekken', 'binnen de moskee', 'het Huis aan de linkerkant', 'zeven rondes', 'aaneensluitend']]
  ],
  hadith: [
    { text: 'بني الإسلام على خمس …', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'De islam is gebouwd op vijf …', pages: [54] },
    { text: 'لو قلت: نعم لوجبت، ولما استطعتم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'لما سئل: أكل عام؟', nlNote: 'Toen hem gevraagd werd: elk jaar?', nl: 'Als ik ja had gezegd, was het verplicht geworden, en dat hadden jullie niet gekund', pages: [54] },
    { text: 'من حج لله فلم يرفث ولم يفسق رجع كيوم ولدته أمه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie voor Allah ḥajj doet zonder onzedelijkheid en zonder zonde, keert terug zoals op de dag dat zijn moeder hem baarde', pages: [54] },
    { text: 'نعم، ولك أجر', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'لامرأة رفعت صبيا وقالت: ألهذا حج؟', nlNote: 'Tegen een vrouw die een kind ophief en vroeg: heeft dit ḥajj?', nl: 'Ja, en jij krijgt een beloning', pages: [55] },
    { text: 'فحجي عنه', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'لامرأة من خثعم أبوها شيخ كبير لا يثبت على الراحلة.', nlNote: 'Tegen een vrouw van Khathʿam wier vader te oud was om op een kameel te blijven zitten.', nl: 'Doe dan ḥajj voor hem', pages: [56] },
    { text: 'لا يخلون رجل بامرأة إلا ومعها ذو محرم، ولا تسافر المرأة إلا مع ذي محرم', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Een man is niet alleen met een vrouw zonder dat er een maḥram bij haar is, en een vrouw reist niet zonder maḥram', pages: [56] },
    { text: 'إن النبي ﷺ وقت لأهل المدينة ذا الحليفة، ولأهل الشام الجحفة، ولأهل نجد قرن المنازل، ولأهل اليمن يلملم، هن لهن ولمن أتى عليهن من غيرهن ممن أراد الحج والعمرة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'De Profeet ﷺ stelde Dhū l-Ḥulayfa vast voor de mensen van Medina, al-Juḥfa voor Syrië, Qarn al-Manāzil voor Najd en Yalamlam voor Jemen; zij gelden voor hen en voor wie er van elders langskomt en ḥajj of ʿumra wil doen', pages: [57] },
    { text: 'لا يلبس القمص ولا العمائم ولا السراويلات ولا البرانس ولا الخفاف …', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', note: 'لما سئل: ما يلبس المحرم؟', nlNote: 'Op de vraag wat de muḥrim draagt.', nl: 'Hij draagt geen hemden, tulbanden, broeken, mantels met kap of laarzen …', pages: [61] },
    { text: 'ولا تنتقب المرأة المحرمة، ولا تلبس القفازين', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'De vrouw in iḥrām draagt geen niqāb en geen handschoenen', pages: [62] },
    { text: 'لا ينكح المحرم ولا ينكح ولا يخطب', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عثمان', narratorNl: 'ʿUthmān', nl: 'De muḥrim trouwt niet, laat geen ander trouwen en doet geen aanzoek', pages: [64] },
    { text: 'فاحلق رأسك، وأطعم فرقا بين ستة مساكين، أو صم ثلاثة أيام، أو اذبح شاة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'كعب بن عجرة', narratorNl: 'Kaʿb ibn ʿUjra', nl: 'Scheer je hoofd, en voed zes armen met een faraq (drie ṣāʿ), of vast drie dagen, of slacht een schaap', pages: [64] },
    { text: 'من أدرك معنا هذه الصلاة، وأتى عرفات قبل ذلك ليلا أو نهارا، فقد تم حجه وقضى تفثه', takhrij: 'رواه أبو داود وصححه الألباني', takhrijNl: 'Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'عروة بن مضرس', narratorNl: 'ʿUrwa ibn Muḍarris', nl: 'Wie dit gebed met ons haalt en daarvoor ’s nachts of overdag op ʿArafa was, heeft zijn ḥajj voltooid', pages: [67] },
    { text: 'وقفت ها هنا، وعرفة كلها موقف', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Ik heb hier gestaan, maar heel ʿArafa is standplaats', pages: [67] },
    { text: 'ما أتم الله حج من لم يطف بين الصفا والمروة', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Allah heeft de ḥajj niet voltooid van wie de saʿy tussen aṣ-Ṣafā en al-Marwa niet doet', pages: [70] }
  ],
  persons: [
    ['ibn-umar', 'text', [54, 57, 61, 62, 68], 'روى أركان الإسلام وما يلبس المحرم.', 'Overleverde de zuilen van de islam en wat de muḥrim draagt.'],
    ['abu-hurayra', 'text', [54], 'روى فضل الحج.', 'Overleverde de verdienste van de ḥajj.'],
    ['aisha', 'text', [55, 59, 62, 68, 70], 'روت أنواع الإهلال وستر المحرمة وجهها.', 'Overleverde de verschillende vormen van iḥrām en hoe de vrouw haar gezicht bedekte.'],
    ['ibn-abbas', 'text', [55, 56, 57, 62], 'روى حج الصبي وحديث المواقيت.', 'Overleverde de ḥajj van een kind en de hadith over de mīqāts.'],
    ['umar-ibn-al-khattab', 'text', [57], 'وقت لأهل العراق ذات عرق.', 'Stelde Dhāt ʿIrq vast voor de mensen van Irak.'],
    ['ibn-qudama', 'text', [63], 'نقل الإجماع على منع المحرم من أخذ أظفاره.', 'Vermeldde de consensus dat de muḥrim zijn nagels niet knipt.'],
    ['uthman-ibn-affan', 'text', [64], 'روى النهي عن نكاح المحرم.', 'Overleverde het verbod op trouwen in iḥrām.'],
    ['kab-ibn-ujra', 'text', [64], 'نزلت فيه فدية الأذى.', 'Over hem ging de fidya voor last aan het hoofd.'],
    ['urwa-ibn-mudarris', 'text', [67], 'أدرك عرفة ليلا فتم حجه.', 'Bereikte ʿArafa ’s nachts en zijn ḥajj was voltooid.'],
    ['safiyya-bint-huyayy', 'text', [68], 'حاضت بعد طواف الإفاضة فنفرت.', 'Menstrueerde na ṭawāf al-ifāḍa en mocht vertrekken.'],
    ['ibn-taymiyya', 'text', [69], 'بين أنه لا يقبل ولا يستلم إلا ما أذن فيه.', 'Legde uit dat alleen gekust of aangeraakt wordt wat toegestaan is.']
  ],
  review: [
    ['الحج ركن يجب مرة في العمر على المستطيع، وللمرأة شرط المحرم.', 'Ḥajj is een zuil, eenmaal verplicht voor wie in staat is; voor de vrouw geldt de voorwaarde van een maḥram.'],
    ['للحج مواقيت زمانية ومكانية، والمكانية خمسة.', 'Ḥajj kent tijds- en plaatsgrenzen; er zijn vijf plaatselijke mīqāts.'],
    ['الأنساك ثلاثة وأفضلها التمتع.', 'Er zijn drie vormen; tamattuʿ is de beste.'],
    ['أركان الحج: الإحرام والوقوف بعرفة وطواف الإفاضة والسعي.', 'De pijlers zijn iḥrām, het staan op ʿArafa, ṭawāf al-ifāḍa en de saʿy.'],
    ['فدية المحظورات أربعة أنواع، ولا شيء على الناسي والجاهل والمكره.', 'De fidya kent vier soorten; wie vergeet, niet weet of gedwongen wordt, hoeft niets.']
  ],
  quiz: [
    { type: 'mc', page: 54, q: ['كم مرة يجب الحج؟', 'Hoe vaak is ḥajj verplicht?'], options: [['مرة في العمر', 'كل عام', 'كل خمس سنين', 'مرتين'], ['eenmaal in het leven', 'elk jaar', 'elke vijf jaar', 'tweemaal']], answer: 0, explain: ['لو قلت: نعم لوجبت.', '"Als ik ja had gezegd, was het verplicht geworden."'] },
    { type: 'tf', page: 55, q: ['حج الصبي يجزئه عن حجة الإسلام.', 'De ḥajj van een kind telt als zijn verplichte ḥajj.'], answer: 1, explain: ['يصح ولا يجزئه، فإذا بلغ حج حجة أخرى.', 'Geldig, maar het telt niet; na de puberteit doet het opnieuw ḥajj.'] },
    { type: 'mc', page: 57, q: ['ما ميقات أهل المدينة؟', 'Wat is de mīqāt van de mensen van Medina?'], options: [['ذو الحليفة', 'الجحفة', 'يلملم', 'قرن المنازل'], ['Dhū l-Ḥulayfa', 'al-Juḥfa', 'Yalamlam', 'Qarn al-Manāzil']], answer: 0, explain: ['على نحو ٤٢٠ كم من مكة.', 'Ongeveer 420 km van Mekka.'] },
    { type: 'mc', page: 61, q: ['ما الإحرام؟', 'Wat is iḥrām?'], options: [['نية الدخول في النسك', 'لبس ثياب الإحرام', 'التلبية فقط', 'الاغتسال'], ['de intentie om de rite te beginnen', 'de iḥrām-kleding aantrekken', 'alleen de talbiya', 'de ghusl']], answer: 0, explain: ['لا لبس الثياب كما يظن كثير من الناس.', 'Niet het aantrekken van kleding, zoals velen denken.'] },
    { type: 'mc', page: 64, q: ['ما فدية الأذى؟', 'Wat is fidyat al-adhā?'], options: [['إطعام ستة مساكين أو صيام ثلاثة أيام أو ذبح شاة', 'بدنة', 'صيام عشرة أيام', 'لا شيء'], ['zes armen voeden, drie dagen vasten of een schaap slachten', 'een kameel', 'tien dagen vasten', 'niets']], answer: 0, explain: ['حديث كعب بن عجرة.', 'De hadith van Kaʿb ibn ʿUjra.'] },
    { type: 'tf', page: 69, q: ['الرمل سنة للرجال والنساء.', 'Ramal is sunna voor mannen en vrouwen.'], answer: 1, explain: ['سنة للرجال القادرين دون النساء، في طواف القدوم.', 'Alleen voor mannen die het kunnen, in ṭawāf al-qudūm.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٦٠ و٦٦ و٧١.', 'Oefeningen van het boek op p. 60, 66 en 71. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
