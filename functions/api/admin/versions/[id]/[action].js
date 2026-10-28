// POST {comment}: workflowstap op een versie: submit, withdraw, approve, reject of publish.
import { json, id } from '../../../../../lib/http.js'
import { loadVersion, transition } from '../../../../../lib/workflow.js'

export async function onRequestPost ({ request, params, data: { conn, user } }) {
  const v = await loadVersion(conn, id(params.id))
  const input = await request.json().catch(() => ({}))
  const status = await transition(conn, user, v, params.action, input.comment)
  return json({ ok: true, status })
}
