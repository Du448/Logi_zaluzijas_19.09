"use client";
import { ConfigState, toSummary } from "@/lib/configurator";
import { useMemo, useState } from "react";

export default function StepInquiry({ value }: { value: ConfigState }) {
  const summary = useMemo(() => toSummary(value), [value]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const qs = new URLSearchParams({
    topic: "Logu konfigurators",
    name,
    email,
    phone,
    message,
    summary,
  }).toString();

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-semibold text-gray-900">Vārds, Uzvārds</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"/>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-900">E-pasts</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"/>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-900">Tālrunis</label>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"/>
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-900">Papildu ziņa</label>
          <textarea rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"/>
        </div>
        <div className="flex gap-3">
          <a href={`/kontakti?${qs}`} className="px-5 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700">Nosūtīt pieprasījumu</a>
          <a href={`mailto:info@example.com?subject=Logu%20konfigurators&body=${encodeURIComponent(summary + '\n\n' + message)}`} className="px-5 py-2 rounded-md border border-amber-600 text-amber-700 hover:bg-amber-50">Nosūtīt uz e-pastu</a>
        </div>
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900 mb-2">Kopsavilkums</div>
        <pre className="whitespace-pre-wrap rounded-xl bg-white ring-1 ring-gray-100 p-4 text-sm">{summary}</pre>
      </div>
    </div>
  );
}
