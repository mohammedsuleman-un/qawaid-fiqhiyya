// Hoofdstukkaart bij التربية الإسلامية (١) الحقوق, eenheid 3: حقوق الوالدين والأولاد (lessen 9–12, boek p. 33–45).
// Het boek heeft zelf geen eenheden; deze indeling in zes thema's is van de samenvatter.
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De regels over de ouders (p. 35–36), de inleiding van p. 40 en
// delen van p. 44–45 zijn in het boek "alleen ter kennisname". Niet op de kaart: het woord van Wahb ibn
// al-Aswad tegen Marwān over mannelijke deugd (p. 34), omdat de naam nog gecontroleerd moet worden.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (١) الحقوق، سلسلة زاد العلمية',
  pages: '33–45',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'عبد الله بن مسعود', text: 'أي العمل أفضل؟ قال: الصلاة على ميقاتها، قلت: ثم أي؟ قال: ثم بر الوالدين', takhrij: 'رواه البخاري ومسلم', note: 'وفي رواية: أحب إلى الله.', pages: [33], nl: 'Welke daad is het beste? Hij zei: het gebed op zijn tijd. Ik vroeg: en daarna? Hij zei: daarna goed zijn voor de ouders', nlNote: 'In een andere versie: het meest geliefd bij Allah.' },
  { narrator: 'عبد الله بن عمرو', text: 'رضى الرب في رضى الوالد، وسخط الرب في سخط الوالد', takhrij: 'رواه الترمذي وصححه الألباني', note: '', pages: [34, 38], nl: 'De tevredenheid van de Heer ligt in de tevredenheid van de vader, en de woede van de Heer in de woede van de vader', nlNote: '' },
  { narrator: '', text: 'أحي والداك؟ قال: نعم، قال: ففيهما فجاهد', takhrij: 'رواه البخاري ومسلم', note: 'لرجل استأذنه في الجهاد؛ والمعنى: استفرغ جهدك في برهما.', pages: [34], nl: 'Leven je ouders nog? Hij zei: ja. Hij zei: span je dan voor hen in', nlNote: 'Tegen iemand die toestemming vroeg om te strijden; de betekenis: steek al je inspanning in goed zijn voor hen.' },
  { narrator: '', text: 'يأتي عليكم أويس بن عامر مع أمداد أهل اليمن من مراد ثم من قرن، كان به برص فبرأ منه إلا موضع درهم، له والدة هو بها بر، لو أقسم على الله لأبره، فإن استطعت أن يستغفر لك فافعل', takhrij: 'أخرجه مسلم', note: 'في أن البر من أسباب إجابة الدعاء.', pages: [35], nl: 'Uways ibn ʿĀmir zal bij jullie komen met de versterkingen uit Jemen, van Murād en dan van Qaran. Hij had lepra en genas ervan op een plek ter grootte van een dirham na. Hij heeft een moeder voor wie hij goed is; als hij bij Allah zou zweren, zou Allah zijn eed vervullen. Als je kunt, laat hem dan voor je om vergeving vragen', nlNote: 'Goed zijn voor je ouders is een reden dat smeekbeden verhoord worden.' },
  { narrator: '', text: 'الوالد أوسط أبواب الجنة', takhrij: 'رواه أحمد وابن ماجه وصححه الألباني', note: '', pages: [35], nl: 'De vader is de middelste poort van het Paradijs', nlNote: '' },
  { narrator: '', text: 'ألا أنبئكم بأكبر الكبائر: الإشراك بالله، وعقوق الوالدين، وقول الزور', takhrij: 'رواه البخاري ومسلم', note: '', pages: [36], nl: 'Zal ik jullie de grootste van de grote zonden vertellen? Iets met Allah gelijkstellen, de ouders kwaad doen, en valse uitspraken', nlNote: '' },
  { narrator: '', text: 'إن من أكبر الكبائر أن يلعن الرجل والديه، قيل: وكيف يلعن الرجل والديه؟ قال: يسب الرجل أبا الرجل فيسب أباه، ويسب أمه', takhrij: 'رواه البخاري ومسلم', note: 'من العقوق بالقول.', pages: [37], nl: 'Tot de grootste zonden behoort dat iemand zijn ouders vervloekt. Men vroeg: hoe vervloekt iemand zijn ouders? Hij zei: hij beledigt de vader van een ander, die dan zijn vader beledigt, en hij beledigt diens moeder', nlNote: 'Ouders kwaad doen met woorden.' },
  { narrator: '', text: 'رغم أنفه، ثم رغم أنفه، ثم رغم أنفه، قيل: من يا رسول الله؟ قال: من أدرك والديه عند الكبر أحدهما أو كليهما ثم لم يدخل الجنة', takhrij: 'أخرجه مسلم', note: '', pages: [38], nl: 'Moge hij vernederd worden, en nog eens, en nog eens. Men vroeg: wie, Boodschapper van Allah? Hij zei: wie een of beide ouders op hoge leeftijd meemaakt en toch het Paradijs niet binnengaat', nlNote: '' },
  { narrator: '', text: 'ثلاثة لا ينظر الله إليهم يوم القيامة ...', takhrij: 'رواه النسائي وصححه الألباني', note: 'وذكر منهم: العاق لوالديه.', pages: [38], nl: 'Naar drie mensen kijkt Allah op de Dag der Opstanding niet ...', nlNote: 'Een van hen: wie zijn ouders kwaad doet.' },
  { narrator: '', text: 'ما من ذنب أحرى أن يعجل الله لصاحبه العقوبة في الدنيا مع ما يدخر له في الآخرة من البغي وقطيعة الرحم', takhrij: 'رواه أحمد والترمذي وصححه الألباني', note: '', pages: [38], nl: 'Er is geen zonde die er meer voor in aanmerking komt dat Allah haar bestraffing al in dit leven brengt, naast wat Hij in het Hiernamaals bewaart, dan onrecht en het verbreken van familiebanden', nlNote: '' },
  { narrator: '', text: 'ثلاثة لا يقبل الله منهم صرفًا ولا عدلًا: عاق، ومنان، ومكذب بالقدر', takhrij: 'رواه ابن أبي عاصم وحسنه الألباني', note: '', pages: [38], nl: 'Van drie mensen aanvaardt Allah geen enkele daad, verplicht noch vrijwillig: wie zijn ouders kwaad doet, wie zijn gaven voortdurend aanrekent, en wie de voorbeschikking loochent', nlNote: '' },
  { narrator: '', text: 'والرجل راع على أهل بيته وهو مسؤول عنهم، والمرأة راعية على بيت بعلها وولده وهي مسؤولة عنهم', takhrij: 'متفق عليه', note: FYI, pages: [40], nl: 'De man is herder over zijn gezin en wordt over hen ondervraagd, en de vrouw is herderin over het huis van haar man en zijn kinderen en wordt over hen ondervraagd', nlNote: FYI_NL },
  { narrator: '', text: 'ما من مولود إلا يولد على الفطرة، فأبواه يهودانه وينصرانه ويشركانه', takhrij: 'أخرجه مسلم', note: FYI, pages: [40], nl: 'Elk kind wordt geboren op de natuurlijke aanleg; zijn ouders maken er een jood, christen of veelgodenaanbidder van', nlNote: FYI_NL },
  { narrator: '', text: 'تنكح المرأة لأربع: لمالها ولحسبها وجمالها ولدينها، فاظفر بذات الدين تربت يداك', takhrij: 'رواه البخاري ومسلم', note: 'في حسن اختيار الشريك.', pages: [41], nl: 'Met een vrouw wordt getrouwd om vier dingen: haar bezit, haar afkomst, haar schoonheid en haar godsdienst; kies dan de godsdienstige, anders zul je het berouwen', nlNote: 'Een goede partner kiezen.' },
  { narrator: '', text: 'لو أن أحدكم إذا أتى أهله قال: بسم الله، اللهم جنبني الشيطان وجنب الشيطان ما رزقتني، فإن كان بينهما ولد لم يضره الشيطان ولم يسلط عليه', takhrij: 'متفق عليه', note: '', pages: [41], nl: 'Als een van jullie, wanneer hij naar zijn vrouw gaat, zegt: in de naam van Allah, o Allah, houd de duivel van mij weg en houd de duivel weg van wat U ons schenkt; als er dan een kind komt, zal de duivel het niet schaden en geen macht over het krijgen', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'ما رأيت أحدًا كان أرحم بالعيال من رسول الله ﷺ', takhrij: 'أخرجه مسلم', note: '', pages: [42], nl: 'Ik heb niemand gezien die barmhartiger was voor zijn gezin dan de Boodschapper van Allah ﷺ', nlNote: '' },
  { narrator: 'عائشة', text: 'قدم ناس من الأعراب فقالوا: أتقبلون صبيانكم؟ قالوا: نعم، قالوا: لكنا والله ما نقبل، فقال: وأملك إن كان الله نزع منكم الرحمة', takhrij: 'أخرجه مسلم', note: '', pages: [42], nl: 'Er kwamen bedoeïenen die vroegen: kussen jullie je kinderen? Men zei: ja. Zij zeiden: maar wij, bij Allah, kussen ze niet. Hij zei: wat kan ik eraan doen als Allah de barmhartigheid uit jullie heeft weggenomen?', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'كنا نصلي مع رسول الله ﷺ العشاء، فإذا سجد وثب الحسن والحسين على ظهره، فإذا رفع رأسه أخذهما بيده أخذًا رفيقًا فيضعهما على الأرض ... حتى قضى صلاته أقعدهما على فخذيه', takhrij: 'رواه أحمد وحسنه الألباني', note: 'في مراعاة حق الولد في اللعب.', pages: [42], nl: 'Wij baden ʿishāʾ met de Boodschapper van Allah ﷺ. Als hij zich neerwierp, sprongen al-Ḥasan en al-Ḥusayn op zijn rug; als hij zijn hoofd ophief, pakte hij hen zachtjes vast en zette hen op de grond ... en toen hij zijn gebed beëindigd had, zette hij hen op zijn dijen', nlNote: 'Rekening houden met het recht van het kind om te spelen.' },
  { narrator: '', text: 'يا غلام، إني أعلمك كلمات: احفظ الله يحفظك، احفظ الله تجده تجاهك، إذا سألت فاسأل الله، وإذا استعنت فاستعن بالله، واعلم أن الأمة لو اجتمعت على أن ينفعوك بشيء لم ينفعوك إلا بشيء قد كتبه الله لك ... رفعت الأقلام وجفت الصحف', takhrij: 'رواه أحمد والترمذي وصححه الألباني', note: 'قاله لعبد الله بن عباس، في تعليم الولد العقيدة.', pages: [43], nl: 'Jongen, ik leer je enkele woorden: waak over Allah, dan waakt Hij over jou; waak over Allah, dan vind je Hem vóór je. Als je vraagt, vraag Allah, en als je hulp zoekt, zoek hulp bij Allah. Weet dat als de hele gemeenschap zich zou verenigen om je ergens mee te helpen, zij je alleen zou helpen met wat Allah al voor je heeft opgeschreven ... de pennen zijn opgeheven en de bladen zijn droog', nlNote: 'Gezegd tegen ʿAbdallāh ibn ʿAbbās; het kind de geloofsleer leren.' },
  { narrator: '', text: 'مروا أولادكم بالصلاة وهم أبناء سبع سنين، واضربوهم عليها وهم أبناء عشر، وفرقوا بينهم في المضاجع', takhrij: 'رواه أحمد وأبو داود وحسنه الألباني', note: '', pages: [43], nl: 'Draag jullie kinderen het gebed op als zij zeven jaar zijn, tik hen erop aan als zij tien zijn, en laat hen apart slapen', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'أخذ الحسن بن علي تمرة من تمر الصدقة فجعلها في فيه، فقال النبي ﷺ: كخ كخ، ارم بها، أما علمت أنا لا نأكل الصدقة', takhrij: 'رواه البخاري ومسلم', note: 'في تعليم الولد الحلال والحرام.', pages: [43], nl: 'Al-Ḥasan ibn ʿAlī nam een dadel van de liefdadigheidsdadels en stak hem in zijn mond. De Profeet ﷺ zei: kikh kikh, spuug hem uit; weet je niet dat wij geen liefdadigheid eten?', nlNote: 'Het kind leren wat toegestaan en verboden is.' },
  { narrator: '', text: 'يا غلام، سم الله، وكل بيمينك، وكل مما يليك', takhrij: 'رواه البخاري ومسلم', note: 'قاله لربيبه عمر بن أبي سلمة.', pages: [44], nl: 'Jongen, noem de naam van Allah, eet met je rechterhand en eet van wat vóór je ligt', nlNote: 'Gezegd tegen zijn stiefzoon ʿUmar ibn Abī Salama.' },
  { narrator: 'عبد الله بن عباس', text: 'كان النبي ﷺ يعوذ الحسن والحسين ويقول: إن أباكما كان يعوذ بها إسماعيل وإسحاق: أعوذ بكلمات الله التامة من كل شيطان وهامة، ومن كل عين لامة', takhrij: 'أخرجه البخاري', note: FYI, pages: [44], nl: 'De Profeet ﷺ zocht bescherming voor al-Ḥasan en al-Ḥusayn en zei: jullie vader (Ibrāhīm) zocht hiermee bescherming voor Ismāʿīl en Isḥāq: ik zoek bescherming in de volmaakte woorden van Allah tegen elke duivel en elk giftig dier, en tegen elk kwaad oog', nlNote: FYI_NL },
  { narrator: 'بريدة بن الحصيب', text: 'صدق الله: ﴿إنما أموالكم وأولادكم فتنة﴾، رأيت هذين يمشيان ويعثران في قميصيهما فلم أصبر حتى نزلت فحملتهما', takhrij: 'رواه أحمد والأربعة وصححه الألباني', note: 'لما أقبل الحسن والحسين وهو يخطب. ' + FYI, pages: [45], nl: 'Allah heeft de waarheid gesproken: "Jullie bezit en jullie kinderen zijn slechts een beproeving." Ik zag deze twee lopen en struikelen in hun hemden en kon me niet inhouden: ik kwam naar beneden en droeg hen', nlNote: 'Toen al-Ḥasan en al-Ḥusayn aankwamen terwijl hij preekte. ' + FYI_NL },
  { narrator: 'عبد الله بن عمر', text: 'إن من الشجر شجرة لا يسقط ورقها وهي مثل المسلم، حدثوني ما هي ... هي النخلة', takhrij: 'رواه البخاري ومسلم', note: 'قال عبد الله: فحدثت أبي فقال: لأن تكون قلتها أحب إلي من أن يكون لي كذا وكذا. ' + FYI, pages: [45], nl: 'Er is een boom waarvan de bladeren niet vallen en die lijkt op de moslim; vertel me welke het is ... het is de dadelpalm', nlNote: 'ʿAbdallāh vertelde het zijn vader, die zei: had jij het maar gezegd, dat was me liever dan dit en dat bezitten. ' + FYI_NL }
]

const TAKHRIJ_NL = {
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه مسلم': 'Muslim', 'أخرجه البخاري': 'al-Bukhārī',
  'رواه الترمذي وصححه الألباني': 'at-Tirmidhī; authentiek volgens al-Albānī',
  'رواه أحمد وابن ماجه وصححه الألباني': 'Aḥmad en Ibn Māja; authentiek volgens al-Albānī',
  'رواه النسائي وصححه الألباني': 'an-Nasāʾī; authentiek volgens al-Albānī',
  'رواه أحمد والترمذي وصححه الألباني': 'Aḥmad en at-Tirmidhī; authentiek volgens al-Albānī',
  'رواه ابن أبي عاصم وحسنه الألباني': 'Ibn Abī ʿĀṣim; goed (ḥasan) volgens al-Albānī',
  'رواه أحمد وحسنه الألباني': 'Aḥmad; goed (ḥasan) volgens al-Albānī',
  'رواه أحمد وأبو داود وحسنه الألباني': 'Aḥmad en Abū Dāwūd; goed (ḥasan) volgens al-Albānī',
  'رواه أحمد والأربعة وصححه الألباني': 'Aḥmad en de vier Sunan-werken; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'عبد الله بن مسعود': 'ʿAbdallāh ibn Masʿūd', 'عبد الله بن عمرو': 'ʿAbdallāh ibn ʿAmr', 'أنس بن مالك': 'Anas ibn Mālik', 'عائشة': 'ʿĀʾisha',
  'أبو هريرة': 'Abū Hurayra', 'عبد الله بن عباس': 'ʿAbdallāh ibn ʿAbbās', 'بريدة بن الحصيب': 'Burayda ibn al-Ḥuṣayb', 'عبد الله بن عمر': 'ʿAbdallāh ibn ʿUmar'
}

const PERSONS = [
  ['ibn-masud', 'text', [33], 'سأل النبي ﷺ: أي العمل أفضل؟', 'Vroeg de Profeet ﷺ welke daad het beste is.'],
  ['abdallah-ibn-amr', 'text', [34], 'روى «رضى الرب في رضى الوالد».', 'Overleverde "De tevredenheid van de Heer ligt in de tevredenheid van de vader".'],
  ['uways-al-qarani', 'text', [35], 'خير التابعين، أثنى عليه النبي ﷺ ببره بأمه.', 'De beste van de tābiʿūn; de Profeet ﷺ prees hem om zijn goedheid voor zijn moeder.'],
  ['ibn-umar', 'text', [40, 45], 'قال: أدب ابنك فإنك مسؤول عنه؛ وروى حديث النخلة.', 'Zei: voed je zoon op, want je wordt over hem ondervraagd; en overleverde de hadith over de dadelpalm.'],
  ['umar-ibn-al-khattab', 'text', [45], 'قال لابنه في حديث النخلة: لأن تكون قلتها أحب إلي. ' + FYI, 'Zei tegen zijn zoon bij de hadith van de dadelpalm: had jij het maar gezegd. ' + FYI_NL],
  ['anas-ibn-malik', 'text', [42], 'قال: ما رأيت أحدًا أرحم بالعيال من رسول الله ﷺ.', 'Zei dat hij niemand barmhartiger voor zijn gezin zag dan de Profeet ﷺ.'],
  ['aisha', 'text', [42], 'روت قول النبي ﷺ للأعراب في تقبيل الصبيان.', 'Overleverde wat de Profeet ﷺ tegen de bedoeïenen zei over kinderen kussen.'],
  ['abu-hurayra', 'text', [42, 43], 'روى لعب الحسن والحسين على ظهره ﷺ وقصة تمرة الصدقة.', 'Overleverde hoe al-Ḥasan en al-Ḥusayn op de rug van de Profeet ﷺ sprongen, en het verhaal van de liefdadigheidsdadel.'],
  ['al-hasan-ibn-ali', 'text', [42, 43, 44, 45], 'كان يثب على ظهر النبي ﷺ في السجود، وأخذ تمرة من الصدقة.', 'Sprong op de rug van de Profeet ﷺ in de neerwerping en nam een liefdadigheidsdadel.'],
  ['al-husayn-ibn-ali', 'text', [42, 44, 45], 'كان يثب مع أخيه على ظهر النبي ﷺ، وكان يعوذهما.', 'Sprong met zijn broer op de rug van de Profeet ﷺ, die bescherming voor hen zocht.'],
  ['ibn-abbas', 'text', [43, 44], 'علمه النبي ﷺ «احفظ الله يحفظك»، وروى تعويذ الحسن والحسين.', 'De Profeet ﷺ leerde hem "Waak over Allah, dan waakt Hij over jou"; hij overleverde de bescherming voor al-Ḥasan en al-Ḥusayn.'],
  ['umar-ibn-abi-salama', 'text', [44], 'ربيب النبي ﷺ، علمه آداب الأكل.', 'Stiefzoon van de Profeet ﷺ, die hem de etiquette van het eten leerde.'],
  ['burayda-ibn-al-husayb', 'text', [45], 'روى نزول النبي ﷺ عن المنبر لحمل الحسن والحسين. ' + FYI, 'Overleverde dat de Profeet ﷺ van de preekstoel kwam om al-Ḥasan en al-Ḥusayn te dragen. ' + FYI_NL],
  ['al-bukhari', 'takhrij', [33, 34, 36, 37, 40, 41, 43, 44, 45], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['at-tirmidhi', 'takhrij', [34, 38, 43], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [35, 38, 42, 43, 45], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['ibn-maja', 'takhrij', [35], 'أخرج «الوالد أوسط أبواب الجنة».', 'Nam "De vader is de middelste poort van het Paradijs" op.'],
  ['an-nasai', 'takhrij', [38], 'أخرج «ثلاثة لا ينظر الله إليهم».', 'Nam "Naar drie mensen kijkt Allah niet" op.'],
  ['ibn-abi-asim', 'takhrij', [38], 'أخرج «ثلاثة لا يقبل الله منهم صرفًا ولا عدلًا».', 'Nam "Van drie mensen aanvaardt Allah geen daad" op.'],
  ['abu-dawud', 'takhrij', [43], 'أخرج «مروا أولادكم بالصلاة».', 'Nam "Draag jullie kinderen het gebed op" op.'],
  ['al-bayhaqi', 'takhrij', [40], 'أخرج قول ابن عمر في شعب الإيمان. ' + FYI, 'Nam de uitspraak van Ibn ʿUmar op in Shuʿab al-Īmān. ' + FYI_NL],
  ['al-albani', 'takhrij', [34, 35, 38, 42, 43, 45], 'صحح أحاديث في الوحدة وحسنها.', 'Beoordeelde hadith in deze eenheid als authentiek of goed.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'حقوق الوالدين والأولاد',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'حق الوالدين ينحصر في برهما والإحسان إليهما وتجنب عقوقهما، والبر من أعظم الأعمال والعقوق من أكبر الكبائر؛ وللأولاد حقوق على الوالدين قبل وجودهم وبعده، من حسن اختيار الشريك إلى التسمية والرحمة والتعليم والتأديب والنفقة والحماية.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'موضوعات الدروس الأربعة كما في الكتاب.',
    root: { label: 'حقوق الوالدين والأولاد', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'حق الوالدين', sub: 'الدرس ٩', page: 33, children: ['البر والإحسان', 'فضل البر'] },
      { label: 'أحكام وعقوق', sub: 'الدرس ١٠', page: 35, children: ['تقديم حقهما', 'العقوق بالقول والفعل', 'خطر العقوق'] },
      { label: 'حق الأولاد', sub: 'الدرس ١١', page: 40, children: ['قبل وجود الولد', 'بعد ولادته'] },
      { label: 'التعليم والتأديب', sub: 'الدرس ١٢', page: 43, children: ['العقيدة والصلاة', 'الآداب', 'النفقة والحماية'] }
    ]
  },
  points: [
    { text: 'قرن الله حق الوالدين بحقه، وأمر بشكرهما بعد شكره.', page: 33 },
    { text: 'حقهما ينحصر في أمرين: برهما والإحسان إليهما، وتجنب عقوقهما والإساءة إليهما.', page: 33 },
    { text: 'بر الوالدين يجلب رضا الله، وهو من أخلاق الأنبياء، وأفضل من نوافل العبادات، ومن أسباب إجابة الدعاء ودخول الجنة.', page: 34 },
    { text: 'العقوق ما يتأذى به الوالدان من ولدهما من قول أو فعل، وهو حرام ومن أكبر الكبائر.', page: 36 },
    { text: 'الله يسأل الوالد عن ولده قبل أن يسأل الولد عن والده.', page: 40 },
    { text: 'حقوق الأولاد قسمان: قبل وجود الولد وبعده.', page: 41 },
    { text: 'من حق الولد تعليمه العقيدة السليمة والقرآن وفرائض الدين والآداب.', page: 43 },
    { text: 'يجب على الأب الإنفاق على ولده ذكرًا كان أو أنثى، بلا إسراف ولا تقتير.', page: 44 }
  ],
  terms: [
    { term: 'البر', translit: 'al-birr', meaning: 'الإحسان إلى الوالدين.', explanation: 'لا سيما في الكبر.', notes: [], page: 33 },
    { term: 'العقوق', translit: 'al-ʿuqūq', meaning: 'ما يتأذى به الوالدان من ولدهما من قول أو فعل.', explanation: 'حرام ومن أكبر الكبائر.', notes: [], page: 36 },
    { term: 'الفطرة', translit: 'al-fiṭra', meaning: 'ما يولد عليه كل مولود.', explanation: '«فأبواه يهودانه وينصرانه ويشركانه».', notes: [], page: 40 },
    { term: 'ذات الدين', translit: 'dhāt ad-dīn', meaning: 'المرأة المتدينة.', explanation: 'أمر النبي ﷺ بالظفر بها.', notes: [], page: 41 },
    { term: 'الإسراف والتقتير', translit: 'al-isrāf wa-t-taqtīr', meaning: 'الإسراف مجاوزة الحد في الإنفاق، والتقتير التضييق فيه.', explanation: 'ينفق على الولد بلا إسراف ولا تقتير.', notes: [], page: 44 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'فضل بر الوالدين',
      intro: 'كما عدده الكتاب.',
      nodes: [
        { label: 'جالب لرضا الله', page: 34 },
        { label: 'من أخلاق الأنبياء', page: 34 },
        { label: 'من محاسن الشريعة', page: 34 },
        { label: 'من المروءة', page: 34 },
        { label: 'أفضل من نوافل العبادات', page: 34 },
        { label: 'من أسباب النجاة', page: 34 },
        { label: 'من أسباب إجابة الدعاء', page: 35 },
        { label: 'من أعظم أسباب دخول الجنة', page: 35 }
      ]
    },
    {
      type: 'compare',
      title: 'أقسام العقوق',
      intro: 'كما في الكتاب.',
      columns: ['أمثلته'],
      rows: [
        { label: 'بالقول', cells: ['سبهما أو التسبب في سبهما، ورفع الصوت عليهما'] },
        { label: 'بالفعل', cells: ['حدة النظر إليهما، وتفضيل غيرهما عليهما، وعدم توقيرهما، وضربهما'] }
      ],
      page: 37
    },
    {
      type: 'compare',
      title: 'حقوق الأولاد',
      intro: 'قسمان كما في الكتاب.',
      columns: ['الحقوق'],
      rows: [
        { label: 'قبل وجود الولد', cells: ['حسن اختيار الشريك، والدعاء بالذرية الصالحة، والتسمية عند الجماع'] },
        { label: 'بعد ولادته', cells: ['الدعاء بصلاحه، وتسميته باسم حسن، ورحمته، وحفظ كرامته، ومراعاة حقه في اللعب، وتعليمه وتأديبه، والإنفاق عليه، وحمايته'] }
      ],
      page: 41
    }
  ],
  sections: [
    { title: 'خطر العقوق', text: 'سبب للخزي والعذاب، ويوجب سخط الله، ويحرم من نظر الله يوم القيامة ومن دخول الجنة، وهو من أعظم صور قطع الرحم، ويمنع قبول العمل.', more: '', page: 38 },
    { title: 'فقه هذا الأمر (للاطلاع فقط)', text: 'حق الوالدين مقدم على حق غيرهما من البشر، وحق الأم مقدم على حق الأب، والقيام بحقهما مقدم على نوافل العبادات، وتجب طاعتهما فيما فيه نفعهما ولا ضرر على الولد ولو كانا فاسقين أو كافرين ما لم يأمرا بمعصية، ويجب على الولد المستطيع الإنفاق عليهما عند حاجتهما.', more: FYI, page: 35 },
    { title: 'أخذ الوالد من مال ولده (للاطلاع فقط)', text: 'يجوز بشروط منها: ألا يكون فيه ضرر على الولد، وأن يكون لحاجة لا تكثرًا، وألا يأخذه ليعطيه لولد آخر.', more: FYI, page: 36 },
    { title: 'إهمال الأولاد', text: 'وصية الله للآباء بأولادهم سابقة على وصية الأولاد بآبائهم؛ ومن أهمل تعليم ولده فقد أساء غاية الإساءة، وأكثر الأولاد إنما جاء فسادهم من قبل الآباء.', more: '', page: 40 },
    { title: 'مقدمات في التربية (للاطلاع فقط)', text: 'الولد أمانة، ومسؤولية التربية على الوالدين أولًا، وهما أشد الناس تأثيرًا فيه.', more: FYI, page: 40 },
    { title: 'حماية الولد (للاطلاع فقط)', text: 'تحصينه بالرقية الشرعية، ودفع الأذى عنه، واصطحابه لأماكن الخير ومخالطة الصالحين.', more: FYI, page: 44 }
  ],
  keycards: [
    { kind: 'definitie', title: 'العقوق', items: ['ما يتأذى به الوالدان من ولدهما من قول أو فعل.'], page: 36, origin: 'boek' },
    { kind: 'bewijs', title: 'تحريم العقوق', items: ['﴿فلا تقل لهما أف ولا تنهرهما﴾ [الإسراء: ٢٣]', '«ألا أنبئكم بأكبر الكبائر: الإشراك بالله وعقوق الوالدين وقول الزور».'], page: 36, origin: 'boek' },
    { kind: 'voorwaarde', title: 'طاعة الوالدين', items: ['فيما فيه نفعهما ولا ضرر على الولد.', 'ما لم يأمرا بمعصية.'], page: 35, origin: 'boek' },
    { kind: 'opsomming', title: 'من حقوق الولد بعد ولادته', items: ['الدعاء بصلاحه', 'اسم حسن', 'الرحمة والرفق', 'حفظ كرامته', 'التعليم والتأديب', 'النفقة', 'الحماية'], page: 42, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'حق الوالدين: برهما وتجنب عقوقهما.',
    'البر من أعظم الأعمال، والعقوق من أكبر الكبائر.',
    'العقوق يكون بالقول وبالفعل.',
    'حقوق الأولاد تبدأ قبل وجودهم بحسن اختيار الشريك.',
    'من حق الولد الرحمة والتعليم والتأديب والنفقة والحماية.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'أي العمل جاء بعد الصلاة على ميقاتها في حديث ابن مسعود؟', options: ['بر الوالدين', 'الجهاد', 'الصدقة', 'الحج'], answer: 0, explain: 'رواه البخاري ومسلم.', page: 33 },
    { type: 'tf', q: 'تجب طاعة الوالدين ولو أمرا بمعصية.', options: ['صواب', 'خطأ'], answer: 1, explain: 'تجب طاعتهما ما لم يأمرا بمعصية.', page: 35 },
    { type: 'mc', q: 'كيف يكون الرجل سببًا في لعن والديه؟', options: ['يسب أبا الرجل فيسب أباه', 'يرفع صوته عليهما', 'يتركهما في الكبر', 'يفضل غيرهما'], answer: 0, explain: 'كما في الحديث.', page: 37 },
    { type: 'mc', q: 'ما الذي أمر النبي ﷺ بالظفر به عند اختيار الزوجة؟', options: ['ذات الدين', 'ذات المال', 'ذات الحسب', 'ذات الجمال'], answer: 0, explain: '«فاظفر بذات الدين تربت يداك».', page: 41 },
    { type: 'mc', q: 'في أي سن يؤمر الولد بالصلاة؟', options: ['سبع سنين', 'عشر سنين', 'خمس سنين', 'البلوغ'], answer: 0, explain: 'ويضرب عليها لعشر.', page: 43 },
    { type: 'tf', q: 'يجب على الأب الإنفاق على ولده ذكرًا كان أو أنثى.', options: ['صواب', 'خطأ'], answer: 0, explain: 'لا خلاف بين الفقهاء في ذلك.', page: 44 }
  ]),
  note: 'نشاط الكتاب في الصفحتين ٣٩ و٤٥. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'De rechten van ouders en kinderen',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Het recht van de ouders komt neer op goed voor hen zijn en hen geen kwaad doen; goedheid voor de ouders is een van de grootste daden, en hen kwaad doen een van de grootste zonden. Kinderen hebben rechten op hun ouders vóór en na hun geboorte: van een goede partner kiezen tot een goede naam, barmhartigheid, onderwijs, opvoeding, onderhoud en bescherming.',
  source: { ...source, label: 'At-Tarbiya al-Islāmiyya (1): de rechten, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen van de vier lessen zoals in het boek.',
    root: { label: 'De rechten van ouders en kinderen', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Het recht van de ouders', sub: 'les 9', page: 33, children: ['goedheid', 'de waarde van goedheid'] },
      { label: 'Regels en ouders kwaad doen', sub: 'les 10', page: 35, children: ['hun recht gaat voor', 'met woorden en daden', 'het gevaar ervan'] },
      { label: 'Het recht van de kinderen', sub: 'les 11', page: 40, children: ['vóór de geboorte', 'na de geboorte'] },
      { label: 'Onderwijs en opvoeding', sub: 'les 12', page: 43, children: ['geloofsleer en gebed', 'manieren', 'onderhoud en bescherming'] }
    ]
  },
  points: [
    { text: 'Allah noemt het recht van de ouders samen met Zijn eigen recht, en draagt op hen te danken na Hem.', page: 33 },
    { text: 'Hun recht komt neer op twee dingen: goed voor hen zijn, en hen geen kwaad doen.', page: 33 },
    { text: 'Goedheid voor de ouders brengt de tevredenheid van Allah, hoort bij het karakter van de profeten, is beter dan vrijwillige aanbidding en is een reden voor verhoring en voor het Paradijs.', page: 34 },
    { text: 'ʿUqūq is alles waarmee een kind zijn ouders pijn doet in woord of daad; het is verboden en een van de grootste zonden.', page: 36 },
    { text: 'Allah ondervraagt de vader over zijn kind vóórdat Hij het kind over zijn vader ondervraagt.', page: 40 },
    { text: 'De rechten van het kind zijn tweeërlei: vóór en na zijn geboorte.', page: 41 },
    { text: 'Tot de rechten van het kind behoort onderwijs in de juiste geloofsleer, de Koran, de plichten van de godsdienst en goede manieren.', page: 43 },
    { text: 'De vader moet zijn kind onderhouden, zoon of dochter, zonder verspilling en zonder krenterigheid.', page: 44 }
  ],
  terms: [
    { term: 'البر', translit: 'al-birr', meaning: 'Goedheid voor de ouders.', explanation: 'Vooral op hoge leeftijd.', notes: [], page: 33 },
    { term: 'العقوق', translit: 'al-ʿuqūq', meaning: 'Ouders kwaad doen: alles waarmee een kind zijn ouders pijn doet in woord of daad.', explanation: 'Verboden en een van de grootste zonden.', notes: [], page: 36 },
    { term: 'الفطرة', translit: 'al-fiṭra', meaning: 'De natuurlijke aanleg waarmee elk kind geboren wordt.', explanation: '"Zijn ouders maken er een jood, christen of veelgodenaanbidder van."', notes: [], page: 40 },
    { term: 'ذات الدين', translit: 'dhāt ad-dīn', meaning: 'De godsdienstige vrouw.', explanation: 'De Profeet ﷺ droeg op haar te kiezen.', notes: [], page: 41 },
    { term: 'الإسراف والتقتير', translit: 'al-isrāf wa-t-taqtīr', meaning: 'Verspilling en krenterigheid.', explanation: 'Je onderhoudt het kind zonder het een en zonder het ander.', notes: [], page: 44 }
  ],
  diagrams: [
    {
      type: 'cards',
      title: 'De waarde van goedheid voor de ouders',
      intro: 'Zoals het boek ze opsomt.',
      nodes: [
        { label: 'Brengt de tevredenheid van Allah', page: 34 },
        { label: 'Hoort bij het karakter van de profeten', page: 34 },
        { label: 'Een van de schoonheden van de sharia', page: 34 },
        { label: 'Hoort bij edel karakter', page: 34 },
        { label: 'Beter dan vrijwillige aanbidding', page: 34 },
        { label: 'Een reden voor redding', page: 34 },
        { label: 'Een reden voor verhoring van smeekbeden', page: 35 },
        { label: 'Een van de grootste redenen voor het Paradijs', page: 35 }
      ]
    },
    {
      type: 'compare',
      title: 'Soorten ʿuqūq',
      intro: 'Zoals in het boek.',
      columns: ['Voorbeelden'],
      rows: [
        { label: 'Met woorden', cells: ['hen beledigen of ervoor zorgen dat ze beledigd worden, en je stem tegen hen verheffen'] },
        { label: 'Met daden', cells: ['hen scherp aankijken, anderen boven hen stellen, hen niet respecteren, en hen slaan'] }
      ],
      page: 37
    },
    {
      type: 'compare',
      title: 'De rechten van het kind',
      intro: 'In twee delen, zoals in het boek.',
      columns: ['Rechten'],
      rows: [
        { label: 'Vóór de geboorte', cells: ['een goede partner kiezen, om goede nakomelingen bidden, en de naam van Allah noemen bij de gemeenschap'] },
        { label: 'Na de geboorte', cells: ['bidden dat het goed wordt, een goede naam, barmhartigheid, zijn waardigheid bewaren, ruimte voor spel, onderwijs en opvoeding, onderhoud en bescherming'] }
      ],
      page: 41
    }
  ],
  sections: [
    { title: 'Het gevaar van ʿuqūq', text: 'Het brengt schande en straf, wekt de woede van Allah, ontneemt de blik van Allah op de Dag der Opstanding en de toegang tot het Paradijs, is een van de ergste vormen van familiebanden verbreken en verhindert dat daden aanvaard worden.', more: '', page: 38 },
    { title: 'Regels over de ouders (alleen ter kennisname)', text: 'Het recht van de ouders gaat voor dat van andere mensen, en dat van de moeder voor dat van de vader. Hun recht vervullen gaat voor vrijwillige aanbidding. Je moet hen gehoorzamen in wat hun baat en jou niet schaadt, ook als zij zondig of ongelovig zijn, zolang zij niet tot een zonde opdragen. Een kind dat het kan, moet hen onderhouden als zij dat nodig hebben.', more: FYI_NL, page: 35 },
    { title: 'Als een vader van het geld van zijn kind neemt (alleen ter kennisname)', text: 'Dat mag onder voorwaarden, onder meer: het schaadt het kind niet, het is uit nood en niet om meer te vergaren, en hij neemt het niet om het aan een ander kind te geven.', more: FYI_NL, page: 36 },
    { title: 'Kinderen verwaarlozen', text: 'Allah gaf de vaders een opdracht over hun kinderen vóór Hij de kinderen een opdracht over hun vaders gaf. Wie het onderwijs van zijn kind verwaarloost, doet het zeer veel kwaad; de meeste kinderen raken op het verkeerde pad door hun vaders.', more: '', page: 40 },
    { title: 'Uitgangspunten van de opvoeding (alleen ter kennisname)', text: 'Het kind is een toevertrouwd goed; de verantwoordelijkheid voor de opvoeding ligt eerst bij de ouders, en zij hebben de meeste invloed op het kind.', more: FYI_NL, page: 40 },
    { title: 'Het kind beschermen (alleen ter kennisname)', text: 'Het kind beschermen met de voorgeschreven ruqya, kwaad van het weghouden, en het meenemen naar goede plaatsen en goede mensen.', more: FYI_NL, page: 44 }
  ],
  keycards: [
    { kind: 'definitie', title: 'ʿUqūq', items: ['Alles waarmee een kind zijn ouders pijn doet in woord of daad.'], page: 36, origin: 'boek' },
    { kind: 'bewijs', title: 'ʿUqūq is verboden', items: ['"Zeg niet \'oef\' tegen hen en snauw hen niet af" (al-Isrāʾ 17:23)', '"Zal ik jullie de grootste van de grote zonden vertellen? Iets met Allah gelijkstellen, de ouders kwaad doen, en valse uitspraken."'], page: 36, origin: 'boek' },
    { kind: 'voorwaarde', title: 'De ouders gehoorzamen', items: ['In wat hun baat en het kind niet schaadt.', 'Zolang zij niet tot een zonde opdragen.'], page: 35, origin: 'boek' },
    { kind: 'opsomming', title: 'Rechten van het kind na de geboorte', items: ['bidden dat het goed wordt', 'een goede naam', 'barmhartigheid en zachtheid', 'zijn waardigheid', 'onderwijs en opvoeding', 'onderhoud', 'bescherming'], page: 42, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Het recht van de ouders: goed voor hen zijn en hen geen kwaad doen.',
    'Goedheid voor de ouders is een van de grootste daden; hen kwaad doen een van de grootste zonden.',
    'ʿUqūq kan met woorden en met daden.',
    'De rechten van het kind beginnen al vóór zijn geboorte, bij het kiezen van een goede partner.',
    'Het kind heeft recht op barmhartigheid, onderwijs, opvoeding, onderhoud en bescherming.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welke daad komt in de hadith van Ibn Masʿūd na het gebed op zijn tijd?', options: ['goed zijn voor de ouders', 'strijden', 'liefdadigheid', 'de ḥajj'], answer: 0, explain: 'Overgeleverd door al-Bukhārī en Muslim.', page: 33 },
    { type: 'tf', q: 'Je moet je ouders gehoorzamen, ook als zij tot een zonde opdragen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Je gehoorzaamt hen zolang zij niet tot een zonde opdragen.', page: 35 },
    { type: 'mc', q: 'Hoe zorgt iemand ervoor dat zijn ouders vervloekt worden?', options: ['hij beledigt de vader van een ander, die dan zijn vader beledigt', 'hij verheft zijn stem tegen hen', 'hij laat hen op hoge leeftijd alleen', 'hij stelt anderen boven hen'], answer: 0, explain: 'Zoals in de hadith.', page: 37 },
    { type: 'mc', q: 'Wat droeg de Profeet ﷺ op te kiezen bij een huwelijk?', options: ['de godsdienstige vrouw', 'de rijke vrouw', 'de vrouw van afkomst', 'de mooie vrouw'], answer: 0, explain: '"Kies dan de godsdienstige, anders zul je het berouwen."', page: 41 },
    { type: 'mc', q: 'Op welke leeftijd draag je het kind het gebed op?', options: ['zeven jaar', 'tien jaar', 'vijf jaar', 'bij de puberteit'], answer: 0, explain: 'Met tien tik je hem erop aan.', page: 43 },
    { type: 'tf', q: 'De vader moet zijn kind onderhouden, zoon of dochter.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Daarover verschillen de fiqh-geleerden niet.', page: 44 }
  ]),
  note: 'Oefeningen van het boek op p. 39 en 45. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tarbiyah', chapter: '9', unit: 3, ar, nl }
