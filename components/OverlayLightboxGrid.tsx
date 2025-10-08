"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

export type OverlayLightboxGridProps = {
  images: string[]
  title?: string
  className?: string
}

type OverlayTileProps = {
  src: string
  index: number
  title: string
  onOpen: (index: number) => void
}

function OverlayTile({ src, index, title, onOpen }: OverlayTileProps){
  const tileRef = useRef<HTMLButtonElement | null>(null)
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const [near, setNear] = useState(false)
  const [over, setOver] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = tileRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const mx = e.clientX
    const my = e.clientY
    const vx = mx - cx
    const vy = my - cy
    const dist = Math.hypot(vx, vy)
    const shortestSide = Math.min(rect.width, rect.height)
    const nearRadius = shortestSide * 0.25
    const overRadius = shortestSide * 0.12
    setNear(dist < nearRadius)
    setOver(dist < overRadius)
    const maxOffset = 12
    const scale = dist === 0 ? 0 : Math.min(1, nearRadius / Math.max(dist, 1))
    const tx = (vx / (dist || 1)) * maxOffset * scale
    const ty = (vy / (dist || 1)) * maxOffset * scale
    setDx(tx)
    setDy(ty)
  }

  const handleLeave = () => {
    setDx(0)
    setDy(0)
    setNear(false)
    setOver(false)
  }

  return (
    <button
      key={index}
      ref={tileRef}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(index)}
      className="group relative rounded-xl overflow-hidden shadow ring-1 ring-black/10 hover:ring-black/20 transition"
      aria-label={`Skatīt attēlu ${index + 1}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${title} ${index + 1}`}
        className="w-full aspect-[16/10] md:aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center select-none">
        <div
          className="relative w-16 h-16 rounded-full grid place-items-center overflow-hidden transition-transform duration-150"
          style={{ transform: `translate(${dx}px, ${dy}px) scale(${over ? 1.1 : near ? 1.03 : 1})` }}
        >
          <div className="absolute inset-0 rounded-full border border-white/80" />
          <div className={`absolute inset-0 rounded-full transition-colors duration-200 ${over ? "bg-white" : near ? "bg-white/70" : "bg-white/0"}`} />
          <span className={`relative z-[1] text-xs uppercase tracking-wide font-semibold ${over || near ? "text-gray-900" : "text-white"} transition-colors duration-150`}>
            view
          </span>
        </div>
      </div>
    </button>
  )
}

export function OverlayLightboxGrid({ images, title = "", className = "" }: OverlayLightboxGridProps) {
  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images])
  const total = safeImages.length

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])

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
      {/* 2-column responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {safeImages.map((src, i) => (
          <OverlayTile key={i} src={src} index={i} title={title} onOpen={openAt} />
        ))}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={safeImages[index]}
              alt={`${title} ${index + 1}`}
              className="max-w-[92vw] max-h-[80vh] object-contain bg-white rounded-md"
            />

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
