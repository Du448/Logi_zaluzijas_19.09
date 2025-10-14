import Image from 'next/image'
import RailsStyleHomepage from '@/components/RailsStyleHomepage'
import PreFooterCTA from '@/components/PreFooterCTA'
import FooterQuick from '@/components/FooterQuick'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'PVC logi, žalūzijas un montāža Rīgā | Vestalux',
  description:
    'Pasūti energoefektīvus PVC logus, žalūzijas un montāžas pakalpojumus Vestalux – individuāli risinājumi mājām un birojiem visā Latvijā.',
}

function CheckIcon(){
  return (
    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function Home() {
  type BlindOption = {
    key: string
    title: string
    description: string
    badgeLabel: string
    badgeClasses: string
    iconWrapper: string
    borderClass: string
    bullets: string[]
    leadTime: string
    leadNote: string
    leadAccent: string
    outlineButton: string
    solidButton: string
    icon: ReactNode
  }

  const blindOptions: BlindOption[] = [
    {
      key: 'vertical',
      title: 'Vertikālās',
      description: 'Klasiskās vertikālās žalūzijas biroja un mājas logiem',
      badgeLabel: 'Populārākās birojiem',
      badgeClasses: 'bg-emerald-100 text-emerald-700',
      iconWrapper: 'bg-emerald-500/10 text-emerald-600',
      borderClass: 'border-emerald-200',
      bullets: ['Dažādas krāsas', 'Viegla apkope', 'Ilgmūžīgas'],
      leadTime: 'Piegāde 7–10 dienās',
      leadNote: 'Iekļauta konsultācija un mērījumi pirms montāžas.',
      leadAccent: 'border-emerald-200 bg-emerald-50',
      outlineButton: 'border-emerald-300 text-emerald-700 hover:bg-emerald-50',
      solidButton: 'bg-emerald-600 text-white hover:bg-emerald-700',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="6" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
        </svg>
      ),
    },
    {
      key: 'horizontal',
      title: 'Horizontālās',
      description: 'Mūsdienīgas horizontālās žalūzijas ar precīzu gaismas kontroli',
      badgeLabel: 'Premium materiāli',
      badgeClasses: 'bg-sky-100 text-sky-700',
      iconWrapper: 'bg-sky-500/10 text-sky-600',
      borderClass: 'border-sky-200',
      bullets: ['Alumīnija lameles', 'Precīza regulēšana', 'Kompakts dizains'],
      leadTime: 'Piegāde 5–7 dienās',
      leadNote: 'Iekļauta konsultācija un mērījumi pirms montāžas.',
      leadAccent: 'border-sky-200 bg-sky-50',
      outlineButton: 'border-sky-300 text-sky-700 hover:bg-sky-50',
      solidButton: 'bg-sky-600 text-white hover:bg-sky-700',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="6" cy="10" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="18" cy="14" r="2" />
        </svg>
      ),
    },
    {
      key: 'rullo',
      title: 'Rullo',
      description: 'Elegants rullo žalūziju minimalistiskam dizainam',
      badgeLabel: 'Mājokļu favorīts',
      badgeClasses: 'bg-purple-100 text-purple-700',
      iconWrapper: 'bg-purple-500/10 text-purple-600',
      borderClass: 'border-purple-200',
      bullets: ['Dažādi audumi', 'Vienkārša uzstādīšana', 'Estētisks izskats'],
      leadTime: 'Piegāde 10–14 dienās',
      leadNote: 'Iekļauta konsultācija un mērījumi pirms montāžas.',
      leadAccent: 'border-purple-200 bg-purple-50',
      outlineButton: 'border-purple-300 text-purple-700 hover:bg-purple-50',
      solidButton: 'bg-purple-600 text-white hover:bg-purple-700',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="6" />
        </svg>
      ),
    },
    {
      key: 'day-night',
      title: 'Diena/Nakts',
      description: 'Inovatīvas žalūzijas ar divu veidu lamelu sistēmu',
      badgeLabel: 'Vislabākā gaismas kontrole',
      badgeClasses: 'bg-amber-100 text-amber-700',
      iconWrapper: 'bg-amber-500/10 text-amber-600',
      borderClass: 'border-amber-200',
      bullets: ['Dubulta funkcija', 'Pilna privātuma kontrole', 'Moderns dizains'],
      leadTime: 'Piegāde 7–9 dienās',
      leadNote: 'Iekļauta konsultācija un mērījumi pirms montāžas.',
      leadAccent: 'border-amber-200 bg-amber-50',
      outlineButton: 'border-amber-300 text-amber-700 hover:bg-amber-50',
      solidButton: 'bg-amber-500 text-white hover:bg-amber-600',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <RailsStyleHomepage />
      {/* Žalūziju veidi */}
      <section className="section scroll-reveal io-reveal">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Žalūziju veidi</h2>
          <p className="text-center text-gray-600 mt-3 mb-12">Salīdziniet populārākos risinājumus pēc cenas, montāžas laika un priekšrocībām.</p>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {blindOptions.map((option) => (
              <article
                key={option.key}
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${option.borderClass}`}
              >
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl ${option.iconWrapper} transition-transform duration-300 group-hover:scale-105`}>
                      {option.icon}
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${option.badgeClasses}`}>
                      {option.badgeLabel}
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      {option.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-4 pt-6">
                    <div className={`rounded-2xl border p-4 text-sm text-gray-700 ${option.leadAccent}`}>
                      <p className="font-semibold text-gray-900">{option.leadTime}</p>
                      <p className="mt-1 text-gray-600">{option.leadNote}</p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href="/zaluzijas"
                        className={`inline-flex flex-1 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${option.outlineButton}`}
                      >
                        Apskatīt klāstu
                      </a>
                      <a
                        href="/kontakti"
                        className={`inline-flex flex-1 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${option.solidButton}`}
                      >
                        Saņemt konsultāciju
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PreFooterCTA />

      {/* CTA Section moved from RailsStyleHomepage (with image + dark overlay) */}
      <section className="relative py-20 overflow-hidden text-white">
        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://ik.imagekit.io/vbvwdejj5/mh6f19mh6f19mh6f%20-%20Edited.png?updatedAt=1758040235289"
            alt="CTA fona attēls"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        {/* Overlay image (replaces black overlay) */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://ik.imagekit.io/vbvwdejj5/Open_window_.jpg?updatedAt=1760366506916"
            alt=""
            fill
            className="object-cover scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/20" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center py-16 md:py-24">
          <h2 className="text-4xl font-bold mb-4">
            Gatavi jauniem logiem?
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Saņemiet bezmaksas konsultāciju un uzziniet, kā ar pareizo logu izvēli ietaupīt līdz 30% uz apkuri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakti" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Saņemt piedāvājumu
            </a>
            <a href="tel:+37120886650" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors border border-emerald-500">
              Zvanīt tagad
            </a>
          </div>
        </div>
      </section>
      <FooterQuick />
    </>
  )
}
