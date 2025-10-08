"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Hero(){
  const [imgSrc, setImgSrc] = useState<string>("https://ik.imagekit.io/vbvwdejj5/pexels-sabeel-ahammed-15010-68357.jpg?updatedAt=1756641869797")
  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt="Moderni PVC logi mājas interjerā ar dabīgo gaismu"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={() => setImgSrc("https://ik.imagekit.io/vbvwdejj5/patio-sliders-raum-aluminium-1024x1024.jpg?updatedAt=1756637316712")}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/40" />

      {/* Bottom-left content */}
      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="container">
          <div className="max-w-2xl">
            {/* Decorative icons row: vertical dots + horizontal dots */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-teal text-white grid place-items-center transition-transform duration-300 motion-reduce:transition-none">
                {/* vertical dots */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="18" r="2" />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-teal text-white grid place-items-center transition-transform duration-300 motion-reduce:transition-none">
                {/* horizontal dots */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="18" cy="12" r="2" />
                </svg>
              </div>
            </div>

            <h1 className="h1 mb-4 text-white drop-shadow-sm">PVC logi, žalūzijas un piederumi</h1>
            <p className="text-lg md:text-xl mb-6 text-white/95 max-w-xl">Augstas kvalitātes risinājumi jūsu mājoklim — garantēta kvalitāte un ātra piegāde</p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link
                href="#katalogs"
                className="inline-flex items-center justify-center rounded-md bg-brand-teal text-white px-5 py-3 shadow-md hover:shadow-lg hover:brightness-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal/60 transition-all duration-300 motion-reduce:transition-none"
              >
                Skatīt produktus
              </Link>
              <Link
                href="/kontakti"
                className="inline-flex items-center justify-center rounded-md bg-white/90 text-gray-900 px-5 py-3 border border-white/70 hover:bg-white hover:border-white shadow-sm hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 transition-all duration-300 motion-reduce:transition-none"
              >
                Bezmaksas konsultācija
              </Link>
            </div>

            {/* Feature bullets (optional) */}
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/95">
              <li className="flex items-center gap-2"><SmallCheckIcon /> Ilga produktu pieredze</li>
              <li className="flex items-center gap-2"><SmallCheckIcon /> Garantija visiem produktiem</li>
              <li className="flex items-center gap-2"><SmallCheckIcon /> Ātra piegāde</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SmallCheckIcon(){
  return (
    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
