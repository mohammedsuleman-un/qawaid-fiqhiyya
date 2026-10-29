// Hoofdstukkaart bij الفقه (٤), eenheid 8: الأطعمة (lessen 35–36, boek p. 84–88).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '35',
  unit: 8,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '84–88',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['الأطعمة', 'Voedsel'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'الأصل في الأطعمة والأشربة الطيبة الإباحة، وفي كل ضار وخبيث التحريم. الطعام نباتي وحيواني؛ فالنباتي مباح إلا ما ضر البدن أو العقل، والحيوان البحري مباح إلا ما فيه ضرر، والبري مباح إلا ما حرمه الشرع بضوابط: ما نص عليه، وما ذكر له ضابطا، وما أمر بقتله أو نهى عنه، وما تولد من مباح ومحرم، وما يتغذى بالنجاسات.',
    'Goede spijzen en dranken zijn in beginsel toegestaan, alles wat schadelijk of slecht is verboden. Voedsel is plantaardig of dierlijk: plantaardig is toegestaan behalve wat lichaam of verstand schaadt; waterdieren zijn toegestaan behalve wat schadelijk is; landdieren zijn toegestaan behalve wat de sharīʿa verbood: bij naam, via een criterium, wat men moet doden of niet mag doden, kruisingen, en wat zich met onreinheid voedt.'
  ],
  map: {
    title: ['الأطعمة في خريطة واحدة', 'Voedsel in één kaart'],
    intro: ['كما في المخطط ص ٨٤.', 'Zoals in het schema op p. 84.'],
    root: [['الأطعمة', 'Voedsel'], ['الوحدة الثامنة', 'Eenheid 8']],
    nodes: [
      { label: ['الأصل', 'Het beginsel'], sub: ['ص ٨٤', 'p. 84'], page: 84, children: [['الطيب حلال', 'het goede is toegestaan'], ['الخبيث حرام', 'het slechte is verboden']] },
      { label: ['النباتي', 'Plantaardig'], sub: ['ص ٨٤', 'p. 84'], page: 84, children: [['ما ضر البدن كالسم', 'wat het lichaam schaadt, zoals gif'], ['ما ضر العقل كالخمر', 'wat het verstand schaadt, zoals wijn']] },
      { label: ['الحيوان البحري', 'Waterdieren'], sub: ['ص ٨٥', 'p. 85'], page: 85, children: [['الحل ميتته', 'zijn dode dieren zijn toegestaan']] },
      { label: ['الحيوان البري', 'Landdieren'], sub: ['ص ٨٥–٨٧', 'p. 85–87'], page: 85, children: [['ذو الناب والمخلب', 'slagtand en klauw'], ['الحمر الأهلية والبغل', 'tamme ezels en muilezels'], ['الجلالة', 'de jallāla'], ['المنخنقة وأخواتها', 'het gewurgde dier en dergelijke']] }
    ]
  },
  points: [
    [84, 'ما لم يرد دليل على تحريم طعام أو شراب فهو باق على أصل الإباحة، وقد فصل الله ما حرم.', 'Zolang er geen bewijs voor een verbod is, blijft voedsel of drank toegestaan; Allah heeft uitgelegd wat Hij verbood.'],
    [85, 'المراد بذي الناب والمخلب ما يصطاد بنابه أو مخلبه، فيتحقق فيه معنى الافتراس.', 'Bedoeld zijn dieren die met hun slagtand of klauw jagen, zodat het verscheuren aanwezig is.'],
    [86, 'الحيات من المحرمات لما فيها من السم، ولأن النبي ﷺ أمر بقتلها.', 'Slangen zijn verboden vanwege hun gif en omdat de Profeet ﷺ gebood ze te doden.'],
    [86, 'القنفذ حلال، لأن الأصل الإباحة حتى يثبت خلافه.', 'De egel is toegestaan, want het beginsel is toelaatbaarheid tot het tegendeel bewezen is.'],
    [86, 'لحم الخيل حلال استصحابا للأصل، ولحديث أسماء.', 'Paardenvlees is toegestaan op grond van het beginsel en de hadith van Asmāʾ.'],
    [86, 'الجلالة يحرم لحمها ولبنها وبيضها حتى تحبس وتعلف الطاهرات.', 'Vlees, melk en eieren van de jallāla zijn verboden tot zij opgesloten wordt en rein gevoerd.'],
    [87, 'يحرم أكل الضفدع لنهي النبي ﷺ عن قتله، ولأنه مستخبث جدا.', 'Kikkers eten is verboden, omdat de Profeet ﷺ verbood ze te doden en omdat ze zeer walgelijk zijn.'],
    [87, 'من اضطر إلى محرم يخشى الضرر إن لم يأكله أكل منه ما يدفع الضرورة فقط.', 'Wie in nood tot iets verbodens gedwongen wordt en schade vreest, eet alleen wat de nood afwendt.']
  ],
  terms: [
    ['الأطعمة', 'al-aṭʿima', 84, 'جمع طعام: ما يأكله الإنسان ويشربه ويتغذى به.', 'Meervoud van ṭaʿām: wat de mens eet en drinkt en waarmee hij zich voedt.'],
    ['الجلالة', 'al-jallāla', 86, 'الدابة التي تأكل العذرة والنجاسات حتى يتغير ريحها.', 'Het dier dat uitwerpselen en onreinheid eet tot zijn geur verandert.'],
    ['المنخنقة والموقوذة والمتردية والنطيحة', 'al-munkhaniqa, al-mawqūdha, al-mutaraddiya, an-naṭīḥa', 87, 'التي تموت خنقا، أو ضربا بعصا، أو سقوطا من مكان عال، أو نطحا من غيرها.', 'Het dier dat sterft door wurging, door een slag, door een val of door gestoten te worden.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['ضوابط المحرم من الحيوان البري', 'Criteria voor verboden landdieren'],
      intro: ['كما في الصفحات ٨٥–٨٦.', 'Zoals op p. 85–86.'],
      nodes: [
        [85, 'ما نص الشارع على تحريمه', 'Bij naam verboden', 'كالخنزير والحمر الأهلية', 'zoals het varken en tamme ezels'],
        [85, 'ما ذكر له ضابطا', 'Via een criterium', 'كل ذي ناب من السباع وذي مخلب من الطير', 'roofdieren met slagtand en vogels met klauw'],
        [86, 'ما أمر بقتله أو نهى عن قتله', 'Wat men moet doden of niet mag doden', 'الفواسق الخمس، والنملة والنحلة والهدهد والصرد', 'de vijf schadelijke dieren; mier, bij, hop en klauwier'],
        [86, 'ما تولد من مباح ومحرم', 'Kruisingen', 'كالبغل', 'zoals de muilezel'],
        [86, 'ما يتغذى بالجيف والنجاسات', 'Wat zich voedt met kadavers en onreinheid', 'كالنسر والغراب والجلالة', 'zoals de gier, de raaf en de jallāla']
      ]
    }
  ],
  sections: [
    [86, 'البغل', 'De muilezel', 'نهى رسول الله ﷺ عن لحوم البغال، كما عند أحمد والترمذي بإسناد صحيح.', 'De Boodschapper van Allah ﷺ verbood het vlees van muilezels, zoals bij Aḥmad en at-Tirmidhī met een authentieke keten.'],
    [87, 'إلا ما ذكيتم', 'Behalve wat jullie geslacht hebben', 'من أدرك من المنخنقة والموقوذة والمتردية والنطيحة وما أكل السبع حيا فذكاه حل أكله، لقوله تعالى: ﴿إلا ما ذكيتم﴾ [المائدة: 3].', 'Wie een van deze dieren nog levend aantreft en slacht, mag het eten, wegens "behalve wat jullie geslacht hebben" (5:3).']
  ],
  keycards: [
    ['uitzondering', 84, 'ما يحرم من النبات', 'Verboden plantaardig voedsel', ['ما يضر البدن كالسم', 'ما يضر العقل كالخمر والمخدرات'], ['wat het lichaam schaadt, zoals gif', 'wat het verstand schaadt, zoals wijn en drugs']],
    ['onderscheid', 87, 'الحلال والحرام من الحيوان', 'Toegestane en verboden dieren', ['حلال: الخيل، والضب عند الجمهور، والقنفذ، وصيد البحر', 'حرام: الخنزير، والحمر الأهلية، والبغل، والحيات، والضفدع، والجلالة'], ['toegestaan: paard, ḍabb volgens de meerderheid, egel, zeedieren', 'verboden: varken, tamme ezel, muilezel, slangen, kikkers, jallāla']]
  ],
  hadith: [
    { text: 'كل مسكر خمر، وكل مسكر حرام', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'Alles wat bedwelmt is wijn, en alles wat bedwelmt is verboden', pages: [84] },
    { text: 'هو الطهور ماؤه، الحل ميتته', takhrij: 'أخرجه أحمد وأبو داود والترمذي وصححه، والنسائي وابن ماجه', takhrijNl: 'Aḥmad, Abū Dāwūd, at-Tirmidhī (die het ṣaḥīḥ noemde), an-Nasāʾī en Ibn Māja', note: 'لما سئل عن البحر.', nlNote: 'Toen hem naar de zee gevraagd werd.', nl: 'Zijn water is reinigend en zijn dode dieren zijn toegestaan', pages: [85] },
    { text: 'نهى يوم خيبر عن لحوم الحمر الأهلية', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Op de dag van Khaybar verbood hij het vlees van tamme ezels', pages: [85] },
    { text: 'نهى عن كل ذي ناب من السباع، وعن كل ذي مخلب من الطير', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'Hij verbood elk roofdier met een slagtand en elke vogel met een klauw', pages: [85] },
    { text: 'خمس فواسق، يقتلن في الحرم: الفأرة، والعقرب، والحديا، والغراب، والكلب العقور', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Vijf schadelijke dieren worden zelfs in de ḥaram gedood: de muis, de schorpioen, de wouw, de raaf en de bijtende hond', pages: [86] },
    { text: 'نهى عن قتل أربع من الدواب: النملة، والنحلة، والهدهد، والصرد', takhrij: 'أخرجه أحمد وأبو داود وابن ماجه، وصححه الألباني', takhrijNl: 'Aḥmad, Abū Dāwūd en Ibn Māja; ṣaḥīḥ volgens al-Albānī', nl: 'Hij verbood vier dieren te doden: de mier, de bij, de hop en de klauwier', pages: [86] },
    { text: 'نحرنا على عهد رسول الله ﷺ فرسا فأكلناه', takhrij: 'في الصحيحين', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أسماء', narratorNl: 'Asmāʾ', nl: 'In de tijd van de Boodschapper van Allah ﷺ slachtten wij een paard en aten het', pages: [86] },
    { text: 'نهى رسول الله ﷺ عن أكل الجلالة وألبانها', takhrij: 'أخرجه أبو داود والترمذي وابن ماجه، وصححه الألباني', takhrijNl: 'Abū Dāwūd, at-Tirmidhī en Ibn Māja; ṣaḥīḥ volgens al-Albānī', nl: 'De Boodschapper van Allah ﷺ verbood het eten van de jallāla en haar melk', pages: [86] },
    { text: 'لا، ولكنه لا يكون بأرض قومي، فأجدني أعافه', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'خالد بن الوليد', narratorNl: 'Khālid ibn al-Walīd', note: 'لما قدم إليه ضب مشوي فسأله خالد: أحرام هو؟ فأكله خالد والنبي ﷺ ينظر.', nlNote: 'Toen hem een geroosterde ḍabb werd voorgezet en Khālid vroeg of het verboden is; Khālid at ervan terwijl de Profeet ﷺ toekeek.', nl: 'Nee, maar het komt niet voor in het land van mijn volk, dus ik heb er een afkeer van', pages: [87] }
  ],
  persons: [
    ['asma-bint-abi-bakr', 'text', [86], 'روت أكلهم لحم الفرس.', 'Overleverde dat zij paardenvlees aten.'],
    ['khalid-ibn-al-walid', 'text', [87], 'أكل الضب والنبي ﷺ ينظر.', 'At ḍabb terwijl de Profeet ﷺ toekeek.'],
    ['al-albani', 'takhrij', [86], 'صحح حديثي النهي عن قتل الأربع وعن الجلالة.', 'Verklaarde de hadith over de vier dieren en de jallāla authentiek.']
  ],
  review: [
    ['الأصل في الطيبات الإباحة وفي الخبائث التحريم.', 'Het goede is in beginsel toegestaan, het slechte verboden.'],
    ['النبات مباح إلا ما ضر البدن أو العقل.', 'Planten zijn toegestaan behalve wat lichaam of verstand schaadt.'],
    ['صيد البحر وميتته حلال.', 'Zeedieren en hun dode dieren zijn toegestaan.'],
    ['يحرم ذو الناب من السباع وذو المخلب من الطير.', 'Roofdieren met slagtand en vogels met klauw zijn verboden.'],
    ['المضطر يأكل ما يدفع الضرورة فقط.', 'Wie in nood is, eet alleen wat de nood afwendt.']
  ],
  quiz: [
    { type: 'mc', page: 86, q: ['ما حكم لحم الخيل؟', 'Wat is het oordeel over paardenvlees?'], options: [['حلال', 'حرام', 'مكروه تحريما', 'حلال في السفر فقط'], ['toegestaan', 'verboden', 'sterk afgeraden', 'alleen op reis toegestaan']], answer: 0, explain: ['لحديث أسماء: نحرنا فرسا فأكلناه.', 'Wegens de hadith van Asmāʾ.'] },
    { type: 'tf', page: 85, q: ['ميتة البحر حرام كميتة البر.', 'Dode zeedieren zijn verboden zoals dode landdieren.'], answer: 1, explain: ['«هو الطهور ماؤه، الحل ميتته».', '"Zijn dode dieren zijn toegestaan".'] },
    { type: 'mc', page: 86, q: ['متى يحل لحم الجلالة؟', 'Wanneer is de jallāla weer toegestaan?'], options: [['إذا حبست وعلفت الطاهرات', 'بعد ذبحها مباشرة', 'إذا طبخ لحمها جيدا', 'لا يحل أبدا'], ['als zij opgesloten en rein gevoerd wordt', 'direct na het slachten', 'als het vlees goed gekookt wordt', 'nooit']], answer: 0, explain: ['كما في الصفحة ٨٦.', 'Zoals op p. 86.'] },
    { type: 'tf', page: 87, q: ['الضب حلال عند جمهور العلماء.', 'De ḍabb is volgens de meerderheid van de geleerden toegestaan.'], answer: 0, explain: ['لحديث خالد بن الوليد.', 'Wegens de hadith van Khālid ibn al-Walīd.'] }
  ],
  note: ['أنشطة الكتاب في نهاية الوحدة.', 'Oefeningen van het boek aan het einde van de eenheid. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
