// Hoofdstukkaart bij الفقه (٣), eenheid 2: iʿtikāf, de laatste tien en Laylat al-Qadr (lessen 14–16,
// boek p. 41–50). Opgesteld uit de leesnotities van het boek; regels, hadith en takhrij zoals in het boek.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n3-fiqh',
  chapter: '14',
  unit: 2,
  source: {
    label: ['كتاب الفقه (٣)، سلسلة زاد العلمية', 'Al-Fiqh (3), Zad-reeks'],
    pages: '41–50',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_Fiqh/page/n{p}/mode/1up'
  },
  title: ['الاعتكاف', 'Iʿtikāf'],
  subtitle: ['ثلاثة دروس مجموعة في صفحة واحدة', 'Drie lessen samen op één pagina'],
  summary: [
    'الاعتكاف لزوم مسجد لطاعة الله على صفة مخصوصة، وهو سنة مؤكدة ويجب بالنذر. شروطه النية والطهارة من الحدث الأكبر وأن يكون في مسجد تقام فيه الجماعة، ولا يشترط له الصوم ولا حد لأقله، وأفضله العشر الأواخر من رمضان. يباح للمعتكف الخروج لما لا بد منه، ويبطل بالخروج لغير حاجة وبالجماع وبالحيض والنفاس وبالردة. وفي العشر الأواخر ليلة القدر، خير من ألف شهر، تتحرى في أوتارها.',
    'Iʿtikāf is in een moskee blijven om Allah te gehoorzamen, op een bijzondere wijze. Het is een sterk aanbevolen sunna en wordt verplicht door een gelofte. De voorwaarden zijn de intentie, reinheid van grote onreinheid en een moskee waar het gemeenschappelijk gebed plaatsvindt; vasten is geen voorwaarde en er is geen minimumduur. Het beste is de laatste tien van Ramaḍān. De muʿtakif mag naar buiten voor wat onvermijdelijk is; iʿtikāf vervalt door zonder reden uit te gaan, door gemeenschap, menstruatie en kraambed, en door afvalligheid. In de laatste tien ligt Laylat al-Qadr, beter dan duizend maanden; men zoekt haar in de oneven nachten.'
  ],
  map: {
    title: ['الاعتكاف في خريطة واحدة', 'Iʿtikāf in één kaart'],
    intro: ['أبرز ما ذكره الكتاب.', 'De belangrijkste punten uit het boek.'],
    root: [['الاعتكاف', 'Iʿtikāf'], ['الوحدة الثانية', 'Eenheid 2']],
    nodes: [
      { label: ['تعريفه وحكمه', 'Definitie en oordeel'], sub: ['الدرس ١٤', 'les 14'], page: 43, children: [['سنة مؤكدة', 'sterk aanbevolen'], ['الشروط', 'voorwaarden'], ['المدة والوقت', 'duur en tijd']] },
      { label: ['ما يباح وما يبطل', 'Toegestaan en wat het verbreekt'], sub: ['الدرس ١٥', 'les 15'], page: 45, children: [['الخروج لحاجة', 'uitgaan voor een behoefte'], ['زيارة الأهل', 'bezoek van familie'], ['المبطلات', 'wat het verbreekt']] },
      { label: ['العشر الأواخر', 'De laatste tien'], sub: ['الدرس ١٦', 'les 16'], page: 47, children: [['ليلة القدر وخصائصها', 'Laylat al-Qadr en haar kenmerken'], ['تحريها', 'haar zoeken'], ['علاماتها', 'haar tekenen']] }
    ]
  },
  points: [
    [43, 'لم يثبت عن النبي ﷺ حديث قولي في فضل الاعتكاف، وإنما فعله وداوم عليه حتى توفاه الله.', 'Over de verdienste van iʿtikāf is geen authentieke uitspraak van de Profeet ﷺ; hij deed het en bleef het doen tot zijn dood.'],
    [44, 'لا يشترط الصوم للاعتكاف، لأن عمر نذر اعتكاف ليلة، والليل لا صوم فيه.', 'Vasten is geen voorwaarde, want ʿUmar deed de gelofte één nacht iʿtikāf te doen, en ’s nachts vast men niet.'],
    [44, 'من أراد اعتكاف العشر دخل المسجد قبل غروب شمس يوم العشرين، ويخرج بغروب شمس آخر يوم من رمضان.', 'Wie de laatste tien wil, gaat de moskee in vóór zonsondergang op de twintigste en gaat eruit bij zonsondergang op de laatste dag van Ramaḍān.'],
    [46, 'لا يبطل الاعتكاف بالتفكر إذا أمذى، ولا بالاحتلام؛ ويصح اعتكاف المستحاضة.', 'Iʿtikāf vervalt niet door madhy na gedachten of door een natte droom; de iʿtikāf van de mustaḥāḍa is geldig.'],
    [47, 'المسجد يشمل ما زيد فيه وسطحه ورحبته المحوطة؛ ومن اعتكف في مسجد لا جمعة فيه خرج للجمعة إن كان من أهلها.', 'De moskee omvat haar uitbreidingen, het dak en de omheinde binnenplaats; wie iʿtikāf doet in een moskee zonder vrijdaggebed, gaat uit voor het vrijdaggebed als dat voor hem verplicht is.'],
    [49, 'الصحيح أن ليلة القدر تتنقل في أوتار العشر الأواخر، وأخفاها الله ليجتهد الناس.', 'Juist is dat Laylat al-Qadr verschuift binnen de oneven nachten van de laatste tien; Allah verborg haar zodat de mensen zich inspannen.']
  ],
  terms: [
    ['الاعتكاف', 'al-iʿtikāf', 43, 'لغة: لزوم الشيء وحبس النفس عليه؛ وشرعا: لزوم مسجد لطاعة الله على صفة مخصوصة.', 'Taal: zich aan iets binden; sharīʿa: in een moskee blijven om Allah te gehoorzamen, op een bijzondere wijze.'],
    ['المعتكف', 'al-muʿtakaf', 44, 'المكان الخاص الذي يعتكف فيه داخل المسجد.', 'De eigen plek binnen de moskee waar men iʿtikāf doet.'],
    ['شد مئزره', 'shadda miʾzarahu', 47, 'كناية عن التشمير للعبادة والاجتهاد فيها.', 'Beeldspraak voor zich klaarmaken voor aanbidding en zich inspannen.'],
    ['أحيا ليله', 'aḥyā laylahu', 47, 'سهره بالصلاة وغيرها.', 'De nacht doorbrengen in gebed en aanbidding.'],
    ['الروح', 'ar-rūḥ', 48, 'جبريل عليه السلام، خص بالذكر لشرفه.', 'Jibrīl; apart genoemd om zijn eer.'],
    ['ليلة بلجة', 'layla balja', 49, 'مشرقة.', 'Stralend helder.']
  ],
  diagrams: [
    {
      type: 'cards',
      title: ['خصائص ليلة القدر', 'Kenmerken van Laylat al-Qadr'],
      intro: ['كما عدها الكتاب.', 'Zoals het boek ze opsomt.'],
      nodes: [
        [48, 'أنزل فيها القرآن', 'De Koran werd erin neergezonden', 'سورة القدر ١', 'al-Qadr 1'],
        [48, 'خير من ألف شهر', 'Beter dan duizend maanden', 'العبادة فيها خير من عبادة ألف شهر', 'aanbidding erin is beter dan duizend maanden aanbidding'],
        [48, 'ليلة مباركة', 'Een gezegende nacht', 'سورة الدخان ٣', 'ad-Dukhān 3'],
        [48, 'تتنزل فيها الملائكة والروح', 'Engelen en de Geest dalen neer', '', ''],
        [48, 'سلام حتى مطلع الفجر', 'Vrede tot de dageraad', '', ''],
        [48, 'فيها يفرق كل أمر حكيم', 'Elke wijze zaak wordt erin beslist', 'يكتب فيها ما يكون في السنة', 'wat het jaar brengt wordt opgeschreven'],
        [48, 'من قامها إيمانا واحتسابا غفر له', 'Wie haar in geloof en hoop doorbrengt, wordt vergeven', '', '']
      ]
    },
    {
      type: 'compare',
      title: ['ما يباح للمعتكف وما يبطل اعتكافه', 'Toegestaan en ongeldig voor de muʿtakif'],
      intro: ['مما ذكره الكتاب.', 'Uit het boek.'],
      columns: [['يباح', 'Toegestaan'], ['يبطل', 'Maakt ongeldig']],
      rows: [
        { label: ['الخروج', 'Uitgaan'], cells: [['لما لا بد منه كالطعام وقضاء الحاجة', 'voor het onvermijdelijke, zoals eten of naar het toilet'], ['لغير حاجة', 'zonder behoefte']] },
        { label: ['الأهل', 'Familie'], cells: [['زيارتهم وتشييعهم', 'bezoek ontvangen en uitzwaaien'], ['الجماع ولو خارج المسجد', 'gemeenschap, ook buiten de moskee']] },
        { label: ['البدن', 'Het lichaam'], cells: [['الترجل والتنظف والطيب', 'kammen, reinigen en parfum'], ['الحيض والنفاس', 'menstruatie en kraambed']] }
      ],
      page: 45
    }
  ],
  sections: [
    [43, 'لا ينبغي ترك الاعتكاف', 'Iʿtikāf hoort men niet te laten', 'قال الزهري: عجبا للمسلمين! تركوا الاعتكاف مع أن النبي ﷺ ما تركه منذ قدم المدينة حتى قبضه الله.', 'Az-Zuhrī zei: hoe vreemd zijn de moslims! Zij lieten iʿtikāf, terwijl de Profeet ﷺ het nooit liet vanaf zijn komst in Medina tot Allah hem tot Zich nam.'],
    [45, 'زيارة صفية', 'Het bezoek van Ṣafiyya', 'زارت صفية النبي ﷺ ليلا وهو معتكف، فلما قامت قام معها يقلبها إلى بيتها.', 'Ṣafiyya bezocht de Profeet ﷺ ’s nachts tijdens zijn iʿtikāf; toen zij opstond om te gaan, stond hij met haar op om haar naar huis te brengen.'],
    [47, 'اجتهاده في العشر', 'Zijn inspanning in de laatste tien', 'كان يجتهد في العشر الأواخر ما لا يجتهد في غيرها: يعتكف ويتحرى ليلة القدر، ويحيي ليله ويوقظ أهله ويشد مئزره.', 'In de laatste tien spande hij zich in zoals nooit anders: hij deed iʿtikāf en zocht Laylat al-Qadr, bracht de nacht door in aanbidding, wekte zijn gezin en maakte zich klaar.'],
    [49, 'علامات ليلة القدر', 'Tekenen van Laylat al-Qadr', 'تطلع الشمس صبيحتها لا شعاع لها؛ وهي ليلة طلقة لا حارة ولا باردة، تصبح الشمس يومها حمراء ضعيفة.', 'De zon komt de ochtend erna op zonder stralen; het is een milde nacht, niet warm en niet koud, en de zon is die dag rood en zwak.']
  ],
  keycards: [
    ['voorwaarde', 44, 'شروط الاعتكاف', 'Voorwaarden van iʿtikāf', ['النية', 'الطهارة من الحدث الأكبر', 'أن يكون في مسجد تقام فيه الجماعة'], ['de intentie', 'reinheid van grote onreinheid', 'een moskee waar het gemeenschappelijk gebed plaatsvindt']],
    ['opsomming', 46, 'مبطلات الاعتكاف', 'Wat iʿtikāf ongeldig maakt', ['الخروج من المسجد لغير حاجة', 'الجماع', 'الحيض والنفاس', 'الردة'], ['de moskee zonder noodzaak verlaten', 'gemeenschap', 'menstruatie en kraambed', 'afvalligheid']]
  ],
  hadith: [
    { text: 'كان النبي ﷺ يعتكف العشر الأواخر من رمضان حتى توفاه الله', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Profeet ﷺ deed iʿtikāf in de laatste tien van Ramaḍān, tot Allah hem tot Zich nam', pages: [43] },
    { text: 'أوف بنذرك', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', note: 'لعمر لما نذر في الجاهلية أن يعتكف ليلة في المسجد الحرام.', nlNote: 'Tegen ʿUmar, die in de Jāhiliyya de gelofte deed één nacht iʿtikāf te doen in de Masjid al-Ḥarām.', nl: 'Vervul je gelofte', pages: [44] },
    { text: 'وكان لا يدخل البيت إلا لحاجة إذا كان معتكفا', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Als hij in iʿtikāf was, ging hij alleen voor een behoefte het huis binnen', pages: [46] },
    { text: 'كان إذا دخل العشر أحيا ليله وأيقظ أهله وشد مئزره', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Als de laatste tien begonnen, bracht hij de nacht door in aanbidding, wekte hij zijn gezin en maakte hij zich klaar', pages: [47] },
    { text: 'لا أعلم رسول الله ﷺ قرأ القرآن كله في ليلة، ولا قام ليلة حتى الصباح، ولا صام شهرا كاملا قط غير رمضان', takhrij: 'رواه النسائي', takhrijNl: 'an-Nasāʾī', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'Ik weet niet dat de Boodschapper van Allah ﷺ ooit de hele Koran in één nacht las, of een nacht tot de ochtend in gebed stond, of ooit een volle maand vastte behalve Ramaḍān', pages: [47] },
    { text: 'من قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', nl: 'Wie Laylat al-Qadr in gebed doorbrengt uit geloof en in hoop op beloning, hem worden zijn vorige zonden vergeven', pages: [48] },
    { text: 'تحروا ليلة القدر في الوتر من العشر الأواخر', takhrij: 'رواه البخاري', takhrijNl: 'al-Bukhārī', nl: 'Zoek Laylat al-Qadr in de oneven nachten van de laatste tien', pages: [49] },
    { text: 'أرى رؤياكم قد تواطأت أنها في السبع الأواخر من رمضان، فمن كان متحريها فليتحرها في السبع الأواخر', takhrij: 'رواه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'Ik zie dat jullie dromen overeenkomen: zij valt in de laatste zeven van Ramaḍān. Wie haar zoekt, laat hem haar in de laatste zeven zoeken', pages: [49] },
    { text: 'اللهم إنك عفو تحب العفو فاعف عني', takhrij: 'رواه أحمد والترمذي وابن ماجه بإسناد صحيح', takhrijNl: 'Aḥmad, at-Tirmidhī en Ibn Māja, met authentieke keten', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', note: 'لما سألته ما تقول إن وافقت ليلة القدر.', nlNote: 'Toen zij vroeg wat zij moest zeggen als zij Laylat al-Qadr trof.', nl: 'Allah, U bent vergevend en houdt van vergeven, vergeef mij dan', pages: [49] },
    { text: 'ليلة القدر ليلة طلقة، لا حارة ولا باردة، تصبح الشمس يومها حمراء ضعيفة', takhrij: 'رواه ابن خزيمة بإسناد صحيح', takhrijNl: 'Ibn Khuzayma, met authentieke keten', narrator: 'ابن عباس', narratorNl: 'Ibn ʿAbbās', nl: 'Laylat al-Qadr is een milde nacht, niet warm en niet koud; de zon is die dag rood en zwak', pages: [49] }
  ],
  persons: [
    ['aisha', 'text', [43, 45, 46, 47, 49], 'روت اعتكافه ﷺ واجتهاده في العشر.', 'Overleverde zijn iʿtikāf ﷺ en zijn inspanning in de laatste tien.'],
    ['ibn-al-mundhir', 'text', [43, 46], 'نقل الإجماع على مشروعية الاعتكاف وعلى فساده بالجماع.', 'Vermeldde de consensus over iʿtikāf en dat gemeenschap het ongeldig maakt.'],
    ['ibn-hazm', 'text', [43], 'نقل الإجماع على مشروعية الاعتكاف.', 'Vermeldde de consensus dat iʿtikāf voorgeschreven is.'],
    ['az-zuhri', 'text', [43], 'تعجب من ترك المسلمين الاعتكاف.', 'Verbaasde zich dat moslims iʿtikāf lieten.'],
    ['umm-salama', 'text', [44], 'من أزواجه اللاتي اعتكفن.', 'Een van zijn vrouwen die iʿtikāf deden.'],
    ['hafsa-bint-umar', 'text', [44], 'من أزواجه اللاتي اعتكفن.', 'Een van zijn vrouwen die iʿtikāf deden.'],
    ['umar-ibn-al-khattab', 'text', [44], 'نذر اعتكاف ليلة فأمر بالوفاء.', 'Deed de gelofte één nacht iʿtikāf te doen en kreeg de opdracht die te vervullen.'],
    ['ibn-umar', 'text', [44, 49], 'روى نذر عمر وحديث السبع الأواخر.', 'Overleverde de gelofte van ʿUmar en de hadith over de laatste zeven.'],
    ['safiyya-bint-huyayy', 'text', [45], 'زارت النبي ﷺ في معتكفه.', 'Bezocht de Profeet ﷺ tijdens zijn iʿtikāf.'],
    ['al-khattabi', 'text', [46], 'قال: المعتكف لا يدخل بيته إلا لغائط أو بول.', 'Zei: de muʿtakif gaat zijn huis alleen binnen om zijn behoefte te doen.'],
    ['abu-hurayra', 'text', [48], 'روى فضل قيام ليلة القدر.', 'Overleverde de verdienste van gebed in Laylat al-Qadr.'],
    ['ubayy-ibn-kab', 'text', [49], 'روى أن الشمس تطلع صبيحتها لا شعاع لها.', 'Overleverde dat de zon de ochtend erna zonder stralen opkomt.'],
    ['ibn-abbas', 'text', [49], 'روى صفة ليلة القدر.', 'Overleverde de beschrijving van Laylat al-Qadr.'],
    ['wathila-ibn-al-asqa', 'text', [49], 'روى: ليلة القدر ليلة بلجة.', 'Overleverde: Laylat al-Qadr is een stralende nacht.']
  ],
  review: [
    ['الاعتكاف سنة مؤكدة ويجب بالنذر.', 'Iʿtikāf is een sterk aanbevolen sunna en wordt verplicht door een gelofte.'],
    ['شروطه النية والطهارة والمسجد الذي تقام فيه الجماعة، ولا يشترط الصوم.', 'De voorwaarden zijn intentie, reinheid en een moskee met gemeenschappelijk gebed; vasten is geen voorwaarde.'],
    ['أفضل وقته العشر الأواخر من رمضان.', 'De beste tijd is de laatste tien van Ramaḍān.'],
    ['يبطل بالخروج لغير حاجة والجماع والحيض والنفاس والردة.', 'Het vervalt door uitgaan zonder reden, gemeenschap, menstruatie en kraambed, en afvalligheid.'],
    ['ليلة القدر في أوتار العشر، ويدعى فيها: اللهم إنك عفو تحب العفو فاعف عني.', 'Laylat al-Qadr valt in de oneven nachten van de laatste tien; men smeekt dan: Allah, U bent vergevend en houdt van vergeven, vergeef mij.']
  ],
  quiz: [
    { type: 'mc', page: 43, q: ['ما حكم الاعتكاف؟', 'Wat is het oordeel over iʿtikāf?'], options: [['سنة مؤكدة، ويجب بالنذر', 'واجب على كل مسلم', 'مباح فقط', 'مكروه'], ['sterk aanbevolen, en verplicht door een gelofte', 'verplicht voor elke moslim', 'alleen toegestaan', 'afgeraden']], answer: 0, explain: ['داوم عليه النبي ﷺ حتى توفاه الله.', 'De Profeet ﷺ bleef het doen tot zijn dood.'] },
    { type: 'tf', page: 44, q: ['يشترط الصوم لصحة الاعتكاف.', 'Vasten is een voorwaarde voor de geldigheid van iʿtikāf.'], answer: 1, explain: ['نذر عمر اعتكاف ليلة فأمره بالوفاء.', 'ʿUmar deed de gelofte één nacht iʿtikāf te doen en kreeg de opdracht die te vervullen.'] },
    { type: 'mc', page: 44, q: ['متى يدخل من أراد اعتكاف العشر الأواخر؟', 'Wanneer gaat wie de laatste tien iʿtikāf wil doen de moskee in?'], options: [['قبل غروب شمس يوم العشرين', 'بعد فجر يوم الحادي والعشرين', 'ليلة السابع والعشرين', 'أول رمضان'], ['vóór zonsondergang op de twintigste', 'na de dageraad op de eenentwintigste', 'in de zevenentwintigste nacht', 'aan het begin van Ramaḍān']], answer: 0, explain: ['ليكون أول ليالي العشر في المسجد.', 'Zodat hij de eerste nacht van de tien in de moskee is.'] },
    { type: 'mc', page: 46, q: ['أي هذه يبطل الاعتكاف؟', 'Wat van het volgende maakt iʿtikāf ongeldig?'], options: [['الجماع', 'الخروج لقضاء الحاجة', 'زيارة الأهل له', 'النوم في المسجد'], ['gemeenschap', 'uitgaan om naar het toilet te gaan', 'bezoek van familie', 'slapen in de moskee']], answer: 0, explain: ['ولو كان خارج المسجد، بالإجماع.', 'Ook buiten de moskee, bij consensus.'] },
    { type: 'tf', page: 46, q: ['يصح اعتكاف المستحاضة.', 'De iʿtikāf van de mustaḥāḍa is geldig.'], answer: 0, explain: ['اعتكفت إحدى أزواجه وهي مستحاضة.', 'Een van zijn vrouwen deed iʿtikāf terwijl zij mustaḥāḍa was.'] },
    { type: 'mc', page: 49, q: ['في أي الليالي تتحرى ليلة القدر أكثر؟', 'In welke nachten zoekt men Laylat al-Qadr vooral?'], options: [['أوتار العشر الأواخر', 'أول رمضان', 'ليالي الجمعة', 'النصف من شعبان'], ['de oneven nachten van de laatste tien', 'het begin van Ramaḍān', 'de vrijdagnachten', 'half Shaʿbān']], answer: 0, explain: ['وأرجاها السبع الأواخر.', 'Het meest waarschijnlijk in de laatste zeven.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٥٠.', 'Oefeningen van het boek op p. 50. De Nederlandse weergave van hadith en verzen geeft de betekenis weer; het is geen vertaling.']
})
