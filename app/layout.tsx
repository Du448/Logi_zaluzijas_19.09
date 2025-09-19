import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreFooterSwitcher from '@/components/PreFooterSwitcher'
import { CartProvider } from '@/lib/cart-context'
import ScrollReveal from '@/components/ScrollReveal'

const roboto = Roboto({ subsets: ['latin'], weight: ['300','400','500','700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'PVC logi, žalūzijas un piederumi | Augstas kvalitātes risinājumi jūsu mājoklim',
  description: 'PVC logi, žalūzijas un piederumi ar garantētu kvalitāti un ātru piegādi. Plaša izvēle, profesionāla uzstādīšana un draudzīgas cenas. Pasūti tiešsaistē jau šodien!',
  keywords: ['PVC logi','logu uzstādīšana','žalūzijas','logu piederumi','plastikāta logi','diena/nakts žalūzijas','moskītu tīkli','palodzes','logu rokturi'],
  openGraph: {
    title: 'PVC logi, žalūzijas un piederumi',
    description: 'Augstas kvalitātes risinājumi jūsu mājoklim',
    type: 'website',
    url: 'https://example.com'
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
      <body className={roboto.className}>
        <CartProvider>
          <ScrollReveal />
          <Header />
          <main className="pt-20 md:pt-24">{children}</main>
          <PreFooterSwitcher />
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
