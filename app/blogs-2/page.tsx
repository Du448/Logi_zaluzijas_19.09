import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blogs',
  description:
    'Padomi un ceļveži par PVC logiem, žalūzijām, lodžiju iestiklošanu un logu kopšanu - Vestalux blogs.',
  alternates: { canonical: '/blogs-2' },
}

export default function Page() {
  const posts = blogPosts

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
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={p.id === 1}
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
