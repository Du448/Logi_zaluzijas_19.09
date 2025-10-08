"use client"
import React, { useState } from "react"

// Landing page for /piederumi (logu piederumi)
// Sections: Hero, Categories grid, Detailed sections per category, CTA
// Animations rely on IO classes handled by components/ScrollReveal.tsx

export default function PiederumiLanding() {
  // Hero carousel images provided by user
  const heroImages: string[] = [
    'https://ik.imagekit.io/vbvwdejj5/Paladzes/%C4%80r%C4%93j%C4%81_2.jpg?updatedAt=1758274888036',
    'https://ik.imagekit.io/vbvwdejj5/Paladzes/Iek%C5%A1%C4%93j%C4%81_4.jpg?updatedAt=1758274887996',
    'https://ik.imagekit.io/vbvwdejj5/Paladzes/%C4%80r%C4%93j%C4%81_6.jpg?updatedAt=1758274887988',
    'https://ik.imagekit.io/vbvwdejj5/Paladzes/Iek%C5%A1%C4%93j%C4%81_1.jpg?updatedAt=1758274887917',
    'https://ik.imagekit.io/vbvwdejj5/Paladzes/Iek%C5%A1%C4%93j%C4%81_2.jpg?updatedAt=1758274887918',
    'https://ik.imagekit.io/vbvwdejj5/Paladzes/Iek%C5%A1%C4%93j%C4%81_3.jpg?updatedAt=1758274887706',
    'https://ik.imagekit.io/vbvwdejj5/Paladzes/Iek%C5%A1%C4%93j%C4%81.jpg?updatedAt=1758274887711',
    'https://ik.imagekit.io/vbvwdejj5/Rokturi.jpg?updatedAt=1758275338461',
    'https://ik.imagekit.io/vbvwdejj5/istockphoto-1218376139-2048x2048%20-%20Edited.jpg?updatedAt=1758275325273',
    'https://ik.imagekit.io/vbvwdejj5/22380411.jpg?updatedAt=1758275325013',
    'https://ik.imagekit.io/vbvwdejj5/detail_image_blaugelb_x_0000420841_BLGE00521-2.png?updatedAt=1758275010163',
    'https://ik.imagekit.io/vbvwdejj5/detail_image_blaugelb_x_0000420841_BLGE00521-3.png?updatedAt=1758275010155',
    'https://ik.imagekit.io/vbvwdejj5/main_image_blaugelb_x_0000420841_BLGE00521.png?updatedAt=1758275009854',
  ]
  const [heroIndex, setHeroIndex] = useState(0)
  const nextHero = () => setHeroIndex((i) => (i + 1) % heroImages.length)
  const prevHero = () => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchDeltaX, setTouchDeltaX] = useState(0)
  type Category = {
    id: string
    title: string
    desc: string
    image: string
    icon: React.ReactNode
    bullets: string[]
  }

  const categories: Category[] = [
    {
      id: 'arejas-palodzes',
      title: 'Ārējās palodzes',
      desc: 'Izturīgas metāla vai alumīnija palodzes ar pulverkrāsojumu — aizsardzībai pret mitrumu un nokrišņiem.',
      image: 'https://ik.imagekit.io/vbvwdejj5/Paladzes/%C4%80r%C4%93j%C4%81_1.png?updatedAt=1758274890206',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M4 16h16M5 20h14"/></svg>
      ),
      bullets: [
        'Materiāli: tērauds, alumīnijs',
        'Pulverkrāsojums RAL toņos',
        'Pilieniņa mala ūdens novadei',
        'Pielāgojami garumi un platumi'
      ]
    },
    {
      id: 'iekshejas-palodzes',
      title: 'Iekšējās palodzes',
      desc: 'Premium PVC vai MDF/lamināta palodzes — estētikai, funkcionalitātei un vieglai kopšanai.',
      image: 'https://ik.imagekit.io/vbvwdejj5/Paladzes/Iek%C5%A1%C4%93j%C4%81_2.jpg?updatedAt=1758274887918',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/></svg>
      ),
      bullets: [
        'PVC, MDF/lamināts vai akmens imitācija',
        'Izturīgas pret skrāpējumiem',
        'Dažādi profili un krāsas',
        'Viegla kopšana'
      ]
    },
    {
      id: 'logu-rokturi',
      title: 'Logu rokturi',
      desc: 'Ergonomiski un droši rokturi ikdienas lietošanai, ar bērnu drošības opcijām.',
      image: 'https://ik.imagekit.io/vbvwdejj5/unnamed%20(6)%20-%20Edited.png?updatedAt=1758274988563',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 12h6a4 4 0 0 1 4 4v4"/><rect x="2" y="10" width="6" height="4" rx="1"/></svg>
      ),
      bullets: [
        'Standarta un ar atslēgu',
        'Krāsas: balta, brūna, antracīts, alumīnijs',
        'Saderīgi ar populārākajām profilu sistēmām',
        'Vienkārša nomaiņa'
      ]
    },
    {
      id: 'eps-baze-profil',
      title: 'Pamatnes izolācijas profils EPS',
      desc: 'Siltumtiltu samazināšanai un montāžas kvalitātei — stabila bāze zem loga rāmja.',
      image: 'https://ik.imagekit.io/vbvwdejj5/detail_image_blaugelb_x_0000420841_BLGE00521-3.png?updatedAt=1758275010155',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h10M4 17h7"/></svg>
      ),
      bullets: [
        'Samazina aukstuma tiltiņus',
        'Precīzs līmeņojums un balsts',
        'Saderīgs ar PVC un ALU rāmjiem',
        'Palielina montāžas ilgmūžību'
      ]
    }
  ]

  return (
    <div className="text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" aria-hidden="true" />
        <div className="relative container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="io-fade-up">
              <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Logu piederumi</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Piederumi ilgtermiņa komfortam un <span className="text-brand-teal">estētikai</span>
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl">
                Ārējās un iekšējās palodzes, logu rokturi un EPS pamatnes profili — viss, kas nepieciešams kvalitatīvai logu montāžai un ērtai ikdienai.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#kategorijas" className="inline-flex items-center rounded-md bg-brand-teal hover:bg-brand-blue text-white px-5 py-3 font-semibold transition-transform duration-300 ease-out hover:scale-105">
                  Apskatīt kategorijas
                </a>
                <a href="/kontakti" className="inline-flex items-center rounded-md border border-gray-300 hover:bg-gray-100 text-gray-900 px-5 py-3 font-semibold transition-transform duration-300 ease-out hover:scale-105">
                  Pieprasīt piedāvājumu
                </a>
              </div>
            </div>
            <div
              className="io-slide-right relative"
              onTouchStart={(e) => {
                if (e.touches && e.touches.length > 0) {
                  setTouchStartX(e.touches[0].clientX)
                  setTouchDeltaX(0)
                }
              }}
              onTouchMove={(e) => {
                if (touchStartX !== null && e.touches && e.touches.length > 0) {
                  setTouchDeltaX(e.touches[0].clientX - touchStartX)
                }
              }}
              onTouchEnd={() => {
                const threshold = 40 // px
                if (touchDeltaX > threshold) {
                  prevHero()
                } else if (touchDeltaX < -threshold) {
                  nextHero()
                }
                setTouchStartX(null)
                setTouchDeltaX(0)
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- swipe gestures require native <img> to update without Next.js layout reflow */}
              <img
                src={heroImages[heroIndex]}
                alt="Piederumu galerija"
                className="w-full rounded-2xl shadow-lg object-cover"
                loading="lazy"
              />
              {/* Right arrow to cycle */}
              <button
                type="button"
                onClick={nextHero}
                aria-label="Nākamais attēls"
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/70 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              {/* Dot indicators */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                {heroImages.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    aria-label={`Rādīt attēlu ${i + 1}`}
                    onClick={() => setHeroIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${i === heroIndex ? 'w-5 bg-white' : 'w-2.5 bg-white/60 hover:bg-white'}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="kategorijas" className="bg-white">
        <div className="container py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Piederumu kategorijas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="h-32 bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element -- category cards reuse cached thumbnails via native <img> for instant hover */}
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 grid place-items-center mb-3">{c.icon}</div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="text-gray-600 mt-1 line-clamp-3">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="container py-14 md:py-16 space-y-16">
          {categories.map((c, idx) => (
            <div id={c.id} key={c.id} className="grid md:grid-cols-2 gap-8 md:gap-10 items-center scroll-mt-24">
              <div className={idx % 2 === 0 ? 'io-slide-left order-1' : 'io-slide-left md:order-2'}>
                <h2 className="text-2xl md:text-3xl font-bold">{c.title}</h2>
                <p className="text-gray-600 mt-3">{c.desc}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href="/kontakti" className="inline-flex items-center rounded-md bg-brand-teal hover:bg-brand-blue text-white px-5 py-3 font-semibold transition-transform duration-300 ease-out hover:scale-105">Pasūtīt</a>
                  <a href="#kategorijas" className="inline-flex items-center rounded-md border border-gray-300 hover:bg-gray-100 text-gray-900 px-5 py-3 font-semibold transition-transform duration-300 ease-out hover:scale-105">Atpakaļ uz kategorijām</a>
                </div>
              </div>
              <div className={idx % 2 === 0 ? 'io-slide-right order-2' : 'io-slide-right md:order-1'}>
                {/* eslint-disable-next-line @next/next/no-img-element -- alternating ScrollReveal animation uses intrinsic measurements */}
                <img src={c.image} alt={c.title} className="w-full rounded-2xl shadow" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white">
        <div className="container py-16 text-center io-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">Nepieciešami logu piederumi?</h2>
          <p className="text-white/80 mt-3 max-w-3xl mx-auto">Pastāstiet, kas tieši nepieciešams — ārējās/iekšējās palodzes, rokturi vai EPS profils. Sagatavosim piedāvājumu ar piemērotiem materiāliem, krāsām un termiņiem.</p>
          <a href="/kontakti" className="inline-flex items-center rounded-md bg-brand-teal hover:bg-brand-blue text-white px-6 py-3 font-semibold mt-6 transition-transform duration-300 ease-out hover:scale-105">
            Pieprasīt piedāvājumu
          </a>
        </div>
      </section>
    </div>
  )
}
