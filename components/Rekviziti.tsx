"use client"

import { useCallback } from "react"

type Props = {
  companyName: string
  regNr: string
  legalAddress: string
  bank: string
  iban: string
}

export default function Rekviziti({ companyName, regNr, legalAddress, bank, iban }: Props){
  const text = `${companyName}\nReģ. Nr. ${regNr}\n${legalAddress}\n${bank}\nBankas konts: ${iban}`

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      // Optional: toast could be added here if you have a toast system
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
    <div className="mt-6 text-white/80 text-sm">
      <h2 className="font-semibold text-white mb-2">Rekvizīti</h2>
      <p>{companyName}</p>
      <p>Reģ. Nr. {regNr}</p>
      <p>{legalAddress}</p>
      <p>{bank}</p>
      <p>Bankas konts : {iban}</p>
      <div className="mt-3 flex gap-2">
        <button onClick={onCopy} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/20">
          Kopēt rekvizītus
        </button>
        <button onClick={onPrint} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/20">
          Lejupielādēt PDF
        </button>
      </div>
    </div>
  )
}
