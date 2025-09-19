import Link from 'next/link'

const items = [
  { label: '103. sērija', fullSlug: 'pvc-logi-103-serija' },
  { label: '104. sērija', fullSlug: 'pvc-logi-104-serija', badge: 'Populārs' },
  { label: '119. sērija', fullSlug: 'pvc-logi-119-serija' },
  { label: '467. sērija', fullSlug: 'pvc-logi-467-serija' },
  { label: '602. sērija', fullSlug: 'pvc-logi-602-serija', badge: 'Populārs' },
  { label: 'Jaunais LT', fullSlug: 'pvc-logi-jaunais-lietuviesu-projekts' },
  { label: 'Vecais LT', fullSlug: 'pvc-logi-vecais-lietuviesu-projekts' },
  { label: 'Mazģimeņu', fullSlug: 'pvc-logi-mazgimenu-projekts' },
  { label: 'Hruščova ķieg.', fullSlug: 'pvc-logi-hruscova-kiegelu-projekts' },
  { label: 'Hruščova paneļi', fullSlug: 'pvc-logi-hruscova-panelu-projekts' },
]

export default function PreFooterCTA(){
  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="h2">Izvēlies logus pēc sava dzīvokļa mājas projekta</h2>
        <p className="text-gray-600 mt-2 mb-8">Specializēti risinājumi dažādiem māju tipiem un projektiem</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((it) => (
            <Link
              key={it.label}
              href={`/projekti/${it.fullSlug}`}
              className="group relative rounded-full border border-gray-200 bg-white hover:bg-blue-600 p-4 text-gray-900 hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <span className="text-white opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 mr-2 text-lg">
                →
              </span>
              <div className="font-medium group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300">{it.label}</div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-gray-700">
          <span>Nezini savu mājas sēriju? Mēs palīdzēsim!</span>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <Link href="/kontakti" className="text-teal-700 hover:underline">Sazinieties ar mūsu speciālistiem</Link>
            <span>vai</span>
            <Link href="/kontakti" className="text-teal-700 hover:underline">Pieprasiet bezmaksas konsultāciju</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
