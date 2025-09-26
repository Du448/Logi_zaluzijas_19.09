"use client"

import Link from "next/link"
import { useState } from "react"

export default function AboutPage() {
  const gallery: { src: string; alt: string }[] = [
    { src: "https://ik.imagekit.io/vbvwdejj5/7921795f-c9aa-4908-b5bf-1438a27f6910.jpg?updatedAt=1758284332803", alt: "Vestalux komandas darbs objektā" },
    { src: "https://ik.imagekit.io/vbvwdejj5/6ca1bca0-8a7e-4f8c-bcc1-954bfc0536bd.jpg?updatedAt=1758284601843", alt: "PVC logu montāža un kvalitātes pārbaude" },
    { src: "https://ik.imagekit.io/vbvwdejj5/093528f8-dbf7-42db-ab07-3c1141a1fcac.png?updatedAt=1758285050531", alt: "Logu furnitūra un detaļas" },
    { src: "https://ik.imagekit.io/vbvwdejj5/gbi4dqgbi4dqgb.png?updatedAt=1758285093586", alt: "Palodžu uzstādīšana" },
    { src: "https://ik.imagekit.io/vbvwdejj5/y3efxpy.png?updatedAt=1758269554852", alt: "EPS pamatnes profila risinājums" },
    { src: "https://ik.imagekit.io/vbvwdejj5/182186.jpg?updatedAt=1758260288040", alt: "Realizēts objekts ar mūsu risinājumiem" },
  ]
  const [gIndex, setGIndex] = useState(0)
  const next = () => setGIndex((i) => (i + 1) % gallery.length)
  const prev = () => setGIndex((i) => (i - 1 + gallery.length) % gallery.length)

  return (
    <main className="text-gray-900">
      {/* Story */}
      <section className="bg-white">
        <div className="container py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Mūsu stāsts</h2>
            <p className="mt-4 text-gray-600">
              Sākām ar vienkāršu mērķi — piegādāt logus un žalūzijas, kas tiešām uzlabo ikdienu. 
              Šodien apvienojam mūsdienīgu tehnoloģiju ar godīgu attieksmi un rūpīgu montāžu.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-emerald-600 mt-0.5" /> Sertificēti materiāli un furnitūra</li>
              <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-emerald-600 mt-0.5" /> Precīzi mērījumi un tīra uzstādīšana</li>
              <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-emerald-600 mt-0.5" /> Skaidri garantijas nosacījumi</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center">Vērtības, kas mūs vada</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Kvalitāte", desc: "Izmantojam tikai pārbaudītus materiālus un komponentes." },
              { title: "Ilgtspēja", desc: "Domājam par siltuma ekonomiju un ilgmūžību." },
              { title: "Meistarība", desc: "Detalizēta montāža un rūpīgs darbs katrā projektā." },
              { title: "Serviss", desc: "Komunikācija, kas palīdz pieņemt labākos lēmumus." },
            ].map((v) => (
              <article key={v.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L6 20l2-7L2.5 9H9z"/></svg>
                </div>
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="text-gray-600 mt-1">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery slider */}
      <section id="galerija" className="bg-white">
        <div className="container py-16">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gallery[gIndex].src} alt={gallery[gIndex].alt} className="w-full h-[50vh] md:h-[65vh] object-cover" />

            {/* Arrows */}
            <button aria-label="Iepriekšējais attēls" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white grid place-items-center hover:bg-black/70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button aria-label="Nākamais attēls" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white grid place-items-center hover:bg-black/70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
              {gallery.map((_, i) => (
                <button key={i} onClick={() => setGIndex(i)} aria-label={`Rādīt ${i+1}. attēlu`} className={`h-2.5 rounded-full transition-all ${i===gIndex? 'w-5 bg-white':'w-2.5 bg-white/60 hover:bg-white'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Stats */}
      <section className="bg-white">
        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">2000+</div>
              <div className="text-gray-600">Uzstādīti logi</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Gadu pieredze</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Apmierināti klienti</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Gatavi sadarboties?</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mt-3">Pastāstiet par savu ieceri — palīdzēsim izvēlēties risinājumus un sagatavosim piedāvājumu.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/kontakti" className="px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-gray-50 transition">Sazināties</Link>
            <a href="tel:+37120886650" className="px-6 py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition">Zvanīt: 20886650</a>
          </div>
        </div>
      </section>
    </main>
  )
}

function CheckIcon({ className }: { className?: string }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
