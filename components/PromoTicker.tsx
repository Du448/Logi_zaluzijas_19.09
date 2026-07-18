'use client'

import { useEffect, useState } from 'react'

/**
 * PromoTicker — bezgalīga ritoša paziņojumu josla (seamless marquee) lapas pašā augšā.
 *
 * Tehnika: .vx-ticker-track satur DIVAS identiskas .vx-ticker-group kopijas
 * (otrā ar aria-hidden), un track animējas no translateX(0) līdz translateX(-50%).
 * Kad pirmā kopija pilnībā aizslīdējusi, otrā ir tieši tās vietā — šuve nav redzama.
 *
 * Josla ir fixed top-0 VIRS galvenes; CSS mainīgais --ticker-h (30px / 26px mobilajā)
 * nobīda fiksēto galveni un satura atkāpi uz leju. Aizverot joslu, mainīgais
 * tiek nolikts uz 0px un viss izkārtojums atgriežas sākotnējā stāvoklī.
 */

// Paziņojuma teksts — atkārtojas grupā vairākas reizes, lai grupa būtu platāka par ekrānu
const MESSAGE = 'AKCIJA! — 15% VISĀM ŽALŪZIJĀM LĪDZ VASARAS BEIGĀM!'
const REPEATS = 4

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
  // Ritinot uz leju josla paslēpjas (tāpat kā galvenes kontaktu rinda)
  const [hiddenByScroll, setHiddenByScroll] = useState(false)

  useEffect(() => {
    let raf = 0
    const calc = () => setHiddenByScroll(window.scrollY > 8) // tas pats slieksnis kā Header "scrolled"
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

  // --ticker-h nosaka galvenes nobīdi un satura atkāpi: 0, kad josla nav redzama.
  // removeProperty atjauno stilu lapā definēto responsīvo vērtību (30px / 26px).
  useEffect(() => {
    const root = document.documentElement.style
    if (closed || hiddenByScroll) root.setProperty('--ticker-h', '0px')
    else root.removeProperty('--ticker-h')
  }, [closed, hiddenByScroll])

  const handleClose = () => setClosed(true)

  if (closed) return null

  return (
    <div
      className={`vx-ticker${hiddenByScroll ? ' vx-ticker--hidden' : ''}`}
      role="region"
      aria-label="Akcijas paziņojums"
    >
      <div className="vx-ticker-track">
        <TickerGroup />
        <TickerGroup hidden />
      </div>
      <button
        type="button"
        className="vx-ticker-close"
        aria-label="Aizvērt paziņojumu"
        onClick={handleClose}
      >
        &times;
      </button>

      {/* dangerouslySetInnerHTML novērš servera/klienta teksta escapēšanas atšķirības style tagā */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Joslas augstums kā globāls mainīgais — to izmanto arī Header un main atkāpe */
        :root { --ticker-h: 30px; }

        .vx-ticker {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 70;              /* virs galvenes (z-50) un tās meklētāja (z-60) */
          height: 30px;             /* fiksēts, lai slēpjoties josla slīd, nevis saplok */
          background: #E00000;
          overflow: hidden;
          white-space: nowrap;
          transition: transform .3s ease;
        }

        /* Ritinot uz leju josla aizslīd aiz ekrāna augšmalas */
        .vx-ticker--hidden { transform: translateY(-100%); }

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
          .vx-ticker { height: 26px; }
          .vx-ticker-item { font-size: 11px; }
          .vx-ticker-track { animation-duration: 25s; }
        }

        /* Samazinātas kustības režīms: bez animācijas, viens statisks centrēts paziņojums */
        @media (prefers-reduced-motion: reduce) {
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
