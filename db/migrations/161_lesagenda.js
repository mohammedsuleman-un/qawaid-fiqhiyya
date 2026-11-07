// Lesagenda van het instituut Ibn al-Qayyim (ZAD): groepen A en B, elk met broeders en
// zusters; het weekrooster (do en vr, 19:00–22:00 in twee blokken); het vakantie- en
// examenrooster 2026–2027; aanwezigheid per les; toetsen en huiswerk in de agenda.
const year = '2026-09-01'

export default {
  id: 161,
  name: 'lesagenda',
  up: [
    `CREATE TABLE IF NOT EXISTS class_groups (
      id INT AUTO_INCREMENT PRIMARY KEY,
      code VARCHAR(16) NOT NULL,
      cohort CHAR(1) NOT NULL,
      gender CHAR(1) NOT NULL,
      name_nl VARCHAR(255) NOT NULL DEFAULT '',
      name_ar VARCHAR(255) NOT NULL DEFAULT '',
      position INT NOT NULL DEFAULT 0,
      UNIQUE KEY code (code)
    )`,
    `CREATE TABLE IF NOT EXISTS class_group_members (
      group_id INT NOT NULL,
      user_id INT NOT NULL,
      role VARCHAR(16) NOT NULL DEFAULT 'student',
      added_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (group_id, user_id),
      KEY user_id (user_id)
    )`,
    `CREATE TABLE IF NOT EXISTS schedule_blocks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      cohort CHAR(1) NOT NULL,
      weekday TINYINT NOT NULL,
      start_time CHAR(5) NOT NULL,
      end_time CHAR(5) NOT NULL,
      subject_nl VARCHAR(255) NOT NULL DEFAULT '',
      subject_ar VARCHAR(255) NOT NULL DEFAULT '',
      position INT NOT NULL DEFAULT 0,
      KEY cohort (cohort)
    )`,
    `CREATE TABLE IF NOT EXISTS calendar_days (
      id INT AUTO_INCREMENT PRIMARY KEY,
      kind VARCHAR(16) NOT NULL,
      date_from DATE NOT NULL,
      date_to DATE NULL,
      cohort CHAR(1) NULL,
      title_nl VARCHAR(255) NOT NULL DEFAULT '',
      title_ar VARCHAR(255) NOT NULL DEFAULT '',
      KEY date_from (date_from)
    )`,
    `CREATE TABLE IF NOT EXISTS attendance (
      block_id INT NOT NULL,
      lesson_date DATE NOT NULL,
      user_id INT NOT NULL,
      group_id INT NOT NULL,
      status VARCHAR(12) NOT NULL,
      note VARCHAR(255) NOT NULL DEFAULT '',
      recorded_by INT NULL,
      recorded_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (block_id, lesson_date, user_id),
      KEY user_id (user_id),
      KEY group_id (group_id, lesson_date)
    )`,
    `CREATE TABLE IF NOT EXISTS agenda_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      kind VARCHAR(16) NOT NULL,
      cohort CHAR(1) NOT NULL,
      group_id INT NULL,
      block_id INT NULL,
      item_date DATE NOT NULL,
      title_nl VARCHAR(255) NOT NULL DEFAULT '',
      title_ar VARCHAR(255) NOT NULL DEFAULT '',
      info_nl TEXT NULL,
      info_ar TEXT NULL,
      created_by INT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      KEY item_date (item_date)
    )`,
    `INSERT IGNORE INTO permissions (code, name_nl, name_ar) VALUES
      ('groups.manage', 'Groepen, lesrooster en vakanties beheren', 'إدارة المجموعات والجدول الدراسي والعطل'),
      ('attendance.record', 'Aanwezigheid, toetsen en huiswerk in de agenda', 'تسجيل الحضور وإضافة الاختبارات والواجبات إلى الجدول')`,
    `INSERT IGNORE INTO role_permissions (role_code, permission_code) VALUES
      ('superadmin', 'groups.manage'), ('admin', 'groups.manage'),
      ('superadmin', 'attendance.record'), ('admin', 'attendance.record'), ('teacher', 'attendance.record')`,
    `INSERT IGNORE INTO class_groups (code, cohort, gender, name_nl, name_ar, position) VALUES
      ('A-m', 'A', 'm', 'Groep A · broeders', 'المجموعة أ · الإخوة', 1),
      ('A-f', 'A', 'f', 'Groep A · zusters', 'المجموعة أ · الأخوات', 2),
      ('B-m', 'B', 'm', 'Groep B · broeders', 'المجموعة ب · الإخوة', 3),
      ('B-f', 'B', 'f', 'Groep B · zusters', 'المجموعة ب · الأخوات', 4)`,
    `INSERT INTO schedule_blocks (cohort, weekday, start_time, end_time, subject_nl, subject_ar, position) VALUES
      ('A', 4, '19:00', '20:30', 'Fiqh en sīra', 'الفقه والسيرة', 1),
      ('A', 4, '20:30', '22:00', 'Geloofsleer en tafsīr', 'العقيدة والتفسير', 2),
      ('A', 5, '19:00', '20:30', 'Hadith', 'الحديث', 3),
      ('A', 5, '20:30', '22:00', 'Islamitische opvoeding', 'التربية الإسلامية', 4),
      ('B', 4, '19:00', '20:30', '', '', 1),
      ('B', 4, '20:30', '22:00', '', '', 2),
      ('B', 5, '19:00', '20:30', '', '', 3),
      ('B', 5, '20:30', '22:00', '', '', 4)`,
    `INSERT INTO calendar_days (kind, date_from, date_to, title_nl, title_ar) VALUES
      ('year', '${year}', '2027-06-25', 'Schooljaar 2026–2027', 'العام الدراسي 2026–2027'),
      ('holiday', '2026-12-24', '2027-01-01', 'Eindejaarsvakantie', 'عطلة نهاية السنة'),
      ('holiday', '2027-02-11', '2027-03-05', 'Ramadanvakantie', 'عطلة شهر رمضان'),
      ('holiday', '2027-05-06', '2027-05-07', 'Meivakantie', 'عطلة شهر مايو'),
      ('exam', '2027-01-07', NULL, 'Tussentijds examen: fiqh en sīra', 'امتحان منتصف السنة: الفقه والسيرة'),
      ('exam', '2027-01-21', NULL, 'Tussentijds examen: geloofsleer en tafsīr', 'امتحان منتصف السنة: العقيدة والتفسير'),
      ('exam', '2027-01-29', NULL, 'Tussentijds examen: hadith en islamitische opvoeding', 'امتحان منتصف السنة: الحديث والتربية الإسلامية'),
      ('exam', '2027-06-04', NULL, 'Eindexamen: hadith en islamitische opvoeding', 'امتحان نهاية السنة: الحديث والتربية الإسلامية'),
      ('exam', '2027-06-17', NULL, 'Eindexamen: geloofsleer en tafsīr', 'امتحان نهاية السنة: العقيدة والتفسير'),
      ('exam', '2027-06-24', NULL, 'Eindexamen: fiqh en sīra', 'امتحان نهاية السنة: الفقه والسيرة'),
      ('special', '2027-06-24', NULL, 'Voorlaatste lesdag', 'اليوم الدراسي قبل الأخير'),
      ('special', '2027-06-25', NULL, 'Laatste lesdag', 'آخر يوم دراسي'),
      ('special', '2027-07-01', NULL, 'Slotdag: certificaten gevorderd niveau en afsluitingsfeest (do 1 of vr 2 juli, nog te bepalen)', 'اليوم الختامي: توزيع شهادات المستوى المتقدم والحفل الختامي (الخميس 1 أو الجمعة 2 يوليو، يُحدَّد لاحقًا)')`
  ],
  down: [
    "DELETE FROM role_permissions WHERE permission_code IN ('groups.manage', 'attendance.record')",
    "DELETE FROM user_permissions WHERE permission_code IN ('groups.manage', 'attendance.record')",
    "DELETE FROM permissions WHERE code IN ('groups.manage', 'attendance.record')",
    'DROP TABLE IF EXISTS agenda_items', 'DROP TABLE IF EXISTS attendance', 'DROP TABLE IF EXISTS calendar_days',
    'DROP TABLE IF EXISTS schedule_blocks', 'DROP TABLE IF EXISTS class_group_members', 'DROP TABLE IF EXISTS class_groups'
  ]
}
