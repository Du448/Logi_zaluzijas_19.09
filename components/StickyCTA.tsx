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
              {/* WhatsApp icon */}
              <svg className="w-4 h-4 mr-1" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M19.11 17.39c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.08-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.03-.5-.08-.15-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.49-.17 0-.36-.02-.55-.02-.19 0-.5.07-.76.36-.26.29-1 1-1 2.45 0 1.45 1.02 2.85 1.17 3.04.15.19 2 3.06 4.83 4.28.67.29 1.19.46 1.6.58.67.21 1.28.18 1.76.11.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.35z"/>
                <path d="M26.88 5.12A13.93 13.93 0 1 0 5.12 26.88L3 29l2.42-.64a13.93 13.93 0 0 0 21.46-12.1c0-3.73-1.45-7.23-4-9.78s-6.05-4-9.78-4zm-1.6 22.11A11.93 11.93 0 0 1 6.77 27l-.35-.2-1.44.38.39-1.4-.23-.36a11.93 11.93 0 1 1 20.14 2.81z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${tel.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-brand-teal transition-colors"
              aria-label={`Zvanīt ${tel}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
          <Link href={ctaHref} className="btn" aria-label="Kontakti">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}
