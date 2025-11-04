"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3 transition-all duration-300",
        isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Ritināt uz lapas sākumu"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg transition-colors hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href="https://wa.me/37120886650"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sazināties WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-colors hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  )
}

type WhatsAppIconProps = React.SVGProps<SVGSVGElement>

function WhatsAppIcon(props: WhatsAppIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2.02c-5.52 0-10 4.46-10 9.98 0 1.76.47 3.49 1.36 5.01L2 22l5.13-1.34c1.44.78 3.06 1.19 4.69 1.19 5.52 0 10-4.47 10-9.98s-4.48-9.85-10-9.85ZM16.82 15.86c-.24.68-1.41 1.25-1.95 1.32-.49.07-1.12.11-1.82-.11-.42-.13-.96-.31-1.64-.6-2.89-1.26-4.76-4.18-4.9-4.37-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.09 1-2.36.26-.27.57-.33.76-.33.19 0 .38 0 .54.01.17.01.4-.06.63.48.24.54.82 1.99.9 2.13.07.15.12.31.02.48-.09.17-.13.27-.26.43-.14.15-.29.34-.4.46-.13.13-.2.27-.09.47.1.19.45.74.96 1.2.66.59 1.22.78 1.4.87.17.09.35.07.48-.06.14-.13.55-.6.7-.8.15-.19.29-.17.49-.1.19.07 1.23.58 1.44.68.22.1.36.16.41.25.05.1.05.7-.19 1.38Z" />
    </svg>
  )
}
