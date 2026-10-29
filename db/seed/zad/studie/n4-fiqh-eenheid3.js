// Hoofdstukkaart bij الفقه (٤), eenheid 3: الأصول التي يدور عليها التحريم في باب المعاملات (lessen 10–18, boek p. 28–41).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
// Weggelaten: de citaten van westerse bronnen op p. 30 (zonder bronvermelding) en de hadith
// «ما كان يدا بيد فلا بأس به…» op p. 36 (in de notities gemarkeerd om te controleren).
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '10',
  unit: 3,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '28–41',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['الأصول التي يدور عليها التحريم في المعاملات', 'Grondslagen van verbod in transacties'],
  subtitle: ['تسعة دروس', 'Negen lessen'],
  summary: [
    'يدور التحريم في المعاملات المالية على أصول أهمها: الربا والغش والغرر. الربا محرم بالكتاب والسنة والإجماع، وهو قسمان: ربا الديون وربا البيوع، ومن ربا البيوع ربا الفضل وربا النسيئة، ويتصل بهما الصرف. والغش كتم عيب لو علمه الآخر لم يقبله، والغرر مجهول العاقبة.',
    'Verbod in financiële transacties draait vooral om drie grondslagen: ribā, bedrog en gharar. Ribā is verboden door Koran, sunna en consensus en kent twee delen: ribā van schulden en ribā van verkopen (ribā al-faḍl en ribā an-nasīʾa), met geldwissel (ṣarf) als toepassing. Bedrog is een gebrek verzwijgen dat de ander zou afschrikken; gharar is wat een onbekende afloop heeft.'
  ],
  map: {
    title: ['أصول التحريم في خريطة واحدة', 'Grondslagen van verbod in één kaart'],
    intro: ['كما في المخطط ص ٢٨.', 'Zoals in het schema op p. 28.'],
    root: [['أصول التحريم', 'Grondslagen van verbod'], ['الوحدة الثالثة', 'Eenheid 3']],
    nodes: [
      { label: ['الربا', 'Ribā'], sub: ['الدروس ١٠–١٦', 'les 10–16'], page: 28, children: [['التعريف والحكم والحكمة', 'definitie, oordeel en wijsheid'], ['ربا الديون', 'ribā van schulden'], ['ربا الفضل', 'ribā al-faḍl'], ['ربا النسيئة', 'ribā an-nasīʾa'], ['الصرف', 'geldwissel']] },
      { label: ['الغش', 'Bedrog'], sub: ['الدرس ١٧', 'les 17'], page: 39, children: [['من غش فليس مني', 'wie bedriegt hoort niet bij mij'], ['صوره', 'vormen']] },
      { label: ['الغرر', 'Gharar'], sub: ['الدرس ١٨', 'les 18'], page: 40, children: [['ضوابطه', 'criteria'], ['مجالاته قديما وحديثا', 'toepassingen vroeger en nu']] }
    ]
  },
  points: [
    [28, 'لم يتوعد الله في كتابه أحدا بالحرب إلا آكل الربا: ﴿فإن لم تفعلوا فأذنوا بحرب من الله ورسوله﴾ [البقرة: 279].', 'Alleen de woekeraar bedreigt Allah in Zijn Boek met oorlog: "Doen jullie het niet, weet dan dat er oorlog komt van Allah en Zijn Boodschapper" (2:279).'],
    [29, 'قال ابن قدامة: أجمعت الأمة على أن الربا محرم، وقال الماوردي: إن الربا لم يحل في شريعة قط.', 'Ibn Qudāma: de umma is het eens dat ribā verboden is; al-Māwardī: ribā was in geen enkele wet ooit toegestaan.'],
    [31, 'الفوائد البنكية على الودائع الجارية ربا بالإجماع، لأن الوديعة الجارية قرض من العميل للبنك.', 'Rente op lopende tegoeden is volgens consensus ribā, want het tegoed is een lening van de klant aan de bank.'],
    [32, 'الزيادة في الدين عند حلوله أخطر أنواع الربا وأشدها تحريما، وهي ربا الجاهلية.', 'Verhoging van een schuld bij de vervaldatum is de gevaarlijkste en zwaarst verboden ribā: de ribā van de jāhiliyya.'],
    [33, 'إذا اتحد الجنس وجب التماثل والتقابض، وإذا اختلف الجنس واتحدت العلة وجب التقابض وجاز التفاضل، وإذا اختلفت العلة جاز التفاضل والنسأ.', 'Zelfde soort: gelijkheid en directe overdracht verplicht; andere soort met dezelfde oorzaak: directe overdracht verplicht, verschil toegestaan; andere oorzaak: verschil en uitstel toegestaan.'],
    [36, 'لا يجوز استبدال ذهب مستعمل بجديد مع دفع الفرق، والصحيح أن يبيع المستعمل ويقبض ثمنه ثم يشتري الجديد.', 'Gebruikt goud mag niet tegen nieuw goud geruild worden met bijbetaling; men verkoopt het gebruikte, ontvangt de prijs en koopt dan het nieuwe.'],
    [39, 'من قال: السيارة كلها عيوب، وهو يعلم عيبا كتمه، لم يبرأ عند أكثر العلماء حتى يبين العيب.', 'Wie zegt "de hele auto is één gebrek" terwijl hij een gebrek kent en verzwijgt, is volgens de meeste geleerden niet vrij tot hij het gebrek noemt.'],
    [41, 'قال شيخ الإسلام: الغرر يفضي إلى مفسدة الميسر من العداوة والبغضاء، مع أكل المال بالباطل.', 'Shaykh al-Islām: gharar leidt tot het kwaad van gokken, vijandschap en haat, en tot het onrechtmatig opeten van geld.']
  ],
  terms: [
    ['الربا', 'ar-ribā', 28, 'لغة: الزيادة. واصطلاحا: زيادة في أشياء مخصوصة، وقيل: فضل مال بلا عوض في معاوضة مال بمال.', 'Taal: vermeerdering. Vakterm: vermeerdering in bepaalde dingen; of: overschot aan geld zonder tegenwaarde bij ruil van geld tegen geld.'],
    ['ربا الفضل', 'ribā al-faḍl', 32, 'بيع المال الربوي بجنسه متفاضلا.', 'Ribawi-goed verkopen tegen zijn eigen soort met verschil.'],
    ['ربا النسيئة', 'ribā an-nasīʾa', 35, 'بيع مال ربوي بمال ربوي يوافقه في العلة بدون تقابض فوري.', 'Ribawi-goed verkopen tegen ribawi-goed met dezelfde oorzaak, zonder directe overdracht.'],
    ['المال الربوي', 'al-māl ar-ribawī', 32, 'النقدان وما في معناهما، والأطعمة المقتاتة المدخرة وما في معناها.', 'De twee geldsoorten en wat daarop lijkt, en bewaarbaar hoofdvoedsel en wat daarop lijkt.'],
    ['العلة', 'al-ʿilla', 33, 'في الذهب والفضة: الثمنية، وفي الأطعمة الأربعة: القوت والادخار.', 'Bij goud en zilver: geldwaarde; bij de vier voedingsmiddelen: hoofdvoedsel en bewaarbaarheid.'],
    ['التقابض', 'at-taqābuḍ', 35, 'التسليم والتسلم الفوري في مجلس العقد نفسه.', 'Directe overdracht en ontvangst in de zitting van het contract.'],
    ['الصرف', 'aṣ-ṣarf', 37, 'بيع نقد بنقد، اتحد الجنس أو اختلف.', 'Verkoop van geld tegen geld, van dezelfde of een andere soort.'],
    ['الغش', 'al-ghishsh', 39, 'كتم عيب لو علمه طرف العقد الآخر لم يقبله.', 'Een gebrek verzwijgen dat de andere partij zou doen afzien.'],
    ['الغرر', 'al-gharar', 40, 'مجهول العاقبة أو مستورها، وقيل: ما لا يقدر على تسليمه أو لا تعرف حقيقته ومقداره.', 'Wat een onbekende of verborgen afloop heeft; of: wat niet geleverd kan worden of waarvan aard en hoeveelheid onbekend zijn.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['أحوال بيع الربويات', 'De drie toestanden bij ribawi-goederen'],
      intro: ['كما في الخلاصة ص ٣٤.', 'Zoals in de samenvatting op p. 34.'],
      columns: [['التماثل', 'Gelijkheid'], ['التقابض', 'Directe overdracht'], ['مثال', 'Voorbeeld']],
      rows: [
        { label: ['اتحد الجنس', 'Zelfde soort'], cells: [['واجب', 'verplicht'], ['واجب', 'verplicht'], ['ذهب بذهب، ريال بريال', 'goud tegen goud, riyal tegen riyal']] },
        { label: ['اختلف الجنس واتحدت العلة', 'Andere soort, zelfde oorzaak'], cells: [['لا يجب', 'niet verplicht'], ['واجب', 'verplicht'], ['تمر بشعير، دولار بريال', 'dadels tegen gerst, dollar tegen riyal']] },
        { label: ['اختلفت العلة', 'Andere oorzaak'], cells: [['لا يجب', 'niet verplicht'], ['لا يجب', 'niet verplicht'], ['بر بريالات', 'tarwe tegen riyals']] }
      ],
      page: 34
    },
    {
      type: 'cards',
      title: ['أقسام الربا', 'Soorten ribā'],
      intro: ['كما في الصفحات ٣١–٣٦.', 'Zoals op p. 31–36.'],
      nodes: [
        [31, 'الزيادة في الدين عند حلوله', 'Verhoging bij de vervaldatum', 'ربا الديون', 'ribā van schulden'],
        [32, 'الزيادة المشروطة في أصل القرض', 'Bedongen vermeerdering bij een lening', 'ربا القروض', 'ribā van leningen'],
        [32, 'ربا الفضل', 'Ribā al-faḍl', 'بيع الربوي بجنسه متفاضلا', 'ribawi-goed tegen eigen soort met verschil'],
        [35, 'ربا النسيئة', 'Ribā an-nasīʾa', 'بيع ربوي بربوي يوافقه في العلة بلا تقابض', 'ribawi tegen ribawi met dezelfde oorzaak, zonder directe overdracht']
      ]
    }
  ],
  sections: [
    [29, 'الحكمة في تحريم الربا', 'Wijsheid van het verbod op ribā', 'من حكمه: الإضرار بالفقراء بمضاعفة ديونهم، وانقطاع المعروف والقرض الحسن، وتعويد المرابي الكسل وترك المكاسب، وأكل أموال الناس بالباطل، وارتفاع أسعار السلع والخدمات، وضعف القوة الشرائية.', 'Onder meer: het schaadt de armen door hun schulden te verdubbelen, het goede doen en de goede lening verdwijnen, de woekeraar went aan luiheid, men eet onrechtmatig het geld van mensen op, prijzen stijgen en de koopkracht daalt.'],
    [32, 'ربا الجاهلية', 'De ribā van de jāhiliyya', 'قال قتادة: إن ربا الجاهلية أن يبيع الرجل البيع إلى أجل مسمى، فإذا حل الأجل ولم يكن عند صاحبه قضاء زاد وأخر عنه.', 'Qatāda: de ribā van de jāhiliyya was dat iemand op een vaste termijn verkocht; kon de ander op de vervaldag niet betalen, dan verhoogde hij de schuld en gaf uitstel.'],
    [35, 'الأموال الربوية الستة', 'De zes ribawi-goederen', 'الذهب والفضة، والبر والشعير والتمر والملح. ويلحق بالذهب والفضة النقود كلها لعلة الثمنية، ويلحق بالأطعمة كل مقتات مدخر.', 'Goud en zilver, tarwe, gerst, dadels en zout. Alle geld valt onder goud en zilver wegens geldwaarde; elk bewaarbaar hoofdvoedsel valt onder de voedingsmiddelen.'],
    [36, 'شراء الربوي ببطاقة الصراف', 'Ribawi-goed kopen met de pinpas', 'لا بأس بشراء الذهب أو الفضة ببطاقة الصراف إذا خصم المبلغ فورا من حساب العميل وأودع في حساب البائع، لأنه قبض شرعي.', 'Goud of zilver met de pinpas kopen mag als het bedrag direct wordt afgeschreven en bij de verkoper gestort, want dat is sharʿī bezitname.'],
    [37, 'بيع العملات في الفوركس', 'Valutahandel (forex)', 'الأصل جواز بيع العملات: فإن اختلفت العملة اشترط التقابض في المجلس، وإن اتحدت اشترط التماثل والتقابض.', 'Valutahandel is in beginsel toegestaan: bij verschillende munten is directe overdracht in de zitting voorwaarde; bij dezelfde munt gelijkheid en directe overdracht.'],
    [39, 'صور الغش', 'Vormen van bedrog', 'من صوره: كتمان عيب السلعة، والغش في الميزان، والغش في المباني والطرق والجسور.', 'Onder meer: een gebrek verzwijgen, bedrog met de weegschaal, en bedrog bij gebouwen, wegen en bruggen.'],
    [40, 'مجالات الغرر', 'Toepassingen van gharar', 'من البيوع المنهي عنها للغرر: الملامسة والمنابذة وبيع الحصاة وبيع الثمار قبل بدو صلاحها وما في البطون والضروع وما لا يقدر على تسليمه. ومن صوره الحديثة: التأمين التجاري واليانصيب والتسويق الشبكي والهرمي.', 'Verboden wegens gharar: mulāmasa, munābadha, de steentjesverkoop, vruchten vóór rijpheid, het ongeboren jong en melk in de uier, en wat niet geleverd kan worden. Moderne vormen: commerciële verzekering, loterijen en netwerk- en piramidemarketing.']
  ],
  keycards: [
    ['opsomming', 28, 'أصول التحريم في المعاملات', 'Grondslagen van verbod in transacties', ['الربا', 'الغش', 'الغرر'], ['ribā', 'bedrog', 'gharar']],
    ['voorwaarde', 40, 'ضوابط الغرر الممنوع', 'Criteria van verboden gharar', ['أن يكون كثيرا', 'أن يمكن التحرز منه بلا حرج ومشقة', 'ألا تدعو إليه الحاجة'], ['dat het veel is', 'dat men het zonder moeite kan vermijden', 'dat er geen behoefte aan is']],
    ['onderscheid', 37, 'حالتا الصرف', 'De twee gevallen van geldwissel', ['جنس واحد كدولار بدولار: التماثل والتقابض', 'جنسان كريال بدولار: التقابض فقط'], ['één soort, zoals dollar tegen dollar: gelijkheid en directe overdracht', 'twee soorten, zoals riyal tegen dollar: alleen directe overdracht']]
  ],
  hadith: [
    { text: 'اجتنبوا السبع الموبقات … الشرك بالله، والسحر، وقتل النفس التي حرم الله إلا بالحق، وأكل الربا، وأكل مال اليتيم، والتولي يوم الزحف، وقذف المحصنات المؤمنات الغافلات', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Mijd de zeven vernietigende zonden … Allah iets toevoegen, tovenarij, iemand doden die Allah verbood te doden behalve met recht, ribā eten, het bezit van een wees eten, vluchten op de dag van de opmars, en kuise, gelovige, argeloze vrouwen belasteren', pages: [29] },
    { text: 'لعن آكل الربا، وموكله، وشاهديه، وكاتبه، وقال: هم سواء', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'جابر', narratorNl: 'Jābir', nl: 'Hij vervloekte wie ribā eet, wie het voedt, de twee getuigen en de schrijver ervan, en zei: zij zijn gelijk', pages: [29] },
    { text: 'الذهب بالذهب، والفضة بالفضة، والبر بالبر، والشعير بالشعير، والتمر بالتمر، والملح بالملح، مثلا بمثل، سواء بسواء، يدا بيد، فإذا اختلفت هذه الأصناف، فبيعوا كيف شئتم، إذا كان يدا بيد', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عبادة بن الصامت', narratorNl: 'ʿUbāda ibn aṣ-Ṣāmit', nl: 'Goud tegen goud, zilver tegen zilver, tarwe tegen tarwe, gerst tegen gerst, dadels tegen dadels, zout tegen zout: gelijk tegen gelijk, evenveel tegen evenveel, van hand tot hand. Verschillen de soorten, verkoop dan zoals jullie willen, mits van hand tot hand', pages: [33, 36] },
    { text: 'ما هذا يا صاحب الطعام؟ … أفلا جعلته فوق الطعام كي يراه الناس؟! من غش فليس مني', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', note: 'لما أدخل يده في صبرة طعام فنالت أصابعه بللا.', nlNote: 'Toen hij zijn hand in een hoop voedsel stak en zijn vingers nat werden.', nl: 'Wat is dit, eigenaar van het voedsel? … Waarom heb je het niet bovenop gelegd zodat de mensen het zien? Wie bedriegt, hoort niet bij mij', pages: [39] },
    { text: 'نهى رسول الله ﷺ عن بيع الغرر', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'De Boodschapper van Allah ﷺ verbood de gharar-verkoop', pages: [40] }
  ],
  persons: [
    ['ibn-qudama', 'text', [29], 'نقل إجماع الأمة على تحريم الربا.', 'Gaf de consensus over het verbod op ribā.'],
    ['al-mawardi', 'text', [29], 'قال: الربا لم يحل في شريعة قط.', 'Zei: ribā was in geen enkele wet ooit toegestaan.'],
    ['jabir-ibn-abdallah', 'text', [29], 'روى لعن آكل الربا وموكله.', 'Overleverde de vloek over wie ribā eet en voedt.'],
    ['qatada-ibn-diama', 'text', [32], 'وصف ربا الجاهلية.', 'Beschreef de ribā van de jāhiliyya.'],
    ['ubada-ibn-as-samit', 'text', [33], 'روى حديث الأصناف الستة.', 'Overleverde de hadith van de zes soorten.'],
    ['abu-hurayra', 'text', [40], 'روى النهي عن بيع الغرر.', 'Overleverde het verbod op gharar-verkoop.'],
    ['ibn-taymiyya', 'text', [41], 'بين أن الغرر يفضي إلى مفسدة الميسر.', 'Legde uit dat gharar tot het kwaad van gokken leidt.']
  ],
  review: [
    ['أصول التحريم في المعاملات: الربا والغش والغرر.', 'De grondslagen van verbod: ribā, bedrog en gharar.'],
    ['الربا قسمان: ربا الديون وربا البيوع.', 'Ribā kent twee delen: van schulden en van verkopen.'],
    ['العلة في النقدين الثمنية، وفي الأطعمة القوت والادخار.', 'De oorzaak bij geld is geldwaarde, bij voedsel hoofdvoedsel en bewaarbaarheid.'],
    ['الصرف في الجنس الواحد يشترط فيه التماثل والتقابض.', 'Geldwissel binnen één soort vereist gelijkheid en directe overdracht.'],
    ['من غش فليس منا، والغرر الكثير ممنوع.', 'Wie bedriegt hoort er niet bij; veel gharar is verboden.']
  ],
  quiz: [
    { type: 'mc', page: 34, q: ['بيع صاع تمر بصاعين من شعير في المجلس:', 'Een ṣāʿ dadels verkopen voor twee ṣāʿ gerst in de zitting:'], options: [['جائز', 'محرم لأنه تفاضل', 'محرم مطلقا', 'مكروه'], ['toegestaan', 'verboden wegens verschil', 'altijd verboden', 'afgeraden']], answer: 0, explain: ['اختلف الجنس واتحدت العلة: يجوز التفاضل بشرط التقابض.', 'Andere soort, zelfde oorzaak: verschil mag, mits directe overdracht.'] },
    { type: 'tf', page: 31, q: ['الفوائد على الودائع الجارية ليست ربا لأن البنك لم يقترض.', 'Rente op lopende tegoeden is geen ribā, want de bank leende niets.'], answer: 1, explain: ['البنك يضمن المبلغ، والضمان لا يكون إلا في القرض.', 'De bank garandeert het bedrag, en dat gebeurt alleen bij een lening.'] },
    { type: 'mc', page: 32, q: ['ما أخطر أنواع الربا وأشدها تحريما؟', 'Wat is de gevaarlijkste en zwaarst verboden ribā?'], options: [['الزيادة في الدين عند حلوله', 'بيع الذهب بالفضة', 'بيع التمر بالشعير', 'الصرف بين عملتين'], ['verhoging van de schuld bij de vervaldatum', 'goud tegen zilver', 'dadels tegen gerst', 'wissel tussen twee munten']], answer: 0, explain: ['وهو ربا الجاهلية.', 'Dat is de ribā van de jāhiliyya.'] },
    { type: 'tf', page: 36, q: ['يجوز حجز الذهب بدفع جزء من قيمته وتأجيل قبضه.', 'Goud reserveren met een aanbetaling en later ophalen is toegestaan.'], answer: 1, explain: ['هذا من ربا النسيئة.', 'Dat is ribā an-nasīʾa.'] },
    { type: 'mc', page: 40, q: ['أي هذه من ضوابط الغرر الممنوع؟', 'Welke hoort bij de criteria van verboden gharar?'], options: [['أن يكون كثيرا', 'أن يكون يسيرا', 'أن تدعو إليه الحاجة', 'أن يتعذر التحرز منه'], ['dat het veel is', 'dat het weinig is', 'dat er behoefte aan is', 'dat het niet te vermijden is']], answer: 0, explain: ['كما في الإطار ص ٤٠.', 'Zoals in het kader op p. 40.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٣٨ و٤١.', 'Oefeningen van het boek op p. 38 en 41. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
