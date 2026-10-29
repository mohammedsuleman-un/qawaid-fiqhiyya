// Hoofdstukkaart bij اللغة العربية (٤), eenheid 5: النداء (lessen 14–16, boek p. 51–57).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-arabic/leesnotities.md);
// voorbeelden zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-arabic',
  chapter: '14',
  unit: 5,
  source: {
    label: ['كتاب اللغة العربية (٤)، سلسلة زاد العلمية', 'Arabische taal (4), Zad-reeks'],
    pages: '51–57',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_ArabicLanguage/page/n{p}/mode/1up'
  },
  title: ['النداء', 'De vocatief'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'النداء طلب الإقبال بيا أو إحدى أخواتها، وحكم المنادى النصب دائما. أحرفه: يا، أيا، هيا، أي، الهمزة، ووا للندبة. والمنادى نوعان: معرب واجب النصب، وهو المضاف والشبيه بالمضاف والنكرة غير المقصودة، ومبني على ما يرفع به في محل نصب، وهو المفرد العلم والنكرة المقصودة. ويجوز حذف حرف النداء إذا فهم.',
    'Nidāʾ is iemand oproepen zich toe te wenden met yā of een verwant partikel; de munādā staat altijd (in vorm of plaats) in de accusatief. Partikels: yā, ayā, hayā, ay, de hamza, en wā voor de klaagroep. De munādā is óf verbogen en verplicht accusatief (geannexeerd, lijkend op geannexeerd, onbepaald en niet bedoeld) óf gebouwd op zijn nominatiefteken op de plaats van een accusatief (eigennaam, onbepaald en wel bedoeld). Het partikel mag wegvallen als het begrepen wordt.'
  ],
  map: {
    title: ['النداء في خريطة واحدة', 'De vocatief in één kaart'],
    intro: ['كما في الخلاصة ص ٥٧.', 'Zoals in de samenvatting op p. 57.'],
    root: [['النداء', 'Nidāʾ'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['أحرف النداء', 'Partikels'], sub: ['ص ٥٢', 'p. 52'], page: 52, children: [['أي والهمزة للقريب', 'ay en hamza: dichtbij'], ['أيا وهيا للبعيد', 'ayā en hayā: veraf'], ['وا للندبة', 'wā: klaagroep'], ['يا لكل نداء', 'yā: algemeen']] },
      { label: ['المعرب واجب النصب', 'Verbogen, verplicht accusatief'], sub: ['ص ٥٣–٥٥', 'p. 53–55'], page: 53, children: [['المضاف', 'geannexeerd'], ['الشبيه بالمضاف', 'lijkend op geannexeerd'], ['النكرة غير المقصودة', 'onbepaald, niet bedoeld']] },
      { label: ['المبني في محل نصب', 'Gebouwd, plaats accusatief'], sub: ['ص ٥٥–٥٦', 'p. 55–56'], page: 55, children: [['المفرد العلم', 'eigennaam'], ['النكرة المقصودة', 'onbepaald, wel bedoeld']] },
      { label: ['حذف حرف النداء', 'Weglating van het partikel'], sub: ['ص ٥٦', 'p. 56'], page: 56, children: [['﴿يوسف أعرض عن هذا﴾', '"Yūsuf, laat dit rusten"'], ['أيها وأيتها مع أل', 'ayyuhā en ayyatuhā bij al']] }
    ]
  },
  points: [
    [52, 'يا أعم أحرف النداء، تستعمل في كل نداء، وفي الندبة إذا أمن اللبس: ﴿يا أيها الناس اعبدوا ربكم﴾ [البقرة: 21].', 'Yā is het algemeenste partikel, bij elke oproep en bij de klaagroep als er geen verwarring is: "o mensen, aanbid jullie Heer" (2:21).'],
    [53, 'المنادى المضاف منصوب: ﴿يا صاحبي السجن﴾ [يوسف: 39]، ﴿يا قومنا أجيبوا داعي الله﴾ [الأحقاف: 31].', 'De geannexeerde munādā staat in de accusatief: "o mijn twee medegevangenen" (12:39), "o ons volk, geef gehoor aan wie tot Allah roept" (46:31).'],
    [54, 'في «آمسلمي الحي» مسلمي منادى منصوب بالياء لأنه جمع مذكر سالم، وحذفت النون للإضافة.', 'In "ā-muslimī l-ḥayy" staat muslimī in de accusatief met yāʾ (mannelijk klankmeervoud); de nūn viel weg door de iḍāfa.'],
    [54, 'الشبيه بالمضاف ما اتصل به شيء من تمام معناه، ويكون غالبا اسم فاعل أو مفعول أو صيغة مبالغة: يا طالبا علما نافعا اجتهد.', 'Wat op geannexeerd lijkt, is verbonden met iets dat zijn betekenis aanvult, meestal een actief of passief deelwoord: "o jij die nuttige kennis zoekt, doe je best".'],
    [54, 'النكرة غير المقصودة لا يراد بها معين، وتبقى نكرة بعد النداء: يا مسلما، يجب أن تكون مثالا حسنا.', 'De onbepaalde, niet bedoelde munādā richt zich niet tot een bepaalde persoon en blijft onbepaald: "o moslim (wie ook), wees een goed voorbeeld".'],
    [55, 'المفرد العلم مبني على ما يرفع به في محل نصب: ﴿يا نوح اهبط بسلام﴾ [هود: 48]، أي زيدان، أعليون.', 'De eigennaam is gebouwd op zijn nominatiefteken op de plaats van een accusatief: "o Nūḥ, daal af in vrede" (11:48), "ay Zaydān", "a-ʿAliyyūn".'],
    [56, 'النكرة المقصودة يراد بها معين فتتعرف بالنداء: ﴿يا نار كوني بردا وسلاما على إبراهيم﴾ [الأنبياء: 69].', 'De onbepaalde maar bedoelde munādā richt zich tot een bepaald iets en wordt bepaald door de oproep: "o vuur, wees koelte en vrede voor Ibrāhīm" (21:69).'],
    [56, 'يجوز حذف حرف النداء إذا فهم: ﴿ربنا لا تؤاخذنا إن نسينا أو أخطأنا﴾ [البقرة: 286]، والمنادى المحلى بأل يسبق بأيها للمذكر وأيتها للمؤنث.', 'Het partikel mag wegvallen als het begrepen wordt: "onze Heer, straf ons niet als wij vergeten of fouten maken" (2:286); bij al komt ayyuhā (mannelijk) of ayyatuhā (vrouwelijk).']
  ],
  terms: [
    ['النداء', 'an-nidāʾ', 52, 'طلب الإقبال بيا أو إحدى أخواتها.', 'Iemand oproepen zich toe te wenden met yā of een verwant partikel.'],
    ['الندبة', 'an-nudba', 52, 'نداء المتفجع عليه أو المتوجع منه بوا، مثل: وا إسلاماه.', 'Klaagroep met wā, zoals "wā islāmāh".'],
    ['النكرة المقصودة', 'an-nakira al-maqṣūda', 56, 'نكرة يراد بها معين فتتعرف بالنداء.', 'Een onbepaald woord dat een bepaald iets bedoelt en door de oproep bepaald wordt.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أنواع المنادى', 'Soorten munādā'],
      intro: ['كما في الصفحات ٥٣–٥٦.', 'Zoals op p. 53–56.'],
      columns: [['الحكم', 'Regel'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['المضاف', 'Geannexeerd'], cells: [['معرب منصوب', 'verbogen, accusatief'], ['يا أهل الدار', 'yā ahla d-dār']] },
        { label: ['الشبيه بالمضاف', 'Lijkend op geannexeerd'], cells: [['معرب منصوب', 'verbogen, accusatief'], ['يا واعظا غيرك ابدأ بنفسك', 'o jij die anderen vermaant, begin bij jezelf']] },
        { label: ['النكرة غير المقصودة', 'Onbepaald, niet bedoeld'], cells: [['معرب منصوب', 'verbogen, accusatief'], ['هيا امرأة التزمي بحجابك', 'hayā mraʾatan, houd je aan je hidjab']] },
        { label: ['المفرد العلم', 'Eigennaam'], cells: [['مبني على الضم أو ما ينوب عنه في محل نصب', 'gebouwd op ḍamma of wat ervoor in de plaats komt'], ['﴿يا إبراهيم أعرض عن هذا﴾', '"o Ibrāhīm, laat dit rusten" (11:76)']] },
        { label: ['النكرة المقصودة', 'Onbepaald, wel bedoeld'], cells: [['مبني على ما يرفع به في محل نصب', 'gebouwd op zijn nominatiefteken'], ['يا مسلمون حافظوا على الصلاة', 'yā muslimūna, houd het gebed in stand']] }
      ],
      page: 53
    }
  ],
  sections: [
    [54, 'إعراب المنادى المضاف', 'Analyse van de geannexeerde munādā', 'يا أهل الدار: يا حرف نداء، أهل منادى منصوب وعلامة نصبه الفتحة وهو مضاف، الدار مضاف إليه مجرور.', '"Yā ahla d-dār": yā is het partikel, ahl de munādā in de accusatief met fatḥa, geannexeerd; ad-dār is muḍāf ilayh in de genitief.'],
    [55, 'إعراب المنادى المبني', 'Analyse van de gebouwde munādā', 'علي: منادى مبني على الضم في محل نصب، زيدان: مبني على الألف، عليون: مبني على الواو، وكلها في محل نصب.', 'ʿAlī: gebouwd op ḍamma op de plaats van een accusatief; Zaydān: gebouwd op alif; ʿAliyyūn: gebouwd op wāw; alle op de plaats van een accusatief.']
  ],
  keycards: [
    ['opsomming', 52, 'أحرف النداء', 'Partikels van de vocatief', ['يا', 'أيا، هيا', 'أي، الهمزة', 'وا'], ['yā', 'ayā, hayā', 'ay, de hamza', 'wā']],
    ['onderscheid', 53, 'المعرب والمبني من المنادى', 'Verbogen en gebouwde munādā', ['المعرب واجب النصب: المضاف، الشبيه بالمضاف، النكرة غير المقصودة', 'المبني في محل نصب: المفرد العلم، النكرة المقصودة'], ['verbogen, verplicht accusatief: geannexeerd, lijkend op geannexeerd, onbepaald en niet bedoeld', 'gebouwd op de plaats van een accusatief: eigennaam, onbepaald en wel bedoeld']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['النداء طلب الإقبال، والمنادى منصوب لفظا أو محلا.', 'Nidāʾ is oproepen; de munādā staat in vorm of plaats in de accusatief.'],
    ['أحرفه: يا وأيا وهيا وأي والهمزة ووا.', 'Partikels: yā, ayā, hayā, ay, hamza en wā.'],
    ['المعرب: المضاف والشبيه به والنكرة غير المقصودة.', 'Verbogen: geannexeerd, lijkend daarop, onbepaald niet bedoeld.'],
    ['المبني: المفرد العلم والنكرة المقصودة.', 'Gebouwd: eigennaam en onbepaald bedoeld.']
  ],
  quiz: [
    { type: 'mc', page: 55, q: ['ما إعراب «نوح» في ﴿يا نوح اهبط بسلام﴾؟', 'Wat is de analyse van Nūḥ in "o Nūḥ, daal af in vrede" (11:48)?'], options: [['منادى مبني على الضم في محل نصب', 'منادى منصوب بالفتحة', 'فاعل مرفوع', 'مبتدأ'], ['munādā gebouwd op ḍamma op de plaats van een accusatief', 'munādā in de accusatief met fatḥa', 'fāʿil, nominatief', 'mubtadaʾ']], answer: 0, explain: ['لأنه مفرد علم.', 'Want het is een eigennaam.'] },
    { type: 'mc', page: 52, q: ['أي حرف نداء يستعمل للبعيد؟', 'Welk partikel is voor iemand die ver weg is?'], options: [['أيا', 'أي', 'الهمزة', 'وا'], ['ayā', 'ay', 'de hamza', 'wā']], answer: 0, explain: ['أيا وهيا للبعيد.', 'Ayā en hayā zijn voor veraf.'] },
    { type: 'tf', page: 54, q: ['في «يا مسلما يجب أن تكون مثالا حسنا» المنادى نكرة مقصودة.', 'In "yā musliman, wees een goed voorbeeld" is de munādā onbepaald en wel bedoeld.'], answer: 1, explain: ['هو نكرة غير مقصودة، ولذا نصب.', 'Het is onbepaald en niet bedoeld; daarom accusatief.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٥٧.', 'Oefening van het boek op p. 57. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
