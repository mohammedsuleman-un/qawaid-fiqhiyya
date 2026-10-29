// Hoofdstukkaart bij اللغة العربية (٤), eenheid 4: التوابع الأربعة (lessen 5–13, boek p. 31–49).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-arabic/leesnotities.md);
// voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-arabic',
  chapter: '5',
  unit: 4,
  source: {
    label: ['كتاب اللغة العربية (٤)، سلسلة زاد العلمية', 'Arabische taal (4), Zad-reeks'],
    pages: '31–49',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['التوابع الأربعة', 'De vier volgende woorden'],
  subtitle: ['تسعة دروس', 'Negen lessen'],
  summary: [
    'التوابع فضلات تتبع غيرها في الإعراب، وهي أربعة: النعت، والتوكيد، والعطف، والبدل. النعت حقيقي يبين صفة في متبوعه، مفردا أو جملة أو شبه جملة، وسببي يبين صفة في شيء له علاقة به. والتوكيد لفظي بتكرار اللفظ ومعنوي بألفاظ معلومة. والعطف إتباع لفظ لآخر بحرف معين. والبدل التابع المقصود بالحكم بلا واسطة، وهو مطابق وبعض من كل واشتمال.',
    'De tawābiʿ zijn aanvullingen die een ander woord volgen in de iʿrāb; het zijn er vier: naʿt (bijvoeglijke bepaling), tawkīd (versterking), ʿaṭf (nevenschikking) en badal (bijstelling). Naʿt ḥaqīqī beschrijft het voorgaande woord, als woord, zin of halve zin; naʿt sababī beschrijft iets wat ermee samenhangt. Tawkīd is woordelijk (herhaling) of inhoudelijk (vaste woorden). ʿAṭf koppelt met bepaalde partikels. Badal is het eigenlijk bedoelde zonder tussenwoord: gelijk, deel van geheel, of omvattend.'
  ],
  map: {
    title: ['التوابع في خريطة واحدة', 'De tawābiʿ in één kaart'],
    intro: ['كما في المخطط ص ٣٢.', 'Zoals in het schema op p. 32.'],
    root: [['التوابع الأربعة', 'De vier tawābiʿ'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['النعت', 'Naʿt'], sub: ['الدروس ٥–٦', 'les 5–6'], page: 33, children: [['حقيقي: مفرد وجملة وشبه جملة', 'ḥaqīqī: woord, zin, halve zin'], ['سببي', 'sababī']] },
      { label: ['التوكيد', 'Tawkīd'], sub: ['الدرسان ٧–٨', 'les 7–8'], page: 38, children: [['لفظي', 'woordelijk'], ['معنوي', 'inhoudelijk']] },
      { label: ['العطف', 'ʿAṭf'], sub: ['الدرسان ٩–١٠', 'les 9–10'], page: 42, children: [['الواو', 'wa'], ['الفاء', 'fa'], ['ثم', 'thumma']] },
      { label: ['البدل', 'Badal'], sub: ['الدروس ١١–١٣', 'les 11–13'], page: 45, children: [['مطابق', 'gelijk'], ['بعض من كل', 'deel van geheel'], ['اشتمال', 'omvattend']] }
    ]
  },
  points: [
    [33, 'النعت الحقيقي اسم يبين صفة من صفات ما قبله: ﴿فتحرير رقبة مؤمنة﴾ [النساء: 92]، ﴿فيه آيات بينات﴾ [آل عمران: 97].', 'Naʿt ḥaqīqī is een nomen dat een eigenschap van het voorgaande toont: "een gelovige slaaf vrijlaten" (4:92), "daarin zijn duidelijke tekenen" (3:97).'],
    [35, 'النعت السببي يبين صفة في اسم ظاهر بعده له علاقة بالمتبوع: ﴿ربنا أخرجنا من هذه القرية الظالم أهلها﴾ [النساء: 75].', 'Naʿt sababī beschrijft een uitgedrukt nomen erna dat met het gevolgde samenhangt: "Heer, haal ons uit deze stad waarvan de bewoners onrechtvaardig zijn" (4:75).'],
    [38, 'التوكيد لفظ يقوي ما قبله لإزالة اللبس ويتبعه في الإعراب، واللفظي تكرار اللفظ نفسه: ﴿والسابقون السابقون﴾ [الواقعة: 10].', 'Tawkīd versterkt het voorgaande om dubbelzinnigheid weg te nemen; woordelijk is herhaling: "en de voorlopers, de voorlopers" (56:10).'],
    [39, 'ألفاظ التوكيد المعنوي: نفس، عين، كلا، كلتا، كل، جميع، أجمع، جمعاء، عامة، جمع، ويشترط اتصالها بضمير يعود على المؤكد إلا أجمع وجمعاء وجمع.', 'Woorden van inhoudelijke versterking: nafs, ʿayn, kilā, kiltā, kull, jamīʿ, ajmaʿ, jamʿāʾ, ʿāmma, jumaʿ; een voornaamwoord dat terugverwijst is vereist, behalve bij ajmaʿ, jamʿāʾ en jumaʿ.'],
    [40, 'لا يتقدم التوكيد المعنوي على المؤكد، فلا يقال: نفس الطالب شارك.', 'Inhoudelijke versterking gaat niet vooraf: men zegt niet "nafsu ṭ-ṭālibi shāraka".'],
    [42, 'الواو لمطلق المشاركة، والفاء للترتيب والتعقيب، وثم للترتيب مع التراخي.', 'Wa geeft deelname, fa volgorde met directe opvolging, thumma volgorde met tussentijd.'],
    [46, 'كل اسم محلى بأل بعد اسم الإشارة يعرب بدلا منه: ﴿إن هذا القرآن يهدي للتي هي أقوم﴾ [الإسراء: 9].', 'Elk al-nomen na een aanwijzend voornaamwoord is daarvan badal: "deze Koran leidt naar wat het meest recht is" (17:9).'],
    [46, 'يشترط في بدل البعض أن يكون جزءا حقيقيا من المبدل منه، وأن يكون المبدل منه قابلا للتجزئة: قرأت الكتاب نصفه.', 'Bij badal van een deel moet het een werkelijk deel zijn van een deelbaar geheel: "ik las het boek, de helft ervan".']
  ],
  terms: [
    ['التوابع', 'at-tawābiʿ', 33, 'فضلات تتبع غيرها في الإعراب.', 'Aanvullingen die een ander woord volgen in de iʿrāb.'],
    ['النعت السببي', 'an-naʿt as-sababī', 34, 'نعت يبين صفة في شيء له علاقة بالمتبوع، لا في المتبوع نفسه.', 'Naʿt dat iets beschrijft wat met het gevolgde samenhangt, niet het gevolgde zelf.'],
    ['التوكيد', 'at-tawkīd', 38, 'لفظ يقوي ما قبله لإزالة اللبس، ويتبعه في الإعراب.', 'Een woord dat het voorgaande versterkt om dubbelzinnigheid weg te nemen en het in iʿrāb volgt.'],
    ['العطف', 'al-ʿaṭf', 42, 'إتباع لفظ لآخر بواسطة حروف معينة.', 'Een woord een ander laten volgen via bepaalde partikels.'],
    ['البدل', 'al-badal', 45, 'التابع المقصود بالحكم بلا واسطة.', 'Het volgende woord dat eigenlijk bedoeld is, zonder tussenwoord.'],
    ['بدل الاشتمال', 'badal al-ishtimāl', 47, 'بدل يدل على معنى يشتمل عليه المبدل منه وليس جزءا منه: أحببت القائد شجاعته.', 'Badal voor een betekenis die het geheel omvat zonder er een deel van te zijn: "ik hield van de leider, zijn moed".']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أقسام البدل', 'Soorten badal'],
      intro: ['كما في الصفحتين ٤٦–٤٧.', 'Zoals op p. 46–47.'],
      columns: [['الضابط', 'Kenmerk'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['المطابق (كل من كل)', 'Gelijk (geheel voor geheel)'], cells: [['البدل عين المبدل منه', 'de badal is het geheel zelf'], ['﴿اهدنا الصراط المستقيم * صراط الذين أنعمت عليهم﴾', 'al-Fātiḥa 6–7']] },
        { label: ['بعض من كل', 'Deel van geheel'], cells: [['جزء حقيقي من مبدل منه قابل للتجزئة', 'een werkelijk deel van een deelbaar geheel'], ['﴿ولله على الناس حج البيت من استطاع إليه سبيلا﴾', 'Āl ʿImrān 97']] },
        { label: ['الاشتمال', 'Omvattend'], cells: [['معنى يشتمل عليه المبدل منه وليس جزءا', 'een betekenis die het omvat, geen deel'], ['﴿يسألونك عن الشهر الحرام قتال فيه﴾', 'al-Baqara 217']] }
      ],
      page: 46
    },
    {
      type: 'cards',
      title: ['أنواع النعت الحقيقي', 'Soorten naʿt ḥaqīqī'],
      intro: ['كما في الصفحة ٣٤.', 'Zoals op p. 34.'],
      nodes: [
        [33, 'مفرد', 'Enkel woord', 'رأيت امرأة محتشمة', 'ik zag een zedige vrouw'],
        [34, 'جملة فعلية', 'Werkwoordzin', 'رأيت فلاحا يحرث الأرض', 'ik zag een boer die het land ploegt'],
        [34, 'جملة اسمية', 'Naamwoordelijke zin', 'زرعت شجرة ثمارها يانعة', 'ik plantte een boom waarvan de vruchten rijp zijn'],
        [34, 'شبه جملة', 'Halve zin', 'رأيت رضيعا في سريره', 'ik zag een zuigeling in zijn bedje']
      ]
    }
  ],
  sections: [
    [35, 'نماذج إعرابية في النعت', 'Analysevoorbeelden bij naʿt', 'في الفصل طلاب مجتهدون: مجتهدون نعت مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم. شاهدت طائرا فوق الغصن: شبه الجملة في محل نصب نعت. فحص الطبيب مريضا يشكو من الوجع: جملة يشكو في محل نصب نعت لمريضا.', '"Fī l-faṣli ṭullābun mujtahidūn": mujtahidūn is naʿt, nominatief met wāw (mannelijk klankmeervoud). "Shāhadtu ṭāʾiran fawqa l-ghuṣn": de halve zin staat op de plaats van een accusatief als naʿt. "Faḥaṣa ṭ-ṭabību marīḍan yashkū…": de zin is naʿt van marīḍan.'],
    [40, 'نماذج إعرابية في التوكيد', 'Analysevoorbeelden bij tawkīd', 'فاز المتسابقان نفساهما: نفساهما توكيد معنوي مرفوع بالألف لأنه مثنى، وهما في محل جر بالإضافة. أثنيت على الفائزين كلهم: كل توكيد معنوي مجرور، وهو مضاف.', '"Fāza l-mutasābiqāni nafsāhumā": nafsāhumā is inhoudelijke versterking, nominatief met alif (dualis). "Athnaytu ʿalā l-fāʾizīna kullihim": kull is versterking in de genitief, geannexeerd.'],
    [43, 'نماذج إعرابية في العطف', 'Analysevoorbeelden bij ʿaṭf', 'زرعت القمح ثم حصدته: ثم حرف عطف، وجملة حصدته معطوفة على الجملة قبلها. دخل الفتى الجامعة ثم تخرج: الفتى فاعل مرفوع بالضمة المقدرة للتعذر.', '"Zaraʿtu l-qamḥa thumma ḥaṣadtuhu": thumma is een nevenschikkend partikel; de zin erna is gekoppeld. "Dakhala l-fatā l-jāmiʿata thumma takharraja": al-fatā is fāʿil met een veronderstelde ḍamma.'],
    [48, 'نماذج إعرابية في البدل', 'Analysevoorbeelden bij badal', 'يفدي المسلم دينه الإسلام بروحه: الإسلام بدل مطابق منصوب. استفدت من شيخ الإسلام ابن تيمية كتبه: ابن بدل مطابق مجرور، وكتبه بدل اشتمال مجرور. أعجبني البيت غرفه: غرف بدل بعض من كل مرفوع.', '"Yafdī l-muslimu dīnahu l-islāma bi-rūḥih": al-islām is gelijke badal, accusatief. "Istafadtu min shaykhi l-islāmi bni Taymiyya kutubih": ibn is gelijke badal, kutub omvattende badal. "Aʿjabanī l-baytu ghurafuhu": ghuraf is badal van een deel.']
  ],
  keycards: [
    ['opsomming', 33, 'التوابع الأربعة', 'De vier tawābiʿ', ['النعت', 'التوكيد', 'العطف', 'البدل'], ['naʿt', 'tawkīd', 'ʿaṭf', 'badal']],
    ['opsomming', 39, 'ألفاظ التوكيد المعنوي', 'Woorden van inhoudelijke versterking', ['نفس، عين', 'كلا، كلتا', 'كل، جميع، عامة', 'أجمع، جمعاء، جمع'], ['nafs, ʿayn', 'kilā, kiltā', 'kull, jamīʿ, ʿāmma', 'ajmaʿ, jamʿāʾ, jumaʿ']],
    ['onderscheid', 42, 'معاني حروف العطف', 'Betekenis van de nevenschikkende partikels', ['الواو: مطلق المشاركة', 'الفاء: الترتيب والتعقيب', 'ثم: الترتيب والتراخي'], ['wa: deelname', 'fa: volgorde met directe opvolging', 'thumma: volgorde met tussentijd']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['التوابع أربعة: النعت والتوكيد والعطف والبدل.', 'Er zijn vier tawābiʿ: naʿt, tawkīd, ʿaṭf en badal.'],
    ['النعت حقيقي وسببي.', 'Naʿt is ḥaqīqī of sababī.'],
    ['التوكيد لفظي ومعنوي، والمعنوي لا يتقدم.', 'Tawkīd is woordelijk of inhoudelijk; inhoudelijk gaat niet vooraf.'],
    ['البدل مطابق وبعض من كل واشتمال.', 'Badal is gelijk, deel van geheel of omvattend.']
  ],
  quiz: [
    { type: 'mc', page: 35, q: ['ما نوع النعت في ﴿القرية الظالم أهلها﴾؟', 'Welk naʿt staat in "de stad waarvan de bewoners onrechtvaardig zijn" (4:75)?'], options: [['سببي', 'حقيقي مفرد', 'جملة', 'شبه جملة'], ['sababī', 'ḥaqīqī, enkel woord', 'zin', 'halve zin']], answer: 0, explain: ['الظلم صفة لأهلها لا للقرية.', 'Onrecht beschrijft de bewoners, niet de stad.'] },
    { type: 'tf', page: 40, q: ['يجوز أن يقال: نفس الطالب شارك في المسابقة، على أن نفس توكيد.', 'Men mag "nafsu ṭ-ṭālibi shāraka" zeggen met nafs als versterking.'], answer: 1, explain: ['التوكيد المعنوي لا يتقدم على المؤكد، ونفس هنا مبتدأ.', 'Inhoudelijke versterking gaat niet vooraf; nafs is hier mubtadaʾ.'] },
    { type: 'mc', page: 42, q: ['أي حرف عطف يفيد الترتيب مع التراخي؟', 'Welk partikel geeft volgorde met tussentijd?'], options: [['ثم', 'الفاء', 'الواو', 'أو'], ['thumma', 'fa', 'wa', 'aw']], answer: 0, explain: ['كما في الصفحة ٤٢.', 'Zoals op p. 42.'] },
    { type: 'mc', page: 47, q: ['ما نوع البدل في: أحببت القائد شجاعته؟', 'Welke badal staat in "aḥbabtu l-qāʾida shajāʿatahu"?'], options: [['اشتمال', 'مطابق', 'بعض من كل', 'ليس بدلا'], ['omvattend', 'gelijk', 'deel van geheel', 'geen badal']], answer: 0, explain: ['الشجاعة معنى يشتمل عليه القائد وليست جزءا منه.', 'Moed is een betekenis die de leider omvat, geen deel van hem.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٣٧ و٤١ و٤٤ و٤٩.', 'Oefeningen van het boek op p. 37, 41, 44 en 49. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
