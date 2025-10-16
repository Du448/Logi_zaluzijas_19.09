import React from 'react'
import Image from 'next/image'

export function RulloDienaNaktsInfo() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="group text-center p-6 transition">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center" aria-hidden="true">
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/new-features.png?updatedAt=1760624819609"
              alt="Īpašības ikona"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
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
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/design.png?updatedAt=1760624819523"
              alt="Izmēru veikšanas ikona"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Izmēru veikšana</h3>
          <p className="text-left text-gray-700 max-w-xl mx-auto">Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 20886650 un vienosimies par izbraukuma laiku.</p>
        </div>

        <div className="group text-center p-6 transition">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center" aria-hidden="true">
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/pay.png?updatedAt=1760624819497"
              alt="Apmaksas veidu ikona"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
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
