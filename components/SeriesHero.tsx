import Link from 'next/link'

type SeriesHeroProps = {
  title: string
  subtitle?: string
  imageUrl: string
}

export function SeriesHero({ title, subtitle, imageUrl }: SeriesHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gray-950 text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Sērijas attēls"
          className="h-full w-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 md:px-10 md:py-16">
        <nav className="mb-4 text-sm text-white/80">
          <Link href="/projekti" className="hover:underline">Projekti</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-white/85 text-base md:text-lg">{subtitle}</p>
        )}

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            '2 gadu garantija',
            'Līzings',
            'A++ stiklojums',
          ].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
