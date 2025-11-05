import { readFileSync, readdirSync, statSync, existsSync } from 'fs'
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
const PAGE_FILE_NAMES = new Set(['page.tsx', 'page.ts', 'page.jsx', 'page.js'])

const stringLiteralPattern = /`([\s\S]*?)`|"([\s\S]*?)"|'([\s\S]*?)'/g

function deriveUrlPathFromRelativeFile(relativeFilePath: string): string | null {
  const segments = relativeFilePath.split(/[\\/]+/)
  segments.pop() // remove file name
  const filtered = segments.filter(segment => {
    if (!segment) return false
    if (segment.startsWith('(') && segment.endsWith(')')) return false
    return true
  })
  if (filtered.some(segment => segment.includes('['))) {
    return null
  }
  if (filtered.length === 0) {
    return '/'
  }
  return `/${filtered.join('/')}`
}

function generateTitleFromUrl(url: string): string {
  if (url === '/' || url === '') {
    return 'Sākumlapa'
  }
  const segments = url.split('/').filter(Boolean)
  const last = segments[segments.length - 1] || ''
  const decoded = decodeURIComponent(last)
  return decoded
    .replace(/[-_]+/g, ' ')
    .replace(/\b\p{L}/gu, char => char.toUpperCase())
}

function extractMetadataFromSource(source: string): { title?: string; description?: string } {
  const metadataStart = source.indexOf('export const metadata')
  if (metadataStart === -1) {
    return {}
  }
  const braceStart = source.indexOf('{', metadataStart)
  if (braceStart === -1) {
    return {}
  }
  let depth = 0
  for (let i = braceStart; i < source.length; i++) {
    const char = source[i]
    if (char === '{') {
      depth += 1
    } else if (char === '}') {
      depth -= 1
      if (depth === 0) {
        const block = source.slice(braceStart, i + 1)
        const titleMatch = block.match(/title\s*:\s*['"`]{1}([\s\S]*?)['"`]/)
        const descriptionMatch = block.match(/description\s*:\s*['"`]{1}([\s\S]*?)['"`]/)
        return {
          title: titleMatch?.[1]?.trim(),
          description: descriptionMatch?.[1]?.trim(),
        }
      }
    }
  }
  return {}
}

function extractReadableTextFromSource(source: string): string {
  const literalSet = new Set<string>()
  let match: RegExpExecArray | null
  const literalRegex = new RegExp(stringLiteralPattern)
  while ((match = literalRegex.exec(source))) {
    const value = match[1] ?? match[2] ?? match[3] ?? ''
    const trimmed = value.trim()
    if (!trimmed) continue
    if (!/[A-Za-zĀ-ž]/.test(trimmed)) continue
    if (trimmed.length < 3) continue
    if (trimmed.split(/\s+/).length === 1 && /[^A-Za-zĀ-ž]/.test(trimmed)) continue
    if (/^https?:\/\//i.test(trimmed)) continue
    literalSet.add(trimmed)
  }

  const withoutLiterals = source.replace(stringLiteralPattern, ' ')
  const visible = withoutLiterals
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/[^\n\r]*/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const fragments = [...literalSet]
  if (visible) {
    fragments.push(visible)
  }
  return fragments.join(' ')
}

function processPageComponent(fullPath: string, relativePath: string): SearchDocument | null {
  const urlPath = deriveUrlPathFromRelativeFile(relativePath)
  if (!urlPath) {
    return null
  }
  try {
    const source = readFileSync(fullPath, 'utf8')
    const { title, description } = extractMetadataFromSource(source)
    const content = extractReadableTextFromSource(source)

    return {
      id: urlPath,
      title: title || generateTitleFromUrl(urlPath),
      description: description || '',
      content,
      url: urlPath,
      type: 'page',
    }
  } catch (error) {
    console.error(`Error processing ${fullPath}:`, error)
    return null
  }
}

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
    } else if (PAGE_FILE_NAMES.has(entry)) {
      const doc = processPageComponent(fullPath, relativePath)
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
      if (!existsSync(dir)) {
        continue
      }
      const docs = await processDirectory(dir)
      allDocs.push(...docs)
    } catch (error) {
      console.error(`Error indexing ${dir}:`, error)
    }
  }

  // Add static routes that might not be in MDX
  const staticRoutes: SearchDocument[] = [
    {
      id: 'static-home',
      title: 'Sākumlapa',
      description: 'Vestalux - PVC logi un žalūzijas',
      content: 'PVC logi, žalūzijas, logu piederumi un pilns serviss jūsu mājoklim.',
      url: '/',
      type: 'page',
    },
    {
      id: 'static-contact',
      title: 'Kontakti',
      description: 'Sazinies ar mums',
      content: 'Kontakti, adrese, telefons un e-pasts ātrai saziņai ar Vestalux komandu.',
      url: '/kontakti',
      type: 'page',
    },
    {
      id: 'static-piederumi',
      title: 'Logu piederumi',
      description: 'Ārējās un iekšējās palodzes, logu rokturi un EPS profili vienuviet.',
      content: 'Piederumi logiem — ārējās palodzes, iekšējās palodzes, logu rokturi, EPS bāzes profils. Izturība, estētika un kvalitatīva montāža.',
      url: '/piederumi',
      type: 'category',
    },
    {
      id: 'static-arejas-palodzes',
      title: 'Ārējās palodzes',
      description: 'Izturīgas metāla vai alumīnija palodzes ar pulverkrāsojumu.',
      content: 'Ārējās palodzes no tērauda vai alumīnija, pulverkrāsojums RAL toņos, pilieniņa mala un pielāgojami izmēri. Aizsardzība pret mitrumu un nokrišņiem.',
      url: '/piederumi#arejas-palodzes',
      type: 'category',
    },
    {
      id: 'static-iekshejas-palodzes',
      title: 'Iekšējās palodzes',
      description: 'PVC vai MDF palodzes ar augstu noturību un estētiku.',
      content: 'Iekšējās palodzes – PVC, MDF/lamināts, akmens imitācija. Dažādi profili, krāsas un viegla kopšana ikdienā.',
      url: '/piederumi#iekshejas-palodzes',
      type: 'category',
    },
    {
      id: 'static-logu-rokturi',
      title: 'Logu rokturi',
      description: 'Ergonomiski logu rokturi ar drošības iespējām.',
      content: 'Standarta un ar atslēgu aprīkoti logu rokturi, pieejami baltā, brūnā, antracīta un alumīnija tonī. Droši un ērti logu risinājumi.',
      url: '/piederumi#logu-rokturi',
      type: 'category',
    },
  ]

  const docMap = new Map<string, SearchDocument>()
  const upsertDocument = (doc: SearchDocument) => {
    const existing = docMap.get(doc.url)
    if (!existing || doc.content.length > existing.content.length) {
      docMap.set(doc.url, doc)
    }
  }

  allDocs.forEach(upsertDocument)
  staticRoutes.forEach(upsertDocument)

  const completeIndex = Array.from(docMap.values())

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
