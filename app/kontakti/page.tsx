import ContactFormModern from '@/components/ContactFormModern'
import Rekviziti from '@/components/Rekviziti'
import type { Metadata } from 'next'
import { Suspense } from 'react'

function ContactFormFallback(){
  return (
    <div className="mt-10 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((key) => (
          <div key={key} className="h-16 rounded-md bg-white/10 animate-pulse" />
        ))}
      </div>
      <div className="h-36 rounded-md bg-white/10 animate-pulse" />
      <div className="h-20 rounded-md bg-white/10 animate-pulse" />
      <div className="h-12 w-40 rounded-md bg-white/10 animate-pulse" />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Kontakti — Vestalux',
  description: 'Sazinieties ar mums: +371 20886650, info@vestalux.lv. PVC logi, žalūzijas un risinājumi jūsu mājoklim.',
  openGraph: {
    title: 'Kontakti — Vestalux',
    description: 'Sazinieties ar mums: +371 20886650, info@vestalux.lv.',
  }
}

export default function Page(){
  return (
    <>
      {/* Hero + Form (dark layout) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
        {/* Decorative waves */}
        <div className="pointer-events-none absolute -top-24 inset-x-0 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-72 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(16,185,129,0.08),transparent_70%)]" aria-hidden="true" />

        <div className="container px-6 pt-16 pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Heading */}
            <div>
              <div className="mb-4">
                <h1 className="text-2xl md:text-4xl font-bold leading-snug tracking-tight max-w-4xl">
                  <span className="block">Vēlies uzzināt mūsu piedāvātās produkcijas cenas tavam projektam vai ir citi jautājumi?</span>
                  <span className="block mt-3">Aizpildi zemāk redzamo formu un mēs atbildēsim 1 darba dienas laikā.</span>
                </h1>
              </div>
            </div>

            {/* Right: Company short intro */}
            <div className="max-w-md md:justify-self-end">
              <dl className="space-y-2 text-white/80 text-sm">
                <div className="grid grid-cols-3 gap-2"><dt className="col-span-1 opacity-70">Tālrunis</dt><dd className="col-span-2"><a href="tel:+37120886650" className="hover:underline">+371 20886650</a></dd></div>
                <div className="grid grid-cols-3 gap-2"><dt className="col-span-1 opacity-70">E-pasts</dt><dd className="col-span-2">info@vestalux.lv</dd></div>
              </dl>

              <Rekviziti
                companyName={'SIA “ADEstate”'}
                regNr={'42103086575'}
                legalAddress={'jur. adrese : Ozolciema iela 8 – 100, Rīga, LV-1058'}
                bank={'A/S “Swedbank”, kods: HABALV22'}
                iban={'LV77HABA0551062518720'}
              />
            </div>
          </div>

          {/* Form */}
          <Suspense fallback={<ContactFormFallback />}>
            <ContactFormModern />
          </Suspense>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-white">
        <div className="container py-12">
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <iframe title="Karte" className="w-full h-72 md:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17492.99316133427!2d24.097!3d56.949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedf3c8f5f9f1f%3A0x400cfcd68f2fe50!2sR%C4%ABga!5e0!3m2!1slv!2slv!4v1700000000000" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
