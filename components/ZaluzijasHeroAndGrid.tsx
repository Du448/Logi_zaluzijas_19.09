'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

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

type ValuePropTag = {
  label: string
  chipClass: string
  relatedIds: string[]
  starClass: string
  ringClass: string
}

type ValueProp = {
  title: string
  description: string
  gradient: string
  targetId?: string
  tags?: ValuePropTag[]
}

const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Pilnīga tumsa, kad to vajag.',
    description: 'Ar Blackout audumu tu vari pilnībā izolēt gaismu – ideāli dienas miegam vai mājas kinozālei.',
    gradient: 'from-slate-900 via-slate-800 to-slate-700',
    targetId: 'rullo-kasetu',
    tags: [
      {
        label: 'Rullo kasešu',
        chipClass: 'bg-indigo-500/80 text-white',
        relatedIds: ['rullo-kasetu'],
        starClass: 'bg-indigo-500/80 text-white',
        ringClass: 'ring-indigo-400/70',
      },
      {
        label: 'Rullo',
        chipClass: 'bg-sky-500/80 text-white',
        relatedIds: ['rullo'],
        starClass: 'bg-sky-500/80 text-white',
        ringClass: 'ring-sky-400/70',
      },
      {
        label: 'Mansarda',
        chipClass: 'bg-emerald-500/80 text-white',
        relatedIds: ['mansarda'],
        starClass: 'bg-emerald-500/80 text-white',
        ringClass: 'ring-emerald-400/70',
      },
    ],
  },
  {
    title: 'Gaisma tikai tik, cik tu vēlies.',
    description: 'Regulē saules intensitāti un noskaņu telpā ar vienu kustību.',
    gradient: 'from-sky-700 via-blue-600 to-indigo-600',
    targetId: 'plisetas',
    tags: [
      {
        label: 'Kasešu "Diena-nakts"',
        chipClass: 'bg-indigo-500/85 text-white',
        relatedIds: ['kasetu-diena-nakts'],
        starClass: 'bg-indigo-500/90 text-white',
        ringClass: 'ring-indigo-400/70',
      },
      {
        label: 'Rullo "Diena-nakts"',
        chipClass: 'bg-cyan-500/80 text-white',
        relatedIds: ['rullo-diena-nakts'],
        starClass: 'bg-cyan-500/90 text-white',
        ringClass: 'ring-cyan-400/70',
      },
      {
        label: 'Plisētas',
        chipClass: 'bg-emerald-500/80 text-white',
        relatedIds: ['plisetas'],
        starClass: 'bg-emerald-500/90 text-white',
        ringClass: 'ring-emerald-400/70',
      },
    ],
  },
  {
    title: 'Ideāls miegs arī dienas laikā.',
    description: 'Piemērots tiem, kuri guļ, kad ārā vēl gaišs – miers bez traucējošas gaismas.',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-500',
    targetId: 'rullo-kasetu',
    tags: [
      {
        label: 'Rullo kasešu',
        chipClass: 'bg-indigo-500/80 text-white',
        relatedIds: ['rullo-kasetu'],
        starClass: 'bg-indigo-500/90 text-white',
        ringClass: 'ring-indigo-400/70',
      },
      {
        label: 'Kasešu "Diena-nakts"',
        chipClass: 'bg-purple-500/85 text-white',
        relatedIds: ['kasetu-diena-nakts'],
        starClass: 'bg-purple-500/90 text-white',
        ringClass: 'ring-purple-400/70',
      },
    ],
  },
  {
    title: 'Siltums ziemā, vēsums vasarā.',
    description: 'Žalūzijas palīdz uzturēt patīkamu temperatūru un samazināt enerģijas patēriņu.',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    targetId: 'screen',
    tags: [
      {
        label: 'Screen',
        chipClass: 'bg-orange-500/85 text-white',
        relatedIds: ['screen'],
        starClass: 'bg-orange-500/90 text-white',
        ringClass: 'ring-orange-400/70',
      },
    ],
  },
  {
    title: 'Katras žalūzijas – individuāli tev.',
    description: 'Katra tiek izgatavota pēc izmēra, krāsas un auduma, kas atbilst tieši tavai telpai.',
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-500',
    targetId: 'romiesu',
    tags: [
      {
        label: 'Rullo kasešu',
        chipClass: 'bg-indigo-500/85 text-white',
        relatedIds: ['rullo-kasetu'],
        starClass: 'bg-indigo-500/90 text-white',
        ringClass: 'ring-indigo-400/70',
      },
      {
        label: 'Rullo žalūzijas',
        chipClass: 'bg-sky-500/85 text-white',
        relatedIds: ['rullo'],
        starClass: 'bg-sky-500/90 text-white',
        ringClass: 'ring-sky-400/70',
      },
      {
        label: 'Kasešu "Diena-nakts"',
        chipClass: 'bg-purple-500/85 text-white',
        relatedIds: ['kasetu-diena-nakts'],
        starClass: 'bg-purple-500/90 text-white',
        ringClass: 'ring-purple-400/70',
      },
      {
        label: 'Rullo "Diena-nakts"',
        chipClass: 'bg-cyan-500/85 text-white',
        relatedIds: ['rullo-diena-nakts'],
        starClass: 'bg-cyan-500/90 text-white',
        ringClass: 'ring-cyan-400/70',
      },
      {
        label: 'SCREEN',
        chipClass: 'bg-orange-500/85 text-white',
        relatedIds: ['screen'],
        starClass: 'bg-orange-500/90 text-white',
        ringClass: 'ring-orange-400/70',
      },
      {
        label: 'Vertikālās',
        chipClass: 'bg-pink-500/85 text-white',
        relatedIds: ['vertikalas'],
        starClass: 'bg-pink-500/90 text-white',
        ringClass: 'ring-pink-400/70',
      },
      {
        label: '"Aizkaru"',
        chipClass: 'bg-rose-500/85 text-white',
        relatedIds: ['aizkaru'],
        starClass: 'bg-rose-500/90 text-white',
        ringClass: 'ring-rose-400/70',
      },
      {
        label: 'Mansarda',
        chipClass: 'bg-emerald-500/85 text-white',
        relatedIds: ['mansarda'],
        starClass: 'bg-emerald-500/90 text-white',
        ringClass: 'ring-emerald-400/70',
      },
      {
        label: 'Romiešu',
        chipClass: 'bg-fuchsia-500/85 text-white',
        relatedIds: ['romiesu'],
        starClass: 'bg-fuchsia-500/90 text-white',
        ringClass: 'ring-fuchsia-400/70',
      },
      {
        label: 'Plisētās',
        chipClass: 'bg-teal-500/85 text-white',
        relatedIds: ['plisetas'],
        starClass: 'bg-teal-500/90 text-white',
        ringClass: 'ring-teal-400/70',
      },
      {
        label: 'Foto',
        chipClass: 'bg-yellow-500/85 text-slate-900',
        relatedIds: ['foto'],
        starClass: 'bg-yellow-400 text-slate-900',
        ringClass: 'ring-yellow-300/80',
      },
      {
        label: 'Alumīnija',
        chipClass: 'bg-slate-500/85 text-white',
        relatedIds: ['aluminija'],
        starClass: 'bg-slate-500/90 text-white',
        ringClass: 'ring-slate-400/70',
      },
      {
        label: 'Koka',
        chipClass: 'bg-amber-600/85 text-white',
        relatedIds: ['koka'],
        starClass: 'bg-amber-600/90 text-white',
        ringClass: 'ring-amber-500/70',
      },
      {
        label: 'Moskītu tīkls',
        chipClass: 'bg-lime-500/85 text-white',
        relatedIds: ['moskitu'],
        starClass: 'bg-lime-500/90 text-white',
        ringClass: 'ring-lime-400/70',
      },
      {
        label: 'Mīkstie logi',
        chipClass: 'bg-blue-400/85 text-white',
        relatedIds: ['mikstie-logi'],
        starClass: 'bg-blue-400/90 text-white',
        ringClass: 'ring-blue-300/70',
      },
      {
        label: 'Rullo slēģi',
        chipClass: 'bg-slate-800/85 text-white',
        relatedIds: ['rullo-slegi'],
        starClass: 'bg-slate-800/90 text-white',
        ringClass: 'ring-slate-700/70',
      },
    ],
  },
  {
    title: 'Aizsargā māju no saules un skatieniem.',
    description: 'Privātums un aizsardzība bez kompromisiem – gan iekšpusē, gan ārpusē.',
    gradient: 'from-slate-800 via-slate-700 to-zinc-600',
    targetId: 'screen',
  },
  {
    title: 'Stils, komforts un funkcionalitāte vienā.',
    description: 'Elegants dizains, kas papildina interjeru un padara ikdienu ērtāku.',
    gradient: 'from-indigo-700 via-violet-600 to-purple-600',
    targetId: 'aizkaru',
    tags: [
      {
        label: '"Aizkaru" žalūzijas',
        chipClass: 'bg-rose-500/85 text-white',
        relatedIds: ['aizkaru'],
        starClass: 'bg-rose-500/90 text-white',
        ringClass: 'ring-rose-400/70',
      },
      {
        label: 'Romiešu žalūzijas',
        chipClass: 'bg-fuchsia-500/85 text-white',
        relatedIds: ['romiesu'],
        starClass: 'bg-fuchsia-500/90 text-white',
        ringClass: 'ring-fuchsia-400/70',
      },
      {
        label: 'Koka žalūzijas',
        chipClass: 'bg-amber-600/85 text-white',
        relatedIds: ['koka'],
        starClass: 'bg-amber-600/90 text-white',
        ringClass: 'ring-amber-500/70',
      },
      {
        label: 'Alumīnija žalūzijas',
        chipClass: 'bg-slate-500/85 text-white',
        relatedIds: ['aluminija'],
        starClass: 'bg-slate-500/90 text-white',
        ringClass: 'ring-slate-400/70',
      },
      {
        label: 'Foto žalūzijas',
        chipClass: 'bg-yellow-500/85 text-slate-900',
        relatedIds: ['foto'],
        starClass: 'bg-yellow-400 text-slate-900',
        ringClass: 'ring-yellow-300/80',
      },
    ],
  },
  {
    title: 'Miers, ko vari aizvērt ar vienu kustību.',
    description: 'Izbaudi klusumu un privātumu, kad vien to vēlies.',
    gradient: 'from-teal-600 via-emerald-600 to-emerald-500',
    targetId: 'koka',
  },
  {
    title: 'No pilnīgas tumsas līdz maigai gaismai.',
    description: 'Izvēlies savu gaismas līmeni – no rīta līdz vakaram.',
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
    targetId: 'kasetu-diena-nakts',
    tags: [
      {
        label: 'Rullo kasešu žalūzijas',
        chipClass: 'bg-indigo-500/85 text-white',
        relatedIds: ['rullo-kasetu'],
        starClass: 'bg-indigo-500/90 text-white',
        ringClass: 'ring-indigo-400/70',
      },
      {
        label: 'Rullo žalūzijas',
        chipClass: 'bg-sky-500/85 text-white',
        relatedIds: ['rullo'],
        starClass: 'bg-sky-500/90 text-white',
        ringClass: 'ring-sky-400/70',
      },
      {
        label: 'Kasešu žalūzijas "Diena-nakts"',
        chipClass: 'bg-purple-500/85 text-white',
        relatedIds: ['kasetu-diena-nakts'],
        starClass: 'bg-purple-500/90 text-white',
        ringClass: 'ring-purple-400/70',
      },
      {
        label: 'Rullo žalūzijas "Diena-nakts"',
        chipClass: 'bg-cyan-500/85 text-white',
        relatedIds: ['rullo-diena-nakts'],
        starClass: 'bg-cyan-500/90 text-white',
        ringClass: 'ring-cyan-400/70',
      },
      {
        label: '"Aizkaru" žalūzijas',
        chipClass: 'bg-rose-500/85 text-white',
        relatedIds: ['aizkaru'],
        starClass: 'bg-rose-500/90 text-white',
        ringClass: 'ring-rose-400/70',
      },
      {
        label: 'Mansarda logu žalūzijas',
        chipClass: 'bg-emerald-500/85 text-white',
        relatedIds: ['mansarda'],
        starClass: 'bg-emerald-500/90 text-white',
        ringClass: 'ring-emerald-400/70',
      },
      {
        label: 'Romiešu žalūzijas',
        chipClass: 'bg-fuchsia-500/85 text-white',
        relatedIds: ['romiesu'],
        starClass: 'bg-fuchsia-500/90 text-white',
        ringClass: 'ring-fuchsia-400/70',
      },
      {
        label: 'Alumīnija žalūzijas',
        chipClass: 'bg-slate-500/85 text-white',
        relatedIds: ['aluminija'],
        starClass: 'bg-slate-500/90 text-white',
        ringClass: 'ring-slate-400/70',
      },
      {
        label: 'Koka žalūzijas',
        chipClass: 'bg-amber-600/85 text-white',
        relatedIds: ['koka'],
        starClass: 'bg-amber-600/90 text-white',
        ringClass: 'ring-amber-500/70',
      },
    ],
  },
  {
    title: 'Žalūzijas, kas pielāgojas tavam dzīves ritmam.',
    description: 'Automātiskas vai manuālas – vienmēr precīzi tā, kā tev ērti.',
    gradient: 'from-rose-600 via-red-500 to-orange-500',
    targetId: 'rullo-slegi',
  },
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
  const [highlightedIds, setHighlightedIds] = useState<Record<string, { starClass: string; ringClass: string }>>({})

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
  }, [enriched, selectedTag, search, sortBy, popularityIndexMap])

  useEffect(() => {
    if (Object.keys(highlightedIds).length === 0) {
      return
    }

    const timeout = window.setTimeout(() => {
      setHighlightedIds({})
    }, 2400)

    return () => window.clearTimeout(timeout)
  }, [highlightedIds])

  const handleValuePropClick = (prop: ValueProp) => {
    setSelectedTag('Visi')
    setSortBy('popularity')
    setSearch('')

    const entries: Record<string, { starClass: string; ringClass: string }> = {}

    if (prop.tags && prop.tags.length > 0) {
      prop.tags.forEach((tag) => {
        tag.relatedIds.forEach((id) => {
          entries[id] = { starClass: tag.starClass, ringClass: tag.ringClass }
        })
      })
    }

    if (prop.targetId && !entries[prop.targetId]) {
      entries[prop.targetId] = { starClass: 'bg-white/30 text-white', ringClass: 'ring-sky-400/70' }
    }

    setHighlightedIds(entries)

    const scrollTarget = prop.targetId ?? Object.keys(entries)[0]

    if (!scrollTarget) {
      return
    }

    window.setTimeout(() => {
      const el = document.getElementById(`catalog-card-${scrollTarget}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 180)
  }

  return (
    <div className="mt-6">
      <section>
        <div className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">Atrodi sev piemērotāko žalūziju risinājumu</h2>
            <p className="text-slate-600">
              Izmanto praktiskos saukļus, lai ātri saprastu, kurš risinājums der tieši tavai telpai, ritmam un
              komforta prasībām.
            </p>
          </div>
          <div className="grid gap-5">
              {VALUE_PROPS.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => handleValuePropClick(item)}
              whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'relative overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-left text-white transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60',
                    item.gradient,
                    'hover:scale-[1.015]'
                  )}
                >
              <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" aria-hidden="true" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                    Klikšķini, lai uzzinātu vairāk
                    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12l6-6" />
                      <path d="M6 4h6v6" />
                    </svg>
                  </span>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={`${item.title}-${tag.label}`} className={cn('inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-sm', tag.chipClass)}>
                          <span>{tag.label}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-semibold leading-snug">{item.title}</h2>
                <p className="text-lg leading-relaxed text-white/85">{item.description}</p>
              </div>
            </motion.button>
          ))}
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
          {filtered.map((item, idx) => {
            const highlightInfo = highlightedIds[item.id]

            return (
              <motion.div
                key={`catalog-card-${item.id}`}
                id={`catalog-card-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, scale: highlightInfo ? 1.06 : 1 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  scale: { type: 'spring', stiffness: 260, damping: 18 },
                }}
                whileHover={{ y: -4 }}
                className={cn(
                  'group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition',
                  highlightInfo
                    ? cn('shadow-2xl ring-offset-2 ring-offset-white', highlightInfo.ringClass, 'ring-4')
                    : 'hover:shadow-lg'
                )}
              >
                {highlightInfo && (
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className={cn(
                      'absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold shadow-lg ring-2 ring-white/70',
                      highlightInfo.starClass
                    )}
                    aria-hidden="true"
                  >
                    ★
                  </motion.span>
                )}
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
            )
          })}
        </div>
      </section>
    </div>
  )
}
