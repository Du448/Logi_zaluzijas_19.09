"use client"
import { createContext, useContext, useMemo, useState } from 'react'
import type { Product } from './data'

type Item = Product & { qty: number }

type CartCtx = {
  items: Item[]
  count: number
  add: (p: Product) => void
  remove: (id: string) => void
  clear: () => void
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }){
  const [items, setItems] = useState<Item[]>([])

  const api: CartCtx = useMemo(()=>({
    items,
    count: items.reduce((a,b)=>a+b.qty,0),
    add(p){
      setItems(prev => {
        const i = prev.find(x=>x.id===p.id)
        if(i) return prev.map(x=> x.id===p.id ? {...x, qty:x.qty+1} : x)
        return [...prev, {...p, qty:1}]
      })
    },
    remove(id){ setItems(prev => prev.filter(x=>x.id!==id)) },
    clear(){ setItems([]) }
  }),[items])

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

export function useCart(){
  const v = useContext(Ctx)
  if(!v) throw new Error('useCart must be used within CartProvider')
  return v
}
