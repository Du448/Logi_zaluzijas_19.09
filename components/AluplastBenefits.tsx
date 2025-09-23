"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AluplastBenefits() {
  return (
    <div className="bg-white">
      <HeroSection />
      <BenefitsGrid />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(16,185,129,0.08),transparent_70%)]" aria-hidden="true" />
      <div className="container py-16 md:py-20 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Aluplast 4000 — Kāpēc izvēlēties mūsu logus?
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-3xl mx-auto text-white/80 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aluplast 4000 profilu sistēma apvieno <strong>augstāko kvalitāti</strong>, <strong>energoefektivitāti</strong> un <strong>ilgmūžību</strong>. Izvēlieties risinājumu, kas nodrošinās komfortu un ietaupījumus gadiem ilgi.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#benefits" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 px-6 py-3 font-semibold text-white transition">Apskatīt īpašības</a>
          <Link href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-6 py-3 font-semibold text-white transition">Saņemt piedāvājumu</Link>
        </motion.div>
      </div>
    </section>
  )
}

function BenefitsGrid() {
  const benefits = [
    {
      title: "Energoefektivitāte",
      description: "Samaziniet apkures izmaksas līdz pat 40% ar mūsu augsti izolējošajiem logiem. 5-kameru profils un trīskāršais stiklojums nodrošina izcilu siltumizolāciju.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2v8h8a9 9 0 11-9-9z"/>
          <path d="M21 13h-8v8a8.96 8.96 0 008-8z"/>
        </svg>
      ),
      highlights: ["U-vērtība līdz 0.77 W/m²K", "Līdz 40% ietaupījums", "Trīskāršais stiklojums"]
    },
    {
      title: "Drošība un izturība",
      description: "Tērauda pastiprinājums un RC2 klases drošības sistēma nodrošina maksimālu aizsardzību. Furnitūras gropes 13mm dziļumā garantē stabilitāti.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/>
        </svg>
      ),
      highlights: ["RC2 drošības klase", "Tērauda pastiprinājums", "13mm furnitūras gropes"]
    },
    {
      title: "Vairāk gaismas",
      description: "Plānāki profili un lielāki stikla laukumi ļauj iekļūt vairāk dabīgās gaismas. Uzlabojiet dzīves kvalitāti ar gaišākām telpām.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      highlights: ["70mm profila platums", "Maksimāls stikla laukums", "Optimizēta gaismas caurlaidība"]
    },
    {
      title: "Skaņas komforts",
      description: "Baudiet klusumu savās mājās. Mūsu logi nodrošina skaņas izolāciju līdz 45 dB, efektīvi bloķējot ielas troksni un radot mierīgu vidi.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 10a9 9 0 0118 0v3a4 4 0 01-4 4h-1a2 2 0 01-2-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2H4a1 1 0 01-1-1v-6z"/>
        </svg>
      ),
      highlights: ["Līdz 45 dB izolācija", "Daudzslāņu blīvējumi", "Klusas telpas"]
    },
    {
      title: "Viegla apkope",
      description: "Augstas kvalitātes PVC materiāls neprasīs sarežģītu apkopi. Vienkārša tīrīšana ar ūdeni un ziepēm saglabās logu skaistumu gadiem ilgi.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM9 11h6v2H9v-2z"/>
        </svg>
      ),
      highlights: ["Bez krāsošanas", "Ūdensizturīgs", "Ilgmūžīgs materiāls"]
    },
    {
      title: "Dizaina daudzveidība",
      description: "Plašs krāsu un faktūru klāsts ļaus ideāli piemērot logus jūsu mājas stilam. Laminācijas ar 'cool colors' tehnoloģiju nodrošina ilgstošu krāsu saglabāšanu.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      highlights: ["50+ krāsu varianti", "Cool colors tehnoloģija", "Dažādas faktūras"]
    }
  ]

  return (
    <section id="benefits" className="py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-600/10 text-blue-600 grid place-items-center mb-4">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <ul className="space-y-2">
                  {benefit.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-sky-600 py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Gatavi uzlabot savu māju?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Saņemiet <strong>bezmaksas konsultāciju</strong> un personalizētu piedāvājumu 24 stundu laikā. 
            Mūsu eksperti palīdzēs izvēlēties ideālo risinājumu jūsu vajadzībām.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/kontakti" 
              className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Bezmaksas konsultācija
            </Link>
            
            <Link 
              href="/logi/ideal-4000" 
              className="inline-flex items-center justify-center rounded-md border-2 border-white/70 text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Apskatīt produktu
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Bezmaksas mērījumi</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>10 gadu garantija</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Profesionāla uzstādīšana</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
