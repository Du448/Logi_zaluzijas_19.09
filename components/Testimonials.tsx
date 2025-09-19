export default function Testimonials(){
  const items = [
    { q: 'Piegāde un uzstādīšana notika ātri un kvalitatīvi. Esam ļoti apmierināti ar jaunajiem logiem!', a: 'Anna K.' },
    { q: 'Pasūtījām diena/nakts žalūzijas, kvalitāte lieliska un cena pieņemama. Rekomendēju!', a: 'Jānis P.' },
    { q: 'Ļoti profesionāla komanda, kas ieteica labāko risinājumu mūsu dzīvokļa logiem.', a: 'Līga S.' },
  ]
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t,i)=> (
        <figure key={i} className="card p-6">
          <blockquote className="text-gray-700 mb-3">“{t.q}”</blockquote>
          <figcaption className="text-sm text-gray-500">— {t.a}</figcaption>
        </figure>
      ))}
    </div>
  )
}
