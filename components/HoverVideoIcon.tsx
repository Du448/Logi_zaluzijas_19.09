"use client"

import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type HoverVideoIconProps = {
  src: string
  fallback: ReactNode
}

export function HoverVideoIcon({ src, fallback }: HoverVideoIconProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const card = container?.closest('[data-blind-card]')

    if (!container || !card) {
      return
    }

    const handleEnter = () => {
      const video = videoRef.current
      if (!video) {
        return
      }

      video.currentTime = 0
      void video.play()
    }

    const handleLeave = () => {
      const video = videoRef.current
      if (!video) {
        return
      }

      video.pause()
      video.currentTime = 0
    }

    card.addEventListener('mouseenter', handleEnter)
    card.addEventListener('mouseleave', handleLeave)

    return () => {
      card.removeEventListener('mouseenter', handleEnter)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <div className="flex h-full w-full items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        {fallback}
      </div>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full rounded-xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  )
}
