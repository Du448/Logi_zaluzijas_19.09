import React from "react"

export type Item = {
  width: string
  height: string
  priceFrom: number
  image: string
}

export type Section = {
  title: string
  items: Item[]
}

export const defaultSections: Section[] = [
  {
    title: 'Logi virtuvei',
    items: [
      { width: '1150mm', height: '1420mm', priceFrom: 181, image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/103%20s/103v1.png?updatedAt=1758645840843' },
      { width: '1150mm', height: '1420mm', priceFrom: 187, image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/103%20s/103v2.png?updatedAt=1758645840858' },
      { width: '1150mm', height: '1420mm', priceFrom: 188, image: 'https://ik.imagekit.io/vbvwdejj5/103v3.png?updatedAt=1758649829661' },
    ]
  },
  {
    title: 'Logi istabai',
    items: [
      { width: '2400mm', height: '1410mm', priceFrom: 345, image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/103%20s/103i1.png?updatedAt=1758645840895' },
      { width: '2400mm', height: '1410mm', priceFrom: 289, image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/103%20s/103i2.png?updatedAt=1758645840870' },
      { width: '2500mm', height: '1410mm', priceFrom: 310, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/room-3.png?updatedAt=1758030000000' },
    ]
  },
  {
    title: 'Balkonu logi',
    items: [
      { width: '2090mm', height: '2150mm', priceFrom: 394, image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/103%20s/103b1.png?updatedAt=1758645840807' },
      { width: '1850mm', height: '2150mm', priceFrom: 287, image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/103%20s/103b2.png?updatedAt=1758645840803' },
      { width: '2500mm', height: '2150mm', priceFrom: 333, image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/103%20s/103b3.png?updatedAt=1758645840845' },
    ]
  },
]

export default function SeriesPricingGrid({ sections }: { sections?: Section[] }){
  const data = sections ?? defaultSections
  return (
    <section className="mt-10">
      <div className="space-y-10">
        {data.map((section, sIdx) => (
          <div key={section.title}>
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <article key={idx} className="relative rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    {/* Image preview */}
                    <img
                      src={item.image}
                      alt={`${section.title} – Profils ${sIdx * 3 + idx + 1} (${item.width} x ${item.height})`}
                      className="absolute inset-0 w-full h-full object-contain bg-white"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-white/85 text-red-600 font-semibold shadow-sm">
                      no {item.priceFrom} EUR*
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
        <p className="text-xs text-gray-500">* Cenas ir orientējošas un var mainīties atkarībā no konfigurācijas, furnitūras un montāžas apstākļiem.</p>
      </div>
    </section>
  )
}
