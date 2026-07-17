import type { Metadata } from 'next'
import ProjektiClient from './ProjektiClient'

export const metadata: Metadata = {
  title: 'Dzīvokļu sēriju projekti - PVC logi jūsu mājai',
  description:
    'PVC logu risinājumi visām dzīvokļu sērijām: 103., 104., 119., 467., 602. sērija, Čehu, Lietuviešu un Hruščova projekti. Cenas, specifikācijas un montāža.',
  alternates: { canonical: '/projekti' },
}

export default function Page() {
  return <ProjektiClient />
}
