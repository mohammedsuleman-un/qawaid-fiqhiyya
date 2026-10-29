// Hoofdstukkaart bij اللغة العربية (٢), eenheid 3: الأفعال المتعدية لأكثر من مفعول (lessen 20–24, boek p. 74–83).
// Volgt de derde وحدة van het boek. Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand.
// Delen van les 21 en 22 staan in het boek "alleen ter kennisname"; de kaart vermeldt dat.
// Geen hadith en geen personen in deze lessen. Op p. 79 is één werkwoord onduidelijk gedrukt (ألبس of أنشد);
// de kaart volgt het schema op p. 73 (ألبس).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (٢)، سلسلة زاد العلمية',
  pages: '74–83',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_ArabicLanguage/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'الأفعال المتعدية لأكثر من مفعول',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'الأفعال التي تنصب مفعولين أصلهما المبتدأ والخبر (ظن وأخواتها: أفعال القلوب وأفعال التحويل)، والتي تنصب مفعولين ليس أصلهما المبتدأ والخبر، والتي تنصب ثلاثة مفاعيل.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'الوحدة الثالثة من الكتاب: موضوعات الدروس الخمسة.',
    root: { label: 'المتعدي لأكثر من مفعول', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'أفعال القلوب', sub: 'الدرسان ٢٠–٢١', page: 75, children: ['اليقين', 'الرجحان'] },
      { label: 'أفعال التحويل', sub: 'الدرس ٢٢', page: 76, children: ['اتخذ، جعل، صيّر، ردّ، ترك'] },
      { label: 'مفعولان ليس أصلهما المبتدأ والخبر', sub: 'الدرس ٢٣', page: 79, children: ['أعطى، سأل، منح، منع، كسا، ألبس، علّم'] },
      { label: 'ثلاثة مفاعيل', sub: 'الدرس ٢٤', page: 81, children: ['أرى، أعلم', 'نبّأ، أنبأ، خبّر، أخبر، حدّث'] }
    ]
  },
  points: [
    { text: 'من الأفعال ما ينصب مفعولين، ومنها ما ينصب ثلاثة مفاعيل.', page: 74 },
    { text: 'ظن وأخواتها تدخل على المبتدأ والخبر فتنصبهما مفعولين: ظننت الرجل حاضرًا.', page: 74 },
    { text: 'سميت أفعال القلوب لأن معانيها قائمة بالقلب، وهي يقين ورجحان.', page: 75 },
    { text: 'أفعال اليقين: وجد، رأى، علم، درى، ألفى، تعلّم؛ وأفعال الرجحان: ظن، حسب، خال، زعم، عدّ، هب.', page: 75 },
    { text: 'أفعال التحويل: اتخذ، جعل، صيّر، ردّ، ترك، وكل فعل بمعنى صيّر: ﴿وجعل الليل سكنًا﴾.', page: 76 },
    { text: 'رأى البصرية تنصب مفعولًا واحدًا، ورأى القلبية تنصب مفعولين؛ وهب بمعنى افترض تنصب مفعولين، وبمعنى أعطى لا.', page: 77 },
    { text: 'أعطى وسأل ومنح ومنع وكسا وألبس وعلّم تنصب مفعولين ليس أصلهما المبتدأ والخبر: ﴿فكسونا العظام لحمًا﴾.', page: 79 },
    { text: 'أرى وأعلم ونبّأ وأنبأ وخبّر وأخبر وحدّث تنصب ثلاثة مفاعيل: أعلمته محمدًا مسافرًا.', page: 81 }
  ],
  terms: [
    { term: 'أفعال القلوب', translit: 'afʿāl al-qulūb', meaning: 'أفعال تنصب مفعولين أصلهما المبتدأ والخبر، ومعانيها قائمة بالقلب.', explanation: 'وتسمى أفعال الشك واليقين.', notes: [], page: 74 },
    { term: 'أفعال اليقين', translit: 'afʿāl al-yaqīn', meaning: 'ما يدل على اليقين بالخبر.', explanation: '﴿ووجدك عائلًا فأغنى﴾.', notes: [], page: 75 },
    { term: 'أفعال الرجحان', translit: 'afʿāl ar-rujḥān', meaning: 'ما يدل على رجحان وقوع الخبر.', explanation: 'ظن المعلم الاختبار سهلًا.', notes: [], page: 76 },
    { term: 'أفعال التحويل', translit: 'afʿāl at-taḥwīl', meaning: 'أفعال بمعنى صيّر تنصب مفعولين أصلهما المبتدأ والخبر.', explanation: 'وتسمى أفعال التصيير.', notes: [], page: 76 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الأفعال المتعدية لأكثر من مفعول',
      intro: 'كما في مخطط الكتاب.',
      columns: ['الأفعال', 'مثاله'],
      rows: [
        { label: 'اليقين', cells: ['وجد، رأى، علم، درى، ألفى، تعلّم', 'علمت العلماء نافعين'] },
        { label: 'الرجحان', cells: ['ظن، حسب، خال، زعم، عدّ، هب', 'ظن المعلم الاختبار سهلًا'] },
        { label: 'التحويل', cells: ['اتخذ، جعل، صيّر، ردّ، ترك', '﴿وجعل الليل سكنًا﴾'] },
        { label: 'مفعولان ليس أصلهما مبتدأ وخبرًا', cells: ['أعطى، سأل، منح، منع، كسا، ألبس، علّم', 'أعطيت الفقير ريالًا'] },
        { label: 'ثلاثة مفاعيل', cells: ['أرى، أعلم، نبّأ، أنبأ، خبّر، أخبر، حدّث', 'نبأته الدرس سهلًا'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'إعراب مثال', text: 'ظننت الرجل حاضرًا: ظننت فعل ماض مبني على السكون لاتصاله بالتاء، والتاء فاعل، والرجل مفعول به أول، وحاضرًا مفعول به ثان.', page: 74 },
    { title: 'من أمثلة اليقين والرجحان (للاطلاع فقط)', text: 'رأيت الله أكبر كل شيء: الله مفعول أول، وأكبر مفعول ثان؛ وهب الرجل حاضرًا: هب فعل أمر مبني على السكون، والفاعل مستتر تقديره أنت.', more: FYI, page: 75 },
    { title: 'المصدر المؤول مكان المفعولين (للاطلاع فقط)', text: 'يسد المصدر المؤول من أن والفعل، أو من أنّ واسمها وخبرها، مسد المفعولين: ﴿يحسب أن ماله أخلده﴾، وظننت أن تنجح أي نجاحك.', more: FYI, page: 77 },
    { title: 'إعراب ﴿الذي أعطى كل شيء خلقه﴾', text: 'أعطى فعل ماض مبني على الفتح المقدر، والفاعل مستتر تقديره هو، وكل مفعول به أول وهو مضاف، وشيء مضاف إليه، وخلقه مفعول به ثان.', page: 80 },
    { title: 'إعراب مثال بثلاثة مفاعيل', text: 'أخبرني فريد أباه مريضًا: الياء مفعول أول مقدم والنون للوقاية، وفريد فاعل مؤخر، وأباه مفعول ثان منصوب بالألف، ومريضًا مفعول ثالث.', page: 82 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أفعال اليقين', items: ['وجد', 'رأى', 'علم', 'درى', 'ألفى', 'تعلّم'], page: 75, origin: 'boek' },
    { kind: 'opsomming', title: 'أفعال الرجحان', items: ['ظن', 'حسب', 'خال', 'زعم', 'عدّ', 'هب'], page: 76, origin: 'boek' },
    { kind: 'onderscheid', title: 'رأى وهب', items: ['رأى البصرية: مفعول واحد؛ والقلبية: مفعولان', 'هب بمعنى افترض: مفعولان؛ وبمعنى أعطى: لا تنصب مفعولين'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'ما ينصب ثلاثة مفاعيل', items: ['بالهمزة: أرى، أعلم', 'بغيرها: نبّأ، أنبأ، خبّر، أخبر، حدّث'], page: 81, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'ظن وأخواتها تنصب المبتدأ والخبر مفعولين.',
    'أفعال القلوب يقين ورجحان.',
    'أفعال التحويل بمعنى صيّر.',
    'أعطى وأخواتها تنصب مفعولين ليس أصلهما مبتدأ وخبرًا.',
    'أرى وأعلم ونبّأ وأخواتها تنصب ثلاثة مفاعيل.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما إعراب «حاضرًا» في «ظننت الرجل حاضرًا»؟', options: ['مفعول به ثان', 'حال', 'خبر', 'مفعول به أول'], answer: 0, explain: 'كما في الدرس العشرين.', page: 74 },
    { type: 'mc', q: 'أي هذه من أفعال اليقين؟', options: ['وجد', 'ظن', 'حسب', 'زعم'], answer: 0, explain: 'ظن وحسب وزعم للرجحان.', page: 75 },
    { type: 'tf', q: '«رأى» تنصب دائمًا مفعولين.', options: ['صواب', 'خطأ'], answer: 1, explain: 'البصرية تنصب مفعولًا واحدًا.', page: 77 },
    { type: 'mc', q: 'من أي نوع «جعل» في ﴿وجعل الليل سكنًا﴾؟', options: ['أفعال التحويل', 'أفعال اليقين', 'أفعال الشروع', 'ما ينصب ثلاثة مفاعيل'], answer: 0, explain: 'بمعنى صيّر.', page: 76 },
    { type: 'mc', q: 'أي هذه ينصب ثلاثة مفاعيل؟', options: ['أعلم', 'أعطى', 'كسا', 'ظن'], answer: 0, explain: 'وكذلك أرى ونبّأ وأخبر.', page: 81 },
    { type: 'tf', q: 'مفعولا «أعطى» أصلهما المبتدأ والخبر.', options: ['صواب', 'خطأ'], answer: 1, explain: 'ليس أصلهما المبتدأ والخبر.', page: 79 }
  ]),
  note: 'نشاط الكتاب في الصفحات ٧٨ و٨٠ و٨٣. أجزاء من الدرسين الحادي والعشرين والثاني والعشرين في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Werkwoorden met meer dan één lijdend voorwerp',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Werkwoorden die twee lijdende voorwerpen nemen die oorspronkelijk mubtadaʾ en khabar zijn (ẓanna en zusters: werkwoorden van het hart en van verandering), werkwoorden met twee lijdende voorwerpen zonder die oorsprong, en werkwoorden met drie lijdende voorwerpen.',
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De derde eenheid van het boek: de onderwerpen van de vijf lessen.',
    root: { label: 'Meer dan één lijdend voorwerp', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Werkwoorden van het hart', sub: 'les 20–21', page: 75, children: ['zekerheid', 'waarschijnlijkheid'] },
      { label: 'Werkwoorden van verandering', sub: 'les 22', page: 76, children: ['ittakhadha, jaʿala, ṣayyara, radda, taraka'] },
      { label: 'Twee zonder mubtadaʾ/khabar', sub: 'les 23', page: 79, children: ['aʿṭā, saʾala, manaḥa, manaʿa, kasā, albasa, ʿallama'] },
      { label: 'Drie lijdende voorwerpen', sub: 'les 24', page: 81, children: ['arā, aʿlama', 'nabbaʾa, anbaʾa, khabbara, akhbara, ḥaddatha'] }
    ]
  },
  points: [
    { text: 'Sommige werkwoorden nemen twee lijdende voorwerpen, andere drie.', page: 74 },
    { text: 'Ẓanna en zusters komen voor mubtadaʾ en khabar en zetten beide in de accusatief als twee lijdende voorwerpen: ẓanantu r-rajula ḥāḍiran.', page: 74 },
    { text: 'Ze heten werkwoorden van het hart omdat hun betekenis in het hart ligt; ze drukken zekerheid of waarschijnlijkheid uit.', page: 75 },
    { text: 'Zekerheid: wajada, raʾā, ʿalima, darā, alfā, taʿallam; waarschijnlijkheid: ẓanna, ḥasiba, khāla, zaʿama, ʿadda, hab.', page: 75 },
    { text: 'Verandering: ittakhadha, jaʿala, ṣayyara, radda, taraka, en elk werkwoord met de betekenis "maken tot": "en Hij maakte de nacht tot rust" (al-Anʿām 6:96).', page: 76 },
    { text: 'Raʾā als zien met de ogen neemt één lijdend voorwerp, als inzicht van het hart twee; hab als "veronderstel" neemt er twee, als "geef" niet.', page: 77 },
    { text: 'Aʿṭā, saʾala, manaḥa, manaʿa, kasā, albasa en ʿallama nemen twee lijdende voorwerpen die geen mubtadaʾ en khabar zijn: "en Wij bekleedden de beenderen met vlees" (al-Muʾminūn 23:14).', page: 79 },
    { text: 'Arā, aʿlama, nabbaʾa, anbaʾa, khabbara, akhbara en ḥaddatha nemen drie lijdende voorwerpen: aʿlamtuhu Muḥammadan musāfiran.', page: 81 }
  ],
  terms: [
    { term: 'أفعال القلوب', translit: 'afʿāl al-qulūb', meaning: 'Werkwoorden van het hart: twee lijdende voorwerpen die oorspronkelijk mubtadaʾ en khabar zijn; hun betekenis ligt in het hart.', explanation: 'Ook werkwoorden van twijfel en zekerheid genoemd.', notes: [], page: 74 },
    { term: 'أفعال اليقين', translit: 'afʿāl al-yaqīn', meaning: 'Werkwoorden die zekerheid over de khabar uitdrukken.', explanation: '"Hij vond je behoeftig en maakte je rijk" (aḍ-Ḍuḥā 93:8).', notes: [], page: 75 },
    { term: 'أفعال الرجحان', translit: 'afʿāl ar-rujḥān', meaning: 'Werkwoorden die waarschijnlijkheid van de khabar uitdrukken.', explanation: 'ẓanna l-muʿallimu l-ikhtibāra sahlan.', notes: [], page: 76 },
    { term: 'أفعال التحويل', translit: 'afʿāl at-taḥwīl', meaning: 'Werkwoorden met de betekenis "maken tot", met twee lijdende voorwerpen die oorspronkelijk mubtadaʾ en khabar zijn.', explanation: 'Ook afʿāl at-taṣyīr genoemd.', notes: [], page: 76 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Werkwoorden met meer dan één lijdend voorwerp',
      intro: 'Zoals in het schema van het boek.',
      columns: ['Werkwoorden', 'Voorbeeld'],
      rows: [
        { label: 'Zekerheid', cells: ['wajada, raʾā, ʿalima, darā, alfā, taʿallam', 'ʿalimtu l-ʿulamāʾa nāfiʿīn'] },
        { label: 'Waarschijnlijkheid', cells: ['ẓanna, ḥasiba, khāla, zaʿama, ʿadda, hab', 'ẓanna l-muʿallimu l-ikhtibāra sahlan'] },
        { label: 'Verandering', cells: ['ittakhadha, jaʿala, ṣayyara, radda, taraka', '"en Hij maakte de nacht tot rust"'] },
        { label: 'Twee zonder mubtadaʾ/khabar', cells: ['aʿṭā, saʾala, manaḥa, manaʿa, kasā, albasa, ʿallama', 'aʿṭaytu l-faqīra riyālan'] },
        { label: 'Drie lijdende voorwerpen', cells: ['arā, aʿlama, nabbaʾa, anbaʾa, khabbara, akhbara, ḥaddatha', 'nabbaʾtuhu d-darsa sahlan'] }
      ],
      page: 73
    }
  ],
  sections: [
    { title: 'Een analyse', text: 'Ẓanantu r-rajula ḥāḍiran: ẓanantu is een werkwoord in de verleden tijd, vast op sukūn vanwege de tāʾ; de tāʾ is het onderwerp; ar-rajula is het eerste lijdend voorwerp en ḥāḍiran het tweede.', page: 74 },
    { title: 'Voorbeelden van zekerheid en waarschijnlijkheid (alleen ter kennisname)', text: 'Raʾaytu llāha akbara kulli shayʾ: Allāha is het eerste lijdend voorwerp, akbara het tweede. Hab ar-rajula ḥāḍiran: hab is een gebiedende wijs vast op sukūn, met een verborgen onderwerp (anta).', more: FYI_NL, page: 75 },
    { title: 'Een maṣdar muʾawwal in plaats van de twee voorwerpen (alleen ter kennisname)', text: 'An met een werkwoord, of anna met haar ism en khabar, kan de plaats van de twee lijdende voorwerpen innemen: "hij denkt dat zijn bezit hem eeuwig maakt" (al-Humaza 104:3); ẓanantu an tanjaḥa, dat is: jouw slagen.', more: FYI_NL, page: 77 },
    { title: 'Analyse van "die alles zijn schepping gaf"', text: 'Aʿṭā is een werkwoord in de verleden tijd, vast op een veronderstelde a, met een verborgen onderwerp (huwa); kulla is het eerste lijdend voorwerp en muḍāf, shayʾin muḍāf ilayh, en khalqahu het tweede lijdend voorwerp (Ṭā-Hā 20:50).', page: 80 },
    { title: 'Een analyse met drie voorwerpen', text: 'Akhbaranī Farīdun abāhu marīḍan: de yāʾ is het eerste lijdend voorwerp, vooraan, met de nūn al-wiqāya; Farīdun is het onderwerp, achteraan; abāhu het tweede lijdend voorwerp, met alif; marīḍan het derde.', page: 82 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Werkwoorden van zekerheid', items: ['wajada', 'raʾā', 'ʿalima', 'darā', 'alfā', 'taʿallam'], page: 75, origin: 'boek' },
    { kind: 'opsomming', title: 'Werkwoorden van waarschijnlijkheid', items: ['ẓanna', 'ḥasiba', 'khāla', 'zaʿama', 'ʿadda', 'hab'], page: 76, origin: 'boek' },
    { kind: 'onderscheid', title: 'Raʾā en hab', items: ['raʾā met de ogen: één lijdend voorwerp; met het hart: twee', 'hab als "veronderstel": twee; als "geef": niet twee'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'Drie lijdende voorwerpen', items: ['met de hamza: arā, aʿlama', 'zonder: nabbaʾa, anbaʾa, khabbara, akhbara, ḥaddatha'], page: 81, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'Ẓanna en zusters zetten mubtadaʾ en khabar in de accusatief als twee lijdende voorwerpen.',
    'Werkwoorden van het hart drukken zekerheid of waarschijnlijkheid uit.',
    'Werkwoorden van verandering betekenen "maken tot".',
    'Aʿṭā en zusters nemen twee lijdende voorwerpen die geen mubtadaʾ en khabar zijn.',
    'Arā, aʿlama, nabbaʾa en zusters nemen drie lijdende voorwerpen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is ḥāḍiran in "ẓanantu r-rajula ḥāḍiran"?', options: ['tweede lijdend voorwerp', 'ḥāl', 'khabar', 'eerste lijdend voorwerp'], answer: 0, explain: 'Zoals in les 20.', page: 74 },
    { type: 'mc', q: 'Welk werkwoord drukt zekerheid uit?', options: ['wajada', 'ẓanna', 'ḥasiba', 'zaʿama'], answer: 0, explain: 'Ẓanna, ḥasiba en zaʿama drukken waarschijnlijkheid uit.', page: 75 },
    { type: 'tf', q: 'Raʾā neemt altijd twee lijdende voorwerpen.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Als zien met de ogen neemt het er één.', page: 77 },
    { type: 'mc', q: 'Wat voor werkwoord is jaʿala in "en Hij maakte de nacht tot rust"?', options: ['werkwoord van verandering', 'werkwoord van zekerheid', 'werkwoord van beginnen', 'werkwoord met drie lijdende voorwerpen'], answer: 0, explain: 'Het betekent "maken tot".', page: 76 },
    { type: 'mc', q: 'Welk werkwoord neemt drie lijdende voorwerpen?', options: ['aʿlama', 'aʿṭā', 'kasā', 'ẓanna'], answer: 0, explain: 'Net als arā, nabbaʾa en akhbara.', page: 81 },
    { type: 'tf', q: 'De twee lijdende voorwerpen van aʿṭā zijn oorspronkelijk mubtadaʾ en khabar.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat zijn ze niet.', page: 79 }
  ]),
  note: 'Oefeningen van het boek op p. 78, 80 en 83. Delen van les 21 en 22 staan in het boek alleen ter kennisname. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-arabic', chapter: '20', unit: 3, ar, nl }
