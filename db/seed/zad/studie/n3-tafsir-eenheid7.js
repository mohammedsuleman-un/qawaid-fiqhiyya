// Hoofdstukkaart bij التفسير (٣), eenheid 7: سورة البلد (lessen 18–19, boek p. 69–77).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. De woorden van
// Abū Bakr tegen zijn vader (via Ibn Isḥāq, p. 75) zijn een sīra-bericht en staan alleen in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '18',
  unit: 7,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '69–77',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة البلد', 'Soera al-Balad'],
  subtitle: ['درسان مجموعان في صفحة واحدة', 'Twee lessen samen op één pagina'],
  summary: [
    'سورة مكية يقسم الله فيها بمكة ووالد وما ولد على أن الإنسان خلق في كبد، ثم يذم المغتر بماله، ويذكر نعمه عليه في العينين واللسان والشفتين وهدايته النجدين، ثم يبين اقتحام العقبة بفك الرقاب وإطعام اليتيم والمسكين مع الإيمان والتواصي بالصبر والمرحمة، وتختم بأصحاب الميمنة وأصحاب المشأمة.',
    'Een Mekkaanse soera waarin Allah bij Mekka en bij ouder en kind zweert dat de mens in moeite geschapen is. Daarna laakt Hij wie zich door zijn geld laat misleiden, noemt Hij zijn gunsten van ogen, tong en lippen en het tonen van de twee wegen, en legt Hij uit hoe men de bergpas neemt: slaven vrijlaten en wezen en armen voeden, met geloof en elkaar aansporen tot geduld en barmhartigheid. Zij eindigt met de mensen van rechts en de mensen van links.'
  ],
  map: {
    title: ['سورة البلد في خريطة واحدة', 'Soera al-Balad in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة البلد', 'Soera al-Balad'], ['الوحدة السابعة', 'Eenheid 7']],
    nodes: [
      { label: ['القسم', 'De eed'], sub: ['الآيات ١–٤', 'vers 1–4'], page: 69, children: [['هذا البلد', 'deze stad'], ['ووالد وما ولد', 'ouder en kind'], ['خلقنا الإنسان في كبد', 'de mens geschapen in moeite']] },
      { label: ['المغتر بماله', 'Wie zich door geld laat misleiden'], sub: ['الآيات ٥–٧', 'vers 5–7'], page: 71, children: [['أهلكت مالا لبدا', 'ik heb veel geld verbruikt'], ['أيحسب أن لم يره أحد', 'denkt hij dat niemand hem ziet?']] },
      { label: ['النعم', 'De gunsten'], sub: ['الآيات ٨–١٠', 'vers 8–10'], page: 71, children: [['عينين ولسانا وشفتين', 'ogen, tong en lippen'], ['وهديناه النجدين', 'en Wij toonden hem de twee wegen']] },
      { label: ['اقتحام العقبة', 'De bergpas nemen'], sub: ['الآيات ١١–١٦', 'vers 11–16'], page: 74, children: [['فك رقبة', 'een slaaf vrijlaten'], ['إطعام في يوم ذي مسغبة', 'voeden op een dag van honger'], ['يتيم ذو مقربة ومسكين ذو متربة', 'een verwante wees en een arme in het stof']] },
      { label: ['الفريقان', 'De twee groepen'], sub: ['الآيات ١٧–٢٠', 'vers 17–20'], page: 76, children: [['تواصوا بالصبر والمرحمة', 'sporen aan tot geduld en barmhartigheid'], ['أصحاب الميمنة', 'de mensen van rechts'], ['نار مؤصدة', 'een dichtgesloten vuur']] }
    ]
  },
  points: [
    [69, 'أقسم الله بمكة لشرفها، وهي أعظم بقاع الأرض؛ و«لا» للتأكيد.', 'Allah zweert bij Mekka om haar eer; zij is de grootste plek op aarde; "lā" versterkt hier.'],
    [70, 'لا يجوز الحلف إلا بالله، لا بنبي ولا ولي ولا غيرهما.', 'Zweren mag alleen bij Allah, niet bij een profeet, een walī of iets anders.'],
    [70, 'الكبد المشقة في الدنيا، وقيل: حسن القامة والاستقامة؛ وصح عند ابن عثيمين أن الآية تشمل المعنيين.', 'Kabad is de moeite in deze wereld, of volgens anderen een rechte, evenwichtige gestalte; volgens Ibn ʿUthaymīn kan het vers beide omvatten.'],
    [71, 'سمي إنفاق المال في الشهوات إهلاكا لأنه لا ينتفع به، بل يعود عليه بالضرر.', 'Geld uitgeven aan begeerten heet vernietigen, omdat hij er niets aan heeft en het hem schaadt.'],
    [72, 'العينان واللسان والشفتان من أعظم النعم: النظر المحرم معصية، والكلام بالخير له.', 'Ogen, tong en lippen behoren tot de grootste gunsten: een verboden blik is zonde, goed spreken is in zijn voordeel.'],
    [74, 'العقبة في الأصل الطريق الوعر في الجبل، وهي هنا مثل لمجاهدة النفس والهوى والشيطان.', 'Een ʿaqaba is oorspronkelijk een moeilijk bergpad; hier een beeld voor de strijd tegen ziel, begeerte en duivel.'],
    [75, 'أعتق أبو بكر في أول الإسلام بلالا وعامر بن فهيرة وغيرهما من المستضعفين لوجه الله.', 'Abū Bakr liet in het begin van de islam Bilāl, ʿĀmir ibn Fuhayra en andere zwakken vrij, om Allahs wil.'],
    [77, 'خص الله التواصي بالصبر والمرحمة لأنهما أشرف الصفات بعد الإيمان.', 'Allah noemt het aansporen tot geduld en barmhartigheid omdat dat na het geloof de edelste eigenschappen zijn.']
  ],
  terms: [
    ['القسم', 'al-qasam', 69, 'توكيد الشيء بذكر معظم عند الحالف على وجه مخصوص، ولا يكون إلا بالله.', 'Iets bevestigen door iets te noemen dat groot is bij wie zweert, op een bepaalde wijze; alleen bij Allah.'],
    ['حل', 'ḥill', 70, 'مقيم، أو حلال لك القتال فيه يوم الفتح.', 'Woonachtig erin, of: het strijden is jou daar toegestaan bij de verovering.'],
    ['الكبد', 'al-kabad', 70, 'التعب والمشقة؛ وأصله الشدة، ويأتي بمعنى الاستقامة.', 'Moeite en zwoegen; oorspronkelijk hardheid, ook rechtheid.'],
    ['لبدا', 'lubadan', 71, 'كثيرا مجتمعا.', 'Veel en opgehoopt.'],
    ['النجدين', 'an-najdayn', 71, 'طريق الخير وطريق الشر.', 'De weg van het goede en de weg van het kwade.'],
    ['العقبة', 'al-ʿaqaba', 74, 'الطريق الوعر في الجبل؛ وقيل: جبل في جهنم.', 'Een moeilijk bergpad; volgens anderen een berg in de Hel.'],
    ['الاقتحام', 'al-iqtiḥām', 74, 'الدخول في الأمر الشديد.', 'Binnengaan in iets zwaars.'],
    ['مسغبة', 'masghaba', 75, 'مجاعة شديدة.', 'Hevige honger.'],
    ['متربة', 'matraba', 75, 'من ترب إذا افتقر؛ المسكين اللاصق بالتراب من الفقر.', 'Van tariba, arm worden: de arme die van armoede aan het stof kleeft.'],
    ['الميمنة', 'al-maymana', 76, 'اليمين والبركة؛ أصحاب اليمين.', 'Rechts en zegen; de mensen van rechts.'],
    ['مؤصدة', 'muʾṣada', 76, 'مطبقة مغلقة؛ أوصد الباب: أغلقه.', 'Dichtgesloten; awṣada l-bāb: de deur sluiten.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['طرق اقتحام العقبة', 'Hoe men de bergpas neemt'],
      intro: ['كما فسرها الكتاب في الآيات ١٣–١٧.', 'Zoals het boek vers 13–17 uitlegt.'],
      nodes: [
        [75, 'فك رقبة', 'Een slaaf vrijlaten', 'وفداء الأسرى', 'en gevangenen vrijkopen'],
        [75, 'إطعام في يوم ذي مسغبة', 'Voeden op een dag van honger', 'يتيما ذا مقربة', 'een verwante wees'],
        [75, 'أو مسكينا ذا متربة', 'Of een arme in het stof', '', ''],
        [76, 'ثم كان من الذين آمنوا', 'En dan behoren tot de gelovigen', 'وتواصوا بالصبر وبالمرحمة', 'die elkaar aansporen tot geduld en barmhartigheid']
      ]
    },
    {
      type: 'cards',
      title: ['أنواع الصبر', 'Soorten geduld'],
      intro: ['في قوله ﴿وتواصوا بالصبر﴾.', 'Bij "en zij sporen elkaar aan tot geduld".'],
      nodes: [
        [76, 'على طاعة الله', 'In gehoorzaamheid aan Allah', '', ''],
        [76, 'عن معصية الله', 'Tegenover zonden', '', ''],
        [76, 'على أقدار الله المؤلمة', 'Bij pijnlijke beschikkingen', '', '']
      ]
    }
  ],
  sections: [
    [72, 'اغترار الإنسان', 'De misleiding van de mens', 'ينسى الإنسان حقيقته ويغتر بما أعطاه الله من قوة، فيعمل كأنه لا يحاسب، فيطغى ويبطش؛ وهذه صفة من خلا قلبه من الإيمان.', 'De mens vergeet wat hij werkelijk is, laat zich misleiden door de kracht die Allah hem gaf en handelt alsof hij niet afgerekend wordt; dan wordt hij overmoedig en gewelddadig. Zo is wie geen geloof in zijn hart heeft.'],
    [76, 'اليمن والشام', 'Jemen en ash-Shām', 'كانت العرب تتشاءم بجهة الشمال، فأبطل الإسلام ذلك بالدعاء للشام واليمن بالبركة.', 'De Arabieren zagen onheil in de noordelijke kant; de islam weerlegde dat met de smeekbede om zegen voor ash-Shām en Jemen.'],
    [77, '﴿ثم كان من الذين آمنوا﴾', '"En dan behoren tot de gelovigen"', 'لم يقل: ثم كان مؤمنا؛ لأن الانتساب إلى جماعة المؤمنين أدل على الثبات، والصفة إذا كثر حاملوها قويت.', 'Er staat niet "en dan gelovig zijn": behoren tot de groep van gelovigen wijst meer op standvastigheid, en een eigenschap die velen dragen wordt sterker.'],
    [77, 'الصبر والمرحمة', 'Geduld en barmhartigheid', 'الصبر ملاك الأعمال الصالحة، والمرحمة ملاك صلاح المجتمع: ﴿رحماء بينهم﴾.', 'Geduld is de kern van alle goede daden, barmhartigheid de kern van een goede gemeenschap: "barmhartig onder elkaar".']
  ],
  keycards: [
    ['bewijs', 70, 'لا حلف إلا بالله', 'Alleen zweren bij Allah', ['القسم تعظيم لا يكون إلا لله', 'قال ﷺ: من حلف بغير الله فقد كفر أو أشرك'], ['een eed is verheerlijking, die alleen Allah toekomt', 'de Profeet ﷺ zei: wie bij iets anders dan Allah zweert, is ongelovig of kent deelgenoten toe']],
    ['opsomming', 75, 'من أعتقهم أبو بكر', 'Wie Abū Bakr vrijliet', ['بلال', 'عامر بن فهيرة', 'أم عبيس', 'زنيرة', 'النهدية وابنتها', 'جارية بني مؤمل'], ['Bilāl', 'ʿĀmir ibn Fuhayra', 'Umm ʿUbays', 'Zinnīra', 'an-Nahdiyya en haar dochter', 'het slavinnetje van Banū Muʾammal']]
  ],
  hadith: [
    { text: 'من حلف بغير الله فقد كفر أو أشرك', takhrij: 'رواه الترمذي وقال: حديث حسن', takhrijNl: 'at-Tirmidhī, die hem ḥasan noemde', nl: 'Wie bij iets anders dan Allah zweert, is ongelovig of kent deelgenoten toe', pages: [70] },
    { text: 'من أعتق رقبة مؤمنة أعتق الله بكل عضو منها عضوا منه من النار حتى الفرج بالفرج', takhrij: 'في الصحيحين', takhrijNl: 'in de twee Ṣaḥīḥ-verzamelingen', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie een gelovige slaaf vrijlaat, die bevrijdt Allah voor elk lichaamsdeel daarvan een lichaamsdeel van hem van het Vuur, zelfs het geslachtsdeel voor het geslachtsdeel', pages: [75] },
    { text: 'اللهم بارك لنا في شامنا وفي يمننا', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', note: 'ذكره الكتاب في إبطال التشاؤم بجهة الشمال.', nlNote: 'Genoemd als weerlegging van het onheil zien in de noordelijke kant.', nl: 'O Allah, zegen ons in onze Shām en in onze Jemen', pages: [76] }
  ],
  persons: [
    ['at-tirmidhi', 'takhrij', [70], 'روى حديث الحلف بغير الله وحسنه.', 'Overleverde de hadith over zweren bij iets anders dan Allah en noemde hem ḥasan.'],
    ['ibn-uthaymin', 'text', [70], 'رأى أن الآية تشمل معنيي الكبد.', 'Vond dat het vers beide betekenissen van kabad omvat.'],
    ['abu-hurayra', 'text', [75], 'روى فضل عتق الرقبة المؤمنة.', 'Overleverde de deugd van het vrijlaten van een gelovige slaaf.'],
    ['abu-bakr-as-siddiq', 'text', [75], 'أعتق المستضعفين في أول الإسلام وقال: إنما أريد ما أريد لله.', 'Liet in het begin van de islam zwakken vrij en zei: ik wil alleen wat ik voor Allah wil.'],
    ['bilal-ibn-rabah', 'text', [75], 'ممن أعتقهم أبو بكر.', 'Een van hen die Abū Bakr vrijliet.'],
    ['amir-ibn-fuhayra', 'text', [75], 'ممن أعتقهم أبو بكر.', 'Een van hen die Abū Bakr vrijliet.'],
    ['umar-ibn-al-khattab', 'text', [75], 'كان يعذب جارية بني مؤمل قبل إسلامه.', 'Martelde het slavinnetje van Banū Muʾammal vóór zijn eigen islam.'],
    ['ibn-ishaq', 'text', [75], 'نقل قول أبي قحافة لابنه أبي بكر.', 'Overleverde wat Abū Quḥāfa tegen zijn zoon Abū Bakr zei.'],
    ['abu-quhafa', 'text', [75], 'عاتب ابنه على عتق الضعفاء.', 'Verweet zijn zoon dat hij zwakke slaven vrijliet.'],
    ['al-bukhari', 'takhrij', [76], 'روى الدعاء للشام واليمن.', 'Overleverde de smeekbede voor ash-Shām en Jemen.']
  ],
  review: [
    ['خلق الإنسان في كبد، فلا راحة تامة في الدنيا.', 'De mens is in moeite geschapen; volledige rust is er in deze wereld niet.'],
    ['لا يجوز الحلف إلا بالله.', 'Zweren mag alleen bij Allah.'],
    ['من نعم الله العينان واللسان والشفتان وبيان طريقي الخير والشر.', 'Tot Allahs gunsten horen ogen, tong en lippen en het tonen van de wegen van goed en kwaad.'],
    ['اقتحام العقبة بفك الرقاب وإطعام اليتيم والمسكين مع الإيمان.', 'De bergpas neemt men door slaven vrij te laten en wezen en armen te voeden, met geloof.'],
    ['أصحاب الميمنة أهل الإيمان والصبر والمرحمة.', 'De mensen van rechts zijn de mensen van geloof, geduld en barmhartigheid.']
  ],
  quiz: [
    { type: 'mc', page: 69, q: ['ما المراد بالبلد في ﴿لا أقسم بهذا البلد﴾؟', 'Welke stad is bedoeld in "Ik zweer bij deze stad"?'], options: [['مكة', 'المدينة', 'بيت المقدس', 'الطائف'], ['Mekka', 'Medina', 'Jeruzalem', 'aṭ-Ṭāʾif']], answer: 0, explain: ['لشرفها وهي أعظم بقاع الأرض.', 'Om haar eer; zij is de grootste plek op aarde.'] },
    { type: 'mc', page: 70, q: ['ما معنى الكبد؟', 'Wat betekent kabad?'], options: [['التعب والمشقة', 'الراحة', 'الغنى', 'الفرح'], ['moeite en zwoegen', 'rust', 'rijkdom', 'vreugde']], answer: 0, explain: ['وأصله الشدة.', 'Oorspronkelijk hardheid.'] },
    { type: 'mc', page: 71, q: ['ما النجدان؟', 'Wat zijn de twee wegen (an-najdān)?'], options: [['طريق الخير وطريق الشر', 'الجبلان', 'الليل والنهار', 'الدنيا والآخرة'], ['de weg van goed en van kwaad', 'twee bergen', 'nacht en dag', 'deze wereld en het hiernamaals']], answer: 0, explain: ['وهديناه طريقي الخير والشر.', 'Wij toonden hem de wegen van goed en kwaad.'] },
    { type: 'tf', page: 70, q: ['يجوز الحلف بالنبي ﷺ لعظم قدره.', 'Zweren bij de Profeet ﷺ mag, vanwege zijn hoge rang.'], answer: 1, explain: ['لا يجوز الحلف إلا بالله.', 'Zweren mag alleen bij Allah.'] },
    { type: 'mc', page: 75, q: ['ما معنى ﴿مسكينا ذا متربة﴾؟', 'Wat betekent "een arme in het stof"?'], options: [['فقير لصق بالتراب من شدة الفقر', 'مسكين يعمل في التراب', 'مسكين قريب', 'مسكين مسافر'], ['een arme die van armoede aan het stof kleeft', 'een arme die met aarde werkt', 'een verwante arme', 'een arme reiziger']], answer: 0, explain: ['من ترب إذا افتقر.', 'Van tariba: arm worden.'] },
    { type: 'tf', page: 77, q: ['قال الله ﴿ثم كان من الذين آمنوا﴾ لأن الانتساب إلى جماعة المؤمنين أدل على الثبات.', 'Allah zegt "behoren tot de gelovigen" omdat behoren tot de groep meer op standvastigheid wijst.'], answer: 0, explain: ['كما ذكر الكتاب.', 'Zoals het boek uitlegt.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٧٣ و٧٧.', 'Oefeningen van het boek op p. 73 en 77. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
