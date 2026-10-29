// Hoofdstukkaart bij التربية الإسلامية (٤), eenheid 8: الكبر (lessen 18–20, boek p. 50–56).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tarbiyah/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tarbiyah',
  chapter: '18',
  unit: 8,
  source: {
    label: ['كتاب التربية الإسلامية (٤): أمراض القلوب، سلسلة زاد العلمية', 'Islamitische opvoeding (4): ziekten van het hart, Zad-reeks'],
    pages: '50–56',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTarbyiah/page/n{p}/mode/1up'
  },
  title: ['الكبر', 'Hoogmoed'],
  subtitle: ['ثلاثة دروس', 'Drie lessen'],
  summary: [
    'الكبر بطر الحق وغمط الناس، والعجب أن ترى أن عندك شيئا ليس عند غيرك. من أسبابه الرغبة في عدم الخضوع والطموح إلى الامتياز واختلال معايير التفاضل، ويحصل بالمال والعلم والعبادة والنسب. للمتكبر عقوبة في الدنيا والآخرة، وعلاجه فرض عين بالدعاء واستئصال أصله ومعرفة النفس والرب والتواضع.',
    'Hoogmoed is de waarheid afwijzen en mensen minachten; ijdelheid is denken dat jij iets hebt wat anderen niet hebben. Oorzaken: niet willen onderwerpen, verlangen naar voorrang en verstoorde maatstaven; hoogmoed ontstaat door geld, kennis, aanbidding en afkomst. De hoogmoedige wordt in deze wereld en het hiernamaals gestraft; behandeling is een persoonlijke plicht: smeekbede, de wortel uitroeien, jezelf en je Heer kennen, en nederigheid.'
  ],
  map: {
    title: ['الكبر في خريطة واحدة', 'Hoogmoed in één kaart'],
    intro: ['كما في الدروس الثلاثة.', 'Zoals in de drie lessen.'],
    root: [['الكبر', 'Hoogmoed'], ['الوحدة الثامنة', 'Eenheid 8']],
    nodes: [
      { label: ['التعريف والأسباب', 'Definitie en oorzaken'], sub: ['ص ٥٠–٥١', 'p. 50–51'], page: 50, children: [['بطر الحق وغمط الناس', 'de waarheid afwijzen en mensen minachten'], ['الفرق بين الكبر والعجب', 'hoogmoed en ijdelheid']] },
      { label: ['بم يحصل', 'Waardoor het ontstaat'], sub: ['ص ٥١–٥٢', 'p. 51–52'], page: 51, children: [['المال', 'geld'], ['العلم', 'kennis'], ['العبادة', 'aanbidding'], ['النسب', 'afkomst']] },
      { label: ['عقوبة المتكبر', 'Straf van de hoogmoedige'], sub: ['ص ٥٣–٥٤', 'p. 53–54'], page: 53, children: [['في الدنيا', 'in deze wereld'], ['في الآخرة', 'in het hiernamaals']] },
      { label: ['العلاج', 'Behandeling'], sub: ['ص ٥٥', 'p. 55'], page: 55, children: [['الدعاء', 'smeekbede'], ['معرفة النفس والرب', 'jezelf en je Heer kennen'], ['التواضع', 'nederigheid']] }
    ]
  },
  points: [
    [50, 'بطر الحق: جحده استخفافا به وترفعا عن قبوله، وغمط الناس: احتقارهم وازدراؤهم والترفع عليهم.', 'Baṭar al-ḥaqq: de waarheid ontkennen uit minachting; ghamṭ an-nās: mensen minachten en zich boven hen verheffen.'],
    [50, 'قال ابن المبارك: الكبر أن تزدري الناس، والعجب أن ترى أن عندك شيئا ليس عند غيرك.', 'Ibn al-Mubārak: hoogmoed is mensen minachten; ijdelheid is denken dat jij iets hebt wat anderen niet hebben.'],
    [50, 'قال البغوي في ﴿إن الإنسان ليطغى أن رآه استغنى﴾: يتجاوز حده ويستكبر على ربه لأنه رأى نفسه غنيا.', 'Al-Baghawī over 96:6–7: de mens overschrijdt zijn grens en is hoogmoedig tegenover zijn Heer omdat hij zich zelfvoorzienend acht.'],
    [51, 'اختلال المعايير بتقديم الغني ذي الجاه ولو كان فاسقا، وتأخير التقي لفقره، من أسباب الكبر.', 'Verstoorde maatstaven, zoals de rijke zondaar voorrang geven en de arme godvrezende achterstellen, veroorzaken hoogmoed.'],
    [52, 'أشد الكبر ما لا سبب له إلا استحكام المرض في القلب، ولذا جاء في ذم العائل المستكبر ما هو أشد.', 'De ergste hoogmoed heeft geen oorzaak dan een diepgewortelde hartziekte; daarom wordt de hoogmoedige arme strenger gelaakt.'],
    [53, 'من تواضع لله رفعه، ومن تكبر على الحق وضعه الله، ويعاقب المتكبر بنقيض قصده.', 'Wie nederig is voor Allah, die verheft Hij; wie zich tegen de waarheid verheft, die vernedert Hij; de hoogmoedige krijgt het tegendeel van wat hij zocht.'],
    [55, 'إزالة الكبر فرض عين، ولا يزول بمجرد التمني بل بالمعالجة.', 'Hoogmoed wegnemen is een persoonlijke plicht; het verdwijnt niet door wensen maar door behandeling.'],
    [55, 'كان النبي ﷺ في مهنة أهله، يفلي ثوبه ويحلب شاته ويخدم نفسه، ويخيط ثوبه ويخصف نعله.', 'De Profeet ﷺ hielp zijn gezin, zocht zijn kleding na, molk zijn geit, diende zichzelf, naaide zijn kleren en herstelde zijn sandalen.']
  ],
  terms: [
    ['الكبر', 'al-kibr', 50, 'لغة: العظمة والتجبر. وشرعا: بطر الحق وغمط الناس.', 'Taal: grootheid en tirannie. Sharʿī: de waarheid afwijzen en mensen minachten.'],
    ['العجب', 'al-ʿujb', 50, 'أن ترى أن عندك شيئا ليس عند غيرك.', 'Denken dat jij iets hebt wat anderen niet hebben.'],
    ['نفخه وهمزه ونفثه', 'nafkhuhu, hamzuhu, nafthuhu', 55, 'نفخه: الكبر، وهمزه: الموتة، ونفثه: الشعر، كما فسرها عمرو بن مرة.', 'Zijn blazen: hoogmoed; zijn prikken: een soort waanzin; zijn spuwen: poëzie, zoals ʿAmr ibn Murra uitlegde.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['عقوبة المتكبر', 'Straf van de hoogmoedige'],
      intro: ['كما في الصفحتين ٥٣–٥٤.', 'Zoals op p. 53–54.'],
      columns: [['في الدنيا', 'In deze wereld'], ['في الآخرة', 'In het hiernamaals']],
      rows: [
        { label: ['أولا', 'Eerst'], cells: [['يحتقره الناس ويستصغرونه', 'mensen minachten hem'], ['يلقى الله وهو عليه غضبان', 'hij ontmoet Allah terwijl Hij boos op hem is']] },
        { label: ['ثانيا', 'Dan'], cells: [['يصرف عن آيات الله', 'hij wordt afgehouden van Allahs tekenen'], ['أبعد الناس مجلسا من النبي ﷺ', 'het verst verwijderd van de Profeet ﷺ']] },
        { label: ['ثالثا', 'Verder'], cells: [['زوال النعم وحلول النقم، والخسف', 'verlies van gunsten, straf en wegzinken in de aarde'], ['يحشر كأمثال الذر، ويمنع من دخول الجنة', 'verzameld als mieren, en geweerd uit het Paradijs']] }
      ],
      page: 53
    }
  ],
  sections: [
    [51, 'الكبر بالمال', 'Hoogmoed door geld', 'قال صاحب الجنتين: ﴿أنا أكثر منك مالا وأعز نفرا﴾ [الكهف: 34]، وقال تعالى: ﴿ثم إذا خولناه نعمة منا قال إنما أوتيته على علم﴾ [الزمر: 49].', 'De eigenaar van de twee tuinen zei: "ik heb meer bezit dan jij en meer aanzien" (18:34); en wie een gunst krijgt, zegt: "ik kreeg het door mijn kennis" (39:49).'],
    [52, 'الكبر بالعلم والعبادة والنسب', 'Hoogmoed door kennis, aanbidding en afkomst', 'يسرع الكبر إلى بعض طلاب العلم فيرى نفسه كاملا ويستجهل غيره، ويتكبر بعضهم بعبادته فيرى الناس هالكين، وبعضهم بنسبه فيحتقر من دونه.', 'Hoogmoed komt snel bij sommige studenten, die zichzelf volmaakt en anderen onwetend vinden; sommigen zijn hoogmoedig om hun aanbidding en zien anderen als verloren; anderen om hun afkomst.'],
    [54, 'أبعد الناس مجلسا', 'Het verst verwijderd', 'أبغض الناس وأبعدهم مجلسا من رسول الله ﷺ يوم القيامة المتكبرون، كما جاء في سنن الترمذي بسند حسن.', 'De meest gehate en verst verwijderde mensen van de Boodschapper ﷺ op de Dag der Opstanding zijn de hoogmoedigen, zoals in de Sunan van at-Tirmidhī met een goede keten.'],
    [55, 'استئصال أصل الكبر', 'De wortel van hoogmoed uitroeien', 'أن يعرف العبد نفسه فيعلم أنه لا يليق به إلا التواضع، ويعرف ربه فيعلم أنه لا تليق العظمة إلا بالله، وينظر في أسباب تكبره فيدرك أنه لا يليق به التكبر بها.', 'De dienaar kent zichzelf en weet dat alleen nederigheid hem past; hij kent zijn Heer en weet dat grootheid alleen Allah past; en hij overdenkt de redenen van zijn hoogmoed en ziet dat ze hem niet passen.']
  ],
  keycards: [
    ['onderscheid', 50, 'الكبر والعجب', 'Hoogmoed en ijdelheid', ['الكبر: أن تزدري الناس', 'العجب: أن ترى أن عندك شيئا ليس عند غيرك'], ['hoogmoed: mensen minachten', 'ijdelheid: denken dat jij iets hebt wat anderen niet hebben']],
    ['opsomming', 50, 'أسباب الكبر', 'Oorzaken van hoogmoed', ['الرغبة في عدم الخضوع لأحد', 'الطموح الجامح إلى الامتياز', 'اختلال معايير التفاضل', 'مقارنة النعم ونسيان المنعم'], ['niet willen onderwerpen', 'ongebreideld verlangen naar voorrang', 'verstoorde maatstaven', 'gunsten vergelijken en de Gever vergeten']]
  ],
  hadith: [
    { text: 'الكبر بطر الحق، وغمط الناس', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Hoogmoed is de waarheid afwijzen en de mensen minachten', pages: [50] },
    { text: 'إذا قال الرجل: هلك الناس، فهو أهلكهم', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Als iemand zegt: de mensen zijn verloren, dan is hij zelf het meest verloren', pages: [52] },
    { text: 'كل بيمينك … لا استطعت، ما منعه إلا الكبر', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'سلمة بن الأكوع', narratorNl: 'Salama ibn al-Akwaʿ', note: 'قال: فما رفعها إلى فيه.', nlNote: 'Hij zei: en hij hief zijn hand niet meer naar zijn mond.', nl: 'Eet met je rechterhand … Moge je het niet kunnen; alleen hoogmoed hield hem tegen', pages: [53] },
    { text: 'بينما رجل يتبختر، يمشي في برديه قد أعجبته نفسه، فخسف الله به الأرض، فهو يتجلجل فيها إلى يوم القيامة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Terwijl een man trots liep in zijn twee mantels, ingenomen met zichzelf, liet Allah de aarde met hem wegzinken, en hij zakt erin weg tot de Dag der Opstanding', pages: [53] },
    { text: 'من تعظم في نفسه، أو اختال في مشيته؛ لقي الله وهو عليه غضبان', takhrij: 'رواه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'Wie zichzelf groot acht of trots loopt, ontmoet Allah terwijl Hij boos op hem is', pages: [54] },
    { text: 'يحشر المتكبرون يوم القيامة أمثال الذر في صور الرجال، يغشاهم الذل من كل مكان، فيساقون إلى سجن في جهنم يسمى بولس، تعلوهم نار الأنيار، يسقون من عصارة أهل النار، طينة الخبال', takhrij: 'رواه أحمد والترمذي، وحسنه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ḥasan volgens al-Albānī', narrator: 'عمرو بن شعيب عن أبيه عن جده', narratorNl: 'ʿAmr ibn Shuʿayb, van zijn vader, van zijn grootvader', nl: 'De hoogmoedigen worden op de Dag der Opstanding verzameld als mieren in de gedaante van mannen, van alle kanten door vernedering bedekt; zij worden naar een gevangenis in de Hel gedreven die Būlas heet, het hevigste vuur stijgt boven hen uit, en zij krijgen te drinken van het vocht van de bewoners van het Vuur', pages: [54] },
    { text: 'لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر … إن الله جميل يحب الجمال، الكبر بطر الحق، وغمط الناس', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن مسعود', narratorNl: 'ʿAbd Allāh ibn Masʿūd', note: 'قال رجل: إن الرجل يحب أن يكون ثوبه حسنا ونعله حسنة.', nlNote: 'Een man zei: men houdt ervan dat zijn kleding en sandalen mooi zijn.', nl: 'Wie in zijn hart een stofje hoogmoed heeft, gaat het Paradijs niet binnen … Allah is mooi en houdt van schoonheid; hoogmoed is de waarheid afwijzen en de mensen minachten', pages: [54] },
    { text: 'الله أكبر كبيرا، والحمد لله كثيرا -ثلاثا- سبحان الله بكرة وأصيلا -ثلاثا- أعوذ بالله من الشيطان الرجيم من نفخه وهمزه ونفثه', takhrij: 'رواه أبو داود وابن حبان واللفظ له، وصححه الألباني', takhrijNl: 'Abū Dāwūd en Ibn Ḥibbān (diens bewoording); ṣaḥīḥ volgens al-Albānī', narrator: 'جبير بن مطعم', narratorNl: 'Jubayr ibn Muṭʿim', note: 'من رواية عمرو بن مرة، وكان يقوله عند افتتاح الصلاة.', nlNote: 'Via ʿAmr ibn Murra; hij zei het bij het begin van het gebed.', nl: 'Allah is de Grootste, alle lof is voor Allah, veel (driemaal); glorie aan Allah, \'s ochtends en \'s avonds (driemaal); ik zoek toevlucht bij Allah tegen de vervloekte duivel, tegen zijn blazen, zijn prikken en zijn spuwen', pages: [55] },
    { text: 'كان يكون في مهنة أهله، فإذا حضرت الصلاة خرج إلى الصلاة', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'جواب سؤال الأسود: ما كان النبي ﷺ يصنع في بيته؟', nlNote: 'Antwoord op de vraag van al-Aswad wat de Profeet ﷺ thuis deed.', nl: 'Hij hielp zijn gezin, en als het tijd was voor het gebed, ging hij naar het gebed', pages: [55] }
  ],
  persons: [
    ['abu-wahb-al-marwazi', 'text', [50], 'سأل ابن المبارك عن الكبر والعجب.', 'Vroeg Ibn al-Mubārak naar hoogmoed en ijdelheid.'],
    ['abdallah-ibn-al-mubarak', 'text', [50], 'فرق بين الكبر والعجب.', 'Onderscheidde hoogmoed en ijdelheid.'],
    ['al-baghawi', 'text', [50], 'فسر ﴿أن رآه استغنى﴾.', 'Verklaarde "omdat hij zich zelfvoorzienend acht".'],
    ['abu-hurayra', 'text', [52, 53], 'روى «إذا قال الرجل هلك الناس» وحديث الخسف.', 'Overleverde "als iemand zegt: de mensen zijn verloren" en de hadith van het wegzinken.'],
    ['salama-ibn-al-akwa', 'text', [53], 'روى قصة من أكل بشماله تكبرا.', 'Overleverde het verhaal van de man die uit hoogmoed links at.'],
    ['ibn-umar', 'text', [54], 'روى «من تعظم في نفسه».', 'Overleverde "wie zichzelf groot acht".'],
    ['amr-ibn-shuayb', 'text', [54], 'روى حشر المتكبرين أمثال الذر.', 'Overleverde dat de hoogmoedigen als mieren verzameld worden.'],
    ['ibn-masud', 'text', [54], 'روى «لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر».', 'Overleverde "wie een stofje hoogmoed heeft".'],
    ['jubayr-ibn-mutim', 'text', [55], 'روى دعاء الاستفتاح والاستعاذة من نفخ الشيطان.', 'Overleverde de openingssmeekbede en de toevlucht tegen het blazen van de duivel.'],
    ['amr-ibn-murra', 'text', [55], 'فسر النفخ والهمز والنفث.', 'Verklaarde blazen, prikken en spuwen.'],
    ['al-aswad-ibn-yazid', 'text', [55], 'سأل عائشة عما كان النبي ﷺ يصنع في بيته.', 'Vroeg ʿĀʾisha wat de Profeet ﷺ thuis deed.'],
    ['aisha', 'text', [55], 'وصفت تواضعه ﷺ في بيته.', 'Beschreef zijn nederigheid thuis.'],
    ['al-albani', 'takhrij', [54, 55], 'صحح وحسن أحاديث في الكبر.', 'Noemde hadith over hoogmoed ṣaḥīḥ of ḥasan.']
  ],
  review: [
    ['الكبر بطر الحق وغمط الناس.', 'Hoogmoed is de waarheid afwijzen en mensen minachten.'],
    ['يحصل بالمال والعلم والعبادة والنسب.', 'Het ontstaat door geld, kennis, aanbidding en afkomst.'],
    ['للمتكبر عقوبة في الدنيا والآخرة.', 'De hoogmoedige wordt in wereld en hiernamaals gestraft.'],
    ['علاجه فرض عين، ومنه الدعاء والتواضع.', 'Behandeling is een persoonlijke plicht, onder meer smeekbede en nederigheid.']
  ],
  quiz: [
    { type: 'mc', page: 50, q: ['كيف عرف النبي ﷺ الكبر؟', 'Hoe definieerde de Profeet ﷺ hoogmoed?'], options: [['بطر الحق وغمط الناس', 'حب الثياب الحسنة', 'كثرة المال', 'العلم بالأنساب'], ['de waarheid afwijzen en mensen minachten', 'van mooie kleding houden', 'veel geld hebben', 'kennis van afstamming']], answer: 0, explain: ['كما في حديث مسلم.', 'Zoals in de hadith bij Muslim.'] },
    { type: 'tf', page: 54, q: ['حب الثوب الحسن والنعل الحسنة من الكبر.', 'Van mooie kleding en sandalen houden is hoogmoed.'], answer: 1, explain: ['«إن الله جميل يحب الجمال».', '"Allah is mooi en houdt van schoonheid".'] },
    { type: 'mc', page: 55, q: ['ما حكم إزالة الكبر؟', 'Wat is het oordeel over het wegnemen van hoogmoed?'], options: [['فرض عين', 'مستحب', 'مباح', 'فرض كفاية'], ['persoonlijke plicht', 'aanbevolen', 'toegestaan', 'collectieve plicht']], answer: 0, explain: ['كما في الصفحة ٥٥.', 'Zoals op p. 55.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٥٦.', 'Oefening van het boek op p. 56. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
