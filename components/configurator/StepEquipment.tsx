"use client";
import { ConfigState } from "@/lib/configurator";

type Props = { value: ConfigState; onChange: (next: ConfigState) => void };

const eqList: { key: keyof ConfigState['equipment']; label: string; desc?: string }[] = [
  { key: 'mosquitoNet', label: 'Pretinsektu tīkls' },
  { key: 'childLock', label: 'Bērnu drošības slēdzis' },
  { key: 'microVent', label: 'Mikrovēdināšana' },
  { key: 'warmSpacer', label: 'Siltais starplīsts' },
  { key: 'lowE', label: 'Low-E pārklājums' },
  { key: 'sill', label: 'Palodze' },
  { key: 'installation', label: 'Montāža' },
];

export default function StepEquipment({ value, onChange }: Props) {
  const toggle = (k: keyof ConfigState['equipment']) => {
    onChange({ ...value, equipment: { ...value.equipment, [k]: !value.equipment[k] } });
  };
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {eqList.map((e) => (
        <label key={e.key} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-500 bg-white">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 text-amber-600 border-gray-300 rounded"
            checked={value.equipment[e.key]}
            onChange={() => toggle(e.key)}
          />
          <div>
            <div className="font-medium">{e.label}</div>
            {e.desc && <div className="text-sm text-gray-600">{e.desc}</div>}
          </div>
        </label>
      ))}
    </div>
  );
}
