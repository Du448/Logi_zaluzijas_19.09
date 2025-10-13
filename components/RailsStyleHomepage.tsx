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
  const productCards = [
    {
      title: 'PVC Logi',
      description: 'Energoefektīvi un ilgmūžīgi logi ar izcilu siltuma un skaņas izolāciju.',
      href: '/logi',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/093528f8-dbf7-42db-ab07-3c1141a1fcac.png?updatedAt=1758285050531")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/35',
      accentBg: 'bg-emerald-100',
      accentHover: 'group-hover:bg-emerald-200',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <rect x="8" y="8" width="8" height="8" rx="2" />
        </svg>
      ),
    },
    {
      title: 'Žalūzijas',
      description: 'Plašs žalūziju klāsts — vertikālās, horizontālās, rullo un diena/nakts.',
      href: '/zaluzijas',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/images.jpg?updatedAt=1756983471196")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/35',
      accentBg: 'bg-sky-100',
      accentHover: 'group-hover:bg-sky-200',
      icon: (
        <svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16" />
          <path d="M4 10h16" />
          <path d="M4 14h16" />
          <path d="M6 18h12" />
        </svg>
      ),
    },
    {
      title: 'Moskītu tīkls',
      description: 'Pasargā mājokli no kukaiņiem, saglabājot brīvu gaisa plūsmu un skatu uz āru.',
      href: '/zaluzijas/moskitu',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_0_moskitiera_okienna_stiff_3%20(1).jpg?updatedAt=1756984222921")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/35',
      accentBg: 'bg-emerald-100',
      accentHover: 'group-hover:bg-emerald-200',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
          <path d="M6 3v18M12 3v18M18 3v18" />
        </svg>
      ),
    },
    {
      title: 'Mīkstie logi',
      description: 'PVC logu sistēmas ar auduma apdari terasēm un verandām elastīgai aizsardzībai.',
      href: '/zaluzijas/mikstie-logi',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/myagkie-okna-iz-pvh-dlya-besedok-i-terras-preimushchestva-i-nedostatki-1.jpg?updatedAt=1756983448661")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/35',
      accentBg: 'bg-sky-100',
      accentHover: 'group-hover:bg-sky-200',
      icon: (
        <svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M4 9h16" />
          <path d="M9 21V9l-3 3" />
          <path d="M15 21V9l3 3" />
        </svg>
      ),
    },
    {
      title: 'Pamatnes izolācijas profils EPS',
      description: 'Stabila balsta un siltumtiltu samazināšanas risinājums logu montāžai.',
      href: '/piederumi#eps-baze-profil',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/detail_image_blaugelb_x_0000420841_BLGE00521-3.png?updatedAt=1758275010155")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/35',
      accentBg: 'bg-slate-100',
      accentHover: 'group-hover:bg-slate-200',
      icon: (
        <svg className="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16" />
          <path d="M4 12h12" />
          <path d="M4 17h8" />
        </svg>
      ),
    },
    {
      title: 'Ārējās un iekšējās palodzes',
      description: 'Elegantas un izturīgas palodzes telpas noslēgumam, piemērotas gan interjeram, gan fasādei.',
      href: '/piederumi#arejas-palodzes',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/Paladzes/%C4%80r%C4%93j%C4%81_2.jpg?updatedAt=1758274888036")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/35',
      accentBg: 'bg-amber-100',
      accentHover: 'group-hover:bg-amber-200',
      icon: (
        <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h18" />
          <path d="M5 11h14" />
          <path d="M7 15h10" />
          <path d="M9 19h6" />
        </svg>
      ),
    },
    {
      title: 'Logu rokturi',
      description: 'Droši un ergonomiski rokturi ar dažādiem dizainiem un bērnu drošības opcijām.',
      href: '/piederumi#logu-rokturi',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/istockphoto-1218376139-2048x2048%20-%20Edited.jpg?updatedAt=1758275325273")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/30',
      accentBg: 'bg-rose-100',
      accentHover: 'group-hover:bg-rose-200',
      icon: (
        <svg className="w-6 h-6 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="10" width="6" height="4" rx="1" />
          <path d="M9 12h5a4 4 0 0 1 4 4v4" />
        </svg>
      ),
    },
    {
      title: 'Rullo slēdži',
      description: 'Ērta žalūziju vadība ar ķēdes vai motorizētiem mehānismiem precīzai gaismas kontrolei.',
      href: '/zaluzijas/rullo-slegi',
      backgroundImageClass: 'bg-[url("https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_shutters.jpg?updatedAt=1756983800823")] bg-cover bg-center',
      backgroundClass: 'bg-gradient-to-br from-white/85 via-white/60 to-white/35',
      accentBg: 'bg-indigo-100',
      accentHover: 'group-hover:bg-indigo-200',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5h16v4H4z" />
          <path d="M8 13h8" />
          <path d="M10 17h4" />
          <path d="M12 9v8" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with fixed background that stays while content scrolls over it */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image with subtle blur */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-fixed bg-cover bg-center blur-sm scale-105" style={{ backgroundImage: "url('https://ik.imagekit.io/vbvwdejj5/living%20room_1.jpg?updatedAt=1760365794815')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
          <div className="max-w-4xl text-left font-['FS_Me','FS Me',ui-sans-serif]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Padariet savu mājokli siltu, klusu un modernu ar profesionāli uzstādītiem PVC logiem un žalūzijām no VestaLUX
              </h1>
              <p className="text-xl text-white max-w-3xl leading-relaxed text-left">
                Ilgadēja pieredze, uzticami risinājumi un garantēta kvalitāte visā Latvijā
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
                Ilgadēja pieredze
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Iegūstiet profesionāļus savā jomā
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-semibold text-emerald-400">Garantija</div>
              <div className="text-gray-300">Katram projektam nodrošinām garantiju ar skaidriem termiņiem un vienotu servisa kontaktu.</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-semibold text-blue-400">Profesionāls mērnieks</div>
              <div className="text-gray-300">Mērījumus veic sertificēts speciālists ar kalibrētiem instrumentiem, nodrošinot precīzu pasūtījumu.</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-semibold text-purple-400">Skaidrs budžets</div>
              <div className="text-gray-300">Piedāvājums iekļauj visus materiālus, montāžu un piegādi bez slēptām izmaksām.</div>
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
      <section id="katalogs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mūsu produktu kategorijas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Izvēlieties no plašā produktu klāsta, kas piemērots katram mājoklim
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            {productCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >
                {card.backgroundImageClass && (
                  <div className={`absolute inset-0 ${card.backgroundImageClass} opacity-80 transition-opacity duration-300 group-hover:opacity-95`} aria-hidden="true" />
                )}
                <div className={`absolute inset-0 ${card.backgroundClass} transition-opacity duration-300 group-hover:opacity-100`} aria-hidden="true" />
                <div className="absolute inset-0 bg-white/78 transition-colors duration-300 group-hover:bg-white/55" aria-hidden="true" />
                <div className="relative z-10 flex h-full flex-col gap-4 p-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${card.accentBg} ${card.accentHover}`}>
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700">{card.description}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 transition-colors duration-300 group-hover:text-emerald-700">
                    Apskatīt vairāk
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
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
