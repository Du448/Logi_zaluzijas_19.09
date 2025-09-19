import React from 'react'

export default function PreFooterFeatures() {
  return (
    <div className="mt-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105" aria-hidden="true">
            {/* Sparkles icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z"/><path d="M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Galvenās īpašības</h3>
          <div className="text-black text-left max-w-xl mx-auto space-y-3">
            <div>
              <div className="font-semibold">Funkcionalitāte, kas ietaupa vietu.</div>
              <p>Šīs žalūzijas ir piestiprinātas pie loga rāmja, tādējādi saglabājot brīvu vietu uz palodzes. Tās ir veidotas tā, lai jums būtu iespēja brīvi atvērt logu vēdināšanas režīmā vai pat pilnībā, nepaceļot žalūziju. Tas ir praktisks risinājums, kas atvieglo ikdienas dzīvi.</p>
            </div>
            <div>
              <div className="font-semibold">Viegla kopšana.</div>
              <p>Atvadieties no mazgāšanas un gludināšanas! Kasešu rullo žalūzijas nav jākopj kā parastie aizkari. Audumi ir apstrādāti ar speciālu pretputekļu pārklājumu, kas ļauj tos uzturēt tīrus bez piepūles.</p>
            </div>
            <div>
              <div className="font-semibold">Daudzveidīgs audumu piedāvājums.</div>
              <p>Neatkarīgi no jūsu interjera stila, jūs atradīsiet piemērotāko risinājumu. Piedāvājumā ir dažādi audumi, tostarp:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Vienkrāsaini un ar tekstūru — klasiskam un elegantam dizainam.</li>
                <li>Aptumšojoši un gaismas necaurlaidīgi — tiem, kas vēlas pilnīgu privātumu un tumsu.</li>
                <li>Ar saules atstarojošu elementu — lai pasargātu telpu no pārkaršanas vasaras laikā.</li>
              </ul>
              <p className="mt-2">Kasešu rullo žalūzijas ir perfekta izvēle, ja vēlaties apvienot mūsdienīgu dizainu un praktisku lietošanu.</p>
            </div>
          </div>
        </div>
        <div className="group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105" aria-hidden="true">
            {/* Ruler icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6Zm3 1.5v9h10.5v-9H6.75Zm2.25 1.5h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm3-6h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Mērījumi un materiāli</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto">
            <li>Mūsu meistars ar katalogiem izbrauc pie Jums (saziņai: <a href="tel:+37120886650" className="text-blue-600 hover:underline">+371 20886650</a>).</li>
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
