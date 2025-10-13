"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsFooter() {
  return (
    <div className="mt-24 space-y-24">
      <OurProcess />
      <TrustHighlights />

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
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Pasūtījuma veikšanas process</h2>
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

function TrustHighlights() {
  const pillars = [
    {
      title: "Profesionāla uzstādīšana",
      description: "Sertificētas montāžas brigādes ar regulāru kvalitātes uzraudzību un darba drošības protokoliem.",
      icon: (
        <>
          <path d="M12 3l8 4-8 4-8-4 8-4z" />
          <path d="M4 13l8 4 8-4" />
          <path d="M4 17l8 4 8-4" />
        </>
      ),
    },
    {
      title: "Ražotāju garantijas",
      description: "Darbojamies tikai ar pārbaudītiem piegādātājiem, nodrošinot oficiālas 5+ gadu garantijas.",
      icon: (
        <>
          <path d="M12 20l-7-4V8l7-4 7 4v8l-7 4z" />
          <path d="M9 12l2 2 4-4" />
        </>
      ),
    },
    {
      title: "Skaidra komunikācija",
      description: "Projekta vadītājs informē par progresu katrā posmā – no konsultācijas līdz uzstādīšanai.",
      icon: (
        <>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M17 8h.01" />
          <path d="M12 8h.01" />
          <path d="M7 8h.01" />
        </>
      ),
    },
  ] as const;

  const stats = [
    { label: "Gadu pieredze projektos", value: "18+" },
    { label: "Realizēti objektu projekti", value: "820+" },
    { label: "Garantijas servisa izsaukumi atrisināti 48h laikā", value: "96%" },
  ] as const;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white border border-gray-200 rounded-2xl p-10">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Kāpēc klienti uzticas mums</h2>
            <p className="mt-3 text-slate-600">
              Apvienojam kvalitatīvas sistēmas ar caurskatāmu projektu vadību – droši, energoefektīvi risinājumi katram objektam.
            </p>
            <div className="mt-8 space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {pillar.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8">
            <h3 className="text-lg font-semibold text-emerald-800">Uzticamības indikatori</h3>
            <dl className="mt-6 space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/80 p-4 shadow-sm">
                  <dt className="text-sm font-medium text-emerald-700">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-xl border border-emerald-200 bg-white/90 p-4 text-sm text-slate-700">
              <p>
                Regulāri pārbaudām kvalitātes protokolus un sadarbojamies ar neatkarīgiem inženieriem, lai uzturētu augstu servisa līmeni.
              </p>
            </div>
          </div>
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
