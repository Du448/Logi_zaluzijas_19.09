import Image from 'next/image'
import { notFound } from 'next/navigation'
import { products } from '@/lib/data'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { productSchema, breadcrumbSchema } from '@/lib/schema'

const CATEGORY_LABELS: Record<string, { name: string; path: string }> = {
  logi: { name: 'Logi', path: '/logi' },
  zaluzijas: { name: 'Žalūzijas', path: '/zaluzijas' },
  piederumi: { name: 'Piederumi', path: '/piederumi' },
}

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = products.find(x=>x.slug===params.slug)
  if(!p) return { title: 'Produkts' }
  return {
    title: p.name,
    description: p.short,
    alternates: { canonical: `/produkts/${p.slug}` },
    openGraph: {
      title: p.name,
      description: p.short,
      images: [{ url: p.image, alt: p.name }],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }){
  const p = products.find(x=>x.slug===params.slug)
  if(!p) return notFound()

  const category = CATEGORY_LABELS[p.category]
  const breadcrumbs = [
    { name: 'Sākums', path: '/' },
    ...(category ? [category] : []),
    { name: p.name, path: `/produkts/${p.slug}` },
  ]

  return (
    <section className="section">
      <JsonLd data={productSchema(p)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <div className="container grid md:grid-cols-2 gap-8">
        <div className="relative h-72 rounded-lg overflow-hidden">
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
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
