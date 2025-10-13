'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export type CatalogCard = {
  id: string
  title: string
  image: string
  tag?: string
}

type Props = {
  items: CatalogCard[]
}

const TAGS_ORDER = ['Visi', 'Iekštelpu', 'Āra', 'Motorizētas'] as const

const POPULARITY_ORDER = [
  'rullo-kasetu',
  'rullo',
  'kasetu-diena-nakts',
  'rullo-diena-nakts',
  'screen',
  'vertikalas',
  'aizkaru',
  'mansarda',
  'romiesu',
  'plisetas',
  'foto',
  'aluminija',
  'koka',
  'moskitu',
  'mikstie-logi',
  'rullo-slegi',
] as const

export default function ZaluzijasHeroAndGrid({ items }: Props) {
  // Optional manual tag map. Unknown IDs fall back to no tag and appear under "Visi"
  const tagMap: Record<string, string> = useMemo(
    () => ({
      'arejie-slegi': 'Āra',
      'arejas-vertikalas': 'Āra',
      'markizes': 'Āra',
      'pergola': 'Āra',
      'automatiskas': 'Motorizētas',
      'rullo-slegi': 'Āra',
      'mikstie-logi': 'Āra',
    }),
    []
  )

  const enriched = useMemo(
    () =>
      items.map((item) => {
        const explicitTag = tagMap[item.id]
        if (explicitTag) {
          return { ...item, tag: explicitTag }
        }

        return { ...item, tag: 'Iekštelpu' }
      }),
    [items, tagMap]
  )

  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState<'Visi' | 'Iekštelpu' | 'Āra' | 'Motorizētas'>('Visi')
  const [sortBy, setSortBy] = useState<'az' | 'za' | 'popularity'>('popularity')

  const popularityIndexMap = useMemo(() => {
    const map = new Map<string, number>()
    POPULARITY_ORDER.forEach((id, index) => {
      map.set(id, index)
    })
    return map
  }, [])

  const filtered = useMemo(() => {
    let list = enriched
      .filter((i) =>
        selectedTag === 'Visi' ? true : i.tag === selectedTag
      )
      .filter((i) => i.title.toLowerCase().includes(search.toLowerCase()))

    if (sortBy === 'popularity') {
      list.sort((a, b) => {
        const aIndex = popularityIndexMap.has(a.id) ? popularityIndexMap.get(a.id)! : Number.MAX_SAFE_INTEGER
        const bIndex = popularityIndexMap.has(b.id) ? popularityIndexMap.get(b.id)! : Number.MAX_SAFE_INTEGER
        return aIndex - bIndex || a.title.localeCompare(b.title)
      })
    } else {
      list.sort((a, b) =>
        sortBy === 'az' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      )
    }

    return list
  }, [enriched, selectedTag, search, sortBy])

  return (
    <div className="mt-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Žalūziju Katalogs</h1>
            <p className="text-slate-600 max-w-xl">
              Minimālistisks dizains, tīras līnijas un mūsdienīgi risinājumi mājām un birojam. 
              Pārlūkojiet mūsu žalūziju klāstu un atrodiet piemērotāko interjeram.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#katalogs" className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">Apskatīt katalogu</a>
              <Link href="/kontakti" className="px-5 py-3 bg-white text-slate-800 border border-gray-200 rounded-lg font-semibold hover:bg-slate-50 transition">Konsultācija</Link>
            </div>
          </div>
          <div className="relative h-48 md:h-auto">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596079890754-8d1c0319fb0f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] hidden md:block" />
          </div>
        </div>
      </section>

      {/* Filter & Sort */}
      <section className="mt-10 bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {TAGS_ORDER.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === t
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Meklēt pēc nosaukuma..."
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'az' | 'za' | 'popularity')}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="az">A–Z</option>
              <option value="za">Z–A</option>
              <option value="popularity">Pēc popularitātes</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="katalogs" className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((item, idx) => (
            <motion.div
              key={`catalog-card-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <Link href={`/zaluzijas/${item.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.tag && item.tag !== 'Iekštelpu' && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-gray-800">
                      {item.tag}
                    </span>
                  )}
                  {/* Title overlay on image */}
                  <div className="absolute inset-x-0 bottom-0">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
                    <h3 className="relative z-[1] px-4 pb-3 font-semibold text-white drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
