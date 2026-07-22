"use client"

import { useCallback, useState } from "react"

type Props = {
  companyName: string
  regNr: string
  legalAddress: string
  bank: string
  iban: string
}

export default function Rekviziti({ companyName, regNr, legalAddress, bank, iban }: Props){
  const text = `${companyName}\nReģ. Nr. ${regNr}\n${legalAddress}\n${bank}\nBankas konts: ${iban}`
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error("Clipboard error", e)
    }
  }, [text])

  const onPrint = useCallback(() => {
    const w = window.open("", "_blank", "noopener,noreferrer,width=800,height=900")
    if (!w) return
    w.document.write(`<!doctype html><html><head><meta charset=\"utf-8\"/><title>Rekvizīti</title>
      <style>
        body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; padding: 24px; }
        h1 { font-size: 20px; margin: 0 0 12px; }
        p { margin: 6px 0; }
        .muted { color: #555; }
      </style>
    </head><body>
      <h1>Rekvizīti</h1>
      <p>${companyName}</p>
      <p>Reģ. Nr. ${regNr}</p>
      <p>${legalAddress}</p>
      <p>${bank}</p>
      <p>Bankas konts: ${iban}</p>
      <p class="muted">Saglabājiet šo lapu kā PDF (Drukāt → Save as PDF)</p>
      <script>window.onload = () => setTimeout(() => window.print(), 150);</script>
    </body></html>`)
    w.document.close()
  }, [companyName, regNr, legalAddress, bank, iban])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-sm">
      <h2 className="font-bold text-slate-900">Rekvizīti</h2>
      <dl className="mt-3 space-y-2 text-slate-600">
        <div>
          <dt className="sr-only">Uzņēmums</dt>
          <dd className="font-medium text-slate-900">{companyName}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-slate-500">Reģ. Nr.</dt>
          <dd className="text-right">{regNr}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-slate-500 shrink-0">Juridiskā adrese</dt>
          <dd className="text-right">{legalAddress}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-slate-500">Banka</dt>
          <dd className="text-right">{bank}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Konts</dt>
          <dd className="mt-1 rounded-lg bg-slate-50 border border-slate-200 px-2.5 py-1.5 font-mono text-[13px] text-slate-800 break-all">{iban}</dd>
        </div>
      </dl>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={onCopy}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
            copied
              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          {copied ? "Nokopēts ✓" : "Kopēt rekvizītus"}
        </button>
        <button
          onClick={onPrint}
          className="inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Lejupielādēt PDF
        </button>
      </div>
    </div>
  )
}
