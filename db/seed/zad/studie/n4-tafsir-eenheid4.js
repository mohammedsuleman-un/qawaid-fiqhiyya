// Hoofdstukkaart bij التفسير (٤), eenheid 4: سورة القدر (les 5, boek p. 23–26).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '5',
  unit: 4,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '23–26',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة القدر', 'Soera al-Qadr'],
  subtitle: ['سورة مكية، خمس آيات', 'Mekkaans, vijf verzen'],
  summary: [
    'تخبر السورة أن الله أنزل القرآن في ليلة القدر، وأنها خير من ألف شهر، تتنزل فيها الملائكة والروح بإذن ربهم من كل أمر، وهي سلام حتى مطلع الفجر.',
    'De soera vertelt dat Allah de Koran neerzond in Laylat al-Qadr, dat die nacht beter is dan duizend maanden, dat de engelen en de Geest er neerdalen met toestemming van hun Heer voor elke zaak, en dat zij vrede is tot het aanbreken van de dageraad.'
  ],
  map: {
    title: ['سورة القدر في خريطة واحدة', 'Soera al-Qadr in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة القدر', 'Soera al-Qadr'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['إنزال القرآن', 'Het neerzenden van de Koran'], sub: ['الآية ١', 'vers 1'], page: 24, children: [['جملة إلى السماء الدنيا', 'in één keer naar de onderste hemel'], ['ثم منجما في ٢٣ سنة', 'daarna geleidelijk in 23 jaar']] },
      { label: ['فضل الليلة', 'De waarde van de nacht'], sub: ['الآيتان ٢–٣', 'vers 2–3'], page: 24, children: [['وما أدراك: تعظيم', '"wat deed je weten": verheerlijking'], ['خير من ألف شهر', 'beter dan duizend maanden']] },
      { label: ['تنزل الملائكة والسلام', 'Neerdalende engelen en vrede'], sub: ['الآيتان ٤–٥', 'vers 4–5'], page: 24, children: [['الروح: جبريل', 'de Geest: Jibrīl'], ['سلام حتى مطلع الفجر', 'vrede tot de dageraad']] }
    ]
  },
  points: [
    [24, 'القدر: الشرف والعظمة، وقيل: التقدير، والصحيح أن الليلة تجمع المعنيين.', 'Al-qadr is eer en grootheid; ook gezegd: bepaling. Het juiste is dat de nacht beide betekenissen omvat.'],
    [24, 'أنزل الله القرآن جملة واحدة في ليلة القدر من اللوح المحفوظ إلى السماء الدنيا، ثم نزل على النبي ﷺ مفرقا بحسب الحوادث.', 'Allah zond de Koran in één keer neer in Laylat al-Qadr, van al-Lawḥ al-Maḥfūẓ naar de onderste hemel; daarna kwam hij geleidelijk op de Profeet ﷺ neer, naargelang de gebeurtenissen.'],
    [24, 'كان بين أول ما نزل وآخره ثلاث وعشرون سنة، وكان ذلك في شهر رمضان.', 'Tussen de eerste en de laatste openbaring lagen drieëntwintig jaar; het begon in de maand Ramaḍān.'],
    [24, '﴿خير من ألف شهر﴾: العمل فيها خير من العمل في ألف شهر ليس فيها ليلة القدر.', '"Beter dan duizend maanden": daden in die nacht zijn beter dan daden in duizend maanden zonder Laylat al-Qadr.'],
    [25, 'يعبر الله عن نفسه بصيغة العظمة ﴿إنا أنزلناه﴾، وبالإفراد كما في ﴿إنني أنا الله﴾: فالجمع للصفات والإفراد للوحدانية.', 'Allah spreekt over Zichzelf in de vorm van grootheid, "Wij zonden hem neer", en ook in het enkelvoud, "Ik ben Allah": het meervoud vanwege de eigenschappen, het enkelvoud vanwege de eenheid.']
  ],
  terms: [
    ['القدر', 'al-qadr', 24, 'الشرف والعظمة، والتقدير.', 'Eer en grootheid, en bepaling.'],
    ['الروح', 'ar-rūḥ', 24, 'جبريل عليه السلام.', 'Jibrīl, vrede zij met hem.'],
    ['من كل أمر', 'min kulli amr', 24, 'لكل أمر قضاه الله في تلك السنة.', 'Voor elke zaak die Allah voor dat jaar beslist.'],
    ['سلام', 'salām', 24, 'خير كلها لا شر فيها.', 'Geheel goed, zonder kwaad.'],
    ['مطلع الفجر', 'maṭlaʿ al-fajr', 24, 'طلوعه.', 'Het aanbreken van de dageraad.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['إذن الله نوعان', 'Allahs toestemming kent twee soorten'],
      intro: ['من «للاطلاع» ص ٢٥.', 'Uit het kader "ter informatie" op p. 25.'],
      columns: [['المعنى', 'Betekenis'], ['مثاله', 'Voorbeeld'], ['وقوعه', 'Of het gebeurt']],
      rows: [
        { label: ['الإذن الشرعي', 'Religieuze toestemming'], cells: [['ما أباحه الله شرعا', 'wat Allah religieus toestaat'], ['﴿شرعوا لهم من الدين ما لم يأذن به الله﴾', '"die hun een religie voorschreven waartoe Allah geen toestemming gaf"'], ['قد يقع من العباد وقد لا يقع', 'kan door de dienaren gedaan worden of niet']] },
        { label: ['الإذن الكوني القدري', 'Toestemming in schepping en lot'], cells: [['ما شاءه الله خلقا وتقديرا', 'wat Allah in de schepping wil en voorbeschikt'], ['﴿تنزل الملائكة والروح فيها بإذن ربهم﴾', '"de engelen en de Geest dalen er neer met toestemming van hun Heer"'], ['يقع لا محالة', 'gebeurt onvermijdelijk']] }
      ],
      page: 25
    }
  ],
  sections: [
    [25, 'نزول الملائكة رحمة وبركة', 'Neerdalende engelen: genade en zegen', 'نزول الملائكة في الأرض عنوان على الرحمة والبركة، والمكان الذي لا تدخله الملائكة قد يحرم الخير، كالبيت الذي فيه صورة ذات روح إلا أن تكون ممتهنة.', 'Het neerdalen van engelen op aarde is een teken van genade en zegen. Een plaats waar de engelen niet komen, kan het goede missen, zoals een huis met een afbeelding van een bezield wezen, tenzij die vernederd is.'],
    [25, 'أهل البدع والإذن', 'Vernieuwers en toestemming', 'فعل أهل البدع ما لم يأذن الله به شرعا، وإن أذن به كونا وقدرا.', 'De vernieuwers deden wat Allah religieus niet toestond, ook al liet Hij het in de voorbeschikking toe.']
  ],
  keycards: [
    ['onderscheid', 24, 'نزول القرآن جملة ومفرقا', 'De Koran in één keer en geleidelijk', ['جملة واحدة في ليلة القدر إلى السماء الدنيا', 'ثم منجما على النبي ﷺ بحسب الحاجة: ﴿كذلك لنثبت به فؤادك ورتلناه ترتيلا﴾'], ['in één keer in Laylat al-Qadr naar de onderste hemel', 'daarna geleidelijk op de Profeet ﷺ naar behoefte: "Zo versterken Wij er je hart mee"']]
  ],
  hadith: [
    { text: 'من قام ليلة القدر إيمانا واحتسابا، غفر له ما تقدم من ذنبه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie in Laylat al-Qadr in gebed staat uit geloof en in de hoop op beloning, krijgt zijn eerdere zonden vergeven', pages: [23] }
  ],
  persons: [
    ['abu-hurayra', 'text', [23], 'روى حديث فضل قيام ليلة القدر.', 'Overleverde de hadith over de deugd van het nachtgebed in Laylat al-Qadr.'],
    ['al-bukhari', 'takhrij', [23], 'روى حديث قيام ليلة القدر.', 'Overleverde deze hadith.'],
    ['muslim', 'takhrij', [23], 'روى حديث قيام ليلة القدر.', 'Overleverde deze hadith.']
  ],
  review: [
    ['أنزل القرآن جملة في ليلة القدر ثم نزل مفرقا في ثلاث وعشرين سنة.', 'De Koran kwam in één keer neer in Laylat al-Qadr en daarna geleidelijk in drieëntwintig jaar.'],
    ['ليلة القدر خير من ألف شهر.', 'Laylat al-Qadr is beter dan duizend maanden.'],
    ['إذن الله نوعان: شرعي، وكوني قدري.', 'Allahs toestemming kent twee soorten: religieus, en in schepping en lot.']
  ],
  quiz: [
    { type: 'mc', page: 24, q: ['من المراد بـ«الروح» في السورة؟', 'Wie is "de Geest" in de soera?'], options: [['جبريل', 'روح الإنسان', 'القرآن', 'ملك الموت'], ['Jibrīl', 'de ziel van de mens', 'de Koran', 'de engel van de dood']], answer: 0, explain: ['الروح جبريل عليه السلام.', 'De Geest is Jibrīl.'] },
    { type: 'mc', page: 24, q: ['كم سنة بين أول ما نزل من القرآن وآخره؟', 'Hoeveel jaar lag er tussen de eerste en de laatste openbaring?'], options: [['ثلاث وعشرون', 'عشر', 'ثلاث عشرة', 'أربعون'], ['drieëntwintig', 'tien', 'dertien', 'veertig']], answer: 0, explain: ['ذكر الكتاب أنها ثلاث وعشرون سنة.', 'Het boek noemt drieëntwintig jaar.'] },
    { type: 'tf', page: 25, q: ['الإذن الكوني القدري قد يقع وقد لا يقع.', 'Toestemming in schepping en lot kan gebeuren of niet.'], answer: 1, explain: ['الكوني يقع لا محالة، والشرعي قد يقع وقد لا يقع.', 'Die gebeurt onvermijdelijk; de religieuze kan gebeuren of niet.'] },
    { type: 'mc', page: 23, q: ['ما جزاء من قام ليلة القدر إيمانا واحتسابا؟', 'Wat krijgt wie Laylat al-Qadr in gebed doorbrengt uit geloof en hoop op beloning?'], options: [['يغفر له ما تقدم من ذنبه', 'يكتب له أجر حجة', 'يعتق من النار في الحال', 'يرى الملائكة'], ['zijn eerdere zonden worden vergeven', 'hij krijgt de beloning van een ḥajj', 'hij wordt meteen van het Vuur bevrijd', 'hij ziet de engelen']], answer: 0, explain: ['كما في حديث أبي هريرة المتفق عليه.', 'Zoals in de hadith van Abū Hurayra bij al-Bukhārī en Muslim.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٢٦.', 'Oefening van het boek op p. 26. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
