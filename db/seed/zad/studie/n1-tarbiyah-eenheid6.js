// Hoofdstukkaart bij التربية الإسلامية (١) الحقوق, eenheid 6: حقوق العمل والولاية (lessen 21–24, boek p. 74–88).
// Het boek heeft zelf geen eenheden; deze indeling in zes thema's is van de samenvatter.
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen van p. 84–85 zijn in het boek "alleen ter kennisname".
// Niet in het hadith-tabblad: de berichten van ʿĀʾisha en Anas over hoe de Profeet ﷺ zijn bedienden behandelde
// en het verhaal van Abū Masʿūd en zijn slaaf (p. 74–75), omdat er in de leesnotities geen takhrij bij staat
// (de strekking staat wel bij de goede behandeling); en "geef de arbeider zijn loon" (p. 75) en het woord over
// het eren van sultan en geleerden (p. 81), omdat de bron nog gecontroleerd moet worden.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب التربية الإسلامية (١) الحقوق، سلسلة زاد العلمية',
  pages: '74–88',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester1_AlTarbyiah/page/n{p}/mode/1up'
}

const FYI = 'المقطع في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'

const HADITH = [
  { narrator: '', text: 'لأن يأخذ أحدكم حبله ثم يغدو إلى الجبل فيحتطب فيبيع فيأكل ويتصدق، خير له من أن يسأل الناس', takhrij: 'أخرجه البخاري', note: 'في فضل العمل.', pages: [74], nl: 'Dat een van jullie zijn touw neemt, naar de berg gaat, hout sprokkelt, het verkoopt, ervan eet en liefdadigheid geeft, is beter voor hem dan de mensen te vragen', nlNote: 'Over de waarde van werken.' },
  { narrator: '', text: 'إخوانكم خولكم، جعلهم الله تحت أيديكم، فمن كان أخوه تحت يده فليطعمه مما يأكل، وليلبسه مما يلبس، ولا تكلفوهم ما يغلبهم، فإن كلفتموهم فأعينوهم', takhrij: 'أخرجه البخاري', note: 'خولكم: الذين يخولون أموركم.', pages: [74, 76], nl: 'Jullie bedienden zijn jullie broeders, die Allah onder jullie gezag heeft gesteld. Wie zijn broeder onder zich heeft, laat hem hem te eten geven van wat hij zelf eet en hem kleden met wat hij zelf draagt; belast hen niet met wat hun te zwaar is, en doe je dat toch, help hen dan', nlNote: 'Khawal: wie jullie zaken behartigen.' },
  { narrator: 'أبو هريرة', text: 'ثلاثة أنا خصمهم يوم القيامة ... ورجل استأجر أجيرًا فاستوفى منه ولم يعطه أجره', takhrij: 'أخرجه البخاري', note: '', pages: [75], nl: 'Tegen drie mensen treed ik op de Dag der Opstanding op ... en een man die een arbeider in dienst nam, het werk van hem volledig kreeg en hem zijn loon niet gaf', nlNote: '' },
  { narrator: '', text: 'الحمد لله الذي أنقذه من النار', takhrij: 'أخرجه البخاري', note: 'لما عاد الغلام اليهودي الذي كان يخدمه فدعاه إلى الإسلام فأسلم.', pages: [75], nl: 'Alle lof zij Allah, Die hem van het Vuur heeft gered', nlNote: 'Toen hij de joodse jongen bezocht die hem diende, hem tot de islam uitnodigde en de jongen moslim werd.' },
  { narrator: 'أبو هريرة', text: 'ما من مؤمن إلا وأنا أولى به في الدنيا والآخرة، اقرؤوا إن شئتم: ﴿النبي أولى بالمؤمنين من أنفسهم﴾، فأيما مؤمن مات وترك مالًا فليرثه عصبته من كانوا، ومن ترك دينًا أو ضياعًا فليأتني فأنا مولاه', takhrij: 'في الصحيحين', note: 'والمقصود بيت مال المسلمين أو ما يقوم مقامه.', pages: [76], nl: 'Er is geen gelovige of ik sta hem het naast, in dit leven en het Hiernamaals; reciteer als je wilt: "De Profeet staat de gelovigen nader dan zijzelf." Elke gelovige die sterft en bezit nalaat, laat zijn erfgenamen hem beërven, wie dat ook zijn; en wie een schuld of hulpeloze nabestaanden nalaat, laat die bij mij komen, want ik ben zijn beschermer', nlNote: 'Bedoeld is de staatskas van de moslims of wat die vervangt.' },
  { narrator: '', text: 'والخادم في مال سيده راع وهو مسؤول عن رعيته', takhrij: 'أخرجه البخاري', note: 'في حقوق صاحب العمل.', pages: [76], nl: 'De bediende is herder over het bezit van zijn heer en wordt ondervraagd over wat hem is toevertrouwd', nlNote: 'Over de rechten van de werkgever.' },
  { narrator: '', text: 'من غش فليس منا', takhrij: 'أخرجه مسلم', note: '', pages: [76], nl: 'Wie bedriegt, hoort niet bij ons', nlNote: '' },
  { narrator: '', text: 'من استعملناه على عمل فرزقناه رزقًا، فما أخذ بعد ذلك فهو غلول', takhrij: 'رواه أبو داود بسند صحيح', note: '', pages: [77], nl: 'Wie wij met een taak belasten en een vergoeding geven: wat hij daarna nog neemt, is verduistering', nlNote: '' },
  { narrator: 'أبو حميد الساعدي', text: 'ما بال عامل أبعثه فيقول: هذا لكم وهذا أهدي لي، أفلا قعد في بيت أبيه أو في بيت أمه حتى ينظر أيهدى إليه أم لا؟ والذي نفس محمد بيده لا ينال أحد منكم منها شيئًا إلا جاء به يوم القيامة يحمله على عنقه ... اللهم هل بلغت', takhrij: 'في الصحيحين', note: 'في ابن اللتبية لما استعمل على الصدقة.', pages: [77], nl: 'Hoe zit het met een ambtenaar die ik uitzend en die zegt: dit is voor jullie en dit is mij geschonken? Had hij niet in het huis van zijn vader of moeder kunnen blijven zitten om te zien of hem iets geschonken zou worden? Bij Hem in Wiens hand Muḥammads ziel is: niemand van jullie neemt er iets van, of hij brengt het op de Dag der Opstanding mee op zijn nek ... O Allah, heb ik het overgebracht?', nlNote: 'Over Ibn al-Lutbiyya, die als inzamelaar van de zakat was aangesteld.' },
  { narrator: '', text: 'من أطاعني فقد أطاع الله، ومن يعصني فقد عصى الله، ومن يطع الأمير فقد أطاعني، ومن يعص الأمير فقد عصاني', takhrij: 'متفق عليه', note: '', pages: [78], nl: 'Wie mij gehoorzaamt, gehoorzaamt Allah, en wie mij ongehoorzaam is, is Allah ongehoorzaam; wie de bestuurder gehoorzaamt, gehoorzaamt mij, en wie de bestuurder ongehoorzaam is, is mij ongehoorzaam', nlNote: '' },
  { narrator: '', text: 'ثلاثة لا ينظر الله إليهم يوم القيامة ولا يزكيهم ولهم عذاب أليم ... ورجل بايع إمامًا لا يبايعه إلا لدنيا، فإن أعطاه منها رضي، وإن لم يعطه منها سخط', takhrij: 'رواه البخاري ومسلم', note: '', pages: [78], nl: 'Naar drie mensen kijkt Allah op de Dag der Opstanding niet, Hij zuivert hen niet en voor hen is er een pijnlijke straf ... en een man die een leider trouw zweert alleen voor wereldse winst: geeft die hem ervan, dan is hij tevreden, en geeft hij hem niets, dan is hij boos', nlNote: '' },
  { narrator: '', text: 'على المرء المسلم السمع والطاعة فيما أحب وكره، إلا أن يؤمر بمعصية، فإن أمر بمعصية فلا سمع ولا طاعة', takhrij: 'متفق عليه', note: '', pages: [79], nl: 'De moslim moet luisteren en gehoorzamen, in wat hij prettig vindt en wat hij niet prettig vindt, tenzij hem een zonde wordt opgedragen; wordt hem een zonde opgedragen, dan is er geen luisteren en geen gehoorzamen', nlNote: '' },
  { narrator: '', text: 'عليك السمع والطاعة في عسرك ويسرك، ومنشطك ومكرهك، وأثرة عليك', takhrij: 'أخرجه مسلم', note: '', pages: [79], nl: 'Je moet luisteren en gehoorzamen, in moeilijkheid en gemak, in wat je graag doet en wat je tegenstaat, en ook als anderen boven jou worden voorgetrokken', nlNote: '' },
  { narrator: '', text: 'خيار أئمتكم الذين تحبونهم ويحبونكم، ويصلون عليكم وتصلون عليهم، وشرار أئمتكم الذين تبغضونهم ويبغضونكم، وتلعنونهم ويلعنونكم، قيل: أفلا ننابذهم بالسيف؟ قال: لا، ما أقاموا فيكم الصلاة، وإذا رأيتم من ولاتكم شيئًا تكرهونه فاكرهوا عمله ولا تنزعوا يدًا من طاعة', takhrij: 'أخرجه مسلم', note: 'يصلون عليكم: يدعون لكم.', pages: [79, 82], nl: 'Jullie beste leiders zijn zij die jullie liefhebben en die jullie liefhebben, die voor jullie bidden en voor wie jullie bidden; jullie slechtste leiders zijn zij die jullie haten en die jullie haten, die jullie vervloeken en die jullie vervloeken. Men vroeg: zullen wij hen dan niet met het zwaard bestrijden? Hij zei: nee, zolang zij onder jullie het gebed onderhouden. Als jullie bij jullie bestuurders iets zien wat jullie afkeuren, keur dan hun daad af, maar trek je hand niet terug uit de gehoorzaamheid', nlNote: 'Ṣallā ʿalā hier: voor iemand bidden.' },
  { narrator: 'حذيفة بن اليمان', text: 'تسمع وتطيع للأمير وإن ضرب ظهرك وأخذ مالك، فاسمع وأطع', takhrij: 'أخرجه مسلم', note: '', pages: [79], nl: 'Je luistert naar de bestuurder en gehoorzaamt hem, ook als hij je op je rug slaat en je bezit afneemt; luister en gehoorzaam', nlNote: '' },
  { narrator: 'عبد الله بن مسعود', text: 'إنكم سترون بعدي أثرة وأمورًا تنكرونها، قالوا: فما تأمرنا يا رسول الله؟ قال: أدوا إليهم حقهم، وسلوا الله حقكم', takhrij: 'رواه البخاري ومسلم', note: '', pages: [80], nl: 'Na mij zullen jullie zien dat anderen worden voorgetrokken en zaken die jullie afkeuren. Zij vroegen: wat draag je ons dan op? Hij zei: geef hun hun recht en vraag Allah om jullie recht', nlNote: '' },
  { narrator: '', text: 'وأعطوهم حقهم، فإن الله سائلهم عما استرعاهم', takhrij: 'متفق عليه', note: '', pages: [80], nl: 'Geef hun hun recht, want Allah zal hen ondervragen over wat Hij hun heeft toevertrouwd', nlNote: '' },
  { narrator: '', text: 'ومن بايع إمامًا فأعطاه صفقة يده وثمرة قلبه فليطعه إن استطاع، فإن جاء آخر ينازعه فاضربوا عنق الآخر', takhrij: 'أخرجه مسلم', note: 'في نصرة الإمام.', pages: [80], nl: 'Wie een leider trouw zweert en hem de handslag en de vrucht van zijn hart geeft, laat hem hem gehoorzamen zoveel hij kan; komt er een ander die hem het gezag betwist, sla dan de nek van die ander', nlNote: 'Over het steunen van de leider.' },
  { narrator: '', text: 'يصلون لكم، فإن أصابوا فلكم، وإن أخطؤوا فلكم وعليهم', takhrij: 'أخرجه البخاري', note: 'في الصلاة وراء الحاكم البر والفاجر.', pages: [82], nl: 'Zij leiden jullie in het gebed; doen zij het goed, dan is het voor jullie, en vergissen zij zich, dan is het voor jullie en tegen hen', nlNote: 'Bidden achter de bestuurder, rechtvaardig of zondig.' },
  { narrator: '', text: 'لا هجرة، ولكن جهاد ونية', takhrij: 'رواه البخاري ومسلم', note: '', pages: [82], nl: 'Er is geen hijra meer, maar wel strijd en intentie', nlNote: '' },
  { narrator: '', text: 'فالأمير الذي على الناس راع وهو مسؤول عن رعيته', takhrij: 'رواه البخاري ومسلم', note: '', pages: [84], nl: 'De bestuurder over de mensen is een herder en wordt ondervraagd over wie hem is toevertrouwd', nlNote: '' },
  { narrator: '', text: 'وإنها أمانة، وإنها يوم القيامة خزي وندامة، إلا من أخذها بحقها وأدى الذي عليه فيها', takhrij: 'أخرجه مسلم', note: 'لأبي ذر لما سأله الإمارة.', pages: [84], nl: 'Het is een toevertrouwd goed, en op de Dag der Opstanding is het schande en spijt, behalve voor wie het met recht op zich nam en vervulde wat het van hem vroeg', nlNote: 'Tegen Abū Dharr, toen hij om een bestuursfunctie vroeg.' },
  { narrator: 'عبد الله بن عباس', text: 'ادعهم إلى شهادة أن لا إله إلا الله وأني رسول الله، فإن هم أطاعوا لذلك فأعلمهم أن الله قد افترض عليهم خمس صلوات في كل يوم وليلة ...', takhrij: 'رواه البخاري ومسلم', note: 'لما بعث معاذًا إلى اليمن. ' + FYI, pages: [84], nl: 'Roep hen op te getuigen dat er geen god is dan Allah en dat ik de Boodschapper van Allah ben; gehoorzamen zij daarin, leer hun dan dat Allah hun vijf gebeden per dag en nacht heeft opgelegd ...', nlNote: 'Toen hij Muʿādh naar Jemen stuurde. ' + FYI_NL },
  { narrator: 'عمران بن حصين', text: 'أحسن إليها، فإذا وضعت فأتني بها', takhrij: 'أخرجه مسلم', note: 'في المرأة من جهينة التي أتت فأقرت؛ فأقيم عليها الحد ثم صلى عليها. ' + FYI, pages: [85], nl: 'Wees goed voor haar, en breng haar bij mij als zij bevallen is', nlNote: 'Over de vrouw van Juhayna die kwam bekennen; daarna werd de strafbepaling voltrokken en bad hij over haar. ' + FYI_NL },
  { narrator: '', text: 'إنما الإمام جنة يقاتل من ورائه', takhrij: 'متفق عليه', note: 'جنة: كالستر يمنع العدو ويمنع الناس بعضهم من بعض.', pages: [86], nl: 'De leider is slechts een schild, achter wie gestreden wordt', nlNote: 'Een schild: als een afscherming die de vijand tegenhoudt en de mensen tegen elkaar beschermt.' },
  { narrator: 'عمر بن الخطاب', text: 'لئن سلمني الله لأدعن أرامل أهل العراق لا يحتجن إلى رجل بعدي أبدًا', takhrij: 'أخرجه البخاري', note: 'قاله وهو خليفة.', pages: [86], nl: 'Als Allah mij in leven laat, zal ik de weduwen van Irak zo achterlaten dat zij na mij nooit meer van een man afhankelijk zijn', nlNote: 'Hij zei dit toen hij kalief was.' },
  { narrator: '', text: 'ما من أمير يلي أمر المسلمين ثم لا يجهد لهم وينصح، إلا لم يدخل معهم الجنة', takhrij: 'أخرجه مسلم', note: '', pages: [86], nl: 'Geen bestuurder die over de zaken van de moslims gaat en zich dan niet voor hen inspant en oprecht voor hen is, of hij gaat niet met hen het Paradijs binnen', nlNote: '' },
  { narrator: '', text: 'اللهم من ولي من أمر أمتي شيئًا فشق عليهم فاشقق عليه، ومن ولي من أمر أمتي شيئًا فرفق بهم فارفق به', takhrij: 'أخرجه مسلم', note: '', pages: [86], nl: 'O Allah, wie iets van de zaken van mijn gemeenschap bestuurt en het hun zwaar maakt, maak het hem zwaar; en wie iets van de zaken van mijn gemeenschap bestuurt en zacht met hen is, wees zacht met hem', nlNote: '' },
  { narrator: '', text: 'من ولاه الله عز وجل شيئًا من أمر المسلمين فاحتجب دون حاجتهم وخلتهم وفقرهم، احتجب الله عنه دون حاجته وخلته وفقره', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', note: '', pages: [87], nl: 'Wie door Allah over iets van de zaken van de moslims wordt aangesteld en zich afsluit voor hun behoefte, gebrek en armoede, voor hem sluit Allah Zich af wat zijn behoefte, gebrek en armoede betreft', nlNote: '' },
  { narrator: '', text: 'إذا وسد الأمر إلى غير أهله فانتظر الساعة', takhrij: 'أخرجه البخاري', note: 'في اختيار الأمناء.', pages: [87], nl: 'Als het gezag wordt toevertrouwd aan wie het niet waard is, wacht dan op het Uur', nlNote: 'Over het kiezen van betrouwbare mensen.' },
  { narrator: 'أبو بكر الصديق', text: 'بقاؤكم عليه ما استقامت بكم أئمتكم', takhrij: 'أخرجه البخاري', note: 'لامرأة سألته: ما بقاؤنا على هذا الأمر الصالح؟', pages: [88], nl: 'Jullie blijven erop zolang jullie leiders met jullie recht blijven', nlNote: 'Tegen een vrouw die vroeg hoe lang zij op deze goede zaak zouden blijven.' }
]

const TAKHRIJ_NL = {
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim', 'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'في الصحيحين': 'in de twee Ṣaḥīḥ’s (al-Bukhārī en Muslim)',
  'أخرجه مسلم': 'Muslim', 'أخرجه البخاري': 'al-Bukhārī',
  'رواه أبو داود بسند صحيح': 'Abū Dāwūd, met een authentieke keten',
  'رواه أحمد وأبو داود وصححه الألباني': 'Aḥmad en Abū Dāwūd; authentiek volgens al-Albānī'
}
const NARRATOR_NL = {
  'أبو هريرة': 'Abū Hurayra', 'أبو حميد الساعدي': 'Abū Ḥumayd as-Sāʿidī', 'حذيفة بن اليمان': 'Ḥudhayfa ibn al-Yamān',
  'عبد الله بن مسعود': 'ʿAbdallāh ibn Masʿūd', 'عبد الله بن عباس': 'ʿAbdallāh ibn ʿAbbās', 'عمران بن حصين': 'ʿImrān ibn Ḥuṣayn',
  'عمر بن الخطاب': 'ʿUmar ibn al-Khaṭṭāb', 'أبو بكر الصديق': 'Abū Bakr aṣ-Ṣiddīq'
}

const PERSONS = [
  ['aisha', 'text', [74], 'ذكر الكتاب قولها: ما ضرب رسول الله ﷺ خادمًا قط.', 'Het boek noemt haar woorden dat de Profeet ﷺ nooit een bediende sloeg.'],
  ['anas-ibn-malik', 'text', [74], 'خادم رسول الله ﷺ تسع سنين، ما قال له لشيء صنعه: لم فعلت كذا.', 'Diende de Profeet ﷺ negen jaar, die hem nooit verweet wat hij deed of naliet.'],
  ['abu-hurayra', 'text', [75, 76], 'روى «ثلاثة أنا خصمهم» و«ما من مؤمن إلا وأنا أولى به».', 'Overleverde "Tegen drie mensen treed ik op" en "Er is geen gelovige of ik sta hem het naast".'],
  ['abu-masud-al-ansari', 'text', [75], 'ضرب غلامًا له فنهاه النبي ﷺ فأعتقه.', 'Sloeg zijn slaaf; de Profeet ﷺ vermaande hem en hij liet de slaaf vrij.'],
  ['abu-humayd-as-saidi', 'text', [77], 'روى قصة ابن اللتبية وهدايا العمال.', 'Overleverde het verhaal van Ibn al-Lutbiyya en de geschenken aan ambtenaren.'],
  ['ibn-al-lutbiyya', 'text', [77], 'استعمل على الصدقة فقال: هذا لكم وهذا أهدي لي.', 'Werd aangesteld om de zakat in te zamelen en zei: dit is voor jullie en dit is mij geschonken.'],
  ['ibn-al-qayyim', 'text', [79, 81], 'قال: من أطاع ولاة الأمر في معصية الله كان عاصيًا؛ ومخاطبة الرؤساء بالقول اللين مطلوبة.', 'Zei: wie bestuurders gehoorzaamt in ongehoorzaamheid aan Allah, is zelf ongehoorzaam; en bestuurders zacht aanspreken is gewenst.'],
  ['hudhayfa-ibn-al-yaman', 'text', [79], 'روى «تسمع وتطيع للأمير وإن ضرب ظهرك».', 'Overleverde "Je luistert naar de bestuurder, ook als hij je op je rug slaat".'],
  ['at-tahawi', 'text', [79], 'قال: ولا نرى الخروج على أئمتنا وإن جاروا.', 'Zei: wij zien geen opstand tegen onze leiders, ook als zij onrecht doen.'],
  ['ibn-masud', 'text', [80], 'روى «أدوا إليهم حقهم وسلوا الله حقكم».', 'Overleverde "Geef hun hun recht en vraag Allah om jullie recht".'],
  ['ibn-rajab', 'text', [80], 'فسر النصيحة لأئمة المسلمين.', 'Legde uit wat oprechtheid tegenover de leiders van de moslims is.'],
  ['abu-yala-al-farra', 'text', [80, 87], 'قال: إذا قام الإمام بحقوق الأمة وجب له الطاعة والنصرة؛ وأن يباشر الأمور بنفسه.', 'Zei: vervult de leider de rechten van de gemeenschap, dan heeft hij recht op gehoorzaamheid en steun; en hij moet de zaken zelf behartigen.'],
  ['ibn-qudama', 'text', [82], 'قال: ونرى الحج والجهاد ماضيًا مع طاعة كل إمام برًا كان أو فاجرًا.', 'Zei: de ḥajj en de strijd gaan door onder elke leider, rechtvaardig of zondig.'],
  ['ibn-abbas', 'text', [84, 85], 'روى بعث معاذ إلى اليمن، وأن القراء كانوا أصحاب مجلس عمر. ' + FYI, 'Overleverde het uitzenden van Muʿādh naar Jemen en dat de Koranlezers in ʿUmars raad zaten. ' + FYI_NL],
  ['muadh-ibn-jabal', 'text', [84], 'بعثه النبي ﷺ إلى اليمن داعيًا. ' + FYI, 'De Profeet ﷺ zond hem als verkondiger naar Jemen. ' + FYI_NL],
  ['al-mawardi', 'text', [85], 'ذكر من واجبات الحاكم حراسة الدين وإقامة الحدود. ' + FYI, 'Noemde het bewaken van de godsdienst en het voltrekken van de strafbepalingen als plichten van de bestuurder. ' + FYI_NL],
  ['imran-ibn-husayn', 'text', [85], 'روى قصة المرأة من جهينة. ' + FYI, 'Overleverde het verhaal van de vrouw van Juhayna. ' + FYI_NL],
  ['umar-ibn-al-khattab', 'text', [85, 86, 87, 88], 'عزم على كفاية أرامل العراق، وقال: من ولى رجلًا لمودة أو قرابة فقد خان الله ورسوله.', 'Nam zich voor de weduwen van Irak te onderhouden, en zei: wie iemand aanstelt uit vriendschap of verwantschap, heeft Allah en Zijn Boodschapper verraden.'],
  ['ibn-taymiyya', 'text', [87], 'قال: يجب على ولي الأمر أن يولي على كل عمل أصلح من يجده.', 'Zei: de bestuurder moet voor elke taak de geschiktste aanstellen die hij vindt.'],
  ['abu-bakr-as-siddiq', 'text', [88], 'قال: بقاؤكم عليه ما استقامت بكم أئمتكم.', 'Zei: jullie blijven erop zolang jullie leiders recht blijven.'],
  ['ibn-hajar-al-asqalani', 'text', [88], 'قال: الناس على دين ملوكهم.', 'Zei: de mensen volgen de godsdienst van hun koningen.'],
  ['al-bukhari', 'takhrij', [74, 75, 76, 77, 78, 79, 80, 82, 84, 86, 87, 88], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['muslim', 'takhrij', [76, 77, 78, 79, 80, 82, 84, 85, 86], 'أخرج أحاديث في الوحدة.', 'Nam hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [77, 87], 'أخرج حديث الغلول وحديث الاحتجاب عن الرعية.', 'Nam de hadith over verduistering en over je afsluiten voor de bevolking op.'],
  ['ahmad-ibn-hanbal', 'takhrij', [87], 'أخرج حديث الاحتجاب عن الرعية.', 'Nam de hadith over je afsluiten voor de bevolking op.'],
  ['al-bayhaqi', 'takhrij', [88], 'أخرج قول عمر عند موته.', 'Nam de uitspraak van ʿUmar bij zijn dood op.'],
  ['al-albani', 'takhrij', [87], 'صحح حديث الاحتجاب عن الرعية.', 'Verklaarde de hadith over je afsluiten voor de bevolking authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 6,
  title: 'حقوق العمل والولاية',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'للعامل حقوق على صاحب العمل من عدم تكليفه فوق طاقته وإعطائه أجره وحسن معاملته، ولصاحب العمل حقوق من الأمانة والطاعة والتعفف؛ وللحاكم على الرعية الطاعة في المعروف والصبر والنصيحة والنصرة، وللرعية على الحاكم إقامة الدين والحكم بالشرع والعدل والحماية والرعاية.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة السادسة في خريطة واحدة',
    intro: 'موضوعات الدروس الأربعة كما في الكتاب.',
    root: { label: 'حقوق العمل والولاية', sub: 'الوحدة السادسة' },
    nodes: [
      { label: 'العامل ورب العمل', sub: 'الدرس ٢١', page: 74, children: ['حق العامل', 'حق صاحب العمل', 'هدايا العمال'] },
      { label: 'حق الراعي', sub: 'الدرس ٢٢', page: 78, children: ['الطاعة في المعروف', 'الصبر وعدم الخروج'] },
      { label: 'أداء حقوق الحاكم', sub: 'الدرس ٢٣', page: 80, children: ['النصيحة', 'النصرة', 'التوقير', 'الدعاء له'] },
      { label: 'حقوق الرعية', sub: 'الدرس ٢٤', page: 84, children: ['إقامة الدين', 'الحكم بالشرع', 'العدل', 'الرعاية', 'القدوة'] }
    ]
  },
  points: [
    { text: 'العمل قوام الحياة، وقد عمل الأنبياء: آدم بالزراعة، ونوح بالنجارة، وداود بالحدادة، ومحمد ﷺ برعي الغنم والتجارة.', page: 74 },
    { text: 'من حق العامل ألا يكلف فوق طاقته، وأن يعامل بالحسنى، وأن يعطى أجره كاملًا على قدر عمله.', page: 74 },
    { text: 'من الظلم العظيم أن يستقدم العامل بعقد ثم يرغم على عقد ثان أقل راتبًا وحقوقًا.', page: 75 },
    { text: 'على العامل الأمانة والإخلاص والطاعة في غير معصية والتعفف عن استغلال الوظيفة؛ وهدايا العمال حكمها حكم الغلول.', page: 76 },
    { text: 'أوجبت الشريعة على الرعية حقوقًا لمن تولى أمرها برًا كان أو فاجرًا، وأعظمها الطاعة في المعروف.', page: 78 },
    { text: 'لا طاعة في معصية، ويصبر على ظلم الحاكم ولا يخرج عليه ما أقام الصلاة.', page: 79 },
    { text: 'تؤدى حقوق الحاكم وإن قصر في حقوق الرعية، ويسأل الله الحق.', page: 80 },
    { text: 'الولاية أمانة وتكليف لا تشريف، ومن أعظم حقوق الرعية إقامة دينها والحكم بما أنزل الله والعدل.', page: 84 }
  ],
  terms: [
    { term: 'الخول', translit: 'al-khawal', meaning: 'الذين يخولون أموركم، أي الخدم.', explanation: '«إخوانكم خولكم».', notes: [], page: 74 },
    { term: 'الغلول', translit: 'al-ghulūl', meaning: 'ما يأخذه العامل بغير حق.', explanation: 'وهدايا العمال حكمها حكم الغلول.', notes: [], page: 77 },
    { term: 'الأثرة', translit: 'al-athara', meaning: 'تقديم غيرك عليك في الحقوق.', explanation: '«وأثرة عليك».', notes: [], page: 79 },
    { term: 'الافتئات', translit: 'al-iftiʾāt', meaning: 'التعدي على ما هو منوط بالحاكم بدون إذنه.', explanation: 'كأمور الحرب والسلم وإقامة الحدود.', notes: [], page: 82 },
    { term: 'الجنة', translit: 'al-junna', meaning: 'الستر الذي يمنع العدو ويمنع الناس بعضهم من بعض.', explanation: '«إنما الإمام جنة يقاتل من ورائه».', notes: [], page: 86 },
    { term: 'القراء', translit: 'al-qurrāʾ', meaning: 'العالمون بمعاني القرآن المتفقهون فيه.', explanation: '', notes: [], page: 85 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'حقوق العامل وصاحب العمل',
      intro: 'كما في الدرس الحادي والعشرين.',
      columns: ['الحقوق'],
      rows: [
        { label: 'حق العامل', cells: ['عدم تكليفه فوق طاقته، والمعاملة بالحسنى، وإعطاؤه أجره، وعدم أذاه، والاهتمام به، وتمكينه من أداء الفرائض، والراحة، والضمان'] },
        { label: 'حق صاحب العمل', cells: ['عدم الإهمال والشعور بالمسؤولية، والأمانة والإخلاص، والطاعة في غير معصية، والتعفف عن استغلال الوظيفة'] }
      ],
      page: 74
    },
    {
      type: 'cards',
      title: 'حقوق الحاكم على الرعية',
      intro: 'كما عددها الكتاب في الدرسين الثاني والعشرين والثالث والعشرين.',
      nodes: [
        { label: 'طاعته في المعروف', page: 78 },
        { label: 'الصبر على ظلمه وعدم الخروج عليه', page: 79 },
        { label: 'أداء حقوقه وإن قصر', page: 80 },
        { label: 'نصيحته', page: 80 },
        { label: 'نصرته وحمايته', page: 80 },
        { label: 'تعظيمه وتوقيره', page: 81 },
        { label: 'لين القول له', page: 81 },
        { label: 'الكف عن نشر معايبه', page: 81 },
        { label: 'الصلاة وراءه والجهاد معه', page: 82 },
        { label: 'عدم الافتئات عليه', page: 82 },
        { label: 'الدعاء له', page: 82 }
      ]
    },
    {
      type: 'cards',
      title: 'حقوق الرعية على الحاكم',
      intro: 'كما عددها الكتاب في الدرس الرابع والعشرين.',
      nodes: [
        { label: 'إقامة دين الأمة', page: 84 },
        { label: 'الحكم بما أنزل الله', page: 85 },
        { label: 'السياسة بالعدل ورفع الظلم', page: 86 },
        { label: 'حماية الأمة', page: 86 },
        { label: 'رعايتها لا سيما الضعفاء', page: 86 },
        { label: 'النصح لها مع الرفق', page: 86 },
        { label: 'مباشرة شؤونها بنفسه', page: 87 },
        { label: 'اختيار الأمناء', page: 87 },
        { label: 'أن يكون قدوة حسنة', page: 88 }
      ]
    }
  ],
  sections: [
    { title: 'المعاملة بالحسنى', text: 'ذكر الكتاب من هديه ﷺ أنه ما ضرب خادمًا قط، وأن أنسًا خدمه تسع سنين فما قال له لشيء صنعه: لم فعلت كذا، ولا لشيء تركه: هلا فعلت كذا؛ ولما ضرب أبو مسعود غلامًا له وعظه النبي ﷺ فأعتقه.', more: '', page: 74 },
    { title: 'تمكين العامل من الفرائض', text: 'يمكن العامل من أداء ما افترضه الله عليه كالصلاة والصيام والحج، ويحذر صاحب العمل أن يكون ممن يصد عن سبيل الله (العلق ٩–١٠).', more: '', page: 75 },
    { title: 'حق الضمان', text: 'التكافل الاجتماعي يكفل للمواطن نصيبًا من بيت المال عند عجزه أو مرضه.', more: '', page: 76 },
    { title: 'النصيحة لأئمة المسلمين', text: 'قال ابن رجب: معاونتهم على الحق وطاعتهم فيه وتذكيرهم به وتنبيههم في رفق ولطف، ومجانبة الوثوب عليهم، والدعاء لهم بالتوفيق.', more: '', page: 80 },
    { title: 'لماذا يكف عن ذكر معايب الحكام', text: 'لما فيه من تهييج الناس وتقليل شأنهم وجرأة من يريد الخروج (الحجرات ١٢).', more: '', page: 81 },
    { title: 'من سبل إقامة الدين (للاطلاع فقط)', text: 'نشر العلم والدعوة، وتعظيم أهل العلم والأخذ بمشورتهم، ومنع ما يؤدي إلى إفساد عقائد الناس وأخلاقهم؛ قال الماوردي: ليكون الدين محروسًا من خلل والأمة ممنوعة من زلل.', more: FYI, page: 84 },
    { title: 'اختيار الأمناء', text: 'قال عمر: من ولي من أمر المسلمين شيئًا فولى رجلًا لمودة أو قرابة بينهما فقد خان الله ورسوله والمسلمين؛ وقال ابن تيمية: يجب على ولي الأمر أن يولي على كل عمل أصلح من يجده لذلك العمل.', more: '', page: 87 },
    { title: 'الحاكم قدوة', text: 'قال عمر عند موته: اعلموا أن الناس لن يزالوا بخير ما استقامت لهم ولاتهم وهداتهم (البيهقي)؛ وقال ابن حجر: لأن الناس على دين ملوكهم.', more: '', page: 88 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'طاعة الحاكم', items: ['في المعروف.', 'فإن أمر بمعصية فلا سمع ولا طاعة.'], page: 79, origin: 'boek' },
    { kind: 'bewijs', title: 'وجوب الطاعة', items: ['﴿أطيعوا الله وأطيعوا الرسول وأولي الأمر منكم﴾ [النساء: ٥٩]', '«ومن يطع الأمير فقد أطاعني».'], page: 78, origin: 'boek' },
    { kind: 'definitie', title: 'هدايا العمال', items: ['ما يهدى إلى العامل بسبب عمله.', 'حكمها حكم الغلول.'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'من حقوق الرعية', items: ['إقامة الدين', 'الحكم بالشرع', 'العدل', 'الحماية', 'الرعاية', 'النصح', 'اختيار الأمناء'], page: 84, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'العمل قوام الحياة، وقد عمل الأنبياء.',
    'للعامل أجره وحسن المعاملة، وعليه الأمانة والتعفف.',
    'للحاكم الطاعة في المعروف، ولا طاعة في معصية.',
    'يصبر على ظلم الحاكم ولا يخرج عليه، وتؤدى حقوقه.',
    'الولاية أمانة، وعلى الحاكم إقامة الدين والعدل ورعاية الأمة.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'بم عمل داود عليه السلام كما في الكتاب؟', options: ['بالحدادة', 'بالزراعة', 'بالنجارة', 'برعي الغنم'], answer: 0, explain: 'وآدم بالزراعة ونوح بالنجارة.', page: 74 },
    { type: 'tf', q: 'هدايا العمال جائزة إذا جاءت بسبب العمل.', options: ['صواب', 'خطأ'], answer: 1, explain: 'حكمها حكم الغلول، كما في قصة ابن اللتبية.', page: 77 },
    { type: 'mc', q: 'متى لا يطاع الحاكم؟', options: ['إذا أمر بمعصية', 'إذا أمر بما يكره المرء', 'إذا قصر في حق الرعية', 'إذا أخذ المال'], answer: 0, explain: '«فإن أمر بمعصية فلا سمع ولا طاعة».', page: 79 },
    { type: 'mc', q: 'ماذا أمر النبي ﷺ إذا رأوا أثرة وأمورًا ينكرونها؟', options: ['أدوا إليهم حقهم وسلوا الله حقكم', 'اخرجوا عليهم', 'اعتزلوهم', 'لا تصلوا خلفهم'], answer: 0, explain: 'رواه البخاري ومسلم.', page: 80 },
    { type: 'tf', q: 'تجوز الصلاة خلف الحاكم الفاجر.', options: ['صواب', 'خطأ'], answer: 0, explain: '«يصلون لكم فإن أصابوا فلكم وإن أخطؤوا فلكم وعليهم».', page: 82 },
    { type: 'mc', q: 'ما معنى أن الإمام جنة؟', options: ['كالستر يمنع العدو ويحمي الناس', 'أنه يدخل الجنة', 'أنه لا يخطئ', 'أنه يجب حبه'], answer: 0, explain: 'يقاتل من ورائه.', page: 86 }
  ]),
  note: 'نشاط الكتاب في الصفحتين ٨٣ و٨٨. ما كان في الكتاب للاطلاع فقط مشار إليه في موضعه.'
}

const nl = {
  scope: 'unit',
  unit: 6,
  title: 'De rechten in werk en bestuur',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'De werknemer heeft rechten op de werkgever: niet meer dan hij aankan, zijn volle loon en een goede behandeling; de werkgever heeft recht op betrouwbaarheid, gehoorzaamheid en integriteit. De bestuurder heeft recht op gehoorzaamheid in het goede, geduld, oprechte raad en steun; de bevolking heeft recht op een bestuurder die de godsdienst handhaaft, volgens de sharia oordeelt, rechtvaardig is, beschermt en zorgt.',
  source: { ...source, label: 'At-Tarbiya al-Islāmiyya (1): de rechten, Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 6 in één kaart',
    intro: 'De onderwerpen van de vier lessen zoals in het boek.',
    root: { label: 'De rechten in werk en bestuur', sub: 'Eenheid 6' },
    nodes: [
      { label: 'Werknemer en werkgever', sub: 'les 21', page: 74, children: ['recht van de werknemer', 'recht van de werkgever', 'geschenken aan ambtenaren'] },
      { label: 'Het recht van de bestuurder', sub: 'les 22', page: 78, children: ['gehoorzamen in het goede', 'geduld, geen opstand'] },
      { label: 'Zijn rechten vervullen', sub: 'les 23', page: 80, children: ['oprechte raad', 'steun', 'respect', 'voor hem bidden'] },
      { label: 'De rechten van de bevolking', sub: 'les 24', page: 84, children: ['de godsdienst handhaven', 'volgens de sharia oordelen', 'rechtvaardigheid', 'zorg', 'voorbeeld'] }
    ]
  },
  points: [
    { text: 'Werk is de basis van het leven; ook de profeten werkten: Ādam als boer, Nūḥ als timmerman, Dāwūd als smid en Muḥammad ﷺ als herder en handelaar.', page: 74 },
    { text: 'De werknemer heeft er recht op niet zwaarder belast te worden dan hij aankan, goed behandeld te worden en zijn volle loon te krijgen naar zijn werk.', page: 74 },
    { text: 'Groot onrecht is een werknemer met een contract laten overkomen en hem dan dwingen een tweede contract te tekenen met minder loon en rechten.', page: 75 },
    { text: 'De werknemer is betrouwbaarheid, oprechtheid, gehoorzaamheid buiten zonde en integriteit verschuldigd; geschenken aan ambtenaren vallen onder verduistering.', page: 76 },
    { text: 'De sharia geeft wie over de bevolking gaat, rechtvaardig of zondig, rechten; de grootste is gehoorzaamheid in het goede.', page: 78 },
    { text: 'In een zonde wordt niet gehoorzaamd; met onrecht van de bestuurder heb je geduld en je komt niet tegen hem in opstand zolang hij het gebed onderhoudt.', page: 79 },
    { text: 'De rechten van de bestuurder worden vervuld, ook als hij tekortschiet in die van de bevolking; vraag Allah om je recht.', page: 80 },
    { text: 'Bestuur is een toevertrouwd goed en een last, geen eer; tot de grootste rechten van de bevolking behoren het handhaven van haar godsdienst, oordelen naar wat Allah openbaarde, en rechtvaardigheid.', page: 84 }
  ],
  terms: [
    { term: 'الخول', translit: 'al-khawal', meaning: 'Bedienden: wie jullie zaken behartigen.', explanation: '"Jullie bedienden zijn jullie broeders."', notes: [], page: 74 },
    { term: 'الغلول', translit: 'al-ghulūl', meaning: 'Verduistering: wat een ambtenaar zonder recht neemt.', explanation: 'Geschenken aan ambtenaren vallen eronder.', notes: [], page: 77 },
    { term: 'الأثرة', translit: 'al-athara', meaning: 'Dat anderen boven jou worden voorgetrokken.', explanation: '"En ook als anderen boven jou worden voorgetrokken."', notes: [], page: 79 },
    { term: 'الافتئات', translit: 'al-iftiʾāt', meaning: 'Je eigenmachtig bemoeien met wat bij de bestuurder hoort, zonder zijn toestemming.', explanation: 'Zoals oorlog en vrede en het voltrekken van strafbepalingen.', notes: [], page: 82 },
    { term: 'الجنة', translit: 'al-junna', meaning: 'Een schild: een afscherming die de vijand tegenhoudt en de mensen tegen elkaar beschermt.', explanation: '"De leider is slechts een schild, achter wie gestreden wordt."', notes: [], page: 86 },
    { term: 'القراء', translit: 'al-qurrāʾ', meaning: 'De Koranlezers: wie de betekenissen van de Koran kennen en er inzicht in hebben.', explanation: '', notes: [], page: 85 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'Rechten van werknemer en werkgever',
      intro: 'Zoals in les 21.',
      columns: ['Rechten'],
      rows: [
        { label: 'Recht van de werknemer', cells: ['niet meer dan hij aankan, een goede behandeling, zijn loon, geen kwaad, aandacht voor hem, ruimte voor zijn religieuze plichten, rust, en sociale zekerheid'] },
        { label: 'Recht van de werkgever', cells: ['geen nalatigheid en verantwoordelijkheidsgevoel, betrouwbaarheid en oprechtheid, gehoorzaamheid buiten zonde, en geen misbruik van de functie'] }
      ],
      page: 74
    },
    {
      type: 'cards',
      title: 'De rechten van de bestuurder op de bevolking',
      intro: 'Zoals het boek ze in les 22 en 23 opsomt.',
      nodes: [
        { label: 'Hem gehoorzamen in het goede', page: 78 },
        { label: 'Geduld met zijn onrecht, geen opstand', page: 79 },
        { label: 'Zijn rechten vervullen, ook als hij tekortschiet', page: 80 },
        { label: 'Hem oprecht raad geven', page: 80 },
        { label: 'Hem steunen en beschermen', page: 80 },
        { label: 'Hem eren en respecteren', page: 81 },
        { label: 'Zacht tegen hem spreken', page: 81 },
        { label: 'Zijn gebreken niet rondvertellen', page: 81 },
        { label: 'Achter hem bidden en met hem strijden', page: 82 },
        { label: 'Je niet bemoeien met wat bij hem hoort', page: 82 },
        { label: 'Voor hem bidden', page: 82 }
      ]
    },
    {
      type: 'cards',
      title: 'De rechten van de bevolking op de bestuurder',
      intro: 'Zoals het boek ze in les 24 opsomt.',
      nodes: [
        { label: 'De godsdienst van de gemeenschap handhaven', page: 84 },
        { label: 'Oordelen naar wat Allah openbaarde', page: 85 },
        { label: 'Rechtvaardig besturen en onrecht wegnemen', page: 86 },
        { label: 'De gemeenschap beschermen', page: 86 },
        { label: 'Voor haar zorgen, vooral voor de zwakken', page: 86 },
        { label: 'Haar oprecht raad geven, met zachtheid', page: 86 },
        { label: 'Haar zaken zelf behartigen', page: 87 },
        { label: 'Betrouwbare mensen aanstellen', page: 87 },
        { label: 'Een goed voorbeeld zijn', page: 88 }
      ]
    }
  ],
  sections: [
    { title: 'Een goede behandeling', text: 'Het boek noemt uit de leefwijze van de Profeet ﷺ dat hij nooit een bediende sloeg, dat Anas hem negen jaar diende zonder dat hij hem ooit verweet wat hij deed of naliet, en dat toen Abū Masʿūd zijn slaaf sloeg, de Profeet ﷺ hem vermaande en hij de slaaf vrijliet.', more: '', page: 74 },
    { title: 'Ruimte voor religieuze plichten', text: 'De werknemer moet zijn plichten kunnen vervullen, zoals het gebed, het vasten en de ḥajj; de werkgever moet ervoor oppassen niet te horen bij wie mensen van de weg van Allah afhouden (al-ʿAlaq 96:9–10).', more: '', page: 75 },
    { title: 'Sociale zekerheid', text: 'Onderlinge solidariteit geeft de burger een deel uit de staatskas als hij niet kan werken of ziek is.', more: '', page: 76 },
    { title: 'Oprechtheid tegenover de leiders', text: 'Ibn Rajab: hen helpen bij het ware, hen daarin gehoorzamen, hen eraan herinneren en zacht en vriendelijk wijzen op fouten, niet tegen hen in opstand komen, en voor hen bidden om succes.', more: '', page: 80 },
    { title: 'Waarom je de gebreken van bestuurders niet rondvertelt', text: 'Omdat het de mensen opzweept, het gezag ondermijnt en wie in opstand wil komen brutaal maakt (al-Ḥujurāt 49:12).', more: '', page: 81 },
    { title: 'Manieren om de godsdienst te handhaven (alleen ter kennisname)', text: 'Kennis en verkondiging verspreiden, de geleerden eren en hun raad volgen, en tegengaan wat geloof en moraal van de mensen bederft. Al-Māwardī: zodat de godsdienst beschermd is tegen gebreken en de gemeenschap tegen misstappen.', more: FYI_NL, page: 84 },
    { title: 'Betrouwbare mensen aanstellen', text: 'ʿUmar: wie over iets van de moslims gaat en iemand aanstelt uit vriendschap of verwantschap, heeft Allah, Zijn Boodschapper en de moslims verraden. Ibn Taymiyya: de bestuurder moet voor elke taak de geschiktste aanstellen die hij vindt.', more: '', page: 87 },
    { title: 'De bestuurder als voorbeeld', text: 'ʿUmar bij zijn dood: weet dat het de mensen goed blijft gaan zolang hun bestuurders en leiders recht blijven (al-Bayhaqī). Ibn Ḥajar: want de mensen volgen de godsdienst van hun koningen.', more: '', page: 88 }
  ],
  keycards: [
    { kind: 'voorwaarde', title: 'De bestuurder gehoorzamen', items: ['In het goede.', 'Draagt hij een zonde op, dan geen luisteren en geen gehoorzamen.'], page: 79, origin: 'boek' },
    { kind: 'bewijs', title: 'Gehoorzaamheid is verplicht', items: ['"Gehoorzaam Allah, gehoorzaam de Boodschapper en wie onder jullie gezag hebben" (an-Nisāʾ 4:59)', '"Wie de bestuurder gehoorzaamt, gehoorzaamt mij."'], page: 78, origin: 'boek' },
    { kind: 'definitie', title: 'Geschenken aan ambtenaren', items: ['Wat een ambtenaar vanwege zijn functie geschonken krijgt.', 'Het valt onder verduistering.'], page: 77, origin: 'boek' },
    { kind: 'opsomming', title: 'Rechten van de bevolking', items: ['de godsdienst handhaven', 'volgens de sharia oordelen', 'rechtvaardigheid', 'bescherming', 'zorg', 'oprechte raad', 'betrouwbare mensen aanstellen'], page: 84, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Werk is de basis van het leven; ook de profeten werkten.',
    'De werknemer heeft recht op zijn loon en een goede behandeling; hij is betrouwbaarheid en integriteit verschuldigd.',
    'De bestuurder wordt gehoorzaamd in het goede, niet in een zonde.',
    'Met zijn onrecht heb je geduld, je komt niet in opstand en je vervult zijn rechten.',
    'Bestuur is een toevertrouwd goed: de bestuurder handhaaft de godsdienst, is rechtvaardig en zorgt voor de gemeenschap.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welk werk deed Dāwūd volgens het boek?', options: ['smid', 'boer', 'timmerman', 'herder'], answer: 0, explain: 'Ādam was boer en Nūḥ timmerman.', page: 74 },
    { type: 'tf', q: 'Geschenken die een ambtenaar vanwege zijn werk krijgt, zijn toegestaan.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Zij vallen onder verduistering, zoals in het verhaal van Ibn al-Lutbiyya.', page: 77 },
    { type: 'mc', q: 'Wanneer gehoorzaam je de bestuurder niet?', options: ['als hij een zonde opdraagt', 'als hij iets opdraagt wat je niet prettig vindt', 'als hij tekortschiet', 'als hij bezit afneemt'], answer: 0, explain: '"Wordt hem een zonde opgedragen, dan is er geen luisteren en geen gehoorzamen."', page: 79 },
    { type: 'mc', q: 'Wat droeg de Profeet ﷺ op als men voortrekkerij en afkeurenswaardige zaken zou zien?', options: ['geef hun hun recht en vraag Allah om jullie recht', 'kom tegen hen in opstand', 'zonder je van hen af', 'bid niet achter hen'], answer: 0, explain: 'Overgeleverd door al-Bukhārī en Muslim.', page: 80 },
    { type: 'tf', q: 'Bidden achter een zondige bestuurder is toegestaan.', options: ['Juist', 'Onjuist'], answer: 0, explain: '"Doen zij het goed, dan is het voor jullie, en vergissen zij zich, dan is het voor jullie en tegen hen."', page: 82 },
    { type: 'mc', q: 'Wat betekent het dat de leider een schild is?', options: ['hij is als een afscherming die de vijand tegenhoudt en de mensen beschermt', 'hij gaat het Paradijs binnen', 'hij vergist zich nooit', 'je moet van hem houden'], answer: 0, explain: '"Achter wie gestreden wordt."', page: 86 }
  ]),
  note: 'Oefeningen van het boek op p. 83 en 88. Delen die in het boek alleen ter kennisname zijn, staan zo aangeduid. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n1-tarbiyah', chapter: '21', unit: 6, ar, nl }
