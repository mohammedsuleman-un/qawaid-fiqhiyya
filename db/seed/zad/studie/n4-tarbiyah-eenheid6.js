// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 6: العشق (lessen 14–15, boek p. 40–45).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '14',
  unit: 6,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '40–45',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['العشق', 'Verliefdheid'],
  subtitle: ['درسان', 'Twee lessen'],
  summary: [
    'العشق إفراط المحبة للمحبوب مع الرغبة في الوصال، وهو من أعظم ما يفسد القلب ويبعده عن الله. أضراره أعظم من نفعه: قد يوقع في الكفر، ويشغل بالمخلوق عن الخالق وعن مصالح الدين والدنيا. من أسبابه إعراض القلب عن محبة الله والفراغ وعدم حفظ الجوارح، ويوقى منه باجتناب أسبابه ومحبة الله وغض البصر، ويعالج بتذكر عظمة الله والدعاء والفرار من المعشوق.',
    'Verliefdheid (ʿishq) is buitensporige liefde met verlangen naar vereniging; het is een van de ergste dingen die het hart bederven en van Allah verwijderen. De schade is groter dan het nut: het kan tot ongeloof leiden en houdt af van de Schepper en van religieuze en wereldse belangen. Oorzaken: een hart leeg van liefde voor Allah, leegte en onbewaakte ledematen. Voorkomen: oorzaken mijden, liefde voor Allah en de blik neerslaan. Behandeling: Allahs grootheid gedenken, smeekbede en weggaan van de beminde.'
  ],
  map: {
    title: ['العشق في خريطة واحدة', 'Verliefdheid in één kaart'],
    intro: ['كما في الدرسين.', 'Zoals in de twee lessen.'],
    root: [['العشق', 'Verliefdheid'], ['الوحدة السادسة', 'Eenheid 6']],
    nodes: [
      { label: ['خطره وأضراره', 'Gevaar en schade'], sub: ['ص ٤٠–٤١', 'p. 40–41'], page: 40, children: [['قد يوقع في الكفر', 'kan tot ongeloof leiden'], ['يشغل عن ذكر الخالق', 'houdt af van de Schepper'], ['يشغل عن المصالح', 'houdt af van belangen']] },
      { label: ['أسبابه', 'Oorzaken'], sub: ['ص ٤٢–٤٣', 'p. 42–43'], page: 42, children: [['فراغ القلب من محبة الله', 'een hart leeg van liefde voor Allah'], ['الفراغ', 'leegte'], ['عدم حفظ الجوارح', 'onbewaakte ledematen']] },
      { label: ['الوقاية', 'Voorkomen'], sub: ['ص ٤٣', 'p. 43'], page: 43, children: [['اجتناب الأسباب', 'oorzaken mijden'], ['محبة الله', 'liefde voor Allah'], ['غض البصر', 'de blik neerslaan']] },
      { label: ['العلاج', 'Behandeling'], sub: ['ص ٤٤', 'p. 44'], page: 44, children: [['تذكر عظمة الله', 'Allahs grootheid gedenken'], ['الفرار من المعشوق', 'weggaan van de beminde'], ['النظر في العواقب', 'de gevolgen overdenken']] }
    ]
  },
  points: [
    [40, 'العشق ذل للنفس، ران على القلب، مهانة في الدنيا، وعقوبة في الآخرة.', 'Verliefdheid is vernedering van de ziel, roest op het hart, verachting in de wereld en straf in het hiernamaals.'],
    [40, 'قال ابن تيمية: ما يورثه العشق من نقص العقل والعلم وفساد الخلق والدين أضعاف ما يتضمنه من جنس المحمود.', 'Ibn Taymiyya: wat verliefdheid aan verlies van verstand, kennis, karakter en religie brengt, is vele malen meer dan wat er goed aan is.'],
    [40, 'قال ابن القيم: يكون العشق كفرا لمن اتخذ معشوقه ندا يحبه كما يحب الله.', 'Ibn al-Qayyim: verliefdheid is ongeloof als men de beminde tot gelijke van Allah maakt en hem liefheeft zoals Allah.'],
    [41, 'لا تجتمع في القلب محبة الخالق وعشق المخلوق، فلا بد أن يغلب أحدهما الآخر.', 'Liefde voor de Schepper en verliefdheid op het schepsel komen niet samen in het hart; het een overwint het ander.'],
    [41, 'آفات الدنيا والآخرة أسرع إلى العشاق من النار في الحطب اليابس.', 'De plagen van wereld en hiernamaals komen sneller bij verliefden dan vuur in droog hout.'],
    [42, 'قال العلماء: العشق حركة قلب فارغ، أي فارغ من محبة الله.', 'De geleerden zeiden: verliefdheid is de beweging van een leeg hart, leeg van liefde voor Allah.'],
    [43, 'قال ابن القيم: أعظم صلاح العبد أن يصرف قوى حبه لله وحده، فيوحد محبوبه ويوحد حبه.', 'Ibn al-Qayyim: het grootste goed van de dienaar is al zijn liefde op Allah alleen richten.'],
    [44, 'قال ابن مسعود: إذا أعجبت أحدكم امرأة فليذكر مناتنها.', 'Ibn Masʿūd: als een vrouw je bevalt, denk dan aan haar onaangename kanten.']
  ],
  terms: [
    ['العشق', 'al-ʿishq', 40, 'إفراط المحبة للمحبوب مع الرغبة في الوصال.', 'Buitensporige liefde voor de beminde met verlangen naar vereniging.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['علاج العشق', 'Behandeling van verliefdheid'],
      intro: ['كما في الصفحة ٤٤.', 'Zoals op p. 44.'],
      nodes: [
        [44, 'تذكير النفس بعظمة الرب', 'Allahs grootheid gedenken', 'والخوف منه', 'en Hem vrezen'],
        [44, 'الدعاء والاستعانة بالله', 'Smeekbede en hulp van Allah', 'السلاح الذي لا يخيب', 'het wapen dat niet faalt'],
        [44, 'الفرار من المعشوق', 'Weggaan van de beminde', 'تغيير البلد أو المسكن أو العمل', 'van land, woning of werk veranderen'],
        [44, 'تأمل مساوئ المعشوق', 'De gebreken van de beminde overdenken', 'فليذكر مناتنها', 'denk aan haar onaangename kanten'],
        [44, 'النظر في العواقب', 'De gevolgen overdenken', 'الهم والخزي والندم', 'zorg, schande en spijt']
      ]
    }
  ],
  sections: [
    [43, 'أسباب أخرى للعشق', 'Andere oorzaken', 'الأغاني المحرمة والأفلام الهابطة والروايات الرومانسية، والضعف العام في شخصية العاشق الذي لا يملك عواطفه.', 'Verboden muziek, ordinaire films en romantische romans, en een zwakke persoonlijkheid die haar emoties niet beheerst.'],
    [43, 'غض البصر', 'De blik neerslaan', 'يجب على من وقع بصره على جميل فوجد لذة النظر أن يصرف بصره، فإن الناظر إذا كرر النظر وقع في الملامة شرعا وعقلا.', 'Wie zijn blik op iets moois laat vallen en er genot in vindt, moet wegkijken; wie blijft kijken, valt in de verwijtbare fout.']
  ],
  keycards: [
    ['opsomming', 40, 'أضرار العشق', 'Schade van verliefdheid', ['ربما أوقع في الكفر', 'الاشتغال بذكر المخلوق عن الخالق', 'الاشتغال عن مصالح الدين والدنيا', 'سرعة الآفات إلى العشاق'], ['kan tot ongeloof leiden', 'opgaan in het schepsel in plaats van de Schepper', 'afgehouden worden van religieuze en wereldse belangen', 'plagen die snel komen']],
    ['opsomming', 43, 'سبل الوقاية من العشق', 'Wegen om verliefdheid te voorkomen', ['اجتناب أسبابه', 'محبة الله وملء القلب بها', 'غض البصر'], ['de oorzaken mijden', 'het hart vullen met liefde voor Allah', 'de blik neerslaan']]
  ],
  hadith: [
    { text: 'إن الله كتب على ابن آدم حظه من الزنا، أدرك ذلك لا محالة، فزنا العين النظر، وزنا اللسان المنطق، والنفس تمنى وتشتهي، والفرج يصدق ذلك كله أو يكذبه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Allah heeft voor de mens zijn deel van ontucht vastgelegd dat hem onvermijdelijk bereikt: de ontucht van het oog is kijken, die van de tong is spreken, de ziel wenst en begeert, en het geslachtsdeel bevestigt dat alles of logenstraft het', pages: [42] }
  ],
  persons: [
    ['ibn-taymiyya', 'text', [40], 'بين أن ضرر العشق أضعاف نفعه.', 'Legde uit dat de schade van verliefdheid veel groter is dan het nut.'],
    ['ibn-al-qayyim', 'text', [40, 43], 'بين متى يكون العشق كفرا، وأوصى بتوحيد المحبة.', 'Legde uit wanneer verliefdheid ongeloof is en raadde aan alle liefde op Allah te richten.'],
    ['abu-hurayra', 'text', [42], 'روى حديث حظ ابن آدم من الزنا.', 'Overleverde de hadith over het deel van de mens in ontucht.'],
    ['ibn-masud', 'text', [44], 'قال: فليذكر مناتنها.', 'Zei: laat hem aan haar onaangename kanten denken.']
  ],
  review: [
    ['العشق إفراط المحبة مع الرغبة في الوصال.', 'Verliefdheid is buitensporige liefde met verlangen naar vereniging.'],
    ['ضرره أعظم من نفعه، وقد يوقع في الكفر.', 'De schade is groter dan het nut; het kan tot ongeloof leiden.'],
    ['العشق حركة قلب فارغ من محبة الله.', 'Verliefdheid is de beweging van een hart leeg van liefde voor Allah.'],
    ['يوقى منه بغض البصر ويعالج بالفرار من المعشوق.', 'Voorkomen door de blik neer te slaan, behandelen door weg te gaan van de beminde.']
  ],
  quiz: [
    { type: 'mc', page: 42, q: ['ما معنى قولهم: العشق حركة قلب فارغ؟', 'Wat betekent "verliefdheid is de beweging van een leeg hart"?'], options: [['فارغ من محبة الله', 'فارغ من الهموم', 'فارغ من العلم', 'فارغ من المال'], ['leeg van liefde voor Allah', 'leeg van zorgen', 'leeg van kennis', 'leeg van geld']], answer: 0, explain: ['لو كان فيه محبة الله لم يدخله العشق.', 'Als er liefde voor Allah in was, kon verliefdheid er niet binnenkomen.'] },
    { type: 'tf', page: 41, q: ['تجتمع في القلب محبة الخالق وعشق المخلوق.', 'Liefde voor de Schepper en verliefdheid op het schepsel komen samen in het hart.'], answer: 1, explain: ['لا بد أن يغلب أحدهما الآخر.', 'Het een overwint het ander.'] },
    { type: 'mc', page: 44, q: ['أي هذه من علاج العشق؟', 'Wat hoort bij de behandeling van verliefdheid?'], options: [['الفرار من المعشوق', 'كثرة النظر إليه', 'سماع الأغاني', 'قراءة الروايات الرومانسية'], ['weggaan van de beminde', 'veel naar hem kijken', 'naar muziek luisteren', 'romantische romans lezen']], answer: 0, explain: ['كما في الصفحة ٤٤.', 'Zoals op p. 44.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٤٥.', 'Oefening van het boek op p. 45. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
