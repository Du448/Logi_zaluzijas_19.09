import Link from 'next/link'
import { series } from '@/lib/series'
// Removed SeriesConfigurator and ProfileSidebarPreview
import Gallery from '@/components/Gallery'
import SeriesPricingGrid, { defaultSections } from '@/components/SeriesPricingGrid'

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
    // Logi virtuvei (second card)
    gridSections[0].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104v2.png?updatedAt=1758648772718'
    // Logi virtuvei (third card)
    gridSections[0].items[2].image = 'https://ik.imagekit.io/vbvwdejj5/103v3.png?updatedAt=1758649829661'

    // Logi istabai (first two cards)
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104i1.png?updatedAt=1758648772705'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104i2.png?updatedAt=1758648772637'
    // Logi istabai (third card)
    gridSections[1].items[2].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104i3.png?updatedAt=1758648772662'

    // Balkonu logi (first two cards) and remove the third card
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104b1.png?updatedAt=1758648772665'
    gridSections[2].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/104/104b2.png?updatedAt=1758648772734'
    gridSections[2].items = gridSections[2].items.slice(0, 2)
  } else if (item.slug === 'pvc-logi-119-serija') {
    // 119. sērija overrides
    // Logi virtuvei: remove third card
    gridSections[0].items = gridSections[0].items.slice(0, 2)

    // Logi istabai (first two cards), remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119i1.png?updatedAt=1758650872505'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119i2.png?updatedAt=1758650872576'
    gridSections[1].items = gridSections[1].items.slice(0, 2)

    // Balkonu logi (first two cards), remove third
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119b1.png?updatedAt=1758650872580'
    gridSections[2].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/119/119b2.png?updatedAt=1758650872707'
    gridSections[2].items = gridSections[2].items.slice(0, 2)
  } else if (item.slug === 'pvc-logi-467-serija') {
    // 467. sērija overrides
    // Logi virtuvei: set first card; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467v1,%20i1.png?updatedAt=1758651649313'
    gridSections[0].items = gridSections[0].items.slice(0, 1)

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467v1,%20i1.png?updatedAt=1758651649313'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467i2.png?updatedAt=1758651649272'
    gridSections[1].items = gridSections[1].items.slice(0, 2)

    // Balkonu logi: set first; remove others
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/467/467b1.png?updatedAt=1758651649438'
    gridSections[2].items = gridSections[2].items.slice(0, 1)
  } else if (item.slug === 'pvc-logi-602-serija') {
    // 602. sērija overrides
    // Logi virtuvei: set first; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104vi,i1.png?updatedAt=1758652437287'
    gridSections[0].items = gridSections[0].items.slice(0, 1)

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104vi,i1.png?updatedAt=1758652437287'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104i2.png?updatedAt=1758652437317'
    gridSections[1].items = gridSections[1].items.slice(0, 2)

    // Balkonu logi: set first two; remove third
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104b1.png?updatedAt=1758652437335'
    gridSections[2].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/602/104b2.png?updatedAt=1758652437320'
    gridSections[2].items = gridSections[2].items.slice(0, 2)
  } else if (item.slug === 'pvc-logi-hruscova-kiegelu-projekts') {
    // Hruščova ķieģeļu projekts overrides
    // Logi virtuvei: set first; remove others
    gridSections[0].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k1.png?updatedAt=1758653076793'
    gridSections[0].items = gridSections[0].items.slice(0, 1)

    // Logi istabai: set first two; remove third
    gridSections[1].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k1.png?updatedAt=1758653076793'
    gridSections[1].items[1].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k2.png?updatedAt=1758653076740'
    gridSections[1].items = gridSections[1].items.slice(0, 2)

    // Balkonu logi: set first; remove others
    gridSections[2].items[0].image = 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/hrus.k/hrus.k3.png?updatedAt=1758653076758'
    gridSections[2].items = gridSections[2].items.slice(0, 1)
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
  } else if (item.slug === 'pvc-logi-cehu-projekts') {
    // Čehu projekts: enforce explicit 1/2/1 sections
    gridSections = [
      {
        title: baseSections[0].title,
        items: [
          { ...baseSections[0].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/liet.%20v1.png?updatedAt=1758655997120' },
        ],
      },
      {
        title: baseSections[1].title,
        items: [
          { ...baseSections[1].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/liet.j1.png?updatedAt=1758655866292' },
          { ...baseSections[1].items[1], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/hrus.p1.png?updatedAt=1758655904364' },
        ],
      },
      {
        title: baseSections[2].title,
        items: [
          { ...baseSections[2].items[0], image: 'https://ik.imagekit.io/vbvwdejj5/LOGI%20AR%20IZM%C4%92RIEM/%C4%8Dehu/liet.%20v3.png?updatedAt=1758656012099' },
        ],
      },
    ]
  }

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 text-sm">
          <Link href="/projekti" className="text-brand-teal hover:underline">← Atpakaļ uz projektiem</Link>
        </div>
        <h1 className="h1 mb-4">{item.title}</h1>
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-8">
          <div
            className="h-72 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.slug === 'pvc-logi-103-serija'
                ? 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/103.png?updatedAt=1757947618324'
                : item.image})`,
            }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {item.slug === 'pvc-logi-103-serija' ? (
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
                  <p><strong>Konstrukcija un materiāli:</strong> Jaukta tipa ēkas ar nesošām šķērssienām no sarkano vai dzelteno apdares ķieģeļu mūra. Ārsienas veidotas no gāzbetona vai keramzītbetona paneļiem, savukārt starpstāvu pārsegumos izmantoti dobto dzelzsbetona paneļu risinājumi.</p>
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
                  <p><strong>Atrašanās vieta:</strong> Rīga – Teika, Dārzciems, Bolderāja, Purvciems, Daugavgrīva, kā arī citi galvaspilsētas mikrorajoni.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-700 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 9V5a3 3 0 1 0-6 0v4H5v10h14V9h-5zM9 9h6"/></svg>
                  <div>
                    <p><strong>Priekšrocības:</strong></p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Pārdomāts, praktisks dzīvokļu plānojums ar izolētām istabām</li>
                      <li>Laba siltumizolācija, kas nodrošina komfortu visu gadu</li>
                    </ul>
                  </div>
                </div>
              </div>
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

          </div>

          <aside>
            <Link href="/kontakti" className="btn w-full text-center">
              {item.ctaText ?? 'Sazināties'}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
