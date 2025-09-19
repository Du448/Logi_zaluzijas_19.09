"use client";
import { ConfigState } from "@/lib/configurator";

type Props = { value: ConfigState; price: number | null };

export default function StepSummary({ value, price }: Props) {
  const items: { label: string; value: string }[] = [
    { label: 'Tips', value: value.type },
    { label: 'Atvērums', value: value.open },
    { label: 'Izmēri', value: `${value.width} × ${value.height} mm` },
    { label: 'Krāsa', value: value.color },
    ...(value.profile ? [{ label: 'Profils', value: value.profile }] : []),
    { label: 'Aprīkojums', value: Object.entries(value.equipment).filter(([, v]) => v).map(([k]) => k).join(', ') || '—' },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.label} className="flex justify-between gap-6">
              <div className="text-gray-600">{it.label}</div>
              <div className="font-medium text-gray-900">{it.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-baseline gap-3">
        <div className="text-gray-600">Cena:</div>
        {price !== null ? (
          <>
            <div className="text-2xl font-semibold">€{price}</div>
            <div className="text-gray-500 text-sm">(ar PVN)</div>
          </>
        ) : (
          <div className="text-gray-500">nav pieejams</div>
        )}
      </div>
    </div>
  );
}
