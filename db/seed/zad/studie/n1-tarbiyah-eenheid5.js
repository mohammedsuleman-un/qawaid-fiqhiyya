// Hoofdstukkaart bij التربية الإسلامية (١) الحقوق, eenheid 5: حقوق الأقارب والجيران والضيوف (lessen 17–20, boek p. 56–73).
// Het boek heeft zelf geen eenheden; deze indeling in zes thema's is van de samenvatter.
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 58, 63, 67, 72 en een deel van p. 68 zijn in het boek
// "alleen ter kennisname". Niet op de kaart, omdat de toeschrijving of bron nog gecontroleerd moet worden:
// "welke daad is Allah het meest gehaat" (p. 58), het woord van al-Ḥasan over goed nabuurschap (p. 61),
// "als jullie vlees koken, maak dan veel bouillon" (p. 62) en het verhaal van de joodse buurman (p. 63);
// dat de aanbeveling voor de buur ook de niet-moslim betreft, staat er wel in, met het woord van al-Qurṭubī.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (١) الحقوق، سلسلة زاد العلمية',
  pages: '56–73',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'ومن كان يؤمن بالله واليوم الآخر فليصل رحمه', takhrij: 'أخرجه البخاري', note: '', pages: [56], nl: 'Wie in Allah en de Laatste Dag gelooft, laat hij zijn familiebanden onderhouden', nlNote: '' },
  { narrator: 'أبو أيوب الأنصاري', text: 'تعبد الله لا تشرك به شيئًا، وتقيم الصلاة، وتؤتي الزكاة، وتصل الرحم', takhrij: 'أخرجه مسلم', note: 'لأعرابي سأله عما يقربه من الجنة ويباعده من النار.', pages: [56], nl: 'Je aanbidt Allah zonder iets met Hem gelijk te stellen, verricht het gebed, geeft de zakat en onderhoudt de familiebanden', nlNote: 'Tegen een bedoeïen die vroeg wat hem dichter bij het Paradijs en verder van het Vuur brengt.' },
  { narrator: '', text: 'يا معشر قريش اشتروا أنفسكم، لا أغني عنكم من الله شيئًا، يا بني عبد مناف ... يا عباس بن عبد المطلب ... يا صفية عمة رسول الله ... يا فاطمة بنت محمد سليني ما شئت من مالي، لا أغني عنك من الله شيئًا', takhrij: 'رواه البخاري ومسلم', note: 'لما نزل ﴿وأنذر عشيرتك الأقربين﴾.', pages: [57], nl: 'Mensen van Quraysh, koop jezelf vrij; ik kan jullie bij Allah niets baten. Zonen van ʿAbd Manāf ... ʿAbbās ibn ʿAbd al-Muṭṭalib ... Ṣafiyya, tante van de Boodschapper van Allah ... Fāṭima, dochter van Muḥammad, vraag mij van mijn bezit wat je wilt; ik kan je bij Allah niets baten', nlNote: 'Toen "En waarschuw je naaste verwanten" werd geopenbaard.' },
  { narrator: '', text: 'الصدقة على المسكين صدقة، وهي على ذي الرحم ثنتان: صدقة وصلة', takhrij: 'رواه النسائي والترمذي وحسنه', note: '', pages: [57], nl: 'Liefdadigheid aan een arme is liefdadigheid, en aan een familielid is zij tweevoudig: liefdadigheid én het onderhouden van de band', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'لئن كنت كما قلت فكأنما تسفهم المل، ولا يزال معك من الله ظهير عليهم ما دمت على ذلك', takhrij: 'أخرجه مسلم', note: 'لرجل قال: إن لي قرابة أصلهم ويقطعوني، وأحسن إليهم ويسيئون إلي.', pages: [57], nl: 'Als het is zoals je zegt, dan is het alsof je hun hete as te eten geeft, en zolang je zo blijft, staat er van Allah een helper aan jouw kant tegenover hen', nlNote: 'Tegen iemand die zei: ik onderhoud de band met mijn familie en zij verbreken hem; ik ben goed voor hen en zij doen mij kwaad.' },
  { narrator: '', text: 'إن أعمال بني آدم تعرض كل خميس ليلة الجمعة، فلا يقبل عمل قاطع رحم', takhrij: 'رواه أحمد وحسنه الألباني', note: FYI, pages: [58], nl: 'De daden van de kinderen van Ādam worden elke donderdag, in de nacht vóór vrijdag, voorgelegd; de daad van wie familiebanden verbreekt wordt niet aanvaard', nlNote: FYI_NL },
  { narrator: '', text: 'لا يدخل الجنة قاطع رحم', takhrij: 'متفق عليه', note: FYI, pages: [58], nl: 'Wie familiebanden verbreekt, gaat het Paradijs niet binnen', nlNote: FYI_NL },
  { narrator: '', text: 'إن الله يوصيكم بأمهاتكم، ثم يوصيكم بأمهاتكم، ثم يوصيكم بآبائكم، ثم يوصيكم بالأقرب فالأقرب', takhrij: 'رواه البخاري في الأدب المفرد وصححه الألباني', note: '', pages: [59], nl: 'Allah draagt jullie op goed te zijn voor jullie moeders, dan voor jullie moeders, dan voor jullie vaders, dan voor de naasten in volgorde van nabijheid', nlNote: '' },
  { narrator: 'أسماء بنت أبي بكر', text: 'قدمت علي أمي وهي مشركة في عهد رسول الله ﷺ، فاستفتيت رسول الله ﷺ، قلت: أفأصل أمي؟ قال: نعم، صلي أمك', takhrij: 'رواه البخاري ومسلم', note: 'في صلة الرحم الكافرة.', pages: [59], nl: 'Mijn moeder kwam bij mij terwijl zij een veelgodenaanbidster was, in de tijd van de Boodschapper van Allah ﷺ. Ik vroeg hem: zal ik de band met mijn moeder onderhouden? Hij zei: ja, onderhoud de band met je moeder', nlNote: 'De band onderhouden met een niet-moslim familielid.' },
  { narrator: '', text: 'ليس الواصل بالمكافي، ولكن الواصل الذي إذا قطعت رحمه وصلها', takhrij: 'أخرجه البخاري', note: '', pages: [59], nl: 'Wie familiebanden onderhoudt is niet wie alleen teruggeeft wat hij krijgt, maar wie de band herstelt als die verbroken wordt', nlNote: '' },
  { narrator: '', text: 'ما زال يوصيني جبريل بالجار حتى ظننت أنه سيورثه', takhrij: 'رواه البخاري ومسلم', note: '', pages: [61], nl: 'Jibrīl bleef mij zo op het hart drukken goed te zijn voor de buur, dat ik dacht dat hij hem een erfdeel zou geven', nlNote: '' },
  { narrator: '', text: 'من كان يؤمن بالله واليوم الآخر فليكرم جاره', takhrij: 'رواه البخاري ومسلم', note: 'وفي لفظ: «فلا يؤذ جاره».', pages: [61], nl: 'Wie in Allah en de Laatste Dag gelooft, laat hij zijn buur eren', nlNote: 'In een andere bewoording: "laat hij zijn buur geen kwaad doen".' },
  { narrator: '', text: 'ثلاثة يحبهم الله ... والرجل يكون له الجار يؤذيه جواره فيصبر على أذاه حتى يفرق بينهما موت أو ظعن', takhrij: 'رواه أحمد وصححه الألباني', note: '', pages: [61], nl: 'Drie mensen heeft Allah lief ... en de man met een buur die hem hindert, die geduldig blijft tot de dood of een verhuizing hen scheidt', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'قيل: يا رسول الله، إن فلانة تقوم الليل وتصوم النهار وتفعل وتصدق، وتؤذي جيرانها بلسانها، فقال: لا خير فيها، هي من أهل النار', takhrij: 'رواه البخاري في الأدب المفرد وصححه الألباني', note: '', pages: [61], nl: 'Men zei: Boodschapper van Allah, die en die vrouw bidt ’s nachts, vast overdag, doet goed en geeft liefdadigheid, maar hindert haar buren met haar tong. Hij zei: er is geen goed in haar; zij hoort bij de mensen van het Vuur', nlNote: '' },
  { narrator: '', text: 'لأن يزني الرجل بعشر نسوة أيسر عليه من أن يزني بامرأة جاره ... لأن يسرق من عشرة أهل أبيات أيسر عليه من أن يسرق من بيت جاره', takhrij: 'رواه البخاري في الأدب المفرد وصححه الألباني', note: '', pages: [62], nl: 'Dat een man ontucht pleegt met tien vrouwen is lichter voor hem dan dat hij ontucht pleegt met de vrouw van zijn buur ... dat hij steelt uit tien huizen is lichter voor hem dan dat hij steelt uit het huis van zijn buur', nlNote: '' },
  { narrator: '', text: 'لا يؤمن عبد حتى يحب لجاره ما يحب لنفسه', takhrij: 'أخرجه مسلم', note: '', pages: [62], nl: 'Een dienaar gelooft niet echt totdat hij voor zijn buur wenst wat hij voor zichzelf wenst', nlNote: '' },
  { narrator: '', text: 'ما آمن بي من بات شبعان وجاره جائع إلى جنبه وهو يعلم به', takhrij: 'رواه الطبراني والبزار وصححه الألباني', note: '', pages: [62], nl: 'Wie met een volle maag gaat slapen terwijl zijn buur naast hem honger heeft en hij dat weet, gelooft niet echt in mij', nlNote: '' },
  { narrator: '', text: 'لا يمنع جار جاره أن يغرز خشبه في جداره', takhrij: 'رواه البخاري ومسلم', note: '', pages: [62], nl: 'Laat een buur zijn buur niet verbieden een balk in zijn muur te steken', nlNote: '' },
  { narrator: '', text: 'والله لا يؤمن، والله لا يؤمن، والله لا يؤمن، قالوا: وما ذاك يا رسول الله؟ قال: الجار لا يأمن جاره بوائقه', takhrij: 'أخرجه البخاري', note: 'بوائقه: شره. ' + FYI, pages: [63], nl: 'Bij Allah, hij gelooft niet; bij Allah, hij gelooft niet; bij Allah, hij gelooft niet. Men vroeg: wie, Boodschapper van Allah? Hij zei: de buur wiens buur niet veilig is voor zijn kwaad', nlNote: FYI_NL },
  { narrator: '', text: 'اطرح متاعك على الطريق ... قد لعنك الله قبل الناس ... ارفع متاعك فقد كفيت', takhrij: 'رواه الطبراني والبزار وحسنه الألباني', note: 'لرجل شكا جاره، فجعل الناس يمرون عليه ويلعنونه. ' + FYI, pages: [63], nl: 'Zet je spullen op straat ... Allah heeft hem vóór de mensen vervloekt ... haal je spullen weer binnen, je bent ervan verlost', nlNote: 'Tegen iemand die over zijn buur klaagde; de voorbijgangers vervloekten die buur. ' + FYI_NL },
  { narrator: '', text: 'لا يدخل الجنة من لا يأمن جاره بوائقه', takhrij: 'أخرجه مسلم', note: FYI, pages: [63], nl: 'Wie zijn buur niet veilig laat voor zijn kwaad, gaat het Paradijs niet binnen', nlNote: FYI_NL },
  { narrator: 'عائشة', text: 'قلت: يا رسول الله، إن لي جارين فإلى أيهما أهدي؟ قال: إلى أقربهما منك بابًا', takhrij: 'أخرجه البخاري', note: '', pages: [64], nl: 'Ik zei: Boodschapper van Allah, ik heb twee buren; aan wie van hen geef ik een geschenk? Hij zei: aan wie zijn deur het dichtst bij de jouwe heeft', nlNote: '' },
  { narrator: '', text: 'من كان يؤمن بالله واليوم الآخر فليكرم ضيفه', takhrij: 'رواه البخاري ومسلم', note: '', pages: [66], nl: 'Wie in Allah en de Laatste Dag gelooft, laat hij zijn gast eren', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'مرحبًا بالقوم غير خزايا ولا ندامى', takhrij: 'رواه البخاري ومسلم', note: 'لوفد عبد القيس؛ أي غير أذلاء بمجيئكم ولا نادمين.', pages: [66], nl: 'Welkom, mensen, zonder schande en zonder spijt', nlNote: 'Tegen de delegatie van ʿAbd al-Qays: jullie komst vernedert jullie niet en jullie zullen er geen spijt van hebben.' },
  { narrator: 'خالد بن الوليد', text: 'أحرام هو يا رسول الله؟ قال: لا، ولكنه لا يكون بأرض قومي فأجدني أعافه', takhrij: 'متفق عليه', note: 'لما قدم للنبي ﷺ ضب مشوي فأمسك يده؛ فأكل خالد ورسول الله ينظر.', pages: [67], nl: 'Is het verboden, Boodschapper van Allah? Hij zei: nee, maar het komt niet voor in het land van mijn volk, dus ik heb er een afkeer van', nlNote: 'Toen de Profeet ﷺ een geroosterde hagedis werd voorgezet en hij zijn hand terugtrok; Khālid at ervan terwijl de Profeet toekeek.' },
  { narrator: 'أبو هريرة', text: 'ضحك الله الليلة، أو عجب، من فعالكما', takhrij: 'متفق عليه', note: 'للأنصاري وامرأته لما آثرا الضيف، فأنزل الله ﴿ويؤثرون على أنفسهم ولو كان بهم خصاصة﴾. ' + FYI, pages: [68], nl: 'Allah heeft vannacht gelachen, of: zich verwonderd, over wat jullie twee deden', nlNote: 'Tegen de Anṣārī en zijn vrouw, die hun gast voorgingen; toen werd geopenbaard: "En zij geven anderen voorrang boven zichzelf, ook al zijn zij zelf in nood." ' + FYI_NL },
  { narrator: '', text: 'فراش للرجل، وفراش لامرأته، والثالث للضيف، والرابع للشيطان', takhrij: 'أخرجه مسلم', note: 'في توفير الفراش للضيف.', pages: [69], nl: 'Een bed voor de man, een bed voor zijn vrouw, het derde voor de gast, en het vierde is voor de duivel', nlNote: 'Een bed voor de gast.' },
  { narrator: '', text: 'ولا يحل لرجل مسلم أن يقيم عند أخيه حتى يؤثمه، قالوا: يا رسول الله وكيف يؤثمه؟ قال: يقيم عنده ولا شيء له يقريه به', takhrij: 'أخرجه مسلم', note: '', pages: [70], nl: 'Het is een moslim niet toegestaan bij zijn broeder te blijven totdat hij hem tot zonde brengt. Men vroeg: hoe brengt hij hem tot zonde? Hij zei: hij blijft bij hem terwijl die niets meer heeft om hem te onthalen', nlNote: '' },
  { narrator: 'أبو مسعود الأنصاري', text: 'إنك دعوتنا خامس خمسة، وهذا رجل قد تبعنا، فإن شئت أذنت له، وإن شئت تركته، قال: بل أذنت له', takhrij: 'رواه البخاري ومسلم', note: 'لأبي شعيب لما تبعهم رجل.', pages: [70], nl: 'Je hebt ons uitgenodigd met z’n vijven, en deze man is ons gevolgd; als je wilt geef je hem toestemming, en als je wilt laat je hem. Hij zei: ik geef hem toestemming', nlNote: 'Tegen Abū Shuʿayb, toen er een man meekwam.' },
  { narrator: '', text: 'إياك والحلوب', takhrij: 'أخرجه مسلم', note: 'لأبي الهيثم لما أخذ المدية ليذبح.', pages: [71], nl: 'Pas op, niet het melkdier', nlNote: 'Tegen Abū l-Haytham toen hij het mes pakte om te slachten.' },
  { narrator: 'أنس بن مالك', text: 'أفطر عندكم الصائمون، وأكل طعامكم الأبرار، وصلت عليكم الملائكة', takhrij: 'رواه أحمد وأبو داود والنسائي وصححه الألباني', note: 'لما جاء سعد بن عبادة بخبز وزيت.', pages: [71], nl: 'Mogen vastenden bij jullie het vasten verbreken, mogen vrome mensen jullie eten eten, en mogen de engelen voor jullie om zegen vragen', nlNote: 'Toen Saʿd ibn ʿUbāda brood en olie bracht.' },
  { narrator: '', text: 'من كان يؤمن بالله واليوم الآخر فليكرم ضيفه جائزته، قالوا: وما جائزته يا رسول الله؟ قال: يوم وليلة، والضيافة ثلاثة أيام، فما كان وراء ذلك فهو صدقة عليه', takhrij: 'رواه البخاري ومسلم', note: '', pages: [71], nl: 'Wie in Allah en de Laatste Dag gelooft, laat hij zijn gast zijn gave geven. Men vroeg: wat is zijn gave? Hij zei: een dag en een nacht; de gastvrijheid duurt drie dagen, en wat daarna komt is liefdadigheid voor hem', nlNote: '' },
  { narrator: 'عقبة بن عامر', text: 'إن نزلتم بقوم فأمروا لكم بما ينبغي للضيف فاقبلوا، فإن لم يفعلوا فخذوا منهم حق الضيف الذي ينبغي لهم', takhrij: 'رواه البخاري ومسلم', note: FYI, pages: [72], nl: 'Als jullie bij mensen verblijven en zij geven jullie wat een gast toekomt, aanvaard het dan; doen zij het niet, neem dan van hen het recht van de gast dat hun past', nlNote: FYI_NL },
  { narrator: '', text: 'لا يحل مال امرئ إلا بطيب نفس منه', takhrij: 'رواه أحمد وصححه الألباني', note: 'دليل الجمهور. ' + FYI, pages: [72], nl: 'Het bezit van iemand is niet toegestaan, behalve met zijn welgemeende instemming', nlNote: 'Het bewijs van de meerderheid. ' + FYI_NL }
]

const TAKHRIJ_NL = {
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه مسلم': 'Muslim', 'أخرجه البخاري': 'al-Bukhārī',
  'رواه النسائي والترمذي وحسنه': 'an-Nasāʾī en at-Tirmidhī, die hem goed (ḥasan) noemde',
  'رواه أحمد وحسنه الألباني': 'Aḥmad; goed (ḥasan) volgens al-Albānī',
  'رواه البخاري في الأدب المفرد وصححه الألباني': 'al-Bukhārī in al-Adab al-Mufrad; authentiek volgens al-Albānī',
  'رواه أحمد وصححه الألباني': 'Aḥmad; authentiek volgens al-Albānī',
  'رواه الطبراني والبزار وصححه الألباني': 'aṭ-Ṭabarānī en al-Bazzār; authentiek volgens al-Albānī',
  'رواه الطبراني والبزار وحسنه الألباني': 'aṭ-Ṭabarānī en al-Bazzār; goed (ḥasan) volgens al-Albānī',
  'رواه أحمد وأبو داود والنسائي وصححه الألباني': 'Aḥmad, Abū Dāwūd en an-Nasāʾī; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'أبو هريرة': 'Abū Hurayra', 'أبو أيوب الأنصاري': 'Abū Ayyūb al-Anṣārī', 'أسماء بنت أبي بكر': 'Asmāʾ bint Abī Bakr', 'عائشة': 'ʿĀʾisha',
  'عبد الله بن عباس': 'ʿAbdallāh ibn ʿAbbās', 'خالد بن الوليد': 'Khālid ibn al-Walīd', 'أبو مسعود الأنصاري': 'Abū Masʿūd al-Anṣārī',
  'أنس بن مالك': 'Anas ibn Mālik', 'عقبة بن عامر': 'ʿUqba ibn ʿĀmir'
}

const PERSONS = [
  ['abu-hurayra', 'text', [56, 57, 61, 68], 'روى أحاديث في صلة الرحم والجار والضيف.', 'Overleverde hadith over familiebanden, de buur en de gast.'],
  ['abu-ayyub-al-ansari', 'text', [56, 68], 'روى حديث الأعرابي في صلة الرحم، ونزل النبي ﷺ عنده فتحول إلى السفل.', 'Overleverde de hadith van de bedoeïen over familiebanden; de Profeet ﷺ logeerde bij hem en hij ging zelf beneden wonen.'],
  ['al-abbas-ibn-abd-al-muttalib', 'text', [57], 'ناداه النبي ﷺ لما نزل ﴿وأنذر عشيرتك الأقربين﴾.', 'De Profeet ﷺ riep hem toen "En waarschuw je naaste verwanten" werd geopenbaard.'],
  ['safiyya-bint-abd-al-muttalib', 'text', [57], 'عمة النبي ﷺ، ناداها لما نزل ﴿وأنذر عشيرتك الأقربين﴾.', 'Tante van de Profeet ﷺ, die haar riep toen "En waarschuw je naaste verwanten" werd geopenbaard.'],
  ['fatima', 'text', [57], 'قال لها النبي ﷺ: سليني ما شئت من مالي لا أغني عنك من الله شيئًا.', 'De Profeet ﷺ zei tegen haar: vraag van mijn bezit wat je wilt; ik kan je bij Allah niets baten.'],
  ['asma-bint-abi-bakr', 'text', [59], 'استفتت النبي ﷺ في صلة أمها المشركة.', 'Vroeg de Profeet ﷺ of zij de band met haar niet-moslim moeder moest onderhouden.'],
  ['al-qurtubi', 'text', [63], 'قال: الوصية بالجار مأمور بها مسلمًا كان أو كافرًا. ' + FYI, 'Zei dat de aanbeveling voor de buur geldt, moslim of niet. ' + FYI_NL],
  ['aisha', 'text', [64], 'سألت النبي ﷺ: إلى أي جاريها تهدي؟', 'Vroeg de Profeet ﷺ aan welke van haar twee buren zij een geschenk moest geven.'],
  ['ibn-abbas', 'text', [66], 'روى استقبال النبي ﷺ وفد عبد القيس.', 'Overleverde hoe de Profeet ﷺ de delegatie van ʿAbd al-Qays ontving.'],
  ['abu-al-haytham-ibn-at-tayyihan', 'text', [66, 67, 71], 'أكرم النبي ﷺ وصاحبيه وقال: ما أحد اليوم أكرم أضيافًا مني.', 'Ontving de Profeet ﷺ en zijn twee metgezellen en zei: niemand heeft vandaag edelere gasten dan ik.'],
  ['khalid-ibn-al-walid', 'text', [67], 'أكل الضب ورسول الله ﷺ ينظر.', 'At de hagedis terwijl de Boodschapper van Allah ﷺ toekeek.'],
  ['ash-shawkani', 'text', [70], 'قال: دخل في النهي عن دخول بيت النبي ﷺ بغير إذن سائر المؤمنين.', 'Zei dat het verbod om zonder toestemming het huis van de Profeet ﷺ binnen te gaan voor alle gelovigen geldt.'],
  ['abu-masud-al-ansari', 'text', [70], 'روى قصة أبي شعيب ودعوته النبي ﷺ.', 'Overleverde het verhaal van Abū Shuʿayb, die de Profeet ﷺ uitnodigde.'],
  ['abu-shuayb-al-ansari', 'text', [70], 'دعا النبي ﷺ خامس خمسة وأذن للرجل الذي تبعهم.', 'Nodigde de Profeet ﷺ met z’n vijven uit en gaf de man die meekwam toestemming.'],
  ['anas-ibn-malik', 'text', [71], 'روى دعاء النبي ﷺ عند سعد بن عبادة.', 'Overleverde de smeekbede van de Profeet ﷺ bij Saʿd ibn ʿUbāda.'],
  ['sad-ibn-ubada', 'text', [71], 'جاء النبي ﷺ بخبز وزيت فدعا له.', 'Bracht de Profeet ﷺ brood en olie, waarop die voor hem bad.'],
  ['abdallah-ibn-abi-al-hudhayl', 'text', [71], 'روى قول ابن مسعود لمن نظر إلى المرأة في بيت المريض.', 'Overleverde wat Ibn Masʿūd zei tegen wie in het huis van een zieke naar de vrouw keek.'],
  ['ibn-masud', 'text', [71], 'قال لمن نظر إلى المرأة: لو انفقأت عينك كان خيرًا لك.', 'Zei tegen wie naar de vrouw keek: als je oog was uitgestoken, was dat beter voor je geweest.'],
  ['uqba-ibn-amir', 'text', [72], 'روى «فخذوا منهم حق الضيف». ' + FYI, 'Overleverde "neem dan van hen het recht van de gast". ' + FYI_NL],
  ['ibn-uthaymin', 'text', [72], 'قال: للضيف أن يأخذ ما يكفيه إذا امتنع المضيف. ' + FYI, 'Zei dat de gast mag nemen wat hij nodig heeft als de gastheer weigert. ' + FYI_NL],
  ['ahmad-ibn-hanbal', 'text', [58, 61, 71, 72], 'قول ابن عثيمين في الضيف رواية عنه؛ وأخرج أحاديث في الوحدة.', 'Het standpunt van Ibn ʿUthaymīn over de gast is een overlevering van hem; hij nam ook hadith van deze eenheid op.'],
  ['malik-ibn-anas', 'text', [72], 'قال: ليس على أهل الحضر ضيافة. ' + FYI, 'Zei: op stedelingen rust geen plicht tot gastvrijheid. ' + FYI_NL],
  ['sahnun', 'text', [72], 'قال: إنما الضيافة على أهل القرى، وأما الحضر فالفندق. ' + FYI, 'Zei: gastvrijheid rust op dorpsbewoners; in de stad is er de herberg. ' + FYI_NL],
  ['al-bukhari', 'takhrij', [56, 57, 59, 61, 62, 63, 64, 66, 67, 68, 70, 71, 72], 'أخرج أحاديث في الوحدة، ومنها في الأدب المفرد.', 'Nam hadith van deze eenheid op, ook in al-Adab al-Mufrad.'],
  ['muslim', 'takhrij', [56, 57, 58, 59, 61, 62, 63, 66, 67, 68, 69, 70, 71, 72], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['an-nasai', 'takhrij', [57, 71], 'أخرج حديثين في الوحدة.', 'Nam twee hadith van deze eenheid op.'],
  ['at-tirmidhi', 'takhrij', [57], 'أخرج حديث الصدقة على ذي الرحم.', 'Nam de hadith over liefdadigheid aan familie op.'],
  ['at-tabarani', 'takhrij', [62, 63], 'أخرج حديثين في الجار.', 'Nam twee hadith over de buur op.'],
  ['al-bazzar', 'takhrij', [62, 63], 'أخرج حديثين في الجار.', 'Nam twee hadith over de buur op.'],
  ['abu-dawud', 'takhrij', [71], 'أخرج دعاء النبي ﷺ عند سعد بن عبادة.', 'Nam de smeekbede bij Saʿd ibn ʿUbāda op.'],
  ['al-albani', 'takhrij', [58, 59, 61, 62, 63, 71, 72], 'صحح أحاديث في الوحدة وحسنها.', 'Beoordeelde hadith in deze eenheid als authentiek of goed.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'حقوق الأقارب والجيران والضيوف',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'صلة الرحم الإحسان إلى الأقارب ورعايتهم وإن أساؤوا، وقطعها من الكبائر؛ وللجار حقوق من الصبر على أذاه وعدم إيذائه والإحسان إليه؛ وللضيف حق الإكرام، وللمضيف حقوق على الضيف، مع مسائل في الضيافة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'موضوعات الدروس الأربعة كما في الكتاب.',
    root: { label: 'حقوق الأقارب والجيران والضيوف', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'ذوو الرحم', sub: 'الدرس ١٧', page: 56, children: ['من هم', 'حقوقهم', 'حكم القطع', 'مسائل'] },
      { label: 'الجار', sub: 'الدرس ١٨', page: 61, children: ['الصبر على أذاه', 'الإحسان إليه', 'أقسام الجيران'] },
      { label: 'الضيف', sub: 'الدرس ١٩', page: 66, children: ['الفرح به', 'إكرامه', 'صيانته'] },
      { label: 'المضيف', sub: 'الدرس ٢٠', page: 70, children: ['الاستئذان', 'عدم الإحراج', 'الدعاء له', 'مسائل الضيافة'] }
    ]
  },
  points: [
    { text: 'ذوو الرحم: الأصول والفروع والحواشي، الأبعد فالأبعد.', page: 56 },
    { text: 'صلة الرحم الإحسان إلى الأقربين ورعايتهم وإن أساؤوا، وجلب ما ينفعهم ودفع ما يضرهم في الدنيا والآخرة.', page: 56 },
    { text: 'تجب صلة الرحم الكافرة، ويرجع في الصلة إلى العرف المعتبر شرعًا.', page: 59 },
    { text: 'الواصل الحقيقي من يصل رحمه إذا قطعت.', page: 59 },
    { text: 'الوصية بالجار تشمل المسلم والكافر، ويبدأ بالأقرب بابًا.', page: 63 },
    { text: 'الضيف المقصود بالإكرام الواجب: المسافر الذي ينزل غير بلده.', page: 66 },
    { text: 'على الضيف أن يستأذن ويحضر في الموعد، ولا يطيل البقاء بما يحرج مضيفه، ولا يصطحب من لم يؤذن له.', page: 70 },
    { text: 'الضيافة ثلاثة أيام، وما زاد فهو صدقة.', page: 71 }
  ],
  terms: [
    { term: 'ذوو الرحم', translit: 'dhawū r-raḥim', meaning: 'الأقارب من الأصول والفروع والحواشي.', explanation: 'الأصول: الآباء والأمهات وإن علوا؛ الفروع: الأولاد وإن نزلوا؛ الحواشي: الإخوة والأخوات والأعمام والعمات والأخوال والخالات.', notes: [], page: 56 },
    { term: 'صلة الرحم', translit: 'ṣilat ar-raḥim', meaning: 'الإحسان إلى الأقربين من ذوي النسب ورعايتهم وإن أساؤوا.', explanation: '', notes: [], page: 56 },
    { term: 'المل', translit: 'al-mall', meaning: 'الرماد الحار.', explanation: '«فكأنما تسفهم المل».', notes: [], page: 57 },
    { term: 'البوائق', translit: 'al-bawāʾiq', meaning: 'الشرور.', explanation: '«الجار لا يأمن جاره بوائقه».', notes: [], page: 63 },
    { term: 'الجار الجنب', translit: 'al-jār al-junub', meaning: 'الجار البعيد.', explanation: 'في مقابل الجار ذي القربى.', notes: [], page: 64 },
    { term: 'فراغ', translit: 'farāgha', meaning: 'ذهب سريعًا في خفية.', explanation: '﴿فراغ إلى أهله فجاء بعجل سمين﴾.', notes: [], page: 67 },
    { term: 'الجائزة', translit: 'al-jāʾiza', meaning: 'حق الضيف يومًا وليلة.', explanation: 'الاهتمام في اليوم الأول بأفضل ما يجد.', notes: [], page: 71 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'حقوق الأقارب',
      intro: 'كما عددها الكتاب.',
      nodes: [
        { label: 'الحرص على ما ينفعهم في دينهم ودنياهم', page: 57 },
        { label: 'تفقد أحوالهم ومواساتهم', page: 57 },
        { label: 'محبتهم ورحمتهم', page: 57 },
        { label: 'الصبر على أذاهم', page: 57 },
        { label: 'النفقة عند حاجتهم عند بعض الفقهاء', page: 57 },
        { label: 'الصلة الدائمة والحذر من القطع', page: 57 }
      ]
    },
    {
      type: 'compare',
      title: 'الجيران ثلاثة',
      intro: 'كما قال أهل العلم في الكتاب.',
      columns: ['حقوقه'],
      rows: [
        { label: 'المسلم القريب', cells: ['ثلاثة: الإسلام والجوار والقرابة'] },
        { label: 'المسلم غير القريب', cells: ['حقان: الإسلام والجوار'] },
        { label: 'الكافر', cells: ['حق واحد: الجوار'] }
      ],
      page: 64
    },
    {
      type: 'compare',
      title: 'حقوق الضيف والمضيف',
      intro: 'كما في الدرسين التاسع عشر والعشرين.',
      columns: ['الحقوق'],
      rows: [
        { label: 'حق الضيف', cells: ['إظهار الفرح به، وإكرامه، ومراعاة أعرافه، وتقريب الطعام إليه، وإيثاره، وإنزاله مكانًا لائقًا، وتوفير الفراش، وصيانته عما يؤذيه'] },
        { label: 'حق المضيف', cells: ['الاستئذان والحضور في الموعد، وعدم إطالة البقاء، وعدم اصطحاب من لم يؤذن له، والنصح له، والدعاء له، وعدم التلصص على عورات البيت'] }
      ],
      page: 66
    }
  ],
  sections: [
    { title: 'قطع الرحم (للاطلاع فقط)', text: 'من كبائر الذنوب الموجبة للعن الله (محمد ٢٢–٢٣)، وموجب لتعجيل العقوبة، ومن موانع قبول العمل، ومن موانع دخول الجنة.', more: FYI, page: 58 },
    { title: 'العرف في الصلة', text: 'لم يبين الكتاب والسنة نوع الصلة ولا مقدارها، فيرجع فيها إلى العرف المعتبر شرعًا: ما عده الناس صلة فهو صلة، وإذا فسدت الأعراف فلا عبرة بها.', more: '', page: 59 },
    { title: 'من صور الإحسان إلى الجار', text: 'أن يحب له ما يحب لنفسه، وتعاهده بالهدايا وبما يحتاج من طعام، والقيام على شؤون أهله في غيابه أو بعد وفاته، والسماح له بالانتفاع بما لا يضره.', more: '', page: 62 },
    { title: 'من صور إكرام الضيف (للاطلاع فقط)', text: 'أن يقوم على خدمته بنفسه، ويلاطفه بطيب الحديث، ويعجل بتقديم أطيب الطعام إن تيسر وإلا فمما يملك.', more: FYI, page: 67 },
    { title: 'عدم التلصص على عورات البيت', text: 'دخل ابن مسعود على مريض يعوده وفي البيت امرأة، فجعل رجل ينظر إليها، فقال له: لو انفقأت عينك كان خيرًا لك. رواه البخاري في الأدب المفرد وصححه الألباني.', more: '', page: 71 },
    { title: 'هل يأخذ الضيف حقه إن منعه المضيف؟ (للاطلاع فقط)', text: 'قال ابن عثيمين: له أن يأخذ ما يكفيه بالمعروف، وهو رواية عن أحمد؛ والجمهور: لا يحل له أن يأخذ بغير إذنه، ويرون الضيافة مستحبة ويحملون حديث عقبة على القرى والبدو؛ قال مالك: ليس على أهل الحضر ضيافة؛ وقال الكتاب: وهذا القول من حيث العرف يحسن المصير إليه.', more: FYI, page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'صلة الرحم', items: ['الإحسان إلى الأقربين من ذوي النسب ورعايتهم وإن أساؤوا.', 'والحرص على جلب ما ينفعهم ودفع ما يضرهم في الدنيا والآخرة.'], page: 56, origin: 'boek' },
    { kind: 'opsomming', title: 'مسائل في صلة الرحم', items: ['للأقرب فالأقرب', 'تجب صلة الرحم الكافرة', 'يرجع فيها إلى العرف', 'الواصل من وصل إذا قطع'], page: 59, origin: 'boek' },
    { kind: 'definitie', title: 'الضيف المقصود بالإكرام الواجب', items: ['المسافر الذي ينزل غير بلده.', 'لا من كان من أهل البلد فذهب إلى بيت جيرانه.'], page: 66, origin: 'boek' },
    { kind: 'onderscheid', title: 'مدة الضيافة', items: ['اليوم الأول: الجائزة، بأفضل ما يجد.', 'الثاني والثالث: ما تيسر.', 'بعد الثلاثة: صدقة.'], page: 71, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'صلة الرحم إحسان إلى الأقارب وإن أساؤوا، وقطعها من الكبائر.',
    'تجب صلة الرحم الكافرة، والواصل من وصل إذا قطع.',
    'للجار حقوق تشمل المسلم والكافر، وإيذاؤه من الكبائر.',
    'إكرام الضيف من الإيمان، والضيافة ثلاثة أيام.',
    'وللمضيف على الضيف حقوق: الاستئذان وعدم الإحراج والدعاء له.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من الحواشي من ذوي الرحم؟', options: ['الإخوة والأعمام والأخوال', 'الآباء والأجداد', 'الأولاد والأحفاد', 'الجيران'], answer: 0, explain: 'والأخوات والعمات والخالات.', page: 56 },
    { type: 'tf', q: 'تجب صلة الرحم ولو كان القريب كافرًا.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما في حديث أسماء: «نعم صلي أمك».', page: 59 },
    { type: 'mc', q: 'إلى أي الجارين يهدى أولًا؟', options: ['أقربهما بابًا', 'أكبرهما سنًا', 'أغناهما', 'أقدمهما سكنًا'], answer: 0, explain: '«إلى أقربهما منك بابًا».', page: 64 },
    { type: 'mc', q: 'كم حقًا للجار المسلم القريب؟', options: ['ثلاثة', 'اثنان', 'واحد', 'أربعة'], answer: 0, explain: 'الإسلام والجوار والقرابة.', page: 64 },
    { type: 'tf', q: 'ترك النبي ﷺ أكل الضب لأنه حرام.', options: ['صواب', 'خطأ'], answer: 1, explain: 'قال: لا، ولكنه لا يكون بأرض قومي فأجدني أعافه.', page: 67 },
    { type: 'mc', q: 'كم مدة الضيافة؟', options: ['ثلاثة أيام', 'يوم وليلة', 'أسبوع', 'لا حد لها'], answer: 0, explain: 'وما زاد فهو صدقة.', page: 71 }
  ]),
  note: 'نشاط الكتاب في الصفحات ٦٠ و٦٥ و٦٩ و٧٣. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'De rechten van familie, buren en gasten',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Familiebanden onderhouden is goed zijn voor je verwanten en voor hen zorgen, ook als zij je kwaad doen; de banden verbreken is een grote zonde. De buur heeft rechten: geduld met zijn hinder, hem geen kwaad doen en goed voor hem zijn. De gast heeft recht op eerbetoon, de gastheer heeft rechten op de gast, en er zijn regels over gastvrijheid.',
  source: { ...source, label: 'At-Tarbiya al-Islāmiyya (1): de rechten, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'De onderwerpen van de vier lessen zoals in het boek.',
    root: { label: 'De rechten van familie, buren en gasten', sub: 'Eenheid 5' },
    nodes: [
      { label: 'Familie', sub: 'les 17', page: 56, children: ['wie het zijn', 'hun rechten', 'banden verbreken', 'kwesties'] },
      { label: 'De buur', sub: 'les 18', page: 61, children: ['geduld met zijn hinder', 'goed voor hem zijn', 'soorten buren'] },
      { label: 'De gast', sub: 'les 19', page: 66, children: ['blij met hem zijn', 'hem eren', 'hem beschermen'] },
      { label: 'De gastheer', sub: 'les 20', page: 70, children: ['toestemming vragen', 'niet tot last zijn', 'voor hem bidden', 'regels over gastvrijheid'] }
    ]
  },
  points: [
    { text: 'Familie (dhawū r-raḥim): voorouders, nakomelingen en zijlijnen, de verdere na de nadere.', page: 56 },
    { text: 'Familiebanden onderhouden is goed zijn voor je naaste verwanten en voor hen zorgen, ook als zij je kwaad doen, en hun baat zoeken en schade van hen weren in dit leven en het Hiernamaals.', page: 56 },
    { text: 'Ook de band met een niet-moslim familielid moet onderhouden worden; hoe, bepaalt het gebruik dat de sharia erkent.', page: 59 },
    { text: 'Wie echt familiebanden onderhoudt, herstelt de band als die verbroken wordt.', page: 59 },
    { text: 'De aanbeveling voor de buur geldt voor moslim en niet-moslim; je begint bij wie zijn deur het dichtst bij de jouwe heeft.', page: 63 },
    { text: 'De gast die je verplicht moet eren is de reiziger die buiten zijn eigen woonplaats verblijft.', page: 66 },
    { text: 'De gast vraagt toestemming en komt op tijd, blijft niet zo lang dat hij zijn gastheer in verlegenheid brengt, en neemt niemand mee die niet uitgenodigd is.', page: 70 },
    { text: 'Gastvrijheid duurt drie dagen; wat daarna komt is liefdadigheid.', page: 71 }
  ],
  terms: [
    { term: 'ذوو الرحم', translit: 'dhawū r-raḥim', meaning: 'Familie: voorouders, nakomelingen en zijlijnen.', explanation: 'Voorouders: vaders en moeders, ook verder terug; nakomelingen: kinderen, ook verder door; zijlijnen: broers, zussen, ooms en tantes van vaders- en moederskant.', notes: [], page: 56 },
    { term: 'صلة الرحم', translit: 'ṣilat ar-raḥim', meaning: 'Familiebanden onderhouden: goed zijn voor je bloedverwanten en voor hen zorgen, ook als zij je kwaad doen.', explanation: '', notes: [], page: 56 },
    { term: 'المل', translit: 'al-mall', meaning: 'Hete as.', explanation: '"Het is alsof je hun hete as te eten geeft."', notes: [], page: 57 },
    { term: 'البوائق', translit: 'al-bawāʾiq', meaning: 'Kwaad, onheil.', explanation: '"De buur wiens buur niet veilig is voor zijn kwaad."', notes: [], page: 63 },
    { term: 'الجار الجنب', translit: 'al-jār al-junub', meaning: 'De verre buur.', explanation: 'Tegenover de buur die verwant is.', notes: [], page: 64 },
    { term: 'فراغ', translit: 'farāgha', meaning: 'Hij ging snel en onopvallend.', explanation: '"Hij ging ongemerkt naar zijn gezin en kwam met een vetgemest kalf" (adh-Dhāriyāt 51:26).', notes: [], page: 67 },
    { term: 'الجائزة', translit: 'al-jāʾiza', meaning: 'De gave van de gast: een dag en een nacht.', explanation: 'De eerste dag zorg je voor het beste wat je hebt.', notes: [], page: 71 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'De rechten van familieleden',
      intro: 'Zoals het boek ze opsomt.',
      nodes: [
        { label: 'Zoeken wat hun baat in godsdienst en wereld', page: 57 },
        { label: 'Naar hen omkijken en hen troosten', page: 57 },
        { label: 'Hen liefhebben en barmhartig zijn', page: 57 },
        { label: 'Geduldig zijn met hun hinder', page: 57 },
        { label: 'Hen onderhouden als zij in nood zijn, volgens sommige geleerden', page: 57 },
        { label: 'De band blijvend onderhouden en niet verbreken', page: 57 }
      ]
    },
    {
      type: 'compare',
      title: 'Drie soorten buren',
      intro: 'Zoals de geleerden in het boek zeggen.',
      columns: ['Rechten'],
      rows: [
        { label: 'De verwante moslim', cells: ['drie: islam, nabuurschap en verwantschap'] },
        { label: 'De niet-verwante moslim', cells: ['twee: islam en nabuurschap'] },
        { label: 'De niet-moslim', cells: ['één: nabuurschap'] }
      ],
      page: 64
    },
    {
      type: 'compare',
      title: 'De rechten van gast en gastheer',
      intro: 'Zoals in les 19 en 20.',
      columns: ['Rechten'],
      rows: [
        { label: 'Recht van de gast', cells: ['blijdschap tonen, hem eren, rekening houden met zijn gewoonten, het eten dichtbij zetten, hem voorrang geven, een passende plek, een bed, en hem beschermen tegen wat hem hindert'] },
        { label: 'Recht van de gastheer', cells: ['toestemming vragen en op tijd komen, niet te lang blijven, niemand ongevraagd meenemen, hem goed raad geven, voor hem bidden, en niet rondneuzen in het huis'] }
      ],
      page: 66
    }
  ],
  sections: [
    { title: 'Familiebanden verbreken (alleen ter kennisname)', text: 'Het is een grote zonde waarop de vloek van Allah volgt (Muḥammad 47:22–23); de straf komt er al in dit leven door, het verhindert dat daden aanvaard worden en dat iemand het Paradijs binnengaat.', more: FYI_NL, page: 58 },
    { title: 'Het gebruik bij het onderhouden van banden', text: 'Koran en soenna bepalen niet hoe en hoeveel; daarvoor kijk je naar het gebruik dat de sharia erkent: wat mensen als band onderhouden zien, geldt als zodanig. Als gebruiken bedorven zijn, tellen zij niet.', more: '', page: 59 },
    { title: 'Goed zijn voor de buur', text: 'Voor hem wensen wat je voor jezelf wenst, hem geschenken geven en voedsel als hij dat nodig heeft, voor zijn gezin zorgen als hij weg is of overleden, en hem laten gebruiken wat jou niet schaadt.', more: '', page: 62 },
    { title: 'Vormen van de gast eren (alleen ter kennisname)', text: 'Hem zelf bedienen, vriendelijk met hem praten, en snel het beste eten voorzetten als dat kan, en anders van wat je hebt.', more: FYI_NL, page: 67 },
    { title: 'Niet rondneuzen in het huis', text: 'Ibn Masʿūd bezocht een zieke terwijl er een vrouw in huis was, en een man uit het gezelschap keek naar haar. Ibn Masʿūd zei tegen hem: als je oog was uitgestoken, was dat beter voor je geweest. Overgeleverd door al-Bukhārī in al-Adab al-Mufrad; authentiek volgens al-Albānī.', more: '', page: 71 },
    { title: 'Mag de gast zijn recht nemen als de gastheer weigert? (alleen ter kennisname)', text: 'Ibn ʿUthaymīn: hij mag nemen wat hij redelijkerwijs nodig heeft; dat is een overlevering van Aḥmad. De meeste geleerden: hij mag niets nemen zonder toestemming; zij zien gastvrijheid als aanbevolen en betrekken de hadith van ʿUqba op dorpen en woestijnbewoners. Mālik: op stedelingen rust geen gastvrijheid. Het boek zegt dat dit standpunt, gezien het gebruik, goed te volgen is.', more: FYI_NL, page: 72 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Familiebanden onderhouden', items: ['Goed zijn voor je naaste bloedverwanten en voor hen zorgen, ook als zij je kwaad doen.', 'Hun baat zoeken en schade van hen weren, in dit leven en het Hiernamaals.'], page: 56, origin: 'boek' },
    { kind: 'opsomming', title: 'Kwesties bij familiebanden', items: ['eerst de naasten', 'ook met een niet-moslim familielid', 'het erkende gebruik bepaalt hoe', 'wie de band herstelt als die verbroken wordt'], page: 59, origin: 'boek' },
    { kind: 'definitie', title: 'De gast die je verplicht eert', items: ['De reiziger die buiten zijn eigen woonplaats verblijft.', 'Niet iemand uit dezelfde plaats die bij zijn buren langsgaat.'], page: 66, origin: 'boek' },
    { kind: 'onderscheid', title: 'De duur van gastvrijheid', items: ['Eerste dag: de gave, met het beste wat je hebt.', 'Tweede en derde dag: wat er is.', 'Na drie dagen: liefdadigheid.'], page: 71, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Familiebanden onderhouden is goed zijn voor je verwanten, ook als zij je kwaad doen; ze verbreken is een grote zonde.',
    'Ook met een niet-moslim familielid onderhoud je de band; echt onderhouden is herstellen wat verbroken is.',
    'De buur heeft rechten, moslim of niet; hem kwaad doen is een grote zonde.',
    'De gast eren hoort bij het geloof; gastvrijheid duurt drie dagen.',
    'De gastheer heeft rechten op de gast: toestemming, niet tot last zijn en voor hem bidden.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wie behoren tot de zijlijnen van de familie?', options: ['broers, ooms en tantes', 'vaders en grootvaders', 'kinderen en kleinkinderen', 'de buren'], answer: 0, explain: 'Broers en zussen, ooms en tantes van vaders- en moederskant.', page: 56 },
    { type: 'tf', q: 'Je onderhoudt de familieband ook als het familielid geen moslim is.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals in de hadith van Asmāʾ: "Ja, onderhoud de band met je moeder."', page: 59 },
    { type: 'mc', q: 'Aan welke van twee buren geef je eerst een geschenk?', options: ['aan wie zijn deur het dichtst bij de jouwe heeft', 'aan de oudste', 'aan de rijkste', 'aan wie er het langst woont'], answer: 0, explain: '"Aan wie zijn deur het dichtst bij de jouwe heeft."', page: 64 },
    { type: 'mc', q: 'Hoeveel rechten heeft een verwante moslimbuur?', options: ['drie', 'twee', 'één', 'vier'], answer: 0, explain: 'Islam, nabuurschap en verwantschap.', page: 64 },
    { type: 'tf', q: 'De Profeet ﷺ at de hagedis niet omdat die verboden is.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij zei: nee, maar het komt niet voor in het land van mijn volk, dus ik heb er een afkeer van.', page: 67 },
    { type: 'mc', q: 'Hoe lang duurt gastvrijheid?', options: ['drie dagen', 'een dag en een nacht', 'een week', 'onbeperkt'], answer: 0, explain: 'Wat daarna komt is liefdadigheid.', page: 71 }
  ]),
  note: 'Oefeningen van het boek op p. 60, 65, 69 en 73. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tarbiyah', chapter: '17', unit: 5, ar, nl }
