import React from "react"

type Item = {
  width: string
  height: string
  priceFrom: number
  image: string
}

type Section = {
  title: string
  items: Item[]
}

const sections: Section[] = [
  {
    title: 'Logi virtuvei',
    items: [
      { width: '1150mm', height: '1420mm', priceFrom: 181, image: 'https://ik.imagekit.io/vbvwdejj5/Profili%20ar%20izm%C4%93riem/ke2eu5ke2e.png?updatedAt=1758220198847' },
      { width: '1150mm', height: '1420mm', priceFrom: 187, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/kitchen-2.png?updatedAt=1758030000000' },
      { width: '1150mm', height: '1420mm', priceFrom: 188, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/kitchen-3.png?updatedAt=1758030000000' },
    ]
  },
  {
    title: 'Logi istabai',
    items: [
      { width: '2400mm', height: '1410mm', priceFrom: 345, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/room-1.png?updatedAt=1758030000000' },
      { width: '2400mm', height: '1410mm', priceFrom: 289, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/room-2.png?updatedAt=1758030000000' },
      { width: '2500mm', height: '1410mm', priceFrom: 310, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/room-3.png?updatedAt=1758030000000' },
    ]
  },
  {
    title: 'Balkonu logi',
    items: [
      { width: '2090mm', height: '2150mm', priceFrom: 394, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/balcony-1.png?updatedAt=1758030000000' },
      { width: '1850mm', height: '2150mm', priceFrom: 287, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/balcony-2.png?updatedAt=1758030000000' },
      { width: '2500mm', height: '2150mm', priceFrom: 333, image: 'https://ik.imagekit.io/vbvwdejj5/series-diagrams/balcony-3.png?updatedAt=1758030000000' },
    ]
  },
]

export default function SeriesPricingGrid(){
  return (
    <section className="mt-10">
      <div className="space-y-10">
        {sections.map((section, sIdx) => (
          <div key={section.title}>
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <article key={idx} className="relative rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    {/* Placeholder tile */}
                    <div
                      aria-label={`${section.title} profils ${sIdx * 3 + idx + 1}`}
                      className="absolute inset-0 w-full h-full grid place-items-center bg-gray-100 text-gray-600"
                    >
                      <span className="text-lg md:text-xl font-semibold">{`Profils ${sIdx * 3 + idx + 1}`}</span>
                    </div>
                    {/* Top-left profile label */}
                    <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-white/85 text-gray-800 font-semibold shadow-sm">
                      {`Profils ${sIdx * 3 + idx + 1}`}
                    </div>
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
