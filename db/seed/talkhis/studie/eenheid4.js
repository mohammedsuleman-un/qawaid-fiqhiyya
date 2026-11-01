// Hoofdstukkaart eenheid 4 van تلخيص جمع الجوامع: الكتاب والمنطوق والمفهوم (p. 26–35).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p026–p035.html).
import { kaart } from './kaart.js'

export default kaart({
  unit: 4,
  subtitle: ['ثمانية فصول: تعريف القرآن والقراءات، ثم المنطوق والمفهوم بأنواعهما وحجية المفاهيم وترتيبها والحصر', 'Acht onderdelen: de definitie van de Koran en de leeswijzen, daarna het uitgesprokene en het begrepene, of begrepen betekenissen bewijs zijn, hun rangorde en de beperking (ḥaṣr)'],
  summary: [
    'يبدأ الكتاب الأول بتعريف القرآن وقيوده، والبسملة، والقراءات السبع والعشر والشاذ، ومنع ورود ما لا معنى له وصرف اللفظ عن ظاهره بلا دليل، وبقاء المجمل، وإفادة الأدلة النقلية اليقين. ثم المنطوق (نص وظاهر) وأقسام الدلالة (مطابقة وتضمن والتزام، واقتضاء وإشارة)، ثم المفهوم: الموافقة بدرجتيها والخلاف في دلالتها، والمخالفة وشروطها وأنواعها، وحجية المفاهيم، وترتيبها، وصيغ الحصر وإنما.',
    'Het eerste boek begint met de definitie van de Koran en haar onderdelen, de basmala, de zeven en tien leeswijzen en de afwijkende (shādhdh), dat er niets zonder betekenis in staat en dat men de woorden niet zonder bewijs van hun duidelijke betekenis afwendt, of er onduidelijke woorden over zijn, en wanneer overgeleverde bewijzen zekerheid geven. Daarna het uitgesprokene (manṭūq: naṣṣ en ẓāhir) en de soorten aanduiding, en het begrepene (mafhūm): de overeenkomende betekenis in twee graden, de tegengestelde betekenis met voorwaarden en soorten, of deze betekenissen bewijs zijn, hun rangorde en de vormen van beperking, waaronder innamā.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 26 إلى 35.', 'Bladzijde 26 tot 35.'],
    root: [0, 'الكتاب والمنطوق والمفهوم', 'De Koran, manṭūq en mafhūm', 'الوحدة الرابعة', 'Eenheid 4'],
    nodes: [
      [26, 'تعريف القرآن', 'Definitie van de Koran', 'ص 26–28', 'p. 26–28', [['البسملة', 'de basmala'], ['القراءات', 'de leeswijzen'], ['الظاهر والمجمل', 'duidelijk en onduidelijk']]],
      [28, 'المنطوق', 'Het uitgesprokene', 'ص 28–29', 'p. 28–29', [['نص وظاهر', 'naṣṣ en ẓāhir'], ['مطابقة وتضمن والتزام', 'drie soorten aanduiding'], ['اقتضاء وإشارة', 'iqtiḍāʾ en ishāra']]],
      [29, 'مفهوم الموافقة', 'De overeenkomende betekenis', 'ص 29–30', 'p. 29–30', [['فحوى الخطاب ولحنه', 'faḥwā en laḥn al-khiṭāb'], ['قياسية أم لفظية', 'analogie of taal?']]],
      [30, 'مفهوم المخالفة', 'De tegengestelde betekenis', 'ص 30–33', 'p. 30–33', [['شروطه', 'voorwaarden'], ['أنواعه', 'soorten'], ['الحصر', 'beperking']]],
      [33, 'حجية المفاهيم', 'Zijn ze bewijs?', 'ص 33–34', 'p. 33–34', [['سبعة مذاهب', 'zeven meningen']]],
      [34, 'ترتيب المفاهيم وإنما', 'Rangorde en innamā', 'ص 34–35', 'p. 34–35', [['الغاية ثم الشرط', 'doel, dan voorwaarde'], ['إنما وأنما', 'innamā en annamā']]]
    ]
  },
  points: [
    [26, 'القرآن: اللفظ المنزل على محمد ﷺ للإعجاز بسورة منه، المتعبد بتلاوته.', 'De Koran: de neergezonden woorden aan Muḥammad ﷺ, als onnavolgbaar wonder met één soera ervan, waarvan het reciteren aanbidding is.'],
    [26, 'ما نُقل آحاداً ليس قرآناً، والقراءات السبع متواترة.', 'Wat via enkele overleveraars kwam, is geen Koran; de zeven leeswijzen zijn mutawātir.'],
    [27, 'الصحيح أن الشاذ ما وراء العشرة، ولا تجوز القراءة به، لكنه يجري مجرى الآحاد في الاحتجاج.', 'Volgens het juiste is afwijkend wat buiten de tien valt; men mag het niet reciteren, maar het geldt als bewijs zoals een āḥād-hadith.'],
    [27, 'لا يجوز ورود ما لا معنى له في الكتاب والسنة، ولا ما يُعنى به غير ظاهره إلا بدليل.', 'In Koran en sunna staat niets zonder betekenis, en niets dat iets anders betekent dan het duidelijke zonder bewijs.'],
    [28, 'المنطوق ما دل عليه اللفظ في محل النطق، وهو نص إن لم يحتمل غيره، وظاهر إن احتمل مرجوحاً.', 'Manṭūq is wat de woorden zelf zeggen: naṣṣ als er maar één betekenis is, ẓāhir als een zwakkere ook kan.'],
    [29, 'المفهوم ما دل عليه اللفظ لا في محل النطق: موافقة إن وافق حكم المنطوق، ومخالفة إن خالفه.', 'Mafhūm is wat buiten de woorden zelf begrepen wordt: overeenkomend als het oordeel gelijk is, tegengesteld als het verschilt.'],
    [31, 'شرط مفهوم المخالفة ألا يظهر لتخصيص المذكور فائدة غير نفي الحكم عن المسكوت.', 'Voorwaarde voor de tegengestelde betekenis: het noemen van iets heeft geen ander doel dan het oordeel van het niet-genoemde te ontkennen.'],
    [33, 'المفاهيم إلا اللقب حجة عند الجمهور، لغةً على الأقوى.', 'Volgens de meerderheid zijn alle begrepen betekenissen bewijs behalve die van de naam (laqab), en wel op grond van de taal.']
  ],
  terms: [
    ['القرآن', 'al-qurʾān', 26, 'اللفظ المنزل على محمد ﷺ للإعجاز بسورة منه المتعبد بتلاوته.', 'De neergezonden woorden aan Muḥammad ﷺ, onnavolgbaar met één soera, waarvan reciteren aanbidding is.', 'اللفظ يخرج الكلام النفسي، وللإعجاز يخرج الحديث القدسي والنبوي، والمتعبد بتلاوته يخرج منسوخ التلاوة.', '"Woorden" sluit het innerlijke spreken uit, "onnavolgbaar" de ḥadīth qudsī en de profetische hadith, "reciteren als aanbidding" wat qua tekst is opgeheven.'],
    ['القراءات السبع', 'al-qirāʾāt as-sabʿ', 26, 'قراءات نافع وابن كثير وأبي عمرو وابن عامر وعاصم وحمزة والكسائي، وهي متواترة.', 'De leeswijzen van Nāfiʿ, Ibn Kathīr, Abū ʿAmr, Ibn ʿĀmir, ʿĀṣim, Ḥamza en al-Kisāʾī; ze zijn mutawātir.'],
    ['القراءات العشر', 'al-qirāʾāt al-ʿashr', 27, 'السبع ومعها قراءات أبي جعفر ويعقوب وخلف.', 'De zeven plus die van Abū Jaʿfar, Yaʿqūb en Khalaf.'],
    ['القراءة الشاذة', 'al-qirāʾa ash-shādhdha', 27, 'ما وراء العشرة على الصحيح.', 'Wat volgens het juiste buiten de tien valt.', 'لا يُقرأ بها تعبداً، وتجري مجرى الآحاد.', 'Niet als aanbidding te reciteren; geldt als āḥād-overlevering.'],
    ['التأويل', 'at-taʾwīl', 27, 'صرف اللفظ عن معناه الظاهر بدليل.', 'Woorden met bewijs van hun duidelijke betekenis afwenden.', 'صحيح إن اجتمعت شروطه (الدليل والقرينة واحتمال اللفظ وعدم معارضة السياق)، وفاسد إن اختلت.', 'Juist als de voorwaarden vervuld zijn (bewijs, aanwijzing, de woorden laten het toe, de context spreekt het niet tegen), anders onjuist.'],
    ['المجمل', 'al-mujmal', 27, 'لفظ لا يُعرف معناه حتى يُبيَّن.', 'Woorden waarvan de betekenis pas duidelijk wordt na uitleg.'],
    ['المنطوق', 'al-manṭūq', 28, 'ما دل عليه اللفظ في محل النطق.', 'Wat de woorden zelf uitspreken.'],
    ['النص', 'an-naṣṣ', 28, 'ما أفاد معنى لا يحتمل غيره، كزيد.', 'Wat één betekenis heeft en niets anders toelaat, zoals een eigennaam.'],
    ['الظاهر', 'aẓ-ẓāhir', 28, 'ما احتمل معنى مرجوحاً مع الراجح، كالأسد.', 'Wat naast de sterke betekenis een zwakkere toelaat, zoals "leeuw" (dier, of dappere man).'],
    ['المركب والمفرد', 'al-murakkab wa-l-mufrad', 28, 'المركب ما دل جزؤه على جزء المعنى، كـ"كتاب الطالب"، والمفرد ما لم يدل جزؤه، كـ"زيد".', 'Samengesteld: een deel draagt een deel van de betekenis ("het boek van de student"); enkelvoudig: niet ("Zayd").'],
    ['دلالة المطابقة', 'dalālat al-muṭābaqa', 29, 'دلالة اللفظ على تمام معناه، كالأسد على الحيوان المفترس.', 'De woorden duiden hun volle betekenis aan.', 'وهي لفظية.', 'Dit is talig.'],
    ['دلالة التضمن', 'dalālat at-taḍammun', 29, 'دلالة اللفظ على جزء معناه، كالأسد على الحيوان.', 'De woorden duiden een deel van hun betekenis aan.', 'وفيها خلاف: هل هي لفظية أم لغوية، ورجح المصنف كونها لفظية.', 'Daarover is verschil: talig of taalkundig; volgens de notities koos de auteur talig.'],
    ['دلالة الالتزام', 'dalālat al-iltizām', 29, 'دلالة اللفظ على لازمه الذهني، كالأسد على القوة.', 'De woorden duiden aan wat er in gedachten onlosmakelijk bij hoort, zoals kracht bij "leeuw".', 'عقلية.', 'Rationeel.'],
    ['دلالة الاقتضاء', 'dalālat al-iqtiḍāʾ', 29, 'ما توقف صدق الكلام أو صحته على إضمار.', 'Als de zin pas waar of juist is met een weggelaten woord erbij.', 'كقوله تعالى ﴿واسأل القرية﴾ أي أهلها.', 'Zoals "vraag de stad", dat wil zeggen haar bewoners.'],
    ['دلالة الإشارة', 'dalālat al-ishāra', 29, 'دلالة الكلام على أمر لم يُقصد لذاته.', 'Wat de tekst aanduidt zonder dat het het eigenlijke doel is.', 'كالإشارة في ﴿وعلى المولود له﴾ إلى أن الأب أحق بالنسب.', 'Zoals "voor hem voor wie het kind geboren is" aanduidt dat de afstamming via de vader loopt.'],
    ['المفهوم', 'al-mafhūm', 29, 'ما دل عليه اللفظ لا في محل النطق.', 'Wat uit de woorden begrepen wordt, maar niet uitgesproken is.'],
    ['مفهوم الموافقة', 'mafhūm al-muwāfaqa', 29, 'أن يوافق حكم المسكوت حكم المنطوق.', 'Het niet-genoemde krijgt hetzelfde oordeel als het genoemde.', 'كتحريم الضرب من ﴿ولا تقل لهما أف﴾.', 'Zoals het verbod op slaan uit "zeg niet ‘oef’ tegen hen".'],
    ['فحوى الخطاب', 'faḥwā al-khiṭāb', 30, 'مفهوم الموافقة إن كان المسكوت أولى بالحكم.', 'Overeenkomende betekenis waarbij het niet-genoemde er nog meer recht op heeft.', 'كالضرب أولى بالتحريم من التأفف.', 'Slaan is nog sterker verboden dan "oef" zeggen.'],
    ['لحن الخطاب', 'laḥn al-khiṭāb', 30, 'مفهوم الموافقة إن كان المسكوت مساوياً.', 'Overeenkomende betekenis waarbij het niet-genoemde gelijk staat.', 'كإحراق مال اليتيم يساوي أكله.', 'Het bezit van een wees verbranden staat gelijk aan het opeten.'],
    ['مفهوم المخالفة (دليل الخطاب)', 'mafhūm al-mukhālafa', 30, 'أن يخالف حكم المسكوت حكم المنطوق.', 'Het niet-genoemde krijgt het tegenovergestelde oordeel.'],
    ['مفهوم الصفة', 'mafhūm aṣ-ṣifa', 32, 'أخذ حكم المسكوت من خلاف صفة المنطوق.', 'Het oordeel van het niet-genoemde volgt uit het ontbreken van de genoemde eigenschap.', 'في الغنم السائمة زكاة، فلا زكاة في المعلوفة.', '"Op grazende schapen is zakāt": dus niet op gevoerde.'],
    ['مفهوم اللقب', 'mafhūm al-laqab', 33, 'تخصيص اسم جامد بالحكم، وهو أضعف المفاهيم.', 'Een oordeel aan een naam verbinden; de zwakste begrepen betekenis.', 'ليس بحجة عند الجمهور.', 'Volgens de meerderheid geen bewijs.'],
    ['الحصر', 'al-ḥaṣr', 33, 'قصر الحكم على المحكوم عليه، وصيغه: إنما، والنفي والإثبات، وضمير الفصل، وتقديم المعمول.', 'Het oordeel beperken tot het genoemde; vormen: innamā, ontkenning plus uitzondering, het scheidende voornaamwoord en het voorop plaatsen van het object.'],
    ['الاختصاص', 'al-ikhtiṣāṣ', 35, 'ما يفيده تقديم المعمول عند البيانيين.', 'Wat het voorop plaatsen van het object volgens de retorici aanduidt.', 'وهو عند ابن الحاجب وأبي حيان الحصر نفسه، وفرّق بينهما والد المصنف.', 'Voor Ibn al-Ḥājib en Abū Ḥayyān hetzelfde als ḥaṣr; de vader van de auteur onderscheidt ze.']
  ],
  diagrams: [
    {
      type: 'tree',
      title: ['أقسام دلالة اللفظ', 'Soorten aanduiding'],
      intro: ['المنطوق والمفهوم كما في الصفحات 28–30.', 'Manṭūq en mafhūm, bladzijde 28–30.'],
      root: [28, 'دلالة اللفظ', 'Aanduiding door woorden'],
      nodes: [
        [28, 'المنطوق', 'Manṭūq', 'في محل النطق', 'in de woorden zelf', [
          [28, 'نص', 'Naṣṣ', '', '', []],
          [28, 'ظاهر', 'Ẓāhir', '', '', []],
          [29, 'اقتضاء', 'Iqtiḍāʾ', '', '', []],
          [29, 'إشارة', 'Ishāra', '', '', []]
        ]],
        [29, 'المفهوم', 'Mafhūm', 'لا في محل النطق', 'buiten de woorden', [
          [30, 'موافقة', 'Overeenkomend', '', '', [[30, 'فحوى: أولى', 'Faḥwā: sterker'], [30, 'لحن: مساوٍ', 'Laḥn: gelijk']]],
          [30, 'مخالفة', 'Tegengesteld', '', '', [[32, 'صفة وعلة وظرف وحال', 'eigenschap, reden, tijd/plaats, toestand'], [33, 'عدد وشرط وغاية', 'getal, voorwaarde, doel'], [33, 'حصر', 'beperking'], [33, 'لقب', 'naam']]]
        ]]
      ],
      page: 28
    },
    {
      type: 'steps',
      title: ['شروط مفهوم المخالفة', 'Voorwaarden voor de tegengestelde betekenis'],
      intro: ['ألا يظهر لتخصيص المذكور فائدة غير نفي الحكم عن المسكوت.', 'Het noemen heeft geen ander doel dan het niet-genoemde uit te sluiten.'],
      nodes: [
        [31, 'لم يُترك المسكوت لخوف أو جهل', 'Het niet-genoemde is niet weggelaten uit angst of onwetendheid', 'وهذا لا يكون في كلام الشارع', 'dat komt in de woorden van de Wetgever niet voor'],
        [31, 'لم يخرج المذكور مخرج الغالب', 'Het genoemde is niet "het gebruikelijke geval"', '﴿لا تأكلوا الربا أضعافاً مضاعفة﴾', '"verslind geen woeker, dubbel en dwars"'],
        [31, 'لم يكن جواباً عن سؤال', 'Het is geen antwoord op een vraag', 'الوضوء من لحوم الإبل', 'wuḍūʾ na kamelenvlees'],
        [31, 'لم يكن لحادثة', 'Het gaat niet om een concreet voorval', 'لزيد غنم سائمة', 'Zayd heeft grazende schapen'],
        [31, 'لم يكن للجهل بحكمه', 'Het is niet genoemd omdat de aangesprokene het oordeel niet kende', 'يعرف المعلوفة ويجهل السائمة', 'hij kent het oordeel over gevoerde dieren maar niet over grazende']
      ],
      page: 31
    },
    {
      type: 'cards',
      title: ['أنواع مفهوم المخالفة بأمثلتها', 'Soorten tegengestelde betekenis met voorbeelden'],
      intro: ['كما في الصفحتين 32–33.', 'Bladzijde 32–33.'],
      nodes: [
        [32, 'الصفة', 'Eigenschap', 'في الغنم السائمة زكاة', 'zakāt op grazende schapen'],
        [32, 'الظرف الزماني', 'Tijd', '﴿الحج أشهر معلومات﴾', '"de ḥajj is in bekende maanden"'],
        [33, 'الظرف المكاني', 'Plaats', '﴿وأنتم عاكفون في المساجد﴾', '"terwijl jullie in de moskeeën in afzondering zijn"'],
        [33, 'العدد', 'Getal', '﴿فاجلدوهم ثمانين جلدة﴾', '"geeft hun tachtig slagen"'],
        [33, 'الشرط', 'Voorwaarde', '﴿وإن كن أولات حمل فأنفقوا﴾', '"en als zij zwanger zijn, onderhoudt hen dan"'],
        [33, 'الغاية', 'Doel (tot…)', '﴿فلا تحل له حتى تنكح زوجاً غيره﴾', '"dan is zij hem niet toegestaan totdat zij met een ander trouwt"'],
        [33, 'الحصر', 'Beperking', 'إنما، لا… إلا، ضمير الفصل، تقديم المعمول', 'innamā, lā… illā, het scheidende voornaamwoord, het object voorop']
      ],
      page: 32
    },
    {
      type: 'steps',
      title: ['ترتيب المفاهيم عند التعارض', 'Rangorde van de begrepen betekenissen'],
      intro: ['لتسهيل الترجيح عند التعارض؛ ولم يذكر اللقب لأنه ليس بحجة عنده.', 'Om bij tegenstrijdigheid te kunnen kiezen; de naam ontbreekt omdat die voor hem geen bewijs is.'],
      nodes: [
        [34, 'الغاية', 'Doel', 'قيل منطوق، والحق مفهوم', 'sommigen: manṭūq; juist: mafhūm'],
        [34, 'الشرط', 'Voorwaarde', 'قال به بعض من لم يقل بالصفة', 'sommigen aanvaarden dit zonder de eigenschap'],
        [34, 'الصفة المناسبة', 'Passende eigenschap'],
        [35, 'مطلق الصفة غير العدد', 'Andere eigenschappen behalve getal', 'العلة والظرف والحال', 'reden, tijd/plaats, toestand'],
        [35, 'العدد', 'Getal', 'منع بعضهم حجيته', 'sommigen aanvaarden het niet'],
        [35, 'تقديم المعمول', 'Het object voorop', 'لدعوى البيانيين إفادته الاختصاص', 'omdat de retorici zeggen dat het ikhtiṣāṣ aanduidt']
      ],
      page: 34
    }
  ],
  sections: [
    [26, 'قيود تعريف القرآن', 'De onderdelen van de definitie', 'اللفظ: يخرج الكلام النفسي. المنزل على محمد ﷺ: يخرج ما نزل على غيره. للإعجاز: يخرج الحديث القدسي والنبوي. بسورة منه: لئلا يُفهم أن الإعجاز لا يكون إلا بمجموعه. المتعبد بتلاوته: يخرج منسوخ التلاوة.', '"Woorden" sluit het innerlijke spreken uit; "aan Muḥammad" wat aan andere profeten kwam; "als wonder" de ḥadīth qudsī en de profetische hadith; "met één soera" de gedachte dat alleen het geheel onnavolgbaar is; "reciteren als aanbidding" wat qua tekst is opgeheven.', 'وقوله "والمعني به هنا" إشارة إلى أن للكلام عند الأشاعرة أكثر من معنى: النفسي واللفظي.', '"Wat hier bedoeld is" wijst erop dat "spreken" voor de Ashʿarieten twee betekenissen heeft: innerlijk en verwoord.'],
    [26, 'البسملة', 'De basmala', 'البسملة من القرآن. ويُنسب للشافعي أنها آية في أول كل سورة غير براءة، والجمهور على أنها من القرآن في كل السور لكن ليست آية.', 'De basmala hoort bij de Koran. Aan ash-Shāfiʿī wordt toegeschreven dat ze een vers is aan het begin van elke soera behalve Barāʾa; de meerderheid zegt dat ze in alle soera’s bij de Koran hoort maar geen vers is.'],
    [26, 'تواتر القراءات', 'De overlevering van de leeswijzen', 'القراءات السبع متواترة، قيل فيما ليس من قبيل الأداء كالمد والإمالة وتخفيف الهمزة. وقال أبو شامة: والألفاظ المختلف فيها بين القراء كـ(ملك ومالك).', 'De zeven leeswijzen zijn mutawātir; volgens een mening niet wat de voordracht betreft (lengte, imāla, verzachting van de hamza). Abū Shāma: en ook niet de woorden waarin de lezers verschillen, zoals malik en mālik.', 'والصحيح أنها متواترة، والمقصود كيفية الأداء لا أصله، ويُحمل كلام أبي شامة على ذلك.', 'Juist: ook die zijn mutawātir; het gaat om de manier van voordragen, niet om het bestaan ervan; zo moet Abū Shāma begrepen worden.'],
    [27, 'الشاذ', 'De afwijkende leeswijze', 'لا تجوز القراءة بالشاذ تعبداً. والصحيح أنه ما وراء العشرة، وفاقاً للبغوي والشيخ الإمام، وقيل ما وراء السبعة. أما إجراؤه مجرى الآحاد فهو الصحيح: يحتج به وتؤخذ منه الأحكام.', 'Men mag de afwijkende niet als aanbidding reciteren. Juist: dat is wat buiten de tien valt (met al-Baghawī en de vader van de auteur); anderen: buiten de zeven. Maar het geldt wel als āḥād-overlevering: er volgen oordelen uit.'],
    [27, 'لا يرد في الكتاب ما لا معنى له', 'Niets zonder betekenis in de Koran', 'كلام الله ورسوله مفهوم معلوم المعنى، خلافاً للحشوية. ولا يرد ما يُعنى به غير ظاهره إلا بدليل، خلافاً للمرجئة.', 'Wat Allah en Zijn Boodschapper zeggen heeft een bekende betekenis, anders dan de "Ḥashwiyya" zeggen. Er staat niets met een andere dan de duidelijke betekenis zonder bewijs, anders dan de Murjiʾa zeggen.', 'والصحيح أن كل الفرق المخالفة للسنة لها حظ من التأويل الفاسد.', 'De notities: alle groepen die van de sunna afwijken, hebben een deel van de onjuiste taʾwīl.'],
    [27, 'بقاء المجمل غير مبين', 'Zijn er onduidelijke woorden gebleven?', 'ثلاثة أقوال: نعم مطلقاً (كـ"ألم" و"حم" وأثر عمر في الكلالة)، ولا مطلقاً لأن الله أكمل الدين، والأصح: لا يبقى المكلف بمعرفته، ويجوز فيما لا تكليف فيه، وهو تفصيل الجويني في البرهان.', 'Drie meningen: ja (zoals alif-lām-mīm, ḥā-mīm en de uitspraak van ʿUmar over de kalāla); nee, want Allah heeft de religie vervolmaakt; en het juiste: niet wat we moeten kennen, wel waar geen taklīf aan hangt (de indeling van al-Juwaynī in al-Burhān).', 'كان الأولى أن يقول "المكلف بالعمل به".', 'Beter was geweest: "wat we moeten uitvoeren".'],
    [28, 'الأدلة النقلية واليقين', 'Overgeleverde bewijzen en zekerheid', 'الحق أن الأدلة النقلية قد تفيد اليقين بانضمام تواتر أو غيره من القرائن، كثبوتها في الصحيحين.', 'Overgeleverde bewijzen kunnen zekerheid geven als er tawātur bij komt of andere aanwijzingen, zoals opname in de twee Ṣaḥīḥ’s.'],
    [29, 'المطابقة والتضمن والالتزام', 'Volledige, gedeeltelijke en noodzakelijke aanduiding', 'دلالة اللفظ على معناه مطابقة، وعلى جزئه تضمن، وعلى لازمه الذهني التزام. والأولى لفظية، والثنتان عقليتان.', 'De volle betekenis: muṭābaqa; een deel: taḍammun; wat er in gedachten bij hoort: iltizām. De eerste is talig, de andere twee rationeel.', 'وفي الحاشية: التضمن فيه خلاف هل هي لفظية أم لغوية، والمصنف رجح كونها لفظية (مع أنه عدّها عقلية قبل ذلك؛ يُراجع).', 'De notities: over taḍammun is verschil, talig of taalkundig, en de auteur koos talig (terwijl hij haar net rationeel noemde; nog te controleren).'],
    [30, 'دلالة مفهوم الموافقة', 'Waar de overeenkomende betekenis op rust', 'قال الشافعي والإمامان (الجويني والرازي): قياسية، من القياس الجلي. وقيل لفظية: فقال الغزالي والآمدي مجازية فُهمت من السياق والقرائن من إطلاق الأخص على الأعم، وقيل نُقل اللفظ إليها عرفاً.', 'Ash-Shāfiʿī, al-Juwaynī en ar-Rāzī: analogie (een duidelijke qiyās). Anderen: talig; al-Ghazālī en al-Āmidī: figuurlijk, begrepen uit de context (het specifieke genoemd, het algemene bedoeld); weer anderen: het woord heeft die betekenis door gebruik gekregen.'],
    [32, 'مانع المفهوم لا يمنع القياس', 'Wat de tegengestelde betekenis tegenhoudt, houdt qiyās niet tegen', 'هذه الموانع تمنع إعمال مفهوم المخالفة، لكن لا تمنع قياس المسكوت بالمنطوق، كقتل الصيد خطأً يقاس على ﴿ومن قتله منكم متعمداً﴾.', 'Deze beletsels verhinderen de tegengestelde betekenis, maar niet de analogie: het per ongeluk doden van wild wordt vergeleken met "wie het van jullie opzettelijk doodt".', 'وقيل يعمه المعروض، وقيل لا يعمه إجماعاً، والصحيح أن لا إجماع.', 'Sommigen: de genoemde woorden omvatten het al; anderen: volgens consensus niet; juist: er is geen consensus.'],
    [32, 'صور مفهوم الصفة', 'Vormen van de eigenschap', 'يكون بذكر الوصف والموصوف (الغنم السائمة أو سائمة الغنم)، لا بمجرد السائمة على الأظهر. واختلفوا: هل المنفي معلوفة الغنم، أو كل معلوفة من السوائم؟', 'Het geldt als eigenschap en zaak samen genoemd worden ("grazende schapen"), niet bij alleen "grazende" volgens de sterkste mening. Verschil: valt alleen gevoerde schapen buiten de zakāt, of elk gevoerd dier?'],
    [33, 'حجية المفاهيم: سبعة مذاهب', 'Zijn begrepen betekenissen bewijs? Zeven meningen', 'الجمهور: كلها حجة إلا اللقب، لغةً (وهو الأقوى) وقيل شرعاً وقيل معنى. واحتج باللقب الدقاق والصيرفي وابن خويز منداد وبعض الحنابلة. وأنكر أبو حنيفة الكل. وقوم أنكروه في الخبر. والشيخ الإمام في غير الشرع. والجويني في صفة لا تناسب. وقوم أنكروا العدد.', 'Meerderheid: alle behalve de naam, op grond van de taal (sterkst), of de sharīʿa, of de betekenis. Ad-Daqqāq, aṣ-Ṣayrafī, Ibn Khuwayz Mindād en sommige Ḥanbalieten aanvaarden ook de naam. Abū Ḥanīfa wijst alles af. Sommigen niet bij mededelingen. De vader van de auteur alleen in de sharīʿa. Al-Juwaynī niet bij een eigenschap die niet bij het oordeel past. Sommigen niet bij getallen.'],
    [35, 'إنما وأنما', 'Innamā en annamā', 'قال الآمدي وأبو حيان: إنما لا تفيد الحصر بل تأكيد الإثبات. وقال الشيرازي والغزالي والكيا والرازي: تفيده فهماً، وقيل نطقاً. والأصح أن أنما بالفتح فرع المكسورة، ومن ثم ادعى الزمخشري إفادتها الحصر.', 'Al-Āmidī en Abū Ḥayyān: innamā beperkt niet, maar versterkt. Ash-Shīrāzī, al-Ghazālī, al-Kiyā en ar-Rāzī: ze beperkt via het begrepene; anderen: via het uitgesprokene. Annamā is een afleiding van innamā; daarom zei az-Zamakhsharī dat ook die beperkt.', 'ثمرته: من قال "إنما حضر زيد" ثم قال "وعمرو": تخصيص على قول الفهم، ونسخ على قول النطق.', 'Gevolg: wie zegt "alleen Zayd kwam" en dan "en ʿAmr": specificatie volgens de eerste mening, opheffing volgens de tweede.']
  ],
  keycards: [
    ['definitie', 26, 'أئمة القراءات العشر', 'De imams van de tien leeswijzen', ['نافع المدني', 'ابن كثير المكي', 'أبو عمرو البصري', 'ابن عامر الشامي', 'عاصم وحمزة والكسائي الكوفيون', 'ومن العشر: أبو جعفر المدني ويعقوب الحضرمي وخلف الكوفي'], ['Nāfiʿ uit Medina', 'Ibn Kathīr uit Mekka', 'Abū ʿAmr uit Basra', 'Ibn ʿĀmir uit Syrië', 'ʿĀṣim, Ḥamza en al-Kisāʾī uit Kufa', 'Erbij voor de tien: Abū Jaʿfar (Medina), Yaʿqūb al-Ḥaḍramī en Khalaf (Kufa)']],
    ['onderscheid', 28, 'النص والظاهر', 'Naṣṣ en ẓāhir', ['النص: لا يحتمل غير معنى واحد، كزيد وعمرو', 'الظاهر: راجح يحتمل مرجوحاً، كالأسد للمفترس والشجاع'], ['Naṣṣ: maar één betekenis, zoals een eigennaam', 'Ẓāhir: een sterke betekenis met een zwakkere mogelijkheid, zoals "leeuw" voor dier of dappere man']],
    ['onderscheid', 31, 'الفرق بين الموافقة والمخالفة', 'Verschil tussen overeenkomend en tegengesteld', ['في الموافقة: المسكوت هو المحكوم عليه بنفس الحكم', 'في المخالفة: يُعطى المسكوت حكماً يخالف المذكور، فالتصرف فيه أوسع'], ['Overeenkomend: het niet-genoemde krijgt hetzelfde oordeel', 'Tegengesteld: het krijgt het omgekeerde oordeel, daarom is er meer ruimte']],
    ['opsomming', 33, 'صيغ الحصر وأمثلتها', 'Vormen van beperking', ['إنما: «إنما الأعمال بالنيات»', 'النفي والإثبات: «لا صلاة إلا بفاتحة الكتاب»', 'ضمير الفصل: ﴿والله هو الغني﴾', 'تقديم المعمول: ﴿إياك نعبد﴾'], ['Innamā: "daden zijn slechts naar de intenties"', 'Ontkenning en uitzondering: "geen gebed zonder al-Fātiḥa"', 'Scheidend voornaamwoord: "Allah, Hij is de Rijke"', 'Object voorop: "U alleen aanbidden wij"']],
    ['opsomming', 33, 'ترتيب صيغ الحصر', 'Rangorde van de vormen van beperking', ['أعلاها: لا… إلا', 'ثم إنما (قيل إنها منطوق بالإشارة)', 'ثم ضمير الفصل وتقديم المعمول'], ['Sterkst: lā… illā', 'Dan innamā (volgens sommigen manṭūq via ishāra)', 'Dan het scheidende voornaamwoord en het object voorop']],
    ['opsomming', 30, 'الأقوال في دلالة مفهوم الموافقة', 'Waar de overeenkomende betekenis op rust', ['قياسية: الشافعي والجويني والرازي', 'لفظية مجازية: الغزالي والآمدي', 'لفظية حقيقية عرفية'], ['Analogie: ash-Shāfiʿī, al-Juwaynī, ar-Rāzī', 'Talig en figuurlijk: al-Ghazālī, al-Āmidī', 'Talig en door gebruik letterlijk']]
  ],
  subtleties: [
    [26, 'بسورة منه', '"Met één soera ervan"', 'قيد "بسورة منه" لئلا يُفهم أن الإعجاز لا يكون إلا بمجموع القرآن كله.', 'Toegevoegd zodat men niet denkt dat alleen de hele Koran onnavolgbaar is.'],
    [26, 'التواتر في اللفظ لا في كيفية الأداء', 'Tawātur van de woorden, niet van de manier van voordragen', 'المستثنى من التواتر كيفية إخراج المدود وعدد الحركات وتحقيق الهمزة، لا أصلها، فأصلها داخل في التواتر.', 'Wat buiten tawātur valt, is hoe men de lengte en de hamza uitvoert, niet dat ze er zijn; dat laatste is wel mutawātir.'],
    [27, 'الشاذ ليس قرآناً لكنه حجة', 'De afwijkende leeswijze is geen Koran, maar wel bewijs', 'اتُّفق على أنه غير متواتر فلا يُتعبد بتلاوته، لكنه يعامل معاملة الحديث الآحاد.', 'Men is het eens dat ze niet mutawātir is en niet als aanbidding gereciteerd wordt, maar ze telt als een āḥād-hadith.'],
    [27, 'من المقصود بالحشوية؟', 'Wie zijn de "Ḥashwiyya"?', 'في الحاشية: يقصد المصنف بهم أهل الحديث ومن وافقهم في إثبات الأسماء والصفات وإجراء معانيها على ظاهرها من غير تكييف ولا تعطيل ولا تأويل.', 'Volgens de notities bedoelt de auteur de mensen van de hadith en wie hen volgt in het bevestigen van Allahs namen en eigenschappen naar hun duidelijke betekenis, zonder vraag naar het hoe, zonder ontkenning en zonder herinterpretatie.'],
    [28, 'المكلف بمعرفته أم بالعمل به؟', '"Kennen" of "uitvoeren"?', 'في القول الراجح في المجمل قال المصنف "المكلف بمعرفته"، والأولى "بالعمل به".', 'In de sterkste mening over het onduidelijke zegt de auteur "wat we moeten kennen"; beter: "wat we moeten uitvoeren".'],
    [29, 'الالتزام عند المناطقة لا الأصوليين', 'Iltizām volgens de logici', 'مثال الأسد والقوة لازم ذهني عند المناطقة، لا عند الأصوليين.', 'Het voorbeeld leeuw–kracht is een noodzakelijk verband volgens de logici, niet volgens de uṣūlī’s.'],
    [30, 'لحن الخطاب هل هو من الموافقة؟', 'Hoort laḥn al-khiṭāb bij de overeenkomende betekenis?', 'من الأصوليين من يجعله من المنطوق، لأن مفهوم الموافقة عندهم لما كان أولى فقط.', 'Sommige uṣūlī’s rekenen het tot het uitgesprokene, omdat voor hen de overeenkomende betekenis alleen geldt als het niet-genoemde sterker is.'],
    [31, 'الخوف والجهل لا يكونان في كلام الشارع', 'Angst en onwetendheid bestaan niet bij de Wetgever', 'الشرط الأول لمفهوم المخالفة يتعلق بكلام البشر، كحديث العهد بالإسلام يخاف تهمة النفاق فيقول: تصدقوا على فقراء المسلمين.', 'De eerste voorwaarde gaat over mensen, zoals een nieuwe moslim die zegt "geef aan arme moslims" uit angst voor de beschuldiging van huichelarij.'],
    [33, 'الضمير في "وأعلاه"', 'Waar "het hoogste" op slaat', 'يعود على أنواع الحصر لا على مفهوم المخالفة في الراجح، لأنه سيعود لاحقاً إلى ترتيب مفاهيم المخالفة.', 'Op de vormen van beperking, niet op de tegengestelde betekenis, want de rangorde daarvan volgt later.'],
    [35, 'الاختصاص والحصر', 'Ikhtiṣāṣ en ḥaṣr', 'جعلهما ابن الحاجب وأبو حيان مترادفين، وقال والد المصنف: الحصر أعلى درجة من الاختصاص وأشمل.', 'Ibn al-Ḥājib en Abū Ḥayyān zien ze als synoniem; de vader van de auteur: ḥaṣr is sterker en breder.']
  ],
  rules: [
    [27, 'لا يجوز صرف اللفظ عن ظاهره إلا بدليل', 'Men wendt woorden niet zonder bewijs af van hun duidelijke betekenis', 'وهذا هو التأويل.', 'Dat heet taʾwīl.'],
    [28, 'الأدلة النقلية قد تفيد اليقين بانضمام تواتر أو قرائن', 'Overgeleverde bewijzen kunnen met tawātur of aanwijzingen zekerheid geven'],
    [31, 'ما خرج مخرج الغالب لا مفهوم له', 'Wat het gebruikelijke geval noemt, heeft geen tegengestelde betekenis', 'خلافاً للجويني.', 'Anders dan al-Juwaynī.', '﴿لا تأكلوا الربا أضعافاً مضاعفة﴾', '"Verslind geen woeker, dubbel en dwars".'],
    [32, 'ما يمنع المفهوم لا يمنع القياس', 'Wat de tegengestelde betekenis tegenhoudt, houdt qiyās niet tegen', '', '', 'قتل الصيد خطأً.', 'Wild per ongeluk doden.'],
    [33, 'المفاهيم إلا اللقب حجة', 'Begrepen betekenissen zijn bewijs, behalve de naam', 'عند الجمهور.', 'Volgens de meerderheid.']
  ],
  disputes: [
    { page: 26, q: ['هل البسملة آية؟', 'Is de basmala een vers?'], views: [['يُنسب للشافعي: آية أول كل سورة غير براءة', 'Toegeschreven aan ash-Shāfiʿī: een vers aan het begin van elke soera behalve Barāʾa'], ['الجمهور: من القرآن في كل السور وليست آية', 'Meerderheid: hoort overal bij de Koran, maar is geen vers']] },
    { page: 27, q: ['ما الشاذ من القراءات؟', 'Wat is een afwijkende leeswijze?'], views: [['ما وراء العشرة، وفاقاً للبغوي والشيخ الإمام', 'Wat buiten de tien valt (al-Baghawī en de vader van de auteur)'], ['ما وراء السبعة', 'Wat buiten de zeven valt']], preferred: ['ما وراء العشرة', 'Buiten de tien'] },
    { page: 27, q: ['هل بقي في الكتاب مجمل غير مبين؟', 'Zijn er onduidelijke woorden gebleven?'], views: [['نعم مطلقاً', 'Ja'], ['لا مطلقاً', 'Nee'], ['لا يبقى المكلف به، ويجوز فيما لا تكليف فيه', 'Niet wat opgelegd is; wel waar geen taklīf aan hangt']], preferred: ['الثالث، وهو تفصيل الجويني', 'De derde, de indeling van al-Juwaynī'] },
    { page: 30, q: ['هل دلالة مفهوم الموافقة قياسية أم لفظية؟', 'Rust de overeenkomende betekenis op analogie of op taal?'], views: [['الشافعي والجويني والرازي: قياسية', 'Ash-Shāfiʿī, al-Juwaynī, ar-Rāzī: analogie'], ['الغزالي والآمدي: لفظية مجازية', 'Al-Ghazālī, al-Āmidī: talig en figuurlijk'], ['لفظية نُقلت عرفاً', 'Talig, door gebruik']] },
    { page: 31, q: ['هل لما خرج مخرج الغالب مفهوم مخالفة؟', 'Heeft het gebruikelijke geval een tegengestelde betekenis?'], views: [['لا', 'Nee'], ['الجويني: نعم', 'Al-Juwaynī: ja']] },
    { page: 33, q: ['هل مفاهيم المخالفة حجة؟', 'Is de tegengestelde betekenis bewijs?'], views: [['الجمهور: كلها إلا اللقب', 'Meerderheid: alle behalve de naam'], ['الدقاق والصيرفي وابن خويز منداد وبعض الحنابلة: حتى اللقب', 'Ad-Daqqāq, aṣ-Ṣayrafī, Ibn Khuwayz Mindād, sommige Ḥanbalieten: ook de naam'], ['أبو حنيفة: لا شيء منها', 'Abū Ḥanīfa: geen'], ['قوم: لا في الخبر', 'Sommigen: niet bij mededelingen'], ['الشيخ الإمام: في الشرع دون غيره', 'De vader van de auteur: alleen in de sharīʿa'], ['الجويني: لا في صفة لا تناسب', 'Al-Juwaynī: niet bij een niet-passende eigenschap'], ['قوم: إلا العدد', 'Sommigen: niet bij getallen']], preferred: ['قول الجمهور، لغةً', 'Mening van de meerderheid, op grond van de taal'] },
    { page: 35, q: ['هل تفيد إنما الحصر؟', 'Beperkt innamā?'], views: [['الآمدي وأبو حيان: لا، بل تأكيد الإثبات', 'Al-Āmidī en Abū Ḥayyān: nee, ze versterkt'], ['الشيرازي والغزالي والكيا والرازي: تفيده فهماً', 'Ash-Shīrāzī, al-Ghazālī, al-Kiyā, ar-Rāzī: ja, via het begrepene'], ['قيل: تفيده نطقاً', 'Anderen: ja, via het uitgesprokene']], fruit: ['"إنما حضر زيد" ثم "وعمرو": تخصيص أو نسخ', '"Alleen Zayd kwam", dan "en ʿAmr": specificatie of opheffing'] }
  ],
  pitfalls: [
    [26, 'عدّ الحديث القدسي من القرآن', 'De ḥadīth qudsī tot de Koran rekenen', 'قيد "للإعجاز" يخرجه، وكذلك الحديث النبوي.', '"Als wonder" sluit hem uit, net als de profetische hadith.'],
    [27, 'رد القراءة الشاذة مطلقاً', 'De afwijkende leeswijze helemaal verwerpen', 'لا يُقرأ بها تعبداً، لكنها تجري مجرى الآحاد ويحتج بها.', 'Men reciteert haar niet als aanbidding, maar ze telt als bewijs zoals een āḥād-hadith.'],
    [29, 'الخلط بين الاقتضاء والإشارة', 'Iqtiḍāʾ en ishāra verwarren', 'الاقتضاء يتوقف عليه صدق الكلام أو صحته، والإشارة لا يتوقف عليها شيء وإنما تدل على أمر غير مقصود.', 'Bij iqtiḍāʾ is de zin zonder het weggelaten woord niet waar of juist; bij ishāra hangt er niets van af, het wordt alleen terloops aangeduid.'],
    [31, 'الاستدلال بآية الربا على حل الربا القليل', 'Uit de woeker-aya afleiden dat weinig woeker mag', 'المذكور خرج مخرج الغالب فلا مفهوم له.', 'Het genoemde is het gebruikelijke geval en heeft geen tegengestelde betekenis.'],
    [32, 'جعل "في السائمة زكاة" من مفهوم الصفة', '"Zakāt op grazende dieren" als eigenschap behandelen', 'لا على الأظهر، لأنه ذكر الموصوف مجرداً، وفيه خلاف هل هو من الصفة أم من اللقب.', 'Volgens de sterkste mening niet: er wordt geen zaak met eigenschap genoemd; verschil of het eigenschap of naam is.']
  ],
  ayat: [
    [29, 'واسأل القرية', 'مثال لدلالة الاقتضاء: أي أهل القرية.', 'Voorbeeld van iqtiḍāʾ: de bewoners van de stad.'],
    [29, 'والوالدات يرضعن', 'مع ﴿وعلى المولود له﴾ مثال لدلالة الإشارة.', 'Met het volgende vers een voorbeeld van ishāra.'],
    [29, 'وعلى المولود له', 'إشارة إلى أن الأب أحق بالنسب من الأم.', 'Duidt aan dat de afstamming via de vader loopt.'],
    [29, 'ولا تقل لهما أف', 'مثال لمفهوم الموافقة: تحريم الضرب.', 'Voorbeeld van de overeenkomende betekenis: slaan is verboden.'],
    [31, 'لا تأكلوا الربا أضعافاً مضاعفة', 'المذكور خرج مخرج الغالب فلا مفهوم مخالفة له.', 'Het gebruikelijke geval, dus geen tegengestelde betekenis.'],
    [32, 'ومن قتله منكم متعمداً', 'مانع المفهوم لا يمنع قياس غير العامد.', 'Het beletsel voor de tegengestelde betekenis verhindert de analogie met onopzettelijk doden niet.'],
    [32, 'الحج أشهر معلومات', 'مثال لمفهوم ظرف الزمان.', 'Voorbeeld van tijd.'],
    [33, 'ولا تباشروهن وأنتم عاكفون في المساجد', 'مثال لمفهوم الحال، وفيها ظرف المكان.', 'Voorbeeld van toestand, en ook van plaats.'],
    [33, 'فاجلدوهم ثمانين جلدة', 'مثال لمفهوم العدد.', 'Voorbeeld van getal.'],
    [33, 'وإن كن أولات حمل فأنفقوا', 'مثال لمفهوم الشرط.', 'Voorbeeld van voorwaarde.'],
    [33, 'فلا تحل له حتى تنكح زوجاً غيره', 'مثال لمفهوم الغاية.', 'Voorbeeld van doel (tot…).'],
    [33, 'والله هو الغني', 'مثال للحصر بضمير الفصل.', 'Voorbeeld van beperking met het scheidende voornaamwoord.'],
    [33, 'إياك نعبد', 'مثال للحصر بتقديم المعمول.', 'Voorbeeld van beperking door het object voorop te plaatsen.']
  ],
  hadith: [
    { text: 'توضأ من لحوم الإبل', nl: '"Verricht de wuḍūʾ na (het eten van) kamelenvlees."', note: ['جواب عن سؤال، فلا مفهوم مخالفة له.', 'Een antwoord op een vraag, dus zonder tegengestelde betekenis.'], pages: [31] },
    { text: 'ما أسكر قليله فكثيره حرام', nl: 'Zo staat het in de notities: "wat in kleine hoeveelheid bedwelmt, daarvan is ook veel verboden".', note: ['مثال لمفهوم العلة، ومفهومه في الحاشية: ما لم يسكر كثيره فقليله ليس بحرام. لفظ الحديث كما في الحاشية، يُراجع.', 'Voorbeeld van de reden (ʿilla); de afgeleide betekenis in de notities: wat in grote hoeveelheid niet bedwelmt, is in kleine hoeveelheid niet verboden. Woordvolgorde zoals in de notities; nog te controleren.'], pages: [32] },
    { text: 'إنما الأعمال بالنيات', nl: '"Daden zijn slechts naar de intenties."', note: ['مثال للحصر بإنما: لا يقبل عمل بلا نية.', 'Voorbeeld van beperking met innamā: geen daad wordt aanvaard zonder intentie.'], pages: [33] },
    { text: 'لا صلاة إلا بفاتحة الكتاب', nl: '"Er is geen gebed zonder de Openende (al-Fātiḥa)."', note: ['مثال للحصر بالنفي والإثبات، مع استثناء الأحناف.', 'Voorbeeld van beperking met ontkenning en uitzondering; de Ḥanafieten wijken af.'], pages: [33] }
  ],
  persons: [
    ['ash-shafii', 'text', [26, 30], 'يُنسب إليه أن البسملة آية أول كل سورة غير براءة، وقال: دلالة مفهوم الموافقة قياسية.', 'Aan hem wordt toegeschreven dat de basmala een vers is; hij noemde de overeenkomende betekenis een analogie.'],
    ['nafi', 'text', [26], 'من أئمة القراءات السبع، مدني.', 'Een van de zeven lezers, uit Medina.'],
    ['ibn-kathir-al-makki', 'text', [26], 'من أئمة القراءات السبع، مكي.', 'Een van de zeven lezers, uit Mekka.'],
    ['abu-amr-al-basri', 'text', [26], 'من أئمة القراءات السبع، بصري.', 'Een van de zeven lezers, uit Basra.'],
    ['ibn-amir', 'text', [26], 'من أئمة القراءات السبع، شامي.', 'Een van de zeven lezers, uit Syrië.'],
    ['asim', 'text', [26], 'من أئمة القراءات السبع، كوفي.', 'Een van de zeven lezers, uit Kufa.'],
    ['hamza', 'text', [26], 'من أئمة القراءات السبع، كوفي.', 'Een van de zeven lezers, uit Kufa.'],
    ['al-kisai', 'text', [26], 'من أئمة القراءات السبع، كوفي.', 'Een van de zeven lezers, uit Kufa.'],
    ['abu-jafar-al-madani', 'text', [27], 'من أئمة القراءات العشر، مدني.', 'Een van de tien lezers, uit Medina.'],
    ['yaqub-al-hadrami', 'text', [27], 'من أئمة القراءات العشر.', 'Een van de tien lezers.'],
    ['khalaf', 'text', [27], 'من أئمة القراءات العشر، كوفي.', 'Een van de tien lezers, uit Kufa.'],
    ['abu-shama', 'text', [26], 'صاحب المرشد الوجيز؛ قال: الألفاظ المختلف فيها بين القراء ليست متواترة.', 'Schrijver van al-Murshid al-Wajīz; zei dat de woorden waarin de lezers verschillen niet mutawātir zijn.'],
    ['al-baghawi', 'text', [27], 'صاحب التفسير؛ قال: الشاذ ما وراء العشرة.', 'De koranuitlegger; zei: afwijkend is wat buiten de tien valt.'],
    ['taqi-ad-din-as-subki', 'text', [27, 34, 35], 'قال: الشاذ ما وراء العشرة، واحتج بالمفاهيم في الشرع دون غيره، وفرّق بين الاختصاص والحصر.', 'Zei dat afwijkend buiten de tien valt, aanvaardde begrepen betekenissen alleen in de sharīʿa en onderscheidde ikhtiṣāṣ en ḥaṣr.'],
    ['umar-ibn-al-khattab', 'text', [27], 'أثره في بيان الكلالة والخلافة مثال لمن قال ببقاء المجمل.', 'Zijn uitspraak over de kalāla en het kalifaat wordt aangehaald door wie zegt dat er onduidelijke woorden zijn gebleven.'],
    ['al-juwayni', 'text', [28, 30, 31, 34], 'فصّل في المجمل في البرهان، وقال دلالة الموافقة قياسية، واعتبر مفهوم ما خرج مخرج الغالب، ولم يحتج بصفة لا تناسب.', 'Maakte in al-Burhān de indeling over het onduidelijke; noemde de overeenkomende betekenis een analogie; aanvaardde de tegengestelde betekenis bij het gebruikelijke geval; niet bij een niet-passende eigenschap.'],
    ['fakhr-ad-din-ar-razi', 'text', [30, 35], 'قال دلالة الموافقة قياسية، وإنما تفيد الحصر فهماً.', 'Noemde de overeenkomende betekenis een analogie; innamā beperkt via het begrepene.'],
    ['al-ghazali', 'text', [30, 35], 'قال دلالة الموافقة لفظية مجازية، وإنما تفيد الحصر فهماً.', 'Noemde de overeenkomende betekenis talig en figuurlijk; innamā beperkt via het begrepene.'],
    ['al-amidi', 'text', [30, 35], 'قال دلالة الموافقة لفظية مجازية، وإنما لا تفيد الحصر.', 'Noemde de overeenkomende betekenis talig en figuurlijk; innamā beperkt niet.'],
    ['ad-daqqaq', 'text', [34], 'احتج بمفهوم اللقب.', 'Aanvaardde de naam als bewijs.'],
    ['as-sayrafi', 'text', [34], 'شارح رسالة الشافعي؛ احتج بمفهوم اللقب.', 'Uitlegger van ash-Shāfiʿī’s Risāla; aanvaardde de naam als bewijs.'],
    ['ibn-khuwayz-mandad', 'text', [34], 'من فقهاء المالكية المتقدمين؛ احتج بمفهوم اللقب.', 'Vroege Mālikī-jurist; aanvaardde de naam als bewijs.'],
    ['abu-hanifa', 'text', [34], 'أنكر مفهوم المخالفة مطلقاً تعظيماً للنص.', 'Wees de tegengestelde betekenis helemaal af, uit eerbied voor de tekst.'],
    ['ibn-al-hajib', 'text', [35], 'قال: الاختصاص هو الحصر.', 'Zei: ikhtiṣāṣ is hetzelfde als ḥaṣr.'],
    ['abu-hayyan', 'text', [35], 'قال: الاختصاص هو الحصر، وإنما لا تفيد الحصر.', 'Zei: ikhtiṣāṣ is ḥaṣr, en innamā beperkt niet.'],
    ['abu-ishaq-ash-shirazi', 'text', [35], 'صاحب اللمع؛ قال: إنما تفيد الحصر فهماً.', 'Schrijver van al-Lumaʿ; innamā beperkt via het begrepene.'],
    ['al-kiya-al-harrasi', 'text', [35], 'قال: إنما تفيد الحصر فهماً.', 'Zei: innamā beperkt via het begrepene.'],
    ['az-zamakhshari', 'text', [35], 'ادعى أن أنما بالفتح تفيد الحصر.', 'Zei dat ook annamā beperkt.']
  ],
  review: [
    ['القرآن: اللفظ المنزل للإعجاز المتعبد بتلاوته.', 'De Koran: neergezonden woorden, onnavolgbaar, reciteren is aanbidding.'],
    ['القراءات السبع متواترة، والشاذ ما وراء العشرة.', 'De zeven leeswijzen zijn mutawātir; afwijkend is wat buiten de tien valt.'],
    ['الشاذ لا يُقرأ به ويحتج به كالآحاد.', 'De afwijkende reciteert men niet, maar ze is bewijs zoals āḥād.'],
    ['لا يُصرف اللفظ عن ظاهره إلا بدليل.', 'Geen afwijking van de duidelijke betekenis zonder bewijs.'],
    ['المنطوق: نص وظاهر.', 'Manṭūq: naṣṣ en ẓāhir.'],
    ['الدلالة مطابقة وتضمن والتزام.', 'Aanduiding: volledig, gedeeltelijk en noodzakelijk.'],
    ['الاقتضاء يتوقف عليه صدق الكلام، والإشارة لا.', 'Bij iqtiḍāʾ hangt de waarheid ervan af, bij ishāra niet.'],
    ['الموافقة: فحوى (أولى) ولحن (مساوٍ).', 'Overeenkomend: faḥwā (sterker) en laḥn (gelijk).'],
    ['لا مفهوم لما خرج للغالب أو لسؤال أو لحادثة أو لجهل.', 'Geen tegengestelde betekenis bij het gebruikelijke geval, een vraag, een voorval of onwetendheid.'],
    ['المفاهيم إلا اللقب حجة لغةً.', 'Begrepen betekenissen behalve de naam zijn bewijs, op grond van de taal.'],
    ['أعلى صيغ الحصر: لا… إلا.', 'De sterkste vorm van beperking: lā… illā.']
  ],
  quiz: [
    { type: 'mc', page: 26, q: ['أي قيد في تعريف القرآن يُخرج منسوخ التلاوة؟', 'Welk deel van de definitie sluit wat qua tekst is opgeheven uit?'], options: [['المتعبد بتلاوته', 'للإعجاز', 'المنزل على محمد', 'اللفظ'], ['reciteren als aanbidding', 'als wonder', 'neergezonden aan Muḥammad', 'woorden']], answer: 0, explain: ['وللإعجاز يُخرج الحديث القدسي.', '"Als wonder" sluit de ḥadīth qudsī uit.'] },
    { type: 'mc', page: 27, q: ['الصحيح في حد القراءة الشاذة:', 'Wat is volgens het juiste een afwijkende leeswijze?'], options: [['ما وراء العشرة', 'ما وراء السبعة', 'ما وراء الأربعة عشر', 'كل ما خالف رسم المصحف'], ['buiten de tien', 'buiten de zeven', 'buiten de veertien', 'alles wat van de schrijfwijze afwijkt']], answer: 0, explain: ['وفاقاً للبغوي والشيخ الإمام.', 'Met al-Baghawī en de vader van de auteur.'] },
    { type: 'tf', page: 27, q: ['القراءة الشاذة لا يحتج بها مطلقاً.', 'Een afwijkende leeswijze is nooit bewijs.'], answer: 1, explain: ['تجري مجرى الآحاد فيحتج بها.', 'Ze telt als āḥād en is dus bewijs.'] },
    { type: 'mc', page: 28, q: ['لفظ "الأسد" للحيوان المفترس والرجل الشجاع مثال لـ:', '"Leeuw" voor het dier en voor een dappere man is een voorbeeld van:'], options: [['الظاهر', 'النص', 'المجمل', 'المفهوم'], ['ẓāhir', 'naṣṣ', 'mujmal', 'mafhūm']], answer: 0, explain: ['راجح في الحيوان مرجوح في الشجاع.', 'Sterk voor het dier, zwak voor de man.'] },
    { type: 'mc', page: 29, q: ['﴿واسأل القرية﴾ مثال لدلالة:', '"Vraag de stad" is een voorbeeld van:'], options: [['الاقتضاء', 'الإشارة', 'التضمن', 'الموافقة'], ['iqtiḍāʾ', 'ishāra', 'taḍammun', 'muwāfaqa']], answer: 0, explain: ['يقتضي تقدير "أهل".', 'Er moet "de bewoners" bij gedacht worden.'] },
    { type: 'mc', page: 30, q: ['أكل مال اليتيم وإحراقه مثال لـ:', 'Het bezit van een wees opeten en verbranden is een voorbeeld van:'], options: [['لحن الخطاب', 'فحوى الخطاب', 'مفهوم المخالفة', 'دلالة الإشارة'], ['laḥn al-khiṭāb', 'faḥwā al-khiṭāb', 'tegengestelde betekenis', 'ishāra']], answer: 0, explain: ['المسكوت مساوٍ للمنطوق.', 'Het niet-genoemde is gelijk aan het genoemde.'] },
    { type: 'tf', page: 31, q: ['يرى الجويني أن ما خرج مخرج الغالب لا مفهوم له.', 'Al-Juwaynī vindt dat het gebruikelijke geval geen tegengestelde betekenis heeft.'], answer: 1, explain: ['بل يراه معتبراً، خلافاً للأكثر.', 'Hij vindt juist van wel, anders dan de meesten.'] },
    { type: 'mc', page: 33, q: ['ما أضعف المفاهيم الذي لا يحتج به الجمهور؟', 'Welke begrepen betekenis is het zwakst en voor de meerderheid geen bewijs?'], options: [['مفهوم اللقب', 'مفهوم الغاية', 'مفهوم الشرط', 'مفهوم العدد'], ['de naam', 'het doel', 'de voorwaarde', 'het getal']], answer: 0, explain: ['واحتج به الدقاق والصيرفي وابن خويز منداد وبعض الحنابلة.', 'Ad-Daqqāq, aṣ-Ṣayrafī, Ibn Khuwayz Mindād en sommige Ḥanbalieten aanvaardden het wel.'] },
    { type: 'mc', page: 34, q: ['من أنكر مفهوم المخالفة مطلقاً؟', 'Wie wees de tegengestelde betekenis helemaal af?'], options: [['أبو حنيفة', 'الشافعي', 'الجويني', 'الصيرفي'], ['Abū Ḥanīfa', 'ash-Shāfiʿī', 'al-Juwaynī', 'aṣ-Ṣayrafī']], answer: 0, explain: ['تعظيماً للنص ولكثرة خلاف المحتجين به.', 'Uit eerbied voor de tekst en omdat wie het aanvaardt het zo oneens is.'] },
    { type: 'mc', page: 34, q: ['أعلى مفاهيم المخالفة رتبة عند المصنف:', 'De hoogste in rang volgens de auteur:'], options: [['الغاية', 'الشرط', 'الصفة المناسبة', 'العدد'], ['het doel', 'de voorwaarde', 'de passende eigenschap', 'het getal']], answer: 0, explain: ['لأن بعضهم قال إنها منطوق.', 'Omdat sommigen haar zelfs manṭūq noemen.'] }
  ]
})
