"use client"

import { useState } from "react"

export type ShowcaseCarouselProps = {
  images: string[]
  label?: string
  title?: string
  description?: string
  className?: string
}

export default function ShowcaseCarousel({ images, label, title, description, className }: ShowcaseCarouselProps){
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((p) => (p + 1) % images.length)

  const current = images[idx]

  return (
    <article className={`relative overflow-hidden rounded-2xl bg-blue-800 text-white min-h-[48vh] lg:min-h-[60vh] ${className ?? ''}`}>
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src={current} alt="Showcase" className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Text content */}
      <div className="relative z-10 p-6 md:p-10 max-w-xl">
        {/* Label intentionally not rendered to avoid showing words like 'Pētījums' */}
        {title && (<h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>)}
        {description && (<p className="text-white/85">{description}</p>)}
      </div>

      {/* Right arrow button */}
      <button
        type="button"
        onClick={next}
        aria-label="Nākamais attēls"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-12 h-12 text-black focus:outline-none focus:ring-2 focus:ring-black/50"
      >
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      </button>
    </article>
  )
}
