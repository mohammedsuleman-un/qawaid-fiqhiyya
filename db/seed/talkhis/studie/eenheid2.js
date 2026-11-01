// Hoofdstukkaart eenheid 2 van تلخيص جمع الجوامع: تعريفات أصولية ومسائل الواجب (p. 10–19).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p010–p019.html).
import { kaart } from './kaart.js'

export default kaart({
  unit: 2,
  subtitle: ['تسعة فصول: من الدليل والحد والعلم إلى الواجب المخير والكفائي والموسع ومقدمة الواجب', 'Negen onderdelen: van bewijs, definitie en kennis tot de keuzeplicht, de collectieve, de ruime plicht en wat voor een plicht nodig is'],
  summary: [
    'تبدأ الوحدة بتعريفات: الدليل والحد والنظر والإدراك بقسميه، وأنواع التصديق الجازم وغير الجازم، والعلم والجهل والسهو. ثم الحسن والقبيح شرعاً، ومسائل التكليف بالمندوب والمباح، ثم مسائل الواجب: المخير والحرام المخير، وفرض الكفاية، والواجب الموسع، وما لا يتم الواجب إلا به، وهل يتناول مطلق الأمر المكروه.',
    'Het hoofdstuk begint met definities: bewijs, definitie (ḥadd), nadenken, waarneming in twee soorten, stellige en niet-stellige overtuigingen, kennis, onwetendheid en vergeetachtigheid. Daarna goed en lelijk volgens de sharīʿa, of het aanbevolene en het toegestane opgedragen zijn, en de kwesties rond de plicht: de keuzeplicht en het keuzeverbod, de collectieve plicht (farḍ kifāya), de ruime plicht (wājib muwassaʿ), wat nodig is om een plicht te vervullen, en of een algemeen gebod het afgekeurde omvat.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 10 إلى 19.', 'Bladzijde 10 tot 19.'],
    root: [0, 'تعريفات ومسائل الواجب', 'Definities en de plicht', 'الوحدة الثانية', 'Eenheid 2'],
    nodes: [
      [10, 'تعريفات', 'Definities', 'ص 10–12', 'p. 10–12', [['الدليل والحد والنظر', 'bewijs, ḥadd, nadenken'], ['الإدراك والعلم', 'waarneming en kennis'], ['الجهل والسهو', 'onwetendheid en vergeten']]],
      [12, 'الحسن والقبيح شرعاً', 'Goed en lelijk volgens de sharīʿa', 'ص 12', 'p. 12', [['المأذون والمنهي', 'het toegestane en het verbodene']]],
      [13, 'المندوب والمباح', 'Aanbevolen en toegestaan', 'ص 13–14', 'p. 13–14', [['مأمور به؟', 'opgedragen?'], ['مكلف به؟', 'een taklīf?'], ['نسخ الوجوب', 'opheffing van een plicht']]],
      [14, 'الواجب المخير', 'De keuzeplicht', 'ص 14–15', 'p. 14–15', [['أربعة أقوال', 'vier meningen'], ['الحرام المخير', 'het keuzeverbod']]],
      [16, 'فرض الكفاية', 'De collectieve plicht', 'ص 16–17', 'p. 16–17', [['على البعض أم الكل', 'op sommigen of op allen'], ['يتعين بالشروع', 'bindend door te beginnen']]],
      [17, 'الواجب الموسع وما لا يتم الواجب إلا به', 'Ruime plicht en wat nodig is', 'ص 17–19', 'p. 17–19', [['وقت الوجوب', 'de tijd van de plicht'], ['مقدمة الواجب', 'de voorwaarde voor de plicht']]]
    ]
  },
  points: [
    [10, 'الدليل: ما يمكن التوصل بصحيح النظر فيه إلى مطلوب خبري، قطعياً كان أو ظنياً.', 'Bewijs (dalīl): datgene waarmee men door juist nadenken een uitspraak kan bereiken, zeker of waarschijnlijk.'],
    [11, 'الإدراك بلا حكم تصور، وبحكم تصديق؛ والتصديق جازم (علم واعتقاد) وغير جازم (ظن ووهم وشك).', 'Waarneming zonder oordeel is taṣawwur (voorstelling), met oordeel taṣdīq (instemming); instemming is stellig (kennis, overtuiging) of niet (vermoeden, twijfel).'],
    [11, 'الراجح عند المصنف الإمساك عن تعريف العلم، كالباقلاني والغزالي.', 'De auteur kiest ervoor kennis (ʿilm) niet te definiëren, zoals al-Bāqillānī en al-Ghazālī.'],
    [13, 'جائز الترك ليس بواجب؛ والخلف في صوم الحائض والمريض والمسافر لفظي.', 'Wat men mag laten, is niet verplicht; het verschil over het vasten van de menstruerende, de zieke en de reiziger is in woorden.'],
    [13, 'الأكثر على أن المندوب مأمور به، والأصح عند المصنف أنه ليس مكلفاً به، وكذا المباح.', 'De meesten zeggen dat het aanbevolene opgedragen is; volgens de auteur is het geen taklīf, en het toegestane evenmin.'],
    [14, 'الأمر بواحد من أشياء يوجب واحداً لا بعينه: هذا هو الواجب المخير، كخصال الكفارة.', 'Een gebod om één uit meerdere te doen, verplicht één ervan, niet een bepaalde: de keuzeplicht, zoals bij de boete-opties.'],
    [16, 'فرض الكفاية مهم يقصد حصوله من غير نظر بالذات إلى فاعله، وهو على البعض عند المصنف.', 'Farḍ kifāya: iets belangrijks waarvan het gebeuren bedoeld is, ongeacht wie het doet; volgens de auteur rust het op sommigen.'],
    [18, 'ما لا يتم الواجب المطلق إلا به، وهو مقدور، واجب عند الأكثر.', 'Wat nodig is om een onvoorwaardelijke plicht te vervullen en binnen iemands vermogen ligt, is volgens de meesten ook verplicht.']
  ],
  terms: [
    ['الدليل', 'ad-dalīl', 10, 'ما يمكن التوصل بصحيح النظر فيه إلى مطلوب خبري.', 'Waarmee men door juist nadenken een uitspraak (een sharʿī-oordeel) kan bereiken.', 'إثباتاً أو نفياً، قطعياً أو ظنياً؛ ويخرج فاسد النظر.', 'Bevestigend of ontkennend, zeker of waarschijnlijk; foutief nadenken valt erbuiten.'],
    ['الحد', 'al-ḥadd', 10, 'التعريف الجامع المانع، ويقال المطرد المنعكس.', 'Een definitie die alles omvat en niets anders toelaat; ook: consequent en omkeerbaar.', 'المطرد: كلما وُجد الحد وُجد المحدود، والمنعكس: كلما انتفى الحد انتفى المحدود.', 'Consequent: waar de definitie geldt, is het gedefinieerde er; omkeerbaar: waar ze niet geldt, is het er niet.'],
    ['النظر', 'an-naẓar', 10, 'الفكر المؤدي إلى علم أو ظن.', 'Nadenken dat tot kennis of vermoeden leidt.', 'يخرج غير الموصل كحديث النفس.', 'Wat nergens toe leidt, zoals mijmeren, valt erbuiten.'],
    ['الإدراك', 'al-idrāk', 11, 'وصول الذهن إلى تمام المعنى أو النتيجة؛ وهو تصور وتصديق.', 'Dat de geest de volle betekenis of uitkomst bereikt; het is taṣawwur of taṣdīq.'],
    ['التصور', 'at-taṣawwur', 11, 'الإدراك بلا حكم.', 'Waarneming zonder oordeel: losse begrippen.'],
    ['التصديق', 'at-taṣdīq', 11, 'الإدراك بحكم، وهو جازم وغير جازم.', 'Waarneming met een oordeel; stellig of niet stellig.'],
    ['العلم', 'al-ʿilm', 11, 'الإدراك التصديقي الجازم الذي لا يقبل التغير. وعرّفه الرازي: حكم الذهن الجازم المطابق لموجب.', 'Stellige instemming die niet kan veranderen. Ar-Rāzī: een stellig oordeel van de geest dat met de werkelijkheid overeenkomt, op grond van een grond (zintuig, noodzaak of gewoonte).', 'قوله "لموجب" (من حس أو ضرورة أو عادة) يخرج التقليد.', '"Op grond van iets" (zintuig, noodzaak of gewoonte) sluit taqlīd uit.'],
    ['الاعتقاد', 'al-iʿtiqād', 11, 'الإدراك الجازم القابل للتغير: صحيح إن طابق الواقع، وفاسد إن لم يطابق.', 'Stellige instemming die kan veranderen: juist als ze klopt met de werkelijkheid, onjuist als ze niet klopt.'],
    ['الظن والوهم والشك', 'aẓ-ẓann, al-wahm, ash-shakk', 11, 'الظن: الراجح من أمرين، والوهم: المرجوح، والشك: تساوي الأمرين.', 'Vermoeden: de sterkere van twee mogelijkheden; wahm: de zwakkere; twijfel: beide even sterk.'],
    ['الجهل', 'al-jahl', 12, 'بسيط: انتفاء العلم بالمقصود؛ ومركب: تصور المعلوم على خلاف هيئته.', 'Eenvoudig: geen kennis van iets; samengesteld: iets voorstellen anders dan het is.', 'المركب مركب من جهل الحقيقة وظن الخطأ صواباً.', 'Het samengestelde bestaat uit onwetendheid plus het fout voor juist houden.'],
    ['السهو', 'as-sahw', 12, 'الذهول عن المعلوم.', 'Afgeleid zijn van iets dat men wel weet.', 'وفرّق بعضهم: السهو لما يقرب ذكره، والنسيان لما يبعد.', 'Sommigen onderscheiden: sahw is snel weer te herinneren, nisyān niet.'],
    ['الحسن (شرعاً)', 'al-ḥasan', 12, 'المأذون: واجباً ومندوباً ومباحاً، وقيل وفعل غير المكلف.', 'Het toegestane: verplicht, aanbevolen en toegestaan; volgens een mening ook de daad van wie niet verantwoordelijk is.'],
    ['القبيح (شرعاً)', 'al-qabīḥ', 12, 'المنهي ولو بالعموم، فيدخل خلاف الأولى.', 'Het verbodene, ook met een algemeen verbod; khilāf al-awlā valt er dus onder.'],
    ['التكليف', 'at-taklīf', 13, 'إلزام ما فيه كلفة، لا طلبه.', 'Iets lastigs bindend opleggen, niet het alleen vragen.', 'خلافاً للباقلاني الذي جعله طلب ما فيه كلفة، فيدخل المندوب والمباح.', 'Anders dan al-Bāqillānī, voor wie het "vragen" is; dan vallen het aanbevolene en toegestane er wel onder.'],
    ['الجواز (بعد النسخ)', 'al-jawāz', 14, 'عدم الحرج؛ ويدخل فيه المندوب والمباح والمكروه.', 'Geen bezwaar: omvat aanbevolen, toegestaan en afgekeurd.'],
    ['الواجب المخير', 'al-wājib al-mukhayyar', 14, 'الأمر بواحد من أشياء.', 'Een gebod om één uit meerdere dingen te doen.', 'كالكفارات: فدية صيام أو صدقة أو نسك.', 'Zoals boetes: vasten, aalmoes of offerdier.'],
    ['قول التراجم', 'qawl at-tarājum', 15, 'القول بأن الواجب معين عند الله دون المكلف.', 'De mening dat de verplichte optie bij Allah vaststaat maar de mens dat niet weet.', 'سمي بذلك لأن المعتزلة والأشاعرة رمى به كل فريق الآخر، ورفضته المذاهب كلها.', 'Zo genoemd omdat Muʿtazila en Ashʿarieten het elkaar toeschreven; alle scholen wezen het af.'],
    ['الحرام المخير', 'al-ḥarām al-mukhayyar', 15, 'تحريم واحد لا بعينه.', 'Het verbod van één uit meerdere, niet een bepaalde.', 'كمن طلق إحدى زوجتيه دون تعيين.', 'Zoals wie een van zijn twee vrouwen verstoot zonder te zeggen welke.'],
    ['فرض الكفاية', 'farḍ al-kifāya', 16, 'كل مهم ديني يقصد حصوله من غير نظر بالذات إلى فاعله.', 'Elke belangrijke religieuze zaak waarvan het gebeuren bedoeld is, ongeacht wie het doet.'],
    ['سنة الكفاية', 'sunnat al-kifāya', 17, 'كفرض الكفاية في أحكامه.', 'Volgt dezelfde regels als de collectieve plicht.', 'كرد السلام من الجماعة على واحد، وتشميت العاطس.', 'Zoals de groet beantwoorden namens een groep en reageren op wie niest.'],
    ['الواجب الموسع', 'al-wājib al-muwassaʿ', 17, 'واجب وقته أوسع من فعله، كالظهر: جميع وقته وقت لأدائه.', 'Een plicht waarvan de tijd ruimer is dan nodig, zoals ẓuhr: de hele tijd is tijd van adāʾ.'],
    ['مذهب المراعاة', 'madhhab al-murāʿāt', 18, 'قول الكرخي: إن قدّم وقع واجباً بشرط بقائه مكلفاً إلى آخر الوقت.', 'De mening van al-Karkhī: wie vroeg bidt, verricht de plicht op voorwaarde dat hij tot het einde van de tijd verantwoordelijk blijft.'],
    ['ما لا يتم الواجب إلا به', 'mā lā yatimm al-wājib illā bih', 18, 'المقدور الذي يتوقف عليه الواجب المطلق.', 'Wat binnen het vermogen ligt en waarvan een onvoorwaardelijke plicht afhangt.', 'يخرج الواجب المقيد بسبب كالنصاب للزكاة والاستطاعة للحج.', 'Niet een plicht die afhangt van een oorzaak, zoals het niṣāb voor zakāt of het vermogen voor de ḥajj.'],
    ['مطلق الأمر', 'muṭlaq al-amr', 19, 'الأمر المطلق عن القيد، كـ ﴿وأقيموا الصلاة﴾.', 'Een gebod zonder beperking, zoals "verricht het gebed".']
  ],
  diagrams: [
    {
      type: 'tree',
      title: ['أقسام الإدراك', 'Soorten waarneming'],
      intro: ['كما في الصفحة 11.', 'Zoals op bladzijde 11.'],
      root: [11, 'الإدراك', 'Waarneming'],
      nodes: [
        [11, 'بلا حكم: تصور', 'Zonder oordeel: taṣawwur', 'بديهي أو بالتأمل', 'vanzelfsprekend of na nadenken'],
        [11, 'بحكم: تصديق', 'Met oordeel: taṣdīq', '', '', [
          [11, 'جازم', 'Stellig', '', '', [[11, 'علم: لا يقبل التغير', 'Kennis: kan niet veranderen'], [11, 'اعتقاد صحيح: يطابق الواقع', 'Juiste overtuiging'], [11, 'اعتقاد فاسد: لا يطابق', 'Onjuiste overtuiging']]],
          [11, 'غير جازم', 'Niet stellig', '', '', [[11, 'ظن: الراجح', 'Vermoeden: de sterkere'], [11, 'وهم: المرجوح', 'Wahm: de zwakkere'], [11, 'شك: التساوي', 'Twijfel: gelijk']]]
        ]]
      ],
      page: 11
    },
    {
      type: 'cards',
      title: ['أقوال الواجب المخير', 'Meningen over de keuzeplicht'],
      intro: ['رجح المصنف الأول.', 'De auteur kiest de eerste.'],
      nodes: [
        [15, 'واحد لا بعينه', 'Eén, niet een bepaalde', 'حكى القاضي أبو بكر إجماع السلف والفقهاء عليه', 'al-Qāḍī Abū Bakr noemt hier consensus van de vroegen en juristen'],
        [15, 'الكل ويسقط بواحد', 'Allemaal, en één volstaat', 'بعض المعتزلة كأبي هاشم', 'sommige Muʿtazila, zoals Abū Hāshim'],
        [15, 'معين عند الله', 'Vast bij Allah', 'قول التراجم، لم يقل به قائل', 'qawl at-tarājum; niemand hield het echt'],
        [15, 'ما يختاره المكلف', 'Wat de mens kiest']
      ],
      page: 15
    },
    {
      type: 'steps',
      title: ['الأقوال في وقت الواجب الموسع', 'Meningen over de tijd van de ruime plicht'],
      intro: ['والصحيح أن الوقت كله وقت وجوب.', 'Het juiste: de hele tijd is tijd van de plicht.'],
      nodes: [
        [17, 'الجمهور: جميع الوقت وقت أداء، ولا يجب العزم على المؤخر', 'Meerderheid: de hele tijd, zonder plicht tot voornemen bij uitstel'],
        [17, 'قوم: كذلك، مع وجوب الأداء أو العزم', 'Sommigen: idem, maar met plicht tot doen of voornemen', 'لا دليل عليه', 'zonder bewijs'],
        [17, 'أول الوقت، فإن أخر فقضاء', 'Begin van de tijd; later is qaḍāʾ', 'لا يستقيم: القضاء خارج الوقت', 'klopt niet: qaḍāʾ is buiten de tijd'],
        [17, 'آخر الوقت، فإن قدّم فتعجيل', 'Einde van de tijd; vroeger is vervroegen', 'يُنسب إلى حنفية العراق', 'toegeschreven aan de Ḥanafieten van Irak'],
        [17, 'الحنفية: ما اتصل به الأداء، وإلا فالآخر', 'Ḥanafieten: het moment van verrichten, anders het einde'],
        [18, 'الكرخي: يقع واجباً بشرط بقائه مكلفاً', 'Al-Karkhī: plicht, mits hij verantwoordelijk blijft', 'مذهب المراعاة', 'madhhab al-murāʿāt']
      ],
      page: 17
    },
    {
      type: 'compare',
      title: ['أقوال ما لا يتم الواجب إلا به', 'Meningen over wat nodig is voor een plicht'],
      intro: ['أربعة أقوال.', 'Vier meningen.'],
      columns: [['القول', 'Mening'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['الأكثر', 'De meesten'], cells: [['واجب مطلقاً', 'altijd verplicht'], ['الطهارة، ترك الضد، غسل جزء من الرأس', 'reinheid, het tegendeel laten, een deel van het hoofd wassen']] },
        { label: ['الأقلية', 'Een minderheid'], cells: [['ليس بواجب', 'niet verplicht'], ['', '']] },
        { label: ['القول الثالث', 'Derde mening'], cells: [['واجب إن كان سبباً', 'verplicht als het een oorzaak is'], ['كالنار للإحراق', 'zoals vuur voor verbranden']] },
        { label: ['إمام الحرمين', 'Imām al-Ḥaramayn'], cells: [['واجب إن كان شرطاً شرعياً لا عقلياً ولا عادياً', 'verplicht als het een sharʿī-voorwaarde is, niet rationeel of gewoontelijk'], ['الطهارة للصلاة', 'reinheid voor het gebed']] }
      ],
      page: 18
    }
  ],
  sections: [
    [10, 'هل العلم عقيب الدليل مكتسب؟', 'Is de kennis na een bewijs verworven?', 'اختلف الأئمة: هل العلم الحاصل بعد النظر الصحيح في الدليل ضروري يحصل تلقائياً لا تملك دفعه، أم مكتسب لك قبوله أو رده.', 'De imams verschillen: is de kennis na juist nadenken over een bewijs noodzakelijk (ze komt vanzelf en je kunt haar niet afweren), of verworven (je kunt haar aanvaarden of afwijzen)?'],
    [10, 'الكلام في الأزل', 'Het spreken in de eeuwigheid', 'أي الكلام النفسي قبل خلق الخلق عند الأشاعرة: قيل لا يسمى خطاباً لعدم المخاطب، وقيل لا يتنوع إلى خبر وأمر ونهي.', 'Het innerlijke spreken vóór de schepping, volgens de Ashʿarieten: het heet geen aanspraak omdat er niemand was om aan te spreken, of het is niet in mededeling, gebod en verbod verdeeld.', 'وهذا خلاف ما استقرت عليه عقيدة السلف.', 'De notities merken op dat dit ingaat tegen de geloofsleer van de salaf.'],
    [12, 'هل يتفاوت العلم؟', 'Verschilt kennis in sterkte?', 'قال المحققون: لا يتفاوت في نفسه، وإنما التفاوت بكثرة المتعلقات. والأكثرون على أنه يتفاوت.', 'Volgens de grondige geleerden niet in zichzelf; het verschil zit in het aantal zaken waarop het betrekking heeft. De meesten zeggen dat het wel verschilt.', 'مثاله: تفاوت الناس في العلم بوجود الله مبني على التفاوت في معرفته.', 'Voorbeeld: mensen verschillen in hun kennis van Allahs bestaan omdat ze verschillen in hoe goed ze Hem kennen.'],
    [12, 'إمام الحرمين والمكروه', 'Imām al-Ḥaramayn en het afgekeurde', 'قال الجويني: المكروه ليس قبيحاً ولا حسناً؛ ليس قبيحاً لأن صاحبه لم يقع فيما يستوجب الذم، ولا حسناً لأنه لا إذن فيه.', 'Al-Juwaynī: het afgekeurde is niet lelijk en niet goed: niet lelijk omdat de dader geen blaam verdient, niet goed omdat er geen toestemming voor is.', 'وتساءل الشارح: فماذا يقول في خلاف الأولى؟ وكيف أدخل المصنف فعل غير المكلف في الحسن وليس فيه إذن؟', 'De toelichting vraagt: wat zegt hij dan over khilāf al-awlā? En hoe kan de auteur de daad van een niet-verantwoordelijke "goed" noemen zonder toestemming?'],
    [13, 'جائز الترك ليس بواجب', 'Wat men mag laten is niet verplicht', 'لأنه لو وُصف بالوجوب ناقض حقيقة الوجوب. وقال أكثر الفقهاء: يجب الصوم على الحائض والمريض والمسافر. وقال الرازي: عليه أحد الشهرين، لقوله تعالى ﴿فعدة من أيام أخر﴾.', 'Anders zou het de kern van de plicht tegenspreken. De meeste juristen zeggen dat vasten verplicht is voor de menstruerende, de zieke en de reiziger; ar-Rāzī: hij moet een van twee maanden vasten, Ramadan of later ("dan een aantal andere dagen").', 'والخلف لفظي لا يترتب عليه شيء.', 'Het verschil is in woorden zonder gevolg.'],
    [14, 'المباح: ليس جنساً للواجب ولا مأموراً به', 'Het toegestane: geen soort van plicht en niet opgedragen', 'الأصح أن المباح ليس بجنس للواجب لأنه تخيير، وأنه غير مأمور به من حيث هو، وأن الإباحة حكم شرعي خلافاً للمعتزلة.', 'Volgens het juiste is het toegestane geen soort van plicht (er is keuze), het is als zodanig niet opgedragen, en toestemming is een sharʿī-oordeel, anders dan de Muʿtazila zeggen.', 'إن كان المباح وسيلة إلى شيء أخذ حكمه، فصار مأموراً به أو منهياً عنه. والخلف لفظي في المسألتين.', 'Is het toegestane een middel tot iets anders, dan krijgt het het oordeel daarvan. Het verschil is in beide kwesties in woorden.'],
    [14, 'إذا نُسخ الوجوب', 'Als een plicht wordt opgeheven', 'الأصح أن الواجب إذا نسخ بقي الجواز، أي عدم الحرج، فيحمل على ما قويت قرينته من المندوب والمباح والمكروه. وقيل الإباحة، وقيل الاستحباب.', 'Volgens het juiste blijft dan de toelaatbaarheid (geen bezwaar), en men kiest tussen aanbevolen, toegestaan en afgekeurd naar de sterkste aanwijzing. Anderen zeggen: toegestaan, of: aanbevolen.'],
    [15, 'من فعل الكل أو ترك الكل في الواجب المخير', 'Wie in de keuzeplicht alles doet of alles laat', 'إن فعل الكل معاً فقيل الواجب أعلاها تعلقاً بكرم الله، وإن فعلها مرتبة فالأول هو الواجب. وإن تركها كلها عوقب على أدناها تعلقاً برحمة الله.', 'Wie alle opties tegelijk doet: de hoogste geldt als de plicht (uit Allahs vrijgevigheid). Na elkaar: de eerste. Wie alles laat, wordt gestraft voor de laagste (uit Allahs barmhartigheid).'],
    [16, 'أفضلية فرض الكفاية أو فرض العين', 'Is de collectieve of de individuele plicht beter?', 'المصنف يرى أفضلية فرض العين لشموله كل المكلفين وما فيه من وعد ووعيد لا يسقط بفعل البعض. وزعم الأستاذ وإمام الحرمين وأبوه أن فرض الكفاية أفضل.', 'De auteur vindt de individuele plicht beter: die geldt voor iedereen en de belofte en dreiging vervallen niet als anderen het doen. Al-Isfarāyīnī, al-Juwaynī en zijn vader vonden de collectieve plicht beter.', 'قيل لكون مصلحته أعم، وفاعله يصون الأمة عن الإثم.', 'Omdat het nut breder is en wie het doet de gemeenschap voor zonde behoedt.'],
    [18, 'من أخّر مع ظن الموت أو ظن السلامة', 'Uitstellen met verwachting van dood of veiligheid', 'من أخّر الواجب الموسع وهو يظن أنه سيموت قبل آخر الوقت عصى، لضيق الوقت في حقه. فإن عاش وفعله في الوقت فأداء عند الجمهور، وقضاء عند القاضيين. ومن أخّر مع ظن السلامة ثم مُنع فالصحيح لا يعصي.', 'Wie uitstelt terwijl hij verwacht vóór het einde te sterven, zondigt: voor hem is de tijd krap geworden. Leeft hij en doet hij het toch binnen de tijd: adāʾ volgens de meerderheid, qaḍāʾ volgens de twee qāḍī’s. Wie uitstelt en veiligheid verwacht en dan verhinderd wordt, zondigt volgens het juiste niet.', 'حكى الغزالي إجماع السلف على أنه لا يموت عاصياً. وأما ما وقته العمر كالحج فلا يتفرع على هذا.', 'Al-Ghazālī noemt consensus dat zo iemand niet als zondaar sterft. Wat het hele leven als tijd heeft, zoals de ḥajj, volgt hier niet uit.'],
    [19, 'هل يتناول مطلق الأمر المكروه؟', 'Omvat een algemeen gebod het afgekeurde?', 'لا يتناوله عند المؤلف، فمن أراد الطواف بغير وضوء أو الصلاة في أوقات النهي لا يستدل بالأمر المطلق. خلافاً للحنفية: يتناول المجزئ ولو مع الكراهة.', 'Volgens de auteur niet: wie zonder wuḍūʾ ṭawāf wil doen of op verboden tijden wil bidden, kan zich niet op het algemene gebod beroepen. De Ḥanafieten: het omvat wat volstaat, ook met afkeuring.', 'فلا تصح الصلاة في الأوقات المكروهة ولو كانت كراهة تنزيه على الصحيح، واتفقوا أن مطلق الأمر لا يتناول كراهة التحريم.', 'Het gebed op afgekeurde tijden is dus ongeldig, ook bij lichte afkeuring; over strenge afkeuring zijn ze het eens.']
  ],
  keycards: [
    ['opsomming', 11, 'أنواع التصديق', 'Soorten instemming', ['جازم لا يقبل التغير: علم', 'جازم يقبل التغير ويطابق: اعتقاد صحيح', 'جازم يقبل التغير ولا يطابق: اعتقاد فاسد', 'غير جازم راجح: ظن', 'غير جازم مرجوح: وهم', 'متساوٍ: شك'], ['Stellig en onveranderlijk: kennis', 'Stellig, veranderlijk, klopt: juiste overtuiging', 'Stellig, veranderlijk, klopt niet: onjuiste overtuiging', 'Niet stellig, sterker: vermoeden', 'Niet stellig, zwakker: wahm', 'Gelijk: twijfel']],
    ['onderscheid', 10, 'الجامع المانع والمطرد المنعكس', 'Omvattend/uitsluitend en consequent/omkeerbaar', ['الجامع: يشمل جميع أفراد المحدود', 'المانع: يمنع دخول غيره', 'المطرد يقابل المانع: كلما وجد الحد وجد المحدود', 'المنعكس يقابل الجامع: كلما انتفى الحد انتفى المحدود'], ['Omvattend: alle gevallen van het gedefinieerde vallen erin', 'Uitsluitend: niets anders valt erin', 'Consequent hoort bij uitsluitend', 'Omkeerbaar hoort bij omvattend']],
    ['definitie', 11, 'تعريف الرازي للعلم وقيوده', 'Ar-Rāzīs definitie van kennis', ['حكم الذهن الجازم: يخرج الظن والشك والوهم', 'المطابق: يخرج الاعتقاد الفاسد (الجهل)', 'لموجب: يخرج التقليد'], ['Stellig oordeel: sluit vermoeden en twijfel uit', 'Dat klopt: sluit de onjuiste overtuiging uit', 'Op grond van iets: sluit taqlīd uit']],
    ['opsomming', 12, 'الحسن والقبيح شرعاً', 'Goed en lelijk volgens de sharīʿa', ['الواجب: إذن وطلب وإلزام', 'المندوب: إذن وطلب', 'المباح: إذن مجرد', 'القبيح: الحرام والمكروه وخلاف الأولى'], ['Verplicht: toestemming, verzoek en binding', 'Aanbevolen: toestemming en verzoek', 'Toegestaan: alleen toestemming', 'Lelijk: verboden, afgekeurd en khilāf al-awlā']],
    ['bewijs', 16, 'على من يجب فرض الكفاية؟', 'Op wie rust de collectieve plicht?', ['المصنف والرازي: على البعض، لقوله تعالى ﴿ولتكن منكم أمة يدعون إلى الخير﴾ و﴿فلولا نفر من كل فرقة﴾', 'والده والجمهور: على الكل، لأنه خوطب به الجميع'], ['De auteur en ar-Rāzī: op sommigen, vanwege "laat er onder jullie een groep zijn die tot het goede oproept" en "waarom trekt niet uit elke groep een deel uit"', 'Zijn vader en de meerderheid: op allen, want allen worden aangesproken']],
    ['opsomming', 19, 'أمثلة اختلاط الحلال بالحرام', 'Voorbeelden van vermenging van toegestaan en verboden', ['شاتان إحداهما مذكاة والأخرى ميتة: يجب تركهما', 'منكوحة اختلطت بأجنبية: حرمتا', 'طلق معينة ثم نسيها: حرمتا'], ['Twee schapen, één geslacht en één kadaver: beide laten', 'Echtgenote verward met een vreemde vrouw: beide verboden', 'Een bepaalde vrouw verstoten en vergeten welke: beide verboden']],
    ['uitzondering', 17, 'فرض الكفاية يتعين بالشروع', 'De collectieve plicht wordt bindend door te beginnen', ['الأصح: يصير فرض عين على من شرع فيه', 'وقال آخرون: لا يتعين', 'واستثنى بعضهم الجهاد والجنازة'], ['Volgens het juiste wordt het een individuele plicht voor wie begint', 'Anderen: nee', 'Sommigen noemen jihād en het dodengebed als uitzondering']]
  ],
  subtleties: [
    [12, 'فعل غير المكلف من الحسن', 'De daad van een niet-verantwoordelijke is "goed"', 'عطفه المصنف على المأذون مع أنه لا إذن فيه، ولذلك قالوا: تعريف البيضاوي أدق: الحسن ما لم يُنه عنه، فيدخل فعل الصبي والساهي والبهيمة.', 'De auteur noemt het naast het toegestane, hoewel er geen toestemming is. Daarom vinden velen al-Bayḍāwīs definitie preciezer: goed is wat niet verboden is; zo vallen de daden van een kind, iemand die vergeet en een dier eronder.'],
    [13, 'المندوب مأمور به وليس مكلفاً به', 'Het aanbevolene is opgedragen maar geen taklīf', 'من ناحية الأمر هو مأمور به (عند الأكثر)، ومن ناحية التكليف ليس مكلفاً به عند المصنف، خلافاً للجمهور الذين جعلوه من أقسام التكليف.', 'Als gebod is het opgedragen (volgens de meesten); als taklīf niet, volgens de auteur, terwijl de meerderheid het wel als soort taklīf ziet.'],
    [13, 'الخلاف في المندوب والمباح مبني على تعريف التكليف', 'Het verschil hangt af van de definitie van taklīf', 'إن كان التكليف إلزام ما فيه كلفة لم يكن المندوب والمباح مكلفاً بهما، وإن كان طلبه (كما قال الباقلاني) دخلا.', 'Is taklīf "iets lastigs bindend opleggen", dan vallen aanbevolen en toegestaan erbuiten; is het "vragen" (al-Bāqillānī), dan vallen ze erbinnen.'],
    [15, 'لماذا رفضت المعتزلة الواجب المخير', 'Waarom de Muʿtazila de keuzeplicht afwezen', 'رأوا جعله من الواجب تناقضاً، لأن الأصل في الواجب الإلزام، والتخيير محله الاستحباب.', 'Ze zagen het als een tegenspraak: een plicht bindt, en keuze hoort bij het aanbevolene.'],
    [15, 'الحرام المخير لا يصح لغة عند قوم', 'Het keuzeverbod kan taalkundig niet, volgens sommigen', 'قالوا: لم ترد به اللغة، فإن لم يرد لغة لم يقع شرعاً.', 'Ze zeggen dat de taal het niet kent, en wat de taal niet kent, komt in de sharīʿa niet voor.'],
    [16, 'تعيين البعض في فرض الكفاية', 'Welke "sommigen"?', 'القول بأنه على البعض يجرّ إلى خلاف ليس عند القائلين بالكل: أي بعض؟ مبهم، أو معين عند الله، أو من قام به.', 'Wie zegt "op sommigen" moet uitleggen welke: onbepaald, bij Allah bekend, of wie het doet. Dat probleem hebben wie "op allen" zeggen niet.'],
    [18, 'الحج لا يتفرع على الواجب الموسع', 'De ḥajj volgt niet de regel van de ruime plicht', 'لأن وقته العمر ولا يعرف أحد آخر عمره، بخلاف الصلاة التي يحدد وقتها دخول الأخرى.', 'Want zijn tijd is het hele leven en niemand weet wanneer dat eindigt; anders dan het gebed, waarvan de tijd eindigt bij het volgende.'],
    [19, 'كراهة التنزيه هي موضع الخلاف', 'Het verschil gaat over lichte afkeuring', 'إن لم يتناول الأمر المطلق كراهة التنزيه فكراهة التحريم من باب أولى، وقد اتفقوا عليها.', 'Als het algemene gebod de lichte afkeuring niet omvat, dan de strenge zeker niet; daarover zijn ze het eens.']
  ],
  rules: [
    [13, 'جائز الترك ليس بواجب', 'Wat men mag laten, is niet verplicht', 'لأن حقيقة الوجوب الإلزام وعدم جواز الترك.', 'Want plicht betekent binding en niet mogen laten.'],
    [14, 'الوجوب إذا نُسخ بقي الجواز', 'Wordt een plicht opgeheven, dan blijft toelaatbaarheid', 'الجواز: عدم الحرج.', 'Toelaatbaarheid: geen bezwaar.'],
    [18, 'ما لا يتم الواجب إلا به فهو واجب', 'Wat nodig is om een plicht te vervullen, is zelf verplicht', 'عند الأكثر، بشرط أن يكون مقدوراً وأن يكون الواجب مطلقاً.', 'Volgens de meesten, mits het binnen het vermogen ligt en de plicht onvoorwaardelijk is.', 'الطهارة للصلاة.', 'Reinheid voor het gebed.'],
    [19, 'إذا تعذر ترك المحرم إلا بترك غيره وجب تركهما', 'Kan men het verbodene alleen laten door ook iets anders te laten, dan moet men beide laten', '', '', 'اختلاط المذكاة بالميتة.', 'Een geslacht schaap verward met een kadaver.'],
    [17, 'سنة الكفاية كفرضها', 'De collectieve sunna volgt de collectieve plicht', '', '', 'رد السلام من الجماعة.', 'De groet beantwoorden namens een groep.']
  ],
  disputes: [
    { page: 11, q: ['هل يُعرَّف العلم؟', 'Kan men kennis definiëren?'], views: [['الرازي: ضروري، ثم عرّفه بحكم الذهن الجازم المطابق لموجب', 'Ar-Rāzī: het is vanzelfsprekend, maar hij definieert het toch'], ['قيل: ضروري فلا يحد', 'Sommigen: vanzelfsprekend, dus geen definitie'], ['إمام الحرمين: عسر حده', 'Imām al-Ḥaramayn: moeilijk te definiëren'], ['المصنف: الإمساك عن تعريفه، كالباقلاني والغزالي', 'De auteur: ervan afzien, zoals al-Bāqillānī en al-Ghazālī']], preferred: ['الإمساك عن تعريفه', 'Er niet aan beginnen'], fruit: ['تعريف الرازي من تعريفات الأصوليين، والراجح عنده أنه ضروري، فلا تناقض', 'De definitie van ar-Rāzī is die van de uṣūlī’s; voor hem zelf is kennis vanzelfsprekend; geen tegenspraak'] },
    { page: 13, q: ['هل المندوب مأمور به ومكلف به؟', 'Is het aanbevolene opgedragen en een taklīf?'], views: [['الأكثر: مأمور به', 'De meesten: opgedragen'], ['المصنف: ليس مكلفاً به', 'De auteur: geen taklīf'], ['الجمهور: من أقسام التكليف', 'De meerderheid: een soort taklīf'], ['الباقلاني: التكليف طلب ما فيه كلفة، فيدخل المندوب والمباح', 'Al-Bāqillānī: taklīf is "vragen", dus vallen ze erbinnen']] },
    { page: 15, q: ['ما الواجب في الواجب المخير؟', 'Wat is verplicht bij de keuzeplicht?'], views: [['واحد لا بعينه', 'Eén, niet een bepaalde'], ['الكل ويسقط بواحد', 'Alles, één volstaat'], ['معين عند الله (قول التراجم)', 'Vast bij Allah (qawl at-tarājum)'], ['ما يختاره المكلف', 'Wat de mens kiest']], preferred: ['الأول، وحكى القاضي أبو بكر الإجماع عليه', 'De eerste; al-Qāḍī Abū Bakr noemt er consensus over'] },
    { page: 16, q: ['هل فرض الكفاية أفضل من فرض العين؟', 'Is de collectieve plicht beter dan de individuele?'], views: [['المصنف: فرض العين أفضل', 'De auteur: de individuele'], ['الأستاذ وإمام الحرمين وأبوه: فرض الكفاية أفضل', 'Al-Isfarāyīnī, al-Juwaynī en zijn vader: de collectieve']] },
    { page: 16, q: ['على من يجب فرض الكفاية؟', 'Op wie rust de collectieve plicht?'], views: [['المصنف والرازي: على البعض', 'De auteur en ar-Rāzī: op sommigen'], ['والده والجمهور: على الكل ويسقط بفعل البعض', 'Zijn vader en de meerderheid: op allen, het vervalt als sommigen het doen']], preferred: ['المختار عند المصنف: البعض', 'De keuze van de auteur: sommigen'] },
    { page: 18, q: ['من أخّر مع ظن الموت ثم عاش وفعل في الوقت: أداء أم قضاء؟', 'Wie uitstelde met verwachting van dood, maar leeft en het binnen de tijd doet: adāʾ of qaḍāʾ?'], views: [['الجمهور: أداء، اعتباراً بآخر الوقت الشرعي', 'Meerderheid: adāʾ, gekeken naar het sharʿī-einde'], ['القاضيان الباقلاني والحسين: قضاء، اعتباراً بآخر الوقت في حقه', 'De twee qāḍī’s (al-Bāqillānī en Ḥusayn): qaḍāʾ, gekeken naar het einde voor hem']] },
    { page: 18, q: ['ما لا يتم الواجب إلا به هل هو واجب؟', 'Is wat nodig is voor een plicht zelf verplicht?'], views: [['الأكثر: واجب مطلقاً', 'De meesten: altijd'], ['الأقلية: ليس بواجب', 'Een minderheid: niet'], ['واجب إن كان سبباً', 'Alleen als het een oorzaak is'], ['إمام الحرمين: إن كان شرطاً شرعياً', 'Imām al-Ḥaramayn: alleen als het een sharʿī-voorwaarde is']] },
    { page: 19, q: ['هل يتناول مطلق الأمر المكروه؟', 'Omvat een algemeen gebod het afgekeurde?'], views: [['المؤلف: لا يتناوله', 'De auteur: nee'], ['الحنفية: يتناول المجزئ ولو مع الكراهة', 'Ḥanafieten: het omvat wat volstaat, ook met afkeuring']], fruit: ['صحة الطواف بغير وضوء والصلاة في أوقات النهي', 'De geldigheid van ṭawāf zonder wuḍūʾ en van gebed op verboden tijden'] }
  ],
  pitfalls: [
    [11, 'الخلط بين العلم والاعتقاد الصحيح', 'Kennis en een juiste overtuiging verwarren', 'كلاهما جازم مطابق، لكن العلم لا يقبل التغير، والاعتقاد يقبله.', 'Beide zijn stellig en kloppen, maar kennis kan niet veranderen en een overtuiging wel.'],
    [11, 'عدّ التقليد علماً', 'Taqlīd als kennis rekenen', 'قيد "لموجب" في تعريف العلم يُخرج التقليد.', '"Op grond van iets" in de definitie sluit taqlīd uit.'],
    [14, 'القول بأن الواجب المنسوخ يصير مباحاً فقط', 'Zeggen dat een opgeheven plicht alleen "toegestaan" wordt', 'الأصح أنه يبقى الجواز (عدم الحرج)، ويحمل على ما قويت قرينته من المندوب والمباح والمكروه.', 'Volgens het juiste blijft toelaatbaarheid, en men kiest tussen aanbevolen, toegestaan en afgekeurd naar de aanwijzingen.'],
    [18, 'اعتبار النصاب والاستطاعة من مقدمة الواجب', 'Niṣāb en vermogen als "wat nodig is voor een plicht" zien', 'هما سببا الوجوب في الواجب المقيد، فلا يجب تحصيلهما؛ والمسألة في الواجب المطلق.', 'Dat zijn voorwaarden waarvan de plicht zelf afhangt; je hoeft ze niet te verwerven. De regel gaat over onvoorwaardelijke plichten.'],
    [17, 'القول إن من أخّر الصلاة إلى آخر وقتها قضى', 'Zeggen dat wie aan het eind van de tijd bidt, inhaalt', 'جميع الوقت وقت أداء عند الجمهور، والقضاء يكون خارج الوقت.', 'Volgens de meerderheid is de hele tijd tijd van adāʾ; qaḍāʾ is buiten de tijd.']
  ],
  ayat: [
    [13, 'فعدة من أيام أخر', 'استدل به الرازي على أن على المسافر والمريض أحد الشهرين.', 'Ar-Rāzī: de reiziger en de zieke moeten een van twee maanden vasten.'],
    [16, 'ولتكن منكم أمة يدعون إلى الخير', 'مأخذ القائلين بأن فرض الكفاية على البعض.', 'Bewijs voor wie zegt dat de collectieve plicht op sommigen rust.'],
    [16, 'فلولا نفر من كل فرقة', 'مأخذ ثانٍ لنفس القول.', 'Tweede bewijs voor dezelfde mening.'],
    [19, 'وليطوفوا بالبيت العتيق', 'مثال للأمر المطلق.', 'Voorbeeld van een algemeen gebod.'],
    [19, 'وأقيموا الصلاة', 'مثال للأمر المطلق.', 'Voorbeeld van een algemeen gebod.']
  ],
  hadith: [],
  persons: [
    ['fakhr-ad-din-ar-razi', 'text', [11, 13, 16], 'عرّف العلم في المحصول، وقال في الصوم: عليه أحد الشهرين، ورأى فرض الكفاية على البعض.', 'Definieerde kennis in al-Maḥṣūl, zei over het vasten "een van twee maanden" en zag de collectieve plicht als op sommigen.'],
    ['al-juwayni', 'text', [11, 12, 16, 19], 'قال: العلم عسر حده، والمكروه ليس قبيحاً ولا حسناً، وفضّل فرض الكفاية، وقال بوجوب الشرط الشرعي فقط.', 'Zei dat kennis moeilijk te definiëren is, dat het afgekeurde goed noch lelijk is, vond de collectieve plicht beter en alleen de sharʿī-voorwaarde verplicht.'],
    ['al-baqillani', 'text', [12, 14, 18], 'أمسك عن تعريف العلم، وعرّف التكليف بطلب ما فيه كلفة، وهو أحد القاضيين في مسألة من أخّر مع ظن الموت.', 'Zag af van een definitie van kennis, definieerde taklīf als "vragen" en is een van de twee qāḍī’s bij wie uitstelde met verwachting van dood.'],
    ['al-ghazali', 'text', [12, 18], 'أمسك عن تعريف العلم، وحكى إجماع السلف أن من أخّر مع ظن السلامة لا يموت عاصياً.', 'Zag af van een definitie van kennis en noemde consensus dat wie veiligheid verwachtte niet als zondaar sterft.'],
    ['al-baydawi', 'text', [12], 'تعريفه للحسن (ما لم يُنه عنه) أدق.', 'Zijn definitie van goed ("wat niet verboden is") is preciezer.'],
    ['abu-hashim-al-jubbai', 'text', [15], 'قال في الواجب المخير: الكل ويسقط بواحد.', 'Zei over de keuzeplicht: alles, en één volstaat.'],
    ['taqi-ad-din-as-subki', 'text', [15, 16], 'قال عن قول التراجم: لم يقل به قائل، ورأى فرض الكفاية على الكل.', 'Zei dat niemand qawl at-tarājum hield, en zag de collectieve plicht als op allen.'],
    ['abu-ishaq-al-isfarayini', 'text', [16], 'زعم أن فرض الكفاية أفضل من فرض العين.', 'Vond de collectieve plicht beter dan de individuele.'],
    ['al-karkhi', 'text', [17, 18], 'صاحب مذهب المراعاة في الواجب الموسع.', 'Grondlegger van madhhab al-murāʿāt bij de ruime plicht.'],
    ['al-qadi-husayn', 'text', [18], 'أحد القاضيين: فعل من أخّر مع ظن الموت ثم عاش قضاء.', 'Een van de twee qāḍī’s: wie met verwachting van dood uitstelde en toch leefde, doet qaḍāʾ.']
  ],
  review: [
    ['الدليل يوصل بالنظر الصحيح إلى مطلوب خبري.', 'Een bewijs leidt door juist nadenken tot een uitspraak.'],
    ['الحد جامع مانع، مطرد منعكس.', 'Een definitie is omvattend en uitsluitend, consequent en omkeerbaar.'],
    ['التصور إدراك بلا حكم، والتصديق بحكم.', 'Taṣawwur is zonder oordeel, taṣdīq met oordeel.'],
    ['الظن راجح، والوهم مرجوح، والشك تساوٍ.', 'Vermoeden is sterker, wahm zwakker, twijfel gelijk.'],
    ['الجهل بسيط ومركب.', 'Onwetendheid is eenvoudig of samengesteld.'],
    ['التكليف إلزام ما فيه كلفة لا طلبه.', 'Taklīf is binden, niet alleen vragen.'],
    ['الواجب المخير: واحد لا بعينه.', 'Keuzeplicht: één, niet een bepaalde.'],
    ['فرض الكفاية على البعض عند المصنف، ويتعين بالشروع.', 'De collectieve plicht rust volgens de auteur op sommigen en wordt bindend door te beginnen.'],
    ['جميع وقت الواجب الموسع وقت أداء.', 'De hele tijd van een ruime plicht is tijd van adāʾ.'],
    ['ما لا يتم الواجب المطلق إلا به واجب عند الأكثر.', 'Wat nodig is voor een onvoorwaardelijke plicht, is volgens de meesten verplicht.'],
    ['مطلق الأمر لا يتناول المكروه.', 'Een algemeen gebod omvat het afgekeurde niet.']
  ],
  quiz: [
    { type: 'mc', page: 11, q: ['الإدراك الجازم القابل للتغير غير المطابق للواقع هو:', 'Stellige, veranderlijke instemming die niet klopt, is:'], options: [['الاعتقاد الفاسد', 'العلم', 'الظن', 'الشك'], ['een onjuiste overtuiging', 'kennis', 'vermoeden', 'twijfel']], answer: 0, explain: ['الصحيح ما طابق، والفاسد ما لم يطابق.', 'Juist als het klopt, onjuist als het niet klopt.'] },
    { type: 'mc', page: 11, q: ['أي قيد في تعريف الرازي للعلم يخرج التقليد؟', 'Welk deel van ar-Rāzīs definitie sluit taqlīd uit?'], options: [['لموجب', 'الجازم', 'المطابق', 'حكم الذهن'], ['op grond van iets', 'stellig', 'dat klopt', 'oordeel van de geest']], answer: 0, explain: ['الموجب: حس أو ضرورة أو عادة.', 'Zintuig, noodzaak of gewoonte.'] },
    { type: 'tf', page: 12, q: ['الجهل المركب هو انتفاء العلم بالمقصود.', 'Samengestelde onwetendheid is het ontbreken van kennis.'], answer: 1, explain: ['هذا البسيط؛ المركب تصور المعلوم على خلاف هيئته.', 'Dat is de eenvoudige; de samengestelde is iets verkeerd voorstellen.'] },
    { type: 'mc', page: 13, q: ['التكليف عند الجمهور:', 'Taklīf volgens de meerderheid:'], options: [['إلزام ما فيه كلفة', 'طلب ما فيه كلفة', 'التخيير', 'الإذن'], ['iets lastigs bindend opleggen', 'iets lastigs vragen', 'keuze', 'toestemming']], answer: 0, explain: ['والطلب قول الباقلاني.', '"Vragen" is de mening van al-Bāqillānī.'] },
    { type: 'mc', page: 15, q: ['من فعل خصال الكفارة كلها معاً، فالواجب عند بعضهم:', 'Wie alle boete-opties tegelijk doet, volgens sommigen is de plicht:'], options: [['أعلاها', 'أدناها', 'أولها', 'لا شيء منها'], ['de hoogste', 'de laagste', 'de eerste', 'geen ervan']], answer: 0, explain: ['تعلقاً بكرم الله؛ ومن تركها كلها عوقب على أدناها.', 'Uit Allahs vrijgevigheid; wie alles laat, wordt voor de laagste gestraft.'] },
    { type: 'tf', page: 16, q: ['المصنف يرى أن فرض الكفاية أفضل من فرض العين.', 'De auteur vindt de collectieve plicht beter dan de individuele.'], answer: 1, explain: ['يرى أفضلية فرض العين؛ والقائلون بالعكس الأستاذ وإمام الحرمين وأبوه.', 'Hij vindt de individuele beter; het omgekeerde zeggen al-Isfarāyīnī, al-Juwaynī en zijn vader.'] },
    { type: 'mc', page: 17, q: ['رد السلام من الجماعة على واحد مثال لـ:', 'De groet beantwoorden namens een groep is een voorbeeld van:'], options: [['سنة الكفاية', 'فرض العين', 'الواجب المخير', 'الواجب الموسع'], ['collectieve sunna', 'individuele plicht', 'keuzeplicht', 'ruime plicht']], answer: 0, explain: ['ومثله تشميت العاطس.', 'Net als reageren op wie niest.'] },
    { type: 'mc', page: 18, q: ['من أخّر الواجب الموسع وهو يظن الموت قبل آخر الوقت:', 'Wie een ruime plicht uitstelt en verwacht vóór het einde te sterven:'], options: [['عصى', 'لا شيء عليه', 'فعله قضاء دائماً', 'سقط عنه'], ['zondigt', 'heeft niets', 'doet altijd qaḍāʾ', 'is ervan vrij']], answer: 0, explain: ['لضيق الوقت في حقه.', 'Want voor hem is de tijd krap geworden.'] },
    { type: 'mc', page: 19, q: ['قول إمام الحرمين في ما لا يتم الواجب إلا به:', 'Imām al-Ḥaramayn over wat nodig is voor een plicht:'], options: [['واجب إن كان شرطاً شرعياً', 'واجب مطلقاً', 'واجب إن كان سبباً', 'ليس بواجب'], ['verplicht als het een sharʿī-voorwaarde is', 'altijd verplicht', 'verplicht als het een oorzaak is', 'niet verplicht']], answer: 0, explain: ['لا عقلياً ولا عادياً.', 'Niet als het een rationele of gewoontelijke voorwaarde is.'] },
    { type: 'tf', page: 19, q: ['لا تصح الصلاة في الأوقات المكروهة ولو كانت الكراهة كراهة تنزيه، على الصحيح.', 'Het gebed op afgekeurde tijden is volgens het juiste ongeldig, ook bij lichte afkeuring.'], answer: 0, explain: ['لأن مطلق الأمر لا يتناول المكروه.', 'Want een algemeen gebod omvat het afgekeurde niet.'] }
  ]
})
