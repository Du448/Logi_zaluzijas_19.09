import AluplastBenefits from '@/components/AluplastBenefits'
import Reveal from '@/components/Reveal'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Aluplast Ideal 4000 PVC logi | Energoefektīvi risinājumi',
  description:
    'Uzzini par Aluplast Ideal 4000 PVC logu priekšrocībām – trīskāršs stiklojums, droša furnitūra un individuāli pielāgojumi Latvijas klimatam.',
}

export default function Page() {
  const primaryButtonClasses =
    'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:from-blue-500 hover:via-blue-500 hover:to-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200'

  type StepItem = {
    title: string
    description: string
    icon: ReactNode
  }

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

  return (
    <>
      <AluplastBenefits showCTA={false} />

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
    </>
  )
}
