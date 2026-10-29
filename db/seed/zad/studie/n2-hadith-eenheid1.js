// Hoofdstukkaart bij الحديث (٢), eenheid 1: الأحاديث ١–٦ (lessen 1–6, boek p. 9–32).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De algemene uitleg (الشرح الإجمالي) staat in het boek bij
// hadith 1–6 (deels) "alleen ter kennisname"; wat daaruit komt is zo gemarkeerd. Uitspraken zonder bron
// (az-Zuhrī en Mālik op p. 19, Salmān op p. 31) en de hadith die an-Nawawī op p. 30 aanhaalt zonder
// bronvermelding staan niet in het hadith-tabblad.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (٢)، سلسلة زاد العلمية',
  pages: '9–32',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'الشرح الإجمالي في الكتاب للاطلاع فقط.'
const FYI_NL = 'De algemene uitleg staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'إن الله عز وجل قال: من عادى لي وليا فقد آذنته بالحرب، وما تقرب إلي عبدي بشيء أحب إلي مما افترضت عليه، وما يزال عبدي يتقرب إلي بالنوافل حتى أحبه، فإذا أحببته كنت سمعه الذي يسمع به وبصره الذي يبصر به ويده التي يبطش بها ورجله التي يمشي بها، وإن سألني لأعطينه، ولئن استعاذني لأعيذنه، وما ترددت عن شيء أنا فاعله ترددي عن نفس المؤمن يكره الموت وأنا أكره مساءته', takhrij: 'أخرجه البخاري', note: 'الحديث الأول.', pages: [9], nl: 'Allah, de Machtige en Verhevene, zei: "Wie een vriend van Mij vijandig behandelt, aan hem verklaar Ik de oorlog. Mijn dienaar nadert Mij met niets dat Mij liever is dan wat Ik hem verplicht heb, en Mijn dienaar blijft Mij naderen met vrijwillige daden totdat Ik hem liefheb. Als Ik hem liefheb, ben Ik zijn gehoor waarmee hij hoort, zijn zicht waarmee hij ziet, zijn hand waarmee hij grijpt en zijn voet waarmee hij loopt. Als hij Mij iets vraagt, geef Ik het hem zeker, en als hij bij Mij bescherming zoekt, bescherm Ik hem zeker. Ik aarzel bij niets wat Ik doe zoals Ik aarzel bij de ziel van de gelovige: hij heeft een hekel aan de dood en Ik heb er een hekel aan hem leed te doen."', nlNote: 'Hadith 1.' },
  { narrator: 'ابن مسعود', text: 'سألت: أي الأعمال أحب إلى الله؟ فقال: «الصلاة على وقتها»', takhrij: 'رواه البخاري ومسلم', note: 'في تفاضل الأعمال من حيث النوع.', pages: [13], nl: 'Ik vroeg: "Welke daad is Allah het liefst?" Hij zei: "Het gebed op zijn tijd."', nlNote: 'Over de rangorde van daden naar soort.' },
  { narrator: 'أنس بن مالك', text: 'جاء ثلاثة رهط إلى بيوت أزواج النبي ﷺ يسألون عن عبادة النبي ﷺ، فلما أخبروا كأنهم تقالوها، فقالوا: وأين نحن من النبي ﷺ؟! قد غفر له ما تقدم من ذنبه وما تأخر. قال أحدهم: أما أنا فإني أصلي الليل أبدا، وقال آخر: أنا أصوم الدهر ولا أفطر، وقال آخر: أنا أعتزل النساء فلا أتزوج أبدا. فجاء رسول الله ﷺ إليهم فقال: «أنتم الذين قلتم كذا وكذا؟ أما والله إني لأخشاكم لله وأتقاكم له، لكني أصوم وأفطر، وأصلي وأرقد، وأتزوج النساء، فمن رغب عن سنتي فليس مني»', takhrij: 'متفق عليه', note: 'الحديث الثاني.', pages: [16], nl: 'Drie mannen kwamen naar de huizen van de vrouwen van de Profeet ﷺ en vroegen naar zijn aanbidding. Toen zij het hoorden, vonden zij het blijkbaar weinig en zeiden: "Wat zijn wij vergeleken met de Profeet ﷺ? Hem is vergeven wat aan zonden voorafging en wat volgt." Een van hen zei: "Ik bid voortaan elke nacht door." Een ander zei: "Ik vast altijd en onderbreek het nooit." Een ander zei: "Ik houd mij afzijdig van vrouwen en trouw nooit." Toen kwam de Boodschapper van Allah ﷺ en zei: "Zijn jullie het die dit en dat zeiden? Bij Allah, ik vrees Allah het meest van jullie en ben het meest godvrezend, maar ik vast en ik eet, ik bid en ik slaap, en ik trouw met vrouwen. Wie zich afkeert van mijn soenna, hoort niet bij mij."', nlNote: 'Hadith 2.' },
  { narrator: '', text: 'أحب العمل إلى الله أدومه وإن قل', takhrij: 'متفق عليه', note: 'في الاقتصاد في العبادة.', pages: [17], nl: 'De daad die Allah het liefst is, is de meest bestendige, ook al is zij klein', nlNote: 'Over gematigdheid in aanbidding.' },
  { narrator: '', text: 'من أحدث في أمرنا هذا ما ليس فيه فهو رد', takhrij: 'متفق عليه', note: 'في ذم الزيادة على هدي النبي ﷺ.', pages: [18], nl: 'Wie in deze zaak van ons iets invoert wat er niet bij hoort, het wordt afgewezen', nlNote: 'Over het afkeuren van toevoegingen aan de leiding van de Profeet ﷺ.' },
  { narrator: '', text: 'إياكم والغلو في الدين فإنما هلك من كان قبلكم بالغلو في الدين', takhrij: 'رواه أحمد وصححه الألباني', note: 'في التحذير من الغلو.', pages: [19], nl: 'Pas op voor overdrijving in de godsdienst, want wie vóór jullie waren, gingen ten onder door overdrijving in de godsdienst', nlNote: 'Een waarschuwing tegen overdrijving.' },
  { narrator: 'ابن مسعود', text: 'هلك المتنطعون، قالها ثلاثا', takhrij: 'رواه مسلم', note: 'قال النووي: هم المتشددون في غير موضع التشديد.', pages: [19], nl: 'De overdrijvers gaan ten onder; hij zei het drie keer', nlNote: 'An-Nawawī: dat zijn zij die streng zijn waar strengheid niet past.' },
  { narrator: 'جابر بن عبد الله', text: 'مثلي ومثلكم كمثل رجل أوقد نارا فجعل الجنادب والفراش يقعن فيها وهو يذبهن عنها، وأنا آخذ بحجزكم عن النار وأنتم تفلتون من يدي', takhrij: 'أخرجه مسلم', note: 'الحديث الثالث.', pages: [20], nl: 'Mijn voorbeeld en het jullie is als dat van een man die een vuur aanstak; sprinkhanen en motten vielen erin en hij joeg ze er steeds van weg. Ik houd jullie bij je middel vast, weg van het Vuur, en jullie glippen uit mijn hand', nlNote: 'Hadith 3.' },
  { narrator: 'أنس بن مالك', text: 'يأتي على الناس زمان الصابر فيهم على دينه كالقابض على الجمر', takhrij: 'رواه الترمذي وصححه الألباني', note: 'الحديث الرابع.', pages: [23], nl: 'Er komt een tijd over de mensen waarin wie standvastig blijft in zijn godsdienst is als iemand die een gloeiende kool vasthoudt', nlNote: 'Hadith 4.' },
  { narrator: '', text: 'إن من ورائكم أيام الصبر، المتمسك فيهن يومئذ بمثل ما أنتم عليه كأجر خمسين منكم. قالوا: يا نبي الله، أو منهم؟ قال: بل منكم', takhrij: 'أخرجه الطبراني وصححه الألباني', note: 'مع الحديث الرابع؛ وبين ابن حجر أنه لا يدل على تفضيل غير الصحابة عليهم.', pages: [23], nl: 'Na jullie komen dagen van geduld; wie zich dan vasthoudt aan wat jullie nu doen, krijgt de beloning van vijftig van jullie. Zij zeiden: "O Profeet van Allah, of van hen?" Hij zei: "Nee, van jullie."', nlNote: 'Bij hadith 4; Ibn Ḥajar legt uit dat dit niet betekent dat anderen beter zijn dan de metgezellen.' },
  { narrator: 'جابر بن عبد الله', text: 'أن رجلا سأل رسول الله ﷺ فقال: أرأيت إذا صليت الصلوات المكتوبات، وصمت رمضان، وأحللت الحلال، وحرمت الحرام، ولم أزد على ذلك شيئا، أأدخل الجنة؟ قال: «نعم». قال: والله لا أزيد على ذلك شيئا', takhrij: 'رواه مسلم', note: 'الحديث الخامس.', pages: [26], nl: 'Een man vroeg de Boodschapper van Allah ﷺ: "Zeg mij, als ik de verplichte gebeden bid, Ramadan vast, het toegestane als toegestaan behandel en het verbodene als verboden, en daar niets aan toevoeg, ga ik dan het Paradijs binnen?" Hij zei: "Ja." De man zei: "Bij Allah, ik voeg daar niets aan toe."', nlNote: 'Hadith 5.' },
  { narrator: '', text: 'من صام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه', takhrij: 'متفق عليه', note: 'في أن الصوم من أسباب دخول الجنة.', pages: [27], nl: 'Wie Ramadan vast uit geloof en in de hoop op beloning, hem worden zijn voorgaande zonden vergeven', nlNote: 'Vasten als een van de oorzaken om het Paradijs binnen te gaan.' },
  { narrator: 'أبو هريرة', text: 'الصلوات الخمس، والجمعة إلى الجمعة، ورمضان إلى رمضان مكفرات ما بينهن إذا اجتنب الكبائر', takhrij: 'رواه مسلم', note: 'الحديث السادس.', pages: [29], nl: 'De vijf gebeden, van vrijdag tot vrijdag en van Ramadan tot Ramadan wissen uit wat ertussen ligt, zolang de grote zonden gemeden worden', nlNote: 'Hadith 6.' },
  { narrator: '', text: 'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه', takhrij: 'متفق عليه', note: 'مثال لنفي الإيمان، وهو من علامات الكبيرة.', pages: [29], nl: 'Niemand van jullie gelooft werkelijk totdat hij voor zijn broeder wenst wat hij voor zichzelf wenst', nlNote: 'Een voorbeeld van het ontkennen van geloof, een kenmerk van een grote zonde.' },
  { narrator: '', text: 'من غشنا فليس منا', takhrij: 'رواه مسلم', note: 'مثال للبراءة، وهي من علامات الكبيرة.', pages: [29], nl: 'Wie ons bedriegt, hoort niet bij ons', nlNote: 'Een voorbeeld van afstand nemen, een kenmerk van een grote zonde.' },
  { narrator: '', text: 'اجتنبوا السبع الموبقات. قالوا: وما هن؟ قال: الشرك بالله، والسحر، وقتل النفس التي حرم الله إلا بالحق، وأكل الربا، وأكل مال اليتيم، والتولي يوم الزحف، وقذف المحصنات الغافلات المؤمنات', takhrij: 'رواه البخاري ومسلم', note: 'من أمثلة الكبائر.', pages: [32], nl: 'Mijd de zeven verderfelijke zonden. Zij vroegen: "Welke zijn dat?" Hij zei: "Iets naast Allah aanbidden, tovenarij, het doden van een ziel die Allah onschendbaar maakte behalve met recht, woeker eten, het bezit van de wees eten, vluchten op de dag van de strijd, en kuise, nietsvermoedende gelovige vrouwen valselijk beschuldigen."', nlNote: 'Voorbeelden van grote zonden.' },
  { narrator: '', text: 'صنفان من أهل النار لم أرهما... ونساء كاسيات عاريات مميلات مائلات رؤوسهن كأسنمة البخت المائلة لا يدخلن الجنة ولا يجدن ريحها', takhrij: 'رواه مسلم', note: 'ذكره الكتاب في التبرج من الكبائر، واقتصر على بعضه.', pages: [32], nl: 'Twee soorten mensen van het Vuur heb ik niet gezien... en vrouwen die gekleed en toch naakt zijn, die anderen doen afwijken en zelf afwijken, met hoofden als de schuine bulten van kamelen; zij gaan het Paradijs niet binnen en ruiken zijn geur niet', nlNote: 'Genoemd bij het pronken (tabarruj) als grote zonde; het boek citeert een deel.' },
  { narrator: '', text: 'لعن الله الواشمات والمستوشمات والنامصات والمتنمصات والمتفلجات للحسن المغيرات خلق الله', takhrij: 'رواه البخاري ومسلم', note: 'ذكره الكتاب في النمص والوشم وتغيير الخلقة من الكبائر.', pages: [32], nl: 'Allah heeft vervloekt de vrouwen die tatoeëren en zich laten tatoeëren, die wenkbrauwen epileren en laten epileren, en die hun tanden uit elkaar vijlen voor de schoonheid, die Allahs schepping veranderen', nlNote: 'Genoemd bij epileren, tatoeëren en het veranderen van de schepping als grote zonden.' }
]

const TAKHRIJ_NL = { 'أخرجه البخاري': 'al-Bukhārī', 'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)', 'رواه أحمد وصححه الألباني': 'Aḥmad; al-Albānī verklaarde hem ṣaḥīḥ', 'رواه مسلم': 'Muslim', 'أخرجه مسلم': 'Muslim', 'رواه الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī verklaarde hem ṣaḥīḥ', 'أخرجه الطبراني وصححه الألباني': 'aṭ-Ṭabarānī; al-Albānī verklaarde hem ṣaḥīḥ' }
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'ابن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'أنس بن مالك': 'Anas ibn Mālik', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh' }

const PERSONS = [
  ['abu-hurayra', 'text', [9, 29], 'راوي الحديثين الأول والسادس؛ راوية الإسلام، روى أكثر من خمسة آلاف حديث (ت ٥٩هـ).', 'Overleveraar van hadith 1 en 6; "de overleveraar van de islam", met meer dan vijfduizend hadith (overl. 59 AH).'],
  ['anas-ibn-malik', 'text', [16, 23], 'راوي الحديثين الثاني والرابع؛ خادم رسول الله ﷺ، آخر من مات من الصحابة بالبصرة (ت ٩٣هـ).', 'Overleveraar van hadith 2 en 4; de dienaar van de Profeet ﷺ, de laatste metgezel die in Basra stierf (overl. 93 AH).'],
  ['jabir-ibn-abdallah', 'text', [20, 26], 'راوي الحديثين الثالث والخامس؛ غزا مع النبي ﷺ تسع عشرة غزوة.', 'Overleveraar van hadith 3 en 5; trok negentien keer met de Profeet ﷺ ten strijde.'],
  ['ibn-masud', 'text', [13, 19], 'سأل عن أحب الأعمال إلى الله، وروى «هلك المتنطعون».', 'Vroeg welke daad Allah het liefst is en overleverde "de overdrijvers gaan ten onder".'],
  ['ibn-uthaymin', 'text', [10], 'بين أن التردد لا يثبت لله على الإطلاق، وأنه هنا من أجل رحمة العبد المؤمن.', 'Legde uit dat aarzeling niet in algemene zin aan Allah wordt toegeschreven; hier gaat het om barmhartigheid voor de gelovige.'],
  ['ibn-taymiyya', 'text', [11, 17, 23], 'قال: من كان مؤمنًا تقيًّا كان لله وليًّا؛ وقرر أن الأنبياء لا يقرون على الصغائر.', 'Zei: wie gelovig en godvrezend is, is een vriend van Allah; en legde vast dat profeten niet in kleine zonden volharden.'],
  ['an-nawawi', 'text', [19, 27, 30], 'فسر المتنطعين بالمتشددين في غير موضع التشديد، وشرح «أحللت الحلال».', 'Legde de overdrijvers uit als wie streng zijn waar dat niet past, en verklaarde "het toegestane als toegestaan behandelen".'],
  ['ibn-hajar-al-asqalani', 'text', [23], 'بين أن أجر الخمسين لا يدل على أفضلية غير الصحابة.', 'Legde uit dat de beloning van vijftig niet betekent dat anderen beter zijn dan de metgezellen.'],
  ['ibn-rajab', 'text', [24], 'ذكر مدح المتمسك بدينه في آخر الزمان لأنه لا يجد أعوانًا.', 'Noemde de lof voor wie aan zijn godsdienst vasthoudt aan het einde der tijden, omdat hij geen helpers vindt.'],
  ['al-munawi', 'text', [24, 29], 'عرف الكبائر، ونقل عنه الكتاب من «فيض القدير» في الصابر على السنة.', 'Definieerde de grote zonden; het boek citeert uit zijn Fayḍ al-qadīr over wie standvastig blijft bij de soenna.'],
  ['ibn-al-qayyim', 'text', [25], 'وصف الذين غبطهم النبي ﷺ في آخر الزمان.', 'Beschreef de mensen die de Profeet ﷺ aan het einde der tijden benijdde.'],
  ['al-qurtubi', 'text', [26], 'قال: لو تواطأ أهل بلدة على ترك سنة لقوتلوا عليها حتى يرجعوا.', 'Zei: als de bewoners van een stad samen een soenna opgaven, zou tegen hen gestreden worden tot zij terugkeerden.'],
  ['al-qadi-iyad', 'text', [30], 'قال: الكبائر إنما يكفرها التوبة أو رحمة الله وفضله.', 'Zei: grote zonden worden alleen uitgewist door berouw of door Allahs barmhartigheid en gunst.'],
  ['al-albani', 'takhrij', [19, 23], 'صحح أحاديث الغلو والقابض على الجمر وأيام الصبر.', 'Verklaarde de hadith over overdrijving, de gloeiende kool en de dagen van geduld ṣaḥīḥ.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'الأحاديث ١–٦',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'ولاية الله ومحبته لمن تقرب إليه بالفرائض ثم النوافل، والاقتصاد في العبادة واتباع السنة دون غلو، وحرص النبي ﷺ على أمته، والصبر على الدين في آخر الزمان، ودخول الجنة بأداء الواجبات، وتكفير الصلوات والجمعة ورمضان للصغائر إذا اجتنبت الكبائر.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'ستة أحاديث، لكل درس حديث.',
    root: { label: 'الأحاديث ١–٦', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'من عادى لي وليا', sub: 'الحديث ١', page: 9, children: ['الولاية', 'الفرائض ثم النوافل', 'المحبة'] },
      { label: 'إني لأخشاكم لله', sub: 'الحديث ٢', page: 16, children: ['الاقتصاد', 'ترك الغلو', 'اتباع السنة'] },
      { label: 'مثلي ومثلكم', sub: 'الحديث ٣', page: 20, children: ['ضرب المثل', 'الحرص على الأمة'] },
      { label: 'القابض على الجمر', sub: 'الحديث ٤', page: 23, children: ['الفتن', 'أجر خمسين'] },
      { label: 'أأدخل الجنة؟', sub: 'الحديث ٥', page: 26, children: ['الواجبات', 'الحلال والحرام'] },
      { label: 'الصلوات الخمس', sub: 'الحديث ٦', page: 29, children: ['التكفير', 'الكبائر'] }
    ]
  },
  points: [
    { text: 'معاداة أولياء الله من كبائر الذنوب، والله يحارب من عاداهم.', page: 12 },
    { text: 'الولي هو المؤمن التقي، وليس من شرطه خوارق العادات، ولا يكون واسطة بين الله وعباده.', page: 11 },
    { text: 'جنس الفرائض أحب إلى الله من جنس النوافل، وكثرة النوافل سبب لمحبته.', page: 10 },
    { text: 'الاقتصاد في العبادة سنة، والزيادة على هدي النبي ﷺ مذمومة كالنقص عنه.', page: 18 },
    { text: 'الإنسان إلى النذير أحوج منه إلى البشير؛ التحلية بعد التخلية.', page: 22 },
    { text: 'زيادة أجر المتأخرين لا تدل على أفضليتهم على الصحابة.', page: 23 },
    { text: 'من اقتصر على الواجبات لا يحرم من الجنة، لكنه فوت ربحًا عظيمًا.', page: 26 },
    { text: 'الصغائر تكفرها الأعمال الصالحة، والكبائر لا بد لها من توبة.', page: 30 }
  ],
  terms: [
    { term: 'آذنته بالحرب', translit: 'ādhantuhu bi-l-ḥarb', meaning: 'أعلمته بالهلاك والنكال.', explanation: '', notes: [], page: 9 },
    { term: 'الولاية العامة', translit: 'al-wilāya al-ʿāmma', meaning: 'ولاية الله على الخلق كلهم تدبيرًا وقيامًا بشؤونهم، للمؤمن والكافر.', explanation: '', notes: [], page: 11 },
    { term: 'الولاية الخاصة', translit: 'al-wilāya al-khāṣṣa', meaning: 'ولاية الله للمتقين.', explanation: '', notes: [], page: 11 },
    { term: 'الرهط', translit: 'ar-rahṭ', meaning: 'الجماعة من ثلاثة أو سبعة إلى عشرة.', explanation: '', notes: [], page: 16 },
    { term: 'تقالوها', translit: 'taqāllūhā', meaning: 'عدوها قليلة.', explanation: '', notes: [], page: 16 },
    { term: 'رغب عن سنتي', translit: 'raghiba ʿan sunnatī', meaning: 'مال عن طريقتي وأعرض عنها.', explanation: '', notes: [], page: 17 },
    { term: 'المتنطعون', translit: 'al-mutanaṭṭiʿūn', meaning: 'المتشددون في غير موضع التشديد.', explanation: 'قاله النووي.', notes: [], page: 19 },
    { term: 'الحجز', translit: 'al-ḥujaz', meaning: 'جمع حجزة: معقد الإزار والسراويل.', explanation: 'كناية عن حرصه على منع أمته من المعاصي.', notes: [], page: 20 },
    { term: 'الجمر', translit: 'al-jamr', meaning: 'جمع جمرة: الشعلة من النار.', explanation: '', notes: [], page: 23 },
    { term: 'أرأيت', translit: 'a-raʾayta', meaning: 'أخبرني.', explanation: '', notes: [], page: 26 },
    { term: 'التكفير', translit: 'at-takfīr', meaning: 'التغطية، والمراد المحو.', explanation: '', notes: [], page: 29 },
    { term: 'الكبيرة', translit: 'al-kabīra', meaning: 'كل ذنب رتب عليه الشارع حدًّا أو وعيدًا أو لعنًا أو نفي إيمان أو براءة.', explanation: '', notes: [], page: 29 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'نوعا ولاية الله',
      intro: 'كما في فوائد الحديث الأول.',
      columns: ['لمن', 'معناها أو دليلها'],
      rows: [
        { label: 'عامة', cells: ['للخلق كلهم، المؤمن والكافر', 'التدبير والقيام بشؤونهم'] },
        { label: 'خاصة', cells: ['للمتقين', 'كما في البقرة ٢٥٧ ويونس ٦٢–٦٣'] }
      ],
      page: 11
    },
    {
      type: 'cards',
      title: 'تفاضل الأعمال',
      intro: 'كما في فوائد الحديث الأول.',
      nodes: [
        { label: 'من حيث الجنس', sub: 'الفرائض أحب من النوافل', page: 13 },
        { label: 'من حيث النوع', sub: 'الصلاة أحب مما دونها من الفرائض', page: 13 },
        { label: 'في أفرادها', sub: 'رجلان صليا صلاة واحدة وبينهما كما بين المشرق والمغرب', page: 13 }
      ]
    },
    {
      type: 'cards',
      title: 'علامات الكبيرة',
      intro: 'كما في شرح الحديث السادس.',
      nodes: [
        { label: 'حد في الدنيا', sub: 'كالزنى', page: 29 },
        { label: 'وعيد في الآخرة', sub: 'كأكل الربا', page: 29 },
        { label: 'لعن فاعله', sub: '', page: 29 },
        { label: 'نفي الإيمان', sub: '«لا يؤمن أحدكم...»', page: 29 },
        { label: 'البراءة', sub: '«من غشنا فليس منا»', page: 29 }
      ]
    }
  ],
  sections: [
    { title: '«كنت سمعه...»', text: 'أقرب الوجهين أن الله يسدد وليه في سمعه وبصره ويده ورجله، فلا يسمع ولا يبصر ولا يعمل إلا ما يرضيه.', page: 10 },
    { title: 'من الذي يجاب دعاؤه؟', text: 'إذا أحب الله عبدًا أجاب مسألته، إلا إذا دعا بإثم أو قطيعة رحم أو ظلم، فالنصوص يقيد بعضها بعضًا.', page: 14 },
    { title: 'الرد على من منع المباحات', text: 'الأولى التوسط: لا إفراط في الطيبات يؤدي إلى الترف، ولا منع لها يفضي إلى التنطع والخروج عن السنة.', page: 18 },
    { title: 'من يغبطهم النبي ﷺ في آخر الزمان', text: 'قال ابن القيم: المتمسكون بالسنة إذا رغب عنها الناس، التاركون لما أحدثوه، المجردون للتوحيد، المنتسبون إلى الله بالعبودية وإلى رسوله بالاتباع.', page: 25 },
    { title: 'مذهب أهل السنة في مرتكب الكبيرة', text: 'لا تسلبه الكبيرة اسم الإيمان، ولا يكفر ما لم يستحلها، ولا يخلد في النار.', page: 29 },
    { title: 'ماذا تكفر الجمعات ورمضان؟', text: 'كل واحد منها صالح للتكفير؛ فإن لم يصادف صغيرة كتبت له حسنات ورفعت له درجات.', page: 31 },
    { title: 'ترك السنن (للاطلاع فقط)', text: 'يجوز الاقتصار على الواجبات، لكن الصحابة كانوا يثابرون على السنن، وإنما لم ينبه النبي ﷺ السائل عليها تيسيرًا لقرب عهده بالإسلام.', more: FYI, page: 26 }
  ],
  keycards: [
    { kind: 'definitie', title: 'الولي', items: ['من كان مؤمنًا تقيًّا كان لله وليًّا (ابن تيمية).', 'يعرض عمل من زعمت له الولاية على الكتاب والسنة.'], page: 11, origin: 'boek' },
    { kind: 'onderscheid', title: 'تكفير الذنوب', items: ['الصغائر: تكفرها الأعمال الصالحة.', 'الكبائر: لا بد لها من توبة.', 'حقوق الناس: لا بد فيها من القصاص ولو صغيرة.'], page: 30, origin: 'boek' },
    { kind: 'opsomming', title: 'من يغبطهم النبي ﷺ', items: ['التمسك بالسنة إذا رغب عنها الناس', 'ترك المحدثات', 'تجريد التوحيد', 'الانتساب إلى الله ورسوله وحدهما'], page: 25, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الولي: المؤمن التقي؛ يتقرب بالفرائض ثم النوافل.',
    'الاقتصاد في العبادة واتباع السنة دون غلو ولا تفريط.',
    'النبي ﷺ حريص على أمته، والناس إلى النذير أحوج.',
    'الصابر على دينه في آخر الزمان كالقابض على الجمر.',
    'الصلوات والجمعة ورمضان تكفر الصغائر إذا اجتنبت الكبائر.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'أي الوجهين أقرب في «كنت سمعه الذي يسمع به»؟', options: ['يسدده الله في سمعه', 'يحل الله فيه', 'يسمع كل شيء', 'لا معنى له'], answer: 0, explain: 'وهذا أقرب الوجهين في الكتاب.', page: 10 },
    { type: 'tf', q: 'من شرط الولي أن يمشي على الماء أو يطير في السماء.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الولي من التزم بشرع الله.', page: 11 },
    { type: 'mc', q: 'ما معنى «المتنطعون»؟', options: ['المتشددون في غير موضع التشديد', 'المتساهلون', 'كثيرو الكلام', 'الفقهاء'], answer: 0, explain: 'كما قال النووي.', page: 19 },
    { type: 'mc', q: 'هل يدل «أجر خمسين منكم» على أفضلية المتأخرين على الصحابة؟', options: ['لا، زيادة الأجر لا تستلزم الأفضلية', 'نعم مطلقًا', 'نعم في الصلاة فقط', 'الحديث ضعيف'], answer: 0, explain: 'كما بين ابن حجر.', page: 23 },
    { type: 'tf', q: 'من اقتصر على الواجبات حرم من الجنة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا لوم عليه ولا يحرم من الجنة، لكنه فوت ربحًا عظيمًا.', page: 27 },
    { type: 'mc', q: 'ما الذي يكفر الكبائر؟', options: ['التوبة أو رحمة الله وفضله', 'الصلوات الخمس وحدها', 'صوم يوم عرفة وحده', 'لا شيء'], answer: 0, explain: 'كما قال القاضي عياض.', page: 30 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ١٥ و١٩ و٢٢ و٢٥ و٢٨ و٣٢. الشرح الإجمالي للأحاديث في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Hadith 1–6',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Allahs vriendschap en liefde voor wie Hem nadert met de verplichtingen en daarna vrijwillige daden; gematigdheid in aanbidding en het volgen van de soenna zonder overdrijving; de zorg van de Profeet ﷺ voor zijn umma; standvastigheid in de godsdienst aan het einde der tijden; het Paradijs binnengaan door de verplichtingen; en het uitwissen van kleine zonden door de gebeden, de vrijdag en Ramadan, zolang grote zonden gemeden worden.',
  source: { ...source, label: 'Kitāb al-Ḥadīth (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'Zes hadith, één per les.',
    root: { label: 'Hadith 1–6', sub: 'Eenheid 1' },
    nodes: [
      { label: '"Wie een vriend van Mij vijandig behandelt"', sub: 'hadith 1', page: 9, children: ['vriendschap', 'verplicht, dan vrijwillig', 'liefde'] },
      { label: '"Ik vrees Allah het meest"', sub: 'hadith 2', page: 16, children: ['gematigdheid', 'geen overdrijving', 'de soenna volgen'] },
      { label: '"Mijn voorbeeld en het jullie"', sub: 'hadith 3', page: 20, children: ['een vergelijking', 'zorg voor de umma'] },
      { label: 'De gloeiende kool', sub: 'hadith 4', page: 23, children: ['beproevingen', 'de beloning van vijftig'] },
      { label: '"Ga ik het Paradijs binnen?"', sub: 'hadith 5', page: 26, children: ['de verplichtingen', 'toegestaan en verboden'] },
      { label: 'De vijf gebeden', sub: 'hadith 6', page: 29, children: ['uitwissen', 'grote zonden'] }
    ]
  },
  points: [
    { text: 'Vijandschap tegen de vrienden van Allah is een grote zonde; Allah verklaart wie dat doet de oorlog.', page: 12 },
    { text: 'Een vriend van Allah is de godvrezende gelovige; wonderen zijn geen voorwaarde, en hij is geen tussenpersoon tussen Allah en Zijn dienaren.', page: 11 },
    { text: 'De verplichtingen zijn Allah als soort liever dan vrijwillige daden; veel vrijwillige daden leiden tot Zijn liefde.', page: 10 },
    { text: 'Gematigdheid in aanbidding is soenna; iets toevoegen aan de leiding van de Profeet ﷺ is even afkeurenswaardig als tekortschieten.', page: 18 },
    { text: 'De mens heeft een waarschuwer meer nodig dan een brenger van goed nieuws: eerst ontdoen, dan versieren.', page: 22 },
    { text: 'Een grotere beloning voor latere generaties betekent niet dat zij beter zijn dan de metgezellen.', page: 23 },
    { text: 'Wie zich tot de verplichtingen beperkt, wordt het Paradijs niet ontzegd, maar laat veel winst liggen.', page: 26 },
    { text: 'Kleine zonden worden uitgewist door goede daden; grote zonden vragen berouw.', page: 30 }
  ],
  terms: [
    { term: 'آذنته بالحرب', translit: 'ādhantuhu bi-l-ḥarb', meaning: 'Ik heb hem ondergang en straf aangekondigd.', explanation: '', notes: [], page: 9 },
    { term: 'الولاية العامة', translit: 'al-wilāya al-ʿāmma', meaning: 'Allahs algemene zorg: het besturen van de hele schepping, gelovigen en ongelovigen.', explanation: '', notes: [], page: 11 },
    { term: 'الولاية الخاصة', translit: 'al-wilāya al-khāṣṣa', meaning: 'Allahs bijzondere vriendschap met de godvrezenden.', explanation: '', notes: [], page: 11 },
    { term: 'الرهط', translit: 'ar-rahṭ', meaning: 'Een groep van drie of zeven tot tien.', explanation: '', notes: [], page: 16 },
    { term: 'تقالوها', translit: 'taqāllūhā', meaning: 'Zij vonden het weinig.', explanation: '', notes: [], page: 16 },
    { term: 'رغب عن سنتي', translit: 'raghiba ʿan sunnatī', meaning: 'Hij week af van mijn weg en keerde zich ervan af.', explanation: '', notes: [], page: 17 },
    { term: 'المتنطعون', translit: 'al-mutanaṭṭiʿūn', meaning: 'Zij die streng zijn waar strengheid niet past.', explanation: 'Volgens an-Nawawī.', notes: [], page: 19 },
    { term: 'الحجز', translit: 'al-ḥujaz', meaning: 'Meervoud van ḥujza: de plek waar de lendendoek of broek wordt vastgeknoopt.', explanation: 'Beeld voor zijn inzet om zijn umma van zonden te weerhouden.', notes: [], page: 20 },
    { term: 'الجمر', translit: 'al-jamr', meaning: 'Gloeiende kolen.', explanation: '', notes: [], page: 23 },
    { term: 'أرأيت', translit: 'a-raʾayta', meaning: 'Zeg mij.', explanation: '', notes: [], page: 26 },
    { term: 'التكفير', translit: 'at-takfīr', meaning: 'Bedekken; bedoeld is uitwissen.', explanation: '', notes: [], page: 29 },
    { term: 'الكبيرة', translit: 'al-kabīra', meaning: 'Een zonde waarop de Wetgever een straf, dreiging, vervloeking, ontkenning van geloof of afstand nemen stelde.', explanation: '', notes: [], page: 29 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Twee soorten vriendschap van Allah',
      intro: 'Zoals in de lessen uit hadith 1.',
      columns: ['Voor wie', 'Betekenis of bewijs'],
      rows: [
        { label: 'Algemeen', cells: ['de hele schepping, gelovig en ongelovig', 'besturen en zorgen voor hun zaken'] },
        { label: 'Bijzonder', cells: ['de godvrezenden', 'zoals in al-Baqara 2:257 en Yūnus 10:62–63'] }
      ],
      page: 11
    },
    {
      type: 'cards',
      title: 'Rangorde van daden',
      intro: 'Zoals in de lessen uit hadith 1.',
      nodes: [
        { label: 'Naar soort', sub: 'verplicht boven vrijwillig', page: 13 },
        { label: 'Naar daad', sub: 'het gebed boven lagere verplichtingen', page: 13 },
        { label: 'Per persoon', sub: 'twee mannen bidden hetzelfde gebed, met een verschil als tussen oost en west', page: 13 }
      ]
    },
    {
      type: 'cards',
      title: 'Kenmerken van een grote zonde',
      intro: 'Zoals in de uitleg bij hadith 6.',
      nodes: [
        { label: 'Een straf in deze wereld', sub: 'zoals bij zinā', page: 29 },
        { label: 'Een dreiging in het hiernamaals', sub: 'zoals bij woeker', page: 29 },
        { label: 'Vervloeking van de dader', sub: '', page: 29 },
        { label: 'Ontkenning van geloof', sub: '"niemand van jullie gelooft..."', page: 29 },
        { label: 'Afstand nemen', sub: '"wie ons bedriegt, hoort niet bij ons"', page: 29 }
      ]
    }
  ],
  sections: [
    { title: '"Ik ben zijn gehoor..."', text: 'De meest waarschijnlijke uitleg: Allah leidt Zijn vriend in zijn horen, zien, handelen en lopen, zodat hij alleen doet wat Allah welgevallig is.', page: 10 },
    { title: 'Wiens smeekbede wordt verhoord?', text: 'Als Allah een dienaar liefheeft, verhoort Hij zijn vraag, behalve als hij bidt om een zonde, het verbreken van familiebanden of onrecht; de teksten beperken elkaar.', page: 14 },
    { title: 'Weerlegging van wie het toegestane verbiedt', text: 'Het beste is het midden: niet zo veel genieten dat het tot weelde leidt, en het ook niet verbieden zodat je in overdrijving vervalt en buiten de soenna treedt.', page: 18 },
    { title: 'Wie de Profeet ﷺ benijdt aan het einde der tijden', text: 'Ibn al-Qayyim: wie de soenna vasthoudt als mensen zich ervan afkeren, wat zij invoerden laat, het tawḥīd zuiver houdt, en zich alleen verbindt aan Allah door aanbidding en aan Zijn Boodschapper door navolging.', page: 25 },
    { title: 'Ahl as-Sunna over wie een grote zonde begaat', text: 'De grote zonde neemt de naam gelovige niet weg; hij is geen ongelovige zolang hij haar niet toegestaan verklaart, en hij blijft niet eeuwig in het Vuur.', page: 29 },
    { title: 'Wat wissen de vrijdagen en Ramadan dan nog uit?', text: 'Elk ervan kan uitwissen; vindt het geen kleine zonde, dan worden er goede daden genoteerd en rangen verhoogd.', page: 31 },
    { title: 'Soenna-daden laten (alleen ter kennisname)', text: 'Je mag je tot de verplichtingen beperken, maar de metgezellen hielden vol in de soenna-daden; de Profeet ﷺ wees de vrager er niet op om het hem, als nieuwe moslim, makkelijk te maken.', more: FYI_NL, page: 26 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Een vriend van Allah', items: ['wie gelovig en godvrezend is, is een vriend van Allah (Ibn Taymiyya)', 'de daden van wie zo genoemd wordt, worden getoetst aan Koran en Sunna'], page: 11, origin: 'boek' },
    { kind: 'onderscheid', title: 'Het uitwissen van zonden', items: ['kleine zonden: door goede daden', 'grote zonden: berouw is nodig', 'rechten van mensen: vergelding is nodig, ook bij kleine'], page: 30, origin: 'boek' },
    { kind: 'opsomming', title: 'Wie de Profeet ﷺ benijdt', items: ['de soenna vasthouden als mensen zich ervan afkeren', 'nieuwigheden laten', 'het tawḥīd zuiver houden', 'zich alleen aan Allah en Zijn Boodschapper verbinden'], page: 25, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Een vriend van Allah is de godvrezende gelovige; hij nadert met de verplichtingen, dan met vrijwillige daden.',
    'Gematigd in aanbidding, de soenna volgen zonder overdrijving of nalatigheid.',
    'De Profeet ﷺ zorgt voor zijn umma; mensen hebben een waarschuwer meer nodig.',
    'Wie aan het einde der tijden standvastig blijft, houdt als het ware een gloeiende kool vast.',
    'De gebeden, de vrijdag en Ramadan wissen kleine zonden uit als grote gemeden worden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is de meest waarschijnlijke uitleg van "Ik ben zijn gehoor waarmee hij hoort"?', options: ['Allah leidt hem in zijn horen', 'Allah neemt zijn plaats in', 'hij hoort alles', 'het heeft geen betekenis'], answer: 0, explain: 'Dat is volgens het boek de meest waarschijnlijke uitleg.', page: 10 },
    { type: 'tf', q: 'Een vriend van Allah moet over water kunnen lopen of door de lucht vliegen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Een vriend van Allah houdt zich aan Allahs wet.', page: 11 },
    { type: 'mc', q: 'Wat betekent al-mutanaṭṭiʿūn?', options: ['wie streng is waar strengheid niet past', 'wie nalatig is', 'wie veel praat', 'de rechtsgeleerden'], answer: 0, explain: 'Zoals an-Nawawī uitlegt.', page: 19 },
    { type: 'mc', q: 'Betekent "de beloning van vijftig van jullie" dat latere generaties beter zijn dan de metgezellen?', options: ['nee, een grotere beloning betekent geen hogere rang', 'ja, altijd', 'alleen bij het gebed', 'de hadith is zwak'], answer: 0, explain: 'Zoals Ibn Ḥajar uitlegt.', page: 23 },
    { type: 'tf', q: 'Wie zich tot de verplichtingen beperkt, wordt het Paradijs ontzegd.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij wordt niet verweten en het Paradijs niet ontzegd, maar laat veel winst liggen.', page: 27 },
    { type: 'mc', q: 'Wat wist grote zonden uit?', options: ['berouw, of Allahs barmhartigheid en gunst', 'alleen de vijf gebeden', 'alleen het vasten van ʿArafa', 'niets'], answer: 0, explain: 'Zoals al-Qāḍī ʿIyāḍ zegt.', page: 30 }
  ]),
  note: 'Oefeningen van het boek op p. 15, 19, 22, 25, 28 en 32. De algemene uitleg bij de hadith staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-hadith', chapter: '1', unit: 1, ar, nl }
