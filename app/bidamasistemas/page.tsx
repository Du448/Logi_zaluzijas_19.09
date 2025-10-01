import RightArrowCarousel from '@/components/RightArrowCarousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bīdāmās stikla sistēmas terasēm un lodžijām | Vestalux',
  description:
    'Pielāgo bīdāmās stikla un alumīnija sistēmas terasēm, balkoniem un interjeriem – kvalitatīva montāža, dizaina variācijas un ātra piegāde.',
}

export default function Page(){
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-white">
        <div className="container py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Bīdāmās sistēmas
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl">
                Kvalitatīvas bīdāmās sistēmas logiem un durvīm: plūdena darbība, klusa slīdēšana un ilgmūžīga
                ekspluatācija. Piemērotas gan dzīvokļiem, gan privātmājām.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/kontakti" className="inline-flex items-center rounded-md bg-brand-teal hover:bg-brand-blue text-white px-5 py-3 font-semibold transition">
                  Saņemt piedāvājumu
                </a>
                <a href="#specs" className="inline-flex items-center rounded-md border border-gray-300 hover:bg-gray-100 text-gray-900 px-5 py-3 font-semibold transition">
                  Uzzināt vairāk
                </a>
              </div>
            </div>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
              <RightArrowCarousel
                alt="Bīdāmās sistēmas"
                images={[
                  'https://ik.imagekit.io/vbvwdejj5/B%C4%ABd%C4%81m%C4%81s%20sist%C4%93mas/72594.jpg?updatedAt=1758263906135',
                  'https://ik.imagekit.io/vbvwdejj5/B%C4%ABd%C4%81m%C4%81s%20sist%C4%93mas/800876.jpg?updatedAt=1758263906400',
                  'https://ik.imagekit.io/vbvwdejj5/B%C4%ABd%C4%81m%C4%81s%20sist%C4%93mas/3804.jpg?updatedAt=1758263906202',
                ]}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="specs" className="bg-gray-50">
        <div className="container py-14 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[ 
              { t: 'Plūdena darbība', d: 'Augstas kvalitātes slīdošie mehānismi nodrošina klusu un vieglu atvēršanu.' },
              { t: 'Izturīga furnitūra', d: 'Sertificēti materiāli un pārbaudīta furnitūra ilgtermiņa drošībai.' },
              { t: 'Siltumizolācija', d: 'Blīvējumi un pareiza montāža samazina siltuma zudumus.' },
              { t: 'Pielāgojami risinājumi', d: 'Dažādi profili, krāsas un stiklojuma varianti Jūsu interjera vajadzībām.' },
            ].map((f, i) => (
              <article key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-1">{f.t}</h3>
                <p className="text-gray-600">{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white">
        <div className="container py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Vēlaties piedāvājumu?</h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">Sazinieties ar mums – palīdzēsim izvēlēties pareizo risinājumu un aprēķināsim cenu.</p>
          <a href="/kontakti" className="inline-flex items-center rounded-md bg-brand-teal hover:bg-brand-blue text-white px-6 py-3 font-semibold mt-6 transition">
            Sazināties
          </a>
        </div>
      </section>
    </main>
  )
}
