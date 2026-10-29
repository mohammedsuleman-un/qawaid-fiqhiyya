// Hoofdstukkaart bij السيرة النبوية (٢): الشمائل النبوية, eenheid 4 (lessen 17–24, boek p. 52–77).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Bewust niet in het hadith-tabblad: «لا تشاء أن تراه من الليل مصليا...» op p. 54 en «لو أهدي إلي كراع» op
// p. 68, omdat de overleveraar in het boek moet worden nagekeken; het bericht op p. 67 dat het boek zelf
// zwak noemt; en de bewering zonder bron op p. 65 dat hij moest kiezen tussen koning-profeet en
// dienaar-profeet. De opmerking over ʿUthmān ibn Maẓʿūn als zoogbroeder (p. 63) is niet overgenomen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (٢): الشمائل النبوية، سلسلة زاد العلمية',
  pages: '52–77',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Seerah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'فإذا استيقظ فليقل: الحمد لله الذي عافاني في جسدي، ورد علي روحي، وأذن لي بذكره', takhrij: 'الترمذي وحسنه', note: '', pages: [52], nl: 'Als hij wakker wordt, laat hij zeggen: "Alle lof aan Allah, die mijn lichaam gezond hield, mijn ziel aan mij teruggaf en mij toestond Hem te gedenken."', nlNote: '' },
  { narrator: 'حذيفة بن اليمان', text: 'كان إذا قام من الليل يشوص فاه بالسواك', takhrij: 'البخاري ومسلم', note: '', pages: [52], nl: 'Als hij ’s nachts opstond, reinigde hij zijn mond met de miswāk', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'إذا استيقظ أحدكم من نومه فليغسل يده قبل أن يدخلها في وضوئه، فإن أحدكم لا يدري أين باتت يده', takhrij: 'متفق عليه', note: '', pages: [52], nl: 'Als een van jullie wakker wordt, laat hij zijn hand wassen voordat hij die in zijn waswater steekt, want hij weet niet waar zijn hand de nacht doorbracht', nlNote: '' },
  { narrator: 'عائشة', text: 'كان يصوم حتى نقول لا يفطر، ويفطر حتى نقول لا يصوم', takhrij: 'البخاري ومسلم', note: '', pages: [54], nl: 'Hij vastte tot wij zeiden: hij stopt niet meer, en hij at tot wij zeiden: hij vast niet meer', nlNote: '' },
  { narrator: '', text: 'لكني أصوم وأفطر، وأصلي وأرقد، وأتزوج النساء، فمن رغب عن سنتي فليس مني', takhrij: 'البخاري ومسلم', note: '', pages: [54], nl: 'Maar ik vast en ik eet, ik bid en ik slaap, en ik trouw met vrouwen; wie zich van mijn sunna afkeert, hoort niet bij mij', nlNote: '' },
  { narrator: 'عائشة', text: 'سئلت: هل كان يخص شيئا من الأيام؟ قالت: لا، كان عمله ديمة، وأيكم يستطيع ما كان يستطيع', takhrij: 'البخاري ومسلم', note: '', pages: [54], nl: 'Haar werd gevraagd of hij bepaalde dagen uitkoos. Zij zei: nee, zijn daden waren aanhoudend, en wie van jullie kan wat hij kon?', nlNote: '' },
  { narrator: 'عائشة', text: 'كان إذا لم يصل بالليل، منعه من ذلك نوم أو وجع، صلى من النهار ثنتي عشرة ركعة', takhrij: 'رواه مسلم', note: 'قضاء ما فات.', pages: [54], nl: 'Als hij ’s nachts niet bad doordat slaap of pijn hem verhinderde, bad hij overdag twaalf rakʿa’s', nlNote: 'Het inhalen van wat gemist werd.' },
  { narrator: 'عمر بن الخطاب', text: 'من نام عن حزبه أو عن شيء منه فقرأه فيما بين صلاة الفجر وصلاة الظهر كتب له كأنما قرأه من الليل', takhrij: 'رواه مسلم', note: '', pages: [55], nl: 'Wie zijn vaste deel verslaapt, of een stuk ervan, en het tussen het fajr- en het ẓuhr-gebed leest, voor hem wordt het opgeschreven alsof hij het ’s nachts las', nlNote: '' },
  { narrator: 'عائشة', text: 'عليكم من الأعمال ما تطيقون، فوالله لا يمل الله حتى تملوا، وكان أحب ذلك إليه الذي يدوم عليه صاحبه', takhrij: 'متفق عليه', note: '', pages: [55], nl: 'Doe de daden die jullie aankunnen, want bij Allah, Allah wordt het niet moe tot jullie het moe worden. Het liefst had hij de daad die iemand volhoudt', nlNote: '' },
  { narrator: 'عوف بن مالك', text: 'قام فقرأ سورة البقرة، لا يمر بآية رحمة إلا وقف فسأل، ولا يمر بآية عذاب إلا وقف فتعوذ، ثم ركع بقدر قيامه يقول: «سبحان ذي الجبروت والملكوت والكبرياء والعظمة»', takhrij: 'النسائي وصححه الألباني', note: 'طول القيام.', pages: [55], nl: 'Hij stond op en reciteerde al-Baqara. Bij elk vers over barmhartigheid stond hij stil en vroeg erom, en bij elk vers over straf stond hij stil en zocht bescherming. Daarna boog hij even lang als hij gestaan had en zei: "Glorie aan de Bezitter van macht, heerschappij, grootheid en majesteit."', nlNote: 'Lang staan in het gebed.' },
  { narrator: 'المغيرة بن شعبة', text: 'قام حتى انتفخت قدماه، فقيل له، فقال: «أفلا أكون عبدا شكورا»', takhrij: 'متفق عليه', note: '', pages: [55], nl: 'Hij stond in gebed tot zijn voeten opzwollen; toen dat tegen hem gezegd werd, zei hij: "Zou ik dan geen dankbare dienaar zijn?"', nlNote: '' },
  { narrator: 'عائشة', text: 'ما كان يزيد في رمضان ولا في غيره على إحدى عشرة ركعة، يصلي أربعا فلا تسأل عن حسنهن وطولهن، ثم أربعا، ثم ثلاثا... «يا عائشة، إن عيني تنامان ولا ينام قلبي»', takhrij: 'متفق عليه', note: 'من رواية أبي سلمة عن عائشة.', pages: [55], nl: 'In en buiten Ramadan bad hij niet meer dan elf rakʿa’s: vier, vraag niet hoe mooi en lang, dan vier, dan drie... "ʿĀʾisha, mijn ogen slapen, maar mijn hart slaapt niet."', nlNote: 'Via Abū Salama van ʿĀʾisha.' },
  { narrator: 'عبد الله بن مسعود', text: 'صليت ليلة مع رسول الله ﷺ فلم يزل قائما حتى هممت بأمر سوء: هممت أن أقعد وأدع النبي ﷺ', takhrij: 'متفق عليه', note: 'لم يقعد تأدبًا.', pages: [56], nl: 'Ik bad een nacht met de Boodschapper van Allah ﷺ, en hij bleef zo lang staan dat ik iets slechts van plan was: ik wilde gaan zitten en de Profeet ﷺ laten staan', nlNote: 'Hij ging niet zitten, uit respect.' },
  { narrator: 'عمران بن حصين', text: 'من صلى قائما فهو أفضل، ومن صلى قاعدا فله نصف أجر القائم، ومن صلى نائما فله نصف أجر القاعد', takhrij: 'رواه البخاري', note: 'محمول على النافلة؛ وفي الفريضة لا يجوز الجلوس إلا عند العجز وله الأجر كاملًا.', pages: [56], nl: 'Wie staand bidt, dat is beter; wie zittend bidt, krijgt de helft van de beloning van wie staat; en wie liggend bidt, krijgt de helft van de beloning van wie zit', nlNote: 'Dit geldt voor vrijwillig gebed; bij het verplichte gebed mag je alleen zitten als je niet kunt staan, en dan krijg je de volle beloning.' },
  { narrator: 'عائشة', text: 'ما رأيته صام شهرا كاملا منذ قدم المدينة إلا رمضان', takhrij: 'رواه مسلم', note: '', pages: [57], nl: 'Sinds hij in Medina kwam, heb ik hem geen hele maand zien vasten behalve Ramadan', nlNote: '' },
  { narrator: 'عائشة', text: 'ما كان يصوم في شهر أكثر من صيامه في شعبان', takhrij: 'البخاري ومسلم', note: '', pages: [57], nl: 'In geen maand vastte hij meer dan in Shaʿbān', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'أوصاني خليلي بثلاث: صيام ثلاثة أيام من كل شهر، وركعتي الضحى، وأن أوتر قبل أن أنام', takhrij: 'البخاري ومسلم', note: '', pages: [57], nl: 'Mijn dierbare vriend raadde mij drie dingen aan: drie dagen vasten elke maand, twee rakʿa’s ḍuḥā, en de witr bidden voordat ik slaap', nlNote: '' },
  { narrator: 'عائشة', text: 'كان يتحرى صوم الاثنين والخميس', takhrij: 'الترمذي وحسنه', note: '', pages: [57], nl: 'Hij vastte bij voorkeur op maandag en donderdag', nlNote: '' },
  { narrator: '', text: 'من لم يدع قول الزور والعمل به فليس لله حاجة في أن يدع طعامه وشرابه', takhrij: 'رواه البخاري', note: FYI_NOTE, pages: [58], nl: 'Wie valse woorden en het handelen ernaar niet laat, Allah heeft er geen behoefte aan dat hij zijn eten en drinken laat', nlNote: FYI_NOTE_NL },
  { narrator: 'الأغر المزني', text: 'إنه ليغان على قلبي، وإني لأستغفر الله في اليوم أكثر من مائة مرة', takhrij: 'رواه مسلم', note: 'يغان: يغطى ويغشى. ' + FYI_NOTE, pages: [58], nl: 'Mijn hart wordt soms bedekt, en ik vraag Allah meer dan honderd keer per dag om vergeving', nlNote: FYI_NOTE_NL },
  { narrator: 'عائشة', text: 'سئلت: أكان يسر بالقراءة أم يجهر؟ قالت: كل ذلك قد كان يفعل، قد كان ربما أسر وربما جهر', takhrij: 'الترمذي وصححه الألباني', note: 'قال السائل: الحمد لله الذي جعل في الأمر سعة.', pages: [58], nl: 'Haar werd gevraagd of hij zacht of hardop reciteerde. Zij zei: allebei; soms zacht en soms hardop', nlNote: 'De vrager zei: alle lof aan Allah, die er ruimte in heeft gelaten.' },
  { narrator: 'عبد الله بن مغفل', text: 'رأيت النبي ﷺ على ناقته يوم الفتح وهو يقرأ: ﴿إنا فتحنا لك فتحا مبينا﴾، فقرأ ورجع', takhrij: 'رواه البخاري', note: 'رجع: ردد صوته بالقراءة.', pages: [60], nl: 'Ik zag de Profeet ﷺ op de dag van de verovering op zijn kamelin, reciterend: "Wij hebben jou een duidelijke overwinning gegeven", en hij liet zijn stem golven', nlNote: 'Tarjīʿ: de stem bij het reciteren laten golven.' },
  { narrator: 'عبد الله بن الشخير', text: 'أتيته وهو يصلي ولجوفه أزيز كأزيز المرجل من البكاء', takhrij: 'أحمد وأبو داود وصححه الألباني', note: 'دليل جواز البكاء في الصلاة.', pages: [61], nl: 'Ik kwam bij hem terwijl hij bad, en uit zijn borst kwam van het huilen een geluid als van een kokende ketel', nlNote: 'Bewijs dat huilen in het gebed mag.' },
  { narrator: 'علي بن أبي طالب', text: 'ما كان فينا فارس يوم بدر غير المقداد، ولقد رأيتنا وما فينا إلا نائم، إلا رسول الله ﷺ تحت شجرة يصلي ويبكي حتى أصبح', takhrij: 'أحمد وصححه الأرناؤوط', note: '', pages: [61], nl: 'Bij Badr was al-Miqdād de enige ruiter onder ons. Ik zag ons allemaal slapen, behalve de Boodschapper van Allah ﷺ: hij bad en huilde onder een boom tot de ochtend', nlNote: '' },
  { narrator: 'عبد الله بن مسعود', text: '«اقرأ علي»... فقرأت سورة النساء حتى بلغت: ﴿فكيف إذا جئنا من كل أمة بشهيد وجئنا بك على هؤلاء شهيدا﴾، قال: «حسبك الآن»، فإذا عيناه تذرفان', takhrij: 'متفق عليه', note: '', pages: [61], nl: '"Reciteer voor mij"... Ik reciteerde soera an-Nisāʾ tot "Hoe zal het zijn als Wij uit elke gemeenschap een getuige brengen en jou als getuige over dezen brengen?" Hij zei: "Genoeg nu." Zijn ogen stroomden van tranen', nlNote: '' },
  { narrator: 'أسامة بن زيد', text: '«إن لله ما أخذ وله ما أعطى، وكل عنده بأجل مسمى، فلتصبر ولتحتسب»... فبكى، فقال سعد: أتبكي؟! قال: «إنما يرحم الله من عباده الرحماء»', takhrij: 'البخاري ومسلم', note: 'لما كان ابن لبعض بناته يقضي. ' + FYI_NOTE, pages: [62], nl: '"Aan Allah behoort wat Hij nam en wat Hij gaf, en alles heeft bij Hem een vastgestelde termijn; laat haar geduld hebben en op beloning hopen"... Toen huilde hij. Saʿd zei: "Huilt u?" Hij zei: "Allah is alleen barmhartig voor de barmhartigen onder Zijn dienaren."', nlNote: 'Toen een kleinzoon van hem stervende was. ' + FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'زار قبر أمه فبكى وأبكى من حوله، فقال: «استأذنت ربي في أن أستغفر لها فلم يؤذن لي، واستأذنته في أن أزور قبرها فأذن لي، فزوروا القبور فإنها تذكر الموت»', takhrij: 'رواه مسلم', note: FYI_NOTE, pages: [62], nl: 'Hij bezocht het graf van zijn moeder, huilde en deed wie om hem heen stonden huilen, en zei: "Ik vroeg mijn Heer toestemming om voor haar om vergeving te vragen, en dat werd mij niet toegestaan; ik vroeg toestemming om haar graf te bezoeken, en dat werd mij toegestaan. Bezoek dus de graven, want ze herinneren aan de dood."', nlNote: FYI_NOTE_NL },
  { narrator: 'البراء بن عازب', text: 'كنا مع رسول الله ﷺ في جنازة فجلس على شفير القبر فبكى حتى بل الثرى، ثم قال: «يا إخواني، لمثل هذا فأعدوا»', takhrij: 'أحمد وابن ماجه وحسنه الألباني', note: '', pages: [63], nl: 'Wij waren met de Boodschapper van Allah ﷺ bij een begrafenis. Hij zat aan de rand van het graf en huilde tot de aarde nat werd, en zei: "Mijn broeders, bereid je hierop voor."', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: '«إني لست أبكي، إنما هي رحمة، إن المؤمن بكل خير على كل حال، إن نفسه تنزع من بين جنبيه وهو يحمد الله تعالى»', takhrij: 'الترمذي في الشمائل وصححه الألباني', note: 'قاله لأم أيمن لما صاحت عند موت ابنة له.', pages: [63], nl: '"Ik huil niet zoals jij; het is barmhartigheid. De gelovige is in elke toestand in alle goedheid: zijn ziel wordt tussen zijn zijden weggetrokken terwijl hij Allah prijst."', nlNote: 'Gezegd tegen Umm Ayman, die het uitschreeuwde toen een kleindochter van hem stierf.' },
  { narrator: '', text: 'هون عليك فإني لست بملك، إنما أنا ابن امرأة من قريش تأكل القديد', takhrij: 'ابن ماجه وصححه الألباني', note: 'لرجل أصابته رعدة. ' + FYI_NOTE, pages: [65], nl: 'Rustig maar, ik ben geen koning; ik ben de zoon van een vrouw van Quraysh die gedroogd vlees at', nlNote: 'Tegen een man die beefde. ' + FYI_NOTE_NL },
  { narrator: 'عائشة', text: 'إنما كان فراشه الذي ينام عليه من أدم حشوه ليف', takhrij: 'متفق عليه', note: FYI_NOTE, pages: [65], nl: 'Zijn bed waarop hij sliep was van leer, gevuld met palmvezel', nlNote: FYI_NOTE_NL },
  { narrator: 'عبد الله بن مسعود', text: '«ما لي وللدنيا، إنما مثلي ومثل الدنيا كراكب استظل تحت شجرة ثم راح وتركها»', takhrij: 'أحمد وصححه الأرناؤوط', note: 'لما اضطجع على حصير فأثر في جنبه. ' + FYI_NOTE, pages: [66], nl: '"Wat heb ik met deze wereld? Ik ben met deze wereld als een ruiter die schaduw zocht onder een boom en daarna verderging en hem achterliet."', nlNote: 'Toen hij op een mat had gelegen die afdrukken op zijn zij achterliet. ' + FYI_NOTE_NL },
  { narrator: 'أنس بن مالك', text: 'لم يكن شخص أحب إليهم من رسول الله ﷺ، وكانوا إذا رأوه لم يقوموا لما يعلمون من كراهيته لذلك', takhrij: 'الترمذي وصححه الألباني', note: FYI_NOTE, pages: [66], nl: 'Niemand was hun dierbaarder dan de Boodschapper van Allah ﷺ, en toch stonden zij niet op als zij hem zagen, omdat zij wisten dat hij dat niet wilde', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'قوموا إلى سيدكم', takhrij: 'البخاري ومسلم', note: 'لما أقبل سعد بن معاذ للتحكيم؛ القيام إليه جائز. ' + FYI_NOTE, pages: [67], nl: 'Sta op naar jullie leider', nlNote: 'Toen Saʿd ibn Muʿādh kwam om te oordelen; opstaan om iemand tegemoet te gaan mag. ' + FYI_NOTE_NL },
  { narrator: 'عمر بن الخطاب', text: 'لا تطروني كما أطرت النصارى ابن مريم، إنما أنا عبد، فقولوا: عبد الله ورسوله', takhrij: 'رواه البخاري', note: 'الإطراء: الإفراط في المديح ومجاوزة الحد.', pages: [67], nl: 'Prijs mij niet overdreven zoals de christenen de zoon van Maryam overdreven prezen. Ik ben slechts een dienaar; zeg dus: de dienaar van Allah en Zijn Boodschapper', nlNote: 'Iṭrāʾ: overdreven lof die de grens overschrijdt.' },
  { narrator: 'عائشة', text: 'سئلت: ما كان يصنع في بيته؟ قالت: كان يكون في مهنة أهله، فإذا حضرت الصلاة خرج إلى الصلاة', takhrij: 'رواه البخاري', note: 'من رواية الأسود.', pages: [68], nl: 'Haar werd gevraagd wat hij thuis deed. Zij zei: hij hielp zijn huisgenoten, en als het tijd was voor het gebed, ging hij naar het gebed', nlNote: 'Via al-Aswad.' },
  { narrator: 'عائشة', text: 'كان خلقه القرآن', takhrij: 'رواه مسلم', note: '', pages: [69], nl: 'Zijn karakter was de Koran', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'خدمته عشر سنين فما قال لي أف قط، ولا لشيء صنعته لم صنعته، ولا لشيء تركته لم تركته', takhrij: 'متفق عليه واللفظ للترمذي', note: '', pages: [70], nl: 'Ik heb hem tien jaar gediend en hij heeft nooit "uf" tegen mij gezegd, nooit bij iets wat ik deed: waarom deed je dat, en nooit bij iets wat ik liet: waarom liet je dat', nlNote: '' },
  { narrator: 'عائشة', text: 'ما ضرب رسول الله ﷺ بيده شيئا قط إلا أن يجاهد في سبيل الله، ولا ضرب خادما ولا امرأة', takhrij: 'رواه مسلم', note: '', pages: [70], nl: 'De Boodschapper van Allah ﷺ heeft nooit iets met zijn hand geslagen, behalve in de strijd op de weg van Allah; hij sloeg nooit een bediende of een vrouw', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'كان أشد حياء من العذراء في خدرها، وكان إذا كره شيئا عرف في وجهه', takhrij: 'متفق عليه', note: 'الخدر: الستر. ' + FYI_NOTE, pages: [71], nl: 'Hij was verlegener dan een maagd achter haar gordijn, en als hij iets niet goed vond, zag je dat aan zijn gezicht', nlNote: FYI_NOTE_NL }
]

const TAKHRIJ_NL = {
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه مسلم': 'Muslim',
  'رواه البخاري': 'al-Bukhārī',
  'النسائي وصححه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد وأبو داود وصححه الألباني': 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد وصححه الأرناؤوط': 'Aḥmad; al-Arnaʾūṭ noemde hem ṣaḥīḥ',
  'أحمد وابن ماجه وحسنه الألباني': 'Aḥmad en Ibn Māja; al-Albānī noemde hem ḥasan',
  'الترمذي في الشمائل وصححه الألباني': 'at-Tirmidhī in ash-Shamāʾil; al-Albānī noemde hem ṣaḥīḥ',
  'ابن ماجه وصححه الألباني': 'Ibn Māja; al-Albānī noemde hem ṣaḥīḥ',
  'متفق عليه واللفظ للترمذي': 'al-Bukhārī en Muslim, in de bewoording van at-Tirmidhī'
}
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'حذيفة بن اليمان': 'Ḥudhayfa ibn al-Yamān', 'عائشة': 'ʿĀʾisha', 'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'عوف بن مالك': 'ʿAwf ibn Mālik', 'المغيرة بن شعبة': 'al-Mughīra ibn Shuʿba', 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'عمران بن حصين': 'ʿImrān ibn Ḥuṣayn', 'الأغر المزني': 'al-Agharr al-Muzanī', 'عبد الله بن مغفل': 'ʿAbd Allāh ibn Mughaffal', 'عبد الله بن الشخير': 'ʿAbd Allāh ibn ash-Shikhkhīr', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib', 'أسامة بن زيد': 'Usāma ibn Zayd', 'البراء بن عازب': 'al-Barāʾ ibn ʿĀzib', 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'أنس بن مالك': 'Anas ibn Mālik', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī' }

const PERSONS = [
  ['ibn-al-qayyim', 'text', [52, 60, 66], 'قال: من تدبر نومه ويقظته ﷺ وجده أعدل نوم وأنفعه؛ ووصف هديه في القراءة.', 'Zei: wie over zijn slapen en waken ﷺ nadenkt, ziet de meest evenwichtige en nuttige slaap; en beschreef zijn manier van reciteren.'],
  ['abu-hurayra', 'text', [52, 57, 62, 66, 76], 'روى ذكر الاستيقاظ، ووصية «أوصاني خليلي بثلاث».', 'Overleveraar van het gedenken bij het opstaan en van "mijn dierbare vriend raadde mij drie dingen aan".'],
  ['hudhayfa-ibn-al-yaman', 'text', [52], 'روى استعماله السواك إذا قام من الليل.', 'Overleverde dat hij de miswāk gebruikte als hij ’s nachts opstond.'],
  ['ibn-abbas', 'text', [53, 59, 63, 72, 74], 'روى قراءته خواتيم آل عمران إذا استيقظ، وسنه ﷺ عند وفاته.', 'Overleverde dat hij bij het opstaan het einde van Āl ʿImrān reciteerde, en zijn leeftijd ﷺ bij zijn dood.'],
  ['aisha', 'text', [54, 55, 56, 57, 58, 65, 68, 69, 70, 73, 74, 75], 'روت كثيرًا من عبادته وخلقه وبيته ووفاته ﷺ، وتوفي بين سحرها ونحرها.', 'Overleverde veel over zijn aanbidding, karakter, thuis en sterven ﷺ; hij stierf tegen haar borst.'],
  ['umar-ibn-al-khattab', 'text', [55, 67], 'روى «من نام عن حزبه» و«لا تطروني».', 'Overleveraar van "wie zijn vaste deel verslaapt" en "prijs mij niet overdreven".'],
  ['umm-salama', 'text', [55, 58], 'روت تقطيعه القراءة آية آية.', 'Overleverde dat hij vers voor vers reciteerde.'],
  ['awf-ibn-malik', 'text', [55], 'وصف طول قيامه وركوعه وسجوده.', 'Beschreef hoe lang hij stond, boog en neerknielde.'],
  ['al-mughira-ibn-shuba', 'text', [55, 67], 'روى «أفلا أكون عبدًا شكورًا»، وقام على رأسه ﷺ في الحديبية إغاظة للمشركين.', 'Overleveraar van "zou ik geen dankbare dienaar zijn?"; stond bij al-Ḥudaybiya bij hem ﷺ om de polytheïsten te ergeren.'],
  ['abu-salama-ibn-abd-ar-rahman', 'text', [55], 'روى عن عائشة صفة صلاته بالليل.', 'Overleverde van ʿĀʾisha hoe hij ’s nachts bad.'],
  ['ibn-masud', 'text', [56, 57, 60, 61, 66], 'صلى معه حتى هم أن يقعد، وقرأ عليه سورة النساء فبكى.', 'Bad met hem tot hij wilde gaan zitten, en reciteerde soera an-Nisāʾ voor hem waarop hij huilde.'],
  ['an-nawawi', 'text', [56, 65, 73], 'قال: يجوز للمقتدي القعود إذا عجز، وإنما لم يقعد ابن مسعود تأدبًا.', 'Zei: wie het gebed volgt mag gaan zitten als hij niet kan staan; Ibn Masʿūd ging niet zitten uit respect.'],
  ['hafsa-bint-umar', 'text', [56], 'قالت: ما رأيته صلى في سبحته قاعدًا حتى كان قبل وفاته بعام.', 'Zei: ik zag hem pas een jaar voor zijn dood zittend vrijwillig bidden.'],
  ['al-qadi-abd-al-wahhab', 'text', [56], 'قال: أفضل جلسات المصلي قاعدًا التربع لأنه أوقر.', 'Zei: de beste houding voor wie zittend bidt is kleermakerszit, omdat die het waardigst is.'],
  ['imran-ibn-husayn', 'text', [56], 'روى «من صلى قائمًا فهو أفضل».', 'Overleveraar van "wie staand bidt, dat is beter".'],
  ['anas-ibn-malik', 'text', [57, 62, 66, 67, 68, 70, 71, 73], 'روى كثيرًا من صومه وتواضعه وخلقه وآخر نظرة إليه.', 'Overleverde veel over zijn vasten, nederigheid, karakter en de laatste blik op hem.'],
  ['ibn-qudama', 'text', [57], 'قال: صيام ثلاثة أيام من كل شهر مستحب لا نعلم فيه خلافًا.', 'Zei: drie dagen per maand vasten is aanbevolen; wij kennen daarover geen meningsverschil.'],
  ['ahmad-ibn-hanbal', 'text', [58], 'قال: ينبغي للصائم أن يتعاهد صومه من لسانه.', 'Zei: de vastende hoort zijn vasten tegen zijn tong te beschermen.'],
  ['ibn-hajar-al-asqalani', 'text', [59, 62, 71, 74], 'قال: كانت قراءته متوسطة لا في نهاية الجهر ولا في غاية الإخفاء.', 'Zei: zijn recitatie was gematigd, niet erg luid en niet erg zacht.'],
  ['al-bayhaqi', 'takhrij', [59], 'أخرج قول ابن عباس في التدبر.', 'Nam de uitspraak van Ibn ʿAbbās over overdenken op.'],
  ['al-ajurri', 'text', [59], 'قال: القليل من القرآن مع التدبر أحب إلي من كثير بغير تدبر.', 'Zei: een beetje Koran met overdenking heb ik liever dan veel zonder.'],
  ['abu-musa-al-ashari', 'text', [60], 'استمع النبي ﷺ لقراءته، فقال: لو علمت لحبرته لك تحبيرًا.', 'De Profeet ﷺ luisterde naar zijn recitatie; hij zei: had ik het geweten, dan had ik het voor u nog mooier gemaakt.'],
  ['mulla-ali-al-qari', 'text', [60, 65, 71], 'قال: معنى الترجيع تحسين التلاوة، والتكلف بألحان الغناء كرهه السلف.', 'Zei: tarjīʿ is mooi reciteren; de voorgangers keurden het aanleren van zangmelodieën af.'],
  ['ali-ibn-abi-talib', 'text', [61], 'رآه ليلة بدر يصلي ويبكي حتى أصبح.', 'Zag hem in de nacht van Badr bidden en huilen tot de ochtend.'],
  ['ibn-battal', 'text', [62], 'قال: بكى لأنه مثل لنفسه أهوال يوم القيامة.', 'Zei: hij huilde omdat hij zich de verschrikkingen van de Opstandingsdag voorstelde.'],
  ['usama-ibn-zayd', 'text', [62], 'روى بكاءه عند موت ابن ابنته.', 'Overleverde dat hij huilde toen zijn kleinzoon stierf.'],
  ['sad-ibn-ubada', 'text', [62], 'قال له: أتبكي؟', 'Zei tegen hem: huilt u?'],
  ['al-bara-ibn-azib', 'text', [63], 'رآه يبكي على شفير القبر.', 'Zag hem huilen aan de rand van een graf.'],
  ['uthman-ibn-mazun', 'text', [63], 'قبله النبي ﷺ وهو ميت وهو يبكي.', 'De Profeet ﷺ kuste hem na zijn dood, huilend.'],
  ['umm-ayman', 'text', [63], 'صاحت عند موت ابنة له فأنكر عليها.', 'Schreeuwde het uit toen een kleindochter van hem stierf; hij wees haar terecht.'],
  ['al-qadi-iyad', 'text', [65], 'قال: كان أشد الناس تواضعًا وأقلهم كبرًا.', 'Zei: hij was de meest nederige van alle mensen en de minst hoogmoedige.'],
  ['abu-dharr', 'text', [66], 'روى مع أبي هريرة جلوسه بين أصحابه لا يعرف.', 'Overleverde met Abū Hurayra dat hij onopvallend tussen zijn metgezellen zat.'],
  ['ibn-uthaymin', 'text', [66, 69], 'قسم القيام إلى ثلاثة: للشخص وعليه وإليه؛ وبين حسن الخلق مع الله ومع الخلق.', 'Verdeelde opstaan in drie soorten: voor iemand, bij iemand en naar iemand toe; en legde goed karakter tegenover Allah en de mensen uit.'],
  ['sad-ibn-muadh', 'text', [67], 'قال النبي ﷺ لما أقبل: «قوموا إلى سيدكم».', 'Toen hij kwam, zei de Profeet ﷺ: "Sta op naar jullie leider."'],
  ['ibn-kathir', 'text', [69, 75], 'قال: صار امتثال القرآن سجية له؛ وذكر تواتر دفنه في حجرة عائشة.', 'Zei: de Koran naleven werd zijn natuur; en noemde dat zijn begrafenis in de kamer van ʿĀʾisha massaal overgeleverd is.'],
  ['jabir-ibn-abdallah', 'text', [71], 'قال: ما سئل شيئًا قط فقال: لا.', 'Zei: hem werd nooit iets gevraagd waarop hij nee zei.'],
  ['abu-said-al-khudri', 'text', [71], 'قال: كان أشد حياء من العذراء في خدرها.', 'Zei: hij was verlegener dan een maagd achter haar gordijn.'],
  ['zaynab-bint-jahsh', 'text', [72], 'في قصة زواجه بها نزلت آية الحجاب.', 'Bij zijn huwelijk met haar werd het vers over het gordijn geopenbaard.'],
  ['al-qurtubi', 'text', [74], 'ذكر فائدتين في تشديد الموت على الأنبياء.', 'Noemde twee wijsheden in de zware dood van de profeten.'],
  ['ibn-rajab', 'text', [74], 'قال: كانت وفاته يوم الاثنين في ربيع الأول بغير خلاف.', 'Zei: hij stierf zonder meningsverschil op een maandag in Rabīʿ al-Awwal.'],
  ['abu-bakr-as-siddiq', 'text', [73, 75, 76], 'صلى بالناس في مرضه، وروى أن الأنبياء يدفنون حيث يقبضون، و«لا نورث».', 'Leidde het gebed tijdens zijn ziekte, en overleverde dat profeten begraven worden waar zij sterven, en "wij laten geen erfenis na".'],
  ['fatima', 'text', [76], 'سألت أبا بكر ميراثها من أبيها.', 'Vroeg Abū Bakr om haar erfdeel van haar vader.'],
  ['al-albani', 'takhrij', [55, 58, 61, 63, 65, 73, 75, 76], 'صحح أو حسن كثيرًا من الأحاديث في هذه الدروس، وذكر من روى «لا نورث» من الصحابة.', 'Noemde veel hadith in deze lessen ṣaḥīḥ of ḥasan, en noemde de metgezellen die "wij laten geen erfenis na" overleverden.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'الشمائل: العبادة والبكاء والتواضع والخلق والوفاة',
  subtitle: 'ثمانية دروس مجموعة في صفحة واحدة',
  summary: 'هديه ﷺ عند الاستيقاظ، وعبادته في الصلاة والصوم والقراءة، وبكاؤه، وتواضعه ونهيه عن إطرائه، وحسن خلقه وسخاؤه وحياؤه، ثم سنه ووفاته وموضع دفنه وميراثه.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'ثمانية دروس تختم الشمائل.',
    root: { label: 'الشمائل', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'الاستيقاظ', sub: 'الدرس ١٧', page: 52, children: ['الذكر', 'السواك', 'غسل اليدين'] },
      { label: 'العبادة', sub: 'الدرس ١٨', page: 54, children: ['المداومة', 'طول القيام', 'الصوم', 'القراءة'] },
      { label: 'البكاء', sub: 'الدرس ١٩', page: 61, children: ['في الصلاة', 'عند القرآن', 'عند الموت رحمة'] },
      { label: 'التواضع', sub: 'الدرسان ٢٠–٢١', page: 65, children: ['الفراش والمجلس', 'كراهية القيام له', 'لا تطروني', 'في بيته'] },
      { label: 'الخلق والسخاء', sub: 'الدرسان ٢٢–٢٣', page: 69, children: ['خلقه القرآن', 'الرفق', 'ما سئل فقال لا', 'الحياء'] },
      { label: 'الوفاة', sub: 'الدرس ٢٤', page: 72, children: ['ثلاث وستون سنة', 'آخر نظرة', 'لا نورث'] }
    ]
  },
  points: [
    { text: 'كان ينام أول الليل ويستيقظ أول النصف الثاني فيستاك ويتوضأ ويصلي، وهذا أعدل النوم.', page: 52 },
    { text: 'لم تخل لحظة من حياته من عبادة، لكن باعتدال وتوسط بلا تقصير ولا غلو.', page: 54 },
    { text: 'أحب العمل إليه ما داوم عليه صاحبه، وكان يقضي ما فاته من الليل في النهار.', page: 55 },
    { text: 'كانت قراءته ترتيلًا متوسطة بين الجهر والإخفاء، والقرآن أنزل للتدبر.', page: 59 },
    { text: 'البكاء في الصلاة لا يفسدها على الصحيح، وبكاؤه عند الموت كان رحمة لا جزعًا.', page: 61 },
    { text: 'كان متواضعًا من غير ذلة، جوادًا من غير سرف، ونهى عن إطرائه كما أطرت النصارى ابن مريم.', page: 67 },
    { text: 'حسن الخلق تحصيل الفضائل وترك الرذائل، وكان خلقه القرآن.', page: 69 },
    { text: 'حذر في آخر لحظاته من اتخاذ قبور الأنبياء مساجد، فكيف بقبور الصالحين.', page: 74 }
  ],
  terms: [
    { term: 'يشوص فاه', translit: 'yashūṣu fāh', meaning: 'يدلك فمه وينظفه بالسواك.', explanation: '', notes: [], page: 52 },
    { term: 'ديمة', translit: 'dīma', meaning: 'دائم مستمر.', explanation: '', notes: [], page: 54 },
    { term: 'السبحة', translit: 'as-subḥa', meaning: 'النافلة.', explanation: '', notes: [], page: 56 },
    { term: 'يغان على قلبي', translit: 'yughānu ʿalā qalbī', meaning: 'يغطى ويغشى عليه.', explanation: '', notes: [], page: 58 },
    { term: 'رجع', translit: 'rajjaʿa', meaning: 'ردد صوته بالقراءة.', explanation: 'والمراد تحسين التلاوة لا ترجيع الغناء.', notes: [], page: 60 },
    { term: 'أزيز المرجل', translit: 'azīz al-mirjal', meaning: 'صوت غليان الماء في الإناء.', explanation: '', notes: [], page: 61 },
    { term: 'تقعقع', translit: 'taqaʿqaʿ', meaning: 'تضطرب.', explanation: '', notes: [], page: 62 },
    { term: 'الأدم', translit: 'al-adam', meaning: 'جمع أديم: الجلد المدبوغ.', explanation: '', notes: [], page: 65 },
    { term: 'الإطراء', translit: 'al-iṭrāʾ', meaning: 'الإفراط في المديح ومجاوزة الحد.', explanation: 'وقيل: المديح بالباطل والكذب.', notes: [], page: 67 },
    { term: 'الإهالة السنخة', translit: 'al-ihāla as-sanikha', meaning: 'دهن اللحم الجامد المتغير الريح من طول المكث.', explanation: '', notes: [], page: 68 },
    { term: 'يفلي ثوبه', translit: 'yaflī thawbah', meaning: 'يفتشه.', explanation: '', notes: [], page: 68 },
    { term: 'في مهنة أهله', translit: 'fī mihnat ahlih', meaning: 'في خدمة أهله.', explanation: '', notes: [], page: 68 },
    { term: 'الخلق', translit: 'al-khuluq', meaning: 'السجية والطبيعة والمروءة: صورة الإنسان الباطنة.', explanation: '', notes: [], page: 69 },
    { term: 'الخدر', translit: 'al-khidr', meaning: 'الستر.', explanation: '', notes: [], page: 71 },
    { term: 'السجف', translit: 'as-sijf', meaning: 'الستر.', explanation: '', notes: [], page: 73 },
    { term: 'السحر / النحر', translit: 'as-saḥr / an-naḥr', meaning: 'الرئة / مجمع التراقي.', explanation: '', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'أقسام القيام (للاطلاع فقط)',
      intro: 'كما ذكر ابن عثيمين في الدرس العشرين.',
      columns: ['معناه', 'حكمه'],
      rows: [
        { label: 'القيام له', cells: ['يقوم إجلالًا إذا دخل', 'لا بأس به'] },
        { label: 'القيام إليه', cells: ['يتقدم إلى القادم خطوات', 'جائز: «قوموا إلى سيدكم»'] },
        { label: 'القيام عليه', cells: ['يقوم على رأسه وهو جالس', 'لا يجوز إلا إغاظة للمشركين'] }
      ],
      page: 66
    },
    {
      type: 'compare',
      title: 'صومه ﷺ',
      intro: 'كما في الدرس الثامن عشر.',
      columns: ['الدليل'],
      rows: [
        { label: 'لم يصم شهرًا كاملًا إلا رمضان', cells: ['حديث عائشة عند مسلم'] },
        { label: 'أكثر صومه في شعبان', cells: ['حديث عائشة في الصحيحين'] },
        { label: 'ثلاثة أيام من كل شهر', cells: ['وصية أبي هريرة'] },
        { label: 'الاثنين والخميس', cells: ['حديث عائشة عند الترمذي'] }
      ],
      page: 57
    }
  ],
  sections: [
    { title: 'سنن الاستيقاظ', text: 'الذكر، والسواك، وغسل اليدين ثلاثًا، والاستنثار ثلاثًا، ومسح أثر النوم عن الوجه، وقراءة خواتيم آل عمران لمن استيقظ من الليل.', page: 52 },
    { title: 'الجلوس في الصلاة', text: 'صلى قاعدًا في النافلة لما أسن وثقل، وليس للجلوس صورة مخصوصة غير المنهي عنه؛ وفي الفريضة لا يجلس إلا عاجز وله الأجر كاملًا.', page: 56 },
    { title: 'صيانة الصوم (للاطلاع فقط)', text: 'يجب على الصائم أن ينزه صومه عن الكذب والغيبة والشتم.', more: FYI, page: 58 },
    { title: 'هديه في القراءة', text: 'كان له حزب لا يخل به، يقرأ ترتيلًا آية آية، ويستعيذ قبل القراءة، ويحب أن يسمعه من غيره، ولا يمنعه منه إلا الجنابة.', page: 60 },
    { title: 'بكاؤه عند ذكر الشهادة (للاطلاع فقط)', text: 'قال ابن بطال: مثل لنفسه أهوال يوم القيامة؛ وقال ابن حجر: بكى رحمة لأمته لأنه سيشهد بعملهم.', more: FYI, page: 62 },
    { title: 'تواضعه في المجلس (للاطلاع فقط)', text: 'كان يجلس بين أصحابه فلا يعرفه الغريب حتى يسأل، فبنوا له دكانًا من طين يجلس عليه.', more: FYI, page: 66 },
    { title: 'تواضعه في بيته', text: 'كان بشرًا من البشر يفلي ثوبه ويحلب شاته ويخدم نفسه، ويسلم على الصبيان ويمسح رؤوسهم.', page: 68 },
    { title: 'رفقه', text: 'قال لعائشة لما ردت على اليهود: «مهلًا يا عائشة، إن الله يحب الرفق في الأمر كله»، وقال في الأعرابي الذي بال في المسجد: «فإنما بعثتم ميسرين».', page: 70 },
    { title: 'سخاؤه', text: 'ما سئل شيئًا قط فقال لا، وكان أجود ما يكون في رمضان، ولا يدخر شيئًا لغد إلا قوت أهله.', more: FYI, page: 71 },
    { title: 'إشارات قرب الأجل', text: 'قال في حجة الوداع: «لعلي لا أحج بعد حجتي هذه»، وأمر أبا بكر أن يصلي بالناس، وفيه إشارة إلى خلافته.', page: 72 },
    { title: 'موضع دفنه', text: 'دفن حيث قبض في حجرة عائشة، ثم دفن فيها أبو بكر ثم عمر؛ وتشرع زيارة قبره بلا شد رحل، ومن البدع طلب الدعاء منه والصلاة إلى القبر والتمسح به.', page: 75 },
    { title: 'ميراثه', text: '«لا نورث، ما تركنا صدقة»؛ ورواه جمع من الصحابة كما ذكر الألباني.', page: 76 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'حسن الخلق نوعان', items: ['مع الله: تلقي أحكامه بالرضا والتسليم', 'مع الخلق: كف الأذى والصبر على الأذى وطلاقة الوجه'], page: 69, origin: 'boek' },
    { kind: 'opsomming', title: 'من البدع عند قبره ﷺ', items: ['طلب الدعاء أو الشفاعة منه', 'جعل القبر قبلة والصلاة إليه', 'التمسح بالقبر أو تقبيله'], page: 75, origin: 'boek' },
    { kind: 'bewijs', title: 'فائدتا تشديد الموت على الأنبياء', items: ['تكميل فضائلهم ورفع درجاتهم', 'أن يعرف الخلق مقدار ألم الموت'], page: 74, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'كان يستيقظ في أول النصف الثاني من الليل ذاكرًا مستاكًا مصليًا.',
    'كانت عبادته دائمة معتدلة، يطيل القيام ويقضي ما فاته.',
    'كان يبكي في صلاته وعند سماع القرآن، وبكاؤه رحمة لا جزع.',
    'كان أشد الناس تواضعًا، ونهى عن إطرائه، وكان خلقه القرآن.',
    'توفي وهو ابن ثلاث وستين، ودفن في حجرة عائشة، وما تركه صدقة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أحب العمل إليه ﷺ؟', options: ['ما داوم عليه صاحبه وإن قل', 'الأكثر عددًا', 'الأشق على النفس', 'ما كان في رمضان فقط'], answer: 0, explain: 'كما في حديثي عائشة وأم سلمة.', page: 55 },
    { type: 'tf', q: 'صلاة الفريضة قاعدًا مع القدرة لها نصف أجر القائم.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الحديث محمول على النافلة؛ الفريضة لا يجلس فيها إلا عاجز.', page: 56 },
    { type: 'mc', q: 'في أي شهر كان أكثر صومه بعد رمضان؟', options: ['شعبان', 'رجب', 'محرم', 'شوال'], answer: 0, explain: 'كما في حديث عائشة.', page: 57 },
    { type: 'tf', q: 'البكاء في الصلاة يفسدها.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا يفسدها على الصحيح.', page: 61 },
    { type: 'mc', q: 'ما الإطراء الذي نهى عنه؟', options: ['الإفراط في المديح ومجاوزة الحد', 'الصلاة عليه', 'محبته', 'اتباعه'], answer: 0, explain: '«لا تطروني كما أطرت النصارى ابن مريم».', page: 67 },
    { type: 'mc', q: 'كم كان عمره ﷺ عند وفاته؟', options: ['ثلاثًا وستين', 'ستين', 'خمسًا وستين', 'سبعين'], answer: 0, explain: 'كما في حديث ابن عباس.', page: 72 }
  ]),
  note: 'أنشطة الكتاب في الصفحات ٥٣ و٦٤ و٧٧. أجزاء «للاطلاع فقط» في الكتاب: صيانة الصوم وتذلله (ص٥٨)، وتعليل بكائه وبكاؤه عند الموت (ص٦٢)، والتواضع والقيام (ص٦٥–٦٧)، والسخاء والحياء (ص٧١–٧٢).'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'De eigenschappen: aanbidding, huilen, nederigheid, karakter en sterven',
  subtitle: 'Acht lessen samen op één pagina',
  summary: 'Zijn gewoonte ﷺ bij het opstaan; zijn aanbidding in gebed, vasten en recitatie; zijn huilen; zijn nederigheid en zijn verbod op overdreven lof; zijn goede karakter, vrijgevigheid en schaamte; en daarna zijn leeftijd, zijn sterven, zijn graf en zijn nalatenschap.',
  source: { ...source, label: 'Kitāb as-Sīra an-Nabawiyya (2): ash-Shamāʾil, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'Acht lessen die de eigenschappen afsluiten.',
    root: { label: 'De eigenschappen', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Opstaan', sub: 'les 17', page: 52, children: ['gedenken', 'de miswāk', 'handen wassen'] },
      { label: 'Aanbidding', sub: 'les 18', page: 54, children: ['volhouden', 'lang staan', 'vasten', 'reciteren'] },
      { label: 'Huilen', sub: 'les 19', page: 61, children: ['in het gebed', 'bij de Koran', 'bij de dood uit barmhartigheid'] },
      { label: 'Nederigheid', sub: 'les 20–21', page: 65, children: ['bed en zitplaats', 'geen opstaan voor hem', 'prijs mij niet overdreven', 'thuis'] },
      { label: 'Karakter en vrijgevigheid', sub: 'les 22–23', page: 69, children: ['zijn karakter was de Koran', 'zachtheid', 'nooit nee', 'schaamte'] },
      { label: 'Zijn sterven', sub: 'les 24', page: 72, children: ['drieënzestig jaar', 'de laatste blik', 'geen erfenis'] }
    ]
  },
  points: [
    { text: 'Hij sliep in het begin van de nacht en stond op aan het begin van de tweede helft; dan gebruikte hij de miswāk, deed de wassing en bad: de meest evenwichtige slaap.', page: 52 },
    { text: 'Geen moment van zijn leven was zonder aanbidding, maar met maat en evenwicht, zonder tekortschieten en zonder overdrijven.', page: 54 },
    { text: 'Het liefst had hij een daad die iemand volhoudt; wat hij ’s nachts miste, haalde hij overdag in.', page: 55 },
    { text: 'Hij reciteerde langzaam en gematigd, tussen luid en zacht; de Koran is neergezonden om over na te denken.', page: 59 },
    { text: 'Huilen in het gebed maakt het volgens de juiste mening niet ongeldig; zijn huilen bij de dood was barmhartigheid, geen wanhoop.', page: 61 },
    { text: 'Hij was nederig zonder zich te vernederen en vrijgevig zonder te verspillen, en verbood overdreven lof zoals de christenen die de zoon van Maryam gaven.', page: 67 },
    { text: 'Goed karakter is deugden verwerven en ondeugden laten; zijn karakter was de Koran.', page: 69 },
    { text: 'In zijn laatste momenten waarschuwde hij tegen het maken van moskeeën op graven van profeten; hoeveel te meer dan bij graven van vromen.', page: 74 }
  ],
  terms: [
    { term: 'يشوص فاه', translit: 'yashūṣu fāh', meaning: 'Hij wreef en reinigde zijn mond met de miswāk.', explanation: '', notes: [], page: 52 },
    { term: 'ديمة', translit: 'dīma', meaning: 'Aanhoudend, doorlopend.', explanation: '', notes: [], page: 54 },
    { term: 'السبحة', translit: 'as-subḥa', meaning: 'Het vrijwillige gebed.', explanation: '', notes: [], page: 56 },
    { term: 'يغان على قلبي', translit: 'yughānu ʿalā qalbī', meaning: 'Mijn hart wordt bedekt.', explanation: '', notes: [], page: 58 },
    { term: 'رجع', translit: 'rajjaʿa', meaning: 'Hij liet zijn stem bij het reciteren golven.', explanation: 'Bedoeld is mooi reciteren, niet zingen.', notes: [], page: 60 },
    { term: 'أزيز المرجل', translit: 'azīz al-mirjal', meaning: 'Het geluid van water dat kookt in een ketel.', explanation: '', notes: [], page: 61 },
    { term: 'تقعقع', translit: 'taqaʿqaʿ', meaning: 'Ze was onrustig (de ziel van de stervende).', explanation: '', notes: [], page: 62 },
    { term: 'الأدم', translit: 'al-adam', meaning: 'Meervoud van adīm: gelooid leer.', explanation: '', notes: [], page: 65 },
    { term: 'الإطراء', translit: 'al-iṭrāʾ', meaning: 'Overdreven lof die de grens overschrijdt.', explanation: 'Ook gezegd: lof met onwaarheid en leugen.', notes: [], page: 67 },
    { term: 'الإهالة السنخة', translit: 'al-ihāla as-sanikha', meaning: 'Gestold vleesvet waarvan de geur door lang staan veranderd is.', explanation: '', notes: [], page: 68 },
    { term: 'يفلي ثوبه', translit: 'yaflī thawbah', meaning: 'Hij doorzocht zijn kleding.', explanation: '', notes: [], page: 68 },
    { term: 'في مهنة أهله', translit: 'fī mihnat ahlih', meaning: 'In dienst van zijn huisgenoten.', explanation: '', notes: [], page: 68 },
    { term: 'الخلق', translit: 'al-khuluq', meaning: 'Natuur, karakter en waardigheid: het innerlijk van de mens.', explanation: '', notes: [], page: 69 },
    { term: 'الخدر', translit: 'al-khidr', meaning: 'Het gordijn (de afgeschermde ruimte).', explanation: '', notes: [], page: 71 },
    { term: 'السجف', translit: 'as-sijf', meaning: 'Het gordijn.', explanation: '', notes: [], page: 73 },
    { term: 'السحر / النحر', translit: 'as-saḥr / an-naḥr', meaning: 'De longen / de plek waar de sleutelbeenderen samenkomen.', explanation: '', notes: [], page: 73 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Soorten opstaan (alleen ter kennisname)',
      intro: 'Zoals Ibn ʿUthaymīn ze noemt in les 20.',
      columns: ['Betekenis', 'Oordeel'],
      rows: [
        { label: 'Opstaan voor iemand', cells: ['uit respect opstaan als hij binnenkomt', 'geen probleem'] },
        { label: 'Opstaan naar iemand toe', cells: ['de bezoeker een paar stappen tegemoet gaan', 'toegestaan: "sta op naar jullie leider"'] },
        { label: 'Staan bij iemand', cells: ['bij hem blijven staan terwijl hij zit', 'niet toegestaan, behalve om de polytheïsten te ergeren'] }
      ],
      page: 66
    },
    {
      type: 'compare',
      title: 'Zijn vasten ﷺ',
      intro: 'Zoals in les 18.',
      columns: ['Bewijs'],
      rows: [
        { label: 'Geen hele maand behalve Ramadan', cells: ['de hadith van ʿĀʾisha bij Muslim'] },
        { label: 'Het meest in Shaʿbān', cells: ['de hadith van ʿĀʾisha in beide Ṣaḥīḥ’s'] },
        { label: 'Drie dagen per maand', cells: ['het advies aan Abū Hurayra'] },
        { label: 'Maandag en donderdag', cells: ['de hadith van ʿĀʾisha bij at-Tirmidhī'] }
      ],
      page: 57
    }
  ],
  sections: [
    { title: 'Sunna’s bij het opstaan', text: 'Gedenken, de miswāk, drie keer de handen wassen, drie keer de neus uitspoelen, de slaap van het gezicht wrijven, en het einde van Āl ʿImrān reciteren voor wie ’s nachts opstaat.', page: 52 },
    { title: 'Zittend bidden', text: 'Toen hij ouder en zwaarder werd, bad hij vrijwillige gebeden zittend; er is geen vaste zithouding behalve wat verboden is; bij het verplichte gebed zit alleen wie niet kan staan, met volle beloning.', page: 56 },
    { title: 'Het vasten beschermen (alleen ter kennisname)', text: 'De vastende moet zijn vasten zuiver houden van liegen, kwaadspreken en schelden.', more: FYI_NL, page: 58 },
    { title: 'Zijn manier van reciteren', text: 'Hij had een vast deel dat hij nooit oversloeg, reciteerde langzaam vers voor vers, zocht vooraf bescherming, luisterde graag naar anderen, en alleen grote onreinheid hield hem ervan af.', page: 60 },
    { title: 'Waarom hij huilde bij het getuige-vers (alleen ter kennisname)', text: 'Ibn Baṭṭāl zei: hij stelde zich de verschrikkingen van de Opstandingsdag voor; Ibn Ḥajar zei: hij huilde uit barmhartigheid voor zijn umma, omdat hij over hun daden zal getuigen.', more: FYI_NL, page: 62 },
    { title: 'Nederigheid in het gezelschap (alleen ter kennisname)', text: 'Hij zat tussen zijn metgezellen zodat een vreemdeling hem niet herkende tot hij het vroeg; daarom bouwden zij een verhoging van klei voor hem.', more: FYI_NL, page: 66 },
    { title: 'Nederigheid thuis', text: 'Hij was een mens onder de mensen: hij doorzocht zijn kleding, molk zijn geit en hielp zichzelf; hij groette de kinderen en streek over hun hoofd.', page: 68 },
    { title: 'Zijn zachtheid', text: 'Tegen ʿĀʾisha, toen zij de joden scherp antwoordde: "Rustig, ʿĀʾisha, Allah houdt van zachtheid in alles"; en over de bedoeïen die in de moskee urineerde: "Jullie zijn gezonden om het makkelijk te maken."', page: 70 },
    { title: 'Zijn vrijgevigheid', text: 'Nooit zei hij nee als hem iets gevraagd werd; het vrijgevigst was hij in Ramadan; hij bewaarde niets voor morgen, behalve het levensonderhoud van zijn gezin.', more: FYI_NL, page: 71 },
    { title: 'Tekenen dat zijn einde naderde', text: 'Bij de afscheidsbedevaart zei hij: "Misschien verricht ik na deze bedevaart geen bedevaart meer"; en hij liet Abū Bakr het gebed leiden, een aanwijzing voor diens kalifaat.', page: 72 },
    { title: 'Zijn graf', text: 'Hij werd begraven waar hij stierf, in de kamer van ʿĀʾisha; later ook Abū Bakr en ʿUmar. Zijn graf bezoeken is toegestaan zonder er speciaal voor af te reizen; vernieuwingen zijn hem om smeekbede vragen, naar het graf toe bidden en het graf aanraken.', page: 75 },
    { title: 'Zijn nalatenschap', text: '"Wij laten geen erfenis na; wat wij achterlaten is liefdadigheid"; volgens al-Albānī overgeleverd door een groep metgezellen.', page: 76 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Twee kanten van goed karakter', items: ['tegenover Allah: Zijn oordelen met tevredenheid en overgave aanvaarden', 'tegenover de mensen: geen kwaad doen, kwaad verdragen en een vriendelijk gezicht'], page: 69, origin: 'boek' },
    { kind: 'opsomming', title: 'Vernieuwingen bij zijn graf ﷺ', items: ['hem om smeekbede of voorspraak vragen', 'het graf als gebedsrichting nemen en ernaartoe bidden', 'het graf aanraken of kussen'], page: 75, origin: 'boek' },
    { kind: 'bewijs', title: 'Twee wijsheden in de zware dood van de profeten', items: ['hun deugden vervolmaken en hun rang verhogen', 'de mensen laten weten hoe zwaar de dood is'], page: 74, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Hij stond op aan het begin van de tweede helft van de nacht, gedenkend, met de miswāk, en bad.',
    'Zijn aanbidding was aanhoudend en evenwichtig; hij stond lang en haalde in wat hij miste.',
    'Hij huilde in het gebed en bij het horen van de Koran; zijn huilen was barmhartigheid, geen wanhoop.',
    'Hij was de meest nederige van alle mensen, verbood overdreven lof, en zijn karakter was de Koran.',
    'Hij stierf op drieënzestigjarige leeftijd, werd begraven in de kamer van ʿĀʾisha, en wat hij naliet is liefdadigheid.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welke daad had hij ﷺ het liefst?', options: ['een daad die je volhoudt, al is ze klein', 'de daad met het grootste aantal', 'de zwaarste daad', 'alleen daden in Ramadan'], answer: 0, explain: 'Zoals in de hadith van ʿĀʾisha en Umm Salama.', page: 55 },
    { type: 'tf', q: 'Wie het verplichte gebed zittend bidt terwijl hij kan staan, krijgt de helft van de beloning.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'De hadith gaat over vrijwillig gebed; in het verplichte gebed zit alleen wie niet kan staan.', page: 56 },
    { type: 'mc', q: 'In welke maand vastte hij na Ramadan het meest?', options: ['Shaʿbān', 'Rajab', 'Muḥarram', 'Shawwāl'], answer: 0, explain: 'Zoals in de hadith van ʿĀʾisha.', page: 57 },
    { type: 'tf', q: 'Huilen in het gebed maakt het gebed ongeldig.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Volgens de juiste mening niet.', page: 61 },
    { type: 'mc', q: 'Wat is de iṭrāʾ die hij verbood?', options: ['overdreven lof die de grens overschrijdt', 'vrede over hem vragen', 'van hem houden', 'hem volgen'], answer: 0, explain: '"Prijs mij niet overdreven zoals de christenen de zoon van Maryam."', page: 67 },
    { type: 'mc', q: 'Hoe oud was hij ﷺ toen hij stierf?', options: ['drieënzestig', 'zestig', 'vijfenzestig', 'zeventig'], answer: 0, explain: 'Zoals in de hadith van Ibn ʿAbbās.', page: 72 }
  ]),
  note: 'Oefeningen van het boek op p. 53, 64 en 77. Delen die het boek alleen ter kennisname geeft: het vasten beschermen (p. 58), waarom hij huilde en zijn huilen bij de dood (p. 62), nederigheid en opstaan (p. 65–67), en vrijgevigheid en schaamte (p. 71–72). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-seerah', chapter: '17', unit: 4, ar, nl }
