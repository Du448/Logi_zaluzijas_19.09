import Link from 'next/link'
import { series } from '@/lib/series'
// Removed SeriesConfigurator and ProfileSidebarPreview
import Gallery from '@/components/Gallery'
import SeriesPricingGrid, { defaultSections } from '@/components/SeriesPricingGrid'
import { SeriesHero } from '@/components/SeriesHero'
import Highlights from '@/components/Highlights'
import InfoCards from '@/components/InfoCards'
import FAQ from '@/components/FAQ'
import StickyCTA from '@/components/StickyCTA'

export const dynamic = process.env.NODE_ENV !== 'production' ? 'force-dynamic' : 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  return series.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = series.find(s => s.slug === params.slug)
  const title = item ? `${item.title} – Projekti` : 'Projekts'
  return { title }
}

export default function Page({ params }: { params: { slug: string } }){
  const item = series.find(s => s.slug === params.slug)
  if (!item) return null

  // Prepare SeriesPricingGrid sections per slug (deep copy to avoid mutation)
  const baseSections = defaultSections.map(s => ({
    ...s,
    items: s.items.map(i => ({ ...i })),
  }))
  let gridSections = baseSections

  // Custom overrides per series
  if (item.slug === 'pvc-logi-104-serija') {
    // Logi virtuvei: remove the 2nd image (104v2) and keep only 1st and 3rd with new prices 192, 186
    gridSections[0].items = [
      { ...gridSections[0].items[0], priceFrom: 192 },
      { ...gridSections[0].items[2], priceFrom: 186 },
    ]

    // Logi istabai: enforce 3 cards with specific images and prices 295, 295, 353
    gridSections[1].items = [
      { ...gridSections[1].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104i1.png?updatedAt=1758648772705', priceFrom: 295 },
      { ...gridSections[1].items[1], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104i2.png?updatedAt=1758648772637', priceFrom: 295 },
      { ...gridSections[1].items[1], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104i3.png?updatedAt=1758648772662', priceFrom: 353 },
    ]

    // Balkonu logi: set images and prices 323, 295; only 2 items
    gridSections[2].items[0] = {
      ...gridSections[2].items[0],
      image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104b1.png?updatedAt=1758648772665',
      priceFrom: 323,
    }
    gridSections[2].items[1] = {
      ...gridSections[2].items[1],
      image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104b2.png?updatedAt=1758648772734',
      priceFrom: 295,
    }
    gridSections[2].items = gridSections[2].items.slice(0, 2)
  } else if (item.slug === 'pvc-logi-119-serija') {
    // 119. sērija overrides
    // Logi virtuvei: remove third card
    gridSections[0].items = gridSections[0].items.slice(0, 2)
    // Set prices: 192, 186
    gridSections[0].items[0].priceFrom = 192
    gridSections[0].items[1].priceFrom = 186

    // Logi istabai (first two cards), remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119i1.png?updatedAt=1758650872505'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119i2.png?updatedAt=1758650872576'
    gridSections[1].items = gridSections[1].items.slice(0, 2)
    // Set prices: 353, 353
    gridSections[1].items[0].priceFrom = 353
    gridSections[1].items[1].priceFrom = 353

    // Balkonu logi (first two cards), remove third
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119b1.png?updatedAt=1758650872580'
    gridSections[2].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119b2.png?updatedAt=1758650872707'
    gridSections[2].items = gridSections[2].items.slice(0, 2)
    // Set prices: 323, 365
    gridSections[2].items[0].priceFrom = 323
    gridSections[2].items[1].priceFrom = 365
  } else if (item.slug === 'pvc-logi-467-serija') {
    // 467. sērija overrides
    // Logi virtuvei: set first card; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467v1,%20i1.png?updatedAt=1758651649313'
    gridSections[0].items = gridSections[0].items.slice(0, 1)
    gridSections[0].items[0].priceFrom = 251

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467v1,%20i1.png?updatedAt=1758651649313'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467i2.png?updatedAt=1758651649272'
    gridSections[1].items = gridSections[1].items.slice(0, 2)
    gridSections[1].items[0].priceFrom = 251
    gridSections[1].items[1].priceFrom = 312

    // Balkonu logi: set first; remove others
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467b1.png?updatedAt=1758651649438'
    gridSections[2].items = gridSections[2].items.slice(0, 1)
    gridSections[2].items[0].priceFrom = 396
  } else if (item.slug === 'pvc-logi-602-serija') {
    // 602. sērija overrides
    // Logi virtuvei: set first; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104vi,i1.png?updatedAt=1758652437287'
    gridSections[0].items = gridSections[0].items.slice(0, 1)
    gridSections[0].items[0].priceFrom = 236

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104vi,i1.png?updatedAt=1758652437287'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104i2.png?updatedAt=1758652437317'
    gridSections[1].items = gridSections[1].items.slice(0, 2)
    gridSections[1].items[0].priceFrom = 236
    gridSections[1].items[1].priceFrom = 292

    // Balkonu logi: set first two; remove third
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104b1.png?updatedAt=1758652437335'
    gridSections[2].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104b2.png?updatedAt=1758652437320'
    gridSections[2].items = gridSections[2].items.slice(0, 2)
    gridSections[2].items[0].priceFrom = 316
    gridSections[2].items[1].priceFrom = 358
  } else if (item.slug === 'pvc-logi-hruscova-kiegelu-projekts') {
    // Hruščova ķieģeļu projekts overrides
    // Logi virtuvei: set first; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k1.png?updatedAt=1758653076793'
    gridSections[0].items = gridSections[0].items.slice(0, 1)
    gridSections[0].items[0].priceFrom = 248

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k1.png?updatedAt=1758653076793'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k2.png?updatedAt=1758653076740'
    gridSections[1].items = gridSections[1].items.slice(0, 2)
    gridSections[1].items[0].priceFrom = 248
    gridSections[1].items[1].priceFrom = 318

    // Balkonu logi: set first; remove others
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k3.png?updatedAt=1758653076758'
    gridSections[2].items = gridSections[2].items.slice(0, 1)
    gridSections[2].items[0].priceFrom = 392
  } else if (item.slug === 'pvc-logi-hruscova-panelu-projekts') {
    // Hruščova paneļu projekts overrides
    // Logi virtuvei: set first; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/Hrus.%20p/hrus.p.png?updatedAt=1758653688655'
    gridSections[0].items = gridSections[0].items.slice(0, 1)

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/Hrus.%20p/hrus.p.png?updatedAt=1758653688655'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/Hrus.%20p/hrus.p1.png?updatedAt=1758653688565'
    gridSections[1].items = gridSections[1].items.slice(0, 2)

    // Balkonu logi: set first; remove others
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/Hrus.%20p/hrus.p2.png?updatedAt=1758653688601'
    gridSections[2].items = gridSections[2].items.slice(0, 1)
  } else if (item.slug === 'pvc-logi-jaunais-lietuviesu-projekts') {
    // Jaunais lietuviešu projekts overrides
    // Logi virtuvei: set first two; remove third
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20jaunais%20/liet.j.png?updatedAt=1758654314546'
    gridSections[0].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20jaunais%20/liet.j1.png?updatedAt=1758654314469'
    gridSections[0].items = gridSections[0].items.slice(0, 2)

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20jaunais%20/liet.j1.png?updatedAt=1758654314469'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20jaunais%20/liet.j2.png?updatedAt=1758654314516'
    gridSections[1].items = gridSections[1].items.slice(0, 2)

    // Balkonu logi: set first; remove others
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20jaunais%20/liet.j3.png?updatedAt=1758654314495'
    gridSections[2].items = gridSections[2].items.slice(0, 1)
  } else if (item.slug === 'pvc-logi-mazgimenu-projekts') {
    // Mazģimeņu projekts overrides
    // Logi virtuvei: set first; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/mazdz./mazdz..png?updatedAt=1758654909297'
    gridSections[0].items = gridSections[0].items.slice(0, 1)

    // Logi istabai: set first; remove others
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/mazdz./mazdz.1.png?updatedAt=1758654909368'
    gridSections[1].items = gridSections[1].items.slice(0, 1)

    // Balkonu logi: set first; remove others
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/mazdz./mazdz.2.png?updatedAt=1758654909348'
    gridSections[2].items = gridSections[2].items.slice(0, 1)
    gridSections[0].items[0].priceFrom = 192
    gridSections[0].items[0].priceFrom = 225
    gridSections[1].items[0].priceFrom = 296
    gridSections[2].items[0].priceFrom = 368
} else if (item.slug === 'pvc-logi-vecais-lietuviesu-projekts') {
    // Vecais Lietuviešu projekts: enforce explicit 1/2/1 sections
    gridSections = [
      {
        title: baseSections[0].title,
        items: [
          { ...baseSections[0].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20v/liet.%20v.png?updatedAt=1758655454975' },
        ],
      },
      {
        title: baseSections[1].title,
        items: [
          { ...baseSections[1].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20v/liet.%20v1.png?updatedAt=1758655455030' },
          { ...baseSections[1].items[1], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20v/liet.%20v2.png?updatedAt=1758655454960' },
        ],
      },
      {
        title: baseSections[2].title,
        items: [
          { ...baseSections[2].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/liet.%20v/liet.%20v3.png?updatedAt=1758655455013' },
        ],
      },
    ]
    gridSections[0].items[0].priceFrom = 232
    gridSections[1].items[0].priceFrom = 264
    gridSections[1].items[1].priceFrom = 315
    gridSections[2].items[0].priceFrom = 312
} else if (item.slug === 'pvc-logi-cehu-projekts') {
    // Čehu projekts: enforce explicit 1/2/1 sections
    gridSections = [
      {
        title: baseSections[0].title,
        items: [
          { ...baseSections[0].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/liet.%20v1.png?updatedAt=1758655997120', priceFrom: 219 },
        ],
      },
      {
        title: baseSections[1].title,
        items: [
          { ...baseSections[1].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/liet.j1.png?updatedAt=1758655866292', priceFrom: 251 },
          { ...baseSections[1].items[1], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/hrus.p1.png?updatedAt=1758655904364', priceFrom: 323 },
        ],
      },
      {
        title: baseSections[2].title,
        items: [
          { ...baseSections[2].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/liet.%20v3.png?updatedAt=1758656012099', priceFrom: 328 },
        ],
      },
    ]
  }

  return (
    <section className="section">
      <div className="container">
        {item.slug === 'pvc-logi-103-serija' ? (
          <>
            <div className="mb-3 text-sm">
              <Link href="/projekti" className="text-brand-teal hover:underline">← Atpakaļ uz projektiem</Link>
            </div>
            <div className="mb-8">
            <SeriesHero
              title={item.title}
              subtitle="Energoefektīvi, droši un estētiski risinājumi. Bez maksas konsultācija un precīza tāme 1 darba dienā."
              imageUrl="https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/103.png?updatedAt=1757947618324"
            />
            </div>
          </>
        ) : item.slug === 'pvc-logi-104-serija' ? (
          <>
            <div className="mb-3 text-sm">
              <Link href="/projekti" className="text-brand-teal hover:underline">← Atpakaļ uz projektiem</Link>
            </div>
            <div className="mb-8">
              <SeriesHero
                title={item.title}
                subtitle="Energoefektīvi, droši un estētiski risinājumi. Bez maksas konsultācija un precīza tāme 1 darba dienā."
                imageUrl={item.image}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-3 text-sm">
              <Link href="/projekti" className="text-brand-teal hover:underline">← Atpakaļ uz projektiem</Link>
            </div>
            <div className="mb-8">
              <SeriesHero
                title={item.title}
                subtitle="Energoefektīvi, droši un estētiski risinājumi. Bez maksas konsultācija un precīza tāme 1 darba dienā."
                imageUrl={item.image}
              />
            </div>
          </>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {item.slug === 'pvc-logi-103-serija' ? (
              <>
                <div className="space-y-4 text-gray-800">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                    <p><strong>Būvniecības periods:</strong> 1970.–1990. gads</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                    <p><strong>Stāvu skaits:</strong> 5</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                    <p><strong>Konstrukcija un materiāli:</strong> Jaukta tipa ēkas ar nesošām šķērssienām; gāzbetona/keramzītbetona paneļi un dobto dzelzsbetona paneļu pārsegumi.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <p><strong>Īpašās iezīmes:</strong> Ērtas un funkcionālas telpu plānojuma variācijas.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                    <p><strong>Plānojums:</strong> Plašas, labi sadalītas istabas.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                    <p><strong>Atrašanās vieta:</strong> Rīga – Teika, Dārzciems, Bolderāja, Purvciems, Daugavgrīva u.c.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                    <div>
                      <p><strong>Priekšrocības:</strong></p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>
                          Plašas lodžijas visā dzīvokļa garumā, kuras, aizstiklojot, iespējams pārvērst par vasaras verandu. (
                          <a href="/iestiklot-lodziju" className="text-brand-teal hover:underline">Apskatīt galeriju</a>
                          )
                        </li>
                        <li>Visu dzīvokļu istabas ir izolētas, nodrošinot privātumu un ērtu dzīvošanu.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ moved below, above footer */}
              </>
            ) : item.slug === 'pvc-logi-104-serija' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> sākot no 1970. gada</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 9, 12 un 16</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Projekts ir trīs paveidos, bet visas ēkas būvētas no paneļiem. Ārējās sienas veidotas no lentveida gāzbetona paneļiem, bet iekšējās nesošās sienas – no dzelzsbetona paneļiem. Ēku fasādes var būt dekorētas ar krāsainām flīzēm vai apmestas ar akmens šķembām.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> Katram projekta paveidam ir divi lifti – mazais pasažieru un lielais kravas lifts.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Ērts un funkcionāls, ar labi pārdomātu telpu izvietojumu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Šāda tipa mājas sastopamas gandrīz visos Rīgas mikrorajonos.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        Plašas lodžijas visā dzīvokļa garumā, kuras, aizstiklojot, iespējams pārvērst par vasaras verandu. (
                        <a href="/iestiklot-lodziju" className="text-brand-teal hover:underline">Apskatīt galeriju</a>
                        )
                      </li>
                      <li>Visu dzīvokļu istabas ir izolētas, nodrošinot privātumu un ērtu dzīvošanu.</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-119-serija' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> no 1980. gada</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 5 un 9, retāk 10</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Sienas veidotas no trīskārtu paneļiem, kas nodrošina labāku siltumizolāciju un stabilitāti.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> 119. sērija ir vienīgā padomju laiku dzīvokļu sērija Latvijā, kuru – ar nelielām modifikācijām – joprojām būvē arī mūsdienās. Šo ēku priekšrocība ir lielāka brīvība telpu plānojumā, jo nesošo sienu ir mazāk.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Plašas, funkcionālas telpas un veiksmīgs dzīvokļu izkārtojums. Iespējama vērienīga pārbūve, tostarp starpsienu nojaukšana, kas ļauj veidot individuālu interjeru.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Šīs sērijas ēkas sastopamas Purvciemā, Mežciemā, Imantā, Pļavniekos, Ziepniekkalnā, Vecmīlgrāvī un Iļģuciemā.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Ērts plānojums ar izolētām istabām</li>
                      <li>Plašas palīgtelpas un centrālā halle</li>
                      <li>
                        Lielas lodžijas, bieži vairākas vienā dzīvoklī (
                        <a href="/iestiklot-lodziju" className="text-brand-teal hover:underline">Apskatīt galeriju</a>
                        )
                      </li>
                      <li>Plašas iespējas pārbūvei un modernizācijai</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-467-serija' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> 1970.–1980. gads</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 9</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Ēku sienas veidotas no keramzītbetona paneļiem, starpstāvu pārsegumi – no dzelzsbetona plātnēm. Fasādes bieži dekorētas ar krāsainām flīzēm vai apmestas ar akmens šķembām.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> Visām mājām ir lodžijas, kas piešķir papildu ārtelpu un gaismu. Dažām ēkām ir izteiksmīgs fasādes dizains ar flīžu vai akmens apdari.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Ērts un pārdomāts, īpaši izceļas 2 istabu dzīvokļu plānojumi ar funkcionālu telpu sadalījumu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Jugla, Teika, Purvciems, Āgenskalns, Iļģuciems, Ķengarags, Ziepniekkalns, Grīvas masīvs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Laba siltumizolācija un skaņas izolācija</li>
                      <li>Plašas kāpņutelpas</li>
                      <li>Praktisks dzīvokļu izkārtojums</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-602-serija' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> no 1970. gadu vidus līdz 1980. gadu sākumam</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> pārsvarā 9, retāk 6</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Nesošās sienas no keramzītbetona paneļiem, starpstāvu pārsegumi – dzelzsbetona plātnes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> Agrīnās šīs sērijas mājās ir balkoni, bet jaunākajās – lodžijas, kas nodrošina vairāk gaismas un ārtelpas.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Lieli vienistabas dzīvokļi apmēram 36 m² platībā, ērti pārveidojami pēc vajadzības.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Purvciems, Mežciems, Imanta, Pļavnieki, Ziepniekkalns, Vecmīlgrāvis, Iļģuciems.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Plašs priekšnams, kas sniedz vietu iebūvētajiem skapjiem vai garderobei</li>
                      <li>Iespēja nojaukt sienu starp priekštelpu un virtuvi, veidojot atvērtu, daudzfunkcionālu dzīvojamo zonu</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-cehu-projekts' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> no 1970. gada</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 12 (uz jumta – izteikts tehniskais, 13. stāvs)</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Ēkas būvētas no ķieģeļiem, starpsienas un pārsegumi – no dzelzsbetona paneļiem. Fasādē redzamas gan plašas lodžijas, gan logu ailes, kas piešķir mājai ritmisku izskatu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> Visa fasāde veidota ar lodžiju rindām, bet jumtu papildina tehniskais stāvs, kas piešķir ēkai atpazīstamu siluetu. (
                    <a href="/iestiklot-lodziju" className="text-brand-teal hover:underline">Apskatīt galeriju</a>
                  )</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Ērts un funkcionāls – dzīvokļiem ir gan lodžijas, gan plašas logu ailes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Šīs sērijas mājas atrodamas Ķengaragā, Iļģuciemā, Juglā un Imantā.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>2 un 3 istabu dzīvokļiem atsevišķs sanitārais mezgls</li>
                      <li>Plašas virtuves (8–12 m²)</li>
                      <li>Izolētas istabas, kas nodrošina privātumu un ērtu plānojumu</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-hruscova-kiegelu-projekts' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> 1956.–1964. gads</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 2–5</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Sienas mūrētas no silikātķieģeļiem, kas nodrošina ēkām labu noturību un siltumizolāciju.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> Daļa māju ir ar balkoniem, daļa – bez tiem, kas piešķir rajoniem vizuālu daudzveidību.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Nelieli dzīvokļi ar caurstaigājamām istabām, izolētas istabas sastopamas reti. Sanitārais mezgls – kopīgs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Šīs mājas atrodas Juglā, Teikā, Purvciemā, Āgenskalnā, Iļģuciemā, Ķengaragā un Ziepniekkalnā.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Kompakti, viegli apsildāmi dzīvokļi</li>
                      <li>Vienkārša konstrukcija, kas ļauj ērti veikt remontus</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-hruscova-panelu-projekts' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> 1956.–1964. gads</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 2–5</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Ēkas būvētas no paneļu blokiem, kas nodrošina vieglu un ātru montāžu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> Daļa māju ir ar balkoniem, citas – bez tiem, kas piešķir rajoniem vizuālu dažādību.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Nelieli dzīvokļi ar caurstaigājamām istabām. Izolētas telpas sastopamas reti, sanitārais mezgls kopīgs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Jugla, Teika, Purvciems, Āgenskalns, Iļģuciems, Ķengarags, Ziepniekkalns, Grīvas masīvs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Kompakti, viegli apsildāmi dzīvokļi</li>
                      <li>Vienkārša konstrukcija, kas ļauj ērti veikt remontu vai kosmētiskos uzlabojumus</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-jaunais-lietuviesu-projekts' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> 1960. gadu sākums</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 5</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Konstrukcija un materiāli:</strong> Ēkas būvētas no betona paneļiem ar ģipšbetona starpsienām, kas nodrošina vieglu un ātru montāžu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <p><strong>Īpašās iezīmes:</strong> Jaunākās lietuviešu projekta mājas aprīkotas ar lodžijām, kas piešķir papildus ārtelpu un gaismu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <p><strong>Plānojums:</strong> Kompakts un pārdomāts. Īpaši vērtīgi – 3 istabu dzīvokļos visas istabas ir izolētas, nodrošinot privātumu un ērtu sadalījumu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta:</strong> Purvciems, Āgenskalns, Imanta, Dzirciems, Bolderāja, Ziepniekkalns, Vecmīlgrāvis, Sarkandaugava, Ķengarags, kā arī Jugla un Botāniskā dārza apkārtne.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Izolētas visas 3 istabas dzīvokļos</li>
                      <li>Kompakts plānojums, viegli uzturams un pielāgojams</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-mazgimenu-projekts' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> 1968.–1985. gads</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> pārsvarā 5 un 9, retāk – 12</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Būvmateriāli:</strong> galvenokārt bloki, taču sastopamas arī 12 stāvu ķieģeļu mājas</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <div>
                    <p><strong>Īpašās iezīmes:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Dzīvojamās mājas paredzētas tikai vienistabas dzīvokļiem.</li>
                      <li>Visiem dzīvokļiem ir plašas lodžijas.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <div>
                    <p><strong>Plānojums:</strong></p>
                    <p>Kompakts, taču salīdzinoši ietilpīgs – vienistabas dzīvokļi ar lielāku kvadratūru nekā citās sērijās.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vieta Rīgā:</strong> Pļavnieki, Purvciems, Ziepniekkalns, Ķengarags, Āgenskalns, Jugla.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        Ietilpīgas lodžijas, kas stiepjas visa dzīvokļa garumā. Tās iespējams iestiklot un pārvērst par verandām, būtiski uzlabojot gan dzīves komfortu, gan siltumizolāciju. (
                        <a href="/iestiklot-lodziju" className="text-brand-teal hover:underline">Apskatīt galeriju</a>
                        )
                      </li>
                      <li>Dzīvokļu plānojums ir praktisks un tajā pašā laikā nodrošina vairāk kvadrātmetru nekā citās vienistabu sērijveida mājās.</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.slug === 'pvc-logi-vecais-lietuviesu-projekts' ? (
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                  <p><strong>Būvniecības periods:</strong> 1956.–1964. gads</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>
                  <p><strong>Stāvu skaits:</strong> 5 stāvi</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <p><strong>Būvmateriāli:</strong> betona paneļi ar ģipšbetona starpsienām</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <div>
                    <p><strong>Īpašās iezīmes:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Ēkas aprīkotas ar balkoniem.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>
                  <div>
                    <p><strong>Plānojums:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Kompakts un pārdomāts.</li>
                      <li>3 istabu dzīvokļos visas istabas ir izolētas, nodrošinot ērtu un privātu dzīves telpu.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                  <p><strong>Atrašanās vietas Rīgā:</strong> Jugla, Teika, Purvciems, Āgenskalns, Iļģuciems, Ķengarags, Ziepniekkalns, Grīvas masīvs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Praktiski un kompakti dzīvokļi, kas nodrošina ērtu ikdienu.</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="prose max-w-none">
                {item.description ? (
                  <p>{item.description}</p>
                ) : (
                  <p>
                    Šī ir {item.title} lapas demonstrācija. Šeit var ielikt aprakstu, attēlus un tehnisko informāciju,
                    kā arī formas vai saites ar papildu informāciju.
                  </p>
                )}
              </div>
            )}

            {item.gallery && item.gallery.length > 0 && (
              <div className="mt-8">
                <h2 className="h2 mb-4">Galerija</h2>
                <Gallery images={item.gallery} title={item.title} />
              </div>
            )}

            <div className="mt-8">
              <SeriesPricingGrid sections={gridSections} />
            </div>

            {item.slug === 'pvc-logi-103-serija' && (
              <FAQ
                className="mt-10"
                items={[
                  { q: 'Cik ilgā laikā pēc pasūtījuma veikšanas notiek montāža?', a: 'Parasti 4-6 nedēļu laikā.' },
                  { q: 'Vai nodrošināt mērīšanu un konsultāciju?', a: 'Jā veicam mērīšanas darbus Rīgā un Pierīgā, bet varam organizēt piegādes arī ārpus Rīgas.' },
                  { q: 'Kāda ir garantija?', a: '2 gadu garantija logiem un montāžai.' },
                  { q: 'Vai ir iespējams līzings?', a: 'Jā, iespējams noformēt līzingu ar izdevīgiem nosacījumiem.' },
                ]}
              />
            )}

            {item.slug === 'pvc-logi-104-serija' && (
              <FAQ
                className="mt-10"
                items={[
                  { q: 'Cik ilgā laikā pēc pasūtījuma veikšanas notiek montāža?', a: 'Parasti 4-6 nedēļu laikā.' },
                  { q: 'Vai nodrošināt mērīšanu un konsultāciju?', a: 'Jā, mērīšana un konsultācijas Rīgā un Pierīgā; iespējamas piegādes arī ārpus Rīgas.' },
                  { q: 'Kāda ir garantija?', a: '2 gadu garantija logiem un montāžai.' },
                  { q: 'Vai ir iespējams līzings?', a: 'Jā, iespējams noformēt līzingu ar izdevīgiem nosacījumiem.' },
                ]}
              />
            )}

            {item.slug !== 'pvc-logi-103-serija' && item.slug !== 'pvc-logi-104-serija' && (
              <FAQ
                className="mt-10"
                items={[
                  { q: 'Cik ilgā laikā pēc pasūtījuma veikšanas notiek montāža?', a: 'Parasti 4-6 nedēļu laikā.' },
                  { q: 'Vai nodrošināt mērīšanu un konsultāciju?', a: 'Jā veicam mērīšanas darbus Rīgā un Pierīgā, bet varam organizēt piegādes arī ārpus Rīgas.' },
                  { q: 'Kāda ir garantija?', a: '2 gadu garantija logiem un montāžai.' },
                  { q: 'Vai ir iespējams līzings?', a: 'Jā, iespējams noformēt līzingu ar izdevīgiem nosacījumiem.' },
                ]}
              />
            )}

          </div>

          <aside>
            <div className="mb-3 rounded-lg border border-border bg-background p-3 text-center">
              <p className="text-sm font-semibold text-foreground">
                Vēlies uzzināt cik izmaksās nomainīt logus tavā projektā?{' '}
                <span className="text-primary">Sūtī ziņu uz:</span>
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-2">
              <a
                href={`https://wa.me/37120886650`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 text-xs font-semibold transition-colors w-full"
                aria-label="Rakstīt WhatsApp"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.94 11.94 0 0012.01 0C5.39 0 .02 5.37.02 12c0 2.1.55 4.08 1.5 5.79L0 24l6.36-1.64A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.82c-1.84 0-3.55-.5-5.02-1.36l-.36-.21-3.77.97.99-3.68-.23-.38A9.77 9.77 0 012.2 12 9.8 9.8 0 1112 21.82zm5.62-7.37c-.31-.16-1.81-.89-2.09-.99-.28-.1-.49-.16-.7.16-.21.31-.8.99-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.45-1.53-.9-.8-1.51-1.78-1.69-2.08-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.51 1.11 2.97 1.27 3.18.16.21 2.19 3.34 5.3 4.69.74.32 1.32.5 1.77.64.74.23 1.41.2 1.94.12.59-.09 1.81-.74 2.07-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.21-.59-.37z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <div className="rounded-lg border border-border bg-background p-3 text-center">
                <p className="text-sm font-semibold text-foreground m-0">vai zvani</p>
              </div>
              <a
                href={`tel:+37120886650`}
                className="btn w-full inline-flex items-center justify-center text-center px-3 py-1.5 text-xs font-semibold"
                aria-label="Zvanīt +371 20886650"
              >
                20886650
              </a>
            </div>
          </aside>
        </div>
      </div>
      <StickyCTA />
    </section>
  )
}
