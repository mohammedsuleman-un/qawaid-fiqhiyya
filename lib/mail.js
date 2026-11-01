// E-mail versturen via Resend (https://resend.com). Nodig in Cloudflare Pages:
// secret RESEND_API_KEY en eventueel var MAIL_FROM (standaard noreply@zuiverebron.nl).
// Zonder sleutel wordt er niets verstuurd; een mislukte mail mag een aanmelding nooit
// laten mislukken, dus fouten worden alleen gelogd.

const DEFAULT_FROM = 'De Zuivere Bron <noreply@zuiverebron.nl>'

export async function sendMail (env, { to, subject, html, text }, fetchFn = fetch) {
  if (!env || !env.RESEND_API_KEY) {
    console.warn('Mail niet verstuurd: RESEND_API_KEY ontbreekt')
    return { skipped: true }
  }
  try {
    const res = await fetchFn('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: 'Bearer ' + env.RESEND_API_KEY, 'content-type': 'application/json' },
      body: JSON.stringify({ from: env.MAIL_FROM || DEFAULT_FROM, to: [to], subject, html, text })
    })
    if (!res.ok) {
      console.error('Resend gaf', res.status, await res.text())
      return { ok: false, status: res.status }
    }
    return { ok: true }
  } catch (err) {
    console.error('Mail versturen mislukt', err)
    return { ok: false }
  }
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

const TEXTS = {
  nl: {
    subject: 'Welkom bij De Zuivere Bron: je account is aangemaakt',
    hello: (n) => `Assalamu ʿalaykum ${n},`,
    body: 'Je hebt je aangemeld bij De Zuivere Bron. Je account is aangemaakt en je kunt meteen beginnen met studeren.',
    email: 'Je logt in met dit e-mailadres:',
    button: 'Naar mijn studieomgeving',
    howTitle: 'Zo werkt het',
    steps: [
      'Inloggen: ga naar zuiverebron.nl/student, kies het tabblad Inloggen en vul je e-mailadres en wachtwoord in.',
      'Boeken kiezen: zet bij Mijn boeken losse boeken of een hele reeks (bijvoorbeeld ZAD niveau 1) op je profiel.',
      'Studeren: vink gelezen lessen af, maak een weekplanning en oefen met de toetsen bij elke eenheid. Je resultaten staan bij Resultaten.'
    ],
    twoStepTitle: 'Tweestapsverificatie',
    twoStep: 'Als student heb je geen tweestapsverificatie nodig: je logt in met alleen je e-mailadres en wachtwoord. Krijg je later een taak waarbij je inhoud goedkeurt, publiceert of gebruikers beheert (zoals beoordelaar of beheerder), dan moet je tweestapsverificatie aanzetten. Dat doe je in Beheer onder Mijn profiel: scan de QR-code met een authenticator-app (zoals Google Authenticator of Microsoft Authenticator) en vul de code van 6 cijfers in. Daarna vraagt de site bij het inloggen steeds om een nieuwe code uit die app.',
    forgot: 'Wachtwoord vergeten? Vraag een beheerder van De Zuivere Bron om een herstellink.',
    notYou: 'Heb jij je niet aangemeld? Dan kun je deze mail negeren of ons laten weten dat iemand jouw e-mailadres gebruikte.',
    bye: 'Veel succes met je studie,',
    team: 'De Zuivere Bron'
  },
  ar: {
    subject: 'مرحبًا بك في النبع الصافي: تمّ إنشاء حسابك',
    hello: (n) => `السلام عليكم ${n}،`,
    body: 'لقد سجّلت في النبع الصافي. تمّ إنشاء حسابك ويمكنك أن تبدأ الدراسة الآن.',
    email: 'تسجّل الدخول بهذا البريد الإلكتروني:',
    button: 'إلى صفحة دراستي',
    howTitle: 'كيف تستعمل الموقع',
    steps: [
      'تسجيل الدخول: اذهب إلى zuiverebron.nl/student واختر «تسجيل الدخول» ثم أدخل بريدك الإلكتروني وكلمة المرور.',
      'اختيار الكتب: في «كتبي» أضف إلى ملفك كتبًا مفردة أو سلسلة كاملة (مثل المستوى الأول من زاد).',
      'الدراسة: علّم الدروس التي قرأتها، وضع خطة أسبوعية، وتدرّب بالاختبارات في كل وحدة. تجد نتائجك في «النتائج».'
    ],
    twoStepTitle: 'التحقق بخطوتين',
    twoStep: 'لا تحتاج بصفتك طالبًا إلى التحقق بخطوتين، فتدخل ببريدك الإلكتروني وكلمة المرور فقط. وإن صارت لك لاحقًا مهمة فيها قبول المحتوى أو نشره أو إدارة المستخدمين (كالمراجع أو المشرف)، فعليك تفعيل التحقق بخطوتين. تفعله في «الإدارة» تحت «ملفي»: امسح رمز QR بتطبيق مصادقة (مثل Google Authenticator أو Microsoft Authenticator) وأدخل الرمز المكوّن من ستة أرقام. وبعد ذلك يطلب منك الموقع عند كل دخول رمزًا جديدًا من ذلك التطبيق.',
    forgot: 'نسيت كلمة المرور؟ اطلب من أحد مشرفي النبع الصافي رابطًا لإعادة تعيينها.',
    notYou: 'إن لم تكن أنت من سجّل، فتجاهل هذه الرسالة أو أخبرنا أن أحدًا استعمل بريدك.',
    bye: 'وفّقك الله في دراستك،',
    team: 'النبع الصافي'
  }
}

// Bevestigingsmail na het aanmaken van een studentenaccount, in de taal van de aanmelder.
export function welcomeMail ({ name, email, lang, origin }) {
  const t = TEXTS[lang === 'ar' ? 'ar' : 'nl']
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const link = new URL('/student/' + (lang === 'ar' ? '?lang=ar' : ''), origin).href
  const logo = new URL('/assets/logo/logo-192.png', origin).href
  const html = `<!doctype html><html lang="${lang === 'ar' ? 'ar' : 'nl'}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;background:#f6f3ec;font-family:Georgia,'Amiri','Times New Roman',serif;color:#1f2a28">
<div dir="${dir}" style="max-width:560px;margin:0 auto;padding:24px 16px;text-align:${dir === 'rtl' ? 'right' : 'left'}">
<div style="text-align:center;margin-bottom:16px"><img src="${logo}" alt="" width="72" height="72" style="border:0"></div>
<div style="background:#fff;border-top:4px solid #04403a;border-radius:8px;padding:24px;line-height:1.7;font-size:16px">
<p style="margin-top:0">${esc(t.hello(name))}</p>
<p>${esc(t.body)}</p>
<p>${esc(t.email)}<br><strong dir="ltr">${esc(email)}</strong></p>
<p style="text-align:center;margin:28px 0"><a href="${link}" style="background:#04403a;color:#fff;text-decoration:none;padding:12px 22px;border-radius:6px;display:inline-block">${esc(t.button)}</a></p>
<h2 style="font-size:18px;color:#04403a;margin:24px 0 8px">${esc(t.howTitle)}</h2>
<ol style="padding-${dir === 'rtl' ? 'right' : 'left'}:20px;margin:0">${t.steps.map((x) => `<li style="margin-bottom:8px">${esc(x)}</li>`).join('')}</ol>
<h2 style="font-size:18px;color:#04403a;margin:24px 0 8px">${esc(t.twoStepTitle)}</h2>
<p style="margin-top:0">${esc(t.twoStep)}</p>
<p>${esc(t.forgot)}</p>
<p style="font-size:14px;color:#5b6461">${esc(t.notYou)}</p>
<p style="margin-bottom:0">${esc(t.bye)}<br><span style="color:#b5873f">${esc(t.team)}</span></p>
</div></div></body></html>`
  const text = [t.hello(name), '', t.body, '', t.email, email, '', t.button + ': ' + link, '',
    t.howTitle, ...t.steps.map((x, i) => `${i + 1}. ${x}`), '', t.twoStepTitle, t.twoStep, '', t.forgot, '', t.notYou, '', t.bye, t.team].join('\n')
  return { to: email, subject: t.subject, html, text }
}

const ROLE_NAMES = {
  superadmin: { nl: 'superbeheerder', ar: 'المشرف العام' },
  admin: { nl: 'beheerder', ar: 'مشرف' },
  editor: { nl: 'redacteur', ar: 'محرر' },
  teacher: { nl: 'docent', ar: 'مدرّس' },
  student: { nl: 'student', ar: 'طالب' }
}
// Rollen die rechten hebben waarvoor tweestapsverificatie verplicht is (zie NEEDS_2FA in rbac.js).
const ROLE_NEEDS_2FA = new Set(['superadmin', 'admin'])

const INVITE = {
  nl: {
    title: 'Uitnodiging',
    hello: 'Assalamu ʿalaykum,',
    body: (role, by) => `${by ? by + ' heeft je' : 'Je bent'} uitgenodigd om als ${role} mee te werken aan De Zuivere Bron.`,
    button: 'Uitnodiging accepteren',
    valid: 'De link is 7 dagen geldig en werkt maar één keer.',
    steps: [
      'Klik op de knop, vul je naam in en kies een wachtwoord van minstens 10 tekens.',
      'Daarna log je voortaan in op zuiverebron.nl/beheer met dit e-mailadres en je wachtwoord.'
    ],
    twoStepTitle: 'Tweestapsverificatie',
    twoStepNeeded: 'Voor jouw rol is tweestapsverificatie nodig om te kunnen goedkeuren, publiceren of gebruikers te beheren. Zet die meteen na je eerste keer inloggen aan via Mijn profiel: installeer een authenticator-app (zoals Google Authenticator of Microsoft Authenticator), scan de QR-code en vul de code van 6 cijfers in. Daarna vraagt de site bij elke keer inloggen om een nieuwe code uit die app. Bewaar je telefoon dus goed; ben je hem kwijt, vraag dan een superbeheerder om hulp.',
    twoStepOptional: 'Voor jouw rol is tweestapsverificatie niet verplicht, maar wel aan te raden. Je zet hem aan via Mijn profiel: installeer een authenticator-app (zoals Google Authenticator of Microsoft Authenticator), scan de QR-code en vul de code van 6 cijfers in.',
    notYou: 'Verwachtte je deze uitnodiging niet? Dan kun je deze mail negeren.'
  },
  ar: {
    title: 'دعوة',
    hello: 'السلام عليكم،',
    body: (role, by) => `${by ? 'دعاك ' + by : 'دُعيت'} للمشاركة في النبع الصافي بصفة ${role}.`,
    button: 'قبول الدعوة',
    valid: 'الرابط صالح لمدة سبعة أيام ويُستعمل مرة واحدة.',
    steps: [
      'اضغط على الزر، واكتب اسمك، واختر كلمة مرور لا تقل عن عشرة أحرف.',
      'بعد ذلك تدخل دائمًا من zuiverebron.nl/beheer بهذا البريد الإلكتروني وكلمة مرورك.'
    ],
    twoStepTitle: 'التحقق بخطوتين',
    twoStepNeeded: 'يلزم دورَك التحققُ بخطوتين لتتمكن من القبول والنشر وإدارة المستخدمين. فعّله بعد أول دخول من «ملفي»: ثبّت تطبيق مصادقة (مثل Google Authenticator أو Microsoft Authenticator)، وامسح رمز QR، وأدخل الرمز المكوّن من ستة أرقام. وبعد ذلك يطلب منك الموقع عند كل دخول رمزًا جديدًا من ذلك التطبيق، فاحفظ هاتفك جيدًا، وإن فقدته فاطلب المساعدة من المشرف العام.',
    twoStepOptional: 'التحقق بخطوتين غير لازم لدورك، لكنه مستحسن. تفعّله من «ملفي»: ثبّت تطبيق مصادقة (مثل Google Authenticator أو Microsoft Authenticator)، وامسح رمز QR، وأدخل الرمز المكوّن من ستة أرقام.',
    notYou: 'إن لم تكن تنتظر هذه الدعوة فتجاهل هذه الرسالة.'
  }
}

function inviteBlock (lang, { role, link, inviter }) {
  const t = INVITE[lang]
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const roleName = (ROLE_NAMES[role] || ROLE_NAMES.editor)[lang]
  const twoStep = ROLE_NEEDS_2FA.has(role) ? t.twoStepNeeded : t.twoStepOptional
  const html = `<div dir="${dir}" lang="${lang}" style="text-align:${dir === 'rtl' ? 'right' : 'left'}">
<p style="margin-top:0">${esc(t.hello)}</p>
<p>${esc(t.body(roleName, inviter))}</p>
<p style="text-align:center;margin:24px 0"><a href="${link}" style="background:#04403a;color:#fff;text-decoration:none;padding:12px 22px;border-radius:6px;display:inline-block">${esc(t.button)}</a></p>
<p style="font-size:14px;color:#5b6461">${esc(t.valid)}</p>
<ol style="padding-${dir === 'rtl' ? 'right' : 'left'}:20px">${t.steps.map((x) => `<li style="margin-bottom:8px">${esc(x)}</li>`).join('')}</ol>
<h2 style="font-size:18px;color:#04403a;margin:20px 0 8px">${esc(t.twoStepTitle)}</h2>
<p style="margin-top:0">${esc(twoStep)}</p>
<p style="font-size:14px;color:#5b6461;margin-bottom:0">${esc(t.notYou)}</p></div>`
  const text = [t.hello, '', t.body(roleName, inviter), '', t.button + ': ' + link, t.valid, '', ...t.steps.map((x, i) => `${i + 1}. ${x}`), '', t.twoStepTitle, twoStep, '', t.notYou].join('\n')
  return { html, text }
}

// Uitnodiging voor een medewerker (beheerder, redacteur, docent...). De taal van de
// ontvanger is nog onbekend, dus de mail is tweetalig: eerst Nederlands, dan Arabisch.
export function inviteMail ({ email, role, link, inviter, origin }) {
  const logo = new URL('/assets/logo/logo-192.png', origin).href
  const nl = inviteBlock('nl', { role, link, inviter })
  const ar = inviteBlock('ar', { role, link, inviter })
  const html = `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;background:#f6f3ec;font-family:Georgia,'Amiri','Times New Roman',serif;color:#1f2a28">
<div style="max-width:560px;margin:0 auto;padding:24px 16px">
<div style="text-align:center;margin-bottom:16px"><img src="${logo}" alt="" width="72" height="72" style="border:0"></div>
<div style="background:#fff;border-top:4px solid #04403a;border-radius:8px;padding:24px;line-height:1.7;font-size:16px">
${nl.html}
<hr style="border:0;border-top:1px solid #e4ddcc;margin:28px 0">
${ar.html}
<p style="margin:24px 0 0;text-align:center;color:#b5873f">De Zuivere Bron · النبع الصافي</p>
</div></div></body></html>`
  return {
    to: email,
    subject: 'Uitnodiging voor De Zuivere Bron · دعوة إلى النبع الصافي',
    html,
    text: nl.text + '\n\n———\n\n' + ar.text + '\n\nDe Zuivere Bron · النبع الصافي'
  }
}
