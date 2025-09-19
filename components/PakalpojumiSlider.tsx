'use client'

export default function PakalpojumiSlider() {
  const images = [
    'https://ik.imagekit.io/vbvwdejj5/PAKALPOJUMU%20LAPA/Gluing_of_extended_protruding_window_profile.jpeg?updatedAt=1757082006698',
    'https://ik.imagekit.io/vbvwdejj5/PAKALPOJUMU%20LAPA/DSC01653.webp?updatedAt=1757082006429',
    'https://ik.imagekit.io/vbvwdejj5/PAKALPOJUMU%20LAPA/gettyimages-2151431191-640x640.jpg?updatedAt=1757082006247',
    'https://ik.imagekit.io/vbvwdejj5/PAKALPOJUMU%20LAPA/window%20foaming.jpg?updatedAt=1757082006189',
    'https://ik.imagekit.io/vbvwdejj5/PAKALPOJUMU%20LAPA/E109IAA0.avif?updatedAt=1757082006275',
    'https://ik.imagekit.io/vbvwdejj5/PAKALPOJUMU%20LAPA/istockphoto-1249524434-640x640.jpg?updatedAt=1757082006116',
  ]

  const loop = [...images, ...images]

  return (
    <div className="slider relative overflow-hidden">

      <div className="track flex items-center gap-0 will-change-transform">
        {loop.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`pakalpojumi-slide-${i}`}
            src={src}
            alt="Pakalpojumu foto"
            className="h-56 md:h-72 lg:h-80 w-auto object-cover select-none"
            loading="lazy"
          />
        ))}
      </div>

      <style jsx>{`
        .track {
          padding: 0px;
          animation: slide 30s linear infinite;
          width: max-content;
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
