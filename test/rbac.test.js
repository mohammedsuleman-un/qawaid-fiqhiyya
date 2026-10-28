import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ROLE_PERMISSIONS, denyReason, can } from '../lib/rbac.js'

const user = (role, totp = true) => ({ id: 1, roles: [role], totp_enabled: totp, permissions: new Set(ROLE_PERMISSIONS[role]) })

test('rollen hebben de juiste rechten', () => {
  assert.ok(can(user('superadmin'), 'users.manage'))
  assert.ok(!can(user('admin'), 'users.manage'))
  assert.ok(can(user('admin'), 'content.publish'))
  assert.ok(!can(user('editor'), 'content.publish'))
  assert.ok(!can(user('editor'), 'content.review'))
  assert.ok(can(user('editor'), 'content.edit'))
  assert.ok(!can(user('student'), 'content.edit'))
  assert.ok(!can(user('teacher'), 'feedback.assigned'))
})

test('publiceren en gebruikersbeheer vragen tweestapsverificatie', () => {
  assert.match(denyReason(user('superadmin', false), 'users.manage'), /tweestaps/)
  assert.match(denyReason(user('admin', false), 'content.publish'), /tweestaps/)
  assert.equal(denyReason(user('admin', false), 'content.edit'), null)
  assert.equal(denyReason(null, 'content.edit'), 'Niet ingelogd')
})
