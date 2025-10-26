'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

// Define types for search results
interface SearchResult {
  title: string
  description: string
  url: string
  type?: string
  date?: string
  tags?: string[]
}

const SearchResultItem = ({ result, query }: { result: SearchResult; query: string }) => {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  
  // Highlight matching text in the result
  const highlightText = (text: string, query: string) => {
    if (!query) return text
    
    const regex = new RegExp(`(${query})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-100 text-yellow-800 px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden',
        'border border-gray-100 hover:border-brand-teal/30',
        'transform hover:-translate-y-0.5',
        pathname === result.url && 'ring-2 ring-brand-teal/50'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={result.url} className="block p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-brand-teal transition-colors">
                {highlightText(result.title, query)}
              </h2>
              {result.type && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-teal/10 text-brand-teal">
                  {result.type}
                </span>
              )}
            </div>
            
            {result.description && (
              <p className="text-gray-600 mb-3 line-clamp-2">
                {highlightText(result.description, query)}
              </p>
            )}
            
            <div className="flex flex-wrap gap-2 mt-3">
              {result.tags?.map((tag, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-3 flex items-center text-sm text-gray-500">
              <span className="truncate">
                {new URL(result.url, window.location.origin).pathname}
              </span>
              {result.date && (
                <span className="mx-2">•</span>
              )}
              {result.date && (
                <span className="whitespace-nowrap">{result.date}</span>
              )}
            </div>
          </div>
          
          <div className={cn(
            'flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors',
            'text-gray-400 group-hover:text-brand-teal group-hover:bg-brand-teal/10',
            isHovered && 'text-brand-teal bg-brand-teal/10'
          )}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function SearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q')?.trim() || ''
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState(query)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Debounce search
  useEffect(() => {
    if (!query) return
    
    const search = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        if (response.ok) {
          const data = await response.json()
          setResults(data.results || [])
        } else {
          console.error('Search failed:', await response.text())
          setResults([])
        }
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    const timer = setTimeout(search, 300)
    return () => clearTimeout(timer)
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    router.push(`/meklesana?q=${encodeURIComponent(searchQuery)}`)
  }

  // Focus search input on mount
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meklēšanas rezultāti
            </h1>
            
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className={cn(
                'relative flex items-center bg-white rounded-full shadow-sm border transition-all duration-200',
                isSearchFocused ? 'border-brand-teal ring-1 ring-brand-teal' : 'border-gray-300 hover:border-gray-400',
                'focus-within:ring-2 focus-within:ring-brand-teal/50 focus-within:border-brand-teal'
              )}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="block w-full pl-12 pr-4 py-3 border-0 bg-transparent text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Meklēt pēc produkta, pakalpojuma..."
                  autoComplete="off"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-brand-teal hover:bg-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors"
                  >
                    Meklēt
                  </button>
                </div>
              </div>
            </form>
            
            {query && (
              <p className="mt-4 text-gray-600">
                Meklēšanas vaicājums: <span className="font-medium text-brand-teal">&quot;{query}&quot;</span>
              </p>
            )}
          </div>
          
          <div className="space-y-4">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-teal mb-4"></div>
                <p className="text-gray-600">Meklēju rezultātus...</p>
              </div>
            ) : results.length > 0 ? (
              <AnimatePresence>
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Atrasti {results.length} rezultāti
                  </p>
                  {results.map((result, index) => (
                    <SearchResultItem 
                      key={`${result.url}-${index}`} 
                      result={result} 
                      query={query} 
                    />
                  ))}
                </div>
              </AnimatePresence>
            ) : query ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Rezultāti netika atrasti</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Nevarējām atrast nevienu rezultātu meklēšanas vaicājumam <span className="font-medium text-gray-700">&quot;{query}&quot;</span>.
                  Mēģiniet mainīt meklēšanas vaicājumu vai pārbaudiet pareizrakstību.
                </p>
                
                <div className="mt-8">
                  <Link 
                    href="/logi" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-teal hover:bg-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors"
                  >
                    Apskatīt visus produktus
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Ievadiet meklēšanas vaicājumu</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Izmantojiet meklēšanas lauku augšā, lai atrastu vajadzīgo informāciju mūsu vietnē.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
