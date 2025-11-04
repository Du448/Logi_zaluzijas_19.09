"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

const MIN_WIDTH_MM = 300
const MAX_WIDTH_MM = 2200
const MIN_HEIGHT_MM = 300
const MAX_HEIGHT_MM = 3000

const CALCULATION_HEIGHT_M = 2.5
const MIN_BILLABLE_WIDTH_M = 0.5
const MARKUP_FACTOR = 2.25 / 2.5

const SYSTEM_OPTIONS = [
  { value: "VARIO 13 Kasete (balta)", label: "Vario 13 · balta kasete" },
  { value: "VARIO 13 Kasete (krāsaina)", label: "Vario 13 · krāsaina kasete" },
  { value: "VARIO 17 Kasete (balts)", label: "Vario 17 · balta kasete" },
  { value: "VARIO 17 Kasete (krāsaina)", label: "Vario 17 · krāsaina kasete" },
  { value: "VARIO Uprofils Kasete (balts)", label: "Vario U profils · balts" },
  { value: "VARIO Uprofils Kasete (krāsains)", label: "Vario U profils · krāsains" },
] as const

type SystemOption = (typeof SYSTEM_OPTIONS)[number]

const SYSTEM_CONSTRAINTS: Record<SystemOption["value"], { maxWidthMm: number; maxHeightMm: number }> = {
  "VARIO 13 Kasete (balta)": { maxWidthMm: 1500, maxHeightMm: 1000 },
  "VARIO 13 Kasete (krāsaina)": { maxWidthMm: 1500, maxHeightMm: 1000 },
  "VARIO 17 Kasete (balts)": { maxWidthMm: 1600, maxHeightMm: 1800 },
  "VARIO 17 Kasete (krāsaina)": { maxWidthMm: 1600, maxHeightMm: 1800 },
  "VARIO Uprofils Kasete (balts)": { maxWidthMm: 1600, maxHeightMm: 1800 },
  "VARIO Uprofils Kasete (krāsains)": { maxWidthMm: 1600, maxHeightMm: 1800 },
}

const SYSTEM_IMAGES: Record<SystemOption["value"], readonly [string, string]> = {
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
}

const MATERIAL_OPTIONS = [
  { value: "BH 1300/1800", label: "BH 1300/1800" },
  { value: "BH 1500", label: "BH 1500" },
  { value: "BH10", label: "BH10" },
  { value: "BH (DK)", label: "BH (DK)" },
  { value: "BON", label: "BON" },
  { value: "ZEBRA 3100-3104", label: "ZEBRA 3100-3104" },
  { value: "ZEBRA 3105-3200", label: "ZEBRA 3105-3200" },
  { value: "ZEBRA BO", label: "ZEBRA BO" },
  { value: "LIVELLO", label: "LIVELLO" },
  { value: "BO Poem DN 721", label: "BO Poem DN 721" },
  { value: "BO Sunset DN 753", label: "BO Sunset DN 753" },
  { value: "Albedo Chik DN 6003", label: "Albedo Chik DN 6003" },
  { value: "Albedo Chik DN 6009", label: "Albedo Chik DN 6009" },
] as const

type MaterialOption = (typeof MATERIAL_OPTIONS)[number]

type PriceTable = Record<MaterialOption["value"], Record<SystemOption["value"], number>>

const PRICE_TABLE: PriceTable = {
  "BH 1300/1800": {
    "VARIO 13 Kasete (balta)": 27,
    "VARIO 13 Kasete (krāsaina)": 30,
    "VARIO 17 Kasete (balts)": 32,
    "VARIO 17 Kasete (krāsaina)": 34,
    "VARIO Uprofils Kasete (balts)": 33,
    "VARIO Uprofils Kasete (krāsains)": 35,
  },
  "BH 1500": {
    "VARIO 13 Kasete (balta)": 33,
    "VARIO 13 Kasete (krāsaina)": 36,
    "VARIO 17 Kasete (balts)": 38,
    "VARIO 17 Kasete (krāsaina)": 40,
    "VARIO Uprofils Kasete (balts)": 39,
    "VARIO Uprofils Kasete (krāsains)": 41,
  },
  BH10: {
    "VARIO 13 Kasete (balta)": 31,
    "VARIO 13 Kasete (krāsaina)": 34,
    "VARIO 17 Kasete (balts)": 36,
    "VARIO 17 Kasete (krāsaina)": 38,
    "VARIO Uprofils Kasete (balts)": 37,
    "VARIO Uprofils Kasete (krāsains)": 39,
  },
  "BH (DK)": {
    "VARIO 13 Kasete (balta)": 26,
    "VARIO 13 Kasete (krāsaina)": 29,
    "VARIO 17 Kasete (balts)": 31,
    "VARIO 17 Kasete (krāsaina)": 33,
    "VARIO Uprofils Kasete (balts)": 32,
    "VARIO Uprofils Kasete (krāsains)": 34,
  },
  BON: {
    "VARIO 13 Kasete (balta)": 41,
    "VARIO 13 Kasete (krāsaina)": 44,
    "VARIO 17 Kasete (balts)": 46,
    "VARIO 17 Kasete (krāsaina)": 48,
    "VARIO Uprofils Kasete (balts)": 47,
    "VARIO Uprofils Kasete (krāsains)": 49,
  },
  "ZEBRA 3100-3104": {
    "VARIO 13 Kasete (balta)": 32,
    "VARIO 13 Kasete (krāsaina)": 35,
    "VARIO 17 Kasete (balts)": 37,
    "VARIO 17 Kasete (krāsaina)": 39,
    "VARIO Uprofils Kasete (balts)": 38,
    "VARIO Uprofils Kasete (krāsains)": 40,
  },
  "ZEBRA 3105-3200": {
    "VARIO 13 Kasete (balta)": 39,
    "VARIO 13 Kasete (krāsaina)": 42,
    "VARIO 17 Kasete (balts)": 44,
    "VARIO 17 Kasete (krāsaina)": 46,
    "VARIO Uprofils Kasete (balts)": 45,
    "VARIO Uprofils Kasete (krāsains)": 47,
  },
  "ZEBRA BO": {
    "VARIO 13 Kasete (balta)": 48,
    "VARIO 13 Kasete (krāsaina)": 51,
    "VARIO 17 Kasete (balts)": 53,
    "VARIO 17 Kasete (krāsaina)": 55,
    "VARIO Uprofils Kasete (balts)": 54,
    "VARIO Uprofils Kasete (krāsains)": 56,
  },
  LIVELLO: {
    "VARIO 13 Kasete (balta)": 55,
    "VARIO 13 Kasete (krāsaina)": 58,
    "VARIO 17 Kasete (balts)": 60,
    "VARIO 17 Kasete (krāsaina)": 62,
    "VARIO Uprofils Kasete (balts)": 61,
    "VARIO Uprofils Kasete (krāsains)": 63,
  },
  "BO Poem DN 721": {
    "VARIO 13 Kasete (balta)": 40,
    "VARIO 13 Kasete (krāsaina)": 43,
    "VARIO 17 Kasete (balts)": 45,
    "VARIO 17 Kasete (krāsaina)": 47,
    "VARIO Uprofils Kasete (balts)": 46,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
  "BO Sunset DN 753": {
    "VARIO 13 Kasete (balta)": 40,
    "VARIO 13 Kasete (krāsaina)": 43,
    "VARIO 17 Kasete (balts)": 45,
    "VARIO 17 Kasete (krāsaina)": 47,
    "VARIO Uprofils Kasete (balts)": 46,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
  "Albedo Chik DN 6003": {
    "VARIO 13 Kasete (balta)": 40,
    "VARIO 13 Kasete (krāsaina)": 43,
    "VARIO 17 Kasete (balts)": 45,
    "VARIO 17 Kasete (krāsaina)": 47,
    "VARIO Uprofils Kasete (balts)": 46,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
  "Albedo Chik DN 6009": {
    "VARIO 13 Kasete (balta)": 40,
    "VARIO 13 Kasete (krāsaina)": 43,
    "VARIO 17 Kasete (balts)": 45,
    "VARIO 17 Kasete (krāsaina)": 47,
    "VARIO Uprofils Kasete (balts)": 46,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
}

const NOTES = [
  "* Norādītā cena ir informatīva un var atšķirties pēc precīzas uzmērīšanas.",
  "* Montāžas pakalpojumi nav iekļauti aprēķinā.",
]

const NUMBER_FORMATTER = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
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

function calculatePrice(
  material: MaterialOption["value"] | "",
  system: SystemOption["value"] | "",
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): CalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const basePrice = PRICE_TABLE[material]?.[system]
  if (!basePrice) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000

  const billableWidthM = Math.max(widthM, MIN_BILLABLE_WIDTH_M)
  const heightMultiplier = heightMm > 2000 ? 2 : heightMm > 1500 ? 1.2 : 1

  const productCost = Math.round(basePrice * CALCULATION_HEIGHT_M * billableWidthM * heightMultiplier * MARKUP_FACTOR * 1.21)
  const installationCost = 0
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

type KasetuDienaNaktsCalculatorProps = {
  title?: string
}

export default function KasetuDienaNaktsCalculator({ title }: KasetuDienaNaktsCalculatorProps) {
  const [material, setMaterial] = useState<MaterialOption["value"] | "">("")
  const [system, setSystem] = useState<SystemOption["value"] | "">("")
  const [width, setWidth] = useState(1800)
  const [height, setHeight] = useState(2100)
  const [widthInputValue, setWidthInputValue] = useState("1800")
  const [heightInputValue, setHeightInputValue] = useState("2100")
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)
  const [isMaxSizesOpen, setIsMaxSizesOpen] = useState(false)

  const availableSystems = useMemo(() => {
    if (!material) {
      return SYSTEM_OPTIONS
    }

    return SYSTEM_OPTIONS.filter((option) => PRICE_TABLE[material]?.[option.value])
  }, [material])

  const activeMaxWidthMm = useMemo(() => {
    if (!system) {
      return MAX_WIDTH_MM
    }
    const constraint = SYSTEM_CONSTRAINTS[system]
    return constraint ? constraint.maxWidthMm : MAX_WIDTH_MM
  }, [system])

  const activeMaxHeightMm = useMemo(() => {
    if (!system) {
      return MAX_HEIGHT_MM
    }
    const constraint = SYSTEM_CONSTRAINTS[system]
    return constraint ? constraint.maxHeightMm : MAX_HEIGHT_MM
  }, [system])

  useEffect(() => {
    setWidth((current) => clamp(current, MIN_WIDTH_MM, activeMaxWidthMm))
  }, [activeMaxWidthMm])

  useEffect(() => {
    setHeight((current) => clamp(current, MIN_HEIGHT_MM, activeMaxHeightMm))
  }, [activeMaxHeightMm])

  useEffect(() => {
    setWidthInputValue(width.toString())
  }, [width])

  useEffect(() => {
    setHeightInputValue(height.toString())
  }, [height])

  useEffect(() => {
    setSystem((current) => (current && availableSystems.some((option) => option.value === current) ? current : ""))
  }, [availableSystems])

  const result = useMemo(
    () => calculatePrice(material, system, width, height, includeInstallation),
    [material, system, width, height, includeInstallation],
  )

  const breakdown = result.breakdown

  const selectedSystemImages = useMemo(() => (system ? SYSTEM_IMAGES[system] : null), [system])

  const summaryText = useMemo(() => {
    if (!material || !system) {
      return null
    }

    const priceText = result?.breakdown?.total
      ? `${NUMBER_FORMATTER.format(result.breakdown.total)} €`
      : `${result?.price ?? "—"} €`

    const summaryLines = [
      "Aprēķins (kasešu \"diena/nakts\" žalūzijas):",
      `• Audums: ${MATERIAL_OPTIONS.find((option) => option.value === material)?.label ?? material}`,
      `• Sistēma: ${SYSTEM_OPTIONS.find((option) => option.value === system)?.label ?? system}`,
      `• Izmērs (mm): ${width} × ${height}`,
      `• Kopā ar PVN: ${priceText}`,
    ]

    return summaryLines.join("\n")
  }, [height, includeInstallation, material, result, system, width])

  const contactHref = summaryText ? `/kontakti?calc=${encodeURIComponent(summaryText)}` : "/kontakti"

  const handleWidthChange = (value: number) => {
    const normalized = clamp(Math.round(value), MIN_WIDTH_MM, activeMaxWidthMm)
    setWidth(normalized)
    setWidthInputValue(normalized.toString())
  }

  const handleHeightChange = (value: number) => {
    const normalized = clamp(Math.round(value), MIN_HEIGHT_MM, activeMaxHeightMm)
    setHeight(normalized)
    setHeightInputValue(normalized.toString())
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

      const logoDataUrl = await fetchImageAsDataUrl(
        "https://ik.imagekit.io/vbvwdejj5/download%20(19)%20-%20Edited%20-%20Edited.png?updatedAt=1760521246953",
      )

      const d = new Date()
      const dateStr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`

      const content: any[] = []

      if (logoDataUrl) {
        content.push({ image: logoDataUrl, fit: [120, 40], alignment: "left", margin: [0, 0, 0, 12] })
      }

      content.push(
        { text: "Cenas aprēķins – Kasešu \"Diena/Nakts\" žalūzijas", style: "h1" },
        { canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: "#e5e7eb" }] },
        { text: `\nDatums: ${dateStr}`, margin: [0, 14, 0, 0] },
        { text: "Specifikācija:", style: "sectionTitle" },
        {
          table: {
            widths: [160, "*"],
            body: [
              [
                { text: "Audums:", style: "label" },
                MATERIAL_OPTIONS.find((option) => option.value === material)?.label ?? material ?? "—",
              ],
              [
                { text: "Sistēma:", style: "label" },
                SYSTEM_OPTIONS.find((option) => option.value === system)?.label ?? system ?? "—",
              ],
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
            stack: NOTES.map((text) => ({ text, style: "notes" })),
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
          h1: { fontSize: 22, bold: true, alignment: "center", color: "#1f2937", margin: [0, 0, 0, 6] },
          sectionTitle: { fontSize: 14, bold: true, margin: [0, 14, 0, 8] },
          label: { bold: true },
          notes: { fontSize: 9, color: "#6b7280" },
          totalLabel: { bold: true, alignment: "right" },
          totalValue: { color: "#14b8a6", bold: true, fontSize: 20, alignment: "right" },
        },
        content,
      }

      pdfMake.createPdf(docDefinition).download(`kasetu-diena-nakts-aprekins-${Date.now()}.pdf`)
    } catch (error: any) {
      console.error(error)
      setDownloadError(error?.message || "Neizdevās lejupielādēt aprēķinu. Lūdzu, mēģiniet vēlreiz.")
    } finally {
      setDownloadPending(false)
    }
  }

  return (
    <div className="mt-10 w-full rounded-3xl bg-emerald-50 p-6 shadow-sm sm:p-10" data-component-name="KasetuDienaNaktsCalculator">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Cenas kalkulators</h2>
      </div>

      {isMaxSizesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="kasetu-max-sizes-title">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMaxSizesOpen(false)} />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 id="kasetu-max-sizes-title" className="text-lg font-semibold text-gray-900">
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
                <p className="font-medium text-gray-900">Vario 13</p>
                <p>Platums līdz 1500&nbsp;mm. Augstums līdz 1000&nbsp;mm.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Vario 17</p>
                <p>Platums līdz 1600&nbsp;mm. Augstums līdz 1800&nbsp;mm.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Vario U profils</p>
                <p>Platums līdz 1600&nbsp;mm. Augstums līdz 1800&nbsp;mm.</p>
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
            <label htmlFor="kasetu-material" className="block text-sm font-medium text-gray-700">
              Izvēlieties auduma kolekciju
            </label>
            <select
              id="kasetu-material"
              value={material}
              onChange={(event) => setMaterial(event.target.value as MaterialOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties audumu</option>
              {MATERIAL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="kasetu-system" className="block text-sm font-medium text-gray-700">
                Izvēlieties sistēmu
              </label>
              <button
                type="button"
                onClick={() => setIsMaxSizesOpen(true)}
                className="text-xs font-medium text-emerald-600 underline underline-offset-2 hover:text-emerald-700"
              >
                Maksimālie izmēri
              </button>
            </div>
            <select
              id="kasetu-system"
              value={system}
              onChange={(event) => setSystem(event.target.value as SystemOption["value"])}
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
            <label htmlFor="kasetu-width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="kasetu-width"
                type="range"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                step={10}
                value={width}
                onChange={(event) => handleWidthChange(Number(event.target.value))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                value={widthInputValue}
                onChange={(event) => {
                  setWidthInputValue(event.target.value)
                }}
                onBlur={(event) => {
                  const rawValue = event.currentTarget.value.trim()
                  if (!rawValue) {
                    setWidthInputValue(width.toString())
                    return
                  }
                  const parsedValue = Number(rawValue)
                  if (Number.isNaN(parsedValue)) {
                    setWidthInputValue(width.toString())
                    return
                  }
                  handleWidthChange(parsedValue)
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault()
                    event.currentTarget.blur()
                  }
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MIN_WIDTH_MM}–{activeMaxWidthMm} mm</p>
          </div>

          <div>
            <label htmlFor="kasetu-height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="kasetu-height"
                type="range"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                step={10}
                value={height}
                onChange={(event) => handleHeightChange(Number(event.target.value))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                value={heightInputValue}
                onChange={(event) => {
                  setHeightInputValue(event.target.value)
                }}
                onBlur={(event) => {
                  const rawValue = event.currentTarget.value.trim()
                  if (!rawValue) {
                    setHeightInputValue(height.toString())
                    return
                  }
                  const parsedValue = Number(rawValue)
                  if (Number.isNaN(parsedValue)) {
                    setHeightInputValue(height.toString())
                    return
                  }
                  handleHeightChange(parsedValue)
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault()
                    event.currentTarget.blur()
                  }
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

        <div className="self-start flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-emerald-100">
          <div className="w-full rounded-2xl border-2 border-emerald-500 bg-emerald-50 px-6 py-10 shadow-sm">
            <p className="text-base font-medium text-gray-600">Cena € ar PVN:</p>
            <p className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">{result.price}</p>
          </div>
          {breakdown && (
            <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white/80 px-5 py-4 text-sm text-gray-700 shadow-inner">
              <dl className="space-y-2">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Žalūzijas cena</dt>
                  <dd>{NUMBER_FORMATTER.format(breakdown.product)} €</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-semibold text-gray-900">Kopā ar PVN</dt>
                  <dd className="font-semibold text-gray-900">{NUMBER_FORMATTER.format(breakdown.total)} €</dd>
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
            Pēc pieteikuma saņemšanas mūsu speciālists sazināsies 1 darba dienas laikā.
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
          <p className="mt-4 w-full text-left text-xs text-gray-500">
            * Aprēķins ir informatīvs, gala cena tiek precizēta pēc speciālista vizītes un izvēlētajiem risinājumiem.
          </p>
        </div>
      </div>
    </div>
  )
}
