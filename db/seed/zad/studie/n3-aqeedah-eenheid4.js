// Hoofdstukkaart bij العقيدة (٣), eenheid 4: نواقض التوحيد ونواقصه
// (tweede deel van les 5 en lessen 6–17; boek p. 35–63).
// Opgesteld uit de boekpagina's (Zad Academy, archive.org) en het importbestand van het boek;
// hadith, overleveraars en takhrij zoals in het boek.
import { spreadAnswers } from './quiz.js'

const source = {
  label: 'كتاب العقيدة (٣)، سلسلة زاد العلمية',
  pages: '35–63',
  url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester3_AlAqeedah/page/n{p}/mode/1up'
}

const HADITH = [
  { narrator: '', text: 'سباب المسلم فسوق، وقتاله كفر', takhrij: 'أخرجه مسلم', note: 'من الكفر الأصغر؛ بدليل أن الله سمى المتقاتلين مؤمنين [الحجرات: ٩].', pages: [40], nl: 'een moslim uitschelden is zondigheid, en tegen hem vechten is ongeloof', nlNote: 'Een voorbeeld van klein ongeloof: Allah noemt de strijdende partijen toch gelovigen (al-Ḥujurāt 49:9).' },
  { narrator: '', text: 'اثنتان في الناس هما بهم كفر: الطعن في النسب، والنياحة على الميت', takhrij: 'رواه مسلم', note: 'من الكفر الأصغر.', pages: [40], nl: 'twee dingen bij de mensen zijn bij hen ongeloof: afstamming aanvallen en luid weeklagen over een dode', nlNote: 'Klein ongeloof.' },
  { narrator: '', text: 'لا ترغبوا عن آبائكم، فمن رغب عن أبيه فهو كفر', takhrij: 'متفق عليه', note: 'انتساب الولد إلى غير أبيه مع علمه: من الكفر الأصغر.', pages: [40], nl: 'keer je niet af van je vaders; wie zich van zijn vader afkeert, dat is ongeloof', nlNote: 'Een kind dat zich willens en wetens aan een ander dan zijn vader toeschrijft: klein ongeloof.' },
  { narrator: '', text: 'يا أيها الناس، اتقوا هذا الشرك؛ فإنه أخفى من دبيب النمل', takhrij: 'أخرجه أحمد، والبخاري في الأدب المفرد، وصححه الألباني', note: 'الشرك ليس مجرد السجود للصنم، بل منه الظاهر والخفي.', pages: [41], nl: 'mensen, wees op je hoede voor deze shirk, want hij is verborgener dan het kruipen van mieren', nlNote: 'Shirk is meer dan buigen voor een afgod: er is zichtbare en verborgen shirk.' },
  { narrator: 'ابن مسعود', text: 'سألت النبي ﷺ: أي الذنب أعظم عند الله؟ قال: «أن تجعل لله ندا وهو خلقك». قلت: إن ذلك لعظيم!', takhrij: 'أخرجه البخاري', note: 'في خطر الشرك.', pages: [42], nl: 'Ik vroeg de Profeet ﷺ: welke zonde is bij Allah de grootste? Hij zei: "Dat je Allah een gelijke geeft, terwijl Hij jou geschapen heeft." Ik zei: dat is werkelijk groot!', nlNote: 'Over het gevaar van shirk.' },
  { narrator: '', text: 'الدعاء هو العبادة', takhrij: 'أخرجه أحمد وأصحاب السنن بسند صحيح', note: 'الدعاء لب العبادة، ودعاء غير الله شرك أكبر.', pages: [43], nl: 'de smeekbede is de aanbidding', nlNote: 'Smeekbede is de kern van aanbidding; een ander dan Allah aanroepen is grote shirk.' },
  { narrator: '', text: 'لما كان يوم فتح مكة أمّن رسول الله ﷺ الناس إلا أربعة نفر وامرأتين، وقال: «اقتلوهم، وإن وجدتموهم متعلقين بأستار الكعبة»... فركب عكرمة البحر فأصابتهم ريح عاصف، فقال أصحاب السفينة: أخلصوا، فإن آلهتكم لا تغني عنكم شيئا هاهنا. فقال عكرمة: والله لئن لم ينجني من البحر إلا الإخلاص، لا ينجيني في البر غيره، اللهم إن لك علي عهدا، إن أنت عافيتني مما أنا فيه أن آتي محمدا ﷺ حتى أضع يدي في يده، فلأجدنه عفوا كريما، فجاء فأسلم', takhrij: 'رواه أبو داود والنسائي، وصححه الألباني', note: 'الإخلاص وإسلام عكرمة رضي الله عنه.', pages: [44], nl: 'Op de dag van de verovering van Mekka gaf de Boodschapper ﷺ de mensen veiligheid, behalve vier mannen en twee vrouwen ... ʿIkrima ging scheep en een stormwind trof hen. De opvarenden zeiden: wees oprecht (in je smeekbede tot Allah alleen), want jullie goden baten jullie hier niets. ʿIkrima zei: als alleen oprechtheid mij op zee redt, dan redt niets anders mij op het land. O Allah, ik beloof U: als U mij hieruit redt, ga ik naar Muḥammad ﷺ en leg mijn hand in de zijne, en ik zal hem vergevend en edel vinden. Hij kwam en werd moslim', nlNote: 'Oprechtheid en hoe ʿIkrima moslim werd.' },
  { narrator: 'عدي بن حاتم', text: 'سمعته ﷺ يقرأ في سورة براءة: ﴿اتخذوا أحبارهم ورهبانهم أربابا من دون الله﴾، فقال عدي: «أما إنهم لم يكونوا يعبدونهم، ولكنهم كانوا إذا أحلوا لهم شيئا استحلوه، وإذا حرموا عليهم شيئا حرموه». فقال ﷺ: «فتلك عبادتهم»', takhrij: 'أخرجه الترمذي، وحسنه الألباني', note: 'في شرك الطاعة، بلفظ الكتاب.', pages: [45], nl: 'Ik hoorde hem ﷺ in soera Barāʾa reciteren: "Zij namen hun schriftgeleerden en monniken tot heren naast Allah." ʿAdī zei: "Zij aanbaden hen niet, maar als die hun iets toestonden, beschouwden zij het als toegestaan, en als die hun iets verboden, beschouwden zij het als verboden." De Profeet ﷺ zei: "Dat is hun aanbidding van hen."', nlNote: 'Bij de shirk van gehoorzaamheid; weergegeven zoals in het boek.' },
  { narrator: '', text: 'لعن الله من ذبح لغير الله', takhrij: 'رواه مسلم', note: 'الذبح لغير الله تقربا وتعظيما من صور الشرك الأكبر.', pages: [46], nl: 'Allah heeft wie voor een ander dan Allah slacht vervloekt', nlNote: 'Slachten voor een ander dan Allah om die te naderen en te eren is grote shirk.' },
  { narrator: '', text: 'إياكم والغلو، فإنما أهلك من كان قبلكم الغلو', takhrij: 'أخرجه أحمد والنسائي، وصححه الألباني', note: 'في الغلو في الصالحين والأولياء والأنبياء.', pages: [47], nl: 'pas op voor overdrijving, want overdrijving heeft wie vóór jullie waren te gronde gericht', nlNote: 'Bij overdrijving ten aanzien van vromen, heiligen en profeten.' },
  { narrator: '', text: 'اجتنبوا السبع الموبقات، قلنا: وما هن يا رسول الله؟ قال: الشرك بالله، والسحر... الحديث', takhrij: 'رواه البخاري ومسلم', note: 'في السحر بالعقد والرقى: كفر أكبر.', pages: [47], nl: 'Mijd de zeven verwoestende zonden. Wij vroegen: welke zijn dat, Boodschapper van Allah? Hij zei: shirk met Allah, tovenarij ... (de hadith)', nlNote: 'Bij tovenarij met knopen en bezweringen: groot ongeloof.' },
  { narrator: 'عائشة وابن عباس', text: 'لعنة الله على اليهود والنصارى، اتخذوا قبور أنبيائهم مساجد', takhrij: 'رواه البخاري ومسلم', note: 'قاله ﷺ لما نزل به الموت، يحذر ما صنعوا.', pages: [51], nl: 'Allahs vloek over de joden en de christenen: zij maakten de graven van hun profeten tot gebedsplaatsen', nlNote: 'Hij ﷺ zei dit toen de dood hem naderde, als waarschuwing tegen wat zij deden.' },
  { narrator: 'عائشة', text: 'ولولا ذلك لأبرز قبره، غير أنه خشي أن يتخذ مسجدا', takhrij: 'البخاري ومسلم', note: 'من كلام عائشة رضي الله عنها.', pages: [51], nl: 'Was dat er niet geweest, dan zou zijn graf in de open lucht zijn gelegd; maar men vreesde dat het een gebedsplaats zou worden', nlNote: 'Woorden van ʿĀʾisha.' },
  { narrator: '', text: 'اللهم لا تجعل قبري وثنا، لعن الله قوما اتخذوا قبور أنبيائهم مساجد', takhrij: 'رواه أحمد، وصححه الألباني', note: 'في سد ذريعة تعظيم القبور.', pages: [51], nl: 'O Allah, maak mijn graf niet tot een afgod; Allah vervloekte een volk dat de graven van zijn profeten tot gebedsplaatsen maakte', nlNote: 'Bij het afsluiten van de weg naar graven verheerlijken.' },
  { narrator: 'عائشة', text: 'إن أولئك إذا كان فيهم الرجل الصالح فمات، بنوا على قبره مسجدا، وصوروا فيه تلك الصور، فأولئك شرار الخلق عند الله يوم القيامة', takhrij: 'البخاري ومسلم', note: 'لما ذكرت أم حبيبة وأم سلمة كنيسة رأينها بالحبشة فيها تصاوير.', pages: [52], nl: 'Als er bij hen een vrome man was en hij stierf, bouwden zij op zijn graf een gebedshuis en maakten daarin die afbeeldingen; dat zijn de slechtste schepselen bij Allah op de Dag van de Opstanding', nlNote: 'Toen Umm Ḥabība en Umm Salama een kerk met afbeeldingen noemden die zij in Abessinië hadden gezien.' },
  { narrator: 'أبو الهياج الأسدي', text: 'قال لي علي: ألا أبعثك على ما بعثني عليه رسول الله ﷺ؟ أن لا تدع تمثالا إلا طمسته، ولا قبرا مشرفا إلا سويته', takhrij: 'رواه مسلم', note: 'في الأمر بتسوية القبور.', pages: [53], nl: 'ʿAlī zei tegen mij: zal ik je niet uitsturen met de opdracht waarmee de Boodschapper van Allah ﷺ mij uitstuurde? Laat geen beeld achter zonder het uit te wissen, en geen verhoogd graf zonder het gelijk te maken', nlNote: 'Bij het bevel graven gelijk te maken.' },
  { narrator: 'جابر', text: 'نهى رسول الله ﷺ أن يجصص القبر، وأن يقعد عليه، وأن يبنى عليه', takhrij: 'رواه مسلم', note: '', pages: [53], nl: 'de Boodschapper van Allah ﷺ verbood het graf te bepleisteren, erop te zitten en erop te bouwen', nlNote: '' },
  { narrator: 'أبو مرثد الغنوي', text: 'لا تصلوا إلى القبور، ولا تجلسوا عليها', takhrij: 'رواه مسلم', note: 'النهي عن الصلاة إلى القبور.', pages: [53], nl: 'bid niet in de richting van graven en zit er niet op', nlNote: 'Het verbod om richting graven te bidden.' },
  { narrator: 'أنس', text: 'قمت يوما أصلي وبين يدي قبر لا أشعر به، فناداني عمر: القبر القبر، فظننت أنه يعني القمر، فقال لي بعض من يليني: إنما يعني القبر، فتنحيت عنه', takhrij: 'رواه البيهقي', note: 'أثر عن عمر رضي الله عنه.', pages: [53], nl: 'Ik stond op een dag te bidden met een graf voor mij zonder dat ik het wist. ʿUmar riep mij: het graf, het graf! Ik dacht dat hij de maan (al-qamar) bedoelde, maar iemand naast mij zei: hij bedoelt het graf (al-qabr). Toen ging ik er weg', nlNote: 'Een overlevering over ʿUmar.' },
  { narrator: '', text: 'لا تشد الرحال إلا إلى ثلاثة مساجد: المسجد الحرام، ومسجد الرسول ﷺ، والمسجد الأقصى', takhrij: 'البخاري ومسلم', note: 'في النهي عن شد الرحال إلى القبور.', pages: [53], nl: 'men reist niet speciaal af behalve naar drie moskeeën: de Heilige Moskee, de moskee van de Boodschapper ﷺ en de al-Aqṣā-moskee', nlNote: 'Bij het verbod speciaal naar graven af te reizen.' },
  { narrator: '', text: 'لا عقر في الإسلام', takhrij: 'رواه أبو داود، وصححه الألباني', note: 'قال الإمام أحمد: كانوا في الجاهلية إذا مات فيهم السيد عقروا على قبره.', pages: [53], nl: 'er is geen ʿaqr (dieren slachten bij een graf) in de islam', nlNote: 'Imam Aḥmad: als in de jāhiliyya een leider stierf, slachtten zij dieren bij zijn graf.' },
  { narrator: '', text: 'صل صلاة الصبح، ثم أقصر عن الصلاة حتى تطلع الشمس حتى ترتفع؛ فإنها تطلع حين تطلع بين قرني شيطان، وحينئذ يسجد لها الكفار', takhrij: 'رواه مسلم', note: 'من صور سد الذرائع: النهي عن الصلاة عند طلوع الشمس وغروبها.', pages: [54], nl: 'bid het ochtendgebed en houd dan op met bidden tot de zon opkomt en hoog staat, want zij komt op tussen de twee hoorns van een duivel, en op dat moment knielen de ongelovigen voor haar', nlNote: 'Wegen afsluiten: het verbod te bidden bij zonsopgang en zonsondergang.' },
  { narrator: '', text: 'لا بأس بالرقى ما لم تكن شركا', takhrij: 'رواه مسلم', note: 'الأصل في الرقية أن تكون بكتاب الله وسنة رسوله.', pages: [54], nl: 'bezweringen (ruqā) zijn geen probleem zolang ze geen shirk zijn', nlNote: 'Ruqya hoort te gebeuren met het Boek van Allah en de Sunna.' },
  { narrator: 'زينب امرأة عبد الله بن مسعود', text: 'كانت عجوز تدخل علينا ترقي من الحمرة... فجاء فجلس إلى جانبي فمسني فوجد مس خيط، فقال: ما هذا؟ فقلت: رقي لي فيه من الحمرة! فجذبه وقطعه فرمى به، وقال: لقد أصبح آل عبد الله أغنياء عن الشرك، سمعت رسول الله ﷺ يقول: «إن الرقى والتمائم والتولة شرك»... ولكن لو فعلت كما فعل رسول الله ﷺ كان خيرا لك وأجدر أن تشفين، تنضحين في عينك الماء وتقولين: «أذهب الباس، رب الناس، اشف أنت الشافي، لا شفاء إلا شفاؤك، شفاء لا يغادر سقما»', takhrij: 'رواه أبو داود وابن ماجه، وصححه الألباني', note: 'في الرقية غير الموافقة للشرع.', pages: [54, 55], nl: 'Een oude vrouw kwam bij ons om bezweringen uit te spreken tegen de roos (een ontsteking) ... Hij (ʿAbd Allāh) kwam naast mij zitten, raakte mij aan en voelde een draad. Hij zei: wat is dit? Ik zei: daarin is een bezwering voor mij uitgesproken tegen de roos. Hij trok hem los, knipte hem door, gooide hem weg en zei: de familie van ʿAbd Allāh heeft shirk niet nodig; ik hoorde de Boodschapper van Allah ﷺ zeggen: "Bezweringen, amuletten en tiwala zijn shirk." ... Had je gedaan wat de Boodschapper van Allah ﷺ deed, dan was dat beter voor je en eerder genezing: water in je oog sprenkelen en zeggen: "Neem de kwaal weg, Heer van de mensen; genees, U bent de Genezer; er is geen genezing dan Uw genezing, een genezing die geen ziekte achterlaat."', nlNote: 'Bij ruqya die niet met de sharīʿa overeenkomt.' },
  { narrator: 'ابن عمر', text: 'من حلف بغير الله فقد أشرك', takhrij: 'أخرجه أبو داود، وصححه الألباني', note: 'الحلف بغير الله شرك أصغر.', pages: [56], nl: 'wie bij een ander dan Allah zweert, heeft shirk gepleegd', nlNote: 'Zweren bij een ander dan Allah is kleine shirk.' },
  { narrator: 'ابن مسعود', text: 'لأن أحلف بالله كاذبا أحب إلي من أن أحلف بغير الله صادقا', takhrij: '', note: 'أثر؛ لأن الحلف بغير الله شرك، والحلف بالله كذبا كبيرة، والشرك أعظم من الكبيرة.', pages: [56], nl: 'Liever zweer ik leugenachtig bij Allah dan dat ik naar waarheid zweer bij een ander dan Allah', nlNote: 'Een uitspraak van Ibn Masʿūd: zweren bij een ander is shirk, leugenachtig zweren bij Allah een grote zonde, en shirk is erger.' },
  { narrator: 'أبو هريرة', text: 'ومن حلف فقال في حلفه: واللات والعزى، فليقل: لا إله إلا الله', takhrij: 'متفق عليه', note: 'كفارة الحلف بغير الله.', pages: [56, 62], nl: 'wie bij het zweren zegt: "bij al-Lāt en al-ʿUzzā", moet zeggen: lā ilāha illā Llāh', nlNote: 'De boetedoening voor zweren bij een ander dan Allah.' },
  { narrator: 'حذيفة', text: 'لا تقولوا: ما شاء الله وشاء فلان، ولكن قولوا: ما شاء الله ثم شاء فلان', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', note: 'من الشرك اللفظي.', pages: [57], nl: 'zeg niet: "wat Allah wil en wat die-en-die wil", maar zeg: "wat Allah wil en daarna wat die-en-die wil"', nlNote: 'Shirk in woorden.' },
  { narrator: 'عقبة بن عامر الجهني', text: 'من علق تميمة فقد أشرك', takhrij: 'أخرجه أحمد بإسناد صحيح', note: 'في تعليق التمائم.', pages: [57], nl: 'wie een amulet ophangt, heeft shirk gepleegd', nlNote: 'Bij het ophangen van amuletten.' },
  { narrator: 'ابن مسعود', text: 'إن الرقى والتمائم والتولة شرك', takhrij: 'رواه أحمد وأبو داود وصححه الألباني', note: 'التولة: شيء تصنعه بعض النساء يتحببن به لأزواجهن.', pages: [57], nl: 'bezweringen, amuletten en tiwala zijn shirk', nlNote: 'Tiwala: iets wat sommige vrouwen maken om de liefde van hun man te winnen.' },
  { narrator: 'ابن مسعود', text: 'الطيرة شرك، الطيرة شرك، الطيرة شرك', takhrij: 'أخرجه أبو داود والترمذي وصححه', note: 'التشاؤم من الشرك الأصغر.', pages: [59], nl: 'bijgelovig voorteken (ṭiyara) is shirk (drie keer)', nlNote: 'Bijgeloof over onheil is kleine shirk.' },
  { narrator: '', text: 'من ردته الطيرة عن حاجته فقد أشرك، قالوا: فما كفارة ذلك؟ قال: أن تقول: اللهم لا خير إلا خيرك، ولا طير إلا طيرك، ولا إله غيرك', takhrij: 'رواه أحمد، وصححه الألباني', note: 'وهو كفارة الطيرة.', pages: [59, 62], nl: 'wie zich door een voorteken van zijn plan laat afhouden, heeft shirk gepleegd. Zij vroegen: wat is de boetedoening daarvoor? Hij zei: dat je zegt: O Allah, er is geen goed dan Uw goed, geen voorteken dan Uw voorteken, en geen god buiten U', nlNote: 'Dit is ook de boetedoening voor bijgeloof.' },
  { narrator: '', text: 'من أتى عرافا فسأله عن شيء لم تقبل له صلاة أربعين ليلة', takhrij: 'صحيح مسلم', note: 'الحالة الأولى: يسأله ولا يصدقه.', pages: [59], nl: 'wie naar een waarzegger gaat en hem iets vraagt, van hem wordt veertig nachten geen gebed aanvaard', nlNote: 'Het eerste geval: vragen zonder te geloven.' },
  { narrator: '', text: 'من أتى كاهنا أو عرافا فصدقه بما يقول، فقد كفر بما أنزل على محمد ﷺ', takhrij: 'أخرجه أحمد وأبو داود وابن ماجه، وصححه الألباني', note: 'الحالة الثانية: يسأله ويصدقه: كفر أكبر.', pages: [59], nl: 'wie naar een ziener of waarzegger gaat en hem gelooft in wat hij zegt, heeft ongeloof begaan in wat aan Muḥammad ﷺ is neergezonden', nlNote: 'Het tweede geval: vragen en geloven is groot ongeloof.' },
  { narrator: 'محمود بن لبيد', text: 'إن أخوف ما أخاف عليكم الشرك الأصغر، قالوا: وما الشرك الأصغر؟ قال: الرياء، إن الله تبارك وتعالى يقول يوم تجازى العباد بأعمالهم: اذهبوا إلى الذين كنتم تراءون بأعمالكم في الدنيا، فانظروا هل تجدون عندهم جزاء؟!', takhrij: 'أخرجه أحمد، وصححه الأرناؤوط', note: 'في الرياء.', pages: [60], nl: 'Wat ik het meest voor jullie vrees, is de kleine shirk. Zij vroegen: wat is de kleine shirk? Hij zei: gezien willen worden (riyāʾ). Allah zegt op de dag dat de dienaren voor hun daden worden vergolden: ga naar hen voor wie jullie in de wereld je daden vertoonden, en kijk of jullie bij hen een beloning vinden!', nlNote: 'Bij gezien willen worden (riyāʾ).' },
  { narrator: '', text: 'تعس عبد الدينار وعبد الدرهم وعبد الخميصة، إن أعطي رضي، وإن لم يعط سخط، تعس وانتكس، وإذا شيك فلا انتقش', takhrij: 'أخرجه البخاري', note: 'في إرادة الإنسان بعمله الدنيا.', pages: [61], nl: 'ellendig is de dienaar van de dinar, van de dirham en van het mooie kleed: krijgt hij, dan is hij tevreden; krijgt hij niet, dan is hij boos. Ellendig is hij en hij valt; en als een doorn hem prikt, wordt die niet verwijderd', nlNote: 'Bij met aanbidding wereldse doelen nastreven.' }
]

const TAKHRIJ_NL = {
  'أخرجه مسلم': 'Muslim',
  'رواه مسلم': 'Muslim',
  'صحيح مسلم': 'Muslim (Ṣaḥīḥ)',
  'متفق عليه': 'al-Bukhārī en Muslim (muttafaq ʿalayh)',
  'رواه البخاري ومسلم': 'al-Bukhārī en Muslim',
  'البخاري ومسلم': 'al-Bukhārī en Muslim',
  'أخرجه البخاري': 'al-Bukhārī',
  'أخرجه أحمد، والبخاري في الأدب المفرد، وصححه الألباني': 'Aḥmad en al-Bukhārī in al-Adab al-Mufrad; authentiek volgens al-Albānī',
  'أخرجه أحمد وأصحاب السنن بسند صحيح': 'Aḥmad en de Sunan-werken, met een authentieke keten',
  'رواه أبو داود والنسائي، وصححه الألباني': 'Abū Dāwūd en an-Nasāʾī; authentiek volgens al-Albānī',
  'أخرجه الترمذي، وحسنه الألباني': 'at-Tirmidhī; goed (ḥasan) volgens al-Albānī',
  'أخرجه أحمد والنسائي، وصححه الألباني': 'Aḥmad en an-Nasāʾī; authentiek volgens al-Albānī',
  'رواه أحمد، وصححه الألباني': 'Aḥmad; authentiek volgens al-Albānī',
  'رواه البيهقي': 'al-Bayhaqī',
  'رواه أبو داود، وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه أبو داود وابن ماجه، وصححه الألباني': 'Abū Dāwūd en Ibn Māja; authentiek volgens al-Albānī',
  'أخرجه أبو داود، وصححه الألباني': 'Abū Dāwūd; authentiek volgens al-Albānī',
  'رواه أحمد وأبو داود وصححه الألباني': 'Aḥmad en Abū Dāwūd; authentiek volgens al-Albānī',
  'أخرجه أحمد بإسناد صحيح': 'Aḥmad, met een authentieke keten',
  'أخرجه أبو داود والترمذي وصححه': 'Abū Dāwūd en at-Tirmidhī, die hem authentiek verklaarde',
  'أخرجه أحمد وأبو داود وابن ماجه، وصححه الألباني': 'Aḥmad, Abū Dāwūd en Ibn Māja; authentiek volgens al-Albānī',
  'أخرجه أحمد، وصححه الأرناؤوط': 'Aḥmad; authentiek volgens al-Arnaʾūṭ'
}
const NARRATOR_NL = {
  'ابن مسعود': 'ʿAbd Allāh ibn Masʿūd',
  'عدي بن حاتم': 'ʿAdī ibn Ḥātim',
  'عائشة وابن عباس': 'ʿĀʾisha en Ibn ʿAbbās',
  'عائشة': 'ʿĀʾisha',
  'أبو الهياج الأسدي': 'Abū l-Hayyāj al-Asadī',
  'جابر': 'Jābir',
  'أبو مرثد الغنوي': 'Abū Marthad al-Ghanawī',
  'أنس': 'Anas',
  'زينب امرأة عبد الله بن مسعود': 'Zaynab, de vrouw van ʿAbd Allāh ibn Masʿūd',
  'ابن عمر': 'Ibn ʿUmar',
  'أبو هريرة': 'Abū Hurayra',
  'حذيفة': 'Ḥudhayfa',
  'عقبة بن عامر الجهني': 'ʿUqba ibn ʿĀmir al-Juhanī',
  'محمود بن لبيد': 'Maḥmūd ibn Labīd'
}

const PERSONS = [
  ['ibn-masud', 'text', [42, 56, 57, 59], 'روى حديث «أي الذنب أعظم»، وقال: «لأن أحلف بالله كاذبا...»، وروى «إن الرقى والتمائم والتولة شرك» و«الطيرة شرك».', 'Overleverde "welke zonde is de grootste?", zei "liever zweer ik leugenachtig bij Allah ...", en overleverde "bezweringen, amuletten en tiwala zijn shirk" en "bijgeloof is shirk".'],
  ['ikrima-ibn-abi-jahl', 'text', [44], 'قصة إسلامه بعد أن نجاه الله في البحر بالإخلاص.', 'Het verhaal van zijn bekering nadat Allah hem op zee redde door oprechte smeekbede.'],
  ['adi-ibn-hatim', 'text', [45], 'روى حديث ﴿اتخذوا أحبارهم ورهبانهم أربابا﴾ في شرك الطاعة.', 'Overleverde de hadith over "zij namen hun schriftgeleerden en monniken tot heren" (shirk van gehoorzaamheid).'],
  ['ash-shinqiti', 'text', [45], 'قال: «فقد سمى تعالى الذين يشرعون من الدين ما لم يأذن به الله شركاء».', 'Zei: Allah noemt wie in de godsdienst wetten maakt die Hij niet toestond "deelgenoten".'],
  ['ibn-taymiyya', 'text', [46, 52], 'قال في الذبح لغير الله والنذر لغير الله، ونقل اتفاق أئمة الدين على أنه لا يشرع بناء المساجد على القبور.', 'Over slachten en geloften voor een ander dan Allah; noemde de overeenstemming van de imams dat moskeeën op graven niet zijn voorgeschreven.'],
  ['ibn-al-qayyim', 'text', [44, 52, 54], 'قال: طلب الحوائج من الموتى أصل شرك العالم، وذكر نهي النبي ﷺ عن البناء على القبور، وحكمة النهي عن الصلاة عند الطلوع والغروب.', 'Zei: behoeften vragen aan doden is de oorsprong van de shirk in de wereld; noemde het verbod op bouwen op graven en de wijsheid achter het verbod te bidden bij zonsopgang en -ondergang.'],
  ['ali-ibn-abi-talib', 'text', [48, 53], 'ذكر الكتاب الغلو فيه وفي أئمة آل البيت من صور الشرك، وأمره أبا الهياج بطمس التماثيل وتسوية القبور.', 'Het boek noemt overdrijving over hem en de imams van de Profeetfamilie als vorm van shirk, en zijn opdracht aan Abū l-Hayyāj beelden uit te wissen en graven gelijk te maken.'],
  ['aisha', 'text', [51, 52], 'روت حديث «لعنة الله على اليهود والنصارى» وحديث الكنيسة التي بالحبشة.', 'Overleverde "Allahs vloek over de joden en de christenen" en de hadith over de kerk in Abessinië.'],
  ['ibn-abbas', 'text', [51], 'روى مع عائشة حديث «لعنة الله على اليهود والنصارى».', 'Overleverde samen met ʿĀʾisha "Allahs vloek over de joden en de christenen".'],
  ['ibn-hajar-al-asqalani', 'text', [51], 'قال: كأنه ﷺ علم أنه مرتحل من ذلك المرض فخاف أن يعظم قبره.', 'Zei: het is alsof hij ﷺ wist dat hij aan die ziekte zou sterven en vreesde dat zijn graf verheerlijkt zou worden.'],
  ['umm-habiba', 'text', [52], 'ذكرت مع أم سلمة كنيسة رأتاها بالحبشة فيها تصاوير.', 'Noemde met Umm Salama een kerk met afbeeldingen in Abessinië.'],
  ['umm-salama', 'text', [52], 'ذكرت مع أم حبيبة كنيسة رأتاها بالحبشة فيها تصاوير.', 'Noemde met Umm Ḥabība een kerk met afbeeldingen in Abessinië.'],
  ['ibn-hajar-al-haytami', 'text', [52], 'عد اتخاذ القبور مساجد وإيقاد السرج عليها والطواف بها من الكبائر.', 'Rekende graven tot gebedsplaatsen maken, er lampen ontsteken en er rondgaan tot de grote zonden.'],
  ['abu-al-hayyaj-al-asadi', 'text', [53], 'روى عن علي الأمر بتسوية القبور.', 'Overleverde van ʿAlī het bevel graven gelijk te maken.'],
  ['jabir-ibn-abdallah', 'text', [53], 'روى النهي عن تجصيص القبر والقعود عليه والبناء عليه.', 'Overleverde het verbod een graf te bepleisteren, erop te zitten en erop te bouwen.'],
  ['abu-marthad-al-ghanawi', 'text', [53], 'روى «لا تصلوا إلى القبور، ولا تجلسوا عليها».', 'Overleverde "bid niet richting graven en zit er niet op".'],
  ['anas-ibn-malik', 'text', [53], 'روى قصة عمر حين ناداه: القبر القبر.', 'Overleverde hoe ʿUmar hem toeriep: het graf, het graf!'],
  ['umar-ibn-al-khattab', 'text', [53], 'نهى أنسا عن الصلاة إلى قبر.', 'Weerhield Anas ervan richting een graf te bidden.'],
  ['ahmad-ibn-hanbal', 'text', [53], 'قال: كانوا في الجاهلية إذا مات فيهم السيد عقروا على قبره. وأخرج كثيرا من أحاديث الوحدة.', 'Zei: in de jāhiliyya slachtten zij dieren bij het graf van een overleden leider. Nam ook veel hadith van deze eenheid op.'],
  ['zaynab-imraat-ibn-masud', 'text', [54, 55], 'روت قصة الخيط الذي قطعه ابن مسعود.', 'Vertelde over de draad die Ibn Masʿūd doorknipte.'],
  ['ibn-umar', 'text', [56], 'روى «من حلف بغير الله فقد أشرك».', 'Overleverde "wie bij een ander dan Allah zweert, heeft shirk gepleegd".'],
  ['abu-hurayra', 'text', [62], 'روى «من قال في حلفه: باللات والعزى، فليقل: لا إله إلا الله».', 'Overleverde "wie bij al-Lāt en al-ʿUzzā zweert, moet lā ilāha illā Llāh zeggen".'],
  ['hudhayfa-ibn-al-yaman', 'text', [57], 'روى «لا تقولوا: ما شاء الله وشاء فلان».', 'Overleverde "zeg niet: wat Allah wil en wat die-en-die wil".'],
  ['uqba-ibn-amir', 'text', [57], 'روى «من علق تميمة فقد أشرك».', 'Overleverde "wie een amulet ophangt, heeft shirk gepleegd".'],
  ['mahmud-ibn-labid', 'text', [60], 'روى حديث «إن أخوف ما أخاف عليكم الشرك الأصغر».', 'Overleverde "wat ik het meest voor jullie vrees, is de kleine shirk".'],
  ['al-bukhari', 'takhrij', [40, 42, 47, 51, 61], 'أخرج عددا من أحاديث الوحدة، ومنها في الأدب المفرد.', 'Nam een aantal hadith van deze eenheid op, ook in al-Adab al-Mufrad.'],
  ['muslim', 'takhrij', [40, 46, 53, 54, 59], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['abu-dawud', 'takhrij', [44, 53, 55, 56, 57, 59], 'أخرج عددا من أحاديث الوحدة.', 'Nam een aantal hadith van deze eenheid op.'],
  ['at-tirmidhi', 'takhrij', [45, 59], 'أخرج حديث عدي بن حاتم وحديث «الطيرة شرك».', 'Nam de hadith van ʿAdī ibn Ḥātim en "bijgeloof is shirk" op.'],
  ['an-nasai', 'takhrij', [44, 47], 'أخرج حديث عكرمة وحديث «إياكم والغلو».', 'Nam de hadith over ʿIkrima en "pas op voor overdrijving" op.'],
  ['ibn-maja', 'takhrij', [55, 59], 'أخرج حديث زينب وحديث «من أتى كاهنا».', 'Nam de hadith van Zaynab en "wie naar een ziener gaat" op.'],
  ['al-bayhaqi', 'takhrij', [53], 'أخرج أثر عمر مع أنس.', 'Nam de overlevering over ʿUmar en Anas op.'],
  ['al-albani', 'takhrij', [41, 44, 45, 47, 51, 53, 55, 56, 57, 59], 'صحح أو حسن عددا من أحاديث الوحدة.', 'Verklaarde een aantal hadith van deze eenheid authentiek of goed.'],
  ['al-arnaut', 'takhrij', [60], 'صحح حديث محمود بن لبيد في الرياء.', 'Verklaarde de hadith van Maḥmūd ibn Labīd over riyāʾ authentiek.']
]

const ar = {
  scope: 'unit',
  unit: 4,
  title: 'نواقض التوحيد ونواقصه',
  subtitle: 'من بقية الدرس الخامس إلى الدرس السابع عشر',
  summary: 'الكفر وأنواعه والفروق بين الأكبر والأصغر؛ الشرك وأنواعه: الأكبر بأنواعه وصوره، وسد الذرائع الموصلة إليه، والأصغر الظاهر والخفي؛ ومتى ينقلب الأصغر أكبر، والفرق بين الكفر والشرك.',
  source,
  visual: {
    type: 'mindmap',
    title: 'الوحدة الرابعة في خريطة واحدة',
    intro: 'موضوعات الوحدة كما في صفحة ٣٦ من الكتاب.',
    root: { label: 'نواقض التوحيد ونواقصه', sub: 'الوحدة الرابعة' },
    nodes: [
      { label: 'الكفر', sub: 'الدرسان ٥–٦', page: 37, children: ['أكبر: خمسة أقسام', 'أصغر', 'الفروق بينهما'] },
      { label: 'الشرك الأكبر', sub: 'الدروس ٧–٨', page: 43, children: ['الدعاء', 'النية والإرادة', 'الطاعة', 'المحبة'] },
      { label: 'صور الشرك الأكبر', sub: 'الدرسان ٩–١٠', page: 46, children: ['الذبح والنذر لغير الله', 'الغلو', 'السحر', 'الاستغاثة بالأموات'] },
      { label: 'سد الذرائع', sub: 'الدروس ١١–١٣', page: 51, children: ['القبور', 'العقر', 'أوقات النهي', 'الرقية'] },
      { label: 'الشرك الأصغر الظاهر', sub: 'الدرسان ١٤–١٥', page: 56, children: ['الحلف بغير الله', 'ما شاء الله وشئت', 'التمائم والتشاؤم', 'الكهان'] },
      { label: 'الشرك الأصغر الخفي', sub: 'الدرسان ١٦–١٧', page: 60, children: ['الرياء والسمعة', 'إرادة الدنيا', 'انقلابه أكبر'] }
    ]
  },
  points: [
    { text: 'الكفر لغة التغطية والستر، واصطلاحًا عدم الإيمان بالله ورسله، سواء كان معه تكذيب أو شك أو إعراض.', page: 37 },
    { text: 'الكفر الأكبر خمسة أقسام: التكذيب، والإباء والاستكبار، والشك، والإعراض، والنفاق؛ والأصغر ذنوب سماها الشرع كفرًا ولا تخرج من الملة.', page: 38 },
    { text: 'الشرك جعل شريك لله في ربوبيته أو ألوهيته أو أسمائه وصفاته؛ وكثير من الناس يظنه مجرد السجود للصنم، وهذا خطأ كبير.', page: 41 },
    { text: 'الشرك الأكبر صرف نوع من العبادة لغير الله، ومن أنواعه: شرك الدعاء، والنية والإرادة، والطاعة، والمحبة.', page: 43 },
    { text: 'من سأل غير الله ما لا يقدر عليه إلا الله فقد أشرك، وسؤال الميت شرك مطلقًا.', page: 44 },
    { text: 'تعظيم القبور والبناء عليها والتبرك بها من أعظم الطرق الموصلة إلى الشرك، وقد سد النبي ﷺ ذرائعه.', page: 51 },
    { text: 'الشرك الأصغر ما كان ذريعة إلى الأكبر وسماه الشرع شركًا، ولا ينقض التوحيد بالكلية لكن ينقصه؛ وهو ظاهر وخفي.', page: 55 },
    { text: 'الكفر أعم من الشرك؛ فكل مشرك كافر ولا عكس.', page: 62 }
  ],
  terms: [
    { term: 'الكفر', translit: 'al-kufr', meaning: 'لغة: التغطية والستر.', explanation: 'اصطلاحًا: عدم الإيمان بالله ورسله، سواء كان معه تكذيب أم لم يكن، بل شك وريب، أو إعراض حسدًا أو كبرًا أو اتباعًا للهوى.', notes: [], page: 37 },
    { term: 'كفر التكذيب', translit: 'kufr at-takdhīb', meaning: 'اعتقاد كذب الرسل، أو إنكار شيء معلوم من الدين بالضرورة.', explanation: 'كمن ينكر الصيام ويدعي أنه يعطل الإنتاج.', notes: ['[العنكبوت: ٦٨]'], page: 38 },
    { term: 'كفر الإباء والاستكبار', translit: 'kufr al-ibāʾ wa-l-istikbār', meaning: 'عالم بصدق الرسول لكن لا ينقاد لحكمه استكبارًا وعنادًا.', explanation: 'ككفر إبليس.', notes: ['[البقرة: ٣٤]'], page: 38 },
    { term: 'كفر الشك', translit: 'kufr ash-shakk', meaning: 'التردد وعدم الجزم بصدق الرسل.', explanation: '', notes: ['[الكهف: ٣٥–٣٧]'], page: 39 },
    { term: 'كفر الإعراض', translit: 'kufr al-iʿrāḍ', meaning: 'أن يعرض بسمعه وقلبه وعلمه عما جاء به الرسول.', explanation: '', notes: ['[الأحقاف: ٣]'], page: 39 },
    { term: 'كفر النفاق', translit: 'kufr an-nifāq', meaning: 'النفاق الاعتقادي: إظهار الإيمان وإبطان الكفر.', explanation: '', notes: ['[المنافقون: ٣]'], page: 39 },
    { term: 'الكفر الأصغر', translit: 'al-kufr al-aṣghar', meaning: 'الذنوب التي سماها الشرع كفرًا ولم يحكم على أصحابها بالخروج من الإسلام.', explanation: 'ككفر النعمة، وقتال المسلم، والطعن في النسب، والنياحة.', notes: ['[النحل: ١١٢]'], page: 40 },
    { term: 'الشرك', translit: 'ash-shirk', meaning: 'لغة: اسم للشيء يكون بين أكثر من واحد.', explanation: 'اصطلاحًا: جعل شريك لله في ربوبيته أو ألوهيته أو أسمائه وصفاته.', notes: [], page: 41 },
    { term: 'الشرك الأكبر', translit: 'ash-shirk al-akbar', meaning: 'أن يصرف العبد نوعًا من أنواع العبادة لغير الله.', explanation: 'يخرج من الملة ويخلد صاحبه في النار إذا مات ولم يتب.', notes: ['[الكهف: ١١٠]'], page: 43 },
    { term: 'دعاء العبادة', translit: 'duʿāʾ al-ʿibāda', meaning: 'التقرب إلى الله بأنواع العبادات؛ فالمتعبد يرجو بلسان حاله رحمة الله ويخاف عقابه.', explanation: '', notes: [], page: 43 },
    { term: 'دعاء المسألة', translit: 'duʿāʾ al-masʾala', meaning: 'طلب ما ينفع الداعي وكشف ما يضره.', explanation: '', notes: ['[يونس: ١٨]'], page: 43 },
    { term: 'شرك الطاعة', translit: 'shirk aṭ-ṭāʿa', meaning: 'اعتقاد أن لغير الله حق التشريع والتحليل والتحريم.', explanation: 'التشريع من خصائص الألوهية.', notes: ['[الشورى: ٢١]', '[التوبة: ٣١]'], page: 45 },
    { term: 'شرك المحبة', translit: 'shirk al-maḥabba', meaning: 'صرف محبة العبودية، المستلزمة للإجلال والتعظيم والذل، لغير الله.', explanation: '', notes: ['[البقرة: ١٦٥]'], page: 45 },
    { term: 'الغلو', translit: 'al-ghuluww', meaning: 'مجاوزة الحد في الصالحين والأولياء والأنبياء وصرف شيء من العبادة لهم.', explanation: '', notes: ['[النساء: ١٧١]'], page: 47 },
    { term: 'سد الذرائع', translit: 'sadd adh-dharāʾiʿ', meaning: 'منع الوسائل الموصلة إلى الشرك.', explanation: 'كالنهي عن البناء على القبور والصلاة إليها وعند طلوع الشمس وغروبها.', notes: [], page: 51 },
    { term: 'العقر', translit: 'al-ʿaqr', meaning: 'الذبح عند القبور.', explanation: 'كانوا في الجاهلية إذا مات فيهم السيد عقروا على قبره.', notes: [], page: 53 },
    { term: 'الرقية', translit: 'ar-ruqya', meaning: 'تجوز بثلاثة شروط: بكلام الله أو أسمائه وصفاته، وباللسان العربي أو بما يعرف معناه، مع اعتقاد أنها لا تؤثر بذاتها.', explanation: '', notes: [], page: 55 },
    { term: 'الشرك الأصغر', translit: 'ash-shirk al-aṣghar', meaning: 'كل ما كان ذريعة إلى الأكبر ووسيلة للوقوع فيه، وسماه الشرع شركًا.', explanation: 'لا ينقض التوحيد بالكلية لكن ينقصه ويضعفه.', notes: [], page: 55 },
    { term: 'التميمة', translit: 'at-tamīma', meaning: 'شيء من خرز أو جلد أو خيط يعلق لدفع الضرر أو العين.', explanation: 'شرك أصغر إن اعتقده سببًا، وأكبر إن اعتقد أنه يدفع البلاء بنفسه.', notes: [], page: 57 },
    { term: 'التولة', translit: 'at-tiwala', meaning: 'شيء تصنعه بعض النساء يتحببن به لأزواجهن.', explanation: '', notes: [], page: 58 },
    { term: 'التشاؤم (الطيرة)', translit: 'at-tashāʾum (aṭ-ṭiyara)', meaning: 'توهم حصول المكروه بمرئي أو معلوم أو مسموع.', explanation: 'كالتشاؤم بالبوم والغراب، وبالرقم ١٣، وبشهر صفر.', notes: [], page: 58 },
    { term: 'الكاهن والعراف', translit: 'al-kāhin wa-l-ʿarrāf', meaning: 'الكاهن يدعي معرفة ما في المستقبل، والعراف يدعي معرفة الماضي.', explanation: '', notes: [], page: 59 },
    { term: 'التنجيم', translit: 'at-tanjīm', meaning: 'الاستدلال بالأحوال الفلكية على الحوادث الأرضية.', explanation: 'من دعوى علم الغيب الباطلة.', notes: [], page: 59 },
    { term: 'الرياء', translit: 'ar-riyāʾ', meaning: 'أن يعمل عملًا مما يتقرب به إلى الله يريد به ثناء الناس.', explanation: 'الرياء لما يرى من العمل، والسمعة لما يسمع.', notes: [], page: 60 },
    { term: 'السمعة', translit: 'as-sumʿa', meaning: 'العمل المسموع لأجل الناس: كقراءة القرآن والوعظ والذكر.', explanation: '', notes: [], page: 60 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'أنواع الكفر',
      intro: 'نوعان كما في الكتاب.',
      root: { label: 'الكفر', page: 37 },
      nodes: [
        { label: 'أكبر يخرج من الملة', children: ['التكذيب', 'الإباء والاستكبار', 'الشك', 'الإعراض', 'النفاق'], page: 38 },
        { label: 'أصغر لا يخرج من الملة', children: ['كفر النعمة', 'قتال المسلم', 'الطعن في النسب والنياحة', 'الانتساب إلى غير الأب'], page: 40 }
      ]
    },
    {
      type: 'compare',
      title: 'الفروق بين الكفر الأكبر والأصغر',
      intro: 'أربعة فروق.',
      columns: ['الأكبر', 'الأصغر'],
      rows: [
        { label: 'الملة والأعمال', cells: ['يخرج من الملة ويحبط الأعمال', 'لا يخرج ولا يحبط، لكن ينقصها ويعرض صاحبه للوعيد'] },
        { label: 'الآخرة', cells: ['يخلد صاحبه في النار', 'تحت المشيئة، وإن عذب لم يخلد'] },
        { label: 'الدم والمال', cells: ['يبيحهما', 'لا يبيحهما'] },
        { label: 'الموالاة', cells: ['يوجب العداوة الخالصة ولو لأقرب قريب', 'يوالى بقدر إيمانه ويعادى بقدر معصيته'] }
      ],
      page: 40
    },
    {
      type: 'tree',
      title: 'أنواع الشرك',
      intro: 'مخطط الكتاب في صفحة ٤٢.',
      root: { label: 'الشرك', page: 42 },
      nodes: [
        { label: 'أكبر', children: ['شرك الدعاء: دعاء عبادة ودعاء مسألة', 'شرك النية والإرادة', 'شرك الطاعة', 'شرك المحبة'], page: 43 },
        { label: 'أصغر ظاهر', children: ['أقوال: الحلف بغير الله، ما شاء الله وشئت', 'أفعال: التمائم، التشاؤم، التنجيم، إتيان الكهان'], page: 56 },
        { label: 'أصغر خفي', children: ['الرياء والسمعة', 'إرادة الدنيا بالعمل'], page: 60 }
      ]
    },
    {
      type: 'cards',
      title: 'من صور الشرك الأكبر',
      intro: 'كما ذكرها الكتاب في الدرسين ٩ و١٠.',
      nodes: [
        { label: 'الذبح لغير الله', sub: 'تقربًا وتعظيمًا، ولحمه حرام [المائدة: ٣]', page: 46 },
        { label: 'النذر لغير الله', sub: 'أعظم من الحلف بغير الله، كالسجود لغير الله', page: 46 },
        { label: 'الغلو في الصالحين', sub: 'وصرف شيء من العبادة لهم [النساء: ١٧١]', page: 47 },
        { label: 'السحر بالعقد والرقى', sub: 'كفر أكبر؛ أما بالأدوية فصاحبه عاص', page: 47 },
        { label: 'اتخاذ علي وأئمة آل البيت أربابًا', sub: 'والاستغاثة بهم والذبح لهم', page: 48 },
        { label: 'مجاوزة الحد في المشايخ', sub: 'واعتقاد علمهم الغيب وصرف الدعاء لهم', page: 48 },
        { label: 'دعاء أصحاب الأضرحة والاستغاثة بهم', sub: '[الزمر: ٣]', page: 49 }
      ]
    },
    {
      type: 'cards',
      title: 'سد الذرائع الموصلة إلى الشرك',
      intro: 'شدد النبي ﷺ غاية التشديد في أمر القبور.',
      nodes: [
        { label: 'لا تتخذ القبور مساجد', sub: 'ولعن من فعل ذلك', page: 51 },
        { label: 'تسوية القبور', sub: 'والنهي عن رفعها وتجصيصها والبناء عليها', page: 53 },
        { label: 'لا يصلى إلى القبور', sub: 'ولا يجلس عليها', page: 53 },
        { label: 'لا تشد الرحال إليها', sub: 'إلا إلى المساجد الثلاثة', page: 53 },
        { label: 'لا عقر عند القبور', page: 53 },
        { label: 'لا صلاة عند طلوع الشمس وغروبها', sub: 'سدًّا لذريعة مشابهة المشركين', page: 54 },
        { label: 'الرقية بالشرع وحده', sub: 'لا بالشرك ولا بالطلاسم', page: 54 }
      ]
    },
    {
      type: 'compare',
      title: 'أحوال من جاء إلى كاهن أو عراف',
      intro: 'ثلاث أحوال.',
      columns: ['الحال', 'الحكم'],
      rows: [
        { label: 'الأولى', cells: ['يسأله ولا يصدقه', 'لا تقبل صلاته أربعين يومًا'] },
        { label: 'الثانية', cells: ['يسأله ويصدقه', 'كفر أكبر'] },
        { label: 'الثالثة', cells: ['يسأله ليبين حاله للناس أو لينكر عليه', 'مشروع مأجور، وقد يجب'] }
      ],
      page: 59
    },
    {
      type: 'compare',
      title: 'الرياء والسمعة وإرادة الدنيا',
      intro: 'الشرك الأصغر الخفي.',
      columns: ['الرياء', 'السمعة', 'إرادة الدنيا'],
      rows: [
        { label: 'يعمل لأجل', cells: ['ثناء الناس على ما يرونه', 'ثناء الناس على ما يسمعونه', 'عرض من الدنيا كالمال والمنصب'] },
        { label: 'مثاله', cells: ['الصلاة والصدقة والحج', 'قراءة القرآن والوعظ والذكر', 'الحج أو الإمامة أو طلب العلم للمال'] }
      ],
      page: 61
    },
    {
      type: 'steps',
      title: 'متى ينقلب الشرك الأصغر أكبر؟',
      intro: 'في حالتين.',
      nodes: [
        { label: 'إذا صحبه تعظيم غير الله كتعظيم الله', sub: 'كالحلف بغير الله معظمًا له كتعظيم الله', page: 61 },
        { label: 'إذا كان في أصل الإيمان أو غلب على العبد', sub: 'كالمراءاة بأصل الإيمان، أو غلبة الرياء أو إرادة الدنيا على أعماله', page: 61 }
      ]
    }
  ],
  sections: [
    { title: 'الكفر الأكبر', text: 'يخرج من الملة، وهو خمسة أقسام: التكذيب، والإباء والاستكبار مع التصديق، والشك، والإعراض الكلي عن الدين، والنفاق الاعتقادي.', more: 'قال الليث: إنما سمي الكافر كافرًا لأن الكفر غطى قلبه.', page: 37 },
    { title: 'الكفر الأصغر', text: 'ذنوب سماها الشرع كفرًا ولا تخرج من الملة، ككفر النعمة، وقتال المسلم، والطعن في النسب، والنياحة، وانتساب الولد إلى غير أبيه.', more: 'سمى الله المتقاتلين مؤمنين [الحجرات: ٩]، فدل على أن قتال المسلم كفر أصغر.', page: 40 },
    { title: 'خطر الشرك', text: 'الشرك له مظاهر كثيرة، بعضها ظاهر وبعضها خفي؛ وقد دعا إبراهيم ربه أن يجنبه وبنيه عبادة الأصنام [إبراهيم: ٣٥]، فنحن أولى أن نحذر.', more: '[لقمان: ١٣]، [المائدة: ٧٢]، [النساء: ٤٨]، [الحج: ٣١].', page: 41 },
    { title: 'شرك الدعاء', text: 'دعاء غير الله؛ والدعاء لب العبادة. فمن دعا نبيًا أو ملكًا أو وليًا أو قبرًا فهو مشرك.', more: 'قال ابن القيم: طلب الحوائج من الموتى والاستغاثة بهم والتوجه إليهم أصل شرك العالم.', page: 43 },
    { title: 'ضابط سؤال غير الله', text: 'من سأل غير الله ما لا يقدر عليه إلا الله فقد أشرك [الأحقاف: ٥]؛ ومن سأل الناس ما يقدرون عليه كالقرض والمساعدة فلا بأس. وسؤال الميت شرك مطلقًا.', more: 'والاستعانة مثل ذلك.', page: 44 },
    { title: 'شرك النية والطاعة والمحبة', text: 'أن يريد بأعماله الدنيا أو الرياء إرادة كلية كأهل النفاق؛ أو يعتقد لغير الله حق التشريع والتحليل والتحريم؛ أو يصرف محبة العبودية لغير الله.', more: '[النساء: ١٤٢]، [الشورى: ٢١]، [البقرة: ١٦٥].', page: 45 },
    { title: 'الذبح والنذر لغير الله', text: 'الذبح لغير الله تقربًا وتعظيمًا شرك مخرج عن الملة، ولحمه حرام؛ والنذر لغير الله شرك كالسجود لغير الله.', more: 'والنصيحة لمن فعل ذلك أن يتوب، فإذا تاب غفر له ما سبق [الأنفال: ٣٨].', page: 46 },
    { title: 'هل السحر كفر؟', text: 'قسمان: عقد ورقى يتوصل بها الساحر إلى إشراك الشياطين، وهذا كفر أكبر [البقرة: ١٠٢]؛ وأدوية وعقاقير تؤثر في بدن المسحور وعقله، وصاحبها لا يكفر لكنه عاص.', more: '', page: 47 },
    { title: 'القبور', text: 'لعن النبي ﷺ اليهود والنصارى لاتخاذهم قبور أنبيائهم مساجد، ووصف من يبني على قبور الصالحين بأنهم شرار الخلق عند الله.', more: 'قال ابن تيمية: اتفق أئمة الدين على أنه لا يشرع بناء المساجد على القبور، ويجب هدم كل مسجد بني على قبر.', page: 51 },
    { title: 'الرقية', text: 'لا بأس بالرقى ما لم تكن شركًا؛ ولا يجوز منها ما كان بالشرك أو بالاستعانة بالمشعوذين والسحرة والكهنة أو بالطلاسم.', more: 'وأجمع العلماء على جوازها بثلاثة شروط: بكلام الله أو أسمائه وصفاته، وباللسان العربي أو ما يعرف معناه، مع اعتقاد أنها لا تؤثر بذاتها.', page: 54 },
    { title: 'الشرك الأصغر الظاهر', text: 'أقوال: كالحلف بغير الله، وقول ما شاء الله وشئت. وأفعال: كتعليق التمائم، والتشاؤم، والتنجيم، وإتيان الكهان والعرافين.', more: 'ولا يجوز قول «شاءت الأقدار» أو «شاءت الظروف»؛ فالظروف والأقدار لا تشاء.', page: 56 },
    { title: 'متى يكون الحلف والتمائم والتشاؤم شركًا أكبر؟', text: 'الحلف بغير الله شرك أكبر إذا عظم المحلوف به كتعظيم الله أو أشد؛ والتمائم والتشاؤم شرك أكبر إذا اعتقد أنها تؤثر بنفسها.', more: 'كحال بعض الصوفية الذين يحلفون بالله كاذبين ويخافون أن يحلفوا بشيخهم كاذبين.', page: 56 },
    { title: 'الشرك الأصغر الخفي', text: 'الرياء: أن يعمل لثناء الناس؛ وإرادة الدنيا: أن يعمل لعرض منها كالمال أو المنصب [هود: ١٥–١٦].', more: 'الرياء لما يرى من العمل، والسمعة لما يسمع منه.', page: 60 },
    { title: 'الفرق بين الكفر والشرك', text: 'من حيث المآل لا فرق بين الكافر والمشرك شركًا أكبر [البينة: ٦]. واصطلح العلماء أن من صرف لغير الله ما يجب لله فهو المشرك، ومن أتى ما يناقض الإيمان أو جحد ما علم من الدين بالضرورة فهو الكافر.', more: 'والكفر أعم من الشرك. ومن أعظم أسباب انتشار الشرك الجهل بما يجب لله من التوحيد.', page: 62 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'أقسام الكفر الأكبر', items: ['التكذيب', 'الإباء والاستكبار', 'الشك', 'الإعراض', 'النفاق'], page: 38, origin: 'boek' },
    { kind: 'opsomming', title: 'أنواع الشرك الأكبر', items: ['شرك الدعاء', 'شرك النية والإرادة', 'شرك الطاعة', 'شرك المحبة'], page: 43, origin: 'boek' },
    { kind: 'onderscheid', title: 'ضابط سؤال غير الله', items: ['ما لا يقدر عليه إلا الله: شرك.', 'ما يقدر عليه الحي: لا بأس.', 'سؤال الميت: شرك مطلقًا.'], page: 44, origin: 'boek' },
    { kind: 'voorwaarde', title: 'شروط الرقية الجائزة', items: ['بكلام الله أو بأسمائه وصفاته', 'باللسان العربي أو بما يعرف معناه', 'أن يعتقد أنها لا تؤثر بذاتها بل بالله'], page: 55, origin: 'boek' },
    { kind: 'uitzondering', title: 'متى يصير الأصغر أكبر', items: ['إذا صحبه تعظيم غير الله كتعظيم الله', 'إذا كان في أصل الإيمان أو غلب على العبد'], page: 61, origin: 'boek' },
    { kind: 'bewijs', title: 'كفارات', items: ['الحلف باللات والعزى: لا إله إلا الله.', 'الطيرة: اللهم لا خير إلا خيرك، ولا طير إلا طيرك، ولا إله غيرك.'], page: 62, origin: 'boek' },
    { kind: 'onderscheid', title: 'الكفر والشرك', items: ['المآل واحد: الخلود في النار.', 'الكفر أعم: كل مشرك كافر ولا عكس.'], page: 62, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: h.narrator, text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, role]) => ({ slug, group, pages, role })),
  review: [
    'الكفر الأكبر: تكذيب، إباء، شك، إعراض، نفاق.',
    'الكفر الأصغر لا يخرج من الملة ولا يخلد صاحبه في النار.',
    'الشرك الأكبر: صرف عبادة لغير الله؛ أنواعه: الدعاء، النية، الطاعة، المحبة.',
    'سؤال الميت شرك مطلقًا.',
    'الذبح والنذر لغير الله والغلو والسحر بالعقد من صور الشرك الأكبر.',
    'سد النبي ﷺ ذرائع الشرك في القبور وأوقات النهي والرقى.',
    'الأصغر الظاهر: الحلف بغير الله، ما شاء الله وشئت، التمائم، التشاؤم، الكهانة.',
    'الأصغر الخفي: الرياء والسمعة وإرادة الدنيا.',
    'كل مشرك كافر ولا عكس.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'من أي أقسام الكفر الأكبر كفر إبليس؟', options: ['الإباء والاستكبار', 'التكذيب', 'الشك', 'النفاق'], answer: 0, explain: 'كان عالمًا بالحق فأبى واستكبر [البقرة: ٣٤].', page: 38 },
    { type: 'mc', q: 'من أي نوع حديث «سباب المسلم فسوق، وقتاله كفر»؟', options: ['الكفر الأصغر', 'الكفر الأكبر', 'الشرك الأكبر', 'النفاق'], answer: 0, explain: 'سمى الله المتقاتلين مؤمنين [الحجرات: ٩].', page: 40 },
    { type: 'tf', q: 'الكفر الأصغر يبيح الدم والمال.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الأكبر يبيحهما، والأصغر لا يبيحهما.', page: 41 },
    { type: 'tf', q: 'الشرك هو السجود للصنم فقط.', options: ['صواب', 'خطأ'], answer: 1, explain: 'هذا خطأ كبير؛ له مظاهر كثيرة ظاهرة وخفية.', page: 41 },
    { type: 'mc', q: 'ما حكم أن تطلب من ميت أن يقضي دينك؟', options: ['شرك', 'جائز', 'مكروه', 'جائز إن كان صالحًا'], answer: 0, explain: 'سؤال الميت شرك مطلقًا.', page: 44 },
    { type: 'mc', q: 'من اعتقد أن لغير الله حق التحليل والتحريم وقع في:', options: ['شرك الطاعة', 'شرك المحبة', 'الشرك الأصغر', 'شرك الدعاء'], answer: 0, explain: 'التشريع من خصائص الألوهية [الشورى: ٢١].', page: 45 },
    { type: 'mc', q: 'ما حكم السحر الذي يكون بالعقد والرقى والطلاسم؟', options: ['كفر أكبر', 'معصية فقط', 'مكروه', 'شرك أصغر'], answer: 0, explain: 'لأن الساحر يتوصل به إلى إشراك الشياطين.', page: 47 },
    { type: 'mc', q: 'لماذا نهى النبي ﷺ عن الصلاة عند طلوع الشمس؟', options: ['سدًّا لذريعة مشابهة من يسجد لها', 'لأن الوقت قصير', 'لأن الصلاة فيه لا تصح لغير المسافر', 'بلا علة معلومة'], answer: 0, explain: 'قال ابن القيم: هو وقت سجود المشركين للشمس.', page: 54 },
    { type: 'tf', q: 'تجوز الرقية بكلام لا يعرف معناه.', options: ['صواب', 'خطأ'], answer: 1, explain: 'من شروطها أن تكون باللسان العربي أو بما يعرف معناه.', page: 55 },
    { type: 'mc', q: 'ما حكم الحلف بالنبي أو بحياة الأب؟', options: ['شرك أصغر', 'جائز', 'مكروه فقط', 'شرك أكبر دائمًا'], answer: 0, explain: 'ويصير أكبر إذا عظم المحلوف به كتعظيم الله.', page: 56 },
    { type: 'mc', q: 'ما البديل الصحيح لقول «ما شاء الله وشاء فلان»؟', options: ['ما شاء الله ثم شاء فلان', 'شاءت الأقدار', 'ما شاء الله وشئت', 'شاءت الظروف'], answer: 0, explain: 'حديث حذيفة.', page: 57 },
    { type: 'mc', q: 'من سأل عرافًا وصدقه، فما حكمه؟', options: ['كفر أكبر', 'لا تقبل صلاته أربعين يومًا فقط', 'مأجور', 'لا شيء عليه'], answer: 0, explain: '«فقد كفر بما أنزل على محمد ﷺ».', page: 59 },
    { type: 'mc', q: 'ما الفرق بين الرياء والسمعة؟', options: ['الرياء فيما يرى، والسمعة فيما يسمع', 'لا فرق', 'الرياء أكبر والسمعة أصغر', 'السمعة لطلب المال'], answer: 0, explain: 'كالصلاة والصدقة للرياء، وقراءة القرآن والوعظ للسمعة.', page: 60 },
    { type: 'tf', q: 'كل كافر مشرك، وكل مشرك كافر.', options: ['صواب', 'خطأ'], answer: 1, explain: 'الكفر أعم: كل مشرك كافر ولا عكس.', page: 62 }
  ]),
  note: 'نشاط الكتاب في صفحتي ٥٠ و٦٣. وما ذكره الكتاب من صور الشرك عند بعض الطوائف نقلناه كما هو في الكتاب.'
}

const nl = {
  scope: 'unit',
  unit: 4,
  title: 'Wat het tawḥīd tenietdoet of vermindert',
  subtitle: 'Van het tweede deel van les 5 tot les 17',
  summary: 'Ongeloof (kufr) en zijn soorten, en het verschil tussen groot en klein ongeloof. Shirk en zijn soorten: de grote shirk met zijn soorten en vormen, het afsluiten van de wegen erheen, en de kleine shirk, zichtbaar en verborgen. Wanneer kleine shirk groot wordt, en het verschil tussen kufr en shirk.',
  source: { ...source, label: 'Kitāb al-ʿAqīda (3), Zad-reeks' },
  visual: {
    type: 'mindmap',
    title: 'Eenheid 4 in één kaart',
    intro: 'De onderwerpen zoals op p. 36 van het boek.',
    root: { label: 'Wat het tawḥīd tenietdoet of vermindert', sub: 'Eenheid 4' },
    nodes: [
      { label: 'Ongeloof', sub: 'les 5–6', page: 37, children: ['groot: vijf soorten', 'klein', 'de verschillen'] },
      { label: 'Grote shirk', sub: 'les 7–8', page: 43, children: ['smeekbede', 'intentie en wil', 'gehoorzaamheid', 'liefde'] },
      { label: 'Vormen van grote shirk', sub: 'les 9–10', page: 46, children: ['slachten en geloften voor een ander', 'overdrijving', 'tovenarij', 'doden om hulp roepen'] },
      { label: 'Wegen afsluiten', sub: 'les 11–13', page: 51, children: ['graven', 'slachten bij graven', 'verboden gebedstijden', 'ruqya'] },
      { label: 'Zichtbare kleine shirk', sub: 'les 14–15', page: 56, children: ['zweren bij een ander', '"wat Allah wil en jij"', 'amuletten en bijgeloof', 'waarzeggers'] },
      { label: 'Verborgen kleine shirk', sub: 'les 16–17', page: 60, children: ['gezien en gehoord willen worden', 'wereldse doelen', 'wanneer het groot wordt'] }
    ]
  },
  points: [
    { text: 'Kufr betekent taalkundig bedekken; als vakterm: niet geloven in Allah en Zijn boodschappers, met loochening, twijfel of afwending.', page: 37 },
    { text: 'Groot ongeloof heeft vijf soorten: loochening, weigering uit hoogmoed, twijfel, afwending en hypocrisie. Klein ongeloof zijn zonden die de sharīʿa kufr noemt, maar die iemand niet buiten de islam brengen.', page: 38 },
    { text: 'Shirk is Allah een deelgenoot geven in Zijn heerschappij, Zijn goddelijkheid of Zijn namen en eigenschappen. Veel mensen denken dat het alleen buigen voor een afgod is; dat is een grote vergissing.', page: 41 },
    { text: 'Grote shirk is een vorm van aanbidding aan een ander dan Allah richten. Soorten: in de smeekbede, in de intentie, in gehoorzaamheid en in liefde.', page: 43 },
    { text: 'Wie een ander iets vraagt wat alleen Allah kan, pleegt shirk; een dode iets vragen is altijd shirk.', page: 44 },
    { text: 'Graven verheerlijken, erop bouwen en er zegen zoeken is een van de grootste wegen naar shirk; de Profeet ﷺ sloot die wegen af.', page: 51 },
    { text: 'Kleine shirk is wat naar grote shirk leidt en door de sharīʿa shirk wordt genoemd; het vernietigt het tawḥīd niet helemaal, maar vermindert het. Het is zichtbaar of verborgen.', page: 55 },
    { text: 'Kufr is ruimer dan shirk: elke mushrik is een kāfir, maar niet andersom.', page: 62 }
  ],
  terms: [
    { term: 'الكفر', translit: 'al-kufr', meaning: 'Ongeloof. Taal: bedekken en verbergen.', explanation: 'Vakterm: niet geloven in Allah en Zijn boodschappers, met of zonder loochening: ook twijfel, of afwending uit afgunst, hoogmoed of begeerte.', notes: [], page: 37 },
    { term: 'كفر التكذيب', translit: 'kufr at-takdhīb', meaning: 'Ongeloof van loochening: geloven dat de boodschappers liegen, of iets ontkennen wat onmiskenbaar tot de godsdienst behoort.', explanation: 'Zoals wie het vasten ontkent omdat het de productie zou remmen.', notes: ['al-ʿAnkabūt 29:68'], page: 38 },
    { term: 'كفر الإباء والاستكبار', translit: 'kufr al-ibāʾ wa-l-istikbār', meaning: 'Ongeloof van weigering en hoogmoed: weten dat de boodschapper de waarheid spreekt en zich toch uit hoogmoed niet onderwerpen.', explanation: 'Zoals Iblīs.', notes: ['al-Baqara 2:34'], page: 38 },
    { term: 'كفر الشك', translit: 'kufr ash-shakk', meaning: 'Ongeloof van twijfel: aarzelen en niet zeker zijn van de waarheid van de boodschappers.', explanation: '', notes: ['al-Kahf 18:35–37'], page: 39 },
    { term: 'كفر الإعراض', translit: 'kufr al-iʿrāḍ', meaning: 'Ongeloof van afwending: zich met gehoor, hart en kennis afkeren van wat de boodschapper bracht.', explanation: '', notes: ['al-Aḥqāf 46:3'], page: 39 },
    { term: 'كفر النفاق', translit: 'kufr an-nifāq', meaning: 'Ongeloof van hypocrisie: uiterlijk geloof tonen en innerlijk ongelovig zijn.', explanation: '', notes: ['al-Munāfiqūn 63:3'], page: 39 },
    { term: 'الكفر الأصغر', translit: 'al-kufr al-aṣghar', meaning: 'Klein ongeloof: zonden die de sharīʿa kufr noemt, zonder dat de dader buiten de islam valt.', explanation: 'Zoals ondankbaarheid voor gunsten, een moslim bevechten, afstamming aanvallen en luid weeklagen.', notes: ['an-Naḥl 16:112'], page: 40 },
    { term: 'الشرك', translit: 'ash-shirk', meaning: 'Shirk. Taal: iets wat tussen meer dan één gedeeld wordt.', explanation: 'Vakterm: Allah een deelgenoot geven in Zijn heerschappij, goddelijkheid of namen en eigenschappen.', notes: [], page: 41 },
    { term: 'الشرك الأكبر', translit: 'ash-shirk al-akbar', meaning: 'Grote shirk: een vorm van aanbidding aan een ander dan Allah richten.', explanation: 'Brengt buiten de islam; wie zonder berouw zo sterft, blijft eeuwig in het Vuur.', notes: ['al-Kahf 18:110'], page: 43 },
    { term: 'دعاء العبادة', translit: 'duʿāʾ al-ʿibāda', meaning: 'Smeekbede als aanbidding: Allah naderen met allerlei aanbidding; de aanbidder hoopt met zijn daad op Allahs barmhartigheid en vreest Zijn straf.', explanation: '', notes: [], page: 43 },
    { term: 'دعاء المسألة', translit: 'duʿāʾ al-masʾala', meaning: 'Smeekbede als verzoek: vragen om wat baat en om wegname van wat schaadt.', explanation: '', notes: ['Yūnus 10:18'], page: 43 },
    { term: 'شرك الطاعة', translit: 'shirk aṭ-ṭāʿa', meaning: 'Shirk van gehoorzaamheid: geloven dat een ander dan Allah het recht heeft wetten te maken en iets toe te staan of te verbieden.', explanation: 'Wetgeving is een kenmerk van goddelijkheid.', notes: ['ash-Shūrā 42:21', 'at-Tawba 9:31'], page: 45 },
    { term: 'شرك المحبة', translit: 'shirk al-maḥabba', meaning: 'Shirk van liefde: de liefde van aanbidding, met eerbied, verheerlijking en nederigheid, aan een ander dan Allah geven.', explanation: '', notes: ['al-Baqara 2:165'], page: 45 },
    { term: 'الغلو', translit: 'al-ghuluww', meaning: 'Overdrijving: te ver gaan met vromen, heiligen en profeten en hun een deel van de aanbidding geven.', explanation: '', notes: ['an-Nisāʾ 4:171'], page: 47 },
    { term: 'سد الذرائع', translit: 'sadd adh-dharāʾiʿ', meaning: 'Wegen afsluiten: de middelen verbieden die naar shirk leiden.', explanation: 'Zoals het verbod te bouwen op graven, richting graven te bidden en te bidden bij zonsopgang en -ondergang.', notes: [], page: 51 },
    { term: 'العقر', translit: 'al-ʿaqr', meaning: 'Dieren slachten bij graven.', explanation: 'In de jāhiliyya slachtten ze dieren bij het graf van een overleden leider.', notes: [], page: 53 },
    { term: 'الرقية', translit: 'ar-ruqya', meaning: 'Bezwering ter genezing. Toegestaan onder drie voorwaarden: met Allahs woord of Zijn namen en eigenschappen, in het Arabisch of met bekende betekenis, en met het geloof dat ze niet uit zichzelf werkt.', explanation: '', notes: [], page: 55 },
    { term: 'الشرك الأصغر', translit: 'ash-shirk al-aṣghar', meaning: 'Kleine shirk: alles wat naar grote shirk leidt en door de sharīʿa shirk wordt genoemd.', explanation: 'Vernietigt het tawḥīd niet helemaal, maar vermindert en verzwakt het.', notes: [], page: 55 },
    { term: 'التميمة', translit: 'at-tamīma', meaning: 'Amulet: kralen, leer of draad die men ophangt tegen onheil of het boze oog.', explanation: 'Kleine shirk als men het als middel ziet; grote shirk als men gelooft dat het uit zichzelf beschermt.', notes: [], page: 57 },
    { term: 'التولة', translit: 'at-tiwala', meaning: 'Iets wat sommige vrouwen maken om de liefde van hun man te winnen.', explanation: '', notes: [], page: 58 },
    { term: 'التشاؤم (الطيرة)', translit: 'at-tashāʾum (aṭ-ṭiyara)', meaning: 'Bijgeloof over onheil: denken dat iets slechts gebeurt door iets wat men ziet, weet of hoort.', explanation: 'Zoals bij uilen en kraaien, het getal 13 of de maand Ṣafar.', notes: [], page: 58 },
    { term: 'الكاهن والعراف', translit: 'al-kāhin wa-l-ʿarrāf', meaning: 'De ziener beweert de toekomst te kennen, de waarzegger het verleden.', explanation: '', notes: [], page: 59 },
    { term: 'التنجيم', translit: 'at-tanjīm', meaning: 'Astrologie: uit de stand van de sterren afleiden wat er op aarde gebeurt.', explanation: 'Een valse claim op kennis van het verborgene.', notes: [], page: 59 },
    { term: 'الرياء', translit: 'ar-riyāʾ', meaning: 'Gezien willen worden: een daad van aanbidding doen om door mensen geprezen te worden.', explanation: 'Riyāʾ gaat over wat gezien wordt, sumʿa over wat gehoord wordt.', notes: [], page: 60 },
    { term: 'السمعة', translit: 'as-sumʿa', meaning: 'Gehoord willen worden: zoals Koran reciteren, preken of gedenken voor de mensen.', explanation: '', notes: [], page: 60 }
  ],
  diagrams: [
    {
      type: 'tree',
      title: 'Soorten ongeloof',
      intro: 'Twee soorten, zoals in het boek.',
      root: { label: 'Kufr', page: 37 },
      nodes: [
        { label: 'Groot: buiten de islam', children: ['loochening', 'weigering uit hoogmoed', 'twijfel', 'afwending', 'hypocrisie'], page: 38 },
        { label: 'Klein: niet buiten de islam', children: ['ondankbaarheid voor gunsten', 'een moslim bevechten', 'afstamming aanvallen en weeklagen', 'zich aan een ander dan zijn vader toeschrijven'], page: 40 }
      ]
    },
    {
      type: 'compare',
      title: 'Groot en klein ongeloof',
      intro: 'Vier verschillen.',
      columns: ['Groot', 'Klein'],
      rows: [
        { label: 'Islam en daden', cells: ['brengt buiten de islam en maakt daden waardeloos', 'niet, maar vermindert de daden en stelt bloot aan de bedreiging'] },
        { label: 'Hiernamaals', cells: ['eeuwig in het Vuur', 'aan Allahs wil overgelaten; als gestraft, niet eeuwig'] },
        { label: 'Bloed en bezit', cells: ['niet meer beschermd', 'blijven beschermd'] },
        { label: 'Loyaliteit', cells: ['volledige vijandschap, ook bij naaste familie', 'liefde naar de mate van geloof, afkeer naar de mate van zonde'] }
      ],
      page: 40
    },
    {
      type: 'tree',
      title: 'Soorten shirk',
      intro: 'Het schema van het boek op p. 42.',
      root: { label: 'Shirk', page: 42 },
      nodes: [
        { label: 'Groot', children: ['in de smeekbede: aanbidding en verzoek', 'in intentie en wil', 'in gehoorzaamheid', 'in liefde'], page: 43 },
        { label: 'Klein, zichtbaar', children: ['woorden: zweren bij een ander, "wat Allah wil en jij"', 'daden: amuletten, bijgeloof, astrologie, waarzeggers'], page: 56 },
        { label: 'Klein, verborgen', children: ['gezien en gehoord willen worden', 'met aanbidding de wereld zoeken'], page: 60 }
      ]
    },
    {
      type: 'cards',
      title: 'Vormen van grote shirk',
      intro: 'Zoals het boek ze noemt in les 9 en 10.',
      nodes: [
        { label: 'Slachten voor een ander dan Allah', sub: 'om die te naderen en te eren; het vlees is verboden (al-Māʾida 5:3)', page: 46 },
        { label: 'Geloften voor een ander dan Allah', sub: 'erger dan zweren bij een ander, als knielen voor een ander', page: 46 },
        { label: 'Overdrijving met vromen', sub: 'en hun een deel van de aanbidding geven (an-Nisāʾ 4:171)', page: 47 },
        { label: 'Tovenarij met knopen en bezweringen', sub: 'groot ongeloof; met middelen en drankjes: zonde', page: 47 },
        { label: 'ʿAlī en de imams van de Profeetfamilie tot heren maken', sub: 'en hen aanroepen en voor hen slachten', page: 48 },
        { label: 'Te ver gaan met shaykhs', sub: 'hun kennis van het verborgene toeschrijven en hen aanroepen', page: 48 },
        { label: 'Begravenen in mausolea om hulp roepen', sub: 'az-Zumar 39:3', page: 49 }
      ]
    },
    {
      type: 'cards',
      title: 'De wegen naar shirk afsluiten',
      intro: 'De Profeet ﷺ was uiterst streng over graven.',
      nodes: [
        { label: 'Graven niet tot gebedsplaatsen maken', sub: 'wie dat doet, is vervloekt', page: 51 },
        { label: 'Graven gelijk maken', sub: 'niet verhogen, bepleisteren of erop bouwen', page: 53 },
        { label: 'Niet richting graven bidden', sub: 'en er niet op zitten', page: 53 },
        { label: 'Niet speciaal naar graven reizen', sub: 'alleen naar de drie moskeeën', page: 53 },
        { label: 'Geen dieren slachten bij graven', page: 53 },
        { label: 'Niet bidden bij zonsopgang en -ondergang', sub: 'om niet te lijken op wie de zon aanbidt', page: 54 },
        { label: 'Ruqya alleen volgens de sharīʿa', sub: 'niet met shirk of magische tekens', page: 54 }
      ]
    },
    {
      type: 'compare',
      title: 'Wie naar een ziener of waarzegger gaat',
      intro: 'Drie gevallen.',
      columns: ['Geval', 'Oordeel'],
      rows: [
        { label: 'Eerste', cells: ['vraagt, maar gelooft hem niet', 'veertig dagen wordt zijn gebed niet aanvaard'] },
        { label: 'Tweede', cells: ['vraagt en gelooft hem', 'groot ongeloof'] },
        { label: 'Derde', cells: ['vraagt om hem te ontmaskeren of terecht te wijzen', 'voorgeschreven en beloond, soms verplicht'] }
      ],
      page: 59
    },
    {
      type: 'compare',
      title: 'Riyāʾ, sumʿa en wereldse doelen',
      intro: 'De verborgen kleine shirk.',
      columns: ['Riyāʾ', 'Sumʿa', 'Wereldse doelen'],
      rows: [
        { label: 'Men handelt voor', cells: ['lof om wat men ziet', 'lof om wat men hoort', 'iets van de wereld, zoals geld of een positie'] },
        { label: 'Voorbeeld', cells: ['gebed, liefdadigheid, hadj', 'Koranrecitatie, preken, gedenken', 'hadj, voorganger zijn of kennis zoeken voor geld'] }
      ],
      page: 61
    },
    {
      type: 'steps',
      title: 'Wanneer kleine shirk groot wordt',
      intro: 'In twee gevallen.',
      nodes: [
        { label: 'Als men een ander verheerlijkt zoals Allah', sub: 'zoals zweren bij een ander uit verheerlijking als die van Allah', page: 61 },
        { label: 'Als het de grondslag van het geloof raakt of de overhand krijgt', sub: 'zoals huichelen in het geloof zelf, of als riyāʾ of wereldse doelen de daden beheersen', page: 61 }
      ]
    }
  ],
  sections: [
    { title: 'Groot ongeloof', text: 'Brengt buiten de islam en kent vijf soorten: loochening, weigering uit hoogmoed terwijl men het gelooft, twijfel, volledige afwending van de godsdienst, en hypocrisie in het geloof.', more: 'Al-Layth: de ongelovige heet kāfir omdat het ongeloof zijn hart bedekt.', page: 37 },
    { title: 'Klein ongeloof', text: 'Zonden die de sharīʿa kufr noemt maar die niet buiten de islam brengen: ondankbaarheid voor gunsten, een moslim bevechten, afstamming aanvallen, luid weeklagen, en zich willens aan een ander dan zijn vader toeschrijven.', more: 'Allah noemt de strijdende partijen gelovigen (al-Ḥujurāt 49:9); dus is een moslim bevechten klein ongeloof.', page: 40 },
    { title: 'Het gevaar van shirk', text: 'Shirk heeft vele verschijningsvormen, zichtbaar en verborgen. Ibrāhīm bad zijn Heer om hem en zijn zonen van afgodendienst te behoeden (Ibrāhīm 14:35); wij hebben dat nog meer nodig.', more: 'Luqmān 31:13; al-Māʾida 5:72; an-Nisāʾ 4:48; al-Ḥajj 22:31.', page: 41 },
    { title: 'Shirk in de smeekbede', text: 'Een ander dan Allah aanroepen; de smeekbede is de kern van aanbidding. Wie een profeet, engel, heilige of graf aanroept, pleegt shirk.', more: 'Ibn al-Qayyim: behoeften vragen aan de doden, hen om hulp roepen en zich tot hen wenden is de oorsprong van de shirk in de wereld.', page: 43 },
    { title: 'Wat men anderen mag vragen', text: 'Wie een ander vraagt wat alleen Allah kan, pleegt shirk (al-Aḥqāf 46:5); mensen vragen wat zij kunnen, zoals een lening of hulp, mag. Een dode iets vragen is altijd shirk.', more: 'Hetzelfde geldt voor hulp zoeken (istiʿāna).', page: 44 },
    { title: 'Shirk in intentie, gehoorzaamheid en liefde', text: 'Met al zijn daden uitsluitend de wereld of aanzien zoeken, zoals de echte hypocrieten; een ander het recht geven om wetten te maken, toe te staan en te verbieden; of de liefde van aanbidding aan een ander geven.', more: 'an-Nisāʾ 4:142; ash-Shūrā 42:21; al-Baqara 2:165.', page: 45 },
    { title: 'Slachten en geloften voor een ander', text: 'Slachten voor een ander dan Allah om die te naderen en te eren is shirk die buiten de islam brengt, en het vlees is verboden. Een gelofte aan een ander dan Allah is shirk, als knielen voor een ander.', more: 'Wie dat deed, wordt aangeraden berouw te tonen; dan wordt het verleden vergeven (al-Anfāl 8:38).', page: 46 },
    { title: 'Is tovenarij ongeloof?', text: 'Twee soorten: knopen en bezweringen waarmee de tovenaar de duivels inschakelt: groot ongeloof (al-Baqara 2:102). Middelen en drankjes die lichaam en verstand beïnvloeden: de dader is geen ongelovige, maar wel zondig.', more: '', page: 47 },
    { title: 'Graven', text: 'De Profeet ﷺ vervloekte de joden en christenen omdat zij de graven van hun profeten tot gebedsplaatsen maakten, en noemde wie op graven van vromen bouwen de slechtste schepselen bij Allah.', more: 'Ibn Taymiyya: de imams zijn het erover eens dat moskeeën op graven niet zijn voorgeschreven, en dat elke moskee op een graf moet worden afgebroken.', page: 51 },
    { title: 'Ruqya', text: 'Bezweringen zijn geen probleem zolang ze geen shirk zijn; niet toegestaan is ruqya met shirk, met hulp van kwakzalvers, tovenaars of zieners, of met magische tekens.', more: 'De geleerden zijn het eens dat ruqya mag onder drie voorwaarden: met Allahs woord of Zijn namen en eigenschappen, in het Arabisch of met bekende betekenis, en met het geloof dat ze niet uit zichzelf werkt.', page: 54 },
    { title: 'Zichtbare kleine shirk', text: 'In woorden: zweren bij een ander dan Allah, en "wat Allah wil en jij". In daden: amuletten ophangen, bijgeloof, astrologie, en naar zieners en waarzeggers gaan.', more: 'Ook "het lot wilde" of "de omstandigheden wilden" mag niet: omstandigheden willen niets; de wil ligt bij Allah.', page: 56 },
    { title: 'Wanneer zweren, amuletten en bijgeloof grote shirk zijn', text: 'Zweren bij een ander is grote shirk als men die even hoog of hoger acht dan Allah; amuletten en bijgeloof zijn grote shirk als men gelooft dat ze uit zichzelf werken.', more: 'Zoals sommige soefi’s die liegend bij Allah zweren maar bang zijn liegend bij hun shaykh te zweren.', page: 56 },
    { title: 'Verborgen kleine shirk', text: 'Riyāʾ: handelen om door mensen geprezen te worden. Wereldse doelen: handelen voor iets van de wereld, zoals geld of een positie (Hūd 11:15–16).', more: 'Riyāʾ gaat over wat gezien wordt, sumʿa over wat gehoord wordt.', page: 60 },
    { title: 'Kufr en shirk', text: 'In de afloop is er geen verschil tussen de kāfir en wie grote shirk pleegt (al-Bayyina 98:6). De geleerden noemen wie aan een ander geeft wat Allah toekomt een mushrik, en wie iets doet wat het geloof tenietdoet of iets onmiskenbaars uit de godsdienst ontkent een kāfir.', more: 'Kufr is ruimer dan shirk. Een van de grootste oorzaken van de verspreiding van shirk is onwetendheid over het tawḥīd.', page: 62 }
  ],
  keycards: [
    { kind: 'opsomming', title: 'Soorten groot ongeloof', items: ['loochening', 'weigering uit hoogmoed', 'twijfel', 'afwending', 'hypocrisie'], page: 38, origin: 'boek' },
    { kind: 'opsomming', title: 'Soorten grote shirk', items: ['in de smeekbede', 'in intentie en wil', 'in gehoorzaamheid', 'in liefde'], page: 43, origin: 'boek' },
    { kind: 'onderscheid', title: 'Wat men anderen mag vragen', items: ['Wat alleen Allah kan: shirk.', 'Wat een levende kan: geen probleem.', 'Een dode iets vragen: altijd shirk.'], page: 44, origin: 'boek' },
    { kind: 'voorwaarde', title: 'Voorwaarden voor toegestane ruqya', items: ['met Allahs woord of Zijn namen en eigenschappen', 'in het Arabisch of met bekende betekenis', 'geloven dat ze niet uit zichzelf werkt, maar door Allah'], page: 55, origin: 'boek' },
    { kind: 'uitzondering', title: 'Wanneer kleine shirk groot wordt', items: ['als men een ander verheerlijkt zoals Allah', 'als het de grondslag van het geloof raakt of de overhand krijgt'], page: 61, origin: 'boek' },
    { kind: 'bewijs', title: 'Boetedoening', items: ['Na zweren bij al-Lāt en al-ʿUzzā: lā ilāha illā Llāh.', 'Na bijgeloof: "O Allah, er is geen goed dan Uw goed, geen voorteken dan Uw voorteken, en geen god buiten U."'], page: 62, origin: 'boek' },
    { kind: 'onderscheid', title: 'Kufr en shirk', items: ['Dezelfde afloop: eeuwig in het Vuur.', 'Kufr is ruimer: elke mushrik is een kāfir, niet andersom.'], page: 62, origin: 'boek' }
  ],
  hadith: HADITH.map((h) => ({ narrator: NARRATOR_NL[h.narrator] || '', text: h.text, meaning: h.nl, takhrij: TAKHRIJ_NL[h.takhrij] || h.takhrij, note: h.nlNote || '', pages: h.pages })),
  persons: PERSONS.map(([slug, group, pages, , role]) => ({ slug, group, pages, role })),
  review: [
    'Groot ongeloof: loochening, weigering, twijfel, afwending, hypocrisie.',
    'Klein ongeloof brengt niet buiten de islam en niet eeuwig in het Vuur.',
    'Grote shirk: aanbidding aan een ander richten; in smeekbede, intentie, gehoorzaamheid en liefde.',
    'Een dode iets vragen is altijd shirk.',
    'Slachten en geloften voor een ander, overdrijving en tovenarij met knopen zijn grote shirk.',
    'De Profeet ﷺ sloot de wegen naar shirk af: graven, verboden tijden, ruqya.',
    'Zichtbare kleine shirk: zweren bij een ander, "wat Allah wil en jij", amuletten, bijgeloof, waarzeggerij.',
    'Verborgen kleine shirk: riyāʾ, sumʿa en wereldse doelen.',
    'Elke mushrik is een kāfir, niet andersom.'
  ],
  quiz: spreadAnswers([
    { type: 'mc', q: 'Tot welke soort groot ongeloof hoort het ongeloof van Iblīs?', options: ['weigering uit hoogmoed', 'loochening', 'twijfel', 'hypocrisie'], answer: 0, explain: 'Hij kende de waarheid, maar weigerde uit hoogmoed (al-Baqara 2:34).', page: 38 },
    { type: 'mc', q: 'Wat voor ongeloof bedoelt "tegen een moslim vechten is ongeloof"?', options: ['klein ongeloof', 'groot ongeloof', 'grote shirk', 'hypocrisie'], answer: 0, explain: 'Allah noemt de strijdende partijen gelovigen (al-Ḥujurāt 49:9).', page: 40 },
    { type: 'tf', q: 'Bij klein ongeloof zijn bloed en bezit niet meer beschermd.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Dat geldt bij groot ongeloof, niet bij klein.', page: 41 },
    { type: 'tf', q: 'Shirk is alleen buigen voor een afgod.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Een grote vergissing: shirk heeft vele vormen, zichtbaar en verborgen.', page: 41 },
    { type: 'mc', q: 'Wat is het oordeel als je een dode vraagt je schuld af te lossen?', options: ['shirk', 'toegestaan', 'afkeurenswaardig', 'toegestaan als hij vroom was'], answer: 0, explain: 'Een dode iets vragen is altijd shirk.', page: 44 },
    { type: 'mc', q: 'Wie gelooft dat een ander dan Allah mag toestaan en verbieden, valt in:', options: ['shirk van gehoorzaamheid', 'shirk van liefde', 'kleine shirk', 'shirk in de smeekbede'], answer: 0, explain: 'Wetgeving is een kenmerk van goddelijkheid (ash-Shūrā 42:21).', page: 45 },
    { type: 'mc', q: 'Wat is het oordeel over tovenarij met knopen, bezweringen en magische tekens?', options: ['groot ongeloof', 'alleen een zonde', 'afkeurenswaardig', 'kleine shirk'], answer: 0, explain: 'De tovenaar schakelt er de duivels mee in.', page: 47 },
    { type: 'mc', q: 'Waarom verbood de Profeet ﷺ te bidden bij zonsopgang?', options: ['om niet te lijken op wie zich dan voor de zon neerbuigt', 'omdat de tijd te kort is', 'omdat het gebed dan alleen voor reizigers geldt', 'zonder bekende reden'], answer: 0, explain: 'Ibn al-Qayyim: dat is de tijd waarop de polytheïsten zich voor de zon neerbuigen.', page: 54 },
    { type: 'tf', q: 'Ruqya mag met woorden waarvan men de betekenis niet kent.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Een voorwaarde is: in het Arabisch of met bekende betekenis.', page: 55 },
    { type: 'mc', q: 'Wat is zweren bij de Profeet of bij het leven van je vader?', options: ['kleine shirk', 'toegestaan', 'alleen afkeurenswaardig', 'altijd grote shirk'], answer: 0, explain: 'Het wordt grote shirk als men het verheerlijkt zoals Allah.', page: 56 },
    { type: 'mc', q: 'Wat zeg je in plaats van "wat Allah wil en wat die-en-die wil"?', options: ['wat Allah wil en daarna wat die-en-die wil', 'het lot wilde het', 'wat Allah wil en jij', 'de omstandigheden wilden het'], answer: 0, explain: 'De hadith van Ḥudhayfa.', page: 57 },
    { type: 'mc', q: 'Wie een waarzegger iets vraagt en hem gelooft, begaat:', options: ['groot ongeloof', 'alleen veertig dagen geen aanvaard gebed', 'een beloonde daad', 'niets'], answer: 0, explain: '"... heeft ongeloof begaan in wat aan Muḥammad ﷺ is neergezonden."', page: 59 },
    { type: 'mc', q: 'Wat is het verschil tussen riyāʾ en sumʿa?', options: ['riyāʾ gaat over wat gezien wordt, sumʿa over wat gehoord wordt', 'er is geen verschil', 'riyāʾ is groot, sumʿa klein', 'sumʿa is voor geld'], answer: 0, explain: 'Gebed en liefdadigheid tegenover recitatie en preken.', page: 60 },
    { type: 'tf', q: 'Elke kāfir is een mushrik en elke mushrik een kāfir.', options: ['Juist', 'Onjuist'], answer: 1, explain: 'Kufr is ruimer: elke mushrik is een kāfir, niet andersom.', page: 62 }
  ]),
  note: 'Oefeningen van het boek op p. 50 en p. 63. Wat het boek noemt over vormen van shirk bij bepaalde groepen, staat hier zoals in het boek. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.'
}

export default { book: 'zad-n3-aqeedah', chapter: '6', unit: 4, ar, nl }
