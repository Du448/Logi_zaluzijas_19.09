"use client"
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/data'

export default function ProductCard({ item }: { item: Product }){
  const { add } = useCart()
  return (
    <div className="io-reveal rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="h-40 bg-gray-100 bg-cover bg-center" style={{backgroundImage:`url(${item.image})`}} />
      <div className="p-4">
        <Link href={`/produkts/${item.slug}`} className="font-semibold block mb-1 text-gray-900 hover:underline">{item.name}</Link>
        <div className="text-sm text-gray-500 mb-3">{item.short}</div>
        <div className="flex items-center justify-between">
          <div className="font-semibold">€{item.price.toFixed(2)}</div>
          <button onClick={() => add(item)} className="inline-flex items-center rounded-md border border-amber-600 text-amber-700 hover:bg-amber-50 px-3 py-2 text-sm">Pievienot grozam</button>
        </div>
      </div>
    </div>
  )
}
