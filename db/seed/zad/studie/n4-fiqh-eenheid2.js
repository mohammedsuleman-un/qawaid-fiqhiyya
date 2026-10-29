// Hoofdstukkaart bij الفقه (٤), eenheid 2: الإجارة (lessen 7–9, boek p. 22–26).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-fiqh/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-fiqh',
  chapter: '7',
  unit: 2,
  source: {
    label: ['كتاب الفقه (٤)، سلسلة زاد العلمية', 'Al-Fiqh (4), Zad-reeks'],
    pages: '22–26',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Fiqh/page/n{p}/mode/1up'
  },
  title: ['الإجارة', 'Huur'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'الإجارة عقد على منفعة معلومة أو عمل معلوم في زمن معلوم بعوض معلوم، وهي نوع من البيع لأنها بيع للمنافع. أركانها أربعة، وهي جائزة بالكتاب والسنة والإجماع، ولها ستة شروط، وهي نوعان: إجارة على أعيان وإجارة على أشخاص، والأجير خاص أو مشترك.',
    'Huur is een contract over een bekend nut of bekend werk, voor een bekende tijd, tegen een bekende vergoeding; het is een soort koop, want het is verkoop van nut. Er zijn vier zuilen; huur is toegestaan door Koran, sunna en consensus; er zijn zes voorwaarden en twee soorten: huur van zaken en huur van personen, met de bijzondere en de gemeenschappelijke arbeider.'
  ],
  map: {
    title: ['الإجارة في خريطة واحدة', 'Huur in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['الإجارة', 'Huur'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['التعريف والأركان', 'Definitie en zuilen'], sub: ['الدرس ٧', 'les 7'], page: 22, children: [['الصيغة', 'de formule'], ['المتعاقدان', 'de twee partijen'], ['المنفعة', 'het nut'], ['الأجرة', 'het loon']] },
      { label: ['الحكم والحكمة', 'Oordeel en wijsheid'], sub: ['الدرس ٧', 'les 7'], page: 23, children: [['الكتاب والسنة والإجماع', 'Koran, sunna en consensus'], ['التيسير على الناس', 'het makkelijk maken voor mensen']] },
      { label: ['الشروط', 'Voorwaarden'], sub: ['الدرس ٨', 'les 8'], page: 23, children: [['معلومية المنفعة والأجرة والمدة', 'bekend nut, loon en duur'], ['إباحة المنفعة', 'toegestaan nut']] },
      { label: ['الأنواع', 'Soorten'], sub: ['الدرسان ٨–٩', 'les 8–9'], page: 24, children: [['على أعيان', 'van zaken'], ['أجير خاص', 'bijzondere arbeider'], ['أجير مشترك', 'gemeenschappelijke arbeider']] }
    ]
  },
  points: [
    [22, 'الإجارة نوع من البيع، لأنها في الحقيقة بيع للمنافع.', 'Huur is een soort koop, want in werkelijkheid is het verkoop van nut.'],
    [22, 'قد تكون صيغة الإجارة بالفعل كالمعاطاة، كتأجير الدراجات والسيارات المعروضة بسعر محدد.', 'De formule kan ook door handeling zijn, zoals fietsen of auto\'s die voor een vaste prijs te huur staan.'],
    [23, 'قال ابن قدامة: أجمع العلماء في كل عصر وكل مصر على جواز الإجارة.', 'Ibn Qudāma: de geleerden van elke tijd en elke plaats zijn het eens over de toelaatbaarheid van huur.'],
    [23, 'شرعت الإجارة لأنه ليس كل إنسان يقدر على أن يعمل كل شيء بنفسه أو يشتري كل شيء.', 'Huur is voorgeschreven omdat niet ieder alles zelf kan doen of alles kan kopen.'],
    [24, 'لا تصح الإجارة على المحرم كاستئجار المغنية والسحرة وآلات المعازف، لأنها إعانة على الإثم والعدوان.', 'Huur voor iets verbodens is ongeldig, zoals een zangeres, tovenaars of muziekinstrumenten huren, want het helpt bij zonde en vijandschap.'],
    [24, 'الأجير الخاص يستحق أجره بتسليم نفسه مدة العمل، ولو لم يعطه المستأجر عملا.', 'De bijzondere arbeider verdient zijn loon door zich de werktijd ter beschikking te stellen, ook als de werkgever hem geen werk geeft.'],
    [25, 'الأجير المشترك لا يستحق الأجرة إلا بإتمام العمل.', 'De gemeenschappelijke arbeider verdient zijn loon pas als het werk af is.'],
    [25, 'لا يجوز للمرأة أن تؤجر نفسها بغير إذن زوجها.', 'De vrouw mag zichzelf niet verhuren zonder toestemming van haar man.']
  ],
  terms: [
    ['الإجارة', 'al-ijāra', 22, 'لغة: من الأجر وهو العوض على العمل. واصطلاحا: عقد على منفعة معلومة أو عمل معلوم في زمن معلوم بعوض معلوم.', 'Taal: van ajr, de vergoeding voor werk. Vakterm: contract over bekend nut of werk, voor een bekende tijd, tegen bekende vergoeding.'],
    ['المؤجر والمستأجر', 'al-muʾajjir wa-l-mustaʾjir', 22, 'المؤجر مالك المنفعة الذي يؤجرها، والمستأجر الذي يستأجرها.', 'De verhuurder bezit het nut en verhuurt het; de huurder huurt het.'],
    ['الخريت', 'al-khirrīt', 23, 'الماهر بالطرق ومسالكها الخفية في الصحراء.', 'De ervaren kenner van wegen en verborgen paden in de woestijn.'],
    ['الأجير الخاص', 'al-ajīr al-khāṣṣ', 24, 'من يعمل لشخص معين مدة معينة كالموظف.', 'Wie voor een bepaalde persoon werkt gedurende een bepaalde tijd, zoals een ambtenaar.'],
    ['الأجير المشترك', 'al-ajīr al-mushtarak', 25, 'من يعمل لأكثر من شخص ويرتبط بإنجاز العمل كالميكانيكي في ورشته.', 'Wie voor meerdere mensen werkt en aan het afmaken van het werk gebonden is, zoals een monteur in zijn werkplaats.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['البيع والإجارة', 'Koop en huur'],
      intro: ['كما في الإطار ص ٢٢.', 'Zoals in het kader op p. 22.'],
      columns: [['البيع', 'Koop'], ['الإجارة', 'Huur']],
      rows: [
        { label: ['المعقود عليه', 'Object'], cells: [['العين', 'de zaak zelf'], ['المنفعة', 'het nut']] },
        { label: ['الملك', 'Eigendom'], cells: [['ينتقل إلى المشتري', 'gaat over op de koper'], ['تبقى العين للمؤجر', 'de zaak blijft van de verhuurder']] },
        { label: ['الضمان', 'Aansprakelijkheid'], cells: [['على المشتري', 'bij de koper'], ['على المؤجر', 'bij de verhuurder']] }
      ],
      page: 22
    },
    {
      type: 'compare',
      title: ['الأجير الخاص والمشترك', 'Bijzondere en gemeenschappelijke arbeider'],
      intro: ['كما في الإطار ص ٢٥.', 'Zoals in het kader op p. 25.'],
      columns: [['الأجير الخاص', 'Bijzondere arbeider'], ['الأجير المشترك', 'Gemeenschappelijke arbeider']],
      rows: [
        { label: ['لمن يعمل', 'Voor wie'], cells: [['لشخص معين', 'voor één bepaalde persoon'], ['لعموم الناس', 'voor het publiek']] },
        { label: ['ما يستحق به الأجر', 'Waardoor hij loon verdient'], cells: [['تسليم نفسه مدة العمل', 'zich de werktijd ter beschikking stellen'], ['إتمام العمل', 'het werk afmaken']] },
        { label: ['مثال', 'Voorbeeld'], cells: [['الموظف والسائق الخاص', 'ambtenaar, privéchauffeur'], ['الميكانيكي والخياط والحلاق', 'monteur, kleermaker, kapper']] }
      ],
      page: 25
    }
  ],
  sections: [
    [24, 'الإجارة على الأعيان والأشخاص', 'Huur van zaken en van personen', 'الإجارة على الأعيان: إجارة منفعة عين معينة كهذه السيارة أو هذا البيت. والإجارة على الأشخاص: إجارة على أداء عمل معلوم كإصلاح السباكة أو خلع الضرس.', 'Huur van zaken: het nut van een bepaalde zaak huren, zoals deze auto of dit huis. Huur van personen: iemand inhuren voor bekend werk, zoals sanitair repareren of een kies trekken.'],
    [25, 'استعمال المستأجر للعين', 'Gebruik door de huurder', 'من استأجر بيتا للسكنى لم يجز أن يستعمله في غيرها إلا باتفاق بين المؤجر والمستأجر.', 'Wie een huis huurt om te wonen, mag het niet voor iets anders gebruiken, behalve met afspraak tussen verhuurder en huurder.']
  ],
  keycards: [
    ['opsomming', 22, 'أركان الإجارة', 'Zuilen van huur', ['الصيغة', 'المتعاقدان: المؤجر والمستأجر', 'المعقود عليه: المنفعة', 'الأجرة'], ['de formule', 'de partijen: verhuurder en huurder', 'het object: het nut', 'het loon']],
    ['voorwaarde', 23, 'شروط عقد الإجارة', 'Voorwaarden van het huurcontract', ['التراضي', 'جواز التصرف', 'معلومية المنفعة والأجرة', 'إباحة المنفعة', 'ملك المنفعة أو الإذن فيها', 'معلومية المدة'], ['wederzijds goedvinden', 'handelingsbevoegdheid', 'bekend nut en loon', 'toegestaan nut', 'eigendom van het nut of toestemming', 'bekende duur']]
  ],
  hadith: [
    { text: 'استأجر رسول الله ﷺ، وأبو بكر رجلا من بني الديل هاديا خريتا', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Boodschapper van Allah ﷺ en Abū Bakr huurden een man van Banū ad-Dīl in als ervaren gids', pages: [23] },
    { text: 'أعطوا الأجير أجره قبل أن يجف عرقه', takhrij: 'أخرجه ابن ماجه، وصححه الألباني', takhrijNl: 'Ibn Māja; ṣaḥīḥ volgens al-Albānī', nl: 'Geef de arbeider zijn loon voordat zijn zweet droogt', pages: [25] },
    { text: 'قال الله: ثلاثة أنا خصمهم يوم القيامة، ومنهم: رجل استأجر أجيرا فاستوفى منه، ولم يعطه أجره', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'أورده الكتاب مختصرا.', nlNote: 'Het boek geeft een verkorte vorm.', nl: 'Allah zei: drie mensen zal Ik op de Dag der Opstanding bestrijden, onder wie een man die een arbeider inhuurde, het werk volledig van hem kreeg en hem zijn loon niet gaf', pages: [25] }
  ],
  persons: [
    ['aisha', 'text', [23], 'روت استئجار النبي ﷺ دليلا في الهجرة.', 'Overleverde dat de Profeet ﷺ een gids inhuurde.'],
    ['abu-bakr-as-siddiq', 'text', [23], 'استأجر مع النبي ﷺ رجلا هاديا.', 'Huurde samen met de Profeet ﷺ een gids in.'],
    ['ibn-qudama', 'text', [23], 'نقل الإجماع على جواز الإجارة.', 'Gaf de consensus over de toelaatbaarheid van huur.'],
    ['abu-hurayra', 'text', [25], 'روى حديث «ثلاثة أنا خصمهم».', 'Overleverde de hadith "drie die Ik zal bestrijden".'],
    ['al-albani', 'takhrij', [25], 'صحح حديث «أعطوا الأجير أجره».', 'Verklaarde "geef de arbeider zijn loon" authentiek.']
  ],
  review: [
    ['الإجارة بيع للمنافع، وأركانها أربعة.', 'Huur is verkoop van nut; er zijn vier zuilen.'],
    ['هي جائزة بالكتاب والسنة والإجماع.', 'Zij is toegestaan door Koran, sunna en consensus.'],
    ['شروطها ستة، منها إباحة المنفعة ومعلومية المدة.', 'Er zijn zes voorwaarden, waaronder toegestaan nut en bekende duur.'],
    ['الأجير الخاص يستحق الأجر بالمدة، والمشترك بإتمام العمل.', 'De bijzondere arbeider verdient loon door de tijd, de gemeenschappelijke door het afgemaakte werk.']
  ],
  quiz: [
    { type: 'mc', page: 22, q: ['على أي شيء يقع عقد الإجارة؟', 'Waarover gaat het huurcontract?'], options: [['على المنفعة', 'على العين', 'على الثمن فقط', 'على الضمان'], ['over het nut', 'over de zaak zelf', 'alleen over de prijs', 'over de aansprakelijkheid']], answer: 0, explain: ['البيع يقع على العين والإجارة على المنفعة.', 'Koop gaat over de zaak, huur over het nut.'] },
    { type: 'mc', page: 25, q: ['أي هؤلاء أجير مشترك؟', 'Wie van hen is een gemeenschappelijke arbeider?'], options: [['الميكانيكي في ورشته', 'الموظف في الدائرة', 'السائق الخاص في البيت', 'الحارس المستأجر للحراسة'], ['de monteur in zijn werkplaats', 'de ambtenaar in een dienst', 'de privéchauffeur', 'de ingehuurde bewaker']], answer: 0, explain: ['يعمل لعموم الناس ويستحق الأجر بإتمام العمل.', 'Hij werkt voor het publiek en verdient loon door het werk af te maken.'] },
    { type: 'tf', page: 24, q: ['يجوز استئجار فرقة موسيقية لحفل.', 'Het is toegestaan een muziekgroep voor een feest in te huren.'], answer: 1, explain: ['لا تصح الإجارة على المحرم.', 'Huur voor iets verbodens is ongeldig.'] },
    { type: 'tf', page: 24, q: ['يستحق الأجير الخاص أجره كاملا ولو لم يعطه المستأجر عملا في المدة.', 'De bijzondere arbeider heeft recht op zijn volle loon, ook als de werkgever hem in die tijd geen werk geeft.'], answer: 0, explain: ['لأنه سلم نفسه مدة العمل.', 'Want hij heeft zich de werktijd ter beschikking gesteld.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٢٦.', 'Oefening van het boek op p. 26. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
