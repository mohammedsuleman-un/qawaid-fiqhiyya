// Hoofdstukkaart bij اللغة العربية (٢), eenheid 2: نواسخ الابتداء (lessen 11–19, boek p. 50–70).
// Volgt de tweede وحدة van het boek. Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand.
// Veel onderdelen staan in het boek in kaders "alleen ter kennisname"; de kaart vermeldt dat bij die onderdelen.
// Geen hadith-tabblad: «التمس ولو خاتما من حديد»، «كن في الدنيا كأنك غريب» en «إن الأعمال بالنيات» staan in het
// boek als voorbeeld of oefening zonder bronvermelding. Geen personen in deze lessen.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب اللغة العربية (٢)، سلسلة زاد العلمية',
  pages: '50–70',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_ArabicLanguage/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'نواسخ الابتداء',
  subtitle: 'تسعة دروس مجموعة في صفحة واحدة',
  summary: 'النواسخ تغير حكم المبتدأ والخبر: كان وأخواتها، وأفعال المقاربة والرجاء والشروع، والحروف المشبهة بليس، وإن وأخواتها، ولا النافية للجنس.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'الوحدة الثانية من الكتاب: موضوعات الدروس التسعة.',
    root: { label: 'نواسخ الابتداء', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'كان وأخواتها', sub: 'الدروس ١١–١٣', page: 50, children: ['ترفع الاسم وتنصب الخبر', 'التام والناقص', 'خصائص كان'] },
      { label: 'كاد وأخواتها', sub: 'الدرس ١٤', page: 57, children: ['المقاربة', 'الرجاء', 'الشروع'] },
      { label: 'المشبهات بليس', sub: 'الدرس ١٥', page: 60, children: ['إنْ', 'ما', 'لا', 'لات'] },
      { label: 'إن وأخواتها', sub: 'الدرسان ١٦–١٧', page: 63, children: ['تنصب الاسم وترفع الخبر', 'ما الكافة'] },
      { label: 'لا النافية للجنس', sub: 'الدرسان ١٨–١٩', page: 69, children: ['تعمل عمل إن', 'المفرد مبني'] }
    ]
  },
  points: [
    { text: 'النسخ لغة الإزالة، واصطلاحًا تغيير حكم المبتدأ والخبر، والنواسخ أفعال وحروف.', page: 50 },
    { text: 'كان وأخواتها ترفع المبتدأ اسمًا لها وتنصب الخبر خبرًا لها، وتسمى الأفعال الناقصة.', page: 50 },
    { text: 'منها ما يعمل بلا شرط، ومنها ما يشترط تقدم نفي أو شبهه (زال، برح، فتئ، انفك)، ومنها دام بشرط ما المصدرية الظرفية.', page: 51 },
    { text: 'تختص كان بزيادتها بين المتلازمين، وحذفها مع اسمها بعد إن ولو، وحذف نونها في المضارع المجزوم.', page: 54 },
    { text: 'كاد وأخواتها ثلاثة أقسام: مقاربة، ورجاء، وشروع، وخبرها جملة فعلية فعلها مضارع.', page: 57 },
    { text: 'إنْ وما ولا ولات تعمل عمل ليس بشروط، ولات يحذف اسمها غالبًا.', page: 60 },
    { text: 'إن وأخواتها تنصب الاسم وترفع الخبر، وإذا اتصلت بها ما كفتها عن العمل إلا ليت فيجوز الوجهان.', page: 63 },
    { text: 'لا النافية للجنس تعمل عمل إن، واسمها المفرد مبني على ما ينصب به، والمضاف والشبيه بالمضاف معرب منصوب.', page: 69 }
  ],
  terms: [
    { term: 'النواسخ', translit: 'an-nawāsikh', meaning: 'أفعال وحروف تدخل على المبتدأ والخبر فتغير حكمهما.', explanation: '', notes: [], page: 50 },
    { term: 'الأفعال الناقصة', translit: 'al-afʿāl an-nāqiṣa', meaning: 'كان وأخواتها؛ لا يتم الكلام بمرفوعها وحده.', explanation: '', notes: [], page: 50 },
    { term: 'الفعل التام', translit: 'al-fiʿl at-tāmm', meaning: 'ما يكتفي بمرفوعه، ويكون بمعنى وُجد أو حصل.', explanation: '﴿وإن كان ذو عسرة﴾.', notes: [], page: 52 },
    { term: 'ما الكافة', translit: 'mā al-kāffa', meaning: 'ما التي تتصل بإن وأخواتها فتكفها عن العمل.', explanation: '﴿إنما المؤمنون إخوة﴾.', notes: [], page: 66 },
    { term: 'لا النافية للجنس', translit: 'lā an-nāfiya li-l-jins', meaning: 'حرف ينفي الخبر عن جنس اسمها كله.', explanation: 'وتسمى الاستغراقية.', notes: [], page: 69 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'عمل النواسخ',
      intro: 'كما في الدرس الحادي عشر.',
      columns: ['المبتدأ', 'الخبر'],
      rows: [
        { label: 'كان وأخواتها، وكاد وأخواتها', cells: ['مرفوع (اسمها)', 'منصوب (خبرها)'] },
        { label: 'المشبهات بليس', cells: ['مرفوع (اسمها)', 'منصوب (خبرها)'] },
        { label: 'إن وأخواتها، ولا النافية للجنس', cells: ['منصوب (اسمها)', 'مرفوع (خبرها)'] },
        { label: 'ظن وأخواتها', cells: ['منصوب (مفعول أول)', 'منصوب (مفعول ثان)'] }
      ],
      page: 50
    },
    {
      type: 'compare',
      title: 'كاد وأخواتها',
      intro: 'كما في الدرس الرابع عشر.',
      columns: ['الأفعال', 'معناها'],
      rows: [
        { label: 'المقاربة', cells: ['كاد، أوشك، كرب', 'قرب وقوع الخبر'] },
        { label: 'الرجاء', cells: ['عسى، حرى، اخلولق', 'رجاء وقوع الخبر'] },
        { label: 'الشروع', cells: ['شرع، أخذ، طفق، جعل، أنشأ، علق', 'البدء في الفعل'] }
      ],
      page: 57
    },
    {
      type: 'compare',
      title: 'معاني إن وأخواتها',
      intro: 'كما في الدرس السادس عشر.',
      columns: ['الحرف', 'مثاله'],
      rows: [
        { label: 'التوكيد', cells: ['إنّ، أنّ', '﴿وأن الله غفور رحيم﴾'] },
        { label: 'التشبيه', cells: ['كأنّ', '﴿كأن في أذنيه وقرًا﴾'] },
        { label: 'الاستدراك', cells: ['لكنّ', '﴿ولكن أكثرهم لا يعلمون﴾'] },
        { label: 'التمني', cells: ['ليت', '﴿يا ليتني لم أتخذ فلانًا خليلًا﴾'] },
        { label: 'الترجي', cells: ['لعل', '﴿لعل الساعة قريب﴾'] }
      ],
      page: 63
    }
  ],
  sections: [
    { title: 'إعراب مثال', text: 'صار الجو صحوًا: صار فعل ماض ناسخ مبني على الفتح، والجو اسم صار مرفوع، وصحوًا خبر صار منصوب.', page: 51 },
    { title: 'التام والناقص (للاطلاع فقط)', text: 'يأتي تامًّا وناقصًا: كان وأمسى وأصبح وأضحى وظل وصار وبات وما دام وما برح وما انفك: ﴿وأصبح فؤاد أم موسى فارغًا﴾ ناقص، و﴿وحين تصبحون﴾ تام؛ ولا يأتي إلا ناقصًا: فتئ وليس وزال التي مضارعها يزال.', more: FYI, page: 53 },
    { title: 'شروط عمل إنْ وما ولا (للاطلاع فقط)', text: 'ألا يتقدم الخبر على الاسم، وألا تقع إلا في الكلام: ما الحقُّ إلا ضائعٌ لا تعمل؛ ويشترط في لا أيضًا أن يكون اسمها وخبرها نكرتين.', more: FYI, page: 60 },
    { title: 'الفرق بين التمني والترجي', text: 'التمني يكون في المستحيل، كقول الشاعر: ألا ليت الشباب يعود يومًا؛ والترجي يكون في الممكن المنتظر: لعل الله يأتي بالفرج.', page: 63 },
    { title: 'لا النافية للجنس ولا النافية للوحدة', text: 'لا النافية للجنس تنفي عن الجنس كله: ﴿لا إكراه في الدين﴾؛ أما لا التي تعمل عمل ليس فتنفي الواحد فقط: لا قلمٌ في الحقيبة، أي بل قلمان أو أكثر.', page: 69 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'كان وأخواتها', items: ['بلا شرط: كان، ظل، بات، أضحى، أصبح، أمسى، صار، ليس', 'بشرط تقدم نفي أو شبهه: زال، برح، فتئ، انفك', 'بشرط ما المصدرية الظرفية: دام'], page: 50, origin: 'boek' },
    { kind: 'opsomming', title: 'خصائص كان', items: ['تزاد بين المتلازمين', 'تحذف مع اسمها بعد إن ولو', 'تحذف نونها في المضارع المجزوم: لم يكُ'], page: 54, origin: 'boek' },
    { kind: 'voorwaarde', title: 'خبر كاد وأخواتها', items: ['جملة فعلية', 'فعلها مضارع', 'فيه ضمير يعود على الاسم'], page: 59, origin: 'boek' },
    { kind: 'uitzondering', title: 'ما الكافة', items: ['تكف إن وأخواتها عن العمل', 'إلا ليت: يجوز إعمالها وإهمالها'], page: 66, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'كان وأخواتها ترفع الاسم وتنصب الخبر.',
    'كاد وأخواتها للمقاربة والرجاء والشروع، وخبرها جملة فعلية مضارعية.',
    'إنْ وما ولا ولات تعمل عمل ليس.',
    'إن وأخواتها تنصب الاسم وترفع الخبر، وما تكفها إلا ليت.',
    'لا النافية للجنس اسمها المفرد مبني، والمضاف منصوب.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما عمل كان وأخواتها؟', options: ['ترفع الاسم وتنصب الخبر', 'تنصب الاسم وترفع الخبر', 'تنصبهما معًا', 'ترفعهما معًا'], answer: 0, explain: 'كما في الدرس الحادي عشر.', page: 50 },
    { type: 'mc', q: 'أي هذه يشترط لعمله تقدم نفي أو شبهه؟', options: ['زال', 'أصبح', 'صار', 'ليس'], answer: 0, explain: 'وكذلك برح وفتئ وانفك.', page: 51 },
    { type: 'mc', q: 'من أي قسم «عسى»؟', options: ['الرجاء', 'المقاربة', 'الشروع', 'التمني'], answer: 0, explain: 'عسى وحرى واخلولق للرجاء.', page: 57 },
    { type: 'tf', q: 'في ﴿إنما المؤمنون إخوة﴾ «المؤمنون» اسم إن منصوب.', options: ['صواب', 'خطأ'], answer: 1, explain: 'ما كافة، والمؤمنون مبتدأ مرفوع.', page: 67 },
    { type: 'mc', q: 'ما إعراب «رجل» في «لا رجلَ في الدار»؟', options: ['اسم لا مبني على الفتح في محل نصب', 'مبتدأ مرفوع', 'اسم لا منصوب بالفتحة الظاهرة', 'خبر لا'], answer: 0, explain: 'لأنه مفرد.', page: 69 },
    { type: 'tf', q: 'التمني يكون في المستحيل، والترجي في الممكن.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما في الدرس السادس عشر.', page: 63 }
  ]),
  note: 'نشاط الكتاب في الصفحات ٥٦ و٥٩ و٦٢ و٦٨ و٧٠. أجزاء من هذه الدروس في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Wat de naamwoordelijke zin verandert (nawāsikh)',
  subtitle: 'Negen lessen samen op één pagina',
  summary: 'De nawāsikh veranderen de regel van mubtadaʾ en khabar: kāna en zusters, de werkwoorden van nabijheid, hoop en beginnen, de partikels die op laysa lijken, inna en zusters, en lā die de hele soort ontkent.',
  source: { ...source, label: 'Al-Lugha al-ʿArabiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De tweede eenheid van het boek: de onderwerpen van de negen lessen.',
    root: { label: 'Nawāsikh', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Kāna en zusters', sub: 'les 11–13', page: 50, children: ['ism nominatief, khabar accusatief', 'volledig en onvolledig', 'bijzonderheden van kāna'] },
      { label: 'Kāda en zusters', sub: 'les 14', page: 57, children: ['nabijheid', 'hoop', 'beginnen'] },
      { label: 'Zoals laysa', sub: 'les 15', page: 60, children: ['in', 'mā', 'lā', 'lāta'] },
      { label: 'Inna en zusters', sub: 'les 16–17', page: 63, children: ['ism accusatief, khabar nominatief', 'mā al-kāffa'] },
      { label: 'Lā van de soort', sub: 'les 18–19', page: 69, children: ['werkt als inna', 'enkelvoudig ism is vast'] }
    ]
  },
  points: [
    { text: 'Naskh is letterlijk opheffen; in de grammatica: de regel van mubtadaʾ en khabar veranderen. De nawāsikh zijn werkwoorden en partikels.', page: 50 },
    { text: 'Kāna en zusters maken de mubtadaʾ hun ism (nominatief) en de khabar hun khabar (accusatief); ze heten onvolledige werkwoorden.', page: 50 },
    { text: 'Sommige werken zonder voorwaarde, sommige alleen na een ontkenning of iets dergelijks (zāla, bariḥa, fatiʾa, infakka), en dāma alleen na mā al-maṣdariyya aẓ-ẓarfiyya.', page: 51 },
    { text: 'Kāna kan worden ingevoegd tussen twee samenhorende delen, met haar ism wegvallen na in en law, en haar nūn verliezen in de jussief: lam yaku.', page: 54 },
    { text: 'Kāda en zusters zijn er in drie soorten: nabijheid, hoop en beginnen; hun khabar is een werkwoordszin met een onvoltooid werkwoord.', page: 57 },
    { text: 'In, mā, lā en lāta werken onder voorwaarden zoals laysa; bij lāta valt meestal het ism weg.', page: 60 },
    { text: 'Inna en zusters zetten het ism in de accusatief en de khabar in de nominatief; met mā erbij werken ze niet meer, behalve layta, waar beide mag.', page: 63 },
    { text: 'Lā van de soort werkt als inna; een enkelvoudig ism is vast op zijn accusatiefteken, een muḍāf of shabīh bi-l-muḍāf wordt verbogen in de accusatief.', page: 69 }
  ],
  terms: [
    { term: 'النواسخ', translit: 'an-nawāsikh', meaning: 'Werkwoorden en partikels die voor mubtadaʾ en khabar komen en hun regel veranderen.', explanation: '', notes: [], page: 50 },
    { term: 'الأفعال الناقصة', translit: 'al-afʿāl an-nāqiṣa', meaning: 'Kāna en zusters: de zin is niet af met alleen hun nominatief.', explanation: '', notes: [], page: 50 },
    { term: 'الفعل التام', translit: 'al-fiʿl at-tāmm', meaning: 'Een volledig werkwoord: genoeg aan zijn onderwerp, met de betekenis "er zijn, gebeuren".', explanation: '"Als er iemand in moeilijkheden is" (al-Baqara 2:280).', notes: [], page: 52 },
    { term: 'ما الكافة', translit: 'mā al-kāffa', meaning: 'De mā die aan inna en zusters vastzit en hun werking opheft.', explanation: '"De gelovigen zijn slechts broeders" (al-Ḥujurāt 49:10).', notes: [], page: 66 },
    { term: 'لا النافية للجنس', translit: 'lā an-nāfiya li-l-jins', meaning: 'Een partikel dat de khabar ontkent voor de hele soort van het ism.', explanation: 'Ook lā al-istighrāqiyya genoemd.', notes: [], page: 69 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Wat de nawāsikh doen',
      intro: 'Zoals in les 11.',
      columns: ['Mubtadaʾ wordt', 'Khabar wordt'],
      rows: [
        { label: 'Kāna en kāda en zusters', cells: ['nominatief (hun ism)', 'accusatief (hun khabar)'] },
        { label: 'Partikels zoals laysa', cells: ['nominatief (hun ism)', 'accusatief (hun khabar)'] },
        { label: 'Inna en zusters, lā van de soort', cells: ['accusatief (hun ism)', 'nominatief (hun khabar)'] },
        { label: 'Ẓanna en zusters', cells: ['accusatief (1e lijdend vw.)', 'accusatief (2e lijdend vw.)'] }
      ],
      page: 50
    },
    {
      type: 'compare',
      title: 'Kāda en zusters',
      intro: 'Zoals in les 14.',
      columns: ['Werkwoorden', 'Betekenis'],
      rows: [
        { label: 'Nabijheid', cells: ['kāda, awshaka, karaba', 'de khabar staat op het punt te gebeuren'] },
        { label: 'Hoop', cells: ['ʿasā, ḥarā, ikhlawlaqa', 'hoop dat de khabar gebeurt'] },
        { label: 'Beginnen', cells: ['sharaʿa, akhadha, ṭafiqa, jaʿala, anshaʾa, ʿaliqa', 'de handeling begint'] }
      ],
      page: 57
    },
    {
      type: 'compare',
      title: 'Betekenis van inna en zusters',
      intro: 'Zoals in les 16.',
      columns: ['Partikel', 'Voorbeeld'],
      rows: [
        { label: 'Bevestiging', cells: ['inna, anna', '"en dat Allah vergevend en barmhartig is" (al-Māʾida 5:98)'] },
        { label: 'Vergelijking', cells: ['kaʾanna', '"alsof er doofheid in zijn oren is" (Luqmān 31:7)'] },
        { label: 'Correctie', cells: ['lākinna', '"maar de meesten van hen weten het niet" (al-Aʿrāf 7:131)'] },
        { label: 'Wens', cells: ['layta', '"had ik die-en-die maar niet als vriend genomen" (al-Furqān 25:28)'] },
        { label: 'Hoop', cells: ['laʿalla', '"misschien is het Uur nabij" (ash-Shūrā 42:17)'] }
      ],
      page: 63
    }
  ],
  sections: [
    { title: 'Een analyse', text: 'Ṣāra l-jawwu ṣaḥwan: ṣāra is een onvolledig werkwoord in de verleden tijd, vast op a; al-jawwu is het ism van ṣāra in de nominatief; ṣaḥwan is de khabar van ṣāra in de accusatief.', page: 51 },
    { title: 'Volledig en onvolledig (alleen ter kennisname)', text: 'Volledig én onvolledig kunnen: kāna, amsā, aṣbaḥa, aḍḥā, ẓalla, ṣāra, bāta, mā dāma, mā bariḥa, mā nfakka: "het hart van de moeder van Mūsā werd leeg" (al-Qaṣaṣ 28:10) is onvolledig, "en wanneer jullie de ochtend ingaan" (ar-Rūm 30:17) volledig. Alleen onvolledig: fatiʾa, laysa en zāla (onvoltooid yazālu).', more: FYI_NL, page: 53 },
    { title: 'Voorwaarden voor in, mā en lā (alleen ter kennisname)', text: 'De khabar mag niet vóór het ism staan, en er mag geen illā in de zin zijn: in mā l-ḥaqqu illā ḍāʾiʿun werkt mā niet. Bij lā moeten ism en khabar bovendien beide onbepaald zijn.', more: FYI_NL, page: 60 },
    { title: 'Wens en hoop', text: 'Een wens (tamannī) gaat over het onmogelijke, zoals de dichter zei: "kwam de jeugd maar eens terug"; hoop (tarajjī) over wat te verwachten is: laʿalla llāha yaʾtī bi-l-faraj.', page: 63 },
    { title: 'Lā van de soort en lā van één', text: 'Lā van de soort ontkent voor de hele soort: "er is geen dwang in de godsdienst" (al-Baqara 2:256). De lā die werkt als laysa ontkent alleen één: lā qalamun fī l-ḥaqība, dus er kunnen er twee of meer zijn.', page: 69 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Kāna en zusters', items: ['zonder voorwaarde: kāna, ẓalla, bāta, aḍḥā, aṣbaḥa, amsā, ṣāra, laysa', 'na ontkenning of iets dergelijks: zāla, bariḥa, fatiʾa, infakka', 'na mā al-maṣdariyya aẓ-ẓarfiyya: dāma'], page: 50, origin: 'boek' },
    { kind: 'opsomming', title: 'Bijzonderheden van kāna', items: ['kan worden ingevoegd tussen samenhorende delen', 'valt met haar ism weg na in en law', 'verliest haar nūn in de jussief: lam yaku'], page: 54, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Khabar van kāda en zusters', items: ['een werkwoordszin', 'met een onvoltooid werkwoord', 'met een voornaamwoord dat naar het ism verwijst'], page: 59, origin: 'boek' },
    { kind: 'uitzondering', title: 'Mā al-kāffa', items: ['heft de werking van inna en zusters op', 'behalve bij layta: werken en niet werken mag allebei'], page: 66, origin: 'boek' }
  ],
  hadith: [],
  persons: [],
  review: [
    'Kāna en zusters: ism in de nominatief, khabar in de accusatief.',
    'Kāda en zusters: nabijheid, hoop en beginnen; de khabar is een werkwoordszin met een onvoltooid werkwoord.',
    'In, mā, lā en lāta werken zoals laysa.',
    'Inna en zusters: ism in de accusatief, khabar in de nominatief; mā heft dat op, behalve bij layta.',
    'Lā van de soort: een enkelvoudig ism is vast, een muḍāf staat in de accusatief.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat doen kāna en zusters?', options: ['ism in de nominatief, khabar in de accusatief', 'ism in de accusatief, khabar in de nominatief', 'beide in de accusatief', 'beide in de nominatief'], answer: 0, explain: 'Zoals in les 11.', page: 50 },
    { type: 'mc', q: 'Welk werkwoord werkt alleen na een ontkenning of iets dergelijks?', options: ['zāla', 'aṣbaḥa', 'ṣāra', 'laysa'], answer: 0, explain: 'Net als bariḥa, fatiʾa en infakka.', page: 51 },
    { type: 'mc', q: 'Tot welke soort hoort ʿasā?', options: ['hoop', 'nabijheid', 'beginnen', 'wens'], answer: 0, explain: 'ʿAsā, ḥarā en ikhlawlaqa drukken hoop uit.', page: 57 },
    { type: 'tf', q: 'In "innamā l-muʾminūna ikhwa" is al-muʾminūna het ism van inna in de accusatief.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Mā heft de werking op; al-muʾminūna is mubtadaʾ in de nominatief.', page: 67 },
    { type: 'mc', q: 'Wat is rajula in "lā rajula fī d-dār"?', options: ['ism van lā, vast op a, op de plaats van een accusatief', 'mubtadaʾ in de nominatief', 'ism van lā met een zichtbare accusatief', 'khabar van lā'], answer: 0, explain: 'Omdat het enkelvoudig is.', page: 69 },
    { type: 'tf', q: 'Een wens gaat over het onmogelijke, hoop over wat mogelijk is.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals in les 16.', page: 63 }
  ]),
  note: 'Oefeningen van het boek op p. 56, 59, 62, 68 en 70. Delen van deze lessen staan in het boek alleen ter kennisname. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-arabic', chapter: '11', unit: 2, ar, nl }
