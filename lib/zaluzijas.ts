export type CatalogItem = { id: string; title: string }
export type Product = {
  id: string
  title: string
  description: string // HTML
  features: string // HTML
  images: string[]
  thumbnail: string
}

export const catalogItems: CatalogItem[] = [
  { id: 'rullo-kasetu', title: 'Rullo kasešu žalūzijas' },
  { id: 'rullo', title: 'Rullo žalūzijas' },
  { id: 'kasetu-diena-nakts', title: 'Kasešu žalūzijas "Diena-nakts"' },
  { id: 'rullo-diena-nakts', title: 'Rullo žalūzijas "Diena-nakts"' },
  { id: 'aizkaru', title: '"Aizkaru" žalūzijas' },
  { id: 'plisetas', title: 'Plisētās žalūzijas' },
  { id: 'vertikalas', title: 'Vertikālās žalūzijas' },
  { id: 'romiesu', title: 'Romiešu žalūzijas' },
  { id: 'aluminija', title: 'Alumīnija žalūzijas' },
  { id: 'screen', title: 'Žalūzijas "SCREEN"' },
  { id: 'koka', title: 'Koka žalūzijas' },
  { id: 'mansarda', title: 'Mansarda logu žalūzijas' },
  { id: 'foto', title: 'Foto žalūzijas' },
  { id: 'dienas-aizkari', title: 'Dienas aizkari' },
  { id: 'nakts-aizkari', title: 'Nakts aizkari' },
  { id: 'arejas-vertikalas', title: 'Ārējās vertikālās žalūzijas' },
  { id: 'refleksoli', title: 'Refleksoli' },
  { id: 'rullo-slegi', title: 'Rullo slēģi' },
  { id: 'markizes', title: 'Markīzes' },
  { id: 'pergola', title: 'Pergola' },
  { id: 'arejie-slegi', title: 'Ārējie logu slēģi' },
  { id: 'moskitu', title: 'Moskītu tīkls' },
  { id: 'mikstie-logi', title: 'Mīkstie logi' },
  { id: 'automatiskas', title: 'Automātiskās žalūzijas' },
]

const placeholderThumb = 'https://placehold.co/800x600/3b82f6/ffffff?text=Dr%C4%ABzum%C4%81'
const genericDesc = (title: string) =>
  `<p>Šis ir vispārīgs produkta apraksts priekš "${title}". Šeit Jūs varat ievietot detalizētu informāciju par šo produktu, tā priekšrocībām, materiāliem un pielietojumu.</p>`
const genericFeatures =
  "<ul class='list-disc list-inside text-gray-700 space-y-2'><li>Augstas kvalitātes materiāli</li><li>Plašs krāsu un faktūru klāsts</li><li>Individuāli izmēri</li><li>Vienkārša uzstādīšana un kopšana</li></ul>"

// A subset of detailed products ported from public/zaluzijas.html
const productsBase: Record<string, Omit<Product, 'id'>> = {
  'rullo-kasetu': {
    title: 'Rullo kasešu žalūzijas',
    description:
      "<p>Žalūzijas vairs nav tikai saules aizsargs, bet gan nozīmīgs interjera elements. Rullo kasešu žalūzijas ir radītas tieši tiem, kuri meklē ideālu balansu starp funkcionalitāti, estētiku un komfortu.</p>" +
      "<p class='mt-4'>Šīs žalūzijas tiek piestiprinātas tieši pie loga rāmja. Tās ir veidotas tā, lai ar papildu vadulas palīdzību varētu brīvi atvērt logu vēdināšanas režīmā vai pat pilnībā, neizmainot žalūziju pozīciju. Tas ir patiesi ērts risinājums, kas atbrīvo no liekām rūpēm.</p>" +
      "<p class='mt-4'>Pateicoties plašajai audumu izvēlei, šīs žalūzijas viegli pielāgojamas jebkuram interjeram. Neatkarīgi no tā, vai vēlaties radīt mājīgu, minimālistisku vai greznu noskaņu, atradīsit sev piemērotāko risinājumu.</p>" +
      "<p class='mt-4'>Ņemot vērā jūsu vēlmes un loga specifiku, mēs piedāvājam vairākus sistēmu profilus:</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2 mt-2'>" +
      "<li><strong>Vario 13</strong> - mini kasete</li>" +
      "<li><strong>Vario 17</strong> - klasiskā kasete</li>" +
      "<li><strong>Vario 25</strong> - U-veida profils (piemērots dalītiem logiem, 3 kameru PVC logiem u.c.)</li>" +
  
      "</ul>" +
      "<div class='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium mb-2'>Audumu katalogs</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABzijas/Kr%C4%81sas/Audumu%20katalogs.pdf?updatedAt=1756741676496' target='_blank' rel='noopener noreferrer' class='mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium mb-2'>Kasešu krāsas</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABzijas/Kr%C4%81sas/Kase%C5%A1u%20kr%C4%81sas.pdf?updatedAt=1756741675654' target='_blank' rel='noopener noreferrer' class='mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='w-full mt-10'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8'>" +
      "    <h3 class='text-2xl font-bold text-gray-900 text-center'>Uzstādīšanas un mērījumu instrukcijas</h3>" +
      "    <div class='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>" +
      "    <div class='p-4 rounded-lg border border-gray-200 bg-white text-center hover:shadow transition'>" +
      "      <div class='mx-auto mb-2 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-5 h-5'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-xs text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 text-sm font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a class='mt-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Loga%20ail%C4%93.pdf?updatedAt=1756975941813' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-4 rounded-lg border border-gray-200 bg-white text-center hover:shadow transition'>" +
      "      <div class='mx-auto mb-2 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-5 h-5'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-xs text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 text-sm font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (pie rāmja)</div>" +
      "      <a class='mt-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Alum%C4%ABnija%20horizont%C4%81lo%20%C5%BEal%C5%ABziju%20_ISO_%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai.pdf?updatedAt=1756976019585' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-4 rounded-lg border border-gray-200 bg-white text-center hover:shadow transition'>" +
      "      <div class='mx-auto mb-2 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-5 h-5'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-xs text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 text-sm font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a class='mt-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Pie%20sienas.pdf?updatedAt=1756975941825' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-4 rounded-lg border border-gray-200 bg-white text-center hover:shadow transition'>" +
      "      <div class='mx-auto mb-2 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-5 h-5'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-xs text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 text-sm font-medium text-gray-900'>Rullo žalūziju “SCREEN” uzstādīšanas instrukcija (pie rāmja)</div>" +
      "      <a class='mt-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20_SCREEN_%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija%20(pie%20r%C4%81mja).pdf?updatedAt=1756975745145' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-4 rounded-lg border border-gray-200 bg-white text-center hover:shadow transition'>" +
      "      <div class='mx-auto mb-2 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-5 h-5'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-xs text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 text-sm font-medium text-gray-900'>Rullo žalūziju “SCREEN” uzstādīšanas instrukcija (pie sienas)</div>" +
      "      <a class='mt-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Rullo%20%C5%BEal%C5%ABzijuSCREEN_ust.%20instrukcija.pdf?updatedAt=1756975745491' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'><section class='py-2'>" +
      "  <h3 class='text-center text-2xl font-bold text-gray-900'>Uzstādīšanas un mērījumu instrukcijas</h3>" +
      "  <div class='mt-4 flex justify-center'><span class='inline-block w-8 h-1 rounded bg-blue-600'></span></div>" +
      "  <div class='mt-6 max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Loga%20ail%C4%93.pdf?updatedAt=1756975941813' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0  0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (pie rāmja)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Alum%C4%ABnija%20horizont%C4%81lo%20%C5%BEal%C5%ABziju%20_ISO_%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai.pdf?updatedAt=1756976019585' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Pie%20sienas.pdf?updatedAt=1756975941825' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” uzstādīšanas instrukcija (pie rāmja)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20_SCREEN_%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija%20(pie%20r%C4%81mja).pdf?updatedAt=1756975745145' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” uzstādīšanas instrukcija (pie sienas)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Rullo%20%C5%BEal%C5%ABzijuSCREEN_ust.%20instrukcija.pdf?updatedAt=1756975745491' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "  <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "  <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'>" +
      "      <rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/>" +
      "    </svg>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo kasešu žalūziju instrukcija izmēru noteikšanai</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABzijas/Instrukciju/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai.pdf?updatedAt=1756741984724' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo kasešu žalūziju uzstādīšanas instrukcija</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABzijas/Instrukciju/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABziju%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija.pdf?updatedAt=1756741984897' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "</div>" +
      "<div class='w-full mt-10'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "        <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "          <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center'>" +
      "            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8 text-teal-600'><path d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'/></svg>" +
      "          </div>" +
      "          <h3 class='font-semibold text-gray-900 mb-3'>Īpašības</h3>" +
      "          <ul class='text-left list-disc list-inside space-y-2'>" +
      "            <li>Praktisks un ērts risinājums logu noformējumā – saglabā brīvu vietu palodzei.</li>" +
      "            <li>Ļauj atvērt logu vēdināšanas režīmā vai pilnībā, nepaceļot žalūziju.</li>" +
      "            <li>Nav jāmaksā par mazgāšanu un gludināšanu – viegla kopšana.</li>" +
      "            <li>Audumi apstrādāti ar pretputekļu pārklājumu.</li>" +
      "            <li>Pieejami vienkrāsaini, teksturēti, aptumšojoši un ar saules atstarojošu elementu.</li>" +
      "          </ul>" +
      "        </div>" +
      "        <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "          <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center'>" +
      "            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8 text-teal-600'><path d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.93l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.383-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527a1.125 1.125 0 0 1-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.107-1.204-.165-.397-.505-.71-.93-.78l-.893-.15C3.397 13.36 3 12.89 3 12.34v-1.094c0-.55.397-1.02.94-1.11l.893-.149c.425-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.774-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.806.272 1.203.107.397.165.71.505.781.93l.149.894Z'/></svg>" +
      "          </div>" +
      "          <h3 class='font-semibold text-gray-900 mb-3'>Mērījumi un materiāli</h3>" +
      "          <ul class='text-left list-disc list-inside space-y-2'>" +
      "            <li>Mūsu meistars ar katalogiem izbrauc pie Jums (saziņai: <a href='tel:+37120886650' class='text-teal-600 hover:underline'>+371 20886650</a>).</li>" +
      "            <li>Varat pasūtīt izstrādājumus pēc saviem izmēriem, izvēloties materiālu no katalogiem mūsu birojos.</li>" +
      "          </ul>" +
      "        </div>" +
      "        <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "          <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center'>" +
      "            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8 text-teal-600'><path d='M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9Zm-.75-9.75v-3a.75.75 0 0 1 1.5 0v2.25h1.5a.75.75 0 0 1 0 1.5H12.75v2.25a.75.75 0 0 1-1.5 0V12.75H9.75a.75.75 0 0 1 0-1.5h1.5Z'/></svg>" +
      "          </div>" +
      "          <h3 class='font-semibold text-gray-900 mb-3'>Apmaksas veidi</h3>" +
      "          <ul class='text-left list-disc list-inside space-y-2'>" +
      "            <li>Avansa maksājums</li>" +
      "            <li>Pēcapmaksa skaidrā naudā</li>" +
      "            <li>Pēcapmaksa ar karti</li>" +
      "            <li>Pēcapmaksa – bankas pārskaitījums</li>" +
      "          </ul>" +
      "        </div>" +
      "  </div>" +
      "</div>",
    features: "",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/East%20Hampton%20Somfy%20Roller%20Shades%20with%20Black%20Fascia.jpg?updatedAt=1756983460192',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/What%20a%20pleasure%20to%20finish%20off%20our%20clients_.jpg?updatedAt=1756983460167',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Upgrade%20your%20Light-Filtering%20Roller%20Blinds%20into%20a_.jpg?updatedAt=1756983460157',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Voile%20roller%20blinds%20are%20the%20perfect%20blind%20for_.jpg?updatedAt=1756983460141',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Elevate%20the%20elegance%20of%20our%20classic%20Blackout_.jpg?updatedAt=1756983460142',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Soma%20Steel%20Grey%20Blackout%20Cassette%20Roller_.jpg?updatedAt=1756983460145',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Tailor%20your%20Light-Filtering%20Roller%20Blinds%20to%20your_.jpg?updatedAt=1756983460146',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Bella%20Vine%20Green%20Blackout%20Cassette%20Motorised_.jpg?updatedAt=1756983460147',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Vivi%20Glow%20Multi%20Coloured%20_%20Yellow%20_%20Grey%20Light_.jpg?updatedAt=1756983460148',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Screen%203_%20Roller%20Shades%20with%20Cassette%20Track.jpg?updatedAt=1756983460150',
      "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Motorized%20roller%20shades%20aren't%20just%20for%20small%20or_.jpg?updatedAt=1756983460117",
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Our%20classic%20Blackout%20Roller%20Blinds%20get%20a%20stylish_.jpg?updatedAt=1756983460115',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Ducato%20Night%20Black%20Light%20Filtering%20Cassette%20Roller_.jpg?updatedAt=1756983460113',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/Our%20classic%20Blackout%20Roller%20Blinds%20get%20a%20stylish_%20(1).jpg?updatedAt=1756983460064'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Jaunas%20bildes%20m%C4%81jaslapai/East%20Hampton%20Somfy%20Roller%20Shades%20with%20Black%20Fascia.jpg?updatedAt=1756983460192',
  },
  rullo: {
    title: 'Rullo žalūzijas',
    description:
      "<p>Vēlme apvienot funkcionalitāti ar dizainu ir atvedusi mūs pie auduma rullo žalūzijām. Tās ir mūsdienīga atbilde klasiskiem aizkariem. Auduma rullo žalūzijas ir ideāls risinājums gan māju, gan biroju interjeriem.</p>" +
      "<p>Tās ne tikai regulē gaismas daudzumu telpā, bet arī kalpo kā svarīgs dizaina elements. Lai arī bieži tās izmanto kā 'nakts aizkarus' kombinācijā ar viegliem, caurspīdīgiem dienas aizkariem, tās lieliski izskatās arī kā vienīgais logu noformējums, piešķirot telpai minimālistisku un tīru izskatu.</p>" +
      "<p>Mēs piedāvājam vairākus sistēmu veidus, kas pielāgoti jūsu vēlmēm un loga specifikai:</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2'><li><strong>Vario 25</strong> — daļēji slēgtā sistēma</li><li><strong>Vario 32</strong> — atvērtā sistēma</li></ul>" +
      "<p>Papildus tam, jūs varat izvēlēties jums ērtāko vadības veidu: manuālo vai automātisko.</p>" +
      "<div class='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium mb-2'>Audumu katalogs</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas/Audumu%20katalogs.pdf?updatedAt=1756798123704' target='_blank' rel='noopener noreferrer' class='mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "  <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "  <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'>" +
      "      <rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/>" +
      "    </svg>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo žalūziju instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(loga%20ail%C4%93).pdf?updatedAt=1756798272599' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo žalūziju instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(pie%20sienas).pdf?updatedAt=1756798272484' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo žalūziju uzstādīšanas instrukcija</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas/Instrukcijas/ZF_montas_instrukcija_vario_25.pdf?updatedAt=1756798272861' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='w-full mt-10'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z'/><path d='M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Montāžas iespējas.</strong> Vienalga, vai vēlaties tās uzstādīt uz loga stikla paketes, pie sienas vai griestiem, rullo žalūzijas lieliski iekļausies jebkurā interjerā. Šī daudzpusība sniedz jums brīvību radīt tieši tādu noskaņu, kādu esat iedomājies.</li>" +
      "        <li><strong>Krāsas un faktūras.</strong> Pateicoties plašajam audumu klāstam, jūs varat eksperimentēt ar krāsām un faktūrām. No klasiskiem, neitrāliem toņiem līdz košām krāsām un interesantām tekstūrām – atradīsit sev piemērotāko variantu, kas piešķirs telpai raksturu.</li>" +
      "        <li><strong>Gaismas kontrole.</strong> Jūs varat izvēlēties starp audumiem, kas maigi izkliedē saules gaismu, radot mājīgu atmosfēru, vai pilnībā bloķē gaismu, nodrošinot 100% aptumšojumu.</li>" +
      "        <li><strong>Ilgmūžība un kopšana.</strong> Rullo žalūzijas ir viegli kopjamas un ilgmūžīgas. Audumi ir izturīgi pret izbalēšanu, un, ja vēlaties atsvaidzināt interjeru vai mainīt stilu, audumu ir viegli nomainīt.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījumi un materiāli</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosim par izbraukuma laiku.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "</div></div>",
    features: "",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/bfbec9a5-a67c-4786-bbc6-a0eb3ebdf2e6.jpg?updatedAt=1756983459822',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/PRICES%20MAY%20VARY_%20_Product%20Detail__The%20total%20size_.jpg?updatedAt=1756983459816',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Give%20your%20interior%20a%20luxurious%20look%20with%20this_.jpg?updatedAt=1756983459814',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/ab8945fc-e0c0-417c-93e5-b8de74d3baef.jpg?updatedAt=1756983459802',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/36615b23-5bba-4a27-898a-1ceaa574dcbc.jpg?updatedAt=1756983459796',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/29ae0229-2aaf-4521-b195-da40c29dcfc5.jpg?updatedAt=1756983459789',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/Add%20effortless%20elegance%20to%20your%20windows%20with%20this_.jpg?updatedAt=1756983459787',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/PRICES%20MAY%20VARY_%20_Excellent%20Material__Made%20of%20100__.jpg?updatedAt=1756983459777'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas/PRICES%20MAY%20VARY_%20_Excellent%20Material__Made%20of%20100__.jpg?updatedAt=1756983459777',
  },
  vertikalas: {
    title: 'Vertikālās žalūzijas',
    description:
      "<p>Vertikālās žalūzijas ir praktisks un ekonomisks risinājums, kas lieliski aizstāj tradicionālos aizkarus. Tās ir piemērotas jebkurai telpai – gan birojiem, gan mājokļiem, gan sabiedriskajām iestādēm.</p>" +
      "<p class='mt-4'>Izgatavojam žalūzijas arī nestandarta logiem, nodrošinot, ka tās ideāli iekļausies jebkurā interjerā. Jums ir iespēja izvēlēties sev ērtāko vadības veidu – manuālu vai automātisku.</p>" +
      "<div class='mt-6 grid grid-cols-1 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium mb-2'>Audumu katalogs</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Vertik%C4%81l%C4%81s/Audumu%20katalogs_ZF_vertikalas_zaluzijas.pdf_compressed.pdf?updatedAt=1756900933739' target='_blank' rel='noopener noreferrer' class='mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "  <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "  <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'>" +
      "      <rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/>" +
      "    </svg>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>" +
      "    <div class='group mx-auto w-full max-w-[22rem] text-center p-2 text-sm bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-2 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Vertikālo žalūziju uzstādīšanas instrukcija (pie sienas)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Vertik%C4%81l%C4%81s/Instrukcijas/Vertik%C4%81lo%20%C5%BEal%C5%ABziju%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija%20(pie%20sienas).pdf?updatedAt=1756901064986' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group mx-auto w-full max-w-[22rem] text-center p-2 text-sm bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-2 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Vertikālo žalūziju uzstādīšanas instrukcija (loga ailē)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Vertik%C4%81l%C4%81s/Instrukcijas/Vertik%C4%81lo%20%C5%BEal%C5%ABziju%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija%20(loga%20ail%C4%93).pdf?updatedAt=1756901064891' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Vertikālo žalūziju instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Vertik%C4%81l%C4%81s/Instrukcijas/Vertik%C4%81lo%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(pie%20sienas).pdf?updatedAt=1756902901137' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Vertikālo žalūziju instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Vertik%C4%81l%C4%81s/Instrukcijas/Vertik%C4%81lo%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(loga%20ail%C4%93).pdf?updatedAt=1756902901027' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z'/><path d='M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Gaismas kontrole.</strong> Viegli regulējiet žalūziju slīpumu, lai pielāgotu saules gaismas daudzumu.</li>" +
      "        <li><strong>Daudzpusīga vadība.</strong> Žalūzijas var atvērt, sabīdot tās pilnībā uz vienu pusi vai dalīti uz abām pusēm. Tas nodrošina ērtu piekļuvi logam.</li>" +
      "        <li><strong>Plaša lameļu izvēle.</strong> Atkarībā no vēlmēm, jūs varat izvēlēties lameles 89 mm vai 127 mm platumā.</li>" +
      "        <li><strong>Materiāli un audumi.</strong> Piedāvājam dažādus audumus — no daļēji aptumšojošiem līdz pilnībā aptumšojošiem. Pieejami arī audumi ar paaugstinātu ugunsdrošību, plašā krāsu un faktūru klāstā.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījums</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'>" +
      "<li><strong>Gaismas kontrole.</strong> Viegli regulējiet žalūziju slīpumu, lai pielāgotu saules gaismas daudzumu.</li>" +
      "<li><strong>Daudzpusīga vadība.</strong> Žalūzijas var atvērt, sabīdot tās pilnībā uz vienu pusu vai dalīti uz abām pusēm. Tas nodrošina ērtu piekļuvi logam.</li>" +
      "<li><strong>Plaša lameļu izvēle.</strong> Atkarībā no vēlmēm, jūs varat izvēlēties lameles 89 mm vai 127 mm platumā.</li>" +
      "<li><strong>Materiāli un audumi.</strong> Piedāvājam dažādus audumus — no daļēji aptumšojošiem līdz pilnībā aptumšojošiem. Pieejami arī audumi ar paaugstinātu ugunsdrošību, plašā krāsu un faktūru klāstā.</li>" +
      "</ul><p class='mt-2'>Vertikālās žalūzijas ir ideāls risinājums, ja meklējat praktisku un stilīgu logu noformējumu.</p>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/9e02feed0e49202d40fa2d9f94fef792.jpg?updatedAt=1756983417948',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/229031c7-e1cb-4809-baae-cef78692c04a.jpg?updatedAt=1756983417950',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Vertical.jpg?updatedAt=1756983417927',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Vertical%20Blinds%20Solid%20Textured%20S-Curved%20Tactics_.jpg?updatedAt=1756983417898',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Close%20up%20of%20Classic%20Scroll%20Black.jpg?updatedAt=1756983417885',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Levolor%C2%AE%EF%B8%8F%EF%B8%8F%20Perceptions%C2%AE%EF%B8%8F%EF%B8%8F%20Soft%20Vertical%20Shades_.jpg?updatedAt=1756983417888',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Blindsgalore%C2%AE%EF%B8%8F%EF%B8%8F%20Vinyl%20Vertical%20Blinds%20shown%20in_.jpg?updatedAt=1756983417850',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Bali%20Americana%20Vinyl%20Vertical%20Blinds%20_boldcolors_.jpg?updatedAt=1756983417849'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Vertik%C4%81l%C4%81s%20%C5%BEal%C5%ABzijas/Close%20up%20of%20Classic%20Scroll%20Black.jpg?updatedAt=1756983417885',
  },
  'rullo-diena-nakts': {
    title: 'Rullo žalūzijas "Diena-nakts"',
    description:
      "<p>Rullo žalūzijas \"Diena-nakts\" ir viena no populārākajām un modernākajām žalūziju sistēmām tirgū. Šīs stilīgās žalūzijas darbojas kā divslāņu aizkari, kuru audums sastāv no caurspīdīgām un necaurspīdīgām joslām. Mainot to pozīciju, jūs varat radīt gan dienas aizkaru, gan nakts aizkaru efektu.</p>" +
      "<p class='mt-4'>Atkarībā no jūsu vēlmēm un logu specifikas, mēs piedāvājam vairākus sistēmu profilus:</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2 mt-2'><li><strong>Vario 25</strong> – daļēji slēgta sistēma</li><li><strong>Vario 32</strong> – atvērta sistēma</li></ul>" +
      "<p class='mt-2'>Papildus tam, jūs varat izvēlēties sev ērtāko vadības mehānismu: manuālu vai automātisku.</p>" +
      "<div class='mt-6 max-w-md space-y-4' style='width:75%;'>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs BH 1</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/Audumu%20katalogs%20BH%201.png?updatedAt=1756830733934' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs BH 2</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/Audumu%20katalogs%20BH%202.png?updatedAt=1756830733722' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white'>" +
      "    <div class='font-medium'>Audumu katalogs DK01–DK11</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/DK01-DK11.png?updatedAt=1756830236863' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white'>" +
      "    <div class='font-medium'>Audumu katalogs DK12–DK18</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/DK12-DK18.png?updatedAt=1756830236496' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs Livello</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/Audumu%20katalogs%20Livello.pdf?updatedAt=1756830483443' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "  <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "  <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'>" +
      "      <rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/>" +
      "    </svg>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo žalūziju instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(loga%20ail%C4%93).pdf?updatedAt=1756829604295' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo žalūziju instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(pie%20sienas).pdf?updatedAt=1756829604186' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='w-full mt-10'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z'/><path d='M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Universāla funkcionalitāte</strong> Ar šīm žalūzijām jūs varat viegli mainīt telpas atmosfēru. Pielāgojot caurspīdīgās un necaurspīdīgās auduma joslas, varat iegūt maigu, izkliedētu dienasgaismu, kas atgādina plānu aizkaru efektu, vai arī nodrošināt pilnīgu privātumu un tumsu naktī.</li>" +
      "        <li><strong>Ērta kopšana</strong> Aizmirstiet par mazgāšanu un gludināšanu! Šo žalūziju audumi ir viegli kopjami un paredzēti ilgstošai lietošanai.</li>" +
      "        <li><strong>Daudzveidīga izvēle</strong> Lai pielāgotos jūsu interjeram, piedāvājam plašu krāsu un faktūru klāstu. Jūs varat izvēlēties audumus, kas harmoniski iekļaujas esošajā dizainā vai kļūst par spilgtu akcentu telpā.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījumi un materiāli</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mērījums: Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "</div>",
    features: "",
    images: [
      "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/Shade%20Works'%20Sheer%20Elegance%20Shades_.jpg?updatedAt=1756983460342",
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/A%20captivating%20image%20showcasing%20the%20sleek%20and_.jpg?updatedAt=1756983460322',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/81a4e13b-93a4-4b0b-aaf3-489b7a86e24d.jpg?updatedAt=1756983460323',
      "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/For%20contemporary%20spaces,%20Terry's%20Day%20and%20Night_.jpg?updatedAt=1756983460309",
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/With%20the%20filtered%20light%20option,%20you%20can%20roll%20up_.jpg?updatedAt=1756983460310',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/Cordless%20_%20Zebra%20Roller%20Shades%20_%20Basic%20Slate%20__.jpg?updatedAt=1756983460286',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/When%20you%20go%20for%20filtered%20light,%20the%20blind%20can%20be_.jpg?updatedAt=1756983460292',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/PRICES%20MAY%20VARY_%20Material%20and%20Design_%20My%20home_.jpg?updatedAt=1756983460279',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/cd1819c5-f7b8-4f4a-bd81-d69b55e102e1.jpg?updatedAt=1756983460264',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/e7d96123-ff6e-482b-8272-7efaed4aa6e0.jpg?updatedAt=1756983460263',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/ee0fb505-0d09-456b-bd21-ee3ae2d60ec8.jpg?updatedAt=1756983460262',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/Transform%20your%20living%20space%20with%20our%20Zebra%20Roller_.jpg?updatedAt=1756983460250',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/340c2ed7-f35f-4151-86d4-8a097f3acd2b.jpg?updatedAt=1756983460239',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/PRICES%20MAY%20VARY_%20DOUBLE%20ZEBRA%20ROLLER%20BLINDS_Made_.jpg?updatedAt=1756983460240'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo%20%C5%BEal%C5%ABzijas%20%20diena%20-%20nakts/Transform%20your%20living%20space%20with%20our%20Zebra%20Roller_.jpg?updatedAt=1756983460250',
  },
  'aizkaru': {
    title: '"Allusion" žalūzijas',
    description:
      "<p>Allusion žalūzijas – divi vienā. Unikāls dienas aizkaru un vertikālo žalūziju apvienojums.</p>" +
      "<p>Radītas, lai mainītu priekšstatu par logu noformējumu, Allusion žalūzijas ir īsta optiska ilūzija. Aiz viegla, caurspīdīga auduma slāņa slēpjas vertikālas strīpas, kas pārvērš romantiskus dienas aizkarus blīvā nakts aizsegā.</p>" +
 
      "<p>Šis jaunums sniedz iespēju racionāli noformēt logu, apvienojot dienas un nakts aizkaru funkcijas vienā produktā. Tas ir ideāls risinājums gan mājokļiem, gan birojiem, kas vēlas modernu, stilīgu un funkcionālu logu noformējumu.</p>" +
      "<div class='mt-6'>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-md'>" +
      "    <div class='font-medium'>Allusion audumu katalogs</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Allusion%20/Kr%C4%81sas/Allusion%20audumu%20katalogs.pdf?updatedAt=1756834074170' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "    <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "    <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'><rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/></svg>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>" +
      "    <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>“Allusion” žalūziju instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Allusion%20/Instrukcijas/_Allusion_%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(loga%20ail%C4%93).pdf?updatedAt=1756834097056' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>“Allusion” žalūziju instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Allusion%20/Instrukcijas/_Allusion_%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(pie%20sienas).pdf?updatedAt=1756834096882' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='w-full mt-10'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z'/><path d='M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Piekļuve un ērtība.</strong> Atšķirībā no tradicionālajiem aizkariem, kas var apgrūtināt piekļuvi logam, Allusion žalūzijas ļauj ērti pieiet logam jebkurā vietā.</li>" +
      "        <li><strong>Viegla kopšana.</strong> Audums ir noņemams un mazgājams, kas atvieglo kopšanu.</li>" +
      "        <li><strong>Dizains un materiāli.</strong> Ekskluzīvs patentēts audums ir elastīgs un izturīgs, kas nodrošina to ilgmūžību. Tās viegli iekļaujas jebkurā interjerā.</li>" +
      "        <li><strong>Gaismas kontrole.</strong> Allusion žalūzijas ļauj kontrolēt gaismas plūsmu, nodrošinot gan dienasgaismu, gan privātumu. Jūs varat viegli regulēt aptumšošanas pakāpi atbilstoši savām vēlmēm.</li>" +
      "        <li><strong>Pielietojums.</strong> Šīs žalūzijas ir piemērotas gan dzīvojamām telpām, gan birojiem, un tās ir lieliski piemērotas pat ļoti liela izmēra logiem (līdz pat 4 metriem). Pieejami arī audumi ar paaugstinātu ugunsdrošību.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījumi un materiāli</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mērījums: Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features: "",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionardena07.jpg?updatedAt=1756983492758',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionardena10.jpg?updatedAt=1756983492476',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionblacktopblind.jpg?updatedAt=1756983492462',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionardena04.jpg?updatedAt=1756983492405',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionardena06.jpg?updatedAt=1756983492402',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionardena05.jpg?updatedAt=1756983492389',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_0_allusionardena08.jpg?updatedAt=1756983492380',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionardena03__kopia.jpg?updatedAt=1756983492350',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusion.jpg?updatedAt=1756983492297',
    ],
    thumbnail: 'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Allusion/b_ZF_allusionardena07.jpg?updatedAt=1756983492758',
  },
  'kasetu-diena-nakts': {
    title: 'Kasešu žalūzijas "Diena-nakts"',
    description:
      "<p>Rullo žalūzijas “Diena-nakts” ir jaunākā tendence logu noformēšanā. Tās ir modernas un stilīgas žalūzijas, kas pilda gan dienas, gan nakts aizkaru funkciju, pateicoties savai unikālajai divslāņu konstrukcijai.</p>" +
      "<p class='mt-4'>Šo žalūziju audums sastāv no caurspīdīgām un necaurspīdīgām horizontālām joslām. Mainot to pozīciju, jūs varat precīzi regulēt gaismas plūsmu telpā — radīt maigu, izkliedētu gaismu vai nodrošināt pilnīgu privātumu un tumsu.</p>" +
      "<div class='mt-6 max-w-md space-y-4' style='width:75%;'>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs Livello</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/Audumu%20katalogs%20Livello.pdf?updatedAt=1756801858052' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs DK Nr. 01–11</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/DK01-DK11.png?updatedAt=1756801538080' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs DK Nr. 12–18</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/DK12-DK18.png?updatedAt=1756801538430' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs BH 1</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/Audumu%20katalogs%20BH%201.png?updatedAt=1756913424363' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Audumu katalogs BH 2</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/Audumu%20katalogs%20BH%202.png?updatedAt=1756913429750' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium'>Kasešu krāsas</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Kr%C4%81sas/Kase%C5%A1u%20kr%C4%81sas.png?updatedAt=1756801538069' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "  <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "  <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'>" +
      "      <rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/>" +
      "    </svg>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo kasešu žalūziju “Diena-Nakts” uzstādīšanas instrukcija</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Instrukcijas/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABziju%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija.pdf?updatedAt=1756801513826' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "      <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "    </div>" +
      "    <div class='font-medium'>Rullo kasešu žalūziju “Diena-Nakts” instrukcija izmēru noteikšanai</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20_Diena-nakts_/Instrukcijas/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABziju%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai.pdf?updatedAt=1756801513267' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='w-full mt-10'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z'/><path d='M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Universāla funkcionalitāte</strong> Ar šīm žalūzijām jūs varat viegli mainīt telpas atmosfēru. Pielāgojot caurspīdīgās un necaurspīdīgās auduma joslas, varat iegūt maigu, izkliedētu dienasgaismu, kas atgādina plānu aizkaru efektu, vai arī nodrošināt pilnīgu privātumu un tumsu naktī.</li>" +
      "        <li><strong>Ērta kopšana</strong> Aizmirstiet par mazgāšanu un gludināšanu! Šo žalūziju audumi ir viegli kopjami un paredzēti ilgstošai lietošanai.</li>" +
      "        <li><strong>Daudzveidīga izvēle</strong> Lai pielāgotos jūsu interjeram, piedāvājam plašu krāsu un faktūru klāstu. Jūs varat izvēlēties audumus, kas harmoniski iekļaujas esošajā dizainā vai kļūst par spilgtu akcentu telpā.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījumi un materiāli</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosiesm par izbraukuma laiku</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'></ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features: "",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/2057cb2b-3777-4828-94f7-318f8d05def5.jpg?updatedAt=1756983471394',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/(Promoted)%20MYshade%20Zebra%20Blinds%20for%20Windows_.jpg?updatedAt=1756983471393',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Hunter%20Douglas%20Silhouette%20Window%20Shadings%20in%20an_.jpg?updatedAt=1756983471375',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Buy%20MING%20CHEN%20Motorized%20Blinds%20with%20Remote%20Control_.jpg?updatedAt=1756983471374',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Day%20and%20Night%20Zebra%20Vision%20Window%20Roller%20Blind_.jpg?updatedAt=1756983471365',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Amazon_com_%20Changshade%20Custom%20Size%20Zebra%20Roller_.jpg?updatedAt=1756983471364',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/PRICES%20MAY%20VARY_%20Custom%20Size_%20We%20could%20customize_.jpg?updatedAt=1756983471355'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Kase%C5%A1u%20%C5%BEal%C5%ABzijas%20Diena-nakts/Day%20and%20Night%20Zebra%20Vision%20Window%20Roller%20Blind_.jpg?updatedAt=1756983471365',
  },
  screen: {
    title: 'Žalūzijas "SCREEN"',
    description:
      "<h3 class='text-xl font-semibold text-gray-900'>Screen žalūzijas – augsto tehnoloģiju risinājums jūsu logiem</h3>" +
      "<p class='mt-2'>Screen žalūzijas ir izgatavotas no inovatīva auduma, kas apvieno caurspīdīgumu un saules staru atstarošanu. Auduma pamatā ir smalks siets, kas austs no stikla šķiedras vītnēm, kuras pārklātas ar PVC (30% stikla šķiedra + 70% PVC).</p>" +
      "<p class='mt-2'>Šī auduma struktūra nodrošina vienpusēju redzamības efektu. Tas nozīmē, ka no iekšpuses var redzēt, kas notiek aiz loga, bet no ārpuses telpa nav redzama. Tas ir jaunākais veids, kā pasargāt telpu no ziņkārīgiem skatieniem un tiešiem saules stariem.</p>" +
      "<ul class='mt-3 space-y-1 text-gray-700'>" +
      "  <li><strong>Pielietojums.</strong> Screen audumu augstā izturība un plašais ruļļu platums (līdz 3200 mm) padara tās ideāli piemērotas panorāmas logiem un stikla fasādēm biroja ēkās, privātmājās un pat telpās ar paaugstinātu mitrumu, piemēram, pirtīs un baseinos.</li>" +
      "  <li><strong>Kopšana un izturība.</strong> Antistatiskā apstrāde atvieglo kopšanu un nodrošina ilgmūžību.</li>" +
      "  <li><strong>Vadība.</strong> Jums ir iespēja izvēlēties starp manuālo vai automātisko vadības mehānismu.</li>" +
      "  <li><strong>Dizains.</strong> Pieejama plaša auduma toņu izvēle, lai pielāgotos jebkuram interjeram.</li>" +
      "</ul>" +
      "<div class='mt-6'><div class='max-w-3xl mx-auto px-4 grid grid-cols-1 gap-3'>" +
      "  <div class='flex items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition'>" +
      "    <div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>JPG</div>" +
      "      <div class='font-medium text-gray-900'>Krāsu izvēles katalogs №1</div>" +
      "    </div>" +
      "    <a class='inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Kr%C4%81sas/ZF_pl_bsc_iii_53.jpg?updatedAt=1756975731854' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition'>" +
      "    <div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>JPG</div>" +
      "      <div class='font-medium text-gray-900'>Krāsu izvēles katalogs №2</div>" +
      "    </div>" +
      "    <a class='inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Kr%C4%81sas/ZF_pl_bsc_i_53.jpg?updatedAt=1756975731717' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "  </div>" +
      "</div></div>" +
      "<div class='mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'><section class='py-2'>" +
      "  <h3 class='text-center text-2xl font-bold text-gray-900'>Uzstādīšanas un mērījumu instrukcijas</h3>" +
      "  <div class='mt-4 flex justify-center'><span class='inline-block w-8 h-1 rounded bg-blue-600'></span></div>" +
      "  <div class='mt-6 max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Screen/Instrukcijas/Loga%20ail%C4%93.pdf?updatedAt=1756975941813' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (pie rāmja)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Alum%C4%ABnija%20horizont%C4%81lo%20%C5%BEal%C5%ABziju%20_ISO_%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai.pdf?updatedAt=1756975228733' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Pie%20sienas.pdf?updatedAt=1756906416461' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” uzstādīšanas instrukcija (pie rāmja)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20_SCREEN_%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija%20(pie%20r%C4%81mja).pdf?updatedAt=1756976217439' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Rullo žalūziju “SCREEN” uzstādīšanas instrukcija (pie sienas)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Rullo%20%C5%BEal%C5%ABziju%20_SCREEN_%20uzst%C4%81d%C4%AB%C5%A1anas%20%20(pie%20sienas).pdf?updatedAt=1756976402339' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</section></div>" +
      "<div class='mt-6 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Atspīdumu novēršana.</strong> Perforētais audums izkliedē gaismu un mazina atspīdumu uz ekrāniem – lieliski birojiem un darba telpām.</li>" +
      "        <li><strong>Termoizolācija.</strong> Samazina telpu pārkaršanu vasarā un siltuma zudumus ziemā.</li>" +
      "        <li><strong>Ilgmūžība.</strong> Stikla šķiedras vai poliestera audums ar augstu izturību.</li>" +
      "        <li><strong>Vienkārša kopšana.</strong> Tīrāmas ar mitru sūkli un maigu līdzekli.</li>" +
      "        <li><strong>Ugunsdrošība.</strong> Neuzliesmojošs audums ar M1 sertifikāciju.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M6.75 3a.75.75 0 0 1 .75.75v2.69a2.25 2.25 0 0 0 1.31 2.05l2.62 1.17a2.25 2.25 0 0 1 1.29 2.05v4.88a2.25 2.25 0 0 0 1.29 2.05l.36.16a.75.75 0 1 1-.58 1.38l-.36-.16a3.75 3.75 0 0 1-2.16-3.43v-4.88a.75.75 0 0 0-.43-.68l-2.9-1.33A3.75 3.75 0 0 1 6.75 7.19V3.75A.75.75 0 0 1 7.5 3h-.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Mērījumi un materiāli</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto'>" +
      "        <li>Mūsu meistars ar katalogiem izbrauc pie Jums (saziņai: <a href='tel:+37120886650' class='text-emerald-700 underline'>+371 20886650</a>).</li>" +
      "        <li>Varat pasūtīt arī mūsu birojos, izvēloties materiālu no katalogiem (Gustava Zemgala gatve 83, Rīga un Saules ielā 64, Daugavpils).</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm.75 3a.75.75 0 1 0-1.5 0v3.13a.75.75 0 0 0 .44.68l2.62 1.17a.75.75 0 1 0 .62-1.36l-2.18-.97V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums.</li>" +
      "        <li>Pēcapmaksa skaidrā naudā.</li>" +
      "        <li>Pēcapmaksa ar karti.</li>" +
      "        <li>Pēcapmaksa – bankas pārskaitījums.</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'>" +
      "<li><strong>Atspīdumu novēršana.</strong> Pateicoties perforētajai struktūrai, Screen žalūzijas efektīvi izkliedē saules gaismu, novēršot nepatīkamu atspīdumu uz ekrāniem un monitoriem. Tas padara tās ideāli piemērotas birojiem un darba telpām.</li>" +
      "<li><strong>Termoizolācija.</strong> Screen audums darbojas kā barjera pret karstumu, vasarā novēršot telpas pārkaršanu un ziemā samazinot siltuma zudumus.</li>" +
      "<li><strong>Ilgmūžība.</strong> Audums ir izgatavots no stikla šķiedras vai poliestera, kas nodrošina tā augstu izturību un ilgmūžību.</li>" +
      "<li><strong>Vienkārša kopšana.</strong> Šīs žalūzijas ir viegli tīrīt. Tām nav nepieciešama īpaša kopšana – audumu var vienkārši notīrīt ar mitru sūkli un mazgāšanas līdzekli.</li>" +
      "<li><strong>Ugunsdrošība.</strong> Screen audums ir neuzliesmojošs un atbilst Eiropas ugunsdrošības standartiem, kam ir M1 kods. Visiem audumiem ir ugunsizturības sertifikāts, kas garantē to drošumu.</li>" +
      "</ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/b_ZF_screen.png?updatedAt=1756983471333',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/Rolety-Screen-Refreksol-103.jpeg?updatedAt=1756983471276',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/rulonnyie-shtoryi-20.jpg?updatedAt=1756983471219',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/14233106_51346078217.jpg?updatedAt=1756983471201',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/images.jpg?updatedAt=1756983471196'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Saules%20atstarojo%C5%A1as%20un%20cauredzamas%20%C5%BEal%C5%ABzijas/rulonnyie-shtoryi-20.jpg?updatedAt=1756983471219',
  },
  'plisetas': {
    title: 'Plisētās žalūzijas',
    description:
      "<p>Plisētās žalūzijas ir elegants un funkcionāls risinājums gaismas kontrolei un privātuma nodrošināšanai. Tās izceļas ar krokotu, šūnveida vai plakanu auduma struktūru, kas palīdz uzlabot loga siltumizolāciju un estētiku.</p>" +
      "" +
      "<p class='mt-4'>Pateicoties plašajam audumu un sistēmu klāstam, tās piemērotas gan standarta, gan nestandarta logu formām — trapecēm, trijstūriem, jumta logiem. Pieejamas dažādās caurspīdīguma pakāpēs no caurspīdīgām līdz pilnībā aptumšojošām.</p>" +
      "<p class='mt-4'>Pieejamas ar manuālu vai automātisku vadību. Mēs palīdzēsim izvēlēties piemērotāko risinājumu tieši jūsu telpai.</p>" +
      "<div class='not-prose mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "  <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Plis%C4%93tas/Kr%C4%81sas/ZF_pleated_blinds_2024_compressed%20(1).pdf?updatedAt=1756917292902' target='_blank' rel='noopener noreferrer' class='group block p-5 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "    <div class='flex items-center gap-4'>" +
      "      <div class='w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M19.5 14.25v-2.625A3.375 3.375 0 0 0 16.125 8.25h-8.25A3.375 3.375 0 0 0 4.5 11.625V18a2.25 2.25 0 0 0 2.25 2.25h9.75A3 3 0 0 0 19.5 17.25v-3Z'/><path d='M15.75 6V3.75A.75.75 0 0 0 15 3h-6a.75.75 0 0 0-.75.75V6h7.5Z'/></svg>" +
      "      </div>" +
      "      <div>" +
      "        <h3 class='font-semibold'>Audumu katalogs</h3>" +
      "        <p class='text-sm text-gray-600'>PDF, atvērt jaunā logā</p>" +
      "      </div>" +
      "    </div>" +
      "  </a>" +
      "  <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Plis%C4%93tas/Kr%C4%81sas/Profilu%20kr%C4%81su%20katalogs.pdf?updatedAt=1756916078733' target='_blank' rel='noopener noreferrer' class='group block p-5 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "    <div class='flex items-center gap-4'>" +
      "      <div class='w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M19.5 14.25v-2.625A3.375 3.375 0 0 0 16.125 8.25h-8.25A3.375 3.375 0 0 0 4.5 11.625V18a2.25 2.25 0 0 0 2.25 2.25h9.75A3 3 0 0 0 19.5 17.25v-3Z'/><path d='M15.75 6V3.75A.75.75 0 0 0 15 3h-6a.75.75 0 0 0-.75.75V6h7.5Z'/></svg>" +
      "      </div>" +
      "      <div>" +
      "        <h3 class='font-semibold'>Profilu krāsu katalogs</h3>" +
      "        <p class='text-sm text-gray-600'>PDF, atvērt jaunā logā</p>" +
      "      </div>" +
      "    </div>" +
      "  </a>" +
      "  <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Plis%C4%93tas/Kr%C4%81sas/Profilu%20veidi_katalogs.pdf?updatedAt=1756916078510' target='_blank' rel='noopener noreferrer' class='group block p-5 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "    <div class='flex items-center gap-4'>" +
      "      <div class='w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M19.5 14.25v-2.625A3.375 3.375 0 0 0 16.125 8.25h-8.25A3.375 3.375 0 0 0 4.5 11.625V18a2.25 2.25 0 0 0 2.25 2.25h9.75A3 3 0 0 0 19.5 17.25v-3Z'/><path d='M15.75 6V3.75A.75.75 0 0 0 15 3h-6a.75.75 0 0 0-.75.75V6h7.5Z'/></svg>" +
      "      </div>" +
      "      <div>" +
      "        <h3 class='font-semibold'>Profilu veidi_katalogs</h3>" +
      "        <p class='text-sm text-gray-600'>PDF, atvērt jaunā logā</p>" +
      "      </div>" +
      "    </div>" +
      "  </a>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='w-full'>" +
      "    <div class='text-center max-w-6xl mx-auto px-4'>" +
      "      <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "      <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'><rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/></svg>" +
      "      </div>" +
      "    </div>" +
      "    <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Plis%C4%93tas/Instrukcijas/Alum%C4%ABnija%20horizont%C4%81lo%20%C5%BEal%C5%ABziju%20_Classic_%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(pie%20r%C4%81mja).pdf?updatedAt=1756917455413' target='_blank' rel='noopener noreferrer' class='group block p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "        <div class='flex items-start gap-4'>" +
      "          <div class='w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 .75.75V18A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6.75Z'/><path d='M7.5 3.75A.75.75 0 0 1 8.25 3h7.5a.75.75 0 0 1 .75.75V6h-9V3.75Z'/></svg>" +
      "          </div>" +
      "          <div>" +
      "            <h3 class='font-semibold'>Plisētu žalūziju instrukcija izmēru noteikšanai</h3>" +
      "            <p class='text-sm text-gray-600'>PDF, atvērt jaunā logā</p>" +
      "          </div>" +
      "        </div>" +
      "      </a>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Plis%C4%93tas/Instrukcijas/Plis%C4%93to%20%C5%BEal%C5%ABziju%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija.pdf?updatedAt=1756916108966' target='_blank' rel='noopener noreferrer' class='group block p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "        <div class='flex items-start gap-4'>" +
      "          <div class='w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M12 2.25a.75.75 0 0 1 .75.75V6h2.25a.75.75 0 0 1 .53 1.28l-3.75 3.75a.75.75 0 0 1-1.06 0L6.97 7.28A.75.75 0 0 1 7.5 6H9.75V3a.75.75 0 0 1 .75-.75Z'/><path d='M3 13.5A2.25 2.25 0 0 1 5.25 11.25h13.5A2.25 2.25 0 0 1 21 13.5v6A2.25 2.25 0 0 1 18.75 21.75H5.25A2.25 2.25 0 0 1 3 19.5v-6Z'/></svg>" +
      "          </div>" +
      "          <div>" +
      "            <h3 class='font-semibold'>Plisēto žalūziju uzstādīšanas instrukcija</h3>" +
      "            <p class='text-sm text-gray-600'>PDF, atvērt jaunā logā</p>" +
      "          </div>" +
      "        </div>" +
      "      </a>" +
      "    </div>" +
      "    <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "      <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "        <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        </div>" +
      "        <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "        <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "          <li><strong>Daudzpusīga stiprināšana.</strong> Plisētās žalūzijas var stiprināt pie loga rāmja, pie sienas vai griestiem. Piemērotas arī jebkuras formas logiem, nodrošinot maksimālu pielāgojamību.</li>" +
      "          <li><strong>Ērta kopšana.</strong> Audumu var mazgāt 30°C temperatūrā, kas atvieglo uzturēšanu tīru.</li>" +
      "          <li><strong>Plaša audumu izvēle.</strong> Dažādas krāsas, faktūras un caurspīdīguma pakāpes — no daļēji līdz pilnībā aptumšojošiem audumiem.</li>" +
      "        </ul>" +
      "        <p class='text-gray-700 text-left max-w-xl mx-auto mt-3'>Plisētās žalūzijas ir lielisks veids, kā kontrolēt gaismas plūsmu un piešķirt interjeram akurātu, pabeigtu izskatu.</p>" +
      "      </div>" +
      "      <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "        <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "        </div>" +
      "        <h3 class='text-lg font-semibold mb-2'>Mērījums</h3>" +
      "        <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku.</p>" +
      "      </div>" +
      "      <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "        <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "        </div>" +
      "        <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "        <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "          <li>Avansa maksājums</li>" +
      "          <li>Pēcapmaksa skaidrā naudā</li>" +
      "          <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "        </ul>" +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'>" +
      "<li><strong>Gaismas kontrole un privātums.</strong> Plisētā auduma konstrukcija ļauj precīzi regulēt gaismas daudzumu un nodrošina nepieciešamo privātumu jebkurā diennakts laikā.</li>" +
      "<li><strong>Energoefektivitāte.</strong> Šūnveida struktūra palīdz uzlabot logu siltumizolāciju, samazinot karstuma un aukstuma ietekmi telpā.</li>" +
      "<li><strong>Pielāgojamība.</strong> Piemērotas arī sarežģītām formām – trapecēm, trijstūriem un jumta logiem, kā arī pieejamas dažādās krāsās un caurspīdīguma pakāpēs.</li>" +
      "<li><strong>Viegla kopšana.</strong> Materiāli ir antistatiski un viegli kopjami ikdienā.</li>" +
      "</ul><p class='mt-2'>Plisētās žalūzijas apvieno funkcionalitāti un estētiku, padarot tās par lielisku izvēli jebkurai telpai.</p>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Modern%20Roman%20Blinds.jpg?updatedAt=1756983417718',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/The%20Hive%20Blockout%20Colours%20Collection%20of%20Perfect_.jpg?updatedAt=1756983417717',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/0512c52e-a481-448a-9af3-c9de0394c104.jpg?updatedAt=1756983417695',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/0edcf2f4-8211-42d7-8ee2-8455bb3af809.jpg?updatedAt=1756983417692',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Blinds.jpg?updatedAt=1756983417689',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Shopping%20for%20cellular%20window%20shades,%20but%20feeling%20a_.jpg?updatedAt=1756983417684',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/The%20Best%20Window%20Treatments%20for%20Every%20Room%20of%20the_.jpg?updatedAt=1756983417677',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/Hunter%20Douglas%20Contemporary%20Window%20Treatments_.jpg?updatedAt=1756983417644',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/74320e47-00ac-42d8-bae2-53ebc89f68da.jpg?updatedAt=1756983417638'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Pils%C4%93tas%20%C5%BEal%C5%ABzijas/74320e47-00ac-42d8-bae2-53ebc89f68da.jpg?updatedAt=1756983417638',
  },
  romiesu: {
    title: 'Romiešu žalūzijas',
    description:
      "<p>Romiešu žalūzijas ir unikāls risinājums, kas atšķiras no ierastajām rullo žalūzijām, apvienojot žalūziju funkcionalitāti un klasisko aizkaru eleganci.</p>" +
      "<p class='mt-4'>RB sistēma ir klasiska romiešu žalūziju sistēma, kurā tiek izmantots īpašs audums ar stiklplasta stieņiem. Pateicoties plašajai audumu kolekcijai, šāda veida romiešu žalūzijas lieliski iekļaujas gan modernā, gan klasiskā interjerā.</p>" +
      "<div class='mt-6 grid grid-cols-1 gap-6'>" +
      "  <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div class='font-medium mb-2'>Audumu katalogs</div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/romie%C5%A1u/Kr%C4%81sas/ZF_zf_roman_blinds_vario_compressed.pdf?updatedAt=1756903687800' target='_blank' rel='noopener noreferrer' class='mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "  <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas instrukcijas</h2>" +
      "  <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'>" +
      "      <rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/>" +
      "    </svg>" +
      "  </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-3xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>" +
      "    <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Romiešu žalūziju instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/romie%C5%A1u/Instrukcijas/Loga%20ail%C4%93.pdf?updatedAt=1756904122505' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group text-center p-6 bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-3 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-10 h-10'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Romiešu žalūziju instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/romie%C5%A1u/Instrukcijas/Pie%20sienas.pdf?updatedAt=1756904122575' target='_blank' rel='noopener noreferrer' class='mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition hover:translate-y-[-1px] hover:shadow active:translate-y-0'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z'/><path d='M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Vienkārša montāža.</strong> Pateicoties vieglajai konstrukcijai, žalūzijas ir viegli uzstādīt gan pie griestiem, gan pie sienas.</li>" +
      "        <li><strong>Vienkārša kopšana.</strong> Audums ir viegli noņemams no karnīzes (līmlentes) un mazgājams, kas nodrošina vienkāršu un ātru kopšanu.</li>" +
      "      </ul>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto mt-2'>Romiešu žalūzijas ir lielisks veids, kā piešķirt telpai mājīgumu, saglabājot funkcionalitāti.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījums</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<ul class='list-disc list-inside text-gray-700 space-y-2'>" +
      "<li><strong>Vienkārša montāža.</strong> Pateicoties vieglajai konstrukcijai, žalūzijas ir viegli uzstādīt gan pie griestiem, gan pie sienas.</li>" +
      "<li><strong>Vienkārša kopšana.</strong> Audums ir viegli noņemams no karnīzes (līmlentes) un mazgājams, kas nodrošina vienkāršu un ātru kopšanu.</li>" +
      "</ul><p class='mt-2'>Romiešu žalūzijas ir lielisks veids, kā piešķirt telpai mājīgumu, saglabājot funkcionalitāti.</p>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/ab27cbbb-abe5-41f9-9841-14c213fb3336.jpg?updatedAt=1756983435574',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Bespoke%20Roman%20blinds%20-%20Lucy%20J%20Interiors.jpg?updatedAt=1756983435540',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Keeping%20it%20neutral%20and%20calm%20in%20the%20bedroom_%20Roman_.jpg?updatedAt=1756983435532',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/bd5cfcb0-0b16-4f12-b983-a4ca8b0602d1.jpg?updatedAt=1756983435502',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Introduce%20contemporary%20style%20to%20any%20window%20in%20your_.jpg?updatedAt=1756983435496',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Buy%20Woven%20Geo%20Roman%20Blind%20from%20the%20Next%20UK%20online_.jpg?updatedAt=1756983435494',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/84a37158-da5e-4338-8160-828268abe981.jpg?updatedAt=1756983435487',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Eternity%20Linen%20Blue%20&%20Henley%20Trimmed%20Roman%20Blind.jpg?updatedAt=1756983435485',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/77a65c86-d179-495d-8ee2-c8c41abbd59b.jpg?updatedAt=1756983435482',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Bordered%20blinds%20are%20the%20perfect%20way%20to%20create%20a_.jpg?updatedAt=1756983435454',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/Double%20Roman%20blinds%20can%20be%20operated%20using%20various_.jpg?updatedAt=1756983435466'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Romie%C5%A1u%20%C5%BEal%C5%ABzijas/ab27cbbb-abe5-41f9-9841-14c213fb3336.jpg?updatedAt=1756983435574',
  },
  koka: {
    title: 'Koka žalūzijas',
    description:
      "<h3 class='text-xl font-bold text-gray-900'>Koka žalūzijas – klasiska elegance un ilgmūžība</h3>" +
      "<p class='mt-2'>Koka žalūzijas piešķir jebkuram interjeram siltumu un mājīgumu. Tās ir veidotas no speciālām, izturīgām un vieglām koku šķirnēm, kas nodrošina to ilgmūžību un stabilitāti. Žalūzijas ir pieejamas ar 25 mm vai 50 mm lameļu platumu.</p>" +
      "<p class='mt-2'>Ražošanas procesā lameles tiek pakļautas īpašai antistatiskai apstrādei un žāvēšanai. Tas pasargā tās no krāsas izmaiņām, deformācijas un sašķelšanās. Lai gan koka žalūzijas nav lētākais risinājums, tas ir vērtīgs ieguldījums, kas kalpos ilgus gadus.</p>" +
      "<p class='mt-2'>Žalūzijas ir pieejamas ar manuālu vai automātisku vadības mehānismu.</p>" +
      "<div class='mt-6 space-y-3'>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='font-medium text-gray-900'>Koka žalūziju krāsas — Jaunā kolekcija</div>" +
      "    </div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Kr%C4%81sas/ZF_kokazaluzijasnew.pdf?updatedAt=1756979224807' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='font-medium text-gray-900'>Lentas krāsu katalogs</div>" +
      "    </div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Kr%C4%81sas/ZF_wooden_blinds_standart_ladder_tape_colors_25mm.pdf?updatedAt=1756979224938' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "  <div class='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "    <div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='font-medium text-gray-900'>Auklas krāsu katalogs</div>" +
      "    </div>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Kr%C4%81sas/ZF_wooden_blinds_cord_colors.pdf?updatedAt=1756979224101' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold'>Atvērt</a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'><section class='py-2'>" +
      "  <h3 class='text-center text-2xl font-bold text-gray-900'>Uzstādīšanas un mērījumu instrukcijas</h3>" +
      "  <div class='mt-4 flex justify-center'><span class='inline-block w-8 h-1 rounded bg-blue-600'></span></div>" +
      "  <div class='mt-6 max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Koka žalūzijas instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/Loga%20ail%C4%93.pdf?updatedAt=1756980280747' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Koka žalūzijas instrukcija izmēru noteikšanai (pie rāmja)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/B.pdf?updatedAt=1756980411292' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Koka žalūzijas instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/Pie%20sienas.pdf?updatedAt=1756980280712' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Koka žalūziju uzstādīšanas instrukcija 25 mm</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/Koka%20%C5%BEal%C5%ABziju%20mont%C4%81%C5%BEas%20intrukcija%2025mm.pdf?updatedAt=1756979241743' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Koka žalūziju uzstādīšanas instrukcija 50 mm</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/Koka%20%C5%BEal%C5%ABziju%20mont%C4%81%C5%BEas%20instrukcija%2050mm.pdf?updatedAt=1756979240350' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</section></div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Īpašības</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Koka žalūzijas – dabiskums un funkcionalitāte. Šīs žalūzijas ir lieliska izvēle, ja vēlaties apvienot dabisku materiālu eleganci ar praktiskumu.</p>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto mt-2'>" +
      "        <li><strong>Dizains.</strong> Koka žalūzijas harmoniski iekļaujas gan klasiskā interjerā, gan modernās telpās, piešķirot tām siltu un mājīgu atmosfēru.</li>" +
      "        <li><strong>Ekoloģija.</strong> Izgatavotas no dabas materiāliem – ekoloģiski tīrs un drošs risinājums.</li>" +
      "        <li><strong>Gaismas kontrole.</strong> Lieliski aizsargā telpu no saules, veidojot skaistu un mīkstu ēnu spēli.</li>" +
      "        <li><strong>Kopšana.</strong> Mitrā tīrīšana nav ieteicama. Ūdens var deformēt lameles un mainīt krāsu, tāpēc nav piemērotas telpām ar augstu mitrumu.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Mērījums</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<h3 class='text-lg font-semibold mb-2'>Koka žalūzijas – dabiskums un funkcionalitāte</h3>" +
      "<p>Šīs žalūzijas ir lieliska izvēle, ja vēlaties apvienot dabisku materiālu eleganci ar praktiskumu.</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2 mt-2'>" +
      "<li><strong>Dizains.</strong> Koka žalūzijas harmoniski iekļaujas gan klasiskā interjerā, gan modernās telpās, piešķirot tām siltu un mājīgu atmosfēru.</li>" +
      "<li><strong>Ekoloģija.</strong> Tās ir izgatavotas no dabas materiāliem, kas ir ekoloģiski tīrs un drošs risinājums.</li>" +
      "<li><strong>Gaismas kontrole.</strong> Žalūzijas lieliski aizsargā telpu no saules, vienlaikus radot skaistu un mīkstu ēnu spēli.</li>" +
  "<li><strong>Kopšana.</strong> Lai nodrošinātu žalūziju ilgmūžību, tām nav ieteicama mitrā tīrīšana. Ūdens nokļūšana uz lamelēm var izraisīt to deformāciju un krāsas izmaiņas. Tādēļ koka žalūzijas nav piemērotas telpām ar augstu mitruma līmeni.</li>" +
  "</ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/3130e29c-30dc-4779-8030-65b12b9eb65c.jpg?updatedAt=1756983435797',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/bamboo%20blinds%20in%20the%20kitchen%20interior%20_kitchen_.jpg?updatedAt=1756983435741',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/Wood%20Blinds%20_WintopiaPhilKo%20_Combi%20_WindowBlinds_.jpg?updatedAt=1756983435740',
      "https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/nature-deco,%20wooden%20blind%20oak%20wood.jpg?updatedAt=1756983435734",
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/PRICES%20MAY%20VARY_%20Tailor-Made%20Elegance%20for%20Your_.jpg?updatedAt=1756983435727',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/Bring%20a%20luxurious%20feel%20into%20your%20home%20with%20the_.jpg?updatedAt=1756983435719',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/29342065-2385-47e6-b571-92b9bd6e87b3.jpg?updatedAt=1756983435707',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/Beautiful%20wooden%20venetians%20by%20Blinds%20Online%20Ltd_.jpg?updatedAt=1756983435703',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/Capture%20a%20sophisticated%20style%20with%20this%20Premier_.jpg?updatedAt=1756983435699',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/9e6ef7ce-64f0-4d2d-9a4f-9a70d3ef1edb.jpg?updatedAt=1756983435697',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/Rich%20Walnut%20Wooden%20Blind%20-%2050mm%20Slat.jpg?updatedAt=1756983435689',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/Chestnut%20Faux%20Wood%20Blind%20-%2050mm%20Slat.jpg?updatedAt=1756983435639'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Koka%20%C5%BEal%C5%ABzijas/Beautiful%20wooden%20venetians%20by%20Blinds%20Online%20Ltd_.jpg?updatedAt=1756983435703',
  },
  foto: {
    title: 'Foto žalūzijas',
    description:
      "<p>Fotožalūzijas ir viena no populārākajām inovācijām logu noformējuma pasaulē. Tās ir rullo žalūzijas, kuras var personalizēt ar jūsu izvēlētu attēlu, logotipu, fotogrāfiju vai uzrakstu.</p>" +
      "<p class='mt-2'>Pateicoties modernām tehnoloģijām, attēli uz žalūzijām ir reālistiski un spilgti. Šī ir galvenā fotožalūziju priekšrocība – tās ļauj radīt unikālu un neatkārtojamu interjeru. Žalūzijas ar unikālu dizainu padarīs jūsu mājas omulīgas un efektīvas.</p>" +
      "<div class='mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'><section class='py-2'>" +
      "  <h3 class='text-center text-2xl font-bold text-gray-900'>Uzstādīšanas un mērījumu instrukcijas</h3>" +
      "  <div class='mt-4 flex justify-center'><span class='inline-block w-8 h-1 rounded bg-blue-600'></span></div>" +
      "  <div class='mt-6 max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Foto žalūziju instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/Loga%20ail%C4%93.pdf?updatedAt=1756980280747' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Foto žalūziju instrukcija izmēru noteikšanai (pie rāmja)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/B.pdf?updatedAt=1756980411292' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Foto žalūziju instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Koka/Instrukcijas/Pie%20sienas.pdf?updatedAt=1756980280712' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Foto žalūziju uzstādīšanas instrukcija (pie rāmja)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/foto/Instrukcijas/Foto%20%C5%BEal%C5%ABziju%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija%20(pie%20r%C4%81mja)%20(2).pdf?updatedAt=1756982737921' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "    <div class='p-5 rounded-xl border border-gray-200 bg-white text-center hover:shadow-md transition'>" +
      "      <div class='mx-auto mb-2 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4.125 3A1.125 1.125 0 0 0 3 4.125v15.75C3 20.66 3.34 21 3.75 21h16.5c.41 0 .75-.34.75-.75V6.375A1.125 1.125 0 0 0 19.875 5.25h-9L9.75 3H4.125Z'/></svg>" +
      "      </div>" +
      "      <div class='text-sm text-blue-600 font-semibold'>PDF</div>" +
      "      <div class='mt-1 font-medium text-gray-900'>Foto žalūziju uzstādīšanas instrukcija (pie sienas)</div>" +
      "      <a class='mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700' href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/foto/Instrukcijas/ZF_0_fotozaluzijasuzstadisanapie_sienaslv%20(1).pdf.pdf?updatedAt=1756982737876' target='_blank' rel='noopener noreferrer'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</section></div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'><div class='py-16 bg-gray-50'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Fotožalūzijas – jūsu personīgā galerija pie loga. Pateicoties modernājām tehnoloģijām, jūs iegūsiet ne tikai funkcionālas žalūzijas, bet arī unikālu mākslas darbu.</p>" +
      "      " +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto mt-2'>" +
      "        <li><strong>Personalizēts dizāns.</strong> Varat izvēlēties jebkuru augstas izšķirtspējas fotoattēlu vai attēlu, lai izveidotu unikālas žalūzijas.</li>" +
      "        <li><strong>Ilgmūžība.</strong> Krāsas nezaudēs savu spilgtumu un līnijas paliks izteiksmīgas pat saules ietekmē.</li>" +
      "        <li><strong>Kvalitāte.</strong> Attēls uz auduma būs skaidrs un kontrastains.</li>" +
      "        <li><strong>Ekoloģiska drošība.</strong> Žalūzijas ir izgatavotas no ekoloģiski drošiem materiāliem.</li>" +
      "      </ul>" +
      "      <p class='text-gray-700 mt-2'>Fotožalūzijas ir lielisks veids, kā piešķirt telpai individuālu raksturu.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījumi un materiāli</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto mt-2'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<p>Fotožalūzijas – jūsu personīgā galerija pie loga. Pateicoties modernajām tehnoloģijām, jūs iegūsiet ne tikai funkcionālas žalūzijas, bet arī unikālu mākslas darbu.</p>" +
      "<h3 class='text-lg font-semibold mt-3 mb-2'>Galvenās īpašības</h3>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2'>" +
      "<li><strong>Personalizēts dizains.</strong> Varat izvēlēties jebkuru augstas izšķirtspējas fotoattēlu vai attēlu, lai izveidotu unikālas žalūzijas.</li>" +
      "<li><strong>Ilgmūžība.</strong> Krāsas nezaudēs savu spilgtumu un līnijas paliks izteiksmīgas pat saules ietekmē.</li>" +
      "<li><strong>Kvalitāte.</strong> Attēls uz auduma būs skaidrs un kontrastains.</li>" +
      "<li><strong>Ekoloģiska drošība.</strong> Žalūzijas ir izgatavotas no ekoloģiski drošiem materiāliem.</li>" +
      "</ul><p class='mt-2'>Fotožalūzijas ir lielisks veids, kā piešķirt telpai individuālu raksturu.</p>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/From%20our%20exclusive%201X%20curated%20collection%20Photo%20by_.jpg?updatedAt=1756983435879',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_%20(3).jpg?updatedAt=1756983435867',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_.jpg?updatedAt=1756983435849',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/Printed%20photo%20roller%20blinds%20featuring%20stunning_.jpg?updatedAt=1756983435823',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/Gorgeuos%20Hummingbird%20by%20Louise%20Tiler_%20Available%20in_.jpg?updatedAt=1756983435815',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_%20(2).jpg?updatedAt=1756983435812',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/Children%20and%20Nursery%20Bedroom%20Roller%20Blinds%20_%20UC_.jpg?updatedAt=1756983435811',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_%20(1).jpg?updatedAt=1756983435795',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/From%20our%20exclusive%201X%20curated%20collection%20Photo%20by_%20(1).jpg?updatedAt=1756983435796',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/Get%20lost%20in%20the%20breathtaking%20view%20of%20_Night%20falls_.jpg?updatedAt=1756983435788'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Foto%20%C5%BEal%C5%ABzijas/IMAGE%20BY%20PICTUFY%20Printed%20photo%20roller%20blinds_.jpg?updatedAt=1756983435849',
  },
  mansarda: {
    title: 'Mansarda logu žalūzijas',
    description:
      "<p>Pēc mansarda logu uzstādīšanas bieži vien rodas jautājums par aizsardzību pret sauli. Tā kā šie logi atrodas slīpumā, tiem nepieciešami īpaši risinājumi.</p>" +
      "<p class='mt-2'>Mansarda logu žalūzijas ir radītas tieši šim nolūkam. Tās nodrošina efektīvu aizsardzību pret sauli un kalpo arī kā dekoratīvs elements. Šo žalūziju dizains ir rūpīgi pārdomāts, lai tās būtu ērti lietojamas un efektīvi aizēnotu telpu. Mēs izgatavojam žalūzijas slīpajiem logiem plašā audumu un krāsu sortimentā.</p>" +
      "<p class='mt-4'><a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Rullo%20kase%C5%A1u%20%C5%BEal%C5%ABzijas/Kr%C4%81sas/Audumu%20katalogs.pdf?updatedAt=1756741676496' target='_blank' rel='noopener noreferrer' class='inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'>Audumu katalogs</a></p>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'><div class='py-16 bg-gray-50'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mansarda logu žalūzijas – funkcionāls risinājums jebkuram loga izmēram un novietojumam.</p>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto mt-2'>" +
      "        <li>Mēs izgatavojam žalūzijas visdažādākajiem logiem – gan tādiem, kas atrodas slīpi vai griestos, gan tādiem, kas aizņem visu sienu vai tās atsevišķu daļu.</li>" +
      "        <li>Mansarda logu žalūzijas ir labākais veids, kā kontrolēt apgaismojumu un nodrošināt vizuālu izolāciju.</li>" +
      "        <li>To konstrukcijas ir vienkāršas, efektīvas un ilgmūžīgas.</li>" +
      "        <li>Pieejams plašs krāsu gammas klāsts, kas ļauj tās pielāgot jebkuram interjeram.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījumi un materiāli</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar katalogiem izbrauc pie Jums (saziņai: <a href='tel:+37120886650' class='text-emerald-700 underline'>+371 20886650</a>).</p>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto mt-2'>Jūs varat pasūtīt izstrādājumu pēc saviem izmēriem, izvēloties materiālu no katalogiem mūsu birojos (Gustava Zemgala gatve 83, Rīga un Saules ielā 64, Daugavpils).</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto mt-2'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar karti</li>" +
      "        <li>Pēcapmaksa - bankas pārskaitījums</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<p>Mansarda logu žalūzijas – funkcionāls risinājums jebkuram loga izmēram un novietojumam.</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2'>" +
      "<li>Mēs izgatavojam žalūzijas visdažādākajiem logiem – gan tādiem, kas atrodas slīpi vai griestos, gan tādiem, kas aizņem visu sienu vai tās atsevišķu daļu.</li>" +
      "<li>Mansarda logu žalūzijas ir labākais veids, kā kontrolēt apgaismojumu un nodrošināt vizuālu izolāciju.</li>" +
      "<li>To konstrukcijas ir vienkāršas, efektīvas un ilgmūžīgas.</li>" +
      "<li>Pieejams plašs krāsu gammas klāsts, kas ļauj tās pielāgot jebkuram interjeram.</li>" +
      "</ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/loft-perfectly-pitched.jpg?updatedAt=1756983448291',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/b_ZF_s_zf_bbroletyvelux.jpg?updatedAt=1756983448278',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Skylight%20Blind.jpg?updatedAt=1756983448257',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/7b2d6797-d592-4ff3-80d3-e36c81420870.jpg?updatedAt=1756983448247',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Skylight%20blinds%20give%20you%20control%20over%20the%20amount_.jpg?updatedAt=1756983448238',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Velux%20windows%20and%20blinds%20perfect%20for%20the%20bedroom_.jpg?updatedAt=1756983448236',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/Chez%20Larsson_%20Troubleshooting%20for%20Juliette.jpg?updatedAt=1756983448232',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/cbbbb6_71dc0f3aae3a4ffbb596e567b4cb0c8f~mv2.avif?updatedAt=1756983448225'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mansarda%20logu%20%C5%BEal%C5%ABzijas/loft-perfectly-pitched.jpg?updatedAt=1756983448291',
  },
  aluminija: {
    title: 'Alumīnija žalūzijas',
    description:
      "<p><strong>Alumīnija žalūzijas – funkcionāls un ilgmūžīgs risinājums</strong></p>" +
      "<p class='mt-2'>Alumīnijs ir ideāls materiāls žalūzijām, pateicoties tā antikorozijas īpašībām. Tas pasargā telpu no pārkaršanas saulainā laikā un nodrošina labu siltumizolāciju, saglabājot siltumu telpās vēsākā laikā. Tās ir lieliski piemērotas telpām ar mainīgām temperatūrām.</p>" +
      "<p class='mt-2'>Mēs piedāvājam horizontālās alumīnija žalūzijas ar dažādu lameļu platumu: 16 mm, 25 mm un 50 mm. Tās ir pieejamas ar Standard un ISO tipa mehānismiem. Žalūzijas var aprīkot ar manuālu vai automātisku vadības mehānismu.</p>" +
      "<div class='mt-6'>" +
      "  <div class='max-w-3xl mx-auto px-4 grid grid-cols-1 gap-3'>" +
      "    <div class='group p-3 sm:p-4 bg-white rounded-lg border border-gray-200 transition hover:shadow-md hover:-translate-y-[2px] hover:border-blue-200'>" +
      "      <div class='flex items-center justify-between gap-3'>" +
      "        <div class='font-medium'>Krāsu izvēles katalogs_16/25mm</div>" +
      "        <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Kr%C4%81sas/ZF_kolekcijas_katalogs_nr.1.pdf?updatedAt=1756905246338' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition'>Atvērt</a>" +
      "      </div>" +
      "    </div>" +
      "    <div class='group p-3 sm:p-4 bg-white rounded-lg border border-gray-200 transition hover:shadow-md hover:-translate-y-[2px] hover:border-blue-200'>" +
      "      <div class='flex items-center justify-between gap-3'>" +
      "        <div class='font-medium'>Krāsu izvēles katalogs_50mm</div>" +
      "        <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Kr%C4%81sas/ZF_alluminium_blinds_50mm.pdf?updatedAt=1756905245377' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition'>Atvērt</a>" +
      "      </div>" +
      "    </div>" +
      "    <div class='group p-3 sm:p-4 bg-white rounded-lg border border-gray-200 transition hover:shadow-md hover:-translate-y-[2px] hover:border-blue-200'>" +
      "      <div class='flex items-center justify-between gap-3'>" +
      "        <div class='font-medium'>Karnīzes krāsu katalogs_50mm</div>" +
      "        <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Kr%C4%81sas/ZF_aluminium_blinds__50mm_steel_headrail_colors.pdf?updatedAt=1756905245580' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition'>Atvērt</a>" +
      "      </div>" +
      "    </div>" +
      "    <div class='group p-3 sm:p-4 bg-white rounded-lg border border-gray-200 transition hover:shadow-md hover:-translate-y-[2px] hover:border-blue-200'>" +
      "      <div class='flex items-center justify-between gap-3'>" +
      "        <div class='font-medium'>Karnīzes krāsu katalogs_ISO 25/16mm</div>" +
      "        <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Kr%C4%81sas/ZF_profilu_krsas_alumnija_alzijas_isso.pdf?updatedAt=1756905245648' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition'>Atvērt</a>" +
      "      </div>" +
      "    </div>" +
      "    <div class='group p-3 sm:p-4 bg-white rounded-lg border border-gray-200 transition hover:shadow-md hover:-translate-y-[2px] hover:border-blue-200'>" +
      "      <div class='flex items-center justify-between gap-3'>" +
      "        <div class='font-medium'>Karnīzes krāsu katalogs_Classik 25mm</div>" +
      "        <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Kr%C4%81sas/ZF_profilu_krsas_alumnija_alzijas_classik.pdf?updatedAt=1756905245418' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition'>Atvērt</a>" +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='text-center max-w-6xl mx-auto px-4'>" +
      "    <h2 class='text-3xl md:text-4xl font-bold'>Uzstādīšanas un mērījumu instrukcijas</h2>" +
      "    <div class='mx-auto mt-3 text-blue-600' aria-hidden='true'>" +
      "      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 16' fill='currentColor' class='w-10 h-4 mx-auto'>" +
      "        <rect x='12' y='2' width='40' height='2' rx='1'/><rect x='18' y='7' width='28' height='2' rx='1'/><rect x='24' y='12' width='16' height='2' rx='1'/>" +
      "      </svg>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group mx-auto w-full max-w-[22rem] text-center p-2 text-sm bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-2 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Alumīnija horizontālo žalūziju “Classic” instrukcija izmēru noteikšanai (loga ailē)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Loga%20ail%C4%93.pdf?updatedAt=1756906416460' target='_blank' rel='noopener noreferrer' class='mt-2 inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group mx-auto w-full max-w-[22rem] text-center p-2 text-sm bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-2 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Alumīnija horizontālo žalūziju “Classic” instrukcija izmēru noteikšanai (pie rāmja)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Alum%C4%ABnija%20horizont%C4%81lo%20%C5%BEal%C5%ABziju%20_Classic_%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai%20(pie%20r%C4%81mja).pdf?updatedAt=1756906416789' target='_blank' rel='noopener noreferrer' class='mt-2 inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group mx-auto w-full max-w-[22rem] text-center p-2 text-sm bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-2 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Alumīnija horizontālo žalūziju “Classic” instrukcija izmēru noteikšanai (pie sienas)</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Pie%20sienas.pdf?updatedAt=1756906416461' target='_blank' rel='noopener noreferrer' class='mt-2 inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group mx-auto w-full max-w-[22rem] text-center p-2 text-sm bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-2 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Alumīnija horizontālo žalūziju “ISO” instrukcija izmēru noteikšanai</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Alum%C4%ABnija%20horizont%C4%81lo%20%C5%BEal%C5%ABziju%20_ISO_%20instrukcija%20izm%C4%93ru%20noteik%C5%A1anai.pdf?updatedAt=1756975228733' target='_blank' rel='noopener noreferrer' class='mt-2 inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition'>Atvērt</a>" +
      "    </div>" +
      "    <div class='group mx-auto w-full max-w-[22rem] text-center p-2 text-sm bg-white rounded-xl border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 hover:border-blue-200'>" +
      "      <div class='mx-auto mb-2 text-blue-600 flex flex-col items-center gap-1' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-9L14.25 2.25H6Z'/></svg>" +
      "        <span class='text-[10px] leading-none font-bold text-white bg-blue-600 px-2 py-1 rounded'>PDF</span>" +
      "      </div>" +
      "      <div class='font-medium'>Alumīnija horizontālo žalūziju “ISO” uzstādīšanas instrukcija</div>" +
      "      <a href='https://ik.imagekit.io/vbvwdejj5/%C5%BDal%C5%ABzijas%20-%20kr%C4%81sas%20un%20instrukcijas/Alum%C4%ABnija/Instrukcijas/Alum%C4%ABnija%20horizont%C4%81lo%20%C5%BEal%C5%ABziju_ISO_%20uzst%C4%81d%C4%AB%C5%A1anas%20instrukcija.pdf?updatedAt=1756905265449' target='_blank' rel='noopener noreferrer' class='mt-2 inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition'>Atvērt</a>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M9.813 3.188a.75.75 0 0 1 1.374 0l.803 1.9a3 3 0 0 0 1.622 1.622l1.9.803a.75.75 0 0 1 0 1.374l-1.9.803a3 3 0 0 0-1.622 1.622l-.803 1.9a.75.75 0 0 1-1.374 0l-.803-1.9a3 3 0 0 0-1.622-1.622l-1.9-.803a.75.75 0 0 1 0-1.374l1.9-.803a3 3 0 0 0 1.622-1.622l.803-1.9Z'/><path d='M16.5 14.25a.75.75 0 0 1 1.384-.345l.362.69a2.25 2.25 0 0 0 .959.959l.69.362a.75.75 0 0 1 0 1.384l-.69.362a2.25 2.25 0 0 0-.959.959l-.362.69a.75.75 0 0 1-1.384 0l-.362-.69a2.25 2.25 0 0 0-.959-.959l-.69-.362a.75.75 0 0 1 0-1.384l.69-.362a2.25 2.25 0 0 0 .959-.959l.362-.69Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Šīs žalūzijas ir izturīgas un piemērotas jebkurai telpai. Tām ir vairākas būtiskas priekšrocības:</p>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto mt-2'>" +
      "        <li><strong>Izturība.</strong> Alumīnijs ir noturīgs pret saules stariem un temperatūras svārstībām. Lameles ir ugunsdrošas un tām nekaitē mitrums vai tvaiki, padarot tās ideāli piemērotas vannasistabām un virtuvēm.</li>" +
      "        <li><strong>Vienkārša kopšana.</strong> Žalūzijas ir ļoti viegli tīrīt. Tās var slaucīt ar slotiņu, mitru drānu vai pat mazgāt zem ūdens strūklas.</li>" +
      "        <li><strong>Daudzpusīga montāža.</strong> Tās var stiprināt pie loga, sienas vai griestiem.</li>" +
      "        <li><strong>Plaša krāsu izvēle.</strong> Lai pielāgotos jūsu interjeram, ir pieejama plaša krāsu gamma.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījums</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<p>Šīs žalūzijas ir izturīgas un piemērotas jebkurai telpai. Tām ir vairākas būtiskas priekšrocības:</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2'>" +
      "<li><strong>Izturība.</strong> Alumīnijs ir noturīgs pret saules stariem un temperatūras svārstībām. Lameles ir ugunsdrošas un tām nekaitē mitrums vai tvaiki, padarot tās ideāli piemērotas vannasistabām un virtuvēm.</li>" +
      "<li><strong>Vienkārša kopšana.</strong> Žalūzijas ir ļoti viegli tīrīt. Tās var slaucīt ar slotiņu, mitru drānu vai pat mazgāt zem ūdens strūklas.</li>" +
      "<li><strong>Daudzpusīga montāža.</strong> Tās var stiprināt pie loga, sienas vai griestiem.</li>" +
      "<li><strong>Plaša krāsu izvēle.</strong> Lai pielāgotos jūsu interjeram, ir pieejama plaša krāsu gamma.</li>" +
      "</ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Aluminum%2050mm%20Aluminum%20Venetian%20Blinds%20Make%20an_.jpg?updatedAt=1756983448675',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Wood%20venetian%20blinds%20with%20existing%20curtains%20_%20Pure_.jpg?updatedAt=1756983448664',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/The%20Project%20Source%202%20Inch%20Cordless%20Premium%20Blind_.jpg?updatedAt=1756983448668',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/b5ff7e44-ab4e-4514-969b-c60b44d2235c.jpg?updatedAt=1756983448660',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Venetian%20blinds%20are%20a%20popular%20window%20treatment_.jpg?updatedAt=1756983448640',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/We%20just%20wrapped%20up%20an%20aluminum%20blind%20installation_.jpg?updatedAt=1756983448619',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Give%20your%20doors%20and%20windows%20a%20snazzy%20facelift%20with_.jpg?updatedAt=1756983448588',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Invite%20a%20stylish%20pop%20of%20colour%20into%20your%20home%20with_.jpg?updatedAt=1756983448587',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Bring%20a%20hint%20of%20modern%20sophistication%20into%20your_.jpg?updatedAt=1756983448570'
  ],
  thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Alum%C4%ABnija%20%C5%BEal%C5%ABzijas/Bring%20a%20hint%20of%20modern%20sophistication%20into%20your_.jpg?updatedAt=1756983448570',
  },
  
  'mikstie-logi': {
    title: 'Mīkstie logi',
    description:
      "<p><strong>Mīkstie logi – lieliska alternatīva stiklam.</strong></p>" +
      "<p class='mt-2'>Mīkstie logi ir radīti, lai pasargātu jūsu atvērtās telpas – terases, verandas vai lapenes – no vēja, nokrišņiem un kukaiņiem. Tie ir izgatavoti no augstas kvalitātes PVC plēves, kas ir izturīga pret ultravioletajiem stariem un ekstremālām temperatūrām.</p>" +
      
      "<h3 class='text-xl font-semibold mt-4 mb-2'>Funkcionalitāte un estētika</h3>" +
      "<p>Mīkstos logus ir viegli atvērt, sarullējot uz augšu un nostiprinot ar speciālām siksnām. Mēs piedāvājam divu veidu PVC plēves: pilnībā caurspīdīgas vai ar ēnojumu, kas nodrošina labāku aizsardzību pret sauli. Telpām ar paaugstinātu ugunsrisku ir pieejami ugunsizturīgi materiāli.</p>" +
      "<h3 class='text-xl font-semibold mt-4 mb-2'>Izturība un dizains</h3>" +
      "<p>Mīksto logu apdares rāmji ir izgatavoti no izturīgām PVC loksnēm, kas tiek apstrādātas ar speciālu kausēšanas iekārtu, lai novērstu nodilumu gadu gaitā. Tie ir pieejami dažādos toņos: balts, antracīts, brūns, bēšs un citas krāsas.</p>" +
      "<p>Logi tiek nostiprināti ar speciāliem gredzeniem un grozāmiem kronšteiniem, kas nodrošina augstu vēja izturību. Stiprinājumi ir pieejami sudraba, zelta un melnā krāsā.</p>" +
      "<p>Papildu ērtībai ir iespējams iestrādāt rāvējslēdzēju – vienviru vai divviru –, kas kalpos kā durvis.</p>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'><div class='py-16 bg-gray-50'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Īpašības</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mīkstie logi – izturība, funkcionalitāte un drošība. Mīkstie logi ir lielisks risinājums jūsu terasei, verandai vai lapenei, piedāvājot daudz priekšrocību salīdzinājumā ar stikla un plastikāta konstrukcijām.</p>" +
      "      <ul class='list-disc list-inside text-left text-gray-700 space-y-1 max-w-xl mx-auto mt-2'>" +
      "        <li><strong>Biezums un gaismas caurlaidība.</strong> Pieejama PVC plēve ar biezumu 0.60 vai 0.80 mm. Materiāls nodrošina līdz pat 90% gaismas caurlaidību, saglabājot telpas gaišas.</li>" +
      "        <li><strong>Izturība pret ekstremālām temperatūrām.</strong> Mīkstie logi ir izturīgi pret lielām temperatūras svārstībām – tie darbojas diapazonā no -40°C līdz +80°C. Tiem ir arī laba siltumizolācija.</li>" +
      "        <li><strong>Drošība un ilgtspējība.</strong> Atšķirībā no stikla, mīkstos logus nevar salauzt, kas novērš savainošanās risku. Tie ir izgatavoti no materiāliem, kas nav kaitīgi cilvēka veselībai, un saglabā savu funkcionalitāti vismaz 10 gadus.</li>" +
      "        <li><strong>Vienkārša kopšana un finansiāla izdevība.</strong> Materiāls ir viegli tīrāms un nav pakļauts pelējuma ietekmei. Turklāt mīkstie logi ir finansiāli izdevīgāks risinājums nekā stikla vai plastikāta konstrukcijas.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījumi un materiāli</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-left text-gray-700 space-y-1 max-w-xl mx-auto mt-2'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<p>Mīkstie logi – izturība, funkcionalitāte un drošība. Mīkstie logi ir lielisks risinājums jūsu terasei, verandai vai lapenei, piedāvājot daudz priekšrocību salīdzinājumā ar stikla un plastikāta konstrukcijām.</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2 mt-2'>" +
      "<li><strong>Biezums un gaismas caurlaidība.</strong> Pieejama PVC plēve ar biezumu 0.60 vai 0.80 mm. Materiāls nodrošina līdz pat 90% gaismas caurlaidību, saglabājot telpas gaišas.</li>" +
      "<li><strong>Izturība pret ekstremālām temperatūrām.</strong> Mīkstie logi ir izturīgi pret lielām temperatūras svārstībām – tie darbojas diapazonā no -40°C līdz +80°C. Tiem ir arī laba siltumizolācija.</li>" +
      "<li><strong>Drošība un ilgtspējība.</strong> Atšķirībā no stikla, mīkstos logus nevar salauzt, kas novērš savainošanās risku. Tie ir izgatavoti no materiāliem, kas nav kaitīgi cilvēka veselībai, un saglabā savu funkcionalitāti vismaz 10 gadus.</li>" +
      "<li><strong>Vienkārša kopšana un finansiāla izdevība.</strong> Materiāls ir viegli tīrāms un nav pakļauts pelējuma ietekmei. Turklāt mīkstie logi ir finansiāli izdevīgāks risinājums nekā stikla vai plastikāta konstrukcijas.</li>" +
      "</ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/M-24.jpg?updatedAt=1756983448672',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/myagkie-okna-iz-pvh-dlya-besedok-i-terras-preimushchestva-i-nedostatki-1.jpg?updatedAt=1756983448661',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/IMG_20191025_160204-scaled-e1682802284679.jpg?updatedAt=1756983448652',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/M-12-1.jpg?updatedAt=1756983448642',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/IMG_20200117_142706-scaled.jpg?updatedAt=1756983448608',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/20171111_130042.jpg?updatedAt=1756983448586'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/M%C4%ABkstie%20logi/myagkie-okna-iz-pvh-dlya-besedok-i-terras-preimushchestva-i-nedostatki-1.jpg?updatedAt=1756983448661',
  },
  'rullo-slegi': {
    title: 'Rullo slēģi',
    description:
      "<p>Ruļļu slēģi ir drošs un funkcionāls risinājums, lai pasargātu jūsu ēku un tās iemītniekus. Tās ir veidotas, lai aizsargātu ne tikai pret ielaušanos, bet arī pret nelabvēlīgiem laikapstākļiem un tiešiem saules stariem. Papildus tam, ruļļu slēģiem ir labas skaņas un siltuma izolācijas īpašības.</p>" +
      "<p class='mt-2'>Mēs piedāvājam dažādus ruļļu slēģu profilus, kas atšķiras pēc to izturības:</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-1'>" +
      "  <li>AR41, AR55, AR555, AG77</li>" +
      "  <li>AER44S (stiprināts)</li>" +
      "  <li>AER55S (stiprināts)</li>" +
      "  <li>Ruļļu restes AEG56, AEG84</li>" +
      "</ul>" +
      "<p class='mt-2'>Žalūziju vadības mehānisms var būt manuāls (ar rokas kurbuli, aizbīdni, lentas vadību vai atslēgu) vai automātisks (ar pārslēdzi, atslēgas slēdzi, pulti vai “Gudrās mājas” pieslēgumu).</p>" +
      "<p class='mt-2'>Lai pielāgotos jūsu ēkas fasādei, ruļļu slēģi ir pieejami plašā krāsu gammā: balts, brūns, pelēks, bēšs, sudraba, antracīts, zelta ozols.</p>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-orange-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z'/><path d='M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.729 6.729 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Īpašības</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Ruļļu slēģi – funkcionāls, ilgmūžīgs un drošs risinājums. Šīs žalūzijas ir izstrādātas, lai pasargātu jūsu māju un nodrošinātu maksimālu komfortu.</p>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto mt-2'>" +
      "        <li><strong>Daudzpusīga montāža.</strong> Ruļļu slēģus var uzstādīt logu, durvju vai garāžu ailēs. Tās var montēt arī tieši pie loga rāmja vai sienas.</li>" +
      "        <li><strong>Siltuma un skaņas izolācija.</strong> Šīs žalūzijas lieliski pilda siltumizolācijas un skaņas izolācijas funkcijas, palīdzot uzturēt telpā komfortablu temperatūru un mazinot āra trokšņus.</li>" +
      "        <li><strong>Plaša krāsu izvēle.</strong> Lai pielāgotos jūsu ēkas fasādei, ir pieejama plaša krāsu gamma.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-orange-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Mērījums</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-orange-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<p>Ruļļu slēģi – funkcionāls, ilgmūžīgs un drošs risinājums. Šīs žalūzijas ir izstrādātas, lai pasargātu jūsu māju un nodrošinātu maksimālu komfortu.</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2 mt-2'>" +
      "<li><strong>Daudzpusīga montāža.</strong> Ruļļu slēģus var uzstādīt logu, durvju vai garāžu ailēs. Tās var montēt arī tieši pie loga rāmja vai sienas.</li>" +
      "<li><strong>Siltuma un skaņas izolācija.</strong> Šīs žalūzijas lieliski pilda siltumizolācijas un skaņas izolācijas funkcijas, palīdzot uzturēt telpā komfortablu temperatūru un mazinot āra trokšņus.</li>" +
      "<li><strong>Plaša krāsu izvēle.</strong> Lai pielāgotos jūsu ēkas fasādei, ir pieejama plaša krāsu gamma.</li>" +
      "</ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_shutters.jpg?updatedAt=1756983800823',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_whatsapp_image_2020_11_19_at_14.53.27_1_.jpeg?updatedAt=1756983800898',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_dgzi2456.jpg?updatedAt=1756983801041',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_25_.jpg?updatedAt=1756983801073',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_26_.jpg?updatedAt=1756983801104',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_30_.jpg?updatedAt=1756983801130',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_whatsapp_image_2020_11_19_at_14.53.26.jpeg?updatedAt=1756983801133'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Rullo/b_ZF_shutters.jpg?updatedAt=1756983800823',
  },
  moskitu: {
    title: 'Moskītu tīkls',
    description:
      "<div class='space-y-6'>" +
      "  <p>Moskītu tīkli ir vienkāršs un efektīvs risinājums, kas pasargā jūsu mājokli un ģimeni no kukaiņiem, putekļiem un lapām, kā arī palīdz izvairīties no situācijām, kad caur atvērtu logu var izkrist priekšmeti vai mājdzīvnieki. Tie ir ērti lietošanā un estētiski pielāgojami jebkurai ēkai.</p>" +
      "  <div>" +
      "    <h3 class='text-lg font-semibold mb-2'>Piedāvājam dažādus moskītu tīklu veidus:</h3>" +
      "    <ul class='list-disc list-inside text-gray-700 space-y-1'>" +
      "      <li>Klasiskie logu tīkli</li>" +
      "      <li>Moskītu durvis (vienvērtnes vai divvērtnes)</li>" +
      "      <li>Bīdāmās moskītu sistēmas</li>" +
      "      <li>Plisētie tīkli (durvīm)</li>" +
      "      <li>Rullo moskītu tīkli</li>" +
      "    </ul>" +
      "  </div>" +
      "  <div class='mt-6'>" +
      "    <a href='https://ik.imagekit.io/vbvwdejj5/Profila%20to%C5%86i.pdf?updatedAt=1756987099323' target='_blank' rel='noopener noreferrer' class='block group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition text-center'>" +
      "      <h3 class='text-base font-semibold mb-3 text-gray-800'>Profila toņi</h3>" +
      "      <span class='inline-block px-4 py-2 rounded-md bg-blue-600 text-white group-hover:bg-blue-700 transition underline'>Atvērt</span>" +
      "    </a>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8'>" +
      "    <h2 class='text-2xl font-semibold mb-6 text-center'>Uzstādīšanas instrukcijas</h2>" +
      "    <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>" +
      "      <a href='/pdf/zaluzijas/moskitu/merijumi-moskitu-tikli.pdf' target='_blank' rel='noopener noreferrer' class='block group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition'>" +
      "        <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition' aria-hidden='true'>" +
      "          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' class='w-8 h-8'><path d='M12.75 3v12.19l3.22-3.22a.75.75 0 0 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 1.5 0Z'/><path d='M3 19.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V12a.75.75 0 0 0-1.5 0v7.5H4.5V12a.75.75 0 0 0-1.5 0v7.5Z'/></svg>" +
      "        </div>" +
      "        <h3 class='text-lg font-semibold mb-2 text-center'>Mērījumi moskītu tīkliem</h3>" +
      "        <p class='text-gray-700 text-center'>PDF rokasgrāmata mērījumu veikšanai pirms pasūtīšanas.</p>" +
      "      </a>" +
      "      <a href='/pdf/zaluzijas/moskitu/uzstadisana-klasiskajiem-tikliem.pdf' target='_blank' rel='noopener noreferrer' class='block group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition'>" +
      "        <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition' aria-hidden='true'>" +
      "          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' class='w-8 h-8'><path d='M4.5 4.5h15v2.25h-15V4.5Zm0 4.5h15v2.25h-15V9Zm0 4.5h15v2.25h-15V13.5Z'/></svg>" +
      "        </div>" +
      "        <h3 class='text-lg font-semibold mb-2 text-center'>Uzstādīšana klasiskajiem tīkliem</h3>" +
      "        <p class='text-gray-700 text-center'>PDF instrukcija logu rāmja tīklu uzstādīšanai.</p>" +
      "      </a>" +
      "      <a href='/pdf/zaluzijas/moskitu/uzstadisana-pliseta-durvju-tikliem.pdf' target='_blank' rel='noopener noreferrer' class='block group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition'>" +
      "        <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition' aria-hidden='true'>" +
      "          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' class='w-8 h-8'><path d='M6 3.75A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6Z'/></svg>" +
      "        </div>" +
      "        <h3 class='text-lg font-semibold mb-2 text-center'>Uzstādīšana plisētiem durvju tīkliem</h3>" +
      "        <p class='text-gray-700 text-center'>PDF instrukcija plisēto durvju sistēmām.</p>" +
      "      </a>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      "<div class='mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen'>" +
      "  <div class='max-w-[76.8rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z'/><path d='M13.06 15.473a48.45 48.45 0  0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0  0 1-.46.711 47.87 47.87 0  0 0-8.105 4.342.75.75 0  0 1-.832 0 47.87 47.87 0  0 0-8.104-4.342.75.75 0  0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0  0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.729 6.729 0  0 0 .551-1.607 1.5 1.5 0  0 0 .14-2.67v-.645a48.549 48.549 0  0 1 3.44 1.667 2.25 2.25 0  0 0 2.12 0Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-3'>Īpašības</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-2 text-left max-w-xl mx-auto'>" +
      "        <li><strong>Daudzpusīga montāža.</strong> Tīklus var stiprināt jebkurā loga vai durvju ailē, kā arī pie loga rāmja.</li>" +
      "        <li><strong>Vienkārša lietošana.</strong> Viegli uzstādāmi un noņemami, lietojami tieši tad, kad tas ir nepieciešams.</li>" +
      "        <li><strong>Minimāli ierobežo redzamību.</strong> Tīkls ir veidots tā, lai netraucētu skatu un gaismas plūsmu.</li>" +
      "        <li><strong>Estētiska pielāgojamība.</strong> Plaša profilu krāsu izvēle – pielāgojama jebkurai fasādei un rāmju krāsai.</li>" +
      "      </ul>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 13.5A2.25 2.25 0  0 1 4.5 11.25h15a2.25 2.25 0 0 1 0 4.5h-15A2.25 2.25 0 0 1 2.25 13.5Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Mērījums</h3>" +
      "      <p class='text-gray-700 text-left max-w-xl mx-auto'>Mūsu meistars ar toņu katalogiem var veikt izbraukumu pie Jums, zvaniet 2000000 un vienosimies par izbraukuma laiku.</p>" +
      "    </div>" +
      "    <div class='group text-center p-6 rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-200'>" +
      "      <div class='mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition group-hover:scale-105' aria-hidden='true'>" +
      "        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-8 h-8'><path d='M2.25 6.75A2.25 2.25 0  0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Z'/></svg>" +
      "      </div>" +
      "      <h3 class='text-lg font-semibold mb-2'>Apmaksas veidi</h3>" +
      "      <ul class='list-disc list-inside text-gray-700 space-y-1 text-left max-w-xl mx-auto'>" +
      "        <li>Avansa maksājums</li>" +
      "        <li>Pēcapmaksa skaidrā naudā</li>" +
      "        <li>Pēcapmaksa ar bankas pārskaitījumu</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>",
    features:
      "<p>Moskītu tīkli ir vienkāršs un efektīvs risinājums, kas pasargā jūsu mājokli un ģimeni no kukaiņiem, putekļiem un lapām, kā arī palīdz izvairīties no situācijām, kad caur atvērtu logu var izkrist priekšmeti vai mājdzīvnieki. Tie ir ērti lietošanā un estētiski pielāgojami jebkurai ēkai.</p>" +
      "<ul class='list-disc list-inside text-gray-700 space-y-2 mt-2'>" +
      "<li><strong>Daudzpusīga montāža.</strong> Tīklus var stiprināt jebkurā loga vai durvju ailē, kā arī pie loga rāmja.</li>" +
      "<li><strong>Vienkārša lietošana.</strong> Viegli uzstādāmi un noņemami, lietojami tieši tad, kad tas ir nepieciešams.</li>" +
      "<li><strong>Minimāli ierobežo redzamību.</strong> Tīkls ir veidots tā, lai netraucētu skatu un gaismas plūsmu.</li>" +
      "<li><strong>Estētiska pielāgojamība.</strong> Plaša profilu krāsu izvēle – pielāgojama jebkurai fasādei un rāmju krāsai.</li>" +
      "</ul>",
    images: [
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_0_moskitiera_okienna_stiff_3%20(1).jpg?updatedAt=1756984222921',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_moskitu_ruu.png?updatedAt=1756984222902',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_22_%20(1).jpg?updatedAt=1756984222727',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_0_moskitu_ramis.png?updatedAt=1756984223018',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_ardenatinklelis06.jpg?updatedAt=1756984223042',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_0_ardenatinklelis04.jpg?updatedAt=1756984223086',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_moskitu_durvis.png?updatedAt=1756984223093',
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_moskitu_plise3.png?updatedAt=1756984223258'
    ],
    thumbnail:
      'https://ik.imagekit.io/vbvwdejj5/Visas%20%C5%BEal%C5%ABziju%20bildes/Mosk%C4%ABtu%20t%C4%ABkli/b_ZF_0_moskitiera_okienna_stiff_3%20(1).jpg?updatedAt=1756984222921',
  },
}

export function getProduct(id: string): Product {
  const base = productsBase[id]
  const title = catalogItems.find((c) => c.id === id)?.title || id
  if (!base) {
    return {
      id,
      title,
      description: genericDesc(title),
      features: genericFeatures,
      images: Array.from({ length: 8 }).map((_, i) => `https://source.unsplash.com/800x600/?blinds,${id}&sig=${i}`),
      thumbnail: placeholderThumb,
    }
  }
  return { id, ...base }
}

export function getAllIds(): string[] {
  return catalogItems.map((c) => c.id)
}
