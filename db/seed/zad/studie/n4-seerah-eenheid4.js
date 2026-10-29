// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 4: بكاؤه ﷺ (lessen 12, boek p. 48–51).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '12',
  unit: 4,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '48–51',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['بكاؤه ﷺ', 'Zijn huilen ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'لم يكن بكاؤه ﷺ عن حزن وألم فقط، بل كان تارة رحمة للميت، وتارة خوفا على أمته، وتارة من خشية الله، وتارة عند سماع القرآن؛ فبكى في الصلاة، وعند سماع القرآن، وعلى القبر، وعند زيارة قبر أمه.',
    'Zijn huilen ﷺ kwam niet alleen voort uit verdriet en pijn: soms uit barmhartigheid voor een overledene, soms uit zorg om zijn umma, soms uit vrees voor Allah en soms bij het horen van de Koran. Hij huilde in het gebed, bij het horen van de Koran, bij een graf en bij het bezoek aan het graf van zijn moeder.'
  ],
  map: {
    title: ['بكاؤه ﷺ في خريطة واحدة', 'Zijn huilen in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['بكاؤه ﷺ', 'Zijn huilen ﷺ'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['رحمة للميت', 'Barmhartigheid voor een overledene'], sub: ['ص ٤٨', 'p. 48'], page: 48, children: [['موت ابنه إبراهيم', 'de dood van zijn zoon Ibrāhīm']] },
      { label: ['في الصلاة', 'In het gebed'], sub: ['ص ٤٨–٤٩', 'p. 48–49'], page: 48, children: [['أزيز كأزيز المرجل', 'een geluid als van kokend water']] },
      { label: ['عند سماع القرآن', 'Bij het horen van de Koran'], sub: ['ص ٤٩', 'p. 49'], page: 49, children: [['قراءة ابن مسعود', 'de recitatie van Ibn Masʿūd']] },
      { label: ['على القبر', 'Bij een graf'], sub: ['ص ٥٠', 'p. 50'], page: 50, children: [['لمثل هذا فأعدوا', 'bereid je hierop voor']] },
      { label: ['رحمة بأمته', 'Uit barmhartigheid voor zijn umma'], sub: ['ص ٥٠', 'p. 50'], page: 50, children: [['اللهم أمتي أمتي', 'O Allah, mijn umma, mijn umma']] },
      { label: ['عند قبر أمه', 'Bij het graf van zijn moeder'], sub: ['ص ٥١', 'p. 51'], page: 51, children: [['بالأبواء', 'in al-Abwāʾ']] }
    ]
  },
  points: [
    [48, 'قال ابن القيم: كان بكاؤه ﷺ تارة رحمة للميت، وتارة خوفا على أمته، وتارة من خشية الله، وتارة عند سماع القرآن.', 'Ibn al-Qayyim: zijn huilen was soms uit barmhartigheid voor een overledene, soms uit zorg om zijn umma, soms uit vrees voor Allah en soms bij het horen van de Koran.'],
    [48, 'امتزاج البشرية بالرسالة في شخصه ﷺ جعل صفاته البشرية المثل الأعلى.', 'Doordat menselijkheid en boodschap in hem samengingen, werden zijn menselijke eigenschappen het hoogste voorbeeld.'],
    [48, 'بكاؤه في الصلاة من كمال خوفه وخشوعه لربه، والقرآن أعظم دواء لقسوة القلوب إذا قرئ بتدبر.', 'Zijn huilen in het gebed kwam uit volmaakte vrees en ootmoed; de Koran is de grootste remedie voor harde harten als hij met overdenking gelezen wordt.'],
    [49, 'البكاء لا يبطل الصلاة، سواء خرج منه حروف أم لا، كما قال شيخ الإسلام.', 'Huilen maakt het gebed niet ongeldig, of er nu letters uit voortkomen of niet, zoals Shaykh al-Islām zei.'],
    [49, 'قال الحافظ: الذي يظهر أنه بكى رحمة لأمته؛ لأنه يشهد عليهم بعملهم.', 'Al-Ḥāfiẓ: kennelijk huilde hij uit barmhartigheid voor zijn umma, omdat hij over hun daden zal getuigen.'],
    [50, 'قال النووي: حديث «أمتي أمتي» من أرجى الأحاديث لهذه الأمة أو أرجاها.', 'An-Nawawī: de hadith "mijn umma, mijn umma" is een van de hoopvolste hadith voor deze umma, of de hoopvolste.'],
    [51, 'زار قبر أمه بالأبواء في عمرة الحديبية، وبكى على ما فاتها من إدراك أيامه والإيمان به، كما قال القاضي عياض.', 'Hij bezocht het graf van zijn moeder in al-Abwāʾ tijdens de ʿumra van al-Ḥudaybiya en huilde omdat zij zijn tijd en het geloof in hem niet had meegemaakt, zoals al-Qāḍī ʿIyāḍ zei.']
  ],
  terms: [
    ['أزيز المرجل', 'azīz al-mirjal', 48, 'صوت غليان الماء في القدر.', 'Het geluid van kokend water in een pot.'],
    ['الأبواء', 'al-Abwāʾ', 51, 'موضع بين مكة والمدينة، وهو إلى المدينة أقرب.', 'Een plaats tussen Mekka en Medina, dichter bij Medina.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['دوافع بكائه ﷺ', 'Drijfveren van zijn huilen'],
      intro: ['كما في كلام ابن القيم ص ٤٨.', 'Zoals in de woorden van Ibn al-Qayyim op p. 48.'],
      nodes: [
        [48, 'رحمة للميت', 'Barmhartigheid voor een overledene', 'كموت إبراهيم', 'zoals bij de dood van Ibrāhīm'],
        [50, 'خوفا على أمته', 'Zorg om zijn umma', 'اللهم أمتي أمتي', 'O Allah, mijn umma'],
        [48, 'من خشية الله', 'Vrees voor Allah', 'في الصلاة', 'in het gebed'],
        [49, 'عند سماع القرآن', 'Bij het horen van de Koran', 'بكاء اشتياق ومحبة وإجلال', 'huilen uit verlangen, liefde en ontzag']
      ]
    }
  ],
  sections: [
    [49, 'آية النساء', 'Het vers uit an-Nisāʾ', 'قرأ ابن مسعود سورة النساء حتى بلغ: ﴿فكيف إذا جئنا من كل أمة بشهيد وجئنا بك على هؤلاء شهيدا﴾ [النساء: 41]، فذرفت عيناه ﷺ.', 'Ibn Masʿūd reciteerde an-Nisāʾ tot het vers over de getuige uit elke gemeenschap en de Profeet als getuige over hen (4:41); toen stroomden zijn ogen van tranen.'],
    [50, 'دعاء إبراهيم وعيسى', 'De smeekbeden van Ibrāhīm en ʿĪsā', 'تلا ﷺ قول إبراهيم: ﴿رب إنهن أضللن كثيرا من الناس﴾ [إبراهيم: 36]، وقول عيسى: ﴿إن تعذبهم فإنهم عبادك﴾ [المائدة: 118]، فرفع يديه وبكى، فبشره الله: «سنرضيك في أمتك ولا نسوؤك».', 'Hij reciteerde de woorden van Ibrāhīm (14:36) en van ʿĪsā (5:118), hief zijn handen en huilde; Allah gaf hem de blijde boodschap: "Wij zullen je tevredenstellen in je umma en je niet bedroeven".']
  ],
  keycards: [
    ['opsomming', 48, 'مواطن بكائه ﷺ', 'Momenten waarop hij huilde', ['عند موت ابنه', 'في الصلاة', 'عند سماع القرآن', 'على القبر', 'رحمة بأمته', 'عند قبر أمه'], ['bij de dood van zijn zoon', 'in het gebed', 'bij het horen van de Koran', 'bij een graf', 'uit barmhartigheid voor zijn umma', 'bij het graf van zijn moeder']]
  ],
  hadith: [
    { text: 'إن العين تدمع، والقلب يحزن، ولا نقول إلا ما يرضى ربنا، وإنا بفراقك يا إبراهيم لمحزونون', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'قاله عند موت ابنه إبراهيم.', nlNote: 'Gezegd bij de dood van zijn zoon Ibrāhīm.', nl: 'Het oog traant en het hart is bedroefd, maar wij zeggen alleen wat onze Heer behaagt; en om jouw heengaan, o Ibrāhīm, zijn wij bedroefd', pages: [48] },
    { text: 'أتيت النبي ﷺ وهو يصلي، ولجوفه أزيز كأزيز المرجل؛ يعني: يبكي', takhrij: 'رواه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', narrator: 'مطرف عن أبيه', narratorNl: 'Muṭarrif, van zijn vader', nl: 'Ik kwam bij de Profeet ﷺ terwijl hij bad, en uit zijn borst kwam een geluid als van een kokende pot, dat wil zeggen: hij huilde', pages: [48] },
    { text: 'اقرأ علي … حسبك الآن', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله بن مسعود', narratorNl: 'ʿAbd Allāh ibn Masʿūd', note: 'فإذا عيناه تذرفان.', nlNote: 'Daarop stroomden zijn ogen van tranen.', nl: 'Reciteer voor mij … Zo is het genoeg', pages: [49] },
    { text: 'يا إخواني، لمثل هذا فأعدوا', takhrij: 'أخرجه ابن ماجه، وحسنه الألباني', takhrijNl: 'Ibn Māja; ḥasan volgens al-Albānī', narrator: 'البراء بن عازب', narratorNl: 'al-Barāʾ ibn ʿĀzib', note: 'قاله بعد أن بكى على شفير القبر حتى بل الثرى.', nlNote: 'Gezegd nadat hij aan de rand van een graf huilde tot de aarde nat werd.', nl: 'Mijn broeders, bereid je op zoiets als dit voor', pages: [50] },
    { text: 'اللهم أمتي أمتي', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن عمرو بن العاص', narratorNl: 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', note: 'وفيه قول الله لجبريل: «سنرضيك في أمتك ولا نسوؤك».', nlNote: 'Daarin zegt Allah tegen Jibrīl: "Wij zullen je tevredenstellen in je umma en je niet bedroeven".', nl: 'O Allah, mijn umma, mijn umma', pages: [50] },
    { text: 'استأذنت ربي في أن أستغفر لها فلم يؤذن لي، واستأذنته في أن أزور قبرها فأذن لي، فزوروا القبور؛ فإنها تذكر الموت', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'لما زار قبر أمه فبكى وأبكى من حوله.', nlNote: 'Toen hij het graf van zijn moeder bezocht, huilde en wie om hem heen waren deed huilen.', nl: 'Ik vroeg mijn Heer toestemming om vergeving voor haar te vragen en kreeg die niet; ik vroeg Hem toestemming haar graf te bezoeken en kreeg die. Bezoek dus de graven, want zij herinneren aan de dood', pages: [51] }
  ],
  persons: [
    ['ibn-al-qayyim', 'text', [48], 'عدد دوافع بكائه ﷺ.', 'Noemde de drijfveren van zijn huilen.'],
    ['mutarrif-ibn-abdallah', 'text', [48], 'روى عن أبيه بكاءه ﷺ في الصلاة.', 'Overleverde van zijn vader het huilen in het gebed.'],
    ['abdallah-ibn-ash-shikhkhir', 'text', [48], 'رأى النبي ﷺ يبكي في صلاته.', 'Zag de Profeet ﷺ huilen in zijn gebed.'],
    ['ibn-taymiyya', 'text', [49], 'قال: البكاء لا يسمى كلاما فلا يبطل الصلاة.', 'Zei: huilen heet geen spreken en maakt het gebed niet ongeldig.'],
    ['ibn-masud', 'text', [49], 'قرأ على النبي ﷺ سورة النساء.', 'Reciteerde an-Nisāʾ voor de Profeet ﷺ.'],
    ['ibn-hajar-al-asqalani', 'text', [49], 'قال: بكى رحمة لأمته.', 'Zei: hij huilde uit barmhartigheid voor zijn umma.'],
    ['al-bara-ibn-azib', 'text', [50], 'روى بكاءه ﷺ على القبر.', 'Overleverde zijn huilen bij een graf.'],
    ['abdallah-ibn-amr', 'text', [50], 'روى حديث «أمتي أمتي».', 'Overleverde de hadith "mijn umma, mijn umma".'],
    ['an-nawawi', 'text', [50], 'ذكر فوائد حديث «أمتي أمتي».', 'Noemde de lessen uit de hadith "mijn umma".'],
    ['abu-hurayra', 'text', [51], 'روى زيارته ﷺ قبر أمه.', 'Overleverde zijn bezoek aan het graf van zijn moeder.'],
    ['al-qadi-iyad', 'text', [51], 'بين سبب بكائه عند قبر أمه.', 'Legde uit waarom hij bij het graf van zijn moeder huilde.']
  ],
  review: [
    ['تنوعت دوافع بكائه ﷺ بين الرحمة والخوف والخشية والتأثر بالقرآن.', 'Hij huilde uit barmhartigheid, zorg, vrees voor Allah en ontroering door de Koran.'],
    ['البكاء في الصلاة لا يبطلها.', 'Huilen in het gebed maakt het niet ongeldig.'],
    ['زيارة القبور تذكر الموت.', 'Het bezoeken van graven herinnert aan de dood.'],
    ['بشره الله بأنه سيرضيه في أمته ولا يسوؤه.', 'Allah beloofde hem tevreden te stellen in zijn umma en hem niet te bedroeven.']
  ],
  quiz: [
    { type: 'tf', page: 49, q: ['البكاء في الصلاة يبطلها إذا خرجت منه حروف.', 'Huilen in het gebed maakt het ongeldig als er letters uit voortkomen.'], answer: 1, explain: ['لا يبطلها سواء خرجت حروف أم لا.', 'Het maakt het gebed niet ongeldig, of er nu letters uit voortkomen of niet.'] },
    { type: 'mc', page: 49, q: ['عند أي آية قال النبي ﷺ لابن مسعود: «حسبك الآن»؟', 'Bij welk vers zei de Profeet ﷺ tegen Ibn Masʿūd: "Zo is het genoeg"?'], options: [['﴿فكيف إذا جئنا من كل أمة بشهيد﴾', 'آية الكرسي', 'أول سورة البقرة', 'سورة الفاتحة'], ['"Hoe zal het zijn als Wij uit elke gemeenschap een getuige brengen" (4:41)', 'het Troonvers', 'het begin van al-Baqara', 'al-Fātiḥa']], answer: 0, explain: ['كما في حديث ابن مسعود.', 'Zoals in de hadith van Ibn Masʿūd.'] },
    { type: 'mc', page: 51, q: ['أين زار النبي ﷺ قبر أمه؟', 'Waar bezocht de Profeet ﷺ het graf van zijn moeder?'], options: [['الأبواء', 'البقيع', 'أحد', 'الطائف'], ['al-Abwāʾ', 'al-Baqīʿ', 'Uḥud', 'aṭ-Ṭāʾif']], answer: 0, explain: ['في عمرة الحديبية، بين مكة والمدينة.', 'Tijdens de ʿumra van al-Ḥudaybiya, tussen Mekka en Medina.'] },
    { type: 'mc', page: 50, q: ['ماذا قال ﷺ بعد بكائه على شفير القبر؟', 'Wat zei hij ﷺ nadat hij aan de rand van een graf had gehuild?'], options: [['يا إخواني، لمثل هذا فأعدوا', 'إنا لله وإنا إليه راجعون', 'اللهم اغفر له', 'لا إله إلا الله'], ['mijn broeders, bereid je hierop voor', 'wij behoren aan Allah toe en keren naar Hem terug', 'O Allah, vergeef hem', 'er is geen god dan Allah']], answer: 0, explain: ['كما في حديث البراء.', 'Zoals in de hadith van al-Barāʾ.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٥١.', 'Oefening van het boek op p. 51. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
