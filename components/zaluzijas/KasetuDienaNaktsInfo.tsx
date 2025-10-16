import React from 'react'

export function KasetuDienaNaktsInfo() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="group text-center p-6 transition">
          <div
            className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-sky-600"
            >
              <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Īpašības</h3>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>
              <strong>Universāla funkcionalitāte</strong> Ar šīm žalūzijām jūs varat viegli
              mainīt telpas atmosfēru. Pielāgojot caurspīdīgās un necaurspīdīgās auduma
              joslas, varat iegūt maigu, izkliedētu dienasgaismu, kas atgādina plānu aizkaru
              efektu, vai arī nodrošināt pilnīgu privātumu un tumsu naktī.
            </li>
            <li>
              <strong>Ērta kopšana</strong> Aizmirstiet par mazgāšanu un gludināšanu! Šo žalūziju
              audumi ir viegli kopjami un paredzēti ilgstošai lietošanai.
            </li>
            <li>
              <strong>Daudzveidīga izvēle</strong> Lai pielāgotos jūsu interjeram, piedāvājam plašu
              krāsu un faktūru klāstu. Jūs varat izvēlēties audumus, kas harmoniski iekļaujas
              esošajā dizainā vai kļūst par spilgtu akcentu telpā.
            </li>
          </ul>
        </div>

        <div className="group text-center p-6 transition">
          <div
            className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-sky-600"
            >
              <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.93l-.149.894Z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-3">Izmēru veikšana</h3>
          <p className="text-left text-gray-700 max-w-xl mx-auto">
            Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums,
            zvaniet 20886650 un vienosimies par izbraukuma laiku.
          </p>
        </div>

        <div className="group text-center p-6 transition">
          <div
            className="mx-auto mb-4 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-sky-600"
            >
              <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9Zm-.75-9.75v-3a.75.75 0 0 1 1.5 0v2.25h1.5a.75.75 0 0 1 0 1.5H12.75v2.25a.75.75 0 0 1-1.5 0V12.75H9.75a.75.75 0 0 1 0-1.5h1.5Z" />
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
