import Reveal from '@/components/Reveal'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Aluplast Intertec 85 logi | Premium PVC profils',
  description:
    'Atklāj Aluplast Intertec 85 profila iespējas – augsta skaņas izolācija, siltuma efektivitāte un premium dizains privātmājām un dzīvokļiem.',
}

export default function Page() {
  const primaryButtonClasses =
    'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:from-blue-500 hover:via-blue-500 hover:to-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200'
  const ghostButtonClasses =
    'inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30'

  type HighlightItem = {
    title: string
    description: ReactNode
    icon: ReactNode
  }

  type StepItem = {
    title: string
    description: string
    icon: ReactNode
  }

  const heroHighlights: HighlightItem[] = [
    {
      title: 'Uw līdz 0,74 W/m²K',
      description: 'Līdz 74% labāka siltumizolācija salīdzinājumā ar standarta profiliem.',
      icon: (
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20M7 6h10M5 11h14M8 16h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: '2000+ objekti Latvijā',
      description: 'Pārbaudīta kvalitāte privātmājās, dzīvokļos un premium projektos.',
      icon: (
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Premium drošība',
      description: (
        <>
          Bonding Inside tehnoloģija
          <span
            className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/30 text-[10px] leading-none text-white/80 align-super cursor-help"
            title={'“Bonding Inside” ir tehnoloģija, kurā stikla paketi ielīmē tieši loga vērtnē, radot vienotu un stingru konstrukciju. Tas novērš loga nosēšanos, uzlabo siltumizolāciju un paaugstina pretuzlaušanas drošību, ļaujot izgatavot stabilākus un energoefektīvākus logus ar šaurākiem rāmjiem.'}
            aria-label="Kas ir Bonding Inside?"
          >
            ?
          </span>
          {' — trīskāršs blīvējums un vairāki slēgpunkti.'}
        </>
      ),
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
      title: 'Mūsdienīgs profils',
      description: '85 mm dziļums ar 7 kamerām rāmī un 6 kameru konstrukciju vērtnē.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 5h16v14H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
    },
    {
      title: 'Antracīta kodols',
      description: 'Elegantais tonis saglabā krāsu arī atverot logu un piešķir interjeram vienotu stilu.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l9 4-9 4-9-4 9-4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 10l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 16l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Stabilitāte lieliem logiem',
      description: 'Bonding Inside tehnoloģija nodrošina formu pat panorāmas konstrukcijās.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12h16M12 4v16" />
        </svg>
      ),
    },
    {
      title: 'Akustiskais komforts',
      description: 'Divkameru blīvējums un trīskāršs stiklojums samazina troksni līdz pat 47 dB.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 9v6h4l5 5V4L8 9H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 9a4 4 0 010 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5 7a6.5 6.5 0 010 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  const keyBenefitCards: HighlightItem[] = [
    {
      title: 'Energoefektivitāte un komforts',
      description: 'Profila dziļums 85 mm, stiklojums līdz 50 mm un Uw līdz 0,74 W/m²K nodrošina minimālus siltuma zudumus.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v18M8 7h8M6 12h12M9 17h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Inovatīva blīvēšana',
      description: 'Divkameru vidējais blīvējums un “sausās kameras” konstrukcija pasargā furnitūru un pagarina loga kalpošanas laiku.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6l8-4 8 4v6c0 5-3.6 9.7-8 10S4 17 4 12V6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Dizains un elegance',
      description: 'Plānā rāmja un vērtnes kombinācija (115 mm) ielaiž vairāk gaismas, un pieejams moderns antracīta kodols.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6v6H9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Stabilitāte lielos izmēros',
      description: 'Bonding Inside tehnoloģija nodrošina formu un drošību arī panorāmas logiem un bīdāmajām konstrukcijām.',
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
      title: '1. Izvēlies profilu',
      description: 'Apskati konfigurāciju un izvēlies sev piemērotāko stiklojumu un furnitūru.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 4h14v16H5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: '2. Ievadi kontaktus',
      description: 'Norādi vārdu un telefonu – mūsu speciālists sazināsies 1 minūtes laikā.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 15v4a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h4a2 2 0 012 1.72c.12.9.37 1.77.72 2.58a2 2 0 01-.45 2.11L7 7c1.73 3.06 4.27 5.6 7.33 7.33l.59-.59a2 2 0 012.11-.45c.81.35 1.68.6 2.58.72A2 2 0 0121 15z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: '3. Saņem piedāvājumu',
      description: 'Piedāvājums ar precīzu cenu un montāžas termiņu tiek sagatavots bez maksas.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  const comparisonRows: { model: string; uValue: string; chambers: string; glazing: string; highlight?: boolean }[] = [
    { model: 'Ideal 4000 (3 stiklu)', uValue: '≈ 1,1 W/m²K', chambers: '5 kameras', glazing: 'Līdz 44 mm' },
    { model: 'Intertec 70', uValue: '≈ 1,0 W/m²K', chambers: '6 kameras', glazing: 'Līdz 44 mm' },
    { model: 'Intertec 85', uValue: '≈ 0,74 W/m²K', chambers: '7 kameras', glazing: 'Līdz 50 mm', highlight: true },
  ]

  const trustBadges: { label: string; description: string }[] = [
    { label: 'CE sertifikācija', description: 'Atbilst visiem ES drošības un kvalitātes standartiem.' },
    { label: 'ISO 9001 ražošana', description: 'Ražošanas process ar nepārtrauktu kvalitātes kontroli.' },
    { label: '2000+ objekti Baltijā', description: 'Uzticams partneris privātmāju un biznesa projektos.' },
  ]

  const visualShowcase: { title: string; description: string; image: string }[] = [
    {
      title: 'Griezuma shēma',
      description: 'Detalizēts Intertec 85 profila griezums ar vairāku kameru struktūru un papildus blīvējumu zonām.',
      image: 'https://ik.imagekit.io/vbvwdejj5/Random/upvc-window.png?updatedAt=1757777130468',
    },
    {
      title: 'Reāls izskats interjerā',
      description: 'Moderns loga risinājums ar antracīta profilu, kas organiski iekļaujas minimālistiskā interjerā.',
      image: 'https://ik.imagekit.io/vbvwdejj5/Random/istockphoto-1434178970-612x612.jpg?updatedAt=1757777129204',
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
              Best Seller segments privātmājām
            </div>
          </Reveal>
          <Reveal>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Aluplast Intertec 85
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-white/75 text-lg">
              Aluplast Intertec 85 – līdz 74% labāka siltumizolācija, moderns dizains un augsta izturība. Premium PVC profils, kas veidots mājokļiem ar augstām prasībām pret komfortu, drošību un estētiku.
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
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Mūsdienīgs profils | maksimāla energoefektivitāte</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Visticamāk labākā izvēle modernam, siltam un klusam mājoklim</h2>
                </div>
              </Reveal>
              <Reveal>
                <p className="leading-relaxed">
                  Intertec 85 sistēma apvieno augstākās energoefektivitātes rādītājus ar vizuāli vieglu dizainu un drošības risinājumiem, kas parasti sastopami tikai premium klasē. Tā ir radīta mājokļiem, kur svarīgs ir katrs komforta un kvalitātes sīkums.
                </p>
              </Reveal>
              <Reveal>
                <div className="grid sm:grid-cols-2 gap-4">
                  {overviewHighlights.map((highlight) => (
                    <div key={highlight.title} className="flex gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <div className="mt-1 h-10 w-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center">
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
                  <p className="text-sm text-blue-900">“Intertec 85 profilu ieviesām vairāk nekā 2000 objektos visā Latvijā – īpaši tiek novērtēta tā siltumnoturība un vizuālā vienkāršība.”</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-blue-400">Vestalux projektētāji</p>
                </div>
              </Reveal>
            </div>
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-100 via-white to-white p-6 shadow-2xl ring-1 ring-blue-100">
                <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-blue-500/10" aria-hidden="true" />
                <img
                  src="https://ik.imagekit.io/vbvwdejj5/Intertec%2085?updatedAt=1757917155417"
                  alt="Aluplast Intertec 85 profils"
                  className="relative z-10 w-full object-contain"
                />
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-blue-900">
                  <div className="rounded-xl bg-white/70 p-3 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Uw</p>
                    <p className="font-semibold">0,74 W/m²K</p>
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
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Kāpēc izvēlēties Intertec 85</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm text-gray-600 md:mt-0">Katrs elementos ir pārdomāts, lai logs kalpotu gadiem ilgi – sākot no stiklojuma līmēšanas tehnoloģijas līdz pat dizaina niansēm.</p>
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
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Intertec 85 salīdzinājumā ar citiem profiliem</h2>
              <p className="mt-3 text-gray-600">Izvēlies profilu, kas atbilst tava mājokļa vajadzībām – Intertec 85 piedāvā viszemāko siltuma zudumu un augstāko komfortu pat skarbākajās ziemās.</p>
            </div>
          </Reveal>
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
            <table className="min-w-full divide-y divide-blue-100 text-left text-sm">
              <thead className="bg-blue-50/60 text-blue-900">
                <tr>
                  <th className="px-6 py-4 font-semibold">Modelis</th>
                  <th className="px-6 py-4 font-semibold">Uw vērtība</th>
                  <th className="px-6 py-4 font-semibold">Kamēras</th>
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
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-50 text-blue-600 grid place-items-center">
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
                <h2 className="mt-3 text-3xl md:text-4xl font-bold">3 soļi līdz jaunam logam</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:mt-0">Cik vienkārši – izvēlies profilu, atstāj kontaktus un saņem personalizētu piedāvājumu 1 minūtē.</p>
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

      {/* Visual showcase */}
      <section className="bg-white">
        <div className="container py-12 md:py-16">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-500">Vizualizācijas</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Skati Intertec 85 detaļās un realitātē</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {visualShowcase.map((item) => (
              <Reveal key={item.title} className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Gatavi pacelt komfortu nākamajā līmenī?</h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">Atstāj kontaktus un saņem personalizētu piedāvājumu ar montāžu un garantiju – mūsu speciālists sazināsies 1 minūtes laikā.</p>
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
