"use client"

import { useEffect, useRef, useState } from "react"

export default function PlayOnceVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    let observer: IntersectionObserver | null = null

    const onIntersect: IntersectionObserverCallback = (entries) => {
      const [entry] = entries
      if (!entry) return
      if (entry.isIntersecting && !hasPlayed) {
        // try play; browsers require muted + playsInline
        vid.play().catch(() => {})
      }
    }

    observer = new IntersectionObserver(onIntersect, { root: null, rootMargin: "0px", threshold: 0.35 })
    observer.observe(vid)

    const onEnded = () => setHasPlayed(true)
    vid.addEventListener("ended", onEnded)

    return () => {
      observer?.disconnect()
      vid.removeEventListener("ended", onEnded)
    }
  }, [hasPlayed])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        controls={false}
        loop={false}
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {hasPlayed && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      )}
    </div>
  )
}
