import React from 'react'
import Image from 'next/image'

export function RulloSlegiInfo() {
  return (
    <section className="w-full mt-10" data-rullo-slegi-section="highlights">
      <div className="max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="group text-center p-6 transition" data-rullo-slegi-card="features">
          <div
            className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center"
            aria-hidden="true"
          >
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/new-features.png?updatedAt=1760624819609"
              alt="Rullo slēģu īpašības"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Īpašības</h3>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>
              Ruļļu slēģi – funkcionāls, ilgmūžīgs un drošs risinājums. Šīs žalūzijas ir izstrādātas, lai pasargātu jūsu māju un nodrošinātu maksimālu komfortu.
            </li>
            <li>
              Daudzpusīga montāža. Ruļļu slēģus var uzstādīt logu, durvju vai garāžu ailēs. Tās var montēt arī tieši pie loga rāmja vai sienas.
            </li>
            <li>
              Siltuma un skaņas izolācija. Šīs žalūzijas lieliski pilda siltumizolācijas un skaņas izolācijas funkcijas, palīdzot uzturēt telpā komfortablu temperatūru un mazinot āra trokšņus.
            </li>
            <li>
              Plaša krāsu izvēle. Lai pielāgotos jūsu ēkas fasādei, ir pieejama plaša krāsu gamma.
            </li>
          </ul>
        </div>

        <div className="group text-center p-6 transition" data-rullo-slegi-card="measuring">
          <div
            className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center"
            aria-hidden="true"
          >
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/design.png?updatedAt=1760624819523"
              alt="Rullo slēģu izmēru noteikšana"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Izmēru veikšana</h3>
          <p className="text-left text-gray-700 max-w-xl mx-auto">
            Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 20886650 un vienosimies par izbraukuma laiku.
          </p>
        </div>

        <div className="group text-center p-6 transition" data-rullo-slegi-card="payments">
          <div
            className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center"
            aria-hidden="true"
          >
            <Image
              src="https://ik.imagekit.io/vbvwdejj5/pay.png?updatedAt=1760624819497"
              alt="Rullo slēģu apmaksas veidi"
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
    </section>
  )
}
