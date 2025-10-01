import PiederumiLanding from '@/components/PiederumiLanding'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logu piederumi un furnitūra | Vestalux',
  description:
    'Izvēlies logu rokturus, palodzes, moskītu tīklus un citus piederumus, kas papildina PVC logu risinājumus un uzlabo mājokļa komfortu.',
}

export default function Page(){
  return <PiederumiLanding />
}
