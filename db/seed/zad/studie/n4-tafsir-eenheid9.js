// Hoofdstukkaart bij التفسير (٤), eenheid 9: سورة التكاثر (les 11, boek p. 46–48).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. Het verhaal van de bedoeïen (p. 48) staat er zonder bron
// en is alleen als uitleg opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '11',
  unit: 9,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '46–48',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة التكاثر', 'Soera at-Takāthur'],
  subtitle: ['سورة مكية، ثماني آيات', 'Mekkaans, acht verzen'],
  summary: [
    'تذم السورة الانشغال بالتكاثر في المال والولد والجاه حتى يأتي الموت، وتتوعد بعلم العاقبة، وتذكر أن الناس سيرون الجحيم عين اليقين، ثم يسألون يومئذ عن النعيم.',
    'De soera keurt het wedijveren in bezit, kinderen en aanzien af dat mensen bezighoudt tot de dood komt. Zij dreigt dat zij de afloop zullen kennen, zegt dat zij de Hel met zekerheid zullen zien, en dat zij die Dag gevraagd worden naar de gunsten.'
  ],
  map: {
    title: ['سورة التكاثر في خريطة واحدة', 'Soera at-Takāthur in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة التكاثر', 'Soera at-Takāthur'], ['الوحدة التاسعة', 'Eenheid 9']],
    nodes: [
      { label: ['الإلهاء بالتكاثر', 'Afgeleid door wedijver'], sub: ['الآيتان ١–٢', 'vers 1–2'], page: 47, children: [['المال والأولاد والجاه', 'bezit, kinderen en aanzien'], ['حتى زرتم المقابر', 'tot jullie de graven bezochten']] },
      { label: ['الوعيد بعد الوعيد', 'Dreiging na dreiging'], sub: ['الآيات ٣–٧', 'vers 3–7'], page: 47, children: [['كلا سوف تعلمون', 'nee, jullie zullen het weten'], ['علم اليقين', 'zekere kennis'], ['عين اليقين', 'het zien met zekerheid']] },
      { label: ['السؤال عن النعيم', 'Gevraagd naar de gunsten'], sub: ['الآية ٨', 'vers 8'], page: 47, children: [['الصحة والأمن والرزق', 'gezondheid, veiligheid, levensonderhoud'], ['وشكرها', 'en de dank ervoor']] }
    ]
  },
  points: [
    [47, '﴿ألهاكم التكاثر﴾: شغلكم حب الدنيا والتفاخر بكثرة المال والولد والجاه عن طلب الآخرة.', '"Het wedijveren heeft jullie afgeleid": liefde voor de wereld en opscheppen over veel bezit, kinderen en aanzien hielden jullie af van het hiernamaals.'],
    [47, 'كرر الله الردع ﴿كلا سوف تعلمون﴾ تغليظا وتأكيدا للوعيد.', 'Allah herhaalt "nee, jullie zullen het weten" om de dreiging te verzwaren en te bevestigen.'],
    [47, 'لو علمتم علم اليقين لرأيتم الجحيم بعين قلوبكم قبل الموت، ثم ترونها بعد ذلك عين اليقين معاينة.', 'Hadden jullie zekere kennis, dan zagen jullie de Hel met het oog van je hart vóór de dood; daarna zien jullie haar met eigen ogen.'],
    [48, 'سماهم الله زائرين لا مقيمين، فالقبر ممر إلى دار القرار.', 'Allah noemt hen bezoekers, geen blijvers: het graf is een doorgang naar het blijvende verblijf.'],
    [48, 'قول العامة «انتقل إلى مثواه الأخير» عن القبر خطأ، فالقبر أول منازل الآخرة لا آخرها.', 'Wat gewone mensen zeggen, "hij ging naar zijn laatste rustplaats" voor het graf, klopt niet: het graf is de eerste halte van het hiernamaals, niet de laatste.']
  ],
  terms: [
    ['التكاثر', 'at-takāthur', 47, 'التفاخر بكثرة المال والولد والجاه والعشيرة.', 'Opscheppen over veel bezit, kinderen, aanzien en stam.'],
    ['زرتم المقابر', 'zurtumu l-maqābir', 47, 'متم ودفنتم فيها.', 'Jullie stierven en werden erin begraven.'],
    ['علم اليقين', 'ʿilm al-yaqīn', 47, 'العلم الذي لا شك فيه.', 'Kennis zonder twijfel.'],
    ['عين اليقين', 'ʿayn al-yaqīn', 47, 'الرؤية والمعاينة التي هي اليقين نفسه.', 'Het zien met eigen ogen, de zekerheid zelf.'],
    ['النعيم', 'an-naʿīm', 47, 'كل ما يتنعم به في الدنيا من صحة وأمن ورزق.', 'Alles wat men in de wereld geniet: gezondheid, veiligheid, levensonderhoud.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['السؤال عن النعيم', 'De vraag naar de gunsten'],
      intro: ['كما في الصفحة ٤٨.', 'Zoals op p. 48.'],
      columns: [['الغرض من السؤال', 'Doel van de vraag']],
      rows: [
        { label: ['المؤمن', 'De gelovige'], cells: [['تذكير بنعمة الله ليفرح ويعلم أن من أنعم عليه في الدنيا ينعم عليه في الآخرة', 'herinnering aan Allahs gunst, zodat hij blij is en weet dat Wie hem hier begunstigde, hem ook daar begunstigt']] },
        { label: ['الكافر', 'De ongelovige'], cells: [['توبيخ وتنديم', 'berisping en spijt']] }
      ],
      page: 48
    }
  ],
  sections: [
    [48, 'الزائر ليس بمقيم', 'Een bezoeker blijft niet', 'يذكر أن أعرابيا سمع قارئا يقرأ ﴿ألهاكم التكاثر حتى زرتم المقابر﴾ فقال: والله ما الزائر بمقيم، والله لنبعثن.', 'Men vertelt dat een bedoeïen iemand "tot jullie de graven bezochten" hoorde reciteren en zei: bij Allah, een bezoeker blijft niet; bij Allah, wij zullen opgewekt worden.']
  ],
  keycards: [
    ['onderscheid', 47, 'علم اليقين وعين اليقين', 'Zekere kennis en zeker zien', ['علم اليقين: علم لا شك فيه، يرى به القلب', 'عين اليقين: المعاينة بالبصر'], ['ʿilm al-yaqīn: kennis zonder twijfel, waarmee het hart ziet', 'ʿayn al-yaqīn: het zien met eigen ogen']]
  ],
  hadith: [
    { text: 'يقول ابن آدم: مالي! مالي! قال: وهل لك يا ابن آدم من مالك إلا ما أكلت فأفنيت، أو لبست فأبليت، أو تصدقت فأمضيت؟', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن الشخير', narratorNl: 'ʿAbd Allāh ibn ash-Shikhkhīr', note: 'قاله النبي ﷺ وهو يقرأ ﴿ألهاكم التكاثر﴾، رواه مطرف عن أبيه.', nlNote: 'De Profeet ﷺ zei dit terwijl hij "Alhākumu t-takāthur" reciteerde; Muṭarrif overleverde het van zijn vader.', nl: 'De mens zegt: mijn bezit, mijn bezit! Heb jij, mens, van je bezit iets anders dan wat je at en opmaakte, droeg en versleet, of als liefdadigheid gaf en zo vooruitzond?', pages: [46] },
    { text: 'إن أول ما يسأل عنه العبد يوم القيامة من النعيم أن يقال له: ألم نصح لك جسمك، ونروك من الماء البارد؟', takhrij: 'أخرجه الترمذي وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Het eerste waarnaar de dienaar op de Opstandingsdag gevraagd wordt van de gunsten is dat men hem zegt: hebben Wij je lichaam niet gezond gemaakt en je gelaafd met koel water?', pages: [47] }
  ],
  persons: [
    ['mutarrif-ibn-abdallah', 'text', [46], 'روى عن أبيه حديث «مالي مالي».', 'Overleverde van zijn vader de hadith "mijn bezit, mijn bezit".'],
    ['abdallah-ibn-ash-shikhkhir', 'text', [46], 'أتى النبي ﷺ وهو يقرأ ﴿ألهاكم التكاثر﴾.', 'Kwam bij de Profeet ﷺ terwijl die "Alhākumu t-takāthur" reciteerde.'],
    ['muslim', 'takhrij', [46], 'روى حديث «مالي مالي».', 'Overleverde de hadith "mijn bezit, mijn bezit".'],
    ['abu-hurayra', 'text', [47], 'روى حديث أول ما يسأل عنه العبد من النعيم.', 'Overleverde de hadith over de eerste vraag naar de gunsten.'],
    ['at-tirmidhi', 'takhrij', [47], 'روى الحديث.', 'Overleverde de hadith.'],
    ['al-albani', 'takhrij', [47], 'صحح الحديث.', 'Verklaarde de hadith ṣaḥīḥ.']
  ],
  review: [
    ['التكاثر في الدنيا يلهي عن الآخرة حتى يأتي الموت.', 'Wedijveren in wereldse zaken leidt af van het hiernamaals tot de dood komt.'],
    ['القبر أول منازل الآخرة لا آخرها.', 'Het graf is de eerste halte van het hiernamaals, niet de laatste.'],
    ['يسأل المؤمن والكافر عن النعيم، ولكل غرض.', 'Gelovige en ongelovige worden beiden naar de gunsten gevraagd, elk met een ander doel.']
  ],
  quiz: [
    { type: 'mc', page: 47, q: ['ما معنى ﴿حتى زرتم المقابر﴾؟', 'Wat betekent "tot jullie de graven bezochten"?'], options: [['حتى متم ودفنتم', 'حتى زرتم قبور آبائكم', 'حتى بنيتم القبور', 'حتى عددتم الموتى'], ['tot jullie stierven en begraven werden', 'tot jullie de graven van je vaders bezochten', 'tot jullie graven bouwden', 'tot jullie de doden telden']], answer: 0, explain: ['أي صرتم من أهلها ودفنتم فيها.', 'Jullie werden haar bewoners en werden erin begraven.'] },
    { type: 'tf', page: 48, q: ['يصح أن يقال عن القبر: «مثواه الأخير».', 'Het is juist het graf "de laatste rustplaats" te noemen.'], answer: 1, explain: ['القبر أول منازل الآخرة لا آخرها.', 'Het graf is de eerste halte van het hiernamaals.'] },
    { type: 'mc', page: 47, q: ['ما أول ما يسأل عنه العبد من النعيم؟', 'Waarnaar wordt de dienaar het eerst gevraagd van de gunsten?'], options: [['صحة الجسم والري من الماء البارد', 'المال والولد', 'العلم', 'الجاه'], ['een gezond lichaam en koel water', 'bezit en kinderen', 'kennis', 'aanzien']], answer: 0, explain: ['كما في حديث الترمذي.', 'Zoals in de hadith bij at-Tirmidhī.'] },
    { type: 'mc', page: 46, q: ['ما الذي يبقى للإنسان من ماله في حديث مسلم؟', 'Wat heeft de mens volgens de hadith bij Muslim echt van zijn bezit?'], options: [['ما أكل وما لبس وما تصدق', 'ما ادخر', 'ما ورثه أولاده', 'ما بناه'], ['wat hij at, droeg en als liefdadigheid gaf', 'wat hij spaarde', 'wat zijn kinderen erfden', 'wat hij bouwde']], answer: 0, explain: ['والصدقة هي التي يمضيها فتبقى له.', 'Liefdadigheid zendt hij vooruit; die blijft van hem.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٤٨.', 'Oefening van het boek op p. 48. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
