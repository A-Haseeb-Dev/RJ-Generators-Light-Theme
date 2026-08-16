"use client";

import { useState } from "react";
import { Calendar, Truck, Shield, Gauge, CheckCircle2, Clock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function RentPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    output: "",
    duration: "",
    site: "",
    details: "",
  });

  const updateField = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      "RENT A GENERATOR — NEW INQUIRY",
      "------------------------------",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Output: ${form.output}`,
      `Duration: ${form.duration}`,
      `Site: ${form.site}`,
      `Details: ${form.details}`,
    ]
      .filter((line) => !line.endsWith(": "))
      .join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors";
  const labelClass = "block text-sm font-bold text-zinc-900";

  const fleet = [
    { title: "Portable Units", output: "20kVA - 100kVA", desc: "Compact, quiet units ideal for events, small businesses, and short-term outages." },
    { title: "Mobile / Towable", output: "100kVA - 500kVA", desc: "Trailer-mounted, multi-voltage generators for construction sites and emergency deployment." },
    { title: "Heavy-Duty Diesel", output: "500kVA - 2500kVA", desc: "Containerized industrial units for factories, data centers, and continuous operation." },
    { title: "Prime & Backup Power", output: "Custom", desc: "Long-term prime power or full site backup, delivered, installed, and maintained by our team." },
  ];

  const steps = [
    { icon: <Calendar className="w-6 h-6" />, title: "Request A Quote", desc: "Tell us your kVA requirement, site, and duration. We respond with availability and pricing within hours." },
    { icon: <Truck className="w-6 h-6" />, title: "Nationwide Delivery", desc: "We deliver, position, fuel, and connect the unit to your site. No heavy lifting on your side." },
    { icon: <Gauge className="w-6 h-6" />, title: "24/7 Support", desc: "Round-the-clock monitoring and rapid response keep your rental running without interruption." },
    { icon: <Shield className="w-6 h-6" />, title: "Flexible Terms", desc: "Daily, weekly, monthly, or long-term contracts. Extend, swap, or return whenever you are ready." },
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
              src="/images/hero_generator_1_1786218289285.jpg"
              alt="Generator available for rent"
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
                Generator Rentals
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Rent power, when you need it. <span className="text-blue-400">Without the capex.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-300 max-w-2xl leading-relaxed mb-10"
            >
              Flexible short-term and long-term generator rentals — from portable units to heavy-duty
              industrial systems. Delivered, installed, and supported 24/7 by our team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#rent-form"
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Get A Rental Quote
              </a>
              <a
                href={buildWhatsAppUrl("Hello! I want to rent a generator from RJ Generators.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Chat On WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* Rental Fleet */}
        <section className="py-24 lg:py-32 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-0.5 bg-blue-600"></span>
                    <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                      Our Rental Fleet
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Power on demand, on your terms.</h2>
                  <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                    Whatever the size of your job, we have a unit ready to deploy — fully serviced, fuel-managed, and load-tested before it reaches your site.
                  </p>
                  <div className="bg-zinc-900 text-white p-8">
                    <Clock className="w-8 h-8 text-blue-400 mb-6" />
                    <h3 className="text-xl font-bold mb-3">24/7 Emergency Rental</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Unplanned outage? Our rapid-response fleet is available around the clock with priority deployment for critical sites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-6">
                  {fleet.map((item, i) => (
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
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="font-mono text-sm text-blue-600 font-bold uppercase tracking-wider mb-3">{item.output}</p>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Renting Works */}
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
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Renting is effortless.</h2>
              <p className="text-lg text-zinc-400">
                Four simple steps from quote to power — with a fully managed, hassle-free experience throughout.
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

        {/* Rental Form */}
        <section id="rent-form" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-blue-600"></span>
                  <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                    Get A Rental Quote
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Tell us what you need powered.</h2>
                <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                  Share your kVA requirement, site, and rental duration. Hit submit and your inquiry opens
                  directly in WhatsApp where our rental desk confirms availability and pricing — usually within hours.
                </p>
                <ul className="space-y-5">
                  {[
                    "Flexible daily, weekly & monthly terms",
                    "Nationwide delivery & installation",
                    "Fuel management available",
                    "24/7 monitoring & emergency response"
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
                <h3 className="text-2xl font-bold mb-8">Rent A Generator</h3>
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
                      <label htmlFor="output" className={labelClass}>Required Output (kVA) *</label>
                      <input required type="text" id="output" value={form.output} onChange={updateField("output")} className={inputClass} placeholder="e.g. 500" />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="duration" className={labelClass}>Rental Duration *</label>
                      <select required id="duration" value={form.duration} onChange={updateField("duration")} className={inputClass}>
                        <option value="">Select...</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Long-term (3+ months)</option>
                        <option>Emergency / Urgent</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="site" className={labelClass}>Site Location *</label>
                    <input required type="text" id="site" value={form.site} onChange={updateField("site")} className={inputClass} placeholder="City, State" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="details" className={labelClass}>Additional Details</label>
                    <textarea id="details" rows={4} value={form.details} onChange={updateField("details")} className={inputClass} placeholder="Site conditions, load profile, fuel requirements, or anything else we should know."></textarea>
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
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Need power right now?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Our rental desk is available Monday - Friday, 08:00 - 18:00 (EST), with 24/7 emergency deployment.
              Message us on WhatsApp and we will have a unit at your site fast.
            </p>
            <a
              href={buildWhatsAppUrl("Hello! I want to rent a generator from RJ Generators.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-blue-900 px-10 py-5 text-sm font-bold uppercase tracking-wider transition-colors shadow-xl shadow-blue-900/20"
            >
              Chat With The Rental Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
