import React from "react"

export default function PixelHiveServiceSection(){
  return (
    <div className="text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 border-b border-gray-200">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Services</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              We craft pixel‑perfect websites and delightful interfaces
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Strategy, design and development — shipped with care. From landing pages to full scale
              web experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold">
                Get a quote
              </a>
              <a href="#work" className="inline-flex items-center rounded-md border border-gray-300 hover:bg-gray-100 text-gray-900 px-5 py-3 font-semibold">
                View work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-white">
        <div className="container py-14 md:py-16">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Design Systems', desc: 'Scalable, consistent UI foundations.' },
              { title: 'Web Development', desc: 'Accessible, fast and SEO‑friendly.' },
              { title: 'Brand & Art Direction', desc: 'Strong visual language and identity.' },
            ].map((f, i)=> (
              <article key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Two column media blocks */}
      <section id="work" className="bg-gray-50 border-y border-gray-200">
        <div className="container py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[1,2,3,4].map((n)=> (
              <article key={n} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <div className="aspect-[16/10] bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://picsum.photos/seed/pixel-${n}/1200/800`} alt="Showcase" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold">Project {n}</h4>
                  <p className="text-gray-600 mt-1">Landing page, UI kit and interactions.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-white">
        <div className="container py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
          <p className="text-gray-600 mt-3">Let’s build something great together.</p>
          <a href="/kontakti" className="inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold mt-6">
            Contact us
          </a>
        </div>
      </section>
    </div>
  )
}
