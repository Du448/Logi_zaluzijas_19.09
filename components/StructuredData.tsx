// Globālie strukturētie dati (JSON-LD): LocalBusiness + WebSite.
// Renderējas layout līmenī, tāpēc pieejami visās lapās.
// Shēmu definīcijas: lib/schema.ts. Lapu specifiskās shēmas
// (Product, FAQPage, BreadcrumbList, BlogPosting) emitē pašas lapas.

import JsonLd from '@/components/JsonLd'
import { localBusinessSchema, webSiteSchema } from '@/lib/schema'

export default function StructuredData() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={webSiteSchema()} />
    </>
  )
}
