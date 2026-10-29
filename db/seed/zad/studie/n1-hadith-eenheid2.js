// Hoofdstukkaart bij الحديث (١), eenheid 2: الأحاديث ٦–١٠ (lessen 8–13, boek p. 33–54).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 34, 39, 42, 46, 48, 50, 52 en 54 zijn in het boek
// "alleen ter kennisname". Bij «فليقرأ: آمنت بالله ورسله» volgt de kaart het boek (Aḥmad) en noemt
// de bewoording bij Muslim in de opmerking. Weggelaten: «لو أن لي مثل ما لفلان» (p. 53), omdat het
// boek er geen bron bij noemt.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (١)، سلسلة زاد العلمية',
  pages: '33–54',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'ابن عباس', text: 'إنك تأتي قومًا من أهل الكتاب، فادعهم إلى شهادة أن لا إله إلا الله وأني رسول الله، فإن هم أطاعوا لذلك فأعلمهم أن الله افترض عليهم خمس صلوات في كل يوم وليلة، فإن هم أطاعوا لذلك فأعلمهم أن الله افترض عليهم صدقة تؤخذ من أغنيائهم فترد في فقرائهم، فإن هم أطاعوا لذلك فإياك وكرائم أموالهم، واتق دعوة المظلوم فإنه ليس بينها وبين الله حجاب', takhrij: 'رواه مسلم', note: 'الحديث السادس: وصية النبي ﷺ لمعاذ لما بعثه إلى اليمن. وهو في البخاري أيضًا.', pages: [33], nl: 'Je gaat naar een volk van de mensen van het Boek; roep hen op te getuigen dat er geen god is dan Allah en dat ik de Boodschapper van Allah ben. Gehoorzamen ze daarin, leer hun dan dat Allah hun vijf gebeden per dag en nacht heeft opgelegd. Gehoorzamen ze daarin, leer hun dan dat Allah hun een liefdadigheid heeft opgelegd die van hun rijken wordt genomen en aan hun armen wordt teruggegeven. Gehoorzamen ze daarin, pas dan op voor hun kostbaarste bezit, en vrees het smeekgebed van wie onrecht is aangedaan, want daartussen en Allah is geen sluier', nlNote: 'Hadith 6: de raad van de Profeet ﷺ aan Muʿādh toen hij hem naar Jemen stuurde. Ook bij al-Bukhārī.' },
  { narrator: 'أبو هريرة', text: 'يأتي الشيطان أحدكم فيقول: من خلق كذا؟ من خلق كذا؟ حتى يقول: من خلق ربك؟ فإذا بلغه فليستعذ بالله ولينته', takhrij: 'متفق عليه', note: 'الحديث السابع.', pages: [38], nl: 'De duivel komt naar een van jullie en zegt: wie heeft dit geschapen, wie heeft dat geschapen? tot hij zegt: wie heeft jouw Heer geschapen? Komt hij zover, laat hem dan zijn toevlucht zoeken bij Allah en ermee ophouden', nlNote: 'Hadith 7.' },
  { narrator: '', text: 'لن يبرح الناس يتساءلون حتى يقولوا: هذا الله خالق كل شيء، فمن خلق الله؟', takhrij: '', note: 'لفظ آخر ذكره الكتاب للحديث السابع.', pages: [38], nl: 'De mensen blijven elkaar vragen stellen tot ze zeggen: dit is Allah, de Schepper van alles; wie heeft dan Allah geschapen?', nlNote: 'Een andere bewoording van hadith 7 die het boek noemt.' },
  { narrator: '', text: 'فإذا وجد ذلك أحدكم فليقرأ: آمنت بالله ورسله، فإن ذلك يذهب عنه', takhrij: 'رواه أحمد بسند صحيح', note: 'كما في الكتاب. وعند مسلم: «فليقل: آمنت بالله».', pages: [38], nl: 'wie van jullie dat ervaart, laat hem zeggen: ik geloof in Allah en Zijn boodschappers; dan gaat het van hem weg', nlNote: 'Zoals in het boek. Bij Muslim: "laat hem zeggen: ik geloof in Allah".' },
  { narrator: 'أبو هريرة', text: 'فإذا قالوا ذلك فقولوا: الله أحد، الله الصمد، لم يلد ولم يولد ولم يكن له كفوًا أحد، ثم ليتفل عن يساره ثلاثًا وليستعذ من الشيطان', takhrij: 'أخرجه أبو داود وحسنه الألباني', note: '', pages: [38], nl: 'als ze dat zeggen, zeg dan: Allah is Eén, Allah is de Volkomene, Hij heeft niet verwekt en is niet verwekt, en niemand is Hem gelijk; laat hij dan drie keer naar links spuwen en zijn toevlucht zoeken tegen de duivel', nlNote: '' },
  { narrator: '', text: 'الله أكبر الله أكبر الله أكبر، الحمد لله الذي رد كيده إلى الوسوسة', takhrij: 'أخرجه أبو داود وصححه الألباني', note: 'وسوسة الشيطان للمؤمن لإياسه من إغوائه. ' + FYI, pages: [39], nl: 'Allah is de Grootste, Allah is de Grootste, Allah is de Grootste; alle lof zij Allah, Die zijn list heeft teruggebracht tot influistering', nlNote: 'De duivel fluistert de gelovige in omdat hij hem niet kan misleiden. ' + FYI_NL },
  { narrator: 'علي بن أبي طالب', text: 'ما منكم من أحد إلا وقد كتب مقعده من النار ومقعده من الجنة... اعملوا فكل ميسر لما خلق له، أما من كان من أهل السعادة فييسر لعمل أهل السعادة، وأما من كان من أهل الشقاء فييسر لعمل أهل الشقاوة', takhrij: 'متفق عليه', note: 'الحديث الثامن، قاله في جنازة، ثم قرأ ﴿فأما من أعطى واتقى﴾ [الليل: ٥–٧].', pages: [41], nl: 'Er is niemand van jullie of zijn plaats in het Vuur en zijn plaats in het Paradijs is al opgeschreven … handel, want ieder wordt geholpen naar waarvoor hij geschapen is: wie bij de gelukkigen hoort, wordt het werk van de gelukkigen makkelijk gemaakt, en wie bij de ongelukkigen hoort, wordt het werk van de ongelukkigen makkelijk gemaakt', nlNote: 'Hadith 8, gezegd bij een begrafenis; daarna reciteerde hij "wie geeft en godvrezend is" (al-Layl 92:5–7).' },
  { narrator: 'ابن مسعود', text: 'إن أحدكم يجمع خلقه في بطن أمه أربعين يومًا نطفة، ثم يكون في ذلك علقة مثل ذلك، ثم يكون في ذلك مضغة مثل ذلك، ثم يرسل الملك فينفخ فيه الروح، ويؤمر بأربع كلمات: بكتب رزقه وأجله وعمله وشقي أو سعيد...', takhrij: 'متفق عليه', note: 'الحديث التاسع، وتمامه: «فوالذي لا إله غيره إن أحدكم ليعمل بعمل أهل الجنة حتى ما يكون بينه وبينها إلا ذراع فيسبق عليه الكتاب...».', pages: [45], nl: 'De schepping van ieder van jullie wordt veertig dagen in de buik van zijn moeder samengebracht als druppel, daarna is hij evenlang een bloedklonter, daarna evenlang een klompje vlees; dan wordt de engel gestuurd die de geest in hem blaast, en hij krijgt vier dingen opgedragen: zijn levensonderhoud, zijn levensduur, zijn daden en of hij ongelukkig of gelukkig is …', nlNote: 'Hadith 9; het vervolg: "bij Hem naast Wie er geen god is, een van jullie verricht de daden van de mensen van het Paradijs tot er nog maar een el tussen hem en het Paradijs is, en dan gaat het geschrevene hem voor …".' },
  { narrator: '', text: 'أعمار أمتي ما بين ستين إلى سبعين، وأقلهم من يجوز ذلك', takhrij: 'أخرجه الترمذي وحسنه', note: 'في معنى «وأجله».', pages: [45], nl: 'de leeftijden van mijn gemeenschap liggen tussen zestig en zeventig, en weinigen gaan daarboven', nlNote: 'Bij de betekenis van "zijn levensduur".' },
  { narrator: 'أبو هريرة', text: 'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف، وفي كل خير، احرص على ما ينفعك، واستعن بالله ولا تعجز، وإن أصابك شيء فلا تقل: لو أني فعلت كان كذا وكذا، ولكن قل: قدر الله وما شاء فعل، فإن لو تفتح عمل الشيطان', takhrij: 'رواه مسلم', note: 'الحديث العاشر.', pages: [51], nl: 'De sterke gelovige is beter en Allah dierbaarder dan de zwakke gelovige, en in beiden is goed. Streef naar wat je baat, vraag Allah om hulp en geef het niet op. Overkomt je iets, zeg dan niet: had ik maar zo gedaan, dan was het zo gegaan; maar zeg: Allah heeft het beschikt en Hij doet wat Hij wil, want "had ik maar" opent het werk van de duivel', nlNote: 'Hadith 10.' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه أحمد بسند صحيح': 'Aḥmad, met een authentieke keten (volgens het boek)',
  'أخرجه أبو داود وحسنه الألباني': 'Abū Dāwūd; goed (ḥasan) volgens al-Albānī',
  'أخرجه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'أخرجه الترمذي وحسنه': 'at-Tirmidhī, die hem goed (ḥasan) noemde'
}
const NARRATOR_NL = { 'ابن عباس': 'Ibn ʿAbbās', 'أبو هريرة': 'Abū Hurayra', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib', 'ابن مسعود': 'Ibn Masʿūd' }

const PERSONS = [
  ['ibn-abbas', 'text', [33], 'راوي حديث بعث معاذ إلى اليمن.', 'Overleveraar van de hadith over het sturen van Muʿādh naar Jemen.'],
  ['muadh-ibn-jabal', 'text', [33, 34], 'بعثه النبي ﷺ إلى اليمن في السنة العاشرة داعيًا إلى الله.', 'Door de Profeet ﷺ in het jaar 10 naar Jemen gestuurd om tot Allah op te roepen.'],
  ['abu-hurayra', 'text', [38, 51], 'راوي حديث الوسوسة وحديث «المؤمن القوي».', 'Overleveraar van de hadith over de influistering en van "de sterke gelovige".'],
  ['ali-ibn-abi-talib', 'text', [41], 'راوي الحديث الثامن «اعملوا فكل ميسر لما خلق له».', 'Overleveraar van hadith 8: "handel, want ieder wordt geholpen".'],
  ['ibn-masud', 'text', [45, 47], 'راوي الحديث التاسع في أطوار الخلق، ومن فوائده حسن أسلوبه.', 'Overleveraar van hadith 9 over de fasen van de schepping; het boek wijst op zijn mooie manier van vertellen.'],
  ['ibn-faris', 'text', [41], 'قال في «ينكت»: النون والكاف والتاء أصل واحد يدل على تأثير يسير في الشيء.', 'Zei over yankut: de wortel n-k-t duidt op een lichte inwerking op iets.'],
  ['ibn-al-qayyim', 'text', [54], 'استنبط من حديث «المؤمن القوي» أن الله يحب حقيقة، ويحب مقتضى أسمائه وصفاته.', 'Leidde uit "de sterke gelovige" af dat Allah werkelijk liefheeft, en liefheeft wat Zijn namen en eigenschappen vragen.'],
  ['muslim', 'takhrij', [33, 38, 41, 45, 51], 'أخرج حديث معاذ و«المؤمن القوي» وغيرهما.', 'Nam de hadith van Muʿādh, "de sterke gelovige" en andere op.'],
  ['al-bukhari', 'takhrij', [33, 38, 41, 45], 'أخرج حديث الوسوسة وحديث علي وحديث ابن مسعود.', 'Nam de hadith over de influistering, die van ʿAlī en die van Ibn Masʿūd op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [38], 'روى «فليقرأ: آمنت بالله ورسله».', 'Overleverde: "laat hem zeggen: ik geloof in Allah en Zijn boodschappers".'],
  ['abu-dawud', 'takhrij', [38, 39], 'روى «فقولوا: الله أحد...» و«الحمد لله الذي رد كيده إلى الوسوسة».', 'Overleverde "zeg dan: Allah is Eén …" en "die zijn list heeft teruggebracht tot influistering".'],
  ['at-tirmidhi', 'takhrij', [45], 'روى «أعمار أمتي ما بين ستين إلى سبعين» وحسنه.', 'Overleverde "de leeftijden van mijn gemeenschap liggen tussen zestig en zeventig" en noemde hem goed.'],
  ['al-albani', 'takhrij', [38, 39], 'حكم على حديثي أبي داود.', 'Beoordeelde de twee hadith van Abū Dāwūd.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'الأحاديث ٦–١٠: الدعوة والقدر',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'وصية النبي ﷺ لمعاذ في ترتيب الدعوة، وعلاج وسوسة الشيطان في ذات الله، والإيمان بالقدر مع العمل في حديث علي، وأطوار خلق الإنسان وما يكتب له في حديث ابن مسعود، ثم المؤمن القوي والحرص على ما ينفع وأحكام «لو».',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'الأحاديث الخمسة كما في الكتاب.',
    root: { label: 'الأحاديث ٦–١٠', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'بعث معاذ إلى اليمن', sub: 'الدرس ٨', page: 33, children: ['البداءة بالتوحيد', 'الصلاة ثم الزكاة', 'دعوة المظلوم'] },
      { label: 'يأتي الشيطان أحدكم', sub: 'الدرس ٩', page: 38, children: ['الاستعاذة', 'الانتهاء', 'آمنت بالله'] },
      { label: 'اعملوا فكل ميسر', sub: 'الدرس ١٠', page: 41, children: ['الكتابة السابقة', 'الأسباب', 'لا اتكال'] },
      { label: 'يجمع خلقه في بطن أمه', sub: 'الدرسان ١١–١٢', page: 45, children: ['أطوار الجنين', 'الكلمات الأربع', 'الأعمال بالخواتيم'] },
      { label: 'المؤمن القوي', sub: 'الدرس ١٣', page: 51, children: ['احرص على ما ينفعك', 'استعن بالله', 'قدر الله وما شاء فعل'] }
    ]
  },
  points: [
    { text: 'الواجب البداءة بالدعوة إلى التوحيد، ثم الصلاة، ثم الزكاة.', page: 35 },
    { text: 'ينبغي أن يعرف الداعية حال المدعوين ليتأهب علمًا وخلقًا.', page: 35 },
    { text: 'دعوة المظلوم مستجابة ليس بينها وبين الله حجاب.', page: 36 },
    { text: 'من وجد وسوسة في ذات الله فليستعذ بالله ولينته، ويحرم المراء في ذات الله وصفاته.', page: 40 },
    { text: 'السعادة والشقاء بتقدير الله السابق، وهذا لا يدعو إلى ترك العمل بل إلى زيادته.', page: 43 },
    { text: 'الإنسان لا يدري ماذا كتب له، فأمر بالسعي لتحصيل ما ينفعه.', page: 49 },
    { text: 'الأعمال بالخواتيم، فلا يغتر العبد بصور الأعمال.', page: 49 },
    { text: 'المؤمن القوي خير من الضعيف، وإن أصاب العبد شيء بعد بذل الجهد فليقل: قدر الله وما شاء فعل.', page: 53 }
  ],
  terms: [
    { term: 'كرائم الأموال', translit: 'karāʾim al-amwāl', meaning: 'نفائسها، الجامعة للكمال من غزارة لبن وجمال صورة وكثرة لحم أو صوف.', explanation: 'فلا يأخذ الساعي النفيس بل الوسط.', notes: [], page: 33 },
    { term: 'ليس بينها وبين الله حجاب', translit: 'laysa baynahā wa-bayna llāhi ḥijāb', meaning: 'مسموعة لا ترد.', explanation: 'والتحذير منها هنا لأنه سيتعرض لأموالهم.', notes: [], page: 33 },
    { term: 'فليستعذ بالله', translit: 'fal-yastaʿidh bi-llāh', meaning: 'ليقل: أعوذ بالله من الشيطان الرجيم.', explanation: '', notes: [], page: 38 },
    { term: 'ولينته', translit: 'wal-yantahi', meaning: 'ليتوقف عن الاسترسال معه.', explanation: '', notes: [], page: 38 },
    { term: 'ينكت', translit: 'yankut', meaning: 'يضرب بالشيء في الأرض ويؤثر فيها.', explanation: 'قال ابن فارس: أصل يدل على تأثير يسير في الشيء.', notes: [], page: 41 },
    { term: 'كتابنا', translit: 'kitābunā', meaning: 'المكتوب في الأزل.', explanation: '«أفلا نتكل على كتابنا وندع العمل؟».', notes: [], page: 41 },
    { term: 'ميسر', translit: 'muyassar', meaning: 'موفق ومهيأ.', explanation: '', notes: [], page: 41 },
    { term: 'الصادق المصدوق', translit: 'aṣ-ṣādiq al-maṣdūq', meaning: 'الصادق في قوله، المصدوق فيما يأتيه من الوحي.', explanation: '', notes: [], page: 45 },
    { term: 'نطفة', translit: 'nuṭfa', meaning: 'قطرة من المني.', explanation: '', notes: [], page: 45 },
    { term: 'علقة', translit: 'ʿalaqa', meaning: 'قطعة الدم الغليظ.', explanation: '', notes: [], page: 45 },
    { term: 'مضغة', translit: 'muḍgha', meaning: 'قطعة لحم بقدر ما يمضغه الإنسان.', explanation: '', notes: ['[الحج: ٥]'], page: 45 },
    { term: 'الروح', translit: 'ar-rūḥ', meaning: 'ما به يحيا الجسم.', explanation: 'وكيفية النفخ الله أعلم بها، لأنها من الغيب.', notes: [], page: 45 },
    { term: 'ذراع', translit: 'dhirāʿ', meaning: 'تمثيل للقرب من الموت.', explanation: '', notes: [], page: 46 },
    { term: 'المؤمن القوي', translit: 'al-muʾmin al-qawī', meaning: 'القوي في إيمانه، يحمله على القيام بما أوجب الله.', explanation: 'وقيل: القوي في إيمانه وبدنه وعمله.', notes: [], page: 51 },
    { term: 'لا تعجز', translit: 'lā taʿjiz', meaning: 'استمر في العمل ولا تتأخر.', explanation: '', notes: [], page: 52 },
    { term: 'لو تفتح عمل الشيطان', translit: 'law taftaḥu ʿamal ash-shayṭān', meaning: 'تفتح الندم والأحزان والوساوس والأمر قد انتهى.', explanation: '', notes: [], page: 52 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'ترتيب الدعوة في حديث معاذ',
      intro: 'الأهم فالأهم.',
      nodes: [
        { label: 'الشهادتان', sub: 'بدأ بها سائر الأنبياء', page: 35 },
        { label: 'الصلوات الخمس', sub: 'أهم شيء بعد الشهادتين', page: 35 },
        { label: 'الزكاة', sub: 'تؤخذ من أغنيائهم فترد في فقرائهم', page: 36 },
        { label: 'العدل في الأخذ', sub: 'إياك وكرائم أموالهم، واتق دعوة المظلوم', page: 36 }
      ]
    },
    {
      type: 'steps',
      title: 'علاج الوسوسة في ذات الله',
      intro: 'كما جمعه الكتاب من الروايات.',
      nodes: [
        { label: 'الاستعاذة بالله', page: 38 },
        { label: 'الانتهاء وترك الاسترسال', page: 38 },
        { label: 'قول: آمنت بالله ورسله', page: 38 },
        { label: 'قراءة ﴿قل هو الله أحد﴾', page: 38 },
        { label: 'التفل عن اليسار ثلاثًا', page: 38 }
      ]
    },
    {
      type: 'timeline',
      title: 'أطوار الجنين',
      intro: 'كما في الشرح الإجمالي للحديث التاسع.',
      nodes: [
        { label: 'نطفة', sub: 'أربعون يومًا', page: 46 },
        { label: 'علقة', sub: 'أربعون يومًا', page: 46 },
        { label: 'مضغة', sub: 'أربعون يومًا، مخلقة وغير مخلقة', page: 46 },
        { label: 'نفخ الروح', sub: 'بعد تمام مائة وعشرين يومًا', page: 46 }
      ]
    },
    {
      type: 'cards',
      title: 'الكلمات الأربع',
      intro: 'يؤمر بها الملك.',
      nodes: [
        { label: 'رزقه', page: 45 },
        { label: 'أجله', sub: 'مدة بقائه في الدنيا', page: 45 },
        { label: 'عمله', sub: 'القولي والفعلي والقلبي', page: 46 },
        { label: 'شقي أو سعيد', page: 45 }
      ]
    },
    {
      type: 'compare',
      title: 'استعمالات «لو»',
      intro: 'فائدة إثرائية في الكتاب.',
      columns: ['المنهي عنه', 'الجائز'],
      rows: [
        { label: 'الصورة', cells: ['الحزن على الماضي والجزع من المقدور', 'بغير تأسف على ما مضى، أو لبيان محبة الخير'] },
        { label: 'مثال', cells: ['«لو أني فعلت كان كذا وكذا»', '﴿لو كان فيهما آلهة إلا الله لفسدتا﴾ [الأنبياء: ٢٢]'] }
      ],
      page: 53
    }
  ],
  sections: [
    { title: 'حال المدعوين', text: 'أخبر النبي ﷺ معاذًا بحال أهل اليمن ليستعد وينزلهم منزلتهم، ولئلا يوردوا عليه من الشبهات ما ينقطع به.', more: '', page: 35 },
    { title: 'البداءة بالتوحيد', text: 'الواجب البداءة بالدعوة إلى التوحيد، كما بدأ بها يوسف مع صاحبي السجن، وبدأ بها سائر الأنبياء.', more: '[يوسف: ٣٩–٤٠]، [الأعراف: ٥٩]', page: 35 },
    { title: 'من أحكام الزكاة', text: 'الزكاة واجبة في المال ولها تعلق بالذمة؛ ولا تجب على الفقير ولا تعطى لغني؛ ويجوز الاقتصار على صنف واحد من الثمانية؛ وسميت صدقة لأن بذل المال دليل على صدق باذله.', more: '', page: 36 },
    { title: 'لماذا يوسوس الشيطان للمؤمن؟ (للاطلاع فقط)', text: 'إنما يوسوس لمن أيس من إغوائه فينكد عليه بالوسوسة لعجزه عنه، وأما الكافر فيأتيه من حيث شاء.', more: FYI, page: 39 },
    { title: 'ضعف كيد الشيطان', text: 'في حال يأسه من إغواء المؤمن يلجأ إلى الوسوسة، ﴿إن كيد الشيطان كان ضعيفًا﴾؛ ويجب التوقف عن المراء في ذات الله وصفاته.', more: '[النساء: ٧٦]', page: 40 },
    { title: 'الموعظة عند القبر (للاطلاع فقط)', text: 'تستحب الموعظة الخاصة عند القبر، لأن رؤية الميت وذكر الموت يرقق القلب.', more: FYI, page: 42 },
    { title: 'القدر والعمل', text: 'الله لم يزل عالمًا بمن يطيعه ومن يعصيه، ولم يضطر أحدًا للعمل؛ فهذا الخبر لا يقتضي ترك العمل بل يبعث على كثرته والحذر من الإعجاب، ولا يقنط العاصي بل يبادر بالتوبة.', more: '[الأحقاف: ١٤]، [فصلت: ٢٨]، [النجم: ٣١]', page: 43 },
    { title: 'سوء الخاتمة (للاطلاع فقط)', text: 'من يعمل بعمل أهل الجنة فيما يبدو للناس ثم يختم له بعمل أهل النار، فلدسيسة في قلبه؛ وليس بظلم من الله، فما من أحد يقبل على الله بصدق وإخلاص فيخذله الله أبدًا.', more: FYI, page: 46 },
    { title: 'إلقاء النطفة (للاطلاع فقط)', text: 'اختلفوا في إلقاء النطفة قبل الأربعين: فأجازه بعضهم، ومنعه بعضهم لقوله: ﴿فجعلناه في قرار مكين﴾؛ قال الكتاب: وهذا أقرب إلى الصواب، لكنه ليس كتحريم ما بعد بلوغه أربعة أشهر.', more: '[المرسلات: ٢١–٢٢]. ' + FYI, page: 48 },
    { title: 'السقط بعد نفخ الروح (للاطلاع فقط)', text: 'إذا سقط بعد أربعة أشهر غسل وكفن وصلي عليه ودفن في مقابر المسلمين وسمي وعق عنه؛ ويحرم إسقاطه بعد نفخ الروح بكل حال.', more: FYI, page: 50 },
    { title: 'احرص على ما ينفعك', text: 'إذا تعارضت منفعة الدين ومنفعة الدنيا قدم منفعة الدين، لأن الدين إذا صلح صلحت الدنيا؛ ومن ضيع حقه بترك الأسباب فهو عاجز مفرط.', more: '', page: 52 },
    { title: 'الله يحب حقيقة (للاطلاع فقط)', text: 'قال ابن القيم: تضمن الحديث أن الله موصوف بالمحبة وأنه يحب حقيقة، وأنه يحب مقتضى أسمائه وصفاته، فهو القوي يحب المؤمن القوي، وأن محبته للمؤمنين تتفاضل.', more: FYI, page: 54 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'ترتيب الدعوة', items: ['الشهادتان', 'الصلاة', 'الزكاة'], page: 35, origin: 'boek' },
    { kind: 'opsomming', title: 'الكلمات الأربع المكتوبة', items: ['الرزق', 'الأجل', 'العمل', 'شقي أو سعيد'], page: 49, origin: 'boek' },
    { kind: 'bewijs', title: 'القدر لا يمنع العمل', items: ['«اعملوا فكل ميسر لما خلق له».', '﴿فأما من أعطى واتقى. وصدق بالحسنى. فسنيسره لليسرى﴾ [الليل: ٥–٧]'], page: 41, origin: 'boek' },
    { kind: 'onderscheid', title: '«لو»', items: ['منهي عنها: حزنًا على الماضي وجزعًا من المقدور.', 'جائزة: بغير تأسف، أو لبيان محبة الخير.'], page: 53, origin: 'boek' },
    { kind: 'opsomming', title: 'ثلاث وصايا في حديث المؤمن القوي', items: ['احرص على ما ينفعك', 'استعن بالله ولا تعجز', 'قل: قدر الله وما شاء فعل'], page: 53, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'يبدأ الداعية بالتوحيد ثم الصلاة ثم الزكاة، ويعرف حال المدعوين.',
    'دعوة المظلوم مستجابة.',
    'من وسوس له الشيطان في ذات الله فليستعذ بالله ولينته.',
    'كل ميسر لما خلق له، فاعملوا.',
    'يكتب للإنسان رزقه وأجله وعمله وشقي أو سعيد، والأعمال بالخواتيم.',
    'المؤمن القوي خير، و«لو» تفتح عمل الشيطان.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'بماذا أمر النبي ﷺ معاذًا أن يبدأ دعوته؟', options: ['بالشهادتين', 'بالصلاة', 'بالزكاة', 'بالصيام'], answer: 0, explain: 'وبها بدأ سائر الأنبياء.', page: 35 },
    { type: 'tf', q: 'يجوز للساعي أن يأخذ في الزكاة أنفس الأموال.', options: ['صواب', 'خطأ'], answer: 1, explain: '«فإياك وكرائم أموالهم»، بل يأخذ الوسط.', page: 36 },
    { type: 'mc', q: 'ماذا يفعل من وسوس له الشيطان: من خلق ربك؟', options: ['يستعيذ بالله وينتهي', 'يجادله حتى يقطعه', 'يسأل عن ذلك الناس', 'يتفكر فيه حتى يجد الجواب'], answer: 0, explain: '«فليستعذ بالله ولينته».', page: 38 },
    { type: 'mc', q: 'لماذا يوسوس الشيطان للمؤمن؟', options: ['لإياسه من إغوائه', 'لقوته عليه', 'لأنه لا يوسوس للكافر أبدًا', 'لأن المؤمن ضعيف الإيمان'], answer: 0, explain: 'فرجع إلى نوع من الكيد بالوسوسة.', page: 39 },
    { type: 'tf', q: 'سبق الكتابة يقتضي ترك العمل.', options: ['صواب', 'خطأ'], answer: 1, explain: '«اعملوا فكل ميسر لما خلق له».', page: 43 },
    { type: 'mc', q: 'متى تنفخ الروح في الجنين؟', options: ['بعد تمام مائة وعشرين يومًا', 'بعد أربعين يومًا', 'بعد تسعين يومًا', 'عند الولادة'], answer: 0, explain: 'بعد أطوار النطفة والعلقة والمضغة.', page: 46 },
    { type: 'mc', q: 'ما معنى «الصادق المصدوق»؟', options: ['الصادق في قوله، المصدوق فيما يأتيه من الوحي', 'الذي لا يكذب أبدًا فقط', 'الذي صدقه الناس', 'الذي يصدق غيره'], answer: 0, explain: 'كما في المفردات.', page: 45 },
    { type: 'mc', q: 'ماذا يقول المؤمن إذا أصابه شيء بعد بذل الجهد؟', options: ['قدر الله وما شاء فعل', 'لو أني فعلت كذا', 'لا حول لي', 'هذا ظلم'], answer: 0, explain: 'فإن «لو» تفتح عمل الشيطان.', page: 52 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٣٧ و٤٠ و٤٤ و٥٠ و٥٤. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Hadith 6–10: oproep en voorbeschikking',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'De raad van de Profeet ﷺ aan Muʿādh over de volgorde van de oproep, de remedie tegen de influistering van de duivel over Allah Zelf, het geloof in de voorbeschikking samen met handelen in de hadith van ʿAlī, de fasen van de schepping en wat voor de mens wordt opgeschreven in de hadith van Ibn Masʿūd, en tot slot de sterke gelovige, streven naar wat baat en de regels rond "had ik maar".',
  source: { ...source, label: 'Kitāb al-Ḥadīth (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De vijf hadith zoals in het boek.',
    root: { label: 'Hadith 6–10', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Muʿādh naar Jemen', sub: 'les 8', page: 33, children: ['eerst de eenheid van Allah', 'dan gebed en zakāt', 'het smeekgebed van de onderdrukte'] },
      { label: 'De duivel komt naar jullie', sub: 'les 9', page: 38, children: ['toevlucht zoeken', 'ermee ophouden', 'ik geloof in Allah'] },
      { label: 'Handel, ieder wordt geholpen', sub: 'les 10', page: 41, children: ['het voorafgaande schrijven', 'middelen', 'geen passief afwachten'] },
      { label: 'De schepping in de baarmoeder', sub: 'les 11–12', page: 45, children: ['fasen van de foetus', 'de vier dingen', 'daden tellen naar het einde'] },
      { label: 'De sterke gelovige', sub: 'les 13', page: 51, children: ['streef naar wat baat', 'vraag Allah om hulp', 'Allah heeft het beschikt'] }
    ]
  },
  points: [
    { text: 'Men begint met de oproep tot de eenheid van Allah, dan het gebed, dan de zakāt.', page: 35 },
    { text: 'Wie oproept, moet de situatie kennen van wie hij oproept, zodat hij zich in kennis en karakter voorbereidt.', page: 35 },
    { text: 'Het smeekgebed van wie onrecht is aangedaan wordt verhoord; daartussen en Allah is geen sluier.', page: 36 },
    { text: 'Wie influistering over Allah Zelf ervaart, zoekt toevlucht bij Allah en houdt ermee op; twisten over Allahs wezen en eigenschappen is verboden.', page: 40 },
    { text: 'Geluk en ongeluk liggen in Allahs voorafgaande beschikking; dat is geen reden om minder te doen, maar om meer te doen.', page: 43 },
    { text: 'De mens weet niet wat voor hem geschreven is, daarom is hem opgedragen te streven naar wat hem baat.', page: 49 },
    { text: 'Daden tellen naar het einde; laat niemand zich misleiden door de buitenkant van daden.', page: 49 },
    { text: 'De sterke gelovige is beter dan de zwakke; overkomt je iets na je inspanning, zeg dan: Allah heeft het beschikt en Hij doet wat Hij wil.', page: 53 }
  ],
  terms: [
    { term: 'كرائم الأموال', translit: 'karāʾim al-amwāl', meaning: 'Het kostbaarste bezit: dieren met veel melk, mooi uiterlijk, veel vlees of wol.', explanation: 'De inner neemt niet het kostbaarste, maar het middelmatige.', notes: [], page: 33 },
    { term: 'ليس بينها وبين الله حجاب', translit: 'laysa baynahā wa-bayna llāhi ḥijāb', meaning: 'Het wordt gehoord en niet afgewezen.', explanation: 'De waarschuwing staat hier omdat Muʿādh met hun bezit te maken zou krijgen.', notes: [], page: 33 },
    { term: 'فليستعذ بالله', translit: 'fal-yastaʿidh bi-llāh', meaning: 'Laat hem zeggen: ik zoek mijn toevlucht bij Allah tegen de vervloekte duivel.', explanation: '', notes: [], page: 38 },
    { term: 'ولينته', translit: 'wal-yantahi', meaning: 'Laat hem stoppen en er niet in meegaan.', explanation: '', notes: [], page: 38 },
    { term: 'ينكت', translit: 'yankut', meaning: 'Met iets op de grond tikken en er een spoor in maken.', explanation: 'Ibn Fāris: de wortel duidt op een lichte inwerking op iets.', notes: [], page: 41 },
    { term: 'كتابنا', translit: 'kitābunā', meaning: 'Wat van eeuwigheid is opgeschreven.', explanation: '"Zullen we dan niet op ons geschrevene vertrouwen en het handelen laten?"', notes: [], page: 41 },
    { term: 'ميسر', translit: 'muyassar', meaning: 'Geholpen en voorbereid.', explanation: '', notes: [], page: 41 },
    { term: 'الصادق المصدوق', translit: 'aṣ-ṣādiq al-maṣdūq', meaning: 'De waarachtige in zijn woorden, wiens openbaring waar is.', explanation: '', notes: [], page: 45 },
    { term: 'نطفة', translit: 'nuṭfa', meaning: 'Een druppel zaad.', explanation: '', notes: [], page: 45 },
    { term: 'علقة', translit: 'ʿalaqa', meaning: 'Een klonter dik bloed.', explanation: '', notes: [], page: 45 },
    { term: 'مضغة', translit: 'muḍgha', meaning: 'Een klompje vlees, zo groot als men kauwt.', explanation: '', notes: ['al-Ḥajj 22:5'], page: 45 },
    { term: 'الروح', translit: 'ar-rūḥ', meaning: 'Datgene waardoor het lichaam leeft.', explanation: 'Hoe het inblazen gaat, weet Allah; het hoort bij het verborgene.', notes: [], page: 45 },
    { term: 'ذراع', translit: 'dhirāʿ', meaning: 'Een el: beeld voor de nabijheid van de dood.', explanation: '', notes: [], page: 46 },
    { term: 'المؤمن القوي', translit: 'al-muʾmin al-qawī', meaning: 'Sterk in geloof, zodat het hem draagt om te doen wat Allah verplicht stelde.', explanation: 'Ook gezegd: sterk in geloof, lichaam en daden.', notes: [], page: 51 },
    { term: 'لا تعجز', translit: 'lā taʿjiz', meaning: 'Ga door met het werk en blijf niet achter.', explanation: '', notes: [], page: 52 },
    { term: 'لو تفتح عمل الشيطان', translit: 'law taftaḥu ʿamal ash-shayṭān', meaning: '"Had ik maar" opent spijt, verdriet en influistering, terwijl de zaak al voorbij is.', explanation: '', notes: [], page: 52 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De volgorde van de oproep in de hadith van Muʿādh',
      intro: 'Het belangrijkste eerst.',
      nodes: [
        { label: 'De twee getuigenissen', sub: 'waarmee alle profeten begonnen', page: 35 },
        { label: 'De vijf gebeden', sub: 'het belangrijkste na de getuigenissen', page: 35 },
        { label: 'De zakāt', sub: 'van hun rijken genomen en aan hun armen gegeven', page: 36 },
        { label: 'Rechtvaardig innen', sub: 'niet het kostbaarste nemen; vrees het smeekgebed van de onderdrukte', page: 36 }
      ]
    },
    {
      type: 'steps',
      title: 'De remedie tegen influistering over Allah',
      intro: 'Zoals het boek uit de overleveringen samenbrengt.',
      nodes: [
        { label: 'Toevlucht zoeken bij Allah', page: 38 },
        { label: 'Ermee ophouden', page: 38 },
        { label: 'Zeggen: ik geloof in Allah en Zijn boodschappers', page: 38 },
        { label: 'Sūrat al-Ikhlāṣ reciteren', page: 38 },
        { label: 'Drie keer naar links spuwen', page: 38 }
      ]
    },
    {
      type: 'timeline',
      title: 'De fasen van de foetus',
      intro: 'Zoals in de uitleg van hadith 9.',
      nodes: [
        { label: 'Druppel (nuṭfa)', sub: 'veertig dagen', page: 46 },
        { label: 'Klonter (ʿalaqa)', sub: 'veertig dagen', page: 46 },
        { label: 'Klompje vlees (muḍgha)', sub: 'veertig dagen, gevormd en ongevormd', page: 46 },
        { label: 'Inblazen van de geest', sub: 'na honderdtwintig dagen', page: 46 }
      ]
    },
    {
      type: 'cards',
      title: 'De vier dingen',
      intro: 'Die de engel krijgt opgedragen.',
      nodes: [
        { label: 'Levensonderhoud', page: 45 },
        { label: 'Levensduur', sub: 'hoe lang hij op aarde blijft', page: 45 },
        { label: 'Daden', sub: 'in woord, daad en hart', page: 46 },
        { label: 'Ongelukkig of gelukkig', page: 45 }
      ]
    },
    {
      type: 'compare',
      title: 'Het gebruik van "had ik maar" (law)',
      intro: 'Een verrijkende les in het boek.',
      columns: ['Verboden', 'Toegestaan'],
      rows: [
        { label: 'Vorm', cells: ['treuren over het verleden en morren over wat beschikt is', 'zonder spijt over het verleden, of om liefde voor het goede uit te drukken'] },
        { label: 'Voorbeeld', cells: ['"had ik maar zo gedaan, dan was het zo gegaan"', '"als er in beide goden waren naast Allah, dan waren ze in verval geraakt" (al-Anbiyāʾ 21:22)'] }
      ],
      page: 53
    }
  ],
  sections: [
    { title: 'De situatie van wie men oproept', text: 'De Profeet ﷺ vertelde Muʿādh hoe de mensen van Jemen waren, zodat hij zich kon voorbereiden, hen naar hun positie kon benaderen, en niet stil zou vallen bij twijfels die ze zouden opwerpen.', more: '', page: 35 },
    { title: 'Beginnen met de eenheid van Allah', text: 'Men moet beginnen met de oproep tot de eenheid van Allah, zoals Yūsuf deed met zijn twee medegevangenen en zoals alle profeten begonnen.', more: 'Yūsuf 12:39–40, al-Aʿrāf 7:59', page: 35 },
    { title: 'Uit de regels van de zakāt', text: 'Zakāt is verplicht over het bezit en rust ook op de persoon; ze is niet verplicht voor de arme en wordt niet aan een rijke gegeven; men mag haar aan één van de acht groepen geven; ze heet ṣadaqa omdat het geven van bezit de oprechtheid van de gever bewijst.', more: '', page: 36 },
    { title: 'Waarom de duivel de gelovige influistert (alleen ter kennisname)', text: 'Hij fluistert alleen in bij wie hij niet kan misleiden, om hem te kwellen uit onmacht; de ongelovige benadert hij zoals hij wil.', more: FYI_NL, page: 39 },
    { title: 'De list van de duivel is zwak', text: 'Wanneer hij de gelovige niet kan misleiden, neemt hij zijn toevlucht tot influistering; "de list van de duivel is zwak". Over Allahs wezen en eigenschappen moet men niet twisten.', more: 'an-Nisāʾ 4:76', page: 40 },
    { title: 'Vermaning bij het graf (alleen ter kennisname)', text: 'Een korte vermaning bij het graf is aanbevolen, omdat het zien van de dode en het denken aan de dood het hart zacht maken.', more: FYI_NL, page: 42 },
    { title: 'Voorbeschikking en handelen', text: 'Allah weet van eeuwigheid wie Hem gehoorzaamt en wie niet, maar dwingt niemand. Dit bericht is dus geen reden om het handelen te laten, maar om meer te doen en zich niet op zijn daden te verheffen; en de zondaar wanhoopt niet, maar haast zich tot berouw.', more: 'al-Aḥqāf 46:14, Fuṣṣilat 41:28, an-Najm 53:31', page: 43 },
    { title: 'Een slecht einde (alleen ter kennisname)', text: 'Wie voor het oog van de mensen de daden van het Paradijs doet en toch met de daden van het Vuur eindigt, had een verborgen bederf in zijn hart. Dat is geen onrecht van Allah: wie zich oprecht tot Allah wendt, laat Hij nooit in de steek.', more: FYI_NL, page: 46 },
    { title: 'De druppel verwijderen (alleen ter kennisname)', text: 'Over het verwijderen van de druppel vóór veertig dagen verschillen de geleerden: sommigen staan het toe, anderen niet vanwege "en Wij plaatsten hem in een veilige rustplaats". Het boek noemt het tweede het dichtst bij het juiste, maar niet zo streng verboden als na vier maanden.', more: 'al-Mursalāt 77:21–22. ' + FYI_NL, page: 48 },
    { title: 'Een miskraam na het inblazen van de geest (alleen ter kennisname)', text: 'Komt het kind na vier maanden ter wereld, dan wordt het gewassen, in doeken gewikkeld, wordt over hem gebeden, op een moslimbegraafplaats begraven, krijgt het een naam en wordt de ʿaqīqa gedaan. Na het inblazen van de geest is afbreken in alle gevallen verboden.', more: FYI_NL, page: 50 },
    { title: 'Streef naar wat je baat', text: 'Botsen voordeel voor de godsdienst en voordeel voor de wereld, dan gaat de godsdienst voor, want als de godsdienst goed is, wordt ook de wereld goed. Wie zijn recht verspeelt door de middelen te laten, is nalatig.', more: '', page: 52 },
    { title: 'Allah heeft werkelijk lief (alleen ter kennisname)', text: 'Ibn al-Qayyim: de hadith leert dat Allah liefde als eigenschap heeft en werkelijk liefheeft, dat Hij liefheeft wat Zijn namen en eigenschappen vragen, zodat de Sterke de sterke gelovige liefheeft, en dat Zijn liefde voor de gelovigen in graad verschilt.', more: FYI_NL, page: 54 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'De volgorde van de oproep', items: ['de twee getuigenissen', 'het gebed', 'de zakāt'], page: 35, origin: 'boek' },
    { kind: 'opsomming', title: 'De vier dingen die worden opgeschreven', items: ['levensonderhoud', 'levensduur', 'daden', 'ongelukkig of gelukkig'], page: 49, origin: 'boek' },
    { kind: 'bewijs', title: 'De voorbeschikking houdt handelen niet tegen', items: ['"Handel, want ieder wordt geholpen naar waarvoor hij geschapen is."', '"Wie geeft en godvrezend is, en het beste voor waar houdt, hem maken Wij de weg naar het gemak makkelijk" (al-Layl 92:5–7)'], page: 41, origin: 'boek' },
    { kind: 'onderscheid', title: '"Had ik maar"', items: ['Verboden: uit verdriet om het verleden en morren over de beschikking.', 'Toegestaan: zonder spijt, of om liefde voor het goede uit te drukken.'], page: 53, origin: 'boek' },
    { kind: 'opsomming', title: 'Drie adviezen in de hadith van de sterke gelovige', items: ['streef naar wat je baat', 'vraag Allah om hulp en geef niet op', 'zeg: Allah heeft het beschikt en Hij doet wat Hij wil'], page: 53, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Wie oproept, begint met de eenheid van Allah, dan het gebed, dan de zakāt, en kent de situatie van zijn gehoor.',
    'Het smeekgebed van de onderdrukte wordt verhoord.',
    'Fluistert de duivel "wie heeft jouw Heer geschapen?", zoek dan toevlucht bij Allah en houd op.',
    'Ieder wordt geholpen naar waarvoor hij geschapen is; dus handel.',
    'Levensonderhoud, levensduur, daden en geluk of ongeluk worden opgeschreven; daden tellen naar het einde.',
    'De sterke gelovige is beter, en "had ik maar" opent het werk van de duivel.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarmee moest Muʿādh zijn oproep beginnen?', options: ['de twee getuigenissen', 'het gebed', 'de zakāt', 'het vasten'], answer: 0, explain: 'Daarmee begonnen alle profeten.', page: 35 },
    { type: 'tf', q: 'De inner mag bij de zakāt het kostbaarste bezit nemen.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Pas op voor hun kostbaarste bezit"; hij neemt het middelmatige.', page: 36 },
    { type: 'mc', q: 'Wat doet wie de duivel hoort influisteren: "wie heeft jouw Heer geschapen?"', options: ['toevlucht zoeken bij Allah en ermee ophouden', 'met hem in discussie gaan tot hij stopt', 'het aan mensen vragen', 'erover nadenken tot hij het antwoord vindt'], answer: 0, explain: '"Laat hem toevlucht zoeken bij Allah en ermee ophouden."', page: 38 },
    { type: 'mc', q: 'Waarom fluistert de duivel de gelovige in?', options: ['omdat hij hem niet kan misleiden', 'omdat hij sterker is dan hij', 'omdat hij de ongelovige nooit influistert', 'omdat de gelovige zwak in geloof is'], answer: 0, explain: 'Daarom grijpt hij terug naar influistering.', page: 39 },
    { type: 'tf', q: 'Omdat alles al is opgeschreven, hoeft men niet te handelen.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Handel, want ieder wordt geholpen naar waarvoor hij geschapen is."', page: 43 },
    { type: 'mc', q: 'Wanneer wordt de geest in de foetus geblazen?', options: ['na honderdtwintig dagen', 'na veertig dagen', 'na negentig dagen', 'bij de geboorte'], answer: 0, explain: 'Na de fasen van druppel, klonter en klompje vlees.', page: 46 },
    { type: 'mc', q: 'Wat betekent aṣ-ṣādiq al-maṣdūq?', options: ['waarachtig in zijn woorden, en zijn openbaring is waar', 'alleen: hij liegt nooit', 'iemand die de mensen geloven', 'iemand die anderen gelooft'], answer: 0, explain: 'Zoals in de woordenlijst.', page: 45 },
    { type: 'mc', q: 'Wat zegt de gelovige als hem na zijn inspanning iets overkomt?', options: ['Allah heeft het beschikt en Hij doet wat Hij wil', 'had ik maar zo gedaan', 'ik kan er niets aan doen', 'dit is onrecht'], answer: 0, explain: 'Want "had ik maar" opent het werk van de duivel.', page: 52 }
  ]),
  note: 'Oefeningen van het boek op p. 37, 40, 44, 50 en 54. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-hadith', chapter: '8', unit: 2, ar, nl }
