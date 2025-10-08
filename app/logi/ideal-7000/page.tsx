import Reveal from '@/components/Reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluplast Intertec 85 logi | Premium PVC profils',
  description:
    'Atklāj Aluplast Intertec 85 profila iespējas – augsta skaņas izolācija, siltuma efektivitāte un premium dizains privātmājām un dzīvokļiem.',
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(16,185,129,0.08),transparent_70%)]" aria-hidden="true" />
        <div className="container py-16 md:py-20">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Aluplast Intertec 85</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-white/80 text-lg">Mūsdienīgs, energoefektīvs un elegantas formas PVC logu profils ar izcilām siltumizolācijas un skaņas īpašībām.</p>
          </Reveal>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 px-6 py-3 font-semibold text-white transition">Apskatīt īpašības</a>
            <a href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-6 py-3 font-semibold text-white transition">Saņemt piedāvājumu</a>
          </div>
        </div>
      </section>

      {/* Two-column content */}
      <section className="bg-white">
        <div className="container py-12 md:py-16">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Aluplast Intertec 85 – Mūsdienīgs un energoefektīvs logu profils</h1>
          </Reveal>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10">
            {/* Left block */}
            <div className="space-y-5 text-gray-700">
              <p>
                Aluplast Intertec 85 ir jaunās paaudzes logu profilu sistēma, kas apvieno estētiku, ilgmūžību un izcilas siltumizolācijas īpašības.
                Tā ir ideāla izvēle tiem, kas vēlas apvienot modernu dizainu ar maksimālu komfortu un energoefektivitāti.
              </p>

              <div className="space-y-3">
                <Reveal className="flex gap-3 items-start p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <svg className="w-6 h-6 text-blue-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"/></svg>
                  <p><span className="font-medium">Energoefektivitāte un komforts:</span> Profila dziļums 85 mm, 7 kameras rāmī un 6 kameru konstrukcija vērtnē, stiklojums līdz 50 mm, Uw līdz 0,74 W/m²K.</p>
                </Reveal>
                <Reveal className="flex gap-3 items-start p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <svg className="w-6 h-6 text-blue-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/></svg>
                  <p><span className="font-medium">Inovatīvs risinājums:</span> Divkameru vidējais blīvējums un “sausās kameras” konstrukcija pasargā furnitūru un uzlabo skaņas/siltuma aizsardzību. 
                    <span className="relative inline-block group">
                      <em className="mx-1 underline decoration-dotted decoration-blue-400 cursor-help">Bonding Inside</em>
                      <span role="tooltip" className="pointer-events-none absolute left-1/2 z-20 mt-2 w-80 -translate-x-1/2 rounded-xl border border-gray-200 bg-white text-gray-700 shadow-xl p-3 text-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                        “Bonding Inside” ir tehnoloģija, kurā stikla paketi ielīmē tieši loga rāmī, nevis tikai ievieto. Šis process padara logu ievērojami stabilāku, siltumnoturīgāku un drošāku pret ielaušanos.
                      </span>
                    </span>
                    tehnoloģija.
                  </p>
                </Reveal>
                <Reveal className="flex gap-3 items-start p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <svg className="w-6 h-6 text-blue-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 12l4 4 12-12-2-2-10 10-2-2-2 2z"/></svg>
                  <p><span className="font-medium">Dizains un elegance:</span> Plāna rāmja un vērtnes kombinācija (115 mm) nodrošina vairāk gaismas; pieejams arī antracīta kodols.</p>
                </Reveal>
                <Reveal className="flex gap-3 items-start p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <svg className="w-6 h-6 text-blue-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l4 4h-3v6H11V6H8l4-4zM6 14h12v2H6v-2zM6 18h12v2H6v-2z"/></svg>
                  <p><span className="font-medium">Stabilitāte un daudzpusība:</span> Vērtnes konstrukcija ļauj izmantot <em>Bonding Inside</em>, nodrošinot stabilitāti pat lielos izmēros.</p>
                </Reveal>
              </div>

              <p>
                Aluplast Intertec 85 – drošs, kluss un silts logs ar mūsdienīgu dizainu un nevainojamām tehniskajām īpašībām.
              </p>

              {/* Image placed after text, fully visible */}
              <Reveal>
                <img
                  src="https://ik.imagekit.io/vbvwdejj5/Intertec%2085?updatedAt=1757917155417"
                  alt="Aluplast Intertec 85"
                  className="w-full max-h-[520px] object-contain bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-2"
                />
              </Reveal>
            </div>

            {/* Dividers */}
            <div className="hidden md:block w-px bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200" />
            <div className="md:hidden h-px bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200" />

            {/* Right block */}
            <div className="space-y-5 text-gray-700 md:sticky md:top-24">
              <Reveal>
                <h2 id="features" className="text-2xl font-semibold text-gray-900">Galvenās īpašības</h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                <Reveal className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <div className="flex items-center gap-2 mb-2 text-blue-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"/></svg>
                    <div className="font-medium">Energoefektivitāte un komforts</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Profila dziļums – 85 mm</li>
                    <li>7 kameras rāmī un 6 kameru konstrukcija vērtnē</li>
                    <li>Stiklojuma biezums līdz 50 mm</li>
                    <li>Izcils siltumcaurlaidības koeficients – līdz Uw = 0,74 W/m²K</li>
                  </ul>
                </Reveal>
                <Reveal className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <div className="flex items-center gap-2 mb-2 text-blue-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/></svg>
                    <div className="font-medium">Inovatīvs risinājums</div>
                  </div>
                  <p>Īpašā divkameru vidējā blīvējuma sistēma nodrošina paaugstinātu aizsardzību pret vēju, lietu un troksni, kā arī pagarina furnitūras kalpošanas laiku, pateicoties “sausās kameras” konstrukcijai.</p>
                </Reveal>
                <Reveal className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <div className="flex items-center gap-2 mb-2 text-blue-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 12l4 4 12-12-2-2-10 10-2-2-2 2z"/></svg>
                    <div className="font-medium">Dizains un elegance</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Plānā rāmja un vērtnes kombinācija (tikai 115 mm) – vairāk gaismas telpā</li>
                    <li>Pieejams ar modernu antracīta kodolu</li>
                  </ul>
                </Reveal>
                <Reveal className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                  <div className="flex items-center gap-2 mb-2 text-blue-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l4 4h-3v6H11V6H8l4-4zM6 14h12v2H6v-2zM6 18h12v2H6v-2z"/></svg>
                    <div className="font-medium">Stabilitāte un daudzpusība</div>
                  </div>
                  <p>Speciālā vērtnes konstrukcija ļauj izmantot 
                    <span className="relative inline-block group">
                      <em className="mx-1 underline decoration-dotted decoration-blue-400 cursor-help">Bonding Inside</em>
                      <span role="tooltip" className="pointer-events-none absolute left-1/2 z-20 mt-2 w-80 -translate-x-1/2 rounded-xl border border-gray-200 bg-white text-gray-700 shadow-xl p-3 text-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                        “Bonding Inside” ir tehnoloģija, kurā stikla paketi ielīmē tieši loga rāmī, nevis tikai ievieto. Šis process padara logu ievērojami stabilāku, siltumnoturīgāku un drošāku pret ielaušanos.
                      </span>
                    </span>
                    tehnoloģiju, kas nodrošina logu stabilitāti pat lielos izmēros.
                  </p>
                </Reveal>
              </div>
            </div>

          </div>

          <div className="mt-12 flex items-center gap-4">
            <a href="/kontakti" className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Saņemt piedāvājumu</a>
            <a href="/logi" className="text-blue-700 hover:underline">Atpakaļ uz profilu sarakstu</a>
          </div>
        </div>
      </section>

      
    </>
  )
}
