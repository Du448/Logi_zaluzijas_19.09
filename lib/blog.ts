// Blogu rakstu metadati - vienots avots saraksta lapai, rakstu lapām,
// sitemap.xml un BlogPosting strukturētajiem datiem.
// Rakstu pilnais saturs (JSX) paliek app/blogs-2/[id]/page.tsx.

export type BlogPost = {
  id: number
  title: string
  description: string
  image: string
  /** ISO datums (YYYY-MM-DD) - izmanto sitemap un BlogPosting shēmā */
  datePublished: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Logu Svīšana: No Rasas Lāses līdz Skaidram Skatam!',
    description:
      'Kāpēc uz logiem veidojas kondensāts un kā no tā atbrīvoties: vēdināšana, temperatūras kontrole, mitruma samazināšana un blīvējumu pārbaude.',
    image:
      'https://ik.imagekit.io/vbvwdejj5/Screenshot_405%20-%20Edited%20-%20Edited.png?updatedAt=1757921842802',
    datePublished: '2025-09-15',
  },
  {
    id: 2,
    title: 'Kas ir PVC Logi? Iepazīsti Sava Mājokļa Jauno Supervaroni! 🦸‍♂️',
    description:
      'PVC logu galvenās priekšrocības: energoefektivitāte, skaņas izolācija, ilgmūžība, viegla kopšana un drošība - kāpēc tā ir gudra izvēle.',
    image:
      'https://ik.imagekit.io/vbvwdejj5/m0kdmem0kdmem0kd.png?updatedAt=1758008525539',
    datePublished: '2025-09-16',
  },
  {
    id: 3,
    title: 'Trīskāršs Spēks: Kāpēc 3 Stikli ir Labāk par 2? Jūsu Mājokļa Jaunais Līmenis!',
    description:
      'Trīskāršo stikla pakešu priekšrocības: maksimāla energoefektivitāte, klusums un drošība. Kad ir vērts maksāt vairāk un ko nozīmē U-vērtība.',
    image: 'https://ik.imagekit.io/vbvwdejj5/ezcepfe.png?updatedAt=1758360974880',
    datePublished: '2025-09-20',
  },
  {
    id: 4,
    title: 'Stop Vējam! Jūsu PVC Logu Ātrā Palīdzība',
    description:
      'Ja pa logu velk vējš: kā pārbaudīt blīvējuma gumijas, noregulēt furnitūru un atrast montāžas šuvju spraugas - soli pa solim.',
    image:
      'https://ik.imagekit.io/vbvwdejj5/powerful-window?updatedAt=1757920295539',
    datePublished: '2025-09-15',
  },
  {
    id: 5,
    title: 'Logu Kastings: Atrodi Ideālo Zvaigzni Savam Dzīvoklim! 🏡✨',
    description:
      'PVC, koka vai alumīnija logi? Kā izvēlēties logu materiālu, stikla paketi un papildu funkcijas atbilstoši savam mājoklim un budžetam.',
    image:
      'https://ik.imagekit.io/vbvwdejj5/50dnd350dnd350dn.png?updatedAt=1758042980509',
    datePublished: '2025-09-16',
  },
  {
    id: 6,
    title: 'Cīņa par Jūsu Logu: Parastais Moskītu Tīkls pret Supervaroni "Antikaķis"! 🥊',
    description:
      'Parastais moskītu tīkls pret pastiprināto "Antikaķis" tīklu: izturība, drošība mājdzīvniekiem, gaisa caurlaidība, ilgmūžība un cena.',
    image: 'https://ik.imagekit.io/vbvwdejj5/5bowzf5bow.png?updatedAt=1758360975048',
    datePublished: '2025-09-20',
  },
  {
    id: 7,
    title: 'Logu Garderobe: Atrodi Savu Ideālo Žalūziju Stilu 2025! 🎨',
    description:
      'Žalūziju veidi un tendences: horizontālās, vertikālās, rullo un plisē žalūzijas, materiālu izvēle un motorizētā vadība.',
    image: 'https://ik.imagekit.io/vbvwdejj5/ggbp84ggb.png?updatedAt=1758360974911',
    datePublished: '2025-09-20',
  },
  {
    id: 8,
    title: 'Jūsu 119. sērijas Lodžija: Pārvērtību Ceļvedis un Cenas 2025. Gadā! 🏡',
    description:
      '119. sērijas lodžijas iestiklošana: aukstais alumīnija iestiklojums pret silto PVC iestiklojumu - ieguvumi, mīnusi un kuru izvēlēties.',
    image:
      'https://ik.imagekit.io/vbvwdejj5/Lod%C5%BEijas%20bildes%20-%20Clean/Lod%C5%BEija-3.png?updatedAt=1758121346809',
    datePublished: '2025-09-17',
  },
  {
    id: 9,
    title: 'Stikla Paketes Noslēpumi: Atkodē Savu Logu un Iegūsti Super-Komfortu! 🕵️‍♂️',
    description:
      'Kā "izlasīt" stikla paketi: kameru skaits, stikla biezums, argona pildījums, selektīvais stikls un Uw koeficients vienkāršā valodā.',
    image: 'https://ik.imagekit.io/vbvwdejj5/pno4l3pno4l3.png?updatedAt=1758360974877',
    datePublished: '2025-09-20',
  },
]

export function getBlogPost(id: number): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id)
}
