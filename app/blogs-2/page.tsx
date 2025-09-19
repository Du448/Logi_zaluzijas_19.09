import Link from 'next/link'
export const metadata = { title: 'Blogs 2' }

export default function Page() {
  const posts = [
    {
      id: 1,
      title: 'Logu Svīšana: No Rasas Lāses līdz Skaidram Skatam!',
      image:
        'https://ik.imagekit.io/vbvwdejj5/Screenshot_405%20-%20Edited%20-%20Edited.png?updatedAt=1757921842802',
    },
    {
      id: 2,
      title: 'Kas ir PVC Logi? Iepazīsti Sava Mājokļa Jauno Supervaroni! 🦸‍♂️',
      image:
        'https://ik.imagekit.io/vbvwdejj5/m0kdmem0kdmem0kd.png?updatedAt=1758008525539',
    },
    {
      id: 3,
      title: 'Trīskāršs Spēks: Kāpēc 3 Stikli ir Labāk par 2? Jūsu Mājokļa Jaunais Līmenis!',
      image:
        'https://ik.imagekit.io/vbvwdejj5/Gemini_Generated_Image_cepfezcepfezcepf.png?updatedAt=1758009912020',
    },
    {
      id: 4,
      title: 'Stop Vējam! Jūsu PVC Logu Ātrā Palīdzība',
      image:
        'https://ik.imagekit.io/vbvwdejj5/powerful-window?updatedAt=1757920295539',
    },
    {
      id: 5,
      title: 'Logu Kastings: Atrodi Ideālo Zvaigzni Savam Dzīvoklim! 🏡✨',
      image:
        'https://ik.imagekit.io/vbvwdejj5/50dnd350dnd350dn.png?updatedAt=1758042980509',
    },
    {
      id: 6,
      title: 'Cīņa par Jūsu Logu: Parastais Moskītu Tīkls pret Supervaroni "Antikaķis"! 🥊',
      image:
        'https://ik.imagekit.io/vbvwdejj5/5bowzf5bowzf5bow.png?updatedAt=1757935310660',
    },
    {
      id: 7,
      title: 'Logu Garderobe: Atrodi Savu Ideālo Žalūziju Stilu 2025! 🎨',
      image:
        'https://ik.imagekit.io/vbvwdejj5/Gemini_Generated_Image_bp84ggbp84ggbp84.png?updatedAt=1758009310280',
    },
    {
      id: 8,
      title: 'Jūsu 119. sērijas Lodžija: Pārvērtību Ceļvedis un Cenas 2025. Gadā! 🏡',
      image:
        'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-3.png?updatedAt=1758121346809',
    },
    {
      id: 9,
      title: 'Stikla Paketes Noslēpumi: Atkodē Savu Logu un Iegūsti Super-Komfortu! 🕵️‍♂️',
      image:
        'https://ik.imagekit.io/vbvwdejj5/Gemini_Generated_Image_4l3pno4l3pno4l3p.png?updatedAt=1758009911927',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Blogs</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{p.title}</h3>
                <div className="mt-auto">
                  <Link
                    href={`/blogs-2/${p.id}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-blue text-white font-medium shadow transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue/60"
                  >
                    <span>Uzzināt vairāk</span>
                    <span className="relative inline-block">
                      <span className="block w-4 h-[2px] bg-white rounded translate-x-0 group-hover:translate-x-1 transition-transform"></span>
                      <span className="block w-2 h-[2px] bg-white rounded mt-0.5 translate-x-0 group-hover:translate-x-2 transition-transform"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
