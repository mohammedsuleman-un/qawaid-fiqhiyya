// Hoofdstukkaart bij التفسير (٢), eenheid 5: سورة الانفطار (lessen 20–21, boek p. 77–84).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De uitspraak van ʿUmar op p. 79 staat in het boek zonder bron
// en is daarom niet in het hadith-tabblad opgenomen. Les 21 loopt in het boek door met al-Muṭaffifīn 1–6
// (p. 85–88); die verzen staan op de kaart van eenheid 6.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التفسير (٢)، سلسلة زاد العلمية',
  pages: '77–84',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTafsir/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'ابن عمر', text: 'من سره أن ينظر إلى يوم القيامة كأنه رأي عين فليقرأ: ﴿إذا الشمس كورت﴾، و﴿إذا السماء انفطرت﴾، و﴿إذا السماء انشقت﴾', takhrij: 'أخرجه الترمذي وصححه الألباني', note: 'في أول السورة؛ وفي الصفحة ٦٦ ذكر الكتاب أن الترمذي حسنه.', pages: [78], nl: 'Wie de Opstandingsdag wil zien alsof hij hem met eigen ogen ziet, laat hem "Wanneer de zon wordt opgerold", "Wanneer de hemel splijt" en "Wanneer de hemel openscheurt" reciteren', nlNote: 'Aan het begin van de soera; op p. 66 vermeldt het boek dat at-Tirmidhī hem ḥasan noemde.' }
]

const TAKHRIJ_NL = { 'أخرجه الترمذي وصححه الألباني': 'at-Tirmidhī; al-Albānī verklaarde hem ṣaḥīḥ' }
const NARRATOR_NL = { 'ابن عمر': 'Ibn ʿUmar' }

const PERSONS = [
  ['ibn-umar', 'text', [78], 'روى حديث «من سره أن ينظر إلى يوم القيامة».', 'Overleverde de hadith "wie de Opstandingsdag wil zien".'],
  ['umar-ibn-al-khattab', 'text', [79], 'قرأ ﴿ما غرك بربك الكريم﴾ فقال: غره والله جهله.', 'Reciteerde "wat heeft jou misleid over je edelmoedige Heer?" en zei: bij Allah, zijn onwetendheid misleidde hem.'],
  ['at-tirmidhi', 'takhrij', [78], 'أخرج حديث ابن عمر.', 'Nam de hadith van Ibn ʿUmar op.'],
  ['al-albani', 'takhrij', [78], 'صحح حديث ابن عمر.', 'Verklaarde de hadith van Ibn ʿUmar ṣaḥīḥ.']
]

const ar = {
  scope: 'unit',
  unit: 5,
  title: 'سورة الانفطار',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'سورة مكية تبدأ بمشاهد دمار العالم يوم القيامة، ثم تعاتب الإنسان المغتر بربه الكريم الذي خلقه فسواه فعدله، ثم تبين أن على الناس حفظة كرامًا كاتبين، وأن الأبرار في نعيم والفجار في جحيم، وأن الأمر يوم الدين لله وحده.',
  source,
  visual: {
    type: 'mindmap',
    title: 'سورة الانفطار في خريطة واحدة',
    intro: 'مقطعا السورة كما قسمها الكتاب.',
    root: { label: 'سورة الانفطار', sub: 'الوحدة الخامسة' },
    nodes: [
      { label: 'دمار العالم', sub: 'الآيات ١–٥', page: 79, children: ['السماء انفطرت', 'الكواكب انتثرت', 'البحار فجرت', 'القبور بعثرت'] },
      { label: 'ما غرك بربك الكريم', sub: 'الآيات ٦–٨', page: 79, children: ['خلقك فسواك', 'فعدلك', 'في أي صورة'] },
      { label: 'الحفظة', sub: 'الآيات ٩–١٢', page: 81, children: ['كرام كاتبون', 'يعلمون ما تفعلون'] },
      { label: 'الأبرار والفجار', sub: 'الآيات ١٣–١٩', page: 81, children: ['نعيم', 'جحيم', 'الأمر يومئذ لله'] }
    ]
  },
  points: [
    { text: 'انفطار السماء انشقاقها.', page: 79 },
    { text: 'تعرض الأعمال يوم القيامة فتعلم كل نفس ما قدمت وأخرت مما نسيته في الدنيا.', page: 79 },
    { text: 'وصف الله نفسه بالكرم لينبه أنه لا ينبغي أن يقابل الكريم بالأعمال القبيحة.', page: 79 },
    { text: 'رتبت الآيات دمار العالم: السقف وهو السماء، ثم ما على وجه الأرض، ثم بناء الأرض ببعثرة القبور.', page: 80 },
    { text: 'لكل إنسان حفظة كرام يكتبون كل ما قال وفعل، ولا يظلمون أحدًا.', page: 82 },
    { text: 'الأبرار في نعيم في الدنيا والبرزخ والآخرة، والفجار في جحيم فيها كلها.', page: 81 },
    { text: 'لا يغيب الفجار عن النار: لا يموتون ولا يخرجون ولا يعطون راحة.', page: 82 },
    { text: 'الأمر لله يوم القيامة وفي غيره، وخص يوم القيامة لظهور أمره فيه.', page: 83 }
  ],
  terms: [
    { term: 'انفطرت', translit: 'infaṭarat', meaning: 'انشقت.', explanation: '', notes: [], page: 79 },
    { term: 'انتثرت', translit: 'intatharat', meaning: 'تساقطت متفرقة منثورة.', explanation: '', notes: [], page: 79 },
    { term: 'فجرت', translit: 'fujjirat', meaning: 'فجر بعضها على بعض فاختلط العذب بالمالح.', explanation: '', notes: [], page: 79 },
    { term: 'بعثرت', translit: 'buʿthirat', meaning: 'قلبت؛ بعثر المتاع إذا جعل أسفله أعلاه.', explanation: '', notes: [], page: 79 },
    { term: 'فعدلك', translit: 'fa-ʿadalaka', meaning: 'جعلك سويًّا معتدل القامة في أحسن الهيئات.', explanation: '', notes: [], page: 79 },
    { term: 'الحافظون', translit: 'al-ḥāfiẓūn', meaning: 'الملائكة يحفظون الأعمال ويحصونها.', explanation: '', notes: [], page: 81 },
    { term: 'الأبرار', translit: 'al-abrār', meaning: 'الذين بروا بأداء فرائض الله واجتناب معاصيه.', explanation: '', notes: [], page: 81 },
    { term: 'يصلونها', translit: 'yaṣlawnahā', meaning: 'يدخلونها ويحترقون بها.', explanation: '', notes: [], page: 82 },
    { term: 'يوم الدين', translit: 'yawm ad-dīn', meaning: 'يوم الحساب والجزاء.', explanation: '', notes: [], page: 82 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'ترتيب دمار العالم',
      intro: 'كما في فوائد الصفحة ٨٠.',
      nodes: [
        { label: 'السقف', sub: 'السماء انفطرت والكواكب انتثرت', page: 80 },
        { label: 'وجه الأرض', sub: 'البحار فجرت', page: 80 },
        { label: 'بناء الأرض', sub: 'القبور بعثرت', page: 80 }
      ]
    },
    {
      type: 'compare',
      title: 'الأبرار والفجار',
      intro: 'كما في الآيات ١٣–١٦.',
      columns: ['في الدنيا', 'في البرزخ والآخرة'],
      rows: [
        { label: 'الأبرار', cells: ['يتنعم قلبهم بذكر الله', 'نعيم ثم الجنة'] },
        { label: 'الفجار', cells: ['تتعذب قلوبهم وتنقبض صدورهم لبعدها عن الله', 'جحيم لا يغيبون عنه'] }
      ],
      page: 82
    }
  ],
  sections: [
    { title: 'بعثرة القبور', text: 'حالة من حالات الانقلاب الأرضي، خصت بالذكر لما فيها من الهول باستحضار الأرض وقد ألقت ما في باطن المقابر.', page: 80 },
    { title: '﴿في أي صورة ما شاء ركبك﴾', text: 'من الناس من يشبه أباه أو أمه أو خاله أو عمه، ومنهم الجميل والقبيح والأبيض والأسود.', page: 79 },
    { title: 'تكرار ﴿وما أدراك ما يوم الدين﴾', text: 'تعظيمًا لقدره وتفخيمًا لشأنه وتهويلًا لأمره.', page: 82 },
    { title: 'صفات من يتولى أمور الأمة', text: 'استنبط الكتاب من صفات الحفظة: الحفظ وكرم الأخلاق والكتابة والعلم بما هو موكل به.', page: 83 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'صفات الحفظة', items: ['حافظون', 'كرام', 'كاتبون', 'يعلمون ما تفعلون'], page: 81, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'مشاهد دمار العالم: السماء، ثم البحار، ثم القبور.',
    'لا يقابل الرب الكريم بالمعاصي.',
    'على الناس حفظة كرام كاتبون.',
    'الأبرار في نعيم والفجار في جحيم.',
    'الأمر يوم الدين لله وحده.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما معنى «بعثرت»؟', options: ['قلبت', 'هدمت', 'أغلقت', 'نسيت'], answer: 0, explain: 'بعثر المتاع إذا جعل أسفله أعلاه.', page: 79 },
    { type: 'mc', q: 'لماذا وصف الله نفسه بالكرم في ﴿ما غرك بربك الكريم﴾؟', options: ['لينبه أنه لا يقابل الكريم بالقبيح', 'لأن العاصي يستحق الثواب', 'للسجع فقط', 'لأنه لا يعاقب'], answer: 0, explain: 'كما في الصفحة ٧٩.', page: 79 },
    { type: 'tf', q: 'الأبرار في نعيم في الآخرة فقط.', options: ['صواب', 'خطأ'], answer: 1, explain: 'في الدنيا والبرزخ والآخرة.', page: 81 },
    { type: 'mc', q: 'ما معنى ﴿وما هم عنها بغائبين﴾؟', options: ['لا يموتون ولا يخرجون ولا يعطون راحة', 'يغيبون عنها أحيانًا', 'يخرجون بعد مدة', 'لا يرونها'], answer: 0, explain: 'لا يغيبون عن النار بأي طريقة.', page: 82 },
    { type: 'mc', q: 'لماذا كرر ﴿وما أدراك ما يوم الدين﴾؟', options: ['تعظيمًا وتهويلًا', 'لأن الآية نسخت', 'لأنهم لم يسمعوا', 'للتخفيف'], answer: 0, explain: 'تعظيمًا لقدره وتفخيمًا لشأنه.', page: 82 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٨٠ و٨٣. ويستمر الدرس الحادي والعشرون في الكتاب بأول سورة المطففين (الآيات ١–٦)، وهي في بطاقة الوحدة السادسة.'
}

const nl = {
  scope: 'unit',
  unit: 5,
  title: 'Soera al-Infiṭār',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'Een Mekkaanse soera die begint met beelden van de vernietiging van de wereld op de Opstandingsdag; daarna een verwijt aan de mens die zich laat misleiden over zijn edelmoedige Heer, die hem schiep, vormde en evenwichtig maakte; dan dat er over de mensen edele, schrijvende wachters staan, dat de vromen in gelukzaligheid zijn en de zondaars in de Hel, en dat op de Dag van de Vergelding alles bij Allah alleen ligt.',
  source: { ...source, label: 'At-Tafsīr (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Soera al-Infiṭār in één kaart',
    intro: 'De delen van de soera zoals het boek ze indeelt.',
    root: { label: 'Soera al-Infiṭār', sub: 'Eenheid 5' },
    nodes: [
      { label: 'Vernietiging van de wereld', sub: 'vers 1–5', page: 79, children: ['de hemel splijt', 'de sterren verstrooid', 'de zeeën laten stromen', 'de graven omgekeerd'] },
      { label: '"Wat heeft jou misleid?"', sub: 'vers 6–8', page: 79, children: ['schiep en vormde je', 'maakte je evenwichtig', 'in elke vorm die Hij wilde'] },
      { label: 'De wachters', sub: 'vers 9–12', page: 81, children: ['edele schrijvers', 'zij weten wat jullie doen'] },
      { label: 'Vromen en zondaars', sub: 'vers 13–19', page: 81, children: ['gelukzaligheid', 'de Hel', 'alles is bij Allah'] }
    ]
  },
  points: [
    { text: 'Het splijten van de hemel is haar openscheuren.', page: 79 },
    { text: 'Op de Opstandingsdag worden de daden getoond en weet iedere ziel wat zij vooruitzond en naliet, ook wat zij in deze wereld vergat.', page: 79 },
    { text: 'Allah noemt Zichzelf hier edelmoedig om aan te geven dat je de Edelmoedige niet met lelijke daden beantwoordt.', page: 79 },
    { text: 'De verzen ordenen de vernietiging: eerst het dak, de hemel; dan het aardoppervlak; dan het binnenste van de aarde met de omgekeerde graven.', page: 80 },
    { text: 'Ieder mens heeft edele wachters die alles opschrijven wat hij zegt en doet, zonder iemand onrecht te doen.', page: 82 },
    { text: 'De vromen zijn in gelukzaligheid in deze wereld, in het barzakh en in het hiernamaals; de zondaars in alle drie in een hel.', page: 81 },
    { text: 'De zondaars ontsnappen niet aan het Vuur: zij sterven niet, gaan er niet uit en krijgen geen rust.', page: 82 },
    { text: 'Alles ligt bij Allah, op de Opstandingsdag en daarbuiten; die dag wordt genoemd omdat Zijn gezag dan het duidelijkst blijkt.', page: 83 }
  ],
  terms: [
    { term: 'انفطرت', translit: 'infaṭarat', meaning: 'Zij spleet open.', explanation: '', notes: [], page: 79 },
    { term: 'انتثرت', translit: 'intatharat', meaning: 'Zij vielen verspreid neer.', explanation: '', notes: [], page: 79 },
    { term: 'فجرت', translit: 'fujjirat', meaning: 'De zeeën stromen in elkaar, zoet en zout water vermengen zich.', explanation: '', notes: [], page: 79 },
    { term: 'بعثرت', translit: 'buʿthirat', meaning: 'Omgekeerd, zodat het onderste boven komt.', explanation: '', notes: [], page: 79 },
    { term: 'فعدلك', translit: 'fa-ʿadalaka', meaning: 'Hij maakte je evenwichtig en rechtop in de beste vorm.', explanation: '', notes: [], page: 79 },
    { term: 'الحافظون', translit: 'al-ḥāfiẓūn', meaning: 'De engelen die de daden bewaren en optellen.', explanation: '', notes: [], page: 81 },
    { term: 'الأبرار', translit: 'al-abrār', meaning: 'De vromen, die Allahs plichten nakomen en Zijn verboden mijden.', explanation: '', notes: [], page: 81 },
    { term: 'يصلونها', translit: 'yaṣlawnahā', meaning: 'Zij gaan erin en branden erin.', explanation: '', notes: [], page: 82 },
    { term: 'يوم الدين', translit: 'yawm ad-dīn', meaning: 'De Dag van de afrekening en de vergelding.', explanation: '', notes: [], page: 82 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De volgorde van de vernietiging',
      intro: 'Zoals in de lessen op p. 80.',
      nodes: [
        { label: 'Het dak', sub: 'de hemel splijt, de sterren vallen', page: 80 },
        { label: 'Het aardoppervlak', sub: 'de zeeën stromen in elkaar', page: 80 },
        { label: 'Het binnenste van de aarde', sub: 'de graven worden omgekeerd', page: 80 }
      ]
    },
    {
      type: 'compare',
      title: 'Vromen en zondaars',
      intro: 'Zoals in vers 13–16.',
      columns: ['In deze wereld', 'In het barzakh en het hiernamaals'],
      rows: [
        { label: 'Vromen', cells: ['hun hart geniet van het gedenken van Allah', 'gelukzaligheid, dan het Paradijs'] },
        { label: 'Zondaars', cells: ['hun hart lijdt en hun borst is beklemd door hun afstand tot Allah', 'een hel die zij niet ontvluchten'] }
      ],
      page: 82
    }
  ],
  sections: [
    { title: 'De omgekeerde graven', text: 'Een van de vormen van aardverschuiving, apart genoemd vanwege de verschrikking: de aarde werpt naar buiten wat in de graven lag.', page: 80 },
    { title: '"In welke vorm Hij ook wilde"', text: 'De een lijkt op zijn vader, moeder, oom van moederskant of oom van vaderskant; de een is mooi, de ander lelijk, de een licht, de ander donker.', page: 79 },
    { title: 'De herhaling van "wat doet jou weten wat de Dag van de Vergelding is?"', text: 'Om de grootsheid, het gewicht en de verschrikking van die dag te benadrukken.', page: 82 },
    { title: 'Eigenschappen van wie de zaken van de umma beheert', text: 'Het boek leidt uit de eigenschappen van de wachters af: betrouwbaar bewaren, edel karakter, schrijven en kennis van de taak.', page: 83 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Eigenschappen van de wachters', items: ['bewakers', 'edel', 'schrijvers', 'weten wat jullie doen'], page: 81, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Beelden van de vernietiging: de hemel, de zeeën, de graven.',
    'De edelmoedige Heer beantwoord je niet met zonden.',
    'Over de mensen staan edele, schrijvende wachters.',
    'De vromen zijn in gelukzaligheid, de zondaars in de Hel.',
    'Op de Dag van de Vergelding ligt alles bij Allah alleen.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat betekent buʿthirat?', options: ['omgekeerd', 'afgebroken', 'gesloten', 'vergeten'], answer: 0, explain: 'Het onderste komt boven.', page: 79 },
    { type: 'mc', q: 'Waarom noemt Allah Zichzelf hier edelmoedig?', options: ['om aan te geven dat je de Edelmoedige niet met lelijke daden beantwoordt', 'omdat de zondaar beloning verdient', 'alleen voor het rijm', 'omdat Hij niet straft'], answer: 0, explain: 'Zoals op p. 79.', page: 79 },
    { type: 'tf', q: 'De vromen zijn alleen in het hiernamaals in gelukzaligheid.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'In deze wereld, in het barzakh en in het hiernamaals.', page: 81 },
    { type: 'mc', q: 'Wat betekent "en zij zijn er niet afwezig van"?', options: ['zij sterven niet, gaan er niet uit en krijgen geen rust', 'zij zijn er soms niet', 'zij gaan er na een tijd uit', 'zij zien het niet'], answer: 0, explain: 'Zij ontsnappen op geen enkele manier aan het Vuur.', page: 82 },
    { type: 'mc', q: 'Waarom wordt "wat doet jou weten wat de Dag van de Vergelding is?" herhaald?', options: ['om de grootsheid en verschrikking te benadrukken', 'omdat het vers is afgeschaft', 'omdat zij het niet hoorden', 'om het lichter te maken'], answer: 0, explain: 'Zoals op p. 82.', page: 82 }
  ]),
  note: 'Oefeningen van het boek op p. 80 en 83. Les 21 loopt in het boek door met het begin van al-Muṭaffifīn (vers 1–6); die verzen staan op de kaart van eenheid 6. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tafsir', chapter: '20', unit: 5, ar, nl }
