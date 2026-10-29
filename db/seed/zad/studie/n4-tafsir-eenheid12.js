// Hoofdstukkaart bij التفسير (٤), eenheid 12: سورة الفيل (les 14, boek p. 57–60).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '14',
  unit: 12,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '57–60',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الفيل', 'Soera al-Fīl'],
  subtitle: ['سورة مكية، خمس آيات', 'Mekkaans, vijf verzen'],
  summary: [
    'تذكر السورة ما فعل الله بأصحاب الفيل الذين جاؤوا من اليمن بقيادة أبرهة لهدم الكعبة: جعل كيدهم في تضليل، وأرسل عليهم طيرا أبابيل ترميهم بحجارة من سجيل، فجعلهم كعصف مأكول.',
    'De soera herinnert aan wat Allah deed met de mensen van de olifant, die onder leiding van Abraha uit Jemen kwamen om de Kaʿba te verwoesten: Hij liet hun list mislukken en zond zwermen vogels die hen met stenen van gebakken klei bekogelden, zodat zij werden als afgegraasd gewas.'
  ],
  map: {
    title: ['سورة الفيل في خريطة واحدة', 'Soera al-Fīl in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الفيل', 'Soera al-Fīl'], ['الوحدة الثانية عشرة', 'Eenheid 12']],
    nodes: [
      { label: ['أصحاب الفيل', 'De mensen van de olifant'], sub: ['الآية ١', 'vers 1'], page: 58, children: [['الحبشة بقيادة أبرهة', 'de Abessijnen onder Abraha'], ['أرادوا هدم الكعبة', 'wilden de Kaʿba verwoesten']] },
      { label: ['إبطال كيدهم', 'Hun list verijdeld'], sub: ['الآية ٢', 'vers 2'], page: 58, children: [['في تضليل', 'in verlies en verspilling']] },
      { label: ['الطير الأبابيل', 'De vogelzwermen'], sub: ['الآيات ٣–٥', 'vers 3–5'], page: 58, children: [['حجارة من سجيل', 'stenen van gebakken klei'], ['كعصف مأكول', 'als afgegraasd gewas']] }
    ]
  },
  points: [
    [57, 'سماها بعض السلف «ألم تر» وكذلك البخاري، واسمها في المصاحف وكتب التفسير «الفيل».', 'Sommige vroege geleerden en al-Bukhārī noemden de soera "Alam tara"; in de muṣḥafs en tafsīrs heet zij "al-Fīl".'],
    [58, 'كان دفع أصحاب الفيل من نعم الله على قريش، وكانوا نصارى، فأهلكهم الله وخيب سعيهم.', 'Het afweren van de mensen van de olifant was een gunst van Allah aan Quraysh; zij waren christenen en Allah vernietigde hen en liet hun streven mislukken.'],
    [58, 'ذكر المفسرون: كان مع كل طائر ثلاثة أحجار، حجران في رجليه وحجر في منقاره.', 'De uitleggers vermelden: elke vogel had drie stenen, twee in zijn poten en één in zijn snavel.'],
    [59, 'الحجر صغير، يصيب أحدهم في رأسه فيخرج من دبره.', 'De steen was klein; hij trof iemand op het hoofd en kwam aan zijn achterkant eruit.'],
    [59, 'قال ابن عاشور: العصف ورق الزرع، إذا دخلته الدواب فأكلته داسته وطرحته، وهو تمثيل لحال أصحاب الفيل بعد عزتهم.', 'Ibn ʿĀshūr: ʿaṣf zijn de bladeren van het gewas; als dieren erin komen en ervan eten, vertrappen en verspreiden ze het; een beeld van de mensen van de olifant na hun macht.']
  ],
  terms: [
    ['تضليل', 'taḍlīl', 58, 'ضياع وإبطال.', 'Verspilling en tenietdoening.'],
    ['أبابيل', 'abābīl', 58, 'جماعات متتابعة، جمع لا واحد له.', 'Groepen na elkaar; een meervoud zonder enkelvoud.'],
    ['سجيل', 'sijjīl', 58, 'طين مطبوخ، لأنه أصلب.', 'Gebakken klei, omdat die harder is.'],
    ['العصف', 'al-ʿaṣf', 59, 'ورق الزرع اليابس.', 'De droge bladeren van het gewas.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['دروس قصة الفيل', 'Lessen uit het verhaal van de olifant'],
      intro: ['كما في الصفحة ٥٩.', 'Zoals op p. 59.'],
      nodes: [
        [59, 'الكعبة حرم الله', 'De Kaʿba is Allahs heiligdom', 'يحميها ممن أرادها بسوء', 'Hij beschermt haar tegen wie haar kwaad wil'],
        [59, 'تثبيت النبي ﷺ', 'Steun voor de Profeet ﷺ', 'من دفع الكيد عن بيته أولى أن يدفعه عن رسوله ودينه', 'Wie de list van Zijn Huis weerde, weert haar zeker van Zijn Boodschapper en religie'],
        [59, 'الله غالب على أمره', 'Allah zet Zijn zaak door', 'فلا يغتر المشركون بقوتهم وعددهم', 'laat de polytheïsten zich niet misleiden door hun kracht en aantal']
      ]
    }
  ],
  sections: [
    [59, 'تذكير قريش', 'Een herinnering voor Quraysh', 'ما أصاب أصحاب الفيل تذكير لقريش بأن الذي فعل ذلك هو رب هذا البيت، وأن الأصنام التي وضعوها حوله لا حظ لها فيه.', 'Wat de mensen van de olifant overkwam, herinnert Quraysh eraan dat de Heer van dit Huis dat deed, en dat de afgoden die zij eromheen zetten er geen deel aan hebben.']
  ],
  keycards: [
    ['definitie', 58, 'أبابيل', 'Abābīl', ['جماعات كثيرة متتابعة من كل ناحية', 'جمع لا واحد له'], ['veel groepen na elkaar, uit alle hoeken', 'een meervoud zonder enkelvoud']]
  ],
  hadith: [
    { text: 'إن الله عز وجل حبس عن مكة الفيل، وسلط عليها رسوله والمؤمنين، ألا وإنها لم تحل لأحد قبلي، ولن تحل لأحد بعدي، ألا وإنها أحلت لي ساعة من النهار، ألا وإنها ساعتي هذه حرام', takhrij: 'في الصحيحين', takhrijNl: 'al-Bukhārī en Muslim', note: 'قاله النبي ﷺ يوم فتح مكة.', nlNote: 'Gezegd door de Profeet ﷺ op de dag van de verovering van Mekka.', nl: 'Allah hield de olifant tegen bij Mekka en gaf Zijn Boodschapper en de gelovigen macht over haar. Zij was voor niemand vóór mij toegestaan en zal het voor niemand na mij zijn; zij werd mij één uur van de dag toegestaan, en nu, op dit uur, is zij weer heilig', pages: [57] }
  ],
  persons: [
    ['al-bukhari', 'text', [57], 'سمى السورة «ألم تر»، وروى حديث حبس الفيل.', 'Noemde de soera "Alam tara" en overleverde de hadith over het tegenhouden van de olifant.'],
    ['muslim', 'takhrij', [57], 'روى حديث حبس الفيل عن مكة.', 'Overleverde de hadith over het tegenhouden van de olifant.'],
    ['ibn-ashur', 'text', [59], 'شرح معنى العصف وتمثيل حال أصحاب الفيل.', 'Verklaarde ʿaṣf en het beeld van de mensen van de olifant.']
  ],
  review: [
    ['حمى الله الكعبة من أصحاب الفيل بطير أبابيل.', 'Allah beschermde de Kaʿba tegen de mensen van de olifant met zwermen vogels.'],
    ['السجيل طين مطبوخ، والعصف ورق الزرع.', 'Sijjīl is gebakken klei, ʿaṣf zijn de bladeren van het gewas.'],
    ['القصة تثبيت للنبي ﷺ وتذكير لقريش.', 'Het verhaal steunt de Profeet ﷺ en herinnert Quraysh.']
  ],
  quiz: [
    { type: 'mc', page: 58, q: ['من قائد أصحاب الفيل؟', 'Wie leidde de mensen van de olifant?'], options: [['أبرهة', 'النجاشي', 'أبو رغال', 'كسرى'], ['Abraha', 'an-Najāshī', 'Abū Righāl', 'Kisrā']], answer: 0, explain: ['أبرهة الحبشي الأشرم.', 'Abraha al-Ḥabashī al-Ashram.'] },
    { type: 'mc', page: 58, q: ['ما السجيل؟', 'Wat is sijjīl?'], options: [['طين مطبوخ', 'حديد', 'نار', 'حصى البحر'], ['gebakken klei', 'ijzer', 'vuur', 'zeekiezels']], answer: 0, explain: ['لأنه أصلب.', 'Omdat dat harder is.'] },
    { type: 'tf', page: 57, q: ['سمى البخاري هذه السورة «ألم تر».', 'Al-Bukhārī noemde deze soera "Alam tara".'], answer: 0, explain: ['وكذلك بعض السلف.', 'Net als sommige vroege geleerden.'] },
    { type: 'mc', page: 58, q: ['ما دين أصحاب الفيل؟', 'Welke religie hadden de mensen van de olifant?'], options: [['النصرانية', 'اليهودية', 'المجوسية', 'عبادة الأصنام'], ['christendom', 'jodendom', 'zoroastrisme', 'afgodendienst']], answer: 0, explain: ['ذكر الكتاب أنهم كانوا نصارى.', 'Het boek zegt dat zij christenen waren.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٠.', 'Oefening van het boek op p. 60. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
