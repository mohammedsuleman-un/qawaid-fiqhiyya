// Hoofdstukkaart bij العقيدة (٢), eenheid 3: توحيد الأسماء والصفات (lessen 7–10, boek p. 37–49).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. p. 46–47 (Jahmiyya en Muʿtazila) staan in het boek als
// "للاطلاع فقط" (alleen ter kennisname).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٢)، سلسلة زاد العلمية',
  pages: '37–49',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'عائشة', text: 'الحمد لله الذي وسع سمعه الأصوات، لقد جاءت المجادلة إلى النبي ﷺ تكلمه، وأنا في ناحية البيت ما أسمع، فأنزل الله عز وجل: ﴿قد سمع الله قول التي تجادلك في زوجها﴾', takhrij: 'في صحيح البخاري معلقا', note: 'في إثبات صفة السمع مع نفي المماثلة.', pages: [41], nl: 'lof zij Allah, Wiens gehoor alle stemmen omvat: de vrouw die pleitte kwam bij de Profeet ﷺ en sprak met hem terwijl ik in een hoek van het huis zat en het niet hoorde, en Allah zond neer: "Allah heeft het woord gehoord van de vrouw die met jou over haar man pleit"', nlNote: 'Bij het bevestigen van de eigenschap horen, zonder gelijkenis met de schepping.' },
  { narrator: 'أبو هريرة', text: 'إن لله تسعة وتسعين اسما، مائة إلا واحدا، من أحصاها دخل الجنة', takhrij: 'أخرجه البخاري ومسلم', pages: [49], nl: 'Allah heeft negenennegentig namen, honderd min één; wie ze telt (en bewaart), gaat het Paradijs binnen', nlNote: '' },
  { narrator: 'عبد الله بن مسعود', text: 'ما قال عبد قط إذا أصابه هم وحزن: اللهم إني عبدك وابن عبدك وابن أمتك، ناصيتي بيدك، ماض في حكمك، عدل في قضاؤك، أسألك بكل اسم هو لك سميت به نفسك، أو أنزلته في كتابك، أو علمته أحدا من خلقك، أو استأثرت به في علم الغيب عندك، أن تجعل القرآن ربيع قلبي، ونور صدري، وجلاء حزني، وذهاب همي، إلا أذهب الله عز وجل همه، وأبدله مكان حزنه فرحا.. الحديث', takhrij: 'أخرجه أحمد، وإسناده صحيح', note: 'دليل أن لله أسماء استأثر بها في علم الغيب.', pages: [49], nl: 'geen dienaar die door zorg en verdriet getroffen wordt en zegt: "O Allah, ik ben Uw dienaar ... ik vraag U bij elke naam die U toebehoort, waarmee U Uzelf noemde, die U in Uw Boek neerzond, die U iemand van Uw schepping leerde of die U bij Uzelf in de kennis van het verborgene hield, dat U de Koran de lente van mijn hart maakt ...", of Allah neemt zijn zorg weg en vervangt zijn verdriet door vreugde', nlNote: 'Bewijs dat Allah namen heeft die Hij in de kennis van het verborgene bij Zich hield.' },
  { narrator: 'أبو هريرة', text: 'اللهم أنت الأول فليس قبلك شيء، وأنت الآخر فليس بعدك شيء، وأنت الظاهر فليس فوقك شيء، وأنت الباطن فليس دونك شيء', takhrij: 'أخرجه مسلم', pages: [49], nl: 'O Allah, U bent de Eerste en er is niets vóór U, U bent de Laatste en er is niets na U, U bent de Hoogste (aẓ-Ẓāhir) en er is niets boven U, U bent de Nabije (al-Bāṭin) en er is niets dichterbij dan U', nlNote: '' }
]

const TAKHRIJ_NL = {
  'في صحيح البخاري معلقا': 'in Ṣaḥīḥ al-Bukhārī, zonder volledige keten (muʿallaq)',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه أحمد، وإسناده صحيح': 'Aḥmad; de keten is authentiek',
  'أخرجه مسلم': 'Muslim'
}
const NARRATOR_NL = { 'عائشة': 'ʿĀʾisha', 'أبو هريرة': 'Abū Hurayra', 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd' }

const PERSONS = [
  ['aisha', 'text', [41], 'روت قصة المجادلة: «الحمد لله الذي وسع سمعه الأصوات».', 'Vertelde over de pleitende vrouw: "lof zij Allah, Wiens gehoor alle stemmen omvat".'],
  ['at-tabari', 'text', [41], 'نقل الكتاب قوله: «فلا تمثلوا لله الأمثال، ولا تشبهوا له الأشباه».', 'Het boek citeert hem: "maak voor Allah geen vergelijkingen en geen gelijkenissen".'],
  ['al-hasan-al-basri', 'text', [47], 'ذكر الكتاب اعتزال واصل بن عطاء مجلسه، ومنه سميت المعتزلة (للاطلاع فقط).', 'Het boek vertelt dat Wāṣil ibn ʿAṭāʾ zijn kring verliet, waaraan de Muʿtazila hun naam ontlenen (ter kennisname).'],
  ['abu-hurayra', 'text', [49], 'روى حديث «إن لله تسعة وتسعين اسما» ودعاء «اللهم أنت الأول».', 'Overleverde "Allah heeft negenennegentig namen" en de smeekbede "O Allah, U bent de Eerste".'],
  ['ibn-masud', 'text', [49], 'روى دعاء الهم والحزن «اللهم إني عبدك...».', 'Overleverde de smeekbede bij zorg en verdriet "O Allah, ik ben Uw dienaar ...".'],
  ['al-bukhari', 'takhrij', [41, 49], 'ذكر أثر عائشة معلقا، وأخرج حديث الأسماء التسعة والتسعين.', 'Noemde het verhaal van ʿĀʾisha zonder volledige keten en nam de hadith van de 99 namen op.'],
  ['muslim', 'takhrij', [49], 'أخرج حديث الأسماء ودعاء «اللهم أنت الأول».', 'Nam de hadith van de namen en "O Allah, U bent de Eerste" op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [49], 'أخرج دعاء الهم والحزن بإسناد صحيح.', 'Nam de smeekbede bij zorg en verdriet op, met een authentieke keten.']
]

const ar = {
  scope: 'unit',
  unit: 3,
  title: 'توحيد الأسماء والصفات',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'معنى توحيد الأسماء والصفات وطريقة أهل السنة فيه، وقاعدة ما نفاه الله عن نفسه، وبيان التحريف والتعطيل والتكييف والتمثيل والتشبيه، والأدلة على إثبات الأسماء والصفات.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثالثة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ٣٨ من الكتاب.',
    root: { label: 'توحيد الأسماء والصفات', sub: 'الوحدة الثالثة' },
    nodes: [
      { label: 'معناه وطريقة أهل السنة', sub: 'الدرس ٧', page: 39, children: ['في الإثبات', 'في النفي', 'فيما لم يرد نفيه ولا إثباته'] },
      { label: 'قاعدة النفي', sub: 'الدرس ٨', page: 41, children: ['نفي الصفة وإثبات كمال ضدها', 'التحريف وأقسامه'] },
      { label: 'ما ينفى عن الصفات', sub: 'الدرس ٩', page: 43, children: ['التعطيل', 'التكييف', 'التمثيل والتشبيه'] },
      { label: 'الأدلة', sub: 'الدرس ١٠', page: 48, children: ['من القرآن', 'من السنة'] }
    ]
  },
  points: [
    { text: 'توحيد الأسماء والصفات: الإيمان بأسماء الله وصفاته الواردة في الكتاب والسنة وبمعانيها وأحكامها، على وجه يليق بجلاله، من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل.', page: 39 },
    { text: 'أهل السنة يثبتون ما أثبته الله لنفسه، وينفون ما نفاه مع إثبات كمال ضده، ويتوقفون في لفظ ما لم يرد نفيه ولا إثباته ويستفصلون في معناه.', page: 39 },
    { text: 'آية الشورى ١١ ميزان أهل السنة: نفي المماثلة مع إثبات السمع والبصر.', page: 40 },
    { text: 'ما نفاه الله عن نفسه فالمراد انتفاء الصفة المنفية وإثبات كمال ضدها.', page: 41 },
    { text: 'التحريف تغيير النص لفظًا أو معنى؛ والتعطيل إنكار الأسماء والصفات أو بعضها.', page: 42 },
    { text: 'التكييف حكاية كيفية الصفة، والتمثيل إثبات مثيل، والتشبيه إثبات مشابه.', page: 43 },
    { text: 'لإثبات الأسماء والصفات أدلة كثيرة من القرآن والسنة.', page: 48 }
  ],
  terms: [
    { term: 'توحيد الأسماء والصفات', translit: 'tawḥīd al-asmāʾ wa-ṣ-ṣifāt', meaning: 'الإيمان بأسماء الله وصفاته الواردة في الكتاب والسنة وبمعانيها وأحكامها على وجه يليق بجلاله.', explanation: 'من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل.', notes: [], page: 39 },
    { term: 'التوقف والاستفصال', translit: 'at-tawaqquf wa-l-istifṣāl', meaning: 'موقف أهل السنة فيما لم يرد نفيه ولا إثباته كالجسم والحيز والجهة.', explanation: 'يتوقفون في اللفظ، ويستفصلون في المعنى: فإن أريد به باطل ردوه، وإن أريد به حق قبلوه.', notes: [], page: 40 },
    { term: 'اللغوب', translit: 'al-lughūb', meaning: 'التعب والإعياء؛ نفاه الله عن نفسه لثبوت كمال قوته.', explanation: '', notes: [], page: 41 },
    { term: 'التحريف', translit: 'at-taḥrīf', meaning: 'تغيير النص لفظًا أو معنى.', explanation: 'ثلاثة أقسام: لفظي يتغير معه المعنى، ولفظي لا يتغير معه المعنى، ومعنوي.', notes: [], page: 42 },
    { term: 'التعطيل', translit: 'at-taʿṭīl', meaning: 'إنكار ما يجب لله من الأسماء والصفات أو إنكار بعضه.', explanation: 'كلي كالجهمية، وجزئي كالأشعرية.', notes: [], page: 43 },
    { term: 'التكييف', translit: 'at-takyīf', meaning: 'حكاية كيفية الصفة.', explanation: 'وهو أعم من التمثيل والتشبيه، ويختص بالصفات.', notes: [], page: 43 },
    { term: 'التمثيل', translit: 'at-tamthīl', meaning: 'إثبات مثيل للشيء، ويقتضي المساواة من كل وجه.', explanation: '', notes: [], page: 43 },
    { term: 'التشبيه', translit: 'at-tashbīh', meaning: 'إثبات مشابه للشيء، ويقتضي المساواة في أكثر الصفات.', explanation: 'نوعان: تشبيه المخلوق بالخالق، وتشبيه الخالق بالمخلوق.', notes: [], page: 43 },
    { term: 'الجهمية', translit: 'al-jahmiyya', meaning: 'فرقة كلامية تنسب إلى الجهم بن صفوان، أنكرت الصفات.', explanation: 'للاطلاع فقط في الكتاب.', notes: [], page: 46 },
    { term: 'المعتزلة', translit: 'al-muʿtazila', meaning: 'فرقة مبتدعة تنتسب إلى واصل بن عطاء، تقدم العقل على النقل، ولها أصول خمسة.', explanation: 'للاطلاع فقط في الكتاب.', notes: [], page: 47 },
    { term: 'المنزلة بين المنزلتين', translit: 'al-manzila bayna al-manzilatayn', meaning: 'قول المعتزلة في الفاسق: لا مؤمن ولا كافر.', explanation: '', notes: [], page: 47 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'طريقة أهل السنة في الأسماء والصفات',
      intro: 'ثلاثة أمور ذكرها الكتاب.',
      root: { label: 'طريقة أهل السنة', page: 39 },
      nodes: [
        { label: 'في الإثبات', sub: 'إثبات ما أثبته الله لنفسه من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل', page: 39 },
        { label: 'في النفي', sub: 'نفي ما نفاه الله عن نفسه مع اعتقاد ثبوت كمال ضده', page: 39 },
        { label: 'فيما لم يرد', sub: 'التوقف في اللفظ والاستفصال في المعنى', page: 40 }
      ]
    },
    {
      type: 'cards',
      title: 'قاعدة: ما نفاه الله عن نفسه',
      intro: 'المراد انتفاء الصفة المنفية وإثبات كمال ضدها.',
      nodes: [
        { label: 'نفي الظلم', sub: 'إثبات كمال العدل', page: 41 },
        { label: 'نفي اللغوب', sub: 'إثبات كمال القوة', page: 41 },
        { label: 'نفي النوم', sub: 'إثبات كمال القيومية', page: 41 }
      ]
    },
    {
      type: 'tree',
      title: 'أقسام التحريف',
      intro: 'التحريف: تغيير النص لفظًا أو معنى.',
      root: { label: 'التحريف', page: 42 },
      nodes: [
        { label: 'لفظي يتغير معه المعنى', sub: 'كنصب لفظ الجلالة في [النساء: ١٦٤]', page: 42 },
        { label: 'لفظي لا يتغير معه المعنى', sub: 'كفتح الدال في [الفاتحة: ٢]؛ غالبًا من جاهل', page: 42 },
        { label: 'معنوي', sub: 'صرف اللفظ عن ظاهره بلا دليل، كتحريف اليدين إلى القوة والنعمة', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'الفرق بين التحريف والتعطيل',
      intro: '',
      columns: ['التحريف', 'التعطيل'],
      rows: [
        { label: 'المعنى الصحيح', cells: ['ينفيه', 'ينفيه'] },
        { label: 'البديل', cells: ['يستبدل به معنى آخر غير صحيح', 'من غير استبدال'] }
      ],
      page: 43
    },
    {
      type: 'compare',
      title: 'التكييف والتمثيل والتشبيه',
      intro: 'الفرق بينها من الكتاب.',
      columns: ['التكييف', 'التمثيل', 'التشبيه'],
      rows: [
        { label: 'التعريف', cells: ['حكاية كيفية الصفة', 'إثبات مثيل للشيء', 'إثبات مشابه للشيء'] },
        { label: 'المساواة', cells: ['كيفية مطلقة أو مقيدة', 'من كل وجه', 'في أكثر الصفات'] },
        { label: 'المجال', cells: ['يختص بالصفات', 'القدر والصفة والذات', 'القدر والصفة والذات'] }
      ],
      note: 'التكييف أعم من التمثيل والتشبيه.',
      page: 44
    },
    {
      type: 'tree',
      title: 'نوعا التشبيه',
      intro: '',
      root: { label: 'التشبيه', page: 44 },
      nodes: [
        { label: 'تشبيه المخلوق بالخالق', sub: 'إثبات شيء للمخلوق مما يختص به الخالق', children: ['في الربوبية', 'في الألوهية (الأصنام)', 'الغلو في مدح النبي ﷺ أو غيره'], page: 45 },
        { label: 'تشبيه الخالق بالمخلوق', sub: 'إثبات خصائص المخلوق لله في ذاته أو صفاته', page: 45 }
      ]
    }
  ],
  sections: [
    { title: 'معنى توحيد الأسماء والصفات', text: 'الإيمان بأسماء الله وصفاته الواردة في كتابه وسنة رسوله ﷺ وبمعانيها وأحكامها، على وجه يليق بجلاله، من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل.', more: 'وأصلهم قوله تعالى: ﴿ليس كمثله شيء وهو السميع البصير﴾ [الشورى: ١١]، وهي ميزان في نفي المماثل مع إثبات الصفات على الوجه اللائق.', page: 39 },
    { title: 'قاعدة ما نفاه الله عن نفسه', text: 'كل ما ثبت لله صفات كمال يحمد عليها، وكل ما نفاه عن نفسه صفات نقص؛ فالمراد بالنفي انتفاء الصفة المنفية مع إثبات كمال ضدها.', more: 'قال الطبري: «فلا تمثلوا لله الأمثال، ولا تشبهوا له الأشباه، فإنه لا مثل له ولا شبه».', page: 41 },
    { title: 'التحريف والتعطيل', text: 'التحريف تغيير النص لفظًا أو معنى، والتعطيل إنكار ما يجب لله من الأسماء والصفات كله أو بعضه.', more: 'التعطيل كلي كالجهمية، وجزئي كالأشعرية. وأول من عرف بالتعطيل في هذه الأمة الجعد بن درهم (ص ٤٣).', page: 42 },
    { title: 'التكييف والتمثيل والتشبيه', text: 'التكييف حكاية كيفية الصفة، والتمثيل إثبات مثيل، والتشبيه إثبات مشابه.', more: 'ومن تشبيه المخلوق بالخالق الغلو في مدح النبي ﷺ، كقول البوصيري: «فإن من جودك الدنيا وضرتها... ومن علومك علم اللوح والقلم» (ص ٤٥).', page: 43 },
    { title: 'الجهمية والمعتزلة', text: 'الجهمية تنسب إلى الجهم بن صفوان، والمعتزلة إلى واصل بن عطاء الذي اعتزل مجلس الحسن البصري.', more: 'وللمعتزلة أصول خمسة: التوحيد (نفي الصفات)، والعدل، والوعد والوعيد، والمنزلة بين المنزلتين، والأمر بالمعروف والنهي عن المنكر. هذا المقطع في الكتاب للاطلاع فقط.', page: 46 },
    { title: 'الأدلة', text: 'من القرآن: الأعراف ١٨٠، الإسراء ١١٠، طه ٨، الحشر ٢٢–٢٤، الشورى ١١، مريم ٦٥.', more: 'ومن السنة: حديث الأسماء التسعة والتسعين، ودعاء الهم والحزن، ودعاء «اللهم أنت الأول فليس قبلك شيء».', page: 48 }
  ],
  keycards: [
    { kind: 'definitie', title: 'توحيد الأسماء والصفات', items: ['الإيمان بأسماء الله وصفاته الواردة في الكتاب والسنة وبمعانيها وأحكامها.', 'على وجه يليق بجلاله، من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل.'], page: 39, origin: 'boek' },
    { kind: 'opsomming', title: 'ما تنزه عنه الصفات', items: ['التحريف', 'التعطيل', 'التكييف', 'التمثيل'], page: 42, origin: 'boek' },
    { kind: 'onderscheid', title: 'التحريف والتعطيل', items: ['التحريف: نفي المعنى الصحيح واستبداله بغيره.', 'التعطيل: نفي المعنى الصحيح من غير استبدال.'], page: 43, origin: 'boek' },
    { kind: 'opsomming', title: 'نوعا التعطيل', items: ['كلي: كالجهمية', 'جزئي: كالأشعرية'], page: 43, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الإيمان بالأسماء والصفات على وجه يليق بالله، من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل.',
    'نثبت ما أثبته الله، وننفي ما نفاه مع إثبات كمال ضده.',
    'الشورى ١١: نفي المماثلة مع إثبات الصفات.',
    'التحريف: تغيير النص لفظًا أو معنى؛ التعطيل: الإنكار.',
    'التكييف: حكاية الكيفية؛ التمثيل: إثبات مثيل؛ التشبيه: إثبات مشابه.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما موقف أهل السنة من لفظ «الجهة» الذي لم يرد نفيه ولا إثباته؟', options: ['إثباته مطلقًا', 'التوقف في لفظه والاستفصال في معناه', 'نفيه مطلقًا', 'تفويضه'], answer: 1, explain: 'كما في الكتاب ص ٤٠.', page: 40 },
    { type: 'mc', q: 'ما الذي يثبت لله بنفي النوم عنه؟', options: ['العدل', 'كمال القيومية', 'القوة', 'العلم'], answer: 1, explain: 'قاعدة: نفي الصفة وإثبات كمال ضدها.', page: 41 },
    { type: 'mc', q: 'تحريف معنى اليدين إلى القوة والنعمة من أي أقسام التحريف؟', options: ['لفظي يتغير معه المعنى', 'لفظي لا يتغير معه المعنى', 'معنوي', 'ليس تحريفًا'], answer: 2, explain: 'صرف اللفظ عن ظاهره بلا دليل.', page: 42 },
    { type: 'mc', q: 'ما الفرق بين التحريف والتعطيل؟', options: ['لا فرق بينهما', 'التحريف يستبدل معنى آخر، والتعطيل ينفي بلا استبدال', 'التعطيل يستبدل معنى آخر', 'التحريف في الأسماء فقط'], answer: 1, explain: 'كما في الكتاب ص ٤٣.', page: 43 },
    { type: 'tf', q: 'التكييف أعم من التمثيل والتشبيه.', options: ['صواب', 'خطأ'], answer: 0, explain: 'التكييف كيفية مطلقة أو مقيدة.', page: 44 },
    { type: 'mc', q: 'من روى حديث «إن لله تسعة وتسعين اسما»؟', options: ['ابن مسعود', 'أبو هريرة', 'عائشة', 'أنس بن مالك'], answer: 1, explain: 'أخرجه البخاري ومسلم.', page: 49 }
  ]),
  note: 'لا يوجد نشاط في هذه الوحدة في الكتاب. المقطع في ص ٤٦–٤٧ للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 3,
  title: 'Tawḥīd van de namen en eigenschappen',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De betekenis van tawḥīd van de namen en eigenschappen en de weg van ahl as-sunna, de regel bij wat Allah van Zichzelf ontkent, het verschil tussen taḥrīf, taʿṭīl, takyīf, tamthīl en tashbīh, en de bewijzen.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 3 in één kaart',
    intro: 'De onderwerpen van de eenheid, zoals op p. 38 van het boek.',
    root: { label: 'Namen en eigenschappen', sub: 'Eenheid 3' },
    nodes: [
      { label: 'Betekenis en de weg van ahl as-sunna', sub: 'les 7', page: 39, children: ['bij het bevestigen', 'bij het ontkennen', 'bij wat niet genoemd is'] },
      { label: 'De regel bij ontkenning', sub: 'les 8', page: 41, children: ['ontkennen en het volmaakte tegendeel bevestigen', 'taḥrīf en zijn soorten'] },
      { label: 'Wat wordt afgewezen', sub: 'les 9', page: 43, children: ['taʿṭīl', 'takyīf', 'tamthīl en tashbīh'] },
      { label: 'De bewijzen', sub: 'les 10', page: 48, children: ['uit de Koran', 'uit de Sunna'] }
    ]
  },
  points: [
    { text: 'Tawḥīd van de namen en eigenschappen: geloven in de namen en eigenschappen van Allah uit Koran en Sunna, met hun betekenis en gevolgen, op een wijze die Hem past, zonder taḥrīf, taʿṭīl, takyīf of tamthīl.', page: 39 },
    { text: 'Ahl as-sunna bevestigen wat Allah van Zichzelf bevestigt, ontkennen wat Hij ontkent en bevestigen dan het volmaakte tegendeel; bij woorden die niet genoemd zijn, houden zij zich in en vragen naar de bedoeling.', page: 39 },
    { text: 'Ash-Shūrā 42:11 is de maatstaf: gelijkenis ontkennen en horen en zien bevestigen.', page: 40 },
    { text: 'Wat Allah van Zichzelf ontkent, betekent: die eigenschap is er niet, en het volmaakte tegendeel wel.', page: 41 },
    { text: 'Taḥrīf is de tekst in woord of betekenis veranderen; taʿṭīl is de namen en eigenschappen (deels) ontkennen.', page: 42 },
    { text: 'Takyīf is het hoe van een eigenschap beschrijven, tamthīl is een gelijke toekennen, tashbīh een gelijkende.', page: 43 },
    { text: 'Er zijn veel bewijzen uit Koran en Sunna voor de namen en eigenschappen.', page: 48 }
  ],
  terms: [
    { term: 'توحيد الأسماء والصفات', translit: 'tawḥīd al-asmāʾ wa-ṣ-ṣifāt', meaning: 'Geloven in Allahs namen en eigenschappen uit Koran en Sunna, met hun betekenis en gevolgen, op een wijze die Hem past.', explanation: 'Zonder taḥrīf, taʿṭīl, takyīf of tamthīl.', notes: [], page: 39 },
    { term: 'التوقف والاستفصال', translit: 'at-tawaqquf wa-l-istifṣāl', meaning: 'Zich inhouden en navragen: de houding bij woorden die Koran en Sunna niet bevestigen of ontkennen, zoals lichaam, plaats en richting.', explanation: 'Over het woord zwijgen zij; bij de betekenis vragen zij door: is iets onjuists bedoeld, dan wijzen zij het af; is iets juists bedoeld, dan aanvaarden zij het.', notes: [], page: 40 },
    { term: 'اللغوب', translit: 'al-lughūb', meaning: 'Vermoeidheid; Allah ontkent die van Zichzelf, wat Zijn volmaakte kracht bevestigt.', explanation: '', notes: [], page: 41 },
    { term: 'التحريف', translit: 'at-taḥrīf', meaning: 'Verdraaiing: de tekst in woord of betekenis veranderen.', explanation: 'Drie soorten: in het woord met verandering van betekenis, in het woord zonder verandering van betekenis, en in de betekenis.', notes: [], page: 42 },
    { term: 'التعطيل', translit: 'at-taʿṭīl', meaning: 'Ontkenning: de namen en eigenschappen die Allah toekomen geheel of deels ontkennen.', explanation: 'Volledig zoals de Jahmiyya, gedeeltelijk zoals de Ashʿariyya (volgens het boek).', notes: [], page: 43 },
    { term: 'التكييف', translit: 'at-takyīf', meaning: 'Het "hoe" van een eigenschap beschrijven.', explanation: 'Ruimer dan tamthīl en tashbīh, en alleen bij eigenschappen.', notes: [], page: 43 },
    { term: 'التمثيل', translit: 'at-tamthīl', meaning: 'Een gelijke toekennen: gelijkheid in alle opzichten.', explanation: '', notes: [], page: 43 },
    { term: 'التشبيه', translit: 'at-tashbīh', meaning: 'Een gelijkende toekennen: gelijkheid in de meeste eigenschappen.', explanation: 'Twee soorten: het schepsel met de Schepper vergelijken en de Schepper met het schepsel.', notes: [], page: 43 },
    { term: 'الجهمية', translit: 'al-jahmiyya', meaning: 'Een theologische groep, genoemd naar al-Jahm ibn Ṣafwān, die de eigenschappen ontkende.', explanation: 'In het boek ter kennisname.', notes: [], page: 46 },
    { term: 'المعتزلة', translit: 'al-muʿtazila', meaning: 'Een vernieuwende groep, genoemd naar Wāṣil ibn ʿAṭāʾ, die het verstand boven de overlevering stelde en vijf grondbeginselen heeft.', explanation: 'In het boek ter kennisname.', notes: [], page: 47 },
    { term: 'المنزلة بين المنزلتين', translit: 'al-manzila bayna al-manzilatayn', meaning: 'De positie tussen twee posities: de Muʿtazila zeggen dat de zondaar gelovig noch ongelovig is.', explanation: '', notes: [], page: 47 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'De weg van ahl as-sunna bij de namen en eigenschappen',
      intro: 'Drie punten uit het boek.',
      root: { label: 'De weg van ahl as-sunna', page: 39 },
      nodes: [
        { label: 'Bij het bevestigen', sub: 'bevestigen wat Allah van Zichzelf bevestigt, zonder taḥrīf, taʿṭīl, takyīf of tamthīl', page: 39 },
        { label: 'Bij het ontkennen', sub: 'ontkennen wat Hij ontkent en het volmaakte tegendeel bevestigen', page: 39 },
        { label: 'Bij wat niet genoemd is', sub: 'het woord laten rusten en naar de bedoeling vragen', page: 40 }
      ]
    },
    {
      type: 'cards',
      title: 'Regel: wat Allah van Zichzelf ontkent',
      intro: 'De ontkende eigenschap is er niet, het volmaakte tegendeel wel.',
      nodes: [
        { label: 'Geen onrecht', sub: 'volmaakte rechtvaardigheid', page: 41 },
        { label: 'Geen vermoeidheid', sub: 'volmaakte kracht', page: 41 },
        { label: 'Geen slaap', sub: 'volmaakt zelfbestaan en onderhouden (qayyūmiyya)', page: 41 }
      ]
    },
    {
      type: 'tree',
      title: 'Soorten taḥrīf',
      intro: 'Taḥrīf: de tekst in woord of betekenis veranderen.',
      root: { label: 'Taḥrīf', page: 42 },
      nodes: [
        { label: 'In het woord, met verandering van betekenis', sub: 'zoals de naam Allah in an-Nisāʾ 4:164 als lijdend voorwerp lezen', page: 42 },
        { label: 'In het woord, zonder verandering van betekenis', sub: 'zoals een klinker in al-Fātiḥa 1:2 veranderen; meestal uit onwetendheid', page: 42 },
        { label: 'In de betekenis', sub: 'een woord zonder bewijs van zijn duidelijke betekenis afbuigen, zoals "handen" uitleggen als kracht of gunst', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'Taḥrīf en taʿṭīl',
      intro: '',
      columns: ['Taḥrīf', 'Taʿṭīl'],
      rows: [
        { label: 'De juiste betekenis', cells: ['wordt ontkend', 'wordt ontkend'] },
        { label: 'Vervanging', cells: ['door een andere, onjuiste betekenis', 'zonder vervanging'] }
      ],
      page: 43
    },
    {
      type: 'compare',
      title: 'Takyīf, tamthīl en tashbīh',
      intro: 'Het verschil volgens het boek.',
      columns: ['Takyīf', 'Tamthīl', 'Tashbīh'],
      rows: [
        { label: 'Betekenis', cells: ['het hoe beschrijven', 'een gelijke toekennen', 'een gelijkende toekennen'] },
        { label: 'Gelijkheid', cells: ['een hoe, los of met vergelijking', 'in alle opzichten', 'in de meeste eigenschappen'] },
        { label: 'Waarbij', cells: ['alleen bij eigenschappen', 'wezen, eigenschap en mate', 'wezen, eigenschap en mate'] }
      ],
      note: 'Takyīf is het ruimste begrip.',
      page: 44
    },
    {
      type: 'tree',
      title: 'De twee soorten tashbīh',
      intro: '',
      root: { label: 'Tashbīh', page: 44 },
      nodes: [
        { label: 'Het schepsel met de Schepper vergelijken', sub: 'een schepsel iets geven dat alleen de Schepper toekomt', children: ['in rubūbiyya', 'in ulūhiyya (afgoden)', 'overdreven lof voor de Profeet ﷺ of anderen'], page: 45 },
        { label: 'De Schepper met het schepsel vergelijken', sub: 'Allah in wezen of eigenschappen kenmerken van schepsels toekennen', page: 45 }
      ]
    }
  ],
  sections: [
    { title: 'De betekenis', text: 'Geloven in Allahs namen en eigenschappen uit Koran en Sunna, met hun betekenis en gevolgen, op een wijze die Hem past, zonder taḥrīf, taʿṭīl, takyīf of tamthīl.', more: 'De grondslag is ash-Shūrā 42:11 ("Niets is aan Hem gelijk, en Hij is de Horende, de Ziende"): een maatstaf om gelijkenis te ontkennen en de eigenschappen op passende wijze te bevestigen.', page: 39 },
    { title: 'De regel bij ontkenning', text: 'Alles wat Allah toekomt, zijn eigenschappen van volmaaktheid; alles wat Hij van Zichzelf ontkent, zijn eigenschappen van gebrek. Een ontkenning betekent dus: de eigenschap is er niet, en het volmaakte tegendeel wel.', more: 'Aṭ-Ṭabarī: "maak voor Allah geen vergelijkingen en geen gelijkenissen, want Hij heeft geen gelijke en geen gelijkende."', page: 41 },
    { title: 'Taḥrīf en taʿṭīl', text: 'Taḥrīf is de tekst in woord of betekenis veranderen; taʿṭīl is de namen en eigenschappen die Allah toekomen geheel of deels ontkennen.', more: 'Taʿṭīl is volledig (zoals bij de Jahmiyya) of gedeeltelijk (zoals bij de Ashʿariyya), volgens het boek. De eerste in deze umma die bekendstond om taʿṭīl was al-Jaʿd ibn Dirham (p. 43).', page: 42 },
    { title: 'Takyīf, tamthīl en tashbīh', text: 'Takyīf is het hoe van een eigenschap beschrijven, tamthīl een gelijke toekennen, tashbīh een gelijkende toekennen.', more: 'Het boek noemt als voorbeeld van het schepsel met de Schepper vergelijken overdreven lof voor de Profeet ﷺ, zoals de dichtregels van al-Būṣīrī die hem kennis van de Tafel en de Pen toeschrijven (p. 45).', page: 43 },
    { title: 'De Jahmiyya en de Muʿtazila', text: 'De Jahmiyya zijn genoemd naar al-Jahm ibn Ṣafwān, de Muʿtazila naar Wāṣil ibn ʿAṭāʾ, die de kring van al-Ḥasan al-Baṣrī verliet.', more: 'De Muʿtazila hebben vijf grondbeginselen: "tawḥīd" (eigenschappen ontkennen), "rechtvaardigheid", belofte en dreiging, de positie tussen twee posities, en het goede gebieden en het kwade verbieden. Dit deel staat in het boek ter kennisname.', page: 46 },
    { title: 'De bewijzen', text: 'Uit de Koran: al-Aʿrāf 7:180, al-Isrāʾ 17:110, Ṭā-Hā 20:8, al-Ḥashr 59:22–24, ash-Shūrā 42:11, Maryam 19:65.', more: 'Uit de Sunna: de hadith van de 99 namen, de smeekbede bij zorg en verdriet, en "O Allah, U bent de Eerste en er is niets vóór U".', page: 48 }
  ],
  keycards: [
    { kind: 'definitie', title: 'Tawḥīd van de namen en eigenschappen', items: ['Geloven in Allahs namen en eigenschappen uit Koran en Sunna, met hun betekenis en gevolgen.', 'Op een wijze die Hem past, zonder taḥrīf, taʿṭīl, takyīf of tamthīl.'], page: 39, origin: 'boek' },
    { kind: 'opsomming', title: 'Wat wordt afgewezen', items: ['taḥrīf', 'taʿṭīl', 'takyīf', 'tamthīl'], page: 42, origin: 'boek' },
    { kind: 'onderscheid', title: 'Taḥrīf en taʿṭīl', items: ['Taḥrīf: de juiste betekenis ontkennen en door een andere vervangen.', 'Taʿṭīl: de juiste betekenis ontkennen zonder vervanging.'], page: 43, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten taʿṭīl', items: ['volledig: zoals de Jahmiyya', 'gedeeltelijk: zoals de Ashʿariyya'], page: 43, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Geloven in de namen en eigenschappen op een wijze die Allah past, zonder taḥrīf, taʿṭīl, takyīf of tamthīl.',
    'Bevestigen wat Allah bevestigt; ontkennen wat Hij ontkent en het volmaakte tegendeel bevestigen.',
    'Ash-Shūrā 42:11: gelijkenis ontkennen en de eigenschappen bevestigen.',
    'Taḥrīf: tekst veranderen in woord of betekenis; taʿṭīl: ontkennen.',
    'Takyīf: het hoe beschrijven; tamthīl: een gelijke; tashbīh: een gelijkende.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat doen ahl as-sunna met het woord "richting" (jiha), dat Koran en Sunna niet bevestigen of ontkennen?', options: ['altijd bevestigen', 'het woord laten rusten en naar de bedoeling vragen', 'altijd ontkennen', 'de betekenis aan Allah overlaten'], answer: 1, explain: 'Zo staat het op p. 40.', page: 40 },
    { type: 'mc', q: 'Wat wordt bevestigd doordat Allah slaap van Zichzelf ontkent?', options: ['rechtvaardigheid', 'volmaakte qayyūmiyya', 'kracht', 'kennis'], answer: 1, explain: 'Regel: de eigenschap ontkennen en het volmaakte tegendeel bevestigen.', page: 41 },
    { type: 'mc', q: '"Handen" uitleggen als kracht of gunst is welke soort taḥrīf?', options: ['in het woord, met verandering van betekenis', 'in het woord, zonder verandering van betekenis', 'in de betekenis', 'geen taḥrīf'], answer: 2, explain: 'Een woord zonder bewijs van zijn duidelijke betekenis afbuigen.', page: 42 },
    { type: 'mc', q: 'Wat is het verschil tussen taḥrīf en taʿṭīl?', options: ['er is geen verschil', 'taḥrīf vervangt de betekenis door een andere, taʿṭīl ontkent zonder vervanging', 'taʿṭīl vervangt de betekenis', 'taḥrīf gaat alleen over namen'], answer: 1, explain: 'Zo staat het op p. 43.', page: 43 },
    { type: 'tf', q: 'Takyīf is een ruimer begrip dan tamthīl en tashbīh.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Takyīf is een hoe, los of met vergelijking.', page: 44 },
    { type: 'mc', q: 'Wie overleverde "Allah heeft negenennegentig namen"?', options: ['Ibn Masʿūd', 'Abū Hurayra', 'ʿĀʾisha', 'Anas ibn Mālik'], answer: 1, explain: 'Al-Bukhārī en Muslim.', page: 49 }
  ]),
  note: 'Het boek heeft bij deze eenheid geen oefening. Het deel op p. 46–47 staat in het boek als "alleen ter kennisname". De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-aqeedah', chapter: '7', unit: 3, ar, nl }
