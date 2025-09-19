import ImagesGridWithLightbox from '@/components/ImagesGridWithLightbox'
import ZoomImage from '@/components/ZoomImage'
import ShowcaseCarousel from '@/components/ShowcaseCarousel'

export const metadata = { title: 'PVC Logi — Katalogs' }

export default function Page(){
  return (
    <>
      {/* Intro */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">PVC Logi</h1>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
              Mūsdienīgi, energoefektīvi un droši – PVC logi ir populārākā izvēle Latvijā, apvienojot izcilu veiktspēju ar pieejamu cenu.
              Mēs piedāvājam augstākās kvalitātes logus, kas nodrošinās komfortu un klusumu Jūsu mājoklī gadiem ilgi.
            </p>
          </div>

          {/* Benefits (3 columns) */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Column 1 */}
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-blue shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Siltumizolācija</h3>
                  <p className="text-gray-300">Vairāku kameru profili un selektīvās stikla paketes efektīvi saglabā siltumu, samazinot apkures rēķinus.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-blue shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Viegla kopšana</h3>
                  <p className="text-gray-300">PVC nav jāpārkrāso un to ir viegli kopt ar parastiem līdzekļiem.</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-10 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-blue shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Skaņas izolācija</h3>
                  <p className="text-gray-300">Kvalitatīvas stikla paketes un blīvējums nodrošina mieru un klusumu Jūsu mājās.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-blue shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Dizaina daudzveidība</h3>
                  <p className="text-gray-300">Plašs krāsu un koka imitācijas klāsts, kā arī dažādas logu formas.</p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-10 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-blue shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Drošība</h3>
                  <p className="text-gray-300">Augstas kvalitātes furnitūra ar vairākiem slēgšanas punktiem uzlabo aizsardzību pret ielaušanos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-blue shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
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
            <article className="relative overflow-hidden rounded-2xl bg-slate-900 text-white min-h-[48vh] lg:min-h-[60vh]">
              {/* Background image */}
              <div className="absolute inset-0" aria-hidden="true">
                <img
                  src="https://ik.imagekit.io/vbvwdejj5/36430898-6724-4204-80f5-0960b15a880b.jpg?updatedAt=1758109904853"
                  alt="Dekoratīvs fons"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
          <div className="text-center mb-10">
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
                benefits: ['Energoefektīvs pamata līmenī', 'Droša furnitūra ar vairākiem slēgšanas punktiem', 'Viegla kopšana']
              },
              {
                img: 'https://ik.imagekit.io/vbvwdejj5/Aluplast%204000_3?updatedAt=1757917103708',
                alt: 'Aluplast idel 4000 - 3 stiklu pakete',
                title: 'Aluplast idel 4000 - 3 stiklu pakete',
                desc: 'Uzlabota siltumizolācija ar trīs stiklu paketi labākam komfortam.',
                href: '/logi/ideal-4000',
                benefits: ['Labāka siltuma un trokšņu izolācija', 'Piemērots dzīvokļiem pie ielas', 'Pieejama cena']
              },
              {
                img: 'https://ik.imagekit.io/vbvwdejj5/Intertec%2085?updatedAt=1757917155417',
                alt: 'Aluplast 7000 - 3 stiklu pakete',
                title: 'Aluplast Intertec 85',
                desc: 'Augstākas klases profils ar teicamiem siltuma un skaņas rādītājiem.',
                href: '/logi/ideal-7000',
                benefits: ['Augsta energoefektivitāte', 'Uzlabota skaņas izolācija', 'Plašas dizaina iespējas']
              }
,
              {
                img: 'https://ik.imagekit.io/vbvwdejj5/ChatGPT%20Image%20Sep%2014,%202025,%2010_14_05%20PM.png?updatedAt=1757878716920',
                alt: 'REHAU Synego MD',
                title: 'REHAU Synego MD',
                desc: 'Vācu inženierija ar vidusblīvējumu maksimālai aizsardzībai pret aukstumu, troksni un mitrumu.',
                href: '/logi/rehau-synego',
                benefits: ['Vidusblīvējums labākai hermētiskumam', 'Premium drošības furnitūra', 'Ļoti laba skaņas izolācija']
              }
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-5">{item.desc}</p>
                  <a href={item.href} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-blue text-white font-medium shadow transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue/60">
                    <span>Skatīt produktu</span>
                    <span className="relative inline-block">
                      <span className="block w-4 h-[2px] bg-white rounded translate-x-0 group-hover:translate-x-1 transition-transform"></span>
                      <span className="block w-2 h-[2px] bg-white rounded mt-0.5 translate-x-0 group-hover:translate-x-2 transition-transform"></span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Real photo sections */}
          <div className="space-y-14">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Privātmājām</h4>
              <ImagesGridWithLightbox
                alt="Privātmāju projekts"
                images={[
                  'https://ik.imagekit.io/vbvwdejj5/Random/Screwing_the_bottom_PVC_window_profile.jpeg?updatedAt=1757777130376',
                  'https://ik.imagekit.io/vbvwdejj5/182186.jpg?updatedAt=1758260288040',
                  'https://ik.imagekit.io/vbvwdejj5/Random/images%20(1).jpeg?updatedAt=1757777129231',
                ]}
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Dzīvokļiem</h4>
              <ImagesGridWithLightbox
                alt="Dzīvokļu projekts"
                images={[
                  'https://ik.imagekit.io/vbvwdejj5/Random/istockphoto-1434178970-612x612.jpg?updatedAt=1757777129204',
                  'https://ik.imagekit.io/vbvwdejj5/Random/fintecnic-aluminium-window-manufacturer-modern-aluminium-windows-glasscorner-winchester-assembly-raw-glass-corner-pillar-windows-from-poland.jpeg?updatedAt=1757777130360',
                  'https://ik.imagekit.io/vbvwdejj5/Random/upvc-window-stack.webp?updatedAt=1757777129739',
                ]}
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Birojiem</h4>
              <ImagesGridWithLightbox
                alt="Biroju projekts"
                images={[
                  'https://ik.imagekit.io/vbvwdejj5/Office-Room-Blog.jpg?updatedAt=1757846875148',
                  'https://ik.imagekit.io/vbvwdejj5/1000_F_280627801_3YXHePWASDDlSP9JL2QgwuA9S18V4wNx.jpg?updatedAt=1757846875546',
                  'https://ik.imagekit.io/vbvwdejj5/52fab626e8e44ea75800008a_the-lantern-zigzag-arquitectura_com_zigzag_enghien_20120119-0095.jpg?updatedAt=1757846876169',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Gatavi jauniem logiem?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">Sazinieties ar mums, lai saņemtu bezmaksas konsultāciju un individuālu cenas piedāvājumu Jūsu projektam.</p>
          <a href="/kontakti" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">Saņemt Piedāvājumu</a>
        </div>
      </section>
    </>
  )
}
