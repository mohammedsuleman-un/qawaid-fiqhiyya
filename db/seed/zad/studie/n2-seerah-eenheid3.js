// Hoofdstukkaart bij السيرة النبوية (٢): الشمائل النبوية, eenheid 3 (lessen 11–16, boek p. 37–51).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Uitspraken van metgezellen en latere generaties (Abū Salama, Ibn ʿUmar, Bilāl ibn Saʿd, p. 48) staan
// niet in het hadith-tabblad maar in een paragraaf. Niet overgenomen: de uitleg zonder bron waarom hij
// zich "zoon van ʿAbd al-Muṭṭalib" noemde (p. 44) en de medische beweringen over slapen op de rechterzij
// (p. 50), die het boek zonder bron geeft.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (٢): الشمائل النبوية، سلسلة زاد العلمية',
  pages: '37–51',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Seerah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'ما ملأ ابن آدم وعاء شرا من بطنه، بحسب ابن آدم لقيمات يقمن صلبه، فإن كان لا بد فاعلا فثلث لطعامه وثلث لشرابه وثلث لنفسه', takhrij: 'أحمد والترمذي وصححه', note: 'أصل عظيم في الأكل.', pages: [37], nl: 'De mens vult geen vat dat slechter is dan zijn buik. Een paar happen zijn genoeg voor de mens om zijn rug recht te houden. Moet hij toch meer eten, dan een derde voor zijn eten, een derde voor zijn drinken en een derde voor zijn adem', nlNote: 'Een belangrijke grondregel bij het eten.' },
  { narrator: 'أبو هريرة', text: 'المسلم يأكل في معى واحد، والكافر يأكل في سبعة أمعاء', takhrij: 'متفق عليه', note: '', pages: [37], nl: 'De moslim eet met één darm en de ongelovige met zeven darmen', nlNote: '' },
  { narrator: 'عائشة', text: 'إذا أكل أحدكم فليذكر اسم الله، فإن نسي أن يذكر اسم الله في أوله فليقل: بسم الله أوله وآخره', takhrij: 'أبو داود وصححه الألباني', note: '', pages: [37], nl: 'Als een van jullie eet, laat hij de naam van Allah noemen; vergeet hij dat aan het begin, laat hij dan zeggen: "In de naam van Allah, aan het begin en aan het eind ervan."', nlNote: '' },
  { narrator: 'عمر بن أبي سلمة', text: 'سم الله، وكل بيمينك، وكل مما يليك', takhrij: 'متفق عليه', note: '', pages: [37], nl: 'Noem de naam van Allah, eet met je rechterhand en eet van wat voor je ligt', nlNote: '' },
  { narrator: '', text: 'الحمد لله كثيرا طيبا مباركا فيه، غير مكفي ولا مودع ولا مستغنى عنه ربنا', takhrij: 'رواه البخاري', note: 'ذكر الفراغ من الطعام.', pages: [37], nl: 'Alle lof aan Allah, veel, goede en gezegende lof; lof die nooit genoeg is, nooit wordt opgegeven en waar niemand buiten kan, onze Heer', nlNote: 'Gedenken na het eten.' },
  { narrator: 'أنس بن مالك', text: 'إن الله ليرضى عن العبد أن يأكل الأكلة فيحمده عليها، أو يشرب الشربة فيحمده عليها', takhrij: 'رواه مسلم', note: '', pages: [37], nl: 'Allah is tevreden met de dienaar die iets eet en Hem ervoor prijst, of iets drinkt en Hem ervoor prijst', nlNote: '' },
  { narrator: '', text: 'إذا أكل أحدكم فليأكل بيمينه، وإذا شرب فليشرب بيمينه، فإن الشيطان يأكل بشماله ويشرب بشماله', takhrij: 'رواه مسلم', note: '', pages: [38], nl: 'Als een van jullie eet, laat hij met rechts eten, en als hij drinkt, met rechts drinken, want de duivel eet en drinkt met links', nlNote: '' },
  { narrator: 'أبو أيوب الأنصاري', text: 'أتي يوما بقصعة فيها ثوم فبعث بها إلى أبي أيوب، فقال: أحرام هو؟ قال: «لا، ولكني أكره ريحه»', takhrij: 'أحمد وصححه الأرناؤوط', note: '', pages: [38], nl: 'Op een dag kreeg hij een schaal met knoflook en stuurde die naar Abū Ayyūb. Die vroeg: "Is het verboden?" Hij zei: "Nee, maar ik houd niet van de geur."', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'ما عاب النبي ﷺ طعاما قط، إن اشتهاه أكله وإن كرهه تركه', takhrij: 'البخاري ومسلم', note: '', pages: [38], nl: 'De Profeet ﷺ heeft nooit kritiek gehad op eten: had hij er zin in, dan at hij het, en lustte hij het niet, dan liet hij het staan', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كان يتنفس ثلاثا إذا شرب', takhrij: 'البخاري ومسلم', note: 'ولمسلم: «إنه أروى وأبرأ وأمرأ». من قسم «للاطلاع فقط».', pages: [39], nl: 'Als hij dronk, ademde hij drie keer', nlNote: 'Bij Muslim: "Dat lest beter de dorst, is gezonder en makkelijker." Uit een deel dat alleen ter kennisname is.' },
  { narrator: '', text: 'إذا شرب أحدكم فلا يتنفس في الإناء', takhrij: 'متفق عليه', note: FYI_NOTE, pages: [39], nl: 'Als een van jullie drinkt, laat hij dan niet in de beker ademen', nlNote: FYI_NOTE_NL },
  { narrator: 'أبو سعيد الخدري', text: 'نهى عن اختناث الأسقية', takhrij: 'في الصحيحين', note: 'اختناث الأسقية: الشرب من أفواهها. ' + FYI_NOTE, pages: [39], nl: 'Hij verbood uit de opening van waterzakken te drinken', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'لا يشربن أحدكم قائما', takhrij: 'رواه مسلم', note: 'محمول على الكراهة. ' + FYI_NOTE, pages: [39], nl: 'Laat niemand van jullie staand drinken', nlNote: 'Opgevat als afgeraden. ' + FYI_NOTE_NL },
  { narrator: 'عبد الله بن عباس', text: 'سقيت رسول الله ﷺ فشرب وهو قائم من زمزم', takhrij: 'البخاري ومسلم', note: 'بيان للجواز. ' + FYI_NOTE, pages: [39], nl: 'Ik gaf de Boodschapper van Allah ﷺ zamzam te drinken, en hij dronk staand', nlNote: 'Om te laten zien dat het mag. ' + FYI_NOTE_NL },
  { narrator: 'جابر بن عبد الله', text: 'سأل أهله الإدام فقالوا: ما عندنا إلا الخل، فدعا به فجعل يأكل ويقول: «نعم الإدام الخل، نعم الإدام الخل»', takhrij: 'رواه مسلم', note: 'قال جابر: فما زلت أحب الخل منذ سمعتها.', pages: [41], nl: 'Hij vroeg zijn familie om iets bij het brood; zij zeiden: we hebben alleen azijn. Hij liet het halen, begon te eten en zei: "Wat een goed bijgerecht is azijn, wat een goed bijgerecht is azijn."', nlNote: 'Jābir zei: sindsdien houd ik van azijn.' },
  { narrator: 'أم هانئ', text: 'دخل علي رسول الله ﷺ فقال: «أعندك شيء؟» فقلت: لا، إلا خبز يابس وخل، فقال: «هاتي، ما أقفر بيت من أدم فيه خل»', takhrij: 'الترمذي وحسنه', note: '', pages: [41], nl: 'De Boodschapper van Allah ﷺ kwam bij mij en zei: "Heb je iets?" Ik zei: "Nee, alleen droog brood en azijn." Hij zei: "Geef maar; een huis met azijn zit niet zonder bijgerecht."', nlNote: '' },
  { narrator: 'أبو أسيد', text: 'كلوا الزيت وادهنوا به فإنه من شجرة مباركة', takhrij: 'الترمذي وحسنه الألباني', note: '', pages: [41], nl: 'Eet olijfolie en smeer je ermee in, want het komt van een gezegende boom', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'إن خياطا دعا رسول الله ﷺ لطعام صنعه، فقرب خبزا من شعير ومرقا فيه دباء وقديد، فرأيت النبي ﷺ يتتبع الدباء حوالي القصعة، فلم أزل أحب الدباء من يومئذ', takhrij: 'متفق عليه', note: 'الدباء: القرع؛ القديد: اللحم المملوح المجفف.', pages: [41], nl: 'Een kleermaker nodigde de Boodschapper van Allah ﷺ uit voor een maaltijd die hij had gemaakt. Hij zette gerstebrood en bouillon met pompoen en gedroogd vlees voor. Ik zag de Profeet ﷺ de stukjes pompoen rond de schaal zoeken, en sindsdien ben ik van pompoen blijven houden', nlNote: 'Dubbāʾ is pompoen; qadīd is gezouten, in de zon gedroogd vlees.' },
  { narrator: 'عبد الله بن جعفر', text: 'كان يأكل القثاء بالرطب', takhrij: 'متفق عليه', note: '', pages: [42], nl: 'Hij at slangkomkommer met verse dadels', nlNote: '' },
  { narrator: 'عائشة', text: 'كان يأكل البطيخ بالرطب', takhrij: 'أبو داود والترمذي وصححه الألباني', note: 'وعند أبي داود: «نكسر حر هذا ببرد هذا وبرد هذا بحر هذا».', pages: [42], nl: 'Hij at meloen met verse dadels', nlNote: 'Bij Abū Dāwūd: "We breken de warmte van het ene met de koelte van het andere."' },
  { narrator: 'عائشة', text: 'كان أحب الشراب إليه الحلو البارد', takhrij: 'أحمد والنسائي في الكبرى وصححه الألباني', note: 'الحلو: الماء الممزوج بغيره كالزبيب والعسل.', pages: [42], nl: 'De drank die hij het liefst had, was zoet en koel', nlNote: 'Zoet: water gemengd met bijvoorbeeld rozijnen of honing.' },
  { narrator: 'عائشة', text: 'ما كان رسول الله ﷺ يسرد كسردكم هذا، ولكن كان يتكلم بكلام بين فصل يحفظه من جلس إليه', takhrij: 'الترمذي وصححه', note: '', pages: [42], nl: 'De Boodschapper van Allah ﷺ sprak niet snel achter elkaar zoals jullie, maar duidelijk en afgemeten, zodat wie bij hem zat het kon onthouden', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كان رسول الله ﷺ يعيد الكلمة ثلاثا لتعقل عنه', takhrij: 'الترمذي وصححه الألباني', note: '', pages: [42], nl: 'De Boodschapper van Allah ﷺ herhaalde een woord drie keer, zodat het begrepen werd', nlNote: '' },
  { narrator: 'عائشة', text: 'قيل لها: هل كان يتمثل بشيء من الشعر؟ قالت: كان يتمثل بشعر ابن رواحة، ويتمثل بقوله: «ويأتيك بالأخبار من لم تزود»', takhrij: 'الترمذي وصححه', note: '', pages: [43], nl: 'Haar werd gevraagd of hij poëzie citeerde. Zij zei: hij citeerde de poëzie van Ibn Rawāḥa, en de regel: "Nieuws brengt je wie je geen reisproviand gaf."', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'إن أصدق كلمة قالها الشاعر كلمة لبيد: ألا كل شيء ما خلا الله باطل', takhrij: 'متفق عليه', note: '', pages: [43], nl: 'Het meest waarachtige woord dat een dichter sprak, is dat van Labīd: "Alles behalve Allah is ijdel."', nlNote: '' },
  { narrator: 'الشريد', text: 'كنت ردف النبي ﷺ فأنشدته مائة قافية من قول أمية بن أبي الصلت، كلما أنشدته بيتا قال: «هيه»، حتى أنشدته مائة، فقال: «إن كاد ليسلم»', takhrij: 'رواه مسلم', note: 'من رواية عمرو بن الشريد عن أبيه؛ «هيه»: زدني.', pages: [43], nl: 'Ik zat achter de Profeet ﷺ op het rijdier en droeg honderd versregels voor van Umayya ibn Abī ṣ-Ṣalt. Bij elk vers zei hij: "Meer." Toen ik er honderd had voorgedragen, zei hij: "Hij was bijna moslim geworden."', nlNote: 'Via ʿAmr ibn ash-Sharīd van zijn vader.' },
  { narrator: 'جندب بن سفيان البجلي', text: 'أصاب حجر إصبع رسول الله ﷺ فدميت فقال: «هل أنت إلا إصبع دميت، وفي سبيل الله ما لقيت»', takhrij: 'البخاري ومسلم', note: '', pages: [43], nl: 'Een steen raakte de vinger van de Boodschapper van Allah ﷺ en die bloedde. Hij zei: "Je bent maar een vinger die bloedt, en wat je overkwam was op de weg van Allah."', nlNote: '' },
  { narrator: 'البراء بن عازب', text: 'ولى سرعان الناس، تلقتهم هوازن بالنبل، ورسول الله ﷺ على بغلته، وأبو سفيان بن الحارث آخذ بلجامها، ورسول الله ﷺ يقول: «أنا النبي لا كذب، أنا ابن عبد المطلب»', takhrij: 'في الصحيحين', note: 'جوابًا لمن سأله: أفررتم عن رسول الله ﷺ؟', pages: [43], nl: 'De haastigen vluchtten toen Hawāzin hen met pijlen opwachtte, maar de Boodschapper van Allah ﷺ zat op zijn muildier, Abū Sufyān ibn al-Ḥārith hield de teugel vast, en de Boodschapper van Allah ﷺ zei: "Ik ben de Profeet, dat is geen leugen; ik ben de zoon van ʿAbd al-Muṭṭalib."', nlNote: 'Antwoord aan wie vroeg: zijn jullie van de Boodschapper ﷺ weggevlucht?' },
  { narrator: 'أنس بن مالك', text: 'أن النبي ﷺ دخل مكة في عمرة القضاء وابن رواحة يمشي بين يديه يقول الشعر، فقال له عمر: يا ابن رواحة، بين يدي رسول الله ﷺ وفي حرم الله تقول الشعر؟! فقال ﷺ: «خل عنه يا عمر، فلهي أسرع فيهم من نضح النبل»', takhrij: 'الترمذي وصححه', note: '', pages: [44], nl: 'De Profeet ﷺ trok Mekka binnen bij de inhaal-ʿumra terwijl Ibn Rawāḥa voor hem uit liep en poëzie voordroeg. ʿUmar zei: "Ibn Rawāḥa, voor de Boodschapper van Allah ﷺ en in de heilige plaats van Allah draag je poëzie voor?" Hij ﷺ zei: "Laat hem, ʿUmar, want dit treft hen sneller dan pijlen."', nlNote: '' },
  { narrator: '', text: 'جاهدوا المشركين بأموالكم وأيديكم وألسنتكم', takhrij: 'النسائي وأبو داود وصححه الألباني', note: 'الشعر من الجهاد باللسان.', pages: [44], nl: 'Strijd tegen de polytheïsten met jullie bezit, jullie handen en jullie tongen', nlNote: 'Poëzie hoort bij de strijd met de tong.' },
  { narrator: '', text: 'تبسمك في وجه أخيك صدقة', takhrij: 'الترمذي وحسنه', note: '', pages: [46], nl: 'Je glimlach naar je broeder is liefdadigheid', nlNote: '' },
  { narrator: 'عبد الله بن الحارث بن جزء', text: 'ما رأيت أحدا أكثر تبسما من رسول الله ﷺ', takhrij: 'أحمد والترمذي وصححه الألباني', note: 'وعنه: ما كان ضحك رسول الله ﷺ إلا تبسمًا.', pages: [46], nl: 'Ik heb niemand gezien die meer glimlachte dan de Boodschapper van Allah ﷺ', nlNote: 'Ook van hem: het lachen van de Boodschapper ﷺ was niets dan glimlachen.' },
  { narrator: 'جرير بن عبد الله', text: 'ما حجبني رسول الله ﷺ ولا رآني منذ أسلمت إلا تبسم', takhrij: 'متفق عليه', note: 'ما حجبني: ما منعني من الدخول إليه.', pages: [46], nl: 'Sinds ik moslim werd, heeft de Boodschapper van Allah ﷺ mij nooit de toegang geweigerd, en hij zag mij nooit zonder te glimlachen', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كنت أمشي مع رسول الله ﷺ وعليه برد نجراني غليظ الحاشية، فأدركه أعرابي فجبذ بردائه جبذة شديدة... ثم قال: يا محمد، مر لي من مال الله الذي عندك، فالتفت إليه فضحك ثم أمر له بعطاء', takhrij: 'البخاري ومسلم', note: 'تبسمه حتى لمن يسيء إليه.', pages: [47], nl: 'Ik liep met de Boodschapper van Allah ﷺ, die een Najrānī-mantel met een dikke rand droeg. Een bedoeïen haalde hem in en trok hard aan zijn mantel... en zei: "Muḥammad, laat mij iets geven van het bezit van Allah dat je hebt." Hij keek naar hem om, lachte en liet hem iets geven', nlNote: 'Hij glimlachte zelfs naar wie hem slecht behandelde.' },
  { narrator: 'أبو هريرة', text: 'قالوا: يا رسول الله، إنك تداعبنا! قال: «نعم، غير أني لا أقول إلا حقا»', takhrij: 'الترمذي في الشمائل وصححه', note: '', pages: [47], nl: 'Zij zeiden: "O Boodschapper van Allah, u maakt grapjes met ons!" Hij zei: "Ja, maar ik zeg alleen de waarheid."', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'إن كان رسول الله ﷺ ليخالطنا حتى يقول لأخ لي صغير: «يا أبا عمير، ما فعل النغير؟»', takhrij: 'متفق عليه', note: 'النغير: طائر صغير يشبه العصفور.', pages: [47], nl: 'De Boodschapper van Allah ﷺ ging zo met ons om dat hij tegen mijn kleine broertje zei: "Abū ʿUmayr, wat heeft het vogeltje gedaan?"', nlNote: 'Nughayr is een klein vogeltje, zoals een mus.' },
  { narrator: '', text: 'ويل للذي يحدث فيكذب ليضحك القوم، ويل له، ويل له', takhrij: 'أحمد وأبو داود وحسنه الألباني', note: 'لا يجوز الكذب لإضحاك الناس.', pages: [48], nl: 'Wee wie praat en liegt om de mensen te laten lachen; wee hem, wee hem', nlNote: 'Liegen om mensen te laten lachen mag niet.' },
  { narrator: 'البراء بن عازب', text: 'كان إذا أخذ مضجعه وضع كفه اليمنى تحت خده الأيمن وقال: «رب قني عذابك يوم تبعث عبادك»', takhrij: 'الترمذي وصححه', note: 'وفي رواية: «يوم تجمع عبادك».', pages: [49], nl: 'Als hij ging liggen, legde hij zijn rechterhand onder zijn rechterwang en zei: "Mijn Heer, bescherm mij tegen Uw straf op de dag dat U Uw dienaren opwekt."', nlNote: 'In een versie: "op de dag dat U Uw dienaren verzamelt".' },
  { narrator: 'عائشة', text: 'كان إذا أوى إلى فراشه كل ليلة جمع كفيه فنفث فيهما وقرأ فيهما الإخلاص والفلق والناس، ثم مسح بهما ما استطاع من جسده، يبدأ برأسه ووجهه، ثلاث مرات', takhrij: 'رواه البخاري', note: '', pages: [49], nl: 'Elke nacht als hij naar bed ging, bracht hij zijn handen samen, blies erin en reciteerde al-Ikhlāṣ, al-Falaq en an-Nās; daarna streek hij ermee over zoveel van zijn lichaam als hij kon, beginnend bij hoofd en gezicht, drie keer', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'إذا أوى أحدكم إلى فراشه فلينفض فراشه بداخلة إزاره فإنه لا يدري ما خلفه عليه، ثم يقول: باسمك رب وضعت جنبي وبك أرفعه، إن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين', takhrij: 'البخاري ومسلم', note: FYI_NOTE, pages: [50], nl: 'Als een van jullie naar bed gaat, laat hij zijn bed afslaan met de binnenkant van zijn onderkleed, want hij weet niet wat er na hem op is gekomen. Daarna zegt hij: "In Uw naam, mijn Heer, leg ik mijn zij neer en door U til ik haar op. Houdt U mijn ziel, wees haar dan genadig; laat U haar gaan, bescherm haar dan zoals U Uw vrome dienaren beschermt."', nlNote: FYI_NOTE_NL }
]

const TAKHRIJ_NL = {
  'أحمد والترمذي وصححه': 'Aḥmad en at-Tirmidhī, die hem ṣaḥīḥ noemde',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'رواه البخاري': 'al-Bukhārī',
  'رواه مسلم': 'Muslim',
  'أحمد وصححه الأرناؤوط': 'Aḥmad; al-Arnaʾūṭ noemde hem ṣaḥīḥ',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'في الصحيحين': 'in de twee Ṣaḥīḥ-verzamelingen (al-Bukhārī en Muslim)',
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'الترمذي وحسنه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ḥasan',
  'أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد والنسائي في الكبرى وصححه الألباني': 'Aḥmad en an-Nasāʾī in as-Sunan al-Kubrā; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وصححه': 'at-Tirmidhī, die hem ṣaḥīḥ noemde',
  'الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'النسائي وأبو داود وصححه الألباني': 'an-Nasāʾī en Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد والترمذي وصححه الألباني': 'Aḥmad en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي في الشمائل وصححه': 'at-Tirmidhī in ash-Shamāʾil, die hem ṣaḥīḥ noemde',
  'أحمد وأبو داود وحسنه الألباني': 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem ḥasan'
}
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'عائشة': 'ʿĀʾisha', 'عمر بن أبي سلمة': 'ʿUmar ibn Abī Salama', 'أنس بن مالك': 'Anas ibn Mālik', 'أبو أيوب الأنصاري': 'Abū Ayyūb al-Anṣārī', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'أم هانئ': 'Umm Hāniʾ', 'أبو أسيد': 'Abū Usayd', 'عبد الله بن جعفر': 'ʿAbd Allāh ibn Jaʿfar', 'الشريد': 'ash-Sharīd', 'جندب بن سفيان البجلي': 'Jundub ibn Sufyān al-Bajalī', 'البراء بن عازب': 'al-Barāʾ ibn ʿĀzib', 'عبد الله بن الحارث بن جزء': 'ʿAbd Allāh ibn al-Ḥārith ibn Jazʾ', 'جرير بن عبد الله': 'Jarīr ibn ʿAbd Allāh' }

const PERSONS = [
  ['abu-hurayra', 'text', [37, 38, 43, 47, 50], 'روى «المسلم يأكل في معى واحد» و«ما عاب النبي ﷺ طعامًا قط».', 'Overleveraar van "de moslim eet met één darm" en "de Profeet ﷺ had nooit kritiek op eten".'],
  ['aisha', 'text', [37, 42, 43, 49], 'روت التسمية على الطعام، ووصفت كلامه وشرابه وأذكار نومه.', 'Overleverde over de naam van Allah bij het eten, en beschreef zijn spreken, drinken en gedenken voor het slapen.'],
  ['umar-ibn-abi-salama', 'text', [37], 'قال له النبي ﷺ: «سم الله وكل بيمينك وكل مما يليك».', 'Tegen hem zei de Profeet ﷺ: "Noem Allahs naam, eet met rechts en eet van wat voor je ligt."'],
  ['anas-ibn-malik', 'text', [37, 38, 39, 41, 42, 44, 47], 'روى كثيرًا من هديه في الأكل والشرب والكلام والمزاح.', 'Overleverde veel over zijn gewoonten bij eten, drinken, spreken en grappen maken.'],
  ['abu-ayyub-al-ansari', 'text', [38], 'كان النبي ﷺ يبعث إليه بفضل طعامه، وسأله عن الثوم.', 'De Profeet ﷺ stuurde hem zijn overgebleven eten; hij vroeg hem over knoflook.'],
  ['ibn-al-qayyim', 'text', [39, 42], 'شرح معنى التنفس في الشراب، ونفع الشراب الحلو البارد.', 'Legde uit wat ademen bij het drinken betekent en hoe nuttig zoete, koele drank is.'],
  ['ibn-hajar-al-asqalani', 'text', [39, 46], 'قال: كان في معظم أحواله لا يزيد على التبسم، والمكروه الإكثار من الضحك.', 'Zei: meestal deed hij niet meer dan glimlachen; afgeraden is overdreven veel lachen.'],
  ['abu-said-al-khudri', 'text', [39], 'روى النهي عن اختناث الأسقية.', 'Overleveraar van het verbod om uit de opening van waterzakken te drinken.'],
  ['ibn-abbas', 'text', [39, 49], 'سقى النبي ﷺ من زمزم فشرب قائمًا.', 'Gaf de Profeet ﷺ zamzam, die hij staand dronk.'],
  ['jabir-ibn-abdallah', 'text', [41, 51], 'قال: فما زلت أحب الخل منذ سمعتها.', 'Zei: sindsdien houd ik van azijn.'],
  ['ibn-kathir', 'text', [43], 'قال في ﴿وما علمناه الشعر﴾: ما هو في طبعه فلا يحسنه.', 'Zei bij "Wij hebben hem geen poëzie geleerd": het lag niet in zijn aard, dus hij beheerste het niet.'],
  ['abdallah-ibn-rawaha', 'text', [43, 44], 'كان النبي ﷺ يتمثل بشعره، وأنشد بين يديه في عمرة القضاء.', 'De Profeet ﷺ citeerde zijn poëzie; hij droeg voor hem uit poëzie voor bij de inhaal-ʿumra.'],
  ['labid-ibn-rabia', 'text', [43], 'شاعر قال: «ألا كل شيء ما خلا الله باطل»؛ نزل الكوفة ومات سنة ٤١هـ.', 'Dichter van "alles behalve Allah is ijdel"; vestigde zich in Kūfa en stierf in 41 AH.'],
  ['jundub-ibn-abdallah', 'text', [43], 'روى «هل أنت إلا إصبع دميت».', 'Overleveraar van "je bent maar een vinger die bloedt".'],
  ['al-bara-ibn-azib', 'text', [43, 49], 'روى «أنا النبي لا كذب» ودعاء النوم.', 'Overleveraar van "ik ben de Profeet, dat is geen leugen" en van de smeekbede voor het slapen.'],
  ['umar-ibn-al-khattab', 'text', [44], 'أنكر على ابن رواحة إنشاد الشعر في الحرم.', 'Had bezwaar tegen Ibn Rawāḥa die in de heilige plaats poëzie voordroeg.'],
  ['jabir-ibn-samura', 'text', [44, 46], 'قال: كان أصحابه يتناشدون الشعر وهو ساكت وربما تبسم.', 'Zei: zijn metgezellen droegen poëzie voor terwijl hij zweeg en soms glimlachte.'],
  ['abu-dharr', 'text', [46], 'روى «لا تحقرن من المعروف شيئًا ولو أن تلقى أخاك بوجه طلق».', 'Overleveraar van "vind geen goede daad te gering, al is het je broeder vriendelijk aankijken".'],
  ['jarir-ibn-abdallah-al-bajali', 'text', [46], 'قال: ما رآني منذ أسلمت إلا تبسم.', 'Zei: sinds ik moslim werd, zag hij mij nooit zonder te glimlachen.'],
  ['abu-salama-ibn-abd-ar-rahman', 'text', [48], 'قال: لم يكن أصحاب رسول الله ﷺ منحرفين ولا متماوتين.', 'Zei: de metgezellen van de Boodschapper ﷺ waren niet stuurs en niet levenloos.'],
  ['ibn-umar', 'text', [48], 'قال: كانوا يضحكون والإيمان في قلوبهم أعظم من الجبل.', 'Zei: zij lachten, terwijl het geloof in hun harten groter was dan een berg.'],
  ['abd-ar-razzaq', 'takhrij', [48], 'أخرج قول ابن عمر في المصنف.', 'Nam de uitspraak van Ibn ʿUmar op in zijn Muṣannaf.'],
  ['ibn-abi-shayba', 'takhrij', [48], 'أخرج قول بلال بن سعد في المصنف.', 'Nam de uitspraak van Bilāl ibn Saʿd op in zijn Muṣannaf.'],
  ['abu-qatada-al-ansari', 'text', [49], 'روى صفة اضطجاعه في السفر.', 'Overleverde hoe hij tijdens een reis ging liggen.'],
  ['hudhayfa-ibn-al-yaman', 'text', [49], 'روى دعاء النوم والاستيقاظ.', 'Overleveraar van de smeekbeden bij slapen en opstaan.'],
  ['an-nawawi', 'text', [50], 'قال: من خصائصه أن نومه مضطجعًا لا ينقض الوضوء.', 'Zei: het is eigen aan hem dat liggend slapen zijn wassing niet verbrak.'],
  ['sufyan-ibn-uyayna', 'text', [50], 'قال: هذا للنبي ﷺ خاصة، تنام عيناه ولا ينام قلبه.', 'Zei: dit geldt alleen voor de Profeet ﷺ; zijn ogen slapen maar zijn hart niet.'],
  ['ali-ibn-abi-talib', 'text', [51], 'علمه النبي ﷺ وفاطمة التسبيح والتحميد والتكبير عند النوم.', 'De Profeet ﷺ leerde hem en Fāṭima tasbīḥ, taḥmīd en takbīr voor het slapen.'],
  ['fatima', 'text', [51], 'طلبت مع علي خادمًا فدلهما على الذكر.', 'Vroeg samen met ʿAlī om een dienaar; hij wees hen het gedenken.'],
  ['al-albani', 'takhrij', [37, 41, 42, 44, 46, 48, 51], 'صحح أو حسن كثيرًا من الأحاديث في هذه الدروس.', 'Noemde veel hadith in deze lessen ṣaḥīḥ of ḥasan.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'الشمائل: الأكل والشرب والكلام والضحك والنوم',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'هديه ﷺ في الأكل وآدابه، والشرب وما نهي عنه، وإدامه وفاكهته وشرابه، وكلامه وموقفه من الشعر، وضحكه وتبسمه ومزاحه، ونومه وآدابه وأذكاره.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'ستة دروس من هديه اليومي ﷺ.',
    root: { label: 'الشمائل', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'الأكل', sub: 'الدرس ١١', page: 37, children: ['ثلث لطعامه', 'التسمية والحمد', 'الأكل باليمين', 'ما عاب طعامًا'] },
      { label: 'الشرب', sub: 'الدرسان ١٢–١٣', page: 39, children: ['ثلاثة أنفاس', 'من فم السقاء', 'قائمًا'] },
      { label: 'الإدام والفاكهة', sub: 'الدرس ١٣', page: 41, children: ['نعم الإدام الخل', 'الدباء', 'البطيخ بالرطب'] },
      { label: 'الكلام والشعر', sub: 'الدرس ١٤', page: 42, children: ['كلام فصل', 'يعيد ثلاثًا', 'الجهاد باللسان'] },
      { label: 'الضحك والمزاح', sub: 'الدرس ١٥', page: 46, children: ['أكثر الناس تبسمًا', 'لا يقول إلا حقًّا'] },
      { label: 'النوم', sub: 'الدرس ١٦', page: 49, children: ['على الشق الأيمن', 'أذكار النوم', 'نفض الفراش'] }
    ]
  },
  points: [
    { text: 'قرر أصلًا عظيمًا في الأكل: ثلث للطعام وثلث للشراب وثلث للنفس.', page: 37 },
    { text: 'يسمي في أول الطعام، فإن نسي قال: بسم الله أوله وآخره، ويحمد الله في آخره.', page: 37 },
    { text: 'ما عاب طعامًا قط؛ إن اشتهاه أكله وإن كرهه تركه، كما ترك الضب لأنه يعافه.', page: 38 },
    { text: 'النهي عن الشرب قائمًا محمول على الكراهة، وشربه قائمًا بيان للجواز.', page: 39 },
    { text: 'علل النهي عن الشرب من فم السقاء غير موجودة في العلب الصغيرة التي ينفرد بها الإنسان.', page: 40 },
    { text: 'كان كلامه فصلًا يحفظه من جلس إليه، ويعيد الكلمة ثلاثًا لتعقل عنه.', page: 42 },
    { text: 'الشعر سلاح قوي إذا أحسن استخدامه، وهو من الجهاد باللسان.', page: 44 },
    { text: 'المزاح من الترويح بشرط ألا يكون فيه كذب أو ترويع أو استهزاء بالدين.', page: 48 }
  ],
  terms: [
    { term: 'لقيمات يقمن صلبه', translit: 'luqaymāt yuqimna ṣulbah', meaning: 'لقم قليلة تقيم ظهره.', explanation: '', notes: [], page: 37 },
    { term: 'غير مكفي ولا مودع', translit: 'ghayr makfiyy wa-lā muwaddaʿ', meaning: 'من ذكر الفراغ من الطعام.', explanation: '', notes: [], page: 37 },
    { term: 'أعافه', translit: 'aʿāfuh', meaning: 'تكرهه نفسي.', explanation: 'قاله في الضب.', notes: [], page: 38 },
    { term: 'اختناث الأسقية', translit: 'ikhtināth al-asqiya', meaning: 'الشرب من أفواهها.', explanation: '', notes: [], page: 39 },
    { term: 'الإدام', translit: 'al-idām', meaning: 'كل ما يؤكل مع الخبز.', explanation: '', notes: [], page: 41 },
    { term: 'الدباء / القديد', translit: 'ad-dubbāʾ / al-qadīd', meaning: 'اليقطين والقرع / اللحم المملوح المجفف في الشمس.', explanation: '', notes: [], page: 41 },
    { term: 'القثاء', translit: 'al-qiththāʾ', meaning: 'نبات قريب من الخيار لكنه أطول.', explanation: '', notes: [], page: 42 },
    { term: 'الحلو البارد', translit: 'al-ḥulw al-bārid', meaning: 'الماء الممزوج بغيره كالزبيب والعسل، باردًا.', explanation: '', notes: [], page: 42 },
    { term: 'كلام فصل', translit: 'kalām faṣl', meaning: 'بين واضح متأن.', explanation: '', notes: [], page: 42 },
    { term: 'الهام / مقيله', translit: 'al-hām / maqīluh', meaning: 'أعالي الرؤوس / موضعه.', explanation: '', notes: [], page: 44 },
    { term: 'المزاح', translit: 'al-mizāḥ', meaning: 'الانبساط مع غيره من غير إيذاء له.', explanation: '', notes: [], page: 47 },
    { term: 'النغير', translit: 'an-nughayr', meaning: 'طائر صغير يشبه العصفور.', explanation: '', notes: [], page: 47 },
    { term: 'عربًا أترابًا', translit: 'ʿuruban atrāban', meaning: 'العرب: المتحببة إلى زوجها؛ الأتراب: على سن واحدة.', explanation: '', notes: [], page: 48 },
    { term: 'النطع', translit: 'an-niṭʿ', meaning: 'بساط من الجلد.', explanation: '', notes: [], page: 49 },
    { term: 'عرس', translit: 'ʿarras', meaning: 'نزل وهو مسافر في الليل للاستراحة.', explanation: '', notes: [], page: 49 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الشرب: النهي والجواز (للاطلاع فقط)',
      intro: 'كما في الدرس الثاني عشر.',
      columns: ['النهي', 'الجمع أو الاستثناء'],
      rows: [
        { label: 'التنفس في الإناء', cells: ['منهي عنه أدبًا مخافة تقذيره', 'يتنفس خارج الإناء ثلاثًا'] },
        { label: 'الشرب من فم السقاء', cells: ['منهي عنه', 'لا كراهة لعذر إذا لم يجد إناءً ولم يتمكن بكفه'] },
        { label: 'الشرب قائمًا', cells: ['«لا يشربن أحدكم قائمًا»', 'النهي للكراهة، وشربه قائمًا للجواز'] }
      ],
      page: 39
    },
    {
      type: 'compare',
      title: 'آداب النوم',
      intro: 'كما في الدرس السادس عشر.',
      columns: ['دليله'],
      rows: [
        { label: 'نفض الفراش', cells: ['حديث أبي هريرة في الصحيحين'] },
        { label: 'الوضوء قبل النوم', cells: ['«إذا أتيت مضجعك فتوضأ»'] },
        { label: 'النوم على الشق الأيمن', cells: ['فعله ﷺ ووضع كفه تحت خده'] },
        { label: 'لا يضطجع على بطنه', cells: ['«إنها ضجعة أهل النار»'] },
        { label: 'التسبيح والتحميد والتكبير', cells: ['تعليمه عليًّا وفاطمة'] }
      ],
      page: 50
    }
  ],
  sections: [
    { title: 'هديه فيما يقرب إليه', text: 'لم يكن يرد موجودًا إلا أن تعافه نفسه فيتركه، وكره الثوم لأجل ريحه مع أنه ليس بحرام.', page: 38 },
    { title: 'سببا النهي عن الشرب من فم الإناء', text: 'لا يؤمن دخول شيء من الهوام مع الماء، وقد يغلبه الماء فيشرق به.', page: 40 },
    { title: 'موقفه من الشعر', text: 'لم يكن الشعر في طبعه، لكنه تمثل بشعر ابن رواحة، واستحسن كلمة لبيد، واستنشد شعر أمية بن أبي الصلت.', page: 43 },
    { title: 'من صور الجهاد اليوم', text: 'الجهاد بالكلمة والمقالة والفتوى ونشر العلم والتوحيد والفقه الصحيح والذب عن رسول الله ﷺ.', page: 44 },
    { title: 'من مزاحه ﷺ', text: 'مازح زاهرًا البادي فاحتضنه من خلفه وقال: من يشتري هذا العبد؟ ومازح العجوز بأن الجنة لا تدخلها عجوز، يعني وهي عجوز.', page: 47 },
    { title: 'ضحك الصحابة', text: 'قال أبو سلمة بن عبد الرحمن: لم يكونوا منحرفين ولا متماوتين؛ وقال ابن عمر: كانوا يضحكون والإيمان في قلوبهم أعظم من الجبل؛ وقال بلال بن سعد: فإذا كان الليل كانوا رهبانًا.', page: 48 },
    { title: 'هديه في النوم', text: 'ينام على النطع والفراش والحصير والأرض والسرير، ولا يأخذ من النوم فوق الحاجة ولا يمنع نفسه منها.', page: 49 },
    { title: 'نومه لا ينقض وضوءه (للاطلاع فقط)', text: 'قال النووي: من خصائصه أن نومه مضطجعًا لا ينقض الوضوء، لأن عينيه تنامان ولا ينام قلبه.', more: FYI, page: 50 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'آداب الأكل', items: ['التسمية في أوله', 'الأكل باليمين', 'الأكل مما يليه', 'لعق الأصابع', 'الحمد في آخره', 'عدم عيب الطعام'], page: 37, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شروط المزاح', items: ['ألا يكون فيه كذب', 'ألا يكون فيه ترويع', 'ألا يكون فيه استهزاء بالدين'], page: 48, origin: 'boek' },
    { kind: 'opsomming', title: 'من أذكار النوم وقراءته', items: ['المعوذات مع النفث والمسح', '«باسمك اللهم أموت وأحيا»', 'التسبيح ٣٣ والتحميد ٣٣ والتكبير ٣٤', 'سورة الكافرون', 'السجدة وتبارك'], page: 51, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'ثلث للطعام وثلث للشراب وثلث للنفس، مع التسمية والحمد والأكل باليمين.',
    'كان يشرب ثلاثًا، ونهى عن التنفس في الإناء والشرب من فم السقاء.',
    'كان يحب الخل والدباء والحلو البارد.',
    'كان كلامه فصلًا يعيده ثلاثًا، والشعر الحسن من الجهاد باللسان.',
    'كان أكثر الناس تبسمًا، يمزح ولا يقول إلا حقًّا، وينام على شقه الأيمن ذاكرًا.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ماذا يقول من نسي التسمية في أول الطعام؟', options: ['بسم الله أوله وآخره', 'الحمد لله', 'لا شيء عليه', 'يعيد الأكل'], answer: 0, explain: 'كما في حديث عائشة.', page: 37 },
    { type: 'tf', q: 'كان النبي ﷺ يعيب الطعام الذي لا يشتهيه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'ما عاب طعامًا قط، بل يتركه.', page: 38 },
    { type: 'mc', q: 'ما حكم الشرب قائمًا كما جمع العلماء؟', options: ['مكروه، وشربه قائمًا للجواز', 'محرم', 'واجب', 'مستحب'], answer: 0, explain: 'كما في الدرس الثاني عشر.', page: 39 },
    { type: 'mc', q: 'ما الإدام؟', options: ['كل ما يؤكل مع الخبز', 'الخبز اليابس', 'الماء البارد', 'الفاكهة'], answer: 0, explain: 'كما في الدرس الثالث عشر.', page: 41 },
    { type: 'tf', q: 'كان النبي ﷺ يمزح بالكذب أحيانًا لإضحاك أصحابه.', options: ['صواب', 'خطأ'], answer: 1, explain: '«نعم غير أني لا أقول إلا حقًّا».', page: 47 },
    { type: 'mc', q: 'ما الذي قاله النبي ﷺ عن الاضطجاع على البطن؟', options: ['إنها ضجعة أهل النار', 'إنها أفضل النوم', 'لا بأس بها', 'إنها سنة'], answer: 0, explain: 'كما في آداب النوم.', page: 51 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٤٥. الدرس الثاني عشر وأجزاء من الدرس السادس عشر في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'De eigenschappen: eten, drinken, spreken, lachen en slapen',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Zijn gewoonte ﷺ bij het eten en de etiquette ervan; drinken en wat daarbij verboden is; zijn bijgerechten, fruit en drank; zijn manier van spreken en zijn houding tegenover poëzie; zijn lachen, glimlachen en grappen; en zijn slapen, met de etiquette en het gedenken daarbij.',
  source: { ...source, label: 'Kitāb as-Sīra an-Nabawiyya (2): ash-Shamāʾil, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'Zes lessen over zijn dagelijkse gewoonten ﷺ.',
    root: { label: 'De eigenschappen', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Eten', sub: 'les 11', page: 37, children: ['een derde voor eten', 'Allahs naam en lof', 'met rechts', 'nooit kritiek op eten'] },
      { label: 'Drinken', sub: 'les 12–13', page: 39, children: ['in drie teugen', 'uit de waterzak', 'staand'] },
      { label: 'Bijgerecht en fruit', sub: 'les 13', page: 41, children: ['azijn is een goed bijgerecht', 'pompoen', 'meloen met dadels'] },
      { label: 'Spreken en poëzie', sub: 'les 14', page: 42, children: ['duidelijk en afgemeten', 'drie keer herhalen', 'strijd met de tong'] },
      { label: 'Lachen en grappen', sub: 'les 15', page: 46, children: ['de meest glimlachende', 'alleen de waarheid'] },
      { label: 'Slapen', sub: 'les 16', page: 49, children: ['op de rechterzij', 'gedenken voor het slapen', 'het bed afslaan'] }
    ]
  },
  points: [
    { text: 'Hij gaf een belangrijke grondregel voor eten: een derde voor het eten, een derde voor het drinken en een derde voor de adem.', page: 37 },
    { text: 'Aan het begin noem je de naam van Allah; vergeet je dat, dan zeg je "In de naam van Allah, aan het begin en aan het eind"; aan het eind prijs je Allah.', page: 37 },
    { text: 'Hij had nooit kritiek op eten: had hij er zin in, dan at hij, en anders liet hij het, zoals de hagedis die hij niet lustte.', page: 38 },
    { text: 'Het verbod op staand drinken wordt opgevat als afgeraden; dat hij staand dronk, laat zien dat het mag.', page: 39 },
    { text: 'De redenen voor het verbod op drinken uit de opening van een waterzak gelden niet voor kleine blikjes en flesjes die je alleen gebruikt.', page: 40 },
    { text: 'Hij sprak duidelijk en afgemeten, zodat wie bij hem zat het kon onthouden, en herhaalde een woord drie keer.', page: 42 },
    { text: 'Poëzie is een sterk wapen als je het goed gebruikt; het hoort bij de strijd met de tong.', page: 44 },
    { text: 'Grappen maken hoort bij ontspanning, op voorwaarde dat er geen leugen, geen schrik en geen spot met de godsdienst in zit.', page: 48 }
  ],
  terms: [
    { term: 'لقيمات يقمن صلبه', translit: 'luqaymāt yuqimna ṣulbah', meaning: 'Een paar happen die zijn rug recht houden.', explanation: '', notes: [], page: 37 },
    { term: 'غير مكفي ولا مودع', translit: 'ghayr makfiyy wa-lā muwaddaʿ', meaning: 'Uit het gedenken na het eten: lof die nooit genoeg is en nooit wordt opgegeven.', explanation: '', notes: [], page: 37 },
    { term: 'أعافه', translit: 'aʿāfuh', meaning: 'Ik heb er een afkeer van.', explanation: 'Zei hij over de hagedis.', notes: [], page: 38 },
    { term: 'اختناث الأسقية', translit: 'ikhtināth al-asqiya', meaning: 'Drinken uit de opening van waterzakken.', explanation: '', notes: [], page: 39 },
    { term: 'الإدام', translit: 'al-idām', meaning: 'Alles wat je bij het brood eet.', explanation: '', notes: [], page: 41 },
    { term: 'الدباء / القديد', translit: 'ad-dubbāʾ / al-qadīd', meaning: 'Pompoen / gezouten, in de zon gedroogd vlees.', explanation: '', notes: [], page: 41 },
    { term: 'القثاء', translit: 'al-qiththāʾ', meaning: 'Een plant zoals komkommer, maar langer.', explanation: '', notes: [], page: 42 },
    { term: 'الحلو البارد', translit: 'al-ḥulw al-bārid', meaning: 'Koel water gemengd met bijvoorbeeld rozijnen of honing.', explanation: '', notes: [], page: 42 },
    { term: 'كلام فصل', translit: 'kalām faṣl', meaning: 'Duidelijke, afgemeten spraak.', explanation: '', notes: [], page: 42 },
    { term: 'الهام / مقيله', translit: 'al-hām / maqīluh', meaning: 'De kruinen van de hoofden / hun plaats.', explanation: '', notes: [], page: 44 },
    { term: 'المزاح', translit: 'al-mizāḥ', meaning: 'Ontspannen omgaan met een ander zonder hem te kwetsen.', explanation: '', notes: [], page: 47 },
    { term: 'النغير', translit: 'an-nughayr', meaning: 'Een klein vogeltje, zoals een mus.', explanation: '', notes: [], page: 47 },
    { term: 'عربًا أترابًا', translit: 'ʿuruban atrāban', meaning: 'ʿUrub: liefdevol voor haar man; atrāb: van dezelfde leeftijd.', explanation: '', notes: [], page: 48 },
    { term: 'النطع', translit: 'an-niṭʿ', meaning: 'Een leren mat.', explanation: '', notes: [], page: 49 },
    { term: 'عرس', translit: 'ʿarras', meaning: '’s Nachts tijdens een reis halt houden om te rusten.', explanation: '', notes: [], page: 49 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Drinken: verbod en toestemming (alleen ter kennisname)',
      intro: 'Zoals in les 12.',
      columns: ['Verbod', 'Verzoening of uitzondering'],
      rows: [
        { label: 'In de beker ademen', cells: ['verboden als etiquette, om de beker niet vies te maken', 'drie keer ademen buiten de beker'] },
        { label: 'Uit de waterzak drinken', cells: ['verboden', 'niet afgeraden bij nood, als er geen beker is en het met de hand niet lukt'] },
        { label: 'Staand drinken', cells: ['"Laat niemand van jullie staand drinken"', 'het verbod is afraden; dat hij staand dronk, laat zien dat het mag'] }
      ],
      page: 39
    },
    {
      type: 'compare',
      title: 'Etiquette van het slapen',
      intro: 'Zoals in les 16.',
      columns: ['Bewijs'],
      rows: [
        { label: 'Het bed afslaan', cells: ['de hadith van Abū Hurayra in beide Ṣaḥīḥ’s'] },
        { label: 'Wassing voor het slapen', cells: ['"Als je naar bed gaat, doe dan de wassing"'] },
        { label: 'Op de rechterzij slapen', cells: ['zijn gewoonte ﷺ, met zijn hand onder zijn wang'] },
        { label: 'Niet op de buik liggen', cells: ['"Dat is de houding van de mensen van het Vuur"'] },
        { label: 'Tasbīḥ, taḥmīd en takbīr', cells: ['wat hij ʿAlī en Fāṭima leerde'] }
      ],
      page: 50
    }
  ],
  sections: [
    { title: 'Wat hem werd voorgezet', text: 'Hij weigerde niets wat er was, tenzij hij er een afkeer van had; hij hield niet van knoflook vanwege de geur, al is het niet verboden.', page: 38 },
    { title: 'Twee redenen voor het verbod op drinken uit de opening', text: 'Er kan ongemerkt een beestje met het water mee naar binnen komen, en het water kan te hard komen zodat je je verslikt.', page: 40 },
    { title: 'Zijn houding tegenover poëzie', text: 'Poëzie lag niet in zijn aard, maar hij citeerde Ibn Rawāḥa, waardeerde de regel van Labīd en liet zich verzen van Umayya ibn Abī ṣ-Ṣalt voordragen.', page: 43 },
    { title: 'Vormen van strijd vandaag', text: 'Strijd met het woord, het artikel en de fatwa, het verspreiden van kennis, tawḥīd en juiste fiqh, en het verdedigen van de Boodschapper ﷺ.', page: 44 },
    { title: 'Zijn grappen ﷺ', text: 'Hij omhelsde Zāhir de bedoeïen van achteren en riep: "Wie koopt deze slaaf?"; tegen de oude vrouw zei hij dat geen oude vrouw het Paradijs binnengaat, namelijk niet als oude vrouw.', page: 47 },
    { title: 'Het lachen van de metgezellen', text: 'Abū Salama ibn ʿAbd ar-Raḥmān zei: zij waren niet stuurs en niet levenloos; Ibn ʿUmar zei: zij lachten terwijl het geloof in hun harten groter was dan een berg; Bilāl ibn Saʿd zei: ’s nachts waren zij als monniken.', page: 48 },
    { title: 'Zijn gewoonte bij het slapen', text: 'Hij sliep op een leren mat, een matras, een rieten mat, de grond of een bed; hij sliep niet meer dan nodig en ontzegde zichzelf ook niet wat nodig was.', page: 49 },
    { title: 'Zijn slaap verbrak de wassing niet (alleen ter kennisname)', text: 'An-Nawawī zei: het is eigen aan hem dat liggend slapen zijn wassing niet verbrak, omdat zijn ogen sliepen maar zijn hart niet.', more: FYI_NL, page: 50 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Etiquette bij het eten', items: ['aan het begin Allahs naam noemen', 'met rechts eten', 'eten van wat voor je ligt', 'de vingers aflikken', 'aan het eind Allah prijzen', 'geen kritiek op eten'], page: 37, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden voor grappen', items: ['geen leugen', 'niemand laten schrikken', 'geen spot met de godsdienst'], page: 48, origin: 'boek' },
    { kind: 'opsomming', title: 'Gedenken en recitatie voor het slapen', items: ['de beschermingssoera’s met blazen en strijken', '"In Uw naam, o Allah, sterf en leef ik"', 'tasbīḥ 33, taḥmīd 33 en takbīr 34', 'soera al-Kāfirūn', 'as-Sajda en Tabārak'], page: 51, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Een derde voor eten, een derde voor drinken, een derde voor adem; met Allahs naam, lof en de rechterhand.',
    'Hij dronk in drie teugen en verbood ademen in de beker en drinken uit de opening van de waterzak.',
    'Hij hield van azijn, pompoen en zoete, koele drank.',
    'Hij sprak duidelijk en herhaalde drie keer; goede poëzie hoort bij de strijd met de tong.',
    'Hij glimlachte het meest van alle mensen, maakte grappen maar zei alleen de waarheid, en sliep op zijn rechterzij met gedenken.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat zeg je als je vergeten bent aan het begin van het eten Allahs naam te noemen?', options: ['"In de naam van Allah, aan het begin en aan het eind"', '"Alle lof aan Allah"', 'niets', 'opnieuw beginnen met eten'], answer: 0, explain: 'Zoals in de hadith van ʿĀʾisha.', page: 37 },
    { type: 'tf', q: 'De Profeet ﷺ had kritiek op eten waar hij geen zin in had.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij had nooit kritiek op eten; hij liet het staan.', page: 38 },
    { type: 'mc', q: 'Wat is het oordeel over staand drinken volgens de verzoening van de geleerden?', options: ['afgeraden; dat hij staand dronk laat zien dat het mag', 'verboden', 'verplicht', 'aanbevolen'], answer: 0, explain: 'Zoals in les 12.', page: 39 },
    { type: 'mc', q: 'Wat is idām?', options: ['alles wat je bij het brood eet', 'droog brood', 'koel water', 'fruit'], answer: 0, explain: 'Zoals in les 13.', page: 41 },
    { type: 'tf', q: 'De Profeet ﷺ loog soms een beetje om zijn metgezellen te laten lachen.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Ja, maar ik zeg alleen de waarheid."', page: 47 },
    { type: 'mc', q: 'Wat zei de Profeet ﷺ over op de buik liggen?', options: ['dat is de houding van de mensen van het Vuur', 'dat is de beste slaaphouding', 'daar is niets mis mee', 'dat is sunna'], answer: 0, explain: 'Zoals bij de etiquette van het slapen.', page: 51 }
  ]),
  note: 'Oefening van het boek op p. 45. Les 12 en delen van les 16 staan in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-seerah', chapter: '11', unit: 3, ar, nl }
