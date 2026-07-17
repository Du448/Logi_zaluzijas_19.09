import Link from 'next/link'
import ProjectsFooter from '@/components/ProjectsFooter'
import ZaluzijasHeroAndGrid from '@/components/ZaluzijasHeroAndGrid'
import { catalogItems, getProduct } from '@/lib/zaluzijas'
import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Žalūziju katalogs mājām un birojam',
  description:
    'Apskati kasešu, rullo, plisētu un koka žalūziju risinājumus ar profesionālu uzmērīšanu, uzstādīšanu un plašu audumu izvēli.',
  alternates: { canonical: '/zaluzijas' },
}

export default function Page() {
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
    <section
      className="section bg-[url('https://ik.imagekit.io/vbvwdejj5/wave_background%20-%20Edited.png?updatedAt=1761226390467')] bg-cover bg-fixed bg-center"
    >
      <div className="container backdrop-blur-[2px] bg-white/70 rounded-3xl py-10 px-6 shadow-lg">
        <ZaluzijasHeroAndGrid
          items={visibleItems.map((i) => ({
            id: i.id,
            title: i.title,
            image: getProduct(i.id).thumbnail,
            tags: i.tags,
          }))}
        />

        {/* FAQ - biežāk uzdotie jautājumi (ar FAQPage strukturētajiem datiem) */}
        <FAQ
          className="mt-16"
          items={[
            {
              q: 'Ar ko "Diena-Nakts" žalūzijas atšķiras no parastajām rullo žalūzijām?',
              a: 'Diena-Nakts žalūzijām audums veidots no mainīgām caurspīdīgām un blīvām joslām - pagriežot joslas, var plūstoši regulēt gaismu no pilnīgas caurredzamības līdz aptumšošanai. Parastās rullo žalūzijas gaismu regulē, tikai paceļot vai nolaižot audumu.',
            },
            {
              q: 'Kā pareizi izmērīt logu žalūzijām?',
              a: 'Precīzākais veids ir mūsu speciālista uzmērīšana - tā izvairīsieties no kļūdām un neatbilstošiem izmēriem. Ja mērāt paši, katrai žalūziju sistēmai lapā ir norādīti mērīšanas ieteikumi, un mūsu kalkulatori aprēķina cenu pēc jūsu izmēriem.',
            },
            {
              q: 'Vai žalūzijas var uzstādīt bez urbšanas?',
              a: 'Jā, daļu žalūziju (piemēram, kasešu rullo un plisē) var stiprināt ar līmējamiem vai iespīlējamiem turētājiem tieši uz loga rāmja, nebojājot to. Piemērotāko stiprinājumu ieteiksim atkarībā no loga tipa.',
            },
            {
              q: 'Cik ilgā laikā izgatavo žalūzijas pēc pasūtījuma?',
              a: 'Žalūzijas tiek izgatavotas pēc individuāliem izmēriem - parasti izgatavošana un piegāde aizņem 2–4 nedēļas atkarībā no izvēlētās sistēmas un auduma.',
            },
          ]}
        />

        {/* Footer sections below the gallery */}
        <ProjectsFooter />
      </div>
    </section>
  )
}
