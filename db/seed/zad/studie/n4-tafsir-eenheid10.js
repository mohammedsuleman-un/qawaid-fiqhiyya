// Hoofdstukkaart bij التفسير (٤), eenheid 10: سورة العصر (les 12, boek p. 49–52).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md).
// Het verhaal van ʿAmr ibn al-ʿĀṣ bij Musaylima (p. 49) wordt in het boek alleen "vermeld",
// zonder bron, en is daarom niet opgenomen. Het boek noemt bij deze soera geen hadith.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '12',
  unit: 10,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '49–52',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة العصر', 'Soera al-ʿAṣr'],
  subtitle: ['سورة مكية، ثلاث آيات', 'Mekkaans, drie verzen'],
  summary: [
    'يقسم الله بالعصر على أن الإنسان في خسر، إلا من جمع أربع صفات: الإيمان، والعمل الصالح، والتواصي بالحق، والتواصي بالصبر. قال الشافعي: لو تدبر الناس هذه السورة لوسعتهم.',
    'Allah zweert bij de tijd dat de mens in verlies is, behalve wie vier eigenschappen samenbrengt: geloof, goede daden, elkaar aansporen tot de waarheid en elkaar aansporen tot geduld. Ash-Shāfiʿī zei: als de mensen over deze soera nadachten, zou zij hun genoeg zijn.'
  ],
  map: {
    title: ['سورة العصر في خريطة واحدة', 'Soera al-ʿAṣr in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة العصر', 'Soera al-ʿAṣr'], ['الوحدة العاشرة', 'Eenheid 10']],
    nodes: [
      { label: ['القسم بالعصر', 'De eed bij de tijd'], sub: ['الآية ١', 'vers 1'], page: 50, children: [['الدهر الذي تقع فيه حركات الناس', 'de tijd waarin de mensen handelen']] },
      { label: ['الإنسان في خسر', 'De mens is in verlies'], sub: ['الآية ٢', 'vers 2'], page: 50, children: [['«لفي خسر» أبلغ من «لخاسر»', '"in verlies" is sterker dan "verliezend"']] },
      { label: ['الصفات المنجية', 'De reddende eigenschappen'], sub: ['الآية ٣', 'vers 3'], page: 50, children: [['الإيمان', 'geloof'], ['العمل الصالح', 'goede daden'], ['التواصي بالحق', 'aansporen tot de waarheid'], ['التواصي بالصبر', 'aansporen tot geduld']] }
    ]
  },
  points: [
    [49, 'قال الشافعي: لو تدبر الناس هذه السورة لوسعتهم.', 'Ash-Shāfiʿī: als de mensen over deze soera nadachten, zou zij hun genoeg zijn.'],
    [50, '﴿لفي خسر﴾ أبلغ من «لخاسر» لأن «في» للظرفية، فكأن الإنسان منغمس في الخسران يحيط به من كل جانب.', '"In verlies" is sterker dan "verliezend", omdat "fī" plaats aangeeft: alsof de mens ondergedompeld is in verlies dat hem van alle kanten omringt.'],
    [50, 'العمل الصالح ما جمع أمرين: الإخلاص لله، والمتابعة للرسول ﷺ.', 'Een goede daad verenigt twee dingen: oprechtheid voor Allah en navolging van de Boodschapper ﷺ.'],
    [50, 'التواصي بالصبر: الصبر على طاعة الله، وعلى المصائب والأقدار، وعلى أذى من يأمرونه وينهونه.', 'Elkaar aansporen tot geduld: geduld bij gehoorzaamheid aan Allah, bij rampen en voorbeschikking, en bij de kwelling van wie men het goede gebiedt en het kwade verbiedt.'],
    [51, 'الخسران مراتب: قد يكون مطلقا كمن خسر الدنيا والآخرة، وقد يخسر من وجه دون وجه.', 'Verlies kent rangen: het kan absoluut zijn, zoals bij wie deze wereld en het hiernamaals verloor, of iemand verliest in sommige opzichten en niet in andere.']
  ],
  terms: [
    ['العصر', 'al-ʿaṣr', 50, 'الدهر الذي تقع فيه حركات الناس من خير وشر.', 'De tijd waarin de mensen goed en kwaad doen.'],
    ['خسر', 'khusr', 50, 'خسارة وهلاك.', 'Verlies en verderf.'],
    ['تواصوا بالحق', 'tawāṣaw bi-l-ḥaqq', 50, 'أوصى بعضهم بعضا بفعل الطاعات وترك المحرمات.', 'Zij spoorden elkaar aan tot gehoorzaamheid en het laten van het verbodene.'],
    ['تواصوا بالصبر', 'tawāṣaw bi-ṣ-ṣabr', 50, 'أوصى بعضهم بعضا بالصبر.', 'Zij spoorden elkaar aan tot geduld.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['الصفات المنجية من الخسران أربع', 'Vier eigenschappen die redden van verlies'],
      intro: ['كما في الصفحة ٥١.', 'Zoals op p. 51.'],
      nodes: [
        [51, 'الإيمان', 'Geloof', 'ولا إيمان إلا بعلم', 'en geen geloof zonder kennis'],
        [51, 'العمل الصالح', 'Goede daden', 'ظاهرة وباطنة، واجبة ومستحبة', 'uiterlijk en innerlijk, verplicht en aanbevolen'],
        [51, 'التواصي بالحق', 'Aansporen tot de waarheid', 'وهو الإيمان والعمل الصالح', 'namelijk geloof en goede daden'],
        [51, 'التواصي بالصبر', 'Aansporen tot geduld', 'على الطاعة وعن المعصية وعلى الأقدار', 'bij gehoorzaamheid, tegen ongehoorzaamheid en bij het lot']
      ]
    }
  ],
  sections: [
    [51, 'كل الناس في خسر إلا…', 'Alle mensen zijn in verlies, behalve…', 'الخسران يحيط بالناس من كل جانب إلا من اتصف بهذه الصفات الأربع، فبقدر ما يفوته منها يفوته من النجاة.', 'Verlies omringt de mensen van alle kanten, behalve wie deze vier eigenschappen heeft; in de mate dat hij er een mist, mist hij redding.']
  ],
  keycards: [
    ['voorwaarde', 50, 'شرطا العمل الصالح', 'De twee voorwaarden van een goede daad', ['الإخلاص لله', 'المتابعة للرسول ﷺ'], ['oprechtheid voor Allah', 'navolging van de Boodschapper ﷺ']]
  ],
  hadith: [],
  persons: [
    ['ash-shafii', 'text', [49], 'قال: لو تدبر الناس هذه السورة لوسعتهم.', 'Zei: als de mensen over deze soera nadachten, zou zij hun genoeg zijn.']
  ],
  review: [
    ['الإنسان في خسر إلا من جمع الصفات الأربع.', 'De mens is in verlies, behalve wie de vier eigenschappen samenbrengt.'],
    ['العمل الصالح ما كان خالصا لله موافقا للسنة.', 'Een goede daad is oprecht voor Allah en volgt de Sunna.'],
    ['الخسران مراتب، مطلق ومقيد.', 'Verlies kent rangen: absoluut en gedeeltelijk.']
  ],
  quiz: [
    { type: 'mc', page: 50, q: ['لماذا كان ﴿لفي خسر﴾ أبلغ من «لخاسر»؟', 'Waarom is "in verlies" sterker dan "verliezend"?'], options: [['لأن «في» للظرفية فكأنه منغمس في الخسران', 'لأن فيه لام التأكيد فقط', 'لأنه أقصر', 'لأنه جمع'], ['"fī" geeft plaats aan: alsof hij ondergedompeld is in verlies', 'alleen vanwege de lām van nadruk', 'omdat het korter is', 'omdat het meervoud is']], answer: 0, explain: ['الخسران يحيط به من كل جانب.', 'Het verlies omringt hem van alle kanten.'] },
    { type: 'mc', page: 50, q: ['ما شرطا العمل الصالح؟', 'Wat zijn de twee voorwaarden van een goede daad?'], options: [['الإخلاص والمتابعة', 'الكثرة والدوام', 'العلم والقوة', 'الجماعة والإمام'], ['oprechtheid en navolging', 'veelheid en volharding', 'kennis en kracht', 'gemeenschap en imam']], answer: 0, explain: ['الإخلاص لله والمتابعة للرسول ﷺ.', 'Oprechtheid voor Allah en navolging van de Boodschapper ﷺ.'] },
    { type: 'tf', page: 51, q: ['الخسران عند الكتاب مرتبة واحدة.', 'Volgens het boek kent verlies één rang.'], answer: 1, explain: ['هو مراتب متفاوتة.', 'Het kent verschillende rangen.'] },
    { type: 'mc', page: 49, q: ['من قال: لو تدبر الناس هذه السورة لوسعتهم؟', 'Wie zei: als de mensen over deze soera nadachten, zou zij hun genoeg zijn?'], options: [['الشافعي', 'مالك', 'أحمد', 'ابن عباس'], ['ash-Shāfiʿī', 'Mālik', 'Aḥmad', 'Ibn ʿAbbās']], answer: 0, explain: ['ذكره الكتاب عن الشافعي.', 'Het boek noemt het van ash-Shāfiʿī.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٥٢.', 'Oefening van het boek op p. 52. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
