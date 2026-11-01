// Hoofdstukkaart eenheid 10 van تلخيص جمع الجوامع: المطلق والمقيد (p. 114–119).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p114–p119.html).
// Van باب الظاهر والمؤول (p. 119) staat in de notities alleen de titel.
import { kaart } from './kaart.js'

export default kaart({
  unit: 10,
  subtitle: ['تعريف المطلق والرد على الآمدي وابن الحاجب، وأن المطلق والمقيد كالعام والخاص، وأحوال حمل المطلق على المقيد', 'De definitie van het onbepaalde woord en de kritiek op al-Āmidī en Ibn al-Ḥājib; onbepaald en beperkt werken als algemeen en specifiek; en wanneer het onbepaalde naar het beperkte wordt opgevat'],
  summary: [
    'تعرّف الوحدة المطلق بأنه الدال على الماهية بلا قيد، وتفرق بينه وبين العام والنكرة، وترد على الآمدي وابن الحاجب اللذين جعلاه النكرة، وتبين ثمرة الخلاف. ثم تقرر أن المطلق والمقيد كالعام والخاص، وتفصل أحوال الحمل: اتحاد الحكم والسبب مع الإثبات أو النفي أو الأمر والنهي، واختلاف السبب، واختلاف الحكم، والمقيد بقيدين متنافيين، ثم خلاصة الأقوال. وتنتهي ببداية باب الظاهر والمؤول.',
    'Dit hoofdstuk definieert het onbepaalde woord (muṭlaq) als wat de soort aanduidt zonder beperking, onderscheidt het van het algemene woord en van het onbepaalde zelfstandig naamwoord, weerlegt al-Āmidī en Ibn al-Ḥājib die het gelijkstelden aan dat naamwoord, en toont wat dat uitmaakt. Dan: onbepaald en beperkt (muqayyad) werken als algemeen en specifiek, met de gevallen van opvatting: zelfde oordeel en oorzaak, bevestigend, ontkennend of gebod tegenover verbod; verschillende oorzaak; verschillend oordeel; twee tegenstrijdige beperkingen; en een samenvatting. Het eindigt met de titel van het volgende hoofdstuk, het duidelijke en het uitgelegde.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 114 إلى 119.', 'Bladzijde 114 tot 119.'],
    root: [114, 'المطلق والمقيد', 'Onbepaald en beperkt', 'الوحدة العاشرة', 'Eenheid 10'],
    nodes: [
      [114, 'تعريف المطلق', 'Definitie', 'ص 114', 'p. 114', [['الدال على الماهية بلا قيد', 'de soort zonder beperking'], ['عمومه بدلي', 'één willekeurig geval']]],
      [114, 'الرد على الآمدي وابن الحاجب', 'Kritiek op al-Āmidī en Ibn al-Ḥājib', 'ص 114–116', 'p. 114–116', [['جعلاه النكرة', 'gelijk aan het onbepaalde naamwoord'], ['ثمرة الخلاف', 'wat het uitmaakt']]],
      [116, 'أحوال الحمل', 'Wanneer men opvat', 'ص 116–118', 'p. 116–118', [['اتحاد الحكم والسبب', 'zelfde oordeel en oorzaak'], ['اختلاف السبب أو الحكم', 'andere oorzaak of oordeel']]],
      [118, 'خلاصة الأقوال', 'Samenvatting', 'ص 118–119', 'p. 118–119', [['أربع صور', 'vier gevallen']]],
      [119, 'الظاهر والمؤول', 'Duidelijk en uitgelegd', 'ص 119', 'p. 119', [['العنوان فقط', 'alleen de titel']]]
    ]
  },
  points: [
    [114, 'المطلق الدال على الماهية بلا قيد الوحدة ولا الكثرة.', 'Het onbepaalde woord duidt de soort aan zonder beperking tot één of tot velen.'],
    [114, 'المطلق يشبه العام، لكن عموم العام شمولي استغراقي وعموم المطلق بدلي يكفي فيه الواحد.', 'Het lijkt op het algemene woord, maar het algemene omvat alles, terwijl het onbepaalde één willekeurig geval vraagt.'],
    [115, 'جعل الآمدي وابن الحاجب المطلق هو النكرة، فقالا: الأمر بمطلق الماهية أمر بجزئي؛ وقال المصنف: وليس بشيء.', 'Al-Āmidī en Ibn al-Ḥājib stelden het onbepaalde woord gelijk aan het onbepaalde naamwoord en zeiden daarom: een gebod tot de soort is een gebod tot één geval; de auteur: dat klopt niet.'],
    [115, 'عند الجمهور الأمر بمطلق الماهية أمر بالماهية، ولا ينصرف إلى جزئي إلا بقرينة.', 'Volgens de meerderheid is een gebod tot de soort een gebod tot de soort zelf; het gaat pas naar één geval met een aanwijzing.'],
    [116, 'المطلق والمقيد كالعام والخاص في الأحكام اتفاقاً واختلافاً.', 'Onbepaald en beperkt volgen dezelfde regels als algemeen en specifiek, met dezelfde overeenstemming en verschillen.'],
    [116, 'إن اتحد الحكم والسبب وكانا مثبتين حمل المطلق على المقيد، إلا إذا تأخر المقيد عن العمل فهو ناسخ.', 'Bij zelfde oordeel en oorzaak, beide bevestigend, vat men het onbepaalde naar het beperkte op; komt het beperkte na de toepassing, dan heft het op.'],
    [117, 'إن كان أحدهما أمراً والآخر نهياً قيد المطلق بضد الصفة.', 'Is het ene een gebod en het andere een verbod, dan wordt het onbepaalde beperkt tot het tegendeel van de eigenschap.'],
    [117, 'إن اختلف السبب فأبو حنيفة لا يحمل، وقيل يحمل لفظاً، وقال الشافعي قياساً.', 'Bij een andere oorzaak: Abū Ḥanīfa vat niet op; anderen via het woord; ash-Shāfiʿī via analogie.']
  ],
  terms: [
    ['المطلق', 'al-muṭlaq', 114, 'اللفظ الدال على الماهية بلا قيد الوحدة ولا الكثرة.', 'Een woord dat de soort aanduidt zonder beperking tot één of velen.', 'كقلم: ماهيته آلة تستعمل للكتابة.', 'Zoals "pen": de soort is een werktuig om mee te schrijven.'],
    ['المقيد', 'al-muqayyad', 116, 'مثاله في المذكرات: الدم المسفوح، مقيد بالمسفوح.', 'Voorbeeld in de notities: "vergoten bloed", beperkt tot vergoten.'],
    ['الماهية', 'al-māhiyya', 114, 'حقيقة الشيء الذي وضع له اللفظ.', 'Het wezen van wat het woord aanduidt.'],
    ['العموم البدلي', 'al-ʿumūm al-badalī', 114, 'عموم المطلق: يكفي فيه الواحد.', 'De "algemeenheid" van het onbepaalde: één geval is genoeg.', 'بخلاف عموم العام فهو شمولي استغراقي.', 'Anders dan het algemene woord, dat alles omvat.'],
    ['النكرة', 'an-nakira', 114, 'الدالة على الماهية بقيد الوحدة المبهمة، كجاء رجل.', 'Duidt de soort aan met de beperking "één onbepaald", zoals "er kwam een man".'],
    ['المعرفة', 'al-maʿrifa', 114, 'الدالة على الماهية بقيد الوحدة المعينة، كجاء زيد.', 'Duidt de soort aan met de beperking "één bepaald", zoals "Zayd kwam".'],
    ['العدد', 'al-ʿadad', 114, 'الدال على الماهية بقيد الكثرة، كجاء عشرة.', 'Duidt de soort aan met de beperking "veel", zoals "tien kwamen".'],
    ['الحمل', 'al-ḥaml', 116, 'حمل المطلق على المقيد، وفيه الأحوال المذكورة في ص 116–119.', 'Het onbepaalde naar het beperkte opvatten; de gevallen staan op p. 116–119.'],
    ['الموجب', 'al-mūjib', 116, 'هو السبب: "اتحد حكمهما وموجبهما" أي الحكم والسبب.', 'De oorzaak: "zelfde oordeel en mūjib" betekent zelfde oordeel en oorzaak.', 'كالإيذاء في تحريم الدم، والحدث في الوضوء والتيمم.', 'Zoals schade bij het verbod op bloed, en onreinheid bij wuḍūʾ en tayammum.'],
    ['المقيد بمتنافيين', 'al-muqayyad bi-mutanāfiyayn', 117, 'مطلق يتنازعه قيدان متنافيان، فلا يحمل على أحدهما إلا إن كان أولى به قياساً.', 'Een onbepaald woord met twee tegenstrijdige beperkingen; men kiest er geen, tenzij analogie er één sterker maakt.', '«إحداهن بالتراب» مع «أولاهن» و«أخراهن أو السابعة».', '"Een ervan met aarde", met "de eerste" en "de laatste of de zevende".']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['المطلق والنكرة والمعرفة والعدد', 'Onbepaald, onbepaald naamwoord, bepaald en getal'],
      intro: ['كلها تدل على الماهية، والفرق في القيد، ص 114.', 'Alle duiden de soort aan; het verschil zit in de beperking, p. 114.'],
      columns: [['القيد', 'Beperking'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['المطلق', 'Onbepaald'], cells: [['بلا قيد', 'geen'], ['قلم', 'pen']] },
        { label: ['النكرة', 'Onbepaald naamwoord'], cells: [['الوحدة المبهمة', 'één onbepaald'], ['جاء رجل', 'er kwam een man']] },
        { label: ['المعرفة', 'Bepaald'], cells: [['الوحدة المعينة', 'één bepaald'], ['جاء زيد', 'Zayd kwam']] },
        { label: ['العدد', 'Getal'], cells: [['الكثرة', 'veel'], ['جاء عشرة', 'tien kwamen']] }
      ],
      page: 114
    },
    {
      type: 'tree',
      title: ['أحوال حمل المطلق على المقيد', 'Wanneer men het onbepaalde naar het beperkte opvat'],
      intro: ['خلاصة الأقوال، ص 118–119.', 'Samenvatting, p. 118–119.'],
      root: [118, 'المطلق والمقيد', 'Onbepaald en beperkt'],
      nodes: [
        [118, 'اتحدا في الحكم والسبب', 'Zelfde oordeel en oorzaak', '', '', [
          [118, 'الإطلاق والتقييد في السبب: الجمهور يحمل، والحنفية لا', 'Op de oorzaak: meerderheid vat op, Ḥanafieten niet', 'زكاة الفطر عن المملوك', 'zakāt al-fiṭr voor de slaaf'],
          [118, 'في الحكم ومثبتان: الحمل اتفاقاً', 'Op het oordeel, bevestigend: opvatten, volgens iedereen', 'الدم والدم المسفوح', 'bloed en vergoten bloed'],
          [118, 'في الحكم ومنفيان: عدم الحمل اتفاقاً', 'Op het oordeel, ontkennend: niet opvatten, volgens iedereen', 'لا تعتق رقبة / رقبة كافرة', 'bevrijd geen slaaf / geen ongelovige slaaf'],
          [118, 'أمر ونهي: المطلق على ضد صفة المقيد', 'Gebod en verbod: het tegendeel van de eigenschap', 'أعتق رقبة / لا تعتق رقبة كافرة', 'bevrijd een slaaf / bevrijd geen ongelovige slaaf'],
          [118, 'صورة ذكرها السبكي: إلغاء القيد', 'Geval bij as-Subkī: de beperking vervalt']
        ]],
        [118, 'اختلفا في الحكم والسبب: عدم الحمل اتفاقاً', 'Ander oordeel en oorzaak: niet opvatten, volgens iedereen', 'الأيدي في الوضوء والسرقة', 'handen bij wuḍūʾ en diefstal'],
        [119, 'اتحدا في الحكم واختلفا في السبب: خلاف', 'Zelfde oordeel, andere oorzaak: verschil', 'تحرير رقبة في القتل الخطأ والظهار', 'een slaaf bevrijden bij doodslag en ẓihār'],
        [119, 'اتحدا في السبب واختلفا في الحكم: خلاف', 'Zelfde oorzaak, ander oordeel: verschil', 'كفارة الظهار: التماس في التحرير والصيام لا الإطعام', 'boete voor ẓihār: "vóór aanraking" bij bevrijden en vasten, niet bij voeden']
      ],
      page: 118
    },
    {
      type: 'cards',
      title: ['الأمر بمطلق الماهية', 'Een gebod tot de soort'],
      intro: ['ثلاثة أقوال بعد الرد على الآمدي وابن الحاجب، ص 115.', 'Drie meningen na de kritiek op al-Āmidī en Ibn al-Ḥājib, p. 115.'],
      nodes: [
        [115, 'الجمهور: أمر بالماهية نفسها', 'Meerderheid: gebod tot de soort zelf', 'ولا ينصرف إلى جزئي إلا بقرينة', 'pas met aanwijzing naar één geval'],
        [115, 'قيل: أمر بكل جزئي', 'Gebod tot elk geval'],
        [115, 'قيل: إذن في كل جزئي', 'Toestemming voor elk geval'],
        [115, 'الآمدي وابن الحاجب: أمر بجزئي', 'Al-Āmidī en Ibn al-Ḥājib: gebod tot één geval', 'قال المصنف: وليس بشيء', 'de auteur: dat klopt niet']
      ],
      page: 115
    }
  ],
  sections: [
    [114, 'تعريف المطلق', 'Definitie van het onbepaalde woord', 'الدال على الماهية بلا قيد. "بلا قيد الوحدة" يخرج النكرة (الوحدة المبهمة: جاء رجل) والمعرفة (الوحدة المعينة: جاء زيد)، و"بلا قيد الكثرة" يخرج العدد (جاء عشرة).', 'Wat de soort aanduidt zonder beperking. "Zonder beperking tot één" sluit het onbepaalde naamwoord uit (één onbepaald: "er kwam een man") en het bepaalde (één bepaald: "Zayd kwam"); "zonder beperking tot velen" sluit het getal uit ("tien kwamen").'],
    [114, 'المطلق والعام', 'Onbepaald en algemeen', 'المطلق يشبه العام، والفرق أن عموم العام شمولي استغراقي، وعموم المطلق بدلي يكفي فيه الواحد. والمطلق من قبيل الخاص لا العام.', 'Het lijkt op het algemene woord; het verschil: het algemene omvat alles, het onbepaalde vraagt één willekeurig geval. Het onbepaalde hoort bij het specifieke, niet bij het algemene.'],
    [115, 'الرد على الآمدي وابن الحاجب', 'Kritiek op al-Āmidī en Ibn al-Ḥājib', 'قول المصنف "بلا قيد" رد عليهما، و"زعم" إشارة إلى عدم موافقته. الآمدي: المطلق النكرة في سياق الإثبات. ابن الحاجب: اللفظ الدال على شائع في جنسه. فالمطلق والنكرة عندهما مترادفان، "توهماه النكرة".', 'Met "zonder beperking" weerlegt de auteur hen, en "beweerde" laat zien dat hij het oneens is. Al-Āmidī: het onbepaalde woord is een onbepaald naamwoord in een bevestigende zin. Ibn al-Ḥājib: een woord dat één willekeurige uit zijn soort aanduidt. Bij hen zijn beide hetzelfde: "zij dachten dat het het onbepaalde naamwoord was".'],
    [115, 'الأمر بمطلق الماهية', 'Een gebod tot de soort', 'قالا: الأمر بمطلق الماهية أمر بجزئي، كاضرب: أي ضرب أجزأ. وقال المصنف: وليس بشيء. وعند الجمهور هو أمر بالماهية ولا ينصرف إلى جزئي إلا بقرينة، كالسيد يقول لعبده: اذبح حيواناً، وعادته أن يذبح كبشاً لضيوفه. وقيل: أمر بكل جزئي، وقيل: إذن فيه.', 'Zij zeiden: een gebod tot de soort is een gebod tot één geval; bij "sla" volstaat elk slaan. De auteur: dat klopt niet. Volgens de meerderheid is het een gebod tot de soort zelf, en het gaat pas naar één geval met een aanwijzing: een heer zegt "slacht een dier" en slacht gewoonlijk een ram voor zijn gasten, dan is een ram bedoeld, geen kip. Anderen: een gebod tot elk geval; of: toestemming voor elk geval.'],
    [115, 'ثمرة الخلاف', 'Wat het uitmaakt', 'قال لزوجته: إن كان حملك ذكراً فأنت طالق، فولدت ذكرين أو أكثر: تطلق على قول المصنف، ولا تطلق على قول الآمدي وابن الحاجب لأن النكرة تدل على الواحد الشائع.', 'Iemand zegt tegen zijn vrouw: "als je een jongen draagt, ben je verstoten", en zij baart twee jongens of meer: volgens de auteur is zij verstoten, volgens al-Āmidī en Ibn al-Ḥājib niet, want het onbepaalde naamwoord duidt één aan.'],
    [116, 'المطلق والمقيد كالعام والخاص', 'Als algemeen en specifiek', 'تجري فيهما الأحكام السابقة اتفاقاً واختلافاً لشدة اتصالهما بالعام والخاص وشدة الشبه بين العام والمطلق، وكذلك عند التعارض.', 'Dezelfde regels gelden, met dezelfde overeenstemming en verschillen, omdat ze nauw verbonden zijn met algemeen en specifiek en het onbepaalde sterk op het algemene lijkt; ook bij tegenstrijdigheid.'],
    [116, 'اتحاد الحكم والسبب مع الإثبات', 'Zelfde oordeel en oorzaak, bevestigend', 'كالدم في ﴿حرمت عليكم الميتة والدم﴾ مع ﴿أو دماً مسفوحاً﴾: الحكم التحريم والسبب الإيذاء. إن تأخر المقيد عن وقت العمل بالمطلق فهو ناسخ، وإلا حمل المطلق عليه. وقالت الحنفية: المقيد ناسخ إن تأخر مطلقاً.', 'Zoals bloed in "verboden zijn jullie het kadaver en het bloed" met "of vergoten bloed": het oordeel is verbod, de oorzaak schade. Komt het beperkte na de toepassing van het onbepaalde, dan heft het op; anders vat men het onbepaalde ernaar op. De Ḥanafieten: komt het beperkte later, dan heft het altijd op.', 'وقيل، وهي صورة ذكرها السبكي ولم ينسبها لأحد وهو مذهب غريب: يحمل المقيد على المطلق بإلغاء القيد.', 'Een vreemde mening die as-Subkī zonder naam noemt: men vat het beperkte naar het onbepaalde op en laat de beperking vallen.'],
    [116, 'اتحاد الحكم والسبب مع النفي', 'Zelfde oordeel en oorzaak, ontkennend', 'لا تعتق مكاتباً / لا تعتق مكاتباً كافراً: قائل المفهوم يقيده فيجيز إعتاق المكاتب المسلم، ومن لا يرى المفهوم يطلقه. وهي من باب العام والخاص لأنها نكرة في سياق النهي.', '"Bevrijd geen slaaf met vrijkoopcontract" en "…geen ongelovige": wie de tegengestelde betekenis aanvaardt, beperkt en staat het bevrijden van een moslim toe; wie dat niet doet, houdt het onbepaald. Eigenlijk is dit algemeen en specifiek, want het is een onbepaald naamwoord na een verbod.', 'وقال الحسن البخاري: الراجح عدم الحمل، فيعمل بالمطلق لأن المقيد يتعلق بمفهوم المخالفة، والصريح أقوى منه.', 'Al-Ḥasan al-Bukhārī: het sterkst is niet opvatten; men volgt het onbepaalde, want het beperkte steunt op de tegengestelde betekenis en het uitdrukkelijke is sterker.'],
    [117, 'أمر ونهي', 'Gebod en verbod', 'أعتق رقبة / لا تعتق رقبة كافرة، أو العكس: يقيد المطلق بضد الصفة، أي عتق رقبة مؤمنة.', '"Bevrijd een slaaf" en "bevrijd geen ongelovige slaaf", of omgekeerd: het onbepaalde wordt beperkt tot het tegendeel van de eigenschap, dus een gelovige slaaf.'],
    [117, 'اختلاف السبب', 'Andere oorzaak', 'كعتق الرقبة في كفارة الظهار والقتل الخطأ: قال أبو حنيفة لا يحمل، فالمؤمنة في القتل فقط وتجزئ أي رقبة في الظهار واليمين؛ وقيل يحمل لفظاً؛ وقال الشافعي قياساً.', 'Zoals het bevrijden van een slaaf als boete voor ẓihār en voor doodslag: Abū Ḥanīfa vat niet op, dus een gelovige alleen bij doodslag en elke slaaf bij ẓihār en eed; anderen via het woord; ash-Shāfiʿī via analogie.'],
    [117, 'اختلاف الحكم مع اتحاد السبب', 'Ander oordeel, zelfde oorzaak', 'كآية الوضوء: تقييد غسل اليدين بالمرفقين وإطلاق الأيدي في التيمم، والسبب واحد وهو الحدث، والحكم غسل أو مسح؛ فعلى الخلاف السابق.', 'Zoals het vers over wuḍūʾ: wassen van de handen tot de ellebogen, en de handen onbepaald bij tayammum; dezelfde oorzaak (onreinheid), een ander oordeel (wassen of strijken); hier geldt hetzelfde verschil als hierboven.'],
    [117, 'المقيد بمتنافيين', 'Twee tegenstrijdige beperkingen', '«إحداهن بالتراب» في ولوغ الكلب مطلق، يتنازعه «أولاهن» و«أخراهن أو السابعة»؛ فيستغنى عنهما ويتمسك بالإطلاق، إن لم يكن أولى بأحدهما قياساً.', '"Een ervan met aarde" bij het likken van een hond is onbepaald, met "de eerste" en "de laatste of de zevende" ertegenover; men laat beide los en houdt het onbepaald, tenzij analogie één sterker maakt.']
  ],
  keycards: [
    ['onderscheid', 114, 'العام والمطلق', 'Algemeen en onbepaald', ['العام: عمومه شمولي استغراقي', 'المطلق: عمومه بدلي يكفي فيه الواحد'], ['Algemeen: omvat alles', 'Onbepaald: één willekeurig geval is genoeg']],
    ['opsomming', 114, 'ما يخرج بقيد "بلا قيد"', 'Wat "zonder beperking" uitsluit', ['النكرة: جاء رجل', 'المعرفة: جاء زيد', 'العدد: جاء عشرة'], ['Onbepaald naamwoord: "er kwam een man"', 'Bepaald: "Zayd kwam"', 'Getal: "tien kwamen"']],
    ['voorwaarde', 116, 'شروط الحمل في الصورة الأولى', 'Voorwaarden in het eerste geval', ['اتحاد الحكم', 'اتحاد السبب', 'كونهما مثبتين', 'ورود المقيد قبل العمل بالمطلق'], ['Zelfde oordeel', 'Zelfde oorzaak', 'Beide bevestigend', 'Het beperkte komt vóór de toepassing van het onbepaalde']],
    ['opsomming', 117, 'أقوال الحمل عند اختلاف السبب', 'Meningen bij een andere oorzaak', ['أبو حنيفة: لا يحمل', 'قيل: يحمل لفظاً', 'الشافعي: يحمل قياساً'], ['Abū Ḥanīfa: niet opvatten', 'Anderen: via het woord', 'Ash-Shāfiʿī: via analogie']]
  ],
  hadith: [
    { text: 'إحداهن بالتراب', nl: '"Een ervan (van de wasbeurten) met aarde."', note: ['في ولوغ الكلب؛ مطلق يتنازعه قيدان متنافيان.', 'Bij het likken van een hond; onbepaald met twee tegenstrijdige beperkingen.'], pages: [117, 118] },
    { text: 'أولاهن', nl: '"De eerste ervan."', note: ['قيد بالأولى.', 'Beperking tot de eerste.'], pages: [118] },
    { text: 'أخراهن أو السابعة', nl: '"De laatste ervan, of de zevende."', note: ['قيد بالأخيرة أو السابعة.', 'Beperking tot de laatste of de zevende.'], pages: [118] }
  ],
  persons: [
    ['taj-ad-din-as-subki', 'text', [114, 115, 116], 'عرف المطلق بلا قيد، ورد على الآمدي وابن الحاجب بقوله: وليس بشيء؛ وذكر صورة غريبة لم ينسبها.', 'Definieerde het onbepaalde zonder beperking en zei over al-Āmidī en Ibn al-Ḥājib: dat klopt niet; noemde een vreemde mening zonder naam.'],
    ['al-amidi', 'text', [114, 115, 116], 'عرف المطلق بأنه النكرة في سياق الإثبات، وقال: الأمر بمطلق الماهية أمر بجزئي.', 'Definieerde het onbepaalde als onbepaald naamwoord in een bevestigende zin; een gebod tot de soort is een gebod tot één geval.'],
    ['ibn-al-hajib', 'text', [114, 115, 116], 'عرف المطلق بأنه الدال على شائع في جنسه، فجعله والنكرة مترادفين.', 'Definieerde het als wat één willekeurige uit de soort aanduidt; daarmee gelijk aan het onbepaalde naamwoord.'],
    ['al-hasan-al-bukhari', 'text', [117], 'الشيخ الحسن البخاري: الراجح في المنفيين عدم الحمل.', 'Ash-Shaykh al-Ḥasan al-Bukhārī: bij twee ontkennende teksten is niet opvatten het sterkst.'],
    ['abu-hanifa', 'text', [117], 'لا يحمل المطلق على المقيد عند اختلاف السبب.', 'Vat bij een andere oorzaak niet op.'],
    ['ash-shafii', 'text', [117], 'يحمل المطلق على المقيد عند اختلاف السبب قياساً.', 'Vat bij een andere oorzaak op via analogie.']
  ],
  subtleties: [
    [115, '"زعم" إشارة إلى المخالفة', '"Beweerde" laat afstand zien', 'عبر المصنف عن قول الآمدي وابن الحاجب بـ"زعم" إشارة إلى عدم موافقته لهما.', 'De auteur gebruikt "beweerde" voor al-Āmidī en Ibn al-Ḥājib om te laten zien dat hij het niet met hen eens is.'],
    [115, 'المطلق ليس النكرة في سياق النفي', 'Niet het onbepaalde naamwoord na ontkenning', 'المطلق من قبيل الخاص، والنكرة في سياق النفي تفيد العموم فليست مطلقاً.', 'Het onbepaalde hoort bij het specifieke; een onbepaald naamwoord na ontkenning is algemeen en dus niet onbepaald.'],
    [115, 'العبارة مختلفة والمعنى واحد', 'Andere woorden, dezelfde inhoud', 'تعريفا الآمدي وابن الحاجب مختلفان في العبارة متحدان في المعنى عندهما.', 'De definities van al-Āmidī en Ibn al-Ḥājib verschillen in woorden, maar betekenen voor hen hetzelfde.'],
    [117, 'المنفيان من باب العام والخاص', 'Twee ontkenningen zijn algemeen en specifiek', '"لا تعتق مكاتباً" نكرة في سياق النهي، فهي من باب الخاص والعام لا المطلق والمقيد.', '"Bevrijd geen slaaf met vrijkoopcontract" is een onbepaald naamwoord na een verbod; het hoort dus bij algemeen en specifiek, niet bij onbepaald en beperkt.'],
    [118, 'البيع والنكاح', 'Verkoop en huwelijk', 'في حاشية: البيع مبني على المكايسة والمشاحة، والنكاح مبني على المكارمة والمسامحة.', 'Een kanttekening: verkoop rust op afdingen en zuinigheid, het huwelijk op vrijgevigheid en toegeeflijkheid.'],
    [118, 'لماذا لا يحمل الحنفية في السبب', 'Waarom de Ḥanafieten bij de oorzaak niet opvatten', 'لأن تعدد الأسباب لحكم واحد جائز، كتعدد أسباب الملك من بيع وهبة، فيعمل بكل منهما على حدة ولا تعارض.', 'Want één oordeel kan meerdere oorzaken hebben, zoals eigendom door koop of schenking; men past elk apart toe en er is geen tegenspraak.']
  ],
  rules: [
    [114, 'المطلق عمومه بدلي', 'Het onbepaalde vraagt één willekeurig geval'],
    [115, 'الأمر بمطلق الماهية أمر بالماهية', 'Een gebod tot de soort is een gebod tot de soort zelf', 'ولا ينصرف إلى جزئي إلا بقرينة.', 'Pas met een aanwijzing naar één geval.'],
    [116, 'المطلق والمقيد كالعام والخاص', 'Onbepaald en beperkt zijn als algemeen en specifiek'],
    [117, 'المطلق مع النهي عن المقيد يقيد بضد الصفة', 'Onbepaald gebod met verbod op het beperkte: het tegendeel van de eigenschap', '', '', 'أعتق رقبة / لا تعتق رقبة كافرة: أعتق مؤمنة.', '"Bevrijd een slaaf" / "geen ongelovige": bevrijd een gelovige.'],
    [118, 'المطلق إذا تنازعه قيدان متنافيان لا يحمل على أحدهما', 'Een onbepaald woord met twee tegenstrijdige beperkingen wordt naar geen van beide opgevat', 'إلا إن كان أولى بأحدهما قياساً.', 'Tenzij analogie er één sterker maakt.']
  ],
  disputes: [
    { page: 115, q: ['هل المطلق هو النكرة؟', 'Is het onbepaalde woord hetzelfde als het onbepaalde naamwoord?'], views: [['المصنف: لا، المطلق بلا قيد الوحدة', 'De auteur: nee, het heeft geen beperking tot één'], ['الآمدي وابن الحاجب: نعم', 'Al-Āmidī en Ibn al-Ḥājib: ja']], preferred: ['لا', 'Nee'], fruit: ['من علق الطلاق بكون الحمل ذكراً فولدت ذكرين.', 'Bij een verstoting op voorwaarde van "een jongen", als er twee jongens komen.'] },
    { page: 116, q: ['ما حكم المقيد المتأخر مع اتحاد الحكم والسبب؟', 'Wat is een later beperkt woord bij zelfde oordeel en oorzaak?'], views: [['ناسخ إن تأخر عن العمل، وإلا حمل عليه المطلق', 'Opheffing als het na de toepassing komt; anders opvatten'], ['الحنفية: ناسخ إن تأخر مطلقاً', 'Ḥanafieten: altijd opheffing als het later komt'], ['صورة غريبة: يلغى القيد', 'Vreemde mening: de beperking vervalt']], preferred: ['ناسخ إن تأخر عن العمل، وإلا حمل عليه المطلق', 'Opheffing na toepassing, anders opvatten'] },
    { page: 117, q: ['هل يحمل المطلق على المقيد إن اختلف السبب؟', 'Vat men het onbepaalde naar het beperkte op bij een andere oorzaak?'], views: [['أبو حنيفة: لا', 'Abū Ḥanīfa: nee'], ['يحمل لفظاً', 'Ja, via het woord'], ['الشافعي: قياساً', 'Ash-Shāfiʿī: via analogie']], fruit: ['اشتراط الإيمان في رقبة الظهار واليمين.', 'Of de slaaf bij ẓihār en eed gelovig moet zijn.'] },
    { page: 118, q: ['هل يحمل إن كان الإطلاق والتقييد في السبب؟', 'Vat men op als onbepaald en beperkt over de oorzaak gaan?'], views: [['الجمهور: يحمل', 'Meerderheid: ja'], ['الحنفية: لا، ويعمل بكل منهما', 'Ḥanafieten: nee, elk apart']], fruit: ['زكاة الفطر عن العبد الكافر.', 'Zakāt al-fiṭr voor een ongelovige slaaf.'] }
  ],
  pitfalls: [
    [115, 'جعل المطلق من قبيل العام', 'Het onbepaalde bij het algemene rekenen', 'المطلق من قبيل الخاص، وعمومه بدلي لا شمولي.', 'Het hoort bij het specifieke; het vraagt één geval, het omvat niet alles.'],
    [115, 'الظن أن الأمر بمطلق الماهية يجزئ فيه كل جزئي بلا نظر', 'Denken dat bij een gebod tot de soort elk geval zonder meer volstaat', 'عند الجمهور القرينة تصرفه، كالعادة في ذبح الكبش.', 'Volgens de meerderheid stuurt een aanwijzing het, zoals de gewoonte een ram te slachten.'],
    [116, 'حمل المطلق على المقيد إذا تأخر المقيد عن العمل', 'Opvatten als het beperkte na de toepassing komt', 'إذا تأخر عن وقت العمل بالمطلق فهو ناسخ لا مقيد.', 'Dan is het opheffing, geen beperking.'],
    [118, 'الحمل في آيتي الوضوء والسرقة', 'Opvatten bij de handen in wuḍūʾ en diefstal', 'اختلفا في الحكم والسبب فلا حمل اتفاقاً.', 'Oordeel en oorzaak verschillen, dus volgens iedereen niet opvatten.']
  ],
  ayat: [
    [116, 'حرمت عليكم الميتة والدم', 'الدم مطلق.', 'Bloed onbepaald.'],
    [116, 'أو دماً مسفوحاً', 'الدم مقيد بالمسفوح؛ والحكم التحريم والسبب الإيذاء.', 'Bloed beperkt tot vergoten bloed; oordeel verbod, oorzaak schade.']
  ],
  review: [
    ['المطلق الدال على الماهية بلا قيد.', 'Onbepaald: duidt de soort aan zonder beperking.'],
    ['عموم المطلق بدلي وعموم العام شمولي.', 'Onbepaald: één geval; algemeen: alles.'],
    ['المطلق ليس النكرة، خلافاً للآمدي وابن الحاجب.', 'Onbepaald is niet het onbepaalde naamwoord, anders dan al-Āmidī en Ibn al-Ḥājib.'],
    ['الأمر بمطلق الماهية أمر بالماهية عند الجمهور.', 'Een gebod tot de soort is volgens de meerderheid een gebod tot de soort zelf.'],
    ['المطلق والمقيد كالعام والخاص.', 'Onbepaald en beperkt zijn als algemeen en specifiek.'],
    ['اتحاد الحكم والسبب مع الإثبات: يحمل المطلق على المقيد.', 'Zelfde oordeel en oorzaak, bevestigend: opvatten.'],
    ['أمر ونهي: يقيد المطلق بضد الصفة.', 'Gebod en verbod: het tegendeel van de eigenschap.'],
    ['اختلاف السبب: أبو حنيفة لا يحمل، والشافعي قياساً.', 'Andere oorzaak: Abū Ḥanīfa niet, ash-Shāfiʿī via analogie.'],
    ['المقيد بمتنافيين يبقى على إطلاقه إلا بقياس.', 'Twee tegenstrijdige beperkingen: het blijft onbepaald, tenzij analogie beslist.']
  ],
  quiz: [
    { type: 'mc', page: 114, q: ['"بلا قيد الكثرة" في حد المطلق يخرج:', '"Zonder beperking tot velen" sluit uit:'], options: [['العدد', 'النكرة', 'المعرفة', 'العام'], ['het getal', 'het onbepaalde naamwoord', 'het bepaalde', 'het algemene woord']], answer: 0, explain: ['كجاء عشرة؛ والنكرة والمعرفة تخرجان بقيد الوحدة.', 'Zoals "tien kwamen"; de andere twee vallen af door "tot één".'] },
    { type: 'tf', page: 114, q: ['عموم المطلق شمولي استغراقي.', 'Het onbepaalde omvat alles.'], answer: 1, explain: ['عمومه بدلي يكفي فيه الواحد، والشمولي هو العام.', 'Eén geval is genoeg; alles omvatten is het algemene woord.'] },
    { type: 'mc', page: 115, q: ['من عرف المطلق بأنه النكرة في سياق الإثبات؟', 'Wie definieerde het als onbepaald naamwoord in een bevestigende zin?'], options: [['الآمدي', 'ابن الحاجب', 'المصنف', 'الشافعي'], ['al-Āmidī', 'Ibn al-Ḥājib', 'de auteur', 'ash-Shāfiʿī']], answer: 0, explain: ['وابن الحاجب: الدال على شائع في جنسه.', 'Ibn al-Ḥājib: wat één willekeurige uit de soort aanduidt.'] },
    { type: 'mc', page: 116, q: ['إن قال: إن كان حملك ذكراً فأنت طالق، فولدت ذكرين، فعلى قول المصنف:', '"Als je een jongen draagt, ben je verstoten", en zij baart twee jongens. Volgens de auteur:'], options: [['تطلق', 'لا تطلق', 'يتوقف', 'تطلق طلقتين'], ['is zij verstoten', 'is zij niet verstoten', 'geen uitspraak', 'twee keer verstoten']], answer: 0, explain: ['ولا تطلق على قول الآمدي وابن الحاجب.', 'Volgens al-Āmidī en Ibn al-Ḥājib niet.'] },
    { type: 'mc', page: 117, q: ['أعتق رقبة / لا تعتق رقبة كافرة، فالواجب:', '"Bevrijd een slaaf" / "bevrijd geen ongelovige slaaf"; dus:'], options: [['عتق رقبة مؤمنة', 'عتق أي رقبة', 'لا عتق', 'التوقف'], ['een gelovige slaaf bevrijden', 'elke slaaf bevrijden', 'niet bevrijden', 'geen uitspraak']], answer: 0, explain: ['يقيد المطلق بضد الصفة.', 'Het tegendeel van de eigenschap.'] },
    { type: 'mc', page: 117, q: ['من قال: يحمل المطلق على المقيد قياساً عند اختلاف السبب؟', 'Wie zei: bij een andere oorzaak opvatten via analogie?'], options: [['الشافعي', 'أبو حنيفة', 'الآمدي', 'الحسن البخاري'], ['ash-Shāfiʿī', 'Abū Ḥanīfa', 'al-Āmidī', 'al-Ḥasan al-Bukhārī']], answer: 0, explain: ['وأبو حنيفة لا يحمل.', 'Abū Ḥanīfa vat niet op.'] },
    { type: 'tf', page: 118, q: ['إذا تنازع المطلق قيدان متنافيان حمل على الأول.', 'Bij twee tegenstrijdige beperkingen kiest men de eerste.'], answer: 1, explain: ['يستغنى عنهما ويتمسك بالإطلاق، إلا إن كان أولى بأحدهما قياساً.', 'Men laat beide los en houdt het onbepaald, tenzij analogie beslist.'] }
  ],
  note: ['من باب الظاهر والمؤول (ص 119) لم يرد في المذكرات إلا العنوان. وفي المنفيين تقول المذكرات في المتن: قائل المفهوم يقيده، وفي الخلاصة: عدم الحمل اتفاقاً؛ فليراجع.', 'Van het hoofdstuk over het duidelijke en het uitgelegde (p. 119) staat in de notities alleen de titel. Bij twee ontkennende teksten zeggen de notities eerst: wie de tegengestelde betekenis aanvaardt, beperkt; in de samenvatting: volgens iedereen niet opvatten. Dat moet nagekeken worden.']
})
