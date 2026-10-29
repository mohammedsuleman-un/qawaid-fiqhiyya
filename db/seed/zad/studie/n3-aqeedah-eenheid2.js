// Hoofdstukkaart bij العقيدة (٣), eenheid 2: الإيمان بالرسل (les 3, eerste deel; boek p. 19–24).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Het tweede deel van les 3 (de Laatste Dag) staat bij eenheid 3.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٣)، سلسلة زاد العلمية',
  pages: '19–24',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'عرضت علي الأمم، فجعل يمر النبي معه الرجل، والنبي معه الرجلان، والنبي معه الرهط، والنبي ليس معه أحد', takhrij: 'متفق عليه', note: 'الدليل الثالث على أن الأنبياء يبلغون دين الله ويتفاوتون في مدى الاستجابة لهم.', pages: [22], nl: 'De volken werden mij getoond: er kwam een profeet langs met één man, een profeet met twee mannen, een profeet met een groepje, en een profeet met niemand', nlNote: 'Het derde bewijs dat ook de profeten Allahs godsdienst verkondigen, en dat de mate waarin men hen volgde verschilt.' }
]

const TAKHRIJ_NL = { 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)' }
const NARRATOR_NL = {}

const PERSONS = [
  ['ibn-taymiyya', 'text', [22], 'شيخ الإسلام: «إن الرسول هو من أرسل إلى قوم كفار مكذبين، والنبي من أرسل إلى قوم مؤمنين بشريعة رسول قبله يعلمهم ويحكم بينهم»، ولعله الأقرب.', 'Shaykh al-Islām: de boodschapper wordt gezonden naar een ongelovig volk dat loochent, de profeet naar gelovigen met de wet van een eerdere boodschapper, om hen te onderwijzen en tussen hen te oordelen. Volgens het boek waarschijnlijk de juiste opvatting.'],
  ['al-bukhari', 'takhrij', [22], 'أخرج حديث «عرضت علي الأمم».', 'Nam de hadith "de volken werden mij getoond" op.'],
  ['muslim', 'takhrij', [22], 'أخرج حديث «عرضت علي الأمم».', 'Nam de hadith "de volken werden mij getoond" op.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'الإيمان بالرسل',
  subtitle: 'الجزء الأول من الدرس الثالث',
  summary: 'الركن الرابع من أركان الإيمان: تعريف الرسول والنبي والفرق بينهما، وأهمية الإيمان بالرسل ومعناه، وما يتضمنه، وثمراته.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ٢٠ من الكتاب.',
    root: { label: 'الإيمان بالرسل', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'الرسول والنبي', sub: 'التعريف', page: 21, children: ['الرسول: من الإرسال', 'النبي: من النبأ'] },
      { label: 'الفرق بينهما', sub: 'ثلاثة أقوال', page: 21, children: ['لا فرق: غير صحيح', 'النبي لا يؤمر بالبلاغ: بعيد', 'قول شيخ الإسلام: الأقرب'] },
      { label: 'أهميته ومعناه', page: 22, children: ['أصل من أصول الإيمان', 'من كفر بواحد كفر بالجميع'] },
      { label: 'ما يتضمنه', page: 23, children: ['رسالتهم حق', 'دعوتهم التوحيد', 'العصمة في البلاغ', 'التفاضل'] },
      { label: 'ثمراته', page: 24, children: ['العلم برحمة الله', 'الشكر', 'محبة الرسل'] }
    ]
  },
  points: [
    { text: 'الرسول: عبد اصطفاه الله بالوحي إليه وأرسله إلى قوم كافرين؛ والنبي: عبد اصطفاه الله بالوحي إليه وأمره بالعمل به.', page: 21 },
    { text: 'القول بأن النبي لا يؤمر بالبلاغ بعيد؛ لأن الله نص على إرسال الأنبياء، ولأن ترك البلاغ كتمان للوحي، ولحديث «عرضت علي الأمم».', page: 21 },
    { text: 'الأقرب قول شيخ الإسلام: الرسول من أرسل إلى قوم كفار مكذبين، والنبي من أرسل إلى قوم مؤمنين بشريعة رسول قبله.', page: 22 },
    { text: 'الإيمان بالرسل أصل من أصول الإيمان، ومن كفر بواحد منهم كفر بالله وبجميع الرسل [النساء: ١٥٠–١٥٢].', page: 22 },
    { text: 'دين الأنبياء واحد وهو الإسلام والتوحيد، والشرائع تختلف [الأنبياء: ٢٥]، [المائدة: ٤٨].', page: 23 },
    { text: 'الرسل معصومون في تحمل الرسالة وتبليغها، ويتفاضلون، وخاتمهم وأفضلهم محمد ﷺ.', page: 23 }
  ],
  terms: [
    { term: 'الرسول', translit: 'ar-rasūl', meaning: 'لغة: مشتق من الإرسال بمعنى التوجيه.', explanation: 'اصطلاحًا: عبد اصطفاه الله بالوحي إليه وأرسله إلى قوم كافرين؛ وقيل: عبد أرسل إلى قوم مخالفين يجدد لهم أمر التوحيد.', notes: [], page: 21 },
    { term: 'النبي', translit: 'an-nabī', meaning: 'لغة: من النبأ وهو الخبر؛ سمي بذلك لأنه مخبَر ومخبِر.', explanation: 'اصطلاحًا: عبد اصطفاه الله بالوحي إليه وأمره بالعمل به.', notes: ['[النبأ: ١–٢]'], page: 21 },
    { term: 'الإيمان بالرسل', translit: 'al-īmān bi-r-rusul', meaning: 'التصديق الجازم بأن الله بعث في كل أمة رسولًا يدعوهم إلى عبادة الله وحده والكفر بما يعبد من دونه.', explanation: 'وأنهم جميعًا مرسلون صادقون، بلغوا جميع ما أرسلهم الله به.', notes: [], page: 22 },
    { term: 'العصمة', translit: 'al-ʿiṣma', meaning: 'الرسل معصومون في تحمل الرسالة وتبليغها.', explanation: '', notes: [], page: 23 },
    { term: 'خاتم النبيين', translit: 'khātam an-nabiyyīn', meaning: 'آخر الرسل وأفضلهم محمد ﷺ.', explanation: '', notes: ['[الأحزاب: ٤٠]'], page: 23 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الأقوال في الفرق بين الرسول والنبي',
      intro: 'كما عرضها الكتاب.',
      columns: ['القول', 'حكم الكتاب عليه'],
      rows: [
        { label: 'الأول', cells: ['لا فرق بينهما', 'غير صحيح'] },
        { label: 'الثاني', cells: ['الرسول أمر بالتبليغ، والنبي لم يؤمر بالبلاغ', 'بعيد لثلاثة أمور'] },
        { label: 'الثالث', cells: ['الرسول من أوحي إليه بشرع جديد، والنبي المبعوث لتقرير شرع من قبله', 'قيل به'] },
        { label: 'شيخ الإسلام', cells: ['الرسول يرسل إلى قوم كفار مكذبين، والنبي إلى قوم مؤمنين بشريعة رسول قبله', 'لعله الأقرب'] }
      ],
      page: 22
    },
    {
      type: 'steps',
      title: 'لماذا يبعد القول بأن النبي لا يؤمر بالبلاغ؟',
      intro: 'ثلاثة أمور.',
      nodes: [
        { label: 'نص الله أنه أرسل الأنبياء كما أرسل الرسل', sub: '[الحج: ٥٢]؛ والإرسال يقتضي البلاغ', page: 21 },
        { label: 'ترك البلاغ كتمان لوحي الله', sub: 'والله لا ينزل وحيه ليكتم في صدر واحد ثم يموت العلم بموته', page: 21 },
        { label: 'حديث «عرضت علي الأمم»', sub: 'فالأنبياء يبلغون ويتفاوتون في مدى الاستجابة', page: 22 }
      ]
    },
    {
      type: 'cards',
      title: 'ما يتضمنه الإيمان بالرسل',
      intro: 'أربعة أمور.',
      nodes: [
        { label: 'أن رسالتهم حق', sub: 'والكفر بواحد كفر بالجميع [الشعراء: ١٠٥]', page: 23 },
        { label: 'أنهم جميعًا دعوا إلى التوحيد', sub: 'وإن اختلفت شرائعهم [الأنبياء: ٢٥]', page: 23 },
        { label: 'أنهم معصومون', sub: 'في تحمل الرسالة وتبليغها', page: 23 },
        { label: 'أنهم يتفاضلون', sub: 'وخاتمهم وأفضلهم محمد ﷺ [البقرة: ٢٥٣]', page: 23 }
      ]
    }
  ],
  sections: [
    { title: 'الرسول والنبي', text: 'الرسول من الإرسال وهو التوجيه، والنبي من النبأ وهو الخبر. وكلاهما عبد اصطفاه الله بالوحي إليه.', more: 'سمي النبي نبيًّا لأنه مخبَر من الله ومخبِر عنه.', page: 21 },
    { title: 'الفرق بينهما', text: 'لا يصح القول بأنه لا فرق، ويبعد القول بأن النبي لا يؤمر بالبلاغ. والأقرب قول شيخ الإسلام: الرسول يرسل إلى قوم كفار مكذبين، والنبي إلى قوم مؤمنين بشريعة رسول قبله يعلمهم ويحكم بينهم.', more: 'ومن الأدلة: ﴿وما أرسلنا من قبلك من رسول ولا نبي﴾ [الحج: ٥٢]، وحديث «عرضت علي الأمم».', page: 21 },
    { title: 'أهمية الإيمان بالرسل', text: 'أصل من أصول الإيمان لا يتم إيمان المسلم إلا به، ومن كفر بواحد منهم فقد كفر بالله وبجميع الرسل [النساء: ١٥٠–١٥٢].', more: '', page: 22 },
    { title: 'تكذيب رسول واحد', text: 'قال تعالى: ﴿كذبت قوم نوح المرسلين﴾ [الشعراء: ١٠٥]، مع أن كل طائفة لم يأتها إلا رسول واحد؛ فتكذيب الواحد تكذيب لجنس الرسالة.', more: 'ومثله في ثمود [الشعراء: ١٤١] وعاد [الشعراء: ١٢٣].', page: 23 },
    { title: 'ثمرات الإيمان بالرسل', text: 'العلم برحمة الله وعنايته بعباده، وشكره على هذه النعمة الكبرى، ومحبة الرسل وتعظيمهم والثناء عليهم بما يليق بهم.', more: '', page: 24 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'الرسول والنبي (الأقرب)', items: ['الرسول: يرسل إلى قوم كفار مكذبين.', 'النبي: يرسل إلى قوم مؤمنين بشريعة رسول قبله، يعلمهم ويحكم بينهم.'], page: 22, origin: 'boek' },
    { kind: 'definitie', title: 'الإيمان بالرسل', items: ['التصديق الجازم بأن الله بعث في كل أمة رسولًا يدعو إلى عبادة الله وحده.', 'وأنهم جميعًا صادقون بلغوا كل ما أرسلوا به.'], page: 22, origin: 'boek' },
    { kind: 'opsomming', title: 'ما يتضمنه', items: ['رسالتهم حق', 'دعوتهم واحدة: التوحيد', 'معصومون في البلاغ', 'يتفاضلون، وأفضلهم محمد ﷺ'], page: 23, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمراته', items: ['العلم برحمة الله', 'شكر النعمة', 'محبة الرسل وتعظيمهم'], page: 24, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الرسول من الإرسال، والنبي من النبأ.',
    'الأقرب: الرسول إلى قوم كفار، والنبي إلى قوم مؤمنين بشريعة من قبله.',
    'الأنبياء أيضًا يبلغون، ويتفاوتون في الاستجابة لهم.',
    'من كفر برسول واحد كفر بالجميع.',
    'دين الأنبياء واحد والشرائع مختلفة.',
    'الرسل معصومون في البلاغ، ويتفاضلون، وأفضلهم محمد ﷺ.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من أي شيء اشتق اسم النبي؟', options: ['من النبأ وهو الخبر', 'من الإرسال', 'من النبوة وهي الارتفاع فقط', 'من الإنباء بالغيب فقط'], answer: 0, explain: 'كما في الكتاب: من النبأ، لأنه مخبَر ومخبِر.', page: 21 },
    { type: 'tf', q: 'يرى الكتاب أنه لا فرق بين الرسول والنبي.', options: ['صواب', 'خطأ'], answer: 1, explain: 'وصف هذا القول بأنه غير صحيح.', page: 21 },
    { type: 'mc', q: 'أي قول في الفرق بين الرسول والنبي جعله الكتاب الأقرب؟', options: ['الرسول إلى قوم كفار مكذبين، والنبي إلى قوم مؤمنين بشريعة رسول قبله', 'لا فرق بينهما', 'النبي لا يؤمر بالبلاغ', 'النبي يأتي دائمًا بكتاب جديد'], answer: 0, explain: 'قول شيخ الإسلام ابن تيمية.', page: 22 },
    { type: 'mc', q: 'ما الذي يدل عليه حديث «عرضت علي الأمم» هنا؟', options: ['أن الأنبياء يبلغون ويتفاوتون في الاستجابة', 'أن الأنبياء لا يبلغون', 'أن لكل نبي أتباعًا كثيرين', 'أن الرسل لا يتفاضلون'], answer: 0, explain: 'منهم من معه الرجل، ومنهم من ليس معه أحد.', page: 22 },
    { type: 'tf', q: 'من كذب رسولًا واحدًا فقد كذب جميع الرسل.', options: ['صواب', 'خطأ'], answer: 0, explain: '﴿كذبت قوم نوح المرسلين﴾ [الشعراء: ١٠٥].', page: 23 },
    { type: 'mc', q: 'ما الذي يختلف بين الأنبياء؟', options: ['الشرائع', 'الدعوة إلى التوحيد', 'أصل الدين', 'العصمة في البلاغ'], answer: 0, explain: 'دينهم واحد وهو الإسلام والتوحيد، والشرائع تختلف [المائدة: ٤٨].', page: 23 }
  ]),
  note: 'نشاط هذه الوحدة مع نشاط الوحدة الثالثة في صفحة ٣٣. وبقية الدرس الثالث (الإيمان باليوم الآخر) في الوحدة الثالثة.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Geloof in de boodschappers',
  subtitle: 'Het eerste deel van les 3',
  summary: 'De vierde pijler van het geloof: wat een boodschapper (rasūl) en een profeet (nabī) zijn en het verschil ertussen, het belang en de betekenis van geloof in de boodschappers, wat het inhoudt en wat het oplevert.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (3), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De onderwerpen zoals op p. 20 van het boek.',
    root: { label: 'Geloof in de boodschappers', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Rasūl en nabī', sub: 'definitie', page: 21, children: ['rasūl: van zenden', 'nabī: van bericht'] },
      { label: 'Het verschil', sub: 'drie opvattingen', page: 21, children: ['geen verschil: onjuist', 'de nabī verkondigt niet: onwaarschijnlijk', 'Ibn Taymiyya: het waarschijnlijkst'] },
      { label: 'Belang en betekenis', page: 22, children: ['een grondslag van het geloof', 'één loochenen is allen loochenen'] },
      { label: 'Wat het inhoudt', page: 23, children: ['hun boodschap is waar', 'allen riepen op tot tawḥīd', 'onfeilbaar in de verkondiging', 'rangverschil'] },
      { label: 'Vruchten', page: 24, children: ['Allahs barmhartigheid kennen', 'dankbaarheid', 'liefde voor de boodschappers'] }
    ]
  },
  points: [
    { text: 'Een rasūl is een dienaar die Allah uitkoos voor openbaring en naar een ongelovig volk zond; een nabī is een dienaar die Allah uitkoos voor openbaring en opdroeg ernaar te handelen.', page: 21 },
    { text: 'De opvatting dat een nabī niet hoeft te verkondigen is onwaarschijnlijk: Allah zegt dat Hij ook profeten zond, verzwijgen zou de openbaring verbergen, en de hadith "de volken werden mij getoond".', page: 21 },
    { text: 'Het waarschijnlijkst is de opvatting van Ibn Taymiyya: de rasūl gaat naar een ongelovig volk dat loochent, de nabī naar gelovigen met de wet van een eerdere boodschapper.', page: 22 },
    { text: 'Geloof in de boodschappers is een grondslag van het geloof; wie één van hen verwerpt, verwerpt Allah en alle boodschappers (an-Nisāʾ 4:150–152).', page: 22 },
    { text: 'De godsdienst van de profeten is één, de islam en het tawḥīd, terwijl hun wetten verschillen (al-Anbiyāʾ 21:25; al-Māʾida 5:48).', page: 23 },
    { text: 'De boodschappers zijn onfeilbaar in het ontvangen en overbrengen van de boodschap, en verschillen in rang; de laatste en beste is Muḥammad ﷺ.', page: 23 }
  ],
  terms: [
    { term: 'الرسول', translit: 'ar-rasūl', meaning: 'Boodschapper. Taal: van irsāl, zenden.', explanation: 'Vakterm: een dienaar die Allah uitkoos voor openbaring en naar een ongelovig volk zond; ook: gezonden naar een tegenstrevend volk om het tawḥīd te vernieuwen.', notes: [], page: 21 },
    { term: 'النبي', translit: 'an-nabī', meaning: 'Profeet. Taal: van nabaʾ, bericht; hij ontvangt een bericht en brengt het over.', explanation: 'Vakterm: een dienaar die Allah uitkoos voor openbaring en opdroeg ernaar te handelen.', notes: ['an-Nabaʾ 78:1–2'], page: 21 },
    { term: 'الإيمان بالرسل', translit: 'al-īmān bi-r-rusul', meaning: 'Vast geloven dat Allah naar elk volk een boodschapper zond die opriep tot de aanbidding van Allah alleen en tot het verwerpen van wat naast Hem wordt aanbeden.', explanation: 'En dat ze allemaal waarachtig waren en alles overbrachten waarmee ze gezonden werden.', notes: [], page: 22 },
    { term: 'العصمة', translit: 'al-ʿiṣma', meaning: 'Onfeilbaarheid: de boodschappers zijn beschermd bij het ontvangen en overbrengen van de boodschap.', explanation: '', notes: [], page: 23 },
    { term: 'خاتم النبيين', translit: 'khātam an-nabiyyīn', meaning: 'Het zegel van de profeten: Muḥammad ﷺ, de laatste en beste van de boodschappers.', explanation: '', notes: ['al-Aḥzāb 33:40'], page: 23 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Opvattingen over het verschil tussen rasūl en nabī',
      intro: 'Zoals het boek ze bespreekt.',
      columns: ['Opvatting', 'Oordeel van het boek'],
      rows: [
        { label: 'Eerste', cells: ['er is geen verschil', 'onjuist'] },
        { label: 'Tweede', cells: ['de rasūl moet verkondigen, de nabī niet', 'onwaarschijnlijk, om drie redenen'] },
        { label: 'Derde', cells: ['de rasūl krijgt een nieuwe wet, de nabī bevestigt de wet van zijn voorganger', 'wordt ook gezegd'] },
        { label: 'Ibn Taymiyya', cells: ['de rasūl gaat naar een ongelovig volk, de nabī naar gelovigen met de wet van een eerdere boodschapper', 'waarschijnlijk de juiste'] }
      ],
      page: 22
    },
    {
      type: 'steps',
      title: 'Waarom ook een nabī verkondigt',
      intro: 'Drie redenen.',
      nodes: [
        { label: 'Allah zegt dat Hij profeten zond, net als boodschappers', sub: 'al-Ḥajj 22:52; zenden houdt verkondigen in', page: 21 },
        { label: 'Niet verkondigen is Allahs openbaring verbergen', sub: 'Allah zendt Zijn openbaring niet om haar in één borst te begraven', page: 21 },
        { label: 'De hadith "de volken werden mij getoond"', sub: 'profeten verkondigden, en het aantal volgelingen verschilde', page: 22 }
      ]
    },
    {
      type: 'cards',
      title: 'Wat geloof in de boodschappers inhoudt',
      intro: 'Vier zaken.',
      nodes: [
        { label: 'Hun boodschap is waar', sub: 'één verwerpen is allen verwerpen (ash-Shuʿarāʾ 26:105)', page: 23 },
        { label: 'Allen riepen op tot tawḥīd', sub: 'ook al verschillen hun wetten (al-Anbiyāʾ 21:25)', page: 23 },
        { label: 'Ze zijn onfeilbaar', sub: 'in het ontvangen en overbrengen van de boodschap', page: 23 },
        { label: 'Ze verschillen in rang', sub: 'de laatste en beste is Muḥammad ﷺ (al-Baqara 2:253)', page: 23 }
      ]
    }
  ],
  sections: [
    { title: 'Rasūl en nabī', text: 'Rasūl komt van zenden, nabī van bericht. Beiden zijn dienaren die Allah uitkoos voor openbaring.', more: 'De profeet heet nabī omdat hij een bericht van Allah ontvangt en het doorgeeft.', page: 21 },
    { title: 'Het verschil', text: 'Dat er geen verschil is, klopt niet; dat de nabī niet hoeft te verkondigen, is onwaarschijnlijk. Het waarschijnlijkst is de opvatting van Ibn Taymiyya: de rasūl gaat naar een ongelovig volk dat loochent, de nabī naar gelovigen met de wet van een eerdere boodschapper, om hen te onderwijzen en tussen hen te oordelen.', more: 'Bewijzen: "Wij zonden vóór jou geen boodschapper en geen profeet ..." (al-Ḥajj 22:52) en de hadith "de volken werden mij getoond".', page: 21 },
    { title: 'Het belang', text: 'Een grondslag van het geloof: zonder dit geloof is het geloof van een moslim niet volledig, en wie één boodschapper verwerpt, verwerpt Allah en alle boodschappers (an-Nisāʾ 4:150–152).', more: '', page: 22 },
    { title: 'Eén boodschapper loochenen', text: '"Het volk van Nūḥ loochende de boodschappers" (ash-Shuʿarāʾ 26:105), terwijl er maar één boodschapper naar hen kwam: wie er één loochent, loochent de boodschap zelf.', more: 'Zo ook bij Thamūd (26:141) en ʿĀd (26:123).', page: 23 },
    { title: 'De vruchten', text: 'Allahs barmhartigheid en zorg voor Zijn dienaren kennen, Hem danken voor deze grote gunst, en de boodschappers liefhebben, eren en prijzen zoals hun past.', more: '', page: 24 }
  ],
  keycards: [
    { kind: 'onderscheid', title: 'Rasūl en nabī (waarschijnlijkste opvatting)', items: ['Rasūl: gezonden naar een ongelovig volk dat loochent.', 'Nabī: gezonden naar gelovigen met de wet van een eerdere boodschapper, om te onderwijzen en te oordelen.'], page: 22, origin: 'boek' },
    { kind: 'definitie', title: 'Geloof in de boodschappers', items: ['Vast geloven dat Allah naar elk volk een boodschapper zond die opriep tot de aanbidding van Allah alleen.', 'En dat ze allemaal waarachtig waren en alles overbrachten.'], page: 22, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat het inhoudt', items: ['hun boodschap is waar', 'allen riepen op tot tawḥīd', 'onfeilbaar in de verkondiging', 'rangverschil; de beste is Muḥammad ﷺ'], page: 23, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten', items: ['Allahs barmhartigheid kennen', 'dankbaarheid voor deze gunst', 'liefde en eerbied voor de boodschappers'], page: 24, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Rasūl komt van zenden, nabī van bericht.',
    'Waarschijnlijkst: de rasūl gaat naar ongelovigen, de nabī naar gelovigen met een eerdere wet.',
    'Ook profeten verkondigden; het aantal volgelingen verschilde.',
    'Wie één boodschapper verwerpt, verwerpt ze allemaal.',
    'Eén godsdienst, verschillende wetten.',
    'Onfeilbaar in de verkondiging; de beste is Muḥammad ﷺ.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waarvan is het woord nabī afgeleid?', options: ['van nabaʾ: bericht', 'van irsāl: zenden', 'alleen van verheven zijn', 'alleen van het voorspellen van het verborgene'], answer: 0, explain: 'Van nabaʾ: hij ontvangt een bericht en geeft het door.', page: 21 },
    { type: 'tf', q: 'Volgens het boek is er geen verschil tussen rasūl en nabī.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het boek noemt die opvatting onjuist.', page: 21 },
    { type: 'mc', q: 'Welke opvatting over rasūl en nabī noemt het boek het waarschijnlijkst?', options: ['de rasūl gaat naar ongelovigen, de nabī naar gelovigen met een eerdere wet', 'er is geen verschil', 'de nabī hoeft niet te verkondigen', 'de nabī krijgt altijd een nieuw boek'], answer: 0, explain: 'De opvatting van Ibn Taymiyya.', page: 22 },
    { type: 'mc', q: 'Wat laat de hadith "de volken werden mij getoond" hier zien?', options: ['dat profeten verkondigden en het aantal volgelingen verschilde', 'dat profeten niet verkondigden', 'dat elke profeet veel volgelingen had', 'dat de boodschappers niet in rang verschillen'], answer: 0, explain: 'Sommigen hadden één man bij zich, anderen niemand.', page: 22 },
    { type: 'tf', q: 'Wie één boodschapper loochent, loochent ze allemaal.', options: ['Juist', 'Onjuist'], answer: 0, explain: '"Het volk van Nūḥ loochende de boodschappers" (ash-Shuʿarāʾ 26:105).', page: 23 },
    { type: 'mc', q: 'Wat verschilt er tussen de profeten?', options: ['hun wetten', 'de oproep tot tawḥīd', 'de grondslag van de godsdienst', 'de onfeilbaarheid in de verkondiging'], answer: 0, explain: 'Hun godsdienst is één, hun wetten verschillen (al-Māʾida 5:48).', page: 23 }
  ]),
  note: 'De oefening van deze eenheid staat samen met die van eenheid 3 op p. 33. Het tweede deel van les 3 (geloof in de Laatste Dag) staat bij eenheid 3. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n3-aqeedah', chapter: '3', unit: 2, ar, nl }
