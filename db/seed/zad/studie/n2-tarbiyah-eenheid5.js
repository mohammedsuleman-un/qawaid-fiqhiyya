// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 5: المحبة (lessen 9–10, boek p. 39–42).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. De kopregel van p. 41 noemt per abuis الرجاء; de les gaat
// over de vruchten van de liefde voor Allah.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '39–42',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'أنس بن مالك', text: 'والذي نفسي بيده، لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده والناس أجمعين', takhrij: 'متفق عليه', note: 'وجوب المحبة.', pages: [39], nl: 'Bij Hem in Wiens hand mijn ziel is, niemand van jullie gelooft echt totdat ik hem dierbaarder ben dan zijn vader, zijn kind en alle mensen', nlNote: 'De plicht van liefde.' },
  { narrator: '', text: 'ولا يزال عبدي يتقرب إلي بالنوافل حتى أحبه', takhrij: 'رواه البخاري', note: 'حديث قدسي؛ من أسباب المحبة.', pages: [40], nl: 'En Mijn dienaar blijft Mij naderen met vrijwillige daden tot Ik hem liefheb', nlNote: 'Een ḥadīth qudsī; een oorzaak van liefde.' },
  { narrator: 'عائشة', text: 'أخبروه أن الله يحبه', takhrij: 'متفق عليه', note: 'في رجل كان يختم بـ﴿قل هو الله أحد﴾ وقال: لأنها صفة الرحمن وأنا أحب أن أقرأ بها.', pages: [41], nl: 'Vertel hem dat Allah hem liefheeft', nlNote: 'Over een man die steeds eindigde met "Zeg: Hij is Allah, de Ene" en zei: omdat het de beschrijving van de Barmhartige is, en ik houd ervan het te reciteren.' },
  { narrator: 'أبو هريرة', text: 'إذا أحب الله تعالى العبد نادى جبريل: إن الله يحب فلانا فأحبه، فيحبه جبريل، فينادي في أهل السماء… ثم يوضع له القبول في الأرض', takhrij: 'متفق عليه', note: 'محبة الملائكة وأهل السماء.', pages: [41], nl: 'Als Allah een dienaar liefheeft, roept Hij Jibrīl: Allah heeft die en die lief, heb hem dus lief. Jibrīl heeft hem lief en roept tot de bewoners van de hemel… daarna wordt hem op aarde aanvaarding gegeven', nlNote: 'De liefde van de engelen en de bewoners van de hemel.' },
  { narrator: '', text: 'ثلاث من كن فيه وجد حلاوة الإيمان: أن يكون الله ورسوله أحب إليه مما سواهما، وأن يحب المرء لا يحبه إلا لله، وأن يكره أن يعود في الكفر كما يكره أن يقذف في النار', takhrij: 'البخاري ومسلم', note: 'حلاوة الإيمان.', pages: [41], nl: 'Wie drie dingen heeft, vindt de zoetheid van het geloof: dat Allah en Zijn Boodschapper hem dierbaarder zijn dan al het andere, dat hij iemand alleen om Allah liefheeft, en dat hij er zo’n afkeer van heeft terug te keren tot ongeloof als hij afkeer heeft van in het vuur geworpen te worden', nlNote: 'De zoetheid van het geloof.' }
]

const TAKHRIJ_NL = { 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)', 'رواه البخاري': 'al-Bukhārī', 'البخاري ومسلم': 'al-Bukhārī en Muslim' }
const NARRATOR_NL = { 'أنس بن مالك': 'Anas ibn Mālik', 'عائشة': 'ʿĀʾisha', 'أبو هريرة': 'Abū Hurayra' }

const PERSONS = [
  ['anas-ibn-malik', 'text', [39], 'روى «لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده».', 'Overleveraar van "niemand gelooft echt totdat ik hem dierbaarder ben dan zijn vader en kind".'],
  ['ibn-rajab', 'text', [39], 'قال: محبة الرسول تابعة لمحبة الله، فكيف بمحبة الله؟', 'Zei: de liefde voor de Boodschapper volgt de liefde voor Allah; hoe zit het dan met de liefde voor Allah zelf?'],
  ['ibn-al-qayyim', 'text', [40], 'ذكر عشرة أسباب جالبة لمحبة الله.', 'Noemde tien oorzaken die liefde voor Allah brengen.'],
  ['ibn-masud', 'text', [41], 'قال: من كان يحب أن يعلم أنه يحب الله فليعرض نفسه على القرآن.', 'Zei: wie wil weten of hij Allah liefheeft, laat hij zichzelf aan de Koran toetsen.'],
  ['sufyan-ibn-uyayna', 'text', [41], 'قال: لا تبلغوا ذروة هذا الأمر حتى لا يكون شيء أحب إليكم من الله، ومن أحب القرآن فقد أحب الله.', 'Zei: jullie bereiken de top hiervan pas als niets jullie dierbaarder is dan Allah, en wie de Koran liefheeft, heeft Allah lief.'],
  ['aisha', 'text', [41], 'روت قصة الرجل الذي كان يختم بسورة الإخلاص.', 'Overleverde het verhaal van de man die steeds met soera al-Ikhlāṣ eindigde.'],
  ['abu-hurayra', 'text', [41], 'روى «إذا أحب الله العبد نادى جبريل».', 'Overleveraar van "als Allah een dienaar liefheeft, roept Hij Jibrīl".']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'المحبة',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'تعريف المحبة وحكمها، والأسباب العشرة الجالبة لمحبة الله، وعلامتها، وثمراتها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الخامسة في خريطة واحدة',
    intro: 'المحبة وأسبابها وثمراتها.',
    root: { label: 'المحبة', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'تعريفها وحكمها', sub: 'الدرس ٩', page: 39, children: ['ميل القلب', 'واجبة', 'محبة الرسول تبع'] },
      { label: 'أسبابها', sub: 'الدرس ٩', page: 40, children: ['تدبر القرآن', 'النوافل', 'دوام الذكر'] },
      { label: 'علامتها', sub: 'الدرس ١٠', page: 41, children: ['محبة القرآن'] },
      { label: 'ثمراتها', sub: 'الدرس ١٠', page: 41, children: ['محبة الله', 'محبة الملائكة', 'حلاوة الإيمان', 'النجاة من النار'] }
    ]
  },
  points: [
    { text: 'المحبة قرة عين المحب، تجعل الطاعة غير ثقيلة عليه.', page: 39 },
    { text: 'المحبة اصطلاحًا ميل شغاف القلب إلى الله تعالى وإيثاره على غيره.', page: 39 },
    { text: 'محبة الله واجبة على كل أحد، وقد توعد الله من قدم عليه غيره.', page: 39 },
    { text: 'محبة الرسول ﷺ تابعة لمحبة الله، ولا يؤمن العبد حتى يكون أحب إليه من نفسه وولده ووالده.', page: 39 },
    { text: 'من علامات محبة الله محبة القرآن، فإنه كلام الله.', page: 41 },
    { text: 'من ثمرات محبة الله محبة الله للعبد، ومحبة الملائكة له، وحلاوة الإيمان، والنجاة من النار.', page: 41 }
  ],
  terms: [
    { term: 'المحبة', translit: 'al-maḥabba', meaning: 'لغة: ميل القلب للشيء ولزومه وهيجانه إليه؛ اصطلاحًا: ميل شغاف القلب إلى الله تعالى وإيثاره على غيره.', explanation: '', notes: [], page: 39 },
    { term: 'حلاوة الإيمان', translit: 'ḥalāwat al-īmān', meaning: 'لذة يجدها من اجتمعت فيه الخصال الثلاث.', explanation: '', notes: [], page: 41 },
    { term: 'القبول في الأرض', translit: 'al-qabūl fī al-arḍ', meaning: 'محبة الناس للعبد بعد محبة الله والملائكة له.', explanation: '', notes: [], page: 41 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'الأسباب العشرة الجالبة للمحبة',
      intro: 'كما ذكرها ابن القيم في الكتاب.',
      nodes: [
        { label: 'قراءة القرآن بالتدبر' },
        { label: 'التقرب بالنوافل بعد الفرائض' },
        { label: 'دوام الذكر', sub: 'باللسان والقلب والعمل والحال' },
        { label: 'إيثار محابه على محابك' },
        { label: 'مطالعة القلب لأسمائه وصفاته' },
        { label: 'مشاهدة بره وإحسانه ونعمه' },
        { label: 'انكسار القلب بين يديه', sub: 'وهو أعجبها' },
        { label: 'الخلوة به وقت النزول الإلهي', sub: 'مع القرآن والاستغفار والتوبة' },
        { label: 'مجالسة المحبين الصادقين' },
        { label: 'مباعدة كل سبب يحول بين القلب وبين الله' }
      ],
      page: 40
    }
  ],
  sections: [
    { title: 'المطيع المحب والمطيع المكره', text: 'المحبة قرة عين المحب، فلا تكون الطاعة عليه ثقيلة، بخلاف من يطيع مكرهًا.', page: 39 },
    { title: 'محبة الرسول ﷺ', text: 'قال ابن رجب: محبة الرسول تابعة لمحبة الله، فإذا كان الإيمان لا يتم حتى يقدم العبد النبي ﷺ على نفسه وولده ووالده، فكيف بمحبة الله؟', page: 39 },
    { title: 'علامة المحبة', text: 'قال ابن مسعود: من كان يحب أن يعلم أنه يحب الله فليعرض نفسه على القرآن، فإن أحب القرآن فهو يحب الله، فإنما القرآن كلام الله.', page: 41 },
    { title: 'النجاة من النار', text: 'قال تعالى: ﴿والذين آمنوا أشد حبًّا لله﴾ [البقرة: ١٦٥].', page: 42 }
  ],
  keycards: [
    { kind: 'definitie', title: 'المحبة', items: ['ميل شغاف القلب إلى الله تعالى وإيثاره على غيره'], page: 39, origin: 'boek' },
    { kind: 'opsomming', title: 'ثمرات محبة الله', items: ['محبة الله للعبد', 'محبة الملائكة وأهل السماء والقبول في الأرض', 'حلاوة الإيمان', 'النجاة من النار'], page: 41, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'محبة الله واجبة، ومحبة الرسول ﷺ تابعة لها.',
    'من أسباب المحبة التدبر والنوافل ودوام الذكر.',
    'علامة محبة الله محبة القرآن.',
    'من أحبه الله أحبته الملائكة ووضع له القبول في الأرض.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما حكم محبة الله؟', options: ['واجبة', 'مستحبة', 'مباحة', 'خاصة بالعلماء'], answer: 0, explain: 'وتوعد الله من قدم عليه غيره.', page: 39 },
    { type: 'mc', q: 'ما أعجب الأسباب الجالبة للمحبة عند ابن القيم؟', options: ['انكسار القلب بين يدي الله', 'كثرة الكلام', 'العزلة عن الناس كلهم', 'كثرة الأكل'], answer: 0, explain: 'كما في الأسباب العشرة.', page: 40 },
    { type: 'tf', q: 'من أحب القرآن فقد أحب الله.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما قال ابن مسعود وسفيان بن عيينة.', page: 41 },
    { type: 'mc', q: 'كم خصلة من كن فيه وجد حلاوة الإيمان؟', options: ['ثلاث', 'خمس', 'سبع', 'اثنتان'], answer: 0, explain: '«ثلاث من كن فيه».', page: 41 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٤٢.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'Liefde',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'De betekenis van liefde en het oordeel erover, de tien oorzaken die liefde voor Allah brengen, het kenteken ervan, en de vruchten.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 5 in één kaart',
    intro: 'Liefde, de oorzaken en de vruchten.',
    root: { label: 'Liefde', sub: 'Eenheid 5' },
    nodes: [
      { label: 'Betekenis en oordeel', sub: 'les 9', page: 39, children: ['neiging van het hart', 'verplicht', 'liefde voor de Boodschapper volgt'] },
      { label: 'Oorzaken', sub: 'les 9', page: 40, children: ['de Koran overdenken', 'vrijwillige daden', 'voortdurend gedenken'] },
      { label: 'Kenteken', sub: 'les 10', page: 41, children: ['liefde voor de Koran'] },
      { label: 'Vruchten', sub: 'les 10', page: 41, children: ['Allahs liefde', 'liefde van de engelen', 'zoetheid van het geloof', 'redding van het Vuur'] }
    ]
  },
  points: [
    { text: 'Liefde is een ooglust voor wie liefheeft; gehoorzaamheid is voor hem geen last.', page: 39 },
    { text: 'In de leer is liefde de neiging van het diepst van het hart naar Allah en Hem boven alles verkiezen.', page: 39 },
    { text: 'Liefde voor Allah is voor iedereen verplicht; Allah dreigt wie anderen boven Hem stelt.', page: 39 },
    { text: 'De liefde voor de Boodschapper ﷺ volgt de liefde voor Allah; niemand gelooft echt totdat hij hem dierbaarder is dan zichzelf, zijn kind en zijn vader.', page: 39 },
    { text: 'Een kenteken van liefde voor Allah is liefde voor de Koran, want die is het woord van Allah.', page: 41 },
    { text: 'Vruchten van liefde voor Allah zijn Allahs liefde voor de dienaar, de liefde van de engelen, de zoetheid van het geloof en redding van het Vuur.', page: 41 }
  ],
  terms: [
    { term: 'المحبة', translit: 'al-maḥabba', meaning: 'Letterlijk: de neiging van het hart naar iets, eraan vasthouden en ernaar verlangen; in de leer: de neiging van het diepst van het hart naar Allah en Hem boven alles verkiezen.', explanation: '', notes: [], page: 39 },
    { term: 'حلاوة الإيمان', translit: 'ḥalāwat al-īmān', meaning: 'De zoetheid die wie de drie eigenschappen heeft, in het geloof proeft.', explanation: '', notes: [], page: 41 },
    { term: 'القبول في الأرض', translit: 'al-qabūl fī al-arḍ', meaning: 'Aanvaarding op aarde: de liefde van de mensen voor de dienaar, na de liefde van Allah en de engelen.', explanation: '', notes: [], page: 41 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De tien oorzaken van liefde',
      intro: 'Zoals Ibn al-Qayyim ze noemt in het boek.',
      nodes: [
        { label: 'De Koran lezen en overdenken' },
        { label: 'Na de plichten Allah naderen met vrijwillige daden' },
        { label: 'Voortdurend gedenken', sub: 'met tong, hart, daad en toestand' },
        { label: 'Wat Hij liefheeft verkiezen boven wat jij liefhebt' },
        { label: 'Het hart laten kijken naar Zijn namen en eigenschappen' },
        { label: 'Zijn goedheid, weldaad en gunsten zien' },
        { label: 'Het hart voor Hem breken', sub: 'het wonderlijkste van allemaal' },
        { label: 'Alleen met Hem zijn bij de goddelijke neerdaling', sub: 'met Koran, vergeving vragen en berouw' },
        { label: 'Zitten met oprechte liefhebbers' },
        { label: 'Wegblijven van alles wat tussen het hart en Allah komt' }
      ],
      page: 40
    }
  ],
  sections: [
    { title: 'Gehoorzamen uit liefde of uit dwang', text: 'Liefde is een ooglust voor wie liefheeft, dus gehoorzaamheid valt hem niet zwaar, anders dan bij wie gedwongen gehoorzaamt.', page: 39 },
    { title: 'Liefde voor de Boodschapper ﷺ', text: 'Ibn Rajab zei: de liefde voor de Boodschapper volgt de liefde voor Allah. Als het geloof pas volledig is wanneer de dienaar de Profeet ﷺ boven zichzelf, zijn kind en zijn vader stelt, hoe zit het dan met de liefde voor Allah?', page: 39 },
    { title: 'Het kenteken van liefde', text: 'Ibn Masʿūd zei: wie wil weten of hij Allah liefheeft, laat hij zichzelf aan de Koran toetsen; houdt hij van de Koran, dan houdt hij van Allah, want de Koran is het woord van Allah.', page: 41 },
    { title: 'Redding van het Vuur', text: 'Allah zegt: "En wie geloven, hebben Allah vuriger lief" (al-Baqara 2:165).', page: 42 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Liefde', items: ['de neiging van het diepst van het hart naar Allah en Hem boven alles verkiezen'], page: 39, origin: 'boek' },
    { kind: 'opsomming', title: 'Vruchten van liefde voor Allah', items: ['Allahs liefde voor de dienaar', 'liefde van de engelen en de hemelbewoners, en aanvaarding op aarde', 'de zoetheid van het geloof', 'redding van het Vuur'], page: 41, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Liefde voor Allah is verplicht; liefde voor de Boodschapper ﷺ volgt eruit.',
    'Oorzaken van liefde zijn overdenking, vrijwillige daden en voortdurend gedenken.',
    'Het kenteken van liefde voor Allah is liefde voor de Koran.',
    'Wie Allah liefheeft, hebben de engelen lief, en hij krijgt aanvaarding op aarde.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is het oordeel over liefde voor Allah?', options: ['verplicht', 'aanbevolen', 'toegestaan', 'alleen voor geleerden'], answer: 0, explain: 'Allah dreigt wie anderen boven Hem stelt.', page: 39 },
    { type: 'mc', q: 'Wat is volgens Ibn al-Qayyim de wonderlijkste oorzaak van liefde?', options: ['het hart voor Allah breken', 'veel praten', 'je van alle mensen afzonderen', 'veel eten'], answer: 0, explain: 'Zoals bij de tien oorzaken.', page: 40 },
    { type: 'tf', q: 'Wie de Koran liefheeft, heeft Allah lief.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals Ibn Masʿūd en Sufyān ibn ʿUyayna zeiden.', page: 41 },
    { type: 'mc', q: 'Hoeveel eigenschappen geven de zoetheid van het geloof?', options: ['drie', 'vijf', 'zeven', 'twee'], answer: 0, explain: '"Wie drie dingen heeft."', page: 41 }
  ]),
  note: 'Oefening van het boek op p. 42. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '9', unit: 5, ar, nl }
