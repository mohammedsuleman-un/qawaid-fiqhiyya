// Hoofdstukkaart bij العقيدة (٢), eenheid 4: الإلحاد في أسماء الله تعالى وصفاته، وأنواعه
// (lessen 11–18, boek p. 51–73). Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het
// importbestand van het boek; hadith en takhrij zoals in het boek. Het deel over het "tellen" van
// de namen (p. 56) staat in het boek als "للاطلاع فقط".
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٢)، سلسلة زاد العلمية',
  pages: '51–73',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'أبو هريرة', text: 'إن لله تسعة وتسعين اسما، مائة إلا واحدا، من أحصاها دخل الجنة', takhrij: 'أخرجه البخاري ومسلم', note: 'في المراد بإحصاء أسماء الله (للاطلاع فقط).', pages: [56], nl: 'Allah heeft negenennegentig namen, honderd min één; wie ze telt (en bewaart), gaat het Paradijs binnen', nlNote: 'Bij wat het "tellen" van Allahs namen inhoudt (ter kennisname).' },
  { narrator: '', text: 'لله أرحم بعباده من هذه بولدها', takhrij: 'أخرجه البخاري ومسلم', note: 'في أن اسم الرحمن متضمن للرحمة الكاملة.', pages: [58], nl: 'Allah is barmhartiger voor Zijn dienaren dan deze (moeder) voor haar kind', nlNote: 'Bij de naam ar-Raḥmān, die volmaakte barmhartigheid inhoudt.' },
  { narrator: '', text: 'ينزل ربنا إلى السماء الدنيا', takhrij: 'أخرجه البخاري ومسلم', note: 'تؤخذ منه صفة النزول، ولا يقال من أسمائه: النازل.', pages: [58], nl: 'onze Heer daalt af naar de laagste hemel', nlNote: 'Hieruit volgt de eigenschap afdalen, maar "an-Nāzil" is geen naam van Allah.' },
  { narrator: 'عبد الله بن مسعود', text: 'ما قال عبد قط إذا أصابه هم وحزن: اللهم إني عبدك... أسألك بكل اسم هو لك... أو استأثرت به في علم الغيب عندك... قالوا: يا رسول الله، ينبغي لنا أن نتعلم هؤلاء الكلمات؟ قال: أجل، ينبغي لمن سمعهن أن يتعلمهن', takhrij: 'أخرجه أحمد، وصححه الألباني', note: 'دليل أن الأسماء الحسنى لا تحد بعدد معين.', pages: [59], nl: 'de smeekbede bij zorg en verdriet: "... ik vraag U bij elke naam die U toebehoort ... of die U bij Uzelf in de kennis van het verborgene hield ..."; zij vroegen: moeten wij deze woorden leren? Hij zei: ja, wie ze hoort, hoort ze te leren', nlNote: 'Bewijs dat Allahs namen niet tot een vast aantal beperkt zijn.' },
  { narrator: 'أنس بن مالك', text: 'ما يمنعك أن تسمعي ما أوصيك به؟! أن تقولي إذا أصبحت وإذا أمسيت: يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين', takhrij: 'أخرجه الحاكم، وحسنه الألباني', note: 'قاله النبي ﷺ لفاطمة؛ في اسمي الحي والقيوم.', pages: [62], nl: 'wat houdt je tegen te luisteren naar wat ik je aanraad? Zeg ʼs ochtends en ʼs avonds: o Levende, o Zelfbestaande, bij Uw barmhartigheid zoek ik hulp; breng al mijn zaken in orde en laat mij geen oogwenk aan mezelf over', nlNote: 'Tegen Fāṭima; bij de namen al-Ḥayy en al-Qayyūm.' },
  { narrator: 'كعب بن عجرة', text: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد', takhrij: 'أخرجه البخاري ومسلم', note: 'في التشهد؛ في اسم الحميد.', pages: [62], nl: 'O Allah, zegen Muḥammad en de familie van Muḥammad zoals U Ibrāhīm en de familie van Ibrāhīm zegende; U bent de Geprezene, de Glorierijke', nlNote: 'In de tashahhud; bij de naam al-Ḥamīd.' },
  { narrator: '', text: 'بسم الله الرحمن الرحيم', takhrij: 'أخرجه مسلم', note: 'أمر النبي ﷺ كاتبه يوم الحديبية أن يكتبها؛ في اسمي الرحمن والرحيم.', pages: [62], nl: 'in de naam van Allah, de Erbarmer, de Barmhartige', nlNote: 'De Profeet ﷺ liet dit zijn schrijver noteren bij het verdrag van al-Ḥudaybiya; bij de namen ar-Raḥmān en ar-Raḥīm.' },
  { narrator: 'عبد الله بن عباس', text: 'لا إله إلا الله العظيم الحليم... الحديث', takhrij: 'أخرجه البخاري ومسلم', note: 'كان النبي ﷺ يقوله عند الكرب؛ في اسم الحليم.', pages: [63], nl: 'er is geen god dan Allah, de Geweldige, de Verdraagzame ...', nlNote: 'Dit zei de Profeet ﷺ bij benauwdheid; bij de naam al-Ḥalīm.' },
  { narrator: 'عثمان بن أبي العاص', text: 'ضع يدك على الذي تألم من جسدك، وقل: بسم الله ثلاثا، وقل سبع مرات: أعوذ بعزة الله وقدرته من شر ما أجد وأحاذر', takhrij: 'أخرجه مسلم', note: 'في صفة القدرة.', pages: [63], nl: 'leg je hand op de plek van je lichaam die pijn doet en zeg drie keer "bismillāh", en zeven keer: ik zoek bescherming bij de macht en het vermogen van Allah tegen het kwaad van wat ik voel en vrees', nlNote: 'Bij de eigenschap vermogen (qudra).' },
  { narrator: 'جابر بن عبد الله', text: 'اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك', takhrij: 'أخرجه البخاري', note: 'من دعاء الاستخارة؛ في صفة العلم.', pages: [63], nl: 'O Allah, ik vraag U om het goede te kiezen door Uw kennis, en om vermogen door Uw vermogen', nlNote: 'Uit de smeekbede om leiding (istikhāra); bij de eigenschap kennis.' },
  { narrator: 'عبد الله بن عمر', text: 'إذا أراد الله بقوم عذابا، أصاب العذاب من كان فيهم، ثم بعثوا على أعمالهم', takhrij: 'أخرجه البخاري ومسلم', note: 'في صفة الإرادة.', pages: [64], nl: 'als Allah een volk wil straffen, treft de straf iedereen onder hen; daarna worden zij opgewekt volgens hun daden', nlNote: 'Bij de eigenschap willen (irāda).' },
  { narrator: 'أبو هريرة', text: 'اللهم أنت الأول فليس قبلك شيء، وأنت الآخر فليس بعدك شيء، وأنت الظاهر فليس فوقك شيء، وأنت الباطن فليس دونك شيء', takhrij: 'رواه مسلم', note: 'في صفة العلو.', pages: [64], nl: 'O Allah, U bent de Eerste en er is niets vóór U, de Laatste en er is niets na U, de Hoogste en er is niets boven U, de Nabije en er is niets dichterbij dan U', nlNote: 'Bij de eigenschap hoogheid (ʿuluww).' },
  { narrator: 'قتادة بن النعمان', text: 'لما فرغ الله من خلقه استوى على عرشه', takhrij: 'أخرجه الخلال، وصححه الذهبي وابن القيم', note: 'في صفة الاستواء.', pages: [64], nl: 'toen Allah klaar was met Zijn schepping, rees Hij boven Zijn Troon (istawā)', nlNote: 'Bij de eigenschap istiwāʾ.' },
  { narrator: 'أبو هريرة', text: 'احتج آدم وموسى، فقال له موسى: يا آدم، أنت أبونا خيبتنا وأخرجتنا من الجنة. قال له آدم: يا موسى، اصطفاك الله بكلامه، وخط لك التوراة بيده... الحديث', takhrij: 'أخرجه البخاري ومسلم', note: 'في صفة الكلام.', pages: [65], nl: 'Ādam en Mūsā twistten. Mūsā zei: Ādam, jij bent onze vader; je hebt ons teleurgesteld en uit het Paradijs gebracht. Ādam zei: Mūsā, Allah verkoos jou met Zijn spreken en schreef de Thora voor jou met Zijn hand ...', nlNote: 'Bij de eigenschap spreken (kalām).' },
  { narrator: 'جابر بن عبد الله', text: 'أعوذ بوجهك', takhrij: 'أخرجه البخاري', note: 'لما نزلت ﴿قل هو القادر على أن يبعث عليكم عذابا من فوقكم﴾؛ في صفة الوجه.', pages: [65], nl: 'ik zoek bescherming bij Uw aangezicht', nlNote: 'Toen al-Anʿām 6:65 neerkwam; bij de eigenschap aangezicht.' },
  { narrator: 'أبو موسى الأشعري', text: 'إن الله يبسط يده بالليل ليتوب مسيء النهار، ويبسط يده بالنهار ليتوب مسيء الليل، حتى تطلع الشمس من مغربها', takhrij: 'أخرجه مسلم', note: 'في صفة اليدين.', pages: [66], nl: 'Allah strekt ʼs nachts Zijn hand uit zodat wie overdag zondigde berouw toont, en overdag zodat wie ʼs nachts zondigde berouw toont, totdat de zon in het westen opkomt', nlNote: 'Bij de eigenschap handen.' },
  { narrator: 'عبد الله بن عمر', text: 'إن الله لا يخفى عليكم، إن الله ليس بأعور، وأشار بيده إلى عينيه، وإن المسيح الدجال أعور العين اليمنى، كأن عينه عنبة طافية', takhrij: 'في الصحيحين', note: 'في صفة العينين.', pages: [66], nl: 'Allah is voor jullie niet verborgen; Allah is niet eenogig (en hij wees naar zijn ogen), maar de Dajjāl is blind aan zijn rechteroog, alsof zijn oog een uitpuilende druif is', nlNote: 'Bij de eigenschap ogen.' },
  { narrator: 'أبو هريرة', text: 'فأما النار فلا تمتلئ حتى يضع الله تبارك وتعالى رجله، تقول: قط قط، فهنالك تمتلئ، ويزوي بعضها إلى بعض', takhrij: 'أخرجه البخاري ومسلم', note: 'في تحاجج الجنة والنار، وفي بعض الروايات: «فيضع قدمه عليها»؛ في صفة القدم.', pages: [66, 67], nl: 'het Vuur raakt niet vol totdat Allah Zijn voet erop zet; dan zegt het: genoeg, genoeg; dan raakt het vol en trekt het samen', nlNote: 'Uit de hadith over het twistgesprek van Paradijs en Vuur; in andere versies "Hij zet Zijn voet erop"; bij de eigenschap voet.' },
  { narrator: 'معاوية بن الحكم السلمي', text: 'أين الله؟ قالت: في السماء. قال: من أنا؟ قالت: أنت رسول الله. قال: أعتقها فإنها مؤمنة', takhrij: 'صحيح مسلم', note: 'في معنى الجهة الحق: أن الله فوق العالم.', pages: [72], nl: 'waar is Allah? Zij zei: in de hemel. Hij zei: wie ben ik? Zij zei: u bent de boodschapper van Allah. Hij zei: laat haar vrij, want zij is gelovig', nlNote: 'Bij de juiste betekenis van "richting": Allah is boven de schepping.' },
  { narrator: 'أبو هريرة', text: 'يقبض الله تبارك وتعالى الأرض يوم القيامة، ويطوي السماوات بيمينه، ثم يقول: أنا الملك، أين ملوك الأرض؟', takhrij: 'في الصحيحين وغيرهما', note: 'في رد المعنى الباطل للحيز.', pages: [73], nl: 'Allah neemt op de Dag der Opstanding de aarde in Zijn greep en rolt de hemelen op in Zijn rechterhand; dan zegt Hij: Ik ben de Koning; waar zijn de koningen van de aarde?', nlNote: 'Tegen de onjuiste betekenis van "ruimte" (ḥayyiz).' }
]

const TAKHRIJ_NL = {
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه أحمد، وصححه الألباني': 'Aḥmad; authentiek volgens al-Albānī',
  'أخرجه الحاكم، وحسنه الألباني': 'al-Ḥākim; ḥasan volgens al-Albānī',
  'أخرجه مسلم': 'Muslim',
  'رواه مسلم': 'Muslim',
  'صحيح مسلم': 'Ṣaḥīḥ Muslim',
  'أخرجه البخاري': 'al-Bukhārī',
  'أخرجه الخلال، وصححه الذهبي وابن القيم': 'al-Khallāl; authentiek volgens adh-Dhahabī en Ibn al-Qayyim',
  'في الصحيحين': 'al-Bukhārī en Muslim',
  'في الصحيحين وغيرهما': 'al-Bukhārī, Muslim en anderen'
}
const NARRATOR_NL = {
  'أبو هريرة': 'Abū Hurayra', 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'أنس بن مالك': 'Anas ibn Mālik', 'كعب بن عجرة': 'Kaʿb ibn ʿUjra',
  'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'عثمان بن أبي العاص': 'ʿUthmān ibn Abī al-ʿĀṣ', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh',
  'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'قتادة بن النعمان': 'Qatāda ibn an-Nuʿmān', 'أبو موسى الأشعري': 'Abū Mūsā al-Ashʿarī',
  'معاوية بن الحكم السلمي': 'Muʿāwiya ibn al-Ḥakam as-Sulamī'
}

const PERSONS = [
  ['nuaym-ibn-hammad', 'text', [54], 'نقل الكتاب قوله: «من شبه الله بخلقه فقد كفر، ومن جحد ما وصف الله به نفسه فقد كفر».', 'Het boek citeert hem: "wie Allah met Zijn schepping vergelijkt, is ongelovig geworden, en wie ontkent waarmee Allah Zichzelf beschreef, ook".'],
  ['abu-hurayra', 'text', [56, 64, 65, 66, 73], 'روى أحاديث الأسماء، و«اللهم أنت الأول»، واحتجاج آدم وموسى، وتحاجج الجنة والنار، وقبض الأرض.', 'Overleverde onder meer de hadith van de namen, "O Allah, U bent de Eerste", het twistgesprek van Ādam en Mūsā, dat van Paradijs en Vuur, en het grijpen van de aarde.'],
  ['ibn-masud', 'text', [59], 'روى دعاء الهم والحزن.', 'Overleverde de smeekbede bij zorg en verdriet.'],
  ['anas-ibn-malik', 'text', [62], 'روى وصية النبي ﷺ لفاطمة «يا حي يا قيوم».', 'Overleverde het advies van de Profeet ﷺ aan Fāṭima: "o Levende, o Zelfbestaande".'],
  ['fatima', 'text', [62], 'أوصاها النبي ﷺ أن تقول صباحا ومساء: «يا حي يا قيوم...».', 'De Profeet ﷺ raadde haar aan ʼs ochtends en ʼs avonds te zeggen: "o Levende, o Zelfbestaande ...".'],
  ['kab-ibn-ujra', 'text', [62], 'روى صيغة الصلاة على النبي ﷺ في التشهد.', 'Overleverde de zegenbede over de Profeet ﷺ in de tashahhud.'],
  ['ibn-abbas', 'text', [63, 73], 'روى دعاء الكرب، ونقل الكتاب قوله: «ما السماوات السبع والأرضون السبع... إلا كخردلة في يد أحدكم».', 'Overleverde de smeekbede bij benauwdheid; het boek citeert ook zijn woorden dat de zeven hemelen en aarden in de hand van de Erbarmer zijn als een mosterdzaadje in iemands hand.'],
  ['uthman-ibn-abi-al-as', 'text', [63], 'شكا إلى النبي ﷺ وجعا فعلمه الرقية.', 'Klaagde bij de Profeet ﷺ over pijn en kreeg een smeekbede om te zeggen.'],
  ['jabir-ibn-abdallah', 'text', [63, 65], 'روى دعاء الاستخارة وحديث «أعوذ بوجهك».', 'Overleverde de istikhāra-smeekbede en "ik zoek bescherming bij Uw aangezicht".'],
  ['ibn-umar', 'text', [64, 66], 'روى حديث «إذا أراد الله بقوم عذابا» وحديث الدجال.', 'Overleverde "als Allah een volk wil straffen" en de hadith over de Dajjāl.'],
  ['qatada-ibn-an-numan', 'text', [64], 'روى «لما فرغ الله من خلقه استوى على عرشه».', 'Overleverde "toen Allah klaar was met Zijn schepping, rees Hij boven Zijn Troon".'],
  ['abu-musa-al-ashari', 'text', [66], 'روى حديث بسط اليد للتوبة.', 'Overleverde de hadith over het uitstrekken van de hand voor berouw.'],
  ['malik-ibn-anas', 'text', [70], 'قال: «الاستواء معلوم، والكيف مجهول، والإيمان به واجب، والسؤال عنه بدعة».', 'Zei: "de istiwāʾ is bekend, het hoe is onbekend, erin geloven is verplicht en ernaar vragen is een vernieuwing".'],
  ['muawiya-ibn-al-hakam', 'text', [72], 'روى حديث الجارية «أين الله؟».', 'Overleverde de hadith van de slavin: "waar is Allah?".'],
  ['al-bukhari', 'takhrij', [56, 58, 62, 63, 64, 65, 66, 73], 'أخرج أكثر أحاديث هذه الوحدة.', 'Nam de meeste hadith uit deze eenheid op.'],
  ['muslim', 'takhrij', [56, 58, 62, 63, 64, 65, 66, 72, 73], 'أخرج أكثر أحاديث هذه الوحدة.', 'Nam de meeste hadith uit deze eenheid op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [59], 'أخرج دعاء الهم والحزن.', 'Nam de smeekbede bij zorg en verdriet op.'],
  ['al-hakim', 'takhrij', [62], 'أخرج حديث «يا حي يا قيوم».', 'Nam "o Levende, o Zelfbestaande" op.'],
  ['al-khallal', 'takhrij', [64], 'أخرج «لما فرغ الله من خلقه استوى على عرشه».', 'Nam "toen Allah klaar was met Zijn schepping ..." op.'],
  ['adh-dhahabi', 'takhrij', [64], 'صحح «لما فرغ الله من خلقه استوى على عرشه».', 'Noemde "toen Allah klaar was met Zijn schepping ..." authentiek.'],
  ['ibn-al-qayyim', 'takhrij', [64], 'صحح «لما فرغ الله من خلقه استوى على عرشه».', 'Noemde "toen Allah klaar was met Zijn schepping ..." authentiek.'],
  ['al-albani', 'takhrij', [59, 62], 'صحح دعاء الهم والحزن، وحسن حديث «يا حي يا قيوم».', 'Noemde de smeekbede bij zorg en verdriet authentiek en "o Levende, o Zelfbestaande" ḥasan.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'الإلحاد في أسماء الله تعالى وصفاته، وأنواعه',
  subtitle: 'ثمانية دروس مجموعة في صفحة واحدة',
  summary: 'معنى الإلحاد في الأسماء والصفات وأنواعه وحكمه، وقواعد أهل السنة في الأسماء والصفات، وأمثلة تطبيقية، وأقسام الصفات، والقاعدة في كيفياتها، وما لم يرد نفيه ولا إثباته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ٥٢ من الكتاب.',
    root: { label: 'الإلحاد في الأسماء والصفات', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'الإلحاد', sub: 'الدرس ١١', page: 53, children: ['معناه', 'أنواعه الأربعة', 'حكمه'] },
      { label: 'قواعد أهل السنة', sub: 'الدرسان ١٢–١٣', page: 57, children: ['الأسماء توقيفية وكلها حسنى', 'باب الصفات أوسع', 'القول في الصفات كالقول في الذات'] },
      { label: 'أمثلة تطبيقية', sub: 'الدرسان ١٤–١٥', page: 62, children: ['من الأسماء', 'من الصفات'] },
      { label: 'أقسام الصفات', sub: 'الدرس ١٦', page: 67, children: ['ثبوتية وسلبية', 'خبرية وسمعية عقلية', 'ذاتية وفعلية'] },
      { label: 'الكيفية وما لم يرد', sub: 'الدرسان ١٧–١٨', page: 70, children: ['المعنى معلوم والكيف مجهول', 'الجهة والحيز والجسم'] }
    ]
  },
  points: [
    { text: 'الإلحاد في الأسماء والصفات: الميل بها عما يجب اعتقاده فيها، وهو محرم بجميع أنواعه.', page: 53 },
    { text: 'أنواعه أربعة: إنكار شيء منها، وتسمية الله بما لم يسم به نفسه، واعتقاد دلالتها على التمثيل، واشتقاق أسماء الأصنام منها.', page: 53 },
    { text: 'أسماء الله توقيفية، وكلها حسنى، ولا تحد بعدد معين، وباب الصفات أوسع من باب الأسماء.', page: 57 },
    { text: 'الإيمان بالاسم يتضمن إثبات الاسم والصفة التي دل عليها والآثار المترتبة عليه.', page: 59 },
    { text: 'القول في الصفات كالقول في الذات، والقول في بعض الصفات كالقول في بعضها الآخر.', page: 60 },
    { text: 'الصفات ثبوتية وسلبية، وخبرية وسمعية عقلية، وذاتية وفعلية وذاتية فعلية.', page: 67 },
    { text: 'المعنى معلوم والكيف مجهول، والتفويض في الكيفية فقط.', page: 70 },
    { text: 'ما لم يرد نفيه ولا إثباته كالجهة والحيز: لا يثبت لفظه ولا ينفى، ويستفصل في معناه.', page: 72 }
  ],
  terms: [
    { term: 'الإلحاد', translit: 'al-ilḥād', meaning: 'لغة: الميل. وفي الأسماء والصفات: الميل بها عما يجب اعتقاده فيها.', explanation: '', notes: ['[النحل: ١٠٣]'], page: 53 },
    { term: 'الأسماء التوقيفية', translit: 'at-tawqīf', meaning: 'التوقف في أسماء الله على النص الثابت في الكتاب وصحيح السنة، لا يزاد فيها ولا ينقص.', explanation: 'فلا يسمى الله: العارف، العاقل، الجائي، الآتي.', notes: ['[الإسراء: ٣٦]'], page: 57 },
    { term: 'الحسنى', translit: 'al-ḥusnā', meaning: 'مؤنث الأحسن: البالغة في الحسن غايته.', explanation: 'لاشتمالها على أحسن المعاني وأشرفها.', notes: ['[الأعراف: ١٨٠]'], page: 57 },
    { term: 'إحصاء الأسماء', translit: 'iḥṣāʾ al-asmāʾ', meaning: 'عدها وحفظها وفهم معانيها والإيمان بها ودعاء الله بها والعمل بمقتضاها.', explanation: 'للاطلاع فقط في الكتاب.', notes: [], page: 56 },
    { term: 'الحكم والمقتضى', translit: 'al-ḥukm wa-l-muqtaḍā', meaning: 'آثار الاسم: كالسميع يسمع السر والنجوى (الحكم)، فيجب خشيته ومراقبته (المقتضى).', explanation: '', notes: [], page: 59 },
    { term: 'الصفة الذاتية', translit: 'aṣ-ṣifa adh-dhātiyya', meaning: 'الملازمة لذات الله، لم يزل ولا يزال متصفا بها، كالعلم والقدرة والوجه واليدين.', explanation: 'وتسمى الصفات اللازمة.', notes: [], page: 68 },
    { term: 'الصفة الفعلية', translit: 'aṣ-ṣifa al-fiʿliyya', meaning: 'المتعلقة بمشيئة الله وقدرته، إن شاء فعلها وإن شاء لم يفعلها، كالاستواء والنزول والغضب.', explanation: 'وتسمى الصفات الاختيارية.', notes: [], page: 64 },
    { term: 'الصفة الخبرية', translit: 'aṣ-ṣifa al-khabariyya', meaning: 'لا سبيل إلى إثباتها إلا بالخبر عن الله أو رسوله، كالوجه واليدين والنزول.', explanation: 'وتسمى سمعية أو نقلية.', notes: [], page: 68 },
    { term: 'الصفات الثبوتية والسلبية', translit: 'ath-thubūtiyya wa-s-salbiyya', meaning: 'الثبوتية: ما أثبته الله لنفسه، وهي صفات كمال. والسلبية: ما نفاه عن نفسه، وهي صفات نقص.', explanation: '', notes: ['[الكهف: ٤٩]'], page: 67 },
    { term: 'الاستواء', translit: 'al-istiwāʾ', meaning: 'في لغة العرب: العلو والارتفاع والاستقرار والصعود.', explanation: 'استواء يليق بجلاله لا يشابهه فيه مخلوق.', notes: ['[طه: ٥]'], page: 64 },
    { term: 'المفوضة', translit: 'al-mufawwiḍa', meaning: 'الذين يفوضون المعنى والكيف معا.', explanation: 'والصواب عند الكتاب: التفويض في الكيفية فقط.', notes: [], page: 71 },
    { term: 'الجهة', translit: 'al-jiha', meaning: 'لفظ لم يرد في الكتاب والسنة نفيه ولا إثباته.', explanation: 'إن أريد بها مخلوق يحيط بالله فباطل، وإن أريد ما فوق العالم فحق.', notes: [], page: 72 },
    { term: 'الحيز', translit: 'al-ḥayyiz', meaning: 'لفظ لم يرد في الكتاب والسنة نفيه ولا إثباته.', explanation: 'إن أريد أن المخلوقات تحيط بالله فباطل، وإن أريد أنه بائن من خلقه فحق.', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'أنواع الإلحاد في الأسماء والصفات',
      intro: 'كما في مخطط الكتاب في صفحة ٥٥.',
      nodes: [
        { label: 'إنكار شيء من الأسماء أو الصفات', sub: 'كإنكار اسم الرحمن، أو: رحيم بلا رحمة', page: 53 },
        { label: 'تسمية الله بما لم يسم به نفسه', sub: 'كالعلة الفاعلة عند بعض الفلاسفة، والأب عند النصارى', page: 53 },
        { label: 'اعتقاد دلالتها على التمثيل', sub: 'تكذيب للشورى ١١ ومريم ٦٥', page: 54 },
        { label: 'اشتقاق أسماء الأصنام منها', sub: 'اللات من الإله، والعزى من العزيز، ومناة من المنان', page: 54 }
      ]
    },
    {
      type: 'steps',
      title: 'قواعد أهل السنة في الأسماء والصفات',
      intro: 'سبع قواعد ذكرها الكتاب.',
      nodes: [
        { label: 'أسماء الله توقيفية', page: 57 },
        { label: 'أسماء الله كلها حسنى', page: 57 },
        { label: 'باب الصفات أوسع من باب الأسماء', page: 58 },
        { label: 'الأسماء الحسنى لا تحد بعدد معين', page: 59 },
        { label: 'الإيمان بالاسم يتضمن الاسم والصفة والأثر', page: 59 },
        { label: 'القول في الصفات كالقول في الذات', page: 60 },
        { label: 'القول في بعض الصفات كالقول في بعضها الآخر', page: 60 }
      ]
    },
    {
      type: 'tree',
      title: 'الإيمان باسم السميع',
      intro: 'مثال الكتاب للقاعدة الخامسة.',
      root: { label: 'السميع', page: 59 },
      nodes: [
        { label: 'إثبات الاسم' },
        { label: 'إثبات صفة السمع' },
        { label: 'الآثار', children: ['الحكم: يسمع السر والنجوى', 'المقتضى: خشيته ومراقبته والحياء منه'] }
      ]
    },
    {
      type: 'compare',
      title: 'أمثلة تطبيقية من الصفات',
      intro: 'نوع كل صفة ودليلها في الكتاب.',
      columns: ['النوع', 'من القرآن', 'من السنة'],
      rows: [
        { label: 'القدرة', cells: ['ذاتية', '[البقرة: ٢٠]', 'حديث عثمان بن أبي العاص'] },
        { label: 'العلم', cells: ['ذاتية', '[البقرة: ٢٥٥]', 'دعاء الاستخارة'] },
        { label: 'الإرادة', cells: ['فعلية', '[الأنعام: ١٢٥]', 'حديث ابن عمر'] },
        { label: 'العلو', cells: ['ذاتية', '[الأعلى: ١؛ النحل: ٥٠]', '«وأنت الظاهر فليس فوقك شيء»'] },
        { label: 'الاستواء', cells: ['فعلية', '[طه: ٥]', 'حديث قتادة بن النعمان'] },
        { label: 'الكلام', cells: ['ذاتية فعلية', '[النساء: ١٦٤]', 'احتجاج آدم وموسى'] },
        { label: 'الوجه', cells: ['ذاتية خبرية', '[الرحمن: ٢٧]', '«أعوذ بوجهك»'] },
        { label: 'اليدان', cells: ['ذاتية خبرية', '[ص: ٧٥]', 'حديث أبي موسى'] },
        { label: 'العينان', cells: ['ذاتية خبرية', '[طه: ٣٩]', 'حديث ابن عمر في الدجال'] },
        { label: 'القدم', cells: ['ذاتية خبرية', '—', 'تحاجج الجنة والنار'] }
      ],
      page: 63
    },
    {
      type: 'tree',
      title: 'أقسام صفات الله',
      intro: 'كما في مخطط الكتاب في صفحة ٦٩.',
      root: { label: 'صفات الله', page: 67 },
      nodes: [
        { label: 'باعتبار الثبوت وعدمه', children: ['ثبوتية: الحياة، العلم، الوجه', 'سلبية: نفي الموت والنوم والظلم'], page: 67 },
        { label: 'باعتبار أدلة ثبوتها', children: ['خبرية: الوجه، اليدان، الاستواء', 'سمعية عقلية: الحياة، العلم، الخلق'], page: 68 },
        { label: 'باعتبار تعلقها بالذات والأفعال', children: ['ذاتية: العلم، القدرة', 'فعلية: الاستواء، النزول', 'ذاتية فعلية: الكلام'], page: 68 }
      ]
    },
    {
      type: 'compare',
      title: 'المعنى والكيفية',
      intro: 'قال الإمام مالك: «الاستواء معلوم، والكيف مجهول، والإيمان به واجب، والسؤال عنه بدعة».',
      columns: ['المعنى', 'الكيفية'],
      rows: [
        { label: 'حكمه', cells: ['معلوم', 'مجهول'] },
        { label: 'موقف أهل السنة', cells: ['يثبتونه ويفهمونه', 'يفوضونه إلى الله'] },
        { label: 'المفوضة', cells: ['يفوضونه (خطأ)', 'يفوضونه'] }
      ],
      page: 70
    }
  ],
  sections: [
    { title: 'الإلحاد وأنواعه وحكمه', text: 'الإلحاد في الأسماء والصفات الميل بها عما يجب اعتقاده فيها، والاستقامة إجراؤها على حقيقتها اللائقة بالله. وهو محرم بجميع أنواعه [الأعراف: ١٨٠].', more: 'قال نعيم بن حماد الخزاعي: «من شبه الله بخلقه فقد كفر، ومن جحد ما وصف الله به نفسه فقد كفر، وليس فيما وصف الله به نفسه تشبيه».', page: 53 },
    { title: 'إحصاء الأسماء ودعاء الله بها', text: 'إحصاء الأسماء: عدها وحفظها وفهم معانيها والإيمان بها ودعاء الله بها والعمل بمقتضاها.', more: 'والدعاء بها نوعان: دعاء ثناء وعبادة، ودعاء طلب ومسألة بما يناسب الاسم، كيا رحمن ارحمني، ولا ينبغي: يا قوي اغفر لي. هذا المقطع في الكتاب للاطلاع فقط.', page: 56 },
    { title: 'قواعد في الأسماء', text: 'أسماء الله توقيفية لا مجال للاجتهاد فيها، وكلها حسنى، ولا تحد بعدد معين؛ فلله أسماء استأثر بها في علم الغيب.', more: 'وباب الصفات أوسع: تؤخذ الصفة من الاسم والفعل، ولا يؤخذ الاسم من الصفة؛ فلا يقال من أسمائه: الجائي، النازل، الممسك (ص ٥٨).', page: 57 },
    { title: 'القول في الصفات كالقول في الذات', text: 'لله ذات حقيقية لا تماثل الذوات، فكذلك صفاته حقيقية لا تماثل صفات المخلوقين.', more: 'فإن قال: كيف أثبت صفة لا أعلم كيفيتها؟ قيل: كما تثبت ذاتا لا تعلم كيفيتها. ومن أثبت بعض الصفات وجعل غيرها مجازا وقع في التناقض.', page: 60 },
    { title: 'أمثلة تطبيقية', text: 'من الأسماء: الحي والقيوم، والحميد، والرحمن والرحيم، والحليم. ومن الصفات: القدرة، والعلم، والإرادة، والعلو، والاستواء، والكلام، والوجه، واليدان، والعينان، والقدم.', more: 'والواجب إثباتها كما يليق بجلاله، والحذر من التعطيل أو التشبيه [الشورى: ١١].', page: 62 },
    { title: 'أقسام الصفات', text: 'باعتبار الثبوت: ثبوتية وسلبية. وباعتبار الدليل: خبرية وسمعية عقلية. وباعتبار التعلق: ذاتية وفعلية وذاتية فعلية.', more: 'وضابط الفعلية تقييدها بالمشيئة: يرحم إذا شاء، ويغضب إذا شاء؛ بخلاف الذاتية فلا يقال: يقدر إذا شاء.', page: 67 },
    { title: 'القاعدة في الكيفيات', text: 'نثبت ما أثبته الله مع فهم معناه دون تكييفه، فالتفويض في الكيفية فقط.', more: 'ومن نسب إلى السلف تفويض المعاني فقد كذب عليهم؛ فقد أمر الله بتدبر القرآن كله [محمد: ٢٤؛ النساء: ٨٢؛ ص: ٢٩] ولم يستثن آيات الصفات.', page: 70 },
    { title: 'الجهة والحيز', text: 'لفظان لم يرد في الكتاب والسنة نفيهما ولا إثباتهما، ففي النصوص ما يغني كالعلو والفوقية؛ فلا نثبت اللفظ ولا ننفيه، ونستفصل في المعنى.', more: 'قال أئمة أهل السنة: هو فوق سماواته على عرشه بائن من خلقه. والقاعدة تطبق على كل لفظ لم يرد، كالجسم.', page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الإلحاد في الأسماء والصفات', items: ['الميل بها عما يجب اعتقاده فيها.'], page: 53, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع الإلحاد', items: ['إنكار شيء منها', 'تسمية الله بما لم يسم به نفسه', 'اعتقاد دلالتها على التمثيل', 'اشتقاق أسماء الأصنام منها'], page: 53, origin: 'boek' },
    { kind: 'onderscheid', title: 'الأسماء والصفات', items: ['تؤخذ الصفة من الاسم والفعل.', 'لا يؤخذ الاسم من الصفة.'], page: 58, origin: 'boek' },
    { kind: 'onderscheid', title: 'الصفة الذاتية والفعلية', items: ['الذاتية: لازمة لا تتعلق بالمشيئة (العلم، القدرة).', 'الفعلية: تتعلق بالمشيئة (الاستواء، النزول).'], page: 68, origin: 'boek' },
    { kind: 'bewijs', title: 'قول الإمام مالك', items: ['الاستواء معلوم، والكيف مجهول، والإيمان به واجب، والسؤال عنه بدعة.'], page: 70, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الإلحاد: الميل بالأسماء والصفات عما يجب اعتقاده فيها؛ محرم بجميع أنواعه.',
    'أنواعه: الإنكار، التسمية بما لم يرد، التمثيل، الاشتقاق للأصنام.',
    'الأسماء توقيفية، كلها حسنى، لا تحد بعدد.',
    'باب الصفات أوسع من باب الأسماء.',
    'القول في الصفات كالقول في الذات.',
    'الصفات: ذاتية وفعلية وذاتية فعلية؛ خبرية وسمعية عقلية؛ ثبوتية وسلبية.',
    'المعنى معلوم والكيف مجهول.',
    'الجهة والحيز: لا نثبت اللفظ ولا ننفيه، ونستفصل في المعنى.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'تسمية الله «العلة الفاعلة» من أي أنواع الإلحاد؟', options: ['إنكار شيء من الأسماء', 'تسمية الله بما لم يسم به نفسه', 'اعتقاد التمثيل', 'اشتقاق أسماء الأصنام'], answer: 1, explain: 'الأسماء توقيفية.', page: 53 },
    { type: 'mc', q: 'من أين اشتق المشركون اسم «العزى»؟', options: ['من الإله', 'من العزيز', 'من المنان', 'من العظيم'], answer: 1, explain: 'كما في الكتاب ص ٥٤.', page: 54 },
    { type: 'tf', q: 'يجوز أن يسمى الله «النازل» لأنه ينزل إلى السماء الدنيا.', options: ['صواب', 'خطأ'], answer: 1, explain: 'باب الصفات أوسع؛ لا يؤخذ الاسم من الصفة.', page: 58 },
    { type: 'mc', q: 'ما دليل أن الأسماء الحسنى لا تحد بعدد معين؟', options: ['حديث «إن لله تسعة وتسعين اسما»', 'دعاء الهم والحزن «أو استأثرت به في علم الغيب عندك»', 'آية الأعراف ١٨٠', 'حديث الاستخارة'], answer: 1, explain: 'أخرجه أحمد، وصححه الألباني.', page: 59 },
    { type: 'mc', q: 'ما نوع صفة الكلام؟', options: ['ذاتية فقط', 'فعلية فقط', 'ذاتية باعتبار النوع، فعلية باعتبار أفراد الكلام', 'خبرية فقط'], answer: 2, explain: 'لم يزل متكلما، وآحاد الكلام تتعلق بمشيئته.', page: 65 },
    { type: 'mc', q: 'ما ضابط الصفة الفعلية؟', options: ['أنها ثابتة بالعقل', 'تقييدها بالمشيئة', 'أنها سلبية', 'أنها لا تثبت إلا بالقرآن'], answer: 1, explain: 'يرحم إذا شاء، ويغضب إذا شاء.', page: 68 },
    { type: 'mc', q: 'في أي شيء يكون التفويض عند أهل السنة؟', options: ['في المعنى والكيفية', 'في الكيفية فقط', 'في المعنى فقط', 'لا تفويض أصلا'], answer: 1, explain: 'المعنى معلوم والكيف مجهول.', page: 70 },
    { type: 'tf', q: 'إذا أريد بالجهة ما فوق العالم فهو معنى حق.', options: ['صواب', 'خطأ'], answer: 0, explain: 'دل عليه الكتاب والسنة والإجماع والعقل والفطرة.', page: 72 }
  ]),
  note: 'نشاطا الكتاب في صفحتي ٦١ و٧١. المقطع في ص ٥٦ عن إحصاء الأسماء للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Afwijking (ilḥād) bij Allahs namen en eigenschappen',
  subtitle: 'Acht lessen samen op één pagina',
  summary: 'Wat ilḥād bij de namen en eigenschappen is, de soorten en het oordeel, de regels van ahl as-sunna, voorbeelden, de indelingen van de eigenschappen, de regel bij het hoe, en woorden die niet bevestigd of ontkend zijn.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen van de eenheid, zoals op p. 52 van het boek.',
    root: { label: 'Ilḥād bij de namen en eigenschappen', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Ilḥād', sub: 'les 11', page: 53, children: ['betekenis', 'vier soorten', 'oordeel'] },
      { label: 'Regels van ahl as-sunna', sub: 'les 12–13', page: 57, children: ['namen alleen uit de teksten, allemaal schoon', 'eigenschappen zijn ruimer', 'eigenschappen zoals het wezen'] },
      { label: 'Voorbeelden', sub: 'les 14–15', page: 62, children: ['namen', 'eigenschappen'] },
      { label: 'Indelingen', sub: 'les 16', page: 67, children: ['bevestigend en ontkennend', 'overgeleverd en ook met verstand', 'van het wezen en van handelen'] },
      { label: 'Het hoe en wat niet genoemd is', sub: 'les 17–18', page: 70, children: ['betekenis bekend, hoe onbekend', 'richting, ruimte, lichaam'] }
    ]
  },
  points: [
    { text: 'Ilḥād bij de namen en eigenschappen: ervan afwijken wat men erover moet geloven; alle soorten zijn verboden.', page: 53 },
    { text: 'Vier soorten: iets ervan ontkennen, Allah noemen met wat Hij Zichzelf niet noemde, geloven dat ze gelijkenis inhouden, en afgodennamen ervan afleiden.', page: 53 },
    { text: 'Allahs namen komen alleen uit de teksten (tawqīf), zijn allemaal schoon en niet beperkt tot een aantal; eigenschappen zijn een ruimer gebied dan namen.', page: 57 },
    { text: 'Geloven in een naam is de naam, de eigenschap erin en de gevolgen ervan bevestigen.', page: 59 },
    { text: 'Over de eigenschappen spreekt men zoals over het wezen, en over sommige eigenschappen zoals over de andere.', page: 60 },
    { text: 'Indelingen: bevestigend en ontkennend; alleen overgeleverd of ook met verstand; van het wezen, van handelen, of beide.', page: 67 },
    { text: 'De betekenis is bekend, het hoe is onbekend; alleen het hoe wordt aan Allah overgelaten.', page: 70 },
    { text: 'Woorden als "richting" en "ruimte" worden niet bevestigd of ontkend; men vraagt naar de bedoeling.', page: 72 }
  ],
  terms: [
    { term: 'الإلحاد', translit: 'al-ilḥād', meaning: 'Taalkundig: afwijken. Bij de namen en eigenschappen: ervan afwijken wat men erover moet geloven.', explanation: '', notes: ['an-Naḥl 16:103'], page: 53 },
    { term: 'الأسماء التوقيفية', translit: 'at-tawqīf', meaning: 'De namen van Allah komen alleen uit Koran en authentieke Sunna; er wordt niets aan toegevoegd of afgedaan.', explanation: 'Allah heet dus niet "de Kenner (al-ʿĀrif)", "de Verstandige", "de Komende".', notes: ['al-Isrāʾ 17:36'], page: 57 },
    { term: 'الحسنى', translit: 'al-ḥusnā', meaning: 'De schoonste: het hoogste in schoonheid.', explanation: 'Omdat ze de schoonste en edelste betekenissen bevatten.', notes: ['al-Aʿrāf 7:180'], page: 57 },
    { term: 'إحصاء الأسماء', translit: 'iḥṣāʾ al-asmāʾ', meaning: 'De namen "tellen": ze opsommen, onthouden, begrijpen, erin geloven, Allah ermee aanroepen en ernaar handelen.', explanation: 'In het boek ter kennisname.', notes: [], page: 56 },
    { term: 'الحكم والمقتضى', translit: 'al-ḥukm wa-l-muqtaḍā', meaning: 'De gevolgen van een naam: al-Samīʿ hoort het geheime gesprek (ḥukm), dus moet men Hem vrezen en Zijn toezicht beseffen (muqtaḍā).', explanation: '', notes: [], page: 59 },
    { term: 'الصفة الذاتية', translit: 'aṣ-ṣifa adh-dhātiyya', meaning: 'Eigenschap van het wezen: Allah heeft haar altijd, zoals kennis, vermogen, aangezicht en handen.', explanation: 'Ook "blijvende eigenschappen" genoemd.', notes: [], page: 68 },
    { term: 'الصفة الفعلية', translit: 'aṣ-ṣifa al-fiʿliyya', meaning: 'Eigenschap van handelen: hangt af van Allahs wil, zoals istiwāʾ, afdalen en toorn.', explanation: 'Ook "eigenschappen naar keuze" genoemd.', notes: [], page: 64 },
    { term: 'الصفة الخبرية', translit: 'aṣ-ṣifa al-khabariyya', meaning: 'Overgeleverde eigenschap: alleen te bevestigen via het bericht van Allah of Zijn Boodschapper, zoals aangezicht, handen en afdalen.', explanation: '', notes: [], page: 68 },
    { term: 'الصفات الثبوتية والسلبية', translit: 'ath-thubūtiyya wa-s-salbiyya', meaning: 'Bevestigende eigenschappen (volmaaktheid) en ontkende eigenschappen (gebreken die Allah van Zichzelf ontkent).', explanation: '', notes: ['al-Kahf 18:49'], page: 67 },
    { term: 'الاستواء', translit: 'al-istiwāʾ', meaning: 'In het Arabisch: hoogte, verheffing, vestiging en opstijgen.', explanation: 'Een istiwāʾ die Allah past, zonder gelijkenis met schepsels.', notes: ['Ṭā-Hā 20:5'], page: 64 },
    { term: 'المفوضة', translit: 'al-mufawwiḍa', meaning: 'Wie zowel de betekenis als het hoe aan Allah overlaat.', explanation: 'Volgens het boek is juist: alleen het hoe overlaten.', notes: [], page: 71 },
    { term: 'الجهة', translit: 'al-jiha', meaning: 'Richting: een woord dat Koran en Sunna niet bevestigen of ontkennen.', explanation: 'Als een geschapen ding bedoeld wordt dat Allah omvat: onjuist; als bedoeld wordt wat boven de schepping is: juist.', notes: [], page: 72 },
    { term: 'الحيز', translit: 'al-ḥayyiz', meaning: 'Ruimte: een woord dat Koran en Sunna niet bevestigen of ontkennen.', explanation: 'Als bedoeld wordt dat schepsels Allah omvatten: onjuist; als bedoeld wordt dat Hij gescheiden is van Zijn schepping: juist.', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'Soorten ilḥād bij de namen en eigenschappen',
      intro: 'Zoals het schema op p. 55.',
      nodes: [
        { label: 'Een naam of eigenschap ontkennen', sub: 'zoals de naam ar-Raḥmān ontkennen, of: barmhartig zonder barmhartigheid', page: 53 },
        { label: 'Allah noemen met wat Hij Zichzelf niet noemde', sub: 'zoals "de werkende oorzaak" bij filosofen of "Vader" bij christenen', page: 53 },
        { label: 'Geloven dat de namen gelijkenis inhouden', sub: 'in strijd met ash-Shūrā 42:11 en Maryam 19:65', page: 54 },
        { label: 'Afgodennamen ervan afleiden', sub: 'al-Lāt van al-Ilāh, al-ʿUzzā van al-ʿAzīz, Manāt van al-Mannān', page: 54 }
      ]
    },
    {
      type: 'steps',
      title: 'Regels van ahl as-sunna bij de namen en eigenschappen',
      intro: 'Zeven regels uit het boek.',
      nodes: [
        { label: 'De namen komen alleen uit de teksten', page: 57 },
        { label: 'Alle namen zijn schoon (ḥusnā)', page: 57 },
        { label: 'Eigenschappen zijn een ruimer gebied dan namen', page: 58 },
        { label: 'De namen zijn niet tot een aantal beperkt', page: 59 },
        { label: 'Geloven in een naam: naam, eigenschap en gevolgen', page: 59 },
        { label: 'Over de eigenschappen zoals over het wezen', page: 60 },
        { label: 'Over sommige eigenschappen zoals over de andere', page: 60 }
      ]
    },
    {
      type: 'tree',
      title: 'Geloven in de naam as-Samīʿ',
      intro: 'Het voorbeeld van het boek bij regel 5.',
      root: { label: 'as-Samīʿ (de Horende)', page: 59 },
      nodes: [
        { label: 'De naam bevestigen' },
        { label: 'De eigenschap horen bevestigen' },
        { label: 'De gevolgen', children: ['ḥukm: Hij hoort het geheime gesprek', 'muqtaḍā: Hem vrezen, Zijn toezicht beseffen, je voor Hem schamen'] }
      ]
    },
    {
      type: 'compare',
      title: 'Voorbeelden van eigenschappen',
      intro: 'Soort en bewijs van elke eigenschap in het boek.',
      columns: ['Soort', 'Koran', 'Sunna'],
      rows: [
        { label: 'Vermogen', cells: ['van het wezen', 'al-Baqara 2:20', 'hadith van ʿUthmān ibn Abī al-ʿĀṣ'] },
        { label: 'Kennis', cells: ['van het wezen', 'al-Baqara 2:255', 'de istikhāra-smeekbede'] },
        { label: 'Willen', cells: ['van handelen', 'al-Anʿām 6:125', 'hadith van Ibn ʿUmar'] },
        { label: 'Hoogheid', cells: ['van het wezen', 'al-Aʿlā 87:1; an-Naḥl 16:50', '"U bent de Hoogste, er is niets boven U"'] },
        { label: 'Istiwāʾ', cells: ['van handelen', 'Ṭā-Hā 20:5', 'hadith van Qatāda ibn an-Nuʿmān'] },
        { label: 'Spreken', cells: ['van het wezen en van handelen', 'an-Nisāʾ 4:164', 'twistgesprek van Ādam en Mūsā'] },
        { label: 'Aangezicht', cells: ['van het wezen, overgeleverd', 'ar-Raḥmān 55:27', '"ik zoek bescherming bij Uw aangezicht"'] },
        { label: 'Handen', cells: ['van het wezen, overgeleverd', 'Ṣād 38:75', 'hadith van Abū Mūsā'] },
        { label: 'Ogen', cells: ['van het wezen, overgeleverd', 'Ṭā-Hā 20:39', 'hadith van Ibn ʿUmar over de Dajjāl'] },
        { label: 'Voet', cells: ['van het wezen, overgeleverd', '—', 'twistgesprek van Paradijs en Vuur'] }
      ],
      page: 63
    },
    {
      type: 'tree',
      title: 'Indelingen van Allahs eigenschappen',
      intro: 'Zoals het schema op p. 69.',
      root: { label: 'Allahs eigenschappen', page: 67 },
      nodes: [
        { label: 'Naar bevestigen of ontkennen', children: ['bevestigend: leven, kennis, aangezicht', 'ontkennend: geen dood, slaap of onrecht'], page: 67 },
        { label: 'Naar het bewijs', children: ['alleen overgeleverd: aangezicht, handen, istiwāʾ', 'overgeleverd en met verstand: leven, kennis, scheppen'], page: 68 },
        { label: 'Naar wezen of handelen', children: ['van het wezen: kennis, vermogen', 'van handelen: istiwāʾ, afdalen', 'beide: spreken'], page: 68 }
      ]
    },
    {
      type: 'compare',
      title: 'Betekenis en hoe',
      intro: 'Imam Mālik: "de istiwāʾ is bekend, het hoe is onbekend, erin geloven is verplicht en ernaar vragen is een vernieuwing."',
      columns: ['Betekenis', 'Hoe'],
      rows: [
        { label: 'Status', cells: ['bekend', 'onbekend'] },
        { label: 'Ahl as-sunna', cells: ['bevestigen en begrijpen', 'laten het aan Allah over'] },
        { label: 'De mufawwiḍa', cells: ['laten het over (fout)', 'laten het over'] }
      ],
      page: 70
    }
  ],
  sections: [
    { title: 'Ilḥād: soorten en oordeel', text: 'Ilḥād bij de namen en eigenschappen is ervan afwijken wat men erover moet geloven; rechtschapenheid is ze nemen in hun werkelijke betekenis die Allah past. Alle soorten zijn verboden (al-Aʿrāf 7:180).', more: 'Nuʿaym ibn Ḥammād al-Khuzāʿī: "wie Allah met Zijn schepping vergelijkt, is ongelovig geworden; wie ontkent waarmee Allah Zichzelf beschreef, ook; en in waarmee Allah Zichzelf beschreef, zit geen vergelijking."', page: 53 },
    { title: 'De namen tellen en Allah ermee aanroepen', text: 'De namen "tellen" is ze opsommen, onthouden, begrijpen, erin geloven, Allah ermee aanroepen en ernaar handelen.', more: 'Aanroepen gebeurt op twee manieren: met lof en aanbidding, en met een verzoek dat bij de naam past, zoals "o Erbarmer, wees mij barmhartig"; niet "o Sterke, vergeef mij". Dit deel staat in het boek ter kennisname.', page: 56 },
    { title: 'Regels bij de namen', text: 'Allahs namen komen alleen uit de teksten, zijn allemaal schoon en niet beperkt tot een aantal: Allah heeft namen die Hij in de kennis van het verborgene bij Zich hield.', more: 'Eigenschappen zijn ruimer: ze volgen uit namen en uit daden, maar namen volgen niet uit eigenschappen. Allah heet dus niet "de Komende", "de Afdalende" of "de Vasthoudende" (p. 58).', page: 57 },
    { title: 'Eigenschappen zoals het wezen', text: 'Allah heeft een werkelijk wezen dat niet op andere wezens lijkt; zo zijn ook Zijn eigenschappen werkelijk en niet gelijk aan die van schepsels.', more: 'Als iemand zegt: hoe kan ik een eigenschap bevestigen waarvan ik het hoe niet ken? Dan zegt men: zoals je een wezen bevestigt waarvan je het hoe niet kent. Wie sommige eigenschappen bevestigt en andere als beeldspraak ziet, spreekt zichzelf tegen.', page: 60 },
    { title: 'Voorbeelden', text: 'Namen: al-Ḥayy en al-Qayyūm, al-Ḥamīd, ar-Raḥmān en ar-Raḥīm, al-Ḥalīm. Eigenschappen: vermogen, kennis, willen, hoogheid, istiwāʾ, spreken, aangezicht, handen, ogen en voet.', more: 'Ze moeten bevestigd worden zoals het Allah past, zonder taʿṭīl of tashbīh (ash-Shūrā 42:11).', page: 62 },
    { title: 'Indelingen van de eigenschappen', text: 'Naar bevestigen: bevestigend en ontkennend. Naar het bewijs: alleen overgeleverd, of ook met verstand. Naar wezen of handelen: van het wezen, van handelen, of beide.', more: 'Een eigenschap van handelen herken je aan de wil: Hij is barmhartig als Hij wil, Hij is toornig als Hij wil; bij een eigenschap van het wezen zeg je niet: Hij heeft vermogen als Hij wil.', page: 67 },
    { title: 'De regel bij het hoe', text: 'Bevestigen wat Allah bevestigt en de betekenis begrijpen, zonder het hoe te beschrijven; alleen het hoe wordt aan Allah overgelaten.', more: 'Wie zegt dat de salaf de betekenis overlieten, liegt over hen volgens het boek: Allah beval de hele Koran te overdenken (Muḥammad 47:24; an-Nisāʾ 4:82; Ṣād 38:29) en zonderde de verzen over de eigenschappen niet uit.', page: 70 },
    { title: 'Richting en ruimte', text: 'Twee woorden die Koran en Sunna niet bevestigen of ontkennen; de teksten zeggen genoeg met hoogheid en boven-zijn. Het woord bevestigen of ontkennen we niet; naar de bedoeling vragen we.', more: 'De imams van ahl as-sunna zeiden: Hij is boven Zijn hemelen, op Zijn Troon, gescheiden van Zijn schepping. Dezelfde regel geldt voor elk niet genoemd woord, zoals "lichaam".', page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Ilḥād bij de namen en eigenschappen', items: ['Ervan afwijken wat men erover moet geloven.'], page: 53, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten ilḥād', items: ['iets ervan ontkennen', 'Allah noemen met wat Hij Zichzelf niet noemde', 'geloven dat ze gelijkenis inhouden', 'afgodennamen ervan afleiden'], page: 53, origin: 'boek' },
    { kind: 'onderscheid', title: 'Namen en eigenschappen', items: ['Een eigenschap volgt uit een naam of daad.', 'Een naam volgt niet uit een eigenschap.'], page: 58, origin: 'boek' },
    { kind: 'onderscheid', title: 'Eigenschap van het wezen of van handelen', items: ['Van het wezen: blijvend, niet afhankelijk van de wil (kennis, vermogen).', 'Van handelen: afhankelijk van de wil (istiwāʾ, afdalen).'], page: 68, origin: 'boek' },
    { kind: 'bewijs', title: 'De woorden van imam Mālik', items: ['De istiwāʾ is bekend, het hoe is onbekend, erin geloven is verplicht en ernaar vragen is een vernieuwing.'], page: 70, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Ilḥād: afwijken van wat men over de namen en eigenschappen moet geloven; alle soorten zijn verboden.',
    'Soorten: ontkennen, onbekende namen geven, gelijkenis, afgodennamen afleiden.',
    'De namen komen uit de teksten, zijn allemaal schoon en niet tot een aantal beperkt.',
    'Eigenschappen zijn ruimer dan namen.',
    'Over de eigenschappen spreek je zoals over het wezen.',
    'Indelingen: wezen, handelen of beide; overgeleverd of ook met verstand; bevestigend of ontkennend.',
    'Betekenis bekend, hoe onbekend.',
    'Richting en ruimte: het woord niet bevestigen of ontkennen, naar de bedoeling vragen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Allah "de werkende oorzaak" noemen is welke soort ilḥād?', options: ['een naam ontkennen', 'Allah noemen met wat Hij Zichzelf niet noemde', 'gelijkenis', 'afgodennamen afleiden'], answer: 1, explain: 'De namen komen alleen uit de teksten.', page: 53 },
    { type: 'mc', q: 'Waarvan leidden de polytheïsten de naam al-ʿUzzā af?', options: ['al-Ilāh', 'al-ʿAzīz', 'al-Mannān', 'al-ʿAẓīm'], answer: 1, explain: 'Zo staat het op p. 54.', page: 54 },
    { type: 'tf', q: 'Allah mag "an-Nāzil" (de Afdalende) genoemd worden, omdat Hij afdaalt naar de laagste hemel.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Eigenschappen zijn ruimer; een naam volgt niet uit een eigenschap.', page: 58 },
    { type: 'mc', q: 'Wat bewijst dat Allahs namen niet tot een vast aantal beperkt zijn?', options: ['"Allah heeft negenennegentig namen"', 'de smeekbede bij zorg en verdriet: "of die U in de kennis van het verborgene bij Uzelf hield"', 'al-Aʿrāf 7:180', 'de istikhāra-smeekbede'], answer: 1, explain: 'Aḥmad; authentiek volgens al-Albānī.', page: 59 },
    { type: 'mc', q: 'Wat voor eigenschap is spreken (kalām)?', options: ['alleen van het wezen', 'alleen van handelen', 'van het wezen naar de soort, van handelen naar de afzonderlijke woorden', 'alleen overgeleverd'], answer: 2, explain: 'Hij spreekt altijd al, en elk afzonderlijk spreken hangt af van Zijn wil.', page: 65 },
    { type: 'mc', q: 'Waaraan herken je een eigenschap van handelen?', options: ['ze is met het verstand bewezen', 'ze hangt af van Allahs wil', 'ze is ontkennend', 'ze staat alleen in de Koran'], answer: 1, explain: 'Hij is barmhartig als Hij wil, toornig als Hij wil.', page: 68 },
    { type: 'mc', q: 'Wat laten ahl as-sunna aan Allah over?', options: ['betekenis en hoe', 'alleen het hoe', 'alleen de betekenis', 'niets'], answer: 1, explain: 'De betekenis is bekend, het hoe onbekend.', page: 70 },
    { type: 'tf', q: 'Als met "richting" bedoeld wordt wat boven de schepping is, is dat een juiste betekenis.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Koran, Sunna, consensus, verstand en fiṭra wijzen erop.', page: 72 }
  ]),
  note: 'Oefeningen van het boek op p. 61 en 71. Het deel over het tellen van de namen (p. 56) staat in het boek als "alleen ter kennisname". De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-aqeedah', chapter: '11', unit: 4, ar, nl }
