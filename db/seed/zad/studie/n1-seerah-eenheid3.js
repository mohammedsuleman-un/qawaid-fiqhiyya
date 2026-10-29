// Hoofdstukkaart bij السيرة النبوية (١), eenheid 3: أزواجه وأولاده (les 4, boek p. 25–30).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek.
// Deze les noemt geen hadith met bron; het hadith-tabblad blijft daarom leeg.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (١)، سلسلة زاد العلمية',
  pages: '25–30',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Seerah/page/n{p}/mode/1up'
}

const WIFE = 'من أزواجه ﷺ بعد خديجة.'
const WIFE_NL = 'Een van zijn vrouwen ﷺ na Khadīja.'

const PERSONS = [
  ['khadija', 'text', [27], 'أول زوجاته، لم يتزوج عليها في حياتها، وولدت له كل ولده إلا إبراهيم.', 'Zijn eerste vrouw; tijdens haar leven trouwde hij niemand anders, en zij baarde al zijn kinderen behalve Ibrāhīm.'],
  ['mariya-al-qibtiyya', 'text', [27], 'أهداها له مقوقس مصر، وولدت له إبراهيم.', 'Geschonken door de Muqawqis van Egypte; zij baarde hem Ibrāhīm.'],
  ['sawda-bint-zama', 'text', [28], WIFE, WIFE_NL],
  ['aisha', 'text', [28], WIFE, WIFE_NL],
  ['hafsa-bint-umar', 'text', [28], WIFE, WIFE_NL],
  ['zaynab-bint-khuzayma', 'text', [28], WIFE, WIFE_NL],
  ['umm-salama', 'text', [28], 'هند بنت أبي أمية المخزومية، ' + WIFE, 'Hind bint Abī Umayya al-Makhzūmiyya. ' + WIFE_NL],
  ['zaynab-bint-jahsh', 'text', [28], WIFE, WIFE_NL],
  ['juwayriya-bint-al-harith', 'text', [28], 'كان اسمها برة فسماها جويرية. ' + WIFE, 'Haar naam was Barra; hij noemde haar Juwayriya. ' + WIFE_NL],
  ['umm-habiba', 'text', [28], 'رملة بنت أبي سفيان، ' + WIFE, 'Ramla bint Abī Sufyān. ' + WIFE_NL],
  ['safiyya-bint-huyayy', 'text', [28], WIFE, WIFE_NL],
  ['maymuna-bint-al-harith', 'text', [28], 'الهلالية، ' + WIFE, 'al-Hilāliyya. ' + WIFE_NL],
  ['zaynab-bint-rasul-allah', 'text', [27, 29], 'كبرى بناته ﷺ.', 'Zijn oudste dochter ﷺ.'],
  ['ruqayya-bint-rasul-allah', 'text', [27, 29], 'من بناته ﷺ.', 'Een van zijn dochters ﷺ.'],
  ['umm-kulthum-bint-rasul-allah', 'text', [27, 29], 'من بناته ﷺ.', 'Een van zijn dochters ﷺ.'],
  ['fatima', 'text', [27, 29], 'من بناته ﷺ، والوحيدة من أولاده التي ماتت بعده.', 'Een van zijn dochters ﷺ, het enige van zijn kinderen dat na hem stierf.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'أزواجه وأولاده ﷺ',
  subtitle: 'درس واحد في صفحة واحدة',
  summary: 'زواجه ﷺ بخديجة بعد رحلة التجارة إلى الشام، ومنزلتها، ثم أزواجه بعدها، وأولاده الثلاثة من الذكور وبناته الأربع.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'أزواجه وأولاده', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'زواجه بخديجة', sub: 'الدرس ٤', page: 27, children: ['التجارة إلى الشام', 'ميسرة', 'نفيسة بنت منية'] },
      { label: 'زوجاته بعد خديجة', sub: 'الدرس ٤', page: 28, children: ['سودة', 'عائشة', 'حفصة', 'أم سلمة', 'وغيرهن'] },
      { label: 'أولاده', sub: 'الدرس ٤', page: 29, children: ['القاسم', 'عبد الله', 'إبراهيم', 'البنات الأربع'] }
    ]
  },
  points: [
    { text: 'خرج ﷺ في الخامسة والعشرين تاجرًا إلى الشام في مال خديجة مع غلامها ميسرة.', page: 27 },
    { text: 'رأت خديجة في مالها من الأمانة والبركة ما لم تر قبل، وأخبرها ميسرة بشمائله.', page: 27 },
    { text: 'خديجة أول امرأة تزوجها، ولم يتزوج عليها في حياتها.', page: 27 },
    { text: 'ولدت له خديجة كل ولده إلا إبراهيم، فأمه مارية القبطية.', page: 27 },
    { text: 'ماتوا جميعًا في حياته إلا فاطمة فماتت بعده.', page: 29 }
  ],
  terms: [
    { term: 'الطيب والطاهر', translit: 'aṭ-ṭayyib wa-ṭ-ṭāhir', meaning: 'لقبا عبد الله ابن النبي ﷺ.', explanation: 'لأنه ولد بعد النبوة.', notes: [], page: 29 },
    { term: 'المقوقس', translit: 'al-muqawqis', meaning: 'حاكم مصر.', explanation: 'أهدى للنبي ﷺ مارية القبطية.', notes: [], page: 27 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'كيف تزوج خديجة',
      intro: 'كما في الدرس الرابع.',
      nodes: [
        { label: 'التجارة في مالها', sub: 'إلى الشام مع ميسرة، في الخامسة والعشرين', page: 27 },
        { label: 'الأمانة والبركة', sub: 'رأتها في مالها، وأخبرها ميسرة بشمائله', page: 27 },
        { label: 'نفيسة بنت منية', sub: 'عرضت عليه الزواج فرضي', page: 27 }
      ]
    },
    {
      type: 'cards',
      title: 'أزواجه بعد خديجة',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'سودة بنت زمعة', page: 28 },
        { label: 'عائشة بنت أبي بكر', page: 28 },
        { label: 'حفصة بنت عمر', page: 28 },
        { label: 'زينب بنت خزيمة', page: 28 },
        { label: 'أم سلمة هند بنت أبي أمية', page: 28 },
        { label: 'زينب بنت جحش', page: 28 },
        { label: 'جويرية بنت الحارث', page: 28 },
        { label: 'أم حبيبة رملة بنت أبي سفيان', page: 28 },
        { label: 'صفية بنت حيي', page: 28 },
        { label: 'ميمونة بنت الحارث', page: 28 }
      ]
    },
    {
      type: 'compare',
      title: 'أولاده ﷺ',
      intro: 'ثلاثة أبناء وأربع بنات.',
      columns: ['الأبناء', 'البنات'],
      rows: [
        { label: 'من خديجة', cells: ['القاسم، وبه كان يكنى؛ وعبد الله الطيب الطاهر', 'زينب كبراهن، ورقية، وأم كلثوم، وفاطمة'] },
        { label: 'من مارية', cells: ['إبراهيم، ولد بالمدينة سنة ثمان', '—'] },
        { label: 'الوفاة', cells: ['ماتوا في حياته', 'متن في حياته إلا فاطمة'] }
      ],
      page: 29
    }
  ],
  sections: [
    { title: 'خديجة قبل الزواج', text: 'كانت امرأة تاجرة ذات شرف ومال تستأجر الرجال في مالها؛ بلغها صدق حديثه وعظم أمانته وكرم أخلاقه فعرضت عليه أن يخرج في مالها إلى الشام وتعطيه أفضل ما كانت تعطي غيره.', more: '', page: 27 },
    { title: 'الخطبة والزواج', text: 'كان السادة يحرصون على زواجها فتأبى؛ فلما رأت أمانته وبركته تحدثت بما في نفسها إلى صديقتها نفيسة بنت منية، فعرضت عليه الزواج فرضي، وكانت يومئذ أفضل نساء قومها نسبًا وثروة وعقلًا.', more: '', page: 27 },
    { title: 'منزلة خديجة', text: 'أول امرأة يتزوجها، ولم يتزوج عليها في حياتها، وولدت له كل ولده إلا إبراهيم.', more: '', page: 27 },
    { title: 'أولاده', text: 'القاسم وبه كان يكنى، ولد قبل النبوة وتوفي وهو ابن سنتين؛ وعبد الله سمي الطيب والطاهر لأنه ولد بعد النبوة؛ وإبراهيم ولد بالمدينة سنة ثمان من الهجرة؛ وبناته زينب ورقية وأم كلثوم وفاطمة.', more: '', page: 29 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أبناؤه ﷺ', items: ['القاسم', 'عبد الله (الطيب الطاهر)', 'إبراهيم'], page: 29, origin: 'boek' },
    { kind: 'opsomming', title: 'بناته ﷺ', items: ['زينب', 'رقية', 'أم كلثوم', 'فاطمة'], page: 29, origin: 'boek' },
    { kind: 'uitzondering', title: 'أولاده من غير خديجة', items: ['إبراهيم، أمه مارية القبطية.'], page: 27, origin: 'boek' },
    { kind: 'uitzondering', title: 'من مات من أولاده بعده', items: ['فاطمة وحدها.'], page: 29, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'تزوج خديجة بعد أن تاجر في مالها إلى الشام.',
    'لم يتزوج عليها في حياتها، وولدت له كل ولده إلا إبراهيم.',
    'أبناؤه: القاسم وعبد الله وإبراهيم؛ وبناته: زينب ورقية وأم كلثوم وفاطمة.',
    'لم يمت أحد من أولاده بعده إلا فاطمة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'كم كان عمره ﷺ حين خرج تاجرًا في مال خديجة؟', options: ['خمسًا وعشرين', 'أربعين', 'اثنتي عشرة', 'ثلاثين'], answer: 0, explain: 'خرج إلى الشام مع غلامها ميسرة.', page: 27 },
    { type: 'mc', q: 'من عرض عليه الزواج بخديجة؟', options: ['نفيسة بنت منية', 'ميسرة', 'أبو طالب', 'حليمة'], answer: 0, explain: 'صديقة خديجة.', page: 27 },
    { type: 'mc', q: 'من أم إبراهيم ابن النبي ﷺ؟', options: ['مارية القبطية', 'خديجة', 'عائشة', 'سودة'], answer: 0, explain: 'أهداها له مقوقس مصر.', page: 27 },
    { type: 'tf', q: 'تزوج النبي ﷺ على خديجة في حياتها.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لم يتزوج عليها في حياتها.', page: 27 },
    { type: 'mc', q: 'لماذا سمي عبد الله الطيب والطاهر؟', options: ['لأنه ولد بعد النبوة', 'لأنه كان أكبر أولاده', 'لأنه ولد بالمدينة', 'لأنه عاش طويلًا'], answer: 0, explain: 'كما في الكتاب.', page: 29 },
    { type: 'mc', q: 'أي أولاده ﷺ ماتت بعده؟', options: ['فاطمة', 'زينب', 'رقية', 'أم كلثوم'], answer: 0, explain: 'ماتوا جميعًا في حياته عداها.', page: 29 }
  ]),
  note: 'نشاط الكتاب في صفحة ٣٠.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Zijn vrouwen en kinderen ﷺ',
  subtitle: 'Eén les op één pagina',
  summary: 'Het huwelijk van de Profeet ﷺ met Khadīja na de handelsreis naar Syrië en haar positie, daarna zijn vrouwen na haar, en zijn drie zonen en vier dochters.',
  source: { ...source, label: 'Kitāb as-Sīra an-nabawiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'Zijn vrouwen en kinderen', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Huwelijk met Khadīja', sub: 'les 4', page: 27, children: ['handel naar Syrië', 'Maysara', 'Nafīsa bint Munya'] },
      { label: 'Zijn vrouwen na Khadīja', sub: 'les 4', page: 28, children: ['Sawda', 'ʿĀʾisha', 'Ḥafṣa', 'Umm Salama', 'en anderen'] },
      { label: 'Zijn kinderen', sub: 'les 4', page: 29, children: ['al-Qāsim', 'ʿAbdallāh', 'Ibrāhīm', 'de vier dochters'] }
    ]
  },
  points: [
    { text: 'Op zijn vijfentwintigste reisde hij ﷺ als handelaar naar Syrië met het bezit van Khadīja, samen met haar knecht Maysara.', page: 27 },
    { text: 'Khadīja zag in haar bezit betrouwbaarheid en zegen zoals nooit tevoren, en Maysara vertelde haar over zijn karakter.', page: 27 },
    { text: 'Khadīja was de eerste vrouw met wie hij trouwde; tijdens haar leven trouwde hij geen andere.', page: 27 },
    { text: 'Khadīja baarde al zijn kinderen behalve Ibrāhīm, wiens moeder Māriya de Koptische was.', page: 27 },
    { text: 'Ze stierven allemaal tijdens zijn leven, behalve Fāṭima, die na hem stierf.', page: 29 }
  ],
  terms: [
    { term: 'الطيب والطاهر', translit: 'aṭ-ṭayyib wa-ṭ-ṭāhir', meaning: 'De goede en de reine: bijnamen van ʿAbdallāh, de zoon van de Profeet ﷺ.', explanation: 'Omdat hij na het profeetschap geboren werd.', notes: [], page: 29 },
    { term: 'المقوقس', translit: 'al-muqawqis', meaning: 'De heerser van Egypte.', explanation: 'Hij schonk de Profeet ﷺ Māriya de Koptische.', notes: [], page: 27 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'Hoe hij met Khadīja trouwde',
      intro: 'Zoals in les 4.',
      nodes: [
        { label: 'Handel met haar bezit', sub: 'naar Syrië met Maysara, op zijn vijfentwintigste', page: 27 },
        { label: 'Betrouwbaarheid en zegen', sub: 'zij zag het in haar bezit, en Maysara vertelde over zijn karakter', page: 27 },
        { label: 'Nafīsa bint Munya', sub: 'stelde hem het huwelijk voor, en hij stemde in', page: 27 }
      ]
    },
    {
      type: 'cards',
      title: 'Zijn vrouwen na Khadīja',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Sawda bint Zamʿa', page: 28 },
        { label: 'ʿĀʾisha bint Abī Bakr', page: 28 },
        { label: 'Ḥafṣa bint ʿUmar', page: 28 },
        { label: 'Zaynab bint Khuzayma', page: 28 },
        { label: 'Umm Salama Hind bint Abī Umayya', page: 28 },
        { label: 'Zaynab bint Jaḥsh', page: 28 },
        { label: 'Juwayriya bint al-Ḥārith', page: 28 },
        { label: 'Umm Ḥabība Ramla bint Abī Sufyān', page: 28 },
        { label: 'Ṣafiyya bint Ḥuyayy', page: 28 },
        { label: 'Maymūna bint al-Ḥārith', page: 28 }
      ]
    },
    {
      type: 'compare',
      title: 'Zijn kinderen ﷺ',
      intro: 'Drie zonen en vier dochters.',
      columns: ['Zonen', 'Dochters'],
      rows: [
        { label: 'Van Khadīja', cells: ['al-Qāsim, naar wie hij Abū l-Qāsim heette; en ʿAbdallāh, de goede en reine', 'Zaynab, de oudste; Ruqayya; Umm Kulthūm; Fāṭima'] },
        { label: 'Van Māriya', cells: ['Ibrāhīm, geboren in Medina in het jaar 8', '—'] },
        { label: 'Overlijden', cells: ['stierven tijdens zijn leven', 'stierven tijdens zijn leven, behalve Fāṭima'] }
      ],
      page: 29
    }
  ],
  sections: [
    { title: 'Khadīja vóór het huwelijk', text: 'Zij was een handelaarster van aanzien en vermogen die mannen inhuurde voor haar handel. Zij hoorde van zijn eerlijkheid, grote betrouwbaarheid en edel karakter, en vroeg hem met haar bezit naar Syrië te gaan, tegen een betere vergoeding dan anderen kregen.', more: '', page: 27 },
    { title: 'Het aanzoek en het huwelijk', text: 'Voorname mannen wilden met haar trouwen, maar zij weigerde. Toen zij zijn betrouwbaarheid en de zegen zag, vertelde zij haar vriendin Nafīsa bint Munya wat zij voelde; die stelde hem het huwelijk voor en hij stemde in. Zij was toen de voortreffelijkste vrouw van haar volk in afkomst, vermogen en verstand.', more: '', page: 27 },
    { title: 'De positie van Khadīja', text: 'Zij was de eerste vrouw met wie hij trouwde, tijdens haar leven trouwde hij met niemand anders, en zij baarde al zijn kinderen behalve Ibrāhīm.', more: '', page: 27 },
    { title: 'Zijn kinderen', text: 'al-Qāsim, naar wie hij Abū l-Qāsim heette, werd vóór het profeetschap geboren en stierf op tweejarige leeftijd; ʿAbdallāh werd de goede en de reine genoemd omdat hij na het profeetschap geboren werd; Ibrāhīm werd in Medina geboren in het jaar 8 na de hijra; zijn dochters waren Zaynab, Ruqayya, Umm Kulthūm en Fāṭima.', more: '', page: 29 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Zijn zonen ﷺ', items: ['al-Qāsim', 'ʿAbdallāh (de goede en reine)', 'Ibrāhīm'], page: 29, origin: 'boek' },
    { kind: 'opsomming', title: 'Zijn dochters ﷺ', items: ['Zaynab', 'Ruqayya', 'Umm Kulthūm', 'Fāṭima'], page: 29, origin: 'boek' },
    { kind: 'uitzondering', title: 'Kind dat niet van Khadīja was', items: ['Ibrāhīm; zijn moeder was Māriya de Koptische.'], page: 27, origin: 'boek' },
    { kind: 'uitzondering', title: 'Kind dat na hem stierf', items: ['Alleen Fāṭima.'], page: 29, origin: 'boek' }
  ],
  hadith: [],
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Hij trouwde met Khadīja nadat hij met haar bezit naar Syrië had gehandeld.',
    'Tijdens haar leven trouwde hij geen andere vrouw; zij baarde al zijn kinderen behalve Ibrāhīm.',
    'Zonen: al-Qāsim, ʿAbdallāh en Ibrāhīm; dochters: Zaynab, Ruqayya, Umm Kulthūm en Fāṭima.',
    'Van zijn kinderen stierf alleen Fāṭima na hem.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe oud was hij ﷺ toen hij met het bezit van Khadīja op handelsreis ging?', options: ['vijfentwintig', 'veertig', 'twaalf', 'dertig'], answer: 0, explain: 'Hij ging naar Syrië met haar knecht Maysara.', page: 27 },
    { type: 'mc', q: 'Wie stelde hem het huwelijk met Khadīja voor?', options: ['Nafīsa bint Munya', 'Maysara', 'Abū Ṭālib', 'Ḥalīma'], answer: 0, explain: 'Een vriendin van Khadīja.', page: 27 },
    { type: 'mc', q: 'Wie was de moeder van Ibrāhīm, de zoon van de Profeet ﷺ?', options: ['Māriya de Koptische', 'Khadīja', 'ʿĀʾisha', 'Sawda'], answer: 0, explain: 'De Muqawqis van Egypte had haar geschonken.', page: 27 },
    { type: 'tf', q: 'De Profeet ﷺ trouwde tijdens het leven van Khadīja nog een andere vrouw.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Tijdens haar leven trouwde hij niemand anders.', page: 27 },
    { type: 'mc', q: 'Waarom werd ʿAbdallāh de goede en de reine genoemd?', options: ['hij werd na het profeetschap geboren', 'hij was de oudste', 'hij werd in Medina geboren', 'hij werd oud'], answer: 0, explain: 'Zoals in het boek.', page: 29 },
    { type: 'mc', q: 'Welk kind van hem ﷺ stierf na hem?', options: ['Fāṭima', 'Zaynab', 'Ruqayya', 'Umm Kulthūm'], answer: 0, explain: 'Alle anderen stierven tijdens zijn leven.', page: 29 }
  ]),
  note: 'Oefening van het boek op p. 30.'
}

export default { book: 'zad-n1-seerah', chapter: '4', unit: 3, ar, nl }
