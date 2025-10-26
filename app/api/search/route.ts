import { NextResponse } from 'next/server'
import { search } from '@/lib/search'

// Cache for search results
const searchCache = new Map()
const CACHE_TTL = 1000 * 60 * 5 // 5 minutes

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.trim()
  const limit = parseInt(searchParams.get('limit') || '20')

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  // Check cache first
  const cacheKey = `${query}:${limit}`
  const cached = searchCache.get(cacheKey)
  const now = Date.now()
  
  if (cached && now - cached.timestamp < CACHE_TTL) {
    return NextResponse.json({ results: cached.results })
  }

  try {
    // Search through the actual content
    const results = await search(query, limit)
    
    // Format results for the frontend
    const formattedResults = results.map(doc => ({
      title: doc.title,
      description: doc.description || '',
      url: doc.url,
      type: mapDocType(doc.type),
      ...(doc.date && { date: doc.date }),
      ...(doc.tags && doc.tags.length > 0 && { tags: doc.tags })
    }))

    // Update cache
    searchCache.set(cacheKey, {
      results: formattedResults,
      timestamp: now
    })

    return NextResponse.json({ results: formattedResults })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Radās kļūda meklējot' },
      { status: 500 }
    )
  }
}

// Helper function to map internal doc types to display types
function mapDocType(type: string): string {
  const typeMap: Record<string, string> = {
    'page': 'Lapa',
    'blog': 'Raksts',
    'product': 'Produkts',
    'category': 'Kategorija',
    'service': 'Pakalpojums'
  }
  return typeMap[type] || 'Cits'
}
