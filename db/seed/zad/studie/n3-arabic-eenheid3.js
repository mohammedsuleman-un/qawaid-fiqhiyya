// Hoofdstukkaart bij اللغة العربية (٣), eenheid 3: de uitzondering, de ḥāl en de tamyīz (lessen 13–20,
// boek p. 63–88). Opgesteld uit de leesnotities van het boek; voorbeelden zoals in het boek. Profetische
// woorden die het boek zonder bron als voorbeeld geeft (p. 68) zijn weggelaten.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-arabic',
  chapter: '13',
  unit: 3,
  source: {
    label: ['كتاب اللغة العربية (٣)، سلسلة زاد العلمية', 'Arabische taal (3), Zad-reeks'],
    pages: '63–88',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['الاستثناء والحال والتمييز', 'Uitzondering, ḥāl en tamyīz'],
  subtitle: ['ثمانية دروس مجموعة في صفحة واحدة', 'Acht lessen samen op één pagina'],
  summary: [
    'الاستثناء إخراج ما بعد الأداة من حكم ما قبلها، وأركانه الحكم والمستثنى منه والأداة والمستثنى، وأدواته: إلا، وغير وسوى، وخلا وعدا وحاشا. والمستثنى بإلا يجب نصبه في التام المثبت وفي المنقطع، ويجوز نصبه وإتباعه في التام المنفي، ويعرب حسب العوامل في الناقص المنفي. والحال وصف نكرة منصوب يبين هيئة صاحبه وقت وقوع الفعل، ويكون مفردا أو جملة أو شبه جملة. والتمييز اسم نكرة منصوب يزيل إبهام ذات أو نسبة، ويتضمن معنى (من).',
    'Uitzondering (istithnāʾ) haalt wat na het partikel komt uit het oordeel over wat ervoor staat. De pijlers zijn het oordeel, het uitgezonderde-uit, het partikel en het uitgezonderde; partikels zijn illā, ghayr en siwā, khalā, ʿadā en ḥāshā. Na illā is de accusatief verplicht bij een volledige bevestigende zin en bij een ongelijksoortige uitzondering; bij een volledige ontkennende zin mag accusatief of apposiet; bij een onvolledige ontkennende zin volgt de naamval de functie. De ḥāl is een onbepaalde eigenschap in de accusatief die de toestand van zijn drager tijdens de handeling aangeeft: één woord, een zin of een halve zin. De tamyīz is een onbepaald naamwoord in de accusatief dat vaagheid van een ding of een relatie wegneemt, met de betekenis van "min".'
  ],
  map: {
    title: ['الوحدة الثالثة في خريطة واحدة', 'Eenheid 3 in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الاستثناء والحال والتمييز', 'Uitzondering, ḥāl en tamyīz'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['الاستثناء', 'De uitzondering'], sub: ['الدروس ١٣–١٦', 'les 13–16'], page: 66, children: [['أركانه وأدواته', 'pijlers en partikels'], ['المستثنى بإلا', 'na illā'], ['غير وسوى', 'ghayr en siwā'], ['خلا وعدا وحاشا', 'khalā, ʿadā en ḥāshā']] },
      { label: ['الحال', 'De ḥāl'], sub: ['الدرسان ١٧–١٨', 'les 17–18'], page: 77, children: [['صاحب الحال', 'de drager'], ['مفرد وجملة وشبه جملة', 'woord, zin, halve zin'], ['تعدد الحال', 'meerdere ḥāl']] },
      { label: ['التمييز', 'De tamyīz'], sub: ['الدرسان ١٩–٢٠', 'les 19–20'], page: 83, children: [['تمييز الذات', 'van een ding'], ['تمييز النسبة', 'van een relatie']] }
    ]
  },
  points: [
    [66, 'الاستثناء نوع من المفعول به، والمستثنى المنصوب منصوب بفعل محذوف تقديره: أستثني.', 'De uitzondering is een soort lijdend voorwerp; het uitgezonderde in de accusatief hangt af van een weggelaten "ik zonder uit".'],
    [70, 'في الاستثناء المفرغ تكون إلا أداة حصر لا عمل لها، ويعرب ما بعدها حسب موقعه: ﴿وما يكفر بها إلا الفاسقون﴾.', 'Bij de "vrijgemaakte" uitzondering is illā een partikel van beperking zonder werking; wat volgt krijgt de naamval van zijn functie: "alleen de zondaars verwerpen haar".'],
    [71, 'الاستثناء المنقطع ما كان المستثنى فيه من غير جنس المستثنى منه، ويجب فيه النصب: وصل المسافرون إلا حقائبهم.', 'Bij de ongelijksoortige uitzondering hoort het uitgezonderde niet bij dezelfde soort; de accusatief is verplicht: "de reizigers kwamen aan, behalve hun koffers".'],
    [73, 'ما بعد غير وسوى مجرور دائما بالإضافة، وهما يعربان إعراب المستثنى بإلا؛ والحركة ظاهرة على غير مقدرة على سوى.', 'Na ghayr en siwā staat altijd een genitief; zelf krijgen ze de naamval van het uitgezonderde na illā – zichtbaar op ghayr, verondersteld op siwā.'],
    [75, 'إذا سبقت ما المصدرية خلا وعدا تعين النصب، ولا تدخل ما على حاشا.', 'Staat de maṣdar-partikel mā vóór khalā en ʿadā, dan is de accusatief verplicht; mā komt niet vóór ḥāshā.'],
    [79, 'الأصل في الحال أن تكون مشتقة، وقد تأتي جامدة مؤولة بمشتق: أقدم المحارب أسدا أي شجاعا.', 'In de grond is de ḥāl afgeleid, maar ze kan ook star zijn en dan afgeleid te verstaan: "de strijder viel aan als een leeuw", d.w.z. dapper.'],
    [84, 'الفرق بين التمييز والحال: التمييز يبين المبهم من الذوات والنسب، والحال يبين المبهم من الهيئات.', 'Verschil: de tamyīz verheldert wat vaag is aan dingen of relaties, de ḥāl wat vaag is aan toestanden.'],
    [86, 'يكثر تمييز النسبة بعد اسم التفضيل والتعجب ونعم وبئس وأفعال الامتلاء.', 'Tamyīz van een relatie komt veel voor na de overtreffende trap, verwondering, niʿma en biʾsa en werkwoorden van vullen.']
  ],
  terms: [
    ['الاستثناء', 'al-istithnāʾ', 66, 'إخراج ما بعد أداة الاستثناء من حكم ما قبلها نفيا أو إثباتا.', 'Wat na het partikel komt uitsluiten van het oordeel over wat ervoor staat.'],
    ['الاستثناء التام', 'al-istithnāʾ at-tāmm', 68, 'ما ذكر فيه المستثنى منه.', 'Een uitzondering waarbij het uitgezonderde-uit genoemd is.'],
    ['الاستثناء المفرغ', 'al-istithnāʾ al-mufarragh', 70, 'ما حذف فيه المستثنى منه وسبقه نفي.', 'Ontkennende uitzondering waarbij het uitgezonderde-uit is weggelaten.'],
    ['الحال', 'al-ḥāl', 77, 'وصف نكرة منصوب يبين هيئة صاحبه وقت وقوع الفعل.', 'Onbepaalde eigenschap in de accusatief die de toestand van zijn drager tijdens de handeling aangeeft.', 'جاء المعلم إلى المدرسة راكبا', 'de leraar kwam rijdend naar school'],
    ['صاحب الحال', 'ṣāḥib al-ḥāl', 78, 'من تبين الحال هيئته.', 'Degene wiens toestand de ḥāl beschrijft.'],
    ['التمييز', 'at-tamyīz', 84, 'اسم نكرة منصوب يبين ما قبله من إبهام في ذات أو نسبة، ويتضمن معنى من.', 'Onbepaald naamwoord in de accusatief dat vaagheid van een ding of relatie wegneemt, met de betekenis van "min".', 'اشتريت اثني عشر كتابا', 'ik kocht twaalf boeken']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['حكم المستثنى بإلا', 'De naamval na illā'],
      intro: ['أقسام الاستثناء كما في الكتاب.', 'De soorten uitzondering volgens het boek.'],
      columns: [['الحكم', 'Naamval'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['التام المثبت', 'Volledig, bevestigend'], cells: [['النصب واجب', 'accusatief verplicht'], ['﴿فشربوا منه إلا قليلا منهم﴾', '"zij dronken ervan, behalve weinigen"']] },
        { label: ['التام المنفي', 'Volledig, ontkennend'], cells: [['النصب أو البدل', 'accusatief of apposiet'], ['ما حضر الطلبة إلا زيدا / زيدٌ', 'mā ḥaḍara ṭ-ṭalabatu illā Zaydan / Zaydun']] },
        { label: ['الناقص المنفي (المفرغ)', 'Onvolledig, ontkennend'], cells: [['حسب موقعه', 'naar de functie'], ['﴿لا يصلاها إلا الأشقى﴾', '"alleen de ellendigste brandt erin"']] },
        { label: ['المنقطع', 'Ongelijksoortig'], cells: [['النصب واجب', 'accusatief verplicht'], ['﴿فسجدوا إلا إبليس﴾', '"zij knielden neer, behalve Iblīs"']] }
      ],
      page: 68
    },
    {
      type: 'cards',
      title: ['أنواع التمييز', 'Soorten tamyīz'],
      intro: ['كما قسمها الكتاب.', 'Zoals het boek ze indeelt.'],
      nodes: [
        [84, 'تمييز الكيل', 'Maat', 'اشتريت صاعا تمرا', 'ik kocht een ṣāʿ dadels'],
        [84, 'تمييز الوزن', 'Gewicht', 'أكلت رطلا لحما', 'ik at een raṭl vlees'],
        [84, 'تمييز المساحة', 'Oppervlakte', 'حصد الفلاح فدانا أرزا', 'de boer oogstte een feddan rijst'],
        [84, 'تمييز العدد', 'Getal', '﴿إني رأيت أحد عشر كوكبا﴾', '"ik zag elf sterren"'],
        [85, 'محول عن فاعل', 'Omgezet uit fāʿil', '﴿واشتعل الرأس شيبا﴾', '"en het hoofd werd wit van grijsheid"'],
        [85, 'محول عن مفعول به', 'Omgezet uit object', '﴿وأحصى كل شيء عددا﴾', '"en Hij telde alles in getal"'],
        [86, 'محول عن مبتدأ', 'Omgezet uit mubtadaʾ', '﴿أنا أكثر منك مالا﴾', '"ik heb meer bezit dan jij"']
      ]
    }
  ],
  sections: [
    [66, 'أركان الاستثناء', 'De pijlers van de uitzondering', 'في: كتبت المقالة إلا الخاتمة؛ الحكم: الكتابة، والمستثنى منه: المقالة، والأداة: إلا، والمستثنى: الخاتمة.', 'In "ik schreef het artikel, behalve de conclusie" is het oordeel het schrijven, het uitgezonderde-uit het artikel, het partikel illā en het uitgezonderde de conclusie.'],
    [78, 'صاحب الحال', 'De drager van de ḥāl', 'يكون فاعلا: ﴿فخرج منها خائفا﴾، ومفعولا به: ﴿وأرسلناك للناس رسولا﴾، ونائب فاعل: ﴿وألقي السحرة ساجدين﴾، ومبتدأ، ومضافا إليه: ﴿أن يأكل لحم أخيه ميتا﴾، ومجرورا: مررت بخليل جالسا.', 'De drager kan een fāʿil zijn ("hij ging er angstig uit"), een object ("Wij zonden jou als boodschapper"), een nāʾib al-fāʿil ("de tovenaars werden neergeworpen, knielend"), een mubtadaʾ, een muḍāf ilayh ("het vlees van zijn dode broeder eten") of een genitief ("ik kwam langs Khalīl, zittend").'],
    [79, 'الحال جملة وشبه جملة', 'Ḥāl als zin of halve zin', 'تأتي الحال جملة اسمية: ﴿أألد وأنا عجوز﴾، أو فعلية: ﴿وجاءوا أباهم عشاء يبكون﴾، أو شبه جملة: ﴿فخرج على قومه في زينته﴾، وتكون في محل نصب.', 'De ḥāl kan een naamwoordelijke zin zijn ("zal ik baren terwijl ik oud ben?"), een werkwoordelijke zin ("zij kwamen ’s avonds huilend naar hun vader") of een halve zin ("hij ging naar zijn volk in zijn pracht"), steeds op een plaats van accusatief.'],
    [85, 'إعراب تمييز الذات', 'Naamval van tamyīz van een ding', 'الأصل فيه النصب: شربت كأسا حليبا، ويجوز جره بالإضافة: كأس حليب، أو بمن: كأسا من حليب.', 'In de grond accusatief ("een glas melk"), maar het mag ook genitief zijn door iḍāfa ("kaʾsu ḥalībin") of met "min" ("kaʾsan min ḥalībin").']
  ],
  keycards: [
    ['opsomming', 66, 'أدوات الاستثناء', 'Partikels van uitzondering', ['حرف: إلا', 'اسمان: غير، سوى', 'مترددة بين الحرفية والفعلية: خلا، عدا، حاشا'], ['partikel: illā', 'naamwoorden: ghayr, siwā', 'tussen partikel en werkwoord: khalā, ʿadā, ḥāshā']],
    ['onderscheid', 84, 'التمييز والحال', 'Tamyīz en ḥāl', ['الحال تبين الهيئة: قابلت الضيف مبتسما', 'التمييز يبين الذات أو النسبة: عندي متر قماشا'], ['de ḥāl beschrijft een toestand: "ik ontmoette de gast glimlachend"', 'de tamyīz verheldert een ding of relatie: "ik heb een meter stof"']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['للاستثناء أربعة أركان وثلاثة أنواع من الأدوات.', 'De uitzondering heeft vier pijlers en drie soorten partikels.'],
    ['المستثنى بإلا ينصب وجوبا في التام المثبت والمنقطع، ويجوز فيه الإتباع في التام المنفي.', 'Na illā is de accusatief verplicht bij volledig-bevestigend en ongelijksoortig; bij volledig-ontkennend mag ook apposiet.'],
    ['ما بعد غير وسوى مجرور، وما بعد خلا وعدا وحاشا منصوب أو مجرور.', 'Na ghayr en siwā een genitief; na khalā, ʿadā en ḥāshā accusatief of genitief.'],
    ['الحال نكرة منصوبة تبين الهيئة، وتكون مفردا أو جملة أو شبه جملة.', 'De ḥāl is onbepaald, in de accusatief, beschrijft een toestand en is een woord, zin of halve zin.'],
    ['التمييز نكرة منصوبة تزيل إبهام الذات أو النسبة.', 'De tamyīz is onbepaald, in de accusatief, en neemt vaagheid van een ding of relatie weg.']
  ],
  quiz: [
    { type: 'mc', page: 68, q: ['ما حكم المستثنى في: جاء الرجال إلا محمدا؟', 'Wat is de naamval van het uitgezonderde in "jāʾa r-rijālu illā Muḥammadan"?'], options: [['النصب واجب', 'الرفع', 'يجوز الإتباع', 'الجر'], ['accusatief verplicht', 'nominatief', 'apposiet mag', 'genitief']], answer: 0, explain: ['لأنه استثناء تام مثبت.', 'Omdat het een volledige bevestigende uitzondering is.'] },
    { type: 'mc', page: 70, q: ['ما إعراب «الفاسقون» في ﴿وما يكفر بها إلا الفاسقون﴾؟', 'Wat is "al-fāsiqūn" in "wa mā yakfuru bihā illā l-fāsiqūn"?'], options: [['فاعل', 'مستثنى منصوب', 'بدل', 'مبتدأ'], ['fāʿil', 'uitgezonderde in de accusatief', 'apposiet', 'mubtadaʾ']], answer: 0, explain: ['الاستثناء مفرغ، وإلا أداة حصر.', 'Het is een vrijgemaakte uitzondering; illā beperkt alleen.'] },
    { type: 'tf', page: 71, q: ['المستثنى في ﴿فسجدوا إلا إبليس﴾ استثناء منقطع.', '"Zij knielden neer, behalve Iblīs" is een ongelijksoortige uitzondering.'], answer: 0, explain: ['ذكره الكتاب من أمثلة المنقطع.', 'Het boek geeft het als voorbeeld van de ongelijksoortige uitzondering.'] },
    { type: 'mc', page: 75, q: ['ما الصواب: أجاب الطلبة الأسئلة ما عدا ...', 'Wat is juist: "ajāba ṭ-ṭalabatu l-asʾilata mā ʿadā …"?'], options: [['سؤالا', 'سؤال', 'سؤالٍ', 'يجوز الوجهان'], ['suʾālan', 'suʾālun', 'suʾālin', 'beide mogen']], answer: 0, explain: ['مع ما المصدرية تتعين الفعلية فينصب.', 'Met de maṣdar-partikel mā is het een werkwoord, dus accusatief.'] },
    { type: 'mc', page: 78, q: ['ما صاحب الحال في ﴿وألقي السحرة ساجدين﴾؟', 'Wie is de drager van de ḥāl in "wa ulqiya s-saḥaratu sājidīn"?'], options: [['نائب الفاعل', 'الفاعل', 'المفعول به', 'المبتدأ'], ['de nāʾib al-fāʿil', 'de fāʿil', 'het object', 'de mubtadaʾ']], answer: 0, explain: ['السحرة نائب فاعل لفعل مبني للمجهول.', 'As-saḥara is nāʾib al-fāʿil van een passief werkwoord.'] },
    { type: 'mc', page: 85, q: ['عن أي شيء حول التمييز في ﴿واشتعل الرأس شيبا﴾؟', 'Waaruit is de tamyīz in "wa shtaʿala r-raʾsu shayban" omgezet?'], options: [['عن الفاعل', 'عن المفعول به', 'عن المبتدأ', 'ليس محولا'], ['uit de fāʿil', 'uit het object', 'uit de mubtadaʾ', 'niet omgezet']], answer: 0, explain: ['والأصل: اشتعل شيب الرأس.', 'Oorspronkelijk: "het grijs van het hoofd ontbrandde".'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٦٧ و٧٢ و٧٤ و٧٦ و٨٢ و٨٨.', 'Oefeningen van het boek op p. 67, 72, 74, 76, 82 en 88. De Nederlandse uitleg is een hulp bij het Arabisch, geen vervanging.']
})
