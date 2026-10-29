// Hoofdstukkaart bij الحديث (٣), eenheid 3: hadith 12–15 (lessen 13–19, boek p. 59–73).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. Citaten van
// geleerden zonder vindplaats (Ibn Kathīr, an-Nawawī, Ibn Taymiyya, Ibn al-Mundhir, Ibn ʿAbd al-Barr,
// ʿAwn ibn ʿAbd Allāh) staan alleen als uitleg in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-hadith',
  chapter: '13',
  unit: 3,
  source: {
    label: ['كتاب الحديث (٣)، سلسلة زاد العلمية', 'Al-Ḥadīth (3), Zad-reeks'],
    pages: '59–73',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ١٢–١٥', 'Hadith 12–15'],
  subtitle: ['أربعة أحاديث مجموعة في صفحة واحدة', 'Vier hadith samen op één pagina'],
  summary: [
    'أربعة أحاديث في أخلاق المسلم مع إخوانه: تعريف الغيبة وتحريمها وما يباح منها، ولا حسد إلا في اثنتين، والنظر إلى من هو أسفل منا لشكر النعمة، وأن النصر والرزق بالضعفاء.',
    'Vier hadith over hoe de moslim met zijn broeders omgaat: wat roddel is, dat het verboden is en wanneer het toch mag; geen afgunst behalve in twee gevallen; kijken naar wie onder ons staat om dankbaar te zijn; en dat overwinning en voorziening komen door de zwakken.'
  ],
  map: {
    title: ['الأحاديث الأربعة في خريطة واحدة', 'De vier hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٣)', 'Hadith (3)'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['أتدرون ما الغيبة؟', 'Weten jullie wat roddel is?'], sub: ['الحديث ١٢', 'hadith 12'], page: 59, children: [['ذكرك أخاك بما يكره', 'je broer noemen met wat hij haat'], ['البهتان', 'laster'], ['ما يباح من الغيبة', 'wanneer het mag']] },
      { label: ['لا حسد إلا في اثنتين', 'Geen afgunst behalve in twee'], sub: ['الحديث ١٣', 'hadith 13'], page: 64, children: [['المال في الحق', 'geld voor het goede'], ['الحكمة يقضي بها ويعلمها', 'wijsheid waarmee hij oordeelt en onderwijst'], ['الغبطة', 'ghibṭa']] },
      { label: ['انظروا إلى من أسفل منكم', 'Kijk naar wie onder jullie staat'], sub: ['الحديث ١٤', 'hadith 14'], page: 68, children: [['شكر النعمة', 'dankbaarheid'], ['علاج الحسد', 'medicijn tegen afgunst']] },
      { label: ['تنصرون وترزقون بضعفائكم', 'Geholpen door jullie zwakken'], sub: ['الحديث ١٥', 'hadith 15'], page: 71, children: [['دعاؤهم وإخلاصهم', 'hun smeekbede en oprechtheid'], ['الأسباب الحسية والمعنوية', 'zichtbare en onzichtbare oorzaken']] }
    ]
  },
  points: [
    [59, 'الغيبة ذكرك أخاك في غيبته بما يكره ولو كان فيه، فإن لم يكن فيه فهو بهتان.', 'Roddel is je broer in zijn afwezigheid noemen met wat hij haat, ook als het waar is; is het niet waar, dan is het laster.'],
    [60, 'الغيبة من كبائر الذنوب، ومثلها الله بأكل لحم الأخ ميتا.', 'Roddel is een grote zonde; Allah vergeleek het met het eten van het vlees van je dode broer.'],
    [61, 'إن ذكره بما يكره في حضرته فهو سب لا غيبة، لأنه يستطيع الدفاع عن نفسه.', 'Wie hem in zijn aanwezigheid noemt met wat hij haat, scheldt hem uit; dat is geen roddel, want hij kan zich verdedigen.'],
    [61, 'غيبة العلماء أشد، لأنها طعن في أشخاصهم وفي الشريعة التي يحملونها.', 'Roddel over geleerden is erger: het treft hun persoon en de sharīʿa die zij dragen.'],
    [64, 'الحسد المقصود في الحديث هو الغبطة: أن تتمنى مثل نعمة غيرك دون زوالها عنه.', 'De afgunst in de hadith is ghibṭa: wensen wat een ander heeft, zonder dat het van hem verdwijnt.'],
    [66, 'أفضل الناس في الحكمة من قضى بها وعمل بها وعلمها.', 'De beste mensen in wijsheid zijn wie ermee oordelen, ernaar handelen en haar onderwijzen.'],
    [69, 'النظر إلى من فوقك في الدنيا يحقر نعمة الله عليك، والنظر إلى من دونك يبعث على الشكر.', 'Kijken naar wie boven je staat maakt Allahs gunst klein in je ogen; kijken naar wie onder je staat wekt dankbaarheid.'],
    [72, 'الأسباب المعنوية كالتوكل وصدق الالتجاء إلى الله أقوى عند الضعفاء، ولذلك ينصر بهم.', 'Onzichtbare oorzaken zoals vertrouwen op Allah en oprecht toevlucht zoeken zijn sterker bij de zwakken; daarom komt overwinning door hen.']
  ],
  terms: [
    ['الغيبة', 'al-ghība', 59, 'ذكر الإنسان في غيبته بما يكره.', 'Iemand in zijn afwezigheid noemen met wat hij haat.'],
    ['البهتان', 'al-buhtān', 59, 'الباطل؛ وأصله أن يقال في وجهه ما ليس فيه.', 'Valsheid; oorspronkelijk iemand iets onwaars in zijn gezicht zeggen.'],
    ['الحسد', 'al-ḥasad', 64, 'تمني زوال نعمة المحسود.', 'Wensen dat de gunst van de ander verdwijnt.'],
    ['الغبطة', 'al-ghibṭa', 64, 'أن تتمنى مثل نعمة غيرك دون زوالها عنه.', 'Wensen wat een ander heeft, zonder dat het van hem verdwijnt.'],
    ['هلكته', 'halakatihi', 64, 'إنفاقه حتى لا يبقي منه شيئا.', 'Het uitgeven tot er niets van overblijft.'],
    ['الحكمة', 'al-ḥikma', 64, 'العلم الذي يمنع من الجهل ويزجر عن القبيح.', 'Kennis die van onwetendheid weerhoudt en van het lelijke afhoudt.'],
    ['أجدر', 'ajdar', 68, 'أحق وأولى.', 'Meer passend.'],
    ['تزدروا', 'tazdarū', 68, 'تحتقروا.', 'Minachten.'],
    ['بضعفائكم', 'bi-ḍuʿafāʾikum', 71, 'بدعائهم وصلاتهم وإخلاصهم.', 'Door hun smeekbeden, gebeden en oprechtheid.']
  ],
  diagrams: [
    {
      type: 'steps',
      title: ['مراتب الحسد', 'Graden van afgunst'],
      intro: ['أربع مراتب، والرابعة هي المرادة في الحديث.', 'Vier graden; de vierde is wat de hadith bedoelt.'],
      nodes: [
        [64, 'تمني زوال النعمة ولو لم تنتقل إليه', 'Wensen dat de gunst verdwijnt, ook al krijgt hij haar niet', '', ''],
        [64, 'تمني زوالها وانتقالها إليه', 'Wensen dat zij verdwijnt en naar hem gaat', '', ''],
        [64, 'تمني مثلها، فإن عجز تمنى زوالها', 'Hetzelfde wensen, en anders wensen dat zij verdwijnt', '', ''],
        [64, 'الغبطة: تمني مثلها دون زوالها', 'Ghibṭa: hetzelfde wensen zonder verdwijnen', 'وهي المحمودة', 'dit is de prijzenswaardige']
      ]
    },
    {
      type: 'cards',
      title: ['ما يباح من الغيبة', 'Wanneer roddel toegestaan is'],
      intro: ['ستة أسباب ذكرها النووي.', 'Zes redenen die an-Nawawī noemt.'],
      nodes: [
        [62, 'التظلم', 'Klagen over onrecht', 'عند السلطان أو القاضي', 'bij de heerser of de rechter'],
        [62, 'الاستعانة على تغيير المنكر', 'Hulp vragen tegen kwaad', '', ''],
        [62, 'الاستفتاء', 'Een fatwa vragen', '', ''],
        [62, 'تحذير المسلمين ونصيحتهم', 'Moslims waarschuwen', 'كجرح الرواة والشهود', 'zoals kritiek op overleveraars en getuigen'],
        [62, 'المجاهر بفسقه أو بدعته', 'Wie openlijk zondigt of innoveert', 'فيما جاهر به', 'in wat hij openlijk doet'],
        [62, 'التعريف', 'Herkenbaar maken', 'كالأعمش والأعرج', 'zoals al-Aʿmash en al-Aʿraj']
      ]
    }
  ],
  sections: [
    [59, 'صور خفية من الغيبة', 'Verborgen vormen van roddel', 'تكون باللفظ أو الرمز أو الإشارة، ومنها التعريض كقولهم: قال من يدعي العلم، أو: الله يعافينا! وإخراجها في قالب التعجب.', 'Met woorden, tekens of gebaren; ook met toespelingen zoals "iemand die beweert geleerd te zijn" of "moge Allah ons behoeden!", en in de vorm van verbazing.'],
    [61, 'تتبع العورات', 'Gebreken najagen', 'من تتبع عورة أخيه المسلم تتبع الله عورته، ومن تتبع الله عورته يفضحه ولو في جوف رحله.', 'Wie de gebreken van zijn moslimbroer najaagt, diens gebreken jaagt Allah na, en wie Allah zo najaagt, stelt Hij bloot, zelfs midden in zijn huis.'],
    [65, 'الحسد اعتراض على قدر الله', 'Afgunst als protest tegen Allahs beschikking', 'الحاسد يكره نعمة الله على عبده ويتمنى زوالها، فكأنه يعترض على حكمة الله وقدره.', 'De jaloerse haat Allahs gunst bij een dienaar en wenst dat zij verdwijnt; alsof hij bezwaar maakt tegen Allahs wijsheid en beschikking.'],
    [69, 'ما يشكر به النعمة', 'Hoe je de gunst dankt', 'من نظر إلى المرضى عرف نعمة العافية، ومن نظر إلى أهل البلاء والفقر والدين عرف ما عافاه الله منه.', 'Wie naar zieken kijkt, kent de gunst van gezondheid; wie kijkt naar beproefden, armen en schuldenaars, weet waarvan Allah hem bewaard heeft.']
  ],
  keycards: [
    ['opsomming', 61, 'من صور الغيبة', 'Vormen van roddel', ['عيب في الخلقة كالأعرج والأعور على وجه التنقص', 'عيب في الخلق', 'عيب في الدين كقوله: مبتدع، لا يصلي مع الجماعة'], ['een lichamelijk gebrek, zoals mank of eenogig, om te kleineren', 'een karaktergebrek', 'een religieus gebrek, zoals "hij is een vernieuwer" of "hij bidt niet in gemeenschap"']],
    ['opsomming', 66, 'الناس في الحكمة أربعة', 'Vier soorten mensen in wijsheid', ['أوتيها فبخل بها ولم يعمل بها، وهو خاسر', 'عمل بها ولم يعلمها، وهو ناقص', 'قضى بها وعمل وعلم، وهو أفضلهم', 'لم يؤتها، ويرجى له أن يتعلم'], ['kreeg haar, was er gierig mee en handelde er niet naar: een verliezer', 'handelde ernaar maar onderwees niet: onvolmaakt', 'oordeelde ermee, handelde en onderwees: de beste', 'kreeg haar niet; men hoopt dat hij leert']],
    ['onderscheid', 72, 'نوعا الأسباب', 'Twee soorten oorzaken', ['حسية: القوة والشجاعة والغنى', 'معنوية: قوة التوكل وكمال الثقة بالله والتوجه إليه، وهي أقوى'], ['zichtbaar: kracht, moed, rijkdom', 'onzichtbaar: sterk vertrouwen op Allah en zich tot Hem richten; deze zijn sterker']]
  ],
  hadith: [
    { text: 'أتدرون ما الغيبة؟ … ذكرك أخاك بما يكره … إن كان فيه ما تقول فقد اغتبته، وإن لم يكن فيه فقد بهته', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Weten jullie wat roddel is? … Dat je je broer noemt met wat hij haat … Als het in hem is wat je zegt, dan heb je over hem geroddeld; en als het niet in hem is, dan heb je hem belasterd', pages: [59] },
    { text: 'لما عرج بي مررت بقوم لهم أظفار من نحاس يخمشون وجوههم وصدورهم … هؤلاء الذين يأكلون لحوم الناس، ويقعون في أعراضهم', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'أنس', narratorNl: 'Anas', nl: 'Toen ik opsteeg, kwam ik langs mensen met nagels van koper die hun gezichten en borsten openkrabden … Dat zijn zij die het vlees van mensen eten en hun eer aantasten', pages: [60] },
    { text: 'لقد قلت كلمة لو مزجت بماء البحر لمزجته', takhrij: 'رواه أبو داود وصححه الألباني', takhrijNl: 'Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'قاله لعائشة لما عابت صفية بقصرها.', nlNote: 'Gezegd tegen ʿĀʾisha toen zij Ṣafiyya om haar kleine gestalte kleineerde.', nl: 'Je hebt een woord gezegd dat, als het met het water van de zee werd vermengd, het zou bederven', pages: [60] },
    { text: 'يا معشر من أسلم بلسانه ولم يفض الإيمان إلى قلبه، لا تؤذوا المسلمين ولا تعيروهم ولا تتبعوا عوراتهم …', takhrij: 'رواه أبو داود وصححه الألباني', takhrijNl: 'Abū Dāwūd; al-Albānī noemde hem authentiek', nl: 'O jullie die met de tong moslim werden terwijl het geloof jullie hart niet bereikte: kwets de moslims niet, verwijt hun niets en jaag hun gebreken niet na …', pages: [61] },
    { text: 'ائذنوا له، بئس أخو العشيرة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'من أدلة ما يباح من الغيبة.', nlNote: 'Een bewijs dat roddel soms toegestaan is.', nl: 'Laat hem binnen; wat een slechte broeder van zijn stam', pages: [63] },
    { text: 'خذي ما يكفيك وولدك بالمعروف', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'لما قالت هند: إن أبا سفيان رجل شحيح.', nlNote: 'Toen Hind zei: Abū Sufyān is een gierige man.', nl: 'Neem wat genoeg is voor jou en je kinderen, op de gebruikelijke wijze', pages: [63] },
    { text: 'لا حسد إلا في اثنتين: رجل آتاه الله مالا فسلط على هلكته في الحق، ورجل آتاه الله الحكمة فهو يقضي بها ويعلمها', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن مسعود', narratorNl: 'Ibn Masʿūd', nl: 'Geen afgunst behalve in twee gevallen: een man aan wie Allah geld gaf en die het volledig uitgeeft aan het goede, en een man aan wie Allah wijsheid gaf, die daarmee oordeelt en haar onderwijst', pages: [64] },
    { text: 'انظروا إلى من أسفل منكم، ولا تنظروا إلى من هو فوقكم، فهو أجدر أن لا تزدروا نعمة الله عليكم', takhrij: 'متفق عليه، واللفظ لمسلم', takhrijNl: 'al-Bukhārī en Muslim, de bewoording van Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Kijk naar wie onder jullie staat en niet naar wie boven jullie staat; dat is beter, zodat jullie Allahs gunst aan jullie niet minachten', pages: [68] },
    { text: 'إني أحبك، فلا تدعن أن تقول دبر كل صلاة مكتوبة: اللهم أعني على ذكرك وشكرك وحسن عبادتك', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; al-Albānī noemde hem authentiek', narrator: 'معاذ بن جبل', narratorNl: 'Muʿādh ibn Jabal', nl: 'Ik houd van je; laat dus niet na na elk verplicht gebed te zeggen: o Allah, help mij U te gedenken, U te danken en U goed te aanbidden', pages: [69] },
    { text: 'هل تنصرون وترزقون إلا بضعفائكم؟!', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'مصعب بن سعد', narratorNl: 'Muṣʿab ibn Saʿd', note: 'لما رأى سعد أن له فضلا على من دونه.', nlNote: 'Toen Saʿd meende dat hij voorrang had boven wie onder hem stond.', nl: 'Worden jullie niet alleen geholpen en voorzien door jullie zwakken?', pages: [71] },
    { text: 'يا سعد، ارم، فداك أبي وأمي', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'يوم أحد.', nlNote: 'Op de dag van Uḥud.', nl: 'Saʿd, schiet, mijn vader en moeder zijn je losprijs', pages: [71] }
  ],
  persons: [
    ['abu-hurayra', 'text', [59, 68], 'راوي الحديثين الثاني عشر والرابع عشر.', 'Overleveraar van hadith 12 en 14.'],
    ['ibn-kathir', 'text', [59], 'نقل الإجماع على تحريم الغيبة إلا ما رجحت مصلحته.', 'Vermeldde de consensus dat roddel verboden is, behalve waar het belang zwaarder weegt.'],
    ['an-nawawi', 'text', [59, 62], 'فصل صور الغيبة وما يباح منها.', 'Werkte de vormen van roddel uit en wanneer het mag.'],
    ['ibn-taymiyya', 'text', [60], 'حذر من إخراج الغيبة في قالب التعجب.', 'Waarschuwde tegen roddel in de vorm van verbazing.'],
    ['anas-ibn-malik', 'text', [60], 'روى حديث الذين يخمشون وجوههم.', 'Overleverde de hadith over wie hun gezichten openkrabben.'],
    ['aisha', 'text', [60, 63], 'روت أحاديث في الغيبة وما يباح منها.', 'Overleverde hadith over roddel en wanneer het mag.'],
    ['safiyya-bint-huyayy', 'text', [60], 'عابتها عائشة بقصرها فأنكر النبي ﷺ ذلك.', 'ʿĀʾisha kleineerde haar om haar gestalte en de Profeet ﷺ keurde dat af.'],
    ['ibn-al-mundhir', 'text', [62], 'قال: من ليس بأخ لا غيبة له.', 'Zei: wie geen broeder is, voor hem geldt het verbod op roddel niet.'],
    ['fatima-bint-qays', 'text', [63], 'استشارت النبي ﷺ في معاوية وأبي الجهم.', 'Vroeg de Profeet ﷺ om raad over Muʿāwiya en Abū l-Jahm.'],
    ['muawiya-ibn-abi-sufyan', 'text', [63], 'خطب فاطمة بنت قيس فقال النبي ﷺ: صعلوك لا مال له.', 'Hield om de hand van Fāṭima bint Qays; de Profeet ﷺ zei: hij is arm en heeft geen geld.'],
    ['hind-bint-utba', 'text', [63], 'اشتكت شح أبي سفيان.', 'Klaagde over de gierigheid van Abū Sufyān.'],
    ['abu-sufyan-ibn-harb', 'text', [63], 'شكت زوجته شحه.', 'Zijn vrouw klaagde over zijn gierigheid.'],
    ['ibn-masud', 'text', [64], 'راوي الحديث الثالث عشر.', 'Overleveraar van hadith 13.'],
    ['ibn-abd-al-barr', 'text', [66], 'بين أن الحسد في الحديث ينبغي أن يكون في القيام بالقرآن والنفقة والتعليم.', 'Legde uit dat de afgunst in de hadith hoort te gaan over Koran, geven en onderwijzen.'],
    ['awn-ibn-abdallah', 'text', [69], 'جالس الأغنياء فاغتم، وجالس الفقراء فاستراح.', 'Zat bij de rijken en werd bedroefd; zat bij de armen en vond rust.'],
    ['muadh-ibn-jabal', 'text', [69], 'أوصاه النبي ﷺ بالدعاء دبر كل صلاة.', 'De Profeet ﷺ raadde hem een smeekbede na elk gebed aan.'],
    ['musab-ibn-sad', 'text', [71], 'راوي الحديث الخامس عشر.', 'Overleveraar van hadith 15.'],
    ['sad-ibn-abi-waqqas', 'text', [71], 'رأى أن له فضلا على من دونه، فقال النبي ﷺ الحديث.', 'Meende voorrang te hebben boven wie onder hem stond, waarop de Profeet ﷺ de hadith zei.']
  ],
  review: [
    ['الغيبة ذكر الأخ بما يكره في غيبته، والبهتان ما ليس فيه.', 'Roddel is je broer noemen met wat hij haat in zijn afwezigheid; laster is iets wat niet waar is.'],
    ['تباح الغيبة لستة أسباب شرعية.', 'Roddel mag om zes sharʿī redenen.'],
    ['الغبطة محمودة في المال المنفق في الحق والحكمة المعلمة.', 'Ghibṭa is prijzenswaardig bij geld dat aan het goede wordt besteed en bij wijsheid die onderwezen wordt.'],
    ['انظر إلى من دونك تشكر نعمة الله.', 'Kijk naar wie onder je staat, dan dank je Allahs gunst.'],
    ['ينصر المسلمون ويرزقون بدعاء ضعفائهم وإخلاصهم.', 'De moslims worden geholpen en voorzien door de smeekbeden en oprechtheid van hun zwakken.']
  ],
  quiz: [
    { type: 'mc', page: 59, q: ['إذا ذكرت أخاك بما ليس فيه فما ذلك؟', 'Wat is het als je je broer noemt met iets wat niet waar is?'], options: [['بهتان', 'غيبة', 'نميمة', 'نصيحة'], ['laster', 'roddel', 'kwaadsprekerij', 'goede raad']], answer: 0, explain: ['وإن لم يكن فيه فقد بهته.', '"En als het niet in hem is, dan heb je hem belasterd."'] },
    { type: 'tf', page: 61, q: ['ذكر الأخ بما يكره في حضرته من الغيبة.', 'Je broer in zijn aanwezigheid noemen met wat hij haat is roddel.'], answer: 1, explain: ['هذا سب لا غيبة، لأنه يستطيع الدفاع عن نفسه.', 'Dat is uitschelden, geen roddel, want hij kan zich verdedigen.'] },
    { type: 'mc', page: 62, q: ['أي هذه ليس من أسباب إباحة الغيبة؟', 'Wat is geen reden waarom roddel mag?'], options: [['التسلية في المجالس', 'التظلم', 'الاستفتاء', 'تحذير المسلمين'], ['vermaak in gezelschap', 'klagen over onrecht', 'een fatwa vragen', 'moslims waarschuwen']], answer: 0, explain: ['الأسباب الستة كلها لغرض شرعي صحيح.', 'Alle zes redenen dienen een geldig sharʿī doel.'] },
    { type: 'mc', page: 64, q: ['ما الغبطة؟', 'Wat is ghibṭa?'], options: [['تمني مثل نعمة الغير دون زوالها', 'تمني زوال نعمة الغير', 'كراهة نعمة الغير', 'ذكر الغير بما يكره'], ['wensen wat een ander heeft zonder dat het verdwijnt', 'wensen dat de gunst van een ander verdwijnt', 'een hekel hebben aan de gunst van een ander', 'een ander noemen met wat hij haat']], answer: 0, explain: ['وهي المرادة في الحديث.', 'Dat bedoelt de hadith.'] },
    { type: 'mc', page: 69, q: ['ما فائدة النظر إلى من هو أسفل منا؟', 'Wat is het nut van kijken naar wie onder ons staat?'], options: [['ألا نزدري نعمة الله علينا', 'أن نحتقره', 'أن نترك العمل', 'أن نطلب المال'], ['dat we Allahs gunst niet minachten', 'dat we hem minachten', 'dat we stoppen met werken', 'dat we geld zoeken']], answer: 0, explain: ['فهو أجدر أن لا تزدروا نعمة الله عليكم.', '"Dat is beter, zodat jullie Allahs gunst niet minachten."'] },
    { type: 'tf', page: 72, q: ['الأسباب المعنوية كالتوكل أقوى عند الضعفاء.', 'Onzichtbare oorzaken zoals vertrouwen op Allah zijn sterker bij de zwakken.'], answer: 0, explain: ['لانكسار قلوبهم وتوجهها إلى الله.', 'Omdat hun harten gebroken zijn en zich tot Allah richten.'] }
  ],
  note: ['أنشطة الكتاب في نهاية كل حديث.', 'Oefeningen van het boek aan het eind van elke hadith. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
