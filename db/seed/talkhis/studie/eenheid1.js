// Hoofdstukkaart eenheid 1 van تلخيص جمع الجوامع: ترجمة المصنف ومقدمات الحكم الشرعي (p. 1–9).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p001–p009.html).
import { kaart } from './kaart.js'

export default kaart({
  unit: 1,
  subtitle: ['أربعة فصول: ترجمة السبكي، والمقدمات، والحكم التكليفي، والحكم الوضعي', 'Vier onderdelen: as-Subkī, de inleiding, het taklīfī- en het waḍʿī-oordeel'],
  summary: [
    'تبدأ المذكرات بترجمة تاج الدين السبكي (ت 771هـ)، ثم تعريف أصول الفقه والأصولي والفقه والحكم، ثم مسألة الحسن والقبح ولا حكم قبل الشرع، ثم أقسام الحكم التكليفي الستة: الإيجاب والندب والتحريم والكراهة وخلاف الأولى والإباحة، ثم الحكم الوضعي: السبب والشرط والمانع والصحة والفساد، ومعها الأداء والقضاء والإعادة والرخصة والعزيمة.',
    'De notities openen met een korte biografie van Tāj ad-Dīn as-Subkī (gest. 771 AH). Daarna volgen de definities van uṣūl al-fiqh, de uṣūlī, fiqh en het oordeel (ḥukm), de kwestie van goed en lelijk en "geen oordeel vóór de sharīʿa", de zes soorten taklīfī-oordeel (verplicht, aanbevolen, verboden, afkeurenswaardig, khilāf al-awlā en toegestaan) en het waḍʿī-oordeel: oorzaak, voorwaarde, belemmering, geldig en ongeldig, met adāʾ, qaḍāʾ, iʿāda, rukhṣa en ʿazīma.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 1 إلى 9 من المذكرات.', 'Van bladzijde 1 tot 9 van de notities.'],
    root: [0, 'مقدمات الحكم الشرعي', 'Inleiding: het sharʿī-oordeel', 'الوحدة الأولى', 'Eenheid 1'],
    nodes: [
      [1, 'ترجمة السبكي', 'Biografie van as-Subkī', 'ص 1–2', 'p. 1–2', [['مولده وأسرته', 'geboorte en familie'], ['شيوخه', 'zijn leraren'], ['محنته ووفاته', 'beproeving en dood']]],
      [3, 'التعريفات', 'Definities', 'ص 3', 'p. 3', [['أصول الفقه', 'uṣūl al-fiqh'], ['الأصولي', 'de uṣūlī'], ['الفقه', 'fiqh'], ['الحكم', 'het oordeel']]],
      [3, 'الحسن والقبح', 'Goed en lelijk', 'ص 3–4', 'p. 3–4', [['ثلاثة معانٍ', 'drie betekenissen'], ['لا حكم قبل الشرع', 'geen oordeel vóór de sharīʿa']]],
      [5, 'الحكم التكليفي', 'Het taklīfī-oordeel', 'ص 5–6', 'p. 5–6', [['إيجاب، ندب، تحريم', 'verplicht, aanbevolen, verboden'], ['كراهة، خلاف الأولى، إباحة', 'afgekeurd, khilāf al-awlā, toegestaan']]],
      [5, 'الحكم الوضعي', 'Het waḍʿī-oordeel', 'ص 5–8', 'p. 5–8', [['السبب والشرط والمانع', 'oorzaak, voorwaarde, belemmering'], ['الصحة والبطلان', 'geldig en ongeldig']]],
      [8, 'الأداء والقضاء والإعادة', 'Adāʾ, qaḍāʾ en iʿāda', 'ص 8–9', 'p. 8–9', [['الوقت', 'de tijd'], ['الرخصة والعزيمة', 'rukhṣa en ʿazīma']]]
    ]
  },
  points: [
    [1, 'السبكي: عبد الوهاب بن علي تاج الدين، وُلد بسبك بمصر سنة 727هـ (وقيل 728هـ)، وتوفي بالطاعون سنة 771هـ وعمره 43 سنة.', 'As-Subkī: ʿAbd al-Wahhāb ibn ʿAlī Tāj ad-Dīn, geboren in Subk (Egypte) in 727 AH (of 728), gestorven aan de pest in 771 AH, 43 jaar oud.'],
    [3, 'أصول الفقه: دلائل الفقه الإجمالية، لا التفصيلية التي موضعها الفقه.', 'Uṣūl al-fiqh: de algemene bewijzen van de fiqh, niet de gedetailleerde bewijzen; die horen bij de fiqh zelf.'],
    [3, 'الحكم: خطاب الله المتعلق بفعل المكلف من حيث إنه مكلف؛ ومن ثم لا حكم إلا لله.', 'Het oordeel (ḥukm): de aanspraak van Allah die betrekking heeft op de handeling van de verantwoordelijke persoon als verantwoordelijke; daarom oordeelt alleen Allah.'],
    [4, 'لا حكم قبل ورود الشرع عند الأشاعرة، والصحيح عدم الخوض في هذا لانعدام ثمرته كما قال الشاطبي.', 'Vóór de komst van de sharīʿa is er volgens de Ashʿarieten geen oordeel; het juiste is volgens de notities hier niet op in te gaan, omdat het geen vrucht heeft (ash-Shāṭibī).'],
    [5, 'الحكم التكليفي ستة أقسام: الإيجاب والندب والتحريم والكراهة وخلاف الأولى والإباحة.', 'Het taklīfī-oordeel heeft zes soorten: verplichting, aanbeveling, verbod, afkeuring, khilāf al-awlā en toestemming.'],
    [5, 'التكليفي يأتي الخطاب فيه مقتضياً لفعل أو ترك أو تخيير، والوضعي يرد مقرراً لسبب أو شرط أو مانع.', 'In het taklīfī-oordeel vraagt de tekst om doen, laten of keuze; het waḍʿī-oordeel legt een oorzaak, voorwaarde of belemmering vast.'],
    [8, 'البطلان والفساد مترادفان عند الجمهور، وفرّق أبو حنيفة: الباطل منهي عنه لأصله، والفاسد لوصفه ويقبل التصحيح.', 'Bāṭil en fāsid zijn bij de meerderheid synoniem; Abū Ḥanīfa onderscheidt: bāṭil is verboden om zijn kern, fāsid om een eigenschap en kan hersteld worden.'],
    [9, 'الرخصة: تغير الحكم الشرعي إلى سهولة لعذر مع قيام السبب للحكم الأصلي، وإلا فعزيمة.', 'Rukhṣa: een sharʿī-oordeel dat naar verlichting verandert wegens een excuus, terwijl de oorzaak van het oorspronkelijke oordeel blijft; anders is het ʿazīma.']
  ],
  terms: [
    ['أصول الفقه', 'uṣūl al-fiqh', 3, 'دلائل الفقه الإجمالية، وقيل معرفتها.', 'De algemene bewijzen van de fiqh; volgens een andere mening: de kennis ervan.', 'لا التفصيلية التي موضعها الفقه، وإنما قواعده التي يبنى عليها.', 'Niet de gedetailleerde bewijzen (die horen bij de fiqh), maar de regels waarop de fiqh gebouwd wordt.'],
    ['الأصولي', 'al-uṣūlī', 3, 'العارف بدلائل الفقه الإجمالية وبطرق استفادتها ومستفيدها.', 'Wie de algemene bewijzen kent, de manieren om eruit af te leiden (afwegen) en wie afleidt: de mujtahid.'],
    ['الفقه', 'al-fiqh', 3, 'العلم بالأحكام الشرعية العملية المكتسب من أدلتها التفصيلية.', 'Kennis van de praktische sharʿī-oordelen, verkregen uit hun gedetailleerde bewijzen.', 'الشرعية تخرج اللغوية والعقلية، والعملية تخرج العقدية.', '"Sharʿī" sluit taalkundige en rationele oordelen uit, "praktisch" sluit geloofsleer uit.'],
    ['الحكم', 'al-ḥukm', 3, 'خطاب الله المتعلق بفعل المكلف من حيث إنه مكلف.', 'De aanspraak van Allah over de handeling van de verantwoordelijke (volwassen, verstandige) persoon, als verantwoordelijke.'],
    ['الحسن والقبح', 'al-ḥusn wa-l-qubḥ', 3, 'ملاءمة الطبع ومنافرته، وصفة الكمال والنقص: عقليان. وترتب الذم عاجلاً والعقاب آجلاً: شرعي.', 'Wat bij de natuur past of afstoot en wat volmaakt of gebrekkig is: dat kent het verstand. Lof of blaam nu en straf later: dat bepaalt alleen de sharīʿa.', 'خلافاً للمعتزلة الذين جعلوا القسم الثالث عقلياً أيضاً.', 'Tegen de Muʿtazila in, die ook het derde soort aan het verstand toeschreven.'],
    ['الإيجاب', 'al-ījāb', 5, 'اقتضاء الخطاب الفعل اقتضاءً جازماً.', 'De tekst vraagt om een handeling op stellige, bindende wijze.', 'مثاله: الصلاة المفروضة.', 'Voorbeeld: het verplichte gebed.'],
    ['الندب', 'an-nadb', 5, 'اقتضاء الخطاب الفعل اقتضاءً غير جازم.', 'De tekst vraagt om een handeling, niet bindend.', 'مثاله: السنن الرواتب.', 'Voorbeeld: de vaste sunna-gebeden.'],
    ['التحريم', 'at-taḥrīm', 5, 'اقتضاء الخطاب الترك اقتضاءً جازماً.', 'De tekst vraagt stellig om iets na te laten.', 'مثاله: القتل والزنى.', 'Voorbeeld: doden en zinā.'],
    ['الكراهة', 'al-karāha', 5, 'اقتضاء الخطاب الترك اقتضاءً غير جازم بنهي مخصوص.', 'De tekst vraagt niet-bindend om nalaten, met een specifiek verbod.', 'مثاله: ترك تحية المسجد، لحديث «إذا دخل أحدكم المسجد فلا يجلس حتى يصلي ركعتين».', 'Voorbeeld: het groetgebed van de moskee overslaan, vanwege de hadith over twee rakʿa’s vóór het zitten.'],
    ['خلاف الأولى', 'khilāf al-awlā', 5, 'اقتضاء الخطاب الترك اقتضاءً غير جازم بنهي غير مخصوص.', 'Niet-bindend verzoek om nalaten, zonder specifiek verbod (alleen een algemeen).', 'مثاله: ترك السنن الرواتب.', 'Voorbeeld: de vaste sunna-gebeden laten.'],
    ['الإباحة', 'al-ibāḥa', 5, 'التخيير بين الفعل والترك.', 'Vrije keuze tussen doen en laten.', 'مثاله: المباحات كاللباس والطعام.', 'Voorbeeld: kleding en eten.'],
    ['الحكم الوضعي', 'al-ḥukm al-waḍʿī', 5, 'خطاب يرد مقرراً لسبب أو شرط أو مانع أو صحة أو فساد.', 'Een oordeel dat een oorzaak, voorwaarde, belemmering, geldigheid of ongeldigheid vastlegt.', 'سُمي وضعياً لأن المكلف لم يُخاطب به، تمييزاً له عن التكليفي.', 'Het heet waḍʿī omdat de verantwoordelijke er niet zelf mee aangesproken wordt; zo onderscheidt het zich van het taklīfī-oordeel.'],
    ['السبب', 'as-sabab', 6, 'ما يضاف الحكم إليه للتعلق به من حيث إنه معرّف للحكم.', 'Waaraan het oordeel wordt toegeschreven, omdat het oordeel ermee verbonden is, als kenteken van het oordeel.', 'وجه التعريف بالحكم لا إيجابه.', 'Het maakt het oordeel kenbaar, het veroorzaakt het niet.'],
    ['المانع', 'al-māniʿ', 7, 'الوصف الوجودي الظاهر المنضبط المعرّف نقيض الحكم.', 'Een bestaande, zichtbare en afgebakende eigenschap die het tegendeel van het oordeel kenbaar maakt.', 'كالأبوة في القصاص: مانعة منه عند الجمهور.', 'Zoals vaderschap bij qiṣāṣ: volgens de meerderheid een belemmering.'],
    ['الصحة', 'aṣ-ṣiḥḥa', 7, 'موافقة الفعل ذي الوجهين الشرع.', 'Overeenstemming van een handeling die twee kanten kan hebben met de sharīʿa.', 'وقيل في العبادة: إسقاط القضاء.', 'Bij aanbidding ook: wat de inhaalplicht laat vervallen.'],
    ['الإجزاء', 'al-ijzāʾ', 7, 'كفاية العبادة في سقوط التعبد، وقيل إسقاط القضاء.', 'Dat de aanbidding volstaat zodat de plicht vervalt; volgens een andere mening: dat er niets in te halen is.'],
    ['البطلان', 'al-buṭlān', 8, 'مخالفة ذي الوجهين الشرع، وما لا يسقط القضاء؛ وهو الفساد.', 'Strijd van een handeling met twee kanten met de sharīʿa, of wat de inhaalplicht niet laat vervallen; synoniem met fasād.'],
    ['الأداء', 'al-adāʾ', 8, 'فعل بعض ما دخل وقته قبل خروجه، وقيل فعل كله.', 'Een deel verrichten van wat binnen zijn tijd valt, vóórdat die tijd voorbij is; volgens een andere mening: alles.', 'خاص بالعبادات المؤقتة.', 'Alleen bij aanbiddingen met een vaste tijd.'],
    ['المؤدَّى', 'al-muʾaddā', 8, 'ما فُعل؛ فالأداء الفعل والمؤدى المفعول.', 'Wat verricht is: adāʾ is het verrichten, muʾaddā het verrichte.'],
    ['الوقت', 'al-waqt', 9, 'الزمان المقدر للأداء شرعاً مطلقاً، موسعاً أو مضيقاً.', 'De door de sharīʿa vastgestelde tijd voor adāʾ, ruim of krap.'],
    ['القضاء', 'al-qaḍāʾ', 9, 'فعل كل ما خرج وقت أدائه استدراكاً لما سبق له مقتضٍ مطلقاً.', 'Alles verrichten waarvan de tijd voorbij is, om in te halen waarvoor eerder een verzoek gold, om welke reden ook.'],
    ['الإعادة', 'al-iʿāda', 9, 'فعل العبادة ثانياً في وقت الأداء، قيل لخلل وقيل لعذر.', 'Een aanbidding opnieuw verrichten binnen haar tijd, wegens een gebrek of een excuus.', 'الخلل ما يخل بالإجزاء فتجب، والعذر ما يخل بالكمال فتستحب.', 'Een gebrek tast de geldigheid aan (herhalen is plicht); een excuus alleen de volmaaktheid (herhalen is aanbevolen).'],
    ['الرخصة', 'ar-rukhṣa', 9, 'الحكم الشرعي إن تغير إلى سهولة لعذر مع قيام السبب للحكم الأصلي.', 'Het sharʿī-oordeel als het naar verlichting verandert wegens een excuus, terwijl de oorzaak van het oorspronkelijke oordeel blijft.', 'كقصر الصلاة والأكل في رمضان في السفر.', 'Zoals het inkorten van het gebed en eten in Ramadan op reis.'],
    ['العزيمة', 'al-ʿazīma', 10, 'ما تخلف فيه أحد قيود الرخصة.', 'Wat niet aan alle voorwaarden van de rukhṣa voldoet.']
  ],
  diagrams: [
    {
      type: 'tree',
      title: ['أقسام الحكم الشرعي', 'Soorten sharʿī-oordelen'],
      intro: ['التكليفي ستة والوضعي خمسة كما في المتن.', 'Zes taklīfī en vijf waḍʿī, zoals in de grondtekst.'],
      root: [5, 'الحكم الشرعي', 'Het sharʿī-oordeel'],
      nodes: [
        [5, 'التكليفي: اقتضاء أو تخيير', 'Taklīfī: verzoek of keuze', '', '', [
          [5, 'طلب الفعل جازماً: إيجاب', 'Stellig doen: verplichting'],
          [5, 'طلب الفعل غير جازم: ندب', 'Niet-stellig doen: aanbeveling'],
          [5, 'طلب الترك جازماً: تحريم', 'Stellig laten: verbod'],
          [5, 'طلب الترك غير جازم بنهي مخصوص: كراهة', 'Niet-stellig laten, specifiek verbod: afkeuring'],
          [5, 'طلب الترك غير جازم بنهي غير مخصوص: خلاف الأولى', 'Niet-stellig laten, algemeen verbod: khilāf al-awlā'],
          [5, 'التخيير: إباحة', 'Keuze: toestemming']
        ]],
        [5, 'الوضعي: يرد مقرراً', 'Waḍʿī: legt vast', '', '', [
          [6, 'السبب', 'Oorzaak'], [5, 'الشرط', 'Voorwaarde'], [7, 'المانع', 'Belemmering'], [7, 'الصحيح', 'Geldig'], [8, 'الفاسد', 'Ongeldig']
        ]]
      ],
      page: 5
    },
    {
      type: 'compare',
      title: ['الأداء والقضاء والإعادة', 'Adāʾ, qaḍāʾ en iʿāda'],
      intro: ['ثلاثتها تدور على الوقت.', 'Alle drie draaien om de tijd.'],
      columns: [['الأداء', 'Adāʾ'], ['القضاء', 'Qaḍāʾ'], ['الإعادة', 'Iʿāda']],
      rows: [
        { label: ['ما يُفعل', 'Wat'], cells: [['بعض العبادة (وقيل كلها)', 'een deel (of alles)'], ['كل العبادة (وقيل بعضها)', 'alles (of een deel)'], ['العبادة مرة ثانية', 'de aanbidding opnieuw']] },
        { label: ['متى', 'Wanneer'], cells: [['قبل خروج الوقت', 'vóór het einde van de tijd'], ['بعد خروج وقت الأداء', 'na de tijd van adāʾ'], ['في وقت الأداء', 'binnen de tijd van adāʾ']] },
        { label: ['لماذا', 'Waarom'], cells: [['امتثال في الوقت', 'gehoorzamen op tijd'], ['استدراك ما فات', 'inhalen wat gemist is'], ['لخلل أو لعذر', 'wegens gebrek of excuus']] }
      ],
      page: 8
    },
    {
      type: 'steps',
      title: ['قيود الرخصة الأربعة', 'De vier voorwaarden van de rukhṣa'],
      intro: ['إن تخلف قيد منها فهو عزيمة.', 'Ontbreekt er één, dan is het ʿazīma.'],
      nodes: [
        [9, 'أن يتغير الحكم', 'Het oordeel verandert', 'يخرج ما بقي على أصل تشريعه', 'wat bij zijn oorspronkelijke regeling bleef valt af'],
        [9, 'إلى سهولة', 'naar verlichting', 'يخرج ما تغير إلى صعوبة كتحريم الصيد على المحرم', 'verzwaring valt af, zoals het jachtverbod voor de muḥrim'],
        [9, 'لعذر', 'wegens een excuus', 'يخرج التغير الأصلي', 'een oorspronkelijke verandering valt af'],
        [9, 'مع قيام السبب للحكم الأصلي', 'terwijl de oorzaak blijft', 'يخرج النسخ', 'abrogatie (naskh) valt af']
      ],
      page: 9
    },
    {
      type: 'cards',
      title: ['أقسام الرخصة بحسب حكمها', 'Soorten rukhṣa naar hun oordeel'],
      intro: ['أمثلة المصنف.', 'De voorbeelden van de auteur.'],
      nodes: [
        [10, 'واجبة: أكل الميتة للمضطر', 'Verplicht: kadaver eten in nood', 'عند تيقن الهلاك', 'bij zekerheid van omkomen'],
        [10, 'مندوبة: قصر الرباعية للمسافر', 'Aanbevolen: het viertal inkorten op reis'],
        [10, 'مباحة: بيع السلم', 'Toegestaan: de salam-verkoop', 'شُرع على خلاف الأصل', 'in afwijking van de hoofdregel'],
        [10, 'خلاف الأولى: فطر مسافر لا يجهده الصوم', 'Khilāf al-awlā: niet vasten op reis zonder moeite', 'الأولى له الصوم', 'vasten is voor hem beter']
      ],
      page: 10
    }
  ],
  sections: [
    [1, 'نشأة السبكي وشيوخه', 'As-Subkī: afkomst en leraren', 'نشأ في بيت علم: جده عبد الكافي، وأبوه تقي الدين قرين ابن تيمية. أخذ عن أبيه وعن المزي (ت 742هـ) والذهبي (ت 748هـ)، وسمع من زينب بنت الكمال وابن سيد الناس والتوزري.', 'Hij groeide op in een huis van kennis: zijn grootvader ʿAbd al-Kāfī, zijn vader Taqī ad-Dīn, tijdgenoot van Ibn Taymiyya. Hij leerde bij zijn vader, al-Mizzī (gest. 742) en adh-Dhahabī (gest. 748), en hoorde bij Zaynab bint al-Kamāl, Ibn Sayyid an-Nās en at-Tawzarī.', 'تولى القضاء والإفتاء والتدريس، ثم تفرغ للتأليف، ومن كتبه جمع الجوامع. ابتُلي وعُزل من القضاء أكثر من مرة، فلما أظهره الله على خصومه عفا وصفح.', 'Hij was rechter, muftī en leraar en wijdde zich daarna aan het schrijven; een van zijn werken is Jamʿ al-Jawāmiʿ. Hij werd meer dan eens beproefd en uit het rechtersambt gezet; toen Allah hem de overhand gaf, vergaf hij zijn tegenstanders.'],
    [1, 'أسباب محنته', 'De oorzaak van zijn beproeving', 'غامضة: قيل لأموال صرفت في غير محلها، وقيل لكتابه معيد النعم ومبيد النقم، وقيل لمخالفته ابن تيمية، وقيل حسداً.', 'Onduidelijk: genoemd worden geld dat verkeerd besteed zou zijn, zijn boek Muʿīd an-niʿam wa-mubīd an-niqam, zijn verschil met Ibn Taymiyya, of jaloezie.', 'والصحيح في هذا غير معروف لاحتمال هذه الأقوال وعدم استطاعة الجزم بصحتها.', 'De notities concluderen dat het juiste niet bekend is: alle meningen zijn mogelijk en geen ervan is zeker.'],
    [3, 'تشبيه الغزالي للأصول بالشجرة', 'Al-Ghazālī: uṣūl als een boom', 'المثمر الأدلة، والثمرة الأحكام، والاستثمار طرق الاستفادة، والمستثمر المجتهد.', 'Wat vrucht draagt zijn de bewijzen, de vrucht zijn de oordelen, het oogsten zijn de afleidingsmethoden, en de oogster is de mujtahid.'],
    [4, 'لا حكم قبل الشرع', 'Geen oordeel vóór de sharīʿa', 'الأمر موقوف إلى ورود الشرع عند الأشاعرة. وحكّمت المعتزلة العقل: الإباحة للحسن والحظر للقبيح، والوقف عند التردد.', 'Volgens de Ashʿarieten blijft het oordeel opgeschort tot de sharīʿa komt. De Muʿtazila lieten het verstand oordelen: toegestaan voor het goede, verboden voor het lelijke, opschorten bij twijfel.', 'والصحيح عدم الخوض في هذا لانعدام ثمرته في أصول الفقه كما قال الشاطبي.', 'Het juiste is er niet op in te gaan, want het heeft geen vrucht in uṣūl al-fiqh, zoals ash-Shāṭibī zei.'],
    [4, 'من لا يُكلَّف', 'Wie niet verantwoordelijk is', 'الصواب امتناع تكليف الغافل كالناسي والنائم، والملجأ الذي لا اختيار له، وكذا المكره على الصحيح ولو على القتل.', 'Volgens het juiste is er geen taklīf voor wie onoplettend is (zoals wie vergeet of slaapt), voor wie geen keuze heeft (muljaʾ), en ook niet voor wie gedwongen wordt, zelfs tot doden.', 'المراد ارتفاع الإثم لا براءة الذمة من المطلوب. والمكره على القتل يأثم لإيثاره نفسه، خلافاً للجمهور، بل حكى بعضهم الإجماع على تكليفه.', 'Bedoeld is dat de zonde vervalt, niet dat de plicht zelf vervalt. Wie gedwongen doodt, zondigt omdat hij zichzelf voortrok; de meerderheid zegt dat hij wél verantwoordelijk is, sommigen noemen dat zelfs consensus.'],
    [4, 'تعلق الأمر بالمعدوم', 'Het gebod en wie nog niet bestaat', 'يتعلق الأمر الشرعي بالمعدوم تعلقاً معنوياً: إن وُجد وصار مكلفاً تعلق به الأمر، خلافاً للمعتزلة.', 'Het gebod heeft een betekenisgebonden band met wie nog niet geschapen is: als hij bestaat en verantwoordelijk wordt, geldt het voor hem; de Muʿtazila zijn het daarmee oneens.', 'المسألة مبنية على إثبات الأشاعرة للكلام النفسي، والمعتزلة أنكروه.', 'Dit bouwt voort op het innerlijke spreken (kalām nafsī) dat de Ashʿarieten aannemen en de Muʿtazila verwerpen.'],
    [6, 'الفرض والواجب، والمندوب ومرادفاته', 'Farḍ en wājib; mandūb en zijn synoniemen', 'الفرض والواجب مترادفان عند الجمهور، وفرّق أبو حنيفة: الفرض ما ثبت بدليل قطعي، والواجب ما ثبت بدليل ظني، والخلاف لفظي. والمندوب والمستحب والتطوع والسنة مترادفة، خلافاً للقاضي حسين والبغوي.', 'Farḍ en wājib zijn synoniem volgens de meerderheid; Abū Ḥanīfa onderscheidt farḍ (vastgesteld door een zeker bewijs) van wājib (door een waarschijnlijk bewijs). Het verschil is in woorden. Mandūb, mustaḥabb, taṭawwuʿ en sunna zijn synoniem, anders dan bij al-Qāḍī Ḥusayn en al-Baghawī.', 'عندهما: السنة ما واظب عليه النبي ﷺ، والمستحب ما فعله مرة أو مرتين، والتطوع ما ينشئه الإنسان بنفسه من نفل مطلق.', 'Bij hen: sunna is wat de Profeet ﷺ volhield, mustaḥabb wat hij een of twee keer deed, taṭawwuʿ wat iemand zelf aan vrijwillige daden kiest.'],
    [6, 'هل يجب المندوب بالشروع؟', 'Wordt het aanbevolene verplicht door te beginnen?', 'لا يجب بالشروع عند الجمهور، خلافاً لأبي حنيفة، ومالك في المستحب الذي قُطع من غير عذر. ووجوب إتمام الحج والعمرة باتفاق.', 'Volgens de meerderheid niet; Abū Ḥanīfa wel, en Mālik voor wie zonder excuus afbreekt. De ḥajj en ʿumra moeten volgens iedereen worden afgemaakt.', 'قال الشافعي: فإن وجب المضي في فاسده ففي الصحيح من تطوعه آكد وأوجب، لأن نفله كفرضه نية وكفارة.', 'Ash-Shāfiʿī: als je zelfs een bedorven ḥajj moet voortzetten, dan een geldige vrijwillige ḥajj zeker; want bij de ḥajj is het vrijwillige als het verplichte in intentie en boete.'],
    [7, 'الصحة عند المتكلمين والفقهاء', 'Geldigheid bij theologen en juristen', 'عند المتكلمين: الصحيحة هي الموافقة للشرع وإن لم تسقط القضاء. وعند الفقهاء: ما أسقط القضاء.', 'Bij de theologen is een aanbidding geldig als ze met de sharīʿa overeenstemt, ook als er nog iets in te halen is; bij de juristen als ze de inhaalplicht laat vervallen.', 'مثاله: من صلى ظاناً الطهارة ثم تبين عدمها: صحيحة عند المتكلمين، باطلة عند الفقهاء وعليه الإعادة.', 'Voorbeeld: wie bad in de veronderstelling rein te zijn en daarna merkt dat hij het niet was: geldig bij de theologen, ongeldig bij de juristen, hij moet opnieuw bidden.'],
    [8, 'تفريق الجمهور بين الباطل والفاسد في بابين', 'Waar ook de meerderheid bāṭil en fāsid onderscheidt', 'الجمهور يرى الترادف، لكن يفرقون في النكاح والحج. نكاح المحرم من النساء كالخامسة باطل، ونكاح الشغار فاسد يصحح بإثبات المهر. والحج يبطل بفوات الوقوف بعرفة، ويفسد بما يمكن تكفيره مع المضي فيه.', 'De meerderheid ziet ze als synoniem, maar onderscheidt ze bij het huwelijk en de ḥajj. Een huwelijk met een verboden vrouw (zoals een vijfde) is bāṭil; het shighār-huwelijk is fāsid en wordt hersteld door een bruidsgave vast te stellen. De ḥajj is bāṭil als het staan op ʿArafa gemist wordt, en fāsid bij iets dat met een boete hersteld kan worden, terwijl men doorgaat.', 'وجمهور الحنفية يفرقون في المعاملات دون العبادات والأنكحة، كما قال ابن نجيم.', 'De meeste Ḥanafieten onderscheiden ze alleen bij transacties, niet bij aanbidding en huwelijk, zoals Ibn Nujaym zegt.']
  ],
  keycards: [
    ['opsomming', 5, 'الأحكام التكليفية الستة مع أمثلتها', 'De zes taklīfī-oordelen met voorbeelden', ['الإيجاب: الصلاة المفروضة', 'الندب: السنن الرواتب', 'التحريم: القتل والزنى', 'الكراهة: ترك تحية المسجد', 'خلاف الأولى: ترك السنن الرواتب', 'الإباحة: اللباس والطعام'], ['Verplicht: het verplichte gebed', 'Aanbevolen: de vaste sunna-gebeden', 'Verboden: doden en zinā', 'Afgekeurd: het groetgebed van de moskee laten', 'Khilāf al-awlā: de vaste sunna-gebeden laten', 'Toegestaan: kleding en eten']],
    ['onderscheid', 5, 'التكليفي والوضعي', 'Taklīfī en waḍʿī', ['التكليفي: يأتي الخطاب مقتضياً لفعل أو ترك أو مخيراً', 'الوضعي: يرد الخطاب مقرراً لسبب أو شرط أو مانع', 'الوضعي حكم شرعي لحكمه بالصحة والفساد، لكن لم يُخاطب به المكلف'], ['Taklīfī: de tekst vraagt om doen of laten, of laat de keuze', 'Waḍʿī: de tekst legt een oorzaak, voorwaarde of belemmering vast', 'Het waḍʿī-oordeel is sharʿī (het bepaalt geldigheid), maar de verantwoordelijke wordt er niet mee aangesproken']],
    ['voorwaarde', 7, 'قيود المانع', 'Kenmerken van de belemmering', ['وصف وجودي لا عدمي: الفقر أو الدين، لا عدم الغنى', 'ظاهر لا خفي', 'منضبط لا يتخلف في أفراده؛ فالمشقة لا تصلح سبباً ولا مانعاً', 'معرّف نقيض الحكم'], ['Bestaand, niet een gemis: armoede of schuld, niet "geen rijkdom"', 'Zichtbaar, niet verborgen', 'Afgebakend, zonder uitzonderingen; moeite (mashaqqa) kan dus geen oorzaak of belemmering zijn', 'Maakt het tegendeel van het oordeel kenbaar']],
    ['onderscheid', 8, 'الباطل والفاسد عند أبي حنيفة', 'Bāṭil en fāsid bij Abū Ḥanīfa', ['الباطل: منهي عنه لأصله، ولا سبيل لتصحيحه', 'الفاسد: منهي عنه لوصفه، وهو قابل للتصحيح'], ['Bāṭil: verboden om zijn kern, niet te herstellen', 'Fāsid: verboden om een eigenschap, wel te herstellen']],
    ['definitie', 9, 'الرخصة والعزيمة', 'Rukhṣa en ʿazīma', ['الرخصة: تغير الحكم الشرعي إلى سهولة لعذر مع قيام السبب للحكم الأصلي', 'العزيمة: ما تخلف فيه أحد هذه القيود'], ['Rukhṣa: het oordeel verandert naar verlichting wegens een excuus, terwijl de oorzaak blijft', 'ʿAzīma: wat niet aan een van die voorwaarden voldoet']],
    ['opsomming', 6, 'العبادات التي يلزم فيها الشروع عند القرافي', 'Aanbiddingen die bindend worden door te beginnen (al-Qarāfī)', ['الصلاة', 'الصوم', 'الحج', 'العمرة', 'الاعتكاف', 'الائتمام', 'طواف التطوع'], ['Het gebed', 'Het vasten', 'De ḥajj', 'De ʿumra', 'Iʿtikāf', 'Het volgen van een imam', 'Vrijwillige ṭawāf']],
    ['opsomming', 5, 'مسائل الحكم الوضعي الخمسة', 'De vijf waḍʿī-zaken', ['السبب', 'الشرط', 'المانع', 'الصحيح', 'الفاسد'], ['Oorzaak', 'Voorwaarde', 'Belemmering', 'Geldig', 'Ongeldig']]
  ],
  subtleties: [
    [5, 'الواو في "سبباً وشرطاً ومانعاً" بمعنى أو', 'De wa in "oorzaak en voorwaarde en belemmering" betekent "of"', 'الواو هنا للتنويع والتخيير لا للمعية: الخطاب الوضعي يرد بأحدها.', 'De wa geeft hier soorten of keuze aan, niet samengaan: een waḍʿī-tekst legt één ervan vast.'],
    [7, 'شيء واحد سبب وشرط ومانع', 'Eén ding als oorzaak, voorwaarde én belemmering', 'الإيمان سبب للثواب، وشرط في صحة الصلاة، ومانع من القصاص في قتل الكافر.', 'Het geloof is een oorzaak van beloning, een voorwaarde voor een geldig gebed en een belemmering voor qiṣāṣ bij het doden van een ongelovige.'],
    [7, 'لماذا الأبوة مانعة من القصاص', 'Waarom vaderschap qiṣāṣ belet', 'الحكمة بقاء الحياة؛ ولما كان الأب هو الأصل لم يكن الفرع سبباً في إعدامه. وعند مالك وأشهب: إن أضجعه وذبحه قُتل به.', 'De wijsheid is het behoud van leven: de vader is de oorsprong, en het kind mag niet de oorzaak van zijn dood worden. Volgens Mālik en Ashhab wordt hij wél gedood als hij zijn kind neerlegt en de keel doorsnijdt.'],
    [7, 'قيد "ذي الوجهين" في تعريف الصحة', 'De toevoeging "met twee kanten" bij geldigheid', 'يخرج ما له وجه واحد كالكفر، فلا يوصف بصحة ولا فساد إذ لا كفر موافق للشرع.', 'Dit sluit uit wat maar één kant heeft, zoals ongeloof: dat is nooit geldig of ongeldig, want er bestaat geen ongeloof dat met de sharīʿa overeenstemt.'],
    [8, 'الأداء والمؤدى', 'Adāʾ en muʾaddā', 'الأداء الفعل والمؤدى المفعول؛ وفيه رد على ابن الحاجب الذي عرّف الأداء بما فُعل في وقته، فهذا مؤدى لا أداء.', 'Adāʾ is het verrichten, muʾaddā het verrichte; dit is een antwoord aan Ibn al-Ḥājib, die adāʾ definieerde als "wat binnen zijn tijd verricht werd": dat is muʾaddā, niet adāʾ.'],
    [9, 'الصلاة الصحيحة المعادة خارج الوقت ليست قضاء', 'Een geldig gebed herhalen na de tijd is geen qaḍāʾ', 'من صلى صلاة صحيحة ثم أعادها خارج الوقت مع جماعة فليس هذا استدراكاً ولا قضاء.', 'Wie geldig bad en daarna buiten de tijd met een groep herhaalt, haalt niets in; het is geen qaḍāʾ.'],
    [9, 'كلمة "ثانياً" في تعريف الإعادة', 'Het woord "opnieuw" in de definitie van iʿāda', 'سقطت من المتن، ولا يستقيم التعريف إلا بها.', 'Het ontbreekt in de grondtekst, maar zonder dat woord klopt de definitie niet.'],
    [6, 'الائتمام يلزم بالشروع', 'Wie een imam volgt, moet afmaken', 'من ائتم بإمام وجب عليه الإتمام لائتمامه ولو كانت صلاته باطلة (من فوائد القرافي).', 'Wie een imam volgt, moet het gebed afmaken omdat hij volgt, zelfs als dat gebed ongeldig is (uit de opmerking van al-Qarāfī).']
  ],
  rules: [
    [3, 'لا حكم إلا لله', 'Alleen Allah oordeelt', 'ثمرة تعريف الحكم بأنه خطاب الله؛ وفيه رد على المعتزلة في قولهم بقدرة العقل على إدراك الحكم الشرعي.', 'Volgt uit de definitie van het oordeel als aanspraak van Allah; een weerlegging van de Muʿtazila, die het verstand het sharʿī-oordeel lieten vaststellen.'],
    [7, 'غير المنضبط لا يصلح سبباً ولا مانعاً', 'Wat niet afgebakend is, kan geen oorzaak of belemmering zijn', 'لأن المانع والسبب لا بد أن لا يتخلفا في أفرادهما.', 'Want een oorzaak of belemmering moet in elk geval gelden.', 'كالمشقة.', 'Zoals moeite (mashaqqa).'],
    [7, 'بصحة العقد ترتب آثاره', 'Een geldig contract heeft zijn gevolgen', 'إن كان العقد صحيحاً ترتبت آثاره وإلا فلا.', 'Is het contract geldig, dan treden de gevolgen in; anders niet.', 'البيع الصحيح يترتب عليه انتقال الملكية.', 'Een geldige verkoop draagt het eigendom over.'],
    [8, 'الإجزاء يختص بالمطلوب', 'Ijzāʾ geldt alleen voor wat gevraagd is', 'الواجب والمستحب كلاهما فيه طلب؛ وقيل: يختص بالواجب.', 'Zowel het verplichte als het aanbevolene wordt gevraagd; volgens een andere mening alleen het verplichte.', 'على القول الثاني لا يقال عن النفل مجزئ.', 'Volgens die tweede mening zeg je van een vrijwillige daad niet dat ze volstaat.']
  ],
  disputes: [
    { page: 3, q: ['هل يدرك العقل الحسن والقبح؟', 'Kent het verstand goed en lelijk?'], views: [['المصنف: يدرك العقل الحسن والقبح بمعنى ملاءمة الطبع وصفة الكمال، أما ترتب الثواب والعقاب فشرعي', 'De auteur: het verstand kent goed en lelijk als "past bij de natuur" en "volmaakt of gebrekkig"; beloning en straf bepaalt alleen de sharīʿa'], ['المعتزلة: الثلاثة كلها عقلية، فللعقل أن يعطي الشيء حكماً شرعياً يترتب عليه ثواب أو عقاب', 'Muʿtazila: alle drie zijn rationeel; het verstand kan zelf een oordeel met beloning of straf geven']], preferred: ['قول المصنف كما في المتن', 'De mening van de auteur, zoals in de grondtekst'] },
    { page: 4, q: ['هل يُكلَّف المكره؟', 'Is wie gedwongen wordt verantwoordelijk?'], views: [['المصنف: لا يُكلَّف ولو على القتل، لكن يأثم القاتل لإيثاره نفسه', 'De auteur: nee, zelfs niet bij gedwongen doden; maar de dader zondigt omdat hij zichzelf voortrok'], ['الجمهور: المكره على القتل مكلف، بل حكى بعضهم الإجماع', 'De meerderheid: wie gedwongen doodt is verantwoordelijk; sommigen noemen dat consensus']], fruit: ['المراد ارتفاع الإثم، لا براءة الذمة من المطلوب', 'Het gaat om het vervallen van de zonde, niet om het vervallen van de plicht'] },
    { page: 6, q: ['هل الفرض والواجب مترادفان؟', 'Zijn farḍ en wājib synoniem?'], views: [['الجمهور: مترادفان', 'Meerderheid: synoniem'], ['أبو حنيفة: الفرض ما ثبت بدليل قطعي فهو آكد، والواجب ما ثبت بدليل ظني كحديث الآحاد', 'Abū Ḥanīfa: farḍ berust op een zeker bewijs en is sterker; wājib op een waarschijnlijk bewijs, zoals een āḥād-hadith']], fruit: ['النزاع لفظي مرجعه الاصطلاح، لا يترتب عليه أثر', 'Een verschil in woorden (terminologie), zonder gevolgen'] },
    { page: 6, q: ['هل يجب المستحب بالشروع فيه؟', 'Wordt het aanbevolene verplicht door eraan te beginnen?'], views: [['الجمهور: لا يجب', 'Meerderheid: nee'], ['أبو حنيفة: يجب بعد الشروع', 'Abū Ḥanīfa: ja'], ['مالك: فيما قُطع من غير عذر', 'Mālik: als men zonder excuus afbreekt']], preferred: ['قول الجمهور، مع الاتفاق على وجوب إتمام الحج والعمرة', 'De meerderheid; wel moet iedereen ḥajj en ʿumra afmaken'] },
    { page: 8, q: ['هل الباطل والفاسد بمعنى واحد؟', 'Betekenen bāṭil en fāsid hetzelfde?'], views: [['الجمهور: مترادفان، مع التفريق في النكاح والحج', 'Meerderheid: synoniem, met onderscheid bij huwelijk en ḥajj'], ['أبو حنيفة: الباطل لأصله، والفاسد لوصفه ويقبل التصحيح', 'Abū Ḥanīfa: bāṭil om de kern, fāsid om een eigenschap en herstelbaar'], ['جمهور الحنفية: يفرقون في المعاملات دون العبادات والأنكحة', 'De meeste Ḥanafieten: onderscheid alleen bij transacties']] },
    { page: 7, q: ['ما الصحة في العبادة؟', 'Wat is geldigheid bij aanbidding?'], views: [['المتكلمون: موافقة الشرع وإن لم تسقط القضاء', 'Theologen: overeenstemming met de sharīʿa, ook als er nog iets in te halen is'], ['الفقهاء: ما أسقط القضاء', 'Juristen: wat de inhaalplicht laat vervallen']], fruit: ['من صلى ظاناً الطهارة ثم تبين حدثه: صحيحة عند المتكلمين، وعليه الإعادة عند الفقهاء', 'Wie bad in de veronderstelling rein te zijn: geldig bij de theologen, opnieuw bidden bij de juristen'] },
    { page: 8, q: ['هل الأداء فعل بعض العبادة في وقتها أم كلها؟', 'Is adāʾ een deel van de aanbidding binnen de tijd, of alles?'], views: [['المؤلف: فعل بعض ما دخل وقته قبل خروجه', 'De auteur: een deel verrichten binnen de tijd'], ['الجمهور: "بعض" أدناه ركعة من الصلاة', 'Meerderheid: het minimum van dat deel is één rakʿa'], ['الأصوليون: كون العبادة كاملة داخل وقتها', 'De uṣūlī’s: de aanbidding volledig binnen de tijd']] }
  ],
  pitfalls: [
    [5, 'الخلط بين الكراهة وخلاف الأولى', 'Karāha en khilāf al-awlā door elkaar halen', 'الكراهة فيها نهي مخصوص بدليل يخصها، وخلاف الأولى نهي غير مخصوص (عام).', 'Bij karāha is er een specifiek verbod met een eigen bewijs; bij khilāf al-awlā alleen een algemeen verbod.'],
    [6, 'ظن أن الخلاف بين الفرض والواجب يترتب عليه حكم', 'Denken dat het verschil farḍ/wājib praktische gevolgen heeft', 'هو نزاع لفظي مرجعه الاصطلاح كما في المتن.', 'Het is volgens de grondtekst een verschil in terminologie.'],
    [9, 'جعل كل تخفيف رخصة', 'Elke verlichting een rukhṣa noemen', 'إن رُفع الحكم وحل محله غيره فهو نسخ لا رخصة، لأن الرخصة يبقى معها سبب الحكم الأصلي.', 'Als het oordeel wordt opgeheven en vervangen, is het naskh en geen rukhṣa: bij een rukhṣa blijft de oorzaak van het oorspronkelijke oordeel bestaan.'],
    [7, 'التعبير عن المانع بأمر عدمي', 'Een belemmering als gemis omschrijven', 'لا يقال المانع من الزكاة عدم الغنى، بل الفقر أو الدين، لأن المانع وصف وجودي.', 'Zeg niet dat "geen rijkdom" de zakāt belet, maar armoede of schuld: een belemmering is iets bestaands.'],
    [9, 'جعل القضاء خاصاً بمن ترك عمداً', 'Qaḍāʾ alleen voor opzettelijk nalaten', 'القضاء لأي سبب أُخرجت العبادة عن وقتها: عمداً أو لعذر أو خطأً.', 'Qaḍāʾ geldt bij elke reden dat de aanbidding buiten de tijd viel: opzet, excuus of vergissing.']
  ],
  hadith: [
    { text: 'إذا دخل أحدكم المسجد فلا يجلس حتى يصلي ركعتين', takhrij: ['متفق عليه', 'Overeengekomen (al-Bukhārī en Muslim)'], nl: 'Wanneer een van jullie de moskee binnengaat, laat hij niet gaan zitten voordat hij twee rakʿa’s heeft gebeden.', note: ['مثال الكراهة: ترك تحية المسجد', 'Voorbeeld van karāha: het groetgebed overslaan'], pages: [5] }
  ],
  persons: [
    ['taj-ad-din-as-subki', 'text', [1, 2], 'صاحب جمع الجوامع، وترجمته أول المذكرات.', 'Auteur van Jamʿ al-Jawāmiʿ; zijn biografie opent de notities.'],
    ['abd-al-kafi-as-subki', 'text', [1], 'جده المحدث قاضي القضاة.', 'Zijn grootvader, hadithgeleerde en opperrechter.'],
    ['taqi-ad-din-as-subki', 'text', [1], 'أبوه وشيخه، قرين ابن تيمية ومعاصره.', 'Zijn vader en leraar, tijdgenoot van Ibn Taymiyya.'],
    ['al-mizzi', 'text', [1], 'من شيوخه، كان يتردد عليه مرتين في الأسبوع.', 'Een van zijn leraren; hij bezocht hem twee keer per week.'],
    ['adh-dhahabi', 'text', [1], 'من شيوخه، لازمه وكان يتردد عليه مرتين في اليوم.', 'Een van zijn leraren; hij bezocht hem twee keer per dag.'],
    ['zaynab-bint-al-kamal', 'text', [1], 'مسندة الشام، سمع منها.', 'Hadithoverleveraarster van Syrië; hij hoorde bij haar.'],
    ['ibn-sayyid-an-nas', 'text', [1], 'سمع منه.', 'Hij hoorde bij hem.'],
    ['ibn-hajar', 'text', [1], 'وصف زينب بنت الكمال، وذكر في الدرر الكامنة سبباً لمحنة السبكي.', 'Beschreef Zaynab bint al-Kamāl en noemde in ad-Durar al-Kāmina een oorzaak van as-Subkīs beproeving.'],
    ['ibn-taymiyya', 'text', [1, 2], 'قيل إن من أسباب المحنة مخالفته له.', 'Een van de genoemde oorzaken van de beproeving is het verschil met hem.'],
    ['ibn-qadi-al-jabal', 'text', [2], 'من تلاميذ ابن تيمية، وهو الذي حكم بسجنه.', 'Leerling van Ibn Taymiyya; hij liet as-Subkī gevangenzetten.'],
    ['abu-ghudda', 'takhrij', [2], 'نُقل عن مقدمته لكتاب عودة النعم بعد زوالها.', 'Aangehaald uit zijn inleiding bij ʿAwdat an-niʿam.'],
    ['al-ghazali', 'text', [3], 'شبّه الأصول بالشجرة في المستصفى.', 'Vergeleek uṣūl met een boom in al-Mustaṣfā.'],
    ['ash-shatibi', 'text', [4], 'قال بعدم الخوض فيما لا ثمرة له في الأصول.', 'Zei dat men niet ingaat op wat geen vrucht heeft in uṣūl.'],
    ['abu-hanifa', 'text', [6, 8], 'فرّق بين الفرض والواجب، وبين الباطل والفاسد، وأوجب المستحب بالشروع.', 'Onderscheidde farḍ en wājib, bāṭil en fāsid, en liet het aanbevolene verplicht worden door te beginnen.'],
    ['al-qadi-husayn', 'text', [6], 'فرّق بين السنة والمستحب والتطوع.', 'Onderscheidde sunna, mustaḥabb en taṭawwuʿ.'],
    ['al-baghawi', 'text', [6], 'وافق القاضي حسين في التفريق.', 'Volgde al-Qāḍī Ḥusayn in dat onderscheid.'],
    ['malik', 'text', [6, 7], 'أوجب إتمام المستحب المقطوع بغير عذر، ورأى القصاص من الأب في صورة الذبح.', 'Liet het afgebroken aanbevolene zonder excuus verplicht worden en zag qiṣāṣ voor een vader die zijn kind de keel doorsnijdt.'],
    ['al-qarafi', 'text', [6], 'عدّ سبع عبادات يلزم فيها الشروع (الذخيرة).', 'Noemde zeven aanbiddingen die bindend worden door te beginnen (adh-Dhakhīra).'],
    ['ash-shafii', 'text', [6], 'استدل على لزوم إتمام الحج بالقياس على فاسده.', 'Bewees dat de ḥajj afgemaakt moet worden met een vergelijking met de bedorven ḥajj.'],
    ['ashhab', 'text', [7], 'مع مالك في القصاص من الأب إذا ذبح ولده.', 'Met Mālik over qiṣāṣ voor een vader die zijn kind de keel doorsnijdt.'],
    ['ibn-al-hajib', 'text', [8, 9], 'عرّف الأداء بما فُعل في وقته، وخص القضاء بالواجبات.', 'Definieerde adāʾ als "wat in zijn tijd verricht werd" en beperkte qaḍāʾ tot verplichtingen.']
  ],
  review: [
    ['أصول الفقه: أدلة الفقه الإجمالية.', 'Uṣūl al-fiqh: de algemene bewijzen van de fiqh.'],
    ['الحكم: خطاب الله المتعلق بفعل المكلف.', 'Het oordeel: Allahs aanspraak over de handeling van de verantwoordelijke.'],
    ['الحسن والقبح بمعنى الثواب والعقاب شرعي لا عقلي.', 'Goed en lelijk in de zin van beloning en straf is sharʿī, niet rationeel.'],
    ['التكليفي ستة: إيجاب، ندب، تحريم، كراهة، خلاف الأولى، إباحة.', 'Zes taklīfī: verplicht, aanbevolen, verboden, afgekeurd, khilāf al-awlā, toegestaan.'],
    ['الكراهة بنهي مخصوص، وخلاف الأولى بنهي غير مخصوص.', 'Karāha: specifiek verbod; khilāf al-awlā: algemeen verbod.'],
    ['الوضعي: سبب وشرط ومانع وصحيح وفاسد.', 'Waḍʿī: oorzaak, voorwaarde, belemmering, geldig, ongeldig.'],
    ['المانع وصف وجودي ظاهر منضبط.', 'Een belemmering is bestaand, zichtbaar en afgebakend.'],
    ['الفرض والواجب مترادفان، والخلاف مع أبي حنيفة لفظي.', 'Farḍ en wājib zijn synoniem; het verschil met Abū Ḥanīfa is in woorden.'],
    ['الأداء في الوقت، والقضاء بعده، والإعادة في الوقت مرة ثانية.', 'Adāʾ binnen de tijd, qaḍāʾ erna, iʿāda opnieuw binnen de tijd.'],
    ['الرخصة: تغير إلى سهولة لعذر مع قيام السبب.', 'Rukhṣa: verlichting wegens een excuus terwijl de oorzaak blijft.']
  ],
  quiz: [
    { type: 'mc', page: 3, q: ['ما الذي يُخرجه قيد "العملية" في تعريف الفقه؟', 'Wat sluit het woord "praktisch" in de definitie van fiqh uit?'], options: [['الأحكام العقدية', 'الأحكام اللغوية', 'الأحكام العقلية', 'الأدلة التفصيلية'], ['geloofsleer', 'taalkundige oordelen', 'rationele oordelen', 'gedetailleerde bewijzen']], answer: 0, explain: ['الشرعية تخرج اللغوية والعقلية، والعملية تخرج العقدية.', '"Sharʿī" sluit taal en verstand uit; "praktisch" sluit geloofsleer uit.'] },
    { type: 'mc', page: 5, q: ['ترك تحية المسجد مثال لأي حكم؟', 'Van welk oordeel is het overslaan van het groetgebed een voorbeeld?'], options: [['الكراهة', 'خلاف الأولى', 'التحريم', 'الإباحة'], ['karāha', 'khilāf al-awlā', 'verbod', 'toestemming']], answer: 0, explain: ['لأن فيه نهياً مخصوصاً: «فلا يجلس حتى يصلي ركعتين».', 'Want er is een specifiek verbod: "laat hij niet gaan zitten voordat hij twee rakʿa’s bidt".'] },
    { type: 'mc', page: 5, q: ['ترك السنن الرواتب مثال لـ:', 'Het laten van de vaste sunna-gebeden is een voorbeeld van:'], options: [['خلاف الأولى', 'الكراهة', 'التحريم', 'الندب'], ['khilāf al-awlā', 'karāha', 'verbod', 'aanbeveling']], answer: 0, explain: ['ليس فيه نهي يخصه بعينه.', 'Er is geen specifiek verbod voor.'] },
    { type: 'tf', page: 7, q: ['يصح أن يكون الفقر مانعاً من وجوب الزكاة، ولا يقال المانع عدم الغنى.', 'Armoede kan een belemmering voor de zakāt zijn; je zegt niet "geen rijkdom".'], answer: 0, explain: ['المانع وصف وجودي لا عدمي.', 'Een belemmering is iets bestaands, geen gemis.'] },
    { type: 'mc', page: 7, q: ['الإيمان سبب للثواب، وشرط في الصلاة، و…', 'Het geloof is een oorzaak van beloning, een voorwaarde voor het gebed en …'], options: [['مانع من القصاص في قتل الكافر', 'سبب لوجوب الزكاة', 'شرط في البيع', 'مانع من الإرث'], ['een belemmering voor qiṣāṣ bij het doden van een ongelovige', 'een oorzaak van zakāt', 'een voorwaarde voor verkoop', 'een belemmering voor erfrecht']], answer: 0, explain: ['مثال كون الشيء الواحد سبباً وشرطاً ومانعاً.', 'Voorbeeld van één ding dat oorzaak, voorwaarde en belemmering is.'] },
    { type: 'tf', page: 8, q: ['الجمهور يفرقون بين الباطل والفاسد في كل الأبواب.', 'De meerderheid onderscheidt bāṭil en fāsid in alle hoofdstukken.'], answer: 1, explain: ['يرون الترادف، ويفرقون في النكاح والحج فقط.', 'Zij zien ze als synoniem en onderscheiden alleen bij huwelijk en ḥajj.'] },
    { type: 'mc', page: 9, q: ['من صلى صلاة صحيحة ثم أعادها خارج الوقت مع جماعة، فصلاته الثانية:', 'Wie geldig bad en buiten de tijd met een groep herhaalt, diens tweede gebed is:'], options: [['ليست قضاء ولا استدراكاً', 'قضاء', 'أداء', 'إعادة واجبة'], ['geen qaḍāʾ en geen inhalen', 'qaḍāʾ', 'adāʾ', 'verplichte iʿāda']], answer: 0, explain: ['ما لم يكن استدراكاً لم يكن قضاء.', 'Wat niets inhaalt, is geen qaḍāʾ.'] },
    { type: 'mc', page: 9, q: ['أي قيد في تعريف الرخصة يُخرج النسخ؟', 'Welke voorwaarde in de definitie van rukhṣa sluit naskh uit?'], options: [['مع قيام السبب للحكم الأصلي', 'إلى سهولة', 'لعذر', 'إن تغير'], ['terwijl de oorzaak van het oorspronkelijke oordeel blijft', 'naar verlichting', 'wegens een excuus', 'als het verandert']], answer: 0, explain: ['في النسخ يُرفع الحكم ويحل محله غيره.', 'Bij naskh wordt het oordeel opgeheven en vervangen.'] },
    { type: 'mc', page: 10, q: ['فطر المسافر الذي لا يجهده الصوم رخصة:', 'Niet vasten op reis zonder moeite is een rukhṣa die:'], options: [['خلاف الأولى', 'واجبة', 'مندوبة', 'مباحة'], ['khilāf al-awlā is', 'verplicht is', 'aanbevolen is', 'toegestaan is']], answer: 0, explain: ['الأولى له الصوم.', 'Vasten is voor hem beter.'] },
    { type: 'tf', page: 6, q: ['يجب إتمام الحج والعمرة بعد الشروع فيهما ولو كانا نفلاً، باتفاق.', 'Een begonnen ḥajj of ʿumra moet volgens iedereen worden afgemaakt, ook als ze vrijwillig is.'], answer: 0, explain: ['كما في المتن.', 'Zo staat het in de grondtekst.'] }
  ]
})
