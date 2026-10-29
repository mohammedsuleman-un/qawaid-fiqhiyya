// Hoofdstukkaart bij الحديث (١), eenheid 4: الأحاديث ١٦–٢١ (lessen 19–24, boek p. 76–104).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Pagina 76 (uitleg), 78–80, 82, 83, 85, 88, 89, 92 (uitleg),
// 93, 96 (uitleg), 97 (deels), 98 en 100 (uitleg) zijn in het boek "alleen ter kennisname".
// Bij «لا تسبوا أصحابي» vermeldt de opmerking dat al-Bukhārī de hadith via Abū Saʿīd al-Khudrī
// overlevert. Het bericht over de zoon van Ādam (p. 100) staat niet in het hadith-tabblad omdat het
// boek de bewoording niet geeft. De uitgewerkte lijst op p. 84 staat volledig op de lespagina.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الحديث (١)، سلسلة زاد العلمية',
  pages: '76–104',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlHadith/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'لا تسبوا أصحابي، لا تسبوا أصحابي، فوالذي نفسي بيده لو أن أحدكم أنفق مثل أحد ذهبًا ما أدرك مد أحدهم ولا نصيفه', takhrij: 'أخرجه البخاري ومسلم', note: 'الحديث السادس عشر. هو من حديث أبي هريرة عند مسلم، ومن حديث أبي سعيد الخدري عند البخاري.', pages: [76], nl: 'Scheld mijn metgezellen niet uit, scheld mijn metgezellen niet uit; bij Hem in Wiens hand mijn ziel is, als een van jullie goud zo groot als de berg Uḥud zou uitgeven, zou hij nog niet de mudd van een van hen bereiken, en ook niet de helft ervan', nlNote: 'Hadith 16. Bij Muslim van Abū Hurayra, bij al-Bukhārī van Abū Saʿīd al-Khudrī.' },
  { narrator: 'أنس بن مالك', text: 'ثلاث من كن فيه وجد حلاوة الإيمان: أن يكون الله ورسوله أحب إليه مما سواهما، وأن يحب المرء لا يحبه إلا لله، وأن يكره أن يعود في الكفر كما يكره أن يقذف في النار', takhrij: 'متفق عليه', note: 'الحديث السابع عشر.', pages: [79], nl: 'Wie drie dingen heeft, vindt de zoetheid van het geloof: dat Allah en Zijn Boodschapper hem dierbaarder zijn dan al het andere, dat hij iemand alleen om Allah liefheeft, en dat hij er een afkeer van heeft terug te keren naar ongeloof zoals hij er een afkeer van heeft in het Vuur geworpen te worden', nlNote: 'Hadith 17.' },
  { narrator: '', text: 'أوثق عرى الإيمان: الموالاة في الله، والمعاداة في الله، والحب في الله، والبغض في الله', takhrij: 'أخرجه الطبراني وحسنه الألباني', note: '', pages: [81], nl: 'De stevigste banden van het geloof zijn: trouw om Allah, vijandschap om Allah, liefde om Allah en afkeer om Allah', nlNote: '' },
  { narrator: '', text: 'من أحب لله وأبغض لله وأعطى لله ومنع لله فقد استكمل الإيمان', takhrij: 'رواه أبو داود وصححه الألباني', note: '', pages: [81], nl: 'wie liefheeft om Allah, afkeer heeft om Allah, geeft om Allah en onthoudt om Allah, heeft het geloof vervolmaakt', nlNote: '' },
  { narrator: 'عائشة', text: 'من أحدث في أمرنا هذا ما ليس فيه فهو رد', takhrij: 'متفق عليه', note: 'الحديث الثامن عشر. وفي رواية لمسلم: «من عمل عملًا ليس عليه أمرنا فهو رد».', pages: [86], nl: 'Wie in deze zaak van ons iets invoert wat er niet in hoort, dat wordt afgewezen', nlNote: 'Hadith 18. In een overlevering bij Muslim: "wie een daad verricht die niet volgens onze zaak is, die wordt afgewezen".' },
  { narrator: 'العرباض بن سارية', text: 'أوصيكم بتقوى الله عز وجل والسمع والطاعة وإن تأمر عليكم عبد، فإنه من يعش منكم فسيرى اختلافًا كثيرًا، فعليكم بسنتي وسنة الخلفاء الراشدين المهديين، عضوا عليها بالنواجذ، وإياكم ومحدثات الأمور، فإن كل محدثة بدعة، وكل بدعة ضلالة', takhrij: 'رواه أبو داود والترمذي وقال: حديث حسن صحيح', note: 'الحديث التاسع عشر، بعد موعظة وجلت منها القلوب وذرفت منها العيون.', pages: [90], nl: 'Ik raad jullie aan Allah te vrezen, en te horen en te gehoorzamen, ook als een slaaf over jullie aangesteld wordt. Wie van jullie blijft leven, zal veel onenigheid zien. Houd je dan aan mijn Sunna en de Sunna van de rechtgeleide kaliefen; bijt je er met je kiezen in vast. Pas op voor nieuwe zaken, want elke nieuwe zaak is een innovatie, en elke innovatie is dwaling', nlNote: 'Hadith 19, na een vermaning waardoor de harten vreesden en de ogen traanden.' },
  { narrator: '', text: 'من سن في الإسلام سنة حسنة فله أجرها وأجر من عمل بها إلى يوم القيامة', takhrij: 'أخرجه مسلم', note: 'لا يعارض «كل بدعة ضلالة»؛ انظر الجمع بينهما. ' + FYI, pages: [93], nl: 'wie in de islam een goede gewoonte begint, krijgt de beloning ervan en de beloning van wie ernaar handelt tot de Dag der Opstanding', nlNote: 'Dit is niet in strijd met "elke innovatie is dwaling"; zie hoe het boek ze samenbrengt. ' + FYI_NL },
  { narrator: 'ابن مسعود', text: 'خط لنا رسول الله ﷺ خطًا ثم قال: «هذا سبيل الله»، ثم خط خطوطًا عن يمينه وعن شماله ثم قال: «هذه سبل، على كل سبيل منها شيطان يدعو إليه»', takhrij: 'أخرجه أحمد والنسائي وحسنه الأرناؤوط', note: 'الحديث العشرون، ثم قرأ ﴿وأن هذا صراطي مستقيمًا فاتبعوه﴾ [الأنعام: ١٥٣].', pages: [95], nl: 'De Boodschapper van Allah ﷺ trok voor ons een lijn en zei: "dit is de weg van Allah"; toen trok hij lijnen rechts en links ervan en zei: "dit zijn wegen; op elk ervan staat een duivel die ertoe oproept"', nlNote: 'Hadith 20; daarna reciteerde hij "dit is Mijn rechte pad, volg het" (al-Anʿām 6:153).' },
  { narrator: '', text: 'ما أنا عليه وأصحابي', takhrij: 'رواه الترمذي وحسنه', note: 'في وصف الفرقة الناجية. ' + FYI, pages: [96], nl: 'waar ik en mijn metgezellen op staan', nlNote: 'Over de beschrijving van de groep die gered wordt. ' + FYI_NL },
  { narrator: '', text: 'إن الله لا يقبض العلم انتزاعًا ينتزعه من العباد، ولكن يقبض العلم بقبض العلماء، حتى إذا لم يبق عالمًا اتخذ الناس رؤوسًا جهالًا، فسئلوا فأفتوا بغير علم فضلوا وأضلوا', takhrij: 'متفق عليه', note: 'الجهل من أسباب ظهور الفرق. ' + FYI, pages: [97], nl: 'Allah neemt de kennis niet weg door haar uit de dienaren te rukken, maar door de geleerden weg te nemen; als er geen geleerde meer over is, nemen de mensen onwetende leiders, die ondervraagd worden en zonder kennis oordelen, zodat ze dwalen en doen dwalen', nlNote: 'Onwetendheid is een van de oorzaken van het ontstaan van sekten. ' + FYI_NL },
  { narrator: 'أبو سعيد الخدري', text: 'لتتبعن سنن من قبلكم شبرًا بشبر وذراعًا بذراع حتى لو سلكوا جحر ضب لسلكتموه', takhrij: 'في الصحيحين', note: 'قالوا: اليهود والنصارى؟ قال: «فمن؟!». التشبه بالكفار من أسباب ظهور الفرق. ' + FYI, pages: [98], nl: 'Jullie zullen de wegen van wie vóór jullie waren volgen, span na span en el na el; zelfs als zij het hol van een hagedis in gingen, zouden jullie het in gaan', nlNote: 'Ze vroegen: de joden en christenen? Hij zei: "Wie anders?" Het nadoen van ongelovigen is een van de oorzaken van sekten. ' + FYI_NL },
  { narrator: 'أبو هريرة', text: 'من دعا إلى هدى كان له من الأجر مثل أجور من تبعه لا ينقص ذلك من أجورهم شيئًا، ومن دعا إلى ضلالة كان عليه من الإثم مثل آثام من تبعه لا ينقص ذلك من آثامهم شيئًا', takhrij: 'رواه مسلم', note: 'الحديث الحادي والعشرون.', pages: [100], nl: 'Wie oproept tot leiding, krijgt evenveel beloning als wie hem volgen, zonder dat er iets van hun beloning afgaat; en wie oproept tot dwaling, draagt evenveel zonde als wie hem volgen, zonder dat er iets van hun zonden afgaat', nlNote: 'Hadith 21.' }
]

const TAKHRIJ_NL = {
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أخرجه الطبراني وحسنه الألباني': 'aṭ-Ṭabarānī; goed (ḥasan) volgens al-Albānī',
  'رواه أبو داود وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه أبو داود والترمذي وقال: حديث حسن صحيح': 'Abū Dāwūd en at-Tirmidhī, die hem goed en authentiek (ḥasan ṣaḥīḥ) noemde',
  'أخرجه مسلم': 'Muslim',
  'أخرجه أحمد والنسائي وحسنه الأرناؤوط': 'Aḥmad en an-Nasāʾī; goed (ḥasan) volgens al-Arnaʾūṭ',
  'رواه الترمذي وحسنه': 'at-Tirmidhī, die hem goed (ḥasan) noemde',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s',
  'رواه مسلم': 'Muslim'
}
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'أنس بن مالك': 'Anas ibn Mālik', 'عائشة': 'ʿĀʾisha', 'العرباض بن سارية': 'al-ʿIrbāḍ ibn Sāriya', 'ابن مسعود': 'Ibn Masʿūd', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī' }

const PERSONS = [
  ['abu-hurayra', 'text', [76, 100], 'راوي «لا تسبوا أصحابي» و«من دعا إلى هدى».', 'Overleveraar van "scheld mijn metgezellen niet uit" en "wie oproept tot leiding".'],
  ['abu-said-al-khudri', 'text', [76, 98], 'راوي «لا تسبوا أصحابي» عند البخاري، و«لتتبعن سنن من قبلكم».', 'Overleveraar van "scheld mijn metgezellen niet uit" bij al-Bukhārī, en van "jullie zullen de wegen van wie vóór jullie waren volgen".'],
  ['anas-ibn-malik', 'text', [79], 'راوي حديث حلاوة الإيمان.', 'Overleveraar van de hadith over de zoetheid van het geloof.'],
  ['aisha', 'text', [86], 'راوية «من أحدث في أمرنا هذا ما ليس فيه فهو رد».', 'Overleverde: "wie in deze zaak van ons iets invoert wat er niet in hoort, dat wordt afgewezen".'],
  ['masruq', 'text', [86], 'كان إذا روى عن عائشة قال: حدثتني الصديقة بنت الصديق.', 'Zei als hij van ʿĀʾisha overleverde: de waarachtige, dochter van de waarachtige, vertelde mij.'],
  ['al-irbad-ibn-sariya', 'text', [90], 'راوي حديث الوصية بالسنة وسنة الخلفاء الراشدين.', 'Overleveraar van de raad om vast te houden aan de Sunna en die van de rechtgeleide kaliefen.'],
  ['abu-bakr-as-siddiq', 'text', [77, 91], 'أول الخلفاء الراشدين وأفضل الصحابة.', 'De eerste van de rechtgeleide kaliefen en de beste van de metgezellen.'],
  ['umar-ibn-al-khattab', 'text', [77, 91, 103], 'ثاني الخلفاء الراشدين، جمع الناس في قيام رمضان على إمام واحد فأحيا سنة تركت.', 'De tweede rechtgeleide kalief; bracht de mensen in het nachtgebed van Ramadan samen achter één imam en bracht zo een verlaten Sunna terug.'],
  ['uthman-ibn-affan', 'text', [77, 91], 'ثالث الخلفاء الراشدين.', 'De derde rechtgeleide kalief.'],
  ['ali-ibn-abi-talib', 'text', [77, 86, 91], 'رابع الخلفاء الراشدين.', 'De vierde rechtgeleide kalief.'],
  ['muawiya-ibn-abi-sufyan', 'text', [77], 'قال الكتاب: من العدول الفضلاء والصحابة الأخيار.', 'Volgens het boek een van de betrouwbare, voortreffelijke en goede metgezellen.'],
  ['ibn-masud', 'text', [95], 'راوي حديث الخط المستقيم والسبل.', 'Overleveraar van de hadith over de rechte lijn en de zijpaden.'],
  ['ibn-qudama', 'text', [80], 'قال: «من أحب الله لا يعصيه».', 'Zei: "wie Allah liefheeft, is Hem niet ongehoorzaam".'],
  ['ibn-taymiyya', 'text', [101], 'مثال لعالم مات وبقي علمه ينفع الناس.', 'Voorbeeld van een geleerde die stierf en wiens kennis de mensen blijft baten.'],
  ['ibn-al-qayyim', 'text', [101], 'مثال لعالم مات وبقي علمه ينفع الناس.', 'Voorbeeld van een geleerde die stierf en wiens kennis de mensen blijft baten.'],
  ['al-bukhari', 'takhrij', [76, 79, 86, 97, 98], 'أخرج أحاديث من الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [76, 79, 86, 93, 100], 'أخرج «لا تسبوا أصحابي» و«من دعا إلى هدى» وغيرهما.', 'Nam "scheld mijn metgezellen niet uit", "wie oproept tot leiding" en andere op.'],
  ['at-tabarani', 'takhrij', [81], 'روى «أوثق عرى الإيمان».', 'Overleverde "de stevigste banden van het geloof".'],
  ['abu-dawud', 'takhrij', [81, 90], 'روى «من أحب لله» وحديث العرباض.', 'Overleverde "wie liefheeft om Allah" en de hadith van al-ʿIrbāḍ.'],
  ['at-tirmidhi', 'takhrij', [90, 96], 'روى حديث العرباض وقال: حسن صحيح.', 'Overleverde de hadith van al-ʿIrbāḍ en noemde hem ḥasan ṣaḥīḥ.'],
  ['ahmad-ibn-hanbal', 'takhrij', [95], 'روى حديث الخط.', 'Overleverde de hadith over de lijn.'],
  ['an-nasai', 'takhrij', [95], 'روى حديث الخط.', 'Overleverde de hadith over de lijn.'],
  ['al-arnaut', 'takhrij', [95], 'حسن حديث الخط.', 'Noemde de hadith over de lijn goed.'],
  ['al-albani', 'takhrij', [81], 'حكم على حديثي الطبراني وأبي داود.', 'Beoordeelde de hadith van aṭ-Ṭabarānī en Abū Dāwūd.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'الأحاديث ١٦–٢١: السنة والجماعة',
  subtitle: 'ستة دروس مجموعة في صفحة واحدة',
  summary: 'النهي عن سب الصحابة ومنزلتهم، وحلاوة الإيمان والحب في الله، ورد المحدثات وشروط المتابعة، والوصية بالسنة وسنة الخلفاء الراشدين والتحذير من البدع، وسبيل الله المستقيم وسبل الفرق، ثم أجر الداعي إلى الهدى ووزر الداعي إلى الضلالة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'الأحاديث الستة كما في الكتاب.',
    root: { label: 'الأحاديث ١٦–٢١', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'لا تسبوا أصحابي', sub: 'الدرس ١٩', page: 76, children: ['فضل السبق', 'عدالة الصحابة', 'ما شجر بينهم'] },
      { label: 'حلاوة الإيمان', sub: 'الدرس ٢٠', page: 79, children: ['محبة الله ورسوله', 'الحب في الله', 'كراهة الكفر'] },
      { label: 'من أحدث في أمرنا', sub: 'الدرس ٢١', page: 86, children: ['رد البدع', 'الإخلاص والمتابعة', 'الأمور الستة'] },
      { label: 'فعليكم بسنتي', sub: 'الدرس ٢٢', page: 90, children: ['التقوى', 'السمع والطاعة', 'كل بدعة ضلالة'] },
      { label: 'خط لنا خطًا', sub: 'الدرس ٢٣', page: 95, children: ['الصراط المستقيم', 'السبل', 'أسباب الفرق'] },
      { label: 'من دعا إلى هدى', sub: 'الدرس ٢٤', page: 100, children: ['أجر الدال', 'وزر الداعي إلى الضلالة', 'السنة الحسنة'] }
    ]
  },
  points: [
    { text: 'القليل الذي أنفقه الصحابي أكثر ثوابًا من الكثير الذي ينفقه غيره، لسبقهم ونصرتهم للنبي ﷺ.', page: 76 },
    { text: 'الصحابة كلهم عدول، وسب الصحابة حرام من فواحش المحرمات.', page: 77 },
    { text: 'للإيمان حلاوة لا يتذوقها إلا من اجتمعت فيه الخصال الثلاث.', page: 79 },
    { text: 'يحرم إحداث شيء في دين الله ولو عن حسن قصد، ولو كان أصله مشروعًا إذا جاء على صفة لم يأت بها الدين.', page: 87 },
    { text: 'لا تصح العبادة إلا بالإخلاص لله والمتابعة للرسول ﷺ.', page: 88 },
    { text: 'المحدثات في أمور الدنيا ليست مرادة بالنهي؛ أما المحدثات في الدين فكلها شر.', page: 91 },
    { text: 'سبيل الله وسط ليس فيه إفراط ولا تفريط، وسبل أهل البدع مائلة إلى الجوانب.', page: 96 },
    { text: 'الدعوة إلى الهدى أو الضلالة تكون بالقول وبالفعل، خصوصًا ممن يقتدى به.', page: 102 }
  ],
  terms: [
    { term: 'المد', translit: 'al-mudd', meaning: 'ربع الصاع.', explanation: 'قدر به لأنه أقل ما كانوا يتصدقون به في العادة.', notes: [], page: 76 },
    { term: 'النصيف', translit: 'an-naṣīf', meaning: 'النصف.', explanation: '', notes: [], page: 76 },
    { term: 'حلاوة الإيمان', translit: 'ḥalāwat al-īmān', meaning: 'انشراح الصدر للإيمان والتلذذ بالطاعة وتحمل المشاق في الدين.', explanation: '', notes: [], page: 79 },
    { term: 'أحدث', translit: 'aḥdatha', meaning: 'اخترع وابتدع.', explanation: '', notes: [], page: 86 },
    { term: 'أمرنا هذا', translit: 'amrunā hādhā', meaning: 'ديننا، وهو الإسلام.', explanation: '', notes: [], page: 86 },
    { term: 'رد', translit: 'radd', meaning: 'مردود باطل غير معتد به.', explanation: '', notes: [], page: 86 },
    { term: 'وجلت', translit: 'wajilat', meaning: 'خافت.', explanation: '', notes: ['[الأنفال: ٢]'], page: 90 },
    { term: 'ذرفت', translit: 'dharafat', meaning: 'جرى دمعها.', explanation: '', notes: [], page: 90 },
    { term: 'التقوى', translit: 'at-taqwā', meaning: 'طاعة الله بامتثال أمره واجتناب نهيه على علم وبصيرة.', explanation: '', notes: ['[النساء: ١٣١]'], page: 91 },
    { term: 'الخلفاء الراشدون', translit: 'al-khulafāʾ ar-rāshidūn', meaning: 'أبو بكر ثم عمر ثم عثمان ثم علي.', explanation: '«المهديين» صفة مؤكدة.', notes: [], page: 91 },
    { term: 'النواجذ', translit: 'an-nawājidh', meaning: 'أقصى الأضراس.', explanation: '«عضوا عليها بالنواجذ»: تمسكوا بها.', notes: [], page: 91 },
    { term: 'محدثات الأمور', translit: 'muḥdathāt al-umūr', meaning: 'ما لم يكن معروفًا في كتاب ولا سنة ولا إجماع من شؤون الدين.', explanation: '', notes: [], page: 91 },
    { term: 'سبيل الله', translit: 'sabīl allāh', meaning: 'الدين القويم والطريق المستقيم.', explanation: 'الاعتقاد الحق والعمل الصالح على منهج أهل السنة والجماعة.', notes: [], page: 95 },
    { term: 'الصراط', translit: 'aṣ-ṣirāṭ', meaning: 'الطريق، وهو دين الإسلام.', explanation: '«مستقيمًا»: مستويًا قويمًا لا اعوجاج فيه.', notes: [], page: 95 },
    { term: 'من دعا إلى هدى', translit: 'man daʿā ilā hudā', meaning: 'بينه للناس ودعاهم إليه.', explanation: 'كأن يبين أن ركعتي الضحى سنة.', notes: [], page: 100 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'مراتب الصحابة في الفضل',
      intro: 'كما في الفائدة الإثرائية.',
      nodes: [
        { label: 'الخلفاء الأربعة', sub: 'أبو بكر ثم عمر ثم عثمان ثم علي', page: 77 },
        { label: 'تمام العشرة', page: 77 },
        { label: 'أهل بدر', page: 77 },
        { label: 'أهل أحد', page: 77 },
        { label: 'أصحاب بيعة الرضوان', page: 77 }
      ]
    },
    {
      type: 'cards',
      title: 'خصال حلاوة الإيمان',
      intro: 'من كن فيه وجد حلاوة الإيمان.',
      nodes: [
        { label: 'أن يكون الله ورسوله أحب إليه مما سواهما', sub: 'ومن علاماته كمال الطاعة وتمام المتابعة', page: 80 },
        { label: 'أن يحب المرء لا يحبه إلا لله', sub: 'لمزية دينية لا لمصلحة دنيوية', page: 80 },
        { label: 'أن يكره أن يعود في الكفر', sub: 'كما يكره أن يقذف في النار', page: 80 }
      ]
    },
    {
      type: 'compare',
      title: 'الأمور الستة التي تتحقق بها المتابعة (للاطلاع فقط)',
      intro: 'لا تتحقق المتابعة إلا إذا وافق العمل الشريعة فيها.',
      columns: ['مثال المخالفة'],
      rows: [
        { label: 'السبب', cells: ['إحداث عيد لانتصار المسلمين في بدر'] },
        { label: 'الجنس', cells: ['التضحية بفرس'] },
        { label: 'القدر', cells: ['غسل الأعضاء في الوضوء أربعًا عمدًا'] },
        { label: 'الكيفية', cells: ['السجود قبل الركوع'] },
        { label: 'الزمان', cells: ['الصلاة قبل دخول الوقت'] },
        { label: 'المكان', cells: ['الاعتكاف في غير المساجد'] }
      ],
      page: 88
    },
    {
      type: 'compare',
      title: 'السنة الحسنة والسنة السيئة',
      intro: 'كما في الفائدة الإثرائية للحديث الحادي والعشرين.',
      columns: ['السنة الحسنة', 'السنة السيئة'],
      rows: [
        { label: 'المعنى', cells: ['إحياء سنة مشروعة تركت، أو المبادرة إلى عمل مشروع', 'البدعة وإن استحسنها من سنها'] },
        { label: 'مثال', cells: ['جمع عمر الناس في قيام رمضان على إمام واحد', 'ابتداع أذكار وصلوات وتسميتها سنة حسنة'] }
      ],
      page: 103
    },
    {
      type: 'cards',
      title: 'أسباب ظهور الفرق المنحرفة (للاطلاع فقط)',
      intro: 'كما عدها الكتاب.',
      nodes: [
        { label: 'الجهل بأحكام الدين', page: 97 },
        { label: 'اتباع الهوى', sub: '[القصص: ٥٠]', page: 98 },
        { label: 'التعصب للآراء والرجال', sub: '[البقرة: ١٧٠]', page: 98 },
        { label: 'التشبه بالكفار', page: 98 }
      ]
    }
  ],
  sections: [
    { title: 'لماذا فضل الصحابة؟ (للاطلاع فقط)', text: 'لأن إنفاقهم كان مع الحاجة لضيق حالهم وفي نصرة النبي ﷺ غالبًا، ولأنهم الرعيل الأول الذي شق طريق الحق، فلهم فضل السبق وشرف الصحبة.', more: FYI, page: 76 },
    { title: 'ما شجر بين الصحابة', text: 'كان لكل طائفة شبهة اعتقدت تصويب نفسها بسببها، وكلهم متأولون مجتهدون، ولم يخرج بذلك أحد منهم من العدالة.', more: '', page: 77 },
    { title: 'حكم سب الصحابة (للاطلاع فقط)', text: 'إن كان مما يخالف الأدلة القطعية فكفر، كقذف عائشة بما برأها الله منه، وإلا فبدعة وفسق.', more: FYI, page: 78 },
    { title: 'موقف أهل السنة من الصحابة (للاطلاع فقط)', text: 'تولي الصحابة ومحبتهم وذكر محاسنهم، وسلامة القلوب والألسنة لهم، والكف عن ذكر ما شجر بينهم، والترضي عنهم.', more: '[الحشر: ١٠]. ' + FYI, page: 78 },
    { title: 'الموالاة والمعاداة في الله', text: 'من أصول أهل السنة؛ وهي جزء من معنى لا إله إلا الله، وأوثق عرى الإيمان، وسبب لتذوق حلاوة الإيمان، وبتحقيقها يستكمل الإيمان.', more: '[النحل: ٣٦]', page: 81 },
    { title: 'محبة الرسول تابعة لمحبة الله (للاطلاع فقط)', text: 'قال: «أن يكون الله ورسوله أحب إليه مما سواهما» ولم يقل: ثم رسوله؛ فالإنسان يحب الرسول ﷺ بقدر ما يحب الله، ومن أحبه مع الله أكثر من محبته لله فمحبته شركية.', more: FYI, page: 85 },
    { title: 'قاعدة رد المحدثات', text: 'حديث عائشة من جوامع الكلم، صريح في رد كل البدع والمحدثات، لا يدع للعقل مجالًا في إدخال ما ليس من الدين؛ قال أهل العلم: ويحسن الإكثار من الاستدلال به.', more: '[الأنعام: ١٥٣]', page: 87 },
    { title: 'السمع والطاعة', text: 'السمع والطاعة لولاة الأمور فيما يتعلق بالحكم ورعاية الناس واجب بالكتاب والسنة، وبهما تنتظم مصالح العباد.', more: '[النساء: ٥٩]', page: 92 },
    { title: 'الجمع بين «كل محدثة بدعة» و«من سن سنة حسنة» (للاطلاع فقط)', text: 'من وجهين: أن «من سن» أي من ابتدأ العمل بسنة ثابتة، كما في سبب الحديث حين جاء الأنصاري بالصدقة؛ أو من سن الوصول إلى أمر مشروع من قبل، كجمع الصحابة المصاحف على مصحف واحد.', more: FYI, page: 93 },
    { title: 'الفرق المذمومة', text: 'ليس المراد الاختلاف في فروع الفقه، وإنما من خالف أهل الحق في العقائد وأصول التوحيد وموالاة الصحابة ونحوه؛ ومن علاماتها اتباع المتشابه وترك المحكم واتباع الهوى وتحكيم العقل.', more: '', page: 97 },
    { title: 'فضيلة العلم', text: 'بالعلم تحصل الدلالة على الهدى؛ وتعلمه ونشره أفضل من كثير من إنفاق المال؛ فالعلماء يموتون ويبقى ذكرهم ينفع الناس وينالهم الأجر.', more: '', page: 101 },
    { title: 'إهداء الثواب للنبي ﷺ', text: 'للنبي ﷺ مثل أجر كل من عمل بهديه، فيتبين خطأ من يهدي ثواب العبادة للرسول ﷺ، ولو كان صحيحًا لسبق إليه الصحابة والتابعون.', more: '', page: 102 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'شرطا صحة العبادة', items: ['الإخلاص لله', 'المتابعة للرسول ﷺ'], page: 88, origin: 'boek' },
    { kind: 'opsomming', title: 'أوثق عرى الإيمان', items: ['الموالاة في الله', 'المعاداة في الله', 'الحب في الله', 'البغض في الله'], page: 81, origin: 'boek' },
    { kind: 'onderscheid', title: 'المحدثات', items: ['في الدين: كلها شر وضلالة.', 'في الدنيا: نافع خير وضار شر بحسب نتائجه.'], page: 93, origin: 'boek' },
    { kind: 'opsomming', title: 'الوصايا في حديث العرباض', items: ['تقوى الله', 'السمع والطاعة', 'لزوم السنة وسنة الخلفاء الراشدين', 'اجتناب محدثات الأمور'], page: 91, origin: 'boek' },
    { kind: 'onderscheid', title: 'أقسام الناس في الولاء والبراء (للاطلاع فقط)', items: ['الولاء المطلق: المؤمنون المخلصون.', 'الولاء من جهة والبراء من جهة: المسلم العاصي، يناصح وينكر عليه.', 'البراء المطلق: الكافر، ومن فعل المكفرات.'], page: 82, origin: 'boek' },
    { kind: 'bewijs', title: 'الدعوة بالفعل', items: ['الدعوة إلى الهدى أو الوزر تكون بالقول وبالفعل، خصوصًا ممن يقتدى به.'], page: 102, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'لا تسبوا الصحابة؛ فمد أحدهم خير من مثل أحد ذهبًا.',
    'حلاوة الإيمان في محبة الله ورسوله والحب في الله وكراهة الكفر.',
    'كل محدث في الدين مردود، ولا تصح العبادة إلا بالإخلاص والمتابعة.',
    'الزموا السنة وسنة الخلفاء الراشدين، وكل بدعة ضلالة.',
    'سبيل الله واحد مستقيم، وعلى السبل شياطين.',
    'الداعي إلى الهدى له مثل أجور من تبعه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما المد؟', options: ['ربع الصاع', 'نصف الصاع', 'الصاع', 'صاعان'], answer: 0, explain: 'وهو أقل ما كانوا يتصدقون به.', page: 76 },
    { type: 'mc', q: 'من أفضل الصحابة بعد الخلفاء الأربعة؟', options: ['تمام العشرة', 'أهل أحد', 'أهل بيعة الرضوان', 'من أسلم بعد الفتح'], answer: 0, explain: 'ثم أهل بدر ثم أحد ثم أصحاب بيعة الرضوان.', page: 77 },
    { type: 'tf', q: 'من خصال حلاوة الإيمان أن يحب المرء لمصلحة دنيوية.', options: ['صواب', 'خطأ'], answer: 1, explain: '«وأن يحب المرء لا يحبه إلا لله».', page: 79 },
    { type: 'mc', q: 'ما شرطا صحة العبادة؟', options: ['الإخلاص والمتابعة', 'العلم والعمل', 'النية والقدرة', 'الخشوع والطمأنينة'], answer: 0, explain: 'اتفق العلماء على ذلك.', page: 88 },
    { type: 'mc', q: 'من غسل أعضاءه في الوضوء أربعًا عمدًا، ففي أي الأمور الستة خالف؟', options: ['القدر', 'الجنس', 'الزمان', 'المكان'], answer: 0, explain: 'فالرابعة لا تقبل ويأثم بها.', page: 88 },
    { type: 'tf', q: 'المحدثات في أمور الدنيا كلها بدعة ضلالة.', options: ['صواب', 'خطأ'], answer: 1, explain: 'المراد المحدثات في الدين؛ أما الدنيا فمنها النافع ومنها الضار.', page: 91 },
    { type: 'mc', q: 'ما المراد بالفرق المذمومة؟', options: ['من خالف أهل الحق في العقائد وأصول التوحيد', 'المذاهب الفقهية', 'من اختلف في فروع الحلال والحرام', 'كل من خالف غيره'], answer: 0, explain: 'وليس الاختلاف في فروع الفقه.', page: 97 },
    { type: 'mc', q: 'ما أجر من دعا إلى هدى؟', options: ['مثل أجور من تبعه لا ينقص من أجورهم شيء', 'أجره وحده', 'نصف أجور من تبعه', 'يؤخذ من أجور من تبعه'], answer: 0, explain: 'كما في الحديث الحادي والعشرين.', page: 100 }
  ]),
  note: 'أنشطة الكتاب في صفحات ٧٨ و٨٥ و٨٩ و٩٤ و٩٩ و١٠٤. ما كان في الكتاب للاطلاع فقط مشار إليه في مواضعه.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Hadith 16–21: Sunna en gemeenschap',
  subtitle: 'Zes lessen samen op één pagina',
  summary: 'Het verbod de metgezellen uit te schelden en hun positie, de zoetheid van het geloof en liefde om Allah, het afwijzen van nieuwigheden en de voorwaarden van navolging, de raad vast te houden aan de Sunna en die van de rechtgeleide kaliefen en de waarschuwing tegen innovaties, de rechte weg van Allah en de zijpaden van de sekten, en tot slot de beloning van wie tot leiding oproept en de zonde van wie tot dwaling oproept.',
  source: { ...source, label: 'Kitāb al-Ḥadīth (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De zes hadith zoals in het boek.',
    root: { label: 'Hadith 16–21', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Scheld mijn metgezellen niet uit', sub: 'les 19', page: 76, children: ['hun voorsprong', 'hun betrouwbaarheid', 'wat tussen hen gebeurde'] },
      { label: 'De zoetheid van het geloof', sub: 'les 20', page: 79, children: ['liefde voor Allah en Zijn Boodschapper', 'liefde om Allah', 'afkeer van ongeloof'] },
      { label: 'Wie iets nieuws invoert', sub: 'les 21', page: 86, children: ['innovaties afwijzen', 'oprechtheid en navolging', 'de zes punten'] },
      { label: 'Houd vast aan mijn Sunna', sub: 'les 22', page: 90, children: ['godsvrucht', 'horen en gehoorzamen', 'elke innovatie is dwaling'] },
      { label: 'Hij trok een lijn', sub: 'les 23', page: 95, children: ['het rechte pad', 'de zijpaden', 'oorzaken van sekten'] },
      { label: 'Wie oproept tot leiding', sub: 'les 24', page: 100, children: ['beloning van wie wijst', 'zonde van wie tot dwaling roept', 'een goede gewoonte'] }
    ]
  },
  points: [
    { text: 'Het weinige dat een metgezel gaf, levert meer beloning op dan het vele van anderen, door hun voorsprong en hun steun aan de Profeet ﷺ.', page: 76 },
    { text: 'Alle metgezellen zijn betrouwbaar; hen uitschelden is verboden en behoort tot de ergste verboden daden.', page: 77 },
    { text: 'Het geloof heeft een zoetheid die alleen proeft wie de drie eigenschappen heeft.', page: 79 },
    { text: 'Iets nieuws in Allahs godsdienst invoeren is verboden, ook met goede bedoelingen, en ook als de basis voorgeschreven is maar de vorm niet.', page: 87 },
    { text: 'Aanbidding is alleen geldig met oprechtheid tegenover Allah en navolging van de Boodschapper ﷺ.', page: 88 },
    { text: 'Het verbod op nieuwigheden geldt niet voor wereldse zaken; nieuwigheden in de godsdienst zijn allemaal slecht.', page: 91 },
    { text: 'De weg van Allah is het midden, zonder overdrijving of tekortschieten; de wegen van de innovatoren buigen naar de zijkanten af.', page: 96 },
    { text: 'Oproepen tot leiding of dwaling gebeurt met woorden en met daden, vooral door wie als voorbeeld geldt.', page: 102 }
  ],
  terms: [
    { term: 'المد', translit: 'al-mudd', meaning: 'Een kwart ṣāʿ.', explanation: 'Gekozen omdat het gewoonlijk het minste was dat ze gaven.', notes: [], page: 76 },
    { term: 'النصيف', translit: 'an-naṣīf', meaning: 'De helft.', explanation: '', notes: [], page: 76 },
    { term: 'حلاوة الإيمان', translit: 'ḥalāwat al-īmān', meaning: 'Ruimte in de borst voor het geloof, genieten van gehoorzaamheid en moeite verdragen voor de godsdienst.', explanation: '', notes: [], page: 79 },
    { term: 'أحدث', translit: 'aḥdatha', meaning: 'Bedacht en nieuw ingevoerd.', explanation: '', notes: [], page: 86 },
    { term: 'أمرنا هذا', translit: 'amrunā hādhā', meaning: 'Onze godsdienst, de islam.', explanation: '', notes: [], page: 86 },
    { term: 'رد', translit: 'radd', meaning: 'Afgewezen, ongeldig, telt niet.', explanation: '', notes: [], page: 86 },
    { term: 'وجلت', translit: 'wajilat', meaning: '(De harten) vreesden.', explanation: '', notes: ['al-Anfāl 8:2'], page: 90 },
    { term: 'ذرفت', translit: 'dharafat', meaning: '(De ogen) traanden.', explanation: '', notes: [], page: 90 },
    { term: 'التقوى', translit: 'at-taqwā', meaning: 'Allah gehoorzamen door Zijn bevelen op te volgen en Zijn verboden te mijden, met kennis en inzicht.', explanation: '', notes: ['an-Nisāʾ 4:131'], page: 91 },
    { term: 'الخلفاء الراشدون', translit: 'al-khulafāʾ ar-rāshidūn', meaning: 'Abū Bakr, dan ʿUmar, dan ʿUthmān, dan ʿAlī.', explanation: '"De rechtgeleiden" is een versterkende eigenschap.', notes: [], page: 91 },
    { term: 'النواجذ', translit: 'an-nawājidh', meaning: 'De achterste kiezen.', explanation: '"Bijt je er met je kiezen in vast": houd er stevig aan vast.', notes: [], page: 91 },
    { term: 'محدثات الأمور', translit: 'muḥdathāt al-umūr', meaning: 'Zaken van de godsdienst die niet bekend waren in Koran, Sunna of consensus.', explanation: '', notes: [], page: 91 },
    { term: 'سبيل الله', translit: 'sabīl allāh', meaning: 'De rechte godsdienst en het rechte pad.', explanation: 'De juiste overtuiging en goede daden volgens de weg van Ahl as-Sunna wa-l-Jamāʿa.', notes: [], page: 95 },
    { term: 'الصراط', translit: 'aṣ-ṣirāṭ', meaning: 'De weg: de godsdienst van de islam.', explanation: '"Recht": vlak en zonder kromming.', notes: [], page: 95 },
    { term: 'من دعا إلى هدى', translit: 'man daʿā ilā hudā', meaning: 'Wie leiding aan de mensen uitlegt en hen ertoe oproept.', explanation: 'Bijvoorbeeld uitleggen dat de twee rakʿa van de ochtend (ḍuḥā) Sunna zijn.', notes: [], page: 100 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De rangorde van de metgezellen',
      intro: 'Zoals in de verrijkende les.',
      nodes: [
        { label: 'De vier kaliefen', sub: 'Abū Bakr, dan ʿUmar, dan ʿUthmān, dan ʿAlī', page: 77 },
        { label: 'De rest van de tien', page: 77 },
        { label: 'De strijders van Badr', page: 77 },
        { label: 'De strijders van Uḥud', page: 77 },
        { label: 'De mensen van de eed van ar-Riḍwān', page: 77 }
      ]
    },
    {
      type: 'cards',
      title: 'De eigenschappen van de zoetheid van het geloof',
      intro: 'Wie ze heeft, vindt de zoetheid van het geloof.',
      nodes: [
        { label: 'Allah en Zijn Boodschapper zijn hem het dierbaarst', sub: 'een teken ervan: volledige gehoorzaamheid en navolging', page: 80 },
        { label: 'Iemand alleen om Allah liefhebben', sub: 'om iets van de godsdienst, niet om wereldlijk voordeel', page: 80 },
        { label: 'Afkeer van terugkeer naar ongeloof', sub: 'zoals afkeer van in het Vuur geworpen worden', page: 80 }
      ]
    },
    {
      type: 'compare',
      title: 'De zes punten waarin navolging zich toont (alleen ter kennisname)',
      intro: 'Navolging bestaat alleen als de daad op deze punten met de wet overeenkomt.',
      columns: ['Voorbeeld van afwijking'],
      rows: [
        { label: 'Aanleiding', cells: ['een feest invoeren om de overwinning bij Badr'] },
        { label: 'Soort', cells: ['een paard offeren'] },
        { label: 'Hoeveelheid', cells: ['bij de wassing de ledematen bewust vier keer wassen'] },
        { label: 'Wijze', cells: ['knielen (sujūd) vóór de buiging (rukūʿ)'] },
        { label: 'Tijd', cells: ['bidden voordat de gebedstijd is ingegaan'] },
        { label: 'Plaats', cells: ['iʿtikāf buiten de moskee'] }
      ],
      page: 88
    },
    {
      type: 'compare',
      title: 'Een goede en een slechte gewoonte (sunna)',
      intro: 'Zoals in de verrijkende les bij hadith 21.',
      columns: ['Goede sunna', 'Slechte sunna'],
      rows: [
        { label: 'Betekenis', cells: ['een voorgeschreven, verlaten Sunna doen herleven, of als eerste iets voorgeschrevens doen', 'een innovatie, ook als wie haar begon haar goed vond'] },
        { label: 'Voorbeeld', cells: ['ʿUmar bracht de mensen in het nachtgebed van Ramadan samen achter één imam', 'nieuwe gedenkformules en gebeden bedenken en ze "goede sunna" noemen'] }
      ],
      page: 103
    },
    {
      type: 'cards',
      title: 'Oorzaken van het ontstaan van afwijkende sekten (alleen ter kennisname)',
      intro: 'Zoals het boek ze opsomt.',
      nodes: [
        { label: 'Onwetendheid over de godsdienst', page: 97 },
        { label: 'De eigen begeerte volgen', sub: 'al-Qaṣaṣ 28:50', page: 98 },
        { label: 'Fanatisme voor meningen en personen', sub: 'al-Baqara 2:170', page: 98 },
        { label: 'Ongelovigen nadoen', page: 98 }
      ]
    }
  ],
  sections: [
    { title: 'Waarom de metgezellen voortreffelijk zijn (alleen ter kennisname)', text: 'Zij gaven toen ze het zelf nodig hadden en meestal om de Profeet ﷺ te steunen; zij waren de eerste generatie die de weg van de waarheid baande. Zij hebben de deugd van de voorsprong en de eer van het gezelschap.', more: FYI_NL, page: 76 },
    { title: 'Wat tussen de metgezellen gebeurde', text: 'Elke partij had een reden waardoor zij meende gelijk te hebben; zij interpreteerden allen en deden hun best, en niemand van hen verloor daardoor zijn betrouwbaarheid.', more: '', page: 77 },
    { title: 'Het uitschelden van de metgezellen (alleen ter kennisname)', text: 'Gaat het in tegen definitieve bewijzen, zoals ʿĀʾisha beschuldigen van datgene waarvan Allah haar vrijsprak, dan is het ongeloof; anders is het innovatie en zondigheid.', more: FYI_NL, page: 78 },
    { title: 'De houding van Ahl as-Sunna tegenover de metgezellen (alleen ter kennisname)', text: 'Hen trouw zijn en liefhebben, hun goede daden noemen, hart en tong tegenover hen zuiver houden, zwijgen over wat tussen hen gebeurde, en Allahs welbehagen over hen vragen.', more: 'al-Ḥashr 59:10. ' + FYI_NL, page: 78 },
    { title: 'Trouw en afkeer om Allah', text: 'Een grondslag van Ahl as-Sunna: het hoort bij de betekenis van lā ilāha illā llāh, het is de stevigste band van het geloof, het laat de zoetheid van het geloof proeven, en het geloof wordt erdoor vervolmaakt.', more: 'an-Naḥl 16:36', page: 81 },
    { title: 'Liefde voor de Boodschapper volgt uit liefde voor Allah (alleen ter kennisname)', text: 'Er staat "dat Allah en Zijn Boodschapper hem dierbaarder zijn dan al het andere", niet "en daarna Zijn Boodschapper": men heeft de Boodschapper ﷺ lief naar de mate waarin men Allah liefheeft. Wie hem naast Allah meer liefheeft dan Allah, diens liefde is afgoderij.', more: FYI_NL, page: 85 },
    { title: 'De regel: nieuwigheden worden afgewezen', text: 'De hadith van ʿĀʾisha is een van de veelomvattende uitspraken: hij wijst alle innovaties af en laat het verstand geen ruimte om in de godsdienst te brengen wat er niet bij hoort. De geleerden zeiden: het is goed er vaak naar te verwijzen.', more: 'al-Anʿām 6:153', page: 87 },
    { title: 'Horen en gehoorzamen', text: 'Horen en gehoorzamen aan wie het gezag heeft, in wat het bestuur en de zorg voor de mensen betreft, is verplicht volgens Koran en Sunna; zo blijven de belangen van de mensen geordend.', more: 'an-Nisāʾ 4:59', page: 92 },
    { title: '"Elke nieuwe zaak is innovatie" en "wie een goede gewoonte begint" (alleen ter kennisname)', text: 'Op twee manieren samen te brengen: "wie begint" betekent wie als eerste een vaststaande Sunna doet, zoals de Anṣārī die met zijn gift kwam; of wie een middel begint naar iets wat al voorgeschreven was, zoals het samenbrengen van de korans in één muṣḥaf door de metgezellen.', more: FYI_NL, page: 93 },
    { title: 'De afgekeurde sekten', text: 'Bedoeld is niet verschil in details van fiqh, maar wie afwijkt van de mensen van de waarheid in geloofsleer, de grondslagen van tawḥīd, trouw aan de metgezellen en dergelijke. Kenmerken: het dubbelzinnige volgen en het duidelijke laten, de begeerte volgen, het verstand laten beslissen.', more: '', page: 97 },
    { title: 'De waarde van kennis', text: 'Door kennis wordt naar leiding gewezen; kennis leren en verspreiden is beter dan veel geld uitgeven. Geleerden sterven, maar hun nagedachtenis blijft de mensen baten en hun de beloning brengen.', more: '', page: 101 },
    { title: 'Beloning aan de Profeet ﷺ schenken', text: 'De Profeet ﷺ krijgt al de beloning van ieder die zijn leiding volgt; daarom is het een vergissing de beloning van aanbidding aan hem te schenken. Was het juist, dan waren de metgezellen en hun opvolgers ons daarin voorgegaan.', more: '', page: 102 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'Twee voorwaarden voor geldige aanbidding', items: ['oprechtheid tegenover Allah', 'navolging van de Boodschapper ﷺ'], page: 88, origin: 'boek' },
    { kind: 'opsomming', title: 'De stevigste banden van het geloof', items: ['trouw om Allah', 'vijandschap om Allah', 'liefde om Allah', 'afkeer om Allah'], page: 81, origin: 'boek' },
    { kind: 'onderscheid', title: 'Nieuwigheden', items: ['In de godsdienst: allemaal slecht en dwaling.', 'In de wereld: goed of slecht naar hun gevolgen.'], page: 93, origin: 'boek' },
    { kind: 'opsomming', title: 'De adviezen in de hadith van al-ʿIrbāḍ', items: ['Allah vrezen', 'horen en gehoorzamen', 'vasthouden aan de Sunna en die van de rechtgeleide kaliefen', 'nieuwe zaken mijden'], page: 91, origin: 'boek' },
    { kind: 'onderscheid', title: 'Indeling van de mensen bij trouw en afkeer (alleen ter kennisname)', items: ['Volledige trouw: de oprechte gelovigen.', 'Trouw in het ene, afkeer in het andere: de zondige moslim, die men raad geeft en terechtwijst.', 'Volledige afkeer: de ongelovige, en wie daden van ongeloof begaat.'], page: 82, origin: 'boek' },
    { kind: 'bewijs', title: 'Oproepen met daden', items: ['Oproepen tot leiding of zonde gebeurt met woorden en met daden, vooral door wie als voorbeeld geldt.'], page: 102, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Scheld de metgezellen niet uit; een mudd van hen is meer dan goud zo groot als Uḥud.',
    'De zoetheid van het geloof: Allah en Zijn Boodschapper het meest liefhebben, liefhebben om Allah, en afkeer van ongeloof.',
    'Elke nieuwigheid in de godsdienst wordt afgewezen; aanbidding vraagt oprechtheid en navolging.',
    'Houd vast aan de Sunna en die van de rechtgeleide kaliefen; elke innovatie is dwaling.',
    'De weg van Allah is één en recht; op de zijpaden staan duivels.',
    'Wie oproept tot leiding, krijgt de beloning van wie hem volgen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is een mudd?', options: ['een kwart ṣāʿ', 'een halve ṣāʿ', 'een ṣāʿ', 'twee ṣāʿ'], answer: 0, explain: 'Het minste wat ze gewoonlijk gaven.', page: 76 },
    { type: 'mc', q: 'Wie komen na de vier kaliefen in voortreffelijkheid?', options: ['de rest van de tien', 'de strijders van Uḥud', 'de mensen van de eed van ar-Riḍwān', 'wie na de verovering moslim werd'], answer: 0, explain: 'Dan de strijders van Badr, van Uḥud en de mensen van ar-Riḍwān.', page: 77 },
    { type: 'tf', q: 'Iemand liefhebben om wereldlijk voordeel hoort bij de zoetheid van het geloof.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Dat hij iemand alleen om Allah liefheeft."', page: 79 },
    { type: 'mc', q: 'Wat zijn de twee voorwaarden voor geldige aanbidding?', options: ['oprechtheid en navolging', 'kennis en daad', 'intentie en vermogen', 'nederigheid en rust'], answer: 0, explain: 'Daarover zijn de geleerden het eens.', page: 88 },
    { type: 'mc', q: 'Wie bij de wassing bewust vier keer wast, wijkt af in welk van de zes punten?', options: ['hoeveelheid', 'soort', 'tijd', 'plaats'], answer: 0, explain: 'De vierde keer wordt niet aanvaard en is een zonde.', page: 88 },
    { type: 'tf', q: 'Alle nieuwigheden in wereldse zaken zijn dwaling.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Bedoeld zijn nieuwigheden in de godsdienst; wereldse kunnen nuttig of schadelijk zijn.', page: 91 },
    { type: 'mc', q: 'Wat wordt bedoeld met de afgekeurde sekten?', options: ['wie afwijkt in geloofsleer en de grondslagen van tawḥīd', 'de rechtsscholen', 'wie verschilt in details van halal en haram', 'iedereen die van mening verschilt'], answer: 0, explain: 'Niet het verschil in details van fiqh.', page: 97 },
    { type: 'mc', q: 'Wat krijgt wie tot leiding oproept?', options: ['evenveel beloning als wie hem volgen, zonder dat hun iets afgaat', 'alleen zijn eigen beloning', 'de helft van hun beloning', 'een deel van hun beloning'], answer: 0, explain: 'Zoals in hadith 21.', page: 100 }
  ]),
  note: 'Oefeningen van het boek op p. 78, 85, 89, 94, 99 en 104. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-hadith', chapter: '19', unit: 4, ar, nl }
