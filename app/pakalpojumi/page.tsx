import MontazasLanding from '@/components/MontazasLanding'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PVC logu montāžas pakalpojumi | Vestalux komanda',
  description:
    'Pasūti PVC logu un žalūziju profesionālu montāžu, precīzus mērījumus un konsultācijas – kvalitatīvi darbi ar garantiju visā Latvijā.',
}

export default function PakalpojumiPage() {
  return <MontazasLanding />
}
