// Hoofdstukkaart bij الفقه (٢), eenheid 2: سجود السهو والتلاوة والشكر وصلاة الجماعة (lessen 6–9, boek p. 28–39).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Niet overgenomen: de polemische opmerking over neerknielen bij een tv-wedstrijd (p. 33) en, uit het
// deel "alleen ter kennisname" op p. 38, de uitspraak over roken.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '28–39',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'عبد الله بن مسعود', text: 'صلى بنا رسول الله ﷺ خمسا، فلما انفتل توشوش القوم بينهم... فقال: «إنما أنا بشر مثلكم، أنسى كما تنسون، فإذا نسي أحدكم فليسجد سجدتين»', takhrij: 'رواه مسلم', note: 'دليل السجود للزيادة.', pages: [29], nl: 'De Boodschapper van Allah ﷺ bad met ons vijf rakʿa’s. Toen hij klaar was, fluisterden de mensen onder elkaar... Hij zei: "Ik ben slechts een mens zoals jullie; ik vergeet zoals jullie vergeten. Als een van jullie iets vergeet, laat hij twee keer neerknielen."', nlNote: 'Bewijs voor neerknielen bij iets toevoegen.' },
  { narrator: 'عبد الله بن بحينة', text: 'صلى لنا رسول الله ﷺ إحدى صلاتي العشي ركعتين ثم قام فلم يجلس... فسجد سجدتين وهو جالس ثم سلم', takhrij: 'البخاري ومسلم', note: 'نقص واجب (التشهد الأول): السجود قبل التسليم.', pages: [29], nl: 'De Boodschapper van Allah ﷺ bad met ons een van de middaggebeden; na twee rakʿa’s stond hij op zonder te zitten... Toen knielde hij zittend twee keer neer en groette daarna', nlNote: 'Een plicht vergeten (de eerste tashahhud): neerknielen vóór de groet.' },
  { narrator: '', text: 'إذا شك أحدكم في صلاته فلم يدر كم صلى ثلاثا أم أربعا، فليطرح الشك وليبن على ما استيقن، ثم يسجد سجدتين قبل أن يسلم', takhrij: 'رواه مسلم', note: 'شك بلا ترجيح.', pages: [30], nl: 'Als een van jullie twijfelt in zijn gebed en niet weet of hij drie of vier rakʿa’s bad, laat hij de twijfel loslaten en bouwen op wat zeker is, en daarna twee keer neerknielen vóór de groet', nlNote: 'Twijfel zonder voorkeur.' },
  { narrator: '', text: 'فليتحر الصواب فليتم عليه، ثم ليسلم، ثم ليسجد سجدتين', takhrij: 'رواه البخاري', note: 'شك مع غلبة الظن.', pages: [30], nl: 'Laat hij zoeken wat juist is en daarop voortbouwen, dan groeten, en dan twee keer neerknielen', nlNote: 'Twijfel waarbij één mogelijkheid waarschijnlijker is.' },
  { narrator: 'عبد الله بن عمر', text: 'كان النبي ﷺ يقرأ علينا السورة فيها السجدة فيسجد ونسجد معه، حتى ما يجد أحدنا موضعا لجبهته', takhrij: 'البخاري ومسلم', note: '', pages: [31], nl: 'De Profeet ﷺ reciteerde voor ons een soera met een knielvers; hij knielde neer en wij met hem, tot sommigen van ons geen plek meer vonden voor hun voorhoofd', nlNote: '' },
  { narrator: 'أبو رافع', text: 'صليت مع أبي هريرة العتمة فقرأ ﴿إذا السماء انشقت﴾ فسجد، فقلت: ما هذه؟ قال: سجدت بها خلف أبي القاسم ﷺ، فلا أزال أسجد فيها حتى ألقاه', takhrij: 'في الصحيحين', note: 'سجود التلاوة في الصلاة.', pages: [31], nl: 'Ik bad het ʿishāʾ-gebed met Abū Hurayra; hij reciteerde "Als de hemel splijt" en knielde neer. Ik zei: "Wat is dit?" Hij zei: "Ik knielde hierbij neer achter Abū l-Qāsim ﷺ, en ik blijf het doen tot ik hem ontmoet."', nlNote: 'Neerknielen bij recitatie binnen het gebed.' },
  { narrator: 'أبو هريرة', text: 'إذا قرأ ابن آدم السجدة فسجد اعتزل الشيطان يبكي يقول: يا ويله، أمر ابن آدم بالسجود فسجد فله الجنة، وأمرت بالسجود فأبيت فلي النار', takhrij: 'رواه مسلم', note: '', pages: [31], nl: 'Als de mens een knielvers reciteert en neerknielt, trekt de duivel zich huilend terug en zegt: "Wee mij! De mens kreeg het bevel neer te knielen en knielde, dus voor hem is het Paradijs; ik kreeg het bevel en weigerde, dus voor mij is het Vuur."', nlNote: '' },
  { narrator: '', text: 'اللهم لك سجدت، وبك آمنت، ولك أسلمت، سجد وجهي للذي خلقه وصوره، وشق سمعه وبصره، بحوله وقوته، فتبارك الله أحسن الخالقين', takhrij: 'رواه مسلم', note: 'من الدعاء في سجود التلاوة.', pages: [31], nl: 'O Allah, voor U kniel ik neer, in U geloof ik en aan U geef ik mij over. Mijn gezicht knielt neer voor Hem die het schiep en vormde en het gehoor en zicht gaf, door Zijn macht en kracht. Gezegend is Allah, de beste der scheppers', nlNote: 'Een smeekbede bij het neerknielen voor recitatie.' },
  { narrator: '', text: 'اللهم اكتب لي بها أجرا، وضع عني بها وزرا، واجعلها لي عندك ذخرا، وتقبلها مني كما تقبلتها من عبدك داود', takhrij: 'الترمذي وحسنه', note: '', pages: [31], nl: 'O Allah, schrijf mij hiervoor beloning op, neem hierdoor een last van mij weg, bewaar het voor mij bij U, en aanvaard het van mij zoals U het aanvaardde van Uw dienaar Dāwūd', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'ليست (ص) من عزائم السجود، وقد رأيت النبي ﷺ يسجد فيها', takhrij: 'رواه البخاري', note: 'والأقرب أنها سجدة شكر.', pages: [32], nl: '(Ṣād) hoort niet bij de verplichte knielplaatsen, maar ik zag de Profeet ﷺ erbij neerknielen', nlNote: 'Het meest aannemelijk is dat het een dankknieling is.' },
  { narrator: 'أبو بكرة', text: 'أن النبي ﷺ كان إذا أتاه أمر يسره خر ساجدا شكرا لله', takhrij: 'أبو داود وحسنه الألباني', note: 'سجود الشكر.', pages: [32], nl: 'Als de Profeet ﷺ iets verheugends overkwam, viel hij neer in dankknieling voor Allah', nlNote: 'De dankknieling.' },
  { narrator: '', text: 'صلاة الجماعة أفضل من صلاة الفذ بسبع وعشرين درجة', takhrij: 'متفق عليه', note: 'الفذ: الفرد.', pages: [34], nl: 'Het gebed in gemeenschap is zevenentwintig graden beter dan het gebed alleen', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'رجل أعمى قال: ليس لي قائد يقودني إلى المسجد، فهل لي رخصة؟ قال: «هل تسمع النداء للصلاة؟» قال: نعم، قال: «فأجب»', takhrij: 'رواه مسلم', note: 'نص صريح في الإيجاب على الرجال.', pages: [34], nl: 'Een blinde man zei: "Ik heb niemand die mij naar de moskee brengt; heb ik een vrijstelling?" Hij zei: "Hoor je de oproep tot het gebed?" Hij zei: "Ja." Hij zei: "Geef er dan gehoor aan."', nlNote: 'Een duidelijke tekst dat het voor mannen verplicht is.' },
  { narrator: 'أبو هريرة', text: 'إن أثقل صلاة على المنافقين صلاة العشاء وصلاة الفجر، ولو يعلمون ما فيهما لأتوهما ولو حبوا، ولقد هممت أن آمر بالصلاة فتقام... ثم أنطلق معي برجال معهم حزم من حطب إلى قوم لا يشهدون الصلاة فأحرق عليهم بيوتهم بالنار', takhrij: 'البخاري ومسلم واللفظ له', note: 'مثل هذا الوعيد لا يكون على مستحب.', pages: [34], nl: 'Het zwaarste gebed voor de huichelaars is ʿishāʾ en fajr; als zij wisten wat erin zit, zouden zij komen, al was het kruipend. Ik was van plan het gebed te laten beginnen... en dan met mannen met bundels brandhout naar mensen te gaan die niet naar het gebed komen, en hun huizen in brand te steken', nlNote: 'Zo’n dreigement geldt niet voor iets wat alleen aanbevolen is.' },
  { narrator: 'عبد الله بن مسعود', text: 'من سره أن يلقى الله غدا مسلما فليحافظ على هؤلاء الصلوات حيث ينادى بهن... ولقد رأيتنا وما يتخلف عنها إلا منافق معلوم النفاق، ولقد كان الرجل يؤتى به يهادى بين الرجلين حتى يقام في الصف', takhrij: 'رواه مسلم', note: '', pages: [35], nl: 'Wie Allah morgen als moslim wil ontmoeten, laat hij deze gebeden goed onderhouden waar ertoe wordt opgeroepen... Ik zag dat alleen een bekende huichelaar wegbleef, en er werd een man gebracht, ondersteund tussen twee mannen, tot hij in de rij werd gezet', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'إذا جئتم إلى الصلاة ونحن سجود فاسجدوا ولا تعدوها شيئا، ومن أدرك ركعة فقد أدرك الصلاة', takhrij: 'أحمد وأبو داود وصححه الألباني', note: 'بم تدرك الجماعة.', pages: [35], nl: 'Als jullie bij het gebed komen terwijl wij neergeknield zijn, kniel dan neer, maar tel het niet mee; en wie een rakʿa haalt, heeft het gebed gehaald', nlNote: 'Waarmee je het gemeenschappelijk gebed haalt.' },
  { narrator: '', text: 'لا صلاة بحضرة طعام، ولا وهو يدافعه الأخبثان', takhrij: 'رواه مسلم', note: 'من أعذار ترك الجماعة.', pages: [35], nl: 'Er is geen gebed als er eten klaarstaat, en niet terwijl hij zijn behoefte moet ophouden', nlNote: 'Een van de redenen om niet in gemeenschap te bidden.' },
  { narrator: 'عبد الله بن عمر', text: 'كان يأمر المؤذن إذا كانت ليلة باردة ذات مطر يقول: ألا صلوا في الرحال', takhrij: 'البخاري ومسلم', note: '', pages: [35], nl: 'In een koude, regenachtige nacht liet hij de muezzin zeggen: "Bid in jullie onderkomens."', nlNote: '' },
  { narrator: '', text: 'من سمع النداء فلم يأته فلا صلاة له إلا من عذر', takhrij: 'أبو داود وابن ماجه وصححه الألباني', note: '', pages: [35], nl: 'Wie de oproep hoort en niet komt, heeft geen gebed, behalve met een geldige reden', nlNote: '' },
  { narrator: '', text: 'إذا أقيمت الصلاة فلا صلاة إلا المكتوبة', takhrij: 'رواه مسلم', note: '', pages: [36], nl: 'Als het gebed begint (iqāma), is er geen gebed behalve het verplichte', nlNote: '' },
  { narrator: 'أبو بكرة', text: 'انتهى إلى النبي ﷺ وهو راكع، فركع قبل أن يصل إلى الصف ثم مشى إلى الصف، فقال: «زادك الله حرصا ولا تعد»', takhrij: 'رواه البخاري', note: 'ولم يأمره بإعادة الركعة، فتدرك الركعة بإدراك الركوع.', pages: [36], nl: 'Hij kwam bij de Profeet ﷺ toen die in de buiging was; hij boog al voordat hij de rij bereikte en liep daarna naar de rij. Hij zei: "Moge Allah je ijver vergroten, maar doe het niet opnieuw."', nlNote: 'Hij liet hem de rakʿa niet herhalen: wie de buiging haalt, haalt de rakʿa.' },
  { narrator: '', text: 'لا تمنعوا إماء الله مساجد الله', takhrij: 'البخاري ومسلم', note: 'وفي رواية: «وليخرجن تفلات»، أي غير متطيبات.', pages: [36], nl: 'Houd de dienaressen van Allah niet weg van de moskeeën van Allah', nlNote: 'In een versie: "en laat hen uitgaan zonder parfum".' },
  { narrator: 'البراء بن عازب', text: 'كان يتخلل الصف من ناحية إلى ناحية، يمسح صدورنا ومناكبنا ويقول: «لا تختلفوا فتختلف قلوبكم»', takhrij: 'رواه مسلم', note: 'وجوب تسوية الصفوف على الأئمة.', pages: [37], nl: 'Hij liep door de rij van de ene kant naar de andere, raakte onze borst en schouders aan en zei: "Sta niet ongelijk, anders raken jullie harten verdeeld."', nlNote: 'De imams moeten de rijen recht zetten.' },
  { narrator: 'أنس بن مالك', text: 'أتموا الصف المقدم، ثم الذي يليه، فما كان من نقص فليكن في الصف المؤخر', takhrij: 'أبو داود وصححه الألباني', note: '', pages: [37], nl: 'Maak de voorste rij vol, dan de rij daarachter; is er een tekort, laat dat dan in de achterste rij zijn', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'خير صفوف الرجال أولها وشرها آخرها، وخير صفوف النساء آخرها وشرها أولها', takhrij: 'رواه مسلم', note: 'إذا صلين مع الرجال بلا حائل.', pages: [37], nl: 'De beste rij van de mannen is de eerste en de slechtste de laatste; de beste rij van de vrouwen is de laatste en de slechtste de eerste', nlNote: 'Als zij zonder afscheiding met de mannen bidden.' },
  { narrator: 'وابصة بن معبد', text: 'رأى رجلا يصلي خلف الصف وحده فأمره أن يعيد الصلاة', takhrij: 'أبو داود وصححه الألباني', note: 'لا يجوز إلا إذا لم يجد مكانًا في الصف.', pages: [37], nl: 'Hij zag een man alleen achter de rij bidden en droeg hem op het gebed te herhalen', nlNote: 'Dat mag alleen als er in de rij geen plaats is.' }
]

const TAKHRIJ_NL = {
  'رواه مسلم': 'Muslim',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'رواه البخاري': 'al-Bukhārī',
  'في الصحيحين': 'in de twee Ṣaḥīḥ-verzamelingen (al-Bukhārī en Muslim)',
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'البخاري ومسلم واللفظ له': 'al-Bukhārī en Muslim, in de bewoording van Muslim',
  'أحمد وأبو داود وصححه الألباني': 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وابن ماجه وصححه الألباني': 'Abū Dāwūd en Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'عبد الله بن بحينة': 'ʿAbd Allāh ibn Buḥayna', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'أبو رافع': 'Abū Rāfiʿ', 'أبو هريرة': 'Abū Hurayra', 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'أبو بكرة': 'Abū Bakra', 'البراء بن عازب': 'al-Barāʾ ibn ʿĀzib', 'أنس بن مالك': 'Anas ibn Mālik', 'وابصة بن معبد': 'Wābiṣa ibn Maʿbad' }

const PERSONS = [
  ['ibn-masud', 'text', [29, 35], 'روى سجود النبي ﷺ لما صلى خمسًا، وحث على المحافظة على الصلوات حيث ينادى بهن.', 'Overleverde het neerknielen van de Profeet ﷺ toen hij vijf rakʿa’s bad, en spoorde aan de gebeden te onderhouden waar ertoe wordt opgeroepen.'],
  ['abdallah-ibn-buhayna', 'text', [29], 'روى سجوده ﷺ قبل السلام لما ترك التشهد الأول.', 'Overleverde dat hij ﷺ vóór de groet neerknielde toen hij de eerste tashahhud oversloeg.'],
  ['ibn-umar', 'text', [31, 32, 35], 'روى سجودهم مع النبي ﷺ للتلاوة، وكان يسجدها على غير وضوء، وروى «ألا صلوا في الرحال».', 'Overleverde dat zij met de Profeet ﷺ neerknielden bij recitatie; hij deed het zelf zonder wassing; en overleverde "bid in jullie onderkomens".'],
  ['abu-hurayra', 'text', [31, 34, 35, 37], 'سجد في ﴿إذا السماء انشقت﴾، وروى أحاديث وجوب الجماعة وفضل الصفوف.', 'Knielde neer bij "Als de hemel splijt", en overleverde de hadith over de plicht van het gemeenschappelijk gebed en de waarde van de rijen.'],
  ['ibn-abbas', 'text', [32], 'قال: ليست (ص) من عزائم السجود.', 'Zei: (Ṣād) hoort niet bij de verplichte knielplaatsen.'],
  ['abu-bakra', 'text', [32, 36], 'روى سجود الشكر، وركع دون الصف فقال له: «زادك الله حرصًا ولا تعد».', 'Overleverde de dankknieling; hij boog vóór de rij, waarop de Profeet ﷺ zei: "Moge Allah je ijver vergroten, maar doe het niet opnieuw."'],
  ['kab-ibn-malik', 'text', [32], 'سجد لما جاءته البشرى بتوبة الله عليه.', 'Knielde neer toen hij het goede nieuws kreeg dat Allah zijn berouw aanvaardde.'],
  ['al-bara-ibn-azib', 'text', [37], 'روى تسوية النبي ﷺ للصفوف.', 'Overleverde hoe de Profeet ﷺ de rijen recht zette.'],
  ['anas-ibn-malik', 'text', [37], 'روى «أتموا الصف المقدم».', 'Overleveraar van "maak de voorste rij vol".'],
  ['an-nawawi', 'text', [37], 'بين ترتيب فضل صفوف النساء.', 'Legde de volgorde van de beste rijen voor vrouwen uit.'],
  ['wabisa-ibn-mabad', 'text', [37], 'روى أمر المصلي خلف الصف وحده بالإعادة.', 'Overleverde dat wie alleen achter de rij bad, het gebed moest herhalen.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'السجود وصلاة الجماعة',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'سجود السهو وأسبابه ومواضعه، وسجود التلاوة والشكر، وصلاة الجماعة: فضلها وحكمها وأعذار تركها، ومسائل الإدراك والصفوف.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'ثلاثة أنواع من السجود، ثم صلاة الجماعة.',
    root: { label: 'السجود والجماعة', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'سجود السهو', sub: 'الدرس ٦', page: 28, children: ['الزيادة', 'النقص', 'الشك'] },
      { label: 'سجود التلاوة', sub: 'الدرس ٧', page: 31, children: ['سنة', 'صفته', 'لا تشترط الطهارة'] },
      { label: 'سجود الشكر', sub: 'الدرس ٧', page: 32, children: ['لنعمة أو دفع نقمة'] },
      { label: 'صلاة الجماعة', sub: 'الدرس ٨', page: 34, children: ['سبع وعشرون درجة', 'واجبة على الرجال', 'الأعذار'] },
      { label: 'مسائل الجماعة', sub: 'الدرس ٩', page: 36, children: ['إدراك الركعة', 'النساء', 'تسوية الصفوف'] }
    ]
  },
  points: [
    { text: 'سجود السهو سجدتان لإصلاح خلل وقع في الصلاة نسيانًا، وأسبابه ثلاثة: زيادة أو نقص أو شك.', page: 28 },
    { text: 'من علم بالزيادة وهو في الصلاة وجب عليه الرجوع عنها، وإلا بطلت صلاته.', page: 29 },
    { text: 'نسيان تكبيرة الإحرام لا يجبره السجود، بل يعيد الصلاة.', page: 29 },
    { text: 'سجود السهو في الحالات الثلاث واجب، ويسن إذا ترك مستحبًّا من عادته أن يفعله.', page: 30 },
    { text: 'سجود التلاوة سنة للقارئ والمستمع، ولا تشترط له الطهارة ولا استقبال القبلة على الصحيح، ويجوز في وقت النهي.', page: 32 },
    { text: 'صلاة الجماعة واجبة على كل ذكر بالغ حر قادر حضرًا وسفرًا.', page: 34 },
    { text: 'تدرك الجماعة بإدراك ركعة، وتدرك الركعة بإدراك الركوع.', page: 35 },
    { text: 'إذا أقيمت الصلاة فلا يبدأ نافلة، ومن كان في الأولى قطعها، ومن كان في الثانية أتمها خفيفة.', page: 36 }
  ],
  terms: [
    { term: 'سجود السهو', translit: 'sujūd as-sahw', meaning: 'سجدتان يسجدهما المصلي لإصلاح خلل وقع في صلاته نسيانًا.', explanation: '', notes: [], page: 28 },
    { term: 'سجود التلاوة', translit: 'sujūd at-tilāwa', meaning: 'سجدة واحدة إذا مر القارئ بآية سجدة أو استمع لقارئ فسجد.', explanation: '', notes: [], page: 31 },
    { term: 'سجود الشكر', translit: 'sujūd ash-shukr', meaning: 'سجدة لمن أنعم الله عليه بنعمة أو دفع عنه نقمة أو بشر بما يسره.', explanation: 'أحكامه كسجود التلاوة.', notes: [], page: 32 },
    { term: 'عزائم السجود', translit: 'ʿazāʾim as-sujūd', meaning: 'مواضع السجود المؤكدة.', explanation: '', notes: [], page: 32 },
    { term: 'الفذ', translit: 'al-fadhdh', meaning: 'المصلي وحده.', explanation: '', notes: [], page: 34 },
    { term: 'الأخبثان', translit: 'al-akhbathān', meaning: 'البول والغائط.', explanation: 'مدافعتهما عذر في ترك الجماعة.', notes: [], page: 35 },
    { term: 'الرحال', translit: 'ar-riḥāl', meaning: 'المنازل.', explanation: '', notes: [], page: 35 },
    { term: 'تفلات', translit: 'tafilāt', meaning: 'غير متطيبات.', explanation: '', notes: [], page: 36 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'أسباب سجود السهو وموضعه',
      intro: 'كما في مخطط الدرس السادس.',
      columns: ['الحكم', 'موضع السجود'],
      rows: [
        { label: 'زيادة', cells: ['يرجع عنها إن علم وهو في الصلاة', 'بعد التسليم'] },
        { label: 'نقص واجب', cells: ['يجبر بسجود السهو', 'قبل التسليم'] },
        { label: 'نقص ركن غير التحريمة', cells: ['يأتي به، أو تلغى الركعة إن وصل لمحله من التالية', 'بعد التسليم'] },
        { label: 'نقص تكبيرة الإحرام', cells: ['لا تنعقد الصلاة، فيعيدها', 'لا سجود'] },
        { label: 'شك بلا ترجيح', cells: ['يبني على اليقين (الأقل)', 'قبل التسليم'] },
        { label: 'شك مع ترجيح', cells: ['يبني على ما غلب على ظنه', 'بعد التسليم'] }
      ],
      page: 28
    },
    {
      type: 'compare',
      title: 'أعذار ترك الجماعة',
      intro: 'كما في الدرس الثامن.',
      columns: ['الدليل'],
      rows: [
        { label: 'المرض الذي يشق أو يضر', cells: ['تخلفه ﷺ في مرضه: «مروا أبا بكر فليصل بالناس»'] },
        { label: 'مدافعة الأخبثين أو حضور الطعام', cells: ['«لا صلاة بحضرة طعام»'] },
        { label: 'المطر أو الريح أو البرد الشديد', cells: ['«ألا صلوا في الرحال»'] },
        { label: 'الخوف على النفس أو الأهل أو المال', cells: ['«إلا من عذر»'] }
      ],
      page: 35
    }
  ],
  sections: [
    { title: 'أمثلة الزيادة', text: 'أن يسلم قبل إتمام الصلاة، أو يقوم لخامسة، أو يزيد سجدة.', page: 29 },
    { title: 'من نسي الركوع', text: 'إن تذكر قبل أن يصل لموضعه من الركعة التالية رجع إليه ثم أكمل، وإن لم يتذكر إلا فيه ألغيت السابقة وقامت الحالية مقامها، ويسجد بعد التسليم.', page: 30 },
    { title: 'صفة سجود التلاوة', text: 'سجدة واحدة يكبر لها ويقول «سبحان ربي الأعلى» وما ورد، ثم يقوم بلا تكبير ولا تسليم، إلا في الصلاة فيكبر في الرفع.', page: 31 },
    { title: 'المستمع والقارئ', text: 'يسن للمستمع أن يتبع القارئ: إن سجد سجد معه وإلا فلا.', page: 31 },
    { title: 'مواضع السجود', text: 'أربعة عشر موضعًا معروفًا، وسجدة (ص) فيها خلاف، والأقرب أنها سجدة شكر.', page: 32 },
    { title: 'من أخطاء الصفوف', text: 'ترك تسوية الصفوف، وتأخر المسبوق عن الدخول مع الإمام ساجدًا أو جالسًا، والشروع في صف جديد قبل إتمام ما قبله.', page: 37 },
    { title: 'مسائل للاطلاع', text: 'لا ينبغي جذب أحد من الصف المتقدم، والحديث فيه ضعيف؛ ولا يجوز الائتمام بمن يصلي في التلفاز أو المذياع، لأن الجماعة اجتماع في مكان واحد وزمان واحد.', more: FYI, page: 38 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'على من تجب الجماعة', items: ['ذكر', 'بالغ', 'حر', 'قادر', 'حضرًا وسفرًا'], page: 34, origin: 'boek' },
    { kind: 'bewijs', title: 'أدلة وجوب الجماعة', items: ['الأمر بها في صلاة الخوف (النساء ١٠٢)', 'حديث الأعمى: «هل تسمع النداء؟ فأجب»', 'الهم بتحريق بيوت المتخلفين'], page: 34, origin: 'boek' },
    { kind: 'onderscheid', title: 'من أقيمت الصلاة وهو في نافلة', items: ['إن كان في الركعة الأولى قطعها بلا تسليم.', 'إن كان في الثانية أتمها خفيفة ولحق بالجماعة.'], page: 36, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'سجود السهو للزيادة أو النقص أو الشك، قبل التسليم أو بعده بحسب السبب.',
    'سجود التلاوة سنة للقارئ والمستمع، سجدة واحدة بلا تسليم.',
    'سجود الشكر لنعمة أو دفع نقمة، وأحكامه كسجود التلاوة.',
    'الجماعة واجبة على الرجال، وأفضل من صلاة الفرد بسبع وعشرين درجة.',
    'تدرك الركعة بالركوع، ويجب تسوية الصفوف وإتمام الأول فالأول.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'متى يسجد من ترك التشهد الأول ناسيًا؟', options: ['قبل التسليم', 'بعد التسليم', 'لا يسجد', 'يعيد الصلاة'], answer: 0, explain: 'نقص واجب، كما في حديث ابن بحينة.', page: 29 },
    { type: 'mc', q: 'من شك ولم يترجح عنده شيء، على ماذا يبني؟', options: ['على اليقين وهو الأقل', 'على الأكثر', 'يعيد الصلاة', 'على ما يشاء'], answer: 0, explain: 'ويسجد قبل التسليم.', page: 30 },
    { type: 'tf', q: 'تشترط الطهارة لسجود التلاوة على الصحيح.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا تشترط لعدم الدليل، وإن تيسرت فأولى.', page: 32 },
    { type: 'mc', q: 'ما حكم صلاة الجماعة للرجال في الكتاب؟', options: ['واجبة', 'سنة', 'مباحة', 'فرض كفاية فقط'], answer: 0, explain: 'على كل ذكر بالغ حر قادر.', page: 34 },
    { type: 'tf', q: 'من أدرك الإمام راكعًا فقد أدرك الركعة.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما في حديث أبي بكرة.', page: 36 },
    { type: 'mc', q: 'ما حكم صلاة المنفرد خلف الصف؟', options: ['لا تجوز إلا إذا لم يجد مكانًا', 'جائزة مطلقًا', 'مستحبة', 'مكروهة فقط'], answer: 0, explain: 'كما في حديث وابصة.', page: 37 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٣٣ و٣٩. مسائل الصفحة ٣٨ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Neerknielen en het gemeenschappelijk gebed',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De vergeetknieling, haar oorzaken en plaats; de knieling bij recitatie en de dankknieling; en het gemeenschappelijk gebed: de waarde, het oordeel en geldige redenen om weg te blijven, met vragen over het halen van de rakʿa en de rijen.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'Drie soorten neerknielen, daarna het gemeenschappelijk gebed.',
    root: { label: 'Neerknielen en gemeenschap', sub: 'Eenheid 2' },
    nodes: [
      { label: 'De vergeetknieling', sub: 'les 6', page: 28, children: ['toevoegen', 'weglaten', 'twijfel'] },
      { label: 'Knielen bij recitatie', sub: 'les 7', page: 31, children: ['sunna', 'de vorm', 'geen wassing vereist'] },
      { label: 'De dankknieling', sub: 'les 7', page: 32, children: ['bij een zegen of afgewend onheil'] },
      { label: 'Het gemeenschappelijk gebed', sub: 'les 8', page: 34, children: ['zevenentwintig graden', 'verplicht voor mannen', 'geldige redenen'] },
      { label: 'Vragen over de gemeenschap', sub: 'les 9', page: 36, children: ['de rakʿa halen', 'vrouwen', 'rechte rijen'] }
    ]
  },
  points: [
    { text: 'De vergeetknieling is twee keer neerknielen om een fout uit vergeetachtigheid in het gebed te herstellen; de oorzaken zijn drie: toevoegen, weglaten of twijfel.', page: 28 },
    { text: 'Wie tijdens het gebed merkt dat hij iets toevoegt, moet daarmee stoppen; anders is zijn gebed ongeldig.', page: 29 },
    { text: 'Het vergeten van de openings-takbīr kan niet met neerknielen worden hersteld; het gebed moet opnieuw.', page: 29 },
    { text: 'In alle drie gevallen is de vergeetknieling verplicht; ze is aanbevolen als je iets aanbevolens overslaat dat je gewoonlijk doet.', page: 30 },
    { text: 'Knielen bij recitatie is sunna voor reciteerder en luisteraar; volgens de juiste mening zijn wassing en qibla niet vereist, en het mag in een verboden tijd.', page: 32 },
    { text: 'Het gemeenschappelijk gebed is verplicht voor elke volwassen, vrije man die het kan, thuis en op reis.', page: 34 },
    { text: 'Je haalt het gemeenschappelijk gebed met één rakʿa, en de rakʿa met de buiging.', page: 35 },
    { text: 'Als de iqāma begint, begin je geen vrijwillig gebed; ben je in de eerste rakʿa, dan breek je af; in de tweede maak je het kort af.', page: 36 }
  ],
  terms: [
    { term: 'سجود السهو', translit: 'sujūd as-sahw', meaning: 'Twee keer neerknielen om een fout uit vergeetachtigheid in het gebed te herstellen.', explanation: '', notes: [], page: 28 },
    { term: 'سجود التلاوة', translit: 'sujūd at-tilāwa', meaning: 'Eén keer neerknielen bij het reciteren of horen van een knielvers.', explanation: '', notes: [], page: 31 },
    { term: 'سجود الشكر', translit: 'sujūd ash-shukr', meaning: 'Neerknielen uit dank bij een zegen, afgewend onheil of goed nieuws.', explanation: 'Dezelfde regels als bij de knieling voor recitatie.', notes: [], page: 32 },
    { term: 'عزائم السجود', translit: 'ʿazāʾim as-sujūd', meaning: 'De nadrukkelijke knielplaatsen in de Koran.', explanation: '', notes: [], page: 32 },
    { term: 'الفذ', translit: 'al-fadhdh', meaning: 'Wie alleen bidt.', explanation: '', notes: [], page: 34 },
    { term: 'الأخبثان', translit: 'al-akhbathān', meaning: 'Urine en ontlasting.', explanation: 'Ze moeten ophouden is een geldige reden om niet in gemeenschap te bidden.', notes: [], page: 35 },
    { term: 'الرحال', translit: 'ar-riḥāl', meaning: 'De onderkomens.', explanation: '', notes: [], page: 35 },
    { term: 'تفلات', translit: 'tafilāt', meaning: 'Zonder parfum.', explanation: '', notes: [], page: 36 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Oorzaken en plaats van de vergeetknieling',
      intro: 'Zoals in het schema van les 6.',
      columns: ['Oordeel', 'Wanneer neerknielen'],
      rows: [
        { label: 'Toevoegen', cells: ['ermee stoppen als je het tijdens het gebed merkt', 'na de groet'] },
        { label: 'Een plicht weglaten', cells: ['hersteld met de vergeetknieling', 'vóór de groet'] },
        { label: 'Een zuil weglaten (niet de openings-takbīr)', cells: ['inhalen, of de rakʿa vervalt als je al op die plek in de volgende bent', 'na de groet'] },
        { label: 'De openings-takbīr weglaten', cells: ['het gebed is niet begonnen; opnieuw bidden', 'geen knieling'] },
        { label: 'Twijfel zonder voorkeur', cells: ['bouwen op wat zeker is (het minste)', 'vóór de groet'] },
        { label: 'Twijfel met voorkeur', cells: ['bouwen op wat het waarschijnlijkst is', 'na de groet'] }
      ],
      page: 28
    },
    {
      type: 'compare',
      title: 'Geldige redenen om niet in gemeenschap te bidden',
      intro: 'Zoals in les 8.',
      columns: ['Bewijs'],
      rows: [
        { label: 'Ziekte die het zwaar of schadelijk maakt', cells: ['hij bleef weg toen hij ziek was: "laat Abū Bakr het gebed leiden"'] },
        { label: 'Je behoefte moeten doen, of eten dat klaarstaat', cells: ['"geen gebed als er eten klaarstaat"'] },
        { label: 'Hevige regen, wind of kou', cells: ['"bid in jullie onderkomens"'] },
        { label: 'Vrees voor jezelf, je gezin of je bezit', cells: ['"behalve met een geldige reden"'] }
      ],
      page: 35
    }
  ],
  sections: [
    { title: 'Voorbeelden van toevoegen', text: 'Groeten voordat het gebed af is, opstaan voor een vijfde rakʿa, of een extra sujūd.', page: 29 },
    { title: 'Wie de buiging vergeet', text: 'Herinnert hij het zich voordat hij op die plek in de volgende rakʿa is, dan gaat hij terug en maakt af; anders vervalt de vorige rakʿa en neemt de huidige haar plaats in; hij knielt na de groet.', page: 30 },
    { title: 'De vorm van de knieling bij recitatie', text: 'Eén keer neerknielen met takbīr en "Subḥāna rabbiya l-aʿlā" of wat is overgeleverd, dan opstaan zonder takbīr of groet; binnen het gebed wel takbīr bij het opstaan.', page: 31 },
    { title: 'Luisteraar en reciteerder', text: 'De luisteraar volgt de reciteerder: knielt die, dan knielt hij mee, en anders niet.', page: 31 },
    { title: 'De knielplaatsen', text: 'Veertien bekende plaatsen; over (Ṣād) is verschil, het meest aannemelijk is dat het een dankknieling is.', page: 32 },
    { title: 'Fouten bij de rijen', text: 'De rijen niet recht zetten, als laatkomer wachten in plaats van meteen mee te doen terwijl de imam knielt of zit, en een nieuwe rij beginnen voordat de vorige vol is.', page: 37 },
    { title: 'Vragen ter kennisname', text: 'Trek niemand uit een voorste rij; de hadith daarover is zwak. Je mag geen imam volgen die op tv of radio bidt, want het gemeenschappelijk gebed is samenkomen op één plaats en tijd.', more: FYI_NL, page: 38 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Voor wie het gemeenschappelijk gebed verplicht is', items: ['man', 'volwassen', 'vrij', 'in staat', 'thuis en op reis'], page: 34, origin: 'boek' },
    { kind: 'bewijs', title: 'Bewijzen dat het gemeenschappelijk gebed verplicht is', items: ['het bevel ertoe bij het gebed in gevaar (an-Nisāʾ 102)', 'de hadith van de blinde: "Hoor je de oproep? Geef er dan gehoor aan"', 'zijn voornemen de huizen van wie wegbleef in brand te steken'], page: 34, origin: 'boek' },
    { kind: 'onderscheid', title: 'Als de iqāma begint terwijl je vrijwillig bidt', items: ['In de eerste rakʿa: afbreken zonder groet.', 'In de tweede rakʿa: kort afmaken en aansluiten.'], page: 36, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De vergeetknieling is voor toevoegen, weglaten of twijfel, vóór of na de groet afhankelijk van de oorzaak.',
    'Knielen bij recitatie is sunna voor reciteerder en luisteraar: één knieling zonder groet.',
    'De dankknieling is bij een zegen of afgewend onheil, met dezelfde regels.',
    'Het gemeenschappelijk gebed is verplicht voor mannen en zevenentwintig graden beter dan alleen bidden.',
    'Met de buiging haal je de rakʿa; de rijen moeten recht en van voren af gevuld worden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wanneer kniel je als je de eerste tashahhud vergeten bent?', options: ['vóór de groet', 'na de groet', 'niet', 'je bidt opnieuw'], answer: 0, explain: 'Een plicht weggelaten, zoals in de hadith van Ibn Buḥayna.', page: 29 },
    { type: 'mc', q: 'Waarop bouw je bij twijfel zonder voorkeur?', options: ['op wat zeker is, het minste', 'op het meeste', 'je bidt opnieuw', 'op wat je wilt'], answer: 0, explain: 'En je knielt vóór de groet.', page: 30 },
    { type: 'tf', q: 'Volgens de juiste mening is de wassing vereist voor de knieling bij recitatie.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Niet vereist bij gebrek aan bewijs, maar het is beter als het kan.', page: 32 },
    { type: 'mc', q: 'Wat is volgens het boek het oordeel over het gemeenschappelijk gebed voor mannen?', options: ['verplicht', 'sunna', 'toegestaan', 'alleen een gemeenschapsplicht'], answer: 0, explain: 'Voor elke volwassen, vrije man die het kan.', page: 34 },
    { type: 'tf', q: 'Wie de imam in de buiging bereikt, heeft de rakʿa gehaald.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals in de hadith van Abū Bakra.', page: 36 },
    { type: 'mc', q: 'Mag je alleen achter de rij bidden?', options: ['alleen als er in de rij geen plaats is', 'altijd', 'het is aanbevolen', 'het is alleen afgeraden'], answer: 0, explain: 'Zoals in de hadith van Wābiṣa.', page: 37 }
  ]),
  note: 'Oefeningen van het boek op p. 33 en 39. De vragen op p. 38 staan in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '6', unit: 2, ar, nl }
