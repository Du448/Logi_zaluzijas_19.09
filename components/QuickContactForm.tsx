"use client"

import { useEffect, useRef, useState } from "react"

export type QuickContactFormProps = {
  variant?: "dark" | "blue"
  requireCaptcha?: boolean
}

export function QuickContactForm({ variant = "dark", requireCaptcha = false }: QuickContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState<string>("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null)
  const recaptchaWidgetIdRef = useRef<number | null>(null)

  const isDark = variant === "dark"
  const labelText = isDark ? "text-blue-100" : "text-white"
  const inputClasses = isDark
    ? "mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
    : "mt-1 w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-blue-900 placeholder:text-blue-400 focus:border-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/30"
  const buttonClasses = isDark
    ? "mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
    : "mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
  const linkText = isDark ? "text-blue-100 hover:text-white" : "text-blue-100 hover:text-white"

  useEffect(() => {
    if (!requireCaptcha || !siteKey || typeof window === "undefined") return

    const doRender = () => {
      if (!recaptchaContainerRef.current || !window.grecaptcha || recaptchaWidgetIdRef.current !== null) return
      // @ts-ignore - grecaptcha is provided by script
      recaptchaWidgetIdRef.current = window.grecaptcha.render(recaptchaContainerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => {
          setCaptchaToken(token)
          setStatus((s) => (s === "error" ? "idle" : s))
          setMessage("")
        },
        "expired-callback": () => setCaptchaToken(null),
        "error-callback": () => setCaptchaToken(null),
      })
    }

    const renderCaptcha = () => {
      // @ts-ignore
      if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
        doRender()
        return
      }
      // @ts-ignore
      if (typeof window.grecaptcha?.ready === "function") {
        // @ts-ignore
        window.grecaptcha.ready(() => {
          // @ts-ignore
          if (typeof window.grecaptcha?.render === "function") doRender()
        })
      }
    }

    // If script already present
    const existing = document.getElementById("google-recaptcha") as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener("load", renderCaptcha)
      return () => existing.removeEventListener("load", renderCaptcha)
    }
    // Inject script
    const script = document.createElement("script")
    script.id = "google-recaptcha"
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit"
    script.async = true
    script.defer = true
    script.addEventListener("load", renderCaptcha)
    document.body.appendChild(script)
    return () => script.removeEventListener("load", renderCaptcha)
  }, [siteKey, requireCaptcha])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const phone = String(data.get("phone") || "").trim()

    if (!name && !phone) {
      setStatus("error")
      setMessage("Lūdzu aizpildiet vismaz vārdu vai tālruni.")
      return
    }

    try {
      setStatus("loading")
      setMessage("")

      const payload = {
        name,
        phone,
        message: `Ātrā forma no ${typeof window !== "undefined" ? window.location.pathname : "/logi"}`,
        source: 'quick',
        ...(requireCaptcha && siteKey ? { recaptchaToken: captchaToken } : {}),
      }

      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.message || err?.error || "Neizdevās nosūtīt pieteikumu.")
      }

      setStatus("success")
      setMessage("Paldies! Pieteikums nosūtīts. Sazināsimies drīzumā.")
      form.reset()
    } catch (err: unknown) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Radās kļūda, lūdzu mēģiniet vēlreiz.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-[repeat(3,minmax(0,1fr))] items-end">
      <label className="sm:col-span-1 text-left">
        <span className={`text-sm font-medium ${labelText}`}>Vārds</span>
        <input type="text" name="name" placeholder="Jūsu vārds" className={inputClasses} />
      </label>
      <label className="sm:col-span-1 text-left">
        <span className={`text-sm font-medium ${labelText}`}>Telefons</span>
        <input type="tel" name="phone" placeholder="+371 ..." className={inputClasses} />
      </label>
      <div className="sm:col-span-1 flex flex-col sm:relative">
        {/* Invisible spacer to align with input labels in other columns */}
        <div className={`text-sm font-medium ${labelText} mb-1 opacity-0 select-none`}>Vietturis</div>
        <button type="submit" className={buttonClasses} disabled={status === "loading" || (requireCaptcha && !!siteKey && !captchaToken)}>
          {status === "loading" ? "Sūtām..." : "Sazināties"}
        </button>
        {requireCaptcha && siteKey && (
          <div className="mt-3 self-start">
            <div ref={recaptchaContainerRef} />
          </div>
        )}
        {/* Status message: normal flow on mobile, absolute below button on sm+ */}
        <div className="mt-3 sm:absolute sm:left-0 sm:top-full sm:mt-2" aria-live="polite">
          <p className={`text-sm ${
            status === "success" ? "text-emerald-100" : status === "error" ? "text-red-100" : "text-transparent"
          }`}>{message || '.'}</p>
        </div>
      </div>
    </form>
  )
}
