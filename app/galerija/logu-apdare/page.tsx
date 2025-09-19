"use client"
import { useEffect, useState, useCallback } from 'react'

const images: { src: string; alt: string }[] = [
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/WhatsApp%20Image%202024-07-31%20at%2018.44.32_fe8a42f9.jpg?updatedAt=1755883972169', alt: 'Logu apdare 1' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0050.jpg?updatedAt=1755883972114', alt: 'Logu apdare 2' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0048.jpg?updatedAt=1755883972095', alt: 'Logu apdare 3' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0049.jpg?updatedAt=1755883972059', alt: 'Logu apdare 4' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0047.jpg?updatedAt=1755883972007', alt: 'Logu apdare 5' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0046.jpg?updatedAt=1755883972002', alt: 'Logu apdare 6' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0040.jpg?updatedAt=1755883970293', alt: 'Logu apdare 7' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0043.jpg?updatedAt=1755883970255', alt: 'Logu apdare 8' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0044.jpg?updatedAt=1755883970231', alt: 'Logu apdare 9' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0038.jpg?updatedAt=1755883970136', alt: 'Logu apdare 10' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0042.jpg?updatedAt=1755883970060', alt: 'Logu apdare 11' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0033.jpg?updatedAt=1755883968228', alt: 'Logu apdare 12' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0035.jpg?updatedAt=1755883968054', alt: 'Logu apdare 13' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0028.jpg?updatedAt=1755883967967', alt: 'Logu apdare 14' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0032.jpg?updatedAt=1755883967960', alt: 'Logu apdare 15' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0031.jpg?updatedAt=1755883967944', alt: 'Logu apdare 16' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0034.jpg?updatedAt=1755883967922', alt: 'Logu apdare 17' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0030.jpg?updatedAt=1755883967876', alt: 'Logu apdare 18' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0027.jpg?updatedAt=1755883967783', alt: 'Logu apdare 19' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0021.jpg?updatedAt=1755883965366', alt: 'Logu apdare 20' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0019.jpg?updatedAt=1755883965362', alt: 'Logu apdare 21' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0016.jpg?updatedAt=1755883965344', alt: 'Logu apdare 22' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0024.jpg?updatedAt=1755883965336', alt: 'Logu apdare 23' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0018.jpg?updatedAt=1755883965321', alt: 'Logu apdare 24' },
  { src: 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/IMG-20240731-WA0023.jpg?updatedAt=1755883965316', alt: 'Logu apdare 25' },
]

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState<number>(0)

  const openAt = useCallback((i: number) => { setIndex(i); setIsOpen(true) }, [])
  const close = useCallback(() => setIsOpen(false), [])
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [])
  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [])

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, next, prev])

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Galerija — Logu apdares darbi</h1>
          <p className="text-gray-600 mt-2">Reālu darbu foto no mūsu projektiem</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openAt(i)}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={`Atvērt attēlu: ${img.alt}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 6 ? 'eager' : 'lazy'}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Attēlu skatītājs"
            onClick={close}
          >
            <div className="relative max-w-6xl w-full" onClick={(e)=>e.stopPropagation()}>
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Controls */}
              <button
                type="button"
                onClick={close}
                className="absolute -top-3 -right-3 md:top-3 md:right-3 p-2 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow"
                aria-label="Aizvērt"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow"
                aria-label="Iepriekšējais"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow"
                aria-label="Nākamais"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              {/* Counter */}
              <div className="absolute bottom-2 right-3 text-xs md:text-sm text-white/90">
                {index + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
