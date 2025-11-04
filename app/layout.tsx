import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreFooterSwitcher from '@/components/PreFooterSwitcher'
import { CartProvider } from '@/lib/cart-context'
import ScrollReveal from '@/components/ScrollReveal'
import CookieConsent from '@/components/CookieConsent'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'

const roboto = Roboto({ subsets: ['latin'], weight: ['300','400','500','700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vestalux.lv'),
  title: 'PVC logi, žalūzijas un piederumi | Augstas kvalitātes risinājumi jūsu mājoklim',
  description: 'PVC logi, žalūzijas un piederumi ar garantētu kvalitāti un ātru piegādi. Plaša izvēle, profesionāla uzstādīšana un draudzīgas cenas. Pasūti tiešsaistē jau šodien!',
  keywords: ['PVC logi','logu uzstādīšana','žalūzijas','logu piederumi','plastikāta logi','diena/nakts žalūzijas','moskītu tīkli','palodzes','logu rokturi'],
  openGraph: {
    title: 'PVC logi, žalūzijas un piederumi',
    description: 'Augstas kvalitātes risinājumi jūsu mājoklim',
    type: 'website',
    url: 'https://vestalux.lv',
    images: [
      {
        url: 'https://ik.imagekit.io/vbvwdejj5/22380411.jpg?updatedAt=1758275325013',
        width: 1200,
        height: 630,
        alt: 'Vestalux — PVC logi, žalūzijas un piederumi'
      }
    ]
  },
  alternates: {
    canonical: 'https://vestalux.lv'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PVC logi, žalūzijas un piederumi — Vestalux',
    description: 'Augstas kvalitātes risinājumi jūsu mājoklim',
    images: ['https://ik.imagekit.io/vbvwdejj5/22380411.jpg?updatedAt=1758275325013']
  },
  icons: {
    icon: 'https://ik.imagekit.io/vbvwdejj5/Untitled%20Design%20-%201%20-%20Edited%20-%20Edited.png?updatedAt=1758095814942',
    shortcut: 'https://ik.imagekit.io/vbvwdejj5/Untitled%20Design%20-%201%20-%20Edited%20-%20Edited.png?updatedAt=1758095814942',
    apple: 'https://ik.imagekit.io/vbvwdejj5/Untitled%20Design%20-%201%20-%20Edited%20-%20Edited.png?updatedAt=1758095814942'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E031E12KXG"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E031E12KXG');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '801446252275768');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={roboto.className}>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            className="hidden"
            src="https://www.facebook.com/tr?id=801446252275768&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        <CartProvider>
          <ScrollReveal />
          <Header />
          <main className="pt-20 md:pt-24">{children}</main>
          <PreFooterSwitcher />
          <Footer />
          <CookieConsent />
          <ScrollToTopButton />
        </CartProvider>
      </body>
    </html>
  )
}
