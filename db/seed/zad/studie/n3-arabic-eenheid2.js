// Hoofdstukkaart bij اللغة العربية (٣), eenheid 2: de objecten (المفعولات) (lessen 7–12, boek p. 31–61).
// Opgesteld uit de leesnotities van het boek; voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-arabic',
  chapter: '7',
  unit: 2,
  source: {
    label: ['كتاب اللغة العربية (٣)، سلسلة زاد العلمية', 'Arabische taal (3), Zad-reeks'],
    pages: '31–61',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['المفعولات', 'De objecten (al-mafʿūlāt)'],
  subtitle: ['ستة دروس مجموعة في صفحة واحدة', 'Zes lessen samen op één pagina'],
  summary: [
    'المفعولات خمسة كلها منصوبة: المفعول به، وهو ما وقع عليه فعل الفاعل، ويكون اسما ظاهرا أو ضميرا أو مصدرا مؤولا، ويجوز حذفه وحذف عامله؛ والمفعول المطلق، وهو مصدر يذكر بعد فعل من لفظه للتأكيد أو بيان العدد أو النوع؛ والمفعول لأجله، وهو مصدر يبين سبب الفعل؛ والمفعول فيه، وهو ظرف الزمان أو المكان المتضمن معنى (في)؛ والمفعول معه، وهو اسم بعد واو بمعنى (مع).',
    'Er zijn vijf objecten, allemaal in de accusatief: het lijdend voorwerp (mafʿūl bih), waarop de handeling valt – een zichtbaar naamwoord, voornaamwoord of maṣdar muʾawwal; het en zijn regens mogen soms weg. Het absolute object (mafʿūl muṭlaq): een maṣdar na een werkwoord van dezelfde stam, ter bevestiging of om aantal of soort aan te geven. Het object van reden (mafʿūl li-ajlih): een maṣdar dat de reden noemt. Het bijwoord van tijd of plaats (mafʿūl fīh), met de betekenis van "fī". En het object van begeleiding (mafʿūl maʿah): een naamwoord na een wāw in de betekenis van "maʿa".'
  ],
  map: {
    title: ['المفعولات في خريطة واحدة', 'De objecten in één kaart'],
    intro: ['خمسة مفعولات كما رتبها الكتاب.', 'Vijf objecten in de volgorde van het boek.'],
    root: [['المفعولات', 'De objecten'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['المفعول به', 'Mafʿūl bih'], sub: ['الدرسان ٧–٨', 'les 7–8'], page: 34, children: [['أنواعه', 'soorten'], ['عوامله', 'regentes'], ['الحذف', 'weglating']] },
      { label: ['المفعول المطلق', 'Mafʿūl muṭlaq'], sub: ['الدرس ٩', 'les 9'], page: 42, children: [['مؤكد', 'bevestigend'], ['مبين للعدد', 'aantal'], ['مبين للنوع', 'soort']] },
      { label: ['المفعول لأجله', 'Mafʿūl li-ajlih'], sub: ['الدرس ١٠', 'les 10'], page: 47, children: [['أحواله الثلاث', 'drie toestanden'], ['تقديمه', 'vooropplaatsing']] },
      { label: ['المفعول فيه', 'Mafʿūl fīh'], sub: ['الدرس ١١', 'les 11'], page: 51, children: [['ظرف الزمان', 'tijd'], ['ظرف المكان', 'plaats'], ['المعرب والمبني', 'verbuigbaar en onverbuigbaar']] },
      { label: ['المفعول معه', 'Mafʿūl maʿah'], sub: ['الدرس ١٢', 'les 12'], page: 58, children: [['واو المعية', 'de wāw van begeleiding'], ['النصب والعطف', 'accusatief of nevenschikking']] }
    ]
  },
  points: [
    [34, 'المفعول به كل اسم منصوب دل على ما وقع عليه فعل الفاعل، دون تغيير صورة الفعل.', 'Het lijdend voorwerp is elk naamwoord in de accusatief dat aangeeft waarop de handeling van de fāʿil valt, zonder dat de vorm van het werkwoord verandert.'],
    [39, 'يجوز حذف المفعول به لقرينة، مثل: ﴿ما ودعك ربك وما قلى﴾ أي: وما قلاك.', 'Het lijdend voorwerp mag weg bij een aanwijzing, zoals in "jouw Heer heeft je niet verlaten en niet gehaat", d.w.z. "en jou niet gehaat".'],
    [40, 'يجب حذف عامل المفعول به إذا تقدم على فعل عامل في ضميره، مثل: ﴿والأرض بعد ذلك دحاها﴾.', 'De regens van het object moet weg als het object vóór een werkwoord staat dat op een voornaamwoord ervan werkt, zoals in "en de aarde, daarna spreidde Hij haar uit".'],
    [43, 'من المصادر المنصوبة بأفعال محذوفة: معاذ، سبحان، لبيك، حمدا، شكرا، صبرا، عجبا.', 'Overgeleverde maṣdars in de accusatief met een weggelaten werkwoord: maʿādha, subḥāna, labbayka, ḥamdan, shukran, ṣabran, ʿajaban.'],
    [47, 'المفعول لأجله المجرد من أل والإضافة نصبه أحسن، والمقرون بأل جره أحسن، والمضاف يستوي فيه الأمران.', 'Een mafʿūl li-ajlih zonder al- en zonder iḍāfa staat het best in de accusatief; met al- het best met een voorzetsel; bij iḍāfa zijn beide gelijk.'],
    [48, 'إذا سبق المفعول لأجله حرف جر أعرب جارا ومجرورا لا مفعولا لأجله، مثل: ﴿لما يهبط من خشية الله﴾.', 'Staat er een voorzetsel vóór, dan is het een voorzetselgroep en geen mafʿūl li-ajlih, zoals in "min khashyati llāh".'],
    [53, 'ظرف المكان المختص لا ينصب بل يجر بفي: في البيت، في المسجد.', 'Een specifiek plaatsbijwoord staat niet in de accusatief maar krijgt "fī": fī l-bayt, fī l-masjid.'],
    [59, 'يجب العطف إذا دل الفعل على المشاركة ولا يقع من واحد، مثل: اختصم زيد ومحمد.', 'Nevenschikking is verplicht als het werkwoord deelname vereist en niet door één persoon kan gebeuren, zoals in "Zayd en Muḥammad twistten".']
  ],
  terms: [
    ['المفعول به', 'al-mafʿūl bih', 34, 'اسم منصوب دل على ما وقع عليه فعل الفاعل.', 'Naamwoord in de accusatief waarop de handeling valt.'],
    ['المفعول المطلق', 'al-mafʿūl al-muṭlaq', 42, 'مصدر يذكر بعد فعل من لفظه.', 'Een maṣdar na een werkwoord van dezelfde stam.', 'وكلم الله موسى تكليما', 'wa kallama llāhu Mūsā taklīman'],
    ['المفعول لأجله', 'al-mafʿūl li-ajlih', 47, 'مصدر منصوب يذكر لبيان سبب الفعل، ويسمى المفعول له والمفعول السببي.', 'Een maṣdar in de accusatief dat de reden van de handeling noemt.', 'قمت إجلالا لوالدي', 'qumtu ijlālan li-wālidī'],
    ['المفعول فيه', 'al-mafʿūl fīh', 51, 'اسم يدل على زمان الفعل أو مكانه متضمن معنى (في).', 'Naamwoord voor tijd of plaats van de handeling, met de betekenis van "fī".'],
    ['المفعول معه', 'al-mafʿūl maʿah', 58, 'اسم منصوب بعد واو بمعنى (مع) للمصاحبة.', 'Naamwoord in de accusatief na een wāw in de betekenis van "maʿa".', 'سرت وشاطئ البحر', 'sirtu wa shāṭiʾa l-baḥr'],
    ['الاشتغال', 'al-ishtighāl', 40, 'أن يتقدم اسم ويتأخر عنه فعل عامل في ضميره.', 'Een naamwoord staat vooraan en een werkwoord erna werkt op een voornaamwoord dat ernaar verwijst.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['المفعولات الخمسة', 'De vijf objecten'],
      intro: ['تعريف مختصر ومثال من الكتاب.', 'Korte definitie en een voorbeeld uit het boek.'],
      columns: [['الضابط', 'Kenmerk'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['المفعول به', 'Mafʿūl bih'], cells: [['ما وقع عليه الفعل', 'waarop de handeling valt'], ['﴿يقلب الله الليل والنهار﴾', '"Allah wisselt nacht en dag af"']] },
        { label: ['المفعول المطلق', 'Mafʿūl muṭlaq'], cells: [['مصدر من لفظ الفعل', 'maṣdar van dezelfde stam'], ['﴿وقولوا قولا سديدا﴾', '"en spreek een juist woord"']] },
        { label: ['المفعول لأجله', 'Mafʿūl li-ajlih'], cells: [['مصدر يبين السبب', 'maṣdar dat de reden noemt'], ['﴿ولا تقتلوا أولادكم خشية إملاق﴾', '"dood je kinderen niet uit vrees voor armoede"']] },
        { label: ['المفعول فيه', 'Mafʿūl fīh'], cells: [['زمان أو مكان بمعنى في', 'tijd of plaats met de betekenis "fī"'], ['﴿أسرى بعبده ليلا﴾', '"die Zijn dienaar ’s nachts liet reizen"']] },
        { label: ['المفعول معه', 'Mafʿūl maʿah'], cells: [['اسم بعد واو المعية', 'naamwoord na de wāw van begeleiding'], ['خرجت وشروق الشمس', 'kharajtu wa shurūqa sh-shams']] }
      ],
      page: 34
    },
    {
      type: 'steps',
      title: ['الاسم بعد الواو: نصب أو عطف؟', 'Het naamwoord na de wāw: accusatief of nevenschikking?'],
      intro: ['ثلاث حالات كما لخصها الكتاب.', 'Drie gevallen, zoals het boek ze samenvat.'],
      nodes: [
        [59, 'لا يصح اشتراكه في الفعل', 'Kan niet meedoen aan de handeling', 'يجب النصب: نزل محمد والقمرَ', 'accusatief verplicht: nazala Muḥammadun wa l-qamara'],
        [59, 'يصح اشتراكه', 'Kan meedoen', 'يجوز النصب والعطف، والعطف أحسن: دخل الطالب والمعلمُ', 'beide mogen, nevenschikking is beter'],
        [59, 'الفعل يدل على المشاركة', 'Het werkwoord vereist deelname', 'يجب العطف: تقاتل المسلمون والكفار', 'nevenschikking verplicht']
      ]
    }
  ],
  sections: [
    [34, 'عوامل المفعول به', 'Wat het object regeert', 'الأصل أن يعمل فيه الفعل، ويعمل فيه أيضا اسم الفاعل: ﴿وكلبهم باسط ذراعيه﴾، والمصدر: ﴿أو إطعام في يوم ذي مسغبة يتيما﴾، وصيغ المبالغة، وصيغ التعجب: ﴿فما أصبرهم على النار﴾، واسم الفعل: ﴿عليكم أنفسكم﴾.', 'In de grond regeert het werkwoord het object, maar ook het actief deelwoord ("hun hond strekte zijn poten uit"), het maṣdar ("of voeden op een dag van honger, een wees"), intensiteitsvormen, vormen van verwondering ("hoe geduldig zijn zij met het Vuur") en het werkwoordelijk naamwoord ("let op jezelf").'],
    [43, 'أحوال المفعول المطلق', 'Vormen van het absolute object', 'يأتي نكرة: أكرمته إكراما، ومعرفا بأل: ﴿فيعذبه الله العذاب الأكبر﴾، ومضافا: ﴿وقد مكروا مكرهم﴾؛ ويحذف عامله في التفصيل: ﴿فإما منا بعد وإما فداء﴾، ولقرينة: قدوما مباركا.', 'Het komt onbepaald voor ("akramtuhu ikrāman"), met al- ("Allah zal hem de grootste straf geven") en in iḍāfa ("zij smeedden hun plan"). De regens valt weg bij een uitsplitsing ("dan vrijlating of losgeld") en bij een aanwijzing ("een gezegende aankomst").'],
    [54, 'حكم ظرفي الزمان والمكان', 'Naamval van tijd- en plaatsbijwoorden', 'ينصب ظرف الزمان إذا تضمن معنى في، ويجوز جره بحرف الجر؛ فإن لم يتضمن معنى في أعرب حسب موقعه: يوم الجمعة يوم مبارك؛ وينصب ظرف المكان إذا كان مبهما أو شبيها به: مشيت أمام الجند.', 'Een tijdsbijwoord staat in de accusatief als het de betekenis van "fī" heeft, en mag ook met een voorzetsel. Zonder die betekenis hangt de naamval af van de functie ("de vrijdag is een gezegende dag"). Een plaatsbijwoord staat in de accusatief als het vaag is of daarop lijkt ("ik liep vóór het leger").'],
    [55, 'الظروف المبنية', 'Onverbuigbare bijwoorden', 'من ظروف الزمان المبنية: إذ، إذا، متى، أيان، أمس، الآن، منذ، قط؛ ومن ظروف المكان: حيث، هنا، ثم، أين؛ وتعرب ظرفا مبنيا في محل نصب.', 'Onverbuigbare tijdsbijwoorden zijn o.a. idh, idhā, matā, ayyāna, ams, al-āna, mundhu en qaṭṭu; plaatsbijwoorden o.a. ḥaythu, hunā, thamma en ayna. Ze worden geanalyseerd als onverbuigbaar bijwoord op een plaats van accusatief.']
  ],
  keycards: [
    ['opsomming', 34, 'أنواع المفعول به', 'Soorten lijdend voorwerp', ['اسم ظاهر: ﴿وإذ ابتلى إبراهيم ربه﴾', 'ضمير متصل: ﴿عسى ربي أن يهديني﴾', 'ضمير منفصل: ﴿إياك نعبد﴾', 'مصدر مؤول: ﴿أفأمن أهل القرى أن يأتيهم بأسنا﴾'], ['zichtbaar naamwoord', 'verbonden voornaamwoord', 'los voornaamwoord', 'maṣdar muʾawwal']],
    ['onderscheid', 53, 'المبهم والمختص من الظروف', 'Vage en specifieke bijwoorden', ['زمان مبهم: أبد، أمد، حين، وقت', 'زمان مختص: ساعة، يوم، ليلة، شهر، سنة', 'مكان مبهم: أمام، وراء، يمين، فوق، تحت، جانب', 'مكان مختص: البيت، المسجد، المستشفى (يجر بفي)'], ['vage tijd: abad, amad, ḥīn, waqt', 'specifieke tijd: sāʿa, yawm, layla, shahr, sana', 'vage plaats: amāma, warāʾa, yamīna, fawqa, taḥta, jānib', 'specifieke plaats: huis, moskee, ziekenhuis (met "fī")']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['المفعولات خمسة وكلها منصوبة.', 'Er zijn vijf objecten, allemaal in de accusatief.'],
    ['المفعول به اسم ظاهر أو ضمير أو مصدر مؤول، ويحذف هو وعامله أحيانا.', 'Het lijdend voorwerp is een naamwoord, voornaamwoord of maṣdar muʾawwal; het en zijn regens vallen soms weg.'],
    ['المفعول المطلق يؤكد الفعل أو يبين عدده أو نوعه.', 'Het absolute object bevestigt of geeft aantal of soort aan.'],
    ['المفعول لأجله يبين سبب الفعل، والمفعول فيه زمانه أو مكانه.', 'Het object van reden noemt de oorzaak; het mafʿūl fīh de tijd of plaats.'],
    ['المفعول معه بعد واو المعية، ويجب العطف إذا دل الفعل على المشاركة.', 'Het mafʿūl maʿah volgt op de wāw van begeleiding; vereist het werkwoord deelname, dan is nevenschikking verplicht.']
  ],
  quiz: [
    { type: 'mc', page: 42, q: ['ما نوع المفعول المطلق في ﴿فدكتا دكة واحدة﴾؟', 'Welk soort mafʿūl muṭlaq staat in "fa-dukkatā dakkatan wāḥida"?'], options: [['مبين للعدد', 'مؤكد', 'مبين للنوع', 'مفعول لأجله'], ['aantal', 'bevestigend', 'soort', 'object van reden']], answer: 0, explain: ['دكة واحدة تبين عدد مرات الفعل.', '"Eén keer" geeft het aantal aan.'] },
    { type: 'mc', page: 47, q: ['ما إعراب «خشية» في ﴿ولا تقتلوا أولادكم خشية إملاق﴾؟', 'Wat is "khashyata" in "dood je kinderen niet khashyata imlāq"?'], options: [['مفعول لأجله', 'مفعول مطلق', 'حال', 'مفعول به'], ['mafʿūl li-ajlih', 'mafʿūl muṭlaq', 'ḥāl', 'mafʿūl bih']], answer: 0, explain: ['مصدر يبين سبب الفعل.', 'Een maṣdar dat de reden noemt.'] },
    { type: 'tf', page: 47, q: ['المفعول لأجله المقرون بأل جره بحرف الجر أحسن.', 'Een mafʿūl li-ajlih met al- staat het best met een voorzetsel.'], answer: 0, explain: ['مثل: أصلي للرغبة في مرضاة الله.', 'Zoals "uṣallī li-r-raghbati fī marḍāti llāh".'] },
    { type: 'mc', page: 53, q: ['كيف يعامل ظرف المكان المختص مثل «المسجد»؟', 'Hoe gebruik je een specifiek plaatsbijwoord zoals "al-masjid"?'], options: [['يجر بفي', 'ينصب دائما', 'يرفع', 'لا يستعمل'], ['met "fī" in de genitief', 'altijd in de accusatief', 'in de nominatief', 'het wordt niet gebruikt']], answer: 0, explain: ['تقول: صليت في المسجد.', 'Je zegt: ṣallaytu fī l-masjid.'] },
    { type: 'mc', page: 59, q: ['ما الصواب في «تعاون علي و...»؟', 'Wat is juist na "taʿāwana ʿAliyyun wa …"?'], options: [['محمدٌ بالعطف', 'محمدًا بالنصب', 'يجوز الوجهان بلا فرق', 'محمدٍ بالجر'], ['Muḥammadun (nevenschikking)', 'Muḥammadan (accusatief)', 'beide zonder verschil', 'Muḥammadin (genitief)']], answer: 0, explain: ['الفعل يدل على المشاركة فيجب العطف.', 'Het werkwoord vereist deelname, dus nevenschikking is verplicht.'] },
    { type: 'tf', page: 59, q: ['يقال: كل رجل وقلمَه بالنصب.', 'Men zegt "kullu rajulin wa qalamahu" met accusatief.'], answer: 1, explain: ['لا فعل قبل الواو فيقال: وقلمُه.', 'Er staat geen werkwoord vóór de wāw, dus "wa qalamuhu".'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٣٨ و٤١ و٤٦ و٥٠ و٥٧ و٦١.', 'Oefeningen van het boek op p. 38, 41, 46, 50, 57 en 61. De Nederlandse uitleg is een hulp bij het Arabisch, geen vervanging.']
})
