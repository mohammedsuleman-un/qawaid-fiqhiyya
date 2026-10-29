// Hoofdstukkaart bij التفسير (٤), eenheid 16: سورة الكافرون (les 19, boek p. 72–75).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-tafsir/leesnotities.md);
// hadith en takhrij zoals in het boek. De aanleiding van de neerdaling (p. 72) staat in het boek
// zonder bron en is daarom alleen in algemene woorden genoemd; de overleveraar van de eerste
// hadith (in het boek Muʿāwiya) is weggelaten omdat de notities die naam als twijfelachtig markeren.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-tafsir',
  chapter: '19',
  unit: 16,
  source: {
    label: ['كتاب التفسير (٤)، سلسلة زاد العلمية', 'At-Tafsīr (4), Zad-reeks'],
    pages: '72–75',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_AlTafsir/page/n{p}/mode/1up'
  },
  title: ['سورة الكافرون', 'Soera al-Kāfirūn'],
  subtitle: ['سورة مكية، ست آيات', 'Mekkaans, zes verzen'],
  summary: [
    'أمر الله نبيه ﷺ أن يعلن البراءة التامة من دين المشركين لما دعوه أن يعبد آلهتهم سنة ويعبدوا إلهه سنة، فلا يعبد ما يعبدون ولا هم عابدون ما يعبد، لكم دينكم ولي دين.',
    'Toen de polytheïsten de Profeet ﷺ voorstelden een jaar hun goden te aanbidden en zij dan een jaar zijn God, beval Allah hem zich volledig vrij te pleiten van hun religie: hij aanbidt niet wat zij aanbidden en zij aanbidden niet wat hij aanbidt; jullie hebben jullie religie en ik de mijne.'
  ],
  map: {
    title: ['سورة الكافرون في خريطة واحدة', 'Soera al-Kāfirūn in één kaart'],
    intro: ['مقاطع السورة كما شرحها الكتاب.', 'De delen van de soera zoals het boek ze uitlegt.'],
    root: [['سورة الكافرون', 'Soera al-Kāfirūn'], ['الوحدة السادسة عشرة', 'Eenheid 16']],
    nodes: [
      { label: ['النداء', 'De aanspraak'], sub: ['الآية ١', 'vers 1'], page: 73, children: [['يعم كل كافر', 'geldt voor elke ongelovige']] },
      { label: ['البراءة', 'De vrijpleiting'], sub: ['الآيات ٢–٥', 'vers 2–5'], page: 73, children: [['لا أعبد ما تعبدون: الآن', 'ik aanbid niet wat jullie aanbidden: nu'], ['ولا أنا عابد ما عبدتم: فيما مضى', 'en nooit eerder'], ['التكرار لقطع الشك', 'herhaald om twijfel weg te nemen']] },
      { label: ['المفاصلة', 'De scheiding'], sub: ['الآية ٦', 'vers 6'], page: 74, children: [['لكم دينكم: الشرك', 'jullie religie: shirk'], ['ولي دين: الإسلام', 'mijn religie: de islam']] }
    ]
  },
  points: [
    [72, 'دعا نفر من قريش النبي ﷺ أن يعبد آلهتهم سنة ويعبدوا إلهه سنة، فقال: معاذ الله أن نشرك بالله شيئا، ونزلت السورة بالبراءة من آلهتهم.', 'Een groep uit Quraysh stelde voor dat de Profeet ﷺ een jaar hun goden zou aanbidden en zij een jaar zijn God; hij zei: Allah beware ons iets met Hem te verbinden, en de soera kwam neer met de vrijpleiting van hun goden.'],
    [72, 'ذكر الكتاب أنها تعدل ربع القرآن عند الترمذي، وصححه الألباني.', 'Het boek noemt dat zij volgens at-Tirmidhī gelijkstaat aan een kwart van de Koran; al-Albānī verklaarde dat ṣaḥīḥ.'],
    [73, 'كان النبي ﷺ يقرأ الكافرون والإخلاص في ركعتي الطواف وفي ركعتي الفجر، كما في صحيح مسلم.', 'De Profeet ﷺ reciteerde al-Kāfirūn en al-Ikhlāṣ in de twee rakʿa\'s van de ṭawāf en de twee rakʿa\'s van fajr, zoals in Ṣaḥīḥ Muslim.'],
    [73, 'على المسلم في كل زمان أن يتبرأ من كل ما يعبد من دون الله من ولي أو قبر أو غيره.', 'De moslim moet zich in elke tijd vrijpleiten van alles wat naast Allah aanbeden wordt, of het nu een walī, een graf of iets anders is.'],
    [74, 'كرر ﴿ولا أنتم عابدون ما أعبد﴾ حتى لا يبقى ظن ولا شبهة.', '"En jullie aanbidden niet wat ik aanbid" wordt herhaald zodat er geen vermoeden of twijfel overblijft.']
  ],
  terms: [
    ['الكافرون', 'al-kāfirūn', 73, 'كل كافر على وجه الأرض، وأولهم كفار قريش.', 'Elke ongelovige op aarde, in de eerste plaats die van Quraysh.'],
    ['البراءة', 'al-barāʾa', 73, 'التبرؤ التام من الشرك وأهله.', 'Zich volledig vrijpleiten van shirk en zijn aanhangers.'],
    ['لكم دينكم', 'lakum dīnukum', 74, 'الشرك وما يترتب عليه من الجزاء.', 'Het shirk en de vergelding die erop volgt.'],
    ['ولي دين', 'wa-liya dīn', 74, 'الإسلام وما يترتب عليه من الجزاء.', 'De islam en de vergelding die erop volgt.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['التوحيد والشرك لا يلتقيان', 'Tawḥīd en shirk ontmoeten elkaar niet'],
      intro: ['كما في فوائد الصفحة ٧٤.', 'Zoals in de lessen op p. 74.'],
      columns: [['وجهته', 'Richting'], ['مصدر التلقي', 'Bron']],
      rows: [
        { label: ['التوحيد', 'Tawḥīd'], cells: [['إلى الله وحده لا شريك له', 'naar Allah alleen, zonder deelgenoot'], ['العقيدة والشريعة من الله وحده', 'geloof en wetgeving van Allah alleen']] },
        { label: ['الشرك', 'Shirk'], cells: [['إلى غير الله معه', 'naar anderen naast Allah'], ['مختلط بالشرك ظاهرا وخفيا', 'vermengd met shirk, open en verborgen']] }
      ],
      page: 74
    }
  ],
  sections: [
    [74, 'بلا ترقيع ولا أنصاف حلول', 'Zonder lappen en halve oplossingen', 'يجب التبرؤ من عبادة غير الله، ومن دين اليهود والنصارى والمشركين، في كل وقت، بلا ترقيع ولا أنصاف حلول ولا التقاء في منتصف الطريق.', 'Men moet zich te allen tijde vrijpleiten van aanbidding van iets anders dan Allah en van de religie van joden, christenen en polytheïsten, zonder lappen, zonder halve oplossingen en zonder elkaar halverwege te ontmoeten.']
  ],
  keycards: [
    ['opsomming', 73, 'مواضع قراءتها في السنة', 'Waar de Sunna haar reciteert', ['ركعتا الطواف', 'ركعتا الفجر', 'الركعتان بعد المغرب', 'عند النوم'], ['de twee rakʿa\'s van de ṭawāf', 'de twee rakʿa\'s van fajr', 'de twee rakʿa\'s na maghrib', 'voor het slapen']]
  ],
  hadith: [
    { text: 'اقرأ: ﴿قل يا أيها الكافرون﴾ ثم نم على خاتمتها، فإنها براءة من الشرك', takhrij: 'أخرجه أحمد وأبو داود، وصححه الألباني', takhrijNl: 'Aḥmad en Abū Dāwūd; ṣaḥīḥ volgens al-Albānī', nl: 'Reciteer "Zeg: o ongelovigen" en slaap dan na het einde ervan, want zij is een vrijpleiting van shirk', pages: [72] },
    { text: 'أن رسول الله ﷺ قرأ في الركعتين قبل الفجر، والركعتين بعد المغرب، بضعا وعشرين مرة أو بضع عشرة مرة ﴿قل يا أيها الكافرون﴾ و﴿قل هو الله أحد﴾', takhrij: 'أخرجه أحمد والترمذي، وصححه الألباني', takhrijNl: 'Aḥmad en at-Tirmidhī; ṣaḥīḥ volgens al-Albānī', narrator: 'ابن عمر', narratorNl: 'Ibn ʿUmar', nl: 'De Boodschapper van Allah ﷺ reciteerde in de twee rakʿa\'s vóór fajr en de twee na maghrib, twintig-en-zoveel of tien-en-zoveel keer, "Zeg: o ongelovigen" en "Zeg: Hij is Allah, de Ene"', pages: [73] }
  ],
  persons: [
    ['ahmad-ibn-hanbal', 'takhrij', [72, 73], 'روى حديث البراءة من الشرك وحديث ابن عمر.', 'Overleverde de hadith over de vrijpleiting van shirk en die van Ibn ʿUmar.'],
    ['abu-dawud', 'takhrij', [72], 'روى حديث النوم على خاتمتها.', 'Overleverde de hadith over slapen na haar einde.'],
    ['al-albani', 'takhrij', [72, 73], 'صحح الأحاديث.', 'Verklaarde de hadith ṣaḥīḥ.'],
    ['at-tirmidhi', 'takhrij', [72, 73], 'روى أنها تعدل ربع القرآن، وروى حديث ابن عمر.', 'Overleverde dat zij een kwart van de Koran waard is, en de hadith van Ibn ʿUmar.'],
    ['jabir-ibn-abdallah', 'text', [73], 'روى قراءتها في ركعتي الطواف.', 'Overleverde dat zij gereciteerd werd in de twee rakʿa\'s van de ṭawāf.'],
    ['abu-hurayra', 'text', [73], 'روى قراءتها في ركعتي الفجر.', 'Overleverde dat zij gereciteerd werd in de twee rakʿa\'s van fajr.'],
    ['muslim', 'takhrij', [73], 'روى حديثي جابر وأبي هريرة.', 'Overleverde de hadith van Jābir en Abū Hurayra.'],
    ['ibn-umar', 'text', [73], 'روى قراءتها قبل الفجر وبعد المغرب.', 'Overleverde dat zij gereciteerd werd vóór fajr en na maghrib.']
  ],
  review: [
    ['السورة براءة تامة من الشرك وأهله.', 'De soera is een volledige vrijpleiting van shirk en zijn aanhangers.'],
    ['التكرار فيها لقطع كل ظن وشبهة.', 'De herhaling erin neemt elk vermoeden en elke twijfel weg.'],
    ['تقرأ في ركعتي الفجر والطواف وبعد المغرب وعند النوم.', 'Zij wordt gereciteerd in de rakʿa\'s van fajr, van de ṭawāf, na maghrib en voor het slapen.']
  ],
  quiz: [
    { type: 'mc', page: 72, q: ['ماذا عرض المشركون على النبي ﷺ؟', 'Wat stelden de polytheïsten de Profeet ﷺ voor?'], options: [['أن يعبد آلهتهم سنة ويعبدوا إلهه سنة', 'أن يترك مكة', 'أن يتزوج منهم', 'أن يكون ملكا عليهم'], ['een jaar hun goden aanbidden en zij een jaar zijn God', 'Mekka verlaten', 'met hen trouwen', 'hun koning worden']], answer: 0, explain: ['فنزلت السورة بالبراءة من آلهتهم.', 'De soera kwam neer met de vrijpleiting van hun goden.'] },
    { type: 'mc', page: 72, q: ['لماذا أمر بقراءتها عند النوم؟', 'Waarom moet men haar voor het slapen reciteren?'], options: [['لأنها براءة من الشرك', 'لأنها أقصر سورة', 'لأنها تطرد الحسد', 'لأنها تعدل ثلث القرآن'], ['omdat zij een vrijpleiting van shirk is', 'omdat zij de kortste soera is', 'omdat zij afgunst verdrijft', 'omdat zij een derde van de Koran waard is']], answer: 0, explain: ['«فإنها براءة من الشرك».', '"Want zij is een vrijpleiting van shirk".'] },
    { type: 'tf', page: 73, q: ['الخطاب في ﴿قل يا أيها الكافرون﴾ خاص بكفار قريش.', '"Zeg: o ongelovigen" geldt alleen voor de ongelovigen van Quraysh.'], answer: 1, explain: ['يعم كل كافر على وجه الأرض، وإن كان أولهم كفار قريش.', 'Het geldt voor elke ongelovige op aarde, al waren die van Quraysh de eersten.'] },
    { type: 'mc', page: 74, q: ['ما المراد بـ﴿ولي دين﴾؟', 'Wat is bedoeld met "en ik heb mijn religie"?'], options: [['الإسلام وجزاؤه', 'الشرك', 'دين العرب', 'كل الأديان'], ['de islam en zijn vergelding', 'shirk', 'de religie van de Arabieren', 'alle religies']], answer: 0, explain: ['﴿لكم دينكم﴾ الشرك، و﴿ولي دين﴾ الإسلام.', '"Jullie religie" is shirk, "mijn religie" de islam.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٧٥.', 'Oefening van het boek op p. 75. De Nederlandse weergave van verzen en hadith geeft de betekenis weer; het is geen vertaling.']
})
