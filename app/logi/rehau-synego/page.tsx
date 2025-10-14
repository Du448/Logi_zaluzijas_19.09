import Reveal from '@/components/Reveal'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'REHAU SYNEGO PVC logi | Vidusblīvējuma sistēma',
  description:
    'REHAU SYNEGO logi ar vidusblīvējumu nodrošina maksimālu hermētiskumu, energoefektivitāti un drošību gan jaunbūvēs, gan renovācijās.',
}

export default function Page() {
  const primaryButtonClasses =
    'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:from-blue-500 hover:via-blue-500 hover:to-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200'
  const ghostButtonClasses =
    'inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30'

  type HighlightItem = {
    title: string
    description: string
    icon: ReactNode
  }

  type StepItem = {
    title: string
    description: string
    icon: ReactNode
  }

  const heroHighlights: HighlightItem[] = [
    {
      title: 'Uw līdz 0,76 W/m²K',
      description: 'Vidusblīvējuma sistēma nodrošina pasīvo māju siltumizolāciju.',
      icon: (
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20M7 6h10M5 11h14M8 16h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'EcoPuls ražošana',
      description: '40% pārstrādātu materiālu un zemāks CO₂ nospiedums.',
      icon: (
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2a7 7 0 016.93 7.58 7 7 0 01-2.14 4.42L12 19l-4.79-4.79A7 7 0 015.07 9.5 7 7 0 0112 2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Drošība līdz RC3',
      description: 'Smart Guard tehnoloģija un pastiprināta furnitūra pasargā mājokli.',
      icon: (
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l8 4v6c0 5.3-3.6 10-8 10s-8-4.7-8-10V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 11l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  const overviewHighlights: HighlightItem[] = [
    {
      title: 'Vidusblīvējuma sistēma',
      description: 'Trīskārša blīvēšana ar papildus kameru aizsargā pret caurvēju un mitrumu.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 5h16v14H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
    },
    {
      title: 'EcoPuls sertifikāts',
      description: 'Ražots ar REHAU EcoPuls standartu – vairāk nekā 40% otrreizēju materiālu.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l9 4-9 4-9-4 9-4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 10l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 16l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Akustiskais komforts',
      description: 'Samazina troksni līdz 47 dB – ideāli dzīvošanai pilsētas centros.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 9v6h4l5 5V4L8 9H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 9a4 4 0 010 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5 7a6.5 6.5 0 010 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Smart Guard drošība',
      description: 'Integrējams trauksmes modulis, kas aktīvi atbaida ielaušanās mēģinājumus.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12h16M12 4v16" />
        </svg>
      ),
    },
  ]

  const keyBenefitCards: HighlightItem[] = [
    {
      title: 'Energoefektivitāte līdz Uw 0,76',
      description: 'Trīskāršs blīvējums un stiklojums līdz 50 mm samazina siltuma zudumus ziemā.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v18M8 7h8M6 12h12M9 17h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Vidusblīvējuma priekšrocības',
      description: 'Papildu blīve starp rāmi un vērtni nodrošina hermētiskumu un aizsardzību pret laikapstākļiem.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6l8-4 8 4v6c0 5-3.6 9.7-8 10S4 17 4 12V6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'EcoPuls ilgtspēja',
      description: 'Ražots no otrreizējiem materiāliem, saglabājot to pašu estētiku un izturību.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6v6H9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Drošība līdz RC3',
      description: 'Pastiprinātas furnitūras un gudru sensoru kombinācija pasargā mājokli.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12h16M12 4v16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 12h10" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  const steps: StepItem[] = [
    {
      title: '1. Izvēlies konfigurāciju',
      description: 'Pielāgo profilu, stiklojuma veidu un krāsu savam projektam.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 4h14v16H5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: '2. Atstāj kontaktus',
      description: 'Norādi vārdu un telefonu – speciālists sazināsies 1 minūtes laikā.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 15v4a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h4a2 2 0 012 1.72c.12.9.37 1.77.72 2.58a2 2 0 01-.45 2.11L7 7c1.73 3.06 4.27 5.6 7.33 7.33l.59-.59a2 2 0 012.11-.45c.81.35 1.68.6 2.58.72A2 2 0 0121 15z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: '3. Saņem piedāvājumu',
      description: 'Precīzs piedāvājums ar montāžu un garantiju tiek sagatavots bez maksas.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  const comparisonRows: { model: string; uValue: string; chambers: string; glazing: string; highlight?: boolean }[] = [
    { model: 'SYNEGO Classic', uValue: '≈ 0,90 W/m²K', chambers: '5 kameras', glazing: 'Līdz 44 mm' },
    { model: 'SYNEGO MD', uValue: '≈ 0,76 W/m²K', chambers: '7 kameras', glazing: 'Līdz 50 mm', highlight: true },
    { model: 'GENEO PHZ', uValue: '≈ 0,60 W/m²K', chambers: '6 kameras', glazing: 'Līdz 52 mm' },
  ]

  const trustBadges: { label: string; description: string }[] = [
    { label: 'CE un Passivhaus', description: 'Atbilst ES drošības standartiem un pasīvo māju prasībām.' },
    { label: 'EcoPuls sertifikāts', description: 'Ražošana ar zemāku CO₂ nospiedumu un pārstrādātiem materiāliem.' },
    { label: 'Smart Guard Ready', description: 'Savietojams ar REHAU viedās drošības risinājumiem.' },
  ]

  const visualShowcase: { title: string; description: string; image: string }[] = [
    {
      title: 'Vidusblīvējuma griezums',
      description: 'Detalizēts SYNEGO MD profila griezums ar trīskāršu blīvējumu un vairākām kamerām.',
      image: 'https://ik.imagekit.io/vbvwdejj5/Random/Screwing_the_bottom_PVC_window_profile.jpeg?updatedAt=1757777130376',
    },
    {
      title: 'SYNEGO interjerā',
      description: 'Moderns interjers ar REHAU SYNEGO logiem un antracīta profilu.',
      image: 'https://ik.imagekit.io/vbvwdejj5/Random/upvc-window-stack.webp?updatedAt=1757777129739',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(16,185,129,0.08),transparent_70%)]" aria-hidden="true" />
        <div className="container py-16 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Premium izvēle pasīvajām mājām
            </div>
          </Reveal>
          <Reveal>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">REHAU SYNEGO</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-white/75 text-lg">
              REHAU SYNEGO – premium vidusblīvējuma PVC logs ar maksimālu hermētiskumu, energoefektivitāti un gudras mājas drošības iespējām.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/kontakti" className={primaryButtonClasses}>Saņemt piedāvājumu</a>
              <a href="#specification" className={ghostButtonClasses}>Apskatīt specifikāciju</a>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-lg backdrop-blur">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-slate-50" id="overview">
        <div className="container py-12 md:py-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6 text-gray-700">
              <Reveal>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Mūsdienīgs profils | maksimāls hermētiskums</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Komforts ar minimālu enerģijas patēriņu un maksimālu drošību</h2>
                </div>
              </Reveal>
              <Reveal>
                <p className="leading-relaxed">
                  SYNEGO MD sistēma nodrošina izcilus siltuma un skaņas rādītājus, vienlaikus piedāvājot plašas drošības un viedās mājas integrācijas iespējas. Ideāli piemērots projektiem, kur svarīgs ir ilgtspējīgs komforts.
                </p>
              </Reveal>
              <Reveal>
                <div className="grid sm:grid-cols-2 gap-4">
                  {overviewHighlights.map((highlight) => (
                    <div key={highlight.title} className="flex gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <div className="mt-1 grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                        {highlight.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold text-gray-900">{highlight.title}</h3>
                        <p className="text-sm text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal>
                <div className="rounded-2xl border border-blue-100 bg-white/70 p-5 shadow-sm">
                  <p className="text-sm text-blue-900">“SYNEGO logi ar EcoPuls standartu apvieno energoefektivitāti ar videi draudzīgu ražošanu. Tos izvēlas gan jaunuzceltās pasīvajās mājās, gan renovācijās.”</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-blue-400">REHAU Baltics komanda</p>
                </div>
              </Reveal>
            </div>
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-100 via-white to-white p-6 shadow-2xl ring-1 ring-blue-100">
                <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-blue-500/10" aria-hidden="true" />
                <img
                  src="https://ik.imagekit.io/vbvwdejj5/ChatGPT%20Image%20Sep%2014,%202025,%2010_14_05%20PM.png?updatedAt=1757878716920"
                  alt="REHAU SYNEGO profils"
                  className="relative z-10 w-full object-contain"
                />
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-blue-900">
                  <div className="rounded-xl bg-white/70 p-3 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Uw</p>
                    <p className="font-semibold">0,76 W/m²K</p>
                  </div>
                  <div className="rounded-xl bg-white/70 p-3 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-400">KAMERAS</p>
                    <p className="font-semibold">7 rāmis / 6 vērtnē</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="bg-white" id="features">
        <div className="container py-12 md:py-16">
          <Reveal>
            <div className="md:flex md:items-end md:justify-between md:gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Galvenie ieguvumi</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Kāpēc izvēlēties SYNEGO MD</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm text-gray-600 md:mt-0">Maksimāla hermētiskuma sistēma ar lielisku akustiku, drošību un ilgtspējīgu ražošanu.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {keyBenefitCards.map((item) => (
              <Reveal key={item.title} className="group h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="/kontakti" className={primaryButtonClasses}>Saņemt piedāvājumu</a>
              <span className="text-sm text-gray-500">Saņem precīzu cenu un montāžas termiņu bez saistībām.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-slate-50" id="specification">
        <div className="container py-12 md:py-16">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Siltuma efektivitāte</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">SYNEGO salīdzinājumā ar citām REHAU sistēmām</h2>
              <p className="mt-3 text-gray-600">Izvēlies profilu, kas atbilst tava mājokļa prasībām – SYNEGO nodrošina perfektu balansu starp cenu, efektivitāti un drošību.</p>
            </div>
          </Reveal>
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
            <table className="min-w-full divide-y divide-blue-100 text-left text-sm">
              <thead className="bg-blue-50/60 text-blue-900">
                <tr>
                  <th className="px-6 py-4 font-semibold">Sistēma</th>
                  <th className="px-6 py-4 font-semibold">Uw vērtība</th>
                  <th className="px-6 py-4 font-semibold">Kameras</th>
                  <th className="px-6 py-4 font-semibold">Stiklojums</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 text-gray-700">
                {comparisonRows.map((row) => (
                  <tr key={row.model} className={row.highlight ? 'bg-blue-50/50 text-blue-900 font-semibold' : ''}>
                    <td className="px-6 py-4">{row.model}</td>
                    <td className="px-6 py-4">{row.uValue}</td>
                    <td className="px-6 py-4">{row.chambers}</td>
                    <td className="px-6 py-4">{row.glazing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white">
        <div className="container py-12 md:py-16">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Uzticības signāli</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Garantēta kvalitāte un drošība</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {trustBadges.map((badge) => (
              <Reveal key={badge.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l8 4v6c0 5.3-3.6 10-8 10s-8-4.7-8-10V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 11l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{badge.label}</h3>
                <p className="mt-2 text-sm text-gray-600">{badge.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white">
        <div className="container py-12 md:py-16">
          <Reveal>
            <div className="mb-8 md:flex md:items-end md:justify-between md:gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Process</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold">3 soļi līdz SYNEGO logiem</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:mt-0">Viss process aizņem vien dažas minūtes – mūsu komanda parūpēsies par pārējo.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <Reveal key={step.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                  {step.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/80">{step.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex flex-col gap-3 text-center sm:flex-row sm:justify-center">
              <a href="/kontakti" className={`${primaryButtonClasses} sm:min-w-[220px]`}>Saņemt piedāvājumu</a>
              <a href="tel:+37120886650" className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">Zvanīt +371 2088 6650</a>
            </div>
          </Reveal>
  </div>
  </section>

  {/* Final CTA */}
  <section className="bg-slate-900 text-white">
        <div className="container py-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Gatavi jauniem REHAU SYNEGO logiem?</h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 mx-auto max-w-2xl text-white/80">Atstāj kontaktus un saņem personalizētu piedāvājumu ar montāžu un garantiju – mūsu speciālists sazināsies 1 minūtes laikā.</p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/kontakti" className={`${primaryButtonClasses} sm:min-w-[220px]`}>Saņemt piedāvājumu</a>
              <a href="/logi" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">Atpakaļ uz profilu sarakstu</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
