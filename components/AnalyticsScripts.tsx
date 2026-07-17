'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// Analītikas skripti (GA4 + Meta Pixel) ielādējas TIKAI pēc lietotāja
// piekrišanas (GDPR). Piekrišanu pārvalda CookieConsent (localStorage), un
// izmaiņas tiek paziņotas caur 'vestalux-consent-changed' notikumu - skripti
// aktivizējas bez lapas pārlādes.

const STORAGE_KEY = 'vestalux-cookie-consent'
const GA_ID = 'G-E031E12KXG'
const META_PIXEL_ID = '801446252275768'

type Consent = { analytics: boolean; marketing: boolean }

function readConsent(): Consent {
  if (typeof window === 'undefined') return { analytics: false, marketing: false }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { analytics: false, marketing: false }
    if (raw === 'accepted') return { analytics: true, marketing: true }
    const parsed = JSON.parse(raw)
    return {
      analytics: Boolean(parsed?.preferences?.analytics),
      marketing: Boolean(parsed?.preferences?.marketing),
    }
  } catch {
    return { analytics: false, marketing: false }
  }
}

export default function AnalyticsScripts() {
  const [consent, setConsent] = useState<Consent>({ analytics: false, marketing: false })

  useEffect(() => {
    setConsent(readConsent())

    const onChange = () => setConsent(readConsent())
    window.addEventListener('vestalux-consent-changed', onChange)
    window.addEventListener('storage', onChange)
    return () => {
      window.removeEventListener('vestalux-consent-changed', onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [])

  return (
    <>
      {consent.analytics ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      ) : null}

      {consent.marketing ? (
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
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  )
}
