// Hoofdstukkaart bij التفسير (٤), eenheid 19: سورة الإخلاص (les 22, boek p. 85–88).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. Het citaat van Ibn Rushd (p. 87) is in de notities niet
// eenduidig overgenomen en daarom weggelaten; de uitleg van Ibn ʿUthaymīn staat er wel.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '22',
  unit: 19,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '85–88',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الإخلاص', 'Soera al-Ikhlāṣ'],
  subtitle: ['سورة مكية، أربع آيات', 'Mekkaans, vier verzen'],
  summary: [
    'سميت الإخلاص لأنها خالصة في توحيد الله، نزلت لما قال المشركون: انسب لنا ربك. فيها أن الله أحد صمد، لم يلد ولم يولد، ولم يكن له كفوا أحد، وهي تعدل ثلث القرآن.',
    'Zij heet al-Ikhlāṣ omdat zij louter over het tawḥīd van Allah gaat. Zij kwam neer toen de polytheïsten zeiden: beschrijf ons de afstamming van je Heer. Zij zegt dat Allah de Ene is, aṣ-Ṣamad, die niet verwekt en niet verwekt is, en dat niemand Hem gelijk is. Zij staat gelijk aan een derde van de Koran.'
  ],
  map: {
    title: ['سورة الإخلاص في خريطة واحدة', 'Soera al-Ikhlāṣ in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الإخلاص', 'Soera al-Ikhlāṣ'], ['الوحدة التاسعة عشرة', 'Eenheid 19']],
    nodes: [
      { label: ['الأحد', 'De Ene'], sub: ['الآية ١', 'vers 1'], page: 86, children: [['لا نظير ولا وزير ولا ند', 'zonder gelijke, helper of tegenhanger']] },
      { label: ['الصمد', 'Aṣ-Ṣamad'], sub: ['الآية ٢', 'vers 2'], page: 86, children: [['تصمد إليه الخلائق في حوائجها', 'tot wie de schepselen zich wenden'], ['الكامل في سؤدده', 'volmaakt in Zijn heerschappij']] },
      { label: ['نفي الولد والوالد والكفء', 'Geen kind, vader of gelijke'], sub: ['الآيتان ٣–٤', 'vers 3–4'], page: 86, children: [['لم يلد', 'Hij heeft niet verwekt'], ['ولم يولد', 'en is niet verwekt'], ['ولم يكن له كفوا أحد', 'en niemand is Hem gelijk']] }
    ]
  },
  points: [
    [85, 'الإخلاص التصفية وعدم الخلط، وسميت به لأنها في توحيد الله وإفراده بالألوهية.', 'Ikhlāṣ is zuivering zonder vermenging; de soera heet zo omdat zij over het tawḥīd van Allah gaat en Hem als enige de godheid toekent.'],
    [86, 'الصمد: الذي تصمد إليه الخلائق في حوائجها، السيد الكامل في سؤدده، والذي لا جوف له فلا يأكل ولا يشرب.', 'Aṣ-Ṣamad: tot wie de schepselen zich wenden met hun behoeften, de Heer die volmaakt is in Zijn heerschappij, en die geen holte heeft, die niet eet en niet drinkt.'],
    [86, '﴿لم يلد﴾ رد على المشركين في قولهم الملائكة بنات الله، واليهود في عزير، والنصارى في المسيح.', '"Hij heeft niet verwekt" weerlegt de polytheïsten (de engelen dochters van Allah), de joden (ʿUzayr) en de christenen (de Messias).'],
    [87, 'قدم نفي الولد على نفي الوالد لأنه أهم، فأهل الضلال نسبوا إلى الله الولد ولم ينسبوا إليه الوالد، وفيه إشارة إلى أن المولود كعيسى ليس إلها.', 'Het ontkennen van het kind staat vóór dat van de vader omdat het belangrijker is: de dwalenden schreven Allah een kind toe, geen vader; en het wijst erop dat wie geboren is, zoals ʿĪsā, geen god is.'],
    [87, 'قال ابن عثيمين: تعدل ثلث القرآن ولا تجزئ عنه، فلو كررها في الفريضة ثلاثا لم تجزئه عن الفاتحة.', 'Ibn ʿUthaymīn: zij staat gelijk aan een derde van de Koran maar vervangt die niet; wie haar in het verplichte gebed drie keer herhaalt, heeft daarmee al-Fātiḥa niet vervangen.']
  ],
  terms: [
    ['الإخلاص', 'al-ikhlāṣ', 85, 'التصفية وعدم الخلط بغيره.', 'Zuivering zonder vermenging met iets anders.'],
    ['أحد', 'aḥad', 86, 'الواحد الذي لا نظير له ولا وزير ولا ند ولا شبيه.', 'De Ene, zonder gelijke, helper, tegenhanger of evenbeeld.'],
    ['الصمد', 'aṣ-ṣamad', 86, 'الذي تصمد إليه الخلائق في حوائجها.', 'Tot wie de schepselen zich wenden met hun behoeften.'],
    ['كفوا', 'kufuwan', 86, 'مكافئا مماثلا.', 'Gelijke, evenknie.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['﴿لم يلد﴾ ترد على ثلاث طوائف', '"Hij heeft niet verwekt" weerlegt drie groepen'],
      intro: ['كما في الصفحة ٨٦.', 'Zoals op p. 86.'],
      nodes: [
        [86, 'مشركو العرب', 'De Arabische polytheïsten', 'قالوا: الملائكة بنات الله', 'zeiden: de engelen zijn dochters van Allah'],
        [86, 'اليهود', 'De joden', 'قالوا: عزير ابن الله', 'zeiden: ʿUzayr is de zoon van Allah'],
        [86, 'النصارى', 'De christenen', 'قالوا: المسيح ابن الله', 'zeiden: de Messias is de zoon van Allah']
      ]
    }
  ],
  sections: [
    [86, 'وجوب تنزيه الله عن الصاحبة والولد', 'Allah vrijpleiten van partner en kind', 'قال تعالى: ﴿وقالوا اتخذ الرحمن ولدا لقد جئتم شيئا إدا تكاد السماوات يتفطرن منه﴾، فنسبة الولد إليه من أعظم الإفك.', 'Allah zegt: "Zij zeggen: de Erbarmer heeft een kind genomen. Jullie hebben iets gruwelijks gebracht; de hemelen scheuren er bijna door". Hem een kind toeschrijven is een van de grootste leugens.']
  ],
  keycards: [
    ['opsomming', 88, 'مواضع قراءتها في السنة', 'Waar de Sunna haar reciteert', ['في الوتر مع الأعلى والكافرون', 'في ركعتي الفجر والركعتين بعد المغرب', 'عند النوم مع المعوذتين'], ['in de witr, met al-Aʿlā en al-Kāfirūn', 'in de twee rakʿa\'s van fajr en die na maghrib', 'voor het slapen, met al-Falaq en an-Nās']]
  ],
  hadith: [
    { text: 'قالوا: انسب لنا ربك، فأنزل الله: ﴿قل هو الله أحد الله الصمد﴾', takhrij: 'أخرجه أحمد والترمذي، وحسنه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ḥasan volgens al-Albānī', narrator: 'أبي بن كعب', narratorNl: 'Ubayy ibn Kaʿb', nl: 'Zij zeiden: beschrijf ons de afstamming van je Heer; toen zond Allah neer: "Zeg: Hij is Allah, de Ene; Allah, aṣ-Ṣamad"', pages: [85] },
    { text: 'أيعجز أحدكم أن يقرأ ثلث القرآن في ليلة؟ … الله الواحد الصمد ثلث القرآن', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو سعيد الخدري', narratorNl: 'Abū Saʿīd al-Khudrī', nl: 'Is een van jullie niet in staat in één nacht een derde van de Koran te reciteren? … "Allah, de Ene, aṣ-Ṣamad" is een derde van de Koran', pages: [85] },
    { text: 'كان رسول الله ﷺ يقرأ في الوتر بـ﴿سبح اسم ربك الأعلى﴾ و﴿قل يا أيها الكافرون﴾ و﴿قل هو الله أحد﴾', takhrij: 'أخرجه النسائي، وصححه الألباني', takhrijNl: 'an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Boodschapper van Allah ﷺ reciteerde in de witr "Verheerlijk de naam van je Heer, de Allerhoogste", "Zeg: o ongelovigen" en "Zeg: Hij is Allah, de Ene"', pages: [85] },
    { text: 'قال الله: كذبني ابن آدم ولم يكن له ذلك، وشتمني ولم يكن له ذلك … وأما شتمه إياي فقوله: اتخذ الله ولدا، وأنا الأحد الصمد، لم ألد ولم أولد، ولم يكن لي كفئا أحد', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Allah zegt: de mens loochent Mij terwijl hem dat niet toekomt, en beledigt Mij terwijl hem dat niet toekomt … Zijn belediging is dat hij zegt: Allah heeft een kind genomen, terwijl Ik de Ene ben, aṣ-Ṣamad; Ik heb niet verwekt en ben niet verwekt, en niemand is Mij gelijk', pages: [87] }
  ],
  persons: [
    ['ubayy-ibn-kab', 'text', [85], 'روى سبب نزول السورة.', 'Overleverde de aanleiding van de soera.'],
    ['ahmad-ibn-hanbal', 'takhrij', [85], 'روى حديث سبب النزول.', 'Overleverde de hadith over de aanleiding.'],
    ['at-tirmidhi', 'takhrij', [85], 'روى حديث سبب النزول.', 'Overleverde de hadith over de aanleiding.'],
    ['al-albani', 'takhrij', [85], 'حسن حديث أبي وصحح حديث عائشة.', 'Verklaarde de hadith van Ubayy ḥasan en die van ʿĀʾisha ṣaḥīḥ.'],
    ['abu-said-al-khudri', 'text', [85], 'روى أنها تعدل ثلث القرآن.', 'Overleverde dat zij een derde van de Koran waard is.'],
    ['al-bukhari', 'takhrij', [85, 87], 'روى حديث ثلث القرآن والحديث القدسي.', 'Overleverde de hadith over een derde van de Koran en de goddelijke hadith.'],
    ['aisha', 'text', [85], 'روت قراءتها في الوتر.', 'Overleverde dat zij in de witr gereciteerd werd.'],
    ['an-nasai', 'takhrij', [85], 'روى حديث عائشة في الوتر.', 'Overleverde de hadith van ʿĀʾisha over de witr.'],
    ['abu-hurayra', 'text', [87], 'روى الحديث القدسي «كذبني ابن آدم».', 'Overleverde de goddelijke hadith "de mens loochent Mij".'],
    ['ibn-uthaymin', 'text', [87], 'بين أنها تعدل ثلث القرآن ولا تجزئ عنه.', 'Legde uit dat zij een derde van de Koran waard is maar die niet vervangt.']
  ],
  review: [
    ['سورة الإخلاص في توحيد الله، وتعدل ثلث القرآن.', 'Soera al-Ikhlāṣ gaat over het tawḥīd van Allah en is een derde van de Koran waard.'],
    ['الصمد الذي تصمد إليه الخلائق في حوائجها.', 'Aṣ-Ṣamad is tot wie de schepselen zich wenden met hun behoeften.'],
    ['﴿لم يلد﴾ رد على المشركين واليهود والنصارى.', '"Hij heeft niet verwekt" weerlegt polytheïsten, joden en christenen.']
  ],
  quiz: [
    { type: 'mc', page: 85, q: ['لماذا سميت سورة الإخلاص بهذا الاسم؟', 'Waarom heet de soera al-Ikhlāṣ?'], options: [['لأنها خالصة في توحيد الله', 'لأنها نزلت في المخلصين', 'لأنها آخر سورة', 'لأنها تقرأ في الصلاة'], ['omdat zij louter over Allahs tawḥīd gaat', 'omdat zij over de oprechten neerkwam', 'omdat zij de laatste soera is', 'omdat zij in het gebed gereciteerd wordt']], answer: 0, explain: ['الإخلاص التصفية وعدم الخلط.', 'Ikhlāṣ is zuivering zonder vermenging.'] },
    { type: 'mc', page: 85, q: ['كم تعدل سورة الإخلاص من القرآن؟', 'Hoeveel van de Koran is al-Ikhlāṣ waard?'], options: [['الثلث', 'الربع', 'النصف', 'العشر'], ['een derde', 'een kwart', 'de helft', 'een tiende']], answer: 0, explain: ['كما في حديث أبي سعيد عند البخاري.', 'Zoals in de hadith van Abū Saʿīd bij al-Bukhārī.'] },
    { type: 'tf', page: 87, q: ['من كرر الإخلاص ثلاثا في الفريضة أجزأته عن الفاتحة.', 'Wie al-Ikhlāṣ drie keer herhaalt in het verplichte gebed, heeft daarmee al-Fātiḥa vervangen.'], answer: 1, explain: ['قال ابن عثيمين: تعدل ثلث القرآن ولا تجزئ عنه.', 'Ibn ʿUthaymīn: zij is een derde waard maar vervangt die niet.'] },
    { type: 'mc', page: 87, q: ['لماذا قدم ﴿لم يلد﴾ على ﴿ولم يولد﴾؟', 'Waarom staat "niet verwekt" (kind) vóór "niet geboren" (vader)?'], options: [['لأن أهل الضلال نسبوا إليه الولد لا الوالد', 'للسجع فقط', 'لأن الولادة أسبق', 'لا سبب لذلك'], ['omdat de dwalenden Hem een kind toeschreven, geen vader', 'alleen om het rijm', 'omdat geboorte eerder komt', 'zonder reden']], answer: 0, explain: ['فنفي الولد أهم.', 'Het ontkennen van het kind is daarom belangrijker.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٨٨.', 'Oefening van het boek op p. 88. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
