// Hoofdstukkaart bij الحديث (٤), eenheid 4: hadith 16–20 (lessen 18–24, boek p. 83–104).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-hadith/leesnotities.md);
// hadith en takhrij zoals in het boek. Niet in het hadith-tabblad: «لعن رسول الله ﷺ الرجلة من
// النساء» (p. 93), omdat het boek ʿĀʾisha als overleveraar noemt en de notities dat als te controleren
// markeren, en de verwijzing naar hadith over de smeekbede van de reiziger (p. 87), die zonder bron staat.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-hadith',
  chapter: '18',
  unit: 4,
  source: {
    label: ['كتاب الحديث (٤)، سلسلة زاد العلمية', 'Al-Ḥadīth (4), Zad-reeks'],
    pages: '83–104',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlHadith/page/n{p}/mode/1up'
  },
  title: ['الأحاديث ١٦–٢٠', 'Hadith 16–20'],
  subtitle: ['خمسة أحاديث في سبعة دروس', 'Vijf hadith in zeven lessen'],
  summary: [
    'خمسة أحاديث: إن الله طيب لا يقبل إلا طيبا وأثر الحرام في رد الدعاء، ولا طاعة في معصية الله إنما الطاعة في المعروف، ولعن المتشبهين من الرجال بالنساء والمتشبهات من النساء بالرجال، وعذاب المرأة التي حبست الهرة، والنهي عن تمني الموت لضر نزل.',
    'Vijf hadith: Allah is goed en aanvaardt alleen het goede, en het verbodene laat een smeekbede onbeantwoord; geen gehoorzaamheid in ongehoorzaamheid aan Allah, gehoorzaamheid is alleen in het goede; de vervloeking van mannen die vrouwen nabootsen en vrouwen die mannen nabootsen; de straf van de vrouw die een kat opsloot; en het verbod de dood te wensen om een tegenslag.'
  ],
  map: {
    title: ['الأحاديث الخمسة في خريطة واحدة', 'De vijf hadith in één kaart'],
    intro: ['كل حديث وأهم ما فيه.', 'Elke hadith met de kern ervan.'],
    root: [['الحديث (٤)', 'Hadith (4)'], ['الوحدة الرابعة', 'Eenheid 4']],
    nodes: [
      { label: ['إن الله طيب', 'Allah is goed'], sub: ['الحديث ١٦', 'hadith 16'], page: 83, children: [['لا يقبل إلا طيبا', 'aanvaardt alleen het goede'], ['الحرام يمنع إجابة الدعاء', 'het verbodene verhindert verhoring'], ['آداب الدعاء', 'etiquette van de smeekbede']] },
      { label: ['لا طاعة في معصية', 'Geen gehoorzaamheid in zonde'], sub: ['الحديث ١٧', 'hadith 17'], page: 88, children: [['الطاعة في المعروف', 'gehoorzaamheid in het goede'], ['طاعة ولاة الأمر', 'gehoorzaamheid aan gezagsdragers']] },
      { label: ['التشبه بين الجنسين', 'Nabootsing tussen de geslachten'], sub: ['الحديث ١٨', 'hadith 18'], page: 92, children: [['مشترك ومختص', 'gedeeld en eigen'], ['حكمة النهي', 'de wijsheid van het verbod']] },
      { label: ['عذبت امرأة في هرة', 'Een vrouw gestraft om een kat'], sub: ['الحديث ١٩', 'hadith 19'], page: 96, children: [['الإحسان إلى الحيوان', 'goedheid voor dieren'], ['تعظيم صغائر الذنوب', 'kleine zonden niet onderschatten']] },
      { label: ['لا يتمنين أحدكم الموت', 'Wens de dood niet'], sub: ['الحديث ٢٠', 'hadith 20'], page: 100, children: [['مفاسد تمني الموت', 'de nadelen ervan'], ['اللهم أحيني ما كانت الحياة خيرا لي', 'o Allah, laat mij leven zolang het leven goed is']] }
    ]
  },
  points: [
    [83, 'الله طيب منزه عن النقائص، طيب في ذاته وأسمائه وصفاته وأحكامه وأفعاله، ولا يقبل إلا الطيب من الأقوال والأعمال والأموال.', 'Allah is goed en vrij van tekort, in Zijn wezen, namen, eigenschappen, oordelen en daden; Hij aanvaardt alleen het goede van woorden, daden en bezit.'],
    [84, 'اجتمعت في الرجل أسباب الإجابة: طول السفر والتبذل ورفع اليدين والإلحاح، ومع ذلك استبعد إجابته لأن مطعمه حرام.', 'Bij de man waren de oorzaken van verhoring aanwezig: een lange reis, eenvoud, opgeheven handen en aandringen; toch was verhoring onwaarschijnlijk, omdat zijn voedsel verboden was.'],
    [86, 'الصدقة بالمال الحرام قسمان: أن يتصدق به السارق عن نفسه فلا تقبل، وأن يتصدق به عن صاحبه إذا عجز عن رده فيجوز عند أكثر العلماء.', 'Liefdadigheid met verboden bezit is tweeërlei: geeft de dief het voor zichzelf, dan wordt het niet aanvaard; geeft hij het namens de eigenaar als hij het niet kan teruggeven, dan is het volgens de meeste geleerden toegestaan.'],
    [90, 'ليس من المخلوقين من أمره حتم على الإطلاق إلا الرسل، كما قال ابن تيمية.', 'Geen schepsel heeft een gebod dat onvoorwaardelijk moet worden gevolgd, behalve de boodschappers, zoals Ibn Taymiyya zei.'],
    [93, 'ما يقع فيه التشابه ثلاثة: مشترك بين الجنسين فيباح، ومختص بالرجال، ومختص بالنساء.', 'Waarin gelijkenis voorkomt, is drieërlei: wat beide geslachten delen en dus toegestaan is, wat eigen is aan mannen, en wat eigen is aan vrouwen.'],
    [94, 'لا يجوز لعن المعين من المتشبهين، بل يقال على العموم: من تشبه فهو ملعون، وينصح المعين.', 'Een bepaald persoon die nabootst mag niet vervloekt worden; men zegt in het algemeen dat wie nabootst vervloekt is, en de persoon zelf wordt vermaand.'],
    [97, 'يجوز اقتناء الهرة والطيور في البيت بشرط القيام بطعامها وشرابها.', 'Een kat of vogels in huis houden is toegestaan, op voorwaarde dat men voor hun eten en drinken zorgt.'],
    [103, 'ليس قول يوسف ﴿توفني مسلما﴾ من تمني الموت، وإنما سأل الثبات على الإسلام حتى الوفاة.', 'Yūsufs woord "laat mij als moslim sterven" is geen wens om te sterven, maar een vraag om standvastigheid in de islam tot de dood.']
  ],
  terms: [
    ['طيب', 'ṭayyib', 83, 'منزه عن النقائص، طيب في ذاته وصفاته وأفعاله.', 'Vrij van tekort, goed in Zijn wezen, eigenschappen en daden.'],
    ['أشعث أغبر', 'ashʿath aghbar', 83, 'متفرق الشعر، مغبر الوجه لا يعتني بنفسه.', 'Met verward haar en bestoven gezicht, zonder zorg voor zichzelf.'],
    ['فأنى', 'fa-annā', 84, 'استفهام بمعنى الاستبعاد.', 'Een vraag die "onwaarschijnlijk" betekent.'],
    ['المعروف', 'al-maʿrūf', 88, 'ما عرفه الشرع وأقره ولم يخالفه.', 'Wat de sharīʿa kent en goedkeurt.'],
    ['اللعن', 'al-laʿn', 92, 'الطرد والإبعاد من رحمة الله.', 'Verdrijving en verwijdering uit Allahs genade.'],
    ['خشاش الأرض', 'khashāsh al-arḍ', 96, 'هوامها وحشراتها الصغيرة.', 'De kleine dieren en insecten van de aarde.'],
    ['النغير', 'an-nughayr', 97, 'طائر صغير يشبه العصفور.', 'Een kleine vogel die op een mus lijkt.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['آداب الدعاء', 'Etiquette van de smeekbede'],
      intro: ['كما في الصفحة ٨٧.', 'Zoals op p. 87.'],
      nodes: [
        [87, 'الطهارة واستقبال القبلة', 'Reinheid en de qibla', '', ''],
        [87, 'حضور القلب', 'Een aanwezig hart', 'والإقبال على الله', 'en zich tot Allah wenden'],
        [87, 'رفع اليدين', 'De handen heffen', 'إلى السماء', 'naar de hemel'],
        [87, 'الثناء والصلاة على النبي ﷺ', 'Lof en ṣalāt op de Profeet ﷺ', 'في أول الدعاء', 'aan het begin'],
        [87, 'الإلحاح وإظهار الافتقار', 'Aandringen en behoefte tonen', '', '']
      ]
    },
    {
      type: 'cards',
      title: ['من صور التشبه المعاصرة المحرمة', 'Hedendaagse verboden vormen van nabootsing'],
      intro: ['كما في الإطار ص ٩٣.', 'Zoals in het kader op p. 93.'],
      nodes: [
        [93, 'تزين الرجل', 'Een man die zich opmaakt', 'النمص وأحمر الشفاه والمساحيق', 'epileren, lippenstift en make-up'],
        [93, 'لبس الفتيات لباس الرجال', 'Meisjes in mannenkleding', 'كالغترة وأحذية الرجال', 'zoals de ghutra en mannenschoenen'],
        [93, 'رياضات الرجال للنساء', 'Mannensporten voor vrouwen', 'كبناء الأجسام ورفع الأثقال', 'zoals bodybuilding en gewichtheffen'],
        [93, 'تغيير الجنس', 'Geslachtsverandering', 'بالعمليات الجراحية، وهو من أشد صوره', 'door ingrepen; een van de ergste vormen']
      ]
    },
    {
      type: 'cards',
      title: ['مفاسد تمني الموت', 'De nadelen van de dood wensen'],
      intro: ['كما في الصفحة ١٠١.', 'Zoals op p. 101.'],
      nodes: [
        [101, 'السخط', 'Ontevredenheid', 'على ما نزل به', 'over wat hem trof'],
        [101, 'ضعف النفس', 'Zwakke ziel', 'والفتور واليأس', 'slapte en wanhoop'],
        [101, 'الجهل', 'Onwetendheid', 'لا يدري ما بعد الموت', 'hij weet niet wat na de dood komt'],
        [101, 'انقطاع العمل', 'Einde van de daden', 'يقطعه عن الأعمال الصالحة', 'het snijdt hem af van goede daden']
      ]
    }
  ],
  sections: [
    [89, 'حرمة الخروج على الأئمة', 'Opstand tegen leiders is verboden', 'قال النووي: أما الخروج عليهم وقتالهم فحرام بإجماع المسلمين وإن كانوا فسقة ظالمين، وأجمع أهل السنة أنه لا ينعزل السلطان بالفسق.', 'An-Nawawī: tegen hen in opstand komen en hen bestrijden is volgens consensus van de moslims verboden, ook als zij zondig en onrechtvaardig zijn; Ahl as-Sunna zijn het erover eens dat de heerser niet door zondigheid wordt afgezet.'],
    [90, 'أولو الأمر', 'Wie gezag hebben', 'قال ابن باز: أولو الأمر العلماء وأمراء المسلمين، يطاعون في المعروف، وبهذا تستقيم الأحوال ويحصل الأمن، فإذا لم يطاعوا فسدت الأمور وأكل القوي الضعيف.', 'Ibn Bāz: wie gezag hebben zijn de geleerden en de bestuurders van de moslims; zij worden in het goede gehoorzaamd, waardoor de zaken recht blijven en er veiligheid is; worden zij niet gehoorzaamd, dan raakt alles bedorven en eet de sterke de zwakke.'],
    [90, 'حدود الطاعة', 'Grenzen van gehoorzaamheid', 'لا تطيع الزوجة زوجها في حضور الحفلات الماجنة أو ترك الصلاة، ولا الموظف مديره في الرشوة، ولا يطاع الوالدان في ترك الصلاة وخلع الحجاب، لقوله: ﴿وإن جاهداك لتشرك بي ما ليس لك به علم فلا تطعهما﴾.', 'De vrouw gehoorzaamt haar man niet in het bijwonen van losbandige feesten of het laten van het gebed, de werknemer zijn directeur niet bij steekpenningen, en de ouders worden niet gehoorzaamd in het laten van het gebed of het afleggen van de hidjab: "Als zij je dwingen iets met Mij te verbinden waarvan je geen kennis hebt, gehoorzaam hen dan niet".'],
    [93, 'حكمة النهي عن التشبه', 'Waarom nabootsing verboden is', 'جعل الله للرجال درجة وقوامة، والتشبه ينزلهم عنها، وهو سبب التخنث وانحطاط الأخلاق، ويفقد المرأة أنوثتها. قال ابن تيمية: المشابهة في الأمور الظاهرة تورث تناسبا في الأخلاق والأعمال.', 'Allah gaf de mannen een graad en zorgplicht; nabootsing haalt hen daarvan neer, leidt tot verwijfdheid en zedenverval en doet de vrouw haar vrouwelijkheid verliezen. Ibn Taymiyya: gelijkenis in uiterlijke zaken brengt gelijkenis in karakter en daden.'],
    [99, 'فكيف بمن حبس مؤمنا؟', 'Hoe dan met wie een gelovige opsluit?', 'قال ابن القيم: إذا كانت امرأة دخلت النار في هرة حبستها حتى ماتت جوعا وعطشا، فكيف عقوبة من حبس مؤمنا حتى مات بغير جرم؟', 'Ibn al-Qayyim: als een vrouw het Vuur in ging om een kat die zij opsloot tot zij stierf van honger en dorst, hoe zal dan de straf zijn van wie een gelovige zonder misdaad opsluit tot hij sterft?'],
    [102, 'العمر رأس مال', 'Het leven is kapitaal', 'قال الطيبي: الأوقات كرأس المال للتاجر، فمن انتفع بعمره فحسن عمله فقد فاز، ومن أضاع رأس ماله خسر خسرانا مبينا.', 'Aṭ-Ṭībī: de tijd is als het kapitaal van een handelaar; wie zijn leven benut met goede daden, slaagt, en wie zijn kapitaal verspilt, lijdt duidelijk verlies.']
  ],
  keycards: [
    ['onderscheid', 86, 'الصدقة بالمال الحرام', 'Liefdadigheid met verboden bezit', ['عن نفسه: لا تقبل ويأثم', 'عن صاحبه عند العجز عن رده: تجوز عند أكثر العلماء'], ['voor zichzelf: niet aanvaard, en hij zondigt', 'namens de eigenaar als teruggeven onmogelijk is: volgens de meesten toegestaan']],
    ['opsomming', 98, 'من الإحسان إلى الحيوان', 'Goedheid voor dieren', ['النهي عن قتله صبرا', 'النهي عن التمثيل به', 'تحريم لعنه', 'عدم تحميله فوق طاقته'], ['verbod het vastgebonden als doelwit te doden', 'verbod het te verminken', 'verbod het te vervloeken', 'het niet overbelasten']],
    ['uitzondering', 103, 'متى يجوز تمني الموت', 'Wanneer de dood wensen mag', ['إذا كان خوفا من فتنة في الدين لا من ضر دنيوي', 'كقول مريم: ﴿يا ليتني مت قبل هذا﴾'], ['uit vrees voor beproeving in de religie, niet om wereldse schade', 'zoals Maryam zei: "Was ik maar vóór dit gestorven"']]
  ],
  hadith: [
    { text: 'أيها الناس، إن الله طيب لا يقبل إلا طيبا، وإن الله أمر المؤمنين بما أمر به المرسلين … ثم ذكر الرجل يطيل السفر أشعث أغبر، يمد يديه إلى السماء، يا رب، يا رب، ومطعمه حرام، ومشربه حرام، وملبسه حرام، وغذي بالحرام، فأنى يستجاب لذلك؟', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'O mensen, Allah is goed en aanvaardt alleen het goede, en Allah beval de gelovigen wat Hij de boodschappers beval … Toen noemde hij de man die lang reist, met verward haar en stoffig, die zijn handen naar de hemel uitstrekt: o Heer, o Heer, terwijl zijn eten verboden is, zijn drinken verboden, zijn kleding verboden en hij met het verbodene gevoed is; hoe zou hij dan verhoord worden?', pages: [83] },
    { text: 'إن الله حيي كريم يستحيي من عبده إذا رفع يديه إليه أن يردهما صفرا', takhrij: 'أخرجه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Allah is schaamtevol en edelmoedig: Hij schaamt Zich, als Zijn dienaar zijn handen naar Hem heft, ze leeg terug te sturen', pages: [84] },
    { text: 'لا يقبل الله صلاة بغير طهور، ولا صدقة من غلول', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', nl: 'Allah aanvaardt geen gebed zonder reiniging en geen liefdadigheid uit verduisterd bezit', pages: [86] },
    { text: 'ما تصدق أحد بصدقة من طيب، ولا يقبل الله إلا الطيب، إلا أخذها الرحمن بيمينه', takhrij: 'في الصحيحين', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Niemand geeft liefdadigheid uit goed bezit – en Allah aanvaardt alleen het goede – of de Erbarmer neemt haar aan met Zijn rechterhand', pages: [86] },
    { text: 'الدعاء هو العبادة', takhrij: 'رواه أبو داود والترمذي وصححه، وابن ماجه', takhrijNl: 'Abū Dāwūd, at-Tirmidhī (die het ṣaḥīḥ noemde) en Ibn Māja', nl: 'De smeekbede is de aanbidding', pages: [87] },
    { text: 'لا طاعة في معصية الله، إنما الطاعة في المعروف', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'علي بن أبي طالب', narratorNl: 'ʿAlī ibn Abī Ṭālib', nl: 'Er is geen gehoorzaamheid in ongehoorzaamheid aan Allah; gehoorzaamheid is alleen in het goede', pages: [88] },
    { text: 'من أطاعني فقد أطاع الله، ومن يعصني فقد عصى الله، ومن يطع الأمير فقد أطاعني، ومن يعص الأمير فقد عصاني', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie mij gehoorzaamt, gehoorzaamt Allah, en wie mij niet gehoorzaamt, is Allah ongehoorzaam; wie de bestuurder gehoorzaamt, gehoorzaamt mij, en wie de bestuurder ongehoorzaam is, is mij ongehoorzaam', pages: [89] },
    { text: 'على المرء المسلم السمع والطاعة فيما أحب وكره، إلا أن يؤمر بمعصية؛ فإن أمر بمعصية فلا سمع ولا طاعة', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'De moslim moet horen en gehoorzamen in wat hij graag doet en wat hem tegenstaat, tenzij hem een zonde wordt bevolen; wordt hem een zonde bevolen, dan is er geen horen en geen gehoorzamen', pages: [89] },
    { text: 'لعن رسول الله ﷺ المتشبهين من الرجال بالنساء، والمتشبهات من النساء بالرجال', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'De Boodschapper van Allah ﷺ vervloekte de mannen die vrouwen nabootsen en de vrouwen die mannen nabootsen', pages: [92] },
    { text: 'أخرجوهم من بيوتكم', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', note: 'لعن النبي ﷺ المخنثين من الرجال والمترجلات من النساء وقال ذلك.', nlNote: 'De Profeet ﷺ vervloekte de verwijfde mannen en de manachtige vrouwen en zei dit.', nl: 'Zet hen uit jullie huizen', pages: [94] },
    { text: 'عذبت امرأة في هرة سجنتها حتى ماتت، فدخلت فيها النار، لا هي أطعمتها ولا سقتها إذ حبستها، ولا هي تركتها تأكل من خشاش الأرض', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عبد الله بن عمر', narratorNl: 'ʿAbd Allāh ibn ʿUmar', nl: 'Een vrouw werd gestraft om een kat die zij opsloot tot die stierf, en daarom ging zij het Vuur in; zij gaf haar geen eten of drinken toen zij haar opsloot, en liet haar ook niet eten van de kleine dieren van de aarde', pages: [96] },
    { text: 'يا أبا عمير، ما فعل النغير؟', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', note: 'قاله النبي ﷺ لأخ صغير لأنس مات طائره.', nlNote: 'De Profeet ﷺ zei dit tegen een jonger broertje van Anas wiens vogeltje gestorven was.', nl: 'Abū ʿUmayr, wat is er met het vogeltje gebeurd?', pages: [97] },
    { text: 'من فعل هذا؟ إن رسول الله ﷺ لعن من فعل هذا', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', note: 'قاله لفتيان من قريش نصبوا دجاجة يرمونها.', nlNote: 'Gezegd tegen jongens van Quraysh die een kip hadden opgesteld om op te schieten.', nl: 'Wie heeft dit gedaan? De Boodschapper van Allah ﷺ vervloekte wie dit doet', pages: [98] },
    { text: 'لعن النبي ﷺ من مثل بالحيوان', takhrij: 'أخرجه البخاري', takhrijNl: 'al-Bukhārī', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'De Profeet ﷺ vervloekte wie een dier verminkt', pages: [98] },
    { text: 'خذوا ما عليها ودعوها؛ فإنها ملعونة', takhrij: 'رواه مسلم', takhrijNl: 'Muslim', note: 'قاله لما لعنت امرأة من الأنصار ناقتها.', nlNote: 'Gezegd toen een vrouw van de Anṣār haar kameel vervloekte.', nl: 'Neem eraf wat erop ligt en laat haar gaan, want zij is vervloekt', pages: [98] },
    { text: 'لا يتمنين أحدكم الموت من ضر أصابه، فإن كان لا بد فاعلا، فليقل: اللهم أحيني ما كانت الحياة خيرا لي، وتوفني إذا كانت الوفاة خيرا لي', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أنس بن مالك', narratorNl: 'Anas ibn Mālik', nl: 'Laat niemand van jullie de dood wensen om een tegenslag die hem trof. Moet hij het per se, laat hij dan zeggen: o Allah, laat mij leven zolang het leven goed voor mij is, en laat mij sterven als de dood goed voor mij is', pages: [100] },
    { text: 'ما يصيب المسلم، من نصب ولا وصب، ولا هم ولا حزن ولا أذى ولا غم، حتى الشوكة يشاكها، إلا كفر الله بها من خطاياه', takhrij: 'متفق عليه', takhrijNl: 'al-Bukhārī en Muslim', nl: 'Geen vermoeidheid, ziekte, zorg, verdriet, kwelling of benauwdheid treft de moslim, zelfs geen doorn die hem prikt, of Allah wist er zonden van hem mee uit', pages: [101] },
    { text: 'يا عباس، يا عم رسول الله، لا تتمن الموت، إن كنت محسنا تزداد إحسانا إلى إحسانك خير لك، وإن كنت مسيئا فإن تؤخر تستعتب خير لك، فلا تتمن الموت', takhrij: 'أخرجه أحمد، وصححه الألباني', takhrijNl: 'Aḥmad; ṣaḥīḥ volgens al-Albānī', narrator: 'أم الفضل', narratorNl: 'Umm al-Faḍl', nl: 'ʿAbbās, oom van de Boodschapper van Allah, wens de dood niet. Doe je goed, dan is meer goed erbij beter voor je; doe je kwaad, dan is uitstel om berouw te tonen beter voor je. Wens de dood dus niet', pages: [101] },
    { text: 'من طال عمره وحسن عمله … من طال عمره وساء عمله', takhrij: 'رواه أحمد والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', note: 'جواب من سأل: من خير الناس؟ ومن شر الناس؟', nlNote: 'Antwoord op de vraag wie de beste en wie de slechtste mensen zijn.', nl: 'Wie lang leeft en goed handelt … wie lang leeft en slecht handelt', pages: [102] }
  ],
  persons: [
    ['abu-hurayra', 'text', [83, 89], 'روى حديث «إن الله طيب» و«من أطاعني».', 'Overleverde "Allah is goed" en "wie mij gehoorzaamt".'],
    ['muslim', 'takhrij', [83, 86, 98], 'روى حديث «إن الله طيب» وغيره.', 'Overleverde "Allah is goed" en andere.'],
    ['ahmad-ibn-hanbal', 'takhrij', [84, 101, 102], 'روى أحاديث رفع اليدين ونهي العباس وطول العمر.', 'Overleverde de hadith over opgeheven handen, aan al-ʿAbbās en over een lang leven.'],
    ['abu-dawud', 'takhrij', [84, 87], 'روى حديث رفع اليدين و«الدعاء هو العبادة».', 'Overleverde de hadith over opgeheven handen en "de smeekbede is de aanbidding".'],
    ['al-albani', 'takhrij', [84, 101, 102], 'صحح الأحاديث.', 'Verklaarde de hadith ṣaḥīḥ.'],
    ['at-tirmidhi', 'takhrij', [87, 102], 'روى «الدعاء هو العبادة» وحديث طول العمر.', 'Overleverde "de smeekbede is de aanbidding" en de hadith over een lang leven.'],
    ['ibn-maja', 'takhrij', [87], 'روى «الدعاء هو العبادة».', 'Overleverde "de smeekbede is de aanbidding".'],
    ['ali-ibn-abi-talib', 'text', [88], 'راوي «لا طاعة في معصية الله»؛ رابع الخلفاء الراشدين، قتل بالكوفة سنة ٤٠ هـ.', 'Overleveraar van "geen gehoorzaamheid in zonde"; de vierde rechtgeleide kalief, gedood in Kūfa in 40 n.H.'],
    ['fatima', 'text', [88], 'زوج علي بن أبي طالب وبنت النبي ﷺ.', 'Dochter van de Profeet ﷺ en vrouw van ʿAlī.'],
    ['uthman-ibn-affan', 'text', [88], 'ولي علي الخلافة بعد مقتله.', 'Na zijn dood werd ʿAlī kalief.'],
    ['al-bukhari', 'takhrij', [88, 92, 94, 98], 'روى أحاديث الطاعة والتشبه والتمثيل.', 'Overleverde de hadith over gehoorzaamheid, nabootsing en verminking.'],
    ['ibn-umar', 'text', [89, 96, 98], 'روى حديث السمع والطاعة والهرة والنهي عن قتل الحيوان صبرا.', 'Overleverde de hadith over gehoorzaamheid, de kat en het verbod dieren als doelwit te doden.'],
    ['an-nawawi', 'text', [89, 98], 'نقل الإجماع على تحريم الخروج على الأئمة، وشرح قصة الناقة.', 'Meldde consensus over het verbod op opstand, en legde het verhaal van de kameel uit.'],
    ['abdallah-ibn-al-mubarak', 'text', [89], 'له أبيات في أن الجماعة حبل الله.', 'Schreef verzen dat de gemeenschap het touw van Allah is.'],
    ['ibn-baz', 'text', [90], 'بين أن أولي الأمر العلماء والأمراء يطاعون في المعروف.', 'Legde uit dat geleerden en bestuurders in het goede gehoorzaamd worden.'],
    ['ibn-taymiyya', 'text', [90, 93], 'قال: لا أمر حتم على الإطلاق إلا للرسل، والمشابهة في الظاهر تورث تناسبا في الأخلاق.', 'Zei: alleen de boodschappers hebben een onvoorwaardelijk gebod, en uiterlijke gelijkenis brengt gelijkenis in karakter.'],
    ['ibn-abbas', 'text', [92, 94], 'روى حديث لعن المتشبهين.', 'Overleverde de hadith over de vervloeking van wie nabootsen.'],
    ['abdallah-ibn-amr', 'text', [94], 'رأى النبي ﷺ عليه ثوبين معصفرين فأنكر.', 'De Profeet ﷺ zag hem in twee saffloerkleurige kledingstukken en keurde dat af.'],
    ['anas-ibn-malik', 'text', [97, 100], 'روى حديث النغير وحديث النهي عن تمني الموت؛ خادم النبي ﷺ، توفي بالبصرة سنة ٩٣ هـ.', 'Overleverde de hadith over het vogeltje en over de dood wensen; dienaar van de Profeet ﷺ, stierf in Basra in 93 n.H.'],
    ['ibn-qudama', 'text', [97], 'قال: من ملك بهيمة لزمه القيام بها والإنفاق عليها.', 'Zei: wie een dier bezit, moet ervoor zorgen en eraan besteden.'],
    ['ibn-al-qayyim', 'text', [99], 'قاس حبس المؤمن على حبس الهرة.', 'Vergeleek het opsluiten van een gelovige met het opsluiten van de kat.'],
    ['umm-al-fadl-bint-al-harith', 'text', [101], 'روت نهي النبي ﷺ العباس عن تمني الموت.', 'Overleverde dat de Profeet ﷺ al-ʿAbbās verbood de dood te wensen.'],
    ['al-abbas-ibn-abd-al-muttalib', 'text', [101], 'كان يشتكي ويتمنى الموت فنهاه النبي ﷺ.', 'Klaagde en wenste de dood, waarop de Profeet ﷺ het hem verbood.'],
    ['at-tibi', 'text', [102], 'شبه الأوقات برأس مال التاجر.', 'Vergeleek de tijd met het kapitaal van een handelaar.']
  ],
  review: [
    ['الله طيب لا يقبل إلا طيبا، والحرام يمنع إجابة الدعاء.', 'Allah is goed en aanvaardt alleen het goede; het verbodene verhindert verhoring.'],
    ['لا طاعة لمخلوق في معصية الخالق.', 'Geen gehoorzaamheid aan een schepsel in ongehoorzaamheid aan de Schepper.'],
    ['تشبه كل جنس بالآخر من الكبائر.', 'Elk geslacht dat het andere nabootst, begaat een grote zonde.'],
    ['الإحسان إلى الحيوان واجب، وتعذيبه من أسباب دخول النار.', 'Goedheid voor dieren is verplicht; ze kwellen kan het Vuur in brengen.'],
    ['لا يتمنى المسلم الموت لضر نزل به، بل يصبر.', 'De moslim wenst de dood niet om een tegenslag, maar heeft geduld.']
  ],
  quiz: [
    { type: 'mc', page: 84, q: ['لماذا استبعد إجابة دعاء الرجل الذي يطيل السفر؟', 'Waarom was verhoring van de lang reizende man onwaarschijnlijk?'], options: [['لأن مطعمه ومشربه وملبسه حرام', 'لأنه لم يرفع يديه', 'لأنه كان مسافرا', 'لأنه دعا بإلحاح'], ['omdat zijn eten, drinken en kleding verboden waren', 'omdat hij zijn handen niet hief', 'omdat hij op reis was', 'omdat hij aandrong']], answer: 0, explain: ['مع اجتماع أسباب الإجابة منعها الحرام.', 'Ondanks de oorzaken van verhoring verhinderde het verbodene die.'] },
    { type: 'tf', page: 86, q: ['يقبل الله صدقة السارق إذا تصدق بالمال المسروق عن نفسه.', 'Allah aanvaardt de liefdadigheid van een dief die gestolen geld voor zichzelf geeft.'], answer: 1, explain: ['لا تقبل منه ويأثم بتصرفه في مال غيره.', 'Het wordt niet aanvaard en hij zondigt door over andermans bezit te beschikken.'] },
    { type: 'mc', page: 88, q: ['في أي شيء تكون الطاعة؟', 'Waarin is gehoorzaamheid?'], options: [['في المعروف', 'في كل ما يأمر به الأمير', 'فيما يوافق الهوى', 'في أمور الدنيا فقط'], ['in het goede', 'in alles wat de bestuurder beveelt', 'in wat je wilt', 'alleen in wereldse zaken']], answer: 0, explain: ['«إنما الطاعة في المعروف».', '"Gehoorzaamheid is alleen in het goede".'] },
    { type: 'mc', page: 93, q: ['ما حكم ما يشترك فيه الرجال والنساء من اللباس؟', 'Wat geldt voor kleding die mannen en vrouwen delen?'], options: [['مباح لهما', 'محرم عليهما', 'خاص بالرجال', 'مكروه للنساء'], ['toegestaan voor beide', 'verboden voor beide', 'alleen voor mannen', 'afgeraden voor vrouwen']], answer: 0, explain: ['الأصل الإباحة ولا تشبه فيه.', 'De grondregel is toelaatbaarheid; er is geen nabootsing.'] },
    { type: 'tf', page: 94, q: ['يجوز لعن شخص معين ممن تشبه بالنساء.', 'Een bepaald persoon die vrouwen nabootst, mag vervloekt worden.'], answer: 1, explain: ['لا يلعن المعين، بل يقال على العموم وينصح المعين.', 'Een bepaald persoon wordt niet vervloekt; men spreekt in het algemeen en vermaant hem.'] },
    { type: 'mc', page: 96, q: ['لماذا عذبت المرأة في الهرة؟', 'Waarom werd de vrouw gestraft om de kat?'], options: [['حبستها فلم تطعمها ولم تتركها تأكل', 'ضربتها مرة', 'اقتنتها في البيت', 'باعتها'], ['zij sloot haar op zonder voedsel en liet haar niet vrij om te eten', 'zij sloeg haar één keer', 'zij hield haar in huis', 'zij verkocht haar']], answer: 0, explain: ['كما في نص الحديث المتفق عليه.', 'Zoals in de tekst van de hadith.'] },
    { type: 'mc', page: 100, q: ['ماذا يقول من لا بد أن يتمنى الموت؟', 'Wat zegt wie per se de dood wil wensen?'], options: [['اللهم أحيني ما كانت الحياة خيرا لي وتوفني إذا كانت الوفاة خيرا لي', 'اللهم أمتني الآن', 'اللهم عجل لي بالموت', 'لا يقول شيئا'], ['o Allah, laat mij leven zolang het leven goed voor mij is en laat mij sterven als de dood goed is', 'o Allah, laat mij nu sterven', 'o Allah, haast mijn dood', 'hij zegt niets']], answer: 0, explain: ['ومع ذلك فالصبر أفضل.', 'Toch is geduld beter.'] }
  ],
  note: ['أنشطة الكتاب في الصفحات ٨٧ و٩١ و٩٥ و٩٩ و١٠٤.', 'Oefeningen van het boek op p. 87, 91, 95, 99 en 104. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
