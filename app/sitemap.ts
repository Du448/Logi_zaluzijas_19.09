import type { MetadataRoute } from 'next'
import { products } from '@/lib/data'
import { series } from '@/lib/series'
import { getAllIds } from '@/lib/zaluzijas'
import { blogPosts } from '@/lib/blog'

const BASE_URL = 'https://vestalux.lv'

// Stabils "pēdējo izmaiņu" datums statiskajam saturam - atjaunināt,
// kad būtiski mainās lapu saturs (nevis katrā build, lai crawleriem
// nesignalizētu viltus izmaiņas).
const CONTENT_UPDATED = new Date('2026-07-17')

// Publiskās statiskās lapas (bez groza, meklēšanas un testa variantiem)
const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/logi', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/logi/ideal-4000', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/logi/ideal-7000', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/logi/rehau-synego', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/zaluzijas', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/piederumi', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pakalpojumi', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/bidamasistemas', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/iestiklot-lodziju', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/aluplast-priekšrocības', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/galerija/logu-apdare', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/projekti', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/par-mums', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/kontakti', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/blogs-2', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/privatuma-politika', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/produkts/${p.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const projectEntries: MetadataRoute.Sitemap = series.map((s) => ({
    url: `${BASE_URL}/projekti/${s.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const blindEntries: MetadataRoute.Sitemap = getAllIds().map((id) => ({
    url: `${BASE_URL}/zaluzijas/${id}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogs-2/${post.id}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticEntries, ...productEntries, ...projectEntries, ...blindEntries, ...blogEntries]
}
