export type WindowType = 'one_sash' | 'two_sash' | 'balcony_door' | 'fixed';
export type OpenType = 'fixed' | 'turn' | 'tilt' | 'tilt_turn';
export type Color = 'white' | 'anthracite' | 'gold_oak';

export type Equipment = {
  mosquitoNet: boolean;
  childLock: boolean;
  microVent: boolean;
  warmSpacer: boolean;
  lowE: boolean;
  sill: boolean;
  installation: boolean;
};

export type ConfigState = {
  type: WindowType;
  open: OpenType;
  width: number; // mm
  height: number; // mm
  profile?: string; // profile name as in pricing table
  color: Color;
  equipment: Equipment;
};

export const defaultConfig: ConfigState = {
  type: 'one_sash',
  open: 'tilt_turn',
  width: 1200,
  height: 1400,
  profile: '',
  color: 'white',
  equipment: {
    mosquitoNet: false,
    childLock: false,
    microVent: true,
    warmSpacer: true,
    lowE: true,
    sill: false,
    installation: false,
  },
};

export function estimatePrice(cfg: ConfigState): number {
  // Very rough estimator (placeholder) — tweak as needed
  const baseArea = (cfg.width * cfg.height) / 1_000_000; // m2
  let base = 120 * baseArea; // base €/m2
  // Type modifiers
  if (cfg.type === 'two_sash') base *= 1.5;
  if (cfg.type === 'balcony_door') base *= 1.7;
  // Opening
  if (cfg.open === 'tilt_turn') base += 40;
  if (cfg.open === 'turn') base += 25;
  // Color
  if (cfg.color !== 'white') base += 60;
  // Equipment
  const e = cfg.equipment;
  if (e.mosquitoNet) base += 35;
  if (e.childLock) base += 15;
  if (e.microVent) base += 20;
  if (e.warmSpacer) base += 30;
  if (e.lowE) base += 50;
  if (e.sill) base += 20;
  if (e.installation) base += 80;
  return Math.round(base);
}

export function toSummary(cfg: ConfigState) {
  const parts = [
    `Tips: ${cfg.type}`,
    `Atvērums: ${cfg.open}`,
    `Izmēri: ${cfg.width}×${cfg.height} mm`,
    `Krāsa: ${cfg.color}`,
    `Aprīkojums: ${Object.entries(cfg.equipment)
      .filter(([, v]) => !!v)
      .map(([k]) => k)
      .join(', ') || '—'}`,
    `Aptuvenā cena: €${estimatePrice(cfg)}`,
  ];
  return parts.join('\n');
}
