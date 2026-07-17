"use client"

import Image from "next/image"
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
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-whatsapp shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-whatsapp focus-visible:ring-offset-2"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-brand-whatsapp/70 blur-md animate-whatsapp-pulse" aria-hidden="true" />
        <Image
          src="https://ik.imagekit.io/vbvwdejj5/whatsapp.png?updatedAt=1762280478809"
          alt="WhatsApp"
          width={48}
          height={48}
          className="relative z-10 h-12 w-12"
        />
      </a>
    </div>
  )
}
