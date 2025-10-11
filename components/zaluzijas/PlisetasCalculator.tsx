"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"

const APP_VERSION = "1.0"

const MIN_WIDTH_MM = 200
const MAX_WIDTH_MM = 1500
const MIN_HEIGHT_MM = 200
const MAX_HEIGHT_MM = 2000

const INSTALLATION_FEE = 20

const PLISETAS_SYSTEM_OPTIONS = [
  { value: "Anthracite", label: "Anthracite" },
  { value: "Anodisedblack", label: "Anodisedblack" },
  { value: "Anodisedilver", label: "Anodisedilver" },
  { value: "Beige", label: "Beige" },
  { value: "Mahogany", label: "Mahogany" },
  { value: "Brown", label: "Brown" },
  { value: "Goldenoak", label: "Goldenoak" },
  { value: "Walnut", label: "Walnut" },
  { value: "Winchester", label: "Winchester" },
  { value: "Swampoak", label: "Swampoak" },
  { value: "White", label: "White" },
] as const

type SystemOption = (typeof PLISETAS_SYSTEM_OPTIONS)[number]

const PLISETAS_SYSTEM_IMAGES: Record<SystemOption["value"], readonly [string, string]> = {
  Anthracite: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Anthracite.png",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Anthracite_S.png",
  ],
  Anodisedblack: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Anodised_black.png",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Anodised_black_S.png",
  ],
  Anodisedilver: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Anodised_silver.png",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Anodised_silver_S.png",
  ],
  Beige: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Beige.png",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Beige_s.png",
  ],
  Mahogany: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/Mahogany.png?updatedAt=1760180680559",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/Mahogany_S.png?updatedAt=1760180680470",
  ],
  Brown: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/Brown_SS.png?updatedAt=1760183183005",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/Brown.png?updatedAt=1760180680555",
  ],
  Goldenoak: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/Golden_oak.png?updatedAt=1760183005174",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/Golden_oak_S.png?updatedAt=1760196682692",
  ],
  Walnut: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Walnut.png",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Walnut_S.png",
  ],
  Winchester: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Winchester.png",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Winchester_S.png",
  ],
  Swampoak: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Swamp_oak.png",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plisētās/Swamp_oak_S.png",
  ],
  White: [
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/White.png?updatedAt=1760180680612",
    "https://ik.imagekit.io/vbvwdejj5/zmk/Plis%C4%93t%C4%81s/White_S.png?updatedAt=1760180680713",
  ],
}

type PlisetasMaterial = {
  code: string
  name: string
  catalogCode?: string
  pricePerSquareMeter: number
}

type PlisetasMaterialGroup = {
  label: string
  materials: PlisetasMaterial[]
}

const STOCK_MATERIALS: PlisetasMaterial[] = [
  { code: "stock-florence", name: "Florence", pricePerSquareMeter: 44.38 },
  { code: "stock-capri-i", name: "Capri I", pricePerSquareMeter: 44.38 },
  { code: "stock-capri-ii", name: "Capri II", pricePerSquareMeter: 44.38 },
  { code: "stock-fiore", name: "Fiore", pricePerSquareMeter: 44.38 },
  { code: "stock-ferrara-i", name: "Ferrara I", pricePerSquareMeter: 44.38 },
  { code: "stock-ferrara-ii", name: "Ferrara II", pricePerSquareMeter: 44.38 },
  { code: "stock-palermo", name: "Palermo", pricePerSquareMeter: 44.38 },
  { code: "stock-rimini", name: "Rimini", pricePerSquareMeter: 51.42 },
  { code: "stock-verona", name: "Verona", pricePerSquareMeter: 51.42 },
  { code: "stock-siena", name: "Siena", pricePerSquareMeter: 51.42 },
  { code: "stock-trani", name: "Trani", pricePerSquareMeter: 51.42 },
  { code: "stock-palermo-ii", name: "Palermo II", pricePerSquareMeter: 51.42 },
  { code: "stock-cortina-ii", name: "Cortina II", pricePerSquareMeter: 57.9 },
  { code: "stock-modena", name: "Modena", pricePerSquareMeter: 57.9 },
  { code: "stock-sala-ii", name: "Sala II", pricePerSquareMeter: 57.9 },
  { code: "stock-nuevo-ii", name: "Nuevo II", pricePerSquareMeter: 57.9 },
  { code: "stock-formosa", name: "Formosa", pricePerSquareMeter: 57.9 },
  { code: "stock-andria", name: "Andria", pricePerSquareMeter: 57.9 },
  { code: "stock-cortina", name: "Cortina", catalogCode: "7693, 7694, 7701, 7695, 7699", pricePerSquareMeter: 57.9 },
  { code: "stock-cortina-2700", name: "Cortina", catalogCode: "2700", pricePerSquareMeter: 57.9 },
  { code: "stock-nuevo-i", name: "Nuevo I", pricePerSquareMeter: 75.5 },
  { code: "stock-cortina-78xx", name: "Cortina", catalogCode: "7815, 7805, 7821, 7750", pricePerSquareMeter: 75.5 },
  { code: "stock-cortina-9030", name: "Cortina", catalogCode: "9030", pricePerSquareMeter: 75.5 },
  { code: "stock-nuevo-i-95x", name: "Nuevo I", catalogCode: "951, 952, 953", pricePerSquareMeter: 75.5 },
  { code: "stock-nuevo-i-1341", name: "Nuevo I", catalogCode: "1341", pricePerSquareMeter: 75.5 },
  { code: "stock-sala", name: "Sala", pricePerSquareMeter: 75.5 },
  { code: "stock-nuevo-i-2062", name: "Nuevo I", catalogCode: "2062", pricePerSquareMeter: 90.92 },
  { code: "stock-nuevo-i-548x", name: "Nuevo I", catalogCode: "5483, 5484", pricePerSquareMeter: 90.92 },
  { code: "stock-cortina-1300", name: "Cortina", catalogCode: "1300", pricePerSquareMeter: 90.92 },
]

const ORDER_MATERIALS: PlisetasMaterial[] = [
  { code: "order-andria", name: "Andria", catalogCode: "2-6732, 2-10471, 2-6737", pricePerSquareMeter: 46.79 },
  { code: "order-cortina", name: "Cortina", catalogCode: "3-7750", pricePerSquareMeter: 53.33 },
  { code: "order-florence", name: "Florence", catalogCode: "0-19179, 0-12371", pricePerSquareMeter: 29.31 },
  { code: "order-fiore", name: "Fiore", catalogCode: "0-10459, 0-7234, 0-10457", pricePerSquareMeter: 37.5 },
  { code: "order-modena", name: "Modena", catalogCode: "2-7020", pricePerSquareMeter: 30.12 },
  { code: "order-rimini", name: "Rimini", catalogCode: "1-4030", pricePerSquareMeter: 32.85 },
  { code: "order-verona", name: "Verona", catalogCode: "1-8090", pricePerSquareMeter: 56.57 },
  { code: "order-nuevo-ii", name: "Nuevo II", catalogCode: "2-2276, 2-2295, 2-9154, 2-9155, 2-5722", pricePerSquareMeter: 28.56 },
  { code: "order-nuevo-iii", name: "Nuevo III", catalogCode: "2-6070, 2-6010", pricePerSquareMeter: 26.61 },
  { code: "order-formosa", name: "Formosa", catalogCode: "2-7011, 2-7078, 2-5176", pricePerSquareMeter: 42 },
  { code: "order-sala", name: "Sala", catalogCode: "3-7640, 3-7642, 3-10655, 3-10241", pricePerSquareMeter: 62.24 },
]

const MATERIAL_GROUPS: PlisetasMaterialGroup[] = [
  { label: "Uz Pasūtījumu", materials: STOCK_MATERIALS },
  { label: "Ir noliktavā", materials: ORDER_MATERIALS },
]

const ALL_PLISETAS_MATERIALS = MATERIAL_GROUPS.flatMap((group) => group.materials)

const PLISETAS_MATERIAL_LOOKUP = ALL_PLISETAS_MATERIALS.reduce<Record<string, PlisetasMaterial>>((acc, material) => {
  acc[material.code] = material
  return acc
}, {})

type Constraint = {
  maxWidth: number
  maxHeight: number
}

const PLISETAS_CONSTRAINTS: Record<string, Constraint> = {
  "VARIO 13 Kasete (balta)": { maxWidth: 3, maxHeight: 3.5 },
  "VARIO 17 Kasete (balts)": { maxWidth: 3, maxHeight: 3.5 },
}

type PriceBreakdown = {
  product: number
  installation: number
  total: number
}

type CalculationResult = {
  price: string
  isValid: boolean
  breakdown: PriceBreakdown | null
}

const numberFormatter = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function formatMaterialDescription(material: PlisetasMaterial | null): string {
  if (!material) {
    return ""
  }

  const parts: string[] = [material.name]
  if (material.catalogCode) {
    parts.push(`kods: ${material.catalogCode}`)
  }
  return parts.join(" · ")
}

function formatMaterialSummary(material: PlisetasMaterial | null): string {
  if (!material) {
    return ""
  }

  const parts: string[] = [formatMaterialDescription(material)]
  parts.push(`${numberFormatter.format(material.pricePerSquareMeter)} €/m²`)
  return parts.join(" · ")
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function calculatePrice(
  materialCode: string,
  system: string,
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): CalculationResult {
  if (!materialCode || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const materialEntry = PLISETAS_MATERIAL_LOOKUP[materialCode]
  const basePrice = materialEntry?.pricePerSquareMeter
  if (typeof basePrice !== "number") {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000

  const area = Math.max(widthM * heightM, 0.75)
  const cost = area * basePrice

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

type PlisetasCalculatorProps = {
  title?: string
}

export default function PlisetasCalculator({ title }: PlisetasCalculatorProps) {
  const [materialCode, setMaterialCode] = useState("")
  const [system, setSystem] = useState("")
  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState(1000)
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)
  const [isMaxSizesOpen, setIsMaxSizesOpen] = useState(false)

  const calculatorRef = useRef<HTMLDivElement>(null)
  const sectionRefs = {
    material: useRef<HTMLDivElement>(null),
    system: useRef<HTMLDivElement>(null),
    width: useRef<HTMLDivElement>(null),
    height: useRef<HTMLDivElement>(null),
  }

  const systemOptions = useMemo(() => PLISETAS_SYSTEM_OPTIONS, [])

  const selectedSystemImages = useMemo(() => {
    if (!system) {
      return null
    }
    const images = PLISETAS_SYSTEM_IMAGES[system as SystemOption["value"]]
    return images ?? null
  }, [system])

  const activeMaxWidthMm = useMemo(() => {
    if (!system) {
      return MAX_WIDTH_MM
    }
    const constraint = PLISETAS_CONSTRAINTS[system as SystemOption["value"]]
    if (!constraint) {
      return MAX_WIDTH_MM
    }
    return Math.min(Math.floor(constraint.maxWidth * 1000), MAX_WIDTH_MM)
  }, [system])

  const activeMaxHeightMm = useMemo(() => {
    if (!system) {
      return MAX_HEIGHT_MM
    }
    const constraint = PLISETAS_CONSTRAINTS[system as SystemOption["value"]]
    if (!constraint) {
      return MAX_HEIGHT_MM
    }
    return Math.min(Math.floor(constraint.maxHeight * 1000), MAX_HEIGHT_MM)
  }, [system])

  useEffect(() => {
    setWidth((current) => clamp(current, MIN_WIDTH_MM, activeMaxWidthMm))
  }, [activeMaxWidthMm])

  useEffect(() => {
    setHeight((current) => clamp(current, MIN_HEIGHT_MM, activeMaxHeightMm))
  }, [activeMaxHeightMm])

  useEffect(() => {
    setSystem("")
  }, [materialCode])

  const selectedMaterial = useMemo(
    () => (materialCode ? PLISETAS_MATERIAL_LOOKUP[materialCode] ?? null : null),
    [materialCode],
  )

  const materialLabel = selectedMaterial ? formatMaterialDescription(selectedMaterial) : "Nav izvēlēts"
  const materialSummary = selectedMaterial ? formatMaterialSummary(selectedMaterial) : materialCode

  const result = useMemo(
    () => calculatePrice(materialCode, system, width, height, includeInstallation),
    [materialCode, system, width, height, includeInstallation],
  )

  const formatCurrency = (value: number) => `${numberFormatter.format(value)} €`

  const handleScrollToFabricCatalog = () => {
    const el = document.getElementById("plisetas-fabric-catalog")
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "center" })
    el.classList.add("ring-4", "ring-sky-400", "animate-pulse")
    window.setTimeout(() => {
      el.classList.remove("ring-4", "ring-sky-400", "animate-pulse")
    }, 2200)
  }

  const handleWidthChange = (value: number) => {
    setWidth(clamp(Math.round(value), MIN_WIDTH_MM, activeMaxWidthMm))
  }

  const handleHeightChange = (value: number) => {
    setHeight(clamp(Math.round(value), MIN_HEIGHT_MM, activeMaxHeightMm))
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

      const content: any[] = [
        { text: "Cenas Aprēķins", style: "h1" },
        { text: `Plisēto žalūziju kalkulators v${APP_VERSION}`, style: "sub" },
        { canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: "#e5e7eb" }] },
        { text: `\nDatums: ${dateStr}`, margin: [0, 14, 0, 0] },
        { text: "Specifikācija:", style: "sectionTitle" },
        {
          table: {
            widths: [120, "*"],
            body: [
              [{ text: "Materiāls:", style: "label" }, materialSummary || "Nav izvēlēts"],
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
              margin: [0, 0, 0, 0],
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

      pdfMake.createPdf(docDefinition).download(`plisetu-zaluziju-aprekins-${Date.now()}.pdf`)
    } catch (error: any) {
      console.error(error)
      setDownloadError(error?.message || "Neizdevās lejupielādēt aprēķinu. Lūdzu, mēģiniet vēlreiz.")
    } finally {
      setDownloadPending(false)
    }
  }

  const summaryText = useMemo(() => {
    if (!materialCode || !system) {
      return null
    }
    const install = includeInstallation ? "Jā" : "Nē"
    const priceText = result?.breakdown?.total
      ? `${numberFormatter.format(result.breakdown.total)} €`
      : `${result?.price ?? "—"} €`

    return [
      "Aprēķins (plisētas):",
      `• Materiāls: ${materialSummary || materialLabel}`,
      `• Sistēma: ${system}`,
      `• Izmērs (mm): ${width} x ${height}`,
      `• Montāža: ${install}`,
      `• Kopā ar PVN: ${priceText}`,
    ].join("\n")
  }, [height, includeInstallation, materialCode, materialLabel, materialSummary, result, system, width])

  const contactHref = summaryText ? `/kontakti?calc=${encodeURIComponent(summaryText)}` : "/kontakti"

  return (
    <div
      ref={calculatorRef}
      className="w-full rounded-3xl bg-sky-50 p-6 shadow-sm sm:p-10"
      data-component-name="PlisetasCalculator"
      id="plisetas-calculator"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title ?? "Plisēto žalūziju kalkulators"}</h2>
      </div>

      {isMaxSizesOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="plisetas-max-sizes-title"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMaxSizesOpen(false)} />
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 id="plisetas-max-sizes-title" className="text-lg font-semibold text-gray-900">
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
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>Žalūziju maksimālais platums - 1,50 m.</p>
              <p>Žalūziju maksimālais augstums – 2,00 m.</p>
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
          <div ref={sectionRefs.material}>
            <div className="flex items-center justify-between">
              <label htmlFor="plisetas-material" className="block text-sm font-medium text-gray-700">
                Izvēlieties materiālu
              </label>
              <button
                type="button"
                onClick={handleScrollToFabricCatalog}
                className="text-xs font-medium text-sky-600 hover:text-sky-700 underline underline-offset-2"
              >
                Audumu katalogs
              </button>
            </div>
            <select
              id="plisetas-material"
              value={materialCode}
              onChange={(event) => {
                const v = event.target.value
                setMaterialCode(v)
              }}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Izvēlieties materiālu</option>
              {MATERIAL_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.materials.map((materialOption) => (
                    <option key={materialOption.code} value={materialOption.code}>
                      {formatMaterialDescription(materialOption)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {selectedMaterial && (
              <p className="mt-2 text-xs text-gray-500">Izvēlētais materiāls: {materialLabel}</p>
            )}
          </div>

          <div ref={sectionRefs.system}>
            <div className="flex items-center justify-between">
              <label htmlFor="plisetas-system" className="block text-sm font-medium text-gray-700">
                Izvēlēties profila krāsu
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
              id="plisetas-system"
              value={system}
              onChange={(event) => {
                const v = event.target.value
                setSystem(v)
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
            {selectedSystemImages && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {selectedSystemImages.map((imageUrl, index) => (
                  <div key={`${system}-${index}`} className="overflow-hidden rounded-xl border border-gray-200">
                    <img
                      src={imageUrl}
                      alt={`${system} profila krāsa ${index === 0 ? "skatījums" : "detalizēts skatījums"}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div ref={sectionRefs.width}>
            <label htmlFor="plisetas-width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="plisetas-width"
                type="range"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                step={10}
                value={width}
                onChange={(event) => handleWidthChange(Number(event.target.value))}
                className="range-input accent-sky-500"
              />
              <input
                type="number"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                value={width}
                onChange={(event) => {
                  if (event.target.value === "") return
                  handleWidthChange(Number(event.target.value))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MIN_WIDTH_MM}–{activeMaxWidthMm} mm</p>
          </div>

          <div ref={sectionRefs.height}>
            <label htmlFor="plisetas-height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="plisetas-height"
                type="range"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                step={10}
                value={height}
                onChange={(event) => handleHeightChange(Number(event.target.value))}
                className="range-input accent-sky-500"
              />
              <input
                type="number"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                value={height}
                onChange={(event) => {
                  if (event.target.value === "") return
                  handleHeightChange(Number(event.target.value))
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
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="PlisetasCalculator">
            *kalkulatorā norādītā cena ir informatīva,<br />
            tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>
    </div>
  )
}
