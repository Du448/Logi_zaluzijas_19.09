'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { series } from '@/lib/series'
type SortOption = 'az' | 'za'

export default function Page(){
  const [selectedCategory, setSelectedCategory] = useState<string>('Visi')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('az')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(series.map(item => item.category)))
    const cats = ['Visi', 'Privātmājas', ...unique]
    // Ensure uniqueness if 'Privātmājas' already exists in data later
    return Array.from(new Set(cats))
  }, [])

  const filteredAndSortedSeries = useMemo(() => {
    const filtered = (selectedCategory === 'Visi'
      ? series
      : series.filter(item =>
          (item.tags || []).some(t => t.toLowerCase() === selectedCategory.toLowerCase())
        ))
      .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    const sorted = [...filtered]
    if (sortBy === 'za') {
      sorted.sort((a, b) => b.title.localeCompare(a.title))
    } else {
      sorted.sort((a, b) => a.title.localeCompare(b.title))
    }

    return sorted
  }, [selectedCategory, search, sortBy])

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Izvēlēsies logus savai dzīvokļu sērijai
          </p>
        </motion.div>

        {/* Filter and Sort Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="az">A–Z</option>
              <option value="za">Z–A</option>
            </select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredAndSortedSeries.map((item, index) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/projekti/${item.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 group-hover:shadow-xl group-hover:border-gray-300">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{backgroundImage: `url(${item.image})`}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 backdrop-blur-sm rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>

                    {/* Year badge removed */}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute inset-x-0 bottom-0">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
                      <h3 className="relative z-[1] px-6 pb-4 text-lg md:text-xl font-semibold text-white drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedSeries.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nav atrasti projekti</h3>
            <p className="text-gray-600">Izvēlētajā kategorijā nav pieejami projekti.</p>
          </motion.div>
        )}

        {/* Our Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Mūsu process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Konsultācija', desc: 'Izrunājam vajadzības un mērķus', icon: (
                  <path d="M8 10h8M8 14h5M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
                ) },
                { title: 'Mērījumi', desc: 'Precīzi izmēri projekta vietā', icon: (
                  <path d="M4 7h16M4 12h10M4 17h7" />
                ) },
                { title: 'Ražošana', desc: 'Kvalitatīva un savlaicīga izgatavošana', icon: (
                  <path d="M4 6h16v12H4zM8 6v12M16 6v12" />
                ) },
                { title: 'Uzstādīšana', desc: 'Tīra un profesionāla montāža', icon: (
                  <path d="M6 18V8l6-4 6 4v10" />
                ) },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{step.icon}</svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <CTA />
      </div>
    </section>
  )
}

function FAQ(){
  const faqs = [
    { q: 'Cik ilgs ir izgatavošanas termiņš?', a: 'Atkarībā no konfigurācijas parasti 2–4 nedēļas. Pīķa sezonās termiņš var nedaudz mainīties.' },
    { q: 'Vai nodrošināt montāžu?', a: 'Jā, mūsu sertificētās brigādes veic profesionālu un tīru uzstādīšanu visā Latvijā.' },
    { q: 'Kāds ir garantijas termiņš?', a: 'Ražojumiem un montāžai nodrošinām garantiju saskaņā ar līgumu un ražotāja noteikumiem.' },
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-24"
    >
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Biežāk uzdotie jautājumi</h2>
      <div className="bg-white border border-gray-200 rounded-2xl divide-y">
        {faqs.map((f, i) => (
          <div key={i} className="p-6">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between text-left">
              <span className="text-lg font-semibold text-slate-800">{f.q}</span>
              <svg className={`w-5 h-5 text-slate-600 transition-transform ${open===i? 'rotate-180':''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {open === i && (
              <p className="mt-3 text-slate-600">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function CTA(){
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-24"
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-200">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/vbvwdejj5/tyojetyojety?updatedAt=1758269316536')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative p-14 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Gatavi jauniem logiem?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">Sazinieties ar mums, lai saņemtu konsultāciju un precīzu tāmi jūsu PVC logu projektam.</p>
          <div className="flex gap-3 justify-center">
            <a href="/kontakti" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold">Sazināties</a>
            <a href="tel:+37120886650" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition font-semibold">Zvanīt: 20886650</a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
