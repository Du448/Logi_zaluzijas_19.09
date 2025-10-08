"use client"
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/data'
import { setSelectedProfile } from '@/lib/selection-store'

type Profile = { key: string; label: string }
type Extra = { key: string; label: string; add: number }

export default function SeriesConfigurator({
  seriesSlug,
  title,
  image,
  basePrice = 294,
}: {
  seriesSlug: string
  title: string
  image: string
  basePrice?: number
}){
  const imageByProfile: Record<string, string> = {
    'aluplast4000-2': 'https://ik.imagekit.io/vbvwdejj5/aluplast-ideal-4000%20-%20Edited.png?updatedAt=1757846173143',
    'aluplast4000-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/aluplast-ideal-4000%203%20stikli.jpg?updatedAt=1755884036029',
    'aluplast7000-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/ideal-7000-3.jpg?updatedAt=1755884035885',
    'wital7000-2': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/Wital%20prestige%207000.png?updatedAt=1755884036156',
    'wital7000-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/7000_prestige-1%203333.png?updatedAt=1755884036324',
    'wital-therm-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/Wital-80-1-640x640.jpg?updatedAt=1755884480903',
    'rehau-synego-3': 'https://ik.imagekit.io/vbvwdejj5/Rehau-SYNEGO-1%20-%20Edited.png?updatedAt=1757845341898',
  }
  const profiles: Profile[] = [
    { key: 'aluplast4000-2', label: 'Aluplast 4000 - 2 stikli' },
    { key: 'aluplast4000-3', label: 'Aluplast 4000 - 3 stikli' },
    { key: 'aluplast7000-3', label: 'Aluplast 7000 - 3 stikli' },
    { key: 'wital7000-2', label: 'Wital 7000 prestige - 2 stikli' },
    { key: 'wital7000-3', label: 'Wital 7000 prestige - 3 stikli' },
    { key: 'wital-therm-3', label: 'Wital prestige therm light - 3 stikli' },
    { key: 'rehau-synego-3', label: 'Rehau SYNEGO MD - 3 stikli' },
  ]

  const extras: Extra[] = [
    { key: 'extra-leaf', label: 'Papildus vērtne', add: 5 },
    { key: 'jambs-trim', label: 'Logu aiļu apdare', add: 5 },
    { key: 'debris', label: 'Būvgružu un atkritumu izvešana', add: 5 },
  ]

  const [qty, setQty] = useState(1)
  const [selectedProfileIdx, setSelectedProfileIdx] = useState(0)
  const [selectedExtras, setSelectedExtras] = useState<Record<string, boolean>>({})

  // Exact prices by profile
  const profilePrices: number[] = [
    294, // Aluplast 4000 - 2
    350, // Aluplast 4000 - 3
    420, // Aluplast 7000 - 3
    296, // Wital 7000 prestige - 2
    356, // Wital 7000 prestige - 3
    430, // Wital prestige therm light - 3
    520, // Rehau SYNEGO MD - 3
  ]

  const baseProfilePrice = profilePrices[selectedProfileIdx] ?? basePrice
  const extrasAdd = Object.values(selectedExtras).filter(Boolean).length * 5
  const price = baseProfilePrice + extrasAdd

  const { add } = useCart()

  function toggleExtra(key: string){
    setSelectedExtras(prev => ({...prev, [key]: !prev[key]}))
  }

  function onAddToCart(){
    const prof = profiles[selectedProfileIdx]
    const extrasChosen = extras.filter(e=>selectedExtras[e.key])
    // Create a unique id per configuration so items stack by exact config
    const id = `proj-103-${prof.key}-${extrasChosen.map(e=>e.key).join('_')||'none'}`
    const previewImage = imageByProfile[prof.key] || image
    const product: Product = {
      id,
      slug: seriesSlug,
      name: `${title} – ${prof.label}`,
      short: 'Konfigurēts PVC logs',
      description: `Profils: ${prof.label}. Papildus: ${extrasChosen.map(e=>e.label).join(', ')||'nav'}.`,
      price: price,
      category: 'logi',
      image: previewImage,
    }
    for(let i=0;i<qty;i++) add(product)
  }

  return (
    <div className="card p-4">
      <div className="mb-4">
        <div
          className="h-40 md:h-48 w-full bg-cover bg-center rounded border border-gray-200"
          style={{
            backgroundImage: `url(${imageByProfile[profiles[selectedProfileIdx]?.key] || image})`,
          }}
        />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-xl font-semibold">{price.toFixed(2)} €</div>
        <input
          type="number"
          className="input w-20"
          min={1}
          value={qty}
          onChange={e=>setQty(Math.max(1, Number(e.target.value)||1))}
        />
      </div>

      <div className="mb-4">
        <div className="font-medium mb-2">PVC logi</div>
        <div className="space-y-2">
          {profiles.map((p, idx)=> (
            <label key={p.key} className="flex items-start cursor-pointer" onClick={()=>setSelectedProfile(p.key as any)}>
              <span className="w-6 shrink-0 flex items-start justify-center pt-0.5">
                <input
                  type="radio"
                  name="profile"
                  className="radio"
                  checked={selectedProfileIdx===idx}
                  onChange={()=>{
                    setSelectedProfileIdx(idx)
                    setSelectedProfile(p.key as any)
                  }}
                />
              </span>
              <span className="ml-2 leading-snug">{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="font-medium mb-2">Papildus pakalpojumi</div>
        <div className="space-y-2">
          {extras.map(e=> (
            <label key={e.key} className="flex items-start cursor-pointer">
              <span className="w-6 shrink-0 flex items-start justify-center pt-0.5">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={!!selectedExtras[e.key]}
                  onChange={()=>toggleExtra(e.key)}
                />
              </span>
              <span className="ml-2 leading-snug">{e.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="btn w-full" onClick={onAddToCart}>
        Pievienot grozam
      </button>
    </div>
  )
}
