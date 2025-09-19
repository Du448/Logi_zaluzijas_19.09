"use client";
import { ConfigState, WindowType, OpenType, Color } from "@/lib/configurator";

type Props = {
  value: ConfigState;
  onChange: (next: ConfigState) => void;
  profiles?: string[]; // pricing profiles from sheet
};

const typeOptions: { key: WindowType; label: string; desc: string }[] = [
  { key: "one_sash", label: "Vienvārtņu logs", desc: "Klasisks risinājums" },
  { key: "two_sash", label: "Divvārtņu logs", desc: "Plašāks gaismas atvērums" },
  { key: "balcony_door", label: "Balkona durvis", desc: "Izeja uz balkonu/terasi" },
  { key: "fixed", label: "Fiksēts", desc: "Bez atvēršanas mehānisma" },
];

const openOptions: { key: OpenType; label: string }[] = [
  { key: "fixed", label: "Fiksēts" },
  { key: "turn", label: "Atverams" },
  { key: "tilt", label: "Vēdināšana" },
  { key: "tilt_turn", label: "Atverams + vēdināšana" },
];

const colors: { key: Color; label: string }[] = [
  { key: "white", label: "Balts" },
  { key: "anthracite", label: "Antracīts" },
  { key: "gold_oak", label: "Zelta ozols" },
];

export default function StepType({ value, onChange, profiles }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <div className="text-sm font-semibold text-gray-900 mb-3">Tips</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {typeOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => onChange({ ...value, type: opt.key })}
              className={
                "text-left rounded-xl border p-4 hover:border-amber-500 transition " +
                (value.type === opt.key
                  ? "border-amber-500 bg-amber-50"
                  : "border-gray-200 bg-white")
              }
            >
              <div className="font-medium">{opt.label}</div>
              <div className="text-sm text-gray-600">{opt.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Profile selector */}
        <div>
          <label className="text-sm font-semibold text-gray-900">Mājas sērija / profils</label>
          <select
            value={value.profile ?? ''}
            onChange={(e) => onChange({ ...value, profile: e.target.value })}
            className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"
          >
            <option value="">— izvēlieties —</option>
            {(profiles ?? []).map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-900">Atvērums</label>
          <select
            value={value.open}
            onChange={(e) => onChange({ ...value, open: e.target.value as OpenType })}
            className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"
          >
            {openOptions.map((o) => (
              <option key={o.key} value={o.key}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-900">Platums (mm)</label>
          <input
            type="number"
            min={400}
            max={3000}
            value={value.width}
            onChange={(e) => onChange({ ...value, width: Number(e.target.value) })}
            className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-900">Augstums (mm)</label>
          <input
            type="number"
            min={400}
            max={3000}
            value={value.height}
            onChange={(e) => onChange({ ...value, height: Number(e.target.value) })}
            className="mt-2 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600"
          />
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-gray-900 mb-3">Krāsa</div>
        <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c.key}
              onClick={() => onChange({ ...value, color: c.key })}
              className={
                "px-4 py-2 rounded-md border transition " +
                (value.color === c.key ? "border-amber-500 bg-amber-50" : "border-gray-200")
              }
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
