import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(404).end()
  }

  try {
    const keys = [
      'SMTP_HOST',
      'SMTP_PORT',
      'SMTP_SECURE',
      'SMTP_USER',
      'SMTP_PASS',
      'CONTACT_TO_EMAIL',
      'CONTACT_FROM_EMAIL',
    ]

    const cwd = process.cwd()
    const envPath = path.join(cwd, '.env.local')
    const fileExists = fs.existsSync(envPath)

    const envSnapshot = Object.fromEntries(
      keys.map((k) => [
        k,
        process.env[k]
          ? (k === 'SMTP_PASS' ? '(set: hidden)' : process.env[k])
          : '(missing)'
      ])
    )

    let parsedKeys = []
    if (fileExists) {
      try {
        const content = fs.readFileSync(envPath, 'utf8')
        parsedKeys = content
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l && !l.startsWith('#'))
          .map((l) => (l.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=/)?.[1]))
          .filter(Boolean)
      } catch {}
    }

    return res.status(200).json({
      nodeEnv: process.env.NODE_ENV,
      cwd,
      envFile: { path: envPath, exists: fileExists, parsedKeys },
      envSnapshot,
    })
  } catch (e) {
    return res.status(500).json({ error: String(e) })
  }
}
