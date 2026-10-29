// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 2: التقوى (lessen 3–4, boek p. 18–25).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Niet in het hadith-tabblad: de smeekbede «اللهم آت
// نفسي تقواها» (p. 22), omdat het boek er geen bron bij geeft; de woorden van Abū Bakr tegen ʿUmar
// (p. 24) staan als paragraaf.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '18–25',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'أبو ذر الغفاري', text: 'اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن', takhrij: 'الترمذي وحسنه الألباني', note: 'الوصية بالتقوى.', pages: [19], nl: 'Vrees Allah waar je ook bent, laat op een slechte daad een goede volgen die haar uitwist, en ga met de mensen om met een goed karakter', nlNote: 'De aanbeveling van godsvrees.' },
  { narrator: '', text: 'أوصيكم بتقوى الله…', takhrij: 'أبو داود والترمذي وصححه الألباني', note: '', pages: [19], nl: 'Ik raad jullie aan Allah te vrezen…', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'إن الله قال: من عادى لي وليا فقد آذنته بالحرب، وما تقرب إلي عبدي بشيء أحب إلي مما افترضته عليه، وما يزال عبدي يتقرب إلي بالنوافل حتى أحبه…', takhrij: 'رواه البخاري', note: 'حديث قدسي؛ التقوى طريق الولاية.', pages: [19], nl: 'Allah zei: wie een vriend van Mij vijandig behandelt, hem verklaar Ik de oorlog. Mijn dienaar nadert Mij met niets dat Mij liever is dan wat Ik hem heb opgelegd, en Mijn dienaar blijft Mij naderen met vrijwillige daden tot Ik hem liefheb…', nlNote: 'Een ḥadīth qudsī; godsvrees is de weg naar Allahs vriendschap.' },
  { narrator: 'عبد الله بن مسعود', text: 'إياكم ومحقرات الذنوب، فإنهن يجتمعن على الرجل حتى يهلكنه', takhrij: 'أحمد وصححه الألباني', note: 'في الظالم لنفسه.', pages: [20], nl: 'Pas op voor zonden die als klein worden gezien, want zij hopen zich op bij iemand tot zij hem vernietigen', nlNote: 'Over wie zichzelf onrecht doet.' },
  { narrator: '', text: 'كل بني آدم خطاء', takhrij: 'الترمذي وابن ماجه وحسنه الألباني', note: 'السابق بالخيرات ليس معصومًا.', pages: [21], nl: 'Alle kinderen van Ādam begaan fouten', nlNote: 'Ook wie voorop gaat in het goede is niet foutloos.' },
  { narrator: '', text: 'عليك بتقوى الله فإنها جماع كل خير', takhrij: 'الطبراني في الكبير وصححه الألباني', note: '', pages: [23], nl: 'Houd je aan de vrees voor Allah, want die omvat al het goede', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'أوصيك بتقوى الله فإنه رأس كل شيء', takhrij: 'أحمد وحسنه الألباني', note: 'لرجل طلب الوصية.', pages: [23], nl: 'Ik raad je aan Allah te vrezen, want dat is het hoofd van alles', nlNote: 'Tegen iemand die om advies vroeg.' },
  { narrator: '', text: 'إن الله خلق يوم خلق السماوات والأرض مائة رحمة… قصرها على المتقين وزادهم تسعا وتسعين', takhrij: 'الحاكم وصححه', note: 'من ثمرات التقوى: الجنة والنجاة.', pages: [23], nl: 'Toen Allah de hemelen en de aarde schiep, schiep Hij honderd delen barmhartigheid… Hij beperkte ze tot de godvrezenden en gaf hun er negenennegentig bij', nlNote: 'Een vrucht van godsvrees: het Paradijs en redding.' },
  { narrator: 'أبو قتادة وأبو الدهماء', text: 'إنك لن تدع شيئا اتقاء الله إلا أعطاك الله خيرا منه', takhrij: 'أحمد وصححه الأرنؤوط', note: 'عن رجل من أهل البادية؛ العوض بالخير.', pages: [25], nl: 'Je laat niets na uit vrees voor Allah, of Allah geeft je er iets beters voor', nlNote: 'Via een bedoeïen; vervanging door iets beters.' }
]

const TAKHRIJ_NL = {
  'الترمذي وحسنه الألباني': 'at-Tirmidhī; al-Albānī noemde hem ḥasan',
  'أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'رواه البخاري': 'al-Bukhārī',
  'أحمد وصححه الألباني': 'Aḥmad; al-Albānī noemde hem ṣaḥīḥ',
  'الترمذي وابن ماجه وحسنه الألباني': 'at-Tirmidhī en Ibn Māja; al-Albānī noemde hem ḥasan',
  'الطبراني في الكبير وصححه الألباني': 'aṭ-Ṭabarānī in al-Kabīr; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد وحسنه الألباني': 'Aḥmad; al-Albānī noemde hem ḥasan',
  'الحاكم وصححه': 'al-Ḥākim, die hem ṣaḥīḥ noemde',
  'أحمد وصححه الأرنؤوط': 'Aḥmad; al-Arnaʾūṭ noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'أبو ذر الغفاري': 'Abū Dharr al-Ghifārī', 'أبو هريرة': 'Abū Hurayra', 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'أبو قتادة وأبو الدهماء': 'Abū Qatāda en Abū ad-Dahmāʾ' }

const PERSONS = [
  ['talq-ibn-habib', 'text', [18], 'عرف التقوى: أن تعمل بطاعة الله على نور من الله ترجو ثواب الله، وأن تترك معصية الله على نور من الله تخاف عقاب الله.', 'Definieerde godsvrees: Allah gehoorzamen met licht van Allah, hopend op Zijn beloning, en ongehoorzaamheid laten met licht van Allah, vrezend voor Zijn straf.'],
  ['umar-ibn-al-khattab', 'text', [18, 24], 'سأل أبي بن كعب عن التقوى، واستخلفه أبو بكر فأوصاه بالتقوى.', 'Vroeg Ubayy ibn Kaʿb wat godsvrees is; Abū Bakr wees hem als opvolger aan en raadde hem godsvrees aan.'],
  ['ubayy-ibn-kab', 'text', [18], 'شبه التقوى بمن يسلك طريقًا ذا شوك فيشمر ويحذر.', 'Vergeleek godsvrees met wie over een pad met doornen gaat en zijn kleding opschort en oplet.'],
  ['ibn-masud', 'text', [18, 20], 'فسر ﴿اتقوا الله حق تقاته﴾: أن يطاع فلا يعصى، ويذكر فلا ينسى، ويشكر فلا يكفر؛ وروى «إياكم ومحقرات الذنوب».', 'Legde "vrees Allah zoals Hij gevreesd moet worden" uit: dat Hij gehoorzaamd wordt en niet ongehoorzaamd, gedacht en niet vergeten, gedankt en niet ondankbaar bejegend; overleverde "pas op voor kleine zonden".'],
  ['al-qurtubi', 'text', [19], 'قال: الأمر بالتقوى كان عامًّا لجميع الأمم.', 'Zei: het gebod van godsvrees gold voor alle volken.'],
  ['abu-dharr', 'text', [19], 'روى «اتق الله حيثما كنت».', 'Overleveraar van "vrees Allah waar je ook bent".'],
  ['abu-hurayra', 'text', [19], 'روى الحديث القدسي «من عادى لي وليًّا».', 'Overleverde de ḥadīth qudsī "wie een vriend van Mij vijandig behandelt".'],
  ['awn-ibn-abdallah', 'text', [22], 'قال: فواتح التقوى حسن النية.', 'Zei: het begin van godsvrees is een goede intentie.'],
  ['abu-said-al-khudri', 'text', [23], 'روى «أوصيك بتقوى الله فإنه رأس كل شيء».', 'Overleveraar van "ik raad je godsvrees aan, want dat is het hoofd van alles".'],
  ['abu-bakr-as-siddiq', 'text', [24], 'أوصى عمر حين استخلفه: فاتق الله يا عمر بطاعته، وأطعه بتقواه، فإن المتقي آمن محفوظ.', 'Raadde ʿUmar aan toen hij hem als opvolger aanwees: vrees Allah door Hem te gehoorzamen, gehoorzaam Hem door Hem te vrezen, want de godvrezende is veilig en beschermd.'],
  ['abu-qatada-al-ansari', 'text', [25], 'روى مع أبي الدهماء «إنك لن تدع شيئًا اتقاء الله».', 'Overleverde met Abū ad-Dahmāʾ "je laat niets na uit vrees voor Allah".']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'التقوى',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'منزلة التقوى وتعريفها والوصية بها وأنها طريق الولاية، ثم مراتب التقوى، وصفات المتقين، والسبيل إليها، وثمراتها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'التقوى ومراتبها وثمراتها.',
    root: { label: 'التقوى', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'تعريفها والوصية بها', sub: 'الدرس ٣', page: 18, children: ['خير الزاد', 'تعريف طلق بن حبيب', 'طريق الولاية'] },
      { label: 'مراتبها', sub: 'الدرس ٤', page: 20, children: ['الظالم لنفسه', 'المقتصد', 'السابق بالخيرات'] },
      { label: 'صفات المتقين والسبيل إليها', sub: 'الدرس ٤', page: 21, children: ['الصدق', 'تعظيم الشعائر', 'العدل'] },
      { label: 'ثمراتها', sub: 'الدرس ٤', page: 23, children: ['الجنة', 'الرزق والتيسير', 'العوض بالخير'] }
    ]
  },
  points: [
    { text: 'التقوى خير الزاد ومعيار التفاضل بين الناس، وطريق النجاة والجنة.', page: 18 },
    { text: 'التقوى لغة من الوقاية، وعرفها طلق بن حبيب بالعمل بالطاعة والترك للمعصية على نور من الله رجاء ثوابه وخوف عقابه.', page: 18 },
    { text: 'الوصية بالتقوى عامة لجميع الأمم.', page: 19 },
    { text: 'الولاية تنال بالتقرب إلى الله بالفرائض والنوافل، لا بالطبول والبدع، وليس الطيران أو المشي على الماء دليلًا عليها.', page: 19 },
    { text: 'لا تقوى بلا علم وعمل، ومن حرم نفسه المباح بحجة التقوى ظلم نفسه.', page: 20 },
    { text: 'مراتب التقوى ثلاث: الظالم لنفسه، والمقتصد، والسابق بالخيرات.', page: 20 },
    { text: 'من صفات المتقين الصدق وتعظيم شعائر الله والعدل وسلوك طريق الصادقين.', page: 21 },
    { text: 'من ترك شيئًا اتقاء الله عوضه الله خيرًا منه.', page: 25 }
  ],
  terms: [
    { term: 'التقوى', translit: 'at-taqwā', meaning: 'لغة: الوقاية؛ اصطلاحًا: أن تعمل بطاعة الله على نور من الله ترجو ثوابه، وتترك معصيته على نور منه تخاف عقابه.', explanation: '', notes: [], page: 18 },
    { term: 'الولاية', translit: 'al-walāya', meaning: 'قرب العبد من الله بالإيمان والتقوى.', explanation: '﴿إن أولياؤه إلا المتقون﴾ [الأنفال: ٣٤].', notes: [], page: 19 },
    { term: 'الظالم لنفسه', translit: 'aẓ-ẓālim li-nafsih', meaning: 'الموحد المقيم للأركان المقصر في بعض الواجبات أو الفاعل لبعض المحرمات.', explanation: 'تحت مشيئة الله.', notes: [], page: 20 },
    { term: 'المقتصد', translit: 'al-muqtaṣid', meaning: 'من اجتنب ما يوجب العقوبة ولم يسابق في الخيرات.', explanation: '', notes: [], page: 21 },
    { term: 'السابق بالخيرات', translit: 'as-sābiq bi-l-khayrāt', meaning: 'من أدى الواجبات واجتنب المحرمات وسارع في الخيرات.', explanation: 'وليس معصومًا.', notes: [], page: 21 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'مراتب التقوى',
      intro: 'كما في الآية ٣٢ من سورة فاطر والدرس الرابع.',
      columns: ['حاله'],
      rows: [
        { label: 'الظالم لنفسه', cells: ['يقر بالتوحيد ويقيم الأركان، لكنه يقصر في واجبات أو يفعل محرمات؛ تحت مشيئة الله'] },
        { label: 'المقتصد', cells: ['يجتنب ما يوجب العقوبة، ولا يسابق في الخيرات'] },
        { label: 'السابق بالخيرات', cells: ['يؤدي الواجبات ويجتنب المحرمات ويسارع في الخيرات'] }
      ],
      page: 20
    }
  ],
  sections: [
    { title: 'من صور التقوى', text: 'سأل عمر أبي بن كعب عن التقوى، فقال: أما سلكت طريقًا ذا شوك؟ قال: بلى، قال: فما عملت؟ قال: شمرت وحذرت، قال: فذاك التقوى؛ وهي ألا يراك الله حيث نهاك ولا يفقدك حيث أمرك.', page: 18 },
    { title: 'حق التقوى', text: 'قال ابن مسعود في قوله تعالى: ﴿اتقوا الله حق تقاته﴾ [آل عمران: ١٠٢]: أن يطاع فلا يعصى، وأن يذكر فلا ينسى، وأن يشكر فلا يكفر.', page: 18 },
    { title: 'السبيل إلى التقوى', text: 'سؤال الله التقوى، وإصلاح القلب، فقد قال عون بن عبد الله: فواتح التقوى حسن النية، وإصلاح الظاهر على السنة، والصبر، ومحاسبة النفس، والحياء، والبذل، والصيام، وأكل الحلال.', page: 22 },
    { title: 'من ثمرات التقوى', text: 'الجنة والنجاة، والكرامة عند الله، والسعادة، والهداية والمغفرة، وسعة الرزق، والتيسير، والبركة، والحفظ والنصر وحسن العاقبة، والعوض بالخير؛ ومن استبطأ وعد الله فليحاسب نفسه: هل حقق التقوى كاملة؟', page: 23 },
    { title: 'وصية أبي بكر لعمر', text: 'لما استخلفه قال: إني أدعوك إلى أمر متعب لمن وليه، فاتق الله يا عمر بطاعته، وأطعه بتقواه، فإن المتقي آمن محفوظ.', page: 24 }
  ],
  keycards: [
    { kind: 'definitie', title: 'التقوى', items: ['أن تعمل بطاعة الله على نور من الله ترجو ثواب الله', 'وأن تترك معصية الله على نور من الله تخاف عقاب الله'], page: 18, origin: 'boek' },
    { kind: 'opsomming', title: 'صفات المتقين', items: ['الصدق قولًا وعملًا', 'تعظيم شعائر الله', 'العدل', 'سلوك طريق الأنبياء والصديقين والمصلحين'], page: 21, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التقوى العمل بالطاعة وترك المعصية على نور من الله.',
    'الولاية تنال بالفرائض ثم النوافل.',
    'مراتب التقوى: ظالم لنفسه ومقتصد وسابق بالخيرات.',
    'لا تقوى بلا علم، ولا يحرم المرء على نفسه المباح باسمها.',
    'من ترك شيئًا لله عوضه الله خيرًا منه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'التقوى في اللغة من:', options: ['الوقاية', 'القوة', 'التقى بمعنى اللقاء', 'القيام'], answer: 0, explain: 'كما في الدرس الثالث.', page: 18 },
    { type: 'tf', q: 'الطيران في الهواء والمشي على الماء دليل على الولاية.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الولاية بالتقرب بالطاعات.', page: 19 },
    { type: 'mc', q: 'من يؤدي الواجبات ويجتنب المحرمات ويسارع في الخيرات هو:', options: ['السابق بالخيرات', 'المقتصد', 'الظالم لنفسه', 'المنافق'], answer: 0, explain: 'أعلى المراتب.', page: 21 },
    { type: 'tf', q: 'السابق بالخيرات معصوم من الخطأ.', options: ['صواب', 'خطأ'], answer: 1, explain: '«كل بني آدم خطاء».', page: 21 },
    { type: 'mc', q: 'ما الذي يعطاه من ترك شيئًا اتقاء الله؟', options: ['خيرًا منه', 'لا شيء', 'مثله فقط', 'أقل منه'], answer: 0, explain: 'كما في حديث البدوي.', page: 25 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٢٥.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Godsvrees',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'De plaats van godsvrees, de betekenis, de aanbeveling ervan en dat zij de weg is naar Allahs vriendschap; daarna de rangen van godsvrees, de kenmerken van de godvrezenden, de weg ernaartoe en de vruchten.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'Godsvrees, de rangen en de vruchten.',
    root: { label: 'Godsvrees', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Betekenis en aanbeveling', sub: 'les 3', page: 18, children: ['de beste proviand', 'definitie van Ṭalq', 'weg naar vriendschap'] },
      { label: 'De rangen', sub: 'les 4', page: 20, children: ['onrecht tegen zichzelf', 'de gematigde', 'voorop in het goede'] },
      { label: 'Kenmerken en de weg', sub: 'les 4', page: 21, children: ['waarachtigheid', 'Allahs symbolen eren', 'rechtvaardigheid'] },
      { label: 'Vruchten', sub: 'les 4', page: 23, children: ['het Paradijs', 'voorziening en gemak', 'iets beters ervoor'] }
    ]
  },
  points: [
    { text: 'Godsvrees is de beste proviand en de maatstaf waarin mensen elkaar overtreffen; zij is de weg naar redding en het Paradijs.', page: 18 },
    { text: 'Taqwā komt van "zich beschermen"; Ṭalq ibn Ḥabīb definieerde haar als gehoorzamen en zonde laten met licht van Allah, hopend op Zijn beloning en vrezend voor Zijn straf.', page: 18 },
    { text: 'De aanbeveling van godsvrees gold voor alle volken.', page: 19 },
    { text: 'Allahs vriendschap bereik je door Hem te naderen met plichten en vrijwillige daden, niet met trommels en vernieuwingen; vliegen of over water lopen bewijst haar niet.', page: 19 },
    { text: 'Er is geen godsvrees zonder kennis en daden; wie zich het toegestane ontzegt in naam van godsvrees, doet zichzelf onrecht.', page: 20 },
    { text: 'Godsvrees heeft drie rangen: wie zichzelf onrecht doet, de gematigde, en wie voorop gaat in het goede.', page: 20 },
    { text: 'Kenmerken van de godvrezenden zijn waarachtigheid, eerbied voor Allahs symbolen, rechtvaardigheid, en de weg van de waarachtigen volgen.', page: 21 },
    { text: 'Wie iets nalaat uit vrees voor Allah, krijgt er van Allah iets beters voor terug.', page: 25 }
  ],
  terms: [
    { term: 'التقوى', translit: 'at-taqwā', meaning: 'Letterlijk: bescherming; in de leer: Allah gehoorzamen met licht van Allah hopend op Zijn beloning, en zonde laten met licht van Allah vrezend voor Zijn straf.', explanation: '', notes: [], page: 18 },
    { term: 'الولاية', translit: 'al-walāya', meaning: 'De nabijheid van de dienaar tot Allah door geloof en godsvrees.', explanation: '"Zijn vrienden zijn alleen de godvrezenden" (al-Anfāl 8:34).', notes: [], page: 19 },
    { term: 'الظالم لنفسه', translit: 'aẓ-ẓālim li-nafsih', meaning: 'De monotheïst die de zuilen verricht maar plichten verzuimt of verboden dingen doet.', explanation: 'Hij staat onder Allahs wil.', notes: [], page: 20 },
    { term: 'المقتصد', translit: 'al-muqtaṣid', meaning: 'Wie mijdt wat straf meebrengt, maar niet wedijvert in het goede.', explanation: '', notes: [], page: 21 },
    { term: 'السابق بالخيرات', translit: 'as-sābiq bi-l-khayrāt', meaning: 'Wie de plichten doet, het verbodene mijdt en zich haast in het goede.', explanation: 'Hij is niet foutloos.', notes: [], page: 21 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De rangen van godsvrees',
      intro: 'Zoals in Fāṭir 35:32 en les 4.',
      columns: ['Toestand'],
      rows: [
        { label: 'Wie zichzelf onrecht doet', cells: ['erkent de eenheid van Allah en verricht de zuilen, maar verzuimt plichten of doet verboden dingen; hij staat onder Allahs wil'] },
        { label: 'De gematigde', cells: ['mijdt wat straf meebrengt, maar wedijvert niet in het goede'] },
        { label: 'Wie voorop gaat in het goede', cells: ['doet de plichten, mijdt het verbodene en haast zich in het goede'] }
      ],
      page: 20
    }
  ],
  sections: [
    { title: 'Een beeld van godsvrees', text: 'ʿUmar vroeg Ubayy ibn Kaʿb wat godsvrees is. Hij zei: ben je nooit over een pad met doornen gegaan? ʿUmar zei: jawel. Ubayy: wat deed je toen? ʿUmar: ik schortte mijn kleding op en lette op. Ubayy: dat is godsvrees. Het is dat Allah je niet ziet waar Hij het verbood, en je niet mist waar Hij het gebood.', page: 18 },
    { title: 'Allah vrezen zoals het hoort', text: 'Ibn Masʿūd zei over "vrees Allah zoals Hij gevreesd moet worden" (Āl ʿImrān 3:102): dat Hij gehoorzaamd wordt en niet ongehoorzaamd, gedacht en niet vergeten, gedankt en niet met ondankbaarheid bejegend.', page: 18 },
    { title: 'De weg naar godsvrees', text: 'Allah om godsvrees vragen; het hart hervormen, want ʿAwn ibn ʿAbd Allāh zei: het begin van godsvrees is een goede intentie; het uiterlijk naar de sunna inrichten; geduld, zelfrekenschap, schaamte, vrijgevigheid, vasten en ḥalāl eten.', page: 22 },
    { title: 'Vruchten van godsvrees', text: 'Het Paradijs en redding, eer bij Allah, geluk, leiding en vergeving, ruime voorziening, gemak, zegen, bescherming, hulp en een goede afloop, en iets beters in de plaats. Wie vindt dat Allahs belofte op zich laat wachten, laat hij zich afvragen of hij de godsvrees helemaal heeft waargemaakt.', page: 23 },
    { title: 'Abū Bakrs advies aan ʿUmar', text: 'Toen hij hem als opvolger aanwees, zei hij: ik roep je tot iets wat zwaar is voor wie het op zich neemt; vrees Allah, ʿUmar, door Hem te gehoorzamen, en gehoorzaam Hem door Hem te vrezen, want de godvrezende is veilig en beschermd.', page: 24 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Godsvrees', items: ['Allah gehoorzamen met licht van Allah, hopend op Zijn beloning', 'en zonde laten met licht van Allah, vrezend voor Zijn straf'], page: 18, origin: 'boek' },
    { kind: 'opsomming', title: 'Kenmerken van de godvrezenden', items: ['waarachtig in woord en daad', 'eerbied voor Allahs symbolen', 'rechtvaardigheid', 'de weg van profeten, waarachtigen en hervormers'], page: 21, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Godsvrees is gehoorzamen en zonde laten met licht van Allah.',
    'Allahs vriendschap bereik je met de plichten en daarna vrijwillige daden.',
    'De rangen: onrecht tegen zichzelf, gematigd, en voorop in het goede.',
    'Geen godsvrees zonder kennis; ontzeg jezelf het toegestane niet in haar naam.',
    'Wie iets voor Allah laat, krijgt er iets beters voor terug.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Waar komt taqwā letterlijk van?', options: ['zich beschermen', 'kracht', 'ontmoeten', 'opstaan'], answer: 0, explain: 'Zoals in les 3.', page: 18 },
    { type: 'tf', q: 'Vliegen of over water lopen bewijst dat iemand een vriend van Allah is.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Vriendschap komt door gehoorzaamheid.', page: 19 },
    { type: 'mc', q: 'Wie de plichten doet, het verbodene mijdt en zich haast in het goede, is:', options: ['wie voorop gaat in het goede', 'de gematigde', 'wie zichzelf onrecht doet', 'de huichelaar'], answer: 0, explain: 'De hoogste rang.', page: 21 },
    { type: 'tf', q: 'Wie voorop gaat in het goede, maakt geen fouten.', options: ['Juist', 'Onjuist'], answer: 1, explain: '"Alle kinderen van Ādam begaan fouten."', page: 21 },
    { type: 'mc', q: 'Wat krijgt wie iets nalaat uit vrees voor Allah?', options: ['iets beters', 'niets', 'precies hetzelfde', 'iets minders'], answer: 0, explain: 'Zoals in de hadith van de bedoeïen.', page: 25 }
  ]),
  note: 'Oefening van het boek op p. 25. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '3', unit: 2, ar, nl }
