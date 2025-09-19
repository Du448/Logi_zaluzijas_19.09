"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsFooter() {
  return (
    <div className="mt-24 space-y-24">
      <OurProcess />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

function OurProcess() {
  const steps = [
    {
      title: "Konsultācija",
      desc: "Izrunājam vajadzības un mērķus",
      icon: (
        <path d="M8 10h8M8 14h5M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
      ),
    },
    {
      title: "Mērījumi",
      desc: "Precīzi izmēri projekta vietā",
      icon: <path d="M4 7h16M4 12h10M4 17h7" />,
    },
    {
      title: "Ražošana",
      desc: "Kvalitatīva un savlaicīga izgatavošana",
      icon: <path d="M4 6h16v12H4zM8 6v12M16 6v12" />,
    },
    {
      title: "Uzstādīšana",
      desc: "Tīra un profesionāla montāža",
      icon: <path d="M6 18V8l6-4 6 4v10" />,
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <div className="bg-white border border-gray-200 rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Mūsu process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={`process-step-${i}`} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {step.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Jānis",
      role: "Dzīvokļa īpašnieks",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
      quote:
        "Ātra piegāde un lieliska kvalitāte. Logi būtiski uzlaboja siltumnoturību.",
    },
    {
      name: "Anna",
      role: "Īpašniece",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      quote: "Profesionāla komanda un ļoti tīra uzstādīšana. Iesaku!",
    },
    {
      name: "Mārtiņš",
      role: "Pasūtītājs",
      photo:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop",
      quote:
        "Konsultācija palīdzēja izvēlēties optimālu risinājumu tieši mūsu mājai.",
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Klientu atsauksmes</h2>
      <div className="bg-white border border-gray-200 rounded-2xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={`testimonial-${i}`}
              animate={{ opacity: i === index ? 1 : 0.5, scale: i === index ? 1 : 0.98 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className={`rounded-xl border ${
                i === index ? "border-blue-200 shadow-md" : "border-gray-100"
              } bg-white p-6`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-800">{t.name}</div>
                  <div className="text-sm text-slate-600">{t.role}</div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Cik ilgs ir izgatavošanas termiņš?",
      a: "Atkarībā no konfigurācijas parasti 2–4 nedēļas. Pīķa sezonās termiņš var nedaudz mainīties.",
    },
    {
      q: "Vai nodrošināt montāžu?",
      a: "Jā, mūsu sertificētās brigādes veic profesionālu un tīru uzstādīšanu visā Latvijā.",
    },
    {
      q: "Kāds ir garantijas termiņš?",
      a: "Ražojumiem un montāžai nodrošinām garantiju saskaņā ar līgumu un ražotāja noteikumiem.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
        Biežāk uzdotie jautājumi
      </h2>
      <div className="bg-white border border-gray-200 rounded-2xl divide-y">
        {faqs.map((f, i) => (
          <div key={`faq-${i}`} className="p-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-lg font-semibold text-slate-800">{f.q}</span>
              <svg
                className={`w-5 h-5 text-slate-600 transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {open === i && <p className="mt-3 text-slate-600">{f.a}</p>}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-200">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/vbvwdejj5/4b45.jpg?updatedAt=1758269759532')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative p-14 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Atrodiet savas ideālās žalūzijas</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">Uzticiet mērīšanu, izgatavošanu un uzstādīšanu profesionāļiem. Pieprasiet bezmaksas mērīšanu un individuālu cenu piedāvājumu jau šodien!</p>
          <div className="flex gap-3 justify-center">
            <a
              href="/kontakti"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Sazināties
            </a>
            <a
              href="tel:+37120886650"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition font-semibold"
            >
              Zvanīt: 20886650
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
