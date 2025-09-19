"use client"
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export type GalleryProps = {
  images: string[]
  title: string
}

export default function Gallery({ images, title }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const modalImgRef = useRef<HTMLImageElement | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const open = useCallback((i: number) => {
    setIdx(i)
    setZoom(false)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setZoom(false)
  }, [])

  const next = useCallback(() => {
    setIdx((p) => (p + 1) % images.length)
    setZoom(false)
    setLoaded(false)
  }, [images.length])

  const prev = useCallback(() => {
    setIdx((p) => (p - 1 + images.length) % images.length)
    setZoom(false)
    setLoaded(false)
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, next, prev])

  useEffect(() => {
    if (!isOpen) return
    setLoaded(false)
  }, [idx, isOpen])

  // Preload current, next, and previous images to reduce black flashes
  useEffect(() => {
    if (!isOpen || images.length === 0) return
    const toPreload = [idx, (idx + 1) % images.length, (idx - 1 + images.length) % images.length]
    toPreload.forEach(i => {
      const src = images[i]
      const im = new Image()
      im.referrerPolicy = 'no-referrer'
      im.crossOrigin = 'anonymous'
      im.src = encodeURI(src)
    })
  }, [isOpen, idx, images])

  // If direct URL stalls (no load/error) for too long, auto-switch to proxy
  useEffect(() => {
    if (!isOpen) return
    const t = setTimeout(() => {
      if (loaded) return
      const el = modalImgRef.current
      if (!el) return
      const step = el.getAttribute('data-step') || 'direct'
      if (step === 'direct') {
        const src = images[idx]
        el.src = `/api/proxy-image?url=${encodeURIComponent(src)}`
        el.setAttribute('data-step','proxy')
      }
    }, 1200)
    return () => clearTimeout(t)
  }, [isOpen, idx, loaded, images])

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => open(i)}
            className="relative rounded-lg overflow-hidden border border-gray-100 h-40 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-teal/60"
            aria-label={`Atvērt attēlu: ${title} – foto ${i + 1}`}
          >
            <img
              src={encodeURI(src)}
              alt={`${title} – foto ${i + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              data-step="direct"
              onError={(e) => {
                const t = e.currentTarget
                const step = t.getAttribute('data-step') || 'direct'
                if (step === 'direct') {
                  t.src = `/api/proxy-image?url=${encodeURIComponent(src)}`
                  t.setAttribute('data-step','proxy')
                  return
                }
                if (step === 'proxy') {
                  // Hide the broken thumbnail without replacing it with a logo
                  t.style.opacity = '0'
                  t.setAttribute('data-step','fail')
                }
              }}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Attēlu skatītājs"
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[88vh]">
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              className="absolute top-2 right-2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Aizvērt"
            >
              ✕
            </button>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Iepriekšējais attēls"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Nākamais attēls"
            >
              ›
            </button>

            {/* Zoom toggle */}
            <button
              type="button"
              onClick={() => setZoom((z) => !z)}
              className="absolute left-1/2 -translate-x-1/2 bottom-2 z-10 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Pārslēgt tālummaiņu"
            >
              {zoom ? 'Samazināt' : 'Palielināt'}
            </button>

            <div className={`relative w-full h-full rounded-lg overflow-hidden bg-black ${zoom ? 'cursor-move' : 'cursor-zoom-in'}`}>
              <div className={`w-full h-full ${zoom ? 'overflow-auto' : ''} relative`}>
                {/* Loader overlay */}
                {!loaded && (
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 h-10 w-10 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                  </div>
                )}
                <img
                  key={idx}
                  src={encodeURI(images[idx])}
                  alt={`${title} – foto ${idx + 1}`}
                  className={`absolute inset-0 ${zoom ? 'min-w-[1200px] min-h-[800px] object-contain' : 'w-full h-full object-contain'} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  data-step="direct"
                  ref={modalImgRef}
                  onLoad={() => setLoaded(true)}
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement
                    const step = t.getAttribute('data-step') || 'direct'
                    const src = images[idx]
                    if (step === 'direct') {
                      t.src = `/api/proxy-image?url=${encodeURIComponent(src)}`
                      t.setAttribute('data-step','proxy')
                      return
                    }
                    if (step === 'proxy') {
                      // If modal image also fails via proxy, skip to next image
                      t.setAttribute('data-step','fail')
                      setNotice('Attēlu nevar ielādēt – pārejam uz nākamo')
                      next()
                    }
                  }}
                />
                {/* Caption */}
                <div className="absolute left-0 right-0 bottom-0 p-3 text-center text-white/90 text-sm bg-gradient-to-t from-black/60 to-transparent">
                  {`${title} – foto ${idx + 1}`}
                </div>
              </div>
            </div>
            {/* Notice/Toast */}
            {notice && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 rounded bg-black/70 text-white text-sm px-3 py-1.5 shadow">
                {notice}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
