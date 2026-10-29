// Hoofdstukkaart bij اللغة العربية (٤), eenheid 2: اسم التفضيل (lessen 2, boek p. 15–21).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-arabic/leesnotities.md);
// voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-arabic',
  chapter: '2',
  unit: 2,
  source: {
    label: ['كتاب اللغة العربية (٤)، سلسلة زاد العلمية', 'Arabische taal (4), Zad-reeks'],
    pages: '15–21',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['اسم التفضيل', 'De vergrotende trap'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'اسم التفضيل اسم مشتق على وزن أفعل يدل على أن شيئين اشتركا في صفة وزاد أحدهما على الآخر فيها. يصاغ بشروط فعل التعجب، فإن فقد شرط جيء بمصدر صريح بعد أفعل مساعد ويعرب تمييزا، وله أربعة أحوال في الاستعمال.',
    'Ism at-tafḍīl is een afgeleid nomen op afʿal dat aangeeft dat twee dingen een eigenschap delen en het een het ander daarin overtreft. Het wordt gevormd met dezelfde voorwaarden als het werkwoord van verwondering; ontbreekt er een, dan komt een maṣdar na een hulp-afʿal, als tamyīz. Er zijn vier toestanden in het gebruik.'
  ],
  map: {
    title: ['اسم التفضيل في خريطة واحدة', 'Ism at-tafḍīl in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['اسم التفضيل', 'Ism at-tafḍīl'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['التعريف', 'Definitie'], sub: ['ص ١٦', 'p. 16'], page: 16, children: [['على وزن أفعل', 'op afʿal'], ['المفضل والمفضل عليه', 'mufaḍḍal en mufaḍḍal ʿalayh']] },
      { label: ['الصوغ', 'Vorming'], sub: ['ص ١٦–١٧', 'p. 16–17'], page: 16, children: [['شروط فعل التعجب', 'de voorwaarden van taʿajjub'], ['المصدر تمييزا', 'maṣdar als tamyīz']] },
      { label: ['الأحوال الأربعة', 'De vier toestanden'], sub: ['ص ١٧–١٩', 'p. 17–19'], page: 17, children: [['مجرد', 'zonder al of iḍāfa'], ['مضاف إلى نكرة', 'geannexeerd aan onbepaald'], ['محلى بأل', 'met al'], ['مضاف إلى معرفة', 'geannexeerd aan bepaald']] }
    ]
  },
  points: [
    [16, 'من أمثلته: ﴿إذ قالوا ليوسف وأخوه أحب إلى أبينا منا﴾ [يوسف: 8]، ﴿والفتنة أكبر من القتل﴾ [البقرة: 217].', 'Voorbeelden: "Yūsuf en zijn broer zijn onze vader liever dan wij" (12:8), "verleiding is erger dan doden" (2:217).'],
    [17, 'إذا استوفى الفعل الشروط صيغ أفعل مباشرة: العلم أنفع من المال، ﴿وإثمهما أكبر من نفعهما﴾ [البقرة: 219].', 'Voldoet het werkwoord aan alle voorwaarden, dan vormt men direct afʿal: "kennis is nuttiger dan geld", "hun zonde is groter dan hun nut" (2:219).'],
    [17, 'إذا فقد شرط جيء بأفعل مساعد كأكثر وأشد وأفضل وأحسن، ويعرب المصدر بعده تمييزا: ﴿هو أفصح مني لسانا﴾ [القصص: 34].', 'Ontbreekt een voorwaarde, dan een hulp-afʿal zoals akthar of ashadd met de maṣdar als tamyīz: "hij is welbespraakter dan ik" (28:34).'],
    [17, 'المجرد من أل والإضافة يلزم الإفراد والتذكير: هند أقصر من سعاد، الأولاد أطول من البنات.', 'Zonder al en iḍāfa blijft het enkelvoud en mannelijk: "Hind is kleiner dan Suʿād", "de jongens zijn langer dan de meisjes".'],
    [18, 'المضاف إلى نكرة يلزم الإفراد والتذكير، ويطابق المضاف إليه المفضل: الطالبتان الملتزمتان أفضل طالبتين.', 'Geannexeerd aan onbepaald: enkelvoud en mannelijk, en het geannexeerde woord stemt overeen met het mufaḍḍal: "de twee studentes zijn de beste twee studentes".'],
    [19, 'المحلى بأل تجب مطابقته للمفضل، ولا يذكر بعده المفضل عليه: ﴿وأنتم الأعلون﴾ [آل عمران: 139].', 'Met al moet het overeenstemmen met het mufaḍḍal, en het mufaḍḍal ʿalayh volgt niet: "jullie zijn de hoogsten" (3:139).'],
    [19, 'المضاف إلى معرفة يجوز فيه الإفراد والتذكير والمطابقة: هند أفضل النساء، أو فضلى النساء.', 'Geannexeerd aan bepaald: enkelvoud-mannelijk en overeenstemming zijn beide toegestaan: "Hind is de beste der vrouwen" (afḍal of fuḍlā).']
  ],
  terms: [
    ['اسم التفضيل', 'ism at-tafḍīl', 16, 'اسم مشتق على وزن أفعل يدل على اشتراك شيئين في صفة وزيادة أحدهما.', 'Afgeleid nomen op afʿal: twee delen een eigenschap en het een overtreft het ander.'],
    ['المفضل والمفضل عليه', 'al-mufaḍḍal wa-l-mufaḍḍal ʿalayh', 17, 'المفضل: الزائد في الصفة، والمفضل عليه: المزيد عليه.', 'Mufaḍḍal: wie de eigenschap meer heeft; mufaḍḍal ʿalayh: met wie vergeleken wordt.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أحوال اسم التفضيل', 'De vier toestanden'],
      intro: ['كما في الخلاصة ص ٢٠.', 'Zoals in de samenvatting op p. 20.'],
      columns: [['الحكم', 'Regel'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['مجرد من أل والإضافة', 'Zonder al en iḍāfa'], cells: [['الإفراد والتذكير', 'enkelvoud en mannelijk'], ['محمد أكبر من أخيه', 'Muḥammad is ouder dan zijn broer']] },
        { label: ['مضاف إلى نكرة', 'Geannexeerd aan onbepaald'], cells: [['الإفراد والتذكير، ويطابق المضاف إليه المفضل', 'enkelvoud-mannelijk; het geannexeerde stemt overeen met het mufaḍḍal'], ['هذان الرجلان أفضل صديقين', 'deze twee mannen zijn de beste twee vrienden']] },
        { label: ['محلى بأل', 'Met al'], cells: [['المطابقة، ولا يذكر المفضل عليه', 'overeenstemming; geen mufaḍḍal ʿalayh'], ['﴿والصلاة الوسطى﴾', '"en het middelste gebed" (2:238)']] },
        { label: ['مضاف إلى معرفة', 'Geannexeerd aan bepaald'], cells: [['يجوز الأمران', 'beide toegestaan'], ['الزيدان أفضل اللاعبين أو أفضلا اللاعبين', 'de twee Zayds zijn de beste spelers (afḍal of afḍalā)']] }
      ],
      page: 17
    }
  ],
  sections: [],
  keycards: [
    ['voorwaarde', 16, 'شروط صوغ اسم التفضيل', 'Voorwaarden voor de vorming', ['ثلاثي', 'تام', 'مثبت', 'مبني للمعلوم', 'متصرف', 'قابل للتفاوت', 'ليس الوصف منه على أفعل فعلاء'], ['drieletterig', 'volledig', 'bevestigd', 'actief', 'vervoegbaar', 'gradatie toelatend', 'geen afʿal/faʿlāʾ-adjectief']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['اسم التفضيل على وزن أفعل.', 'Ism at-tafḍīl staat op afʿal.'],
    ['يصاغ بشروط فعل التعجب.', 'Het wordt gevormd met de voorwaarden van taʿajjub.'],
    ['إذا فقد شرط جيء بأفعل مساعد والمصدر تمييز.', 'Ontbreekt een voorwaarde: hulp-afʿal met maṣdar als tamyīz.'],
    ['له أربعة أحوال في المطابقة.', 'Er zijn vier toestanden voor de overeenstemming.']
  ],
  quiz: [
    { type: 'mc', page: 17, q: ['ما إعراب «لسانا» في ﴿هو أفصح مني لسانا﴾؟', 'Wat is lisānan in "hij is welbespraakter dan ik" (28:34)?'], options: [['تمييز منصوب', 'مفعول به', 'حال', 'خبر'], ['tamyīz, accusatief', 'lijdend voorwerp', 'ḥāl', 'khabar']], answer: 0, explain: ['المصدر بعد أفعل التفضيل يعرب تمييزا.', 'De maṣdar na afʿal is tamyīz.'] },
    { type: 'tf', page: 19, q: ['يذكر المفضل عليه بعد اسم التفضيل المحلى بأل.', 'Na ism at-tafḍīl met al volgt het mufaḍḍal ʿalayh.'], answer: 1, explain: ['لا يذكر بعده المفضل عليه.', 'Het mufaḍḍal ʿalayh volgt niet.'] },
    { type: 'mc', page: 17, q: ['أي الجمل صحيحة؟', 'Welke zin is juist?'], options: [['هند أقصر من سعاد', 'هند قصرى من سعاد', 'هند القصرى من سعاد', 'هند أقصرة من سعاد'], ['Hind aqṣaru min Suʿād', 'Hind quṣrā min Suʿād', 'Hind al-quṣrā min Suʿād', 'Hind aqṣaratu min Suʿād']], answer: 0, explain: ['المجرد من أل والإضافة يلزم الإفراد والتذكير.', 'Zonder al en iḍāfa: enkelvoud en mannelijk.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٢١.', 'Oefening van het boek op p. 21. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
