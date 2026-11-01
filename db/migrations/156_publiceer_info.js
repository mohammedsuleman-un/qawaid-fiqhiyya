// Publiceert de biografie-concepten (Talkhīṣ en ZAD, uit al-Aʿlām) en de hadithbronnen op verzoek van
// Mohammed (1 nov 2026: "Je kan dat online zetten"). De beoordeling (graad) van een hadith blijft leeg:
// die vult alleen een mens in. Een al ingevulde bron blijft ongemoeid.
// Herstelbaar: de vorige toestand staat in twee back-uptabellen die down terugzet.
const REASONS = [
  'Concept uit al-Aʿlām (az-Ziriklī), met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren',
  'Concept uit al-Aʿlām (az-Ziriklī) voor ZAD niveau 1, met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren',
  'Concept uit al-Aʿlām (az-Ziriklī) voor ZAD niveau 1 (Hadith, Tafsir, Sīra, Tarbiya), met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren',
  'Concept uit al-Aʿlām (az-Ziriklī) voor ZAD niveau 2 tot 4, met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren'
]
const IN = REASONS.map(() => '?').join(', ')
const B = 'zb_backup_20261101c_bio'
const H = 'zb_backup_20261101c_hadith_notes'

export default {
  id: 156,
  name: 'publiceer-info-personen-hadith',
  up: [
    // Back-up: per vertaling de nieuwe versie, de vorige gepubliceerde versie en de vorige status.
    `CREATE TABLE IF NOT EXISTS ${B} (translation_id INT PRIMARY KEY, new_version_id BIGINT NOT NULL, old_version_id BIGINT NULL, old_status VARCHAR(16) NOT NULL)`,
    (conn) => conn.execute(`INSERT INTO ${B} (translation_id, new_version_id, old_version_id, old_status)
      SELECT t.id, MAX(v.id), t.published_version_id, t.status FROM content_versions v JOIN content_translations t ON t.id = v.translation_id
      WHERE v.status = 'in_review' AND v.reason IN (${IN}) GROUP BY t.id, t.published_version_id, t.status`, REASONS),
    `UPDATE content_versions v JOIN ${B} b ON b.old_version_id = v.id SET v.status = 'superseded' WHERE v.status = 'published'`,
    `UPDATE content_versions v JOIN ${B} b ON b.new_version_id = v.id SET v.status = 'published', v.published_at = NOW()`,
    `UPDATE content_translations t JOIN ${B} b ON b.translation_id = t.id SET t.published_version_id = b.new_version_id, t.status = 'published'`,
    // Hadithbronnen: concept-vindplaats wordt de bron, alleen waar nog geen bron staat.
    `CREATE TABLE IF NOT EXISTS ${H} LIKE hadith_notes`,
    `INSERT INTO ${H} SELECT * FROM hadith_notes WHERE draft_source <> '' AND source = ''`,
    `UPDATE hadith_notes n JOIN ${H} b ON b.hkey = n.hkey SET n.source = LEFT(n.draft_source, 500)`
  ],
  down: [
    `UPDATE hadith_notes n JOIN ${H} b ON b.hkey = n.hkey SET n.source = b.source`,
    `DROP TABLE IF EXISTS ${H}`,
    `UPDATE content_versions v JOIN ${B} b ON b.new_version_id = v.id SET v.status = 'in_review', v.published_at = NULL`,
    `UPDATE content_versions v JOIN ${B} b ON b.old_version_id = v.id SET v.status = 'published'`,
    `UPDATE content_translations t JOIN ${B} b ON b.translation_id = t.id SET t.published_version_id = b.old_version_id, t.status = b.old_status`,
    `DROP TABLE IF EXISTS ${B}`
  ]
}
