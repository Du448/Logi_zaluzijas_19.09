export type Spec = { label: string; value: string }
export type SeriesItem = {
  slug: string
  title: string
  image: string
  beforeImage?: string
  afterImage?: string
  category: string
  year?: number
  excerpt?: string
  description?: string
  specs?: Spec[]
  gallery?: string[]
  ctaText?: string
  tags?: string[]
}

const placeholderSpecs: Spec[] = [
  { label: 'Profils', value: '6 kameru PVC profils' },
  { label: 'Stiklojums', value: 'Div- vai trīskāršais stiklojums' },
  { label: 'Siltumcaurlaidība', value: 'Līdz 0.9 W/m²K' },
]

const placeholderGallery = (seed: string) => [
  `https://picsum.photos/seed/${seed}a/800/600`,
  `https://picsum.photos/seed/${seed}b/800/600`,
  `https://picsum.photos/seed/${seed}c/800/600`,
]

export const series: SeriesItem[] = [
  { slug: 'pvc-logi-cehu-projekts', title: 'PVC logi Čehu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/%C4%8Cehu.png?updatedAt=1757947629059', category: 'Dzīvokļi', year: 2024, description: 'Energoefektīvi plastikāta logi Čehu projekta mājām ar optimālu siltumizolāciju un uzticamu furnitūru. Piemēroti renovācijai un jaunbūvēm.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/%C4%8Cehu(1).png?updatedAt=1757947628478',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/%C4%8Cehu(2).png?updatedAt=1757947628738',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/%C4%8Cehu(3).png?updatedAt=1757947628811',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','Čehu projekts'] },
  { slug: 'pvc-logi-103-serija', title: 'PVC Logi 103. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/103.png?updatedAt=1757947618324', category: 'Dzīvokļi', year: 2023, description: 'Ražojam daudzkameru PVC logus 103. sērijas dzīvokļiem, kas nodrošina drošu siltuma un skaņas izolāciju. Garantējam augstu kvalitāti, profesionālu montāžu un pieejamas cenas.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/103(1).png?updatedAt=1757947618117',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/103(2).png?updatedAt=1757947618580',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/103(3).png?updatedAt=1757947618099',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','103. sērija'] },
  { slug: 'pvc-logi-104-serija', title: 'PVC Logi 104. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/104.png?updatedAt=1757947618210', category: 'Dzīvokļi', year: 2023, description: 'Ražojam energoefektīvus PVC logus 104. sērijas, kas piemēroti jebkuram dzīvoklim. Mēs garantējam augstu kvalitāti un uzticamību mūsu produkcijas, kā arī profesionālu uzstādīšanu un ilgu garantiju.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/104(1).png?updatedAt=1757947618201',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/104%20-2.png?updatedAt=1757954250350',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/104(3).png?updatedAt=1757947618026',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','104. sērija'] },
  { slug: 'pvc-logi-119-serija', title: 'PVC Logi 119. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/No%20Google%20maps/Screenshot_408.png?updatedAt=1757930979050', category: 'Dzīvokļi', year: 2024, description: 'Mūsu PVC logi 119. sērija ir ideāli piemēroti jūsu dzīvoklim. Pateicoties daudzkameru profilam un energoefektīviem stikla paketēm, mūsu plastikāta logi nodrošinās drošu siltuma un skaņas izolāciju, būtiski uzlabojot komfortu Jūsu istabā.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/119-1.png?updatedAt=1757950713630',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/119-2.png?updatedAt=1757950769701',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/119%20-3.png?updatedAt=1757950810918',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','119. sērija'] },
  { slug: 'pvc-logi-467-serija', title: 'PVC Logi 467. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/467-1.png?updatedAt=1757952717491', category: 'Dzīvokļi', year: 2024, description: 'Pateicoties modernajām ražošanas tehnoloģijām, mūsu plastikāta logi 467 sērijas dzīvokļiem ir aprīkoti ar izcilām siltuma un skaņas izolācijas īpašībām. Piedāvājam plašu krāsu izvēli, lai mūsu klients varētu iegādāties sev piemērotus PVC logus.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/467.png?updatedAt=1757947622018',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/467-2.png?updatedAt=1757952737716',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/467-3.png?updatedAt=1757952768925',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','467. sērija'] },
  { slug: 'pvc-logi-602-serija', title: 'PVC Logi 602. sērija', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/602.png?updatedAt=1757947621838', category: 'Dzīvokļi', year: 2022, description: 'Mūsu plastikāta logi 602 sērija dzīvokļiem ir ideāls risinājums tiem, kuri vēlas nodrošināt savu māju ar maksimālu komfortu. PVC logi tiek izgatavoti no augstas kvalitātes materiāliem, kas nodrošina izcilas siltumizolācijas un skaņasizolācijas īpašības.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/602(1).png?updatedAt=1757947621708',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/602(2).png?updatedAt=1757947621768',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/602(3).png?updatedAt=1757947621676',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','602. sērija'] },
  { slug: 'pvc-logi-jaunais-lietuviesu-projekts', title: 'PVC logi Jaunais Lietuviešu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20J.-1.png?updatedAt=1757953253188', category: 'Dzīvokļi', year: 2024, description: 'Mūsu uzņēmums ražo energoefektīvus plastikāta logus Lietuviešu Projekta jaunajām mājām. Pasūtot jaunus PVC logus pie mūms, jūs saņemsiet ideālu kombināciju starp uzticamību un komfortu, kas nodrošinās jums siltumu, klusumu un enerģijas ietaupījumu.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20J.-2.png?updatedAt=1757953272521',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20J.-3.png?updatedAt=1757953293318',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20J.-4.png?updatedAt=1757953310901',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','Jaunais Lietuviešu projekts'] },
  { slug: 'pvc-logi-vecais-lietuviesu-projekts', title: 'PVC logi Vecais Lietuviešu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20V..png?updatedAt=1757947625754', category: 'Dzīvokļi', year: 2022, description: 'Mūsu energoefektīvie plastikāta logi ir ideāli piemēroti vecajām Lietuviešu projektu mājām. Logi ir izgatavoti no daudzkameru vācu profiliem, kas uzlabo komfortu un palīdz samazināt enerģijas patēriņu.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20V.(2).png?updatedAt=1757947625841',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20V.(3).png?updatedAt=1757947625944',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Lietuv.%20V.(4).png?updatedAt=1757947625591',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','Vecais Lietuviešu projekts'] },
  { slug: 'pvc-logi-mazgimenu-projekts', title: 'PVC logi Mazģimeņu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/M.dzim..png?updatedAt=1757947628270', category: 'Dzīvokļi', year: 2023, description: 'Mazģimeņu projekts.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/M.dzim.(1).png?updatedAt=1757947626073',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/M.dzim.(2).png?updatedAt=1757947627382',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/M.dzim.(3).png?updatedAt=1757947627415',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','Mazģimeņu projekts'] },
  { slug: 'pvc-logi-hruscova-kiegelu-projekts', title: 'PVC logi Hruščova ķieģeļu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20%C4%B7.png?updatedAt=1757953720349', category: 'Dzīvokļi', year: 2023, description: 'Uzņēmums "Logi Jums" ražo un uzstāda plastikāta logus Hruščova Projekta ķieģeļu mājām. Mēs piedāvājam plašu logu klāstu, kas ir piemēroti jebkuriem ekspluatācijas apstākļiem un nodrošinās Jums siltumu un klusumu.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20%C4%B7(1).png?updatedAt=1757953720031',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20%C4%B7-2.png?updatedAt=1757953719841',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20%C4%B7-3.png?updatedAt=1757953720358',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','Hruščova ķieģeļu projekts'] },
  { slug: 'pvc-logi-hruscova-panelu-projekts', title: 'PVC logi Hruščova paneļu projekts', image: 'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20p-3.png?updatedAt=1757953720159', category: 'Dzīvokļi', year: 2024, description: 'Uzņēmums "Logi Jums" ražo un uzstāda plastmasas logus Hruščova Projekta paneļu mājām. Mūsu logiem ir daudzkameru profils un energotaupīgie stikla paketes, kas var būtiski samazināt apkures izmaksas un uzlabot komfortu Jūsu dzīvoklī.', specs: placeholderSpecs, gallery: [
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20p-0.png?updatedAt=1757953720172',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20p-2.png?updatedAt=1757953720351',
    'https://ik.imagekit.io/vbvwdejj5/M%C4%81ju%20projektu%20bildes/Dz%C4%ABvok%C4%BCu%20s%C4%93rijas%20BIldes%2015.09.25/Hru%C5%A1.%20p-1.png?updatedAt=1757953720645',
  ], ctaText: 'Pieteikt konsultāciju', tags: ['PVC logi','Projekts','Dzīvokļi','Hruščova paneļu projekts'] },
]
