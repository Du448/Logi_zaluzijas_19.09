import ProductCard from './ProductCard'
import type { Product } from '@/lib/data'

export default function ProductGrid({ items }: { items: Product[] }){
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map(p => <ProductCard key={p.id} item={p} />)}
    </div>
  )
}
