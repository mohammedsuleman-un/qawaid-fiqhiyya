// Hoofdstukkaart bij التفسير (٤), eenheid 1: سورة الشرح (les 1, boek p. 9–12).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. «لن يغلب عسر يسرين» staat in het boek zonder bron en
// is daarom alleen als uitleg opgenomen, niet in het hadith-tabblad; de dichtregel op p. 10 staat
// er zonder naam.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '1',
  unit: 1,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '9–12',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الشرح', 'Soera ash-Sharḥ'],
  subtitle: ['سورة مكية، ثماني آيات', 'Mekkaans, acht verzen'],
  summary: [
    'تبدأ السورة بنعم الله العظيمة على نبيه ﷺ: شرح صدره، ووضع وزره، ورفع ذكره، ثم تبشره بأن مع العسر يسرا، وتأمره إذا فرغ من شغله أن ينصب في الدعاء ويرغب إلى ربه.',
    'De soera begint met Allahs grote gunsten aan Zijn Profeet ﷺ: het verruimen van zijn borst, het wegnemen van zijn last en het verheffen van zijn vermelding. Daarna belooft zij dat met de moeilijkheid gemak komt, en beveelt zij hem zich na zijn bezigheden in te spannen in smeekbede en naar zijn Heer te verlangen.'
  ],
  map: {
    title: ['سورة الشرح في خريطة واحدة', 'Soera ash-Sharḥ in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الشرح', 'Soera ash-Sharḥ'], ['الوحدة الأولى', 'Eenheid 1']],
    nodes: [
      { label: ['نعم الله على نبيه ﷺ', 'Allahs gunsten aan de Profeet ﷺ'], sub: ['الآيات ١–٤', 'vers 1–4'], page: 9, children: [['شرح الصدر', 'de borst verruimd'], ['وضع الوزر', 'de last weggenomen'], ['رفع الذكر', 'de vermelding verheven']] },
      { label: ['مع العسر يسرا', 'Met moeilijkheid komt gemak'], sub: ['الآيتان ٥–٦', 'vers 5–6'], page: 10, children: [['التكرار للتأكيد', 'herhaald ter bevestiging'], ['عسر واحد ويسران', 'één moeilijkheid, twee gemakken']] },
      { label: ['النصب والرغبة', 'Inspanning en verlangen'], sub: ['الآيتان ٧–٨', 'vers 7–8'], page: 10, children: [['اجتهد في الدعاء إذا فرغت', 'span je in in smeekbede als je klaar bent'], ['ارغب إلى ربك', 'verlang naar je Heer']] }
    ]
  },
  points: [
    [9, '﴿ألم نشرح لك صدرك﴾: وسعناه ونورناه للهدى والإيمان ومعرفة الحق، كما قال: ﴿فمن يرد الله أن يهديه يشرح صدره للإسلام﴾.', '"Hebben Wij je borst niet verruimd?": Wij maakten haar ruim en verlicht voor de leiding, het geloof en de kennis van de waarheid, zoals in "Wie Allah wil leiden, verruimt Hij de borst voor de islam".'],
    [10, '﴿ورفعنا لك ذكرك﴾: لا يذكر الله في أذان ولا تشهد ولا خطبة إلا ذكر معه رسوله ﷺ.', '"En Wij verhieven je vermelding": in geen adhān, tashahhud of preek wordt Allah genoemd zonder dat Zijn Boodschapper ﷺ met Hem genoemd wordt.'],
    [10, '﴿فإن مع العسر يسرا﴾ ثم ﴿إن مع العسر يسرا﴾: كررت تأكيدا للوعد وتعظيما للرجاء.', '"Met de moeilijkheid komt gemak" staat er twee keer: ter bevestiging van de belofte en vergroting van de hoop.'],
    [10, '﴿فإذا فرغت فانصب﴾: إذا فرغت من أشغالك فاجتهد في الدعاء، ولا تكن ممن إذا فرغوا لعبوا.', '"Als je klaar bent, span je dan in": als je je bezigheden af hebt, doe dan moeite in smeekbede; wees niet als wie gaat spelen zodra hij vrij is.'],
    [11, 'قال ابن عثيمين: يقع الذنب من النبي ﷺ لكنه يستغفر، أما الكذب والخيانة والزنا ورذائل الأخلاق فلا تقع من الأنبياء.', 'Ibn ʿUthaymīn: een zonde kan de Profeet ﷺ overkomen, maar hij vraagt vergeving; liegen, verraad, ontucht en lage zeden overkomen de profeten niet.']
  ],
  terms: [
    ['شرح الصدر', 'sharḥ aṣ-ṣadr', 9, 'توسيعه وتنويره للهدى والإيمان.', 'Het verruimen en verlichten van de borst voor leiding en geloof.'],
    ['الوزر', 'al-wizr', 9, 'الذنب والحمل الثقيل.', 'De zonde, de zware last.'],
    ['أنقض ظهرك', 'anqaḍa ẓahrak', 9, 'أثقله وأتعبه.', 'Die je rug zwaar belastte en vermoeide.'],
    ['فانصب', 'fa-nṣab', 10, 'فاجتهد في الدعاء والعبادة.', 'Span je in in smeekbede en aanbidding.'],
    ['فارغب', 'fa-rghab', 10, 'اجعل رغبتك إلى ربك في إجابة دعائك.', 'Richt je verlangen op je Heer, dat Hij je smeekbede verhoort.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['قاعدة العرب في تكرار الاسم', 'De Arabische regel bij een herhaald naamwoord'],
      intro: ['ذكرها الكتاب في «للاطلاع» ص ١١.', 'Het boek noemt haar in een kader "ter informatie" op p. 11.'],
      nodes: [
        [11, 'معرفة ثم معرفة', 'Bepaald, dan bepaald', 'الثاني هو الأول: ﴿العسر﴾ عسر واحد', 'het tweede is het eerste: al-ʿusr is één moeilijkheid'],
        [11, 'نكرة ثم نكرة', 'Onbepaald, dan onbepaald', 'الثاني غير الأول: ﴿يسرا﴾ يسران', 'het worden er twee: yusran is twee gemakken'],
        [11, 'نكرة ثم معرفة', 'Onbepaald, dan bepaald', 'الثاني هو الأول', 'het tweede is het eerste']
      ]
    }
  ],
  sections: [
    [10, 'الإنسان والذنوب', 'De mens en zijn zonden', 'أتعب الوزر النبي ﷺ حتى أنقض ظهره، وكثير من الناس لا يبالون بما يحملون من الذنوب لضعف الإيمان وكثرة الغفلة.', 'De last vermoeide de Profeet ﷺ tot zijn rug zwaar werd, terwijl veel mensen niets geven om de zonden die zij dragen, door zwak geloof en veel achteloosheid.'],
    [11, 'بشرى عظيمة', 'Een grote blijde boodschap', 'كلما وجد العسر وجد معه اليسر، كما قال تعالى: ﴿سيجعل الله بعد عسر يسرا﴾.', 'Telkens als er moeilijkheid is, komt er gemak mee, zoals Allah zegt: "Allah zal na moeilijkheid gemak geven".']
  ],
  keycards: [
    ['onderscheid', 11, 'ما يقع من الأنبياء وما لا يقع', 'Wat profeten kan overkomen en wat niet', ['قد يقع الذنب ثم يكون الاستغفار', 'لا يقع الكذب ولا الخيانة ولا الزنا ولا رذائل الأخلاق، لأنها تنافي أصل الرسالة'], ['een zonde kan voorkomen, gevolgd door vergeving vragen', 'liegen, verraad, ontucht en lage zeden komen niet voor: zij strijden met de basis van het boodschapperschap']]
  ],
  hadith: [
    { text: 'كل بني آدم خطاء، وخير الخطائين التوابون', takhrij: 'أخرجه الترمذي وابن ماجه، وحسنه الألباني', takhrijNl: 'at-Tirmidhī en Ibn Māja; ḥasan volgens al-Albānī', note: 'استدل به ابن عثيمين على أن الشأن في الاستغفار لا في عدم وقوع الذنب.', nlNote: 'Ibn ʿUthaymīn gebruikt het om te tonen dat het gaat om vergeving vragen, niet om nooit zondigen.', nl: 'Alle kinderen van Ādam begaan fouten, en de besten van wie fouten begaan zijn zij die berouw tonen', pages: [11] }
  ],
  persons: [
    ['ibn-uthaymin', 'text', [11], 'بين ما يقع من الأنبياء من الذنب وما لا يقع.', 'Legde uit welke zonde profeten kan overkomen en welke niet.'],
    ['at-tirmidhi', 'takhrij', [11], 'روى حديث «كل بني آدم خطاء».', 'Overleverde de hadith "Alle kinderen van Ādam begaan fouten".'],
    ['ibn-maja', 'takhrij', [11], 'روى حديث «كل بني آدم خطاء».', 'Overleverde dezelfde hadith.'],
    ['al-albani', 'takhrij', [11], 'حسن الحديث.', 'Verklaarde de hadith ḥasan.']
  ],
  review: [
    ['من نعم الله على نبيه ﷺ: شرح الصدر، ووضع الوزر، ورفع الذكر.', 'Allahs gunsten aan de Profeet ﷺ: de borst verruimd, de last weggenomen, de vermelding verheven.'],
    ['مع العسر الواحد يسران.', 'Met de ene moeilijkheid komen twee gemakken.'],
    ['إذا فرغ المسلم من شغله اجتهد في الدعاء ولم يلعب.', 'Als de moslim klaar is met zijn werk, spant hij zich in in smeekbede en gaat hij niet spelen.']
  ],
  quiz: [
    { type: 'mc', page: 9, q: ['ما معنى ﴿أنقض ظهرك﴾؟', 'Wat betekent "die je rug zwaar belastte" (anqaḍa ẓahrak)?'], options: [['أثقله وأتعبه', 'كسره', 'قواه', 'ستره'], ['belastte en vermoeide hem', 'brak hem', 'versterkte hem', 'bedekte hem']], answer: 0, explain: ['أي الوزر الذي أثقل ظهرك وأتعبه.', 'De last die je rug zwaar maakte en vermoeide.'] },
    { type: 'mc', page: 11, q: ['كم يسرا مع العسر في السورة على قاعدة العرب؟', 'Hoeveel gemakken komen er volgens de Arabische regel met de moeilijkheid?'], options: [['يسران', 'يسر واحد', 'ثلاثة', 'لا عدد'], ['twee', 'één', 'drie', 'geen getal']], answer: 0, explain: ['﴿العسر﴾ معرفة كررت فهو واحد، و﴿يسرا﴾ نكرة كررت فهما اثنان.', 'Al-ʿusr is bepaald en herhaald: één; yusran is onbepaald en herhaald: twee.'] },
    { type: 'tf', page: 11, q: ['يجوز عند ابن عثيمين أن يقع الكذب من الأنبياء.', 'Volgens Ibn ʿUthaymīn kan liegen de profeten overkomen.'], answer: 1, explain: ['الكذب والخيانة ممتنعة على الأنبياء لأنها تنافي أصل الرسالة.', 'Liegen en verraad zijn onmogelijk voor profeten, want ze strijden met het boodschapperschap.'] },
    { type: 'mc', page: 10, q: ['ما معنى ﴿فانصب﴾؟', 'Wat betekent "fa-nṣab"?'], options: [['فاجتهد في الدعاء', 'فاسترح', 'فانتصب قائما', 'فارجع إلى أهلك'], ['span je in in smeekbede', 'rust dan uit', 'ga rechtop staan', 'keer terug naar je familie']], answer: 0, explain: ['إذا فرغت من أشغالك فاجتهد في دعاء ربك.', 'Als je klaar bent, doe moeite in smeekbede tot je Heer.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ١٢.', 'Oefening van het boek op p. 12. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
