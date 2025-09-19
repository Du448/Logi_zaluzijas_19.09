import RailsStyleHomepage from '@/components/RailsStyleHomepage'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import PreFooterCTA from '@/components/PreFooterCTA'
import FooterQuick from '@/components/FooterQuick'

function CheckIcon(){
  return (
    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <RailsStyleHomepage />
      {/* Žalūziju veidi */}
      <section className="section scroll-reveal io-reveal">
        <div className="container">
          <h2 className="h2 text-center">Žalūziju veidi</h2>
          <p className="text-center text-gray-600 mt-2 mb-8">Izvēlieties piemērotāko žalūziju veidu savam mājoklim</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vertikālās */}
            <div className="group io-reveal rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white grid place-items-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 motion-reduce:transition-none motion-reduce:transform-none">
                  {/* icon: dots */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="6" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="18" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Vertikālās</h3>
                <p className="text-gray-600 mt-1">Klasiskās vertikālās žalūzijas biroja un mājas logiem</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><CheckIcon /><span>Dažādas krāsas</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Viegla apkope</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Ilgmūžīgas</span></li>
                </ul>
              </div>
            </div>

            {/* Horizontālās */}
            <div className="group io-reveal rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white grid place-items-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 motion-reduce:transition-none motion-reduce:transform-none">
                  {/* icon: dots alt */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="6" cy="10" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="18" cy="14" r="2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Horizontālās</h3>
                <p className="text-gray-600 mt-1">Mūsdienīgas horizontālās žalūzijas ar precīzu gaismas kontroli</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><CheckIcon /><span>Alumīnija lameles</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Precīza regulēšana</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Kompakts dizains</span></li>
                </ul>
              </div>
            </div>

            {/* Rullo */}
            <div className="group io-reveal rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white grid place-items-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transition-none motion-reduce:transform-none">
                  {/* icon: circle */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Rullo</h3>
                <p className="text-gray-600 mt-1">Elegants rullo žalūziju minimalistiskam dizainam</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><CheckIcon /><span>Dažādi audumi</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Vienkārša uzstādīšana</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Estētisks izskats</span></li>
                </ul>
              </div>
            </div>

            {/* Diena/Nakts */}
            <div className="group io-reveal rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white grid place-items-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transition-none motion-reduce:transform-none">
                  {/* icon: sun */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Diena/Nakts</h3>
                <p className="text-gray-600 mt-1">Inovatīvas žalūzijas ar divu veidu lamelu sistēmu</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><CheckIcon /><span>Dubulta funkcija</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Pilna privātuma kontrole</span></li>
                  <li className="flex items-start gap-2"><CheckIcon /><span>Moderns dizains</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a href="/zaluzijas" className="inline-flex items-center rounded-md bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2.5 shadow transition-colors duration-200">Uzzināt vairāk</a>
          </div>
        </div>
      </section>
      <section className="section scroll-reveal io-reveal">
        <div className="container">
          <Testimonials />
        </div>
      </section>
      <PreFooterCTA />

      {/* CTA Section moved from RailsStyleHomepage (with image + dark overlay) */}
      <section className="relative py-20 overflow-hidden text-white">
        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://ik.imagekit.io/vbvwdejj5/mh6f19mh6f19mh6f%20-%20Edited.png?updatedAt=1758040235289"
            alt="CTA fona attēls"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Overlay image (replaces black overlay) */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://ik.imagekit.io/vbvwdejj5/Rings_19873.jpg?updatedAt=1758100979993"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center py-16 md:py-24">
          <h2 className="text-4xl font-bold mb-4">
            Gatavi jauniem logiem?
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Sazinieties ar mums, lai saņemtu bezmaksas konsultāciju un individuālu cenas piedāvājumu Jūsu projektam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakti" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Saņemt piedāvājumu
            </a>
            <a href="tel:+37129995131" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors border border-emerald-500">
              Zvanīt tagad
            </a>
          </div>
        </div>
      </section>
      <ContactSection />
      <FooterQuick />
    </>
  )
}
