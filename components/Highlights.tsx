type HighlightsProps = {
  items: string[]
  className?: string
}

export default function Highlights({ items, className }: HighlightsProps) {
  return (
    <div className={"mt-4 flex flex-wrap gap-2 " + (className ?? "")}>
      {items.map((label) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-sm text-foreground/90 backdrop-blur supports-[backdrop-filter]:bg-background/40"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {label}
        </span>
      ))}
    </div>
  )
}
