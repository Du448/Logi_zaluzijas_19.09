import { notFound } from 'next/navigation'
import { products } from '@/lib/data'
import { Metadata } from 'next'

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = products.find(x=>x.slug===params.slug)
  if(!p) return { title: 'Produkts' }
  return { title: `${p.name} — Produkts`, description: p.short }
}

export default function Page({ params }: { params: { slug: string } }){
  const p = products.find(x=>x.slug===params.slug)
  if(!p) return notFound()
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8">
        <div className="h-72 bg-cover bg-center rounded-lg" style={{backgroundImage:`url(${p.image})`}} />
        <div>
          <h1 className="h1 mb-2">{p.name}</h1>
          <p className="text-gray-600 mb-4">{p.description}</p>
          <div className="text-2xl font-semibold mb-6">€{p.price.toFixed(2)}</div>
          <form className="grid gap-3 max-w-sm">
            <label>Izmērs</label>
            <select>
              <option>Standarts</option>
              <option>Liels</option>
            </select>
            <button className="btn">Pievienot grozam</button>
          </form>
        </div>
      </div>
    </section>
  )
}
