// Hoofdstukkaart bij السيرة النبوية (٢): الشمائل النبوية, eenheid 2 (lessen 6–10, boek p. 24–36).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Niet in het hadith-tabblad: «حبب إلي من الدنيا النساء والطيب» (p. 32), omdat de bronvermelding in het
// boek moet worden nagekeken; en het zwakke bericht over "tien namen" (p. 35), dat het boek zelf afwijst.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (٢): الشمائل النبوية، سلسلة زاد العلمية',
  pages: '24–36',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Seerah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'لا يمش أحدكم في نعل واحدة، لينعلهما جميعا أو ليحفهما جميعا', takhrij: 'البخاري ومسلم', note: '', pages: [24], nl: 'Laat niemand van jullie op één sandaal lopen: draag ze allebei of trek ze allebei uit', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'إذا انتعل أحدكم فليبدأ باليمين، وإذا انتزع فليبدأ بالشمال، لتكن اليمنى أولهما تنعل وآخرهما تنزع', takhrij: 'البخاري ومسلم واللفظ للبخاري', note: 'السنة في التنعل.', pages: [25], nl: 'Als een van jullie sandalen aantrekt, laat hij met rechts beginnen, en als hij ze uittrekt met links: rechts als eerste aan en als laatste uit', nlNote: 'De sunna bij het aantrekken van schoeisel.' },
  { narrator: 'شداد بن أوس', text: 'خالفوا اليهود فإنهم لا يصلون في نعالهم ولا خفافهم', takhrij: 'في سنن أبي داود وصححه الألباني', note: 'يسن الصلاة في النعلين في غير الفرش.', pages: [25], nl: 'Wijk af van de joden, want zij bidden niet in hun sandalen en schoenen', nlNote: 'Bidden in sandalen is sunna, behalve op vloerkleden.' },
  { narrator: 'أنس بن مالك', text: 'كان خاتم النبي ﷺ من ورق، وكان فصه حبشيا', takhrij: 'رواه مسلم', note: 'الورق: الفضة.', pages: [25], nl: 'De ring van de Profeet ﷺ was van zilver, en de steen was Abessijns', nlNote: 'Wariq is zilver.' },
  { narrator: 'أنس بن مالك', text: 'لما أراد أن يكتب إلى العجم قيل له: إن العجم لا يقبلون إلا كتابا عليه خاتم، فاصطنع خاتما، فكأني أنظر إلى بياضه في كفه', takhrij: 'متفق عليه', note: 'سبب اتخاذه الخاتم.', pages: [25], nl: 'Toen hij aan de niet-Arabieren wilde schrijven, werd hem gezegd: zij accepteren alleen een brief met een zegel. Dus liet hij een ring maken; het is alsof ik de witte glans ervan nog in zijn hand zie', nlNote: 'De reden dat hij een ring nam.' },
  { narrator: 'أنس بن مالك', text: 'كان نقش خاتم رسول الله ﷺ: محمد سطر، ورسول سطر، والله سطر', takhrij: 'رواه البخاري', note: 'من قسم «للاطلاع فقط».', pages: [26], nl: 'De inscriptie van de ring van de Boodschapper van Allah ﷺ was: "Muḥammad" op één regel, "Boodschapper" op één regel en "Allah" op één regel', nlNote: 'Uit een deel dat alleen ter kennisname is.' },
  { narrator: 'عبد الله بن عمر', text: 'اتخذ رسول الله ﷺ خاتما من ورق، فكان في يده، ثم في يد أبي بكر، ثم عمر، ثم عثمان، حتى وقع بعد في بئر أريس، نقشه: محمد رسول الله', takhrij: 'متفق عليه', note: 'من قسم «للاطلاع فقط».', pages: [26], nl: 'De Boodschapper van Allah ﷺ nam een zilveren ring; die was aan zijn hand, daarna aan de hand van Abū Bakr, toen ʿUmar, toen ʿUthmān, tot hij later in de put van Arīs viel. De inscriptie was: Muḥammad, Boodschapper van Allah', nlNote: 'Uit een deel dat alleen ter kennisname is.' },
  { narrator: 'علي بن أبي طالب', text: 'أن النبي ﷺ كان يلبس خاتمه في يمينه', takhrij: 'النسائي وابن ماجه وصححه الألباني', note: 'من قسم «للاطلاع فقط».', pages: [26], nl: 'De Profeet ﷺ droeg zijn ring aan zijn rechterhand', nlNote: 'Uit een deel dat alleen ter kennisname is.' },
  { narrator: 'جابر بن عبد الله', text: 'دخل النبي ﷺ مكة يوم الفتح وعليه عمامة سوداء', takhrij: 'رواه مسلم', note: '', pages: [26], nl: 'De Profeet ﷺ trok Mekka binnen op de dag van de verovering met een zwarte tulband', nlNote: '' },
  { narrator: 'عبد الله بن عمر', text: 'كان النبي ﷺ إذا اعتم سدل عمامته بين كتفيه', takhrij: 'الترمذي وحسنه', note: 'سدل عمامته: أرخى طرفها الذي يسمى الذؤابة والعذبة.', pages: [27], nl: 'Als de Profeet ﷺ een tulband omdeed, liet hij het uiteinde tussen zijn schouders hangen', nlNote: 'Het afhangende uiteinde heet dhuʾāba of ʿadhaba.' },
  { narrator: 'عبيد بن خالد المحاربي', text: 'بينا أنا أمشي بالمدينة إذا إنسان خلفي يقول: «ارفع إزارك فإنه أتقى وأبقى»، فإذا هو رسول الله ﷺ، فقلت: إنما هي بردة ملحاء، قال: «أما لك في أسوة؟!» فنظرت فإذا إزاره إلى نصف ساقيه', takhrij: 'النسائي وصححه الألباني', note: 'بردة ملحاء: فيها خطوط سود وبيض.', pages: [27], nl: 'Terwijl ik in Medina liep, zei iemand achter mij: "Trek je onderkleed op, dat is godvrezender en het blijft langer goed." Het was de Boodschapper van Allah ﷺ. Ik zei: "Het is maar een gestreept kleed." Hij zei: "Heb je aan mij geen voorbeeld?" Ik keek, en zijn onderkleed kwam tot halverwege zijn schenen', nlNote: 'Een eenvoudig zwart-wit gestreept kleed.' },
  { narrator: 'حذيفة بن اليمان', text: 'أخذ رسول الله ﷺ بعضلة ساقي أو ساقه فقال: «هذا موضع الإزار، فإن أبيت فأسفل، فإن أبيت فلا حق للإزار في الكعبين»', takhrij: 'الترمذي وصححه', note: '', pages: [27], nl: 'De Boodschapper van Allah ﷺ pakte mijn kuit (of de zijne) en zei: "Dit is de plaats van het onderkleed; wil je dat niet, dan lager; wil je dat niet, dan heeft het onderkleed geen recht op de enkels."', nlNote: '' },
  { narrator: 'أبو ذر', text: 'ثلاثة لا يكلمهم الله يوم القيامة ولا ينظر إليهم ولا يزكيهم ولهم عذاب أليم... المسبل، والمنان، والمنفق سلعته بالحلف الكاذب أو الفاجر', takhrij: 'رواه مسلم', note: 'في تحريم الإسبال.', pages: [28], nl: 'Drie mensen spreekt Allah op de Opstandingsdag niet aan, kijkt Hij niet aan en zuivert Hij niet, en voor hen is er een pijnlijke straf... wie zijn kleed laat slepen, wie zijn gunsten verwijt, en wie zijn waar verkoopt met een valse eed', nlNote: 'Over het verbod om kleding over de enkels te laten hangen.' },
  { narrator: 'أبو هريرة', text: 'ما أسفل من الكعبين من الإزار في النار', takhrij: 'رواه البخاري', note: '', pages: [28], nl: 'Wat van het onderkleed onder de enkels komt, is in het Vuur', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'إزرة المسلم إلى نصف الساق، ولا حرج -أو لا جناح- فيما بينه وبين الكعبين، وما كان أسفل من الكعبين فهو في النار', takhrij: 'أبو داود وصححه الألباني', note: '', pages: [28], nl: 'Het onderkleed van de moslim komt tot halverwege de scheen, en tussen daar en de enkels is geen bezwaar; wat onder de enkels komt, is in het Vuur', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كان رسول الله ﷺ ربعة ليس بالطويل ولا بالقصير... إذا مشى يتكفأ', takhrij: 'الترمذي وصححه الألباني', note: 'يتكفأ: يتمايل إلى قدام.', pages: [29], nl: 'De Boodschapper van Allah ﷺ was van gemiddelde lengte, niet lang en niet kort... als hij liep, boog hij licht voorover', nlNote: 'Hij helde iets naar voren bij het lopen.' },
  { narrator: 'علي بن أبي طالب', text: 'كان رسول الله ﷺ إذا مشى كأنما ينحدر من صبب', takhrij: 'عند أحمد وحسنه الأرناؤوط', note: 'الصبب: الموضع المنحدر، دليل على سرعة مشيه.', pages: [29], nl: 'Als de Boodschapper van Allah ﷺ liep, was het alsof hij een helling afdaalde', nlNote: 'Een aanwijzing dat hij vlot liep.' },
  { narrator: 'قيلة بنت مخرمة', text: 'أنها رأت رسول الله ﷺ في المسجد وهو قاعد القرفصاء', takhrij: 'أبو داود وحسنه الألباني', note: '', pages: [29], nl: 'Zij zag de Boodschapper van Allah ﷺ in de moskee zitten in de qurfuṣāʾ-houding', nlNote: '' },
  { narrator: 'عباد بن تميم عن عمه', text: 'أنه رأى رسول الله ﷺ مستلقيا في المسجد واضعا إحدى رجليه على الأخرى', takhrij: 'متفق عليه', note: 'وحمل العلماء أحاديث النهي على حالة تظهر فيها العورة.', pages: [29], nl: 'Hij zag de Boodschapper van Allah ﷺ op zijn rug liggen in de moskee, met het ene been over het andere', nlNote: 'De geleerden betrekken de verboden hierop op een houding waarbij de ʿawra zichtbaar wordt.' },
  { narrator: 'أنس بن مالك', text: 'رأيت النبي ﷺ مقعيا يأكل تمرا', takhrij: 'رواه مسلم', note: 'الإقعاء: أن ينصب قدميه ويجلس على عقبيه.', pages: [30], nl: 'Ik zag de Profeet ﷺ dadels eten, gehurkt zittend', nlNote: 'Met de voeten rechtop, zittend op de hielen.' },
  { narrator: 'أبو جحيفة', text: 'لا آكل متكئا', takhrij: 'رواه البخاري', note: '', pages: [30], nl: 'Ik eet niet leunend', nlNote: '' },
  { narrator: 'جابر بن سمرة', text: 'رأيت النبي ﷺ متكئا على وسادة على يساره', takhrij: 'أبو داود والترمذي وصححه الألباني', note: '', pages: [31], nl: 'Ik zag de Profeet ﷺ leunen op een kussen aan zijn linkerkant', nlNote: '' },
  { narrator: 'أبو بكرة', text: '«ألا أنبئكم بأكبر الكبائر؟» قالوا: بلى، قال: «الإشراك بالله وعقوق الوالدين»، وجلس وكان متكئا فقال: «ألا وشهادة الزور أو قول الزور»، فما زال يقولها حتى قلنا: ليته سكت', takhrij: 'متفق عليه', note: 'من رواية عبد الرحمن بن أبي بكرة عن أبيه.', pages: [31], nl: '"Zal ik jullie niet vertellen wat de grootste van de grote zonden zijn?" Zij zeiden: "Zeker." Hij zei: "Iets aan Allah toevoegen en ongehoorzaamheid aan de ouders." Hij leunde, ging rechtop zitten en zei: "En valse getuigenis, of valse woorden." Hij bleef het herhalen tot wij zeiden: hadden we maar dat hij zweeg', nlNote: 'Via ʿAbd ar-Raḥmān ibn Abī Bakra van zijn vader.' },
  { narrator: 'عبد الله بن بسر', text: 'أهديت للنبي ﷺ شاة فجثا على ركبتيه يأكل، فقال أعرابي: ما هذه الجلسة؟! فقال: «إن الله جعلني عبدا كريما ولم يجعلني جبارا عنيدا»', takhrij: 'أبو داود وابن ماجه وصححه الألباني', note: '', pages: [31], nl: 'Er werd de Profeet ﷺ een schaap geschonken en hij at, geknield op zijn knieën. Een bedoeïen zei: "Wat is dit voor een zithouding?" Hij zei: "Allah heeft mij een edele dienaar gemaakt, geen koppige tiran."', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'ما مسست حريرا ولا ديباجا ألين من كف النبي ﷺ، ولا شممت ريحا قط أو عرفا قط أطيب من ريح أو عرف النبي ﷺ', takhrij: 'البخاري ومسلم', note: '', pages: [31], nl: 'Ik heb nooit zijde of brokaat aangeraakt die zachter was dan de hand van de Profeet ﷺ, en nooit een geur geroken die heerlijker was dan de geur van de Profeet ﷺ', nlNote: '' },
  { narrator: 'جابر بن سمرة', text: 'صليت مع رسول الله ﷺ ثم خرج إلى أهله... فجعل يمسح خدي أحدهم واحدا واحدا، وأما أنا فمسح خدي، فوجدت ليده بردا أو ريحا كأنما أخرجها من جؤنة عطار', takhrij: 'رواه مسلم', note: 'جؤنة العطار: ما يعد العطار فيها الطيب.', pages: [31], nl: 'Ik bad met de Boodschapper van Allah ﷺ; toen ging hij naar zijn familie... hij streek de kinderen een voor een over de wangen, en ook over mijn wangen. Ik voelde een koelte of geur aan zijn hand, alsof hij die uit het kistje van een parfumverkoper haalde', nlNote: 'Het kistje waarin de parfumverkoper zijn geuren bewaart.' },
  { narrator: 'أنس بن مالك', text: 'دخل علينا النبي ﷺ فقال عندنا فعرق، وجاءت أمي بقارورة فجعلت تسلت العرق فيها، فاستيقظ فقال: «يا أم سليم ما هذا الذي تصنعين؟» قالت: هذا عرقك نجعله في طيبنا وهو من أطيب الطيب', takhrij: 'رواه مسلم', note: 'قال عندنا: نام وقت القيلولة.', pages: [32], nl: 'De Profeet ﷺ kwam bij ons en hield zijn middagslaap bij ons; hij zweette, en mijn moeder kwam met een flesje en ving het zweet daarin op. Hij werd wakker en zei: "Umm Sulaym, wat doe je?" Zij zei: "Dit is uw zweet; wij doen het in ons parfum, en het is het heerlijkste parfum."', nlNote: 'Hij hield zijn middagslaap bij hen.' },
  { narrator: 'أنس بن مالك', text: 'كان رسول الله ﷺ إذا مر في طريق من طرق المدينة وجد منه رائحة المسك، فيقال: مر رسول الله ﷺ', takhrij: 'رواه أبو يعلى والبزار وصحح إسناده ابن حجر', note: '', pages: [33], nl: 'Als de Boodschapper van Allah ﷺ door een straat van Medina liep, rook men muskus, en dan zei men: de Boodschapper van Allah ﷺ is hier langsgekomen', nlNote: '' },
  { narrator: '', text: 'أيما امرأة استعطرت فمرت على قوم ليجدوا من ريحها فهي زانية', takhrij: 'النسائي وحسنه الألباني', note: 'في تحريم خروج المرأة متعطرة بين الرجال.', pages: [33], nl: 'Elke vrouw die zich parfumeert en langs mensen loopt zodat zij haar geur ruiken, is een overspelige', nlNote: 'Over het verbod voor een vrouw om geparfumeerd tussen mannen te gaan.' },
  { narrator: 'جبير بن مطعم', text: 'إن لي أسماء: أنا محمد، وأنا أحمد، وأنا الماحي الذي يمحو الله بي الكفر، وأنا الحاشر الذي يحشر الناس على قدمي، وأنا العاقب الذي ليس بعده نبي', takhrij: 'متفق عليه', note: '', pages: [34], nl: 'Ik heb namen: ik ben Muḥammad, ik ben Aḥmad, ik ben al-Māḥī, door wie Allah het ongeloof uitwist, ik ben al-Ḥāshir, achter wie de mensen verzameld worden, en ik ben al-ʿĀqib, na wie geen profeet komt', nlNote: '' },
  { narrator: '', text: 'أنا أول من تنشق عنه الأرض', takhrij: 'أخرجه البخاري', note: 'في معنى «الحاشر».', pages: [34], nl: 'Ik ben de eerste voor wie de aarde opengaat', nlNote: 'Ter uitleg van al-Ḥāshir.' },
  { narrator: 'حذيفة بن اليمان', text: 'أنا محمد، وأنا أحمد، وأنا نبي الرحمة، ونبي التوبة، وأنا المقفي، وأنا الحاشر، ونبي الملاحم', takhrij: 'أخرجه الترمذي في الشمائل وحسنه الألباني', note: '', pages: [35], nl: 'Ik ben Muḥammad, ik ben Aḥmad, ik ben de profeet van de barmhartigheid en de profeet van het berouw, ik ben al-Muqaffī, ik ben al-Ḥāshir, en de profeet van de grote veldslagen', nlNote: '' }
]

const TAKHRIJ_NL = {
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'البخاري ومسلم واللفظ للبخاري': 'al-Bukhārī en Muslim, in de bewoording van al-Bukhārī',
  'في سنن أبي داود وصححه الألباني': 'Sunan Abī Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'رواه مسلم': 'Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه البخاري': 'al-Bukhārī',
  'النسائي وابن ماجه وصححه الألباني': 'an-Nasāʾī en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'النسائي وصححه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وصححه': 'at-Tirmidhī, die hem ṣaḥīḥ noemde',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'عند أحمد وحسنه الأرناؤوط': 'Aḥmad; al-Arnaʾūṭ noemde hem ḥasan',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan',
  'أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وابن ماجه وصححه الألباني': 'Abū Dāwūd en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'رواه أبو يعلى والبزار وصحح إسناده ابن حجر': 'Abū Yaʿlā en al-Bazzār; Ibn Ḥajar noemde de keten betrouwbaar',
  'النسائي وحسنه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ḥasan',
  'أخرجه البخاري': 'al-Bukhārī',
  'أخرجه الترمذي في الشمائل وحسنه الألباني': 'at-Tirmidhī in ash-Shamāʾil; al-Albānī noemde hem ḥasan'
}
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'شداد بن أوس': 'Shaddād ibn Aws', 'أنس بن مالك': 'Anas ibn Mālik', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'عبيد بن خالد المحاربي': 'ʿUbayd ibn Khālid al-Muḥāribī', 'حذيفة بن اليمان': 'Ḥudhayfa ibn al-Yamān', 'أبو ذر': 'Abū Dharr', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'قيلة بنت مخرمة': 'Qayla bint Makhrama', 'عباد بن تميم عن عمه': 'ʿAbbād ibn Tamīm, van zijn oom', 'أبو جحيفة': 'Abū Juḥayfa', 'جابر بن سمرة': 'Jābir ibn Samura', 'أبو بكرة': 'Abū Bakra', 'عبد الله بن بسر': 'ʿAbd Allāh ibn Busr', 'جبير بن مطعم': 'Jubayr ibn Muṭʿim' }

const PERSONS = [
  ['al-mughira-ibn-shuba', 'text', [24], 'روى أن دحية الكلبي أهدى للنبي ﷺ خفين فلبسهما.', 'Overleverde dat Diḥya al-Kalbī de Profeet ﷺ leren sokken gaf, die hij droeg.'],
  ['anas-ibn-malik', 'text', [24, 25, 26, 29, 30, 31, 32, 33], 'روى صفة نعله وخاتمه ومشيته، ولين كفه وطيب ريحه.', 'Overleveraar over zijn sandalen, ring en manier van lopen, en over de zachtheid van zijn hand en zijn geur.'],
  ['ibn-umar', 'text', [24, 26, 27], 'كان يلبس النعال السبتية اتباعًا، وروى خبر الخاتم وسدل العمامة.', 'Droeg leren sandalen zonder haar als navolging, en overleverde over de ring en de afhangende tulband.'],
  ['aisha', 'text', [24], 'وصفته ﷺ: يخصف نعله ويخيط ثوبه ويعمل في بيته.', 'Beschreef hem ﷺ: hij herstelde zijn sandalen, naaide zijn kleding en werkte in huis.'],
  ['abu-hurayra', 'text', [24, 25, 28], 'روى النهي عن المشي في نعل واحدة، والبداءة باليمين، ووعيد الإسبال.', 'Overleveraar van het verbod op één sandaal lopen, beginnen met rechts, en de waarschuwing over slepende kleding.'],
  ['jabir-ibn-abdallah', 'text', [24, 26, 29, 32], 'روى النهي عن الأكل بالشمال، ودخوله مكة بعمامة سوداء.', 'Overleveraar van het verbod om met links te eten, en van zijn intocht in Mekka met een zwarte tulband.'],
  ['ibn-masud', 'text', [25], 'كان صاحب نعلي النبي ﷺ وسواكه ووساده وطهوره.', 'Zorgde voor de sandalen, de miswāk, het kussen en het wasgerei van de Profeet ﷺ.'],
  ['an-nawawi', 'text', [25, 27, 29, 30], 'نقل الإجماع على جواز خاتم الفضة للرجال، وشرح أحاديث العمامة والاستلقاء والاتكاء.', 'Noemde de consensus dat een zilveren ring voor mannen mag, en legde de hadith over tulband, liggen en leunen uit.'],
  ['ali-ibn-abi-talib', 'text', [26, 29], 'روى لبسه الخاتم في يمينه، ومشيه كأنما ينحدر من صبب.', 'Overleverde dat hij de ring rechts droeg en liep alsof hij een helling afdaalde.'],
  ['hudhayfa-ibn-al-yaman', 'text', [27, 35], 'روى موضع الإزار، وحديث أسماء النبي ﷺ.', 'Overleveraar over de plaats van het onderkleed en over de namen van de Profeet ﷺ.'],
  ['abu-dharr', 'text', [28], 'روى «ثلاثة لا يكلمهم الله» ومنهم المسبل.', 'Overleveraar van "drie die Allah niet aanspreekt", onder wie wie zijn kleed laat slepen.'],
  ['abu-said-al-khudri', 'text', [28], 'روى «إزرة المسلم إلى نصف الساق».', 'Overleveraar van "het onderkleed van de moslim komt tot halverwege de scheen".'],
  ['abu-bakr-ibn-al-arabi', 'text', [28], 'قال: لا يجوز للرجل أن يجاوز بثوبه كعبه ويقول: لا أجره خيلاء.', 'Zei: een man mag zijn kleed niet voorbij de enkel laten komen en zeggen: ik doe het niet uit hoogmoed.'],
  ['ibn-abbas', 'text', [29], 'وصف مشيه ﷺ مجتمعًا ليس فيه كسل.', 'Beschreef dat hij ﷺ geconcentreerd liep, zonder traagheid.'],
  ['ibn-al-qayyim', 'text', [29, 35], 'قال: أحسن المشيات مشية رسول الله ﷺ؛ وبين أن طه ويس ليسا من أسمائه.', 'Zei: de beste manier van lopen is die van de Boodschapper ﷺ; en legde uit dat Ṭā Hā en Yā Sīn niet tot zijn namen behoren.'],
  ['ibn-uthaymin', 'text', [30], 'شرح الإقعاء في الأكل.', 'Legde het gehurkt zitten bij het eten uit.'],
  ['ibn-hajar-al-asqalani', 'text', [30, 33], 'ذكر المستحب في جلسة الآكل، وصحح إسناد حديث رائحة المسك.', 'Noemde de aanbevolen zithouding bij het eten, en noemde de keten van de muskus-hadith betrouwbaar.'],
  ['abu-juhayfa', 'text', [30, 31], 'روى «لا آكل متكئًا»، ووجد يده أبرد من الثلج وأطيب من المسك.', 'Overleveraar van "ik eet niet leunend"; hij voelde dat zijn hand koeler was dan sneeuw en heerlijker rook dan muskus.'],
  ['jabir-ibn-samura', 'text', [31], 'رآه متكئًا على وسادة، ومسح النبي ﷺ خده.', 'Zag hem op een kussen leunen; de Profeet ﷺ streek over zijn wang.'],
  ['jubayr-ibn-mutim', 'text', [34], 'روى حديث «إن لي أسماء».', 'Overleveraar van "ik heb namen".'],
  ['al-albani', 'takhrij', [24, 25, 26, 27, 28, 29, 31, 33, 35], 'صحح أو حسن كثيرًا من الأحاديث في هذه الدروس.', 'Noemde veel hadith in deze lessen ṣaḥīḥ of ḥasan.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'الشمائل: النعل والخاتم والعمامة والمشية والطيب والأسماء',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'هديه ﷺ في النعل والخاتم والعمامة والإزار وتحريم الإسبال، وصفة مشيته وجلسته واتكائه، وطيب عرقه وحبه للطيب، وأسماؤه ومعانيها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'خمسة دروس من شمائله ﷺ.',
    root: { label: 'الشمائل', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'النعل والخاتم', sub: 'الدرس ٦', page: 24, children: ['لا يمش في نعل واحدة', 'البداءة باليمين', 'خاتم الفضة'] },
      { label: 'العمامة والإزار', sub: 'الدرس ٧', page: 26, children: ['عمامة سوداء', 'سنة عادة', 'تحريم الإسبال'] },
      { label: 'المشية والجلسة', sub: 'الدرس ٨', page: 29, children: ['يتكفأ', 'القرفصاء', 'لا آكل متكئًا'] },
      { label: 'العرق والطيب', sub: 'الدرس ٩', page: 31, children: ['أطيب من المسك', 'مواضع الطيب'] },
      { label: 'الأسماء', sub: 'الدرس ١٠', page: 34, children: ['محمد وأحمد', 'الماحي والحاشر والعاقب', 'ليس طه ويس'] }
    ]
  },
  points: [
    { text: 'السنة أن يبدأ باليمين في الانتعال وبالشمال في الخلع، ولا يمشي في نعل واحدة.', page: 25 },
    { text: 'خاتم الفضة للرجال مباح بالإجماع، والصحيح أنه مباح وليس سنة، لأنه اتخذه للختم لا للقربة.', page: 26 },
    { text: 'لبس العمامة سنة عادة لا سنة عبادة، فلم يلبسها تعبدًا ولا أمر بها.', page: 27 },
    { text: 'الإسبال محرم، ويزداد التحريم إذا كان للخيلاء، وموضع الإزار إلى نصف الساق.', page: 28 },
    { text: 'أحاديث النهي عن وضع إحدى الرجلين على الأخرى محمولة على حالة تظهر فيها العورة.', page: 29 },
    { text: 'معنى «لا آكل متكئًا»: لا آكل أكل من يريد الاستكثار متمكنًا، بل آكل قليلًا.', page: 30 },
    { text: 'التعطر ليس من الكبر، بل قد يكون مندوبًا، ولا يجوز للمرأة الخروج متعطرة بين الرجال.', page: 33 },
    { text: '«طه» و«يس» ليسا من أسماء النبي ﷺ، بل هما حروف مثل «الم» و«حم».', page: 35 }
  ],
  terms: [
    { term: 'القبال', translit: 'al-qibāl', meaning: 'زمام النعل: السير الذي بين الأصبعين.', explanation: '', notes: [], page: 24 },
    { term: 'النعال السبتية', translit: 'an-niʿāl as-sibtiyya', meaning: 'نعال لا شعر عليها من جلود البقر المدبوغة.', explanation: '', notes: [], page: 24 },
    { term: 'مخصوفتين', translit: 'makhṣūfatayn', meaning: 'مخروزتين أو مرقعتين.', explanation: '', notes: [], page: 24 },
    { term: 'الورق', translit: 'al-wariq', meaning: 'الفضة.', explanation: '', notes: [], page: 25 },
    { term: 'الذؤابة / العذبة', translit: 'adh-dhuʾāba / al-ʿadhaba', meaning: 'طرف العمامة المرخى.', explanation: '', notes: [], page: 27 },
    { term: 'بردة ملحاء', translit: 'burda malḥāʾ', meaning: 'بردة فيها خطوط سود وبيض من لباس الأعراب، ليست فاخرة.', explanation: '', notes: [], page: 27 },
    { term: 'الكعبان', translit: 'al-kaʿbān', meaning: 'العظمان الناتئان على جانبي الرجل.', explanation: '', notes: [], page: 28 },
    { term: 'يتكفأ', translit: 'yatakaffaʾ', meaning: 'يتمايل إلى قدام في مشيه.', explanation: '', notes: [], page: 29 },
    { term: 'الصبب', translit: 'aṣ-ṣabab', meaning: 'الموضع المنحدر.', explanation: '', notes: [], page: 29 },
    { term: 'القرفصاء', translit: 'al-qurfuṣāʾ', meaning: 'جلسة المحتبي: يقعد على أليتيه ويلصق فخذيه ببطنه ويضع يديه على ساقيه.', explanation: '', notes: [], page: 29 },
    { term: 'الإقعاء', translit: 'al-iqʿāʾ', meaning: 'أن ينصب قدميه ويجلس على عقبيه.', explanation: '', notes: [], page: 30 },
    { term: 'المتكئ', translit: 'al-muttakiʾ', meaning: 'المائل في قعوده على أحد شقيه، أو الجالس المتمكن.', explanation: 'للاتكاء في اللغة معنيان.', notes: [], page: 30 },
    { term: 'جؤنة العطار', translit: 'juʾnat al-ʿaṭṭār', meaning: 'ما يعد العطار فيها الطيب.', explanation: '', notes: [], page: 32 },
    { term: 'الماحي', translit: 'al-māḥī', meaning: 'الذي محا الله به الكفر.', explanation: '', notes: [], page: 34 },
    { term: 'الحاشر', translit: 'al-ḥāshir', meaning: 'الذي يحشر الناس على قدمه، أي بعده.', explanation: '', notes: [], page: 34 },
    { term: 'العاقب', translit: 'al-ʿāqib', meaning: 'الذي جاء عقب الأنبياء فلا نبي بعده.', explanation: '', notes: [], page: 35 },
    { term: 'المقفي', translit: 'al-muqaffī', meaning: 'المتبع لآثار من قبله من الأنبياء فكان آخرهم.', explanation: 'بفتح الفاء وكسرها.', notes: [], page: 35 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'أسماؤه ﷺ ومعانيها',
      intro: 'كما في الدرس العاشر.',
      columns: ['معناه'],
      rows: [
        { label: 'محمد', cells: ['كثير الخصال التي يحمد عليها'] },
        { label: 'أحمد', cells: ['أحمد الحامدين لربه'] },
        { label: 'الماحي', cells: ['محا الله به الكفر'] },
        { label: 'الحاشر', cells: ['يحشر الناس بعده'] },
        { label: 'العاقب', cells: ['لا نبي بعده'] },
        { label: 'نبي الرحمة', cells: ['أرسله الله رحمة'] },
        { label: 'نبي التوبة', cells: ['بهداه ينال الإنسان التوبة'] },
        { label: 'نبي الملاحم', cells: ['بعث بجهاد أعداء الله'] }
      ],
      page: 34
    },
    {
      type: 'compare',
      title: 'حدود الإزار',
      intro: 'كما في حديثي حذيفة وأبي سعيد.',
      columns: ['حكمه'],
      rows: [
        { label: 'إلى نصف الساق', cells: ['موضع الإزار'] },
        { label: 'بين نصف الساق والكعبين', cells: ['لا حرج'] },
        { label: 'أسفل من الكعبين', cells: ['في النار'] }
      ],
      page: 28
    }
  ],
  sections: [
    { title: 'تواضعه في نعله', text: 'كان يصلي في نعلين مخصوفتين، ووصفته عائشة بأنه يخصف نعله ويخيط ثوبه ويعمل في بيته.', page: 24 },
    { title: 'نقش الخاتم (للاطلاع فقط)', text: 'نقشه: محمد رسول الله، ثلاثة أسطر؛ وكان في يده ثم في يد أبي بكر وعمر وعثمان حتى وقع في بئر أريس، وكان يلبسه في يمينه.', more: FYI, page: 26 },
    { title: 'لبس السواد', text: 'قال النووي: فيه جواز لبس الثياب السود ولبسها في الخطبة، وإن كان الأبيض أفضل.', page: 27 },
    { title: 'مشيته مع أصحابه', text: 'قال ابن القيم: كانوا يمشون بين يديه وهو خلفهم، وكان يمشي حافيًا ومنتعلًا.', page: 29 },
    { title: 'المستحب في جلسة الآكل', text: 'قال الحافظ: أن يكون جاثيًا على ركبتيه وظهور قدميه، أو ينصب الرجل اليمنى ويجلس على اليسرى.', page: 30 },
    { title: 'مواضع يتأكد فيها الطيب', text: 'يوم الجمعة والعيدان والإحرام وحضور الجماعة وقراءة القرآن والعلم والذكر، ولكل من الزوجين عند المباشرة.', page: 33 },
    { title: 'ترك المباحات لأجل الرائحة', text: 'كان يكره أن توجد منه رائحة كريهة حتى ترك كثيرًا من المباحات كالثوم والبصل والكراث.', page: 33 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'سنة عادة وسنة عبادة', items: ['العمامة سنة عادة: لم يلبسها تعبدًا ولا أمر بها.', 'خاتم الفضة مباح وليس سنة: اتخذه للختم لا للقربة.'], page: 27, origin: 'boek' },
    { kind: 'opsomming', title: 'من هديه في النعل', items: ['لا يمشي في نعل واحدة', 'يبدأ باليمين في اللبس وبالشمال في الخلع', 'يصلي في نعليه في غير الفرش'], page: 25, origin: 'boek' },
    { kind: 'definitie', title: 'الاتكاء لغة', items: ['القعود مع تمايل معتمدًا على أحد الجانبين، وهو المشهور.', 'الجلوس متمكنًا.'], page: 30, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'لا يمشي المسلم في نعل واحدة، ويبدأ باليمين في الانتعال.',
    'خاتم الفضة مباح، والعمامة سنة عادة.',
    'الإسبال محرم، وموضع الإزار إلى نصف الساق.',
    'كان ﷺ يمشي متكفئًا كأنما ينحدر من صبب، ولا يأكل متكئًا.',
    'كان طيب الريح، ومن أسمائه محمد وأحمد والماحي والحاشر والعاقب.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'بأي رجل يبدأ في الانتعال؟', options: ['باليمين', 'بالشمال', 'لا فرق', 'بهما معًا'], answer: 0, explain: 'كما في حديث أبي هريرة.', page: 25 },
    { type: 'tf', q: 'لبس خاتم الفضة سنة للرجال يثاب عليها.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الصحيح أنه مباح، اتخذه للختم.', page: 26 },
    { type: 'mc', q: 'ما حكم لبس العمامة؟', options: ['سنة عادة', 'واجب', 'سنة عبادة مؤكدة', 'محرم'], answer: 0, explain: 'لم يلبسها تعبدًا ولا أمر بها.', page: 27 },
    { type: 'mc', q: 'ما حكم ما كان أسفل من الكعبين من الإزار؟', options: ['في النار', 'لا حرج فيه', 'مكروه فقط', 'مستحب'], answer: 0, explain: 'كما في حديثي أبي هريرة وأبي سعيد.', page: 28 },
    { type: 'tf', q: '«طه» و«يس» من أسماء النبي ﷺ الثابتة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لم يثبت ذلك في حديث صحيح ولا حسن.', page: 35 },
    { type: 'mc', q: 'ما معنى «العاقب»؟', options: ['الذي ليس بعده نبي', 'الذي يحشر الناس', 'الذي محا الله به الكفر', 'نبي الملاحم'], answer: 0, explain: 'كما في حديث جبير بن مطعم.', page: 34 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٢٨ و٣٦. نقش الخاتم (ص٢٦) في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'De eigenschappen: sandalen, ring, tulband, lopen, geur en namen',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Zijn gewoonte ﷺ met sandalen, ring, tulband en onderkleed, en het verbod op slepende kleding; hoe hij liep, zat en leunde; zijn heerlijke geur en zijn liefde voor parfum; en zijn namen en hun betekenis.',
  source: { ...source, label: 'Kitāb as-Sīra an-Nabawiyya (2): ash-Shamāʾil, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'Vijf lessen over zijn eigenschappen ﷺ.',
    root: { label: 'De eigenschappen', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Sandalen en ring', sub: 'les 6', page: 24, children: ['niet op één sandaal', 'met rechts beginnen', 'een zilveren ring'] },
      { label: 'Tulband en onderkleed', sub: 'les 7', page: 26, children: ['een zwarte tulband', 'gewoonte, geen aanbidding', 'verbod op slepen'] },
      { label: 'Lopen en zitten', sub: 'les 8', page: 29, children: ['licht voorover', 'qurfuṣāʾ', 'niet leunend eten'] },
      { label: 'Zweet en parfum', sub: 'les 9', page: 31, children: ['heerlijker dan muskus', 'wanneer parfum'] },
      { label: 'Zijn namen', sub: 'les 10', page: 34, children: ['Muḥammad en Aḥmad', 'al-Māḥī, al-Ḥāshir, al-ʿĀqib', 'niet Ṭā Hā en Yā Sīn'] }
    ]
  },
  points: [
    { text: 'De sunna is met rechts beginnen bij het aantrekken van sandalen en met links bij het uittrekken, en niet op één sandaal lopen.', page: 25 },
    { text: 'Een zilveren ring voor mannen mag volgens consensus; volgens de juiste mening is hij toegestaan maar geen sunna, omdat hij hem als zegel nam en niet als daad van nabijheid.', page: 26 },
    { text: 'De tulband is een gewoonte-sunna, geen aanbiddings-sunna: hij droeg hem niet als aanbidding en beval hem niet.', page: 27 },
    { text: 'Kleding over de enkels laten hangen is verboden, en nog sterker uit hoogmoed; het onderkleed hoort tot halverwege de scheen.', page: 28 },
    { text: 'De verboden om een been over het andere te leggen gaan over een houding waarbij de ʿawra zichtbaar wordt.', page: 29 },
    { text: '"Ik eet niet leunend" betekent: ik eet niet als iemand die veel wil eten en daarvoor goed gaat zitten, maar weinig.', page: 30 },
    { text: 'Parfum is geen hoogmoed en kan zelfs aanbevolen zijn; een vrouw mag niet geparfumeerd tussen mannen gaan.', page: 33 },
    { text: 'Ṭā Hā en Yā Sīn zijn geen namen van de Profeet ﷺ, maar letters zoals Alif Lām Mīm en Ḥā Mīm.', page: 35 }
  ],
  terms: [
    { term: 'القبال', translit: 'al-qibāl', meaning: 'De riem van de sandaal tussen de tenen.', explanation: '', notes: [], page: 24 },
    { term: 'النعال السبتية', translit: 'an-niʿāl as-sibtiyya', meaning: 'Sandalen van gelooide koeienhuid zonder haar.', explanation: '', notes: [], page: 24 },
    { term: 'مخصوفتين', translit: 'makhṣūfatayn', meaning: 'Genaaid of verstelde (sandalen).', explanation: '', notes: [], page: 24 },
    { term: 'الورق', translit: 'al-wariq', meaning: 'Zilver.', explanation: '', notes: [], page: 25 },
    { term: 'الذؤابة / العذبة', translit: 'adh-dhuʾāba / al-ʿadhaba', meaning: 'Het afhangende uiteinde van de tulband.', explanation: '', notes: [], page: 27 },
    { term: 'بردة ملحاء', translit: 'burda malḥāʾ', meaning: 'Een eenvoudig zwart-wit gestreept kleed, gedragen door bedoeïenen.', explanation: '', notes: [], page: 27 },
    { term: 'الكعبان', translit: 'al-kaʿbān', meaning: 'De twee uitstekende enkelbotten aan weerszijden van de voet.', explanation: '', notes: [], page: 28 },
    { term: 'يتكفأ', translit: 'yatakaffaʾ', meaning: 'Licht voorover hellen bij het lopen.', explanation: '', notes: [], page: 29 },
    { term: 'الصبب', translit: 'aṣ-ṣabab', meaning: 'Een helling.', explanation: '', notes: [], page: 29 },
    { term: 'القرفصاء', translit: 'al-qurfuṣāʾ', meaning: 'Zitten op het zitvlak met de dijen tegen de buik en de handen om de schenen.', explanation: '', notes: [], page: 29 },
    { term: 'الإقعاء', translit: 'al-iqʿāʾ', meaning: 'Gehurkt zitten: de voeten rechtop en zitten op de hielen.', explanation: '', notes: [], page: 30 },
    { term: 'المتكئ', translit: 'al-muttakiʾ', meaning: 'Wie zittend op één zij leunt, of wie stevig en gemakkelijk zit.', explanation: 'Leunen heeft in de taal twee betekenissen.', notes: [], page: 30 },
    { term: 'جؤنة العطار', translit: 'juʾnat al-ʿaṭṭār', meaning: 'Het kistje waarin de parfumverkoper zijn geuren bewaart.', explanation: '', notes: [], page: 32 },
    { term: 'الماحي', translit: 'al-māḥī', meaning: 'Hij door wie Allah het ongeloof uitwiste.', explanation: '', notes: [], page: 34 },
    { term: 'الحاشر', translit: 'al-ḥāshir', meaning: 'Hij achter wie de mensen verzameld worden.', explanation: '', notes: [], page: 34 },
    { term: 'العاقب', translit: 'al-ʿāqib', meaning: 'Hij die na de profeten kwam; na hem komt geen profeet.', explanation: '', notes: [], page: 35 },
    { term: 'المقفي', translit: 'al-muqaffī', meaning: 'Hij die de profeten vóór hem volgde en de laatste van hen was.', explanation: 'Met a of i op de f.', notes: [], page: 35 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Zijn namen ﷺ en hun betekenis',
      intro: 'Zoals in les 10.',
      columns: ['Betekenis'],
      rows: [
        { label: 'Muḥammad', cells: ['met veel eigenschappen waarvoor hij geprezen wordt'] },
        { label: 'Aḥmad', cells: ['wie zijn Heer het meest prijst'] },
        { label: 'al-Māḥī', cells: ['door hem wiste Allah het ongeloof uit'] },
        { label: 'al-Ḥāshir', cells: ['de mensen worden na hem verzameld'] },
        { label: 'al-ʿĀqib', cells: ['na hem komt geen profeet'] },
        { label: 'Profeet van de barmhartigheid', cells: ['Allah zond hem als barmhartigheid'] },
        { label: 'Profeet van het berouw', cells: ['door zijn leiding komt de mens tot berouw'] },
        { label: 'Profeet van de grote veldslagen', cells: ['gezonden met de strijd tegen de vijanden van Allah'] }
      ],
      page: 34
    },
    {
      type: 'compare',
      title: 'Grenzen van het onderkleed',
      intro: 'Zoals in de hadith van Ḥudhayfa en Abū Saʿīd.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Tot halverwege de scheen', cells: ['de plaats van het onderkleed'] },
        { label: 'Tussen halverwege en de enkels', cells: ['geen bezwaar'] },
        { label: 'Onder de enkels', cells: ['in het Vuur'] }
      ],
      page: 28
    }
  ],
  sections: [
    { title: 'Nederigheid in zijn sandalen', text: 'Hij bad in verstelde sandalen, en ʿĀʾisha beschreef dat hij zijn sandalen herstelde, zijn kleding naaide en in huis werkte.', page: 24 },
    { title: 'De inscriptie van de ring (alleen ter kennisname)', text: 'De inscriptie was "Muḥammad, Boodschapper van Allah" op drie regels; de ring ging over op Abū Bakr, ʿUmar en ʿUthmān tot hij in de put van Arīs viel; hij droeg hem rechts.', more: FYI_NL, page: 26 },
    { title: 'Zwart dragen', text: 'An-Nawawī zei: hieruit blijkt dat zwarte kleding mag, ook tijdens de preek, al is wit beter.', page: 27 },
    { title: 'Lopen met zijn metgezellen', text: 'Ibn al-Qayyim zei: zij liepen voor hem en hij achter hen; hij liep op blote voeten en met sandalen.', page: 29 },
    { title: 'De aanbevolen houding bij het eten', text: 'Al-Ḥāfiẓ zei: geknield op de knieën en de wreef, of met de rechtervoet rechtop zittend op de linker.', page: 30 },
    { title: 'Wanneer parfum extra gewenst is', text: 'Op vrijdag, de twee feesten, bij iḥrām, bij het gezamenlijk gebed, bij Koran, kennis en gedenken, en voor man en vrouw bij intimiteit.', page: 33 },
    { title: 'Toegestane dingen laten vanwege de geur', text: 'Hij wilde niet dat er een onaangename geur van hem uitging, en liet daarom veel toegestane dingen zoals knoflook, ui en prei.', page: 33 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'Gewoonte-sunna en aanbiddings-sunna', items: ['De tulband is een gewoonte-sunna: hij droeg hem niet als aanbidding en beval hem niet.', 'Een zilveren ring is toegestaan en geen sunna: hij nam hem als zegel, niet als daad van nabijheid.'], page: 27, origin: 'boek' },
    { kind: 'opsomming', title: 'Zijn gewoonte met sandalen', items: ['niet op één sandaal lopen', 'met rechts aantrekken en met links uittrekken', 'in sandalen bidden, behalve op vloerkleden'], page: 25, origin: 'boek' },
    { kind: 'definitie', title: 'Leunen in de taal', items: ['Zittend op één zij leunen; dat is de bekende betekenis.', 'Stevig en gemakkelijk zitten.'], page: 30, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Een moslim loopt niet op één sandaal en begint met rechts.',
    'Een zilveren ring is toegestaan; de tulband is een gewoonte-sunna.',
    'Slepende kleding is verboden; het onderkleed hoort tot halverwege de scheen.',
    'Hij ﷺ liep licht voorover, alsof hij een helling afdaalde, en at niet leunend.',
    'Hij rook heerlijk; tot zijn namen horen Muḥammad, Aḥmad, al-Māḥī, al-Ḥāshir en al-ʿĀqib.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Met welke voet begin je bij het aantrekken van sandalen?', options: ['rechts', 'links', 'maakt niet uit', 'beide tegelijk'], answer: 0, explain: 'Zoals in de hadith van Abū Hurayra.', page: 25 },
    { type: 'tf', q: 'Een zilveren ring dragen is voor mannen een sunna waarvoor je beloond wordt.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Volgens de juiste mening is het toegestaan; hij nam hem als zegel.', page: 26 },
    { type: 'mc', q: 'Wat is het oordeel over het dragen van een tulband?', options: ['een gewoonte-sunna', 'verplicht', 'een sterk aanbevolen aanbidding', 'verboden'], answer: 0, explain: 'Hij droeg hem niet als aanbidding en beval hem niet.', page: 27 },
    { type: 'mc', q: 'Wat geldt voor het deel van het onderkleed onder de enkels?', options: ['het is in het Vuur', 'geen bezwaar', 'alleen afgeraden', 'aanbevolen'], answer: 0, explain: 'Zoals in de hadith van Abū Hurayra en Abū Saʿīd.', page: 28 },
    { type: 'tf', q: 'Ṭā Hā en Yā Sīn zijn bevestigde namen van de Profeet ﷺ.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat staat in geen betrouwbare of goede hadith.', page: 35 },
    { type: 'mc', q: 'Wat betekent al-ʿĀqib?', options: ['na hem komt geen profeet', 'achter wie de mensen verzameld worden', 'door wie het ongeloof werd uitgewist', 'de profeet van de veldslagen'], answer: 0, explain: 'Zoals in de hadith van Jubayr ibn Muṭʿim.', page: 34 }
  ]),
  note: 'Oefeningen van het boek op p. 28 en 36. De inscriptie van de ring (p. 26) staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-seerah', chapter: '6', unit: 2, ar, nl }
