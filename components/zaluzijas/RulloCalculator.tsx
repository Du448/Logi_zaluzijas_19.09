"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const APP_VERSION = "2.8"

const MIN_WIDTH_MM = 300
const MAX_WIDTH_MM = 2200
const MIN_HEIGHT_MM = 300
const MAX_HEIGHT_MM = 3000

const MATERIAL_BLACKOUT_INFO: Record<string, string> = {
  "BLACK OUT": "(100%)",
  "ESTER": "(60%)",
  "FLOWER": "(62%)",
  "FLOWER (LT)": "(62%)",
  "LUNA": "(62%)",
  "METALIC": "(62%)",
  "LIVELLO": "(62%)",
  "ALBEDO": "(62%)",
  "ARABESKA": "(62%)",
  "ROYAL": "(62%)",
  "TALIA": "(62%)",
  "TOPAZ": "(62%)",
  "ZEBRA 3100-3104": "(62%)",
  "ZEBRA 3105-3200": "(62%)",
  "ZEBRA BO": "(62%)",
  "ESTER (70%)": "",
  "Easter Mint 023": "(70%)",
  "METALIC WHITE": "(72%)",
  "Neutral Gold 024": "(62%)",
  "NATURAL": "(70%)",
  "SEVILA THERMO": "(70%)",
  "NEUTRAL": "(60%)",
  "VAN GOGH": "(60%)",
  "VAN GOGH (68%)": "",
  "WATER": "(68%)",
}

type SystemVisual = { label: string; image: string }

type SystemOption = {
  value: string
  label: string
}

const VERTIKALAS_SYSTEM_OPTIONS: SystemOption[] = [
  { value: "VARIO 13 Kasete (balta)", label: "89mm" },
  { value: "VARIO 17 Kasete (balts)", label: "127mm" },
]

type VertikalasMaterial = {
  name: string
  prices: Record<string, number>
}

const VERTIKALAS_MATERIALS: VertikalasMaterial[] = [
  { name: "CAROL", prices: { "VARIO 13 Kasete (balta)": 22.7, "VARIO 17 Kasete (balts)": 19.1 } },
  { name: "CORRA", prices: { "VARIO 13 Kasete (balta)": 21.56, "VARIO 17 Kasete (balts)": 17.96 } },
  { name: "EVELYN", prices: { "VARIO 13 Kasete (balta)": 22.7, "VARIO 17 Kasete (balts)": 19.1 } },
  { name: "POLLY", prices: { "VARIO 13 Kasete (balta)": 21.94, "VARIO 17 Kasete (balts)": 18.34 } },
  { name: "SANDRA", prices: { "VARIO 13 Kasete (balta)": 22.7, "VARIO 17 Kasete (balts)": 19.1 } },
  { name: "VANESA", prices: { "VARIO 13 Kasete (balta)": 23.84, "VARIO 17 Kasete (balts)": 20.24 } },
  { name: "RAY", prices: { "VARIO 13 Kasete (balta)": 24.22, "VARIO 17 Kasete (balts)": 20.62 } },
  { name: "BEATA", prices: { "VARIO 13 Kasete (balta)": 22.7, "VARIO 17 Kasete (balts)": 19.1 } },
  { name: "VIOLA", prices: { "VARIO 13 Kasete (balta)": 23.08, "VARIO 17 Kasete (balts)": 19.48 } },
  { name: "MARINA", prices: { "VARIO 13 Kasete (balta)": 22.7, "VARIO 17 Kasete (balts)": 19.1 } },
  { name: "JENNY", prices: { "VARIO 13 Kasete (balta)": 22.7, "VARIO 17 Kasete (balts)": 19.1 } },
  { name: "ANETA", prices: { "VARIO 13 Kasete (balta)": 25.36, "VARIO 17 Kasete (balts)": 21.76 } },
  { name: "EDEN", prices: { "VARIO 13 Kasete (balta)": 24.22, "VARIO 17 Kasete (balts)": 20.62 } },
  { name: "FLEX", prices: { "VARIO 13 Kasete (balta)": 43.78, "VARIO 17 Kasete (balts)": 40.18 } },
  { name: "CHAD", prices: { "VARIO 13 Kasete (balta)": 24.22, "VARIO 17 Kasete (balts)": 20.62 } },
  { name: "KENIA", prices: { "VARIO 13 Kasete (balta)": 24.4, "VARIO 17 Kasete (balts)": 20.8 } },
  { name: "VEGA", prices: { "VARIO 13 Kasete (balta)": 32.54, "VARIO 17 Kasete (balts)": 26.36 } },
  { name: "VEROFLEX", prices: { "VARIO 13 Kasete (balta)": 60.02, "VARIO 17 Kasete (balts)": 48.73 } },
  { name: "APOLLO MEDIA CARE", prices: { "VARIO 13 Kasete (balta)": 46.46, "VARIO 17 Kasete (balts)": 37.73 } },
]

const VERTIKALAS_MATERIAL_OPTIONS = VERTIKALAS_MATERIALS.map((material) => material.name)

const VERTIKALAS_MATERIAL_LOOKUP = VERTIKALAS_MATERIALS.reduce<Record<string, VertikalasMaterial>>((acc, material) => {
  acc[material.name] = material
  return acc
}, {})

const VERTIKALAS_PRICE_TABLE: PriceTable = VERTIKALAS_MATERIALS.reduce<PriceTable>((acc, material) => {
  acc[material.name] = material.prices
  return acc
}, {})

const EMPTY_TONE_OVERRIDES: Record<string, Record<string, number>> = {}

const SYSTEM_IMAGE_INFO_KASETU: Record<string, SystemVisual> = {
  "VARIO 13 Kasete (balta)": {
    label: "Vario 13",
    image: "https://ik.imagekit.io/vbvwdejj5/VARIO%2013.jpg?updatedAt=1759775255507",
  },
  "VARIO 13 Kasete (krāsaina)": {
    label: "Vario 13",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario13_rieksts.png?updatedAt=1759842314637",
  },
  "VARIO 17 Kasete (balts)": {
    label: "Vario 17",
    image: "https://ik.imagekit.io/vbvwdejj5/Vario%2017.jpg?updatedAt=1759775255627",
  },
  "VARIO 17 Kasete (krāsaina)": {
    label: "Vario 17",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario17_rieksts.png?updatedAt=1759842314022",
  },
  "VARIO Uprofils Kasete (balts)": {
    label: "U profils",
    image: "https://ik.imagekit.io/vbvwdejj5/U%20profile.jpg?updatedAt=1759775255787",
  },
  "VARIO Uprofils Kasete (krāsains)": {
    label: "U profils",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20kase%C5%A1u%20%C5%BEaluzijas/Vario25_uprof_rieksts.png?updatedAt=1759842315200",
  },
}

const TONE_PRICE_OVERRIDES_RULLO: Record<string, Record<string, number>> = {
  "blackout-charlotte-524": {
    "VARIO 25 Rullo (balts)": 47,
    "VARIO 25 Rullo (krāsains)": 50,
    "VARIO 32 Rullo (balts)": 50,
    "VARIO 32 Rullo (krāsains)": 53,
  },
  "blackout-charlotte-552": {
    "VARIO 25 Rullo (balts)": 47,
    "VARIO 25 Rullo (krāsains)": 50,
    "VARIO 32 Rullo (balts)": 50,
    "VARIO 32 Rullo (krāsains)": 53,
  },
  "blackout-charlotte-551": {
    "VARIO 25 Rullo (balts)": 47,
    "VARIO 25 Rullo (krāsains)": 50,
    "VARIO 32 Rullo (balts)": 50,
    "VARIO 32 Rullo (krāsains)": 53,
  },
  "blackout-sunset-dn753": {
    "VARIO 25 Rullo (balts)": 47,
    "VARIO 25 Rullo (krāsains)": 50,
    "VARIO 32 Rullo (balts)": 50,
    "VARIO 32 Rullo (krāsains)": 53,
  },
}

const SYSTEM_IMAGE_INFO_RULLO: Record<string, SystemVisual> = {
  "VARIO 25 Rullo (balts)": {
    label: "Vario 25",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_grand_rolety_duze%20(1).jpg?updatedAt=1759924549864",
  },
  "VARIO 25 Rullo (krāsains)": {
    label: "Vario 25",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_atvertais.png?updatedAt=1759924551068",
  },
  "VARIO 32 Rullo (balts)": {
    label: "Vario 32",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/b_ZF_roleta_vario_32_plus_4%20(2).jpg?updatedAt=1759924549789",
  },
  "VARIO 32 Rullo (krāsains)": {
    label: "Vario 32",
    image: "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Rullo_daleji%20slegtais.png?updatedAt=1759924550543",
  },
}

const MATERIAL_BLACKOUT_LEVELS: Record<string, number[]> = {
  "BLACK OUT": [100],
  "ESTER": [60],
  "FLOWER": [62],
  "FLOWER (LT)": [62],
  "LUNA": [62],
  "METALIC": [62],
  "LIVELLO": [62],
  "ALBEDO": [62],
  "ARABESKA": [62],
  "ROYAL": [62],
  "TALIA": [62],
  "TOPAZ": [62],
  "ESTER (70%)": [70],
  "Easter Mint 023": [70],
  "METALIC WHITE": [72],
  "Neutral Gold 024": [62],
  "ZEBRA 3100-3104": [62],
  "ZEBRA 3105-3200": [62],
  "ZEBRA BO": [62],
  "NATURAL": [70],
  "SEVILA THERMO": [70],
  "NEUTRAL": [60],
  "VAN GOGH": [60],
  "VAN GOGH (68%)": [68],
  "WATER": [68],
}
const DARKENING_LEVELS = Array.from(
  new Set(
    Object.values(MATERIAL_BLACKOUT_LEVELS).flat(),
  ),
)
  .sort((a, b) => a - b)

type PriceTable = Record<string, Record<string, number>>

const TM_PRICE_DATA_KASETU: PriceTable = {
  NEUTRAL: {
    "VARIO 13 Kasete (balta)": 23,
    "VARIO 13 Kasete (krāsaina)": 26,
    "VARIO 17 Kasete (balts)": 28,
    "VARIO 17 Kasete (krāsaina)": 30,
    "VARIO Uprofils Kasete (balts)": 29,
    "VARIO Uprofils Kasete (krāsains)": 31,
  },
  "Neutral Gold 024": {
    "VARIO 13 Kasete (balta)": 23,
    "VARIO 13 Kasete (krāsaina)": 26,
    "VARIO 17 Kasete (balts)": 28,
    "VARIO 17 Kasete (krāsaina)": 30,
    "VARIO Uprofils Kasete (balts)": 29,
    "VARIO Uprofils Kasete (krāsains)": 31,
  },
  "VAN GOGH (68%)": {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  ESTER: {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  "ESTER (70%)": {
    "VARIO 13 Kasete (balta)": 25,
    "VARIO 13 Kasete (krāsaina)": 28,
    "VARIO 17 Kasete (balts)": 30,
    "VARIO 17 Kasete (krāsaina)": 32,
    "VARIO Uprofils Kasete (balts)": 31,
    "VARIO Uprofils Kasete (krāsains)": 33,
  },
  "Easter Mint 023": {
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
  METALIC: {
    "VARIO 13 Kasete (balta)": 27,
    "VARIO 13 Kasete (krāsaina)": 30,
    "VARIO 17 Kasete (balts)": 32,
    "VARIO 17 Kasete (krāsaina)": 34,
    "VARIO Uprofils Kasete (balts)": 33,
    "VARIO Uprofils Kasete (krāsains)": 35,
  },
  "METALIC WHITE": {
    "VARIO 13 Kasete (balta)": 27,
    "VARIO 13 Kasete (krāsaina)": 30,
    "VARIO 17 Kasete (balts)": 32,
    "VARIO 17 Kasete (krāsaina)": 34,
    "VARIO Uprofils Kasete (balts)": 33,
    "VARIO Uprofils Kasete (krāsains)": 35,
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
  ALBEDO: {
    "VARIO 13 Kasete (balta)": 40,
    "VARIO 13 Kasete (krāsaina)": 43,
    "VARIO 17 Kasete (balts)": 45,
    "VARIO 17 Kasete (krāsaina)": 47,
    "VARIO Uprofils Kasete (balts)": 46,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
  LIVELLO: {
    "VARIO 13 Kasete (balta)": 55,
    "VARIO 13 Kasete (krāsaina)": 58,
    "VARIO 17 Kasete (balts)": 60,
    "VARIO 17 Kasete (krāsaina)": 62,
    "VARIO Uprofils Kasete (balts)": 61,
    "VARIO Uprofils Kasete (krāsains)": 63,
  },
}

const TM_PRICE_DATA_RULLO: PriceTable = {
  NEUTRAL: {
    "VARIO 25 Rullo (balts)": 29,
    "VARIO 25 Rullo (krāsains)": 32,
    "VARIO 32 Rullo (balts)": 32,
    "VARIO 32 Rullo (krāsains)": 35,
  },
  "Neutral Gold 024": {
    "VARIO 25 Rullo (balts)": 29,
    "VARIO 25 Rullo (krāsains)": 32,
    "VARIO 32 Rullo (balts)": 32,
    "VARIO 32 Rullo (krāsains)": 35,
  },
  ESTER: {
    "VARIO 25 Rullo (balts)": 31,
    "VARIO 25 Rullo (krāsains)": 34,
    "VARIO 32 Rullo (balts)": 34,
    "VARIO 32 Rullo (krāsains)": 37,
  },
  "ESTER (70%)": {
    "VARIO 25 Rullo (balts)": 31,
    "VARIO 25 Rullo (krāsains)": 34,
    "VARIO 32 Rullo (balts)": 34,
    "VARIO 32 Rullo (krāsains)": 37,
  },
  "Easter Mint 023": {
    "VARIO 25 Rullo (balts)": 31,
    "VARIO 25 Rullo (krāsains)": 34,
    "VARIO 32 Rullo (balts)": 34,
    "VARIO 32 Rullo (krāsains)": 37,
  },
  "VAN GOGH": {
    "VARIO 25 Rullo (balts)": 31,
    "VARIO 25 Rullo (krāsains)": 34,
    "VARIO 32 Rullo (balts)": 34,
    "VARIO 32 Rullo (krāsains)": 37,
  },
  "VAN GOGH (68%)": {
    "VARIO 25 Rullo (balts)": 31,
    "VARIO 25 Rullo (krāsains)": 34,
    "VARIO 32 Rullo (balts)": 34,
    "VARIO 32 Rullo (krāsains)": 37,
  },
  WATER: {
    "VARIO 25 Rullo (balts)": 30,
    "VARIO 25 Rullo (krāsains)": 33,
    "VARIO 32 Rullo (balts)": 33,
    "VARIO 32 Rullo (krāsains)": 36,
  },
  FLOWER: {
    "VARIO 25 Rullo (balts)": 31,
    "VARIO 25 Rullo (krāsains)": 34,
    "VARIO 32 Rullo (balts)": 34,
    "VARIO 32 Rullo (krāsains)": 37,
  },
  LUNA: {
    "VARIO 25 Rullo (balts)": 30,
    "VARIO 25 Rullo (krāsains)": 33,
    "VARIO 32 Rullo (balts)": 33,
    "VARIO 32 Rullo (krāsains)": 36,
  },
  TOPAZ: {
    "VARIO 25 Rullo (balts)": 30,
    "VARIO 25 Rullo (krāsains)": 33,
    "VARIO 32 Rullo (balts)": 33,
    "VARIO 32 Rullo (krāsains)": 36,
  },
  ARABESKA: {
    "VARIO 25 Rullo (balts)": 30,
    "VARIO 25 Rullo (krāsains)": 33,
    "VARIO 32 Rullo (balts)": 33,
    "VARIO 32 Rullo (krāsains)": 36,
  },
  TALIA: {
    "VARIO 25 Rullo (balts)": 30,
    "VARIO 25 Rullo (krāsains)": 33,
    "VARIO 32 Rullo (balts)": 33,
    "VARIO 32 Rullo (krāsains)": 36,
  },
  "FLOWER (LT)": {
    "VARIO 25 Rullo (balts)": 29,
    "VARIO 25 Rullo (krāsains)": 32,
    "VARIO 32 Rullo (balts)": 32,
    "VARIO 32 Rullo (krāsains)": 35,
  },
  NATURAL: {
    "VARIO 25 Rullo (balts)": 37,
    "VARIO 25 Rullo (krāsains)": 39,
    "VARIO 32 Rullo (balts)": 39,
    "VARIO 32 Rullo (krāsains)": 42,
  },
  ROYAL: {
    "VARIO 25 Rullo (balts)": 37,
    "VARIO 25 Rullo (krāsains)": 39,
    "VARIO 32 Rullo (balts)": 39,
    "VARIO 32 Rullo (krāsains)": 42,
  },
  "SEVILA THERMO": {
    "VARIO 25 Rullo (balts)": 38,
    "VARIO 25 Rullo (krāsains)": 41,
    "VARIO 32 Rullo (balts)": 41,
    "VARIO 32 Rullo (krāsains)": 43,
  },
  "BLACK OUT": {
    "VARIO 25 Rullo (balts)": 38,
    "VARIO 25 Rullo (krāsains)": 41,
    "VARIO 32 Rullo (balts)": 41,
    "VARIO 32 Rullo (krāsains)": 43,
  },
  METALIC: {
    "VARIO 25 Rullo (balts)": 38,
    "VARIO 25 Rullo (krāsains)": 40,
    "VARIO 32 Rullo (balts)": 40,
    "VARIO 32 Rullo (krāsains)": 43,
  },
  "METALIC WHITE": {
    "VARIO 25 Rullo (balts)": 38,
    "VARIO 25 Rullo (krāsains)": 40,
    "VARIO 32 Rullo (balts)": 40,
    "VARIO 32 Rullo (krāsains)": 43,
  },
  "ZEBRA 3100-3104": {
    "VARIO 25 Rullo (balts)": 39,
    "VARIO 25 Rullo (krāsains)": 42,
    "VARIO 32 Rullo (balts)": 42,
    "VARIO 32 Rullo (krāsains)": 45,
  },
  "ZEBRA 3105-3200": {
    "VARIO 25 Rullo (balts)": 46,
    "VARIO 25 Rullo (krāsains)": 49,
    "VARIO 32 Rullo (balts)": 49,
    "VARIO 32 Rullo (krāsains)": 52,
  },
  "ZEBRA BO": {
    "VARIO 25 Rullo (balts)": 55,
    "VARIO 25 Rullo (krāsains)": 58,
    "VARIO 32 Rullo (balts)": 58,
    "VARIO 32 Rullo (krāsains)": 61,
  },
  ALBEDO: {
    "VARIO 25 Rullo (balts)": 47,
    "VARIO 25 Rullo (krāsains)": 50,
    "VARIO 32 Rullo (balts)": 50,
    "VARIO 32 Rullo (krāsains)": 53,
  },
  LIVELLO: {
    "VARIO 25 Rullo (balts)": 62,
    "VARIO 25 Rullo (krāsains)": 65,
    "VARIO 32 Rullo (balts)": 65,
    "VARIO 32 Rullo (krāsains)": 68,
  },
}

const TONE_PRICE_OVERRIDES_KASETU: Record<string, Record<string, number>> = {
  "blackout-charlotte-524": {
    "VARIO 13 Kasete (balta)": 41,
    "VARIO 13 Kasete (krāsaina)": 44,
    "VARIO 17 Kasete (balts)": 46,
    "VARIO 17 Kasete (krāsaina)": 48,
    "VARIO Uprofils Kasete (balts)": 47,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
  "blackout-charlotte-552": {
    "VARIO 13 Kasete (balta)": 41,
    "VARIO 13 Kasete (krāsaina)": 44,
    "VARIO 17 Kasete (balts)": 46,
    "VARIO 17 Kasete (krāsaina)": 48,
    "VARIO Uprofils Kasete (balts)": 47,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
  "blackout-charlotte-551": {
    "VARIO 13 Kasete (balta)": 41,
    "VARIO 13 Kasete (krāsaina)": 44,
    "VARIO 17 Kasete (balts)": 46,
    "VARIO 17 Kasete (krāsaina)": 48,
    "VARIO Uprofils Kasete (balts)": 47,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
  "blackout-sunset-dn753": {
    "VARIO 13 Kasete (balta)": 40,
    "VARIO 13 Kasete (krāsaina)": 43,
    "VARIO 17 Kasete (balts)": 45,
    "VARIO 17 Kasete (krāsaina)": 47,
    "VARIO Uprofils Kasete (balts)": 46,
    "VARIO Uprofils Kasete (krāsains)": 48,
  },
}

const ALL_MATERIAL_OPTIONS = Array.from(
  new Set([...Object.keys(TM_PRICE_DATA_KASETU), ...Object.keys(TM_PRICE_DATA_RULLO)]),
).sort()

type ToneOption = {
  id: string
  label: string
  description: string
  image?: string
}

const TONE_OPTIONS: Record<string, ToneOption[]> = {
  "BLACK OUT": [
    { id: "black-out-b001", label: "Black Out B001", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Black%20out%20B001.png?updatedAt=1759766391696" },
    { id: "black-out-b001s", label: "Black Out B001s", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Black%20out%20B001s.png?updatedAt=1759766391690" },
    { id: "blackout-b0012s", label: "Black Out B0012S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B0012S_Aptumšojums_100_.png" },
    { id: "blackout-b002", label: "Black Out B002", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B002_Aptumšojums_100_.png" },
    { id: "blackout-b002s", label: "Black Out B002S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B002S_Aptumšojums_100_.png" },
    { id: "blackout-b003", label: "Black Out B003", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B003_Aptumšojums_100_.png" },
    { id: "blackout-b003s", label: "Black Out B003S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B003S_Aptumšojums_100_.png" },
    { id: "blackout-b004", label: "Black Out B004", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B004_Aptumšojums_100_.png" },
    { id: "blackout-b004s", label: "Black Out B004S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B004S_Aptumšojums_100_.png" },
    { id: "blackout-b005", label: "Black Out B005", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B005_Aptumšojums_100_.png" },
    { id: "blackout-b005s", label: "Black Out B005S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B005S_Aptumšojums_100_.png" },
    { id: "blackout-b006", label: "Black Out B006", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B006_Aptumšojums_100_.png" },
    { id: "blackout-b007", label: "Black Out B007", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B007_Aptumšojums_100_.png" },
    { id: "blackout-b008", label: "Black Out B008", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B008_Aptumšojums_100_.png" },
    { id: "blackout-b008s", label: "Black Out B008S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B008S_Aptumšojums_100_.png" },
    { id: "blackout-b009", label: "Black Out B009", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B009_Aptumšojums_100_.png" },
    { id: "blackout-b010", label: "Black Out B010", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B010_Aptumšojums_100_.png" },
    { id: "blackout-b010s", label: "Black Out B010S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B010S_Aptumšojums_100_.png" },
    { id: "blackout-b012", label: "Black Out B012", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B012_Aptumšojums_100_.png" },
    { id: "blackout-b013", label: "Black Out B013", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B013_Aptumšojums_100_.png" },
    { id: "blackout-b013s", label: "Black Out B013S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B013S_Aptumšojums_100_.png" },
    { id: "blackout-b014", label: "Black Out B014", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B014_Aptumšojums_100_.png" },
    { id: "blackout-b014s", label: "Black Out B014S", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_B014S_Aptumšojums_100_.png" },
    { id: "blackout-black", label: "Black Out Black", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Black_Out_Black_Aptumšojums_100__.png" },
    { id: "blackout-bo11", label: "Black Out BO11", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/BLACK_OUT_BO11_Aptumšojums_100_.png" },
    { id: "blackout-charlotte-524", label: "Black out Charlotte 524", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Black_Out_Charlo_tte_524_Aptumšojums_100__.png" },
    { id: "blackout-charlotte-551", label: "Black out Charlotte 551", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Black_Out_Charlotte_5_51_Aptumšojums_100__.png" },
    { id: "blackout-charlotte-552", label: "Black out Charlotte 552", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Black_Out_Charlotte_552_Aptumšojums_100__.png" },
    { id: "blackout-sunset-dn753", label: "Black out Sunset DN753", description: "Aptumšojums: 100%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Black_Out_Sunset_DN753_Aptumšojums_100__.png" },
  ],
  "VAN GOGH": [
    { id: "van-gogh-v003", label: "VAN GOGH V003", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V00_3_Aptumšojums_60__.png" },
    { id: "van-gogh-v001", label: "VAN GOGH V001", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V001_Aptumšojums_60__.png" },
  ],

  // NATURAL tones (70%)
  NATURAL: [
    { id: "natural-2", label: "Natural 2", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Natural_2_Aptumšojums_70__.png" },
    { id: "natural-3", label: "Natural 3", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Natural_3_Aptumšojums_70__.png" },
    { id: "natural-6", label: "Natural 6", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Natural_6_Aptumšojums_70__.png" },
  ],

  // SEVILA THERMO tones (70%)
  "SEVILA THERMO": [
    { id: "sevila-thermo-agua", label: "Sevila Thermo Agua", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Sevila_Thermo_Agua_Aptumšojums_70__.png" },
    { id: "sevila-thermo-beige", label: "Sevila Thermo Beige", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Sevila_Thermo_Beige_Aptumšojums_7_0__.png" },
    { id: "sevila-thermo-black", label: "Sevila Thermo Black", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Sevila_Thermo_Black_Aptumšojums_70__.png" },
    { id: "sevila-thermo-brown", label: "Sevila Thermo Brown", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Sevila_Thermo_Brown_Aptumšojums_70__.png" },
    { id: "sevila-thermo-grey", label: "Sevila Thermo Grey", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Sevila_Thermo_Grey_Aptumšojums_70__.png" },
    { id: "sevila-thermo-white", label: "Sevila Thermo White", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Sevila_Thermo_White_Aptumšojums_70__.png" },
  ],
  ESTER: [
    { id: "ester-201", label: "ESTER 201", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_201_Aptumšojums_6_0_.png" },
    { id: "ester-217", label: "ESTER 217", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_217_Aptumšojums_6_0_.png" },
    { id: "ester-218", label: "ESTER 218", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_218_Aptumšojums_6_0_.png" },
    { id: "ester-223", label: "ESTER 223", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_223_Aptumšojums_6_0_.png" },
    { id: "ester-226", label: "ESTER 226", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_226_Aptumšojums_6_0_.png" },
    { id: "ester-e003", label: "ESTER E003", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E00_3_Aptumšojums_6_0_.png" },
    { id: "ester-e004", label: "ESTER E004", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E00_4_Aptumšojums_6_0_.png" },
    { id: "ester-e005", label: "ESTER E005", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E00_5_Aptumšojums_6_0_.png" },
    { id: "ester-e006", label: "ESTER E006", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E00_6_Aptumšojums_6_0_.png" },
    { id: "ester-e007", label: "ESTER E007", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E00_7_Aptumšojums_6_0_.png" },
    { id: "ester-e009", label: "ESTER E009", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E00_9_Aptumšojums_6_0_.png" },
    { id: "ester-e002", label: "ESTER E002", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E002_Aptumšojums_6_0_.png" },
    { id: "ester-e015", label: "ESTER E015", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E01_5_Aptumšojums_6_0_.png" },
    { id: "ester-e016", label: "ESTER E016", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E01_6_Aptumšojums_6_0_.png" },
    { id: "ester-e011-190", label: "ESTER E011 190", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E011_190_Aptumšojums_6_0_.png" },
    { id: "ester-e012", label: "ESTER E012", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E012_Aptumšojums_6_0_.png" },
    { id: "ester-e020-200", label: "ESTER E020 200", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E020_200_Aptumšojums_6_0_.png" },
    { id: "ester-e021", label: "ESTER E021", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E021_Aptumšojums_6_0_.png" },
    { id: "ester-e022", label: "ESTER E022", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E022_Aptumšojums_6_0_.png" },
    { id: "ester-e024-190", label: "ESTER E024 190", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E024_190_Aptumšojums_6_0_.png" },
    { id: "ester-e033", label: "ESTER E033", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/ESTER_E033_Aptumšojums_6_0_.png" },
  ],
  "ESTER (70%)": [
    { id: "ester-desert-e217", label: "Ester Desert E217", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Ester_Desert_E217_Aptumšojums_70__.png" },
    { id: "ester-earthy-e218", label: "Ester Earthy E218", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Ester_Earthy_E218_Aptumšojums_70__.png" },
    { id: "ester-graphit-e226", label: "Ester Graphit E 226", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Ester_Graphit_E_226_Aptumšojums_7_0__.png" },
  ],
  "Easter Mint 023": [
    { id: "easter-mint-023", label: "Easter Mint 023", description: "Aptumšojums: 70%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Easter_Mint_023_Aptumšojums_70__.png" },
  ],
  FLOWER: [
    { id: "flower-f010", label: "FLOWER F010", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F0_10_Aptumšojums_62__.png" },
    { id: "flower-f011", label: "FLOWER F011", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F0_11_Aptumšojums_62__.png" },
    { id: "flower-f012", label: "FLOWER F012", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F0_12_Aptumšojums_62__.png" },
    { id: "flower-f001", label: "FLOWER F001", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_1_Aptumšojums_6_2__.png" },
    { id: "flower-f002", label: "FLOWER F002", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_2_Aptumšojums_6_2__.png" },
    { id: "flower-f003", label: "FLOWER F003", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_3_Aptumšojums_6_2__.png" },
    { id: "flower-f004", label: "FLOWER F004", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_4_Aptumšojums_6_2__.png" },
    { id: "flower-f005", label: "FLOWER F005", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_5_Aptumšojums_6_2__.png" },
    { id: "flower-f006", label: "FLOWER F006", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_6_Aptumšojums_6_2__.png" },
    { id: "flower-f007", label: "FLOWER F007", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_7_Aptumšojums_6_2__.png" },
    { id: "flower-f008", label: "FLOWER F008", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_8_Aptumšojums_6_2__.png" },
    { id: "flower-f009", label: "FLOWER F009", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/FLOWER_F00_9_Aptumšojums_6_2__.png" },
  ],
  "FLOWER (LT)": [
    { id: "flower-lt-blance", label: "Flower (LT) Blance", description: "", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Flower_(LT)_Blance_Aptumšojums__.png" },
    { id: "flower-lt-dark", label: "Flower (LT) Dark", description: "", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Flower_(LT)_Dark_Aptumšojums__.png" },
    { id: "flower-lt-dull", label: "Flower (LT) Dull", description: "", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Flower_(LT)_Dull_Aptumšojums__.png" },
    { id: "flower-lt-ice", label: "Flower (LT) Ice", description: "", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Flower_(LT)_Ice_Aptumšojums__.png" },
  ],
  LUNA: [
    { id: "luna-l010", label: "LUNA L010", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L0_10_Aptumšojums_62__.png" },
    { id: "luna-l011", label: "LUNA L011", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L0_11_Aptumšojums_62__.png" },
    { id: "luna-l012", label: "LUNA L012", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L0_12_Aptumšojums_62__.png" },
    { id: "luna-l002", label: "LUNA L002", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_2_Aptumšojums_62__.png" },
    { id: "luna-l003", label: "LUNA L003", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_3_Aptumšojums_62__.png" },
    { id: "luna-l004", label: "LUNA L004", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_4_Aptumšojums_62__.png" },
    { id: "luna-l005", label: "LUNA L005", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_5_Aptumšojums_62__.png" },
    { id: "luna-l006", label: "LUNA L006", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_6_Aptumšojums_62__.png" },
    { id: "luna-l007", label: "LUNA L007", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_7_Aptumšojums_62__.png" },
    { id: "luna-l008", label: "LUNA L008", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_8_Aptumšojums_62__.png" },
    { id: "luna-l009", label: "LUNA L009", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L00_9_Aptumšojums_62__.png" },
    { id: "luna-l001", label: "LUNA L001", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/LUNA_L001_Aptumšojums_62__.png" },
  ],
  NEUTRAL: [
    { id: "neutral-n015", label: "NEUTRAL N015", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_1_5_Aptumšojums_60__.png" },
    { id: "neutral-n016", label: "NEUTRAL N016", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_1_6_Aptumšojums_60__.png" },
    { id: "neutral-n019", label: "NEUTRAL N019", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_1_9_Aptumšojums_60__.png" },
    { id: "neutral-n010", label: "NEUTRAL N010", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_10_Aptumšojums_6_0__.png" },
    { id: "neutral-n011", label: "NEUTRAL N011", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_11_Aptumšojums_6_0__.png" },
    { id: "neutral-n012", label: "NEUTRAL N012", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_12_Aptumšojums_60__.png" },
    { id: "neutral-n013", label: "NEUTRAL N013", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_13_Aptumšojums_60__.png" },
    { id: "neutral-n014", label: "NEUTRAL N014", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_14_Aptumšojums_60__.png" },
    { id: "neutral-n017", label: "NEUTRAL N017", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_17_Aptumšojums_60__.png" },
    { id: "neutral-n018", label: "NEUTRAL N018", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_18_Aptumšojums_60__.png" },
    { id: "neutral-n023", label: "NEUTRAL N023", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_2_3_Aptumšojums_60__.png" },
    { id: "neutral-n020", label: "NEUTRAL N020", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_20_Aptumšojums_60__.png" },
    { id: "neutral-n028", label: "NEUTRAL N028", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_28_Aptumšojums_60__.png" },
    { id: "neutral-n029", label: "NEUTRAL N029", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N0_29_Aptumšojums_60__.png" },
    { id: "neutral-n003", label: "NEUTRAL N003", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N00_3_Aptumšojums_6_0__.png" },
    { id: "neutral-n004", label: "NEUTRAL N004", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N00_4_Aptumšojums_6_0__.png" },
    { id: "neutral-n005", label: "NEUTRAL N005", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N00_5_Aptumšojums_6_0__.png" },
    { id: "neutral-n006", label: "NEUTRAL N006", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N00_6_Aptumšojums_6_0__.png" },
    { id: "neutral-n008", label: "NEUTRAL N008", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N00_8_Aptumšojums_6_0__.png" },
    { id: "neutral-n009", label: "NEUTRAL N009", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N00_9_Aptumšojums_6_0__.png" },
    { id: "neutral-n002", label: "NEUTRAL N002", description: "Aptumšojums: 60%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/NEUTRAL_N002_Aptumšojums_6_0__.png" },
  ],
  "VAN GOGH (68%)": [
    { id: "van-gogh-v008", label: "VAN GOGH V008", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V0_08_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v011", label: "VAN GOGH V011", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V0_1_1_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v012", label: "VAN GOGH V012", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V0_12_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v004", label: "VAN GOGH V004", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V00_4_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v005", label: "VAN GOGH V005", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V00_5_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v006", label: "VAN GOGH V006", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V00_6_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v007", label: "VAN GOGH V007", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V00_7_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v009", label: "VAN GOGH V009", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V00_9_Aptumšojums_6_8__.png" },
    { id: "van-gogh-v010", label: "VAN GOGH V010", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/VAN_GOGH_V01_0_Aptumšojums_6_8__.png" },
  ],
  WATER: [
    { id: "water-w010", label: "WATER W010", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W0_10_Aptumšojums_68__.png" },
    { id: "water-w011", label: "WATER W011", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W0_11_Aptumšojums_68__.png" },
    { id: "water-w012", label: "WATER W012", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W0_12_Aptumšojums_68__.png" },
    { id: "water-w002", label: "WATER W002", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_2_Aptumšojums_68__.png" },
    { id: "water-w003", label: "WATER W003", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_3_Aptumšojums_68__.png" },
    { id: "water-w004", label: "WATER W004", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_4_Aptumšojums_68__.png" },
    { id: "water-w005", label: "WATER W005", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_5_Aptumšojums_68__.png" },
    { id: "water-w006", label: "WATER W006", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_6_Aptumšojums_68__.png" },
    { id: "water-w007", label: "WATER W007", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_7_Aptumšojums_68__.png" },
    { id: "water-w008", label: "WATER W008", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_8_Aptumšojums_68__.png" },
    { id: "water-w009", label: "WATER W009", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W00_9_Aptumšojums_68__.png" },
    { id: "water-w001", label: "WATER W001", description: "Aptumšojums: 68%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/WATER_W001_Aptumšojums_68__.png" },
  ],

  // New tone group for LIVELLO (will show only if 'LIVELLO' exists note: handled via material list)
  LIVELLO: [
    { id: "livello-dna-054", label: "Livello DNA 054", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Livello_DN_A05_4_Aptumšojums_6_2__.png" },
  ],

  // Update METALIC tones to include Metalic Cream
  METALIC: [
    { id: "metalic-cream", label: "Metalic Cream", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Metalic_Cream_Aptumšojums_62__.png" },
  ],

  // METALIC WHITE (72%) tone group
  "METALIC WHITE": [
    { id: "metalic-white", label: "Metalic White", description: "Aptumšojums: 72%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Metalic_White_Aptumšojums_7_2__.png" },
  ],

  // Neutral Gold 024 (62%) tone group
  "Neutral Gold 024": [
    { id: "neutral-gold-024", label: "Neutral Gold 024", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Neutral_Gold_024_Aptumšojums_62__.png" },
  ],

  // New tones for ALBEDO
  ALBEDO: [
    { id: "albedo-chik-dn6009", label: "Albedo Chik DN6009", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Albedo_Chik_DN600_9_Aptumšojums_6_2__.png" },
    { id: "albedo-chik-dn6003", label: "Albedo Chik DN6003", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Albedo_Chik_DN6003_Aptumšojums_6_2__.png" },
  ],

  // Updated tones for ARABESKA
  ARABESKA: [
    { id: "arabeska-cream", label: "Arabeska Cream", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Arabeska_Crea_m_Aptumšojums_6_2__.png" },
    { id: "arabeska-rose", label: "Arabeska Rose", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Arabeska_Rose_Aptumšojums_6_2__.png" },
  ],

  // Updated tones for ROYAL
  ROYAL: [
    { id: "royal-light-grey", label: "Royal Light Grey", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Royal_Light_Grey_Aptumšojums_62__.png" },
    { id: "royal-vanila", label: "Royal Vanila", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Royal_Vanila_Aptumšojums_62__.png" },
    { id: "royal-white", label: "Royal White", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Royal_White_Aptumšojums_62__.png" },
  ],

  // Updated tones for TALIA
  TALIA: [
    { id: "talia-brown", label: "Talia Brown", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Talia_Brown_Aptumšojums_62__.png" },
    { id: "talia-grey", label: "Talia Grey", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Talia_Grey_Aptumšojums_62__.png" },
    { id: "talia-peah", label: "Talia Peah", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Talia_Pea_h_Aptumšojums_62__.png" },
    { id: "talia-white", label: "Talia White", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Talia_White_Aptumšojums_62__.png" },
  ],

  // Updated tones for TOPAZ
  TOPAZ: [
    { id: "topaz-arena", label: "Topaz Arena", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Topaz_Arena_Aptumšojums_62__.png" },
    { id: "topaz-coral", label: "Topaz Coral", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Topaz_Coral_Aptumšojums_62__.png" },
    { id: "topaz-green", label: "Topaz Green", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Topaz_Green_Aptumšojums_62__.png" },
  ],

  // New tones for ZEBRA
  ZEBRA: [
    { id: "zebra-dn-3103", label: "Zebra DN 3103", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3103_Aptumšojums_62__.png" },
    { id: "zebra-dn-3105", label: "Zebra DN 3105", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3105_Aptumšojums_62__.png" },
    { id: "zebra-dn-3606", label: "Zebra DN 3606", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3606_Aptumšojums_62__.png" },
  ],
  // Map ZEBRA tones to each ZEBRA material group so tones appear when those materials are selected
  "ZEBRA 3100-3104": [
    { id: "zebra-dn-3103", label: "Zebra DN 3103", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3103_Aptumšojums_62__.png" },
    { id: "zebra-dn-3105", label: "Zebra DN 3105", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3105_Aptumšojums_62__.png" },
    { id: "zebra-dn-3606", label: "Zebra DN 3606", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3606_Aptumšojums_62__.png" },
  ],
  "ZEBRA 3105-3200": [
    { id: "zebra-dn-3103", label: "Zebra DN 3103", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3103_Aptumšojums_62__.png" },
    { id: "zebra-dn-3105", label: "Zebra DN 3105", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3105_Aptumšojums_62__.png" },
    { id: "zebra-dn-3606", label: "Zebra DN 3606", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3606_Aptumšojums_62__.png" },
  ],
  "ZEBRA BO": [
    { id: "zebra-dn-3103", label: "Zebra DN 3103", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3103_Aptumšojums_62__.png" },
    { id: "zebra-dn-3105", label: "Zebra DN 3105", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3105_Aptumšojums_62__.png" },
    { id: "zebra-dn-3606", label: "Zebra DN 3606", description: "Aptumšojums: 62%", image: "https://ik.imagekit.io/vbvwdejj5/zmk/Rullo/Zebra_DN_3606_Aptumšojums_62__.png" },
  ],
}

type Constraint = {
  maxWidth: number
  maxHeight: number
}

const SYSTEM_CONSTRAINTS_KASETU: Record<string, Constraint> = {
  "VARIO 13 Kasete (balta)": { maxWidth: 1.5, maxHeight: 1.3 },
  "VARIO 13 Kasete (krāsaina)": { maxWidth: 1.5, maxHeight: 1.3 },
  "VARIO 17 Kasete (balts)": { maxWidth: 1.6, maxHeight: 2 },
  "VARIO 17 Kasete (krāsaina)": { maxWidth: 1.6, maxHeight: 2 },
  "VARIO Uprofils Kasete (balts)": { maxWidth: 1.6, maxHeight: 2 },
  "VARIO Uprofils Kasete (krāsains)": { maxWidth: 1.6, maxHeight: 2 },
}

const SYSTEM_CONSTRAINTS_RULLO: Record<string, Constraint> = {
  "VARIO 25 Rullo (balts)": { maxWidth: 2.2, maxHeight: 3 },
  "VARIO 25 Rullo (krāsains)": { maxWidth: 2.2, maxHeight: 3 },
  "VARIO 32 Rullo (balts)": { maxWidth: 2.2, maxHeight: 3 },
  "VARIO 32 Rullo (krāsains)": { maxWidth: 2.2, maxHeight: 3 },
}

const VERTIKALAS_CONSTRAINTS: Record<string, Constraint> = {
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

const INSTALLATION_FEE = 20

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getAvailableSystems(
  material: string,
  widthMm: number,
  heightMm: number,
  priceTable: PriceTable,
  constraints: Record<string, Constraint>,
) {
  const systems = priceTable[material]
  if (!systems) return []

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000

  return Object.keys(systems).filter((system) => {
    const constraint = constraints[system]
    if (!constraint) return false
    return widthM <= constraint.maxWidth && heightM <= constraint.maxHeight
  })
}

type CalculatorContext = "rullo" | "rullo-kasetu" | "vertikalas"

function calculatePrice(
  material: string,
  system: string,
  widthMm: number,
  heightMm: number,
  includeInstallation: boolean,
  toneId: string,
  priceTable: PriceTable,
  toneOverridesMap: Record<string, Record<string, number>>,
  context: CalculatorContext,
): CalculationResult {
  if (!material || !system) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const toneOverrides = toneOverridesMap[toneId]
  const basePrice = toneOverrides?.[system] ?? priceTable[material]?.[system]
  if (!basePrice) {
    return { price: "0,00", isValid: false, breakdown: null }
  }

  const widthM = widthMm / 1000
  const heightM = heightMm / 1000

  const chargeableWidth = context === "vertikalas" ? widthM : Math.max(widthM, 0.5)

  const cost = context === "vertikalas"
    ? chargeableWidth * heightM * basePrice
    : (heightM > 2
        ? chargeableWidth * basePrice * 1.5
        : heightM > 1.5
          ? chargeableWidth * basePrice * 1.2
          : chargeableWidth * basePrice)

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

type RulloCalculatorProps = {
  context?: "rullo" | "rullo-kasetu"
  title?: string
  instanceKey?: string
}

export default function RulloCalculator({ context = "rullo-kasetu", title, instanceKey }: RulloCalculatorProps) {
  const isVertikalas = instanceKey === "vertikalas"
  const effectiveContext = isVertikalas ? "vertikalas" : context

  const priceTable =
    effectiveContext === "rullo-kasetu"
      ? TM_PRICE_DATA_KASETU
      : effectiveContext === "rullo"
        ? TM_PRICE_DATA_RULLO
        : VERTIKALAS_PRICE_TABLE
  const toneOverridesMap =
    effectiveContext === "rullo-kasetu"
      ? TONE_PRICE_OVERRIDES_KASETU
      : effectiveContext === "rullo"
        ? TONE_PRICE_OVERRIDES_RULLO
        : EMPTY_TONE_OVERRIDES
  const constraintsMap =
    effectiveContext === "rullo-kasetu"
      ? SYSTEM_CONSTRAINTS_KASETU
      : effectiveContext === "rullo"
        ? SYSTEM_CONSTRAINTS_RULLO
        : VERTIKALAS_CONSTRAINTS
  const systemVisualMap =
    effectiveContext === "rullo-kasetu"
      ? SYSTEM_IMAGE_INFO_KASETU
      : effectiveContext === "rullo"
        ? SYSTEM_IMAGE_INFO_RULLO
        : {}

  const [material, setMaterial] = useState("")
  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState(1000)
  const [system, setSystem] = useState("")
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [downloadPending, setDownloadPending] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)
  const [toneId, setToneId] = useState("")
  const [darkening, setDarkening] = useState<number | null>(null)
  const [isMaxSizesOpen, setIsMaxSizesOpen] = useState(false)

  const calculatorRef = useRef<HTMLDivElement>(null)
  const sectionRefs = {
    darkening: useRef<HTMLDivElement>(null),
    material: useRef<HTMLDivElement>(null),
    tone: useRef<HTMLDivElement>(null),
    system: useRef<HTMLDivElement>(null),
    width: useRef<HTMLDivElement>(null),
    height: useRef<HTMLDivElement>(null),
  }

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const systemOptions = useMemo<SystemOption[]>(() => {
    if (isVertikalas) {
      return VERTIKALAS_SYSTEM_OPTIONS
    }

    return getAvailableSystems(material, width, height, priceTable, constraintsMap).map((system) => ({
      value: system,
      label: system,
    }))
  }, [constraintsMap, height, isVertikalas, material, priceTable, width])

  const activeMaxWidthMm = useMemo(() => {
    if (!system) {
      return MAX_WIDTH_MM
    }
    const constraint = constraintsMap[system]
    if (!constraint) {
      return MAX_WIDTH_MM
    }
    return Math.min(Math.floor(constraint.maxWidth * 1000), MAX_WIDTH_MM)
  }, [system, constraintsMap])

  const activeMaxHeightMm = useMemo(() => {
    if (!system) {
      return MAX_HEIGHT_MM
    }
    const constraint = constraintsMap[system]
    if (!constraint) {
      return MAX_HEIGHT_MM
    }
    return Math.min(Math.floor(constraint.maxHeight * 1000), MAX_HEIGHT_MM)
  }, [system, constraintsMap])

  const filteredMaterialOptions = useMemo(() => {
    if (isVertikalas) {
      return VERTIKALAS_MATERIAL_OPTIONS
    }

    if (darkening === null) {
      return ALL_MATERIAL_OPTIONS
    }
    return ALL_MATERIAL_OPTIONS.filter((option) => {
      const levels = MATERIAL_BLACKOUT_LEVELS[option]
      if (!levels) return false
      return levels.includes(darkening)
    })
  }, [darkening, isVertikalas])

  // Reset downstream selections when an earlier choice changes
  useEffect(() => {
    if (isVertikalas) {
      setSystem("")
      return
    }

    // Darkening changed -> require re-confirming later steps
    setToneId("")
    setSystem("")
  }, [darkening, isVertikalas])

  useEffect(() => {
    // Material changed -> reset tone and system
    if (!isVertikalas) {
      setToneId("")
    }
    setSystem("")
  }, [isVertikalas, material])

  useEffect(() => {
    // Tone changed -> reset system confirmation
    setSystem("")
  }, [toneId])

  const toneOptions = useMemo(() => (isVertikalas ? [] : TONE_OPTIONS[material] ?? []), [isVertikalas, material])

  useEffect(() => {
    // Keep current material if still valid; otherwise clear it.
    setMaterial((current) => (current && filteredMaterialOptions.includes(current) ? current : ""))
  }, [filteredMaterialOptions])

  useEffect(() => {
    // Only preserve tone if still valid; do not auto-select a default.
    setToneId((current) => (current && toneOptions.some((tone) => tone.id === current) ? current : ""))
  }, [toneOptions])

  useEffect(() => {
    // Only preserve system if still valid; do not auto-select a default.
    setSystem((current) =>
      current && systemOptions.some((option) => option.value === current) ? current : "",
    )
  }, [systemOptions])

  useEffect(() => {
    setWidth((current) => clamp(current, MIN_WIDTH_MM, activeMaxWidthMm))
  }, [activeMaxWidthMm])

  useEffect(() => {
    setHeight((current) => clamp(current, MIN_HEIGHT_MM, activeMaxHeightMm))
  }, [activeMaxHeightMm])

  const result = useMemo(
    () =>
      calculatePrice(
        material,
        system,
        width,
        height,
        includeInstallation,
        toneId,
        priceTable,
        toneOverridesMap,
        effectiveContext,
      ),
    [effectiveContext, includeInstallation, material, priceTable, system, height, toneId, toneOverridesMap, width],
  )

  const formatCurrency = (value: number) => `${numberFormatter.format(value)} €`
  const selectedTone = useMemo(
    () => toneOptions.find((tone) => tone.id === toneId) ?? null,
    [toneId, toneOptions],
  )

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

      const selectedSystemInfo = system ? systemVisualMap[system] : null

      const notesLines = [
        { text: '* Šis ir informatīvs cenas aprēķins. Gala cena var atšķirties.', style: 'notes', margin: [0, 10, 0, 2] },
      ]

      if (includeInstallation) {
        notesLines.push({ text: '* Cenas aprēķinā iekļauti montāžas pakalpojumi.', style: 'notes', margin: [0, 0, 0, 0] })
      } else {
        notesLines.push({ text: '* Montāžas pakalpojumi nav iekļauti cenā.', style: 'notes', margin: [0, 0, 0, 0] })
      }

      let systemImageDataUrl: string | null = null
      if (selectedSystemInfo?.image) {
        try {
          const res = await fetch(selectedSystemInfo.image)
          if (res.ok) {
            const blob = await res.blob()
            systemImageDataUrl = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader()
              reader.onloadend = () => resolve(reader.result as string)
              reader.onerror = reject
              reader.readAsDataURL(blob)
            })
          }
        } catch (_) {
          systemImageDataUrl = null
        }
      }

      // Try to embed selected tone image into the PDF (pdfmake requires data URL/base64)
      let toneImageDataUrl: string | null = null
      if (selectedTone && selectedTone.image) {
        try {
          const res = await fetch(selectedTone.image)
          if (res.ok) {
            const blob = await res.blob()
            toneImageDataUrl = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader()
              reader.onloadend = () => resolve(reader.result as string)
              reader.onerror = reject
              reader.readAsDataURL(blob)
            })
          }
        } catch (_) {
          toneImageDataUrl = null
        }
      }

      const formatToneValueForPdf = (toneOption?: ToneOption | null) => {
        if (!toneOption) {
          return 'Nav izvēlēts'
        }
        const numericMatches = toneOption.description.match(/\d+(?:[.,]\d+)?/g)
        const numericPart = numericMatches && numericMatches.length > 0 ? numericMatches.join(' ') : ''
        return numericPart ? `${toneOption.label} ${numericPart}` : toneOption.label
      }

      const content: any[] = [
        { text: 'Cenas Aprēķins', style: 'h1' },
        { text: `Žalūziju cenas kalkulators v${APP_VERSION}`, style: 'sub' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: '#e5e7eb' }] },
        { text: `\nDatums: ${dateStr}`, margin: [0, 14, 0, 0] },
        { text: 'Specifikācija:', style: 'sectionTitle' },
        {
          table: {
            widths: [100, '*'],
            body: [
              [{ text: 'Aptumšošana:', style: 'label' }, darkening ? `${darkening}%` : 'Visi' ],
              [{ text: 'Materiāls:', style: 'label' }, material || 'Nav izvēlēts'],
              [{ text: 'Sistēma:', style: 'label' }, system || 'Nav izvēlēta' ],
              [{ text: 'Tonis:', style: 'label' }, formatToneValueForPdf(selectedTone) ],
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
      ]

      if (system && systemImageDataUrl) {
        const columns: any[] = [{ image: systemImageDataUrl, width: 160 }]
        if (toneImageDataUrl) {
          columns.push({ image: toneImageDataUrl, width: 120 })
        }
        content.push({ columns, columnGap: 24, margin: [0, 12, 0, 6] })
      }

      if (result.breakdown) {
        const { product, installation, total } = result.breakdown
        const installationText =
          installation > 0
            ? `+${numberFormatter.format(installation)} €`
            : `${numberFormatter.format(installation)} €`

        content.push({ text: 'Cenas sadalījums:', style: 'sectionTitle', margin: [0, 16, 0, 6] })
        content.push({
          table: {
            widths: ['*', 'auto'],
            body: [
              [{ text: 'Žalūzijas cena:', style: 'label' }, `${numberFormatter.format(product)} €`],
              [{ text: 'Montāža:', style: 'label' }, installationText],
              [
                { text: 'Kopā ar PVN:', style: 'label' },
                { text: `${numberFormatter.format(total)} €`, bold: true },
              ],
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
        })
      }

      if (toneImageDataUrl && !(system && systemImageDataUrl)) {
        content.push({ image: toneImageDataUrl, width: 140, margin: [0, 10, 0, 4] })
      }

      content.push({ text: '\n' })
      content.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.8, lineColor: '#e5e7eb' }] })
      content.push({
        columns: [
          notesLines,
          [
            { text: 'KOPĒJĀ CENA AR PVN:', style: 'totalLabel', margin: [0, 0, 0, 4] },
            { text: prettyPrice, style: 'totalValue' },
          ],
        ],
        columnGap: 12,
        margin: [0, 10, 0, 0],
      })

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
          systemTitle: { fontSize: 13, bold: true, color: '#0f172a' },
          systemSubtitle: { fontSize: 10, color: '#4b5563' },
        },
        content,
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
    <div
      className="w-full rounded-3xl bg-sky-50 p-6 shadow-sm sm:p-10"
      data-component-name={`RulloCalculator${instanceKey ? `-${instanceKey}` : ""}`}
      id={`rullo-calculator${instanceKey ? `-${instanceKey}` : ""}`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title ?? "Cenas kalkulators"}</h2>
        {/* Maksimālie izmēri Modal */}
      {isMaxSizesOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="max-sizes-title"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMaxSizesOpen(false)} />
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 id="max-sizes-title" className="text-lg font-semibold text-gray-900">Maksimālie izmēri</h3>
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
              {isVertikalas ? (
                <>
                  <p>Žalūziju maksimālais platums - 3,00 m.</p>
                  <p>Žalūziju maksimālais augstums – 3,50 m.</p>
                </>
              ) : (
                <>
                  <p>mak. izmērs - P1500xA1300 (Vario 13)</p>
                  <p>mak. izmērs - P1600xA2000 (Vario 17)</p>
                  <p>mak. izmērs - P1600xA2000 (Vario 25)</p>
                </>
              )}
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

      </div>

      <div ref={calculatorRef} className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          {!isVertikalas && (
          <div>
            <p className="text-sm font-medium text-gray-700">Izvēlieties aptumšošanas līmeni</p>
            <p className="mt-1 text-xs text-gray-500">Tas filtrēs pieejamos materiālus pēc aptumšošanas procentiem.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setDarkening(null)
                  scrollTo(sectionRefs.material)
                }}
                className={cn(
                  "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition",
                  darkening === null
                    ? "border-sky-500 bg-sky-50 text-sky-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-sky-400 hover:text-sky-700",
                )}
                aria-pressed={darkening === null}
              >
                Visi
              </button>
              {DARKENING_LEVELS.map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => {
                    setDarkening(level)
                    scrollTo(sectionRefs.material)
                  }}
                  className={cn(
                    "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition",
                    darkening === level
                      ? "border-sky-500 bg-sky-50 text-sky-700"
                      : "border-gray-200 bg-white text-gray-700 hover:border-sky-400 hover:text-sky-700",
                  )}
                  aria-pressed={darkening === level}
                >
                  {level}%
                </button>
              ))}
            </div>
          </div>
          )}

          <div ref={sectionRefs.material}>
            <label htmlFor="material" className="block text-sm font-medium text-gray-700">
              Izvēlieties materiālu
            </label>
            <select
              id="material"
              value={material}
              onChange={(event) => {
                const v = event.target.value
                setMaterial(v)
                if (v) {
                  scrollTo(isVertikalas ? sectionRefs.system : sectionRefs.tone)
                }
              }}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={filteredMaterialOptions.length === 0}
            >
              {filteredMaterialOptions.length === 0 ? (
                <option value="">Nav pieejamu materiālu izvēlētajam aptumšojumam</option>
              ) : (
                <>
                  <option value="">Izvēlieties materiālu</option>
                  {filteredMaterialOptions.map((option) => {
                    if (isVertikalas) {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    }

                    const blackout = MATERIAL_BLACKOUT_INFO[option]
                    const label = blackout ? `${option} ${blackout}` : option
                    return (
                      <option key={option} value={option}>
                        {label}
                      </option>
                    )
                  })}
                </>
              )}
            </select>

            {filteredMaterialOptions.length === 0 && (
              <p className="mt-2 text-sm text-red-600">Izvēlētajam aptumšošanas līmenim nav pieejamu materiālu. Lūdzu, mēģiniet citu līmeni.</p>
            )}

            {!isVertikalas && toneOptions.length > 0 && filteredMaterialOptions.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-700">Izvēlieties materiāla toni</p>
                <p className="mt-1 text-xs text-gray-500">Klikšķiniet uz toņa, lai apskatītu lielāku paraugu un iekļautu to PDF aprēķinā.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {toneOptions.map((tone) => (
                    <button
                      type="button"
                      key={tone.id}
                      onClick={() => {
                        setToneId(tone.id)
                        scrollTo(sectionRefs.system)
                      }}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition shadow-sm",
                        toneId === tone.id
                          ? "border-sky-500 bg-sky-50"
                          : "border-gray-200 bg-white hover:border-sky-400 hover:bg-sky-50/60",
                      )}
                      aria-pressed={toneId === tone.id}
                    >
                      {tone.image ? (
                        <img
                          src={tone.image}
                          alt={`${tone.label} paraugs`}
                          className="h-10 w-10 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-[0.65rem] font-semibold text-slate-600">
                          Tone
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{tone.label}</div>
                        <div className="text-xs text-gray-500">{tone.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {!isVertikalas && !material && toneOptions.length === 0 && (
              <p className="mt-3 text-xs text-gray-500">Izvēlieties materiālu, lai turpinātu ar toņa izvēli.</p>
            )}
          </div>

          <div ref={sectionRefs.system}>
            <div className="flex items-center justify-between">
              <label htmlFor="system" className="block text-sm font-medium text-gray-700">
                {isVertikalas ? "Izvēlieties izmēru" : "Izvēlieties sistēmu"}
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
              id="system"
              value={system}
              onChange={(event) => {
                const v = event.target.value
                setSystem(v)
                if (v) {
                  scrollTo(sectionRefs.width)
                }
              }}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={systemOptions.length === 0}
            >
              {systemOptions.length === 0 ? (
                <option value="">Nav piemērotu sistēmu</option>
              ) : (
                <>
                  <option value="">{isVertikalas ? "Izvēlieties izmēru" : "Izvēlieties sistēmu"}</option>
                  {systemOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </>
              )}
            </select>
            {systemOptions.length === 0 && system && (
              <p className="mt-2 text-sm text-red-600">
                Izvēlētie izmēri pārsniedz pieejamos sistēmu parametrus.
              </p>
            )}
            {system && systemVisualMap[system] && (
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                <img
                  src={systemVisualMap[system].image}
                  alt={`${systemVisualMap[system].label} sistēmas paraugs`}
                  className="h-28 w-40 rounded-xl object-cover shadow-sm"
                />
                <div>
                  <p className="text-sm font-medium text-sky-600">Izvēlētā sistēma</p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">{systemVisualMap[system].label}</h3>
                </div>
              </div>
            )}
            {!toneId && toneOptions.length > 0 && (
              <p className="mt-2 text-xs text-gray-500">Izvēlieties materiāla toni, lai aktivizētu sistēmas izvēli.</p>
            )}
          </div>

          <div ref={sectionRefs.width}>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700">
              Platums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="width"
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
            {!system && (
              <p className="mt-2 text-xs text-gray-500">Izvēlieties sistēmu, lai norādītu precīzus izmērus.</p>
            )}
          </div>

          <div ref={sectionRefs.height}>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Augstums (mm)
            </label>
            <div className="mt-2 flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <input
                id="height"
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
            <p className="mt-1 text-xs text-gray-500">
              Pieejamais diapazons: {MIN_HEIGHT_MM}–{activeMaxHeightMm} mm
            </p>
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
                    <dd>
                      {`+${numberFormatter.format(result.breakdown.installation)} €`}
                    </dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-semibold text-gray-900">Kopā ar PVN</dt>
                  <dd className="font-semibold text-gray-900">{formatCurrency(result.breakdown.total)}</dd>
                </div>
              </dl>
            </div>
          )}
          {(() => {
            const toneLabel = selectedTone?.label || "—"
            const install = includeInstallation ? "Jā" : "Nē"
            const priceText = result?.breakdown?.total
              ? `${formatCurrency(result.breakdown.total)}`
              : `${result?.price ?? "—"}`
            const lines = [
              `Aprēķins (rullo):`,
              `• Materiāla tonis: ${toneLabel}`,
              `• Sistēma: ${system || "—"}`,
              `• Izmērs (mm): ${width} x ${height}`,
              `• Montāža: ${install}`,
              `• Kopā ar PVN: ${priceText}`,
            ]
            const summary = lines.join("\n")
            const href = `/kontakti?calc=${encodeURIComponent(summary)}`
            return (
              <Link
                href={href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Aizpildīt pieteikumu
              </Link>
            )
          })()}
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
          <p className="mt-4 w-full text-left text-xs text-gray-500" data-component-name="RulloCalculator">
            *kalkulatorā norādītā cena ir informatīva,<br />
            tā var atšķirties no gala piedāvājuma
          </p>
        </div>
      </div>

      {selectedTone && (
        <div className="mt-10 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            {selectedTone.image ? (
              <img
                src={selectedTone.image}
                alt={`${selectedTone.label} paraugs`}
                className="h-40 w-full max-w-[280px] rounded-2xl object-cover md:h-48"
              />
            ) : (
              <div className="h-40 w-full max-w-[280px] rounded-2xl bg-slate-200 md:h-48" aria-hidden="true" />
            )}
            <div>
              <p className="text-sm font-medium text-sky-600">Izvēlētais tonis</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{selectedTone.label}</h3>
              <p className="mt-1 text-sm text-gray-600">{selectedTone.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
