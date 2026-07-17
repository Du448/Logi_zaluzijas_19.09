"use client"

import { useCallback, useMemo, useState } from "react"

export type ShareButtonProps = {
  className?: string
  label?: string
}

export default function ShareButton({ className = "", label = "Kopīgot" }: ShareButtonProps){
  const [copied, setCopied] = useState(false)

  const shareData = useMemo(() => {
    if (typeof window === 'undefined') return null
    const url = window.location.href
    const title = document.title || 'vestalux.lv'
    const text = 'PVC logi, žalūzijas un piederumi – vestalux.lv'
    return { url, title, text }
  }, [])

  const onShare = useCallback(async () => {
    try {
      // Prefer native Web Share when available
      if (navigator.share && shareData) {
        await navigator.share(shareData as ShareData)
        return
      }
      // Fallback: copy URL to clipboard
      const url = typeof window !== 'undefined' ? window.location.href : 'https://vestalux.lv'
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      // If user cancels or clipboard fails, do nothing critical
      try {
        const url = typeof window !== 'undefined' ? window.location.href : 'https://vestalux.lv'
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      } catch {}
    }
  }, [shareData])

  return (
    <button
      type="button"
      onClick={onShare}
      className={`inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/15 text-white px-3 py-1.5 text-xs font-semibold transition-colors ${className}`}
      aria-label="Kopīgot"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" />
      </svg>
      <span className="hidden sm:inline">{copied ? 'Nokopēts' : label}</span>
    </button>
  )
}
