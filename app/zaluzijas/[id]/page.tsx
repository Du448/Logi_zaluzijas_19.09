import Link from 'next/link'
import { notFound } from 'next/navigation'
import LightboxGallery from '@/components/LightboxGallery'
import { getAllIds, getProduct } from '@/lib/zaluzijas'
import RulloCalculatorSection from '@/components/zaluzijas/RulloCalculatorSection'
import PlisetasCalculatorSection from '@/components/zaluzijas/PlisetasCalculatorSection'
import type { Metadata } from 'next'

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProduct(params.id)
  if (!product) {
    return {
      title: 'Žalūzijas | Vestalux',
      description: 'Individuāli žalūziju risinājumi ar profesionālu uzmērīšanu un uzstādīšanu visā Latvijā.',
    }
  }

  return {
    title: `${product.title} | Žalūzijas Vestalux`,
    description: `Individuāli pielāgotas ${product.title} – audumi, izmēri un uzstādīšana ar Vestalux speciālistiem visā Latvijā.`,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const product = getProduct(id)
  if (!product) return notFound()

  // Split description at the first full-width breakout section, regardless of the mt-* value
  const breakoutRegex = /<div class='mt-\d+\s+relative left-1\/2 right-1\/2 -ml-\[50vw\] -mr-\[50vw\] w-screen'>/
  const matches = product.description.match(breakoutRegex)
  const descriptionParts = matches ? product.description.split(breakoutRegex) : [product.description]
  const mainDescription = descriptionParts[0] || product.description
  const fullWidthSections = matches
    ? matches[0] + descriptionParts.slice(1).join(matches[0])
    : ""

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="mb-6">
            <Link href="/zaluzijas" className="text-gray-600 hover:text-sky-600 transition">← Atpakaļ uz katalogu</Link>
          </div>

          <div className="mb-6 text-center">
            <h1 className="h1">{product.title}</h1>
            <div className="inline-block w-20 h-1 bg-sky-500 mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[76.8rem] mx-auto justify-items-center">
            <div>
              <LightboxGallery images={product.images} title={product.title} />
            </div>

            <div className="lg:col-span-1">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: mainDescription }} />
              {!fullWidthSections && product.features && (
                <div className="mt-6" dangerouslySetInnerHTML={{ __html: product.features }} />
              )}
            </div>
          </div>

          {id === 'plisetas' && <PlisetasCalculatorSection title="Plisēto žalūziju kalkulators" />}

          {(id === 'rullo-kasetu' || id === 'rullo' || id === 'vertikalas') && (() => {
            const props =
              id === 'rullo'
                ? { context: 'rullo' as const, title: 'Rullo žalūziju kalkulators', instanceKey: 'rullo' }
                : id === 'rullo-kasetu'
                ? { context: 'rullo-kasetu' as const, title: 'Rullo kasetes kalkulators', instanceKey: 'rullo-kasetu' }
                : { context: 'rullo-kasetu' as const, title: 'Vertikālo žalūziju kalkulators', instanceKey: 'vertikalas' }
            return <RulloCalculatorSection {...props} />
          })()}
        </div>
      </section>

      {/* Full-width sections that break out completely */}
      {fullWidthSections && (
        <div dangerouslySetInnerHTML={{ __html: fullWidthSections }} />
      )}
    </>
  )
}

