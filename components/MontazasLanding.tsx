import React from "react"

// Landing for installation services (Montāžas pakalpojumi)
// Sections: Hero, Services, Process/Features, CTA
// Uses IO scroll animation utility classes handled by ScrollReveal

export default function MontazasLanding(){
  const services: { title: string; desc: string; icon: React.ReactNode }[] = [
    {
      title: 'PVC logu un durvju montāža',
      desc: 'Precīza montāža ar tvaika, vēja izolācijas lentām un siltināšanu.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M12 4v14"/></svg>
      )
    },
    {
      title: 'Palodžu un slēgsienu uzstādīšana',
      desc: 'Iekšējās un ārējās palodzes, pielāgotas jūsu interjeram un fasādei.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v4H4z"/><path d="M6 10v8h12v-8"/></svg>
      )
    },
    {
      title: 'Žalūziju un moskītu tīklu montāža',
      desc: 'Rullo, diena-nakts, plisē un kasešu žalūzijas, kā arī moskītu tīkli.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h14v4H5z"/><path d="M5 10h14v10H5z"/></svg>
      )
    },
    {
      title: 'Mērīšana un konsultācija',
      desc: 'Profesionāla mērīšana uz vietas un risinājuma rekomendācijas.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><path d="M12 17h.01"/></svg>
      )
    },
  ]

  const steps: { k: string; title: string; text: string }[] = [
    { k: '01', title: 'Pieteikums un konsultācija', text: 'Jūs iesniedzat pieteikumu, mēs precizējam vajadzības un ieteicam risinājumu.' },
    { k: '02', title: 'Mērīšana uz vietas', text: 'Meistars veic precīzus mērījumus un sagatavo tehniskos nosacījumus.' },
    { k: '03', title: 'Montāža', text: 'Veicam profesionālu montāžu, hermetizēšanu un regulēšanu.' },
    { k: '04', title: 'Nodošana un garantija', text: 'Pārbaudām kvalitāti, nododam darbus un sniedzam garantiju.' },
  ]

  return (
    <div className="text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
        <div className="absolute inset-0 parallax-hero bg-[url('https://picsum.photos/seed/montaza-hero/2000/1200')] bg-cover bg-center opacity-15" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" aria-hidden="true" />
        <div className="relative container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="io-fade-up">
              <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Montāžas lietas</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Kvalitatīva <span className="text-brand-teal">logu, durvju un žalūziju</span> montāža
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl">
                Precizitāte, tīra izpilde un atbildība par rezultātu. Strādājam saskaņā ar ražotāja vadlīnijām un labāko praksi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/kontakti" className="inline-flex items-center rounded-md bg-brand-teal hover:bg-brand-blue text-white px-5 py-3 font-semibold transition-transform duration-300 ease-out hover:scale-105">Saņemt piedāvājumu</a>
                <a href="#pakalpojumi" className="inline-flex items-center rounded-md border border-gray-300 hover:bg-gray-100 text-gray-900 px-5 py-3 font-semibold transition-transform duration-300 ease-out hover:scale-105">Skatīt pakalpojumus</a>
              </div>
            </div>
            <div className="io-slide-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://ik.imagekit.io/vbvwdejj5/PAKALPOJUMU%20LAPA/Gluing_of_extended_protruding_window_profile.jpeg?updatedAt=1757082006698" alt="Montāžas darbu ilustrācija" className="w-full rounded-2xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="pakalpojumi" className="bg-white">
        <div className="container py-14 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((s)=> (
              <article key={s.title} className="io-fade-up rounded-2xl border border-gray-200 bg-white shadow-sm p-6 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 grid place-items-center mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Features */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="container py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="space-y-5">
              <h2 className="io-slide-left text-2xl md:text-3xl font-bold">Kā tas notiek?</h2>
              <ol className="space-y-4">
                {steps.map(s => (
                  <li key={s.k} className="io-fade-up">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-teal text-white text-sm font-semibold mt-0.5">{s.k}</span>
                      <div>
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="text-gray-600">{s.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="io-slide-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://ik.imagekit.io/vbvwdejj5/fukasqf.png?updatedAt=1758215780968" alt="Montāžas process" className="w-full rounded-2xl shadow" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Image above CTA */}
      <section className="bg-white">
        <div className="container py-10 io-fade-up">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/vbvwdejj5/apuqc3apuq%20-.png?updatedAt=1758216707831"
            alt="Montāžas darbu paraugs"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white">
        <div className="container py-16 text-center io-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">Nepieciešama montāža?</h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">Aizpildiet pieteikumu un saņemiet precīzu tāmi ar termiņiem.</p>
          <a href="/kontakti" className="inline-flex items-center rounded-md bg-brand-teal hover:bg-brand-blue text-white px-6 py-3 font-semibold mt-6 transition-transform duration-300 ease-out hover:scale-105">Pieteikt montāžu</a>
        </div>
      </section>
    </div>
  )
}
