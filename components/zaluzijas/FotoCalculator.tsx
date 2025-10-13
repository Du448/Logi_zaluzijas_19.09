"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const FOTO_APP_VERSION = "1.0"

const MIN_WIDTH_MM = 300
const MAX_WIDTH_MM = 3000
const MIN_HEIGHT_MM = 300
const MAX_HEIGHT_MM = 3500

const INSTALLATION_FEE = 20

type FotoSystemOption = {
  value: string
  label: string
}

const FOTO_SYSTEM_OPTIONS: FotoSystemOption[] = [
  { value: "VARIO 13 Kasete (balta)", label: "VARIO 13 Kasete (balta)" },
  { value: "VARIO 13 Kasete (krāsaina)", label: "VARIO 13 Kasete (krāsaina)" },
  { value: "VARIO 17 Kasete (balts)", label: "VARIO 17 Kasete (balts)" },
  { value: "VARIO 17 Kasete (krāsaina)", label: "VARIO 17 Kasete (krāsaina)" },
  { value: "VARIO 25 Uprofils Kasete (balts)", label: "VARIO 25 Uprofils Kasete (balts)" },
  { value: "VARIO 25 Uprofils Kasete (krāsains)", label: "VARIO 25 Uprofils Kasete (krāsains)" },
  { value: "VARIO 25 Rullo (balts)", label: "VARIO 25 Rullo (balts)" },
  { value: "VARIO 25 Rullo (krāsains)", label: "VARIO 25 Rullo (krāsains)" },
  { value: "VARIO 32 Rullo (balts)", label: "VARIO 32 Rullo (balts)" },
  { value: "VARIO 32 Rullo (krāsains)", label: "VARIO 32 Rullo (krāsains)" },
]

type FotoMaterial = {
  name: string
  prices: Record<string, number>
}

type FotoSystemVisual = {
  label: string
  image: string
}

const BASE_PRICES_PER_SQ_M: Record<string, number> = {
  "VARIO 13 Kasete (balta)": 70,
  "VARIO 13 Kasete (krāsaina)": 92,
  "VARIO 17 Kasete (balts)": 86,
  "VARIO 17 Kasete (krāsaina)": 96,
  "VARIO 25 Uprofils Kasete (balts)": 92,
  "VARIO 25 Uprofils Kasete (krāsains)": 102,
  "VARIO 25 Rullo (balts)": 86,
  "VARIO 25 Rullo (krāsains)": 93,
  "VARIO 32 Rullo (balts)": 93,
  "VARIO 32 Rullo (krāsains)": 93,
}

const FOTO_SYSTEM_VISUALS: Record<string, FotoSystemVisual> = {
  "VARIO 13 Kasete (balta)": {
    label: "VARIO 13 Kasete (balta)",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/b_ZF_2a.jpg?updatedAt=1756983418046",
  },
  "VARIO 13 Kasete (krāsaina)": {
    label: "VARIO 13 Kasete (krāsaina)",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario13_rieksts.png?updatedAt=1759842314637",
  },
  "VARIO 17 Kasete (balts)": {
    label: "VARIO 17 Kasete (balts)",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/b_ZF_roleta_materialowa_vario_17_.jpg?updatedAt=1756983418102",
  },
  "VARIO 17 Kasete (krāsaina)": {
    label: "VARIO 17 Kasete (krāsaina)",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario17_rieksts.png?updatedAt=1759842314022",
  },
  "VARIO 25 Uprofils Kasete (balts)": {
    label: "VARIO 25 Uprofils Kasete (balts)",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/b_ZF_roleta_vario_25.jpg?updatedAt=1756983418082",
  },
  "VARIO 25 Uprofils Kasete (krāsains)": {
    label: "VARIO 25 Uprofils Kasete (krāsains)",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario25_uprof_rieksts.png?updatedAt=1759842315200",
  },
  "VARIO 25 Rullo (balts)": {
    label: "VARIO 25 Rullo (balts)",
    image:
      "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_grand_rolety_duze%20(1).jpg?updatedAt=1759924549864",
  },
  "VARIO 25 Rullo (krāsains)": {
    label: "VARIO 25 Rullo (krāsains)",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_atvertais.png?updatedAt=1759924551068",
  },
  "VARIO 32 Rullo (balts)": {
    label: "VARIO 32 Rullo (balts)",
    image:
      "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_vario_32_plus_4%20(2).jpg?updatedAt=1759924549789",
  },
  "VARIO 32 Rullo (krāsains)": {
    label: "VARIO 32 Rullo (krāsains)",
    image:
      "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_daleji%20slegtais.png?updatedAt=1759924550543",
  },
}

const FOTO_MATERIALS: FotoMaterial[] = [
  {
    name: "Vidēji aptumšojošs audums",
    prices: BASE_PRICES_PER_SQ_M,
  },
  {
    name: "100% aptumšojošs audums",
    prices: BASE_PRICES_PER_SQ_M,
  },
]

const FOTO_MATERIAL_OPTIONS = FOTO_MATERIALS.map((material) => material.name)

const FOTO_MATERIAL_LOOKUP = FOTO_MATERIALS.reduce<Record<string, FotoMaterial>>((acc, material) => {
  acc[material.name] = material
  return acc
}, {})

const FOTO_PRICE_TABLE: Record<string, Record<string, number>> = FOTO_MATERIALS.reduce((acc, material) => {
  acc[material.name] = material.prices
  return acc
}, {} as Record<string, Record<string, number>>)

const FOTO_CONSTRAINTS: Record<string, { maxWidthMm: number; maxHeightMm: number }> = {
  "VARIO 13 Kasete (balta)": { maxWidthMm: 1400, maxHeightMm: 1300 },
  "VARIO 13 Kasete (krāsaina)": { maxWidthMm: 1400, maxHeightMm: 1300 },
  "VARIO 17 Kasete (balts)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO 17 Kasete (krāsaina)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO 25 Uprofils Kasete (balts)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO 25 Uprofils Kasete (krāsains)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO 25 Rullo (balts)": { maxWidthMm: 1400, maxHeightMm: 3000 },
  "VARIO 25 Rullo (krāsains)": { maxWidthMm: 1400, maxHeightMm: 3000 },
  "VARIO 32 Rullo (balts)": { maxWidthMm: 1400, maxHeightMm: 2700 },
  "VARIO 32 Rullo (krāsains)": { maxWidthMm: 1400, maxHeightMm: 2700 },
}

const numberFormatter = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function calculateFotoPrice(
  material: string,
  system: string,
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): CalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const basePrice = FOTO_PRICE_TABLE[material]?.[system]
  if (!basePrice) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000
  const cost = widthM * heightM * basePrice

  const productCost = Math.round(cost * 2.5 * 1.21)
  const installationCost = includeInstallation ? INSTALLATION_FEE : 0
  const totalRounded = productCost + installationCost

  return {
    price: numberFormatter.format(totalRounded),
    isValid: true,
    breakdown: {
      product: productCost,
      installation: installationCost,
      total: totalRounded,
    },
  }
}

type CalculationResult = {
  price: string
  isValid: boolean
  breakdown: {
    product: number
    installation: number
    total: number
  } | null
}

type FotoCalculatorProps = {
  title?: string
}

export default function FotoCalculator({ title }: FotoCalculatorProps) {
  const [material, setMaterial] = useState<string>("")
  const [system, setSystem] = useState<string>("")
  const [width, setWidth] = useState<number>(1200)
  const [height, setHeight] = useState<number>(1500)
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)
  const [isMaxSizesOpen, setIsMaxSizesOpen] = useState(false)

  const calculatorRef = useRef<HTMLDivElement>(null)

  const systemOptions = useMemo(() => FOTO_SYSTEM_OPTIONS, [])

  const selectedMaterial = useMemo(() => (material ? FOTO_MATERIAL_LOOKUP[material] ?? null : null), [material])
  const materialDescription = selectedMaterial ? selectedMaterial.name : "Nav izvēlēts"

  const activeMaxWidthMm = useMemo(() => {
    if (!system) {
      return MAX_WIDTH_MM
    }
    const constraint = FOTO_CONSTRAINTS[system]
    if (!constraint) {
      return MAX_WIDTH_MM
    }
    return Math.min(constraint.maxWidthMm, MAX_WIDTH_MM)
  }, [system])

  const activeMaxHeightMm = useMemo(() => {
    if (!system) {
      return MAX_HEIGHT_MM
    }
    const constraint = FOTO_CONSTRAINTS[system]
    if (!constraint) {
      return MAX_HEIGHT_MM
    }
    return Math.min(constraint.maxHeightMm, MAX_HEIGHT_MM)
  }, [system])

  useEffect(() => {
    setWidth((current) => clamp(current, MIN_WIDTH_MM, activeMaxWidthMm))
  }, [activeMaxWidthMm])

  useEffect(() => {
    setHeight((current) => clamp(current, MIN_HEIGHT_MM, activeMaxHeightMm))
  }, [activeMaxHeightMm])

  const selectedSystemVisual = system ? FOTO_SYSTEM_VISUALS[system] ?? null : null

  const result = useMemo(
    () => calculateFotoPrice(material, system, width, height, includeInstallation),
    [height, includeInstallation, material, system, width],
  )

  const formatCurrency = (value: number) => `${numberFormatter.format(value)} €`

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
      const prettyPrice = `${result.price} €`

      const content: any[] = [
        { text: "Cenas Aprēķins", style: "h1" },
        { text: `Foto žalūziju kalkulators v${FOTO_APP_VERSION}`, style: "sub" },
        { canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: "#e5e7eb" }] },
        { text: `\nDatums: ${dateStr}`, margin: [0, 14, 0, 0] },
        { text: "Specifikācija:", style: "sectionTitle" },
        {
          table: {
            widths: [120, "*"],
            body: [
              [{ text: "Materiāls:", style: "label" }, materialDescription],
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
        const installationText =
          installation > 0 ? `+${numberFormatter.format(installation)} €` : `${numberFormatter.format(installation)} €`

        content.push({ text: "Cenas sadalījums:", style: "sectionTitle", margin: [0, 16, 0, 6] })
        content.push({
          table: {
            widths: ["*", "auto"],
            body: [
              [{ text: "Žalūzijas cena:", style: "label" }, `${numberFormatter.format(product)} €`],
              [{ text: "Montāža:", style: "label" }, installationText],
              [{ text: "Kopā ar PVN:", style: "label" }, { text: `${numberFormatter.format(total)} €`, bold: true }],
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
          [
            { text: "* Šis ir informatīvs cenas aprēķins. Gala cena var atšķirties.", style: "notes", margin: [0, 10, 0, 2] },
            {
              text: includeInstallation
                ? "* Cenas aprēķinā iekļauti montāžas pakalpojumi."
                : "* Montāžas pakalpojumi nav iekļauti cenā.",
              style: "notes",
            },
          ],
          [
            { text: "KOPĒJĀ CENA AR PVN:", style: "totalLabel", margin: [0, 0, 0, 4] },
            { text: prettyPrice, style: "totalValue" },
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

      pdfMake.createPdf(docDefinition).download(`foto-zaluziju-aprekins-${Date.now()}.pdf`)
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
      ? `${numberFormatter.format(result.breakdown.total)} €`
      : `${result?.price ?? "—"} €`

    return [
      "Aprēķins (foto žalūzijas):",
      `• Materiāls: ${materialDescription}`,
      `• Sistēma: ${system}`,
      `• Izmērs (mm): ${width} x ${height}`,
      `• Montāža: ${install}`,
      `• Kopā ar PVN: ${priceText}`,
    ].join("\n")
  }, [height, includeInstallation, material, materialDescription, result, system, width])

  const contactHref = summaryText ? `/kontakti?calc=${encodeURIComponent(summaryText)}` : "/kontakti"

  return (
    <div
      ref={calculatorRef}
      className="w-full rounded-3xl bg-sky-50 p-6 shadow-sm sm:p-10"
      data-component-name="FotoCalculator"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title ?? "Foto žalūziju kalkulators"}</h2>
      </div>

      {isMaxSizesOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="foto-max-sizes-title"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMaxSizesOpen(false)} />
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 id="foto-max-sizes-title" className="text-lg font-semibold text-gray-900">
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
                <p className="font-medium text-gray-900">Kasetes sistēmas</p>
                <ul className="mt-1 space-y-1">
                  <li>VARIO 13 Kasete (balta/krāsaina): max 1400&nbsp;mm platums × 1300&nbsp;mm augstums</li>
                  <li>VARIO 17 Kasete (balts/krāsaina): max 1400&nbsp;mm platums × 2000&nbsp;mm augstums</li>
                  <li>VARIO 25 Uprofils Kasete (balts/krāsains): max 1400&nbsp;mm platums × 2000&nbsp;mm augstums</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Rullo sistēmas</p>
                <ul className="mt-1 space-y-1">
                  <li>VARIO 25 Rullo (balts/krāsains): max 1400&nbsp;mm platums × 3000&nbsp;mm augstums</li>
                  <li>VARIO 32 Rullo (balts/krāsains): max 1400&nbsp;mm platums × 2700&nbsp;mm augstums</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsMaxSizesOpen(false)}
                className="inline-flex items-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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
            <div className="flex items-center justify-between">
              <label htmlFor="foto-material" className="block text-sm font-medium text-gray-700">
                Izvēlieties materiālu
              </label>
            </div>
            <select
              id="foto-material"
              value={material}
              onChange={(event) => {
                const value = event.target.value
                setMaterial(value)
              }}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Izvēlieties materiālu</option>
              {FOTO_MATERIAL_OPTIONS.map((materialOption) => (
                <option key={materialOption} value={materialOption}>
                  {materialOption}
                </option>
              ))}
            </select>
            {selectedMaterial && (
              <p className="mt-2 text-xs text-gray-500">Izvēlētais materiāls: {materialDescription}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="foto-system" className="block text-sm font-medium text-gray-700">
                Izvēlēties sistēmu
              </label>
              <button
                type="button"
                onClick={() => setIsMaxSizesOpen(true)}
                className="text-xs font-medium text-sky-600 hover:text-sky-700 underline underline-offset-2"
              >
                Maksimālie izmēri
              </button>
            </div>
            <select
              id="foto-system"
              value={system}
              onChange={(event) => {
                const value = event.target.value
                setSystem(value)
              }}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Izvēlieties izmēru</option>
              {systemOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {selectedSystemVisual && (
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                <img
                  src={selectedSystemVisual.image}
                  alt={`${selectedSystemVisual.label} paraugs`}
                  className="h-24 w-32 rounded-xl object-cover shadow-sm"
                />
                <div>
                  <p className="text-sm font-medium text-sky-600">Izvēlētā sistēma</p>
                  <p className="mt-1 text-base font-semibold text-gray-900">{selectedSystemVisual.label}</p>
                </div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="foto-width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="foto-width"
                type="range"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                step={10}
                value={width}
                onChange={(event) => setWidth(clamp(Number(event.target.value), MIN_WIDTH_MM, activeMaxWidthMm))}
                className="range-input accent-sky-500"
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
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MIN_WIDTH_MM}–{activeMaxWidthMm} mm</p>
          </div>

          <div>
            <label htmlFor="foto-height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="foto-height"
                type="range"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                step={10}
                value={height}
                onChange={(event) => setHeight(clamp(Number(event.target.value), MIN_HEIGHT_MM, activeMaxHeightMm))}
                className="range-input accent-sky-500"
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
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MIN_HEIGHT_MM}–{activeMaxHeightMm} mm</p>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={includeInstallation}
              onChange={(event) => setIncludeInstallation(event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
            />
            Montāžas pakalpojumi (+{numberFormatter.format(INSTALLATION_FEE)} €)
          </label>
        </div>

        <div
          className="self-start flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-6 text-center"
          style={{ position: "sticky", top: "var(--header-offset)" }}
        >
          <div className="w-full rounded-2xl border-2 border-sky-500 bg-white px-6 py-10 shadow-sm">
            <p className="text-base font-medium text-gray-600">Cena € ar PVN:</p>
            <p className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">{result.price}</p>
          </div>
          {result.breakdown && (
            <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white/80 px-5 py-4 text-sm text-gray-700 shadow-inner">
              <dl className="space-y-2">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Žalūzijas cena</dt>
                  <dd>{formatCurrency(result.breakdown.product)}</dd>
                </div>
                {includeInstallation && (
                  <div className="flex items-center justify-between">
                    <dt className="font-medium">Montāža</dt>
                    <dd>{`+${numberFormatter.format(result.breakdown.installation)} €`}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-semibold text-gray-900">Kopā ar PVN</dt>
                  <dd className="font-semibold text-gray-900">{formatCurrency(result.breakdown.total)}</dd>
                </div>
              </dl>
            </div>
          )}
          <Link
            href={contactHref}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-sky-400 bg-white px-4 py-3 text-sm font-semibold text-sky-600 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400"
          >
            {downloadPending ? "Gatavo PDF..." : "Lejupielādēt aprēķinu"}
          </button>
          {downloadError && <p className="mt-3 text-sm text-red-600">{downloadError}</p>}
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="FotoCalculator">
            *kalkulatorā norādītā cena ir informatīva,<br />
            tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>
    </div>
  )
}
