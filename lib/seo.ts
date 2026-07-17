import type { Metadata } from 'next'

// Vienots metadatu palīgs visām lapām: per-page canonical, Open Graph (lv_LV),
// Twitter kartes. Lieto kopā ar root layout title template ("%s | Vestalux").

export const SITE_URL = 'https://vestalux.lv'
export const SITE_NAME = 'Vestalux'
export const DEFAULT_OG_IMAGE =
  'https://ik.imagekit.io/vbvwdejj5/22380411.jpg?updatedAt=1758275325013'

type BuildMetadataInput = {
  /** Lapas virsraksts (bez " | Vestalux" - to pievieno template) */
  title: string
  description: string
  /** Relatīvais ceļš, piem. '/logi' vai '/produkts/pvc-logs-70mm' */
  path: string
  /** OG attēls (absolūts URL); ja nav - noklusējuma hero attēls */
  image?: string
  imageAlt?: string
  noindex?: boolean
  ogType?: 'website' | 'article'
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  noindex = false,
  ogType = 'website',
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}` || SITE_URL
  return {
    title,
    description,
    alternates: { canonical: path === '/' ? '/' : path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'lv_LV',
      type: ogType,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt ?? title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  }
}
