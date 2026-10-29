// Hoofdstukkaart bij التفسير (٤), eenheid 11: سورة الهمزة (les 13, boek p. 53–56).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md).
// Het boek noemt bij deze soera geen hadith.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '13',
  unit: 11,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '53–56',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الهمزة', 'Soera al-Humaza'],
  subtitle: ['سورة مكية، تسع آيات', 'Mekkaans, negen verzen'],
  summary: [
    'تتوعد السورة بالويل كل همزة لمزة يعيب الناس بفعله وقوله، والذي جمع مالا وعدده يحسب أن ماله أخلده، وتخبر أنه سينبذ في الحطمة، نار الله الموقدة التي تطلع على الأفئدة، مؤصدة عليهم في عمد ممددة.',
    'De soera bedreigt met "wee" ieder die mensen kleineert met daden en woorden, en wie geld verzamelt en telt in de waan dat zijn geld hem eeuwig maakt. Hij wordt geworpen in al-Ḥuṭama, het aangestoken vuur van Allah dat tot de harten doordringt, over hen gesloten met uitgestrekte zuilen.'
  ],
  map: {
    title: ['سورة الهمزة في خريطة واحدة', 'Soera al-Humaza in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الهمزة', 'Soera al-Humaza'], ['الوحدة الحادية عشرة', 'Eenheid 11']],
    nodes: [
      { label: ['الهماز اللماز', 'Wie kleineert'], sub: ['الآية ١', 'vers 1'], page: 53, children: [['الهمز بالفعل', 'hamz: met daden'], ['اللمز بالقول', 'lamz: met woorden']] },
      { label: ['جامع المال', 'De geldverzamelaar'], sub: ['الآيتان ٢–٣', 'vers 2–3'], page: 54, children: [['جمع مالا وعدده', 'verzamelt en telt geld'], ['يحسب أن ماله أخلده', 'denkt dat zijn geld hem eeuwig maakt']] },
      { label: ['الحطمة', 'Al-Ḥuṭama'], sub: ['الآيات ٤–٩', 'vers 4–9'], page: 54, children: [['نار الله الموقدة', 'het aangestoken vuur van Allah'], ['تطلع على الأفئدة', 'dringt tot de harten door'], ['مؤصدة في عمد ممددة', 'gesloten, met uitgestrekte zuilen']] }
    ]
  },
  points: [
    [53, '«كل» من صيغ العموم، فالويل لكل من اتصف بهذه الصفة.', '"Kull" (ieder) is een vorm van algemeenheid: het "wee" geldt voor ieder met deze eigenschap.'],
    [53, 'سئل ابن عباس عن الذين بدأهم الله بالويل فقال: هم المشاؤون بالنميمة، المفرقون بين الأحبة، الباغون أكبر العيب.', 'Ibn ʿAbbās werd gevraagd wie Allah met "wee" aansprak; hij zei: wie roddels rondbrengen, geliefden scheiden en de grootste fout zoeken.'],
    [54, '﴿وعدده﴾ صيغة مبالغة: يكثر عده لشدة تعلقه بالمال، وهو يعلم أنه لم يأخذ منه شيئا ولم يزد فيه.', '"En hij telde het" is een intensiteitsvorm: hij telt het steeds weer door zijn verslaafdheid aan geld, terwijl hij weet dat er niets af of bij kwam.'],
    [54, 'النبذ الطرح والإلقاء، وأكثر ما يستعمل في إلقاء ما يكره، وفيه تحقير لأهل النار.', 'Nabdh is werpen en wegwerpen, meestal gebruikt voor iets verafschuwds; het drukt minachting uit voor de bewoners van het Vuur.'],
    [54, 'أضيفت النار إلى الله ﴿نار الله﴾ للتهويل: نار خلقها من يقدر على خلق العظائم.', 'Het vuur wordt aan Allah toegevoegd, "het vuur van Allah", om ontzag in te boezemen: een vuur geschapen door Wie grote dingen kan scheppen.']
  ],
  terms: [
    ['ويل', 'wayl', 53, 'وعيد وهلاك وعذاب شديد.', 'Dreiging, verderf en zware straf.'],
    ['الهماز', 'al-hammāz', 53, 'الذي يعيب الناس بالفعل كلي الوجه والإشارة.', 'Wie mensen kleineert met daden, zoals een verdraaid gezicht of een gebaar.'],
    ['اللماز', 'al-lammāz', 53, 'الذي يعيب الناس بالقول.', 'Wie mensen kleineert met woorden.'],
    ['الحطمة', 'al-ḥuṭama', 54, 'اسم من أسماء النار، لأنها تحطم ما يلقى فيها.', 'Een naam van het Vuur, omdat het alles verbrijzelt wat erin geworpen wordt.'],
    ['مؤصدة', 'muʾṣada', 54, 'مغلقة مطبقة، من أوصد الباب.', 'Gesloten en vergrendeld, van awṣada l-bāb: de deur sluiten.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['صيغة «فعلة» للتكثير', 'Het patroon fuʿala voor herhaling'],
      intro: ['كما في الصفحة ٥٥.', 'Zoals op p. 55.'],
      nodes: [
        [55, 'همزة', 'Humaza', 'كثير الهمز حتى صار عادة', 'die zo vaak kleineert dat het een gewoonte werd'],
        [55, 'لمزة', 'Lumaza', 'كثير اللمز', 'die vaak met woorden kleineert'],
        [55, 'ضحكة', 'Ḍuḥaka', 'كثير الضحك', 'die veel lacht'],
        [55, 'لعنة', 'Luʿana', 'كثير اللعن', 'die veel vervloekt']
      ]
    }
  ],
  sections: [
    [54, 'نبذهم كالحصى', 'Weggeworpen als kiezels', 'قال صاحب الكشاف في ﴿فنبذناهم في اليم﴾: شبههم استحقارا لهم بحصيات أخذهن آخذ في كفه فطرحهن في البحر.', 'De auteur van al-Kashshāf zei over "Wij wierpen hen in de zee": Hij vergeleek hen uit minachting met kiezels die iemand in zijn hand neemt en in de zee gooit.'],
    [55, 'إيصاد جهنم', 'Het sluiten van Jahannam', 'قال ابن عاشور: معنى الإيصاد دوام العذاب واليأس من الخروج، كالمساجين الذين أغلق عليهم باب السجن، وعذاب جهنم أشد مما تبلغه العقول.', 'Ibn ʿĀshūr: het sluiten betekent dat de straf voortduurt en dat er geen hoop is te ontsnappen, zoals gevangenen achter een gesloten deur; de straf van Jahannam is zwaarder dan het verstand zich kan voorstellen.'],
    [55, 'التحذير من هذه الصفات', 'Waarschuwing tegen deze eigenschappen', 'لم يذكر الله هذه الصفات لنتلوها فقط، بل لنحذر عيب الناس بالقول أو الفعل، والشح بالمال كأن الإنسان خلق للمال.', 'Allah noemde deze eigenschappen niet alleen om ze te reciteren, maar om ons te waarschuwen tegen het kleineren van mensen met woorden of daden en tegen gierigheid, alsof de mens voor geld geschapen is.']
  ],
  keycards: [
    ['onderscheid', 53, 'الهمز واللمز', 'Hamz en lamz', ['الهمز: العيب بالفعل كلي الوجه والإشارة', 'اللمز: العيب بالقول، ومنه ﴿ومنهم من يلمزك في الصدقات﴾'], ['hamz: kleineren met daden, zoals een verdraaid gezicht of gebaar', 'lamz: kleineren met woorden, zoals in "sommigen bekritiseren je over de liefdadigheid"']]
  ],
  hadith: [],
  persons: [
    ['ibn-abbas', 'text', [53], 'بين أن الهمازين المشاؤون بالنميمة المفرقون بين الأحبة.', 'Legde uit dat zij het zijn die roddels rondbrengen en geliefden scheiden.'],
    ['az-zamakhshari', 'text', [54], 'صاحب الكشاف، شبه النبذ بطرح الحصيات في البحر.', 'De auteur van al-Kashshāf; vergeleek het werpen met kiezels die in de zee gegooid worden.'],
    ['ibn-ashur', 'text', [55], 'فسر الإيصاد بدوام العذاب واليأس من الخروج.', 'Verklaarde het sluiten als blijvende straf en hopeloosheid te ontsnappen.']
  ],
  review: [
    ['الهماز يعيب بالفعل، واللماز يعيب بالقول.', 'De hammāz kleineert met daden, de lammāz met woorden.'],
    ['من حسب أن ماله يخلده فقد ضل.', 'Wie denkt dat zijn geld hem eeuwig maakt, dwaalt.'],
    ['الحطمة نار الله الموقدة تطلع على الأفئدة.', 'Al-Ḥuṭama is het aangestoken vuur van Allah dat tot de harten doordringt.']
  ],
  quiz: [
    { type: 'mc', page: 53, q: ['من الهماز؟', 'Wie is de hammāz?'], options: [['من يعيب الناس بالفعل', 'من يعيب الناس بالقول', 'من يجمع المال', 'من يكثر الضحك'], ['wie mensen kleineert met daden', 'wie mensen kleineert met woorden', 'wie geld verzamelt', 'wie veel lacht']], answer: 0, explain: ['كلي الوجه والإشارة، واللماز بالقول.', 'Zoals een verdraaid gezicht of gebaar; de lammāz doet het met woorden.'] },
    { type: 'mc', page: 54, q: ['لماذا سميت الحطمة بهذا الاسم؟', 'Waarom heet al-Ḥuṭama zo?'], options: [['لأنها تحطم ما يلقى فيها', 'لأنها مظلمة', 'لأنها في أسفل الأرض', 'لأن حطبها الناس'], ['omdat ze verbrijzelt wat erin geworpen wordt', 'omdat ze donker is', 'omdat ze diep onder de aarde ligt', 'omdat mensen haar brandstof zijn']], answer: 0, explain: ['تحطم وتكسر كل ما يلقى فيها.', 'Zij verbrijzelt en vermorzelt alles wat erin komt.'] },
    { type: 'tf', page: 54, q: ['أضيفت النار إلى الله للتهويل والتعظيم.', 'Het vuur wordt aan Allah toegevoegd om ontzag in te boezemen.'], answer: 0, explain: ['نار خلقها من يقدر على خلق العظائم.', 'Een vuur geschapen door Wie grote dingen kan scheppen.'] },
    { type: 'mc', page: 54, q: ['ما معنى ﴿مؤصدة﴾؟', 'Wat betekent muʾṣada?'], options: [['مغلقة مطبقة', 'مشتعلة', 'واسعة', 'عميقة'], ['gesloten en vergrendeld', 'brandend', 'wijd', 'diep']], answer: 0, explain: ['من أوصد الباب إذا أغلقه.', 'Van awṣada l-bāb: de deur sluiten.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٥٦.', 'Oefening van het boek op p. 56. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
