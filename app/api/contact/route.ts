import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

// Types
type ContactPayload = {
  name: string
  email: string
  message: string
  phone?: string
  company?: string
}

function isValidEmail(email: string): boolean {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>

    // Validate
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { error: 'Trūkst obligātie lauki: vārds, e-pasts, ziņa.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: 'Nederīgs e-pasts.' }, { status: 400 })
    }

    // Env configuration
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_SECURE,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env as Record<string, string | undefined>

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: 'Nav konfigurēts e-pasta SMTP (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS).' },
        { status: 500 }
      )
    }

    // Optional TLS flags to help in development environments where a self-signed cert
    // may be injected by antivirus/corporate proxy. Do NOT enable these in production.
    const allowSelfSigned = process.env.SMTP_ALLOW_SELF_SIGNED === 'true'
    const ignoreTLS = process.env.SMTP_IGNORE_TLS === 'true'
    const requireTLS = process.env.SMTP_REQUIRE_TLS === 'true'

    const transportOptions: SMTPTransport.Options = {
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true' || Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    }

    if (allowSelfSigned) {
      transportOptions.tls = {
        ...(transportOptions.tls || {}),
        rejectUnauthorized: false,
      }
    }
    if (ignoreTLS) {
      transportOptions.ignoreTLS = true
    }
    if (requireTLS) {
      transportOptions.requireTLS = true
    }

    const transporter = nodemailer.createTransport(transportOptions)

    const to = CONTACT_TO_EMAIL || 'info@vestalux.lv'
    const from = CONTACT_FROM_EMAIL || `Vestalux <${SMTP_USER}>`

    const subject = `Jauna ziņa no kontaktformas — ${body.name}`

    const text = [
      `Vārds: ${body.name}`,
      `E-pasts: ${body.email}`,
      body.phone ? `Tālrunis: ${body.phone}` : undefined,
      body.company ? `Uzņēmums: ${body.company}` : undefined,
      '',
      'Ziņa:',
      body.message,
    ]
      .filter(Boolean)
      .join('\n')

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 12px;">Jauna ziņa no kontaktformas</h2>
        <p><strong>Vārds:</strong> ${body.name}</p>
        <p><strong>E-pasts:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Tālrunis:</strong> ${body.phone}</p>` : ''}
        ${body.company ? `<p><strong>Uzņēmums:</strong> ${body.company}</p>` : ''}
        <hr style="border:none;border-top:1px solid #eee;margin:12px 0;" />
        <p style="white-space:pre-wrap;">${body.message}</p>
      </div>
    `

    await transporter.sendMail({ from, to, subject, text, html })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Neizdevās nosūtīt ziņu.' }, { status: 500 })
  }
}
