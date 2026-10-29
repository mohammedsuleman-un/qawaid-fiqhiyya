// Hoofdstukkaart bij اللغة العربية (٤), eenheid 7: أسلوب الشرط وأدواته (lessen 23–24, boek p. 71–77).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-arabic/leesnotities.md);
// voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-arabic',
  chapter: '23',
  unit: 7,
  source: {
    label: ['كتاب اللغة العربية (٤)، سلسلة زاد العلمية', 'Arabische taal (4), Zad-reeks'],
    pages: '71–77',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['أسلوب الشرط وأدواته', 'De voorwaardelijke zin en zijn partikels'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'الشرط ربط بين حدثين يتوقف الثاني على الأول، وهو نوعان: جازم وغير جازم. الجازم أداة تجزم فعلين: فعل الشرط وجوابه، وأدواته: إن، إذما، من، ما، مهما، متى، أيان، أين، أينما، أنى، حيثما، كيفما، أي. وإذا جاء بعدها ماض كان في محل جزم. ويجزم المضارع في جواب الطلب. وغير الجازم أدواته إذا ولو ولولا وكلما ولما، تربط ولا تجزم.',
    'De voorwaarde verbindt twee gebeurtenissen waarbij de tweede van de eerste afhangt; zij is jussief makend of niet. Het jussief makende partikel maakt twee werkwoorden jussief: het voorwaardelijke werkwoord en het antwoord; partikels: in, idhmā, man, mā, mahmā, matā, ayyāna, ayna, aynamā, annā, ḥaythumā, kayfamā en ayy. Volgt een perfectum, dan staat dat op de plaats van een jussief. Het imperfectum is ook jussief als antwoord op een verzoek. De niet-jussieve partikels idhā, law, lawlā, kullamā en lammā verbinden alleen.'
  ],
  map: {
    title: ['الشرط في خريطة واحدة', 'De voorwaarde in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['أسلوب الشرط', 'De voorwaardelijke zin'], ['الوحدة السابعة', 'Eenheid 7']],
    nodes: [
      { label: ['الشرط الجازم', 'Jussief makend'], sub: ['ص ٧٢–٧٣', 'p. 72–73'], page: 72, children: [['فعل الشرط', 'het voorwaardelijke werkwoord'], ['جواب الشرط', 'het antwoord'], ['ثلاث عشرة أداة', 'dertien partikels']] },
      { label: ['الماضي بعد الجازم', 'Perfectum na een jussief partikel'], sub: ['ص ٧٤', 'p. 74'], page: 74, children: [['من جد وجد', 'man jadda wajada'], ['في محل جزم', 'op de plaats van een jussief']] },
      { label: ['جواب الطلب', 'Antwoord op een verzoek'], sub: ['ص ٧٤', 'p. 74'], page: 74, children: [['﴿ادعوني أستجب لكم﴾', '"roep Mij aan, Ik zal jullie verhoren"']] },
      { label: ['الشرط غير الجازم', 'Niet jussief makend'], sub: ['ص ٧٥–٧٦', 'p. 75–76'], page: 75, children: [['إذا، لو، لولا', 'idhā, law, lawlā'], ['كلما، لما', 'kullamā, lammā']] }
    ]
  },
  points: [
    [72, 'من أمثلة الشرط: ﴿إن تقرضوا الله قرضا حسنا يضاعفه لكم﴾ [التغابن: 17]، ﴿ومن يؤمن بالله يهد قلبه﴾ [التغابن: 11].', 'Voorbeelden: "als jullie Allah een goede lening geven, verdubbelt Hij die voor jullie" (64:17), "wie in Allah gelooft, diens hart leidt Hij" (64:11).'],
    [72, 'من للعاقل، وما لغير العاقل.', 'Man is voor verstandelijke wezens, mā voor niet-verstandelijke.'],
    [73, 'من يجتهد ينجح: من اسم شرط، يجتهد فعل الشرط مجزوم بالسكون، ينجح جواب الشرط مجزوم بالسكون.', '"Man yajtahid yanjaḥ": man is een conditioneel nomen; yajtahid het voorwaardelijke werkwoord, jussief met sukūn; yanjaḥ het antwoord, jussief met sukūn.'],
    [73, '﴿أينما تكونوا يدرككم الموت﴾ [النساء: 78]: تكونوا مجزوم بحذف النون، ويدرككم جواب الشرط مجزوم بالسكون.', '"Waar jullie ook zijn, de dood zal jullie bereiken" (4:78): takūnū is jussief door wegvallen van de nūn, yudrikkum is het antwoord, jussief met sukūn.'],
    [74, 'يجزم المضارع في جواب الطلب: ﴿وقال ربكم ادعوني أستجب لكم﴾ [غافر: 60]، ﴿أرسله معنا غدا يرتع ويلعب﴾ [يوسف: 12].', 'Het imperfectum is jussief als antwoord op een verzoek: "roep Mij aan, Ik zal jullie verhoren" (40:60), "stuur hem morgen met ons mee, dan kan hij rondlopen en spelen" (12:12).'],
    [74, 'إذا جاء بعد أداة الشرط الجازمة فعل ماض كان في محل جزم: مهما التزمت بالسنة اقتربت من الله.', 'Volgt een perfectum na een jussief partikel, dan staat het op de plaats van een jussief: "hoe meer je je aan de sunna houdt, hoe dichter je bij Allah komt".'],
    [75, 'أدوات الشرط غير الجازمة تربط بين الفعلين ولا تجزم، فالمضارع بعدها مرفوع والماضي مبني.', 'Niet-jussieve partikels verbinden zonder jussief: een imperfectum erna staat in de nominatief, een perfectum is gebouwd.'],
    [76, 'لولا العلم لساد الجهل: العلم مبتدأ خبره محذوف وجوبا، واللام رابطة لجواب الشرط.', '"Lawlā l-ʿilmu la-sāda l-jahl": al-ʿilm is mubtadaʾ met een verplicht weggelaten khabar; de lām verbindt het antwoord.']
  ],
  terms: [
    ['الشرط', 'ash-sharṭ', 72, 'ربط بين حدثين يتوقف الثاني على الأول.', 'De verbinding tussen twee gebeurtenissen waarbij de tweede van de eerste afhangt.'],
    ['فعل الشرط وجوابه', 'fiʿl ash-sharṭ wa-jawābuhu', 72, 'الفعل الأول بعد الأداة فعل الشرط، والثاني جواب الشرط.', 'Het eerste werkwoord na het partikel is het voorwaardelijke werkwoord, het tweede het antwoord.'],
    ['جواب الطلب', 'jawāb aṭ-ṭalab', 74, 'مضارع يقع جوابا لطلب كالأمر فيجزم: ذاكر تنجح.', 'Een imperfectum als antwoord op een verzoek, zoals een bevel, en daardoor jussief: "dhākir tanjaḥ".']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الشرط الجازم وغير الجازم', 'Jussief en niet-jussief'],
      intro: ['كما في الصفحات ٧٢–٧٦.', 'Zoals op p. 72–76.'],
      columns: [['الجازم', 'Jussief'], ['غير الجازم', 'Niet-jussief']],
      rows: [
        { label: ['الأدوات', 'Partikels'], cells: [['إن، إذما، من، ما، مهما، متى، أيان، أين، أينما، أنى، حيثما، كيفما، أي', 'in, idhmā, man, mā, mahmā, matā, ayyāna, ayna, aynamā, annā, ḥaythumā, kayfamā, ayy'], ['إذا، لو، لولا، كلما، لما', 'idhā, law, lawlā, kullamā, lammā']] },
        { label: ['أثرها', 'Werking'], cells: [['تجزم فعلين', 'maakt twee werkwoorden jussief'], ['تربط ولا تجزم', 'verbindt zonder jussief']] },
        { label: ['مثال', 'Voorbeeld'], cells: [['﴿وما تفعلوا من خير يعلمه الله﴾', '"wat jullie aan goed doen, Allah weet het" (2:197)'], ['إذا انتشر العلم عم الرخاء', 'als kennis zich verspreidt, komt er welvaart']] }
      ],
      page: 72
    }
  ],
  sections: [
    [75, 'إعراب ﴿ولو شئنا لرفعناه بها﴾', 'Analyse van "als Wij gewild hadden, hadden Wij hem erdoor verheven"', 'لو حرف شرط غير جازم، شئنا فعل ماض مبني على السكون ونا فاعل، لرفعناه: اللام واقعة في جواب لو، ورفع فعل ماض ونا فاعل والهاء مفعول به [الأعراف: 176].', 'Law is een niet-jussief partikel; shiʾnā is een perfectum op sukūn met nā als fāʿil; in la-rafaʿnāhu is de lām die van het antwoord, rafaʿa een perfectum, nā de fāʿil en hu het lijdend voorwerp (7:176).']
  ],
  keycards: [
    ['opsomming', 72, 'أدوات الشرط الجازمة', 'Jussief makende partikels', ['إن، إذما', 'من، ما، مهما', 'متى، أيان', 'أين، أينما، أنى، حيثما', 'كيفما، أي'], ['in, idhmā', 'man, mā, mahmā', 'matā, ayyāna', 'ayna, aynamā, annā, ḥaythumā', 'kayfamā, ayy']],
    ['opsomming', 75, 'أدوات الشرط غير الجازمة', 'Niet-jussieve partikels', ['إذا', 'لو', 'لولا', 'كلما', 'لما'], ['idhā', 'law', 'lawlā', 'kullamā', 'lammā']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['الشرط ربط بين حدثين.', 'De voorwaarde verbindt twee gebeurtenissen.'],
    ['الجازم يجزم فعل الشرط وجوابه.', 'Het jussieve partikel maakt beide werkwoorden jussief.'],
    ['الماضي بعد الأداة الجازمة في محل جزم.', 'Een perfectum na een jussief partikel staat op de plaats van een jussief.'],
    ['أدوات غير الجازم: إذا ولو ولولا وكلما ولما.', 'Niet-jussief: idhā, law, lawlā, kullamā en lammā.']
  ],
  quiz: [
    { type: 'mc', page: 73, q: ['ما علامة جزم «تكونوا» في ﴿أينما تكونوا يدرككم الموت﴾؟', 'Wat is het jussiefteken van takūnū in "waar jullie ook zijn, de dood zal jullie bereiken" (4:78)?'], options: [['حذف النون', 'السكون', 'حذف حرف العلة', 'الفتحة'], ['wegvallen van de nūn', 'sukūn', 'wegvallen van de zwakke letter', 'fatḥa']], answer: 0, explain: ['لأنه من الأفعال الخمسة.', 'Want het hoort bij de vijf werkwoorden.'] },
    { type: 'tf', page: 75, q: ['لو أداة شرط جازمة.', 'Law is een jussief makend partikel.'], answer: 1, explain: ['لو من أدوات الشرط غير الجازمة.', 'Law is een niet-jussief partikel.'] },
    { type: 'mc', page: 74, q: ['لماذا جزم «أستجب» في ﴿ادعوني أستجب لكم﴾؟', 'Waarom is astajib jussief in "roep Mij aan, Ik zal jullie verhoren" (40:60)?'], options: [['لأنه في جواب الطلب', 'لأنه بعد لم', 'لأنه بعد لا الناهية', 'لأنه فعل شرط'], ['omdat het een antwoord op een verzoek is', 'omdat het na lam komt', 'omdat het na lā an-nāhiya komt', 'omdat het het voorwaardelijke werkwoord is']], answer: 0, explain: ['ادعوني أمر، وأستجب جوابه.', 'Udʿūnī is een bevel en astajib het antwoord.'] },
    { type: 'mc', page: 74, q: ['ما إعراب «جد» في: من جد وجد؟', 'Wat is de analyse van jadda in "man jadda wajada"?'], options: [['فعل ماض مبني على الفتح في محل جزم فعل الشرط', 'مضارع مجزوم', 'فعل أمر', 'اسم شرط'], ['perfectum op fatḥa, op de plaats van een jussief, voorwaardelijk werkwoord', 'jussief imperfectum', 'gebiedende wijs', 'conditioneel nomen']], answer: 0, explain: ['الماضي بعد الأداة الجازمة في محل جزم.', 'Een perfectum na een jussief partikel staat op de plaats van een jussief.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٧٧.', 'Oefening van het boek op p. 77. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
