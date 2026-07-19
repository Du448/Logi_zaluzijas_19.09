"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import ShareButton from '@/components/ShareButton'

/**
 * Galvenes navigācijas saite ar aktīvās lapas indikatoru.
 * Pasvītrojums izaug no centra: uz hover - vienmēr, aktīvajai lapai - paliek redzams.
 */
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }){
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`group relative px-4 py-2.5 rounded-xl transition-colors duration-300 hover:text-amber-300 ${active ? 'text-amber-300' : 'text-white'}`}
    >
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.07]" aria-hidden="true" />
      <span
        className={`pointer-events-none absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-brand-teal transition-all duration-500 ease-out ${active ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-100'}`}
        aria-hidden="true"
      />
    </Link>
  )
}

export default function Header(){
  const { count } = useCart()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [openProducts, setOpenProducts] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const showFloating = false
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const headerRef = useRef<HTMLElement | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const searchPopoverRef = useRef<HTMLDivElement | null>(null)
  const searchToggleRef = useRef<HTMLButtonElement | null>(null)
  const pathname = usePathname()
  const [bpKey, setBpKey] = useState<'mobile'|'desktop'>(()=>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(min-width: 1024px)').matches ? 'desktop' : 'mobile'
  )
  const [hasInteracted, setHasInteracted] = useState(false)

  function openMenu(reason: string){
    setOpen(true)
  }
  function closeMenu(reason: string){
    setOpen(false)
  }

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
      const isLg = window.matchMedia('(min-width: 1024px)').matches
      const threshold = vh * (isLg ? 1 : 0.7)
      const y = window.scrollY
      const next = Math.max(0, Math.min(1, 1 - y / threshold))
      setOpacity(next)
      // Histerēze (tā pati kā PromoTicker): sakļaujas tikai zem 40px,
      // atgriežas tikai virs 10px - pie sliekšņa nekas neraustās
      setScrolled(prev => (y > 40 ? true : y < 10 ? false : prev))
      // Lasīšanas progress galvenes apakšmalā
      const scrollable = document.documentElement.scrollHeight - vh
      setProgress(scrollable > 0 ? Math.max(0, Math.min(1, y / scrollable)) : 0)
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
    const mq = window.matchMedia('(min-width: 1024px)')
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

  // Kursora "spotlight": pozīciju rakstām tieši CSS mainīgajos, lai izvairītos
  // no re-render katrā mousemove. Tikai precīzam kursoram (ne skārienekrāniem).
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
      el.style.setProperty('--spot', '1')
    }
    const onLeave = () => el.style.setProperty('--spot', '0')
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // ⌘K / Ctrl+K atver meklēšanu no jebkuras vietas lapā
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setShowSearch(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

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

  // Mini versija ritinot: zemāka josla un mazāks logo
  const headerHeight = scrolled ? 'h-[48px] md:h-[56px]' : 'h-[64px] md:h-[80px]'
  const logoHeight = scrolled ? 'h-9 md:h-12' : 'h-12 md:h-20'
  const isSheetOpen = open && hasInteracted
  const isActive = (href: string) => pathname === href || !!pathname?.startsWith(`${href}/`)
  const productPaths = ['/logi', '/zaluzijas', '/piederumi', '/bidamasistemas', '/iestiklot-lodziju']
  const productsActive = productPaths.some(isActive)
  // Divi toņa stāvokļi: virs hero - tikai mīksts aizsegs no augšas (attēls paliek
  // redzams), ritinot - sablīvēts tumša stikla slānis ar matētu apakšmalu.
  const headerAmbientClass = isSheetOpen
    ? 'bg-slate-950/95 backdrop-blur-2xl border-white/10 shadow-[0_20px_60px_rgba(2,6,23,0.55)]'
    : scrolled
    ? 'bg-slate-950/70 backdrop-blur-2xl backdrop-saturate-150 border-white/10 shadow-[0_18px_55px_rgba(2,6,23,0.45)]'
    : 'bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/40 backdrop-blur-[3px] border-transparent shadow-none'
  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim().length === 0) return
    const q = encodeURIComponent(searchQuery.trim())
    router.push(`/meklesana?q=${q}`)
    setShowSearch(false)
  };

  useEffect(() => {
    if (showSearch) {
      const timer = typeof window !== 'undefined' ? window.setTimeout(() => {
        searchInputRef.current?.focus()
      }, 10) : undefined
      return () => {
        if (typeof window !== 'undefined' && timer) {
          window.clearTimeout(timer)
        }
      }
    }
  }, [showSearch])

  useEffect(() => {
    if (!showSearch) return
    const handleClick = (event: MouseEvent) => {
      if (!searchPopoverRef.current) return
      const node = event.target as Node
      if (
        !searchPopoverRef.current.contains(node) &&
        !(searchToggleRef.current && searchToggleRef.current.contains(node))
      ) {
        setShowSearch(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowSearch(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [showSearch])

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed top-[var(--ticker-h,0px)] left-0 right-0 z-50 transition-[background,box-shadow,border-color,backdrop-filter] duration-500 border-b ${headerAmbientClass}`}
    >
      {/* Kursora spotlight - silts atspīdums logo tonī, seko pelei */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[var(--spot,0)] transition-opacity duration-500 motion-reduce:hidden"
        style={{
          background:
            'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(251,191,36,0.16), rgba(0,166,166,0.08) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Matēta apakšmala: no logo dzintara uz zīmola tirkīzu */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />
      {/* Lasīšanas progress - plāna līnija galvenes apakšmalā */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden" aria-hidden="true">
        <div
          className="h-full origin-left bg-gradient-to-r from-amber-400 via-amber-300 to-brand-teal transition-opacity duration-500"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
        />
      </div>

      {/* Top info bar - ritinot uz leju saplok */}
      <div className={`relative bg-white/5 text-white text-xs overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="container flex items-center justify-between py-1.5">
          {/* Left: phone + email */}
          <div className="flex items-center gap-4">
            <a href="tel:+37120886650" className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              <span className="hidden sm:inline">+371 20886650</span>
            </a>
            <a href="mailto:info@vestalux.lv" className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
              <span className="hidden md:inline">info@vestalux.lv</span>
            </a>
          </div>
          
          {/* Right: CTA */}
          <div className="flex items-center gap-2">
            <ShareButton />
          </div>
        </div>
      </div>
      <div className="relative transition-all duration-300">
        <div
          className={`container flex items-center justify-between transition-all duration-300 ${headerHeight} text-white`}
        >
          {/* Logo image */}
          <Link href="/" className="relative flex items-center gap-3 group" aria-label="InterjeraRisinājumi">
            {/* Silts oreols aiz logo - parādās uz hover */}
            <span
              className="pointer-events-none absolute -inset-3 rounded-full bg-amber-400/0 blur-xl transition-colors duration-500 group-hover:bg-amber-400/20"
              aria-hidden="true"
            />
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/download%20(19)%20-%20Edited%20-%20Edited.png?updatedAt=1760521246953"
              alt="InterjeraRisinājumi logo"
              width={200}
              height={48}
              className={`relative ${logoHeight} w-auto transition-all duration-300 group-hover:scale-[1.02]`}
              priority
            />
            <span className="sr-only">InterjeraRisinājumi</span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-3 lg:gap-4 text-lg text-white font-semibold">
          {/* Produkts dropdown */}
          <div className="relative inline-block group">
            <button className={`relative px-4 py-2.5 rounded-xl inline-flex items-center gap-1 transition-colors duration-300 hover:text-amber-300 ${productsActive ? 'text-amber-300' : 'text-white'}`} aria-haspopup="true" aria-expanded="false">
              <span className="relative z-10">Produkti</span>
              <svg className="relative z-10 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.07]" aria-hidden="true" />
              <span
                className={`pointer-events-none absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-brand-teal transition-all duration-500 ease-out ${productsActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-100'}`}
                aria-hidden="true"
              />
            </button>
            <div className="absolute left-0 top-full w-56 origin-top rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-[0_24px_60px_rgba(2,6,23,0.55)] py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-3 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 text-slate-100">
              <Link href="/logi" className="block px-4 py-3 rounded-lg mx-2 hover:bg-white/10 hover:text-amber-300 transition-colors duration-200">
                <span className="inline-flex items-center gap-2">
                  PVC logi
                  <span className="relative inline-flex items-center justify-center w-8 h-8">
                    <video
                      className="w-8 h-8 rounded-md ring-1 ring-sky-400/30 object-cover"
                      src="https://ik.imagekit.io/vbvwdejj5/window.mp4?updatedAt=1760616065516"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>
              <Link href="/zaluzijas" className="block px-4 py-3 rounded-lg mx-2 hover:bg-white/10 hover:text-amber-300 transition-colors duration-200">
                <span className="inline-flex items-center gap-2">
                  Žalūzijas
                  <span className="relative inline-flex items-center justify-center w-8 h-8">
                    <video
                      className="w-8 h-8 rounded-md ring-1 ring-sky-400/30 object-cover"
                      src="https://ik.imagekit.io/vbvwdejj5/blinds.mp4?updatedAt=1760614846411"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>
              <Link
                href="/zaluzijas/mikstie-logi"
                className="block px-4 py-2.5 rounded-lg mx-3 text-sm text-slate-400 hover:text-amber-300 hover:bg-white/10 transition-colors duration-200"
              >
                Mīkstie logi
              </Link>
              <Link
                href="/zaluzijas/moskitu"
                className="block px-4 py-2.5 rounded-lg mx-3 text-sm text-slate-400 hover:text-amber-300 hover:bg-white/10 transition-colors duration-200"
              >
                Moskītu tīkli
              </Link>
              <Link href="/piederumi" className="block px-4 py-3 rounded-lg mx-2 hover:bg-white/10 hover:text-amber-300 transition-colors duration-200">Piederumi</Link>
              <Link href="/bidamasistemas" className="block px-4 py-3 rounded-lg mx-2 hover:bg-white/10 hover:text-amber-300 transition-colors duration-200">Bīdāmās sistēmas</Link>
              <Link href="/iestiklot-lodziju" className="block px-4 py-3 rounded-lg mx-2 hover:bg-white/10 hover:text-amber-300 transition-colors duration-200">Iestiklot lodžiju</Link>
              <div className="my-2 mx-2 h-px bg-white/10" aria-hidden="true"></div>
            </div>
          </div>
          <NavLink href="/pakalpojumi" label="Pakalpojumi" active={isActive('/pakalpojumi')} />
          <NavLink href="/projekti" label="Dzīvokļu sērijas" active={isActive('/projekti')} />
          <NavLink href="/blogs-2" label="Ieskaties" active={isActive('/blogs-2')} />
          <NavLink href="/kontakti" label="Kontakti" active={isActive('/kontakti')} />
          </nav>
          {/* Right side actions */}
          <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden lg:flex items-center gap-2">
            <button
              ref={searchToggleRef}
              onClick={() => setShowSearch(v => !v)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 transition-colors duration-300 hover:border-amber-300/40 hover:bg-white/10"
              aria-label="Meklēt"
              aria-expanded={showSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-amber-300"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
              <kbd className="hidden xl:inline rounded border border-white/20 px-1.5 py-0.5 text-[10px] font-sans font-medium text-white/60">⌘K</kbd>
            </button>
            {showSearch && (
              <div
                ref={searchPopoverRef}
                className="absolute right-0 top-12 flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-[0_24px_60px_rgba(2,6,23,0.55)] backdrop-blur-2xl"
              >
                <form onSubmit={onSearchSubmit} className="flex items-center gap-2">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    placeholder="Meklēt produktus..."
                    className="w-56 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/25"
                  />
                  <button type="submit" className="rounded-xl bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-amber-300">
                    Meklēt
                  </button>
                </form>
                <p className="text-[11px] text-white/40">
                  Padoms: atver ar <kbd className="rounded border border-white/20 px-1 py-0.5 font-sans">⌘K</kbd> · aizver ar <kbd className="rounded border border-white/20 px-1 py-0.5 font-sans">Esc</kbd>
                </p>
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-transparent rounded-full transition-all duration-300 text-white"
            aria-label="Atvērt izvēlni"
            aria-expanded={isSheetOpen}
            onClick={()=>{
              setHasInteracted(true)
              setOpen(prev=>!prev)
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
          <Link href="/grozs" className="relative group hidden lg:flex text-white" aria-label="Grozs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 transition-all duration-300 group-hover:text-amber-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
              <span
                key={count}
                className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-amber-400 text-xs font-semibold text-slate-950 ring-2 ring-slate-950/60 motion-safe:animate-in motion-safe:zoom-in-50"
              >
                {count}
              </span>
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
          className={`fixed left-0 right-0 ${scrolled ? 'top-[calc(48px+var(--ticker-h,0px))] lg:top-[calc(56px+var(--ticker-h,0px))]' : 'top-[calc(52px+var(--ticker-h,0px))] lg:top-[calc(64px+var(--ticker-h,0px))]'} bg-white rounded-b-3xl shadow-2xl z-50 lg:hidden transform transition-all duration-300 ease-out translate-y-0 overflow-y-auto ${scrolled ? 'max-h-[calc(100vh-48px)] lg:max-h-[calc(100vh-56px)]' : 'max-h-[calc(100vh-52px)] lg:max-h-[calc(100vh-64px)]'}`}
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
              <Link
                href="/zaluzijas/mikstie-logi"
                onClick={()=>{ setOpen(false); setHasInteracted(false); }}
                className="flex items-center justify-between p-3 rounded-xl text-sm text-gray-600 hover:text-brand-teal hover:bg-brand-teal/10 transition-all duration-300"
              >
                <span>Mīkstie logi</span>
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
              </Link>
              <Link
                href="/zaluzijas/moskitu"
                onClick={()=>{ setOpen(false); setHasInteracted(false); }}
                className="flex items-center justify-between p-3 rounded-xl text-sm text-gray-600 hover:text-brand-teal hover:bg-brand-teal/10 transition-all duration-300"
              >
                <span>Moskītu tīkli</span>
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
              </Link>
              <Link href="/piederumi" onClick={()=>{ setOpen(false); setHasInteracted(false); }} className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-teal/10 transition-all duration-300">
                <span>Piederumi</span>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </Link>
              <Link href="/bidamasistemas" onClick={()=>{ setOpen(false); setHasInteracted(false); }} className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-teal/10 transition-all duration-300">
                <span>Bīdāmās sistēmas</span>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </Link>
              {/* Highlighted mobile link */}
              <Link href="/iestiklot-lodziju" onClick={()=>{ setOpen(false); setHasInteracted(false); }} className="flex items-center justify-between p-3 rounded-xl text-slate-900 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300">
                Iestiklot lodžiju
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
            href="/blogs-2" 
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group"
          >
            <span className="text-lg font-medium text-slate-900 group-hover:text-brand-teal">Ieskaties</span>
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

          {/* Call action */}
          <a 
            href="tel:+37120886650"
            onClick={() => { setOpen(false); setHasInteracted(false); }}
            className="mt-2 inline-flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Zvanīt: 20886650
          </a>
        </nav>
      </div>
      )}
    </>
  )
}

