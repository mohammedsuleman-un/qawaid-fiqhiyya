// Hoofdstukkaart eenheid 6 van تلخيص أحكام القرآن: الأهلة والحج والعمرة (hoofdstukken 22–25, al-Baqara 189–196).
// Opgesteld uit de overgetypte notities (/mnt/project-files/ahkam/pages/p025–p027.html).
// Op p. 25 staat eerst nog het slot van de iʿtikāf (eenheid 5); deze eenheid begint bij ﴿يسألونك عن الأهلة﴾.
// Op p. 27 begint na de fidya de wijn (﴿يسألونك عن الخمر والميسر﴾, eenheid 7); dat deel staat hier niet.
import { kaart } from './kaart.js'

export default kaart({
  unit: 6,
  subtitle: ['الأهلة مواقيت، وإتيان البيوت من أبوابها، وإتمام الحج والعمرة، وفدية الأذى', 'De nieuwe manen als tijdsaanduiding, huizen door de deur binnengaan, ḥajj en ʿumra voltooien, en de fidya bij last aan het hoofd'],
  summary: [
    'نزلت ﴿يسألونك عن الأهلة﴾ لما سأل أناس عن زيادة الأهلة ونقصانها، فبين الله أنها مواقيت للناس في صومهم وإفطارهم وآجالهم وتصرفاتهم، وخص الحج بالذكر لأن العرب كانت تحج بالعدد وتبدل الشهور، فجعله الله مقروناً بالرؤية. ثم ﴿وليس البر بأن تأتوا البيوت من ظهورها﴾: كان الأنصار وغيرهم إذا أحرموا لم يدخلوا البيوت من أبوابها تعبداً، فبين الله أنه ليس ببر، وأن من تعبد بما لم يشرعه الله فهو متعبد ببدعة، وأن التيسير من قواعد الشرع. ثم ﴿وأتموا الحج والعمرة لله﴾ والخلاف في وجوب العمرة، وأن الآية لإلزام الإتمام لا الابتداء. وأخيراً فدية الأذى في قصة كعب بن عجرة: صيام ثلاثة أيام أو إطعام ستة مساكين أو نسك، على التخيير.',
    'Het vers ﴿Zij vragen je naar de nieuwe manen﴾ kwam toen mensen vroegen waarom de maan groeit en krimpt. Allah maakte duidelijk dat de manen tijdsaanduidingen zijn voor het vasten, het breken ervan, termijnen en omgang; de ḥajj wordt apart genoemd omdat de Arabieren de ḥajj volgens telling verrichtten en maanden verschoven, waarop Allah hem aan het zien van de maan koppelde. Dan ﴿Het is geen vroomheid huizen van achteren binnen te gaan﴾: de Anṣār en andere Arabieren gingen in iḥrām niet door de deur naar binnen, als aanbidding; Allah zei dat dit geen vroomheid is; wie aanbidt met wat Allah niet voorschreef, doet een bidʿa; en verlichting is een grondregel van de sharīʿa. Dan ﴿Voltooit de ḥajj en de ʿumra voor Allah﴾, het verschil over de plicht van de ʿumra, en dat het vers het voltooien oplegt, niet het beginnen. Tot slot de fidya in het verhaal van Kaʿb ibn ʿUjra: drie dagen vasten, zes armen voeden of een offer, naar keuze.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'De eenheid in één kaart'],
    intro: ['من الصفحة 25 إلى 27 (البقرة: 189–196).', 'Van bladzijde 25 tot 27 (al-Baqara 189–196).'],
    root: [25, 'الأهلة والحج والعمرة', 'De nieuwe manen, de ḥajj en de ʿumra', 'البقرة 189–196', 'al-Baqara 189–196'],
    nodes: [
      [25, 'الأهلة مواقيت', 'De manen als tijdsaanduiding', 'البقرة: 189', 'al-Baqara 189', [['سبب النزول: زيادة الأهلة ونقصانها', 'aanleiding: groei en krimp van de maan'], ['مواقيت للناس', 'tijden voor de mensen'], ['تخصيص الحج: إبطال العدد', 'de ḥajj apart: einde van het tellen'], ['القمر يزيد وينقص بخلاف الشمس', 'de maan groeit en krimpt, de zon niet']]],
      [26, 'إتيان البيوت من أبوابها', 'Door de deur binnengaan', 'البقرة: 189', 'al-Baqara 189', [['تعبد بما لم يشرع: بدعة', 'aanbidden met wat niet voorgeschreven is: bidʿa'], ['التيسير قاعدة شرعية', 'verlichting is een grondregel'], ['الإشارة: الطريق السهل القريب', 'de aanwijzing: de gemakkelijke, korte weg']]],
      [26, 'إتمام الحج والعمرة', 'Ḥajj en ʿumra voltooien', 'البقرة: 196', 'al-Baqara 196', [['الشافعي: العمرة واجبة', 'ash-Shāfiʿī: de ʿumra is verplicht'], ['جابر، ومال إليه مالك وأبو حنيفة: تطوع', 'Jābir, en Mālik en Abū Ḥanīfa neigden ertoe: vrijwillig'], ['الآية للإتمام لا للابتداء', 'het vers gaat over voltooien, niet beginnen']]],
      [27, 'فدية الأذى', 'De fidya bij last', 'البقرة: 196', 'al-Baqara 196', [['قصة كعب بن عجرة', 'het verhaal van Kaʿb ibn ʿUjra'], ['صيام ثلاثة أيام أو إطعام ستة مساكين أو نسك', 'drie dagen vasten, zes armen voeden of een offer'], ['التخيير: النسك ثم الصدقة ثم الصيام', 'keuze: offer, dan aalmoes, dan vasten']]]
    ]
  },
  points: [
    [25, 'نزلت ﴿يسألونك عن الأهلة﴾ في أناس سألوا عن زيادة الأهلة ونقصانها.', 'Het vers ﴿Zij vragen je naar de nieuwe manen﴾ kwam over mensen die vroegen naar de groei en krimp van de maan.'],
    [25, '﴿مواقيت للناس﴾: في صومهم وإفطارهم وآجالهم وتصرفاتهم ومنافع كثيرة لهم.', '﴿Tijdsaanduidingen voor de mensen﴾: voor hun vasten en het breken ervan, hun termijnen, hun omgang en vele andere voordelen.', 'جعل الله القمر يزيد وينقص ليعلم الناس أوقات الحج والصوم والعيد وآجال الديون وعدد النساء، بخلاف الشمس الدائمة على حالة واحدة.', 'Allah liet de maan groeien en krimpen zodat mensen de tijden kennen van ḥajj, vasten, ʿīd, schuldtermijnen, de ʿidda van vrouwen en meer; anders dan de zon, die altijd gelijk blijft.'],
    [26, 'خص الحج بالذكر مع دخوله في عموم ﴿مواقيت للناس﴾ لأن العرب كانت تحج بالعدد وتبدل الشهور، فأبطل الله فعلهم وجعله مقروناً بالرؤية.', 'De ḥajj wordt apart genoemd, hoewel hij onder ﴿tijdsaanduidingen voor de mensen﴾ valt, omdat de Arabieren de ḥajj volgens telling verrichtten en maanden verschoven; Allah verklaarde dat ongeldig en koppelde hem aan het zien van de maan.'],
    [26, 'من تعبد بعبادة لم يشرعها الله ولا رسوله فهو متعبد ببدعة، كمن ترك دخول البيوت من أبوابها في الإحرام ظناً أنه بر.', 'Wie aanbidt met een aanbidding die Allah en Zijn Boodschapper niet voorschreven, aanbidt met een bidʿa, zoals wie in iḥrām niet door de deur naar binnen ging in de veronderstelling dat dat vroomheid was.'],
    [26, 'الأمر بإتيان البيوت من أبوابها للتيسير، وهو قاعدة من قواعد الشرع: ﴿يريد الله بكم اليسر ولا يريد بكم العسر﴾.', 'Het bevel om door de deur binnen te gaan is een verlichting, en verlichting is een grondregel van de sharīʿa: ﴿Allah wil voor jullie het gemak en niet de moeite﴾.', 'ويستفاد من إشارة الآية أن يأتي الإنسان كل أمر من الطريق السهل القريب الذي يحصل به مقصوده.', 'Uit de aanwijzing van het vers volgt dat men elke zaak benadert via de gemakkelijkste, kortste weg die het doel bereikt.'],
    [26, 'اختلف في وجوب العمرة: قال الشافعي: واجبة، ويؤثر عن ابن عباس، وقال جابر: تطوع، وإليه مال مالك وأبو حنيفة.', 'Over de plicht van de ʿumra verschilt men: ash-Shāfiʿī zegt verplicht (ook van Ibn ʿAbbās overgeleverd); Jābir zegt vrijwillig, en daartoe neigden Mālik en Abū Ḥanīfa.'],
    [27, 'ليس في ﴿وأتموا الحج والعمرة لله﴾ حجة لوجوب العمرة، لأنها قرنت بالحج في وجوب الإتمام لا في الابتداء.', 'In ﴿Voltooit de ḥajj en de ʿumra voor Allah﴾ zit geen bewijs dat de ʿumra verplicht is: ze staat naast de ḥajj in de plicht tot voltooien, niet tot beginnen.', 'فلو حج عشر حجج أو اعتمر عشر عمر لزمه الإتمام في جميعها.', 'Wie tien keer de ḥajj of tien keer de ʿumra begint, moet ze allemaal voltooien.'],
    [27, 'كل مريض احتاج إلى فعل محظور من محظورات الإحرام فعله وافتدى، وهو مخير: النسك أفضل، ثم الصدقة، ثم الصيام.', 'Elke zieke die iets moet doen wat in iḥrām verboden is, doet het en betaalt fidya. Hij heeft de keuze: een offer is het beste, dan de aalmoes, dan het vasten.']
  ],
  terms: [
    ['الأهلة', 'al-ahilla', 25, 'ما سأل عنه الناس من زيادة القمر ونقصانه، وهي مواقيت للناس والحج.', 'Wat de mensen vroegen over de maan die groeit en krimpt; ze zijn tijdsaanduidingen voor de mensen en de ḥajj.', 'سأل أناس عن زيادتها ونقصانها، فنزلت الآية.', 'Mensen vroegen naar hun groei en krimp; toen kwam het vers.'],
    ['المواقيت', 'al-mawāqīt', 25, 'الأوقات التي يعلم بها الناس صومهم وإفطارهم وآجالهم وتصرفاتهم.', 'De tijden waaraan mensen hun vasten, het breken ervan, hun termijnen en hun omgang afmeten.', 'ومنها أوقات الحج والعيد وآجال الديون وعدد النساء.', 'Daaronder de tijden van ḥajj en ʿīd, schuldtermijnen en de ʿidda van vrouwen.'],
    ['الآجال', 'al-ājāl', 25, 'المدد والمواعيد التي يتفق عليها الناس.', 'Termijnen en afspraken die mensen maken.', 'كآجال الديون.', 'Zoals de termijnen van schulden.'],
    ['العدد', 'al-ʿadad', 26, 'الحساب الذي كانت العرب تحج به وتبدل به الشهور.', 'De telling waarmee de Arabieren de ḥajj verrichtten en maanden verschoven.', 'أبطله الله وجعل الحج مقروناً بالرؤية.', 'Allah verklaarde het ongeldig en koppelde de ḥajj aan het zien van de maan.'],
    ['البر', 'al-birr', 26, 'نفاه الله عما تعبدوا به ولم يشرعه لهم، وأثبته لمن اتقى.', 'Vroomheid: Allah ontkende het voor wat zij als aanbidding deden zonder dat Hij het had voorgeschreven, en kende het toe aan wie godvrezend is.', '﴿ولكن البر من اتقى﴾، فليس من البر ما لم يشرعه الله.', '﴿Maar vroom is wie godvrezend is﴾; wat Allah niet voorschreef, is geen vroomheid.'],
    ['البدعة', 'al-bidʿa', 26, 'التعبد بعبادة لم يشرعها الله ولا رسوله.', 'Aanbidden met een aanbidding die Allah en Zijn Boodschapper niet voorschreven.', 'كترك دخول البيوت من أبوابها في الإحرام تعبداً.', 'Zoals in iḥrām als aanbidding niet door de deur naar binnen gaan.'],
    ['التيسير', 'at-taysīr', 26, 'السهولة على المكلفين، كما في الأمر بإتيان البيوت من أبوابها.', 'Gemak voor wie verplichtingen heeft, zoals in het bevel de huizen door de deur binnen te gaan.', 'قاعدة من قواعد الشرع: ﴿يريد الله بكم اليسر﴾.', 'Een grondregel van de sharīʿa: ﴿Allah wil voor jullie het gemak﴾.'],
    ['إشارة الآية', 'ishārat al-āya', 26, 'ما استفادته المذكرات من الآية زائداً على موضوعها في البيوت.', 'Wat de notities uit het vers afleiden, boven het onderwerp (de huizen) uit.', 'أن يسلك الإنسان في كل أمر أقرب طريق وأسهله يحصل به مقصوده.', 'Dat men in elke zaak de kortste en gemakkelijkste weg neemt die het doel bereikt.'],
    ['العمرة', 'al-ʿumra', 26, 'النسك المقرون بالحج في ﴿وأتموا الحج والعمرة لله﴾.', 'De bedevaart die naast de ḥajj staat in ﴿Voltooit de ḥajj en de ʿumra voor Allah﴾.', 'اختلف في وجوبها: واجبة عند الشافعي، وتطوع عند جابر ومال إليه مالك وأبو حنيفة.', 'Over de plicht verschilt men: verplicht bij ash-Shāfiʿī, vrijwillig bij Jābir, waartoe Mālik en Abū Ḥanīfa neigden.'],
    ['الإتمام', 'al-itmām', 27, 'إكمال الحج أو العمرة بعد الدخول فيهما.', 'De ḥajj of ʿumra afmaken nadat men eraan begonnen is.', 'يلزم في كل حج أو عمرة شرع فيه، ولو عشر حجج أو عشر عمر.', 'Verplicht bij elke ḥajj of ʿumra die men begon, ook bij tien keer.'],
    ['الابتداء', 'al-ibtidāʾ', 27, 'إيجاب الشروع في العبادة أصلاً.', 'Het verplichten om met een aanbidding te beginnen.', 'ابتدأ الله إيجاب الصلاة والزكاة والحج، وأما العمرة فأمر بإتمامها.', 'Allah stelde gebed, zakāt en ḥajj van meet af aan verplicht; bij de ʿumra beval Hij het voltooien.'],
    ['الفدية', 'al-fidya', 27, 'ما يلزم من فعل محظوراً من محظورات الإحرام لحاجة.', 'Wat verschuldigd is door wie uit nood iets doet wat in iḥrām verboden is.', 'صيام ثلاثة أيام أو إطعام ستة مساكين أو نسك.', 'Drie dagen vasten, zes armen voeden of een offer.'],
    ['النسك', 'an-nusuk', 27, 'ذبح شاة.', 'Het slachten van een schaap.', 'وهو أفضل خصال الفدية، ثم الصدقة، ثم الصيام.', 'De beste van de mogelijkheden van de fidya, dan de aalmoes, dan het vasten.'],
    ['الهوام', 'al-hawāmm', 27, 'ما كان يؤذي كعب بن عجرة في رأسه، وهو القمل.', 'Wat Kaʿb ibn ʿUjra op zijn hoofd last gaf: de luizen.', 'سأله النبي ﷺ: «أيؤذيك هوامك؟»', 'De Profeet ﷺ vroeg hem: «Hebben je beestjes je last?»']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['الأهلة مواقيت لماذا؟', 'Waarvoor de manen tijden aangeven'],
      intro: ['من كلام ابن العربي والمذكرات (ص 25–26).', 'Uit Ibn al-ʿArabī en de notities (p. 25–26).'],
      nodes: [
        [25, 'العبادات', 'Aanbidding', 'الصوم والإفطار والحج والعيد', 'vasten, breken, ḥajj, ʿīd'],
        [25, 'المعاملات', 'Omgang', 'الآجال والتصرفات وآجال الديون', 'termijnen, omgang, schuldtermijnen'],
        [26, 'الأسرة', 'Gezin', 'عدد النساء', 'de ʿidda van vrouwen'],
        [26, 'الحج خاصة', 'De ḥajj in het bijzonder', 'كانت العرب تحج بالعدد وتبدل الشهور، فجعله الله مقروناً بالرؤية', 'de Arabieren telden en verschoven maanden; Allah koppelde hem aan het zien'],
        [26, 'القمر والشمس', 'Maan en zon', 'القمر يزيد وينقص ليعلم الناس الأوقات، والشمس دائمة على حالة واحدة', 'de maan groeit en krimpt zodat mensen de tijden kennen; de zon blijft gelijk']
      ],
      page: 25
    },
    {
      type: 'steps',
      title: ['من إتيان البيوت من ظهورها إلى قاعدة التيسير', 'Van de achterkant van het huis naar de regel van verlichting'],
      intro: ['ص 26', 'p. 26'],
      nodes: [
        [26, 'الفعل', 'De daad', 'كان الأنصار وغيرهم إذا أحرموا لم يدخلوا البيوت من أبوابها', 'de Anṣār en anderen gingen in iḥrām niet door de deur naar binnen'],
        [26, 'الباعث', 'De drijfveer', 'تعبداً بذلك وظناً أنه بر', 'als aanbidding, denkend dat het vroomheid was'],
        [26, 'الحكم', 'Het oordeel', 'ليس ببر، لأن الله لم يشرعه، ومن تعبد بما لم يشرع فهو متعبد ببدعة', 'geen vroomheid, want Allah schreef het niet voor; zo aanbidden is bidʿa'],
        [26, 'البديل', 'Het alternatief', '﴿وأتوا البيوت من أبوابها﴾ لما فيه من السهولة', '﴿gaat de huizen door hun deuren binnen﴾, omdat dat gemakkelijk is'],
        [26, 'القاعدة', 'De grondregel', 'التيسير: ﴿يريد الله بكم اليسر ولا يريد بكم العسر﴾', 'verlichting: ﴿Allah wil voor jullie het gemak en niet de moeite﴾'],
        [26, 'الإشارة', 'De aanwijzing', 'يأتي كل أمر من الطريق السهل القريب الذي يحصل به مقصوده', 'elke zaak via de gemakkelijke, korte weg die het doel bereikt']
      ],
      page: 26
    },
    {
      type: 'compare',
      title: ['الابتداء والإتمام في الآيات', 'Beginnen en voltooien in de verzen'],
      intro: ['حجة ابن العربي على أن ﴿وأتموا الحج والعمرة﴾ لا تدل على وجوب العمرة (ص 26–27).', 'Het argument van Ibn al-ʿArabī dat ﴿voltooit de ḥajj en de ʿumra﴾ de ʿumra niet verplicht maakt (p. 26–27).'],
      columns: [['العبادة', 'Aanbidding'], ['آية الإيجاب', 'Vers'], ['نوع الأمر', 'Soort bevel']],
      rows: [
        { label: ['الصلاة والزكاة', 'Gebed en zakāt'], cells: [['وأقيموا الصلاة وآتوا الزكاة', 'Verricht het gebed en geeft de zakāt'], ['ابتداء الإيجاب', 'verplichting om te beginnen']] },
        { label: ['الحج', 'Ḥajj'], cells: [['ولله على الناس حج البيت من استطاع إليه سبيلاً (آل عمران)', 'En Allah heeft de mensen de ḥajj naar het Huis opgelegd, wie daartoe een weg kan vinden (Āl ʿImrān)'], ['ابتداء الإيجاب', 'verplichting om te beginnen']] },
        { label: ['الحج والعمرة', 'Ḥajj en ʿumra'], cells: [['وأتموا الحج والعمرة لله', 'Voltooit de ḥajj en de ʿumra voor Allah'], ['إلزام الإتمام لا الابتداء', 'verplichting om te voltooien, niet om te beginnen']] }
      ],
      page: 26
    },
    {
      type: 'tree',
      title: ['فدية الأذى', 'De fidya bij last aan het hoofd'],
      intro: ['﴿ففدية من صيام أو صدقة أو نسك﴾ (ص 27)', '﴿dan een losprijs: vasten, een aalmoes of een offer﴾ (p. 27)'],
      root: [27, 'من احتاج إلى محظور من محظورات الإحرام', 'Wie iets verbodens in iḥrām moet doen', 'فعله وافتدى، وهو مخير', 'doet het en betaalt fidya, naar keuze'],
      nodes: [
        [27, 'النسك', 'Offer', 'ذبح شاة، وهو الأفضل', 'een schaap slachten; het beste'],
        [27, 'الصدقة', 'Aalmoes', 'إطعام ستة مساكين، وتليه في الفضل', 'zes armen voeden; daarna in rang'],
        [27, 'الصيام', 'Vasten', 'صيام ثلاثة أيام، وهو بعدهما', 'drie dagen vasten; daarna']
      ],
      page: 27
    }
  ],
  sections: [
    [25, '﴿يسألونك عن الأهلة قل هي مواقيت للناس والحج﴾ (البقرة: 189)', '﴿Zij vragen je naar de nieuwe manen. Zeg: het zijn tijdsaanduidingen voor de mensen en voor de ḥajj﴾ (al-Baqara 189)',
      'في سبب نزولها أن أناساً سألوا عن زيادة الأهلة ونقصانها، فنزلت. قال ابن العربي في ﴿قل هي مواقيت للناس﴾: يعني في صومهم وإفطارهم وآجالهم، وفي تصرفاتهم، ومنافع كثيرة لهم. وقال في ﴿والحج﴾: ما فائدة تخصيص الحج مع دخوله في عموم اللفظ الأول؟ وهي أن العرب كانت تحج بالعدد، وتبدل الشهور، فأبطل الله تعالى فعلهم وقولهم، وجعله مقروناً بالرؤية.',
      'Aanleiding: mensen vroegen naar de groei en krimp van de maan, en toen kwam dit vers. Ibn al-ʿArabī over ﴿Zeg: het zijn tijdsaanduidingen voor de mensen﴾: voor hun vasten en het breken ervan, hun termijnen (afspraken), hun omgang en vele voordelen. Over ﴿en voor de ḥajj﴾: waarom wordt de ḥajj apart genoemd, terwijl hij al onder het eerste algemene woord valt? Omdat de Arabieren de ḥajj volgens telling verrichtten en de maanden verschoven; Allah verklaarde hun doen en hun zeggen ongeldig en koppelde de ḥajj aan het zien van de maan.',
      'وفي المذكرات: الله عز وجل جعل القمر يزيد وينقص ليعلم الناس أوقات الحج والصوم والعيد وآجال الديون وعدد النساء وغيرها، وخالف بينه وبين الشمس التي هي دائمة على حالة واحدة.',
      'De notities: Allah liet de maan groeien en krimpen zodat mensen de tijden kennen van ḥajj, vasten, ʿīd, schuldtermijnen, de ʿidda van vrouwen en meer. Zo maakte Hij hem anders dan de zon, die altijd in één toestand blijft.'],
    [26, '﴿وليس البر بأن تأتوا البيوت من ظهورها﴾ (البقرة: 189)', '﴿Het is geen vroomheid dat jullie de huizen van achteren binnengaan﴾ (al-Baqara 189)',
      'كان الأنصار وغيرهم من العرب إذا أحرموا لم يدخلوا البيوت من أبوابها تعبداً بذلك وظناً أنه بر، فأخبر الله أنه ليس ببر، لأن الله تعالى لم يشرعه لهم، وكل من تعبد بعبادة لم يشرعها الله ولا رسوله فهو متعبد ببدعة. وأمرهم الله أن يأتوا البيوت من أبوابها لما فيه من السهولة عليهم: ﴿ولكن البر من اتقى وأتوا البيوت من أبوابها﴾.',
      'Als de Anṣār en andere Arabieren in iḥrām waren, gingen ze de huizen niet door de deur binnen; ze deden dat als aanbidding en dachten dat het vroomheid was. Allah zei dat het geen vroomheid is, omdat Hij het niet had voorgeschreven, en wie aanbidt met een aanbidding die Allah en Zijn Boodschapper niet voorschreven, aanbidt met een bidʿa. Allah beval hun de huizen door de deur binnen te gaan, omdat dat gemakkelijk voor hen was: ﴿Maar vroom is wie godvrezend is. Gaat de huizen door hun deuren binnen﴾.',
      'وهذا التيسير قاعدة من قواعد الشرع: ﴿يريد الله بكم اليسر ولا يريد بكم العسر﴾ كما مر في آية الصيام (البقرة: 185). ويستفاد من إشارة الآية أنه ينبغي في كل أمر من الأمور أن يأتيه الإنسان من الطريق السهل القريب، فيسلك أقرب طريق وأسهله يحصل به مقصوده.',
      'Die verlichting is een grondregel van de sharīʿa: ﴿Allah wil voor jullie het gemak en niet de moeite﴾, zoals in het vastenvers (al-Baqara 185). Uit de aanwijzing (ishāra) van het vers volgt: men hoort elke zaak te benaderen via de gemakkelijke, korte weg, dus de kortste en gemakkelijkste weg te nemen waarmee men zijn doel bereikt.'],
    [26, '﴿وأتموا الحج والعمرة لله﴾ (البقرة: 196)', '﴿Voltooit de ḥajj en de ʿumra voor Allah﴾ (al-Baqara 196)',
      'قال ابن العربي: اختلف العلماء في وجوب العمرة، فقال الشافعي: هي واجبة، ويؤثر ذلك عن ابن عباس، وقال جابر بن عبد الله: هي تطوع، وإليه مال مالك وأبو حنيفة. قال: وليس في هذه الآية حجة للوجوب، لأن الله سبحانه إنما قرنها بالحج في وجوب الإتمام لا في الابتداء.',
      'Ibn al-ʿArabī: de geleerden verschillen over de plicht van de ʿumra. Ash-Shāfiʿī zegt: ze is verplicht, en dat wordt ook van Ibn ʿAbbās overgeleverd. Jābir ibn ʿAbdallāh zegt: ze is vrijwillig, en daartoe neigden Mālik en Abū Ḥanīfa. Hij zegt: in dit vers zit geen bewijs voor de plicht, want Allah plaatste haar naast de ḥajj in de plicht tot voltooien, niet in de plicht tot beginnen.',
      'فإنه ابتدأ إيجاب الصلاة والزكاة فقال: ﴿وأقيموا الصلاة وآتوا الزكاة﴾، وابتدأ بإيجاب الحج فقال: ﴿ولله على الناس حج البيت من استطاع إليه سبيلاً﴾ (آل عمران)، ولما ذكر العمرة أمر بإتمامها لا بابتدائها، فلو حج عشر حجج أو اعتمر عشر عمر لزمه الإتمام في جميعها، وإنما جاءت الآية لإلزام الإتمام لا لإلزام الابتداء.',
      'Gebed en zakāt verplichtte Hij met een bevel om te beginnen: ﴿Verricht het gebed en geeft de zakāt﴾; de ḥajj ook: ﴿En Allah heeft de mensen de ḥajj naar het Huis opgelegd, wie daartoe een weg kan vinden﴾ (Āl ʿImrān). Maar bij de ʿumra beval Hij het voltooien, niet het beginnen. Wie tien keer de ḥajj of tien keer de ʿumra begint, moet ze dus allemaal voltooien. Het vers legt het voltooien op, niet het beginnen.'],
    [27, '﴿فمن كان منكم مريضاً أو به أذى من رأسه ففدية من صيام أو صدقة أو نسك﴾ (البقرة: 196)', '﴿Wie van jullie ziek is of last aan zijn hoofd heeft: dan een losprijs van vasten, een aalmoes of een offer﴾ (al-Baqara 196)',
      'قال ابن العربي: هذه الآية نزلت في كعب بن عجرة، قال: مر بي النبي ﷺ زمن الحديبية وأنا أوقد تحت قدر لي، والقمل يتناثر عن رأسي، فقال: «أيؤذيك هوامك؟» قلت: نعم. فأمره النبي ﷺ أن يحلق، ويصوم ثلاثة أيام، أو يطعم ستة مساكين، أو ينسك نسيكة (أي يذبح شاة).',
      'Ibn al-ʿArabī: dit vers kwam over Kaʿb ibn ʿUjra. Hij vertelde: de Profeet ﷺ kwam bij mij langs in de tijd van al-Ḥudaybiya, terwijl ik een vuur stookte onder mijn kookpot en de luizen van mijn hoofd vielen. Hij zei: «Hebben je beestjes je last?» Ik zei: ja. Toen beval de Profeet ﷺ hem zijn hoofd te scheren, en drie dagen te vasten, of zes armen te voeden, of een offer te brengen (dat wil zeggen: een schaap te slachten).',
      'فكل من كان مريضاً واحتاج إلى فعل محظور من محظورات الإحرام فعله وافتدى (إطعام ستة مساكين أو صيام ثلاثة أيام). وهو مخير، والنسك أفضل، ثم الصدقة، ثم الصيام.',
      'Dus: elke zieke die iets moet doen wat in iḥrām verboden is, doet het en betaalt fidya (zes armen voeden of drie dagen vasten). Hij heeft de keuze; het offer is het beste, dan de aalmoes, dan het vasten.']
  ],
  keycards: [
    ['opsomming', 25, 'الأهلة مواقيت في', 'De manen geven de tijd aan voor', ['الصوم والإفطار', 'الآجال والتصرفات', 'الحج', 'العيد', 'آجال الديون', 'عدد النساء'], ['Het vasten en het breken ervan', 'Termijnen en omgang', 'De ḥajj', 'Het ʿīd', 'Schuldtermijnen', 'De ʿidda van vrouwen']],
    ['onderscheid', 26, 'القمر والشمس', 'Maan en zon', ['القمر يزيد وينقص فيعلم به الناس الأوقات', 'الشمس دائمة على حالة واحدة'], ['De maan groeit en krimpt, en daaraan kennen mensen de tijden', 'De zon blijft altijd in één toestand']],
    ['definitie', 26, 'المتعبد ببدعة', 'Wie met een bidʿa aanbidt', ['كل من تعبد بعبادة لم يشرعها الله ولا رسوله', 'مثاله: ترك دخول البيوت من أبوابها في الإحرام تعبداً وظناً أنه بر'], ['Ieder die aanbidt met een aanbidding die Allah en Zijn Boodschapper niet voorschreven', 'Voorbeeld: in iḥrām als aanbidding niet door de deur naar binnen gaan, denkend dat het vroomheid is']],
    ['bewijs', 26, 'التيسير قاعدة شرعية', 'Verlichting is een grondregel', ['﴿وأتوا البيوت من أبوابها﴾ لما فيه من السهولة', '﴿يريد الله بكم اليسر ولا يريد بكم العسر﴾ (البقرة: 185)'], ['﴿Gaat de huizen door hun deuren binnen﴾, omdat dat gemakkelijk is', '﴿Allah wil voor jullie het gemak en niet de moeite﴾ (al-Baqara 185)']],
    ['onderscheid', 26, 'الابتداء والإتمام', 'Beginnen en voltooien', ['الابتداء: إيجاب الدخول في العبادة، كإيجاب الصلاة والزكاة والحج', 'الإتمام: إيجاب إكمال ما شرع فيه، وبه جاءت ﴿وأتموا الحج والعمرة لله﴾', 'فالاقتران في الإتمام لا يدل على الاقتران في الابتداء'], ['Beginnen: de plicht om een aanbidding aan te vangen, zoals gebed, zakāt en ḥajj', 'Voltooien: de plicht om af te maken wat men begon; daarover gaat ﴿Voltooit de ḥajj en de ʿumra voor Allah﴾', 'Samen genoemd worden bij het voltooien betekent niet samen genoemd worden bij het beginnen']],
    ['opsomming', 26, 'الأقوال في وجوب العمرة', 'Meningen over de plicht van de ʿumra', ['الشافعي: واجبة، ويؤثر عن ابن عباس', 'جابر بن عبد الله: تطوع', 'مال إلى التطوع مالك وأبو حنيفة'], ['Ash-Shāfiʿī: verplicht; ook van Ibn ʿAbbās overgeleverd', 'Jābir ibn ʿAbdallāh: vrijwillig', 'Mālik en Abū Ḥanīfa neigden naar vrijwillig']],
    ['opsomming', 27, 'خصال فدية الأذى', 'De mogelijkheden van de fidya', ['صيام ثلاثة أيام', 'إطعام ستة مساكين', 'نسك: ذبح شاة', 'وهو مخير بينها، والنسك أفضل ثم الصدقة ثم الصيام'], ['Drie dagen vasten', 'Zes armen voeden', 'Een offer: een schaap slachten', 'Hij mag kiezen; het offer is het beste, dan de aalmoes, dan het vasten']],
    ['voorwaarde', 27, 'متى تجب فدية الأذى؟', 'Wanneer is de fidya verschuldigd?', ['أن يكون محرماً', 'أن يكون مريضاً أو به أذى من رأسه', 'أن يحتاج إلى فعل محظور من محظورات الإحرام فيفعله'], ['Hij is in iḥrām', 'Hij is ziek of heeft last aan zijn hoofd', 'Hij moet iets doen wat in iḥrām verboden is, en doet het']],
    ['definitie', 25, 'الهلال والإحرام', 'Hilāl en iḥrām', ['الأهلة جمع هلال، وهو القمر في أول الشهر', 'الإحرام: حال من دخل في نسك الحج أو العمرة، وله محظورات'], ['Ahilla is het meervoud van hilāl: de maan aan het begin van de maand', 'Iḥrām: de toestand van wie aan de ḥajj of ʿumra begonnen is; daarin gelden bepaalde verboden'], 'toelichting'],
    ['bewijs', 27, 'سبب نزول آية الفدية', 'Aanleiding van het vers over de fidya', ['نزلت في كعب بن عجرة زمن الحديبية', 'والقمل يتناثر عن رأسه، فأمره النبي ﷺ أن يحلق ويفتدي'], ['Over Kaʿb ibn ʿUjra in de tijd van al-Ḥudaybiya', 'De luizen vielen van zijn hoofd; de Profeet ﷺ beval hem te scheren en fidya te betalen']]
  ],
  hadith: [
    { narrator: ['كعب بن عجرة', 'Kaʿb ibn ʿUjra'], text: 'مر بي النبي صلى الله عليه وسلم زمن الحديبية وأنا أوقد تحت قدر لي، والقمل يتناثر عن رأسي، فقال: أيؤذيك هوامك؟ قلت: نعم', nl: '"De Profeet ﷺ kwam bij mij langs in de tijd van al-Ḥudaybiya, terwijl ik een vuur stookte onder mijn kookpot en de luizen van mijn hoofd vielen. Hij zei: Hebben je beestjes je last? Ik zei: ja."', note: ['أورده ابن العربي، ثم قال: فأمره النبي ﷺ أن يحلق ويصوم ثلاثة أيام أو يطعم ستة مساكين أو ينسك نسيكة، أي يذبح شاة.', 'Aangehaald door Ibn al-ʿArabī, die vervolgt: de Profeet ﷺ beval hem te scheren en drie dagen te vasten, of zes armen te voeden, of een offer te brengen, dat wil zeggen een schaap te slachten.'], pages: [27] }
  ],
  persons: [
    ['ash-shafii', 'text', [26], 'قال بوجوب العمرة.', 'Hield de ʿumra voor verplicht.'],
    ['ibn-abbas', 'text', [26], 'يؤثر عنه وجوب العمرة.', 'Van hem wordt overgeleverd dat de ʿumra verplicht is.'],
    ['malik', 'text', [26], 'مال إلى أن العمرة تطوع.', 'Neigde ertoe dat de ʿumra vrijwillig is.'],
    ['abu-hanifa', 'text', [26], 'مال إلى أن العمرة تطوع.', 'Neigde ertoe dat de ʿumra vrijwillig is.']
  ],
  subtleties: [
    [25, 'لماذا خص الحج بالذكر؟', 'Waarom de ḥajj apart?', 'الحج داخل في عموم ﴿مواقيت للناس﴾، وإنما خص بالذكر لإبطال ما كانت العرب تفعله من الحج بالعدد وتبديل الشهور.', 'De ḥajj valt al onder ﴿tijdsaanduidingen voor de mensen﴾; hij wordt apart genoemd om af te rekenen met de Arabische gewoonte de ḥajj volgens telling te verrichten en maanden te verschuiven.'],
    [26, 'أبطل الفعل والقول', 'Doen én zeggen ongeldig', 'قال ابن العربي: فأبطل الله تعالى فعلهم وقولهم، فلم يبطل الفعل وحده، بل القول أيضاً.', 'Ibn al-ʿArabī: Allah verklaarde hun doen en hun zeggen ongeldig; niet alleen de handeling, maar ook wat zij erover zeiden.'],
    [26, 'الحكمة في تغير القمر', 'De wijsheid van een veranderende maan', 'خالف الله بين القمر والشمس: الشمس دائمة على حالة واحدة، والقمر يزيد وينقص فيعلم به الناس الأوقات.', 'Allah maakte maan en zon verschillend: de zon blijft gelijk, de maan groeit en krimpt, en zo kennen mensen de tijden.'],
    [26, 'النية لا تجعل الفعل براً', 'Een goede bedoeling maakt iets nog geen vroomheid', 'فعلوه تعبداً وظناً أنه بر، ومع ذلك نفى الله أنه بر، لأنه لم يشرعه.', 'Ze deden het als aanbidding en dachten dat het vroom was; toch ontkende Allah dat, omdat Hij het niet had voorgeschreven.'],
    [26, 'دلالة الإشارة', 'Wat het vers aanwijst', 'سياق الآية في البيوت، ويستفاد من إشارتها قاعدة عامة: أن يسلك الإنسان في كل أمر أقرب طريق وأسهله يحصل به مقصوده.', 'Het vers gaat over huizen, maar uit de aanwijzing volgt een algemene regel: neem in elke zaak de kortste en gemakkelijkste weg die het doel bereikt.'],
    [26, 'اقتران العمرة بالحج', 'De ʿumra naast de ḥajj', 'من استدل بالآية على وجوب العمرة نظر إلى الاقتران، وأجاب ابن العربي أن الاقتران في الإتمام لا في الابتداء.', 'Wie met het vers de plicht van de ʿumra bewijst, kijkt naar het samen genoemd worden; Ibn al-ʿArabī antwoordt dat dat over het voltooien gaat, niet over het beginnen.'],
    [27, 'الإتمام يلزم في التطوع أيضاً', 'Ook vrijwillig moet afgemaakt worden', 'لو حج عشر حجج أو اعتمر عشر عمر لزمه الإتمام في جميعها، فالأمر بالإتمام لا يميز بين الفرض وغيره.', 'Wie tien keer de ḥajj of ʿumra begint, moet ze alle tien voltooien: het bevel tot voltooien maakt geen onderscheid tussen plicht en vrijwillig.'],
    [27, 'ترتيب الآية وترتيب الفضل', 'De volgorde in het vers en de volgorde in rang', 'ذكرت الآية الصيام ثم الصدقة ثم النسك، والأفضل في المذكرات بالعكس: النسك ثم الصدقة ثم الصيام، مع التخيير بينها.', 'Het vers noemt vasten, aalmoes, offer; volgens de notities is de rangorde omgekeerd: offer, aalmoes, vasten. Men mag vrij kiezen.'],
    [27, 'من الواقعة إلى القاعدة', 'Van het voorval naar de regel', 'نزلت الآية في كعب بن عجرة والقمل في رأسه، ثم عمت كل مريض احتاج إلى فعل محظور من محظورات الإحرام.', 'Het vers kwam over Kaʿb ibn ʿUjra met luizen op zijn hoofd, maar geldt voor elke zieke die iets verbodens in iḥrām moet doen.']
  ],
  rules: [
    [26, 'كل من تعبد بعبادة لم يشرعها الله ولا رسوله فهو متعبد ببدعة', 'Wie aanbidt met wat Allah en Zijn Boodschapper niet voorschreven, aanbidt met een bidʿa', 'لذلك نفى الله البر عن إتيان البيوت من ظهورها.', 'Daarom ontkende Allah dat het vroom is huizen van achteren binnen te gaan.'],
    [26, 'التيسير قاعدة من قواعد الشرع', 'Verlichting is een grondregel van de sharīʿa', '﴿يريد الله بكم اليسر ولا يريد بكم العسر﴾.', '﴿Allah wil voor jullie het gemak en niet de moeite﴾.', 'الأمر بإتيان البيوت من أبوابها.', 'Het bevel om door de deur naar binnen te gaan.'],
    [26, 'تخصيص فرد من العام بالذكر لا بد له من فائدة', 'Iets apart noemen dat al onder het algemene valt, heeft een reden', 'خص الحج مع دخوله في ﴿مواقيت للناس﴾، وفائدته إبطال الحج بالعدد.', 'De ḥajj wordt apart genoemd hoewel hij onder ﴿tijdsaanduidingen voor de mensen﴾ valt; de reden is het tellen af te schaffen.'],
    [26, 'الاقتران في حكم لا يقتضي الاقتران في غيره', 'Samen genoemd bij één oordeel betekent niet samen bij een ander', 'قرنت العمرة بالحج في وجوب الإتمام، فلا يلزم اقترانهما في وجوب الابتداء.', 'De ʿumra staat naast de ḥajj in de plicht tot voltooien; dat betekent niet dat ze ook samen verplicht zijn om te beginnen.'],
    [27, 'من شرع في الحج أو العمرة لزمه إتمامه', 'Wie aan ḥajj of ʿumra begint, moet die afmaken', 'ولو حج عشر حجج أو اعتمر عشر عمر.', 'Ook bij tien keer ḥajj of tien keer ʿumra.'],
    [27, 'من احتاج إلى محظور من محظورات الإحرام فعله وافتدى', 'Wie iets verbodens in iḥrām nodig heeft, doet het en betaalt fidya', 'أخذاً من قصة كعب بن عجرة وعموم ﴿فمن كان منكم مريضاً﴾.', 'Afgeleid uit het verhaal van Kaʿb ibn ʿUjra en het algemene ﴿wie van jullie ziek is﴾.', 'الحلق للقمل أو المرض.', 'Scheren wegens luizen of ziekte.'],
    [27, '«أو» في الفدية للتخيير', '"Of" bij de fidya geeft keuze', '﴿ففدية من صيام أو صدقة أو نسك﴾: فهو مخير.', '﴿dan een losprijs van vasten, een aalmoes of een offer﴾: hij mag kiezen.']
  ],
  disputes: [
    { page: 26, q: ['هل العمرة واجبة؟', 'Is de ʿumra verplicht?'], views: [['الشافعي: واجبة، ويؤثر عن ابن عباس', 'Ash-Shāfiʿī: verplicht; ook van Ibn ʿAbbās overgeleverd'], ['جابر بن عبد الله: تطوع، وإليه مال مالك وأبو حنيفة', 'Jābir ibn ʿAbdallāh: vrijwillig; daartoe neigden Mālik en Abū Ḥanīfa']], preferred: ['لم ترجح المذكرات قولاً صراحة، لكن ابن العربي قرر أن ﴿وأتموا الحج والعمرة لله﴾ ليس فيها حجة للوجوب، لأنها في الإتمام لا في الابتداء.', 'De notities kiezen niet uitdrukkelijk, maar Ibn al-ʿArabī stelt dat ﴿Voltooit de ḥajj en de ʿumra voor Allah﴾ geen bewijs voor de plicht is, omdat het over voltooien gaat en niet over beginnen.'], fruit: ['وعلى القولين يلزم إتمام ما شرع فيه، فلو اعتمر عشر عمر لزمه الإتمام في جميعها.', 'Op beide meningen moet men afmaken wat men begon: wie tien keer de ʿumra begint, moet ze alle tien voltooien.'] }
  ],
  pitfalls: [
    [26, 'من فعل شيئاً تعبداً وظن أنه بر فهو بر.', 'Wie iets als aanbidding doet en denkt dat het vroom is, doet iets vrooms.', 'ليس ببر ما لم يشرعه الله، ومن تعبد بما لم يشرعه الله ولا رسوله فهو متعبد ببدعة.', 'Wat Allah niet voorschreef is geen vroomheid; wie daarmee aanbidt, aanbidt met een bidʿa.'],
    [26, 'المشقة في العبادة مقصودة لذاتها، فالأصعب أبر.', 'Moeite in aanbidding is een doel op zich; hoe zwaarder, hoe vromer.', 'أمرهم الله بإتيان البيوت من أبوابها لما فيه من السهولة، والتيسير قاعدة من قواعد الشرع.', 'Allah beval hun door de deur te gaan omdat dat gemakkelijk is; verlichting is een grondregel van de sharīʿa.'],
    [26, 'الحج داخل في ﴿مواقيت للناس﴾ فذكره بعدها تكرار بلا فائدة.', 'De ḥajj valt al onder ﴿tijdsaanduidingen voor de mensen﴾, dus hem nog eens noemen is zinloze herhaling.', 'فائدته إبطال حج العرب بالعدد وتبديل الشهور، وجعله مقروناً بالرؤية.', 'Het doel is de Arabische ḥajj volgens telling en het verschuiven van maanden af te schaffen en de ḥajj aan het zien te koppelen.'],
    [26, 'اقتران العمرة بالحج في ﴿وأتموا الحج والعمرة لله﴾ دليل قاطع على وجوبها.', 'Dat de ʿumra naast de ḥajj staat in ﴿Voltooit de ḥajj en de ʿumra﴾, bewijst zeker dat ze verplicht is.', 'قال ابن العربي: ليس فيها حجة للوجوب، لأن الاقتران في الإتمام لا في الابتداء.', 'Ibn al-ʿArabī: dat is geen bewijs voor de plicht, want ze staan samen bij het voltooien, niet bij het beginnen.'],
    [27, 'من شرع في عمرة تطوع فله أن يقطعها.', 'Wie aan een vrijwillige ʿumra begon, mag die afbreken.', 'الآية لإلزام الإتمام، فلو اعتمر عشر عمر لزمه الإتمام في جميعها.', 'Het vers legt het voltooien op: wie tien keer ʿumra begint, moet ze alle tien afmaken.'],
    [27, 'خصال الفدية مرتبة: لا ينتقل إلى الصدقة إلا إذا عجز عن الصيام.', 'De fidya heeft een vaste volgorde: pas als vasten niet lukt, mag men een aalmoes geven.', 'هو مخير بينها، والنسك أفضل ثم الصدقة ثم الصيام.', 'Men mag vrij kiezen; het offer is het beste, dan de aalmoes, dan het vasten.']
  ],
  ayat: [
    [25, 'يسألونك عن الأهلة قل هي مواقيت للناس والحج', 'الأهلة مواقيت للناس، وتخصيص الحج لإبطال الحج بالعدد (البقرة: 189).', 'De manen als tijdsaanduiding, en de ḥajj apart om het tellen af te schaffen (al-Baqara 189).'],
    [26, 'وليس البر بأن تأتوا البيوت من ظهورها', 'إبطال ما تعبدوا به من ترك دخول البيوت من أبوابها في الإحرام (البقرة: 189).', 'Afwijzing van de aanbidding om in iḥrām niet door de deur naar binnen te gaan (al-Baqara 189).'],
    [26, 'ولكن البر من اتقى وأتوا البيوت من أبوابها', 'الأمر بإتيان البيوت من أبوابها لما فيه من السهولة.', 'Het bevel door de deur naar binnen te gaan, omdat dat gemakkelijk is.'],
    [26, 'يريد الله بكم اليسر ولا يريد بكم العسر', 'دليل قاعدة التيسير، وقد مر في آية الصيام (البقرة: 185).', 'Bewijs voor de regel van verlichting, eerder genoemd bij het vastenvers (al-Baqara 185).'],
    [26, 'وأتموا الحج والعمرة لله', 'إلزام إتمام الحج والعمرة، والخلاف في وجوب العمرة (البقرة: 196).', 'Plicht om ḥajj en ʿumra te voltooien, en het verschil over de plicht van de ʿumra (al-Baqara 196).'],
    [26, 'وأقيموا الصلاة وآتوا الزكاة', 'مثال لابتداء الإيجاب، احتج به ابن العربي.', 'Voorbeeld van een verplichting om te beginnen, door Ibn al-ʿArabī aangevoerd.'],
    [27, 'ولله على الناس حج البيت من استطاع إليه سبيلاً', 'ابتداء إيجاب الحج (آل عمران)، احتج به ابن العربي.', 'De verplichting om de ḥajj te beginnen (Āl ʿImrān), door Ibn al-ʿArabī aangevoerd.'],
    [27, 'فمن كان منكم مريضاً أو به أذى من رأسه ففدية من صيام أو صدقة أو نسك', 'فدية الأذى، ونزلت في كعب بن عجرة (البقرة: 196).', 'De fidya bij last, geopenbaard over Kaʿb ibn ʿUjra (al-Baqara 196).']
  ],
  review: [
    ['ما سبب نزول ﴿يسألونك عن الأهلة﴾؟', 'Wat is de aanleiding van ﴿Zij vragen je naar de nieuwe manen﴾?'],
    ['فيم تكون الأهلة مواقيت للناس عند ابن العربي؟', 'Waarvoor geven de manen volgens Ibn al-ʿArabī de tijd aan?'],
    ['ما فائدة تخصيص الحج بالذكر في الآية؟', 'Waarom wordt de ḥajj in het vers apart genoemd?'],
    ['لماذا جعل الله القمر يزيد وينقص بخلاف الشمس؟', 'Waarom laat Allah de maan groeien en krimpen, anders dan de zon?'],
    ['ماذا كان يفعل الأنصار وغيرهم إذا أحرموا؟ ولماذا لم يكن براً؟', 'Wat deden de Anṣār en anderen in iḥrām, en waarom was dat geen vroomheid?'],
    ['ما القاعدة الشرعية المستفادة من ﴿وأتوا البيوت من أبوابها﴾؟ وما إشارتها؟', 'Welke grondregel volgt uit ﴿gaat de huizen door hun deuren binnen﴾, en wat wijst het vers aan?'],
    ['ما الأقوال في وجوب العمرة؟ ومن قال بكل منها؟', 'Welke meningen zijn er over de plicht van de ʿumra, en van wie?'],
    ['لماذا قال ابن العربي إن ﴿وأتموا الحج والعمرة لله﴾ ليست حجة للوجوب؟', 'Waarom is ﴿Voltooit de ḥajj en de ʿumra voor Allah﴾ volgens Ibn al-ʿArabī geen bewijs voor de plicht?'],
    ['ما الفرق بين الأمر بالابتداء والأمر بالإتمام؟ مثل لكل منهما.', 'Wat is het verschil tussen een bevel om te beginnen en een bevel om te voltooien? Geef van elk een voorbeeld.'],
    ['في من نزلت آية فدية الأذى؟ وما قصته؟', 'Over wie kwam het vers over de fidya, en wat is zijn verhaal?'],
    ['ما خصال فدية الأذى؟ وما ترتيبها في الفضل؟', 'Wat zijn de mogelijkheden van de fidya, en wat is hun rangorde?'],
    ['ما الحكم العام المستفاد من قصة كعب بن عجرة؟', 'Welk algemeen oordeel volgt uit het verhaal van Kaʿb ibn ʿUjra?']
  ],
  quiz: [
    { type: 'mc', page: 25, q: ['ما سبب نزول ﴿يسألونك عن الأهلة﴾؟', 'Wat is de aanleiding van ﴿Zij vragen je naar de nieuwe manen﴾?'], options: [['سؤال أناس عن زيادة الأهلة ونقصانها', 'سؤال عن وقت الحج', 'سؤال عن الصيام في السفر', 'سؤال عن القتال في الشهر الحرام'], ['mensen vroegen naar de groei en krimp van de maan', 'een vraag naar de tijd van de ḥajj', 'een vraag over vasten op reis', 'een vraag over strijd in de heilige maand']], answer: 0 },
    { type: 'mc', page: 26, q: ['لماذا خص الحج بالذكر في ﴿قل هي مواقيت للناس والحج﴾؟', 'Waarom wordt de ḥajj apart genoemd in ﴿Zeg: het zijn tijdsaanduidingen voor de mensen en voor de ḥajj﴾?'], options: [['لأن العرب كانت تحج بالعدد وتبدل الشهور، فجعله الله مقروناً بالرؤية', 'لأن الحج أفضل العبادات', 'لأن الحج لا يدخل في مواقيت الناس', 'لأن الحج يكون بالشمس'], ['omdat de Arabieren volgens telling de ḥajj verrichtten en maanden verschoven; Allah koppelde hem aan het zien', 'omdat de ḥajj de beste aanbidding is', 'omdat de ḥajj niet onder de tijden van de mensen valt', 'omdat de ḥajj zich naar de zon richt']], answer: 0 },
    { type: 'tf', page: 26, q: ['الحج داخل في عموم ﴿مواقيت للناس﴾.', 'De ḥajj valt onder het algemene ﴿tijdsaanduidingen voor de mensen﴾.'], answer: 0, explain: ['ولذلك سأل ابن العربي عن فائدة تخصيصه مع دخوله في عموم اللفظ الأول.', 'Daarom vraagt Ibn al-ʿArabī naar het nut van het apart noemen, terwijl hij al onder het eerste algemene woord valt.'] },
    { type: 'mc', page: 26, q: ['بم خالف الله بين القمر والشمس كما في المذكرات؟', 'Waarin maakte Allah volgens de notities de maan anders dan de zon?'], options: [['القمر يزيد وينقص والشمس دائمة على حالة واحدة', 'الشمس تزيد وتنقص والقمر ثابت', 'القمر للحج والشمس للصوم', 'لا فرق بينهما في المواقيت'], ['de maan groeit en krimpt, de zon blijft in één toestand', 'de zon groeit en krimpt, de maan blijft gelijk', 'de maan voor de ḥajj, de zon voor het vasten', 'voor de tijden is er geen verschil']], answer: 0 },
    { type: 'mc', page: 26, q: ['من الذين كانوا إذا أحرموا لم يدخلوا البيوت من أبوابها؟', 'Wie gingen in iḥrām de huizen niet door de deur binnen?'], options: [['الأنصار وغيرهم من العرب', 'اليهود', 'أهل مكة خاصة', 'المهاجرون بعد الهجرة'], ['de Anṣār en andere Arabieren', 'de joden', 'alleen de mensen van Mekka', 'de muhājirūn na de hijra']], answer: 0 },
    { type: 'mc', page: 26, q: ['لماذا لم يكن ترك دخول البيوت من أبوابها براً؟', 'Waarom was het niet door de deur binnengaan geen vroomheid?'], options: [['لأن الله لم يشرعه، ومن تعبد بما لم يشرع فهو متعبد ببدعة', 'لأنه كان فيه ضرر بالبيوت', 'لأنه كان قبل فرض الحج', 'لأنهم لم يكونوا محرمين'], ['omdat Allah het niet voorschreef, en wie daarmee aanbidt, doet een bidʿa', 'omdat het de huizen beschadigde', 'omdat het vóór de plicht van de ḥajj was', 'omdat ze niet in iḥrām waren']], answer: 0 },
    { type: 'tf', page: 26, q: ['أمرهم الله أن يأتوا البيوت من أبوابها لما فيه من السهولة عليهم.', 'Allah beval hun door de deur naar binnen te gaan, omdat dat gemakkelijk voor hen was.'], answer: 0, explain: ['والتيسير قاعدة من قواعد الشرع.', 'Verlichting is een grondregel van de sharīʿa.'] },
    { type: 'mc', page: 26, q: ['ما الذي يستفاد من إشارة ﴿وأتوا البيوت من أبوابها﴾؟', 'Wat volgt uit de aanwijzing van ﴿gaat de huizen door hun deuren binnen﴾?'], options: [['أن يأتي الإنسان كل أمر من الطريق السهل القريب الذي يحصل به مقصوده', 'أن البيوت لا تدخل إلا بإذن', 'أن المحرم لا يدخل البيوت', 'أن الأبواب من شعائر الحج'], ['dat men elke zaak benadert via de gemakkelijke, korte weg die het doel bereikt', 'dat men huizen alleen met toestemming binnengaat', 'dat wie in iḥrām is geen huizen binnengaat', 'dat deuren tot de riten van de ḥajj horen']], answer: 0 },
    { type: 'mc', page: 26, q: ['من قال: العمرة واجبة، كما نقل ابن العربي؟', 'Wie zei volgens Ibn al-ʿArabī: de ʿumra is verplicht?'], options: [['الشافعي', 'مالك', 'أبو حنيفة', 'جابر بن عبد الله'], ['ash-Shāfiʿī', 'Mālik', 'Abū Ḥanīfa', 'Jābir ibn ʿAbdallāh']], answer: 0, explain: ['ويؤثر ذلك عن ابن عباس.', 'Dat wordt ook van Ibn ʿAbbās overgeleverd.'] },
    { type: 'mc', page: 26, q: ['من قال: العمرة تطوع؟', 'Wie zei: de ʿumra is vrijwillig?'], options: [['جابر بن عبد الله', 'ابن عباس', 'الشافعي', 'كعب بن عجرة'], ['Jābir ibn ʿAbdallāh', 'Ibn ʿAbbās', 'ash-Shāfiʿī', 'Kaʿb ibn ʿUjra']], answer: 0, explain: ['وإليه مال مالك وأبو حنيفة.', 'Daartoe neigden Mālik en Abū Ḥanīfa.'] },
    { type: 'tf', page: 26, q: ['يرى ابن العربي أن ﴿وأتموا الحج والعمرة لله﴾ حجة على وجوب العمرة.', 'Volgens Ibn al-ʿArabī bewijst ﴿Voltooit de ḥajj en de ʿumra voor Allah﴾ dat de ʿumra verplicht is.'], answer: 1, explain: ['قال: ليس فيها حجة للوجوب، لأنها قرنت بالحج في الإتمام لا في الابتداء.', 'Hij zegt: het is geen bewijs, want ze staat naast de ḥajj bij het voltooien, niet bij het beginnen.'] },
    { type: 'mc', page: 27, q: ['بأي آية مثل ابن العربي لابتداء إيجاب الحج؟', 'Met welk vers illustreert Ibn al-ʿArabī de verplichting om de ḥajj te beginnen?'], options: [['﴿ولله على الناس حج البيت من استطاع إليه سبيلاً﴾', '﴿وأتموا الحج والعمرة لله﴾', '﴿الحج أشهر معلومات﴾', '﴿وأذن في الناس بالحج﴾'], ['﴿En Allah heeft de mensen de ḥajj naar het Huis opgelegd…﴾', '﴿Voltooit de ḥajj en de ʿumra voor Allah﴾', '﴿De ḥajj is in bekende maanden﴾', '﴿En roep onder de mensen op tot de ḥajj﴾']], answer: 0 },
    { type: 'tf', page: 27, q: ['من حج عشر حجج أو اعتمر عشر عمر لزمه الإتمام في جميعها.', 'Wie tien keer de ḥajj of tien keer de ʿumra begint, moet ze allemaal voltooien.'], answer: 0 },
    { type: 'mc', page: 27, q: ['في من نزلت ﴿فمن كان منكم مريضاً أو به أذى من رأسه﴾؟', 'Over wie kwam ﴿Wie van jullie ziek is of last aan zijn hoofd heeft﴾?'], options: [['كعب بن عجرة', 'عدي بن حاتم', 'جابر بن عبد الله', 'ابن عباس'], ['Kaʿb ibn ʿUjra', 'ʿAdī ibn Ḥātim', 'Jābir ibn ʿAbdallāh', 'Ibn ʿAbbās']], answer: 0 },
    { type: 'mc', page: 27, q: ['متى وقعت قصة كعب بن عجرة؟', 'Wanneer speelde het verhaal van Kaʿb ibn ʿUjra?'], options: [['زمن الحديبية', 'في حجة الوداع', 'يوم فتح مكة', 'في غزوة بدر'], ['in de tijd van al-Ḥudaybiya', 'tijdens de afscheidsbedevaart', 'op de dag van de verovering van Mekka', 'bij de slag van Badr']], answer: 0 },
    { type: 'mc', page: 27, q: ['كم مسكيناً يطعم في فدية الأذى؟', 'Hoeveel armen voedt men bij de fidya?'], options: [['ستة', 'ثلاثة', 'عشرة', 'ستين'], ['zes', 'drie', 'tien', 'zestig']], answer: 0 },
    { type: 'mc', page: 27, q: ['كم يوماً يصوم في فدية الأذى؟', 'Hoeveel dagen vast men bij de fidya?'], options: [['ثلاثة أيام', 'ستة أيام', 'عشرة أيام', 'شهرين'], ['drie dagen', 'zes dagen', 'tien dagen', 'twee maanden']], answer: 0 },
    { type: 'mc', page: 27, q: ['ما أفضل خصال فدية الأذى في المذكرات؟', 'Wat is volgens de notities de beste mogelijkheid van de fidya?'], options: [['النسك', 'الصدقة', 'الصيام', 'كلها سواء'], ['het offer', 'de aalmoes', 'het vasten', 'ze zijn allemaal gelijk']], answer: 0, explain: ['النسك أفضل، ثم الصدقة، ثم الصيام، وهو مخير.', 'Het offer is het beste, dan de aalmoes, dan het vasten; men mag kiezen.'] },
    { type: 'tf', page: 27, q: ['خصال فدية الأذى على الترتيب، فلا يجوز النسك إلا بعد العجز عن الصيام.', 'De fidya heeft een vaste volgorde: een offer mag pas als vasten niet lukt.'], answer: 1, explain: ['هو مخير بينها.', 'Men mag vrij kiezen.'] }
  ],
  note: ['المصدر: المذكرات ص 25–27. في ص 27 عبارة «ولم يأمر غيره» في قصة كعب بن عجرة لم يتضح المراد بها، فلم تُبنَ عليها مسألة. ولم تذكر المذكرات تخريج حديث كعب.', 'Bron: notities p. 25–27. Op p. 27 staat in het verhaal van Kaʿb ibn ʿUjra «ولم يأمر غيره» ("en hij beval het geen ander"); wat daarmee bedoeld is, is niet duidelijk, dus er is niets op gebouwd. De notities geven geen bron (takhrīj) voor de hadith van Kaʿb.']
})
