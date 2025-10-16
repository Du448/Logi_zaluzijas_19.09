import React from 'react'

export function RulloDienaNaktsInfo() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="group text-center p-6 transition">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-sky-600">
              <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Īpašības</h3>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>
              <strong>Universāla funkcionalitāte</strong> Ar šīm žalūzijām jūs varat viegli mainīt telpas atmosfēru. Pielāgojot caurspīdīgās un necaurspīdīgās auduma joslas, varat iegūt maigu, izkliedētu dienasgaismu, kas atgādina plānu aizkaru efektu, vai arī nodrošināt pilnīgu privātumu un tumsu naktī.
            </li>
            <li>
              <strong>Ērta kopšana</strong> Aizmirstiet par mazgāšanu un gludināšanu! Šo žalūziju audumi ir viegli kopjami un paredzēti ilgstošai lietošanai.
            </li>
            <li>
              <strong>Daudzveidīga izvēle</strong> Lai pielāgotos jūsu interjeram, piedāvājam plašu krāsu un faktūru klāstu. Jūs varat izvēlēties audumus, kas harmoniski iekļaujas esošajā dizainā vai kļūst par spilgtu akcentu telpā.
            </li>
          </ul>
        </div>

        <div className="group text-center p-6 transition">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-sky-600">
              <path d="M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Izmēru veikšana</h3>
          <p className="text-left text-gray-700 max-w-xl mx-auto">Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 20886650 un vienosimies par izbraukuma laiku.</p>
        </div>

        <div className="group text-center p-6 transition">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-sky-600">
              <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Apmaksas veidi</h3>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>Avansa maksājums</li>
            <li>Pēcapmaksa skaidrā naudā</li>
            <li>Pēcapmaksa ar karti</li>
            <li>Pēcapmaksa – bankas pārskaitījums</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
