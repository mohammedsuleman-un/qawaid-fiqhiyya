// Nieuwe personen uit الرسالة التدمرية (8 nov 2026) die nog niet in het register stonden. Korte
// biografie-concepten uit de bekende biografische werken (o.a. سير أعلام النبلاء van adh-Dhahabī en
// الأعلام van az-Ziriklī); ze komen als concept in Beheer > Te beoordelen en worden pas zichtbaar na
// goedkeuring. Bij al-Qalānisī is het sterfjaar onbekend.
const SRC = {
  ar: '<p><cite>المصدر: ملخص من كتب التراجم (سير أعلام النبلاء للذهبي، والأعلام للزركلي)؛ مسودة تحتاج إلى مراجعة.</cite></p>',
  nl: '<p><cite>Bron: samengevat uit de biografische werken (Siyar aʿlām an-nubalāʾ van adh-Dhahabī, al-Aʿlām van az-Ziriklī); concept, graag controleren.</cite></p>'
}
const p = (slug, name_ar, name_nl, death_hijri, aliases, ar, nl) =>
  ({ slug, name_ar, name_nl, kind: 'alim', death_hijri, aliases, bio_ar: `<p>${ar}</p>${SRC.ar}`, bio_nl: `<p>${nl}</p>${SRC.nl}` })

export default [
  p('jahm-ibn-safwan', 'جهم بن صفوان', 'Jahm ibn Ṣafwān', 128, ['الجهم', 'جهم بن صفوان السمرقندي'],
    'جهم بن صفوان السمرقندي، أبو محرز (ت ١٢٨ هـ): رأس الجهمية وإليه تنسب. أخذ مقالته في نفي الصفات عن الجعد بن درهم، وقال بالجبر والإرجاء وفناء الجنة والنار. خرج مع الحارث بن سريج على بني أمية بخراسان، فقتله سلم بن أحوز بمرو. وذكره شيخ الإسلام في التدمرية في أصل التعطيل وفي القول بالجبر.',
    'Jahm ibn Ṣafwān as-Samarqandī, Abū Muḥriz (gest. 128 AH): het hoofd van de Jahmiyya, die naar hem genoemd is. Hij nam de ontkenning van de eigenschappen over van al-Jaʿd ibn Dirham en leerde daarnaast dwang (jabr), irjāʾ en het vergaan van Paradijs en Hel. Hij kwam met al-Ḥārith ibn Surayj in opstand tegen de Umayyaden in Khurāsān en werd in Marw gedood door Salm ibn Aḥwaz. Ibn Taymiyya noemt hem in at-Tadmuriyya bij de oorsprong van de ontkenning en bij de leer van de dwang.'),
  p('ibn-kullab', 'عبد الله بن سعيد بن كلاب', 'ʿAbdallāh ibn Saʿīd ibn Kullāb', 240, ['ابن كلاب', 'أبو محمد بن كلاب القطان'],
    'عبد الله بن سعيد بن كلاب القطان البصري، أبو محمد (ت بعد ٢٤٠ هـ): متكلم، رد على المعتزلة وأثبت الصفات الذاتية، ونفى قيام الأفعال الاختيارية بالله، وإليه تنسب الكلابية. تبعه أبو الحسن الأشعري في كثير من أصوله، ومن أصحابه الحارث المحاسبي وأبو العباس القلانسي.',
    'ʿAbdallāh ibn Saʿīd ibn Kullāb al-Qaṭṭān al-Baṣrī, Abū Muḥammad (gest. na 240 AH): theoloog die de Muʿtazila weerlegde en de wezenlijke eigenschappen bevestigde, maar ontkende dat handelingen die Allah wil aan Hem bestaan; naar hem heet de Kullābiyya. Abū al-Ḥasan al-Ashʿarī volgde hem in veel grondslagen; tot zijn volgelingen behoren al-Ḥārith al-Muḥāsibī en Abū al-ʿAbbās al-Qalānisī.'),
  p('al-harith-al-muhasibi', 'الحارث بن أسد المحاسبي', 'al-Ḥārith ibn Asad al-Muḥāsibī', 243, ['المحاسبي', 'الحارث المحاسبي'],
    'الحارث بن أسد المحاسبي البغدادي، أبو عبد الله (ت ٢٤٣ هـ): من أكابر الزهاد والوعاظ، سمي المحاسبي لكثرة محاسبته نفسه. من كتبه «الرعاية لحقوق الله» و«آداب النفوس». كان على طريقة ابن كلاب في الكلام، فهجره الإمام أحمد لذلك.',
    'al-Ḥārith ibn Asad al-Muḥāsibī uit Bagdad, Abū ʿAbdallāh (gest. 243 AH): een van de grote asceten en predikers, al-Muḥāsibī genoemd omdat hij zichzelf voortdurend ter verantwoording riep. Tot zijn werken behoren ar-Riʿāya li-ḥuqūq Allāh en Ādāb an-nufūs. In de theologie volgde hij de methode van Ibn Kullāb; daarom meed imam Aḥmad hem.'),
  p('abu-al-abbas-al-qalanisi', 'أبو العباس القلانسي', 'Abū al-ʿAbbās al-Qalānisī', null, ['القلانسي', 'أحمد بن عبد الرحمن القلانسي'],
    'أبو العباس أحمد بن عبد الرحمن بن خالد القلانسي الرازي: متكلم من أصحاب ابن كلاب، كان معاصرا لأبي الحسن الأشعري، وله مصنفات في الرد على المعتزلة. ذكره شيخ الإسلام في التدمرية مع ابن كلاب والأشعري فيمن أثبت الصفات من المتكلمين.',
    'Abū al-ʿAbbās Aḥmad ibn ʿAbd ar-Raḥmān ibn Khālid al-Qalānisī ar-Rāzī: theoloog uit de school van Ibn Kullāb, tijdgenoot van Abū al-Ḥasan al-Ashʿarī, met werken tegen de Muʿtazila. Ibn Taymiyya noemt hem in at-Tadmuriyya samen met Ibn Kullāb en al-Ashʿarī onder de theologen die de eigenschappen bevestigden.'),
  p('abd-al-aziz-al-kinani', 'عبد العزيز بن يحيى الكناني', 'ʿAbd al-ʿAzīz ibn Yaḥyā al-Kinānī', 240, ['الكناني', 'عبد العزيز الكناني المكي'],
    'عبد العزيز بن يحيى بن عبد العزيز الكناني المكي (ت نحو ٢٤٠ هـ): فقيه من أصحاب الشافعي، يلقب بالغول. ناظر بشرا المريسي في مجلس المأمون في خلق القرآن، وتنسب إليه «الحيدة» في حكاية تلك المناظرة.',
    'ʿAbd al-ʿAzīz ibn Yaḥyā al-Kinānī uit Mekka (gest. ca. 240 AH): faqīh uit de kring van ash-Shāfiʿī, bijgenaamd al-Ghūl. Hij debatteerde in de raad van al-Maʾmūn met Bishr al-Marīsī over de bewering dat de Koran geschapen is; aan hem wordt al-Ḥayda toegeschreven, het verslag van dat debat.'),
  p('abu-ubayd-al-qasim-ibn-sallam', 'أبو عبيد القاسم بن سلام', 'Abū ʿUbayd al-Qāsim ibn Sallām', 224, ['أبو عبيد', 'القاسم بن سلام'],
    'أبو عبيد القاسم بن سلام الهروي البغدادي (ت ٢٢٤ هـ): إمام في اللغة والحديث والفقه، ولي قضاء طرسوس ثم جاور بمكة وبها مات. من كتبه «غريب الحديث» و«الأموال» و«الإيمان» و«فضائل القرآن».',
    'Abū ʿUbayd al-Qāsim ibn Sallām uit Herat en Bagdad (gest. 224 AH): imam in taal, hadith en fiqh. Hij was rechter in Ṭarsūs en woonde later in Mekka, waar hij overleed. Tot zijn werken behoren Gharīb al-ḥadīth, al-Amwāl, al-Īmān en Faḍāʾil al-Qurʾān.'),
  p('rabia-ar-ray', 'ربيعة الرأي', 'Rabīʿa ar-Raʾy', 136, ['ربيعة بن أبي عبد الرحمن', 'ربيعة بن فروخ'],
    'ربيعة بن أبي عبد الرحمن فروخ التيمي بالولاء، أبو عثمان المدني (ت ١٣٦ هـ): فقيه أهل المدينة، لقب بربيعة الرأي لعنايته بالفقه، وهو شيخ الإمام مالك. ونقل عنه شيخ الإسلام في التدمرية قوله في الاستواء: الاستواء معلوم، والكيف مجهول، ومن الله البيان، وعلى الرسول البلاغ، وعلينا الإيمان.',
    'Rabīʿa ibn Abī ʿAbd ar-Raḥmān Farrūkh at-Taymī, Abū ʿUthmān uit Medina (gest. 136 AH): de faqīh van Medina, Rabīʿa ar-Raʾy genoemd om zijn inzicht in de fiqh, en de leraar van imam Mālik. Ibn Taymiyya haalt in at-Tadmuriyya zijn woorden over het rijzen (istiwāʾ) aan: het rijzen is bekend, het hoe is onbekend; van Allah komt de uitleg, aan de Boodschapper het overbrengen en aan ons het geloven.'),
  p('mahmud-ibn-sebuktegin', 'محمود بن سبكتكين', 'Maḥmūd ibn Sebüktegin', 421, ['محمود الغزنوي', 'يمين الدولة محمود'],
    'محمود بن سبكتكين الغزنوي، يمين الدولة، أبو القاسم (ت ٤٢١ هـ): سلطان الدولة الغزنوية، فتح بلادا واسعة من الهند ونشر فيها الإسلام، وكان معظما للسنة. يذكر عنه شيخ الإسلام أنه قال لمن وصف الله بأنه لا داخل العالم ولا خارجه: ميز لنا بين هذا الرب الذي تثبته وبين المعدوم.',
    'Maḥmūd ibn Sebüktegin van Ghazna, Yamīn ad-Dawla, Abū al-Qāsim (gest. 421 AH): sultan van het Ghaznawidische rijk, die grote delen van India veroverde en daar de islam verspreidde, en de Sunna in ere hield. Ibn Taymiyya vermeldt dat hij tegen iemand die Allah beschreef als "niet binnen en niet buiten de wereld" zei: leg ons het verschil uit tussen deze Heer die jij bevestigt en het niet-bestaande.')
]
