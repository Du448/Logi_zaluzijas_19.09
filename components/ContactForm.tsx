"use client"
import { useState } from 'react'

export default function ContactForm(){
  const [status, setStatus] = useState<string | null>(null)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Paldies! Ziņa nosūtīta (demo).')
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <div>
        <label>Vārds</label>
        <input required name="name" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label>E-pasts</label>
          <input required type="email" name="email" />
        </div>
        <div>
          <label>Tālrunis</label>
          <input name="phone" />
        </div>
      </div>
      <div>
        <label>Ziņa</label>
        <textarea required rows={4} name="message" />
      </div>
      <button className="btn w-fit">Nosūtīt ziņu</button>
      {status && <p className="text-green-700">{status}</p>}
    </form>
  )
}
