import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Grozs',
  robots: { index: false, follow: false },
}

export default function GrozsLayout({ children }: { children: ReactNode }) {
  return children
}
