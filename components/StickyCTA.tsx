import Link from 'next/link'

type StickyCTAProps = {
  ctaHref?: string
  ctaText?: string
  tel?: string
}

export default function StickyCTA({ ctaHref = '/kontakti', ctaText = 'Sazināties', tel = '+37120886650' }: StickyCTAProps) {
  return (
    <>
      {/* Mobile: bottom sticky bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur">
        <div className="container px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${tel.replace(/\D+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 text-xs font-semibold"
              aria-label="Rakstīt WhatsApp"
            >
              {/* WhatsApp icon (single-path, same as Header) */}
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.94 11.94 0 0012.01 0C5.39 0 .02 5.37.02 12c0 2.1.55 4.08 1.5 5.79L0 24l6.36-1.64A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.82c-1.84 0-3.55-.5-5.02-1.36l-.36-.21-3.77.97.99-3.68-.23-.38A9.77 9.77 0 012.2 12 9.8 9.8 0 1112 21.82zm5.62-7.37c-.31-.16-1.81-.89-2.09-.99-.28-.1-.49-.16-.7.16-.21.31-.8.99-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.45-1.53-.9-.8-1.51-1.78-1.69-2.08-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.51 1.11 2.97 1.27 3.18.16.21 2.19 3.34 5.3 4.69.74.32 1.32.5 1.77.64.74.23 1.41.2 1.94.12.59-.09 1.81-.74 2.07-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.21-.59-.37z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${tel.replace(/\s+/g, '')}`}
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-brand-teal transition-colors"
              aria-label={`Zvanīt ${tel}`}
            >
              Zvanīt
            </a>
          </div>
          <Link href={ctaHref} className="btn" aria-label="Kontakti">
            Kontakti
          </Link>
        </div>
      </div>
    </>
  )
}
