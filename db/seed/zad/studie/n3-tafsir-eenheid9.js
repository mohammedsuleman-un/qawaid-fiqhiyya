// Hoofdstukkaart bij التفسير (٣), eenheid 9: سورة الليل (lessen 22–23, boek p. 86–91).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. Het gezegde van
// "sommige salaf" (p. 87) staat zonder naam en alleen als uitleg in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '22',
  unit: 9,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '86–91',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الليل', 'Soera al-Layl'],
  subtitle: ['درسان مجموعان في صفحة واحدة', 'Twee lessen samen op één pagina'],
  summary: [
    'سورة مكية يقسم الله فيها بالليل والنهار وخلق الذكر والأنثى على أن سعي الناس مختلف، فمن أعطى واتقى وصدق بالحسنى ييسر لليسرى، ومن بخل واستغنى وكذب ييسر للعسرى، ثم تبين أن على الله الهدى، وتنذر بنار تلظى لا يصلاها إلا الأشقى، ويجنبها الأتقى الذي ينفق ماله ابتغاء وجه ربه.',
    'Een Mekkaanse soera waarin Allah bij de nacht, de dag en de schepping van man en vrouw zweert dat het streven van de mensen verschilt: wie geeft, godvrezend is en het beste gelooft, krijgt het makkelijke; wie gierig is, zich onafhankelijk voelt en loochent, krijgt het moeilijke. Daarna: aan Allah is het de leiding te geven; een waarschuwing voor een laaiend vuur waarin alleen de ellendigste brandt, en waarvan de godvrezendste wordt weggehouden, die zijn geld geeft om het aangezicht van zijn Heer.'
  ],
  map: {
    title: ['سورة الليل في خريطة واحدة', 'Soera al-Layl in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الليل', 'Soera al-Layl'], ['الوحدة التاسعة', 'Eenheid 9']],
    nodes: [
      { label: ['القسم', 'De eed'], sub: ['الآيات ١–٤', 'vers 1–4'], page: 86, children: [['الليل إذا يغشى', 'de nacht die bedekt'], ['النهار إذا تجلى', 'de dag die verschijnt'], ['إن سعيكم لشتى', 'jullie streven verschilt']] },
      { label: ['الفريقان', 'De twee groepen'], sub: ['الآيات ٥–١١', 'vers 5–11'], page: 87, children: [['أعطى واتقى وصدق', 'gaf, vreesde en geloofde'], ['بخل واستغنى وكذب', 'was gierig, onafhankelijk en loochende'], ['اليسرى والعسرى', 'het makkelijke en het moeilijke']] },
      { label: ['على الله الهدى', 'Aan Allah is de leiding'], sub: ['الآيات ١٢–١٣', 'vers 12–13'], page: 89, children: [['بيان الهدى', 'de leiding tonen'], ['للآخرة والأولى', 'het hiernamaals en de eerste wereld']] },
      { label: ['الإنذار والجزاء', 'Waarschuwing en vergelding'], sub: ['الآيات ١٤–٢١', 'vers 14–21'], page: 89, children: [['نار تلظى', 'een laaiend vuur'], ['الأشقى', 'de ellendigste'], ['الأتقى ولسوف يرضى', 'de godvrezendste, en hij zal tevreden zijn']] }
    ]
  },
  points: [
    [86, 'أقسم الله بنفسه الذي خلق الذكر والأنثى.', 'Allah zweert bij Zichzelf, die man en vrouw schiep.'],
    [87, 'سعي الناس مختلف: خير وشر، للآخرة وللدنيا.', 'Het streven van de mensen verschilt: goed en kwaad, voor het hiernamaals en voor deze wereld.'],
    [87, 'من اتقى الله ييسره للخير في الدين والدنيا، فأيسر الناس عيشا من اتقى الله.', 'Wie Allah vreest, maakt Hij het goede makkelijk in godsdienst en wereld; wie Allah vreest heeft het makkelijkste leven.'],
    [87, 'من بخل واستغنى ييسر لطريق الشر والعسر حيثما كان.', 'Wie gierig is en zich onafhankelijk voelt, krijgt de weg van kwaad en moeite makkelijk, waar hij ook is.'],
    [88, 'الناس في كل زمان ومكان فريقان مهما اختلفت أشكالهم وألوانهم.', 'De mensen zijn in elke tijd en plaats twee groepen, hoe verschillend hun vorm en kleur ook.'],
    [89, 'أوجب الله على نفسه بيان الهدى للخلق، فبين الحلال والحرام وسائر الشرائع.', 'Allah verplichtte Zichzelf de schepselen de leiding te tonen: Hij maakte halal, haram en de andere wetten duidelijk.'],
    [90, 'نزلت آيات الأتقى في أبي بكر عند غير واحد من المفسرين، ولا يمنع ذلك دخول غيره في عمومها.', 'Volgens meer dan één uitlegger daalden de verzen over de godvrezendste neer over Abū Bakr; dat sluit niet uit dat anderen eronder vallen.'],
    [90, 'العقل لا يستقل بمعرفة الهدى والحلال والحرام إلا بالوحي.', 'Het verstand kan leiding, halal en haram niet zelfstandig kennen, alleen via de openbaring.']
  ],
  terms: [
    ['يغشى', 'yaghshā', 86, 'يغطي الخلق بظلامه.', 'Bedekt de schepping met zijn duisternis.'],
    ['تجلى', 'tajallā', 86, 'ظهر بضيائه.', 'Verscheen met zijn licht.'],
    ['شتى', 'shattā', 87, 'مختلف متفرق.', 'Verschillend en uiteenlopend.'],
    ['الحسنى', 'al-ḥusnā', 87, 'الجزاء، والتوحيد، وما أخبر الله به ورسوله.', 'De vergelding, het tawḥīd, en wat Allah en zijn Boodschapper meedeelden.'],
    ['اليسرى', 'al-yusrā', 87, 'كل خير في الدين والدنيا.', 'Alle goed in godsdienst en wereld.'],
    ['العسرى', 'al-ʿusrā', 87, 'طريق الشر والعسر.', 'De weg van kwaad en moeite.'],
    ['تردى', 'taraddā', 87, 'هلك ومات.', 'Kwam om en stierf.'],
    ['تلظى', 'talaẓẓā', 89, 'تتوهج وتشتعل.', 'Laait op en vlamt.'],
    ['يتزكى', 'yatazakkā', 90, 'يطهر نفسه وماله بالإنفاق في الطاعة.', 'Reinigt zichzelf en zijn bezit door in gehoorzaamheid te geven.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الفريقان في السورة', 'De twee groepen in de soera'],
      intro: ['كما في الآيات ٥–١٠ و١٥–٢١.', 'Zoals in vers 5–10 en 15–21.'],
      columns: [['صفاتهم', 'Eigenschappen'], ['جزاؤهم', 'Vergelding']],
      rows: [
        { label: ['أهل اليسرى', 'Het makkelijke'], cells: [['أعطى واتقى وصدق بالحسنى، ينفق ماله يتزكى', 'gaf, vreesde, geloofde het beste, geeft zijn geld om zich te reinigen'], ['ييسر لليسرى، ويجنب النار، ولسوف يرضى', 'krijgt het makkelijke, blijft weg van het Vuur, en zal tevreden zijn']] },
        { label: ['أهل العسرى', 'Het moeilijke'], cells: [['بخل واستغنى وكذب بالحسنى وتولى', 'was gierig, onafhankelijk, loochende en wendde zich af'], ['ييسر للعسرى، ويصلى نارا تلظى، ولا يغني عنه ماله', 'krijgt het moeilijke, brandt in een laaiend vuur, en zijn geld baat niet']] }
      ],
      page: 87
    },
    {
      type: 'cards',
      title: ['لماذا قدمت الآخرة على الأولى؟', 'Waarom het hiernamaals vóór de eerste wereld?'],
      intro: ['في ﴿وإن لنا للآخرة والأولى﴾.', 'In "aan Ons behoren het hiernamaals en de eerste wereld".'],
      nodes: [
        [91, 'سبب معنوي', 'Inhoudelijk', 'الآخرة أهم، وفيها يظهر ملك الله تاما', 'het hiernamaals is belangrijker; daar verschijnt Allahs heerschappij volledig'],
        [91, 'سبب لفظي', 'Taalkundig', 'مراعاة الفواصل في السورة كلها', 'het rijm van de versuitgangen in de hele soera']
      ]
    }
  ],
  sections: [
    [87, 'لا ينفع المال', 'Geld baat niet', 'لا يغني عنه ماله الذي أطغاه إذا هلك، ولا يصحبه إلا عمله الصالح.', 'Het geld dat hem overmoedig maakte baat hem niet als hij sterft; alleen zijn goede daden gaan met hem mee.'],
    [88, 'التقوى والتيسير', 'Godsvrucht en gemak', 'كلما كان العبد أتقى لله كانت أموره أيسر: ﴿ومن يتق الله يجعل له من أمره يسرا﴾، وكلما بعد عن الله تعسرت.', 'Hoe godvrezender de dienaar, hoe makkelijker zijn zaken: "wie Allah vreest, Hij maakt zijn zaak makkelijk"; hoe verder van Allah, hoe moeilijker.'],
    [89, 'أهون أهل النار عذابا', 'De lichtste straf in het Vuur', 'رجل توضع في أخمص قدميه جمرتان يغلي منهما دماغه.', 'Een man onder wiens voetzolen twee gloeiende kolen worden gelegd, waardoor zijn hersenen koken.'],
    [90, 'الإخلاص في الإنفاق', 'Oprechtheid bij het geven', 'لا ينفق مكافأة لنعمة سابقة، بل ابتغاء وجه ربه الأعلى.', 'Hij geeft niet als tegenprestatie voor een eerdere gunst, maar om het aangezicht van zijn Heer, de Allerhoogste.']
  ],
  keycards: [
    ['onderscheid', 90, 'نوعا الهداية', 'Twee soorten leiding', ['هداية التوفيق: لا يملكها إلا الله', 'هداية الإرشاد والدلالة: من الله، ومن الرسل والعلماء'], ['leiding door welslagen: alleen Allah heeft die', 'leiding door wijzen en uitleggen: van Allah, en ook van boodschappers en geleerden']]
  ],
  hadith: [
    { text: 'إن أهون أهل النار عذابا يوم القيامة رجل توضع في أخمص قدميه جمرتان يغلي منهما دماغه', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'النعمان بن بشير', narratorNl: 'an-Nuʿmān ibn Bashīr', nl: 'De mens met de lichtste straf in het Vuur op de Opstandingsdag is een man onder wiens voetzolen twee gloeiende kolen worden gelegd, waardoor zijn hersenen koken', pages: [89] }
  ],
  persons: [
    ['an-numan-ibn-bashir', 'text', [89], 'روى حديث أهون أهل النار عذابا.', 'Overleverde de hadith over de lichtste straf in het Vuur.'],
    ['al-bukhari', 'takhrij', [89], 'روى حديث النعمان.', 'Overleverde de hadith van an-Nuʿmān.'],
    ['abu-bakr-as-siddiq', 'text', [90], 'نزلت فيه آيات الأتقى عند غير واحد من المفسرين.', 'Volgens meer dan één uitlegger daalden de verzen over de godvrezendste over hem neer.']
  ],
  review: [
    ['سعي الناس شتى، وهم فريقان.', 'Het streven van de mensen verschilt; zij zijn twee groepen.'],
    ['من أعطى واتقى وصدق ييسر لليسرى.', 'Wie geeft, vreest en gelooft, krijgt het makkelijke.'],
    ['من بخل واستغنى وكذب ييسر للعسرى ولا يغني عنه ماله.', 'Wie gierig is, zich onafhankelijk voelt en loochent, krijgt het moeilijke; zijn geld baat niet.'],
    ['على الله بيان الهدى، والهداية نوعان.', 'Aan Allah is het de leiding te tonen; leiding is van twee soorten.'],
    ['الأتقى ينفق ماله ابتغاء وجه ربه، ولسوف يرضى.', 'De godvrezendste geeft zijn geld om het aangezicht van zijn Heer, en hij zal tevreden zijn.']
  ],
  quiz: [
    { type: 'mc', page: 87, q: ['ما معنى ﴿إن سعيكم لشتى﴾؟', 'Wat betekent "jullie streven is uiteenlopend"?'], options: [['أعمالكم مختلفة', 'أعمالكم قليلة', 'أعمالكم متشابهة', 'أعمالكم ضائعة'], ['jullie daden verschillen', 'jullie daden zijn weinig', 'jullie daden lijken op elkaar', 'jullie daden gaan verloren']], answer: 0, explain: ['خير وشر، للآخرة وللدنيا.', 'Goed en kwaad, voor het hiernamaals en voor deze wereld.'] },
    { type: 'mc', page: 89, q: ['ما معنى ﴿تلظى﴾؟', 'Wat betekent talaẓẓā?'], options: [['تتوهج وتشتعل', 'تنطفئ', 'تبرد', 'تختفي'], ['laait op en vlamt', 'dooft', 'koelt af', 'verdwijnt']], answer: 0, explain: ['نار تلظى: تتوقد.', 'Een laaiend vuur.'] },
    { type: 'tf', page: 90, q: ['نزول آيات الأتقى في أبي بكر يمنع دخول غيره فيها.', 'Dat de verzen over de godvrezendste over Abū Bakr neerdaalden, sluit anderen uit.'], answer: 1, explain: ['لا يمنع ذلك دخول غيره في عمومها.', 'Dat sluit niet uit dat anderen onder de algemene betekenis vallen.'] },
    { type: 'mc', page: 90, q: ['أي نوعي الهداية لا يملكه إلا الله؟', 'Welke soort leiding heeft alleen Allah?'], options: [['هداية التوفيق', 'هداية الإرشاد', 'هداية الدلالة', 'هداية العلماء'], ['leiding door welslagen', 'leiding door wijzen', 'leiding door uitleggen', 'leiding door geleerden']], answer: 0, explain: ['هداية الإرشاد تكون من الله ومن الرسل والعلماء.', 'Leiding door wijzen komt van Allah en ook van boodschappers en geleerden.'] },
    { type: 'mc', page: 91, q: ['ما السبب المعنوي لتقديم الآخرة على الأولى؟', 'Wat is de inhoudelijke reden dat het hiernamaals vóór de eerste wereld staat?'], options: [['الآخرة أهم ويظهر فيها ملك الله تاما', 'لأنها أقصر', 'لأنها أقرب', 'لا سبب له'], ['het hiernamaals is belangrijker en Allahs heerschappij verschijnt daar volledig', 'omdat het korter is', 'omdat het dichterbij is', 'er is geen reden']], answer: 0, explain: ['والسبب اللفظي مراعاة الفواصل.', 'De taalkundige reden is het rijm van de versuitgangen.'] },
    { type: 'tf', page: 88, q: ['كلما كان العبد أتقى لله كانت أموره أيسر.', 'Hoe godvrezender de dienaar, hoe makkelijker zijn zaken.'], answer: 0, explain: ['﴿ومن يتق الله يجعل له من أمره يسرا﴾.', '"Wie Allah vreest, Hij maakt zijn zaak makkelijk."'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٨٨ و٩١.', 'Oefeningen van het boek op p. 88 en 91. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
