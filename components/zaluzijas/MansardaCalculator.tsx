"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import pdfMake from "pdfmake/build/pdfmake"
import "pdfmake/build/vfs_fonts"

const MANSARDA_APP_VERSION = "1.0"

const MIN_WIDTH_MM = 400
const MAX_WIDTH_MM = 800
const MIN_HEIGHT_MM = 400
const MAX_HEIGHT_MM = 1200

const INSTALLATION_FEE = 25

const MANSARDA_SYSTEM_OPTIONS = [
  { value: "Balts", label: "Balts" },
  { value: "Bēšs", label: "Bēšs" },
  { value: "Pelēks", label: "Pelēks" },
] as const

type MansardaSystemOption = (typeof MANSARDA_SYSTEM_OPTIONS)[number]

const MANSARDA_SYSTEM_CONSTRAINTS: Record<MansardaSystemOption["value"], { maxWidthMm: number; maxHeightMm: number }> = {
  Balts: { maxWidthMm: MAX_WIDTH_MM, maxHeightMm: MAX_HEIGHT_MM },
  Bēšs: { maxWidthMm: MAX_WIDTH_MM, maxHeightMm: MAX_HEIGHT_MM },
  Pelēks: { maxWidthMm: MAX_WIDTH_MM, maxHeightMm: MAX_HEIGHT_MM },
}

const MANSARDA_MATERIAL_OPTIONS = [
  { value: "NEUTRAL", label: "NEUTRAL" },
  { value: "EASTER", label: "EASTER" },
  { value: "VAN GOGH", label: "VAN GOGH" },
  { value: "WATER", label: "WATER" },
  { value: "FLOWER", label: "FLOWER" },
  { value: "LUNA", label: "LUNA" },
  { value: "KLOWER", label: "KLOWER" },
  { value: "TOPAZ", label: "TOPAZ" },
  { value: "ARABESKA", label: "ARABESKA" },
  { value: "JASPER", label: "JASPER" },
  { value: "TALIA", label: "TALIA" },
  { value: "FLOWER (LT)", label: "FLOWER (LT)" },
  { value: "CHAD", label: "CHAD" },
  { value: "NATURAL", label: "NATURAL" },
  { value: "ROYAL", label: "ROYAL" },
  { value: "SEVILA THERMO", label: "SEVILA THERMO" },
  { value: "BLACK OUT", label: "BLACK OUT" },
  { value: "BLACK OUT SILVER", label: "BLACK OUT SILVER" },
  { value: "BMS Melange Silver", label: "BMS Melange Silver" },
  { value: "METALIC", label: "METALIC" },
  { value: "SEVILA THERMO (2)", label: "SEVILA THERMO (2)" },
  { value: "SCREEN", label: "SCREEN" },
] as const

type MansardaMaterialOption = (typeof MANSARDA_MATERIAL_OPTIONS)[number]

type MansardaPriceTable = Record<MansardaMaterialOption["value"], Record<MansardaSystemOption["value"], number>>

const SYSTEM_PRICE_TEMPLATE: Record<MansardaSystemOption["value"], number> = {
  Balts: 0,
  Bēšs: 0,
  Pelēks: 0,
}

function makeSystemPrices(base: number): Record<MansardaSystemOption["value"], number> {
  const entries = Object.keys(SYSTEM_PRICE_TEMPLATE).map((key) => [key as MansardaSystemOption["value"], base])
  return Object.fromEntries(entries) as Record<MansardaSystemOption["value"], number>
}

const MANSARDA_PRICE_TABLE: MansardaPriceTable = {
  // 60 €/m²
  "NEUTRAL": makeSystemPrices(60),
  "EASTER": makeSystemPrices(60),
  "VAN GOGH": makeSystemPrices(60),
  "WATER": makeSystemPrices(60),
  "FLOWER": makeSystemPrices(60),
  "LUNA": makeSystemPrices(60),
  "KLOWER": makeSystemPrices(60),
  // 65 €/m²
  "TOPAZ": makeSystemPrices(65),
  "ARABESKA": makeSystemPrices(65),
  "JASPER": makeSystemPrices(65),
  "TALIA": makeSystemPrices(65),
  "FLOWER (LT)": makeSystemPrices(65),
  "CHAD": makeSystemPrices(65),
  "NATURAL": makeSystemPrices(65),
  "ROYAL": makeSystemPrices(65),
  // 70 €/m²
  "SEVILA THERMO": makeSystemPrices(70),
  "BLACK OUT": makeSystemPrices(70),
  "BLACK OUT SILVER": makeSystemPrices(70),
  "BMS Melange Silver": makeSystemPrices(70),
  "METALIC": makeSystemPrices(70),
  "SEVILA THERMO (2)": makeSystemPrices(70),
  // 75 €/m²
  "SCREEN": makeSystemPrices(75),
}

const MANSARDA_NOTES = [
  "* Šis ir informatīvs cenas aprēķins. Gala cena var atšķirties.",
  "* Montāžas pakalpojumi nav iekļauti.",
]

const NUMBER_FORMATTER = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

type MansardaCalculationResult = {
  price: string
  isValid: boolean
  breakdown: {
    product: number
    installation: number
    total: number
  } | null
}

function calculateMansardaPrice(
  material: MansardaMaterialOption["value"] | "",
  system: MansardaSystemOption["value"] | "",
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): MansardaCalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const basePrice = MANSARDA_PRICE_TABLE[material]?.[system]
  if (!basePrice) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000
  const area = widthM * heightM

  const adjustedBasePrice = basePrice * 1.5
  const productCost = Math.round(adjustedBasePrice * area * 1.21)
  const installationCost = includeInstallation ? INSTALLATION_FEE : 0
  const total = productCost + installationCost

  return {
    price: NUMBER_FORMATTER.format(total),
    isValid: true,
    breakdown: {
      product: productCost,
      installation: installationCost,
      total,
    },
  }
}

type MansardaCalculatorProps = {
  title?: string
}

export default function MansardaCalculator({ title }: MansardaCalculatorProps) {
  const [material, setMaterial] = useState<MansardaMaterialOption["value"] | "">("")
  const [system, setSystem] = useState<MansardaSystemOption["value"] | "">("")
  const [width, setWidth] = useState(2000)
  const [height, setHeight] = useState(2200)
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)

  const calculatorRef = useRef<HTMLDivElement>(null)

  const availableSystems = useMemo(() => {
    if (!material) {
      return MANSARDA_SYSTEM_OPTIONS
    }

    return MANSARDA_SYSTEM_OPTIONS.filter((option) => MANSARDA_PRICE_TABLE[material]?.[option.value])
  }, [material])

  const activeMaxWidthMm = useMemo(() => {
    if (!system) {
      return MAX_WIDTH_MM
    }
    const constraint = MANSARDA_SYSTEM_CONSTRAINTS[system]
    return constraint ? constraint.maxWidthMm : MAX_WIDTH_MM
  }, [system])

  const activeMaxHeightMm = useMemo(() => {
    if (!system) {
      return MAX_HEIGHT_MM
    }
    const constraint = MANSARDA_SYSTEM_CONSTRAINTS[system]
    return constraint ? constraint.maxHeightMm : MAX_HEIGHT_MM
  }, [system])

  useEffect(() => {
    setWidth((current) => clamp(current, MIN_WIDTH_MM, activeMaxWidthMm))
  }, [activeMaxWidthMm])

  useEffect(() => {
    setHeight((current) => clamp(current, MIN_HEIGHT_MM, activeMaxHeightMm))
  }, [activeMaxHeightMm])

  useEffect(() => {
    setSystem((current) => (current && availableSystems.some((option) => option.value === current) ? current : ""))
  }, [availableSystems])

  const result = useMemo(
    () => calculateMansardaPrice(material, system, width, height, includeInstallation),
    [material, system, width, height, includeInstallation],
  )

  const handleDownload = async () => {
    if (!result.isValid) return

    setDownloadError(null)
    setDownloadPending(true)

    try {
      const pdfMakeRuntime: any = (pdfMake as any)?.createPdf ? pdfMake : (pdfMake as any)?.default ?? pdfMake
      if (!pdfMakeRuntime?.createPdf || !pdfMakeRuntime?.vfs) {
        throw new Error("Neizdevās ielādēt PDF fontus (vfs).")
      }

      const d = new Date()
      const dateStr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`

      const content: any[] = [
        { text: "Cenas Aprēķins", style: "h1" },
        { canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: "#e5e7eb" }] },
        { text: `\nDatums: ${dateStr}`, margin: [0, 14, 0, 0] },
        { text: "Specifikācija:", style: "sectionTitle" },
        {
          table: {
            widths: [140, "*"],
            body: [
              [{ text: "Materiāls:", style: "label" }, material || "Nav izvēlēts"],
              [{ text: "Sistēma:", style: "label" }, system || "Nav izvēlēta"],
              [{ text: "Platums:", style: "label" }, `${width} mm`],
              [{ text: "Augstums:", style: "label" }, `${height} mm`],
              [{ text: "Montāža:", style: "label" }, includeInstallation ? "Jā" : "Nē"],
            ],
          },
          layout: {
            hLineColor: () => "#e5e7eb",
            vLineColor: () => "#ffffff",
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 6,
            paddingBottom: () => 6,
          },
        },
      ]

      if (result.breakdown) {
        const { product, installation, total } = result.breakdown

        content.push({ text: "Cenas sadalījums:", style: "sectionTitle", margin: [0, 16, 0, 6] })
        content.push({
          table: {
            widths: ["*", "auto"],
            body: [
              [{ text: "Žalūzijas cena:", style: "label" }, `${NUMBER_FORMATTER.format(product)} €`],
              ...(installation > 0
                ? [[{ text: "Montāža:", style: "label" }, `+${NUMBER_FORMATTER.format(installation)} €`]]
                : []),
              [{ text: "Kopā ar PVN:", style: "label" }, { text: `${NUMBER_FORMATTER.format(total)} €`, bold: true }],
            ],
          },
          layout: {
            hLineColor: () => "#e5e7eb",
            vLineColor: () => "#ffffff",
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 6,
            paddingBottom: () => 6,
          },
        })
      }

      content.push({ text: "\n" })
      content.push({ canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.8, lineColor: "#e5e7eb" }] })
      content.push({
        columns: [
          {
            stack: MANSARDA_NOTES.map((text) => ({ text, style: "notes" })),
          },
          [
            { text: "KOPĒJĀ CENA AR PVN:", style: "totalLabel", margin: [0, 0, 0, 4] },
            { text: `${result.price} €`, style: "totalValue" },
          ],
        ],
        columnGap: 12,
        margin: [0, 10, 0, 0],
      })

      const docDefinition: any = {
        pageMargins: [40, 40, 40, 60],
        defaultStyle: { font: "Roboto", fontSize: 11, color: "#1f2937" },
        styles: {
          h1: { fontSize: 24, bold: true, alignment: "center", color: "#1f2937", margin: [0, 0, 0, 6] },
          sub: { fontSize: 11, color: "#6b7280", alignment: "center", margin: [0, 0, 0, 12] },
          sectionTitle: { fontSize: 14, bold: true, margin: [0, 14, 0, 8] },
          label: { bold: true },
          notes: { fontSize: 9, color: "#6b7280" },
          totalLabel: { bold: true, alignment: "right" },
          totalValue: { color: "#14b8a6", bold: true, fontSize: 20, alignment: "right" },
        },
        content,
      }

      pdfMakeRuntime.createPdf(docDefinition).download(`mansarda-zaluziju-aprekins-${Date.now()}.pdf`)
    } catch (error: any) {
      console.error(error)
      setDownloadError(error?.message || "Neizdevās lejupielādēt aprēķinu. Lūdzu, mēģiniet vēlreiz.")
    } finally {
      setDownloadPending(false)
    }
  }

  const summaryText = useMemo(() => {
    if (!material || !system) {
      return null
    }

    const install = includeInstallation ? "Jā" : "Nē"
    const priceText = result?.breakdown?.total
      ? `${NUMBER_FORMATTER.format(result.breakdown.total)} €`
      : `${result?.price ?? "—"} €`

    return [
      "Aprēķins (mansarda žalūzijas):",
      `• Materiāls: ${material}`,
      `• Sistēma: ${system}`,
      `• Izmērs (mm): ${width} x ${height}`,
      `• Montāža: ${install}`,
      `• Kopā ar PVN: ${priceText}`,
    ].join("\n")
  }, [height, includeInstallation, material, result, system, width])

  const contactHref = summaryText ? `/kontakti?calc=${encodeURIComponent(summaryText)}` : "/kontakti"

  return (
    <div
      ref={calculatorRef}
      className="w-full rounded-3xl bg-emerald-50 p-6 shadow-sm sm:p-10"
      data-component-name="MansardaCalculator"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title ?? "Mansarda žalūziju kalkulators"}</h2>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <div>
            <label htmlFor="mansarda-material" className="block text-sm font-medium text-gray-700">
              Izvēlieties materiālu
            </label>
            <select
              id="mansarda-material"
              value={material}
              onChange={(event) => setMaterial(event.target.value as MansardaMaterialOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties materiālu</option>
              {MANSARDA_MATERIAL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="mansarda-system" className="block text-sm font-medium text-gray-700">
                Izvēlieties profila krāsu
              </label>
            </div>
            <select
              id="mansarda-system"
              value={system}
              onChange={(event) => setSystem(event.target.value as MansardaSystemOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties profila krāsu</option>
              {availableSystems.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mansarda-width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="mansarda-width"
                type="range"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                step={10}
                value={width}
                onChange={(event) => setWidth(clamp(Number(event.target.value), MIN_WIDTH_MM, activeMaxWidthMm))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                value={width}
                onChange={(event) => {
                  const value = event.target.value
                  if (value === "") return
                  setWidth(clamp(Number(value), MIN_WIDTH_MM, activeMaxWidthMm))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MIN_WIDTH_MM}–{activeMaxWidthMm} mm</p>
          </div>

          <div>
            <label htmlFor="mansarda-height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="mansarda-height"
                type="range"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                step={10}
                value={height}
                onChange={(event) => setHeight(clamp(Number(event.target.value), MIN_HEIGHT_MM, activeMaxHeightMm))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                value={height}
                onChange={(event) => {
                  const value = event.target.value
                  if (value === "") return
                  setHeight(clamp(Number(value), MIN_HEIGHT_MM, activeMaxHeightMm))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MIN_HEIGHT_MM}–{activeMaxHeightMm} mm</p>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={includeInstallation}
              onChange={(event) => setIncludeInstallation(event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            Montāžas pakalpojumi (+{NUMBER_FORMATTER.format(INSTALLATION_FEE)} €)
          </label>
        </div>

        <div
          className="self-start flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-emerald-100"
          style={{ position: "sticky", top: "var(--header-offset)" }}
        >
          <div className="w-full rounded-2xl border-2 border-emerald-500 bg-emerald-50 px-6 py-10 shadow-sm">
            <p className="text-base font-medium text-gray-600">Cena € ar PVN:</p>
            <p className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">{result.price}</p>
          </div>
          {result.breakdown && (
            <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white/80 px-5 py-4 text-sm text-gray-700 shadow-inner">
              <dl className="space-y-2">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Žalūzijas cena</dt>
                  <dd>{NUMBER_FORMATTER.format(result.breakdown.product)} €</dd>
                </div>
                {includeInstallation && (
                  <div className="flex items-center justify-between">
                    <dt className="font-medium">Montāža</dt>
                    <dd>{`+${NUMBER_FORMATTER.format(result.breakdown.installation)} €`}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-semibold text-gray-900">Kopā ar PVN</dt>
                  <dd className="font-semibold text-gray-900">{NUMBER_FORMATTER.format(result.breakdown.total)} €</dd>
                </div>
              </dl>
            </div>
          )}
          <Link
            href={contactHref}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Aizpildīt pieteikumu
          </Link>
          <p className="mt-2 text-xs text-gray-600">
            Pēc pieteikuma nosūtīšanas mūsu menedžeris ar Jums sazināsies 1 darba dienas laikā.
          </p>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!result.isValid || downloadPending}
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-emerald-400 bg-white px-4 py-3 text-sm font-semibold text-emerald-600 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400"
          >
            {downloadPending ? "Gatavo PDF..." : "Lejupielādēt aprēķinu"}
          </button>
          {downloadError && <p className="mt-3 text-sm text-red-600">{downloadError}</p>}
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="MansardaCalculator">
            *kalkulatorā norādītā cena ir informatīva,
            <br />tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>
    </div>
  )
}
