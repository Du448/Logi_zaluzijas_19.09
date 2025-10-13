'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'vestalux-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (!storedValue) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50">
      <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-slate-700">
            <p className="text-sm font-semibold text-slate-900">Mēs izmantojam sīkdatnes</p>
            <p className="text-sm leading-relaxed">
              Lai nodrošinātu ērtu vietnes lietošanu un pielāgotu saturu, mēs izmantojam nepieciešamās un analītiskās sīkdatnes.
              Turpinot pārlūkot vietni, jūs piekrītat sīkdatņu izmantošanai. Vairāk informācijas lasiet
              <Link href="/privatuma-politika" className="ml-1 font-semibold text-sky-600 underline underline-offset-2">
                privātuma politikā
              </Link>
              .
            </p>
          </div>
          <div className="flex w-full justify-end gap-3 sm:w-auto">
            <button
              type="button"
              onClick={handleAccept}
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Piekrītu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
