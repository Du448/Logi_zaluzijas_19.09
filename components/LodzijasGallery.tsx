"use client"

import { useEffect, useMemo, useState } from "react"

export type LodzijasGalleryProps = {
  images: string[]
  intervalMs?: number
}

// A lightweight center-focused carousel: auto-advances, centers the active card,
// and slightly enlarges the middle image.
export default function LodzijasGallery({ images, intervalMs = 3000 }: LodzijasGalleryProps) {
  const pics = useMemo(() => images.filter(Boolean), [images])
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (pics.length <= 1 || paused) return
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % pics.length)
    }, intervalMs)
    return () => clearInterval(t)
  }, [pics.length, intervalMs, paused])

  // Normalize relative position in range [-N/2, N/2]
  const rel = (i: number) => {
    const n = pics.length
    let d = i - idx
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  // Only render a window around the center for performance
  const visibleWindow = 4

  const prev = () => setIdx((p) => (p - 1 + pics.length) % pics.length)
  const next = () => setIdx((p) => (p + 1) % pics.length)

  return (
    <div className="relative w-full py-4">
      <div
        className="relative h-[360px] sm:h-[420px] md:h-[460px] lg:h-[520px] group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {pics.map((src, i) => {
          const d = rel(i)
          if (Math.abs(d) > visibleWindow) return null
          const isCenter = d === 0
          const translateX = d * 220 // px offset between cards
          return (
            <div
              key={src + i}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 will-change-transform"
              style={{
                transform: `translate(calc(-50% + ${translateX}px), -50%)`,
                zIndex: 10 - Math.abs(d),
              }}
              aria-hidden={!isCenter}
            >
              <div
                className={[
                  "rounded-3xl overflow-hidden bg-white transition-all duration-500",
                  isCenter ? "h-[420px] w-[260px] sm:h-[480px] sm:w-[300px] md:h-[520px] md:w-[340px] lg:h-[580px] lg:w-[380px]" :
                    Math.abs(d) === 1 ? "h-[360px] w-[220px] sm:h-[420px] sm:w-[260px] md:h-[460px] md:w-[300px] lg:h-[520px] lg:w-[340px]" :
                    "h-[300px] w-[200px] sm:h-[360px] sm:w-[220px] md:h-[400px] md:w-[240px] lg:h-[460px] lg:w-[280px]",
                  isCenter ? "scale-[1.05] shadow-2xl ring-1 ring-black/10" : "scale-100 shadow-lg ring-1 ring-black/5",
                  "transition-transform",
                ].join(" ")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Lodžijas attēls" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )
        })}

        {/* Arrows */}
        {pics.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Iepriekšējais"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg ring-1 ring-black/10 text-gray-900 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Nākamais"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg ring-1 ring-black/10 text-gray-900 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
