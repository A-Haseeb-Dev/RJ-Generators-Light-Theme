"use client";

import { useState } from "react";
import { Wallet, Truck, BadgeCheck, Repeat, ImageIcon, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function SellPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    make: "",
    model: "",
    output: "",
    year: "",
    condition: "",
    location: "",
    details: "",
  });

  const updateField = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      "SELL YOUR GENERATOR — NEW INQUIRY",
      "------------------------------",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Make: ${form.make}`,
      `Model: ${form.model}`,
      `Output: ${form.output}`,
      `Year: ${form.year}`,
      `Condition: ${form.condition}`,
      `Location: ${form.location}`,
      `Details: ${form.details}`,
    ]
      .filter((line) => !line.endsWith(": "))
      .join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors";
  const labelClass = "block text-sm font-bold text-zinc-900";

  const weBuy = [
    { title: "New & Used Diesel", desc: "All makes and models from 5kVA to 3000kVA, running or non-running." },
    { title: "Portable & Mobile", desc: "Towable and containerized units for construction and events." },
    { title: "Gas & Dual-Fuel", desc: "Natural gas, LPG, and biogas generators." },
    { title: "Industrial & Marine", desc: "Heavy-duty, marine-grade, and custom-engineered systems." },
  ];

  const steps = [
    { icon: <ImageIcon className="w-6 h-6" />, title: "Send Us The Details", desc: "Tell us the make, model, kVA, and condition — or just send photos on WhatsApp." },
    { icon: <BadgeCheck className="w-6 h-6" />, title: "Get A Fair Valuation", desc: "Our team replies within hours with a transparent, market-based price. No pressure." },
    { icon: <Truck className="w-6 h-6" />, title: "Free Collection", desc: "We arrange free collection from your site — anywhere in the country." },
    { icon: <Wallet className="w-6 h-6" />, title: "Instant Payment", desc: "Get paid on the spot at collection, or apply trade-in credit toward your next unit." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-zinc-900 selection:bg-blue-500/30">
      <Header theme="dark" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/maintenance_technician_1786218881705.jpg"
              alt="Technician inspecting a generator we buy"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/40" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32 pb-12 lg:pt-40 lg:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-0.5 bg-blue-500"></span>
              <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                We Buy Generators
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Sell your generator. <span className="text-blue-400">Get paid fast.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-300 max-w-2xl leading-relaxed mb-10"
            >
              We buy all makes and models — new, used, or non-running. Send us the details, receive a fair
              market valuation within hours, and get paid on the spot at collection. No pressure, no hidden fees.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#sell-form"
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Get A Free Valuation
              </a>
              <a
                href={buildWhatsAppUrl("Hello! I want to sell my generator to RJ Generators.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Chat On WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* What We Buy */}
        <section className="py-24 lg:py-32 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-0.5 bg-blue-600"></span>
                    <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                      What We Buy
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Every make. Every model. Any condition.</h2>
                  <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                    From single-phase portable units to 3000kVA industrial systems — if it generates power, we will give you a fair price for it.
                  </p>
                  <div className="bg-zinc-900 text-white p-8">
                    <Repeat className="w-8 h-8 text-blue-400 mb-6" />
                    <h3 className="text-xl font-bold mb-3">Trade-In & Upgrade</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Upgrade to a newer, more efficient unit and we will deduct the value of your old generator from the price. One call handles everything.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-6">
                  {weBuy.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all group p-10"
                    >
                      <div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:text-blue-600 transition-colors">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 lg:py-32 bg-zinc-950 text-white border-b border-zinc-200">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500"></span>
                <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                  How It Works
                </span>
                <span className="w-12 h-0.5 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Selling has never been easier.</h2>
              <p className="text-lg text-zinc-400">
                A simple four-step process, handled entirely by our team. You never lift a finger.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 p-10 relative overflow-hidden group hover:border-blue-500/50 transition-colors"
                >
                  <div className="absolute top-6 right-6 font-mono text-4xl font-bold text-zinc-800 group-hover:text-blue-600/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-8">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sell Form */}
        <section id="sell-form" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-blue-600"></span>
                  <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                    Get A Valuation
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Tell us about your generator.</h2>
                <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                  Fill in the details of your unit and hit submit. Your inquiry opens directly in WhatsApp where our
                  buying team will confirm your valuation — usually within hours.
                </p>
                <ul className="space-y-5">
                  {[
                    "Instant market-based valuation",
                    "No pressure, no hidden fees",
                    "Free collection & same-day payment",
                    "Trade-in credit available"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-zinc-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-50 p-8 lg:p-12 border border-zinc-200"
              >
                <h3 className="text-2xl font-bold mb-8">Sell Your Generator</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input required type="text" id="name" value={form.name} onChange={updateField("name")} className={inputClass} placeholder="John Doe" />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="phone" className={labelClass}>Phone *</label>
                      <input required type="tel" id="phone" value={form.phone} onChange={updateField("phone")} className={inputClass} placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input type="email" id="email" value={form.email} onChange={updateField("email")} className={inputClass} placeholder="john@company.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="make" className={labelClass}>Make *</label>
                      <input required type="text" id="make" value={form.make} onChange={updateField("make")} className={inputClass} placeholder="e.g. Caterpillar" />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="model" className={labelClass}>Model</label>
                      <input type="text" id="model" value={form.model} onChange={updateField("model")} className={inputClass} placeholder="e.g. 3412" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-3 sm:col-span-1">
                      <label htmlFor="output" className={labelClass}>Output (kVA) *</label>
                      <input required type="text" id="output" value={form.output} onChange={updateField("output")} className={inputClass} placeholder="e.g. 500" />
                    </div>
                    <div className="space-y-2 col-span-3 sm:col-span-1">
                      <label htmlFor="year" className={labelClass}>Year</label>
                      <input type="text" id="year" value={form.year} onChange={updateField("year")} className={inputClass} placeholder="e.g. 2015" />
                    </div>
                    <div className="space-y-2 col-span-3 sm:col-span-1">
                      <label htmlFor="condition" className={labelClass}>Condition *</label>
                      <select required id="condition" value={form.condition} onChange={updateField("condition")} className={inputClass}>
                        <option value="">Select...</option>
                        <option>New</option>
                        <option>Used — Running</option>
                        <option>Used — Non-Running</option>
                        <option>For Parts / Scrap</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className={labelClass}>Unit Location *</label>
                    <input required type="text" id="location" value={form.location} onChange={updateField("location")} className={inputClass} placeholder="City, State" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="details" className={labelClass}>Additional Details</label>
                    <textarea id="details" rows={4} value={form.details} onChange={updateField("details")} className={inputClass} placeholder="Running hours, service history, photos you can share, or anything else we should know."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors">
                    Submit On WhatsApp
                  </button>
                  <p className="text-xs text-zinc-500 text-center mt-4">
                    Submitting opens WhatsApp with your details pre-filled — no account needed.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-24">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Prefer to talk it through?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Our buying desk is available Monday - Friday, 08:00 - 18:00 (EST). Send us a photo of your unit on WhatsApp and get a valuation on the spot.
            </p>
            <a
              href={buildWhatsAppUrl("Hello! I want to sell my generator to RJ Generators.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-blue-900 px-10 py-5 text-sm font-bold uppercase tracking-wider transition-colors shadow-xl shadow-blue-900/20"
            >
              Chat With The Buying Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
