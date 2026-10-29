// Hoofdstukkaart bij الفقه (٢), eenheid 3: صلاة الجمعة والإمامة (lessen 10–13, boek p. 40–54).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// De berichten over vrouwen die vrouwen leidden (ʿĀʾisha en Umm Salama, p. 50) staan niet in het
// hadith-tabblad maar in een paragraaf, omdat het daden van metgezellen zijn.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '40–54',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'خير يوم طلعت فيه الشمس يوم الجمعة، فيه خلق آدم، وفيه أدخل الجنة، وفيه أخرج منها، ولا تقوم الساعة إلا في يوم الجمعة', takhrij: 'رواه مسلم', note: '', pages: [40], nl: 'De beste dag waarop de zon opkwam is vrijdag: daarop werd Ādam geschapen, daarop ging hij het Paradijs binnen en daarop werd hij eruit gezet; en het Uur komt alleen op een vrijdag', nlNote: '' },
  { narrator: '', text: 'رواح الجمعة واجب على كل محتلم', takhrij: 'النسائي وصححه الألباني', note: '', pages: [40], nl: 'Naar het vrijdaggebed gaan is verplicht voor iedereen die volwassen is', nlNote: '' },
  { narrator: '', text: 'لينتهين أقوام عن ودعهم الجمعات، أو ليختمن الله على قلوبهم، ثم ليكونن من الغافلين', takhrij: 'رواه مسلم', note: '', pages: [40], nl: 'Mensen moeten ophouden met het overslaan van de vrijdaggebeden, of Allah verzegelt hun harten en dan horen zij bij de achtelozen', nlNote: '' },
  { narrator: '', text: 'الجمعة حق واجب على كل مسلم في جماعة إلا أربعة: عبد مملوك، أو امرأة، أو صبي، أو مريض', takhrij: 'أبو داود وصححه الألباني', note: '', pages: [41], nl: 'Het vrijdaggebed in gemeenschap is een verplicht recht op elke moslim, behalve vier: een slaaf, een vrouw, een kind of een zieke', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كان النبي ﷺ يصلي الجمعة حين تميل الشمس', takhrij: 'رواه البخاري', note: 'وقتها كوقت الظهر على الصحيح.', pages: [41], nl: 'De Profeet ﷺ bad het vrijdaggebed als de zon overhelde', nlNote: 'Volgens de juiste mening is de tijd dezelfde als die van ẓuhr.' },
  { narrator: 'جابر بن سمرة', text: 'كان يخطب قائما ثم يجلس ثم يقوم فيخطب، فمن حدثك أنه يخطب جالسا فقد كذب', takhrij: 'البخاري ومسلم واللفظ له', note: '', pages: [41], nl: 'Hij preekte staand, ging dan zitten, stond weer op en preekte. Wie je vertelt dat hij zittend preekte, heeft gelogen', nlNote: '' },
  { narrator: 'عمار بن ياسر', text: 'إن طول صلاة الرجل وقصر خطبته مئنة من فقهه، فأطيلوا الصلاة واقصروا الخطبة', takhrij: 'رواه مسلم', note: 'المئنة: العلامة.', pages: [42], nl: 'Een lang gebed en een korte preek zijn een teken van iemands begrip; maak het gebed dus lang en de preek kort', nlNote: 'Maʾinna: een teken.' },
  { narrator: '', text: 'إذا قلت لصاحبك: أنصت، والإمام يخطب، فقد لغوت', takhrij: 'البخاري ومسلم', note: 'تحريم الكلام أثناء الخطبة.', pages: [42], nl: 'Als je tegen je buurman "wees stil" zegt terwijl de imam preekt, heb je zelf ijdel gesproken', nlNote: 'Spreken tijdens de preek is verboden.' },
  { narrator: '', text: 'اجلس فقد آذيت', takhrij: 'أبو داود وصححه الألباني', note: 'قاله لمن يتخطى الرقاب والإمام يخطب.', pages: [42], nl: 'Ga zitten, je hebt de mensen last bezorgd', nlNote: 'Gezegd tegen iemand die over de mensen heen stapte terwijl de imam preekte.' },
  { narrator: 'سلمان الفارسي', text: 'لا يغتسل رجل يوم الجمعة ويتطهر ما استطاع من طهر، ويدهن من دهنه أو يمس من طيب بيته، ثم يخرج فلا يفرق بين اثنين، ثم يصلي ما كتب له، ثم ينصت إذا تكلم الإمام، إلا غفر له ما بينه وبين الجمعة الأخرى', takhrij: 'رواه البخاري', note: 'دليل الصلاة قبل خروج الإمام وسنن الجمعة.', pages: [43, 45], nl: 'Geen man wast zich op vrijdag, reinigt zich zo goed hij kan, doet olie in zijn haar of parfum van thuis op, gaat dan op weg zonder twee mensen te scheiden, bidt wat voor hem is voorgeschreven en zwijgt als de imam spreekt, of hem wordt vergeven wat tussen deze en de volgende vrijdag is', nlNote: 'Bewijs voor bidden vóór de imam komt, en voor de sunna’s van vrijdag.' },
  { narrator: 'أبو هريرة', text: 'إذا صلى أحدكم الجمعة فليصل بعدها أربع ركعات', takhrij: 'رواه مسلم', note: 'وكان ابن عمر يصلي بعدها ركعتين في بيته.', pages: [43], nl: 'Als een van jullie het vrijdaggebed heeft gebeden, laat hij daarna vier rakʿa’s bidden', nlNote: 'Ibn ʿUmar bad er thuis twee na.' },
  { narrator: '', text: 'من أدرك من الجمعة ركعة فقد أدرك الصلاة', takhrij: 'ابن ماجه وصححه الألباني', note: 'ومن أدرك أقل من ركعة صلى ظهرًا.', pages: [44], nl: 'Wie van het vrijdaggebed één rakʿa haalt, heeft het gebed gehaald', nlNote: 'Wie minder dan een rakʿa haalt, bidt ẓuhr.' },
  { narrator: '', text: 'من اغتسل يوم الجمعة غسل الجنابة ثم راح في الساعة الأولى فكأنما قرب بدنة، ومن راح في الثانية فكأنما قرب بقرة، ومن راح في الثالثة فكأنما قرب كبشا أقرن، ومن راح في الرابعة فكأنما قرب دجاجة، ومن راح في الخامسة فكأنما قرب بيضة، فإذا خرج الإمام حضرت الملائكة يستمعون الذكر', takhrij: 'متفق عليه', note: 'التبكير.', pages: [44], nl: 'Wie zich op vrijdag wast zoals bij grote onreinheid en in het eerste uur gaat, is als wie een kameel offert; in het tweede uur een koe; in het derde een gehoornde ram; in het vierde een kip; in het vijfde een ei. Als de imam komt, zijn de engelen aanwezig om naar het gedenken te luisteren', nlNote: 'Vroeg gaan.' },
  { narrator: 'أبو سعيد الخدري', text: 'غسل الجمعة واجب على كل محتلم', takhrij: 'متفق عليه', note: 'والجمهور على أنه سنة.', pages: [44], nl: 'De wassing op vrijdag is verplicht voor iedereen die volwassen is', nlNote: 'De meerderheid houdt het voor sunna.' },
  { narrator: '', text: 'ما على أحدكم لو اشترى ثوبين ليوم الجمعة سوى ثوبي مهنته', takhrij: 'أبو داود وابن ماجه وصححه الألباني', note: '', pages: [45], nl: 'Wat is er mis mee als een van jullie twee kledingstukken voor vrijdag koopt, naast zijn werkkleding?', nlNote: '' },
  { narrator: '', text: 'إن من أفضل أيامكم يوم الجمعة، فأكثروا علي من الصلاة فيه', takhrij: 'أبو داود والنسائي وصححه الألباني', note: '', pages: [45], nl: 'Een van jullie beste dagen is vrijdag; vraag op die dag dus veel om zegen over mij', nlNote: '' },
  { narrator: '', text: 'من قرأ سورة الكهف يوم الجمعة أضاء له من النور ما بين الجمعتين', takhrij: 'الحاكم وصححه', note: '', pages: [45], nl: 'Wie op vrijdag soera al-Kahf reciteert, voor hem straalt licht tussen de twee vrijdagen', nlNote: '' },
  { narrator: '', text: 'إن في الجمعة لساعة لا يوافقها عبد مسلم وهو قائم يصلي يسأل الله شيئا إلا أعطاه إياه', takhrij: 'البخاري ومسلم', note: 'لعل أرجح الأقوال أنها الساعة الأخيرة من نهار الجمعة.', pages: [45], nl: 'Op vrijdag is er een uur waarin geen moslim die staat te bidden Allah om iets vraagt of Hij geeft het hem', nlNote: 'Misschien is de sterkste mening dat het het laatste uur van de vrijdag is.' },
  { narrator: 'أبو هريرة', text: 'لا يصومن أحدكم يوم الجمعة إلا يوما قبله أو بعده', takhrij: 'رواه مسلم', note: 'وعند مسلم: «ولا تخصوا يوم الجمعة بصيام من بين الأيام».', pages: [46], nl: 'Laat niemand van jullie op vrijdag vasten, tenzij met een dag ervoor of erna', nlNote: 'Bij Muslim: "Kies de vrijdag niet uit om te vasten."' },
  { narrator: 'عمارة بن رويبة', text: 'رأى بشر بن مروان على المنبر رافعا يديه فقال: قبح الله هاتين اليدين، لقد رأيت رسول الله ﷺ ما يزيد على أن يقول بيده هكذا، وأشار بإصبعه المسبحة', takhrij: 'رواه مسلم', note: 'لا يسن رفع اليدين في دعاء الخطبة إلا في الاستسقاء.', pages: [46], nl: 'Hij zag Bishr ibn Marwān op de preekstoel met geheven handen en zei: "Moge Allah deze handen lelijk maken; ik zag de Boodschapper van Allah ﷺ niet meer doen dan zo met zijn hand," en hij wees met zijn wijsvinger', nlNote: 'De handen heffen bij de smeekbede in de preek is geen sunna, behalve bij het regengebed.' },
  { narrator: '', text: 'يؤم القوم أقرؤهم لكتاب الله، فإن كانوا في القراءة سواء فأعلمهم بالسنة، فإن كانوا في السنة سواء فأقدمهم هجرة، فإن كانوا في الهجرة سواء فأقدمهم سلما', takhrij: 'رواه مسلم', note: 'سلمًا: إسلامًا.', pages: [48], nl: 'De mensen worden geleid door wie het best het Boek van Allah reciteert; zijn zij daarin gelijk, dan wie de sunna het best kent; zijn zij daarin gelijk, dan wie het eerst de hijra deed; zijn zij daarin gelijk, dan wie het eerst moslim werd', nlNote: '' },
  { narrator: '', text: 'لا يؤمن الرجل الرجل في سلطانه، ولا يقعد في بيته على تكرمته إلا بإذنه', takhrij: 'رواه مسلم', note: 'صاحب البيت والإمام الراتب أحق.', pages: [48], nl: 'Niemand leidt een ander in het gebed waar die het gezag heeft, en niemand gaat in zijn huis op zijn ereplaats zitten, behalve met zijn toestemming', nlNote: 'De gastheer en de vaste imam hebben voorrang.' },
  { narrator: 'عمرو بن سلمة', text: 'أنه أم قومه وهو ابن ست أو سبع سنين', takhrij: 'رواه البخاري', note: 'إمامة الصبي المميز. ' + FYI_NOTE, pages: [49], nl: 'Hij leidde zijn volk in het gebed toen hij zes of zeven jaar oud was', nlNote: 'Een kind dat onderscheid kan maken mag leiden. ' + FYI_NOTE_NL },
  { narrator: '', text: 'كان معاذ يصلي مع النبي ﷺ العشاء ثم يرجع إلى قومه فيصلي بهم، هي له تطوع ولهم مكتوبة', takhrij: 'البخاري ومسلم', note: 'إمامة المتنفل للمفترض. ' + FYI_NOTE, pages: [49], nl: 'Muʿādh bad ʿishāʾ met de Profeet ﷺ en ging dan terug naar zijn volk om hen voor te gaan; voor hem was het vrijwillig en voor hen verplicht', nlNote: 'Wie vrijwillig bidt, mag wie verplicht bidt leiden. ' + FYI_NOTE_NL },
  { narrator: 'يزيد بن الأسود', text: '«لا تفعلا، إذا صلى أحدكم في رحله ثم أدرك الإمام ولم يصل فليصل معه، فإنها له نافلة»', takhrij: 'أبو داود والترمذي وصححه الألباني', note: 'لرجلين لم يصليا معه. ' + FYI_NOTE, pages: [49], nl: '"Doe dat niet. Als een van jullie thuis heeft gebeden en daarna bij de imam komt die nog niet gebeden heeft, laat hij met hem meebidden; voor hem is het vrijwillig."', nlNote: 'Tegen twee mannen die niet met hem meebaden. ' + FYI_NOTE_NL },
  { narrator: '', text: 'يصلون لكم، فإن أصابوا فلكم، وإن أخطؤوا فلكم وعليهم', takhrij: 'رواه البخاري', note: 'إمامة الفاسق تصح في أصح القولين.', pages: [49], nl: 'Zij gaan jullie voor in het gebed: doen zij het goed, dan is het voor jullie; doen zij het fout, dan is het voor jullie en tegen hen', nlNote: 'Volgens de juiste mening is het gebed achter een zondige imam geldig.' },
  { narrator: '', text: 'أذن النبي ﷺ لأم ورقة أن تؤم أهل دارها، وكانت قد جمعت القرآن', takhrij: 'أبو داود وحسنه الألباني', note: 'إمامة المرأة للنساء.', pages: [50], nl: 'De Profeet ﷺ stond Umm Waraqa toe de bewoners van haar huis voor te gaan; zij kende de hele Koran', nlNote: 'Een vrouw mag vrouwen leiden.' },
  { narrator: '', text: 'تقدموا فأتموا بي، وليأتم بكم من بعدكم، لا يزال قوم يتأخرون حتى يؤخرهم الله', takhrij: 'رواه مسلم', note: '', pages: [50], nl: 'Kom naar voren en volg mij, en laat wie na jullie komen jullie volgen. Mensen blijven achteraan blijven tot Allah hen achteraan zet', nlNote: '' },
  { narrator: '', text: 'لو يعلم الناس ما في النداء والصف الأول ثم لم يجدوا إلا أن يستهموا عليه لاستهموا', takhrij: 'متفق عليه', note: '', pages: [50], nl: 'Als de mensen wisten wat er in de oproep en de eerste rij zit, en ze het alleen door loting konden krijgen, dan zouden ze erom loten', nlNote: '' },
  { narrator: 'جابر بن عبد الله', text: 'وقف جابر وجبار أحدهما عن يمينه والآخر عن يساره، فأخذ بأيديهما حتى أقامهما خلفه', takhrij: 'رواه مسلم', note: 'الأصل تقدم الإمام إذا كانوا اثنين فأكثر. ' + FYI_NOTE, pages: [51], nl: 'Jābir en Jabbār gingen rechts en links van hem staan; hij nam hen bij de hand en zette hen achter zich', nlNote: 'Bij twee of meer staat de imam voorop. ' + FYI_NOTE_NL },
  { narrator: 'أنس بن مالك', text: 'صففت أنا واليتيم وراءه، والعجوز من ورائنا', takhrij: 'متفق عليه', note: 'النساء خلف صفوف الرجال. ' + FYI_NOTE, pages: [51], nl: 'Ik en de wees stonden in de rij achter hem, en de oude vrouw achter ons', nlNote: 'Vrouwen staan achter de rijen van de mannen. ' + FYI_NOTE_NL },
  { narrator: '', text: 'إنما جعل الإمام ليؤتم به، فإذا كبر فكبروا، وإذا ركع فاركعوا، وإذا قال: سمع الله لمن حمده، فقولوا: ربنا ولك الحمد، وإذا سجد فاسجدوا', takhrij: 'متفق عليه', note: 'المتابعة.', pages: [52], nl: 'De imam is er om gevolgd te worden: als hij takbīr zegt, zeg dan takbīr; als hij buigt, buig dan; als hij zegt "Allah hoort wie Hem prijst", zeg dan "Onze Heer, U komt de lof toe"; en als hij neerknielt, kniel dan neer', nlNote: 'Het volgen van de imam.' },
  { narrator: '', text: 'أما يخشى الذي يرفع رأسه قبل الإمام أن يحول الله رأسه رأس حمار؟', takhrij: 'البخاري ومسلم', note: 'المسابقة محرمة.', pages: [52], nl: 'Vreest wie zijn hoofd vóór de imam opheft niet dat Allah zijn hoofd verandert in dat van een ezel?', nlNote: 'De imam vóór zijn is verboden.' },
  { narrator: '', text: 'إذا صلى أحدكم للناس فليخفف، فإن منهم الضعيف والسقيم والكبير، وإذا صلى أحدكم لنفسه فليطول ما شاء', takhrij: 'البخاري ومسلم', note: 'ومعيار التخفيف سنة النبي ﷺ لا هوى الناس.', pages: [53], nl: 'Als een van jullie de mensen voorgaat, laat hij het kort houden, want onder hen zijn zwakken, zieken en ouderen; en als hij alleen bidt, mag hij het zo lang maken als hij wil', nlNote: 'De maatstaf voor kort is de sunna van de Profeet ﷺ, niet wat de mensen willen.' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim',
  'النسائي وصححه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'رواه البخاري': 'al-Bukhārī',
  'البخاري ومسلم واللفظ له': 'al-Bukhārī en Muslim, in de bewoording van Muslim',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'ابن ماجه وصححه الألباني': 'Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أبو داود وابن ماجه وصححه الألباني': 'Abū Dāwūd en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود والنسائي وصححه الألباني': 'Abū Dāwūd en an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'الحاكم وصححه': 'al-Ḥākim, die hem ṣaḥīḥ noemde',
  'أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan'
}
const NARRATOR_NL = { 'أنس بن مالك': 'Anas ibn Mālik', 'جابر بن سمرة': 'Jābir ibn Samura', 'عمار بن ياسر': 'ʿAmmār ibn Yāsir', 'سلمان الفارسي': 'Salmān al-Fārisī', 'أبو هريرة': 'Abū Hurayra', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'عمارة بن رويبة': 'ʿUmāra ibn Ruwayba', 'عمرو بن سلمة': 'ʿAmr ibn Salama', 'يزيد بن الأسود': 'Yazīd ibn al-Aswad', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh' }

const PERSONS = [
  ['anas-ibn-malik', 'text', [41, 51], 'روى وقت الجمعة، ووقوفه مع اليتيم خلف النبي ﷺ.', 'Overleverde de tijd van het vrijdaggebed, en dat hij met de wees achter de Profeet ﷺ stond.'],
  ['jabir-ibn-samura', 'text', [41], 'روى أنه ﷺ كان يخطب قائمًا.', 'Overleverde dat hij ﷺ staand preekte.'],
  ['ibn-umar', 'text', [41, 43, 49, 51], 'روى الجلوس بين الخطبتين، وكان يصلي بعد الجمعة ركعتين في بيته، وصلى خلف الحجاج.', 'Overleverde het zitten tussen de twee preken; bad na het vrijdaggebed thuis twee rakʿa’s, en bad achter al-Ḥajjāj.'],
  ['ammar-ibn-yasir', 'text', [42], 'روى «إن طول صلاة الرجل وقصر خطبته مئنة من فقهه».', 'Overleveraar van "een lang gebed en een korte preek zijn een teken van begrip".'],
  ['jabir-ibn-abdallah', 'text', [42, 51], 'روى تسليم الخطيب إذا صعد المنبر، وأقامه النبي ﷺ مع جبار خلفه.', 'Overleverde dat de prediker groet als hij de preekstoel opgaat; de Profeet ﷺ zette hem met Jabbār achter zich.'],
  ['salman-al-farisi', 'text', [43, 45], 'روى فضل الاغتسال والتطيب والإنصات يوم الجمعة.', 'Overleverde de waarde van wassen, parfum en zwijgen op vrijdag.'],
  ['abu-hurayra', 'text', [43, 46], 'روى الأربع بعد الجمعة، والنهي عن إفراد الجمعة بالصيام.', 'Overleverde de vier rakʿa’s na het vrijdaggebed en het verbod om alleen op vrijdag te vasten.'],
  ['ibn-taymiyya', 'text', [43], 'قال: إن صلى في المسجد صلى أربعًا، وإن صلى في بيته صلى ركعتين.', 'Zei: in de moskee bidt hij er vier, thuis twee.'],
  ['abu-said-al-khudri', 'text', [44], 'روى «غسل الجمعة واجب على كل محتلم».', 'Overleveraar van "de wassing op vrijdag is verplicht voor iedere volwassene".'],
  ['umara-ibn-ruwayba', 'text', [46], 'أنكر على بشر بن مروان رفع يديه على المنبر.', 'Had bezwaar tegen Bishr ibn Marwān die zijn handen op de preekstoel hief.'],
  ['amr-ibn-salama', 'text', [49], 'أم قومه وهو ابن ست أو سبع سنين.', 'Leidde zijn volk in het gebed toen hij zes of zeven was.'],
  ['muadh-ibn-jabal', 'text', [49], 'كان يصلي مع النبي ﷺ العشاء ثم يؤم قومه.', 'Bad ʿishāʾ met de Profeet ﷺ en leidde daarna zijn volk.'],
  ['thawban', 'text', [49], 'روى «إنما أخاف على أمتي الأئمة المضلين».', 'Overleveraar van "ik vrees voor mijn umma de leiders die misleiden".'],
  ['umm-waraqa', 'text', [50], 'أذن لها النبي ﷺ أن تؤم أهل دارها، وكانت قد جمعت القرآن.', 'De Profeet ﷺ stond haar toe haar huisgenoten voor te gaan; zij kende de hele Koran.'],
  ['aisha', 'text', [50], 'أمت النساء فقامت بينهن.', 'Leidde vrouwen in het gebed en stond tussen hen in.'],
  ['umm-salama', 'text', [50], 'أمت النساء في العصر فقامت بينهن.', 'Leidde vrouwen in het ʿaṣr-gebed en stond tussen hen in.'],
  ['ibn-abbas', 'text', [51], 'أداره النبي ﷺ إلى يمينه لما وقف عن يساره.', 'De Profeet ﷺ zette hem aan zijn rechterkant toen hij links stond.'],
  ['ibn-masud', 'text', [51], 'صلى خلف الوليد بن عقبة.', 'Bad achter al-Walīd ibn ʿUqba.'],
  ['ibn-uthaymin', 'text', [52], 'قال: لا تجوز الصلاة خلف إمام يسرع فلا يطمئن ولا يدع من خلفه يطمئن.', 'Zei: je mag niet bidden achter een imam die zo snel gaat dat hij en wie achter hem staan niet tot rust komen.'],
  ['ibn-abd-al-barr', 'text', [53], 'نقل قول الجمهور فيمن أدرك الإمام راكعًا.', 'Gaf de mening van de meerderheid over wie de imam in de buiging bereikt.'],
  ['ibn-baz', 'text', [53], 'قال: لا يصلى خلف المشعوذ الذي يدعي علم الغيب.', 'Zei: bid niet achter een tovenaar die beweert het verborgene te kennen.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'صلاة الجمعة والإمامة',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'فضل يوم الجمعة وحكم صلاتها ومن تجب عليه ووقتها، والخطبتان وما يحرم أثناءهما، وراتبة الجمعة وسنن يومها، ثم الإمامة: الأحق بها ومن تصح إمامته، وموضع الإمام وأحوال المأموم معه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'الجمعة ثم الإمامة.',
    root: { label: 'الجمعة والإمامة', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'صلاة الجمعة', sub: 'الدرس ١٠', page: 40, children: ['واجبة عينًا', 'من لا تجب عليه', 'الخطبتان'] },
      { label: 'راتبة الجمعة وسننها', sub: 'الدرس ١١', page: 43, children: ['لا راتبة قبلية', 'التبكير والغسل', 'ساعة الإجابة'] },
      { label: 'الإمامة', sub: 'الدرس ١٢', page: 48, children: ['الأحق بها', 'من تصح إمامته', 'إمامة المرأة'] },
      { label: 'موضع الإمام وأحوال المأموم', sub: 'الدرس ١٣', page: 51, children: ['المتابعة', 'المسابقة', 'التخفيف'] }
    ]
  },
  points: [
    { text: 'صلاة الجمعة واجبة وجوبًا عينيًّا على كل مسلم ذكر حر بالغ عاقل مقيم قادر.', page: 41 },
    { text: 'لا تجب على المرأة والصبي والمريض والمسافر، وإن صلوها أجزأتهم عن الظهر.', page: 40 },
    { text: 'الخطبة ركن من أركان الجمعة، ويسن أن يخطب قائمًا ويجلس بين الخطبتين ويقصرهما.', page: 41 },
    { text: 'يحرم الكلام والإمام يخطب، ويحرم تخطي الرقاب لغير حاجة.', page: 42 },
    { text: 'ليس للجمعة راتبة قبلية، وبعدها ركعتان في البيت أو أربع في المسجد.', page: 43 },
    { text: 'تدرك الجمعة بركعة، ومن أدرك أقل من ركعة صلى ظهرًا.', page: 44 },
    { text: 'الأقرأ المقدم هو العالم بفقه صلاته، فيقدم القارئ الفقيه على الأقرأ غير الفقيه.', page: 48 },
    { text: 'مسابقة الإمام محرمة وتفسد الصلاة، والموافقة والتأخر الكثير مكروهان.', page: 52 }
  ],
  terms: [
    { term: 'ودعهم الجمعات', translit: 'wadʿihim al-jumuʿāt', meaning: 'تركهم صلاة الجمعة.', explanation: '', notes: [], page: 40 },
    { term: 'محتلم', translit: 'muḥtalim', meaning: 'البالغ.', explanation: '', notes: [], page: 40 },
    { term: 'مئنة', translit: 'maʾinna', meaning: 'العلامة.', explanation: '', notes: [], page: 42 },
    { term: 'لغوت', translit: 'laghawta', meaning: 'تكلمت بما لا يجوز فذهب أجر جمعتك.', explanation: '', notes: [], page: 42 },
    { term: 'بدنة', translit: 'badana', meaning: 'ناقة أو بعير يهدى.', explanation: '', notes: [], page: 44 },
    { term: 'ثوبي مهنته', translit: 'thawbay mihnatih', meaning: 'ثياب عمله.', explanation: '', notes: [], page: 45 },
    { term: 'تكرمته', translit: 'takrimatuh', meaning: 'مكانه الخاص به في بيته.', explanation: '', notes: [], page: 48 },
    { term: 'الإمام الراتب', translit: 'al-imām ar-rātib', meaning: 'الإمام المعين للمسجد.', explanation: '', notes: [], page: 48 },
    { term: 'المتابعة', translit: 'al-mutābaʿa', meaning: 'ألا ينتقل المأموم إلا إذا انتقل الإمام انتقالًا كاملًا.', explanation: '', notes: [], page: 52 },
    { term: 'المسابقة', translit: 'al-musābaqa', meaning: 'أن يسبق المأموم إمامه في الانتقال.', explanation: 'محرمة وتفسد الصلاة.', notes: [], page: 52 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'أحوال المأموم مع الإمام',
      intro: 'كما في الدرس الثالث عشر.',
      columns: ['حكمها'],
      rows: [
        { label: 'المتابعة', cells: ['مطلوبة'] },
        { label: 'المسابقة', cells: ['محرمة وتفسد الصلاة، ومن أحرم قبل إمامه لم تنعقد صلاته'] },
        { label: 'الموافقة', cells: ['مكروهة'] },
        { label: 'التأخر الكثير', cells: ['مكروه، وقد يصل إلى التحريم أو البطلان'] }
      ],
      page: 52
    },
    {
      type: 'compare',
      title: 'ترتيب الأحق بالإمامة',
      intro: 'كما في الدرس الثاني عشر، إذا لم يكن إمام راتب.',
      columns: ['البيان'],
      rows: [
        { label: '١', cells: ['الأقرأ العالم بفقه صلاته'] },
        { label: '٢', cells: ['الأعلم بالسنة'] },
        { label: '٣', cells: ['الأقدم هجرة'] },
        { label: '٤', cells: ['الأقدم إسلامًا'] },
        { label: '٥', cells: ['الأكبر سنًّا، ثم القرعة'] }
      ],
      page: 48
    },
    {
      type: 'compare',
      title: 'التبكير إلى الجمعة',
      intro: 'كما في حديث الساعات.',
      columns: ['كأنما قرب'],
      rows: [
        { label: 'الساعة الأولى', cells: ['بدنة'] },
        { label: 'الثانية', cells: ['بقرة'] },
        { label: 'الثالثة', cells: ['كبشًا أقرن'] },
        { label: 'الرابعة', cells: ['دجاجة'] },
        { label: 'الخامسة', cells: ['بيضة'] }
      ],
      page: 44
    }
  ],
  sections: [
    { title: 'وقت الجمعة', text: 'الصحيح أن وقتها كوقت الظهر من بعد الزوال إلى أن يصير ظل الشيء كطوله.', page: 41 },
    { title: 'مسنونات الخطبتين', text: 'القيام، والمنبر أو مكان مرتفع، والجلوس اليسير بينهما، والقصر والثانية أقصر، وتسليم الخطيب إذا صعد؛ وللاطلاع: الجلوس حتى يفرغ المؤذن والدعاء للمسلمين وولاة الأمور.', page: 41 },
    { title: 'صفة صلاة الجمعة', text: 'ركعتان جهريتان، يقرأ في الأولى الجمعة وفي الثانية المنافقون، أو الأعلى والغاشية.', page: 44 },
    { title: 'من سنن يوم الجمعة', text: 'التبكير، والغسل، والتنظف والطيب، ولبس الحسن، والإكثار من الصلاة على النبي ﷺ، وقراءة الكهف، وقراءة السجدة والإنسان في فجرها، وتحري ساعة الإجابة.', page: 44 },
    { title: 'مسائل في الجمعة', text: 'لا يشترط أن يصلي الخطيب نفسه، ويجوز الكلام قبل الخطبة وبين الخطبتين والأولى تركه، ويحرم البيع بعد النداء الثاني، ومن الأخطاء قراءة آيات فيها سجدة في فجرها بدل السورتين كاملتين.', page: 46 },
    { title: 'من تصح إمامتهم (للاطلاع فقط)', text: 'الصبي المميز، والمتنفل بالمفترض، والمفترض بالمتنفل؛ وتصح إمامة الفاسق في أصح القولين، وينبغي تركها إن أمكن غيره.', more: FYI, page: 49 },
    { title: 'إمامة المرأة', text: 'تؤم النساء وتقف وسطهن، كما فعلت عائشة وأم سلمة؛ ولا تجوز إمامتها للرجال بالإجماع.', page: 50 },
    { title: 'موضع الإمام (للاطلاع فقط)', text: 'يتقدم الإمام إذا كانوا اثنين فأكثر، ويقف الواحد عن يمينه مساويًا له، والنساء خلف الرجال.', more: FYI, page: 51 },
    { title: 'الصلاة خلف العاصي', text: 'جمهور الفقهاء على صحتها، وقد صلى الصحابة خلف من اشتهر فسقه؛ أما حديث «صلوا خلف كل بر وفاجر» فلا يصح.', page: 51 },
    { title: 'مسائل في الإمامة', text: 'تصح صلاة الظهر خلف العصر، ولا إعادة على من صلى خلف محدث لم يعلموا بحاله، ويستحب تطويل الركعة الأولى.', page: 53 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'من تجب عليه الجمعة', items: ['مسلم', 'ذكر', 'حر', 'بالغ', 'عاقل', 'مقيم', 'قادر'], page: 41, origin: 'boek' },
    { kind: 'uitzondering', title: 'من لا تجب عليهم الجمعة', items: ['المرأة', 'الصبي', 'المريض', 'المسافر', 'العبد المملوك'], page: 40, origin: 'boek' },
    { kind: 'definitie', title: 'بم يدرك الركوع', items: ['بأن يضع يديه على ركبتيه قبل أن يرفع الإمام ولو للحظة.'], page: 53, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الجمعة واجبة عينًا على الرجال المقيمين، وخطبتها ركن.',
    'يحرم الكلام والتخطي أثناء الخطبة.',
    'لا راتبة قبلية للجمعة، ومن سنن يومها التبكير والغسل والكهف.',
    'يقدم في الإمامة الأقرأ الفقيه ثم الأعلم بالسنة.',
    'على المأموم المتابعة، والمسابقة محرمة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما حكم صلاة الجمعة على الرجل المقيم القادر؟', options: ['واجبة وجوبًا عينيًّا', 'سنة', 'فرض كفاية', 'مستحبة'], answer: 0, explain: 'كما في الدرس العاشر.', page: 40 },
    { type: 'tf', q: 'إذا صلت المرأة الجمعة لم تجزئها عن الظهر.', options: ['صواب', 'خطأ'], answer: 1, explain: 'تصح وتجزئها عن الظهر.', page: 40 },
    { type: 'mc', q: 'ما حكم قول «أنصت» لصاحبك والإمام يخطب؟', options: ['لغو محرم', 'مستحب', 'واجب', 'لا بأس به'], answer: 0, explain: '«فقد لغوت».', page: 42 },
    { type: 'mc', q: 'من أدرك من الجمعة أقل من ركعة، ماذا يصلي؟', options: ['ظهرًا', 'جمعة', 'ركعتين فقط', 'لا يصلي'], answer: 0, explain: 'تدرك الجمعة بركعة.', page: 44 },
    { type: 'tf', q: 'تجوز إمامة المرأة للرجال.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا تجوز بإجماع المسلمين.', page: 50 },
    { type: 'mc', q: 'ما حكم مسابقة الإمام؟', options: ['محرمة وتفسد الصلاة', 'مكروهة فقط', 'مباحة', 'مستحبة'], answer: 0, explain: 'كما في أحوال المأموم.', page: 52 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٤٧ و٥٤. أجزاء «للاطلاع فقط» في الكتاب: من مسنونات الخطبة (ص٤٣)، من تصح إمامتهم (ص٤٩)، موضع الإمام (ص٥١).'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Het vrijdaggebed en het voorgaan',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De waarde van vrijdag, het oordeel over het vrijdaggebed, voor wie het verplicht is en de tijd; de twee preken en wat daarbij verboden is; de sunna’s van vrijdag; en daarna het voorgaan in het gebed: wie het meeste recht heeft, wie mag voorgaan, de plaats van de imam en hoe je hem volgt.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'Het vrijdaggebed, daarna het voorgaan.',
    root: { label: 'Vrijdag en voorgaan', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Het vrijdaggebed', sub: 'les 10', page: 40, children: ['individuele plicht', 'voor wie niet verplicht', 'de twee preken'] },
      { label: 'Sunna’s van vrijdag', sub: 'les 11', page: 43, children: ['geen sunna vooraf', 'vroeg gaan en wassen', 'het uur van verhoring'] },
      { label: 'Voorgaan', sub: 'les 12', page: 48, children: ['wie het meeste recht heeft', 'wie mag voorgaan', 'een vrouw als voorganger'] },
      { label: 'Plaats van de imam en volgen', sub: 'les 13', page: 51, children: ['volgen', 'vóór zijn', 'kort houden'] }
    ]
  },
  points: [
    { text: 'Het vrijdaggebed is een individuele plicht voor elke moslim die man, vrij, volwassen, verstandig, ingezetene en daartoe in staat is.', page: 41 },
    { text: 'Het is niet verplicht voor vrouwen, kinderen, zieken en reizigers; bidden zij het toch, dan volstaat het in plaats van ẓuhr.', page: 40 },
    { text: 'De preek is een zuil van het vrijdaggebed; sunna is staand preken, tussen de twee preken kort zitten en ze kort houden.', page: 41 },
    { text: 'Spreken terwijl de imam preekt is verboden, en over mensen heen stappen zonder noodzaak ook.', page: 42 },
    { text: 'Het vrijdaggebed heeft geen vaste sunna vooraf; erna twee rakʿa’s thuis of vier in de moskee.', page: 43 },
    { text: 'Je haalt het vrijdaggebed met één rakʿa; wie minder haalt, bidt ẓuhr.', page: 44 },
    { text: 'De beste reciteerder die voorrang heeft, is wie de fiqh van het gebed kent; een reciteerder met begrip gaat voor op een betere reciteerder zonder.', page: 48 },
    { text: 'De imam vóór zijn is verboden en maakt het gebed ongeldig; gelijktijdig bewegen en ver achterblijven zijn afgeraden.', page: 52 }
  ],
  terms: [
    { term: 'ودعهم الجمعات', translit: 'wadʿihim al-jumuʿāt', meaning: 'Het overslaan van het vrijdaggebed.', explanation: '', notes: [], page: 40 },
    { term: 'محتلم', translit: 'muḥtalim', meaning: 'Volwassen.', explanation: '', notes: [], page: 40 },
    { term: 'مئنة', translit: 'maʾinna', meaning: 'Een teken.', explanation: '', notes: [], page: 42 },
    { term: 'لغوت', translit: 'laghawta', meaning: 'Je sprak wat niet mag, en verloor de beloning van je vrijdaggebed.', explanation: '', notes: [], page: 42 },
    { term: 'بدنة', translit: 'badana', meaning: 'Een kameel als offer.', explanation: '', notes: [], page: 44 },
    { term: 'ثوبي مهنته', translit: 'thawbay mihnatih', meaning: 'Zijn werkkleding.', explanation: '', notes: [], page: 45 },
    { term: 'تكرمته', translit: 'takrimatuh', meaning: 'Zijn eigen ereplaats in huis.', explanation: '', notes: [], page: 48 },
    { term: 'الإمام الراتب', translit: 'al-imām ar-rātib', meaning: 'De vaste imam van de moskee.', explanation: '', notes: [], page: 48 },
    { term: 'المتابعة', translit: 'al-mutābaʿa', meaning: 'Volgen: pas bewegen als de imam zijn beweging helemaal heeft gemaakt.', explanation: '', notes: [], page: 52 },
    { term: 'المسابقة', translit: 'al-musābaqa', meaning: 'De imam vóór zijn in een beweging.', explanation: 'Verboden; het maakt het gebed ongeldig.', notes: [], page: 52 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Hoe je de imam volgt',
      intro: 'Zoals in les 13.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Volgen', cells: ['gevraagd'] },
        { label: 'Vóór zijn', cells: ['verboden en maakt het gebed ongeldig; wie vóór de imam de openings-takbīr zegt, is het gebed niet begonnen'] },
        { label: 'Gelijktijdig', cells: ['afgeraden'] },
        { label: 'Ver achterblijven', cells: ['afgeraden; het kan verboden of ongeldig worden'] }
      ],
      page: 52
    },
    {
      type: 'compare',
      title: 'Wie het meeste recht heeft om voor te gaan',
      intro: 'Zoals in les 12, als er geen vaste imam is.',
      columns: ['Uitleg'],
      rows: [
        { label: '1', cells: ['de beste reciteerder die de fiqh van het gebed kent'] },
        { label: '2', cells: ['wie de sunna het best kent'] },
        { label: '3', cells: ['wie het eerst de hijra deed'] },
        { label: '4', cells: ['wie het eerst moslim werd'] },
        { label: '5', cells: ['de oudste, en anders loting'] }
      ],
      page: 48
    },
    {
      type: 'compare',
      title: 'Vroeg naar het vrijdaggebed',
      intro: 'Zoals in de hadith over de uren.',
      columns: ['Alsof hij offert'],
      rows: [
        { label: 'Eerste uur', cells: ['een kameel'] },
        { label: 'Tweede', cells: ['een koe'] },
        { label: 'Derde', cells: ['een gehoornde ram'] },
        { label: 'Vierde', cells: ['een kip'] },
        { label: 'Vijfde', cells: ['een ei'] }
      ],
      page: 44
    }
  ],
  sections: [
    { title: 'De tijd van het vrijdaggebed', text: 'Volgens de juiste mening dezelfde als ẓuhr: vanaf het overhellen van de zon tot de schaduw van iets even lang is als het ding zelf.', page: 41 },
    { title: 'Sunna’s van de twee preken', text: 'Staan, op een preekstoel of verhoging, kort zitten ertussen, kort preken met de tweede korter, en groeten bij het opgaan; ter kennisname: zitten tot de muezzin klaar is en smeekbeden voor de moslims en de leiders.', page: 41 },
    { title: 'De vorm van het vrijdaggebed', text: 'Twee hardop gereciteerde rakʿa’s: in de eerste al-Jumuʿa en in de tweede al-Munāfiqūn, of al-Aʿlā en al-Ghāshiya.', page: 44 },
    { title: 'Sunna’s van de vrijdag', text: 'Vroeg gaan, wassen, reinigen en parfum, mooie kleding, veel zegen vragen over de Profeet ﷺ, al-Kahf reciteren, as-Sajda en al-Insān in het fajr-gebed, en het uur van verhoring zoeken.', page: 44 },
    { title: 'Vragen over vrijdag', text: 'De prediker hoeft niet zelf voor te gaan; spreken vóór de preek en tussen de preken mag maar is beter te laten; kopen en verkopen is verboden na de tweede oproep; een fout is in fajr losse knielverzen te reciteren in plaats van de twee hele soera’s.', page: 46 },
    { title: 'Wie mag voorgaan (alleen ter kennisname)', text: 'Een kind dat onderscheid kan maken, wie vrijwillig bidt voor wie verplicht bidt en omgekeerd; achter een zondige imam is het gebed volgens de juiste mening geldig, maar laat het als er een ander is.', more: FYI_NL, page: 49 },
    { title: 'Een vrouw als voorganger', text: 'Zij mag vrouwen voorgaan en staat dan in hun midden, zoals ʿĀʾisha en Umm Salama deden; mannen voorgaan mag zij volgens consensus niet.', page: 50 },
    { title: 'De plaats van de imam (alleen ter kennisname)', text: 'Bij twee of meer staat de imam voorop; één persoon staat rechts naast hem op gelijke hoogte; vrouwen staan achter de mannen.', more: FYI_NL, page: 51 },
    { title: 'Bidden achter een zondaar', text: 'De meerderheid van de fiqh-geleerden houdt het voor geldig; de metgezellen baden achter mensen die bekendstonden om hun zonden. De hadith "bid achter iedere vrome en zondaar" is niet betrouwbaar.', page: 51 },
    { title: 'Vragen over het voorgaan', text: 'Ẓuhr achter ʿaṣr is geldig; wie achter een imam zonder wassing bad zonder het te weten, hoeft niet te herhalen; de eerste rakʿa langer maken is aanbevolen.', page: 53 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Voor wie het vrijdaggebed verplicht is', items: ['moslim', 'man', 'vrij', 'volwassen', 'verstandig', 'ingezetene', 'in staat'], page: 41, origin: 'boek' },
    { kind: 'uitzondering', title: 'Voor wie het vrijdaggebed niet verplicht is', items: ['vrouwen', 'kinderen', 'zieken', 'reizigers', 'slaven'], page: 40, origin: 'boek' },
    { kind: 'definitie', title: 'Waarmee je de buiging haalt', items: ['Je handen op je knieën leggen voordat de imam opkomt, al is het maar even.'], page: 53, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Het vrijdaggebed is een individuele plicht voor mannen die ter plaatse wonen; de preek is een zuil.',
    'Spreken en over mensen heen stappen tijdens de preek is verboden.',
    'Er is geen vaste sunna vóór het vrijdaggebed; vroeg gaan, wassen en al-Kahf horen bij de sunna’s.',
    'De beste reciteerder met begrip gaat voor, daarna wie de sunna het best kent.',
    'Wie achter de imam bidt, volgt hem; hem vóór zijn is verboden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het oordeel over het vrijdaggebed voor een man die ter plaatse woont en het kan?', options: ['een individuele plicht', 'sunna', 'een gemeenschapsplicht', 'aanbevolen'], answer: 0, explain: 'Zoals in les 10.', page: 40 },
    { type: 'tf', q: 'Als een vrouw het vrijdaggebed bidt, volstaat het niet in plaats van ẓuhr.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is geldig en volstaat in plaats van ẓuhr.', page: 40 },
    { type: 'mc', q: 'Wat is het oordeel over "wees stil" zeggen terwijl de imam preekt?', options: ['ijdel spreken, verboden', 'aanbevolen', 'verplicht', 'geen probleem'], answer: 0, explain: '"Dan heb je zelf ijdel gesproken."', page: 42 },
    { type: 'mc', q: 'Wat bid je als je minder dan één rakʿa van het vrijdaggebed haalt?', options: ['ẓuhr', 'het vrijdaggebed', 'alleen twee rakʿa’s', 'niets'], answer: 0, explain: 'Je haalt het vrijdaggebed met één rakʿa.', page: 44 },
    { type: 'tf', q: 'Een vrouw mag mannen in het gebed voorgaan.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Volgens consensus mag dat niet.', page: 50 },
    { type: 'mc', q: 'Wat is het oordeel over de imam vóór zijn?', options: ['verboden en het maakt het gebed ongeldig', 'alleen afgeraden', 'toegestaan', 'aanbevolen'], answer: 0, explain: 'Zoals bij de manieren van volgen.', page: 52 }
  ]),
  note: 'Oefeningen van het boek op p. 47 en 54. Delen die het boek alleen ter kennisname geeft: sunna’s van de preek (p. 43), wie mag voorgaan (p. 49), de plaats van de imam (p. 51). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '10', unit: 3, ar, nl }
