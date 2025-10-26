import { readFileSync, readdirSync, statSync } from 'fs'
import { join, resolve } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { format } from 'date-fns'

interface SearchDocument {
  id: string
  title: string
  description: string
  content: string
  url: string
  type: 'page' | 'blog' | 'product' | 'category'
  date?: string
  tags?: string[]
  category?: string
}

let searchIndex: SearchDocument[] = []
let lastIndexTime = 0
const INDEX_TTL = 1000 * 60 * 60 // 1 hour

async function processMdxFile(filePath: string, urlPath: string): Promise<SearchDocument | null> {
  try {
    const source = readFileSync(filePath, 'utf8')
    const serialized = await serialize(source, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    })

    // Remove frontmatter from source for searchable content
    const content = source.replace(/^---[\s\S]*?---\s*/, '')
    const data: any = (serialized as any).frontmatter || {}

    return {
      id: urlPath,
      title: data.title || urlPath.split('/').pop()?.replace(/-/g, ' ') || 'Untitled',
      description: data.description || '',
      content: content,
      url: urlPath,
      type: data.type || 'page',
      date: data.date ? format(new Date(data.date), 'yyyy-MM-dd') : undefined,
      tags: data.tags || [],
      category: data.category,
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
    return null
  }
}

async function processDirectory(directory: string, basePath: string = ''): Promise<SearchDocument[]> {
  const results: SearchDocument[] = []
  const entries = readdirSync(directory)

  for (const entry of entries) {
    const fullPath = join(directory, entry)
    const relativePath = join(basePath, entry)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      const nested = await processDirectory(fullPath, relativePath)
      results.push(...nested)
    } else if (entry.endsWith('.mdx') || entry.endsWith('.md')) {
      const urlPath = `/${relativePath.replace(/\.(mdx|md)$/, '')}`
      const doc = await processMdxFile(fullPath, urlPath)
      if (doc) results.push(doc)
    }
  }

  return results
}

export async function buildSearchIndex(): Promise<SearchDocument[]> {
  const now = Date.now()
  
  // Return cached index if it's fresh
  if (searchIndex.length > 0 && now - lastIndexTime < INDEX_TTL) {
    return searchIndex
  }

  console.log('Building search index...')
  
  // Process all content directories
  const contentDirs = [
    resolve(process.cwd(), 'app'),
    resolve(process.cwd(), 'content')
  ]
  
  const allDocs: SearchDocument[] = []
  
  for (const dir of contentDirs) {
    try {
      const docs = await processDirectory(dir)
      allDocs.push(...docs)
    } catch (error) {
      console.error(`Error indexing ${dir}:`, error)
    }
  }

  // Add static routes that might not be in MDX
  const staticRoutes: Partial<SearchDocument>[] = [
    {
      title: 'Sākumlapa',
      description: 'Vestalux - PVC logi un žalūzijas',
      url: '/',
      type: 'page' as const,
    },
    {
      title: 'Kontakti',
      description: 'Sazinies ar mums',
      url: '/kontakti',
      type: 'page' as const,
    },
    // Add more static routes as needed
  ]

  const completeIndex = [
    ...allDocs,
    ...staticRoutes.map((doc, i) => ({
      id: doc.url || `static-${i}`,
      title: doc.title || '',
      description: doc.description || '',
      content: '',
      url: doc.url || '#',
      type: doc.type || 'page',
    }))
  ]

  searchIndex = completeIndex
  lastIndexTime = now
  
  console.log(`Search index built with ${searchIndex.length} documents`)
  return searchIndex
}

export async function search(query: string, limit: number = 20): Promise<SearchDocument[]> {
  if (!query.trim()) return []
  
  const index = await buildSearchIndex()
  const queryTerms = query.toLowerCase().split(/\s+/).filter(Boolean)
  
  return index
    .map(doc => {
      const content = `${doc.title} ${doc.description} ${doc.content}`.toLowerCase()
      
      // Simple relevance scoring:
      // - Exact title match: 100 points
      // - Title contains: 50 points
      // - Content contains: 10 points per term
      // - Term at start of word: bonus 5 points
      let score = 0
      
      for (const term of queryTerms) {
        // Title matches
        if (doc.title.toLowerCase().includes(term)) {
          score += doc.title.toLowerCase() === term ? 100 : 50
        }
        
        // Content matches
        const contentMatches = content.match(new RegExp(term, 'gi')) || []
        score += contentMatches.length * 10
        
        // Bonus for matches at word boundaries
        const wordBoundaryMatches = content.match(new RegExp(`\\b${term}`, 'gi')) || []
        score += wordBoundaryMatches.length * 5
      }
      
      return { ...doc, score }
    })
    .filter(doc => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

// Pre-build index on module load
if (process.env.NODE_ENV === 'production') {
  buildSearchIndex().catch(console.error)
}
