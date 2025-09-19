"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header(){
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const [openProducts, setOpenProducts] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const showFloating = false
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const [bpKey, setBpKey] = useState<'mobile'|'desktop'>(()=>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(min-width: 768px)').matches ? 'desktop' : 'mobile'
  )
  const [hasInteracted, setHasInteracted] = useState(false)

  // Temporary debug helpers
  function openMenu(reason: string){
    console.log('[HeaderMenu] open -> true | reason:', reason)
    setOpen(true)
  }
  function closeMenu(reason: string){
    console.log('[HeaderMenu] open -> false | reason:', reason)
    setOpen(false)
  }
  // Track open changes
  useEffect(()=>{
    console.log('[HeaderMenu] state changed:', { open })
  }, [open])

  // Guard: never allow menu to be open unless user interacted (prevents auto-open glitches)
  useEffect(()=>{
    if (!hasInteracted && open) {
      closeMenu('guard:no-interaction')
    }
  }, [open, hasInteracted])

  // Fade header as user scrolls past hero (70vh on mobile, 100vh on md+)
  useEffect(() => {
    let raf = 0
    const calc = () => {
      const vh = window.innerHeight
      const isMd = window.matchMedia('(min-width: 768px)').matches
      const threshold = vh * (isMd ? 1 : 0.7)
      const y = window.scrollY
      const next = Math.max(0, Math.min(1, 1 - y / threshold))
      setOpacity(next)
      setScrolled(y > 8)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(calc)
    }
    calc()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', calc)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', calc)
    }
  }, [])

  // Close mobile menu on mount and whenever viewport changes to avoid auto-open on resize to mobile
  useEffect(() => {
    closeMenu('mount')
    const onResize = () => { setHasInteracted(false); closeMenu('resize') }
    const onOrient = () => { setHasInteracted(false); closeMenu('orientationchange') }
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onOrient as any)
    // Also close when crossing md breakpoint using matchMedia change events
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = () => {
      setBpKey(mq.matches ? 'desktop' : 'mobile')
      setHasInteracted(false)
      closeMenu('mq-change')
    }
    if (mq.addEventListener) mq.addEventListener('change', onMq)
    else if ((mq as any).addListener) (mq as any).addListener(onMq)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onOrient as any)
      if (mq.removeEventListener) mq.removeEventListener('change', onMq)
      else if ((mq as any).removeListener) (mq as any).removeListener(onMq)
    }
  }, [])

  // Close mobile menu on route changes to avoid lingering open state
  useEffect(() => {
    setHasInteracted(false)
    closeMenu('route-change: '+pathname)
  }, [pathname])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu('escape')
        setHasInteracted(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const headerHeight = scrolled ? 'h-[56px] md:h-[68px]' : 'h-[64px] md:h-[80px]'
  const isSheetOpen = open && hasInteracted
  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim().length === 0) return
    const q = encodeURIComponent(searchQuery.trim())
    if (typeof window !== 'undefined') {
      window.location.href = `https://www.google.com/search?q=site:${window.location.origin}+${q}`
    }
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 ${isSheetOpen ? 'bg-black' : 'bg-black/90'} backdrop-blur-md border-b border-white/10 shadow-sm`}>
      {/* Top info bar */}
      <div className="bg-transparent text-white text-xs">
        <div className="container flex items-center justify-between py-1.5">
          {/* Left: phone + email */}
          <div className="flex items-center gap-4">
            <a href="tel:+37120886650" className="inline-flex items-center gap-1 hover:text-brand-teal transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              <span className="hidden sm:inline">+371 20886650</span>
            </a>
            <a href="mailto:info@vestalux.lv" className="inline-flex items-center gap-1 hover:text-brand-teal transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
              <span className="hidden md:inline">info@vestalux.lv</span>
            </a>
          </div>
          
          {/* Right: CTA */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/37120886650"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-1 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 text-xs font-semibold transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.94 11.94 0 0012.01 0C5.39 0 .02 5.37.02 12c0 2.1.55 4.08 1.5 5.79L0 24l6.36-1.64A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.82c-1.84 0-3.55-.5-5.02-1.36l-.36-.21-3.77.97.99-3.68-.23-.38A9.77 9.77 0 012.2 12 9.8 9.8 0 1112 21.82zm5.62-7.37c-.31-.16-1.81-.89-2.09-.99-.28-.1-.49-.16-.7.16-.21.31-.8.99-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.45-1.53-.9-.8-1.51-1.78-1.69-2.08-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.51 1.11 2.97 1.27 3.18.16.21 2.19 3.34 5.3 4.69.74.32 1.32.5 1.77.64.74.23 1.41.2 1.94.12.59-.09 1.81-.74 2.07-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.21-.59-.37z"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="/kontakti" className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-xs font-semibold transition-colors">Bezmaksas konsultācija</a>
          </div>
        </div>
      </div>
      <div className="transition-all duration-300">
        <div
          className={`container flex items-center justify-between ${headerHeight} text-white`}
        >
          {/* Logo image */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="InterjeraRisinājumi">
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/xkvu4qxkvu4.png?updatedAt=1758266388697"
              alt="InterjeraRisinājumi logo"
              width={200}
              height={48}
              className="h-12 md:h-20 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
            <span className="sr-only">InterjeraRisinājumi</span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-3 md:gap-4 text-lg text-white font-semibold">
          {/* Produkts dropdown */}
          <div className="relative inline-block group">
            <button className="relative overflow-hidden px-4 py-2.5 rounded-xl inline-flex items-center gap-1 hover:text-brand-teal transition-all duration-500" aria-haspopup="true" aria-expanded="false">
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Produkti</span>
              <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/0 via-brand-teal/20 to-brand-teal/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
            </button>
            <div className="absolute left-0 top-full w-56 bg-white/95 backdrop-blur-lg border border-gray-100 rounded-xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 text-gray-800">
              <Link href="/logi" className="block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 rounded-lg mx-2">PVC logi</Link>
              <Link href="/zaluzijas" className="block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 rounded-lg mx-2">Žalūzijas</Link>
              <Link href="/piederumi" className="block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 rounded-lg mx-2">Piederumi</Link>
              <Link href="/bidamasistemas" className="block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 rounded-lg mx-2">Bīdāmās sistēmas</Link>
              <div className="my-2 mx-2 h-px bg-gray-100" aria-hidden="true"></div>
              <Link href="/iestiklot-lodziju" className="block px-4 py-3 rounded-lg mx-2 text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors duration-200">Vēlos iestiklot lodžiju</Link>
            </div>
          </div>
          {/* Pakalpojumi (direct link) */}
          <Link href="/pakalpojumi" className="relative overflow-hidden px-4 py-2.5 rounded-xl hover:text-brand-teal transition-all duration-500 group">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Pakalpojumi</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/0 via-brand-teal/20 to-brand-teal/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
          </Link>
          <Link href="/projekti" className="relative overflow-hidden px-4 py-2.5 rounded-xl hover:text-brand-teal transition-all duration-500 group">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Dzīvokļu projekti</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/0 via-brand-teal/20 to-brand-teal/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
          </Link>
          <Link href="/par-mums" className="relative overflow-hidden px-4 py-2.5 rounded-xl hover:text-brand-teal transition-all duration-500 group">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Par mums</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/0 via-brand-teal/20 to-brand-teal/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
          </Link>
          <Link href="/blogs-2" className="relative overflow-hidden px-4 py-2.5 rounded-xl hover:text-brand-teal transition-all duration-500 group">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 animate-teal-to-red motion-reduce:animate-none">Ieskaties</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/0 via-brand-teal/20 to-brand-teal/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
          </Link>
          <Link href="/kontakti" className="relative overflow-hidden px-4 py-2.5 rounded-xl hover:text-brand-teal transition-all duration-500 group">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Kontakti</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/0 via-brand-teal/20 to-brand-teal/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-xl"></div>
          </Link>
          </nav>
          {/* Right side actions */}
          <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setShowSearch(v => !v)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Meklēt"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>
            {showSearch && (
              <form onSubmit={onSearchSubmit} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-3 pr-2 py-1 shadow-sm">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  placeholder="Meklēt..."
                  className="outline-none text-sm text-gray-800 placeholder:text-gray-400 w-40"
                />
                <button type="submit" className="px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-gray-800">Meklēt</button>
              </form>
            )}
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-transparent rounded-full transition-all duration-300 text-white"
            aria-label="Atvērt izvēlni"
            aria-expanded={isSheetOpen}
            onClick={()=>{
              setHasInteracted(true)
              setOpen(prev=>{
                const next = !prev
                console.log('[HeaderMenu] toggle click', { from: prev, to: next })
                return next
              })
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span className="sr-only">Izvēlne</span>
          </button>

          {/* Cart */}
          <Link href="/grozs" className="relative group hidden md:flex text-white" aria-label="Grozs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 transition-colors duration-300 group-hover:text-brand-teal"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-teal text-white text-xs rounded-full w-5 h-5 grid place-items-center">{count}</span>
            )}
          </Link>
          </div>
        </div>
      </div>
    </header>
    
      {/* Floating quick actions that remain visible on scroll */}
      {showFloating && (
        <>
          {/* Desktop / Tablet floating block (centered top bar) */}
          <div className="hidden md:flex fixed top-2 left-0 right-0 z-[60] justify-center pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-4 h-12 px-5 rounded-full border border-gray-200 bg-white/95 backdrop-blur shadow-md">
              <button
                onClick={() => { if (typeof window !== 'undefined' && window.history.length > 1) window.history.back(); else window.location.href = '/zaluzijas'; }}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-brand-teal transition-colors"
                aria-label="Atpakaļ uz katalogu"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Atpakaļ uz katalogu</span>
              </button>
              <span className="w-px h-5 bg-gray-200" aria-hidden="true" />
              <Link href="/kontakti" className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-brand-teal transition-colors" aria-label="Sazināties">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                <span>Sazināties</span>
              </Link>
            </div>
          </div>

          {/* Mobile floating bar (bottom) */}
          <div className="md:hidden fixed inset-x-4 bottom-4 z-[60]">
            <div className="flex items-center justify-between gap-3 h-12 px-4 rounded-full border border-gray-200 bg-white/95 backdrop-blur shadow-md">
              <button
                onClick={() => { if (typeof window !== 'undefined' && window.history.length > 1) window.history.back(); else window.location.href = '/zaluzijas'; }}
                className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-800 hover:text-brand-teal transition-colors"
                aria-label="Atpakaļ"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Atpakaļ</span>
              </button>
              <span className="w-px h-5 bg-gray-200" aria-hidden="true" />
              <Link href="/kontakti" className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-800 hover:text-brand-teal transition-colors" aria-label="Kontakti">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                <span>Kontakti</span>
              </Link>
            </div>
          </div>
        </>
      )}
      {/* Overlay removed to avoid blacked-out pages on mobile */}
      
      {/* Mobile animated menu (outside header, positioned under header) */}
      {isSheetOpen && (
        <div
          key={bpKey}
          className={`fixed left-0 right-0 ${scrolled ? 'top-[48px] md:top-[56px]' : 'top-[52px] md:top-[64px]'} bg-white rounded-b-3xl shadow-2xl z-50 md:hidden transform transition-all duration-300 ease-out translate-y-0 overflow-y-auto ${scrolled ? 'max-h-[calc(100vh-48px)] md:max-h-[calc(100vh-56px)]' : 'max-h-[calc(100vh-52px)] md:max-h-[calc(100vh-64px)]'}`}
        >
        {/* Menu header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></div>
            <span className="font-semibold text-lg text-gray-900">Izvēlne</span>
          </div>
          <button 
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <span className="text-sm font-medium">Aizvērt</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Menu items */}
        <nav className="p-6 space-y-2">
          {/* Produkts with collapsible sublinks */}
          <button
            onClick={() => setOpenProducts(v => !v)}
            className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group border-none"
            aria-expanded={openProducts}
          >
            <span className="text-lg font-medium group-hover:text-brand-teal">Produkti</span>
            <svg className={`w-5 h-5 transition-transform duration-300 ${openProducts ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {openProducts && (
            <div className="pl-4 space-y-1">
              <Link href="/logi" onClick={()=>{ setOpen(false); setHasInteracted(false); }} className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-teal/10 transition-all duration-300">
                <span>PVC logi</span>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </Link>
              <Link href="/zaluzijas" onClick={()=>{ setOpen(false); setHasInteracted(false); }} className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-teal/10 transition-all duration-300">
                <span>Žalūzijas</span>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </Link>
              <Link href="/piederumi" onClick={()=>{ setOpen(false); setHasInteracted(false); }} className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-teal/10 transition-all duration-300">
                <span>Piederumi</span>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </Link>
              <Link href="/bidamasistemas" onClick={()=>{ setOpen(false); setHasInteracted(false); }} className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-teal/10 transition-all duration-300">
                <span>Bīdāmās sistēmas</span>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </Link>
            </div>
          )}

          {/* Pakalpojumi (direct link on mobile) */}
          <Link 
            href="/pakalpojumi" 
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group"
          >
            <span className="text-lg font-medium group-hover:text-brand-teal">Pakalpojumi</span>
            <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-brand-teal transition-colors duration-300"></div>
          </Link>

          <Link 
            href="/projekti" 
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group"
          >
            <span className="text-lg font-medium group-hover:text-brand-teal">Dzīvokļu projekti</span>
            <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-brand-teal transition-colors duration-300"></div>
          </Link>

          <Link 
            href="/par-mums" 
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group"
          >
            <span className="text-lg font-medium group-hover:text-brand-teal">Par mums</span>
            <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-brand-teal transition-colors duration-300"></div>
          </Link>

          <Link 
            href="/blogs-2" 
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group"
          >
            <span className="text-lg font-medium group-hover:text-brand-teal animate-teal-to-red motion-reduce:animate-none">Ieskaties</span>
            <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-brand-teal transition-colors duration-300"></div>
          </Link>

          <Link 
            href="/kontakti" 
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group"
          >
            <span className="text-lg font-medium group-hover:text-brand-teal">Kontakti</span>
            <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-brand-teal transition-colors duration-300"></div>
          </Link>
        </nav>
      </div>
      )}
    </>
  )
}
