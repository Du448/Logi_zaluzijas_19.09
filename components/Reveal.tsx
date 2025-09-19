"use client"

import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('opacity-0', 'translate-y-3')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-3')
            el.classList.add('opacity-100', 'translate-y-0')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 will-change-transform will-change-opacity ${className}`}>
      {children}
    </div>
  )
}
