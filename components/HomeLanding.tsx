"use client"

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeLanding(){
  return (
    <div className="bg-white">
      <Hero />
      <TrustStrip />
      <Testimonials />
      <Calculator />
      <RealGallery />
      <FooterQuick />
    </div>
  )
}

function Hero(){
  const bg = "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600"
  return (
    <section className="relative h-[70vh] md:h-[88vh] overflow-hidden">
      <img src={bg} alt="Māja ar lieliem logiem un žalūzijām" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full">
        <div className="container h-full flex items-end pb-12">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">PVC logi un žalūzijas, kas padara jūsu mājokli siltāku, klusāku un modernāku</h1>
            <h2 className="text-lg md:text-2xl text-white/95 mb-6">Kvalitatīva uzstādīšana un uzticama garantija – vairāk nekā 15 gadu pieredze</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold shadow-md">Saņemt piedāvājumu</Link>
              <Link href="#galerija" className="inline-flex items-center justify-center rounded-md bg-white/95 text-gray-900 border border-white/80 hover:bg-white px-6 py-3 text-base font-semibold shadow">Apskatīt produktus</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip(){
  const items = [
    { label: '5 gadu garantija', icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
    )},
    { label: 'Bezmaksas mērījumi', icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18M12 3v18" /></svg>
    )},
    { label: 'Ātra piegāde', icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h13V6H3v7zm13 0l3.5-5H21v5h-5zM5 18a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z"/></svg>
    )},
  ]
  return (
    <section className="bg-white">
      <div className="container py-6">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">{it.icon}</div>
              <span className="font-medium text-gray-900">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Testimonials(){
  const items = [
    { name: 'Jānis, Jelgava', text: 'Uzstādīja PVC logus un rullo žalūzijas – mājā ir siltāk un klusāk. Paldies par ātro darbu!' },
    { name: 'Anna, Rīga', text: 'Profesionāla pieeja un kvalitatīva uzstādīšana. Iesaku ikvienam, kas vēlas labu rezultātu.' },
    { name: 'Mārtiņš, Ogre', text: 'Saņēmām piedāvājumu 24h laikā un darbs tika paveikts bez aizķeršanās.' },
  ]
  return (
    <section className="bg-slate-50">
      <div className="container py-12 md:py-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Ko saka klienti</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="font-medium text-gray-900">{t.name}</div>
              </div>
              <p className="text-gray-700">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Calculator(){
  const [w, setW] = useState(120)
  const [h, setH] = useState(140)
  const [type, setType] = useState<'pvc'|'alum'|'wood'>('pvc')

  const estimate = useMemo(() => {
    const area = (w/100) * (h/100)
    const base = type === 'pvc' ? 130 : type === 'alum' ? 180 : 160
    const price = Math.max(120, Math.round(area * base))
    return price
  }, [w,h,type])

  return (
    <section className="bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Ievadi izmērus un saņem cenu 24h laikā</h3>
            <p className="text-gray-600 mb-6">Aptuvenais aprēķins. Nosūti pieprasījumu un mūsu speciālists precizēs izmaksas bez maksas.</p>
            <form className="grid grid-cols-2 gap-4">
              <label className="col-span-1">
                <div className="text-sm text-gray-700 mb-1">Platums (cm)</div>
                <input type="number" className="w-full border rounded-md px-3 py-2" value={w} min={40} max={300} onChange={(e)=>setW(parseInt(e.target.value||'0'))} />
              </label>
              <label className="col-span-1">
                <div className="text-sm text-gray-700 mb-1">Augstums (cm)</div>
                <input type="number" className="w-full border rounded-md px-3 py-2" value={h} min={40} max={300} onChange={(e)=>setH(parseInt(e.target.value||'0'))} />
              </label>
              <label className="col-span-2">
                <div className="text-sm text-gray-700 mb-1">Tips</div>
                <select className="w-full border rounded-md px-3 py-2" value={type} onChange={(e)=>setType(e.target.value as any)}>
                  <option value="pvc">PVC logi</option>
                  <option value="alum">Alumīnija logi</option>
                  <option value="wood">Koka logi</option>
                </select>
              </label>
            </form>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
            <div className="text-gray-700 mb-2">Aptuvenā cena</div>
            <div className="text-5xl font-extrabold text-gray-900 mb-4">€ {estimate}</div>
            <div className="text-gray-600 mb-6">Balstīts uz norādītajiem izmēriem un izvēlēto tipu. Detalizēta tāme pēc mērījumiem.</div>
            <Link href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold">Aprēķināt cenu</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function RealGallery(){
  const items = [
    { src: 'https://images.unsplash.com/photo-1582582621958-cdb9b10b8d6a?q=80&w=1200', cap: 'Privātmāja, Jelgava — PVC logi + žalūzijas' },
    { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200', cap: 'Dzīvoklis, Rīga — PVC logi' },
    { src: 'https://images.unsplash.com/photo-1582582621871-dc54d1acb002?q=80&w=1200', cap: 'Birojs, Ogre — Vertikālās žalūzijas' },
  ]
  return (
    <section id="galerija" className="bg-white">
      <div className="container py-12 md:py-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Reālie darbi</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <img src={it.src} alt={it.cap} className="w-full h-56 object-cover" />
              <figcaption className="p-4 text-gray-700">{it.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function FooterQuick(){
  return (
    <section className="bg-slate-900 text-white">
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <div className="text-sm text-white/80">Tālrunis</div>
            <a href="tel:+37120886650" className="text-xl font-semibold">+371 20886650</a>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-white/80">E‑pasts</div>
            <a href="mailto:info@vestalux.lv" className="text-xl font-semibold">info@vestalux.lv</a>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="https://wa.me/37120886650" className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-semibold">WhatsApp</a>
            <a href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-white/95 text-gray-900 border border-white/70 hover:bg-white px-5 py-3 font-semibold">Piesaki mērīšanu</a>
          </div>
        </div>
      </div>
    </section>
  )
}
