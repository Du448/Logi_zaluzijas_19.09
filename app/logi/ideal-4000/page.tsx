import AluplastBenefits from '@/components/AluplastBenefits'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluplast Ideal 4000 PVC logi | Energoefektīvi risinājumi',
  description:
    'Uzzini par Aluplast Ideal 4000 PVC logu priekšrocībām – trīskāršs stiklojums, droša furnitūra un individuāli pielāgojumi Latvijas klimatam.',
}

export default function Page() {
  return <AluplastBenefits />
}
