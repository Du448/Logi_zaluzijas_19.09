"use client"
import { useCart } from '@/lib/cart-context'

export default function Page(){
  const { items, clear, remove } = useCart()
  type CartItem = typeof items extends Array<infer T> ? T : never
  const subtotal = items.reduce((a: number, b: CartItem) => a + b.price * b.qty, 0)
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Tavs grozs</h1>
        {items.length===0 ? (
          <p className="text-gray-600">Grozs ir tukšs.</p>
        ) : (
          <div className="grid gap-4">
            {items.map((it: CartItem) => (
              <div key={it.id} className="card p-4 flex items-center justify-between">
                <div className="font-medium">{it.name} × {it.qty}</div>
                <div className="flex items-center gap-4">
                  <div>€{(it.price*it.qty).toFixed(2)}</div>
                  <button className="text-red-600" onClick={()=>remove(it.id)}>Noņemt</button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between font-semibold text-lg">
              <div>Starpsumma</div>
              <div>€{subtotal.toFixed(2)}</div>
            </div>
            <div className="flex gap-3">
              <button className="btn">Apmaksāt (demo)</button>
              <button className="px-4 py-3 border rounded-md" onClick={clear}>Iztukšot grozu</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
