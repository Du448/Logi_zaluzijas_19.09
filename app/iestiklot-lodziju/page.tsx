import LightboxGallery from '@/components/LightboxGallery'
import { OverlayLightboxGrid } from '@/components/OverlayLightboxGrid'
import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lodžijas iestiklošana un siltināšana',
  description:
    'Atklāj siltus un aukstus lodžijas iestiklošanas risinājumus, izvēlies drošu konstrukciju un saņem profesionālu montāžu ar garantiju.',
  alternates: { canonical: '/iestiklot-lodziju' },
}

export default function Page(){
  const images = [
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-2.png?updatedAt=1758205766782',
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-3.png?updatedAt=1758205766750',
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-7.png?updatedAt=1758205766892',
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-4.png?updatedAt=1758205766988',
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-5.png?updatedAt=1758205767241',
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-8.png?updatedAt=1758205767073',
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-1.png?updatedAt=1758205767251',
    'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-6.png?updatedAt=1758205768071',
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="block">Ja vēlies <span className="text-brand-teal">iestiklot</span> savu lodžiju</span>
            <span className="block sm:inline">Tu esi nonācis <span className="text-brand-teal">īstajā vietā</span></span>
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl">Apskati realizēto lodžiju galeriju un iedvesmojies savam projektam.</p>
          <div className="mt-6">
            <a href="/kontakti" className="inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold">
              Saņemt piedāvājumu
            </a>
          </div>
        </div>
      </section>

      {/* Gallery 2: two-column grid with animated 'view' overlay and lightbox */}
      <section className="py-14 bg-gray-900/95">
        <div className="container">
          <OverlayLightboxGrid
            title="Lodžiju galerija - Grid"
            images={[
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-2.png?updatedAt=1758205766782',
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-3.png?updatedAt=1758205766750',
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-7.png?updatedAt=1758205766892',
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-4.png?updatedAt=1758205766988',
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-5.png?updatedAt=1758205767241',
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-8.png?updatedAt=1758205767073',
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-1.png?updatedAt=1758205767251',
              'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-6.png?updatedAt=1758205768071',
            ]}
          />
        </div>
      </section>

      {/* FAQ - biežāk uzdotie jautājumi (ar FAQPage strukturētajiem datiem) */}
      <section className="bg-white">
        <div className="container py-14">
          <FAQ
            items={[
              {
                q: 'Ar ko atšķiras aukstais un siltais lodžijas iestiklojums?',
                a: 'Aukstais iestiklojums (vieglas bīdāmas alumīnija konstrukcijas) pasargā lodžiju no lietus, vēja un putekļiem, bet ziemā tā paliek vēsa. Siltais iestiklojums ar PVC profiliem un stikla paketēm pārvērš lodžiju par pilnvērtīgu dzīvojamo telpu, ko var izmantot visu gadu.',
              },
              {
                q: 'Vai lodžijas iestiklošanai vajag saskaņojumu?',
                a: 'Atsevišķos gadījumos iestiklošana jāsaskaņo ar būvvaldi vai ēkas apsaimniekotāju - īpaši, ja mainās fasādes izskats. Palīdzēsim izvērtēt jūsu situāciju un ieteiksim risinājumu, kas atbilst prasībām.',
              },
              {
                q: 'Cik ilgā laikā notiek lodžijas iestiklošana?',
                a: 'Konstrukciju izgatavošana pēc uzmērīšanas parasti aizņem 3–6 nedēļas, un pati montāža vairumā gadījumu tiek pabeigta vienā dienā.',
              },
              {
                q: 'Kurām dzīvokļu sērijām veicat lodžiju iestiklošanu?',
                a: 'Strādājam ar visām izplatītākajām sērijām - 103., 104., 119., 467., 602. sēriju, Čehu, Lietuviešu un citiem projektiem. Konstrukcijas izgatavojam pēc individuāliem izmēriem.',
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
