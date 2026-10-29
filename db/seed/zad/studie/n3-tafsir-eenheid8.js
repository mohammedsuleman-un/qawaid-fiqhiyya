// Hoofdstukkaart bij التفسير (٣), eenheid 8: سورة الشمس (lessen 20–21, boek p. 78–85).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '20',
  unit: 8,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '78–85',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الشمس', 'Soera ash-Shams'],
  subtitle: ['درسان مجموعان في صفحة واحدة', 'Twee lessen samen op één pagina'],
  summary: [
    'سورة مكية فيها أحد عشر قسما بالشمس والقمر والنهار والليل والسماء والأرض والنفس، على أن الفلاح لمن زكى نفسه والخيبة لمن دساها، ثم قصة ثمود حين كذبوا صالحا وعقروا الناقة فدمدم عليهم ربهم.',
    'Een Mekkaanse soera met een reeks eden bij de zon, de maan, de dag, de nacht, de hemel, de aarde en de ziel: succes is voor wie zijn ziel reinigt en verlies voor wie haar bederft. Daarna het verhaal van Thamūd, die Ṣāliḥ loochenden en de kameelmerrie doodden, waarna hun Heer hen vernietigde.'
  ],
  map: {
    title: ['سورة الشمس في خريطة واحدة', 'Soera ash-Shams in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الشمس', 'Soera ash-Shams'], ['الوحدة الثامنة', 'Eenheid 8']],
    nodes: [
      { label: ['أقسام بالآيات الكونية', 'Eden bij de tekenen in het heelal'], sub: ['الآيات ١–٦', 'vers 1–6'], page: 78, children: [['الشمس وضحاها والقمر', 'zon, ochtendlicht en maan'], ['النهار والليل', 'dag en nacht'], ['السماء والأرض', 'hemel en aarde']] },
      { label: ['النفس', 'De ziel'], sub: ['الآيات ٧–١٠', 'vers 7–10'], page: 79, children: [['ونفس وما سواها', 'de ziel en wie haar vormde'], ['فجورها وتقواها', 'haar zondigheid en godsvrucht'], ['أفلح من زكاها', 'succesvol wie haar reinigt']] },
      { label: ['ثمود', 'Thamūd'], sub: ['الآيات ١١–١٥', 'vers 11–15'], page: 82, children: [['كذبت بطغواها', 'loochenden in hun overmoed'], ['انبعث أشقاها', 'de ellendigste rende op'], ['ناقة الله وسقياها', 'de kameel van Allah en haar drinken'], ['فدمدم عليهم ربهم', 'hun Heer vernietigde hen']] }
    ]
  },
  points: [
    [78, 'الشمس آية النهار والقمر آية الليل، وهما من آيات قدرة الله وعلمه ورحمته.', 'De zon is het teken van de dag en de maan van de nacht; beide zijn tekenen van Allahs macht, kennis en barmhartigheid.'],
    [79, 'ألهم الله النفس فجورها وتقواها: معصيته وطاعته.', 'Allah gaf de ziel haar zondigheid en haar godsvrucht in: ongehoorzaamheid en gehoorzaamheid.'],
    [79, 'أفلح من زكى نفسه من الشرك والمعاصي، وخاب من دساها في المعاصي.', 'Succesvol is wie zijn ziel reinigt van shirk en zonden; verloren is wie haar in zonden verbergt.'],
    [80, 'النفس آية عجيبة: لطيفة سريعة التأثر، ولولاها لكان البدن صورة لا فائدة فيها.', 'De ziel is een wonderlijk teken: subtiel en snel beïnvloed; zonder haar zou het lichaam een nutteloze vorm zijn.'],
    [80, 'للإنسان قدرة على الخير والشر، يميز بينهما ويوجه نفسه إلى ما يختار.', 'De mens kan goed en kwaad doen, ze onderscheiden en zich richten op wat hij kiest.'],
    [82, 'دعا صالح قومه إلى عبادة الله وحده، وهي دعوة الأنبياء جميعا.', 'Ṣāliḥ riep zijn volk op Allah alleen te aanbidden; dat is de oproep van alle profeten.'],
    [83, 'الدمدمة الإهلاك بالاستئصال: الصيحة من فوقهم والرجفة من تحتهم.', 'Damdama is vernietiging met uitroeiing: de schreeuw van boven en de beving van onderen.'],
    [84, 'الذنوب سبب للهلاك والفساد، وما ظلمهم الله ولكن ظلموا أنفسهم.', 'Zonden zijn een oorzaak van ondergang en verderf; Allah deed hun geen onrecht, maar zij zichzelf.']
  ],
  terms: [
    ['ضحاها', 'ḍuḥāhā', 78, 'ضوؤها.', 'Haar licht.'],
    ['تلاها', 'talāhā', 78, 'تبعها في السير والنور.', 'Volgde haar in loop en licht.'],
    ['جلاها', 'jallāhā', 79, 'أظهرها؛ والضمير للشمس أو للأرض.', 'Toonde haar; het voornaamwoord verwijst naar de zon of de aarde.'],
    ['طحاها', 'ṭaḥāhā', 79, 'بسطها ومهدها.', 'Strekte haar uit en effende haar.'],
    ['فجورها', 'fujūrahā', 79, 'معصية الله.', 'Ongehoorzaamheid aan Allah.'],
    ['زكاها', 'zakkāhā', 79, 'طهرها من الشرك والمعاصي.', 'Reinigde haar van shirk en zonden.'],
    ['دساها', 'dassāhā', 79, 'أضلها وأدخلها في المعاصي.', 'Misleidde haar en bracht haar in zonden.'],
    ['طغواها', 'ṭaghwāhā', 82, 'طغيانها وتجبرها.', 'Hun overmoed en tirannie.'],
    ['أشقاها', 'ashqāhā', 82, 'أشقى القبيلة، واسمه قدار بن سالف.', 'De ellendigste van de stam, Qudār ibn Sālif.'],
    ['دمدم', 'damdama', 83, 'أهلك واستأصل.', 'Vernietigde en roeide uit.'],
    ['عقباها', 'ʿuqbāhā', 83, 'عاقبة إهلاكهم؛ لا يخافها الله.', 'Het gevolg van hun vernietiging; Allah vreest het niet.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['التزكية: محمودة ومذمومة', 'Zelfreiniging: prijzenswaardig en laakbaar'],
      intro: ['جمع بين ﴿قد أفلح من زكاها﴾ و﴿فلا تزكوا أنفسكم﴾.', 'Hoe "succesvol is wie haar reinigt" en "prijs jezelf niet aan" samengaan.'],
      columns: [['المعنى', 'Betekenis'], ['الدليل', 'Bewijs']],
      rows: [
        { label: ['محمودة', 'Prijzenswaardig'], cells: [['تربية النفس وتطهيرها من الشرك والمعاصي', 'de ziel opvoeden en reinigen van shirk en zonden'], ['﴿قد أفلح من زكاها﴾', '"succesvol is wie haar reinigt"']] },
        { label: ['مذمومة', 'Laakbaar'], cells: [['مدح النفس والثناء عليها', 'jezelf prijzen en ophemelen'], ['﴿فلا تزكوا أنفسكم﴾', '"prijs jezelf niet aan"']] }
      ],
      page: 80
    },
    {
      type: 'steps',
      title: ['قصة ثمود في السورة', 'Het verhaal van Thamūd in de soera'],
      intro: ['مختصرة كما في الآيات ١١–١٥.', 'Beknopt zoals in vers 11–15.'],
      nodes: [
        [82, 'كذبوا صالحا بطغيانهم', 'Zij loochenden Ṣāliḥ in hun overmoed', '', ''],
        [82, 'انبعث أشقاها لقتل الناقة', 'De ellendigste rende op om de kameel te doden', 'قدار بن سالف', 'Qudār ibn Sālif'],
        [83, 'حذرهم رسول الله', 'De boodschapper waarschuwde hen', 'ناقة الله وسقياها', 'de kameel van Allah en haar drinkbeurt'],
        [83, 'كذبوه فعقروها', 'Zij loochenden hem en doodden haar', '', ''],
        [83, 'فدمدم عليهم ربهم فسواها', 'Hun Heer vernietigde hen allen', 'ولا يخاف عقباها', 'en Hij vreest het gevolg niet']
      ]
    }
  ],
  sections: [
    [80, 'عظم المقسم به', 'De grootheid van wat bij gezworen wordt', 'الشمس والقمر والسماء والأرض والليل والنهار مخلوقات عظيمة، وكثر في القرآن القسم بها.', 'Zon, maan, hemel, aarde, nacht en dag zijn grote schepselen; de Koran zweert er vaak bij.'],
    [83, 'أبو زمعة', 'Abū Zamʿa', 'شبه النبي ﷺ عاقر الناقة برجل عزيز منيع في أهله مثل أبي زمعة، وهو عم الزبير بن العوام، من المستهزئين، مات كافرا بمكة.', 'De Profeet ﷺ vergeleek de doder van de kameel met een machtige, beschermde man onder zijn familie, zoals Abū Zamʿa, de oom van az-Zubayr ibn al-ʿAwwām; hij was een van de spotters en stierf ongelovig in Mekka.'],
    [84, 'قدرة الله', 'Allahs macht', 'يملي الله للظالم ثم يأخذه فلا يفلته، وهو الملك الذي لا يخاف عاقبة.', 'Allah geeft de onrechtvaardige uitstel en grijpt hem dan zonder hem te laten gaan; Hij is de Koning die geen gevolg vreest.']
  ],
  keycards: [
    ['onderscheid', 84, 'الإضافة إلى الله نوعان', 'Twee soorten toeschrijven aan Allah', ['إضافة صفة إلى موصوف: يد الله، وجه الله، عين الله', 'إضافة ملك وتشريف: بيت الله، ناقة الله، روح الله'], ['een eigenschap aan wie ermee beschreven is: de hand, het gezicht, het oog van Allah', 'bezit en eer: het huis van Allah, de kameel van Allah, de geest van Allah']]
  ],
  hadith: [
    { text: 'انبعث لها رجل عزيز منيع في أهله، مثل أبي زمعة', takhrij: 'في الصحيحين', takhrijNl: 'in de twee Ṣaḥīḥ-verzamelingen', note: 'قاله النبي ﷺ في تفسير ﴿إذ انبعث أشقاها﴾.', nlNote: 'Gezegd door de Profeet ﷺ bij "toen de ellendigste van hen oprende".', nl: 'Een machtige man, beschermd onder zijn familie, rende op naar haar, zoals Abū Zamʿa', pages: [82] }
  ],
  persons: [
    ['az-zubayr-ibn-al-awwam', 'text', [83], 'أبو زمعة عمه.', 'Abū Zamʿa was zijn oom.']
  ],
  review: [
    ['أقسم الله بآيات عظيمة على فلاح من زكى نفسه.', 'Allah zweert bij grote tekenen dat wie zijn ziel reinigt, succes heeft.'],
    ['ألهم الله النفس الفجور والتقوى، والإنسان يختار.', 'Allah gaf de ziel zondigheid en godsvrucht in; de mens kiest.'],
    ['التزكية المحمودة تطهير النفس، والمذمومة مدحها.', 'Prijzenswaardige zelfreiniging is de ziel zuiveren; laakbaar is jezelf prijzen.'],
    ['كذبت ثمود صالحا وعقرت الناقة فأهلكها الله بذنبها.', 'Thamūd loochende Ṣāliḥ en doodde de kameel; Allah vernietigde hen om hun zonden.'],
    ['ناقة الله إضافة تشريف، ويد الله إضافة صفة.', '"De kameel van Allah" is een toeschrijving van eer; "de hand van Allah" van een eigenschap.']
  ],
  quiz: [
    { type: 'mc', page: 79, q: ['ما معنى ﴿دساها﴾؟', 'Wat betekent dassāhā?'], options: [['أضلها وأدخلها في المعاصي', 'طهرها', 'رفعها', 'أحياها'], ['hij misleidde haar en bracht haar in zonden', 'hij reinigde haar', 'hij verhief haar', 'hij gaf haar leven']], answer: 0, explain: ['مقابل ﴿زكاها﴾.', 'Het tegenovergestelde van "hij reinigde haar".'] },
    { type: 'mc', page: 79, q: ['ما الفجور في ﴿فألهمها فجورها وتقواها﴾؟', 'Wat is fujūr in "Hij gaf haar haar zondigheid en godsvrucht in"?'], options: [['معصية الله', 'طاعة الله', 'الفرح', 'العلم'], ['ongehoorzaamheid aan Allah', 'gehoorzaamheid aan Allah', 'vreugde', 'kennis']], answer: 0, explain: ['والتقوى طاعته.', 'Godsvrucht is gehoorzaamheid.'] },
    { type: 'tf', page: 80, q: ['﴿فلا تزكوا أنفسكم﴾ تنهى عن تطهير النفس من المعاصي.', '"Prijs jezelf niet aan" verbiedt het reinigen van de ziel van zonden.'], answer: 1, explain: ['تنهى عن مدح النفس، أما تطهيرها فمحمود.', 'Het verbiedt jezelf te prijzen; reinigen is prijzenswaardig.'] },
    { type: 'mc', page: 82, q: ['ما اسم أشقى ثمود؟', 'Hoe heette de ellendigste van Thamūd?'], options: [['قدار بن سالف', 'أبو زمعة', 'صالح', 'هود'], ['Qudār ibn Sālif', 'Abū Zamʿa', 'Ṣāliḥ', 'Hūd']], answer: 0, explain: ['كما ذكر الكتاب.', 'Zoals het boek vermeldt.'] },
    { type: 'mc', page: 84, q: ['﴿ناقة الله﴾ من أي نوعي الإضافة؟', 'Bij welke soort toeschrijving hoort "de kameel van Allah"?'], options: [['إضافة ملك وتشريف', 'إضافة صفة', 'إضافة جزء', 'لا إضافة فيها'], ['bezit en eer', 'een eigenschap', 'een deel', 'geen toeschrijving']], answer: 0, explain: ['مثل بيت الله وروح الله.', 'Zoals het huis van Allah en de geest van Allah.'] },
    { type: 'tf', page: 83, q: ['﴿ولا يخاف عقباها﴾: الله لا يخاف عاقبة إهلاكهم.', '"En Hij vreest het gevolg niet": Allah vreest geen gevolg van hun vernietiging.'], answer: 0, explain: ['له الملك.', 'Hem behoort de heerschappij.'] }
  ],
  note: ['أنشطة الكتاب في الصفحتين ٨١ و٨٥.', 'Oefeningen van het boek op p. 81 en 85. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
