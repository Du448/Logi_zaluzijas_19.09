/**
 * ImageKit URL palīgfunkcijas.
 *
 * Pievieno `tr=` transformācijas parametru ImageKit URL, lai attēli tiktu
 * servēti pareizajā izmērā un formātā (nevis oriģinālizmērā). Ne-ImageKit URL
 * tiek atgriezti neizmainīti, tāpēc funkciju var droši lietot jebkuram `src`.
 *
 * Piemērs:
 *   ikUrl('https://ik.imagekit.io/vbvwdejj5/foo.jpg?updatedAt=123', { w: 800 })
 *   → 'https://ik.imagekit.io/vbvwdejj5/foo.jpg?updatedAt=123&tr=w-800%2Cq-80%2Cf-auto'
 */

const IMAGEKIT_HOST = 'ik.imagekit.io'

export type IkTransform = {
  /** Platums pikseļos */
  w?: number
  /** Augstums pikseļos */
  h?: number
  /** Kvalitāte 1–100 (noklusējums 80) */
  q?: number
  /** Formāts (noklusējums 'auto' → WebP/AVIF atbalstošiem pārlūkiem) */
  f?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
  /** Apgriešanas režīms */
  crop?: 'maintain_ratio' | 'force' | 'at_max' | 'at_least'
}

export function isImageKitUrl(src: string): boolean {
  return typeof src === 'string' && src.includes(IMAGEKIT_HOST)
}

export function ikUrl(src: string, transform: IkTransform = {}): string {
  if (!isImageKitUrl(src)) return src

  const { w, h, q = 80, f = 'auto', crop } = transform

  const parts: string[] = []
  if (w) parts.push(`w-${w}`)
  if (h) parts.push(`h-${h}`)
  if (q) parts.push(`q-${q}`)
  if (f) parts.push(`f-${f}`)
  if (crop) parts.push(`c-${crop}`)

  if (parts.length === 0) return src

  const trValue = parts.join(',')

  try {
    const url = new URL(src)
    // ImageKit atbalsta tr kā query parametru; ja jau ir tr, to aizstājam.
    url.searchParams.set('tr', trValue)
    return url.toString()
  } catch {
    // Ja src nav absolūts URL, atgriežam neizmainītu.
    return src
  }
}
