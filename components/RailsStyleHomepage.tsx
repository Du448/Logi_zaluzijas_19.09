"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
// Custom CheckIcon component
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function RailsStyleHomepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with fixed background that stays while content scrolls over it */}
      <section
        className="relative min-h-screen overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://ik.imagekit.io/vbvwdejj5/Rings_19872.jpg?updatedAt=1758100630577')" }}
      >
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" aria-hidden="true"></div>
        
        <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
          <div className="max-w-4xl text-left font-['FS_Me','FS Me',ui-sans-serif]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                PVC logi un žalūzijas, kas padara jūsu mājokli
                <br />
                <span className="block text-white">✓ siltāku</span>
                <span className="block text-white">✓ klusāku</span>
                <span className="block text-white">✓ modernāku</span>
              </h1>
              <p className="text-xl text-white max-w-3xl leading-relaxed text-left">
                Kvalitatīva uzstādīšana un uzticama garantija — vairāk nekā 10 gadu pieredze
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-start mb-12"
            >
              <Link href="/kontakti" className="inline-flex items-center justify-center px-7 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg">
                Saņemt piedāvājumu
              </Link>
              <Link href="#katalogs" className="inline-flex items-center justify-center px-7 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors shadow-lg">
                Apskatīt produktus
              </Link>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-start gap-3 text-sm"
            >
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200">
                Logu profilu plānošana
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200">
                Garantija visiem produktiem
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200">
                Ātra piegāde
              </span>
            </motion.div>
          </div>

          {/* Removed placeholder image per request; background video now fills hero */}
        </div>
      </section>

      {/* Three Column Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kāpēc izvēlēties mūs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mēs nodrošinām pilnu servisu - no konsultācijas līdz uzstādīšanai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kvalitatīvi materiāli
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strādājam tikai ar pārbaudītiem Eiropas ražotājiem un sniedzam garantiju visiem produktiem
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Profesionāla uzstādīšana
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mūsu sertificēti meistari nodrošina precīzu un kvalitatīvu uzstādīšanu
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                10+ gadu pieredze
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vairāk nekā 10 gadu pieredze un tūkstošiem apmierinātu klientu visā Latvijā
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">2000+</div>
              <div className="text-gray-300">Uzstādīti logi</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Gadu pieredze</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Apmierināti klienti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plain image section (user can change src) */}
      <section className="w-full">
        <img
          src="https://ik.imagekit.io/vbvwdejj5/window_des.jpg?updatedAt=1758100390058"
          alt="Pilna platuma attēls"
          className="w-full h-[40vh] md:h-[60vh] object-cover"
          loading="lazy"
        />
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mūsu produktu kategorijas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Izvēlieties no plašā produktu klāsta, kas piemērots katram mājoklim
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="7" y="7" width="10" height="10" rx="1" ry="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">PVC Logi</h3>
              <p className="text-gray-600 mb-6">Energoefektīvi un ilgmūžīgi logi ar izcilu siltuma un skaņas izolāciju</p>
              <Link href="/logi" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Apskatīt vairāk →
              </Link>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Žalūzijas</h3>
              <p className="text-gray-600 mb-6">Plašs žalūziju klāsts - vertikālās, horizontālās, rullo un diena/nakts</p>
              <Link href="/zaluzijas" className="text-blue-600 font-semibold hover:text-blue-700">
                Apskatīt vairāk →
              </Link>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Piederumi</h3>
              <p className="text-gray-600 mb-6">Kvalitatīvi piederumi un furnitūra logu un žalūziju uzstādīšanai</p>
              <Link href="/piederumi" className="text-purple-600 font-semibold hover:text-purple-700">
                Apskatīt vairāk →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Kvalitāte, uz ko varat paļauties
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Piedāvājam skaidrus garantijas termiņus, izmantojam tikai sertificētus materiālus un nodrošinām uzticamu pēcpārdošanas servisu. 
            Mūsu mērķis — lai Jūsu logi kalpotu ilgstoši un bez raizēm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakti" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Saņemt piedāvājumu
            </Link>
            <Link href="tel:+37120886650" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors border border-emerald-500">
              Zvanīt tagad
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
