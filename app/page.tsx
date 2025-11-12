import Image from 'next/image'
import RailsStyleHomepage from '@/components/RailsStyleHomepage'
import PreFooterCTA from '@/components/PreFooterCTA'
import FooterQuick from '@/components/FooterQuick'
import { HoverVideoIcon } from '@/components/HoverVideoIcon'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'PVC logi, žalūzijas un montāža Rīgā | Vestalux',
  description:
    'Pasūti energoefektīvus PVC logus, žalūzijas un montāžas pakalpojumus Vestalux – individuāli risinājumi mājām un birojiem visā Latvijā.',
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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
    leadTime?: string
    leadNote?: string
    leadAccent: string
    outlineButton: string
    solidButton: string
    icon: ReactNode
  }

  const blindOptions: BlindOption[] = [
    {
      key: 'vertical',
      title: 'Rullo žalūzijas / Kasešu žalūzijas / “Diena–Nakts”',
      description: 'Elegance un funkcionalitāte vienā risinājumā.',
      badgeLabel: 'Mājas favorīts',
      badgeClasses: 'bg-purple-100 text-purple-700',
      iconWrapper: 'bg-purple-500/10 text-purple-600',
      borderClass: 'border-purple-200',
      bullets: [
        'Izvēlies starp pilnīgu tumsu vai maigu gaismu — ideāli guļamistabai, dzīvojamai zonai vai saulainai mājas pusei.',
        '“Pilnīga tumsa, kad to vajag.” Blackout audumi nodrošina maksimālu gaismas izolāciju, bet Diena–Nakts sistēma ļauj pielāgot apgaismojumu.',
      ],
      leadTime: 'Piegāde 6–10 dienās',
      leadNote: 'Audumu paraugi un mehānismu konsultācija iekļauta cenā.',
      leadAccent: 'border-purple-200 bg-purple-50',
      outlineButton: 'border-purple-300 text-purple-700 hover:bg-purple-50',
      solidButton: 'bg-purple-600 text-white hover:bg-purple-700',
      icon: (
        <HoverVideoIcon
          src="https://ik.imagekit.io/vbvwdejj5/eclipse.mp4?updatedAt=1761306843760"
          fallback={
            <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="6" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="18" cy="12" r="2" />
            </svg>
          }
        />
      ),
    },
    {
      key: 'horizontal',
      title: 'Romiešu žalūzijas / Aizkaru žalūzijas',
      description: 'Mīkstums un elegants interjera akcents.',
      badgeLabel: 'Dizaina risinājums',
      badgeClasses: 'bg-amber-100 text-amber-700',
      iconWrapper: 'bg-amber-500/10 text-amber-600',
      borderClass: 'border-amber-200',
      bullets: [
        'Apvieno aizkaru estētiku ar žalūziju praktiskumu — ideāli viesistabai vai guļamistabai.',
        '“Stils, komforts un funkcionalitāte vienā.” Individuāli izgatavotas pēc pasūtījuma.',
        'Plaša audumu, faktūru un caurspīdīguma līmeņu izvēle katram interjeram.',
      ],
      leadTime: 'Piegāde 10–14 dienas',
      leadNote: 'Personalizēta dizaina konsultācija un materiālu paraugi iekļauti.',
      leadAccent: 'border-amber-200 bg-amber-50',
      outlineButton: 'border-amber-300 text-amber-700 hover:bg-amber-50',
      solidButton: 'bg-amber-600 text-white hover:bg-amber-700',
      icon: (
        <HoverVideoIcon
          src="https://ik.imagekit.io/vbvwdejj5/curtains.mp4?updatedAt=1761306843778"
          fallback={
            <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 4h16v4H4z" />
              <path d="M4 10h16v4H4z" />
              <path d="M4 16h16v4H4z" />
            </svg>
          }
        />
      ),
    },
    {
      key: 'rullo',
      title: 'Foto un bērnu dizaina žalūzijas',
      description: 'Spēle ar krāsām un rakstiem.',
      badgeLabel: 'Individuāls dizains',
      badgeClasses: 'bg-slate-100 text-slate-700',
      iconWrapper: 'bg-slate-500/10 text-slate-600',
      borderClass: 'border-slate-200',
      bullets: [
        'Personalizē savas žalūzijas ar attēliem vai rotaļīgiem dizainiem, kas piešķir telpai raksturu.',
        '“Katras žalūzijas — individuāli tev.”',
        'Ideāli bērnistabām un radošām telpām ar spilgtām idejām.',
      ],
      leadTime: 'Piegāde 10–12 dienas',
      leadNote: 'Dizaina paraugu sagatavošana un personalizēti ieteikumi iekļauti cenā.',
      leadAccent: 'border-slate-200 bg-slate-50',
      outlineButton: 'border-slate-300 text-slate-700 hover:bg-slate-50',
      solidButton: 'bg-slate-600 text-white hover:bg-slate-700',
      icon: (
        <HoverVideoIcon
          src="https://ik.imagekit.io/vbvwdejj5/baby-boy.mp4?updatedAt=1761306843802"
          fallback={
            <svg className="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="6" />
            </svg>
          }
        />
      ),
    },
    {
      key: 'horizontal-premium',
      title: 'Horizontālās žalūzijas',
      description: 'Mūsdienīgs dizains ar precīzu gaismas kontroli.',
      badgeLabel: 'Premium materiāli',
      badgeClasses: 'bg-sky-100 text-sky-700',
      iconWrapper: 'bg-sky-500/10 text-sky-600',
      borderClass: 'border-sky-200',
      bullets: [
        'Izgatavotas no alumīnija vai koka lamelēm, kas piešķir telpai struktūru un stilu.',
        '“No pilnīgas tumsas līdz maigai gaismai.”',
        'Piemērotas gan mājām, gan birojiem – funkcionālas, kompakta dizaina un izturīgas.',
      ],
      leadAccent: 'border-sky-200 bg-sky-50',
      outlineButton: 'border-sky-300 text-sky-700 hover:bg-sky-50',
      solidButton: 'bg-sky-600 text-white hover:bg-sky-700',
      icon: (
        <HoverVideoIcon
          src="https://ik.imagekit.io/vbvwdejj5/blinds%20(1).mp4?updatedAt=1761306843793"
          fallback={
            <svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="6" cy="10" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="18" cy="14" r="2" />
            </svg>
          }
        />
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
            {blindOptions.map((option) => {
              const isDayNight = option.key === 'day-night'

              const articleClass = cn(
                'group relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-sm transition-all duration-500 hover:-translate-y-1',
                option.borderClass,
                isDayNight
                  ? 'bg-white text-gray-900 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.18)] hover:bg-slate-950 hover:text-slate-200 hover:shadow-[0_45px_140px_-60px_rgba(15,23,42,0.55)]'
                  : 'bg-white hover:shadow-xl'
              )

              const iconWrapperClass = cn(
                'grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-105',
                option.iconWrapper,
                isDayNight && 'group-hover:bg-slate-800 group-hover:text-amber-200'
              )

              const badgeClass = cn(
                'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-500',
                option.badgeClasses,
                isDayNight && 'group-hover:bg-slate-900 group-hover:text-white'
              )

              const titleClass = cn(
                'text-xl font-semibold transition-colors duration-500',
                isDayNight ? 'text-gray-900 group-hover:text-amber-100' : 'text-gray-900'
              )

              const descriptionClass = cn(
                'transition-colors duration-500',
                isDayNight ? 'text-gray-600 group-hover:text-slate-300' : 'text-gray-600'
              )

              const listClass = cn(
                'space-y-2 transition-colors duration-500',
                isDayNight ? 'text-gray-700 group-hover:text-slate-200' : 'text-gray-700'
              )

              const listItemClass = cn(
                'flex items-start gap-2',
                isDayNight && 'transition-colors duration-500 group-hover:text-slate-200'
              )

              const bulletIconClass = isDayNight
                ? 'w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500 transition-colors duration-500 group-hover:text-emerald-300'
                : undefined

              const bulletTextClass = isDayNight
                ? 'transition-colors duration-500 group-hover:text-slate-200'
                : undefined

              const leadCardClass = cn(
                'rounded-2xl border p-4 text-sm transition-colors duration-500',
                option.leadAccent,
                isDayNight && 'text-gray-700 group-hover:border-slate-700 group-hover:bg-slate-900/40 group-hover:text-slate-200'
              )

              const leadTitleClass = cn(
                'font-semibold transition-colors duration-500',
                isDayNight ? 'text-gray-900 group-hover:text-amber-100' : 'text-gray-900'
              )

              const leadNoteClass = cn(
                'mt-1 transition-colors duration-500',
                isDayNight ? 'text-gray-600 group-hover:text-slate-300' : 'text-gray-600'
              )

              const baseButtonClass = 'inline-flex flex-1 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200'

              const outlineButtonClass = isDayNight
                ? cn(
                    baseButtonClass,
                    'border-amber-400 text-amber-700',
                    'group-hover:border-amber-200 group-hover:text-amber-100'
                  )
                : cn(baseButtonClass, option.outlineButton)

              const solidButtonClass = cn(
                baseButtonClass,
                option.solidButton,
                isDayNight && 'group-hover:bg-slate-900 group-hover:text-white'
              )

              return (
                <article key={option.key} className={articleClass} data-blind-card>
                  {isDayNight ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-emerald-50 transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.85),rgba(15,23,42,0.95))]"
                      />
                    </>
                  ) : null}
                  <div className={cn('relative flex h-full flex-col p-6 sm:p-8', isDayNight && 'z-10')}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className={iconWrapperClass}>{option.icon}</div>
                      <span className={badgeClass}>{option.badgeLabel}</span>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className={titleClass}>{option.title}</h3>
                        <p className={descriptionClass}>{option.description}</p>
                      </div>
                      <ul className={listClass}>
                        {option.bullets.map((bullet) => (
                          <li key={bullet} className={listItemClass}>
                            <CheckIcon className={bulletIconClass} />
                            <span className={bulletTextClass}>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto space-y-4 pt-6">
                      {option.key !== 'vertical' && option.key !== 'horizontal' && option.key !== 'rullo' && (option.leadTime || option.leadNote) && (
                        <div className={leadCardClass}>
                          {option.leadTime ? <p className={leadTitleClass}>{option.leadTime}</p> : null}
                          {option.leadNote ? <p className={leadNoteClass}>{option.leadNote}</p> : null}
                        </div>
                      )}

                      {option.key === 'vertical' ? (
                        <div className="grid gap-3 sm:grid-cols-2">
                          <a
                            href="/zaluzijas/rullo-kasetu"
                            className={solidButtonClass}
                          >
                            Pilnīga tumsa
                          </a>
                          <a
                            href="/zaluzijas/rullo"
                            className={outlineButtonClass}
                          >
                            Elegants minimālisms
                          </a>
                          <a
                            href="/zaluzijas/kasetu-diena-nakts"
                            className={outlineButtonClass}
                          >
                            Maināma gaisma
                          </a>
                          <a
                            href="/zaluzijas/rullo-diena-nakts"
                            className={solidButtonClass}
                          >
                            Dienas līdzsvars
                          </a>
                        </div>
                      ) : option.key === 'horizontal' ? (
                        <div className="grid gap-3 sm:grid-cols-2">
                          <a href="/zaluzijas/romiesu" className={solidButtonClass}>
                            Mīksts komforts
                          </a>
                          <a href="/zaluzijas/aizkaru" className={outlineButtonClass}>
                            Stilīgs privātums
                          </a>
                        </div>
                      ) : option.key === 'horizontal-premium' ? (
                        <div className="grid gap-3 sm:grid-cols-2">
                          <a href="http://127.0.0.1:63374/zaluzijas/aluminija" className={solidButtonClass}>
                            Precīza kontrole
                          </a>
                          <a href="http://127.0.0.1:63374/zaluzijas/koka" className={outlineButtonClass}>
                            Dabiska elegance
                          </a>
                        </div>
                      ) : option.key === 'rullo' ? (
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <a href="/zaluzijas/foto" className={solidButtonClass}>
                            Personisks dizains
                          </a>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <a href="/zaluzijas" className={outlineButtonClass}>
                            Apskatīt klāstu
                          </a>
                          <a href="/kontakti" className={solidButtonClass}>
                            Saņemt konsultāciju
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
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
