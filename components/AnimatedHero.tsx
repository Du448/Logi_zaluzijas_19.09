"use client"

import { useMemo, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export default function AnimatedHero() {
  const [imgSrc, setImgSrc] = useState<string>(
    "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1600"
  )

  // Subtle parallax for the background on scroll
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -40])

  const title = "PVC logi un žalūzijas, kas padara jūsu mājokli siltāku, klusāku un modernāku"
  const words = useMemo(() => title.split(" "), [title])

  // Motion settings
  const reduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      {/* Background video with subtle parallax */}
      <motion.video
        src="https://ik.imagekit.io/vbvwdejj5/5000848-uhd_3840_2160_30fps.mp4?updatedAt=1757431621535"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
        autoPlay
        muted
        loop
        playsInline
        poster={imgSrc}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />

      {/* Bottom-left content */}
      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="container">
          <div className="max-w-2xl">
            {/* Decorative icons row */}
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-teal text-white grid place-items-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="18" r="2" />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-teal text-white grid place-items-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="18" cy="12" r="2" />
                </svg>
              </div>
            </motion.div>

            {/* Staggered title */}
            <h1 className="h1 mb-4 text-white drop-shadow-sm">
              {words.map((w, i) => (
                <motion.span
                  key={`title-word-${i}`}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + i * 0.06 }}
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl mb-6 text-white/95 max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 + words.length * 0.06 }}
            >
              Kvalitatīva uzstādīšana un uzticama garantija — vairāk nekā 10 gadu pieredze
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 + words.length * 0.06 }}
            >
              <Link
                href="/kontakti"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 shadow-md hover:bg-blue-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600/60 transition-all duration-300"
              >
                Saņemt piedāvājumu
              </Link>
              <Link
                href="#katalogs"
                className="inline-flex items-center justify-center rounded-md bg-white/90 text-gray-900 px-5 py-3 border border-white/70 hover:bg-white hover:border-white shadow-sm hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 transition-all duration-300"
              >
                Apskatīt produktus
              </Link>
            </motion.div>

            {/* Feature bullets */}
            <motion.ul
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/95"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 + words.length * 0.06 }}
            >
              <li className="flex items-center gap-2"><SmallCheckIcon /> Ilga produktu pieredze</li>
              <li className="flex items-center gap-2"><SmallCheckIcon /> Garantija visiem produktiem</li>
              <li className="flex items-center gap-2"><SmallCheckIcon /> Ātra piegāde</li>
            </motion.ul>
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
