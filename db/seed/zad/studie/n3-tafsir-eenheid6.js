// Hoofdstukkaart bij التفسير (٣), eenheid 6: سورة الفجر (lessen 15–17, boek p. 57–68).
// Opgesteld uit de leesnotities van het boek; hadith en takhrij zoals in het boek. Twee lessen
// op p. 60 en 63 (over de vernietiging van deze umma en over de man met verward haar) staan
// in het boek zonder bron; ze staan alleen als uitleg in de tekst.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-tafsir',
  chapter: '15',
  unit: 6,
  source: {
    label: ['كتاب التفسير (٣)، سلسلة زاد العلمية', 'At-Tafsīr (3), Zad-reeks'],
    pages: '57–68',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الفجر', 'Soera al-Fajr'],
  subtitle: ['ثلاثة دروس مجموعة في صفحة واحدة', 'Drie lessen samen op één pagina'],
  summary: [
    'سورة مكية تبدأ بالقسم بالفجر والليالي العشر والشفع والوتر والليل، ثم تذكر هلاك عاد وثمود وفرعون، ثم تبين خطأ الإنسان في فهم الابتلاء بالغنى والفقر، ثم تصف يوم دك الأرض ومجيء الرب والملائكة وجهنم، وندم الإنسان، وتختم بنداء النفس المطمئنة.',
    'Een Mekkaanse soera die opent met eden bij de dageraad, de tien nachten, het even en oneven en de nacht. Daarna noemt zij de ondergang van ʿĀd, Thamūd en Firʿawn, legt zij uit hoe de mens de beproeving met rijkdom en armoede verkeerd begrijpt, en beschrijft zij de Dag waarop de aarde verpletterd wordt, de Heer komt met de engelen en de Hel gebracht wordt, en de spijt van de mens. Zij eindigt met de roep aan de geruste ziel.'
  ],
  map: {
    title: ['سورة الفجر في خريطة واحدة', 'Soera al-Fajr in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الفجر', 'Soera al-Fajr'], ['الوحدة السادسة', 'Eenheid 6']],
    nodes: [
      { label: ['الأقسام', 'De eden'], sub: ['الآيات ١–٥', 'vers 1–5'], page: 58, children: [['الفجر', 'de dageraad'], ['ليال عشر', 'tien nachten'], ['الشفع والوتر', 'even en oneven'], ['الليل إذا يسر', 'de nacht die voorttrekt']] },
      { label: ['الأمم المهلكة', 'De vernietigde volken'], sub: ['الآيات ٦–١٤', 'vers 6–14'], page: 58, children: [['عاد إرم ذات العماد', 'ʿĀd, Iram met de zuilen'], ['ثمود جابوا الصخر', 'Thamūd hakten de rotsen uit'], ['فرعون ذي الأوتاد', 'Firʿawn met de palen']] },
      { label: ['الابتلاء', 'De beproeving'], sub: ['الآيات ١٥–٢٠', 'vers 15–20'], page: 62, children: [['الإكرام والتنعيم', 'eer en gunsten'], ['تقدير الرزق', 'beperkte voorziening'], ['أربع صفات مذمومة', 'vier laakbare eigenschappen']] },
      { label: ['يوم الجزاء', 'De Dag van vergelding'], sub: ['الآيات ٢١–٢٦', 'vers 21–26'], page: 65, children: [['دك الأرض', 'de aarde verpletterd'], ['مجيء الرب والملك صفا', 'de Heer komt, de engelen in rijen'], ['يا ليتني قدمت لحياتي', 'had ik maar vooruitgestuurd']] },
      { label: ['النفس المطمئنة', 'De geruste ziel'], sub: ['الآيات ٢٧–٣٠', 'vers 27–30'], page: 66, children: [['راضية مرضية', 'tevreden en welgevallig'], ['فادخلي في عبادي', 'treed binnen onder Mijn dienaren'], ['وادخلي جنتي', 'treed Mijn Paradijs binnen']] }
    ]
  },
  points: [
    [58, 'الليالي العشر عشر ذي الحجة، وقيل: العشر الأواخر من رمضان.', 'De tien nachten zijn de eerste tien van Dhū l-Ḥijja; anderen zeggen: de laatste tien van Ramadan.'],
    [58, 'الليل شرعا من غروب الشمس إلى طلوع الفجر.', 'De nacht loopt volgens de sharīʿa van zonsondergang tot de dageraad.'],
    [58, 'سمي العقل حجرا لأنه يحجر صاحبه عما لا يليق.', 'Het verstand heet ḥijr omdat het de mens weerhoudt van ongepast gedrag.'],
    [59, 'كرر الله قصص الأمم المهلكة ليعتبر المؤمنون، والخطاب لكل من يتوجه إليه القرآن.', 'Allah herhaalt de verhalen van de vernietigde volken opdat de gelovigen lering trekken; de aanspraak geldt voor ieder tot wie de Koran zich richt.'],
    [60, 'خلق المخلوق تحويل وتغيير، وخلق الله إيجاد من العدم.', 'Het "scheppen" van een schepsel is omzetten en veranderen; Allahs scheppen is voortbrengen uit niets.'],
    [62, 'ليس كل من أنعم الله عليه مكرما عنده، ولا كل من قدر عليه رزقه مهانا.', 'Niet iedereen die gunsten krijgt is geëerd bij Allah, en niet iedereen met beperkte voorziening is vernederd.'],
    [67, 'مجيء الله يوم القيامة مجيء حقيقي يليق بجلاله، دون تحريف ولا تعطيل.', 'Allahs komen op de Opstandingsdag is werkelijk, op een wijze die bij zijn majesteit past, zonder verdraaiing of ontkenning.'],
    [68, 'ندم الغافل يوم القيامة يدعو إلى المبادرة بالأعمال الصالحة.', 'De spijt van de achteloze op de Opstandingsdag spoort aan tot haast met goede daden.']
  ],
  terms: [
    ['الفجر', 'al-fajr', 58, 'الضياء المنتشر في المشرق قرب طلوع الشمس.', 'Het licht dat zich in het oosten verspreidt vlak voor zonsopgang.'],
    ['الشفع والوتر', 'ash-shafʿ wa-l-watr', 58, 'كل شفع ووتر من العبادات والأيام وغيرها.', 'Al het even en oneven: aanbiddingen, dagen en meer.'],
    ['يسر', 'yasri', 58, 'يمضي ويرخي ظلامه.', 'Trekt voort en laat zijn duisternis neerdalen.'],
    ['حجر', 'ḥijr', 58, 'العقل؛ والحجر المنع.', 'Het verstand; ḥajr is verhinderen.'],
    ['إرم', 'Iram', 59, 'قبيلة من عاد.', 'Een stam van ʿĀd.'],
    ['ذات العماد', 'dhāt al-ʿimād', 59, 'ذات البناء القوي والأعمدة العالية.', 'Met sterke bouwwerken en hoge zuilen.'],
    ['جابوا الصخر', 'jābū ṣ-ṣakhr', 59, 'قطعوا الصخر بالوادي واتخذوه بيوتا.', 'Zij hakten de rotsen in de vallei uit tot woningen.'],
    ['الأوتاد', 'al-awtād', 59, 'الجنود الذين يثبتون أمره كما تثبت الأوتاد.', 'De legers die zijn bevel versterkten zoals palen iets vastzetten.'],
    ['سوط عذاب', 'sawṭ ʿadhāb', 59, 'عذاب شديد كالسوط في سرعة وقوعه.', 'Een zware straf, als een zweep in snelheid van treffen.'],
    ['لما', 'lamman', 63, 'أكلا شديدا يجمع نصيبه ونصيب غيره.', 'Gulzig eten, het eigen deel en dat van anderen.'],
    ['جما', 'jamman', 63, 'كثيرا مجتمعا.', 'Overvloedig en opgehoopt.'],
    ['المطمئنة', 'al-muṭmaʾinna', 66, 'الساكنة إلى ذكر الله ووعده، الموقنة بربها.', 'Gerust door het gedenken van Allah en zijn belofte, overtuigd van haar Heer.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['الأمم الثلاث', 'De drie volken'],
      intro: ['كما في الآيات ٦–١٣.', 'Zoals in vers 6–13.'],
      columns: [['صفتهم', 'Kenmerk'], ['نبيهم وهلاكهم', 'Profeet en ondergang']],
      rows: [
        { label: ['عاد', 'ʿĀd'], cells: [['إرم ذات العماد التي لم يخلق مثلها', 'Iram met de zuilen, zonder weerga'], ['هود؛ أهلكوا بريح صرصر عاتية', 'Hūd; vernietigd door een ijskoude storm']] },
        { label: ['ثمود', 'Thamūd'], cells: [['جابوا الصخر بالواد', 'hakten de rotsen in de vallei uit'], ['قوم صالح، ومساكنهم معروفة', 'het volk van Ṣāliḥ; hun woningen zijn nog bekend']] },
        { label: ['فرعون', 'Firʿawn'], cells: [['ذي الأوتاد', 'met de palen'], ['طغى في البلاد فصب عليه سوط عذاب', 'tiranniseerde het land en kreeg een zweep van straf']] }
      ],
      page: 59
    },
    {
      type: 'cards',
      title: ['أربع صفات ذمها الله', 'Vier eigenschappen die Allah afkeurt'],
      intro: ['في الآيات ١٧–٢٠.', 'In vers 17–20.'],
      nodes: [
        [63, 'لا تكرمون اليتيم', 'Jullie eren de wees niet', '', ''],
        [63, 'لا تحاضون على طعام المسكين', 'Jullie sporen elkaar niet aan de arme te voeden', '', ''],
        [63, 'تأكلون التراث أكلا لما', 'Jullie verslinden de erfenis', '', ''],
        [63, 'تحبون المال حبا جما', 'Jullie houden heel veel van geld', '', '']
      ]
    }
  ],
  sections: [
    [60, 'فرصة الثلث الأخير', 'De kans in het laatste derde', 'أقسم الله بالليل لما فيه من العبادات، ولأن الله ينزل كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر.', 'Allah zweert bij de nacht om de aanbiddingen erin, en omdat Allah elke nacht neerdaalt naar de laagste hemel als het laatste derde resteert.'],
    [60, 'هلاك هذه الأمة', 'De ondergang van deze umma', 'لا تهلك هذه الأمة بما أهلكت به الأمم السابقة، ولكن قد يجعل الله بأسها بينها، فيجب اجتناب الفتن.', 'Deze umma wordt niet vernietigd zoals vroegere volken, maar Allah kan onderlinge strijd tussen hen brengen; daarom moet men beproevingen vermijden.'],
    [63, 'لا يدل حال الدنيا على المنزلة', 'Wereldse toestand zegt niets over rang', 'رب منعم في الدنيا ممقوت عند الله، ورب أشعث أغبر لو أقسم على الله لأبره.', 'Menig iemand met gunsten in deze wereld is verwenst bij Allah, en menig iemand met verward haar en stoffig zou, als hij bij Allah zwoer, door Hem gelijk krijgen.'],
    [66, 'قراءتان', 'Twee lezingen', '﴿لا يعذب عذابه أحد﴾: لا يعذب أحد كعذاب الله، وقرئ بفتح الذال: لا يعذب أحد كعذاب هذا؛ ومثلها ﴿ولا يوثق وثاقه أحد﴾.', '"Niemand straft zoals Hij": ook gelezen als "niemand wordt gestraft zoals deze"; zo ook "niemand boeit zoals Hij".']
  ],
  keycards: [
    ['onderscheid', 60, 'خلق الله وخلق المخلوق', 'Scheppen door Allah en door een schepsel', ['خلق الله: إيجاد من العدم', 'خلق المخلوق: تحويل الشيء وتغييره من صفة إلى صفة'], ['Allah schept: voortbrengen uit niets', 'een schepsel "schept": iets bestaands omzetten en veranderen']],
    ['onderscheid', 67, 'مجيء الله', 'Het komen van Allah', ['أهل السنة: مجيء حقيقي يليق بجلاله على ظاهر النص', 'أهل التعطيل: جاء أمره أو حكمه، وهو صرف للنص عن ظاهره'], ['ahl as-sunna: een werkelijk komen dat past bij zijn majesteit, volgens de tekst', 'de ontkenners: "zijn bevel of oordeel kwam"; dat haalt de tekst van zijn betekenis']]
  ],
  hadith: [
    { text: 'أفتان يا معاذ؟! أين أنت من: سبح اسم ربك الأعلى، والشمس وضحاها، والفجر، والليل إذا يغشى؟!', takhrij: 'رواه النسائي بإسناد صحيح', takhrijNl: 'an-Nasāʾī met een authentieke keten', narrator: 'جابر', narratorNl: 'Jābir', note: 'لما أطال معاذ الصلاة فانصرف رجل وصلى وحده.', nlNote: 'Toen Muʿādh het gebed lang maakte en een man apart bad en wegging.', nl: 'Ben jij een onruststoker, Muʿādh? Waarom niet "Verheerlijk de naam van je Heer", "Bij de zon en haar ochtendlicht", "Bij de dageraad" en "Bij de nacht wanneer hij bedekt"?', pages: [57] },
    { text: 'ما العمل في أيام أفضل منها في هذه، قالوا: ولا الجهاد؟ قال: ولا الجهاد، إلا رجل خرج يخاطر بنفسه وماله فلم يرجع بشيء', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'يعني عشر ذي الحجة.', nlNote: 'Dat wil zeggen de eerste tien dagen van Dhū l-Ḥijja.', nl: 'Er is geen daad op andere dagen beter dan op deze. Zij vroegen: ook de jihad niet? Hij zei: ook de jihad niet, behalve iemand die uittrekt met zijn leven en bezit en met niets terugkeert', pages: [58] },
    { text: 'يقال لهم أحيوا ما خلقتم', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'في المصورين؛ ذكره الكتاب في وصف عمل الإنسان بالخلق.', nlNote: 'Over de afbeelders; genoemd bij het "scheppen" door mensen.', nl: 'Tegen hen wordt gezegd: maak levend wat jullie geschapen hebben', pages: [60] },
    { text: 'من يسألني فأعطيه، من يدعوني فأستجيب له، من يستغفرني فأغفر له', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', note: 'ينزل الله كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر.', nlNote: 'Allah daalt elke nacht neer naar de laagste hemel als het laatste derde van de nacht resteert.', nl: 'Wie vraagt Mij, zodat Ik hem geef? Wie roept Mij aan, zodat Ik hem verhoor? Wie vraagt Mij om vergeving, zodat Ik hem vergeef?', pages: [60] },
    { text: 'يؤتى بجهنم يومئذ لها سبعون ألف زمام، مع كل زمام سبعون ألف ملك يجرونها', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'ابن مسعود', narratorNl: 'Ibn Masʿūd', nl: 'Op die dag wordt de Hel gebracht met zeventigduizend teugels; bij elke teugel zeventigduizend engelen die haar trekken', pages: [66] }
  ],
  persons: [
    ['jabir-ibn-abdallah', 'text', [57], 'روى إنكار النبي ﷺ على معاذ تطويله.', 'Overleverde dat de Profeet ﷺ Muʿādh zijn lange gebed verweet.'],
    ['muadh-ibn-jabal', 'text', [57], 'أطال الصلاة فأنكر عليه النبي ﷺ.', 'Maakte het gebed lang; de Profeet ﷺ keurde het af.'],
    ['an-nasai', 'takhrij', [57], 'روى حديث معاذ بإسناد صحيح.', 'Overleverde de hadith van Muʿādh met een authentieke keten.'],
    ['ibn-abbas', 'text', [58], 'روى فضل العمل في عشر ذي الحجة.', 'Overleverde de deugd van daden in de tien dagen van Dhū l-Ḥijja.'],
    ['al-bukhari', 'takhrij', [58], 'روى حديث ابن عباس في العشر.', 'Overleverde de hadith van Ibn ʿAbbās over de tien dagen.'],
    ['ibn-masud', 'text', [66], 'روى حديث المجيء بجهنم.', 'Overleverde de hadith over het brengen van de Hel.'],
    ['muslim', 'takhrij', [66], 'روى حديث المجيء بجهنم.', 'Overleverde de hadith over het brengen van de Hel.']
  ],
  review: [
    ['أقسم الله بالفجر والليالي العشر والشفع والوتر والليل.', 'Allah zweert bij de dageraad, de tien nachten, het even en oneven en de nacht.'],
    ['أهلك الله عادا وثمود وفرعون لطغيانهم وفسادهم.', 'Allah vernietigde ʿĀd, Thamūd en Firʿawn om hun tirannie en verderf.'],
    ['الغنى والفقر ابتلاء، لا علامة كرامة أو إهانة.', 'Rijkdom en armoede zijn beproeving, geen teken van eer of vernedering.'],
    ['يوم القيامة يجيء الرب والملائكة صفا ويؤتى بجهنم.', 'Op de Opstandingsdag komt de Heer, de engelen staan in rijen en de Hel wordt gebracht.'],
    ['تنادى النفس المطمئنة: ارجعي إلى ربك راضية مرضية.', 'De geruste ziel wordt geroepen: keer terug naar je Heer, tevreden en welgevallig.']
  ],
  quiz: [
    { type: 'mc', page: 58, q: ['ما المراد بالليالي العشر في أشهر الأقوال؟', 'Wat zijn de tien nachten volgens de bekendste mening?'], options: [['عشر ذي الحجة', 'عشر محرم', 'أول رمضان', 'عشر شوال'], ['de eerste tien van Dhū l-Ḥijja', 'de eerste tien van Muḥarram', 'het begin van Ramadan', 'de eerste tien van Shawwāl']], answer: 0, explain: ['وقيل: العشر الأواخر من رمضان.', 'Anderen zeggen: de laatste tien van Ramadan.'] },
    { type: 'mc', page: 58, q: ['لماذا سمي العقل حجرا؟', 'Waarom heet het verstand ḥijr?'], options: [['لأنه يمنع صاحبه مما لا يليق', 'لأنه صلب كالحجر', 'لأنه في الرأس', 'لأنه لا يتغير'], ['omdat het de mens weerhoudt van ongepast gedrag', 'omdat het hard is als steen', 'omdat het in het hoofd zit', 'omdat het niet verandert']], answer: 0, explain: ['الحجر المنع.', 'Ḥajr is verhinderen.'] },
    { type: 'tf', page: 62, q: ['من وسع الله عليه في الدنيا فهو مكرم عنده.', 'Wie in deze wereld ruime voorziening krijgt, is geëerd bij Allah.'], answer: 1, explain: ['﴿كلا﴾: ليس كل من أنعم عليه مكرما.', '"Nee": niet iedereen met gunsten is geëerd.'] },
    { type: 'mc', page: 66, q: ['كم زماما لجهنم يوم القيامة كما في الحديث؟', 'Met hoeveel teugels wordt de Hel gebracht, volgens de hadith?'], options: [['سبعون ألفا', 'سبعة', 'ألف', 'سبعون'], ['zeventigduizend', 'zeven', 'duizend', 'zeventig']], answer: 0, explain: ['مع كل زمام سبعون ألف ملك.', 'Bij elke teugel zeventigduizend engelen.'] },
    { type: 'mc', page: 67, q: ['ما عقيدة أهل السنة في ﴿وجاء ربك﴾؟', 'Wat is het geloof van ahl as-sunna bij "en je Heer komt"?'], options: [['مجيء حقيقي يليق بجلاله', 'جاء أمره فقط', 'جاء ملك من الملائكة', 'لا معنى له'], ['een werkelijk komen dat bij zijn majesteit past', 'alleen zijn bevel komt', 'een engel komt', 'het heeft geen betekenis']], answer: 0, explain: ['دون تحريف ولا تعطيل.', 'Zonder verdraaiing of ontkenning.'] },
    { type: 'tf', page: 67, q: ['يقال للنفس المطمئنة ﴿وادخلي جنتي﴾ عند الموت ويوم القيامة.', 'Tegen de geruste ziel wordt "treed Mijn Paradijs binnen" gezegd bij de dood en op de Opstandingsdag.'], answer: 0, explain: ['كما ذكر الكتاب.', 'Zoals het boek vermeldt.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٦١ و٦٤ و٦٨.', 'Oefeningen van het boek op p. 61, 64 en 68. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
