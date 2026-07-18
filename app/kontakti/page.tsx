import ContactFormModern from '@/components/ContactFormModern'
import Rekviziti from '@/components/Rekviziti'
import type { Metadata } from 'next'
import { Suspense } from 'react'

function ContactFormFallback() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        {[1, 2, 3, 4].map((key) => (
          <div key={key} className="h-16 rounded-lg bg-slate-200/70 animate-pulse" />
        ))}
      </div>
      <div className="h-36 rounded-lg bg-slate-200/70 animate-pulse" />
      <div className="h-20 rounded-lg bg-slate-200/70 animate-pulse" />
      <div className="h-12 w-40 rounded-lg bg-slate-200/70 animate-pulse" />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Kontakti',
  description: 'Sazinieties ar mums: +371 20886650, info@vestalux.lv. PVC logi, žalūzijas un risinājumi jūsu mājoklim.',
  alternates: { canonical: '/kontakti' },
  openGraph: {
    title: 'Kontakti - Vestalux',
    description: 'Sazinieties ar mums: +371 20886650, info@vestalux.lv.',
  }
}

/* Saziņas kanāli — katra kartīte ir viens reāls veids, kā mūs sasniegt.
   Ikonu SVG ceļi (24x24, stroke) definēti lokāli, lai lapa paliek bez atkarībām. */
const channels = [
  {
    href: 'tel:+37120886650',
    label: 'Zvani',
    value: '+371 20886650',
    hint: 'Izrunāsim projektu un atbildēsim uz jautājumiem',
    iconBg: 'bg-sky-50 text-sky-700',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    href: 'https://wa.me/37120886650',
    label: 'Raksti WhatsApp',
    value: '+371 20886650',
    hint: 'Ērtākais veids ātram jautājumam vai foto nosūtīšanai',
    iconBg: 'bg-emerald-50 text-emerald-700',
    external: true,
    icon: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </>
    ),
  },
  {
    href: 'mailto:info@vestalux.lv',
    label: 'Raksti e-pastu',
    value: 'info@vestalux.lv',
    hint: 'Atbildēsim vienas darba dienas laikā',
    iconBg: 'bg-teal-50 text-teal-700',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </>
    ),
  },
  {
    href: 'https://www.google.com/maps/dir/?api=1&destination=Ozolciema+iela+8,+R%C4%ABga',
    label: 'Atbrauc',
    value: 'Ozolciema iela 8, Rīga',
    hint: 'Atver norādes Google Maps',
    iconBg: 'bg-amber-50 text-amber-700',
    external: true,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
]

export default function Page() {
  return (
    <div className="bg-slate-50">
      <div className="container px-6 py-12 md:py-16">
        {/* Lapas galva */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">Kontakti</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Sazinies ar mums
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Vēlies uzzināt cenas savam projektam vai ir citi jautājumi? Zvani, raksti vai
            aizpildi formu — atbildēsim vienas darba dienas laikā.
          </p>
        </div>

        {/* Kanāli + forma + rekvizīti */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Saziņas kanāli */}
          <div className="order-1 space-y-3 lg:col-span-1">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-teal/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${c.iconBg}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    {c.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">{c.label}</span>
                  <span className="block truncate font-semibold text-slate-900 group-hover:text-brand-teal transition-colors">{c.value}</span>
                  <span className="block text-xs text-slate-500 mt-0.5">{c.hint}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Forma */}
          <div className="order-2 lg:col-span-2 lg:row-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Nosūti ziņu</h2>
              <p className="mt-1 text-sm text-slate-500">
                Lauki ar <span className="text-red-500">*</span> ir obligāti. Vari pievienot arī failus — piemēram, loga izmērus vai foto.
              </p>
              <div className="mt-6">
                <Suspense fallback={<ContactFormFallback />}>
                  <ContactFormModern />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Rekvizīti */}
          <div className="order-3 lg:col-span-1 lg:col-start-1">
            <Rekviziti
              companyName={'SIA “ADEstate”'}
              regNr={'42103086575'}
              legalAddress={'Ozolciema iela 8, Rīga, LV-1058'}
              bank={'A/S “Swedbank”, kods: HABALV22'}
              iban={'LV77HABA0551062518720'}
            />
          </div>
        </div>

      </div>

      {/* Karte — pilnā platumā, aizpilda lapas apakšu */}
      <section className="border-t border-slate-200">
        <div className="container px-6 py-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Kur mēs atrodamies</h2>
            <p className="mt-1 text-sm text-slate-600">Ozolciema iela 8, Rīga, LV-1058</p>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Ozolciema+iela+8,+R%C4%ABga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-teal/50 hover:text-brand-teal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M3 11l19-9-9 19-2-8-8-2z" />
            </svg>
            Saņemt norādes
          </a>
        </div>
        {/* Iframe bez konteinera atkāpēm — no malas līdz malai */}
        <iframe
          title="Karte: Ozolciema iela 8, Rīga"
          className="block w-full h-[420px] md:h-[560px] border-t border-slate-200"
          src="https://maps.google.com/maps?q=Ozolciema+iela+8,+Rīga&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  )
}
