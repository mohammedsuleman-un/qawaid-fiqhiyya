// Hoofdstukkaart bij التربية الإسلامية (٢) أعمال القلوب, eenheid 4: المؤمن بين الخوف والرجاء (les 8, boek p. 35–38).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// verzen, hadith en takhrij zoals in het boek. Pagina 37 is in het boek "alleen ter kennisname"; het
// oordeel over de uitspraak van Rābiʿa al-ʿAdawiyya staat erin als oordeel van het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (٢) أعمال القلوب، سلسلة زاد العلمية',
  pages: '35–38',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'لو يعلم المؤمن ما عند الله من العقوبة ما طمع بجنته أحد، ولو يعلم الكافر ما عند الله من الرحمة ما قنط من جنته أحد', takhrij: 'البخاري ومسلم', note: 'كما عزاه الكتاب؛ استحضار الثواب والعقاب.', pages: [35], nl: 'Als de gelovige wist welke straf er bij Allah is, zou niemand naar Zijn Paradijs verlangen; en als de ongelovige wist welke genade er bij Allah is, zou niemand aan Zijn Paradijs wanhopen', nlNote: 'Met de bron zoals het boek die geeft; beloning en straf voor ogen houden.' },
  { narrator: 'عبد الله بن مسعود', text: 'الجنة أقرب إلى أحدكم من شراك نعله، والنار مثل ذلك', takhrij: 'رواه البخاري', note: '', pages: [35], nl: 'Het Paradijs is voor ieder van jullie dichterbij dan de riem van zijn sandaal, en het Vuur net zo', nlNote: '' },
  { narrator: 'جابر بن عبد الله', text: 'لا يموتن أحدكم إلا وهو يحسن الظن بالله', takhrij: 'رواه مسلم', note: 'سمعه قبل موت النبي ﷺ بثلاثة أيام؛ يغلب الرجاء عند الموت.', pages: [36], nl: 'Laat niemand van jullie sterven zonder een goede verwachting van Allah te hebben', nlNote: 'Hij hoorde het drie dagen vóór de dood van de Profeet ﷺ; bij het sterven overheerst hoop.' },
  { narrator: 'أبو هريرة', text: 'إذا فرغ أحدكم من التشهد الآخر فليتعوذ بالله من أربع: من عذاب جهنم، ومن عذاب القبر، ومن فتنة المحيا والممات، ومن شر المسيح الدجال', takhrij: 'رواه مسلم', note: 'من أدلة العبادة بالخوف. ' + FYI_NOTE, pages: [37], nl: 'Als een van jullie klaar is met de laatste tashahhud, laat hij bij Allah bescherming zoeken tegen vier dingen: de straf van de Hel, de straf van het graf, de beproeving van leven en dood, en het kwaad van de valse messias', nlNote: 'Een bewijs voor aanbidding uit vrees. ' + FYI_NOTE_NL },
  { narrator: 'عبد الله بن عمرو بن العاص', text: 'إذا سمعتم المؤذن فقولوا مثل ما يقول، ثم صلوا علي … ثم سلوا الله لي الوسيلة، فإنها منزلة في الجنة لا تنبغي إلا لعبد من عباد الله، وأرجو أن أكون أنا هو، فمن سأل لي الوسيلة حلت له الشفاعة', takhrij: 'رواه مسلم', note: 'من أدلة العبادة بالرجاء. ' + FYI_NOTE, pages: [37], nl: 'Als jullie de muezzin horen, zeg dan wat hij zegt, vraag dan om zegen over mij … en vraag Allah dan voor mij om al-wasīla, een plaats in het Paradijs die alleen past bij één dienaar van Allah, en ik hoop dat ik het ben; wie voor mij om al-wasīla vraagt, voor hem wordt de voorspraak toegestaan', nlNote: 'Een bewijs voor aanbidding uit hoop. ' + FYI_NOTE_NL }
]

const TAKHRIJ_NL = {
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'رواه البخاري': 'al-Bukhārī',
  'رواه مسلم': 'Muslim'
}
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'عبد الله بن عمرو بن العاص': 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ' }

const PERSONS = [
  ['al-ayni', 'text', [35], 'قال: ضل في هذا المقام فرقتان، والذي عليه أهل السنة الجمع بين الخوف والرجاء.', 'Zei: hierin dwaalden twee groepen; de mensen van de sunna verenigen vrees en hoop.'],
  ['ibn-taymiyya', 'text', [35], 'قال: الخشية أبدًا متضمنة للرجاء، والرجاء يستلزم الخوف.', 'Zei: ontzag bevat altijd hoop, en hoop brengt altijd vrees mee.'],
  ['abu-hurayra', 'text', [35, 37], 'روى «لو يعلم المؤمن ما عند الله من العقوبة»، والتعوذ من أربع.', 'Overleverde "als de gelovige wist welke straf er bij Allah is" en het zoeken van bescherming tegen vier dingen.'],
  ['ibn-masud', 'text', [35], 'روى «الجنة أقرب إلى أحدكم من شراك نعله».', 'Overleveraar van "het Paradijs is dichterbij dan de riem van je sandaal".'],
  ['jabir-ibn-abdallah', 'text', [36], 'سمع النبي ﷺ قبل موته بثلاثة أيام يقول: «لا يموتن أحدكم إلا وهو يحسن الظن بالله».', 'Hoorde de Profeet ﷺ drie dagen vóór zijn dood zeggen: "laat niemand sterven zonder een goede verwachting van Allah".'],
  ['abdallah-ibn-amr', 'text', [37], 'روى حديث سؤال الوسيلة.', 'Overleverde de hadith over het vragen om al-wasīla.'],
  ['rabia-al-adawiyya', 'text', [37], 'ينسب إليها قول يتخذه بعض الصوفية مستندًا في العبادة بالمحبة وحدها، ويعده الكتاب مخالفًا للنصوص.', 'Aan haar wordt een uitspraak toegeschreven waarop sommige soefi’s steunen voor aanbidding uit liefde alleen; het boek noemt die strijdig met de teksten.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'المؤمن بين الخوف والرجاء',
  subtitle: 'درس واحد في صفحة',
  summary: 'الجمع بين الخوف والرجاء منهج أهل السنة، وما يعين عليه، والأحوال التي يغلب فيها الرجاء والتي يغلب فيها الخوف، وأن الخوف والرغبة والرجاء من أنواع العبادة، وموقف الصوفية.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'الجمع بين المقامين.',
    root: { label: 'بين الخوف والرجاء', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'الجمع بينهما', sub: 'الدرس ٨', page: 35, children: ['منهج أهل السنة', 'الحب والخوف والرجاء', 'استحضار الثواب والعقاب'] },
      { label: 'متى يغلب الرجاء', sub: 'الدرس ٨', page: 36, children: ['عند الموت', 'عند اليأس من الذنوب'] },
      { label: 'متى يغلب الخوف', sub: 'الدرس ٨', page: 36, children: ['عند سعة النعم', 'عند المعصية', 'عند الأمن من مكر الله'] },
      { label: 'موقف الصوفية', sub: 'الدرس ٨', page: 37, children: ['العبادة بالحب وحده', 'مخالف للنصوص'] }
    ]
  },
  points: [
    { text: 'ضل في هذا المقام فرقتان: من غلب الرجاء ومن غلب الخوف، وأهل السنة يجمعون بين المقامين.', page: 35 },
    { text: 'الخشية متضمنة للرجاء وإلا كانت قنوطًا، والرجاء يستلزم الخوف وإلا كان أمنًا.', page: 35 },
    { text: 'يعين على الجمع بينهما استحضار ثواب الله وعقابه.', page: 35 },
    { text: 'من عبد الله بالحب والخوف والرجاء فهو مؤمن موحد.', page: 35 },
    { text: 'يغلب الرجاء عند الموت، وعند من أيأسته ذنوبه.', page: 36 },
    { text: 'يغلب الخوف عند سعة النعم، وعند المعصية، وعند الأمن من مكر الله.', page: 36 },
    { text: 'الخوف والرغبة والرجاء من أنواع العبادة.', page: 36 }
  ],
  terms: [
    { term: 'القنوط', translit: 'al-qunūṭ', meaning: 'اليأس من رحمة الله؛ خشية بلا رجاء.', explanation: '', notes: [], page: 35 },
    { term: 'الأمن من مكر الله', translit: 'al-amn min makr Allāh', meaning: 'رجاء بلا خوف.', explanation: '', notes: [], page: 35 },
    { term: 'الرغبة', translit: 'ar-raghba', meaning: 'الطمع فيما عند الله، وهي من أنواع العبادة.', explanation: '﴿ويدعوننا رغبًا ورهبًا﴾ [الأنبياء: ٩٠].', notes: [], page: 36 },
    { term: 'الوسيلة', translit: 'al-wasīla', meaning: 'منزلة في الجنة لا تنبغي إلا لعبد من عباد الله.', explanation: '', notes: [], page: 37 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'من عبد الله بواحد منها فقط',
      intro: 'كما نقله الكتاب عن العلماء.',
      columns: ['حكمه'],
      rows: [
        { label: 'بالحب وحده', cells: ['زنديق'] },
        { label: 'بالخوف وحده', cells: ['حروري'] },
        { label: 'بالرجاء وحده', cells: ['مرجئ'] },
        { label: 'بالحب والخوف والرجاء', cells: ['مؤمن موحد'] }
      ],
      page: 35
    }
  ],
  sections: [
    { title: 'الإحسان بالجمع', text: 'الإحسان أن يجمع العبد بين الخوف والرجاء، ورحمة الله حينئذ قريبة منه، كما في قوله تعالى: ﴿وادعوه خوفًا وطمعًا إن رحمت الله قريب من المحسنين﴾ [الأعراف: ٥٦].', page: 36 },
    { title: 'عند الموت', text: 'يغلب الرجاء، وكان بعض السلف يأمرون أبناءهم عند الموت أن يقرؤوا عليهم آيات الرحمة.', page: 36 },
    { title: 'من نصوص الجمع (للاطلاع فقط)', text: '﴿نبئ عبادي أني أنا الغفور الرحيم وأن عذابي هو العذاب الأليم﴾ [الحجر: ٤٩–٥٠]، والتعوذ من أربع بعد التشهد، وسؤال الوسيلة رجاء الشفاعة.', more: FYI, page: 37 },
    { title: 'موقف الصوفية (للاطلاع فقط)', text: 'يعبدون الله بالمحبة وحدها لا خوفًا من النار ولا طمعًا في الجنة، بل يعدون ذلك شركًا، ويستندون إلى قول ينسب إلى رابعة العدوية؛ ويعده الكتاب غاية في السفه ومخالفًا للنصوص.', more: FYI, page: 37 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أحوال يغلب فيها الرجاء', items: ['عند الموت', 'عند من أيأسته ذنوبه'], page: 36, origin: 'boek' },
    { kind: 'opsomming', title: 'أحوال يغلب فيها الخوف', items: ['عند سعة النعم', 'عند المعصية', 'عند الأمن من مكر الله'], page: 36, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'أهل السنة يجمعون بين الخوف والرجاء.',
    'الخوف بلا رجاء قنوط، والرجاء بلا خوف أمن.',
    'يغلب الرجاء عند الموت، ويغلب الخوف عند المعصية.',
    'الخوف والرغبة والرجاء عبادات.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما منهج أهل السنة في الخوف والرجاء؟', options: ['الجمع بينهما', 'تغليب الرجاء دائمًا', 'تغليب الخوف دائمًا', 'تركهما'], answer: 0, explain: 'كما قال العيني.', page: 35 },
    { type: 'mc', q: 'متى يغلب الرجاء؟', options: ['عند الموت', 'عند المعصية', 'عند سعة النعم', 'عند الأمن من مكر الله'], answer: 0, explain: '«لا يموتن أحدكم إلا وهو يحسن الظن بالله».', page: 36 },
    { type: 'tf', q: 'من عبد الله بالخوف وحده فهو مؤمن موحد.', options: ['صواب', 'خطأ'], answer: 1, explain: 'المؤمن الموحد يجمع الحب والخوف والرجاء.', page: 35 },
    { type: 'tf', q: 'الخوف والرجاء من أنواع العبادة.', options: ['صواب', 'خطأ'], answer: 0, explain: '﴿ويدعوننا رغبًا ورهبًا﴾.', page: 36 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٣٨. الصفحة ٣٧ في الكتاب للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'De gelovige tussen vrees en hoop',
  subtitle: 'Eén les op een pagina',
  summary: 'Vrees en hoop verenigen is de weg van de mensen van de sunna; wat daarbij helpt; wanneer hoop overheerst en wanneer vrees; dat vrees, verlangen en hoop vormen van aanbidding zijn; en het standpunt van de soefi’s.',
  source: { ...source, label: 'Kitāb at-Tarbiya al-islāmiyya (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'Beide verenigen.',
    root: { label: 'Tussen vrees en hoop', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Beide verenigen', sub: 'les 8', page: 35, children: ['de weg van de sunna', 'liefde, vrees en hoop', 'beloning en straf voor ogen'] },
      { label: 'Wanneer hoop overheerst', sub: 'les 8', page: 36, children: ['bij het sterven', 'bij wanhoop door zonden'] },
      { label: 'Wanneer vrees overheerst', sub: 'les 8', page: 36, children: ['bij veel weelde', 'bij zonde', 'als je je veilig voelt'] },
      { label: 'Het soefi-standpunt', sub: 'les 8', page: 37, children: ['alleen liefde', 'strijdig met de teksten'] }
    ]
  },
  points: [
    { text: 'Hierin dwaalden twee groepen: wie hoop liet overheersen en wie vrees liet overheersen; de mensen van de sunna verenigen beide.', page: 35 },
    { text: 'Ontzag bevat hoop, anders wordt het wanhoop; hoop brengt vrees mee, anders wordt het zich veilig voelen.', page: 35 },
    { text: 'Wat helpt om beide te verenigen, is Allahs beloning en straf voor ogen houden.', page: 35 },
    { text: 'Wie Allah aanbidt met liefde, vrees en hoop, is een monotheïstische gelovige.', page: 35 },
    { text: 'Hoop overheerst bij het sterven, en bij wie door zijn zonden wanhoopt.', page: 36 },
    { text: 'Vrees overheerst bij veel weelde, bij zonde, en als je je veilig voelt voor Allahs plan.', page: 36 },
    { text: 'Vrees, verlangen en hoop zijn vormen van aanbidding.', page: 36 }
  ],
  terms: [
    { term: 'القنوط', translit: 'al-qunūṭ', meaning: 'Wanhoop aan Allahs genade; ontzag zonder hoop.', explanation: '', notes: [], page: 35 },
    { term: 'الأمن من مكر الله', translit: 'al-amn min makr Allāh', meaning: 'Zich veilig voelen voor Allahs plan; hoop zonder vrees.', explanation: '', notes: [], page: 35 },
    { term: 'الرغبة', translit: 'ar-raghba', meaning: 'Verlangen naar wat bij Allah is; een vorm van aanbidding.', explanation: '"Zij riepen Ons aan uit verlangen en vrees" (al-Anbiyāʾ 21:90).', notes: [], page: 36 },
    { term: 'الوسيلة', translit: 'al-wasīla', meaning: 'Een plaats in het Paradijs die alleen bij één dienaar van Allah past.', explanation: '', notes: [], page: 37 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Wie Allah met maar één ervan aanbidt',
      intro: 'Zoals het boek van de geleerden overneemt.',
      columns: ['Oordeel'],
      rows: [
        { label: 'Alleen met liefde', cells: ['een zindīq (ketter)'] },
        { label: 'Alleen met vrees', cells: ['een ḥarūrī (khawārij)'] },
        { label: 'Alleen met hoop', cells: ['een murjiʾ'] },
        { label: 'Met liefde, vrees en hoop', cells: ['een monotheïstische gelovige'] }
      ],
      page: 35
    }
  ],
  sections: [
    { title: 'Goed doen door te verenigen', text: 'Iḥsān is vrees en hoop verenigen; Allahs genade is dan dichtbij, zoals Hij zegt: "Roep Hem aan in vrees en verlangen; Allahs genade is dicht bij wie goed doen" (al-Aʿrāf 7:56).', page: 36 },
    { title: 'Bij het sterven', text: 'Hoop overheerst; sommigen van de salaf vroegen hun zonen bij hun dood verzen over genade voor te lezen.', page: 36 },
    { title: 'Teksten die beide verenigen (alleen ter kennisname)', text: '"Vertel Mijn dienaren dat Ik de Vergevende, de Barmhartige ben, en dat Mijn straf de pijnlijke straf is" (al-Ḥijr 15:49–50); bescherming zoeken tegen vier dingen na de tashahhud; en om al-wasīla vragen, in hoop op voorspraak.', more: FYI_NL, page: 37 },
    { title: 'Het soefi-standpunt (alleen ter kennisname)', text: 'Zij aanbidden Allah alleen uit liefde, niet uit vrees voor het Vuur of verlangen naar het Paradijs, en noemen dat zelfs shirk; zij steunen op een uitspraak die aan Rābiʿa al-ʿAdawiyya wordt toegeschreven. Het boek noemt dat het toppunt van dwaasheid en strijdig met de teksten.', more: FYI_NL, page: 37 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Wanneer hoop overheerst', items: ['bij het sterven', 'bij wie door zijn zonden wanhoopt'], page: 36, origin: 'boek' },
    { kind: 'opsomming', title: 'Wanneer vrees overheerst', items: ['bij veel weelde', 'bij zonde', 'als je je veilig voelt voor Allahs plan'], page: 36, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De mensen van de sunna verenigen vrees en hoop.',
    'Vrees zonder hoop is wanhoop, hoop zonder vrees is zich veilig voelen.',
    'Hoop overheerst bij het sterven, vrees bij zonde.',
    'Vrees, verlangen en hoop zijn aanbidding.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is de weg van de mensen van de sunna bij vrees en hoop?', options: ['beide verenigen', 'altijd hoop laten overheersen', 'altijd vrees laten overheersen', 'beide laten'], answer: 0, explain: 'Zoals al-ʿAynī zei.', page: 35 },
    { type: 'mc', q: 'Wanneer overheerst hoop?', options: ['bij het sterven', 'bij zonde', 'bij veel weelde', 'als je je veilig voelt'], answer: 0, explain: '"Laat niemand sterven zonder een goede verwachting van Allah."', page: 36 },
    { type: 'tf', q: 'Wie Allah alleen uit vrees aanbidt, is een monotheïstische gelovige.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'De gelovige verenigt liefde, vrees en hoop.', page: 35 },
    { type: 'tf', q: 'Vrees en hoop zijn vormen van aanbidding.', options: ['Juist', 'Onjuist'], answer: 0, explain: '"Zij riepen Ons aan uit verlangen en vrees."', page: 36 }
  ]),
  note: 'Oefening van het boek op p. 38. Pagina 37 staat in het boek alleen ter kennisname. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-tarbiyah', chapter: '8', unit: 4, ar, nl }
