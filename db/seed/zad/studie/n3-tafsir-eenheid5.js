// Hoofdstukkaart bij التفسير (٣), eenheid 5: سورة الغاشية (lessen 12–14, boek p. 47–56).
// Opgesteld uit de leesnotities van het boek. Deze eenheid noemt geen hadith met bron en geen personen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '12',
  unit: 5,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '47–56',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الغاشية', 'Soera al-Ghāshiya'],
  subtitle: ['ثلاثة دروس مجموعة في صفحة واحدة', 'Drie lessen samen op één pagina'],
  summary: [
    'سورة مكية تذكر الغاشية، ثم تصف وجوه أهل النار وطعامهم وشرابهم، ثم وجوه أهل الجنة ونعيمها، ثم تدعو إلى النظر في الإبل والسماء والجبال والأرض، وتختم بأن النبي ﷺ مذكر وأن إلى الله إياب الخلق وحسابهم.',
    'Een Mekkaanse soera die de Overweldigende noemt, dan de gezichten van de mensen van het Vuur met hun voedsel en drank beschrijft, daarna de gezichten van de mensen van het Paradijs en de gunsten daar. Vervolgens roept zij op te kijken naar de kamelen, de hemel, de bergen en de aarde, en eindigt met: de Profeet ﷺ is een vermaner, en bij Allah ligt de terugkeer en de afrekening van de schepping.'
  ],
  map: {
    title: ['سورة الغاشية في خريطة واحدة', 'Soera al-Ghāshiya in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الغاشية', 'Soera al-Ghāshiya'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['وجوه خاشعة', 'Nederige gezichten'], sub: ['الآيات ١–٧', 'vers 1–7'], page: 47, children: [['عاملة ناصبة', 'werkend en uitgeput'], ['عين آنية', 'een kokende bron'], ['ضريع', 'ḍarīʿ']] },
      { label: ['وجوه ناعمة', 'Stralende gezichten'], sub: ['الآيات ٨–١٦', 'vers 8–16'], page: 50, children: [['لسعيها راضية', 'tevreden over hun inspanning'], ['جنة عالية', 'een hoge tuin'], ['سرر وأكواب ونمارق وزرابي', 'bedden, bekers, kussens en tapijten']] },
      { label: ['آيات في الخلق', 'Tekenen in de schepping'], sub: ['الآيات ١٧–٢٠', 'vers 17–20'], page: 53, children: [['الإبل', 'de kamelen'], ['السماء', 'de hemel'], ['الجبال', 'de bergen'], ['الأرض', 'de aarde']] },
      { label: ['التذكير والحساب', 'Vermaning en afrekening'], sub: ['الآيات ٢١–٢٦', 'vers 21–26'], page: 54, children: [['إنما أنت مذكر', 'je bent alleen vermaner'], ['لست عليهم بمسيطر', 'je bent geen dwingeland'], ['إلينا إيابهم', 'tot Ons is hun terugkeer']] }
    ]
  },
  points: [
    [47, 'الغاشية يوم القيامة، تغشى الناس بأهوالها؛ والاستفهام للتشويق.', 'De Overweldigende is de Opstandingsdag, die de mensen met verschrikkingen overdekt; de vraag wekt nieuwsgierigheid.'],
    [48, 'الراجح أن ﴿عاملة ناصبة﴾ وصف لحال الكفار في الآخرة لا في الدنيا، لتقييده بيومئذ.', 'De voorkeursmening: "werkend en uitgeput" beschrijft de ongelovigen in het hiernamaals en niet in deze wereld, omdat het aan "die dag" gebonden is.'],
    [49, 'أمور الآخرة لا تقاس بأمور الدنيا: في النار عين يشرب منها.', 'Het hiernamaals is niet te meten met deze wereld: in het Vuur is een bron waaruit gedronken wordt.'],
    [50, 'أهل الجنة راضون عن سعيهم في الدنيا، وكلامهم فيها تسبيح وتحميد بلا كلفة.', 'De mensen van het Paradijs zijn tevreden over hun inspanning in deze wereld, en hun spraak daar is lofprijzing, zonder moeite.'],
    [51, 'نعيم الآخرة لا يشبه ما في الدنيا إلا في الاسم.', 'De gunsten van het hiernamaals lijken alleen in naam op die van deze wereld.'],
    [51, 'العمل من أجل الجنة مذهب السلف، خلافا لأهل البدع.', 'Werken voor het Paradijs is de weg van de salaf, anders dan de vernieuwers.'],
    [53, 'خص الإبل بالذكر لأنها كانت ألصق الحيوان بالناس وأنفعه لهم.', 'De kamelen worden genoemd omdat zij toen het meest met de mensen verbonden en het nuttigst waren.'],
    [55, 'الهداية بيد الله، فلا ييأس الداعي إذا عاند المدعو.', 'Leiding is in Allahs hand; de oproeper moet niet wanhopen als iemand koppig blijft.']
  ],
  terms: [
    ['الغاشية', 'al-ghāshiya', 47, 'يوم القيامة يغشى الناس بالأهوال والكربات.', 'De Opstandingsdag, die de mensen overdekt met verschrikkingen en benauwdheid.'],
    ['خاشعة', 'khāshiʿa', 48, 'ذليلة مهانة.', 'Nederig en vernederd.'],
    ['ناصبة', 'nāṣiba', 48, 'متعبة في النار.', 'Uitgeput in het Vuur.'],
    ['آنية', 'āniya', 48, 'بلغت غاية الحرارة.', 'Op het uiterste van hitte.'],
    ['الضريع', 'aḍ-ḍarīʿ', 48, 'نبت يقال له الشبرق، فإذا يبس سمي ضريعا؛ سام ذو شوك.', 'Een plant die ash-shibriq heet; verdord heet hij ḍarīʿ; giftig en met doornen.'],
    ['لاغية', 'lāghiya', 50, 'كلمة لغو أو باطل أو فحش.', 'Een woord van onzin, valsheid of grofheid.'],
    ['نمارق', 'namāriq', 51, 'وسائد من حرير وإستبرق مصفوفة للاتكاء.', 'Kussens van zijde en brokaat, in rijen om op te leunen.'],
    ['زرابي', 'zarābiyy', 51, 'أحسن البسط، مبثوثة في المجالس.', 'De beste tapijten, verspreid in de zitplaatsen.'],
    ['سطحت', 'suṭiḥat', 54, 'بسطت ومدت ليعيش عليها الناس، ولا ينافي كرويتها.', 'Uitgespreid zodat de mensen erop kunnen leven; dat is niet in strijd met haar bolvorm.'],
    ['مسيطر', 'muṣayṭir', 54, 'مسلط جبار.', 'Een dwingeland met macht over hen.'],
    ['إيابهم', 'iyābahum', 54, 'رجوعهم وجمعهم يوم القيامة.', 'Hun terugkeer en verzameling op de Opstandingsdag.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أهل النار وأهل الجنة', 'De mensen van het Vuur en van het Paradijs'],
      intro: ['كما في الآيات ٢–١٦.', 'Zoals in vers 2–16.'],
      columns: [['الوجوه', 'Gezichten'], ['الشراب', 'Drank'], ['الحال', 'Toestand']],
      rows: [
        { label: ['أهل النار', 'Vuur'], cells: [['خاشعة', 'nederig'], ['من عين آنية', 'uit een kokende bron'], ['عاملة ناصبة، طعامها ضريع', 'werkend en uitgeput, voedsel van ḍarīʿ']] },
        { label: ['أهل الجنة', 'Paradijs'], cells: [['ناعمة', 'stralend'], ['من عين جارية', 'uit een stromende bron'], ['راضية في جنة عالية', 'tevreden in een hoge tuin']] }
      ],
      page: 48
    },
    {
      type: 'cards',
      title: ['أدلة كروية الأرض عند الكتاب', 'Waarom de aarde rond is, volgens het boek'],
      intro: ['التسطيح لا ينافي الكروية.', 'Uitgespreid zijn is niet in strijd met rond zijn.'],
      nodes: [
        [55, '﴿يكور الليل على النهار﴾', '"Hij wikkelt de nacht om de dag"', 'التكوير على الأرض يدل على أنها مكورة', 'het wikkelen rond de aarde wijst op een ronde aarde'],
        [55, '﴿وإذا الأرض مدت﴾', '"Wanneer de aarde wordt uitgestrekt"', 'المد يوم القيامة، فهي اليوم غير ممدودة', 'het uitstrekken is op de Opstanding; nu is zij dat niet'],
        [55, 'المشاهدة', 'Waarneming', 'من سافر غربا رجع من الشرق إلى مكانه', 'wie naar het westen reist, komt van het oosten terug']
      ]
    }
  ],
  sections: [
    [50, 'جنة عالية', 'Een hoge tuin', 'في أعلى عليين، منازلها عالية، وأوسطها الفردوس وفوقه عرش الرحمن، غرف من فوقها غرف تجري من تحتها الأنهار.', 'In de hoogste ʿIlliyyūn, met hoge woningen; het midden is al-Firdaws, met daarboven de Troon van de Erbarmer: kamers met kamers erboven en rivieren eronder.'],
    [51, 'لماذا وصف الله الجنة؟', 'Waarom beschrijft Allah het Paradijs?', 'ليشوق إليها ويحث على العمل لها؛ والعمل للجنة مذهب السلف.', 'Om verlangen te wekken en aan te sporen ervoor te werken; werken voor het Paradijs is de weg van de salaf.'],
    [54, 'إذا لم تتأثر بالتذكير', 'Als de vermaning je niet raakt', 'الذكرى تنفع المؤمنين، فإذا ذكرت فلم تجد أثرا فاتهم نفسك، فإن في إيمانك نقصا.', 'De vermaning baat de gelovigen; voel je geen effect als je vermaand wordt, wantrouw dan jezelf: je geloof schiet tekort.'],
    [55, 'وظيفة الداعي', 'De taak van de oproeper', 'وظيفة الرسول ﷺ ومن بعده من الدعاة التذكير، والحساب على الله.', 'De taak van de Boodschapper ﷺ en van elke oproeper na hem is vermanen; de afrekening is bij Allah.']
  ],
  keycards: [
    ['opsomming', 53, 'آيات النظر في الخلق', 'Tekenen om naar te kijken', ['الإبل كيف خلقت', 'السماء كيف رفعت بلا عمد', 'الجبال كيف نصبت', 'الأرض كيف سطحت'], ['de kamelen: hoe zij geschapen zijn', 'de hemel: hoe zij verheven is zonder pilaren', 'de bergen: hoe zij geplaatst zijn', 'de aarde: hoe zij uitgespreid is']],
    ['opsomming', 49, 'من شدة عذاب أهل النار', 'De zware straf van het Vuur', ['النار الحامية', 'الشرب من عين آنية', 'الجوع، وطعامهم ضريع لا يسمن ولا يغني من جوع'], ['gloeiend heet vuur', 'drinken uit een kokende bron', 'honger: hun voedsel is ḍarīʿ, dat niet voedt en de honger niet weert']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['الغاشية يوم القيامة، ووجوه أهل النار فيه خاشعة عاملة ناصبة.', 'De Overweldigende is de Opstandingsdag; de gezichten van de mensen van het Vuur zijn dan nederig, werkend en uitgeput.'],
    ['وجوه أهل الجنة ناعمة راضية في جنة عالية.', 'De gezichten van de mensen van het Paradijs zijn stralend en tevreden in een hoge tuin.'],
    ['أمور الآخرة ونعيمها لا تقاس بالدنيا.', 'Het hiernamaals en zijn gunsten zijn niet te meten met deze wereld.'],
    ['النظر في الإبل والسماء والجبال والأرض يدل على قدرة الله.', 'Kijken naar kamelen, hemel, bergen en aarde toont Allahs macht.'],
    ['النبي ﷺ مذكر، والهداية والحساب بيد الله.', 'De Profeet ﷺ is een vermaner; leiding en afrekening liggen bij Allah.']
  ],
  quiz: [
    { type: 'mc', page: 48, q: ['ما الضريع؟', 'Wat is ḍarīʿ?'], options: [['نبت ذو شوك إذا يبس سمي ضريعا', 'نوع من اللحم', 'ماء حار', 'ثمر حلو'], ['een doornige plant die verdord ḍarīʿ heet', 'een soort vlees', 'heet water', 'een zoete vrucht']], answer: 0, explain: ['يقال له الشبرق، وهو سام ذو شوك.', 'Hij heet ash-shibriq, giftig en met doornen.'] },
    { type: 'tf', page: 48, q: ['رجح الكتاب أن ﴿عاملة ناصبة﴾ وصف للكفار في الدنيا.', 'Het boek kiest ervoor dat "werkend en uitgeput" de ongelovigen in deze wereld beschrijft.'], answer: 1, explain: ['الراجح أنه في الآخرة لتقييده بيومئذ.', 'De voorkeursmening is: in het hiernamaals, omdat het aan "die dag" gebonden is.'] },
    { type: 'mc', page: 49, q: ['ماذا نتعلم من ﴿تسقى من عين آنية﴾؟', 'Wat leren we uit "zij drinken uit een kokende bron"?'], options: [['أمور الآخرة لا تقاس بأمور الدنيا', 'أن النار باردة', 'أن الماء يطفئ النار دائما', 'أن أهل النار لا يعطشون'], ['het hiernamaals is niet te meten met deze wereld', 'het Vuur is koud', 'water dooft altijd vuur', 'de mensen van het Vuur hebben geen dorst']], answer: 0, explain: ['الماء في الدنيا يطفئ النار، وفي النار عين يشرب منها.', 'Hier dooft water vuur, maar in het Vuur is een bron waaruit gedronken wordt.'] },
    { type: 'mc', page: 53, q: ['لماذا خصت الإبل بالذكر؟', 'Waarom worden de kamelen genoemd?'], options: [['لأنها كانت ألصق الحيوان بالناس وأنفعه لهم', 'لأنها أكبر الحيوان', 'لأنها لا تشرب', 'لأنها تطير'], ['omdat zij het meest met de mensen verbonden en het nuttigst waren', 'omdat zij het grootste dier zijn', 'omdat zij niet drinken', 'omdat zij vliegen']], answer: 0, explain: ['كما ذكر الكتاب.', 'Zoals het boek vermeldt.'] },
    { type: 'tf', page: 54, q: ['تسطيح الأرض ينافي كرويتها.', 'Dat de aarde uitgespreid is, is in strijd met haar bolvorm.'], answer: 1, explain: ['لا ينافيه لعظم حجمها.', 'Het is niet in strijd, vanwege haar grootte.'] },
    { type: 'mc', page: 55, q: ['ما وظيفة الداعي كما في ﴿فذكر إنما أنت مذكر﴾؟', 'Wat is de taak van de oproeper volgens "vermaan dan, je bent alleen vermaner"?'], options: [['التذكير والحساب على الله', 'إجبار الناس على الهداية', 'محاسبة الناس', 'ترك الدعوة إذا عاندوا'], ['vermanen; de afrekening is bij Allah', 'mensen tot leiding dwingen', 'mensen ter verantwoording roepen', 'stoppen als zij koppig zijn']], answer: 0, explain: ['﴿لست عليهم بمسيطر﴾.', '"Je bent geen dwingeland over hen."'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٤٩ و٥٢ و٥٦.', 'Oefeningen van het boek op p. 49, 52 en 56. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
