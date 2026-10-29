// Hoofdstukkaart bij التفسير (٤), eenheid 20: سورة الفلق (les 23, boek p. 89–92).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. Het boek noemt de soera Medinensisch.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '23',
  unit: 20,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '89–92',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الفلق', 'Soera al-Falaq'],
  subtitle: ['سورة مدنية في الكتاب، خمس آيات', 'Volgens het boek Medinensisch, vijf verzen'],
  summary: [
    'أمر الله نبيه ﷺ والمؤمنين بعده أن يستعيذوا برب الفلق من شر ما خلق، ومن شر الليل إذا دخل ظلامه، ومن شر الساحرات النفاثات في العقد، ومن شر الحاسد إذا حسد.',
    'Allah beveelt Zijn Profeet ﷺ en de gelovigen na hem toevlucht te zoeken bij de Heer van de dageraad tegen het kwaad van wat Hij schiep, tegen het kwaad van de nacht als zijn duisternis invalt, tegen het kwaad van de tovenaressen die in knopen blazen, en tegen het kwaad van de afgunstige als hij benijdt.'
  ],
  map: {
    title: ['سورة الفلق في خريطة واحدة', 'Soera al-Falaq in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الفلق', 'Soera al-Falaq'], ['الوحدة العشرون', 'Eenheid 20']],
    nodes: [
      { label: ['المستعاذ به', 'Bij Wie men toevlucht zoekt'], sub: ['الآية ١', 'vers 1'], page: 90, children: [['رب الفلق: فالق الصبح', 'de Heer van de dageraad']] },
      { label: ['شر عام', 'Algemeen kwaad'], sub: ['الآية ٢', 'vers 2'], page: 90, children: [['من شر ما خلق', 'het kwaad van wat Hij schiep']] },
      { label: ['ثلاثة شرور خفية', 'Drie verborgen kwaden'], sub: ['الآيات ٣–٥', 'vers 3–5'], page: 90, children: [['الغاسق إذا وقب', 'de duisternis als zij invalt'], ['النفاثات في العقد', 'wie in knopen blazen'], ['الحاسد إذا حسد', 'de afgunstige als hij benijdt']] }
    ]
  },
  points: [
    [89, 'كان النبي ﷺ إذا أوى إلى فراشه كل ليلة جمع كفيه فنفث فيهما وقرأ الإخلاص والمعوذتين، ثم مسح بهما ما استطاع من جسده، يفعل ذلك ثلاثا، كما عند البخاري.', 'Als de Profeet ﷺ elke nacht naar bed ging, bracht hij zijn handpalmen samen, blies erin, reciteerde al-Ikhlāṣ, al-Falaq en an-Nās en streek ermee over wat hij kon van zijn lichaam, drie keer; zo bij al-Bukhārī.'],
    [89, 'أمر النبي ﷺ عقبة بن عامر أن يقرأ المعوذات دبر كل صلاة، كما عند أحمد وأبي داود وصححه الألباني.', 'De Profeet ﷺ droeg ʿUqba ibn ʿĀmir op de muʿawwidhāt na elk gebed te reciteren; zo bij Aḥmad en Abū Dāwūd, ṣaḥīḥ volgens al-Albānī.'],
    [90, 'الغاسق الليل إذا أقبل بظلامه، أو القمر إذا خسف واسود، ولا تعارض لأن القمر آية الليل.', 'Al-ghāsiq is de nacht als hij met zijn duisternis komt, of de maan als hij verduistert; dat spreekt elkaar niet tegen, want de maan is het teken van de nacht.'],
    [90, 'اختار الله أشد أوقات الليل للاستعاذة، لأنه مظنة وقوع المكروه.', 'Allah koos de donkerste tijd van de nacht voor het toevlucht zoeken, omdat dan het verafschuwde verwacht wordt.'],
    [91, 'خص الله هذه الثلاثة بالذكر لأن الشر فيها خفي كله.', 'Allah noemt deze drie apart omdat het kwaad erin geheel verborgen is.']
  ],
  terms: [
    ['العوذ', 'al-ʿawdh', 90, 'اللجوء.', 'Toevlucht zoeken.'],
    ['الفلق', 'al-falaq', 90, 'الصبح، كما في ﴿فالق الإصباح﴾.', 'De dageraad, zoals in "Splijter van de ochtend".'],
    ['الغسق', 'al-ghasaq', 90, 'الظلمة.', 'De duisternis.'],
    ['وقب', 'waqab', 90, 'دخل؛ والوقوب الدخول.', 'Binnengaan; wuqūb is binnenkomen.'],
    ['النفث', 'an-nafth', 90, 'النفخ في العقد بلا ريق، والتفل النفخ مع الريق.', 'Blazen in knopen zonder speeksel; tafl is blazen met speeksel.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['الشرور المستعاذ منها', 'De kwaden waartegen men toevlucht zoekt'],
      intro: ['كما في الصفحتين ٩٠ و٩١.', 'Zoals op p. 90 en 91.'],
      nodes: [
        [90, 'شر ما خلق', 'Het kwaad van wat Hij schiep', 'في الدنيا والآخرة', 'in deze wereld en het hiernamaals'],
        [90, 'شر غاسق إذا وقب', 'De duisternis als zij invalt', 'الليل أو القمر إذا خسف', 'de nacht, of de maan als hij verduistert'],
        [90, 'شر النفاثات في العقد', 'Wie in knopen blazen', 'الساحرات', 'de tovenaressen'],
        [90, 'شر حاسد إذا حسد', 'De afgunstige als hij benijdt', 'بنفسه وعينه', 'met zijn ziel en zijn oog']
      ]
    }
  ],
  sections: [
    [91, 'طريق الخلاص من هذه الشرور', 'Hoe men van deze kwaden verlost wordt', 'يعلق الإنسان قلبه بربه ويفوض أمره إليه ويحقق التوكل عليه، ويستعمل الأوراد الشرعية التي يحصن بها نفسه، وما كثر السحرة والحساد إلا لغفلة الناس عن الله وضعف توكلهم وقلة الأذكار.', 'De mens verbindt zijn hart met zijn Heer, laat zijn zaak aan Hem over, vertrouwt werkelijk op Hem en gebruikt de wettige adhkār om zich te beschermen. Dat er zoveel tovenaars en benijders zijn, komt door achteloosheid tegenover Allah, zwak vertrouwen en weinig gedenken.']
  ],
  keycards: [
    ['onderscheid', 90, 'النفث والتفل', 'Nafth en tafl', ['النفث: نفخ بلا ريق', 'التفل: نفخ مع ريق'], ['nafth: blazen zonder speeksel', 'tafl: blazen met speeksel']]
  ],
  hadith: [
    { text: 'ألم تر آيات أنزلت الليلة لم ير مثلهن قط؟ ﴿قل أعوذ برب الفلق﴾ و﴿قل أعوذ برب الناس﴾', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عقبة بن عامر', narratorNl: 'ʿUqba ibn ʿĀmir', nl: 'Zie je niet welke verzen vannacht zijn neergezonden, waarvan er nooit iets gelijks gezien is? "Zeg: ik zoek toevlucht bij de Heer van de dageraad" en "Zeg: ik zoek toevlucht bij de Heer van de mensen"', pages: [89] },
    { text: 'ما سأل سائل بمثلهما، ولا استعاذ مستعيذ بمثلهما', takhrij: 'أخرجه النسائي، وصححه الألباني', takhrijNl: 'an-Nasāʾī; ṣaḥīḥ volgens al-Albānī', narrator: 'عقبة بن عامر', narratorNl: 'ʿUqba ibn ʿĀmir', nl: 'Niemand heeft gevraagd met iets gelijks aan deze twee, en niemand heeft toevlucht gezocht met iets gelijks aan deze twee', pages: [89] },
    { text: 'تعوذي بالله من شر هذا الغاسق إذا وقب', takhrij: 'أخرجه أحمد، وحسنه الأرناؤوط', takhrijNl: 'Aḥmad; ḥasan volgens al-Arnaʾūṭ', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'أخذ النبي ﷺ بيدها فأراها القمر حين طلع.', nlNote: 'De Profeet ﷺ nam haar hand en wees haar de maan toen die opkwam.', nl: 'Zoek toevlucht bij Allah tegen het kwaad van deze duisternis als zij invalt', pages: [90] }
  ],
  persons: [
    ['uqba-ibn-amir', 'text', [89], 'روى فضل المعوذتين، وأمره النبي ﷺ بقراءتهما دبر كل صلاة.', 'Overleverde de deugd van al-Falaq en an-Nās; de Profeet ﷺ droeg hem op ze na elk gebed te reciteren.'],
    ['muslim', 'takhrij', [89], 'روى حديث عقبة في نزول المعوذتين.', 'Overleverde de hadith van ʿUqba over het neerkomen van beide soera\'s.'],
    ['an-nasai', 'takhrij', [89], 'روى «ما سأل سائل بمثلهما».', 'Overleverde "niemand heeft gevraagd met iets gelijks".'],
    ['al-albani', 'takhrij', [89], 'صحح حديثي عقبة.', 'Verklaarde de hadith van ʿUqba ṣaḥīḥ.'],
    ['abu-dawud', 'takhrij', [89], 'روى الأمر بقراءة المعوذات دبر كل صلاة.', 'Overleverde het bevel de muʿawwidhāt na elk gebed te reciteren.'],
    ['aisha', 'text', [89, 90], 'روت فعل النبي ﷺ عند النوم وحديث الغاسق.', 'Overleverde wat de Profeet ﷺ voor het slapen deed en de hadith over de maan.'],
    ['al-bukhari', 'takhrij', [89], 'روى حديث النفث في الكفين عند النوم.', 'Overleverde de hadith over blazen in de handpalmen voor het slapen.'],
    ['ahmad-ibn-hanbal', 'takhrij', [89, 90], 'روى حديث عقبة وحديث الغاسق.', 'Overleverde de hadith van ʿUqba en die over de maan.'],
    ['al-arnaut', 'takhrij', [90], 'حسن حديث الغاسق.', 'Verklaarde de hadith over de maan ḥasan.']
  ],
  review: [
    ['المعوذتان لم ير مثلهن قط في الاستعاذة.', 'Al-Falaq en an-Nās zijn ongeëvenaard om toevlucht te zoeken.'],
    ['الفلق الصبح، والغاسق الليل أو القمر إذا خسف.', 'Al-falaq is de dageraad, al-ghāsiq de nacht of de verduisterde maan.'],
    ['الخلاص من الشرور بالتوكل والأذكار الشرعية.', 'Verlossing van de kwaden komt door vertrouwen op Allah en de wettige adhkār.']
  ],
  quiz: [
    { type: 'mc', page: 90, q: ['ما الفلق؟', 'Wat is al-falaq?'], options: [['الصبح', 'الليل', 'القمر', 'الشق في الأرض'], ['de dageraad', 'de nacht', 'de maan', 'een kloof in de aarde']], answer: 0, explain: ['كما في ﴿فالق الإصباح﴾.', 'Zoals in "Splijter van de ochtend".'] },
    { type: 'mc', page: 90, q: ['من النفاثات في العقد؟', 'Wie zijn "zij die in knopen blazen"?'], options: [['الساحرات', 'الحاسدات', 'الكاهنات', 'النائحات'], ['de tovenaressen', 'de afgunstigen', 'de waarzegsters', 'de klaagvrouwen']], answer: 0, explain: ['ينفثن في عقد الخيط عند إرادة السحر.', 'Zij blazen in knopen van draad als zij willen toveren.'] },
    { type: 'tf', page: 90, q: ['النفث نفخ مع ريق.', 'Nafth is blazen met speeksel.'], answer: 1, explain: ['النفث بلا ريق، والتفل مع الريق.', 'Nafth is zonder speeksel, tafl met speeksel.'] },
    { type: 'mc', page: 91, q: ['لماذا خصت الشرور الثلاثة الأخيرة بالذكر؟', 'Waarom worden de laatste drie kwaden apart genoemd?'], options: [['لأن الشر فيها خفي كله', 'لأنها أخف الشرور', 'لأنها لا تقع إلا ليلا', 'لأنها تصيب الكفار فقط'], ['omdat het kwaad erin geheel verborgen is', 'omdat ze het lichtste kwaad zijn', 'omdat ze alleen \'s nachts gebeuren', 'omdat ze alleen ongelovigen treffen']], answer: 0, explain: ['ذكر الكتاب أن الشر في هذه المواضع الثلاثة خفي.', 'Het boek zegt dat het kwaad in deze drie situaties verborgen is.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٩٢.', 'Oefening van het boek op p. 92. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
