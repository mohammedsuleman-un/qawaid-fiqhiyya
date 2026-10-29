// Hoofdstukkaart bij السيرة النبوية (١), eenheid 2: النبي محمد ﷺ (lessen 2–3, boek p. 15–23).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. De afstamming noemt het boek "رواه البخاري"; bij al-Bukhārī
// staat zij in de hoofdstuktekst, niet als uitspraak van de Profeet ﷺ (zie de opmerking).
// Het verhaal van de monnik Baḥīrā noemt het boek zonder bron; het staat daarom niet in het
// hadith-tabblad en de uitleg vermeldt dat.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب السيرة النبوية (١)، سلسلة زاد العلمية',
  pages: '15–23',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_Seerah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'واثلة بن الأسقع', text: 'إن الله اصطفى كنانة من ولد إسماعيل، واصطفى قريشًا من كنانة، واصطفى من قريش بني هاشم، واصطفاني من بني هاشم', takhrij: 'أخرجه مسلم', note: 'فائدة إثرائية في شرف نسبه ﷺ.', pages: [17], nl: 'Allah verkoos Kināna uit de nakomelingen van Ismāʿīl, verkoos Quraysh uit Kināna, verkoos uit Quraysh de Banū Hāshim, en verkoos mij uit de Banū Hāshim', nlNote: 'Verrijkende les over zijn edele afstamming ﷺ.' },
  { narrator: 'أنس بن مالك', text: 'أتاه جبريل وهو يلعب مع الغلمان فأخذه فصرعه فشق عن قلبه فاستخرج القلب فاستخرج منه علقة فقال: هذا حظ الشيطان منك، ثم غسله في طست من ذهب بماء زمزم ثم لأمه...', takhrij: 'أخرجه مسلم', note: 'حادثة شق الصدر الأولى في بادية بني سعد. قال أنس: وقد كنت أرى أثر ذلك المخيط في صدره.', pages: [19], nl: 'Jibrīl kwam bij hem terwijl hij met de jongens speelde, nam hem, legde hem neer, opende hem bij het hart, haalde het hart eruit en haalde er een klonter uit, en zei: dit is het deel van de duivel in jou; daarna waste hij het in een gouden schaal met Zamzamwater en voegde het weer samen …', nlNote: 'Het eerste openen van de borst, bij de Banū Saʿd. Anas zei: ik zag het spoor van die naad op zijn borst.' },
  { narrator: '', text: 'لقد شهدت في دار عبد الله بن جدعان حلفًا ما أحب أن لي به حمر النعم، ولو أدعى به في الإسلام لأجبت', takhrij: 'رواه البيهقي وصححه الألباني', note: 'في حلف الفضول؛ رواه طلحة بن عبد الله بن عوف.', pages: [22], nl: 'Ik was in het huis van ʿAbdallāh ibn Judʿān bij een verbond dat ik niet zou ruilen voor rode kamelen; zou ik er in de islam toe worden opgeroepen, dan zou ik ingaan', nlNote: 'Over het verbond van al-Fuḍūl; overgeleverd door Ṭalḥa ibn ʿAbdallāh ibn ʿAwf.' },
  { narrator: 'جابر بن عبد الله', text: 'لما بنيت الكعبة ذهب النبي ﷺ والعباس ينقلان الحجارة، فقال العباس: اجعل إزارك على رقبتك يقيك من الحجارة، فخر إلى الأرض وطمحت عيناه إلى السماء ثم أفاق فقال: «إزاري إزاري» فشد عليه إزاره', takhrij: 'أخرجه البخاري ومسلم', note: 'من حفظ الله له قبل البعثة. وفي رواية لهما: «فسقط مغشيًا عليه، فما رئي بعد ذلك عريانًا».', pages: [23], nl: 'Toen de Kaʿba werd gebouwd, droegen de Profeet ﷺ en al-ʿAbbās stenen. al-ʿAbbās zei: leg je lendendoek op je nek, dan beschermt hij je tegen de stenen. Hij viel op de grond, zijn ogen naar de hemel gericht; toen hij bijkwam, zei hij: "mijn lendendoek, mijn lendendoek", en bond hem weer om', nlNote: 'Hoe Allah hem vóór de zending beschermde. In een overlevering bij beiden: "hij viel bewusteloos, en daarna is hij nooit meer ontbloot gezien".' }
]

const TAKHRIJ_NL = {
  'أخرجه مسلم': 'Muslim',
  'رواه البيهقي وصححه الألباني': 'al-Bayhaqī; authentiek volgens al-Albānī',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim'
}
const NARRATOR_NL = { 'واثلة بن الأسقع': 'Wāthila ibn al-Asqaʿ', 'أنس بن مالك': 'Anas ibn Mālik', 'جابر بن عبد الله': 'Jābir ibn ʿAbdallāh' }

const PERSONS = [
  ['wathila-ibn-al-asqa', 'text', [17], 'راوي حديث الاصطفاء: «إن الله اصطفى كنانة...».', 'Overleveraar van de hadith over de verkiezing: "Allah verkoos Kināna …".'],
  ['hamza-ibn-abd-al-muttalib', 'text', [18], 'عمه ﷺ، أرضعته ثويبة قبله، وذكر أهل السير أن حليمة أرضعته كذلك.', 'Zijn oom ﷺ; Thuwayba zoogde hem vóór de Profeet, en volgens de sīra-schrijvers ook Ḥalīma.'],
  ['anas-ibn-malik', 'text', [19], 'روى حادثة شق الصدر، وقال: كنت أرى أثر المخيط في صدره.', 'Overleverde het openen van de borst; zei: ik zag het spoor van de naad op zijn borst.'],
  ['al-abbas-ibn-abd-al-muttalib', 'text', [23], 'كان ينقل الحجارة مع النبي ﷺ عند بناء الكعبة.', 'Droeg met de Profeet ﷺ stenen bij de bouw van de Kaʿba.'],
  ['jabir-ibn-abdallah', 'text', [23], 'روى خبر بناء الكعبة و«إزاري إزاري».', 'Overleverde het bericht over de bouw van de Kaʿba en "mijn lendendoek".'],
  ['al-bukhari', 'takhrij', [17, 19, 23], 'أخرج حديث بناء الكعبة.', 'Nam de hadith over de bouw van de Kaʿba op.'],
  ['muslim', 'takhrij', [17, 19, 23], 'أخرج حديث الاصطفاء وحديث شق الصدر.', 'Nam de hadith over de verkiezing en over het openen van de borst op.'],
  ['al-bayhaqi', 'takhrij', [22], 'روى حديث حلف الفضول.', 'Overleverde de hadith over het verbond van al-Fuḍūl.'],
  ['al-albani', 'takhrij', [22], 'صحح حديث حلف الفضول.', 'Verklaarde de hadith over het verbond van al-Fuḍūl authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'النبي محمد ﷺ: نسبه ومولده ونشأته',
  subtitle: 'درسان مجموعان في صفحة واحدة',
  summary: 'نسبه الشريف إلى عدنان من ولد إسماعيل، ومولده عام الفيل، ومرضعاته، ونشأته يتيمًا في كفالة جده ثم عمه، وحادثة شق الصدر، ثم حلف الفضول وحفظ الله له من أدناس الجاهلية حتى البعثة.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في الكتاب.',
    root: { label: 'النبي محمد ﷺ', sub: 'الوحدة الثانية' },
    nodes: [
      { label: 'نسبه', sub: 'الدرس ٢', page: 17, children: ['إلى عدنان', 'من ولد إسماعيل', 'خيار من خيار'] },
      { label: 'مولده ومرضعاته', sub: 'الدرس ٢', page: 18, children: ['عام الفيل', 'ثويبة', 'حليمة السعدية'] },
      { label: 'نشأته', sub: 'الدرسان ٢–٣', page: 19, children: ['اليتم', 'كفالة الجد ثم العم', 'شق الصدر'] },
      { label: 'قبل البعثة', sub: 'الدرس ٣', page: 21, children: ['بحيرى', 'حلف الفضول', 'حفظ الله له'] }
    ]
  },
  points: [
    { text: 'نسبه ﷺ ينتهي إلى عدنان، وعدنان من نسل إسماعيل بن إبراهيم؛ فهو خيار من خيار.', page: 17 },
    { text: 'ولد يوم الاثنين من ربيع الأول عام الفيل، واختلف في تعيين اليوم.', page: 18 },
    { text: 'أول من أرضعته ثويبة مولاة أبي لهب، ثم حليمة السعدية في بني سعد.', page: 18 },
    { text: 'نشأ يتيمًا: مات أبوه وهو حمل على الأرجح، وأمه وهو ابن ست سنين أو أربع.', page: 19 },
    { text: 'كفله جده عبد المطلب، ثم عمه أبو طالب بعد وفاة جده وهو ابن ثماني سنين.', page: 21 },
    { text: 'شق صدره مرتين: في بني سعد، وليلة الإسراء.', page: 19 },
    { text: 'شهد حلف الفضول على نصرة المظلوم، وقال: لو أدعى به في الإسلام لأجبت.', page: 22 },
    { text: 'حفظه الله من صغره: لا يشرب الخمر، ولا يأكل مما ذبح على النصب، ولا يحضر للأوثان عيدًا.', page: 22 }
  ],
  terms: [
    { term: 'عام الفيل', translit: 'ʿām al-fīl', meaning: 'العام الذي أراد فيه أبرهة ملك اليمن هدم الكعبة بجيش معه فيل.', explanation: 'فرد الله كيدهم، وفيه ولد النبي ﷺ.', notes: [], page: 18 },
    { term: 'المرضعة', translit: 'al-murḍiʿa', meaning: 'من ترضع الطفل غير أمه.', explanation: 'كانت نسوة من بني سعد بن بكر يطلبن أطفالًا يرضعنهم.', notes: [], page: 18 },
    { term: 'شق الصدر', translit: 'shaqq aṣ-ṣadr', meaning: 'إخراج قلبه ﷺ وغسله واستخراج حظ الشيطان منه.', explanation: 'مرتان: في بادية بني سعد، وليلة الإسراء.', notes: [], page: 19 },
    { term: 'خاتم النبوة', translit: 'khātam an-nubuwwa', meaning: 'علامة بين كتفيه ﷺ.', explanation: 'ذكره الكتاب في خبر بحيرى: أسفل من غضروف كتفه مثل التفاحة.', notes: [], page: 21 },
    { term: 'حلف الفضول', translit: 'ḥilf al-fuḍūl', meaning: 'تعاقد قبائل من قريش في دار عبد الله بن جدعان على نصرة المظلوم بمكة.', explanation: 'شهده النبي ﷺ قبل البعثة.', notes: [], page: 22 },
    { term: 'النصب', translit: 'an-nuṣub', meaning: 'حجارة كانوا يذبحون عليها لأصنامهم.', explanation: 'وكان ﷺ لا يأكل مما ذبح عليها.', notes: [], page: 22 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'من المولد إلى كفالة أبي طالب',
      intro: 'كما في الكتاب.',
      nodes: [
        { label: 'المولد', sub: 'عام الفيل، وأبوه قد مات وهو جنين على الأرجح', page: 18 },
        { label: 'في بني سعد', sub: 'عند حليمة أكثر من أربع سنوات، وفيها شق الصدر', page: 18 },
        { label: 'عند أمه', sub: 'إلى أن بلغ ست سنين، فماتت بالأبواء', page: 20 },
        { label: 'كفالة الجد', sub: 'عبد المطلب إلى أن بلغ ثماني سنين', page: 21 },
        { label: 'كفالة العم', sub: 'أبو طالب، ورحلة الشام في الثانية عشرة', page: 21 }
      ]
    },
    {
      type: 'cards',
      title: 'أسرته القريبة',
      intro: 'كما عرف بهم الكتاب.',
      nodes: [
        { label: 'أبوه عبد الله', sub: 'أجمل شباب قريش', page: 17 },
        { label: 'أمه آمنة بنت وهب', sub: 'أبوها سيد بني زهرة', page: 17 },
        { label: 'جده عبد المطلب', sub: 'سيد قريش، اشتهر بحفر زمزم', page: 17 },
        { label: 'عمه أبو طالب', sub: 'كفله بعد جده', page: 21 }
      ]
    },
    {
      type: 'cards',
      title: 'حفظ الله له قبل البعثة',
      intro: 'نشأ على مكارم الأخلاق.',
      nodes: [
        { label: 'لا يشرب الخمر', page: 22 },
        { label: 'لا يأكل مما ذبح على النصب', page: 22 },
        { label: 'لا يحضر للأوثان عيدًا ولا احتفالًا', page: 22 },
        { label: 'لا يصبر على سماع الحلف باللات والعزى', page: 22 },
        { label: 'ما رئي بعد بناء الكعبة عريانًا', page: 23 }
      ]
    }
  ],
  sections: [
    { title: 'نسبه الشريف', text: 'محمد بن عبد الله بن عبد المطلب بن هاشم بن عبد مناف بن قصي بن كلاب بن مرة بن كعب بن لؤي بن غالب بن فهر بن مالك بن النضر بن كنانة بن خزيمة بن مدركة بن إلياس بن مضر بن نزار بن معد بن عدنان، وعدنان من نسل إسماعيل بن إبراهيم.', more: 'عزاه الكتاب إلى البخاري، وهو عنده في ترجمة باب مبعث النبي ﷺ.', page: 17 },
    { title: 'مولده', text: 'ولد يوم الاثنين لاثنتي عشرة ليلة خلت من ربيع الأول، وقيل لتسع، وقيل لثمان، من عام الفيل؛ ورأت أمه حين وضعته نورًا أضاءت منه قصور بصرى من أرض الشام.', more: '', page: 18 },
    { title: 'الاحتفال بالمولد', text: 'قال الكتاب في فائدة إثرائية: الاحتفال بالمولد النبوي ليس له أصل في الشرع، ولم يفعله أحد من الصحابة ولا القرون الثلاثة المفضلة، وأول من أحدثه الفاطميون.', more: '', page: 18 },
    { title: 'مرضعاته', text: 'أول من أرضعته ثويبة مولاة أبي لهب، وكانت أرضعت قبله حمزة. ثم كان من نصيب حليمة بنت أبي ذؤيب السعدية، فدرت البركات على بيتها، ومكث فيهم ما يربو على أربع سنوات.', more: '', page: 18 },
    { title: 'وفاة أمه وجده', text: 'خرجت به آمنة لتزور أخواله من بني عدي بن النجار بالمدينة، فماتت بالأبواء في طريق العودة؛ فكفله جده عبد المطلب وكان شديد الرقة عليه، ثم توفي وهو ابن ثماني سنين فكفله عمه أبو طالب.', more: '', page: 20 },
    { title: 'بحيرى الراهب', text: 'لما بلغ اثنتي عشرة سنة خرج به أبو طالب تاجرًا إلى الشام، فلقيه راهب ببصرى يعرف ببحيرى، فعرفه بخاتم النبوة وقال: هذا رسول رب العالمين، وطلب من أبي طالب أن يرده خوفًا عليه.', more: 'ذكره الكتاب بلا عزو.', page: 21 },
    { title: 'حلف الفضول', text: 'تداعت قبائل من قريش في دار عبد الله بن جدعان فتعاقدوا ألا يجدوا بمكة مظلومًا إلا قاموا معه حتى ترد عليه مظلمته، وشهده النبي ﷺ.', more: '', page: 22 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'مرضعاته', items: ['ثويبة مولاة أبي لهب', 'حليمة السعدية'], page: 18, origin: 'boek' },
    { kind: 'opsomming', title: 'كفلاؤه', items: ['جده عبد المطلب إلى الثامنة', 'عمه أبو طالب بعده'], page: 21, origin: 'boek' },
    { kind: 'onderscheid', title: 'مرتا شق الصدر', items: ['الأولى: في بادية بني سعد في الرابعة.', 'الثانية: ليلة الإسراء.'], page: 19, origin: 'boek' },
    { kind: 'definitie', title: 'حلف الفضول', items: ['تعاقد على نصرة كل مظلوم بمكة حتى ترد عليه مظلمته.'], page: 22, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'نسبه ﷺ إلى عدنان من ولد إسماعيل، خيار من خيار.',
    'ولد عام الفيل، وأرضعته ثويبة ثم حليمة.',
    'نشأ يتيمًا في كفالة جده ثم عمه أبي طالب.',
    'شق صدره مرتين.',
    'شهد حلف الفضول، وحفظه الله من أدناس الجاهلية.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'إلى من ينتهي نسبه ﷺ المذكور في الكتاب؟', options: ['عدنان', 'قحطان', 'نوح', 'آدم'], answer: 0, explain: 'وعدنان من نسل إسماعيل.', page: 17 },
    { type: 'mc', q: 'في أي عام ولد النبي ﷺ؟', options: ['عام الفيل', 'عام الحزن', 'عام الوفود', 'عام الفتح'], answer: 0, explain: 'العام الذي أراد فيه أبرهة هدم الكعبة.', page: 18 },
    { type: 'mc', q: 'من أول من أرضعته؟', options: ['ثويبة', 'حليمة', 'آمنة', 'أم أيمن'], answer: 0, explain: 'مولاة أبي لهب.', page: 18 },
    { type: 'mc', q: 'أين ماتت أمه ﷺ؟', options: ['بالأبواء', 'بمكة', 'بالمدينة', 'بالطائف'], answer: 0, explain: 'بين مكة والمدينة في طريق العودة.', page: 20 },
    { type: 'tf', q: 'كفله عمه أبو طالب بعد وفاة جده.', options: ['صواب', 'خطأ'], answer: 0, explain: 'توفي جده وهو ابن ثماني سنين.', page: 21 },
    { type: 'mc', q: 'على أي شيء تعاقدوا في حلف الفضول؟', options: ['نصرة المظلوم', 'التجارة', 'حرب الفرس', 'بناء الكعبة'], answer: 0, explain: 'ألا يجدوا بمكة مظلومًا إلا قاموا معه.', page: 22 },
    { type: 'tf', q: 'شق صدره ﷺ مرة واحدة فقط.', options: ['صواب', 'خطأ'], answer: 1, explain: 'مرتين: في بني سعد وليلة الإسراء.', page: 19 }
  ]),
  note: 'نشاط الكتاب في صفحة ٢٣.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'De Profeet Muḥammad ﷺ: afstamming, geboorte en jeugd',
  subtitle: 'Twee lessen samen op één pagina',
  summary: 'Zijn edele afstamming tot ʿAdnān, uit de nakomelingen van Ismāʿīl, zijn geboorte in het Jaar van de Olifant, zijn zoogmoeders, zijn jeugd als wees onder de zorg van zijn grootvader en daarna zijn oom, het openen van zijn borst, en het verbond van al-Fuḍūl en hoe Allah hem tot de zending beschermde tegen de onreinheden van de onwetendheid.',
  source: { ...source, label: 'Kitāb as-Sīra an-nabawiyya (1), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 2 in één kaart',
    intro: 'De onderwerpen zoals in het boek.',
    root: { label: 'De Profeet Muḥammad ﷺ', sub: 'Eenheid 2' },
    nodes: [
      { label: 'Afstamming', sub: 'les 2', page: 17, children: ['tot ʿAdnān', 'uit Ismāʿīl', 'de besten uit de besten'] },
      { label: 'Geboorte en zoogmoeders', sub: 'les 2', page: 18, children: ['Jaar van de Olifant', 'Thuwayba', 'Ḥalīma as-Saʿdiyya'] },
      { label: 'Jeugd', sub: 'les 2–3', page: 19, children: ['wees', 'grootvader en oom', 'het openen van de borst'] },
      { label: 'Vóór de zending', sub: 'les 3', page: 21, children: ['Baḥīrā', 'het verbond van al-Fuḍūl', 'Allahs bescherming'] }
    ]
  },
  points: [
    { text: 'Zijn afstamming ﷺ loopt tot ʿAdnān, uit de nakomelingen van Ismāʿīl zoon van Ibrāhīm: de besten uit de besten.', page: 17 },
    { text: 'Hij werd op een maandag in Rabīʿ al-Awwal geboren, in het Jaar van de Olifant; over de precieze dag verschilt men.', page: 18 },
    { text: 'Eerst zoogde Thuwayba, de vrijgelaten slavin van Abū Lahab, hem; daarna Ḥalīma as-Saʿdiyya bij de Banū Saʿd.', page: 18 },
    { text: 'Hij groeide op als wees: zijn vader stierf toen hij nog ongeboren was (het meest waarschijnlijke), zijn moeder toen hij zes of vier was.', page: 19 },
    { text: 'Zijn grootvader ʿAbd al-Muṭṭalib zorgde voor hem, en na diens dood, toen hij acht was, zijn oom Abū Ṭālib.', page: 21 },
    { text: 'Zijn borst werd twee keer geopend: bij de Banū Saʿd en in de nacht van de Nachtreis.', page: 19 },
    { text: 'Hij was bij het verbond van al-Fuḍūl voor de onderdrukte, en zei: zou ik er in de islam toe worden opgeroepen, dan zou ik ingaan.', page: 22 },
    { text: 'Allah beschermde hem van jongs af: hij dronk geen wijn, at niet van wat op de offerstenen geslacht was en was niet bij feesten voor afgoden.', page: 22 }
  ],
  terms: [
    { term: 'عام الفيل', translit: 'ʿām al-fīl', meaning: 'Het jaar waarin Abraha, koning van Jemen, met een leger en een olifant de Kaʿba wilde verwoesten.', explanation: 'Allah verijdelde hun list; in dat jaar werd de Profeet ﷺ geboren.', notes: [], page: 18 },
    { term: 'المرضعة', translit: 'al-murḍiʿa', meaning: 'Een vrouw die een kind zoogt dat niet het hare is.', explanation: 'Vrouwen van de Banū Saʿd ibn Bakr zochten kinderen om te zogen.', notes: [], page: 18 },
    { term: 'شق الصدر', translit: 'shaqq aṣ-ṣadr', meaning: 'Het openen van zijn borst: zijn hart werd eruit gehaald, gewassen en het deel van de duivel verwijderd.', explanation: 'Twee keer: bij de Banū Saʿd en in de nacht van de Nachtreis.', notes: [], page: 19 },
    { term: 'خاتم النبوة', translit: 'khātam an-nubuwwa', meaning: 'Het zegel van het profeetschap: een teken tussen zijn schouders ﷺ.', explanation: 'Het boek noemt het in het verhaal van Baḥīrā: onder het kraakbeen van zijn schouder, als een appel.', notes: [], page: 21 },
    { term: 'حلف الفضول', translit: 'ḥilf al-fuḍūl', meaning: 'Een verbond van stammen van Quraysh in het huis van ʿAbdallāh ibn Judʿān om iedere onderdrukte in Mekka te helpen.', explanation: 'De Profeet ﷺ was erbij, vóór de zending.', notes: [], page: 22 },
    { term: 'النصب', translit: 'an-nuṣub', meaning: 'Stenen waarop voor de afgoden geslacht werd.', explanation: 'Hij ﷺ at niet van wat daarop geslacht was.', notes: [], page: 22 }
  ],
  diagrams: [
    {
      type: 'timeline',
      title: 'Van geboorte tot de zorg van Abū Ṭālib',
      intro: 'Zoals in het boek.',
      nodes: [
        { label: 'Geboorte', sub: 'Jaar van de Olifant; zijn vader was al overleden (het meest waarschijnlijke)', page: 18 },
        { label: 'Bij de Banū Saʿd', sub: 'ruim vier jaar bij Ḥalīma; daar werd zijn borst geopend', page: 18 },
        { label: 'Bij zijn moeder', sub: 'tot zijn zesde; zij stierf in al-Abwāʾ', page: 20 },
        { label: 'Zorg van zijn grootvader', sub: 'ʿAbd al-Muṭṭalib, tot zijn achtste', page: 21 },
        { label: 'Zorg van zijn oom', sub: 'Abū Ṭālib; reis naar Syrië op zijn twaalfde', page: 21 }
      ]
    },
    {
      type: 'cards',
      title: 'Zijn naaste familie',
      intro: 'Zoals het boek hen voorstelt.',
      nodes: [
        { label: 'Zijn vader ʿAbdallāh', sub: 'de mooiste jongeman van Quraysh', page: 17 },
        { label: 'Zijn moeder Āmina bint Wahb', sub: 'haar vader was het hoofd van de Banū Zuhra', page: 17 },
        { label: 'Zijn grootvader ʿAbd al-Muṭṭalib', sub: 'hoofd van Quraysh, bekend om het graven van Zamzam', page: 17 },
        { label: 'Zijn oom Abū Ṭālib', sub: 'zorgde na zijn grootvader voor hem', page: 21 }
      ]
    },
    {
      type: 'cards',
      title: 'Allahs bescherming vóór de zending',
      intro: 'Hij groeide op met een edel karakter.',
      nodes: [
        { label: 'Hij dronk geen wijn', page: 22 },
        { label: 'Hij at niet van wat op offerstenen geslacht was', page: 22 },
        { label: 'Hij ging niet naar feesten voor afgoden', page: 22 },
        { label: 'Hij verdroeg geen eden bij al-Lāt en al-ʿUzzā', page: 22 },
        { label: 'Na de bouw van de Kaʿba is hij nooit ontbloot gezien', page: 23 }
      ]
    }
  ],
  sections: [
    { title: 'Zijn edele afstamming', text: 'Muḥammad zoon van ʿAbdallāh zoon van ʿAbd al-Muṭṭalib zoon van Hāshim zoon van ʿAbd Manāf zoon van Quṣayy zoon van Kilāb zoon van Murra zoon van Kaʿb zoon van Luʾayy zoon van Ghālib zoon van Fihr zoon van Mālik zoon van an-Naḍr zoon van Kināna zoon van Khuzayma zoon van Mudrika zoon van Ilyās zoon van Muḍar zoon van Nizār zoon van Maʿadd zoon van ʿAdnān; en ʿAdnān stamt af van Ismāʿīl zoon van Ibrāhīm.', more: 'Het boek verwijst naar al-Bukhārī; daar staat de afstamming in een hoofdstuktitel over de zending van de Profeet ﷺ.', page: 17 },
    { title: 'Zijn geboorte', text: 'Hij werd geboren op maandag 12 Rabīʿ al-Awwal (ook gezegd: de 9e of 8e) in het Jaar van de Olifant. Bij zijn geboorte zag zijn moeder een licht van zich uitgaan waardoor de paleizen van Buṣrā in Syrië verlicht werden.', more: '', page: 18 },
    { title: 'Het vieren van de geboortedag', text: 'Het boek zegt in een verrijkende les: het vieren van de geboortedag van de Profeet heeft geen basis in de wet; geen van de metgezellen of de drie beste generaties deed het, en de Fāṭimiden voerden het als eersten in.', more: '', page: 18 },
    { title: 'Zijn zoogmoeders', text: 'Eerst zoogde Thuwayba, de vrijgelaten slavin van Abū Lahab, hem; zij had eerder ook Ḥamza gezoogd. Daarna kreeg Ḥalīma bint Abī Dhuʾayb as-Saʿdiyya hem; haar huis werd gezegend en hij bleef ruim vier jaar bij hen.', more: '', page: 18 },
    { title: 'De dood van zijn moeder en grootvader', text: 'Āmina reisde met hem naar zijn ooms van moederskant van de Banū ʿAdī ibn an-Najjār in Medina en stierf op de terugweg in al-Abwāʾ. Zijn grootvader ʿAbd al-Muṭṭalib zorgde liefdevol voor hem, en toen die stierf toen hij acht was, nam zijn oom Abū Ṭālib de zorg over.', more: '', page: 20 },
    { title: 'De monnik Baḥīrā', text: 'Toen hij twaalf was, nam Abū Ṭālib hem mee op handelsreis naar Syrië. In Buṣrā herkende een monnik, Baḥīrā, hem aan het zegel van het profeetschap en zei: dit is de Boodschapper van de Heer der werelden; hij vroeg Abū Ṭālib hem terug te brengen, uit vrees voor zijn veiligheid.', more: 'Het boek noemt hierbij geen bron.', page: 21 },
    { title: 'Het verbond van al-Fuḍūl', text: 'Stammen van Quraysh kwamen samen in het huis van ʿAbdallāh ibn Judʿān en spraken af dat zij iedere onderdrukte in Mekka zouden bijstaan tot hem recht gedaan werd. De Profeet ﷺ was erbij.', more: '', page: 22 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Zijn zoogmoeders', items: ['Thuwayba, de vrijgelaten slavin van Abū Lahab', 'Ḥalīma as-Saʿdiyya'], page: 18, origin: 'boek' },
    { kind: 'opsomming', title: 'Wie voor hem zorgde', items: ['zijn grootvader ʿAbd al-Muṭṭalib, tot zijn achtste', 'daarna zijn oom Abū Ṭālib'], page: 21, origin: 'boek' },
    { kind: 'onderscheid', title: 'De twee keren dat zijn borst geopend werd', items: ['Eerst: bij de Banū Saʿd, op zijn vierde.', 'Daarna: in de nacht van de Nachtreis.'], page: 19, origin: 'boek' },
    { kind: 'definitie', title: 'Het verbond van al-Fuḍūl', items: ['Een afspraak om iedere onderdrukte in Mekka bij te staan tot hem recht gedaan werd.'], page: 22, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Zijn afstamming ﷺ loopt tot ʿAdnān uit Ismāʿīl: de besten uit de besten.',
    'Hij werd geboren in het Jaar van de Olifant; Thuwayba en daarna Ḥalīma zoogden hem.',
    'Hij groeide op als wees, onder de zorg van zijn grootvader en daarna Abū Ṭālib.',
    'Zijn borst werd twee keer geopend.',
    'Hij was bij het verbond van al-Fuḍūl, en Allah beschermde hem tegen de onreinheden van de onwetendheid.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Tot wie loopt de afstamming ﷺ die het boek geeft?', options: ['ʿAdnān', 'Qaḥṭān', 'Nūḥ', 'Ādam'], answer: 0, explain: 'En ʿAdnān stamt af van Ismāʿīl.', page: 17 },
    { type: 'mc', q: 'In welk jaar werd de Profeet ﷺ geboren?', options: ['het Jaar van de Olifant', 'het jaar van rouw', 'het jaar van de delegaties', 'het jaar van de verovering'], answer: 0, explain: 'Het jaar waarin Abraha de Kaʿba wilde verwoesten.', page: 18 },
    { type: 'mc', q: 'Wie zoogde hem als eerste?', options: ['Thuwayba', 'Ḥalīma', 'Āmina', 'Umm Ayman'], answer: 0, explain: 'De vrijgelaten slavin van Abū Lahab.', page: 18 },
    { type: 'mc', q: 'Waar stierf zijn moeder ﷺ?', options: ['in al-Abwāʾ', 'in Mekka', 'in Medina', 'in aṭ-Ṭāʾif'], answer: 0, explain: 'Tussen Mekka en Medina, op de terugweg.', page: 20 },
    { type: 'tf', q: 'Na de dood van zijn grootvader zorgde zijn oom Abū Ṭālib voor hem.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zijn grootvader stierf toen hij acht was.', page: 21 },
    { type: 'mc', q: 'Wat spraken ze af in het verbond van al-Fuḍūl?', options: ['de onderdrukte bijstaan', 'handel drijven', 'oorlog tegen de Perzen', 'de Kaʿba bouwen'], answer: 0, explain: 'Iedere onderdrukte in Mekka bijstaan.', page: 22 },
    { type: 'tf', q: 'Zijn borst ﷺ werd maar één keer geopend.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Twee keer: bij de Banū Saʿd en in de nacht van de Nachtreis.', page: 19 }
  ]),
  note: 'Oefening van het boek op p. 23. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-seerah', chapter: '2', unit: 2, ar, nl }
