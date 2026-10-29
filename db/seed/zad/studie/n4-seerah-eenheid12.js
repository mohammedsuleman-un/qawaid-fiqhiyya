// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 12: تعزيره ﷺ (lessen 23, boek p. 72–74).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '23',
  unit: 12,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '72–74',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['تعزيره ﷺ', 'Zijn tuchtiging ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'عقوبة التعزير تتفاوت بحسب المصلحة، لأن المقصود منها التأديب والزجر. وتنوعت تعزيرات النبي ﷺ بحسب جرم كل شخص؛ فعزر بإزالة المنكر باليد، وبالهجر، وبعدم رد السلام، وبالدعاء على بعض المخالفين.',
    'De straf van taʿzīr varieert naar wat het belang vraagt, want het doel is opvoeding en afschrikking. De tuchtigingen van de Profeet ﷺ verschilden naar het vergrijp: met de hand het kwaad wegnemen, mijding, de groet niet beantwoorden en een smeekbede tegen sommige overtreders.'
  ],
  map: {
    title: ['تعزيره ﷺ في خريطة واحدة', 'Zijn tuchtiging in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['تعزيره ﷺ', 'Zijn tuchtiging ﷺ'], ['الوحدة الثانية عشرة', 'Eenheid 12']],
    nodes: [
      { label: ['إزالة المنكر باليد', 'Het kwaad met de hand wegnemen'], sub: ['ص ٧٢', 'p. 72'], page: 72, children: [['خاتم الذهب', 'de gouden ring'], ['الثوبان المعصفران', 'de twee met saffloer geverfde kleren']] },
      { label: ['الهجر', 'Mijding'], sub: ['ص ٧٣', 'p. 73'], page: 73, children: [['حلف لا يدخل على بعض أهله شهرا', 'zwoer een maand niet bij een deel van zijn vrouwen binnen te gaan']] },
      { label: ['عدم رد السلام', 'De groet niet beantwoorden'], sub: ['ص ٧٣', 'p. 73'], page: 73, children: [['الزعفران على عمار', 'saffraan op ʿAmmār']] },
      { label: ['الدعاء على المخالف', 'Smeekbede tegen een overtreder'], sub: ['ص ٧٣', 'p. 73'], page: 73, children: [['لا استطعت', 'moge je het niet kunnen']] }
    ]
  },
  points: [
    [72, 'المقصود من التعزير التأديب والزجر، فمنه ما يكون بالتوبيخ والزجر بالكلام، ومنه بالحبس، ومنه بالنفي، ومنه بالضرب.', 'Het doel van taʿzīr is opvoeding en afschrikking: door berisping met woorden, gevangenschap, verbanning of slaan.'],
    [72, 'تنوعت تعزيرات النبي ﷺ واختلفت بحسب جرم كل شخص والخطأ الذي ارتكبه.', 'De tuchtigingen van de Profeet ﷺ verschilden naar het vergrijp en de fout van ieder.'],
    [72, 'نزع خاتم الذهب من يد رجل وطرحه، فأبى الرجل أن يأخذه بعد أن طرحه رسول الله ﷺ.', 'Hij trok een gouden ring van de hand van een man en wierp hem weg; de man weigerde hem terug te nemen, omdat de Boodschapper ﷺ hem had weggeworpen.'],
    [72, 'التشبه بالكفار محرم مطلقا ولو لم يقصده الشخص، فعبد الله بن عمرو لم يقصده ومع ذلك عزره ﷺ.', 'Het nabootsen van ongelovigen is absoluut verboden, ook zonder opzet: ʿAbd Allāh ibn ʿAmr bedoelde het niet, en toch tuchtigde hij hem.'],
    [72, 'الأمر بإحراق الثوبين عقوبة وتغليظ لزجره وزجر غيره.', 'Het bevel de kleren te verbranden was een straf en verzwaring om hem en anderen af te schrikken.'],
    [73, 'فيه جواز تعزير الزوجة بالهجر إذا وقعت منها مخالفة تستدعي ذلك، قال تعالى: ﴿واهجروهن في المضاجع﴾ [النساء: 34].', 'Hieruit blijkt dat de echtgenote door mijding getuchtigd mag worden bij een overtreding die dat vraagt (4:34).'],
    [73, 'في ترك رد السلام تعزير لمن ارتكب مخالفة شرعية تنبيها له على خطئه.', 'Het niet beantwoorden van de groet is taʿzīr voor wie een sharʿī overtreding begaat, om hem op zijn fout te wijzen.'],
    [73, 'يجوز الدعاء على من خالف الحكم الشرعي بلا عذر.', 'Een smeekbede tegen wie zonder excuus het sharʿī oordeel tegenspreekt, is toegestaan.']
  ],
  terms: [
    ['التعزير', 'at-taʿzīr', 72, 'عقوبة غير مقدرة يقصد بها التأديب والزجر.', 'Een niet vastgelegde straf met opvoeding en afschrikking als doel.'],
    ['المعصفر', 'al-muʿaṣfar', 72, 'المصبوغ بالعصفر فصار أحمر.', 'Rood geverfd met saffloer.'],
    ['تشقق اليدين', 'tashaqquq al-yadayn', 73, 'تفطر جلدهما.', 'Gebarsten huid van de handen.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['صور تعزيره ﷺ', 'Vormen van zijn tuchtiging'],
      intro: ['كما في الصفحتين ٧٢–٧٣.', 'Zoals op p. 72–73.'],
      nodes: [
        [72, 'باليد', 'Met de hand', 'نزع خاتم الذهب وأمر بإحراق المعصفر', 'de gouden ring afnemen en de geverfde kleren laten verbranden'],
        [73, 'بالهجر', 'Door mijding', 'شهرا عن بعض أهله', 'een maand weg van een deel van zijn vrouwen'],
        [73, 'بترك رد السلام', 'Door de groet niet te beantwoorden', 'اذهب فاغسل هذا عنك', 'ga en was dit van je af'],
        [73, 'بالدعاء', 'Door een smeekbede', 'لا استطعت', 'moge je het niet kunnen']
      ]
    }
  ],
  sections: [
    [73, 'نهي الرجال عن الزعفران', 'Saffraan verboden voor mannen', 'عن أنس: نهى النبي ﷺ أن يتزعفر الرجل. رواه البخاري ومسلم.', 'Van Anas: de Profeet ﷺ verbood mannen zich met saffraan in te wrijven (al-Bukhārī en Muslim).']
  ],
  keycards: [
    ['opsomming', 72, 'أنواع التعزير', 'Soorten taʿzīr', ['التوبيخ بالكلام', 'الحبس', 'النفي', 'الضرب', 'إزالة المنكر باليد', 'الهجر', 'ترك رد السلام', 'الدعاء على المخالف'], ['berisping met woorden', 'gevangenschap', 'verbanning', 'slaan', 'het kwaad met de hand wegnemen', 'mijding', 'de groet niet beantwoorden', 'smeekbede tegen de overtreder']]
  ],
  hadith: [
    { text: 'يعمد أحدكم إلى جمرة من نار فيجعلها في يده', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن عباس', narratorNl: 'ʿAbd Allāh ibn ʿAbbās', note: 'لما رأى خاتما من ذهب في يد رجل فنزعه فطرحه.', nlNote: 'Toen hij een gouden ring aan de hand van een man zag, hem eraf trok en wegwierp.', nl: 'Neemt een van jullie bewust een gloeiende kool van het Vuur en doet die aan zijn hand?', pages: [72] },
    { text: 'أأمك أمرتك بهذا؟! … بل أحرقهما', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن عمرو', narratorNl: 'ʿAbd Allāh ibn ʿAmr', note: 'وفي رواية: «إن هذه من ثياب الكفار فلا تلبسها».', nlNote: 'In een overlevering: "Dit zijn kleren van de ongelovigen; draag ze niet".', nl: 'Heeft je moeder je dit opgedragen? … Nee, verbrand ze', pages: [72] },
    { text: 'أن النبي ﷺ حلف لا يدخل على بعض أهله شهرا', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أم سلمة', narratorNl: 'Umm Salama', nl: 'De Profeet ﷺ zwoer een maand niet bij een deel van zijn vrouwen binnen te gaan', pages: [73] },
    { text: 'اذهب، فاغسل هذا عنك', takhrij: 'رواه أبو داود، وحسنه الألباني', takhrijNl: 'Abū Dāwūd; ḥasan volgens al-Albānī', narrator: 'عمار بن ياسر', narratorNl: 'ʿAmmār ibn Yāsir', note: 'خلقه أهله بزعفران لتشقق يديه، فسلم على النبي ﷺ فلم يرد عليه.', nlNote: 'Zijn familie had hem met saffraan ingesmeerd om zijn gebarsten handen; hij groette de Profeet ﷺ, die niet teruggroette.', nl: 'Ga en was dit van je af', pages: [73] },
    { text: 'كل بيمينك … لا استطعت', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'سلمة بن الأكوع', narratorNl: 'Salama ibn al-Akwaʿ', note: 'قال الرجل: لا أستطيع، ما منعه إلا الكبر، فما رفعها إلى فيه.', nlNote: 'De man zei: ik kan het niet; alleen hoogmoed hield hem tegen, en hij hief zijn hand niet meer naar zijn mond.', nl: 'Eet met je rechterhand … Moge je het niet kunnen', pages: [73] }
  ],
  persons: [
    ['ibn-abbas', 'text', [72], 'روى قصة خاتم الذهب.', 'Overleverde het verhaal van de gouden ring.'],
    ['abdallah-ibn-amr', 'text', [72], 'رأى عليه النبي ﷺ ثوبين معصفرين.', 'De Profeet ﷺ zag twee met saffloer geverfde kleren aan hem.'],
    ['anas-ibn-malik', 'text', [73], 'روى النهي عن تزعفر الرجل.', 'Overleverde het verbod voor mannen op saffraan.']
  ],
  review: [
    ['المقصود من التعزير التأديب والزجر، ويتنوع بحسب الجرم.', 'Taʿzīr dient opvoeding en afschrikking en varieert naar het vergrijp.'],
    ['عزر ﷺ بإزالة المنكر باليد.', 'Hij tuchtigde door het kwaad met de hand weg te nemen.'],
    ['عزر بالهجر وبترك رد السلام.', 'Hij tuchtigde door mijding en door de groet niet te beantwoorden.'],
    ['دعا على من خالف بلا عذر.', 'Hij deed een smeekbede tegen wie zonder excuus tegensprak.']
  ],
  quiz: [
    { type: 'mc', page: 72, q: ['ما المقصود من التعزير؟', 'Wat is het doel van taʿzīr?'], options: [['التأديب والزجر', 'الانتقام', 'جمع المال', 'إظهار القوة'], ['opvoeding en afschrikking', 'wraak', 'geld innen', 'macht tonen']], answer: 0, explain: ['كما في الصفحة ٧٢.', 'Zoals op p. 72.'] },
    { type: 'tf', page: 72, q: ['التشبه بالكفار لا يحرم إلا إذا قصده الشخص.', 'Het nabootsen van ongelovigen is alleen verboden als men het bedoelt.'], answer: 1, explain: ['محرم مطلقا ولو لم يقصده.', 'Het is absoluut verboden, ook zonder opzet.'] },
    { type: 'mc', page: 73, q: ['كيف عزر النبي ﷺ عمار بن ياسر لما جاءه متخلقا بالزعفران؟', 'Hoe tuchtigde de Profeet ﷺ ʿAmmār ibn Yāsir toen hij met saffraan kwam?'], options: [['لم يرد عليه السلام', 'ضربه', 'هجره شهرا', 'دعا عليه'], ['hij beantwoordde zijn groet niet', 'hij sloeg hem', 'hij meed hem een maand', 'hij deed een smeekbede tegen hem']], answer: 0, explain: ['وقال: «اذهب، فاغسل هذا عنك».', 'Hij zei: "Ga en was dit van je af".'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٧٤.', 'Oefening van het boek op p. 74. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
