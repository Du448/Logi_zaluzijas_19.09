import type { ReactNode } from 'react'

type Card = {
  title: string
  icon?: ReactNode
  content: string | ReactNode
}

export default function InfoCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {cards.map((c, i) => (
        <div key={i} className="rounded-xl border border-border bg-muted/40 p-5 shadow-sm transition-all hover:shadow-md hover:bg-muted/60">
          <div className="flex items-start gap-3">
            {c.icon}
            <div>
              <p className="font-semibold mb-1">{c.title}</p>
              <div className="text-sm text-foreground/80">
                {typeof c.content === 'string' ? <p>{c.content}</p> : c.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
