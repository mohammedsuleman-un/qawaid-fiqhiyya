// Rollen en rechten. De server controleert altijd een recht (nooit alleen een rol).
// Rechten van een gebruiker = rechten van zijn rollen, plus of min losse rechten.

export const ROLES = [
  { code: 'superadmin', nl: 'Superbeheerder', ar: 'المشرف العام', rank: 1 },
  { code: 'admin', nl: 'Beheerder', ar: 'مشرف', rank: 2 },
  { code: 'editor', nl: 'Redacteur', ar: 'محرر', rank: 3 },
  { code: 'teacher', nl: 'Docent', ar: 'مدرّس', rank: 4 },
  { code: 'student', nl: 'Student', ar: 'طالب', rank: 5 }
]

export const PERMISSIONS = [
  { code: 'content.create', nl: 'Boeken, hoofdstukken en artikelen aanmaken', ar: 'إضافة الكتب والفصول والمقالات' },
  { code: 'content.edit', nl: 'Teksten bewerken en ter beoordeling indienen', ar: 'تحرير النصوص وإرسالها للمراجعة' },
  { code: 'content.review', nl: 'Versies goedkeuren of afwijzen', ar: 'قبول النسخ أو رفضها' },
  { code: 'content.publish', nl: 'Publiceren, terugdraaien en archiveren', ar: 'النشر والتراجع والأرشفة' },
  { code: 'categories.manage', nl: 'Categorieën beheren', ar: 'إدارة التصنيفات' },
  { code: 'files.upload', nl: 'Bestanden uploaden', ar: 'رفع الملفات' },
  { code: 'feedback.manage', nl: 'Alle feedback verwerken en toewijzen', ar: 'إدارة جميع الملاحظات' },
  { code: 'feedback.assigned', nl: 'Toegewezen feedback verwerken', ar: 'معالجة الملاحظات المسندة' },
  { code: 'translations.manage', nl: 'Vertalingen beheren', ar: 'إدارة الترجمات' },
  { code: 'users.manage', nl: 'Gebruikers uitnodigen en rollen wijzigen', ar: 'دعوة المستخدمين وتغيير الأدوار' },
  { code: 'audit.view', nl: 'Auditlog bekijken', ar: 'عرض سجل التدقيق' },
  { code: 'settings.manage', nl: 'Instellingen en back-ups beheren', ar: 'إدارة الإعدادات والنسخ الاحتياطية' }
]

const all = PERMISSIONS.map((p) => p.code)
export const ROLE_PERMISSIONS = {
  superadmin: all,
  admin: ['content.create', 'content.edit', 'content.review', 'content.publish', 'categories.manage',
    'files.upload', 'feedback.manage', 'feedback.assigned', 'translations.manage', 'audit.view'],
  editor: ['content.create', 'content.edit', 'files.upload', 'feedback.assigned'],
  teacher: ['files.upload'],
  student: []
}

// Voor deze rechten moet tweestapsverificatie aan staan.
export const NEEDS_2FA = new Set(['content.review', 'content.publish', 'users.manage', 'settings.manage'])

export async function loadPermissions (conn, userId) {
  const fromRoles = await conn.execute(
    `SELECT DISTINCT rp.permission_code AS code FROM user_roles ur
     JOIN role_permissions rp ON rp.role_code = ur.role_code WHERE ur.user_id = ?`, [userId])
  const extra = await conn.execute('SELECT permission_code AS code, granted FROM user_permissions WHERE user_id = ?', [userId])
  const set = new Set(fromRoles.map((r) => r.code))
  for (const e of extra) Number(e.granted) ? set.add(e.code) : set.delete(e.code)
  return set
}

// Geeft null als het mag, anders de reden waarom niet.
export function denyReason (user, permission) {
  if (!user) return 'Niet ingelogd'
  if (!user.permissions.has(permission)) return 'Je hebt hier geen rechten voor'
  if (NEEDS_2FA.has(permission) && !user.totp_enabled) return 'Zet eerst tweestapsverificatie aan'
  return null
}

export const can = (user, permission) => denyReason(user, permission) === null
