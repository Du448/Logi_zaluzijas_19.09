import Image from 'next/image'
import ImagesGridWithLightbox from '@/components/ImagesGridWithLightbox'
import ZoomImage from '@/components/ZoomImage'
import ShowcaseCarousel from '@/components/ShowcaseCarousel'
import ProjectGalleryTabs from '@/components/ProjectGalleryTabs'
import type { Metadata } from 'next'
import { QuickContactForm } from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'PVC logu katalogs un profili | Vestalux',
  description:
    'Izvēlies PVC logu profilus ar augstu siltumizolāciju, drošu furnitūru un profesionālu uzstādīšanu no Vestalux komandas.',
}

export default function Page() {
  return (
    <>
      {/* Intro */}
      <section className="py-20 bg-slate-900">
        <div className="container">
          <div className="text-center mb-16 io-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white">PVC Logi</h1>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
              Mūsdienīgi, energoefektīvi un droši – PVC logi ir populārākā izvēle Latvijā, apvienojot izcilu veiktspēju ar pieejamu cenu.
              Mēs piedāvājam augstākās kvalitātes logus, kas nodrošinās komfortu un klusumu Jūsu mājoklī gadiem ilgi.
            </p>
          </div>

          {/* Benefits (3 columns) */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Column 1 */}
            <div className="space-y-10 io-fade-up">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-xl bg-emerald-500/10 p-2 ring-1 ring-emerald-400/40">
                  <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Siltumizolācija</h3>
                  <p className="text-gray-300">Vairāku kameru profili un selektīvās stikla paketes efektīvi saglabā siltumu, samazinot apkures rēķinus.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-xl bg-emerald-500/10 p-2 ring-1 ring-emerald-400/40">
                  <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Viegla kopšana</h3>
                  <p className="text-gray-300">PVC nav jāpārkrāso un to ir viegli kopt ar parastiem līdzekļiem.</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-10 lg:border-l lg:border-white/10 lg:pl-10 io-fade-up delay-100">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-xl bg-emerald-500/10 p-2 ring-1 ring-emerald-400/40">
                  <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Skaņas izolācija</h3>
                  <p className="text-gray-300">Kvalitatīvas stikla paketes un blīvējums nodrošina mieru un klusumu Jūsu mājās.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-xl bg-emerald-500/10 p-2 ring-1 ring-emerald-400/40">
                  <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Dizaina daudzveidība</h3>
                  <p className="text-gray-300">Plašs krāsu un koka imitācijas klāsts, kā arī dažādas logu formas.</p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-10 lg:border-l lg:border-white/10 lg:pl-10 io-fade-up delay-200">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-xl bg-emerald-500/10 p-2 ring-1 ring-emerald-400/40">
                  <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Drošība</h3>
                  <p className="text-gray-300">Augstas kvalitātes furnitūra ar vairākiem slēgšanas punktiem uzlabo aizsardzību pret ielaušanos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-xl bg-emerald-500/10 p-2 ring-1 ring-emerald-400/40">
                  <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Ilgmūžība</h3>
                  <p className="text-gray-300">Kvalitatīvi profili neplaisā, nedzeltē un nedeformējas daudzu gadu garumā.</p>
                </div>
              </div>
            </div>


          </div>

          {/* Close dark section and start light section for Profiles */}
        </div>
      </section>

      {/* Two showcase blocks (side-by-side on md+, stacked on mobile) */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left showcase card */}
            <article className="relative overflow-hidden rounded-2xl bg-slate-900 text-white min-h-[48vh] lg:min-h-[60vh] io-fade-up">
              {/* Background image */}
              <div className="absolute inset-0" aria-hidden="true">
                <div className="relative h-full w-full">
                  <Image
                    src="https://ik.imagekit.io/vbvwdejj5/36430898-6724-4204-80f5-0960b15a880b.jpg?updatedAt=1758109904853"
                    alt="Dekoratīvs fons"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={false}
                  />
                </div>
                {/* Readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
              </div>
              <div className="relative z-10 p-6 md:p-10 max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Personalizēta, modernizēta pieredze logu izvēlē un pasūtīšanā ar uzsvaru uz kvalitāti un ātrumu.</h3>
              </div>
            </article>

            {/* Right showcase card (carousel with right arrow to switch images) */}
            <ShowcaseCarousel
              className=""
              images={[
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-7.png?updatedAt=1758117727347',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-2.jpg?updatedAt=1758117727239',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-9.png?updatedAt=1758117727232',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-3.jpg?updatedAt=1758117727234',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-4.jpg?updatedAt=1758117727140',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-5.jpg?updatedAt=1758117727097',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-1.jpg?updatedAt=1758117727117',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-8.jpg?updatedAt=1758117727090',
                'https://ik.imagekit.io/vbvwdejj5/Logu%20profili%20stock/Profils-6.jpg?updatedAt=1758117727057',
              ]}
              label="Pētījums"
            />
          </div>
        </div>
      </section>

      {/* Profiles — Responsive Zig-Zag layout */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 io-fade-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Mūsu piedāvātie logu profili</h3>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Strādājam ar pārbaudītiem Latvijas un Eiropas ražotājiem, lai nodrošinātu augstāko kvalitāti.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
            {[
              {
                img: 'https://ik.imagekit.io/vbvwdejj5/Aluplast%204000_2?updatedAt=1757917062175',
                alt: 'Aluplast idel 4000 - 2 stiklu pakete',
                title: 'Aluplast idel 4000 - 2 stiklu pakete',
                desc: 'Ekonomisks un uzticams profils ar divu stiklu paketi – lieliska izvēle budžeta projektiem.',
                href: '/logi/ideal-4000',
                specs: { heat: 6, sound: 6, price: 1 },
                benefits: ['Energoefektīvs pamata līmenī', 'Droša furnitūra ar vairākiem slēgšanas punktiem', 'Viegla kopšana'],
                uValue: 'Uw ≈ 1.3 W/m²K',
                efficiencyClass: 'w-2/3',
                efficiencyNote: 'Divu stiklu pakete ar labu pamatlīmeņa siltumizolāciju.'
              },
              {
                img: 'https://ik.imagekit.io/vbvwdejj5/Aluplast%204000_3?updatedAt=1757917103708',
                alt: 'Aluplast idel 4000 - 3 stiklu pakete',
                title: 'Aluplast idel 4000 - 3 stiklu pakete',
                desc: 'Uzlabota siltumizolācija ar trīs stiklu paketi labākam komfortam.',
                href: '/logi/ideal-4000',
                specs: { heat: 8, sound: 7, price: 1 },
                benefits: ['Labāka siltuma un trokšņu izolācija', 'Piemērots dzīvokļiem pie ielas', 'Pieejama cena'],
                uValue: 'Uw ≈ 1.1 W/m²K',
                efficiencyClass: 'w-3/4',
                efficiencyNote: 'Trīs stiklu pakete nodrošina būtiski zemāku U-vērtību.'
              },
              {
                img: 'https://ik.imagekit.io/vbvwdejj5/Intertec%2085?updatedAt=1757917155417',
                alt: 'Aluplast 7000 - 3 stiklu pakete',
                title: 'Aluplast Intertec 85',
                desc: 'Augstākas klases profils ar teicamiem siltuma un skaņas rādītājiem.',
                href: '/logi/ideal-7000',
                specs: { heat: 9, sound: 9, price: 2 },
                benefits: ['Augsta energoefektivitāte', 'Uzlabota skaņas izolācija', 'Plašas dizaina iespējas'],
                uValue: 'Uw ≈ 0.9 W/m²K',
                efficiencyClass: 'w-4/5',
                efficiencyNote: 'Plašāks profils un termo ieliktņi nodrošina augstāku efektivitāti.'
              },
              {
                img: 'https://ik.imagekit.io/vbvwdejj5/ChatGPT%20Image%20Sep%2014,%202025,%2010_14_05%20PM.png?updatedAt=1757878716920',
                alt: 'REHAU Synego MD',
                title: 'REHAU Synego MD',
                desc: 'Vācu inženierija ar vidusblīvējumu maksimālai aizsardzībai pret aukstumu, troksni un mitrumu.',
                href: '/logi/rehau-synego',
                specs: { heat: 10, sound: 10, price: 3 },
                benefits: ['Vidusblīvējums labākai hermētiskumam', 'Premium drošības furnitūra', 'Ļoti laba skaņas izolācija'],
                uValue: 'Uw ≈ 0.78 W/m²K',
                efficiencyClass: 'w-[88%]',
                efficiencyNote: 'Vidusblīvējums un trīs stiklu sistēma sasniedz premium energoefektivitāti.'
              }
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden flex flex-col io-fade-up">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 33vw, (min-width: 768px) 48vw, 100vw"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-900 shadow-sm">
                    {item.uValue}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-5 text-sm flex-1">{item.desc}</p>

                  {/* Comparison Scales */}
                  <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl">
                    {/* Heat */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-16 font-medium text-gray-700">Siltums</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-500 rounded-full"
                          style={{ width: `${item.specs.heat * 10}%` }}
                        />
                      </div>
                    </div>
                    {/* Sound */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-16 font-medium text-gray-700">Skaņa</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${item.specs.sound * 10}%` }}
                        />
                      </div>
                    </div>
                    {/* Price */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-16 font-medium text-gray-700">Cena</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((p) => (
                          <span key={p} className={`text-lg leading-none ${p <= item.specs.price ? 'text-emerald-600 font-bold' : 'text-gray-300'}`}>€</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a href={item.href} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-blue text-white font-medium shadow transition-all duration-300 hover:shadow-lg hover:bg-brand-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue/60 mt-auto">
                    <span>Skatīt produktu</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Real photo sections - Now in Tabs */}
          <div className="mb-10 io-fade-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Mūsu realizētie projekti</h3>
            <ProjectGalleryTabs
              tabs={[
                {
                  id: 'privat',
                  label: 'Privātmājām',
                  alt: 'Privātmāju projekts',
                  images: [
                    'https://ik.imagekit.io/vbvwdejj5/Random/Screwing_the_bottom_PVC_window_profile.jpeg?updatedAt=1757777130376',
                    'https://ik.imagekit.io/vbvwdejj5/182186.jpg?updatedAt=1758260288040',
                    'https://ik.imagekit.io/vbvwdejj5/Random/upvc-window.png?updatedAt=1757777130468',
                  ]
                },
                {
                  id: 'dzivokli',
                  label: 'Dzīvokļiem',
                  alt: 'Dzīvokļu projekts',
                  images: [
                    'https://ik.imagekit.io/vbvwdejj5/Random/istockphoto-1434178970-612x612.jpg?updatedAt=1757777129204',
                    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/%C4%8Cehu.png?updatedAt=1757947629059',
                    'https://ik.imagekit.io/vbvwdejj5/Random/upvc-window-stack.webp?updatedAt=1757777129739',
                  ]
                },
                {
                  id: 'biroji',
                  label: 'Birojiem',
                  alt: 'Biroju projekts',
                  images: [
                    'https://ik.imagekit.io/vbvwdejj5/Office-Room-Blog.jpg?updatedAt=1757846875148',
                    'https://ik.imagekit.io/vbvwdejj5/1000_F_280627801_3YXHePWASDDlSP9JL2QgwuA9S18V4wNx.jpg?updatedAt=1757846875546',
                    'https://ik.imagekit.io/vbvwdejj5/52fab626e8e44ea75800008a_the-lantern-zigzag-arquitectura_com_zigzag_enghien_20120119-0095.jpg?updatedAt=1757846876169',
                  ]
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="container py-16 io-fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Gatavi jauniem logiem?</h2>
            <p className="text-blue-100 mb-8">Sazinieties ar mums, lai saņemtu bezmaksas konsultāciju un individuālu cenas piedāvājumu Jūsu projektam.</p>
          </div>
          <QuickContactForm variant="blue" />
        </div>
      </section>
    </>
  )
}
