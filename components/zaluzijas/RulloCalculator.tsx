"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const APP_VERSION = "2.8"

const MIN_WIDTH_MM = 300
const MAX_WIDTH_MM = 2200
const MIN_HEIGHT_MM = 300
const MAX_HEIGHT_MM = 3000

const MATERIAL_BLACKOUT_INFO: Record<string, string> = {
  "BLACK OUT": "(100%)",
  "EASTER": "(60%)",
  "FLOWER": "(62%)",
  "FLOWER (LT)": "(62%)",
  "LUNA": "(62%)",
  "NEUTRAL": "(60%)",
  "VAN GOGH": "(60–68%)",
  "WATER": "(68%)",
}

type PriceTable = Record<string, Record<string, number>>

const TM_PRICE_DATA: PriceTable = {
  NEUTRAL: {
    "VARIO 13 Kasete (balta)": 23,
    "VARIO 13 Kasete (krāsaina)": 26,
    "VARIO 17 Kasete (balts)": 28,
    "VARIO 17 Kasete (krāsaina)": 30,
    "VARIO Uprofils Kasete (balts)": 29,
    "VARIO Uprofils Kasete (krāsains)": 31,
  },
  EASTER: {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  "VAN GOGH": {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  WATER: {
    "VARIO 13 Kasete (balta)": 24,
    "VARIO 13 Kasete (krāsaina)": 27,
    "VARIO 17 Kasete (balts)": 29,
    "VARIO 17 Kasete (krāsaina)": 31,
    "VARIO Uprofils Kasete (balts)": 30,
    "VARIO Uprofils Kasete (krāsains)": 32,
  },
  FLOWER: {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  LUNA: {
    "VARIO 13 Kasete (balta)": 24,
    "VARIO 13 Kasete (krāsaina)": 27,
    "VARIO 17 Kasete (balts)": 29,
    "VARIO 17 Kasete (krāsaina)": 31,
    "VARIO Uprofils Kasete (balts)": 30,
    "VARIO Uprofils Kasete (krāsains)": 32,
  },
  TOPAZ: {
    "VARIO 13 Kasete (balta)": 24,
    "VARIO 13 Kasete (krāsaina)": 27,
    "VARIO 17 Kasete (balts)": 29,
    "VARIO 17 Kasete (krāsaina)": 31,
    "VARIO Uprofils Kasete (balts)": 30,
    "VARIO Uprofils Kasete (krāsains)": 32,
  },
  ARABESKA: {
    "VARIO 13 Kasete (balta)": 24,
    "VARIO 13 Kasete (krāsaina)": 27,
    "VARIO 17 Kasete (balts)": 29,
    "VARIO 17 Kasete (krāsaina)": 31,
    "VARIO Uprofils Kasete (balts)": 30,
    "VARIO Uprofils Kasete (krāsains)": 32,
  },
  JASPER: {
    "VARIO 13 Kasete (balta)": 24,
    "VARIO 13 Kasete (krāsaina)": 27,
    "VARIO 17 Kasete (balts)": 29,
    "VARIO 17 Kasete (krāsaina)": 31,
    "VARIO Uprofils Kasete (balts)": 30,
    "VARIO Uprofils Kasete (krāsains)": 32,
  },
  TALIA: {
    "VARIO 13 Kasete (balta)": 24,
    "VARIO 13 Kasete (krāsaina)": 27,
    "VARIO 17 Kasete (balts)": 29,
    "VARIO 17 Kasete (krāsaina)": 31,
    "VARIO Uprofils Kasete (balts)": 30,
    "VARIO Uprofils Kasete (krāsains)": 32,
  },
  "FLOWER (LT)": {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  CHAD: {
    "VARIO 13 Kasete (balta)": 26,
    "VARIO 13 Kasete (krāsaina)": 29,
    "VARIO 17 Kasete (balts)": 31,
    "VARIO 17 Kasete (krāsaina)": 33,
    "VARIO Uprofils Kasete (balts)": 32,
    "VARIO Uprofils Kasete (krāsains)": 34,
  },
  NATURAL: {
    "VARIO 13 Kasete (balta)": 31,
    "VARIO 13 Kasete (krāsaina)": 34,
    "VARIO 17 Kasete (balts)": 36,
    "VARIO 17 Kasete (krāsaina)": 38,
    "VARIO Uprofils Kasete (balts)": 37,
    "VARIO Uprofils Kasete (krāsains)": 39,
  },
  ROYAL: {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  "SEVILA THERMO": {
    "VARIO 13 Kasete (balta)": 32,
    "VARIO 13 Kasete (krāsaina)": 35,
    "VARIO 17 Kasete (balts)": 37,
    "VARIO 17 Kasete (krāsaina)": 39,
    "VARIO Uprofils Kasete (balts)": 38,
    "VARIO Uprofils Kasete (krāsains)": 40,
  },
  "BLACK OUT": {
    "VARIO 13 Kasete (balta)": 26,
    "VARIO 13 Kasete (krāsaina)": 29,
    "VARIO 17 Kasete (balts)": 31,
    "VARIO 17 Kasete (krāsaina)": 33,
    "VARIO Uprofils Kasete (balts)": 32,
    "VARIO Uprofils Kasete (krāsains)": 34,
  },
  "BLACK OUT SILVER": {
    "VARIO 13 Kasete (balta)": 27,
    "VARIO 13 Kasete (krāsaina)": 30,
    "VARIO 17 Kasete (balts)": 32,
    "VARIO 17 Kasete (krāsaina)": 34,
    "VARIO Uprofils Kasete (balts)": 33,
    "VARIO Uprofils Kasete (krāsains)": 35,
  },
  "BMS Melange Silver": {
    "VARIO 13 Kasete (balta)": 27,
    "VARIO 13 Kasete (krāsaina)": 30,
    "VARIO 17 Kasete (balts)": 32,
    "VARIO 17 Kasete (krāsaina)": 34,
    "VARIO Uprofils Kasete (balts)": 33,
    "VARIO Uprofils Kasete (krāsains)": 35,
  },
  METALIC: {
    "VARIO 13 Kasete (balta)": 27,
    "VARIO 13 Kasete (krāsaina)": 30,
    "VARIO 17 Kasete (balts)": 32,
    "VARIO 17 Kasete (krāsaina)": 34,
    "VARIO Uprofils Kasete (balts)": 33,
    "VARIO Uprofils Kasete (krāsains)": 35,
  },
}

type Constraint = {
  maxWidth: number
  maxHeight: number
}

const SYSTEM_CONSTRAINTS_RULLO: Record<string, Constraint> = {
  "VARIO 13 Kasete (balta)": { maxWidth: 1.5, maxHeight: 1.3 },
  "VARIO 13 Kasete (krāsaina)": { maxWidth: 1.5, maxHeight: 1.3 },
  "VARIO 17 Kasete (balts)": { maxWidth: 1.6, maxHeight: 2 },
  "VARIO 17 Kasete (krāsaina)": { maxWidth: 1.6, maxHeight: 2 },
  "VARIO Uprofils Kasete (balts)": { maxWidth: 1.6, maxHeight: 2 },
  "VARIO Uprofils Kasete (krāsains)": { maxWidth: 1.6, maxHeight: 2 },
}

type CalculationResult = {
  price: string
  isValid: boolean
}

const numberFormatter = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getAvailableSystems(material: string, widthMm: number, heightMm: number) {
  const systems = TM_PRICE_DATA[material]
  if (!systems) return []

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000

  return Object.keys(systems).filter((system) => {
    const constraint = SYSTEM_CONSTRAINTS_RULLO[system]
    if (!constraint) return false
    return widthM <= constraint.maxWidth && heightM <= constraint.maxHeight
  })
}

function calculatePrice(
  material: string,
  system: string,
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): CalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false }
  }

  const basePrice = TM_PRICE_DATA[material]?.[system]
  if (!basePrice) {
    return { price: "0,00", isValid: false }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000

  const chargeableWidth = Math.max(widthM, 0.5)
  let cost = chargeableWidth * basePrice

  if (heightM > 2) {
    cost *= 1.5
  } else if (heightM > 1.5) {
    cost *= 1.2
  }

  let finalCost = cost * 2.5
  finalCost *= 1.21

  if (includeInstallation) {
    finalCost += 20
  }

  const rounded = Math.round(finalCost)

  return { price: numberFormatter.format(rounded), isValid: true }
}

export default function RulloCalculator() {
  const materialOptions = useMemo(() => Object.keys(TM_PRICE_DATA).sort(), [])
  const [material, setMaterial] = useState(materialOptions[0] ?? "")
  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState(1000)
  const [system, setSystem] = useState("")
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)

  const calculatorRef = useRef<HTMLDivElement>(null)

  const systemOptions = useMemo(
    () => getAvailableSystems(material, width, height),
    [material, width, height],
  )

  useEffect(() => {
    setSystem((current) => {
      if (current && systemOptions.includes(current)) {
        return current
      }
      return systemOptions[0] ?? ""
    })
  }, [systemOptions])

  const result = useMemo(
    () => calculatePrice(material, system, width, height, includeInstallation),
    [material, system, width, height, includeInstallation],
  )

  const handleWidthChange = (value: number) => {
    setWidth(clamp(Math.round(value), MIN_WIDTH_MM, MAX_WIDTH_MM))
  }

  const handleHeightChange = (value: number) => {
    setHeight(clamp(Math.round(value), MIN_HEIGHT_MM, MAX_HEIGHT_MM))
  }

  const handleDownload = async () => {
    if (!result.isValid) return

    setDownloadError(null)
    setDownloadPending(true)

    try {
      const pdfMakeMod: any = await import("pdfmake/build/pdfmake")
      const vfsFontsMod: any = await import("pdfmake/build/vfs_fonts")

      const pdfMakeSource = pdfMakeMod?.default ?? pdfMakeMod?.pdfMake ?? pdfMakeMod
      const pdfMake = pdfMakeSource?.createPdf ? pdfMakeSource : pdfMakeMod

      const fontsModule = vfsFontsMod?.default ?? vfsFontsMod

      const resolveVfs = (candidate: unknown) => {
        if (!candidate || typeof candidate !== "object") {
          return null
        }

        if ("pdfMake" in (candidate as Record<string, unknown>)) {
          const maybePdfMake = (candidate as Record<string, unknown>).pdfMake
          if (maybePdfMake && typeof maybePdfMake === "object" && "vfs" in maybePdfMake) {
            const vfs = (maybePdfMake as Record<string, unknown>).vfs
            if (vfs && typeof vfs === "object") {
              return vfs as Record<string, string>
            }
          }
        }

        if ("vfs" in (candidate as Record<string, unknown>)) {
          const vfs = (candidate as Record<string, unknown>).vfs
          if (vfs && typeof vfs === "object") {
            return vfs as Record<string, string>
          }
        }

        const keys = Object.keys(candidate as Record<string, unknown>)
        if (keys.length > 0 && keys.every((key) => key.endsWith(".ttf"))) {
          return candidate as Record<string, string>
        }

        return null
      }

      const vfsCandidate =
        resolveVfs(fontsModule) ??
        resolveVfs((fontsModule as Record<string, unknown>)?.default) ??
        resolveVfs((fontsModule as Record<string, unknown>)?.pdfMake) ??
        resolveVfs((fontsModule as Record<string, unknown>)?.vfs)
      if (!vfsCandidate) {
        throw new Error("Neizdevās ielādēt PDF fontus (vfs).")
      }
      pdfMake.vfs = vfsCandidate

      const d = new Date()
      const dateStr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`
      const prettyPrice = `${result.price} €`

      const notesLines = [
        { text: '* Šis ir informatīvs cenas aprēķins. Gala cena var atšķirties.', style: 'notes', margin: [0, 10, 0, 2] },
      ]

      if (includeInstallation) {
        notesLines.push({ text: '* Cenas aprēķinā iekļauti montāžas pakalpojumi.', style: 'notes', margin: [0, 0, 0, 0] })
      } else {
        notesLines.push({ text: '* Montāžas pakalpojumi nav iekļauti cenā.', style: 'notes', margin: [0, 0, 0, 0] })
      }

      const docDefinition: any = {
        pageMargins: [40, 40, 40, 60],
        defaultStyle: { font: 'Roboto', fontSize: 11, color: '#1f2937' },
        styles: {
          h1: { fontSize: 24, bold: true, alignment: 'center', color: '#1f2937', margin: [0, 0, 0, 6] },
          sub: { fontSize: 11, color: '#6b7280', alignment: 'center', margin: [0, 0, 0, 12] },
          sectionTitle: { fontSize: 14, bold: true, margin: [0, 14, 0, 8] },
          label: { bold: true },
          notes: { fontSize: 9, color: '#6b7280' },
          totalLabel: { bold: true, alignment: 'right' },
          totalValue: { color: '#14b8a6', bold: true, fontSize: 20, alignment: 'right' },
        },
        content: [
          { text: 'Cenas Aprēķins', style: 'h1' },
          { text: `Žalūziju cenas kalkulators v${APP_VERSION}`, style: 'sub' },
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: '#e5e7eb' }] },
          { text: `\nDatums: ${dateStr}`, margin: [0, 14, 0, 0] },
          { text: 'Specifikācija:', style: 'sectionTitle' },
          {
            table: {
              widths: [100, '*'],
              body: [
                [{ text: 'Materiāls:', style: 'label' }, material],
                [{ text: 'Sistēma:', style: 'label' }, system || '' ],
                [{ text: 'Platums:', style: 'label' }, `${width} mm`],
                [{ text: 'Augstums:', style: 'label' }, `${height} mm`],
              ],
            },
            layout: {
              hLineColor: () => '#e5e7eb',
              vLineColor: () => '#ffffff',
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 6,
              paddingBottom: () => 6,
            },
          },
          { text: '\n' },
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.8, lineColor: '#e5e7eb' }] },
          {
            columns: [
              notesLines,
              [
                { text: 'KOPĒJĀ CENA AR PVN:', style: 'totalLabel', margin: [0, 0, 0, 4] },
                { text: prettyPrice, style: 'totalValue' },
              ],
            ],
            columnGap: 12,
            margin: [0, 10, 0, 0],
          },
        ],
      }

      pdfMake.createPdf(docDefinition).download(`zaluziju-cenas-aprekins-${Date.now()}.pdf`)
    } catch (error: any) {
      console.error(error)
      setDownloadError(error?.message || "Neizdevās lejupielādēt aprēķinu. Lūdzu, mēģiniet vēlreiz.")
    } finally {
      setDownloadPending(false)
    }
  }

  return (
    <div className="w-full rounded-3xl bg-sky-50 p-6 shadow-sm sm:p-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Cenas kalkulators</h2>
      </div>

      <div ref={calculatorRef} className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <div>
            <label htmlFor="material" className="block text-sm font-medium text-gray-700">
              Izvēlieties materiālu
            </label>
            <select
              id="material"
              value={material}
              onChange={(event) => setMaterial(event.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {materialOptions.map((option) => {
                const blackout = MATERIAL_BLACKOUT_INFO[option]
                const label = blackout ? `${option} ${blackout}` : option
                return (
                  <option key={option} value={option}>
                    {label}
                  </option>
                )
              })}
            </select>
          </div>

          <div>
            <label htmlFor="system" className="block text-sm font-medium text-gray-700">
              Izvēlieties sistēmu
            </label>
            <select
              id="system"
              value={system}
              onChange={(event) => setSystem(event.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={systemOptions.length === 0}
            >
              {systemOptions.length === 0 ? (
                <option value="">Nav piemērotu sistēmu</option>
              ) : (
                systemOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              )}
            </select>
            {systemOptions.length === 0 && (
              <p className="mt-2 text-sm text-red-600">
                Izvēlētie izmēri pārsniedz pieejamos sistēmu parametrus.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="width"
                type="range"
                min={MIN_WIDTH_MM}
                max={MAX_WIDTH_MM}
                step={10}
                value={width}
                onChange={(event) => handleWidthChange(Number(event.target.value))}
                className="range-input accent-sky-500"
              />
              <input
                type="number"
                min={MIN_WIDTH_MM}
                max={MAX_WIDTH_MM}
                value={width}
                onChange={(event) => {
                  if (event.target.value === "") return
                  handleWidthChange(Number(event.target.value))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Pieejamais diapazons: {MIN_WIDTH_MM}–{MAX_WIDTH_MM} mm
            </p>
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="height"
                type="range"
                min={MIN_HEIGHT_MM}
                max={MAX_HEIGHT_MM}
                step={10}
                value={height}
                onChange={(event) => handleHeightChange(Number(event.target.value))}
                className="range-input accent-sky-500"
              />
              <input
                type="number"
                min={MIN_HEIGHT_MM}
                max={MAX_HEIGHT_MM}
                value={height}
                onChange={(event) => {
                  if (event.target.value === "") return
                  handleHeightChange(Number(event.target.value))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Pieejamais diapazons: {MIN_HEIGHT_MM}–{MAX_HEIGHT_MM} mm
            </p>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={includeInstallation}
              onChange={(event) => setIncludeInstallation(event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
            />
            Montāžas pakalpojumi (+20,00 €)
          </label>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-6 text-center">
          <div className="w-full rounded-2xl border-2 border-sky-500 bg-white px-6 py-10 shadow-sm">
            <p className="text-base font-medium text-gray-600">Cena € ar PVN:</p>
            <p className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">{result.price}</p>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!result.isValid || downloadPending}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {downloadPending ? "Gatavo PDF..." : "Lejupielādēt aprēķinu"}
          </button>
          {downloadError && <p className="mt-3 text-sm text-red-600">{downloadError}</p>}
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="RulloCalculator">
            *kalkulatorā norādītā cena ir informatīva,<br />
            tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>
    </div>
  )
}
