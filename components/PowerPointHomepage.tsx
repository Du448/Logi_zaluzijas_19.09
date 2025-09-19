"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PowerPointHomepage() {
  const [index, setIndex] = useState(0)
  const total = 5 // number of slides

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, total - 1))
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  const go = (i: number) => setIndex(Math.max(0, Math.min(i, total - 1)))
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/ADEstate_logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="ml-3 text-xl font-bold text-slate-800">Logi Jums</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/projekti" className="text-slate-600 hover:text-slate-800 transition">Projekti</Link>
            <Link href="/zaluzijas" className="text-slate-600 hover:text-slate-800 transition">Žalūzijas</Link>
            <Link href="/pakalpojumi" className="text-slate-600 hover:text-slate-800 transition">Pakalpojumi</Link>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Saņemt piedāvājumu
          </button>
        </div>
      </nav>

      {/* Slides viewport (full height minus nav ~80px) */}
      <div className="pt-[72px] h-[calc(100vh-72px)] relative">
        <motion.div
          className="h-full flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          style={{ width: `${100 * total}%` }}
        >
          {/* Slide 1: Hero */}
          <div className="w-full h-full flex-shrink-0">
            <HeroSlide />
          </div>
          {/* Slide 2: Products */}
          <div className="w-full h-full flex-shrink-0">
            <ProductsSlide />
          </div>
          {/* Slide 3: About */}
          <div className="w-full h-full flex-shrink-0">
            <AboutSlide />
          </div>
          {/* Slide 4: Social Proof */}
          <div className="w-full h-full flex-shrink-0">
            <SocialProofSlide />
          </div>
          {/* Slide 5: Contact */}
          <div className="w-full h-full flex-shrink-0">
            <ContactFormSection fullScreen />
          </div>
        </motion.div>

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-3 z-40">
          <button
            onClick={prev}
            disabled={index === 0}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 backdrop-blur disabled:opacity-40"
            aria-label="Iepriekšējais slaids"
          >
            ←
          </button>
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Slaids ${i + 1}`}
            />
          ))}
          <button
            onClick={next}
            disabled={index === total - 1}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 backdrop-blur disabled:opacity-40"
            aria-label="Nākamais slaids"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

function HeroSlide() {
  return (
    <section className="h-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 h-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Uzticams partneris 15+ gadus</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">Kvalitatīvi PVC logi un žalūzijas</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">Mēs esam Latvijas vadošais PVC logu un žalūziju ražotājs. Palīdzam māju īpašniekiem uzlabot komfortu ar energoefektīviem risinājumiem un 10 gadu garantiju.</p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">1000+</div><div className="text-sm text-slate-600">Projekti</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">10</div><div className="text-sm text-slate-600">Gadu garantija</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">2-4</div><div className="text-sm text-slate-600">Nedēļas</div></div>
          </div>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">Bezmaksas konsultācija</button>
            <Link href="/projekti" className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition">Apskatīt projektus</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <img src="https://ik.imagekit.io/vbvwdejj5/dzivoklis-1024x601.jpg?updatedAt=1756230772951" alt="PVC logi" className="rounded-2xl shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}

function ProductsSlide() {
  const products = [
    { title: 'PVC Logi', description: 'Energoefektīvi PVC logi ar 6-kameru profilu un trīskāršo stiklojumu', image: 'https://ik.imagekit.io/vbvwdejj5/dzivoklis-1024x601.jpg?updatedAt=1756230772951', price: 'No €299' },
    { title: 'Vertikālās žalūzijas', description: 'Klasiskās vertikālās žalūzijas biroja un mājas logiem', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800', price: 'No €89' },
    { title: 'Rullo žalūzijas', description: 'Elegants rullo žalūziju minimalistiskam dizainam', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800', price: 'No €69' },
  ]
  return (
    <section className="h-full bg-white">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">Mūsu galvenie produkti</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Trīs populārākie risinājumi, kas nodrošina komfortu un enerģijas ietaupījumu</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{product.title}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">Uzzināt vairāk</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSlide() {
  const features = [
    'Vācu kvalitātes profili un furnitūra',
    'Profesionāla komanda ar 15+ gadu pieredzi',
    '10 gadu garantija produktiem un montāžai',
    'Bezmaksas mērījumi un konsultācijas',
    'Izgatavošana 2-4 nedēļās',
  ]
  return (
    <section className="h-full bg-slate-50">
      <div className="container mx-auto px-6 h-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Kāpēc izvēlēties mūs?</h2>
          <p className="text-slate-600 mb-6 text-lg">Esam Latvijas vadošais PVC logu un žalūziju ražotājs ar 15+ gadu pieredzi. Mūsu komanda sastāv no sertificētiem speciālistiem, kas nodrošina augstāko kvalitāti katrā projektā.</p>
          <div className="space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=400" alt="Darbnīca" className="rounded-lg" />
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400" alt="Uzstādīšana" className="rounded-lg mt-8" />
        </motion.div>
      </div>
    </section>
  )
}

function SocialProofSlide() {
  const items = [
    { name: 'Jānis Bērziņš', role: 'Dzīvokļa īpašnieks', text: 'Ātra piegāde un lieliska kvalitāte. Logi būtiski uzlaboja siltumnoturību un samazināja apkures izmaksas.', rating: 5 },
    { name: 'Anna Kalniņa', role: 'Mājas īpašniece', text: 'Profesionāla komanda un ļoti tīra uzstādīšana. Iesaku visiem, kas meklē kvalitatīvus logus!', rating: 5 },
    { name: 'Mārtiņš Ozols', role: 'Biroja vadītājs', text: 'Konsultācija palīdzēja izvēlēties optimālu risinājumu tieši mūsu biroja vajadzībām.', rating: 5 },
  ]
  return (
    <section className="h-full bg-white">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">Ko saka mūsu klienti</h2>
          <p className="text-slate-600">Vairāk nekā 1000 apmierināti klienti visā Latvijā</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-slate-50 rounded-xl p-6">
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
              <p className="text-slate-700 mb-4">“{t.text}”</p>
              <div><div className="font-semibold text-slate-800">{t.name}</div><div className="text-sm text-slate-600">{t.role}</div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactFormSection({ fullScreen = false }: { fullScreen?: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className={`${fullScreen ? 'h-full' : 'py-20'} bg-gradient-to-br from-blue-600 to-blue-700`}>
      <div className="container mx-auto px-6 h-full">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${fullScreen ? 'h-full' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Gatavi sākt projektu?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Saņemiet bezmaksas konsultāciju un precīzu piedāvājumu 24 stundu laikā
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>+371 20886650</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span>info@vestalux.lv</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Saņemt bezmaksas piedāvājumu</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Jūsu vārds"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefona numurs"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-pasta adrese"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Aprakstiet savu projektu..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition text-lg"
              >
                Nosūtīt pieprasījumu
              </button>
            </form>
            <p className="text-sm text-slate-600 mt-4 text-center">
              Atbildēsim 24 stundu laikā
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
