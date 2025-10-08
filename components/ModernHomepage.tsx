'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ModernHomepage() {
  return (
    <>
      <VideoHero />
      <TrustFeatures />
      <PopularProductsCarousel />
      <BlindsTypesCarousel />
      <ContactForm />
    </>
  )
}

function VideoHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Kvalitatīvi PVC logi un žalūzijas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Mūsdienīgi risinājumi jūsu mājai ar garantētu kvalitāti un profesionālu servisu
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/kontakti"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition text-lg"
            >
              Saņemt piedāvājumu
            </Link>
            <Link
              href="/projekti"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition text-lg backdrop-blur"
            >
              Apskatīt projektus
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TrustFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      ),
      title: "Kvalitātes garantija",
      description: "10 gadu garantija visiem produktiem un montāžas darbiem"
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Ātra piegāde",
      description: "Izgatavošana 2-4 nedēļās, uzstādīšana 1 dienā"
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Profesionāla komanda",
      description: "Sertificēti speciālisti ar 15+ gadu pieredzi"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PopularProductsCarousel() {
  const products = [
    { name: "PVC Logi 103. sērija", image: "https://ik.imagekit.io/vbvwdejj5/dzivoklis-1024x601.jpg?updatedAt=1756230772951", price: "No €299" },
    { name: "PVC Logi 104. sērija", image: "https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/104_serija_maja.jpg?updatedAt=1756310634199", price: "No €349" },
    { name: "PVC Logi 119. sērija", image: "https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/No%20Google%20maps/Screenshot_408.png?updatedAt=1757930979050", price: "No €399" },
    { name: "Vertikālās žalūzijas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800", price: "No €89" },
    { name: "Rullo žalūzijas", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800", price: "No €69" },
    { name: "Horizontālās žalūzijas", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800", price: "No €79" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (products.length - 2))
    }, 4000)
    return () => clearInterval(timer)
  }, [products.length])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Populāri produkti</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Izvēlieties no klientu iecienītākajiem produktiem ar labāko cenas un kvalitātes attiecību</p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {products.map((product, i) => (
              <div key={i} className="min-w-[300px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, 80vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: products.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlindsTypesCarousel() {
  const blindsTypes = [
    { name: "Vertikālās žalūzijas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800", description: "Klasiskās vertikālās žalūzijas biroja un mājas logiem" },
    { name: "Horizontālās žalūzijas", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800", description: "Mūsdienīgas horizontālās žalūzijas ar precīzu gaismas kontroli" },
    { name: "Rullo žalūzijas", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800", description: "Elegants rullo žalūziju minimalistiskam dizainam" },
    { name: "Diena/Nakts žalūzijas", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800", description: "Inovatīvas žalūzijas ar divu veidu lamelu sistēmu" },
    { name: "Plise žalūzijas", image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800", description: "Kompaktas plise žalūzijas nelieliem logiem" },
    { name: "Kasešu žalūzijas", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800", description: "Aizsargātas kasešu žalūzijas āra apstākļiem" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (blindsTypes.length - 2))
    }, 5000)
    return () => clearInterval(timer)
  }, [blindsTypes.length])

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Žalūziju veidi</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Izvēlieties piemērotāko žalūziju veidu savam mājoklim un interjeram</p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {blindsTypes.map((type, i) => (
              <div key={i} className="min-w-[300px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover transition hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, 80vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{type.name}</h3>
                  <p className="text-slate-600 text-sm">{type.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: blindsTypes.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/zaluzijas" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Apskatīt visu katalogu
          </Link>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Sazināties ar mums</h2>
            <p className="text-slate-600 mb-8">Saņemiet bezmaksas konsultāciju un precīzu piedāvājumu jūsu projektam</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Telefons</h3>
                  <p className="text-slate-600">+371 20886650</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">E-pasts</h3>
                  <p className="text-slate-600">info@vestalux.lv</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Adrese</h3>
                  <p className="text-slate-600">Rīga, Latvija</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Vārds</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-pasts</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefons</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Ziņojums</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Nosūtīt ziņojumu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
