 import Link from 'next/link'
import ProjectsFooter from '@/components/ProjectsFooter'
import ZaluzijasHeroAndGrid from '@/components/ZaluzijasHeroAndGrid'
import { catalogItems, getProduct } from '@/lib/zaluzijas'

export const metadata = { title: 'Žalūzijas — Katalogs' }

export default function Page(){
  // Non-destructively hide specific catalog entries by ID.
  // Keep the data in `lib/zaluzijas.ts` so it can be restored anytime.
  const hiddenIds = new Set<string>([
    'dienas-aizkari',
    'nakts-aizkari',
    'arejas-vertikalas',
    'refleksoli',
    'markizes',
    'pergola',
    'arejie-slegi',
    'automatiskas',
  ])
  const visibleItems = catalogItems.filter((i) => !hiddenIds.has(i.id))
  return (
    <section className="section">
      <div className="container">
        <ZaluzijasHeroAndGrid
          items={visibleItems.map((i) => ({
            id: i.id,
            title: i.title,
            image: getProduct(i.id).thumbnail,
          }))}
        />

        {/* Footer sections below the gallery */}
        <ProjectsFooter />
      </div>
    </section>
  )
}
