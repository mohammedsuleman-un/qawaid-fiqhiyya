// Hoofdstukkaart bij الفقه (٢), eenheid 4: صلاة أهل الأعذار وصلاة العيدين (lessen 14–17, boek p. 55–67).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Niet overgenomen: de hadith over al-Aʿlā en al-Ghāshiya in de ʿīd (p. 65), omdat het boek hem aan
// Samura bij Muslim toeschrijft en die toeschrijving nagekeken moet worden; de oefenvraag over
// moeder- en valentijnsdag (p. 67). De tweede overlevering van "Allah heeft ze vervangen" (Anas,
// Abū Dāwūd, p. 63) staat als opmerking bij de eerste.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '55–67',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: '', text: 'إذا أمرتكم بأمر فأتوا منه ما استطعتم', takhrij: 'متفق عليه', note: 'دليل وجوب القيام قدر الاستطاعة.', pages: [55], nl: 'Als ik jullie iets beveel, doe er dan van wat jullie kunnen', nlNote: 'Bewijs dat je moet staan zoveel als je kunt.' },
  { narrator: 'عمران بن حصين', text: 'صل قائما، فإن لم تستطع فقاعدا، فإن لم تستطع فعلى جنب', takhrij: 'رواه البخاري', note: '', pages: [55], nl: 'Bid staand; kun je dat niet, dan zittend; kun je dat niet, dan op je zij', nlNote: '' },
  { narrator: 'عبد الله بن عمر', text: 'صحبت رسول الله ﷺ في السفر فلم يزد على ركعتين حتى قبضه الله، وصحبت أبا بكر وعمر وعثمان كذلك', takhrij: 'في الصحيحين', note: '', pages: [56], nl: 'Ik vergezelde de Boodschapper van Allah ﷺ op reis en hij bad niet meer dan twee rakʿa’s tot Allah hem tot Zich nam; en zo ook Abū Bakr, ʿUmar en ʿUthmān', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'تلك سنة أبي القاسم ﷺ', takhrij: 'أحمد وصححه الألباني', note: 'لما سئل عن المسافر يصلي خلف المقيم أربعًا. ' + FYI_NOTE, pages: [57], nl: 'Dat is de sunna van Abū al-Qāsim ﷺ', nlNote: 'Toen hem gevraagd werd naar de reiziger die achter een ingezetene vier rakʿa’s bidt. ' + FYI_NOTE_NL },
  { narrator: '', text: 'من نام عن صلاة أو نسيها فليصلها إذا ذكرها', takhrij: 'البخاري ومسلم', note: 'من ذكر صلاة حضر في سفر صلاها تامة. ' + FYI_NOTE, pages: [57], nl: 'Wie een gebed verslaapt of vergeet, laat hij het bidden zodra hij eraan denkt', nlNote: 'Wie op reis een gebed van thuis inhaalt, bidt het volledig. ' + FYI_NOTE_NL },
  { narrator: 'أنس بن مالك', text: 'كان رسول الله ﷺ إذا ارتحل قبل أن تزيغ الشمس أخر الظهر إلى وقت العصر ثم نزل فجمع بينهما، فإن زاغت الشمس قبل أن يرتحل صلى الظهر ثم ركب', takhrij: 'متفق عليه', note: '', pages: [58], nl: 'Als de Boodschapper van Allah ﷺ vertrok voordat de zon overhelde, stelde hij ẓuhr uit tot de tijd van ʿaṣr, stopte dan en voegde ze samen; helde de zon over voordat hij vertrok, dan bad hij ẓuhr en reed daarna verder', nlNote: '' },
  { narrator: 'عبد الله بن عباس', text: 'وإذا حانت له المغرب في منزله جمع بينها وبين العشاء، وإذا لم تحن في منزله ركب حتى إذا حانت العشاء نزل فجمع بينهما', takhrij: 'أحمد وصححه الألباني في الإرواء', note: '', pages: [58], nl: 'Als de tijd van maghrib aanbrak terwijl hij nog op zijn rustplaats was, voegde hij die samen met ʿishāʾ; brak die niet aan op zijn rustplaats, dan reed hij tot de tijd van ʿishāʾ aanbrak, stopte en voegde ze samen', nlNote: '' },
  { narrator: 'معاذ بن جبل', text: 'خرجنا مع رسول الله ﷺ في غزوة تبوك، فكان يصلي الظهر والعصر جميعا، والمغرب والعشاء جميعا', takhrij: 'رواه مسلم', note: 'وفي لفظ: ثم دخل ثم خرج فصلى المغرب والعشاء جميعًا؛ دليل الجمع للنازل.', pages: [58, 59], nl: 'Wij trokken met de Boodschapper van Allah ﷺ uit naar Tabūk; hij bad ẓuhr en ʿaṣr samen, en maghrib en ʿishāʾ samen', nlNote: 'In een andere bewoording: hij ging naar binnen, kwam weer naar buiten en bad maghrib en ʿishāʾ samen; bewijs voor samenvoegen wie op een plek verblijft.' },
  { narrator: 'أسامة بن زيد', text: 'دفع من عرفة، فلما جاء المزدلفة نزل فتوضأ، ثم أقيمت الصلاة فصلى المغرب، ثم أناخ كل إنسان بعيره في منزله، ثم أقيمت العشاء فصلاها، ولم يصل بينهما شيئا', takhrij: 'في الصحيحين', note: 'الموالاة لا تشترط في الجمع.', pages: [59], nl: 'Hij vertrok van ʿArafa; toen hij in Muzdalifa kwam, stopte hij en verrichtte de wassing. Toen werd de iqāma gedaan en bad hij maghrib; daarna liet iedereen zijn kameel neerknielen bij zijn plek, toen werd de iqāma voor ʿishāʾ gedaan en bad hij die, en daartussen bad hij niets', nlNote: 'De gebeden hoeven bij samenvoegen niet direct na elkaar.' },
  { narrator: '', text: 'قد أبدلكم الله بهما خيرا منهما، يوم النحر ويوم الفطر', takhrij: 'النسائي وصححه الألباني', note: 'ورواه أبو داود عن أنس بلفظ: «إن الله قد أبدلكم بهما خيرًا منهما يوم الأضحى ويوم الفطر» (ص٦٣).', pages: [62, 63], nl: 'Allah heeft ze voor jullie vervangen door iets beters: de dag van het offer en de dag van het verbreken van het vasten', nlNote: 'Abū Dāwūd overleverde het via Anas in een vergelijkbare bewoording (p. 63).' },
  { narrator: 'أم عطية', text: 'أمرنا أن نخرج العواتق والحيض في العيدين، يشهدن الخير ودعوة المسلمين، ويعتزل الحيض المصلى', takhrij: 'متفق عليه', note: 'العواتق: الأبكار البالغات أو من شارفن البلوغ.', pages: [62, 63], nl: 'Ons werd opgedragen de jonge vrouwen en de menstruerende vrouwen op de twee ʿīds mee naar buiten te nemen, zodat zij het goede en de smeekbede van de moslims meemaken; de menstruerende vrouwen blijven weg van de gebedsplaats', nlNote: 'ʿAwātiq: meisjes die volwassen zijn of dat bijna zijn.' },
  { narrator: 'أم عطية', text: 'كنا نؤمر أن نخرج يوم العيد حتى تخرج البكر من خدرها، وحتى تخرج الحيض، فيكن خلف الناس فيكبرن بتكبيرهم ويدعون بدعائهم، يرجون بركة ذلك اليوم وطهرته', takhrij: 'متفق عليه', note: '', pages: [63], nl: 'Ons werd opgedragen op de dag van ʿīd naar buiten te gaan, zodat zelfs het meisje uit haar vertrek kwam en de menstruerende vrouwen ook; zij stonden achter de mensen, zeiden takbīr met hen en smeekten met hen, hopend op de zegen en reiniging van die dag', nlNote: '' },
  { narrator: 'أبو سعيد الخدري', text: 'كان النبي ﷺ يخرج في الفطر والأضحى إلى المصلى', takhrij: 'البخاري ومسلم', note: 'السنة أن تصلى في المصلى لا في المسجد إلا لعذر، ويستثنى المسجد الحرام.', pages: [63], nl: 'De Profeet ﷺ ging op het Suikerfeest en het Offerfeest naar de gebedsplaats buiten', nlNote: 'Sunna is buiten bidden en niet in de moskee, tenzij er een reden is; de Heilige Moskee is een uitzondering.' },
  { narrator: 'عبد الله بن عباس', text: 'خرج يوم الفطر فصلى ركعتين لم يصل قبلهما ولا بعدهما', takhrij: 'في الصحيحين', note: '', pages: [64], nl: 'Hij ging op de dag van het Suikerfeest naar buiten en bad twee rakʿa’s; daarvoor en daarna bad hij niets', nlNote: '' },
  { narrator: 'عبد الله بن عمر', text: 'كان النبي ﷺ وأبو بكر وعمر يصلون العيدين قبل الخطبة', takhrij: 'البخاري ومسلم', note: '', pages: [64], nl: 'De Profeet ﷺ, Abū Bakr en ʿUmar baden de twee ʿīd-gebeden vóór de preek', nlNote: '' },
  { narrator: 'عبد الله بن عمرو بن العاص', text: 'التكبير في الفطر سبع في الأولى وخمس في الآخرة، والقراءة بعدهما كلتيهما', takhrij: 'أبو داود وحسنه الألباني', note: '', pages: [65], nl: 'De takbīrs op het Suikerfeest zijn zeven in de eerste en vijf in de laatste rakʿa, en de recitatie komt in beide daarna', nlNote: '' },
  { narrator: '', text: 'كان يقرأ فيهما بـ﴿ق والقرآن المجيد﴾ و﴿اقتربت الساعة وانشق القمر﴾', takhrij: 'رواه مسلم', note: '', pages: [65], nl: 'Hij reciteerde daarin soera Qāf en soera al-Qamar', nlNote: '' },
  { narrator: 'أنس بن مالك', text: 'كان النبي ﷺ لا يغدو يوم الفطر حتى يأكل تمرات، ويأكلهن وترا', takhrij: 'رواه البخاري', note: '', pages: [65], nl: 'De Profeet ﷺ ging op de dag van het Suikerfeest niet op weg voordat hij dadels had gegeten, en hij at er een oneven aantal', nlNote: '' },
  { narrator: 'علي بن أبي طالب', text: 'من السنة أن يخرج إلى العيد ماشيا', takhrij: 'الترمذي وحسنه', note: '', pages: [65], nl: 'Het is sunna om te voet naar de ʿīd te gaan', nlNote: '' },
  { narrator: 'جابر بن عبد الله', text: 'كان النبي ﷺ إذا كان يوم عيد خالف الطريق', takhrij: 'رواه البخاري', note: '', pages: [65], nl: 'Op een ʿīd-dag nam de Profeet ﷺ terug een andere weg', nlNote: '' },
  { narrator: 'أبو عمير بن أنس', text: 'غم علينا هلال شوال فأصبحنا صياما، فجاء ركب في آخر النهار فشهدوا أنهم رأوا الهلال بالأمس، فأمر النبي ﷺ الناس أن يفطروا من يومهم وأن يخرجوا غدا لعيدهم', takhrij: 'رواه الخمسة إلا الترمذي وصححه الألباني', note: 'عن عمومة له من الأنصار؛ من لم يعلم بالعيد إلا بعد الزوال صلى من الغد. ' + FYI_NOTE, pages: [66], nl: 'De nieuwe maan van Shawwāl was voor ons bewolkt, dus wij vastten de volgende ochtend. Aan het eind van de dag kwam een groep ruiters die getuigde dat zij de maan de avond ervoor hadden gezien. De Profeet ﷺ droeg de mensen op die dag hun vasten te verbreken en de volgende dag naar buiten te gaan voor hun ʿīd', nlNote: 'Via zijn ooms van de Anṣār; wie pas na het middaguur van de ʿīd hoort, bidt de volgende dag. ' + FYI_NOTE_NL },
  { narrator: 'جابر بن سمرة', text: 'صليت مع النبي ﷺ العيد غير مرة ولا مرتين، فبدأ بالصلاة قبل الخطبة بغير أذان ولا إقامة', takhrij: 'رواه مسلم', note: FYI_NOTE, pages: [66], nl: 'Ik bad meer dan eens of twee keer het ʿīd-gebed met de Profeet ﷺ; hij begon met het gebed vóór de preek, zonder adhān en zonder iqāma', nlNote: FYI_NOTE_NL },
  { narrator: 'أبو هريرة', text: 'اجتمع عيدان في يومكم هذا، فمن شاء أجزأه من الجمعة، وإنا مجمعون', takhrij: 'أبو داود وصححه الألباني', note: 'إذا وافق العيد يوم الجمعة.', pages: [66], nl: 'Op deze dag van jullie vallen twee feesten samen; wie wil, voor hem volstaat dit in plaats van het vrijdaggebed, maar wij houden het vrijdaggebed', nlNote: 'Als de ʿīd op een vrijdag valt.' }
]

const TAKHRIJ_NL = {
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه البخاري': 'al-Bukhārī',
  'في الصحيحين': 'al-Bukhārī en Muslim',
  'أحمد وصححه الألباني': 'Aḥmad; al-Albānī noemde hem ṣaḥīḥ',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أحمد وصححه الألباني في الإرواء': 'Aḥmad; al-Albānī noemde hem ṣaḥīḥ in al-Irwāʾ',
  'رواه مسلم': 'Muslim',
  'النسائي وصححه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وحسنه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ḥasan',
  'الترمذي وحسنه': 'at-Tirmidhī, die hem ḥasan noemde',
  'رواه الخمسة إلا الترمذي وصححه الألباني': 'de vijf behalve at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ',
  'أبو داود وصححه الألباني': 'Abū Dāwūd; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'عمران بن حصين': 'ʿImrān ibn Ḥuṣayn', 'عبد الله بن عمر': 'ʿAbd Allāh ibn ʿUmar', 'عبد الله بن عباس': 'ʿAbd Allāh ibn ʿAbbās', 'أنس بن مالك': 'Anas ibn Mālik', 'معاذ بن جبل': 'Muʿādh ibn Jabal', 'أسامة بن زيد': 'Usāma ibn Zayd', 'أم عطية': 'Umm ʿAṭiyya', 'أبو سعيد الخدري': 'Abū Saʿīd al-Khudrī', 'عبد الله بن عمرو بن العاص': 'ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ', 'علي بن أبي طالب': 'ʿAlī ibn Abī Ṭālib', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'أبو عمير بن أنس': 'Abū ʿUmayr ibn Anas', 'جابر بن سمرة': 'Jābir ibn Samura', 'أبو هريرة': 'Abū Hurayra' }

const PERSONS = [
  ['imran-ibn-husayn', 'text', [55], 'قال له النبي ﷺ: «صل قائمًا، فإن لم تستطع فقاعدًا».', 'De Profeet ﷺ zei tegen hem: "Bid staand; kun je dat niet, dan zittend."'],
  ['ibn-umar', 'text', [56, 64], 'روى مداومة النبي ﷺ وخلفائه على القصر في السفر، وصلاتهم العيد قبل الخطبة.', 'Overleverde dat de Profeet ﷺ en zijn opvolgers op reis steeds inkortten, en het ʿīd-gebed vóór de preek baden.'],
  ['abu-bakr-as-siddiq', 'text', [56, 64], 'كان يقصر في السفر، ويصلي العيد قبل الخطبة.', 'Kortte op reis in en bad het ʿīd-gebed vóór de preek.'],
  ['umar-ibn-al-khattab', 'text', [56, 64], 'كان يقصر في السفر، ويصلي العيد قبل الخطبة.', 'Kortte op reis in en bad het ʿīd-gebed vóór de preek.'],
  ['ibn-al-mundhir', 'text', [56], 'نقل الإجماع على أن المسافر يقصر ما لم يجمع إقامة.', 'Gaf de consensus dat de reiziger inkort zolang hij niet besluit te blijven.'],
  ['ibn-abbas', 'text', [57, 58, 64], 'قال: «تلك سنة أبي القاسم ﷺ»، وروى الجمع في السفر وصلاة العيد بلا نافلة قبلها ولا بعدها.', 'Zei: "Dat is de sunna van Abū al-Qāsim ﷺ"; overleverde het samenvoegen op reis en dat er vóór en na het ʿīd-gebed niets gebeden werd.'],
  ['anas-ibn-malik', 'text', [58, 63, 65], 'روى الجمع في السفر، وإبدال أعياد الجاهلية، وأكل التمرات قبل الخروج للفطر.', 'Overleverde het samenvoegen op reis, de vervanging van de feesten van vóór de islam, en het eten van dadels vóór het Suikerfeest.'],
  ['muadh-ibn-jabal', 'text', [58, 59], 'روى الجمع في غزوة تبوك.', 'Overleverde het samenvoegen tijdens de tocht naar Tabūk.'],
  ['usama-ibn-zayd', 'text', [59], 'روى صلاة المغرب والعشاء بمزدلفة مع الفصل بينهما.', 'Overleverde het gebed van maghrib en ʿishāʾ in Muzdalifa met een onderbreking ertussen.'],
  ['ibn-uthaymin', 'text', [60], 'ذكر كيف يأتي بالأذكار بعد الصلاتين المجموعتين.', 'Beschreef hoe hij de gedenkformules na twee samengevoegde gebeden zegt.'],
  ['ibn-taymiyya', 'text', [62], 'قال: الأعياد من جملة الشرع والمناهج والمناسك.', 'Zei: feesten horen bij de wetten, wegen en riten.'],
  ['umm-atiyya', 'text', [62, 63], 'روت أمر النساء بالخروج إلى العيد حتى الحيض.', 'Overleverde dat de vrouwen werd opgedragen naar de ʿīd te gaan, ook de menstruerende vrouwen.'],
  ['abu-said-al-khudri', 'text', [63], 'روى خروج النبي ﷺ إلى المصلى في العيدين.', 'Overleverde dat de Profeet ﷺ op beide ʿīds naar de gebedsplaats buiten ging.'],
  ['abdallah-ibn-amr', 'text', [65], 'روى عدد التكبيرات في صلاة العيد.', 'Overleverde het aantal takbīrs in het ʿīd-gebed.'],
  ['ali-ibn-abi-talib', 'text', [65], 'قال: «من السنة أن يخرج إلى العيد ماشيًا».', 'Zei: "Het is sunna om te voet naar de ʿīd te gaan."'],
  ['jabir-ibn-abdallah', 'text', [65], 'روى مخالفة الطريق يوم العيد.', 'Overleverde het nemen van een andere weg terug op de ʿīd-dag.'],
  ['abu-umama', 'text', [66], 'كان مع الصحابة يقولون إذا رجعوا من العيد: تقبل الله منا ومنك.', 'Zei met andere metgezellen bij terugkeer van de ʿīd: "Moge Allah het van ons en van jou aannemen."'],
  ['jabir-ibn-samura', 'text', [66], 'روى صلاة العيد بغير أذان ولا إقامة.', 'Overleverde het ʿīd-gebed zonder adhān en iqāma.'],
  ['abu-hurayra', 'text', [66], 'روى «اجتمع عيدان في يومكم هذا».', 'Overleveraar van "op deze dag vallen twee feesten samen".']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'صلاة أهل الأعذار وصلاة العيدين',
  subtitle: 'أربعة دروس مجموعة في صفحة واحدة',
  summary: 'صلاة المريض والمسافر: القيام قدر الاستطاعة، والقصر ومدته وما يستثنى منه، ثم الجمع بين الصلاتين وأسبابه وأقسامه ومسائله، ثم صلاة العيدين: حكمها ومكانها ووقتها وصفتها وسننها ومسائلها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'أهل الأعذار ثم العيدان.',
    root: { label: 'الأعذار والعيدان', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'صلاة أهل الأعذار', sub: 'الدرس ١٤', page: 55, children: ['صلاة المريض', 'القصر في السفر', 'ما يستثنى من القصر'] },
      { label: 'الجمع بين الصلاتين', sub: 'الدرس ١٥', page: 58, children: ['مناطه المشقة', 'تقديم وتأخير', 'مسائل الجمع'] },
      { label: 'صلاة العيدين', sub: 'الدرس ١٦', page: 62, children: ['فرض كفاية', 'خروج النساء', 'في المصلى'] },
      { label: 'كيفيتها وسننها', sub: 'الدرس ١٧', page: 64, children: ['الصلاة قبل الخطبة', 'التكبيرات الزوائد', 'من السنن'] }
    ]
  },
  points: [
    { text: 'يجب القيام في المكتوبة قدر الاستطاعة، فإن لم يستطع فقاعدًا، فإن لم يستطع فعلى جنب.', page: 55 },
    { text: 'لا تسقط الصلاة ما دام العقل ثابتًا، ولو بالإيماء.', page: 55 },
    { text: 'القصر جعل الرباعية ركعتين، ويشرع في كل ما يسمى سفرًا عرفًا ما دام مسافرًا.', page: 56 },
    { text: 'يبدأ القصر بعد مفارقة بنيان البلد.', page: 56 },
    { text: 'مناط الجمع المشقة لا السفر، فيجمع للسفر والمرض والخوف والمطر.', page: 58 },
    { text: 'لا تجمع الجمعة مع العصر، فالجمعة صلاة مستقلة.', page: 59 },
    { text: 'صلاة العيد فرض كفاية عند الكتاب، وتصلى في المصلى، وأمر النساء بالخروج إليها.', page: 62 },
    { text: 'صلاة العيد ركعتان قبل الخطبة، بلا أذان ولا إقامة.', page: 64 }
  ],
  terms: [
    { term: 'أهل الأعذار', translit: 'ahl al-aʿdhār', meaning: 'من لا يستطيع أداء الصلاة على وجهها الأكمل، كالمرضى والمسافرين والخائفين.', explanation: '', notes: [], page: 55 },
    { term: 'الإيماء', translit: 'al-īmāʾ', meaning: 'الإشارة بالرأس للركوع والسجود، والسجود أخفض.', explanation: '', notes: [], page: 55 },
    { term: 'القصر', translit: 'al-qaṣr', meaning: 'جعل الصلاة الرباعية ركعتين.', explanation: '', notes: [], page: 56 },
    { term: 'الجمع', translit: 'al-jamʿ', meaning: 'أداء فرضين في وقت أحدهما.', explanation: 'الظهر مع العصر، والمغرب مع العشاء.', notes: [], page: 58 },
    { term: 'جمع التقديم', translit: 'jamʿ at-taqdīm', meaning: 'أن يصلي الثانية في وقت الأولى.', explanation: '', notes: [], page: 59 },
    { term: 'جمع التأخير', translit: 'jamʿ at-taʾkhīr', meaning: 'أن يصلي الأولى في وقت الثانية.', explanation: '', notes: [], page: 59 },
    { term: 'العيد', translit: 'al-ʿīd', meaning: 'سمي عيدًا لأنه يعود ويتكرر.', explanation: '', notes: [], page: 62 },
    { term: 'العواتق', translit: 'al-ʿawātiq', meaning: 'الأبكار البالغات، أو اللاتي شارفن البلوغ.', explanation: '', notes: [], page: 62 },
    { term: 'المصلى', translit: 'al-muṣallā', meaning: 'المكان الذي تصلى فيه صلاة العيد خارج المسجد.', explanation: '', notes: [], page: 63 },
    { term: 'التكبيرات الزوائد', translit: 'at-takbīrāt az-zawāʾid', meaning: 'ست في الأولى بعد الاستفتاح، وخمس في الثانية قبل القراءة.', explanation: 'سنة فات محلها إن نسيها حتى شرع في القراءة.', notes: [], page: 65 }
  ],
  diagrams: [
    {
      type: 'flow',
      title: 'صلاة المريض',
      intro: 'ينتقل إلى ما بعده عند العجز عما قبله.',
      nodes: [
        { label: 'قائمًا', sub: 'ولو مستندًا على عصا أو جدار' },
        { label: 'قاعدًا', sub: 'يومئ برأسه إلى صدره' },
        { label: 'على جنب', sub: 'حديث عمران بن حصين' },
        { label: 'بالإيماء', sub: 'ما دام عقله ثابتًا' },
        { label: 'بالنية في القلب', sub: 'وتلزمه الأقوال إن قدر على النطق' }
      ],
      page: 55
    },
    {
      type: 'compare',
      title: 'القصر والجمع',
      intro: 'كما في الدرسين ١٤ و١٥.',
      columns: ['القصر', 'الجمع'],
      rows: [
        { label: 'المعنى', cells: ['جعل الرباعية ركعتين', 'فرضان في وقت أحدهما'] },
        { label: 'سببه', cells: ['السفر', 'المشقة: السفر والمرض والخوف والمطر'] },
        { label: 'الصلوات', cells: ['الظهر والعصر والعشاء', 'الظهر مع العصر، والمغرب مع العشاء'] }
      ],
      page: 58
    },
    {
      type: 'compare',
      title: 'التكبيرات في صلاة العيد',
      intro: 'كما في الدرس السابع عشر.',
      columns: ['عددها', 'موضعها'],
      rows: [
        { label: 'الركعة الأولى', cells: ['ست زوائد', 'بعد تكبيرة الإحرام والاستفتاح وقبل التعوذ'] },
        { label: 'الركعة الثانية', cells: ['خمس', 'قبل القراءة غير تكبيرة القيام'] }
      ],
      page: 65
    }
  ],
  sections: [
    { title: 'ما يستثنى من القصر (للاطلاع فقط)', text: 'يتم المسافر إذا ائتم بمقيم، أو نوى الإقامة المطلقة، أو ائتم بمن يشك فيه، أو ذكر صلاة حضر في سفر؛ ومن فاتته صلاة في السفر فذكرها في الحضر فله القصر والأحوط الإتمام.', more: FYI, page: 57 },
    { title: 'الإتمام في السفر', text: 'كره بعض أهل العلم الإتمام في السفر لشدة مداومة النبي ﷺ وأصحابه على القصر.', page: 56 },
    { title: 'المطر المبيح للجمع', text: 'الكثير الغزير الذي تلحق بسببه مشقة، والثلج، والوحل والطين، والريح الشديدة الباردة.', page: 58 },
    { title: 'مسائل في الجمع', text: 'إذا وصل البلد فالسنة أن يصلي كل صلاة في وقتها وإن جمع فلا حرج، ولا يعيد إن زال السبب بعد الجمع، ولا تشترط الموالاة، ويؤذن أذانًا واحدًا ويقيم لكل صلاة.', page: 59 },
    { title: 'الرواتب والأذكار عند الجمع', text: 'في الحضر يصلي الراتبة بين الصلاتين إن أمكن وإلا بعد الجمع، وفي السفر لا تسن الرواتب؛ ولا يلزم المأموم أن ينوي القصر أو الجمع عند الإحرام، ومن جمع المغرب والعشاء تقديمًا فله أن يوتر بعد العشاء.', page: 60 },
    { title: 'شروط صلاة العيد', text: 'يشترط لها ما يشترط للجمعة إلا الخطبة، ولا تجوز قبل وقتها، ولا تجب على المسافر؛ فقد وافق العيد في حجته ﷺ ولم يصلها.', page: 63 },
    { title: 'وقت صلاة العيد', text: 'كوقت الضحى من ارتفاع الشمس قدر رمح إلى الزوال، والسنة تعجيل الأضحى وتأخير الفطر.', page: 64 },
    { title: 'من سنن العيدين', text: 'أكل تمرات وترًا قبل الخروج للفطر، والخروج ماشيًا، والتكبير والجهر به من البيت حتى المصلى وتسر به النساء، ومخالفة الطريق، والقراءة جهرًا بالأعلى والغاشية أو ق واقتربت.', page: 65 },
    { title: 'التهنئة والتكبير (للاطلاع فقط)', text: 'لا بأس بقول «تقبل الله منا ومنكم»، فقد كان الصحابة يقولونه، وقال أحمد: إسناده جيد. والتكبير الجماعي عند الكتاب بدعة، والصواب أن يكبر كل واحد بصوت منفرد.', more: FYI, page: 66 },
    { title: 'مسائل في العيد (للاطلاع فقط)', text: 'إن لم يعلم بالعيد إلا بعد الزوال صلوا من الغد؛ ولا يرى الكتاب قضاءها لمن فاتته، وهي مسألة خلافية؛ ومن أدرك الإمام بعد القراءة كبر للإحرام ثم ركع؛ وإذا وافق العيد الجمعة فمن صلى العيد لم تجب عليه الجمعة وتسن له.', more: FYI, page: 66 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أسباب الجمع', items: ['السفر', 'المرض', 'الخوف', 'المطر الذي تلحق به مشقة'], page: 58, origin: 'boek' },
    { kind: 'uitzondering', title: 'متى يتم المسافر', items: ['إذا ائتم بمقيم', 'إذا نوى الإقامة المطلقة أو الاستيطان', 'إذا ائتم بمن يشك فيه', 'إذا ذكر صلاة حضر في سفر'], page: 57, origin: 'boek' },
    { kind: 'opsomming', title: 'من سنن العيدين', items: ['أكل تمرات وترًا قبل الفطر', 'الخروج ماشيًا', 'التكبير من البيت إلى المصلى', 'مخالفة الطريق'], page: 65, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'يصلي المريض بحسب استطاعته، ولا تسقط الصلاة ما دام عقله ثابتًا.',
    'يقصر المسافر الرباعية ما دام مسافرًا، ويتم خلف المقيم.',
    'الجمع مناطه المشقة، ولا تجمع الجمعة مع العصر.',
    'صلاة العيد في المصلى، ركعتان قبل الخطبة بلا أذان ولا إقامة.',
    'من سنن العيد أكل التمرات قبل الفطر ومخالفة الطريق.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'المريض الذي لا يستطيع القيام ولا القعود، كيف يصلي؟', options: ['على جنب', 'لا يصلي', 'يؤخرها حتى يشفى', 'قائمًا بالإكراه'], answer: 0, explain: 'حديث عمران بن حصين.', page: 55 },
    { type: 'mc', q: 'متى يبدأ المسافر القصر؟', options: ['بعد مفارقة بنيان بلده', 'قبل أن يخرج من بيته', 'بعد يوم من السفر', 'إذا وصل وجهته فقط'], answer: 0, explain: 'لا يكون ضاربًا في الأرض حتى يفارق عامر بلده.', page: 56 },
    { type: 'tf', q: 'المسافر إذا صلى خلف مقيم يقصر.', options: ['صواب', 'خطأ'], answer: 1, explain: 'يجب عليه الإتمام.', page: 57 },
    { type: 'mc', q: 'ما مناط الجمع بين الصلاتين؟', options: ['المشقة', 'السفر وحده', 'يوم الجمعة', 'الإمام'], answer: 0, explain: 'كما في الدرس الخامس عشر.', page: 58 },
    { type: 'tf', q: 'تجمع صلاة الجمعة مع العصر عند المطر.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الجمعة صلاة مستقلة.', page: 59 },
    { type: 'mc', q: 'أيهما يكون أولًا في العيد؟', options: ['الصلاة ثم الخطبة', 'الخطبة ثم الصلاة', 'الأذان ثم الصلاة', 'لا ترتيب'], answer: 0, explain: 'حديث ابن عمر.', page: 64 },
    { type: 'mc', q: 'كم تكبيرة زائدة في الركعة الأولى من صلاة العيد؟', options: ['ست', 'ثلاث', 'خمس', 'تسع'], answer: 0, explain: 'بعد الإحرام والاستفتاح.', page: 65 }
  ]),
  note: 'أنشطة الكتاب في الصفحتين ٦١ و٦٧. أجزاء «للاطلاع فقط» في الكتاب: ما يستثنى من القصر (ص٥٧)، المعايدة والمسائل (ص٦٦).'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Het gebed van wie een reden heeft, en de twee ʿīd-gebeden',
  subtitle: 'Vier lessen samen op één pagina',
  summary: 'Het gebed van de zieke en de reiziger: staan zoveel als je kunt, inkorten en hoe lang, en wanneer niet; daarna het samenvoegen van twee gebeden, de redenen, de vormen en vragen erover; en daarna de twee ʿīd-gebeden: het oordeel, de plaats, de tijd, de vorm, de sunna’s en vragen.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'Wie een reden heeft, daarna de twee ʿīds.',
    root: { label: 'Redenen en ʿīds', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Gebed met een reden', sub: 'les 14', page: 55, children: ['de zieke', 'inkorten op reis', 'wanneer niet inkorten'] },
      { label: 'Samenvoegen', sub: 'les 15', page: 58, children: ['grond is moeite', 'vervroegd of uitgesteld', 'vragen'] },
      { label: 'De twee ʿīd-gebeden', sub: 'les 16', page: 62, children: ['gemeenschapsplicht', 'vrouwen gaan mee', 'buiten bidden'] },
      { label: 'Vorm en sunna’s', sub: 'les 17', page: 64, children: ['gebed vóór preek', 'extra takbīrs', 'sunna’s'] }
    ]
  },
  points: [
    { text: 'In het verplichte gebed moet je staan zoveel als je kunt; lukt dat niet, dan zittend; lukt dat niet, dan op je zij.', page: 55 },
    { text: 'Het gebed vervalt niet zolang je verstand helder is, al is het met hoofdbewegingen.', page: 55 },
    { text: 'Inkorten is een gebed van vier rakʿa’s als twee bidden; het geldt voor alles wat gewoonlijk reis heet, zolang je op reis bent.', page: 56 },
    { text: 'Je begint met inkorten als je de bebouwing van je woonplaats achter je hebt gelaten.', page: 56 },
    { text: 'De grond voor samenvoegen is moeite, niet de reis; je mag samenvoegen bij reis, ziekte, angst en regen.', page: 58 },
    { text: 'Het vrijdaggebed voeg je niet samen met ʿaṣr; het is een gebed op zich.', page: 59 },
    { text: 'Het ʿīd-gebed is volgens het boek een gemeenschapsplicht; het wordt buiten gebeden, en de vrouwen werd opgedragen mee te gaan.', page: 62 },
    { text: 'Het ʿīd-gebed is twee rakʿa’s vóór de preek, zonder adhān en iqāma.', page: 64 }
  ],
  terms: [
    { term: 'أهل الأعذار', translit: 'ahl al-aʿdhār', meaning: 'Wie het gebed niet in zijn volledige vorm kan verrichten, zoals zieken, reizigers en wie in gevaar is.', explanation: '', notes: [], page: 55 },
    { term: 'الإيماء', translit: 'al-īmāʾ', meaning: 'Met het hoofd de buiging en het neerknielen aangeven; voor het neerknielen lager.', explanation: '', notes: [], page: 55 },
    { term: 'القصر', translit: 'al-qaṣr', meaning: 'Een gebed van vier rakʿa’s als twee bidden.', explanation: '', notes: [], page: 56 },
    { term: 'الجمع', translit: 'al-jamʿ', meaning: 'Twee verplichte gebeden in de tijd van een van beide bidden.', explanation: 'Ẓuhr met ʿaṣr, en maghrib met ʿishāʾ.', notes: [], page: 58 },
    { term: 'جمع التقديم', translit: 'jamʿ at-taqdīm', meaning: 'Het tweede gebed in de tijd van het eerste bidden.', explanation: '', notes: [], page: 59 },
    { term: 'جمع التأخير', translit: 'jamʿ at-taʾkhīr', meaning: 'Het eerste gebed in de tijd van het tweede bidden.', explanation: '', notes: [], page: 59 },
    { term: 'العيد', translit: 'al-ʿīd', meaning: 'Zo genoemd omdat het terugkeert en zich herhaalt.', explanation: '', notes: [], page: 62 },
    { term: 'العواتق', translit: 'al-ʿawātiq', meaning: 'Meisjes die volwassen zijn of dat bijna zijn.', explanation: '', notes: [], page: 62 },
    { term: 'المصلى', translit: 'al-muṣallā', meaning: 'De plek buiten de moskee waar het ʿīd-gebed wordt gebeden.', explanation: '', notes: [], page: 63 },
    { term: 'التكبيرات الزوائد', translit: 'at-takbīrāt az-zawāʾid', meaning: 'Zes in de eerste rakʿa na het openingsgebed, vijf in de tweede vóór de recitatie.', explanation: 'Vergeet je ze tot je met reciteren begint, dan vervallen ze.', notes: [], page: 65 }
  ],
  diagrams: [
    {
      type: 'flow',
      title: 'Het gebed van de zieke',
      intro: 'Pas als het vorige niet lukt, ga je naar het volgende.',
      nodes: [
        { label: 'Staand', sub: 'ook leunend op een stok of muur' },
        { label: 'Zittend', sub: 'met het hoofd naar de borst buigen' },
        { label: 'Op de zij', sub: 'hadith van ʿImrān ibn Ḥuṣayn' },
        { label: 'Met hoofdbewegingen', sub: 'zolang het verstand helder is' },
        { label: 'Met het hart', sub: 'en de woorden zeggen als hij kan spreken' }
      ],
      page: 55
    },
    {
      type: 'compare',
      title: 'Inkorten en samenvoegen',
      intro: 'Zoals in les 14 en 15.',
      columns: ['Inkorten', 'Samenvoegen'],
      rows: [
        { label: 'Betekenis', cells: ['vier rakʿa’s als twee', 'twee gebeden in de tijd van één'] },
        { label: 'Reden', cells: ['de reis', 'moeite: reis, ziekte, angst en regen'] },
        { label: 'Gebeden', cells: ['ẓuhr, ʿaṣr en ʿishāʾ', 'ẓuhr met ʿaṣr, maghrib met ʿishāʾ'] }
      ],
      page: 58
    },
    {
      type: 'compare',
      title: 'De takbīrs in het ʿīd-gebed',
      intro: 'Zoals in les 17.',
      columns: ['Aantal', 'Plaats'],
      rows: [
        { label: 'Eerste rakʿa', cells: ['zes extra', 'na de openings-takbīr en het openingsgebed, vóór de taʿawwudh'] },
        { label: 'Tweede rakʿa', cells: ['vijf', 'vóór de recitatie, naast de takbīr van het opstaan'] }
      ],
      page: 65
    }
  ],
  sections: [
    { title: 'Wanneer de reiziger niet inkort (alleen ter kennisname)', text: 'Hij bidt volledig als hij achter een ingezetene bidt, als hij besluit zich blijvend te vestigen, als hij achter iemand bidt van wie hij niet weet of die inkort, of als hij op reis een gebed van thuis inhaalt; wie een gebed op reis miste en het thuis inhaalt, mag inkorten, maar volledig is voorzichtiger.', more: FYI_NL, page: 57 },
    { title: 'Volledig bidden op reis', text: 'Sommige geleerden vonden volledig bidden op reis afgeraden, omdat de Profeet ﷺ en zijn metgezellen zo standvastig inkortten.', page: 56 },
    { title: 'Regen die samenvoegen toestaat', text: 'Veel en zware regen die moeite geeft, sneeuw, modder, en harde koude wind.', page: 58 },
    { title: 'Vragen over samenvoegen', text: 'Ben je aangekomen, dan is het sunna elk gebed op tijd te bidden, al is samenvoegen geen probleem; verdwijnt de reden na het samenvoegen, dan herhaal je niet; de gebeden hoeven niet direct na elkaar; één adhān en voor elk gebed een iqāma.', page: 59 },
    { title: 'Sunna-gebeden en gedenken bij samenvoegen', text: 'Thuis bid je de sunna tussen de twee gebeden als dat kan, anders erna; op reis zijn de vaste sunna’s niet voorgeschreven. Wie achter de imam bidt, hoeft bij de openings-takbīr geen intentie voor inkorten of samenvoegen te hebben; wie maghrib en ʿishāʾ vervroegd samenvoegt, mag direct na ʿishāʾ de witr bidden.', page: 60 },
    { title: 'Voorwaarden van het ʿīd-gebed', text: 'Dezelfde als voor het vrijdaggebed behalve de preek; niet vóór de tijd; niet verplicht voor de reiziger: de ʿīd viel tijdens zijn ﷺ ḥajj en hij bad hem niet.', page: 63 },
    { title: 'De tijd van het ʿīd-gebed', text: 'Als de tijd van ḍuḥā: vanaf dat de zon een speerlengte hoog staat tot het middaguur; sunna is het Offerfeest vroeg en het Suikerfeest later te bidden.', page: 64 },
    { title: 'Sunna’s van de twee ʿīds', text: 'Vóór het Suikerfeest een oneven aantal dadels eten, te voet gaan, van huis tot de gebedsplaats hardop takbīr zeggen (vrouwen zacht), terug een andere weg nemen, en hardop al-Aʿlā en al-Ghāshiya of Qāf en al-Qamar reciteren.', page: 65 },
    { title: 'Feliciteren en takbīr (alleen ter kennisname)', text: 'Het is geen probleem om "moge Allah het van ons en van jullie aannemen" te zeggen; de metgezellen zeiden het, en Aḥmad noemde de keten goed. Gezamenlijke takbīr in koor is volgens het boek een vernieuwing; ieder zegt het met zijn eigen stem.', more: FYI_NL, page: 66 },
    { title: 'Vragen over de ʿīd (alleen ter kennisname)', text: 'Hoort men pas na het middaguur van de ʿīd, dan bidt men de volgende dag; het boek vindt dat wie het gebed miste het niet inhaalt, maar daarover verschillen de geleerden; wie de imam na de recitatie bereikt, zegt de openings-takbīr en buigt; valt de ʿīd op vrijdag, dan is voor wie de ʿīd bad het vrijdaggebed niet verplicht maar wel sunna.', more: FYI_NL, page: 66 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Redenen om samen te voegen', items: ['reis', 'ziekte', 'angst', 'regen die moeite geeft'], page: 58, origin: 'boek' },
    { kind: 'uitzondering', title: 'Wanneer de reiziger volledig bidt', items: ['achter een ingezetene', 'als hij zich blijvend vestigt', 'achter iemand van wie hij het niet weet', 'als hij op reis een gebed van thuis inhaalt'], page: 57, origin: 'boek' },
    { kind: 'opsomming', title: 'Sunna’s van de twee ʿīds', items: ['dadels in oneven aantal vóór het Suikerfeest', 'te voet gaan', 'takbīr van huis tot gebedsplaats', 'terug een andere weg'], page: 65, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'De zieke bidt zoals hij kan; het gebed vervalt niet zolang zijn verstand helder is.',
    'De reiziger kort gebeden van vier in zolang hij op reis is, en bidt volledig achter een ingezetene.',
    'Samenvoegen rust op moeite; het vrijdaggebed voeg je niet samen met ʿaṣr.',
    'Het ʿīd-gebed is buiten, twee rakʿa’s vóór de preek, zonder adhān en iqāma.',
    'Sunna op de ʿīd: dadels vóór het Suikerfeest en terug een andere weg.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Hoe bidt een zieke die niet kan staan en niet kan zitten?', options: ['op zijn zij', 'hij bidt niet', 'hij stelt het uit tot hij beter is', 'toch staand'], answer: 0, explain: 'De hadith van ʿImrān ibn Ḥuṣayn.', page: 55 },
    { type: 'mc', q: 'Wanneer begint de reiziger met inkorten?', options: ['als hij de bebouwing van zijn woonplaats verlaten heeft', 'voordat hij zijn huis uitgaat', 'na een dag reizen', 'pas op zijn bestemming'], answer: 0, explain: 'Hij is pas op reis als hij de bewoonde plaats verlaten heeft.', page: 56 },
    { type: 'tf', q: 'Een reiziger die achter een ingezetene bidt, kort in.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Hij moet volledig bidden.', page: 57 },
    { type: 'mc', q: 'Wat is de grond voor het samenvoegen van gebeden?', options: ['moeite', 'alleen de reis', 'de vrijdag', 'de imam'], answer: 0, explain: 'Zoals in les 15.', page: 58 },
    { type: 'tf', q: 'Bij regen wordt het vrijdaggebed met ʿaṣr samengevoegd.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het vrijdaggebed is een gebed op zich.', page: 59 },
    { type: 'mc', q: 'Wat komt eerst op de ʿīd?', options: ['het gebed, dan de preek', 'de preek, dan het gebed', 'de adhān, dan het gebed', 'geen vaste volgorde'], answer: 0, explain: 'De hadith van Ibn ʿUmar.', page: 64 },
    { type: 'mc', q: 'Hoeveel extra takbīrs zijn er in de eerste rakʿa van het ʿīd-gebed?', options: ['zes', 'drie', 'vijf', 'negen'], answer: 0, explain: 'Na de openings-takbīr en het openingsgebed.', page: 65 }
  ]),
  note: 'Oefeningen van het boek op p. 61 en 67. Delen die het boek alleen ter kennisname geeft: wanneer niet inkorten (p. 57), feliciteren en vragen over de ʿīd (p. 66). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '14', unit: 4, ar, nl }
