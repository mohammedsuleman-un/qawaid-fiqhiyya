// GET: geplande toetsen (open, binnenkort en van de laatste 30 dagen) met je eigen pogingen.
import { json } from '../../../lib/http.js'
import { testsForStudent } from '../../../lib/student.js'

export async function onRequestGet ({ data: { conn, user } }) {
  return json({ tests: await testsForStudent(conn, user.id) })
}
