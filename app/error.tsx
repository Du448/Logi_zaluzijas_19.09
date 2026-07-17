'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-2xl text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Radās neparedzēta kļūda
        </h1>
        <p className="text-gray-600 mb-8">
          Atvainojamies par sagādātajām neērtībām. Mēģiniet vēlreiz vai
          atgriezieties sākumlapā.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg bg-brand-blue text-white font-medium shadow hover:shadow-lg transition"
          >
            Mēģināt vēlreiz
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
          >
            Uz sākumlapu
          </Link>
        </div>
      </div>
    </section>
  )
}
