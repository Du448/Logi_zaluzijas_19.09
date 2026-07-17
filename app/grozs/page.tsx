"use client"
import { useCart } from '@/lib/cart-context'

import Link from 'next/link'

export default function Page() {
  const { items, clear, remove } = useCart()
  type CartItem = typeof items extends Array<infer T> ? T : never
  const subtotal = items.reduce((a: number, b: CartItem) => a + b.price * b.qty, 0)
  return (
    <section className="section min-h-[60vh] flex flex-col">
      <div className="container io-fade-up">
        <h1 className="h1 mb-6">Tavs grozs</h1>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 rounded-full bg-slate-100 p-6">
              <svg className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Tavs grozs ir tukšs</h2>
            <p className="mt-2 text-slate-600 max-w-sm">
              Izskatās, ka vēl neesi pievienojis nevienu preci. Apskati mūsu piedāvājumu un atrodi sev piemērotāko!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/zaluzijas" className="btn bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-0.5">
                Apskatīt žalūzijas
              </Link>
              <Link href="/logi" className="btn bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 px-8 py-3 rounded-xl font-medium transition-all hover:-translate-y-0.5">
                Apskatīt logus
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {items.map((it: CartItem) => (
                <div key={it.id} className="p-4 sm:p-6 flex items-center justify-between border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <div className="font-medium text-lg text-slate-900">{it.name} <span className="text-slate-500 text-sm ml-2">× {it.qty}</span></div>
                  <div className="flex items-center gap-6">
                    <div className="font-semibold text-slate-900">€{(it.price * it.qty).toFixed(2)}</div>
                    <button
                      className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                      onClick={() => remove(it.id)}
                      aria-label="Noņemt preci"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between font-semibold text-xl px-2 mt-4">
              <div className="text-slate-700">Kopā</div>
              <div className="text-slate-900">€{subtotal.toFixed(2)}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all hover:-translate-y-0.5 flex-1 text-center font-semibold">
                Noformēt pasūtījumu (Demo)
              </button>
              <button className="px-6 py-3.5 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors font-medium" onClick={clear}>
                Iztukšot grozu
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
