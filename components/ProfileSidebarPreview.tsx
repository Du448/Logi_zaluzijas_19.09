"use client"

import { useEffect, useState } from 'react'
import { getSelectedProfile, subscribeSelectedProfile } from '@/lib/selection-store'

const imageByProfile: Record<string, string> = {
  'aluplast4000-2': 'https://ik.imagekit.io/vbvwdejj5/aluplast-ideal-4000%20-%20Edited.png?updatedAt=1757846173143',
  'aluplast4000-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/aluplast-ideal-4000%203%20stikli.jpg?updatedAt=1755884036029',
  'aluplast7000-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/ideal-7000-3.jpg?updatedAt=1755884035885',
  'wital7000-2': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/Wital%20prestige%207000.png?updatedAt=1755884036156',
  'wital7000-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/7000_prestige-1%203333.png?updatedAt=1755884036324',
  'wital-therm-3': 'https://ik.imagekit.io/vbvwdejj5/Logu%20apdares%20foto/Logu%20profilu%20foto/Wital-80-1-640x640.jpg?updatedAt=1755884480903',
  'rehau-synego-3': 'https://ik.imagekit.io/vbvwdejj5/Rehau-SYNEGO-1%20-%20Edited.png?updatedAt=1757845341898',
}

export default function ProfileSidebarPreview(){
  const [key, setKey] = useState<string>(getSelectedProfile())

  useEffect(()=>{
    const unsub = subscribeSelectedProfile(({key})=> setKey(key))
    return unsub
  },[])

  const url = imageByProfile[key]
  if (!url) return null

  return (
    <div className="mt-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="Izvēlētais profils" className="w-full rounded-lg border border-gray-100 shadow-sm" />
    </div>
  )
}
