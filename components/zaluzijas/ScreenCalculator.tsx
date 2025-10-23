"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"

const SCREEN_APP_VERSION = "1.0"

const MIN_WIDTH_MM = 300
const MAX_WIDTH_MM = 3000
const MIN_HEIGHT_MM = 300
const MAX_HEIGHT_MM = 3500

const INSTALLATION_FEE = 25
const SCREEN_CALCULATION_HEIGHT_M = 2.5
const SCREEN_MIN_BILLABLE_WIDTH_M = 0.5

const SCREEN_SYSTEM_OPTIONS = [
  { value: "VARIO 13 Kasete (balta)", label: "VARIO 13 Kasete (balta)" },
  { value: "VARIO 13 Kasete (krāsaina)", label: "VARIO 13 Kasete (krāsaina)" },
  { value: "VARIO 17 Kasete (balts)", label: "VARIO 17 Kasete (balts)" },
  { value: "VARIO 17 Kasete (krāsaina)", label: "VARIO 17 Kasete (krāsaina)" },
  { value: "VARIO Uprofils Kasete (balts)", label: "VARIO Uprofils Kasete (balts)" },
  { value: "VARIO Uprofils Kasete (krāsains)", label: "VARIO Uprofils Kasete (krāsains)" },
  { value: "VARIO 25 Rullo (balts)", label: "VARIO 25 Rullo (balts)" },
  { value: "VARIO 25 Rullo (krāsains)", label: "VARIO 25 Rullo (krāsains)" },
  { value: "VARIO 32 Rullo (balts)", label: "VARIO 32 Rullo (balts)" },
  { value: "VARIO 32 Rullo (krāsains)", label: "VARIO 32 Rullo (krāsains)" },
] as const

type ScreenSystemOption = (typeof SCREEN_SYSTEM_OPTIONS)[number]

const SCREEN_SYSTEM_CONSTRAINTS: Record<ScreenSystemOption["value"], { maxWidthMm: number; maxHeightMm: number }> = {
  "VARIO 13 Kasete (balta)": { maxWidthMm: 1500, maxHeightMm: 1300 },
  "VARIO 13 Kasete (krāsaina)": { maxWidthMm: 1500, maxHeightMm: 1300 },
  "VARIO 17 Kasete (balts)": { maxWidthMm: 1600, maxHeightMm: 2000 },
  "VARIO 17 Kasete (krāsaina)": { maxWidthMm: 1600, maxHeightMm: 2000 },
  "VARIO Uprofils Kasete (balts)": { maxWidthMm: 1600, maxHeightMm: 2000 },
  "VARIO Uprofils Kasete (krāsains)": { maxWidthMm: 1600, maxHeightMm: 2000 },
  "VARIO 25 Rullo (balts)": { maxWidthMm: 2200, maxHeightMm: 3000 },
  "VARIO 25 Rullo (krāsains)": { maxWidthMm: 2200, maxHeightMm: 3000 },
  "VARIO 32 Rullo (balts)": { maxWidthMm: 2200, maxHeightMm: 2700 },
  "VARIO 32 Rullo (krāsains)": { maxWidthMm: 2200, maxHeightMm: 2700 },
}

const SCREEN_SYSTEM_IMAGES: Record<ScreenSystemOption["value"], readonly [string, string]> = {
  "VARIO 13 Kasete (balta)": [
    "https://ik.imagekit.io/vbvwdejj5/VARIO%2013.jpg?updatedAt=1759775255507",
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario13_rieksts.png?updatedAt=1759842314637",
  ],
  "VARIO 13 Kasete (krāsaina)": [
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario13_rieksts.png?updatedAt=1759842314637",
    "https://ik.imagekit.io/vbvwdejj5/VARIO%2013.jpg?updatedAt=1759775255507",
  ],
  "VARIO 17 Kasete (balts)": [
    "https://ik.imagekit.io/vbvwdejj5/Vario%2017.jpg?updatedAt=1759775255627",
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/b_ZF_roleta_materialowa_vario_17_.jpg?updatedAt=1756983418102",
  ],
  "VARIO 17 Kasete (krāsaina)": [
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario17_rieksts.png?updatedAt=1759842314022",
    "https://ik.imagekit.io/vbvwdejj5/Vario%2017.jpg?updatedAt=1759775255627",
  ],
  "VARIO Uprofils Kasete (balts)": [
    "https://ik.imagekit.io/vbvwdejj5/U%20profile.jpg?updatedAt=1759775255787",
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario25_uprof_rieksts.png?updatedAt=1759842315200",
  ],
  "VARIO Uprofils Kasete (krāsains)": [
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario25_uprof_rieksts.png?updatedAt=1759842315200",
    "https://ik.imagekit.io/vbvwdejj5/U%20profile.jpg?updatedAt=1759775255787",
  ],
  "VARIO 25 Rullo (balts)": [
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_grand_rolety_duze%20(1).jpg?updatedAt=1759924549864",
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_atvertais.png?updatedAt=1759924551068",
  ],
  "VARIO 25 Rullo (krāsains)": [
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_atvertais.png?updatedAt=1759924551068",
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_grand_rolety_duze%20(1).jpg?updatedAt=1759924549864",
  ],
  "VARIO 32 Rullo (balts)": [
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_vario_32_plus_4%20(2).jpg?updatedAt=1759924549789",
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_daleji%20slegtais.png?updatedAt=1759924550543",
  ],
  "VARIO 32 Rullo (krāsains)": [
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_daleji%20slegtais.png?updatedAt=1759924550543",
    "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_vario_32_plus_4%20(2).jpg?updatedAt=1759924549789",
  ],
}

const SCREEN_MATERIAL_OPTIONS = [
  { value: "Screen 1%", label: "Screen 1%" },
  { value: "Screen 3%", label: "Screen 3%" },
  { value: "Screen 5%", label: "Screen 5%" },
] as const

type ScreenMaterialOption = (typeof SCREEN_MATERIAL_OPTIONS)[number]

type ScreenPriceTable = Record<ScreenMaterialOption["value"], Record<ScreenSystemOption["value"], number>>

const SCREEN_PRICE_TABLE: ScreenPriceTable = {
  "Screen 1%": {
    "VARIO 13 Kasete (balta)": 32,
    "VARIO 13 Kasete (krāsaina)": 35,
    "VARIO 17 Kasete (balts)": 37,
    "VARIO 17 Kasete (krāsaina)": 39,
    "VARIO Uprofils Kasete (balts)": 38,
    "VARIO Uprofils Kasete (krāsains)": 40,
    "VARIO 25 Rullo (balts)": 39,
    "VARIO 25 Rullo (krāsains)": 42,
    "VARIO 32 Rullo (balts)": 42,
    "VARIO 32 Rullo (krāsains)": 45,
  },
  "Screen 3%": {
    "VARIO 13 Kasete (balta)": 32,
    "VARIO 13 Kasete (krāsaina)": 35,
    "VARIO 17 Kasete (balts)": 37,
    "VARIO 17 Kasete (krāsaina)": 39,
    "VARIO Uprofils Kasete (balts)": 38,
    "VARIO Uprofils Kasete (krāsains)": 40,
    "VARIO 25 Rullo (balts)": 39,
    "VARIO 25 Rullo (krāsains)": 42,
    "VARIO 32 Rullo (balts)": 42,
    "VARIO 32 Rullo (krāsains)": 45,
  },
  "Screen 5%": {
    "VARIO 13 Kasete (balta)": 32,
    "VARIO 13 Kasete (krāsaina)": 35,
    "VARIO 17 Kasete (balts)": 37,
    "VARIO 17 Kasete (krāsaina)": 39,
    "VARIO Uprofils Kasete (balts)": 38,
    "VARIO Uprofils Kasete (krāsains)": 40,
    "VARIO 25 Rullo (balts)": 39,
    "VARIO 25 Rullo (krāsains)": 42,
    "VARIO 32 Rullo (balts)": 42,
    "VARIO 32 Rullo (krāsains)": 45,
  },
}

const SCREEN_NOTES = [
  "* Šis ir informatīvs cenas aprēķins. Gala cena var atšķirties.",
  "* Montāžas pakalpojumi nav iekļauti cenā.",
]

const SCREEN_NUMBER_FORMATTER = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

type ScreenCalculationResult = {
  price: string
  isValid: boolean
  breakdown: {
    product: number
    installation: number
    total: number
  } | null
}

function calculateScreenPrice(
  material: ScreenMaterialOption["value"] | "",
  system: ScreenSystemOption["value"] | "",
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): ScreenCalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const basePrice = SCREEN_PRICE_TABLE[material]?.[system]
  if (!basePrice) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000

  const billableWidthM = Math.max(widthM, SCREEN_MIN_BILLABLE_WIDTH_M)
  const heightMultiplier = heightM > 2 ? 1.5 : heightM > 1.5 ? 1.2 : 1

  const productCost = Math.round(basePrice * SCREEN_CALCULATION_HEIGHT_M * billableWidthM * heightMultiplier * 1.21)
  const installationCost = includeInstallation ? INSTALLATION_FEE : 0
  const total = productCost + installationCost

  return {
    price: SCREEN_NUMBER_FORMATTER.format(total),
    isValid: true,
    breakdown: {
      product: productCost,
      installation: installationCost,
      total,
    },
  }
}

type ScreenCalculatorProps = {
  title?: string
}

export default function ScreenCalculator({ title }: ScreenCalculatorProps) {
  const [material, setMaterial] = useState<ScreenMaterialOption["value"] | "">("")
  const [system, setSystem] = useState<ScreenSystemOption["value"] | "">("")
  const [width, setWidth] = useState(2000)
  const [height, setHeight] = useState(2200)
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)
  const [isMaxSizesOpen, setIsMaxSizesOpen] = useState(false)

  const calculatorRef = useRef<HTMLDivElement>(null)

  const availableSystems = useMemo(() => {
    if (!material) {
      return SCREEN_SYSTEM_OPTIONS
    }

    return SCREEN_SYSTEM_OPTIONS.filter((option) => SCREEN_PRICE_TABLE[material]?.[option.value])
  }, [material])

  const activeMaxWidthMm = useMemo(() => {
    if (!system) {
      return MAX_WIDTH_MM
    }
    const constraint = SCREEN_SYSTEM_CONSTRAINTS[system]
    return constraint ? constraint.maxWidthMm : MAX_WIDTH_MM
  }, [system])

  const activeMaxHeightMm = useMemo(() => {
    if (!system) {
      return MAX_HEIGHT_MM
    }
    const constraint = SCREEN_SYSTEM_CONSTRAINTS[system]
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
    () => calculateScreenPrice(material, system, width, height, false),
    [material, system, width, height],
  )

  const breakdown = result.breakdown

  const selectedSystemImages = useMemo(() => (system ? SCREEN_SYSTEM_IMAGES[system] : null), [system])

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

      const resolveVfs = (candidate: unknown): Record<string, string> | null => {
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
            const keys = Object.keys(vfs as Record<string, unknown>)
            if (keys.length > 0 && keys.every((key) => key.endsWith(".ttf"))) {
              return vfs as Record<string, string>
            }
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

      const fetchImageAsDataUrl = async (src: string): Promise<string | null> => {
        try {
          const res = await fetch(src)
          if (!res.ok) {
            return null
          }
          const blob = await res.blob()
          return await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result as string)
            reader.onerror = () => reject(new Error("Neizdevās nolasīt attēlu."))
            reader.readAsDataURL(blob)
          })
        } catch (_) {
          return null
        }
      }

      let systemImageDataUrl: string | null = null
      if (selectedSystemImages?.length) {
        for (const src of selectedSystemImages) {
          const dataUrl = await fetchImageAsDataUrl(src)
          if (dataUrl) {
            systemImageDataUrl = dataUrl
            break
          }
        }
      }

      const logoDataUrl = await fetchImageAsDataUrl("https://ik.imagekit.io/vbvwdejj5/download%20(19)%20-%20Edited%20-%20Edited.png?updatedAt=1760521246953")

      const d = new Date()
      const dateStr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`

      const content: any[] = []

      if (logoDataUrl) {
        content.push({ image: logoDataUrl, fit: [120, 40], alignment: "left", margin: [0, 0, 0, 12] })
      }

      content.push(
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
      )

      const imageSize = { width: 160, height: 120 }

      if (systemImageDataUrl) {
        content.push({ text: "\n" })
        content.push({
          columns: [{ image: systemImageDataUrl, ...imageSize }],
          columnGap: 16,
        })
      }

      content.push({ text: "\n" })
      content.push({ canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.8, lineColor: "#e5e7eb" }] })
      content.push({
        columns: [
          {
            stack: SCREEN_NOTES.map((text) => ({ text, style: "notes" })),
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

      pdfMake.createPdf(docDefinition).download(`screen-zaluziju-aprekins-${Date.now()}.pdf`)
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
      ? `${SCREEN_NUMBER_FORMATTER.format(result.breakdown.total)} €`
      : `${result?.price ?? "—"} €`

    return [
      "Aprēķins (screen žalūzijas):",
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
      data-component-name="ScreenCalculator"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title ?? "Screen žalūziju kalkulators"}</h2>
      </div>

      {isMaxSizesOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="screen-max-sizes-title"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMaxSizesOpen(false)} />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 id="screen-max-sizes-title" className="text-lg font-semibold text-gray-900">
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
            <label htmlFor="screen-material" className="block text-sm font-medium text-gray-700">
              Izvēlieties materiālu
            </label>
            <select
              id="screen-material"
              value={material}
              onChange={(event) => setMaterial(event.target.value as ScreenMaterialOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties materiālu</option>
              {SCREEN_MATERIAL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="screen-system" className="block text-sm font-medium text-gray-700">
                Izvēlēties sistēmu
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
              id="screen-system"
              value={system}
              onChange={(event) => setSystem(event.target.value as ScreenSystemOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties sistēmu</option>
              {availableSystems.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {selectedSystemImages?.[0] && (
              <div className="mt-4 flex justify-center">
                <div className="relative h-32 w-full max-w-sm overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src={selectedSystemImages[0]}
                    alt={`${system} paraugs`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 320px, 100vw"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="screen-width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="screen-width"
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
            <label htmlFor="screen-height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="screen-height"
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
            Nepieciešama montāža
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
          {breakdown && (
            <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white/80 px-5 py-4 text-sm text-gray-700 shadow-inner">
              <dl className="space-y-2">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Žalūzijas cena</dt>
                  <dd>{SCREEN_NUMBER_FORMATTER.format(breakdown.product)} €</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-semibold text-gray-900">Kopā ar PVN</dt>
                  <dd className="font-semibold text-gray-900">{SCREEN_NUMBER_FORMATTER.format(breakdown.total)} €</dd>
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
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="ScreenCalculator">
            *kalkulatorā norādītā cena ir informatīva,<br />
            tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>
    </div>
  )
}
