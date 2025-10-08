import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs par PVC logiem un žalūzijām | Vestalux',
  description:
    'Lasiet padomus par PVC logu izvēli, žalūziju tendencēm un mājokļa energoefektivitāti Vestalux blogā.',
}

export default function BlogsPage() {
  return (
    <main className="py-12 md:py-16 bg-gray-50 scroll-smooth">
      {/* Hero banner */}
      <section className="container mb-10">
        <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/vbvwdejj5/Screenshot_342.png?updatedAt=1757591270938"
            alt="Interjers ar PVC logiem"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
          <div className="relative z-10 p-6 md:p-10 text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">PVC logu ceļvedis: kā izvēlēties piemērotāko risinājumu</h1>
            <p className="mt-3 text-white/90">Vai zināji, ka pareizi izvēlēti PVC logi var samazināt apkures izmaksas līdz pat 40%? Šajā rakstā pastāstīsim, kā izvēlēties sev piemērotāko risinājumu.</p>
          </div>
        </div>
      </section>
      <div className="container grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-10 items-start">
        <article className="prose prose-lg max-w-none bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 md:p-10 prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:marker:text-amber-600">
          <h1>Viss, kas Jums Jāzina par Plastikāta Logiem: Jūsu Ceļvedis Ideālas Izvēles Veikšanai</h1>
          <p>
            Mūsdienās plastikāta (metālplastikāta jeb PVC) logi ir kļuvuši par neatņemamu teju katra mājokļa sastāvdaļu. Tie piedāvā siltumu, klusumu un drošību, taču plašais piedāvājumu klāsts var radīt apjukumu. Kā izvēlēties piemērotākos logus savai mājai vai dzīvoklim? Šajā rakstā mēs apskatīsim galvenos PVC logu aspektus, balstoties uz detalizētu informāciju no nozares rokasgrāmatas, lai palīdzētu jums pieņemt pārdomātu lēmumu.
          </p>

          <h2 id="kapec-populari" className="scroll-mt-28">Kāpēc PVC logi ir populārākā izvēle?</h2>
          <ul>
            <li>✔️ Augsta siltumizolācija — var palīdzēt samazināt apkures izmaksas.</li>
            <li>🔇 Lieliska skaņas izolācija — klusāks, mierīgāks mājoklis.</li>
            <li>🌧️ Hermētiskums — nav caurvēju, labāks mikroklimats.</li>
            <li>🧽 Viegla kopšana — nav jākrāso un jāšpaktelē.</li>
            <li>🎨 Dizaina iespējas — krāsas, formas, laminācijas, kas iederas interjerā.</li>
          </ul>

          <h2 id="biezakas-kludas" className="scroll-mt-28">Biežāk pieļautās kļūdas logu izvēlē</h2>
          <ul>
            <li>⚠️ Fokusēšanās tikai uz cenu, ignorējot profila un furnitūras kvalitāti.</li>
            <li>🌬️ Nepievērš uzmanību stikla paketes parametriem un blīvējumiem.</li>
            <li>📐 Pasūtījums bez precīziem mērījumiem un konsultācijas uz vietas.</li>
            <li>🛠️ Neplāno profesionālu montāžu, lai gan tieši tā nosaka rezultātu.</li>
          </ul>

          <h2 id="praktiski-padomi" className="scroll-mt-28">Praktiski padomi pirms pirkuma</h2>
          <ul>
            <li>✔️ Pajautājiet profila klasi (A/B) un furnitūras ražotāju.</li>
            <li>🌡️ Izvēlieties stikla paketi ar LowE pārklājumu un siltu starpliku.</li>
            <li>🔒 Apsveriet bērnu drošības un pretuzlaušanas risinājumus.</li>
            <li>📋 Pieprasiet detalizētu tāmi un garantijas nosacījumus.</li>
          </ul>

          <h2 id="uzstadisana-kalposana" className="scroll-mt-28">Kā notiek uzstādīšana un cik ilgi tā kalpos?</h2>
          <p>
            Kvalitatīva montāža ietver demontāžu, aiļu sagatavošanu, profilu līmeņošanu, mehānisku stiprināšanu, šuvju siltināšanu un blīvējumu uzklāšanu. Pareizi uzstādīti PVC logi kalpo 25–40 gadus.
          </p>
          <blockquote>
            “Pēc logu nomaiņas mūsu dzīvoklis kļuva klusāks un apkures rēķini samazinājās par 25%.” — <strong>Inese, Rīga</strong>
          </blockquote>

          <h2 id="kas-ir-metalplastikata-logs" className="scroll-mt-28">Kas ir Metālplastikāta Logs?</h2>
          <p>
            Pirms iedziļināmies detaļās, ir svarīgi saprast, no kā sastāv metālplastikāta logs. Tā ir sarežģīta inženiertehniskā konstrukcija, kas nodrošina ne tikai gaismas piekļuvi, bet arī aizsardzību pret laikapstākļiem un troksni.
          </p>
          <p>Galvenie elementi ir:</p>
          <ul>
            <li><strong>Rāmis (1):</strong> Loga nekustīgā daļa, kas tiek stiprināta pie sienas.</li>
            <li><strong>Vērtne (2):</strong> Loga atveramā daļa.</li>
            <li><strong>Armējums (3):</strong> Tērauda profils rāmja un vērtnes iekšpusē, kas nodrošina konstrukcijas stingrību un izturību pret slodzēm.</li>
            <li><strong>Stikla pakete (6):</strong> Hermētiski noslēgta konstrukcija no diviem vai vairākiem stikliem, kas nodrošina siltuma un skaņas izolāciju.</li>
            <li><strong>Blīvējums (5):</strong> Elastīgi gumijas elementi, kas nodrošina hermētisku savienojumu starp rāmi, vērtni un stikla paketi, novēršot caurvēju.</li>
            <li><strong>Stikla līste (4):</strong> Profils, kas fiksē stikla paketi vērtnē vai rāmī.</li>
          </ul>

          <h2 id="pvc-logu-prieksrocibas" className="scroll-mt-28">PVC Logu Galvenās Priekšrocības</h2>
          <p>
            Kāpēc plastikāta logi ir tik populāri? Atbilde slēpjas to daudzajās priekšrocībās, kas uzlabo dzīves kvalitāti.
          </p>
          <ul>
            <li><strong>Augsta siltumizolācija:</strong> Pareizi izvēlēts profils un stikla pakete efektīvi saglabā siltumu telpās pat bargā ziemā, ļaujot ietaupīt uz apkures rēķiniem.</li>
            <li><strong>Lieliska skaņas izolācija:</strong> PVC logi ievērojami samazina ielas trokšņu līmeni, radot mājās miera un klusuma atmosfēru. Lai sasniegtu maksimālu efektu, iespējams uzstādīt īpašas skaņu izolējošas stikla paketes.</li>
            <li><strong>Vienkārša kopšana:</strong> Aizmirstiet par logu špaktelēšanu, krāsošanu un aizlīmēšanu rudenī. Plastikāta logu rāmjus ir viegli notīrīt ar ziepjūdeni, un tie gadiem ilgi saglabā savu sākotnējo izskatu.</li>
            <li><strong>Hermētiskums:</strong> Pateicoties kvalitatīvai blīvējuma sistēmai, tiek novērsta aukstā gaisa ieplūšana un caurvēja rašanās, nodrošinot komfortu telpās.</li>
            <li><strong>Ilgmūžība un uzticamība:</strong> Mūsdienīgi un kvalitatīvi PVC logi var kalpot līdz pat 40 gadiem. To izturība ir atkarīga no profila kvalitātes un ražotāja godprātības.</li>
            <li><strong>Estētika un dizaina iespējas:</strong> Logi var būt ne tikai standarta baltā krāsā. PVC profilu elastība ļauj izgatavot dažādu formu logus (piemēram, arkveida), bet laminēšana ar krāsainām plēvēm piedāvā plašas dizaina iespējas, kas iederēsies jebkurā interjerā.</li>
          </ul>

          <h2 id="ka-izveleties-logu" className="scroll-mt-28">Kā Izvēlēties Pareizo Logu? Svarīgākie Kritēriji</h2>
          <p>
            Lai logs pilnvērtīgi pildītu savas funkcijas, ir jāpievērš uzmanība diviem galvenajiem elementiem: profilam un stikla paketei.
          </p>
          <h3>1. Profila Klase</h3>
          <p>
            Viens no svarīgākajiem kritērijiem ir profila sienu biezums, kas nosaka tā izturību un formas noturību. Saskaņā ar Eiropas standartu EN 12608 SR, profilus iedala vairākās klasēs:
          </p>
          <ul>
            <li><strong>A klase:</strong> Ārējās sienas biezums ir ≥ 2,8 mm, bet iekšējās – ≥ 2,5 mm. Šī ir augstākā klase, kas nodrošina vislabāko stabilitāti un ilgmūžību.</li>
            <li><strong>B klase:</strong> Ārējās sienas biezums ir ≥ 2,5 mm, iekšējās – ≥ 2,0 mm.</li>
            <li><strong>C klase:</strong> Šai klasei nav stingru prasību attiecībā uz sienu biezumu.</li>
          </ul>
          <p>Jo biezākas ir profila sienas, jo ilgāk un uzticamāk logs kalpos, saglabājot savu formu un funkcionalitāti.</p>

          <h3 id="stikla-paketes-izvele" className="scroll-mt-28">2. Stikla Paketes Izvēle</h3>
          <p>
            Stikla pakete ir atbildīga par lielāko daļu siltuma un skaņas izolācijas. Tās var būt:
          </p>
          <ul>
            <li><strong>Vienkameras:</strong> Sastāv no diviem stikliem ar vienu gaisa kameru starp tiem.</li>
            <li><strong>Divkameru:</strong> Sastāv no trīs stikliem un divām gaisa kamerām.</li>
          </ul>
          <p>
            Saskaņā ar Baltijas valstu klimatisko zonu prasībām, dzīvojamās ēkās ieteicams izmantot divkameru stikla paketes vai vienkameras paketes ar īpašu energoefektīvu (LowE) pārklājumu. Šis pārklājums ir plāns sudraba jonu slānis uz viena no stikliem, kas vasarā atstaro saules siltumu, bet ziemā neļauj siltumam izplūst no telpas.
          </p>
          <p>
            Interesanti, ka vienkameras energoefektīva stikla pakete pēc siltumizolācijas rādītājiem pat pārspēj standarta divkameru paketi, turklāt tā ir vieglāka, kas samazina slodzi uz furnitūru un pagarina tās kalpošanas laiku.
          </p>

          <h2 id="drosiba-un-iespejas" className="scroll-mt-28">Drošība un Papildu Iespējas</h2>
          <p>Mūsdienu logi piedāvā daudz vairāk par gaismu un siltumu.</p>
          <ul>
            <li><strong>Preti uzlaušanas drošība:</strong> Logus var aprīkot ar īpašu furnitūru un triecienizturīgām stikla paketēm (rūdīts stikls, triplekss), kas pasargās jūsu mājokli no nevēlamiem viesiem.</li>
            <li><strong>Bērnu drošība:</strong> Lai pasargātu pašus mazākos, iespējams uzstādīt rokturus ar atslēgu vai īpašas “bērnu slēdzenes”, kas ļauj vērtni atvērt tikai vēdināšanas režīmā.</li>
            <li><strong>Mikrovēdināšana:</strong> Īpašs furnitūras režīms, kas nodrošina pastāvīgu svaiga gaisa pieplūdi telpā bez caurvēja radīšanas.</li>
          </ul>

          <h2 id="nobeigums" className="scroll-mt-28">Nobeigums</h2>
          <p>
            Logu izvēle ir svarīgs ieguldījums jūsu mājokļa komfortā, drošībā un energoefektivitātē. Pievēršot uzmanību profila klasei, izvēloties atbilstošu stikla paketi un pārdomājot nepieciešamās papildu funkcijas, jūs varat būt droši, ka jaunie logi kalpos ilgi un uzticami, radot patīkamu mikroklimatu jūsu mājās.
          </p>
          <p>
            Ja jums ir jautājumi vai nepieciešama profesionāla konsultācija, sazinieties ar mums! Mēs palīdzēsim jums atrast labāko risinājumu, kas atbilst jūsu vajadzībām un vēlmēm.
          </p>

          {/* Bottom CTA */}
          <div className="mt-10">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-blue-50 p-6 border border-emerald-100">
              <div className="text-xl font-semibold text-gray-900 mb-2">Plāno mainīt logus?</div>
              <p className="text-gray-700 mb-4">Saņem bezmaksas konsultāciju un cenu piedāvājumu šeit.</p>
              <a href="/kontakti" className="inline-flex items-center px-5 py-2.5 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Saņemt konsultāciju</a>
            </div>
          </div>
        </article>

        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block sticky top-28 space-y-4">
          <div className="rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm p-5">
            <div className="text-sm font-semibold text-gray-900 mb-3">Satura rādītājs</div>
            <nav className="text-sm text-gray-700 space-y-2">
              <a href="#kapec-populari" className="block hover:text-emerald-700">Kāpēc PVC logi ir populārākā izvēle?</a>
              <a href="#biezakas-kludas" className="block hover:text-emerald-700">Biežāk pieļautās kļūdas</a>
              <a href="#praktiski-padomi" className="block hover:text-emerald-700">Praktiski padomi</a>
              <a href="#uzstadisana-kalposana" className="block hover:text-emerald-700">Uzstādīšana un kalpošana</a>
              <a href="#nobeigums" className="block hover:text-emerald-700">Nobeigums</a>
            </nav>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm p-5">
            <div className="text-sm font-semibold text-gray-900 mb-3">Saistītie raksti</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#ka-izveleties-logu" className="hover:text-emerald-700">Kā izvēlēties logu — kritēriji</a></li>
              <li><a href="#drosiba-un-iespejas" className="hover:text-emerald-700">Drošības risinājumi mājoklim</a></li>
              <li><a href="#pvc-logu-prieksrocibas" className="hover:text-emerald-700">PVC logu priekšrocības</a></li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white ring-1 ring-emerald-100 p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Klientu atsauksmes</div>
            <p className="text-gray-700 text-sm">“Pēc logu nomaiņas mūsu dzīvoklis kļuva klusāks un apkures rēķini samazinājās par 25%.” — Inese, Rīga</p>
          </div>
        </aside>
      </div>
    </main>
  )
}
