// Studiekaart per hoofdstuk (eenheid) bij العقيدة (١), eenheid 1: مقدمات في العقيدة الصحيحة
// (lessen 1–6, boek p. 10–31). Opgesteld uit de boekpagina's zelf (Zad Academy, archive.org).
// Alles bundelt de zes lessen; bij elk onderdeel staat de pagina, en daaruit volgt de les
// (zie lib/render-study.js). Hadith en takhrij staan zoals in het boek; de Nederlandse tekst
// geeft de betekenis weer en is geen vertaling van Koran of hadith.
const source = {
  label: 'كتاب العقيدة (١)، سلسلة زاد العلمية',
  pages: '10–31',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlAqeedah/page/n{p}/mode/1up'
}

// Hadith zoals ze in het boek staan (tekst en takhrij uit het boek zelf).
const HADITH = [
  { narrator: 'عمر بن الخطاب', text: 'أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر وتؤمن بالقدر خيره وشره', takhrij: 'أخرجه مسلم', pages: [12], nl: 'dat je gelooft in Allah, Zijn engelen, Zijn boeken, Zijn boodschappers en de Laatste Dag, en dat je gelooft in de voorbeschikking, het goede en het slechte ervan', nlNote: 'Antwoord van de Profeet ﷺ op de vraag van Jibrīl naar het geloof.' },
  { narrator: 'أبو هريرة', text: 'كل مولود يولد على الفطرة، فأبواه يهودانه أو ينصرانه أو يمجسانه، كمثل البهيمة تنتج البهيمة، هل ترى فيها جدعاء؟!', takhrij: 'أخرجه البخاري ومسلم', note: 'ثم قرأ أبو هريرة: ﴿فطرت الله التي فطر الناس عليها﴾ [الروم: ٣٠]. الجمعاء: مكتملة الأعضاء، والجدعاء: مقطوعة الأطراف.', pages: [17], nl: 'ieder kind wordt geboren op de fiṭra; dan maken zijn ouders er een jood, christen of magiër van, zoals een dier een gaaf jong werpt: zie je daar een verminkt dier bij?', nlNote: 'Daarna reciteerde Abū Hurayra ar-Rūm 30:30.' },
  { narrator: 'أبو هريرة', text: 'ما من مولود يولد إلا وهو على الملة / ما من مولود يولد إلا على هذه الملة، حتى يبين عنه لسانه', takhrij: 'أخرجه مسلم بلفظين', note: 'فيهما التصريح بأن الفطرة هي ملة الإسلام.', pages: [17], nl: 'geen kind wordt geboren of het is op de milla / op deze milla, totdat zijn tong voor hem spreekt', nlNote: 'Twee bewoordingen bij Muslim: hieruit blijkt dat de fiṭra de milla van de islam is.' },
  { narrator: 'عياض بن حمار المجاشعي', text: 'وإني خلقت عبادي حنفاء كلهم، وإنهم أتتهم الشياطين فاجتالتهم عن دينهم، وحرمت عليهم ما أحللت لهم، وأمرتهم أن يشركوا بي ما لم أنزل به سلطانا', takhrij: 'أخرجه مسلم', note: 'حنفاء: جمع حنيف، وهو المائل عن الأديان كلها إلى فطرة الإسلام.', pages: [17], nl: 'Ik heb Mijn dienaren allen als ḥunafāʾ geschapen; toen kwamen de duivels en brachten hen af van hun godsdienst ...', nlNote: 'Uit een preek van de Profeet ﷺ. Ḥunafāʾ (enkelvoud ḥanīf): wie zich van alle andere godsdiensten afwendt naar de fiṭra van de islam.' },
  { narrator: 'أبو رافع', text: 'لا أعرفن الرجل يأتيه الأمر من أمري، إما أمرت به أو نهيت عنه، فيقول: ما ندري ما هذا؟! عندنا كتاب الله ليس هذا فيه', takhrij: 'أخرجه الأربعة إلا النسائي، وصححه ابن حبان', pages: [20], nl: 'ik wil niet aantreffen dat iemand een gebod of verbod van mij bereikt en dat hij zegt: wij weten niet wat dit is, wij hebben het Boek van Allah en dit staat er niet in', nlNote: 'Bewijs dat de Sunna gezag heeft.' },
  { narrator: 'المقدام بن معدي كرب الكندي', text: 'ألا إني أوتيت الكتاب ومثله معه، ألا إني أوتيت القرآن ومثله معه', takhrij: 'أخرجه أحمد، وصححه الأرناؤوط', note: '(ومثله معه) يعني: السنة.', pages: [21], nl: 'Mij is het Boek gegeven en iets dergelijks erbij; mij is de Koran gegeven en iets dergelijks erbij', nlNote: '"Iets dergelijks erbij" betekent volgens het boek: de Sunna.' },
  { narrator: 'العرباض بن سارية', text: 'فإنه من يعش منكم ير اختلافا كثيرا، وإياكم ومحدثات الأمور فإنها ضلالة، فمن أدرك ذلك منكم فعليه بسنتي وسنة الخلفاء الراشدين المهديين، عضوا عليها بالنواجذ', takhrij: 'أخرجه أحمد والترمذي، وصححه', note: 'ذكره الكتاب ثلاث مرات: دليلًا على حجية السنة، ثم على حجية الإجماع، ثم على وجوب فهم النصوص على فهم الصحابة.', pages: [21, 23, 28], nl: 'wie van jullie blijft leven, zal veel onenigheid zien; pas op voor nieuwe zaken, want die zijn dwaling; wie dat meemaakt, houd vast aan mijn sunna en de sunna van de rechtgeleide kaliefen, bijt je er met je kiezen in vast', nlNote: 'Het boek gebruikt deze hadith drie keer: voor het gezag van de Sunna, van de consensus en van het begrip van de metgezellen.' },
  { narrator: 'معاوية بن أبي سفيان', text: 'إن أهل الكتابين افترقوا في دينهم على ثنتين وسبعين ملة، وإن هذه الأمة ستفترق على ثلاث وسبعين ملة -يعني الأهواء- كلها في النار إلا واحدة، وهي الجماعة', takhrij: 'أخرجه أحمد والترمذي، وحسنه الألباني', note: 'دليل تسمية أهل السنة: الفرقة الناجية.', pages: [22], nl: 'de mensen van de twee Schriften raakten verdeeld in tweeënzeventig groepen, en deze umma zal verdeeld raken in drieënzeventig, allen in het Vuur behalve één: de jamāʿa', nlNote: 'Bewijs voor de naam "de geredde groep".' },
  { narrator: '', text: 'ولن تزال طائفة من أمتي منصورين لا يضرهم من خذلهم حتى تقوم الساعة', takhrij: 'أخرجه أحمد والترمذي، وصححه', note: 'دليل تسمية أهل السنة: الطائفة المنصورة.', pages: [22], nl: 'er zal altijd een groep van mijn umma geholpen blijven; wie hen in de steek laat, kan hun niet schaden, tot het Uur aanbreekt', nlNote: 'Bewijs voor de naam "de geholpen groep". Het boek noemt hier geen overleveraar.' },
  { narrator: 'عبد الله بن عمر', text: 'إن الله لا يجمع أمتي -أو قال: أمة محمد ﷺ- على ضلالة، ويد الله مع الجماعة', takhrij: 'أخرجه الترمذي، وصححه الألباني', note: 'دليل على حجية الإجماع.', pages: [23], nl: 'Allah laat mijn umma niet samenkomen op dwaling, en de hand van Allah is met de jamāʿa', nlNote: 'Bewijs voor het gezag van de consensus.' },
  { narrator: 'عبد الله بن عمرو بن العاص', text: 'مهلا يا قوم، بهذا أهلكت الأمم من قبلكم، باختلافهم على أنبيائهم، وضربهم الكتب بعضها ببعض، إن القرآن لم ينزل يكذب بعضه بعضا، بل يصدق بعضه بعضا، فما عرفتم منه فاعملوا به، وما جهلتم منه فردوه إلى عالمه', takhrij: 'أخرجه أحمد، وصححه الأرناؤوط', note: 'تحذير من ضرب النصوص بعضها ببعض (الأصل الثاني).', pages: [26], nl: 'rustig, mijn volk! hierdoor zijn de volken vóór jullie vernietigd: hun onenigheid over hun profeten en het tegen elkaar uitspelen van de Schriften; de Koran bevestigt zichzelf, dus doe wat je ervan weet en laat wat je niet weet over aan wie het weet', nlNote: 'Waarschuwing tegen het tegen elkaar uitspelen van teksten (grondregel 2).' },
  { narrator: 'زيد بن أرقم', text: 'أما بعد، ألا أيها الناس، فإنما أنا بشر يوشك أن يأتي رسول ربي فأجيب، وأنا تارك فيكم ثقلين: أولهما كتاب الله، فيه الهدى والنور، فخذوا بكتاب الله واستمسكوا به', takhrij: 'أخرجه مسلم', note: 'دليل على الاعتصام بالكتاب والسنة (الأصل الثالث).', pages: [27], nl: 'ik ben maar een mens; binnenkort komt de bode van mijn Heer en zal ik gehoor geven. Ik laat twee zware dingen bij jullie achter: het eerste is het Boek van Allah, met leiding en licht, dus neem het Boek van Allah en houd je eraan vast', nlNote: 'Bewijs voor vasthouden aan Koran en Sunna (grondregel 3).' },
  { narrator: 'عمران بن حصين', text: 'خيركم قرني، ثم الذين يلونهم، ثم الذين يلونهم', takhrij: 'أخرجه البخاري ومسلم', note: 'دليل على أن بدعة «إعادة فهم النص» لم تكن معروفة في القرون الثلاثة المفضلة.', pages: [29], nl: 'de besten van jullie zijn mijn generatie, dan wie hen volgen, dan wie hen volgen', nlNote: 'Bewijs dat de "herinterpretatie van de tekst" in de drie geprezen generaties onbekend was.' }
]

const TAKHRIJ_NL = {
  'أخرجه مسلم': 'Muslim',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه مسلم بلفظين': 'Muslim, in twee bewoordingen',
  'أخرجه الأربعة إلا النسائي، وصححه ابن حبان': 'Abū Dāwūd, at-Tirmidhī en Ibn Māja (de vier Sunan behalve an-Nasāʾī); authentiek volgens Ibn Ḥibbān',
  'أخرجه أحمد، وصححه الأرناؤوط': 'Aḥmad; authentiek volgens al-Arnaʾūṭ',
  'أخرجه أحمد والترمذي، وصححه': 'Aḥmad en at-Tirmidhī, die hem authentiek noemde',
  'أخرجه أحمد والترمذي، وحسنه الألباني': 'Aḥmad en at-Tirmidhī; ḥasan volgens al-Albānī',
  'أخرجه الترمذي، وصححه الألباني': 'at-Tirmidhī; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'أبو هريرة': 'Abū Hurayra', 'عياض بن حمار المجاشعي': 'ʿIyāḍ ibn Ḥimār al-Mujāshiʿī', 'أبو رافع': 'Abū Rāfiʿ',
  'المقدام بن معدي كرب الكندي': 'al-Miqdām ibn Maʿdīkarib al-Kindī', 'العرباض بن سارية': 'al-ʿIrbāḍ ibn Sāriya', 'معاوية بن أبي سفيان': 'Muʿāwiya ibn Abī Sufyān',
  'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'عبد الله بن عمرو بن العاص': 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', 'زيد بن أرقم': 'Zayd ibn Arqam', 'عمران بن حصين': 'ʿImrān ibn Ḥuṣayn'
}

// Personen: slug uit het personenregister, met waarom ze in deze eenheid voorkomen.
const PERSONS = [
  ['umar-ibn-al-khattab', 'text', [12], 'روى حديث جبريل في الإيمان.', 'Overleverde de hadith van Jibrīl over het geloof.'],
  ['abu-hurayra', 'text', [17], 'روى حديث الفطرة، وقرأ بعده آية الروم.', 'Overleverde de hadith over de fiṭra en reciteerde daarna ar-Rūm 30:30.'],
  ['iyad-ibn-himar', 'text', [17], 'روى حديث «خلقت عبادي حنفاء».', 'Overleverde de hadith "Ik heb Mijn dienaren als ḥunafāʾ geschapen".'],
  ['abu-rafi', 'text', [20], 'روى حديث «لا أعرفن الرجل يأتيه الأمر من أمري».', 'Overleverde de hadith over wie de Sunna afwijst met "wij hebben het Boek van Allah".'],
  ['al-miqdam-ibn-madikarib', 'text', [21], 'روى حديث «ألا إني أوتيت الكتاب ومثله معه».', 'Overleverde de hadith "Mij is het Boek gegeven en iets dergelijks erbij".'],
  ['al-irbad-ibn-sariya', 'text', [21, 23, 28], 'روى حديث «فعليكم بسنتي وسنة الخلفاء الراشدين».', 'Overleverde de hadith "houd vast aan mijn sunna en de sunna van de rechtgeleide kaliefen".'],
  ['ash-shafii', 'text', [21], 'نقل الكتاب قوله في أن الصحابة والتابعين قبلوا خبر النبي ﷺ وأثبتوه سنة.', 'Het boek citeert hem: geen metgezel of opvolger weigerde een bericht van de Profeet ﷺ.'],
  ['muawiya-ibn-abi-sufyan', 'text', [22], 'روى حديث افتراق الأمة.', 'Overleverde de hadith over de verdeeldheid van de umma.'],
  ['abd-allah-ibn-umar', 'text', [23], 'روى حديث «إن الله لا يجمع أمتي على ضلالة».', 'Overleverde de hadith "Allah laat mijn umma niet samenkomen op dwaling".'],
  ['ibn-taymiyya', 'text', [24], 'نقل الكتاب قوله: المنقول الصحيح لا يعارضه معقول صريح.', 'Het boek citeert hem: een authentieke overlevering wordt nooit door een helder verstand tegengesproken.'],
  ['abdallah-ibn-amr', 'text', [26], 'روى حديث «مهلا يا قوم، بهذا أهلكت الأمم من قبلكم».', 'Overleverde de hadith "Rustig, mijn volk! Hierdoor zijn de volken vóór jullie vernietigd".'],
  ['zayd-ibn-arqam', 'text', [27], 'روى حديث الثقلين.', 'Overleverde de hadith over de "twee zware dingen".'],
  ['imran-ibn-husayn', 'text', [29], 'روى حديث «خيركم قرني».', 'Overleverde de hadith "De besten van jullie zijn mijn generatie".'],
  ['al-bukhari', 'takhrij', [17, 29], 'أخرج حديثين في هذه الوحدة.', 'Nam twee hadith uit deze eenheid op in zijn verzameling.'],
  ['muslim', 'takhrij', [12, 17, 27, 29], 'أخرج أكثر أحاديث هذه الوحدة.', 'Nam de meeste hadith uit deze eenheid op in zijn verzameling.'],
  ['ahmad-ibn-hanbal', 'takhrij', [21, 22, 26], 'أخرج عدة أحاديث في هذه الوحدة.', 'Nam meerdere hadith uit deze eenheid op in zijn Musnad.'],
  ['at-tirmidhi', 'takhrij', [20, 21, 22, 23], 'أخرج عدة أحاديث في هذه الوحدة، وصحح بعضها.', 'Nam meerdere hadith uit deze eenheid op en noemde een deel authentiek.'],
  ['abu-dawud', 'takhrij', [20], 'من الأربعة الذين أخرجوا حديث أبي رافع.', 'Een van de Sunan-auteurs die de hadith van Abū Rāfiʿ opnamen.'],
  ['ibn-hibban', 'takhrij', [20], 'صحح حديث أبي رافع.', 'Noemde de hadith van Abū Rāfiʿ authentiek.'],
  ['al-albani', 'takhrij', [22, 23], 'حسّن حديث معاوية وصحح حديث ابن عمر.', 'Noemde de hadith van Muʿāwiya ḥasan en die van Ibn ʿUmar authentiek.'],
  ['al-arnaut', 'takhrij', [21, 26], 'صحح حديثي المقدام وعبد الله بن عمرو.', 'Noemde de hadith van al-Miqdām en van ʿAbd Allāh ibn ʿAmr authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'مقدمات في العقيدة الصحيحة',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'معنى العقيدة الصحيحة وأهميتها، ومميزاتها، ومصادر تلقيها، وأصول أهل السنة في إثبات مسائلها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'الموضوعات الأربعة للوحدة كما في صفحة ١٠ من الكتاب. اضغط على أي فرع.',
    root: { label: 'العقيدة الصحيحة', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'معناها وأهميتها', sub: 'الدرسان ١–٢', page: 11, children: ['لغة: من العَقْد', 'اصطلاحًا: حكم لا يقبل الشك', 'أهميتها: خمسة أوجه'] },
      { label: 'مميزاتها', sub: 'الدرس ٢', page: 15, children: ['واضحة', 'فطرية', 'ثابتة', 'تقوم على البرهان', 'وسطية'] },
      { label: 'مصادر تلقيها', sub: 'الدرسان ٣–٤', page: 16, children: ['الفطرة', 'القرآن الكريم', 'السنة الصحيحة', 'إجماع السلف'] },
      { label: 'أصول أهل السنة في إثباتها', sub: 'الدرسان ٥–٦', page: 25, children: ['الإيمان والتسليم للنصوص', 'جمع النصوص في الباب', 'الاعتصام بالكتاب والسنة', 'فهم الصحابة', 'لغة العرب'] }
    ]
  },
  points: [
    { text: 'العقيدة الصحيحة: الإيمان الجازم بالله وما يجب له، وبأركان الإيمان، وبكل ما جاءت به النصوص الصحيحة.', page: 11 },
    { text: 'أهميتها خمسة أوجه: أساس قبول العمل، وأصل دعوة الرسل، وضرورة أشد من الهواء والماء، وسبب الأمن والهداية، وسبب البركات.', page: 12 },
    { text: 'مميزاتها خمس: واضحة، فطرية، ثابتة، تقوم على البرهان، وسطية.', page: 15 },
    { text: 'تؤخذ من الكتاب والسنة الصحيحة وإجماع السلف، وهي موافقة للفطرة؛ والعقل لا يستقل بتفاصيلها.', page: 16 },
    { text: 'لأهل السنة خمسة أصول في إثبات مسائلها، تميزهم عن أهل البدع.', page: 25 }
  ],
  terms: [
    { term: 'العقيدة (لغةً)', translit: 'al-ʿaqīda', meaning: 'من العَقْد: الربط والإحكام والشد بقوة، ونقيضه الحَلّ.', explanation: '', notes: [], page: 11 },
    { term: 'العقيدة (اصطلاحًا)', translit: 'al-ʿaqīda', meaning: 'الحكم الذي لا يقبل الشك فيه عند معتقده.', explanation: 'وقيل: الأمور الثابتة الجازمة التي ينعقد عليها قلب الإنسان ولا يشك فيها.', notes: [], page: 11 },
    { term: 'العقيدة الصحيحة', translit: 'al-ʿaqīda aṣ-ṣaḥīḥa', meaning: 'الإيمان الجازم بالله وما يجب له، وبأركان الإيمان، وبكل ما جاءت به النصوص الصحيحة.', explanation: 'والصحيحة: السالمة من العيب والخطأ.', notes: ['مرادفاتها عند السلف: التوحيد، السنة، أصول الدين، الفقه الأكبر، الشريعة، الإيمان.'], page: 11 },
    { term: 'حبط العمل', translit: 'ḥabṭ al-ʿamal', meaning: 'بطلانه وذهاب ثوابه.', explanation: '', notes: [], page: 13 },
    { term: 'الطاغوت', translit: 'aṭ-ṭāghūt', meaning: 'كل ما عُبد من دون الله وهو راضٍ.', explanation: '', notes: ['[النحل: ٣٦]'], page: 13 },
    { term: 'الوسطية', translit: 'al-wasaṭiyya', meaning: 'لا إفراط ولا تفريط، ولا غلو ولا جفاء.', explanation: 'من مميزات العقيدة الصحيحة.', notes: [], page: 15 },
    { term: 'الفطرة', translit: 'al-fiṭra', meaning: 'الطبع السوي والجبلة المستقيمة التي خلق الناس عليها، المتهيئة لقبول الدين الحق.', explanation: 'وهي ملة الإسلام كما صرح به حديث مسلم.', notes: ['[الروم: ٣٠]'], page: 16 },
    { term: 'الحنيفية', translit: 'al-ḥanīfiyya', meaning: 'الإسلام وأركانه، في تفسير أئمة السلف.', explanation: '', notes: [], page: 16 },
    { term: 'حنفاء', translit: 'ḥunafāʾ', meaning: 'جمع حنيف: المائل عن الأديان كلها إلى فطرة الإسلام.', explanation: '', notes: [], page: 17 },
    { term: 'القرآن الكريم', translit: 'al-qurʾān', meaning: 'كلام الله المعجز المنزل على عبده ورسوله محمد ﷺ.', explanation: '', notes: ['[الشعراء: ١٩٣–١٩٥]'], page: 18 },
    { term: 'الفرقان', translit: 'al-furqān', meaning: 'من أسماء القرآن؛ لأن الله فرق به بين الحق والباطل.', explanation: '', notes: ['[الفرقان: ١]'], page: 19 },
    { term: 'السنة النبوية الصحيحة', translit: 'as-sunna', meaning: 'ما ثبت عن النبي ﷺ بالسند الصحيح، مما نقل عنه من قول أو فعل أو تقرير.', explanation: '', notes: [], page: 20 },
    { term: 'السلف', translit: 'as-salaf', meaning: 'لغة: الجماعة المتقدمون؛ سلف يسلف: مضى، وسلف الإنسان: آباؤه المتقدمون.', explanation: '', notes: [], page: 22 },
    { term: 'أهل السنة والجماعة', translit: 'ahl as-sunna wa-l-jamāʿa', meaning: 'سموا بذلك لتمسكهم بالسنة، واجتماعهم على اتباعها وعلى ما حصل عليه الإجماع.', explanation: '', notes: [], page: 22 },
    { term: 'الفرقة الناجية', translit: 'al-firqa an-nājiya', meaning: 'سموا بذلك لنجاتهم من النار أو من الفتن بتمسكهم بالسنة.', explanation: '', notes: ['حديث معاوية بن أبي سفيان'], page: 22 },
    { term: 'الطائفة المنصورة', translit: 'aṭ-ṭāʾifa al-manṣūra', meaning: 'سموا بذلك لأنهم منصورون إلى قيام الساعة.', explanation: '', notes: [], page: 22 },
    { term: 'النقل الصحيح', translit: 'an-naql aṣ-ṣaḥīḥ', meaning: 'القرآن والسنة الثابتة.', explanation: '', notes: [], page: 24 },
    { term: 'العقل الصريح', translit: 'al-ʿaql aṣ-ṣarīḥ', meaning: 'العقل السليم من الانحراف والشبه.', explanation: '', notes: [], page: 24 },
    { term: 'المتشابه', translit: 'al-mutashābih', meaning: 'ما يتبعه أهل البدع حين يعتمدون على نص أو أكثر ويتركون بقية نصوص الباب.', explanation: '', notes: [], page: 26 },
    { term: 'تحريف المعاني', translit: 'taḥrīf al-maʿānī', meaning: 'أن يُفهم من النص ما يناقض معناه الصحيح، كما وقع فيه بنو إسرائيل.', explanation: '', notes: ['[المائدة: ١٣]'], page: 29 },
    { term: 'إعادة فهم النص', translit: 'iʿādat fahm an-naṣṣ', meaning: 'فكرة حادثة: أن فهم الصحابة كان لوقت مضى، وأن علينا فهم النصوص فهمًا يناسب الحياة المعاصرة.', explanation: 'ويسمى أصحابها: عصرانيين أو حداثيين أو ليبراليين.', notes: [], page: 29 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'أهمية العقيدة الصحيحة',
      intro: 'خمسة أوجه، كل وجه بدليله.',
      nodes: [
        { label: 'أساس قبول العمل والنجاة', sub: '[الكهف: ١١٠؛ التوبة: ٧٢]', detail: 'والعمل لا يقبل مع عقيدة فاسدة [المائدة: ٥؛ الزمر: ٦٥].', page: 12 },
        { label: 'الأصل في دعوة الرسل', sub: '[النحل: ٣٦؛ الأنبياء: ٢٥]', page: 13 },
        { label: 'ضرورية أكثر من الهواء والماء', sub: 'من أين جئت؟ لماذا خلقت؟ إلى أين أذهب بعد الموت؟', page: 13 },
        { label: 'سبب الأمن والهداية', sub: '[الأنعام: ٨٢]', page: 14 },
        { label: 'سبب فتح البركات', sub: '[الأعراف: ٩٦]', page: 14 }
      ]
    },
    {
      type: 'tree',
      title: 'مصادر تلقي العقيدة الصحيحة',
      intro: 'العقيدة فطرية، ومصادرها ثلاثة.',
      root: { label: 'مصادر التلقي', page: 24 },
      nodes: [
        { label: 'كتاب الله', sub: 'سبعة أدلة على حجيته', page: 18, children: ['الأمر باتباعه [الأعراف: ٣]', 'كله حق وصدق', 'محفوظ [الحجر: ٩]', 'فيه التفصيل والبيان', 'الفرقان بين الحق والباطل', 'التحاكم إليه عند التنازع', 'القول الفصل'] },
        { label: 'السنة الصحيحة', sub: 'سبعة أدلة على حجيتها', page: 20, children: ['[الحشر: ٧]', '[الأنفال: ١]', '[النحل: ٤٤]', 'حديث أبي رافع', 'حديث المقدام', 'حديث العرباض', 'الإجماع (قول الشافعي)'] },
        { label: 'إجماع السلف', sub: 'ثلاثة أدلة على حجيته', page: 23, children: ['[النساء: ١١٥]', 'حديث العرباض', 'حديث ابن عمر'] }
      ],
      note: 'وقبل ذلك: العقيدة الصحيحة فطرية [الروم: ٣٠]، وحديث الفطرة.'
    },
    {
      type: 'compare',
      title: 'النقل والعقل',
      intro: 'إذا وُجد ما يوهم التعارض بين النقل الصحيح والعقل الصريح وجب تقديم النقل.',
      columns: ['النقل الصحيح', 'العقل'],
      rows: [
        { label: 'ما هو', cells: ['القرآن والسنة الثابتة', 'الصريح منه: السليم من الانحراف والشبه'] },
        { label: 'الثبات', cells: ['ثابت', 'متغير'] },
        { label: 'العصمة', cells: ['معصوم', 'ليس معصومًا'] },
        { label: 'في العقيدة', cells: ['تُدرك منه التفاصيل', 'يدرك بعض المقررات، ولا يستقل بالتفاصيل'] }
      ],
      page: 24
    },
    {
      type: 'compare',
      title: 'أصول أهل السنة في إثبات مسائل العقيدة',
      intro: 'كل أصل في مقابل منهج أهل البدع، كما في الكتاب.',
      columns: ['أهل السنة', 'بخلاف أهل البدع'],
      rows: [
        { label: '١', cells: ['الإيمان والتسليم والتعظيم لنصوص الكتاب والسنة', 'يؤمنون ببعض ويردون بعضًا بسبب الجهل والهوى'] },
        { label: '٢', cells: ['جمع النصوص في الباب الواحد وإعمالها جميعًا', 'يعتمدون نصًّا أو أكثر ويتبعون ما تشابه'] },
        { label: '٣', cells: ['الاعتصام بالكتاب والسنة', 'يعتمدون على غير الوحي، كأقوال المشايخ والمنامات عند الصوفية'] },
        { label: '٤', cells: ['فهم النصوص على فهم الصحابة', 'كالخوارج والرافضة يطعنون في الصحابة فلا يلتفتون إلى فهمهم'] },
        { label: '٥', cells: ['الرجوع إلى لغة العرب إذا لم يوجد بيان في النصوص', '[يوسف: ٢؛ طه: ١١٣]'] }
      ],
      page: 25
    }
  ],
  sections: [
    { title: 'معنى العقيدة الصحيحة', text: 'العقيدة من العقد، واصطلاحًا: حكم لا يقبل الشك عند معتقده. والعقيدة الصحيحة: الإيمان الجازم بالله وما يجب له وبأركان الإيمان وبكل ما صح من النصوص؛ ولا بد فيها من الجزم [الحجرات: ١٥].', more: 'أدلتها: [البقرة: ١٧٧]، [البقرة: ٢٨٥]، وحديث جبريل.', page: 11 },
    { title: 'أهميتها', text: 'هي أساس قبول العمل، وأصل دعوة الرسل، والإنسان مضطر إليها أكثر من الهواء والماء، وبها الأمن والهداية والبركات.', more: 'الإنسان يحتاج إلى جواب: من أين جئت؟ لماذا خلقت؟ إلى أين أذهب بعد الموت؟ ولا جواب إلا في العقيدة الصحيحة. وضعف الأمن اليوم من ضعف العقيدة.', page: 12 },
    { title: 'مميزاتها', text: 'واضحة سهلة لا غموض فيها ولا جوانب محتكرة لرجال الدين، فطرية لا تصادم الفطرة، ثابتة لا زيادة فيها ولا نقص، تقيم البراهين [الأنعام: ١٤٩]، ووسطية.', more: '', page: 15 },
    { title: 'الفطرة', text: 'عقيدة التوحيد فطرية: خلق الله الناس متهيئين لقبول الدين الحق.', more: 'الأدلة: [الروم: ٣٠]، وحديث أبي هريرة «كل مولود يولد على الفطرة»، ولفظا مسلم «على الملة»، وحديث عياض بن حمار.', page: 16 },
    { title: 'القرآن والسنة', text: 'القرآن كلام الله المعجز المنزل على محمد ﷺ، والسنة ما ثبت عنه بالسند الصحيح من قول أو فعل أو تقرير؛ وكلاهما حجة تؤخذ منه العقيدة.', more: 'من أدلة حجية السنة: [الحشر: ٧]، وحديث «ألا إني أوتيت الكتاب ومثله معه»، وقول الشافعي في قبول الصحابة والتابعين لخبر النبي ﷺ.', page: 18 },
    { title: 'إجماع السلف', text: 'السلف: المتقدمون. ومن أسمائهم: أهل السنة والجماعة، والفرقة الناجية، والطائفة المنصورة. وإجماعهم حجة.', more: 'الأدلة: [النساء: ١١٥]، وحديث العرباض، وحديث ابن عمر «إن الله لا يجمع أمتي على ضلالة».', page: 22 },
    { title: 'العقل', text: 'يدرك العقل بعض المقررات، كوجود الله ووحدانيته، ولا يستقل بالتفاصيل. وعند توهم التعارض يقدم النقل الصحيح؛ لأنه ثابت ومعصوم.', more: 'قال ابن تيمية: «المنقول الصحيح لا يعارضه معقول صريح».', page: 23 },
    { title: 'أصول أهل السنة', text: 'التسليم للنصوص، وجمعها في الباب، والاعتصام بالكتاب والسنة، وفهمها على فهم الصحابة، والرجوع إلى لغة العرب.', more: 'ويتفرع عن ذلك: إثبات ما أثبته الله ورسوله ونفي ما نفياه والسكوت عما سكتا عنه [الإسراء: ٣٦]، ويستحيل التعارض بين نص صحيح وعقل صحيح.', page: 25 },
    { title: 'بدعة إعادة فهم النص', text: 'فكرة حادثة تخالف أصول أهل السنة من أربعة وجوه: بدعة لم تعرف في القرون المفضلة، ومخالفة لوجوب التقيد بفهم الصحابة، وتحريف للمعاني، وفتح لباب الشر.', more: 'الأدلة: حديث «خيركم قرني»، و[المائدة: ١٣]، و[المائدة: ١٦].', page: 29 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'الجزم', items: ['لا بد من انعقاد القلب انعقادًا جازمًا، لا شك فيه [الحجرات: ١٥].'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'أوجه أهمية العقيدة', items: ['أساس قبول العمل', 'أصل دعوة الرسل', 'ضرورة أشد من الهواء والماء', 'سبب الأمن والهداية', 'سبب البركات'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'مميزات العقيدة الصحيحة', items: ['واضحة', 'فطرية', 'ثابتة', 'تقيم البراهين', 'وسطية'], page: 15, origin: 'boek' },
    { kind: 'opsomming', title: 'مصادر التلقي', items: ['كتاب الله', 'السنة الصحيحة', 'إجماع السلف'], page: 24, origin: 'boek' },
    { kind: 'definitie', title: 'السنة', items: ['ما ثبت عن النبي ﷺ بالسند الصحيح من قول أو فعل أو تقرير.'], page: 20, origin: 'boek' },
    { kind: 'opsomming', title: 'أسماء السلف', items: ['أهل السنة والجماعة', 'الفرقة الناجية', 'الطائفة المنصورة'], page: 22, origin: 'boek' },
    { kind: 'onderscheid', title: 'لماذا يقدم النقل على العقل؟', items: ['النقل ثابت والعقل متغير.', 'النقل معصوم والعقل ليس كذلك.'], page: 24, origin: 'boek' },
    { kind: 'opsomming', title: 'أصول أهل السنة الخمسة', items: ['التسليم للنصوص', 'جمع النصوص في الباب', 'الاعتصام بالكتاب والسنة', 'فهم الصحابة', 'لغة العرب'], page: 25, origin: 'boek' },
    { kind: 'opsomming', title: 'وجوه مخالفة «إعادة فهم النص»', items: ['بدعة لم تعرف في القرون المفضلة', 'مخالفة فهم الصحابة', 'تحريف المعاني', 'تفتح باب الشر والفساد'], page: 29, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'العقيدة الصحيحة: إيمان جازم بالله وما يجب له، وبأركان الإيمان، وبكل ما صح من النصوص.',
    'أهميتها خمسة أوجه: قبول العمل، دعوة الرسل، الضرورة، الأمن والهداية، البركات.',
    'مميزاتها: واضحة، فطرية، ثابتة، برهانية، وسطية.',
    'الفطرة: الطبع السوي المتهيئ لقبول الدين الحق، وهي ملة الإسلام.',
    'المصادر: الكتاب، السنة الصحيحة، إجماع السلف.',
    'السنة: قول أو فعل أو تقرير ثبت بالسند الصحيح.',
    'أسماء السلف: أهل السنة والجماعة، الفرقة الناجية، الطائفة المنصورة.',
    'يقدم النقل الصحيح على العقل: ثابت ومعصوم.',
    'الأصول الخمسة: التسليم، الجمع، الاعتصام، فهم الصحابة، لغة العرب.',
    '«إعادة فهم النص» بدعة مخالفة من أربعة وجوه.'
  ],
  quiz: [
    { type: 'mc', q: 'ما معنى العقيدة اصطلاحًا؟', options: ['ما اتفق عليه الناس', 'الحكم الذي لا يقبل الشك فيه عند معتقده', 'ما غلب على الظن', 'ما ورث عن الآباء'], answer: 1, explain: 'هذا تعريف الكتاب.', page: 11 },
    { type: 'mc', q: 'ما الدليل على أن العقيدة الصحيحة هي الأصل في دعوة الرسل؟', options: ['[النحل: ٣٦]', '[الأعراف: ٩٦]', '[الحجر: ٩]', '[الأنعام: ٨٢]'], answer: 0, explain: '﴿ولقد بعثنا في كل أمة رسولا أن اعبدوا الله واجتنبوا الطاغوت﴾.', page: 13 },
    { type: 'mc', q: 'أي هذه ليس من مميزات العقيدة الصحيحة في الكتاب؟', options: ['فطرية', 'ثابتة', 'متطورة بتعاقب الأجيال', 'وسطية'], answer: 2, explain: 'هي ثابتة لا تتغير ولا تتطور بتعاقب الأجيال.', page: 15 },
    { type: 'tf', q: 'الفطرة في حديث مسلم مصرَّح بأنها ملة الإسلام.', options: ['صواب', 'خطأ'], answer: 0, explain: 'لفظا مسلم: «على الملة» و«على هذه الملة».', page: 17 },
    { type: 'mc', q: 'ما الدليل على أن القرآن محفوظ من التحريف؟', options: ['[الحجر: ٩]', '[الطارق: ١٣]', '[الفرقان: ١]', '[النساء: ٥٩]'], answer: 0, explain: '﴿إنا نحن نزلنا الذكر وإنا له لحافظون﴾.', page: 18 },
    { type: 'mc', q: 'ما معنى «ومثله معه» في حديث المقدام؟', options: ['الإجماع', 'السنة', 'القياس', 'التوراة'], answer: 1, explain: 'كما في الكتاب: يعني السنة.', page: 21 },
    { type: 'mc', q: 'لماذا سمي أهل السنة «الفرقة الناجية»؟', options: ['لكثرتهم', 'لنجاتهم من النار أو الفتن بتمسكهم بالسنة', 'لأنهم أول الأمة', 'لأنهم منصورون'], answer: 1, explain: 'و«المنصورة» لأنهم منصورون إلى قيام الساعة.', page: 22 },
    { type: 'tf', q: 'يستطيع العقل أن يستقل بمعرفة تفاصيل العقيدة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يدرك بعض المقررات، والتفاصيل لا تدرك إلا من الكتاب والسنة.', page: 23 },
    { type: 'mc', q: 'لماذا يقدم النقل الصحيح على العقل عند توهم التعارض؟', options: ['لأنه أقدم', 'لأنه ثابت ومعصوم', 'لأنه أسهل', 'لأن الناس عليه'], answer: 1, explain: 'السببان في الكتاب: النقل ثابت والعقل متغير، والنقل معصوم والعقل ليس كذلك.', page: 24 },
    { type: 'mc', q: 'من الأصل الثالث «الاعتصام بالكتاب والسنة» ضدُّ منهج من يعتمد على:', options: ['لغة العرب', 'أقوال المشايخ والمنامات', 'فهم الصحابة', 'جمع النصوص'], answer: 1, explain: 'كما هو حال الصوفية الذين يعدون أقوال مشايخهم ومناماتهم مصدرًا للتشريع.', page: 26 },
    { type: 'mc', q: 'أي حديث استدل به الكتاب على أن «إعادة فهم النص» بدعة لم تعرف في القرون المفضلة؟', options: ['حديث الفطرة', '«خيركم قرني»', 'حديث الثقلين', 'حديث جبريل'], answer: 1, explain: 'حديث عمران بن حصين، أخرجه البخاري ومسلم.', page: 29 },
    { type: 'mc', q: 'متى نرجع إلى لغة العرب في فهم النصوص؟', options: ['دائمًا قبل النصوص', 'إذا لم نجد بيانًا في النصوص لبعضها البعض', 'إذا خالف النص العقل', 'لا نرجع إليها'], answer: 1, explain: 'لأن القرآن نزل بلسان عربي مبين [يوسف: ٢؛ طه: ١١٣].', page: 30 }
  ],
  note: 'نشاط الكتاب في صفحة ٣١: عشر عبارات صواب وخطأ على هذه الوحدة.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Inleidingen in de juiste geloofsleer',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Betekenis en belang van de juiste geloofsleer, haar kenmerken, de bronnen waaruit zij wordt geleerd, en de grondregels van Ahl as-Sunna bij het vaststellen van geloofszaken.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'De vier onderwerpen van de eenheid, zoals op p. 10 van het boek. Klik op een tak.',
    root: { label: 'De juiste geloofsleer', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Betekenis en belang', sub: 'les 1–2', page: 11, children: ['taal: van ʿaqd (binden)', 'vakterm: oordeel zonder twijfel', 'belang: vijf punten'] },
      { label: 'Kenmerken', sub: 'les 2', page: 15, children: ['duidelijk', 'aangeboren (fiṭrī)', 'onveranderlijk', 'met bewijs', 'evenwichtig'] },
      { label: 'Bronnen', sub: 'les 3–4', page: 16, children: ['de fiṭra', 'de Koran', 'de authentieke Sunna', 'consensus van de salaf'] },
      { label: 'Grondregels van Ahl as-Sunna', sub: 'les 5–6', page: 25, children: ['overgave aan de teksten', 'teksten samenbrengen', 'vasthouden aan Koran en Sunna', 'begrip van de metgezellen', 'de Arabische taal'] }
    ]
  },
  points: [
    { text: 'De juiste geloofsleer is het zekere geloof in Allah en wat Hem toekomt, in de zuilen van het geloof, en in alles wat de authentieke teksten brengen.', page: 11 },
    { text: 'Haar belang heeft vijf kanten: grondslag voor aanvaarding van daden, kern van de oproep van de boodschappers, harder nodig dan lucht en water, bron van veiligheid en leiding, en oorzaak van zegeningen.', page: 12 },
    { text: 'Vijf kenmerken: duidelijk, aangeboren, onveranderlijk, gebaseerd op bewijs, evenwichtig.', page: 15 },
    { text: 'Zij wordt geleerd uit de Koran, de authentieke Sunna en de consensus van de salaf, en past bij de fiṭra; het verstand kan de details niet zelfstandig vaststellen.', page: 16 },
    { text: 'Ahl as-Sunna hebben vijf grondregels bij het vaststellen van geloofszaken, die hen onderscheiden van de mensen van innovatie.', page: 25 }
  ],
  terms: [
    { term: 'العقيدة (لغةً)', translit: 'al-ʿaqīda (taalkundig)', meaning: 'Van ʿaqd: binden, vastmaken, stevig aantrekken. Tegendeel: ḥall (losmaken).', explanation: '', notes: [], page: 11 },
    { term: 'العقيدة (اصطلاحًا)', translit: 'al-ʿaqīda (vakterm)', meaning: 'Een oordeel waaraan degene die het gelooft niet twijfelt.', explanation: 'Andere formulering: de zekere zaken waarop het hart zich vastlegt zonder twijfel.', notes: [], page: 11 },
    { term: 'العقيدة الصحيحة', translit: 'al-ʿaqīda aṣ-ṣaḥīḥa', meaning: 'Het zekere geloof in Allah en wat Hem toekomt, in de zuilen van het geloof en in alles wat de authentieke teksten brengen.', explanation: 'Ṣaḥīḥa: vrij van gebrek en fout.', notes: ['Andere namen bij de salaf: tawḥīd, sunna, uṣūl ad-dīn, al-fiqh al-akbar, sharīʿa, īmān.'], page: 11 },
    { term: 'حبط العمل', translit: 'ḥabṭ al-ʿamal', meaning: 'Het tenietgaan van een daad en het verlies van de beloning ervoor.', explanation: '', notes: [], page: 13 },
    { term: 'الطاغوت', translit: 'aṭ-ṭāghūt', meaning: 'Alles wat naast Allah aanbeden wordt en daarmee tevreden is.', explanation: '', notes: ['an-Naḥl 16:36'], page: 13 },
    { term: 'الوسطية', translit: 'al-wasaṭiyya', meaning: 'Evenwicht: geen overdrijving en geen tekortschieten.', explanation: 'Een van de kenmerken van de juiste geloofsleer.', notes: [], page: 15 },
    { term: 'الفطرة', translit: 'al-fiṭra', meaning: 'De gezonde aard en rechte natuur waarmee de mensen geschapen zijn, klaar om de ware godsdienst te aanvaarden.', explanation: 'Volgens de hadith bij Muslim is dit de milla van de islam.', notes: ['ar-Rūm 30:30'], page: 16 },
    { term: 'الحنيفية', translit: 'al-ḥanīfiyya', meaning: 'De islam en zijn pijlers, volgens de uitleg van de salaf.', explanation: '', notes: [], page: 16 },
    { term: 'حنفاء', translit: 'ḥunafāʾ', meaning: 'Meervoud van ḥanīf: wie zich van alle andere godsdiensten afwendt naar de fiṭra van de islam.', explanation: '', notes: [], page: 17 },
    { term: 'القرآن الكريم', translit: 'al-qurʾān', meaning: 'Het onnavolgbare woord van Allah, neergezonden aan Zijn dienaar en boodschapper Muḥammad ﷺ.', explanation: '', notes: ['ash-Shuʿarāʾ 26:193–195'], page: 18 },
    { term: 'الفرقان', translit: 'al-furqān', meaning: 'Een naam van de Koran: Allah onderscheidt daarmee waarheid van valsheid.', explanation: '', notes: ['al-Furqān 25:1'], page: 19 },
    { term: 'السنة النبوية الصحيحة', translit: 'as-sunna', meaning: 'Wat met een authentieke keten van de Profeet ﷺ is vastgesteld: woord, daad of stilzwijgende instemming (taqrīr).', explanation: '', notes: [], page: 20 },
    { term: 'السلف', translit: 'as-salaf', meaning: 'Taalkundig: de groep die voorging; salaf van een mens zijn zijn voorouders.', explanation: '', notes: [], page: 22 },
    { term: 'أهل السنة والجماعة', translit: 'ahl as-sunna wa-l-jamāʿa', meaning: 'Zo genoemd omdat zij vasthouden aan de Sunna en samenkomen op het volgen ervan en op de consensus.', explanation: '', notes: [], page: 22 },
    { term: 'الفرقة الناجية', translit: 'al-firqa an-nājiya', meaning: 'De geredde groep: gered van het Vuur of van beproevingen door vast te houden aan de Sunna.', explanation: '', notes: ['Hadith van Muʿāwiya'], page: 22 },
    { term: 'الطائفة المنصورة', translit: 'aṭ-ṭāʾifa al-manṣūra', meaning: 'De geholpen groep: zij blijven geholpen tot het Uur aanbreekt.', explanation: '', notes: [], page: 22 },
    { term: 'النقل الصحيح', translit: 'an-naql aṣ-ṣaḥīḥ', meaning: 'Authentieke overlevering: de Koran en de vastgestelde Sunna.', explanation: '', notes: [], page: 24 },
    { term: 'العقل الصريح', translit: 'al-ʿaql aṣ-ṣarīḥ', meaning: 'Gezond verstand: vrij van afwijking en twijfels.', explanation: '', notes: [], page: 24 },
    { term: 'المتشابه', translit: 'al-mutashābih', meaning: 'Het dubbelzinnige, dat de mensen van innovatie volgen wanneer zij één of enkele teksten nemen en de rest laten liggen.', explanation: '', notes: [], page: 26 },
    { term: 'تحريف المعاني', translit: 'taḥrīf al-maʿānī', meaning: 'Het verdraaien van betekenissen: een tekst iets laten zeggen wat zijn juiste betekenis tegenspreekt, zoals de Banū Isrāʾīl deden.', explanation: '', notes: ['al-Māʾida 5:13'], page: 29 },
    { term: 'إعادة فهم النص', translit: 'iʿādat fahm an-naṣṣ', meaning: 'Herinterpretatie van de tekst: de moderne gedachte dat het begrip van de metgezellen bij hun tijd hoorde en dat wij de teksten passend bij het moderne leven moeten begrijpen.', explanation: 'Aanhangers worden ʿaṣrāniyyūn, ḥadāthiyyūn of librāliyyūn genoemd.', notes: [], page: 29 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Het belang van de juiste geloofsleer',
      intro: 'Vijf punten, elk met zijn bewijs.',
      nodes: [
        { label: 'Grondslag voor aanvaarding van daden en redding', sub: 'al-Kahf 18:110; at-Tawba 9:72', detail: 'Met een bedorven geloofsleer wordt een daad niet aanvaard (al-Māʾida 5:5; az-Zumar 39:65).', page: 12 },
        { label: 'Kern van de oproep van de boodschappers', sub: 'an-Naḥl 16:36; al-Anbiyāʾ 21:25', page: 13 },
        { label: 'Harder nodig dan lucht en water', sub: 'Waar kom ik vandaan? Waarom ben ik geschapen? Waar ga ik heen na de dood?', page: 13 },
        { label: 'Bron van veiligheid en leiding', sub: 'al-Anʿām 6:82', page: 14 },
        { label: 'Oorzaak van zegeningen', sub: 'al-Aʿrāf 7:96', page: 14 }
      ]
    },
    {
      type: 'tree',
      title: 'De bronnen van de geloofsleer',
      intro: 'De geloofsleer is aangeboren; haar bronnen zijn drie.',
      root: { label: 'Bronnen', page: 24 },
      nodes: [
        { label: 'Het Boek van Allah', sub: 'zeven bewijzen voor zijn gezag', page: 18, children: ['bevel hem te volgen (7:3)', 'alles erin is waar', 'bewaard (15:9)', 'gedetailleerde rechtsbron', 'onderscheid tussen waar en vals', 'terugverwijzen bij onenigheid', 'het beslissende woord'] },
        { label: 'De authentieke Sunna', sub: 'zeven bewijzen voor haar gezag', page: 20, children: ['al-Ḥashr 59:7', 'al-Anfāl 8:1', 'an-Naḥl 16:44', 'hadith van Abū Rāfiʿ', 'hadith van al-Miqdām', 'hadith van al-ʿIrbāḍ', 'consensus (uitspraak van ash-Shāfiʿī)'] },
        { label: 'Consensus van de salaf', sub: 'drie bewijzen voor haar gezag', page: 23, children: ['an-Nisāʾ 4:115', 'hadith van al-ʿIrbāḍ', 'hadith van Ibn ʿUmar'] }
      ],
      note: 'Daarvoor: de juiste geloofsleer is aangeboren (ar-Rūm 30:30 en de hadith over de fiṭra).'
    },
    {
      type: 'compare',
      title: 'Overlevering en verstand',
      intro: 'Bij een schijnbare tegenstrijdigheid tussen authentieke overlevering en gezond verstand gaat de overlevering voor.',
      columns: ['Authentieke overlevering', 'Verstand'],
      rows: [
        { label: 'Wat', cells: ['Koran en vastgestelde Sunna', 'gezond verstand: vrij van afwijking en twijfels'] },
        { label: 'Vastheid', cells: ['vast', 'verandert'] },
        { label: 'Onfeilbaarheid', cells: ['onfeilbaar', 'niet onfeilbaar'] },
        { label: 'In de geloofsleer', cells: ['bron van de details', 'ziet sommige zaken in, maar niet de details'] }
      ],
      page: 24
    },
    {
      type: 'compare',
      title: 'Grondregels van Ahl as-Sunna',
      intro: 'Elke regel tegenover de werkwijze van de mensen van innovatie, zoals in het boek.',
      columns: ['Ahl as-Sunna', 'In tegenstelling tot de mensen van innovatie'],
      rows: [
        { label: '1', cells: ['geloof in, overgave aan en eerbied voor de teksten', 'een deel aannemen en een deel verwerpen, uit onwetendheid en begeerte'] },
        { label: '2', cells: ['alle teksten over een onderwerp samenbrengen en toepassen', 'één of enkele teksten nemen en het dubbelzinnige volgen'] },
        { label: '3', cells: ['vasthouden aan Koran en Sunna', 'steunen op iets anders dan de openbaring, zoals volgens het boek uitspraken en dromen van sjeiks bij soefi\'s'] },
        { label: '4', cells: ['de teksten begrijpen zoals de metgezellen', 'zoals de Khawārij en de Rāfiḍa, die volgens het boek de metgezellen bekritiseren'] },
        { label: '5', cells: ['terugvallen op de Arabische taal als de teksten zelf geen uitleg geven', 'Yūsuf 12:2; Ṭā Hā 20:113'] }
      ],
      page: 25
    }
  ],
  sections: [
    { title: 'Betekenis', text: 'ʿAqīda komt van ʿaqd (binden); als vakterm: een oordeel waaraan de gelovige niet twijfelt. De juiste geloofsleer is het zekere geloof in Allah en wat Hem toekomt, in de zuilen van het geloof en in al wat authentiek is overgeleverd; zekerheid is vereist (al-Ḥujurāt 49:15).', more: 'Bewijzen: al-Baqara 2:177, al-Baqara 2:285 en de hadith van Jibrīl.', page: 11 },
    { title: 'Belang', text: 'Zij is de grondslag voor aanvaarding van daden, de kern van de oproep van de boodschappers, harder nodig dan lucht en water, en bron van veiligheid, leiding en zegeningen.', more: 'De mens zoekt antwoord op: waar kom ik vandaan, waarom ben ik geschapen, waar ga ik heen na de dood? Volgens het boek komt het gebrek aan veiligheid vandaag voort uit een zwakke geloofsleer.', page: 12 },
    { title: 'Kenmerken', text: 'Duidelijk en eenvoudig, zonder geheimen die alleen geestelijken kennen; aangeboren; onveranderlijk, zonder toevoeging of weglating; met heldere bewijzen (al-Anʿām 6:149); en evenwichtig.', more: '', page: 15 },
    { title: 'De fiṭra', text: 'De geloofsleer van tawḥīd is aangeboren: Allah schiep de mensen klaar om de ware godsdienst te aanvaarden.', more: 'Bewijzen: ar-Rūm 30:30, de hadith van Abū Hurayra "ieder kind wordt geboren op de fiṭra", de twee bewoordingen bij Muslim "op de milla", en de hadith van ʿIyāḍ ibn Ḥimār.', page: 16 },
    { title: 'Koran en Sunna', text: 'De Koran is het onnavolgbare woord van Allah aan Muḥammad ﷺ; de Sunna is wat met een authentieke keten van hem is vastgesteld aan woord, daad of instemming. Beide zijn gezaghebbend in de geloofsleer.', more: 'Bewijzen voor de Sunna onder meer: al-Ḥashr 59:7, de hadith "Mij is het Boek gegeven en iets dergelijks erbij", en de uitspraak van ash-Shāfiʿī dat metgezellen en opvolgers een bericht van de Profeet ﷺ altijd aanvaardden.', page: 18 },
    { title: 'Consensus van de salaf', text: 'Salaf: de voorgangers. Namen: Ahl as-Sunna wa-l-Jamāʿa, de geredde groep en de geholpen groep. Hun consensus is gezaghebbend.', more: 'Bewijzen: an-Nisāʾ 4:115, de hadith van al-ʿIrbāḍ en de hadith van Ibn ʿUmar "Allah laat mijn umma niet samenkomen op dwaling".', page: 22 },
    { title: 'Het verstand', text: 'Het verstand ziet sommige zaken in, zoals het bestaan en de eenheid van Allah, maar niet de details. Bij een schijnbare tegenstrijdigheid gaat de authentieke overlevering voor, want die is vast en onfeilbaar.', more: 'Ibn Taymiyya: een authentieke overlevering wordt nooit door een helder verstand tegengesproken.', page: 23 },
    { title: 'Grondregels van Ahl as-Sunna', text: 'Overgave aan de teksten, ze samenbrengen, vasthouden aan Koran en Sunna, ze begrijpen zoals de metgezellen, en terugvallen op de Arabische taal.', more: 'Hieruit volgt: bevestigen wat Allah en Zijn Boodschapper bevestigen, ontkennen wat zij ontkennen en zwijgen waarover zij zwijgen (al-Isrāʾ 17:36). Een authentieke tekst en een gezond verstand kunnen elkaar niet werkelijk tegenspreken.', page: 25 },
    { title: 'Herinterpretatie van de tekst', text: 'Een moderne gedachte die op vier punten ingaat tegen de grondregels: onbekend in de geprezen generaties, in strijd met het begrip van de metgezellen, verdraaiing van betekenissen, en een deur naar bederf.', more: 'Bewijzen: de hadith "de besten van jullie zijn mijn generatie", al-Māʾida 5:13 en 5:16.', page: 29 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Zekerheid (jazm)', items: ['Het hart legt zich vast zonder twijfel (al-Ḥujurāt 49:15).'], page: 11, origin: 'boek' },
    { kind: 'opsomming', title: 'Het belang van de geloofsleer', items: ['grondslag voor aanvaarding van daden', 'kern van de oproep van de boodschappers', 'harder nodig dan lucht en water', 'veiligheid en leiding', 'zegeningen'], page: 12, origin: 'boek' },
    { kind: 'opsomming', title: 'Kenmerken van de juiste geloofsleer', items: ['duidelijk', 'aangeboren', 'onveranderlijk', 'met bewijs', 'evenwichtig'], page: 15, origin: 'boek' },
    { kind: 'opsomming', title: 'Bronnen', items: ['het Boek van Allah', 'de authentieke Sunna', 'de consensus van de salaf'], page: 24, origin: 'boek' },
    { kind: 'definitie', title: 'Sunna', items: ['Wat met een authentieke keten van de Profeet ﷺ is vastgesteld: woord, daad of stilzwijgende instemming.'], page: 20, origin: 'boek' },
    { kind: 'opsomming', title: 'Namen van de salaf', items: ['Ahl as-Sunna wa-l-Jamāʿa', 'de geredde groep', 'de geholpen groep'], page: 22, origin: 'boek' },
    { kind: 'onderscheid', title: 'Waarom gaat overlevering voor op verstand?', items: ['De overlevering is vast, het verstand verandert.', 'De overlevering is onfeilbaar, het verstand niet.'], page: 24, origin: 'boek' },
    { kind: 'opsomming', title: 'De vijf grondregels', items: ['overgave aan de teksten', 'teksten samenbrengen', 'vasthouden aan Koran en Sunna', 'begrip van de metgezellen', 'de Arabische taal'], page: 25, origin: 'boek' },
    { kind: 'opsomming', title: 'Bezwaren tegen "herinterpretatie van de tekst"', items: ['onbekend in de geprezen generaties', 'in strijd met het begrip van de metgezellen', 'verdraaiing van betekenissen', 'deur naar kwaad en bederf'], page: 29, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Juiste geloofsleer: zeker geloof in Allah en wat Hem toekomt, in de zuilen van het geloof en in al wat authentiek is.',
    'Belang: aanvaarding van daden, oproep van de boodschappers, noodzaak, veiligheid en leiding, zegeningen.',
    'Kenmerken: duidelijk, aangeboren, onveranderlijk, met bewijs, evenwichtig.',
    'Fiṭra: gezonde aard, klaar voor de ware godsdienst; dat is de milla van de islam.',
    'Bronnen: Koran, authentieke Sunna, consensus van de salaf.',
    'Sunna: woord, daad of instemming, met authentieke keten.',
    'Namen van de salaf: Ahl as-Sunna wa-l-Jamāʿa, geredde groep, geholpen groep.',
    'Overlevering gaat voor op verstand: vast en onfeilbaar.',
    'Vijf grondregels: overgave, samenbrengen, vasthouden, begrip van de metgezellen, Arabische taal.',
    '"Herinterpretatie van de tekst": op vier punten in strijd met de grondregels.'
  ],
  quiz: [
    { type: 'mc', q: 'Wat is ʿaqīda als vakterm?', options: ['waar mensen het over eens zijn', 'een oordeel waaraan de gelovige niet twijfelt', 'een sterk vermoeden', 'wat je van je ouders erft'], answer: 1, explain: 'Dat is de definitie in het boek.', page: 11 },
    { type: 'mc', q: 'Met welk vers laat het boek zien dat de geloofsleer de kern is van de oproep van de boodschappers?', options: ['an-Naḥl 16:36', 'al-Aʿrāf 7:96', 'al-Ḥijr 15:9', 'al-Anʿām 6:82'], answer: 0, explain: 'In elk volk is een boodschapper gestuurd met: aanbid Allah en vermijd de ṭāghūt (strekking).', page: 13 },
    { type: 'mc', q: 'Welk kenmerk noemt het boek níet?', options: ['aangeboren', 'onveranderlijk', 'ontwikkelt zich met de generaties', 'evenwichtig'], answer: 2, explain: 'Zij verandert en ontwikkelt zich juist niet met de generaties.', page: 15 },
    { type: 'tf', q: 'Volgens de hadith bij Muslim is de fiṭra de milla van de islam.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'De twee bewoordingen bij Muslim: "op de milla" en "op deze milla".', page: 17 },
    { type: 'mc', q: 'Welk vers laat zien dat de Koran bewaard is?', options: ['al-Ḥijr 15:9', 'aṭ-Ṭāriq 86:13', 'al-Furqān 25:1', 'an-Nisāʾ 4:59'], answer: 0, explain: '"Wij hebben de vermaning neergezonden en Wij zullen haar bewaren" (strekking).', page: 18 },
    { type: 'mc', q: 'Wat betekent "iets dergelijks erbij" in de hadith van al-Miqdām?', options: ['de consensus', 'de Sunna', 'de analogie', 'de Thora'], answer: 1, explain: 'Volgens het boek: de Sunna.', page: 21 },
    { type: 'mc', q: 'Waarom heten Ahl as-Sunna "de geredde groep"?', options: ['omdat ze met velen zijn', 'omdat ze gered worden van het Vuur of van beproevingen door vast te houden aan de Sunna', 'omdat ze de eersten waren', 'omdat ze geholpen worden'], answer: 1, explain: '"Geholpen groep" komt van: geholpen tot het Uur aanbreekt.', page: 22 },
    { type: 'tf', q: 'Het verstand kan de details van de geloofsleer zelfstandig vaststellen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het ziet sommige zaken in; de details komen uit Koran en Sunna.', page: 23 },
    { type: 'mc', q: 'Waarom gaat authentieke overlevering voor bij een schijnbare tegenstrijdigheid met het verstand?', options: ['omdat ze ouder is', 'omdat ze vast en onfeilbaar is', 'omdat ze makkelijker is', 'omdat de meeste mensen dat vinden'], answer: 1, explain: 'De twee redenen in het boek.', page: 24 },
    { type: 'mc', q: 'Grondregel 3 (vasthouden aan Koran en Sunna) staat tegenover wie steunt op:', options: ['de Arabische taal', 'uitspraken en dromen van sjeiks', 'het begrip van de metgezellen', 'het samenbrengen van teksten'], answer: 1, explain: 'Het boek noemt als voorbeeld soefi\'s die uitspraken en dromen van hun sjeiks als wetgevingsbron nemen.', page: 26 },
    { type: 'mc', q: 'Met welke hadith laat het boek zien dat "herinterpretatie van de tekst" onbekend was in de geprezen generaties?', options: ['de hadith over de fiṭra', '"De besten van jullie zijn mijn generatie"', 'de hadith over de twee zware dingen', 'de hadith van Jibrīl'], answer: 1, explain: 'De hadith van ʿImrān ibn Ḥuṣayn, bij al-Bukhārī en Muslim.', page: 29 },
    { type: 'mc', q: 'Wanneer val je terug op de Arabische taal om de teksten te begrijpen?', options: ['altijd vóór de teksten', 'als de teksten elkaar niet uitleggen', 'als een tekst het verstand tegenspreekt', 'nooit'], answer: 1, explain: 'Omdat de Koran in duidelijk Arabisch is geopenbaard (Yūsuf 12:2; Ṭā Hā 20:113).', page: 30 }
  ],
  note: 'Oefening van het boek op p. 31: tien juist/onjuist-stellingen over deze eenheid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling van de Koran of de hadith.'
}

export default { book: 'zad-n1-aqeedah', chapter: '1', unit: 1, ar, nl }
