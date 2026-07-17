import type { Metadata } from 'next'
import GalerijaClient from './GalerijaClient'

export const metadata: Metadata = {
  title: 'Galerija - logu apdares darbi',
  description:
    'Reālu logu apdares un montāžas darbu foto galerija no Vestalux projektiem: PVC logu uzstādīšana, aiļu apdare un palodžu montāža.',
  alternates: { canonical: '/galerija/logu-apdare' },
}

export default function Page() {
  return <GalerijaClient />
}
