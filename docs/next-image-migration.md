# Next.js Image Migration Notes

## Converted components
- `app/blogs-2/page.tsx`
- `components/Hero.tsx`
- `components/HomeLanding.tsx`
- `components/ModernHomepage.tsx`
- `components/PowerPointHomepage.tsx`
- `components/ShowcaseCarousel.tsx`
- `app/page.tsx`

All of the above now render hero and card imagery with `next/image`, using responsive `sizes` and `fill` to preserve layout while benefiting from Next.js image optimisations.

## Remaining `<img>` usages
- `components/PakalpojumiSlider.tsx`
- `components/PiederumiLanding.tsx`
- `components/MontazasLanding.tsx`
- Gallery/lightbox utilities: `components/LightboxGallery.tsx`, `components/ImagesGridWithLightbox.tsx`, `components/OverlayLightboxGrid.tsx`, `components/ZoomImage.tsx`
- Miscellaneous specialised UI: `components/PowerPointHomepage.tsx` (logo), sliders and calculators under `components/zaluzijas/`

The slider, parallax and ScrollReveal modules rely on native `<img>` nodes so that marquee widths, swipe gestures or lightbox behaviour remain glitch-free. Each file contains an inline lint suppression explaining the constraint.

## Action items
- Revisit the remaining components if the underlying animation logic is refactored to work with `next/image`.
- Monitor new components for `<img>` reintroductions; prefer `next/image` unless the above limitations apply.
