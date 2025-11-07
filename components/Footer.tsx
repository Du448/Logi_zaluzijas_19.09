import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-10">
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-lg shadow-slate-900/30">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Stils, komforts un funkcionalitāte vienā.</h3>
          <p className="mt-2 text-sm text-white/70 sm:text-base">Pasūti individuālu risinājumu jau šodien.</p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/kontakti"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Sazinies ar meistaru
            </Link>
          </div>
        </div>
        <div className="grid gap-10 text-sm md:grid-cols-4">
          <div>
            <h4 className="mb-3 font-semibold text-white">Navigācija</h4>
            <div className="grid gap-2">
              <Link className="text-white/70 hover:text-white" href="/">
                Sākums
              </Link>
              <Link className="text-white/70 hover:text-white" href="/logi">
                Logi
              </Link>
              <Link className="text-white/70 hover:text-white" href="/zaluzijas">
                Žalūzijas
              </Link>
              <Link className="text-white/70 hover:text-white" href="/piederumi">
                Piederumi
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Informācija</h4>
            <div className="grid gap-2">
              <Link className="text-white/70 hover:text-white" href="/projekti">
                Projekti
              </Link>
              <Link className="text-white/70 hover:text-white" href="/par-mums">
                Par mums
              </Link>
              <Link className="text-white/70 hover:text-white" href="/kontakti">
                Kontakti
              </Link>
              <Link className="text-white/70 hover:text-white" href="/privatuma-politika">
                Garantija
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Seko mums</h4>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61581610862103" aria-label="Facebook" className="hover:text-white" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.91h-2.34V22C18.34 21.21 22 17.06 22 12.06z" />
                </svg>
              </a>
            </div>
            <div className="mt-3 text-sm text-white/60">Sekojet jaunākajiem piedāvājumiem</div>
          </div>
        </div>
        <hr className="my-6 border-white/10" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/60 md:flex-row">
          <div>© 2025 SIA ADEstate. Visas tiesības aizsargātas.</div>
          <div className="flex gap-4">
            <Link href="/privatuma-politika" className="hover:text-white">
              Privātuma politika
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
