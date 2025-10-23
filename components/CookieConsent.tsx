'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'vestalux-cookie-consent'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

type ConsentStatus = 'accepted' | 'declined' | 'custom'

type StoredConsent = {
  status: ConsentStatus
  preferences: CookiePreferences
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [managingPreferences, setManagingPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const savedPreferencesRef = useRef<CookiePreferences>(defaultPreferences)

  const persistConsent = (status: ConsentStatus, prefs: CookiePreferences) => {
    const normalizedPreferences: CookiePreferences = {
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing
    }

    savedPreferencesRef.current = normalizedPreferences
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        status,
        preferences: normalizedPreferences
      } satisfies StoredConsent)
    )
    setManagingPreferences(false)
    setVisible(false)
  }

  const handleAccept = () => {
    persistConsent('accepted', {
      necessary: true,
      analytics: true,
      marketing: true
    })
  }

  const handleDecline = () => {
    persistConsent('declined', defaultPreferences)
  }

  const handleSavePreferences = () => {
    persistConsent('custom', preferences)
  }

  const handleCancelPreferences = () => {
    setManagingPreferences(false)
    setPreferences(savedPreferencesRef.current)
  }

  const togglePreference = (key: Exclude<keyof CookiePreferences, 'necessary'>) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  useEffect(() => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (!storedValue) {
      setVisible(true)
      return
    }

    if (storedValue === 'accepted') {
      const acceptedPreferences: CookiePreferences = {
        necessary: true,
        analytics: true,
        marketing: true
      }
      savedPreferencesRef.current = acceptedPreferences
      setPreferences(acceptedPreferences)
      return
    }

    try {
      const parsedValue = JSON.parse(storedValue) as StoredConsent

      if (
        parsedValue &&
        typeof parsedValue === 'object' &&
        (parsedValue.status === 'accepted' || parsedValue.status === 'declined' || parsedValue.status === 'custom') &&
        parsedValue.preferences
      ) {
        const parsedPreferences: CookiePreferences = {
          necessary: true,
          analytics: Boolean(parsedValue.preferences.analytics),
          marketing: Boolean(parsedValue.preferences.marketing)
        }
        savedPreferencesRef.current = parsedPreferences
        setPreferences(parsedPreferences)
        return
      }
    } catch (error) {
      setVisible(true)
      return
    }

    setVisible(true)
  }, [])

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
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setManagingPreferences(true)
                setPreferences(savedPreferencesRef.current)
              }}
              className="text-left text-sm font-semibold uppercase text-slate-600 underline underline-offset-4 transition hover:text-slate-900"
            >
              Pārvaldīt izvēles
            </button>
            <div className="flex flex-1 flex-row gap-3 sm:flex-none">
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Piekrītu
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Atteikties
              </button>
            </div>
          </div>
        </div>
        {managingPreferences ? (
          <div className="mt-4 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-900">Pielāgojiet sīkdatņu iestatījumus</p>
              <p className="text-sm text-slate-600">Nepieciešamās sīkdatnes ir vienmēr ieslēgtas, pārējās varat deaktivizēt.</p>
            </div>
            <div className="space-y-3">
              <label className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-slate-900">Nepieciešamās</span>
                  <span className="text-sm text-slate-600">Šīs sīkdatnes nodrošina vietnes pamatfunkcijas.</span>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
              </label>
              <label className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-slate-900">Analītikas</span>
                  <span className="text-sm text-slate-600">Palīdz saprast, kā apmeklētāji izmanto vietni.</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference('analytics')}
                  className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
              </label>
              <label className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-slate-900">Mārketinga</span>
                  <span className="text-sm text-slate-600">Izmanto personalizētai reklāmai un kampaņām.</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference('marketing')}
                  className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
              </label>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleCancelPreferences}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Atcelt
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Saglabāt izvēli
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
