"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export type GalleryProps = {
  images: string[]
  title: string
}

type SourceStatus = 'direct' | 'proxy' | 'fail'

type ThumbnailSource = {
  original: string
  direct: string
  proxy: string
  status: SourceStatus
}

const encodeDirect = (src: string) => encodeURI(src)
const buildProxy = (src: string) => `/api/proxy-image?url=${encodeURIComponent(src)}`

export default function Gallery({ images, title }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const [thumbnailSources, setThumbnailSources] = useState<ThumbnailSource[]>(() =>
    images.map((src) => ({
      original: src,
      direct: encodeDirect(src),
      proxy: buildProxy(src),
      status: 'direct',
    }))
  )
  const [modalStep, setModalStep] = useState<Exclude<SourceStatus, 'fail'>>('direct')
  const activeSrc = images[idx] ?? null

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
    setThumbnailSources(
      images.map((src) => ({
        original: src,
        direct: encodeDirect(src),
        proxy: buildProxy(src),
        status: 'direct',
      }))
    )
  }, [images])

  useEffect(() => {
    if (!isOpen || images.length === 0) return
    const toPreload = [idx, (idx + 1) % images.length, (idx - 1 + images.length) % images.length]
    toPreload.forEach(i => {
      const src = images[i]
      const preload = new window.Image()
      preload.referrerPolicy = 'no-referrer'
      preload.crossOrigin = 'anonymous'
      preload.src = encodeDirect(src)
    })
  }, [isOpen, idx, images])

  useEffect(() => {
    if (!isOpen) return
    setModalStep('direct')
  }, [idx, isOpen])

  // If direct URL stalls (no load/error) for too long, auto-switch to proxy
  useEffect(() => {
    if (!isOpen) return
    const t = setTimeout(() => {
      if (loaded) return
      setModalStep((prev) => (prev === 'direct' ? 'proxy' : prev))
    }, 1200)
    return () => clearTimeout(t)
  }, [isOpen, idx, loaded, images])

  const modalSrc = useMemo(() => {
    if (!isOpen) return null
    const source = images[idx]
    return modalStep === 'proxy' ? buildProxy(source) : encodeDirect(source)
  }, [images, idx, isOpen, modalStep])

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
            <Image
              src={(() => {
                const entry = thumbnailSources[i]
                if (!entry) return encodeDirect(src)
                if (entry.status === 'proxy') return entry.proxy
                return entry.direct
              })()}
              alt={`${title} – foto ${i + 1}`}
              fill
              className={`object-cover object-center transition-opacity duration-200 ${thumbnailSources[i]?.status === 'fail' ? 'opacity-0' : 'opacity-100'}`}
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
              loading="lazy"
              unoptimized
              onError={() => {
                setThumbnailSources((prev) => {
                  const next = [...prev]
                  const entry = next[i]
                  if (!entry) return prev
                  if (entry.status === 'direct') {
                    next[i] = { ...entry, status: 'proxy' }
                    return next
                  }
                  if (entry.status === 'proxy') {
                    next[i] = { ...entry, status: 'fail' }
                    return next
                  }
                  return prev
                })
              }}
            />
          </button>
        ))}
      </div>

      {isOpen && activeSrc && (
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
              <div className={`relative w-full h-full ${zoom ? 'overflow-auto' : ''}`}>
                {/* Loader overlay */}
                {!loaded && (
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 h-10 w-10 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                  </div>
                )}
                {modalSrc && (
                  <Image
                    key={`${idx}-${modalStep}`}
                    src={modalSrc}
                    alt={`${title} – foto ${idx + 1}`}
                    fill
                    className={`object-contain ${zoom ? 'min-h-[800px] min-w-[1200px]' : ''} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                    sizes="90vw"
                    unoptimized
                    onLoadingComplete={() => setLoaded(true)}
                    onError={() => {
                      setLoaded(false)
                      setModalStep((prev) => {
                        if (prev === 'direct') return 'proxy'
                        setNotice('Attēlu nevar ielādēt – pārejam uz nākamo')
                        next()
                        return prev
                      })
                    }}
                  />
                )}
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
