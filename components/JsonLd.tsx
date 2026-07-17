// Koplietots JSON-LD renderētājs. Servera komponents - droši lietojams
// jebkurā lapā vai komponentā; strukturētie dati nonāk HTML pirmajā atbildē.

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
