"use client"

import Image from "next/image"
import React, { useState, useCallback, useEffect } from "react"

type Props = {
  images: string[]
  alt: string
}

export default function ImagesGridWithLightbox({ images, alt }: Props) {
  const [open, setOpen] = useState(false)
  const [activeSrc, setActiveSrc] = useState<string | null>(null)

  const openLightbox = useCallback((src: string) => {
    setActiveSrc(src)
    setOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setOpen(false)
    setActiveSrc(null)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, closeLightbox])

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            className="group relative overflow-hidden rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => openLightbox(src)}
          >
            <div className="relative h-56">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/50 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">Skatīt</div>
          </button>
        ))}
      </div>

      {open && activeSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 md:top-0 md:right-0 z-10 rounded-full bg-white/90 text-gray-900 hover:bg-white px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Aizvērt"
            >
              ✕
            </button>
            <div className="relative w-full rounded-xl overflow-hidden bg-white">
              <div className="relative mx-auto w-full max-h-[85vh]">
                <Image
                  src={activeSrc}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
