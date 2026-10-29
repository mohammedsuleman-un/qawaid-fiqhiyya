// Hoofdstukkaart bij التفسير (٤), eenheid 7: سورة العاديات (les 9, boek p. 39–41).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md).
// De overlevering dat de Profeet ﷺ 's ochtends aanviel en naar de adhān luisterde (p. 40) staat
// in het boek zonder bron en is daarom niet in het hadith-tabblad opgenomen.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '9',
  unit: 7,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '39–41',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة العاديات', 'Soera al-ʿĀdiyāt'],
  subtitle: ['سورة مكية، إحدى عشرة آية', 'Mekkaans, elf verzen'],
  summary: [
    'يقسم الله بالخيل العادية في سبيله، الموريات قدحا، المغيرات صبحا، على أن الإنسان لربه لكنود، وأنه على ذلك شهيد، وأنه لحب المال شديد، ثم يذكره ببعثرة القبور وتحصيل ما في الصدور.',
    'Allah zweert bij de paarden die op Zijn weg rennen, vonken slaan en in de ochtend aanvallen, dat de mens ondankbaar is tegenover zijn Heer, dat hij daar zelf getuige van is en dat zijn liefde voor bezit hevig is. Daarna herinnert Hij hem aan het omwoelen van de graven en het blootleggen van wat in de harten is.'
  ],
  map: {
    title: ['سورة العاديات في خريطة واحدة', 'Soera al-ʿĀdiyāt in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة العاديات', 'Soera al-ʿĀdiyāt'], ['الوحدة السابعة', 'Eenheid 7']],
    nodes: [
      { label: ['القسم بالخيل', 'De eed bij de paarden'], sub: ['الآيات ١–٥', 'vers 1–5'], page: 39, children: [['العاديات ضبحا', 'rennend en snuivend'], ['الموريات قدحا', 'vonken slaand'], ['المغيرات صبحا', 'aanvallend in de ochtend'], ['أثرن نقعا ووسطن جمعا', 'stof opwaaiend, de menigte in']] },
      { label: ['حال الإنسان', 'De toestand van de mens'], sub: ['الآيات ٦–٨', 'vers 6–8'], page: 40, children: [['لربه لكنود', 'ondankbaar tegenover zijn Heer'], ['على ذلك لشهيد', 'hij getuigt er zelf van'], ['لحب الخير لشديد', 'hevig in liefde voor bezit']] },
      { label: ['التذكير بالبعث', 'Herinnering aan de opwekking'], sub: ['الآيات ٩–١١', 'vers 9–11'], page: 40, children: [['بعثر ما في القبور', 'de graven worden omgewoeld'], ['حصل ما في الصدور', 'wat in de harten is, wordt blootgelegd'], ['إن ربهم بهم يومئذ لخبير', 'hun Heer kent hen die Dag']] }
    ]
  },
  points: [
    [39, 'الضبح صوت يخرجه الفرس من صدره إذا عدا.', 'Ḍabḥ is het geluid dat het paard uit zijn borst geeft als het rent.'],
    [39, 'الإغارة في الصبح أفضل الأوقات، لأن العدو يكون غافلا نائما.', 'Aanvallen in de ochtend is de beste tijd, omdat de vijand dan achteloos is en slaapt.'],
    [40, 'المقسم عليه: ﴿إن الإنسان لربه لكنود﴾ أي كفور جحود لنعم ربه.', 'Waarop gezworen wordt: "De mens is ondankbaar tegenover zijn Heer", hij ontkent de gunsten van zijn Heer.'],
    [40, '﴿وإنه لحب الخير لشديد﴾: الخير هنا المال، وحبه له وحرصه وبخله شديد.', '"En hij is hevig in de liefde voor het goede": het goede is hier bezit; zijn liefde ervoor, zijn begerigheid en gierigheid zijn hevig.'],
    [40, 'يقسم الله بما شاء من مخلوقاته، كما أقسم بحياة نبيه ﷺ: ﴿لعمرك إنهم لفي سكرتهم يعمهون﴾.', 'Allah zweert bij wat Hij wil van Zijn schepselen, zoals Hij zwoer bij het leven van Zijn Profeet ﷺ: "Bij je leven, zij dwalen blind rond in hun roes".']
  ],
  terms: [
    ['الضبح', 'aḍ-ḍabḥ', 39, 'صوت الفرس من صدره إذا عدا.', 'Het geluid van een rennend paard uit zijn borst.'],
    ['الموريات قدحا', 'al-mūriyāt qadḥan', 39, 'الخيل تضرب الحجارة بحوافرها فتقدح النار.', 'Paarden die met hun hoeven stenen raken en vonken slaan.'],
    ['النقع', 'an-naqʿ', 40, 'الغبار.', 'Het stof.'],
    ['كنود', 'kanūd', 40, 'كفور جحود للنعم.', 'Ondankbaar, ontkent de gunsten.'],
    ['بعثر', 'buʿthira', 40, 'أثير وأخرج ما في القبور.', 'Omgewoeld en uitgehaald: de doden uit de graven.'],
    ['حصل', 'ḥuṣṣila', 40, 'أبرز وكشف ما في الصدور من النيات.', 'Blootgelegd wat in de harten is aan intenties.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الكنود والشكور', 'Ondankbaar en dankbaar'],
      intro: ['كما في الصفحة ٤١.', 'Zoals op p. 41.'],
      columns: [['صفته', 'Kenmerk']],
      rows: [
        { label: ['الكنود', 'Al-kanūd'], cells: [['تنسيه سيئة واحدة حسنات كثيرة', 'één slechte daad doet hem vele goede vergeten']] },
        { label: ['الشكور', 'Ash-shakūr'], cells: [['تنسيه حسنة واحدة سيئات كثيرة', 'één goede daad doet hem vele slechte vergeten']] }
      ],
      page: 41
    }
  ],
  sections: [
    [41, 'العبرة بما في القلوب', 'Het gaat om wat in het hart is', 'جعل الله ما في الصدور هو الأصل، كما قال: ﴿يوم تبلى السرائر﴾؛ في الدنيا يعامل الناس بالظاهر، وفي الآخرة يحكم على الأعمال بما في القلوب، فعلينا العناية بقلوبنا.', 'Allah maakte wat in de harten is tot de hoofdzaak, zoals in "op de Dag dat de geheimen onthuld worden". In deze wereld worden mensen behandeld naar het uiterlijke, in het hiernamaals worden daden beoordeeld naar wat in het hart is; daarom moeten we zorg dragen voor ons hart.']
  ],
  keycards: [
    ['opsomming', 39, 'أوصاف الخيل في القسم', 'De paarden in de eed', ['العاديات ضبحا', 'الموريات قدحا', 'المغيرات صبحا', 'فأثرن به نقعا', 'فوسطن به جمعا'], ['rennend en snuivend', 'vonken slaand', 'aanvallend in de ochtend', 'stof opwaaiend', 'de menigte in dringend']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['أقسم الله بالخيل المجاهدة في سبيله.', 'Allah zweert bij de paarden die op Zijn weg strijden.'],
    ['الإنسان لربه كنود، شديد الحب للمال.', 'De mens is ondankbaar tegenover zijn Heer en hevig in zijn liefde voor bezit.'],
    ['يحكم في الآخرة بما في القلوب، فاعتن بقلبك.', 'In het hiernamaals wordt geoordeeld naar wat in het hart is; zorg dus voor je hart.']
  ],
  quiz: [
    { type: 'mc', page: 39, q: ['ما الضبح؟', 'Wat is aḍ-ḍabḥ?'], options: [['صوت الفرس من صدره إذا عدا', 'الغبار', 'شرر الحوافر', 'وقت الصبح'], ['het geluid van een rennend paard uit zijn borst', 'het stof', 'vonken van de hoeven', 'de ochtend']], answer: 0, explain: ['الضبح صوت يخرجه الفرس من صدره.', 'Het geluid uit de borst van het paard.'] },
    { type: 'mc', page: 40, q: ['ما المقسم عليه في السورة؟', 'Waarop wordt in de soera gezworen?'], options: [['أن الإنسان لربه لكنود', 'أن الساعة آتية', 'أن الخيل خير المال', 'أن القرآن حق'], ['dat de mens ondankbaar is tegenover zijn Heer', 'dat het Uur komt', 'dat paarden het beste bezit zijn', 'dat de Koran waar is']], answer: 0, explain: ['﴿إن الإنسان لربه لكنود﴾ هو جواب القسم.', '"De mens is ondankbaar tegenover zijn Heer" is het antwoord van de eed.'] },
    { type: 'tf', page: 41, q: ['الشكور من تنسيه حسنة واحدة سيئات كثيرة.', 'De dankbare is wie door één goede daad vele slechte vergeet.'], answer: 0, explain: ['والكنود عكسه.', 'De ondankbare is het omgekeerde.'] },
    { type: 'mc', page: 40, q: ['ما المراد بالخير في ﴿لحب الخير لشديد﴾؟', 'Wat is "het goede" in "hevig in de liefde voor het goede"?'], options: [['المال', 'العلم', 'الصلاة', 'الجهاد'], ['bezit', 'kennis', 'het gebed', 'de strijd']], answer: 0, explain: ['شديد الحب للمال والحرص عليه.', 'Hevig in liefde voor en begerigheid naar bezit.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٤١.', 'Oefening van het boek op p. 41. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
