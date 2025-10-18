"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"

const MOSKITU_APP_VERSION = "1.0"

const MOSKITU_MIN_WIDTH_MM = 300
const MOSKITU_MAX_WIDTH_MM = 3000
const MOSKITU_MIN_HEIGHT_MM = 300
const MOSKITU_MAX_HEIGHT_MM = 3500

const MOSKITU_INSTALLATION_FEE = 25
const MOSKITU_MARKUP_MULTIPLIER = 2.5

const MOSKITU_SYSTEM_OPTIONS = [
  { value: "Balta", label: "Balta" },
  { value: "Brūna", label: "Brūna" },
  { value: "Mahagons", label: "Mahagons" },
  { value: "Zelta ozols", label: "Zelta ozols" },
  { value: "Antracīts", label: "Antracīts" },
] as const

type MoskituSystemOption = (typeof MOSKITU_SYSTEM_OPTIONS)[number]

const MOSKITU_SYSTEM_CONSTRAINTS: Record<MoskituSystemOption["value"], { maxWidthMm: number; maxHeightMm: number }> = {
  Balta: { maxWidthMm: 3000, maxHeightMm: 3500 },
  Brūna: { maxWidthMm: 3000, maxHeightMm: 3500 },
  Mahagons: { maxWidthMm: 3000, maxHeightMm: 3500 },
  "Zelta ozols": { maxWidthMm: 3000, maxHeightMm: 3500 },
  Antracīts: { maxWidthMm: 3000, maxHeightMm: 3500 },
}

const MOSKITU_SYSTEM_IMAGES: Record<MoskituSystemOption["value"], readonly [string, string]> = {
  Balta: ["https://example.com/balta1.jpg", "https://example.com/balta2.jpg"],
  Brūna: ["https://example.com/bruna1.jpg", "https://example.com/bruna2.jpg"],
  Mahagons: ["https://example.com/mahagons1.jpg", "https://example.com/mahagons2.jpg"],
  "Zelta ozols": ["https://example.com/zelta-ozols1.jpg", "https://example.com/zelta-ozols2.jpg"],
  Antracīts: ["https://example.com/antracits1.jpg", "https://example.com/antracits2.jpg"],
}

const MOSKITU_MATERIAL_OPTIONS = [
  { value: "Pelēks", label: "Pelēks" },
  { value: "Melns", label: "Melns" },
  { value: "Antikaķis", label: "Antikaķis" },
] as const

type MoskituMaterialOption = (typeof MOSKITU_MATERIAL_OPTIONS)[number]

type MoskituPriceTable = Record<MoskituMaterialOption["value"], Record<MoskituSystemOption["value"], number>>

const MOSKITU_PRICE_TABLE: MoskituPriceTable = {
  Pelēks: {
    Balta: 17.5,
    Brūna: 20,
    Mahagons: 20,
    "Zelta ozols": 20,
    Antracīts: 20,
  },
  Melns: {
    Balta: 20,
    Brūna: 25,
    Mahagons: 25,
    "Zelta ozols": 25,
    Antracīts: 25,
  },
  Antikaķis: {
    Balta: 30,
    Brūna: 30,
    Mahagons: 30,
    "Zelta ozols": 30,
    Antracīts: 30,
  },
}

const MOSKITU_NOTES = [
  "* Šis ir informatīvs cenas aprēķins. Gala cena var atšķirties.",
  "* Montāžas pakalpojumi nav iekļauti cenā, ja nav atzīmēti.",
]

const MOSKITU_NUMBER_FORMATTER = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

type MoskituCalculationResult = {
  price: string
  isValid: boolean
  breakdown: {
    product: number
    installation: number
    total: number
  } | null
}

function calculateMoskituPrice(
  material: MoskituMaterialOption["value"] | "",
  system: MoskituSystemOption["value"] | "",
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): MoskituCalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const basePrice = MOSKITU_PRICE_TABLE[material]?.[system]
  if (!basePrice) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000
  const area = widthM * heightM

  const productCost = Math.round(basePrice * MOSKITU_MARKUP_MULTIPLIER * area * 1.21)
  const installationCost = includeInstallation ? MOSKITU_INSTALLATION_FEE : 0
  const total = productCost + installationCost

  return {
    price: MOSKITU_NUMBER_FORMATTER.format(total),
    isValid: true,
    breakdown: {
      product: productCost,
      installation: installationCost,
      total,
    },
  }
}

type MoskituCalculatorProps = {
  title?: string
}

export default function MoskituCalculator({ title }: MoskituCalculatorProps) {
  const [material, setMaterial] = useState<MoskituMaterialOption["value"] | "">("")
  const [system, setSystem] = useState<MoskituSystemOption["value"] | "">("")
  const [width, setWidth] = useState(2000)
  const [height, setHeight] = useState(2200)
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)
  const [isMaxSizesOpen, setIsMaxSizesOpen] = useState(false)

  const calculatorRef = useRef<HTMLDivElement>(null)

  const availableSystems = useMemo(() => {
    if (!material) {
      return MOSKITU_SYSTEM_OPTIONS
    }

    const typedMaterial = material as MoskituMaterialOption["value"]
    return MOSKITU_SYSTEM_OPTIONS.filter((option) => MOSKITU_PRICE_TABLE[typedMaterial]?.[option.value])
  }, [material])

  const activeMaxWidthMm = useMemo(() => {
    if (!system) {
      return MOSKITU_MAX_WIDTH_MM
    }
    const typedSystem = system as MoskituSystemOption["value"]
    const constraint = MOSKITU_SYSTEM_CONSTRAINTS[typedSystem]
    return constraint ? constraint.maxWidthMm : MOSKITU_MAX_WIDTH_MM
  }, [system])

  const activeMaxHeightMm = useMemo(() => {
    if (!system) {
      return MOSKITU_MAX_HEIGHT_MM
    }
    const typedSystem = system as MoskituSystemOption["value"]
    const constraint = MOSKITU_SYSTEM_CONSTRAINTS[typedSystem]
    return constraint ? constraint.maxHeightMm : MOSKITU_MAX_HEIGHT_MM
  }, [system])

  useEffect(() => {
    setWidth((current: number) => clamp(current, MOSKITU_MIN_WIDTH_MM, activeMaxWidthMm))
  }, [activeMaxWidthMm])

  useEffect(() => {
    setHeight((current: number) => clamp(current, MOSKITU_MIN_HEIGHT_MM, activeMaxHeightMm))
  }, [activeMaxHeightMm])

  useEffect(() => {
    setSystem((current) => (current && availableSystems.some((option) => option.value === current) ? current : ""))
  }, [availableSystems])

  const result = useMemo(
    () => calculateMoskituPrice(material, system, width, height, includeInstallation),
    [material, system, width, height, includeInstallation],
  )

  const selectedSystemImages = useMemo(() => {
    if (!system) {
      return null
    }
    return MOSKITU_SYSTEM_IMAGES[system as MoskituSystemOption["value"]]
  }, [system])

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
      const vfs =
        fontsModule?.pdfMake?.vfs ??
        fontsModule?.vfs ??
        fontsModule?.default?.pdfMake?.vfs ??
        fontsModule?.default?.vfs ??
        null

      if (!vfs) {
        throw new Error("Neizdevās ielādēt PDF fontus (vfs).")
      }

      pdfMake.vfs = vfs

      const d = new Date()
      const dateStr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`

      const content: any[] = [
        { text: "Cenas Aprēķins", style: "h1" },
        { text: `Moskītu tīklu kalkulators v${MOSKITU_APP_VERSION}`, style: "sub" },
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

      if (selectedSystemImages) {
        content.push({ text: "\n" })
        content.push({
          columns: selectedSystemImages.map((src: string) => ({ image: src, width: 160 })),
          columnGap: 16,
        })
      }

      if (result.breakdown) {
        const { product, installation, total } = result.breakdown
        const installationText =
          installation > 0 ? `+${MOSKITU_NUMBER_FORMATTER.format(installation)} €` : `${MOSKITU_NUMBER_FORMATTER.format(installation)} €`

        content.push({ text: "Cenas sadalījums:", style: "sectionTitle", margin: [0, 16, 0, 6] })
        content.push({
          table: {
            widths: ["*", "auto"],
            body: [
              [{ text: "Tīklu cena:", style: "label" }, `${MOSKITU_NUMBER_FORMATTER.format(product)} €`],
              [{ text: "Montāža:", style: "label" }, installationText],
              [{ text: "Kopā ar PVN:", style: "label" }, { text: `${MOSKITU_NUMBER_FORMATTER.format(total)} €`, bold: true }],
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
            stack: MOSKITU_NOTES.map((text) => ({ text, style: "notes" })),
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

      pdfMake.createPdf(docDefinition).download(`moskitu-tiklu-aprekins-${Date.now()}.pdf`)
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
      ? `${MOSKITU_NUMBER_FORMATTER.format(result.breakdown.total)} €`
      : `${result?.price ?? "—"} €`

    return [
      "Aprēķins (moskītu tīkli):",
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
      data-component-name="MoskituCalculator"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title ?? "Moskītu tīklu kalkulators"}</h2>
      </div>

      {isMaxSizesOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="moskitu-max-sizes-title"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMaxSizesOpen(false)} />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 id="moskitu-max-sizes-title" className="text-lg font-semibold text-gray-900">
                Maksimālie izmēri
              </h3>
              <button
                type="button"
                onClick={() => setIsMaxSizesOpen(false)}
                className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Aizvērt"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900">SCREEN BOX Zip 85 / 100</p>
                <p>Zip 85 — klāja izmēri līdz 3500 × 2500 mm (platums × augstums).</p>
                <p>Zip 100 — klāja izmēri līdz 4500 × 3500 mm.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">SCREEN ZIP 95 / 110</p>
                <p>Zip 95 — klāja izmēri līdz 3000 × 3000 mm.</p>
                <p>Zip 110 — klāja izmēri līdz 5000 × 3500 mm.</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsMaxSizesOpen(false)}
                className="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Aizvērt
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <div>
            <label htmlFor="moskitu-material" className="block text-sm font-medium text-gray-700">
              Izvēlieties sieta veidu
            </label>
            <select
              id="moskitu-material"
              value={material}
              onChange={(event) => setMaterial(event.target.value as MoskituMaterialOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties sieta veidu</option>
              {MOSKITU_MATERIAL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="moskitu-system" className="block text-sm font-medium text-gray-700">
                Izvēlieties profila krāsu
              </label>
              <button
                type="button"
                onClick={() => setIsMaxSizesOpen(true)}
                className="text-xs font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
              >
                Maksimālie izmēri
              </button>
            </div>
            <select
              id="moskitu-system"
              value={system}
              onChange={(event) => setSystem(event.target.value as MoskituSystemOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties profila krāsu</option>
              {availableSystems.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {selectedSystemImages && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {selectedSystemImages.map((src: string, index: number) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${system} paraugs ${index + 1}`}
                    className="h-32 w-full rounded-xl object-cover shadow-sm"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="moskitu-width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="moskitu-width"
                type="range"
                min={MOSKITU_MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                step={10}
                value={width}
                onChange={(event) => setWidth(clamp(Number(event.target.value), MOSKITU_MIN_WIDTH_MM, activeMaxWidthMm))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MOSKITU_MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                value={width}
                onChange={(event) => {
                  const value = event.target.value
                  if (value === "") return
                  setWidth(clamp(Number(value), MOSKITU_MIN_WIDTH_MM, activeMaxWidthMm))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MOSKITU_MIN_WIDTH_MM}–{activeMaxWidthMm} mm</p>
          </div>

          <div>
            <label htmlFor="moskitu-height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="moskitu-height"
                type="range"
                min={MOSKITU_MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                step={10}
                value={height}
                onChange={(event) => setHeight(clamp(Number(event.target.value), MOSKITU_MIN_HEIGHT_MM, activeMaxHeightMm))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MOSKITU_MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                value={height}
                onChange={(event) => {
                  const value = event.target.value
                  if (value === "") return
                  setHeight(clamp(Number(value), MOSKITU_MIN_HEIGHT_MM, activeMaxHeightMm))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MOSKITU_MIN_HEIGHT_MM}–{activeMaxHeightMm} mm</p>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={includeInstallation}
              onChange={(event) => setIncludeInstallation(event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            Montāžas pakalpojumi (+{MOSKITU_NUMBER_FORMATTER.format(MOSKITU_INSTALLATION_FEE)} €)
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
                  <dt className="font-medium">Tīklu cena</dt>
                  <dd>{MOSKITU_NUMBER_FORMATTER.format(result.breakdown.product)} €</dd>
                </div>
                {includeInstallation && (
                  <div className="flex items-center justify-between">
                    <dt className="font-medium">Montāža</dt>
                    <dd>{`+${MOSKITU_NUMBER_FORMATTER.format(result.breakdown.installation)} €`}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-semibold text-gray-900">Kopā ar PVN</dt>
                  <dd className="font-semibold text-gray-900">{MOSKITU_NUMBER_FORMATTER.format(result.breakdown.total)} €</dd>
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
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="MoskituCalculator">
            *kalkulatorā norādītā cena ir informatīva,<br />
            tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>
    </div>
  )
}
