// Hoofdstukkaart bij العقيدة (١), eenheid 2: الانحراف عن العقيدة الصحيحة (lessen 7–11, boek p. 34–48).
// Opgesteld uit de boekpagina's zelf (Zad Academy, archive.org); hadith en takhrij zoals in het boek.
// p. 36–37 staan in het boek als "للاطلاع فقط" (alleen ter kennisname).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (١)، سلسلة زاد العلمية',
  pages: '34–48',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: 'حذيفة بن اليمان', text: 'يكون دعاة على أبواب جهنم، من أجابهم إليها قذفوه فيها. قلت: يا رسول الله، صفهم لنا. قال: هم قوم من جلدتنا يتكلمون بألسنتنا', takhrij: 'أخرجه مسلم', pages: [35], nl: 'er zullen predikers zijn bij de poorten van de Hel; wie op hun oproep ingaat, werpen zij erin. Hij werd gevraagd hen te beschrijven en zei: het zijn mensen van ons eigen volk die onze taal spreken', nlNote: 'Bewijs dat het volgen van slechte predikers een oorzaak van afwijking is.' },
  { narrator: 'ثوبان', text: 'إنما أخاف على أمتي الأئمة المضلين', takhrij: 'أخرجه أحمد والترمذي، وصححه', pages: [35], nl: 'wat ik voor mijn umma vrees, zijn de leiders die op een dwaalspoor brengen', nlNote: '' },
  { narrator: 'عبد الله بن عمرو بن العاص', text: 'إن الله لا يقبض العلم انتزاعا ينتزعه من العباد، ولكن يقبض العلم بقبض العلماء، حتى إذا لم يبق عالما اتخذ الناس رءوسا جهالا، فسئلوا فأفتوا بغير علم، فضلوا وأضلوا', takhrij: 'أخرجه البخاري ومسلم', pages: [35], nl: 'Allah neemt de kennis niet weg door haar uit de mensen te rukken, maar door de geleerden weg te nemen; als er geen geleerde meer over is, nemen de mensen onwetende leiders, die zonder kennis fatwa\'s geven: zij dwalen en doen anderen dwalen', nlNote: '' },
  { narrator: 'عائشة', text: 'رأيت جهنم يحطم بعضها بعضا، ورأيت عمرا يجر قصبه -أي أمعاءه-، وهو أول من سيب السوائب', takhrij: 'أخرجه البخاري ومسلم', note: 'عن عمرو بن عامر الخزاعي، أول من غير دين إسماعيل ونصب الأوثان. والمقطع في الكتاب للاطلاع فقط.', pages: [36], nl: 'ik zag de Hel, waarvan het ene deel het andere vermorzelde, en ik zag ʿAmr zijn ingewanden voortslepen; hij was de eerste die dieren vrijliet als offer aan afgoden (sawāʾib)', nlNote: 'Over ʿAmr ibn ʿĀmir al-Khuzāʿī, die volgens het boek als eerste de godsdienst van Ismāʿīl veranderde. In het boek alleen ter kennisname.' },
  { narrator: '', text: 'يا أيها الناس، إياكم والغلو في الدين؛ فإنه أهلك من كان قبلكم الغلو في الدين', takhrij: 'أخرجه أحمد والنسائي، وصححه الألباني', pages: [39, 46], nl: 'o mensen, pas op voor overdrijving in de godsdienst, want overdrijving in de godsdienst heeft wie vóór jullie waren te gronde gericht', nlNote: 'Bewijs dat overdrijving verboden is, en later als middel ter bescherming.' },
  { narrator: '', text: 'الكبر بطر الحق، وغمط الناس', takhrij: 'أخرجه مسلم', note: 'بطر الحق: التكبر على الحق فلا يقبله. وغمط الناس: احتقارهم والاستهانة بهم.', pages: [41], nl: 'hoogmoed is de waarheid afwijzen en de mensen minachten', nlNote: 'Baṭar al-ḥaqq: uit hoogmoed de waarheid niet aanvaarden. Ghamṭ an-nās: mensen minachten.' },
  { narrator: 'عياض بن حمار المجاشعي', text: 'ألا إن ربي أمرني أن أعلمكم ما جهلتم مما علمني يومي هذا، كل مال نحلته عبدا حلال، وإني خلقت عبادي حنفاء كلهم، وإنهم أتتهم الشياطين فاجتالتهم عن دينهم، وحرمت عليهم ما أحللت لهم، وأمرتهم أن يشركوا بي ما لم أنزل به سلطانا', takhrij: 'تقدم (أخرجه مسلم)', note: 'دليل على أن اتباع الشيطان من أسباب الانحراف.', pages: [42], nl: '... Ik heb Mijn dienaren allen als ḥunafāʾ geschapen; toen kwamen de duivels en brachten hen af van hun godsdienst ...', nlNote: 'Ook genoemd in eenheid 1 (p. 17). Hier als bewijs dat het volgen van de duivel tot afwijking leidt.' },
  { narrator: 'عبد الله بن مسعود', text: 'خط رسول الله ﷺ خطا بيده، ثم قال: هذا سبيل الله مستقيما. قال: ثم خط عن يمينه وشماله، ثم قال: هذه السبل وليس منها سبيل إلا عليه شيطان يدعو إليه. ثم قرأ: ﴿وأن هذا صراطي مستقيما فاتبعوه ولا تتبعوا السبل﴾', takhrij: 'أخرجه أحمد، وحسنه الأرناؤوط', pages: [42], nl: 'de Profeet ﷺ trok een rechte lijn en zei: dit is de weg van Allah; daarna trok hij lijnen rechts en links en zei: dit zijn de wegen, en op elk ervan zit een duivel die ertoe oproept. Toen reciteerde hij al-Anʿām 6:153', nlNote: '' },
  { narrator: 'العرباض بن سارية', text: 'فإنه من يعش منكم ير اختلافا كثيرا، وإياكم ومحدثات الأمور فإنها ضلالة، فمن أدرك ذلك منكم فعليه بسنتي وسنة الخلفاء الراشدين المهديين، عضوا عليها بالنواجذ', takhrij: 'تقدم (أخرجه أحمد والترمذي، وصححه)', pages: [44], nl: 'wie van jullie blijft leven, zal veel onenigheid zien; pas op voor nieuwe zaken ... houd vast aan mijn sunna en de sunna van de rechtgeleide kaliefen', nlNote: 'Ook genoemd in eenheid 1. Hier als bewijs voor het volgen van het rechte pad.' },
  { narrator: 'عائشة', text: 'فإذا رأيت الذين يتبعون ما تشابه منه فأولئك الذين سمى الله فاحذروهم', takhrij: 'متفق عليه', note: 'قاله النبي ﷺ بعد أن تلا آية آل عمران: ٧.', pages: [44], nl: 'als je hen ziet die het dubbelzinnige ervan volgen: dat zijn degenen die Allah genoemd heeft, dus wees op je hoede voor hen', nlNote: 'Na het reciteren van Āl ʿImrān 3:7.' },
  { narrator: 'أبو هريرة', text: 'يكون في آخر الزمان دجالون كذابون، يأتونكم من الأحاديث بما لم تسمعوا أنتم ولا آباؤكم، فإياكم وإياهم، لا يضلونكم ولا يفتنونكم', takhrij: 'أخرجه مسلم', pages: [45], nl: 'aan het einde der tijden komen bedriegers en leugenaars die jullie berichten brengen die jullie noch jullie vaders gehoord hebben; blijf bij hen weg, opdat zij jullie niet doen dwalen en niet in beproeving brengen', nlNote: '' },
  { narrator: 'عمران بن حصين', text: 'من سمع بالدجال فلينأ عنه، فوالله إن الرجل ليأتيه وهو يحسب أنه مؤمن، فيتبعه مما يبعث به من الشبهات، أو لما يبعث به من الشبهات', takhrij: 'رواه أبو داود، وصححه الألباني', note: 'فلينأ عنه: فليبتعد عنه ولا يقترب منه.', pages: [45], nl: 'wie hoort van de Dajjāl, laat hem uit zijn buurt blijven; bij Allah, iemand komt naar hem toe in de veronderstelling dat hij gelovig is, en volgt hem dan door de twijfels die hij verspreidt', nlNote: '"Falyanʾa ʿanhu": laat hem zich ervan verwijderen.' },
  { narrator: 'معاوية بن أبي سفيان', text: 'من يرد الله به خيرا يفقهه في الدين', takhrij: 'متفق عليه', pages: [45], nl: 'wie Allah goed wil doen, geeft Hij begrip van de godsdienst', nlNote: 'Bewijs voor het zoeken van kennis bij betrouwbare geleerden.' },
  { narrator: '', text: 'يأتي الشيطان أحدكم فيقول: من خلق كذا؟ من خلق كذا؟ حتى يقول: من خلق ربك؟ فإذا بلغه فليستعذ بالله ولينته', takhrij: 'متفق عليه', pages: [47], nl: 'de duivel komt naar een van jullie en zegt: wie heeft dit geschapen, wie heeft dat geschapen, tot hij zegt: wie heeft jouw Heer geschapen? Wie zover komt, laat hem zijn toevlucht zoeken bij Allah en ermee ophouden', nlNote: '' },
  { narrator: '', text: 'إياكم والظن؛ فإن الظن أكذب الحديث', takhrij: 'متفق عليه', pages: [48], nl: 'pas op voor vermoedens, want een vermoeden is de meest leugenachtige uitspraak', nlNote: 'Bewijs dat men op bewijs moet steunen en niet op vermoeden.' }
]

const TAKHRIJ_NL = {
  'أخرجه مسلم': 'Muslim',
  'أخرجه أحمد والترمذي، وصححه': 'Aḥmad en at-Tirmidhī, die hem authentiek noemde',
  'أخرجه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه أحمد والنسائي، وصححه الألباني': 'Aḥmad en an-Nasāʾī; authentiek volgens al-Albānī',
  'تقدم (أخرجه مسلم)': 'Muslim (eerder genoemd)',
  'أخرجه أحمد، وحسنه الأرناؤوط': 'Aḥmad; ḥasan volgens al-Arnaʾūṭ',
  'تقدم (أخرجه أحمد والترمذي، وصححه)': 'Aḥmad en at-Tirmidhī (eerder genoemd)',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه أبو داود، وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'حذيفة بن اليمان': 'Ḥudhayfa ibn al-Yamān', 'ثوبان': 'Thawbān', 'عبد الله بن عمرو بن العاص': 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', 'عائشة': 'ʿĀʾisha',
  'عياض بن حمار المجاشعي': 'ʿIyāḍ ibn Ḥimār al-Mujāshiʿī', 'عبد الله بن مسعود': 'ʿAbd Allāh ibn Masʿūd', 'العرباض بن سارية': 'al-ʿIrbāḍ ibn Sāriya',
  'أبو هريرة': 'Abū Hurayra', 'عمران بن حصين': 'ʿImrān ibn Ḥuṣayn', 'معاوية بن أبي سفيان': 'Muʿāwiya ibn Abī Sufyān'
}

const PERSONS = [
  ['umar-ibn-al-khattab', 'text', [35], 'نقل الكتاب قوله: «إنما تنقض عرى الإسلام عروة عروة إذا نشأ في الإسلام من لا يعرف الجاهلية».', 'Het boek citeert hem: de banden van de islam worden één voor één losgemaakt als er in de islam mensen opgroeien die de jāhiliyya niet kennen.'],
  ['hudhayfa-ibn-al-yaman', 'text', [35], 'روى حديث «دعاة على أبواب جهنم».', 'Overleverde de hadith over "predikers bij de poorten van de Hel".'],
  ['thawban', 'text', [35], 'روى حديث «إنما أخاف على أمتي الأئمة المضلين».', 'Overleverde de hadith over de leiders die op een dwaalspoor brengen.'],
  ['abdallah-ibn-amr', 'text', [35], 'روى حديث قبض العلم بقبض العلماء.', 'Overleverde de hadith dat de kennis verdwijnt doordat de geleerden wegvallen.'],
  ['aisha', 'text', [36, 44], 'روت حديث عمرو بن عامر الخزاعي، وحديث التحذير من متبعي المتشابه.', 'Overleverde de hadith over ʿAmr ibn ʿĀmir al-Khuzāʿī en de waarschuwing tegen wie het dubbelzinnige volgt.'],
  ['muawiya-ibn-abi-sufyan', 'text', [37, 45], 'روى حديث «من يرد الله به خيرا يفقهه في الدين»، وذكر الكتاب الطعن فيه من غلاة الروافض.', 'Overleverde "wie Allah goed wil doen, geeft Hij begrip van de godsdienst"; het boek noemt ook de kritiek op hem als voorbeeld van afwijking.'],
  ['iyad-ibn-himar', 'text', [42], 'روى حديث «خلقت عبادي حنفاء» (تقدم).', 'Overleverde de hadith "Ik heb Mijn dienaren als ḥunafāʾ geschapen" (eerder genoemd).'],
  ['ibn-masud', 'text', [42], 'روى حديث الخط المستقيم والسبل.', 'Overleverde de hadith over de rechte lijn en de zijwegen.'],
  ['al-irbad-ibn-sariya', 'text', [44], 'روى حديث «فعليكم بسنتي» (تقدم).', 'Overleverde "houd vast aan mijn sunna" (eerder genoemd).'],
  ['abu-hurayra', 'text', [45], 'روى حديث «يكون في آخر الزمان دجالون كذابون».', 'Overleverde de hadith over bedriegers aan het einde der tijden.'],
  ['imran-ibn-husayn', 'text', [45], 'روى حديث «من سمع بالدجال فلينأ عنه».', 'Overleverde de hadith "wie hoort van de Dajjāl, laat hem uit zijn buurt blijven".'],
  ['muslim', 'takhrij', [35, 41, 42, 45], 'أخرج عدة أحاديث في هذه الوحدة.', 'Nam meerdere hadith uit deze eenheid op.'],
  ['al-bukhari', 'takhrij', [35, 36], 'أخرج مع مسلم عدة أحاديث في هذه الوحدة.', 'Nam samen met Muslim meerdere hadith uit deze eenheid op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [35, 39, 42], 'أخرج عدة أحاديث في هذه الوحدة.', 'Nam meerdere hadith uit deze eenheid op in zijn Musnad.'],
  ['at-tirmidhi', 'takhrij', [35], 'أخرج حديث ثوبان وصححه.', 'Nam de hadith van Thawbān op en noemde hem authentiek.'],
  ['an-nasai', 'takhrij', [39], 'أخرج حديث «إياكم والغلو في الدين».', 'Nam de hadith "pas op voor overdrijving" op.'],
  ['abu-dawud', 'takhrij', [45], 'أخرج حديث عمران في الدجال.', 'Nam de hadith van ʿImrān over de Dajjāl op.'],
  ['al-albani', 'takhrij', [39, 45], 'صحح حديث النهي عن الغلو وحديث عمران.', 'Noemde de hadith over overdrijving en die van ʿImrān authentiek.'],
  ['al-arnaut', 'takhrij', [42], 'حسّن حديث ابن مسعود.', 'Noemde de hadith van Ibn Masʿūd ḥasan.']
]

const ar = {
  scope: 'unit',
  unit: 2,
  title: 'الانحراف عن العقيدة الصحيحة',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'تسعة أسباب للانحراف عن العقيدة الصحيحة، وستة وسائل للوقاية منه.',
  source,
  visual: {
    type: 'flow',
    title: 'الوحدة الثانية في خريطة واحدة',
    intro: 'أسباب الانحراف، ثم وسائل الوقاية منه، كما في الكتاب.',
    nodes: [
      { label: 'أسباب الانحراف', sub: 'الدروس ٧–٩', children: [{ label: 'الجهل', page: 35 }, { label: 'دعاة السوء', page: 35 }, { label: 'الهوى', page: 38 }, { label: 'الغلو في الصالحين', page: 38 }, { label: 'التقليد الأعمى', page: 39 }, { label: 'سبل الضلال', page: 40 }, { label: 'الغفلة', page: 40 }, { label: 'الكبر', page: 41 }, { label: 'اتباع الشيطان', page: 42 }] },
      { label: 'وسائل الوقاية', sub: 'الدرسان ١٠–١١', children: [{ label: 'اتباع الصراط المستقيم', page: 44 }, { label: 'الحذر من دعاة السوء', page: 44 }, { label: 'طلب العلم عند الثقات', page: 45 }, { label: 'الامتناع عن الغلو', page: 46 }, { label: 'اتخاذ الشيطان عدوا', page: 46 }, { label: 'ترك الهوى والظن والتقليد', page: 47 }] }
    ]
  },
  points: [
    { text: 'للانحراف عن العقيدة الصحيحة تسعة أسباب ذكرها الكتاب، أولها الجهل بها.', page: 35 },
    { text: 'دعاة السوء وأئمة الضلال يصدون الناس عن الصراط المستقيم في قديم الزمان وحديثه.', page: 36 },
    { text: 'الغلو في الصالحين والتقليد الأعمى واتباع الهوى من أخطر الأسباب.', page: 38 },
    { text: 'الكبر رأس الشر، وهو سبب امتناع إبليس والأمم الكافرة عن الحق.', page: 41 },
    { text: 'الوقاية: اتباع الصراط المستقيم، والحذر من دعاة السوء، وطلب العلم، وترك الغلو، ومعاداة الشيطان، والاعتماد على الدليل.', page: 44 }
  ],
  terms: [
    { term: 'الجهل بالعقيدة الصحيحة', translit: 'al-jahl', meaning: 'الإعراض عن تعلمها وتعليمها، أو قلة الاهتمام بها، حتى ينشأ جيل لا يعرفها.', explanation: '', notes: [], page: 35 },
    { term: 'دعاة السوء وأئمة الضلال', translit: 'duʿāt as-sūʾ', meaning: 'من يصدون الناس عن صراط الله المستقيم وعن دينه القويم.', explanation: '', notes: ['[القصص: ٤١]'], page: 35 },
    { term: 'السوائب', translit: 'as-sawāʾib', meaning: 'تسييب السوائب: ترك الناقة تذهب كما تشاء، فلا تركب ولا تصد عن ماء أو مرعى، نذرا يفعله تقربا لآلهتهم.', explanation: '', notes: ['للاطلاع فقط'], page: 36 },
    { term: 'اتباع الهوى', translit: 'ittibāʿ al-hawā', meaning: 'اتباع ما تحبه النفس وتشتهيه؛ والمقصود هنا ما كان ضارا بها مخرجا لها عن دائرة الحق.', explanation: '', notes: ['[الجاثية: ٢٣؛ القصص: ٥٠]'], page: 38 },
    { term: 'الغلو في الصالحين', translit: 'al-ghuluww fī aṣ-ṣāliḥīn', meaning: 'الزيادة في مدحهم ورفعهم فوق مكانتهم بأن يجعل لهم شيء من العبادة.', explanation: 'كالتقرب إلى أضرحتهم بالذبائح والنذور، والدعاء والاستغاثة وطلب المدد.', notes: ['قوم نوح [نوح: ٢٣]'], page: 38 },
    { term: 'التقليد الأعمى', translit: 'at-taqlīd al-aʿmā', meaning: 'متابعة الآباء والعلماء والسادة والكبراء، والطاعة العمياء لهم من غير دليل ولا برهان.', explanation: '', notes: ['[الزخرف: ٢٢؛ الأحزاب: ٦٧؛ التوبة: ٣١]'], page: 39 },
    { term: 'الغفلة عن تدبر الآيات', translit: 'al-ghafla', meaning: 'الغفلة عن تدبر آيات الله الشرعية والكونية.', explanation: '', notes: ['[النحل: ١٠٨؛ الأعراف: ١٧٩؛ يوسف: ١٠٥]'], page: 40 },
    { term: 'الكبر', translit: 'al-kibr', meaning: 'ما يدعو صاحبه إلى رد الحق وعدم قبوله ممن جاء به بسبب احتقاره.', explanation: '', notes: [], page: 41 },
    { term: 'بطر الحق', translit: 'baṭar al-ḥaqq', meaning: 'التكبر على الحق فلا يقبله.', explanation: '', notes: [], page: 41 },
    { term: 'غمط الناس', translit: 'ghamṭ an-nās', meaning: 'احتقارهم والاستهانة بهم.', explanation: '', notes: [], page: 41 },
    { term: 'فلينأ عنه', translit: 'falyanʾa ʿanhu', meaning: 'فليبتعد عنه ولا يقترب منه.', explanation: '', notes: [], page: 45 },
    { term: 'البينات والزبر', translit: 'al-bayyināt wa-z-zubur', meaning: 'الدلائل والحجج.', explanation: '', notes: ['[النحل: ٤٣–٤٤]'], page: 45 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'أسباب الانحراف التسعة',
      intro: 'كل سبب بأبرز أدلته في الكتاب.',
      nodes: [
        { label: 'الجهل بالعقيدة الصحيحة', sub: 'قول عمر: «إنما تنقض عرى الإسلام عروة عروة...»', page: 35 },
        { label: 'اتباع دعاة السوء وأئمة الضلال', sub: '[القصص: ٤١]، وأحاديث حذيفة وثوبان وعبد الله بن عمرو', page: 35 },
        { label: 'اتباع الهوى', sub: '[الجاثية: ٢٣؛ القصص: ٥٠]', page: 38 },
        { label: 'الغلو في الصالحين', sub: '[نوح: ٢٣؛ النساء: ١٧١]', page: 38 },
        { label: 'التقليد الأعمى', sub: '[الزخرف: ٢٢؛ الأحزاب: ٦٧؛ التوبة: ٣١]', page: 39 },
        { label: 'اتباع سبل الضلال', sub: '[الأنعام: ١٥٣]', page: 40 },
        { label: 'الغفلة عن تدبر آيات الله', sub: '[النحل: ١٠٨؛ الأعراف: ١٧٩؛ يوسف: ١٠٥]', page: 40 },
        { label: 'الكبر', sub: '«الكبر بطر الحق وغمط الناس»؛ [البقرة: ٣٤]', page: 41 },
        { label: 'اتباع الشيطان', sub: '[الحجر: ٣٩؛ فاطر: ٦؛ الأعراف: ١٦–١٧؛ إبراهيم: ٢٢]', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'السبب ووسيلة الوقاية منه',
      intro: 'كل وسيلة وقاية في الكتاب تقابل سببًا من أسباب الانحراف.',
      columns: ['سبب الانحراف', 'وسيلة الوقاية'],
      rows: [
        { label: '١', cells: ['اتباع سبل الضلال', 'اتباع الصراط المستقيم على منهاج النبوة'] },
        { label: '٢', cells: ['اتباع دعاة السوء', 'الحذر من دعاة السوء والبعد عنهم'] },
        { label: '٣', cells: ['الجهل', 'طلب العلم على يد الثقات الراسخين'] },
        { label: '٤', cells: ['الغلو في الصالحين', 'الامتناع عن الغلو في الدين'] },
        { label: '٥', cells: ['اتباع الشيطان', 'اتخاذ الشيطان عدوا'] },
        { label: '٦', cells: ['الهوى والتقليد الأعمى', 'ترك الهوى والظن والتقليد، والاعتماد على الدليل'] }
      ],
      note: 'هذا الترتيب جمعٌ للتوضيح؛ الكتاب يذكر الأسباب ثم الوسائل كلًّا على حدة.',
      page: 44
    },
    {
      type: 'cards',
      title: 'دعاة سوء في التاريخ',
      intro: 'مثالان ذكرهما الكتاب للاطلاع.',
      nodes: [
        { label: 'السامري', sub: 'صنع لبني إسرائيل عجلا من ذهب له خوار، وأضلهم عن عبادة الله [طه: ٨٥].', page: 36 },
        { label: 'عمرو بن عامر الخزاعي', sub: 'أول من غير دين إسماعيل ونصب الأوثان وسيب السوائب.', page: 36 }
      ]
    }
  ],
  sections: [
    { title: 'الجهل', text: 'ينشأ جيل لا يعرف العقيدة ولا ما يضادها، فيعتقد الحق باطلًا والباطل حقًا.', more: 'قال عمر بن الخطاب: «إنما تنقض عرى الإسلام عروة عروة، إذا نشأ في الإسلام من لا يعرف الجاهلية».', page: 35 },
    { title: 'دعاة السوء', text: 'دعاة يصدون الناس عن الصراط المستقيم، في القديم كالسامري وعمرو بن عامر الخزاعي، وفي العصر الحديث.', more: 'من أمثلة العصر الحديث في الكتاب (للاطلاع فقط): رد الأحاديث الصحيحة بالهوى، كأحاديث أشراط الساعة، والطعن في الصحابة، والغلو في تعظيم العقل.', page: 35 },
    { title: 'الهوى والغلو والتقليد', text: 'اتباع ما تشتهيه النفس، والزيادة في مدح الصالحين حتى يجعل لهم شيء من العبادة، ومتابعة الكبراء بلا دليل.', more: 'وجعل بعضهم طاعة شيخه طاعة مطلقة، فهو معه «كالميت بين يدي مغسله».', page: 38 },
    { title: 'سبل الضلال والغفلة', text: 'ترك الصراط المستقيم إلى السبل [الأنعام: ١٥٣]، والغفلة عن تدبر آيات الله الشرعية والكونية.', more: '', page: 40 },
    { title: 'الكبر واتباع الشيطان', text: 'الكبر رد الحق واحتقار الناس، وهو أصل امتناع إبليس [البقرة: ٣٤]؛ والشيطان يقعد للناس على الصراط المستقيم.', more: 'حديث ابن مسعود: خط النبي ﷺ خطًّا مستقيمًا وخطوطًا عن يمينه وشماله، وقال: على كل سبيل منها شيطان يدعو إليه.', page: 41 },
    { title: 'وسائل الوقاية', text: 'اتباع الصراط المستقيم، والحذر من دعاة السوء، وطلب العلم عند الثقات، والامتناع عن الغلو، واتخاذ الشيطان عدوا، وترك الهوى والظن والتقليد.', more: 'ومن الاستعاذة بالله: حديث «يأتي الشيطان أحدكم فيقول: من خلق كذا؟... فليستعذ بالله ولينته».', page: 44 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أسباب الانحراف', items: ['الجهل', 'دعاة السوء', 'الهوى', 'الغلو في الصالحين', 'التقليد الأعمى', 'سبل الضلال', 'الغفلة', 'الكبر', 'اتباع الشيطان'], page: 35, origin: 'boek' },
    { kind: 'opsomming', title: 'وسائل الوقاية', items: ['اتباع الصراط المستقيم', 'الحذر من دعاة السوء', 'طلب العلم عند الثقات', 'الامتناع عن الغلو', 'اتخاذ الشيطان عدوا', 'ترك الهوى والظن والتقليد'], page: 44, origin: 'boek' },
    { kind: 'definitie', title: 'الكبر', items: ['«بطر الحق وغمط الناس».', 'بطر الحق: التكبر عليه فلا يقبله؛ غمط الناس: احتقارهم.'], page: 41, origin: 'boek' },
    { kind: 'definitie', title: 'الغلو في الصالحين', items: ['الزيادة في مدحهم ورفعهم فوق مكانتهم بأن يجعل لهم شيء من العبادة.'], page: 38, origin: 'boek' },
    { kind: 'definitie', title: 'التقليد الأعمى', items: ['متابعة الآباء والعلماء والسادة والكبراء بلا دليل ولا برهان.', 'معنى [التوبة: ٣١]: اتبعوهم في تحليل ما حرم الله وتحريم ما أحل.'], page: 39, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'أسباب الانحراف تسعة: الجهل، دعاة السوء، الهوى، الغلو، التقليد، سبل الضلال، الغفلة، الكبر، اتباع الشيطان.',
    'الكبر: بطر الحق وغمط الناس.',
    'الغلو في الصالحين: رفعهم فوق مكانتهم بجعل شيء من العبادة لهم.',
    'التقليد الأعمى: المتابعة بلا دليل.',
    'وسائل الوقاية ستة، تبدأ باتباع الصراط المستقيم.',
    'طلب العلم: «من يرد الله به خيرا يفقهه في الدين».'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أول أسباب الانحراف عن العقيدة الصحيحة في الكتاب؟', options: ['الكبر', 'الجهل بالعقيدة الصحيحة', 'التقليد الأعمى', 'اتباع الشيطان'], answer: 1, explain: 'بسبب الإعراض عن تعلمها وتعليمها.', page: 35 },
    { type: 'mc', q: 'ما معنى «بطر الحق»؟', options: ['احتقار الناس', 'التكبر على الحق فلا يقبله', 'كتمان الحق', 'الجهل بالحق'], answer: 1, explain: 'وغمط الناس: احتقارهم.', page: 41 },
    { type: 'tf', q: 'الغلو في الصالحين: رفعهم فوق مكانتهم بجعل شيء من العبادة لهم.', options: ['صواب', 'خطأ'], answer: 0, explain: 'كما حصل من قوم نوح [نوح: ٢٣].', page: 38 },
    { type: 'mc', q: 'ما معنى آية التوبة ٣١ في التقليد الأعمى؟', options: ['أنهم عبدوهم بالسجود', 'أنهم اتبعوهم في تحليل الحرام وتحريم الحلال', 'أنهم سافروا إليهم', 'أنهم أحبوهم'], answer: 1, explain: 'بلا حجة ولا برهان.', page: 39 },
    { type: 'mc', q: 'من روى حديث «دعاة على أبواب جهنم»؟', options: ['ثوبان', 'حذيفة بن اليمان', 'أبو هريرة', 'عائشة'], answer: 1, explain: 'أخرجه مسلم.', page: 35 },
    { type: 'mc', q: 'ما معنى «فلينأ عنه» في حديث الدجال؟', options: ['فليقاتله', 'فليبتعد عنه ولا يقترب منه', 'فليسأل عنه', 'فليصبر'], answer: 1, explain: 'كما في الكتاب.', page: 45 },
    { type: 'tf', q: 'من وسائل الوقاية طلب العلم على يد الثقات الراسخين.', options: ['صواب', 'خطأ'], answer: 0, explain: 'الوسيلة الثالثة في الكتاب.', page: 45 },
    { type: 'mc', q: 'ما الذي يفعله المسلم إذا وسوس له الشيطان: من خلق ربك؟', options: ['يناقشه', 'يستعيذ بالله وينتهي', 'يسأل الناس', 'يسكت فقط'], answer: 1, explain: 'متفق عليه.', page: 47 }
  ]),
  note: 'نشاط الكتاب في صفحة ٤٨. المقطع في صفحتي ٣٦–٣٧ للاطلاع فقط.'
}

const nl = {
  scope: 'unit',
  unit: 2,
  title: 'Afwijking van de juiste geloofsleer',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Negen oorzaken van afwijking van de juiste geloofsleer, en zes middelen om je daartegen te beschermen.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (1), Zad-reeks' },
  visual: {
    type: 'flow',
    title: 'Eenheid 2 in één kaart',
    intro: 'De oorzaken van afwijking, en daarna de middelen ter bescherming, zoals in het boek.',
    nodes: [
      { label: 'Oorzaken van afwijking', sub: 'les 7–9', children: [{ label: 'onwetendheid', page: 35 }, { label: 'slechte predikers', page: 35 }, { label: 'begeerte', page: 38 }, { label: 'overdrijving bij vromen', page: 38 }, { label: 'blinde navolging', page: 39 }, { label: 'wegen van dwaling', page: 40 }, { label: 'achteloosheid', page: 40 }, { label: 'hoogmoed', page: 41 }, { label: 'de duivel volgen', page: 42 }] },
      { label: 'Middelen ter bescherming', sub: 'les 10–11', children: [{ label: 'het rechte pad volgen', page: 44 }, { label: 'wegblijven van slechte predikers', page: 44 }, { label: 'kennis bij betrouwbare geleerden', page: 45 }, { label: 'geen overdrijving', page: 46 }, { label: 'de duivel als vijand nemen', page: 46 }, { label: 'op bewijs steunen', page: 47 }] }
    ]
  },
  points: [
    { text: 'Het boek noemt negen oorzaken van afwijking; de eerste is onwetendheid over de juiste geloofsleer.', page: 35 },
    { text: 'Slechte predikers en dwalende leiders houden mensen af van het rechte pad, vroeger en nu.', page: 36 },
    { text: 'Overdrijving bij vromen, blinde navolging en het volgen van begeerte behoren tot de gevaarlijkste oorzaken.', page: 38 },
    { text: 'Hoogmoed is de wortel van het kwaad: daardoor weigerden Iblīs en ongelovige volken de waarheid.', page: 41 },
    { text: 'Bescherming: het rechte pad volgen, wegblijven van slechte predikers, kennis zoeken, overdrijving vermijden, de duivel als vijand nemen en op bewijs steunen.', page: 44 }
  ],
  terms: [
    { term: 'الجهل بالعقيدة الصحيحة', translit: 'al-jahl', meaning: 'Onwetendheid: zich afwenden van het leren en onderwijzen van de geloofsleer, tot er een generatie opgroeit die haar niet kent.', explanation: '', notes: [], page: 35 },
    { term: 'دعاة السوء وأئمة الضلال', translit: 'duʿāt as-sūʾ', meaning: 'Slechte predikers en dwalende leiders, die mensen afhouden van het rechte pad.', explanation: '', notes: ['al-Qaṣaṣ 28:41'], page: 35 },
    { term: 'السوائب', translit: 'as-sawāʾib', meaning: 'Kamelen die als gelofte aan afgoden werden vrijgelaten: niet bereden en nergens van geweerd.', explanation: '', notes: ['In het boek alleen ter kennisname'], page: 36 },
    { term: 'اتباع الهوى', translit: 'ittibāʿ al-hawā', meaning: 'Volgen wat de ziel wil en begeert; hier bedoeld: wat schadelijk is en buiten de waarheid brengt.', explanation: '', notes: ['al-Jāthiya 45:23; al-Qaṣaṣ 28:50'], page: 38 },
    { term: 'الغلو في الصالحين', translit: 'al-ghuluww fī aṣ-ṣāliḥīn', meaning: 'Overdrijving bij vromen: hen zo prijzen en verheffen dat hun een deel van de aanbidding wordt gegeven.', explanation: 'Zoals offers en geloften bij hun graven, en hen aanroepen en om hulp vragen.', notes: ['Het volk van Nūḥ (Nūḥ 71:23)'], page: 38 },
    { term: 'التقليد الأعمى', translit: 'at-taqlīd al-aʿmā', meaning: 'Blinde navolging: vaders, geleerden en leiders volgen en gehoorzamen zonder bewijs.', explanation: '', notes: ['az-Zukhruf 43:22; al-Aḥzāb 33:67; at-Tawba 9:31'], page: 39 },
    { term: 'الغفلة عن تدبر الآيات', translit: 'al-ghafla', meaning: 'Achteloosheid: niet nadenken over de tekenen van Allah in de openbaring en in de schepping.', explanation: '', notes: ['an-Naḥl 16:108; al-Aʿrāf 7:179; Yūsuf 12:105'], page: 40 },
    { term: 'الكبر', translit: 'al-kibr', meaning: 'Hoogmoed: wat iemand ertoe brengt de waarheid af te wijzen uit minachting voor wie haar brengt.', explanation: '', notes: [], page: 41 },
    { term: 'بطر الحق', translit: 'baṭar al-ḥaqq', meaning: 'Uit hoogmoed de waarheid niet aanvaarden.', explanation: '', notes: [], page: 41 },
    { term: 'غمط الناس', translit: 'ghamṭ an-nās', meaning: 'Mensen minachten en kleineren.', explanation: '', notes: [], page: 41 },
    { term: 'فلينأ عنه', translit: 'falyanʾa ʿanhu', meaning: 'Laat hem zich ervan verwijderen en er niet bij in de buurt komen.', explanation: '', notes: [], page: 45 },
    { term: 'البينات والزبر', translit: 'al-bayyināt wa-z-zubur', meaning: 'De bewijzen en argumenten.', explanation: '', notes: ['an-Naḥl 16:43–44'], page: 45 }
  ],
  diagrams: [
    {
      type: 'steps',
      title: 'De negen oorzaken van afwijking',
      intro: 'Elke oorzaak met de belangrijkste bewijzen uit het boek.',
      nodes: [
        { label: 'Onwetendheid over de juiste geloofsleer', sub: 'uitspraak van ʿUmar over de banden van de islam', page: 35 },
        { label: 'Slechte predikers en dwalende leiders volgen', sub: 'al-Qaṣaṣ 28:41; hadith van Ḥudhayfa, Thawbān en ʿAbd Allāh ibn ʿAmr', page: 35 },
        { label: 'Begeerte volgen', sub: 'al-Jāthiya 45:23; al-Qaṣaṣ 28:50', page: 38 },
        { label: 'Overdrijving bij vromen', sub: 'Nūḥ 71:23; an-Nisāʾ 4:171', page: 38 },
        { label: 'Blinde navolging', sub: 'az-Zukhruf 43:22; al-Aḥzāb 33:67; at-Tawba 9:31', page: 39 },
        { label: 'Wegen van dwaling volgen', sub: 'al-Anʿām 6:153', page: 40 },
        { label: 'Achteloosheid over de tekenen van Allah', sub: 'an-Naḥl 16:108; al-Aʿrāf 7:179; Yūsuf 12:105', page: 40 },
        { label: 'Hoogmoed', sub: '"hoogmoed is de waarheid afwijzen en mensen minachten"; al-Baqara 2:34', page: 41 },
        { label: 'De duivel volgen', sub: 'al-Ḥijr 15:39; Fāṭir 35:6; al-Aʿrāf 7:16–17; Ibrāhīm 14:22', page: 42 }
      ]
    },
    {
      type: 'compare',
      title: 'Oorzaak en bescherming',
      intro: 'Elk middel ter bescherming in het boek past bij een oorzaak van afwijking.',
      columns: ['Oorzaak van afwijking', 'Middel ter bescherming'],
      rows: [
        { label: '1', cells: ['wegen van dwaling volgen', 'het rechte pad volgen volgens de weg van de profetie'] },
        { label: '2', cells: ['slechte predikers volgen', 'op je hoede zijn en wegblijven van slechte predikers'] },
        { label: '3', cells: ['onwetendheid', 'kennis zoeken bij betrouwbare, gegronde geleerden'] },
        { label: '4', cells: ['overdrijving bij vromen', 'overdrijving in de godsdienst vermijden'] },
        { label: '5', cells: ['de duivel volgen', 'de duivel als vijand nemen'] },
        { label: '6', cells: ['begeerte en blinde navolging', 'geen begeerte, vermoeden of blinde navolging; op bewijs steunen'] }
      ],
      note: 'Deze koppeling is ter verduidelijking; het boek noemt eerst de oorzaken en daarna de middelen.',
      page: 44
    },
    {
      type: 'cards',
      title: 'Slechte predikers in de geschiedenis',
      intro: 'Twee voorbeelden uit het boek, ter kennisname.',
      nodes: [
        { label: 'as-Sāmirī', sub: 'Maakte voor de Banū Isrāʾīl een gouden kalf dat geluid maakte, en bracht hen af van de aanbidding van Allah (Ṭā Hā 20:85).', page: 36 },
        { label: 'ʿAmr ibn ʿĀmir al-Khuzāʿī', sub: 'Volgens het boek de eerste die de godsdienst van Ismāʿīl veranderde, afgodsbeelden oprichtte en sawāʾib invoerde.', page: 36 }
      ]
    }
  ],
  sections: [
    { title: 'Onwetendheid', text: 'Er groeit een generatie op die de geloofsleer niet kent en ook niet wat haar tegenspreekt, en zo waarheid voor valsheid houdt.', more: 'ʿUmar ibn al-Khaṭṭāb: de banden van de islam worden één voor één losgemaakt als er in de islam mensen opgroeien die de jāhiliyya niet kennen.', page: 35 },
    { title: 'Slechte predikers', text: 'Predikers die mensen afhouden van het rechte pad, vroeger (zoals as-Sāmirī en ʿAmr ibn ʿĀmir) en nu.', more: 'Voorbeelden uit deze tijd volgens het boek (ter kennisname): authentieke hadith afwijzen op grond van begeerte, zoals die over de tekenen van het Uur; kritiek op de metgezellen; overdreven verheerlijking van het verstand.', page: 35 },
    { title: 'Begeerte, overdrijving en blinde navolging', text: 'Volgen wat de ziel begeert, vromen zo verheffen dat zij een deel van de aanbidding krijgen, en leiders volgen zonder bewijs.', more: 'Het boek beschrijft hoe sommigen hun sjeik volledig gehoorzamen, "als een dode in de handen van wie hem wast".', page: 38 },
    { title: 'Wegen van dwaling en achteloosheid', text: 'Het rechte pad verlaten voor zijwegen (al-Anʿām 6:153), en niet nadenken over de tekenen van Allah in openbaring en schepping.', more: '', page: 40 },
    { title: 'Hoogmoed en de duivel', text: 'Hoogmoed is de waarheid afwijzen en mensen minachten; daardoor weigerde Iblīs (al-Baqara 2:34). De duivel zit de mensen op het rechte pad op te wachten.', more: 'Hadith van Ibn Masʿūd: de Profeet ﷺ trok een rechte lijn en lijnen rechts en links ervan, en zei dat op elk van die wegen een duivel zit die ertoe oproept.', page: 41 },
    { title: 'Middelen ter bescherming', text: 'Het rechte pad volgen, wegblijven van slechte predikers, kennis zoeken bij betrouwbare geleerden, overdrijving vermijden, de duivel als vijand nemen, en begeerte, vermoeden en blinde navolging laten.', more: 'Bij influisteringen van de duivel ("wie heeft jouw Heer geschapen?"): toevlucht zoeken bij Allah en ermee ophouden.', page: 44 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Oorzaken van afwijking', items: ['onwetendheid', 'slechte predikers', 'begeerte', 'overdrijving bij vromen', 'blinde navolging', 'wegen van dwaling', 'achteloosheid', 'hoogmoed', 'de duivel volgen'], page: 35, origin: 'boek' },
    { kind: 'opsomming', title: 'Middelen ter bescherming', items: ['het rechte pad volgen', 'wegblijven van slechte predikers', 'kennis bij betrouwbare geleerden', 'overdrijving vermijden', 'de duivel als vijand nemen', 'op bewijs steunen'], page: 44, origin: 'boek' },
    { kind: 'definitie', title: 'Hoogmoed (kibr)', items: ['"De waarheid afwijzen en mensen minachten."', 'Baṭar al-ḥaqq: de waarheid niet aanvaarden; ghamṭ an-nās: mensen minachten.'], page: 41, origin: 'boek' },
    { kind: 'definitie', title: 'Overdrijving bij vromen', items: ['Hen zo prijzen en verheffen dat zij een deel van de aanbidding krijgen.'], page: 38, origin: 'boek' },
    { kind: 'definitie', title: 'Blinde navolging', items: ['Vaders, geleerden en leiders volgen zonder bewijs.', 'At-Tawba 9:31: zij volgden hen in het toestaan van het verbodene en het verbieden van het toegestane.'], page: 39, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Negen oorzaken: onwetendheid, slechte predikers, begeerte, overdrijving, blinde navolging, wegen van dwaling, achteloosheid, hoogmoed, de duivel volgen.',
    'Hoogmoed: de waarheid afwijzen en mensen minachten.',
    'Overdrijving bij vromen: hen een deel van de aanbidding geven.',
    'Blinde navolging: volgen zonder bewijs.',
    'Zes middelen ter bescherming, te beginnen met het rechte pad volgen.',
    'Kennis zoeken: "wie Allah goed wil doen, geeft Hij begrip van de godsdienst".'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Wat is volgens het boek de eerste oorzaak van afwijking?', options: ['hoogmoed', 'onwetendheid over de juiste geloofsleer', 'blinde navolging', 'de duivel volgen'], answer: 1, explain: 'Door het leren en onderwijzen ervan te verwaarlozen.', page: 35 },
    { type: 'mc', q: 'Wat betekent baṭar al-ḥaqq?', options: ['mensen minachten', 'uit hoogmoed de waarheid niet aanvaarden', 'de waarheid verzwijgen', 'de waarheid niet kennen'], answer: 1, explain: 'Ghamṭ an-nās is mensen minachten.', page: 41 },
    { type: 'tf', q: 'Overdrijving bij vromen betekent hen zo verheffen dat zij een deel van de aanbidding krijgen.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Zoals bij het volk van Nūḥ (Nūḥ 71:23).', page: 38 },
    { type: 'mc', q: 'Wat betekent at-Tawba 9:31 volgens het boek?', options: ['zij knielden voor hen', 'zij volgden hen in het toestaan van het verbodene en het verbieden van het toegestane', 'zij reisden naar hen', 'zij hielden van hen'], answer: 1, explain: 'Zonder argument of bewijs.', page: 39 },
    { type: 'mc', q: 'Wie overleverde de hadith over "predikers bij de poorten van de Hel"?', options: ['Thawbān', 'Ḥudhayfa ibn al-Yamān', 'Abū Hurayra', 'ʿĀʾisha'], answer: 1, explain: 'Bij Muslim.', page: 35 },
    { type: 'mc', q: 'Wat betekent "falyanʾa ʿanhu" in de hadith over de Dajjāl?', options: ['laat hem tegen hem strijden', 'laat hem zich ervan verwijderen', 'laat hem naar hem vragen', 'laat hem geduld hebben'], answer: 1, explain: 'Zo legt het boek het uit.', page: 45 },
    { type: 'tf', q: 'Kennis zoeken bij betrouwbare geleerden is een middel ter bescherming.', options: ['Juist', 'Onjuist'], answer: 0, explain: 'Het derde middel in het boek.', page: 45 },
    { type: 'mc', q: 'Wat doet een moslim als de duivel influistert "wie heeft jouw Heer geschapen?"', options: ['met hem in discussie gaan', 'toevlucht zoeken bij Allah en ermee ophouden', 'het aan mensen vragen', 'alleen zwijgen'], answer: 1, explain: 'Muttafaq ʿalayh.', page: 47 }
  ]),
  note: 'Oefening van het boek op p. 48. Het deel op p. 36–37 staat in het boek als "alleen ter kennisname". De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-aqeedah', chapter: '7', unit: 2, ar, nl }
