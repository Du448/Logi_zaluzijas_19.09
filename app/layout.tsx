import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreFooterSwitcher from '@/components/PreFooterSwitcher'
import { CartProvider } from '@/lib/cart-context'
import ScrollReveal from '@/components/ScrollReveal'
import CookieConsent from '@/components/CookieConsent'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import AnalyticsScripts from '@/components/AnalyticsScripts'
import StructuredData from '@/components/StructuredData'
import PromoTicker from '@/components/PromoTicker'

const roboto = Roboto({ subsets: ['latin'], weight: ['300','400','500','700'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://vestalux.lv'),
  title: {
    default: 'PVC logi, žalūzijas un piederumi | Vestalux',
    template: '%s | Vestalux',
  },
  description: 'PVC logi, žalūzijas un piederumi ar garantētu kvalitāti un ātru piegādi. Plaša izvēle, profesionāla uzstādīšana un draudzīgas cenas. Pasūti tiešsaistē jau šodien!',
  keywords: ['PVC logi','logu uzstādīšana','žalūzijas','logu piederumi','plastikāta logi','diena/nakts žalūzijas','moskītu tīkli','palodzes','logu rokturi'],
  openGraph: {
    title: 'PVC logi, žalūzijas un piederumi',
    description: 'Augstas kvalitātes risinājumi jūsu mājoklim',
    type: 'website',
    url: 'https://vestalux.lv',
    siteName: 'Vestalux',
    locale: 'lv_LV',
    images: [
      {
        url: 'https://ik.imagekit.io/vbvwdejj5/22380411.jpg?updatedAt=1758275325013',
        width: 1200,
        height: 630,
        alt: 'Vestalux - PVC logi, žalūzijas un piederumi'
      }
    ]
  },
  // PIEZĪME: canonical šeit apzināti NAV - katrai lapai savs canonical
  // caur lib/seo.ts buildMetadata(). Iepriekš šeit bija hardcoded
  // https://vestalux.lv, kas kanonizēja VISAS lapas uz sākumlapu.
  twitter: {
    card: 'summary_large_image',
    title: 'PVC logi, žalūzijas un piederumi - Vestalux',
    description: 'Augstas kvalitātes risinājumi jūsu mājoklim',
    images: ['https://ik.imagekit.io/vbvwdejj5/22380411.jpg?updatedAt=1758275325013']
  },
  icons: {
    icon: 'https://ik.imagekit.io/vbvwdejj5/download%20(19)%20-%20Edited%20-%20Edited.png?updatedAt=1760521246953',
    shortcut: 'https://ik.imagekit.io/vbvwdejj5/download%20(19)%20-%20Edited%20-%20Edited.png?updatedAt=1760521246953',
    apple: 'https://ik.imagekit.io/vbvwdejj5/download%20(19)%20-%20Edited%20-%20Edited.png?updatedAt=1760521246953'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <head>
        <StructuredData />
      </head>
      <body className={roboto.className}>
        {/* Analītika (GA4 + Meta Pixel) ielādējas tikai pēc sīkdatņu piekrišanas */}
        <AnalyticsScripts />
        <CartProvider>
          <ScrollReveal />
          <PromoTicker />
          <Header />
          <main className="pt-[calc(5rem+var(--ticker-h,0px))] md:pt-[calc(6rem+var(--ticker-h,0px))]">{children}</main>
          <PreFooterSwitcher />
          <Footer />
          <CookieConsent />
          <ScrollToTopButton />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
