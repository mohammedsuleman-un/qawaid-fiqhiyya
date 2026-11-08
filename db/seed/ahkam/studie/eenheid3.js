// Hoofdstukkaart eenheid 3 van تلخيص أحكام القرآن: تحويل القبلة والأمة الوسط (البقرة 142–144, p. 14–16).
// Opgesteld uit de overgetypte notities (/mnt/project-files/ahkam/pages/p014–p016.html), van het kopje
// over البقرة 142 op p. 14 tot vóór البقرة 154 op p. 16.
import { kaart } from './kaart.js'

export default kaart({
  unit: 3,
  subtitle: [
    'اعتراض السفهاء على تحويل القبلة، ومعنى الأمة الوسط، وتسمية الصلاة إيماناً، واستقبال العين أو الجهة',
    'Het bezwaar van de dwazen tegen de nieuwe qibla, de gematigde gemeenschap, het gebed dat "geloof" heet, en het richten op de Kaʿba zelf of op haar richting'
  ],
  summary: [
    'تتناول الوحدة أربع آيات من سورة البقرة في القبلة: الأولى ﴿سيقول السفهاء من الناس ما ولاهم عن قبلتهم﴾ وفيها أن المراد اليهود الذين عابوا على المسلمين رجوعهم إلى الكعبة عن بيت المقدس، فأعلمهم الله أن الجهات كلها له، وأن المؤمنين ما اتخذوا الكعبة قبلة إلا امتثالاً لأمر ربهم. والثانية ﴿وكذلك جعلناكم أمة وسطاً﴾ والوسط الخيار العدل، وفيها تفضيل هذه الأمة بالعدالة والشهادة على الخلق، واستدل بها القرطبي على حجية الإجماع، وابن القيم على وجوب اتباع الصحابة، وفيها دليل على كمال هذا الدين. والثالثة ﴿وما كان الله ليضيع إيمانكم﴾ نزلت فيمن مات وهو يصلي إلى بيت المقدس، والمراد الصلاة، وهي دليل لأهل السنة على دخول الأعمال في الإيمان. والرابعة ﴿فول وجهك شطر المسجد الحرام﴾ وفيها الخلاف في فرض البعيد عن الكعبة: استقبال العين أو الجهة، والصحيح عند ابن العربي الجهة، وهو مذهب الجمهور، واستدلوا بحديث «ما بين المشرق والمغرب قبلة».',
    'Vier verzen over de qibla. ﴿De dwazen onder de mensen zullen zeggen…﴾: volgens Ibn al-ʿArabī de joden die de wending van Bayt al-Maqdis naar de Kaʿba verweten; alle richtingen zijn van Allah en de gelovigen volgden alleen hun Heer. ﴿Een gemeenschap van het midden﴾: wasaṭ = de besten, de rechtvaardigen; al-Qurṭubī leidt er de geldigheid van de ijmāʿ uit af, Ibn al-Qayyim de plicht de metgezellen te volgen. ﴿Allah zou jullie geloof niet verloren laten gaan﴾: over wie stierf terwijl hij naar Bayt al-Maqdis bad; "geloof" is hier het gebed, wat steunt dat daden tot het geloof behoren. ﴿Wend je gezicht naar al-Masjid al-Ḥarām﴾: moet wie ver weg is zich op de Kaʿba zelf of op haar richting richten? Ibn al-ʿArabī: de richting, zoals de meerderheid, met de hadith «Tussen het oosten en het westen is een qibla».'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 14 إلى 16: البقرة 142–144.', 'Bladzijde 14 tot 16: al-Baqara 142–144.'],
    root: [14, 'تحويل القبلة والأمة الوسط', 'De nieuwe qibla en de gemeenschap van het midden', 'البقرة 142–144', 'al-Baqara 142–144'],
    nodes: [
      [14, 'سيقول السفهاء', 'De dwazen zullen zeggen', 'البقرة 142', 'al-Baqara 142', [['المراد اليهود', 'bedoeld zijn de joden'], ['الجهات كلها لله', 'alle richtingen zijn van Allah'], ['القبلة امتثال لا ترجيح', 'de qibla is gehoorzaamheid, geen eigen voorkeur']]],
      [14, 'أمة وسطاً', 'Een gemeenschap van het midden', 'البقرة 143', 'al-Baqara 143', [['الوسط: الخيار العدل', 'wasaṭ: de besten, rechtvaardig'], ['الشهادة على الناس', 'getuigen over de mensen'], ['حجية الإجماع', 'de ijmāʿ is bewijs'], ['اتباع الصحابة', 'de metgezellen volgen'], ['كمال الدين', 'volmaaktheid van de godsdienst']]],
      [15, 'ليضيع إيمانكم', 'Jullie geloof verloren laten gaan', 'البقرة 143', 'al-Baqara 143', [['من مات قبل التحويل', 'wie stierf vóór de verandering'], ['الإيمان هنا الصلاة', 'geloof is hier het gebed'], ['الأعمال من الإيمان', 'daden horen bij het geloof']]],
      [15, 'شطر المسجد الحرام', 'Naar al-Masjid al-Ḥarām', 'البقرة 144', 'al-Baqara 144', [['العين أو الجهة؟', 'de Kaʿba zelf of de richting?'], ['الجهة عند ابن العربي والجمهور', 'de richting: Ibn al-ʿArabī en de meerderheid'], ['العين عند الشافعية', 'de Kaʿba zelf: de Shāfiʿieten'], ['ما بين المشرق والمغرب قبلة', 'tussen oost en west is een qibla']]]
    ]
  },
  points: [
    [14, 'المراد بالسفهاء في قوله تعالى: ﴿سيقول السفهاء من الناس﴾ اليهود، عابوا على المسلمين رجوعهم إلى الكعبة عن بيت المقدس، فأعلمهم الله أن الجهات كلها له وأن المقصود وجهه وامتثال أمره.', 'Met "de dwazen" in ﴿De dwazen onder de mensen zullen zeggen﴾ zijn volgens Ibn al-ʿArabī de joden bedoeld: zij verweten de moslims dat zij zich van Bayt al-Maqdis naar de Kaʿba keerden. Allah liet weten dat alle richtingen van Hem zijn en dat het om Zijn aangezicht en het opvolgen van Zijn bevel gaat.'],
    [14, 'المؤمنون ما اتخذوا الكعبة قبلة إلا امتثالاً لأمر ربهم، لا ترجيحاً لبعض الجهات من تلقاء أنفسهم.', 'De gelovigen namen de Kaʿba alleen als qibla uit gehoorzaamheid aan het bevel van hun Heer, niet omdat zij uit zichzelf de ene richting boven de andere verkozen.'],
    [14, 'الوسط في اللغة الخيار وهو العدل، ويدل عليه قوله بعده: ﴿لتكونوا شهداء على الناس﴾.', 'Wasaṭ betekent in de taal "de besten" (al-khiyār), en dat is "de rechtvaardige" (al-ʿadl). Wat erop volgt wijst daarop: ﴿opdat jullie getuigen over de mensen zouden zijn﴾.', 'فجعلنا الله أولاً مكاناً وإن كنا آخراً زماناً، كما قال صلى الله عليه وسلم: «نحن الآخرون السابقون».', 'Allah maakte ons de eersten in rang, al zijn wij de laatsten in tijd, zoals de Profeet ﷺ zei: «Wij zijn de laatsten en de voorsten».'],
    [14, 'نحن شهداء على الناس في المحشر، نشهد للأنبياء على أممهم.', 'Wij zijn getuigen over de mensen op de verzamelplaats (al-maḥshar): wij getuigen voor de profeten tegenover hun volken.'],
    [14, 'استدل بالآية القرطبي على صحة الإجماع ووجوب الحكم به، وابن القيم على وجوب اتباع الصحابة، وفيها دليل على كمال هذا الدين.', 'Al-Qurṭubī leidt uit het vers af dat de ijmāʿ geldig is en dat men ernaar moet oordelen; Ibn al-Qayyim dat men de metgezellen moet volgen; en het vers wijst op de volmaaktheid van deze godsdienst.'],
    [15, 'اتفق العلماء على أن قوله: ﴿وما كان الله ليضيع إيمانكم﴾ نزل فيمن مات وهو يصلي إلى بيت المقدس، وروى أشهب عن مالك أن المراد به صلاتكم.', 'Volgens Ibn al-ʿArabī zijn de geleerden het erover eens dat ﴿Allah zou jullie geloof niet verloren laten gaan﴾ werd geopenbaard over wie stierf terwijl hij naar Bayt al-Maqdis bad. Ashhab overleverde van Mālik dat "jullie gebed" bedoeld is.'],
    [15, 'تسمية الصلاة إيماناً دليل لأهل السنة والجماعة على أن أعمال الجوارح تدخل في الإيمان، كما قال السعدي.', 'Dat het gebed "geloof" wordt genoemd, bewijst volgens as-Saʿdī de leer van Ahl as-Sunna wa-l-Jamāʿa dat de daden van de ledematen tot het geloof (īmān) behoren.'],
    [15, 'اختلف العلماء في فرض البعيد عن الكعبة: استقبال العين أو الجهة؟ والصحيح عند ابن العربي الجهة، وهو مذهب الجمهور، والصحيح عند الشافعية وجوب إصابة العين.', 'De geleerden verschillen over de plicht van wie ver van de Kaʿba is: moet hij zich op de Kaʿba zelf richten of op haar richting? Volgens Ibn al-ʿArabī is de richting juist, en dat is de leer van de meerderheid; bij de Shāfiʿieten is de juiste mening dat men de Kaʿba zelf moet treffen.', 'دليل الجمهور حديث أبي هريرة: «ما بين المشرق والمغرب قبلة».', 'Het bewijs van de meerderheid is de hadith van Abū Hurayra: «Tussen het oosten en het westen is een qibla».']
  ],
  terms: [
    ['السفهاء', 'as-sufahāʾ', 14, 'المراد بهم في الآية اليهود، كما نقل ابن العربي عن علمائه بقوله: قال علماؤنا.', 'De dwazen; volgens de geleerden die Ibn al-ʿArabī aanhaalt ("onze geleerden") zijn hier de joden bedoeld.'],
    ['الوسط', 'al-wasaṭ', 14, 'في اللغة: الخيار، وهو العدل.', 'In de taal: de besten (al-khiyār), en dat is de rechtvaardige (al-ʿadl).', 'قال ابن القيم: هذه حقيقة الوسط، فهم خير الأمم وأعدلها.', 'Ibn al-Qayyim: dat is de werkelijke betekenis van wasaṭ; zij zijn de beste en rechtvaardigste gemeenschap.'],
    ['العدالة', 'al-ʿadāla', 14, 'الوصف الذي فضّل الله به هذه الأمة وجعلها به أهلاً للشهادة على الخليقة.', 'Rechtvaardigheid: de eigenschap waarmee Allah deze gemeenschap heeft geëerd en waardoor zij geschikt is om over de hele schepping te getuigen.'],
    ['الشهادة على الناس', 'ash-shahāda ʿalā n-nās', 14, 'شهادة هذه الأمة في المحشر للأنبياء على أممهم.', 'Het getuigen van deze gemeenschap op de verzamelplaats, voor de profeten tegenover hun volken.'],
    ['المحشر', 'al-maḥshar', 14, 'موضع الحشر يوم القيامة، وفيه تكون شهادة هذه الأمة.', 'De plaats van de verzameling op de Dag der Opstanding; daar getuigt deze gemeenschap.'],
    ['الإجماع', 'al-ijmāʿ', 14, 'استدل القرطبي بالآية على صحته ووجوب الحكم به، لأن الأمة إذا كانت عدولاً شهدت على الناس.', 'Consensus. Al-Qurṭubī leidt uit het vers af dat hij geldig is en dat men ernaar moet oordelen, want als de gemeenschap rechtvaardig is, getuigt zij over de mensen.'],
    ['الإيمان', 'al-īmān', 15, 'المراد به في قوله: ﴿ليضيع إيمانكم﴾ الصلاة.', 'Geloof; in ﴿jullie geloof verloren laten gaan﴾ is het gebed bedoeld.', 'سمّيت الصلاة إيماناً لاشتمالها على نية وقول وعمل (القرطبي)، وتنويهاً بها لأنها أعظم أركان الإيمان (ابن عاشور).', 'Het gebed heet geloof omdat het intentie, woord en daad omvat (al-Qurṭubī), en om het gebed te eren als de grootste zuil van het geloof (Ibn ʿĀshūr).'],
    ['المرجئة', 'al-murjiʾa', 15, 'فرقة قالت: إن الصلاة ليست من الإيمان، وذكر ابن العربي قولهم عند هذه الآية.', 'Een stroming die zei dat het gebed niet tot het geloof behoort; Ibn al-ʿArabī noemt hun opvatting bij dit vers.'],
    ['استقبال العين', 'istiqbāl al-ʿayn', 15, 'أن يتوجه المصلي إلى ذات الكعبة.', 'Zich richten op de Kaʿba zelf (haar gebouw).', 'ضعّفه ابن العربي في حق البعيد لأنه تكليف لما لا يصل إليه، وهو الصحيح عند الشافعية.', 'Ibn al-ʿArabī noemt dit zwak voor wie ver weg is, omdat het een opdracht is tot iets wat hij niet kan bereiken; bij de Shāfiʿieten is het de juiste mening.'],
    ['استقبال الجهة', 'istiqbāl al-jiha', 15, 'أن يتوجه البعيد إلى جهة الكعبة، وهو الصحيح عند ابن العربي ومذهب الجمهور.', 'Zich richten op de richting van de Kaʿba; volgens Ibn al-ʿArabī juist en de leer van de meerderheid.'],
    ['المسامتة', 'al-musāmata', 16, 'مقابلة سمت الكعبة، أي ذاتها، بلا انحراف.', 'Precies tegenover de Kaʿba zelf staan, zonder enige afwijking.', 'لا يلزم الإنسان أن يتكلف طلبها ما دام في الجهة (ابن عثيمين).', 'Men hoeft zich niet in te spannen om dit te bereiken zolang men in de richting staat (Ibn ʿUthaymīn).'],
    ['بيت المقدس', 'Bayt al-Maqdis', 14, 'القبلة التي كان المسلمون يصلون إليها قبل التحويل إلى الكعبة.', 'De qibla waarnaar de moslims baden vóór de verandering naar de Kaʿba.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['قصة تحويل القبلة في الآيات', 'De verandering van de qibla in de verzen'],
      intro: ['ترتيب المعاني كما في الصفحات 14–15.', 'De gedachtegang zoals op p. 14–15.'],
      page: 14,
      nodes: [
        { label: ['الصلاة إلى بيت المقدس', 'Bidden naar Bayt al-Maqdis'], sub: ['القبلة الأولى', 'de eerste qibla'], page: 14 },
        { label: ['الأمر بالتوجه إلى الكعبة', 'Het bevel zich naar de Kaʿba te keren'], sub: ['﴿فول وجهك شطر المسجد الحرام﴾', '﴿Wend je gezicht naar al-Masjid al-Ḥarām﴾'], page: 15 },
        { label: ['اعتراض اليهود', 'Het bezwaar van de joden'], sub: ['﴿ما ولاهم عن قبلتهم التي كانوا عليها﴾', '﴿wat heeft hen van hun qibla afgewend?﴾'], page: 14 },
        { label: ['الجواب', 'Het antwoord'], sub: ['﴿قل لله المشرق والمغرب﴾: الجهات كلها لله، والمقصود امتثال أمره', '﴿Zeg: aan Allah behoren het oosten en het westen﴾: alle richtingen zijn van Hem; het gaat om Zijn bevel'], page: 14 },
        { label: ['من مات قبل التحويل', 'Wie stierf vóór de verandering'], sub: ['﴿وما كان الله ليضيع إيمانكم﴾: صلاتهم لا تضيع', '﴿Allah zou jullie geloof niet verloren laten gaan﴾: hun gebed gaat niet verloren'], page: 15 }
      ]
    },
    {
      type: 'compare',
      title: ['فرض البعيد عن الكعبة: العين أو الجهة', 'Wie ver van de Kaʿba is: de Kaʿba zelf of de richting'],
      intro: ['البقرة 144، ص 15–16.', 'Al-Baqara 144, p. 15–16.'],
      page: 15,
      columns: [['استقبال العين', 'De Kaʿba zelf (al-ʿayn)'], ['استقبال الجهة', 'De richting (al-jiha)']],
      rows: [
        { label: ['من قال به', 'Wie dit zegt'], cells: [['بعض العلماء، وهو الصحيح عند الشافعية', 'sommige geleerden; bij de Shāfiʿieten de juiste mening'], ['ابن العربي، وهو مذهب الجمهور', 'Ibn al-ʿArabī; de leer van de meerderheid']] },
        { label: ['حكم ابن العربي', 'Oordeel van Ibn al-ʿArabī'], cells: [['ضعيف، لأنه تكليف لما لا يصل إليه', 'zwak, want het is een opdracht tot iets onbereikbaars'], ['الصحيح', 'de juiste mening']] },
        { label: ['الدليل', 'Het bewijs'], cells: [['لم تذكر المذكرات دليلهم', 'de notities noemen hun bewijs niet'], ['أنه الممكن الذي يرتبط به التكليف، وأنه المأمور به في القرآن: ﴿شطر المسجد الحرام﴾، وحديث: «ما بين المشرق والمغرب قبلة»', 'het is wat mogelijk is en waaraan de opdracht vastzit; de Koran beveelt het: ﴿naar al-Masjid al-Ḥarām﴾; en de hadith: «Tussen het oosten en het westen is een qibla»']] },
        { label: ['الانحراف اليسير', 'Een kleine afwijking'], cells: [['', ''], ['لا يضر ما دام في الجهة (ابن عثيمين)', 'schaadt niet zolang men in de richting staat (Ibn ʿUthaymīn)']] }
      ]
    },
    {
      type: 'tree',
      title: ['ما استنبط من قوله: ﴿وكذلك جعلناكم أمة وسطاً﴾', 'Wat uit ﴿Zo hebben Wij jullie tot een gemeenschap van het midden gemaakt﴾ is afgeleid'],
      page: 14,
      root: [14, 'أمة وسطاً', 'Een gemeenschap van het midden', 'الوسط: الخيار العدل', 'wasaṭ: de besten, rechtvaardig'],
      nodes: [
        [14, 'تفضيل الأمة', 'Eer van de gemeenschap', 'ابن العربي', 'Ibn al-ʿArabī', [['باسم العدالة', 'met de naam rechtvaardigheid'], ['بخطة الشهادة على الخليقة', 'met de taak te getuigen over de schepping'], ['أولاً مكاناً وإن كنا آخراً زماناً', 'eersten in rang, laatsten in tijd']]],
        [14, 'الشهادة في المحشر', 'Getuigen op de verzamelplaats', 'للأنبياء على أممهم', 'voor de profeten tegenover hun volken'],
        [14, 'صحة الإجماع', 'Geldigheid van de ijmāʿ', 'القرطبي', 'al-Qurṭubī', [['ووجوب الحكم به', 'en de plicht ernaar te oordelen']]],
        [14, 'كمال هذا الدين', 'Volmaaktheid van deze godsdienst', 'الأكمل يشهد على من دونه', 'de volmaaktere getuigt over wie minder is'],
        [14, 'وجوب اتباع الصحابة', 'Plicht de metgezellen te volgen', 'ابن القيم', 'Ibn al-Qayyim', [['هم خير الأمم وأعدلها', 'zij zijn de beste en rechtvaardigste gemeenschap']]]
      ]
    },
    {
      type: 'cards',
      title: ['﴿إيمانكم﴾: أقوال العلماء', '﴿jullie geloof﴾: wat de geleerden zeggen'],
      intro: ['ص 15.', 'P. 15.'],
      page: 15,
      nodes: [
        { label: ['مالك (رواية أشهب)', 'Mālik (overlevering van Ashhab)'], sub: ['المراد: صلاتكم', 'bedoeld is: jullie gebed'], page: 15 },
        { label: ['السعدي', 'As-Saʿdī'], sub: ['دليل لأهل السنة أن أعمال الجوارح تدخل في الإيمان', 'bewijs voor Ahl as-Sunna dat de daden van de ledematen tot het geloof behoren'], page: 15 },
        { label: ['القرطبي', 'Al-Qurṭubī'], sub: ['سمى الصلاة إيماناً لاشتمالها على نية وقول وعمل', 'het gebed heet geloof omdat het intentie, woord en daad omvat'], page: 15 },
        { label: ['الطبري', 'Aṭ-Ṭabarī'], sub: ['لا يضيع تصديقكم رسوله بصلاتكم إلى بيت المقدس عن أمره', 'Allah laat jullie bevestiging van Zijn boodschapper, door op Zijn bevel naar Bayt al-Maqdis te bidden, niet verloren gaan'], page: 15 },
        { label: ['ابن عاشور', 'Ibn ʿĀshūr'], sub: ['تنويه بالصلاة لأنها أعظم أركان الإيمان', 'een eerbetoon aan het gebed, de grootste zuil van het geloof'], page: 15 }
      ]
    },
    {
      type: 'cards',
      title: ['فوائد حديث «ما بين المشرق والمغرب قبلة» عند ابن عثيمين', 'Lessen uit de hadith «Tussen het oosten en het westen is een qibla» volgens Ibn ʿUthaymīn'],
      intro: ['من شرحه لبلوغ المرام، ص 16.', 'Uit zijn uitleg van Bulūgh al-Marām, p. 16.'],
      page: 16,
      nodes: [
        { label: ['تيسير الشريعة', 'De sharīʿa maakt het makkelijk'], sub: ['امتدت جهة القبلة عند البعد عن معاينة الكعبة', 'de richting van de qibla wordt breder als men de Kaʿba niet kan zien'], page: 16 },
        { label: ['الانحراف لا يضر', 'Afwijking schaadt niet'], sub: ['لا يضر الانحراف عن مسامتة القبلة ما دام في الجهة', 'afwijken van precies tegenover de Kaʿba schaadt niet zolang men in de richting staat'], page: 16 },
        { label: ['لا تكلف', 'Geen overdreven moeite'], sub: ['لا يلزم الإنسان أن يتكلف طلب المسامتة', 'men hoeft zich niet in te spannen om precies tegenover de Kaʿba te staan'], page: 16 },
        { label: ['لا يهدم مسجد لانحراف يسير', 'Geen moskee afbreken om een kleine afwijking'], sub: ['إذا أوسع الله علينا فعلينا أن نوسع', 'als Allah ons ruimte geeft, moeten wij ruimte geven'], page: 16 }
      ]
    }
  ],
  sections: [
    [14, '﴿سيقول السفهاء من الناس ما ولاهم عن قبلتهم﴾ (البقرة 142)', '﴿De dwazen onder de mensen zullen zeggen: wat heeft hen van hun qibla afgewend?﴾ (al-Baqara 142)',
      'قال ابن العربي: قال علماؤنا: المراد بذلك اليهود، عابوا على المسلمين رجوعهم إلى الكعبة عن بيت المقدس، فأعلمهم الله تعالى أن الجهات كلها له، وأن المقصود وجهه وامتثال أمره، فحيثما أمر بالتوجه إليه تُوجّه إليه.',
      'Ibn al-ʿArabī: "Onze geleerden zeiden: daarmee zijn de joden bedoeld. Zij verweten de moslims dat zij zich van Bayt al-Maqdis naar de Kaʿba keerden. Allah liet hun weten dat alle richtingen van Hem zijn, en dat het gaat om Zijn aangezicht en het opvolgen van Zijn bevel: waarheen Hij beveelt zich te richten, daarheen richt men zich."',
      'وفي المذكرات: المؤمنون ما اتخذوا الكعبة قبلة لهم إلا امتثالاً لأمر ربهم، لا ترجيحاً لبعض الجهات من تلقاء أنفسهم. فالجواب في الآية: ﴿قل لله المشرق والمغرب يهدي من يشاء إلى صراط مستقيم﴾.',
      'De notities voegen toe: de gelovigen namen de Kaʿba alleen als qibla uit gehoorzaamheid aan het bevel van hun Heer, niet omdat zij uit zichzelf een richting verkozen. Het antwoord staat in het vers zelf: ﴿Zeg: aan Allah behoren het oosten en het westen; Hij leidt wie Hij wil naar een recht pad﴾.'],
    [14, '﴿وكذلك جعلناكم أمة وسطاً﴾ (البقرة 143)', '﴿Zo hebben Wij jullie tot een gemeenschap van het midden gemaakt﴾ (al-Baqara 143)',
      'قال ابن العربي: الوسط في اللغة: الخيار، وهو العدل، يدل عليه قوله تعالى بعده: ﴿لتكونوا شهداء على الناس ويكون الرسول عليكم شهيداً﴾. فأنبأنا ربنا بما أنعم به علينا من تفضيله لنا باسم العدالة، وتوليته خطة الشهادة على جميع الخليقة، فجعلنا أولاً مكاناً وإن كنا آخراً زماناً، كما قال النبي صلى الله عليه وسلم: «نحن الآخرون السابقون» (البخاري ومسلم). وفي المذكرات: نحن شهداء على الناس، أي في المحشر للأنبياء على أممهم.',
      'Ibn al-ʿArabī: wasaṭ betekent in de taal "de besten", en dat is "de rechtvaardige". Wat erop volgt wijst daarop: ﴿opdat jullie getuigen over de mensen zouden zijn en de Boodschapper getuige over jullie﴾. Onze Heer heeft ons laten weten welke gunst Hij ons gaf: Hij eerde ons met de naam rechtvaardigheid en vertrouwde ons de taak toe te getuigen over de hele schepping. Zo maakte Hij ons de eersten in rang, al zijn wij de laatsten in tijd, zoals de Profeet ﷺ zei: «Wij zijn de laatsten en de voorsten» (al-Bukhārī en Muslim). De notities voegen toe: wij getuigen op de verzamelplaats voor de profeten tegenover hun volken.',
      'قال القرطبي: وفيه دليل على صحة الإجماع ووجوب الحكم به، لأنهم إذا كانوا عدولاً شهدوا على الناس. وفي المذكرات: وفيه دليل على كمال هذا الدين، لأن الأكمل يشهد على من دونه وليس العكس. واستدل ابن القيم بالآية على وجوب اتباع الصحابة، قال: ووجه الاستدلال بالآية أنه تعالى أخبر أنه جعلهم أمة خياراً عدولاً، هذه حقيقة الوسط، فهم خير الأمم وأعدلها.',
      'Al-Qurṭubī: hierin ligt een bewijs dat de ijmāʿ geldig is en dat men ernaar moet oordelen, want als zij rechtvaardig zijn, getuigen zij over de mensen. De notities voegen toe: het vers wijst ook op de volmaaktheid van deze godsdienst: de volmaaktere getuigt over wie minder is, niet andersom. Ibn al-Qayyim leidt uit het vers de plicht af de metgezellen te volgen: "Het bewijs uit het vers is dat Allah meedeelt dat Hij hen tot een gemeenschap van de besten en rechtvaardigen maakte; dat is de werkelijke betekenis van wasaṭ. Zij zijn dus de beste en rechtvaardigste van de gemeenschappen."'],
    [15, '﴿وما كان الله ليضيع إيمانكم﴾ (البقرة 143)', '﴿Allah zou jullie geloof niet verloren laten gaan﴾ (al-Baqara 143)',
      'قال ابن العربي: اتفق العلماء على أنها نزلت فيمن مات وهو يصلي إلى بيت المقدس، وقد روى أشهب عن مالك أن المراد به صلاتكم. وذكر بهذه الآية قول المرجئة: إن الصلاة ليست من الإيمان، ثم أورد سؤالاً: فإن كانت الصلاة من الإيمان فلم قال مالك: إن تاركها غير كافر؟',
      'Ibn al-ʿArabī: de geleerden zijn het erover eens dat het vers werd geopenbaard over wie stierf terwijl hij naar Bayt al-Maqdis bad. Ashhab overleverde van Mālik dat met "jullie geloof" jullie gebed bedoeld is. Bij dit vers noemt Ibn al-ʿArabī de opvatting van de Murjiʾa dat het gebed niet tot het geloof behoort. Daarna werpt hij een vraag op: als het gebed tot het geloof behoort, waarom zei Mālik dan dat wie het nalaat geen ongelovige (kāfir) is? Zijn antwoord staat niet in de notities.',
      'قال السعدي: هذه الآية دليل لمذهب أهل السنة والجماعة أن الإيمان تدخل فيه أعمال الجوارح. وقال القرطبي: سمى الصلاة إيماناً لاشتمالها على نية وقول وعمل. وقال الطبري: معناه الصلاة: وما كان الله ليضيع تصديق رسوله بصلاتكم التي صليتموها نحو بيت المقدس عن أمره، لأن ذلك كان منكم تصديقاً لرسولي واتباعاً لأمري. وقال ابن عاشور: وفي إطلاق اسم الإيمان على الصلاة تنويه بالصلاة لأنها أعظم أركان الإيمان.',
      'As-Saʿdī: dit vers is een bewijs voor de leer van Ahl as-Sunna wa-l-Jamāʿa dat de daden van de ledematen tot het geloof behoren. Al-Qurṭubī: Hij noemde het gebed geloof omdat het intentie, woord en daad omvat. Aṭ-Ṭabarī: de betekenis is het gebed: Allah zou jullie bevestiging van Zijn boodschapper niet verloren laten gaan, die jullie gaven door op Zijn bevel naar Bayt al-Maqdis te bidden, want dat was van jullie een bevestiging van Mijn boodschapper en het volgen van Mijn bevel. Ibn ʿĀshūr: dat het gebed "geloof" wordt genoemd, is een eerbetoon aan het gebed, want het is de grootste zuil van het geloof.'],
    [15, '﴿فول وجهك شطر المسجد الحرام﴾ (البقرة 144)', '﴿Wend je gezicht naar al-Masjid al-Ḥarām﴾ (al-Baqara 144)',
      'قال ابن العربي: اختلف العلماء: هل فرض الغائب عن الكعبة البعيد عنها استقبال العين أو استقبال الجهة؟ فمنهم من قال: فرضه استقبال العين، وهذا ضعيف لأنه تكليف لما لا يصل إليه. ومنهم من قال: الجهة، وهو الصحيح لأمور: أحدها أنه الممكن الذي يرتبط به التكليف، والثاني أنه المأمور به في القرآن: ﴿فول وجهك شطر المسجد الحرام﴾.',
      'Ibn al-ʿArabī: de geleerden verschillen. Is de plicht van wie niet bij de Kaʿba is en ver ervan af zit, zich op de Kaʿba zelf te richten of op haar richting? Sommigen zeggen: op de Kaʿba zelf. Dat is zwak, want het is een opdracht tot iets wat hij niet kan bereiken. Anderen zeggen: op de richting, en dat is juist, om meerdere redenen. Ten eerste is dat wat mogelijk is, en daaraan hangt de opdracht vast. Ten tweede is dat wat de Koran beveelt: ﴿Wend je gezicht naar al-Masjid al-Ḥarām﴾. (De notities geven alleen deze twee redenen.)',
      'وفي المذكرات: الصحيح عند الشافعية وجوب إصابة العين، ومذهب الجمهور أنه يكفي إصابة الجهة، واستدلوا بحديث أبي هريرة: «ما بين المشرق والمغرب قبلة» (النسائي والترمذي)، وهذا لأهل المدينة ونحوها من البلاد التي بقرب مكة. قال ابن عثيمين في شرح بلوغ المرام: من فوائد الحديث تيسير هذه الشريعة حيث امتدت جهة القبلة عند البعد عن معاينة الكعبة، وأنه لا يضر الانحراف عن مسامتة القبلة ما دام في الجهة، وأنه لا يلزم الإنسان أن يتكلف طلب المسامتة، حتى إن بعض الناس ربما هدم مسجداً قائماً عامراً مع انحراف يسير يعفى عنه، فهذا لا يجوز، إذا أوسع الله علينا فعلينا أن نوسع. والمسامتة: مقابلة سمت الكعبة، أي ذاتها، بلا انحراف.',
      'De notities: bij de Shāfiʿieten is de juiste mening dat men de Kaʿba zelf moet treffen; volgens de meerderheid is het genoeg de richting te treffen. Zij bewijzen dat met de hadith van Abū Hurayra: «Tussen het oosten en het westen is een qibla» (an-Nasāʾī en at-Tirmidhī). Dat geldt voor de mensen van Medina en vergelijkbare streken die dicht bij Mekka liggen. Ibn ʿUthaymīn zegt in zijn uitleg van Bulūgh al-Marām: uit de hadith leren we dat deze sharīʿa het makkelijk maakt, want de richting van de qibla wordt breder als men de Kaʿba niet kan zien; dat afwijken van precies tegenover de Kaʿba (musāmata) niet schaadt zolang men in de richting staat; en dat men zich niet hoeft in te spannen om precies tegenover haar te staan. Sommige mensen hebben zelfs een bestaande, gebruikte moskee afgebroken om een kleine afwijking die vergeven wordt; dat mag niet: als Allah ons ruimte geeft, moeten wij ruimte geven. Musāmata is: precies tegenover de Kaʿba zelf staan, zonder afwijking.']
  ],
  keycards: [
    ['definitie', 14, 'معنى الوسط', 'Betekenis van wasaṭ', ['في اللغة: الخيار', 'وهو العدل', 'يدل عليه: ﴿لتكونوا شهداء على الناس﴾', 'ابن القيم: هذه حقيقة الوسط، فهم خير الأمم وأعدلها'], ['In de taal: de besten (al-khiyār)', 'Dat is: de rechtvaardige (al-ʿadl)', 'Bewijs: ﴿opdat jullie getuigen over de mensen zouden zijn﴾', 'Ibn al-Qayyim: dat is de werkelijke betekenis van wasaṭ; zij zijn de beste en rechtvaardigste gemeenschap']],
    ['opsomming', 14, 'ما استدل به من ﴿أمة وسطاً﴾', 'Wat uit ﴿een gemeenschap van het midden﴾ is afgeleid', ['تفضيل الأمة بالعدالة والشهادة على الخليقة (ابن العربي)', 'صحة الإجماع ووجوب الحكم به (القرطبي)', 'كمال هذا الدين، لأن الأكمل يشهد على من دونه', 'وجوب اتباع الصحابة (ابن القيم)'], ['De gemeenschap is geëerd met rechtvaardigheid en het getuigen over de schepping (Ibn al-ʿArabī)', 'De ijmāʿ is geldig en men moet ernaar oordelen (al-Qurṭubī)', 'Deze godsdienst is volmaakt, want de volmaaktere getuigt over wie minder is', 'Men moet de metgezellen volgen (Ibn al-Qayyim)']],
    ['bewijs', 14, 'لماذا الإجماع حجة من هذه الآية؟', 'Waarom is de ijmāʿ op grond van dit vers bewijs?', ['جعل الله الأمة وسطاً، أي عدولاً', 'والعدول شهداء على الناس', 'ففيه دليل على صحة الإجماع ووجوب الحكم به (القرطبي)'], ['Allah maakte de gemeenschap wasaṭ, dat is rechtvaardig', 'Rechtvaardigen zijn getuigen over de mensen', 'Daarin ligt een bewijs dat de ijmāʿ geldig is en dat men ernaar moet oordelen (al-Qurṭubī)']],
    ['opsomming', 15, 'لماذا سميت الصلاة إيماناً؟', 'Waarom heet het gebed "geloof"?', ['لاشتمالها على نية وقول وعمل (القرطبي)', 'لأنها كانت تصديقاً للرسول واتباعاً لأمر الله (الطبري)', 'تنويهاً بها لأنها أعظم أركان الإيمان (ابن عاشور)'], ['Omdat het intentie, woord en daad omvat (al-Qurṭubī)', 'Omdat het een bevestiging van de Boodschapper en het volgen van Allahs bevel was (aṭ-Ṭabarī)', 'Als eerbetoon, want het is de grootste zuil van het geloof (Ibn ʿĀshūr)']],
    ['bewijs', 15, 'دخول الأعمال في الإيمان', 'Daden horen bij het geloof', ['سمى الله الصلاة إيماناً: ﴿وما كان الله ليضيع إيمانكم﴾', 'فهي دليل لأهل السنة والجماعة أن أعمال الجوارح تدخل في الإيمان (السعدي)', 'وفيها رد على قول المرجئة: إن الصلاة ليست من الإيمان'], ['Allah noemde het gebed geloof: ﴿Allah zou jullie geloof niet verloren laten gaan﴾', 'Dat is een bewijs voor Ahl as-Sunna wa-l-Jamāʿa dat de daden van de ledematen tot het geloof behoren (as-Saʿdī)', 'Het gaat in tegen de opvatting van de Murjiʾa dat het gebed niet tot het geloof behoort']],
    ['bewijs', 15, 'أدلة استقبال الجهة للبعيد', 'Bewijzen dat wie ver weg is de richting volgt', ['أنه الممكن الذي يرتبط به التكليف', 'أنه المأمور به في القرآن: ﴿فول وجهك شطر المسجد الحرام﴾', 'حديث أبي هريرة: «ما بين المشرق والمغرب قبلة»'], ['Dat is wat mogelijk is, en daaraan hangt de opdracht vast', 'Dat beveelt de Koran: ﴿Wend je gezicht naar al-Masjid al-Ḥarām﴾', 'De hadith van Abū Hurayra: «Tussen het oosten en het westen is een qibla»']],
    ['onderscheid', 16, 'الجهة والمسامتة', 'Richting en musāmata', ['الجهة: يكفي البعيد أن يكون في جهة الكعبة', 'المسامتة: مقابلة سمت الكعبة، أي ذاتها، بلا انحراف', 'الانحراف عن المسامتة لا يضر ما دام في الجهة'], ['Richting: voor wie ver weg is, is het genoeg in de richting van de Kaʿba te staan', 'Musāmata: precies tegenover de Kaʿba zelf staan, zonder afwijking', 'Afwijken van de musāmata schaadt niet zolang men in de richting staat']],
    ['definitie', 14, 'بيت المقدس', 'Bayt al-Maqdis', ['المسجد في القدس، وكان قبلة المسلمين قبل التحويل إلى الكعبة'], ['De moskee in Jeruzalem; vóór de verandering naar de Kaʿba was het de qibla van de moslims'], 'toelichting']
  ],
  hadith: [
    { text: 'نحن الآخِرون السابقون', takhrij: ['البخاري ومسلم', 'al-Bukhārī en Muslim'], nl: 'Wij zijn de laatsten en de voorsten.', note: ['استشهد به ابن العربي: جعلنا الله أولاً مكاناً وإن كنا آخراً زماناً.', 'Ibn al-ʿArabī haalt dit aan: Allah maakte ons de eersten in rang, al zijn wij de laatsten in tijd.'], pages: [14] },
    { narrator: ['أبو هريرة', 'Abū Hurayra'], text: 'ما بين المشرق والمغرب قبلة', takhrij: ['أخرجه النسائي والترمذي', 'an-Nasāʾī en at-Tirmidhī'], nl: 'Tussen het oosten en het westen is een qibla.', note: ['دليل الجمهور على أن البعيد يكفيه إصابة الجهة، وهذا لأهل المدينة ونحوها.', 'Bewijs van de meerderheid dat het voor wie ver weg is genoeg is de richting te treffen; het geldt voor de mensen van Medina en vergelijkbare streken.'], pages: [16] }
  ],
  persons: [
    ['malik', 'text', [15], 'روى عنه أشهب أن المراد بالإيمان في الآية الصلاة، وقال: إن تارك الصلاة غير كافر.', 'Ashhab overleverde van hem dat met "geloof" in het vers het gebed bedoeld is; hij zei dat wie het gebed nalaat geen kāfir is.'],
    ['ashhab', 'text', [15], 'روى عن مالك أن المراد بقوله: ﴿إيمانكم﴾ صلاتكم.', 'Overleverde van Mālik dat met ﴿jullie geloof﴾ jullie gebed bedoeld is.'],
    ['at-tabari', 'text', [15], 'فسر الإيمان في الآية بالصلاة التي كانت تصديقاً للرسول واتباعاً لأمر الله.', 'Legde "geloof" in het vers uit als het gebed dat een bevestiging van de Boodschapper en het volgen van Allahs bevel was.'],
    ['al-bukhari', 'takhrij', [14], 'روى حديث: «نحن الآخرون السابقون».', 'Overleverde de hadith «Wij zijn de laatsten en de voorsten».'],
    ['muslim', 'takhrij', [14], 'روى حديث: «نحن الآخرون السابقون».', 'Overleverde de hadith «Wij zijn de laatsten en de voorsten».']
  ],
  subtleties: [
    [14, 'أول مكاناً وآخر زماناً', 'Eerste in rang, laatste in tijd', 'تأخر هذه الأمة في الزمان لا ينقص من فضلها، فقد جعلها الله أولاً مكاناً بالعدالة والشهادة على الخليقة، كما في حديث: «نحن الآخرون السابقون».', 'Dat deze gemeenschap in de tijd de laatste is, doet niets af aan haar voortreffelijkheid: Allah maakte haar de eerste in rang door rechtvaardigheid en het getuigen over de schepping, zoals in de hadith «Wij zijn de laatsten en de voorsten».'],
    [14, 'تفسير الوسط بما بعده', 'Wasaṭ verklaard door wat volgt', 'لم يفسر ابن العربي الوسط باللغة وحدها، بل استدل على أنه العدل بسياق الآية: ﴿لتكونوا شهداء على الناس﴾، لأن الشاهد لا يكون إلا عدلاً.', 'Ibn al-ʿArabī verklaart wasaṭ niet alleen uit de taal; hij bewijst dat het "rechtvaardig" is uit de context: ﴿opdat jullie getuigen over de mensen zouden zijn﴾, want een getuige moet rechtvaardig zijn.'],
    [14, 'الأكمل يشهد على من دونه', 'De volmaaktere getuigt over wie minder is', 'جعل شهادة الأمة على الأمم دليلاً على كمال دينها، لأن الشهادة تكون من الأكمل على من دونه وليس العكس.', 'Dat deze gemeenschap over de andere getuigt, is een bewijs dat haar godsdienst volmaakt is: getuigenis gaat van de volmaaktere naar wie minder is, niet andersom.'],
    [15, 'سؤال ابن العربي عن مالك', 'De vraag van Ibn al-ʿArabī over Mālik', 'بعد أن جعل الآية في الرد على المرجئة أورد إشكالاً: إن كانت الصلاة من الإيمان فلم قال مالك: إن تاركها غير كافر؟ والجواب لم ينقل في المذكرات.', 'Nadat hij het vers tegen de Murjiʾa heeft gebruikt, werpt Ibn al-ʿArabī een probleem op: als het gebed tot het geloof behoort, waarom zei Mālik dan dat wie het nalaat geen kāfir is? Het antwoord staat niet in de notities.'],
    [15, 'التصديق بالعمل', 'Bevestiging door een daad', 'جعل الطبري الصلاة إلى بيت المقدس تصديقاً للرسول، فالتصديق لا يكون بالقلب فقط بل يظهر في العمل بأمره.', 'Aṭ-Ṭabarī noemt het bidden naar Bayt al-Maqdis een bevestiging van de Boodschapper: bevestigen gebeurt niet alleen met het hart, het blijkt uit het uitvoeren van zijn bevel.'],
    [16, 'الحديث في حق من كان في جهة معينة', 'De hadith geldt voor een bepaalde streek', 'حديث «ما بين المشرق والمغرب قبلة» لأهل المدينة ونحوها من البلاد، لا لكل أحد في كل مكان.', 'De hadith «Tussen het oosten en het westen is een qibla» geldt voor de mensen van Medina en vergelijkbare streken, niet voor iedereen overal.']
  ],
  rules: [
    [15, 'لا تكليف بما لا يستطاع', 'Er is geen opdracht tot het onmogelijke', 'ضعف ابن العربي القول باستقبال العين للبعيد لأنه تكليف لما لا يصل إليه، والجهة هي الممكن الذي يرتبط به التكليف.', 'Ibn al-ʿArabī noemt het zich richten op de Kaʿba zelf voor wie ver weg is zwak, omdat het een opdracht is tot iets wat hij niet kan bereiken; de richting is wat mogelijk is, en daaraan hangt de opdracht vast.', 'البعيد عن مكة يكفيه استقبال الجهة.', 'Wie ver van Mekka is, kan volstaan met de richting.'],
    [16, 'إذا أوسع الله علينا فعلينا أن نوسع', 'Als Allah ons ruimte geeft, moeten wij ruimte geven', 'قاعدة ذكرها ابن عثيمين في فوائد الحديث، وهي من تيسير الشريعة.', 'Een regel van Ibn ʿUthaymīn bij de lessen uit de hadith; het hoort bij het gemak van de sharīʿa.', 'لا يجوز هدم مسجد قائم عامر لانحراف يسير يعفى عنه.', 'Men mag een bestaande, gebruikte moskee niet afbreken om een kleine afwijking die vergeven wordt.'],
    [14, 'الإجماع حجة يجب الحكم به', 'De ijmāʿ is bewijs en men moet ernaar oordelen', 'استدل له القرطبي بقوله: ﴿وكذلك جعلناكم أمة وسطاً لتكونوا شهداء على الناس﴾.', 'Al-Qurṭubī bewijst dit met ﴿Zo hebben Wij jullie tot een gemeenschap van het midden gemaakt, opdat jullie getuigen over de mensen zouden zijn﴾.'],
    [14, 'المقصود بالعبادة امتثال الأمر', 'Het doel van aanbidding is het bevel opvolgen', 'الجهات كلها لله، فحيثما أمر بالتوجه إليه توجه إليه، ولم يتخذ المؤمنون الكعبة قبلة إلا امتثالاً.', 'Alle richtingen zijn van Allah; waarheen Hij beveelt zich te richten, daarheen richt men zich. De gelovigen namen de Kaʿba alleen uit gehoorzaamheid als qibla.'],
    [15, 'الأعمال تدخل في مسمى الإيمان', 'Daden vallen onder de naam "geloof"', 'مذهب أهل السنة والجماعة، واستدل له السعدي بتسمية الصلاة إيماناً.', 'De leer van Ahl as-Sunna wa-l-Jamāʿa; as-Saʿdī bewijst het met het feit dat het gebed geloof wordt genoemd.']
  ],
  disputes: [
    {
      page: 15,
      q: ['هل فرض البعيد عن الكعبة استقبال العين أو الجهة؟', 'Moet wie ver van de Kaʿba is zich op de Kaʿba zelf of op haar richting richten?'],
      views: [
        ['استقبال العين: وهو الصحيح عند الشافعية', 'De Kaʿba zelf: bij de Shāfiʿieten de juiste mening'],
        ['استقبال الجهة: وهو مذهب الجمهور، واستدلوا بحديث: «ما بين المشرق والمغرب قبلة»', 'De richting: de leer van de meerderheid, met als bewijs de hadith «Tussen het oosten en het westen is een qibla»']
      ],
      preferred: ['الجهة، وهو الصحيح عند ابن العربي، لأنه الممكن الذي يرتبط به التكليف، ولأنه المأمور به في القرآن، وضعّف القول بالعين لأنه تكليف لما لا يصل إليه.', 'De richting; dat is volgens Ibn al-ʿArabī juist, want het is wat mogelijk is en waaraan de opdracht vastzit, en de Koran beveelt het. Het richten op de Kaʿba zelf noemt hij zwak, want dat is een opdracht tot het onbereikbare.'],
      fruit: ['من صلى منحرفاً عن مسامتة الكعبة انحرافاً يسيراً وهو في الجهة فلا يضره، ولا يجوز هدم مسجد لأجل ذلك.', 'Wie bidt met een kleine afwijking van precies tegenover de Kaʿba maar wel in de richting, wordt niet geschaad; en men mag daarom geen moskee afbreken.']
    },
    {
      page: 15,
      q: ['ما المراد بالإيمان في قوله: ﴿وما كان الله ليضيع إيمانكم﴾؟', 'Wat is "geloof" in ﴿Allah zou jullie geloof niet verloren laten gaan﴾?'],
      views: [
        ['الصلاة: رواية أشهب عن مالك، وقول القرطبي وابن عاشور', 'Het gebed: overlevering van Ashhab van Mālik, en zo ook al-Qurṭubī en Ibn ʿĀshūr'],
        ['تصديق الرسول بالصلاة إلى بيت المقدس عن أمر الله: الطبري', 'De bevestiging van de Boodschapper door op Allahs bevel naar Bayt al-Maqdis te bidden: aṭ-Ṭabarī']
      ],
      preferred: ['لا ترجيح في المذكرات، والقولان متقاربان: فالطبري نفسه قال: «معناه الصلاة»، ثم فسرها بتصديق الرسول بالصلاة إلى بيت المقدس.', 'De notities kiezen niet, en de twee liggen dicht bij elkaar: aṭ-Ṭabarī zegt zelf "de betekenis is het gebed" en legt dat uit als de bevestiging van de Boodschapper door naar Bayt al-Maqdis te bidden.'],
      fruit: ['دخول الأعمال في الإيمان، خلافاً للمرجئة.', 'Daden horen bij het geloof, anders dan de Murjiʾa zeggen.']
    },
    {
      page: 15,
      q: ['هل الصلاة من الإيمان؟', 'Behoort het gebed tot het geloof?'],
      views: [
        ['المرجئة: الصلاة ليست من الإيمان', 'De Murjiʾa: het gebed behoort niet tot het geloof'],
        ['أهل السنة والجماعة: أعمال الجوارح تدخل في الإيمان، والآية دليل لهم (السعدي)', 'Ahl as-Sunna wa-l-Jamāʿa: de daden van de ledematen behoren tot het geloof, en het vers is hun bewijs (as-Saʿdī)']
      ],
      preferred: ['قول أهل السنة والجماعة، لأن الله سمى الصلاة إيماناً.', 'De leer van Ahl as-Sunna wa-l-Jamāʿa, want Allah noemde het gebed geloof.'],
      fruit: ['أورد ابن العربي عليه سؤالاً: لم قال مالك إن تارك الصلاة غير كافر؟ والجواب غير منقول في المذكرات.', 'Ibn al-ʿArabī werpt hierbij de vraag op waarom Mālik zei dat wie het gebed nalaat geen kāfir is; het antwoord staat niet in de notities.']
    }
  ],
  pitfalls: [
    [14, 'القول إن المسلمين اختاروا الكعبة لفضل جهتها من تلقاء أنفسهم', 'Zeggen dat de moslims uit zichzelf voor de Kaʿba kozen omdat die richting beter is', 'ما اتخذوها قبلة إلا امتثالاً لأمر ربهم، والجهات كلها لله.', 'Zij namen haar alleen als qibla uit gehoorzaamheid aan hun Heer; alle richtingen zijn van Allah.'],
    [14, 'تفسير الوسط بالتوسط المكاني أو بمجرد المنتصف', 'Wasaṭ opvatten als "het midden" in ruimte of als middelmaat', 'الوسط في اللغة الخيار، وهو العدل، كما قال ابن العربي.', 'Wasaṭ betekent in de taal "de besten", en dat is "de rechtvaardige", zoals Ibn al-ʿArabī zegt.'],
    [15, 'القول إن الصلاة إلى بيت المقدس قبل التحويل ضاعت على من مات قبله', 'Zeggen dat het gebed naar Bayt al-Maqdis verloren is voor wie vóór de verandering stierf', 'نزلت الآية فيهم: ﴿وما كان الله ليضيع إيمانكم﴾، أي صلاتكم.', 'Juist over hen werd het vers geopenbaard: ﴿Allah zou jullie geloof niet verloren laten gaan﴾, dat is jullie gebed.'],
    [16, 'التكلف في طلب مسامتة القبلة حتى هدم المساجد لانحراف يسير', 'Overdreven moeite doen voor musāmata, tot het afbreken van moskeeën om een kleine afwijking toe', 'لا يضر الانحراف ما دام في الجهة، وهدم المسجد لذلك لا يجوز، إذا أوسع الله علينا فعلينا أن نوسع.', 'Afwijking schaadt niet zolang men in de richting staat, en een moskee daarom afbreken mag niet: als Allah ons ruimte geeft, moeten wij ruimte geven.'],
    [16, 'تعميم حديث «ما بين المشرق والمغرب قبلة» على كل بلد', 'De hadith «Tussen het oosten en het westen is een qibla» op elk land toepassen', 'هذا لأهل المدينة ونحوها من البلاد.', 'Hij geldt voor de mensen van Medina en vergelijkbare streken.'],
    [15, 'نسبة القول بإصابة العين إلى الجمهور', 'Het treffen van de Kaʿba zelf aan de meerderheid toeschrijven', 'إصابة العين هو الصحيح عند الشافعية، والجمهور على أن الجهة تكفي.', 'Het treffen van de Kaʿba zelf is de juiste mening bij de Shāfiʿieten; de meerderheid zegt dat de richting genoeg is.']
  ],
  ayat: [
    [14, 'سيقول السفهاء من الناس ما ولاهم عن قبلتهم التي كانوا عليها قل لله المشرق والمغرب يهدي من يشاء إلى صراط مستقيم', 'البقرة 142: اعتراض اليهود على تحويل القبلة، والجواب بأن الجهات كلها لله.', 'Al-Baqara 142: het bezwaar van de joden tegen de nieuwe qibla, en het antwoord dat alle richtingen van Allah zijn.'],
    [14, 'وكذلك جعلناكم أمة وسطاً', 'البقرة 143: الوسط الخيار العدل، ومنه حجية الإجماع ووجوب اتباع الصحابة.', 'Al-Baqara 143: wasaṭ is de besten, de rechtvaardigen; hieruit volgen de geldigheid van de ijmāʿ en de plicht de metgezellen te volgen.'],
    [14, 'لتكونوا شهداء على الناس ويكون الرسول عليكم شهيداً', 'البقرة 143: يدل على أن الوسط العدل، وعلى شهادة الأمة في المحشر.', 'Al-Baqara 143: toont dat wasaṭ rechtvaardig betekent, en dat de gemeenschap op de verzamelplaats getuigt.'],
    [15, 'وما كان الله ليضيع إيمانكم', 'البقرة 143: نزلت فيمن مات وهو يصلي إلى بيت المقدس، والمراد الصلاة، ودليل دخول الأعمال في الإيمان.', 'Al-Baqara 143: geopenbaard over wie stierf terwijl hij naar Bayt al-Maqdis bad; bedoeld is het gebed; bewijs dat daden tot het geloof behoren.'],
    [15, 'فول وجهك شطر المسجد الحرام وحيث ما كنتم فولوا وجوهكم شطره', 'البقرة 144: دليل ابن العربي على أن فرض البعيد استقبال الجهة.', 'Al-Baqara 144: het bewijs van Ibn al-ʿArabī dat wie ver weg is de richting moet volgen.']
  ],
  review: [
    ['من المراد بالسفهاء في قوله: ﴿سيقول السفهاء من الناس﴾ عند ابن العربي؟', 'Wie zijn volgens Ibn al-ʿArabī "de dwazen" in ﴿De dwazen onder de mensen zullen zeggen﴾?'],
    ['لماذا اتخذ المؤمنون الكعبة قبلة؟', 'Waarom namen de gelovigen de Kaʿba als qibla?'],
    ['ما معنى الوسط في اللغة، وما الدليل عليه من السياق؟', 'Wat betekent wasaṭ in de taal, en wat in de context wijst daarop?'],
    ['ما معنى قول ابن العربي: جعلنا أولاً مكاناً وإن كنا آخراً زماناً؟', 'Wat bedoelt Ibn al-ʿArabī met: Hij maakte ons de eersten in rang, al zijn wij de laatsten in tijd?'],
    ['متى وأين تشهد هذه الأمة على الناس؟', 'Wanneer en waar getuigt deze gemeenschap over de mensen?'],
    ['كيف استدل القرطبي بالآية على حجية الإجماع؟', 'Hoe leidt al-Qurṭubī uit het vers af dat de ijmāʿ bewijs is?'],
    ['كيف تدل الآية على كمال هذا الدين؟', 'Hoe wijst het vers op de volmaaktheid van deze godsdienst?'],
    ['ما وجه استدلال ابن القيم بالآية على وجوب اتباع الصحابة؟', 'Hoe leidt Ibn al-Qayyim uit het vers de plicht af de metgezellen te volgen?'],
    ['فيمن نزل قوله: ﴿وما كان الله ليضيع إيمانكم﴾، وما المراد بالإيمان فيه؟', 'Over wie werd ﴿Allah zou jullie geloof niet verloren laten gaan﴾ geopenbaard, en wat is daar "geloof"?'],
    ['اذكر ثلاثة تعليلات لتسمية الصلاة إيماناً.', 'Noem drie verklaringen waarom het gebed "geloof" heet.'],
    ['ما قول المرجئة في الصلاة، وما الذي أورده ابن العربي من إشكال عن مالك؟', 'Wat zeggen de Murjiʾa over het gebed, en welk probleem over Mālik werpt Ibn al-ʿArabī op?'],
    ['ما الخلاف في فرض البعيد عن الكعبة، وما الصحيح عند ابن العربي ولماذا؟', 'Wat is het verschil over de plicht van wie ver van de Kaʿba is, wat is volgens Ibn al-ʿArabī juist en waarom?'],
    ['ما الصحيح عند الشافعية في استقبال القبلة؟ وما مذهب الجمهور ودليله؟', 'Wat is de juiste mening bij de Shāfiʿieten over de qibla? En wat zegt de meerderheid, met welk bewijs?'],
    ['ما المسامتة؟', 'Wat is musāmata?'],
    ['اذكر فوائد حديث «ما بين المشرق والمغرب قبلة» عند ابن عثيمين.', 'Noem de lessen uit «Tussen het oosten en het westen is een qibla» volgens Ibn ʿUthaymīn.']
  ],
  quiz: [
    { type: 'mc', page: 14, q: ['من المراد بالسفهاء في آية تحويل القبلة عند ابن العربي؟', 'Wie zijn volgens Ibn al-ʿArabī "de dwazen" in het vers over de nieuwe qibla?'], options: [['اليهود', 'المنافقون', 'مشركو مكة', 'الأعراب'], ['de joden', 'de huichelaars', 'de polytheïsten van Mekka', 'de bedoeïenen']], answer: 0, explain: ['قال: قال علماؤنا: المراد بذلك اليهود، عابوا على المسلمين رجوعهم إلى الكعبة.', 'Hij zegt: "Onze geleerden zeiden: daarmee zijn de joden bedoeld"; zij verweten de moslims dat zij zich naar de Kaʿba keerden.'] },
    { type: 'tf', page: 14, q: ['اتخذ المؤمنون الكعبة قبلة لأنهم رأوا جهتها أفضل من غيرها.', 'De gelovigen namen de Kaʿba als qibla omdat zij die richting beter vonden dan andere.'], answer: 1, explain: ['ما اتخذوها إلا امتثالاً لأمر ربهم، لا ترجيحاً لبعض الجهات من تلقاء أنفسهم.', 'Zij namen haar alleen uit gehoorzaamheid aan hun Heer, niet uit eigen voorkeur voor een richting.'] },
    { type: 'mc', page: 14, q: ['ما معنى الوسط في اللغة كما قال ابن العربي؟', 'Wat betekent wasaṭ in de taal volgens Ibn al-ʿArabī?'], options: [['الخيار، وهو العدل', 'المنتصف بين شيئين', 'القليل', 'المتأخر'], ['de besten, dat is de rechtvaardige', 'het midden tussen twee dingen', 'het weinige', 'de laatkomer']], answer: 0, explain: ['الوسط في اللغة: الخيار، وهو العدل.', 'Wasaṭ is in de taal: de besten, en dat is de rechtvaardige.'] },
    { type: 'mc', page: 14, q: ['ما الذي يدل من السياق على أن الوسط هو العدل؟', 'Wat in de context wijst erop dat wasaṭ "rechtvaardig" betekent?'], options: [['﴿لتكونوا شهداء على الناس﴾', '﴿قل لله المشرق والمغرب﴾', '﴿فول وجهك شطر المسجد الحرام﴾', '﴿وما كان الله ليضيع إيمانكم﴾'], ['﴿opdat jullie getuigen over de mensen zouden zijn﴾', '﴿Zeg: aan Allah behoren het oosten en het westen﴾', '﴿Wend je gezicht naar al-Masjid al-Ḥarām﴾', '﴿Allah zou jullie geloof niet verloren laten gaan﴾']], answer: 0, explain: ['قال ابن العربي: يدل عليه قوله تعالى بعده: ﴿لتكونوا شهداء على الناس﴾.', 'Ibn al-ʿArabī: wat erop volgt wijst daarop: ﴿opdat jullie getuigen over de mensen zouden zijn﴾.'] },
    { type: 'mc', page: 14, q: ['أي حديث استشهد به ابن العربي على أن الأمة أول مكاناً وإن كانت آخراً زماناً؟', 'Welke hadith haalt Ibn al-ʿArabī aan voor: eersten in rang, laatsten in tijd?'], options: [['«نحن الآخرون السابقون»', '«ما بين المشرق والمغرب قبلة»', '«هو الطهور ماؤه»', '«لا تغسلوهم»'], ['«Wij zijn de laatsten en de voorsten»', '«Tussen het oosten en het westen is een qibla»', '«Zijn water is reinigend»', '«Was hen niet»']], answer: 0, explain: ['رواه البخاري ومسلم.', 'Overgeleverd door al-Bukhārī en Muslim.'] },
    { type: 'tf', page: 14, q: ['شهادة هذه الأمة على الناس تكون في المحشر للأنبياء على أممهم.', 'Deze gemeenschap getuigt op de verzamelplaats voor de profeten tegenover hun volken.'], answer: 0, explain: ['كذا في المذكرات: نحن شهداء على الناس، أي في المحشر للأنبياء على أممهم.', 'Zo staat het in de notities.'] },
    { type: 'mc', page: 14, q: ['من استدل بالآية على صحة الإجماع ووجوب الحكم به؟', 'Wie leidt uit het vers af dat de ijmāʿ geldig is en dat men ernaar moet oordelen?'], options: [['القرطبي', 'ابن القيم', 'الطبري', 'ابن عاشور'], ['al-Qurṭubī', 'Ibn al-Qayyim', 'aṭ-Ṭabarī', 'Ibn ʿĀshūr']], answer: 0, explain: ['قال القرطبي: وفيه دليل على صحة الإجماع ووجوب الحكم به.', 'Al-Qurṭubī: hierin ligt een bewijs dat de ijmāʿ geldig is en dat men ernaar moet oordelen.'] },
    { type: 'mc', page: 14, q: ['استدل ابن القيم بقوله: ﴿أمة وسطاً﴾ على:', 'Ibn al-Qayyim leidt uit ﴿een gemeenschap van het midden﴾ af:'], options: [['وجوب اتباع الصحابة', 'وجوب استقبال العين', 'نسخ الوصية', 'طهارة ميتة السمك'], ['de plicht de metgezellen te volgen', 'de plicht zich op de Kaʿba zelf te richten', 'de afschaffing van het testament', 'de reinheid van dode vis']], answer: 0, explain: ['لأن الله أخبر أنه جعلهم أمة خياراً عدولاً، فهم خير الأمم وأعدلها.', 'Want Allah deelt mee dat Hij hen tot de besten en rechtvaardigen maakte; zij zijn de beste en rechtvaardigste gemeenschap.'] },
    { type: 'tf', page: 14, q: ['وجه دلالة الآية على كمال هذا الدين أن الأكمل يشهد على من دونه وليس العكس.', 'Het vers wijst op de volmaaktheid van deze godsdienst, omdat de volmaaktere getuigt over wie minder is, niet andersom.'], answer: 0, explain: ['كذا في المذكرات.', 'Zo staat het in de notities.'] },
    { type: 'mc', page: 15, q: ['فيمن نزل قوله: ﴿وما كان الله ليضيع إيمانكم﴾ باتفاق العلماء كما قال ابن العربي؟', 'Over wie werd ﴿Allah zou jullie geloof niet verloren laten gaan﴾ volgens Ibn al-ʿArabī, met instemming van de geleerden, geopenbaard?'], options: [['فيمن مات وهو يصلي إلى بيت المقدس', 'فيمن ترك الصلاة', 'في الشهداء', 'في المنافقين'], ['wie stierf terwijl hij naar Bayt al-Maqdis bad', 'wie het gebed naliet', 'de martelaren', 'de huichelaars']], answer: 0, explain: ['اتفق العلماء على أنها نزلت فيمن مات وهو يصلي إلى بيت المقدس.', 'De geleerden zijn het erover eens dat het daarover werd geopenbaard.'] },
    { type: 'mc', page: 15, q: ['من روى عن مالك أن المراد بالإيمان في الآية الصلاة؟', 'Wie overleverde van Mālik dat met "geloof" in het vers het gebed bedoeld is?'], options: [['أشهب', 'الشافعي', 'ابن القاسم', 'الطبري'], ['Ashhab', 'ash-Shāfiʿī', 'Ibn al-Qāsim', 'aṭ-Ṭabarī']], answer: 0, explain: ['روى أشهب عن مالك أن المراد به صلاتكم.', 'Ashhab overleverde van Mālik dat "jullie gebed" bedoeld is.'] },
    { type: 'tf', page: 15, q: ['قالت المرجئة: إن الصلاة من الإيمان.', 'De Murjiʾa zeiden dat het gebed tot het geloof behoort.'], answer: 1, explain: ['بل قالوا: إن الصلاة ليست من الإيمان.', 'Nee, zij zeiden dat het gebed niet tot het geloof behoort.'] },
    { type: 'mc', page: 15, q: ['قال القرطبي: سمى الصلاة إيماناً لاشتمالها على:', 'Al-Qurṭubī: het gebed heet geloof omdat het omvat:'], options: [['نية وقول وعمل', 'قيام وركوع وسجود', 'طهارة واستقبال', 'قراءة وذكر'], ['intentie, woord en daad', 'staan, buigen en neerknielen', 'reinheid en de qibla', 'recitatie en gedenken']], answer: 0, explain: ['سمى الصلاة إيماناً لاشتمالها على نية وقول وعمل.', 'Zo staat het bij al-Qurṭubī in de notities.'] },
    { type: 'mc', page: 15, q: ['قال ابن عاشور: في إطلاق اسم الإيمان على الصلاة تنويه بها لأنها:', 'Ibn ʿĀshūr: het gebed "geloof" noemen eert het, omdat het is:'], options: [['أعظم أركان الإيمان', 'أول ما فرض', 'أكثر العبادات تكراراً', 'لا تسقط بحال'], ['de grootste zuil van het geloof', 'het eerste wat verplicht werd', 'de vaakst herhaalde aanbidding', 'nooit vervalt']], answer: 0, explain: ['لأنها أعظم أركان الإيمان.', 'Omdat het de grootste zuil van het geloof is.'] },
    { type: 'tf', page: 15, q: ['صحح ابن العربي أن فرض البعيد عن الكعبة استقبال العين.', 'Ibn al-ʿArabī noemt het juist dat wie ver van de Kaʿba is zich op de Kaʿba zelf moet richten.'], answer: 1, explain: ['بل ضعفه لأنه تكليف لما لا يصل إليه، وصحح الجهة.', 'Nee, dat noemt hij zwak omdat het een opdracht tot het onbereikbare is; de richting noemt hij juist.'] },
    { type: 'mc', page: 15, q: ['ما الصحيح عند الشافعية في استقبال القبلة كما في المذكرات؟', 'Wat is volgens de notities de juiste mening bij de Shāfiʿieten over de qibla?'], options: [['وجوب إصابة العين', 'تكفي إصابة الجهة', 'يتخير المصلي', 'يجتهد ولا يجب شيء'], ['men moet de Kaʿba zelf treffen', 'de richting treffen is genoeg', 'de bidder mag kiezen', 'hij doet zijn best, er is geen plicht']], answer: 0, explain: ['الصحيح عند الشافعية وجوب إصابة العين، ومذهب الجمهور أنه يكفي إصابة الجهة.', 'Bij de Shāfiʿieten moet men de Kaʿba zelf treffen; volgens de meerderheid is de richting genoeg.'] },
    { type: 'mc', page: 16, q: ['ما معنى المسامتة؟', 'Wat betekent musāmata?'], options: [['مقابلة سمت الكعبة، أي ذاتها، بلا انحراف', 'الصلاة في جهة الكعبة', 'الاجتهاد في القبلة', 'الصلاة داخل الكعبة'], ['precies tegenover de Kaʿba zelf staan, zonder afwijking', 'bidden in de richting van de Kaʿba', 'zijn best doen om de qibla te bepalen', 'bidden in de Kaʿba']], answer: 0, explain: ['المسامتة: مقابلة سمت الكعبة، أي ذاتها، بلا انحراف.', 'Zo wordt musāmata in de notities uitgelegd.'] },
    { type: 'tf', page: 16, q: ['يرى ابن عثيمين أن من وجد في مسجده انحرافاً يسيراً عن القبلة فعليه أن يهدمه.', 'Volgens Ibn ʿUthaymīn moet wie in zijn moskee een kleine afwijking van de qibla vindt, haar afbreken.'], answer: 1, explain: ['قال: هذا لا يجوز، إذا أوسع الله علينا فعلينا أن نوسع.', 'Hij zegt: dat mag niet; als Allah ons ruimte geeft, moeten wij ruimte geven.'] },
    { type: 'mc', page: 16, q: ['حديث «ما بين المشرق والمغرب قبلة» في المذكرات هو في حق:', 'De hadith «Tussen het oosten en het westen is een qibla» geldt volgens de notities voor:'], options: [['أهل المدينة ونحوها من البلاد', 'كل المسلمين في كل مكان', 'من يرى الكعبة', 'المسافر خاصة'], ['de mensen van Medina en vergelijkbare streken', 'alle moslims overal', 'wie de Kaʿba ziet', 'alleen de reiziger']], answer: 0, explain: ['هذا لأهل المدينة ونحوها من البلاد.', 'Zo staat het in de notities.'] }
  ],
  note: [
    'هذه البطاقة مأخوذة من المذكرات وحدها. حذف من نص ابن العربي ما اختصره الكاتب بعلامة (...)، ولم ينقل جوابه عن سؤاله في قول مالك في تارك الصلاة. وقوله في المذكرات: «حديث أبي هريرة المذكور في السؤال» يشير إلى سؤال في الدرس.',
    'Deze kaart volgt alleen de notities. Wat de schrijver met (...) inkortte, ontbreekt; het antwoord van Ibn al-ʿArabī op zijn vraag over Māliks uitspraak over wie het gebed nalaat, staat er niet in. "De hadith van Abū Hurayra die in de vraag genoemd is" verwijst naar een vraag in de les.'
  ]
})
