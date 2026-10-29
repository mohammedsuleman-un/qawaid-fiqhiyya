// Hoofdstukkaart bij الفقه (٢), eenheid 1: صلاة التطوع (lessen 1–5, boek p. 12–27).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith en takhrij zoals in het boek. Delen die het boek "للاطلاع فقط" noemt, zijn zo gemarkeerd.
// Niet overgenomen: uitspraken die het boek zonder bron geeft (het verbod op witr met twee tashahhuds
// p. 16, twaalf rakʿa’s ḍuḥā p. 19, smeekbede bij regen als verhoringsmoment p. 24) en de sterrenkundige
// uitleg van een eclips (p. 20).
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب الفقه (٢)، سلسلة زاد العلمية',
  pages: '12–27',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester2_Fiqh/page/n{p}/mode/1up'
}

const FYI = 'هذا القسم في الكتاب للاطلاع فقط.'
const FYI_NL = 'Dit deel staat in het boek alleen ter kennisname.'
const FYI_NOTE = 'من قسم «للاطلاع فقط».'
const FYI_NOTE_NL = 'Uit een deel dat alleen ter kennisname is.'

const HADITH = [
  { narrator: 'أبو هريرة', text: 'إن الله تعالى قال: من عادى لي وليا فقد آذنته بالحرب... وما يزال عبدي يتقرب إلي بالنوافل حتى أحبه', takhrij: 'رواه البخاري', note: 'في فضل التطوع.', pages: [12], nl: 'Allah de Verhevene zei: wie een vriend van Mij vijandig behandelt, aan hem verklaar Ik de oorlog... En Mijn dienaar blijft dichter bij Mij komen met vrijwillige daden, tot Ik van hem houd', nlNote: 'Over de waarde van vrijwillig gebed.' },
  { narrator: 'عمران بن حصين', text: 'من صلى قائما فهو أفضل، ومن صلى قاعدا فله نصف أجر القائم، ومن صلى نائما فله نصف أجر القاعد', takhrij: 'رواه البخاري', note: 'في النافلة مع القدرة؛ والعاجز له مثل أجر القائم.', pages: [12], nl: 'Wie staand bidt, dat is beter; wie zittend bidt, krijgt de helft van de beloning van wie staat; en wie liggend bidt, de helft van de beloning van wie zit', nlNote: 'Bij vrijwillig gebed voor wie kan staan; wie het niet kan, krijgt dezelfde beloning als wie staat.' },
  { narrator: 'ثوبان', text: 'عليك بكثرة السجود، فإنك لا تسجد لله سجدة إلا رفعك الله بها درجة وحط عنك بها خطيئة', takhrij: 'رواه مسلم', note: '', pages: [13], nl: 'Kniel veel neer, want je knielt geen keer voor Allah neer of Allah verhoogt je daarmee een rang en neemt een zonde van je weg', nlNote: '' },
  { narrator: 'ربيعة بن كعب الأسلمي', text: '«سل»، فقلت: أسألك مرافقتك في الجنة، قال: «أو غير ذلك؟» قلت: هو ذاك، قال: «فأعني على نفسك بكثرة السجود»', takhrij: 'رواه مسلم', note: '', pages: [13], nl: '"Vraag." Ik zei: "Ik vraag u om uw gezelschap in het Paradijs." Hij zei: "Of iets anders?" Ik zei: "Dat is het." Hij zei: "Help mij dan bij jezelf met veel neerknielen."', nlNote: '' },
  { narrator: 'أبو هريرة', text: 'إن أول ما يحاسب به العبد المسلم يوم القيامة الصلاة، فإن أتمها وإلا قيل: انظروا هل له من تطوع؟ فإن كان له تطوع أكملت الفريضة من تطوعه', takhrij: 'أبو داود والنسائي وصححه الألباني', note: '', pages: [13], nl: 'Het eerste waarover de moslim op de Opstandingsdag ter verantwoording wordt geroepen, is het gebed. Heeft hij het volledig verricht, goed; anders wordt gezegd: kijk of hij vrijwillig gebed heeft. Heeft hij dat, dan wordt het verplichte ermee aangevuld', nlNote: '' },
  { narrator: 'عبد الرحمن بن عبد القاري', text: 'خرجت مع عمر ليلة في رمضان إلى المسجد فإذا الناس أوزاع متفرقون... فقال: إني أرى لو جمعت هؤلاء على قارئ واحد لكان أمثل، ثم جمعهم على أبي بن كعب... قال: نعم البدعة هذه، والتي ينامون عنها أفضل من التي يقومون', takhrij: 'رواه البخاري', note: 'يريد آخر الليل. ' + FYI_NOTE, pages: [14], nl: 'Ik ging met ʿUmar op een nacht in Ramadan naar de moskee, en de mensen baden verspreid in groepjes... Hij zei: "Als ik hen achter één reciteerder bijeenbreng, is dat beter." Toen bracht hij hen bijeen achter Ubayy ibn Kaʿb... Hij zei: "Wat een goede vernieuwing is dit; en het deel van de nacht dat zij verslapen, is beter dan het deel waarin zij bidden."', nlNote: 'Bedoeld is het laatste deel van de nacht. ' + FYI_NOTE_NL },
  { narrator: '', text: 'ما من عبد مسلم يصلي لله تعالى في كل يوم ثنتي عشرة ركعة إلا بنى الله له بيتا في الجنة', takhrij: 'رواه مسلم', note: '', pages: [14], nl: 'Er is geen moslim die elke dag voor Allah twaalf rakʿa’s bidt, of Allah bouwt voor hem een huis in het Paradijs', nlNote: '' },
  { narrator: 'أم حبيبة', text: 'من حافظ على أربع ركعات قبل الظهر وأربع بعدها حرمه الله تعالى على النار', takhrij: 'أبو داود والنسائي وصححه الألباني', note: '', pages: [15], nl: 'Wie vasthoudt aan vier rakʿa’s vóór ẓuhr en vier erna, die verbiedt Allah voor het Vuur', nlNote: '' },
  { narrator: '', text: 'ركعتا الفجر خير من الدنيا وما فيها', takhrij: 'رواه مسلم', note: '', pages: [15], nl: 'De twee rakʿa’s van fajr zijn beter dan de wereld en alles wat erin is', nlNote: '' },
  { narrator: 'عائشة', text: 'لم يكن النبي ﷺ على شيء من النوافل أشد منه تعاهدا على ركعتي الفجر', takhrij: 'متفق عليه', note: '', pages: [15], nl: 'Aan geen vrijwillig gebed hield de Profeet ﷺ zich zo trouw als aan de twee rakʿa’s van fajr', nlNote: '' },
  { narrator: '', text: 'رحم الله امرأ صلى قبل العصر أربعا', takhrij: 'أحمد والترمذي وحسنه الألباني', note: 'مستحبة وليست راتبة.', pages: [15], nl: 'Moge Allah genadig zijn voor wie vóór ʿaṣr vier rakʿa’s bidt', nlNote: 'Aanbevolen, maar geen vaste sunna.' },
  { narrator: '', text: 'بين كل أذانين صلاة، بين كل أذانين صلاة، ثم قال في الثالثة: لمن شاء', takhrij: 'البخاري ومسلم', note: 'الأذانان: الأذان والإقامة.', pages: [15], nl: 'Tussen elke twee oproepen is er een gebed, tussen elke twee oproepen is er een gebed; en de derde keer zei hij: voor wie wil', nlNote: 'De twee oproepen zijn de adhān en de iqāma.' },
  { narrator: '', text: 'إن الله وتر يحب الوتر', takhrij: 'البخاري ومسلم', note: '', pages: [15], nl: 'Allah is Eén en houdt van het oneven (witr)', nlNote: '' },
  { narrator: 'جابر بن عبد الله', text: 'من خاف ألا يقوم من آخر الليل فليوتر أوله، ومن طمع أن يقوم آخره فليوتر آخر الليل، فإن صلاة آخر الليل مشهودة، وذلك أفضل', takhrij: 'رواه مسلم', note: '', pages: [16], nl: 'Wie vreest dat hij aan het eind van de nacht niet opstaat, laat hij de witr aan het begin bidden; en wie hoopt aan het eind op te staan, laat hij de witr aan het eind van de nacht bidden, want het gebed aan het eind van de nacht wordt bijgewoond, en dat is beter', nlNote: '' },
  { narrator: 'عائشة', text: 'كان النبي ﷺ يوتر بثلاث لا يقعد إلا في آخرهن', takhrij: 'النسائي وصححه الألباني', note: '', pages: [16], nl: 'De Profeet ﷺ bad de witr met drie rakʿa’s en ging alleen in de laatste zitten', nlNote: '' },
  { narrator: 'أم سلمة', text: 'كان يوتر بسبع وبخمس لا يفصل بينهن بسلام ولا كلام', takhrij: 'أحمد والنسائي بسند صحيح', note: '', pages: [16], nl: 'Hij bad de witr met zeven en met vijf, zonder ze te scheiden met een groet of met spreken', nlNote: '' },
  { narrator: 'ابن عمر وابن عباس', text: 'الوتر ركعة من آخر الليل', takhrij: 'رواه مسلم', note: 'أقل الوتر. ' + FYI_NOTE, pages: [17], nl: 'De witr is één rakʿa aan het eind van de nacht', nlNote: 'Het minimum van de witr. ' + FYI_NOTE_NL },
  { narrator: 'أبي بن كعب', text: 'كان رسول الله ﷺ يقرأ في الوتر بسبح اسم ربك الأعلى، وفي الثانية بقل يا أيها الكافرون، وفي الثالثة بقل هو الله أحد، ولا يسلم إلا في آخرهن', takhrij: 'النسائي وصححه الألباني', note: FYI_NOTE, pages: [17], nl: 'In de witr reciteerde de Boodschapper van Allah ﷺ "Sabbiḥ isma rabbika l-aʿlā", in de tweede "Qul yā ayyuhā l-kāfirūn" en in de derde "Qul huwa llāhu aḥad", en hij groette pas aan het eind', nlNote: FYI_NOTE_NL },
  { narrator: 'أبو ذر', text: 'يصبح على كل سلامى من أحدكم صدقة... ويجزئ من ذلك ركعتان يركعهما من الضحى', takhrij: 'رواه مسلم', note: 'السلامى: عظام الأصابع في اليد والقدم.', pages: [18], nl: 'Elke ochtend rust er op elk gewricht van ieder van jullie liefdadigheid... en twee rakʿa’s in de voormiddag (ḍuḥā) volstaan daarvoor', nlNote: 'Sulāmā: de vingerkootjes van hand en voet.' },
  { narrator: 'زيد بن أرقم', text: 'صلاة الأوابين حين ترمض الفصال', takhrij: 'رواه مسلم', note: 'الفصال: أولاد الإبل؛ ترمض: تشتد عليها الرمضاء.', pages: [18], nl: 'Het gebed van wie zich steeds tot Allah wenden, is wanneer de jonge kamelen de hitte van het zand voelen', nlNote: 'Als de grond heet wordt voor de jonge kamelen.' },
  { narrator: 'أم هانئ', text: 'أن النبي ﷺ يوم فتح مكة اغتسل في بيتها ثم صلى ثماني ركعات', takhrij: 'متفق عليه', note: 'وفي لفظ: فلم أر صلاة قط أخف منها غير أنه يتم الركوع والسجود.', pages: [19], nl: 'Op de dag van de verovering van Mekka waste de Profeet ﷺ zich in haar huis en bad toen acht rakʿa’s', nlNote: 'In een versie: ik heb nooit een korter gebed gezien, maar hij voltooide de buiging en het neerknielen.' },
  { narrator: '', text: 'صلاة الليل والنهار مثنى مثنى', takhrij: 'أحمد وصححه الألباني', note: '', pages: [19], nl: 'Het gebed van de nacht en de dag is twee aan twee', nlNote: '' },
  { narrator: 'المغيرة بن شعبة', text: 'إن الشمس والقمر آيتان من آيات الله، لا ينكسفان لموت أحد ولا لحياته، فإذا رأيتموهما فادعوا الله وصلوا حتى ينجلي', takhrij: 'متفق عليه', note: 'قاله لما انكسفت الشمس يوم مات إبراهيم.', pages: [19], nl: 'De zon en de maan zijn twee tekenen van de tekenen van Allah; ze verduisteren niet vanwege iemands dood of leven. Als jullie dat zien, roep Allah aan en bid tot het weer licht wordt', nlNote: 'Gezegd toen de zon verduisterde op de dag dat Ibrāhīm stierf.' },
  { narrator: 'عائشة', text: 'خسفت الشمس... فاستكمل أربع ركعات في أربع سجدات، وانجلت الشمس قبل أن ينصرف', takhrij: 'متفق عليه', note: 'دليل صفة صلاة الكسوف. ' + FYI_NOTE, pages: [20], nl: 'De zon verduisterde... en hij voltooide vier buigingen in vier neerknielingen, en de zon werd weer licht voordat hij klaar was', nlNote: 'Bewijs voor de vorm van het eclipsgebed. ' + FYI_NOTE_NL },
  { narrator: 'أنس بن مالك', text: 'قام أعرابي فقال: يا رسول الله، هلك المال وجاع العيال فادع الله لنا، فرفع يديه وما نرى في السماء قزعة... فمطرنا يومنا ذلك ومن الغد... حتى الجمعة الأخرى', takhrij: 'البخاري ومسلم', note: FYI_NOTE, pages: [22], nl: 'Een bedoeïen stond op en zei: "O Boodschapper van Allah, het vee gaat dood en de gezinnen hebben honger; vraag Allah voor ons." Hij hief zijn handen, terwijl wij geen wolkje aan de hemel zagen... Het regende die dag en de volgende... tot de volgende vrijdag', nlNote: FYI_NOTE_NL },
  { narrator: 'عبد الله بن زيد', text: 'خرج النبي ﷺ إلى المصلى يستسقي، واستقبل القبلة فصلى ركعتين، وقلب رداءه', takhrij: 'متفق عليه', note: FYI_NOTE, pages: [23], nl: 'De Profeet ﷺ ging naar de gebedsplaats om om regen te vragen; hij keerde zich naar de qibla, bad twee rakʿa’s en keerde zijn mantel om', nlNote: FYI_NOTE_NL },
  { narrator: 'أنس بن مالك', text: 'أصابنا مطر فحسر رسول الله ﷺ ثوبه حتى أصابه من المطر، فقلنا: لم صنعت هذا؟ قال: «لأنه حديث عهد بربه تعالى»', takhrij: 'رواه مسلم', note: FYI_NOTE, pages: [24], nl: 'Het regende, en de Boodschapper van Allah ﷺ trok zijn kleed opzij zodat de regen hem raakte. Wij vroegen: waarom deed u dat? Hij zei: "Omdat deze regen pas net van zijn Heer komt."', nlNote: FYI_NOTE_NL },
  { narrator: '', text: 'اللهم حوالينا ولا علينا، اللهم على الآكام والجبال والآجام والظراب والأودية ومنابت الشجر', takhrij: 'البخاري ونحوه عند مسلم', note: 'إذا كثر المطر وخيف ضرره. ' + FYI_NOTE, pages: [24], nl: 'O Allah, rondom ons en niet op ons; o Allah, op de heuvels, de bergen, de bossen, de kleine bergen, de dalen en waar de bomen groeien', nlNote: 'Als er te veel regen valt en schade dreigt. ' + FYI_NOTE_NL },
  { narrator: 'عمرو بن عبسة', text: 'صل صلاة الصبح، ثم أقصر عن الصلاة حتى تطلع الشمس حتى ترتفع، فإنها تطلع حين تطلع بين قرني شيطان، وحينئذ يسجد لها الكفار', takhrij: 'رواه مسلم', note: 'سبب النهي.', pages: [24, 25], nl: 'Bid het ochtendgebed en houd daarna op met bidden tot de zon opkomt en gerezen is, want ze komt op tussen de twee hoorns van een duivel, en dan knielen de ongelovigen voor haar neer', nlNote: 'De reden van het verbod.' },
  { narrator: 'عقبة بن عامر', text: 'ثلاث ساعات كان النبي ﷺ ينهانا أن نصلي فيهن وأن نقبر فيهن موتانا: حين تطلع الشمس بازغة حتى ترتفع، وحين يقوم قائم الظهيرة حتى تزول، وحين تضيف للغروب حتى تغرب', takhrij: 'رواه مسلم', note: 'تضيف: تميل.', pages: [25], nl: 'Op drie momenten verbood de Profeet ﷺ ons te bidden of onze doden te begraven: als de zon opkomt tot ze gerezen is, als het middaguur op zijn hoogtepunt is tot de zon overhelt, en als de zon naar de ondergang neigt tot ze ondergaat', nlNote: '' },
  { narrator: '', text: 'من نام عن صلاة أو نسيها فليصلها إذا ذكرها', takhrij: 'متفق عليه', note: 'من ذوات الأسباب: قضاء الفوائت.', pages: [26], nl: 'Wie een gebed verslaapt of vergeet, laat hij het bidden zodra hij eraan denkt', nlNote: 'Een gebed met een aanleiding: gemiste gebeden inhalen.' },
  { narrator: '', text: 'يا بني عبد مناف، لا تمنعوا أحدا طاف بهذا البيت وصلى أية ساعة شاء من ليل أو نهار', takhrij: 'أبو داود والترمذي وصححه الألباني', note: '', pages: [26], nl: 'O Banū ʿAbd Manāf, verhinder niemand om rond dit Huis te lopen en te bidden op welk uur hij wil, dag of nacht', nlNote: '' },
  { narrator: '', text: 'إذا دخل أحدكم المسجد فلا يجلس حتى يصلي ركعتين', takhrij: 'البخاري ومسلم', note: 'تحية المسجد.', pages: [26], nl: 'Als een van jullie de moskee binnenkomt, laat hij niet gaan zitten voordat hij twee rakʿa’s heeft gebeden', nlNote: 'Het begroetingsgebed van de moskee.' }
]

const TAKHRIJ_NL = {
  'رواه البخاري': 'al-Bukhārī',
  'رواه مسلم': 'Muslim',
  'أبو داود والنسائي وصححه الألباني': 'Abū Dāwūd en an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'أحمد والترمذي وحسنه الألباني': 'Aḥmad en at-Tirmidhī; al-Albānī noemde hem ḥasan',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'النسائي وصححه الألباني': 'an-Nasāʾī; al-Albānī noemde hem ṣaḥīḥ',
  'أحمد والنسائي بسند صحيح': 'Aḥmad en an-Nasāʾī, met een betrouwbare keten',
  'أحمد وصححه الألباني': 'Aḥmad; al-Albānī noemde hem ṣaḥīḥ',
  'البخاري ونحوه عند مسلم': 'al-Bukhārī, en vergelijkbaar bij Muslim',
  'أبو داود والترمذي وصححه الألباني': 'Abū Dāwūd en at-Tirmidhī; al-Albānī noemde hem ṣaḥīḥ'
}
const NARRATOR_NL = { 'أبو هريرة': 'Abū Hurayra', 'عمران بن حصين': 'ʿImrān ibn Ḥuṣayn', 'ثوبان': 'Thawbān', 'ربيعة بن كعب الأسلمي': 'Rabīʿa ibn Kaʿb al-Aslamī', 'عبد الرحمن بن عبد القاري': 'ʿAbd ar-Raḥmān ibn ʿAbd al-Qārī', 'أم حبيبة': 'Umm Ḥabība', 'عائشة': 'ʿĀʾisha', 'جابر بن عبد الله': 'Jābir ibn ʿAbd Allāh', 'أم سلمة': 'Umm Salama', 'ابن عمر وابن عباس': 'Ibn ʿUmar en Ibn ʿAbbās', 'أبي بن كعب': 'Ubayy ibn Kaʿb', 'أبو ذر': 'Abū Dharr', 'زيد بن أرقم': 'Zayd ibn Arqam', 'أم هانئ': 'Umm Hāniʾ', 'المغيرة بن شعبة': 'al-Mughīra ibn Shuʿba', 'أنس بن مالك': 'Anas ibn Mālik', 'عبد الله بن زيد': 'ʿAbd Allāh ibn Zayd', 'عمرو بن عبسة': 'ʿAmr ibn ʿAbasa', 'عقبة بن عامر': 'ʿUqba ibn ʿĀmir' }

const PERSONS = [
  ['abu-hurayra', 'text', [12, 13, 18], 'روى الحديث القدسي في النوافل، وحساب الصلاة يوم القيامة، ووصية الضحى.', 'Overleveraar van de ḥadīth qudsī over vrijwillige daden, de afrekening over het gebed en het advies over ḍuḥā.'],
  ['imran-ibn-husayn', 'text', [12], 'روى «من صلى قائمًا فهو أفضل».', 'Overleveraar van "wie staand bidt, dat is beter".'],
  ['aisha', 'text', [12, 15, 16, 17, 20], 'روت تربعه في صلاة القاعد، وتعاهده ركعتي الفجر، وصفة وتره وكسوفه.', 'Overleverde dat hij in kleermakerszit bad als hij zat, zijn trouw aan de twee rakʿa’s van fajr, en de vorm van zijn witr en eclipsgebed.'],
  ['thawban', 'text', [13], 'سئل عن أحب الأعمال فروى «عليك بكثرة السجود».', 'Gevraagd naar de beste daden, overleverde hij "kniel veel neer".'],
  ['rabia-ibn-kab-al-aslami', 'text', [13], 'سأل مرافقة النبي ﷺ في الجنة.', 'Vroeg om het gezelschap van de Profeet ﷺ in het Paradijs.'],
  ['abdallah-ibn-amr', 'text', [14, 19], 'روى النداء «الصلاة جامعة» في الكسوف.', 'Overleverde de oproep "het gebed in gemeenschap" bij een eclips.'],
  ['umar-ibn-al-khattab', 'text', [14], 'جمع الناس في التراويح على أبي بن كعب.', 'Bracht de mensen bij het tarāwīḥ-gebed bijeen achter Ubayy ibn Kaʿb.'],
  ['ubayy-ibn-kab', 'text', [14, 17], 'إمام التراويح في عهد عمر، وروى ما يقرأ في الوتر.', 'Leidde het tarāwīḥ-gebed in de tijd van ʿUmar, en overleverde wat in de witr gereciteerd wordt.'],
  ['ibn-abbas', 'text', [14, 17, 23], 'وصف خروجه ﷺ للاستسقاء متبذلًا متواضعًا.', 'Beschreef hoe hij ﷺ eenvoudig en nederig uitging om om regen te vragen.'],
  ['umm-habiba', 'text', [15], 'روت فضل أربع قبل الظهر وأربع بعدها.', 'Overleverde de waarde van vier rakʿa’s vóór en vier na ẓuhr.'],
  ['jabir-ibn-abdallah', 'text', [16], 'روى متى يوتر من خاف ومن طمع.', 'Overleverde wanneer je de witr bidt als je vreest of hoopt op te staan.'],
  ['umm-salama', 'text', [16], 'روت وتره بسبع وخمس.', 'Overleverde dat hij de witr met zeven en vijf bad.'],
  ['ibn-umar', 'text', [17], 'روى مع ابن عباس «الوتر ركعة من آخر الليل».', 'Overleverde met Ibn ʿAbbās "de witr is één rakʿa aan het eind van de nacht".'],
  ['abu-dharr', 'text', [18], 'روى صدقة السلامى وإجزاء ركعتي الضحى.', 'Overleveraar van de liefdadigheid voor de gewrichten en dat twee rakʿa’s ḍuḥā volstaan.'],
  ['zayd-ibn-arqam', 'text', [18], 'روى «صلاة الأوابين حين ترمض الفصال».', 'Overleveraar van "het gebed van wie zich tot Allah wenden is als de jonge kamelen de hitte voelen".'],
  ['umm-hani', 'text', [19], 'صلى النبي ﷺ في بيتها يوم الفتح ثماني ركعات.', 'De Profeet ﷺ bad op de dag van de verovering acht rakʿa’s in haar huis.'],
  ['al-mughira-ibn-shuba', 'text', [19], 'روى حديث الكسوف يوم مات إبراهيم.', 'Overleverde de eclips-hadith van de dag dat Ibrāhīm stierf.'],
  ['anas-ibn-malik', 'text', [22, 24], 'روى قصة الأعرابي في الاستسقاء، والتعرض للمطر.', 'Overleverde het verhaal van de bedoeïen die om regen vroeg, en het opzoeken van de regen.'],
  ['abdallah-ibn-zayd-ibn-asim', 'text', [23], 'روى صلاة الاستسقاء وقلب الرداء.', 'Overleverde het regengebed en het omkeren van de mantel.'],
  ['amr-ibn-abasa', 'text', [24, 25], 'روى سبب النهي عند الطلوع والغروب.', 'Overleverde de reden van het verbod bij zonsopgang en -ondergang.'],
  ['uqba-ibn-amir', 'text', [25], 'روى الساعات الثلاث المنهي عنها.', 'Overleverde de drie verboden momenten.']
]

const ar = {
  scope: 'unit',
  unit: 1,
  title: 'صلاة التطوع',
  subtitle: 'خمسة دروس مجموعة في صفحة واحدة',
  summary: 'تعريف التطوع وفضله وأنواعه، والسنن الرواتب، والوتر وصلاة الضحى، وصلاتا الكسوف والاستسقاء، والأوقات المنهي عن الصلاة فيها وما يستثنى منها.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الأولى في خريطة واحدة',
    intro: 'صلاة التطوع بأنواعها وأوقاتها.',
    root: { label: 'صلاة التطوع', sub: 'الوحدة الأولى' },
    nodes: [
      { label: 'التطوع وفضله', sub: 'الدرس ١', page: 12, children: ['التعريف', 'الحكمة', 'مؤقت ومطلق'] },
      { label: 'السنن الرواتب', sub: 'الدرس ٢', page: 14, children: ['ثنتا عشرة ركعة', 'آكدها ركعتا الفجر'] },
      { label: 'الوتر والضحى', sub: 'الدرس ٣', page: 15, children: ['وقته', 'صفاته', 'وقت الضحى'] },
      { label: 'الكسوف والاستسقاء', sub: 'الدرس ٤', page: 19, children: ['ركوعان في كل ركعة', 'أنواع الاستسقاء'] },
      { label: 'أوقات النهي', sub: 'الدرس ٥', page: 24, children: ['ثلاثة أوقات', 'سبب النهي', 'ذوات الأسباب'] }
    ]
  },
  points: [
    { text: 'التطوع لغة التبرع، واصطلاحًا أداء الصلوات غير الواجبة، ويسمى السنة والمستحب والرغيبة والفضيلة.', page: 12 },
    { text: 'القيام في النافلة أفضل، ومن صلاها قاعدًا قادرًا فله نصف الأجر، والعاجز له الأجر كاملًا.', page: 12 },
    { text: 'من حكمة التطوع رفع الدرجات وحط السيئات، ودخول الجنة، وتكميل ما نقص من الفرائض.', page: 13 },
    { text: 'الرواتب ثنتا عشرة ركعة، وآكدها ركعتا الفجر، وأربع قبل العصر مستحبة وليست راتبة.', page: 15 },
    { text: 'وقت الوتر ما بين صلاة العشاء إلى طلوع الفجر، ويعجله من خاف ألا يقوم ويؤخره من طمع في القيام.', page: 16 },
    { text: 'صلاة الإشراق هي صلاة الضحى في أول وقتها، وليستا صلاتين مختلفتين.', page: 17 },
    { text: 'الكسوف والخسوف شيء واحد، وصلاته سنة مؤكدة، ولا تقضى إذا لم يعلم به إلا بعد زواله.', page: 19 },
    { text: 'يستثنى من أوقات النهي ذوات الأسباب كتحية المسجد وقضاء الفوائت وركعتي الطواف.', page: 26 }
  ],
  terms: [
    { term: 'التطوع', translit: 'at-taṭawwuʿ', meaning: 'لغة: التبرع بما لا يلزم؛ اصطلاحًا: أداء الصلوات غير الواجبة.', explanation: '', notes: [], page: 12 },
    { term: 'التطوع المؤقت', translit: 'at-taṭawwuʿ al-muʾaqqat', meaning: 'ما له وقت معين، تابع للفرائض كالرواتب أو غير تابع كالوتر والضحى.', explanation: '', notes: [], page: 13 },
    { term: 'التطوع المطلق', translit: 'at-taṭawwuʿ al-muṭlaq', meaning: 'صلاة الليل وتطوع النهار في غير أوقات النهي.', explanation: '', notes: [], page: 13 },
    { term: 'السنن الرواتب', translit: 'as-sunan ar-rawātib', meaning: 'النوافل التابعة للفرائض: أربع قبل الظهر واثنتان بعدها، واثنتان بعد المغرب، واثنتان بعد العشاء، واثنتان قبل الفجر.', explanation: '', notes: [], page: 15 },
    { term: 'الوتر', translit: 'al-witr', meaning: 'سنة مؤكدة بين صلاة العشاء وطلوع الفجر، أقله ركعة.', explanation: '', notes: [], page: 15 },
    { term: 'صلاة الأوابين', translit: 'ṣalāt al-awwābīn', meaning: 'صلاة الضحى.', explanation: '', notes: [], page: 17 },
    { term: 'ترمض الفصال', translit: 'tarmaḍu l-fiṣāl', meaning: 'تشتد الرمضاء على أولاد الإبل.', explanation: '', notes: [], page: 18 },
    { term: 'الكسوف / الخسوف', translit: 'al-kusūf / al-khusūf', meaning: 'شيء واحد: ذهاب ضوء أحد النيرين أو بعضه.', explanation: '', notes: [], page: 19 },
    { term: 'الاستسقاء', translit: 'al-istisqāʾ', meaning: 'طلب سقيا الماء من الله عند الجدب وانقطاع المطر بصفة مخصوصة.', explanation: '', notes: [], page: 22 },
    { term: 'قيد رمح', translit: 'qīd rumḥ', meaning: 'قدر رمح في ارتفاع الشمس، نحو ربع ساعة بعد الطلوع.', explanation: '', notes: [], page: 24 },
    { term: 'ذوات الأسباب', translit: 'dhawāt al-asbāb', meaning: 'الصلوات التي لها سبب، تصلى ولو في وقت النهي.', explanation: '', notes: [], page: 26 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'الأوقات المنهي عن الصلاة فيها',
      intro: 'كما في الدرس الخامس.',
      columns: ['الوقت', 'السبب'],
      rows: [
        { label: 'الأول', cells: ['من بعد صلاة الصبح حتى ترتفع الشمس قيد رمح', 'الكفار يسجدون للشمس عند طلوعها'] },
        { label: 'الثاني', cells: ['حين تكون الشمس في وسط السماء حتى تزول (نحو ثلاث عشرة دقيقة قبل الظهر)', 'وقت تسجر فيه جهنم'] },
        { label: 'الثالث', cells: ['من بعد صلاة العصر حتى تغرب الشمس', 'الكفار يسجدون لها عند غروبها'] }
      ],
      page: 24
    },
    {
      type: 'compare',
      title: 'صفات الوتر',
      intro: 'كما في الدرس الثالث.',
      columns: ['الصفة'],
      rows: [
        { label: 'ثلاث', cells: ['ركعتان ثم سلام ثم ركعة، أو سردًا بتشهد واحد'] },
        { label: 'خمس أو سبع', cells: ['سردًا لا يجلس إلا في آخرها'] },
        { label: 'تسع', cells: ['يجلس في الثامنة ولا يسلم، ثم يقوم فيصلي التاسعة'] },
        { label: 'إحدى عشرة', cells: ['أفضل صلاة الوتر، ولا بأس بثلاث عشرة (للاطلاع فقط)'] }
      ],
      page: 16
    },
    {
      type: 'flow',
      title: 'صفة صلاة الكسوف',
      intro: 'كما في الدرس الرابع (للاطلاع فقط).',
      nodes: [
        { label: 'الفاتحة وسورة طويلة جهرًا', sub: 'القيام الأول' },
        { label: 'ركوع طويل ثم رفع', sub: 'دون سجود' },
        { label: 'الفاتحة وسورة دون الأولى', sub: 'القيام الثاني' },
        { label: 'ركوع ثم رفع ثم سجدتان طويلتان', sub: 'نهاية الركعة الأولى' },
        { label: 'الثانية كالأولى لكن دونها', sub: 'ثم التشهد والسلام' }
      ],
      page: 20
    }
  ],
  sections: [
    { title: 'السنة لمن صلى قاعدًا', text: 'أن يتربع، كما رأته عائشة يصلي متربعًا.', page: 12 },
    { title: 'ما تسن له الجماعة من التطوع (للاطلاع فقط)', text: 'الكسوف والتراويح والاستسقاء فقط.', more: FYI, page: 14 },
    { title: 'بين كل أذانين صلاة', text: 'يسن التنفل بين الأذان والإقامة لمن شاء، ومنه قوله: «صلوا قبل المغرب» ثلاثًا ثم قال: «لمن شاء».', page: 15 },
    { title: 'ما يقرأ في الوتر (للاطلاع فقط)', text: 'السنة لمن أوتر بثلاث: الأعلى ثم الكافرون ثم الإخلاص، وله أحيانًا غيرها.', more: FYI, page: 17 },
    { title: 'وقت الضحى وعددها', text: 'من ارتفاع الشمس قيد رمح إلى قبيل الظهر بنحو اثنتي عشرة دقيقة، وأفضله إذا اشتد الحر؛ وأقلها ركعتان، وصلى ثماني ركعات يوم الفتح، والأفضل أن يسلم من كل ركعتين.', page: 18 },
    { title: 'أحكام وقت الكسوف', text: 'إذا انتهت الصلاة قبل الانجلاء أكثر من الدعاء ولا يعيدها، وإذا انجلى وهو فيها أتمها خفيفة، ويسن أن يعظ الإمام الناس بعدها.', page: 21 },
    { title: 'المسبوق في الكسوف', text: 'إن فاته الركوع الأول فقد فاتته الركعة فيقضيها على هيئتها، وإن فاتته الصلاة كلها فلا تقضى.', page: 21 },
    { title: 'صفة الاستسقاء (للاطلاع فقط)', text: 'ركعتان بلا أذان ولا إقامة، يكبر في الأولى ستًّا وفي الثانية خمسًا، ثم يخطب ويستغفر ويحول رداءه.', more: FYI, page: 23 },
    { title: 'تحية المسجد', text: 'تتأكد ولو في وقت النهي، وتجزئ عنها الراتبة القبلية، وتخفف يوم الجمعة إن كان الإمام يخطب.', page: 26 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'حكمة مشروعية التطوع', items: ['رفعة الدرجات وحط السيئات', 'من أعظم أسباب دخول الجنة', 'تكميل ما نقص من الفرائض'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع الاستسقاء (للاطلاع فقط)', items: ['أدناها الدعاء بلا صلاة', 'أوسطها الدعاء بعد صلاة الجمعة أو غيرها', 'أفضلها بصلاة ركعتين وخطبة'], page: 22, origin: 'boek' },
    { kind: 'uitzondering', title: 'ذوات الأسباب في وقت النهي', items: ['تحية المسجد', 'ركعتا الطواف', 'الصلاة بعد الوضوء', 'قضاء سنة الصبح بعد الفريضة', 'قضاء سنة الظهر بعد العصر', 'صلاة الجنازة والكسوف', 'قضاء الفرائض الفائتة'], page: 26, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'التطوع يرفع الدرجات ويكمل الفرائض، والقيام فيه أفضل.',
    'الرواتب ثنتا عشرة ركعة، وآكدها ركعتا الفجر.',
    'الوتر من العشاء إلى الفجر، أقله ركعة وأفضله إحدى عشرة.',
    'صلاة الكسوف ركعتان في كل ركعة ركوعان، والاستسقاء ركعتان كالعيد.',
    'أوقات النهي ثلاثة، ويستثنى منها ذوات الأسباب.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'ما أجر من صلى النافلة قاعدًا وهو قادر على القيام؟', options: ['نصف أجر القائم', 'مثل أجر القائم', 'لا أجر له', 'ضعف أجر القائم'], answer: 0, explain: 'كما في حديث عمران بن حصين.', page: 12 },
    { type: 'mc', q: 'ما آكد السنن الرواتب؟', options: ['ركعتا الفجر', 'سنة المغرب', 'سنة العشاء', 'أربع قبل العصر'], answer: 0, explain: '«ركعتا الفجر خير من الدنيا وما فيها».', page: 15 },
    { type: 'tf', q: 'صلاة الإشراق غير صلاة الضحى.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هي صلاة الضحى في أول وقتها.', page: 17 },
    { type: 'mc', q: 'كم ركوعًا في كل ركعة من صلاة الكسوف؟', options: ['ركوعان', 'ركوع واحد', 'ثلاثة', 'أربعة'], answer: 0, explain: 'في كل ركعة قيامان وقراءتان وركوعان.', page: 20 },
    { type: 'tf', q: 'إذا لم يعلم بالكسوف إلا بعد زواله قضاه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'لا تقضى.', page: 21 },
    { type: 'mc', q: 'ما حكم تحية المسجد في وقت النهي؟', options: ['تصلى لأنها من ذوات الأسباب', 'لا تصلى', 'تحرم', 'تؤخر إلى خروج الوقت'], answer: 0, explain: 'كما في الدرس الخامس.', page: 26 }
  ]),
  note: 'نشاط الكتاب في الصفحة ٢٧. أجزاء «للاطلاع فقط» في الكتاب: الجماعة في التطوع (ص١٤)، عدد ركعات الوتر وما يقرأ فيه (ص١٧)، صفة الكسوف (ص٢٠)، الاستسقاء (ص٢٢–٢٤).'
}

const nl = {
  scope: 'unit',
  unit: 1,
  title: 'Vrijwillig gebed',
  subtitle: 'Vijf lessen samen op één pagina',
  summary: 'Wat vrijwillig gebed is, de waarde en soorten ervan; de vaste sunna-gebeden; de witr en het ḍuḥā-gebed; het eclips- en het regengebed; en de tijden waarop bidden verboden is, met de uitzonderingen.',
  source: { ...source, label: 'Kitāb al-Fiqh (2), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 1 in één kaart',
    intro: 'Vrijwillig gebed: soorten en tijden.',
    root: { label: 'Vrijwillig gebed', sub: 'Eenheid 1' },
    nodes: [
      { label: 'Vrijwillig gebed en zijn waarde', sub: 'les 1', page: 12, children: ['definitie', 'wijsheid', 'aan een tijd gebonden of vrij'] },
      { label: 'Vaste sunna-gebeden', sub: 'les 2', page: 14, children: ['twaalf rakʿa’s', 'het sterkst: fajr'] },
      { label: 'Witr en ḍuḥā', sub: 'les 3', page: 15, children: ['tijd', 'vormen', 'tijd van ḍuḥā'] },
      { label: 'Eclips en regen', sub: 'les 4', page: 19, children: ['twee buigingen per rakʿa', 'soorten regenbede'] },
      { label: 'Verboden tijden', sub: 'les 5', page: 24, children: ['drie tijden', 'de reden', 'gebeden met een aanleiding'] }
    ]
  },
  points: [
    { text: 'Taṭawwuʿ is taalkundig iets uit vrije wil geven; als term: gebeden verrichten die niet verplicht zijn. Het heet ook sunna, mustaḥabb, raghība en faḍīla.', page: 12 },
    { text: 'Staan is beter bij vrijwillig gebed; wie zittend bidt terwijl hij kan staan, krijgt de helft van de beloning; wie niet kan staan, de volle beloning.', page: 12 },
    { text: 'De wijsheid van vrijwillig gebed: rangen verhogen en zonden uitwissen, het Paradijs binnengaan, en tekorten in het verplichte gebed aanvullen.', page: 13 },
    { text: 'De vaste sunna’s zijn twaalf rakʿa’s, de sterkste zijn de twee van fajr; vier vóór ʿaṣr zijn aanbevolen maar geen vaste sunna.', page: 15 },
    { text: 'De witr wordt gebeden tussen ʿishāʾ en het aanbreken van de dageraad: vroeg wie vreest niet op te staan, laat wie hoopt op te staan.', page: 16 },
    { text: 'Het ishrāq-gebed is het ḍuḥā-gebed aan het begin van zijn tijd; het zijn geen twee verschillende gebeden.', page: 17 },
    { text: 'Kusūf en khusūf zijn hetzelfde; het eclipsgebed is een sterke sunna, en wordt niet ingehaald als je pas na afloop van de eclips hoort.', page: 19 },
    { text: 'Uitgezonderd van de verboden tijden zijn gebeden met een aanleiding, zoals het begroetingsgebed van de moskee, gemiste gebeden en de rakʿa’s na de ṭawāf.', page: 26 }
  ],
  terms: [
    { term: 'التطوع', translit: 'at-taṭawwuʿ', meaning: 'Taalkundig: vrijwillig geven wat niet verplicht is; als term: niet-verplichte gebeden verrichten.', explanation: '', notes: [], page: 12 },
    { term: 'التطوع المؤقت', translit: 'at-taṭawwuʿ al-muʾaqqat', meaning: 'Vrijwillig gebed met een vaste tijd, gekoppeld aan het verplichte (vaste sunna’s) of los ervan (witr, ḍuḥā).', explanation: '', notes: [], page: 13 },
    { term: 'التطوع المطلق', translit: 'at-taṭawwuʿ al-muṭlaq', meaning: 'Vrij gebed in de nacht of overdag, buiten de verboden tijden.', explanation: '', notes: [], page: 13 },
    { term: 'السنن الرواتب', translit: 'as-sunan ar-rawātib', meaning: 'De vaste sunna’s bij de verplichte gebeden: vier vóór en twee na ẓuhr, twee na maghrib, twee na ʿishāʾ en twee vóór fajr.', explanation: '', notes: [], page: 15 },
    { term: 'الوتر', translit: 'al-witr', meaning: 'Een sterke sunna tussen ʿishāʾ en de dageraad; minimaal één rakʿa.', explanation: '', notes: [], page: 15 },
    { term: 'صلاة الأوابين', translit: 'ṣalāt al-awwābīn', meaning: 'Het gebed van wie zich steeds tot Allah wenden: het ḍuḥā-gebed.', explanation: '', notes: [], page: 17 },
    { term: 'ترمض الفصال', translit: 'tarmaḍu l-fiṣāl', meaning: 'Als het zand heet wordt voor de jonge kamelen.', explanation: '', notes: [], page: 18 },
    { term: 'الكسوف / الخسوف', translit: 'al-kusūf / al-khusūf', meaning: 'Hetzelfde: het verdwijnen van (een deel van) het licht van zon of maan.', explanation: '', notes: [], page: 19 },
    { term: 'الاستسقاء', translit: 'al-istisqāʾ', meaning: 'Allah om regen vragen bij droogte, op een vastgestelde wijze.', explanation: '', notes: [], page: 22 },
    { term: 'قيد رمح', translit: 'qīd rumḥ', meaning: 'Een speerlengte hoogte van de zon, ongeveer een kwartier na zonsopgang.', explanation: '', notes: [], page: 24 },
    { term: 'ذوات الأسباب', translit: 'dhawāt al-asbāb', meaning: 'Gebeden met een aanleiding; die mogen ook in de verboden tijden.', explanation: '', notes: [], page: 26 }
  ],
  diagrams: [
    {
      type: 'compare',
      title: 'De verboden tijden',
      intro: 'Zoals in les 5.',
      columns: ['Tijd', 'Reden'],
      rows: [
        { label: 'Eerste', cells: ['na het ochtendgebed tot de zon een speerlengte is gerezen', 'ongelovigen knielen voor de opkomende zon'] },
        { label: 'Tweede', cells: ['als de zon in het midden van de hemel staat tot ze overhelt (zo’n dertien minuten vóór ẓuhr)', 'dan wordt de Hel opgestookt'] },
        { label: 'Derde', cells: ['na het ʿaṣr-gebed tot zonsondergang', 'ongelovigen knielen voor de ondergaande zon'] }
      ],
      page: 24
    },
    {
      type: 'compare',
      title: 'Vormen van de witr',
      intro: 'Zoals in les 3.',
      columns: ['Vorm'],
      rows: [
        { label: 'Drie', cells: ['twee, groeten, dan één; of aaneen met één tashahhud'] },
        { label: 'Vijf of zeven', cells: ['aaneen, alleen aan het eind zitten'] },
        { label: 'Negen', cells: ['zitten in de achtste zonder groet, dan opstaan voor de negende'] },
        { label: 'Elf', cells: ['de beste witr; dertien mag ook (alleen ter kennisname)'] }
      ],
      page: 16
    },
    {
      type: 'flow',
      title: 'De vorm van het eclipsgebed',
      intro: 'Zoals in les 4 (alleen ter kennisname).',
      nodes: [
        { label: 'al-Fātiḥa en een lange soera, hardop', sub: 'eerste keer staan' },
        { label: 'lange buiging, dan rechtop', sub: 'zonder neer te knielen' },
        { label: 'al-Fātiḥa en een kortere soera', sub: 'tweede keer staan' },
        { label: 'buiging, rechtop, twee lange sujūd', sub: 'einde eerste rakʿa' },
        { label: 'tweede rakʿa zoals de eerste, maar korter', sub: 'dan tashahhud en groet' }
      ],
      page: 20
    }
  ],
  sections: [
    { title: 'De sunna voor wie zittend bidt', text: 'In kleermakerszit zitten, zoals ʿĀʾisha hem zag bidden.', page: 12 },
    { title: 'Welk vrijwillig gebed in gemeenschap (alleen ter kennisname)', text: 'Alleen het eclipsgebed, tarāwīḥ en het regengebed.', more: FYI_NL, page: 14 },
    { title: 'Tussen elke twee oproepen een gebed', text: 'Vrijwillig bidden tussen adhān en iqāma is sunna voor wie wil; zo zei hij drie keer "bid vóór maghrib" en daarna "voor wie wil".', page: 15 },
    { title: 'Wat je in de witr reciteert (alleen ter kennisname)', text: 'Bij drie rakʿa’s is de sunna al-Aʿlā, al-Kāfirūn en al-Ikhlāṣ, en soms iets anders.', more: FYI_NL, page: 17 },
    { title: 'Tijd en aantal van ḍuḥā', text: 'Van een speerlengte zonnehoogte tot zo’n twaalf minuten vóór ẓuhr, het best als het heet wordt; minimaal twee rakʿa’s; op de dag van de verovering bad hij er acht; beter is groeten na elke twee.', page: 18 },
    { title: 'Regels over de tijd van het eclipsgebed', text: 'Is het gebed klaar voor de eclips voorbij is, dan veel smeekbeden doen zonder het te herhalen; wordt het licht tijdens het gebed, het kort afmaken; daarna spreekt de imam de mensen toe.', page: 21 },
    { title: 'Wie te laat komt bij het eclipsgebed', text: 'Mist hij de eerste buiging, dan mist hij de rakʿa en haalt hij die in zijn vorm in; mist hij het hele gebed, dan wordt het niet ingehaald.', page: 21 },
    { title: 'De vorm van het regengebed (alleen ter kennisname)', text: 'Twee rakʿa’s zonder adhān en iqāma, zes takbīrs in de eerste en vijf in de tweede; daarna een preek met vergeving vragen, en de mantel omkeren.', more: FYI_NL, page: 23 },
    { title: 'Het begroetingsgebed van de moskee', text: 'Sterk aanbevolen, ook in een verboden tijd; de vaste sunna ervoor volstaat ook; op vrijdag kort houden als de imam preekt.', page: 26 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Wijsheid van vrijwillig gebed', items: ['rangen verhogen en zonden uitwissen', 'een van de grootste middelen om het Paradijs binnen te gaan', 'tekorten in het verplichte gebed aanvullen'], page: 13, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten regenbede (alleen ter kennisname)', items: ['het minste: smeekbede zonder gebed', 'het midden: smeekbede na het vrijdaggebed of een ander gebed', 'het beste: twee rakʿa’s met een preek'], page: 22, origin: 'boek' },
    { kind: 'uitzondering', title: 'Gebeden met een aanleiding in de verboden tijden', items: ['het begroetingsgebed van de moskee', 'de twee rakʿa’s na de ṭawāf', 'gebed na de wassing', 'de sunna van fajr na het verplichte gebed inhalen', 'de sunna van ẓuhr na ʿaṣr inhalen', 'het begrafenis- en het eclipsgebed', 'gemiste verplichte gebeden inhalen'], page: 26, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Vrijwillig gebed verhoogt rangen en vult het verplichte aan; staan is beter.',
    'De vaste sunna’s zijn twaalf rakʿa’s; de sterkste zijn de twee van fajr.',
    'De witr is van ʿishāʾ tot de dageraad: minimaal één, het best elf.',
    'Het eclipsgebed heeft twee buigingen per rakʿa; het regengebed is twee rakʿa’s zoals het feestgebed.',
    'Er zijn drie verboden tijden; gebeden met een aanleiding zijn uitgezonderd.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Welke beloning krijgt wie een vrijwillig gebed zittend bidt terwijl hij kan staan?', options: ['de helft van wie staat', 'evenveel als wie staat', 'geen beloning', 'het dubbele'], answer: 0, explain: 'Zoals in de hadith van ʿImrān ibn Ḥuṣayn.', page: 12 },
    { type: 'mc', q: 'Wat is de sterkste vaste sunna?', options: ['de twee rakʿa’s van fajr', 'de sunna van maghrib', 'de sunna van ʿishāʾ', 'vier vóór ʿaṣr'], answer: 0, explain: '"De twee rakʿa’s van fajr zijn beter dan de wereld en alles wat erin is."', page: 15 },
    { type: 'tf', q: 'Het ishrāq-gebed is een ander gebed dan ḍuḥā.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het is ḍuḥā aan het begin van zijn tijd.', page: 17 },
    { type: 'mc', q: 'Hoeveel buigingen heeft elke rakʿa van het eclipsgebed?', options: ['twee', 'één', 'drie', 'vier'], answer: 0, explain: 'Elke rakʿa heeft twee keer staan, reciteren en buigen.', page: 20 },
    { type: 'tf', q: 'Wie pas na afloop van een eclips ervan hoort, haalt het gebed in.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Het wordt niet ingehaald.', page: 21 },
    { type: 'mc', q: 'Mag je het begroetingsgebed van de moskee in een verboden tijd bidden?', options: ['ja, het is een gebed met een aanleiding', 'nee', 'het is verboden', 'je stelt het uit tot de tijd voorbij is'], answer: 0, explain: 'Zoals in les 5.', page: 26 }
  ]),
  note: 'Oefening van het boek op p. 27. Delen die het boek alleen ter kennisname geeft: gemeenschap bij vrijwillig gebed (p. 14), aantal rakʿa’s en recitatie in de witr (p. 17), de vorm van het eclipsgebed (p. 20) en het regengebed (p. 22–24). De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n2-fiqh', chapter: '1', unit: 1, ar, nl }
