import MontazasLanding from '@/components/MontazasLanding'
import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PVC logu montāžas pakalpojumi',
  description:
    'Pasūti PVC logu un žalūziju profesionālu montāžu, precīzus mērījumus un konsultācijas – kvalitatīvi darbi ar garantiju visā Latvijā.',
  alternates: { canonical: '/pakalpojumi' },
}

export default function PakalpojumiPage() {
  return (
    <>
      <MontazasLanding />
      {/* FAQ - biežāk uzdotie jautājumi (ar FAQPage strukturētajiem datiem) */}
      <section className="bg-white">
        <div className="container py-14">
          <FAQ
            items={[
              {
                q: 'Vai konsultācija un tāmes sagatavošana ir bez maksas?',
                a: 'Jā, konsultācija un cenas piedāvājuma sagatavošana ir bez maksas. Sazinieties pa tālruni +371 20886650 vai e-pastu info@vestalux.lv.',
              },
              {
                q: 'Kādos reģionos veicat mērīšanu un montāžu?',
                a: 'Mērīšanas un montāžas darbus veicam Rīgā un Pierīgā. Izgatavoto produkciju varam piegādāt arī uz citiem Latvijas reģioniem.',
              },
              {
                q: 'Kāda garantija tiek dota montāžas darbiem?',
                a: 'Montāžas darbiem un ražojumiem nodrošinām 2 gadu garantiju saskaņā ar līgumu un ražotāja noteikumiem.',
              },
              {
                q: 'Cik ilgā laikā pēc pasūtījuma notiek montāža?',
                a: 'Pēc pasūtījuma apstiprināšanas ražošana un montāža parasti notiek 4–6 nedēļu laikā. Precīzu termiņu norādām piedāvājumā.',
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
