import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Increase JSON body size to allow small attachments via base64 (adjust as needed)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

// Fallback: manual .env.local loader for cases when Next.js hasn't picked up env changes yet
function hydrateEnvFromFileIfMissing() {
  try {
    const expectedKeys = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_SECURE",
      "SMTP_USER",
      "SMTP_PASS",
      "CONTACT_TO_EMAIL",
      "CONTACT_FROM_EMAIL",
    ];
    const isMissing = (k) => !process.env[k] || String(process.env[k]).trim() === "";
    const missingBefore = expectedKeys.filter(isMissing);
    if (missingBefore.length === 0) return; // nothing to do

    const cwd = process.cwd();
    const envPath = path.join(cwd, ".env.local");
    if (!fs.existsSync(envPath)) return;

    let content = fs.readFileSync(envPath, "utf8");
    // Detect potential UTF-16LE (presence of many NULs)
    const looksUtf16 = content.includes("\u0000");
    if (looksUtf16) {
      try { content = fs.readFileSync(envPath, "utf16le"); } catch {}
    }
    let lines = content.split(/\r?\n/);
    const parsed = {};
    for (const raw of lines) {
      const line = raw.trim();
      if (!line || line.startsWith("#")) continue;
      const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (!m) continue;
      let [, key, value] = m;
      // strip surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      parsed[key] = value;
    }
    // If nothing parsed and we didn't already try utf16le, attempt utf16le now
    if (Object.keys(parsed).length === 0 && !looksUtf16) {
      try {
        content = fs.readFileSync(envPath, "utf16le");
        lines = content.split(/\r?\n/);
        for (const raw of lines) {
          const line = raw.trim();
          if (!line || line.startsWith("#")) continue;
          const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
          if (!m) continue;
          let [, key, value] = m;
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          parsed[key] = value;
        }
      } catch {}
    }

    const lowerMap = Object.fromEntries(
      Object.entries(parsed).map(([k, v]) => [k.toLowerCase(), v])
    );

    const tryResolve = (targetKey) => {
      if (!isMissing(targetKey)) return;
      // exact
      if (parsed[targetKey] !== undefined) {
        process.env[targetKey] = parsed[targetKey];
        return;
      }
      // case-insensitive
      const lower = targetKey.toLowerCase();
      if (lowerMap[lower] !== undefined) {
        process.env[targetKey] = lowerMap[lower];
        return;
      }
      // forgiving contains-based match (helps with typos like SMTP_PAS vs SMTP_PASS)
      const candidate = Object.keys(parsed).find(
        (k) => k.replace(/_/g, "").toLowerCase().includes(lower.replace(/_/g, ""))
      );
      if (candidate && parsed[candidate] !== undefined) {
        process.env[targetKey] = parsed[candidate];
      }
    };

    for (const key of expectedKeys) tryResolve(key);
  } catch {}
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Hydrate env from .env.local if Next.js hasn't loaded it yet
    hydrateEnvFromFileIfMissing();
    // Ātra pārbaude
    console.log("HOST:", process.env.SMTP_HOST);
    // 🔹 DEBUG — izdrukā SMTP mainīgos
    console.log("SMTP settings:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
    });

    // Snapshot which envs are present (without exposing secrets)
    const envSnapshot = {
      SMTP_HOST: process.env.SMTP_HOST ? "(set)" : "(missing)",
      SMTP_PORT: process.env.SMTP_PORT ? "(set)" : "(missing)",
      SMTP_SECURE: process.env.SMTP_SECURE ? "(set)" : "(missing)",
      SMTP_USER: process.env.SMTP_USER ? "(set)" : "(missing)",
      SMTP_PASS: process.env.SMTP_PASS ? "(set)" : "(missing)",
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ? "(set)" : "(missing)",
      CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL ? "(set)" : "(missing)",
    };
    console.log("ENV snapshot:", envSnapshot);

    // Additional diagnostics: current working dir and .env.local existence
    try {
      const cwd = process.cwd();
      const envPath = path.join(cwd, ".env.local");
      const exists = fs.existsSync(envPath);
      console.log("CWD:", cwd);
      console.log(".env.local exists at CWD?", exists);
    } catch (_) {}

    // Validate required envs to avoid defaulting to localhost
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    const missing = [
      ["SMTP_HOST", SMTP_HOST],
      ["SMTP_PORT", SMTP_PORT],
      ["SMTP_USER", SMTP_USER],
      ["SMTP_PASS", SMTP_PASS],
      ["CONTACT_TO_EMAIL", CONTACT_TO_EMAIL],
    ]
      .filter(([k, v]) => !v)
      .map(([k]) => k);

    if (missing.length) {
      return res.status(500).json({
        message: "Trūkst .env.local konfigurācijas mainīgie",
        missing,
      });
    }

    // Optional TLS flags to help in development environments where a self-signed cert
    // may be injected by antivirus/corporate proxy. Do NOT enable these in production.
    const allowSelfSigned = process.env.SMTP_ALLOW_SELF_SIGNED === "true";
    const ignoreTLS = process.env.SMTP_IGNORE_TLS === "true";
    const requireTLS = process.env.SMTP_REQUIRE_TLS === "true";

    // Izveido SMTP transportu ar .env.local datiem
    const transportOptions = {
      host: SMTP_HOST,
      port: Number(SMTP_PORT), // pārvērš string uz skaitli
      secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    };

    if (allowSelfSigned) {
      transportOptions.tls = {
        ...(transportOptions.tls || {}),
        rejectUnauthorized: false,
      };
    }
    if (ignoreTLS) {
      transportOptions.ignoreTLS = true;
    }
    if (requireTLS) {
      transportOptions.requireTLS = true;
    }

    const transporter = nodemailer.createTransport(transportOptions);

    // Verify connection/login before attempting to send
    try {
      await transporter.verify();
      console.log("SMTP verify: OK");
    } catch (verifyErr) {
      console.error("SMTP verify failed:", verifyErr);
      return res.status(500).json({
        message: "SMTP pieslēgums vai autentifikācija neizdevās",
        error: {
          code: verifyErr?.code,
          command: verifyErr?.command,
          response: verifyErr?.response,
          responseCode: verifyErr?.responseCode,
        },
      });
    }

    // Accept contact form payload and compose email
    let subject = "Testa e-pasts no Next.js";
    let text = "Sveiks! Šis ir testa e-pasts no Nodemailer + Next.js.";
    let html = undefined;
    let attachmentsFromClient = [];
    try {
      const isJson = req.headers["content-type"]?.includes("application/json");
      const body = isJson && req.body && typeof req.body === "object" ? req.body : {};

      const name = body?.name ? String(body.name) : "";
      const email = body?.email ? String(body.email) : "";
      const phone = body?.phone ? String(body.phone) : "";
      const company = body?.company ? String(body.company) : "";
      const message = body?.message ? String(body.message) : "";
      const recaptchaToken = body?.recaptchaToken ? String(body.recaptchaToken) : "";

      const incomingAttachments = Array.isArray(body?.attachments) ? body.attachments : [];
      // Sanitize attachments: only allow up to 8MB total and 10 files
      const MAX_FILES = 10;
      const MAX_TOTAL = 8 * 1024 * 1024; // 8 MB
      let totalSize = 0;
      for (const a of incomingAttachments) totalSize += Number(a?.size || 0);
      if (totalSize <= MAX_TOTAL) {
        attachmentsFromClient = incomingAttachments.slice(0, MAX_FILES).map((a) => ({
          filename: String(a?.filename || "attachment"),
          content: String(a?.content || ""),
          encoding: (a?.encoding === "base64" ? "base64" : undefined),
          contentType: a?.contentType ? String(a.contentType) : undefined,
        })).filter((x) => x.content);
      }

      if (process.env.RECAPTCHA_SECRET_KEY) {
        if (!recaptchaToken) {
          return res.status(400).json({ message: "Nav derīgs reCAPTCHA tokens." });
        }

        const verifyResp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: recaptchaToken,
          }).toString(),
        });

        if (!verifyResp.ok) {
          return res.status(502).json({ message: "Neizdevās pārbaudīt reCAPTCHA." });
        }

        const verifyJson = await verifyResp.json();
        if (!verifyJson.success) {
          console.error("reCAPTCHA verification failed", verifyJson);
          return res.status(400).json({ message: "reCAPTCHA pārbaude neizdevās." });
        }
      }

      if (name || email || message) {
        subject = `Jauna ziņa no kontaktformas — ${name || email || "Viesis"}`;
        text = [
          name ? `Vārds: ${name}` : undefined,
          email ? `E-pasts: ${email}` : undefined,
          phone ? `Tālrunis: ${phone}` : undefined,
          company ? `Uzņēmums: ${company}` : undefined,
          "",
          message ? `Ziņa:\n${message}` : undefined,
        ].filter(Boolean).join("\n");

        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="margin:0 0 12px;">Jauna ziņa no kontaktformas</h2>
            ${name ? `<p><strong>Vārds:</strong> ${name}</p>` : ""}
            ${email ? `<p><strong>E-pasts:</strong> ${email}</p>` : ""}
            ${phone ? `<p><strong>Tālrunis:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Uzņēmums:</strong> ${company}</p>` : ""}
            <hr style="border:none;border-top:1px solid #eee;margin:12px 0;" />
            ${message ? `<p style="white-space:pre-wrap;">${message}</p>` : ""}
            ${attachmentsFromClient.length ? `<p style="margin-top:12px;opacity:.7;">Pievienoti faili: ${attachmentsFromClient.length}</p>` : ""}
          </div>
        `;
      } else if (body?.subject || body?.text) {
        // Backwards-compatible manual subject/text
        subject = String(body.subject || subject);
        text = String(body.text || text);
      }
    } catch (_) {}

    // Epasta saturs
    const mailOptions = {
      // Many providers (incl. Hostinger) require From to match the authenticated user
      from: SMTP_USER,
      to: CONTACT_TO_EMAIL,
      subject,
      text,
      ...(html ? { html } : {}),
      // Let replies go to the sender's email if provided
      ...(req.body?.email ? { replyTo: String(req.body.email) } : {}),
      ...(attachmentsFromClient.length ? { attachments: attachmentsFromClient } : {}),
    };

    // Nosūta
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "E-pasts veiksmīgi nosūtīts!" });
  } catch (error) {
    console.error("SMTP kļūda:", error);
    return res.status(500).json({ message: "E-pastu neizdevās nosūtīt", error });
  }
}
