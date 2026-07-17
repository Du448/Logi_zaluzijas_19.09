// Next.js custom image loader priekš ImageKit.
//
// next/image izsauc šo funkciju katram srcSet izmēram. ImageKit URL saņem
// `tr=w-<width>,q-<quality>,f-auto` transformāciju (responsīvs, WebP/AVIF).
// Ne-ImageKit URL (picsum, unsplash) tiek atgriezti neizmainīti.
//
// Priekšrocība: attēli tiek servēti tieši no ImageKit CDN (bez Next/Vercel
// image-optimizer proxy), tāpēc nav dubultapstrādes un Vercel transform kvotas.

export default function imagekitLoader({ src, width, quality }) {
  if (typeof src !== 'string' || !src.includes('ik.imagekit.io')) {
    return src
  }

  const q = quality || 80
  const tr = `w-${width},q-${q},f-auto`

  try {
    const url = new URL(src)
    url.searchParams.set('tr', tr)
    return url.toString()
  } catch {
    const sep = src.includes('?') ? '&' : '?'
    return `${src}${sep}tr=${encodeURIComponent(tr)}`
  }
}
