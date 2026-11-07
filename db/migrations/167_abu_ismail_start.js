// Shaykh Abū Ismāʿīl (Mohammed, 7 nov 2026): het schooljaar begon op zondag 13 september 2026,
// en er zijn alleen broeders, dus de zustergroep vervalt (alleen als er nog niemand in zit).
const INST = "(SELECT id FROM institutes WHERE slug = 'abu-ismail-usul-al-fiqh')"
const YEAR = `kind = 'year' AND institute_id = ${INST}`
export default {
  id: 167,
  name: 'abu-ismail-start',
  up: [
    `UPDATE calendar_days SET date_from = '2026-09-13' WHERE ${YEAR}`,
    `DELETE FROM class_groups WHERE code = 'A-f' AND institute_id = ${INST}
      AND id NOT IN (SELECT group_id FROM class_group_members)`
  ],
  down: [
    `UPDATE calendar_days SET date_from = '2026-09-01' WHERE ${YEAR}`,
    `INSERT IGNORE INTO class_groups (institute_id, code, cohort, gender, name_nl, name_ar, position)
      SELECT id, 'A-f', 'A', 'f', 'Zusters', 'الأخوات', 2 FROM institutes WHERE slug = 'abu-ismail-usul-al-fiqh'`
  ]
}
