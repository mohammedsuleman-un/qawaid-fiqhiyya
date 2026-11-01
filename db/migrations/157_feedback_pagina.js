// Feedback vanaf elke pagina: welke pagina (adres en titel), welke alinea (anker) en, als iemand
// ingelogd is, wie het stuurde. Meldingen zonder hoofdstuk of artikel krijgen entity_type 'page'
// en entity_id 0. Bestaande meldingen blijven zoals ze zijn.
export default {
  id: 157,
  name: 'feedback-pagina',
  up: [
    'ALTER TABLE feedback ADD COLUMN IF NOT EXISTS page_url VARCHAR(500) NULL',
    'ALTER TABLE feedback ADD COLUMN IF NOT EXISTS page_title VARCHAR(300) NULL',
    'ALTER TABLE feedback ADD COLUMN IF NOT EXISTS anchor VARCHAR(300) NULL',
    'ALTER TABLE feedback ADD COLUMN IF NOT EXISTS user_id INT NULL'
  ],
  down: [
    'ALTER TABLE feedback DROP COLUMN IF EXISTS user_id',
    'ALTER TABLE feedback DROP COLUMN IF EXISTS anchor',
    'ALTER TABLE feedback DROP COLUMN IF EXISTS page_title',
    'ALTER TABLE feedback DROP COLUMN IF EXISTS page_url'
  ]
}
