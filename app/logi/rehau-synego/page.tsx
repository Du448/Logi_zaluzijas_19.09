import Reveal from '@/components/Reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REHAU SYNEGO PVC logi | Vidusblīvējuma sistēma',
  description:
    'REHAU SYNEGO logi ar vidusblīvējumu nodrošina maksimālu hermētiskumu, energoefektivitāti un drošību gan jaunbūvēs, gan renovācijās.',
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">REHAU SYNEGO</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-white/80 text-lg">Energoefektivitāte, klusums un drošība modernā PVC logu sistēmā. Ilgtspējīga izvēle ar izcilām tehniskajām īpašībām.</p>
          </Reveal>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 px-6 py-3 font-semibold text-white transition">Apskatīt īpašības</a>
            <a href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-6 py-3 font-semibold text-white transition">Saņemt piedāvājumu</a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-12 md:py-16">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">REHAU SYNEGO — energoefektivitāte, klusums un drošība</h1>
          </Reveal>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10">
            {/* Left column */}
            <div className="space-y-5 text-gray-700">
              <Reveal>
                <h2 className="text-2xl font-semibold text-gray-900">REHAU SYNEGO logi: energoefektivitāte un ilgtspējība</h2>
              </Reveal>
              <p>
                Izvēloties REHAU SYNEGO logus, jūs iegūstat ne tikai komfortu, bet arī dodiet savu ieguldījumu vides aizsardzībā.
              </p>
              <Reveal className="flex gap-3 items-start p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                <svg className="w-6 h-6 text-brand-blue mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"/></svg>
                <p><span className="font-medium">Ilgtspējīga ražošana (EcoPuls):</span> REHAU SYNEGO logiem ir marķējums EcoPuls, kas apliecina, ka to ražošanā ir izmantoti vairāk nekā 40% pārstrādātu materiālu. Tas ir svarīgs solis pozitīvas ietekmes radīšanā uz vidi, un tas dod labu sajūtu par apzinātu un videi draudzīgu izvēli.</p>
              </Reveal>
              <Reveal className="flex gap-3 items-start p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                <svg className="w-6 h-6 text-brand-blue mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/></svg>
                <p><span className="font-medium">Energoefektivitāte un ietaupījums:</span> Šie logi nodrošina izcilu siltumizolāciju, kas palīdzēs samazināt jūsu enerģijas patēriņu un ietaupīt uz apkures rēķiniem. Salīdzinājumā ar standarta logiem, SYNEGO logi palielina siltumizolāciju par 45%.</p>
              </Reveal>
              <div>
                <div>Tas nozīmē:</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mājīgs siltums jūsu mājoklī.</li>
                  <li>Lielāks nekustamā īpašuma vērtība.</li>
                </ul>
              </div>
              <p>
                SYNEGO logu variants ar vidējo blīvējumu ir sertificēts kā piemērots pat pasīvajām mājām, kas apliecina to augsto energoefektivitātes līmeni.
              </p>

              {/* Image below text, fully visible */}
              <Reveal>
                <img
                  src="https://ik.imagekit.io/vbvwdejj5/ChatGPT%20Image%20Sep%2014,%202025,%2010_14_05%20PM.png?updatedAt=1757878716920"
                  alt="REHAU SYNEGO"
                  className="w-full max-h-[520px] object-contain bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-2"
                />
              </Reveal>
            </div>

            {/* Dividers */}
            <div className="hidden md:block w-px bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200" />
            <div className="md:hidden h-px bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200" />

            {/* Right column (sticky) */}
            <div className="space-y-5 text-gray-700 md:sticky md:top-24">
              <Reveal>
                <h2 id="features" className="text-2xl font-semibold text-gray-900">REHAU SYNEGO logi: klusums un drošība jūsu mājās</h2>
              </Reveal>

              <Reveal className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                <div className="flex items-center gap-2 mb-2 text-blue-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 4h-3v6H11V6H8l4-4zM6 14h12v2H6v-2zM6 18h12v2H6v-2z"/></svg>
                  <div className="font-medium">Izcila skaņas izolācija</div>
                </div>
                <p className="mb-2">Troksnis var ievērojami ietekmēt jūsu veselību un labsajūtu. Pētījumi liecina, ka pastāvīgs troksnis, pat ja to uztveram neapzināti, palielina sirds un asinsvadu slimību risku.</p>
                <p className="mb-2">SYNEGO logi ar to īpašo iebūves dziļumu un spēju izmantot papildu skaņu izolējošu stiklu, nodrošina mieru un klusumu jūsu mājoklī.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Samazina troksni par 26 reizēm.</li>
                  <li>Pateicoties vidējā blīvējuma sistēmai, šie logi spēj samazināt trokšņu līmeni pat par 47 decibeliem — līdzvērtīgi zāles pļāvēja trokšņa līmenim dažu metru attālumā.</li>
                </ul>
              </Reveal>

              <Reveal className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                <div className="flex items-center gap-2 mb-2 text-blue-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12l4 4 12-12-2-2-10 10-2-2-2 2z"/></svg>
                  <div className="font-medium">Augsta drošība pret ielaušanos</div>
                </div>
                <p className="mb-2">SYNEGO logi ir pieejami ar paaugstinātu drošības klasi, kas pasargā jūsu mājokli no nevēlamiem viesiem.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Aizsardzības klase līdz RC3.</li>
                  <li>Standarta aprīkojumā iespējama RC2, ar papildu pasākumiem — līdz pat RC3 drošības prasībām.</li>
                  <li>Augstāka drošība nozīmē ilgāku laiku un speciālus instrumentus ielaušanās mēģinājumiem.</li>
                </ul>
              </Reveal>

              <Reveal className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white shadow-sm transition">
                <div className="flex items-center gap-2 mb-2 text-blue-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/></svg>
                  <div className="font-medium">Inovatīva preventīvā aizsardzība</div>
                </div>
                <p className="mb-2">Lai nodrošinātu maksimālu drošību, SYNEGO logiem ir iespējams integrēt viedos risinājumus.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium">REHAU Smart Guard:</span> rāmī iebūvēts trauksmes modulis, kas atpazīst ielaušanos un aktīvi atbaida ielaušanās mēģinātājus, pirms vēl tiek nodarīti bojājumi.</li>
                  <li>Ja nepieciešams, tas ar radiosignālu var iedarbināt arī centrālo signalizācijas sistēmu.</li>
                  <li>Modulis ir savietojams ar citām viedās mājas sistēmām, piedāvājot personalizētu drošības risinājumu.</li>
                </ul>
              </Reveal>
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
