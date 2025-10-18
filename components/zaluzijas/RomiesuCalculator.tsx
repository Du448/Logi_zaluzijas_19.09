"use client"

import Link from "next/link"
import { getGridPrice, getTariffSizeCm, gridEnabledMaterials } from "@/lib/romiesu-grid"
import { useEffect, useMemo, useRef, useState } from "react"

const ROMIESU_APP_VERSION = "1.0"

const MIN_WIDTH_MM = 400
const MAX_WIDTH_MM = 3000
const MIN_HEIGHT_MM = 400
const MAX_HEIGHT_MM = 3500

const ROMIESU_INSTALLATION_FEE = 25

const ROMIESU_SYSTEM_OPTIONS = [
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

type RomiesuSystemOption = (typeof ROMIESU_SYSTEM_OPTIONS)[number]

const ROMIESU_SYSTEM_CONSTRAINTS: Record<RomiesuSystemOption["value"], { maxWidthMm: number; maxHeightMm: number }> = {
  "VARIO 13 Kasete (balta)": { maxWidthMm: 1400, maxHeightMm: 1300 },
  "VARIO 13 Kasete (krāsaina)": { maxWidthMm: 1400, maxHeightMm: 1300 },
  "VARIO 17 Kasete (balts)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO 17 Kasete (krāsaina)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO Uprofils Kasete (balts)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO Uprofils Kasete (krāsains)": { maxWidthMm: 1400, maxHeightMm: 2000 },
  "VARIO 25 Rullo (balts)": { maxWidthMm: 1400, maxHeightMm: 3000 },
  "VARIO 25 Rullo (krāsains)": { maxWidthMm: 1400, maxHeightMm: 3000 },
  "VARIO 32 Rullo (balts)": { maxWidthMm: 1400, maxHeightMm: 2700 },
  "VARIO 32 Rullo (krāsains)": { maxWidthMm: 1400, maxHeightMm: 2700 },
}

const ROMIESU_SYSTEM_IMAGES: Record<RomiesuSystemOption["value"], readonly [string, string]> = {
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

const ROMIESU_MATERIAL_OPTIONS = [
  { value: "Beetle", label: "Beetle" },
  { value: "Camaro", label: "Camaro" },
  { value: "Challenger", label: "Challenger" },
  { value: "Corniche", label: "Corniche" },
  { value: "Daytona", label: "Daytona" },
  { value: "DeVille", label: "DeVille" },
  { value: "Ghost", label: "Ghost" },
  { value: "Leopard", label: "Leopard" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "Master", label: "Master" },
  { value: "Mistral", label: "Mistral" },
  { value: "Mustang", label: "Mustang" },
  { value: "Nestor", label: "Nestor" },
  { value: "Niva", label: "Niva" },
  { value: "Phantom", label: "Phantom" },
  { value: "Royal Monaco", label: "Royal Monaco" },
  { value: "Sebring", label: "Sebring" },
  { value: "Siber", label: "Siber" },
  { value: "Sonett", label: "Sonett" },
  { value: "Testarossa", label: "Testarossa" },
  { value: "Wrangler", label: "Wrangler" },
] as const

type RomiesuMaterialOption = (typeof ROMIESU_MATERIAL_OPTIONS)[number]

type RomiesuPriceTable = Record<RomiesuMaterialOption["value"], Record<RomiesuSystemOption["value"], number>>

type RomiesuSizePriceGrid = Record<number, Record<number, number>>

const ROMIESU_SIZE_PRICE_GRID: RomiesuSizePriceGrid = {}

const ROMIESU_PRICE_TABLE: RomiesuPriceTable = {
  "Beetle": {
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
  "Camaro": {
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
  "Challenger": {
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
  "Corniche": {
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
  "Daytona": {
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
  "DeVille": {
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
  "Ghost": {
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
  "Leopard": {
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
  "Lincoln": {
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
  "Master": {
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
  "Mistral": {
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
  "Mustang": {
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
  "Nestor": {
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
  "Niva": {
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
  "Phantom": {
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
  "Royal Monaco": {
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
  "Sebring": {
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
  "Siber": {
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
  "Sonett": {
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
  "Testarossa": {
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
  "Wrangler": {
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

type RomiesuMaterialImage = { title: string; src: string }

const ROMIESU_MATERIAL_IMAGES: Partial<Record<RomiesuMaterialOption["value"], RomiesuMaterialImage[]>> = {
  Beetle: [
    { title: "Beetle 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_01.png" },
    { title: "Beetle 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_02.png" },
    { title: "Beetle 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_03.png" },
    { title: "Beetle 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_04.png" },
    { title: "Beetle 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_05.png" },
    { title: "Beetle 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_06.png" },
    { title: "Beetle 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_07.png" },
    { title: "Beetle 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_08.png" },
    { title: "Beetle 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_09.png" },
    { title: "Beetle 10", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_10.png" },
    { title: "Beetle 11", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_11.png" },
    { title: "Beetle 12", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_12.png" },
    { title: "Beetle 13", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_13.png" },
    { title: "Beetle 14", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_14.png" },
    { title: "Beetle 15", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_15.png" },
    { title: "Beetle 16", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_16.png" },
    { title: "Beetle 17", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_17.png" },
    { title: "Beetle 18", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_18.png" },
    { title: "Beetle 19", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Beetle_19.png" },
  ],
  Camaro: [
    { title: "Camaro 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_01.png" },
    { title: "Camaro 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_02.png" },
    { title: "Camaro 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_03.png" },
    { title: "Camaro 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_04.png" },
    { title: "Camaro 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_05.png" },
    { title: "Camaro 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_06.png" },
    { title: "Camaro 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_07.png" },
    { title: "Camaro 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_08.png" },
    { title: "Camaro 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_09.png" },
    { title: "Camaro 10", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_10.png" },
    { title: "Camaro 11", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_11.png" },
    { title: "Camaro 12", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Camaro_12.png" },
  ],
  Challenger: [
    { title: "Challenger 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_01.png" },
    { title: "Challenger 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_02.png" },
    { title: "Challenger 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_03.png" },
    { title: "Challenger 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_04.png" },
    { title: "Challenger 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_05.png" },
    { title: "Challenger 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_06.png" },
    { title: "Challenger 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_07.png" },
    { title: "Challenger 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_08.png" },
    { title: "Challenger 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_09.png" },
    { title: "Challenger 10", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_10.png" },
    { title: "Challenger 11", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_11.png" },
    { title: "Challenger 12", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_12.png" },
    { title: "Challenger 13", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Challenger_13.png" },
  ],
  Corniche: [
    { title: "Corniche 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Corniche_01.png" },
    { title: "Corniche 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Corniche_02.png" },
    { title: "Corniche 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Corniche_03.png" },
    { title: "Corniche 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Corniche_04.png" },
  ],
  Daytona: [
    { title: "Daytona 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_01.png" },
    { title: "Daytona 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_02.png" },
    { title: "Daytona 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_03.png" },
    { title: "Daytona 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_04.png" },
    { title: "Daytona 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_05.png" },
    { title: "Daytona 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_06.png" },
    { title: "Daytona 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_07.png" },
    { title: "Daytona 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_08.png" },
    { title: "Daytona 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_09.png" },
    { title: "Daytona 10", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_10.png" },
    { title: "Daytona 11", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_11.png" },
    { title: "Daytona 12", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_12.png" },
    { title: "Daytona 13", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_13.png" },
    { title: "Daytona 14", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_14.png" },
    { title: "Daytona 15", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_15.png" },
    { title: "Daytona 16", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_16.png" },
    { title: "Daytona 17", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Daytona_17.png" },
  ],
  DeVille: [
    { title: "DeVille 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/DeVille_01.png" },
    { title: "DeVille 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/DeVille_02.png" },
    { title: "DeVille 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/DeVille_03.png" },
    { title: "DeVille 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/DeVille_04.png" },
    { title: "DeVille 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/DeVille_05.png" },
  ],
  Ghost: [
    { title: "Ghost 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Ghost_01.png" },
    { title: "Ghost 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Ghost_02.png" },
    { title: "Ghost 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Ghost_03.png" },
  ],
  Leopard: [
    { title: "Leopard 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_01.png" },
    { title: "Leopard 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_02.png" },
    { title: "Leopard 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_03.png" },
    { title: "Leopard 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_04.png" },
    { title: "Leopard 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_05.png" },
    { title: "Leopard 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_06.png" },
    { title: "Leopard 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_07.png" },
    { title: "Leopard 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_08.png" },
    { title: "Leopard 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_09.png" },
    { title: "Leopard 10", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_10.png" },
    { title: "Leopard 11", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_11.png" },
    { title: "Leopard 12", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_12.png" },
    { title: "Leopard 13", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_13.png" },
    { title: "Leopard 14", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_14.png" },
    { title: "Leopard 15", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_15.png" },
    { title: "Leopard 16", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Leopard_16.png" },
  ],
  Lincoln: [
    { title: "Lincoln 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Lincoln_01.png" },
    { title: "Lincoln 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Lincoln_02.png" },
    { title: "Lincoln 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Lincoln_03.png" },
  ],
  Master: [
    { title: "Master 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Master_01.png" },
    { title: "Master 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Master_02.png" },
    { title: "Master 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Master_03.png" },
  ],
  Mistral: [
    { title: "Mistral 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mistral_01.png" },
    { title: "Mistral 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mistral_02.png" },
    { title: "Mistral 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mistral_03.png" },
    { title: "Mistral 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mistral_04.png" },
    { title: "Mistral 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mistral_05.png" },
  ],
  Mustang: [
    { title: "Mustang 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mustang_01.png" },
    { title: "Mustang 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mustang_02.png" },
    { title: "Mustang 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mustang_03.png" },
    { title: "Mustang 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Mustang_04.png" },
  ],
  Nestor: [
    { title: "Nestor 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Nestor_01.png" },
    { title: "Nestor 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Nestor_02.png" },
    { title: "Nestor 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Nestor_03.png" },
    { title: "Nestor 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Nestor_04.png" },
    { title: "Nestor 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Nestor_05.png" },
  ],
  Niva: [
    { title: "Niva 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_01.png" },
    { title: "Niva 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_02.png" },
    { title: "Niva 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_03.png" },
    { title: "Niva 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_04.png" },
    { title: "Niva 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_05.png" },
    { title: "Niva 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_06.png" },
    { title: "Niva 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_07.png" },
    { title: "Niva 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_08.png" },
    { title: "Niva 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_09.png" },
    { title: "Niva 10", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_10.png" },
    { title: "Niva 11", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_11.png" },
    { title: "Niva 12", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_12.png" },
    { title: "Niva 13", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_13.png" },
    { title: "Niva 14", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_14.png" },
    { title: "Niva 15", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_15.png" },
    { title: "Niva 16", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_16.png" },
    { title: "Niva 17", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Niva_17.png" },
  ],
  Phantom: [
    { title: "Phantom 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Phantom_01.png" },
    { title: "Phantom 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Phantom_02.png" },
    { title: "Phantom 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Phantom_03.png" },
    { title: "Phantom 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Phantom_04.png" },
  ],
  "Royal Monaco": [
    { title: "Royal Monaco 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Royal_Monaco_01.png" },
    { title: "Royal Monaco 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Royal_Monaco_02.png" },
    { title: "Royal Monaco 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Royal_Monaco_03.png" },
  ],
  Sebring: [
    { title: "Sebring 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_01.png" },
    { title: "Sebring 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_02.png" },
    { title: "Sebring 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_03.png" },
    { title: "Sebring 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_04.png" },
    { title: "Sebring 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_05.png" },
    { title: "Sebring 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_06.png" },
    { title: "Sebring 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_07.png" },
    { title: "Sebring 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_08.png" },
    { title: "Sebring 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sebring_09.png" },
  ],
  Siber: [
    { title: "Siber 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_01.png" },
    { title: "Siber 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_02.png" },
    { title: "Siber 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_03.png" },
    { title: "Siber 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_04.png" },
    { title: "Siber 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_05.png" },
    { title: "Siber 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_06.png" },
    { title: "Siber 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_07.png" },
    { title: "Siber 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Siber_08.png" },
  ],
  Sonett: [
    { title: "Sonett 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sonett_01.png" },
    { title: "Sonett 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sonett_02.png" },
    { title: "Sonett 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Sonett_03.png" },
  ],
  Testarossa: [
    { title: "Testarossa 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_01.png" },
    { title: "Testarossa 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_02.png" },
    { title: "Testarossa 03", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_03.png" },
    { title: "Testarossa 04", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_04.png" },
    { title: "Testarossa 05", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_05.png" },
    { title: "Testarossa 06", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_06.png" },
    { title: "Testarossa 07", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_07.png" },
    { title: "Testarossa 08", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_08.png" },
    { title: "Testarossa 09", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_09.png" },
    { title: "Testarossa 10", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_10.png" },
    { title: "Testarossa 11", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_11.png" },
    { title: "Testarossa 12", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_12.png" },
    { title: "Testarossa 13", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_13.png" },
    { title: "Testarossa 14", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_14.png" },
    { title: "Testarossa 15", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_15.png" },
    { title: "Testarossa 16", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_16.png" },
    { title: "Testarossa 17", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Testarossa_17.png" },
  ],
  Wrangler: [
    { title: "Wrangler 01", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Wrangler_01.png" },
    { title: "Wrangler 02", src: "https://ik.imagekit.io/vbvwdejj5/zmk/Romiešu/Wrangler_02.png" },
  ],
}

const ROMIESU_NOTES = [
  "* Šis ir informatīvs cenas aprēķins. Gala cena var atšķirties.",
  "* Montāžas pakalpojumi nav iekļauti cenā, ja nav atzīmēti.",
]

const ROMIESU_NUMBER_FORMATTER = new Intl.NumberFormat("lv-LV", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function roundToStep(value: number, step: number) {
  return Math.round(value / step) * step
}

function ceilToStep(value: number, step: number) {
  return Math.ceil(value / step) * step
}

type PdfMakeInstance = {
  createPdf: (docDefinition: unknown) => { download: (fileName?: string) => void }
  vfs?: Record<string, string>
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return (typeof value === "object" || typeof value === "function") && value !== null
}

function getGlobalValue<T>(key: string): T | undefined {
  if (typeof globalThis === "undefined") {
    return undefined
  }

  const globals = globalThis as unknown as Record<string, unknown>
  return globals[key] as T | undefined
}

function setGlobalValue(key: string, value: unknown) {
  if (typeof globalThis === "undefined") {
    return
  }

  const globals = globalThis as unknown as Record<string, unknown>
  globals[key] = value
}

function collectModuleCandidates(module: unknown): Record<string, unknown>[] {
  if (!isRecord(module)) {
    return []
  }

  const record = module as Record<string, unknown>
  const candidates: Record<string, unknown>[] = [record]

  const defaultExport = record["default"]
  if (isRecord(defaultExport)) {
    candidates.push(defaultExport)
  }

  const pdfMakeExport = record["pdfMake"]
  if (isRecord(pdfMakeExport)) {
    candidates.push(pdfMakeExport)
  }

  const pdfmakeExport = record["pdfmake"]
  if (isRecord(pdfmakeExport)) {
    candidates.push(pdfmakeExport)
  }

  return candidates
}

function isFontDictionary(value: unknown): value is Record<string, string> {
  if (typeof value !== "object" || value === null) {
    return false
  }

  const entries = Object.entries(value as Record<string, unknown>)
  if (entries.length === 0) {
    return false
  }

  return entries.every(([key, entryValue]) => key.endsWith(".ttf") && typeof entryValue === "string")
}

function resolvePdfMakeInstance(module: unknown): PdfMakeInstance | undefined {
  const candidates = collectModuleCandidates(module)
  const globalCandidate = getGlobalValue<unknown>("pdfMake")
  if (isRecord(globalCandidate)) {
    candidates.push(globalCandidate)
  }

  for (const candidate of candidates) {
    const createPdf = candidate["createPdf"]
    if (typeof createPdf === "function") {
      return candidate as PdfMakeInstance
    }
  }

  return undefined
}

function resolvePdfMakeVfs(module: unknown): Record<string, string> | undefined {
  const queue: unknown[] = [...collectModuleCandidates(module)]
  const globalCandidate = getGlobalValue<unknown>("pdfMake")
  if (globalCandidate !== undefined) {
    queue.push(globalCandidate)
  }

  const visited = new Set<unknown>()

  while (queue.length > 0) {
    const candidate = queue.shift()
    if (!candidate || visited.has(candidate)) {
      continue
    }

    visited.add(candidate)

    if (isFontDictionary(candidate)) {
      return candidate
    }

    if (!isRecord(candidate)) {
      continue
    }

    const directVfs = candidate["vfs"]
    if (isFontDictionary(directVfs)) {
      return directVfs
    }
    if (isRecord(directVfs)) {
      queue.push(directVfs)
    }

    for (const key of ["pdfMake", "pdfmake", "default"] as const) {
      const nested = candidate[key]
      if (nested !== undefined) {
        queue.push(nested)
      }
    }
  }

  return undefined
}

type RomiesuCalculationResult = {
  price: string
  isValid: boolean
  breakdown: {
    product: number
    installation: number
    total: number
  } | null
}

function calculateRomiesuPrice(
  material: RomiesuMaterialOption["value"] | "",
  system: RomiesuSystemOption["value"] | "",
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
): RomiesuCalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const useGrid = gridEnabledMaterials.includes(material)
  const basePrice = ROMIESU_PRICE_TABLE[material]?.[system]
  const widthCmRaw = widthMm / 10
  const heightCmRaw = heightMm / 10
  const gridWidthCm = clamp(ceilToStep(widthCmRaw, 10), 40, 300)
  const gridHeightCm = clamp(ceilToStep(heightCmRaw, 10), 40, 350)

  const gridPrice = useGrid ? getGridPrice(material, widthMm, heightMm) : undefined
  const effectiveBasePrice = basePrice
  if (!gridPrice && !effectiveBasePrice) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  let productCost: number
  const markupMultiplier = 2
  if (typeof gridPrice === "number") {
    productCost = Math.round(gridPrice * markupMultiplier * 1.21)
  } else {
    const widthM = widthMm / 1000
    const heightM = heightMm / 1000
    const area = widthM * heightM
    productCost = Math.round((effectiveBasePrice as number) * markupMultiplier * area * 1.21)
  }
  const installationCost = includeInstallation ? ROMIESU_INSTALLATION_FEE : 0
  const total = productCost + installationCost

  return {
    price: ROMIESU_NUMBER_FORMATTER.format(total),
    isValid: true,
    breakdown: {
      product: productCost,
      installation: installationCost,
      total,
    },
  }
}

type RomiesuCalculatorProps = {
  title?: string
}

export default function RomiesuCalculator({ title }: RomiesuCalculatorProps) {
  const [material, setMaterial] = useState<RomiesuMaterialOption["value"] | "">("")
  const [system, setSystem] = useState<RomiesuSystemOption["value"] | "">("")
  const [width, setWidth] = useState(2000)
  const [height, setHeight] = useState(2200)
  const [materialColor, setMaterialColor] = useState<string>("")
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)
  const [isMaxSizesOpen, setIsMaxSizesOpen] = useState(false)

  const calculatorRef = useRef<HTMLDivElement>(null)

  const availableSystems = useMemo(() => {
    if (!material) {
      return ROMIESU_SYSTEM_OPTIONS
    }

    return ROMIESU_SYSTEM_OPTIONS.filter((option) => ROMIESU_PRICE_TABLE[material]?.[option.value])
  }, [material])

  const activeMaxWidthMm = useMemo(() => {
    // System is hidden; enforce the global max width.
    return MAX_WIDTH_MM
  }, [])

  const activeMaxHeightMm = useMemo(() => {
    // System is hidden; enforce the global max height.
    return MAX_HEIGHT_MM
  }, [])

  useEffect(() => {
    setWidth((current) => clamp(current, MIN_WIDTH_MM, activeMaxWidthMm))
  }, [activeMaxWidthMm])

  useEffect(() => {
    setHeight((current) => clamp(current, MIN_HEIGHT_MM, activeMaxHeightMm))
  }, [activeMaxHeightMm])

  useEffect(() => {
    setSystem((current) => {
      if (current && availableSystems.some((option) => option.value === current)) return current
      return availableSystems.length > 0 ? availableSystems[0].value : ""
    })
  }, [availableSystems])

  const result = useMemo(
    () => calculateRomiesuPrice(material, system, width, height, includeInstallation),
    [material, system, width, height, includeInstallation],
  )

  const selectedSystemImages = useMemo(() => (system ? ROMIESU_SYSTEM_IMAGES[system] : null), [system])
  const materialImages = useMemo(() => (material ? ROMIESU_MATERIAL_IMAGES[material] ?? null : null), [material])

  useEffect(() => {
    // Reset selected color when material changes
    setMaterialColor("")
  }, [material])

  const handleDownload = async () => {
    if (!result.isValid) return

    setDownloadError(null)
    setDownloadPending(true)

    try {
      const pdfMakeMod = await import("pdfmake/build/pdfmake")
      let pdfMake = resolvePdfMakeInstance(pdfMakeMod)
      if (!pdfMake) {
        throw new Error("Neizdevās inicializēt PDF ģeneratoru.")
      }

      setGlobalValue("pdfMake", pdfMake)

      const vfsFontsMod = await import("pdfmake/build/vfs_fonts")

      const globalPdfMakeAfterFonts = resolvePdfMakeInstance(getGlobalValue("pdfMake"))
      if (globalPdfMakeAfterFonts) {
        pdfMake = globalPdfMakeAfterFonts
      }

      const vfs =
        pdfMake.vfs ?? resolvePdfMakeVfs(vfsFontsMod) ?? resolvePdfMakeVfs(pdfMakeMod)
      if (!vfs) {
        throw new Error("Neizdevās ielādēt PDF fontus (vfs).")
      }

      pdfMake.vfs = vfs

      const d = new Date()
      const dateStr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}.`

      const fetchImageAsDataUrl = async (url: string): Promise<string | null> => {
        try {
          const response = await fetch(url)
          if (!response.ok) {
            return null
          }

          const blob = await response.blob()
          return await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result as string)
            reader.onerror = reject
            reader.readAsDataURL(blob)
          })
        } catch (error) {
          console.error("Neizdevās ielādēt attēlu PDF vajadzībām:", error)
          return null
        }
      }

      let systemImageDataUrls: string[] = []
      if (selectedSystemImages) {
        const resolved = await Promise.all(selectedSystemImages.map((src) => fetchImageAsDataUrl(src)))
        systemImageDataUrls = resolved.filter((value): value is string => Boolean(value))
      }

      const content: any[] = [
        { text: "Cenas Aprēķins", style: "h1" },
        { text: `Romiešu žalūziju kalkulators v${ROMIESU_APP_VERSION}`, style: "sub" },
        { canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: "#e5e7eb" }] },
        { text: `\nDatums: ${dateStr}`, margin: [0, 14, 0, 0] },
        { text: "Specifikācija:", style: "sectionTitle" },
        {
          table: {
            widths: [140, "*"],
            body: [
              [{ text: "Materiāls:", style: "label" }, material || "Nav izvēlēts"],
              [{ text: "Krāsa:", style: "label" }, materialColor || "Nav izvēlēta"],
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

      if (systemImageDataUrls.length > 0) {
        content.push({ text: "\n" })
        content.push({
          columns: systemImageDataUrls.map((src) => ({ image: src, width: 160 })),
          columnGap: 16,
        })
      }

      if (result.breakdown) {
        const { product, installation, total } = result.breakdown
        const installationText =
          installation > 0 ? `+${ROMIESU_NUMBER_FORMATTER.format(installation)} €` : `${ROMIESU_NUMBER_FORMATTER.format(installation)} €`

        content.push({ text: "Cenas sadalījums:", style: "sectionTitle", margin: [0, 16, 0, 6] })
        content.push({
          table: {
            widths: ["*", "auto"],
            body: [
              [{ text: "Žalūzijas cena:", style: "label" }, `${ROMIESU_NUMBER_FORMATTER.format(product)} €`],
              [{ text: "Montāža:", style: "label" }, installationText],
              [{ text: "Kopā ar PVN:", style: "label" }, { text: `${ROMIESU_NUMBER_FORMATTER.format(total)} €`, bold: true }],
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
            stack: ROMIESU_NOTES.map((text) => ({ text, style: "notes" })),
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

      pdfMake.createPdf(docDefinition).download(`romiesu-zaluziju-aprekins-${Date.now()}.pdf`)
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
      ? `${ROMIESU_NUMBER_FORMATTER.format(result.breakdown.total)} €`
      : `${result?.price ?? "—"} €`
    const materialLine = materialColor ? `${material} — ${materialColor}` : material
    const tariff = gridEnabledMaterials.includes(material) ? getTariffSizeCm(material, width, height) : undefined
    const sizeLine = tariff ? `${width} x ${height} mm (tarifs: ${tariff.widthCm} x ${tariff.heightCm} cm)` : `${width} x ${height} mm`

    return [
      "Aprēķins (romiešu žalūzijas):",
      `• Materiāls: ${materialLine}`,
      `• Sistēma: ${system}`,
      `• Izmērs: ${sizeLine}`,
      `• Montāža: ${install}`,
      `• Kopā ar PVN: ${priceText}`,
    ].join("\n")
  }, [height, includeInstallation, material, materialColor, result, system, width])

  const contactHref = summaryText ? `/kontakti?calc=${encodeURIComponent(summaryText)}` : "/kontakti"

  return (
    <div
      ref={calculatorRef}
      className="w-full rounded-3xl bg-emerald-50 p-6 shadow-sm sm:p-10"
      data-component-name="RomiesuCalculator"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title ?? "Romiešu žalūziju kalkulators"}</h2>
      </div>

      {isMaxSizesOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="romiesu-max-sizes-title"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMaxSizesOpen(false)} />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 id="romiesu-max-sizes-title" className="text-lg font-semibold text-gray-900">
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
            <label htmlFor="romiesu-material" className="block text-sm font-medium text-gray-700">
              Izvēlieties materiālu
            </label>
            <select
              id="romiesu-material"
              value={material}
              onChange={(event) => setMaterial(event.target.value as RomiesuMaterialOption["value"])}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Izvēlieties materiālu</option>
              {ROMIESU_MATERIAL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {materialImages && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {materialImages.map((img) => {
                  const selected = materialColor === img.title
                  return (
                    <button
                      type="button"
                      key={img.src}
                      onClick={() => setMaterialColor(img.title)}
                      className={`rounded-xl border ${selected ? "border-emerald-500 ring-2 ring-emerald-300" : "border-gray-200"} bg-white p-2 text-left shadow-sm transition hover:border-emerald-400`}
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="h-28 w-full rounded-lg object-cover"
                      />
                      <div className="mt-2">
                        <figcaption className="text-xs text-gray-700">{img.title}</figcaption>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* System preview images removed per request */}

          <div>
            <label htmlFor="romiesu-width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="romiesu-width"
                type="range"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                step={100}
                value={width}
                onChange={(event) => setWidth(clamp(Number(event.target.value), MIN_WIDTH_MM, activeMaxWidthMm))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MIN_WIDTH_MM}
                max={activeMaxWidthMm}
                step={100}
                value={width}
                onChange={(event) => {
                  const value = event.target.value
                  if (value === "") return
                  const v = roundToStep(Number(value), 100)
                  setWidth(clamp(v, MIN_WIDTH_MM, activeMaxWidthMm))
                }}
                className="w-24 rounded-xl border border-gray-200 px-3 py-2 text-center text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Pieejamais diapazons: {MIN_WIDTH_MM}–{activeMaxWidthMm} mm</p>
          </div>

          <div>
            <label htmlFor="romiesu-height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
              <input
                id="romiesu-height"
                type="range"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                step={100}
                value={height}
                onChange={(event) => setHeight(clamp(Number(event.target.value), MIN_HEIGHT_MM, activeMaxHeightMm))}
                className="range-input accent-emerald-500"
              />
              <input
                type="number"
                min={MIN_HEIGHT_MM}
                max={activeMaxHeightMm}
                step={100}
                value={height}
                onChange={(event) => {
                  const value = event.target.value
                  if (value === "") return
                  const v = roundToStep(Number(value), 100)
                  setHeight(clamp(v, MIN_HEIGHT_MM, activeMaxHeightMm))
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
            Montāžas pakalpojumi (+{ROMIESU_NUMBER_FORMATTER.format(ROMIESU_INSTALLATION_FEE)} €)
          </label>
        </div>

        <div className="self-start flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-emerald-100">
          <div className="w-full rounded-2xl border-2 border-emerald-500 bg-emerald-50 px-6 py-10 shadow-sm">
            <p className="text-base font-medium text-gray-600">Cena € ar PVN:</p>
            <p className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">{result.price}</p>
          </div>
          {result.breakdown && (
            <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white/80 px-5 py-4 text-sm text-gray-700 shadow-inner">
              <dl className="space-y-2">
                <div className="flex items-center justify-between">
                  <dt className="font-medium">Žalūzijas cena</dt>
                  <dd>{ROMIESU_NUMBER_FORMATTER.format(result.breakdown.product)} €</dd>
                </div>
                {includeInstallation && (
                  <div className="flex items-center justify-between">
                    <dt className="font-medium">Montāža</dt>
                    <dd>{`+${ROMIESU_NUMBER_FORMATTER.format(result.breakdown.installation)} €`}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-semibold text-gray-900">Kopā ar PVN</dt>
                  <dd className="font-semibold text-gray-900">{ROMIESU_NUMBER_FORMATTER.format(result.breakdown.total)} €</dd>
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
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="RomiesuCalculator">
            *kalkulatorā norādītā cena ir informatīva,<br />
            tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>
    </div>
  )
}
