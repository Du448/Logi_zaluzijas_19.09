export default function FooterQuick(){
  return (
    <section className="bg-slate-900 text-white">
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <div className="text-sm text-white/80">Tālrunis</div>
            <a href="tel:+37120886650" className="text-xl font-semibold">+371 20886650</a>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-white/80">E‑pasts</div>
            <a href="mailto:info@vestalux.lv" className="text-xl font-semibold">info@vestalux.lv</a>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="/kontakti" className="inline-flex items-center justify-center rounded-md bg-white/95 text-gray-900 border border-white/70 hover:bg-white px-5 py-3 font-semibold">Piesaki mērīšanu</a>
          </div>
        </div>
      </div>
    </section>
  )
}
