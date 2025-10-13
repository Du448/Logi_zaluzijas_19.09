import type { Metadata } from "next"

type PolicySection = {
  title: string
  paragraphs?: string[]
  list?: string[]
}

export const metadata: Metadata = {
  title: "Privātuma politika | Vestalux",
  description:
    "Uzziniet, kā SIA ADEstate apstrādā personas datus vietnē vestalux.lv, tostarp apstrādes mērķus, tiesisko pamatu un datu subjekta tiesības.",
}

const policySections: PolicySection[] = [
  {
    title: "1. Vispārīgie dati",
    paragraphs: [
      "Šo Privātuma politiku piemēro, kad apmeklējat mājaslapu www.vestalux.lv vai izmantojat mūsu pakalpojumus.",
      "Personas datu pārzinis ir SIA “ADEstate”, reģistrācijas numurs 42103086575, juridiskā adrese: [ievieto juridisko adresi], Latvija.",
      "Sazināties ar mums var pa e-pastu info@vestalux.lv vai pa tālruni +371 20886650.",
    ],
  },
  {
    title: "2. Personas datu apstrādes mērķi",
    paragraphs: ["Mēs apstrādājam personas datus, lai:"],
    list: [
      "nodrošinātu un uzlabotu mūsu pakalpojumu sniegšanu;",
      "sagatavotu un izpildītu līgumus ar klientiem;",
      "nodrošinātu klientu apkalpošanu un tehnisko atbalstu;",
      "izsūtītu informatīvus vai mārketinga paziņojumus (ar klienta piekrišanu);",
      "izpildītu grāmatvedības un nodokļu prasības;",
      "analizētu mājaslapas lietojumu un uzlabotu tās funkcionalitāti.",
    ],
  },
  {
    title: "3. Apstrādes tiesiskais pamats",
    paragraphs: ["Personas dati tiek apstrādāti, pamatojoties uz šādiem tiesiskajiem pamatiem:"],
    list: [
      "Līguma izpildei vai pasākumu veikšanai pirms līguma noslēgšanas (GDPR 6. panta 1. punkta b) apakšpunkts);",
      "Juridisku pienākumu izpildei (piem., grāmatvedības uzskaite) (GDPR 6. panta 1. punkta c) apakšpunkts);",
      "Piekrišanas gadījumā (piem., mārketinga sūtījumiem) (GDPR 6. panta 1. punkta a) apakšpunkts);",
      "Leģitīmu interešu ievērošanai (piem., pakalpojumu kvalitātes uzlabošanai, krāpniecības novēršanai) (GDPR 6. panta 1. punkta f) apakšpunkts).",
    ],
  },
  {
    title: "4. Datu iegūšana",
    paragraphs: ["Mēs iegūstam personas datus, kad:"],
    list: [
      "jūs sniedzat tos brīvprātīgi, piemēram, aizpildot kontaktformu vai piesakoties piedāvājumam;",
      "izmantojat mūsu mājaslapu, kur automātiski tiek apkopota informācija ar sīkdatņu palīdzību;",
      "sazināties ar mums pa tālruni vai e-pastu.",
    ],
  },
  {
    title: "5. Datu saņēmēji",
    paragraphs: [
      "Personas dati var tikt nodoti tikai uzticamiem sadarbības partneriem, kas palīdz mums nodrošināt pakalpojumus, piemēram:",
    ],
    list: [
      "IT un hostinga pakalpojumu sniedzējiem;",
      "grāmatvedības un finanšu uzskaites uzņēmumiem;",
      "mārketinga un komunikācijas platformām (piem., e-pasta sūtīšanas sistēmām).",
    ],
  },
  {
    title: "6. Datu glabāšanas termiņi",
    paragraphs: [
      "Personas dati tiek glabāti tikai tik ilgi, cik tas nepieciešams mērķa sasniegšanai vai normatīvo aktu izpildei:",
    ],
    list: [
      "grāmatvedības dati – 5 gadus pēc finanšu gada beigām;",
      "mārketinga dati – līdz brīdim, kad tiek atsaukta piekrišana;",
      "līgumu dati – līdz līguma izpildei un pēc tam tik ilgi, cik nepieciešams tiesisko interešu aizsardzībai.",
    ],
  },
  {
    title: "7. Datu subjekta tiesības",
    paragraphs: [
      "Jums ir tiesības:",
      "Lai izmantotu šīs tiesības, rakstiet uz info@vestalux.lv.",
    ],
    list: [
      "piekļūt saviem personas datiem;",
      "labot vai papildināt datus;",
      "pieprasīt datu dzēšanu (“tiesības tikt aizmirstam”);",
      "ierobežot datu apstrādi;",
      "iebilst pret datu apstrādi noteiktos gadījumos;",
      "atsaukt piekrišanu (piem., mārketinga paziņojumiem);",
      "saņemt savus datus pārnesamam formātam.",
    ],
  },
  {
    title: "8. Sūdzību iesniegšana",
    paragraphs: [
      "Ja uzskatāt, ka jūsu personas dati tiek apstrādāti neatbilstoši, jums ir tiesības iesniegt sūdzību Datu valsts inspekcijai, Elijas iela 17, Rīga, LV-1050, e-pasts: info@dvi.gov.lv, tīmekļa vietne: www.dvi.gov.lv.",
    ],
  },
  {
    title: "9. Sīkdatnes",
    paragraphs: [
      "Mūsu mājaslapā tiek izmantotas sīkdatnes, lai:",
      "Lietotājs var pārvaldīt sīkdatņu iestatījumus savā pārlūkprogrammā vai mūsu sīkdatņu logā. Plašāka informācija pieejama sadaļā “Sīkdatņu politika”.",
    ],
    list: [
      "nodrošinātu lapas pamatfunkcijas (nepieciešamās sīkdatnes);",
      "analizētu apmeklētāju statistiku, izmantojot Google Analytics;",
      "pielāgotu reklāmas saturu (piem., Meta Pixel).",
    ],
  },
  {
    title: "10. Datu drošība",
    paragraphs: [
      "Mēs izmantojam atbilstošus tehniskus un organizatoriskus pasākumus, lai aizsargātu personas datus pret zudumu, nesankcionētu piekļuvi, izpaušanu vai iznīcināšanu. Visi dati tiek glabāti drošos serveros Eiropas Savienības teritorijā.",
    ],
  },
  {
    title: "11. Politikas izmaiņas",
    paragraphs: [
      "Mēs regulāri pārskatām šo Privātuma politiku un, ja nepieciešams, to atjaunojam. Aktuālā versija vienmēr ir pieejama vietnē www.vestalux.lv. Izmaiņas stājas spēkā ar publicēšanas brīdi.",
    ],
  },
  {
    title: "12. Kontaktinformācija datu aizsardzības jautājumos",
    paragraphs: [
      "Ja jums ir jautājumi par šo politiku vai datu apstrādi, lūdzu, sazinieties ar mums:",
    ],
    list: [
      "SIA ADEstate",
      "E-pasts: info@vestalux.lv",
      "Tālrunis: +371 20886650",
    ],
  },
]

export default function Page() {
  return (
    <main className="bg-slate-50 py-16">
      <section className="container mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-slate-900">🛡️ PRIVĀTUMA POLITIKA</h1>
        </div>
        <div className="mt-10 space-y-8">
          {policySections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
              {section.paragraphs?.map((text) => (
                <p key={text} className="mt-4 text-slate-600">
                  {text}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
