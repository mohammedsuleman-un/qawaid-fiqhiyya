// Hoofdstukkaart bij التفسير (٤), eenheid 5: سورة البينة (les 6–7, boek p. 27–33).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '6',
  unit: 5,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '27–33',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة البينة', 'Soera al-Bayyina'],
  subtitle: ['سورة مدنية؛ درسان', 'Medinensisch; twee lessen'],
  summary: [
    'تذكر السورة أن أهل الكتاب والمشركين لم يكونوا منفكين عن كفرهم حتى تأتيهم البينة: رسول من الله يتلو صحفا مطهرة، وأنهم ما أمروا إلا بعبادة الله مخلصين وإقامة الصلاة وإيتاء الزكاة، ثم تقابل بين شر البرية وخير البرية وجزاء كل منهما.',
    'De soera zegt dat de mensen van het Boek en de polytheïsten niet ophielden met hun ongeloof tot het duidelijke bewijs tot hen kwam: een boodschapper van Allah die gereinigde bladen reciteert. Zij kregen alleen opdracht Allah oprecht te aanbidden, het gebed te verrichten en de zakāt te geven. Daarna zet zij de slechtste en de beste schepselen en hun vergelding tegenover elkaar.'
  ],
  map: {
    title: ['سورة البينة في خريطة واحدة', 'Soera al-Bayyina in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب في درسين.', 'De delen van de soera zoals het boek ze in twee lessen uitlegt.'],
    root: [['سورة البينة', 'Soera al-Bayyina'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['حال الكفار قبل البينة', 'De ongelovigen vóór het bewijs'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 28, children: [['أهل الكتاب والمشركون', 'mensen van het Boek en polytheïsten'], ['البينة: القرآن ومحمد ﷺ', 'het bewijs: de Koran en Muḥammad ﷺ']] },
      { label: ['التفرق بعد البينة', 'Verdeeldheid na het bewijs'], sub: ['الآية ٤', 'vers 4'], page: 28, children: [['اختلفوا بعد ما جاءتهم البينات', 'zij verschilden nadat de bewijzen kwamen']] },
      { label: ['ما أمروا به', 'Waartoe zij opdracht kregen'], sub: ['الآية ٥', 'vers 5'], page: 28, children: [['الإخلاص والحنيفية', 'oprechtheid en ḥanīf-zijn'], ['الصلاة والزكاة', 'gebed en zakāt'], ['دين القيمة', 'de rechte religie']] },
      { label: ['شر البرية وخير البرية', 'De slechtste en de beste schepselen'], sub: ['الآيات ٦–٨', 'vers 6–8'], page: 30, children: [['نار جهنم خالدين', 'het vuur van Jahannam, eeuwig'], ['جنات عدن', 'tuinen van verblijf'], ['رضي الله عنهم ورضوا عنه', 'Allah is tevreden met hen en zij met Hem']] }
    ]
  },
  points: [
    [27, 'أمر الله نبيه ﷺ أن يقرأ هذه السورة على أبي بن كعب وسماه له، فبكى أبي.', 'Allah droeg Zijn Profeet ﷺ op deze soera aan Ubayy ibn Kaʿb voor te dragen en noemde hem bij naam; Ubayy huilde.'],
    [28, 'البينة كل ما يبين الحق، وهي هنا القرآن ومحمد ﷺ.', 'Al-bayyina is alles wat de waarheid duidelijk maakt; hier de Koran en Muḥammad ﷺ.'],
    [28, 'أمروا بعبادة الله وحده ثم بالتزام شرائع الإسلام، وأعظمها بعد التوحيد الصلاة.', 'Zij kregen opdracht Allah alleen te aanbidden en daarna de wetten van de islam na te leven, waarvan het gebed na het tawḥīd het voornaamste is.'],
    [30, 'سميت جهنم لبعد قعرها وسوادها، من الجهمة وهي ظلمة الليل، وقيل: أعجمية عربت.', 'Jahannam heet zo om haar diepte en zwartheid, van juhma: de duisternis van de nacht; ook gezegd: een niet-Arabisch woord dat Arabisch werd.'],
    [31, '﴿ذلك لمن خشي ربه﴾: هذا لمن عبد الله كأنه يراه، فإن لم يكن يراه فإنه يراه، وهي مرتبة الإحسان.', '"Dat is voor wie zijn Heer vreest": voor wie Allah aanbidt alsof hij Hem ziet, en als hij Hem niet ziet, Hij ziet hem; dat is de rang van iḥsān.'],
    [32, 'استحق الكفار وصف شر البرية لأنهم ضلوا بعد أن جاءتهم أسباب الهداية.', 'De ongelovigen verdienen "de slechtste schepselen" omdat zij dwaalden nadat de middelen van leiding tot hen kwamen.']
  ],
  terms: [
    ['منفكين', 'munfakkīn', 28, 'منتهين تاركين لكفرهم.', 'Ophoudend met en afstand nemend van hun ongeloof.'],
    ['البينة', 'al-bayyina', 28, 'كل ما يبين الحق؛ القرآن ومحمد ﷺ.', 'Alles wat de waarheid duidelijk maakt: de Koran en Muḥammad ﷺ.'],
    ['قيمة', 'qayyima', 28, 'مستقيمة عادلة لا خطأ فيها.', 'Recht en rechtvaardig, zonder fout.'],
    ['حنفاء', 'ḥunafāʾ', 28, 'مائلين عن كل دين إلا الإسلام.', 'Afgekeerd van elke religie behalve de islam.'],
    ['البرية', 'al-bariyya', 30, 'الخليقة.', 'De schepselen.'],
    ['عدن', 'ʿadn', 31, 'الإقامة؛ عدن بالمكان: أقام به.', 'Verblijf; ʿadana bi-l-makān: hij verbleef er.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['خير البرية طبقات أربع', 'De beste schepselen in vier lagen'],
      intro: ['كما في آية النساء التي ذكرها الكتاب ص ٣١.', 'Zoals in het vers uit an-Nisāʾ dat het boek op p. 31 noemt.'],
      nodes: [
        [31, 'النبيون', 'De profeten', 'أعلى الطبقات', 'de hoogste laag'],
        [31, 'الصديقون', 'De waarachtigen', 'على رأسهم أبو بكر بالإجماع', 'met Abū Bakr aan het hoofd, bij consensus'],
        [31, 'الشهداء', 'De martelaren', '', ''],
        [31, 'الصالحون', 'De rechtschapenen', '', '']
      ]
    }
  ],
  sections: [
    [32, 'أكمل النعيم', 'Het volmaaktste genot', 'يحل الله رضوانه على عباده المؤمنين فلا يسخط عليهم بعده أبدا، ويرونه بأبصارهم كما يرون القمر ليلة البدر.', 'Allah laat Zijn welbehagen neerdalen op Zijn gelovige dienaren en wordt daarna nooit meer boos op hen; zij zien Hem met hun ogen zoals zij de maan zien in de nacht van volle maan.'],
    [32, 'لماذا كانوا شر البرية', 'Waarom zij de slechtste schepselen zijn', 'كان لأهل الكتاب كتاب فيه هدى ونور فانحرفوا إلى عبادة الصليب، وكان المشركون على الحنيفية فأدخلوا فيها عبادة غير الله.', 'De mensen van het Boek hadden een boek met leiding en licht en weken af naar aanbidding van het kruis; de polytheïsten waren op de ḥanīfiyya en brachten de aanbidding van anderen dan Allah erin.']
  ],
  keycards: [
    ['onderscheid', 32, 'الرضا بالله والرضا عن الله', 'Tevreden met Allah en tevreden over Allah', ['الرضا بالله: أن ترضى به ربا ومدبرا ومنعما', 'الرضا عن الله: أن ترضى بما يقضيه ويقدره'], ['tevreden met Allah: Hem aanvaarden als Heer, Bestuurder en Weldoener', 'tevreden over Allah: tevreden zijn met wat Hij beslist en voorbeschikt']],
    ['opsomming', 28, 'ما أمروا به في الآية الخامسة', 'Waartoe zij in vers 5 opdracht kregen', ['عبادة الله مخلصين له الدين', 'حنفاء', 'إقامة الصلاة', 'إيتاء الزكاة'], ['Allah aanbidden met oprechte religie', 'als ḥanīf', 'het gebed verrichten', 'de zakāt geven']]
  ],
  hadith: [
    { text: 'إن الله أمرني أن أقرأ عليك ﴿لم يكن الذين كفروا﴾', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', note: 'قاله لأبي بن كعب، فقال: وسماني؟ قال: «نعم»، فبكى.', nlNote: 'Gezegd tegen Ubayy ibn Kaʿb; hij vroeg: heeft Hij mij bij naam genoemd? "Ja." Toen huilde hij.', nl: 'Allah heeft mij opgedragen jou "Lam yakuni lladhīna kafarū" voor te dragen', pages: [27] }
  ],
  persons: [
    ['anas-ibn-malik', 'text', [27], 'روى حديث قراءة السورة على أبي.', 'Overleverde de hadith over het voordragen van de soera aan Ubayy.'],
    ['ubayy-ibn-kab', 'text', [27], 'قرأ عليه النبي ﷺ السورة بأمر الله فبكى.', 'De Profeet ﷺ droeg hem de soera voor op bevel van Allah, en hij huilde.'],
    ['al-bukhari', 'takhrij', [27], 'روى الحديث.', 'Overleverde de hadith.'],
    ['muslim', 'takhrij', [27], 'روى الحديث.', 'Overleverde de hadith.'],
    ['ahmad-ibn-hanbal', 'takhrij', [27], 'روى في المسند قول أبي في الفرح بفضل الله.', 'Overleverde in de Musnad wat Ubayy zei over blijdschap met Allahs gunst.'],
    ['al-arnaut', 'takhrij', [27], 'صحح رواية المسند.', 'Verklaarde de overlevering in de Musnad ṣaḥīḥ.'],
    ['abu-bakr-as-siddiq', 'text', [31], 'رأس الصديقين وأفضل الأمة بعد نبيها ﷺ بالإجماع.', 'Het hoofd van de waarachtigen en de beste van de umma na haar Profeet ﷺ, bij consensus.']
  ],
  review: [
    ['البينة هي القرآن ومحمد ﷺ.', 'Het duidelijke bewijs is de Koran en Muḥammad ﷺ.'],
    ['أمر الناس بالإخلاص والصلاة والزكاة، وذلك دين القيمة.', 'De mensen kregen opdracht tot oprechtheid, gebed en zakāt: dat is de rechte religie.'],
    ['خير البرية أربع طبقات: النبيون والصديقون والشهداء والصالحون.', 'De beste schepselen zijn vier lagen: profeten, waarachtigen, martelaren en rechtschapenen.'],
    ['أكمل نعيم أهل الجنة رضوان الله ورؤيته.', 'Het volmaaktste genot van de mensen van het Paradijs is Allahs welbehagen en Hem zien.']
  ],
  quiz: [
    { type: 'mc', page: 27, q: ['على من أمر النبي ﷺ أن يقرأ هذه السورة؟', 'Aan wie moest de Profeet ﷺ deze soera voordragen?'], options: [['أبي بن كعب', 'عبد الله بن مسعود', 'معاذ بن جبل', 'زيد بن ثابت'], ['Ubayy ibn Kaʿb', 'ʿAbd Allāh ibn Masʿūd', 'Muʿādh ibn Jabal', 'Zayd ibn Thābit']], answer: 0, explain: ['كما في حديث أنس المتفق عليه.', 'Zoals in de hadith van Anas.'] },
    { type: 'mc', page: 28, q: ['ما معنى ﴿منفكين﴾؟', 'Wat betekent munfakkīn?'], options: [['منتهين تاركين لكفرهم', 'متفرقين', 'مؤمنين', 'مسافرين'], ['ophoudend met hun ongeloof', 'verdeeld', 'gelovig', 'op reis']], answer: 0, explain: ['أي لم يكونوا منتهين عن كفرهم حتى تأتيهم البينة.', 'Zij hielden niet op met hun ongeloof tot het bewijs kwam.'] },
    { type: 'tf', page: 31, q: ['على رأس الصديقين أبو بكر بإجماع.', 'Abū Bakr staat bij consensus aan het hoofd van de waarachtigen.'], answer: 0, explain: ['هو أفضل الأمة بعد نبيها ﷺ بالإجماع.', 'Hij is de beste van de umma na haar Profeet ﷺ, bij consensus.'] },
    { type: 'mc', page: 32, q: ['ما الرضا عن الله؟', 'Wat is ar-riḍā ʿan Allāh?'], options: [['الرضا بما يقضيه ويقدره', 'الرضا به ربا ومدبرا', 'رضا الله عن العبد', 'ترك الدعاء'], ['tevreden zijn met wat Hij beslist en voorbeschikt', 'Hem aanvaarden als Heer en Bestuurder', 'Allahs tevredenheid met de dienaar', 'ophouden met smeken']], answer: 0, explain: ['أما الرضا بالله فهو الرضا به ربا ومدبرا ومنعما.', 'Tevreden mét Allah is Hem aanvaarden als Heer, Bestuurder en Weldoener.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٢٩ و٣٣.', 'Oefeningen van het boek op p. 29 en 33. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
