// Hoofdstukkaart bij التفسير (٤), eenheid 13: سورة قريش (les 15, boek p. 61–64).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md).
// Het boek noemt bij deze soera geen hadith.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '15',
  unit: 13,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '61–64',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة قريش', 'Soera Quraysh'],
  subtitle: ['سورة مكية، أربع آيات', 'Mekkaans, vier verzen'],
  summary: [
    'بعد ذكر دفع أصحاب الفيل تذكر السورة نعمة أخرى على أهل مكة: إيلافهم رحلة الشتاء والصيف في أمن، وتأمرهم أن يعبدوا رب هذا البيت الذي أطعمهم من جوع وآمنهم من خوف.',
    'Na het afweren van de mensen van de olifant noemt de soera een andere gunst aan de mensen van Mekka: hun vertrouwde winter- en zomerreis in veiligheid. Zij beveelt hun de Heer van dit Huis te aanbidden, die hen voedde tegen honger en veilig maakte tegen angst.'
  ],
  map: {
    title: ['سورة قريش في خريطة واحدة', 'Soera Quraysh in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة قريش', 'Soera Quraysh'], ['الوحدة الثالثة عشرة', 'Eenheid 13']],
    nodes: [
      { label: ['المناسبة', 'Het verband'], sub: ['مع سورة الفيل', 'met soera al-Fīl'], page: 61, children: [['نعمة دفع أصحاب الفيل', 'de gunst van het afweren van de olifant'], ['ثم نعمة أخرى على أهل مكة', 'dan een andere gunst aan Mekka']] },
      { label: ['إيلاف قريش', 'De vertrouwdheid van Quraysh'], sub: ['الآيتان ١–٢', 'vers 1–2'], page: 62, children: [['الأمن في الإقامة والسفر', 'veiligheid thuis en op reis'], ['رحلة الشتاء والصيف', 'winter- en zomerreis']] },
      { label: ['الأمر بالعبادة', 'Het bevel tot aanbidding'], sub: ['الآيتان ٣–٤', 'vers 3–4'], page: 62, children: [['فليعبدوا رب هذا البيت', 'laten zij de Heer van dit Huis aanbidden'], ['أطعمهم من جوع', 'voedde hen tegen honger'], ['آمنهم من خوف', 'maakte hen veilig tegen angst']] }
    ]
  },
  points: [
    [62, 'بدأت السورة بتقديم الجار والمجرور ﴿لإيلاف قريش﴾ على عامله، والتقدير: فليعبدوا رب هذا البيت لأجل إيلافهم.', 'De soera begint met het voorzetselvoorwerp "voor de vertrouwdheid van Quraysh" vóór zijn regerend woord; bedoeld is: laten zij de Heer van dit Huis aanbidden vanwege hun vertrouwdheid.'],
    [62, 'قريش لقب الجد الجامع لقبائل كثيرة: فهر بن مالك بن النضر بن كنانة.', 'Quraysh is de bijnaam van de stamvader die veel stammen verenigt: Fihr ibn Mālik ibn an-Naḍr ibn Kināna.'],
    [62, '﴿إيلافهم رحلة الشتاء والصيف﴾ بدل للبيان: أجمل ثم فصل ليستقر الخبر في ذهن السامع.', '"Hun vertrouwdheid met de winter- en zomerreis" is een verklarende bijstelling: eerst kort, dan uitgewerkt, zodat het zich in de geest van de hoorder vastzet.'],
    [62, 'العبادة: التذلل لله محبة وتعظيما.', 'Aanbidding is zich vernederen voor Allah uit liefde en verheerlijking.'],
    [63, 'أكثر البقاع أمنا مكة، فلا يعضد شجرها، ولا يختلى خلاها، ولا تلتقط لقطتها، ولا ينفر صيدها، ولا يسفك فيها دم.', 'Mekka is de veiligste plaats: haar bomen worden niet gekapt, haar gras niet gemaaid, haar gevonden voorwerpen niet opgeraapt, haar wild niet opgejaagd en er wordt geen bloed vergoten.']
  ],
  terms: [
    ['الإيلاف', 'al-īlāf', 62, 'الألفة والاجتماع في أمن، في الإقامة والسفر.', 'Vertrouwdheid en samenzijn in veiligheid, thuis en op reis.'],
    ['قريش', 'quraysh', 62, 'لقب فهر بن مالك بن النضر بن كنانة.', 'De bijnaam van Fihr ibn Mālik ibn an-Naḍr ibn Kināna.'],
    ['الرحلة', 'ar-riḥla', 62, 'الارتحال من مكان إلى مكان بعيد، ومنه الراحلة.', 'Vertrekken van de ene naar een verre andere plaats; daarvan rāḥila, het rijdier.'],
    ['العبادة', 'al-ʿibāda', 62, 'التذلل لله محبة وتعظيما.', 'Zich vernederen voor Allah uit liefde en verheerlijking.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['نعمتان في آية واحدة', 'Twee gunsten in één vers'],
      intro: ['﴿الذي أطعمهم من جوع وآمنهم من خوف﴾، ص ٦٣.', '"Die hen voedde tegen honger en veilig maakte tegen angst", p. 63.'],
      columns: [['نوعها', 'Soort'], ['ما تحفظ منه', 'Waartegen zij beschermt']],
      rows: [
        { label: ['أطعمهم من جوع', 'Voedde hen tegen honger'], cells: [['نعمة باطنة', 'een innerlijke gunst'], ['الهلاك في أمر باطن', 'ondergang in een innerlijke zaak']] },
        { label: ['آمنهم من خوف', 'Veilig tegen angst'], cells: [['نعمة ظاهرة', 'een uiterlijke gunst'], ['الهلاك في أمر ظاهر', 'ondergang in een uiterlijke zaak']] }
      ],
      page: 63
    }
  ],
  sections: [
    [62, 'إضافة البيت إلى الله', 'Het Huis toegevoegd aan Allah', 'أضاف الله البيت إلى نفسه في ﴿وطهر بيتي للطائفين﴾، وهنا أضاف نفسه إليه بوصف الربوبية ﴿رب هذا البيت﴾ تشريفا وتعظيما.', 'Allah voegde het Huis aan Zichzelf toe in "Reinig Mijn Huis voor wie er rondgaan"; hier noemt Hij Zich "Heer van dit Huis", ter ere en verheerlijking.'],
    [63, 'هيبة أهل الحرم', 'Ontzag voor de bewoners van de Ḥaram', 'آمن الله قريشا من المخاوف بما ألقى في نفوس العرب من هيبتهم، لأنهم أهل الحرم وولاة الكعبة.', 'Allah beveiligde Quraysh door het ontzag dat Hij de Arabieren voor hen gaf, omdat zij de bewoners van de Ḥaram en de verzorgers van de Kaʿba waren.']
  ],
  keycards: [
    ['definitie', 62, 'العبادة', 'Aanbidding', ['التذلل لله', 'مع المحبة', 'والتعظيم'], ['zich vernederen voor Allah', 'met liefde', 'en verheerlijking']]
  ],
  hadith: [],
  persons: [],
  review: [
    ['سورة قريش تذكير بنعمة أخرى بعد دفع أصحاب الفيل.', 'Soera Quraysh herinnert aan een andere gunst na het afweren van de olifant.'],
    ['أمرت قريش بعبادة رب البيت شكرا على الأمن والطعام.', 'Quraysh kreeg opdracht de Heer van het Huis te aanbidden uit dank voor veiligheid en voedsel.'],
    ['الإطعام من الجوع نعمة باطنة، والأمن من الخوف نعمة ظاهرة.', 'Voedsel tegen honger is een innerlijke gunst, veiligheid tegen angst een uiterlijke.']
  ],
  quiz: [
    { type: 'mc', page: 62, q: ['من الجد الذي لقب بقريش؟', 'Welke stamvader droeg de bijnaam Quraysh?'], options: [['فهر بن مالك', 'هاشم بن عبد مناف', 'قصي بن كلاب', 'عدنان'], ['Fihr ibn Mālik', 'Hāshim ibn ʿAbd Manāf', 'Quṣayy ibn Kilāb', 'ʿAdnān']], answer: 0, explain: ['فهر بن مالك بن النضر بن كنانة.', 'Fihr ibn Mālik ibn an-Naḍr ibn Kināna.'] },
    { type: 'mc', page: 62, q: ['ما الرحلتان المذكورتان في السورة؟', 'Welke twee reizen noemt de soera?'], options: [['رحلة الشتاء والصيف', 'رحلة الحج والعمرة', 'رحلة الشام والعراق', 'رحلة الليل والنهار'], ['de winter- en zomerreis', 'ḥajj en ʿumra', 'naar de Shām en Irak', 'nacht en dag']], answer: 0, explain: ['كما في الآية الثانية.', 'Zoals in vers 2.'] },
    { type: 'tf', page: 63, q: ['الإطعام من الجوع نعمة ظاهرة.', 'Voedsel tegen honger is een uiterlijke gunst.'], answer: 1, explain: ['هو نعمة باطنة، والأمن من الخوف نعمة ظاهرة.', 'Het is een innerlijke gunst; veiligheid tegen angst is uiterlijk.'] },
    { type: 'mc', page: 62, q: ['ما تعريف العبادة في الكتاب؟', 'Hoe definieert het boek aanbidding?'], options: [['التذلل لله محبة وتعظيما', 'الصلاة والصيام فقط', 'الخوف من العقاب', 'طاعة الوالدين'], ['zich vernederen voor Allah uit liefde en verheerlijking', 'alleen gebed en vasten', 'angst voor straf', 'gehoorzaamheid aan de ouders']], answer: 0, explain: ['كما في الإطار الأحمر ص ٦٢.', 'Zoals in het rode kader op p. 62.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦٤.', 'Oefening van het boek op p. 64. De Nederlandse weergave van verzen geeft de betekenis weer; het is geen vertaling.']
})
