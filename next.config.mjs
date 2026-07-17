/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Custom ImageKit loader: next/image ģenerē tr= transformācijas URL tieši,
    // attēli tiek servēti no ImageKit CDN (bez Next/Vercel optimizer proxy).
    // ImageKit nodrošina izmēru un WebP/AVIF (f-auto). Skat. lib/imagekit-loader.js.
    loader: 'custom',
    loaderFile: './lib/imagekit-loader.js',
  },
  async redirects() {
    return [
      // Vecais blogs pārcelts uz /blogs-2 (SEO: 308 permanent)
      { source: '/blogs', destination: '/blogs-2', permanent: true },
      { source: '/blogs/:id', destination: '/blogs-2/:id', permanent: true },
      // Angliskais dublikāts → latviskā lapa
      { source: '/aluplast-benefits', destination: '/aluplast-priekšrocības', permanent: true },
      // Konfigurators pagaidām atspējots (lapa bija tikai klienta redirects uz /)
      { source: '/konfigurators', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
