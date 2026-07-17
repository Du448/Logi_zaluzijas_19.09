// Schema.org strukturēto datu (JSON-LD) builderi.
// Lieto kopā ar components/JsonLd.tsx - katra lapa emitē tikai sev
// atbilstošās shēmas; LocalBusiness + WebSite ir globāli (layout).

export const BASE_URL = 'https://vestalux.lv'
export const ORG_ID = `${BASE_URL}/#organization`

export const BUSINESS = {
  name: 'VestaLUX',
  legalName: 'SIA “ADEstate”',
  telephone: '+37120886650',
  email: 'info@vestalux.lv',
  vatID: '42103086575',
  address: {
    streetAddress: 'Ozolciema iela 8',
    addressLocality: 'Rīga',
    postalCode: 'LV-1058',
    addressCountry: 'LV',
  },
  image: 'https://ik.imagekit.io/vbvwdejj5/22380411.jpg?updatedAt=1758275325013',
  logo: 'https://ik.imagekit.io/vbvwdejj5/Untitled%20Design%20-%201%20-%20Edited%20-%20Edited.png?updatedAt=1758095814942',
  facebook: 'https://www.facebook.com/profile.php?id=61581610862103',
} as const

/** LocalBusiness (HomeAndConstructionBusiness) - globāla, layout līmenī */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BASE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    description:
      'PVC logi, žalūzijas un piederumi ar garantētu kvalitāti un profesionālu uzstādīšanu visā Latvijā.',
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS.address,
    },
    vatID: BUSINESS.vatID,
    priceRange: '€€',
    areaServed: {
      '@type': 'Country',
      name: 'Latvija',
    },
    sameAs: [BUSINESS.facebook],
  }
}

/** WebSite ar SearchAction - globāla, layout līmenī */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    inLanguage: 'lv',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/meklesana?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/** Product + Offer - produktu lapām */
export function productSchema(p: {
  slug: string
  name: string
  description: string
  price: number
  image: string
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${BASE_URL}/produkts/${p.slug}#product`,
    name: p.name,
    description: p.description,
    image: p.image,
    ...(p.category ? { category: p.category } : {}),
    brand: { '@type': 'Brand', name: BUSINESS.name },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/produkts/${p.slug}`,
      price: p.price.toFixed(2),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@id': ORG_ID },
    },
  }
}

/** BreadcrumbList - detaļu lapām */
export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}

/** FAQPage - FAQ blokiem (tikai teksta atbildes) */
export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

/** BlogPosting - blogu rakstiem */
export function blogPostingSchema(post: {
  id: number
  title: string
  description: string
  image: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blogs-2/${post.id}#article`,
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    inLanguage: 'lv',
    mainEntityOfPage: `${BASE_URL}/blogs-2/${post.id}`,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  }
}
