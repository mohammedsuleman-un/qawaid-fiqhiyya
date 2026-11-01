// Hoofdstukkaart eenheid 8 van تلخيص جمع الجوامع: الأمر والنهي (p. 68–83).
// Opgesteld uit de overgetypte notities (/mnt/project-files/tafrigh/pages/p068–p083.html).
import { kaart } from './kaart.js'

export default kaart({
  unit: 8,
  subtitle: ['سبعة فصول: لفظ الأمر وحده، وصيغته ومعانيها، والأمر المطلق، والقضاء والإجزاء، والأمر بالشيء والنهي عن ضده، وتعاقب الأمرين، ثم النهي', 'Zeven onderdelen: het woord "gebod" en zijn definitie, de gebiedende vorm en haar betekenissen, het onbepaalde gebod, inhalen en volstaan, gebod en het verbod op het tegendeel, herhaalde geboden, en het verbod'],
  summary: [
    'يبدأ باب الأمر بلفظ "أمر" ومعانيه، وحده وعدم اعتبار العلو والاستعلاء، والفرق بين الأمر والإرادة، ثم صيغة "افعل" ومعانيها الست والعشرين والخلاف في حقيقتها، والأمر بعد الحظر والنهي بعد الوجوب، ثم الأمر المطلق لا يدل على مرة ولا تكرار ولا فور، والقضاء بأمر جديد، والإجزاء، والأمر بالأمر، ودخول الآمر، والنيابة، ثم الأمر والنهي عن الضد، وتعاقب الأمرين؛ ثم النهي: حده وقضيته ومعاني صيغته وصوره، واقتضاؤه الفساد، ونفي القبول والإجزاء.',
    'Het hoofdstuk over het gebod begint met het woord amr en zijn betekenissen, de definitie, dat hoge positie of hooghartige toon niet vereist is, en het verschil tussen gebod en wil. Dan de gebiedende vorm ifʿal met zesentwintig betekenissen en het verschil over haar eigenlijke betekenis; een gebod na een verbod en een verbod na een plicht; dat een onbepaald gebod geen eenmaal, herhaling of onmiddellijkheid aanduidt; inhalen met een nieuw gebod; volstaan; een gebod om te gebieden; of de gebieder eronder valt; plaatsvervanging; gebod en het verbod op het tegendeel; herhaalde geboden. Dan het verbod: definitie, strekking, betekenissen, vormen, of het ongeldigheid meebrengt, en het ontkennen van aanvaarding of van volstaan.'
  ],
  map: {
    type: 'mindmap',
    title: ['الوحدة في خريطة واحدة', 'Het hoofdstuk in één kaart'],
    intro: ['من الصفحة 68 إلى 83.', 'Bladzijde 68 tot 83.'],
    root: [0, 'الأمر والنهي', 'Gebod en verbod', 'الوحدة الثامنة', 'Eenheid 8'],
    nodes: [
      [68, 'لفظ الأمر وحده', 'Het woord en de definitie', 'ص 68–70', 'p. 68–70', [['العلو والاستعلاء', 'hoge positie en toon'], ['الأمر والإرادة', 'gebod en wil']]],
      [70, 'صيغة افعل', 'De vorm ifʿal', 'ص 70–74', 'p. 70–74', [['ست وعشرون معنى', 'zesentwintig betekenissen'], ['حقيقة في الوجوب', 'eigenlijk verplichting'], ['بعد الحظر', 'na een verbod']]],
      [74, 'الأمر المطلق', 'Het onbepaalde gebod', 'ص 74–75', 'p. 74–75', [['لا مرة ولا تكرار', 'geen eenmaal of herhaling'], ['لا فور', 'geen onmiddellijkheid']]],
      [75, 'القضاء والإجزاء وغيرهما', 'Inhalen, volstaan en meer', 'ص 75–76', 'p. 75–76', [['القضاء بأمر جديد', 'inhalen met een nieuw gebod'], ['الأمر بالأمر', 'gebieden te gebieden']]],
      [77, 'الأمر والنهي عن الضد', 'Gebod en tegendeel', 'ص 77–79', 'p. 77–79', [['النفسي واللفظي', 'innerlijk en verwoord'], ['تعاقب الأمرين', 'herhaalde geboden']]],
      [79, 'النهي', 'Het verbod', 'ص 79–83', 'p. 79–83', [['الدوام', 'blijvend'], ['اقتضاء الفساد', 'ongeldigheid'], ['نفي القبول والإجزاء', 'geen aanvaarding of volstaan']]]
    ]
  },
  points: [
    [68, 'لفظ "أمر" حقيقة في القول المخصوص، مجاز في الفعل.', 'Het woord amr is letterlijk een bepaald soort uitspraak (gebod), figuurlijk een daad.'],
    [69, 'الأمر: اقتضاء فعل غير كف مدلول عليه بغير "كف"، ولا يعتبر فيه علو ولا استعلاء عند المصنف.', 'Een gebod: een daad (geen zich-inhouden) verlangen, niet met het woord "houd je in"; volgens de auteur zijn hoge positie en hooghartige toon niet vereist.'],
    [72, 'الجمهور: صيغة افعل حقيقة في الوجوب، ومجاز في غيره، لا يحمل عليه إلا بقرينة.', 'De meerderheid: de vorm ifʿal is letterlijk verplichting en figuurlijk de rest; alleen met een aanwijzing vat men haar anders op.'],
    [73, 'المختار وفاقاً لأبي حامد والجويني: حقيقة في الطلب الجازم، فإن صدر من الشارع أوجب الفعل.', 'De auteur kiest, met Abū Ḥāmid en al-Juwaynī: letterlijk een stellig verzoek; komt het van de Wetgever, dan maakt het de daad verplicht.'],
    [74, 'الأمر المطلق لطلب الماهية، لا لمرة ولا لتكرار ولا لفور، والمرة ضرورية.', 'Een onbepaald gebod vraagt de handeling zelf; het zegt niets over eenmaal, herhaling of onmiddellijkheid; één keer is gewoon onvermijdelijk.'],
    [76, 'القضاء بأمر جديد عند الأكثر، والإتيان بالمأمور به يستلزم الإجزاء.', 'Volgens de meesten is voor inhalen een nieuw gebod nodig; wie het gebodene doet, heeft voldaan.'],
    [79, 'النهي اقتضاء كف عن فعل لا بقول "كف"، وقضيته الدوام ما لم يقيد بالمرة.', 'Een verbod: zich inhouden van een daad verlangen, niet met "houd je in"; het geldt blijvend tenzij beperkt tot één keer.'],
    [81, 'مطلق النهي يقتضي الفساد في العبادات مطلقاً، وفي المعاملات إن رجع إلى داخل أو لازم.', 'Een onbepaald verbod maakt een aanbidding altijd ongeldig, en een transactie als het verbod over iets binnen of noodzakelijk eraan gaat.']
  ],
  terms: [
    ['الأمر (لفظ أ م ر)', 'al-amr', 68, 'حقيقة في القول المخصوص، مجاز في الفعل.', 'Letterlijk een bepaalde uitspraak, figuurlijk een daad.', '﴿وأمر أهلك بالصلاة﴾ قول، و﴿أتعجبين من أمر الله﴾ فعل.', '"Gebied je familie het gebed" is een uitspraak; "verwonder je je over Allahs besluit?" is een daad.'],
    ['الأمر (حده)', 'ḥadd al-amr', 69, 'اقتضاء فعل غير كف مدلول عليه بغير "كف".', 'Een daad die geen zich-inhouden is verlangen, niet aangeduid met "houd je in".', '"اقتضاء فعل" يخرج الإباحة، و"غير كف" يخرج النهي، و"بغير كف" يخرج دع واترك وذر.', '"Verlangen" sluit toestemming uit, "geen zich-inhouden" het verbod, "niet met houd je in" woorden als "laat" en "laat staan".'],
    ['العلو', 'al-ʿuluww', 69, 'كون الطالب أعلى من المطلوب منه؛ صفة للمتكلم.', 'Dat de vrager hoger staat dan de gevraagde; een eigenschap van de spreker.'],
    ['الاستعلاء', 'al-istiʿlāʾ', 69, 'كون الطلب بغلظة وتعاظم؛ صفة للكلام.', 'Dat het verzoek streng en hooghartig is; een eigenschap van de uitspraak.'],
    ['صيغة افعل', 'ṣīghat ifʿal', 71, 'الصيغة التي اختلف فيها هل هي موضوعة للأمر خاصة، أما "أمرتك" فمن صيغ الأمر بلا خلاف.', 'De vorm waarover verschil is of ze speciaal voor het gebod is; "ik gebied je" is zonder verschil een gebod.'],
    ['الإرشاد', 'al-irshād', 71, 'أمر لمصلحة دنيوية فلا ثواب فيه، والندب لمصلحة أخروية.', 'Een gebod voor een wereldlijk belang, zonder beloning; aanbeveling is voor het Hiernamaals.', '﴿واستشهدوا شهيدين﴾', '"Neemt twee getuigen".'],
    ['الطلب الجازم', 'aṭ-ṭalab al-jāzim', 73, 'طلب حتمي بغض النظر عن ترتب العقاب، فإن صدر من الشارع كان للوجوب.', 'Een stellig verzoek, los van straf; komt het van de Wetgever, dan is het verplicht.'],
    ['الأمر بعد الحظر', 'al-amr baʿda l-ḥaẓr', 73, 'أمر يرد بعد نهي أو تحريم، وفيه أقوال: الإباحة، والوجوب، والتوقف وغيرها.', 'Een gebod na een verbod; meningen: toegestaan, verplicht, geen uitspraak en andere.'],
    ['طلب الماهية', 'ṭalab al-māhiyya', 74, 'أن الأمر يطلب حقيقة الفعل لا عدداً ولا زمناً.', 'Dat een gebod de handeling zelf vraagt, geen aantal of tijdstip.'],
    ['الفور والتراخي', 'al-fawr wa-t-tarākhī', 75, 'الفور: الامتثال عاجلاً؛ والتراخي: جواز التأخير.', 'Onmiddellijk: meteen uitvoeren; uitstel: later mag.', 'قالوا: التعبير بالفور وعدم الفور أدق من التعبير بالتراخي.', 'Men zegt: "onmiddellijk / niet onmiddellijk" is preciezer dan "uitstel".'],
    ['القضاء', 'al-qaḍāʾ', 75, 'فعل العبادة المؤقتة بعد فوات وقتها.', 'Een aan tijd gebonden aanbidding na haar tijd verrichten.'],
    ['الإجزاء', 'al-ijzāʾ', 76, 'عند الجمهور مجرد الامتثال والكفاية في سقوط الطلب، وعند المعتزلة سقوط القضاء.', 'Volgens de meerderheid: het gebod uitvoeren zodat het vervalt; volgens de Muʿtazila: dat inhalen niet meer nodig is.'],
    ['النيابة', 'an-niyāba', 76, 'أن يؤدي غير المكلف عنه العبادة، كالزكاة والحج، إلا لمانع كالصلاة والصوم والاعتكاف.', 'Dat een ander de aanbidding namens iemand verricht, zoals zakāt en ḥajj, behalve als er een beletsel is, zoals bij gebed, vasten en iʿtikāf.'],
    ['الضد الوجودي', 'aḍ-ḍidd al-wujūdī', 77, 'الضد الموجود لا مجرد الترك، كالشرك ضد الإيمان.', 'Het bestaande tegendeel, niet het loutere laten, zoals shirk tegenover geloof.'],
    ['التأسيس والتأكيد', 'at-taʾsīs wa-t-taʾkīd', 78, 'التأسيس إفادة حكم جديد، والتأكيد تقوية الأول.', 'Taʾsīs geeft een nieuw oordeel; taʾkīd versterkt het eerste.', 'والتأسيس أولى من التأكيد.', 'Een nieuw oordeel gaat voor.'],
    ['النهي', 'an-nahy', 79, 'اقتضاء كف عن فعل لا بقول "كف".', 'Verlangen dat men zich van een daad inhoudt, niet met "houd je in".', 'صيغته "لا تفعل"، وكف ودع وذر من صيغ الأمر.', 'De vorm is "doe niet"; "houd je in", "laat" zijn qua vorm geboden.'],
    ['الفساد', 'al-fasād', 80, 'ما يقتضيه مطلق النهي، واختلف: شرعاً أو لغة أو معنى.', 'Wat een onbepaald verbod meebrengt; men verschilt of dat volgt uit de sharīʿa, de taal of de betekenis.'],
    ['المنهي لعينه والمنهي لوصفه', 'al-manhī li-ʿaynih wa-li-waṣfih', 82, 'المنهي لعينه غير مشروع أصلاً، والمنهي لوصفه يمكن تصحيحه عند أبي حنيفة.', 'Wat om zichzelf verboden is, is helemaal niet gelegitimeerd; wat om een eigenschap verboden is, kan volgens Abū Ḥanīfa hersteld worden.', 'كبيع الدرهم بدرهمين يصحح بإسقاط الزيادة.', 'Zoals één dirham voor twee, te herstellen door het extra weg te laten.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['اعتبار العلو والاستعلاء في الأمر', 'Hoge positie en toon bij het gebod'],
      intro: ['أربعة أقوال، ص 69.', 'Vier meningen, p. 69.'],
      nodes: [
        [69, 'لا يعتبران', 'Geen van beide', 'المصنف', 'de auteur'],
        [69, 'يعتبران', 'Beide', 'القشيري والقاضي عبد الوهاب', 'al-Qushayrī en al-Qāḍī ʿAbd al-Wahhāb'],
        [69, 'العلو فقط', 'Alleen positie', 'المعتزلة والشيرازي وابن الصباغ والسمعاني', 'Muʿtazila, ash-Shīrāzī, Ibn aṣ-Ṣabbāgh, as-Samʿānī'],
        [69, 'الاستعلاء فقط', 'Alleen toon', 'أبو الحسين والرازي والآمدي وابن الحاجب', 'Abū l-Ḥusayn, ar-Rāzī, al-Āmidī, Ibn al-Ḥājib']
      ],
      page: 69
    },
    {
      type: 'steps',
      title: ['حقيقة صيغة افعل', 'De eigenlijke betekenis van ifʿal'],
      intro: ['ص 72–73.', 'p. 72–73.'],
      nodes: [
        [72, 'الجمهور: الوجوب', 'Meerderheid: verplichting', 'وما كان عليه السلف', 'zoals de vroege generaties'],
        [72, 'الندب لأنه المتيقن', 'Aanbeveling, want dat is zeker'],
        [72, 'الماتريدي: القدر المشترك (الطلب)', 'Al-Māturīdī: het gemeenschappelijke (verzoek)'],
        [72, 'مشتركة بين الوجوب والندب', 'Meerduidig tussen verplicht en aanbevolen', 'يُنسب للمرتضى', 'toegeschreven aan al-Murtaḍā'],
        [72, 'التوقف: القاضي والغزالي والآمدي', 'Geen uitspraak: al-Bāqillānī, al-Ghazālī, al-Āmidī'],
        [72, 'عبد الجبار: لإرادة الامتثال', 'ʿAbd al-Jabbār: de wil tot opvolging'],
        [72, 'الأبهري: أمر الله للوجوب، وأمر النبي المبتدأ للندب', 'Al-Abharī: Allahs gebod verplicht; een eigen gebod van de Profeet aanbevolen'],
        [73, 'المختار: الطلب الجازم', 'Gekozen: stellig verzoek', 'فإن صدر من الشارع أوجب', 'van de Wetgever: verplicht']
      ],
      page: 72
    },
    {
      type: 'compare',
      title: ['الأمر بعد الحظر والنهي بعد الوجوب', 'Gebod na verbod, verbod na plicht'],
      intro: ['ص 73–74.', 'p. 73–74.'],
      columns: [['الأمر بعد الحظر', 'Gebod na verbod'], ['النهي بعد الوجوب', 'Verbod na plicht']],
      rows: [
        { label: ['القول الأول', 'Mening 1'], cells: [['للإباحة', 'toegestaan'], ['الجمهور: للتحريم', 'meerderheid: verboden']] },
        { label: ['القول الثاني', 'Mening 2'], cells: [['للوجوب: أبو الطيب والشيرازي والسمعاني والرازي', 'verplicht: Abū ṭ-Ṭayyib, ash-Shīrāzī, as-Samʿānī, ar-Rāzī'], ['للكراهة', 'afgekeurd']] },
        { label: ['القول الثالث', 'Mening 3'], cells: [['توقف الجويني', 'al-Juwaynī: geen uitspraak'], ['للإباحة', 'toegestaan']] },
        { label: ['أقوال أخرى', 'Andere'], cells: [['للاستحباب؛ وشيخ الإسلام: لما كان عليه قبل الحظر', 'aanbevolen; Ibn Taymiyya: terug naar wat het vóór het verbod was'], ['لإسقاط الوجوب؛ والجويني على وقفه', 'de plicht vervalt; al-Juwaynī blijft zonder uitspraak']] }
      ],
      page: 73
    },
    {
      type: 'tree',
      title: ['النهي واقتضاء الفساد', 'Het verbod en ongeldigheid'],
      intro: ['ص 80–82.', 'p. 80–82.'],
      root: [80, 'مطلق النهي (تحريم وتنزيه)', 'Onbepaald verbod (streng en licht)'],
      nodes: [
        [81, 'في العبادات: الفساد مطلقاً', 'Bij aanbidding: altijd ongeldig', 'شرعاً، وقيل لغة، وقيل معنى', 'op grond van de sharīʿa; of taal; of betekenis'],
        [81, 'في المعاملات', 'Bij transacties', '', '', [
          [81, 'لداخل: فساد', 'Iets binnen: ongeldig', 'بيع الحمل', 'verkoop van een ongeboren jong'],
          [81, 'احتمل رجوعه لداخل: فساد', 'Mogelijk binnen: ongeldig', 'ابن عبد السلام', 'Ibn ʿAbd as-Salām'],
          [81, 'للازم: فساد', 'Iets noodzakelijks: ongeldig', 'درهم بدرهمين', 'één dirham voor twee'],
          [81, 'لخارج: لا يفيد عند الأكثر', 'Iets van buiten: niet ongeldig volgens de meesten', 'الوضوء بمغصوب', 'wuḍūʾ met geroofd water']
        ]],
        [82, 'أحمد: يفيد مطلقاً', 'Aḥmad: altijd ongeldig'],
        [82, 'أبو حنيفة: لا يفيد مطلقاً', 'Abū Ḥanīfa: nooit ongeldig', 'والمنهي لعينه غير مشروع', 'wat om zichzelf verboden is, is niet gelegitimeerd']
      ],
      page: 80
    }
  ],
  sections: [
    [69, 'معاني لفظ "أمر"', 'Betekenissen van het woord amr', 'حقيقة في القول المخصوص، مجاز في الفعل؛ وقيل للقدر المشترك بينهما (كونه شيئاً)، وقيل مشترك بينهما كالعين والقرء، وقيل بين الشأن والصفة والشيء كـ﴿وما أمر فرعون برشيد﴾.', 'Letterlijk een bepaalde uitspraak, figuurlijk een daad; of het gemeenschappelijke ("iets"); of meerduidig zoals ʿayn en qurʾ; of ook "zaak", "eigenschap" en "iets", zoals "de zaak van Farʿawn was niet rechtgeleid".'],
    [70, 'الأمر والإرادة', 'Gebod en wil', 'اعتبر أبو علي وأبو هاشم الجبائيان إرادة الدلالة باللفظ على الطلب، وبنوا عليه أن الله ما أراد إيمان أبي لهب فليس أمراً. وقال المصنف: الطلب بديهي، والأمر غير الإرادة خلافاً للمعتزلة.', 'Abū ʿAlī en Abū Hāshim al-Jubbāʾī eisen dat de spreker het verzoek wil; daaruit leidden ze af dat Allah het geloof van Abū Lahab niet wilde, dus was het geen gebod. De auteur: wat een verzoek is, is vanzelfsprekend; gebod en wil zijn verschillend, anders dan de Muʿtazila zeggen.', 'والإشكال ناتج عن عدم التفريق بين الإرادتين الكونية والشرعية، والصحيح عدم نفيه إطلاقاً وعدم إثباته إطلاقاً.', 'Het probleem komt doordat men de wil in de schepping en de sharʿī-wil niet onderscheidt; men moet het dus niet volledig ontkennen en niet volledig bevestigen.'],
    [70, 'هل للأمر صيغة تخصه؟', 'Heeft het gebod een eigen vorm?', 'القائلون بالكلام النفسي اختلفوا: نُقل النفي عن الأشعري، فقيل للوقف وقيل للاشتراك. والخلاف في صيغة "افعل" لا في "أمرتك".', 'Wie het innerlijke spreken aanneemt, verschilt: van al-Ashʿarī wordt ontkenning overgeleverd, volgens de ene uitleg omdat hij geen uitspraak deed, volgens de andere omdat de vorm meerduidig is. Het verschil gaat over ifʿal, niet over "ik gebied je".'],
    [71, 'معاني صيغة افعل', 'Betekenissen van ifʿal', 'ترد لست وعشرين معنى، منها: الوجوب ﴿وأقيموا الصلاة﴾، والندب ﴿فكاتبوهم﴾، والإباحة ﴿كلوا من الطيبات﴾، والتهديد ﴿اعملوا ما شئتم﴾، والإرشاد، والإذن، والتأديب، والإنذار، والامتنان، والإكرام، والتسخير، والتكوين ﴿كن فيكون﴾، والتعجيز ﴿فأتوا بسورة من مثله﴾، والإهانة، والتسوية، والدعاء، والتمني، والاحتقار، والخبر، والإنعام، والتفويض، والتعجب، والتكذيب، والمشورة، والاعتبار.', 'Zesentwintig betekenissen, waaronder: verplichting ("verricht het gebed"), aanbeveling ("sluit met hen een vrijkoopcontract"), toestemming ("eet van de goede dingen"), dreiging ("doet wat jullie willen"), raad, toestemming tot binnenkomen, opvoeding, waarschuwing, gunst, eerbewijs, onderwerping, schepping ("Wees!, en het is"), onvermogen tonen ("brengt een soera zoals deze"), vernedering, gelijkheid, smeekbede, wens, minachting, mededeling, weldaad, overlaten, verwondering, logenstraffen, overleg en lering.'],
    [73, 'اعتقاد الوجوب قبل البحث', 'Verplichting aannemen vóór onderzoek', 'إذا وردت صيغة الأمر بلا قرينة، فهل يجب اعتقاد أنها للوجوب قبل البحث عن صارف؟ الخلاف فيها كخلاف اعتقاد عموم العام قبل البحث عن المخصص.', 'Komt een gebiedende vorm zonder aanwijzing, moet men dan aannemen dat ze verplicht vóórdat men naar een andere aanwijzing zoekt? Het verschil is hetzelfde als bij het algemene woord vóór het zoeken naar een specificatie.'],
    [74, 'الأمر بين المرة والتكرار', 'Eenmaal of herhaling', 'الأمر لطلب الماهية لا لتكرار ولا لمرة، والمرة ضرورية. وقيل المرة مدلوله، وقال الأستاذ والقزويني: للتكرار مطلقاً، وقيل إن علق بشرط أو صفة، وقيل بالوقف وهو قول الجويني.', 'Het gebod vraagt de handeling, niet eenmaal of herhaling; één keer is onvermijdelijk. Of: eenmaal is wat het zegt; al-Ustādh en al-Qazwīnī: altijd herhaling; anderen: herhaling als het aan een voorwaarde of eigenschap hangt ("als jullie onrein zijn, reinigt je"; "de dief… snijdt"); en geen uitspraak (al-Juwaynī).', 'نتيجة القولين الأولين واحدة: الأول يقول تحصل المرة ضرورة، والثاني بالدلالة.', 'De eerste twee komen op hetzelfde neer: één keer, ofwel als noodzaak ofwel als betekenis.'],
    [75, 'الأمر بين الفور والتراخي', 'Onmiddellijk of later', 'رجح المصنف أنه لطلب الماهية لا للفور، خلافاً لمن قال للفور (بعض الأحناف والشافعية وجمهور المالكية والمذهب عند الحنابلة)، أو للتراخي (الغزالي والطبري)، وقيل للفور أو العزم (الباقلاني)، وقيل مشترك. والمبادر ممتثل، خلافاً لمن منع ومن وقف.', 'De auteur: het gebod vraagt de handeling, niet onmiddellijkheid; anders dan wie "meteen" zegt (sommige Ḥanafieten en Shāfiʿieten, de meeste Mālikieten, de Ḥanbalī-leer), of "later" (al-Ghazālī, aṭ-Ṭabarī); al-Bāqillānī: meteen of het voornemen; of meerduidig. Wie het meteen doet, voert het gebod uit, anders dan wie dat ontkent of geen uitspraak doet.', 'من قال للفور أثّم المتأخر، كمن استطاع الحج ولم يفعل.', 'Wie "meteen" zegt, noemt uitstellen zonde, zoals bij wie de ḥajj kan maar niet gaat.'],
    [76, 'الأمر بالأمر ودخول الآمر', 'Gebieden te gebieden; valt de gebieder eronder?', 'الأصح أن الأمر بالأمر بالشيء ليس أمراً به لغة، أما في الشرع فهو مأمور كـ«مره فليراجعها»؛ وأما «مروا أولادكم بالصلاة لسبع» فالأولاد خارج التكليف. والأصح أن الآمر بلفظ يتناوله داخل فيه، والصحيح عند الأصوليين لا يدخل.', 'Volgens het juiste is "gebied hem om…" in de taal geen gebod aan de derde; in de sharīʿa wel ("gebied hem dat hij haar terugneemt"). Bij "gebiedt jullie kinderen te bidden op hun zevende" vallen de kinderen buiten taklīf. Volgens de auteur valt wie gebiedt met woorden die hem omvatten er zelf onder; de meeste uṣūlī’s zeggen van niet.', 'وقال في باب العام: داخل إن كان خبراً لا أمراً، فأحدث إشكالاً اعتذر عنه في منع الموانع.', 'In het hoofdstuk over het algemene zei hij: hij valt eronder bij een mededeling, niet bij een gebod; daarover verontschuldigde hij zich in Manʿ al-Mawāniʿ.'],
    [77, 'هل الأمر بالشيء نهي عن ضده؟', 'Is een gebod een verbod op het tegendeel?', 'قال الأشعري والقاضي: الأمر النفسي بشيء معين نهي عن ضده الوجودي؛ وعن القاضي: يتضمنه، وعليه عبد الجبار وأبو الحسين والرازي والآمدي؛ وقال الجويني والغزالي: لا عينه ولا يتضمنه؛ وقيل: أمر الوجوب يتضمن فقط. أما اللفظي فليس عين النهي قطعاً ولا يتضمنه على الأصح.', 'Al-Ashʿarī en al-Qāḍī: het innerlijke gebod over iets bepaalds ís het verbod op het bestaande tegendeel; van al-Qāḍī ook: het omvat het (zo ʿAbd al-Jabbār, Abū l-Ḥusayn, ar-Rāzī, al-Āmidī); al-Juwaynī en al-Ghazālī: geen van beide; of: alleen het verplichtende gebod omvat het. Het verwoorde gebod is zeker niet het verbod en omvat het volgens het juiste ook niet.', 'والصحيح أن الأمر بالشيء نهي عن جميع أضداده معنى، والنهي عن الشيء أمر بأحد أضداده.', 'De notities: een gebod is naar betekenis een verbod op alle tegendelen, en een verbod is een gebod tot één van de tegendelen.'],
    [78, 'تعاقب الأمرين', 'Twee geboden na elkaar', 'غير المتعاقبين أو غير المتماثلين غيران يعمل بهما. والمتعاقبان المتماثلان بلا عطف: قيل معمول بهما (تأسيس)، وقيل تأكيد، وقيل الوقف. وفي المعطوف التأسيس أرجح، فإن رجح التأكيد بعادي قُدم، وإلا فالوقف.', 'Niet direct na elkaar, of niet gelijk: twee verschillende geboden, beide uitvoeren. Gelijk en direct na elkaar zonder "en": nieuw oordeel, versterking, of geen uitspraak. Met "en": een nieuw oordeel is sterker, tenzij gewoonte op versterking wijst; anders geen uitspraak.', 'ومن المرجح العادي أنه ﷺ كان إذا تكلم أعاد الكلمة ثلاثاً لتفهم عنه.', 'Een voorbeeld van zo’n gewoonte: de Profeet ﷺ herhaalde een woord drie keer zodat het begrepen werd.'],
    [80, 'صور النهي', 'Vormen van het verbod', 'يكون عن واحد ﴿لا تقربوا الزنا﴾، وعن متعدد جمعاً ﴿وأن تجمعوا بين الأختين﴾، وفرقاً كالنعلين تلبسان أو تنزعان ولا يفرق بينهما كما في الصحيحين، وجميعاً كالزنا والسرقة.', 'Over één zaak ("nadert de ontucht niet"), over meerdere samen ("dat jullie twee zussen samen huwen"), over meerdere apart (de sandalen: beide aan of beide uit, niet één, zoals in de twee Ṣaḥīḥ’s), en over meerdere in elk geval (ontucht en diefstal).'],
    [82, 'النهي عن الطلاق في الحيض', 'Verstoting tijdens de menstruatie', 'لفظ النهي حقيقة في الفساد، وإن انتفى الفساد فلدليل، كطلاق ابن عمر امرأته وهي حائض، وقوله ﷺ لأبيه: «مره فليراجعها»، فالرجعة فرع وقوع الطلاق.', 'Een verbod betekent eigenlijk ongeldigheid; blijft dat uit, dan door een bewijs. Ibn ʿUmar verstootte zijn vrouw tijdens haar menstruatie en de Profeet ﷺ zei tegen zijn vader: "gebied hem dat hij haar terugneemt"; terugnemen veronderstelt dat de verstoting geldig was.'],
    [82, 'نفي القبول ونفي الإجزاء', 'Geen aanvaarding, niet volstaan', 'قيل: نفي القبول دليل الصحة، كـ«لا يقبل الله صلاة أحدكم إذا أحدث حتى يتوضأ»، فالصلاة صحيحة بلا ثواب؛ وقيل: دليل الفساد. ونفي الإجزاء كنفي القبول، كـ«أربعة لا تجزئ في الأضاحي»، وقيل أولى بالفساد.', 'Een mening: "Allah aanvaardt het gebed niet van wie onrein werd tot hij wuḍūʾ doet" wijst op geldigheid zonder beloning; een andere: op ongeldigheid. "Volstaat niet" is hetzelfde ("vier dieren volstaan niet als offer"), of nog sterker ongeldig.']
  ],
  keycards: [
    ['opsomming', 73, 'دلالة الأمر من ثلاث نواح', 'Het gebod in drie opzichten', ['الحكم: وجوب أو ندب أو إباحة', 'الزمن: فور أو تراخ', 'العدد: مرة أو تكرار'], ['Oordeel: verplicht, aanbevolen of toegestaan', 'Tijd: meteen of later', 'Aantal: eenmaal of herhaald']],
    ['onderscheid', 71, 'الإرشاد والندب', 'Raad en aanbeveling', ['الإرشاد: لمصلحة دنيوية، فلا ثواب', 'الندب: لمصلحة أخروية'], ['Raad: wereldlijk belang, geen beloning', 'Aanbeveling: belang voor het Hiernamaals']],
    ['onderscheid', 73, 'الطلب الجازم والوجوب', 'Stellig verzoek en verplichting', ['الوجوب: طلب جازم مع ترتب العقاب', 'الطلب الجازم: من حيث اللغة، بغض النظر عن العقاب'], ['Verplichting: stellig verzoek met straf', 'Stellig verzoek: talig, los van straf']],
    ['opsomming', 76, 'أمثلة الأمر بالأمر في الشرع', 'Gebieden te gebieden in de sharīʿa', ['«مرها لتغتسل»', '«مرها فلتصبر ولتحتسب»', '«مره فليراجعها»'], ['"Gebied haar dat zij zich wast"', '"Gebied haar geduldig te zijn en op beloning te hopen"', '"Gebied hem dat hij haar terugneemt"']],
    ['opsomming', 80, 'معاني صيغة النهي', 'Betekenissen van "doe niet"', ['التحريم وهو الأصل: ﴿لا تقربوا الزنا﴾', 'الكراهة: ﴿ولا تيمموا الخبيث﴾', 'الإرشاد: ﴿لا تسألوا عن أشياء﴾', 'الدعاء: ﴿ربنا لا تزغ قلوبنا﴾', 'بيان العاقبة', 'التقليل والاحتقار', 'اليأس: ﴿لا تعتذروا اليوم﴾'], ['Verbod, de grondregel: "nadert de ontucht niet"', 'Afkeuring: "zoekt niet het slechte uit"', 'Raad: "vraagt niet naar dingen"', 'Smeekbede: "Onze Heer, laat onze harten niet afdwalen"', 'Uitkomst tonen', 'Kleinering', 'Wanhoop: "verontschuldigt je vandaag niet"']]
  ],
  subtleties: [
    [69, 'لماذا خرجت "كف" من حد الأمر', 'Waarom "houd je in" buiten de definitie valt', 'كف ودع واترك وذر صيغتها صيغة أمر لكن مدلولها الترك، فلا تعد من جنس الأمر عندهم.', '"Houd je in", "laat" enz. hebben de vorm van een gebod maar betekenen laten; daarom tellen ze niet als gebod.'],
    [70, 'النائم يأمر ولا يعد أمراً', 'Een slaper geeft geen gebod', 'مثّل به من اعتبر الإرادة، احترازاً من معاني الصيغة الأخرى كالتهديد والتسخير والتعجيز.', 'Wie wil eist, geeft dit voorbeeld, om de andere betekenissen (dreiging, onderwerping, onvermogen) uit te sluiten.'],
    [72, 'الأبهري يفرق بين أمر الله وأمر النبي ﷺ', 'Al-Abharī onderscheidt gebod van Allah en van de Profeet ﷺ', 'أمر النبي ﷺ إن وافق نصاً أو بيّن مجملاً فللوجوب، وإن كان مبتدأ لم يسبقه أمر قرآني فللندب.', 'Een gebod van de Profeet ﷺ dat bij een tekst aansluit of iets uitlegt, verplicht; een eigen gebod zonder koranisch gebod ervoor beveelt aan.'],
    [74, 'لماذا لم يقولوا بالتحريم في الأمر بعد الحظر', 'Waarom "verplicht" niet terugkeert zoals "verboden"', 'قال الجمهور بالتحريم في النهي بعد الوجوب ولم يقولوا بالوجوب في الأمر بعد الحظر، لأن النهي أقوى من الأمر وآكد.', 'Na een plicht maakt een verbod iets verboden, maar na een verbod maakt een gebod iets niet verplicht: een verbod is sterker.'],
    [75, 'المبادر ممتثل', 'Wie meteen handelt, gehoorzaamt', 'وإن لم يكن الأمر للفور فالمبادر في أول الوقت ممتثل، خلافاً لمن منع لاحتمال إيقاعه على غير مراد الآمر.', 'Ook als het gebod niet "meteen" betekent, gehoorzaamt wie direct handelt; anders dan wie zegt dat hij dan misschien niet doet wat bedoeld is.'],
    [76, 'الرازي هنا هو الجصاص', 'Ar-Rāzī is hier al-Jaṣṣāṣ', 'في "الرازي والشيرازي وعبد الجبار: الأمر يستلزم القضاء" المقصود القاضي أبو بكر الرازي الجصاص، أما صاحب المحصول فيسميه "الإمام".', 'In "ar-Rāzī, ash-Shīrāzī en ʿAbd al-Jabbār: het gebod brengt inhalen mee" is Abū Bakr ar-Rāzī al-Jaṣṣāṣ bedoeld; de auteur noemt de schrijver van al-Maḥṣūl "al-Imām".'],
    [79, 'سكوته عن العلو والاستعلاء في النهي', 'Zwijgen over positie en toon bij het verbod', 'سكوته عنهما في حد النهي ترجيح منه لعدم اشتراطهما فيه كما في الأمر.', 'Dat hij ze in de definitie van het verbod niet noemt, betekent dat hij ze ook daar niet vereist.'],
    [81, 'استشكال الوضوء بالمغصوب', 'Het probleem van wuḍūʾ met geroofd water', 'الوضوء عبادة، وقد قرر أن النهي في العبادة يقتضي الفساد مطلقاً، ثم جعل الوضوء بمغصوب مما لا يفيد فيه الفساد لأنه لخارج.', 'Wuḍūʾ is aanbidding, en hij zei dat een verbod bij aanbidding altijd ongeldig maakt; toch noemt hij wuḍūʾ met geroofd water geldig omdat het verbod van buiten komt.'],
    [82, 'ثمرة قول أبي حنيفة', 'Gevolg van de mening van Abū Ḥanīfa', 'المنهي لوصفه يفيد الصحة، لأنه لا يقال للأعمى لا تبصر؛ فالفعل صحيح والإثم واقع لمخالفة النهي.', 'Wat om een eigenschap verboden is, is geldig: je zegt ook niet tegen een blinde "kijk niet". De daad is geldig, maar men zondigt door het verbod te overtreden.']
  ],
  rules: [
    [72, 'الأمر المجرد عن القرينة للوجوب', 'Een gebod zonder aanwijzing verplicht', 'قول الجمهور والسلف.', 'Mening van de meerderheid en de vroege generaties.'],
    [74, 'الأمر المطلق لا يقتضي التكرار ولا الفور', 'Een onbepaald gebod vraagt geen herhaling of onmiddellijkheid'],
    [76, 'القضاء بأمر جديد', 'Inhalen vergt een nieuw gebod', 'عند الأكثر.', 'Volgens de meesten.'],
    [78, 'التأسيس أولى من التأكيد', 'Een nieuw oordeel gaat vóór versterking'],
    [79, 'النهي يقتضي الدوام ما لم يقيد بالمرة', 'Een verbod geldt blijvend tenzij beperkt tot één keer', 'ولذلك يقدم على الأمر عند التعارض.', 'Daarom gaat het bij tegenstrijdigheid vóór het gebod.'],
    [81, 'النهي في العبادات يقتضي الفساد', 'Een verbod maakt aanbidding ongeldig', '', '', 'من قضى فائتة في وقت منهي لم يصح.', 'Wie een gemist gebed op een verboden tijd inhaalt, bidt ongeldig.']
  ],
  disputes: [
    { page: 69, q: ['هل يعتبر في الأمر العلو والاستعلاء؟', 'Zijn hoge positie en toon nodig voor een gebod?'], views: [['لا يعتبران', 'Geen van beide'], ['القشيري والقاضي عبد الوهاب: يعتبران', 'Al-Qushayrī en al-Qāḍī ʿAbd al-Wahhāb: beide'], ['المعتزلة والشيرازي وابن الصباغ والسمعاني: العلو', 'Muʿtazila, ash-Shīrāzī, Ibn aṣ-Ṣabbāgh, as-Samʿānī: positie'], ['أبو الحسين والرازي والآمدي وابن الحاجب: الاستعلاء', 'Abū l-Ḥusayn, ar-Rāzī, al-Āmidī, Ibn al-Ḥājib: toon']], preferred: ['لا يعتبران', 'Geen van beide'] },
    { page: 72, q: ['ما حقيقة صيغة افعل؟', 'Wat betekent ifʿal eigenlijk?'], views: [['الجمهور: الوجوب', 'Meerderheid: verplichting'], ['الندب', 'Aanbeveling'], ['الماتريدي: القدر المشترك', 'Al-Māturīdī: het gemeenschappelijke'], ['التوقف: القاضي والغزالي والآمدي', 'Geen uitspraak: al-Bāqillānī, al-Ghazālī, al-Āmidī'], ['المختار: الطلب الجازم', 'Gekozen: stellig verzoek']], preferred: ['الطلب الجازم، فإن صدر من الشارع أوجب', 'Stellig verzoek; van de Wetgever verplichtend'] },
    { page: 73, q: ['ما حكم الأمر بعد الحظر؟', 'Wat is een gebod na een verbod?'], views: [['للإباحة', 'Toegestaan'], ['أبو الطيب والشيرازي والسمعاني والرازي: للوجوب', 'Abū ṭ-Ṭayyib, ash-Shīrāzī, as-Samʿānī, ar-Rāzī: verplicht'], ['الجويني: التوقف', 'Al-Juwaynī: geen uitspraak'], ['شيخ الإسلام: لما كان عليه قبل الحظر', 'Ibn Taymiyya: wat het vóór het verbod was']] },
    { page: 74, q: ['هل يقتضي الأمر المطلق التكرار؟', 'Vraagt een onbepaald gebod herhaling?'], views: [['لطلب الماهية والمرة ضرورية', 'De handeling; één keer is onvermijdelijk'], ['المرة مدلوله', 'Eenmaal is de betekenis'], ['الأستاذ والقزويني: التكرار مطلقاً', 'Al-Ustādh en al-Qazwīnī: altijd herhaling'], ['إن علق بشرط أو صفة', 'Bij voorwaarde of eigenschap'], ['الجويني: الوقف', 'Al-Juwaynī: geen uitspraak']] },
    { page: 75, q: ['هل الأمر للفور؟', 'Is een gebod voor meteen?'], views: [['المصنف: لا فور ولا تراخ', 'De auteur: geen van beide'], ['للفور: بعض الأحناف والشافعية وجمهور المالكية والحنابلة', 'Meteen: sommige Ḥanafieten en Shāfiʿieten, de meeste Mālikieten, de Ḥanbalieten'], ['للتراخي: الغزالي والطبري', 'Later: al-Ghazālī, aṭ-Ṭabarī'], ['الباقلاني: الفور أو العزم', 'Al-Bāqillānī: meteen of het voornemen'], ['مشترك', 'Meerduidig']] },
    { page: 76, q: ['هل الأمر بالأداء يستلزم القضاء؟', 'Brengt een gebod om te verrichten ook inhalen mee?'], views: [['الجصاص والشيرازي وعبد الجبار: نعم', 'Al-Jaṣṣāṣ, ash-Shīrāzī, ʿAbd al-Jabbār: ja'], ['الأكثر: القضاء بأمر جديد', 'De meesten: inhalen vraagt een nieuw gebod']] },
    { page: 77, q: ['هل الأمر بالشيء نهي عن ضده؟', 'Is een gebod een verbod op het tegendeel?'], views: [['الأشعري والقاضي: عينه', 'Al-Ashʿarī en al-Qāḍī: het is het'], ['القاضي وعبد الجبار وأبو الحسين والرازي والآمدي: يتضمنه', 'Al-Qāḍī, ʿAbd al-Jabbār, Abū l-Ḥusayn, ar-Rāzī, al-Āmidī: het omvat het'], ['الجويني والغزالي: لا عينه ولا يتضمنه', 'Al-Juwaynī en al-Ghazālī: geen van beide'], ['أمر الوجوب يتضمن فقط', 'Alleen het verplichtende gebod omvat het']] },
    { page: 81, q: ['هل يقتضي النهي الفساد؟', 'Maakt een verbod ongeldig?'], views: [['الأكثر: في العبادات مطلقاً، وفي المعاملات لداخل أو لازم', 'De meesten: aanbidding altijd, transacties bij iets binnen of noodzakelijks'], ['الغزالي والرازي: في العبادات فقط', 'Al-Ghazālī en ar-Rāzī: alleen aanbidding'], ['أحمد: مطلقاً', 'Aḥmad: altijd'], ['أبو حنيفة: لا مطلقاً', 'Abū Ḥanīfa: nooit']] }
  ],
  pitfalls: [
    [69, 'اشتراط علو الآمر في كل أمر', 'Altijd een hogere gebieder eisen', 'لا يعتبر فيه علو ولا استعلاء عند المصنف.', 'Volgens de auteur is geen van beide nodig.'],
    [70, 'التسوية بين الأمر والإرادة مطلقاً', 'Gebod en wil volledig gelijkstellen', 'يُفرق بين الإرادة الشرعية والكونية: الكافر أريد منه الإيمان شرعاً لا كوناً.', 'Onderscheid de sharʿī-wil en de wil in de schepping: van de ongelovige is geloof sharʿī gewild, niet in de schepping.'],
    [74, 'الاستدلال بالأمر المطلق على التكرار', 'Uit een onbepaald gebod herhaling afleiden', 'المعلق بشرط أو صفة ليس موضع البحث، والمطلق لطلب الماهية.', 'Een gebod met voorwaarde of eigenschap is een ander geval; een onbepaald gebod vraagt alleen de handeling.'],
    [76, 'جعل الأولاد مكلفين بـ«مروا أولادكم بالصلاة»', 'Kinderen verantwoordelijk maken via "gebiedt jullie kinderen"', 'الأصل أن الأمر بالأمر شرعاً أمر به، لكن الأولاد خارج دائرة التكليف.', 'In de sharīʿa is gebieden te gebieden een gebod, maar kinderen vallen buiten taklīf.'],
    [82, 'القول إن نفي القبول يعني الفساد قطعاً', 'Zeggen dat "niet aanvaard" altijd ongeldig betekent', 'فيه قولان: دليل الصحة مع عدم الثواب، أو دليل الفساد.', 'Twee meningen: geldig zonder beloning, of ongeldig.']
  ],
  ayat: [
    [68, 'وأمر أهلك بالصلاة', '"أمر" حقيقة في القول المخصوص.', 'Amr letterlijk als uitspraak.'],
    [69, 'أتعجبين من أمر الله', '"أمر" مجاز في الفعل.', 'Amr figuurlijk als daad.'],
    [69, 'وما أمر فرعون برشيد', '"أمر" بمعنى الشأن.', 'Amr als "zaak".'],
    [71, 'وأقيموا الصلاة', 'صيغة افعل للوجوب.', 'Ifʿal voor verplichting.'],
    [71, 'فكاتبوهم إن علمتم فيهم خيراً', 'للندب.', 'Voor aanbeveling.'],
    [71, 'كلوا من الطيبات', 'للإباحة.', 'Voor toestemming.'],
    [71, 'اعملوا ما شئتم', 'للتهديد.', 'Voor dreiging.'],
    [71, 'واستشهدوا شهيدين', 'للإرشاد.', 'Voor raad.'],
    [71, 'كونوا قردة خاسئين', 'للتسخير.', 'Voor onderwerping.'],
    [71, 'كن فيكون', 'للتكوين.', 'Voor schepping.'],
    [71, 'فأتوا بسورة من مثله', 'للتعجيز.', 'Om onvermogen te tonen.'],
    [71, 'فاصبروا أو لا تصبروا', 'للتسوية.', 'Voor gelijkheid.'],
    [72, 'فاقض ما أنت قاض', 'للتفويض.', 'Voor overlaten.'],
    [72, 'فانظر ماذا ترى', 'للمشورة.', 'Voor overleg.'],
    [73, 'كتب عليكم إذا حضر أحدكم الموت إن ترك خيراً الوصية', 'وجوب الوصية، ثم ورد النهي «لا وصية لوارث».', 'Het testament was verplicht; daarna kwam "geen testament voor een erfgenaam".'],
    [75, 'وإن كنتم جنباً فاطهروا', 'الأمر المعلق بشرط.', 'Gebod met een voorwaarde.'],
    [79, 'لا تقربوا الزنا', 'صيغة النهي للتحريم، والنهي عن واحد.', 'Verbod; over één zaak.'],
    [80, 'ولا تيمموا الخبيث منه تنفقون', 'النهي للكراهة.', 'Verbod als afkeuring.'],
    [80, 'لا تسألوا عن أشياء إن تبد لكم تسؤكم', 'النهي للإرشاد.', 'Verbod als raad.'],
    [80, 'ربنا لا تزغ قلوبنا', 'النهي للدعاء.', 'Verbod als smeekbede.'],
    [80, 'ولا تحسبن الذين قتلوا في سبيل الله أمواتاً', 'النهي لبيان العاقبة.', 'Verbod om de uitkomst te tonen.'],
    [80, 'يا أيها الذين كفروا لا تعتذروا اليوم', 'النهي لليأس.', 'Verbod als wanhoop.'],
    [80, 'وأن تجمعوا بين الأختين', 'النهي عن متعدد جمعاً.', 'Verbod op meerdere samen.']
  ],
  hadith: [
    { text: 'كل مما يليك', nl: '"Eet van wat voor je ligt."', note: ['صيغة الأمر للتأديب.', 'Gebiedende vorm als opvoeding.'], pages: [71] },
    { text: 'إذا لم تستح فاصنع ما شئت', nl: '"Als je je niet schaamt, doe dan wat je wilt."', note: ['صيغة الأمر بمعنى الخبر.', 'Gebiedende vorm als mededeling.'], pages: [71, 72] },
    { text: 'لا وصية لوارث', nl: '"Er is geen testament voor een erfgenaam."', note: ['مثال للنهي بعد الوجوب.', 'Voorbeeld van een verbod na een plicht.'], pages: [73] },
    { text: 'مرها لتغتسل', nl: '"Gebied haar dat zij zich wast."', note: ['الأمر بالأمر في الشرع.', 'Gebieden te gebieden in de sharīʿa.'], pages: [76] },
    { text: 'مرها فلتصبر ولتحتسب', nl: '"Gebied haar geduldig te zijn en op beloning te hopen."', note: ['الأمر بالأمر في الشرع.', 'Gebieden te gebieden in de sharīʿa.'], pages: [76] },
    { text: 'مره فليراجعها', nl: '"Gebied hem dat hij haar terugneemt."', note: ['في طلاق ابن عمر امرأته وهي حائض؛ دليل على وقوع الطلاق مع النهي.', 'Bij Ibn ʿUmar die zijn vrouw tijdens haar menstruatie verstootte; bewijs dat de verstoting toch geldig was.'], pages: [76, 82] },
    { text: 'مروا أولادكم بالصلاة لسبع', nl: '"Gebiedt jullie kinderen te bidden wanneer ze zeven zijn."', note: ['الأولاد خارج دائرة التكليف.', 'De kinderen vallen buiten taklīf.'], pages: [76] },
    { text: 'تصدقوا، تصدقوا، تصدقوا', takhrij: ['مسلم، كما في المذكرات', 'Muslim, volgens de notities'], nl: '"Geeft aalmoezen, geeft aalmoezen, geeft aalmoezen."', note: ['مثال للأمرين المتعاقبين المتماثلين.', 'Voorbeeld van gelijke geboden na elkaar.'], pages: [78] },
    { text: 'لا يقبل الله صلاة أحدكم إذا أحدث حتى يتوضأ', nl: '"Allah aanvaardt het gebed van een van jullie niet als hij onrein werd, totdat hij wuḍūʾ doet."', note: ['مثال لنفي القبول.', 'Voorbeeld van "niet aanvaard".'], pages: [82] },
    { text: 'أربعة لا تجزئ في الأضاحي', nl: '"Vier (dieren) volstaan niet als offer."', note: ['مثال لنفي الإجزاء.', 'Voorbeeld van "volstaat niet".'], pages: [83] }
  ],
  persons: [
    ['al-qushayri', 'text', [69], 'اعتبر في الأمر العلو والاستعلاء.', 'Vond hoge positie en toon beide nodig.'],
    ['al-qadi-abd-al-wahhab', 'text', [69], 'اعتبر في الأمر العلو والاستعلاء.', 'Vond hoge positie en toon beide nodig.'],
    ['abu-ishaq-ash-shirazi', 'text', [69, 73, 76], 'اعتبر العلو، وقال الأمر بعد الحظر للوجوب، والأمر يستلزم القضاء.', 'Vond positie nodig; een gebod na verbod verplicht; het gebod brengt inhalen mee.'],
    ['ibn-as-sabbagh', 'text', [69], 'اعتبر العلو في الأمر.', 'Vond positie nodig.'],
    ['as-samani', 'text', [69, 73], 'اعتبر العلو، وقال الأمر بعد الحظر للوجوب.', 'Vond positie nodig; een gebod na verbod verplicht.'],
    ['abu-al-husayn-al-basri', 'text', [69, 77], 'اعتبر الاستعلاء، وقال الأمر يتضمن النهي عن ضده.', 'Vond toon nodig; het gebod omvat het verbod op het tegendeel.'],
    ['fakhr-ad-din-ar-razi', 'text', [69, 73, 77, 81], 'اعتبر الاستعلاء، وقال الأمر بعد الحظر للوجوب، وقال الأمر يتضمن النهي عن ضده، والنهي يقتضي الفساد في العبادات فقط.', 'Vond toon nodig; een gebod na verbod verplicht; gebod omvat het verbod op het tegendeel; verbod maakt alleen aanbidding ongeldig.'],
    ['al-amidi', 'text', [69, 72, 77], 'اعتبر الاستعلاء، وتوقف في صيغة افعل، وقال الأمر يتضمن النهي عن ضده.', 'Vond toon nodig; geen uitspraak over ifʿal; gebod omvat het verbod op het tegendeel.'],
    ['ibn-al-hajib', 'text', [69], 'اعتبر الاستعلاء.', 'Vond toon nodig.'],
    ['abu-ali-al-jubbai', 'text', [70], 'اعتبر إرادة الدلالة باللفظ على الطلب.', 'Eiste dat de spreker het verzoek wil.'],
    ['abu-hashim-al-jubbai', 'text', [70], 'اعتبر مع أبيه إرادة الدلالة على الطلب.', 'Eiste met zijn vader de wil tot verzoek.'],
    ['taj-ad-din-as-subki', 'text', [70, 73, 75], 'قال: الطلب بديهي، واختار أن الأمر حقيقة في الطلب الجازم، ولا يفيد الفور.', 'Zei: een verzoek is vanzelfsprekend; koos "stellig verzoek"; het gebod vraagt niet "meteen".'],
    ['al-ashari', 'text', [71, 77], 'نُقل عنه نفي صيغة تخص الأمر، وقال الأمر النفسي نهي عن ضده.', 'Van hem wordt overgeleverd dat het gebod geen eigen vorm heeft; het innerlijke gebod is het verbod op het tegendeel.'],
    ['al-maturidi', 'text', [72], 'قال: صيغة افعل للقدر المشترك بين الوجوب والندب.', 'Ifʿal is voor wat verplicht en aanbevolen gemeen hebben.'],
    ['al-baqillani', 'text', [72, 75, 77], 'توقف في صيغة افعل، وقال الأمر للفور أو العزم، والأمر النفسي نهي عن ضده أو يتضمنه.', 'Geen uitspraak over ifʿal; gebod meteen of met voornemen; innerlijk gebod is of omvat het verbod op het tegendeel.'],
    ['al-ghazali', 'text', [72, 75, 77, 81], 'توقف في صيغة افعل، وقال الأمر للتراخي، ولا عين النهي عن ضده ولا يتضمنه، والنهي يفسد العبادات فقط.', 'Geen uitspraak over ifʿal; gebod mag later; geen verbod op het tegendeel; verbod maakt alleen aanbidding ongeldig.'],
    ['al-qadi-abd-al-jabbar', 'text', [72, 76, 77], 'قال: صيغة افعل لإرادة الامتثال، والأمر يستلزم القضاء ويتضمن النهي عن ضده.', 'Ifʿal is de wil tot opvolging; gebod brengt inhalen mee en omvat het verbod op het tegendeel.'],
    ['al-abhari', 'text', [72], 'شيخ المالكية؛ أمر الله للوجوب وأمر النبي ﷺ المبتدأ للندب.', 'Leider van de Mālikieten; Allahs gebod verplicht, een eigen gebod van de Profeet ﷺ beveelt aan.'],
    ['abu-hamid-al-isfarayini', 'text', [73], 'وافقه المصنف: صيغة الأمر حقيقة في الطلب الجازم.', 'De auteur volgt hem: ifʿal is een stellig verzoek.'],
    ['al-juwayni', 'text', [73, 74, 75, 77], 'الطلب الجازم، وتوقف في الأمر بعد الحظر والنهي بعد الوجوب وفي التكرار، ولا عين النهي ولا يتضمنه.', 'Stellig verzoek; geen uitspraak over gebod na verbod, verbod na plicht en herhaling; geen verbod op het tegendeel.'],
    ['abu-at-tayyib-at-tabari', 'text', [73], 'قال: الأمر بعد الحظر للوجوب.', 'Een gebod na een verbod verplicht.'],
    ['ibn-taymiyya', 'text', [73], 'شيخ الإسلام؛ الأمر بعد الحظر لما كان عليه قبله.', 'Shaykh al-Islām; een gebod na een verbod keert terug naar wat het daarvoor was.'],
    ['abu-ishaq-al-isfarayini', 'text', [74], 'الأستاذ؛ الأمر للتكرار مطلقاً.', 'Al-Ustādh; een gebod vraagt altijd herhaling.'],
    ['al-qazwini', 'text', [74], 'الأمر للتكرار مطلقاً.', 'Een gebod vraagt altijd herhaling.'],
    ['al-jassas', 'text', [76], 'القاضي أبو بكر الرازي؛ الأمر يستلزم القضاء.', 'Al-Qāḍī Abū Bakr ar-Rāzī; het gebod brengt inhalen mee.'],
    ['al-izz-ibn-abd-as-salam', 'text', [81], 'النهي يفسد المعاملة إن احتمل رجوعه إلى أمر داخل.', 'Een verbod maakt een transactie ongeldig als het mogelijk over iets binnen gaat.'],
    ['ahmad-ibn-hanbal', 'text', [82], 'النهي يفيد الفساد مطلقاً.', 'Een verbod maakt altijd ongeldig.'],
    ['abu-hanifa', 'text', [82], 'النهي لا يفيد الفساد مطلقاً، والمنهي لوصفه يفيد الصحة.', 'Een verbod maakt nooit ongeldig; wat om een eigenschap verboden is, is geldig.'],
    ['abd-allah-ibn-umar', 'text', [82], 'طلق امرأته وهي حائض، فقال النبي ﷺ لأبيه: «مره فليراجعها».', 'Verstootte zijn vrouw tijdens haar menstruatie; de Profeet ﷺ zei tegen zijn vader: "gebied hem dat hij haar terugneemt".'],
    ['umar-ibn-al-khattab', 'text', [82], 'قال له النبي ﷺ في ابنه: «مره فليراجعها».', 'Tegen hem zei de Profeet ﷺ over zijn zoon: "gebied hem dat hij haar terugneemt".']
  ],
  review: [
    ['"أمر" حقيقة في القول مجاز في الفعل.', 'Amr: letterlijk uitspraak, figuurlijk daad.'],
    ['لا يعتبر في الأمر علو ولا استعلاء.', 'Positie en toon zijn niet nodig.'],
    ['الأمر غير الإرادة.', 'Gebod is niet hetzelfde als wil.'],
    ['صيغة افعل حقيقة في الوجوب عند الجمهور.', 'Ifʿal is volgens de meerderheid verplichting.'],
    ['الأمر المطلق لا لمرة ولا لتكرار ولا لفور.', 'Onbepaald gebod: geen eenmaal, herhaling of meteen.'],
    ['القضاء بأمر جديد.', 'Inhalen vraagt een nieuw gebod.'],
    ['الإتيان بالمأمور به يستلزم الإجزاء.', 'Wie het gebodene doet, heeft voldaan.'],
    ['الأمر اللفظي ليس عين النهي عن ضده ولا يتضمنه.', 'Het verwoorde gebod is geen verbod op het tegendeel.'],
    ['في المعطوف التأسيس أرجح.', 'Met "en" is een nieuw oordeel sterker.'],
    ['النهي يقتضي الدوام.', 'Een verbod geldt blijvend.'],
    ['النهي يقتضي الفساد في العبادات مطلقاً.', 'Een verbod maakt aanbidding altijd ongeldig.']
  ],
  quiz: [
    { type: 'mc', page: 69, q: ['"غير كف" في حد الأمر يخرج:', '"Geen zich-inhouden" in de definitie sluit uit:'], options: [['النهي', 'الإباحة', 'الندب', 'الدعاء'], ['het verbod', 'toestemming', 'aanbeveling', 'smeekbede']], answer: 0, explain: ['لأن النهي طلب الكف.', 'Want een verbod vraagt zich in te houden.'] },
    { type: 'mc', page: 69, q: ['من اعتبر الاستعلاء دون العلو؟', 'Wie eiste toon maar geen positie?'], options: [['أبو الحسين والرازي والآمدي وابن الحاجب', 'القشيري والقاضي عبد الوهاب', 'المعتزلة والشيرازي', 'المصنف'], ['Abū l-Ḥusayn, ar-Rāzī, al-Āmidī, Ibn al-Ḥājib', 'al-Qushayrī en al-Qāḍī ʿAbd al-Wahhāb', 'de Muʿtazila en ash-Shīrāzī', 'de auteur']], answer: 0, explain: ['والمعتزلة والشيرازي اعتبروا العلو.', 'De Muʿtazila en ash-Shīrāzī eisten positie.'] },
    { type: 'mc', page: 71, q: ['﴿فأتوا بسورة من مثله﴾ صيغة افعل فيها:', 'In "brengt een soera zoals deze" betekent ifʿal:'], options: [['التعجيز', 'التسخير', 'التكوين', 'الإهانة'], ['onvermogen tonen', 'onderwerping', 'schepping', 'vernedering']], answer: 0, explain: ['لأنهم لا يقدرون عليه.', 'Want dat kunnen ze niet.'] },
    { type: 'tf', page: 72, q: ['قال الأبهري: أمر النبي ﷺ المبتدأ للوجوب.', 'Al-Abharī: een eigen gebod van de Profeet ﷺ verplicht.'], answer: 1, explain: ['قال: للندب، وأمر الله للوجوب.', 'Hij zei: het beveelt aan; Allahs gebod verplicht.'] },
    { type: 'mc', page: 73, q: ['من توقف في الأمر بعد الحظر؟', 'Wie gaf geen uitspraak over een gebod na een verbod?'], options: [['الجويني', 'الشيرازي', 'السمعاني', 'أبو الطيب'], ['al-Juwaynī', 'ash-Shīrāzī', 'as-Samʿānī', 'Abū ṭ-Ṭayyib']], answer: 0, explain: ['وتوقف كذلك في النهي بعد الوجوب.', 'Ook niet over een verbod na een plicht.'] },
    { type: 'mc', page: 74, q: ['ما الراجح عند المصنف في الأمر المطلق؟', 'Wat kiest de auteur bij een onbepaald gebod?'], options: [['لطلب الماهية والمرة ضرورية', 'للتكرار مطلقاً', 'المرة مدلوله', 'الوقف'], ['de handeling; één keer is onvermijdelijk', 'altijd herhaling', 'eenmaal is de betekenis', 'geen uitspraak']], answer: 0, explain: ['لا يدل على مرة ولا تكرار.', 'Het zegt niets over eenmaal of herhaling.'] },
    { type: 'tf', page: 76, q: ['الرازي القائل إن الأمر يستلزم القضاء هو صاحب المحصول.', 'De ar-Rāzī die zegt dat het gebod inhalen meebrengt, is de schrijver van al-Maḥṣūl.'], answer: 1, explain: ['المقصود الجصاص، وصاحب المحصول يسميه الإمام.', 'Bedoeld is al-Jaṣṣāṣ; de schrijver van al-Maḥṣūl heet "al-Imām".'] },
    { type: 'mc', page: 78, q: ['الأمران المتعاقبان المتماثلان مع العطف، الأرجح فيهما:', 'Bij twee gelijke geboden na elkaar met "en" is het sterkst:'], options: [['التأسيس', 'التأكيد', 'الوقف', 'النسخ'], ['een nieuw oordeel', 'versterking', 'geen uitspraak', 'opheffing']], answer: 0, explain: ['إلا إن رجح التأكيد بعادي.', 'Tenzij gewoonte op versterking wijst.'] },
    { type: 'mc', page: 80, q: ['النهي عن لبس نعل واحدة مثال للنهي عن متعدد:', 'Het verbod om één sandaal te dragen is een verbod op meerdere:'], options: [['فرقاً', 'جمعاً', 'جميعاً', 'عن واحد'], ['apart', 'samen', 'in elk geval', 'over één']], answer: 0, explain: ['تلبسان أو تنزعان ولا يفرق بينهما.', 'Beide aan of beide uit, niet gescheiden.'] },
    { type: 'mc', page: 82, q: ['من قال: النهي لا يفيد الفساد مطلقاً؟', 'Wie zei: een verbod maakt nooit ongeldig?'], options: [['أبو حنيفة', 'أحمد', 'الغزالي', 'المصنف'], ['Abū Ḥanīfa', 'Aḥmad', 'al-Ghazālī', 'de auteur']], answer: 0, explain: ['وأحمد: يفيد مطلقاً.', 'Aḥmad: altijd ongeldig.'] }
  ]
})
