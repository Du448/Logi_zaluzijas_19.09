"use client"

import React, { useState, useCallback } from "react"

type Props = {
  images: string[]
  alt: string
  className?: string
}

export default function RightArrowCarousel({ images, alt, className }: Props){
  const [idx, setIdx] = useState(0)
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length])

  if (!images?.length) return null

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={images[idx]}
        src={images[idx]}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* right arrow */}
      <button
        type="button"
        onClick={next}
        aria-label="Nākamais attēls"
        className="absolute inset-y-0 right-0 w-12 md:w-14 grid place-items-center bg-black/60 hover:bg-black/70 text-white transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* dots */}
      <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Rādīt attēlu ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  )
}
