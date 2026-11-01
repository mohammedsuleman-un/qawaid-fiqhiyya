// Hoofdstukkaart eenheid 7 van تلخيص جمع الجوامع: حروف المعاني (p. 58–68).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p058–p068.html).
// Let op: p. 65–66 zijn in de notities nog niet af ("يتبع قريباً").
import { kaart } from './kaart.js'

export default kaart({
  unit: 7,
  subtitle: ['فصل واحد: سبعة وعشرون حرفاً من حروف المعاني يحتاج إليها الفقيه لكثرة وقوعها في الأدلة', 'Eén onderdeel: zevenentwintig betekenispartikels die een jurist nodig heeft omdat ze vaak in de bewijzen voorkomen'],
  summary: [
    'يذكر المصنف ما يحتاج الفقيه إلى معرفته من حروف المعاني، وأدخل فيها بعض الأسماء كـ"كل" و"إذا" تغليباً، وهي: إذن، إن، أو، أي، أيّ، إذ، إذا، الباء، بل، بيد، ثم، حتى، رب، على، الفاء، في، كي، كل، اللام، لولا، لو، لن، ما، من، مَن، هل، الواو؛ مع معانيها وأمثلتها والخلاف في بعضها، ولا سيما "لو" والخلاف في دلالتها على الامتناع.',
    'De auteur bespreekt de betekenispartikels die een jurist moet kennen; hij rekent er ook enkele naamwoorden zoals kull en idhā toe. Het gaat om: idhan, in, aw, ay, ayy, idh, idhā, bi-, bal, bayda, thumma, ḥattā, rubba, ʿalā, fa-, fī, kay, kull, li-, lawlā, law, lan, mā, min, man, hal en wa-, met hun betekenissen, voorbeelden en meningsverschillen, vooral over law en of het "onmogelijkheid" aanduidt.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 58 إلى 68.', 'Bladzijde 58 tot 68.'],
    root: [0, 'حروف المعاني', 'Betekenispartikels', 'الوحدة السابعة', 'Eenheid 7'],
    nodes: [
      [58, 'إذن، إن، أو', 'Idhan, in, aw', 'ص 58–59', 'p. 58–59', [['الجواب والجزاء', 'antwoord en gevolg'], ['الشك والتخيير', 'twijfel en keuze']]],
      [59, 'أي، إذ، إذا', 'Ay, idh, idhā', 'ص 59–60', 'p. 59–60', [['الظرفية', 'tijd/plaats'], ['المفاجأة', 'verrassing']]],
      [60, 'الباء، بل، بيد، ثم، حتى', 'Bi-, bal, bayda, thumma, ḥattā', 'ص 60–61', 'p. 60–61', [['الإلصاق والتبعيض', 'hechting en deel'], ['الترتيب والمهلة', 'volgorde en tussentijd']]],
      [61, 'رب، على، الفاء، في، كي، كل', 'Rubba, ʿalā, fa-, fī, kay, kull', 'ص 61–62', 'p. 61–62', [['الاستعلاء والظرفية', 'boven en in'], ['الاستغراق', 'volledigheid']]],
      [62, 'اللام، لولا، لو، لن', 'Li-, lawlā, law, lan', 'ص 62–66', 'p. 62–66', [['أربعة أقوال في لو', 'vier meningen over law']]],
      [66, 'ما، من، مَن، هل، الواو', 'Mā, min, man, hal, wa-', 'ص 66–68', 'p. 66–68', [['الاسمية والحرفية', 'naamwoord en partikel'], ['مطلق الجمع', 'louter samenvoegen']]]
    ]
  },
  points: [
    [58, 'سماها حروفاً تغليباً مع أن فيها أسماء ككل وإذا.', 'Hij noemt ze allemaal partikels, hoewel er naamwoorden zoals kull en idhā bij zitten.'],
    [58, '"إذن" للجواب والجزاء: دائماً عند الشلوبين، وغالباً عند الفارسي.', 'Idhan is voor antwoord en gevolg: altijd volgens ash-Shalawbīn, meestal volgens al-Fārisī.'],
    [60, 'الباء للإلصاق حقيقة ومجازاً، ولها نحو أربعة عشر معنى، واختلف في باء ﴿وامسحوا برؤوسكم﴾.', 'Bi- is voor hechting, letterlijk en figuurlijk, met zo’n veertien betekenissen; over de bi- in "en strijk over jullie hoofden" is verschil.'],
    [61, '"ثم" للتشريك والمهلة على الصحيح والترتيب، خلافاً للعبادي.', 'Thumma geeft deelname, tussentijd (volgens het juiste) en volgorde, anders dan al-ʿAbbādī.'],
    [61, '"رب" للتكثير والتقليل ولا تختص بأحدهما.', 'Rubba is voor veel en weinig, en niet tot één van beide beperkt.'],
    [64, 'الصحيح في "لو" وفاقاً لوالد المصنف: امتناع ما يليه واستلزامه لتاليه.', 'Juist over law, met de vader van de auteur: wat erop volgt is onmogelijk, en het brengt het vervolg met zich mee.'],
    [66, '"لن" للنفي والنصب والاستقبال، ولا تفيد تأكيد النفي ولا تأبيده خلافاً للزمخشري.', 'Lan ontkent, maakt de werkwoordsvorm conjunctief en toekomstig; ze versterkt of vereeuwigt de ontkenning niet, anders dan az-Zamakhsharī zegt.'],
    [68, 'الواو لمطلق الجمع على الصحيح، لا للترتيب ولا للمعية.', 'Wa- voegt volgens het juiste alleen samen, zonder volgorde of gelijktijdigheid.']
  ],
  terms: [
    ['حروف المعاني', 'ḥurūf al-maʿānī', 58, 'الحروف التي يحتاج الفقيه إلى معرفتها لكثرة وقوعها في الأدلة.', 'De partikels die een jurist moet kennen omdat ze vaak in de bewijzen staan.'],
    ['إذن', 'idhan', 58, 'للجواب والجزاء.', 'Voor antwoord en gevolg.', 'غداً أزورك، إذن أكرمك.', '"Morgen bezoek ik je." "Dan eer ik je."'],
    ['إنْ', 'in', 58, 'للشرط والنفي والزيادة.', 'Voor voorwaarde, ontkenning en toevoeging.', '﴿إن أنت إلا نذير﴾ أي ما أنت.', '"Jij bent slechts een waarschuwer": in = niet.'],
    ['أو', 'aw', 58, 'للشك والإبهام والتخيير ومطلق الجمع والتقسيم وبمعنى إلى والإضراب، وزاد الحريري التقريب.', 'Voor twijfel, vaagheid, keuze, louter samenvoegen, indeling, "tot" en correctie; al-Ḥarīrī voegt "benadering" toe.'],
    ['أيْ (بالسكون)', 'ay', 59, 'للتفسير ولنداء القريب أو البعيد أو المتوسط على أقوال.', 'Voor uitleg ("dat wil zeggen") en om iemand aan te roepen, dichtbij, ver of ertussen, volgens verschillende meningen.'],
    ['أيّ (بالتشديد)', 'ayy', 59, 'للشرط والاستفهام وموصولة ودالة على الكمال ووصلة لنداء ما فيه أل.', 'Voor voorwaarde, vraag, betrekkelijk, volmaaktheid ("wat een gulheid!") en als brug bij een aanroep met al- (yā ayyuhā).'],
    ['إذْ', 'idh', 59, 'اسم للماضي ظرفاً ومفعولاً به وبدلاً منه ومضافاً إليها، وللمستقبل في الأصح، وللتعليل، وللمفاجأة وفاقاً لسيبويه.', 'Een naamwoord voor het verleden (tijdsbepaling, lijdend voorwerp, bijstelling, na een tijdwoord), volgens het juiste ook voor de toekomst, voor reden, en voor verrassing (met Sībawayh).'],
    ['إذا', 'idhā', 59, 'للمفاجأة، وظرف للمستقبل مضمن معنى الشرط غالباً، ونادراً للماضي والحال.', 'Voor verrassing, en meestal een toekomstige tijdsbepaling met voorwaarde; zelden voor verleden of heden.'],
    ['الباء', 'al-bāʾ', 60, 'للإلصاق والتعدية والاستعانة والسببية والمصاحبة والظرفية والبدل والمقابلة والاستعلاء والمجاوزة والقسم والغاية والتوكيد والتبعيض.', 'Voor hechting, overgankelijk maken, middel, oorzaak, begeleiding, plaats, vervanging, ruil, boven, "over/van", eed, doel, versterking en deel.'],
    ['بل', 'bal', 60, 'للعطف إن تلاها مفرد، وللإضراب إبطالاً أو انتقالاً.', 'Nevenschikkend als er één woord volgt; anders correctie: iets ongedaan maken of naar iets anders overgaan.'],
    ['بيد', 'bayda', 60, 'اسم ملازم للإضافة والنصب، بمعنى غير، وبمعنى من أجل.', 'Een naamwoord dat altijd een genitief heeft en altijd in de accusatief staat; betekent "behalve dat" of "omdat".'],
    ['ثم', 'thumma', 61, 'حرف عطف للتشريك والمهلة والترتيب.', 'Nevenschikkend: deelname, tussentijd en volgorde.'],
    ['حتى', 'ḥattā', 61, 'لانتهاء الغاية غالباً، وللتعليل، ونادراً للاستثناء.', 'Meestal "tot", ook "zodat", en zelden "behalve".'],
    ['رب', 'rubba', 61, 'للتكثير والتقليل.', 'Voor veel en voor weinig.'],
    ['على', 'ʿalā', 61, 'اسم بمعنى فوق في الأصح، وحرف للاستعلاء والمصاحبة والمجاوزة والتعليل والظرفية والاستدراك والزيادة.', 'Volgens het juiste soms een naamwoord ("boven"), anders een partikel voor boven, met, over, reden, in, voorbehoud en toevoeging.', 'أما "علا يعلو" فعل.', '"ʿalā, yaʿlū" (met alif) is een werkwoord.'],
    ['الفاء', 'al-fāʾ', 61, 'عاطفة للترتيب المعنوي والذكري، وللتعقيب في كل شيء بحسبه، وللسببية.', 'Nevenschikkend: volgorde in betekenis of in vermelding, direct-na naar de aard van de zaak, en oorzaak.'],
    ['في', 'fī', 62, 'للظرفيتين والمصاحبة والتعليل والاستعلاء والتوكيد والتعويض، وبمعنى الباء وإلى ومن.', 'Voor tijd en plaats, begeleiding, reden, boven, versterking, compensatie, en in de betekenis van bi-, ilā en min.'],
    ['كي', 'kay', 62, 'للتعليل بمعنى اللام، وبمعنى أن المصدرية إذا سبقتها لام التعليل.', 'Voor reden (zoals li-), en als "dat" (an) als li- ervoor staat.'],
    ['كل', 'kull', 62, 'اسم لاستغراق أفراد المنكر، والمعرف المجموع، وأجزاء المفرد المعرف.', 'Een naamwoord voor volledigheid: alle exemplaren (onbepaald), allen (bepaald meervoud), of alle delen (bepaald enkelvoud).'],
    ['اللام', 'al-lām', 62, 'للتعليل والاستحقاق والاختصاص والملك والصيرورة والتمليك وشبهه وتوكيد النفي والتعدية والتوكيد، وبمعنى إلى وعلى وفي وعند وبعد ومن وعن.', 'Voor reden, recht op, eigen aan, bezit, uitkomst, eigendom geven en iets wat erop lijkt, versterkte ontkenning, overgankelijk maken, versterking, en in de betekenis van ilā, ʿalā, fī, ʿinda, baʿda, min en ʿan.'],
    ['لولا', 'lawlā', 63, 'في الاسمية امتناع جوابه لوجود شرطه، وفي المضارعة للتحضيض والعرض، وفي الماضية للتوبيخ، وقيل للنفي.', 'Bij een naamwoordzin: het antwoord blijft uit omdat de voorwaarde er is; met een onvoltooid werkwoord: aansporing of vriendelijk verzoek; met een voltooid werkwoord: verwijt; volgens een mening ontkenning.'],
    ['لو', 'law', 63, 'حرف شرط للماضي، ويقل للمستقبل.', 'Voorwaardepartikel voor het verleden, zelden voor de toekomst.'],
    ['لن', 'lan', 66, 'حرف نفي ونصب واستقبال، وترد للدعاء.', 'Partikel van ontkenning, conjunctief en toekomst; ook voor een smeekbede.'],
    ['ما', 'mā', 66, 'اسمية (موصولة، نكرة موصوفة، تعجبية، استفهامية، شرطية) وحرفية (مصدرية، نافية، زائدة كافة وغير كافة).', 'Als naamwoord: betrekkelijk, onbepaald met bijvoeglijke bepaling, uitroep, vraag, voorwaarde. Als partikel: "dat", ontkenning, toevoeging die de werking stopt of niet.'],
    ['مِن', 'min', 67, 'لابتداء الغاية غالباً، والتبعيض والتبيين والتعليل والبدل والغاية وتنصيص العموم والفصل، ومرادفة الباء وعن وفي وعند وعلى.', 'Meestal "vanaf"; ook deel, uitleg, reden, vervanging, eindpunt, nadruk op algemeenheid en onderscheid, en in de betekenis van bi-, ʿan, fī, ʿinda en ʿalā.'],
    ['مَن', 'man', 68, 'شرطية واستفهامية وموصولة ونكرة موصوفة، وقال الفارسي: ونكرة تامة.', 'Voorwaarde, vraag, betrekkelijk en onbepaald met bepaling; al-Fārisī: ook onbepaald zonder bepaling.'],
    ['هل', 'hal', 68, 'حرف استفهام لطلب التصديق الإيجابي، لا التصور ولا التصديق السلبي.', 'Vraagpartikel voor een bevestigende ja/nee-vraag; niet voor een keuzevraag en niet voor een ontkennende vraag (daarvoor dient a-).'],
    ['الواو', 'al-wāw', 68, 'حرف عطف لمطلق الجمع.', 'Nevenschikkend, voor louter samenvoegen.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['معاني الباء', 'Betekenissen van bi-'],
      intro: ['كما في الصفحة 60.', 'Zoals op bladzijde 60.'],
      nodes: [
        [60, 'الإلصاق', 'Hechting', 'به مرض، مررت بك', '"hij heeft een ziekte", "ik kwam langs jou"'],
        [60, 'التعدية', 'Overgankelijk maken', '﴿ذهب الله بنورهم﴾', '"Allah nam hun licht weg"'],
        [60, 'الاستعانة', 'Middel', 'ضربت بالعصا', '"ik sloeg met de stok"'],
        [60, 'السببية', 'Oorzaak', '﴿فكلاً أخذنا بذنبه﴾', '"elk van hen grepen Wij om zijn zonde"'],
        [60, 'الظرفية', 'Plaats', '﴿نصركم الله ببدر﴾', '"Allah hielp jullie bij Badr"'],
        [60, 'البدل والمقابلة', 'Vervanging en ruil', 'اشتريت الكتاب بألف', '"ik kocht het boek voor duizend"'],
        [60, 'التوكيد', 'Versterking', '﴿وكفى بالله شهيداً﴾', '"Allah volstaat als getuige"'],
        [60, 'التبعيض', 'Deel', '﴿عيناً يشرب بها عباد الله﴾', '"een bron waaruit de dienaren van Allah drinken"']
      ],
      page: 60
    },
    {
      type: 'cards',
      title: ['"لو": أربعة أقوال', 'Law: vier meningen'],
      intro: ['ص 64–65؛ وبقية التفصيل لم تكتمل في الحاشية.', 'p. 64–65; de rest van de uitleg is in de notities nog niet af.'],
      nodes: [
        [64, 'سيبويه: حرف لما كان سيقع لوقوع غيره', 'Sībawayh: voor wat zou gebeuren als iets anders gebeurde', 'تدل على التقليل لا الامتناع المطلق', 'duidt op beperking, niet op absolute onmogelijkheid'],
        [64, 'غيره: حرف امتناع لامتناع', 'Anderen: onmogelijkheid door onmogelijkheid', 'ردّه بعض المحققين', 'door sommige grondige geleerden afgewezen'],
        [64, 'الشلوبين: لمجرد الربط', 'Ash-Shalawbīn: alleen verbinding', 'رُدّ بأنه جحد للبديهيات', 'afgewezen: het ontkent het vanzelfsprekende'],
        [64, 'الصحيح: امتناع ما يليه واستلزامه لتاليه', 'Juist: wat erop volgt is onmogelijk en brengt het vervolg mee', 'وفاقاً للشيخ الإمام في كشف القناع', 'met de vader van de auteur, in Kashf al-Qināʿ']
      ],
      page: 64
    },
    {
      type: 'compare',
      title: ['"لولا" بحسب ما يليها', 'Lawlā naar wat erop volgt'],
      intro: ['كما في الصفحة 63.', 'Bladzijde 63.'],
      columns: [['يليها', 'Gevolgd door'], ['المعنى', 'Betekenis'], ['المثال', 'Voorbeeld']],
      rows: [
        { label: ['١', '1'], cells: [['جملة اسمية', 'naamwoordzin'], ['امتناع الجواب لوجود الشرط', 'het antwoord blijft uit omdat de voorwaarde er is'], ['لولا أبوك لضربتك', '"als je vader er niet was, sloeg ik je"']] },
        { label: ['٢', '2'], cells: [['مضارع', 'onvoltooid werkwoord'], ['التحضيض والعرض', 'aansporing en verzoek'], ['﴿لولا تستغفرون الله﴾', '"waarom vragen jullie Allah niet om vergeving?"']] },
        { label: ['٣', '3'], cells: [['ماض', 'voltooid werkwoord'], ['التوبيخ', 'verwijt'], ['﴿لولا جاؤوا عليه بأربعة شهداء﴾', '"waarom brachten ze er geen vier getuigen voor?"']] },
        { label: ['٤', '4'], cells: [['قيل', 'een mening (al-Harawī)'], ['النفي', 'ontkenning'], ['﴿فلولا كانت قرية آمنت﴾', '"waarom was er geen stad die geloofde?"']] }
      ],
      page: 63
    },
    {
      type: 'tree',
      title: ['أقسام "ما"', 'Soorten mā'],
      intro: ['ص 66–67.', 'p. 66–67.'],
      root: [66, 'ما', 'Mā'],
      nodes: [
        [66, 'اسمية', 'Naamwoord', '', '', [[66, 'موصولة', 'Betrekkelijk'], [66, 'نكرة موصوفة', 'Onbepaald met bepaling'], [67, 'تعجبية', 'Uitroep'], [67, 'استفهامية', 'Vraag'], [67, 'شرطية زمانية وغير زمانية', 'Voorwaarde, met of zonder tijd']]],
        [67, 'حرفية', 'Partikel', '', '', [[67, 'مصدرية', '"Dat"'], [67, 'نافية', 'Ontkenning'], [67, 'زائدة كافة', 'Toevoeging die de werking stopt'], [67, 'زائدة غير كافة', 'Toevoeging zonder dat effect']]]
      ],
      page: 66
    }
  ],
  sections: [
    [58, 'إذن عند النحاة', 'Idhan volgens de grammatici', 'قال سيبويه: للجواب والجزاء، كقولك لمن قال "غداً أزورك": إذن أكرمك. قال الشلوبين: دائماً. وقال الفارسي: غالباً، فقد تكون للجواب دون الجزاء: أحبك، إذن أصدقك.', 'Sībawayh: voor antwoord en gevolg ("morgen kom ik" — "dan eer ik je"). Ash-Shalawbīn: altijd. Al-Fārisī: meestal; soms alleen antwoord zonder gevolg ("ik hou van je" — "dan geloof ik je").'],
    [58, 'معاني "أو"', 'Betekenissen van aw', 'للشك ﴿لبثنا يوماً أو بعض يوم﴾، والإبهام ﴿أتاها أمرنا ليلاً أو نهاراً﴾، والتخيير ﴿أو كسوتهم أو تحرير رقبة﴾، ومطلق الجمع ﴿ولا تطع منهم آثماً أو كفوراً﴾، والتقسيم، وبمعنى إلى، والإضراب ﴿أو يزيدون﴾، وزاد الحريري التقريب.', 'Twijfel ("we bleven een dag of een deel van een dag"), vaagheid ("Ons bevel kwam ’s nachts of overdag"), keuze ("of hen kleden of een slaaf vrijlaten"), samenvoegen ("gehoorzaam geen zondaar of ongelovige": beide niet), indeling, "tot", correctie ("of meer"); al-Ḥarīrī: benadering.'],
    [59, 'إذا للمفاجأة: حرف أم ظرف؟', 'Idhā van verrassing: partikel of bijwoord?', 'هي حرف وفاقاً للأخفش وابن مالك، وقال المبرد وابن عصفور: ظرف مكان، والزجاج والزمخشري: ظرف زمان.', 'Een partikel, met al-Akhfash en Ibn Mālik; al-Mubarrad en Ibn ʿUṣfūr: een plaatsbepaling; az-Zajjāj en az-Zamakhsharī: een tijdsbepaling.'],
    [60, 'باء ﴿وامسحوا برؤوسكم﴾', 'De bi- in "strijk over jullie hoofden"', 'اختلف فيها الأحناف والشافعية: هل هي للتبعيض أم للإلصاق؛ والتبعيض قال به الأصمعي والفارسي وابن مالك.', 'De Ḥanafieten en Shāfiʿieten verschillen: deel of hechting; "deel" als betekenis van bi- wordt aanvaard door al-Aṣmaʿī, al-Fārisī en Ibn Mālik.'],
    [60, 'بيد أني من قريش', '"Behalve dat ik van Quraysh ben"', 'بيد بمعنى غير أو من أجل؛ وفي «أنا أفصح العرب بيد أني من قريش» إن كانت بمعنى غير فهي تشبه الذم وهي من باب تأكيد المدح.', 'Bayda betekent "behalve" of "omdat". In "ik ben de welsprekendste Arabier, bayda ik van Quraysh ben" lijkt het met "behalve" op een minpunt, maar het is lof die versterkt wordt.'],
    [61, 'ثم وحتى', 'Thumma en ḥattā', 'ثم للتشريك والمهلة على الصحيح والترتيب خلافاً للعبادي، كوقفت على أولادي ثم أولاد أولادي. وحتى لانتهاء الغاية غالباً ﴿سلام هي حتى مطلع الفجر﴾، وللتعليل، ونادراً للاستثناء.', 'Thumma: deelname, tussentijd en volgorde (anders dan al-ʿAbbādī), zoals "ik vermaak dit aan mijn kinderen, thumma aan hun kinderen". Ḥattā: meestal "tot" ("vrede is zij tot het aanbreken van de dageraad"), ook reden, en zelden uitzondering.'],
    [61, 'على والفاء', 'ʿAlā en fa-', 'على اسم بمعنى فوق في الأصح (من على السطح)، وحرف لسبعة معان منها الاستعلاء والمصاحبة والتعليل والظرفية. والفاء للترتيب المعنوي (قام زيد فعمرو) والذكري (توضأ فغسل وجهه)، وللتعقيب بحسبه (تزوج فولد له)، وللسببية.', 'ʿAlā is volgens het juiste soms een naamwoord ("van boven het dak"), anders een partikel met zeven betekenissen, waaronder boven, met, reden en in. Fa-: volgorde in feit ("Zayd stond op en toen ʿAmr") of in vermelding ("hij deed wuḍūʾ: hij waste zijn gezicht"), direct-na naar de aard ("hij trouwde en kreeg een kind"), en oorzaak.'],
    [62, 'كل واللام', 'Kull en li-', 'كل اسم لاستغراق أفراد المنكر «كل مولود يولد على الفطرة»، والمعرف المجموع، وأجزاء المفرد المعرف (كل الغلام حسن). واللام لمعان كثيرة أولها التعليل ﴿لتبين للناس﴾، والاستحقاق (النار للكافرين)، والاختصاص (الجنة للمتقين)، والملك، والصيرورة ﴿ليكون لهم عدواً وحزناً﴾.', 'Kull geeft volledigheid: elk exemplaar ("elk kind wordt geboren op de fiṭra"), allen, of alle delen ("de hele jongen is mooi"). Li- heeft veel betekenissen: reden ("opdat jij de mensen uitlegt"), recht op ("het Vuur is voor de ongelovigen"), eigen aan ("het Paradijs is voor de godvrezenden"), bezit, en uitkomst ("zodat hij voor hen een vijand en verdriet werd").'],
    [64, 'نقد القول بالامتناع المطلق في "لو"', 'Kritiek op "absolute onmogelijkheid" bij law', 'لا يستقيم في كل أحواله، كقوله تعالى ﴿ولو أن ما في الأرض من شجرة أقلام… ما نفدت كلمات الله﴾، فلا نثبت نفاد كلمات الله؛ وكأثر عمر في صهيب: "لو لم يخف الله لم يعصه"، فلا يستقيم: لو خاف الله لعصاه.', 'Dat klopt niet altijd: "en als alle bomen op aarde pennen waren… de woorden van Allah zouden niet opraken" betekent niet dat ze wel opraken; en ʿUmar over Ṣuhayb: "als hij Allah niet vreesde, zou hij Hem niet ongehoorzaam zijn" betekent niet: omdat hij Allah vreest, is hij ongehoorzaam.'],
    [65, 'تفصيل قول والد المصنف', 'De uitwerking van de vader van de auteur', 'ينتفي التالي إن ناسب ولم يخلف المتقدم غيره، كـ﴿لو كان فيهما آلهة إلا الله لفسدتا﴾؛ لا إن خلفه غيره، كقولك في الطائر: لو كان إنساناً لكان حيواناً. ثم يثبت التالي في أحوال لم تكتمل في الحاشية.', 'Het vervolg vervalt als het past en er niets anders in de plaats kan komen: "als er in beide goden waren behalve Allah, zouden ze in verval raken". Niet als iets anders in de plaats kan komen: over een vogel "als het een mens was, was het een dier" (het is toch een dier). Daarna volgt wanneer het vervolg wel blijft; dat deel is in de notities nog niet af.'],
    [66, 'لن ليست للتأبيد', 'Lan betekent niet "nooit"', 'لا تفيد تأكيد النفي ولا تأبيده، خلافاً للزمخشري في الكشاف (التأكيد) والأنموذج (التأبيد). وترد للدعاء وفاقاً لابن عصفور ﴿فلن أكون ظهيراً للمجرمين﴾.', 'Lan versterkt of vereeuwigt de ontkenning niet, anders dan az-Zamakhsharī in al-Kashshāf (versterking) en al-Unmūdhaj (eeuwig). Ze kan een smeekbede zijn, met Ibn ʿUṣfūr ("laat mij dan geen helper van de misdadigers zijn").'],
    [68, 'هل والواو', 'Hal en wa-', 'هل لطلب التصديق الإيجابي (هل جاء زيد؟) لا التصور ولا التصديق السلبي، فهما موضع الهمزة. والواو لمطلق الجمع على الصحيح ﴿فاغسلوا وجوهكم وأيديكم﴾، وقيل للمعية وهو مرجوح، وقيل للترتيب وهو شاذ.', 'Hal is voor een bevestigende ja/nee-vraag ("is Zayd gekomen?"), niet voor een keuzevraag of ontkennende vraag; daarvoor dient a-. Wa- voegt alleen samen ("wast jullie gezicht en handen"); "tegelijk" is een zwakke mening, "volgorde" een afwijkende.']
  ],
  keycards: [
    ['opsomming', 58, 'معاني "إن" الخفيفة', 'Betekenissen van in', ['الشرط: ﴿إن ينتهوا يغفر لهم﴾', 'النفي: ﴿إن أنت إلا نذير﴾', 'الزيادة: ما إن زيد قائم'], ['Voorwaarde: "als ze ophouden, wordt hun vergeven"', 'Ontkenning: "jij bent slechts een waarschuwer"', 'Toevoeging: "Zayd staat niet"']],
    ['opsomming', 59, 'معاني "إذ"', 'Betekenissen van idh', ['ظرف للماضي: ﴿إذ أخرجه الذين كفروا﴾', 'مفعول به: ﴿واذكروا إذ كنتم قليلاً﴾', 'بدل من المفعول: ﴿واذكر في الكتاب مريم إذ انتبذت﴾', 'مضاف إليها: ﴿بعد إذ هديتنا﴾', 'للمستقبل: ﴿فسوف يعلمون إذ الأغلال﴾', 'للتعليل وللمفاجأة'], ['Tijd in het verleden: "toen de ongelovigen hem verdreven"', 'Lijdend voorwerp: "gedenk toen jullie weinig waren"', 'Bijstelling: "gedenk Maryam, toen zij zich afzonderde"', 'Na een tijdwoord: "nadat U ons leidde"', 'Toekomst: "zij zullen weten, wanneer de boeien…"', 'Reden en verrassing']],
    ['onderscheid', 60, 'بل: العطف والإضراب', 'Bal: nevenschikking en correctie', ['عطف: قام زيد بل عمرو', 'إضراب إبطالي: ﴿أم يقولون به جنة بل جاءهم بالحق﴾', 'إضراب انتقالي: ﴿بل هم في غمرة﴾'], ['Nevenschikking: "Zayd stond op, nee: ʿAmr"', 'Ongedaan maken: "of zeggen ze: hij is bezeten? Nee, hij bracht hun de waarheid"', 'Overgaan: "nee, zij zijn in onwetendheid"']],
    ['opsomming', 62, 'معاني "في"', 'Betekenissen van fī', ['الظرفية الزمانية والمكانية', 'المصاحبة: ﴿ادخلوا في أمم﴾', 'التعليل: ﴿لمسكم فيما أخذتم﴾', 'الاستعلاء: ﴿في جذوع النخل﴾', 'التوكيد والتعويض', 'بمعنى الباء وإلى ومن'], ['Tijd en plaats', 'Met: "gaat binnen met volken"', 'Reden: "jullie zou getroffen hebben om wat jullie namen"', 'Boven: "aan de stammen van de palmbomen"', 'Versterking en compensatie', 'In de betekenis van bi-, ilā en min']],
    ['opsomming', 67, 'معاني "مِن"', 'Betekenissen van min', ['ابتداء الغاية: ﴿من المسجد الحرام﴾', 'التبعيض: ﴿مما تحبون﴾', 'التبيين: ﴿ما ننسخ من آية﴾', 'التعليل: ﴿من الصواعق﴾', 'البدل: ﴿بالحياة الدنيا من الآخرة﴾', 'تنصيص العموم: ﴿وما من إله إلا الله﴾', 'الفصل: ﴿المفسد من المصلح﴾'], ['Vanaf: "van de Heilige Moskee"', 'Deel: "van wat jullie liefhebben"', 'Uitleg: "welk vers Wij ook opheffen"', 'Reden: "uit angst voor de donderslagen"', 'In plaats van: "het wereldse leven in plaats van het Hiernamaals"', 'Nadruk op algemeenheid: "er is geen god behalve Allah"', 'Onderscheid: "de verderver van de rechtschapene"']]
  ],
  subtleties: [
    [58, 'الحروف تغليباً', 'Allemaal "partikels"', 'ذكر بعض الأسماء ككل وإذا وسماها حروفاً تغليباً للأكثر.', 'Hij noemt ook naamwoorden zoals kull en idhā, maar spreekt van "partikels" naar de meerderheid.'],
    [58, '"أو" لمطلق الجمع', 'Aw als "en"', 'في ﴿ولا تطع منهم آثماً أو كفوراً﴾ المعنى: لا تطع هذا ولا هذا جميعاً.', 'In "gehoorzaam geen zondaar of ongelovige" is bedoeld: gehoorzaam geen van beiden.'],
    [60, 'الباء الزائدة للتوكيد', 'Bi- die alleen versterkt', 'في ﴿وكفى بالله شهيداً﴾ المعنى: كفى الله شهيداً، وفي ﴿وهزي إليك بجذع النخلة﴾ أي جذعها.', 'In "Allah volstaat als getuige" en "schud de stam van de palmboom naar je toe" voegt bi- alleen nadruk toe.'],
    [61, 'التعقيب في كل شيء بحسبه', 'Direct-na, naar de aard van de zaak', 'في "تزوج فولد له" الفاء للتعقيب مع أن بينهما مدة الحمل، لأن التعقيب في كل شيء بحسبه.', 'In "hij trouwde, fa- kreeg een kind" geeft fa- directe opvolging, ook al zit er een zwangerschap tussen: "direct" hangt af van de zaak.'],
    [62, 'كي المصدرية', 'Kay als "dat"', 'تكون بمعنى أن المصدرية إذا سبقتها لام التعليل، كـ﴿لكي لا تأسوا﴾، وهذا الفرق بينها وبين التعليلية.', 'Kay betekent "dat" als li- ervoor staat ("opdat jullie niet treuren"); dat is het verschil met kay van reden.'],
    [62, 'اللام للاستحقاق لا للاختصاص', 'Li- van recht, niet van uitsluitendheid', 'النار للكافرين للاستحقاق، وإن دخلها عصاة الموحدين؛ أما الجنة للمتقين فللاختصاص.', '"Het Vuur is voor de ongelovigen" is recht op, ook al komen er zondige moslims in; "het Paradijs is voor de godvrezenden" is uitsluitend.'],
    [63, '"لولا" للنفي عند الهروي', 'Lawlā als ontkenning volgens al-Harawī', 'ذكر الهروي أنها ترد للنفي كـ"لم" في ﴿فلولا كانت قرية آمنت﴾، ورد الجمهور أنها هنا أيضاً للتوبيخ.', 'Al-Harawī zei dat ze "niet" kan betekenen in "waarom was er geen stad die geloofde"; de meerderheid zegt: ook hier is het verwijt.'],
    [67, 'التفريق بين أقسام "ما" بتوقيف', 'Het onderscheid tussen de soorten mā', 'قالوا: لا يُفهم هذا التفريق بين أقسام الاسمية والحرفية إلا بتوقيف.', 'Men zegt: het onderscheid tussen naamwoordelijke en partikel-mā leert men alleen uit overlevering.']
  ],
  rules: [
    [60, 'الباء للإلصاق حقيقة أو مجازاً', 'Bi- is in de kern hechting, letterlijk of figuurlijk', '', '', 'به مرض؛ مررت بك.', '"Hij heeft een ziekte"; "ik kwam langs jou".'],
    [62, '"كل" تفيد الاستغراق', 'Kull geeft volledigheid', 'في المنكر والمعرف المجموع وأجزاء المفرد المعرف.', 'Bij onbepaald, bepaald meervoud en de delen van een bepaald enkelvoud.', '«كل مولود يولد على الفطرة»', '"Elk kind wordt geboren op de fiṭra".'],
    [67, '"من" في النكرة في سياق النفي تنصيص على العموم', 'Min bij een onbepaald woord in een ontkenning maakt de algemeenheid uitdrukkelijk', '', '', '﴿وما من إله إلا الله﴾', '"Er is geen god behalve Allah".'],
    [68, 'الواو لمطلق الجمع', 'Wa- voegt alleen samen', 'فلا تفيد ترتيباً ولا معية.', 'Geen volgorde en geen gelijktijdigheid.', '﴿فاغسلوا وجوهكم وأيديكم﴾', '"Wast jullie gezicht en jullie handen".']
  ],
  disputes: [
    { page: 58, q: ['هل "إذن" للجواب والجزاء دائماً؟', 'Is idhan altijd antwoord en gevolg?'], views: [['الشلوبين: دائماً', 'Ash-Shalawbīn: altijd'], ['الفارسي: غالباً', 'Al-Fārisī: meestal']] },
    { page: 59, q: ['ما "إذا" الفجائية؟', 'Wat is idhā van verrassing?'], views: [['الأخفش وابن مالك: حرف', 'Al-Akhfash en Ibn Mālik: partikel'], ['المبرد وابن عصفور: ظرف مكان', 'Al-Mubarrad en Ibn ʿUṣfūr: plaatsbepaling'], ['الزجاج والزمخشري: ظرف زمان', 'Az-Zajjāj en az-Zamakhsharī: tijdsbepaling']], preferred: ['حرف', 'Partikel'] },
    { page: 60, q: ['ما الباء في ﴿وامسحوا برؤوسكم﴾؟', 'Wat is de bi- in "strijk over jullie hoofden"?'], views: [['للتبعيض', 'Deel'], ['للإلصاق', 'Hechting']] },
    { page: 61, q: ['هل تفيد "ثم" الترتيب؟', 'Geeft thumma volgorde?'], views: [['نعم', 'Ja'], ['العبادي: لا', 'Al-ʿAbbādī: nee']] },
    { page: 61, q: ['هل "رب" للتكثير أو للتقليل؟', 'Is rubba voor veel of voor weinig?'], views: [['لهما، ولا تختص بأحدهما', 'Voor beide, niet voor één'], ['من ادعى أنها أصل في أحدهما', 'Wie zegt dat één ervan de grondbetekenis is']] },
    { page: 64, q: ['ما دلالة "لو"؟', 'Wat duidt law aan?'], views: [['سيبويه: لما كان سيقع لوقوع غيره', 'Sībawayh: wat zou gebeuren als iets anders gebeurde'], ['امتناع لامتناع', 'Onmogelijkheid door onmogelijkheid'], ['الشلوبين: لمجرد الربط', 'Ash-Shalawbīn: alleen verbinding'], ['الشيخ الإمام: امتناع ما يليه واستلزامه لتاليه', 'De vader van de auteur: wat erop volgt is onmogelijk en brengt het vervolg mee']], preferred: ['قول الشيخ الإمام', 'De mening van de vader van de auteur'] },
    { page: 66, q: ['هل تفيد "لن" تأكيد النفي أو تأبيده؟', 'Versterkt of vereeuwigt lan de ontkenning?'], views: [['لا', 'Nee'], ['الزمخشري: نعم', 'Az-Zamakhsharī: ja']] },
    { page: 68, q: ['ما دلالة الواو؟', 'Wat duidt wa- aan?'], views: [['مطلق الجمع', 'Louter samenvoegen'], ['قيل: المعية', 'Een mening: gelijktijdigheid'], ['قيل: الترتيب', 'Een mening: volgorde']], preferred: ['مطلق الجمع', 'Louter samenvoegen'] }
  ],
  pitfalls: [
    [61, 'جعل "علا" بالألف حرفاً', '"ʿAlā" met alif als partikel zien', '"علا يعلو" فعل، أما "على" فحرف أو اسم.', '"ʿAlā, yaʿlū" is een werkwoord; ʿalā (met yāʾ) is partikel of naamwoord.'],
    [64, 'جعل "لو" للامتناع المطلق في كل حال', 'Law altijd als absolute onmogelijkheid lezen', 'يرده نحو ﴿ولو أن ما في الأرض من شجرة أقلام﴾ وأثر عمر في صهيب.', 'Dat weerleggen "en als alle bomen pennen waren" en de uitspraak van ʿUmar over Ṣuhayb.'],
    [66, 'فهم "لن" على التأبيد', 'Lan als "nooit" begrijpen', 'لا تفيد تأبيد النفي ولا تأكيده عند المصنف.', 'Volgens de auteur vereeuwigt of versterkt lan de ontkenning niet.'],
    [68, 'الاستفهام بـ"هل" عن النفي', 'Met hal een ontkennende vraag stellen', 'لا يقال "هل ليس أحد في البيت" بل "أليس أحد"، لأنه موضع الهمزة.', 'Niet "hal laysa…", maar "a-laysa…"; dat is de plaats van a-.'],
    [68, 'القول إن الواو تفيد الترتيب', 'Zeggen dat wa- volgorde geeft', 'الصحيح أنها لمطلق الجمع، والترتيب قول شاذ.', 'Juist: alleen samenvoegen; volgorde is een afwijkende mening.']
  ],
  ayat: [
    [58, 'قل للذين كفروا إن ينتهوا يغفر لهم', '"إن" الشرطية.', 'In als voorwaarde.'],
    [58, 'إن أنت إلا نذير', '"إن" النافية.', 'In als ontkenning.'],
    [58, 'لبثنا يوماً أو بعض يوم', '"أو" للشك.', 'Aw voor twijfel.'],
    [58, 'أو كسوتهم أو تحرير رقبة', '"أو" للتخيير.', 'Aw voor keuze.'],
    [59, 'فإذا هي حية تسعى', '"إذا" للمفاجأة.', 'Idhā voor verrassing.'],
    [60, 'وامسحوا برؤوسكم', 'اختلف في الباء: تبعيض أو إلصاق.', 'Verschil: bi- voor deel of hechting.'],
    [60, 'عيناً يشرب بها عباد الله', 'الباء للتبعيض.', 'Bi- voor deel.'],
    [61, 'سلام هي حتى مطلع الفجر', '"حتى" لانتهاء الغاية.', 'Ḥattā voor "tot".'],
    [61, 'ربما يود الذين كفروا', '"رب" للتكثير والتقليل.', 'Rubba voor veel en weinig.'],
    [61, 'فوكزه موسى فقضى عليه', 'الفاء للسببية.', 'Fa- voor oorzaak.'],
    [62, 'كي لا يكون دولة بين الأغنياء منكم', '"كي" للتعليل.', 'Kay voor reden.'],
    [62, 'لكي لا تأسوا على ما فاتكم', '"كي" بمعنى أن المصدرية.', 'Kay als "dat".'],
    [63, 'وما كان الله ليعذبهم', 'اللام لتوكيد النفي.', 'Li- voor versterkte ontkenning.'],
    [63, 'لولا تستغفرون الله لعلكم ترحمون', '"لولا" للتحضيض.', 'Lawlā voor aansporing.'],
    [63, 'لولا جاؤوا عليه بأربعة شهداء', '"لولا" للتوبيخ.', 'Lawlā voor verwijt.'],
    [64, 'ولو أن ما في الأرض من شجرة أقلام', 'يرد على القول بالامتناع المطلق في "لو".', 'Weerlegt absolute onmogelijkheid bij law.'],
    [65, 'لو كان فيهما آلهة إلا الله لفسدتا', 'مثال لانتفاء التالي إذا ناسب ولم يخلف المتقدم غيره.', 'Voorbeeld: het vervolg vervalt omdat niets anders in de plaats kan komen.'],
    [66, 'ولن يجعل الله للكافرين على المؤمنين سبيلاً', '"لن" للنفي والنصب والاستقبال.', 'Lan voor ontkenning, conjunctief en toekomst.'],
    [66, 'فلن أكون ظهيراً للمجرمين', '"لن" للدعاء.', 'Lan voor een smeekbede.'],
    [67, 'وما من إله إلا الله', '"من" لتنصيص العموم.', 'Min maakt de algemeenheid uitdrukkelijk.'],
    [68, 'فاغسلوا وجوهكم وأيديكم إلى المرافق', 'الواو لمطلق الجمع.', 'Wa- voor louter samenvoegen.']
  ],
  hadith: [
    { text: 'أيْ رب، أيْ رب…', nl: '"O Heer, o Heer…"', note: ['مثال لـ"أي" للنداء، كما أورده في الحاشية مختصراً.', 'Voorbeeld van ay als aanroep, zo kort aangehaald in de notities.'], pages: [59] },
    { text: 'ما يسرني بها حُمُر النعم', nl: '"Ik zou er geen rode kamelen voor in de plaats willen."', note: ['الباء للبدل: أي بدلها.', 'Bi- voor vervanging: in plaats daarvan.'], pages: [60] },
    { text: 'أنا أفصح العرب، بيد أني من قريش', nl: '"Ik ben de welsprekendste van de Arabieren, bayda ik van Quraysh ben."', note: ['"بيد" بمعنى من أجل، أو بمعنى غير من باب تأكيد المدح.', 'Bayda als "omdat", of als "behalve" als versterkte lof.'], pages: [60] },
    { text: 'إذا دخل أحدكم المسجد فلا يجلس حتى…', nl: '"Als een van jullie de moskee binnengaat, laat hij niet gaan zitten totdat…"', note: ['أورده في الحاشية مثالاً لـ"حتى" بمعنى الاستثناء.', 'In de notities gebruikt als voorbeeld van ḥattā als uitzondering.'], pages: [61] },
    { text: 'والله إني لا أحلف على يمين', nl: '"Bij Allah, ik zweer geen eed…"', note: ['"على" زائدة: أي يميناً.', 'ʿAlā is hier toegevoegd: "een eed".'], pages: [61] },
    { text: 'كل مولود يولد على الفطرة', nl: '"Elk kind wordt geboren op de natuurlijke aanleg (fiṭra)."', note: ['"كل" لاستغراق أفراد المنكر.', 'Kull voor alle exemplaren van een onbepaald woord.'], pages: [62] }
  ],
  persons: [
    ['sibawayh', 'text', [58, 59, 64], 'قال: إذن للجواب والجزاء، وإذ للمفاجأة، ولو حرف لما كان سيقع لوقوع غيره.', 'Zei: idhan is antwoord en gevolg; idh kan verrassing aanduiden; law is voor wat zou gebeuren als iets anders gebeurde.'],
    ['ash-shalawbin', 'text', [58, 64], 'النحوي الأندلسي؛ قال: إذن للجواب والجزاء دائماً، ولو لمجرد الربط.', 'Andalusische grammaticus; idhan altijd antwoord en gevolg; law alleen verbinding.'],
    ['abu-ali-al-farisi', 'text', [58, 60, 68], 'قال: إذن للجواب والجزاء غالباً، والباء ترد للتبعيض، ومَن ترد نكرة تامة.', 'Idhan meestal antwoord en gevolg; bi- kan "deel" zijn; man kan onbepaald zonder bepaling zijn.'],
    ['al-hariri', 'text', [59], 'البصري الشافعي؛ زاد في معاني "أو" التقريب.', 'Uit Basra, Shāfiʿiet; voegde "benadering" toe aan de betekenissen van aw.'],
    ['al-akhfash', 'text', [59], 'تلميذ سيبويه؛ إذا الفجائية حرف.', 'Leerling van Sībawayh; idhā van verrassing is een partikel.'],
    ['ibn-malik', 'text', [59, 60], 'صاحب الألفية؛ إذا الفجائية حرف، والباء ترد للتبعيض.', 'Schrijver van de Alfiyya; idhā van verrassing is een partikel; bi- kan "deel" zijn.'],
    ['al-mubarrad', 'text', [59], 'إذا الفجائية ظرف مكان.', 'Idhā van verrassing is een plaatsbepaling.'],
    ['ibn-usfur', 'text', [59, 66], 'إذا الفجائية ظرف مكان، ولن ترد للدعاء.', 'Idhā van verrassing is een plaatsbepaling; lan kan een smeekbede zijn.'],
    ['az-zajjaj', 'text', [59], 'إذا الفجائية ظرف زمان.', 'Idhā van verrassing is een tijdsbepaling.'],
    ['az-zamakhshari', 'text', [59, 66], 'إذا الفجائية ظرف زمان، ولن تفيد تأكيد النفي (الكشاف) وتأبيده (الأنموذج).', 'Idhā van verrassing is een tijdsbepaling; lan versterkt (al-Kashshāf) en vereeuwigt (al-Unmūdhaj) de ontkenning.'],
    ['taqi-ad-din-as-subki', 'text', [64], 'رسالته كشف القناع عن لو للامتناع؛ والصحيح قوله في لو.', 'Zijn verhandeling Kashf al-Qināʿ over law; zijn mening over law is de juiste.'],
    ['umar-ibn-al-khattab', 'text', [64], 'أثره في صهيب: لو لم يخف الله لم يعصه.', 'Zijn uitspraak over Ṣuhayb: "als hij Allah niet vreesde, zou hij Hem niet ongehoorzaam zijn".'],
    ['suhayb', 'text', [64], 'قال فيه عمر: لو لم يخف الله لم يعصه.', 'Over hem zei ʿUmar: "als hij Allah niet vreesde, zou hij Hem niet ongehoorzaam zijn".']
  ],
  review: [
    ['إذن للجواب والجزاء.', 'Idhan: antwoord en gevolg.'],
    ['أو للشك والإبهام والتخيير ومطلق الجمع والتقسيم.', 'Aw: twijfel, vaagheid, keuze, samenvoegen, indeling.'],
    ['إذا الفجائية حرف عند المصنف.', 'Idhā van verrassing is voor de auteur een partikel.'],
    ['الباء أصلها الإلصاق.', 'De kern van bi- is hechting.'],
    ['ثم للتشريك والمهلة والترتيب.', 'Thumma: deelname, tussentijd, volgorde.'],
    ['الفاء للترتيب والتعقيب بحسبه والسببية.', 'Fa-: volgorde, direct-na naar de aard, oorzaak.'],
    ['كل لاستغراق الأفراد أو الأجزاء.', 'Kull: alle exemplaren of alle delen.'],
    ['لولا في الاسمية امتناع لوجود.', 'Lawlā bij een naamwoordzin: uitblijven door aanwezigheid.'],
    ['لو: امتناع ما يليه واستلزامه لتاليه.', 'Law: wat erop volgt is onmogelijk en brengt het vervolg mee.'],
    ['لن لا تفيد التأبيد.', 'Lan betekent niet "nooit".'],
    ['الواو لمطلق الجمع.', 'Wa- voegt alleen samen.']
  ],
  quiz: [
    { type: 'mc', page: 58, q: ['"أو" في ﴿أو كسوتهم أو تحرير رقبة﴾:', 'Aw in "of hen kleden of een slaaf vrijlaten":'], options: [['للتخيير', 'للشك', 'للإبهام', 'للإضراب'], ['keuze', 'twijfel', 'vaagheid', 'correctie']], answer: 0, explain: ['خصال الكفارة على التخيير.', 'De boete-opties zijn een keuze.'] },
    { type: 'mc', page: 59, q: ['من قال: "إذا" الفجائية ظرف زمان؟', 'Wie zei: idhā van verrassing is een tijdsbepaling?'], options: [['الزجاج والزمخشري', 'الأخفش وابن مالك', 'المبرد وابن عصفور', 'سيبويه'], ['az-Zajjāj en az-Zamakhsharī', 'al-Akhfash en Ibn Mālik', 'al-Mubarrad en Ibn ʿUṣfūr', 'Sībawayh']], answer: 0, explain: ['والمبرد وابن عصفور ظرف مكان، والأخفش وابن مالك حرف.', 'Al-Mubarrad en Ibn ʿUṣfūr: plaats; al-Akhfash en Ibn Mālik: partikel.'] },
    { type: 'mc', page: 60, q: ['الباء في «ما يسرني بها حمر النعم»:', 'Bi- in "ik zou er geen rode kamelen voor willen":'], options: [['للبدل', 'للإلصاق', 'للقسم', 'للسببية'], ['vervanging', 'hechting', 'eed', 'oorzaak']], answer: 0, explain: ['أي بدلها.', 'In plaats daarvan.'] },
    { type: 'tf', page: 60, q: ['"بيد" اسم ملازم للإضافة والنصب.', 'Bayda is een naamwoord dat altijd een genitief heeft en accusatief is.'], answer: 0, explain: ['وله معنيان: غير، ومن أجل.', 'Twee betekenissen: behalve, en omdat.'] },
    { type: 'mc', page: 61, q: ['"تزوج فولد له" مثال للفاء:', '"Hij trouwde, fa- kreeg een kind" is fa- voor:'], options: [['للتعقيب بحسبه', 'للترتيب الذكري', 'للسببية', 'للزيادة'], ['direct-na naar de aard', 'volgorde in vermelding', 'oorzaak', 'toevoeging']], answer: 0, explain: ['التعقيب في كل شيء بحسبه.', '"Direct" hangt af van de zaak.'] },
    { type: 'mc', page: 62, q: ['اللام في "النار للكافرين":', 'Li- in "het Vuur is voor de ongelovigen":'], options: [['للاستحقاق', 'للاختصاص', 'للملك', 'للصيرورة'], ['recht op', 'uitsluitend', 'bezit', 'uitkomst']], answer: 0, explain: ['وإن دخلها عصاة الموحدين.', 'Ook al komen er zondige moslims in.'] },
    { type: 'mc', page: 63, q: ['"لولا" الداخلة على الماضي تفيد:', 'Lawlā met een voltooid werkwoord geeft:'], options: [['التوبيخ', 'التحضيض', 'العرض', 'امتناع لوجود'], ['verwijt', 'aansporing', 'verzoek', 'uitblijven door aanwezigheid']], answer: 0, explain: ['﴿لولا جاؤوا عليه بأربعة شهداء﴾', '"Waarom brachten ze er geen vier getuigen voor?"'] },
    { type: 'mc', page: 64, q: ['من قال: "لو" لمجرد الربط؟', 'Wie zei: law is alleen verbinding?'], options: [['الشلوبين', 'سيبويه', 'الشيخ الإمام', 'الفارسي'], ['ash-Shalawbīn', 'Sībawayh', 'de vader van de auteur', 'al-Fārisī']], answer: 0, explain: ['ورُدّ بأنه جحد للبديهيات.', 'Afgewezen als ontkenning van het vanzelfsprekende.'] },
    { type: 'tf', page: 66, q: ['"لن" تفيد تأبيد النفي عند المصنف.', 'Volgens de auteur vereeuwigt lan de ontkenning.'], answer: 1, explain: ['هذا قول الزمخشري، والمصنف خالفه.', 'Dat zegt az-Zamakhsharī; de auteur niet.'] },
    { type: 'mc', page: 68, q: ['"هل" لطلب:', 'Hal dient voor:'], options: [['التصديق الإيجابي', 'التصور', 'التصديق السلبي', 'التعيين'], ['een bevestigende ja/nee-vraag', 'een keuzevraag', 'een ontkennende vraag', 'een aanwijzing']], answer: 0, explain: ['والتصور والسلبي موضع الهمزة.', 'De andere twee horen bij a-.'] }
  ]
})
