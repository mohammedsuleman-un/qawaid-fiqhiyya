// Hoofdstukkaart bij الفقه (٤), eenheid 1: البيع (lessen 1–6, boek p. 10–20).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '10–20',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['البيع', 'Koop'],
  subtitle: ['ستة دروس', 'Zes lessen'],
  summary: [
    'البيع مبادلة المال بالمال تمليكا وتملكا، وأركانه الصيغة والمتعاقدان ومحل العقد، وهو جائز بالكتاب والسنة والإجماع. لصحته سبعة شروط، ونهى الشارع عن بيوع لحكم عظيمة، وشرع الخيار والإقالة، وللبيع آداب، وبيع التقسيط جائز بضوابطه.',
    'Koop is de ruil van bezit tegen bezit, waarbij elk blijvend eigenaar wordt. De zuilen zijn de formule, de twee partijen en het object; koop is toegestaan door Koran, sunna en consensus. Er zijn zeven geldigheidsvoorwaarden, een aantal verboden vormen, keuzerechten en ontbinding, etiquette, en afbetaling is toegestaan binnen zijn regels.'
  ],
  map: {
    title: ['البيع في خريطة واحدة', 'Koop in één kaart'],
    intro: ['كما في الدروس الستة.', 'Zoals in de zes lessen.'],
    root: [['البيع', 'Koop'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['التعريف والأركان', 'Definitie en zuilen'], sub: ['الدرس ١', 'les 1'], page: 10, children: [['الصيغة', 'de formule'], ['المتعاقدان', 'de twee partijen'], ['محل العقد', 'het object']] },
      { label: ['الحكم والشروط', 'Oordeel en voorwaarden'], sub: ['الدروس ٢–٣', 'les 2–3'], page: 11, children: [['التراضي', 'wederzijds goedvinden'], ['معلومية الثمن والمبيع', 'bekende prijs en waar'], ['القدرة على التسليم', 'overdraagbaarheid']] },
      { label: ['البيوع المنهي عنها', 'Verboden verkopen'], sub: ['الدروس ٣–٤', 'les 3–4'], page: 14, children: [['بعد نداء الجمعة', 'na de vrijdagoproep'], ['العينة', 'ʿīna'], ['النجش', 'najsh']] },
      { label: ['الخيار', 'Keuzerecht'], sub: ['الدرس ٥', 'les 5'], page: 17, children: [['المجلس والشرط', 'zitting en voorwaarde'], ['العيب والغبن والتدليس', 'gebrek, benadeling en misleiding']] },
      { label: ['الإقالة والآداب والتقسيط', 'Ontbinding, etiquette en afbetaling'], sub: ['الدرس ٦', 'les 6'], page: 18, children: [['من أقال مسلما', 'wie een moslim ontslaat'], ['السماحة والصدق', 'ruimhartigheid en eerlijkheid'], ['بيع التقسيط', 'verkoop op afbetaling']] }
    ]
  },
  points: [
    [10, 'يجب على كل من له تعلق بالسوق أن يتعلم أحكام البيع، لأن كثيرا من المخالفات تقع بسبب الجهل.', 'Wie met de markt te maken heeft, moet de regels van koop leren, want veel overtredingen ontstaan uit onwetendheid.'],
    [10, 'البيع اصطلاحا: مبادلة المال بالمال تمليكا وتملكا، والمال يشمل الأعيان والمنافع.', 'Koop als vakterm: ruil van bezit tegen bezit met blijvend eigendom; bezit omvat zaken en nut.'],
    [11, 'قال ابن قدامة: أجمع المسلمون على جواز البيع في الجملة.', 'Ibn Qudāma: de moslims zijn het eens over de toelaatbaarheid van koop in het algemeen.'],
    [12, 'شروط صحة البيع سبعة: التراضي، وجواز التصرف، وإباحة النفع، والملك أو الإذن، ومعلومية المبيع، ومعلومية الثمن، والقدرة على التسليم.', 'Zeven voorwaarden: goedvinden, handelingsbevoegdheid, toegestaan nut, eigendom of toestemming, bekende waar, bekende prijs en overdraagbaarheid.'],
    [13, 'الأصل في البيوع الإباحة إلا ما دل الدليل على تحريمه.', 'De grondregel bij verkopen is toelaatbaarheid, tenzij een bewijs het verbod aantoont.'],
    [15, 'العينة حيلة على القرض الربوي، والتورق جائز عند الحاجة إذا لم يجد من يقرضه قرضا حسنا.', 'ʿĪna is een list voor een rentelening; tawarruq is toegestaan bij behoefte, als men geen goede lening vindt.'],
    [18, 'يستحب للمسلم أن يقيل أخاه إذا ندم على البيع، والإشهاد على البيع مستحب.', 'Het is aanbevolen een broeder te ontslaan als hij spijt heeft van de koop, en getuigen bij de koop is aanbevolen.'],
    [19, 'إذا تأخر المشتري في التقسيط لم يجز إلزامه بزيادة في الدين، لأنه من الربا المحرم.', 'Komt de koper te laat met een termijn, dan mag de schuld niet verhoogd worden, want dat is verboden ribā.']
  ],
  terms: [
    ['البيع', 'al-bayʿ', 10, 'لغة: أخذ شيء وإعطاء شيء. واصطلاحا: مبادلة المال بالمال تمليكا وتملكا.', 'Taal: iets nemen en iets geven. Vakterm: ruil van bezit tegen bezit, met blijvend eigendom.'],
    ['المعاطاة', 'al-muʿāṭāh', 11, 'أن يعطي البائع السلعة ويعطي المشتري الثمن المعلوم من غير تلفظ.', 'De verkoper geeft de waar en de koper de bekende prijs, zonder iets uit te spreken.'],
    ['محل العقد ومجلس العقد', 'maḥall al-ʿaqd / majlis al-ʿaqd', 11, 'المحل: ما يقع عليه العقد، والمجلس: المكان الذي وقع فيه.', 'Maḥall: waarover het contract gaat; majlis: de plaats waar het werd gesloten.'],
    ['العينة', 'al-ʿīna', 15, 'أن يبيع سلعة بثمن مؤجل ثم يشتريها نفسه بأقل منه نقدا.', 'Een waar op termijn verkopen en haar zelf contant terugkopen voor minder.'],
    ['التورق', 'at-tawarruq', 15, 'أن يشتري سلعة بأجل ثم يبيعها نقدا على غير البائع الأول بلا اتفاق، ليحصل على السيولة.', 'Een waar op termijn kopen en contant aan een ander verkopen, zonder afspraak met de eerste verkoper, om geld te krijgen.'],
    ['النجش', 'an-najsh', 16, 'أن يزيد في ثمن السلعة وهو لا يريد شراءها ليغر غيره.', 'De prijs opdrijven zonder te willen kopen, om een ander te misleiden.'],
    ['الخيار', 'al-khiyār', 17, 'طلب خير الأمرين من الإمضاء أو الفسخ.', 'Het beste van twee kiezen: het contract uitvoeren of ontbinden.'],
    ['الإقالة', 'al-iqāla', 18, 'فسخ العقد إذا ندم أحد المتعاقدين.', 'Ontbinding van het contract als een van beide partijen spijt heeft.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['أنواع الخيار', 'Soorten keuzerecht'],
      intro: ['كما في المخطط ص ١٧.', 'Zoals in het schema op p. 17.'],
      nodes: [
        [17, 'خيار المجلس', 'Keuze in de zitting', 'ما لم يتفرقا', 'zolang zij niet uit elkaar gaan'],
        [17, 'خيار الشرط', 'Keuze bij voorwaarde', 'المسلمون على شروطهم', 'moslims houden zich aan hun voorwaarden'],
        [17, 'خيار العيب', 'Keuze bij gebrek', 'ما أوجب نقصان الثمن في عادة التجار', 'wat volgens handelaren de prijs verlaagt'],
        [18, 'خيار الغبن', 'Keuze bij benadeling', 'غبن يخرج عن العادة والعرف', 'benadeling buiten gewoonte en gebruik'],
        [18, 'خيار التدليس', 'Keuze bij misleiding', 'إظهار السلعة بمظهر مرغوب ليس فيها', 'de waar mooier laten lijken dan ze is']
      ]
    },
    {
      type: 'compare',
      title: ['العينة والتورق', 'ʿĪna en tawarruq'],
      intro: ['كما في الصفحة ١٥.', 'Zoals op p. 15.'],
      columns: [['العينة', 'ʿĪna'], ['التورق', 'Tawarruq']],
      rows: [
        { label: ['المشتري الثاني', 'De tweede koper'], cells: [['البائع الأول نفسه', 'de eerste verkoper zelf'], ['شخص آخر بلا اتفاق', 'een ander, zonder afspraak']] },
        { label: ['المثال', 'Voorbeeld'], cells: [['سيارة بـ ١٠٠٠٠٠ دينا ثم يشتريها البائع بـ ٨٠٠٠٠ نقدا', 'auto voor 100.000 op schuld, door de verkoper contant teruggekocht voor 80.000'], ['سيارة بـ ١٠٠٠٠٠ دينا ثم تباع لآخر بـ ٨٠٠٠٠ نقدا', 'auto voor 100.000 op schuld, contant aan een ander verkocht voor 80.000']] },
        { label: ['الحكم', 'Oordeel'], cells: [['محرمة، حيلة على الربا', 'verboden, een list voor ribā'], ['جائز عند الحاجة', 'toegestaan bij behoefte']] }
      ],
      page: 15
    }
  ],
  sections: [
    [14, 'البيع على بيع أخيه', 'Verkopen over de verkoop van je broeder', 'المحرم أن يكون بعد عقد البيع وانتهائه، كأن يقول للمشتري: أبيعك مثلها بأقل، أما قبل البيع فلا بأس بالزيادة والنقص كما في المحلات.', 'Verboden is het na het sluiten van de koop, zoals tegen de koper zeggen: ik verkoop je hetzelfde voor minder; vóór de koop mag men gewoon de prijs verhogen of verlagen, zoals in winkels.'],
    [13, 'بيع ما قد يستعمل في محرم', 'Verkopen wat verboden gebruikt kan worden', 'لا بأس ببيع الملابس والعطور والمكياج للنساء وإن استعملها بعضهم استعمالا محرما؛ لأن الأصل الإباحة، ولا يلزم سؤال المشتري.', 'Kleding, parfum en make-up voor vrouwen verkopen mag, ook als sommigen ze verboden gebruiken; de grondregel is toelaatbaarheid, en men hoeft de koper niet te ondervragen.'],
    [19, 'بيع التقسيط', 'Verkoop op afbetaling', 'يجوز البيع إلى أجل معلوم بزيادة معلومة على ثمن النقد، وهو قول أكثر العلماء؛ قال ابن باز: قد شذ بعض أهل العلم فمنع الزيادة لأجل الأجل، وهو قول لا وجه له.', 'Verkopen op een bekende termijn met een bekende verhoging is toegestaan, volgens de meeste geleerden; Ibn Bāz: wie de verhoging voor uitstel verbood, week af, en dat standpunt heeft geen grond.']
  ],
  keycards: [
    ['opsomming', 10, 'أركان البيع', 'Zuilen van koop', ['الصيغة: إيجاب وقبول أو معاطاة', 'المتعاقدان', 'محل العقد: الثمن والمثمن'], ['de formule: aanbod en aanvaarding of muʿāṭāh', 'de twee partijen', 'het object: prijs en waar']],
    ['voorwaarde', 12, 'شروط صحة البيع', 'Geldigheidsvoorwaarden van koop', ['التراضي', 'جواز التصرف', 'إباحة النفع', 'الملك أو الإذن', 'معلومية المبيع', 'معلومية الثمن', 'القدرة على التسليم'], ['wederzijds goedvinden', 'handelingsbevoegdheid', 'toegestaan nut', 'eigendom of toestemming', 'bekende waar', 'bekende prijs', 'overdraagbaarheid']],
    ['uitzondering', 12, 'ما يستثنى', 'Uitzonderingen', ['الإكراه بحق كبيع القاضي لسداد الدين', 'بيع الصغير الشيء اليسير الذي جرت العادة به'], ['terechte dwang, zoals verkoop door de rechter om schuld te betalen', 'een kind dat iets kleins verkoopt zoals gebruikelijk']],
    ['opsomming', 18, 'آداب البيع', 'Etiquette van koop', ['السماحة في البيع والشراء', 'الصدق في المعاملة', 'ترك الحلف ولو كان صادقا'], ['ruimhartigheid bij kopen en verkopen', 'eerlijkheid', 'niet zweren, ook als men eerlijk is']]
  ],
  hadith: [
    { text: 'البيعان بالخيار ما لم يتفرقا، فإن صدقا وبينا بورك لهما في بيعهما، وإن كتما وكذبا محقت بركة بيعهما', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'De twee partijen hebben keuze zolang zij niet uit elkaar gaan; als zij eerlijk zijn en alles duidelijk maken, wordt hun koop gezegend, en als zij verzwijgen en liegen, wordt de zegen van hun koop weggenomen', pages: [11, 17] },
    { text: 'إنما البيع عن تراض', takhrij: 'أخرجه ابن ماجه، وصححه الألباني', takhrijNl: 'Ibn Māja; ṣaḥīḥ volgens al-Albānī', nl: 'Koop is alleen met wederzijds goedvinden', pages: [12] },
    { text: 'إن الله ورسوله حرم بيع الخمر والميتة والخنزير والأصنام … لا، هو حرام … قاتل الله اليهود! إن الله لما حرم شحومها جملوه، ثم باعوه، فأكلوا ثمنه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'سئل عن شحوم الميتة تطلى بها السفن وتدهن بها الجلود.', nlNote: 'Gevraagd naar het vet van kadavers waarmee schepen en huiden worden ingesmeerd.', nl: 'Allah en Zijn Boodschapper hebben de verkoop van wijn, kadavers, varkens en afgodsbeelden verboden … Nee, het is verboden … Moge Allah de joden bestrijden: toen Allah hun het vet verbood, smolten zij het, verkochten het en aten de opbrengst', pages: [13] },
    { text: 'إن الله عز وجل إذا حرم أكل شيء حرم ثمنه', takhrij: 'أخرجه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', nl: 'Als Allah het eten van iets verbiedt, verbiedt Hij ook de prijs ervan', pages: [13] },
    { text: 'لا تبع ما ليس عندك', takhrij: 'أخرجه أبو داود والترمذي، وصححه الألباني', takhrijNl: 'Abū Dāwūd en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', nl: 'Verkoop niet wat je niet hebt', pages: [13] },
    { text: 'لا يبع بعضكم على بيع بعض', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Laat niemand van jullie verkopen over de verkoop van een ander', pages: [14] },
    { text: 'إذا تبايعتم بالعينة، وأخذتم أذناب البقر، ورضيتم بالزرع، وتركتم الجهاد، سلط الله عليكم ذلا لا ينزعه حتى ترجعوا إلى دينكم', takhrij: 'أخرجه أبو داود، وصححه الألباني', takhrijNl: 'Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Als jullie ʿīna-handel drijven, de staarten van koeien vastpakken, tevreden zijn met de landbouw en de strijd nalaten, legt Allah jullie een vernedering op die Hij niet wegneemt tot jullie terugkeren naar jullie religie', pages: [15] },
    { text: 'المسلمون على شروطهم', takhrij: 'أخرجه أبو داود، وصححه الألباني', takhrijNl: 'Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Moslims houden zich aan hun voorwaarden', pages: [17] },
    { text: 'من أقال مسلما أقاله الله عثرته يوم القيامة', takhrij: 'أخرجه أبو داود وابن ماجه، وصححه الألباني', takhrijNl: 'Abū Dāwūd en Ibn Māja; ṣaḥīḥ volgens al-Albānī', nl: 'Wie een moslim van een koop ontslaat, die ontslaat Allah van zijn misstap op de Dag der Opstanding', pages: [18] },
    { text: 'رحم الله رجلا سمحا إذا باع وإذا اشترى، وإذا اقتضى', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Moge Allah Zich ontfermen over een man die ruimhartig is als hij verkoopt, als hij koopt en als hij zijn recht opeist', pages: [18] },
    { text: 'التاجر الصدوق الأمين مع النبيين والصديقين والشهداء', takhrij: 'أخرجه الترمذي، وحسنه', takhrijNl: 'at-Tirmidhī; door hem ḥasan genoemd', nl: 'De eerlijke, betrouwbare handelaar is met de profeten, de waarachtigen en de martelaren', pages: [18] },
    { text: 'والحلف منفقة للسلعة ممحقة للبركة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Zweren laat de waar verkopen, maar wist de zegen uit', pages: [18] }
  ],
  persons: [
    ['ibn-qudama', 'text', [11], 'نقل الإجماع على جواز البيع.', 'Gaf de consensus over de toelaatbaarheid van koop.'],
    ['ibn-umar', 'text', [16], 'روى النهي عن بيع الثمار قبل بدو صلاحها.', 'Overleverde het verbod vruchten te verkopen vóór hun rijpheid.'],
    ['ibn-baz', 'text', [19], 'قال: منع الزيادة لأجل الأجل قول لا وجه له.', 'Zei: het verbod op verhoging voor uitstel heeft geen grond.'],
    ['al-albani', 'takhrij', [12, 13, 15, 17, 18], 'صحح أحاديث في البيع.', 'Verklaarde hadith over koop authentiek.']
  ],
  review: [
    ['البيع مبادلة المال بالمال تمليكا وتملكا، وأركانه ثلاثة.', 'Koop is ruil van bezit tegen bezit; er zijn drie zuilen.'],
    ['لصحة البيع سبعة شروط.', 'Koop heeft zeven geldigheidsvoorwaarden.'],
    ['العينة محرمة والتورق جائز عند الحاجة.', 'ʿĪna is verboden, tawarruq is toegestaan bij behoefte.'],
    ['أنواع الخيار: المجلس والشرط والعيب والغبن والتدليس.', 'Keuzerechten: zitting, voorwaarde, gebrek, benadeling en misleiding.'],
    ['بيع التقسيط جائز، ولا تجوز الزيادة عند التأخر.', 'Afbetaling is toegestaan, maar verhoging bij te laat betalen niet.']
  ],
  quiz: [
    { type: 'mc', page: 10, q: ['كم أركان البيع؟', 'Hoeveel zuilen heeft koop?'], options: [['ثلاثة', 'اثنان', 'خمسة', 'سبعة'], ['drie', 'twee', 'vijf', 'zeven']], answer: 0, explain: ['الصيغة والمتعاقدان ومحل العقد.', 'De formule, de twee partijen en het object.'] },
    { type: 'tf', page: 15, q: ['التورق هو العينة نفسها.', 'Tawarruq is hetzelfde als ʿīna.'], answer: 1, explain: ['في التورق يبيعها على غير البائع الأول، وهو جائز عند الحاجة.', 'Bij tawarruq verkoopt men aan een ander dan de eerste verkoper; het is toegestaan bij behoefte.'] },
    { type: 'mc', page: 16, q: ['ما النجش؟', 'Wat is najsh?'], options: [['أن يزيد في ثمن السلعة وهو لا يريد شراءها', 'أن يبيع ما ليس عنده', 'أن يبيع بعد نداء الجمعة', 'أن يكتم عيب السلعة'], ['de prijs opdrijven zonder te willen kopen', 'verkopen wat men niet heeft', 'verkopen na de vrijdagoproep', 'een gebrek verzwijgen']], answer: 0, explain: ['ليغر غيره ويرفع السعر.', 'Om een ander te misleiden en de prijs op te drijven.'] },
    { type: 'tf', page: 19, q: ['يجوز إلزام المشتري بزيادة إذا تأخر في سداد الأقساط.', 'De koper mag een verhoging opgelegd krijgen als hij te laat betaalt.'], answer: 1, explain: ['لأن ذلك من الربا المحرم.', 'Want dat is verboden ribā.'] },
    { type: 'mc', page: 17, q: ['ما ضابط العيب الذي يثبت به الخيار؟', 'Wat is de maatstaf voor een gebrek dat keuzerecht geeft?'], options: [['ما أوجب نقصان ثمن السلعة في عادة التجار', 'كل ما لم يعجب المشتري', 'ما ذكره البائع فقط', 'ما ظهر بعد سنة'], ['wat volgens handelaren de prijs verlaagt', 'alles wat de koper niet bevalt', 'alleen wat de verkoper noemde', 'wat na een jaar blijkt']], answer: 0, explain: ['كما في الإطار ص ١٧.', 'Zoals in het kader op p. 17.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ١٦ و٢٠.', 'Oefeningen van het boek op p. 16 en 20. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
