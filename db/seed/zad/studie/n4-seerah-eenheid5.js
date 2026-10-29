// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 5: ضحكه ومزاحه ﷺ (lessen 13–15, boek p. 52–56).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
// Weggelaten (zonder bron in het boek): de uitspraken van ʿUmar, Zayd ibn Thābit en de bedoeïenenvrouw op p. 53.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '13',
  unit: 5,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '52–56',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['ضحكه ومزاحه ﷺ', 'Zijn lachen en schertsen ﷺ'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'كان أكثر ضحكه ﷺ تبسما، وربما ضحك حتى تبدو نواجذه. ضحك مع أهله، وحث الأزواج على ملاعبة زوجاتهم، وتبسم مشاركة لأصحابه، وكان يمزح ولا يقول إلا حقا.',
    'Zijn lachen ﷺ was meestal glimlachen, soms lachte hij tot zijn kiezen zichtbaar werden. Hij lachte met zijn gezin, spoorde echtgenoten aan met hun vrouwen te spelen, glimlachte met zijn metgezellen mee, en schertste zonder iets anders dan de waarheid te zeggen.'
  ],
  map: {
    title: ['ضحكه ومزاحه ﷺ في خريطة واحدة', 'Zijn lachen en schertsen in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['ضحكه ومزاحه ﷺ', 'Zijn lachen en schertsen ﷺ'], ['الوحدة الخامسة', 'Eenheid 5']],
    nodes: [
      { label: ['كيفية ضحكه', 'De wijze van zijn lachen'], sub: ['ص ٥٢', 'p. 52'], page: 52, children: [['أكثره تبسم', 'meestal glimlachen'], ['ربما بدت نواجذه', 'soms zichtbare kiezen']] },
      { label: ['مع أهله', 'Met zijn gezin'], sub: ['ص ٥٣', 'p. 53'], page: 53, children: [['بنات عائشة', 'de poppen van ʿĀʾisha'], ['هلا جارية تلاعبها', 'waarom geen jong meisje om mee te spelen']] },
      { label: ['مع أصحابه', 'Met zijn metgezellen'], sub: ['ص ٥٤–٥٥', 'p. 54–55'], page: 54, children: [['حديثهم عن الجاهلية', 'hun gesprekken over de jāhiliyya'], ['هيبة النساء لعمر', 'het ontzag van de vrouwen voor ʿUmar'], ['المظاهر', 'de man van ẓihār']] },
      { label: ['مزاحه', 'Zijn schertsen'], sub: ['ص ٥٥–٥٦', 'p. 55–56'], page: 56, children: [['ولد الناقة', 'het jong van een kameel'], ['يا أبا عمير', 'o Abū ʿUmayr'], ['صهيب والرمد', 'Ṣuhayb en de oogontsteking'], ['كلك', 'helemaal']] }
    ]
  },
  points: [
    [52, 'كان ضحكه ﷺ تلطفا وإيناسا، أو مشاركة في الفرح، أو إقرارا لخبر، أو تعجبا، أو لسماع ما يضحك.', 'Hij lachte uit vriendelijkheid en gezelligheid, uit gedeelde vreugde, ter bevestiging van een bericht, uit verwondering of om iets grappigs.'],
    [52, 'قال ابن حجر: كان في معظم أحواله لا يزيد على التبسم، والمكروه الإكثار منه أو الإفراط فيه؛ لأنه يذهب الوقار.', 'Ibn Ḥajar: meestal ging hij niet verder dan glimlachen; afgekeurd is veel of overdreven lachen, omdat het de waardigheid wegneemt.'],
    [53, 'ضحكه مع أهله أدخل السرور على قلب زوجته وأثر في مشاعرها.', 'Zijn lachen met zijn gezin bracht vreugde in het hart van zijn vrouw en raakte haar gevoelens.'],
    [53, 'الملاعبة والمضاحكة بين الزوجين تملأ البيت أنسا ومحبة وتقوي الرابطة الزوجية.', 'Spelen en samen lachen tussen echtgenoten vult het huis met gezelligheid en liefde en versterkt de huwelijksband.'],
    [54, 'كان أصحابه يتحدثون في أمر الجاهلية فيضحكون ويتبسم ﷺ.', 'Zijn metgezellen spraken over de jāhiliyya en lachten, en hij ﷺ glimlachte.'],
    [55, 'يحرم على المظاهر أن يجامع زوجته قبل الكفارة بالإجماع، فإن فعل لم تسقط الكفارة ولم تتضاعف.', 'Volgens consensus mag wie ẓihār deed geen gemeenschap hebben vóór de boete; doet hij het toch, dan vervalt de boete niet en wordt ze niet verdubbeld.'],
    [55, 'المزاح محبب للنفوس، ولا بأس به ما دام في حدود الشرع ولا يترتب عليه ضرر، بل هو مستحب.', 'Schertsen is geliefd bij de zielen; er is geen bezwaar in binnen de grenzen van de sharīʿa en zonder schade, het is zelfs gewenst.'],
    [55, 'كان ﷺ يمزح ولا يقول إلا حقا.', 'Hij ﷺ schertste, maar zei alleen de waarheid.']
  ],
  terms: [
    ['اللهوات', 'al-lahawāt', 52, 'اللحمة التي بأعلى الحنجرة.', 'Het vlees bovenaan de keel.'],
    ['النواجذ', 'an-nawājidh', 52, 'أقصى الأضراس، ولا تكاد تظهر إلا عند المبالغة في الضحك.', 'De achterste kiezen, die bijna alleen bij overdreven lachen zichtbaar worden.'],
    ['السهوة', 'as-sahwa', 53, 'شيء كالرف في البيت.', 'Iets als een plank of nis in het huis.'],
    ['الظهار', 'aẓ-ẓihār', 55, 'أن يقول الرجل لزوجته: أنت علي كظهر أمي.', 'Dat een man tegen zijn vrouw zegt: jij bent voor mij als de rug van mijn moeder.'],
    ['النغير', 'an-nughayr', 56, 'طائر صغير كان يلعب به أبو عمير.', 'Een vogeltje waarmee Abū ʿUmayr speelde.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['من مزاحه ﷺ', 'Voorbeelden van zijn schertsen'],
      intro: ['كما في الصفحة ٥٦.', 'Zoals op p. 56.'],
      nodes: [
        [56, 'ولد الناقة', 'Het jong van een kameel', 'وهل تلد الإبل إلا النوق', 'zijn kamelen niet allemaal jongen van een kameelmerrie?'],
        [56, 'أبو عمير', 'Abū ʿUmayr', 'ما فعل النغير', 'wat deed het vogeltje?'],
        [56, 'صهيب', 'Ṣuhayb', 'إن بعينك رمدا', 'je hebt een oogontsteking'],
        [56, 'عوف بن مالك', 'ʿAwf ibn Mālik', 'ادخل كلك', 'kom helemaal binnen']
      ]
    }
  ],
  sections: [
    [54, 'هيبة النساء لعمر', 'Het ontzag van de vrouwen voor ʿUmar', 'كان عند النبي ﷺ نساء من قريش عالية أصواتهن، فلما استأذن عمر بادرن الحجاب، فضحك النبي ﷺ تعجبا منهن.', 'Bij de Profeet ﷺ waren vrouwen van Quraysh met luide stemmen; toen ʿUmar toestemming vroeg, haastten zij zich achter de afscherming, en de Profeet ﷺ lachte uit verwondering over hen.'],
    [55, 'المظاهر الذي جامع قبل أن يكفر', 'De man die vóór de boete gemeenschap had', 'ضحك النبي ﷺ من اعتذاره، وأمره ألا يقربها حتى يكفر، لقوله تعالى: ﴿من قبل أن يتماسا﴾ [المجادلة: 3].', 'De Profeet ﷺ lachte om zijn verontschuldiging en beval hem haar niet te naderen tot hij boete had gedaan, wegens het vers "voordat zij elkaar aanraken" (58:3).']
  ],
  keycards: [
    ['opsomming', 52, 'أسباب ضحكه ﷺ', 'Redenen waarom hij lachte', ['التلطف والإيناس', 'المشاركة في الفرح', 'إقرار خبر', 'الفرح ببعض المواقف', 'التعجب', 'سماع ما يضحك'], ['vriendelijkheid en gezelligheid', 'gedeelde vreugde', 'bevestiging van een bericht', 'blijdschap bij een situatie', 'verwondering', 'iets grappigs horen']],
    ['voorwaarde', 55, 'ضوابط المزاح', 'Voorwaarden voor schertsen', ['أن يكون في حدود الشرع', 'ألا يترتب عليه ضرر', 'ألا يقال فيه إلا الحق'], ['binnen de grenzen van de sharīʿa', 'zonder schade', 'alleen de waarheid zeggen']]
  ],
  hadith: [
    { text: 'ما كان ضحك رسول الله ﷺ إلا تبسما', takhrij: 'رواه الترمذي، وصححه الألباني', takhrijNl: 'at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'عبد الله بن الحارث', narratorNl: 'ʿAbd Allāh ibn al-Ḥārith', nl: 'Het lachen van de Boodschapper van Allah ﷺ was niets anders dan glimlachen', pages: [52] },
    { text: 'ما رأيت النبي ﷺ مستجمعا قط ضاحكا حتى أرى منه لهواته، إنما كان يتبسم', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Ik heb de Profeet ﷺ nooit zo uitbundig zien lachen dat ik zijn keel zag; hij glimlachte alleen', pages: [52] },
    { text: 'ما هذا يا عائشة؟ … فرس له جناحان؟!', takhrij: 'أخرجه أبو داود، وصححه الألباني', takhrijNl: 'Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'عن بناتها وفرس له جناحان من رقاع؛ قالت: فضحك حتى رأيت نواجذه.', nlNote: 'Over haar poppen en een paard met vleugels van lappen; zij zei: hij lachte tot ik zijn kiezen zag.', nl: 'Wat is dit, ʿĀʾisha? … Een paard met twee vleugels?!', pages: [53] },
    { text: 'هلا جارية تلاعبها وتلاعبك، أو تضاحكها وتضاحكك', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', note: 'قاله لجابر بن عبد الله لما تزوج.', nlNote: 'Gezegd tegen Jābir ibn ʿAbd Allāh toen hij trouwde.', nl: 'Waarom niet een jong meisje met wie je speelt en die met jou speelt, of met wie je lacht en die met jou lacht?', pages: [53] },
    { text: 'وكانوا يتحدثون فيأخذون في أمر الجاهلية، فيضحكون ويتبسم', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'جابر بن سمرة', narratorNl: 'Jābir ibn Samura', nl: 'Zij spraken met elkaar en kwamen op zaken uit de jāhiliyya; dan lachten zij en glimlachte hij', pages: [54] },
    { text: 'يا ابن الخطاب، والذي نفسي بيده، ما لقيك الشيطان سالكا فجا إلا سلك فجا غير فجك', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'سعد بن أبي وقاص', narratorNl: 'Saʿd ibn Abī Waqqāṣ', nl: 'O zoon van al-Khaṭṭāb, bij Hem in Wiens hand mijn ziel is: nooit ontmoet de duivel jou op een weg of hij neemt een andere weg dan de jouwe', pages: [54] },
    { text: 'ما حملك على ذلك؟', takhrij: 'أخرجه أبو داود والترمذي وابن ماجه، وحسنه الألباني', takhrijNl: 'Abū Dāwūd, at-Tirmidhī en Ibn Māja; ḥasan volgens al-Albānī', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'فضحك رسول الله ﷺ، وأمره ألا يقربها حتى يكفر.', nlNote: 'De Boodschapper ﷺ lachte en beval hem haar niet te naderen tot hij boete had gedaan.', nl: 'Wat bracht je daartoe?', pages: [55] },
    { text: 'إنا حاملوك على ولد ناقة … وهل تلد الإبل إلا النوق', takhrij: 'رواه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Wij geven jou het jong van een kameel als rijdier … Werpen kamelen iets anders dan jongen van een kameelmerrie?', pages: [56] },
    { text: 'يا أبا عمير، ما فعل النغير', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس', narratorNl: 'Anas', nl: 'O Abū ʿUmayr, wat heeft het vogeltje gedaan?', pages: [56] },
    { text: 'ادن فكل … إن بعينك رمدا', takhrij: 'رواه أحمد وابن ماجه، وحسنه الألباني', takhrijNl: 'Aḥmad en Ibn Māja; ḥasan volgens al-Albānī', narrator: 'صهيب', narratorNl: 'Ṣuhayb', note: 'فقال: إنما آكل على الشق الآخر، فتبسم النبي ﷺ.', nlNote: 'Hij zei: ik eet alleen aan de andere kant; de Profeet ﷺ glimlachte.', nl: 'Kom dichterbij en eet … Je hebt een ontsteking aan je oog', pages: [56] },
    { text: 'ادخل … كلك', takhrij: 'أخرجه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', narrator: 'عوف بن مالك الأشجعي', narratorNl: 'ʿAwf ibn Mālik al-Ashjaʿī', note: 'في غزوة تبوك وهو في قبة من أدم.', nlNote: 'Tijdens de veldtocht van Tabūk, terwijl hij in een leren tent was.', nl: 'Kom binnen … Helemaal', pages: [56] }
  ],
  persons: [
    ['ibn-hajar-al-asqalani', 'text', [52], 'بين أن أكثر ضحكه ﷺ التبسم.', 'Legde uit dat zijn lachen meestal glimlachen was.'],
    ['aisha', 'text', [52, 53], 'روت صفة ضحكه وقصة بناتها.', 'Overleverde hoe hij lachte en het verhaal van haar poppen.'],
    ['jabir-ibn-abdallah', 'text', [53], 'قال له: «هلا جارية تلاعبها».', 'Tegen hem zei hij: "waarom geen jong meisje om mee te spelen".'],
    ['simak-ibn-harb', 'text', [54], 'سأل جابر بن سمرة عن مجالسته ﷺ.', 'Vroeg Jābir ibn Samura naar het zitten bij de Profeet ﷺ.'],
    ['jabir-ibn-samura', 'text', [54], 'جالس النبي ﷺ أكثر من مئة مرة.', 'Zat meer dan honderd keer bij de Profeet ﷺ.'],
    ['sad-ibn-abi-waqqas', 'text', [54], 'روى قصة هيبة النساء لعمر.', 'Overleverde het verhaal van het ontzag van de vrouwen voor ʿUmar.'],
    ['umar-ibn-al-khattab', 'text', [54], 'هابه النساء، وما لقيه الشيطان في فج إلا سلك غيره.', 'De vrouwen hadden ontzag voor hem; de duivel ontweek elke weg die hij nam.'],
    ['ibn-abbas', 'text', [55], 'روى قصة المظاهر.', 'Overleverde het verhaal van de man van ẓihār.'],
    ['anas-ibn-malik', 'text', [56], 'روى ممازحته ﷺ لأخيه أبي عمير.', 'Overleverde hoe hij schertste met zijn broer Abū ʿUmayr.'],
    ['suhayb-ar-rumi', 'text', [56], 'مازحه النبي ﷺ في أكله التمر.', 'De Profeet ﷺ schertste met hem toen hij dadels at.'],
    ['awf-ibn-malik', 'text', [56], 'قال له: «ادخل كلك» في تبوك.', 'Tegen hem zei hij in Tabūk: "kom helemaal binnen".']
  ],
  review: [
    ['كان أكثر ضحكه ﷺ التبسم، والمكروه الإكثار منه.', 'Hij glimlachte meestal; afgekeurd is veel lachen.'],
    ['ضحك مع أهله وحث على ملاعبة الزوجة.', 'Hij lachte met zijn gezin en spoorde aan met de echtgenote te spelen.'],
    ['تبسم مشاركة لأصحابه وتعجبا من أحوالهم.', 'Hij glimlachte met zijn metgezellen mee en uit verwondering over hun situaties.'],
    ['كان يمزح ولا يقول إلا حقا.', 'Hij schertste en zei alleen de waarheid.']
  ],
  quiz: [
    { type: 'mc', page: 52, q: ['ما الغالب على ضحكه ﷺ؟', 'Wat overheerste in zijn lachen ﷺ?'], options: [['التبسم', 'القهقهة', 'الضحك حتى تبدو اللهوات', 'لم يكن يضحك'], ['glimlachen', 'schaterlachen', 'lachen tot de keel zichtbaar werd', 'hij lachte nooit']], answer: 0, explain: ['«ما كان ضحك رسول الله ﷺ إلا تبسما».', '"Zijn lachen was niets anders dan glimlachen".'] },
    { type: 'tf', page: 55, q: ['من جامع زوجته بعد الظهار وقبل الكفارة سقطت عنه الكفارة.', 'Wie na ẓihār en vóór de boete gemeenschap had, hoeft geen boete meer te doen.'], answer: 1, explain: ['لا تسقط الكفارة ولا تتضاعف.', 'De boete vervalt niet en wordt niet verdubbeld.'] },
    { type: 'mc', page: 56, q: ['ماذا قال النبي ﷺ لأبي عمير؟', 'Wat zei de Profeet ﷺ tegen Abū ʿUmayr?'], options: [['يا أبا عمير، ما فعل النغير', 'ادن فكل', 'ادخل كلك', 'إن بعينك رمدا'], ['o Abū ʿUmayr, wat deed het vogeltje?', 'kom dichterbij en eet', 'kom helemaal binnen', 'je hebt een oogontsteking']], answer: 0, explain: ['كما في حديث أنس.', 'Zoals in de hadith van Anas.'] },
    { type: 'tf', page: 55, q: ['كان النبي ﷺ يمزح ولا يقول إلا حقا.', 'De Profeet ﷺ schertste, maar zei alleen de waarheid.'], answer: 0, explain: ['كما في الصفحة ٥٥.', 'Zoals op p. 55.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٥٦.', 'Oefening van het boek op p. 56. De Nederlandse weergave van hadith geeft de betekenis weer; het is geen vertaling.']
})
