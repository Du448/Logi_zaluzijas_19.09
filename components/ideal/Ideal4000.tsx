"use client"

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function Ideal4000(){
  return (
    <div className="bg-white">
      <AnimatedHero />
      <Benefits />
      <TechVisualizer />
      <Gallery />
      <CTASection />
    </div>
  )
}

function AnimatedHero(){
  return (
    <section className="relative overflow-hidden">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">IDEAL 4000 — energoefektīvs un drošs logu profils</h1>
            <p className="text-gray-600 mb-6">A-klases PVC profilu sistēma ar tērauda pastiprinājumu un efektīvu blīvējumu sistēmu. Izstrādāts, lai nodrošinātu augstu siltumefektivitāti, skaņas izolāciju un ilgtermiņa drošību.</p>
            <div className="flex gap-3">
              <Link href="#viz" className="inline-flex items-center justify-center rounded-md bg-brand-teal text-white px-5 py-3 shadow hover:brightness-95 transition">Apskatīt parametrus</Link>
              <Link href="#gallery" className="inline-flex items-center justify-center rounded-md border border-gray-300 text-gray-800 px-5 py-3 hover:bg-gray-50 transition">Skatīt dizainus</Link>
            </div>
          </div>

          {/* Animated profile illustration */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white shadow-sm p-4">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Frame */}
                <motion.rect x="40" y="30" width="260" height="240" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
                {/* Sash */}
                <motion.rect x="70" y="60" width="200" height="180" rx="10" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} />
                {/* Glass */}
                <motion.rect x="85" y="75" width="170" height="150" rx="6" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
                {/* Steel reinforcement highlight */}
                <motion.rect x="46" y="36" width="20" height="228" rx="6" fill="#e2e8f0" stroke="#334155" strokeWidth="2" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.9, type: 'spring', stiffness: 120, damping: 18 }} />
                <motion.text x="70" y="50" fill="#334155" fontSize="12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>Tērauda pastiprinājums</motion.text>
                {/* Sealing system highlight */}
                <motion.path d="M70 60 L70 240" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
                <motion.text x="78" y="130" fill="#166534" fontSize="12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>Blīvējuma zona</motion.text>
                {/* Arrows */}
                <motion.path d="M260 150 L310 150" stroke="#0ea5e9" strokeWidth="3" markerEnd="url(#arrow)" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }} />
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5e9" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Benefits(){
  const items = useMemo(() => ([
    { title: 'Energoefektivitāte', desc: 'Zema U‑vērtība un efektīvi blīvējumi samazina siltuma zudumus.', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"/></svg>
    )},
    { title: 'Skaņas aizsardzība', desc: 'Skaņas izolācija līdz ~45 dB komfortam pilsētvidē.', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10a9 9 0 0118 0v3a4 4 0 01-4 4h-1a2 2 0 01-2-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2H4a1 1 0 01-1-1v-6z"/></svg>
    )},
    { title: 'Drošība', desc: 'Tērauda pastiprinājums un RC2 iespējas paaugstinātai drošībai.', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/></svg>
    )},
    { title: 'Dizaina daudzveidība', desc: 'Formas, laminācijas ar "cool colors", papildu profili.', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
    )},
  ]), [])

  return (
    <section className="bg-white">
      <div className="container py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Galvenie ieguvumi</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 p-5 bg-white/80 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal grid place-items-center mb-3">{it.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{it.title}</div>
              <div className="text-gray-600 text-sm">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechVisualizer(){
  const [uValue, setUValue] = useState(0.9) // W/m²K
  const [db, setDb] = useState(42)
  const [temp, setTemp] = useState(20)

  const uPercent = Math.max(0, Math.min(1, (2.0 - uValue) / 1.5)) // lower is better
  const dbPercent = Math.max(0, Math.min(1, (db - 30) / 20))
  const tPercent = Math.max(0, Math.min(1, (temp + 60) / 130))

  return (
    <section id="viz" className="bg-slate-50">
      <div className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Tehniskie parametri</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard
            title="U‑vērtība (W/m²K)"
            value={uValue.toFixed(2)}
            percent={uPercent}
            color="bg-emerald-500"
          >
            <input type="range" min={0.6} max={2.1} step={0.01} value={uValue} onChange={(e)=>setUValue(parseFloat(e.target.value))} className="w-full" />
            <p className="text-xs text-gray-500 mt-2">Jo zemāka vērtība, jo labāka siltumizolācija.</p>
          </StatCard>

          <StatCard
            title="Skaņas izolācija (dB)"
            value={`${db} dB`}
            percent={dbPercent}
            color="bg-sky-500"
          >
            <input type="range" min={30} max={50} step={1} value={db} onChange={(e)=>setDb(parseInt(e.target.value))} className="w-full" />
            <p className="text-xs text-gray-500 mt-2">Augstāka vērtība nozīmē labāku trokšņu slāpēšanu.</p>
          </StatCard>

          <StatCard
            title="Temp. diapazons (°C)"
            value={`${temp} °C`}
            percent={tPercent}
            color="bg-amber-500"
          >
            <input type="range" min={-60} max={70} step={1} value={temp} onChange={(e)=>setTemp(parseInt(e.target.value))} className="w-full" />
            <p className="text-xs text-gray-500 mt-2">Demonstrācija par materiāla noturību plašā klimata diapazonā.</p>
          </StatCard>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="#cta" className="inline-flex items-center justify-center rounded-md bg-brand-teal text-white px-6 py-3 shadow hover:brightness-95 transition">Saņemt piedāvājumu</Link>
          <span className="text-gray-600">Profilu kombinācijas: 5 kameras • Stiklojums līdz 42 mm • RC2 iespēja</span>
        </div>
      </div>
    </section>
  )
}

function StatCard({ title, value, percent, color, children }: { title: string; value: string | number; percent: number; color: string; children: React.ReactNode }){
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{value}</div>
      </div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${Math.round(percent*100)}%` }} />
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  )
}

function Gallery(){
  const items = [
    { src: 'https://ik.imagekit.io/vbvwdejj5/aluplast-ideal-4000%20-%20Edited.png?updatedAt=1757846173143', title: 'Profila griezums' },
    { src: 'https://images.unsplash.com/photo-1582582621958-cdb9b10b8d6a?q=80&w=1200', title: 'Rāmja forma' },
    { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200', title: 'Vērtnes dizains' },
  ]

  return (
    <section id="gallery" className="bg-white">
      <div className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Galerija un tehnoloģijas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <img src={it.src} alt={it.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <div className="font-medium text-gray-900">{it.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border border-gray-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 4h-3v6H11V6H8l4-4z"/></svg>
              </div>
              <div className="font-semibold text-gray-900">Regel‑Air ventilācija</div>
            </div>
            <p className="text-gray-600 text-sm">Automātiska gaisa padeve veselīgam mikroklimatam bez siltuma zudumiem.</p>
          </div>
          <div className="p-4 rounded-2xl border border-gray-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
              </div>
              <div className="font-semibold text-gray-900">Laminācija “cool colors”</div>
            </div>
            <p className="text-gray-600 text-sm">Saules starojuma noturīgas dekoratīvās plēves mūsdienīgam izskatam.</p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="#cta" className="inline-flex items-center justify-center rounded-md bg-brand-teal text-white px-6 py-3 shadow hover:brightness-95 transition">Saņemt piedāvājumu</Link>
        </div>
      </div>
    </section>
  )
}

function CTASection(){
  return (
    <section id="cta" className="bg-gradient-to-br from-brand-teal to-teal-600">
      <div className="container py-12 md:py-16 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Gatavi sākt ar IDEAL 4000?</h2>
            <p className="text-white/90">Saņemiet personalizētu piedāvājumu 24 stundu laikā. Mūsu speciālisti palīdzēs izvēlēties piemērotākos risinājumus.</p>
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <a href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-6 py-3 font-semibold shadow hover:shadow-md transition">Saņemt piedāvājumu</a>
            <a href="/logi" className="inline-flex items-center justify-center rounded-md border border-white/70 text-white px-6 py-3 hover:bg-white/10 transition">Apskatīt citus profilus</a>
          </div>
        </div>
      </div>
    </section>
  )
}
