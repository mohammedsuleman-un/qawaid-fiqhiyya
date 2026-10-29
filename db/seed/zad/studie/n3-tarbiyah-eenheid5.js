// Hoofdstukkaart bij التربية الإسلامية (٣), eenheid 5: adab van de smeekbede en de tijden van
// verhoring (lessen 22–24, boek p. 80–86). Opgesteld uit de leesnotities van het boek; hadith en takhrij
// zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tarbiyah',
  chapter: '22',
  unit: 5,
  source: {
    label: ['كتاب التربية الإسلامية (٣): الآداب الشرعية، سلسلة زاد العلمية', 'Islamitische opvoeding (3): de islamitische omgangsvormen, Zad-reeks'],
    pages: '80–86',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['آداب الدعاء', 'Adab van de smeekbede'],
  subtitle: ['ثلاثة دروس مجموعة في صفحة واحدة', 'Drie lessen samen op één pagina'],
  summary: [
    'الدعاء هو العبادة، ودعاء المؤمن لا يرد: إما أن تعجل له دعوته، أو تدخر له، أو يصرف عنه من السوء مثلها. ومن آدابه: البدء بالحمد والصلاة على النبي ﷺ، واليقين بالإجابة، والدعاء للوالدين والمؤمنين، ورفع اليدين، والتكرار ثلاثا، والتضرع، والبدء بالنفس، وأكل الحلال، والجوامع، واستقبال القبلة، وترك الإثم والقطيعة والاستعجال، والسؤال بالاسم الأعظم، والإلحاح. وله أوقات يرجى فيها القبول، كثلث الليل الآخر وبين الأذان والإقامة والسجود وساعة الجمعة.',
    'De smeekbede is aanbidding, en de smeekbede van een gelovige wordt niet afgewezen: zij wordt snel verhoord, voor hem bewaard of er wordt evenveel kwaad van hem afgewend. Adab ervan: beginnen met lof en ṣalāt op de Profeet ﷺ, zekerheid van verhoring, bidden voor ouders en gelovigen, de handen heffen, driemaal herhalen, nederigheid, bij jezelf beginnen, halal eten, alomvattende smeekbeden, je naar de qibla richten, niet bidden om zonde of verbreken van banden en geen haast, vragen met Allahs grootste naam, en aandringen. Er zijn tijden waarin verhoring verwacht wordt, zoals het laatste derde van de nacht, tussen adhān en iqāma, in de sujūd en het uur op vrijdag.'
  ],
  map: {
    title: ['آداب الدعاء في خريطة واحدة', 'De smeekbede in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الدعاء', 'De smeekbede'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['فضل الدعاء', 'De verdienste'], sub: ['الدرس ٢٢', 'les 22'], page: 80, children: [['الدعاء هو العبادة', 'smeekbede is aanbidding'], ['إحدى ثلاث', 'een van drie uitkomsten']] },
      { label: ['آداب الدعاء', 'De adab'], sub: ['الدرسان ٢٢–٢٣', 'les 22–23'], page: 80, children: [['قبل الدعاء', 'vooraf'], ['أثناءه', 'tijdens'], ['ما يجتنب', 'wat te vermijden']] },
      { label: ['أوقات الإجابة', 'Tijden van verhoring'], sub: ['الدرس ٢٤', 'les 24'], page: 84, children: [['في الليل والصلاة', 'in de nacht en het gebed'], ['في أحوال خاصة', 'in bijzondere situaties'], ['دعوات لا ترد', 'smeekbeden die niet worden afgewezen']] }
    ]
  },
  points: [
    [80, 'قال ابن الجوزي: دعاء المؤمن لا يرد، غير أنه قد يكون الأولى له تأخير الإجابة أو التعويض بما هو أولى.', 'Ibn al-Jawzī zei: de smeekbede van de gelovige wordt niet afgewezen, maar soms is uitstel beter voor hem, of krijgt hij iets beters in de plaats.'],
    [81, 'يستثنى من رفع اليدين الدعاء في خطبة الجمعة إلا في الاستسقاء.', 'Tijdens de vrijdagpreek heft men de handen niet bij de smeekbede, behalve bij het regengebed.'],
    [81, 'السنة الدعاء ثلاثا، ولا بأس بالزيادة أحيانا أو الاقتصار على مرة.', 'Sunna is driemaal; soms meer of maar één keer is geen bezwaar.'],
    [82, 'يبدأ الداعي بنفسه إذا دعا لغيره، ولا بأس بالبدء بغيره كما دعا النبي ﷺ لأنس ولابن عباس.', 'Wie voor een ander bidt, begint bij zichzelf; beginnen bij de ander is geen bezwaar, zoals de Profeet ﷺ voor Anas en Ibn ʿAbbās bad.'],
    [83, 'قال بعض السلف: لأنا أشد خشية أن أحرم الدعاء من أن أحرم الإجابة.', 'Een van de salaf zei: ik ben banger om het bidden te verliezen dan om de verhoring te verliezen.'],
    [84, 'دبر الصلاة: إن كان النص ذكرا فهو بعد السلام، وإن كان دعاء فهو آخر الصلاة قبل السلام.', 'Na het gebed: gaat de tekst over dhikr, dan na de taslīm; gaat het om een smeekbede, dan aan het einde van het gebed vóór de taslīm.'],
    [86, 'دعاء الولد لوالديه بعد موتهما خير ما يتقرب به لهما، وأنفع من قراءة القرآن أو الصدقة عنهما.', 'De smeekbede van een kind voor zijn overleden ouders is het beste wat het voor hen kan doen, nuttiger dan Koran lezen of ṣadaqa namens hen.']
  ],
  terms: [
    ['التضرع', 'at-taḍarruʿ', 81, 'إظهار الفقر والضعف والذل عند الدعاء.', 'Armoede, zwakte en nederigheid tonen bij de smeekbede.'],
    ['الجوامع من الدعاء', 'al-jawāmiʿ min ad-duʿāʾ', 82, 'الأدعية الجامعة لخيري الدنيا والآخرة بألفاظ قليلة.', 'Smeekbeden die het goede van deze wereld en het hiernamaals in weinig woorden samenvatten.'],
    ['فيستحسر', 'fa-yastaḥsir', 83, 'فيتعب ويتراجع ويترك الدعاء.', 'Moe worden, opgeven en stoppen met bidden.'],
    ['ألظوا', 'alizzū', 83, 'الزموا وداوموا.', 'Houd eraan vast en volhard.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['من آداب الدعاء', 'Adab van de smeekbede'],
      intro: ['كما عدها الكتاب.', 'Zoals het boek ze opsomt.'],
      nodes: [
        [80, 'البدء بالحمد والصلاة على النبي ﷺ', 'Beginnen met lof en ṣalāt op de Profeet ﷺ', 'عجل هذا', '"deze heeft zich gehaast"'],
        [80, 'اليقين بالإجابة', 'Zekerheid van verhoring', '', ''],
        [81, 'الدعاء للوالدين والمؤمنين', 'Bidden voor ouders en gelovigen', '', ''],
        [81, 'رفع اليدين', 'De handen heffen', '', ''],
        [81, 'التكرار ثلاثا', 'Driemaal herhalen', '', ''],
        [81, 'التضرع والرغبة والرهبة', 'Nederigheid, verlangen en vrees', '', ''],
        [82, 'البدء بالنفس', 'Bij jezelf beginnen', '', ''],
        [82, 'أكل الحلال', 'Halal eten', '', ''],
        [82, 'تحري الجوامع', 'Alomvattende smeekbeden', '', ''],
        [82, 'استقبال القبلة', 'Je naar de qibla richten', '', ''],
        [83, 'ترك الإثم والقطيعة والاستعجال', 'Geen zonde, geen verbreken, geen haast', '', ''],
        [83, 'السؤال بالاسم الأعظم والإلحاح', 'Vragen met de grootste naam en aandringen', '', '']
      ]
    },
    {
      type: 'cards',
      title: ['أوقات وأحوال يرجى فيها القبول', 'Tijden en situaties van verhoring'],
      intro: ['كما ذكرها الكتاب.', 'Zoals het boek ze noemt.'],
      nodes: [
        [84, 'ثلث الليل الآخر', 'Het laatste derde van de nacht', '', ''],
        [84, 'بين الأذان والإقامة', 'Tussen adhān en iqāma', '', ''],
        [84, 'دبر الصلوات المكتوبات', 'Aan het einde van de verplichte gebeden', '', ''],
        [84, 'عند النداء وعند البأس', 'Bij de oproep en in de strijd', '', ''],
        [84, 'السجود', 'In de sujūd', '', ''],
        [85, 'عند صياح الديكة', 'Als de haan kraait', 'فإنها رأت ملكا', '"want hij zag een engel"'],
        [85, 'تحت المطر', 'Tijdens de regen', '', ''],
        [85, 'ساعة الجمعة', 'Het uur op vrijdag', '', ''],
        [85, 'ليلة القدر', 'Laylat al-Qadr', '', ''],
        [85, 'دعوة الوالد والصائم والمسافر', 'De smeekbede van de vader, de vastende en de reiziger', '', ''],
        [86, 'دعاء الولد الصالح لوالديه', 'Een vroom kind voor zijn ouders', '', '']
      ]
    }
  ],
  sections: [
    [80, 'عجل هذا', 'Deze heeft zich gehaast', 'سمع النبي ﷺ رجلا يدعو في صلاته لم يحمد الله ولم يصل على النبي ﷺ، فقال: عجل هذا، ثم قال: إذا صلى أحدكم فليبدأ بتحميد ربه والثناء عليه، ثم يصلي على النبي ﷺ، ثم يدعو بعد بما شاء.', 'De Profeet ﷺ hoorde een man in zijn gebed smeken zonder Allah te prijzen of ṣalāt op de Profeet te doen. Hij zei: deze heeft zich gehaast. Daarna: als een van jullie bidt, laat hij beginnen met lof op zijn Heer, dan ṣalāt op de Profeet ﷺ, en dan vragen wat hij wil.'],
    [82, 'فأنى يستجاب لذلك', 'Hoe zou hij verhoord worden?', 'ذكر الرجل يطيل السفر أشعث أغبر يمد يديه إلى السماء: يا رب يا رب، ومطعمه حرام ومشربه حرام وملبسه حرام وغذي بالحرام، فأنى يستجاب لذلك؟', 'Hij noemde een man op een lange reis, met verward en bestoven haar, die zijn handen naar de hemel strekt: o Heer, o Heer, terwijl zijn eten, drinken en kleding haram zijn en hij met haram gevoed is. Hoe zou hij verhoord worden?'],
    [83, 'الاسم الأعظم', 'De grootste naam', 'سمع النبي ﷺ رجلا يقول: اللهم إني أسألك بأني أشهد أنك أنت الله الذي لا إله إلا أنت، الأحد الصمد الذي لم يلد ولم يولد ولم يكن له كفوا أحد، فقال: لقد سأل الله باسمه الأعظم الذي إذا سئل به أعطى وإذا دعي به أجاب.', 'De Profeet ﷺ hoorde een man zeggen: Allah, ik vraag U, omdat ik getuig dat U Allah bent, er is geen god dan U, de Ene, de Onafhankelijke, die niet verwekt en niet verwekt is, en niemand is aan Hem gelijk. Hij zei: hij heeft Allah gevraagd met Zijn grootste naam; wie daarmee vraagt, krijgt, en wie daarmee smeekt, wordt verhoord.'],
    [84, 'النزول الإلهي', 'De goddelijke neerdaling', 'ينزل ربنا كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر؛ وهو نزول يليق بجلاله وعظمته، لا يلزم منه معنى فاسد.', 'Onze Heer daalt elke nacht neer naar de laagste hemel als het laatste derde van de nacht overblijft; een neerdaling die past bij Zijn majesteit en grootheid, zonder verkeerde betekenis.']
  ],
  keycards: [
    ['opsomming', 80, 'ثمرة الدعاء', 'De uitkomst van de smeekbede', ['أن تعجل له دعوته', 'أو يدخرها له في الآخرة', 'أو يصرف عنه من السوء مثلها'], ['zijn smeekbede wordt snel verhoord', 'of voor hem bewaard in het hiernamaals', 'of er wordt evenveel kwaad van hem afgewend']],
    ['uitzondering', 83, 'متى لا يستجاب للعبد', 'Wanneer de dienaar niet verhoord wordt', ['إذا دعا بإثم', 'أو بقطيعة رحم', 'أو استعجل فقال: قد دعوت فلم يستجب لي'], ['als hij om een zonde vraagt', 'of om het verbreken van familiebanden', 'of haast heeft en zegt: ik heb gebeden maar word niet verhoord']]
  ],
  hadith: [
    { text: 'الدعاء هو العبادة', takhrij: 'رواه الترمذي وأبو داود وصححه الألباني', takhrijNl: 'at-Tirmidhī en Abū Dāwūd; al-Albānī noemde hem authentiek', nl: 'De smeekbede is de aanbidding', pages: [80] },
    { text: 'إذا صلى أحدكم فليبدأ بتحميد ربه جل وعز والثناء عليه، ثم يصلي على النبي ﷺ، ثم يدعو بعد بما شاء', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'فضالة بن عبيد', narratorNl: 'Faḍāla ibn ʿUbayd', nl: 'Als een van jullie bidt, laat hij beginnen met lof en eer voor zijn Heer, dan ṣalāt op de Profeet ﷺ, en dan vragen wat hij wil', pages: [80] },
    { text: 'ما من مسلم يدعو الله بدعوة ليس فيها إثم ولا قطيعة رحم إلا أعطاه الله بها إحدى ثلاث …', takhrij: 'رواه أحمد والترمذي وحسنه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; al-Albānī noemde hem ḥasan', nl: 'Geen moslim die Allah iets vraagt zonder zonde en zonder verbreken van familiebanden, of Allah geeft hem een van drie dingen …', pages: [80] },
    { text: 'ادعوا الله وأنتم موقنون بالإجابة، واعلموا أن الله لا يستجيب دعاء من قلب غافل لاه', takhrij: 'رواه الترمذي وحسنه الألباني', takhrijNl: 'at-Tirmidhī; al-Albānī noemde hem ḥasan', nl: 'Smeek Allah terwijl jullie zeker zijn van verhoring, en weet dat Allah de smeekbede van een achteloos, afgeleid hart niet verhoort', pages: [80] },
    { text: 'إن الله حيي كريم، يستحيي إذا رفع الرجل إليه يديه أن يردهما صفرا خائبتين', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem authentiek', nl: 'Allah is verlegen en edelmoedig; als iemand zijn handen naar Hem heft, schaamt Hij Zich ze leeg terug te sturen', pages: [81] },
    { text: 'كان إذا دعا دعا ثلاثا، وإذا سأل سأل ثلاثا', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن مسعود', narratorNl: 'Ibn Masʿūd', nl: 'Als hij smeekte, smeekte hij driemaal, en als hij vroeg, vroeg hij driemaal', pages: [81] },
    { text: 'ما من مسلم يدعو لأخيه بظهر الغيب إلا قال الملك: ولك بمثل ذلك', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Geen moslim die voor zijn afwezige broeder bidt, of de engel zegt: en jij krijgt hetzelfde', pages: [82] },
    { text: 'كان رسول الله ﷺ يستحب الجوامع من الدعاء، ويدع ما سوى ذلك', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Boodschapper van Allah ﷺ hield van alomvattende smeekbeden en liet de rest', pages: [82] },
    { text: 'يستجاب للعبد ما لم يدع بإثم أو قطيعة رحم ما لم يستعجل … يقول: قد دعوت وقد دعوت فلم أر يستجيب لي، فيستحسر عند ذلك ويدع الدعاء', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De dienaar wordt verhoord zolang hij niet om zonde of verbreken van banden vraagt en geen haast heeft … dat hij zegt: ik heb gebeden en gebeden maar zie geen verhoring, en dan opgeeft en stopt met bidden', pages: [83] },
    { text: 'ألظوا بيا ذا الجلال والإكرام', takhrij: 'رواه أحمد والترمذي وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; al-Albānī noemde hem authentiek', nl: 'Houd vast aan "o Bezitter van majesteit en eer"', pages: [83] },
    { text: 'ينزل ربنا تبارك وتعالى كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر، يقول: من يدعوني فأستجيب له؟ من يسألني فأعطيه؟ من يستغفرني فأغفر له', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Onze Heer daalt elke nacht neer naar de laagste hemel als het laatste derde van de nacht overblijft en zegt: wie smeekt Mij, dat Ik hem verhoor? Wie vraagt Mij, dat Ik hem geef? Wie vraagt Mij om vergeving, dat Ik hem vergeef?', pages: [84] },
    { text: 'لا يرد الدعاء بين الأذان والإقامة', takhrij: 'رواه أبو داود والترمذي وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem authentiek', nl: 'De smeekbede tussen adhān en iqāma wordt niet afgewezen', pages: [84] },
    { text: 'أقرب ما يكون العبد من ربه وهو ساجد، فأكثروا الدعاء', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'De dienaar is het dichtst bij zijn Heer als hij in sujūd is; smeek dan veel', pages: [84] },
    { text: 'إذا سمعتم صياح الديكة فاسألوا الله من فضله، فإنها رأت ملكا', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Als jullie hanen horen kraaien, vraag Allah dan om Zijn gunst, want zij hebben een engel gezien', pages: [85] },
    { text: 'ثلاث دعوات لا ترد: دعوة الوالد لولده، ودعوة الصائم، ودعوة المسافر', takhrij: 'رواه البيهقي وصححه الألباني', takhrijNl: 'al-Bayhaqī; al-Albānī noemde hem authentiek', nl: 'Drie smeekbeden worden niet afgewezen: die van de vader voor zijn kind, die van de vastende en die van de reiziger', pages: [85] },
    { text: 'إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Als de mens sterft, houden zijn daden op, behalve drie: een doorlopende ṣadaqa, nuttige kennis, of een vroom kind dat voor hem bidt', pages: [86] }
  ],
  persons: [
    ['fadala-ibn-ubayd', 'text', [80], 'روى قوله ﷺ: عجل هذا.', 'Overleverde zijn woorden ﷺ: deze heeft zich gehaast.'],
    ['ibn-al-jawzi', 'text', [80], 'قال: دعاء المؤمن لا يرد.', 'Zei: de smeekbede van de gelovige wordt niet afgewezen.'],
    ['ibn-masud', 'text', [81], 'روى أنه ﷺ كان يدعو ثلاثا.', 'Overleverde dat hij ﷺ driemaal smeekte.'],
    ['ubayy-ibn-kab', 'text', [82], 'روى أنه ﷺ كان يبدأ بنفسه إذا دعا لغيره.', 'Overleverde dat hij ﷺ bij zichzelf begon als hij voor een ander bad.'],
    ['anas-ibn-malik', 'text', [82], 'دعا له النبي ﷺ بكثرة المال والولد.', 'De Profeet ﷺ smeekte voor hem om veel bezit en kinderen.'],
    ['ibn-abbas', 'text', [82], 'دعا له النبي ﷺ: اللهم فقهه في الدين.', 'De Profeet ﷺ smeekte voor hem: Allah, geef hem begrip van de religie.'],
    ['aisha', 'text', [82, 85], 'روت حبه ﷺ للجوامع من الدعاء ودعاء ليلة القدر.', 'Overleverde zijn liefde ﷺ voor alomvattende smeekbeden en de smeekbede van Laylat al-Qadr.'],
    ['ibn-hajar-al-asqalani', 'text', [83], 'قال: من آداب الدعاء ملازمة الطلب وعدم اليأس.', 'Zei: tot de adab hoort blijven vragen zonder te wanhopen.'],
    ['ibn-al-qayyim', 'text', [83], 'قال: من أنفع الأدوية الإلحاح في الدعاء.', 'Zei: een van de nuttigste medicijnen is aandringen in de smeekbede.'],
    ['abu-hurayra', 'text', [84], 'روى حديث النزول.', 'Overleverde de hadith over de neerdaling.']
  ],
  review: [
    ['الدعاء هو العبادة، ودعاء المؤمن لا يضيع.', 'De smeekbede is aanbidding, en die van de gelovige gaat niet verloren.'],
    ['يبدأ الدعاء بالحمد والصلاة على النبي ﷺ مع اليقين.', 'Begin met lof en ṣalāt op de Profeet ﷺ, met zekerheid.'],
    ['يرفع يديه ويكرر ثلاثا ويتضرع ويأكل الحلال.', 'Hef je handen, herhaal driemaal, wees nederig en eet halal.'],
    ['لا يدعو بإثم ولا قطيعة، ولا يستعجل الإجابة.', 'Vraag niet om zonde of verbreken van banden, en heb geen haast.'],
    ['يتحرى أوقات الإجابة كثلث الليل الآخر والسجود وساعة الجمعة.', 'Zoek de tijden van verhoring, zoals het laatste derde van de nacht, de sujūd en het uur op vrijdag.']
  ],
  quiz: [
    { type: 'mc', page: 80, q: ['بم يبدأ الداعي دعاءه؟', 'Waarmee begint wie smeekt?'], options: [['بحمد الله والثناء عليه ثم الصلاة على النبي ﷺ', 'بالسؤال مباشرة', 'بذكر حاجته', 'بالاستغفار فقط'], ['met lof op Allah, dan ṣalāt op de Profeet ﷺ', 'direct met vragen', 'met zijn behoefte', 'alleen met vergeving vragen']], answer: 0, explain: ['حديث فضالة بن عبيد.', 'De hadith van Faḍāla ibn ʿUbayd.'] },
    { type: 'tf', page: 80, q: ['الدعاء الذي لم تظهر إجابته ضائع.', 'Een smeekbede waarvan je de verhoring niet ziet, is verloren.'], answer: 1, explain: ['إما أن تعجل أو تدخر أو يصرف عنه من السوء مثلها.', 'Zij wordt snel verhoord, bewaard of er wordt kwaad afgewend.'] },
    { type: 'mc', page: 83, q: ['ما الاستعجال المانع من الإجابة؟', 'Welke haast verhindert de verhoring?'], options: [['أن يقول: دعوت فلم يستجب لي فيترك الدعاء', 'أن يدعو بسرعة', 'أن يدعو مرة واحدة', 'أن يدعو قبل الصلاة'], ['zeggen: ik bad maar werd niet verhoord, en stoppen', 'snel bidden', 'één keer bidden', 'voor het gebed bidden']], answer: 0, explain: ['فيستحسر عند ذلك ويدع الدعاء.', 'Dan geeft hij op en stopt met bidden.'] },
    { type: 'mc', page: 84, q: ['متى أقرب ما يكون العبد من ربه؟', 'Wanneer is de dienaar het dichtst bij zijn Heer?'], options: [['وهو ساجد', 'وهو قائم', 'بعد السلام', 'عند الأذان'], ['in de sujūd', 'staande', 'na de taslīm', 'bij de adhān']], answer: 0, explain: ['فأكثروا الدعاء.', '"Smeek dan veel."'] },
    { type: 'mc', page: 85, q: ['أي هذه الدعوات لا ترد؟', 'Welke van deze smeekbeden wordt niet afgewezen?'], options: [['دعوة المسافر', 'دعوة الغافل', 'دعوة بقطيعة رحم', 'دعوة المستعجل'], ['die van de reiziger', 'die van de achteloze', 'die om banden te verbreken', 'die van wie haast heeft']], answer: 0, explain: ['ودعوة الوالد لولده ودعوة الصائم.', 'En die van de vader voor zijn kind en van de vastende.'] },
    { type: 'tf', page: 86, q: ['دعاء الولد لوالديه بعد موتهما من أنفع ما يقدمه لهما.', 'De smeekbede van een kind voor zijn overleden ouders is een van de nuttigste dingen die het voor hen kan doen.'], answer: 0, explain: ['أو ولد صالح يدعو له.', '"… of een vroom kind dat voor hem bidt."'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٨٦.', 'Oefeningen van het boek op p. 86. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
