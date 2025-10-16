import Link from 'next/link'
import { notFound } from 'next/navigation'
import LightboxGallery from '@/components/LightboxGallery'
import { getAllIds, getProduct } from '@/lib/zaluzijas'
import RulloCalculatorSection from '@/components/zaluzijas/RulloCalculatorSection'
import PlisetasCalculatorSection from '@/components/zaluzijas/PlisetasCalculatorSection'
import FotoCalculator from '@/components/zaluzijas/FotoCalculator'
import ScreenCalculator from '@/components/zaluzijas/ScreenCalculator'
import MansardaCalculator from '@/components/zaluzijas/MansardaCalculator'
import { KasetuDienaNaktsInfo } from '@/components/zaluzijas/KasetuDienaNaktsInfo'
import { RulloDienaNaktsInfo } from '@/components/zaluzijas/RulloDienaNaktsInfo'
import { RulloSlegiInfo } from '@/components/zaluzijas/RulloSlegiInfo'
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

  const inquiryCards: Record<string, { heading: string; description: string }> = {
    koka: {
      heading: 'Cenas pieprasījums',
      description:
        'Sagatavosim personalizētu piedāvājumu koka žalūzijām, iekļaujot materiālus, montāžu un piegādi. Izvēlieties sev ērtāko saziņas veidu.',
    },
    aluminija: {
      heading: 'Cenas pieprasījums',
      description:
        'Aprēķināsim piedāvājumu alumīnija žalūzijām, ieskaitot lameļu izvēli, montāžu un piegādes grafiku. Sazinieties ar mums sev ērtākajā veidā.',
    },
    aizkaru: {
      heading: 'Cenas pieprasījums',
      description:
        'Sagatavosim individuālu piedāvājumu “Aizkaru” žalūzijām ar audumu paraugiem un uzstādīšanu. Izvēlieties, kā mums pieslēgties.',
    },
    'rullo-slegi': {
      heading: 'Cenas pieprasījums',
      description:
        'Izstrādāsim drošu risinājumu rullo slēģiem ar pilnu montāžas servisu un garantiju. Saziņai izvēlieties sev ērtāko kanālu.',
    },
  }

  // Split description at the first full-width breakout section, regardless of the mt-* value
  const breakoutRegex = /<div class='mt-\d+\s+relative left-1\/2 right-1\/2 -ml-\[50vw\] -mr-\[50vw\] w-screen'>/
  const matches = product.description.match(breakoutRegex)
  const descriptionParts = matches ? product.description.split(breakoutRegex) : [product.description]
  const mainDescription = descriptionParts[0] || product.description
  const fullWidthSections = matches
    ? matches[0] + descriptionParts.slice(1).join(matches[0])
    : ""

  const sanitize = (html: string) => {
    let s = html
    s = s.replaceAll(" rounded-xl", "")
    s = s.replaceAll(" border border-gray-200", "")
    s = s.replaceAll(" hover:-translate-y-1", "")
    s = s.replaceAll(" hover:shadow-lg", "")
    s = s.replaceAll(" hover:border-sky-200", "")
    s = s.replaceAll(/\s{2,}/g as any, " ")
    return s
  }

  const cleanedMainDescription = sanitize(mainDescription)
  const cleanedFullWidthSections = sanitize(fullWidthSections)

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
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: cleanedMainDescription }} />
              {!fullWidthSections && product.features && (
                <div className="mt-6" dangerouslySetInnerHTML={{ __html: sanitize(product.features) }} />
              )}
            </div>
          </div>

          {id === 'plisetas' && <PlisetasCalculatorSection title="Plisēto žalūziju kalkulators" />}
          {id === 'foto' && <FotoCalculator title="Foto žalūziju kalkulators" />}
          {id === 'screen' && <ScreenCalculator title="Screen žalūziju kalkulators" />}
          {id === 'mansarda' && <MansardaCalculator title="Mansarda žalūziju kalkulators" />}
          {inquiryCards[id] && (
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white p-10 shadow-xl">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" aria-hidden="true" />
                <div className="relative">
                  <h2 className="text-3xl font-bold text-amber-900 text-center">{inquiryCards[id].heading}</h2>
                  <p className="mt-4 text-center text-base text-amber-900/80">{inquiryCards[id].description}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <a
                      href="https://wa.me/37120886650"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="tel:+37120886650"
                      className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-5 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
                    >
                      Zvanīt
                    </a>
                    <Link
                      href="/kontakti"
                      className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Aizpildīt pieteikumu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

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
        <div dangerouslySetInnerHTML={{ __html: cleanedFullWidthSections }} />
      )}

      {id === 'kasetu-diena-nakts' && <KasetuDienaNaktsInfo />}
      {id === 'rullo-diena-nakts' && <RulloDienaNaktsInfo />}
      {id === 'rullo-slegi' && <RulloSlegiInfo />}
    </>
  )
}

