"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, parameters: RecaptchaRenderParameters) => number
      reset: (optWidgetId?: number) => void
      ready?: (callback: () => void) => void
    }
  }
}

type RecaptchaRenderParameters = {
  sitekey: string
  callback?: (token: string) => void
  "expired-callback"?: () => void
  "error-callback"?: () => void
}
type Status = "idle" | "loading" | "success" | "error"

export default function ContactFormModern(){
  const searchParams = useSearchParams()
  const calcPrefill = searchParams?.get("calc") ?? ""
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState<string>("")
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null)
  const recaptchaWidgetIdRef = useRef<number | null>(null)
  const MAX_TOTAL = 8 * 1024 * 1024 // 8 MB
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0)
  const overLimit = totalBytes > MAX_TOTAL
  const [imagePreviews, setImagePreviews] = useState<{ key: string; url: string; name: string; size: number }[]>([])
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""

  const resetRecaptcha = () => {
    if (typeof window !== "undefined" && window.grecaptcha && recaptchaWidgetIdRef.current !== null) {
      window.grecaptcha.reset(recaptchaWidgetIdRef.current)
    }
    setCaptchaToken(null)
  }

  // Build and cleanup image object URLs for previews
  useEffect(() => {
    const makeKey = (f: File) => `${f.name}|${f.size}|${f.lastModified}`
    const previews = files
      .filter((f) => f.type && f.type.startsWith("image/"))
      .map((f) => ({ key: makeKey(f), url: URL.createObjectURL(f), name: f.name, size: f.size }))

    setImagePreviews(previews)

    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url))
    }
  }, [files])

  useEffect(() => {
    if (!siteKey || typeof window === "undefined") {
      return
    }

    const doRender = () => {
      if (!recaptchaContainerRef.current || !window.grecaptcha || recaptchaWidgetIdRef.current !== null) {
        return
      }
      recaptchaWidgetIdRef.current = window.grecaptcha.render(recaptchaContainerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => {
          setCaptchaToken(token)
          setStatus((prev) => (prev === "error" ? "idle" : prev))
          setMessage("")
        },
        "expired-callback": () => {
          setCaptchaToken(null)
        },
        "error-callback": () => {
          setCaptchaToken(null)
        },
      })
    }

    const renderCaptcha = () => {
      if (!window.grecaptcha) {
        return
      }
      if (typeof window.grecaptcha.render === "function") {
        doRender()
        return
      }
      if (typeof window.grecaptcha.ready === "function") {
        window.grecaptcha.ready(() => {
          if (typeof window.grecaptcha?.render === "function") {
            doRender()
          }
        })
      }
    }

    if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
      renderCaptcha()
      return
    }

    const scriptId = "google-recaptcha"
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null

    if (existingScript) {
      existingScript.addEventListener("load", renderCaptcha)
      return () => existingScript.removeEventListener("load", renderCaptcha)
    }

    const script = document.createElement("script")
    script.id = scriptId
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit"
    script.async = true
    script.defer = true
    script.addEventListener("load", renderCaptcha)
    document.body.appendChild(script)

    return () => {
      script.removeEventListener("load", renderCaptcha)
    }
  }, [siteKey])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // Basic front-end validation for required fields
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const messageText = String(data.get("message") || "").trim()
    if (!name || !email || !messageText) {
      setStatus("error")
      setMessage("Lūdzu aizpildiet visus obligātos laukus: Vārds, E-pasts un Ziņa.")
      return
    }
    if (overLimit) {
      setStatus("error")
      setMessage("Kopējais failu apjoms pārsniedz 8 MB. Lūdzu noņemiet kādu failu vai samaziniet izmēru.")
      return
    }
    if (!captchaToken) {
      setStatus("error")
      setMessage("Lūdzu apstipriniet, ka neesat robots.")
      return
    }

    setStatus("loading")
    setMessage("")

    // Collect files from state and convert to base64 for JSON-safe transport

    const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
      let binary = ""
      const bytes = new Uint8Array(buffer)
      const len = bytes.byteLength
      for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i])
      return btoa(binary)
    }

    const attachments = await Promise.all(
      files.map(async (file: File) => {
        const buf = await file.arrayBuffer()
        const base64 = arrayBufferToBase64(buf)
        return {
          filename: file.name,
          content: base64,
          contentType: file.type || undefined,
          encoding: "base64",
          size: file.size,
        }
      })
    )

    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      attachments,
      recaptchaToken: captchaToken,
    }

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || err?.message || "Neizdevās nosūtīt ziņu.")
      }

      setStatus("success")
      setMessage("Paldies! Jūsu ziņa ir nosūtīta. Mēs sazināsimies drīzumā.")
      form.reset()
      setFiles([])
      resetRecaptcha()
    } catch (error: unknown) {
      setStatus("error")
      setMessage(
        error instanceof Error ? error.message : "Radās kļūda, lūdzu mēģiniet vēlreiz."
      )
      resetRecaptcha()
    }
  }

  const onFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files
    if (!list || list.length === 0) return
    const incoming = Array.from(list)
    // Merge with existing files, dedupe by name+size+lastModified
    const key = (f: File) => `${f.name}|${f.size}|${f.lastModified}`
    const map = new Map<string, File>()
    ;[...files, ...incoming].forEach((f) => map.set(key(f), f))
    setFiles(Array.from(map.values()))
    // Clear the input value to allow selecting the same file again later
    e.target.value = ""
  }

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx))
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const list = e.dataTransfer.files
    if (!list || list.length === 0) return
    const incoming = Array.from(list)
    const key = (f: File) => `${f.name}|${f.size}|${f.lastModified}`
    const map = new Map<string, File>()
    ;[...files, ...incoming].forEach((f) => map.set(key(f), f))
    setFiles(Array.from(map.values()))
  }

  return (
    <form onSubmit={onSubmit} className="mt-10" aria-describedby="contact-status" noValidate>
      {/* Row 1: Name / Company */}
      <div className="grid md:grid-cols-2 gap-8">
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Vārds <span aria-hidden="true" className="text-red-300">*</span></span>
          <input
            name="name"
            required
            placeholder="Jūsu vārds"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
            aria-required="true"
          />
        </label>
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Uzņēmums</span>
          <input
            name="company"
            placeholder="(nav obligāti)"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
          />
        </label>
      </div>

      {/* Row 2: Email / Phone */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <label className="block text-sm text-white/80">
          <span className="block mb-3">E-pasts <span aria-hidden="true" className="text-red-300">*</span></span>
          <input
            name="email"
            type="email"
            required
            placeholder="jums@epasts.lv"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
            aria-required="true"
          />
        </label>
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Tālrunis</span>
          <input
            name="phone"
            placeholder="(nav obligāti)"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
          />
        </label>
      </div>

      {/* Row 3: Message */}
      <div className="mt-10">
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Ziņa <span aria-hidden="true" className="text-red-300">*</span></span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Pastāstiet īsumā par savu ideju vai vajadzībām"
            defaultValue={calcPrefill ? `${calcPrefill}\n\n` : undefined}
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2 resize-none"
            aria-required="true"
          />
        </label>
      </div>
      {/* Row 4: Files */}
      <div className="mt-10">
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              fileInputRef.current?.click()
            }
          }}
          className={`group rounded-md border-2 border-dashed px-4 py-6 text-center transition-all cursor-pointer outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-0 ${
            isDragging ? "border-emerald-400 bg-white/10" : "border-white/20 hover:border-white/30 bg-white/5"
          }`}
          role="button"
          aria-label="Ievelciet failus šeit vai klikšķiniet, lai izvēlētos"
          tabIndex={0}
       >
          <p className="text-sm text-white/80">
            Ievelciet failus šeit vai <span className="underline">izvēlieties</span>
          </p>
          <input
            ref={fileInputRef}
            name="files"
            type="file"
            multiple
            className="sr-only"
            onChange={onFilesChange}
            aria-hidden="true"
            tabIndex={-1}
          />
          <p className="mt-2 text-xs text-white/60">Atbalstītie formāti: attēli, PDF, DOCX u.c. (kopā līdz 8 MB)</p>
          <p className={`mt-2 text-xs ${overLimit ? "text-red-300" : "text-white/70"}`}>
            Kopējais apjoms: {(totalBytes / (1024 * 1024)).toFixed(2)} MB {overLimit ? "— pārsniedz atļautos 8 MB" : ""}
          </p>
        </div>
        {imagePreviews.length > 0 && (
          <div className="mt-4">
            <div className="text-xs text-white/70 mb-2">Attēlu priekšskatījumi</div>
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {imagePreviews.map((p) => (
                <li key={p.key} className="flex flex-col items-center gap-2">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md border border-white/15">
                    <Image
                      src={p.url}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                      unoptimized
                    />
                  </div>
                  <span className="w-16 truncate text-[10px] text-white/70" title={p.name}>{p.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {files.length > 0 && (
          <ul className="mt-3 space-y-2" aria-live="polite">
            {files.map((f, idx) => (
              <li key={`${f.name}-${f.size}-${f.lastModified}`} className="flex items-center justify-between rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90">
                <span className="truncate mr-3">{f.name} <span className="opacity-60">({Math.round(f.size / 1024)} KB)</span></span>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="ml-3 inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label={`Noņemt failu ${f.name}`}
                >Noņemt</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Row 4: Policy + Submit */}
      <div className="mt-8">
        {siteKey ? (
          <div ref={recaptchaContainerRef} className="inline-block" aria-live="polite" />
        ) : (
          <p className="text-sm text-red-200">
            ReCAPTCHA nav konfigurēts. Lūdzu sazinieties ar sistēmas administratoru.
          </p>
        )}
      </div>

      <div className="mt-8 flex items-center justify-start">
        <button
          type="submit"
          className={`inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
            overLimit ? "bg-red-700 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-500"
          }`}
          disabled={status === "loading" || overLimit || !captchaToken}
        >
          {status === "loading" ? "Sūta..." : overLimit ? "Samaziniet failu apjomu" : "Nosūtīt ziņu"}
        </button>
      </div>

      <p
        id="contact-status"
        aria-live="polite"
        className={`mt-4 ${
          status === "success"
            ? "text-emerald-300"
            : status === "error"
            ? "text-red-300"
            : "text-white/70"
        }`}
      >
        {message}
      </p>
    </form>
  )
}
