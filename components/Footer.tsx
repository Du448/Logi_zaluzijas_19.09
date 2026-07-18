import Link from "next/link"

// Kolonnu virsraksta stils — klusas etiķetes, tāda pati izretināšana kā lapu eyebrow tekstiem
const labelCls = "text-xs font-medium uppercase tracking-[0.14em] text-white/40"
const linkCls = "text-white/70 transition-colors hover:text-white"

const navLinks = [
  { href: "/", label: "Sākums" },
  { href: "/logi", label: "Logi" },
  { href: "/zaluzijas", label: "Žalūzijas" },
  { href: "/piederumi", label: "Piederumi" },
]

const infoLinks = [
  { href: "/projekti", label: "Projekti" },
  { href: "/par-mums", label: "Par mums" },
  { href: "/kontakti", label: "Kontakti" },
  { href: "/privatuma-politika", label: "Privātuma politika" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-6">
        {/* Aicinājums — bez kastes, tikai gaisa telpa un viena atdalošā līnija */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 md:flex-row md:items-end md:justify-between md:gap-12 md:py-20">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-4xl">
              Stils, komforts un funkcionalitāte vienā.
            </h2>
            <p className="mt-3 text-white/50">Pasūti individuālu risinājumu jau šodien.</p>
          </div>
          <Link
            href="/kontakti"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-tight text-slate-900 transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:self-auto"
          >
            Sazinies ar meistaru
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Kolonnas — ceturtā vieta tagad ir aizpildīta ar tiešajiem kontaktiem */}
        <div className="grid gap-10 py-12 text-sm md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className={labelCls}>Sazinies</h3>
            <div className="mt-4 grid gap-2">
              <a href="tel:+37120886650" className="text-base font-semibold text-white transition-colors hover:text-brand-teal">
                +371 20886650
              </a>
              <a href="mailto:info@vestalux.lv" className={linkCls}>
                info@vestalux.lv
              </a>
              <p className="text-white/50">Ozolciema iela 8, Rīga, LV-1058</p>
            </div>
          </div>

          <div>
            <h3 className={labelCls}>Navigācija</h3>
            <div className="mt-4 grid gap-2.5">
              {navLinks.map((l) => (
                <Link key={l.href} className={linkCls} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={labelCls}>Informācija</h3>
            <div className="mt-4 grid gap-2.5">
              {infoLinks.map((l) => (
                <Link key={l.href} className={linkCls} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={labelCls}>Seko mums</h3>
            <div className="mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581610862103"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.91h-2.34V22C18.34 21.21 22 17.06 22 12.06z" />
                </svg>
                Facebook
              </a>
              <p className="mt-3 text-white/50">Jaunākie piedāvājumi un darbu foto</p>
            </div>
          </div>
        </div>

        {/* Apakšējā rinda. Papildu atkāpe labajā/apakšējā malā, lai peldošās
            WhatsApp un "uz augšu" pogas nepārklāj privātuma politikas saiti. */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pb-24 pt-6 text-xs text-white/50 md:flex-row md:pb-8 md:pr-24">
          <p>© 2025 SIA ADEstate. Visas tiesības aizsargātas.</p>
          <Link href="/privatuma-politika" className="transition-colors hover:text-white">
            Privātuma politika
          </Link>
        </div>
      </div>
    </footer>
  )
}
