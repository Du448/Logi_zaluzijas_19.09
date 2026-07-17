import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { faqSchema } from '@/lib/schema'

type FAQItem = {
  q: string
  a: string | ReactNode
  /** Teksta versija shēmai, ja `a` ir ReactNode (JSX atbilde) */
  aText?: string
}

export default function FAQ({ items, className }: { items: FAQItem[]; className?: string }) {
  // FAQPage strukturētie dati - tikai atbildēm, kam ir tīrs teksts
  const schemaItems = items
    .map((it) => ({ q: it.q, a: typeof it.a === 'string' ? it.a : it.aText ?? '' }))
    .filter((it) => it.a.length > 0)

  return (
    <section className={"mt-10 max-w-3xl mx-auto " + (className ?? "")}>
      {schemaItems.length > 0 && <JsonLd data={faqSchema(schemaItems)} />}
      <h2 className="text-2xl font-bold mb-4 text-center">Biežāk uzdotie jautājumi</h2>
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
        {items.map((it, idx) => (
          <details key={idx} className="group p-4 open:bg-gray-50 first:rounded-t-xl last:rounded-b-xl">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <span className="font-medium text-gray-900">{it.q}</span>
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition group-open:rotate-45">+</span>
            </summary>
            <div className="mt-2 text-sm text-gray-700">
              {typeof it.a === 'string' ? <p>{it.a}</p> : it.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
