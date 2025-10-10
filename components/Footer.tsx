import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-10">
        <div className="grid gap-10 text-sm md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xl font-semibold text-white md:text-2xl">Interjera risinājumi</span>
            </div>
            <p className="text-white/70">
              Augstas kvalitātes PVC logi, žalūzijas un piederumi ar vairāk nekā 10 gadu pieredzi.
            </p>
          </div>
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
              <Link className="text-white/70 hover:text-white" href="#">
                Garantija
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Sekojet mums</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.91h-2.34V22C18.34 21.21 22 17.06 22 12.06z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5zM4.5 8.25h4.88V20H4.5zM13.63 8.25h4.68v1.67h.06a5.13 5.13 0 0 1 4.63-2.54c4.95 0 5.86 3.26 5.86 7.49V20h-4.88v-6.07c0-1.45 0-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.21V20h-4.88z" />
                </svg>
              </a>
            </div>
            <div className="mt-3 text-sm text-white/60">Sekojet jaunākajiem piedāvājumiem un novitātēm</div>
          </div>
        </div>
        <hr className="my-6 border-white/10" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/60 md:flex-row">
          <div>© 2025 SIA ADEstate. Visas tiesības aizsargātas.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privātuma politika
            </Link>
            <Link href="#" className="hover:text-white">
              Lietošanas noteikumi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
