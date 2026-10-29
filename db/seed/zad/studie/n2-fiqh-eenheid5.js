// Hoofdstukkaart bij الفقه (٢), eenheid 5: الجنائز (lessen 18–22, boek p. 68–79).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Waar het boek een eigen oordeel geeft (de lijst van vernieuwingen bij begrafenissen, het verbod
// voor vrouwen om de stoet te volgen, de tweede voorwaarde van het gebed voor een afwezige), staat
// dat er als oordeel van het boek bij. Twee hadith die het boek afgebroken citeert, staan hier ook
// afgebroken (…).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '68–79',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'أكثروا من ذكر هاذم اللذات', takhrij: 'الترمذي وحسنه', note: 'هاذم: قاطع.', pages: [68], nl: 'Denk veel aan wat de genoegens afsnijdt', nlNote: 'Hādhim: wat afsnijdt, de dood.' },
  { narrator: '', text: 'خرج النبي ﷺ يوم مات النجاشي ملك الحبشة فنعاه، وصفهم وصلى عليه', takhrij: 'في الصحيحين', note: 'دليل إباحة النعي للحضور والصلاة، ودليل الصلاة على الغائب.', pages: [68, 73], nl: 'Op de dag dat de Negus, koning van Abessinië, stierf, ging de Profeet ﷺ naar buiten, maakte zijn dood bekend, zette de mensen in rijen en bad over hem', nlNote: 'Bewijs dat je een overlijden mag bekendmaken voor de begrafenis en het gebed, en voor het gebed over een afwezige.' },
  { narrator: '', text: 'إن الروح إذا قبض تبعه البصر، فلا تقولوا إلا خيرا، فإن الملائكة يؤمنون على ما تقولون', takhrij: 'رواه مسلم', note: 'قاله لما أغمض أبا سلمة.', pages: [68], nl: 'Als de ziel wordt weggenomen, volgt de blik haar. Zeg dus alleen goeds, want de engelen zeggen āmīn op wat jullie zeggen', nlNote: 'Gezegd toen hij de ogen van Abū Salama sloot.' },
  { narrator: 'عائشة', text: 'أن النبي ﷺ حين توفي سجي ببرد حبرة', takhrij: 'متفق عليه', note: 'البرد الحبرة: برد يمانية مخططة.', pages: [68], nl: 'Toen de Profeet ﷺ overleed, werd hij bedekt met een gestreepte Jemenitische mantel', nlNote: 'Burd ḥibara: een gestreepte mantel uit Jemen.' },
  { narrator: 'أبو هريرة', text: 'أسرعوا بالجنازة، فإن تك صالحة فخير تقدمونها إليه، وإن يك سوى ذلك فشر تضعونه عن رقابكم', takhrij: 'البخاري ومسلم', note: '', pages: [69, 74], nl: 'Haast je met de baar: is het een goed mens, dan is het goeds waar je hem naartoe brengt; is het anders, dan is het kwaad dat je van je schouders legt', nlNote: '' },
  { narrator: '', text: 'نفس المؤمن معلقة بدينه حتى يقضى عنه', takhrij: 'أحمد والترمذي وحسنه', note: 'وجوب الإسراع بقضاء ديونه.', pages: [69], nl: 'De ziel van de gelovige hangt aan zijn schuld tot die voor hem is afbetaald', nlNote: 'Zijn schulden moeten snel worden betaald.' },
  { narrator: '', text: 'اغسلوه بماء وسدر', takhrij: 'البخاري ومسلم', note: 'في المحرم الذي وقصته ناقته؛ وفيه أيضًا: «وكفنوه في ثوبين» و«ولا تخمروا رأسه» (ص٧١).', pages: [69, 71], nl: 'Was hem met water en lotusblad', nlNote: 'Over de pelgrim die door zijn kameel werd afgeworpen; daarin ook "wikkel hem in twee doeken" en "bedek zijn hoofd niet" (p. 71).' },
  { narrator: '', text: 'اغسلنها ثلاثا أو خمسا أو سبعا', takhrij: 'البخاري ومسلم', note: 'في ابنته زينب.', pages: [69], nl: 'Was haar drie, vijf of zeven keer', nlNote: 'Over zijn dochter Zaynab.' },
  { narrator: '', text: 'ما ضرك لو مت قبلي فقمت عليك فغسلتك وكفنتك', takhrij: 'ابن ماجه وحسنه الألباني', note: 'قاله لعائشة. ' + FYI_NOTE, pages: [70], nl: 'Wat zou het jou schaden als je vóór mij stierf en ik voor je zorgde, je waste en in doeken wikkelde?', nlNote: 'Gezegd tegen ʿĀʾisha. ' + FYI_NOTE_NL },
  { narrator: 'عائشة', text: 'لو استقبلت من أمري ما استدبرت ما غسل النبي ﷺ غير نسائه', takhrij: 'أبو داود وابن ماجه وصححه الألباني', note: FYI_NOTE, pages: [70], nl: 'Als ik vooraf had geweten wat ik achteraf wist, dan hadden alleen zijn vrouwen de Profeet ﷺ gewassen', nlNote: FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'من غسل ميتا فليغتسل', takhrij: 'ابن ماجه وصححه الألباني', note: 'على الاستحباب. ' + FYI_NOTE, pages: [71], nl: 'Wie een dode wast, laat hij zich wassen', nlNote: 'Als aanbeveling. ' + FYI_NOTE_NL },
  { narrator: '', text: 'أمر بقتلى أحد أن يدفنوا بدمائهم، ولم يغسلوا، ولم يصل عليهم', takhrij: 'رواه البخاري', note: 'شهيد المعركة. ' + FYI_NOTE, pages: [71], nl: 'Hij gaf opdracht de gesneuvelden van Uḥud met hun bloed te begraven; zij werden niet gewassen en er werd niet over hen gebeden', nlNote: 'De martelaar op het slagveld. ' + FYI_NOTE_NL },
  { narrator: 'خباب بن الأرت', text: 'فأمرنا النبي ﷺ أن نغطي رأسه، وأن نجعل على رجليه من الإذخر', takhrij: 'متفق عليه', note: 'في تكفين مصعب بن عمير؛ الإذخر نبتة طيبة الرائحة. ' + FYI_NOTE, pages: [71], nl: 'De Profeet ﷺ droeg ons op zijn hoofd te bedekken en op zijn voeten wat idhkhir te leggen', nlNote: 'Over het lijkkleed van Muṣʿab ibn ʿUmayr; idhkhir is een welriekende plant. ' + FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'من شهد الجنازة حتى يصلى عليها فله قيراط، ومن شهدها حتى تدفن فله قيراطان. قيل: وما القيراطان؟ قال: مثل الجبلين العظيمين', takhrij: 'متفق عليه', note: '', pages: [72, 74], nl: 'Wie bij de baar is tot erover gebeden wordt, krijgt een qīrāṭ; wie erbij is tot hij begraven is, krijgt twee. Gevraagd werd: wat zijn twee qīrāṭ? Hij zei: als twee enorme bergen', nlNote: '' },
  { narrator: '', text: 'اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نزله، ووسع مدخله، واغسله بالماء والثلج والبرد، ونقه من الخطايا كما نقيت الثوب الأبيض من الدنس، وأبدله دارا خيرا من داره، وأهلا خيرا من أهله، وزوجا خيرا من زوجه، وأدخله الجنة، وأعذه من عذاب القبر، أو من عذاب النار', takhrij: 'رواه مسلم', note: 'من الدعاء للميت بعد التكبيرة الثالثة، ويؤنث الضمير للأنثى.', pages: [72], nl: 'O Allah, vergeef hem en ontferm U over hem, bescherm hem en scheld hem kwijt, maak zijn ontvangst eervol en zijn ingang ruim, was hem met water, sneeuw en hagel, reinig hem van zonden zoals U een wit kleed van vuil reinigt, geef hem een beter huis dan zijn huis, een betere familie dan zijn familie en een betere echtgenote dan zijn echtgenote, laat hem het Paradijs binnengaan en bescherm hem tegen de straf van het graf, of de straf van het Vuur', nlNote: 'Een smeekbede voor de dode na de derde takbīr; voor een vrouw in de vrouwelijke vorm.' },
  { narrator: '', text: 'اللهم اغفر لحينا وميتنا، وصغيرنا وكبيرنا، وذكرنا وأنثانا، وشاهدنا وغائبنا، اللهم من أحييته منا فأحيه على الإيمان، ومن توفيته منا فتوفه على الإسلام، اللهم لا تحرمنا أجره ولا تضلنا بعده', takhrij: 'أبو داود وصححه الألباني', note: '', pages: [72], nl: 'O Allah, vergeef onze levenden en onze doden, onze jongeren en ouderen, onze mannen en vrouwen, wie aanwezig is en wie afwezig. O Allah, wie van ons U laat leven, laat hem leven met geloof, en wie van ons U laat sterven, laat hem sterven in de islam. O Allah, onthoud ons zijn beloning niet en laat ons na hem niet dwalen', nlNote: '' },
  { narrator: '', text: 'حق المسلم على المسلم خمس: رد السلام، وعيادة المريض، واتباع الجنائز…', takhrij: 'متفق عليه', note: 'كما اقتصر عليه الكتاب.', pages: [74], nl: 'De moslim heeft vijf rechten op de moslim: de groet beantwoorden, de zieke bezoeken, de baar volgen…', nlNote: 'Zoals het boek hem verkort aanhaalt.' },
  { narrator: '', text: 'كان النبي ﷺ وأبو بكر وعمر يمشون أمام الجنازة', takhrij: 'أبو داود والنسائي وصححه الألباني', note: '', pages: [74], nl: 'De Profeet ﷺ, Abū Bakr en ʿUmar liepen vóór de baar', nlNote: '' },
  { narrator: '', text: 'احفروا وأوسعوا وأحسنوا', takhrij: 'الترمذي وصححه', note: 'تعميق القبر وتوسيعه.', pages: [75], nl: 'Graaf, maak het ruim en doe het goed', nlNote: 'Het graf diep en ruim maken.' },
  { narrator: '', text: 'قبلتكم أحياء وأمواتا', takhrij: 'أبو داود وحسنه الألباني', note: 'يوضع في لحده مستقبل القبلة.', pages: [75], nl: 'Jullie qibla, levend en dood', nlNote: 'De dode wordt in het graf naar de qibla gelegd.' },
  { narrator: '', text: 'استغفروا لأخيكم، واسألوا له التثبيت، فإنه الآن يسأل', takhrij: 'أبو داود وصححه الألباني', note: '', pages: [75], nl: 'Vraag vergeving voor jullie broeder en vraag standvastigheid voor hem, want hij wordt nu ondervraagd', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'لأن يجلس أحدكم على جمرة فتحرق ثيابه فتخلص إلى جلده خير له من أن يجلس على قبر', takhrij: 'رواه مسلم', note: '', pages: [75], nl: 'Dat een van jullie op een gloeiend kooltje gaat zitten dat door zijn kleren brandt tot op zijn huid, is beter voor hem dan dat hij op een graf gaat zitten', nlNote: '' },
  { narrator: 'أبو الهياج الأسدي', text: 'قال لي علي: ألا أبعثك على ما بعثني عليه رسول الله ﷺ: ألا تدع تمثالا إلا طمسته، ولا قبرا مشرفا إلا سويته', takhrij: 'رواه مسلم', note: FYI_NOTE, pages: [76], nl: 'ʿAlī zei tegen mij: zal ik je niet sturen met de opdracht waarmee de Boodschapper van Allah ﷺ mij stuurde? Laat geen beeld staan zonder het uit te wissen, en geen verhoogd graf zonder het gelijk te maken', nlNote: FYI_NOTE_NL },
  { narrator: 'جابر بن عبد الله', text: 'نهى رسول الله ﷺ أن يجصص القبر، وأن يقعد عليه، وأن يبنى عليه', takhrij: 'رواه مسلم', note: '', pages: [76], nl: 'De Boodschapper van Allah ﷺ verbood het graf te pleisteren, erop te zitten en erop te bouwen', nlNote: '' },
  { narrator: 'أم عطية', text: 'نهينا عن اتباع الجنائز', takhrij: 'متفق عليه', note: 'ويرى الكتاب تحريم خروج النساء مع الجنائز.', pages: [76], nl: 'Ons werd verboden de baar te volgen', nlNote: 'Het boek houdt het voor verboden dat vrouwen met de stoet meegaan.' },
  { narrator: '', text: 'لله ما أخذ، وله ما أعطى، وكل عنده بأجل مسمى، فلتصبر ولتحتسب', takhrij: 'البخاري ومسلم', note: 'من ألفاظ التعزية. ' + FYI_NOTE, pages: [77], nl: 'Aan Allah behoort wat Hij nam en wat Hij gaf, en alles heeft bij Hem een vastgestelde termijn; laat haar dus geduldig zijn en op beloning hopen', nlNote: 'Woorden van troost. ' + FYI_NOTE_NL },
  { narrator: '', text: 'لا تحد امرأة على ميت فوق ثلاث، إلا على زوج أربعة أشهر وعشرا', takhrij: 'متفق عليه', note: 'وتنتهي عدة الحامل بوضع الحمل. ' + FYI_NOTE, pages: [77], nl: 'Een vrouw rouwt niet langer dan drie dagen om een dode, behalve om een echtgenoot: vier maanden en tien dagen', nlNote: 'De wachttijd van een zwangere eindigt met de bevalling. ' + FYI_NOTE_NL },
  { narrator: '', text: 'ليس منا من لطم الخدود، وشق الجيوب، ودعا بدعوى الجاهلية', takhrij: 'متفق عليه', note: FYI_NOTE, pages: [77, 78], nl: 'Wie op de wangen slaat, de kleding scheurt en roept zoals in de tijd van onwetendheid, hoort niet bij ons', nlNote: FYI_NOTE_NL },
  { narrator: 'جرير بن عبد الله البجلي', text: 'كنا نعد الاجتماع إلى أهل الميت وصنعة الطعام بعد دفنه من النياحة', takhrij: 'أحمد وابن ماجه وصححه الألباني', note: FYI_NOTE, pages: [77], nl: 'Wij beschouwden het samenkomen bij de familie van de dode en het bereiden van eten na de begrafenis als weeklagen', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'كنت نهيتكم عن زيارة القبور فزوروها', takhrij: 'رواه مسلم', note: 'وزاد الترمذي: «فإنها تذكر الآخرة»، وصححه الألباني. ' + FYI_NOTE, pages: [78], nl: 'Ik had jullie verboden de graven te bezoeken; bezoek ze nu', nlNote: 'At-Tirmidhī voegt toe: "want het herinnert aan het Hiernamaals"; al-Albānī noemde dat ṣaḥīḥ. ' + FYI_NOTE_NL },
  { narrator: '', text: 'إن العين تدمع، والقلب يحزن، ولا نقول إلا ما يرضي ربنا…', takhrij: 'متفق عليه', note: 'قاله لما مات ابنه إبراهيم. ' + FYI_NOTE, pages: [78], nl: 'Het oog traant en het hart is bedroefd, maar wij zeggen alleen wat onze Heer behaagt…', nlNote: 'Gezegd toen zijn zoon Ibrāhīm stierf. ' + FYI_NOTE_NL },
  { narrator: '', text: 'النائحة إذا لم تتب قبل موتها تقام يوم القيامة وعليها سربال من قطران ودرع من جرب', takhrij: 'رواه مسلم', note: FYI_NOTE, pages: [78], nl: 'De weeklaagster die zich vóór haar dood niet bekeert, wordt op de Dag van de Opstanding opgewekt met een gewaad van teer en een hemd van schurft', nlNote: FYI_NOTE_NL }
]

const TAKHRIJ_NL = {
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'في الصحيحين': 'al-Bukhārī en Muslim',
  'رواه مسلم': 'Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أحمد والترمذي وحسنه': 'Aḥmad en at-Tirmidhī, die hem ḥasan noemde',
  'ابن ماجه وحسنه الألباني': 'Ibn Māja; al-Albānī noemde hem ḥasan',
  'أبو داود وابن ماجه وصححه الألباني': 'Abū Dāwūd en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'ابن ماجه وصححه الألباني': 'Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'رواه البخاري': 'al-Bukhārī',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود والنسائي وصححه الألباني': 'Abū Dāwūd en an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وصححه': 'at-Tirmidhī, die hem ṣaḥīḥ noemde',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan',
  'أحمد وابن ماجه وصححه الألباني': 'Aḥmad en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'عائشة': 'ʿĀʾisha', 'أبو هريرة': 'Abū Hurayra', 'خباب بن الأرت': 'Khabbāb ibn al-Aratt', 'أبو الهياج الأسدي': 'Abū al-Hayyāj al-Asadī', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'أم عطية': 'Umm ʿAṭiyya', 'جرير بن عبد الله البجلي': 'Jarīr ibn ʿAbd Allāh al-Bajalī' }

const PERSONS = [
  ['abu-salama-ibn-abd-al-asad', 'text', [68], 'أغمض النبي ﷺ عينيه لما مات.', 'De Profeet ﷺ sloot zijn ogen toen hij stierf.'],
  ['aisha', 'text', [68, 70], 'روت تسجية النبي ﷺ ببرد حبرة، وقال لها: «ما ضرك لو مت قبلي».', 'Overleverde dat de Profeet ﷺ met een gestreepte mantel werd bedekt; hij zei tegen haar: "Wat zou het jou schaden als je vóór mij stierf."'],
  ['abu-hurayra', 'text', [69, 71, 72, 75], 'روى الإسراع بالجنازة، وفضل القيراطين، والنهي عن الجلوس على القبر.', 'Overleverde het haasten met de baar, de twee qīrāṭ en het verbod op een graf te zitten.'],
  ['zaynab-bint-rasul-allah', 'text', [69], 'ابنة النبي ﷺ، قال في غسلها: «اغسلنها ثلاثًا أو خمسًا أو سبعًا».', 'Dochter van de Profeet ﷺ; over haar wassing zei hij: "Was haar drie, vijf of zeven keer."'],
  ['asma-bint-umays', 'text', [70], 'غسلت زوجها أبا بكر الصديق.', 'Waste haar man Abū Bakr aṣ-Ṣiddīq.'],
  ['abu-bakr-as-siddiq', 'text', [70, 74], 'غسلته زوجته أسماء، وكان يمشي أمام الجنازة.', 'Zijn vrouw Asmāʾ waste hem; hij liep vóór de baar.'],
  ['ali-ibn-abi-talib', 'text', [70, 76], 'غسل فاطمة، وبعث أبا الهياج ألا يدع قبرًا مشرفًا إلا سواه.', 'Waste Fāṭima en stuurde Abū al-Hayyāj om elk verhoogd graf gelijk te maken.'],
  ['fatima', 'text', [70], 'غسلها زوجها علي.', 'Haar man ʿAlī waste haar.'],
  ['ibn-uthaymin', 'text', [70], 'قال: إذا نهي عن الصلاة على الكافر فما دونها من باب أولى.', 'Zei: als het gebed over een ongelovige verboden is, dan geldt dat des te meer voor wat minder is.'],
  ['khabbab-ibn-al-aratt', 'text', [71], 'روى تكفين مصعب بن عمير.', 'Overleverde het lijkkleed van Muṣʿab ibn ʿUmayr.'],
  ['musab-ibn-umayr', 'text', [71], 'كفن في ثوب قصير فغطي رأسه وجعل على رجليه الإذخر.', 'Werd gewikkeld in een te kort kleed; zijn hoofd werd bedekt en op zijn voeten werd idhkhir gelegd.'],
  ['umar-ibn-al-khattab', 'text', [74], 'كان يمشي أمام الجنازة.', 'Liep vóór de baar.'],
  ['ibn-al-qayyim', 'text', [76], 'قال: لم يكن من هديه ﷺ أن يجتمع للعزاء.', 'Zei: het hoorde niet bij zijn ﷺ leiding om samen te komen voor rouwbeklag.'],
  ['ibn-taymiyya', 'text', [76, 78], 'قال: استئجار من يقرأ ويهدي إلى الميت ليس بمشروع، وقسم زيارة القبور إلى شرعية وبدعية.', 'Zei: mensen betalen om te reciteren en het aan de dode op te dragen is niet voorgeschreven; verdeelde grafbezoek in voorgeschreven en vernieuwd.'],
  ['abu-al-hayyaj-al-asadi', 'text', [76], 'بعثه علي ألا يدع قبرًا مشرفًا إلا سواه.', 'ʿAlī stuurde hem om elk verhoogd graf gelijk te maken.'],
  ['jabir-ibn-abdallah', 'text', [76], 'روى النهي عن تجصيص القبر والبناء عليه.', 'Overleverde het verbod een graf te pleisteren en erop te bouwen.'],
  ['umm-atiyya', 'text', [76], 'قالت: «نهينا عن اتباع الجنائز».', 'Zei: "Ons werd verboden de baar te volgen."'],
  ['jarir-ibn-abdallah-al-bajali', 'text', [77], 'قال: كنا نعد الاجتماع إلى أهل الميت وصنعة الطعام من النياحة.', 'Zei: wij beschouwden samenkomen bij de familie van de dode en eten bereiden als weeklagen.'],
  ['at-turtushi', 'text', [78], 'قال: المآتم ممنوعة بإجماع العلماء.', 'Zei: rouwbijeenkomsten zijn volgens consensus van de geleerden verboden.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'الجنائز',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'ذكر الموت والاستعداد له، وما يفعل بالميت عند موته، وغسله وتكفينه، ثم الصلاة عليه وصفتها، ثم حمله ودفنه وما يسن ويحرم عند القبور، ثم التعزية والإحداد وزيارة القبور وحكم البكاء.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'من الموت إلى الدفن ثم التعزية.',
    root: { label: 'الجنائز', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'عند الموت', sub: 'الدرس ١٨', page: 68, children: ['ذكر الموت', 'النعي', 'التغميض والستر'] },
      { label: 'الغسل والتكفين', sub: 'الدرس ١٩', page: 69, children: ['الإسراع وقضاء الدين', 'غسل الميت', 'الكفن'] },
      { label: 'الصلاة على الميت', sub: 'الدرس ٢٠', page: 72, children: ['أربع تكبيرات', 'الغائب', 'السقط'] },
      { label: 'الحمل والدفن', sub: 'الدرس ٢١', page: 74, children: ['اتباع الجنازة', 'اللحد', 'حرمة القبور'] },
      { label: 'التعزية والزيارة', sub: 'الدرس ٢٢', page: 77, children: ['الإحداد', 'زيارة القبور', 'البكاء والنياحة'] }
    ]
  },
  points: [
    { text: 'يسن الإكثار من ذكر الموت والاستعداد له بالتوبة ورد المظالم.', page: 68 },
    { text: 'يباح النعي للحضور والصلاة والدعاء، أما النعي على صفة الجزع وتعداد المفاخر فمن فعل الجاهلية.', page: 68 },
    { text: 'يجب الإسراع بقضاء دين الميت وتنفيذ وصيته.', page: 69 },
    { text: 'غسل الميت وتكفينه والصلاة عليه ودفنه فروض كفاية.', page: 69 },
    { text: 'لا يغسل شهيد المعركة ولا يصلى عليه، بل يدفن بثيابه.', page: 71 },
    { text: 'صلاة الجنازة أربع تكبيرات ثم تسليمة واحدة عن اليمين.', page: 72 },
    { text: 'يوضع الميت في لحده على شقه الأيمن مستقبل القبلة وجوبًا.', page: 75 },
    { text: 'يحرم الجلوس على القبور والبناء عليها وتجصيصها.', page: 76 }
  ],
  terms: [
    { term: 'هاذم اللذات', translit: 'hādhim al-ladhdhāt', meaning: 'الموت؛ هاذم: قاطع.', explanation: '', notes: [], page: 68 },
    { term: 'الجنازة', translit: 'al-janāza', meaning: 'بفتح الجيم وكسرها بمعنى واحد، وقيل بالفتح الميت وبالكسر ما يحمل عليه.', explanation: '', notes: [], page: 68 },
    { term: 'النعي', translit: 'an-naʿy', meaning: 'الإخبار بموت الميت.', explanation: '', notes: [], page: 68 },
    { term: 'الإذخر', translit: 'al-idhkhir', meaning: 'نبتة طيبة الرائحة.', explanation: '', notes: [], page: 71 },
    { term: 'القيراط', translit: 'al-qīrāṭ', meaning: 'مثل الجبل العظيم من الأجر.', explanation: '', notes: [], page: 72 },
    { term: 'السقط', translit: 'as-siqṭ', meaning: 'الجنين يسقط قبل تمامه.', explanation: 'إذا بلغ أربعة أشهر غسل وكفن وصلي عليه.', notes: [], page: 73 },
    { term: 'اللحد', translit: 'al-laḥd', meaning: 'الشق في جانب القبر يوضع فيه الميت.', explanation: '', notes: [], page: 75 },
    { term: 'الإحداد', translit: 'al-iḥdād', meaning: 'هجر بعض ملاذ الدنيا حزنًا على الميت.', explanation: 'ثلاثة أيام على الأكثر، إلا الزوجة أربعة أشهر وعشرًا.', notes: [], page: 77 },
    { term: 'الندب', translit: 'an-nadb', meaning: 'تعداد محاسن الميت، كقول: وا مطعماه.', explanation: '', notes: [], page: 77 },
    { term: 'النياحة', translit: 'an-niyāḥa', meaning: 'البكاء والندب برفع الصوت.', explanation: '', notes: [], page: 77 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'صفة صلاة الجنازة',
      intro: 'كما في الدرس العشرين.',
      nodes: [
        { label: 'التكبيرة الأولى', sub: 'الاستفتاح والفاتحة' },
        { label: 'التكبيرة الثانية', sub: 'الصلاة الإبراهيمية' },
        { label: 'التكبيرة الثالثة', sub: 'الدعاء للميت' },
        { label: 'التكبيرة الرابعة', sub: 'يقف قليلًا وإن شاء دعا' },
        { label: 'التسليم', sub: 'تسليمة واحدة عن يمينه' }
      ],
      page: 72
    },
    {
      type: 'compare',
      title: 'الرجل والمرأة في الجنازة',
      intro: 'كما في الكتاب.',
      columns: ['الرجل', 'المرأة'],
      rows: [
        { label: 'من يغسله', cells: ['الرجال، ولزوجته أن تغسله', 'النساء، ولزوجها أن يغسلها'] },
        { label: 'الكفن', cells: ['ثلاث لفائف بيض', 'خمسة أثواب: إزار وخمار وقميص ولفافتان'] },
        { label: 'موقف الإمام', cells: ['عند رأسه', 'وسطها'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'ما يفعل بالميت عند موته', text: 'يستحب تغميض عينيه وستره بثوب، ويسرع بتجهيزه ودفنه، وبقضاء ديونه لله أو للآدمي أوصى أم لا، وبتنفيذ وصيته.', page: 68 },
    { title: 'من يغسل الميت', text: 'يختار ثقة عدل عارف بأحكام الغسل، ويقدم الوصي ثم الأقرب فالأقرب إن كانوا عارفين؛ والأقرب ألا يغسل المسلم الكافر ولا يصلي عليه ولو كان قريبًا.', page: 69 },
    { title: 'صفة الغسل (للاطلاع فقط)', text: 'يستر عورته، ويعصر بطنه برفق، وينجيه بخرقة، ثم يوضئه، ثم يغسل رأسه ولحيته بالسدر، ثم الميامن ثم المياسر؛ الواجب غسلة منقية والمستحب ثلاث، وكافور في الأخيرة، وإن تعذر الغسل يمم.', more: FYI, page: 70 },
    { title: 'الكفن', text: 'الواجب ستر جميع البدن بثوب لا يصف البشرة، فإن قصر غطي رأسه وجعل على رجليه الإذخر، ولا يغطى رأس المحرم.', page: 71 },
    { title: 'الدعاء للصغير', text: 'يدعو بنحو: «اللهم اجعله ذخرًا لوالديه وفرطًا وأجرًا وشفيعًا مجابًا…» أو بما تيسر، فليس فيه شيء ثابت عن النبي ﷺ.', page: 72 },
    { title: 'من فاتته الصلاة والغائب', text: 'من فاتته الصلاة صلى على القبر؛ وتشرع الصلاة على الغائب إذا لم يصل عليه في مكانه، ويذكر الكتاب حالة ثانية لمن كان له نفع للمسلمين، وهي محل خلاف.', page: 73 },
    { title: 'حمل الجنازة', text: 'حمل الجنازة وتشييعها خاص بالرجال، مع السكينة وعدم رفع الصوت لا بقراءة ولا بغيرها، والأفضل المشي أمامها، ويكره الجلوس حتى توضع.', page: 74 },
    { title: 'الدفن', text: 'يعمق القبر ويوسع، ويوضع الميت على شقه الأيمن مستقبل القبلة، وتسد فتحة اللحد باللبن، ويرفع القبر قدر شبر، ويستحب الوقوف بعده للدعاء.', page: 75 },
    { title: 'من بدع الجنائز عند الكتاب (للاطلاع فقط)', text: 'قراءة الفاتحة على الميت، والاجتماع للعزاء، واستئجار القراء، ورفع القبور وتجصيصها، وتخصيص زيارة المقابر بأيام معينة، ولبس السواد.', more: FYI, page: 76 },
    { title: 'زيارة القبور والبكاء (للاطلاع فقط)', text: 'تستحب زيارة القبور للرجال للاعتبار والدعاء للميت، وطلب الحوائج من الميت شرك أكبر؛ ولا بأس بالبكاء والحزن بلا تسخط، ويحرم الندب والنياحة وشق الجيوب.', more: FYI, page: 78 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'فروض الكفاية في الميت', items: ['غسله', 'تكفينه', 'الصلاة عليه', 'حمله ودفنه'], page: 69, origin: 'boek' },
    { kind: 'uitzondering', title: 'شهيد المعركة', items: ['لا يغسل', 'لا يكفن بل يدفن بثيابه', 'لا يصلى عليه'], page: 71, origin: 'boek' },
    { kind: 'opsomming', title: 'ما يحرم عند القبور', items: ['الجلوس عليها', 'المشي عليها بالنعال', 'البناء عليها وتجصيصها', 'الكتابة عليها'], page: 76, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'يستعد المسلم للموت، ويباح النعي دون جزع.',
    'يسرع بقضاء دين الميت وغسله وتكفينه، وكلها فروض كفاية.',
    'صلاة الجنازة أربع تكبيرات وتسليمة واحدة.',
    'يوضع الميت مستقبل القبلة، ويحرم الجلوس على القبور والبناء عليها.',
    'الإحداد ثلاثة أيام إلا الزوجة، وتحرم النياحة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما حكم غسل الميت؟', options: ['فرض كفاية', 'سنة', 'فرض عين', 'مباح'], answer: 0, explain: 'واجب على الكفاية إجماعًا.', page: 69 },
    { type: 'tf', q: 'يغسل شهيد المعركة ويصلى عليه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يدفن بدمائه وثيابه.', page: 71 },
    { type: 'mc', q: 'ماذا يقال بعد التكبيرة الثانية في صلاة الجنازة؟', options: ['الصلاة الإبراهيمية', 'الفاتحة', 'الدعاء للميت', 'التسليم'], answer: 0, explain: 'كما في صفتها.', page: 72 },
    { type: 'tf', q: 'يسلم في صلاة الجنازة تسليمتين.', options: ['صواب', 'خطأ'], answer: 1, explain: 'تسليمة واحدة عن يمينه.', page: 72 },
    { type: 'mc', q: 'أين يقف الإمام من جنازة المرأة؟', options: ['وسطها', 'عند رأسها', 'عند رجليها', 'خلفها'], answer: 0, explain: 'وعند رأس الرجل.', page: 73 },
    { type: 'mc', q: 'كم مدة إحداد الزوجة على زوجها؟', options: ['أربعة أشهر وعشرًا', 'ثلاثة أيام', 'سنة كاملة', 'شهرًا'], answer: 0, explain: 'إلا الحامل فبوضع الحمل.', page: 77 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٧٩. أجزاء «للاطلاع فقط» في الكتاب: تغسيل الزوجين وصفة الغسل والكفن (ص٧٠–٧١)، من بدع الجنائز (ص٧٦)، التعزية وزيارة القبور (ص٧٧–٧٨).'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'De begrafenis',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Aan de dood denken en je erop voorbereiden; wat je doet bij een overlijden; de wassing en het lijkkleed; het gebed over de dode en hoe het gaat; de baar dragen, begraven en wat bij graven sunna en verboden is; en troosten, rouwen, grafbezoek en huilen.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'Van het overlijden tot de begrafenis, en daarna het troosten.',
    root: { label: 'De begrafenis', sub: 'Eenheid 5' },
    nodes: [
      { label: 'Bij het overlijden', sub: 'les 18', page: 68, children: ['aan de dood denken', 'het bekendmaken', 'ogen sluiten en bedekken'] },
      { label: 'Wassen en lijkkleed', sub: 'les 19', page: 69, children: ['haast en schulden', 'de wassing', 'het lijkkleed'] },
      { label: 'Het gebed over de dode', sub: 'les 20', page: 72, children: ['vier takbīrs', 'de afwezige', 'de miskraam'] },
      { label: 'Dragen en begraven', sub: 'les 21', page: 74, children: ['de baar volgen', 'het graf', 'eerbied voor graven'] },
      { label: 'Troosten en grafbezoek', sub: 'les 22', page: 77, children: ['rouwen', 'graven bezoeken', 'huilen en weeklagen'] }
    ]
  },
  points: [
    { text: 'Het is sunna veel aan de dood te denken en je erop voor te bereiden met berouw en het teruggeven van onrecht.', page: 68 },
    { text: 'Een overlijden bekendmaken voor de begrafenis, het gebed en de smeekbede mag; het bekendmaken met jammeren en het opsommen van roem is een gebruik van vóór de islam.', page: 68 },
    { text: 'De schulden van de dode moeten snel worden betaald en zijn testament snel uitgevoerd.', page: 69 },
    { text: 'De dode wassen, in doeken wikkelen, over hem bidden en hem begraven zijn gemeenschapsplichten.', page: 69 },
    { text: 'De martelaar op het slagveld wordt niet gewassen en er wordt niet over hem gebeden; hij wordt in zijn kleren begraven.', page: 71 },
    { text: 'Het gebed over de dode heeft vier takbīrs en één groet naar rechts.', page: 72 },
    { text: 'De dode wordt in het graf verplicht op zijn rechterzij naar de qibla gelegd.', page: 75 },
    { text: 'Op graven zitten, erop bouwen en ze pleisteren is verboden.', page: 76 }
  ],
  terms: [
    { term: 'هاذم اللذات', translit: 'hādhim al-ladhdhāt', meaning: 'De dood; hādhim is wat afsnijdt.', explanation: '', notes: [], page: 68 },
    { term: 'الجنازة', translit: 'al-janāza', meaning: 'Met a of i, dezelfde betekenis; ook gezegd: met a de dode, met i de baar.', explanation: '', notes: [], page: 68 },
    { term: 'النعي', translit: 'an-naʿy', meaning: 'Een overlijden bekendmaken.', explanation: '', notes: [], page: 68 },
    { term: 'الإذخر', translit: 'al-idhkhir', meaning: 'Een welriekende plant.', explanation: '', notes: [], page: 71 },
    { term: 'القيراط', translit: 'al-qīrāṭ', meaning: 'Een beloning zo groot als een enorme berg.', explanation: '', notes: [], page: 72 },
    { term: 'السقط', translit: 'as-siqṭ', meaning: 'Een vrucht die vóór voldragenheid geboren wordt.', explanation: 'Vanaf vier maanden wordt hij gewassen, in doeken gewikkeld en wordt er over hem gebeden.', notes: [], page: 73 },
    { term: 'اللحد', translit: 'al-laḥd', meaning: 'De nis in de zijwand van het graf waarin de dode wordt gelegd.', explanation: '', notes: [], page: 75 },
    { term: 'الإحداد', translit: 'al-iḥdād', meaning: 'Uit rouw sommige wereldse genoegens laten.', explanation: 'Hoogstens drie dagen, behalve de weduwe: vier maanden en tien dagen.', notes: [], page: 77 },
    { term: 'الندب', translit: 'an-nadb', meaning: 'De goede eigenschappen van de dode opsommen, zoals "o, mijn voeder!"', explanation: '', notes: [], page: 77 },
    { term: 'النياحة', translit: 'an-niyāḥa', meaning: 'Huilen en opsommen met luide stem.', explanation: '', notes: [], page: 77 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Hoe het gebed over de dode gaat',
      intro: 'Zoals in les 20.',
      nodes: [
        { label: 'Eerste takbīr', sub: 'openingsgebed en al-Fātiḥa' },
        { label: 'Tweede takbīr', sub: 'zegenbede over de Profeet (aṣ-ṣalāt al-ibrāhīmiyya)' },
        { label: 'Derde takbīr', sub: 'smeekbede voor de dode' },
        { label: 'Vierde takbīr', sub: 'even blijven staan, en een smeekbede als je wilt' },
        { label: 'De groet', sub: 'één groet naar rechts' }
      ],
      page: 72
    },
    {
      type: 'compare',
      title: 'Man en vrouw bij de begrafenis',
      intro: 'Zoals in het boek.',
      columns: ['Man', 'Vrouw'],
      rows: [
        { label: 'Wie wast', cells: ['mannen; zijn vrouw mag hem wassen', 'vrouwen; haar man mag haar wassen'] },
        { label: 'Lijkkleed', cells: ['drie witte doeken', 'vijf stukken: lendendoek, hoofddoek, hemd en twee doeken'] },
        { label: 'Plaats van de imam', cells: ['bij zijn hoofd', 'bij haar midden'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'Wat je doet bij een overlijden', text: 'Het is aanbevolen de ogen te sluiten en de dode te bedekken; je haast je met de voorbereiding en de begrafenis, met het betalen van zijn schulden aan Allah of aan mensen, of hij het nu vroeg of niet, en met het uitvoeren van zijn testament.', page: 68 },
    { title: 'Wie de dode wast', text: 'Iemand die betrouwbaar is en de regels van de wassing kent; eerst wie in het testament genoemd is, dan de naaste verwanten als zij het weten. Volgens de sterkste mening wast een moslim geen ongelovige en bidt hij niet over hem, ook niet over een verwant.', page: 69 },
    { title: 'Hoe de wassing gaat (alleen ter kennisname)', text: 'De schaamstreek bedekken, zacht op de buik drukken, met een doek reinigen, dan de kleine wassing, dan hoofd en baard met lotusblad, dan de rechterkant en daarna de linker; één reinigende wassing is verplicht en drie aanbevolen, met kamfer in de laatste; lukt wassen niet, dan tayammum.', more: FYI_NL, page: 70 },
    { title: 'Het lijkkleed', text: 'Verplicht is het hele lichaam bedekken met stof die de huid niet laat zien; is het te kort, dan bedek je het hoofd en leg je idhkhir op de voeten; het hoofd van een man in iḥrām wordt niet bedekt.', page: 71 },
    { title: 'De smeekbede voor een kind', text: 'Met woorden als "O Allah, maak hem een schat voor zijn ouders, een voorloper, een beloning en een voorspraak die verhoord wordt…" of wat makkelijk is; hiervoor is niets vastgesteld van de Profeet ﷺ.', page: 72 },
    { title: 'Wie het gebed miste, en de afwezige', text: 'Wie het gebed miste, bidt bij het graf; over een afwezige wordt gebeden als er ter plaatse niet over hem gebeden is. Het boek noemt een tweede geval, iemand die van nut was voor de moslims, maar daarover verschillen de geleerden.', page: 73 },
    { title: 'De baar dragen', text: 'Dragen en meelopen is voor mannen; rustig en zonder stemverheffing, ook niet met recitatie; het beste is vóór de baar te lopen; afgeraden is gaan zitten voordat de baar is neergezet.', page: 74 },
    { title: 'Begraven', text: 'Het graf wordt diep en ruim gemaakt; de dode ligt op zijn rechterzij naar de qibla; de nis wordt met tichels gesloten; het graf wordt een span hoog; daarna is het aanbevolen te blijven staan voor een smeekbede.', page: 75 },
    { title: 'Vernieuwingen bij begrafenissen volgens het boek (alleen ter kennisname)', text: 'Al-Fātiḥa reciteren voor de dode, samenkomen voor rouwbeklag, reciteerders betalen, graven verhogen en pleisteren, grafbezoek op vaste dagen, en zwart dragen.', more: FYI_NL, page: 76 },
    { title: 'Grafbezoek en huilen (alleen ter kennisname)', text: 'Graven bezoeken is voor mannen aanbevolen, om lering te trekken en voor de dode te bidden; de dode om je noden vragen is grote shirk. Huilen en verdriet zonder verzet tegen de beschikking is geen probleem; opsommen, weeklagen en kleding scheuren is verboden.', more: FYI_NL, page: 78 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Gemeenschapsplichten bij een dode', items: ['wassen', 'in doeken wikkelen', 'over hem bidden', 'dragen en begraven'], page: 69, origin: 'boek' },
    { kind: 'uitzondering', title: 'De martelaar op het slagveld', items: ['wordt niet gewassen', 'krijgt geen lijkkleed maar wordt in zijn kleren begraven', 'er wordt niet over hem gebeden'], page: 71, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat bij graven verboden is', items: ['erop zitten', 'erop lopen met schoenen', 'erop bouwen en pleisteren', 'erop schrijven'], page: 76, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De moslim bereidt zich op de dood voor; een overlijden bekendmaken mag, zonder jammeren.',
    'Je haast je met de schulden, de wassing en het lijkkleed; dat zijn gemeenschapsplichten.',
    'Het gebed over de dode heeft vier takbīrs en één groet.',
    'De dode ligt naar de qibla; op graven zitten of erop bouwen is verboden.',
    'Rouwen duurt drie dagen behalve voor de weduwe; weeklagen is verboden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het oordeel over het wassen van de dode?', options: ['een gemeenschapsplicht', 'sunna', 'een individuele plicht', 'toegestaan'], answer: 0, explain: 'Volgens consensus een gemeenschapsplicht.', page: 69 },
    { type: 'tf', q: 'De martelaar op het slagveld wordt gewassen en er wordt over hem gebeden.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij wordt met zijn bloed en in zijn kleren begraven.', page: 71 },
    { type: 'mc', q: 'Wat zeg je na de tweede takbīr in het gebed over de dode?', options: ['de zegenbede over de Profeet', 'al-Fātiḥa', 'de smeekbede voor de dode', 'de groet'], answer: 0, explain: 'Zoals in de vorm van het gebed.', page: 72 },
    { type: 'tf', q: 'In het gebed over de dode groet je twee keer.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Eén groet naar rechts.', page: 72 },
    { type: 'mc', q: 'Waar staat de imam bij de baar van een vrouw?', options: ['bij haar midden', 'bij haar hoofd', 'bij haar voeten', 'erachter'], answer: 0, explain: 'En bij het hoofd van een man.', page: 73 },
    { type: 'mc', q: 'Hoe lang rouwt een weduwe om haar man?', options: ['vier maanden en tien dagen', 'drie dagen', 'een heel jaar', 'een maand'], answer: 0, explain: 'Behalve de zwangere: tot de bevalling.', page: 77 }
  ]),
  note: 'Oefening van het boek op p. 79. Delen die het boek alleen ter kennisname geeft: wassing door de echtgenoot, de vorm van de wassing en het lijkkleed (p. 70–71), vernieuwingen bij begrafenissen (p. 76), troosten en grafbezoek (p. 77–78). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '18', unit: 5, ar, nl }
