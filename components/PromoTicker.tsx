'use client'

import { useEffect, useState } from 'react'

/**
 * PromoTicker — bezgalīga ritoša paziņojumu josla (seamless marquee) lapas pašā augšā.
 *
 * Tehnika: .vx-ticker-track satur DIVAS identiskas .vx-ticker-group kopijas
 * (otrā ar aria-hidden), un track animējas no translateX(0) līdz translateX(-50%).
 * Kad pirmā kopija pilnībā aizslīdējusi, otrā ir tieši tās vietā — šuve nav redzama.
 *
 * Sinhronizācija ar galveni: VISU vertikālo kustību vada viens CSS mainīgais
 * --ticker-h (30px / 26px mobilajā, 0 kad josla paslēpta). Tas ir reģistrēts ar
 * @property kā <length> un tam ir transition uz :root, tāpēc joslas pozīcija
 * (top: calc(var(--ticker-h) - augstums)), galvenes top un satura atkāpe visi
 * seko vienai un tai pašai animētajai vērtībai — kustība ir pilnīgi sinhrona,
 * bez spraugām un bez joslas pavīdēšanas.
 */

// Paziņojuma teksts — atkārtojas grupā vairākas reizes, lai grupa būtu platāka par ekrānu
const MESSAGE = 'AKCIJA! — 15% VISĀM ŽALŪZIJĀM LĪDZ VASARAS BEIGĀM!'
const REPEATS = 4

// Histerēze, lai pie sliekšņa robežas nekas neraustītos:
// paslēpjas tikai zem 40px, atgriežas tikai virs 10px
export const TICKER_HIDE_Y = 40
export const TICKER_SHOW_Y = 10

function TickerGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="vx-ticker-group" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span className="vx-ticker-item" key={i}>{MESSAGE}</span>
      ))}
    </div>
  )
}

export default function PromoTicker() {
  const [closed, setClosed] = useState(false)

  // --ticker-h reģistrācija kā animējams <length>. CSS @property rīkojums
  // body iekšienē ievietotā <style> tagā Chrome ne vienmēr nostrādā, tāpēc
  // reģistrējam arī ar JS; atkārtota reģistrācija met kļūdu — to apklusinām.
  useEffect(() => {
    try {
      if (typeof CSS !== 'undefined' && 'registerProperty' in CSS) {
        CSS.registerProperty({ name: '--ticker-h', syntax: '<length>', inherits: true, initialValue: '0px' })
      }
    } catch {
      /* jau reģistrēts */
    }
  }, [])
  // Ritinot uz leju josla paslēpjas (tāpat kā galvenes kontaktu rinda)
  const [hiddenByScroll, setHiddenByScroll] = useState(false)

  useEffect(() => {
    let raf = 0
    const calc = () => {
      const y = window.scrollY
      setHiddenByScroll(prev => (y > TICKER_HIDE_Y ? true : y < TICKER_SHOW_Y ? false : prev))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(calc)
    }
    calc()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // --ticker-h nosaka joslas, galvenes un satura atkāpes pozīciju: 0, kad josla
  // nav redzama. removeProperty atjauno stilu lapā definēto responsīvo vērtību
  // (30px / 26px). Vērtības maiņa animējas ar :root transition (skat. CSS).
  useEffect(() => {
    const root = document.documentElement.style
    if (closed || hiddenByScroll) root.setProperty('--ticker-h', '0px')
    else root.removeProperty('--ticker-h')
  }, [closed, hiddenByScroll])

  // Pēc aizvēršanas komponente paliek DOM (lai stili un mainīgais neizzūd un
  // aizvēršanās animējas gludi), bet ir neredzama un neinteraktīva.
  return (
    <div
      className={`vx-ticker${closed ? ' vx-ticker--closed' : ''}`}
      role="region"
      aria-label="Akcijas paziņojums"
      aria-hidden={closed || undefined}
    >
      <div className="vx-ticker-track">
        <TickerGroup />
        <TickerGroup hidden />
      </div>
      <button
        type="button"
        className="vx-ticker-close"
        aria-label="Aizvērt paziņojumu"
        onClick={() => setClosed(true)}
        tabIndex={closed ? -1 : undefined}
      >
        &times;
      </button>

      {/* dangerouslySetInnerHTML novērš servera/klienta teksta escapēšanas atšķirības style tagā */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Reģistrēts kā <length>, lai vērtību var animēt ar transition —
           tā visa no --ticker-h atkarīgā ģeometrija kustas vienā taktī */
        @property --ticker-h {
          syntax: '<length>';
          inherits: true;
          initial-value: 0px;
        }

        :root {
          --ticker-h: 30px;
          transition: --ticker-h .3s ease;
        }

        .vx-ticker {
          position: fixed;
          /* Pozīciju vada tas pats mainīgais: 30px → top 0; 0px → top -30px (aiz ekrāna) */
          top: calc(var(--ticker-h, 0px) - 30px);
          left: 0;
          right: 0;
          z-index: 70;              /* virs galvenes (z-50) un tās meklētāja (z-60) */
          height: 30px;             /* fiksēts, lai slēpjoties josla slīd, nevis saplok */
          background: #E00000;
          overflow: hidden;
          white-space: nowrap;
        }

        /* Aizvērta josla: paliek DOM stilu dēļ, bet neredzama un bez animācijas.
           visibility nomainās tikai pēc tam, kad josla aizslīdējusi (0.3s aizture). */
        .vx-ticker--closed {
          visibility: hidden;
          transition: visibility 0s .3s;
        }
        .vx-ticker--closed .vx-ticker-track { animation-play-state: paused; }

        /* Divas identiskas grupas blakus; kopējais platums = 2x grupa,
           tāpēc -50% nobīde ir tieši viena grupa = ideāls cikls bez lēciena */
        .vx-ticker-track {
          display: flex;
          width: max-content;
          height: 100%;
          align-items: center;
          animation: vx-ticker-scroll 40s linear infinite;
        }

        .vx-ticker-group {
          display: flex;
          align-items: center;
          gap: 60px;
          padding-right: 60px;      /* atstarpe starp grupu beigām un nākamās sākumu */
        }

        .vx-ticker-item {
          color: #FFFFFF;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Aizvēršanas poga — ar tādu pašu sarkano fonu, teksts aizslīd zem tās */
        .vx-ticker-close {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 34px;
          background: #E00000;
          color: #FFFFFF;
          border: 0;
          font-size: 16px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes vx-ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Mobilais: zemāka josla, mazāks teksts, ātrāks cikls */
        @media (max-width: 767px) {
          :root { --ticker-h: 26px; }
          .vx-ticker {
            top: calc(var(--ticker-h, 0px) - 26px);
            height: 26px;
          }
          .vx-ticker-item { font-size: 11px; }
          .vx-ticker-track { animation-duration: 25s; }
        }

        /* Samazinātas kustības režīms: bez animācijas, viens statisks centrēts paziņojums */
        @media (prefers-reduced-motion: reduce) {
          :root { transition: none; }
          .vx-ticker-track {
            animation: none;
            width: 100%;
            justify-content: center;
          }
          .vx-ticker-group[aria-hidden],
          .vx-ticker-item:nth-child(n+2) { display: none; }
        }
      ` }} />
    </div>
  )
}
