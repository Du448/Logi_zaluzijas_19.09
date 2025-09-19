"use client"

import React, { useCallback, useEffect, useMemo, useState } from "react"

type Props = {
  images: string[]
  title?: string
  className?: string
}

export default function LightboxGallery({ images, title = "", className = "" }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const total = images?.length || 0
  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images])

  const openAt = useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, prev, next, close])

  return (
    <div className={className}>
      {/* Main viewer with arrows */}
      {total > 0 && (
        <div className="relative mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={safeImages[index]}
            alt={`${title} ${index + 1}`}
            className="w-full aspect-[16/10] md:aspect-[4/3] object-cover rounded-xl shadow cursor-zoom-in"
            onClick={() => setOpen(true)}
          />

          {/* Prev/Next arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i - 1 + total) % total)
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-9 h-9 md:w-10 md:h-10 grid place-items-center shadow"
            aria-label="Iepriekšējais"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i + 1) % total)
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-9 h-9 md:w-10 md:h-10 grid place-items-center shadow"
            aria-label="Nākamais"
          >
            ›
          </button>
        </div>
      )}

      {/* Thumbnails row */}
      <div className="flex flex-wrap gap-3">
        {safeImages.map((src, i) => {
          const active = i === index
          return (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative block rounded-lg p-[2px] ${
                active ? 'ring-2 ring-blue-600' : 'ring-0'
              }`}
              aria-label={`Skatīt attēlu ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-20 h-16 sm:w-24 sm:h-20 object-cover rounded-md shadow"
                loading="lazy"
                onClick={() => openAt(i)}
              />
            </button>
          )
        })}
      </div>

      {/* Lightbox modal */}
      {open && total > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} galerija`}
          onClick={close}
        >
          <div className="relative max-w-[92vw] max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={safeImages[index]}
              alt={`${title} ${index + 1}`}
              className="max-w-[92vw] max-h-[80vh] object-contain bg-white rounded-md"
            />

            {/* Caption */}
            {title ? (
              <div className="mt-3 text-center text-white/90 text-sm">{title} — {index + 1}/{total}</div>
            ) : (
              <div className="mt-3 text-center text-white/90 text-sm">{index + 1}/{total}</div>
            )}

            {/* Controls */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 grid place-items-center shadow"
              aria-label="Iepriekšējais"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 grid place-items-center shadow"
              aria-label="Nākamais"
            >
              ›
            </button>

            <button
              type="button"
              onClick={close}
              className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full w-8 h-8 grid place-items-center shadow"
              aria-label="Aizvērt"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
