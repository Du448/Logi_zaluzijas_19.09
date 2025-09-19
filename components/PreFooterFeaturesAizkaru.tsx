import React from 'react'

export default function PreFooterFeaturesAizkaru() {
  return (
    <div className="mt-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105" aria-hidden="true">
            {/* Star icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11.48 3.5a.75.75 0 0 1 1.04 0l2.52 2.53 3.57.52a.75.75 0 0 1 .42 1.28l-2.58 2.52.61 3.56a.75.75 0 0 1-1.09.79L12 13.98 8.03 15.7a.75.75 0 0 1-1.09-.79l.61-3.56L5 7.83a.75.75 0 0 1 .42-1.28l3.57-.52L11.48 3.5Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Galvenās īpašības</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto">
            <li><strong>Piekļuve un ērtība.</strong> Atšķirībā no tradicionālajiem aizkariem, kas var apgrūtināt piekļuvi logam, Allusion žalūzijas ļauj ērti pieiet logam jebkurā vietā.</li>
            <li><strong>Viegla kopšana.</strong> Audums ir noņemams un mazgājams, kas atvieglo kopšanu.</li>
            <li><strong>Dizains un materiāli.</strong> Ekskluzīvs patentēts audums ir elastīgs un izturīgs, kas nodrošina to ilgmūžību. Tās viegli iekļaujas jebkurā interjerā.</li>
            <li><strong>Gaismas kontrole.</strong> Allusion žalūzijas ļauj kontrolēt gaismas plūsmu, nodrošinot gan dienasgaismu, gan privātumu. Jūs varat viegli regulēt aptumšošanas pakāpi atbilstoši savām vēlmēm.</li>
            <li><strong>Pielietojums.</strong> Šīs žalūzijas ir piemērotas gan dzīvojamām telpām, gan birojiem, un tās ir lieliski piemērotas pat ļoti liela izmēra logiem (līdz pat 4 metriem). Pieejami arī audumi ar paaugstinātu ugunsdrošību.</li>
          </ul>
        </div>
        <div className="group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105" aria-hidden="true">
            {/* Ruler icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6Zm3 1.5v9h10.5v-9H6.75Zm2.25 1.5h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm3-6h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Mērījumi un materiāli</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto">
            <li>Mūsu meistars ar katalogiem izbrauc pie Jums (sazināties Rīgā: <strong>29995131</strong>, Daugavpilī: <strong>20030522</strong>; Rēzeknē: <strong>25882740</strong>).</li>
            <li>Jūs varat pasūtīt izstrādājumu pēc saviem izmēriem, izvēloties materiālu no mūsu ofisiem (Gustava Zemgala gatve 93, Rīga; Saules iela 64, Daugavpils).</li>
          </ul>
        </div>
        <div className="group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105" aria-hidden="true">
            {/* Credit card icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Zm1.5 1.5v1.5h15V8.25h-15Zm0 6.75h6v1.5h-6v-1.5Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Apmaksas veidi</h3>
          <div className="mx-auto max-w-xl">
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-left mx-auto">
              <li>Avansa maksājums</li>
              <li>Pēcapmaksa skaidrā naudā</li>
              <li>Pēcapmaksa ar karti</li>
              <li>Pēcapmaksa - bankas pārskaitījums</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

