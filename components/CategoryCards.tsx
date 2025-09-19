import Link from 'next/link'

const cats = [
  { href: '/logi', title: 'PVC Logi', cta: 'Apskatīt vairāk', desc: 'Augstas kvalitātes plastikāta logi ar garantiju' },
  { href: '/zaluzijas', title: 'Žalūzijas', cta: 'Apskatīt vairāk', desc: 'Vertikālās, horizontālās, rullo un diena/nakts žalūzijas' },
  { href: '/piederumi', title: 'Piederumi', cta: 'Apskatīt vairāk', desc: 'Palodzes, rokturi, moskītu tīkli un citi piederumi' },
]

export default function CategoryCards(){
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cats.map(c => (
        <div key={c.href} className="io-reveal rounded-2xl border border-gray-200 bg-white/70 shadow-sm p-6 h-full">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-teal-600/10 grid place-items-center">
              <span className="w-6 h-6 rounded-full bg-teal-600 block"/>
            </div>
            <div className="flex-1 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{c.title}</h3>
              <p className="text-gray-600 mb-4 text-sm min-h-[44px]">{c.desc}</p>
              <Link href={c.href} className="inline-flex items-center justify-center gap-2 rounded-md border border-teal-600 text-teal-700 hover:bg-teal-50 px-4 h-10 text-sm">
                {c.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
