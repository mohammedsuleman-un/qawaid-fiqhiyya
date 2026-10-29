// Hoofdstukkaart bij السيرة النبوية (٢): الشمائل النبوية, eenheid 1 (lessen 1–5, boek p. 8–23).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Niet in het hadith-tabblad: berichten over monniken (Salmān p. 21, Baḥīrā p. 21), die geen uitspraak
// of beschrijving van de Profeet ﷺ door een metgezel zijn. Niet overgenomen: de citaten van westerse
// schrijvers op p. 10–11 (zonder bronwerk) en het verhaal zonder bron over een monnik op p. 20.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (٢): الشمائل النبوية، سلسلة زاد العلمية',
  pages: '8–23',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Seerah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'جابر بن سمرة', text: 'رأيت رسول الله ﷺ في ليلة إضحيان، فجعلت أنظر إلى رسول الله ﷺ وإلى القمر، فإذا هو عندي أحسن من القمر', takhrij: 'أخرجه الترمذي وحسنه', note: 'ليلة إضحيان: ليلة مضيئة مقمرة.', pages: [12], nl: 'Ik zag de Boodschapper van Allah ﷺ in een heldere maannacht. Ik keek naar de Boodschapper van Allah ﷺ en naar de maan, en voor mij was hij mooier dan de maan', nlNote: 'Een heldere nacht met volle maan.' },
  { narrator: 'البراء بن عازب', text: 'أكان وجه رسول الله ﷺ مثل السيف؟ قال: لا، مثل القمر', takhrij: 'في البخاري', note: '', pages: [12], nl: 'Was het gezicht van de Boodschapper van Allah ﷺ als een zwaard? Hij zei: Nee, als de maan', nlNote: '' },
  { narrator: 'كعب بن مالك', text: 'كان رسول الله ﷺ إذا سر استنار وجهه حتى كأنه قطعة قمر', takhrij: 'أخرجه البخاري ومسلم', note: '', pages: [12], nl: 'Als de Boodschapper van Allah ﷺ blij was, straalde zijn gezicht alsof het een stuk van de maan was', nlNote: '' },
  { narrator: 'جابر بن سمرة', text: 'وجهه مثل السيف؟ قال: لا، بل كان مثل الشمس والقمر مستديرا', takhrij: 'أخرجه مسلم', note: 'في الإشراق والاستدارة.', pages: [12], nl: 'Was zijn gezicht als een zwaard? Hij zei: Nee, het was als de zon en de maan, rond', nlNote: 'Over de glans en de ronding.' },
  { narrator: 'علي بن أبي طالب', text: 'لم يكن رسول الله ﷺ بالمطهم ولا المكلثم، وكان في وجهه تدوير', takhrij: 'رواه الترمذي', note: '', pages: [12], nl: 'De Boodschapper van Allah ﷺ had geen opgezwollen en geen volkomen rond gezicht; zijn gezicht was wat rond', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كان رسول الله ﷺ ليس بالجعد القطط ولا بالسبط، فتوفاه الله وليس في رأسه ولحيته عشرون شعرة بيضاء', takhrij: 'البخاري ومسلم', note: '', pages: [13], nl: 'Het haar van de Boodschapper van Allah ﷺ was niet sterk gekruld en niet sluik. Allah nam hem tot Zich terwijl er nog geen twintig witte haren in zijn hoofd en baard waren', nlNote: '' },
  { narrator: 'عائشة', text: 'كان شعر رسول الله ﷺ فوق الوفرة ودون الجمة', takhrij: 'رواه أبو داود بسند صحيح', note: '', pages: [13], nl: 'Het haar van de Boodschapper van Allah ﷺ kwam voorbij de oorlel, maar niet tot de schouders', nlNote: '' },
  { narrator: 'جابر بن سمرة', text: 'كان إذا دهن رأسه لم ير منه شيء، وإذا لم يدهن رئي منه', takhrij: 'رواه مسلم', note: 'جوابًا عن سؤال عن شيبه ﷺ.', pages: [13], nl: 'Als hij olie in zijn haar deed, was er niets van te zien; deed hij dat niet, dan was er iets van te zien', nlNote: 'Antwoord op een vraag over zijn grijze haren ﷺ.' },
  { narrator: 'أبو جحيفة', text: 'رأيت النبي ﷺ ورأيت بياضا من تحت شفته السفلى، العنفقة', takhrij: 'البخاري ومسلم', note: '', pages: [14], nl: 'Ik zag de Profeet ﷺ en ik zag wit onder zijn onderlip: het sikje', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'قال أبو بكر: يا رسول الله، قد شبت! قال: «شيبتني هود والواقعة والمرسلات وعم يتساءلون وإذا الشمس كورت»', takhrij: 'أخرجه الترمذي وصححه الألباني', note: 'لما تضمنته هذه السور من أهوال يوم القيامة والنوازل بالأمم الماضية.', pages: [14], nl: 'Abū Bakr zei: "O Boodschapper van Allah, u bent grijs geworden!" Hij zei: "Hūd, al-Wāqiʿa, al-Mursalāt, ʿAmma yatasāʾalūn en Idhā sh-shamsu kuwwirat hebben mij grijs gemaakt."', nlNote: 'Vanwege wat deze soera’s vertellen over de verschrikkingen van de Opstandingsdag en wat vroegere volken overkwam.' },
  { narrator: 'عبد الله بن عباس', text: 'أن رسول الله ﷺ كان يسدل شعره، وكان المشركون يفرقون رؤوسهم، وكان أهل الكتاب يسدلون رؤوسهم، وكان رسول الله ﷺ يحب موافقة أهل الكتاب فيما لم يؤمر فيه بشيء، ثم فرق رسول الله ﷺ رأسه', takhrij: 'البخاري ومسلم', note: '', pages: [15], nl: 'De Boodschapper van Allah ﷺ liet zijn haar naar voren hangen; de polytheïsten droegen een scheiding, en de mensen van het Boek lieten het hangen. De Boodschapper van Allah ﷺ was graag in overeenstemming met de mensen van het Boek waarover hij geen bevel had gekregen. Daarna droeg de Boodschapper van Allah ﷺ een scheiding', nlNote: '' },
  { narrator: 'عبد الله بن عمر', text: 'أن رسول الله ﷺ نهى عن القزع', takhrij: 'في الصحيحين', note: 'القزع: حلق بعض الرأس وترك بعضه.', pages: [15], nl: 'De Boodschapper van Allah ﷺ verbood qazaʿ', nlNote: 'Qazaʿ: een deel van het hoofd scheren en een deel laten staan.' },
  { narrator: 'أبو ذر', text: 'إن أحسن ما غير به الشيب الحناء والكتم', takhrij: 'رواه أصحاب السنن وصححه الألباني', note: 'من قسم «للاطلاع فقط».', pages: [16], nl: 'Het beste waarmee grijs haar wordt veranderd, is henna en katam', nlNote: 'Uit een deel dat alleen ter kennisname is.' },
  { narrator: '', text: 'غيروا هذا الشيب واجتنبوا السواد', takhrij: 'رواه مسلم', note: 'من قسم «للاطلاع فقط».', pages: [16], nl: 'Verander dit grijs, maar vermijd zwart', nlNote: 'Uit een deel dat alleen ter kennisname is.' },
  { narrator: 'عبد الله بن عباس', text: 'يكون قوم يخضبون في آخر الزمان بالسواد كحواصل الحمام لا يريحون رائحة الجنة', takhrij: 'أبو داود وصححه الألباني', note: 'من قسم «للاطلاع فقط».', pages: [16], nl: 'Aan het einde der tijden zullen er mensen zijn die zwart verven, als de kroppen van duiven; zij zullen de geur van het Paradijs niet ruiken', nlNote: 'Uit een deel dat alleen ter kennisname is.' },
  { narrator: 'عبد الله بن عمر', text: 'أنهكوا الشوارب وأعفوا اللحى', takhrij: 'البخاري ومسلم', note: 'وفي رواية الصحيحين: «خالفوا المشركين أحفوا الشوارب وأوفوا اللحى».', pages: [17], nl: 'Knip de snor kort en laat de baard staan', nlNote: 'In een versie in beide Ṣaḥīḥ’s: "Wijk af van de polytheïsten: knip de snor kort en laat de baard volledig staan."' },
  { narrator: 'البراء بن عازب', text: 'ما رأيت شيئا قط أحسن منه', takhrij: 'البخاري ومسلم', note: '', pages: [19], nl: 'Ik heb nooit iets mooiers gezien dan hem', nlNote: '' },
  { narrator: 'علي بن أبي طالب', text: 'لم يكن النبي ﷺ بالطويل ولا بالقصير، شثن الكفين والقدمين، ضخم الرأس، ضخم الكراديس، طويل المسربة', takhrij: 'رواه الترمذي في الشمائل بسند صحيح', note: '', pages: [19], nl: 'De Profeet ﷺ was niet lang en niet kort, met stevige handen en voeten, een groot hoofd, grote gewrichten en een lange lijn van fijn haar van borst tot navel', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كان ربعة من القوم، ليس بالطويل ولا بالقصير', takhrij: 'متفق عليه واللفظ للبخاري', note: '', pages: [19], nl: 'Hij was van gemiddelde lengte onder de mensen, niet lang en niet kort', nlNote: '' },
  { narrator: 'البراء بن عازب', text: 'كان رسول الله ﷺ رجلا مربوعا بعيد ما بين المنكبين', takhrij: 'متفق عليه', note: '', pages: [19], nl: 'De Boodschapper van Allah ﷺ was een man van gemiddelde lengte, breed tussen de schouders', nlNote: '' },
  { narrator: 'أبو الطفيل', text: 'رأيت النبي ﷺ وما بقي أحد على وجه الأرض رآه غيري... كان أبيض مليحا مقصدا', takhrij: 'رواه مسلم', note: 'مقصدًا: ليس بجسيم ولا نحيف ولا طويل ولا قصير.', pages: [19], nl: 'Ik heb de Profeet ﷺ gezien, en er is niemand meer op aarde die hem zag behalve ik... Hij was licht van huid, innemend en evenredig', nlNote: 'Evenredig: niet zwaar en niet mager, niet lang en niet kort.' },
  { narrator: 'أنس بن مالك', text: 'كان رسول الله ﷺ ليس بالأبيض الأمهق وليس بالآدم', takhrij: 'البخاري ومسلم', note: 'وفي رواية لهما: «كان أزهر اللون».', pages: [20], nl: 'De Boodschapper van Allah ﷺ was niet krijtwit en niet donker', nlNote: 'In een versie bij beiden: "Hij had een stralende, lichte huidkleur."' },
  { narrator: 'جابر بن سمرة', text: 'كان خاتم رسول الله ﷺ -يعني الذي بين كتفيه- غدة حمراء مثل بيضة الحمامة', takhrij: 'أخرجه الترمذي وصححه', note: 'وفي رواية لمسلم: «ورأيت الخاتم عند كتفه مثل بيضة الحمامة يشبه جسده».', pages: [21], nl: 'Het zegel van de Boodschapper van Allah ﷺ, dat tussen zijn schouders, was een rode verhevenheid als een duivenei', nlNote: 'In een versie bij Muslim: "Ik zag het zegel bij zijn schouder, als een duivenei, gelijk van kleur aan zijn huid."' },
  { narrator: 'أم سلمة', text: 'كان أحب الثياب إلى النبي ﷺ القميص', takhrij: 'أبو داود والترمذي والنسائي وصححه الألباني', note: '', pages: [22], nl: 'Het kledingstuk dat de Profeet ﷺ het liefst droeg, was de qamīṣ', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'كان ﷺ إذا استجد ثوبا سماه باسمه -عمامة أو قميصا أو رداء- ثم يقول: «اللهم لك الحمد كما كسوتنيه، أسألك خيره وخير ما صنع له، وأعوذ بك من شره وشر ما صنع له»', takhrij: 'الترمذي وأبو داود وصححه الألباني', note: 'السنة عند لبس ثوب جديد.', pages: [22], nl: 'Als hij ﷺ een nieuw kledingstuk aantrok, noemde hij het bij naam (tulband, qamīṣ of mantel) en zei: "O Allah, U komt alle lof toe, zoals U mij hiermee hebt gekleed. Ik vraag U om het goede ervan en het goede waarvoor het gemaakt is, en ik zoek bij U bescherming tegen het kwade ervan en het kwade waarvoor het gemaakt is."', nlNote: 'De sunna bij het aantrekken van nieuwe kleding.' },
  { narrator: 'عبد الله بن عباس', text: 'عليكم بالبياض من الثياب ليلبسها أحياؤكم، وكفنوا فيها موتاكم، فإنها من خير ثيابكم', takhrij: 'الترمذي وأبو داود وصححه الألباني', note: '', pages: [23], nl: 'Draag witte kleding: laat jullie levenden haar dragen en wikkel jullie doden erin, want het is van jullie beste kleding', nlNote: '' },
  { narrator: 'أبو جحيفة', text: 'رأيت النبي ﷺ وعليه حلة حمراء كأني أنظر إلى بياض ساقيه', takhrij: 'متفق عليه', note: 'من قسم «للاطلاع فقط»؛ قال سفيان: أراها حبرة.', pages: [23], nl: 'Ik zag de Profeet ﷺ in een rood gewaad; het is alsof ik nog het wit van zijn schenen zie', nlNote: 'Uit een deel dat alleen ter kennisname is; Sufyān zei: ik denk dat het een gestreept Jemenitisch gewaad was.' }
]

const TAKHRIJ_NL = {
  'أخرجه الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'في البخاري': 'al-Bukhārī',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه مسلم': 'Muslim',
  'رواه مسلم': 'Muslim',
  'رواه الترمذي': 'at-Tirmidhī',
  'رواه أبو داود بسند صحيح': 'Abū Dāwūd, met een betrouwbare keten',
  'أخرجه الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'في الصحيحين': 'in de twee Ṣaḥīḥ-verzamelingen (al-Bukhārī en Muslim)',
  'رواه أصحاب السنن وصححه الألباني': 'de auteurs van de Sunan; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'رواه الترمذي في الشمائل بسند صحيح': 'at-Tirmidhī in ash-Shamāʾil, met een betrouwbare keten',
  'متفق عليه واللفظ للبخاري': 'al-Bukhārī en Muslim, in de bewoording van al-Bukhārī',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه الترمذي وصححه': 'at-Tirmidhī, die hem ṣaḥīḥ noemde',
  'أبو داود والترمذي والنسائي وصححه الألباني': 'Abū Dāwūd, at-Tirmidhī en an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وأبو داود وصححه الألباني': 'at-Tirmidhī en Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'جابر بن سمرة': 'Jābir ibn Samura', 'البراء بن عازب': 'al-Barāʾ ibn ʿĀzib', 'كعب بن مالك': 'Kaʿb ibn Mālik', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib', 'أنس بن مالك': 'Anas ibn Mālik', 'عائشة': 'ʿĀʾisha', 'أبو جحيفة': 'Abū Juḥayfa', 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'أبو ذر': 'Abū Dharr', 'أبو الطفيل': 'Abū ṭ-Ṭufayl', 'أم سلمة': 'Umm Salama', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī' }

const PERSONS = [
  ['jabir-ibn-samura', 'text', [12, 13, 14, 21], 'وصف وجهه ﷺ وشيبه وخاتم النبوة.', 'Beschreef zijn gezicht ﷺ, zijn grijze haren en het zegel van het profeetschap.'],
  ['al-bara-ibn-azib', 'text', [12, 19], 'قال: وجهه مثل القمر، وما رأيت شيئًا قط أحسن منه.', 'Zei: zijn gezicht was als de maan, en ik heb nooit iets mooiers gezien.'],
  ['ali-ibn-abi-talib', 'text', [12, 17, 19], 'وصف وجهه وجسمه ولحيته ﷺ.', 'Beschreef zijn gezicht, lichaam en baard ﷺ.'],
  ['anas-ibn-malik', 'text', [13, 19, 20, 22], 'وصف شعره وطوله ولونه ﷺ.', 'Beschreef zijn haar, lengte en huidkleur ﷺ.'],
  ['aisha', 'text', [13], 'وصفت طول شعره ﷺ.', 'Beschreef de lengte van zijn haar ﷺ.'],
  ['abu-juhayfa', 'text', [14, 23], 'رأى بياض عنفقته، ورآه في حلة حمراء.', 'Zag het wit van zijn sikje, en zag hem in een rood gewaad.'],
  ['ibn-abbas', 'text', [14, 15, 16, 23], 'روى «شيبتني هود»، وخبر السدل والفرق، والأمر بلبس البياض.', 'Overleveraar van "Hūd heeft mij grijs gemaakt", van het bericht over het haar laten hangen en scheiden, en van het bevel wit te dragen.'],
  ['abu-bakr-as-siddiq', 'text', [14], 'قال: يا رسول الله قد شبت.', 'Zei: o Boodschapper van Allah, u bent grijs geworden.'],
  ['ibn-umar', 'text', [15, 16, 17], 'روى النهي عن القزع والأمر بإعفاء اللحى.', 'Overleveraar van het verbod op qazaʿ en het bevel de baard te laten staan.'],
  ['abu-dharr', 'text', [16], 'روى «إن أحسن ما غير به الشيب الحناء والكتم».', 'Overleveraar van "het beste waarmee grijs wordt veranderd is henna en katam".'],
  ['abu-hurayra', 'text', [16], 'سئل: هل خضب النبي ﷺ؟ فقال: نعم.', 'Op de vraag of de Profeet ﷺ verfde, zei hij: ja.'],
  ['umm-salama', 'text', [16, 22], 'أخرجت شعرًا من شعره ﷺ مخضوبًا، وروت أن أحب الثياب إليه القميص.', 'Liet geverfd haar van hem ﷺ zien, en overleverde dat de qamīṣ zijn liefste kledingstuk was.'],
  ['abu-at-tufayl', 'text', [19], 'آخر الصحابة موتًا، ولد عام الهجرة وتوفي سنة ١١٠هـ.', 'De laatste metgezel die stierf: geboren in het jaar van de hijra, overleden in 110 AH.'],
  ['salman-al-farisi', 'text', [21], 'ذكر له آخر راهب صحبه علامات النبي المبعوث، ومنها خاتم النبوة.', 'De laatste monnik bij wie hij was, noemde hem de tekenen van de komende profeet, waaronder het zegel.'],
  ['abu-said-al-khudri', 'text', [22], 'روى دعاء لبس الثوب الجديد.', 'Overleveraar van de smeekbede bij nieuwe kleding.'],
  ['usama-ibn-zayd', 'text', [22], 'خرج النبي ﷺ متكئًا عليه وعليه ثوب قطري.', 'De Profeet ﷺ kwam naar buiten, leunend op hem, in een Qaṭarī-kleed.'],
  ['at-tirmidhi', 'text', [8], 'صاحب «الشمائل المحمدية»، من أحسن ما صنف في الباب.', 'Auteur van ash-Shamāʾil al-Muḥammadiyya, een van de beste werken hierover.'],
  ['ibn-kathir', 'text', [8], 'أثنى على كتاب الترمذي في الشمائل.', 'Prees het boek van at-Tirmidhī over de eigenschappen.'],
  ['ibn-taymiyya', 'text', [15], 'قال: صار الفرق شعار المسلمين.', 'Zei: de scheiding werd het kenmerk van de moslims.'],
  ['an-nawawi', 'text', [15], 'قال: لم يحلق النبي ﷺ رأسه بعد الهجرة إلا في الحديبية وعمرة القضاء وحجة الوداع.', 'Zei: na de hijra schoor de Profeet ﷺ zijn hoofd alleen bij al-Ḥudaybiya, de inhaal-ʿumra en de afscheidsbedevaart.'],
  ['ibn-baz', 'text', [17], 'قال: فعل ابن عمر في الأخذ من لحيته اجتهاد، والحجة في روايته.', 'Zei: dat Ibn ʿUmar iets van zijn baard nam was zijn eigen inzicht; het bewijs ligt in wat hij overleverde.'],
  ['ibn-al-qayyim', 'text', [20], 'قال: كمل الله له مراتب الجمال ظاهرًا وباطنًا.', 'Zei: Allah vervolmaakte bij hem de schoonheid, uiterlijk en innerlijk.'],
  ['al-qurtubi', 'text', [21], 'قال: اتفقت الأحاديث على أن الخاتم شيء بارز عند كتفه الأيسر قدر بيضة الحمامة.', 'Zei: de betrouwbare hadith zijn het erover eens dat het zegel een verhevenheid bij zijn linkerschouder was, ter grootte van een duivenei.'],
  ['ibn-uthaymin', 'text', [22, 23], 'قال: كان يحب القميص لأنه أستر؛ والأحمر الخالص منهي عنه.', 'Zei: hij hield van de qamīṣ omdat die meer bedekt; zuiver rood is verboden.'],
  ['ibn-battal', 'text', [22], 'قال: الحبرة من برود اليمن، وكانت أشرف الثياب عندهم.', 'Zei: de ḥibara is een Jemenitisch gestreept kleed, het edelste kledingstuk bij hen.'],
  ['al-albani', 'takhrij', [14, 16, 22, 23], 'صحح عددًا من الأحاديث في هذه الدروس.', 'Noemde een aantal hadith in deze lessen ṣaḥīḥ.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'الشمائل: الخلقة واللباس',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'أهمية دراسة الشمائل، ثم صفة وجهه ﷺ وشعره وشيبه وتسريحه ولحيته وجسمه ولونه، وخاتم النبوة، وأول الكلام في لباسه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'من الكلام عن أهمية الشمائل إلى صفة الخلقة واللباس.',
    root: { label: 'الشمائل', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'أهمية دراسة الشمائل', sub: 'الدرس ١', page: 10, children: ['تمام المعرفة', 'زيادة المحبة', 'الاتباع', 'رد الشبه'] },
      { label: 'الوجه', sub: 'الدرس ٢', page: 12, children: ['أحسن من القمر', 'في وجهه تدوير'] },
      { label: 'الشعر', sub: 'الدرسان ٢–٣', page: 13, children: ['فوق الوفرة ودون الجمة', 'قلة الشيب', 'السدل ثم الفرق'] },
      { label: 'اللحية والجسم', sub: 'الدرس ٤', page: 17, children: ['كث اللحية', 'إعفاء اللحى', 'ربعة', 'أزهر اللون'] },
      { label: 'خاتم النبوة واللباس', sub: 'الدرس ٥', page: 21, children: ['مثل بيضة الحمامة', 'القميص', 'البياض'] }
    ]
  },
  points: [
    { text: 'الشمائل جمع شمال وشميلة: الطبيعة والسجية؛ وعلمها ما جاء في خلقته ﷺ وأخلاقه وهديه.', page: 8 },
    { text: 'معرفة الشمائل من تمام معرفة النبي ﷺ، والإيمان بالشيء على قدر المعرفة به.', page: 10 },
    { text: 'الخلقة الصورة الظاهرة، والخلق الصورة الباطنة؛ وقدمت الظاهرة لأنها أول ما يظهر وكالدليل على الباطنة.', page: 12 },
    { text: 'توفي ﷺ وليس في رأسه ولحيته عشرون شعرة بيضاء، وكان الشيب في صدغيه ومفرق رأسه وعنفقته.', page: 13 },
    { text: 'الصحيح جواز السدل والفرق، والفرق أفضل، وصار شعار المسلمين.', page: 15 },
    { text: 'القزع حلق بعض الرأس وترك بعضه، والنهي عنه يقتضي التحريم.', page: 15 },
    { text: 'لم يثبت أن خاتم النبوة كان مكتوبًا عليه لفظ الجلالة أو «محمد» أو غير ذلك.', page: 21 },
    { text: 'كان أحب الثياب إليه القميص، وأكثر ما يلبس البياض، وثوبه إلى نصف ساقه وكمه إلى رسغه.', page: 23 }
  ],
  terms: [
    { term: 'الشمائل', translit: 'ash-shamāʾil', meaning: 'جمع شمال وشميلة: الطبيعة والسجية.', explanation: '', notes: [], page: 8 },
    { term: 'الخلقة / الخلق', translit: 'al-khilqa / al-khuluq', meaning: 'الخلقة الصورة الظاهرة كالطول واللون، والخلق الصورة الباطنة كالحلم والتواضع.', explanation: '', notes: [], page: 12 },
    { term: 'المطهم / المكلثم', translit: 'al-muṭahham / al-mukaltham', meaning: 'المنتفخ الوجه / المدور الوجه.', explanation: '', notes: [], page: 12 },
    { term: 'الجعد القطط / السبط', translit: 'al-jaʿd al-qaṭaṭ / as-sabṭ', meaning: 'الشعر الذي فيه التواء وانقباض / الشعر المسترسل.', explanation: '', notes: [], page: 13 },
    { term: 'الوفرة / الجمة', translit: 'al-wafra / al-jumma', meaning: 'الشعر البالغ شحمة الأذن / النازل إلى المنكبين.', explanation: '', notes: [], page: 13 },
    { term: 'الصدغ', translit: 'aṣ-ṣudgh', meaning: 'ما بين العين والأذن.', explanation: '', notes: [], page: 14 },
    { term: 'العنفقة', translit: 'al-ʿanfaqa', meaning: 'ما نبت على الشفة السفلى من الشعر.', explanation: '', notes: [], page: 14 },
    { term: 'السدل / الفرق', translit: 'as-sadl / al-farq', meaning: 'إرسال الشعر / قسمته من وسط الرأس.', explanation: '', notes: [], page: 15 },
    { term: 'القزع', translit: 'al-qazaʿ', meaning: 'حلق بعض الرأس وترك بعضه.', explanation: '', notes: [], page: 15 },
    { term: 'شثن الكفين', translit: 'shathn al-kaffayn', meaning: 'غليظ الأصابع.', explanation: '', notes: [], page: 19 },
    { term: 'الكراديس', translit: 'al-karādīs', meaning: 'رؤوس العظام.', explanation: '', notes: [], page: 19 },
    { term: 'المسربة', translit: 'al-masruba', meaning: 'الشعر الدقيق من الصدر إلى السرة.', explanation: '', notes: [], page: 19 },
    { term: 'ربعة / مقصد', translit: 'rabʿa / muqṣad', meaning: 'متوسط الطول / ليس بجسيم ولا نحيف ولا طويل ولا قصير.', explanation: '', notes: [], page: 19 },
    { term: 'الأمهق / الآدم / الأزهر', translit: 'al-amhaq / al-ādam / al-azhar', meaning: 'شديد البياض / فوق الأسمر يعلوه سواد قليل / الأبيض المشرب بحمرة.', explanation: '', notes: [], page: 20 },
    { term: 'خاتم النبوة', translit: 'khātam an-nubuwwa', meaning: 'علامة من علامات نبوته بين كتفيه: غدة حمراء مثل بيضة الحمامة.', explanation: 'الغدة قطعة لحم بين الجلد واللحم فيها احمرار.', notes: [], page: 21 },
    { term: 'الحبرة', translit: 'al-ḥibara', meaning: 'برد يماني من قطن، وكانت أشرف الثياب عندهم.', explanation: '', notes: [], page: 22 },
    { term: 'الحلة', translit: 'al-ḥulla', meaning: 'ثوبان: إزار ورداء.', explanation: '', notes: [], page: 23 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'شعره ﷺ',
      intro: 'كما في الدرسين الثاني والثالث.',
      columns: ['الوصف'],
      rows: [
        { label: 'نوعه', cells: ['ليس بالجعد القطط ولا بالسبط'] },
        { label: 'طوله', cells: ['فوق الوفرة ودون الجمة'] },
        { label: 'شيبه', cells: ['أقل من عشرين شعرة، في الصدغين والمفرق والعنفقة'] },
        { label: 'تسريحه', cells: ['كان يسدله موافقة لأهل الكتاب، ثم فرقه'] }
      ],
      page: 13
    },
    {
      type: 'compare',
      title: 'فوائد دراسة الشمائل',
      intro: 'كما في الدرس الأول.',
      columns: ['بيانها'],
      rows: [
        { label: 'أولًا', cells: ['من تمام معرفة النبي ﷺ'] },
        { label: 'ثانيًا', cells: ['تزيد المسلم حبًّا لنبيه'] },
        { label: 'ثالثًا', cells: ['الاتباع والتأسي'] },
        { label: 'رابعًا', cells: ['تثبيت المؤمنين ورد شبه المعاندين'] }
      ],
      page: 10
    }
  ],
  sections: [
    { title: 'من أبرز ما كتب في الشمائل', text: 'كتاب الإمام الترمذي «الشمائل المحمدية»، وأثنى عليه ابن كثير في البداية والنهاية.', page: 8 },
    { title: 'لماذا شاب ﷺ من هود وأخواتها', text: 'قال العلماء: لما تضمنته من ذكر أهوال يوم القيامة والنوازل بالأمم الماضية، فشاب قبل أوان المشيب.', page: 14 },
    { title: 'صور القزع', text: 'حلق مواضع من جوانب الرأس، أو حلق وسطه وترك جوانبه، أو حلق جوانبه وترك وسطه، أو حلق مقدمه وترك مؤخره.', page: 15 },
    { title: 'الخضاب (للاطلاع فقط)', text: 'الصحيح أنه ﷺ خضب؛ والخضاب بالحناء للرجال لا بأس به، أما السواد الخالص فلا يجوز للرجال والنساء، ويمنع ما فيه تشبه بالنساء.', more: FYI, page: 16 },
    { title: 'إعفاء اللحية', text: 'أمر بإعفاء اللحى وإحفاء الشوارب مخالفة للمشركين، وذكر الكتاب أن حلقها أو الأخذ من طولها أو عرضها لا يجوز، ونقل قول ابن باز في فعل ابن عمر.', page: 17 },
    { title: 'علامة خاتم النبوة', text: 'ذكرها آخر راهب صحبه سلمان الفارسي، وعرفه بها بحيرا الراهب؛ والخاتم شيء بارز عند كتفه الأيسر قدر بيضة الحمامة.', page: 21 },
    { title: 'لبس الأحمر (للاطلاع فقط)', text: 'الحلة الحمراء التي لبسها فيها خطوط حمراء على الراجح؛ والأحمر الخالص منهي عنه، فإن كان فيه بياض فلا بأس.', more: FYI, page: 23 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'مواضع شيبه ﷺ', items: ['الصدغان', 'مفرق الرأس', 'العنفقة'], page: 13, origin: 'boek' },
    { kind: 'onderscheid', title: 'الخلقة والخلق', items: ['الخلقة: الصورة الظاهرة كالطول والقصر واللون.', 'الخلق: الصورة الباطنة كالحلم والرفق والتواضع والعلم.'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'من علامات النبي المبعوث عند راهب سلمان', items: ['يأكل الهدية ولا يأكل الصدقة', 'بين كتفيه خاتم النبوة', 'يهاجر إلى أرض بين حرتين بينهما نخل'], page: 21, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'معرفة الشمائل من تمام معرفة النبي ﷺ وتزيد محبته واتباعه.',
    'كان وجهه ﷺ أحسن من القمر، مستديرًا مشرقًا.',
    'كان شعره فوق الوفرة ودون الجمة، قليل الشيب، فرقه بعد أن كان يسدله.',
    'كان ربعة، أزهر اللون، كث اللحية، وبين كتفيه خاتم النبوة.',
    'كان أحب الثياب إليه القميص، وأكثر ما يلبس البياض.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما الفرق بين الخلقة والخلق؟', options: ['الخلقة ظاهرة والخلق باطن', 'لا فرق بينهما', 'الخلقة باطنة والخلق ظاهر', 'الخلق خاص بالأنبياء'], answer: 0, explain: 'كما في أول الدرس الثاني.', page: 12 },
    { type: 'mc', q: 'كم كان عدد الشعرات البيض في رأسه ولحيته ﷺ عند وفاته؟', options: ['أقل من عشرين', 'نحو خمسين', 'أكثر من مائة', 'لم يكن فيه شيب'], answer: 0, explain: 'كما في حديث أنس.', page: 13 },
    { type: 'tf', q: 'الفرق في الشعر أفضل من السدل مع جوازهما.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما قال أهل العلم.', page: 15 },
    { type: 'mc', q: 'ما القزع؟', options: ['حلق بعض الرأس وترك بعضه', 'حلق الرأس كله', 'تطويل الشعر', 'صبغ الشعر'], answer: 0, explain: 'كما في الدرس الثالث.', page: 15 },
    { type: 'tf', q: 'ثبت أن خاتم النبوة كان مكتوبًا عليه «محمد».', options: ['صواب', 'خطأ'], answer: 1, explain: 'لم يثبت ذلك.', page: 21 },
    { type: 'mc', q: 'ما أحب الثياب إليه ﷺ في حديث أم سلمة؟', options: ['القميص', 'الإزار', 'الرداء', 'العمامة'], answer: 0, explain: 'لأنه أستر وقطعة واحدة.', page: 22 }
  ]),
  note: 'نشاط الكتاب في الصفحة ١٨. أجزاء «للاطلاع فقط» في الكتاب: الخضاب (ص١٦) ولبس الأحمر (ص٢٣).'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'De eigenschappen: uiterlijk en kleding',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Waarom je de eigenschappen van de Profeet ﷺ bestudeert; daarna zijn gezicht, haar, grijze haren, kapsel, baard, lichaam en huidkleur, het zegel van het profeetschap en het begin van zijn kleding.',
  source: { ...source, label: 'Kitāb as-Sīra an-Nabawiyya (2): ash-Shamāʾil, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'Van het belang van de eigenschappen naar zijn uiterlijk en kleding.',
    root: { label: 'De eigenschappen', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Waarom ze bestuderen', sub: 'les 1', page: 10, children: ['hem volledig kennen', 'meer liefde', 'navolging', 'twijfels weerleggen'] },
      { label: 'Het gezicht', sub: 'les 2', page: 12, children: ['mooier dan de maan', 'wat rond'] },
      { label: 'Het haar', sub: 'les 2–3', page: 13, children: ['tussen oorlel en schouders', 'weinig grijs', 'eerst hangend, dan gescheiden'] },
      { label: 'Baard en lichaam', sub: 'les 4', page: 17, children: ['een volle baard', 'de baard laten staan', 'gemiddelde lengte', 'stralend lichte huid'] },
      { label: 'Het zegel en kleding', sub: 'les 5', page: 21, children: ['als een duivenei', 'de qamīṣ', 'wit'] }
    ]
  },
  points: [
    { text: 'Shamāʾil is het meervoud van shimāl en shamīla: natuur en karakter; het vak gaat over zijn uiterlijk ﷺ, zijn karakter en zijn gewoonten.', page: 8 },
    { text: 'De eigenschappen kennen hoort bij het volledig kennen van de Profeet ﷺ; geloof in iets is naar de mate waarin je het kent.', page: 10 },
    { text: 'Khilqa is het uiterlijk, khuluq het innerlijk; het uiterlijk komt eerst omdat het als eerste zichtbaar is en als aanwijzing voor het innerlijk dient.', page: 12 },
    { text: 'Hij ﷺ stierf met nog geen twintig witte haren in hoofd en baard; het grijs zat bij zijn slapen, zijn scheiding en zijn sikje.', page: 13 },
    { text: 'Volgens de juiste mening mag zowel het haar laten hangen als scheiden; scheiden is beter en werd het kenmerk van de moslims.', page: 15 },
    { text: 'Qazaʿ is een deel van het hoofd scheren en een deel laten staan; het verbod erop betekent dat het verboden is.', page: 15 },
    { text: 'Het is niet bevestigd dat op het zegel van het profeetschap "Allah", "Muḥammad" of iets anders geschreven stond.', page: 21 },
    { text: 'Zijn liefste kledingstuk was de qamīṣ; meestal droeg hij wit, met het kleed tot halverwege de scheen en de mouw tot de pols.', page: 23 }
  ],
  terms: [
    { term: 'الشمائل', translit: 'ash-shamāʾil', meaning: 'Meervoud van shimāl en shamīla: natuur en karakter.', explanation: '', notes: [], page: 8 },
    { term: 'الخلقة / الخلق', translit: 'al-khilqa / al-khuluq', meaning: 'Khilqa: het uiterlijk, zoals lengte en kleur; khuluq: het innerlijk, zoals zachtmoedigheid en nederigheid.', explanation: '', notes: [], page: 12 },
    { term: 'المطهم / المكلثم', translit: 'al-muṭahham / al-mukaltham', meaning: 'Met een opgezwollen gezicht / met een volkomen rond gezicht.', explanation: '', notes: [], page: 12 },
    { term: 'الجعد القطط / السبط', translit: 'al-jaʿd al-qaṭaṭ / as-sabṭ', meaning: 'Sterk gekruld haar / sluik haar.', explanation: '', notes: [], page: 13 },
    { term: 'الوفرة / الجمة', translit: 'al-wafra / al-jumma', meaning: 'Haar tot de oorlel / haar tot de schouders.', explanation: '', notes: [], page: 13 },
    { term: 'الصدغ', translit: 'aṣ-ṣudgh', meaning: 'De slaap: tussen oog en oor.', explanation: '', notes: [], page: 14 },
    { term: 'العنفقة', translit: 'al-ʿanfaqa', meaning: 'Het haar onder de onderlip (het sikje).', explanation: '', notes: [], page: 14 },
    { term: 'السدل / الفرق', translit: 'as-sadl / al-farq', meaning: 'Het haar laten hangen / het haar in het midden scheiden.', explanation: '', notes: [], page: 15 },
    { term: 'القزع', translit: 'al-qazaʿ', meaning: 'Een deel van het hoofd scheren en een deel laten staan.', explanation: '', notes: [], page: 15 },
    { term: 'شثن الكفين', translit: 'shathn al-kaffayn', meaning: 'Met stevige, dikke vingers.', explanation: '', notes: [], page: 19 },
    { term: 'الكراديس', translit: 'al-karādīs', meaning: 'De uiteinden van de botten (gewrichten).', explanation: '', notes: [], page: 19 },
    { term: 'المسربة', translit: 'al-masruba', meaning: 'De lijn van fijn haar van borst tot navel.', explanation: '', notes: [], page: 19 },
    { term: 'ربعة / مقصد', translit: 'rabʿa / muqṣad', meaning: 'Van gemiddelde lengte / evenredig: niet zwaar, niet mager, niet lang, niet kort.', explanation: '', notes: [], page: 19 },
    { term: 'الأمهق / الآدم / الأزهر', translit: 'al-amhaq / al-ādam / al-azhar', meaning: 'Krijtwit / donkerder dan bruin / licht met een rode gloed.', explanation: '', notes: [], page: 20 },
    { term: 'خاتم النبوة', translit: 'khātam an-nubuwwa', meaning: 'Het zegel van het profeetschap tussen zijn schouders: een rode verhevenheid als een duivenei.', explanation: 'Een stukje vlees tussen huid en spier, wat rood van kleur.', notes: [], page: 21 },
    { term: 'الحبرة', translit: 'al-ḥibara', meaning: 'Een gestreept katoenen kleed uit Jemen, het edelste kledingstuk bij hen.', explanation: '', notes: [], page: 22 },
    { term: 'الحلة', translit: 'al-ḥulla', meaning: 'Een tweedelig gewaad: onder- en bovenkleed.', explanation: '', notes: [], page: 23 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Zijn haar ﷺ',
      intro: 'Zoals in les 2 en 3.',
      columns: ['Beschrijving'],
      rows: [
        { label: 'Soort', cells: ['niet sterk gekruld en niet sluik'] },
        { label: 'Lengte', cells: ['voorbij de oorlel, niet tot de schouders'] },
        { label: 'Grijs', cells: ['minder dan twintig haren, bij de slapen, de scheiding en het sikje'] },
        { label: 'Kapsel', cells: ['eerst hangend, zoals de mensen van het Boek, daarna gescheiden'] }
      ],
      page: 13
    },
    {
      type: 'compare',
      title: 'Waarom de eigenschappen bestuderen',
      intro: 'Zoals in les 1.',
      columns: ['Uitleg'],
      rows: [
        { label: 'Eén', cells: ['het hoort bij de Profeet ﷺ volledig kennen'] },
        { label: 'Twee', cells: ['het vergroot de liefde voor hem'] },
        { label: 'Drie', cells: ['navolging en hem tot voorbeeld nemen'] },
        { label: 'Vier', cells: ['gelovigen standvastig maken en twijfels van tegenstanders weerleggen'] }
      ],
      page: 10
    }
  ],
  sections: [
    { title: 'Het bekendste werk over de eigenschappen', text: 'Ash-Shamāʾil al-Muḥammadiyya van imam at-Tirmidhī; Ibn Kathīr prees het in al-Bidāya wa-n-Nihāya.', page: 8 },
    { title: 'Waarom Hūd en verwante soera’s hem grijs maakten', text: 'Volgens de geleerden vanwege de verschrikkingen van de Opstandingsdag en wat vroegere volken overkwam; zo werd hij vóór zijn tijd grijs.', page: 14 },
    { title: 'Vormen van qazaʿ', text: 'Plekken aan de zijkanten scheren, het midden scheren en de zijkanten laten staan, de zijkanten scheren en het midden laten staan, of de voorkant scheren en de achterkant laten staan.', page: 15 },
    { title: 'Haar verven (alleen ter kennisname)', text: 'Volgens de juiste mening heeft hij ﷺ geverfd; henna voor mannen is geen probleem, puur zwart mag niet voor mannen en vrouwen, en verven dat op vrouwen lijkt is niet toegestaan.', more: FYI_NL, page: 16 },
    { title: 'De baard laten staan', text: 'Het bevel is de baard te laten staan en de snor kort te knippen, om af te wijken van de polytheïsten; het boek zegt dat scheren of inkorten niet mag en citeert Ibn Bāz over wat Ibn ʿUmar deed.', page: 17 },
    { title: 'Het zegel als teken', text: 'De laatste monnik bij wie Salmān al-Fārisī was, noemde het, en de monnik Baḥīrā herkende hem eraan; het zegel was een verhevenheid bij zijn linkerschouder ter grootte van een duivenei.', page: 21 },
    { title: 'Rood dragen (alleen ter kennisname)', text: 'Het rode gewaad dat hij droeg had volgens de sterkste mening rode strepen; zuiver rood is verboden, rood met wit is geen probleem.', more: FYI_NL, page: 23 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Waar zijn grijze haren zaten ﷺ', items: ['de slapen', 'de scheiding', 'het sikje'], page: 13, origin: 'boek' },
    { kind: 'onderscheid', title: 'Uiterlijk en karakter', items: ['Khilqa: het uiterlijk, zoals lang of kort en de huidkleur.', 'Khuluq: het innerlijk, zoals zachtmoedigheid, vriendelijkheid, nederigheid en kennis.'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'Tekenen van de komende profeet volgens de monnik van Salmān', items: ['hij eet van een geschenk maar niet van liefdadigheid', 'tussen zijn schouders het zegel van het profeetschap', 'hij trekt naar een land tussen twee lavavelden met palmbomen'], page: 21, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De eigenschappen kennen hoort bij de Profeet ﷺ volledig kennen, en vergroot liefde en navolging.',
    'Zijn gezicht ﷺ was mooier dan de maan, rond en stralend.',
    'Zijn haar kwam tussen oorlel en schouders, met weinig grijs; eerst liet hij het hangen, daarna scheidde hij het.',
    'Hij was van gemiddelde lengte, met een lichte huid, een volle baard en het zegel tussen zijn schouders.',
    'Zijn liefste kledingstuk was de qamīṣ, en meestal droeg hij wit.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het verschil tussen khilqa en khuluq?', options: ['khilqa is uiterlijk, khuluq innerlijk', 'er is geen verschil', 'khilqa is innerlijk, khuluq uiterlijk', 'khuluq geldt alleen voor profeten'], answer: 0, explain: 'Zoals aan het begin van les 2.', page: 12 },
    { type: 'mc', q: 'Hoeveel witte haren had hij ﷺ bij zijn dood in hoofd en baard?', options: ['minder dan twintig', 'ongeveer vijftig', 'meer dan honderd', 'geen enkele'], answer: 0, explain: 'Zoals in de hadith van Anas.', page: 13 },
    { type: 'tf', q: 'Het haar scheiden is beter dan het laten hangen, al mag allebei.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals de geleerden zeggen.', page: 15 },
    { type: 'mc', q: 'Wat is qazaʿ?', options: ['een deel van het hoofd scheren en een deel laten staan', 'het hele hoofd scheren', 'het haar lang laten groeien', 'het haar verven'], answer: 0, explain: 'Zoals in les 3.', page: 15 },
    { type: 'tf', q: 'Het is bevestigd dat "Muḥammad" op het zegel van het profeetschap stond.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat is niet bevestigd.', page: 21 },
    { type: 'mc', q: 'Wat was volgens Umm Salama zijn liefste kledingstuk ﷺ?', options: ['de qamīṣ', 'het onderkleed', 'de mantel', 'de tulband'], answer: 0, explain: 'Omdat die meer bedekt en uit één stuk is.', page: 22 }
  ]),
  note: 'Oefening van het boek op p. 18. Delen die het boek alleen ter kennisname geeft: haar verven (p. 16) en rood dragen (p. 23). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-seerah', chapter: '1', unit: 1, ar, nl }
