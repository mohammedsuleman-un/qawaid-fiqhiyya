// Hoofdstukkaart bij العقيدة (٤), eenheid 3: أشراط الساعة (lessen 10–15, boek p. 31–41).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De kaders op p. 32, 37 en 38 (de opmerking over tekenen,
// de Mahdī en de Dajjāl) zijn in het boek "alleen ter kennisname". De uitspraak van an-Nawawī over
// de rook verwijst naar een hadith die het boek niet citeert en is daarom weggelaten.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٤)، سلسلة زاد العلمية',
  pages: '31–41',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlAqeedah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'سهل بن سعد', text: 'بعثت أنا والساعة كهذه من هذه، أو: كهاتين، وقرن بين السبابة والوسطى', takhrij: 'متفق عليه', note: 'بعثة النبي ﷺ من الأشراط التي وقعت.', pages: [33], nl: 'Ik ben gezonden met het Uur zo dicht bij elkaar als deze twee – en hij hield wijsvinger en middelvinger tegen elkaar', nlNote: 'De zending van de Profeet ﷺ is een teken dat al is gebeurd.' },
  { narrator: 'عوف بن مالك', text: 'اعدد ستا بين يدي الساعة: موتي، ثم فتح بيت المقدس...', takhrij: 'رواه البخاري', note: 'وفتح بيت المقدس كان سنة ست عشرة من الهجرة في عهد عمر.', pages: [33], nl: 'Tel zes dingen vóór het Uur: mijn dood, daarna de verovering van Jeruzalem …', nlNote: 'Jeruzalem werd in het jaar 16 AH veroverd, onder ʿUmar.' },
  { narrator: 'أبو هريرة', text: 'لا تقوم الساعة حتى يقبض العلم، وتكثر الزلازل، ويتقارب الزمان، وتظهر الفتن، ويكثر الهرج -وهو القتل القتل- حتى يكثر فيكم المال فيفيض', takhrij: 'متفق عليه', note: 'وقد ظهرت الفتن منذ أواخر عصر الصحابة.', pages: [33], nl: 'Het Uur breekt niet aan voordat de kennis wordt weggenomen, aardbevingen toenemen, de tijd korter lijkt, beproevingen verschijnen en het doden toeneemt, en tot het bezit onder jullie zo groot is dat het overloopt', nlNote: 'De beproevingen begonnen al aan het eind van de tijd van de metgezellen.' },
  { narrator: 'أبو هريرة', text: 'لا تقوم الساعة حتى تأخذ أمتي بأخذ القرون قبلها، شبرا بشبر، وذراعا بذراع. فقيل: يا رسول الله، كفارس والروم؟ فقال: ومن الناس إلا أولئك', takhrij: 'رواه البخاري', note: 'اتباع سنن الأمم الماضية.', pages: [34], nl: 'Het Uur breekt niet aan voordat mijn gemeenschap de wegen van de generaties vóór haar volgt, span na span en el na el. Gevraagd werd: zoals de Perzen en de Romeinen? Hij zei: wie anders dan zij?', nlNote: 'Het navolgen van eerdere volken.' },
  { narrator: '', text: 'بين يدي الساعة يظهر الربا', takhrij: 'رواه الطبراني وصححه الألباني', note: '', pages: [34], nl: 'vóór het Uur zal woeker zich verspreiden', nlNote: '' },
  { narrator: 'ابن مسعود', text: 'بين يدي الساعة تسليم الخاصة...', takhrij: 'رواه أحمد وصححه الألباني', note: 'أن تكون التحية للمعرفة.', pages: [34], nl: 'vóór het Uur groet men alleen wie men kent …', nlNote: 'Dat men alleen bekenden groet.' },
  { narrator: 'ابن عمر', text: 'سيكون في آخر أمتي نساء كاسيات عاريات، على رؤوسهن كأسنمة البخت، العنوهن فإنهن ملعونات', takhrij: 'رواه الطبراني، وقال الألباني: سنده حسن', note: 'قال النووي: هذا الحديث من معجزات النبوة.', pages: [34], nl: 'aan het eind van mijn gemeenschap zullen er vrouwen zijn die gekleed en toch naakt zijn, met op hun hoofd iets als de bulten van Bactrische kamelen; vervloek hen, want zij zijn vervloekt', nlNote: 'an-Nawawī: deze hadith is een van de wonderen van het profeetschap.' },
  { narrator: 'أبو هريرة', text: 'لا تقوم الساعة حتى يمر الرجل بقبر الرجل فيقول: يا ليتني مكانه', takhrij: 'متفق عليه', note: 'تمني الموت من شدة البلاء.', pages: [35], nl: 'het Uur breekt niet aan voordat iemand langs het graf van een ander loopt en zegt: was ik maar in zijn plaats', nlNote: 'De dood wensen door zware beproeving.' },
  { narrator: '', text: 'لا تقوم الساعة حتى يبعث دجالون كذابون، قريبا من ثلاثين، كلهم يزعم أنه رسول الله', takhrij: 'متفق عليه', note: 'قال ابن حجر: المراد من قامت له شوكة وبدت له شبهة.', pages: [35], nl: 'het Uur breekt niet aan voordat er bedriegers en leugenaars opstaan, bijna dertig, die allemaal beweren dat ze de boodschapper van Allah zijn', nlNote: 'Ibn Ḥajar: bedoeld zijn zij die macht kregen en een schijnargument hadden.' },
  { narrator: '', text: 'إذا ضيعت الأمانة فانتظر الساعة. قال: كيف إضاعتها؟ قال: إذا وسد الأمر إلى غير أهله فانتظر الساعة', takhrij: 'رواه البخاري', note: '', pages: [35], nl: 'Als het vertrouwen verloren gaat, verwacht dan het Uur. Gevraagd werd: hoe gaat het verloren? Hij zei: als de zaak wordt toevertrouwd aan wie er niet geschikt voor is, verwacht dan het Uur', nlNote: '' },
  { narrator: 'أنس', text: 'إن من أشراط الساعة أن يرفع العلم، ويثبت الجهل...', takhrij: 'متفق عليه', note: '', pages: [35], nl: 'tot de tekenen van het Uur behoort dat de kennis wordt opgeheven en de onwetendheid vaste voet krijgt …', nlNote: '' },
  { narrator: '', text: 'لا تقوم الساعة حتى تعود أرض العرب مروجا وأنهارا', takhrij: 'رواه مسلم', note: '', pages: [35], nl: 'het Uur breekt niet aan voordat het land van de Arabieren weer weiden en rivieren wordt', nlNote: '' },
  { narrator: '', text: 'لا تقوم الساعة حتى تكثر الزلازل', takhrij: 'رواه البخاري', note: 'قال ابن حجر: المراد بكثرتها شمولها ودوامها.', pages: [36], nl: 'het Uur breekt niet aan voordat aardbevingen veel voorkomen', nlNote: 'Ibn Ḥajar: bedoeld is dat ze overal en voortdurend zijn.' },
  { narrator: 'عبد الله بن عمرو', text: 'لا تقوم الساعة حتى يأخذ الله شريطته من أهل الأرض، فيبقى فيها عجاجة لا يعرفون معروفا ولا ينكرون منكرا', takhrij: 'رواه أحمد بإسناد صحيح', note: 'شريطته: أهل الدين والخير؛ والعجاجة: الأراذل ومن لا خير فيه.', pages: [36], nl: 'het Uur breekt niet aan voordat Allah de besten van de aarde wegneemt; dan blijft er uitschot over dat het goede niet kent en het kwade niet afwijst', nlNote: 'De besten zijn de mensen van godsdienst en goedheid; het uitschot zijn de laagsten, in wie geen goed is.' },
  { narrator: '', text: 'إذا اقترب الزمان لم تكد رؤيا المسلم تكذب، وأصدقكم رؤيا أصدقكم حديثا', takhrij: 'متفق عليه', note: '', pages: [36], nl: 'als de tijd nadert, is de droom van een moslim bijna nooit onwaar; en wie van jullie het meest oprecht spreekt, heeft de meest ware dromen', nlNote: '' },
  { narrator: '', text: 'يوشك الفرات أن يحسر عن كنز من ذهب -وفي رواية: عن جبل من ذهب- فمن حضره فلا يأخذ منه شيئا', takhrij: 'رواه البخاري', note: 'ولمسلم: «فيقتتل عليه الناس، فيقتل من كل مائة تسعة وتسعون».', pages: [36], nl: 'binnenkort zal de Eufraat een schat van goud blootleggen – in een overlevering: een berg van goud; wie erbij is, neme er niets van', nlNote: 'Bij Muslim: "dan vechten de mensen erom, en van elke honderd worden er negenennegentig gedood".' },
  { narrator: 'ابن مسعود', text: 'لا تذهب، أو لا تنقضي الدنيا حتى يملك العرب رجل من أهل بيتي، يواطئ اسمه اسمي', takhrij: 'رواه أبو داود، وصححه الأرناؤوط لغيره', note: 'خروج المهدي. ' + FYI, pages: [37], nl: 'de wereld gaat niet voorbij voordat een man uit mijn huisgezin over de Arabieren regeert, wiens naam gelijk is aan mijn naam', nlNote: 'De komst van de Mahdī. ' + FYI_NL },
  { narrator: 'عمران بن حصين', text: 'ما بين خلق آدم إلى قيام الساعة أمر أكبر من الدجال', takhrij: 'رواه مسلم', note: FYI, pages: [37], nl: 'tussen de schepping van Adam en het aanbreken van het Uur is er niets groters dan de Dajjāl', nlNote: FYI_NL },
  { narrator: 'أبو هريرة', text: 'والذي نفسي بيده ليوشكن أن ينزل فيكم ابن مريم حكما مقسطا، فيكسر الصليب، ويقتل الخنزير، ويضع الجزية...', takhrij: 'متفق عليه', note: 'نزول عيسى عليه السلام.', pages: [39], nl: 'Bij Hem in Wiens hand mijn ziel is: binnenkort daalt de zoon van Maryam onder jullie neer als rechtvaardig rechter; hij breekt het kruis, doodt het varken en schaft de jizya af …', nlNote: 'De neerdaling van ʿĪsā (vrede zij met hem).' },
  { narrator: 'زينب بنت جحش', text: 'لا إله إلا الله، ويل للعرب من شر قد اقترب، فتح اليوم من ردم يأجوج ومأجوج مثل هذه، وحلق بإصبعه الإبهام والتي تليها', takhrij: 'متفق عليه', note: 'من رواية أم حبيبة عن زينب.', pages: [39], nl: 'Er is geen god dan Allah! Wee de Arabieren vanwege een kwaad dat nabij is gekomen: vandaag is er zoveel van de dam van Yaʾjūj en Maʾjūj geopend – en hij maakte een kring met duim en wijsvinger', nlNote: 'Overgeleverd door Umm Ḥabība van Zaynab.' },
  { narrator: 'أم سلمة', text: 'سيكون بعدي خسف بالمشرق، وخسف بالمغرب، وخسف في جزيرة العرب. قيل: يخسف بالأرض وفيهم الصالحون؟ قال: نعم، إذا أكثر أهلها الخبث', takhrij: 'رواه الطبراني', note: 'قال ابن حجر: يحتمل أن المراد قدر زائد على ما وجد.', pages: [39], nl: 'Na mij zal er een wegzinking in het oosten zijn, een in het westen en een op het Arabisch schiereiland. Gevraagd werd: zakt de aarde weg terwijl er vromen onder hen zijn? Hij zei: ja, als het kwaad onder de bewoners toeneemt', nlNote: 'Ibn Ḥajar: mogelijk is iets bedoeld wat groter is dan wat al gebeurd is.' },
  { narrator: 'أبو هريرة', text: 'لا تقوم الساعة حتى تطلع الشمس من مغربها، فإذا طلعت فرآها الناس آمنوا أجمعون، فذلك حين: ﴿لا ينفع نفسا إيمانها لم تكن آمنت من قبل﴾', takhrij: 'متفق عليه', note: '[الأنعام: ١٥٨].', pages: [40], nl: 'het Uur breekt niet aan voordat de zon in het westen opkomt; als ze opkomt en de mensen het zien, gaan ze allemaal geloven, en dat is de tijd dat "het geloof van een ziel haar niet baat als ze niet eerder geloofde"', nlNote: 'al-Anʿām 6:158.' }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه البخاري': 'al-Bukhārī',
  'رواه مسلم': 'Muslim',
  'رواه الطبراني وصححه الألباني': 'aṭ-Ṭabarānī; authentiek volgens al-Albānī',
  'رواه أحمد وصححه الألباني': 'Aḥmad; authentiek volgens al-Albānī',
  'رواه الطبراني، وقال الألباني: سنده حسن': 'aṭ-Ṭabarānī; al-Albānī: de keten is goed (ḥasan)',
  'رواه أحمد بإسناد صحيح': 'Aḥmad, met een authentieke keten',
  'رواه أبو داود، وصححه الأرناؤوط لغيره': 'Abū Dāwūd; al-Arnaʾūṭ: authentiek door ondersteunende overleveringen',
  'رواه الطبراني': 'aṭ-Ṭabarānī'
}
const NARRATOR_NL = { 'سهل بن سعد': 'Sahl ibn Saʿd', 'عوف بن مالك': 'ʿAwf ibn Mālik', 'أبو هريرة': 'Abū Hurayra', 'ابن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'ابن عمر': 'Ibn ʿUmar', 'أنس': 'Anas ibn Mālik', 'عبد الله بن عمرو': 'ʿAbd Allāh ibn ʿAmr', 'عمران بن حصين': 'ʿImrān ibn Ḥuṣayn', 'زينب بنت جحش': 'Zaynab bint Jaḥsh', 'أم سلمة': 'Umm Salama' }

const PERSONS = [
  ['an-nawawi', 'text', [32, 34], 'قال: ليس كل ما أخبر ﷺ بكونه من علامات الساعة محرما أو مذموما؛ وقال في حديث الكاسيات العاريات: من معجزات النبوة.', 'Zei: niet alles wat de Profeet ﷺ een teken van het Uur noemde, is verboden of afkeurenswaardig; en noemde de hadith over de "geklede en toch naakte" vrouwen een wonder van het profeetschap.'],
  ['sahl-ibn-sad', 'text', [33], 'روى حديث «بعثت أنا والساعة كهاتين».', 'Overleverde: "ik ben gezonden met het Uur zo dicht als deze twee".'],
  ['awf-ibn-malik', 'text', [33], 'روى حديث «اعدد ستا بين يدي الساعة».', 'Overleverde: "tel zes dingen vóór het Uur".'],
  ['umar-ibn-al-khattab', 'text', [33], 'فتح بيت المقدس في عهده سنة ست عشرة من الهجرة.', 'Onder zijn bestuur werd Jeruzalem veroverd, in het jaar 16 AH.'],
  ['abu-hurayra', 'text', [33, 34, 35, 39, 40], 'روى كثيرا من أحاديث الأشراط.', 'Overleverde veel hadith over de tekenen.'],
  ['ibn-masud', 'text', [34, 37], 'روى حديث «تسليم الخاصة» وحديث المهدي.', 'Overleverde de hadith over het groeten van bekenden en die over de Mahdī.'],
  ['ibn-umar', 'text', [34], 'روى حديث الكاسيات العاريات.', 'Overleverde de hadith over de "geklede en toch naakte" vrouwen.'],
  ['ibn-hajar-al-asqalani', 'text', [35, 36, 39], 'بين المراد بالدجالين الثلاثين، وبكثرة الزلازل، وبالخسوف الثلاثة.', 'Legde uit wat bedoeld is met de dertig bedriegers, met het toenemen van aardbevingen en met de drie wegzinkingen.'],
  ['anas-ibn-malik', 'text', [35], 'روى حديث رفع العلم وثبوت الجهل.', 'Overleverde de hadith over het opheffen van kennis.'],
  ['abdallah-ibn-amr', 'text', [36], 'روى حديث «يأخذ الله شريطته من أهل الأرض».', 'Overleverde: "Allah neemt de besten van de aarde weg".'],
  ['ibn-hajar-al-haytami', 'text', [37], 'قال: يتعين اعتقاد ما دلت عليه الأحاديث الصحيحة من وجود المهدي المنتظر.', 'Zei: men moet geloven wat de authentieke hadith zeggen over het bestaan van de verwachte Mahdī.'],
  ['fatima', 'text', [37], 'المهدي من ولدها.', 'De Mahdī is een van haar nakomelingen.'],
  ['imran-ibn-husayn', 'text', [37], 'روى: «ما بين خلق آدم إلى قيام الساعة أمر أكبر من الدجال».', 'Overleverde: "tussen de schepping van Adam en het Uur is er niets groters dan de Dajjāl".'],
  ['as-saffarini', 'text', [38], 'قال: نزول عيسى ثابت بالكتاب والسنة وإجماع الأمة.', 'Zei: de neerdaling van ʿĪsā staat vast door Koran, Sunna en consensus.'],
  ['ibn-kathir', 'text', [39], 'فسر ﴿وإنه لعلم للساعة﴾ بنزول عيسى قبل يوم القيامة.', 'Legde "en hij is een teken van het Uur" uit als de neerdaling van ʿĪsā vóór de Opstanding.'],
  ['umm-habiba', 'text', [39], 'روت حديث ردم يأجوج ومأجوج عن زينب بنت جحش.', 'Overleverde de hadith over de dam van Yaʾjūj en Maʾjūj van Zaynab bint Jaḥsh.'],
  ['zaynab-bint-jahsh', 'text', [39], 'دخل عليها النبي ﷺ فزعا يقول: «ويل للعرب من شر قد اقترب».', 'Bij haar kwam de Profeet ﷺ verschrikt binnen en zei: "wee de Arabieren vanwege een kwaad dat nabij is".'],
  ['umm-salama', 'text', [39], 'روت حديث الخسوف الثلاثة.', 'Overleverde de hadith over de drie wegzinkingen.'],
  ['al-bukhari', 'takhrij', [33, 34, 35, 36, 39, 40], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [33, 35, 36, 37, 39, 40], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['at-tabarani', 'takhrij', [34, 39], 'روى أحاديث الربا والكاسيات والخسوف.', 'Overleverde de hadith over woeker, de "geklede" vrouwen en de wegzinkingen.'],
  ['ahmad-ibn-hanbal', 'takhrij', [34, 36], 'روى حديثي «تسليم الخاصة» و«شريطته».', 'Overleverde de hadith over het groeten van bekenden en over het wegnemen van de besten.'],
  ['abu-dawud', 'takhrij', [37], 'روى حديث المهدي.', 'Overleverde de hadith over de Mahdī.'],
  ['al-arnaut', 'takhrij', [37], 'صحح حديث المهدي لغيره.', 'Noemde de hadith over de Mahdī authentiek door ondersteunende overleveringen.'],
  ['al-albani', 'takhrij', [34], 'صحح أو حسن أحاديث من الوحدة.', 'Verklaarde hadith van deze eenheid authentiek of goed.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'أشراط الساعة',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف أشراط الساعة ووجوب الإيمان بها، وأقسامها: الصغرى بأنواعها الثلاثة، والكبرى من المهدي إلى النار التي تحشر الناس، ثم ثمرات الإيمان بها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'أشراط الساعة', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'التعريف والحكم', sub: 'الدرس ١٠', page: 32, children: ['علامات القيامة', 'يجب الإيمان بها'] },
      { label: 'الصغرى التي وقعت', sub: 'الدرسان ١٠–١١', page: 33, children: ['البعثة', 'انشقاق القمر', 'الفتن', 'الربا'] },
      { label: 'وقعت مبادئها ولم تقع', sub: 'الدرسان ١١–١٢', page: 35, children: ['ضياع الأمانة', 'الزلازل', 'الفرات'] },
      { label: 'الكبرى', sub: 'الدرسان ١٣–١٤', page: 37, children: ['الدجال', 'عيسى', 'يأجوج ومأجوج', 'الشمس من مغربها'] },
      { label: 'الثمرات', sub: 'الدرس ١٥', page: 40, children: ['الإيمان باليوم الآخر', 'دلائل النبوة', 'الاستعداد'] }
    ]
  },
  points: [
    { text: 'أشراط الساعة: علامات القيامة التي تسبقها وتدل على قربها، والإيمان بها داخل في الإيمان باليوم الآخر.', page: 32 },
    { text: 'ليس كل ما كان من الأشراط محرمًا؛ فالعلامة قد تكون بالخير والشر والمباح.', page: 32 },
    { text: 'الأشراط صغرى وكبرى؛ والصغرى: ما وقع، وما وقعت مبادئه، وما لم يقع.', page: 32 },
    { text: 'الصغرى تتقدم الساعة بأزمان متطاولة، والكبرى أمور عظام غير معتادة قرب قيامها.', page: 33 },
    { text: 'من الصغرى التي وقعت: البعثة، وانشقاق القمر، وموت النبي ﷺ، وفتح بيت المقدس، وظهور الفتن.', page: 33 },
    { text: 'من الكبرى: المهدي، والدخان، والدجال، ونزول عيسى، ويأجوج ومأجوج، والخسوف، والدابة، وطلوع الشمس من مغربها.', page: 37 },
    { text: 'آخر الكبرى نار تحشر الناس، ثم النفخ في الصور.', page: 40 },
    { text: 'الإيمان بالأشراط يقوي الإيمان، ويثبت دلائل النبوة، ويفتح باب الأمل، ويحث على الاستعداد.', page: 40 }
  ],
  terms: [
    { term: 'الأشراط', translit: 'al-ashrāṭ', meaning: 'جمع شرط، والشرط: العلامة.', explanation: '', notes: [], page: 32 },
    { term: 'الساعة', translit: 'as-sāʿa', meaning: 'جزء من أجزاء الليل أو النهار، وتطلق على القيامة.', explanation: 'أي الوقت الذي يصعق فيه جميع الخلق.', notes: [], page: 32 },
    { term: 'أشراط الساعة', translit: 'ashrāṭ as-sāʿa', meaning: 'علامات القيامة التي تسبقها وتدل على قربها.', explanation: 'يجب الإيمان بها لأنها صادرة عن الصادق المصدوق.', notes: [], page: 32 },
    { term: 'الأشراط الصغرى', translit: 'al-ashrāṭ aṣ-ṣughrā', meaning: 'تتقدم الساعة بأزمان متطاولة، من النوع المعتاد غالبًا.', explanation: 'كقبض العلم وظهور الجهل والتطاول في البنيان.', notes: [], page: 33 },
    { term: 'الأشراط الكبرى', translit: 'al-ashrāṭ al-kubrā', meaning: 'الأمور العظام التي تظهر قرب قيام الساعة، غير معتادة الوقوع.', explanation: 'كظهور الدجال ونزول عيسى وطلوع الشمس من مغربها.', notes: [], page: 33 },
    { term: 'الهرج', translit: 'al-harj', meaning: 'القتل.', explanation: '«ويكثر الهرج -وهو القتل القتل-».', notes: [], page: 33 },
    { term: 'المهدي', translit: 'al-mahdī', meaning: 'رجل من أهل بيت النبي ﷺ من ولد فاطمة، اسمه محمد بن عبد الله.', explanation: 'يملأ الأرض عدلًا كما ملئت ظلمًا، ويصلي إمامًا بعيسى.', notes: ['للاطلاع فقط'], page: 37 },
    { term: 'المسيح الدجال', translit: 'al-masīḥ ad-dajjāl', meaning: 'رجل من بني آدم، أعظم فتنة بين خلق آدم وقيام الساعة.', explanation: 'ممسوح العين اليمنى، مكتوب بين عينيه كافر.', notes: ['للاطلاع فقط'], page: 37 },
    { term: 'النغف', translit: 'an-naghaf', meaning: 'دود يكون في أنوف الإبل والغنم.', explanation: 'يرسله الله على يأجوج ومأجوج فيموتون.', notes: [], page: 39 },
    { term: 'الدابة', translit: 'ad-dābba', meaning: 'دابة يخرجها الله من الأرض في آخر الزمان تكلم الناس.', explanation: '[النمل: ٨٢].', notes: [], page: 40 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'أقسام أشراط الساعة',
      intro: 'كما في مخطط الكتاب.',
      root: { label: 'أشراط الساعة', page: 32 },
      nodes: [
        { label: 'الصغرى', children: ['وقعت', 'وقعت مبادئها ولم تستحكم', 'لم تقع'], page: 32 },
        { label: 'الكبرى', children: ['المهدي، الدخان، الدجال', 'عيسى، يأجوج ومأجوج، الخسوف', 'الدابة، الشمس، النار'], page: 37 }
      ]
    },
    {
      type: 'compare',
      title: 'الصغرى والكبرى',
      intro: 'الفرق بين القسمين.',
      columns: ['الصغرى', 'الكبرى'],
      rows: [
        { label: 'الزمن', cells: ['تتقدم الساعة بأزمان متطاولة', 'تظهر قرب قيام الساعة'] },
        { label: 'النوع', cells: ['من المعتاد غالبًا', 'غير معتادة الوقوع'] },
        { label: 'أمثلة', cells: ['قبض العلم والتطاول في البنيان', 'الدجال وعيسى وطلوع الشمس من مغربها'] }
      ],
      page: 33
    },
    {
      type: 'cards',
      title: 'أنواع الصغرى',
      intro: 'ثلاثة أنواع مع أمثلة من الكتاب.',
      nodes: [
        { label: 'وقعت', sub: 'البعثة، انشقاق القمر، موت النبي ﷺ، فتح بيت المقدس، الفتن، اتباع سنن الأمم، الربا، الكاسيات العاريات', page: 33 },
        { label: 'وقعت مبادئها ولم تستحكم', sub: 'تمني الموت، الدجالون، ضياع الأمانة، قبض العلم، عود أرض العرب مروجًا', page: 35 },
        { label: 'لم تقع', sub: 'كثرة الزلازل، ذهاب الصالحين، صدق رؤيا المؤمن، انحسار الفرات عن جبل من ذهب', page: 36 }
      ]
    },
    {
      type: 'steps',
      title: 'الأشراط الكبرى',
      intro: 'كما ذكرها الكتاب، وآخرها النار.',
      nodes: [
        { label: 'خروج المهدي (للاطلاع فقط)', page: 37 },
        { label: 'الدخان [الدخان: ١٠–١٢]', page: 37 },
        { label: 'المسيح الدجال (للاطلاع فقط)', page: 37 },
        { label: 'نزول عيسى بن مريم', page: 38 },
        { label: 'خروج يأجوج ومأجوج', page: 39 },
        { label: 'ثلاثة خسوف', page: 39 },
        { label: 'خروج الدابة', page: 39 },
        { label: 'طلوع الشمس من مغربها', page: 40 },
        { label: 'النار التي تحشر الناس', page: 40 }
      ]
    },
    {
      type: 'cards',
      title: 'ثمرات الإيمان بأشراط الساعة',
      intro: 'سبع ثمرات كما في الدرس الخامس عشر.',
      nodes: [
        { label: 'تحقيق الإيمان باليوم الآخر وبالغيب', page: 40 },
        { label: 'وقوعها يثبت الإيمان ويزيده', page: 40 },
        { label: 'إشباع الرغبة الفطرية في معرفة الغيب', page: 40 },
        { label: 'من أهم دلائل النبوة', page: 41 },
        { label: 'تعلم التعامل الصحيح مع الأحداث المقبلة', page: 41 },
        { label: 'فتح باب الأمل لأهل الإيمان', page: 41 },
        { label: 'الحث على الطاعة والاستعداد للحساب', page: 41 }
      ]
    }
  ],
  sections: [
    { title: 'العلامة لا تعني التحريم (للاطلاع فقط)', text: 'قال النووي: «ليس كل ما أخبر ﷺ بكونه من علامات الساعة يكون محرمًا أو مذمومًا، فإن تطاول الرعاء في البنيان، وفشو المال... ليس بحرام بلا شك، وإنما هذه علامات».', more: FYI, page: 32 },
    { title: 'صفات المهدي (للاطلاع فقط)', text: 'من أهل بيت النبي ﷺ من ولد فاطمة، واسمه محمد بن عبد الله، أجلى الجبهة أقنى الأنف، يصلحه الله في ليلة، يملأ الأرض عدلًا كما ملئت ظلمًا، ويصلي إمامًا بعيسى.', more: FYI, page: 37 },
    { title: 'فتنة الدجال (للاطلاع فقط)', text: 'يخرج في حال ضعف من الدين من جهة المشرق من خراسان، ولا يترك بلدًا إلا دخله إلا مكة والمدينة، ويمكث أربعين يومًا: يوم كسنة ويوم كشهر ويوم كجمعة وسائر أيامه كأيام الناس، ثم ينزل عيسى فيقتله.', more: 'معه جنة ونار، وجنته نار وناره جنة. ' + FYI, page: 38 },
    { title: 'نزول عيسى بالإجماع', text: 'قال السفاريني: «نزول المسيح عيسى بن مريم ثابت بالكتاب والسنة وإجماع الأمة... وقد انعقد الإجماع على أنه ينزل ويحكم بهذه الشريعة المحمدية».', more: 'وقال ابن كثير في ﴿وإنه لعلم للساعة﴾: المراد نزوله قبل يوم القيامة.', page: 38 },
    { title: 'نهاية يأجوج ومأجوج', text: 'يفسدون في الأرض، فيوحي الله إلى عيسى أن ينحاز بالمؤمنين إلى الطور، ثم يرسل الله عليهم النغف فيأخذ بأعناقهم فيموتون، بدعاء عيسى ومن معه.', more: '', page: 39 },
    { title: 'الدابة', text: 'يجب الإيمان بأن الله سيخرج للناس في آخر الزمان دابة من الأرض تكلمهم، فيكون تكليمها آية على أنهم مستحقون للوعيد بتكذيبهم آيات الله.', more: '', page: 40 }
  ],
  keycards: [
    { kind: 'definitie', title: 'أشراط الساعة', items: ['علامات القيامة التي تسبقها وتدل على قربها.'], page: 32, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع الصغرى', items: ['وقعت', 'وقعت مبادئها', 'لم تقع'], page: 32, origin: 'boek' },
    { kind: 'regel', title: 'العلامة ليست حكمًا', items: ['كون الشيء من الأشراط لا يعني أنه محرم أو مذموم.'], page: 32, origin: 'boek' },
    { kind: 'opsomming', title: 'آخر الكبرى', items: ['النار التي تحشر الناس', 'ثم النفخ في الصور'], page: 40, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'أشراط الساعة: علاماتها التي تسبقها وتدل على قربها.',
    'الصغرى ثلاثة أنواع: وقعت، وقعت مبادئها، لم تقع.',
    'الصغرى تتقدم بأزمان طويلة، والكبرى قرب قيام الساعة.',
    'الكبرى: المهدي، الدخان، الدجال، عيسى، يأجوج ومأجوج، الخسوف، الدابة، الشمس، النار.',
    'نزول عيسى ثابت بالكتاب والسنة والإجماع.',
    'الثمرات: تقوية الإيمان، دلائل النبوة، الأمل، الاستعداد.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى «الشرط» لغة؟', options: ['العلامة', 'القيامة', 'الساعة', 'الفتنة'], answer: 0, explain: 'الأشراط جمع شرط، وهو العلامة.', page: 32 },
    { type: 'tf', q: 'كل ما كان من أشراط الساعة فهو محرم.', options: ['صواب', 'خطأ'], answer: 1, explain: 'العلامة تكون بالخير والشر والمباح، كما قال النووي.', page: 32 },
    { type: 'mc', q: 'من أي نوع بعثة النبي ﷺ؟', options: ['صغرى وقعت', 'صغرى لم تقع', 'كبرى', 'وقعت مبادئها'], answer: 0, explain: '«بعثت أنا والساعة كهاتين».', page: 33 },
    { type: 'mc', q: 'ما نوع انحسار الفرات عن جبل من ذهب؟', options: ['صغرى لم تقع', 'صغرى وقعت', 'كبرى', 'وقعت مبادئها'], answer: 0, explain: 'كما في الدرس الثاني عشر.', page: 36 },
    { type: 'mc', q: 'كيف تكون إضاعة الأمانة؟', options: ['إذا وسد الأمر إلى غير أهله', 'إذا كثر المال', 'إذا كثرت الزلازل', 'إذا ظهر الربا'], answer: 0, explain: 'رواه البخاري.', page: 35 },
    { type: 'mc', q: 'ما آخر علامات الساعة الكبرى؟', options: ['النار التي تحشر الناس', 'طلوع الشمس من مغربها', 'خروج الدابة', 'نزول عيسى'], answer: 0, explain: 'ثم لا يبقى إلا النفخ في الصور.', page: 40 },
    { type: 'tf', q: 'نزول عيسى ثابت بالكتاب والسنة والإجماع.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما نقل السفاريني.', page: 38 },
    { type: 'mc', q: 'متى لا ينفع نفسًا إيمانها لم تكن آمنت من قبل؟', options: ['إذا طلعت الشمس من مغربها', 'إذا خرج الدجال', 'إذا نزل عيسى', 'إذا ظهر المهدي'], answer: 0, explain: '[الأنعام: ١٥٨].', page: 40 }
  ]),
  note: 'نشاط الكتاب في صفحة ٤١. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'De tekenen van het Uur',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Wat de tekenen van het Uur zijn en dat geloof erin verplicht is, de indeling in kleine tekenen (in drie soorten) en grote tekenen, van de Mahdī tot het vuur dat de mensen bijeendrijft, en de vruchten van geloof in de tekenen.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (4), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De tekenen van het Uur', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Definitie en oordeel', sub: 'les 10', page: 32, children: ['tekenen van de Opstanding', 'geloof erin is verplicht'] },
      { label: 'Kleine tekenen die al gebeurd zijn', sub: 'les 10–11', page: 33, children: ['de zending', 'de maan gespleten', 'beproevingen', 'woeker'] },
      { label: 'Begonnen of nog niet gebeurd', sub: 'les 11–12', page: 35, children: ['verloren vertrouwen', 'aardbevingen', 'de Eufraat'] },
      { label: 'Grote tekenen', sub: 'les 13–14', page: 37, children: ['de Dajjāl', 'ʿĪsā', 'Yaʾjūj en Maʾjūj', 'de zon uit het westen'] },
      { label: 'Vruchten', sub: 'les 15', page: 40, children: ['geloof in de Laatste Dag', 'bewijs van profeetschap', 'voorbereiding'] }
    ]
  },
  points: [
    { text: 'De tekenen van het Uur zijn de tekenen die aan de Opstanding voorafgaan en laten zien dat ze nabij is; geloof erin hoort bij geloof in de Laatste Dag.', page: 32 },
    { text: 'Niet alles wat een teken is, is verboden: een teken kan goed, slecht of toegestaan zijn.', page: 32 },
    { text: 'Er zijn kleine en grote tekenen; de kleine zijn al gebeurd, begonnen of nog niet gebeurd.', page: 32 },
    { text: 'Kleine tekenen gaan het Uur lang vooraf; grote tekenen zijn ongewone, geweldige gebeurtenissen vlak ervoor.', page: 33 },
    { text: 'Kleine tekenen die al gebeurd zijn: de zending, de gespleten maan, de dood van de Profeet ﷺ, de verovering van Jeruzalem en de beproevingen.', page: 33 },
    { text: 'Grote tekenen: de Mahdī, de rook, de Dajjāl, de neerdaling van ʿĪsā, Yaʾjūj en Maʾjūj, de wegzinkingen, het dier, en de zon die in het westen opkomt.', page: 37 },
    { text: 'Het laatste grote teken is een vuur dat de mensen bijeendrijft; daarna volgt het blazen op de hoorn.', page: 40 },
    { text: 'Geloof in de tekenen versterkt het geloof, bevestigt het profeetschap, geeft hoop en spoort aan tot voorbereiding.', page: 40 }
  ],
  terms: [
    { term: 'الأشراط', translit: 'al-ashrāṭ', meaning: 'Meervoud van sharṭ: teken.', explanation: '', notes: [], page: 32 },
    { term: 'الساعة', translit: 'as-sāʿa', meaning: 'Een deel van de nacht of de dag; ook: de Opstanding.', explanation: 'Het moment waarop alle schepselen neervallen.', notes: [], page: 32 },
    { term: 'أشراط الساعة', translit: 'ashrāṭ as-sāʿa', meaning: 'De tekenen die aan de Opstanding voorafgaan en laten zien dat ze nabij is.', explanation: 'Geloof erin is verplicht, omdat ze komen van de waarachtige Profeet ﷺ.', notes: [], page: 32 },
    { term: 'الأشراط الصغرى', translit: 'al-ashrāṭ aṣ-ṣughrā', meaning: 'Kleine tekenen: gaan het Uur lang vooraf, meestal gewone zaken.', explanation: 'Zoals het verdwijnen van kennis en het wedijveren in hoge gebouwen.', notes: [], page: 33 },
    { term: 'الأشراط الكبرى', translit: 'al-ashrāṭ al-kubrā', meaning: 'Grote tekenen: geweldige, ongewone gebeurtenissen vlak voor het Uur.', explanation: 'Zoals de Dajjāl, de neerdaling van ʿĪsā en de zon die in het westen opkomt.', notes: [], page: 33 },
    { term: 'الهرج', translit: 'al-harj', meaning: 'Het doden.', explanation: '"En het harj neemt toe – dat is doden, doden."', notes: [], page: 33 },
    { term: 'المهدي', translit: 'al-mahdī', meaning: 'Een man uit het huisgezin van de Profeet ﷺ, nakomeling van Fāṭima, met de naam Muḥammad ibn ʿAbd Allāh.', explanation: 'Hij vult de aarde met rechtvaardigheid zoals ze vol onrecht was, en gaat ʿĪsā voor in het gebed.', notes: ['alleen ter kennisname'], page: 37 },
    { term: 'المسيح الدجال', translit: 'al-masīḥ ad-dajjāl', meaning: 'Een mens, de grootste beproeving tussen de schepping van Adam en het Uur.', explanation: 'Blind aan het rechteroog; tussen zijn ogen staat "ongelovige" geschreven.', notes: ['alleen ter kennisname'], page: 37 },
    { term: 'النغف', translit: 'an-naghaf', meaning: 'Wormen in de neus van kamelen en schapen.', explanation: 'Allah stuurt ze op Yaʾjūj en Maʾjūj, die er dan aan sterven.', notes: [], page: 39 },
    { term: 'الدابة', translit: 'ad-dābba', meaning: 'Het dier dat Allah aan het eind der tijden uit de aarde laat komen en dat tot de mensen spreekt.', explanation: 'an-Naml 27:82.', notes: [], page: 40 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'Soorten tekenen',
      intro: 'Zoals in het schema van het boek.',
      root: { label: 'De tekenen van het Uur', page: 32 },
      nodes: [
        { label: 'Klein', children: ['al gebeurd', 'begonnen maar niet voltooid', 'nog niet gebeurd'], page: 32 },
        { label: 'Groot', children: ['de Mahdī, de rook, de Dajjāl', 'ʿĪsā, Yaʾjūj en Maʾjūj, de wegzinkingen', 'het dier, de zon, het vuur'], page: 37 }
      ]
    },
    {
      type: 'compare',
      title: 'Klein en groot',
      intro: 'Het verschil tussen de twee soorten.',
      columns: ['Klein', 'Groot'],
      rows: [
        { label: 'Tijd', cells: ['lang vóór het Uur', 'vlak voor het Uur'] },
        { label: 'Aard', cells: ['meestal gewone zaken', 'ongewoon'] },
        { label: 'Voorbeelden', cells: ['kennis verdwijnt, hoge gebouwen', 'de Dajjāl, ʿĪsā, de zon uit het westen'] }
      ],
      page: 33
    },
    {
      type: 'cards',
      title: 'Soorten kleine tekenen',
      intro: 'Drie soorten, met voorbeelden uit het boek.',
      nodes: [
        { label: 'Al gebeurd', sub: 'de zending, de gespleten maan, de dood van de Profeet ﷺ, Jeruzalem, beproevingen, eerdere volken navolgen, woeker, "geklede en toch naakte" vrouwen', page: 33 },
        { label: 'Begonnen maar niet voltooid', sub: 'de dood wensen, valse profeten, verloren vertrouwen, kennis verdwijnt, Arabië weer groen', page: 35 },
        { label: 'Nog niet gebeurd', sub: 'veel aardbevingen, de vromen verdwijnen, ware dromen, de Eufraat legt een berg goud bloot', page: 36 }
      ]
    },
    {
      type: 'steps',
      title: 'De grote tekenen',
      intro: 'Zoals het boek ze noemt; het laatste is het vuur.',
      nodes: [
        { label: 'De komst van de Mahdī (alleen ter kennisname)', page: 37 },
        { label: 'De rook (ad-Dukhān 44:10–12)', page: 37 },
        { label: 'De Dajjāl (alleen ter kennisname)', page: 37 },
        { label: 'De neerdaling van ʿĪsā zoon van Maryam', page: 38 },
        { label: 'Yaʾjūj en Maʾjūj', page: 39 },
        { label: 'Drie wegzinkingen', page: 39 },
        { label: 'Het dier', page: 39 },
        { label: 'De zon komt op in het westen', page: 40 },
        { label: 'Het vuur dat de mensen bijeendrijft', page: 40 }
      ]
    },
    {
      type: 'cards',
      title: 'Vruchten van geloof in de tekenen',
      intro: 'Zeven vruchten, zoals in les 15.',
      nodes: [
        { label: 'Geloof in de Laatste Dag en het verborgene', page: 40 },
        { label: 'Hun uitkomen versterkt het geloof', page: 40 },
        { label: 'Het aangeboren verlangen naar het verborgene wordt gestild', page: 40 },
        { label: 'Een belangrijk bewijs van het profeetschap', page: 41 },
        { label: 'Leren hoe je met toekomstige gebeurtenissen omgaat', page: 41 },
        { label: 'Hoop voor de gelovigen', page: 41 },
        { label: 'Aansporing tot gehoorzaamheid en voorbereiding', page: 41 }
      ]
    }
  ],
  sections: [
    { title: 'Een teken is geen verbod (alleen ter kennisname)', text: 'an-Nawawī: "Niet alles wat de Profeet ﷺ een teken van het Uur noemde, is verboden of afkeurenswaardig. Dat herders wedijveren in gebouwen of dat bezit zich verspreidt, is zonder twijfel niet verboden; het zijn alleen tekenen."', more: FYI_NL, page: 32 },
    { title: 'Kenmerken van de Mahdī (alleen ter kennisname)', text: 'Uit het huisgezin van de Profeet ﷺ, nakomeling van Fāṭima, met de naam Muḥammad ibn ʿAbd Allāh; een hoog voorhoofd en een gebogen neus; Allah maakt hem in één nacht geschikt; hij vult de aarde met rechtvaardigheid en gaat ʿĪsā voor in het gebed.', more: FYI_NL, page: 37 },
    { title: 'De beproeving van de Dajjāl (alleen ter kennisname)', text: 'Hij komt als de godsdienst zwak is, uit het oosten, uit Khurāsān. Hij gaat elk land binnen behalve Mekka en Medina, en blijft veertig dagen: een dag als een jaar, een dag als een maand, een dag als een week, en de rest als gewone dagen. Daarna daalt ʿĪsā neer en doodt hem.', more: 'Hij heeft een paradijs en een vuur bij zich; zijn paradijs is vuur en zijn vuur is paradijs. ' + FYI_NL, page: 38 },
    { title: 'De neerdaling van ʿĪsā staat vast', text: 'as-Saffārīnī: "De neerdaling van de Messias ʿĪsā zoon van Maryam staat vast door de Koran, de Sunna en de consensus van de umma … er is consensus dat hij neerdaalt en volgens deze sharīʿa van Muḥammad oordeelt."', more: 'Ibn Kathīr over "en hij is een teken van het Uur": bedoeld is zijn neerdaling vóór de Opstanding.', page: 38 },
    { title: 'Het einde van Yaʾjūj en Maʾjūj', text: 'Zij richten verderf aan op aarde; Allah laat ʿĪsā met de gelovigen naar de berg aṭ-Ṭūr gaan. Op het smeekgebed van ʿĪsā en de zijnen stuurt Allah wormen op hen, die hen in de nek grijpen, en ze sterven.', more: '', page: 39 },
    { title: 'Het dier', text: 'Men moet geloven dat Allah aan het eind der tijden een dier uit de aarde laat komen dat tot de mensen spreekt; dat spreken is een teken dat zij de dreiging verdiend hebben door Allahs tekenen te loochenen.', more: '', page: 40 }
  ],
  keycards: [
    { kind: 'definitie', title: 'De tekenen van het Uur', items: ['De tekenen die aan de Opstanding voorafgaan en laten zien dat ze nabij is.'], page: 32, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten kleine tekenen', items: ['al gebeurd', 'begonnen', 'nog niet gebeurd'], page: 32, origin: 'boek' },
    { kind: 'regel', title: 'Een teken is geen oordeel', items: ['Dat iets een teken van het Uur is, betekent niet dat het verboden of afkeurenswaardig is.'], page: 32, origin: 'boek' },
    { kind: 'opsomming', title: 'Het laatste grote teken', items: ['het vuur dat de mensen bijeendrijft', 'daarna het blazen op de hoorn'], page: 40, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De tekenen van het Uur gaan eraan vooraf en laten zien dat het nabij is.',
    'Kleine tekenen: al gebeurd, begonnen, nog niet gebeurd.',
    'Kleine tekenen lang vóór het Uur, grote tekenen vlak ervoor.',
    'Groot: de Mahdī, de rook, de Dajjāl, ʿĪsā, Yaʾjūj en Maʾjūj, de wegzinkingen, het dier, de zon, het vuur.',
    'De neerdaling van ʿĪsā staat vast door Koran, Sunna en consensus.',
    'Vruchten: sterker geloof, bewijs van profeetschap, hoop, voorbereiding.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent sharṭ in de taal?', options: ['teken', 'de Opstanding', 'het Uur', 'beproeving'], answer: 0, explain: 'Ashrāṭ is het meervoud van sharṭ: teken.', page: 32 },
    { type: 'tf', q: 'Alles wat een teken van het Uur is, is verboden.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Een teken kan goed, slecht of toegestaan zijn, zoals an-Nawawī zei.', page: 32 },
    { type: 'mc', q: 'Wat voor teken is de zending van de Profeet ﷺ?', options: ['klein, al gebeurd', 'klein, nog niet gebeurd', 'groot', 'begonnen'], answer: 0, explain: '"Ik ben gezonden met het Uur zo dicht als deze twee."', page: 33 },
    { type: 'mc', q: 'Wat voor teken is de Eufraat die een berg goud blootlegt?', options: ['klein, nog niet gebeurd', 'klein, al gebeurd', 'groot', 'begonnen'], answer: 0, explain: 'Zoals in les 12.', page: 36 },
    { type: 'mc', q: 'Hoe gaat het vertrouwen verloren?', options: ['als de zaak wordt toevertrouwd aan wie er niet geschikt voor is', 'als het bezit toeneemt', 'als aardbevingen toenemen', 'als woeker zich verspreidt'], answer: 0, explain: 'al-Bukhārī.', page: 35 },
    { type: 'mc', q: 'Wat is het laatste grote teken?', options: ['het vuur dat de mensen bijeendrijft', 'de zon die in het westen opkomt', 'het dier', 'de neerdaling van ʿĪsā'], answer: 0, explain: 'Daarna volgt alleen nog het blazen op de hoorn.', page: 40 },
    { type: 'tf', q: 'De neerdaling van ʿĪsā staat vast door Koran, Sunna en consensus.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals as-Saffārīnī zei.', page: 38 },
    { type: 'mc', q: 'Wanneer baat het geloof een ziel niet meer als ze niet eerder geloofde?', options: ['als de zon in het westen opkomt', 'als de Dajjāl komt', 'als ʿĪsā neerdaalt', 'als de Mahdī komt'], answer: 0, explain: 'al-Anʿām 6:158.', page: 40 }
  ]),
  note: 'Oefening van het boek op p. 41. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n4-aqeedah', chapter: '10', unit: 3, ar, nl }
