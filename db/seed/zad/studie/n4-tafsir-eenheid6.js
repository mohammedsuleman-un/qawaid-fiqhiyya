// Hoofdstukkaart bij التفسير (٤), eenheid 6: سورة الزلزلة (les 8, boek p. 34–38).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. De uitspraken van Ibn ʿAbbās en Ibn Masʿūd staan in het
// boek zonder bron en zijn alleen als uitleg opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '8',
  unit: 6,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '34–38',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الزلزلة', 'Soera az-Zalzala'],
  subtitle: ['سورة مكية، ثماني آيات', 'Mekkaans, acht verzen'],
  summary: [
    'تصف السورة زلزلة الأرض عند قيام الساعة وإخراجها أثقالها وتحديثها بأخبار ما عمل عليها بأمر ربها، ثم صدور الناس أشتاتا ليروا أعمالهم، وتختم بأن من يعمل مثقال ذرة خيرا أو شرا يره.',
    'De soera beschrijft hoe de aarde beeft bij het aanbreken van het Uur, haar lasten uitwerpt en op bevel van haar Heer vertelt wat op haar gedaan is. Daarna keren de mensen in groepen terug om hun daden te zien, en zij eindigt met: wie het gewicht van een stofje goed of kwaad doet, zal het zien.'
  ],
  map: {
    title: ['سورة الزلزلة في خريطة واحدة', 'Soera az-Zalzala in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الزلزلة', 'Soera az-Zalzala'], ['الوحدة السادسة', 'Eenheid 6']],
    nodes: [
      { label: ['زلزلة الأرض', 'De aarde beeft'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 35, children: [['زلزالها العظيم', 'haar enorme beving'], ['أخرجت أثقالها', 'zij werpt haar lasten uit'], ['وقال الإنسان ما لها', 'de mens zegt: wat heeft zij?']] },
      { label: ['تحديث الأرض', 'De aarde vertelt'], sub: ['الآيتان ٤–٥', 'vers 4–5'], page: 35, children: [['تشهد على كل عبد بما عمل', 'zij getuigt over elke dienaar'], ['بأن ربك أوحى لها', 'omdat je Heer het haar ingaf']] },
      { label: ['صدور الناس والجزاء', 'Terugkeer en vergelding'], sub: ['الآيات ٦–٨', 'vers 6–8'], page: 35, children: [['يصدرون أشتاتا', 'zij keren verspreid terug'], ['مثقال ذرة خيرا يره', 'een stofje goed: hij ziet het'], ['مثقال ذرة شرا يره', 'een stofje kwaad: hij ziet het']] }
    ]
  },
  points: [
    [34, 'سئل النبي ﷺ عن زكاة الحمر فقال: ما أنزل علي فيها شيء إلا هذه الآية الجامعة الفاذة.', 'De Profeet ﷺ werd gevraagd naar zakāt op ezels en zei dat hem daarover niets geopenbaard was behalve dit alomvattende, unieke vers.'],
    [35, '﴿وأخرجت الأرض أثقالها﴾: ما في بطنها من الأموات والكنوز تلقيه على ظهرها.', '"En de aarde werpt haar lasten uit": wat in haar binnenste is aan doden en schatten, legt zij op haar oppervlak.'],
    [35, 'أخبار الأرض أن تشهد على كل عبد أو أمة بما عمل على ظهرها.', 'Wat de aarde vertelt: zij getuigt over elke man en vrouw wat die op haar deed.'],
    [35, 'الصدر الرجوع وضده الورود: يرجع الناس من موقف الحساب فريق إلى الجنة وفريق إلى النار.', 'Ṣadr is terugkeren, het tegendeel van wurūd: de mensen keren terug van de afrekening, de een naar het Paradijs, de ander naar het Vuur.'],
    [36, 'قال ابن مسعود: أحكم آية في القرآن ﴿فمن يعمل مثقال ذرة خيرا يره ومن يعمل مثقال ذرة شرا يره﴾.', 'Ibn Masʿūd: het meest omvattende vers in de Koran is "Wie het gewicht van een stofje goed doet, zal het zien, en wie het gewicht van een stofje kwaad doet, zal het zien".'],
    [36, 'تصدق عمر وعائشة بحبة عنب وقالا: فيها مثاقيل ذر كثيرة.', 'ʿUmar en ʿĀʾisha gaven een druif als liefdadigheid en zeiden: daarin zitten vele stofjes-gewichten.']
  ],
  terms: [
    ['زلزالها', 'zilzālahā', 35, 'زلزلتها العظيمة التي لم يكن مثلها.', 'Haar enorme beving waarvan er nooit een gelijke was.'],
    ['أثقالها', 'athqālahā', 35, 'ما في بطنها من الأموات والكنوز.', 'Wat in haar binnenste is aan doden en schatten.'],
    ['يصدر', 'yaṣdur', 35, 'يرجع؛ والصدر ضد الورود.', 'Terugkeren; ṣadr is het tegendeel van wurūd.'],
    ['أشتاتا', 'ashtātan', 35, 'متفرقين.', 'Verspreid, in groepen.'],
    ['الذرة', 'adh-dharra', 36, 'أصغر النمل.', 'De kleinste mier.', 'وليست الذرة الكيميائية المعروفة اليوم، لأنها لم تكن معروفة حينئذ.', 'Niet het chemische atoom van nu, want dat was toen niet bekend.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['قليل الخير وقليل الشر', 'Een beetje goed en een beetje kwaad'],
      intro: ['من «للاطلاع» ص ٣٧.', 'Uit het kader "ter informatie" op p. 37.'],
      columns: [['ما ظنه بعض الناس', 'Wat sommigen dachten'], ['ما بينته الآية', 'Wat het vers duidelijk maakt']],
      rows: [
        { label: ['قليل الخير', 'Een beetje goed'], cells: [['التمرة والكسرة والجوزة لا يؤجر عليها', 'voor een dadel, een stuk brood of een noot krijg je geen beloning'], ['رغبهم الله في القليل فإنه يوشك أن يكثر', 'Allah moedigt het weinige aan, want het kan veel worden']] },
        { label: ['قليل الشر', 'Een beetje kwaad'], cells: [['الكذبة والنظرة لا يلام عليها', 'een leugentje of een blik wordt niet berispt'], ['حذرهم الله من اليسير فإنه يوشك أن يكثر', 'Allah waarschuwt voor het geringe, want het kan veel worden']] }
      ],
      page: 37
    }
  ],
  sections: [
    [36, 'الله يخاطب الجماد فينطق', 'Allah spreekt het levenloze aan en het spreekt', 'الله على كل شيء قدير، إذا أمر بشيء كان، فقال للسماء والأرض: ﴿ائتيا طوعا أو كرها قالتا أتينا طائعين﴾، وهنا: ﴿بأن ربك أوحى لها﴾.', 'Allah is tot alles in staat: als Hij iets beveelt, gebeurt het. Hij zei tegen hemel en aarde: "Kom, gewillig of onwillig"; zij zeiden: "Wij komen gewillig". En hier: "omdat je Heer het haar ingaf".'],
    [37, 'المراد بالذرة في القرآن', 'Wat dharra in de Koran betekent', 'الذرة صغار النمل، ذكرها الله لأنها مضرب المثل في القلة، ولا يخاطب الله الناس إلا بما يفهمون.', 'Dharra zijn kleine mieren; Allah noemde ze omdat ze spreekwoordelijk zijn voor geringheid, en Hij spreekt de mensen alleen aan met wat zij begrijpen.']
  ],
  keycards: [
    ['definitie', 36, 'الذرة', 'Adh-dharra', ['أصغر النمل', 'مضرب المثل في القلة', 'ليست الذرة الكيميائية'], ['de kleinste mier', 'spreekwoordelijk voor geringheid', 'niet het chemische atoom']]
  ],
  hadith: [
    { text: 'ما أنزل علي فيها شيء إلا هذه الآية الجامعة الفاذة: ﴿فمن يعمل مثقال ذرة خيرا يره ومن يعمل مثقال ذرة شرا يره﴾', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'جواب النبي ﷺ لما سئل عن زكاة الحمر.', nlNote: 'Het antwoord van de Profeet ﷺ op de vraag naar zakāt op ezels.', nl: 'Mij is daarover niets geopenbaard behalve dit alomvattende, unieke vers: "Wie het gewicht van een stofje goed doet, zal het zien, en wie het gewicht van een stofje kwaad doet, zal het zien"', pages: [34] },
    { text: 'أتدرون ما أخبارها؟ … فإن أخبارها أن تشهد على كل عبد أو أمة بما عمل على ظهرها، أن تقول: عمل كذا وكذا يوم كذا وكذا، فهذه أخبارها', takhrij: 'أخرجه الترمذي وحسنه', takhrijNl: 'at-Tirmidhī, die het ḥasan noemde', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Weten jullie wat haar berichten zijn? … Haar berichten zijn dat zij getuigt over elke man en vrouw wat die op haar deed: zij zegt: hij deed dit en dat op die en die dag. Dat zijn haar berichten', pages: [35] }
  ],
  persons: [
    ['al-bukhari', 'takhrij', [34], 'روى حديث الآية الجامعة الفاذة.', 'Overleverde de hadith over het alomvattende, unieke vers.'],
    ['muslim', 'takhrij', [34], 'روى حديث الآية الجامعة الفاذة.', 'Overleverde dezelfde hadith.'],
    ['abu-hurayra', 'text', [35], 'روى حديث أخبار الأرض.', 'Overleverde de hadith over de berichten van de aarde.'],
    ['at-tirmidhi', 'takhrij', [35], 'روى حديث أخبار الأرض وحسنه.', 'Overleverde de hadith over de berichten van de aarde en noemde hem ḥasan.'],
    ['ibn-abbas', 'text', [36], 'قال: ما من مؤمن ولا كافر عمل خيرا أو شرا إلا أراه الله إياه يوم القيامة.', 'Zei: geen gelovige of ongelovige deed goed of kwaad of Allah laat het hem zien op de Opstandingsdag.'],
    ['ibn-masud', 'text', [36], 'قال: أحكم آية في القرآن آية الذرة.', 'Zei dat het vers over het stofje het meest omvattende vers van de Koran is.'],
    ['umar-ibn-al-khattab', 'text', [36], 'تصدق بحبة عنب.', 'Gaf een druif als liefdadigheid.'],
    ['aisha', 'text', [36], 'تصدقت بحبة عنب.', 'Gaf een druif als liefdadigheid.']
  ],
  review: [
    ['تحدث الأرض يوم القيامة بما عمل عليها.', 'Op de Opstandingsdag vertelt de aarde wat op haar gedaan is.'],
    ['يصدر الناس أشتاتا: فريق في الجنة وفريق في النار.', 'De mensen keren verspreid terug: een groep naar het Paradijs en een groep naar het Vuur.'],
    ['لا يحقر المسلم قليل الخير ولا قليل الشر.', 'De moslim onderschat geen klein goed en geen klein kwaad.']
  ],
  quiz: [
    { type: 'mc', page: 35, q: ['ما أخبار الأرض يوم القيامة؟', 'Wat zijn de berichten van de aarde op de Opstandingsdag?'], options: [['أن تشهد على كل عبد بما عمل على ظهرها', 'أن تخبر عن موعد الساعة', 'أن تذكر الكنوز التي فيها', 'أن تسبح ربها'], ['zij getuigt over elke dienaar wat hij op haar deed', 'zij vertelt wanneer het Uur komt', 'zij noemt de schatten in haar', 'zij verheerlijkt haar Heer']], answer: 0, explain: ['كما في حديث الترمذي.', 'Zoals in de hadith bij at-Tirmidhī.'] },
    { type: 'mc', page: 35, q: ['ما ضد «الصدر»؟', 'Wat is het tegendeel van ṣadr?'], options: [['الورود', 'الرجوع', 'الخروج', 'القيام'], ['wurūd (aankomen)', 'terugkeren', 'uitgaan', 'opstaan']], answer: 0, explain: ['الصدر الرجوع، وضده الورود.', 'Ṣadr is terugkeren; het tegendeel is wurūd.'] },
    { type: 'tf', page: 37, q: ['المراد بالذرة في الآية الذرة الكيميائية.', 'Met dharra in het vers is het chemische atoom bedoeld.'], answer: 1, explain: ['هي صغار النمل، والذرة الكيميائية لم تكن معروفة.', 'Het zijn kleine mieren; het chemische atoom was toen niet bekend.'] },
    { type: 'mc', page: 36, q: ['بم تصدق عمر وعائشة؟', 'Wat gaven ʿUmar en ʿĀʾisha als liefdadigheid?'], options: [['بحبة عنب', 'بتمرة', 'بدرهم', 'بكسرة خبز'], ['een druif', 'een dadel', 'een dirham', 'een stuk brood']], answer: 0, explain: ['وقالا: فيها مثاقيل ذر كثيرة.', 'Zij zeiden: daarin zitten vele stofjes-gewichten.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٣٨.', 'Oefening van het boek op p. 38. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
