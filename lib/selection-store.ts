"use client"

// A tiny global selection store for profile choice across components
// Allows SeriesConfigurator to publish the selected profile and
// the sidebar preview to subscribe without lifting state up.

export type ProfileKey =
  | 'aluplast4000-2'
  | 'aluplast4000-3'
  | 'aluplast7000-3'
  | 'wital7000-2'
  | 'wital7000-3'
  | 'wital-therm-3'
  | 'rehau-synego-3'

type SelectionState = { key: ProfileKey; fallbackImage?: string }

let current: SelectionState = { key: 'aluplast4000-2', fallbackImage: undefined }
const listeners = new Set<(state: SelectionState) => void>()

export function getSelectedProfile(): ProfileKey { return current.key }
export function getSelectedImage(): string | undefined { return current.fallbackImage }
export function setSelectedProfile(key: ProfileKey, fallbackImage?: string) {
  current = { key, fallbackImage: fallbackImage ?? current.fallbackImage }
  listeners.forEach((fn) => fn(current))
}
export function subscribeSelectedProfile(fn: (state: SelectionState) => void) {
  listeners.add(fn)
  return () => { listeners.delete(fn) }
}
