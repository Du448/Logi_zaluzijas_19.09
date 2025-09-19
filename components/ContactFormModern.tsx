"use client"

import React, { useState } from "react"

export default function ContactFormModern(){
  const [status, setStatus] = useState<string | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Paldies! Ziņa nosūtīta (demo).")
  }

  return (
    <form onSubmit={onSubmit} className="mt-10">
      {/* Row 1: Name / Company */}
      <div className="grid md:grid-cols-2 gap-8">
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Vārds</span>
          <input
            name="name"
            required
            placeholder="Jūsu vārds"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
          />
        </label>
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Uzņēmums</span>
          <input
            name="company"
            placeholder="(nav obligāti)"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
          />
        </label>
      </div>

      {/* Row 2: Email / Phone */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <label className="block text-sm text-white/80">
          <span className="block mb-3">E-pasts</span>
          <input
            name="email"
            type="email"
            required
            placeholder="jums@epasts.lv"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
          />
        </label>
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Tālrunis</span>
          <input
            name="phone"
            placeholder="(nav obligāti)"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2"
          />
        </label>
      </div>

      {/* Row 3: Message */}
      <div className="mt-10">
        <label className="block text-sm text-white/80">
          <span className="block mb-3">Ziņa</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Pastāstiet īsumā par savu ideju vai vajadzībām"
            className="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:border-white outline-none py-2 resize-none"
          />
        </label>
      </div>

      {/* Row 4: Policy + Submit */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <label className="inline-flex items-center gap-3 text-white/80 text-sm select-none">
          <input type="checkbox" className="appearance-none w-5 h-5 border border-white/40 rounded-sm grid place-items-center checked:bg-white/90 checked:border-white transition-colors" />
          <span>Mani dati netiks nodoti trešajām personām.</span>
        </label>
        <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
          Nosūtīt ziņu
        </button>
      </div>

      {status && <p className="mt-4 text-emerald-300">{status}</p>}
    </form>
  )
}
