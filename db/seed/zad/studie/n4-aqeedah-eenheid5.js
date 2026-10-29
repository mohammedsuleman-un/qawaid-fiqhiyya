// Hoofdstukkaart bij العقيدة (٤), eenheid 5: الأولياء وكراماتهم (lessen 19–23, boek p. 53–69).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De pagina's 60–62 zijn in het boek "alleen ter kennisname".
// Weggelaten: de hadith over het verlichten van graven (p. 65), omdat de toevoeging «والسرج» als
// zwak bekendstaat (alleen de uitspraak van Ibn Taymiyya is opgenomen), en de bewoording «بارزني
// بالمحاربة» (p. 58); de hadith over de walī staat hier in de bewoording van al-Bukhārī (p. 54).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٤)، سلسلة زاد العلمية',
  pages: '53–69',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlAqeedah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'إن الله قال: من عادى لي وليا فقد آذنته بالحرب', takhrij: 'رواه البخاري', note: 'في شرف منزلة الولي.', pages: [54], nl: 'Allah zei: wie een vriend (walī) van Mij vijandig behandelt, aan hem verklaar Ik de oorlog', nlNote: 'Over de hoge rang van de walī.' },
  { narrator: '', text: 'إياكم والغلو في الدين؛ فإنما أهلك من كان قبلكم الغلو في الدين', takhrij: 'رواه النسائي وابن ماجه وصححه الألباني', note: FYI, pages: [62], nl: 'Pas op voor overdrijving in de godsdienst, want wat de mensen vóór jullie te gronde richtte, was overdrijving in de godsdienst', nlNote: FYI_NL },
  { narrator: 'عمر', text: 'لا تطروني كما أطرت النصارى ابن مريم، فإنما أنا عبده، فقولوا: عبد الله ورسوله', takhrij: 'رواه البخاري', note: FYI, pages: [62], nl: 'Prijs mij niet overdreven zoals de christenen de zoon van Maryam overdreven prezen; ik ben slechts Zijn dienaar, zeg dus: de dienaar van Allah en Zijn Boodschapper', nlNote: FYI_NL },
  { narrator: 'ابن عباس', text: 'أسماء رجال صالحين من قوم نوح، فلما هلكوا أوحى الشيطان إلى قومهم أن انصبوا إلى مجالسهم التي كانوا يجلسون أنصابا، وسموها بأسمائهم، ففعلوا، فلم تعبد، حتى إذا هلك أولئك وتنسخ العلم عبدت', takhrij: 'رواه البخاري', note: 'عن أصنام قوم نوح؛ الغلو في الصالحين أول سبب للشرك. ' + FYI, pages: [62], nl: 'Het waren namen van vrome mannen uit het volk van Nūḥ. Toen zij gestorven waren, fluisterde de duivel hun volk in om op hun vaste zitplaatsen beelden op te richten en die naar hen te noemen. Dat deden ze, maar ze werden niet aanbeden; toen die generatie stierf en de kennis verdween, werden ze aanbeden', nlNote: 'Over de afgoden van het volk van Nūḥ: overdrijving met vromen was de eerste oorzaak van shirk. ' + FYI_NL },
  { narrator: '', text: 'زوروا القبور؛ فإنها تذكر الموت', takhrij: 'عند مسلم', note: 'الغاية الشرعية من زيارة القبور.', pages: [64], nl: 'bezoek de graven, want zij herinneren aan de dood', nlNote: 'Het religieuze doel van grafbezoek.' },
  { narrator: 'عائشة', text: 'السلام على أهل الديار من المؤمنين والمسلمين، ويرحم الله المستقدمين منا والمستأخرين، وإنا إن شاء الله بكم للاحقون', takhrij: 'رواه مسلم', note: 'علمها النبي ﷺ ما تقول لأهل البقيع.', pages: [64], nl: 'Vrede over de bewoners van deze woningen, gelovigen en moslims; moge Allah genadig zijn voor wie ons voorgingen en wie na ons komen; en wij zullen, als Allah wil, jullie volgen', nlNote: 'De Profeet ﷺ leerde haar wat ze tegen de begravenen van al-Baqīʿ moest zeggen.' },
  { narrator: 'أبو مرثد الغنوي', text: 'لا تجلسوا على القبور، ولا تصلوا إليها', takhrij: 'رواه مسلم', note: 'النهي عن الصلاة إلى القبور.', pages: [65], nl: 'zit niet op de graven en bid niet in hun richting', nlNote: 'Het verbod om in de richting van graven te bidden.' },
  { narrator: 'ابن عباس', text: 'لا تصلوا إلى قبر، ولا تصلوا على قبر', takhrij: 'أخرجه الطبراني وصححه الألباني', note: '', pages: [65], nl: 'bid niet in de richting van een graf en bid niet op een graf', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'لا تجعلوا بيوتكم قبورا، ولا تجعلوا قبري عيدا، وصلوا علي؛ فإن صلاتكم تبلغني حيث كنتم', takhrij: 'رواه أبو داود وصححه الألباني', note: 'فإذا نهى عن اتخاذ قبره ﷺ عيدا فغيره أولى.', pages: [66], nl: 'maak van jullie huizen geen graven en maak van mijn graf geen feestplaats; vraag zegen over mij, want jullie zegenbede bereikt mij waar jullie ook zijn', nlNote: 'Als hij dit verbood voor zijn eigen graf ﷺ, dan geldt het voor andere graven zeker.' },
  { narrator: 'أبو الهياج الأسدي', text: 'ألا أبعثك على ما بعثني عليه رسول الله ﷺ؟ أن لا تدع تمثالا إلا طمسته، ولا قبرا مشرفا إلا سويته', takhrij: 'رواه مسلم', note: 'قاله علي لأبي الهياج.', pages: [66], nl: 'Zal ik je niet sturen met de opdracht waarmee de Boodschapper van Allah ﷺ mij stuurde? Laat geen beeld staan zonder het uit te wissen, en geen verhoogd graf zonder het gelijk te maken', nlNote: 'Gezegd door ʿAlī tegen Abū al-Hayyāj.' },
  { narrator: 'جابر', text: 'نهى رسول الله ﷺ أن يجصص القبر، وأن يقعد عليه، وأن يبنى عليه', takhrij: 'رواه مسلم', note: 'وفي رواية الترمذي: «وأن يكتب عليها، وأن توطأ».', pages: [67], nl: 'De Boodschapper van Allah ﷺ verbood het graf te pleisteren, erop te zitten en erop te bouwen', nlNote: 'In de overlevering van at-Tirmidhī: "en erop te schrijven en erop te lopen".' },
  { narrator: 'عائشة', text: 'إن أولئك إذا كان فيهم الرجل الصالح فمات بنوا على قبره مسجدا، وصوروا فيه تلك الصور، أولئك شرار الخلق عند الله يوم القيامة', takhrij: 'متفق عليه', note: 'لما ذكرت أم حبيبة وأم سلمة كنيسة بالحبشة فيها تصاوير.', pages: [67], nl: 'Als er onder hen een vrome man was die stierf, bouwden ze op zijn graf een gebedsplaats en maakten er die afbeeldingen in; zij zijn de slechtste schepselen bij Allah op de Dag der Opstanding', nlNote: 'Toen Umm Ḥabība en Umm Salama vertelden over een kerk met afbeeldingen in Abessinië.' },
  { narrator: 'عائشة وعبد الله بن عباس', text: 'لعنة الله على اليهود والنصارى، اتخذوا قبور أنبيائهم مساجد', takhrij: 'متفق عليه', note: 'قاله في مرض موته يحذر ما صنعوا.', pages: [67], nl: 'de vloek van Allah over de joden en de christenen: zij maakten de graven van hun profeten tot gebedsplaatsen', nlNote: 'Gezegd in zijn laatste ziekte, als waarschuwing tegen wat zij deden.' },
  { narrator: 'جندب', text: 'ألا وإن من كان قبلكم كانوا يتخذون قبور أنبيائهم وصالحيهم مساجد، ألا فلا تتخذوا القبور مساجد، إني أنهاكم عن ذلك', takhrij: 'رواه مسلم', note: 'قاله قبل موته بخمس.', pages: [68], nl: 'Zij die vóór jullie waren, maakten de graven van hun profeten en vromen tot gebedsplaatsen. Maak de graven dus niet tot gebedsplaatsen; dat verbied ik jullie', nlNote: 'Gezegd vijf dagen voor zijn dood.' },
  { narrator: 'أبو هريرة', text: 'لا تشد الرحال إلا إلى ثلاثة مساجد: المسجد الحرام، ومسجد الرسول ﷺ، ومسجد الأقصى', takhrij: 'متفق عليه', note: 'فيدخل في النهي شد الرحال لزيارة القبور والمشاهد.', pages: [68], nl: 'men reist niet speciaal af behalve naar drie moskeeën: de Heilige Moskee, de moskee van de Boodschapper ﷺ en de al-Aqṣā-moskee', nlNote: 'Daaronder valt ook afreizen om graven en heiligdommen te bezoeken.' },
  { narrator: 'بصرة بن أبي بصرة', text: 'لا تعمل المطي إلا إلى ثلاثة مساجد: المسجد الحرام، ومسجدي، ومسجد بيت المقدس', takhrij: 'رواه أحمد والنسائي وصححه الألباني', note: 'قاله لأبي هريرة لما رجع من الطور.', pages: [68], nl: 'rijdieren worden alleen ingezet voor drie moskeeën: de Heilige Moskee, mijn moskee en de moskee van Jeruzalem', nlNote: 'Hij zei dit tegen Abū Hurayra toen die terugkwam van de berg aṭ-Ṭūr.' }
]

const TAKHRIJ_NL = {
  'رواه البخاري': 'al-Bukhārī',
  'رواه مسلم': 'Muslim',
  'عند مسلم': 'Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه النسائي وابن ماجه وصححه الألباني': 'an-Nasāʾī en Ibn Māja; authentiek volgens al-Albānī',
  'أخرجه الطبراني وصححه الألباني': 'aṭ-Ṭabarānī; authentiek volgens al-Albānī',
  'رواه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه أحمد والنسائي وصححه الألباني': 'Aḥmad en an-Nasāʾī; authentiek volgens al-Albānī'
}
const NARRATOR_NL = { 'عمر': 'ʿUmar ibn al-Khaṭṭāb', 'ابن عباس': 'Ibn ʿAbbās', 'عائشة': 'ʿĀʾisha', 'أبو مرثد الغنوي': 'Abū Marthad al-Ghanawī', 'أبو هريرة': 'Abū Hurayra', 'أبو الهياج الأسدي': 'Abū al-Hayyāj al-Asadī', 'جابر': 'Jābir ibn ʿAbd Allāh', 'عائشة وعبد الله بن عباس': 'ʿĀʾisha en ʿAbd Allāh ibn ʿAbbās', 'جندب': 'Jundub ibn ʿAbd Allāh', 'بصرة بن أبي بصرة': 'Baṣra ibn Abī Baṣra' }

const PERSONS = [
  ['ibn-taymiyya', 'text', [54, 55, 56, 57, 58, 59, 65, 68], 'قال: الولاية هي الإيمان والتقوى؛ وألف «الفرقان بين أولياء الرحمن وأولياء الشيطان»؛ وقال: يحرم الإسراج على القبور واتخاذ المساجد عليها.', 'Zei: walāya is geloof en godsvrees; schreef al-Furqān bayna awliyāʾ ar-Raḥmān wa-awliyāʾ ash-Shayṭān; en zei: lampen op graven en gebedsplaatsen erop zijn verboden.'],
  ['al-layth-ibn-sad', 'text', [57], 'قال: إذا رأيتم الرجل يمشي على الماء فلا تغتروا به حتى تعرضوا أمره على الكتاب والسنة.', 'Zei: als je iemand over water ziet lopen, laat je niet misleiden tot je zijn zaak aan Koran en Sunna hebt getoetst.'],
  ['ash-shafii', 'text', [57, 60], 'نقل عنه مثل قول الليث في الماشي على الماء.', 'Van hem wordt hetzelfde overgeleverd als van al-Layth over wie over water loopt.'],
  ['ibn-hajar-al-asqalani', 'text', [58, 68], 'قال: خرق العادة قد يقع للزنديق إملاء وللصديق كرامة، والفرق باتباع الكتاب والسنة.', 'Zei: iets bovennatuurlijks kan bij een zindīq gebeuren als misleiding en bij een oprechte als ereblijk; het verschil ligt in het volgen van Koran en Sunna.'],
  ['usayd-ibn-hudayr', 'text', [59], 'من الصحابة الذين وردت لهم كرامات.', 'Een van de metgezellen bij wie ereblijken worden vermeld.'],
  ['abbad-ibn-bishr', 'text', [59], 'من الصحابة الذين وردت لهم كرامات.', 'Een van de metgezellen bij wie ereblijken worden vermeld.'],
  ['asim-ibn-thabit', 'text', [59], 'من الصحابة الذين وردت لهم كرامات.', 'Een van de metgezellen bij wie ereblijken worden vermeld.'],
  ['ash-shawkani', 'text', [61, 66], 'قال: على الولي أن يعرض ما يقع له على الكتاب والسنة؛ وقال: رفع القبور زيادة على المأذون محرم.', 'Zei: de walī moet wat hem overkomt aan Koran en Sunna toetsen; en: graven hoger maken dan toegestaan is verboden.'],
  ['ibn-al-jawzi', 'text', [61], 'ذكر في «تلبيس إبليس» من يموه على الناس بخوارق مصطنعة.', 'Beschreef in Talbīs Iblīs mensen die anderen misleiden met nagemaakte wonderen.'],
  ['umar-ibn-al-khattab', 'text', [62], 'روى حديث «لا تطروني».', 'Overleverde: "prijs mij niet overdreven".'],
  ['ibn-abbas', 'text', [62, 65, 67], 'أخبر أن أصنام قوم نوح أسماء رجال صالحين.', 'Vertelde dat de afgoden van het volk van Nūḥ namen van vrome mannen waren.'],
  ['as-sadi', 'text', [62], 'قسم الناس في معاملة الصالحين: أهل جفاء، وأهل غلو، وأهل حق.', 'Deelde de mensen in hun omgang met de vromen in: vijandig, overdreven en juist.'],
  ['aisha', 'text', [64, 67], 'روت دعاء زيارة البقيع وحديث الكنيسة.', 'Overleverde het smeekgebed bij al-Baqīʿ en de hadith over de kerk.'],
  ['abu-marthad-al-ghanawi', 'text', [65], 'روى «لا تجلسوا على القبور، ولا تصلوا إليها».', 'Overleverde: "zit niet op de graven en bid niet in hun richting".'],
  ['al-munawi', 'text', [65], 'قال: الصلاة في المقبرة مكروهة كراهة تحريم.', 'Zei: bidden op een begraafplaats is afgekeurd in de zin van verboden.'],
  ['abu-hurayra', 'text', [66, 68], 'روى «لا تجعلوا قبري عيدا» و«لا تشد الرحال»، وذهب إلى الطور.', 'Overleverde "maak van mijn graf geen feestplaats" en "men reist niet af behalve naar drie moskeeën"; hij ging naar aṭ-Ṭūr.'],
  ['ali-ibn-abi-talib', 'text', [66], 'بعث أبا الهياج ألا يدع قبرا مشرفا إلا سواه.', 'Stuurde Abū al-Hayyāj om elk verhoogd graf gelijk te maken.'],
  ['abu-al-hayyaj-al-asadi', 'text', [66], 'بعثه علي بما بعثه به رسول الله ﷺ.', 'ʿAlī stuurde hem met de opdracht die hij van de Profeet ﷺ kreeg.'],
  ['jabir-ibn-abdallah', 'text', [67], 'روى النهي عن تجصيص القبور والبناء عليها.', 'Overleverde het verbod om graven te pleisteren en erop te bouwen.'],
  ['umm-habiba', 'text', [67], 'ذكرت كنيسة بالحبشة فيها تصاوير.', 'Vertelde over een kerk met afbeeldingen in Abessinië.'],
  ['umm-salama', 'text', [67], 'ذكرت كنيسة بالحبشة فيها تصاوير.', 'Vertelde over een kerk met afbeeldingen in Abessinië.'],
  ['ibn-rajab', 'text', [67], 'قال: الحديث يدل على تحريم بناء المساجد على قبور الصالحين وتصوير صورهم.', 'Zei: de hadith bewijst dat bouwen van gebedsplaatsen op graven van vromen en hun afbeeldingen verboden zijn.'],
  ['al-albani', 'text', [62, 65, 66, 67, 68], 'ذكر ثلاثة معان لاتخاذ القبور مساجد، وصحح أحاديث من الوحدة.', 'Noemde drie betekenissen van graven tot gebedsplaatsen maken, en verklaarde hadith van deze eenheid authentiek.'],
  ['jundub-ibn-abdallah', 'text', [68], 'سمع النبي ﷺ قبل موته بخمس ينهى عن اتخاذ القبور مساجد.', 'Hoorde de Profeet ﷺ vijf dagen voor zijn dood verbieden graven tot gebedsplaatsen te maken.'],
  ['basra-ibn-abi-basra', 'text', [68], 'أنكر على أبي هريرة ذهابه إلى الطور.', 'Wees Abū Hurayra terecht omdat hij naar aṭ-Ṭūr was gegaan.'],
  ['al-bukhari', 'takhrij', [54, 62, 67, 68], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [64, 65, 66, 67, 68], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['an-nasai', 'takhrij', [62, 68], 'روى حديث الغلو وحديث بصرة.', 'Overleverde de hadith over overdrijving en die van Baṣra.'],
  ['ibn-maja', 'takhrij', [62], 'روى حديث «إياكم والغلو».', 'Overleverde: "pas op voor overdrijving".'],
  ['at-tabarani', 'takhrij', [65], 'روى «لا تصلوا إلى قبر».', 'Overleverde: "bid niet in de richting van een graf".'],
  ['abu-dawud', 'takhrij', [66], 'روى «لا تجعلوا قبري عيدا».', 'Overleverde: "maak van mijn graf geen feestplaats".'],
  ['at-tirmidhi', 'takhrij', [67], 'روى زيادة «وأن يكتب عليها».', 'Overleverde de toevoeging "en erop te schrijven".'],
  ['ahmad-ibn-hanbal', 'takhrij', [68], 'روى حديث بصرة.', 'Overleverde de hadith van Baṣra.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'الأولياء وكراماتهم',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف الولي والكرامة، والفرق بين أولياء الرحمن وأولياء الشيطان، وإثبات الكرامات وشروطها، والفرق بينها وبين الأحوال الشيطانية، والتحذير من الغلو في الصالحين وقبورهم، والزيارة الشرعية للقبور.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'الأولياء وكراماتهم', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'الولي والكرامة', sub: 'الدرس ١٩', page: 54, children: ['كل مؤمن تقي', 'أمر خارق للعادة'] },
      { label: 'أولياء الرحمن والشيطان', sub: 'الدرسان ١٩–٢٠', page: 55, children: ['الإيمان', 'التقوى', 'الاتباع', 'محبة الأولياء'] },
      { label: 'الكرامات', sub: 'الدرسان ٢٠–٢١', page: 59, children: ['إثباتها', 'شروطها', 'الأحوال الشيطانية'] },
      { label: 'الغلو', sub: 'الدرس ٢٢', page: 62, children: ['مخرج من الملة', 'ذريعة إلى الشرك'] },
      { label: 'زيارة القبور', sub: 'الدرس ٢٣', page: 64, children: ['شرعية', 'شركية وبدعية', 'مظاهر الغلو'] }
    ]
  },
  points: [
    { text: 'الولي: كل مؤمن تقي، والولاية هي الإيمان والتقوى.', page: 54 },
    { text: 'الكرامة: أمر خارق للعادة يجريه الله على يد ولي، وليست شرطًا في الولاية.', page: 54 },
    { text: 'المعجزة للنبي مقرونة بدعوى النبوة، والكرامة للولي باتباع النبي ﷺ.', page: 54 },
    { text: 'معالم أولياء الرحمن: الإيمان، والتقوى، والاتباع، ومحبة أولياء الله.', page: 55 },
    { text: 'لا يغتر بمن يمشي على الماء أو يطير حتى يعرض أمره على الكتاب والسنة.', page: 57 },
    { text: 'اتفق أهل السنة على إثبات الكرامات، وهي باقية إلى يوم القيامة.', page: 59 },
    { text: 'الغلو في الصالحين أول وأعظم سبب أوقع بني آدم في الشرك.', page: 62 },
    { text: 'الزيارة الشرعية للقبور: السلام والدعاء للموتى وتذكر الموت، بلا شد رحال.', page: 64 }
  ],
  terms: [
    { term: 'الولي', translit: 'al-walī', meaning: 'لغة: المحب الناصر.', explanation: 'اصطلاحًا: كل مؤمن تقي.', notes: ['[يونس: ٦٢–٦٣]'], page: 54 },
    { term: 'الولاية', translit: 'al-walāya', meaning: 'الإيمان والتقوى المتضمنة للتقرب بالفرائض والنوافل.', explanation: 'وولاية الله موافقته: أن تحب ما يحب وتبغض ما يبغض.', notes: [], page: 54 },
    { term: 'الكرامة', translit: 'al-karāma', meaning: 'أمر خارق للعادة يجريه الله على يد ولي.', explanation: 'تأييدًا له أو إعانة أو تثبيتًا أو نصرًا للدين.', notes: [], page: 54 },
    { term: 'المعجزة', translit: 'al-muʿjiza', meaning: 'أمر خارق للعادة مقرون بدعوى النبوة.', explanation: 'المعجزة للنبي والكرامة للولي، وجماعهما الأمر الخارق.', notes: [], page: 54 },
    { term: 'التقوى', translit: 'at-taqwā', meaning: 'الاحتراز بطاعة الله عن عقوبته.', explanation: 'وصيانة النفس عما تستحق به العقوبة من فعل أو ترك.', notes: [], page: 56 },
    { term: 'الاستدراج', translit: 'al-istidrāj', meaning: 'خارق يظهر على يد صاحب المعاصي والبدع.', explanation: 'فلا يكون كرامة.', notes: ['للاطلاع فقط'], page: 60 },
    { term: 'الغلو في الصالحين', translit: 'al-ghuluww fī aṣ-ṣāliḥīn', meaning: 'الزيادة في مدحهم والإفراط في تعظيمهم بالقول أو الفعل أو الاعتقاد.', explanation: 'ورفع المخلوق عن منزلته التي أنزله الله.', notes: ['[النساء: ١٧١]'], page: 62 },
    { term: 'شد الرحال', translit: 'shadd ar-riḥāl', meaning: 'السفر إلى مكان بقصد عبادة الله فيه.', explanation: 'لا يجوز إلا إلى المسجد الحرام والمسجد النبوي والمسجد الأقصى.', notes: [], page: 68 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'المعجزة والكرامة',
      intro: 'وجماعهما الأمر الخارق للعادة.',
      columns: ['المعجزة', 'الكرامة'],
      rows: [
        { label: 'لمن', cells: ['للنبي', 'للولي'] },
        { label: 'دعوى النبوة', cells: ['مقرونة بها', 'صاحبها لا يدعيها'] },
        { label: 'سببها', cells: ['تأييد النبوة', 'اتباع النبي ﷺ والاستقامة على شرعه'] }
      ],
      page: 54
    },
    {
      type: 'cards',
      title: 'معالم أولياء الرحمن',
      intro: 'ما يميزهم من أولياء الشيطان.',
      nodes: [
        { label: 'الإيمان', sub: 'بأركانه الستة؛ فغير المؤمن لا يكون وليًا', page: 55 },
        { label: 'التقوى', sub: 'المؤمن التقي ليس معصومًا لكنه أواب', page: 56 },
        { label: 'الاتباع', sub: '[آل عمران: ٣١]', page: 57 },
        { label: 'محبة أولياء الله', sub: 'ومن أبغض الصحابة فليس وليًا لله', page: 58 }
      ]
    },
    {
      type: 'steps',
      title: 'شروط الكرامة (للاطلاع فقط)',
      intro: 'كما في الدرس الحادي والعشرين.',
      nodes: [
        { label: 'وجود أمر خارق للعادة', page: 60 },
        { label: 'ظهوره على يد مؤمن تقي متبع للكتاب والسنة', page: 60 },
        { label: 'ألا يشتمل على معصية أو باطل', page: 60 }
      ]
    },
    {
      type: 'compare',
      title: 'الكرامات والأحوال الشيطانية (للاطلاع فقط)',
      intro: 'أهم الفروق كما في الكتاب.',
      columns: ['الكرامة', 'الحال الشيطاني'],
      rows: [
        { label: 'السبب', cells: ['الإيمان والتقوى', 'لا ولاية، فهو من الشيطان'] },
        { label: 'الأساس', cells: ['الصدق', 'الكذب'] },
        { label: 'الحصول', cells: ['هبة من الله', 'بالتعلم واستدعاء الجن'] },
        { label: 'الإظهار', cells: ['يخفيها صاحبها', 'يظهرها أمام الناس ويتحدى بها'] },
        { label: 'الذكر والقرآن', cells: ['لا يبطلها', 'يبطل أثره أو يضعفه'] }
      ],
      page: 61
    },
    {
      type: 'tree',
      title: 'نوعا الغلو في الأولياء',
      intro: 'كما في الكتاب.',
      root: { label: 'الغلو في الأولياء', page: 63 },
      nodes: [
        { label: 'مخرج من الملة', children: ['نسبة علم الغيب أو التصرف في الكون إليهم', 'دعاؤهم والاستغاثة بهم والذبح والنذر لهم'], page: 63 },
        { label: 'ذريعة إلى الشرك', children: ['رفع القبور وبناء القباب والمساجد عليها', 'شد الرحال إليهم والتوسل بجاههم والحلف بهم'], page: 63 }
      ]
    },
    {
      type: 'tree',
      title: 'نوعا زيارة القبور',
      intro: 'كما في الدرس الثالث والعشرين.',
      root: { label: 'زيارة القبور', page: 64 },
      nodes: [
        { label: 'شرعية', children: ['السلام على الموتى والدعاء لهم', 'تذكر الموت', 'بلا شد رحال'], page: 64 },
        { label: 'شركية وبدعية', children: ['سؤال الميت حاجته', 'سؤال الله بالميت', 'ظن أن الدعاء عند القبر مستجاب'], page: 65 }
      ]
    },
    {
      type: 'cards',
      title: 'من صور الغلو في القبور التي نهى عنها النبي ﷺ',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'الصلاة إلى القبور', page: 65 },
        { label: 'إسراج القبور', sub: 'قال ابن تيمية: يحرم، ولا أعلم فيه خلافًا', page: 65 },
        { label: 'اتخاذ القبور عيدًا', page: 66 },
        { label: 'رفع القبور وتعليتها', page: 66 },
        { label: 'البناء عليها وتجصيصها والكتابة عليها', page: 67 },
        { label: 'بناء المساجد عليها والتصوير فيها', page: 67 },
        { label: 'شد الرحال إلى غير المساجد الثلاثة', page: 68 }
      ]
    }
  ],
  sections: [
    { title: 'جانبا الولاية', text: 'جانب يتعلق بالعبد: القيام بالأوامر واجتناب النواهي ثم التدرج في مراقي العبودية بالنوافل؛ وجانب يتعلق بالرب: محبة هذا العبد ونصرته وتثبيته على الاستقامة.', more: 'أما الكرامات فأمر إضافي؛ فقد تحصل الولاية ولم توجد كرامات.', page: 54 },
    { title: 'لا ولاية بلا اتباع', text: 'قال ابن تيمية: «فمن اعتقد أن لأحد من الأولياء طريقًا إلى الله من غير متابعة محمد ﷺ فهو كافر من أولياء الشيطان».', more: '', page: 57 },
    { title: 'خوارق السحرة والكهان', text: 'قال ابن تيمية: اتفق أولياء الله على أن الرجل لو طار في الهواء أو مشى على الماء لم يعتبر حتى ينظر متابعته لأمر الله ونهيه؛ وإلا لزم أن يجعل السحرة والكهان أولياء.', more: '', page: 58 },
    { title: 'من كرامات الكتاب والسنة', text: 'رزق مريم في المحراب، والذي عنده علم من الكتاب في قصة سليمان، ونجاة أصحاب الغار، وتكلم الغلام في المهد، وكرامات لأسيد بن حضير وعباد بن بشر وعاصم بن ثابت وغيرهم.', more: '[آل عمران: ٣٧]، [النمل: ٤٠].', page: 59 },
    { title: 'الناس في الصالحين ثلاثة أقسام (للاطلاع فقط)', text: 'قال السعدي: أهل الجفاء الذين يهضمونهم حقوقهم، وأهل الغلو الذين يرفعونهم فوق منزلتهم، وأهل الحق الذين يحبونهم ويوالونهم ويبرؤون من الغلو فيهم وادعاء عصمتهم.', more: FYI, page: 62 },
    { title: 'حق القبور علينا', text: 'للقبور حق من وجهين: ألا نفرط فيما يجب لها من الحرمة فلا نهينها ولا نجلس عليها، وألا نغلو فيها فنتجاوز الحد.', more: '', page: 68 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الولي', items: ['كل مؤمن تقي.'], page: 54, origin: 'boek' },
    { kind: 'definitie', title: 'الكرامة', items: ['أمر خارق للعادة يجريه الله على يد ولي.'], page: 54, origin: 'boek' },
    { kind: 'regel', title: 'الميزان', items: ['لا يعتبر خارق حتى يعرض صاحبه على الكتاب والسنة.'], page: 57, origin: 'boek' },
    { kind: 'opsomming', title: 'المساجد الثلاثة', items: ['المسجد الحرام', 'المسجد النبوي', 'المسجد الأقصى'], page: 68, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الولي: كل مؤمن تقي؛ والكرامة ليست شرطًا في الولاية.',
    'المعجزة للنبي والكرامة للولي.',
    'معالم أولياء الرحمن: الإيمان والتقوى والاتباع ومحبة أولياء الله.',
    'الكرامات ثابتة، وتميز عن الأحوال الشيطانية بالكتاب والسنة.',
    'الغلو في الصالحين نوعان: مخرج من الملة، وذريعة إلى الشرك.',
    'الزيارة الشرعية: السلام والدعاء وتذكر الموت، ولا تشد الرحال إلا إلى ثلاثة مساجد.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من الولي اصطلاحًا؟', options: ['كل مؤمن تقي', 'من ظهرت على يده الخوارق', 'كل عالم', 'كل زاهد'], answer: 0, explain: '[يونس: ٦٢–٦٣].', page: 54 },
    { type: 'tf', q: 'الكرامة شرط في الولاية.', options: ['صواب', 'خطأ'], answer: 1, explain: 'قد تحصل الولاية ولم توجد كرامات.', page: 54 },
    { type: 'mc', q: 'ما الفرق بين المعجزة والكرامة؟', options: ['المعجزة مقرونة بدعوى النبوة', 'الكرامة أعظم من المعجزة', 'المعجزة لا تكون خارقة', 'لا فرق'], answer: 0, explain: 'المعجزة للنبي والكرامة للولي.', page: 54 },
    { type: 'mc', q: 'ماذا تفعل إذا رأيت رجلًا يمشي على الماء؟', options: ['تعرض أمره على الكتاب والسنة', 'تعده وليًا', 'تتبرك به', 'تطلب منه الدعاء'], answer: 0, explain: 'كما قال الليث والشافعي.', page: 57 },
    { type: 'mc', q: 'أي هذه غلو مخرج من الملة؟', options: ['دعاء الأولياء والاستغاثة بهم', 'بناء القباب على القبور', 'الحلف بهم', 'شد الرحال إليهم'], answer: 0, explain: 'وسائرها ذريعة إلى الشرك.', page: 63 },
    { type: 'mc', q: 'ما الغاية الشرعية من زيارة القبور؟', options: ['تذكر الموت والدعاء للميت', 'طلب الحاجات من الميت', 'التبرك بالقبر', 'استجابة الدعاء عنده'], answer: 0, explain: '«زوروا القبور؛ فإنها تذكر الموت».', page: 64 },
    { type: 'tf', q: 'يجوز شد الرحال لزيارة قبور الصالحين.', options: ['صواب', 'خطأ'], answer: 1, explain: '«لا تشد الرحال إلا إلى ثلاثة مساجد».', page: 68 },
    { type: 'mc', q: 'ما أول سبب أوقع بني آدم في الشرك الأكبر؟', options: ['الغلو في الصالحين', 'عبادة الكواكب', 'السحر', 'إنكار البعث'], answer: 0, explain: 'كما في خبر أصنام قوم نوح.', page: 62 }
  ]),
  note: 'نشاط الكتاب في صفحة ٦٩. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'De vrienden van Allah en hun ereblijken',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Wie een walī (vriend van Allah) is en wat een karāma (ereblijk) is, het verschil tussen de vrienden van de Barmhartige en die van de duivel, het bevestigen van ereblijken en hun voorwaarden, het verschil met duivelse verschijnselen, de waarschuwing tegen overdrijving met vromen en hun graven, en het religieuze grafbezoek.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (4), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De vrienden van Allah', sub: 'Eenheid 5' },
    nodes: [
      { label: 'Walī en karāma', sub: 'les 19', page: 54, children: ['elke godvrezende gelovige', 'iets bovennatuurlijks'] },
      { label: 'Vrienden van de Barmhartige of van de duivel', sub: 'les 19–20', page: 55, children: ['geloof', 'godsvrees', 'navolging', 'liefde voor Allahs vrienden'] },
      { label: 'Ereblijken', sub: 'les 20–21', page: 59, children: ['bevestiging', 'voorwaarden', 'duivelse verschijnselen'] },
      { label: 'Overdrijving', sub: 'les 22', page: 62, children: ['buiten de islam', 'een weg naar shirk'] },
      { label: 'Grafbezoek', sub: 'les 23', page: 64, children: ['religieus', 'shirk of vernieuwing', 'vormen van overdrijving'] }
    ]
  },
  points: [
    { text: 'Een walī is elke godvrezende gelovige; walāya is geloof en godsvrees.', page: 54 },
    { text: 'Een karāma is iets bovennatuurlijks dat Allah door een walī laat gebeuren; het is geen voorwaarde om walī te zijn.', page: 54 },
    { text: 'Een wonder (muʿjiza) hoort bij een profeet en zijn aanspraak op profeetschap; een karāma bij een walī die de Profeet ﷺ volgt.', page: 54 },
    { text: 'Kenmerken van de vrienden van de Barmhartige: geloof, godsvrees, navolging en liefde voor Allahs vrienden.', page: 55 },
    { text: 'Laat je niet misleiden door wie over water loopt of vliegt, tot je hem aan Koran en Sunna hebt getoetst.', page: 57 },
    { text: 'Ahl as-sunna zijn het eens dat ereblijken bestaan; ze blijven tot de Dag der Opstanding.', page: 59 },
    { text: 'Overdrijving met vromen was de eerste en grootste oorzaak van shirk onder de mensen.', page: 62 },
    { text: 'Religieus grafbezoek: groeten, voor de doden smeken en aan de dood denken, zonder er speciaal heen te reizen.', page: 64 }
  ],
  terms: [
    { term: 'الولي', translit: 'al-walī', meaning: 'Vriend van Allah. Taal: wie liefheeft en helpt.', explanation: 'Vakterm: elke godvrezende gelovige.', notes: ['Yūnus 10:62–63'], page: 54 },
    { term: 'الولاية', translit: 'al-walāya', meaning: 'Vriendschap met Allah: geloof en godsvrees, met toenadering door verplichte en vrijwillige daden.', explanation: 'Het betekent liefhebben wat Hij liefheeft en haten wat Hij haat.', notes: [], page: 54 },
    { term: 'الكرامة', translit: 'al-karāma', meaning: 'Ereblijk: iets bovennatuurlijks dat Allah door een walī laat gebeuren.', explanation: 'Als steun, hulp, versterking of om de godsdienst te laten zegevieren.', notes: [], page: 54 },
    { term: 'المعجزة', translit: 'al-muʿjiza', meaning: 'Wonder: iets bovennatuurlijks dat samengaat met een aanspraak op profeetschap.', explanation: 'Het wonder is voor de profeet, het ereblijk voor de walī; beide zijn bovennatuurlijk.', notes: [], page: 54 },
    { term: 'التقوى', translit: 'at-taqwā', meaning: 'Godsvrees: je door gehoorzaamheid aan Allah beschermen tegen Zijn straf.', explanation: 'En jezelf behoeden voor doen of laten waarvoor je straf verdient.', notes: [], page: 56 },
    { term: 'الاستدراج', translit: 'al-istidrāj', meaning: 'Iets bovennatuurlijks bij iemand die zondigt of vernieuwt: een geleidelijke misleiding.', explanation: 'Het is dan geen ereblijk.', notes: ['alleen ter kennisname'], page: 60 },
    { term: 'الغلو في الصالحين', translit: 'al-ghuluww fī aṣ-ṣāliḥīn', meaning: 'Overdrijving met vromen: hen te veel prijzen en vereren in woord, daad of geloof.', explanation: 'Een schepsel boven de plaats verheffen die Allah het gaf.', notes: ['an-Nisāʾ 4:171'], page: 62 },
    { term: 'شد الرحال', translit: 'shadd ar-riḥāl', meaning: 'Speciaal afreizen naar een plaats om Allah daar te aanbidden.', explanation: 'Alleen toegestaan naar de Heilige Moskee, de moskee van de Profeet ﷺ en al-Aqṣā.', notes: [], page: 68 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Wonder en ereblijk',
      intro: 'Beide zijn bovennatuurlijk.',
      columns: ['Wonder (muʿjiza)', 'Ereblijk (karāma)'],
      rows: [
        { label: 'Voor wie', cells: ['de profeet', 'de walī'] },
        { label: 'Profeetschap', cells: ['gaat samen met de aanspraak erop', 'de walī maakt geen aanspraak'] },
        { label: 'Oorzaak', cells: ['steun voor het profeetschap', 'de Profeet ﷺ volgen en zijn sharīʿa vasthouden'] }
      ],
      page: 54
    },
    {
      type: 'cards',
      title: 'Kenmerken van de vrienden van de Barmhartige',
      intro: 'Wat hen onderscheidt van de vrienden van de duivel.',
      nodes: [
        { label: 'Geloof', sub: 'in de zes zuilen; een ongelovige is geen walī', page: 55 },
        { label: 'Godsvrees', sub: 'de godvrezende is niet onfeilbaar, maar keert steeds terug', page: 56 },
        { label: 'Navolging', sub: 'Āl ʿImrān 3:31', page: 57 },
        { label: 'Liefde voor Allahs vrienden', sub: 'wie de metgezellen haat, is geen walī van Allah', page: 58 }
      ]
    },
    {
      type: 'steps',
      title: 'Voorwaarden voor een ereblijk (alleen ter kennisname)',
      intro: 'Zoals in les 21.',
      nodes: [
        { label: 'Er is iets bovennatuurlijks', page: 60 },
        { label: 'Het gebeurt bij een godvrezende gelovige die Koran en Sunna volgt', page: 60 },
        { label: 'Er zit geen zonde of onwaarheid in', page: 60 }
      ]
    },
    {
      type: 'compare',
      title: 'Ereblijk of duivels verschijnsel (alleen ter kennisname)',
      intro: 'De belangrijkste verschillen volgens het boek.',
      columns: ['Ereblijk', 'Duivels verschijnsel'],
      rows: [
        { label: 'Oorzaak', cells: ['geloof en godsvrees', 'geen walāya, dus van de duivel'] },
        { label: 'Basis', cells: ['waarheid', 'leugen'] },
        { label: 'Hoe verkregen', cells: ['een gave van Allah', 'door leren en djinns oproepen'] },
        { label: 'Tonen', cells: ['de walī verbergt het', 'wordt voor publiek vertoond, als uitdaging'] },
        { label: 'Gedenken en Koran', cells: ['heft het niet op', 'heft het op of verzwakt het'] }
      ],
      page: 61
    },
    {
      type: 'tree',
      title: 'Twee soorten overdrijving met heiligen',
      intro: 'Zoals in het boek.',
      root: { label: 'Overdrijving met heiligen', page: 63 },
      nodes: [
        { label: 'Brengt buiten de islam', children: ['hun kennis van het verborgene of macht over het heelal toeschrijven', 'hen aanroepen, om hulp vragen, voor hen slachten of geloften doen'], page: 63 },
        { label: 'Een weg naar shirk', children: ['graven verhogen en er koepels en gebedsplaatsen op bouwen', 'naar hen afreizen, via hun aanzien bidden, bij hen zweren'], page: 63 }
      ]
    },
    {
      type: 'tree',
      title: 'Twee soorten grafbezoek',
      intro: 'Zoals in les 23.',
      root: { label: 'Grafbezoek', page: 64 },
      nodes: [
        { label: 'Religieus', children: ['de doden groeten en voor hen smeken', 'aan de dood denken', 'zonder er speciaal heen te reizen'], page: 64 },
        { label: 'Shirk of vernieuwing', children: ['de dode om iets vragen', 'Allah vragen via de dode', 'denken dat smeken bij het graf eerder verhoord wordt'], page: 65 }
      ]
    },
    {
      type: 'cards',
      title: 'Vormen van overdrijving met graven die de Profeet ﷺ verbood',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'In de richting van graven bidden', page: 65 },
        { label: 'Lampen op graven', sub: 'Ibn Taymiyya: verboden, en ik ken daarover geen meningsverschil', page: 65 },
        { label: 'Van graven een feestplaats maken', page: 66 },
        { label: 'Graven verhogen', page: 66 },
        { label: 'Erop bouwen, pleisteren en schrijven', page: 67 },
        { label: 'Er gebedsplaatsen op bouwen en afbeeldingen maken', page: 67 },
        { label: 'Afreizen naar iets anders dan de drie moskeeën', page: 68 }
      ]
    }
  ],
  sections: [
    { title: 'Twee kanten van walāya', text: 'De kant van de dienaar: geboden uitvoeren, verboden vermijden en dan opklimmen in aanbidding met vrijwillige daden. De kant van de Heer: deze dienaar liefhebben, helpen en standvastig houden.', more: 'Ereblijken zijn iets extra’s; iemand kan walī zijn zonder ereblijken.', page: 54 },
    { title: 'Geen walāya zonder navolging', text: 'Ibn Taymiyya: "Wie gelooft dat een van de heiligen een weg naar Allah heeft zonder Muḥammad ﷺ te volgen, is een ongelovige en een vriend van de duivel."', more: '', page: 57 },
    { title: 'De wonderen van tovenaars en waarzeggers', text: 'Ibn Taymiyya: de vrienden van Allah zijn het eens dat iemand die door de lucht vliegt of over water loopt, niet meetelt tot je ziet of hij Allahs geboden en verboden volgt; anders zou je tovenaars en waarzeggers vrienden van Allah moeten noemen.', more: '', page: 58 },
    { title: 'Ereblijken uit Koran en Sunna', text: 'De voorziening van Maryam in het gebedsvertrek, de man met kennis van het Boek bij Sulaymān, de redding van de mannen in de grot, het kind dat in de wieg sprak, en ereblijken van Usayd ibn Ḥuḍayr, ʿAbbād ibn Bishr, ʿĀṣim ibn Thābit en anderen.', more: 'Āl ʿImrān 3:37, an-Naml 27:40.', page: 59 },
    { title: 'Drie houdingen tegenover vromen (alleen ter kennisname)', text: 'as-Saʿdī: wie hun rechten tekortdoet, wie hen boven hun plaats verheft, en wie de waarheid volgt: hen liefheeft en hun rechten geeft, maar zich verre houdt van overdrijving en het toeschrijven van onfeilbaarheid.', more: FYI_NL, page: 62 },
    { title: 'Onze plicht tegenover graven', text: 'Graven hebben een recht op twee manieren: we doen hun eerbied niet tekort – we beledigen ze niet en zitten er niet op – en we overdrijven er niet mee.', more: '', page: 68 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Walī', items: ['Elke godvrezende gelovige.'], page: 54, origin: 'boek' },
    { kind: 'definitie', title: 'Karāma', items: ['Iets bovennatuurlijks dat Allah door een walī laat gebeuren.'], page: 54, origin: 'boek' },
    { kind: 'regel', title: 'De maatstaf', items: ['Iets bovennatuurlijks telt pas als de persoon aan Koran en Sunna getoetst is.'], page: 57, origin: 'boek' },
    { kind: 'opsomming', title: 'De drie moskeeën', items: ['de Heilige Moskee', 'de moskee van de Profeet ﷺ', 'al-Aqṣā'], page: 68, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Walī: elke godvrezende gelovige; een karāma is geen voorwaarde.',
    'Het wonder is voor de profeet, het ereblijk voor de walī.',
    'Kenmerken: geloof, godsvrees, navolging en liefde voor Allahs vrienden.',
    'Ereblijken bestaan; Koran en Sunna onderscheiden ze van duivelse verschijnselen.',
    'Overdrijving met vromen: soms buiten de islam, soms een weg naar shirk.',
    'Religieus grafbezoek: groeten, smeken, aan de dood denken; alleen afreizen naar de drie moskeeën.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie is als vakterm een walī?', options: ['elke godvrezende gelovige', 'wie bovennatuurlijke dingen doet', 'elke geleerde', 'elke asceet'], answer: 0, explain: 'Yūnus 10:62–63.', page: 54 },
    { type: 'tf', q: 'Een karāma is een voorwaarde om walī te zijn.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Iemand kan walī zijn zonder ereblijken.', page: 54 },
    { type: 'mc', q: 'Wat is het verschil tussen een wonder en een ereblijk?', options: ['een wonder gaat samen met een aanspraak op profeetschap', 'een ereblijk is groter dan een wonder', 'een wonder is niet bovennatuurlijk', 'er is geen verschil'], answer: 0, explain: 'Het wonder is voor de profeet, het ereblijk voor de walī.', page: 54 },
    { type: 'mc', q: 'Wat doe je als je iemand over water ziet lopen?', options: ['zijn zaak aan Koran en Sunna toetsen', 'hem een walī noemen', 'zegen bij hem zoeken', 'hem om een smeekgebed vragen'], answer: 0, explain: 'Zoals al-Layth en ash-Shāfiʿī zeiden.', page: 57 },
    { type: 'mc', q: 'Welke overdrijving brengt buiten de islam?', options: ['heiligen aanroepen en om hulp vragen', 'koepels op graven bouwen', 'bij hen zweren', 'naar hen afreizen'], answer: 0, explain: 'De andere zijn een weg naar shirk.', page: 63 },
    { type: 'mc', q: 'Wat is het religieuze doel van grafbezoek?', options: ['aan de dood denken en voor de dode smeken', 'de dode om iets vragen', 'zegen zoeken bij het graf', 'verhoring bij het graf zoeken'], answer: 0, explain: '"Bezoek de graven, want zij herinneren aan de dood."', page: 64 },
    { type: 'tf', q: 'Het is toegestaan speciaal af te reizen om graven van vromen te bezoeken.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Men reist niet speciaal af behalve naar drie moskeeën."', page: 68 },
    { type: 'mc', q: 'Wat was de eerste oorzaak van grote shirk onder de mensen?', options: ['overdrijving met vromen', 'sterrenaanbidding', 'tovenarij', 'ontkenning van de opstanding'], answer: 0, explain: 'Zoals het bericht over de afgoden van het volk van Nūḥ laat zien.', page: 62 }
  ]),
  note: 'Oefening van het boek op p. 69. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n4-aqeedah', chapter: '19', unit: 5, ar, nl }
