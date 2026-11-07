// Tweede instituut: de lessen van shaykh Abū Ismāʿīl in uṣūl al-fiqh (7 nov 2026, Mohammed).
// Elke zondag 09:30–11:15. Geen les op 27 sep, 18 en 25 okt, 27 dec 2026, 3 jan en 28 mrt 2027.
// Laatste les zo 27 jun 2027; zomervakantie juli en augustus. Begin schooljaar aangenomen op
// 1 sep 2026 (eerste les zo 6 sep); aan te passen onder Groepen & lesagenda.
const SLUG = 'abu-ismail-usul-al-fiqh'
const INST = `(SELECT id FROM institutes WHERE slug = '${SLUG}')`
const day = (kind, from, to, nl, ar) => `INSERT INTO calendar_days (institute_id, kind, date_from, date_to, title_nl, title_ar)
  SELECT id, '${kind}', '${from}', ${to ? `'${to}'` : 'NULL'}, '${nl}', '${ar}' FROM institutes WHERE slug = '${SLUG}'`
const noLesson = (d) => day('holiday', d, null, 'Geen les', 'لا درس')

export default {
  id: 166,
  name: 'instituut-abu-ismail',
  up: [
    `INSERT IGNORE INTO institutes (slug, name_nl, name_ar, position)
      SELECT '${SLUG}', 'Lessen van shaykh Abū Ismāʿīl in uṣūl al-fiqh', 'دروس الشيخ أبو إسماعيل في أصول الفقه', COALESCE(MAX(position), 0) + 1 FROM institutes`,
    `INSERT IGNORE INTO class_groups (institute_id, code, cohort, gender, name_nl, name_ar, position)
      SELECT id, 'A-m', 'A', 'm', 'Broeders', 'الإخوة', 1 FROM institutes WHERE slug = '${SLUG}'
      UNION ALL SELECT id, 'A-f', 'A', 'f', 'Zusters', 'الأخوات', 2 FROM institutes WHERE slug = '${SLUG}'`,
    `INSERT INTO schedule_blocks (institute_id, cohort, weekday, start_time, end_time, subject_nl, subject_ar, position)
      SELECT id, 'A', 7, '09:30', '11:15', 'Uṣūl al-fiqh', 'أصول الفقه', 1 FROM institutes WHERE slug = '${SLUG}'`,
    day('year', '2026-09-01', '2027-06-27', 'Schooljaar 2026–2027', 'العام الدراسي 2026–2027'),
    ...['2026-09-27', '2026-10-18', '2026-10-25', '2026-12-27', '2027-01-03', '2027-03-28'].map(noLesson),
    day('special', '2027-06-27', null, 'Laatste les', 'الدرس الأخير'),
    day('holiday', '2027-07-01', '2027-08-31', 'Zomervakantie', 'العطلة الصيفية')
  ],
  down: [
    `DELETE FROM calendar_days WHERE institute_id = ${INST}`,
    `DELETE FROM schedule_blocks WHERE institute_id = ${INST}`,
    `DELETE FROM class_groups WHERE institute_id = ${INST}`,
    `DELETE FROM institutes WHERE slug = '${SLUG}'`
  ]
}
