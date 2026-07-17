import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lapa nav atrasta',
  robots: { index: false, follow: false },
}

const LINKS = [
  { href: '/logi', label: 'PVC logi' },
  { href: '/zaluzijas', label: 'Žalūzijas' },
  { href: '/piederumi', label: 'Piederumi' },
  { href: '/pakalpojumi', label: 'Pakalpojumi' },
  { href: '/kontakti', label: 'Kontakti' },
]

export default function NotFound() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-2xl text-center">
        <p className="text-6xl font-bold text-brand-blue mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Lapa nav atrasta
        </h1>
        <p className="text-gray-600 mb-8">
          Diemžēl meklētā lapa neeksistē vai ir pārvietota. Apskatiet mūsu
          galvenās sadaļas vai atgriezieties sākumlapā.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue text-white font-medium shadow hover:shadow-lg transition"
        >
          Uz sākumlapu
        </Link>
      </div>
    </section>
  )
}
