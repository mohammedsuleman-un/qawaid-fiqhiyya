// Een blok kan om en om twee vakken hebben (alt_subject_*): per gehouden les wisselt het vak,
// te beginnen met het eerste vak op alt_start. Shaykh Abū Ismāʿīl (Mohammed, 7 nov 2026):
// zondag 8 nov 2026 al-Ashbāh wa-n-naẓāʾir, de week erop Jamʿ al-jawāmiʿ, en zo verder.
const INST = "(SELECT id FROM institutes WHERE slug = 'abu-ismail-usul-al-fiqh')"
export default {
  id: 169,
  name: 'vak-om-en-om',
  up: [
    "ALTER TABLE schedule_blocks ADD COLUMN alt_subject_nl VARCHAR(255) NOT NULL DEFAULT ''",
    "ALTER TABLE schedule_blocks ADD COLUMN alt_subject_ar VARCHAR(255) NOT NULL DEFAULT ''",
    'ALTER TABLE schedule_blocks ADD COLUMN alt_start DATE NULL',
    `UPDATE schedule_blocks SET subject_nl = 'Al-Ashbāh wa-n-naẓāʾir', subject_ar = 'الأشباه والنظائر',
      alt_subject_nl = 'Jamʿ al-jawāmiʿ', alt_subject_ar = 'جمع الجوامع', alt_start = '2026-11-08'
      WHERE weekday = 7 AND institute_id = ${INST}`
  ],
  down: [
    `UPDATE schedule_blocks SET subject_nl = 'Uṣūl al-fiqh', subject_ar = 'أصول الفقه' WHERE weekday = 7 AND institute_id = ${INST}`,
    'ALTER TABLE schedule_blocks DROP COLUMN alt_start',
    'ALTER TABLE schedule_blocks DROP COLUMN alt_subject_ar',
    'ALTER TABLE schedule_blocks DROP COLUMN alt_subject_nl'
  ]
}
