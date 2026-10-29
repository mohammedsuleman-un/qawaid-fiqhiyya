// Hoofdstukkaart bij الفقه (١), eenheid 2: الوضوء وأحكامه (lessen 5–14, boek p. 23–58).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 27, 40, 46, 47 en 57 en delen van p. 30 en 56 zijn in
// het boek "alleen ter kennisname". Niet in het hadith-tabblad: «ويل للأعقاب من النار» (p. 35, zonder
// bron in het boek), en twee berichten die nog gecontroleerd moeten worden: ʿAmr ibn Umayya over de
// tulband (p. 44, toeschrijving aan Muslim) en de hadith van Jābir over het verband (p. 45, deels zwak).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (١)، سلسلة زاد العلمية',
  pages: '23–58',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'من استجمر فليوتر', takhrij: 'متفق عليه', note: 'سنية الإيتار في الاستجمار.', pages: [25], nl: 'Wie zich met stenen reinigt, laat hij een oneven aantal gebruiken', nlNote: 'Een oneven aantal bij istijmār is soenna.' },
  { narrator: 'أنس بن مالك', text: 'اللهم إني أعوذ بك من الخبث والخبائث', takhrij: 'أخرجه الشيخان', note: 'ما يقال عند دخول الخلاء.', pages: [26], nl: 'O Allah, ik zoek bij U bescherming tegen de mannelijke en vrouwelijke kwade geesten', nlNote: 'Wat je zegt bij het binnengaan van het toilet.' },
  { narrator: '', text: 'إذا بال أحدكم فلا يمس ذكره بيمينه، وإذا أتى الخلاء فلا يتمسح بيمينه', takhrij: 'متفق عليه', note: '', pages: [26], nl: 'Als een van jullie urineert, laat hij zijn geslachtsdeel niet met zijn rechterhand aanraken, en laat hij zich op het toilet niet met zijn rechterhand afvegen', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'اتقوا اللعانين. قالوا: وما اللعانان؟ قال: الذي يتخلى في طريق الناس أو في ظلهم', takhrij: 'رواه مسلم', note: FYI, pages: [27], nl: 'Mijd de twee dingen die vervloeking oproepen. Zij vroegen: wat zijn die? Hij zei: je behoefte doen op de weg van de mensen of in hun schaduw', nlNote: FYI_NL },
  { narrator: 'أبو أيوب الأنصاري', text: 'إذا أتيتم الغائط فلا تستقبلوا القبلة ولا تستدبروها ولكن شرقوا أو غربوا', takhrij: 'متفق عليه', note: 'في الفضاء بلا حائل. ' + FYI, pages: [27], nl: 'Als jullie je behoefte gaan doen, keer je dan niet naar de qibla en niet met je rug ernaar, maar richt je naar het oosten of westen', nlNote: 'In open terrein zonder afscherming. ' + FYI_NL },
  { narrator: 'عبد الله بن عمر', text: 'رقيت على بيت أختي حفصة فرأيت رسول الله ﷺ قاعدًا لحاجته مستقبل الشام مستدبر القبلة', takhrij: 'رواه مسلم', note: 'في البنيان. ' + FYI, pages: [27], nl: 'Ik klom op het huis van mijn zus Ḥafṣa en zag de Boodschapper van Allah ﷺ zijn behoefte doen, met zijn gezicht naar Syrië en zijn rug naar de qibla', nlNote: 'In een gebouw. ' + FYI_NL },
  { narrator: '', text: 'السواك مطهرة للفم مرضاة للرب', takhrij: 'رواه النسائي وصححه الألباني', note: '', pages: [30], nl: 'De siwāk reinigt de mond en behaagt de Heer', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'خمس من الفطرة: الختان، والاستحداد، ونتف الإبط، وتقليم الأظفار، وقص الشارب', takhrij: 'متفق عليه', note: '', pages: [31], nl: 'Vijf dingen horen bij de fiṭra: besnijdenis, het schaamhaar scheren, het okselhaar uittrekken, de nagels knippen en de snor bijknippen', nlNote: '' },
  { narrator: 'عائشة', text: 'عشر من الفطرة: قص الشارب، وإعفاء اللحية، والسواك، واستنشاق الماء، وقص الأظفار، وغسل البراجم، ونتف الإبط، وحلق العانة، وانتقاص الماء', takhrij: 'رواه مسلم', note: 'قال مصعب بن شيبة: ونسيت العاشرة إلا أن تكون المضمضة.', pages: [31], nl: 'Tien dingen horen bij de fiṭra: de snor bijknippen, de baard laten staan, de siwāk, water in de neus opsnuiven, de nagels knippen, de knokkels wassen, het okselhaar uittrekken, het schaamhaar scheren en reinigen met water', nlNote: 'De overleveraar vergat het tiende; misschien was het de mond spoelen.' },
  { narrator: 'عبد الله بن زيد بن عاصم', text: 'ثم مسح رأسه بيديه فأقبل بهما وأدبر، بدأ بمقدم رأسه حتى ذهب بهما إلى قفاه ثم ردهما إلى المكان الذي بدأ منه', takhrij: 'متفق عليه', note: 'صفة مسح الرأس.', pages: [34], nl: 'Daarna streek hij met zijn handen over zijn hoofd, naar voren en naar achteren: hij begon bij de voorkant van zijn hoofd tot zijn nek en bracht ze terug naar waar hij begon', nlNote: 'Hoe je over het hoofd strijkt.' },
  { narrator: '', text: 'لا وضوء لمن لم يذكر اسم الله عليه', takhrij: 'رواه أبو داود وحسنه الألباني', note: 'في التسمية.', pages: [36], nl: 'Er is geen woeḍoe voor wie de naam van Allah er niet bij noemt', nlNote: 'Over de basmala.' },
  { narrator: '', text: 'بالغ في الاستنشاق إلا أن تكون صائمًا', takhrij: 'رواه أبو داود وصححه الألباني', note: '', pages: [36], nl: 'Snuif het water goed op, tenzij je vast', nlNote: '' },
  { narrator: 'عائشة', text: 'كان النبي ﷺ يعجبه التيمن في تنعله وترجله وطهوره وفي شأنه كله', takhrij: 'متفق عليه', note: 'في التيامن.', pages: [37], nl: 'De Profeet ﷺ begon graag met rechts: bij het aantrekken van zijn sandalen, het kammen van zijn haar, zijn reiniging en in al zijn zaken', nlNote: 'Over rechts beginnen.' },
  { narrator: '', text: 'ما منكم من أحد يتوضأ فيسبغ الوضوء ثم يقول: أشهد أن لا إله إلا الله وأن محمدًا عبد الله ورسوله إلا فتحت له أبواب الجنة الثمانية يدخل من أيها شاء', takhrij: 'رواه مسلم', note: 'الذكر بعد الوضوء.', pages: [37], nl: 'Niemand van jullie doet de woeḍoe volledig en zegt dan: ik getuig dat er geen god is dan Allah en dat Muḥammad Zijn dienaar en Boodschapper is, of de acht poorten van het Paradijs worden voor hem geopend; hij gaat binnen door welke hij wil', nlNote: 'Het gedenken na de woeḍoe.' },
  { narrator: 'أبو هريرة', text: 'لا يقبل الله صلاة أحدكم إذا أحدث حتى يتوضأ', takhrij: 'متفق عليه', note: '', pages: [38], nl: 'Allah aanvaardt het gebed van niemand van jullie die ḥadath kreeg, totdat hij de woeḍoe doet', nlNote: '' },
  { narrator: 'صفوان بن عسال', text: 'كان رسول الله ﷺ يأمرنا إذا كنا سفرًا ألا ننزع خفافنا ثلاثة أيام ولياليهن إلا من جنابة، لكن من غائط وبول ونوم', takhrij: 'رواه الترمذي وحسنه الألباني', note: 'دليل نقض الوضوء بالنوم، وشرط المسح في الحدث الأصغر.', pages: [38, 42], nl: 'Als we op reis waren, droeg de Boodschapper van Allah ﷺ ons op onze leren sokken drie dagen en nachten niet uit te trekken, behalve bij janāba, maar wel na ontlasting, urineren en slaap', nlNote: 'Bewijs dat slaap de woeḍoe verbreekt, en dat strijken alleen bij kleine ḥadath geldt.' },
  { narrator: 'أنس بن مالك', text: 'كان أصحاب رسول الله ﷺ ينتظرون العشاء الآخرة حتى تخفق رؤوسهم ثم يصلون ولا يتوضؤون', takhrij: 'رواه أبو داود وصححه الألباني', note: 'النوم اليسير لا ينقض.', pages: [38], nl: 'De metgezellen van de Boodschapper van Allah ﷺ wachtten op het ʿishāʾ-gebed tot hun hoofden knikten; dan baden ze zonder de woeḍoe te doen', nlNote: 'Een kort dutje verbreekt de woeḍoe niet.' },
  { narrator: 'بسرة بنت صفوان', text: 'من مس ذكره فليتوضأ', takhrij: 'رواه الخمسة وصححه الألباني', note: '', pages: [39], nl: 'Wie zijn geslachtsdeel aanraakt, laat hij de woeḍoe doen', nlNote: '' },
  { narrator: 'جابر بن سمرة', text: 'أتوضأ من لحوم الغنم؟ قال: إن شئت فتوضأ وإن شئت فلا تتوضأ. قال: أتوضأ من لحوم الإبل؟ قال: نعم توضأ من لحوم الإبل', takhrij: 'رواه مسلم', note: '', pages: [39], nl: 'Moet ik de woeḍoe doen na schapenvlees? Hij zei: als je wilt wel, en als je wilt niet. Moet ik de woeḍoe doen na kamelenvlees? Hij zei: ja, doe de woeḍoe na kamelenvlees', nlNote: '' },
  { narrator: '', text: 'لا ينصرف حتى يسمع صوتًا أو يجد ريحًا', takhrij: 'متفق عليه', note: 'في الشك في الطهارة. ' + FYI, pages: [40], nl: 'Laat hij niet weggaan totdat hij een geluid hoort of een geur ruikt', nlNote: 'Over twijfel aan je reinheid. ' + FYI_NL },
  { narrator: 'المغيرة بن شعبة', text: 'دعهما فإني أدخلتهما طاهرتين', takhrij: 'أخرجه البخاري ومسلم', note: 'شرط لبس الخفين على طهارة.', pages: [41], nl: 'Laat ze maar, want ik deed ze aan terwijl ze rein waren', nlNote: 'Voorwaarde: de sokken aantrekken in staat van reinheid.' },
  { narrator: 'علي بن أبي طالب', text: 'جعل النبي ﷺ للمقيم يومًا وليلة وللمسافر ثلاثة أيام ولياليهن', takhrij: 'رواه مسلم', note: 'يعني في المسح على الخفين.', pages: [42], nl: 'De Profeet ﷺ gaf wie thuis is een dag en een nacht, en de reiziger drie dagen en nachten', nlNote: 'Namelijk voor strijken over de sokken.' },
  { narrator: 'أم سليم', text: 'هل على المرأة غسل إذا احتلمت؟ قال: نعم إذا رأت الماء', takhrij: 'متفق عليه', note: '', pages: [48], nl: 'Moet een vrouw de ghusl doen als ze een natte droom heeft? Hij zei: ja, als ze vocht ziet', nlNote: '' },
  { narrator: '', text: 'إذا قعد بين شعبها الأربع ثم مس الختان الختان فقد وجب الغسل', takhrij: 'رواه مسلم', note: 'وفي لفظ: «وإن لم ينزل».', pages: [48], nl: 'Wanneer hij gemeenschap heeft en de besneden delen elkaar raken, is de ghusl verplicht', nlNote: 'In een andere bewoording: "ook zonder zaadlozing".' },
  { narrator: 'عائشة', text: 'ذلك عرق وليست بالحيضة، فإذا أقبلت الحيضة فدعي الصلاة، وإذا أدبرت فاغسلي عنك الدم ثم صلي', takhrij: 'متفق عليه', note: 'لفاطمة بنت أبي حبيش.', pages: [49], nl: 'Dat is een ader, het is geen menstruatie. Als de menstruatie komt, laat het gebed; als ze voorbij is, was het bloed af en bid', nlNote: 'Tegen Fāṭima bint Abī Ḥubaysh.' },
  { narrator: 'أم عطية', text: 'اغسلنها ثلاثًا أو خمسًا أو أكثر من ذلك بماء وسدر، واجعلن في الآخرة كافورًا', takhrij: 'متفق عليه', note: 'في تغسيل ابنته ﷺ.', pages: [50], nl: 'Was haar drie of vijf keer of vaker met water en lotusblad, en doe bij de laatste keer kamfer', nlNote: 'Bij het wassen van zijn dochter ﷺ.' },
  { narrator: '', text: 'حق على كل مسلم أن يغتسل في كل سبعة أيام يومًا يغسل فيه رأسه وجسده', takhrij: 'متفق عليه', note: '', pages: [51], nl: 'Het is een recht op elke moslim dat hij elke zeven dagen één dag de ghusl doet en zijn hoofd en lichaam wast', nlNote: '' },
  { narrator: 'عائشة', text: 'كان إذا اغتسل من الجنابة يبدأ فيغسل يديه، ثم يفرغ بيمينه على شماله فيغسل فرجه، ثم يتوضأ وضوءه للصلاة، ثم يأخذ الماء ويدخل أصابعه في أصول الشعر، حتى إذا رأى أن قد استبرأ حفن على رأسه ثلاث حفنات، ثم أفاض على سائر جسده، ثم غسل رجليه', takhrij: 'في الصحيحين', note: 'أصل صفة الغسل الكامل.', pages: [52], nl: 'Als hij de ghusl deed na janāba, waste hij eerst zijn handen, goot dan met rechts op links en waste zijn geslachtsdeel, deed de woeḍoe zoals voor het gebed, nam water en bracht zijn vingers bij de haarwortels; als hij zag dat het goed was, goot hij drie handen vol op zijn hoofd, daarna over de rest van zijn lichaam, en waste daarna zijn voeten', nlNote: 'De basis voor de volledige ghusl.' },
  { narrator: 'جابر بن عبد الله', text: 'أعطيت خمسًا لم يعطهن نبي من الأنبياء قبلي: نصرت بالرعب مسيرة شهر، وجعلت لي الأرض مسجدًا وطهورًا', takhrij: 'متفق عليه', note: 'التيمم من خصائص هذه الأمة.', pages: [54], nl: 'Mij zijn vijf dingen gegeven die geen profeet vóór mij kreeg: ik ben geholpen met ontzag op een maand afstand, en de aarde is voor mij een gebedsplaats en reinigend gemaakt', nlNote: 'Tayammum is eigen aan deze gemeenschap.' },
  { narrator: 'أبو ذر', text: 'إن الصعيد الطيب طهور المسلم وإن لم يجد الماء عشر سنين، فإذا وجد الماء فليمسه بشرته', takhrij: 'رواه الترمذي وصححه الألباني', note: '', pages: [55], nl: 'Reine aarde is de reiniging van de moslim, ook als hij tien jaar geen water vindt; vindt hij water, laat hij het dan over zijn huid laten gaan', nlNote: '' },
  { narrator: 'عمار بن ياسر', text: 'إنما كان يكفيك أن تقول بيديك هكذا', takhrij: 'متفق عليه', note: 'ثم ضرب بيديه الأرض ضربة واحدة ثم مسح الشمال على اليمين وظاهر كفيه ووجهه.', pages: [56], nl: 'Het was genoeg geweest als je met je handen zo had gedaan', nlNote: 'Toen sloeg hij één keer met zijn handen op de grond en streek met links over rechts, over de rug van zijn handen en zijn gezicht.' }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه الشيخان': 'al-Bukhārī en Muslim',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'رواه مسلم': 'Muslim',
  'رواه النسائي وصححه الألباني': 'an-Nasāʾī; authentiek volgens al-Albānī',
  'رواه أبو داود وحسنه الألباني': 'Abū Dāwūd; goed (ḥasan) volgens al-Albānī',
  'رواه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه الترمذي وحسنه الألباني': 'at-Tirmidhī; goed (ḥasan) volgens al-Albānī',
  'رواه الترمذي وصححه الألباني': 'at-Tirmidhī; authentiek volgens al-Albānī',
  'رواه الخمسة وصححه الألباني': 'de vijf (Aḥmad en de vier Sunan); authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'أنس بن مالك': 'Anas ibn Mālik', 'أبو هريرة': 'Abū Hurayra', 'أبو أيوب الأنصاري': 'Abū Ayyūb al-Anṣārī', 'عبد الله بن عمر': 'ʿAbdallāh ibn ʿUmar',
  'عائشة': 'ʿĀʾisha', 'عبد الله بن زيد بن عاصم': 'ʿAbdallāh ibn Zayd ibn ʿĀṣim', 'صفوان بن عسال': 'Ṣafwān ibn ʿAssāl', 'بسرة بنت صفوان': 'Busra bint Ṣafwān',
  'جابر بن سمرة': 'Jābir ibn Samura', 'المغيرة بن شعبة': 'al-Mughīra ibn Shuʿba', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib', 'أم سليم': 'Umm Sulaym',
  'أم عطية': 'Umm ʿAṭiyya', 'جابر بن عبد الله': 'Jābir ibn ʿAbdallāh', 'أبو ذر': 'Abū Dharr', 'عمار بن ياسر': 'ʿAmmār ibn Yāsir'
}

const PERSONS = [
  ['anas-ibn-malik', 'text', [26, 30, 36, 38], 'روى دعاء دخول الخلاء وتخليل اللحية وعدم نقض النوم اليسير.', 'Overleverde het smeekgebed bij het toilet, het doorwassen van de baard en dat een kort dutje de woeḍoe niet verbreekt.'],
  ['aisha', 'text', [26, 31, 37, 49, 51, 52], 'روت خصال الفطرة والتيامن وصفة الغسل.', 'Overleverde de dingen van de fiṭra, rechts beginnen en hoe de ghusl gaat.'],
  ['abu-dharr', 'text', [26, 55], 'كان يحمد الله إذا خرج من الخلاء، وروى أن الصعيد طهور المسلم.', 'Prees Allah bij het verlaten van het toilet; overleverde dat reine aarde de moslim reinigt.'],
  ['abu-hurayra', 'text', [27, 31, 38, 40, 50, 51], 'روى اتقاء اللعانين وخصال الفطرة الخمس.', 'Overleverde het mijden van wat vervloeking oproept en de vijf dingen van de fiṭra.'],
  ['abu-ayyub-al-ansari', 'text', [27], 'روى النهي عن استقبال القبلة واستدبارها عند الغائط.', 'Overleverde het verbod om je bij je behoefte naar de qibla of met je rug ernaar te keren.'],
  ['ibn-umar', 'text', [27], 'رأى النبي ﷺ يقضي حاجته مستدبر القبلة في البنيان.', 'Zag de Profeet ﷺ in een gebouw zijn behoefte doen met zijn rug naar de qibla.'],
  ['abdallah-ibn-sarjis', 'text', [28], 'روى النهي عن البول في الجحر.', 'Overleverde het verbod om in een hol te urineren.'],
  ['qatada-ibn-diama', 'text', [28], 'روى حديث عبد الله بن سرجس.', 'Overleverde de hadith van ʿAbdallāh ibn Sarjis.'],
  ['abdallah-ibn-zayd-ibn-asim', 'text', [34, 36], 'وصف مسح الرأس وأخذ ماء جديد له.', 'Beschreef het strijken over het hoofd en het nemen van nieuw water daarvoor.'],
  ['arfaja-ibn-asad', 'text', [35], 'أمره النبي ﷺ أن يتخذ أنفًا من ذهب.', 'De Profeet ﷺ droeg hem op een neus van goud te laten maken.'],
  ['uthman-ibn-affan', 'text', [36], 'وصف وضوء النبي ﷺ وغسل الكفين ثلاثًا.', 'Beschreef de woeḍoe van de Profeet ﷺ en het drie keer wassen van de handen.'],
  ['ibn-abbas', 'text', [37], 'روى الأمر بتخليل الأصابع.', 'Overleverde de opdracht om tussen de vingers en tenen te wassen.'],
  ['safwan-ibn-assal', 'text', [38, 42], 'روى مدة المسح وأنه في الحدث الأصغر.', 'Overleverde de duur van het strijken en dat het bij kleine ḥadath geldt.'],
  ['busra-bint-safwan', 'text', [39], 'روت نقض الوضوء بمس الذكر.', 'Overleverde dat aanraking van het geslachtsdeel de woeḍoe verbreekt.'],
  ['umm-habiba', 'text', [39], 'روت «من مس فرجه فليتوضأ».', 'Overleverde "wie zijn geslachtsdeel aanraakt, laat hij de woeḍoe doen".'],
  ['jabir-ibn-samura', 'text', [39], 'روى الوضوء من لحوم الإبل.', 'Overleverde de woeḍoe na kamelenvlees.'],
  ['al-mughira-ibn-shuba', 'text', [41, 44], 'قال له النبي ﷺ: «دعهما فإني أدخلتهما طاهرتين».', 'Tegen hem zei de Profeet ﷺ: "laat ze, ik deed ze rein aan".'],
  ['ali-ibn-abi-talib', 'text', [42, 44], 'روى مدة المسح للمقيم والمسافر.', 'Overleverde de duur van het strijken voor wie thuis is en de reiziger.'],
  ['ibn-al-mundhir', 'text', [44], 'ذكر أن إباحة المسح على الجوربين تروى عن تسعة من الصحابة.', 'Vermeldde dat negen metgezellen het strijken over sokken toestonden.'],
  ['thawban', 'text', [44], 'روى الأمر بالمسح على العصائب والتساخين.', 'Overleverde de opdracht om over tulbanden en sokken te strijken.'],
  ['ibn-taymiyya', 'text', [45], 'قال: إن خافت المرأة البرد مسحت على خمارها.', 'Zei: vreest een vrouw de kou, dan strijkt ze over haar hoofddoek.'],
  ['umm-salama', 'text', [45], 'كانت تمسح على خمارها.', 'Streek over haar hoofddoek.'],
  ['umm-sulaym', 'text', [48], 'سألت عن غسل المرأة إذا احتلمت.', 'Vroeg naar de ghusl van een vrouw na een natte droom.'],
  ['fatima-bint-abi-hubaysh', 'text', [49], 'كانت تستحاض فسألت النبي ﷺ.', 'Had bloedverlies buiten de menstruatie en vroeg de Profeet ﷺ.'],
  ['umm-habiba-bint-jahsh', 'text', [49], 'أمرها النبي ﷺ أن تغتسل.', 'De Profeet ﷺ droeg haar op de ghusl te doen.'],
  ['umm-atiyya', 'text', [50], 'روت صفة تغسيل ابنة النبي ﷺ.', 'Overleverde hoe de dochter van de Profeet ﷺ gewassen werd.'],
  ['qays-ibn-asim', 'text', [50], 'أسلم فأمره النبي ﷺ أن يغتسل.', 'Werd moslim en de Profeet ﷺ droeg hem de ghusl op.'],
  ['thumama-ibn-uthal', 'text', [50], 'لما أسلم أمر أن يغتسل.', 'Werd bij zijn bekering opgedragen de ghusl te doen.'],
  ['jabir-ibn-abdallah', 'text', [54], 'روى «أعطيت خمسًا».', 'Overleverde "mij zijn vijf dingen gegeven".'],
  ['hudhayfa-ibn-al-yaman', 'text', [55], 'روى «وجعلت تربتها لنا طهورًا».', 'Overleverde "haar aarde is voor ons reinigend gemaakt".'],
  ['ammar-ibn-yasir', 'text', [56], 'علمه النبي ﷺ صفة التيمم.', 'De Profeet ﷺ leerde hem hoe tayammum gaat.'],
  ['al-bukhari', 'takhrij', [25, 26, 27, 31, 34, 37, 38, 41, 48, 49, 50, 51, 52, 54, 56], 'أخرج كثيرًا من أحاديث الوحدة.', 'Nam veel hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [25, 26, 27, 30, 31, 37, 39, 42, 48, 55], 'أخرج كثيرًا من أحاديث الوحدة.', 'Nam veel hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [28, 36, 38, 55], 'أخرج أحاديث التسمية والاستنشاق والنوم.', 'Nam hadith op over de basmala, het opsnuiven en slaap.'],
  ['at-tirmidhi', 'takhrij', [26, 35, 37, 38, 55], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['an-nasai', 'takhrij', [30], 'أخرج «السواك مطهرة للفم».', 'Nam "de siwāk reinigt de mond" op.'],
  ['al-albani', 'takhrij', [26, 30, 35, 36, 37, 38, 39, 55], 'صحح وحسن أحاديث في الوحدة.', 'Beoordeelde hadith in deze eenheid als authentiek of goed.'],
  ['ibn-abi-shayba', 'takhrij', [26], 'أخرج أثر أبي ذر في المصنف.', 'Nam het bericht van Abū Dharr op in al-Muṣannaf.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'الوضوء وأحكامه',
  subtitle: 'عشرة دروس مجموعة في صفحة واحدة',
  summary: 'قضاء الحاجة وآدابه وسنن الفطرة، ثم الوضوء: تعريفه وحكمه وشروطه وفرائضه الستة وسننه ونواقضه، ثم المسح على الخفين والجوارب والجبيرة، ثم الغسل: موجباته والأغسال المستحبة وصفته، وأخيرًا التيمم: متى يشرع وفروضه وصفته ومبطلاته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'الوضوء وأحكامه', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'قضاء الحاجة والفطرة', sub: 'الدرسان ٥–٦', page: 25, children: ['الاستنجاء والاستجمار', 'الآداب', 'سنن الفطرة'] },
      { label: 'الوضوء', sub: 'الدروس ٧–١٠', page: 32, children: ['الشروط', 'الفرائض الستة', 'السنن', 'النواقض'] },
      { label: 'المسح', sub: 'الدرس ١١', page: 41, children: ['الشروط الأربعة', 'المدة', 'ما يمسح عليه'] },
      { label: 'الغسل', sub: 'الدرس ١٢', page: 48, children: ['الموجبات', 'المستحب', 'الصفة'] },
      { label: 'التيمم', sub: 'الدرسان ١٣–١٤', page: 54, children: ['متى يشرع', 'الفروض', 'المبطلات'] }
    ]
  },
  points: [
    { text: 'الاستنجاء بالماء والاستجمار بالحجارة ونحوها، ويسن الإيتار في الاستجمار.', page: 25 },
    { text: 'الوضوء واجب على المحدث إذا أراد الصلاة وما في حكمها كالطواف ومس المصحف.', page: 32 },
    { text: 'فرائض الوضوء ستة: غسل الوجه، واليدين إلى المرفقين، ومسح الرأس، وغسل الرجلين، والترتيب، والموالاة.', page: 34 },
    { text: 'يجب إزالة ما يمنع وصول الماء إلى البشرة كالطلاء والأظفار الصناعية.', page: 33 },
    { text: 'نواقض الوضوء: الخارج من السبيلين، وزوال العقل، ومس الفرج بلا حائل، وأكل لحم الإبل.', page: 38 },
    { text: 'مدة المسح يوم وليلة للمقيم، وثلاثة أيام بلياليها للمسافر، تبدأ من أول مسح بعد الحدث.', page: 43 },
    { text: 'يجب الغسل بخروج المني، والجماع ولو بلا إنزال، والحيض، والنفاس، والموت.', page: 48 },
    { text: 'التيمم بدل عن الوضوء والغسل عند العجز عن الماء حقيقة أو حكمًا.', page: 54 }
  ],
  terms: [
    { term: 'الاستنجاء', translit: 'al-istinjāʾ', meaning: 'إزالة أثر الخارج من القبل أو الدبر بالماء.', explanation: '', notes: [], page: 25 },
    { term: 'الاستجمار', translit: 'al-istijmār', meaning: 'إزالة أثر الخارج بحجارة ونحوها من ورق أو مناديل.', explanation: 'ويجب إن تعذر الماء.', notes: [], page: 25 },
    { term: 'سنن الفطرة', translit: 'sunan al-fiṭra', meaning: 'خصال يتصف فاعلها بالفطرة التي فطر الله الناس عليها.', explanation: 'كالسواك وقص الشارب وتقليم الأظفار.', notes: [], page: 30 },
    { term: 'البراجم', translit: 'al-barājim', meaning: 'العقد في ظهور الأصابع.', explanation: '', notes: [], page: 31 },
    { term: 'الوضوء', translit: 'al-wuḍūʾ', meaning: 'استعمال الماء في الأعضاء الأربعة على صفة مخصوصة تعبدًا لله.', explanation: 'لغة: من الوضاءة، وهي الحسن والنظافة.', notes: ['[المائدة: ٦]'], page: 32 },
    { term: 'الموالاة', translit: 'al-muwālāh', meaning: 'ألا يؤخر غسل عضو حتى ينشف الذي قبله.', explanation: '', notes: [], page: 35 },
    { term: 'الكعبان', translit: 'al-kaʿbān', meaning: 'العظمان الناتئان بأسفل الساق من جانبي القدم.', explanation: 'وليس مؤخر القدم كما يظن البعض.', notes: [], page: 35 },
    { term: 'الخف', translit: 'al-khuff', meaning: 'ما يلبس في الرجل من جلد رقيق ونحوه ساترًا للكعبين.', explanation: 'ومثله الجورب.', notes: [], page: 41 },
    { term: 'الجبيرة', translit: 'al-jabīra', meaning: 'ما يوضع على الكسر أو الجرح.', explanation: 'تمسح كلها حتى يشفى، في الحدثين.', notes: [], page: 46 },
    { term: 'الغسل', translit: 'al-ghusl', meaning: 'إفراغ الماء الطهور على جميع البدن بنية رفع الحدث.', explanation: '', notes: [], page: 48 },
    { term: 'النفاس', translit: 'an-nifās', meaning: 'الدم الخارج مع الولادة أو بعدها أو قبلها بيومين أو ثلاثة ومعه طلق.', explanation: '', notes: [], page: 49 },
    { term: 'التيمم', translit: 'at-tayammum', meaning: 'مسح الوجه واليدين بالصعيد الطيب على وجه مخصوص تعبدًا لله.', explanation: 'لغة: القصد.', notes: ['[النساء: ٤٣]'], page: 54 },
    { term: 'فاقد الطهورين', translit: 'fāqid aṭ-ṭahūrayn', meaning: 'من عدم الماء والتراب.', explanation: 'يصلي على حسب حاله ولا يعيد.', notes: [], page: 57 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'فرائض الوضوء الستة',
      intro: 'كما في الدرس الثامن.',
      nodes: [
        { label: 'غسل الوجه', sub: 'ومنه المضمضة والاستنشاق', page: 34 },
        { label: 'غسل اليدين إلى المرفقين', page: 34 },
        { label: 'مسح الرأس كله', sub: 'ومنه الأذنان', page: 34 },
        { label: 'غسل الرجلين إلى الكعبين', page: 35 },
        { label: 'الترتيب', page: 35 },
        { label: 'الموالاة', page: 35 }
      ]
    },
    {
      type: 'cards',
      title: 'نواقض الوضوء',
      intro: 'كما في الدرس العاشر.',
      nodes: [
        { label: 'الخارج من السبيلين', sub: 'بول وغائط وريح ومني ومذي وودي', page: 38 },
        { label: 'زوال العقل', sub: 'بسكر أو إغماء أو نوم مستغرق أو جنون', page: 38 },
        { label: 'مس الفرج بلا حائل', page: 39 },
        { label: 'أكل لحم الإبل', page: 39 }
      ]
    },
    {
      type: 'cards',
      title: 'شروط المسح على الخفين',
      intro: 'أربعة كما في الكتاب.',
      nodes: [
        { label: 'لبسهما على طهارة', page: 41 },
        { label: 'أن يكونا طاهرين', page: 41 },
        { label: 'في الحدث الأصغر', sub: 'لا الأكبر', page: 42 },
        { label: 'في المدة', sub: 'يوم وليلة للمقيم، وثلاثة للمسافر', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'المسح على الخف والجبيرة',
      intro: 'كما في الكتاب.',
      columns: ['الخف والجورب', 'الجبيرة'],
      rows: [
        { label: 'الموضع', cells: ['أعلاه فقط', 'كلها'] },
        { label: 'المدة', cells: ['يوم وليلة أو ثلاثة أيام', 'حتى يشفى'] },
        { label: 'الحدث', cells: ['الأصغر فقط', 'الأصغر والأكبر'] },
        { label: 'اللبس على طهارة', cells: ['شرط', 'ليس بشرط'] }
      ],
      page: 46
    },
    {
      type: 'steps',
      title: 'صفة الغسل الكامل',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'النية والتسمية', page: 52 },
        { label: 'غسل الكفين ثلاثًا', page: 52 },
        { label: 'غسل الفرج', page: 52 },
        { label: 'الوضوء كوضوء الصلاة', page: 52 },
        { label: 'الحثو على الرأس ثلاثًا', sub: 'وتخليل أصول الشعر', page: 52 },
        { label: 'تعميم البدن', sub: 'بدءًا بالشق الأيمن', page: 52 }
      ]
    },
    {
      type: 'compare',
      title: 'وجود الماء بعد التيمم (للاطلاع فقط)',
      intro: 'ثلاثة أحوال كما في الكتاب.',
      columns: ['الحكم'],
      rows: [
        { label: 'قبل الصلاة', cells: ['يجب الوضوء ولا يجوز التيمم'] },
        { label: 'بعد الصلاة', cells: ['لا يعيد'] },
        { label: 'أثناء الصلاة', cells: ['يبطل التيمم، فيتوضأ ويستأنف'] }
      ],
      page: 57
    }
  ],
  sections: [
    { title: 'آداب قضاء الحاجة', text: 'يقول عند الدخول: «بسم الله، اللهم إني أعوذ بك من الخبث والخبائث»، وعند الخروج: «غفرانك»؛ ويقدم اليسرى عند الدخول واليمنى عند الخروج، ويستعمل اليسرى، ويستر عورته، والبول جالسًا مستحب، ولا بأس به قائمًا إن أمن التلوث وكشف العورة.', more: '', page: 26 },
    { title: 'ما يحرم ويكره عند قضاء الحاجة', text: 'يحرم في الطريق والظل والحدائق العامة وموارد المياه، واستقبال القبلة واستدبارها في الصحراء بلا حائل؛ ويكره الكلام أثناءها، والبول في الشق، ودخول الخلاء بشيء فيه ذكر الله إلا لحاجة، ويحرم الدخول بالمصحف.', more: 'ما يحرم في الكتاب للاطلاع فقط.', page: 27 },
    { title: 'سنن الفطرة', text: 'السواك في كل وقت ويتأكد عند الوضوء والصلاة والقيام من النوم، وحلق العانة، وقص الشارب، وإعفاء اللحية، وتقليم الأظفار، ونتف الإبط، وغسل البراجم، والختان: واجب في حق الذكر ومكرمة في حق الأنثى.', more: '', page: 30 },
    { title: 'شروط صحة الوضوء', text: 'الإسلام، والعقل، والتمييز، والنية ولا يشرع التلفظ بها، والماء الطهور، وإزالة ما يمنع وصول الماء إلى البشرة.', more: '', page: 32 },
    { title: 'الأعضاء الصناعية', text: 'إن سهل نزع العضو الصناعي الساتر لمحل الفرض نزعه، وإلا مسح عليه؛ وتركيبة الأسنان لا يحتاج إلى نزعها، لحديث عرفجة بن أسعد.', more: '', page: 35 },
    { title: 'سنن الوضوء', text: 'السواك، والتسمية، وغسل الكفين ثلاثًا، والمبالغة في الاستنشاق لغير الصائم، وتخليل اللحية الكثيفة، وأخذ ماء جديد للرأس، وتخليل الأصابع، والتيامن، والتثليث، والذكر بعده.', more: '', page: 36 },
    { title: 'الشك في الطهارة (للاطلاع فقط)', text: 'من تيقن الطهارة وشك في الحدث فهو على طهارة، ومن تيقن الحدث وشك في الطهارة فهو محدث؛ لأن اليقين لا يزول إلا بيقين.', more: FYI, page: 40 },
    { title: 'انتهاء مدة المسح', text: 'إذا تمت المدة لا يجوز المسح بعدها، لكن الوضوء يبقى على الراجح، لأنه ﷺ وقت المسح ولم يوقت الطهارة.', more: '', page: 43 },
    { title: 'ما يمسح عليه', text: 'الجوارب والجزمة الساترة ولو كان الجورب شفافًا أو مخرقًا على الصحيح، والعمامة دون الشماغ والطاقية، وخمار المرأة عند الحاجة، والجبيرة؛ واللصقات الطبية كالجبيرة إن كان في نزعها ضرر.', more: '', page: 44 },
    { title: 'الأغسال المستحبة', text: 'غسل الكافر إذا أسلم، وبعد تغسيل الميت، ومن أفاق من إغماء أو جنون، وكل سبعة أيام، والجمعة وقيل يجب، والعيدان، والمستحاضة لكل صلاة، وعند الإحرام.', more: '', page: 50 },
    { title: 'متى يشرع التيمم', text: 'عند العجز عن استعمال الماء حقيقة كمن في صحراء بلا ماء، أو حكمًا كمن يخاف الضرر أو يحتاج الماء للشرب؛ ولا يتيمم إلا بعد طلب الماء، ويكون بتراب طهور له غبار، فإن لم يجد فبما يقدر عليه.', more: '[المائدة: ٦]، [التغابن: ١٦]', page: 54 },
    { title: 'صفة التيمم ومبطلاته', text: 'يضرب الأرض بيديه ضربة واحدة، فيمسح وجهه ثم ظاهر كفيه اليمين ثم الشمال؛ ويبطله ما يبطل الوضوء، ووجود الماء مع القدرة على استعماله.', more: '', page: 56 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'فرائض الوضوء', items: ['غسل الوجه', 'غسل اليدين إلى المرفقين', 'مسح الرأس', 'غسل الرجلين إلى الكعبين', 'الترتيب', 'الموالاة'], page: 34, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شروط صحة الوضوء', items: ['الإسلام', 'العقل', 'التمييز', 'النية', 'الماء الطهور', 'إزالة ما يمنع وصول الماء'], page: 32, origin: 'boek' },
    { kind: 'opsomming', title: 'موجبات الغسل', items: ['خروج المني بلذة', 'الجماع ولو بلا إنزال', 'الحيض', 'النفاس', 'الموت'], page: 48, origin: 'boek' },
    { kind: 'opsomming', title: 'فروض التيمم', items: ['النية', 'مسح الوجه', 'مسح الكفين', 'الترتيب'], page: 56, origin: 'boek' },
    { kind: 'bewijs', title: 'مدة المسح', items: ['«جعل النبي ﷺ للمقيم يومًا وليلة وللمسافر ثلاثة أيام ولياليهن».'], page: 42, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'لقضاء الحاجة آداب، ويحرم ما يؤذي الناس.',
    'سنن الفطرة خصال يتصف فاعلها بالفطرة.',
    'للوضوء شروط وست فرائض وسنن ونواقض.',
    'المسح على الخفين بأربعة شروط ومدة محددة، والجبيرة تخالفه.',
    'للغسل موجبات خمسة، وصفة كاملة وصفة مجزئة.',
    'التيمم بدل عند العجز عن الماء، ويبطل بوجوده.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الاستجمار؟', options: ['إزالة أثر الخارج بحجارة ونحوها', 'إزالته بالماء', 'غسل اليدين', 'المضمضة'], answer: 0, explain: 'أما بالماء فهو الاستنجاء.', page: 25 },
    { type: 'mc', q: 'كم فرائض الوضوء؟', options: ['ستة', 'أربعة', 'خمسة', 'عشرة'], answer: 0, explain: 'الأربعة الأعضاء والترتيب والموالاة.', page: 34 },
    { type: 'tf', q: 'يشرع التلفظ بالنية في الوضوء.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لعدم ثبوته.', page: 32 },
    { type: 'mc', q: 'أي هذه ينقض الوضوء؟', options: ['أكل لحم الإبل', 'أكل لحم الغنم', 'النوم اليسير', 'مس الأليتين'], answer: 0, explain: 'لحديث جابر بن سمرة.', page: 39 },
    { type: 'mc', q: 'ما مدة المسح للمسافر؟', options: ['ثلاثة أيام بلياليها', 'يوم وليلة', 'أسبوع', 'حتى يرجع'], answer: 0, explain: 'لحديث علي.', page: 42 },
    { type: 'tf', q: 'إذا تمت مدة المسح انتقض الوضوء على الراجح.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يبقى الوضوء، ولا يجوز المسح بعدها.', page: 43 },
    { type: 'mc', q: 'أي هذه من موجبات الغسل؟', options: ['الجماع ولو بلا إنزال', 'النوم', 'مس الفرج', 'أكل لحم الإبل'], answer: 0, explain: 'وفي لفظ: «وإن لم ينزل».', page: 48 },
    { type: 'mc', q: 'إذا وجد المتيمم الماء أثناء الصلاة؟', options: ['يبطل تيممه فيتوضأ ويستأنف', 'يكمل صلاته', 'يعيدها بعد الوقت', 'لا شيء عليه'], answer: 0, explain: 'لأن البدلية زالت.', page: 57 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٢٩ و٤٠ و٤٧ و٥٣ و٥٨. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'De woeḍoe en haar regels',
  subtitle: 'Tien lessen samen op één pagina',
  summary: 'Je behoefte doen en de etiquette, en de gewoonten van de fiṭra; daarna de woeḍoe: betekenis, oordeel, voorwaarden, de zes verplichte delen, de soenna’s en wat haar verbreekt; strijken over sokken, schoenen en verband; de ghusl: wanneer verplicht, wanneer aanbevolen en hoe; en tot slot tayammum: wanneer, de verplichte delen, hoe en wat haar ongeldig maakt.',
  source: { ...source, label: 'Kitāb al-Fiqh (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De woeḍoe en haar regels', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Toilet en fiṭra', sub: 'les 5–6', page: 25, children: ['istinjāʾ en istijmār', 'etiquette', 'de fiṭra'] },
      { label: 'De woeḍoe', sub: 'les 7–10', page: 32, children: ['voorwaarden', 'zes verplichte delen', 'soenna’s', 'wat haar verbreekt'] },
      { label: 'Strijken', sub: 'les 11', page: 41, children: ['vier voorwaarden', 'de duur', 'waarover'] },
      { label: 'De ghusl', sub: 'les 12', page: 48, children: ['wanneer verplicht', 'aanbevolen', 'hoe'] },
      { label: 'Tayammum', sub: 'les 13–14', page: 54, children: ['wanneer', 'verplichte delen', 'wat haar ongeldig maakt'] }
    ]
  },
  points: [
    { text: 'Istinjāʾ is reinigen met water, istijmār met stenen en dergelijke; bij istijmār is een oneven aantal soenna.', page: 25 },
    { text: 'De woeḍoe is verplicht voor wie ḥadath heeft en wil bidden of iets wat daaronder valt, zoals de ṭawāf of de muṣḥaf aanraken.', page: 32 },
    { text: 'De zes verplichte delen: gezicht wassen, handen tot de ellebogen, over het hoofd strijken, voeten wassen, de volgorde en het zonder onderbreking doen.', page: 34 },
    { text: 'Wat water tegenhoudt, zoals nagellak of kunstnagels, moet eerst weg.', page: 33 },
    { text: 'De woeḍoe wordt verbroken door wat uit de twee uitgangen komt, verlies van bewustzijn, aanraking van het geslachtsdeel zonder iets ertussen, en kamelenvlees eten.', page: 38 },
    { text: 'Strijken mag een dag en een nacht voor wie thuis is en drie dagen en nachten voor de reiziger, gerekend vanaf de eerste keer strijken na ḥadath.', page: 43 },
    { text: 'De ghusl is verplicht na zaadlozing, gemeenschap ook zonder zaadlozing, menstruatie, kraambloed en overlijden.', page: 48 },
    { text: 'Tayammum vervangt woeḍoe en ghusl als je water werkelijk of praktisch niet kunt gebruiken.', page: 54 }
  ],
  terms: [
    { term: 'الاستنجاء', translit: 'al-istinjāʾ', meaning: 'Na je behoefte de sporen met water verwijderen.', explanation: '', notes: [], page: 25 },
    { term: 'الاستجمار', translit: 'al-istijmār', meaning: 'De sporen verwijderen met stenen, papier, doekjes en dergelijke.', explanation: 'Verplicht als er geen water is.', notes: [], page: 25 },
    { term: 'سنن الفطرة', translit: 'sunan al-fiṭra', meaning: 'Gewoonten van de fiṭra: wie ze doet, leeft volgens de aard waarmee Allah de mensen schiep.', explanation: 'Zoals siwāk, de snor bijknippen en nagels knippen.', notes: [], page: 30 },
    { term: 'البراجم', translit: 'al-barājim', meaning: 'De knokkels op de rug van de vingers.', explanation: '', notes: [], page: 31 },
    { term: 'الوضوء', translit: 'al-wuḍūʾ', meaning: 'Water gebruiken voor de vier lichaamsdelen op een vaste manier, als aanbidding van Allah.', explanation: 'Taalkundig van waḍāʾa: schoonheid en netheid.', notes: ['al-Māʾida 5:6'], page: 32 },
    { term: 'الموالاة', translit: 'al-muwālāh', meaning: 'Zonder onderbreking: een lichaamsdeel niet pas wassen als het vorige al droog is.', explanation: '', notes: [], page: 35 },
    { term: 'الكعبان', translit: 'al-kaʿbān', meaning: 'De enkels: de twee uitstekende botten onderaan het onderbeen aan weerszijden van de voet.', explanation: 'Niet de hiel, zoals sommigen denken.', notes: [], page: 35 },
    { term: 'الخف', translit: 'al-khuff', meaning: 'Leren sok: iets van dun leer en dergelijke aan de voet dat de enkels bedekt.', explanation: 'Een gewone sok valt eronder.', notes: [], page: 41 },
    { term: 'الجبيرة', translit: 'al-jabīra', meaning: 'Spalk of verband op een breuk of wond.', explanation: 'Je strijkt over het geheel tot het genezen is, bij kleine en grote ḥadath.', notes: [], page: 46 },
    { term: 'الغسل', translit: 'al-ghusl', meaning: 'Rein water over het hele lichaam laten lopen met de intentie ḥadath op te heffen.', explanation: '', notes: [], page: 48 },
    { term: 'النفاس', translit: 'an-nifās', meaning: 'Kraambloed: bloed bij of na de bevalling, of twee à drie dagen ervoor met weeën.', explanation: '', notes: [], page: 49 },
    { term: 'التيمم', translit: 'at-tayammum', meaning: 'Met reine aarde over gezicht en handen strijken op een vaste manier, als aanbidding van Allah.', explanation: 'Taalkundig: zich richten op.', notes: ['an-Nisāʾ 4:43'], page: 54 },
    { term: 'فاقد الطهورين', translit: 'fāqid aṭ-ṭahūrayn', meaning: 'Wie water noch aarde heeft.', explanation: 'Hij bidt zo goed als hij kan en herhaalt niet.', notes: [], page: 57 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De zes verplichte delen van de woeḍoe',
      intro: 'Zoals in les 8.',
      nodes: [
        { label: 'Het gezicht wassen', sub: 'met mond spoelen en water opsnuiven', page: 34 },
        { label: 'De handen tot de ellebogen wassen', page: 34 },
        { label: 'Over het hele hoofd strijken', sub: 'met de oren', page: 34 },
        { label: 'De voeten tot de enkels wassen', page: 35 },
        { label: 'De volgorde', page: 35 },
        { label: 'Zonder onderbreking', page: 35 }
      ]
    },
    {
      type: 'cards',
      title: 'Wat de woeḍoe verbreekt',
      intro: 'Zoals in les 10.',
      nodes: [
        { label: 'Wat uit de twee uitgangen komt', sub: 'urine, ontlasting, wind, sperma, madhy, wady', page: 38 },
        { label: 'Verlies van bewustzijn', sub: 'door roes, flauwvallen, diepe slaap of waanzin', page: 38 },
        { label: 'Het geslachtsdeel aanraken zonder iets ertussen', page: 39 },
        { label: 'Kamelenvlees eten', page: 39 }
      ]
    },
    {
      type: 'cards',
      title: 'Voorwaarden voor strijken over sokken',
      intro: 'Vier zoals in het boek.',
      nodes: [
        { label: 'Aangetrokken in staat van reinheid', page: 41 },
        { label: 'De sokken zijn rein', page: 41 },
        { label: 'Bij kleine ḥadath', sub: 'niet bij grote', page: 42 },
        { label: 'Binnen de termijn', sub: 'dag en nacht thuis, drie dagen op reis', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'Strijken over sokken en over verband',
      intro: 'Zoals in het boek.',
      columns: ['Sokken', 'Verband'],
      rows: [
        { label: 'Waar', cells: ['alleen de bovenkant', 'het geheel'] },
        { label: 'Hoe lang', cells: ['een dag en nacht of drie dagen', 'tot genezing'] },
        { label: 'Ḥadath', cells: ['alleen klein', 'klein en groot'] },
        { label: 'Rein aangetrokken', cells: ['voorwaarde', 'geen voorwaarde'] }
      ],
      page: 46
    },
    {
      type: 'steps',
      title: 'De volledige ghusl',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Intentie en basmala', page: 52 },
        { label: 'De handen drie keer wassen', page: 52 },
        { label: 'Het geslachtsdeel wassen', page: 52 },
        { label: 'De woeḍoe zoals voor het gebed', page: 52 },
        { label: 'Drie keer water over het hoofd', sub: 'tot in de haarwortels', page: 52 },
        { label: 'Het hele lichaam', sub: 'beginnend met rechts', page: 52 }
      ]
    },
    {
      type: 'compare',
      title: 'Water vinden na tayammum (alleen ter kennisname)',
      intro: 'Drie gevallen zoals in het boek.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Vóór het gebed', cells: ['de woeḍoe is verplicht; tayammum mag niet'] },
        { label: 'Na het gebed', cells: ['niet herhalen'] },
        { label: 'Tijdens het gebed', cells: ['tayammum vervalt: woeḍoe doen en opnieuw beginnen'] }
      ],
      page: 57
    }
  ],
  sections: [
    { title: 'Etiquette bij je behoefte', text: 'Bij binnengaan zeg je "bismillāh, O Allah, ik zoek bij U bescherming tegen de kwade geesten", bij het verlaten "ghufrānaka" (om Uw vergeving). Je gaat met links naar binnen en met rechts naar buiten, gebruikt de linkerhand en bedekt je schaamdelen. Zittend urineren is aanbevolen; staand mag als je niet vies wordt en niets ontbloot.', more: '', page: 26 },
    { title: 'Verboden en afgeraden bij je behoefte', text: 'Verboden op de weg, in de schaduw, in openbare parken en bij waterbronnen, en in open terrein zonder afscherming je naar de qibla of met je rug ernaar keren. Afgeraden: praten, in een spleet urineren, en het toilet binnengaan met iets waarin Allah genoemd wordt, tenzij nodig; met de muṣḥaf naar binnen is verboden.', more: 'Het deel over wat verboden is, staat in het boek alleen ter kennisname.', page: 27 },
    { title: 'De gewoonten van de fiṭra', text: 'De siwāk op elk moment, vooral bij de woeḍoe, het gebed en het opstaan; het schaamhaar verwijderen, de snor bijknippen, de baard laten staan, nagels knippen, okselhaar verwijderen, de knokkels wassen, en besnijdenis: verplicht voor mannen en een eerbetoon voor vrouwen.', more: '', page: 30 },
    { title: 'Voorwaarden voor een geldige woeḍoe', text: 'Islam, verstand, onderscheidingsvermogen, de intentie (zonder die uit te spreken), reinigend water, en weghalen wat het water tegenhoudt.', more: '', page: 32 },
    { title: 'Kunstmatige lichaamsdelen', text: 'Is een prothese op een verplichte plaats makkelijk af te doen, dan doe je hem af; anders strijk je erover. Een kunstgebit hoeft niet uit, vanwege de hadith van ʿArfaja ibn Asʿad.', more: '', page: 35 },
    { title: 'De soenna’s van de woeḍoe', text: 'De siwāk, de basmala, de handen drie keer wassen, goed opsnuiven als je niet vast, een dichte baard doorwassen, nieuw water voor het hoofd, tussen vingers en tenen wassen, rechts beginnen, drie keer wassen en het gedenken erna.', more: '', page: 36 },
    { title: 'Twijfel over je reinheid (alleen ter kennisname)', text: 'Weet je zeker dat je rein was en twijfel je over ḥadath, dan ben je rein; weet je zeker dat je ḥadath had en twijfel je over reiniging, dan ben je onrein. Zekerheid verdwijnt alleen door zekerheid.', more: FYI_NL, page: 40 },
    { title: 'Als de termijn voorbij is', text: 'Na de termijn mag je niet meer strijken, maar volgens de sterkste mening blijft je woeḍoe geldig, omdat de Profeet ﷺ een termijn stelde voor het strijken en niet voor de reinheid.', more: '', page: 43 },
    { title: 'Waarover je strijkt', text: 'Sokken en schoenen die de enkels bedekken, ook als de sok doorzichtig of gescheurd is volgens de juiste mening; de tulband, maar niet een pet of hoofddoek die makkelijk af gaat; de hoofddoek van een vrouw als het nodig is; en verband. Pleisters zijn als verband als afhalen schaadt.', more: '', page: 44 },
    { title: 'Aanbevolen ghusl', text: 'Bij bekering tot de islam, na het wassen van een overledene, na flauwte of waanzin, eens per zeven dagen, op vrijdag (sommigen zeggen verplicht), op de twee feestdagen, bij bloedverlies buiten de menstruatie voor elk gebed, en bij de iḥrām.', more: '', page: 50 },
    { title: 'Wanneer tayammum', text: 'Als je water werkelijk niet kunt gebruiken, zoals in een woestijn zonder water, of praktisch niet, zoals bij gevaar voor je gezondheid of als je het nodig hebt om te drinken. Eerst zoek je naar water. Je gebruikt reine aarde met stof; heb je die niet, dan wat je hebt.', more: 'al-Māʾida 5:6, at-Taghābun 64:16', page: 54 },
    { title: 'Hoe tayammum gaat en wat haar ongeldig maakt', text: 'Je slaat één keer met je handen op de grond, strijkt over je gezicht en dan over de rug van je handen, eerst rechts en dan links. Ongeldig door alles wat de woeḍoe verbreekt, en door water vinden dat je kunt gebruiken.', more: '', page: 56 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'De verplichte delen van de woeḍoe', items: ['het gezicht wassen', 'de handen tot de ellebogen', 'over het hoofd strijken', 'de voeten tot de enkels', 'de volgorde', 'zonder onderbreking'], page: 34, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden voor een geldige woeḍoe', items: ['islam', 'verstand', 'onderscheidingsvermogen', 'intentie', 'reinigend water', 'weghalen wat water tegenhoudt'], page: 32, origin: 'boek' },
    { kind: 'opsomming', title: 'Wanneer de ghusl verplicht is', items: ['zaadlozing met lust', 'gemeenschap, ook zonder zaadlozing', 'menstruatie', 'kraambloed', 'overlijden'], page: 48, origin: 'boek' },
    { kind: 'opsomming', title: 'De verplichte delen van tayammum', items: ['intentie', 'over het gezicht strijken', 'over de handen strijken', 'de volgorde'], page: 56, origin: 'boek' },
    { kind: 'bewijs', title: 'De duur van het strijken', items: ['"De Profeet ﷺ gaf wie thuis is een dag en een nacht, en de reiziger drie dagen en nachten."'], page: 42, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Bij je behoefte horen vaste manieren; wat mensen hindert is verboden.',
    'De gewoonten van de fiṭra passen bij de aard waarmee Allah de mens schiep.',
    'De woeḍoe heeft voorwaarden, zes verplichte delen, soenna’s en dingen die haar verbreken.',
    'Strijken over sokken kent vier voorwaarden en een vaste termijn; verband is anders.',
    'De ghusl is in vijf gevallen verplicht en kent een volledige en een minimale vorm.',
    'Tayammum vervangt water als dat niet kan, en vervalt als er water is.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is istijmār?', options: ['de sporen verwijderen met stenen en dergelijke', 'reinigen met water', 'de handen wassen', 'de mond spoelen'], answer: 0, explain: 'Met water heet het istinjāʾ.', page: 25 },
    { type: 'mc', q: 'Hoeveel verplichte delen heeft de woeḍoe?', options: ['zes', 'vier', 'vijf', 'tien'], answer: 0, explain: 'Vier lichaamsdelen, de volgorde en zonder onderbreking.', page: 34 },
    { type: 'tf', q: 'Je spreekt de intentie voor de woeḍoe uit.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat is niet overgeleverd.', page: 32 },
    { type: 'mc', q: 'Wat verbreekt de woeḍoe?', options: ['kamelenvlees eten', 'schapenvlees eten', 'een kort dutje', 'de billen aanraken'], answer: 0, explain: 'Vanwege de hadith van Jābir ibn Samura.', page: 39 },
    { type: 'mc', q: 'Hoe lang mag een reiziger over zijn sokken strijken?', options: ['drie dagen en nachten', 'een dag en een nacht', 'een week', 'tot hij terug is'], answer: 0, explain: 'Vanwege de hadith van ʿAlī.', page: 42 },
    { type: 'tf', q: 'Als de termijn voor het strijken voorbij is, is je woeḍoe volgens de sterkste mening verbroken.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'De woeḍoe blijft; alleen strijken mag niet meer.', page: 43 },
    { type: 'mc', q: 'Wanneer is de ghusl verplicht?', options: ['na gemeenschap, ook zonder zaadlozing', 'na slaap', 'na aanraking van het geslachtsdeel', 'na kamelenvlees'], answer: 0, explain: 'In een bewoording: "ook zonder zaadlozing".', page: 48 },
    { type: 'mc', q: 'Wat als iemand met tayammum tijdens het gebed water vindt?', options: ['tayammum vervalt: woeḍoe doen en opnieuw beginnen', 'het gebed afmaken', 'later herhalen', 'niets'], answer: 0, explain: 'Omdat de vervanging niet meer nodig is.', page: 57 }
  ]),
  note: 'Oefeningen van het boek op p. 29, 40, 47, 53 en 58. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-fiqh', chapter: '5', unit: 2, ar, nl }
