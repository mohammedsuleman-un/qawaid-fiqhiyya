// Hoofdstukkaart bij اللغة العربية (٤), eenheid 3: ألفاظ المدح والذم (lessen 3–4, boek p. 23–29).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-arabic/leesnotities.md);
// voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-arabic',
  chapter: '3',
  unit: 3,
  source: {
    label: ['كتاب اللغة العربية (٤)، سلسلة زاد العلمية', 'Arabische taal (4), Zad-reeks'],
    pages: '23–29',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['ألفاظ المدح والذم', 'Woorden van lof en blaam'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'للمدح نعم وحبذا وحسن، وللذم بئس ولا حبذا وساء وضعف وكبر. تتكون الجملة من فعل المدح أو الذم، والفاعل، والمخصوص. لفاعل نعم وبئس أربع حالات، وفي الإعراب وجهان، وقد يتقدم المخصوص أو يحذف إذا فهم من السياق.',
    'Voor lof zijn er niʿma, ḥabbadhā en ḥasuna; voor blaam biʾsa, lā ḥabbadhā, sāʾa, ḍaʿufa en kabura. De zin bestaat uit het werkwoord van lof of blaam, de fāʿil en het makhṣūṣ (wie geprezen of gelaakt wordt). De fāʿil van niʿma en biʾsa heeft vier toestanden; er zijn twee analyses, en het makhṣūṣ kan voorop staan of wegvallen als het uit de context blijkt.'
  ],
  map: {
    title: ['المدح والذم في خريطة واحدة', 'Lof en blaam in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['المدح والذم', 'Lof en blaam'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['المدح', 'Lof'], sub: ['ص ٢٤', 'p. 24'], page: 24, children: [['نعم', 'niʿma'], ['حبذا', 'ḥabbadhā'], ['حسن', 'ḥasuna']] },
      { label: ['الذم', 'Blaam'], sub: ['ص ٢٥', 'p. 25'], page: 25, children: [['بئس', 'biʾsa'], ['لا حبذا', 'lā ḥabbadhā'], ['ساء', 'sāʾa'], ['كبر', 'kabura']] },
      { label: ['حالات الفاعل', 'Toestanden van de fāʿil'], sub: ['ص ٢٥–٢٦', 'p. 25–26'], page: 25, children: [['محلى بأل', 'met al'], ['مضاف إلى المحلى بأل', 'geannexeerd aan een al-woord'], ['ما أو من', 'mā of man'], ['ضمير مستتر مفسر بتمييز', 'verborgen voornaamwoord met tamyīz']] },
      { label: ['الإعراب', 'Analyse'], sub: ['ص ٢٧–٢٨', 'p. 27–28'], page: 27, children: [['خبر مقدم ومبتدأ مؤخر', 'khabar vooraan, mubtadaʾ achteraan'], ['تقدم المخصوص', 'makhṣūṣ vooraan'], ['حذف المخصوص', 'makhṣūṣ weggelaten']] }
    ]
  },
  points: [
    [24, 'نعم فعل ماض جامد لإنشاء المدح: نعم الرجل طالب العلم، ﴿ولنعم دار المتقين جنات عدن﴾ [النحل: 30–31].', 'Niʿma is een star perfectum voor lof: "een uitstekende man is de student van kennis", "voortreffelijk is het huis van de godvrezenden: tuinen van ʿAdn" (16:30–31).'],
    [24, 'تتكون جملة المدح من: فعل المدح، والفاعل، والمخصوص بالمدح.', 'De lofzin bestaat uit het werkwoord, de fāʿil en het makhṣūṣ.'],
    [25, 'بئس فعل ماض جامد لإنشاء الذم: بئس الخلق الكذب، ﴿بئس الاسم الفسوق بعد الإيمان﴾ [الحجرات: 11].', 'Biʾsa is een star perfectum voor blaam: "een slechte eigenschap is liegen", "slecht is de naam van zondigheid na het geloof" (49:11).'],
    [25, 'يجري مجرى بئس: ساء وضعف وكبر: ﴿ساء مثلا القوم الذين كذبوا بآياتنا﴾ [الأعراف: 177]، ﴿كبرت كلمة تخرج من أفواههم﴾ [الكهف: 5].', 'Zoals biʾsa werken sāʾa, ḍaʿufa en kabura: "slecht is het voorbeeld van het volk dat Onze tekenen loochende" (7:177), "zwaar is het woord dat uit hun monden komt" (18:5).'],
    [26, 'قد يكون فاعل نعم وبئس ضميرا مستترا يفسره تمييز بعده: بئس خلقا الكذب، تقديره: بئس هو خلقا الكذب.', 'De fāʿil kan een verborgen voornaamwoord zijn, verklaard door een tamyīz: "biʾsa khuluqan al-kadhib", d.w.z. "biʾsa huwa khuluqan…".'],
    [27, 'في «نعم الخلق الصبر» وجهان: الجملة خبر مقدم والصبر مبتدأ مؤخر، أو الصبر خبر لمبتدأ محذوف تقديره هو.', 'In "niʿma l-khuluqu ṣ-ṣabr" zijn twee analyses: de zin is khabar vooraan en aṣ-ṣabr mubtadaʾ achteraan, of aṣ-ṣabr is khabar van een weggelaten "huwa".'],
    [28, 'إذا تقدم المخصوص أعرب مبتدأ والجملة بعده خبر: محمد نعم الصديق.', 'Staat het makhṣūṣ vooraan, dan is het mubtadaʾ en de zin erna khabar: "Muḥammad, een uitstekende vriend".'],
    [28, 'يحذف المخصوص إذا فهم من السياق: ﴿نعم العبد إنه أواب﴾ [ص: 44] أي: نعم العبد أيوب.', 'Het makhṣūṣ valt weg als het uit de context blijkt: "een uitstekende dienaar; hij keerde zich steeds tot Allah" (38:44), d.w.z. Ayyūb.']
  ],
  terms: [
    ['المخصوص بالمدح أو الذم', 'al-makhṣūṣ bi-l-madḥ aw adh-dhamm', 24, 'الاسم المقصود بالمدح أو الذم بعد الفاعل.', 'Het nomen dat geprezen of gelaakt wordt, na de fāʿil.'],
    ['حبذا', 'ḥabbadhā', 24, 'فعل يجري مجرى نعم في المدح، ولا حبذا في الذم.', 'Werkwoord dat werkt als niʿma voor lof; lā ḥabbadhā voor blaam.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['حالات فاعل نعم وبئس', 'Toestanden van de fāʿil van niʿma en biʾsa'],
      intro: ['كما في الصفحتين ٢٥–٢٦.', 'Zoals op p. 25–26.'],
      nodes: [
        [25, 'محلى بأل', 'Met al', 'نعم العلم التوحيد', 'een uitstekende kennis is de tawḥīd'],
        [26, 'مضاف إلى المحلى بأل', 'Geannexeerd aan een al-woord', '﴿ونعم أجر العاملين﴾', '"en voortreffelijk is het loon van de werkers" (3:136)'],
        [26, 'ما أو من الموصولة', 'Relatief mā of man', '﴿إن الله نعما يعظكم به﴾', '"voortreffelijk is waarmee Allah jullie vermaant" (4:58)'],
        [26, 'ضمير مستتر مفسر بتمييز', 'Verborgen voornaamwoord met tamyīz', 'نعم صديقا الوفي', 'een uitstekende vriend is de trouwe']
      ]
    },
    {
      type: 'steps',
      title: ['إعراب: نعم الخلق الصبر', 'Analyse: niʿma l-khuluqu ṣ-ṣabr'],
      intro: ['الوجه الأول كما في الصفحة ٢٧.', 'De eerste analyse zoals op p. 27.'],
      nodes: [
        [27, 'نعم', 'Niʿma', 'فعل ماض جامد لإنشاء المدح', 'star perfectum voor lof'],
        [27, 'الخلق', 'Al-khuluq', 'فاعل مرفوع وعلامة رفعه الضمة', 'fāʿil, nominatief met ḍamma'],
        [27, 'الجملة', 'De zin', 'في محل رفع خبر مقدم', 'op de plaats van een nominatief, khabar vooraan'],
        [27, 'الصبر', 'Aṣ-ṣabr', 'مبتدأ مؤخر مرفوع، وهو المخصوص بالمدح', 'mubtadaʾ achteraan, nominatief; het makhṣūṣ']
      ]
    }
  ],
  sections: [],
  keycards: [
    ['onderscheid', 24, 'أفعال المدح والذم', 'Werkwoorden van lof en blaam', ['المدح: نعم، حبذا، حسن', 'الذم: بئس، لا حبذا، ساء، ضعف، كبر'], ['lof: niʿma, ḥabbadhā, ḥasuna', 'blaam: biʾsa, lā ḥabbadhā, sāʾa, ḍaʿufa, kabura']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['نعم للمدح وبئس للذم، وهما فعلان جامدان.', 'Niʿma is voor lof en biʾsa voor blaam; beide zijn starre werkwoorden.'],
    ['الجملة: فعل وفاعل ومخصوص.', 'De zin: werkwoord, fāʿil en makhṣūṣ.'],
    ['لفاعلهما أربع حالات.', 'Hun fāʿil heeft vier toestanden.'],
    ['قد يتقدم المخصوص أو يحذف.', 'Het makhṣūṣ kan voorop staan of wegvallen.']
  ],
  quiz: [
    { type: 'mc', page: 24, q: ['ما المخصوص بالمدح في: نعم العمل الصلاة في وقتها؟', 'Wat is het makhṣūṣ in "niʿma l-ʿamalu ṣ-ṣalātu fī waqtihā"?'], options: [['الصلاة', 'العمل', 'نعم', 'وقتها'], ['aṣ-ṣalāt', 'al-ʿamal', 'niʿma', 'waqtihā']], answer: 0, explain: ['العمل فاعل، والصلاة مخصوص بالمدح.', 'Al-ʿamal is fāʿil, aṣ-ṣalāt het makhṣūṣ.'] },
    { type: 'tf', page: 26, q: ['في «بئس خلقا الكذب» فاعل بئس ضمير مستتر.', 'In "biʾsa khuluqan al-kadhib" is de fāʿil een verborgen voornaamwoord.'], answer: 0, explain: ['تقديره: بئس هو خلقا الكذب، وخلقا تمييز.', 'D.w.z. "biʾsa huwa khuluqan…", en khuluqan is tamyīz.'] },
    { type: 'mc', page: 28, q: ['ما المخصوص المحذوف في ﴿نعم العبد إنه أواب﴾؟', 'Wat is het weggelaten makhṣūṣ in "een uitstekende dienaar" (38:44)?'], options: [['أيوب', 'الله', 'نحن', 'المولى'], ['Ayyūb', 'Allah', 'wij', 'de Beschermer']], answer: 0, explain: ['التقدير: نعم العبد أيوب.', 'D.w.z.: een uitstekende dienaar is Ayyūb.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٢٩.', 'Oefening van het boek op p. 29. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
