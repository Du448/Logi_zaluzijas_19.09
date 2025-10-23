"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

export type ZoomImageProps = {
  src: string
  alt: string
  className?: string
}

export default function ZoomImage({ src, alt, className }: ZoomImageProps) {
  const [open, setOpen] = useState(false)

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onKey])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`relative block w-full h-full cursor-zoom-in ${className ?? ''}`}
        aria-label="Palielināt attēlu"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Attēla palielinājums"
          onClick={(e) => {
            if (e.currentTarget === e.target) setOpen(false)
          }}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 md:top-0 md:right-0 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Aizvērt"
            >
              ✕
            </button>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain rounded-lg"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
