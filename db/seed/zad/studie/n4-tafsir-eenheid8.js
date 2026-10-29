// Hoofdstukkaart bij التفسير (٤), eenheid 8: سورة القارعة (les 10, boek p. 42–45).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '10',
  unit: 8,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '42–45',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة القارعة', 'Soera al-Qāriʿa'],
  subtitle: ['سورة مكية، إحدى عشرة آية', 'Mekkaans, elf verzen'],
  summary: [
    'القارعة اسم من أسماء يوم القيامة، تقرع القلوب بهولها؛ يكون الناس فيها كالفراش المبثوث والجبال كالعهن المنفوش، ثم توزن الأعمال: فمن ثقلت موازينه ففي عيشة راضية، ومن خفت موازينه فأمه هاوية، نار حامية.',
    'Al-Qāriʿa is een naam van de Opstandingsdag, die de harten treft met haar verschrikking. De mensen zijn dan als verspreide motten en de bergen als gekaarde wol. Daarna worden de daden gewogen: wiens weegschaal zwaar is, leidt een welgevallig leven; wiens weegschaal licht is, diens moeder is al-Hāwiya, een gloeiend vuur.'
  ],
  map: {
    title: ['سورة القارعة في خريطة واحدة', 'Soera al-Qāriʿa in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة القارعة', 'Soera al-Qāriʿa'], ['الوحدة الثامنة', 'Eenheid 8']],
    nodes: [
      { label: ['تعظيم القارعة', 'De grootheid van al-Qāriʿa'], sub: ['الآيات ١–٣', 'vers 1–3'], page: 42, children: [['من أسماء يوم القيامة', 'een naam van de Opstandingsdag'], ['ما القارعة: تعظيم وتهويل', '"wat is al-Qāriʿa": verheerlijking en verschrikking']] },
      { label: ['أهوال اليوم', 'De verschrikkingen van de Dag'], sub: ['الآيتان ٤–٥', 'vers 4–5'], page: 43, children: [['الناس كالفراش المبثوث', 'mensen als verspreide motten'], ['الجبال كالعهن المنفوش', 'bergen als gekaarde wol']] },
      { label: ['الميزان', 'De weegschaal'], sub: ['الآيات ٦–١١', 'vers 6–11'], page: 43, children: [['ثقلت موازينه: عيشة راضية', 'zware weegschaal: welgevallig leven'], ['خفت موازينه: أمه هاوية', 'lichte weegschaal: al-Hāwiya'], ['نار حامية', 'een gloeiend vuur']] }
    ]
  },
  points: [
    [42, 'من أسماء يوم القيامة: القارعة، والطامة، والصاخة، والحاقة، والغاشية.', 'Namen van de Opstandingsdag zijn onder meer: al-Qāriʿa, aṭ-Ṭāmma, aṣ-Ṣākhkha, al-Ḥāqqa en al-Ghāshiya.'],
    [43, 'يكون الناس كالفراش الذي يتهافت في النار، منتشرين، كما قال: ﴿كأنهم جراد منتشر﴾.', 'De mensen zijn als motten die in het vuur vallen, verspreid, zoals in "alsof zij uitgezwermde sprinkhanen zijn".'],
    [43, 'الميزان له كفتان ولسان، توزن فيه صحائف الحسنات والسيئات.', 'De weegschaal heeft twee schalen en een tong; daarin worden de bladen met goede en slechte daden gewogen.'],
    [43, '﴿فأمه هاوية﴾: يهوي في النار على رأسه، وقيل: الهاوية اسم من أسماء النار، هي أمه ومأواه كما كان يأوي إلى أمه في الدنيا.', '"Diens moeder is al-Hāwiya": hij valt met zijn hoofd vooruit in het Vuur; ook gezegd: al-Hāwiya is een naam van het Vuur, zijn "moeder" en toevluchtsoord, zoals hij in de wereld naar zijn moeder ging.'],
    [43, 'الهاء في ﴿ما هيه﴾ هاء السكت، والأصل «ما هي».', 'De hāʾ in "mā hiyah" is de hāʾ van rust; oorspronkelijk staat er "mā hiya".']
  ],
  terms: [
    ['القارعة', 'al-qāriʿa', 42, 'الساعة التي تقرع القلوب بهولها.', 'Het Uur dat de harten treft met haar verschrikking.'],
    ['الفراش', 'al-farāsh', 43, 'الحشرات التي تتهافت في النار كالبعوض.', 'De insecten die in het vuur vallen, zoals muggen.'],
    ['العهن المنفوش', 'al-ʿihn al-manfūsh', 43, 'الصوف المندوف الذي أخذ في الذهاب والتمزق.', 'Gekaarde wol die begint te verdwijnen en uiteen te vallen.'],
    ['هاوية', 'hāwiya', 43, 'يهوي في النار على رأسه، أو اسم من أسماء النار.', 'Hij valt met zijn hoofd vooruit in het Vuur; of een naam van het Vuur.'],
    ['حامية', 'ḥāmiya', 43, 'شديدة الحرارة.', 'Zeer heet.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الميزان واحد أم متعدد؟', 'Eén weegschaal of meer?'],
      intro: ['قولان ذكرهما الكتاب ص ٤٤.', 'Twee meningen die het boek op p. 44 noemt.'],
      columns: [['القول', 'Mening'], ['توجيه الجمع «موازين»', 'Verklaring van het meervoud mawāzīn']],
      rows: [
        { label: ['ميزان واحد', 'Eén weegschaal'], cells: [['رجحه ابن عثيمين', 'volgens Ibn ʿUthaymīn het waarschijnlijkst'], ['الجمع باعتبار الموزون من الحسنات والسيئات', 'het meervoud slaat op wat gewogen wordt']] },
        { label: ['موازين متعددة', 'Meerdere weegschalen'], cells: [['لكل أمة ميزان ولكل عمل ميزان', 'voor elke gemeenschap en elke daad een weegschaal'], ['الجمع على حقيقته', 'het meervoud is letterlijk']] }
      ],
      page: 44
    }
  ],
  sections: [
    [44, 'أصحاب الأعراف', 'De mensen van al-Aʿrāf', 'من تساوت حسناته وسيئاته سكتت عنه السورة، وبين الله في الأعراف أنهم لا يدخلون النار، بل يحبسون في الأعراف ما شاء الله، ثم يدخلهم الجنة برحمته، كما قال السعدي.', 'Over wie evenveel goede als slechte daden heeft, zwijgt de soera. In al-Aʿrāf maakt Allah duidelijk dat zij het Vuur niet ingaan, maar op al-Aʿrāf worden vastgehouden zolang Allah wil; daarna laat Hij hen door Zijn genade het Paradijs binnengaan, zoals as-Saʿdī zegt.']
  ],
  keycards: [
    ['opsomming', 42, 'من أسماء يوم القيامة', 'Namen van de Opstandingsdag', ['القارعة', 'الطامة', 'الصاخة', 'الحاقة', 'الغاشية'], ['al-Qāriʿa', 'aṭ-Ṭāmma', 'aṣ-Ṣākhkha', 'al-Ḥāqqa', 'al-Ghāshiya']]
  ],
  hadith: [
    { text: 'ناركم هذه التي يوقد ابن آدم جزء من سبعين جزءا من حر جهنم … فإنها فضلت عليها بتسعة وستين جزءا، كلها مثل حرها', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'قالوا: والله إن كانت لكافية يا رسول الله.', nlNote: 'Zij zeiden: bij Allah, zij zou al genoeg zijn, o Boodschapper van Allah.', nl: 'Dit vuur van jullie, dat de mens aansteekt, is een zeventigste deel van de hitte van Jahannam … Zij is negenenzestig delen heter, elk deel zo heet als dit', pages: [43] }
  ],
  persons: [
    ['abu-hurayra', 'text', [43], 'روى حديث حر جهنم.', 'Overleverde de hadith over de hitte van Jahannam.'],
    ['ibn-uthaymin', 'text', [44], 'رجح أن الميزان واحد.', 'Achtte het waarschijnlijkst dat er één weegschaal is.'],
    ['as-sadi', 'text', [44], 'بين أن أصحاب الأعراف من تساوت حسناتهم وسيئاتهم.', 'Legde uit dat de mensen van al-Aʿrāf zij zijn bij wie goede en slechte daden gelijk zijn.']
  ],
  review: [
    ['القارعة من أسماء يوم القيامة.', 'Al-Qāriʿa is een naam van de Opstandingsdag.'],
    ['توزن الأعمال يوم القيامة بميزان له كفتان ولسان.', 'De daden worden op de Opstandingsdag gewogen op een weegschaal met twee schalen en een tong.'],
    ['نار الدنيا جزء من سبعين جزءا من حر جهنم.', 'Het vuur van deze wereld is een zeventigste deel van de hitte van Jahannam.']
  ],
  quiz: [
    { type: 'tf', page: 42, q: ['القارعة اسم من أسماء جهنم.', 'Al-Qāriʿa is een naam van Jahannam.'], answer: 1, explain: ['هي اسم من أسماء يوم القيامة.', 'Het is een naam van de Opstandingsdag.'] },
    { type: 'mc', page: 43, q: ['ما العهن المنفوش؟', 'Wat is al-ʿihn al-manfūsh?'], options: [['الصوف المندوف', 'الفراش المتطاير', 'الغبار', 'الرماد'], ['gekaarde wol', 'rondvliegende motten', 'stof', 'as']], answer: 0, explain: ['تكون الجبال كالصوف المندوف.', 'De bergen worden als gekaarde wol.'] },
    { type: 'mc', page: 44, q: ['ما الذي رجحه ابن عثيمين في الميزان؟', 'Wat achtte Ibn ʿUthaymīn het waarschijnlijkst over de weegschaal?'], options: [['أنه ميزان واحد', 'أن لكل عمل ميزانا', 'أن لكل أمة ميزانا', 'أنه مجاز لا حقيقة'], ['dat het één weegschaal is', 'dat elke daad een weegschaal heeft', 'dat elke gemeenschap een weegschaal heeft', 'dat het beeldspraak is']], answer: 0, explain: ['قال: الأقرب أنه ميزان واحد، والله أعلم.', 'Hij zei: het waarschijnlijkst is één weegschaal; Allah weet het best.'] },
    { type: 'mc', page: 43, q: ['ما الهاء في ﴿ما هيه﴾؟', 'Wat is de hāʾ in "mā hiyah"?'], options: [['هاء السكت', 'ضمير الغائب', 'هاء التأنيث', 'أصلية في الكلمة'], ['de hāʾ van rust', 'een voornaamwoord', 'de vrouwelijke uitgang', 'deel van de stam']], answer: 0, explain: ['الأصل «ما هي» وزيدت هاء السكت.', 'Oorspronkelijk "mā hiya"; de hāʾ van rust is toegevoegd.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٤٥.', 'Oefening van het boek op p. 45. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
