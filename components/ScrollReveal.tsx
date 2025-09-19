"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function ScrollReveal(){
  const obsRef = useRef<IntersectionObserver | null>(null)
  const mutRef = useRef<MutationObserver | null>(null)
  const pathname = usePathname()

  useEffect(()=>{
    if (typeof window === 'undefined') return
    const docEl = document.documentElement
    docEl.classList.add('io-setup')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    // Create IO once
    if (!obsRef.current) {
      obsRef.current = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-visible')
            obsRef.current?.unobserve(e.target)
          }
        })
      },{ root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.05 })
    }

    const observeAll = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>('.io-reveal, .io-slide-left, .io-slide-right, .io-fade-up'))
      if (els.length === 0) return

      // Reveal any already-in-view elements immediately
      const vh = window.innerHeight || document.documentElement.clientHeight
      els.forEach(el => {
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.9 && r.bottom > 0) {
          requestAnimationFrame(()=> el.classList.add('is-visible'))
        }
        // (Re)observe elements that are not visible yet
        if (!el.classList.contains('is-visible')) {
          obsRef.current?.observe(el)
        }
      })
    }

    // Initial scan
    observeAll()

    // Watch DOM for newly added .io-reveal elements
    if (!mutRef.current) {
      mutRef.current = new MutationObserver((recs)=>{
        let found = false
        recs.forEach(r=>{
          r.addedNodes.forEach(n=>{
            if (n instanceof HTMLElement && (
              n.matches('.io-reveal, .io-slide-left, .io-slide-right, .io-fade-up') ||
              n.querySelector('.io-reveal, .io-slide-left, .io-slide-right, .io-fade-up')
            )){
              found = true
            }
          })
        })
        if (found) observeAll()
      })
      mutRef.current.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      // Keep io-setup since layout persists; do not remove on route changes
    }
  }, [pathname])

  // On unmount (should not happen in App Router), clean up observers
  useEffect(()=>{
    return () => {
      obsRef.current?.disconnect()
      mutRef.current?.disconnect()
      document.documentElement.classList.remove('io-setup')
    }
  },[])

  return null
}
