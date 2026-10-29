// Hoofdstukkaart bij الفقه (٤), eenheid 7: الأيمان والنذور (lessen 32–34, boek p. 74–82).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
// De hadith «لا نذر في غضب…» (p. 81) staat alleen in de tekst: het boek noemt de isnad zelf zwak.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '32',
  unit: 7,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '74–82',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['الأيمان والنذور', 'Eden en geloften'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'اليمين توكيد المحلوف عليه بذكر اسم الله أو صفة من صفاته، وهي مشروعة وتجري عليها الأحكام الخمسة، وأقسامها لغو وغموس ومنعقدة. كفارتها إطعام عشرة مساكين أو كسوتهم أو تحرير رقبة، فمن لم يجد صام ثلاثة أيام، ولا يجوز الحلف بغير الله. والنذر إلزام المكلف نفسه لله شيئا غير واجب، وهو مكروه في الأصل، وأقسامه خمسة.',
    'Een eed bevestigt iets met de naam van Allah of een van Zijn eigenschappen; hij is legitiem, de vijf oordelen gelden ervoor, en er zijn drie soorten: loze, meinedige en bindende eed. De boete is tien armen voeden of kleden of een slaaf vrijlaten, en anders drie dagen vasten; zweren bij iets anders dan Allah mag niet. Een gelofte is jezelf voor Allah iets niet-verplichts opleggen; zij is in beginsel afgeraden en kent vijf soorten.'
  ],
  map: {
    title: ['الأيمان والنذور في خريطة واحدة', 'Eden en geloften in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['الأيمان والنذور', 'Eden en geloften'], ['الوحدة السابعة', 'Eenheid 7']],
    nodes: [
      { label: ['اليمين وأقسامها', 'De eed en zijn soorten'], sub: ['الدرس ٣٢', 'les 32'], page: 74, children: [['اللغو', 'loos'], ['الغموس', 'meinedig'], ['المنعقدة', 'bindend']] },
      { label: ['كفارة اليمين', 'Boete voor de eed'], sub: ['الدرس ٣٣', 'les 33'], page: 76, children: [['إطعام أو كسوة أو عتق', 'voeden, kleden of vrijlaten'], ['صيام ثلاثة أيام', 'drie dagen vasten'], ['حكم الحنث', 'het breken van de eed']] },
      { label: ['الحلف بغير الله', 'Zweren bij iets anders dan Allah'], sub: ['الدرس ٣٣', 'les 33'], page: 78, children: [['من حلف بغير الله فقد أشرك', 'wie bij iets anders zweert, pleegt shirk']] },
      { label: ['النذور', 'Geloften'], sub: ['الدرس ٣٤', 'les 34'], page: 80, children: [['الحكم والألفاظ', 'oordeel en woorden'], ['الأقسام الخمسة', 'de vijf soorten']] }
    ]
  },
  points: [
    [74, 'قال ابن قدامة: أجمعت الأمة على مشروعية اليمين وثبوت أحكامها.', 'Ibn Qudāma: de umma is het eens over de legitimiteit van de eed en zijn regels.'],
    [74, 'تجب اليمين لإثبات حق أو دفع ظلم عند القاضي، وتستحب للإصلاح، وتكره في البيع والشراء بلا حاجة، وتحرم كاذبة.', 'Een eed is verplicht om een recht vast te stellen of onrecht af te weren bij de rechter, aanbevolen voor verzoening, afgeraden bij handel zonder reden en verboden als hij leugenachtig is.'],
    [75, 'اليمين الغموس من الكبائر، تجب التوبة منها ورد الحقوق إلى أهلها، وسميت غموسا لأنها تغمس صاحبها في الإثم ثم في النار.', 'De meinedige eed is een grote zonde; berouw en teruggave van rechten zijn verplicht; hij heet ghamūs omdat hij zijn eigenaar in de zonde en dan in het vuur dompelt.'],
    [76, 'لا يجوز الصيام في الكفارة مع القدرة على الإطعام أو الكسوة أو العتق، والأحوط أن يصومها متتابعة.', 'Vasten als boete mag niet als men kan voeden, kleden of vrijlaten; het voorzichtigste is de drie dagen achter elkaar te vasten.'],
    [76, 'من حرم على نفسه ما أحل الله ثم أراد الرجوع لزمته كفارة يمين.', 'Wie zichzelf iets toegestaans verbiedt en daarop terugkomt, moet de boete voor een eed betalen.'],
    [77, 'يجوز تقديم الكفارة على الحنث فتسمى تحلة، وتأخيرها فتسمى كفارة.', 'De boete mag vóór het breken (taḥilla) of erna (kaffāra) betaald worden.'],
    [78, 'قال ابن مسعود: لأن أحلف بالله كاذبا أحب إلي من أن أحلف بغيره صادقا، وعلله شيخ الإسلام بأن حسنة التوحيد أعظم من حسنة الصدق.', 'Ibn Masʿūd: liever zweer ik liegend bij Allah dan eerlijk bij iets anders; Shaykh al-Islām: de deugd van tawḥīd is groter dan die van eerlijkheid.'],
    [82, 'النذر عبادة لا يجوز صرفها لغير الله، ومن نذر لمخلوق لم ينعقد نذره ولا يجوز الوفاء به بالإجماع.', 'De gelofte is aanbidding en mag niet aan een ander dan Allah gericht worden; een gelofte aan een schepsel komt niet tot stand en mag volgens consensus niet nagekomen worden.']
  ],
  terms: [
    ['اليمين', 'al-yamīn', 74, 'لغة: القسم والقوة والبركة. واصطلاحا: توكيد المحلوف عليه بذكر اسم الله أو صفة من صفاته.', 'Taal: eed, kracht en zegen. Vakterm: iets bevestigen met de naam van Allah of een van Zijn eigenschappen.'],
    ['الحنث', 'al-ḥinth', 75, 'الرجوع عن اليمين وعدم الوفاء بها.', 'Terugkomen van de eed en hem niet nakomen.'],
    ['الكفارة', 'al-kaffāra', 76, 'ما يخرجه الحانث من إطعام أو كسوة أو عتق أو صيام تكفيرا لحنثه.', 'Wat wie zijn eed breekt uitgeeft aan voeden, kleden, vrijlaten of vasten.'],
    ['اليمين المنعقدة', 'al-yamīn al-munʿaqida', 77, 'أن يقصد الحالف عقدها على أمر مستقبل، فلا تكون مجرد لفظ يجري على اللسان.', 'De zwerende bedoelt zich te binden aan iets toekomstigs; het is niet slechts een woord op de tong.'],
    ['النذر', 'an-nadhr', 80, 'لغة: الإيجاب. واصطلاحا: إلزام مكلف نفسه لله شيئا غير واجب بأصل الشرع.', 'Taal: verplichten. Vakterm: dat een verantwoordelijke zichzelf voor Allah iets oplegt wat niet uit de sharīʿa verplicht is.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أقسام اليمين', 'Soorten eed'],
      intro: ['كما في المخطط ص ٧٥.', 'Zoals in het schema op p. 75.'],
      columns: [['الوصف', 'Beschrijving'], ['الحكم', 'Gevolg']],
      rows: [
        { label: ['اللغو', 'Loos'], cells: [['الحلف بلا قصد كلا والله وبلى والله', 'zweren zonder bedoeling, zoals "nee, bij Allah"'], ['لا كفارة ولا مؤاخذة', 'geen boete en geen verantwoording']] },
        { label: ['الغموس', 'Meinedig'], cells: [['الحلف على أمر ماض كاذبا متعمدا', 'opzettelijk liegend zweren over het verleden'], ['كبيرة تجب منها التوبة ورد الحقوق', 'grote zonde; berouw en teruggave verplicht']] },
        { label: ['المنعقدة', 'Bindend'], cells: [['الحلف على أمر مستقبل قاصدا', 'met bedoeling zweren over iets toekomstigs'], ['يجب الوفاء أو الكفارة عند الحنث', 'nakomen, of boete bij breken']] }
      ],
      page: 75
    },
    {
      type: 'cards',
      title: ['أقسام النذر', 'Soorten gelofte'],
      intro: ['كما في المخطط ص ٨١.', 'Zoals in het schema op p. 81.'],
      nodes: [
        [81, 'نذر الطاعة', 'Gelofte van gehoorzaamheid', 'يجب الوفاء به', 'moet worden nagekomen'],
        [81, 'نذر المعصية', 'Gelofte van ongehoorzaamheid', 'لا يوفى به، وعليه كفارة يمين', 'niet nakomen; boete voor een eed'],
        [81, 'النذر المطلق', 'Absolute gelofte', 'عليه كفارة يمين', 'boete voor een eed'],
        [81, 'نذر اللجاج والغضب', 'Gelofte van koppigheid en woede', 'يخير بين الوفاء وكفارة اليمين', 'keuze tussen nakomen en boete'],
        [82, 'النذر المباح', 'Toegestane gelofte', 'يخير بين الفعل وكفارة اليمين', 'keuze tussen doen en boete']
      ]
    }
  ],
  sections: [
    [77, 'حكم الحنث في اليمين', 'Het breken van de eed', 'يسن الحنث إذا كان خيرا، كمن حلف على فعل مكروه أو ترك مستحب، ويجب إذا حلف على ترك واجب أو فعل محرم كقطيعة الرحم، ويباح إذا حلف على فعل مباح أو تركه، وفي كل ذلك يكفر عن يمينه.', 'Breken is sunna als het beter is, zoals bij een eed iets afkeurenswaardigs te doen; verplicht bij een eed iets verplichts na te laten of iets verbodens te doen, zoals familiebanden verbreken; toegestaan bij iets toegestaans; in alle gevallen volgt de boete.'],
    [78, 'صور الحلف بغير الله', 'Voorbeelden van zweren bij iets anders dan Allah', 'كقوله: والنبي، وحياتك، وحياة أمي، والنعمة، وتربة فلان، والعشرة، والعيش والملح، وشرفي، والأمانة، والكعبة؛ وكل ذلك لا يجوز.', 'Zoals "bij de Profeet", "bij je leven", "bij het leven van mijn moeder", "bij de genade", "bij het graf van die-en-die", "bij brood en zout", "bij mijn eer", "bij het vertrouwen", "bij de Kaʿba"; dat alles is niet toegestaan.'],
    [80, 'ألفاظ النذر', 'Woorden van de gelofte', 'يشترط للنذر الملزم أن يكون بلفظ منطوق، ولا تكفي النية، وكل ما دل على الالتزام فهو نذر، كلله علي كذا، وما لا يحتمل الالتزام لا يكون نذرا إلا بالنية، وتعليقه بالمشيئة لا يلزمه شيئا.', 'Een bindende gelofte moet uitgesproken worden; intentie volstaat niet. Alles wat verplichting aanduidt is een gelofte, zoals "het is voor Allah op mij"; wat dat niet kan dragen alleen met intentie; "als Allah wil" erbij verplicht tot niets.'],
    [81, 'نذر اللجاج والغضب', 'Gelofte van koppigheid en woede', 'هو أشبه باليمين، كقوله: إن كلمت فلانا فعلي حج؛ ويخير بين الوفاء وكفارة اليمين. وأورد الكتاب حديث «لا نذر في غضب، وكفارته كفارة يمين» من رواية النسائي، وذكر أن إسناده ضعيف.', 'Zij lijkt op een eed, zoals "als ik met die-en-die spreek, rust op mij een hadj"; men kiest tussen nakomen en boete. Het boek noemt de hadith "geen gelofte in woede; de boete is die van een eed" bij an-Nasāʾī, en vermeldt dat de isnad zwak is.'],
    [82, 'أعاهد الله', 'Ik beloof Allah', 'إن كان العهد على طاعة فهو نذر يجب الوفاء به، وإن كان على مباح فهو يمين؛ قال شيخ الإسلام: فإذا قال: أعاهد الله أني أحج العام فهو عهد ونذر ويمين، وإن قال: لا أكلم زيدا فيمين وعهد لا نذر.', 'Gaat de belofte over gehoorzaamheid, dan is het een gelofte die nagekomen moet worden; over iets toegestaans, dan is het een eed. Shaykh al-Islām: "ik beloof Allah dit jaar de hadj te doen" is belofte, gelofte en eed; "ik spreek Zayd niet" is eed en belofte, geen gelofte.']
  ],
  keycards: [
    ['opsomming', 76, 'خصال كفارة اليمين', 'Onderdelen van de boete voor een eed', ['إطعام عشرة مساكين', 'أو كسوتهم', 'أو تحرير رقبة', 'فمن لم يجد فصيام ثلاثة أيام'], ['tien armen voeden', 'of hen kleden', 'of een slaaf vrijlaten', 'wie dat niet kan: drie dagen vasten']],
    ['bewijs', 80, 'أدلة كراهة النذر', 'Bewijzen dat de gelofte afgeraden is', ['«إنه لا يرد شيئا، وإنما يستخرج به من الشحيح»', 'فيه إلزام النفس ما لم يلزمها الشرع', 'المسلم مطلوب منه فعل الخير بلا نذر'], ['"het weert niets af; er wordt alleen iets mee uit de gierige gehaald"', 'men legt zich op wat de sharīʿa niet oplegt', 'de moslim hoort het goede te doen zonder gelofte']]
  ],
  hadith: [
    { text: 'وإني والله -إن شاء الله- لا أحلف على يمين، فأرى غيرها خيرا منها، إلا أتيت الذي هو خير، وتحللتها', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Bij Allah, als Allah wil: als ik iets zweer en iets anders beter vind, doe ik wat beter is en maak ik mij van de eed vrij', pages: [74] },
    { text: 'الكبائر: الإشراك بالله، وعقوق الوالدين، وقتل النفس، واليمين الغموس', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', nl: 'De grote zonden zijn: Allah iets toevoegen, ongehoorzaamheid aan de ouders, iemand doden en de meinedige eed', pages: [75] },
    { text: 'إذا حلفت على يمين، فرأيت غيرها خيرا منها، فكفر عن يمينك وأت الذي هو خير', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'وفي رواية للبخاري: «فأت الذي هو خير، وكفر عن يمينك».', nlNote: 'In een overlevering bij al-Bukhārī: "doe wat beter is en betaal de boete voor je eed".', nl: 'Als je iets zweert en iets anders beter vindt, betaal dan de boete voor je eed en doe wat beter is', pages: [77] },
    { text: 'من حلف بغير الله فقد أشرك', takhrij: 'أخرجه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Wie bij iets anders dan Allah zweert, heeft shirk gepleegd', pages: [78] },
    { text: 'ألا إن الله عز وجل ينهاكم أن تحلفوا بآبائكم، فمن كان حالفا فليحلف بالله أو ليصمت', takhrij: 'في الصحيحين', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', note: 'قال عمر: فوالله ما حلفت بها منذ سمعت رسول الله ﷺ نهى عنها ذاكرا ولا آثرا.', nlNote: 'ʿUmar zei: bij Allah, sindsdien heb ik er nooit meer bij gezworen, niet uit mezelf en niet als citaat.', nl: 'Allah verbiedt jullie bij jullie vaders te zweren; wie zweert, laat hem bij Allah zweren of zwijgen', pages: [78] },
    { text: 'لا تحلفوا بآبائكم ولا بأمهاتكم ولا بالأنداد، ولا تحلفوا إلا بالله، ولا تحلفوا إلا وأنتم صادقون', takhrij: 'رواه أبو داود والنسائي، وصححه الألباني', takhrijNl: 'Abū Dāwūd en an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', nl: 'Zweer niet bij jullie vaders of moeders of bij afgoden; zweer alleen bij Allah, en alleen als jullie de waarheid spreken', pages: [78] },
    { text: 'إنه لا يرد شيئا، وإنما يستخرج به من الشحيح', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', note: 'نهى عن النذر وقال ذلك.', nlNote: 'Hij verbood de gelofte en zei dit.', nl: 'Het weert niets af; er wordt alleen iets mee uit de gierige gehaald', pages: [80] },
    { text: 'من نذر أن يطيع الله فليطعه، ومن نذر أن يعصي الله فلا يعصه', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Wie belooft Allah te gehoorzamen, laat hem Hem gehoorzamen; en wie belooft Allah ongehoorzaam te zijn, laat hem dat niet doen', pages: [81] },
    { text: 'كفارة النذر كفارة اليمين', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', nl: 'De boete voor een gelofte is de boete voor een eed', pages: [81, 82] },
    { text: 'كفارة النذر إذا لم يسم كفارة يمين', takhrij: 'رواه الترمذي، وحسنه', takhrijNl: 'at-Tirmidhī; door hem ḥasan genoemd', narrator: 'عقبة بن عامر', narratorNl: 'ʿUqba ibn ʿĀmir', nl: 'De boete voor een gelofte zonder genoemd object is de boete voor een eed', pages: [81] }
  ],
  persons: [
    ['ibn-qudama', 'text', [74], 'نقل الإجماع على مشروعية اليمين.', 'Gaf de consensus over de legitimiteit van de eed.'],
    ['ibn-masud', 'text', [76, 78], 'قرأ: فصيام ثلاثة أيام متتابعة، وقال: لأن أحلف بالله كاذبا…', 'Las "drie opeenvolgende dagen vasten" en zei: liever zweer ik liegend bij Allah…'],
    ['ibn-umar', 'text', [78, 80], 'روى النهي عن الحلف بالآباء وعن النذر.', 'Overleverde het verbod bij vaders te zweren en het verbod op de gelofte.'],
    ['umar-ibn-al-khattab', 'text', [78], 'ما حلف بأبيه بعد أن سمع النهي.', 'Zwoer nooit meer bij zijn vader nadat hij het verbod hoorde.'],
    ['ibn-taymiyya', 'text', [78, 82], 'قال: حسنة التوحيد أعظم من حسنة الصدق، وفرق بين العهد والنذر واليمين.', 'Zei: de deugd van tawḥīd is groter dan die van eerlijkheid; onderscheidde belofte, gelofte en eed.'],
    ['uqba-ibn-amir', 'text', [81], 'روى حديث كفارة النذر إذا لم يسم.', 'Overleverde de hadith over de boete voor een gelofte zonder object.'],
    ['imran-ibn-husayn', 'text', [81], 'روي عنه حديث «لا نذر في غضب» بإسناد ضعيف.', 'Van hem komt "geen gelofte in woede", met zwakke isnad.'],
    ['al-albani', 'takhrij', [78, 80], 'صحح أحاديث في الأيمان والنذور.', 'Verklaarde hadith over eden en geloften authentiek.']
  ],
  review: [
    ['أقسام اليمين: لغو وغموس ومنعقدة، والكفارة في المنعقدة.', 'Eden: loos, meinedig en bindend; boete bij de bindende.'],
    ['الكفارة على التخيير بين الإطعام والكسوة والعتق، ثم الصيام.', 'De boete: keuze tussen voeden, kleden en vrijlaten, dan vasten.'],
    ['يجوز تقديم الكفارة وتأخيرها.', 'De boete mag vooraf of achteraf.'],
    ['الحلف بغير الله شرك.', 'Zweren bij iets anders dan Allah is shirk.'],
    ['النذر مكروه في الأصل، ويجب الوفاء بنذر الطاعة.', 'De gelofte is in beginsel afgeraden; een gelofte van gehoorzaamheid moet nagekomen worden.']
  ],
  quiz: [
    { type: 'mc', page: 75, q: ['ما حكم اليمين الغموس؟', 'Wat is de meinedige eed?'], options: [['كبيرة تجب منها التوبة', 'لا شيء فيها', 'تكفي فيها الكفارة فقط', 'مستحبة'], ['een grote zonde waarvoor berouw verplicht is', 'er staat niets op', 'alleen boete volstaat', 'aanbevolen']], answer: 0, explain: ['ويجب رد الحقوق إلى أهلها.', 'En rechten moeten teruggegeven worden.'] },
    { type: 'tf', page: 76, q: ['يجوز الصيام في كفارة اليمين مع القدرة على الإطعام.', 'Vasten als boete mag ook als men kan voeden.'], answer: 1, explain: ['لا ينتقل إلى الصيام إلا من لم يجد.', 'Alleen wie het niet kan, gaat over op vasten.'] },
    { type: 'mc', page: 81, q: ['من نذر أن يشرب الخمر فماذا عليه؟', 'Wat moet iemand die belooft wijn te drinken?'], options: [['لا يفي، وعليه كفارة يمين', 'يفي بنذره', 'لا شيء عليه', 'يصوم شهرا'], ['niet nakomen, en de boete voor een eed betalen', 'zijn gelofte nakomen', 'niets', 'een maand vasten']], answer: 0, explain: ['«ومن نذر أن يعصي الله فلا يعصه».', '"Wie belooft Allah ongehoorzaam te zijn, laat hem dat niet doen".'] },
    { type: 'tf', page: 80, q: ['تكفي النية في انعقاد النذر الملزم.', 'Intentie volstaat voor een bindende gelofte.'], answer: 1, explain: ['يشترط أن يكون بلفظ منطوق.', 'Zij moet uitgesproken worden.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٧٩ و٨٢.', 'Oefeningen van het boek op p. 79 en 82. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
