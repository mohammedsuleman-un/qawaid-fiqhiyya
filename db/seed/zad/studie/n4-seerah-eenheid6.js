// Hoofdstukkaart bij السيرة النبوية (٤), eenheid 6: غضبه ﷺ (lessen 16, boek p. 57–58).
// Opgesteld uit de leesnotities van het boek (/mnt/project-files/zad/n4-sira/leesnotities.md);
// hadith en takhrij zoals in het boek.
// Weggelaten (zonder bron in het boek): de uitspraak van ʿAlī over de voorbeschikking op p. 58.
import { kaart } from './kaart.js'

export default kaart({
  book: 'zad-n4-seerah',
  chapter: '16',
  unit: 6,
  source: {
    label: ['كتاب السيرة النبوية (٤)، سلسلة زاد العلمية', 'As-Sīra an-Nabawiyya (4), Zad-reeks'],
    pages: '57–58',
    url: 'https://archive.org/details/zad-academy-books_202309/CourseBook_Semester4_Seerah/page/n{p}/mode/1up'
  },
  title: ['غضبه ﷺ', 'Zijn woede ﷺ'],
  subtitle: ['درس واحد', 'Eén les'],
  summary: [
    'الغضب صفة جبل عليها الإنسان، تحمد في موضعها وتذم في غيره. كان النبي ﷺ يغضب حتى يحمر وجهه، لكن غضبه لم يكن لدنيا ولا لنفسه، بل لله؛ فغضب من التنازع في القرآن ومن التنازع في القدر.',
    'Woede is een aangeboren eigenschap, geprezen op de juiste plek en afgekeurd daarbuiten. De Profeet ﷺ kon boos worden tot zijn gezicht rood werd, maar nooit om de wereld of om zichzelf, alleen voor Allah: hij werd boos toen men twistte over de Koran en over de voorbeschikking.'
  ],
  map: {
    title: ['غضبه ﷺ في خريطة واحدة', 'Zijn woede in één kaart'],
    intro: ['كما في الدرس.', 'Zoals in de les.'],
    root: [['غضبه ﷺ', 'Zijn woede ﷺ'], ['الوحدة السادسة', 'Eenheid 6']],
    nodes: [
      { label: ['غضبه لله لا لنفسه', 'Boos voor Allah, niet voor zichzelf'], sub: ['ص ٥٧', 'p. 57'], page: 57, children: [['إلا أن تنتهك حرمة الله', 'alleen als Allahs grenzen geschonden werden']] },
      { label: ['من التنازع في القرآن', 'Om twist over de Koran'], sub: ['ص ٥٧', 'p. 57'], page: 57, children: [['هلاك من قبلنا باختلافهم', 'de ondergang van de vroegeren door hun onenigheid']] },
      { label: ['من التنازع في القدر', 'Om twist over de voorbeschikking'], sub: ['ص ٥٨', 'p. 58'], page: 58, children: [['القدر سر من أسرار الله', 'de voorbeschikking is een geheim van Allah'], ['إذا ذكر القدر فأمسكوا', 'als de voorbeschikking ter sprake komt, houd je in']] }
    ]
  },
  points: [
    [57, 'الغضب صفة تحمد في موضعها المطلوب ووقتها المناسب، وتذم في غير ذلك.', 'Woede wordt geprezen op de gewenste plek en het passende moment, en afgekeurd daarbuiten.'],
    [57, 'ما انتقم رسول الله ﷺ لنفسه، إلا أن تنتهك حرمة الله فينتقم لله بها.', 'De Boodschapper ﷺ nam nooit wraak voor zichzelf, alleen als Allahs grenzen geschonden werden, dan deed hij het voor Allah.'],
    [57, 'على المسلم أن يعلم أن القرآن يصدق بعضه بعضا، وما أشكل عليه فلسوء فهمه، فيكله إلى الله ورسوله ﷺ.', 'De moslim weet dat de Koran zichzelf bevestigt; wat hem onduidelijk is, komt door zijn eigen begrip, en hij laat het aan Allah en Zijn Boodschapper ﷺ over.'],
    [57, 'من لم يكن من أهل النظر والاستدلال سأل أهل العلم الثقات.', 'Wie niet van de mensen van onderzoek en bewijsvoering is, vraagt betrouwbare geleerden.'],
    [58, 'غضب من التنازع في القدر لأنه سر من أسرار الله، والبحث عنه منهي عنه.', 'Hij werd boos over twist over de voorbeschikking omdat zij een geheim van Allah is, en het zoeken ernaar verboden is.'],
    [58, 'الخائض في القدر لا يأمن أن يصير قدريا أو جبريا.', 'Wie zich in de voorbeschikking verdiept, is niet veilig voor het worden van een Qadarī of Jabrī.']
  ],
  terms: [
    ['هجرت', 'hajjartu', 57, 'خرجت في الهاجرة، وهي نصف النهار عند اشتداد الحر.', 'Op het heetst van de dag gaan, midden op de dag.'],
    ['القدري والجبري', 'al-qadarī wa-l-jabrī', 58, 'من ضل في باب القدر فنفاه أو جعل العبد مجبورا.', 'Wie in de voorbeschikking dwaalt: de een ontkent haar, de ander maakt de dienaar tot een gedwongene.']
  ],
  diagrams: [
    {
      type: 'compare',
      title: ['التنازع في القرآن والقدر', 'Twist over de Koran en over de voorbeschikking'],
      intro: ['كما في الصفحتين ٥٧–٥٨.', 'Zoals op p. 57–58.'],
      columns: [['في القرآن', 'Over de Koran'], ['في القدر', 'Over de voorbeschikking']],
      rows: [
        { label: ['حاله ﷺ', 'Zijn toestand'], cells: [['عرف الغضب في وجهه', 'woede zichtbaar op zijn gezicht'], ['غضب حتى احمر وجهه', 'boos tot zijn gezicht rood werd']] },
        { label: ['قوله', 'Zijn woorden'], cells: [['إنما هلك من كان قبلكم باختلافهم في الكتاب', 'de vroegeren gingen ten onder door hun onenigheid over het Boek'], ['عزمت عليكم ألا تنازعوا فيه', 'ik draag jullie op er niet over te twisten']] },
        { label: ['الواجب', 'De plicht'], cells: [['رد المتشابه إلى الله ورسوله وسؤال أهل العلم', 'het onduidelijke aan Allah en Zijn Boodschapper overlaten en geleerden vragen'], ['الإمساك عن الخوض فيه', 'zich onthouden van erin verdiepen']] }
      ],
      page: 57
    }
  ],
  sections: [
    [58, 'خطورة الخوض في القدر', 'Het gevaar van speculeren over de voorbeschikking', 'موضوع القدر من أخطر المسائل وأعمقها؛ ولذا قال ﷺ: «إذا ذكر القدر فأمسكوا».', 'De voorbeschikking is een van de gevaarlijkste en diepste kwesties; daarom zei hij ﷺ: "Als de voorbeschikking ter sprake komt, houd je in".']
  ],
  keycards: [
    ['onderscheid', 57, 'الغضب المحمود والمذموم', 'Prijzenswaardige en afkeurenswaardige woede', ['المحمود: لله وفي موضعه', 'المذموم: لدنيا فانية أو للنفس'], ['prijzenswaardig: voor Allah en op de juiste plek', 'afkeurenswaardig: om een vergankelijke wereld of om zichzelf']]
  ],
  hadith: [
    { text: 'وما انتقم رسول الله ﷺ لنفسه، إلا أن تنتهك حرمة الله فينتقم لله بها', takhrij: 'أخرجه البخاري ومسلم', takhrijNl: 'al-Bukhārī en Muslim', narrator: 'عائشة', narratorNl: 'ʿĀʾisha', nl: 'De Boodschapper van Allah ﷺ nam nooit wraak voor zichzelf, behalve als Allahs grenzen geschonden werden; dan nam hij er wraak om voor Allah', pages: [57] },
    { text: 'إنما هلك من كان قبلكم باختلافهم في الكتاب', takhrij: 'أخرجه مسلم', takhrijNl: 'Muslim', narrator: 'عبد الله بن عمرو', narratorNl: 'ʿAbd Allāh ibn ʿAmr', note: 'لما سمع رجلين اختلفا في آية، فخرج يعرف في وجهه الغضب.', nlNote: 'Toen hij twee mannen hoorde verschillen over een vers; hij kwam naar buiten met woede op zijn gezicht.', nl: 'Wie vóór jullie waren, gingen ten onder door hun onenigheid over het Boek', pages: [57] },
    { text: 'أبهذا أمرتم؟! أم بهذا أرسلت إليكم؟! لهذا خلقتم؟! تضربون القرآن بعضه ببعض؟! إنما هلك من كان قبلكم حين تنازعوا في هذا الأمر، عزمت عليكم ألا تنازعوا فيه', takhrij: 'أخرجه الترمذي وابن ماجه، وحسنه الألباني', takhrijNl: 'at-Tirmidhī en Ibn Māja; ḥasan volgens al-Albānī', narrator: 'أبو هريرة', narratorNl: 'Abū Hurayra', note: 'خرج عليهم وهم يتنازعون في القدر فغضب حتى احمر وجهه.', nlNote: 'Hij kwam naar hen toe terwijl zij twistten over de voorbeschikking en werd boos tot zijn gezicht rood werd.', nl: 'Is jullie dit opgedragen? Of ben ik hiervoor naar jullie gestuurd? Zijn jullie hiervoor geschapen? Zetten jullie delen van de Koran tegen elkaar? Wie vóór jullie waren, gingen ten onder toen zij hierover twistten; ik draag jullie op er niet over te twisten', pages: [58] },
    { text: 'إذا ذكر القدر فأمسكوا', takhrij: 'رواه الطبراني، وحسنه الألباني', takhrijNl: 'aṭ-Ṭabarānī; ḥasan volgens al-Albānī', nl: 'Als de voorbeschikking ter sprake komt, houd je dan in', pages: [58] }
  ],
  persons: [
    ['aisha', 'text', [57], 'روت أنه لم ينتقم لنفسه.', 'Overleverde dat hij nooit wraak nam voor zichzelf.'],
    ['abdallah-ibn-amr', 'text', [57], 'روى غضبه من الاختلاف في آية.', 'Overleverde zijn woede over onenigheid over een vers.'],
    ['abu-hurayra', 'text', [58], 'روى غضبه من التنازع في القدر.', 'Overleverde zijn woede over twist over de voorbeschikking.'],
    ['at-tabarani', 'takhrij', [58], 'روى حديث «إذا ذكر القدر فأمسكوا».', 'Overleverde de hadith "als de voorbeschikking ter sprake komt, houd je in".']
  ],
  review: [
    ['كان غضبه ﷺ لله لا لنفسه ولا لدنيا.', 'Zijn woede was voor Allah, niet voor zichzelf of de wereld.'],
    ['غضب من التنازع في القرآن، لأن القرآن يصدق بعضه بعضا.', 'Hij werd boos over twist over de Koran, want de Koran bevestigt zichzelf.'],
    ['غضب من التنازع في القدر، لأنه سر الله.', 'Hij werd boos over twist over de voorbeschikking, want zij is Allahs geheim.']
  ],
  quiz: [
    { type: 'tf', page: 57, q: ['كان النبي ﷺ ينتقم لنفسه إذا أوذي.', 'De Profeet ﷺ nam wraak voor zichzelf als hij gekwetst werd.'], answer: 1, explain: ['ما انتقم لنفسه إلا أن تنتهك حرمة الله.', 'Hij nam nooit wraak voor zichzelf, alleen als Allahs grenzen geschonden werden.'] },
    { type: 'mc', page: 58, q: ['لماذا غضب ﷺ من التنازع في القدر؟', 'Waarom werd hij ﷺ boos over twist over de voorbeschikking?'], options: [['لأنه سر من أسرار الله', 'لأنه لا يتعلق بالعقيدة', 'لأنهم كانوا في الصلاة', 'لأن الوقت كان ضيقا'], ['omdat zij een geheim van Allah is', 'omdat het niets met de geloofsleer te maken heeft', 'omdat zij aan het bidden waren', 'omdat er weinig tijd was']], answer: 0, explain: ['كما في الإطار ص ٥٨.', 'Zoals in het kader op p. 58.'] },
    { type: 'mc', page: 57, q: ['ماذا يفعل المسلم إذا أشكل عليه شيء من القرآن؟', 'Wat doet de moslim als iets in de Koran hem onduidelijk is?'], options: [['يكله إلى الله ورسوله ويسأل أهل العلم', 'يرده', 'يجادل فيه', 'يتركه ويقرأ غيره'], ['hij laat het aan Allah en Zijn Boodschapper over en vraagt geleerden', 'hij wijst het af', 'hij twist erover', 'hij laat het en leest iets anders']], answer: 0, explain: ['كما في الصفحة ٥٧.', 'Zoals op p. 57.'] }
  ],
  note: ['نشاط الكتاب في الصفحة ٦١.', 'Oefening van het boek op p. 61. De Nederlandse weergave van hadith geeft de betekenis weer; het is geen vertaling.']
})
